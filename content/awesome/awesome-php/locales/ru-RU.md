# Подборка Awesome PHP [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Тщательно отобранный список замечательных библиотек, ресурсов и полезных инструментов для PHP.

## Участие и сотрудничество
Подробнее см. [CONTRIBUTING](https://github.com/ziadoz/awesome-php/blob/master/CONTRIBUTING.md), [CODE-OF-CONDUCT](https://github.com/ziadoz/awesome-php/blob/master/CODE-OF-CONDUCT.md) и [COLLABORATING](https://github.com/ziadoz/awesome-php/blob/master/COLLABORATING.md).

## Содержание
- [Подборка Awesome PHP](#awesome-php)
  - [Репозитории Composer](#composer-repositories)
  - [Управление зависимостями](#dependency-management)
  - [Дополнения для управления зависимостями](#dependency-management-extras)
  - [Фреймворки](#frameworks)
  - [Дополнения для фреймворков](#framework-extras)
  - [Системы управления содержимым (CMS)](#content-management-systems-cms)
  - [Компоненты](#components)
  - [Микрофреймворки](#micro-frameworks)
  - [Дополнения для микрофреймворков](#micro-framework-extras)
  - [Маршрутизаторы](#routers)
  - [Шаблонизаторы](#templating)
  - [Генераторы статических сайтов](#static-site-generators)
  - [HTTP](#http)
  - [Парсинг сайтов](#scraping)
  - [Middleware](#middlewares)
  - [URL](#url)
  - [Электронная почта](#email)
  - [Файлы](#files)
  - [Потоки](#streams)
  - [Внедрение зависимостей](#dependency-injection)
  - [Изображения](#imagery)
  - [Тестирование](#testing)
  - [Непрерывная интеграция](#continuous-integration)
  - [Документация](#documentation)
  - [Безопасность](#security)
  - [Пароли](#passwords)
  - [Анализ кода](#code-analysis)
  - [Качество кода](#code-quality)
  - [Статический анализ](#static-analysis)
  - [Архитектура](#architectural)
  - [Отладка и профилирование](#debugging-and-profiling)
  - [Отслеживание ошибок и мониторинг](#error-tracking-and-monitoring-services)
  - [Инструменты сборки](#build-tools)
  - [Планировщики задач](#task-runners)
  - [Навигация](#navigation)
  - [Управление ресурсами](#asset-management)
  - [Геолокация](#geolocation)
  - [Дата и время](#date-and-time)
  - [События](#event)
  - [Журналирование](#logging)
  - [Электронная коммерция](#e-commerce)
  - [PDF](#pdf)
  - [Офисные документы](#office)
  - [Базы данных](#database)
  - [Миграции](#migrations)
  - [NoSQL](#nosql)
  - [Очереди](#queue)
  - [Поиск](#search)
  - [Командная строка](#command-line)
  - [Аутентификация и авторизация](#authentication-and-authorization)
  - [Разметка и CSS](#markup-and-css)
  - [JSON](#json)
  - [Строки](#strings)
  - [Числа](#numbers)
  - [Фильтрация, очистка и проверка данных](#filtering-sanitizing-and-validation)
  - [API](#api)
  - [Кэширование и блокировки](#caching-and-locking)
  - [Структуры данных и хранение](#data-structure-and-storage)
  - [Уведомления](#notifications)
  - [Развёртывание](#deployment)
  - [Интернационализация и локализация](#internationalisation-and-localisation)
  - [Бессерверные приложения](#serverless)
  - [Конфигурация](#configuration)
  - [Большие языковые модели](#llms)
  - [Сторонние API](#third-party-apis)
  - [Расширения](#extensions)
  - [Разное](#miscellaneous)
- [Программное обеспечение](#software)
  - [Установка PHP](#php-installation)
  - [Среда разработки](#development-environment)
  - [Виртуальные машины](#virtual-machines)
  - [Текстовые редакторы и IDE](#text-editors-and-ides)
  - [Веб-приложения](#web-applications)
  - [Инфраструктура](#infrastructure)
- [Ресурсы](#resources)
  - [Сайты о PHP](#php-websites)
  - [Книги о PHP](#php-books)
  - [Видео о PHP](#php-videos)
  - [Конференции по PHP](#php-conferences)
  - [Подкасты о PHP](#php-podcasts)
  - [Рассылки о PHP](#php-newsletters)
  - [Материалы для чтения о PHP](#php-reading)
  - [Материалы о внутреннем устройстве PHP](#php-internals-reading)

### Репозитории Composer
*Репозитории пакетов Composer.*

* [Firegento](https://packages.firegento.com/) - Репозиторий Composer-модулей Magento.
* [Packagist](https://packagist.org/) - Репозиторий пакетов PHP.
* [Packalyst](https://packalyst.com/) - Репозиторий пакетов Laravel.
* [Private Packagist](https://packagist.com/) - Архив пакетов Composer как сервис для PHP.
* [WordPress Packagist](https://wpackagist.org/) - Управление плагинами с помощью Composer.

### Управление зависимостями
*Библиотеки для управления зависимостями и пакетами.*

* [Composer](https://getcomposer.org/) - Менеджер пакетов и зависимостей.
* [Composer Installers](https://github.com/composer/installers) - Мультифреймворковый установщик библиотек Composer.
* [Phive](https://phar.io/) - Менеджер PHAR-пакетов.
* [Pickle](https://github.com/FriendsOfPHP/pickle) - Установщик расширений PHP.
* [Pie](https://github.com/php/pie) - Официальный установщик расширений PHP.

### Дополнения для управления зависимостями
*Дополнительные инструменты для управления зависимостями.*

* [Composer Merge Plugin](https://github.com/wikimedia/composer-merge-plugin) - Плагин Composer для объединения нескольких файлов `composer.json`.
* [Composer Normalize](https://github.com/ergebnis/composer-normalize) - Плагин для нормализации файлов `composer.json`.
* [Composer Patches](https://github.com/cweagans/composer-patches) - Плагин Composer для применения патчей.
* [Composer Prefer Lowest Validator](https://github.com/dereuromark/composer-prefer-lowest) - Плагин для проверки, можно ли установить и протестировать минимальные версии зависимостей.
* [Composer Require Checker](https://github.com/maglnet/ComposerRequireChecker) - Утилита командной строки для анализа зависимостей Composer и проверки, что в исходном коде пакета не используются неизвестные символы.
* [Composer Unused](https://github.com/composer-unused/composer-unused) - Утилита командной строки для поиска неиспользуемых пакетов Composer.
* [Repman](https://repman.io) - Менеджер частных репозиториев пакетов PHP и прокси-сервер Packagist.
* [Satis](https://github.com/composer/satis) - Генератор статических репозиториев Composer.

### Фреймворки
*Фреймворки для веб-разработки.*

* [CakePHP](https://cakephp.org/) - Фреймворк для быстрой разработки приложений.
* [CodeIgniter](https://codeigniter.com/) - Мощный PHP-фреймворк с очень небольшим размером.
* [Ecotone](https://docs.ecotone.tech/) - Шина сервисов для PHP, основанная на архитектурных принципах DDD, CQRS и Event Sourcing.
* [Laminas](https://getlaminas.org/) - Фреймворк из отдельных компонентов (ранее Zend Framework).
* [Laravel](https://laravel.com/) - Фреймворк для веб-приложений с выразительным и элегантным синтаксисом.
* [Nette](https://nette.org) - Веб-фреймворк из зрелых компонентов.
* [Phalcon](https://phalcon.io/en-us) - Фреймворк, реализованный в виде расширения C.
* [Spiral](https://spiral.dev/) - Высокопроизводительный фреймворк для PHP и Go.
* [Symfony](https://symfony.com/) - Набор повторно используемых компонентов и веб-фреймворк.
* [Tempest](https://github.com/tempestphp/tempest-framework) - Фреймворк, который не мешает вам работать.
* [Yii2](https://github.com/yiisoft/yii2/) - Быстрый, безопасный и эффективный веб-фреймворк.

### Дополнения для фреймворков
*Дополнительные инструменты для веб-фреймворков.*

* [CakePHP CRUD](https://github.com/friendsofcake/crud) - Плагин быстрой разработки приложений (RAD) для CakePHP.
* [Filament PHP](https://filamentphp.com/) - Мощный UI-фреймворк с открытым исходным кодом для Laravel.
* [Inertia.js](https://inertiajs.com/) - Адаптер для создания одностраничных приложений с маршрутизацией и контроллерами на стороне сервера, без отдельного API.
* [LaravelS](https://github.com/hhxsv5/laravel-s) - Готовый к использованию адаптер между Laravel/Lumen и Swoole.
* [Livewire](https://livewire.laravel.com/) - Мощный и динамичный пользовательский интерфейс без выхода из PHP.

### Системы управления содержимым (CMS)
*Инструменты для управления цифровым содержимым.*

* [Backdrop](https://backdropcms.org) - CMS для малого и среднего бизнеса и некоммерческих организаций (форк Drupal).
* [Concrete5](https://www.concretecms.com/) - CMS для пользователей с минимальными техническими навыками.
* [CraftCMS](https://github.com/craftcms/cms) - Гибкая и удобная CMS для создания индивидуальных цифровых проектов в интернете и за его пределами.
* [Drupal](https://new.drupal.org/home) - CMS корпоративного уровня.
* [Grav](https://github.com/getgrav/grav) - Современная файловая CMS.
* [Joomla](https://www.joomla.org/) - Ещё одна ведущая CMS.
* [Kirby](https://getkirby.com/) - Файловая CMS, адаптирующаяся к любому проекту.
* [Magento](https://github.com/magento/magento2) - Популярная платформа электронной коммерции с открытым исходным кодом.
* [Moodle](https://moodle.org/) - Учебная платформа с открытым исходным кодом.
* [OctoberCMS](https://octobercms.com/) - CMS на основе Laravel.
* [OpenMage](https://github.com/OpenMage/magento-lts) - Форк снятой с поддержки платформы электронной коммерции Magento 1.
* [Pico CMS](https://picocms.org/) - Лёгкая файловая CMS.
* [Silverstripe](https://www.silverstripe.org/) - Простая, гибкая и безопасная CMS.
* [Statamic](https://statamic.com/) - Файловая CMS на основе Git, созданная на Laravel.
* [Sulu](https://sulu.io/) - Удобная для пользователей и разработчиков CMS на базе Symfony Framework.
* [TYPO3](https://typo3.org) - CMS корпоративного уровня.
* [WinterCMS](https://wintercms.com) - Поддерживаемый сообществом форк OctoberCMS на базе Laravel.
* [WordPress](https://github.com/WordPress/WordPress) - Платформа для ведения блогов и CMS.

### Компоненты
*Автономные компоненты веб-фреймворков и сообществ разработчиков.*

* [Aura](https://auraphp.com/) - Независимые компоненты, полностью отделённые друг от друга и от любых фреймворков.
* [CakePHP Plugins](https://plugins.cakephp.org/) - Каталог плагинов CakePHP.
* [Laminas Components](https://docs.laminas.dev/components/) - Компоненты, из которых состоит Laminas Framework.
* [Laravel Components](https://github.com/illuminate) - Компоненты Laravel Framework.
* [League of Extraordinary Packages](https://thephpleague.com/) - Сообщество разработчиков PHP-пакетов.
* [Spatie Open Source](https://spatie.be/open-source) - Коллекция PHP- и Laravel-пакетов с открытым исходным кодом.
* [Symfony Packages](https://symfony.com/packages) - Независимые библиотеки для PHP-приложений.

### Микрофреймворки
*Микрофреймворки и маршрутизаторы.*

* [Laravel Zero](https://laravel-zero.com) - Микрофреймворк для консольных приложений.
* [Mezzio](https://getexpressive.org/) - Микрофреймворк от Laminas.
* [Minicli](https://github.com/minicli/minicli) - Минималистичный фреймворк без зависимостей для создания PHP-приложений, ориентированных на CLI.
* [Silly](https://github.com/mnapoli/silly) - Микрофреймворк для CLI-приложений.
* [Slim](https://www.slimframework.com/) - Ещё один простой микрофреймворк.

### Дополнения для микрофреймворков
*Дополнительные инструменты для микрофреймворков и маршрутизаторов.*

* [Slim Skeleton](https://github.com/slimphp/Slim-Skeleton) - Каркас приложения для Slim.
* [Slim PHP View](https://github.com/slimphp/PHP-View) - Простой обработчик PHP-шаблонов для Slim.

### Маршрутизаторы
*Библиотеки для обработки маршрутизации приложения.*

* [Aura.Router](https://github.com/auraphp/Aura.Router) - Полнофункциональная библиотека маршрутизации.
* [Fast Route](https://github.com/nikic/FastRoute) - Быстрая библиотека маршрутизации.
* [Klein](https://github.com/klein/klein.php) - Гибкий маршрутизатор.
* [Route](https://github.com/thephpleague/route) - Библиотека маршрутизации на основе Fast Route.

### Шаблонизаторы
*Библиотеки и инструменты для шаблонизации и лексического анализа.*

* [Latte](https://latte.nette.org/) - Самые безопасные и по-настоящему интуитивные шаблоны для PHP.
* [MtHaml](https://github.com/arnaud-lb/MtHaml) - Реализация языка шаблонов HAML на PHP.
* [Mustache](https://github.com/bobthecow/mustache.php) - Реализация языка шаблонов Mustache на PHP.
* [PHPTAL](https://phptal.org/) - Реализация языка шаблонов [TAL](https://en.wikipedia.org/wiki/Template_Attribute_Language) на PHP.
* [Plates](https://platesphp.com/) - Библиотека шаблонов на чистом PHP.
* [Smarty](https://www.smarty.net/) - Шаблонизатор в дополнение к PHP.
* [Twig](https://twig.symfony.com/) - Многофункциональный язык шаблонов.

### Генераторы статических сайтов
*Инструменты для предварительной обработки содержимого и создания веб-страниц.*

* [Cecil](https://cecil.app/) - Простой и мощный генератор статических сайтов на основе содержимого.
* [Couscous](https://couscous.io) - Инструмент для преобразования документации в Markdown в сайты.
* [Jigsaw](https://jigsaw.tighten.com/) - Простые статические сайты с Laravel Blade.
* [Sculpin](https://sculpin.io) - Инструмент для преобразования Markdown и Twig в статический HTML.

### HTTP
*Библиотеки для работы с HTTP.*

* [Buzz](https://github.com/kriswallsmith/Buzz) - Ещё один HTTP-клиент.
* [Guzzle](https://github.com/guzzle/guzzle) - Полнофункциональный HTTP-клиент.
* [HTTPlug](https://httplug.io) - Абстракция HTTP-клиента, не привязанная к конкретной реализации.
* [Nyholm PSR-7](https://github.com/Nyholm/psr7) - Очень лёгкая реализация PSR-7: строгая и быстрая.
* [PHP VCR](https://php-vcr.github.io/) - Библиотека для записи и воспроизведения HTTP-запросов.
* [Requests](https://github.com/WordPress/Requests) - Простая HTTP-библиотека.
* [Retrofit](https://github.com/tebru/retrofit-php) - Библиотека, упрощающая создание клиентов REST API.
* [Saloon](https://github.com/saloonphp/saloon) - Фреймворк для создания удобных интеграций с API и SDK.
* [Symfony HTTP Client](https://github.com/symfony/http-client) - Компонент для синхронного или асинхронного получения ресурсов по HTTP.
* [Laminas Diactoros](https://github.com/laminas/laminas-diactoros) - Реализация HTTP-сообщений PSR-7.

### Парсинг сайтов
*Библиотеки для сбора данных с сайтов и обнаружения поисковых роботов.*

* [Chrome PHP](https://github.com/chrome-php/chrome) - Управление экземплярами Chrome/Chromium без графического интерфейса из PHP.
* [CrawlerDetect](https://github.com/JayBizzle/Crawler-Detect) - Класс PHP для обнаружения ботов, роботов и краулеров по строке user agent.
* [DiDOM](https://github.com/Imangazaliev/DiDOM) - Очень быстрый парсер и обработчик HTML.
* [Embed](https://github.com/php-embed/Embed) - Извлечение информации из любых веб-сервисов и страниц.
* [PHP Spider](https://github.com/mvdbos/php-spider) - Настраиваемый и расширяемый веб-краулер для PHP.
* [Symfony Panther](https://github.com/symfony/panther) - Библиотека для тестирования браузеров и обхода сайтов на PHP и Symfony.

### Middleware
*Библиотеки для создания приложений на основе middleware.*

* [PSR-15 Middlewares](https://github.com/middlewares/psr15-middlewares) - Подборка полезных middleware, которая послужит источником вдохновения.
* [Stack](https://github.com/stackphp) - Библиотека составных middleware для Symfony.
* [Laminas Stratigility](https://github.com/laminas/laminas-stratigility) - Middleware для PHP на основе PSR-7.

### URL
*Библиотеки для разбора URL.*

* [PHP Domain Parser](https://github.com/jeremykendall/php-domain-parser) - Библиотека для разбора доменных суффиксов.
* [sabre/uri](https://github.com/sabre-io/uri) - Функциональная библиотека для работы с URI.
* [Uri](https://github.com/thephpleague/uri) - Ещё одна библиотека для работы с URL.

### Электронная почта
*Библиотеки для отправки и разбора электронной почты.*

* [CssToInlineStyles](https://github.com/tijsverkoyen/CssToInlineStyles) - Библиотека для встраивания CSS в шаблоны электронной почты.
* [ddeboer/imap](https://github.com/ddeboer/imap) - Объектно-ориентированная, полностью протестированная библиотека IMAP для PHP.
* [Email Reply Parser](https://github.com/willdurand/EmailReplyParser) - Библиотека для разбора ответов на электронные письма.
* [Fetch](https://github.com/tedious/Fetch) - Библиотека IMAP.
* [Mautic](https://github.com/mautic/mautic) - Автоматизация email-маркетинга.
* [PHPMailer](https://github.com/PHPMailer/PHPMailer) - Ещё один инструмент для отправки почты.
* [Stampie](https://github.com/Stampie/Stampie) - Библиотека для работы с почтовыми сервисами, такими как [SendGrid](https://www.twilio.com/en-us/sendgrid), [PostMark](https://postmarkapp.com), [MailGun](https://www.mailgun.com/) и [MailChimp](https://mailchimp.com/features/transactional-email/).
* [Symfony Mailer](https://github.com/symfony/mailer) - Мощная библиотека для создания и отправки электронных писем.

### Файлы
*Библиотеки для работы с файлами и определения MIME-типов.*

* [CSV](https://github.com/thephpleague/csv) - Библиотека для обработки данных CSV.
* [Flysystem](https://github.com/thephpleague/Flysystem) - Абстракция для локальных и удалённых файловых систем.
* [Gaufrette](https://github.com/KnpLabs/Gaufrette) - Слой абстракции файловой системы.
* [PHP FFmpeg](https://github.com/PHP-FFmpeg/PHP-FFmpeg/) - Обёртка для видеобиблиотеки [FFmpeg](https://www.ffmpeg.org/).
* [UnifiedArchive](https://github.com/wapmorgan/UnifiedArchive) - Универсальный инструмент для чтения и записи сжатых архивов.
* [Parquet](https://github.com/flow-php/parquet) - Реализация формата файлов Parquet на PHP.

### Потоки
*Библиотеки для работы с потоками.*

* [ByteStream](https://amphp.org/byte-stream) - Абстракция асинхронных потоков.

### Внедрение зависимостей
*Библиотеки, реализующие шаблон проектирования «внедрение зависимостей».*

* [Aura.Di](https://github.com/auraphp/Aura.Di) - Сериализуемый контейнер внедрения зависимостей с внедрением через конструктор и сеттеры, поддержкой интерфейсов и трейтов, наследованием конфигурации и многими другими возможностями.
* [Acclimate](https://github.com/AcclimateContainer/acclimate-container) - Общий интерфейс для контейнеров внедрения зависимостей и локаторов сервисов.
* [Auryn](https://github.com/rdlowrey/Auryn) - Рекурсивный механизм внедрения зависимостей.
* [Container](https://github.com/thephpleague/container) - Ещё один гибкий контейнер внедрения зависимостей.
* [Disco](https://github.com/bitExpert/disco) - Совместимый с PSR-11 контейнер внедрения зависимостей на основе аннотаций.
* [PHP-DI](https://php-di.org/) - Контейнер внедрения зависимостей с поддержкой автоматического связывания.
* [Pimple](https://github.com/silexphp/Pimple) - Миниатюрный контейнер внедрения зависимостей.
* [Symfony DI](https://github.com/symfony/dependency-injection) - Компонент-контейнер внедрения зависимостей.

### Изображения
*Библиотеки для обработки изображений.*

* [Color Extractor](https://github.com/thephpleague/color-extractor) - Библиотека для извлечения цветов из изображений.
* [Glide](https://github.com/thephpleague/glide) - Библиотека для обработки изображений по запросу.
* [Image Hash](https://github.com/jenssegers/imagehash) - Библиотека для создания перцептивных хешей изображений.
* [Image Optimizer](https://github.com/psliwa/image-optimizer) - Библиотека для оптимизации изображений.
* [Imagine](https://imagine.readthedocs.io/en/latest/index.html) - Библиотека для обработки изображений.
* [Intervention Image](https://github.com/Intervention/image) - Ещё одна библиотека для обработки изображений.
* [PHP Image Workshop](https://github.com/Sybio/ImageWorkshop) - Ещё одна библиотека для обработки изображений.
* [PHP QR Code](https://github.com/chillerlan/php-qrcode/) - Генератор и сканер QR-кодов.

### Тестирование
*Библиотеки для тестирования кодовых баз и генерации тестовых данных.*

* [Alice](https://github.com/nelmio/alice) - Выразительная библиотека для генерации фикстур.
* [Behat](https://docs.behat.org/en/latest/) - Фреймворк тестирования в стиле разработки через поведение (BDD).
* [Codeception](https://github.com/Codeception/Codeception) - Полнофункциональный фреймворк тестирования.
* [Faker](https://github.com/fakerphp/faker) - Библиотека для генерации фиктивных данных.
* [Foundry](https://github.com/zenstruck/foundry) - Библиотека фабрик для генерации фикстур Doctrine.
* [Infection](https://github.com/infection/infection) - Фреймворк мутационного тестирования на основе AST для PHP.
* [Kahlan](https://github.com/kahlan/kahlan) - Полнофункциональный фреймворк модульного тестирования и BDD со встроенной поддержкой заглушек, моков и покрытия кода.
* [Mink](https://mink.behat.org/en/latest/) - Приёмочное тестирование веб-приложений.
* [Mockery](https://github.com/mockery/mockery) - Библиотека объектов-моков для тестирования.
* [Nette Tester](https://github.com/nette/tester) - Удобный и продуктивный фреймворк параллельного модульного тестирования.
* [ParaTest](https://github.com/paratestphp/paratest) - Библиотека для параллельного запуска тестов PHPUnit.
* [Pest](https://pestphp.com/) - Фреймворк тестирования, ориентированный на простоту.
* [Phake](https://github.com/phake/phake) - Ещё одна библиотека объектов-моков для тестирования.
* [PHP-Mock](https://github.com/php-mock/php-mock) - Библиотека моков для встроенных функций PHP (например, time()).
* [PHP MySQL Engine](https://github.com/vimeo/php-mysql-engine) - Ядро MySQL, написанное на чистом PHP.
* [PHPSpec](https://github.com/phpspec/phpspec) - Библиотека модульного тестирования на основе проектирования по спецификации.
* [PHPT](https://php.github.io/php-src/miscellaneous/writing-tests.html) - Инструмент тестирования, используемый самим PHP.
* [PHPUnit](https://github.com/sebastianbergmann/phpunit) - Фреймворк модульного тестирования.
* [PHPUnit Polyfills](https://github.com/Yoast/PHPUnit-Polyfills/) - Упрощает запуск тестов PHPUnit в нескольких версиях PHPUnit.
* [Prophecy](https://github.com/phpspec/prophecy) - Фреймворк мокирования с чётко выраженным подходом.
* [VFS Stream](https://github.com/bovigo/vfsStream) - Обёртка потока виртуальной файловой системы для тестирования.

### Непрерывная интеграция
*Библиотеки и приложения для непрерывной интеграции.*

* [CircleCI](https://circleci.com) - Платформа непрерывной интеграции.
* [GitLab CI](https://about.gitlab.com/solutions/continuous-integration/) - Платформа непрерывной интеграции.
* [Jenkins](https://www.jenkins.io/) - Платформа непрерывной интеграции с [поддержкой PHP](https://www.jenkins.io/solutions/php/).
* [SemaphoreCI](https://semaphore.io/) - Платформа непрерывной интеграции для проектов с открытым исходным кодом и закрытых проектов.
* [Travis CI](https://www.travis-ci.com) - Платформа непрерывной интеграции.
* [Setup PHP](https://github.com/shivammathur/setup-php) - Действие GitHub для PHP.

### Документация
*Библиотеки для создания документации проектов.*

* [APIGen](https://github.com/apigen/apigen) - Ещё один генератор документации API.
* [daux.io](https://github.com/dauxio/daux.io) - Генератор документации на основе файлов Markdown.
* [phpDocumentor](https://phpdoc.org/) - Генератор документации.
* [Scramble](https://github.com/dedoc/scramble) - Автоматически создаёт документацию OpenAPI по коду без аннотаций.
* [zircote/swagger-php](https://github.com/zircote/swagger-php) - Создание документации OpenAPI для RESTful API.

### Безопасность
*Библиотеки для генерации криптографически стойких случайных чисел, шифрования данных, поиска уязвимостей и тестирования безопасности.*

* [AntiXSS](https://github.com/voku/anti-xss) - Библиотека, предназначенная для предотвращения атак межсайтового скриптинга (XSS) с помощью чёрного списка.
* [Halite](https://paragonie.com/project/halite) - Простая библиотека для шифрования с помощью [libsodium](https://github.com/jedisct1/libsodium).
* [Optimus](https://github.com/jenssegers/optimus) - Обфускация идентификаторов на основе метода мультипликативного хеширования Кнута.
* [OWASP](https://owasp.org/) - Познакомьтесь с миром кибербезопасности.
* [PHPGGC](https://github.com/ambionics/phpggc) - Библиотека десериализуемых PHP-полезных нагрузок и инструмент для их создания.
* [PHP Encryption](https://github.com/defuse/php-encryption) - Безопасная библиотека шифрования для PHP.
* [PHPSecLib](https://github.com/phpseclib/phpseclib) - Библиотека защищённых коммуникаций, написанная на чистом PHP.
* [Roave Security Advisories](https://github.com/Roave/SecurityAdvisories) - Пакет проверяет, что в приложении не установлены зависимости с известными уязвимостями безопасности.
* [Secure Headers](https://github.com/BePsvPT/secure-headers) - Пакет для добавления в HTTP-ответ заголовков, связанных с безопасностью.
* [SQLMap](https://github.com/sqlmapproject/sqlmap) - Инструмент для автоматического поиска SQL-инъекций и получения контроля над базами данных.
* [Zap](https://github.com/zaproxy/zaproxy) - Интегрированный инструмент тестирования на проникновение веб-приложений.

### Пароли
*Библиотеки и инструменты для работы с паролями и их хранения.*

* [GenPhrase](https://github.com/timoh6/GenPhrase) - Библиотека для генерации безопасных случайных парольных фраз.
* [Password Validator](https://github.com/jeremykendall/password-validator) - Библиотека для проверки и обновления хешей паролей.
* [Password-Generator](https://github.com/hackzilla/password-generator) - Библиотека PHP для генерации случайных паролей.
* [phpass](https://www.openwall.com/phpass/) - Переносимый фреймворк хеширования паролей.
* [Zxcvbn PHP](https://github.com/bjeavons/zxcvbn-php) - Реалистичная библиотека оценки надёжности паролей для PHP на основе Zxcvbn JS.

### Анализ кода
*Библиотеки и инструменты для анализа, разбора и преобразования кодовых баз.*

* [Better Reflection](https://github.com/Roave/BetterReflection) - Библиотека рефлексии на основе AST, позволяющая анализировать и преобразовывать код.
* [Bladestan](https://github.com/bladestan/bladestan) - Расширение PHPStan для статического анализа шаблонов Blade.
* [Code Climate](https://codeclimate.com) - Автоматизированная проверка кода.
* [Editorconfig-Checker](https://github.com/editorconfig-checker/editorconfig-checker.php) - Утилита командной строки, проверяющая соответствие файлов правилам `.editorconfig`.
* [GrumPHP](https://github.com/phpro/grumphp) - Инструмент для контроля качества кода PHP.
* [PHP AST Viewer](https://php-ast-viewer.com/) - Инструмент для просмотра абстрактного синтаксического дерева PHP-кода.
* [PHP Magic Number Detector](https://github.com/povils/phpmnd) - Библиотека для обнаружения в коде магических чисел.
* [PHP Parser](https://github.com/nikic/PHP-Parser) - Парсер PHP, написанный на PHP.
* [PHP Semantic Versioning Checker](https://github.com/tomzx/php-semver-checker) - Утилита командной строки для сравнения двух наборов исходного кода и определения подходящего уровня семантического версионирования.
* [Phpactor](https://github.com/phpactor/phpactor) - Инструмент автодополнения, рефакторинга и интроспекции PHP-кода.
* [PHPQA](https://github.com/EdgedesignCZ/phpqa) - Инструмент для запуска средств контроля качества (phploc, phpcpd, phpcs, pdepend, phpmd, phpmetrics).
* [Rector](https://github.com/rectorphp/rector) - Инструмент для обновления и рефакторинга кода.
* [Scrutinizer](https://scrutinizer-ci.com/) - Веб-инструмент для [анализа кода PHP](https://github.com/scrutinizer-ci/php-analyzer).
* [UBench](https://github.com/devster/ubench) - Простая библиотека для микробенчмаркинга.

### Качество кода
*Библиотеки для контроля качества кода, форматирования и проверки стиля.*

* [CaptainHook](https://github.com/captainhook-git/captainhook) - Простая в использовании и гибкая библиотека Git-хуков.
* [Laravel Pint](https://github.com/laravel/pint) - Библиотека для исправления стиля кода в Laravel.
* [PHP CodeSniffer](https://github.com/PHPCSStandards/PHP_CodeSniffer) - Библиотека для обнаружения и автоматического исправления нарушений стандартов кодирования PHP, CSS и JS.
* [PHP CS Fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) - Библиотека для исправления стиля кода.
* [PHP CS Fixer Configurator](https://mlocati.github.io/php-cs-fixer-configurator/) - Веб-приложение для настройки наборов правил PHP CS Fixer.
* [PHP Mess Detector](https://github.com/phpmd/phpmd) - Библиотека для поиска в коде ошибок, неоптимального кода, неиспользуемых параметров и многого другого.
* [PHPCheckstyle](https://github.com/PHPCheckstyle/phpcheckstyle) - Инструмент, помогающий соблюдать соглашения о стиле кода.

### Статический анализ
*Библиотеки для статического анализа кода PHP.*

* [Dead Code Detector](https://github.com/shipmonk-rnd/dead-code-detector) - Расширение PHPStan для поиска неиспользуемого кода PHP.
* [Deptrac](https://github.com/deptrac/deptrac) - Инструмент статического анализа для контроля правил зависимостей между архитектурными слоями.
* [Exakat](https://github.com/exakat/exakat) - Движок статического анализа для PHP.
* [Larastan](https://github.com/larastan/larastan) - Обёртка PHPStan для Laravel, добавляющая статический анализ в проекты Laravel.
* [Mago](https://github.com/carthage-software/mago) - Набор инструментов для PHP, призванный улучшить работу разработчиков.
* [phan](https://github.com/phan/phan) - Статический анализатор на основе PHP 7+ и расширения php-ast.
* [PHP Architecture Tester](https://github.com/carlosas/phpat) - Простой в использовании инструмент тестирования архитектуры для PHP.
* [PHPCompatibility](https://github.com/PHPCompatibility/PHPCompatibility) - Средство проверки совместимости PHP для PHP CodeSniffer.
* [PHPDoc Parser](https://github.com/phpstan/phpdoc-parser) - Парсер phpDoc нового поколения с поддержкой пересекающихся типов и обобщённых типов.
* [PHP Metrics](https://github.com/phpmetrics/PhpMetrics) - Библиотека статических метрик.
* [PHPStan](https://github.com/phpstan/phpstan) - Инструмент статического анализа PHP.
* [Psalm](https://github.com/vimeo/psalm) - Инструмент статического анализа для поиска ошибок в PHP-приложениях.

### Архитектура
*Библиотеки, посвящённые шаблонам проектирования, подходам к программированию и организации кода.*

* [Design Patterns PHP](https://github.com/DesignPatternsPHP/DesignPatternsPHP) - Репозиторий шаблонов проектирования, реализованных на PHP.
* [Finite](https://github.com/yohang/Finite) - Простой конечный автомат для PHP.
* [Functional PHP](https://github.com/lstrojny/functional-php) - Библиотека функционального программирования.
* [Iter](https://github.com/nikic/iter) - Библиотека примитивов итерации на основе генераторов.
* [IterTools PHP](https://github.com/markrogoyski/itertools-php) - Библиотека для работы с итерируемыми сущностями (аналог библиотеки itertools в Python).
* [Pipeline](https://github.com/thephpleague/pipeline) - Реализация шаблона «конвейер».
* [Porter](https://github.com/ScriptFUSION/Porter) - Абстракция импорта данных из веб-API и других источников.
* [RulerZ](https://github.com/K-Phoen/rulerz) - Мощный движок правил и реализация шаблона Specification.

### Отладка и профилирование
*Библиотеки и инструменты для отладки ошибок и профилирования кода.*

* [APM](https://pecl.php.net/package/APM) - Расширение мониторинга, собирающее ошибки и статистику в SQLite/MySQL/StatsD.
* [Barbushin PHP Console](https://github.com/barbushin/php-console) - Ещё одна веб-консоль отладки с помощью Google Chrome.
* [Kint](https://github.com/kint-php/kint) - Инструмент отладки и профилирования.
* [LaraDumps](https://github.com/laradumps/laradumps) - Инструмент отладки Laravel с отдельным настольным приложением.
* [Metrics](https://github.com/beberlei/metrics) - Простая библиотека API метрик.
* [PCOV](https://github.com/krakjoe/pcov) - Самостоятельный драйвер, совместимый с инструментами измерения покрытия кода.
* [PHP Console](https://github.com/Seldaek/php-console) - Веб-консоль отладки.
* [PHP Debug Bar](https://php-debugbar.com/) - Панель отладки.
* [PHPBench](https://github.com/phpbench/phpbench) - Фреймворк для бенчмаркинга.
* [PHPSpy](https://github.com/adsr/phpspy) - Профилировщик с низкими накладными расходами на основе выборки.
* [Symfony VarDumper](https://github.com/symfony/var-dumper) - Компонент для дампа переменных.
* [Tracy](https://github.com/nette/tracy) - Простая библиотека для обнаружения ошибок, журналирования и измерения времени.
* [Trap](https://github.com/buggregator/trap) - Расширенный дампер переменных с веб-интерфейсом и плагином для IDE.
* [Whoops](https://github.com/filp/whoops) - Удобная библиотека обработки ошибок.
* [xDebug](https://github.com/xdebug/xdebug) - Инструмент отладки и профилирования PHP.
* [XHProf](https://github.com/phacility/xhprof) - Инструмент профилирования, первоначально разработанный Facebook.
* [Z-Ray](https://www.zend.com/products/z-ray) - Инструмент отладки и профилирования для Zend Server.

### Отслеживание ошибок и сервисы мониторинга
*Локальные или облачные инструменты мониторинга производительности приложений и отслеживания ошибок.*

* [Blackfire](https://www.blackfire.io) - Профилировщик кода с низкими накладными расходами.
* [Buggregator](https://buggregator.dev) - Сервер отладки, собирающий дампы переменных, данные профилирования, электронные письма, журналы и события Sentry.
* [BugSnag](https://www.bugsnag.com/) - Отслеживание ошибок и мониторинг реальных пользователей.
* [Honeybadger](https://www.honeybadger.io/) - Отслеживание ошибок и мониторинг приложений для разработчиков.
* [Rollbar](https://rollbar.com/) - Сервис журналирования и отслеживания ошибок для команд разработчиков.
* [Sentry](https://sentry.io/welcome/) - Программное обеспечение для мониторинга производительности приложений и отслеживания ошибок.
* [Tideways](https://tideways.com/) - Инструмент мониторинга и профилирования.

### Инструменты сборки
*Инструменты сборки проектов и автоматизации.*

* [Box](https://github.com/box-project/box) - Утилита для сборки PHAR-файлов.
* [PHPacker](https://github.com/phpacker/phpacker) - Сборщик PHAR, компилирующий PHP-приложения в автономные исполняемые файлы.
* [Phing](https://www.phing.info/) - Система сборки проектов PHP, вдохновлённая Apache Ant.
* [RMT](https://github.com/liip/RMT) - Библиотека для версионирования и выпуска программного обеспечения.

### Планировщики задач
*Библиотеки для автоматизации и запуска задач.*

* [Jobby](https://github.com/jobbyphp/jobby) - Менеджер заданий cron на PHP, не требующий изменения crontab.
* [Robo](https://github.com/consolidation/Robo) - Планировщик задач PHP с объектно-ориентированной конфигурацией.

### Навигация
*Инструменты для построения структур навигации.*

* [KnpMenu](https://github.com/KnpLabs/KnpMenu) - Библиотека меню.
* [Menu](https://github.com/spatie/menu) - Гибкая библиотека меню с плавным интерфейсом.

### Управление ресурсами
*Инструменты для управления, сжатия и минификации ресурсов сайтов.*

* [JShrink](https://github.com/tedious/JShrink) - Библиотека минификации JavaScript.
* [Laravel Mix](https://github.com/laravel-mix/laravel-mix) - Элегантная обёртка для Webpack, покрывающая 80% типичных задач.
* [Symfony Asset](https://github.com/symfony/asset) - Управление генерацией URL и версионированием веб-ресурсов.
* [Symfony Encore](https://github.com/symfony/webpack-encore) - Простой, но мощный API для обработки и компиляции ресурсов на основе Webpack.

### Геолокация
*Библиотеки для геокодирования адресов и работы с широтой и долготой.*

* [Country List](https://github.com/umpirsky/country-list) - Список всех стран с названиями и кодами ISO 3166-1.
* [GeoCoder](https://geocoder-php.org/) - Библиотека геокодирования.
* [GeoJSON](https://github.com/jmikola/geojson) - Реализация GeoJSON.
* [GeoTools](https://github.com/thephpleague/geotools) - Библиотека инструментов для геоданных.
* [PHPGeo](https://github.com/mjaschen/phpgeo) - Простая библиотека для геоданных.

### Дата и время
*Библиотеки для работы с датами и временем.*

* [Business Time](https://github.com/kylekatarnls/business-time) - Расширение Carbon для работы с рабочими часами и днями.
* [CalendR](https://github.com/yohang/CalendR) - Библиотека управления календарём.
* [Carbon](https://github.com/briannesbitt/Carbon) - Простое расширение API DateTime.
* [Chronos](https://github.com/cakephp/chronos) - Расширение API DateTime с поддержкой изменяемых и неизменяемых дат и времени.
* [Moment.php](https://github.com/fightbulc/moment.php) - Обработчик DateTime для PHP, вдохновлённый Moment.js и поддерживающий i18n.
* [PHP RRule](https://github.com/rlanvin/php-rrule) - Библиотека для работы с повторяющимися датами и временем на основе спецификации iCalendar RRule.
* [Yasumi](https://github.com/azuyalabs/yasumi) - Библиотека для расчёта дат и названий праздников.

### События
*Библиотеки, основанные на событиях или реализующие неблокирующие циклы событий.*

* [Amp](https://github.com/amphp/amp) - Библиотека неблокирующего ввода-вывода, управляемая событиями.
* [Broadway](https://github.com/broadway/broadway) - Библиотека источников событий и CQRS.
* [CakePHP Event](https://github.com/cakephp/event) - Библиотека диспетчеризации событий.
* [Elephant.io](https://github.com/ElephantIO/elephant.io) - Ещё одна библиотека веб-сокетов.
* [Evenement](https://github.com/igorw/evenement) - Библиотека диспетчеризации событий.
* [Event](https://github.com/thephpleague/event) - Библиотека событий, ориентированная на доменные события.
* [Fast CGI Client](https://github.com/hollodotme/fast-cgi-client) - Клиент для синхронных и асинхронных запросов через сокет php-fpm.
* [FrankenPHP](https://frankenphp.dev/) - Современный сервер приложений PHP, написанный на Go.
* [Pawl](https://github.com/ratchetphp/Pawl) - Асинхронный клиент веб-сокетов.
* [Prooph Event Store](https://github.com/prooph/event-store) - Компонент хранилища источников событий для сохранения сообщений событий.
* [PHP Defer](https://github.com/php-defer/php-defer) - Оператор defer из Go для PHP.
* [Ratchet](https://github.com/ratchetphp/Ratchet) - Библиотека веб-сокетов.
* [ReactPHP](https://github.com/reactphp/reactphp) - Библиотека неблокирующего ввода-вывода, управляемая событиями.
* [RxPHP](https://github.com/ReactiveX/RxPHP) - Библиотека реактивных расширений.
* [Swoole](https://github.com/swoole/swoole-src) - Высокопроизводительный фреймворк асинхронного и параллельного сетевого взаимодействия для PHP, написанный на C и управляемый событиями.
* [Workerman](https://github.com/walkor/Workerman) - Библиотека неблокирующего ввода-вывода, управляемая событиями.

### Журналирование
*Библиотеки для создания журналов и работы с ними.*

* [Monolog](https://github.com/Seldaek/monolog) - Полнофункциональный регистратор.

### Электронная коммерция
*Библиотеки и приложения для приёма платежей и создания интернет-магазинов.*

* [Money](https://github.com/moneyphp/money) - Реализация денежного шаблона Фаулера на PHP.
* [Brick Money](https://github.com/brick/money) - Библиотека денежных величин для PHP с поддержкой контекстов, округления наличных сумм и конвертации валют.
* [OmniPay](https://github.com/thephpleague/omnipay) - Не зависящая от фреймворков библиотека обработки платежей через множество шлюзов.
* [Payum](https://github.com/payum/payum) - Библиотека абстракции платёжных систем.
* [Shopsys Framework](https://github.com/shopsys/shopsys/) - Платформа электронной коммерции с открытым исходным кодом для внутренних команд разработки.
* [Shopware](https://github.com/shopware/shopware) - Гибко настраиваемое программное обеспечение для электронной коммерции.
* [Swap](https://github.com/florianv/swap) - Библиотека обменных курсов.
* [Sylius](https://sylius.com/) - Решение для электронной коммерции с открытым исходным кодом.

### PDF
*Библиотеки и программы для работы с PDF-файлами.*

* [Browsershot](https://github.com/spatie/browsershot) - Преобразование HTML в изображение, PDF или строку.
* [Dompdf](https://github.com/dompdf/dompdf) - Конвертер HTML в PDF.
* [Gotenberg](https://github.com/gotenberg/gotenberg-php) - PHP-клиент для работы с Gotenberg.
* [Snappy](https://github.com/KnpLabs/snappy) - Библиотека для создания PDF-файлов и изображений.
* [TCPDF](https://tcpdf.org/) - Класс PHP с открытым исходным кодом для создания PDF-документов.

### Офисные документы
*Библиотеки для работы с документами офисных пакетов.*

* [PHPPowerPoint](https://github.com/PHPOffice/PHPPresentation) - Библиотека для работы с презентациями Microsoft PowerPoint.
* [PHPWord](https://github.com/PHPOffice/PHPWord) - Библиотека для работы с документами Microsoft Word.
* [PHPSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet) - Библиотека на чистом PHP для чтения и записи таблиц (преемник PHPExcel).
* [OpenSpout](https://github.com/openspout/openspout) - Поддерживаемый сообществом форк `box/spout` — библиотеки PHP для быстрого и масштабируемого чтения и записи таблиц (CSV, XLSX и ODS).

### Базы данных
*Библиотеки для работы с базами данных с помощью объектно-реляционного отображения (ORM) или методов сопоставления данных.*

* [Atlas.Orm](https://github.com/atlasphp/Atlas.Orm) - Реализация шаблона сопоставления данных для модели хранения данных на PHP.
* [Aura.Sql](https://github.com/auraphp/Aura.Sql) - Расширение встроенного PDO с профилировщиком и средством поиска подключений.
* [Aura.SqlQuery](https://github.com/auraphp/Aura.SqlQuery) - Независимые построители запросов для MySQL, PostgreSQL, SQLite и Microsoft SQL Server.
* [Baum](https://github.com/etrepat/baum) - Реализация вложенных множеств для Eloquent.
* [CakePHP ORM](https://github.com/cakephp/orm) - Объектно-реляционный преобразователь, реализующий шаблон DataMapper.
* [Cycle ORM](https://github.com/cycle/orm) - PHP DataMapper и ORM.
* [Doctrine Extensions](https://github.com/doctrine-extensions/DoctrineExtensions) - Коллекция поведенческих расширений Doctrine.
* [Doctrine](https://www.doctrine-project.org/) - Полнофункциональные DBAL и ORM.
* [Laravel Eloquent](https://github.com/illuminate/database) - Простая ORM.
* [ProxyManager](https://github.com/Ocramius/ProxyManager) - Набор утилит для создания прокси-объектов преобразователей данных.
* [RedBean](https://redbeanphp.com/index.php) - Лёгкая ORM, не требующая настройки.
* [Slimdump](https://github.com/webfactory/slimdump) - Простой инструмент для создания дампов MySQL.
* [Spot2](https://github.com/spotorm/spot2) - ORM с преобразователем данных для MySQL.

### Миграции
*Библиотеки для управления схемами баз данных и миграциями.*

* [Doctrine Migrations](https://www.doctrine-project.org/projects/migrations.html) - Библиотека миграций для Doctrine.
* [Phinx](https://github.com/cakephp/phinx) - Ещё одна библиотека миграций баз данных.
* [PHPMig](https://github.com/davedevelopment/phpmig) - Ещё одна библиотека управления миграциями.
* [Ruckusing](https://github.com/ruckus/ruckusing-migrations) - Миграции баз данных для PHP в стиле ActiveRecord Migrations с поддержкой MySQL, Postgres и SQLite.

### NoSQL
*Библиотеки для работы с хранилищами NoSQL.*

* [MongoDB](https://github.com/mongodb/mongo-php-driver) - Драйвер MongoDB для PHP.
* [MongoDB PHP Library](https://github.com/mongodb/mongo-php-library) - Официальная высокоуровневая библиотека MongoDB для PHP, построенная поверх драйвера MongoDB для PHP.
* [Predis](https://github.com/predis/predis) - Полнофункциональная библиотека Redis.

### Очереди
*Библиотеки для работы с очередями событий и задач.*

* [BunnyPHP](https://github.com/jakubkulhan/bunny) - Высокопроизводительная библиотека AMQP (RabbitMQ) на чистом PHP с синхронным и асинхронным режимами (ReactPHP).
* [Pheanstalk](https://github.com/pheanstalk/pheanstalk) - Клиентская библиотека Beanstalkd.
* [PHP AMQP](https://github.com/php-amqplib/php-amqplib) - Библиотека AMQP на чистом PHP.
* [Tarantool Queue](https://github.com/tarantool-php/queue) - Привязки PHP для Tarantool Queue.
* [Thumper](https://github.com/php-amqplib/Thumper) - Библиотека шаблонов для RabbitMQ.
* [Enqueue](https://github.com/php-enqueue/enqueue-dev) - Пакет очередей сообщений для PHP с поддержкой RabbitMQ, AMQP, STOMP, Amazon SQS, Redis и транспорта Doctrine.

### Поиск
*Библиотеки и программы для индексации данных и выполнения поисковых запросов.*

* [Elastica](https://github.com/ruflin/Elastica) - Клиентская библиотека для ElasticSearch.
* [ElasticSearch PHP](https://github.com/elastic/elasticsearch-php) - Официальная клиентская библиотека для [ElasticSearch](https://www.elastic.co/).
* [Solarium](https://www.solarium-project.org/) - Клиентская библиотека для [Solr](https://solr.apache.org/).
* [SphinxQL Query Builder](https://foolcode.github.io/SphinxQL-Query-Builder/) - Библиотека запросов для поисковых систем [Sphinx](https://sphinxsearch.com/) и [Manticore](https://manticoresearch.com/).

### Командная строка
*Библиотеки, связанные с командной строкой.*

* [Aura.Cli](https://github.com/auraphp/Aura.Cli) - Предоставляет эквиваленты объектов запроса (Context) и ответа (Stdio) для интерфейса командной строки, включая поддержку Getopt, а также независимый объект Help для описания команд.
* [CLI Menu](https://github.com/php-school/cli-menu) - Библиотека для создания меню CLI.
* [CLIFramework](https://github.com/c9s/CLIFramework) - Фреймворк командной строки с поддержкой генерации автодополнения для zsh/bash, подкоманд и ограничений параметров. Также лежит в основе phpbrew.
* [CLImate](https://github.com/thephpleague/climate) - Библиотека для вывода цветов и специального форматирования.
* [Commando](https://github.com/nategood/commando) - Ещё один простой парсер параметров командной строки.
* [Cron Expression](https://github.com/mtdowling/cron-expression) - Библиотека для расчёта времени запуска задач cron.
* [GetOpt](https://github.com/getopt-php/getopt-php) - Парсер параметров командной строки.
* [GetOptionKit](https://github.com/c9s/GetOptionKit) - Ещё один парсер параметров командной строки.
* [PsySH](https://github.com/bobthecow/psysh) - Ещё один REPL для PHP.
* [ShellWrap](https://github.com/MrRio/shellwrap) - Простая библиотека-обёртка для командной строки.

### Аутентификация и авторизация
*Библиотеки для реализации аутентификации и авторизации пользователей.*

* [Aura.Auth](https://github.com/auraphp/Aura.Auth) - Предоставляет средства аутентификации и отслеживания сессий с помощью различных адаптеров.
* [SocialConnect Auth](https://github.com/socialConnect/auth) - Библиотека для входа через социальные сети с открытым исходным кодом (OAuth1/OAuth2/OpenID/OpenIDConnect).
* [Json Web Token](https://github.com/lcobucci/jwt) - Токены JSON для аутентификации и передачи информации.
* [OAuth 1.0 Client](https://github.com/thephpleague/oauth1-client) - Клиентская библиотека OAuth 1.0.
* [OAuth 2.0 Client](https://github.com/thephpleague/oauth2-client) - Клиентская библиотека OAuth 2.0.
* [OAuth2 Server](https://bshaffer.github.io/oauth2-server-php-docs/) - Ещё одна реализация сервера OAuth2.
* [OAuth2 Server](https://oauth2.thephpleague.com/) - Сервер аутентификации OAuth2, сервер ресурсов и клиентская библиотека.
* [Paseto](https://github.com/paragonie/paseto) - Токены безопасности, не зависящие от платформы.
* [PHP oAuthLib](https://github.com/daviddesberg/PHPoAuthLib) - Ещё одна библиотека OAuth.
* [TwitterOAuth](https://github.com/abraham/twitteroauth) - Библиотека Twitter OAuth.

### Разметка и CSS
*Библиотеки для работы с форматами разметки и CSS.*

* [Carve](https://github.com/markup-carve/carve-php) - Парсер PHP для [Carve](https://markup-carve.github.io/carve/) — лёгкого языка разметки, основанного на Markdown и Djot.
* [Cebe Markdown](https://github.com/cebe/markdown) - Быстрый и расширяемый парсер Markdown.
* [CommonMark PHP](https://github.com/thephpleague/commonmark) - Расширяемый парсер Markdown с полной поддержкой [спецификации CommonMark](https://spec.commonmark.org/).
* [Decoda](https://github.com/milesj/decoda) - Лёгкая библиотека-парсер разметки.
* [Djot](https://github.com/php-collective/djot-php) - Парсер PHP для [Djot](https://djot.net/) — современного облегчённого языка разметки, преемника Markdown.
* [Essence](https://github.com/essence/essence) - Библиотека для извлечения мультимедийного содержимого из интернета.
* [Embera](https://github.com/mpratt/Embera) - Библиотека для получения данных OEmbed.
* [HTML to Markdown](https://github.com/thephpleague/html-to-markdown) - Преобразует HTML в Markdown.
* [HTML5 PHP](https://github.com/Masterminds/html5-php) - Библиотека-парсер и сериализатор HTML5.
* [Parsedown](https://github.com/erusev/parsedown) - Ещё один парсер Markdown.
* [PHP CSS Parser](https://github.com/MyIntervals/PHP-CSS-Parser) - Парсер файлов CSS, написанный на PHP.
* [PHP Markdown](https://github.com/michelf/php-markdown) - Парсер Markdown.
* [Shiki PHP](https://github.com/spatie/shiki-php) - Пакет PHP для подсветки кода [Shiki](https://github.com/shikijs/shiki).
* [VObject](https://github.com/sabre-io/vobject) - Библиотека для разбора объектов VCard и iCalendar.

### JSON
*Библиотеки для работы с JSON.*

* [JSON Lint](https://github.com/Seldaek/jsonlint) - Утилита проверки синтаксиса JSON.
* [JSONMapper](https://github.com/JsonMapper/JsonMapper) - Библиотека для преобразования JSON в объекты PHP.
* [Lazy JSON](https://github.com/cerbero90/lazy-json) - Экономичный по памяти ленивый парсер больших файлов JSON.

### Строки
*Библиотеки для разбора и обработки строк.*

* [Agent](https://github.com/jenssegers/agent) - Парсер user agent для настольных и мобильных устройств на PHP, основанный на Mobiledetect.
* [ANSI to HTML5](https://github.com/sensiolabs/ansi-to-html) - Библиотека для преобразования ANSI в HTML5.
* [Color Jizz](https://github.com/mikeemoo/ColorJizz-PHP) - Библиотека для обработки и преобразования цветов.
* [Device Detector](https://github.com/matomo-org/device-detector) - Ещё одна библиотека для разбора строк user agent.
* [Hyphenation](https://github.com/heiglandreas/Org_Heigl_Hyphenator) - Перенос слов на основе алгоритма расстановки переносов TeX.
* [Jieba-PHP](https://github.com/fukuball/jieba-php) - Порт jieba из Python на PHP. Сегментация китайского текста для обработки естественного языка.
* [Mobile-Detect](https://github.com/serbanghita/Mobile-Detect) - Лёгкий класс PHP для обнаружения мобильных устройств, включая планшеты.
* [Patchwork UTF-8](https://github.com/nicolas-grekas/Patchwork-UTF8) - Переносимая библиотека для работы со строками UTF-8.
* [Portable ASCII](https://github.com/voku/portable-ascii) - Библиотека для преобразования строк в ASCII.
* [Portable UTF-8](https://github.com/voku/portable-utf8) - Библиотека обработки строк с безопасными для UTF-8 методами замены.
* [Slugify](https://github.com/cocur/slugify) - Библиотека для преобразования строк в человекочитаемые URL-slug.
* [SQL Formatter](https://github.com/jdorn/sql-formatter/) - Библиотека для форматирования SQL-запросов.
* [Stringy](https://github.com/voku/Stringy) - Библиотека обработки строк с поддержкой многобайтовых символов.
* [Url highlight](https://github.com/vstelmakh/url-highlight) - Библиотека для извлечения URL из текста и преобразования их в кликабельные ссылки.
* [URLify](https://github.com/jbroadway/urlify) - Порт Django URLify.js на PHP.
* [UUID](https://github.com/ramsey/uuid) - Библиотека для генерации UUID.

### Числа
*Библиотеки для работы с числами.*

* [Brick Math](https://github.com/brick/math) - Библиотека для работы с большими числами: `BigInteger`, `BigDecimal` и `BigRational`.
* [ByteUnits](https://github.com/gabrielelana/byte-units) - Библиотека для разбора, форматирования и преобразования единиц измерения байтов в двоичной и метрической системах.
* [DecimalObject](https://github.com/php-collective/decimal-object) - Объект-значение для удобной и точной работы с десятичными дробями и числами с плавающей точкой.
* [IP](https://github.com/darsyn/ip) - Неизменяемый объект-значение для работы с адресами IPv4 и IPv6.
* [PHP Conversion](https://github.com/cniska/php-conversion) - Ещё одна библиотека для преобразования единиц измерения.
* [PHP Units of Measure](https://github.com/triplepoint/php-units-of-measure) - Библиотека для преобразования единиц измерения.
* [MathPHP](https://github.com/markrogoyski/math-php) - Математическая библиотека для PHP.

### Фильтрация, очистка и проверка данных
*Библиотеки для фильтрации, очистки и проверки данных.*

* [Assert](https://github.com/beberlei/assert) - Библиотека проверки данных с широким набором утверждений, поддержкой их объединения в цепочки и отложенной проверки.
* [Aura.Filter](https://github.com/auraphp/Aura.Filter) - Предоставляет инструменты для проверки и очистки объектов и массивов.
* [CakePHP Validation](https://github.com/cakephp/validation) - Ещё одна библиотека проверки данных.
* [Filterus](https://github.com/ircmaxell/filterus) - Простая библиотека фильтрации для PHP.
* [HTML Purifier](https://github.com/ezyang/htmlpurifier) - HTML-фильтр, соответствующий стандартам.
* [ISO-codes](https://github.com/ronanguilloux/IsoCodes) - Библиотека проверки вводимых данных на соответствие стандартам ISO, финансовым стандартам, стандартам государственных учреждений, GS1 и книжной отрасли, а также телефонным номерам и почтовым индексам многих стран.
* [JSON Schema](https://github.com/jsonrainbow/json-schema) - Библиотека проверки данных по [схеме JSON](https://json-schema.org/).
* [LibPhoneNumber for PHP](https://github.com/giggsey/libphonenumber-for-php) - Реализация библиотеки Google для обработки телефонных номеров на PHP.
* [MetaYaml](https://github.com/romaricdrigon/MetaYaml) - Библиотека проверки схем, поддерживающая YAML, JSON и XML.
* [Respect Validation](https://github.com/Respect/Validation) - Простая библиотека проверки данных.
* [Symfony HTML Sanitizer](https://github.com/symfony/html-sanitizer) - Библиотека для очистки HTML.
* [Valitron](https://github.com/vlucas/valitron) - Ещё одна библиотека проверки данных.
* [Valinor](https://github.com/CuyZ/Valinor) - Библиотека для преобразования данных в строго типизированные объекты-значения.
* [Volan](https://github.com/serkin/Volan) - Ещё одна упрощённая библиотека проверки данных.

### API
*Библиотеки и веб-инструменты для разработки API.*

* [API Platform](https://api-platform.com) - За считаные минуты создаёт гипермедийный REST API с поддержкой JSON-LD и формата Hydra.
* [Laminas API Tool Skeleton](https://github.com/laminas-api-tools/api-tools-skeleton) - Конструктор API на основе Laminas Framework.
* [HAL](https://github.com/blongden/hal) - Библиотека для создания языка гипертекстовых приложений (HAL).
* [Hateoas](https://github.com/willdurand/Hateoas) - Библиотека веб-служб REST с поддержкой HATEOAS.
* [Jane](https://github.com/janephp/janephp/) - Генератор клиента OpenAPI с поддержкой проверки данных.
* [Negotiation](https://github.com/willdurand/Negotiation) - Библиотека согласования содержимого.
* [Restler](https://github.com/Luracast/Restler) - Лёгкий фреймворк для предоставления методов PHP в виде RESTful веб-API.
* [PackageGenerator](https://github.com/WsdlToPhp/PackageGenerator) - Генератор пакетов создаёт PHP SDK из любого WSDL.

### Кэширование и блокировки
*Библиотеки для кэширования данных и получения блокировок.*

* [APIx Cache](https://github.com/apix/cache) - Тонкая оболочка кэша PSR-6 для различных бэкендов с упором на теги и индексацию кэша.
* [CacheTool](https://github.com/gordalina/cachetool) - Инструмент командной строки для очистки кэшей APC/opcode.
* [CakePHP Cache](https://github.com/cakephp/cache) - Библиотека кэширования.
* [Doctrine Cache](https://github.com/doctrine/cache) - Библиотека кэширования.
* [Metaphore](https://github.com/sobstel/metaphore) - Защита от лавинообразного сброса кэша с помощью семафора, предотвращающего эффект толпы.
* [Stash](https://github.com/tedious/Stash) - Ещё одна библиотека кэширования.
* [Laminas Cache](https://github.com/laminas/laminas-cache) - Ещё одна библиотека кэширования.
* [Lock](https://github.com/php-lock/lock) - Библиотека блокировок для обеспечения эксклюзивного выполнения.

### Структуры данных и хранение
*Библиотеки, реализующие структуры данных и методы хранения.*

* [CakePHP Collection](https://github.com/cakephp/collection) - Простая библиотека коллекций.
* [Fractal](https://github.com/thephpleague/fractal) - Библиотека для преобразования сложных структур данных в JSON.
* [JsonMapper](https://github.com/cweiske/jsonmapper) - Библиотека для сопоставления вложенных структур JSON с классами PHP.
* [JSON Machine](https://github.com/halaxa/json-machine) - Позволяет перебирать огромные JSON-документы с помощью простого `foreach`.
* [msgpack.php](https://github.com/rybakit/msgpack.php) - Реализация формата сериализации [MessagePack](https://msgpack.org/) на чистом PHP.
* [Serializer](https://github.com/schmittjoh/serializer) - Библиотека для сериализации и десериализации данных.
* [YaLinqo](https://github.com/Athari/YaLinqo) - Ещё одна реализация LINQ to Objects для PHP.
* [Laminas Serializer](https://github.com/laminas/laminas-serializer) - Ещё одна библиотека для сериализации и десериализации данных.

### Уведомления
*Библиотеки для работы с программами уведомлений.*

* [JoliNotif](https://github.com/jolicode/JoliNotif) - Кроссплатформенная библиотека настольных уведомлений (поддерживает Growl, notify-send, toaster и другие).

### Развёртывание
*Библиотеки для развёртывания проектов.*

* [Deployer](https://github.com/deployphp/deployer) - Инструмент для развёртывания.
* [Envoy](https://github.com/laravel/envoy) - Инструмент для выполнения задач по SSH на PHP.

### Интернационализация и локализация
*Библиотеки для интернационализации (I18n) и локализации (L10n).*

* [Aura.Intl](https://github.com/auraphp/Aura.Intl) - Предоставляет инструменты интернационализации (I18N), в частности перевод сообщений с учётом локали и организации по пакетам.
* [CakePHP I18n](https://github.com/cakephp/i18n) - Перевод сообщений и локализация дат и чисел.

### Бессерверные приложения
*Библиотеки и инструменты для создания бессерверных веб-приложений.*

* [Bref](https://bref.sh/) - Бессерверный PHP на AWS Lambda.
* [OpenWhisk](https://openwhisk.apache.org/) - Облачная бессерверная платформа с открытым исходным кодом.
* [Serverless Framework](https://www.serverless.com/framework) - Фреймворк с открытым исходным кодом для создания бессерверных приложений.
* [Laravel Vapor](https://vapor.laravel.com/) - Платформа бессерверного развёртывания Laravel на базе AWS.

### Конфигурация
*Библиотеки и инструменты для работы с конфигурацией.*

* [PHP Dotenv](https://github.com/vlucas/phpdotenv) - Разбор и загрузка переменных окружения из файлов `.env`.
* [Symfony Dotenv](https://github.com/symfony/dotenv) - Разбор и загрузка переменных окружения из файлов `.env`.
* [Toml](https://github.com/php-collective/toml) - Парсер и кодировщик TOML с доступом к AST и восстановлением после ошибок.

### Большие языковые модели
*Библиотеки для работы с большими языковыми моделями.*

* [Anthropic](https://github.com/mozex/anthropic-php) - Клиент PHP для API Anthropic с поддержкой сообщений, потоковой передачи, вызова инструментов и пакетной обработки.
* [Anthropic for Laravel](https://github.com/mozex/anthropic-laravel) - Обёртка для клиента Anthropic PHP в Laravel с фасадами, публикацией конфигурации и тестовыми заглушками.
* [Instructor for PHP](https://github.com/cognesy/instructor-php) - Структурированный вывод данных с помощью LLM на PHP.
* [LLPhant](https://github.com/LLPhant/LLPhant) - Полнофункциональный фреймворк генеративного ИИ для PHP с использованием OpenAI GPT 4. Вдохновлён Langchain.
* [OpenAI Client](https://github.com/openai-php/client) - OpenAI PHP — мощный клиент API PHP с поддержкой сообщества для взаимодействия с API OpenAI.
* [OpenAI Client for Laravel](https://github.com/openai-php/laravel) - OpenAI PHP для Laravel — мощный клиент API PHP для взаимодействия с API OpenAI.
* [PHP Mistral AI SDK](https://github.com/SoftCreatR/php-mistral-ai-sdk) - Мощный и простой в использовании PHP SDK для API Mistral AI, обеспечивающий интеграцию продвинутых функций на основе ИИ в проекты PHP.

### Сторонние API
*Библиотеки для доступа к сторонним API.*

* [Amazon Web Service SDK](https://github.com/aws/aws-sdk-php) - Официальная библиотека AWS SDK для PHP.
* [AsyncAWS](https://async-aws.com/) - Неофициальный асинхронный AWS SDK для PHP.
* [Campaign Monitor](https://campaignmonitor.github.io/createsend-php/) - Официальная библиотека PHP для Campaign Monitor.
* [Github](https://github.com/KnpLabs/php-github-api) - Библиотека для работы с API Github.
* [Mailgun](https://github.com/mailgun/mailgun-php) - Официальный API Mailgun для PHP.
* [Stripe](https://github.com/stripe/stripe-php) - Официальная библиотека Stripe для PHP.
* [Twilio](https://github.com/twilio/twilio-php) - Официальный REST API Twilio для PHP.

### Расширения
*Библиотеки для разработки расширений PHP.*

* [PHP CPP](https://www.php-cpp.com/) - Библиотека C++ для разработки расширений PHP.
* [Zephir](https://github.com/zephir-lang/zephir) - Компилируемый язык между PHP и C++ для разработки расширений PHP.

### Разное
*Полезные библиотеки и утилиты, не относящиеся к перечисленным выше категориям.*

* [Annotations](https://github.com/doctrine/annotations) - Библиотека аннотаций (часть Doctrine).
* [BotMan](https://github.com/botman/botman) - Не зависящая от фреймворков библиотека PHP для создания кроссплатформенных чат-ботов.
* [ClassPreloader](https://github.com/ClassPreloader/ClassPreloader) - Библиотека для оптимизации автозагрузки.
* [Ganesha](https://github.com/ackintosh/ganesha) - Реализация шаблона Circuit Breaker на PHP.
* [Hprose-PHP](https://github.com/hprose/hprose-php) - Кросс-языковой RPC.
* [Laravel Serializable Closure](https://github.com/laravel/serializable-closure) - Библиотека, позволяющая сериализовать замыкания.
* [noCAPTCHA](https://github.com/ARCANEDEV/noCAPTCHA) - Вспомогательный инструмент для noCAPTCHA от Google (reCAPTCHA).
* [Pagerfanta](https://github.com/whiteoctober/Pagerfanta) - Библиотека для разбиения на страницы.
* [Safe](https://github.com/thecodingmachine/safe) - Переписанные функции PHP, выбрасывающие исключения вместо возврата false.

# Программное обеспечение
*Программы для создания среды разработки.*

### Установка PHP
*Инструменты для установки PHP на компьютер и управления им.*

* [Brew PHP Switcher](https://github.com/philcook/brew-php-switcher) - Переключатель версий PHP для Brew.
* [Homebrew](https://brew.sh/) - Менеджер пакетов для macOS.
* [PHP Brew](https://github.com/phpbrew/phpbrew) - Менеджер версий и установщик PHP.
* [PHP Build](https://github.com/php-build/php-build) - Ещё один установщик версий PHP.
* [Static PHP CLI](https://github.com/crazywhalecc/static-php-cli) - Сборка или [загрузка](https://dl.static-php.dev/static-php-cli/) статических версий PHP CLI и FPM.

### Среда разработки
*Программы и инструменты для создания среды разработки и совместного доступа к ней.*

* [Ansible](https://www.redhat.com/en/ansible-collaborative) - Предельно простой фреймворк оркестрации.
* [DDEV](https://github.com/ddev/ddev) - Система локальной среды веб-разработки для PHP.
* [Docker](https://www.docker.com/) - Платформа контейнеризации.
* [Docker PHP Extension Installer](https://github.com/mlocati/docker-php-extension-installer) - Простая установка расширений PHP в контейнеры Docker.
* [Docksal](https://github.com/docksal/docksal) - Единые среды веб-разработки для macOS, Windows и Linux на базе Docker :whale:.
* [Expose](https://github.com/exposedev/expose) - Сервис туннелирования PHP с открытым исходным кодом.
* [Lando](https://lando.dev/) - Среды разработки, запускаемые одним нажатием.
* [Laravel Homestead](https://laravel.com/docs/master/homestead) - Локальная среда разработки для Laravel.
* [Laravel Herd](https://herd.laravel.com/windows) - Среда разработки PHP для macOS и Windows, устанавливаемая одним нажатием.
* [Laradock](https://laradock.io/) - Полнофункциональная среда разработки PHP на базе Docker.
* [PHPMon](https://phpmon.app/) - Приложение в строке меню macOS для управления установками PHP (работает с [Laravel Valet](https://laravel.com/docs/master/valet)).
* [Puppet](https://www.puppet.com) - Фреймворк и приложение для автоматизации серверов.
* [Solo](https://github.com/soloterm/solo) - Терминальное приложение для управления процессами Laravel-приложения.
* [Takeout](https://github.com/tighten/takeout) - Менеджер зависимостей только для разработки на базе Docker.
* [Vagrant](https://developer.hashicorp.com/vagrant) - Утилита для переносимых сред разработки.

### Виртуальные машины
*Альтернативные виртуальные машины для PHP.*

* [Hack](https://hacklang.org/) - Язык программирования для HHVM.
* [HHVM](https://github.com/facebook/hhvm) - Виртуальная машина, среда выполнения и JIT-компилятор PHP от Facebook.
* [PeachPie](https://github.com/peachpiecompiler/peachpie) - Компилятор и среда выполнения PHP для .NET и .NET Core.

### Текстовые редакторы и IDE
*Текстовые редакторы и интегрированные среды разработки (IDE) с поддержкой PHP.*

* [Eclipse for PHP Developers](https://www.eclipse.org/downloads/) - IDE для PHP на платформе Eclipse.
* [Apache NetBeans](https://netbeans.apache.org/front/main/index.html) - IDE с поддержкой PHP и HTML5.
* [PhpEd](https://www.nusphere.com/products/phped.htm) - IDE с профессиональным коммерческим отладчиком.
* [PhpStorm](https://www.jetbrains.com/phpstorm/) - Коммерческая IDE для PHP.
* [VS Code](https://code.visualstudio.com/) - Редактор кода с открытым исходным кодом.

### Веб-приложения
*Веб-приложения и инструменты.*

* [3V4L](https://3v4l.org/) - Онлайн-оболочка PHP и HHVM.
* [Adminer](https://www.adminer.org/en/) - Управление базами данных в одном файле PHP.
* [Cachet](https://github.com/cachethq/cachet) - Система страниц состояния с открытым исходным кодом.
* [Lychee](https://github.com/electerious/Lychee) - Простая в использовании и привлекательная система управления фотографиями.
* [Leantime](https://leantime.io) - Система стратегического управления проектами для тех, кто не занимается управлением проектами профессионально.
* [MailCatcher](https://github.com/sj26/mailcatcher) - Веб-инструмент для перехвата и просмотра электронных писем.
* [Mailpit](https://github.com/axllent/mailpit) - Инструмент тестирования электронной почты и SMTP для разработчиков.
* [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - Веб-интерфейс для MySQL/MariaDB.
* [PHP Queue](https://github.com/CoderKungfu/php-queue) - Приложение для управления бэкендами очередей.
* [phpRedisAdmin](https://github.com/ErikDubbelboer/phpRedisAdmin) - Простой веб-интерфейс для управления базами данных [Redis](https://redis.io/).
* [PHPSandbox](https://phpsandbox.io) - Онлайн-среда разработки PHP в браузере.

### Инфраструктура
*Инфраструктура для предоставления PHP-приложений и сервисов.*

* [appserver.io](https://github.com/appserver-io/appserver) - Многопоточный сервер приложений для PHP, написанный на PHP.
* [php-pm](https://github.com/php-pm/php-pm) - Менеджер процессов, ускоритель и балансировщик нагрузки для PHP-приложений.
* [RoadRunner](https://github.com/roadrunner-server/roadrunner) - Высокопроизводительный сервер приложений PHP, балансировщик нагрузки и менеджер процессов.

# Ресурсы
Различные ресурсы — книги, сайты и статьи — для развития навыков и знаний в области PHP.

### Сайты о PHP
*Полезные сайты, посвящённые PHP.*

* [Nomad PHP](https://nomadphp.com/) - Онлайн-ресурс для изучения PHP.
* [Laravel News](https://laravel-news.com/) - Официальный блог Laravel.
* [PHP Annotated Monthly](https://blog.jetbrains.com/phpstorm/tag/php-annotated-monthly/) - Ежемесячный дайджест новостей PHP.
* [PHP FIG](https://www.php-fig.org/) - Группа взаимодействия PHP-фреймворков.
* [PHP Package Development Standards](https://php-pds.com/) - Стандарты разработки пакетов для PHP.
* [PHP School](https://www.phpschool.io/) - Обучение PHP с открытым исходным кодом.
* [PHP The Right Way](https://phptherightway.com/) - Краткое справочное руководство по лучшим практикам PHP.
* [PHP UG](https://php.ug) - Сайт, помогающий найти ближайшую группу пользователей PHP (UG).
* [PHP Watch](https://php.watch/) - Статьи и новости о PHP, будущие изменения, RFC и многое другое.
* [Unit Testing Tips](https://testing-tips.sarvendev.com/) - Советы по модульному тестированию PHP на примерах.

### Книги о PHP
*Замечательные книги о PHP.*

* [Domain-Driven Design in PHP](https://leanpub.com/ddd-in-php) - Практические примеры архитектурных стилей DDD на PHP.
* [Functional Programming in PHP](https://www.functionalphp.com/) - Книга о применении принципов и методов функционального программирования в PHP.
* [Mastering Object-Orientated PHP](https://masteringobjectorientedphp.com/) - Книга Брэндона Сэвиджа об объектно-ориентированном PHP.
* [PHP Cookbook](https://www.oreilly.com/library/view/php-cookbook/9781098121310/) - Сборник рецептов с примерами кода, помогающими решать различные задачи программирования.
* [Modernizing Legacy Applications in PHP](https://leanpub.com/mlaphp) - Книга Пола М. Джонса о модернизации устаревших PHP-приложений.
* [Scaling PHP Applications](https://www.scalingphpbook.com) - Электронная книга Стива Короны о масштабировании PHP-приложений.
* [Securing PHP: Core Concepts](https://leanpub.com/securingphp-coreconcepts) - Книга Криса Корнатта об основных понятиях и практиках безопасности PHP.
* [Signaling PHP](https://leanpub.com/signalingphp) - Книга Кэла Эванса об обработке сигналов PCNTL в скриптах CLI.
* [XML Parsing with PHP](https://www.phparch.com/books/xml-parsing-with-php/) - Книга посвящена разбору и проверке XML-документов, использованию выражений XPath и работе с пространствами имён, а также программному созданию и изменению XML-файлов.

### Видео о PHP
*Замечательные видео о PHP.*

* [Laracasts](https://laracasts.com) - Видеоуроки о Laravel, Vue JS и многом другом.
* [Laravel YouTube Channel](https://www.youtube.com/channel/UCfO2GiQwb-cwJTb1CuRSkwg) - Официальный канал Laravel на YouTube.
* [Program With Gio](https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-) - Курс по PHP 8 от Gio.
* [Programming with Anthony](https://www.youtube.com/playlist?list=PLM-218uGSX3DQ3KsB5NJnuOqPqc5CW2kW) - Серия видео от Anthony Ferrara.
* [SymfonyCasts](https://symfonycasts.com/) - Видеоуроки и руководства по PHP и Symfony.

### Конференции по PHP
*Конференции по PHP.*

* [Laracon EU](https://www.youtube.com/@LaraconEU) - Двухдневное мероприятие для тех, кто хочет изучить Laravel и связанные технологии или поделиться своими знаниями.
* [PHP[TEK]](https://phptek.io/) - Самая продолжительная в США конференция веб-разработчиков, посвящённая языку программирования PHP.
* [PHP UK Conference](https://www.youtube.com/user/phpukconference/videos) - Подборка видео с конференции PHP UK.

### Подкасты о PHP
*Подкасты, посвящённые PHP.*

* [Laravel News Podcast](https://podcast.laravel-news.com/) - Подкаст Laravel News знакомит слушателей с последними новостями и событиями мира PHP-фреймворка Laravel.
* [Mostly Technical](https://mostlytechnical.com/) - Ведущие Ian Landsman и Aaron Francis обсуждают Laravel, бизнес и самые разные смежные темы.
* [No Compromises](https://show.nocompromises.io/) - Два опытных и циничных программиста-ветерана обсуждают лучшие практики на основе многолетнего опыта работы с командами Laravel SaaS.
* [North Meets South Web Podcast](https://www.northmeetssouth.audio/) - Jacob Bennett и Michael Dyrynda преодолевают разницу во времени в 14,5 часа, чтобы поговорить о жизни веб-разработчиков.
* [Over Engineered](https://overengineered.fm/) - Подкаст в формате мини-серий, в котором подробно разбирают неважные вопросы программирования.
* [PHP Internals News](https://phpinternals.news) - Подкаст о внутреннем устройстве PHP.
* [PHP Town Hall](https://phptownhall.com/) - Неформальный подкаст о PHP от Ben Edmunds и Phil Sturgeon.
* [php[podcast] episodes from php[architect]](https://www.phparch.com/podcast/) - Официальный подкаст php[architect] — ведущего отраслевого технического журнала и издательства, посвящённых PHP и веб-разработке.
* [PHPUgly](https://www.phpugly.com/) - Беседы нескольких перегруженных работой разработчиков PHP.
* [The Laracasts Snippet](https://laracasts.simplecast.com) - В каждом выпуске The Laracasts Snippet рассматривается одна мысль о каком-либо аспекте веб-разработки.
* [The Laravel Podcast](https://laravelpodcast.com/) - Новости и обсуждения разработки на Laravel и PHP.
* [The PHP Roundtable](https://phproundtable.com/) - Неформальная встреча разработчиков, обсуждающих темы, интересные энтузиастам PHP.

### Рассылки о PHP
*Новости о PHP прямо в вашем почтовом ящике.*

* [PHP Weekly](https://www.phpweekly.com/) - Еженедельная рассылка о PHP.

### Материалы для чтения о PHP
*Материалы для чтения о PHP.*

* [php[architect]](https://www.phparch.com/magazine/) - Ежемесячный журнал, посвящённый PHP.

### Материалы о внутреннем устройстве PHP
*Материалы о внутреннем устройстве и производительности PHP.*

* [PHP RFCs](https://wiki.php.net/rfc) - Главный источник PHP RFC (запросов на комментарии).
* [Externals](https://externals.io/) - Обсуждения внутреннего устройства PHP.
* [PHP RFC Watch](https://github.com/beberlei/php-rfc-watch) - Следите за последними [RFC](https://wiki.php.net/rfc) для PHP.
* [PHP Internals Book](https://www.phpinternalsbook.com/) - Онлайн-книга о внутреннем устройстве PHP, написанная тремя основными разработчиками.
