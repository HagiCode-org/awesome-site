<div align="center">
    <img src="https://github.com/vsouza/awesome-ios/blob/master/header.png?raw=true" alt="Awesome">
    <br>
    <p align="center">
        <img alt="awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" />
        <a href="https://ko-fi.com/M4M3WPRD"><img width="110" alt="Угостите меня кофе" src="buy_me_a_coffee.png" /></a>
    </p>
</div>




## Участие и сотрудничество

Подробности см. в [CONTRIBUTING](https://github.com/vsouza/awesome-ios/blob/master/.github/CONTRIBUTING.md) и [CODE-OF-CONDUCT](https://github.com/vsouza/awesome-ios/blob/master/CODE_OF_CONDUCT.md).

## Содержание

- [Аналитика](#analytics)
- [Маршрутизация в приложении](#app-routing)
- [Apple TV](#apple-tv)
- [App Store](#app-store)
- [Архитектурные паттерны](#architecture-patterns)
- [ARKit](#arkit)
- [Аутентификация](#authentication)
- [Блокчейн](#blockchain)
- [Книги](#books)
- [Кэширование](#cache)
- [Диаграммы](#charts)
- [Внедрение кода](#code-injection)
- [Качество кода](#code-quality)
    - [Линтеры](#linter)
- [Цвет](#color)
- [Командная строка](#command-line)
- [Параллелизм](#concurrency)
- [Core Data](#core-data)
- [Курсы](#courses)
    - [Начало работы](#getting-started)
- [Базы данных](#database)
- [Структуры данных / алгоритмы](#data-structures--algorithms)
- [Дата и время](#date--time)
- [Отладка](#debugging)
- [Внедрение зависимостей](#dependency-injection)
- [Менеджеры зависимостей / пакетов](#dependency--package-manager)
- [Развёртывание / распространение](#deployment--distribution)
- [Шина событий](#eventbus)
- [Файлы](#files)
- [Функциональное программирование](#functional-programming)
- [Игры](#games)
- [GCD](#gcd)
- [Жесты](#gesture)
- [Графика](#graphics)
- [Оборудование](#hardware)
    - [Bluetooth](#bluetooth)
    - [Камера](#camera)
    - [Force Touch](#force-touch)
    - [iBeacon](#ibeacon)
    - [Геолокация](#location)
    - [Прочее оборудование](#other-hardware)
- [Компоновка](#layout)
- [Локализация](#localization)
- [Логирование](#logging)
- [Машинное обучение](#machine-learning)
- [Карты](#maps)
- [Математика](#math)
- [Медиа](#media)
    - [Аудио](#audio)
    - [GIF](#gif)
    - [Изображения](#image)
    - [Обработка медиа](#media-processing)
    - [PDF](#pdf)
    - [Стриминг](#streaming)
    - [Видео](#video)
- [Обмен сообщениями](#messaging)
- [Работа с сетью](#networking)
- [Рассылки](#newsletters)
- [Уведомления](#notifications)
    - [Push-уведомления](#push-notifications)
    - [Провайдеры push-уведомлений](#push-notification-providers)
- [Среда выполнения Objective-C](#objective-c-runtime)
- [Оптимизация](#optimization)
- [Другие подборки Awesome](#other-awesome-lists)
- [Парсинг](#parsing)
    - [CSV](#csv)
    - [JSON](#json)
    - [XML и HTML](#xml--html)
    - [Прочий парсинг](#other-parsing)
- [Passbook](#passbook)
- [Платежи](#payments)
- [Разрешения](#permissions)
- [Подкасты](#podcasts)
- [Настройка проекта](#project-setup)
- [Прототипирование](#prototyping)
- [Быстрая разработка](#rapid-development)
- [Реактивное программирование](#reactive-programming)
    - [В стиле React](#react-like)
- [Справочные материалы](#reference)
- [Рефлексия](#reflection)
- [Регулярные выражения](#regex)
- [SDK](#sdk)
    - [Официальные](#official)
    - [Неофициальные](#unofficial)
- [Безопасность](#security)
    - [Шифрование](#encryption)
    - [Связка ключей](#keychain)
- [Сервер](#server)
- [Руководства по стилю](#style-guides)
- [Тестирование](#testing)
    - [TDD / BDD](#tdd--bdd)
    - [A/B-тестирование](#ab-testing)
    - [UI-тестирование](#ui-testing)
    - [Прочее тестирование](#other-testing)
- [Текст](#text)
    - [Шрифты](#font)
- [Пользовательский интерфейс](#ui)
    - [Индикаторы активности](#activity-indicator)
    - [Алерты и Action Sheet](#alert--action-sheet)
    - [Анимация](#animation)
    - [Переходы](#transition)
    - [Бейджи](#badge)
    - [Кнопки](#button)
    - [Календарь](#calendar)
    - [Карточки](#cards)
    - [Формы и настройки](#form--settings)
    - [Клавиатура](#keyboard)
    - [Метки](#label)
    - [Вход в систему](#login)
    - [Меню](#menu)
    - [Панель навигации](#navigation-bar)
    - [PickerView](#pickerview)
    - [Всплывающие окна](#popup)
    - [Индикаторы прогресса](#progress-view)
    - [Потяните, чтобы обновить](#pull-to-refresh)
    - [Звёзды рейтинга](#rating-stars)
    - [ScrollView](#scrollview)
    - [Сегментированные переключатели](#segmented-control)
    - [Слайдеры](#slider)
    - [Экраны-заставки](#splash-view)
    - [Строка состояния](#status-bar)
    - [Степперы](#stepper)
    - [Переключатели](#switch)
    - [Панель вкладок](#tab-bar)
    - [Table View / Collection View](#table-view--collection-view)
      - [Table View](#table-view)
      - [Collection View](#collection-view)
      - [Раскрывающиеся ячейки](#expandable-cell)
      - [Заголовки](#header)
      - [Заглушки](#placeholder)
      - [Макеты Collection View](#collection-view-layout)
    - [Теги](#tag)
    - [TextField и TextView](#textfield--textview)
    - [UIPageControl](#uipagecontrol)
    - [Web View](#web-view)
- [Утилиты](#utility)
- [Согласие пользователя](#user-consent)
- [VR](#vr)
- [Ознакомительные экраны / интро / обучение](#walkthrough--intro--tutorial)
- [Веб-сайты](#websites)
- [Websocket](#websocket)
- [Инструменты](#tools)
- [Руководства и доклады](#tutorials-and-keynotes)
- [Шаблоны UI](#ui-templates)
- [Xcode](#xcode)
    - [Расширения (Xcode 8+)](#extensions-xcode-8)
    - [Темы](#themes)
    - [Прочее для Xcode](#other-xcode)


## Аналитика

 *Платформы аналитики, SDK, отслеживание ошибок и ответы в реальном времени о вашем приложении*

- [Answers by Fabric](https://get.fabric.io) - Answers в реальном времени показывает, как люди взаимодействуют с вашим приложением.
- [Aptabase](https://aptabase.com/for-swift) - Простая аналитика с открытым исходным кодом и приоритетом конфиденциальности для приложений на Swift.
- [Bugsnag](https://www.bugsnag.com/platforms/ios-crash-reporting) - Отслеживание ошибок с бесплатным тарифом. Отчёты об ошибках содержат данные об устройстве, релизе и пользователе, а также позволяют добавлять произвольные данные.
- [Countly](https://count.ly) - Платформа с открытым исходным кодом для мобильной и веб-аналитики, отчётов о сбоях и push-уведомлений для iOS и Android.
- [devtodev](https://www.devtodev.com/) - Комплексный сервис аналитики, который помогает улучшить ваш проект и экономит время на разработку продукта.
- [Embrace](http://embrace.io) - Мобильная наблюдаемость (observability) на базе OpenTelemetry для создания надёжных приложений, ориентированных на пользователя.
- [Emerge Tools](https://www.emergetools.com) - Предотвращайте регрессии размера и производительности приложения в каждом пул-реквесте и получайте автоматические рекомендации по улучшению.
- [Instabug](https://instabug.com) - Обратная связь внутри приложения, отчёты об ошибках и сбоях; исправляйте баги быстрее благодаря шагам пользователя, видеозаписям, аннотациям к экрану и логированию сетевых запросов.
- [Matomo](https://github.com/matomo-org/matomo-sdk-ios) - MatomoTracker — SDK для iOS, tvOS и macOS, отправляющий аналитику приложения на сервер Matomo.
- [Measure](https://measure.sh/) - Мониторинг мобильных приложений с открытым исходным кодом и возможностью самостоятельного размещения: отслеживание ошибок, трассировка производительности и полные хронологии сессий, чтобы тратить меньше времени на сбор контекста и быстрее исправлять проблемы.
- [Mixpanel](https://mixpanel.com/) - Продвинутая платформа аналитики.
- [MOCA Analytics](https://www.mocaplatform.com/features) - Платный кроссплатформенный бэкенд для аналитики.
- [Segment](https://github.com/segmentio/analytics-ios) - Простой способ без лишних хлопот интегрировать аналитику в любое iOS-приложение.
- [Sentry](https://sentry.io/) - Sentry предоставляет мониторинг ошибок с самостоятельным размещением и в облаке, который помогает любым командам разработчиков обнаруживать, сортировать и приоритизировать ошибки в реальном времени.
- [Shake](https://www.shakebugs.com/) - Инструмент для обратной связи и отчётов об ошибках внутри приложения. Исправляйте баги до 50 раз быстрее благодаря подробным данным об устройстве, шагам воспроизведения, видеозаписи, данным «чёрного ящика», сетевым запросам и пользовательскому логированию.

**[вернуться наверх](#contributing-and-collaborating)**

## Маршрутизация в приложении

  *Элегантная маршрутизация URL, фреймворки навигации, диплинки и многое другое*

- [ApplicationCoordinator](https://github.com/AndreyPanov/ApplicationCoordinator) - Coordinator — объект, который управляет потоком навигации и передаёт обработку потока следующему координатору после перехода к следующему звену цепочки.
- [Appz](https://github.com/SwiftKitz/Appz) - Легко запускайте внешние приложения и переходите в них по диплинкам, а если приложение не установлено — открывайте веб-версию.
- [Composable Navigator](https://github.com/Bahn-X/swift-composable-navigator) - Библиотека с открытым исходным кодом для создания SwiftUI-приложений с поддержкой диплинков, разработанная с упором на композицию, тестирование и эргономику
- [Crossroad](https://github.com/giginet/Crossroad) - Crossroad — URL-маршрутизатор, ориентированный на обработку пользовательских URL-схем (Custom URL Schemes). С его помощью можно маршрутизировать несколько URL-схем и легко получать аргументы и параметры.
- [DeepLinkKit](https://github.com/button/DeepLinkKit) - Великолепный способ обработки диплинков на основе блоков и сопоставления маршрутов.
- [JLRoutes](https://github.com/joeldev/JLRoutes) - Библиотека URL-маршрутизации для iOS с простым API на основе блоков.
- [Linker](https://github.com/MaksimKurpa/Linker) - Легковесный способ обработки внутренних и внешних диплинков в iOS.
- [Marshroute](https://github.com/avito-tech/Marshroute) - Marshroute — iOS-библиотека, которая делает ваши роутеры простыми, но чрезвычайно мощными.
- [RouteComposer](https://github.com/ekazaev/route-composer) - Библиотека, которая помогает решать задачи композиции view-контроллеров, маршрутизации и обработки диплинков.
- [RxFlow](https://github.com/RxSwiftCommunity/RxFlow) - Фреймворк навигации для iOS-приложений, основанный на паттерне Reactive Flow Coordinator.
- [SwiftCurrent](https://github.com/wwt/SwiftCurrent) - Библиотека для управления сложными рабочими процессами.
- [SwiftRouter](https://github.com/skyline75489/SwiftRouter) - URL-маршрутизатор для iOS.
- [URLNavigator](https://github.com/devxoul/URLNavigator) - Элегантная URL-маршрутизация для Swift
- [WAAppRouting](https://github.com/Wasappli/WAAppRouting) - Маршрутизация в iOS, сделанная правильно. Обрабатывает как распознавание URL, так и отображение контроллеров с разобранными параметрами. Всё в одной строке, а стек контроллеров сохраняется автоматически!

**[вернуться наверх](#contributing-and-collaborating)**

## App Store

*Руководства Apple и библиотеки уведомлений о новых версиях*

- [Правила проверки приложений Apple](https://developer.apple.com/app-store/review/#common-app-rejections) - Описаны некоторые из самых распространённых проблем, из-за которых приложения отклоняют.
- [Бесплатный инструмент для оптимизации в App Store](https://www.mobileaction.co) - Позволяет отслеживать видимость вашего приложения в App Store по ключевым словам и в сравнении с конкурентами.

**[вернуться наверх](#contributing-and-collaborating)**

## Apple TV

*View-контроллеры, обёртки, менеджеры шаблонов и видеоплееры для tvOS.*

- [ParallaxView](https://github.com/PGSSoft/ParallaxView) - Элементы управления и расширения для iOS, добавляющие в ваше приложение эффект параллакса.
- [TvOSPinKeyboard](https://github.com/zattoo/TvOSPinKeyboard) - Клавиатура для ввода PIN-кода в tvOS.
- [XCDYouTubeKit](https://github.com/0xced/XCDYouTubeKit) - Видеоплеер YouTube для iOS, tvOS и macOS.

**[вернуться наверх](#contributing-and-collaborating)**

## Архитектурные паттерны

*Чистая архитектура, Viper, MVVM, реактивный подход... выбирайте оружие.*

- [Clean Architecture for SwiftUI + Combine](https://github.com/nalexn/clean-architecture-swiftui) - Демонстрационный проект, показывающий продакшен-конфигурацию SwiftUI-приложения с чистой архитектурой.
- [CleanArchitectureRxSwift](https://github.com/sergdort/CleanArchitectureRxSwift) - Пример чистой архитектуры iOS-приложения с использованием RxSwift.
- [ios-architecture](https://github.com/tailec/ios-architecture) - Коллекция архитектур для iOS: MVC, MVVM, MVVM+RxSwift, VIPER, RIBs и многие другие.
- [iOS-Viper-Architecture](https://github.com/MindorksOpenSource/iOS-Viper-Architecture) - Этот репозиторий содержит подробный пример приложения, реализующего архитектуру VIPER в iOS с использованием таких библиотек и фреймворков, как Alamofire, AlamofireImage, PKHUD, CoreData и др.
- [Reactant](https://github.com/Brightify/Reactant) - Reactant — реактивная архитектура для iOS.
- [Spin](https://github.com/Spinners/Spin.Swift) - Универсальная реализация системы Feedback Loop для RxSwift, ReactiveSwift и Combine
- [SwiftyVIPER](https://github.com/codytwinton/SwiftyVIPER) - Делает реализацию архитектуры VIPER гораздо проще и чище.
- [The Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture) - The Composable Architecture — библиотека для последовательного и понятного построения приложений с упором на композицию, тестирование и эргономику.
- [Viperit](https://github.com/ferranabello/Viperit) - Фреймворк VIPER для iOS. Позволяет легко разрабатывать приложения по архитектуре VIPER. Написан и протестирован на Swift.

**[вернуться наверх](#contributing-and-collaborating)**

## ARKit

*Библиотеки и инструменты, которые помогут создавать непревзойдённые впечатления в дополненной реальности*

- [ARKit Virtual Objects](https://github.com/ignacio-chiazzo/ARKit) - Размещение виртуальных объектов в дополненной реальности.
- [ARKit-CoreLocation](https://github.com/ProjectDent/ARKit-CoreLocation) - Сочетает высокую точность AR с масштабом данных GPS.
- [ARVideoKit](https://github.com/AFathi/ARVideoKit) - Запись и захват видео, фото, Live Photos и GIF в ARKit.
- [SmileToUnlock](https://github.com/rsrbk/SmileToUnlock) - Эта библиотека использует отслеживание лица ARKit (Face Tracking), чтобы распознать улыбку пользователя.

**[вернуться наверх](#contributing-and-collaborating)**

## Аутентификация

*Библиотеки Oauth и Oauth2, вход через социальные сети и инструменты для капчи.*

- [Heimdallr.swift](https://github.com/trivago/Heimdallr.swift) - Простая в использовании библиотека OAuth 2 для iOS, написанная на Swift.
- [OAuth2](https://github.com/p2/OAuth2) - Фреймворк OAuth2 для macOS и iOS, написанный на Swift.
- [OAuthSwift](https://github.com/OAuthSwift/OAuthSwift) - Библиотека OAuth для iOS на основе Swift
- [ReCaptcha](https://github.com/fjcaetano/ReCaptcha) - (Не)видимая ReCaptcha для iOS.
- [SwiftyOAuth](https://github.com/delba/SwiftyOAuth) - Простая библиотека OAuth для iOS со встроенным набором провайдеров.

**[вернуться наверх](#contributing-and-collaborating)**

## Блокчейн

*Инструменты для взаимодействия со смарт-контрактами. Реализации протокола Bitcoin и фреймворки для работы с криптовалютами.*

- [BitcoinKit](https://github.com/yenom/BitcoinKit) - Инструментарий протокола Bitcoin для Swift: BitcoinKit реализует протокол Bitcoin на Swift. Это реализация протокола Bitcoin SPV, написанная на Swift.
- [EthereumKit](https://github.com/yuzushioh/EthereumKit) - EthereumKit — бесплатный Swift-фреймворк с открытым исходным кодом для простого взаимодействия с Ethereum.
- [Web3.swift](https://github.com/Boilertalk/Web3.swift) - Библиотека Web3 для взаимодействия с блокчейном Ethereum.
- [web3swift](https://github.com/web3swift-team/web3swift) - Элегантная функциональность Web3js на Swift. Нативный разбор ABI и взаимодействие со смарт-контрактами.

**[вернуться наверх](#contributing-and-collaborating)**

## Книги

*Самые рекомендуемые книги*

- [Advanced Swift — авторы Chris Eidhof, Ole Begemann и Airspeed Velocity](https://www.objc.io/books/advanced-swift/)
- [Anyone Can Create an App — автор Wendy L. Wise](https://www.manning.com/books/anyone-can-create-an-app)
- [Classic Computer Science Problems in Swift](https://www.manning.com/books/classic-computer-science-problems-in-swift)
- [Cocoa Design Patterns](https://www.amazon.com/Cocoa-Design-Patterns-Erik-Buck/dp/0321535022)
- [Core Data — авторы Florian Kugler и Daniel Eggert](https://www.objc.io/books/core-data/)
- [Functional Swift — авторы Chris Eidhof, Florian Kugler и Wouter Swierstra](https://www.objc.io/books/functional-swift/)
- [Hello Swift! — автор Tanmay Bakshi при участии Lynn Beighley](https://www.manning.com/books/hello-swift)
- [iOS Development with Swift — автор Craig Grummitt](https://www.manning.com/books/ios-development-with-swift)
- [iOS Programming: The Big Nerd Ranch Guide — авторы Christian Keur, Aaron Hillegass](https://www.bignerdranch.com/books/ios-programming-the-big-nerd-ranch-guide-seventh-edition/)
- [Programming in Objective-C — автор Stephen G. Kochan](https://www.amazon.com/Programming-Objective-C-6th-Developers-Library/dp/0321967607)
- [Swift in Depth](https://www.manning.com/books/swift-in-depth)
- [The Complete Friday Q & A: Volume 1](https://www.mikeash.com/book.html)
- [The Swift Programming Language — от Apple](https://books.apple.com/us/book/swift-programming-language/id881256329)

**[вернуться наверх](#contributing-and-collaborating)**

## Кэширование

*Потокобезопасные, офлайн- и высокопроизводительные библиотеки и фреймворки для кэширования.*

- [Awesome Cache](https://github.com/aschuch/AwesomeCache) - Восхитительный дисковый кэш (написан на Swift).
- [Cache](https://github.com/hyperoslo/Cache) - Ничего, кроме кэша.
- [Disk](https://github.com/saoudrizwan/Disk) - Восхитительный фреймворк для iOS, позволяющий легко сохранять структуры, изображения и данные.
- [HanekeSwift](https://github.com/Haneke/HanekeSwift) - Легковесный универсальный кэш для iOS, написанный на Swift, с особой любовью к изображениям.
- [mattress](https://github.com/buzzfeed/mattress) - Офлайн-кэширование веб-контента в iOS.
- [PINCache](https://github.com/pinterest/PINCache) - Быстрый параллельный кэш объектов для iOS и macOS без взаимоблокировок.
- [RocketData](https://github.com/plivesey/RocketData) - Решение для кэширования и согласованности неизменяемых моделей.
- [SPTPersistentCache](https://github.com/spotify/SPTPersistentCache) - Каждый в какой-то момент жизненного цикла своего iOS-приложения пытается реализовать кэш, и это наш. От Spotify.
- [Track](https://github.com/maquannene/Track) - Track — потокобезопасный кэш, написанный на Swift. Состоит из DiskCache и MemoryCache с поддержкой LRU.
- [YYCache](https://github.com/ibireme/YYCache) - Высокопроизводительный фреймворк кэширования для iOS.

**[вернуться наверх](#contributing-and-collaborating)**

## Диаграммы

*Откройте для себя красивые, простые в использовании и настраиваемые библиотеки диаграмм для iOS, идеально подходящие для создания динамичных и впечатляющих визуализаций данных.*

- [ANDLineChartView](https://github.com/anaglik/ANDLineChartView) - ANDLineChartView — простой в использовании класс на основе view для отображения анимированного линейного графика.
- [Charts](https://github.com/danielgindi/Charts) - Мощный фреймворк для диаграмм и графиков, iOS-аналог [MPAndroidChart](https://github.com/PhilJay/MPAndroidChart).
- [core-plot](https://github.com/core-plot/core-plot) - Библиотека для построения 2D-графиков с широкими возможностями настройки, способная рисовать множество типов графиков.
- [EatFit](https://github.com/Yalantis/EatFit) - Eat fit — компонент для привлекательного представления данных, вдохновлённый Google Fit.
- [EChart](https://github.com/zhuhuihuihui/EChart) - Диаграммы и графики для iOS/iPhone/iPad. Поддерживаются обработка событий и анимация.
- [FSInteractiveMap](https://github.com/ArthurGuibert/FSInteractiveMap) - Библиотека диаграмм для визуализации векторной карты и взаимодействия с ней в iOS. Похожа на Geochart, но для iOS.
- [FSLineChart](https://github.com/ArthurGuibert/FSLineChart) - Библиотека линейных графиков для iOS.
- [JBChartView](https://github.com/Jawbone/JBChartView) - Библиотека диаграмм для iOS, поддерживающая как линейные, так и столбчатые графики.
- [JYRadarChart](https://github.com/johnnywjy/JYRadarChart) - Реализация лепестковой диаграммы (Radar Chart) для iOS с открытым исходным кодом.
- [MagicPie](https://github.com/AlexandrGraschenkov/MagicPie) - Потрясающая круговая диаграмма на основе слоёв. Фантастически быстрая и полностью настраиваемая. С MagicPie доступны впечатляющие анимации.
- [PieCharts](https://github.com/i-schuetz/PieCharts) - Простая в использовании и гибко настраиваемая библиотека круговых диаграмм для iOS.
- [PNChart](https://github.com/kevinzhow/PNChart) - Простая и красивая библиотека диаграмм для iOS, используемая в Piner и CoinsMan.
- [Scrollable-GraphView](https://github.com/philackm/ScrollableGraphView) - Адаптивное прокручиваемое представление графика для iOS для визуализации простых дискретных наборов данных. Написано на Swift.
- [SwiftChart](https://github.com/gpbl/SwiftChart) - Библиотека линейных диаграмм и диаграмм с областями для iOS.
- [TEAChart](https://github.com/xhacker/TEAChart) - Простая и интуитивно понятная библиотека диаграмм для iOS. График активности (contribution graph), диаграмма-часы и столбчатая диаграмма.
- [TKRadarChart](https://github.com/TBXark/TKRadarChart) - Настраиваемая лепестковая диаграмма на Swift.
- [TWRCharts](https://github.com/chasseurmic/TWRCharts) - Обёртка ChartJS для iOS. Легко создавайте анимированные диаграммы, используя мощь нативного кода на Obj-C.

**[вернуться наверх](#contributing-and-collaborating)**

## Внедрение кода

 *Сократите время разработки с помощью этих инструментов*

- [Inject](https://github.com/krzysztofzablocki/Inject) - Горячая перезагрузка (Hot Reloading) для Swift-приложений!
- [injectionforxcode](https://github.com/johnno1962/injectionforxcode) - Внедрение кода, в том числе на Swift.
- [Vaccine](https://github.com/zenangst/Vaccine) - Vaccine — фреймворк, цель которого — сделать ваши приложения невосприимчивыми к «болезни перекомпиляции».

**[вернуться наверх](#contributing-and-collaborating)**

## Качество кода

 *Качество важно всегда. Анализаторы кода, стражи памяти, синтаксический сахар и многое другое.*

- [Aardvark](https://github.com/square/Aardvark) - Aardvark — библиотека, которая делает создание полезных отчётов об ошибках предельно простым.
- [Bootstrap](https://github.com/krzysztofzablocki/Bootstrap) - Заготовка iOS-проекта, нацеленная на написание высококачественного кода.
- [Bugsee](https://www.bugsee.com) - Отчёты об ошибках и сбоях внутри приложения с видео, логами, сетевым трафиком и трассировками.
- [FBRetainCycleDetector](https://github.com/facebook/FBRetainCycleDetector) - iOS-библиотека, помогающая обнаруживать циклы удержания (retain cycles) во время выполнения.
- [HeapInspector-for-iOS](https://github.com/tapwork/HeapInspector-for-iOS) - Находите проблемы с памятью и утечки в своём iOS-приложении без Instruments.
- [MLeaksFinder](https://github.com/Tencent/MLeaksFinder) - Находите утечки памяти в своём iOS-приложении на этапе разработки.
- [PSTModernizer](https://github.com/PSPDFKit-labs/PSTModernizer) - Упрощает поддержку старых версий iOS, исправляя недочёты и добавляя недостающие методы.
- [spacecommander](https://github.com/square/spacecommander) - Коммитьте полностью отформатированный код на Objective-C всей командой без малейших усилий.
- [SwiftCop](https://github.com/andresinaka/SwiftCop) -  SwiftCop — библиотека валидации, полностью написанная на Swift и вдохновлённая ясностью валидаций Active Record в Ruby On Rails.
- [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) - Библиотека и консольный инструмент для переформатирования кода на Swift.
- [Tailor](https://github.com/sleekbyte/tailor) - Кроссплатформенный статический анализатор для Swift, который помогает писать более чистый код и избегать ошибок.

**[вернуться наверх](#contributing-and-collaborating)**

### Линтеры

*Статические анализаторы кода для соблюдения стиля и соглашений.*

- [AnyLint](https://github.com/Flinesoft/AnyLint) - Проверяйте что угодно, объединив мощь Swift и регулярных выражений.
- [IBLinter](https://github.com/IBDecodable/IBLinter) - Линтер для Interface Builder.
- [OCLint](https://github.com/oclint/oclint) - Инструмент статического анализа кода для повышения качества и сокращения дефектов.
- [Swiftlint](https://github.com/realm/SwiftLint) - Инструмент для соблюдения стиля и соглашений Swift.

**[вернуться наверх](#contributing-and-collaborating)**

## Цвет

*Расширения для HEX-цветов, темы оформления, палитры выбора цвета и другие отличные инструменты для работы с цветом.*

- [BCColor](https://github.com/boycechang/BCColor) - Легковесный, но мощный набор инструментов для работы с цветом (Swift).
- [ChromaColorPicker](https://github.com/joncardasis/ChromaColorPicker) - Интуитивно понятный инструмент выбора цвета для iOS, созданный на Swift.
- [Colours](https://github.com/bennyguitar/Colours) - Красивый набор предопределённых цветов и набор методов для работы с цветом, которые упростят жизнь при разработке под iOS/macOS.
- [DynamicColor](https://github.com/yannickl/DynamicColor) - Ещё одно расширение для удобной работы с цветами в Swift.
- [FlatUIColors](https://github.com/brynbellomy/FlatUIColors) - Вспомогательные средства для палитры цветов Flat UI, написанные на Swift.
- [Gestalt](https://github.com/regexident/Gestalt) - Ненавязчивая и легковесная библиотека тем оформления для iOS-приложений с поддержкой анимированного переключения тем.
- [Hue](https://github.com/zenangst/Hue) - Hue — универсальная утилита для работы с цветом, единственная, которая вам когда-либо понадобится.
- [PrettyColors](https://github.com/jdhealy/PrettyColors) - Стилизует и раскрашивает текст в терминале с помощью управляющих последовательностей ANSI. Соответствует стандарту ECMA-48.
- [RandomColorSwift](https://github.com/onevcat/RandomColorSwift) - Генератор привлекательных цветов для Swift. Портирован с `randomColor.js`.
- [SheetyColors](https://github.com/chrs1885/SheetyColors) - Инструмент выбора цвета для iOS в стиле action sheet.
- [SwiftHEXColors](https://github.com/thii/SwiftHEXColors) - Работа с HEX-цветами в виде расширения для UIColor.
- [UIColor-Hex-Swift](https://github.com/yeahdongcn/UIColor-Hex-Swift) - Удобный метод для создания autoreleased-цвета из шестнадцатеричной строки RGBA.

**[вернуться наверх](#contributing-and-collaborating)**

## Командная строка

*Умные, красивые и элегантные инструменты, которые помогут создавать приложения для командной строки.*

- [ColorizeSwift](https://github.com/mtynior/ColorizeSwift) - Стилизация строк в терминале для Swift.
- [Commander](https://github.com/kylef/Commander) - Создавайте красивые интерфейсы командной строки на Swift.
- [Guaka](https://github.com/nsomar/Guaka) - Самый умный и красивый (совместимый с POSIX) фреймворк командной строки для Swift.
- [Linenoise](https://github.com/andybest/linenoise-swift) - Замена readline на чистом Swift
- [nef](https://github.com/bow-swift/nef) - Консольный инструмент, упрощающий создание документации в виде Swift Playgrounds.
- [Progress](https://github.com/jkandzi/Progress.swift) - Добавьте красивые индикаторы прогресса в свои циклы.
- [SourceDocs](https://github.com/eneko/SourceDocs) - Консольный инструмент, генерирующий документацию в формате Markdown из комментариев в исходном коде.
- [Swift Argument Parser](https://github.com/apple/swift-argument-parser) - Простой и типобезопасный разбор аргументов для Swift
- [SwiftCLI](https://github.com/jakeheis/SwiftCLI) - Мощный фреймворк для разработки CLI на Swift
- [Swiftline](https://github.com/nsomar/Swiftline) - Swiftline — набор инструментов, которые помогут создавать приложения для командной строки.
- [SwiftShell](https://github.com/kareman/SwiftShell) - Swift-фреймворк для написания shell-скриптов и выполнения команд оболочки.
- [SwiftyTextTable](https://github.com/scottrhoyt/SwiftyTextTable) - Легковесная библиотека для генерации текстовых таблиц.

**[вернуться наверх](#contributing-and-collaborating)**

## Параллелизм

*Планировщики задач, корутины, библиотеки и фреймворки для асинхронной работы и типобезопасных потоков, написанные на Swift*

- [AsyncNinja](https://github.com/AsyncNinja/AsyncNinja) - Полный набор примитивов для параллельного и реактивного программирования.
- [AsyncQueue](https://github.com/dfed/swift-async-queue) - Библиотека очередей, позволяющих отправлять упорядоченные задачи из синхронного контекста в асинхронный.
- [Concurrent](https://github.com/typelift/Concurrent) - Функциональные примитивы параллелизма.
- [Queuer](https://github.com/FabrizioBrancati/Queuer) - Менеджер очередей, построенный поверх OperationQueue и Dispatch (он же GCD).
- [SwiftQueue](https://github.com/lucas34/SwiftQueue) - Планировщик задач с параллельным выполнением, обработкой сбоев и повторными попытками, сохранением состояния, повторением, отложенным запуском и многим другим.
- [Venice](https://github.com/Zewo/Venice) - CSP (корутины, каналы, select) для Swift.

**[вернуться наверх](#contributing-and-collaborating)**

## Core Data

*Фреймворки, обёртки, генераторы и шаблоны для Core Data.*

- [AERecord](https://github.com/tadija/AERecord) - Суперклассная обёртка над Core Data на Swift.
- [CloudCore](https://github.com/deeje/CloudCore) - Надёжная синхронизация с CloudKit: офлайн-редактирование, связи, общие и публичные базы данных, изменения на уровне полей и многое другое.
- [CoreStore](https://github.com/JohnEstropia/CoreStore) - Мощный фреймворк Core Data для инкрементальных миграций, выборки данных, наблюдения и т. д.
- [Ensembles](https://github.com/drewmccormack/ensembles) - Фреймворк синхронизации для Core Data.
- [Graph](https://github.com/CosmicMind/Graph) - Элегантный фреймворк для CoreData на Swift, управляемый данными.
- [JSQCoreDataKit](https://github.com/jessesquires/JSQCoreDataKit) - Стек Core Data в духе Swift.
- [MagicalRecord](https://github.com/magicalpanda/MagicalRecord) - Суперклассная и простая выборка данных для Core Data.
- [Mogenerator](https://github.com/rentzsch/mogenerator) - Автоматическая генерация кода для Core Data.
- [PredicateFlow](https://github.com/andreadelfante/PredicateFlow) - Пишите потрясающие, строго типизированные и легко читаемые NSPredicate в текучем стиле, не угадывая имена атрибутов и операции предикатов и не ошибаясь с типами аргументов.
- [PrediKit](https://github.com/KrakenDev/PrediKit) - DSL для NSPredicate для iOS, macOS, tvOS и watchOS. Вдохновлён SnapKit и с любовью написан на Swift.
- [Skopelos](https://github.com/albertodebortoli/Skopelos) - Минималистичная, потокобезопасная, лишённая шаблонного кода и супер простая в использовании версия Active Record поверх Core Data. Просто всё, что нужно для работы с Core Data.
- [Sync](https://github.com/3lvis/Sync) - Современная синхронизация JSON с Core Data на Swift.

**[вернуться наверх](#contributing-and-collaborating)**

## Курсы

*Онлайн-курсы, руководства и учебные материалы, которые помогут начать путь в iOS-разработке.*

### Начало работы

*Курсы, уроки, руководства и буткемпы*

- [100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui) - Бесплатная коллекция видео и уроков, обновлённая для iOS 15 и Swift 5.5.
- [Apple — объектно-ориентированное программирование на Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/OOP_ObjC/Introduction/Introduction.html)
- [ARStarter](https://github.com/codePrincess/ARStarter) - Начните работать с ARKit: небольшое упражнение для начинающих.
- [Classpert — список из 500 курсов по iOS-разработке (бесплатных и платных) от ведущих платформ онлайн-обучения](https://classpert.com/ios-development) - Полный каталог курсов от Udacity, Pluralsight, Coursera, Edx, Treehouse и Skillshare.
- [iOS & Swift — полный буткемп по разработке iOS-приложений](https://www.udemy.com/course/ios-13-app-development-bootcamp/)
- [Ray Wenderlich](https://www.raywenderlich.com/2690-learn-to-code-ios-apps-1-welcome-to-programming) - Научитесь программировать iOS-приложения.
- [Стэнфорд — разработка приложений для iOS](https://cs193p.stanford.edu/) - Курс CS193p Стэнфордского университета «Developing Apps for iOS».
- [Udacity — введение в разработку iOS-приложений на Swift](https://www.udacity.com/course/intro-to-ios-app-development-with-swift--ud585) - Бесплатный курс Udacity. Создайте своё первое приложение для iPhone.

**[вернуться наверх](#contributing-and-collaborating)**

## Базы данных

*Обёртки, клиенты, альтернативы Parse и надёжные инструменты для работы с временными и постоянными данными.*

- [Couchbase Mobile](https://www.couchbase.com/products/mobile/) - Документное хранилище Couchbase для мобильных устройств с облачной синхронизацией.
- [Default](https://github.com/Nirma/Default) - Современный интерфейс к UserDefaults + поддержка Codable.
- [Defaults](https://github.com/sindresorhus/Defaults) - Современный UserDefaults в духе Swift.
- [DuckDB](https://github.com/duckdb/duckdb-swift) - DuckDB — высокопроизводительная аналитическая система управления базами данных.
- [FCModel](https://github.com/marcoarment/FCModel) - Альтернатива Core Data для тех, кто любит иметь прямой доступ к SQL.
- [Fluent](https://github.com/vapor/fluent) - Простая реализация ActiveRecord для работы с базой данных на Swift.
- [FMDB](https://github.com/ccgus/fmdb) - Обёртка над SQLite для Cocoa / Objective-C.
- [GRDB.swift](https://github.com/groue/GRDB.swift) - Универсальный набор инструментов SQLite для Swift с поддержкой режима WAL.
- [IceCream](https://github.com/caiyue1993/IceCream) - Синхронизация базы данных Realm с CloudKit.
- [MMKV](https://github.com/Tencent/MMKV) - Эффективный компактный фреймворк мобильного хранилища «ключ — значение», разработанный в WeChat. Работает на iOS, Android, macOS и Windows.
- [MongoKitten](https://github.com/OpenKitten/MongoKitten) - Реализация клиента MongoDB на чистом Swift с поддержкой встроенных баз данных.
- [MySQL](https://github.com/PerfectlySoft/Perfect-MySQL) - Swift-обёртка над клиентской библиотекой MySQL, обеспечивающая доступ к серверам MySQL.
- [Nora](https://github.com/SD10/Nora) - Nora — слой абстракции над Firebase для работы с FirebaseDatabase и FirebaseStorage.
- [ObjectBox](https://github.com/objectbox/objectbox-swift) - ObjectBox — сверхбыстрый легковесный фреймворк для хранения объектов.
- [OHMySQL](https://github.com/oleghnidets/OHMySQL) - Обёртка над C API MySQL на Objective-C.
- [PersistenceKit](https://github.com/Teknasyon-Teknoloji/PersistenceKit) - Сохраняйте Codable-объекты в различные слои хранения и извлекайте их оттуда парой строк кода.
- [PersistentStorageSerializable](https://github.com/IvanRublev/PersistentStorageSerializable) - Swift-библиотека, упрощающая сериализацию пользовательских предпочтений (настроек приложения) с помощью системного User Defaults или файла Property List на диске.
- [Prephirences](https://github.com/phimage/Prephirences) - Prephirences — Swift-библиотека, предоставляющая полезные протоколы и удобные методы для управления предпочтениями, конфигурациями и состоянием приложения.
- [Realm](https://github.com/realm/realm-cocoa) - Альтернатива CoreData и SQLite: простая, современная и быстрая.
- [RealmGeoQueries](https://github.com/mhergon/RealmGeoQueries) - RealmGeoQueries упрощает пространственные запросы в Realm Cocoa. В отсутствие официальных функций эта библиотека даёт возможность выполнять поиск по близости.
- [SecureDefaults](https://github.com/vpeschenkov/SecureDefaults) - Легковесная обёртка над UserDefaults/NSUserDefaults с дополнительным слоем шифрования AES-256.
- [Shallows](https://github.com/dreymonde/Shallows) - Ваш легковесный набор инструментов для хранения данных.
- [SQLite.swift](https://github.com/stephencelis/SQLite.swift) - Типобезопасный слой на языке Swift поверх SQLite3.
- [StorageKit](https://github.com/StorageKit/StorageKit) - Ваш помощник в решении проблем с хранением данных.
- [SugarRecord](https://github.com/modo-studio/SugarRecord)  - Библиотека для управления хранением данных.
- [SwiftStore](https://github.com/hemantasapkota/SwiftStore) - Хранилище «ключ — значение» для Swift на основе LevelDB.
- [SwiftyUserDefaults](https://github.com/sunshinejr/SwiftyUserDefaults) - Статически типизированный NSUserDefaults.
- [TypedDefaults](https://github.com/tasanobu/TypedDefaults) - TypedDefaults — вспомогательная библиотека для типобезопасного использования NSUserDefaults.
- [Unrealm](https://github.com/arturdev/Unrealm) - Unrealm позволяет легко сохранять в Realm нативные классы, структуры и перечисления Swift.
- [UserDefaults](https://github.com/nmdias/DefaultsKit) - Простой строго типизированный UserDefaults для iOS, macOS и tvOS.
- [WCDB](https://github.com/Tencent/wcdb) - WCDB — эффективный, полнофункциональный и простой в использовании фреймворк мобильной базы данных для iOS и macOS.
- [YapDatabase](https://github.com/yapstudios/YapDatabase) - YapDatabase — расширяемая база данных для iOS и Mac.

**[вернуться наверх](#contributing-and-collaborating)**

## Структуры данных / алгоритмы

*Диффы, key path, отсортированные списки и другие удивительные обёртки и библиотеки для структур данных.*

- [Algorithm](https://github.com/CosmicMind/Algorithm) - Algorithm — коллекция структур данных, дополненных набором вероятностных инструментов.
- [BTree](https://github.com/attaswift/BTree) - Быстрые упорядоченные коллекции для Swift на основе B-деревьев в памяти.
- [Buffer](https://github.com/alexdrone/Buffer) - Swift μ-фреймворк для эффективного вычисления различий массивов, наблюдения за коллекциями и настройки ячеек.
- [Changeset](https://github.com/osteslag/Changeset) - Минимальный набор правок для перехода от одной коллекции к другой.
- [Differ](https://github.com/tonyarnold/Differ) - Swift-библиотека для генерации различий и патчей между коллекциями.
- [DifferenceKit](https://github.com/ra1028/DifferenceKit) - Быстрый и гибкий фреймворк с алгоритмом вычисления различий за O(n) для коллекций Swift.
- [Differific](https://github.com/zenangst/Differific) - Быстрый и удобный фреймворк для вычисления различий.
- [Dispatch](https://github.com/alexdrone/Store) - Реализация Flux с несколькими хранилищами на Swift.
- [Dollar](https://github.com/ankurp/Dollar) - Функциональный набор инструментов для языка Swift, похожий на Lo-Dash или Underscore.js в Javascript https://www.dollarswift.org/.
- [EKAlgorithms](https://github.com/EvgenyKarkan/EKAlgorithms) - Некоторые известные алгоритмы и структуры данных из информатики на Objective-C.
- [HeckelDiff](https://github.com/mcudich/HeckelDiff) - Быстрая Swift-библиотека для вычисления различий.
- [KeyPathKit](https://github.com/vincent-pradeilles/KeyPathKit) - KeyPathKit предоставляет удобный синтаксис для работы с данными с помощью типизированных key path.
- [Result](https://github.com/antitypical/Result) - Тип Swift, моделирующий успех или неудачу произвольных операций.
- [swift-algorithm-club](https://github.com/raywenderlich/swift-algorithm-club) - Алгоритмы и структуры данных на Swift с объяснениями!
- [SwiftGraph](https://github.com/davecom/SwiftGraph) - Структура данных «граф» и вспомогательные функции на чистом Swift.
- [SwiftPriorityQueue](https://github.com/davecom/SwiftPriorityQueue) - Очередь с приоритетом на основе классической двоичной кучи на чистом Swift.
- [SwiftStructures](https://github.com/waynewbishop/SwiftStructures) - Примеры распространённых структур данных и алгоритмов на Swift.

**[вернуться наверх](#contributing-and-collaborating)**

## Дата и время

*Библиотеки для работы со временем и NSCalendar. Также здесь есть генераторы времени восхода и заката солнца, элементы выбора времени и интерфейсы для NSTimer.*

- [10Clock](https://github.com/joedaniels29/10Clock) - Этот элемент управления — красивый инструмент выбора времени суток, во многом вдохновлённый таймером «Bedtime» из iOS 10.
- [AnyDate](https://github.com/Kawoou/AnyDate) - API даты и времени в духе Swift, вдохновлённый Java 8 DateTime API.
- [Chronology](https://github.com/davedelong/Chronology) - Создание более совершенной библиотеки для работы с датой и временем.
- [DateHelper](https://github.com/melvitax/DateHelper) - Удобное расширение для NSDate на Swift.
- [DateTools](https://github.com/MatthewYork/DateTools) - Простая работа с датами и временем на Objective-C.
- [iso-8601-date-formatter](https://github.com/boredzo/iso-8601-date-formatter) - Подкласс NSFormatter для Cocoa, преобразующий даты в строки формата ISO-8601 и обратно. Поддерживает календарный, недельный и порядковый форматы.
- [Kronos](https://github.com/lyft/Kronos) - Элегантная библиотека для получения даты по NTP на Swift.
- [NVDate](https://github.com/novalagung/nvdate) - Библиотека расширений Date для Swift4.
- [Schedule](https://github.com/luoxiu/Schedule) - ⏳ Недостающий легковесный планировщик задач для Swift с невероятно понятным человеку синтаксисом.
- [Solar](https://github.com/ceeK/Solar) - Swift-микробиблиотека для вычисления времени восхода и заката солнца.
- [SwiftDate](https://github.com/malcommac/SwiftDate) - Лучший способ управления датами и часовыми поясами в Swift.
- [SwiftyTimer](https://github.com/radex/SwiftyTimer) - API для NSTimer в духе Swift.
- [Time](https://github.com/dreymonde/Time) - Типобезопасные вычисления времени в Swift на основе дженериков.
- [Timepiece](https://github.com/naoty/Timepiece) - Интуитивно понятные расширения NSDate на Swift.
- [TimeZonePicker](https://github.com/gligorkot/TimeZonePicker) - UIViewController для выбора часового пояса (TimeZonePicker), похожий на приложение «Настройки» в iOS.
- [TrueTime](https://github.com/instacart/TrueTime.swift) - Получайте истинное текущее время, не зависящее от изменений часов на устройстве.

**[вернуться наверх](#contributing-and-collaborating)**

## Отладка

*Инструменты отладки, отчёты о сбоях, логи и консольные интерфейсы.*

- [AEConsole](https://github.com/tadija/AEConsole) - Настраиваемый оверлей с консолью и отладочным логом поверх вашего iOS-приложения.
- [Alpha](https://github.com/Legoless/Alpha) - Фреймворк отладки нового поколения для iOS.
- [AppSpector](https://appspector.com) - Сервис удалённой отладки и сбора данных для iOS и Android. Можно отлаживать сетевое взаимодействие, логи, CoreData, SQLite, NSNotificationCenter и подменять геопозицию устройства.
- [Atlantis](https://github.com/ProxymanApp/atlantis) - Небольшой, но мощный iOS-фреймворк для перехвата HTTP/HTTPS-трафика вашего iOS-приложения. Больше никакой возни с настройкой прокси и сертификатов. Изучайте журнал трафика в приложении Proxyman.
- [chisel](https://github.com/facebook/chisel) - Коллекция команд LLDB, помогающих в отладке iOS-приложений.
- [DBDebugToolkit](https://github.com/dbukowski/DBDebugToolkit) - Набор простых в использовании инструментов отладки для iOS-разработчиков и QA-инженеров.
- [DebugSwift](https://github.com/DebugSwift/DebugSwift) - Комплексный набор инструментов, призванный упростить и улучшить процесс отладки iOS-приложений.
- [DoraemonKit](https://github.com/didi/DoraemonKit) - Полнофункциональный помощник в разработке iOS-приложений, включающий более 30 инструментов. Вы этого заслуживаете.
- [Flex](https://github.com/Flipboard/FLEX) - Инструмент для отладки и исследования приложения изнутри для iOS.
- [Httper-iOS](https://github.com/MuShare/Httper-iOS) - Приложение для разработчиков для тестирования REST API.
- [Hyperion](https://github.com/willowtreeapps/Hyperion-iOS) - Инструмент для проверки дизайна внутри приложения: размеры, атрибуты и анимации.
- [LayoutInspector](https://github.com/isavynskyi/LayoutInspector) - Отлаживайте вёрстку приложения прямо на iOS-устройстве: изучайте слои в 3D и отлаживайте атрибуты каждого видимого представления.
- [MTHawkeye](https://github.com/meitu/MTHawkeye) - Вспомогательные инструменты профилирования и отладки для iOS, в том числе: UITimeProfiler, Memory Allocations, Living ObjC Objects Sniffer, Network Transaction Waterfall и др.
- [Netfox](https://github.com/kasketis/netfox) - Легковесная библиотека для отладки сети в iOS / macOS, настраиваемая одной строкой!
- [NetworkEye](https://github.com/coderyi/NetworkEye) - Библиотека отладки сети для iOS. Отслеживает HTTP-запросы внутри приложения и отображает связанную с ними информацию.
- [Playbook](https://github.com/playbook-ui/playbook-ios) - Библиотека для изолированной разработки UI-компонентов и автоматического создания их снапшотов.
- [PonyDebugger](https://github.com/square/PonyDebugger) - Удалённая отладка сети и данных вашего нативного iOS-приложения с помощью Chrome Developer Tools.
- [Scyther](https://github.com/bstillitano/Scyther) - Полнофункциональное отладочное меню внутри приложения, наполненное полезными инструментами: логирование сети, инспекция вёрстки, подмена геопозиции, вывод логов в консоль и многое другое.
- [Woodpecker](http://www.woodpeck.cn) - Просматривайте файлы песочницы, UserDefaults и сетевые запросы с Mac.
- [Wormholy](https://github.com/pmusolino/Wormholy) - Отладка сети в iOS, как по волшебству.
- [Xniffer](https://github.com/xmartlabs/Xniffer) - Сетевой профилировщик на Swift, построенный поверх URLSession.

**[вернуться наверх](#contributing-and-collaborating)**


## Внедрение зависимостей

*Фреймворки и библиотеки внедрения зависимостей для слабосвязанного и тестируемого кода под iOS.*

- [DITranquillity](https://github.com/ivlevAstef/DITranquillity) - Фреймворк внедрения зависимостей для iOS-приложений, написанный на чистом Swift.
- [Needle](https://github.com/uber/needle) — Фреймворк внедрения зависимостей для Swift с проверкой безопасности на этапе компиляции и реальным кодом.
- [Perform](https://github.com/thoughtbot/Perform) - Простое внедрение зависимостей для переходов (segue) в storyboard.
- [SafeDI](https://github.com/dfed/safedi) - Внедрение зависимостей с проверкой безопасности на этапе компиляции в Swift 6.
- [Swinject](https://github.com/Swinject/Swinject) - Фреймворк внедрения зависимостей для Swift.
- [Typhoon](https://github.com/appsquickly/Typhoon) - Мощное внедрение зависимостей для Objective-C.
- [Weaver](https://github.com/scribd/Weaver) - Декларативный, простой в использовании и безопасный фреймворк внедрения зависимостей для Swift.

**[вернуться наверх](#contributing-and-collaborating)**

## Менеджеры зависимостей / пакетов

*Инструменты для управления сторонними зависимостями и пакетами в ваших iOS-проектах.*

- [Accio](https://github.com/JamitLabs/Accio) - Менеджер зависимостей на основе SwiftPM для iOS и не только, с улучшениями по сравнению с Carthage.
- [Carthage](https://github.com/Carthage/Carthage) - Простой децентрализованный менеджер зависимостей для Cocoa.
- [CocoaPods](https://cocoapods.org/) - CocoaPods — менеджер зависимостей для проектов на Objective-C. В нём тысячи библиотек, и он поможет элегантно масштабировать ваши проекты.
- [Rome](https://github.com/tmspzz/Rome) - Инструмент кэширования фреймворков, собранных с помощью Carthage.
- [swift-package-manager](https://github.com/apple/swift-package-manager) - Менеджер пакетов для языка программирования Swift.
- [Xcode Maven](http://sap-production.github.io/xcode-maven-plugin/site/) - Плагин Xcode Maven позволяет запускать сборки Xcode, встроенные в жизненный цикл Maven.

**[вернуться наверх](#contributing-and-collaborating)**

## Развёртывание / распространение

*Инструменты непрерывной интеграции, доставки и распространения для выпуска iOS-приложений.*

- [AppCenter](https://appcenter.ms) - Непрерывная сборка, тестирование, выпуск и мониторинг приложений для любой платформы.
- [Appcircle.io](https://appcircle.io) — Мобильная DevOps-платформа корпоративного уровня, автоматизирующая сборку, тестирование и публикацию мобильных приложений в магазинах для более быстрого и эффективного цикла выпуска
- [AppLaunchpad](https://theapplaunchpad.com/) - Бесплатный конструктор скриншотов для App Store.
- [Bitrise](https://www.bitrise.io) - Непрерывная интеграция и доставка для мобильных приложений с десятками интеграций для сборки, тестирования, развёртывания и совместной работы.
- [boarding](https://github.com/fastlane/boarding) - Мгновенно создайте простую страницу регистрации для бета-тестировщиков TestFlight.
- [buddybuild](https://www.buddybuild.com/) - Платформа для итеративной мобильной разработки: сборка, развёртывание и совместная работа.
- [Codemagic](https://codemagic.io) - Собирайте, тестируйте и доставляйте iOS-приложения на 20% быстрее с Codemagic CI/CD.
- [Crashlytics](https://firebase.google.com/products/crashlytics/) - Сервис отчётов о сбоях и бета-тестирования.
- [deliver](https://github.com/fastlane/fastlane/tree/master/deliver) - Загружайте скриншоты, метаданные и само приложение в App Store одной командой.
- [fastlane](https://github.com/fastlane/fastlane) - Объединяет все инструменты развёртывания iOS в один отлаженный рабочий процесс.
- [Instabug](https://instabug.com) - Обратная связь внутри приложения, отчёты об ошибках и сбоях; исправляйте баги быстрее благодаря шагам пользователя, видеозаписям, аннотациям к экрану и логированию сетевых запросов.
- [LaunchKit](https://github.com/LaunchKit/LaunchKit) - Набор веб-инструментов для разработчиков мобильных приложений, теперь с открытым исходным кодом!
- [Rollout.io](https://rollout.io/) - SDK для патчинга, исправления ошибок, модификации и управления нативными приложениями (Obj-c и Swift) в реальном времени.
- [Runway](https://runway.team) - Более простые мобильные релизы для команд. Интегрируется с разными инструментами (системы контроля версий, управление проектами, CI, магазины приложений, отчёты о сбоях и т. д.), чтобы дать мобильным командам единый источник истины, вокруг которого можно объединиться во время циклов выпуска. Автоматизация и совместная работа в равных долях.
- [Screenplay](https://screenplay.dev) - Мгновенные откаты и канареечные развёртывания для iOS.
- [ScreenshotFramer](https://github.com/IdeasOnCanvas/ScreenshotFramer) - С помощью Screenshot Framer можно легко создавать красивые и локализованные изображения для App Store.
- [Semaphore](https://semaphoreci.com/product/ios) - Сервис CI/CD, упрощающий сборку, тестирование и развёртывание приложений для любых устройств Apple. Поддержка iOS полностью интегрирована в Semaphore 2.0, поэтому для iOS можно использовать те же мощные возможности конвейеров CI/CD, что и для разработки под Linux.
- [snapshot](https://github.com/fastlane/fastlane/tree/master/snapshot) - Автоматизируйте создание локализованных скриншотов вашего iOS-приложения на всех устройствах.
- [Бета-тестирование в TestFlight](https://developer.apple.com/testflight/) - Сервис бета-тестирования, размещённый в iTunes Connect (требуется iOS 8 или новее).
- [watchbuild](https://github.com/fastlane/watchbuild) - Получайте уведомление, как только сборка в iTunes Connect завершит обработку.

**[вернуться наверх](#contributing-and-collaborating)**

## Шина событий

*Библиотеки промисов и фьючерсов, которые помогут писать более качественный асинхронный код на Swift.*

- [Bolts](https://github.com/BoltsFramework/Bolts-ObjC) - Bolts — коллекция низкоуровневых библиотек, призванных упростить разработку мобильных приложений, включая задачи (промисы) и ссылки на приложения (диплинки).
- [Bolts-Swift](https://github.com/BoltsFramework/Bolts-Swift) - Bolts — коллекция низкоуровневых библиотек, призванных упростить разработку мобильных приложений.
- [FutureKit](https://github.com/FutureKit/FutureKit) - Библиотека Future/Promises на основе Swift для iOS и macOS.
- [Hydra](https://github.com/malcommac/Hydra) - Промисы и Await: пишите более качественный асинхронный код на Swift.
- [Promis](https://github.com/albertodebortoli/Promis) - Самый простой фреймворк Future и Promises на Swift. Никакой магии. Никакого шаблонного кода.
- [Promise](https://github.com/khanlou/Promise) - Библиотека промисов для Swift, частично основанная на спецификации A+ из Javascript.
- [PromiseKit](https://github.com/mxcl/PromiseKit) - Промисы для iOS и macOS.
- [RWPromiseKit](https://github.com/deput/RWPromiseKit) - Легковесная библиотека промисов для Objective-C.
- [signals-ios](https://github.com/uber/signals-ios) - Типизированная работа с событиями.
- [SwiftEventBus](https://github.com/cesarferreira/SwiftEventBus) - Шина событий типа «публикация/подписка», оптимизированная для iOS.
- [SwiftNotificationCenter](https://github.com/100mango/SwiftNotificationCenter) - Протокольно-ориентированный NotificationCenter, обеспечивающий безопасность типов, потоков и памяти.
- [SwiftTask](https://github.com/ReactKit/SwiftTask) - Промис + прогресс + пауза + отмена + повтор для Swift.
- [then🎬](https://github.com/freshOS/then) - Элегантный асинхронный код на Swift.
- [When](https://github.com/vadymmarkov/When) - Легковесная реализация промисов на Swift.

**[вернуться наверх](#contributing-and-collaborating)**

## Файлы

*Управление файлами, файловые браузеры, работа с zip и отслеживание изменений файлов.*

- [AMSMB2](https://github.com/amosavian/AMSMB2) - Swift-фреймворк для подключения к общим ресурсам SMB 2/3 в iOS.
- [AppFolder](https://github.com/dreymonde/AppFolder) - AppFolder — легковесный фреймворк, позволяющий создать удобное строго типизированное представление каталогов внутри контейнера вашего приложения.
- [FileBrowser](https://github.com/marmelroy/FileBrowser) - Мощный файловый браузер на Swift для iOS.
- [FileKit](https://github.com/nvzqz/FileKit) - Простое и выразительное управление файлами на Swift.
- [FileProvider](https://github.com/amosavian/FileProvider) - Замена FileManager для локальных, iCloud- и удалённых (WebDAV/FTP/Dropbox/OneDrive/SMB2) файлов в iOS/tvOS и macOS.
- [KZFileWatchers](https://github.com/krzysztofzablocki/KZFileWatchers) - Микрофреймворк для отслеживания изменений как локальных, так и удалённых файлов. Полезен при создании инструментов для разработчиков.
- [Zip](https://github.com/marmelroy/Zip) - Swift-фреймворк для упаковки файлов в zip и их распаковки.
- [ZipArchive](https://github.com/ZipArchive/ZipArchive) - ZipArchive — простой вспомогательный класс для упаковки и распаковки zip-файлов в iOS и на Mac.
- [ZIPFoundation](https://github.com/weichsel/ZIPFoundation) - Работа с ZIP в Swift без усилий.
- [ZipZap](https://github.com/pixelglow/ZipZap) - Библиотека ввода-вывода zip-файлов для iOS, macOS и tvOS.


**[вернуться наверх](#contributing-and-collaborating)**

## Функциональное программирование

*Коллекция инструментов функционального программирования для Swift.*

- [Argo](https://github.com/thoughtbot/Argo) - Библиотека функционального разбора JSON для Swift.
- [Bow](https://github.com/bow-swift/bow) - Вспомогательная библиотека для типизированного функционального программирования на Swift.
- [OptionalExtensions](https://github.com/RuiAAPeres/OptionalExtensions) - Swift µ-фреймворк с расширениями для типа Optional.
- [Prelude](https://github.com/robrix/Prelude) - Swift µ-фреймворк с простыми инструментами функционального программирования.
- [Runes](https://github.com/thoughtbot/Runes) - Инфиксные операторы для монадических функций в Swift.
- [Swiftx](https://github.com/typelift/Swiftx) - Функциональные типы данных и функции для любого проекта.
- [Swiftz](https://github.com/typelift/Swiftz) -  Функциональное программирование на Swift.

**[вернуться наверх](#contributing-and-collaborating)**

## Игры

*Игровые движки, фреймворки и примеры проектов для создания игр под iOS.*

- [CollectionNode](https://github.com/bwide/CollectionNode) - Swift-фреймворк для collectionView в SpriteKit.
- [glide engine](https://github.com/cocoatoucher/Glide) - Движок для создания 2D-игр на основе SpriteKit и GameplayKit с практическими примерами и руководствами.
- [Sage](https://github.com/nvzqz/Sage) - Кроссплатформенная шахматная библиотека для Swift.
- [SKTiled](https://github.com/mfessenden/SKTiled) - Swift-фреймворк для работы с ресурсами Tiled в SpriteKit.
- [SwiftFortuneWheel](https://github.com/sh-khashimov/SwiftFortuneWheel) - Кроссплатформенный фреймворк для игр наподобие «Колеса фортуны».

**[вернуться наверх](#contributing-and-collaborating)**

## GCD

*Синтаксический сахар, инструменты и таймеры для Grand Central Dispatch.*

- [Async](https://github.com/duemunk/Async) - Синтаксический сахар на Swift для асинхронной диспетчеризации в Grand Central Dispatch.
- [GCDKit](https://github.com/JohnEstropia/GCDKit) - Grand Central Dispatch, упрощённый с помощью Swift.
- [GCDTimer](https://github.com/hemantasapkota/GCDTimer) - Хорошо протестированный таймер Grand Central Dispatch (GCD) на Swift.
- [YYDispatchQueuePool](https://github.com/ibireme/YYDispatchQueuePool) - Вспомогательный класс для iOS для управления глобальными очередями диспетчеризации.

**[вернуться наверх](#contributing-and-collaborating)**

## Жесты

*Библиотеки и инструменты для обработки жестов.*

- [DBPathRecognizer](https://github.com/didierbrun/DBPathRecognizer) - Инструмент для распознавания жестов.
- [FDFullscreenPopGesture](https://github.com/forkingdog/FDFullscreenPopGesture) - Категория UINavigationController, включающая полноэкранный жест возврата (pop) в системном стиле iOS7+ с помощью АОП.
- [Sensitive](https://github.com/hellowizman/Sensitive) - Особый способ работы с жестами в iOS.
- [SwiftyGestureRecognition](https://github.com/b3ll/SwiftyGestureRecognition) - Помогает прототипировать UIGestureRecognizer в Xcode Playgrounds.
- [Tactile](https://github.com/delba/Tactile) - Более удобный способ обработки жестов в iOS.

**[вернуться наверх](#contributing-and-collaborating)**

## Графика

*Библиотеки, вспомогательные средства и инструменты для CoreGraphics, CoreAnimation, SVG и CGContext.*

- [AnimatedGradientView](https://github.com/rwbutler/AnimatedGradientView) - Простой фреймворк для добавления анимированных градиентов в ваше iOS-приложение.
- [Drawsana](https://github.com/Asana/Drawsana) - iOS-фреймворк для создания представлений для растрового рисования и разметки изображений.
- [EZYGradientView](https://github.com/shashankpali/EZYGradientView) - Создавайте градиенты и размытые градиенты без единой строки кода.
- [jot](https://github.com/IFTTT/jot) - iOS-фреймворк для простого добавления рисунков и текста на изображения.
- [Macaw](https://github.com/exyte/macaw) - Мощная и простая в использовании библиотека векторной графики с поддержкой SVG, написанная на Swift.
- [MKGradientView](https://github.com/maxkonovalov/MKGradientView) - Представление градиента на основе Core Graphics, способное создавать линейные (осевые), радиальные (круговые), конические (угловые) и билинейные (четырёхточечные) градиенты, написанное на Swift.
- [MPWDrawingContext](https://github.com/mpw/MPWDrawingContext) - Обёртка на Objective-C для CGContext из CoreGraphics.
- [NXDrawKit](https://github.com/Nicejinux/NXDrawKit) - NXDrawKit — простой и лёгкий, но полезный набор для рисования для iPhone.
- [Snowflake](https://github.com/onmyway133/Snowflake) - SVG на Swift.
- [SVGKit](https://github.com/SVGKit/SVGKit) - Отображение SVG-изображений и взаимодействие с ними в iOS / macOS с использованием нативного рендеринга (CoreAnimation) (сейчас поддерживается только iOS — код для macOS нуждается в обновлении).
- [SwiftSVG](https://github.com/mchoe/SwiftSVG) -  Однопроходный парсер SVG с несколькими вариантами интерфейса (String, NS/UIBezierPath, CAShapeLayer и NS/UIView).
- [YYAsyncLayer](https://github.com/ibireme/YYAsyncLayer) - Вспомогательные классы для iOS для асинхронного рендеринга и отображения.

**[вернуться наверх](#contributing-and-collaborating)**

## Оборудование

*Библиотеки и утилиты для взаимодействия с оборудованием iOS-устройств.*

### Bluetooth

*Библиотеки для работы с ближайшими устройствами, инструменты BLE и обёртки над MultipeerConnectivity.*

- [BabyBluetooth](https://github.com/coolnameismy/BabyBluetooth) - Самый простой способ использовать Bluetooth (BLE) в iOS/MacOS.
- [Bleu](https://github.com/1amageek/Bleu) - BLE (Bluetooth LE) для вас.
- [BlueCap](https://github.com/troystribling/BlueCap) - Фреймворк Bluetooth LE для iOS.
- [Bluejay](https://github.com/steamclock/bluejay) - Простой Swift-фреймворк для создания надёжных приложений с Bluetooth LE.
- [Bluetonium](https://github.com/e-sites/Bluetonium) - Маппинг Bluetooth на Swift.
- [BluetoothKit](https://github.com/rhummelmose/BluetoothKit) - Простой обмен данными между устройствами iOS/macOS с помощью BLE.
- [Discovery](https://github.com/omergul/Discovery) - Очень простая библиотека для обнаружения ближайших устройств и получения от них данных (даже если приложение на другом устройстве работает в фоне).
- [LGBluetooth](https://github.com/LGBluetooth/LGBluetooth) - Простая легковесная библиотека на основе блоков поверх CoreBluetooth. Наведёт порядок в вашем коде, связанном с Core Bluetooth.
- [MultiPeer](https://github.com/dingwilson/MultiPeer) - Multipeer — обёртка над фреймворком Apple MultipeerConnectivity для офлайн-передачи данных между устройствами Apple. Позволяет легко автоматически подключаться к нескольким ближайшим устройствам и обмениваться информацией через bluetooth или wifi.
- [PeerKit](https://github.com/jpsim/PeerKit) Swift-фреймворк с открытым исходным кодом для создания событийно-ориентированных приложений Multipeer Connectivity, не требующих настройки.

**[вернуться наверх](#contributing-and-collaborating)**

### Камера

*Моки, ImagePicker и множество вариантов настраиваемой реализации камеры*

- [BarcodeScanner](https://github.com/hyperoslo/BarcodeScanner) - Простой и красивый сканер штрихкодов.
- [CameraKit-iOS](https://github.com/CameraKit/camerakit-ios) - Значительно повысьте производительность и удобство использования камеры в вашем следующем iOS-проекте.
- [CameraManager](https://github.com/imaginary-cloud/CameraManager) - Простой класс на Swift, предоставляющий все настройки, необходимые для создания собственного представления камеры в вашем приложении.
- [Cool-iOS-Camera](https://github.com/GabrielAlva/Cool-iOS-Camera) - Полностью настраиваемая современная реализация камеры для iOS, созданная с помощью AVFoundation.
- [ExyteMediaPicker](https://github.com/exyte/mediapicker) - Настраиваемый инструмент выбора медиафайлов
- [FastttCamera](https://github.com/IFTTT/FastttCamera) - Быыыстрый и простой фреймворк камеры для iOS с настраиваемыми фильтрами.
- [FDTake](https://github.com/fulldecent/FDTake) - Легко снимайте фото или видео либо выбирайте их из библиотеки.
- [Fusuma](https://github.com/ytakzk/Fusuma) - Браузер фотографий и камера в стиле Instagram, подключаемые несколькими строками кода на Swift.
- [HorizonSDK-iOS](https://github.com/HorizonCamera/HorizonSDK-iOS) - Передовая iOS-библиотека для записи видео и съёмки фото в реальном времени.
- [HybridCamera](https://github.com/eonist/HybridCamera) - Камера для видео и фото для iOS, похожая на камеру SnapChat.
- [iOS-Depth-Sampler](https://github.com/shu223/iOS-Depth-Sampler) - Коллекция примеров кода для Depth API.
- [LLSimpleCamera](https://github.com/omergul/LLSimpleCamera) - Простой настраиваемый элемент управления камерой — видеорекордер для iOS.
- [Lumina](https://github.com/dokun1/Lumina) - Полнофункциональная камера, которая снимает фото и видео, передаёт поток кадров, распознаёт метаданные и выдаёт поток предсказаний CoreML.
- [MijickCamera](https://github.com/Mijick/Camera) - Камера — это просто. Полностью настраиваемая библиотека камеры, которая значительно сокращает время и усилия на реализацию. Написана с помощью SwiftUI и для SwiftUI.
- [NextLevel](https://github.com/NextLevel/NextLevel) - Next Level — библиотека камеры для захвата медиа в iOS.
- [RSBarcodes_Swift](https://github.com/yeahdongcn/RSBarcodes_Swift) - Сканер и генераторы одномерных и двумерных штрихкодов для iOS 8 с восхитительными элементами управления. Теперь на Swift.
- [SCRecorder](https://github.com/rFlex/SCRecorder) - Движок камеры с записью по касанию в стиле Vine, анимируемыми фильтрами, замедленной съёмкой и редактированием сегментов.
- [SwiftyCam](https://github.com/Awalz/SwiftyCam) -  Фреймворк камеры для iOS, вдохновлённый Snapchat и написанный на Swift.
- [YPImagePicker](https://github.com/Yummypets/YPImagePicker) - Инструмент выбора изображений и фильтры в стиле Instagram для iOS.

**[вернуться наверх](#contributing-and-collaborating)**

### Force Touch

*Быстрые действия и взаимодействия peek и pop*

- [PeekView](https://github.com/itsmeichigo/PeekView) - PeekView поддерживает действия peek, pop и предпросмотра на iOS-устройствах без поддержки 3D Touch.
- [QuickActions](https://github.com/ricardopereira/QuickActions) - Swift-обёртка для быстрых действий на экране «Домой» в iOS (ярлыки на иконке приложения).

**[вернуться наверх](#contributing-and-collaborating)**

### iBeacon

*Библиотеки обнаружения устройств и вспомогательные средства для iBeacon*

- [BeaconEmitter](https://github.com/lgaches/BeaconEmitter) - Превратите свой Mac в iBeacon.
- [JMCBeaconManager](https://github.com/izotx/JMCBeaconManager) - Класс-менеджер iBeacon, отвечающий за обнаружение ближайших маячков.
- [MOCA Proximity](https://www.mocaplatform.com/features) - Платная платформа маркетинга на основе близости, позволяющая добавить в ваше приложение потрясающие сценарии взаимодействия с учётом близости.
- [OWUProximityManager](https://github.com/ohayon/OWUProximityManager) - iBeacons + CoreBluetooth.

**[вернуться наверх](#contributing-and-collaborating)**

### Геолокация

*Библиотеки для отслеживания местоположения, обнаружения движения и геозон*

- [AsyncLocationKit](https://github.com/AsyncSwift/AsyncLocationKit) - Обёртка над фреймворком Apple CoreLocation с использованием современного параллелизма Swift (async/await).
- [BBLocationManager](https://github.com/benzamin/BBLocationManager) - Менеджер местоположения для простой реализации служб геолокации и геозон в iOS.
- [LocationManager](https://github.com/intuit/LocationManager) - Предоставляет асинхронный API на основе блоков для однократного или непрерывного запроса текущего местоположения.
- [set-simulator-location](https://github.com/lyft/set-simulator-location) - CLI для установки местоположения в симуляторе iOS.
- [SOMotionDetector](https://github.com/arturdev/SOMotionDetector) - Простая библиотека для обнаружения движения. Основана на обновлениях местоположения и ускорении.
- [SwiftLocation](https://github.com/malcommac/SwiftLocation) - Отслеживание местоположения и маячков на Swift.

**[вернуться наверх](#contributing-and-collaborating)**

### Прочее оборудование

*Вспомогательные средства для акселерометров, гироскопов, тактильной отдачи и других датчиков устройства.*

- [DarkLightning](https://github.com/jensmeder/DarkLightning) - Просто самый быстрый способ передачи данных между iOS/tvOS и macOS.
- [Device](https://github.com/Ekhoo/Device) - Легковесный инструмент для определения текущего устройства и размера экрана, написанный на Swift.
- [Device.swift](https://github.com/schickling/Device.swift) - Сверхлегковесная библиотека для определения используемого устройства.
- [DeviceKit](https://github.com/devicekit/DeviceKit) - DeviceKit — замена UIDevice в виде значимого типа (value type).
- [Haptico](https://github.com/iSapozhnik/Haptico) - Простой в использовании генератор тактильной обратной связи с поддержкой воспроизведения паттернов.
- [Luminous](https://github.com/andrealufino/Luminous) - Luminous — большой фреймворк, который может предоставить много сведений (более 50) о текущей системе.
- [MotionKit](https://github.com/MHaroonBaig/MotionKit) - Получайте данные акселерометра, гироскопа и магнитометра всего в две или несколько строк кода. CoreMotion стал безумно простым.
- [NFCPassportReader](https://github.com/AndyQ/NFCPassportReader) - Swift-библиотека для чтения паспортов с поддержкой NFC. Поддерживает BAC, Secure Messaging, а также активную и пассивную аутентификацию. Требуется iOS 13 или новее.
- [SDVersion](https://github.com/sebyddd/SDVersion) - Легковесная библиотека Cocoa для определения модели устройства и размера экрана.
- [TapticEngine](https://github.com/WorldDownTown/TapticEngine) - TapticEngine генерирует вибрации на iOS-устройствах.
- [UIDeviceComplete](https://github.com/Nirma/UIDeviceComplete) - Расширения UIDevice, восполняющие недостающие части.
- [WatchShaker](https://github.com/ezefranca/WatchShaker) - WatchShaker — написанный на Swift вспомогательный инструмент для watchOS, распознающий встряхивание.

**[вернуться наверх](#contributing-and-collaborating)**

## Компоновка

*Auto Layout, UI-фреймворки и великолепный список инструментов, упрощающих построение макетов*

- [Anchorage](https://github.com/Rightpoint/Anchorage) - Коллекция операторов и утилит, упрощающих код компоновки в iOS.
- [Auto Layout Magic](http://akordadev.github.io/AutoLayoutMagic/) - Создайте 1 сцену, и Auto Layout Magic сгенерирует для вас ограничения! Сцены отлично выглядят на всех устройствах!
- [BrickKit](https://github.com/wayfair/brickkit-ios) - С BrickKit можно просто создавать сложные адаптивные макеты. Он прост в использовании и легко расширяется. Создавайте собственные переиспользуемые «кирпичики» и поведения.
- [Cartography](https://github.com/robb/Cartography) - Декларативный DSL для Auto Layout на Swift.
- [Cupcake](https://github.com/nerdycat/Cupcake) - Простой способ создавать и размещать UI-компоненты для iOS.
- [EasyPeasy](https://github.com/nakiostudio/EasyPeasy) - Auto Layout — это просто.
- [Façade](https://github.com/mamaral/Facade) - Программная компоновка представлений для всех остальных — альтернатива autolayout.
- [FDTemplateLayoutCell](https://github.com/forkingdog/UITableView-FDTemplateLayoutCell) - Шаблонная ячейка с auto layout для автоматического расчёта высоты UITableViewCell.
- [FlexLayout](https://github.com/layoutBox/FlexLayout) - FlexLayout аккуратно оборачивает высокооптимизированную реализацию flexbox [facebook/yoga](https://github.com/facebook/yoga) в лаконичный, интуитивно понятный синтаксис с цепочками вызовов.
- [FLKAutoLayout](https://github.com/floriankugler/FLKAutoLayout) - Категория UIView, упрощающая создание ограничений компоновки в коде.
- [Grid](https://github.com/exyte/Grid) - Самый мощный контейнер Grid, которого не хватало в SwiftUI.
- [Layout](https://github.com/nicklockwood/layout) - Декларативный UI-фреймворк для iOS.
- [Layoutless](https://github.com/DeclarativeHub/Layoutless) - Минималистичный декларативный фреймворк для компоновки и стилизации, построенный поверх Auto Layout.
- [ManualLayout](https://github.com/isair/ManualLayout) - Простая в использовании и гибкая библиотека для ручной компоновки представлений и слоёв в iOS и tvOS. Поддерживает AsyncDisplayKit.
- [Masonry](https://github.com/SnapKit/Masonry) - Используйте мощь NSLayoutConstraints из AutoLayout с упрощённым и выразительным синтаксисом с цепочками вызовов.
- [MisterFusion](https://github.com/marty-suzuki/MisterFusion) - Swift DSL для AutoLayout. Предельно понятный и при этом лаконичный синтаксис; кроме того, его можно использовать как в Swift, так и в Objective-C.
- [MondrianLayout](https://github.com/muukii/MondrianLayout) - Построитель макетов для AutoLayout на основе DSL.
- [MyLinearLayout](https://github.com/youngsoft/MyLinearLayout) - MyLayout — мощный UI-фреймворк для iOS, реализованный на Objective-C. Он объединяет возможности Android Layout, iOS AutoLayout, SizeClass, HTML CSS float, flexbox и bootstrap.
- [Neon](https://github.com/mamaral/Neon) - Мощный Swift-фреймворк для программной компоновки UI.
- [PinLayout](https://github.com/layoutBox/PinLayout) - Быстрая компоновка представлений на Swift без auto layout. Никакой магии — чистый код, полный контроль и молниеносная скорость. Лаконичный, интуитивно понятный и читаемый синтаксис с цепочками вызовов.
- [PureLayout](https://github.com/PureLayout/PureLayout) - Исчерпывающий API для Auto Layout в iOS и macOS — впечатляюще простой и невероятно мощный. Совместим с Objective-C и Swift.
- [QuickLayout](https://github.com/huri000/QuickLayout) - QuickLayout предлагает простой способ удобно управлять Auto Layout в коде.
- [Relayout](https://github.com/stevestreza/Relayout) - Swift-микрофреймворк для функционального объявления ограничений Auto Layout.
- [SnapKit](https://github.com/SnapKit/SnapKit) - Swift DSL для Autolayout в iOS и macOS.
- [Stevia](https://github.com/freshOS/Stevia) - Элегантная компоновка представлений для iOS.
- [SwiftAutoLayout](https://github.com/indragiek/SwiftAutoLayout) - Крошечный Swift DSL для Autolayout.
- [SwiftBond](https://github.com/DeclarativeHub/Bond) - Bond — Swift-фреймворк привязки данных, выводящий концепцию привязок на совершенно новый уровень. Он простой, мощный, типобезопасный и мультипарадигменный.
- [SwiftBox](https://github.com/joshaber/SwiftBox) - Flexbox на Swift с использованием css-layout от Facebook.
- [Swiftstraints](https://github.com/Skyvive/Swiftstraints) - Auto Layout на Swift — это просто.
- [TinyConstraints](https://github.com/roberthein/TinyConstraints) -  Синтаксический сахар, делающий Auto Layout слаще для использования людьми.
- [Yalta](https://github.com/kean/Align) - Интуитивно понятная и мощная библиотека Auto Layout.
- [YogaKit](https://github.com/facebook/yoga/tree/master/YogaKit) - Мощный движок компоновки, реализующий Flexbox.

**[вернуться наверх](#contributing-and-collaborating)**

## Локализация

*Инструменты для управления файлами строк, перевода и включения локализации в ваших приложениях.*

- [attranslate](https://github.com/fkirc/attranslate) - Полуавтоматический перевод или синхронизация файлов .strings или кроссплатформенных файлов на разных языках.
- [BartyCrouch](https://github.com/Flinesoft/BartyCrouch) - Инкрементальное обновление и перевод ваших файлов Strings на основе кода и Storyboards/XIB.
- [CrowdinSDK](https://github.com/crowdin/mobile-sdk-ios) - Crowdin iOS SDK мгновенно доставляет в приложение все новые переводы из проекта Crowdin.
- [Hodor](https://github.com/Aufree/Hodor) - Простое решение для локализации вашего iOS-приложения.
- [IBLocalizable](https://github.com/PiXeL16/IBLocalizable) - Локализуйте свои представления прямо в Interface Builder с помощью IBLocalizable.
- [L10n-swift](https://github.com/Decybel07/L10n-swift) - Локализация приложения с возможностью смены языка «на лету» и поддержкой форм множественного числа в любом языке.
- [LocalizationKit](https://github.com/willpowell8/LocalizationKit_iOS) - Управление локализацией в реальном времени через веб-портал. Легко управляйте текстами и переводами без повторного развёртывания и повторной отправки приложения.
- [Localize](https://github.com/andresilvagomez/Localize) - Простой инструмент для локализации приложений с помощью JSON или Strings и, конечно же, IBDesignables с расширениями для UI-компонентов.
- [Localize-Swift](https://github.com/marmelroy/Localize-Swift) - Локализация и i18n, совместимые со Swift 2.0, с переключением языка внутри приложения.
- [locheck](https://github.com/Asana/locheck) - Проверяйте корректность файлов .strings, .stringsdict и strings.xml, чтобы избежать сбоев и плохих переводов.
- [Respresso Localization Converter](https://respresso.io/localization-converter) - Мультиплатформенный конвертер локализации для iOS (.strings + геттеры на Objective-C), Android (strings.xml) и веба (.json).
- [Rubustrings](https://github.com/dcordero/Rubustrings) - Проверка формата и согласованности файлов Localizable.strings.
- [StringSwitch](https://stringswitch.com) - Простое преобразование файлов .strings из iOS в формат strings.xml для Android и обратно.
