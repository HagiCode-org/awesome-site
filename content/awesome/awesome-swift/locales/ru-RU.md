# Awesome Swift
 
<!-- 

PLEASE DO NOT UPDATE THIS FILE, UPDATE CONTENTS.JSON INSTEAD. THANK YOU :-)

 -->



| Awesome | Linux | Projects | Updated |
|:-------:|:-----:|:--------:|:-------:|
| [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) | :penguin: | 1107 | August 03, 2026 |

В сотрудничестве с:

[![Codemotion](https://github.com/matteocrippa/awesome-swift/blob/master/.github/images/codemotion_logo.png?raw=true)](https://codemo.tech/partners)



### Содержание

- [Руководства](#guides)
  - [Рассылка](#newsletter)
  - [Официальные руководства](#official-guides)
  - [Руководства по стилю](#style-guides)
  - [Сторонние руководства](#third-party-guides)
- [Шаблоны проектов](#boilerplates)
- [REPL](#repl)
- [Поддержка редакторов](#editor-support)
  - [Emacs](#emacs)
  - [Google Colaboratory](#google-colaboratory)
  - [Vim](#vim)
- [Бенчмарки](#benchmark)
- [Конвертеры](#converters)
- [Другие подборки](#other-awesome-lists)
- [Менеджеры зависимостей](#dependency-managers)
- [Паттерны](#patterns)
- [Разное](#misc)
- [Библиотеки](#libs)
  - [Доступность](#accessibility)
  - [ИИ](#ai)
  - [Алгоритмы](#algorithm)
  - [Аналитика](#analytics)
  - [Анимация](#animation)
  - [API](#api)
  - [Маршрутизация приложений](#app-routing)
  - [App Store](#app-store)
  - [Аудио](#audio)
  - [Дополненная реальность](#augmented-reality)
  - [Аутентификация](#authentication)
  - [Боты](#bots)
  - [Кэш](#cache)
  - [Диаграммы](#chart)
  - [Чат](#chat)
  - [Цвета](#colors)
  - [Командная строка](#command-line)
  - [Параллелизм](#concurrency)
  - [Валюта](#currency)
  - [Управление данными](#data-management)
    - [CBOR](#cbor)
    - [Core Data](#core-data)
    - [CSV](#csv)
    - [Firebase](#firebase)
    - [GraphQL](#graphql)
    - [JSON](#json)
    - [Хранилища «ключ—значение»](#key-value-store)
    - [MongoDB](#mongodb)
    - [Несколько баз данных](#multi-database)
    - [ORM](#orm)
    - [Другие данные](#other-data)
    - [Realm](#realm)
    - [Драйверы SQL](#sql-drivers)
    - [SQLite](#sqlite)
    - [TOML](#toml)
    - [XML](#xml)
    - [YAML](#yaml)
    - [ZIP](#zip)
  - [Дата и время](#date)
  - [Внедрение зависимостей](#dependency-injection)
  - [Устройства](#device)
  - [Документация](#documentation)
  - [Электронная почта](#email)
  - [Встраиваемые системы](#embedded-systems)
    - [Периферийные устройства](#peripherals)
  - [События](#events)
  - [Файлы](#files)
  - [Шрифты](#fonts)
  - [Игровой движок](#game-engine)
    - [2D](#game-engine-2d)
  - [Игры](#games)
  - [Жесты](#gesture)
  - [Оборудование](#hardware)
    - [3D Touch](#3d-touch)
    - [Bluetooth](#bluetooth)
    - [Камера](#camera)
      - [Штрихкоды](#barcode)
    - [Тактильная отдача](#haptic-feedback)
    - [iBeacon](#ibeacon)
    - [Датчики](#sensors)
  - [Изображения](#images)
  - [Кодирование «ключ—значение»](#key-value-coding)
  - [Клавиатура](#keyboard)
  - [Наборы инструментов](#kit)
  - [Компоновка](#layout)
    - [Auto Layout](#auto-layout)
  - [Локализация](#localization)
  - [Местоположение](#location)
  - [Журналирование](#logging)
  - [Карты](#maps)
  - [Математика](#math)
  - [Обработка естественного языка](#natural-language-processing)
  - [Сеть](#network)
    - [HTML](#html)
    - [Протоколы обмена сообщениями](#messaging-protocol)
    - [SOAP](#soap)
    - [Сокеты](#socket)
    - [Веб-сервер](#webserver)
  - [OCR](#ocr)
  - [Оптимизация](#optimization)
  - [PDF](#pdf)
  - [Качество кода](#quality)
  - [Скрипты](#scripting)
  - [SDK](#sdk)
  - [Безопасность](#security)
    - [Криптография](#cryptography)
    - [Keychain](#keychain)
  - [Потоковая передача](#streaming)
  - [Стилизация](#styling)
  - [SVG](#svg)
  - [Система](#system)
  - [Тестирование](#testing)
    - [Моки](#mock)
  - [Текст](#text)
  - [Потоки](#thread)
  - [UI](#ui)
    - [Предупреждения](#alert)
    - [Размытие](#blur)
    - [Кнопки](#button)
    - [Календарь](#calendar)
    - [Карточки](#cards)
    - [Формы](#form)
    - [HUD](#hud)
    - [Подписи](#label)
    - [Меню](#menu)
    - [Пагинация](#pagination)
    - [Платежи](#payment)
    - [Разрешения](#permissions)
    - [Полосы прокрутки](#scroll-bars)
    - [StackView](#stackview)
    - [Переключатели](#switch)
    - [Вкладки](#tab)
    - [Шаблоны](#template)
    - [Текстовые поля](#textfield)
    - [Переходы](#transition)
    - [3D](#ui-3d)
    - [UICollectionView](#uicollectionview)
    - [UITableView](#uitableview)
    - [Обучение](#walkthrough)
  - [Утилиты](#utility)
  - [Проверка данных](#validation)
    - [Телефонные номера](#phone-numbers)
  - [Управление версиями](#version-manager)
  - [Видео](#video)
- [Бессерверные приложения](#serverless)

## Руководства
*Подборка отличных руководств по Swift.*

### Рассылка
[вернуться к началу](#readme) 

* [Open Source Updates for Swift Projects](https://ossp-updates.beehiiv.com/) - Двухнедельная рассылка с последними новостями о популярных и малоизвестных проектах с открытым исходным кодом, написанных на Swift или связанных с ним.

### Официальные руководства
[вернуться к началу](#readme) 

* [API Design Guidelines](https://www.swift.org/documentation/api-design-guidelines/) - Официальные рекомендации по проектированию API на Swift.
* [Apple eBook](https://books.apple.com/us/book/the-swift-programming-language-swift-5-7/id881256329) - Официальная электронная книга Apple для начинающих изучать Swift.
* [Getting Started](https://www.swift.org/getting-started/) - Информация о том, как пользоваться языком программирования Swift.
* [Introducing SwiftUI](https://developer.apple.com/tutorials/swiftui) - Официальное руководство по SwiftUI: более четырёх часов материалов и интерактивные уроки.

### Руководства по стилю
[вернуться к началу](#readme) 

* [Airbnb](https://github.com/airbnb/swift) - Официальное руководство по стилю Airbnb.
* [Google](https://google.github.io/swift/) - Это руководство основано на превосходном руководстве по стилю стандартной библиотеки Swift от Apple и также учитывает отзывы о применении Swift в нескольких проектах Google.
* [LinkedIn](https://github.com/linkedin/swift-style-guide) - Официальное руководство по стилю LinkedIn.
* [Raywenderlich](https://github.com/kodecocodes/swift-style-guide) - Руководство Raywenderlich, обязательное к прочтению.

### Сторонние руководства
[вернуться к началу](#readme) 

* [30 Days of Swift](https://github.com/allenwong/30DaysofSwift) - Отличный 30-дневный учебный курс.
* [About Swift](https://github.com/NicolaLancellotti/about-swift) - Плейграунд для изучения языка Swift.
* [Awesome Swift Education](https://github.com/hsavit1/Awesome-Swift-Education) - Структурированный список основных тем языка Swift.
* [Conferences.digital](https://github.com/zagahr/Conferences.digital) - Смотрите видеозаписи конференций в нативном приложении macOS.
* [Developing iOS Apps with Swift](https://podcasts.apple.com/us/podcast/developing-ios-11-apps-with-swift/id1315130780) - Курс Стэнфордского университета, который ведёт Пол Хегарти.
* [Hacking With Swift](https://www.hackingwithswift.com) - Бесплатный полный курс разработки приложений из 30 практических проектов.
* [Ray Wenderlich Tutorials, Videos, Podcasts and books](https://www.kodeco.com) - Высококачественные учебные материалы по программированию.
* [Swift & SwiftUI Tutorials](http://ww1.janeshswift.com) - Изучение SwiftUI с лёгкостью.
* [Swift Education](https://github.com/swifteducation) - Сообщество преподавателей, делящихся материалами по обучению Swift и разработке приложений.
* [swift-tips](https://github.com/vincent-pradeilles/swift-tips) - Подборка полезных советов от Винсента Прадейя.
* [SwiftDoc](https://sosumi.ai/) - Автоматически сгенерированная документация.
* [SwiftGuide CN](https://github.com/ipader/SwiftGuide) - Руководство по Swift на китайском языке.
* [SwiftTips](https://github.com/JohnSundell/SwiftTips) - Подборка полезных советов от Джона Санделла.

## Шаблоны проектов

* [iOS project template](https://github.com/messeb/ios-project-template) - Шаблон проекта iOS с задачами fastlane, заданиями Travis CI и интеграцией с GitHub для Codecov, HoundCI для SwiftLint и Danger.
* [Model-View-Presenter template](https://github.com/onl1ner/ios-mvp-template) - Гибкий и простой шаблон, ускоряющий разработку iOS-приложения на основе шаблона MVP.
* [Swift Module Template](https://github.com/fulldecent/swift6-module-template) - Готовая отправная точка для создания отличных повторно используемых модулей.

## REPL

* [Online Swift Playground](http://online.swiftplayground.run) - Онлайн-плейграунд Swift.
* [SwiftFiddle](https://swiftfiddle.com) - Плейграунд для написания, обмена и встраивания кода на Swift.

## Поддержка редакторов
*Поддержка ваших любимых редакторов.*

### Emacs
[вернуться к началу](#readme) 

* [swift-mode](https://github.com/swift-emacs/swift-mode) - Поддержка Emacs, включая частичную интеграцию с Flycheck для ошибок.

### Google Colaboratory
[вернуться к началу](#readme) 

* [swift-colab](https://github.com/philipturner/swift-colab) - Запускайте Swift в браузере.

### Vim
[вернуться к началу](#readme) 

* [swift-vim](https://github.com/keith/swift.vim) - Файлы среды выполнения Vim.
* [vim-polyglot](https://github.com/sheerun/vim-polyglot) - Языковой пакет для Vim, включающий vim-swift.

## Бенчмарки

* [xcprofiler](https://github.com/giginet/xcprofiler) - Утилита командной строки для профилирования времени компиляции.

## Конвертеры

* [Swiftify](https://swiftify.com/#/converter/code/) - Онлайн-конвертер кода Objective-C в Swift и расширение для Xcode.
* [Zolang](https://github.com/Zolang/Zolang) :penguin: - DSL для генерации кода на нескольких языках программирования.

## Другие подборки
*Посмотрите приложения в этих проектах:*
* [Awesome iOS Interview](https://github.com/dashvlas/awesome-ios-interview) - Список вопросов, которые помогут подготовиться к собеседованию.
* [awesome-macOS](https://github.com/iCHAIT/awesome-macOS) - Подборка отличных приложений, программ, инструментов и других полезных вещей для macOS.
* [example-ios-apps](https://github.com/jogendra/example-ios-apps) - Отличный список для новичков, изучающих разработку iOS, и разработчиков iOS, которым нужны примеры приложений или функций.
* [open-source-ios-apps](https://github.com/dkhamsing/open-source-ios-apps) - Совместный список приложений iOS с открытым исходным кодом.
* [open-source-mac-os-apps](https://github.com/serhii-londar/open-source-mac-os-apps) - Отличный список приложений macOS с открытым исходным кодом.

## Менеджеры зависимостей
*Менеджеры зависимостей для Swift.*
* [Accio](https://github.com/JamitLabs/Accio) - Менеджер зависимостей для iOS и других платформ на основе SwiftPM с улучшениями по сравнению с Carthage.
* [Carthage](https://github.com/Carthage/Carthage) - Новый менеджер зависимостей.
* [CocoaPods](https://github.com/CocoaPods/CocoaPods) - Самый популярный менеджер зависимостей.
* [Mint](https://github.com/yonaskolb/Mint) - Менеджер пакетов, устанавливающий и запускающий инструменты командной строки на Swift.
* [swift-package-manager](https://github.com/swiftlang/swift-package-manager) - SPM — менеджер пакетов языка программирования Swift.
* [Swiftly](https://github.com/swiftlang/swiftly) - Установщик цепочки инструментов Swift CLI для установки разных версий Swift.

## Паттерны

* [App Architecture](https://github.com/objcio/app-architecture) - Пример кода из книги «Архитектура приложений».
* [CleanArchitectureRxSwift](https://github.com/sergdort/ModernCleanArchitectureSwiftUI) - Пример чистой архитектуры приложения iOS с использованием RxSwift.
* [Design-Patterns-In-Swift](https://github.com/ochococo/Design-Patterns-In-Swift) - Шаблоны проектирования.
* [GoodReactor](https://github.com/GoodRequest/GoodReactor) - ⚛️ GoodReactor — основанный на Redux фреймворк Reactor для взаимодействия между View Model, View Controller и Coordinator.
* [Reactant](https://github.com/Brightify/Reactant) - Реактивная архитектура для iOS.
* [ReduxUI](https://github.com/gre4ixin/ReduxUI) - Фреймворк Redux для удобного использования со SwiftUI.
* [SimplexArchitecture](https://github.com/Ryu0118/swiftui-simplex-architecture) - Простая архитектура, отделяющая изменения состояния от представления SwiftUI.
* [Spin](https://github.com/Spinners/Spin.Swift) - Универсальная реализация Feedback Loop для RxSwift, ReactiveSwift и Combine.
* [StateViewController](https://github.com/davidask/StateViewController) - Композиция контроллеров UIVIewController с состоянием — средство MVC от Massive View Controllers.
* [SwiftUI Atom Properties](https://github.com/ra1028/swiftui-atom-properties) - Реактивная привязка данных и библиотека внедрения зависимостей для SwiftUI и Concurrency.
* [The Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture) - Библиотека для последовательного и понятного создания приложений с упором на композицию, тестирование и удобство разработки.
* [Viperit](https://github.com/ferranabello/Viperit) - Фреймворк Viper для iOS.

## Разное
*Разные проекты, связанные со Swift.*
* [Beak](https://github.com/yonaskolb/Beak) - Интерфейс командной строки для скриптов Swift.
* [BetterCodable](https://github.com/marksands/BetterCodable) - Расширьте возможности структур `Codable` с помощью обёрток свойств. Они позволяют обойтись без пользовательской реализации `init(from decoder: Decoder) throws` и связанного с ней шаблонного кода.
* [CodableWrappers](https://github.com/GottaGetSwifty/CodableWrappers) - Набор PropertyWrapper, упрощающих пользовательскую сериализацию типов Codable.
* [Forked](https://github.com/drewmccormack/Forked) - Обобщённый подход к управлению общими данными в приложениях Swift, в том числе для приложений с локальным хранением данных.
* [Fugen](https://github.com/almazrafi/Fugen) - Инструмент командной строки для экспорта ресурсов и генерации кода из файлов Figma.
* [MemberwiseInit](https://github.com/gohanlon/swift-memberwise-init-macro) - Макрос Swift `@MemberwiseInit`, который чаще позволяет получить нужный инициализатор, сохраняя безопасную семантику инициализаторов Swift по умолчанию.
* [Model2App](https://github.com/Q-Mobile/Model2App) - Превратите модель данных в работающее CRUD-приложение.
* [Surmagic](https://github.com/gurhub/surmagic) - Легко создавайте XCFramework. Инструмент командной строки создаёт XCFramework сразу для нескольких платформ: iOS, Mac Catalyst, tvOS, macOS и watchOS.
* [SwagGen](https://github.com/yonaskolb/SwagGen) :penguin: - Инструмент командной строки для генерации REST API по спецификации Swagger на основе шаблонов Stencil.
* [Swiftbrew](https://github.com/swiftbrew/Swiftbrew) - Homebrew для пакетов Swift.
* [SwiftGen](https://github.com/SwiftGen/SwiftGen) - Набор инструментов для автоматической генерации кода для различных ресурсов проекта.
* [SwiftKit](https://github.com/SvenTiigi/SwiftKit) - Начните работу над своим следующим фреймворком Swift с открытым исходным кодом 📦.
* [SwiftPlate](https://github.com/JohnSundell/SwiftPlate) - Легко создавайте кроссплатформенные проекты фреймворков из командной строки.
* [Toybox](https://github.com/giginet/Toybox) - Упрощённое управление плейграундами Xcode.
* [Tuist](https://github.com/tuist/tuist) - Инструмент командной строки с открытым исходным кодом для масштабного создания, сопровождения и работы с проектами Xcode.
* [xc](https://github.com/s2mr/xc) - Инструмент для открытия файла проекта Xcode указанной версии.
* [xcbeautify](https://github.com/cpisciotta/xcbeautify) - Небольшой инструмент для форматирования вывода xcodebuild.
* [XcodeGen](https://github.com/yonaskolb/XcodeGen) - Инструмент для генерации проектов Xcode по файлу YAML и каталогу проекта.
* [xcodeproj](https://github.com/tuist/xcodeproj) - Библиотека для чтения, обновления и записи проектов и рабочих областей Xcode.

## Библиотеки
*Подборка фрагментов кода и библиотек для проектов на Swift.*

### Доступность
[вернуться к началу](#readme) 

* [Capable](https://github.com/chrs1885/Capable) - Отслеживайте настройки доступности, используйте контрастные цвета и масштабируемые шрифты, чтобы люди с инвалидностью могли пользоваться вашим приложением.

### ИИ
*Библиотеки для проектов на основе ИИ (машинное обучение, нейронные сети и т. д.).* [вернуться к началу](#readme)

* [CoreML-Models](https://github.com/likedan/Awesome-CoreML-Models) - Подборка уникальных моделей Core ML.
* [DL4S](https://github.com/palle-k/DL4S) - Автоматическое дифференцирование, быстрые операции с тензорами и динамические нейронные сети — от CNN и RNN до трансформеров.
* [EdgeRunner](https://github.com/christopherkarani/EdgeRunner) - Быстрый локальный запуск LLM на Apple Silicon. Полностью создан на Swift и Metal.
* [Espresso](https://github.com/christopherkarani/Espresso) - Компиляция трансформеров непосредственно для Neural Engine от Apple.
* [Fazm](https://github.com/m13v/fazm) - Управляемый голосом ИИ-агент для macOS, использующий API доступности и ScreenCaptureKit.
* [Open Agent SDK](https://github.com/terryso/open-agent-sdk-swift) - Открытый SDK для ИИ-агентов с полным циклом агента, 34 встроенными инструментами, оркестрацией субагентов, интеграцией MCP и поддержкой нескольких поставщиков LLM.
* [OpenAI](https://github.com/MacPaw/OpenAI) - Пакет Swift для публичного API OpenAI.
* [swift-coding-agent](https://github.com/ivan-magda/swift-coding-agent) - Терминальный агент для программирования с субагентами и уплотнением контекста.

### Алгоритмы
[вернуться к началу](#readme)

* [Algorithm](https://github.com/CosmicMind/Algorithm) - Набор инструментов для написания алгоритмов и моделей вероятностей.
* [BTree](https://github.com/attaswift/BTree) - Быстрые отсортированные коллекции Swift на основе B-деревьев в памяти.
* [swift-algorithm-club](https://github.com/kodecocodes/swift-algorithm-club) - Алгоритмы и структуры данных с пояснениями.
* [SwiftLCS](https://github.com/Frugghi/SwiftLCS) :penguin: - Реализация алгоритма наибольшей общей подпоследовательности (LCS).

### Аналитика
*Библиотеки аналитики для удобного отслеживания использования приложения.* [вернуться к началу](#readme)

* [Aptabase](https://github.com/aptabase/aptabase) - Аналитика для приложений Swift с открытым исходным кодом: конфиденциальная и простая.
* [Scout](https://github.com/kasianov-mikhail/scout) - SDK для производственного журналирования приложений iOS с CloudKit в качестве серверной части.
* [Tracker Aggregator](https://github.com/kafejo/Tracker-Aggregator) - Универсальный слой абстракции аналитики.
* [Umbrella](https://github.com/devxoul/Umbrella) - Слой абстракции аналитики.

### Анимация
*Библиотеки для создания анимации.* [вернуться к началу](#readme)

* [Advance](https://github.com/timdonnelly/Advance) - Мощный фреймворк анимации для iOS, tvOS и OS X.
* [AnimatedGradient](https://github.com/exyte/AnimatedGradient) - Библиотека анимированных линейных градиентов на SwiftUI.
* [ChainPageCollectionView](https://github.com/jindulys/ChainPageCollectionView) - Необычная двухуровневая компоновка и анимация коллекции.
* [CocoaSprings](https://github.com/MacPaw/CocoaSprings) - Интерактивные пружинные анимации для iOS и macOS.
* [Comets](https://github.com/cruisediary/Comets) - Анимация частиц.
* [Ease](https://github.com/roberthein/Ease) - Анимируйте что угодно с помощью Ease.
* [EasyAnimation](https://github.com/icanzilb/EasyAnimation) - Библиотека, раскрывающая новые возможности `UIView.animateWithDuration(_:, animations:...)`.
* [Elephant](https://github.com/s2mr/Elephant) - Элегантный набор средств для анимации SVG.
* [FlightAnimator](https://github.com/AntonTheDev/FlightAnimator) - Естественная блочная система Core Animation.
* [Gemini](https://github.com/shoheiyokoyama/Gemini) - Богатый набор анимаций на основе прокрутки.
* [IBAnimatable](https://github.com/IBAnimatable/IBAnimatable) - Проектируйте и прототипируйте интерфейс, взаимодействие, навигацию, переходы и анимацию готовых к App Store приложений в Interface Builder с помощью IBAnimatable.
* [Interpolate](https://github.com/marmelroy/Interpolate) - Фреймворк интерполяции для создания интерактивной анимации, управляемой жестами.
* [lottie-ios](https://github.com/airbnb/lottie-ios) - Библиотека iOS для нативного отображения векторной анимации After Effects.
* [Pastel](https://github.com/cruisediary/Pastel) - Эффект анимированного градиента, как в Instagram.
* [Poi](https://github.com/HideakiTouhara/Poi) - Poi позволяет создавать карточный интерфейс в стиле Tinder, используя его аналогично UITableView.
* [Presentation](https://github.com/hyperoslo/Presentation) - Библиотека для создания обучающих материалов, заметок о выпусках и анимированных страниц.
* [Pulsator](https://github.com/shu223/pulsator) - Пульсирующая анимация для iOS.
* [Sica](https://github.com/cats-oss/Sica) - Простая интерфейсная Core Animation. Запускайте типобезопасную анимацию последовательно или параллельно.
* [Spring](https://github.com/MengTo/Spring) - Библиотека для упрощения анимации в iOS.
* [SpriteKitEasingSwift](https://github.com/craiggrummitt/SpriteKitEasingSwift) - Улучшенное сглаживание анимации для SpriteKit.
* [spruce-ios](https://github.com/willowtreeapps/spruce-ios) - Создавайте хореографию анимаций на экране.
* [Stellar](https://github.com/AugustRush/Stellar) - Библиотека физической анимации.
* [TheAnimation](https://github.com/marty-suzuki/TheAnimation) - Типобезопасная обёртка CAAnimation, помогающая избежать значений неверного типа.
* [ViewAnimator](https://github.com/marcosgriselli/ViewAnimator) - Оживите интерфейс всего одной строкой.
* [YapAnimator](https://github.com/yapstudios/YapAnimator) - Быстрая и простая система анимации на основе физики.

### API
*Лёгкий доступ к сторонним API.* [вернуться к началу](#readme)

* [GitHubAPI](https://github.com/serhii-londar/GithubAPI) - Реализация GitHub REST API v3.
* [GitHubRestAPISwiftOpenAPI](https://github.com/Wei18/github-rest-api-swift-openapi) - Автоматически сгенерированный клиент GitHub REST API на Swift по спецификации OpenAPI.
* [PXGoogleDirections](https://github.com/poulpix/PXGoogleDirections) - Вспомогательная библиотека для Google Directions API.
* [RandomUserSwift](https://github.com/dingwilson/RandomUserSwift) - Фреймворк для генерации случайных пользователей — неофициальный SDK для randomuser.me.
* [reddift](https://github.com/sonsongithub/reddift) - Обёртка API Reddit.
* [SwiftDisc](https://github.com/M1tsumi/SwiftDisc) - Библиотека Discord API для ботов и интеграций.
* [Swifter Twitter](https://github.com/mattdonnelly/Swifter) - Фреймворк Twitter.
* [Swiftkube](https://github.com/swiftkube/client) :penguin: - Клиент Kubernetes на Swift.
* [SwiftlySalesforce](https://github.com/mike4aday/SwiftlySalesforce) - Фреймворк для быстрой разработки нативных приложений iOS с интеграцией Salesforce.
* [SwiftyInsta](https://github.com/TheM4hd1/SwiftyInsta) - Закрытый REST API Instagram без токенов.
* [YouTubeKit](https://github.com/b5i/YouTubeKit) - Работа с API YouTube без ключа API.

### Маршрутизация приложений
*Системы внутренней маршрутизации приложений.* [вернуться к началу](#readme)

* [Appz](https://github.com/SwiftKitz/Appz) - Легко запускайте внешние приложения и переходите по диплинкам.
* [Crossroad](https://github.com/giginet/Crossroad) - :oncoming_bus: Crossroad — маршрутизатор URL для работы с пользовательскими схемами URL.
* [LightRoute](https://github.com/SpectralDragon/LiteRoute) - Маршрутизация между модулями VIPER.
* [Linker](https://github.com/MaksimKurpa/Linker) - Лёгкий способ обрабатывать внутренние и внешние диплинки в iOS.
* [MonarchRouter](https://github.com/nikans/MonarchRouter) - Декларативная маршрутизация на основе состояния и URL. Сложные автоматические переходы между иерархиями View Controller. Проверенные временем соглашения серверной разработки.
* [RxFlow](https://github.com/RxSwiftCommunity/RxFlow) - RxFlow — фреймворк навигации для приложений iOS на основе паттерна Reactive Flow Coordinator.
* [SwiftCurrent](https://github.com/wwt/SwiftCurrent) - Управляйте сложными рабочими процессами везде, где можно собирать Swift. Есть встроенная поддержка UIKit, Storyboards и SwiftUI.
* [SwiftRouter](https://github.com/skyline75489/SwiftRouter) - Маршрутизатор URL для iOS.
* [SwiftUIRoutes](https://github.com/gabriel/swiftui-routes) - Минималистичный и гибкий маршрутизатор для приложений SwiftUI.
* [URLNavigator](https://github.com/devxoul/URLNavigator) - Элегантная маршрутизация URL.

### App Store
*Библиотеки для работы с App Store, встроенными покупками и проверкой чеков.* [вернуться к началу](#readme)

* [Apphud](https://github.com/apphud/ApphudSDK) - Лёгкая библиотека для удобного управления автоматически продлеваемыми подписками без необходимости в серверной части.
* [AppReview](https://github.com/mezhevikin/AppReview) - Небольшая библиотека для запроса отзыва в App Store через SKStoreReviewController.
* [Flare](https://github.com/space-code/flare) - Фреймворк, упрощающий встроенные покупки в iOS, macOS, tvOS и watchOS, с полной поддержкой StoreKit 1 и StoreKit 2.
* [InAppPurchase](https://github.com/jinSasaki/InAppPurchase) - Простой, лёгкий и безопасный фреймворк для встроенных покупок.
* [merchantkit](https://github.com/benjaminmayo/merchantkit) - Современный фреймворк управления встроенными покупками для iOS.
* [SwiftyStoreKit](https://github.com/bizz84/SwiftyStoreKit) - Лёгкий фреймворк для встроенных покупок.

### Аудио
*Библиотеки для работы со звуком.* [вернуться к началу](#readme)

* [AudioKit](https://github.com/audiokit/AudioKit) - Мощный синтез, обработка и анализ звука без сложного порога входа.
* [AudioPlayer](https://github.com/delannoyk/AudioPlayer) - Обёртка AVPlayer с несколькими полезными функциями.
* [AudioPlayerSwift](https://github.com/tbaranes/AudioPlayerSwift) - Простой класс для воспроизведения звука (базового и расширенного уровня) в приложениях iOS, OS X и tvOS.
* [Beethoven](https://github.com/vadymmarkov/Beethoven) - Библиотека обработки звука для определения высоты музыкальных сигналов.
* [FDSoundActivatedRecorder](https://github.com/fulldecent/FDSoundActivatedRecorder) - Начинает запись, когда пользователь говорит.
* [FDWaveformView](https://github.com/fulldecent/FDWaveformView) - Простой способ отображать звуковую волну в приложении.
* [FluidAudio](https://github.com/FluidInference/FluidAudio) - SDK для интеллектуальной обработки звука в реальном времени на устройствах iOS/macOS (диаризация, идентификация, VAD, разделение, эмбеддинги, ASR); модели CoreML конвертируются напрямую из PyTorch для использования производительности Apple Neural Engine.
* [ModernAVPlayer](https://github.com/noreasonprojects/ModernAVPlayer) - AVPlayer с сохранением состояния, возобновляющий воспроизведение после проблем с сетью, в том числе в фоновом режиме.
* [MusicKit](https://github.com/0thernet/MusicKit) - Фреймворк для создания и преобразования музыки.
* [Soundable](https://github.com/lcardevnas/Soundable) - Позволяет легко воспроизводить отдельные звуки и последовательности звуков.
* [SwiftAudioPlayer](https://github.com/tanhakabir/SwiftAudioPlayer) - Простой аудиоплеер для iOS: потоковая передача и обработка звука в реальном времени с помощью AVAudioEngine.
* [SwiftySound](https://github.com/adamcichy/SwiftySound) - Простая библиотека, позволяющая воспроизводить звуки одной строкой кода.
* [voice-overlay-ios](https://github.com/algolia/voice-overlay-ios) - Оверлей, запрашивающий у пользователя разрешение на голосовой ввод и отображающий распознанный текст в настраиваемом интерфейсе.

### Дополненная реальность
[вернуться к началу](#readme)

* [ARHeadsetKit](https://github.com/philipturner/ARHeadsetKit) - Высокоуровневый фреймворк, использующий Google Cardboard за 5 долларов для имитации Microsoft HoloLens.
* [ARKit-CoreLocation](https://github.com/AndrewHartAR/ARKit-CoreLocation) - Сочетает высокую точность AR с масштабом данных GPS.
* [ARKit-Navigation](https://github.com/chriswebb09/ARKitNavigationDemo) - Навигация в дополненной реальности с MapKit.
* [ARVideoKit](https://github.com/AFathi/ARVideoKit) - Захват и запись видео, фотографий, Live Photos и GIF с ARKit.

### Аутентификация
*Простой способ управлять аутентификацией в приложениях.* [вернуться к началу](#readme)

* [Cely](https://github.com/cely-tools/Cely) - Фреймворк входа в систему по принципу «подключи и используй».
* [LinkedInSignIn](https://github.com/serhii-londar/LinkedInSignIn) - Простой контроллер представления для входа и получения токена доступа LinkedIn.
* [LoginKit](https://github.com/IcaliaLabs/LoginKit) - LoginKit — быстрый и простой способ добавить в приложение iOS интерфейс входа и регистрации.
* [ReCaptcha](https://github.com/fjcaetano/ReCaptcha) - Невидимая или видимая ReCaptcha для iOS.
* [SpotifyLogin](https://github.com/spotify/SpotifyLogin) - Аутентификация через API Spotify.

### Боты
*Библиотеки для создания ботов.* [вернуться к началу](#readme)

* [Telegram Bot SDK](https://github.com/rapierorg/telegram-bot-swift) :penguin: - Неофициальный SDK.
* [Telegrammer](https://github.com/givip/Telegrammer) :penguin: - Фреймворк с открытым исходным кодом для разработчиков ботов Telegram. Построен на Apple/SwiftNIO и демонстрирует высокую производительность.

### Кэш
[вернуться к началу](#readme)

* [AwesomeCache](https://github.com/aschuch/AwesomeCache) - Простое управление кэшем.
* [Cache](https://github.com/hyperoslo/Cache) - Только кэш.
* [CachyKit](https://github.com/Sadmansamee/CachyKit) - Библиотека кэширования JSON, изображений, ZIP-архивов и любых объектов с датой истечения срока, TTYL и принудительным обновлением.
* [Cachyr](https://github.com/nrkno/yr-cachyr) - Небольшой кэш данных типа «ключ—значение» для iOS, macOS и tvOS.
* [Carlos](https://github.com/spring-media/Carlos) - Простой, но гибкий кэш.
* [EVURLCache](https://github.com/evermeer/EVURLCache) - Чтобы приложение продолжало работать без подключения к сети.
* [MemoryCache](https://github.com/yysskk/MemoryCache) - Типобезопасный кэш в памяти.
* [Monstra](https://github.com/yangchenlarkin/Monstra) - Фреймворк кэширования в памяти с TTL, вытеснением по приоритету и защитой от лавинных сбоев.

### Диаграммы
[вернуться к началу](#readme)

* [Charts](https://github.com/ChartsOrg/Charts) - Красивые диаграммы для iOS/tvOS/OSX (порт MPAndroidChart).
* [ChartView](https://github.com/AppPear/ChartView) - Пакет Swift для удобного отображения красивых диаграмм.
* [FLCharts](https://github.com/francescoleoni98/FLCharts) - Простая в использовании и гибко настраиваемая библиотека диаграмм для iOS.
* [ScrollableGraphView](https://github.com/philackm/ScrollableGraphView) - Адаптивное прокручиваемое представление графика для визуализации простых дискретных наборов данных в iOS.
* [SwiftChart](https://github.com/gpbl/SwiftChart) - Простая библиотека линейных и площадных диаграмм для iOS. Поддерживает несколько рядов, частичное заполнение и обработку касаний.
* [SwiftCharts](https://github.com/ivnsch/SwiftCharts) - Гибко настраиваемые диаграммы для iOS.
* [SwiftUICharts](https://github.com/willdale/SwiftUICharts) - Библиотека диаграмм и графиков для SwiftUI. Работает на macOS, iOS, watchOS и tvOS, содержит встроенные возможности доступности и локализации.
* [TKRadarChart](https://github.com/TBXark/TKRadarChart) - Настраиваемая радиальная диаграмма.

### Чат
*Библиотеки для создания чат-приложений.* [вернуться к началу](#readme)

* [Chatto](https://github.com/badoo/Chatto) - Лёгкий фреймворк для создания чат-приложений.
* [ExyteChat](https://github.com/exyte/chat) - Фреймворк чат-интерфейса SwiftUI с полностью настраиваемыми ячейками сообщений, полем ввода и встроенным выбором медиафайлов.
* [InputBarAccessoryView](https://github.com/nathantannar4/InputBarAccessoryView) - Простое и гибко настраиваемое представление InputAccessoryView для создания функциональных панелей ввода с автодополнением и вложениями.
* [MessageKit](https://github.com/MessageKit/MessageKit) - Замена JSQMessagesViewController, развиваемая сообществом.
* [MessengerKit](https://github.com/steve228uk/MessengerKit) - UI-фреймворк для создания интерфейсов мессенджеров.
* [Real-time Chat with Firebase](https://github.com/dopebase/messenger-iOS-chat-swift-firestore) - Рабочее чат-приложение реального времени с Firebase Firestore и MessageKit.
* [swiftui-messaging-ui](https://github.com/FluidGroup/swiftui-messaging-ui) - Простой компонент чат-интерфейса SwiftUI со стабильной вставкой более ранних сообщений без скачков прокрутки.

### Цвета
*Интересные фрагменты кода для управления цветами и вспомогательных операций.* [вернуться к началу](#readme)

* [ChromaColorPicker](https://github.com/joncardasis/ChromaColorPicker) - Интуитивно понятный и удобный выбор цвета для iOS.
* [ColorKit](https://github.com/Boris-Em/ColorKit) - Продвинутая обработка цветов в iOS.
* [DynamicColor](https://github.com/yannickl/DynamicColor) - Расширение для удобной работы с цветами.
* [Gradients](https://github.com/Gradients/Gradients) - Подборка из более чем 180 великолепных градиентов.
* [Hue](https://github.com/zenangst/Hue) - Универсальный инструмент для работы с цветом, который вам понадобится.
* [PrettyColors](https://github.com/jdhealy/PrettyColors) - Оформляет и раскрашивает текст в терминале с помощью управляющих последовательностей ANSI. Соответствует стандарту ECMA 48.
* [SheetyColors](https://github.com/chrs1885/SheetyColors) - Выбор цвета в стиле action sheet для iOS.
* [SwiftGen-Colors](https://github.com/SwiftGen/SwiftGen#uicolor) - Инструмент для автоматической генерации `enum` для констант `UIColor`.
* [SwiftHEXColors](https://github.com/thii/SwiftHEXColors) - Поддержка HEX-цветов как расширение UIColor.
* [UIColor-Hex-Swift](https://github.com/yeahdongcn/UIColor-Hex-Swift) - Конвертер HEX в UIColor.
* [UIGradient](https://github.com/dqhieu/UIGradient) - Простая и мощная библиотека для работы с градиентными слоями, изображениями и цветами.

### Командная строка
*Создание приложений командной строки.* [вернуться к началу](#readme)

* [Ashen](https://github.com/colinta/Ashen) - Фреймворк для написания терминальных приложений на Swift. Основан на архитектуре Elm.
* [Commander](https://github.com/kylef/Commander) :penguin: - Создавайте элегантные интерфейсы командной строки.
* [Guaka](https://github.com/nsomar/Guaka) :penguin: - Умный и элегантный (совместимый с POSIX) фреймворк командной строки.
* [LineNoise](https://github.com/andybest/linenoise-swift) :penguin: - Замена readline без зависимостей.
* [Mocker](https://github.com/us/mocker) - Совместимый с Docker интерфейс командной строки для контейнеров macOS на основе фреймворка Apple Containerization.
* [nef](https://github.com/bow-swift/nef) - Набор инструментов командной строки для проверки во время компиляции документации в формате Xcode Playground.
* [Progress.swift](https://github.com/jkandzi/Progress.swift) :penguin: - Добавьте красивые индикаторы выполнения в командную строку.
* [Swift Argument Parser](https://github.com/apple/swift-argument-parser) - Простой и типобезопасный разбор аргументов для Swift.
* [SwiftCLI](https://github.com/jakeheis/SwiftCLI) :penguin: - Мощный фреймворк для разработки приложений CLI.
* [Swiftline](https://github.com/nsomar/Swiftline) - Набор инструментов для создания приложений командной строки.
* [SwiftShell](https://github.com/kareman/SwiftShell) - Библиотека для создания приложений командной строки и запуска команд оболочки.
* [SwiftyTextTable](https://github.com/scottrhoyt/SwiftyTextTable) :penguin: - Лёгкая библиотека для создания текстовых таблиц.

### Параллелизм
*Упрощённая работа с параллелизмом.* [вернуться к началу](#readme)

* [async+](https://github.com/async-plus/async-plus) :penguin: - Цепочечный интерфейс для async/await в Swift 5.5.
* [AsyncNinja](https://github.com/AsyncNinja/AsyncNinja) - Полный набор примитивов для параллелизма и реактивного программирования.
* [AsyncQueue](https://github.com/dfed/swift-async-queue) :penguin: - Библиотека очередей, позволяющая отправлять упорядоченные задачи из синхронных контекстов в асинхронные.
* [Futures](https://github.com/davidask/Futures) :penguin: - Лёгкие промисы для iOS, macOS, tvOS, watchOS и серверной части.
* [GroupWork](https://github.com/quanvo87/GroupWork) :penguin: - Простое выполнение параллельных асинхронных задач.
* [Hydra](https://github.com/malcommac/Hydra) - Промисы и await — пишите более качественный асинхронный код.
* [Queuer](https://github.com/FabrizioBrancati/Queuer) :penguin: - Менеджер очередей на основе OperationQueue и Dispatch (также известного как GCD).
* [SwiftCoroutine](https://github.com/belozierov/SwiftCoroutine) :penguin: - Корутины для iOS, macOS и Linux.
* [Throttler](https://github.com/boraseoksoon/Throttler) - Ограничивает поток массовых асинхронных входных данных с помощью простого однострочного API.
* [Venice](https://github.com/Zewo/Venice) :penguin: - Взаимодействующие последовательные процессы (CSP), готовые для Linux.

### Валюта
[вернуться к началу](#readme)


### Управление данными
[вернуться к началу](#readme)


#### CBOR
*Лаконичное двоичное представление объектов.* [вернуться к началу](#readme)

* [CBORCoding](https://github.com/SomeRandomiOSDev/CBORCoding) :penguin: - Простое кодирование и декодирование CBOR для iOS, macOS, tvOS и watchOS.

#### Core Data
*Больше никаких проблем с Core Data: эти библиотеки упрощают управление данными.* [вернуться к началу](#readme)

* [AERecord](https://github.com/tadija/AERecord) - Отличная библиотека-обёртка Core Data для iOS.
* [CloudCore](https://github.com/deeje/CloudCore/) - Надёжная синхронизация CloudKit: редактирование офлайн, связи, общие и публичные базы данных и многое другое.
* [CoreStore](https://github.com/JohnEstropia/CoreStore) - Простой и элегантный способ работы с Core Data.
* [DataKernel](https://github.com/mrdekk/DataKernel) - Минималистичная обёртка для стека Core Data, упрощающая операции сохранения. Без внешних зависимостей.
* [Graph](https://github.com/CosmicMind/Graph) - Элегантный фреймворк для работы с данными Core Data.
* [JSQCoreDataKit](https://github.com/jessesquires/JSQCoreDataKit) - Более удобный стек Core Data.
* [JustPersist](https://github.com/justeat/JustPersist) - Самый простой и безопасный способ сохранять данные в iOS; поддержка Core Data встроена.
* [QueryKit](https://github.com/QueryKit/QueryKit) - Простой способ фильтрации данных Core Data.
* [Skopelos](https://github.com/albertodebortoli/Skopelos) - Минималистичная потокобезопасная и простая в использовании реализация Active Record для Core Data без шаблонного кода.
* [SugarRecord](https://github.com/modo-studio/SugarRecord) - Помогает работать с Core Data и Realm.

#### CSV
*Библиотеки для разбора CSV и сериализации данных в формат значений, разделённых запятыми.* [вернуться к началу](#readme)

* [CodableCSV](https://github.com/dehesa/CodableCSV) :penguin: - Чтение и запись CSV-файлов построчно или через интерфейс Codable в Swift.
* [CSVParser](https://github.com/Nero5023/CSVParser) :penguin: - Быстрый парсер CSV.

#### Firebase
[вернуться к началу](#readme)

* [Ballcap](https://github.com/1amageek/Ballcap-iOS) - Фреймворк проектирования схем баз данных для Cloud Firestore.

#### GraphQL
[вернуться к началу](#readme)

* [SociableWeaver](https://github.com/NicholasBellucci/SociableWeaver) - Создание декларативных запросов и мутаций GraphQL.

#### JSON
*Возникли трудности с данными JSON? Попробуйте эти способы работы с ними.* [вернуться к началу](#readme)

* [AlamofireObjectMapper](https://github.com/tristanhimmelman/AlamofireObjectMapper) - Расширение Alamofire, преобразующее JSON-ответы в объекты с помощью ObjectMapper.
* [Alembic](https://github.com/ra1028/Alembic) - Функциональный разбор JSON, сопоставление с объектами и сериализация в JSON.
* [Argo](https://github.com/thoughtbot/Argo) - Библиотека разбора JSON.
* [Arrow](https://github.com/freshOS/Arrow) - Элегантный разбор JSON.
* [Decodable](https://github.com/Anviking/Decodable) :penguin: - Разбор JSON.
* [Elevate](https://github.com/Nike-Inc/Elevate) - Фреймворк разбора JSON, делающий процесс простым, надёжным и компонуемым.
* [EVReflection](https://github.com/evermeer/EVReflection) - Кодирование и декодирование JSON на основе рефлексии, включая поддержку NSDictionary, NSCoding, Printable, Hashable и Equatable.
* [HandyJSON](https://github.com/alibaba/handyjson) - Удобная библиотека сериализации и десериализации JSON-объектов.
* [Himotoki](https://github.com/ikesyo/Himotoki) - Типобезопасная библиотека декодирования JSON.
* [JASON](https://github.com/delba/JASON) - Разбор JSON с высокой производительностью и удобными операторами.
* [JSONHelper](https://github.com/isair/JSONHelper) - Молниеносная библиотека десериализации JSON и преобразования значений для iOS и OS X.
* [JSONNeverDie](https://github.com/johnlui/JSONNeverDie) - Инструмент автоматической рефлексии JSON в Model и удобный кодировщик/декодировщик JSON, созданный с расчётом на долговечность.
* [ObjectMapper](https://github.com/tristanhimmelman/ObjectMapper) - Сопоставление объектов JSON.
* [PMJSON](https://github.com/postmates/PMJSON) - Библиотека кодирования и декодирования JSON.
* [ReerCodable](https://github.com/reers/ReerCodable) - Расширения Codable с использованием макросов Swift.
* [Sextant](https://github.com/KittyMac/Sextant) :penguin: - Высокопроизводительные запросы JSONPath.
* [SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON) - Библиотека для работы с JSON и обработки ошибок.
* [SwiftyJSONAccelerator](https://github.com/insanoid/SwiftyJSONAccelerator) - Приложение macOS для генерации моделей Swift 5 из JSON (с Codable).

#### Хранилища «ключ—значение»
[вернуться к началу](#readme)

* [Default](https://github.com/Nirma/Default) - Современный интерфейс для UserDefaults с поддержкой Codable.
* [Defaults](https://github.com/sindresorhus/Defaults) - Строго типизированный UserDefaults с поддержкой Codable и отслеживанием ключей.
* [DefaultsKit](https://github.com/nmdias/DefaultsKit) - Простой, строго типизированный UserDefaults для iOS, macOS и tvOS.
* [Prephirences](https://github.com/phimage/Prephirences) - Управление настройками приложения, NSUserDefaults, iCloud, Keychain и другими хранилищами.
* [SecureDefaults](https://github.com/vpeschenkov/SecureDefaults) - Лёгкая обёртка UserDefaults и NSUserDefaults с дополнительным шифрованием AES-256.
* [Storez](https://github.com/SwiftKitz/Storez) - Безопасное, статически типизированное и не зависящее от хранилища хранилище пар «ключ—значение».
* [SwiftStore](https://github.com/hemantasapkota/SwiftStore) - Хранилище «ключ—значение» на основе LevelDB.
* [SwiftyUserDefaults](https://github.com/sunshinejr/SwiftyUserDefaults) - Более чистый и удобный синтаксис для NSUserDefaults.
* [Zephyr](https://github.com/ArtSabintsev/Zephyr) - Лёгкая синхронизация NSUserDefaults с iCloud.

#### MongoDB
[вернуться к началу](#readme)

* [MongoKitten](https://github.com/orlandos-nl/MongoKitten) :penguin: - Подключение к MongoDB.
* [Perfect-MongoDB](https://github.com/PerfectlySoft/Perfect-MongoDB) :penguin: - Самостоятельная обёртка клиентской библиотеки mongo-c, обеспечивающая доступ к серверам MongoDB.

#### Несколько баз данных
*Слои управления данными, работающие с несколькими источниками.* [вернуться к началу](#readme)

* [ModelAssistant](https://github.com/ssamadgh/ModelAssistant) - Элегантная библиотека для управления взаимодействием между представлением и моделью.
* [PersistenceKit](https://github.com/Teknasyon-Teknoloji/PersistenceKit) - Сохраняйте и извлекайте объекты Codable из различных хранилищ всего несколькими строками кода.
* [Shallows](https://github.com/dreymonde/Shallows) - Ваш лёгкий набор инструментов для сохранения данных.

#### ORM
[вернуться к началу](#readme)

* [fluent](https://github.com/vapor/fluent) :penguin: - Простая реализация Active Record.
* [Perfect-CRUD](https://github.com/PerfectlySoft/Perfect-CRUD) :penguin: - CRUD — система объектно-реляционного отображения (ORM), использующая протокол Codable.

#### Другие данные
*Другие способы сохранять данные.* [вернуться к началу](#readme)

* [CacheAdvance](https://github.com/dfed/CacheAdvance) - Высокопроизводительный кэш для систем журналирования. CacheAdvance сохраняет события журналов в 30 раз быстрее SQLite.
* [CoreXLSX](https://github.com/CoreOffice/CoreXLSX) - Поддержка формата электронных таблиц Excel (XLSX).
* [Disk](https://github.com/saoudrizwan/Disk) - Удобный фреймворк для простого сохранения структур, изображений и данных в iOS.
* [EVCloudKitDao](https://github.com/evermeer/EVCloudKitDao) - Упрощённый доступ к CloudKit с поддержкой подписок и локального кэширования.
* [KeyPathKit](https://github.com/vincent-pradeilles/KeyPathKit) - Удобный синтаксис для обработки данных с помощью типизированных key path.
* [LeetCode-Swift](https://github.com/soapyigu/LeetCode-Swift) - Решения задач LeetCode для собеседований.
* [Pencil](https://github.com/naru-jpn/pencil) - Записывайте любое значение в файл.
* [StorageManager](https://github.com/iAmrSalman/StorageManager) - Безопасный и простой способ использовать FileManager как базу данных.

#### Realm
[вернуться к началу](#readme)

* [Realm](https://github.com/realm/realm-swift) - Realm — мобильная база данных и замена Core Data и SQLite.
* [RealmWrapper](https://github.com/k-lpmg/RealmWrapper) - Безопасные и удобные обёртки для RealmSwift.
* [Unrealm](https://github.com/matghazaryan/Unrealm) - Unrealm позволяет легко хранить нативные классы, структуры и перечисления Swift в Realm.

#### Драйверы SQL
[вернуться к началу](#readme)

* [MySQL Swift](https://github.com/novi/mysql-swift) :penguin: - Клиентская библиотека MySQL.
* [Perfect-MySQL](https://github.com/PerfectlySoft/Perfect-MySQL) :penguin: - Самостоятельная обёртка клиентской библиотеки MySQL, обеспечивающая доступ к серверам MySQL.
* [Perfect-PostgreSQL](https://github.com/PerfectlySoft/Perfect-PostgreSQL) :penguin: - Самостоятельная обёртка библиотеки libpq, обеспечивающая доступ к серверам PostgreSQL.

#### SQLite
*Хотите хранить данные приложения в SQLite? Вот несколько полезных ресурсов.* [вернуться к началу](#readme)

* [GRDB.swift](https://github.com/groue/GRDB.swift) - Универсальный набор инструментов SQLite.
* [SQLite.swift](https://github.com/stephencelis/SQLite.swift) - Фреймворк-обёртка для SQLite3. Компактный, простой и безопасный.
* [SQLiteDB](https://github.com/FahimF/SQLiteDB) - Обёртка SQLite.

#### TOML
*Минималистичный язык Тома.* [вернуться к началу](#readme)

* [TOMLDecoder](https://github.com/dduan/TOMLDecoder) - Декодирование в соответствии с последним стандартом TOML.

#### XML
*Полезные библиотеки для работы с данными в формате XML.* [вернуться к началу](#readme)

* [AEXML](https://github.com/tadija/AEXML) - Обёртка XML.
* [CheatyXML](https://github.com/lobodart/CheatyXML) - Мощный фреймворк для удобной работы с XML.
* [SwiftyXML](https://github.com/chenyunguiMilook/SwiftyXML) - Самый удобный способ работать с XML в стиле Swift.
* [SWXMLHash](https://github.com/drmohundro/SWXMLHash) - Простой разбор XML.
* [XMLCoder](https://github.com/CoreOffice/XMLCoder) - XMLEncoder и XMLDecoder на основе протоколов Codable из стандартной библиотеки.
* [XMLMapper](https://github.com/gcharita/XMLMapper) - Простой способ сопоставлять XML с объектами.

#### YAML
[вернуться к началу](#readme)

* [YamlSwift](https://github.com/behrang/YamlSwift) - Загрузка документов YAML и JSON.
* [Yams](https://github.com/jpsim/Yams) :penguin: - Удобный парсер YAML.

#### ZIP
[вернуться к началу](#readme)

* [Zip](https://github.com/marmelroy/Zip) - Фреймворк для упаковки и распаковки файлов.
* [Zip Foundation](https://github.com/weichsel/ZIPFoundation) - Библиотека для создания, чтения и изменения ZIP-архивов.

### Дата и время
*Удобное форматирование даты.* [вернуться к началу](#readme)

* [AnyDate](https://github.com/Kawoou/AnyDate) - API для работы с датой и временем, вдохновлённый API DateTime из Java 8.
* [Chronology](https://github.com/davedelong/time) - Создание более совершенной библиотеки для работы с датой и временем.
* [DateHelper](https://github.com/melvitax/DateHelper) - Простая библиотека вспомогательных средств для работы с датой.
* [Datez](https://github.com/SwiftKitz/Datez) - Библиотека для работы с `NSDate`, `NSCalendar`, `NSDateComponents` и `NSTimeInterval`.
* [Datify](https://github.com/hemangshah/Datify) - Простые функции для работы с датами.
* [NVDate](https://github.com/novalagung/nvdate) - Расширение для работы с датами.
* [SwiftDate](https://github.com/malcommac/SwiftDate) - Простое управление NSDate.
* [Time](https://github.com/dreymonde/Time) - Типобезопасные вычисления времени на основе обобщённых типов.
* [Timepiece](https://github.com/naoty/Timepiece) - Интуитивно понятные расширения NSDate.
* [TrueTime.swift](https://github.com/instacart/TrueTime.swift) - Получение точного текущего времени, не зависящего от изменений системных часов устройства (библиотека NTP).
* [TypedDate](https://github.com/Ryu0118/swift-typed-date) - Улучшенная работа с датами за счёт настройки компонентов даты на уровне типов.

### Внедрение зависимостей
*Библиотеки для внедрения зависимостей.* [вернуться к началу](#readme)

* [Cleanse](https://github.com/square/Cleanse) - Лёгкий фреймворк внедрения зависимостей от Square.
* [Corridor](https://github.com/symentis/Corridor) - Микрофреймворк внедрения зависимостей, подобный Coreader.
* [Deli](https://github.com/kawoou/Deli) - Простое в использовании внедрение зависимостей (DI).
* [DIKit](https://github.com/Liftric/DIKit) - Фреймворк внедрения зависимостей для Swift, вдохновлённый KOIN.
* [Dip](https://github.com/AliSoftware/Dip) - Простой контейнер для внедрения зависимостей.
* [DITranquillity](https://github.com/ivlevAstef/DITranquillity/) - Фреймворк внедрения зависимостей, упрощающий этот процесс.
* [Locatable](https://github.com/vincent-pradeilles/locatable) - Микрофреймворк, использующий обёртки свойств для реализации паттерна Service Locator.
* [Pure](https://github.com/devxoul/Pure) - Способ внедрения зависимостей без DI-контейнера.
* [SafeDI](https://github.com/dfed/safedi) - Типобезопасное внедрение зависимостей во время компиляции.
* [Swinject](https://github.com/Swinject/Swinject) - Фреймворк внедрения зависимостей.
* [Typhoon](https://github.com/appsquickly/Typhoon) - Набор инструментов для внедрения зависимостей.
* [Weaver](https://github.com/scribd/Weaver) - Декларативный, простой и безопасный фреймворк внедрения зависимостей.

### Устройства
*Подборка библиотек для распознавания устройства.* [вернуться к началу](#readme)

* [Device](https://github.com/Ekhoo/Device) - Лёгкий инструмент для определения модели текущего устройства и размера экрана.
* [Device.swift](https://github.com/schickling/Device.swift) - Сверхлёгкая библиотека для определения используемого устройства.
* [DeviceKit](https://github.com/devicekit/DeviceKit) - DeviceKit — замена UIDevice на основе типа-значения.
* [Deviice](https://github.com/andrealufino/Deviice) - Библиотека Swift для проверки текущего устройства и получения дополнительной информации о нём.
* [Luminous](https://github.com/andrealufino/Luminous) - Вся необходимая информация об устройстве.
* [Thingy](https://github.com/bojan/Thingy) - Современная библиотека для определения устройства и получения сведений о нём.
* [UIDeviceComplete](https://github.com/Nirma/UIDeviceComplete) - Расширения UIDevice, дополняющие недостающие возможности.

### Документация
*Генерация документации для кода Swift.* [вернуться к началу](#readme)

* [jazzy](https://github.com/realm/jazzy/) - Документация с душой.
* [SourceDocs](https://github.com/SourceDocs/SourceDocs) - Генерация справочной документации Markdown, хранящейся вместе с кодом.

### Электронная почта
[вернуться к началу](#readme)


### Встраиваемые системы
*Создавайте проекты для встраиваемого Linux на Raspberry Pi, BeagleBone, C.H.I.P. и других платах.* [вернуться к началу](#readme)

* [SwiftyGPIO](https://github.com/uraimo/SwiftyGPIO) :penguin: - Работа с GPIO, SPI и PWM в Linux на ARM.

#### Периферийные устройства
*Работа с определёнными внешними периферийными устройствами.* [вернуться к началу](#readme)


### События
*Альтернативы NSNotificationCenter, Key-Value-Observation и делегированию.* [вернуться к началу](#readme)

* [Bond](https://github.com/DeclarativeHub/Bond) - Фреймворк привязки данных.
* [Combinative](https://github.com/noppefoxwolf/Combinative) - Обработка событий пользовательского интерфейса с помощью Combine от Apple.
* [EmitterKit](https://github.com/aleclarson/emitter-kit) - Реализация генераторов событий и слушателей.
* [FutureKit](https://github.com/FutureKit/FutureKit) - Библиотека Future/Promises.
* [Katana](https://github.com/BendingSpoons/katana-swift) - Создавайте приложения в духе React и Redux.
* [LightweightObservable](https://github.com/fxm90/LightweightObservable) - Лёгкая реализация наблюдаемой последовательности, на которую можно подписаться.
* [NoticeObserveKit](https://github.com/marty-suzuki/NoticeObserveKit) - Типобезопасная обёртка NotificationCenter, связывающая тип уведомления с типом его данных.
* [Notificationz](https://github.com/SwiftKitz/Notificationz) - Помогает управлять `NSNotificationCenter`, предоставляя простой настраиваемый адаптер.
* [Observable](https://github.com/roberthein/Observable) - Самый простой способ наблюдать за значениями.
* [OneWay](https://github.com/DevYeom/OneWay) - Управление состоянием с однонаправленным потоком данных.
* [OpenCombine](https://github.com/OpenCombine/OpenCombine) - Реализация фреймворка Combine от Apple с открытым исходным кодом для обработки значений во времени.
* [PMKVObserver](https://github.com/postmates/PMKVObserver/) - Современное потокобезопасное и типобезопасное наблюдение за парами «ключ—значение».
* [PromiseKit](https://github.com/mxcl/PromiseKit) - Библиотека асинхронного программирования на промисах.
* [ReactiveCocoa](https://github.com/ReactiveCocoa/ReactiveCocoa) - ReactiveCocoa (RAC) — фреймворк Cocoa, вдохновлённый функциональным реактивным программированием. Он предоставляет API для композиции и преобразования потоков значений во времени.
* [ReactorKit](https://github.com/ReactorKit/ReactorKit) - Фреймворк реактивной архитектуры приложений с однонаправленным потоком данных.
* [ReSwift](https://github.com/ReSwift/ReSwift) - Однонаправленный поток данных.
* [RxSwift](https://github.com/ReactiveX/RxSwift) - Microsoft Reactive Extensions (Rx).
* [Signals](https://github.com/artman/Signals) - Заменяет делегаты и уведомления.
* [SwiftEventBus](https://github.com/cesarferreira/SwiftEventBus) - Шина событий публикации/подписки, оптимизированная для iOS.
* [Tempura](https://github.com/BendingSpoons/tempura-swift) - Комплексный подход к разработке приложений iOS, вдохновлённый Redux и MVVM.
* [Tokamak](https://github.com/TokamakUI/Tokamak) - Декларативный API в стиле React для создания нативных компонентов UI с удобной однонаправленной привязкой данных.
* [Tomorrowland](https://github.com/lilyball/Tomorrowland) - Лёгкие промисы.
* [TopicEventBus](https://github.com/mcmatan/topicEventBus) - Фреймворк реализации паттерна публикации/подписки с возможностью публиковать события по темам.
* [VueFlux](https://github.com/ra1028/VueFlux) - Архитектура управления состоянием с однонаправленным потоком данных, вдохновлённая Vuex и Flux.
* [When](https://github.com/vadymmarkov/When) - Лёгкая реализация промисов.

### Файлы
[вернуться к началу](#readme)

* [ExtendedAttributes](https://github.com/sindresorhus/ExtendedAttributes) - Управление расширенными атрибутами файлов и папок.
* [FileKit](https://github.com/nvzqz/FileKit) - Простое и выразительное управление файлами.
* [FileProvider](https://github.com/amosavian/FileProvider) - Замена FileManager для локальных, iCloud- и удалённых файлов (WebDAV/FTP/Dropbox/OneDrive/SMB2) в iOS/tvOS и macOS.
* [KZFileWatchers](https://github.com/krzysztofzablocki/KZFileWatchers) - Микрофреймворк для наблюдения за изменениями файлов как локально, так и удалённо.
* [PathKit](https://github.com/kylef/PathKit) :penguin: - Простые операции с путями.
* [Pathos](https://github.com/dduan/Pathos) :penguin: - Эффективное управление файлами Unix.

### Шрифты
*Подборка фрагментов кода для работы со шрифтами.* [вернуться к началу](#readme)

* [FontAwesome.swift](https://github.com/thii/FontAwesome.swift) - Использование FontAwesome в проектах.
* [FontBlaster](https://github.com/ArtSabintsev/FontBlaster) - Программная загрузка пользовательских шрифтов в приложение iOS.
* [Inkwell](https://github.com/ninjaprox/Inkwell) - Инструмент для динамического использования пользовательских шрифтов.
* [IoniconsKit](https://github.com/keitaoouchi/IoniconsKit) - Использование ionicons как UIImage и UIFont в проектах.
* [OcticonsKit](https://github.com/keitaoouchi/OcticonsKit) - Использование Octicons как UIImage и UIFont в проектах.
* [SwiftIconFont](https://github.com/segecey/SwiftIconFont) - Порты Font Awesome, Iconic, Ionicons и Octicon.
* [SwiftIcons](https://github.com/ranesr/SwiftIcons) - Библиотека шрифтовых значков: dripicons, emoji, Font Awesome, icofont, ionicons, linear icons, map icons, Material icons, Open Iconic, state и weather.
* [SwiftUI-FontIcon](https://github.com/huybuidac/SwiftUIFontIcon) - Значки-шрифты для SwiftUI: Font Awesome, ionicons и Material Icons.
* [SYSymbol](https://github.com/Nirma/SFSymbol) - Все символы SFSymbol у вас под рукой.
* [UIFontComplete](https://github.com/Nirma/UIFontComplete) - Управление системными и пользовательскими шрифтами для iOS и tvOS.

### Игровой движок
[вернуться к началу](#readme)

* [glide engine](https://github.com/cocoatoucher/Glide) - Игровой движок для 2D-игр на основе SpriteKit и GameplayKit с практическими примерами и учебными материалами.
* [Raylib for Swift](https://github.com/STREGAsGate/Raylib) :penguin: - Кроссплатформенный пакет Swift для Raylib. Собирает Raylib из исходного кода, поэтому не нужно возиться с библиотеками. Просто добавьте пакет в зависимости игры и запускайте!
* [SwiftGodot](https://migueldeicaza.github.io/SwiftGodotDocs/tutorials/swiftgodot-tutorials/) - Привязки Swift для игрового движка Godot — для создания расширений или использования API вместе со SwiftGodotKit.

#### 2D
[вернуться к началу](#readme)

* [ImagineEngine](https://github.com/JohnSundell/ImagineEngine) - Сверхбыстрый движок для 2D-игр.

### Игры
[вернуться к началу](#readme)

* [FDChessboardView](https://github.com/fulldecent/FDChessboardView) - Контроллер представления шахматных досок.
* [Sage](https://github.com/nvzqz/Sage) :penguin: - Кроссплатформенная шахматная библиотека.

### Жесты
[вернуться к началу](#readme)

* [ShowTime](https://github.com/KaneCheshire/ShowTime) - Показывайте касания и жесты iOS в демонстрациях и видео всего одной строкой кода.
* [SwiftyGestureRecognition](https://github.com/b3ll/SwiftyGestureRecognition) - UIGestureRecognizer в плейграундах Xcode.
* [SwipyCell](https://github.com/moritzsternemann/SwipyCell) - UITableViewCell, выполняющая действия при свайпе (как в приложении Mailbox).
* [Tactile](https://github.com/delba/Tactile) - Более безопасный и идиоматичный способ реагировать на жесты и события управления.

### Оборудование
*Раздел посвящён библиотекам, связанным с оборудованием.* [вернуться к началу](#readme)


#### 3D Touch
*Удобная работа с новыми функциями 3D Touch и Force Touch с помощью этих библиотек.* [вернуться к началу](#readme)


#### Bluetooth
*Обёртки над CoreBluetooth.* [вернуться к началу](#readme)

* [BlueCap](https://github.com/troystribling/BlueCap) - Обёртка над CoreBluetooth и многое другое.
* [Bluejay](https://github.com/steamclock/bluejay) - Простой фреймворк для создания надёжных приложений Bluetooth LE.
* [BluetoothKit](https://github.com/rhummelmose/BluetoothKit) - Простое взаимодействие устройств iOS/OSX по BLE.
* [RxBluetoothKit](https://github.com/polidea/RxBluetoothKit) - Библиотека Bluetooth для iOS и OSX на основе RxSwift.
* [SwiftyBluetooth](https://github.com/jordanebelanger/SwiftyBluetooth) - Простая и надёжная обёртка CoreBluetooth на основе замыканий.

#### Камера
*Отличные библиотеки для работы с камерой.* [вернуться к началу](#readme)

* [CameraBackground](https://github.com/yonat/CameraBackground) - Отображение слоя камеры в качестве фона любого UIView.
* [CameraKit-iOS](https://github.com/CameraKit/camerakit-ios) - Значительно повысьте производительность камеры и простоту её использования в следующем проекте.
* [FDTake](https://github.com/fulldecent/FDTake) - Легко делайте фото и видео или выбирайте их из медиатеки.
* [Fusuma](https://github.com/ytakzk/Fusuma) - Просмотр фотографий и камера в стиле Instagram.
* [MediaPicker](https://github.com/exyte/mediapicker) - Настраиваемый выбор медиафайлов SwiftUI с поддержкой камеры и галереи с альбомами.
* [MijickCamera](https://github.com/Mijick/Camera) - Простая камера. Полностью настраиваемая библиотека, значительно сокращающая время и усилия на реализацию.
* [NextLevel](https://github.com/NextLevel/NextLevel) - Крутой захват медиа.

##### Штрихкоды
*Сканеры штрихкодов, QR-кодов и других кодов.* [вернуться к началу](#readme)

* [BarcodeScanner](https://github.com/hyperoslo/BarcodeScanner) - Простой и красивый контроллер представления сканера штрихкодов.
* [EFQRCode](https://github.com/EFPrefix/EFQRCode) - Более удобный способ работы с QR-кодами.
* [QRCodeReader.swift](https://github.com/yannickl/QRCodeReader.swift) - Простой считыватель QR-кодов.

#### Тактильная отдача
*Библиотеки для работы с тактильной обратной связью.* [вернуться к началу](#readme)

* [Haptica](https://github.com/efremidze/Haptica) - Простой генератор тактильной обратной связи.

#### iBeacon
*Хотите использовать iBeacon в проекте Swift? Вот несколько полезных ресурсов.* [вернуться к началу](#readme)

* [SwiftLocation](https://github.com/malcommac/SwiftLocation) - Отслеживание местоположения и маяков.

#### Датчики
*Управляйте датчиками устройства проще и быстрее.* [вернуться к началу](#readme)


### Изображения
*Подборка библиотек для работы с изображениями.* [вернуться к началу](#readme)

* [Agrume](https://github.com/JanGorman/Agrume) - Свежий и лёгкий просмотрщик изображений для iOS.
* [AlamofireImage](https://github.com/Alamofire/AlamofireImage) - Библиотека компонентов изображений для Alamofire.
* [APNGKit](https://github.com/onevcat/APNGKit) - Высокопроизводительный и удобный способ работы с форматом APNG в iOS.
* [ATGMediaBrowser](https://github.com/altayer-digital/ATGMediaBrowser) - Просмотр изображений в виде слайд-шоу с несколькими готовыми стилями переходов и возможностью легко создавать новые.
* [AXPhotoViewer](https://github.com/alexhillc/AXPhotoViewer) - Галерея фотографий для iPhone/iPad, удобная для просмотра любого количества снимков.
* [BlockiesSwift](https://github.com/Boilertalk/BlockiesSwift) - Генератор уникальных блочных идентификаторов и изображений профиля.
* [Brightroom](https://github.com/FluidGroup/Brightroom) - Редактор изображений и движок на основе CoreImage.
* [CTPanoramaView](https://github.com/scihant/CTPanoramaView) - Библиотека для отображения сферических и цилиндрических панорам с сенсорным управлением или управлением движением.
* [DTPhotoViewerController](https://github.com/tungvoduc/DTPhotoViewerController) - Полностью настраиваемый контроллер просмотра фотографий, вдохновлённый просмотрщиком Facebook.
* [FacebookImagePicker](https://github.com/floriangbh/FacebookImagePicker) - Выбор фотографий из альбомов Facebook.
* [FaceCrop](https://github.com/Ancestry/FaceCrop) - Распознавание и центрирование лиц на изображениях с помощью Apple Vision Framework.
* [FlexibleImage](https://github.com/kawoou/FlexibleImage) - Простой способ работать с изображениями.
* [FMPhotoPicker](https://github.com/congnd/FMPhotoPicker) - Современный, простой выбор фотографий без зависимостей, с элегантным настраиваемым редактором изображений.
* [gifu](https://github.com/kaishin/gifu) - Высокопроизводительная поддержка анимированных GIF в iOS.
* [GPUImage 2](https://github.com/BradLarson/GPUImage2) - Фреймворк с лицензией BSD для обработки видео и изображений с ускорением GPU.
* [GPUImage 3](https://github.com/BradLarson/GPUImage3) - Фреймворк с лицензией BSD для обработки видео и изображений с помощью Metal и ускорением GPU.
* [HanekeSwift](https://github.com/Haneke/HanekeSwift) - Лёгкий универсальный кэш для iOS с особыми возможностями работы с изображениями.
* [Harbeth](https://github.com/yangKJ/Harbeth) - Фреймворк API Metal для обработки графики, видео и фильтров камеры с ускорением GPU.
* [ImageDetect](https://github.com/Feghal/ImageDetect) - Распознавание и обрезка лиц, штрихкодов и текста на изображениях с помощью Vision API из iOS 11.
* [ImageLoader](https://github.com/hirohisa/ImageLoaderSwift) - Лёгкий и быстрый загрузчик изображений для iOS.
* [ImageScout](https://github.com/kaishin/ImageScout) - Реализация [fastimage](https://pypi.org/project/fastimage/0.2.1/) — поддерживает PNG, GIF и JPEG.
* [ImageViewer](https://github.com/Krisiacik/ImageViewer) - Просмотрщик изображений в стиле Twitter.
* [ImgixSwift](https://github.com/imgix/imgix-swift) - Лёгкое обновление URL изображений для быстрой и адаптивной загрузки.
* [JLStickerTextView](https://github.com/Textcat/JLStickerTextView) - UIImageView, позволяющий добавлять несколько подписей с многострочным текстом, редактировать, поворачивать и изменять их размер одним пальцем, а затем выводить текст на изображение.
* [Kanvas](https://github.com/tumblr/kanvas-ios) - Библиотека iOS для добавления эффектов, рисунков, текста и стикеров, а также создания GIF из медиафайлов и камеры.
* [Kingfisher](https://github.com/onevcat/Kingfisher) - Загрузка изображений и кэширование.
* [LetterAvatarKit](https://github.com/vpeschenkov/LetterAvatarKit) - Расширение UIImage для создания аватаров из букв.
* [Lightbox](https://github.com/hyperoslo/Lightbox) - Удобный и простой в использовании просмотрщик изображений для приложения iOS.
* [MapleBacon](https://github.com/JanGorman/MapleBacon) - Библиотека загрузки и кэширования изображений.
* [MCScratchImageView](https://github.com/JaylenCoding/MCScratchImageView) - Пользовательский ImageView, который закрывает другое представление как скретч-карта: пользователь может стереть покрытие свайпом и увидеть содержимое под ним.
* [Moa](https://github.com/evgenyneu/moa) - Расширение для загрузки изображений в представление iOS, tvOS и macOS.
* [Nuke](https://github.com/kean/Nuke) - Продвинутый фреймворк для загрузки, кэширования, обработки, отображения изображений и предварительной загрузки.
* [PassportScanner](https://github.com/evermeer/PassportScanner) - Сканирование машиночитаемой зоны паспорта с извлечением имени, фамилии, номера паспорта, гражданства, даты рождения, срока действия и личного номера.
* [Rough](https://github.com/bakhtiyork/Rough) - Позволяет рисовать в небрежном, похожем на ручной набросок стиле.
* [Sharaku](https://github.com/makomori/Sharaku) - Библиотека интерфейса фильтров изображений в стиле Instagram.
* [Snowflake](https://github.com/onmyway133/Snowflake) - Работа с SVG.
* [SwiftDraw](https://github.com/swhitty/SwiftDraw) - Библиотека для преобразования изображений SVG в UIImage и NSImage и генерации исходного кода CoreGraphics.
* [SwiftGen-Assets](https://github.com/SwiftGen/SwiftGen#assets-catalogs) - Инструмент для автоматической генерации `enum` для всех `UIImage` из каталогов ресурсов.
* [SwiftSVG](https://github.com/mchoe/SwiftSVG) - Однопроходный парсер SVG с несколькими интерфейсами (String, NS/UIBezierPath, CAShapeLayer и NS/UIView).
* [SwiftWebImage](https://github.com/HotWordland/SwiftWebImage) - 🚀 Загрузчик изображений для SwiftUI с производительным LRU-кэшем в памяти и на диске.
* [SwiftyGif](https://github.com/alexiscreuzot/SwiftyGif) - Высокопроизводительный движок GIF.
* [TinyCrayon](https://github.com/TinyCrayon/TinyCrayon-iOS-SDK) - Удобный интеллектуальный SDK маскирования и вырезания изображений для мобильных приложений.
* [Toucan](https://github.com/gavinbunney/Toucan) - API обработки изображений.
* [UIImageColors](https://github.com/jathu/UIImageColors) - Извлечение цветов из UIImage в стиле iTunes.
* [YPImagePicker](https://github.com/Yummypets/YPImagePicker) - Выбор изображений и фильтры для iOS в стиле Instagram.
* [ZImageCropper](https://github.com/ZaidPathan/ZImageCropper) - Обрезка изображения в любой форме.

### Кодирование «ключ—значение»
*Библиотеки для кодирования «ключ—значение».* [вернуться к началу](#readme)


### Клавиатура
*Хотите создать собственную клавиатуру? Вот несколько полезных ресурсов.* [вернуться к началу](#readme)

* [IHKeyboardAvoiding](https://github.com/IdleHandsApps/IHKeyboardAvoiding) - Элегантное решение, позволяющее оставить любой UIView видимым при появлении клавиатуры. UIScrollView не требуется.
* [IQKeyboardManager](https://github.com/hackiftekhar/IQKeyboardManager) - Универсальная библиотека, подключаемая без кода и предотвращающая перекрытие UITextField/UITextView поднимающейся клавиатурой.
* [ISEmojiView](https://github.com/isaced/ISEmojiView) - Клавиатура эмодзи для iOS.
* [KeyboardHideManager](https://github.com/bonyadmitr/KeyboardHideManager) - Менеджер, позволяющий скрывать клавиатуру нажатием на представления в iOS без написания кода.
* [KeyboardShortcuts](https://github.com/sindresorhus/KeyboardShortcuts) - Добавление настраиваемых пользователем глобальных сочетаний клавиш в приложения macOS. Включает компоненты Cocoa и SwiftUI.
* [Ribbon](https://github.com/chriszielinski/Ribbon) - 🎀 Простая кроссплатформенная библиотека панели инструментов и пользовательского поля ввода для iOS и macOS.
* [Typist](https://github.com/totocaster/Typist) - Небольшой менеджер клавиатуры UIKit для приложений iOS, который помогает управлять её присутствием и поведением без центра уведомлений.

### Наборы инструментов
*Библиотеки для разработки с упрощённым API.* [вернуться к началу](#readme)

* [BFKit-Swift](https://github.com/FabrizioBrancati/BFKit-Swift) :penguin: - Набор полезных классов, структур и расширений для ускорения разработки приложений.
* [C4iOS](https://github.com/C4Labs/C4iOS) - Использует возможности нативного программирования для iOS с упрощённым API.
* [ContactsChangeNotifier](https://github.com/yonat/ContactsChangeNotifier) - Какие контакты изменились вне приложения? Улучшенное уведомление CNContactStoreDidChange сообщает об изменениях без лишнего шума.

### Компоновка
*Библиотеки, помогающие создавать компоновку.* [вернуться к началу](#readme)

* [AnimatedTabBar](https://github.com/exyte/AnimatedTabBar) - Панель вкладок с несколькими встроенными анимациями.
* [BrickKit](https://github.com/wayfair-archive/brickkit-ios) - Простое создание сложных адаптивных компоновок.
* [CGLayout](https://github.com/k-o-d-e-n/CGLayout) :penguin: - Мощный фреймворк Auto Layout для UIView/NSView, CALayer, неотрисованных представлений и т. д. Предоставляет заполнители.
* [FlexLayout](https://github.com/layoutBox/FlexLayout) - Удобный интерфейс к высокооптимизированной реализации Flexbox от Facebook Yoga.
* [FrameLayoutKit](https://github.com/kennic/FrameLayoutKit) - Фреймворк поддерживает сложные компоновки, включая цепочки и вложенность, с простым и понятным синтаксисом операторов и DSL.
* [Grid](https://github.com/exyte/Grid) - Самый мощный контейнер Grid, которого не хватало SwiftUI.
* [LayoutLess](https://github.com/DeclarativeHub/Layoutless) - Пишите меньше кода UI.
* [Neon](https://github.com/mamaral/Neon) - Мощный программный фреймворк компоновки UI.
* [PinLayout](https://github.com/layoutBox/PinLayout) - Быстрая компоновка представлений без Auto Layout. Никакой магии — только код, полный контроль и высокая скорость. Краткий, понятный, читаемый и цепочечный синтаксис. [iOS/macOS/tvOS]
* [Scaling Header Scroll View](https://github.com/exyte/ScalingHeaderScrollView) - Прокручиваемое представление с закреплённым заголовком, который уменьшается при прокрутке. Написано на SwiftUI.
* [Static](https://github.com/venmo/Static) - Простые статические табличные представления для iOS.
* [Stevia](https://github.com/freshOS/Stevia) - Элегантная компоновка представлений для iOS.

#### Auto Layout
*Устали от Storyboard? Попробуйте декларативные библиотеки Auto Layout.* [вернуться к началу](#readme)

* [Bamboo](https://github.com/wordlessj/Bamboo) - Auto Layout и ручная компоновка одной строкой.
* [Cartography](https://github.com/robb/Cartography) - Декларативная библиотека Auto Layout для проекта.
* [Cassowary](https://github.com/tribalworldwidelondon/CassowarySwift) - Библиотека решения линейных ограничений, использующая тот же алгоритм, что и AutoLayout.
* [Cupcake](https://github.com/nerdycat/Cupcake) - Простой способ создавать и компоновать компоненты интерфейса iOS.
* [DeviceLayout](https://github.com/cruisediary/DeviceLayout) - Разные настройки AutoLayout для каждого устройства.
* [EasyPeasy](https://github.com/nakiostudio/EasyPeasy) - Простой Auto Layout.
* [EasySwiftLayout](https://github.com/Pimine/EasySwiftLayout) - Лёгкий фреймворк Swift для Auto Layout от Apple.
* [EZLayout](https://github.com/alexliubj/EZAnchor) - Более простой и быстрый способ писать Auto Layout.
* [FixFlex](https://github.com/psharanda/FixFlex) - Декларативный Auto Layout на основе NSLayoutAnchor, переосмысление VFL в стиле Swift и альтернатива UIStackView.
* [HypeUI](https://github.com/hyperconnect/HypeUI) - 🌺 Реализация DSL-стиля SwiftUI от Apple на основе UIKit.
* [KVConstraintKit](https://github.com/keshavvishwkarma/KVConstraintKit) - Впечатляющий DSL Auto Layout для iOS, tvOS и OSX.
* [MisterFusion](https://github.com/marty-suzuki/MisterFusion) - DSL для AutoLayout с поддержкой Size Class.
* [Mortar](https://github.com/jmfieldman/Mortar) - Краткий, но гибкий DSL для создания ограничений Auto Layout и добавления дочерних представлений.
* [NorthLayout](https://github.com/banjun/NorthLayout) - Быстрая компоновка с помощью Visual Format Language (VFL) с расширенным синтаксисом.
* [PureLayout](https://github.com/PureLayout/PureLayout) - Универсальный API Auto Layout для iOS и OS X.
* [SnapKit](https://github.com/SnapKit/SnapKit) - DSL Auto Layout для iOS и OS X.
* [Swiftstraints](https://github.com/Skyvive/Swiftstraints) - Мощный фреймворк Auto Layout, позволяющий создавать ограничения одной строкой кода.
* [TinyConstraints](https://github.com/roberthein/TinyConstraints) - TinyConstraints — синтаксический сахар, упрощающий использование Auto Layout.

### Локализация
*Фреймворки для локализации приложений.* [вернуться к началу](#readme)

* [BartyCrouch](https://github.com/FlineDev/BartyCrouch) - Постепенное обновление и перевод файлов Strings из кода и Storyboards/XIB.
* [CrowdinSDK](https://github.com/crowdin/mobile-sdk-ios) - Мгновенная доставка в приложение всех новых переводов из проекта Crowdin.
* [IBLocalizable](https://github.com/PiXeL16/IBLocalizable) - Локализация представлений прямо в Interface Builder с IBLocalizable.
* [L10n-swift](https://github.com/Decybel07/L10n-swift) - Локализация приложения с возможностью менять язык на лету и поддержкой множественного числа на любом языке.
* [LocalizationKit](https://github.com/willpowell8/LocalizationKit_iOS) - Динамическая локализация приложения в реальном времени с удалённым управлением переводами без повторной отправки приложения.
* [Localize](https://github.com/andresilvagomez/Localize) - Локализация приложений, например с помощью регулярных выражений в Localizable.strings.
* [Localize-Swift](https://github.com/marmelroy/Localize-Swift) - Локализация приложений, например с помощью регулярных выражений в Localizable.strings.
* [Locheck](https://github.com/Asana/locheck) - Проверка файлов .strings и .stringsdict на ошибки.
* [StringSwitch](https://stringswitch.com) - Лёгкое преобразование файлов iOS .strings в формат Android strings.xml и обратно.
* [SwiftGen-L10n](https://github.com/SwiftGen/SwiftGen#localizablestrings) - Инструмент для автоматической генерации `enum` для всех ключей Localizable.strings с соответствующими связанными значениями для строковых шаблонов printf, например `%@`.
* [Translatio](https://github.com/andrealufino/Translatio) - Очень лёгкая библиотека для локализации строк, в том числе непосредственно в Storyboard.

### Местоположение
[вернуться к началу](#readme)

* [AsyncLocationKit](https://github.com/AsyncSwift/AsyncLocationKit) - Обёртка над фреймворком Apple CoreLocation с современным параллелизмом Swift (async/await).
* [STLocationRequest](https://github.com/SvenTiigi/STLocationRequest) - Элегантный и простой экран запроса местоположения с эффектом 3D Flyover.

### Журналирование
*Утилиты для записи и чтения журналов устройства.* [вернуться к началу](#readme)

* [AEConsole](https://github.com/tadija/AEConsole) - Настраиваемый оверлей консоли с отладочным журналом поверх приложения iOS.
* [CleanroomLogger](https://github.com/emaloney/CleanroomLogger) - Настраиваемый и расширяемый высокоуровневый API журналирования: простой, лёгкий и производительный.
* [Duration](https://github.com/SwiftStudies/Duration) :penguin: - Лёгкая библиотека журналирования, ориентированная на измерение времени выполнения операций.
* [Gedatsu](https://github.com/bannzai/gedatsu) - Удобочитаемый формат сообщений об ошибках AutoLayout в консоли.
* [HeliumLogger](https://github.com/Kitura/HeliumLogger) :penguin: - Лёгкий фреймворк журналирования IBM.
* [Printer](https://github.com/hemangshah/printer) - Элегантный журналировщик для следующего приложения.
* [Puppy](https://github.com/sushichop/Puppy) :penguin: - Гибкая библиотека журналирования с поддержкой множества транспортов и платформ.
* [QorumLogs](https://github.com/Esqarrouth/QorumLogs) - Утилита журналирования для Xcode и Google Docs.
* [Rainbow](https://github.com/onevcat/Rainbow) :penguin: - Приятный вывод в консоль.
* [SwiftyBeaver](https://github.com/SwiftyBeaver/SwiftyBeaver) :penguin: - Многоплатформенное журналирование во время разработки и выпуска.
* [TinyConsole](https://github.com/Cosmo/TinyConsole) - Небольшая консоль журналов для отображения информации во время использования приложения iOS.
* [TraceLog](https://github.com/tonystone/tracelog) :penguin: - Предельно простое журналирование для iOS, macOS и Linux.
* [Watchdog](https://github.com/wojteklu/Watchdog) - Утилита журналирования чрезмерной блокировки основного потока.
* [WatchdogInspector](https://github.com/tapwork/WatchdogInspector) - Инструмент для отображения текущей частоты кадров (fps) в строке состояния приложения iOS.
* [Willow](https://github.com/Nike-Inc/Willow) - Мощная, но лёгкая библиотека журналирования.
* [XCGLogger](https://github.com/DaveWoodCom/XCGLogger) - Полнофункциональная настраиваемая утилита журналирования с уровнями, временными метками и номерами строк.

### Карты
[вернуться к началу](#readme)

* [Cluster](https://github.com/efremidze/Cluster) - Простая группировка аннотаций карты.
* [FlyoverKit](https://github.com/SvenTiigi/FlyoverKit) - FlyoverKit позволяет без усилий отображать впечатляющие 360-градусные виды местности на MKMapView с широкими возможностями настройки.
* [GEOSwift](https://github.com/GEOSwift/GEOSwift) - Упрощает работу с географическими моделями и вычисление пересечений, наложений, проекций и т. д.
* [ImmersiveMap](https://github.com/artembobkin/ImmersiveMap) - Механизм векторных карт с тайлами, отрисованными Metal, для SwiftUI; включает 3D-глобус, плоскую карту и маркеры аватаров в реальном времени.
* [LocoKit](https://github.com/sobri909/LocoKit) - Фреймворк записи местоположения и активности для iOS.

### Математика
[вернуться к началу](#readme)

* [Arithmosophi](https://github.com/phimage/Arithmosophi) - Набор протоколов для арифметических и логических операций.
* [BigInt](https://github.com/attaswift/BigInt) - Арифметика произвольной точности.
* [DDMathParser](https://github.com/davedelong/DDMathParser) - DDMathParser упрощает разбор строки и вычисление математического выражения.
* [SigmaSwiftStatistics](https://github.com/evgenyneu/SigmaSwiftStatistics) - Набор функций для статистических вычислений.
* [SwaTex](https://github.com/PhraseHQ/SwaTex) - Совместимый с KaTeX движок отображения математики LaTeX без JavaScript, WebView или DOM.
* [Upsurge](https://github.com/alejandro-isaza/Upsurge) - Простые и быстрые вычисления с матрицами и векторами.

### Обработка естественного языка
[вернуться к началу](#readme)


### Сеть
*Подборка библиотек, сокращающих время работы с HTTP-запросами.* [вернуться к началу](#readme)

* [Alamofire](https://github.com/Alamofire/Alamofire) :penguin: - Элегантная работа с сетью.
* [APIKit](https://github.com/ishkawa/APIKit) - Библиотека для создания типобезопасных клиентов веб-API.
* [Ciao](https://github.com/AlTavares/Ciao) - Публикация и обнаружение сервисов с помощью mDNS (Bonjour, Zeroconf).
* [CodyFire](https://github.com/CodyFlame/CodyFire) - Мощный конструктор и менеджер запросов API Codable для iOS на основе Alamofire.
* [Conduit](https://github.com/mindbody/Conduit) - Надёжная работа с веб-API.
* [Connectivity](https://github.com/rwbutler/Connectivity) - 🌐 Повышает надёжность определения интернет-соединения, обнаруживая сети Wi-Fi без доступа к интернету.
* [Dots](https://github.com/iAmrSalman/Dots) - Лёгкий фреймворк параллельной сетевой обработки.
* [GoodNetworking](https://github.com/GoodRequest/GoodNetworking) - 📡 Упрощение HTTP-сетевых запросов.
* [Heimdallr.swift](https://github.com/trivago/Heimdallr.swift) - Простая в использовании библиотека OAuth 2 для iOS.
* [Just](https://github.com/dduan/Just) :penguin: - HTTP для людей — библиотека в стиле python-requests.
* [Malibu](https://github.com/hyperoslo/Malibu) - Сетевая библиотека на основе промисов.
* [Moya](https://github.com/Moya/Moya) - Слой абстракции сетевого взаимодействия.
* [MultiPeer](https://github.com/dingwilson/MultiPeer) - Обёртка MultipeerConnectivity для автоматической офлайн-передачи данных между устройствами.
* [Netfox](https://github.com/kasketis/netfox) - Лёгкая библиотека отладки сети, настраиваемая одной строкой.
* [Netswift](https://github.com/MrSkwiggs/Netswift) - Высокоуровневое типобезопасное решение для работы с сетью.
* [OAuth2](https://github.com/p2/OAuth2) - Библиотека аутентификации OAuth2.
* [OAuthSwift](https://github.com/OAuthSwift/OAuthSwift) - Библиотека OAuth для iOS.
* [Pitaya](https://github.com/johnlui/Pitaya) :penguin: - Библиотека HTTP/HTTPS-сетевого взаимодействия, работающая непосредственно на машинах.
* [PMHTTP](https://github.com/postmates/PMHTTP) - Фреймворк HTTP с упором на REST и JSON.
* [Postal](https://github.com/snipsco/Postal) - Фреймворк для простого доступа к распространённым почтовым службам.
* [Reachability.swift](https://github.com/ashleymills/Reachability.swift) - Замена Reachability от Apple с замыканиями.
* [ReactiveAPI](https://github.com/sky-uk/ReactiveAPI) - Создавайте чистый, лаконичный и декларативный сетевой код на основе URLSession и RxSwift. Вдохновлено Retrofit.
* [ResponseDetective](https://github.com/netguru/ResponseDetective) - Ненавязчивый фреймворк для перехвата исходящих запросов и входящих ответов между приложением и сервером с целью отладки.
* [RxNetworks](https://github.com/yangKJ/RxNetworks) - Сетевой API на основе RxSwift, Moya, HandyJSON и плагинов.
* [ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG) - Быстрый туннельный прокси, помогающий обходить межсетевые экраны.
* [Siesta](https://bustoutsolutions.github.io/siesta/) - Элегантная абстракция REST API, упрощающая сложное управление состоянием. Альтернатива сетевому взаимодействию на основе callback и делегатов.
* [SolarNetwork](https://github.com/ThreeGayHub/SolarNetwork) - Элегантный слой абстракции сетевого взаимодействия.
* [SwiftHTTP](https://github.com/daltoniam/SwiftHTTP) - Обёртка NSURLSession.
* [SwiftyOAuth](https://github.com/delba/SwiftyOAuth) - Небольшая библиотека OAuth со встроенным набором поставщиков.
* [TermiNetwork](https://github.com/billp/TermiNetwork) - 🌏 Сетевое решение без зависимостей для создания современных и безопасных приложений iOS, watchOS, macOS и tvOS.
* [Tiercel](https://github.com/Danie1s/Tiercel) - Фоновые загрузки, восстановление после перезапуска, возобновляемая передача и управление задачами для приложений iOS.
* [TRON](https://github.com/MLSDev/TRON) - Лёгкий слой абстракции сети на основе Alamofire.
* [Wormholy](https://github.com/pmusolino/Wormholy) - Отладка сети iOS, словно волшебство 🧙.

#### HTML
*Нужно легко работать с содержимым HTML?* [вернуться к началу](#readme)

* [Fuzi](https://github.com/cezheng/Fuzi) - Быстрый и лёгкий парсер XML/HTML с поддержкой XPath и CSS.
* [Kanna](https://github.com/tid-kijyun/Kanna) - Ещё один парсер XML/HTML.
* [SwiftSoup](https://github.com/scinfu/SwiftSoup) :penguin: - Парсер HTML с лучшими возможностями DOM, CSS и jQuery.
* [WKZombie](https://github.com/mkoehnke/WKZombie) - Браузер без графического интерфейса.
* [ZMarkupParser](https://github.com/ZhgChgLi/ZMarkupParser) - Преобразование строк HTML в NSAttributedString с настраиваемыми стилями и тегами.

#### Протоколы обмена сообщениями
[вернуться к началу](#readme)

* [CocoaMQTT](https://github.com/emqx/CocoaMQTT) - MQTT для iOS и OS X.
* [Perfect-Notifications](https://github.com/PerfectlySoft/Perfect-Notifications) - Уведомления iOS для Linux и OS X.

#### SOAP
[вернуться к началу](#readme)

* [SOAPEngine](https://github.com/priore/SOAPEngine) - Универсальный SOAP-клиент для доступа к SOAP-веб-службам на iOS, Mac OS X и Apple TV.

#### Сокеты
[вернуться к началу](#readme)

* [BlueSocket](https://github.com/Kitura/BlueSocket ) - Кроссплатформенный низкоуровневый фреймворк сокетов IBM.
* [BlueSSLService](https://github.com/Kitura/BlueSSLService) - Дополнение SSL/TLS для низкоуровневого фреймворка сокетов IBM.
* [DNWebSocket](https://github.com/GlebRadchenko/DNWebSocket) - Объектно-ориентированная библиотека WebSocket, проверенная Autobahn (RFC 6455).
* [RxWebSocket](https://github.com/fjcaetano/RxWebSocket) - Реактивные WebSocket.
* [Socket.IO](https://github.com/socketio/socket.io-client-swift) :penguin: - Клиент Socket.IO для iOS и OS X.
* [sockets](https://github.com/vapor-community/sockets) :penguin: - TCP, UDP; клиент, сервер; Linux, OS X.
* [Starscream](https://github.com/daltoniam/Starscream) - WebSocket для iOS и OSX.
* [SwiftSocket](https://github.com/swiftsocket/SwiftSocket) - Простая библиотека TCP-сокетов.
* [SwiftWebSocket](https://github.com/tidwall/SwiftWebSocket) - Высокопроизводительная клиентская библиотека WebSocket.

#### Веб-сервер
*Хотите разместить веб-сервер на своём устройстве? Здесь вы узнаете, как это сделать.* [вернуться к началу](#readme)

* [Ambassador](https://github.com/envoy/Ambassador) - Сверхлёгкий веб-фреймворк на основе SWSGI.
* [Curassow](https://github.com/kylef-archive/Curassow) :penguin: - HTTP-сервер с моделью предварительно создаваемых рабочих процессов.
* [Embassy](https://github.com/envoy/Embassy) :penguin: - Сверхлёгкая библиотека асинхронного HTTP-сервера.
* [Kitura](https://github.com/Kitura/Kitura) :penguin: - Веб-фреймворк и сервер IBM для веб-служб.
* [Lightning](https://github.com/skylab-inc/Lightning) :penguin: - Кроссплатформенный однопоточный неблокирующий веб- и сетевой фреймворк.
* [Noze.io](https://github.com/NozeIO/Noze.io) :penguin: - Потоковая обработка событий ввода-вывода, как в Node.js.
* [Perfect](https://github.com/PerfectlySoft/Perfect) :penguin: - Swift на стороне сервера: библиотека Perfect, сервер приложений, коннекторы и примеры приложений.
* [swifter](https://github.com/httpswift/swifter) :penguin: - HTTP-сервер с обработчиком маршрутизации.
* [Vapor](https://github.com/vapor/vapor) :penguin: - Элегантный веб-фреймворк для iOS, OS X и Ubuntu.
* [Zewo](https://github.com/Zewo/Zewo) :penguin: - Swift на стороне сервера.

### OCR
[вернуться к началу](#readme)

* [SwiftOCR](https://github.com/NMAC427/SwiftOCR) - Библиотека OCR на основе нейронной сети.

### Оптимизация
[вернуться к началу](#readme)


### PDF
[вернуться к началу](#readme)

* [PDFGenerator](https://github.com/sgr-ksmt/PDFGenerator) - Простой генератор PDF. Создание PDF из представлений и изображений.
* [SimplePDF](https://github.com/nRewik/SimplePDF) - Лёгкое создание простых PDF-файлов.
* [UXMPDFKit](https://github.com/uxmstudio/UXMPDFKit) - Просмотрщик и аннотатор PDF для встраивания в приложения iOS.

### Качество кода
[вернуться к началу](#readme)

* [AnyLint](https://github.com/FlineDev/AnyLint) :penguin: - Проверяйте что угодно, объединяя возможности Swift и регулярных выражений.
* [IBLinter](https://github.com/IBDecodable/IBLinter) - Инструмент линтинга для Interface Builder.
* [L10nLint](https://github.com/s2mr/L10nLint) - Инструмент линтинга для Localizable.strings.
* [solid-like-a-rock](https://github.com/nenadvulic/solid-like-a-rock) :penguin: - Линтер архитектуры, обеспечивающий соблюдение правил Clean Architecture и импорта TCA с помощью SwiftSyntax.
* [swift-mod](https://github.com/ra1028/swift-mod) - Инструмент изменения кода Swift, связывающий генерацию кода с форматированием.
* [SwiftCop](https://github.com/andresinaka/SwiftCop) - Библиотека проверки данных, вдохновлённая ясностью проверок Active Record в Ruby On Rails.
* [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) - Библиотека и инструмент командной строки для форматирования кода Swift.
* [SwiftLint](https://github.com/realm/SwiftLint) - Инструмент для контроля соблюдения соглашений о стиле кода.
* [Swimat](https://github.com/Jintin/Swimat) - Плагин Xcode для форматирования кода.
* [Tailor](https://github.com/sleekbyte/tailor) :penguin: - Кроссплатформенный статический анализатор, помогающий писать более чистый код и избегать ошибок.

### Скрипты
[вернуться к началу](#readme)

* [Swift for Scripting](https://github.com/artemnovichkov/Swift-For-Scripting) - Тщательно подобранная коллекция полезных материалов по написанию скриптов.

### SDK
[вернуться к началу](#readme)


### Безопасность
[вернуться к началу](#readme)

* [SecurePropertyStorage](https://github.com/alexruperez/SecurePropertyStorage) - Помогает создавать безопасные хранилища для свойств с помощью обёрток свойств Swift.
* [TouchBridge](https://github.com/HMAKT99/UnTouchID) - Используйте отпечаток пальца телефона для аутентификации на любом Mac.

#### Криптография
*Упрощённая работа с криптографическими методами.* [вернуться к началу](#readme)

* [BlueCryptor](https://github.com/Kitura/BlueCryptor) - Кроссплатформенная криптографическая библиотека IBM.
* [BlueRSA](https://github.com/Kitura/BlueRSA) - Кроссплатформенная криптографическая библиотека RSA от IBM.
* [CryptoSwift](https://github.com/krzyzanowskim/CryptoSwift) :penguin: - Криптографические функции и вспомогательные средства.
* [IDZSwiftCommonCrypto](https://github.com/iosdevzone/IDZSwiftCommonCrypto) - Обёртка библиотеки Common Crypto от Apple.
* [JOSESwift](https://github.com/airsidemobile/JOSESwift) - Фреймворк для стандартов JOSE: JWS, JWE и JWK.
* [JWSETKit](https://github.com/amosavian/JWSETKit) - Библиотека JOSE с поддержкой JWS, JWT, JWE и JWK.
* [RNCryptor](https://github.com/RNCryptor/RNCryptor) - Обёртки CCCryptor (шифрование AES от Apple) для iOS и Mac.
* [SCrypto](https://github.com/sgl0v/scrypto) - Элегантный интерфейс для доступа к процедурам CommonCrypto.
* [Siphash](https://github.com/attaswift/SipHash) - Простое и безопасное хеширование алгоритмом SipHash.
* [Swift-Sodium](https://github.com/jedisct1/swift-sodium) - Интерфейс к библиотеке Sodium для распространённых криптографических операций в iOS и OS X.
* [Themis](https://github.com/cossacklabs/themis) - Многоязычный фреймворк, упрощающий типовые схемы шифрования: хранение данных, аутентифицированный обмен данными, защита передачи, аутентификация и многое другое.

#### Keychain
[вернуться к началу](#readme)

* [GoodPersistence](https://github.com/GoodRequest/GoodPersistence) - 💾 GoodPersistence упрощает кэширование данных в Keychain и UserDefaults с помощью обёрток свойств.
* [keychain-swift](https://github.com/evgenyneu/keychain-swift) - Вспомогательные функции для безопасного сохранения текста в Keychain в iOS, OS X, tvOS и watchOS.
* [KeychainAccess](https://github.com/kishikawakatsumi/KeychainAccess) - Простая обёртка Keychain для iOS и OS X.
* [Latch](https://github.com/endocrimes/Latch) - Простая обёртка Keychain для iOS.
* [SwiftKeychainWrapper](https://github.com/jrendel/SwiftKeychainWrapper) - Простая статическая обёртка Keychain iOS, позволяющая обращаться с ним так же, как с пользовательскими настройками.
* [Valet](https://github.com/square/Valet) - Valet позволяет безопасно сохранять данные в Keychain, не разбираясь в его устройстве. Это просто — обещаем.

### Потоковая передача
[вернуться к началу](#readme)

* [HaishinKit](https://github.com/HaishinKit/HaishinKit.swift) - Библиотека потоковой передачи с камеры и микрофона по RTMP и HLS для iOS, macOS и tvOS.
* [Live](https://github.com/ltebean/Live) - Пример создания приложения для прямых трансляций.

### Стилизация
[вернуться к началу](#readme)

* [Stylist](https://github.com/yonaskolb/Stylist) - Определяйте стили UI во внешних файлах YAML или JSON, которые можно перезагружать на лету.
* [SwiftTheme](https://github.com/wxxsw/SwiftTheme) - Мощный менеджер тем и оформления для iOS 8 и новее.
* [Themes](https://github.com/onmyway133/EasyTheme) - Управление темами.

### SVG
[вернуться к началу](#readme)

* [SVGView](https://github.com/exyte/SVGView) - Парсер и средство отображения SVG на SwiftUI.

### Система
[вернуться к началу](#readme)

* [BlueSignals](https://github.com/Kitura/BlueSignals) - Кроссплатформенная библиотека IBM для обработки сигналов ОС.
* [LaunchAtLogin](https://github.com/sindresorhus/LaunchAtLogin-Legacy) - Легко добавьте функцию запуска при входе в систему в изолированное приложение macOS.
* [SystemKit](https://github.com/beltex/SystemKit/) - Системная библиотека OS X.

### Тестирование
*Подборка фреймворков тестирования.* [вернуться к началу](#readme)

* [DVR](https://github.com/venmo/DVR) - Простой фреймворк сетевого тестирования.
* [Erik](https://github.com/phimage/Erik) - Браузер без графического интерфейса для доступа к веб-страницам и управления ими с помощью JavaScript; позволяет выполнять функциональные тесты.
* [Fakery](https://github.com/vadymmarkov/Fakery) - Генератор фиктивных данных.
* [Mussel](https://github.com/UrbanCompass/Mussel) - Фреймворк для удобного тестирования push-уведомлений, универсальных ссылок и маршрутизации в XCUITests.
* [Nimble](https://github.com/Quick/Nimble) - Фреймворк сопоставления.
* [OHHTTPStubs](https://github.com/AliSoftware/OHHTTPStubs) - Библиотека тестирования, упрощающая подмену сетевых запросов.
* [Quick](https://github.com/Quick/Quick) :penguin: - Quick — фреймворк разработки через поведение (BDD).
* [SBTUITestTunnel](https://github.com/Subito-it/SBTUITestTunnel) - Библиотека тестирования UI для работы с сетевыми запросами, подмены CLLocationManager и UNUserNotificationCenter и точной прокрутки таблиц, коллекций и представлений прокрутки.
* [Sizes](https://github.com/marcosgriselli/Sizes) - Тестируйте приложение на устройствах и размерах шрифтов.
* [SnapshotTest](https://github.com/parski/SnapshotTest) - Инструмент тестирования снимками экрана для iOS и tvOS.
* [Spectre](https://github.com/kylef/Spectre) :penguin: - Фреймворк BDD.
* [swift-testing-expectation](https://github.com/dfed/swift-testing-expectation) - Создание асинхронных ожиданий в Swift Testing.
* [SwiftCheck](https://github.com/typelift/SwiftCheck) - Библиотека тестирования, автоматически генерирующая случайные данные для проверки свойств программы.
* [UI Testing Cheat Sheet](https://github.com/joemasilotti/UI-Testing-Cheat-Sheet) - Ответы на частые вопросы «Как это тестировать с помощью UI Testing?» с работающим примером приложения.
* [XCTest](https://github.com/swiftlang/swift-corelibs-xctest) - Проект XCTest — основная библиотека Swift для поддержки модульного тестирования.

#### Моки
[вернуться к началу](#readme)

* [AutoMockable](https://github.com/vincent-pradeilles/AutoMocker) - Фреймворк, использующий систему типов для простого создания поддельных экземпляров типов данных.
* [Cuckoo](https://github.com/Brightify/Cuckoo) - Первый фреймворк имитации без шаблонного кода.
* [Mocker](https://github.com/WeTransfer/Mocker) - Подмена запросов Alamofire и URLSession без изменения реализации кода.
* [Mockingbird](https://github.com/Farfetch/mockingbird) - Упрощение тестирования ПО путём имитации любой системы через HTTP/HTTPS — команда может разрабатывать и тестировать незавершённую или нестабильную службу и воспроизводить запланированные сценарии.
* [Mockingjay](https://github.com/kylef/Mockingjay) - Элегантная библиотека для простой подмены HTTP-запросов.
* [Mockit](https://github.com/sabirvirtuoso/Mockit) - Простой фреймворк имитации, вдохновлённый популярным Mockito для Java.
* [MockSwift](https://github.com/leoture/MockSwift) - Фреймворк имитации, использующий возможности обёрток свойств.

### Текст
*Подборка проектов для работы с текстом.* [вернуться к началу](#readme)

* [Attributed](https://github.com/Nirma/Attributed) - Современный микрофреймворк для атрибутированных строк.
* [AttributedTextView](https://github.com/evermeer/AttributedTextView) - Простой способ создать UITextView с атрибутами и поддержкой нескольких ссылок, хэштегов и упоминаний.
* [BonMot](https://github.com/Rightpoint/BonMot) - Красивые атрибутированные строки для iOS.
* [Croc](https://github.com/JKalash/Croc) - Лёгкая библиотека разбора и поиска эмодзи.
* [edhita](https://github.com/tnantoka/edhita) - Полностью открытый текстовый редактор для iOS.
* [GMarkdown](https://github.com/GIKICoder/GMarkdown) - Библиотека отображения Markdown для iOS с поддержкой таблиц, LaTeX, Mermaid и подсветки кода.
* [MarkdownDisplayView](https://github.com/zjc19891106/MarkdownDisplayView) - Компонент отображения Markdown на основе TextKit 2: обеспечивает плавную работу, широкие возможности настройки и поддержку потоковых диалогов с ИИ.
* [MarkdownKit](https://github.com/bmoliveira/MarkdownKit) - Простой настраиваемый парсер Markdown.
* [MarkdownView](https://github.com/keitaoouchi/MarkdownView) - Представление Markdown для iOS.
* [MarkyMark](https://github.com/M2Mobi/Marky-Mark) - Преобразование Markdown в нативные представления или атрибутированные строки.
* [Notepad](https://github.com/ruddfawcett/Notepad) - Полностью настраиваемый редактор Markdown с подсветкой синтаксиса в реальном времени.
* [OEMentions](https://github.com/omar14/OEMentions) - Простой способ добавлять в uitextview упоминания, как в Facebook и Instagram.
* [Parsey](https://github.com/rxwei/Parsey) - Фреймворк комбинаторов парсеров с отслеживанием расположения в исходнике, предотвращением возврата и подробными сообщениями об ошибках.
* [Pluralize.swift](https://github.com/joshualat/Pluralize.swift) - Отличное расширение String для образования множественного числа.
* [PredicateFlow](https://github.com/andreadelfante/PredicateFlow) - Конструктор для записи красивых, строго типизированных и легко читаемых NSPredicate.
* [PrediKit](https://github.com/KrakenDev/PrediKit) - DSL для NSPredicate в iOS и OS X, вдохновлённый SnapKit.
* [Regex by crossroadlabs](https://github.com/crossroadlabs/Regex) :penguin: - Очень простая в использовании библиотека регулярных выражений с богатыми возможностями. Поддерживает оператор `=~` и API на основе методов. Покрыта модульными тестами.
* [Regex by sindresorhus](https://github.com/sindresorhus/Regex) - Регулярные выражения в стиле Swift: полностью протестированы и документированы, с корректной обработкой Unicode.
* [RichEditorView](https://github.com/cjwirth/RichEditorView) - Простой модульный подкласс UIView для редактирования форматированного текста.
* [Sprinter](https://github.com/nicklockwood/Sprinter) - Библиотека форматирования строк.
* [SwiftRichString](https://github.com/malcommac/SwiftRichString) - Элегантная и удобная библиотека управления атрибутированными строками.
* [SwiftVerbalExpressions](https://github.com/VerbalExpressions/SwiftVerbalExpressions) - Порт VerbalExpressions.
* [SwiftyAttributes](https://github.com/eddiekaiger/SwiftyAttributes) - Расширения, упрощающие работу с атрибутированными строками.
* [Tagging](https://github.com/k-lpmg/Tagging) - TextView с удобной функцией добавления тегов для упоминаний и хэштегов.
* [Texstyle](https://github.com/rosberry/texstyle) - Texstyle позволяет легко форматировать атрибутированные строки.
* [TextAttributes](https://github.com/delba/TextAttributes) - Упрощённое составление атрибутированных строк.
* [TextBuilder](https://github.com/davdroman/swiftui-text-builder) - Аналог SwiftUI ViewBuilder, но для Text.
* [TwitterTextEditor](https://github.com/twitter/TwitterTextEditor) - Самостоятельный гибкий API, предоставляющий полнофункциональный редактор форматированного текста для приложений iOS.
* [VEditorKit](https://github.com/GeekTree0101/VEditorKit) - Лёгкий и мощный набор инструментов редактора.

### Потоки
*Многопоточность, программирование на основе задач и асинхронное программирование; обёртки Grand Central Dispatch (GCD).* [вернуться к началу](#readme)

* [Async](https://github.com/duemunk/Async) - Синтаксический сахар для Grand Central Dispatch.
* [AwaitKit](https://github.com/yannickl/AwaitKit) - Управление потоком ES7 Async/Await.
* [Each](https://github.com/dalu93/Each) - Each — библиотека-переходник для NSTimer.
* [GCDTimer](https://github.com/hemantasapkota/GCDTimer) - Хорошо протестированный таймер GCD.
* [Schedule](https://github.com/luoxiu/Schedule) :penguin: - Лёгкий планировщик задач с чрезвычайно понятным синтаксисом, которого не хватало.
* [SwiftyTimer](https://github.com/radex/SwiftyTimer) - API для NSTimer.

### UI
*Подборка готовых переходов и интересных UI-компонентов.* [вернуться к началу](#readme)

* [ActivityIndicatorView](https://github.com/exyte/ActivityIndicatorView) - Набор готовых индикаторов загрузки, созданных с помощью SwiftUI.
* [AECoreDataUI](https://github.com/tadija/AERecord) - Интерфейс на основе Core Data.
* [AGCircularPicker](https://github.com/agilie/AGCircularPicker) - Полезный компонент для создания контроллера управления любым вычисляемым параметром.
* [AMScrollingNavbar](https://github.com/andreamazz/AMScrollingNavbar) - Прокручиваемый UINavigationBar, следующий за прокруткой UIScrollView.
* [Arale](https://github.com/supercomputra/Arale) - Пользовательский растягиваемый заголовок для UIScrollView и его подклассов с поддержкой UIActivityIndicatorView при перезагрузке содержимого.
* [BadgeHub](https://github.com/jogendra/BadgeHub) - Превратите любой UIView в полноценный анимированный центр уведомлений. Быстро добавляйте значок уведомления в UIView.
* [BatteryView](https://github.com/yonat/BatteryView) - Простой UIView в форме батареи.
* [BetterSafariView](https://github.com/stleamist/BetterSafariView) - Удобный способ отображать SFSafariViewController или запускать ASWebAuthenticationSession в SwiftUI.
* [BottomSheet](https://github.com/joomcode/BottomSheet) - Мощный компонент Bottom Sheet с размером по содержимому, интерактивным закрытием и поддержкой контроллера навигации.
* [BreakOutToRefresh](https://github.com/dasdom/BreakOutToRefresh) - Интерактивное представление обновления свайпом вниз на основе SpriteKit.
* [BulletinBoard](https://github.com/alexaubry/BulletinBoard) - Создание и управление контекстными карточками внизу экрана.
* [CapturePreventionKit](https://github.com/Jaesung-Jung/CapturePreventionKit) - Предоставляет `Label` и `ImageView` для `защиты от снимков экрана`.
* [CircularProgress](https://github.com/sindresorhus/CircularProgress) - Круговой индикатор выполнения для приложения macOS.
* [CircularRangeSlider](https://github.com/diegotid/circular-range-slider) - Настраиваемый компонент SwiftUI для выбора диапазона значений с помощью кругового слайдера.
* [ClassicKit](https://github.com/Baddaboo/ClassicKit) - Набор UI-компонентов в классическом стиле.
* [ContainerController](https://github.com/mrustaa/ContainerController) - Компонент UI. Копия панели свайпов из приложений Apple Maps и Stocks.
* [CountryPickerView](https://github.com/kizitonwose/CountryPickerView) - Простое настраиваемое представление для эффективного сбора сведений о стране в приложениях iOS.
* [CustomSegue](https://github.com/phimage/CustomSegue) - Пользовательский segue для Storyboards OSX с эффектами сдвига и наплыва.
* [DeckTransition](https://github.com/HarshilShah/DeckTransition) - Библиотека для воссоздания перехода экрана воспроизведения Apple Music из iOS 10.
* [DockProgress](https://github.com/sindresorhus/DockProgress) - Отображение прогресса на значке приложения в Dock macOS.
* [Dodo](https://github.com/evgenyneu/Dodo) - Панель сообщений для iOS.
* [Doric Design System Foundation](https://github.com/jayeshk/Doric) - Основа масштабируемой типобезопасной дизайн-системы для iOS, ориентированная на протоколы.
* [DropDown](https://github.com/AssistoLab/DropDown) - Выпадающее меню Material Design для iOS.
* [Elissa](https://github.com/KitchenStories/Elissa) - Показывает уведомление над UITabBarItem или любым опорным UIView, чтобы раскрыть дополнительную информацию.
* [EstMusicIndicator](https://github.com/Aufree/ESTMusicIndicator) - Индикатор воспроизведения музыки в стиле iTunes.
* [Family](https://github.com/zenangst/Family) - Фреймворк дочерних контроллеров, упрощающий создание родительских контроллеров.
* [FAQView](https://github.com/mukeshthawani/faqview) - Простое в использовании представление FAQ для iOS.
* [Fashion](https://github.com/vadymmarkov/Fashion) - Аксессуары и инструменты оформления, позволяющие делиться стилями UI и повторно их использовать.
* [FlagKit](https://github.com/madebybowtie/FlagKit) - Красивые значки флагов для приложений и веб-сайтов.
* [FlexibleHeader](https://github.com/k-lpmg/FlexibleHeader) - Контейнерное представление, реагирующее на прокрутку UIScrollView.
* [FloatRatingView](https://github.com/glenyi/FloatRatingView) - Плавающая система рейтингов.
* [Fluid Slider](https://github.com/Ramotion/fluid-slider) - Слайдер с всплывающим пузырём, показывающим выбранное точное значение.
* [GaugeKit](https://github.com/skywinder/GaugeKit) - Настраиваемые шкалы. Простое воспроизведение шкал в стиле Apple.
* [GMStepper](https://github.com/gmertk/GMStepper) - Степпер с подвижной подписью посередине.
* [GradientProgressBar](https://github.com/fxm90/GradientProgressBar) - Анимированная градиентная полоса прогресса.
* [GRMustache](https://github.com/groue/GRMustache.swift) - Гибкие шаблоны Mustache.
* [GrowingTextView](https://github.com/KennethTsang/GrowingTextView) - UITextView с автоматическим изменением высоты, заполнителем и ограничением длины.
* [HGCircularSlider](https://github.com/HamzaGhazouani/HGCircularSlider) - Пользовательский повторно используемый круговой слайдер для приложений iOS.
* [HidesNavigationBarWhenPushed](https://github.com/gontovnik/HidesNavigationBarWhenPushed) - Библиотека, позволяющая скрывать панель навигации при переходе к контроллеру представления с помощью флага hidesNavigationBarWhenPushed.
* [HorizontalDial](https://github.com/kciter/HorizontalDial) - Горизонтальный диск прокрутки в стиле Instagram.
* [HPParallaxHeader](https://github.com/ngochiencse/HPParallaxHeader) - Простой параллакс-заголовок для UIScrollView.
* [IGColorPicker](https://github.com/iGenius-Srl/IGColorPicker) - Настраиваемый выбор цвета для iOS.
* [InstantSearch iOS](https://github.com/algolia/instantsearch-ios) - Библиотека виджетов и вспомогательных средств для мгновенного поиска в iOS.
* [KALoader](https://github.com/Kirillzzy/KALoader) - Красивые анимированные заполнители для отображения загрузки данных.
* [KMNavigationBarTransition](https://github.com/MoZhouqi/KMNavigationBarTransition) - Универсальная библиотека, упрощающая настройку стилей панели навигации и сглаживающая анимацию переходов между ними при открытии и закрытии контроллеров представлений в любой ориентации.
* [KMPlaceholderTextView](https://github.com/MoZhouqi/KMPlaceholderTextView) - Подкласс UITextView с поддержкой многострочного заполнителя.
* [LeeGo](https://github.com/wangshengjia/LeeGo) - Декларативная, настраиваемая и повторно используемая разработка UI по принципу конструктора Lego.
* [LicensePlist](https://github.com/mono0926/LicensePlist) - Инструмент командной строки для автоматической генерации Plist со всеми зависимостями.
* [LiquidLoader](https://github.com/yoavlt/LiquidLoader) - Компоненты индикатора загрузки с жидкой анимацией.
* [LoadingShimmer](https://github.com/jogendra/LoadingShimmer) - Простой способ добавить эффект мерцания к любому представлению одной строкой кода; подходит для ненавязчивой индикации загрузки.
* [Macaw](https://github.com/exyte/macaw) - Мощная и простая в использовании библиотека векторной графики с поддержкой SVG.
* [Magnetic](https://github.com/efremidze/Magnetic) - Плавающий пузырьковый переключатель SpriteKit (вдохновлён Apple Music).
* [Mandoline](https://github.com/blueapron/Mandoline) - Представление выбора для iOS на все случаи жизни.
* [MantleModal](https://github.com/canalesb93/MantleModal) - Простой модальный компонент на основе UIScrollView, позволяющий закрыть окно перетаскиванием вниз.
* [Material](https://github.com/CosmicMind/Material) - Проявите творческий потенциал с Material — фреймворком анимации и графики для Material Design от Google и Flat UI от Apple.
* [Material Components for iOS](https://github.com/material-components/material-components-ios) - Модульные и настраиваемые UI-компоненты Material Design.
* [MaterialKit](https://github.com/nghialv/MaterialKit) - Компоненты Material Design.
* [MediaBrowser](https://github.com/younatics/MediaBrowser) - Простой просмотрщик фотографий и видео для iOS с необязательной сеткой, подписями и выбором.
* [MPParallaxView](https://github.com/DroidsOnRoids/MPParallaxView) - Эффект параллакса Apple TV.
* [MultiSelectSegmentedControl](https://github.com/yonat/MultiSelectSegmentedControl) - Вариант UISegmentedControl с поддержкой множественного выбора, вертикальной компоновки и сочетания текста с изображениями.
* [MultiSlider](https://github.com/yonat/MultiSlider) - Клон UISlider с несколькими ползунками и значениями, подсветкой диапазона, необязательными интервалами привязки и подписями; поддерживается вертикальная и горизонтальная ориентация.
* [MuscleMap](https://github.com/melihcolpan/MuscleMap) - Отображение интерактивных карт мышц тела с помощью SwiftUI и UIKit.
* [MXParallaxHeader](https://github.com/maxep/MXParallaxHeader) - Простой параллакс-заголовок для UIScrollView.
* [MZFormSheetPresentationController](https://github.com/m1entus/MZFormSheetPresentationController) - Альтернатива стандартному iOS UIModalPresentationFormSheet с поддержкой iPhone и дополнительными настройками размера и оформления контроллера.
* [NeumorphismKit](https://github.com/y-okudera/NeumorphismKit) - Фреймворк неоморфизма для UIKit.
* [NextGrowingTextView](https://github.com/FluidGroup/NextGrowingTextView) - Новое поколение растущих текстовых представлений, оптимизированное для iOS 7 и новее.
* [NVActivityIndicatorView](https://github.com/ninjaprox/NVActivityIndicatorView) - Подборка красивых анимаций загрузки.
* [OverlayContainer](https://github.com/applidium/OverlayContainer) - OverlayContainer упрощает разработку интерфейсов с наложениями, как в приложениях Apple Maps и Stocks.
* [Partition Kit](https://github.com/kieranb662/PartitionKit) - Библиотека SwiftUI для создания изменяемых секций содержимого View.
* [Popovers](https://github.com/aheze/Popovers) - Библиотека для отображения всплывающих окон. Простая, современная, настраиваемая и нескучная!
* [Preferences](https://github.com/sindresorhus/Settings) - Добавьте окно настроек в приложение macOS за несколько минут.
* [ProgressIndicatorView](https://github.com/exyte/ProgressIndicatorView) - Библиотека индикаторов выполнения на SwiftUI.
* [PullToDismiss](https://github.com/sgr-ksmt/PullToDismiss) - Закрытие модального контроллера представления перетаскиванием представления прокрутки или панели навигации.
* [RangeSeekSlider](https://github.com/WorldDownTown/RangeSeekSlider) - Настраиваемый слайдер диапазона в стиле UISlider для iOS.
* [Reel search](https://github.com/Ramotion/reel-search) - Список вариантов в виде плёнки.
* [ResizingTokenField](https://github.com/tadejr/ResizingTokenField) - Поле токенов на основе UICollectionView с естественной высотой содержимого.
* [RetroProgress](https://github.com/hyperoslo/RetroProgress) - Полоса прогресса в ретро-стиле прямиком из 90-х.
* [SectionedSlider](https://github.com/LeonardoCardoso/SectionedSlider) - Слайдер для Центра управления.
* [SelectionDialog](https://github.com/kciter/SelectionDialog) - Простой диалог выбора.
* [ShadowView](https://github.com/PierrePerrin/ShadowView) - Упрощённое управление тенями UIView.
* [Shiny](https://github.com/efremidze/Shiny) - Переливающийся эффект для представления (вдохновлён Apple Pay Cash).
* [ShowSomeProgress](https://github.com/stoneburner/ShowSomeProgress) - Анимированные индикаторы прогресса и активности для приложений iOS.
* [SkeletonView](https://github.com/Juanpe/SkeletonView) - Элегантный способ показать пользователям, что выполняется загрузка, и подготовить их к появлению ожидаемого содержимого.
* [SKPhotoBrowser](https://github.com/suzuki-0000/SKPhotoBrowser) - Простой просмотрщик фотографий, вдохновлённый просмотрщиками Facebook и Twitter.
* [Spots](https://github.com/hyperoslo) - Spots — фреймворк контроллеров представлений, ускоряющий настройку и дальнейшую разработку.
* [SpreadsheetView](https://github.com/kishikawakatsumi/SpreadsheetView) - Полностью настраиваемые интерфейсы электронных таблиц для приложений iOS.
* [StarryStars](https://github.com/peterprokop/StarryStars) - Отображение и редактирование оценок с полной настройкой в Interface Builder.
* [StatefulViewController](https://github.com/aschuch/StatefulViewController) - Представления-заполнители для состояний содержимого: загрузка, ошибка или пустой результат.
* [StepProgressView](https://github.com/yonat/StepProgressView) - Пошаговое представление прогресса с подписями и фигурами. Хорошая замена UIActivityIndicatorView и UIProgressView.
* [SweetCurtain](https://github.com/ihormalovanyi/SweetCurtain) - Простая реализация нижней панели, которую можно перетаскивать. Аналогичные компоненты есть в Apple Maps, Find My, Stocks и других приложениях.
* [SwiftUISkia](https://github.com/rustq/swiftui-skia) - Библиотека отрисовки 2D-графики SwiftUI на основе Skia и программной растеризации на Rust.
* [SwiftyUI](https://github.com/haoking/SwiftyUI) - Высокопроизводительные лёгкие UIView, UIImage, UIImageView, UILabel, UIButton и другие компоненты.
* [TagListView](https://github.com/ElaWorkshop/TagListView) - Простое, но гибко настраиваемое представление списка тегов для iOS.
* [Toaster](https://github.com/devxoul/Toaster) - Всплывающие уведомления.
* [Twinkle](https://github.com/piemonte/Twinkle) - Простой способ заставить элементы приложения iOS мерцать.
* [UltraDrawerView](https://github.com/super-ultra/UltraDrawerView) - Лёгкая, быстрая и настраиваемая реализация Drawer View, похожая на Apple Maps, Stocks и другие приложения.
* [URLEmbeddedView](https://github.com/marty-suzuki/URLEmbeddedView) - Автоматически кэширует объект, определённый протоколом Open Graph, и отображает его как встроенную карточку URL.
* [Windless](https://github.com/ParkGwangBeom/Windless) - Windless упрощает создание невидимого представления-заполнителя при загрузке компоновки.
* [WSTagsField](https://github.com/whitesmith/WSTagsField) - Текстовое поле iOS для отображения различных тегов.
* [YMTreeMap](https://github.com/yahoo/YMTreeMap) - Движок компоновки древовидных карт и тепловых карт на основе Squarified.
* [YNSearch](https://github.com/younatics/YNSearch) - Полностью настраиваемое представление поиска в стиле Pinterest.

#### Предупреждения
*Библиотеки для отображения предупреждений, меню действий, уведомлений и всплывающих окон.* [вернуться к началу](#readme)

* [Alertift](https://github.com/sgr-ksmt/Alertift) - Современная удобная обёртка UIAlertController.
* [Alerts Pickers](https://github.com/dillidon/alerts-and-pickers) - Расширенное использование UIAlertController с TextField, DatePicker, PickerView, TableView и CollectionView.
* [ALRT](https://github.com/mshrwtnb/alrt) - Упрощённый конструктор UIAlertController. Показывайте предупреждение откуда угодно.
* [AwaitToast](https://github.com/k-lpmg/AwaitToast) - 🍞 Асинхронное всплывающее уведомление ожидания с базовым уведомлением, вдохновлённое индикатором публикации Facebook.
* [CDAlertView](https://github.com/candostdagdeviren/CDAlertView) - Гибко настраиваемое всплывающее предупреждение, уведомление, сообщение об успехе, ошибке или тревоге.
* [CFNotify](https://github.com/JT501/SwiftNotify) - Настраиваемый фреймворк для создания перетаскиваемых представлений предупреждений.
* [EZAlertController](https://github.com/thellimist/EZAlertController) - Простой UIAlertController.
* [FullscreenPopup](https://github.com/Ryu0118/swift-fullscreen-popup) - Показывайте любое всплывающее окно поверх панели навигации в SwiftUI.
* [GSMessage](https://github.com/wxxsw/GSMessages) - Простые стильные сообщения и уведомления для iOS 7 и новее.
* [Kamagari](https://github.com/tasanobu-zz/Kamagari) - Простой класс-конструктор UIAlertController.
* [Loaf](https://github.com/schmidyy/Loaf) - Простой фреймворк для удобных всплывающих уведомлений iOS.
* [MijickPopups](https://github.com/Mijick/Popups) - Упрощённое отображение всплывающих окон, popover, панелей, предупреждений, уведомлений и баннеров.
* [NotificationBanner](https://github.com/Daltron/NotificationBanner) - Самый простой способ отображать гибко настраиваемые баннеры уведомлений в приложении iOS.
* [PMAlertController](https://github.com/pmusolino/PMAlertController) - Отличная настраиваемая замена UIAlertController.
* [PopupDialog](https://github.com/orderella/PopupDialog) - Простой настраиваемый диалог, заменяющий стиль предупреждений UIAlertController.
* [PopupView](https://github.com/exyte/PopupView) - Библиотека всплывающих сообщений и окон на SwiftUI.
* [SCLAlertView](https://github.com/vikmeup/SCLAlertView-Swift) - Анимированное представление предупреждения.
* [Sheet](https://github.com/ParkGwangBeom/Sheet) - Меню действий с навигацией, как в приложении Flipboard.
* [SPAlert](https://github.com/sparrowcode/AlertKit) - Нативное всплывающее окно из Apple Music и Feedback в App Store. Включает варианты «Готово» и «Сердце».
* [StatusAlert](https://github.com/LowKostKustomz/StatusAlert) - Отображение скрывающихся системных предупреждений в стиле Apple без прерывания работы пользователя.
* [SweetAlert](https://github.com/codestergit/SweetAlert-iOS) - Система предупреждений.
* [Swift-Prompts](https://github.com/GabrielAlva/Swift-Prompts) - Создавайте пользовательские подсказки с широким выбором вариантов.
* [SwiftEntryKit](https://github.com/huri000/SwiftEntryKit) - Простой универсальный компонент для показа всплывающих окон.
* [SwiftMessages](https://github.com/SwiftKickMobile/SwiftMessages) - Очень гибкая панель сообщений для iOS.
* [SwiftOverlays](https://github.com/peterprokop/SwiftOverlays) - Различные всплывающие окна и уведомления.
* [Toast-Swift](https://github.com/BastiaanJansen/Toast-Swift) - Простая в использовании библиотека всплывающих уведомлений в стиле iOS 14 и новее.
* [XLActionController](https://github.com/xmartlabs/XLActionController) - Полностью настраиваемый и расширяемый контроллер меню действий.
* [Zingle](https://github.com/hemangshah/Zingle) - Предупреждение отображается под UINavigationBar.

#### Размытие
[вернуться к началу](#readme)

* [VisualEffectView](https://github.com/efremidze/VisualEffectView) - Подкласс UIVisualEffectView с цветом оттенка.

#### Кнопки
[вернуться к началу](#readme)

* [AHDownloadButton](https://github.com/amerhukic/AHDownloadButton) - Настраиваемая кнопка загрузки с прогрессом и анимацией переходов, основанная на кнопке загрузки App Store от Apple.
* [DOFavoriteButton](https://github.com/okmr-d/DOFavoriteButton) - Милая анимированная кнопка.
* [ExpandableButton](https://github.com/DimaMishchenko/ExpandableButton) - Настраиваемая и простая в использовании раскрывающаяся кнопка.
* [FloatingButton](https://github.com/exyte/FloatingButton) - Легко настраиваемое меню плавающих кнопок на SwiftUI.
* [Floaty](https://github.com/kciter/Floaty) - Плавающая кнопка действия для iOS.
* [IGStoryButtonKit](https://github.com/KaoruMuta/IGStoryButtonKit) - Удобная кнопка с насыщенной анимацией в стиле историй Instagram.
* [LGButton](https://github.com/loregr/LGButton) - Полностью настраиваемый подкласс нативного UIControl для создания красивых кнопок без написания кода.
* [LTHRadioButton](https://github.com/rolandleth/LTHRadioButton) - Радиокнопка с красивой анимацией.
* [MultiToggleButton](https://github.com/yonat/MultiToggleButton) - Подкласс UIButton, переключающий подпись при нажатии (например, кнопки вспышки и таймера камеры).
* [NFDownloadButton](https://github.com/LeonardoCardoso/NFDownloadButton) - Обновлённая кнопка загрузки, созданная методом обратной разработки кнопки загрузки приложения Netflix.
* [PMSuperButton](https://github.com/pmusolino/PMSuperButton) - Мощный UIButton со сверхвозможностями, настраиваемый в Storyboard.
* [RadioGroup](https://github.com/yonat/RadioGroup) - Недостающая группа радиокнопок iOS.
* [SwiftShareBubbles](https://github.com/takecian/SwiftShareBubbles) - Анимированный элемент управления кнопками публикации в социальных сетях для iOS.
* [TransitionButton](https://github.com/AladinWay/TransitionButton) - Подкласс UIButton с анимацией загрузки и переходов.

#### Календарь
[вернуться к началу](#readme)

* [CalendarKit](https://github.com/richardtop/CalendarKit) - Полностью настраиваемое представление календаря на день.
* [CalendarView](https://github.com/mmick66/CalendarView) - Компонент календаря с вертикальной и горизонтальной компоновкой и прокруткой, отображающий события нативного календаря.
* [DateTimePicker](https://github.com/itsmeichigo/DateTimePicker) - Улучшенный компонент интерфейса выбора даты и времени для iOS.
* [ElegantCalendar](https://github.com/ThasianX/ElegantCalendar) - Элегантный полноэкранный календарь, которого не хватало SwiftUI.
* [HorizonCalendar](https://github.com/airbnb/HorizonCalendar) - Декларативный высокопроизводительный компонент календаря iOS: от простого выбора даты до полнофункционального приложения календаря.
* [JTAppleCalendar](https://github.com/patchthecode/JTAppleCalendar) - Обработчик UI-календаря.
* [KVKCalendar](https://github.com/kvyatkovskys/KVKCalendar) - Полностью настраиваемый календарь для платформ Apple 📅
* [OBCalendar](https://github.com/oBilet/OBCalendar) - OBCalendar создан для простоты и настройки: с его помощью легко создавать красивые функциональные интерфейсы календаря.
* [Workaholic](https://github.com/hemangshah/Workaholic) - Временная шкала вклада в работу в стиле GitHub.
* [Yotei](https://github.com/claustrofob/Yotei) - Модульный настраиваемый пакет календаря SwiftUI/UIKit для iOS.

#### Карточки
[вернуться к началу](#readme)

* [CardNavigation](https://github.com/james01/CardNavigation) - Контроллер навигации, отображающий контроллеры представлений в виде интерактивного стека карточек.
* [CardParts](https://github.com/intuit/CardParts) - Реактивный UI-фреймворк на основе карточек и UIKit для разработчиков iOS.
* [VerticalCardSwiper](https://github.com/JoniVR/VerticalCardSwiper) - Сочетание интерфейса Shazam Discover и Tinder на основе UICollectionView.

#### Формы
[вернуться к началу](#readme)

* [Carbon](https://github.com/ra1028/Carbon) - 🚴 Декларативная библиотека для создания компонентных пользовательских интерфейсов в UITableView и UICollectionView.
* [Eureka](https://github.com/xmartlabs/Eureka) - Элегантный конструктор форм для iOS.
* [FDBarGauge](https://github.com/fulldecent/FDBarGauge) - Имитация индикатора уровня на аудиомикшерном пульте.
* [Former](https://github.com/ra1028/Former) - Полностью настраиваемая библиотека для простого создания форм на основе UITableView.
* [ObjectForm](https://github.com/haojianzong/ObjectForm) - Простая, но мощная библиотека создания форм для моделей классов.
* [SwiftyFORM](https://github.com/neoneye/SwiftyFORM) - Формы с возможностью проверки данных.

#### HUD
[вернуться к началу](#readme)

* [EZLoadingActivity](https://github.com/Esqarrouth/EZLoadingActivity) - Лёгкий индикатор активности загрузки HUD.
* [GradientLoadingBar](https://github.com/fxm90/GradientLoadingBar) - Анимированная градиентная полоса загрузки.
* [KRProgressHUD](https://github.com/krimpedance/KRProgressHUD) - Красивый настраиваемый индикатор прогресса HUD.
* [PKHUD](https://github.com/pkluz/PKHUD) - Повторная реализация HUD от Apple.

#### Подписи
[вернуться к началу](#readme)

* [ActiveLabel](https://github.com/optonaut/ActiveLabel.swift) - Замена UILabel с поддержкой хэштегов (#), упоминаний (@) и URL (http://).
* [Atributika](https://github.com/psharanda/Atributika) - Преобразование текста с HTML-тегами, ссылками, хэштегами и упоминаниями в NSAttributedString. Делает их интерактивными и заменяет UILabel.
* [CountdownLabel](https://github.com/suzuki-0000/CountdownLabel) - Простой UILabel обратного отсчёта с морфинг-анимацией и полезными функциями.
* [GlitchLabel](https://github.com/kciter/GlitchLabel) - UILabel с эффектом глитча для iOS.
* [IncrementableLabel](https://github.com/tbaranes/IncrementableLabel) - Подкласс UILabel для увеличения и уменьшения чисел в UILabel.
* [KDEDateLabel](https://github.com/delannoyk/KDEDateLabel) - Подкласс UILabel, автоматически обновляющий представление относительного времени.
* [LTMorphingLabel](https://github.com/lexrus/LTMorphingLabel) - Плавные морфинг-эффекты для UILabel.
* [Nantes](https://github.com/instacart/Nantes) - Замена TTTAttributedLabel.
* [TriLabelView](https://github.com/mukeshthawani/TriLabelView) - Представление угловой подписи треугольной формы для iOS.

#### Меню
[вернуться к началу](#readme)

* [AKSwiftSlideMenu](https://github.com/ashishkakkad8/AKSwiftSlideMenu) - Боковое меню (выдвижная панель).
* [CircleMenu](https://github.com/Ramotion/circle-menu) - CircleMenu — простое элегантное меню с круговой компоновкой и анимацией Material Design.
* [ENSwiftSideMenu](https://github.com/evnaz/ENSwiftSideMenu) - Выдвижное боковое меню.
* [FanMenu](https://github.com/exyte/fan-menu) - Меню с круговой компоновкой на основе Macaw.
* [FlowingMenu](https://github.com/yannickl/FlowingMenu) - Интерактивный переход представления для отображения меню с эффектами текучести и отскока.
* [GuillotineMenu](https://github.com/Yalantis/GuillotineMenu) - Меню в стиле гильотины.
* [HHFloatingView](https://github.com/hemangshah/HHFloatingView) - Простое в использовании и настройке плавающее представление для приложения.
* [InteractiveSideMenu](https://github.com/handsomecode/InteractiveSideMenu) - Настраиваемое интерактивное боковое меню iOS.
* [KWDrawerController](https://github.com/Kawoou/KWDrawerController) - Простой в использовании контроллер выдвижной панели.
* [MenuItemKit](https://github.com/cxa/MenuItemKit) - `UIMenuItem` с поддержкой изображения и блока (замыкания).
* [Pagemenu](https://github.com/PageMenu/PageMenu) - Контроллер представления с поддержкой пагинации.
* [PagingKit](https://github.com/kazuhiro4949/PagingKit) - PagingKit предоставляет настраиваемый интерфейс меню.
* [Panels](https://github.com/antoniocasero/Panels) - Фреймворк для простого добавления выдвижных панелей в приложение.
* [Parchment](https://github.com/rechsteiner/Parchment) - Контроллер представления с пагинацией и настраиваемым меню на основе UICollectionView.
* [PopMenu](https://github.com/CaliCastle/PopMenu) - 😎 Стильное настраиваемое всплывающее меню действий для iOS.
* [SegmentIO](https://github.com/Yalantis/Segmentio) - Анимированное сегментированное меню сверху или снизу для iOS.
* [SideMenu](https://github.com/jonkykong/SideMenu) - Простой боковой элемент управления меню для iOS, вдохновлённый Facebook. Поддерживаются левая и правая стороны; код не нужен.
* [SlideMenuControllerSwift](https://github.com/dekatotoro/SlideMenuControllerSwift) - Боковое меню iOS по мотивам приложений Google+, iQON, Feedly и Ameba.
* [SwipeMenuViewController](https://github.com/yysskk/SwipeMenuViewController) - Представление вкладок и меню с поддержкой свайпов и ViewController.
* [XLPagerTabStrip](https://github.com/xmartlabs/XLPagerTabStrip) - Android PagerTabStrip для iOS.
* [YNDropDownMenu](https://github.com/younatics/YNDropDownMenu) - Симпатичное выпадающее меню iOS.

#### Пагинация
[вернуться к началу](#readme)

* [CHIPageControl](https://github.com/ChiliLabs/CHIPageControl) - Набор оригинальных анимированных индикаторов страниц на замену скучному UIPageControl.
* [FlexiblePageControl](https://github.com/shima11/FlexiblePageControl) - Гибкий UIPageControl в стиле Instagram.
* [iPages](https://github.com/blsage/iPages) - Быстрое создание перелистываемых страниц SwiftUI 📝.
* [Pageboy](https://github.com/uias/Pageboy) - Простой и информативный контроллер представления страниц.
* [PageController](https://github.com/hirohisa/PageController) - Контроллер бесконечной пагинации.
* [SlideController](https://github.com/touchlane/SlideController) - Удобная альтернатива UIPageViewController на основе обобщённых типов. Перелистывайте страницы интерактивной навигацией по заголовкам. Настраивайте горизонтальные или вертикальные цепочки с неограниченным количеством страниц.

#### Платежи
[вернуться к началу](#readme)

* [AnimatedCardInput](https://github.com/netguru/AnimatedCardInput) - Настраиваемый и простой в использовании интерфейс банковской карты.
* [Caishen](https://github.com/prolificinteractive/Caishen) - Интерфейс платёжной карты и проверка данных для iOS.
* [iCard](https://github.com/eliakorkmaz/iCard) - Генератор банковских карт на основе DSL SnapKit.
* [MFCard](https://github.com/MobileFirstInc/MFCard) - Простая интеграция платежей по кредитным картам в приложение iOS.
* [TPInAppReceipt](https://github.com/tikhop/TPInAppReceipt) - Лёгкая библиотека на чистом Swift для локального чтения и проверки чеков встроенных покупок Apple.

#### Разрешения
[вернуться к началу](#readme)

* [AREK](https://github.com/ennioma/arek) - AREK — удобная универсальная обёртка для разрешений iOS.
* [Permission](https://github.com/delba/Permission) - Единый API для запроса разрешений в iOS.
* [SPPermission](https://github.com/sparrowcode/PermissionsKit) - Простой запрос разрешений с нативным интерфейсом и интерактивной анимацией.

#### Полосы прокрутки
[вернуться к началу](#readme)

* [DMScrollBar](https://github.com/batanus/DMScrollBar) - Лучший в своём классе настраиваемый ScrollBar для любых представлений прокрутки с инерцией, отскоком, эластичным эффектом и многими другими функциями.

#### StackView
[вернуться к началу](#readme)

* [StackViewController](https://github.com/seedco/StackViewController) - Упрощение работы с UIStackView.
* [TZStackView](https://github.com/tomvanzummeren/TZStackView) - Повторная реализация компонента компоновки UIStackView из iOS 9 для iOS 7 и 8.

#### Переключатели
[вернуться к началу](#readme)

* [MJMaterialSwitch](https://github.com/JaleelNazir/MJMaterialSwitch) - Настраиваемый переключатель iOS, вдохновлённый Material Design от Google.
* [paper-switch](https://github.com/Ramotion/paper-switch) - RAMPaperSwitch — компонент UI в стиле Material Design, который закрашивает родительское представление при включении переключателя.
* [Switch](https://github.com/T-Pham/Switch) - Элемент управления-переключатель с полной поддержкой Interface Builder.

#### Вкладки
[вернуться к началу](#readme)

* [Adaptive Tab Bar](https://github.com/Ramotion/adaptive-tab-bar) - Адаптивная панель вкладок.
* [Animated Tab Bar](https://github.com/Ramotion/animated-tab-bar) - Модуль RAMAnimatedTabBarController добавляет анимацию элементам панели вкладок.
* [CardTabBar](https://github.com/yusadogru/CardTabBar) - Анимация элементов панели вкладок iOS.
* [CircleBar](https://github.com/softhausHQ/CircleBar) - Удобный и весёлый контроллер навигации с панелью вкладок для iOS.
* [ColorMatchTabs](https://github.com/Yalantis/ColorMatchTabs) - Интересный способ отображения вкладок.
* [DTPagerController](https://github.com/tungvoduc/DTPagerController) - Контейнерный контроллер для отображения набора ViewController в горизонтально прокручиваемом представлении.
* [ESTabBarController](https://github.com/eggswift/ESTabBarController) - Гибко настраиваемый компонент TabBarController, унаследованный от UITabBarController.
* [HHTabBarView](https://github.com/hemangshah/HHTabBarView) - Лёгкое настраиваемое представление панели вкладок.
* [PolioPager](https://github.com/YuigaWada/PolioPager) - Гибкий TabBarController с вкладкой поиска, как в SNKRS.
* [SwiftUIMaterialTabs](https://github.com/SwiftKickMobile/SwiftUIMaterialTabs) - Вкладки в стиле Material 3 и закреплённые заголовки в одной библиотеке SwiftUI.
* [TabBar](https://github.com/onl1ner/TabBar) - Гибко настраиваемая панель вкладок для приложений SwiftUI.
* [Tabman](https://github.com/uias/Tabman) - Мощный контроллер представления страниц с панелью индикаторов.
* [TabPageViewController](https://github.com/EndouMari/TabPageViewController) - Контроллер представления страниц и вкладок прокрутки.

#### Шаблоны
[вернуться к началу](#readme)

* [Stencil](https://github.com/stencilproject/Stencil) - Простой и мощный язык шаблонов.
* [SwiftCssParser](https://github.com/100mango/SwiftCssParser) - Расширяемый парсер CSS.
* [Temple](https://github.com/GoodRequest/Temple) - 🗂️ Самые продвинутые шаблоны проектов и файлов.

#### Текстовые поля
[вернуться к началу](#readme)

* [CBPinEntryView](https://github.com/Fawxy/CBPinEntryView) - Простое в использовании, гибко настраиваемое поле для ввода PIN-кода.
* [CHIOTPField](https://github.com/ChiliLabs/CHIOTPField) - Набор текстовых полей для одноразовых паролей, SMS-кодов, PIN-кодов и т. д.
* [DTTextField](https://github.com/iDhaval/DTTextField) - DTTextField — пользовательское текстовое поле с плавающим заполнителем и подписью ошибки.
* [FloatingLabelTextFieldSwiftUI](https://github.com/kishanraja/FloatingLabelTextFieldSwiftUI) - Небольшой лёгкий фреймворк SwiftUI, полностью написанный на SwiftUI (без UIViewRepresentable), для создания красивых настраиваемых текстовых полей с плавающими подписями.
* [HTYTextField](https://github.com/hanton/HTYTextField) - UITextField с подписью-заполнителем, которая подпрыгивает.
* [iTextField ⌨️](https://github.com/blsage/iTextField) - Полностью обёрнутый `UITextField`, работающий целиком в SwiftUI 🦅.
* [PasswordTextField](https://github.com/PiXeL16/PasswordTextField) - Пользовательское текстовое поле с переключаемым значком показа/скрытия пароля и контролем соблюдения надёжной политики паролей.
* [SkyFloatingLabelTextField](https://github.com/Skyscanner/SkyFloatingLabelTextField) - Красивый и гибкий элемент управления текстовым полем, реализующий паттерн плавающей подписи.
* [StyledTextKit](https://github.com/GitHawkApp/StyledTextKit) - Декларативное создание и быстрое отображение библиотеки атрибутированных строк.
* [TextFieldCounter](https://github.com/serralvo/TextFieldCounter) - Счётчик символов UITextField с приятным интерфейсом.
* [TextFieldEffects](https://github.com/raulriera/TextFieldEffects) - Несколько готовых эффектов для UITextField.
* [UITextField-Navigation](https://github.com/T-Pham/UITextField-Navigation) - UITextField-Navigation добавляет к клавиатуре кнопки «Далее», «Назад» и «Готово». Возможна тонкая настройка.
* [VKPinCodeView](https://github.com/Sunspension/VKPinCodeView) - Простой и элегантный UI-компонент для ввода PIN-кода.

#### Переходы
[вернуться к началу](#readme)

* [BubbleTransition](https://github.com/andreamazz/BubbleTransition) - Простой переход с эффектом пузыря.
* [Cards XI](https://github.com/PaoloCuscela/Cards) - Отличные карточные представления App Store для iOS 11.
* [EasyTransitions](https://github.com/marcosgriselli/EasyTransitions) - Простой способ создавать пользовательские интерактивные переходы UIViewController.
* [Hero](https://github.com/HeroTransitions/Hero) - Элегантная библиотека переходов для iOS.
* [ImageTransition](https://github.com/shtnkgm/ImageTransition) - Плавная анимация изображений во время переходов.
* [Jelly](https://github.com/SebastianBoldt/Jelly) - Jelly добавляет пользовательские переходы между контроллерами представления всего несколькими строками кода.
* [LiquidSwipe](https://github.com/exyte/LiquidSwipe) - Анимация жидкой навигации.
* [MijickNavigattie](https://github.com/Mijick/NavigationView) - Простая навигация с помощью SwiftUI.
* [MusicPlayerTransition](https://github.com/xxxAIRINxxx/MusicPlayerTransition) - Пользовательский интерактивный переход в стиле приложения Apple Music для iOS.
* [NavigationTransitions](https://github.com/davdroman/swiftui-navigation-transitions) - Переходы навигации на чистом SwiftUI.
* [PanSlip](https://github.com/k-lpmg/PanSlip) - Используйте PanGesture для закрытия представления во UIViewController и UIView.
* [PinterestSwift](https://github.com/demonnico/PinterestSwift) - Переход в стиле Pinterest.
* [RevealingSplashView](https://github.com/PiXeL16/RevealingSplashView) - Экран-заставка, который анимируется и открывает содержимое; вдохновлён заставкой Twitter.
* [SamuraiTransition](https://github.com/hachinobu/SamuraiTransition) - Библиотека на Swift с подборкой изящных переходов между контроллерами представлений с эффектом разрезания.
* [SPLarkController](https://github.com/ivanvorobei/SPLarkController) - Пользовательский переход между контроллерами. Перемещение вверх.
* [SPStorkController](https://github.com/ivanvorobei/SPStorkController) - Контроллер экрана «Сейчас играет» из Apple Music с настраиваемой высотой.
* [StarWars.iOS](https://github.com/Yalantis/StarWars.iOS) - Анимация перехода, разбивающая контроллер представления на мелкие фрагменты.
* [Transition](https://github.com/Touchwonders/Transition) - Простые интерактивные прерываемые пользовательские переходы между контроллерами.

#### 3D
[вернуться к началу](#readme)

* [Insert3D](https://github.com/Viktoo/Insert3D) - Самый быстрый 🚀 способ встроить 3D-модель.

#### UICollectionView
[вернуться к началу](#readme)

* [ASCollectionView](https://github.com/abdullahselek/ASCollectionView) - Лёгкое пользовательское представление коллекции, вдохновлённое Airbnb.
* [AZCollectionViewController](https://github.com/AfrozZaheer/AZCollectionViewController) - Простая интеграция пагинации с представлениями-заполнителями в CollectionView; создание раздела Instagram Discover за несколько минут.
* [Blueprints](https://github.com/zenangst/Blueprints) - Фреймворк, упрощающий работу с компоновками потока представления коллекции.
* [BouncyLayout](https://github.com/roberthein/BouncyLayout) - Компоновка представления коллекции с эффектом подпрыгивания ячеек.
* [CardsLayout](https://github.com/filletofish/CardsLayout) - Пользовательская компоновка CollectionView в виде карточек.
* [CenteredCollectionView](https://github.com/BenEmdon/CenteredCollectionView) - Лёгкий UICollectionViewLayout с перелистыванием и центрированием ячеек.
* [CheckmarkCollectionViewCell](https://github.com/yonat/CheckmarkCollectionViewCell) - UICollectionViewCell с флажком при выборе и пустым кругом без выбора — как в режиме «Выбрать» приложения Photos.
* [CollectionViewShelfLayout](https://github.com/pitiphong-p/CollectionViewShelfLayout) - Подкласс UICollectionViewLayout, отображающий элементы рядами, как на вкладке «Подборка» App Store, без трюков с вложенным UITableView/UICollectionView.
* [CollectionViewSlantedLayout](https://github.com/yacir/CollectionViewSlantedLayout) - UICollectionViewLayout для отображения содержимого под углом.
* [Drag and Drop UICollectionView](https://github.com/mmick66/KDDragAndDropCollectionView) - Перетаскивание данных между несколькими UICollectionView.
* [FSPagerView](https://github.com/WenchaoD/FSPagerView) - Элегантная библиотека слайдов экрана, особенно полезная для баннеров, показа товаров, страниц приветствия и слайдеров экранов/контроллеров.
* [Gliding Collection](https://github.com/Ramotion/gliding-collection) - Плавное, гибкое и настраиваемое решение для контроллера UICollectionView.
* [GoodProvider](https://github.com/GoodRequest/GRProvider) - 🚀 Поставщик UITableView и UICollectionView для упрощения базовых сценариев отображения данных.
* [GravitySlider](https://github.com/ApplikeySolutions/GravitySlider) - Красивая альтернатива стандартной компоновке потока UICollectionView.
* [ShelfView-iOS](https://github.com/tdscientist/ShelfView-iOS) - Пользовательское представление iOS для отображения книг на полке.
* [SimpleSource](https://github.com/Squarespace/simple-source ) - Простые и типобезопасные таблицы и коллекции iOS.
* [SwiftSpreadsheet](https://github.com/stuffrabbit/SwiftSpreadsheet) - Полностью настраиваемая компоновка электронной таблицы для CollectionView.
* [TagCellLayout](https://github.com/riteshhgupta/TagCellLayout) - Компоновка UICollectionView для тегов с выравниванием по левому краю, центру и правому краю.
* [UICollectionViewSplitLayout](https://github.com/yahoojapan/UICollectionViewSplitLayout) - UICollectionViewSplitLayout делает представления коллекции адаптивнее.
* [VegaScroll](https://github.com/AppliKeySolutions/VegaScroll) - Лёгкая анимированная компоновка потока UICollectionView.

#### UITableView
[вернуться к началу](#readme)

* [AZTableViewController](https://github.com/AfrozZaheer/AZTableViewController) - Элегантный и простой способ добавить пагинацию с представлениями-заполнителями.
* [CollapsibleTableSectionViewController](https://github.com/jeantimex/CollapsibleTableSectionViewController) - Библиотека для поддержки сворачиваемых секций в представлении таблицы.
* [DGElasticPullToRefresh](https://github.com/gontovnik/DGElasticPullToRefresh) - Эластичное обновление свайпом вниз.
* [DiffableDataSources](https://github.com/ra1028/DiffableDataSources) - 💾 Библиотека обратного переноса UITableView/UICollectionViewDiffableDataSource.
* [DTTableViewManager](https://github.com/DenTelezhkin/DTTableViewManager) - Управление UITableView, ориентированное на протоколы, с помощью обобщённых типов и связанных типов.
* [ExpandableCell](https://github.com/younatics/ExpandableCell) - Полностью переработанный YNExpandableCell: более лаконичный и без ошибок. Самый простой способ добавить раскрываемые и сворачиваемые ячейки iOS с полной настройкой UITableViewCell. Упрощает сложную работу с insertRows и deleteRows — достаточно реализовать ExpandableDelegate.
* [FDTextFieldTableViewCell](https://github.com/fulldecent/FDTextFieldTableViewCell) - Добавляет UITextField в ячейку и правильно размещает его.
* [folding-cell](https://github.com/Ramotion/folding-cell) - Переход складывающейся ячейки.
* [GridView](https://github.com/KyoheiG3/GridView) - Настраивается под расписание, электронную таблицу, пагинацию и многое другое.
* [HGPlaceholders](https://github.com/HamzaGhazouani/HGPlaceholders) - Библиотека красивых заполнителей и пустых состояний для UITableView/UICollectionView.
* [OKTableViewLiaison](https://github.com/okcupid/OKTableViewLiaison) - Фреймворк для улучшенного управления UITableView.
* [ParallaxHeader](https://github.com/romansorochak/ParallaxHeader) - Простой способ добавить параллакс-заголовок в UIScrollView/UITableView.
* [Persei](https://github.com/Yalantis/Persei) - Анимированное верхнее меню для UITableView, UICollectionView и UIScrollView.
* [PullToRefreshSwift](https://github.com/dekatotoro/PullToRefreshSwift) - Библиотека обновления свайпом вниз.
* [QuickTableViewController](https://github.com/bcylin/QuickTableViewController) - Простой способ создать UITableView для настроек.
* [ReverseExtension](https://github.com/marty-suzuki/ReverseExtension) - Расширение UITableView, позволяющее добавлять ячейки снизу таблицы.
* [SelectionList](https://github.com/yonat/SelectionList) - Простой список с одним или несколькими вариантами выбора на основе UITableView.
* [Shoyu](https://github.com/xai3/Shoyu) - Упрощённое представление структуры UITableView.
* [SwiftyComments](https://github.com/tsucres/SwiftyComments) - Вложенная иерархия раскрываемых и сворачиваемых ячеек для создания удобных веток обсуждений.
* [SwipeCellKit](https://github.com/SwipeCellKit/SwipeCellKit) - Ячейка UITableView со свайпами, похожая на стандартное приложение Mail.
* [WLEmptyState](https://github.com/WizelineLabs/WLEmptyState) - Компонент для настройки представления пустого набора данных UITableView.
* [YNExpandableCell](https://github.com/younatics/YNExpandableCell) - Отличная раскрываемая и сворачиваемая ячейка таблицы iOS.

#### Обучение
[вернуться к началу](#readme)

* [AwesomeSpotlightView](https://github.com/aleksandrshoshiashvili/AwesomeSpotlightView) - Создание учебного курса или интерактивной экскурсии.
* [BWWalkthrough](https://github.com/ariok/BWWalkthrough) - Класс для создания пользовательских обучающих инструкций в приложении iOS.
* [ConcentricOnboarding](https://github.com/exyte/ConcentricOnboarding) - Библиотека SwiftUI для обучения и знакомства с приложением с помощью действий по нажатию.
* [Gecco](https://github.com/xai3/Gecco) - Экран Spotlight для iOS.
* [Instructions](https://github.com/ephread/Instructions) - Библиотека для создания обучающих инструкций и пошаговых туров по приложению.
* [OnboardKit](https://github.com/NikolaKirev/OnboardKit) - Настраиваемое знакомство пользователя с приложением iOS.
* [PaperOnboarding](https://github.com/Ramotion/paper-onboarding) - PaperOnboarding — слайдер пользовательского интерфейса в стиле Material Design.
* [SuggestionsKit](https://github.com/AlphanumericCharactersOrSingleHyphenz/SuggestionsKit) - Библиотека для знакомства пользователей с возможностями приложения.
* [SwiftyOnboard](https://github.com/juanpablofernandez/SwiftyOnboard) - Фреймворк iOS для создания красивого процесса знакомства с приложением.
* [SwiftyWalkthrough](https://github.com/ruipfcosta/SwiftyWalkthrough) - Простейший способ создать удобное пошаговое знакомство с приложением.

### Утилиты
*Полезные утилиты для ваших проектов.* [вернуться к началу](#readme)

* [AlexaSkillsKit](https://github.com/choefele/AlexaSkillsKit) - Разработка пользовательских навыков Alexa.
* [AmoreKit](https://github.com/AmoreComputer/AmoreKit) - Продажа и проверка лицензионных ключей в приложениях macOS, распространяемых вне App Store.
* [ApplyStyleKit](https://github.com/shindyu/ApplyStyleKit) - Элегантное применение стилей UIKit с помощью цепочки методов.
* [Basis](https://github.com/typelift/Basis) - Чистое декларативное программирование.
* [Bow](https://github.com/bow-swift/bow) - Вспомогательная библиотека типизированного функционального программирования.
* [CallbackURLKit](https://github.com/phimage/CallbackURLKit) - Реализация x-callback-url (межпрограммное взаимодействие).
* [Closures](https://github.com/vhesener/Closures) - Замыкания в стиле Swift для UIKit и Foundation.
* [Codextended](https://github.com/JohnSundell/Codextended) - Расширения, добавляющие API Codable возможность вывода типов.
* [Curry](https://github.com/thoughtbot/Curry) - Каррирование функций.
* [Delegated](https://github.com/dreymonde/Delegated) - Делегирование на основе замыканий без утечек памяти.
* [DifferenceKit](https://github.com/ra1028/DifferenceKit) - 💻 Быстрый гибкий фреймворк алгоритма разницы O(n).
* [Differific](https://github.com/zenangst/Differific) - Быстрый и удобный фреймворк сравнения различий.
* [Dollar](https://github.com/ankurp/Dollar) - Аналог Lo-Dash или Underscore для JavaScript.
* [DuctTape](https://github.com/marty-suzuki/DuctTape) - 📦 Синтаксический сахар Swift на основе динамического поиска членов KeyPath.
* [EtherWalletKit](https://github.com/SteadyAction/EtherWalletKit) - Набор инструментов Ethereum Wallet для iOS: можно реализовать кошелёк Ethereum без сервера и знаний о блокчейне.
* [ExceptionCatcher](https://github.com/sindresorhus/ExceptionCatcher) - Перехват исключений Objective-C.
* [EZSwiftExtensions](https://github.com/Esqarrouth/EZSwiftExtensions) - Как должны были работать стандартные типы и классы.
* [FlagAndCountryCode](https://github.com/exyte/FlagAndCountryCode) - FlagAndCountryCode содержит телефонные коды и флаги всех стран. Работает с UIKit и SwiftUI.
* [FluentQuery](https://github.com/MihaelIsaev/FluentQuery) :penguin: - Мощный и простой в использовании конструктор запросов.
* [GoodExtensions-iOS](https://github.com/GoodRequest/GoodExtensions-iOS) - 📑 GoodExtensions — набор полезных часто используемых расширений.
* [GoodUIKit](https://github.com/GoodRequest/GoodUIKit) - 📑 GoodUIKit — библиотека расширений с повторно используемыми фрагментами UI для более быстрой и эффективной разработки.
* [Highlighter](https://github.com/younatics/Highlighter) - Подсвечивайте что угодно! Highlighter находит UI-объекты, например UILabel, UITextView, UITextField и UIButton в UITableViewCell или других классах.
* [LifetimeTracker](https://github.com/krzysztofzablocki/LifetimeTracker) - Выявляйте проблемы с циклами удержания и памятью прямо во время разработки приложения.
* [Lumos](https://github.com/sushinoya/Lumos) - Простой в использовании API для функций среды выполнения Objective-C.
* [ObjectiveKit](https://github.com/marmelroy/ObjectiveKit) - API для функций среды выполнения Objective-C.
* [OpenSourceController](https://github.com/floriangbh/OpenSourceController) - Самый простой способ отображать лицензии библиотек, используемых в приложении.
* [Percentage](https://github.com/sindresorhus/Percentage) - Делает проценты более понятными и типобезопасными.
* [Periphery](https://github.com/peripheryapp/periphery) - Инструмент поиска неиспользуемого кода в проектах Swift.
* [Playbook](https://github.com/playbook-ui/playbook-ios) - 📘 Библиотека для изолированной разработки компонентов UI и автоматического создания их снимков.
* [PrivacyFlash Pro](https://github.com/privacy-tech-lab/privacyflash-pro) - Генерация политики конфиденциальности приложения Swift iOS по исходному коду.
* [protobuf-swift](https://github.com/alexeyxo/protobuf-swift) - Буферы протокола (Protocol Buffers).
* [Prototope](http://khan.github.io/Prototope/) - Библиотека лёгких интерфейсов для прототипирования с мостом к JS.
* [R.swift](https://github.com/mac-cain13/R.swift) - Инструмент получения строго типизированных ресурсов с автодополнением, например изображений, ячеек и segue.
* [RandomKit](https://github.com/nvzqz/RandomKit/) :penguin: - Генерация случайных данных.
* [ReadabilityKit](https://github.com/exyte/ReadabilityKit) - Извлечение превью для новостей, статей и полных текстов.
* [ReerKit](https://github.com/reers/ReerKit) - Мощная библиотека Swift на основе расширений и вспомогательных функций для ускорения разработки под iOS, macOS и Linux.
* [ResourceKit](https://github.com/bannzai/ResourceKit) - Автодополнение при использовании ресурсов.
* [Result](https://github.com/antitypical/Result) - Тип, моделирующий успешное выполнение или сбой произвольных операций.
* [Rugby](https://github.com/swiftyfinch/Rugby) - 🏈 Кэширование CocoaPods для ускорения повторной сборки и индексации проекта Xcode.
* [Runes](https://github.com/thoughtbot/Runes) - Функциональные операторы: flatMap, map и apply.
* [Solar](https://github.com/ceeK/Solar) - Вычисление времени восхода и захода солнца по местоположению.
* [SpriteKit+Spring](https://github.com/ataugeron/SpriteKit-Spring) - API SpriteKit, воспроизводящий пружинные анимации UIView с помощью SKAction.
* [Sugar](https://github.com/hyperoslo/Sugar) - Что-то сладкое, прекрасно сочетающееся с Cocoa.
* [swift-build](https://github.com/brightdigit/swift-build) - Действие GitHub для сборки и тестирования пакетов Swift на всех платформах.
* [swift-protobuf](https://github.com/apple/swift-protobuf) :penguin: - Плагин и библиотека времени выполнения для использования Protocol Buffer от Google.
* [SwiftAutoGUI](https://github.com/NakaokaRei/SwiftAutoGUI) - Программное управление мышью и клавиатурой. Библиотека для управления macOS с помощью Swift.
* [SwiftBoost](https://github.com/sparrowcode/SwiftBoost) - Набор расширений Swift для ускорения процесса разработки.
* [Swiftbot](https://github.com/noppefoxwolf/Swiftbot) - Запуск кода Swift в Slack.
* [SwifterSwift](https://github.com/SwifterSwift/SwifterSwift) - Удобная подборка из более чем 500 нативных расширений для повышения продуктивности.
* [SwiftGen-Storyboard](https://github.com/SwiftGen/SwiftGen#uistoryboard) - Инструмент автоматической генерации `enum` констант всех Storyboard, Scene и Segue и соответствующих методов доступа.
* [SwiftLinkPreview](https://github.com/LeonardoCardoso/SwiftLinkPreview) - Создание превью URL с извлечением такой информации, как заголовок, важные фрагменты текста и изображения.
* [SwiftPlantUML](https://github.com/MarcoEidinger/SwiftPlantUML) - Инструмент командной строки и пакет Swift для генерации диаграмм классов UML по исходному коду Swift. Также доступно расширение редактора исходного кода Xcode.
* [SwiftRandom](https://github.com/thellimist/SwiftRandom) - Небольшой генератор случайных данных.
* [SwiftRater](https://github.com/takecian/SwiftRater) - Утилита, напоминающая пользователям приложения iPhone оставить отзыв.
* [SwiftTweaks](https://github.com/bryanjclark/SwiftTweaks) - Изменяйте приложение iOS без повторной компиляции.
* [Swiftx](https://github.com/typelift/Swiftx) - Функциональные типы данных и функции для любых проектов.
* [SwiftyUtils](https://github.com/tbaranes/SwiftyUtils) - Весь повторно используемый код, нужный в каждом проекте.
* [Swiftz](https://github.com/typelift/Swiftz) - Функциональное программирование.
* [SyntaxKit](https://github.com/brightdigit/SyntaxKit) - Программная генерация кода Swift с помощью декларативного синтаксиса.
* [Then](https://github.com/devxoul/Then) - Очень удобный синтаксический сахар для инициализаторов.
* [TSAO](https://github.com/lilyball/swift-tsao) - Типобезопасные связанные объекты.
* [URLQueryItemEncoder](https://github.com/pitiphong-p/URLQueryItemEncoder) - Кодировщик для преобразования любого значения Encodable в массив URLQueryItem.
* [UTIKit](https://github.com/cockscomb/UTIKit) - Обёртка UTI (унифицированного идентификатора типа).
* [Vaccine](https://github.com/zenangst/Vaccine) - Защита приложений от болезней, вызывающих повторную компиляцию.
* [WeakableSelf](https://github.com/vincent-pradeilles/weakable-self) - Микрофреймворк, объединяющий `[weak self]` и инструкции guard в замыканиях.
* [WhatsNew](https://github.com/BalestraPatrick/WhatsNew) - Демонстрация новых возможностей после обновления приложения, как в Pages, Numbers и Keynote.
* [WhatsNewKit](https://github.com/SvenTiigi/WhatsNewKit) - Демонстрация новых замечательных возможностей приложения.
* [XestiMonitors](https://github.com/eBardX/XestiMonitors) - Расширяемый фреймворк мониторинга.
* [ZamzamKit](https://github.com/basememara/ZamzamKit) - Подборка микроутилит и расширений для Standard Library, Foundation и UIKit.

### Проверка данных
*Подборка библиотек проверки данных.* [вернуться к началу](#readme)

* [ATGValidator](https://github.com/altayer-digital/ATGValidator) - Фреймворк проверки на основе правил с поддержкой проверки форм и банковских карт в iOS.
* [FormValidatorSwift](https://github.com/ustwo/formvalidator-swift) - Удобная проверка пользовательского ввода в текстовых полях и представлениях.
* [Input Mask](https://github.com/RedMadRobot/input-mask-ios) - Форматирование, разбор и проверка пользовательского ввода в iOS на основе шаблонов.
* [RxValidator](https://github.com/vbmania/RxValidator) - Простой, расширяемый и гибкий модуль проверки данных.
* [SwiftValidator](https://github.com/SwiftValidatorCommunity/SwiftValidator) - Библиотека проверки на основе правил.
* [SwiftValidators](https://github.com/gkaimakas/SwiftValidators) - Проверка строк в iOS, вдохновлённая validator.js.
* [ValidatedPropertyKit](https://github.com/SvenTiigi/ValidatedPropertyKit) - Простая проверка свойств с помощью обёрток свойств 👮.

#### Телефонные номера
*Библиотеки для работы с телефонными номерами.* [вернуться к началу](#readme)

* [NKVPhonePicker](https://github.com/NikKovIos/NKVPhonePicker) - Подкласс UITextField, упрощающий выбор кода страны.
* [PhoneNumberKit](https://github.com/marmelroy/PhoneNumberKit) - Фреймворк для разбора, форматирования и проверки международных телефонных номеров. Вдохновлён libphonenumber от Google.

### Управление версиями
[вернуться к началу](#readme)

* [AppVersionMonitor](https://github.com/eure/AppVersionMonitor) - Простой мониторинг версии приложения iOS.
* [Siren](https://github.com/ArtSabintsev/Siren) - Уведомление пользователей о доступности новой версии приложения с предложением обновить его.
* [Version](https://github.com/mrackwitz/Version) - Представление семантических версий и их сравнение.
* [Version Tracker Swift](https://github.com/tbaranes/VersionTrackerSwift) - Отслеживание версий приложения iOS, OS X и tvOS.

### Видео
[вернуться к началу](#readme)

* [BMPlayer](https://github.com/BrikerMan/BMPlayer) - Видеоплеер для iOS на основе AVPlayer с поддержкой горизонтальной и вертикальной ориентации, регулировки громкости и яркости, а также поиска прокруткой.
* [Cabbage](https://github.com/VideoFlint/Cabbage) - Фреймворк монтажа видео на основе AVFoundation.
* [Kitsunebi](https://github.com/noppefoxwolf/Kitsunebi) - Представление видеоплеера с наложенной анимацией альфа-канала с помощью OpenGLES.
* [MMPlayerView](https://github.com/MillmanY/MMPlayerView) - Пользовательский AVPlayerLayer и переходы плеера с хорошими эффектами, как в YouTube и Facebook.
* [MobilePlayer](https://github.com/sahin/mobileplayer-ios) - Мощный и полностью настраиваемый медиаплеер для iOS.
* [NextLevelSessionExporter](https://github.com/NextLevel/NextLevelSessionExporter) - Экспорт и перекодирование медиафайлов.
* [Player](https://github.com/piemonte/Player) - Видеоплеер iOS — простой встраиваемый компонент для воспроизведения потокового мультимедиа.
* [PlayerView](https://github.com/davidlondono/PlayerView) - Простой видеоплеер на основе UIView с управлением скоростью воспроизведения, снимками экрана и обратными вызовами состояния плеера.
* [PryntTrimmerView](https://github.com/HHK1/PryntTrimmerView) - Обрезка и кадрирование видео.
* [SwiftFFmpeg](https://github.com/sunlubo/SwiftFFmpeg) - Обёртка API FFmpeg на языке C.
* [SwiftVideoBackground](https://github.com/dingwilson/SwiftVideoBackground) - Простой подкласс UIView для создания видеофона.
* [Swifty360Player](https://github.com/abdullahselek/Swifty360Player) - Потоковый видеоплеер на 360 градусов для iOS на основе AVPlayer.
* [YiVideoEditor](https://github.com/coderyi/YiVideoEditor) - Библиотека поворота и обрезки видео, добавления слоёв (водяных знаков) и звука (музыки).

## Бессерверные приложения

* [Azure Functions for Swift](https://github.com/SalehAlbuga/azure-functions-swift) :penguin: - Рабочая среда Swift для Azure Functions.


### Участие в проекте

Сначала ознакомьтесь с [рекомендациями по участию](.github/CONTRIBUTING.md). Если пакет или проект больше не поддерживается или не подходит для этой подборки, отправьте pull request, чтобы улучшить этот файл. Спасибо всем [участникам](https://github.com/matteocrippa/awesome-swift/graphs/contributors) — вы лучшие!