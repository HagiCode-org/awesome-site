# Awesome PHP [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

精選 PHP 函式庫、資源與實用工具。

## 貢獻與協作
詳情請參閱 [CONTRIBUTING](https://github.com/ziadoz/awesome-php/blob/master/CONTRIBUTING.md)、[CODE-OF-CONDUCT](https://github.com/ziadoz/awesome-php/blob/master/CODE-OF-CONDUCT.md) 和 [COLLABORATING](https://github.com/ziadoz/awesome-php/blob/master/COLLABORATING.md)。

## 目錄
- [Awesome PHP](#awesome-php)
  - [Composer 套件庫](#composer-repositories)
  - [相依性管理](#dependency-management)
  - [相依性管理擴充工具](#dependency-management-extras)
  - [框架](#frameworks)
  - [框架擴充工具](#framework-extras)
  - [內容管理系統（CMS）](#content-management-systems-cms)
  - [元件](#components)
  - [微型框架](#micro-frameworks)
  - [微型框架擴充工具](#micro-framework-extras)
  - [路由器](#routers)
  - [樣板引擎](#templating)
  - [靜態網站產生器](#static-site-generators)
  - [HTTP](#http)
  - [網頁擷取](#scraping)
  - [中介軟體](#middlewares)
  - [URL](#url)
  - [電子郵件](#email)
  - [檔案](#files)
  - [串流](#streams)
  - [相依性注入](#dependency-injection)
  - [影像處理](#imagery)
  - [測試](#testing)
  - [持續整合](#continuous-integration)
  - [文件](#documentation)
  - [安全性](#security)
  - [密碼](#passwords)
  - [程式碼分析](#code-analysis)
  - [程式碼品質](#code-quality)
  - [靜態分析](#static-analysis)
  - [軟體架構](#architectural)
  - [偵錯與效能分析](#debugging-and-profiling)
  - [錯誤追蹤與監控服務](#error-tracking-and-monitoring-services)
  - [建置工具](#build-tools)
  - [工作執行器](#task-runners)
  - [導覽](#navigation)
  - [資產管理](#asset-management)
  - [地理位置](#geolocation)
  - [日期與時間](#date-and-time)
  - [事件](#event)
  - [記錄](#logging)
  - [電子商務](#e-commerce)
  - [PDF](#pdf)
  - [辦公軟體](#office)
  - [資料庫](#database)
  - [資料庫遷移](#migrations)
  - [NoSQL](#nosql)
  - [佇列](#queue)
  - [搜尋](#search)
  - [命令列](#command-line)
  - [驗證與授權](#authentication-and-authorization)
  - [標記語言與 CSS](#markup-and-css)
  - [JSON](#json)
  - [字串](#strings)
  - [數字](#numbers)
  - [篩選、清理與驗證](#filtering-sanitizing-and-validation)
  - [API](#api)
  - [快取與鎖定](#caching-and-locking)
  - [資料結構與儲存](#data-structure-and-storage)
  - [通知](#notifications)
  - [部署](#deployment)
  - [國際化與在地化](#internationalisation-and-localisation)
  - [無伺服器](#serverless)
  - [設定](#configuration)
  - [大型語言模型（LLM）](#llms)
  - [第三方 API](#third-party-apis)
  - [擴充功能](#extensions)
  - [其他](#miscellaneous)
- [軟體](#software)
  - [PHP 安裝](#php-installation)
  - [開發環境](#development-environment)
  - [虛擬機器](#virtual-machines)
  - [文字編輯器與 IDE](#text-editors-and-ides)
  - [網頁應用程式](#web-applications)
  - [基礎架構](#infrastructure)
- [資源](#resources)
  - [PHP 網站](#php-websites)
  - [PHP 書籍](#php-books)
  - [PHP 影片](#php-videos)
  - [PHP 研討會](#php-conferences)
  - [PHP Podcast](#php-podcasts)
  - [PHP 電子報](#php-newsletters)
  - [PHP 閱讀資料](#php-reading)
  - [PHP 內部機制閱讀資料](#php-internals-reading)

### Composer 套件庫
*Composer 套件庫。*

* [Firegento](https://packages.firegento.com/) - Magento 模組的 Composer 套件庫。
* [Packagist](https://packagist.org/) - PHP 套件的官方套件庫。
* [Packalyst](https://packalyst.com/) - Laravel 套件庫。
* [Private Packagist](https://packagist.com/) - PHP Composer 套件的代管服務。
* [WordPress Packagist](https://wpackagist.org/) - 透過 Composer 管理 WordPress 外掛。

### 相依性管理
*管理相依性與套件的工具。*

* [Composer](https://getcomposer.org/) - PHP 的套件與相依性管理工具。
* [Composer Installers](https://github.com/composer/installers) - 支援多種框架的 Composer 函式庫安裝工具。
* [Phive](https://phar.io/) - PHAR 套件管理工具。
* [Pickle](https://github.com/FriendsOfPHP/pickle) - PHP 擴充功能安裝工具。
* [Pie](https://github.com/php/pie) - PHP 官方擴充功能安裝工具。

### 相依性管理擴充工具
*相依性管理相關的擴充工具。*

* [Composer Merge Plugin](https://github.com/wikimedia/composer-merge-plugin) - 可合併多個 `composer.json` 檔案的 Composer 外掛。
* [Composer Normalize](https://github.com/ergebnis/composer-normalize) - 自動整理 `composer.json` 檔案格式的 Composer 外掛。
* [Composer Patches](https://github.com/cweagans/composer-patches) - 可透過 Composer 套用修補程式的外掛。
* [Composer Prefer Lowest Validator](https://github.com/dereuromark/composer-prefer-lowest) - 檢查是否能安裝並測試最低版本相依套件的外掛。
* [Composer Require Checker](https://github.com/maglnet/ComposerRequireChecker) - 命令列工具，可分析 Composer 相依套件，確認套件原始碼未使用未宣告的符號。
* [Composer Unused](https://github.com/composer-unused/composer-unused) - 掃描未使用 Composer 套件的命令列工具。
* [Repman](https://repman.io) - 私有 PHP 套件庫管理工具，也是 Packagist 代理伺服器。
* [Satis](https://github.com/composer/satis) - 靜態 Composer 套件庫產生器。

### 框架
*網頁開發框架。*

* [CakePHP](https://cakephp.org/) - 加速應用程式開發的框架。
* [CodeIgniter](https://codeigniter.com/) - 功能強大、資源占用極低的 PHP 框架。
* [Ecotone](https://docs.ecotone.tech/) - 以 DDD、CQRS 與事件溯源等架構原則為基礎的 PHP 服務匯流排。
* [Laminas](https://getlaminas.org/) - 由多個獨立元件組成的框架（前身為 Zend Framework）。
* [Laravel](https://laravel.com/) - 語法簡潔優雅、富有表現力的網頁應用程式框架。
* [Nette](https://nette.org) - 由成熟元件組成的網頁框架。
* [Phalcon](https://phalcon.io/en-us) - 以 C 擴充功能實作的框架。
* [Spiral](https://spiral.dev/) - 高效能 PHP/Go 框架。
* [Symfony](https://symfony.com/) - 可重複使用的元件集合與網頁框架。
* [Tempest](https://github.com/tempestphp/tempest-framework) - 不會妨礙你工作的框架。
* [Yii2](https://github.com/yiisoft/yii2/) - 快速、安全且高效的網頁框架。

### 框架擴充工具
*網頁開發框架相關的擴充工具。*

* [CakePHP CRUD](https://github.com/friendsofcake/crud) - CakePHP 的快速應用程式開發（RAD）外掛。
* [Filament PHP](https://filamentphp.com/) - 功能強大的 Laravel 開源 UI 框架。
* [Inertia.js](https://inertiajs.com/) - 透過伺服器端路由與控制器建置單頁應用程式的介接器，無須另建 API。
* [LaravelS](https://github.com/hhxsv5/laravel-s) - Laravel/Lumen 與 Swoole 之間即裝即用的介接器。
* [Livewire](https://livewire.laravel.com/) - 不必離開 PHP，也能打造功能強大的動態前端介面。

### 內容管理系統（CMS）
*管理數位內容的工具。*

* [Backdrop](https://backdropcms.org) - 面向中小型企業與非營利組織的 CMS，也是 Drupal 的分支版本。
* [Concrete5](https://www.concretecms.com/) - 專為技術門檻較低的使用者打造的 CMS。
* [CraftCMS](https://github.com/craftcms/cms) - 彈性易用的 CMS，可在網路及其他平台打造自訂數位體驗。
* [Drupal](https://new.drupal.org/home) - 企業級 CMS。
* [Grav](https://github.com/getgrav/grav) - 新世代的純檔案 CMS。
* [Joomla](https://www.joomla.org/) - 另一款主流 CMS。
* [Kirby](https://getkirby.com/) - 能配合各種專案需求的純檔案 CMS。
* [Magento](https://github.com/magento/magento2) - 廣受使用的開源電子商務平台。
* [Moodle](https://moodle.org/) - 開源學習平台。
* [OctoberCMS](https://octobercms.com/) - 以 Laravel 為基礎建置的 CMS。
* [OpenMage](https://github.com/OpenMage/magento-lts) - 已終止支援的 Magento 1 電子商務平台分支。
* [Pico CMS](https://picocms.org/) - 輕量級純檔案 CMS。
* [Silverstripe](https://www.silverstripe.org/) - 簡潔、彈性且安全的 CMS。
* [Statamic](https://statamic.com/) - 以 Laravel 為基礎，採純檔案與 Git 管理的 CMS。
* [Sulu](https://sulu.io/) - 以 Symfony Framework 為基礎，兼顧使用者與開發者需求的 CMS。
* [TYPO3](https://typo3.org) - 企業級 CMS。
* [WinterCMS](https://wintercms.com) - 社群維護的 OctoberCMS 分支，以 Laravel 為基礎建置。
* [WordPress](https://github.com/WordPress/WordPress) - 部落格平台與 CMS。

### 元件
*從網頁開發框架與開發團隊中獨立出來的元件。*

* [Aura](https://auraphp.com/) - 彼此完全解耦、也不依賴任何框架的獨立元件。
* [CakePHP Plugins](https://plugins.cakephp.org/) - CakePHP 外掛目錄。
* [Laminas Components](https://docs.laminas.dev/components/) - 組成 Laminas Framework 的各種元件。
* [Laravel Components](https://github.com/illuminate) - Laravel Framework 的元件。
* [League of Extraordinary Packages](https://thephpleague.com/) - PHP 套件開發團隊。
* [Spatie Open Source](https://spatie.be/open-source) - PHP 與 Laravel 開源套件集。
* [Symfony Packages](https://symfony.com/packages) - 適用於 PHP 應用程式的解耦函式庫。

### 微型框架
*微型框架與路由器。*

* [Laravel Zero](https://laravel-zero.com) - 用於主控台應用程式的微型框架。
* [Mezzio](https://getexpressive.org/) - Laminas 推出的微型框架。
* [Minicli](https://github.com/minicli/minicli) - 無相依套件的極簡框架，適合建置以 CLI 為核心的 PHP 應用程式。
* [Silly](https://github.com/mnapoli/silly) - 用於 CLI 應用程式的微型框架。
* [Slim](https://www.slimframework.com/) - 簡潔易用的微型框架。

### 微型框架擴充工具
*微型框架與路由器相關的擴充工具。*

* [Slim Skeleton](https://github.com/slimphp/Slim-Skeleton) - Slim 專案骨架。
* [Slim PHP View](https://github.com/slimphp/PHP-View) - Slim 專用的簡易 PHP 樣板引擎。

### 路由器
*處理應用程式路由的函式庫。*

* [Aura.Router](https://github.com/auraphp/Aura.Router) - 功能完整的路由函式庫。
* [Fast Route](https://github.com/nikic/FastRoute) - 高速路由函式庫。
* [Klein](https://github.com/klein/klein.php) - 彈性的路由器。
* [Route](https://github.com/thephpleague/route) - 建構於 Fast Route 之上的路由函式庫。

### 樣板引擎
*樣板與詞法分析相關的函式庫和工具。*

* [Latte](https://latte.nette.org/) - 安全可靠且直覺易用的 PHP 樣板引擎。
* [MtHaml](https://github.com/arnaud-lb/MtHaml) - HAML 樣板語言的 PHP 實作。
* [Mustache](https://github.com/bobthecow/mustache.php) - Mustache 樣板語言的 PHP 實作。
* [PHPTAL](https://phptal.org/) - [TAL](https://en.wikipedia.org/wiki/Template_Attribute_Language) 樣板語言的 PHP 實作。
* [Plates](https://platesphp.com/) - 原生 PHP 樣板函式庫。
* [Smarty](https://www.smarty.net/) - 與 PHP 搭配使用的樣板引擎。
* [Twig](https://twig.symfony.com/) - 功能完整的樣板語言。

### 靜態網站產生器
*預先處理內容並產生網頁的工具。*

* [Cecil](https://cecil.app/) - 簡單又強大的內容導向靜態網站產生器。
* [Couscous](https://couscous.io) - 將 Markdown 文件轉換成網站的工具。
* [Jigsaw](https://jigsaw.tighten.com/) - 使用 Laravel Blade 快速建置靜態網站。
* [Sculpin](https://sculpin.io) - 將 Markdown 與 Twig 轉換成靜態 HTML 的工具。

### HTTP
*處理 HTTP 的函式庫。*

* [Buzz](https://github.com/kriswallsmith/Buzz) - 另一款 HTTP 用戶端。
* [Guzzle](https://github.com/guzzle/guzzle) - 功能完整的 HTTP 用戶端。
* [HTTPlug](https://httplug.io) - 不綁定特定實作的 HTTP 用戶端抽象層。
* [Nyholm PSR-7](https://github.com/Nyholm/psr7) - 輕巧精簡、嚴謹且高速的 PSR-7 實作。
* [PHP VCR](https://php-vcr.github.io/) - 錄製並重播 HTTP 請求的函式庫。
* [Requests](https://github.com/WordPress/Requests) - 簡潔的 HTTP 函式庫。
* [Retrofit](https://github.com/tebru/retrofit-php) - 簡化 REST API 用戶端建立流程的函式庫。
* [Saloon](https://github.com/saloonphp/saloon) - 建置 API 整合與 SDK 的優雅框架。
* [Symfony HTTP Client](https://github.com/symfony/http-client) - 可同步或非同步擷取 HTTP 資源的元件。
* [Laminas Diactoros](https://github.com/laminas/laminas-diactoros) - PSR-7 HTTP 訊息實作。

### 網頁擷取
*擷取網站內容並辨識爬蟲的函式庫。*

* [Chrome PHP](https://github.com/chrome-php/chrome) - 透過 PHP 操控無頭模式的 Chrome/Chromium 執行個體。
* [CrawlerDetect](https://github.com/JayBizzle/Crawler-Detect) - 依據 user agent 判斷是否為機器人、爬蟲或搜尋引擎蜘蛛的 PHP 類別。
* [DiDOM](https://github.com/Imangazaliev/DiDOM) - 高速 HTML 擷取與剖析工具。
* [Embed](https://github.com/php-embed/Embed) - 從各種網路服務或網頁擷取資訊的工具。
* [PHP Spider](https://github.com/mvdbos/php-spider) - 可設定且易於擴充的 PHP 網頁爬蟲。
* [Symfony Panther](https://github.com/symfony/panther) - 適用於 PHP 與 Symfony 的瀏覽器測試和網頁爬取函式庫。

### 中介軟體
*使用中介軟體建置應用程式的函式庫。*

* [PSR-15 Middlewares](https://github.com/middlewares/psr15-middlewares) - 實用中介軟體的精選集。
* [Stack](https://github.com/stackphp) - 可串接使用的 Symfony 中介軟體函式庫。
* [Laminas Stratigility](https://github.com/laminas/laminas-stratigility) - 以 PSR-7 為基礎的 PHP 中介軟體。

### URL
*剖析 URL 的函式庫。*

* [PHP Domain Parser](https://github.com/jeremykendall/php-domain-parser) - 網域後綴剖析函式庫。
* [sabre/uri](https://github.com/sabre-io/uri) - 以函數式風格操作 URI 的函式庫。
* [Uri](https://github.com/thephpleague/uri) - 另一款 URL 操作函式庫。

### 電子郵件
*寄送與剖析電子郵件的函式庫。*

* [CssToInlineStyles](https://github.com/tijsverkoyen/CssToInlineStyles) - 將 CSS 轉為電子郵件樣板內嵌樣式的函式庫。
* [ddeboer/imap](https://github.com/ddeboer/imap) - 物件導向且經過完整測試的 PHP IMAP 函式庫。
* [Email Reply Parser](https://github.com/willdurand/EmailReplyParser) - 剖析電子郵件回覆內容的函式庫。
* [Fetch](https://github.com/tedious/Fetch) - IMAP 函式庫。
* [Mautic](https://github.com/mautic/mautic) - 電子郵件行銷自動化工具。
* [PHPMailer](https://github.com/PHPMailer/PHPMailer) - 另一款郵件寄送工具。
* [Stampie](https://github.com/Stampie/Stampie) - 整合電子郵件服務的函式庫，支援 [SendGrid](https://www.twilio.com/en-us/sendgrid)、[PostMark](https://postmarkapp.com)、[MailGun](https://www.mailgun.com/) 和 [MailChimp](https://mailchimp.com/features/transactional-email/)。
* [Symfony Mailer](https://github.com/symfony/mailer) - 建立並寄送電子郵件的強大函式庫。

### 檔案
*檔案操作與 MIME 類型偵測函式庫。*

* [CSV](https://github.com/thephpleague/csv) - CSV 資料操作函式庫。
* [Flysystem](https://github.com/thephpleague/Flysystem) - 本機與遠端檔案系統的抽象層。
* [Gaufrette](https://github.com/KnpLabs/Gaufrette) - 檔案系統抽象層。
* [PHP FFmpeg](https://github.com/PHP-FFmpeg/PHP-FFmpeg/) - [FFmpeg](https://www.ffmpeg.org/) 影片函式庫的包裝器。
* [UnifiedArchive](https://github.com/wapmorgan/UnifiedArchive) - 統一讀取與寫入壓縮封存檔的工具。
* [Parquet](https://github.com/flow-php/parquet) - Parquet 檔案格式的 PHP 實作。

### 串流
*處理串流的函式庫。*

* [ByteStream](https://amphp.org/byte-stream) - 非同步串流抽象層。

### 相依性注入
*實作相依性注入設計模式的函式庫。*

* [Aura.Di](https://github.com/auraphp/Aura.Di) - 可序列化的相依性注入容器，支援建構子與 setter 注入、介面和 trait 辨識、設定繼承等功能。
* [Acclimate](https://github.com/AcclimateContainer/acclimate-container) - 統一相依性注入容器與服務定位器的通用介面。
* [Auryn](https://github.com/rdlowrey/Auryn) - 遞迴式相依性注入器。
* [Container](https://github.com/thephpleague/container) - 彈性的相依性注入容器。
* [Disco](https://github.com/bitExpert/disco) - 相容 PSR-11、以註解為基礎的相依性注入容器。
* [PHP-DI](https://php-di.org/) - 支援自動連線的相依性注入容器。
* [Pimple](https://github.com/silexphp/Pimple) - 輕巧的相依性注入容器。
* [Symfony DI](https://github.com/symfony/dependency-injection) - Symfony 的相依性注入元件。

### 影像處理
*影像處理函式庫。*

* [Color Extractor](https://github.com/thephpleague/color-extractor) - 從影像擷取色彩的函式庫。
* [Glide](https://github.com/thephpleague/glide) - 隨需影像處理函式庫。
* [Image Hash](https://github.com/jenssegers/imagehash) - 產生感知影像雜湊值的函式庫。
* [Image Optimizer](https://github.com/psliwa/image-optimizer) - 影像最佳化函式庫。
* [Imagine](https://imagine.readthedocs.io/en/latest/index.html) - 影像處理函式庫。
* [Intervention Image](https://github.com/Intervention/image) - 另一款影像處理函式庫。
* [PHP Image Workshop](https://github.com/Sybio/ImageWorkshop) - 另一款影像處理函式庫。
* [PHP QR Code](https://github.com/chillerlan/php-qrcode/) - QR Code 產生與讀取工具。

### 測試
*測試程式碼及產生測試資料的函式庫。*

* [Alice](https://github.com/nelmio/alice) - 表達力豐富的測試樣本資料產生函式庫。
* [Behat](https://docs.behat.org/en/latest/) - 行為驅動開發（BDD）測試框架。
* [Codeception](https://github.com/Codeception/Codeception) - 全端測試框架。
* [Faker](https://github.com/fakerphp/faker) - 假資料產生函式庫。
* [Foundry](https://github.com/zenstruck/foundry) - Doctrine 測試樣本工廠產生函式庫。
* [Infection](https://github.com/infection/infection) - 以 AST 為基礎的 PHP 變異測試框架。
* [Kahlan](https://github.com/kahlan/kahlan) - 全端單元測試與 BDD 測試框架，內建 stub、mock 和程式碼涵蓋率支援。
* [Mink](https://mink.behat.org/en/latest/) - 網頁驗收測試工具。
* [Mockery](https://github.com/mockery/mockery) - 用於測試的 mock 物件函式庫。
* [Nette Tester](https://github.com/nette/tester) - 高效又易用的平行單元測試框架。
* [ParaTest](https://github.com/paratestphp/paratest) - PHPUnit 平行測試函式庫。
* [Pest](https://pestphp.com/) - 著重簡潔易用的測試框架。
* [Phake](https://github.com/phake/phake) - 另一款用於測試的 mock 物件函式庫。
* [PHP-Mock](https://github.com/php-mock/php-mock) - PHP 內建函式（例如 time()）的 mock 函式庫。
* [PHP MySQL Engine](https://github.com/vimeo/php-mysql-engine) - 以純 PHP 撰寫的 MySQL 引擎。
* [PHPSpec](https://github.com/phpspec/phpspec) - 以規格為導向設計的單元測試函式庫。
* [PHPT](https://php.github.io/php-src/miscellaneous/writing-tests.html) - PHP 本身使用的測試工具。
* [PHPUnit](https://github.com/sebastianbergmann/phpunit) - 單元測試框架。
* [PHPUnit Polyfills](https://github.com/Yoast/PHPUnit-Polyfills/) - 簡化跨多個 PHPUnit 版本執行測試的流程。
* [Prophecy](https://github.com/phpspec/prophecy) - 立場鮮明的 mock 框架。
* [VFS Stream](https://github.com/bovigo/vfsStream) - 測試用的虛擬檔案系統串流包裝器。

### 持續整合
*持續整合相關函式庫與應用程式。*

* [CircleCI](https://circleci.com) - 持續整合平台。
* [GitLab CI](https://about.gitlab.com/solutions/continuous-integration/) - 持續整合平台。
* [Jenkins](https://www.jenkins.io/) - 持續整合平台，並提供 [PHP 支援](https://www.jenkins.io/solutions/php/)。
* [SemaphoreCI](https://semaphore.io/) - 適用於開源與私人專案的持續整合平台。
* [Travis CI](https://www.travis-ci.com) - 持續整合平台。
* [Setup PHP](https://github.com/shivammathur/setup-php) - PHP 專用的 GitHub Action。

### 文件
*產生專案文件的函式庫。*

* [APIGen](https://github.com/apigen/apigen) - 另一款 API 文件產生器。
* [daux.io](https://github.com/dauxio/daux.io) - 使用 Markdown 檔案產生文件的工具。
* [phpDocumentor](https://phpdoc.org/) - 文件產生器。
* [Scramble](https://github.com/dedoc/scramble) - 不需註解，直接從程式碼自動產生 OpenAPI 文件。
* [zircote/swagger-php](https://github.com/zircote/swagger-php) - 為 RESTful API 產生 OpenAPI 文件。

### 安全性
*產生安全亂數、加密資料，以及掃描和測試弱點的函式庫。*

* [AntiXSS](https://github.com/voku/anti-xss) - 透過黑名單機制嘗試阻擋跨網站指令碼（XSS）攻擊的函式庫。
* [Halite](https://paragonie.com/project/halite) - 使用 [libsodium](https://github.com/jedisct1/libsodium) 進行加密的簡易函式庫。
* [Optimus](https://github.com/jenssegers/optimus) - 以 Knuth 乘法雜湊法混淆 ID。
* [OWASP](https://owasp.org/) - 探索網路安全領域。
* [PHPGGC](https://github.com/ambionics/phpggc) - PHP 可反序列化酬載集合與產生工具。
* [PHP Encryption](https://github.com/defuse/php-encryption) - 安全的 PHP 加密函式庫。
* [PHPSecLib](https://github.com/phpseclib/phpseclib) - 純 PHP 安全通訊函式庫。
* [Roave Security Advisories](https://github.com/Roave/SecurityAdvisories) - 確保應用程式不會安裝已知含有安全性弱點的相依套件。
* [Secure Headers](https://github.com/BePsvPT/secure-headers) - 在 HTTP 回應中加入安全性相關標頭的套件。
* [SQLMap](https://github.com/sqlmapproject/sqlmap) - 自動化 SQL 注入與資料庫接管工具。
* [Zap](https://github.com/zaproxy/zaproxy) - 網頁應用程式整合式滲透測試工具。

### 密碼
*處理與儲存密碼的函式庫和工具。*

* [GenPhrase](https://github.com/timoh6/GenPhrase) - 產生安全隨機通關密語的函式庫。
* [Password Validator](https://github.com/jeremykendall/password-validator) - 驗證密碼雜湊並升級其格式的函式庫。
* [Password-Generator](https://github.com/hackzilla/password-generator) - 產生隨機密碼的 PHP 函式庫。
* [phpass](https://www.openwall.com/phpass/) - 可攜式密碼雜湊框架。
* [Zxcvbn PHP](https://github.com/bjeavons/zxcvbn-php) - 以 Zxcvbn JS 為基礎，務實評估 PHP 密碼強度的函式庫。

### 程式碼分析
*分析、剖析與操作程式碼的函式庫和工具。*

* [Better Reflection](https://github.com/Roave/BetterReflection) - 以 AST 為基礎，可分析及操作程式碼的反射函式庫。
* [Bladestan](https://github.com/bladestan/bladestan) - 用於 Blade 樣板靜態分析的 PHPStan 擴充功能。
* [Code Climate](https://codeclimate.com) - 自動化程式碼審查工具。
* [Editorconfig-Checker](https://github.com/editorconfig-checker/editorconfig-checker.php) - 命令列工具，用來確認檔案是否符合 `.editorconfig` 規則。
* [GrumPHP](https://github.com/phpro/grumphp) - PHP 程式碼品質工具。
* [PHP AST Viewer](https://php-ast-viewer.com/) - 檢視 PHP 抽象語法樹的工具。
* [PHP Magic Number Detector](https://github.com/povils/phpmnd) - 偵測程式碼中魔術數字的函式庫。
* [PHP Parser](https://github.com/nikic/PHP-Parser) - 以 PHP 撰寫的 PHP 剖析器。
* [PHP Semantic Versioning Checker](https://github.com/tomzx/php-semver-checker) - 命令列工具，可比較兩組原始碼並判定應採用的語意化版本。
* [Phpactor](https://github.com/phpactor/phpactor) - PHP 程式碼補全、重構與內省工具。
* [PHPQA](https://github.com/EdgedesignCZ/phpqa) - 執行 QA 工具的整合工具（phploc、phpcpd、phpcs、pdepend、phpmd、phpmetrics）。
* [Rector](https://github.com/rectorphp/rector) - 升級與重構程式碼的工具。
* [Scrutinizer](https://scrutinizer-ci.com/) - 用於[檢查 PHP 程式碼](https://github.com/scrutinizer-ci/php-analyzer)的網路工具。
* [UBench](https://github.com/devster/ubench) - 簡易微基準測試函式庫。

### 程式碼品質
*管理程式碼品質、格式與 lint 的函式庫。*

* [CaptainHook](https://github.com/captainhook-git/captainhook) - 簡單易用且彈性的 Git hook 函式庫。
* [Laravel Pint](https://github.com/laravel/pint) - Laravel 程式碼標準修正工具。
* [PHP CodeSniffer](https://github.com/PHPCSStandards/PHP_CodeSniffer) - 偵測並自動修正 PHP、CSS 與 JS 程式碼標準違規的函式庫。
* [PHP CS Fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) - 程式碼標準修正工具。
* [PHP CS Fixer Configurator](https://mlocati.github.io/php-cs-fixer-configurator/) - 協助設定 PHP CS Fixer 規則集的網頁應用程式。
* [PHP Mess Detector](https://github.com/phpmd/phpmd) - 掃描錯誤、品質不佳的程式碼、未使用參數等問題的函式庫。
* [PHPCheckstyle](https://github.com/PHPCheckstyle/phpcheckstyle) - 協助遵循程式碼慣例的工具。

### 靜態分析
*對 PHP 程式碼執行靜態分析的函式庫。*

* [Dead Code Detector](https://github.com/shipmonk-rnd/dead-code-detector) - 用來找出未使用 PHP 程式碼的 PHPStan 擴充功能。
* [Deptrac](https://github.com/deptrac/deptrac) - 強制檢查軟體架構各層相依規則的靜態分析工具。
* [Exakat](https://github.com/exakat/exakat) - PHP 靜態分析引擎。
* [Larastan](https://github.com/larastan/larastan) - Laravel 專用的 PHPStan 包裝器，為 Laravel 專案加入靜態分析。
* [Mago](https://github.com/carthage-software/mago) - 致力於改善開發者體驗的 PHP 工具鏈。
* [phan](https://github.com/phan/phan) - 以 PHP 7+ 和 php-ast 擴充功能為基礎的靜態分析器。
* [PHP Architecture Tester](https://github.com/carlosas/phpat) - 易於使用的架構測試工具。
* [PHPCompatibility](https://github.com/PHPCompatibility/PHPCompatibility) - PHP CodeSniffer 的 PHP 相容性檢查器。
* [PHPDoc Parser](https://github.com/phpstan/phpdoc-parser) - 新一代 phpDoc 剖析器，支援交集型別與泛型。
* [PHP Metrics](https://github.com/phpmetrics/PhpMetrics) - 靜態程式碼度量函式庫。
* [PHPStan](https://github.com/phpstan/phpstan) - PHP 靜態分析工具。
* [Psalm](https://github.com/vimeo/psalm) - 尋找 PHP 應用程式錯誤的靜態分析工具。

### 軟體架構
*設計模式、程式設計方法與程式碼組織方式相關的函式庫。*

* [Design Patterns PHP](https://github.com/DesignPatternsPHP/DesignPatternsPHP) - 以 PHP 實作各種軟體設計模式的程式碼庫。
* [Finite](https://github.com/yohang/Finite) - 簡易的 PHP 有限狀態機。
* [Functional PHP](https://github.com/lstrojny/functional-php) - 函數式程式設計函式庫。
* [Iter](https://github.com/nikic/iter) - 透過產生器提供迭代基本功能的函式庫。
* [IterTools PHP](https://github.com/markrogoyski/itertools-php) - 提供可迭代物件處理功能的函式庫（類似 Python 的 itertools）。
* [Pipeline](https://github.com/thephpleague/pipeline) - Pipeline 模式的實作。
* [Porter](https://github.com/ScriptFUSION/Porter) - 消費 Web API 與其他資料來源的資料匯入抽象層。
* [RulerZ](https://github.com/K-Phoen/rulerz) - 功能強大的規則引擎與 Specification 模式實作。

### 偵錯與效能分析
*偵錯錯誤與分析程式效能的函式庫和工具。*

* [APM](https://pecl.php.net/package/APM) - 監控擴充功能，可將錯誤與統計資料收集至 SQLite、MySQL 或 StatsD。
* [Barbushin PHP Console](https://github.com/barbushin/php-console) - 透過 Google Chrome 使用的網頁偵錯主控台。
* [Kint](https://github.com/kint-php/kint) - 偵錯與效能分析工具。
* [LaraDumps](https://github.com/laradumps/laradumps) - Laravel 偵錯工具，並提供專屬桌面應用程式。
* [Metrics](https://github.com/beberlei/metrics) - 簡易的指標 API 函式庫。
* [PCOV](https://github.com/krakjoe/pcov) - 獨立運作且相容於程式碼涵蓋率工具的驅動程式。
* [PHP Console](https://github.com/Seldaek/php-console) - 網頁偵錯主控台。
* [PHP Debug Bar](https://php-debugbar.com/) - 偵錯工具列。
* [PHPBench](https://github.com/phpbench/phpbench) - 基準測試框架。
* [PHPSpy](https://github.com/adsr/phpspy) - 低負載抽樣分析器。
* [Symfony VarDumper](https://github.com/symfony/var-dumper) - 變數傾印元件。
* [Tracy](https://github.com/nette/tracy) - 簡易的錯誤偵測、記錄與時間測量函式庫。
* [Trap](https://github.com/buggregator/trap) - 擴充版變數傾印工具，提供網頁介面與 IDE 外掛。
* [Whoops](https://github.com/filp/whoops) - 美觀易用的錯誤處理函式庫。
* [xDebug](https://github.com/xdebug/xdebug) - PHP 偵錯與效能分析工具。
* [XHProf](https://github.com/phacility/xhprof) - Facebook 最初開發的效能分析工具。
* [Z-Ray](https://www.zend.com/products/z-ray) - Zend Server 的偵錯與效能分析工具。

### 錯誤追蹤與監控服務
*自架或雲端的應用程式效能監控與錯誤追蹤工具。*

* [Blackfire](https://www.blackfire.io) - 低負載程式碼效能分析器。
* [Buggregator](https://buggregator.dev) - 偵錯伺服器，可彙整 var-dump、效能分析資料、電子郵件、記錄與 Sentry 事件。
* [BugSnag](https://www.bugsnag.com/) - 錯誤追蹤與真實使用者監控。
* [Honeybadger](https://www.honeybadger.io/) - 開發者的錯誤追蹤與應用程式監控服務。
* [Rollbar](https://rollbar.com/) - 軟體團隊的錯誤記錄與追蹤服務。
* [Sentry](https://sentry.io/welcome/) - 應用程式效能監控與錯誤追蹤軟體。
* [Tideways](https://tideways.com/) - 監控與效能分析工具。

### 建置工具
*專案建置與自動化工具。*

* [Box](https://github.com/box-project/box) - 建置 PHAR 檔案的工具。
* [PHPacker](https://github.com/phpacker/phpacker) - PHAR 建置工具，可將 PHP 應用程式編譯成獨立執行檔。
* [Phing](https://www.phing.info/) - 受 Apache Ant 啟發的 PHP 專案建置系統。
* [RMT](https://github.com/liip/RMT) - 軟體版本管理與發佈函式庫。

### 工作執行器
*自動化並執行工作流程的函式庫。*

* [Jobby](https://github.com/jobbyphp/jobby) - 不必修改 crontab 即可管理 PHP 排程工作的工具。
* [Robo](https://github.com/consolidation/Robo) - 使用物件導向設定的 PHP 工作執行器。

### 導覽
*建置導覽結構的工具。*

* [KnpMenu](https://github.com/KnpLabs/KnpMenu) - 選單函式庫。
* [Menu](https://github.com/spatie/menu) - 提供流暢介面的彈性選單函式庫。

### 資產管理
*管理、壓縮及最小化網站資產的工具。*

* [JShrink](https://github.com/tedious/JShrink) - JavaScript 最小化函式庫。
* [Laravel Mix](https://github.com/laravel-mix/laravel-mix) - 為多數常見情境設計的優雅 Webpack 包裝器。
* [Symfony Asset](https://github.com/symfony/asset) - 管理網頁資產的 URL 產生與版本控制。
* [Symfony Encore](https://github.com/symfony/webpack-encore) - 以 Webpack 為核心，簡潔而強大的資產處理與編譯 API。

### 地理位置
*地址地理編碼，以及經緯度資料處理函式庫。*

* [Country List](https://github.com/umpirsky/country-list) - 各國名稱與 ISO 3166-1 代碼清單。
* [GeoCoder](https://geocoder-php.org/) - 地理編碼函式庫。
* [GeoJSON](https://github.com/jmikola/geojson) - GeoJSON 實作。
* [GeoTools](https://github.com/thephpleague/geotools) - 地理資訊相關工具集。
* [PHPGeo](https://github.com/mjaschen/phpgeo) - 簡易地理資訊函式庫。

### 日期與時間
*處理日期與時間的函式庫。*

* [Business Time](https://github.com/kylekatarnls/business-time) - Carbon 擴充功能，可處理營業時間與工作日。
* [CalendR](https://github.com/yohang/CalendR) - 行事曆管理函式庫。
* [Carbon](https://github.com/briannesbitt/Carbon) - 簡易的 DateTime API 擴充功能。
* [Chronos](https://github.com/cakephp/chronos) - 支援可變與不可變日期／時間的 DateTime API 擴充功能。
* [Moment.php](https://github.com/fightbulc/moment.php) - 受 Moment.js 啟發、支援國際化的 PHP DateTime 處理工具。
* [PHP RRule](https://github.com/rlanvin/php-rrule) - 依循 iCalendar RRule 規格處理重複日期與時間的函式庫。
* [Yasumi](https://github.com/azuyalabs/yasumi) - 協助計算假日日期與名稱的函式庫。

### 事件
*事件驅動或實作非阻塞事件迴圈的函式庫。*

* [Amp](https://github.com/amphp/amp) - 事件驅動的非阻塞 I/O 函式庫。
* [Broadway](https://github.com/broadway/broadway) - 事件溯源與 CQRS 函式庫。
* [CakePHP Event](https://github.com/cakephp/event) - 事件分派函式庫。
* [Elephant.io](https://github.com/ElephantIO/elephant.io) - 又一款 WebSocket 函式庫。
* [Evenement](https://github.com/igorw/evenement) - 事件分派函式庫。
* [Event](https://github.com/thephpleague/event) - 著重領域事件的事件函式庫。
* [Fast CGI Client](https://github.com/hollodotme/fast-cgi-client) - 透過 php-fpm socket 發出同步或非同步請求的用戶端。
* [FrankenPHP](https://frankenphp.dev/) - 以 Go 撰寫的新世代 PHP 應用程式伺服器。
* [Pawl](https://github.com/ratchetphp/Pawl) - 非同步 WebSocket 用戶端。
* [Prooph Event Store](https://github.com/prooph/event-store) - 用於持久化事件訊息的事件溯源元件。
* [PHP Defer](https://github.com/php-defer/php-defer) - 將 Go 語言的 defer 陳述式帶到 PHP。
* [Ratchet](https://github.com/ratchetphp/Ratchet) - WebSocket 函式庫。
* [ReactPHP](https://github.com/reactphp/reactphp) - 事件驅動的非阻塞 I/O 函式庫。
* [RxPHP](https://github.com/ReactiveX/RxPHP) - 響應式擴充函式庫。
* [Swoole](https://github.com/swoole/swoole-src) - 以 C 撰寫、專為 PHP 打造的高效能事件驅動非同步並行網路通訊框架。
* [Workerman](https://github.com/walkor/Workerman) - 事件驅動的非阻塞 I/O 函式庫。

### 記錄
*產生與處理記錄檔的函式庫。*

* [Monolog](https://github.com/Seldaek/monolog) - 功能完整的記錄器。

### 電子商務
*收款與建置線上商店相關的函式庫和應用程式。*

* [Money](https://github.com/moneyphp/money) - Fowler Money 模式的 PHP 實作。
* [Brick Money](https://github.com/brick/money) - PHP 貨幣函式庫，支援情境設定、現金進位與幣別換算。
* [OmniPay](https://github.com/thephpleague/omnipay) - 不綁定特定框架、支援多種金流閘道的付款處理函式庫。
* [Payum](https://github.com/payum/payum) - 付款服務抽象函式庫。
* [Shopsys Framework](https://github.com/shopsys/shopsys/) - 專為企業內部開發團隊打造的開源電子商務平台。
* [Shopware](https://github.com/shopware/shopware) - 高度可自訂的電子商務軟體。
* [Swap](https://github.com/florianv/swap) - 匯率函式庫。
* [Sylius](https://sylius.com/) - 開源電子商務解決方案。

### PDF
*處理 PDF 檔案的函式庫與軟體。*

* [Browsershot](https://github.com/spatie/browsershot) - 將 HTML 轉換成圖片、PDF 或字串。
* [Dompdf](https://github.com/dompdf/dompdf) - HTML 轉 PDF 工具。
* [Gotenberg](https://github.com/gotenberg/gotenberg-php) - 與 Gotenberg 互動的 PHP 用戶端。
* [Snappy](https://github.com/KnpLabs/snappy) - PDF 與圖片產生函式庫。
* [TCPDF](https://tcpdf.org/) - 產生 PDF 文件的開源 PHP 類別。

### 辦公軟體
*處理辦公室套裝軟體文件的函式庫。*

* [PHPPowerPoint](https://github.com/PHPOffice/PHPPresentation) - 處理 Microsoft PowerPoint 簡報的函式庫。
* [PHPWord](https://github.com/PHPOffice/PHPWord) - 處理 Microsoft Word 文件的函式庫。
* [PHPSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet) - 以純 PHP 撰寫的試算表讀寫函式庫（PHPExcel 的後繼者）。
* [OpenSpout](https://github.com/openspout/openspout) - 社群維護的 `box/spout` 分支；以快速且可擴充的方式讀寫試算表檔案（CSV、XLSX 與 ODS）。

### 資料庫
*透過物件關聯對映（ORM）或資料對映技術與資料庫互動的函式庫。*

* [Atlas.Orm](https://github.com/atlasphp/Atlas.Orm) - PHP 持久化模型的資料對映器實作。
* [Aura.Sql](https://github.com/auraphp/Aura.Sql) - 擴充原生 PDO，並提供效能分析器與連線定位器。
* [Aura.SqlQuery](https://github.com/auraphp/Aura.SqlQuery) - 適用於 MySQL、PostgreSQL、SQLite 與 Microsoft SQL Server 的獨立查詢建構器。
* [Baum](https://github.com/etrepat/baum) - Eloquent 巢狀集合實作。
* [CakePHP ORM](https://github.com/cakephp/orm) - 以 DataMapper 模式實作的物件關聯對映器。
* [Cycle ORM](https://github.com/cycle/orm) - PHP 資料對映器與 ORM。
* [Doctrine Extensions](https://github.com/doctrine-extensions/DoctrineExtensions) - Doctrine 行為擴充功能集。
* [Doctrine](https://www.doctrine-project.org/) - 完整的 DBAL 與 ORM。
* [Laravel Eloquent](https://github.com/illuminate/database) - 簡易 ORM。
* [ProxyManager](https://github.com/Ocramius/ProxyManager) - 為資料對映器產生 Proxy 物件的工具集。
* [RedBean](https://redbeanphp.com/index.php) - 輕量、免設定的 ORM。
* [Slimdump](https://github.com/webfactory/slimdump) - 簡易的 MySQL 資料匯出工具。
* [Spot2](https://github.com/spotorm/spot2) - MySQL 資料對映 ORM。

### 資料庫遷移
*協助管理資料庫結構與遷移的函式庫。*

* [Doctrine Migrations](https://www.doctrine-project.org/projects/migrations.html) - Doctrine 的資料庫遷移函式庫。
* [Phinx](https://github.com/cakephp/phinx) - 另一款資料庫遷移函式庫。
* [PHPMig](https://github.com/davedevelopment/phpmig) - 另一款遷移管理函式庫。
* [Ruckusing](https://github.com/ruckus/ruckusing-migrations) - PHP 資料庫遷移工具，採用 ActiveRecord Migrations 風格，支援 MySQL、Postgres 與 SQLite。

### NoSQL
*處理「NoSQL」後端的函式庫。*

* [MongoDB](https://github.com/mongodb/mongo-php-driver) - MongoDB PHP 驅動程式。
* [MongoDB PHP Library](https://github.com/mongodb/mongo-php-library) - 建構於 MongoDB PHP Driver 之上的官方高階 MongoDB PHP 函式庫。
* [Predis](https://github.com/predis/predis) - 功能完整的 Redis 函式庫。

### 佇列
*處理事件佇列與工作佇列的函式庫。*

* [BunnyPHP](https://github.com/jakubkulhan/bunny) - 高效能純 PHP AMQP（RabbitMQ）函式庫，支援同步與非同步（ReactPHP）操作。
* [Pheanstalk](https://github.com/pheanstalk/pheanstalk) - Beanstalkd 用戶端函式庫。
* [PHP AMQP](https://github.com/php-amqplib/php-amqplib) - 純 PHP AMQP 函式庫。
* [Tarantool Queue](https://github.com/tarantool-php/queue) - Tarantool Queue 的 PHP 繫結。
* [Thumper](https://github.com/php-amqplib/Thumper) - RabbitMQ 模式函式庫。
* [Enqueue](https://github.com/php-enqueue/enqueue-dev) - PHP 訊息佇列套件，支援 RabbitMQ、AMQP、STOMP、Amazon SQS、Redis 與 Doctrine 傳輸方式。

### 搜尋
*為資料建立索引並執行搜尋查詢的函式庫與軟體。*

* [Elastica](https://github.com/ruflin/Elastica) - ElasticSearch 用戶端函式庫。
* [ElasticSearch PHP](https://github.com/elastic/elasticsearch-php) - [ElasticSearch](https://www.elastic.co/) 官方用戶端函式庫。
* [Solarium](https://www.solarium-project.org/) - [Solr](https://solr.apache.org/) 用戶端函式庫。
* [SphinxQL Query Builder](https://foolcode.github.io/SphinxQL-Query-Builder/) - 適用於 [Sphinx](https://sphinxsearch.com/) 與 [Manticore](https://manticoresearch.com/) 搜尋引擎的查詢函式庫。

### 命令列
*命令列相關函式庫。*

* [Aura.Cli](https://github.com/auraphp/Aura.Cli) - 為命令列介面提供相當於 request（Context）與 response（Stdio）的物件，支援 Getopt，並提供可獨立使用的 Help 物件來說明命令。
* [CLI Menu](https://github.com/php-school/cli-menu) - 建置 CLI 選單的函式庫。
* [CLIFramework](https://github.com/c9s/CLIFramework) - 命令列框架，支援產生 zsh/bash 自動補全、子命令與選項限制，也是 phpbrew 使用的框架。
* [CLImate](https://github.com/thephpleague/climate) - 輸出色彩與特殊格式文字的函式庫。
* [Commando](https://github.com/nategood/commando) - 簡易的命令列選項剖析器。
* [Cron Expression](https://github.com/mtdowling/cron-expression) - 計算 cron 工作執行日期的函式庫。
* [GetOpt](https://github.com/getopt-php/getopt-php) - 命令列選項剖析器。
* [GetOptionKit](https://github.com/c9s/GetOptionKit) - 另一款命令列選項剖析器。
* [PsySH](https://github.com/bobthecow/psysh) - PHP REPL 互動式殼層。
* [ShellWrap](https://github.com/MrRio/shellwrap) - 簡易的命令列包裝函式庫。

### 驗證與授權
*實作使用者驗證與授權的函式庫。*

* [Aura.Auth](https://github.com/auraphp/Aura.Auth) - 透過多種介接器提供驗證功能與工作階段追蹤。
* [SocialConnect Auth](https://github.com/socialConnect/auth) - 開源社群登入函式庫，支援 OAuth1、OAuth2、OpenID 與 OpenID Connect。
* [Json Web Token](https://github.com/lcobucci/jwt) - 用於驗證與傳遞資訊的 JSON Token。
* [OAuth 1.0 Client](https://github.com/thephpleague/oauth1-client) - OAuth 1.0 用戶端函式庫。
* [OAuth 2.0 Client](https://github.com/thephpleague/oauth2-client) - OAuth 2.0 用戶端函式庫。
* [OAuth2 Server](https://bshaffer.github.io/oauth2-server-php-docs/) - 另一款 OAuth2 伺服器實作。
* [OAuth2 Server](https://oauth2.thephpleague.com/) - 提供驗證伺服器、資源伺服器與用戶端函式庫的 OAuth2 解決方案。
* [Paseto](https://github.com/paragonie/paseto) - 不受平台限制的安全性權杖。
* [PHP oAuthLib](https://github.com/daviddesberg/PHPoAuthLib) - 另一款 OAuth 函式庫。
* [TwitterOAuth](https://github.com/abraham/twitteroauth) - Twitter OAuth 函式庫。

### 標記語言與 CSS
*處理標記語言與 CSS 格式的函式庫。*

* [Carve](https://github.com/markup-carve/carve-php) - [Carve](https://markup-carve.github.io/carve/) 的 PHP 剖析器；Carve 是一種從 Markdown 與 Djot 衍生的輕量標記語言。
* [Cebe Markdown](https://github.com/cebe/markdown) - 快速且易於擴充的 Markdown 剖析器。
* [CommonMark PHP](https://github.com/thephpleague/commonmark) - 高度可擴充且完整支援 [CommonMark 規格](https://spec.commonmark.org/)的 Markdown 剖析器。
* [Decoda](https://github.com/milesj/decoda) - 輕量標記語言剖析函式庫。
* [Djot](https://github.com/php-collective/djot-php) - [Djot](https://djot.net/) 的 PHP 剖析器；Djot 是新式輕量標記語言，也是 Markdown 的後繼者。
* [Essence](https://github.com/essence/essence) - 擷取網路媒體的函式庫。
* [Embera](https://github.com/mpratt/Embera) - OEmbed 內容擷取函式庫。
* [HTML to Markdown](https://github.com/thephpleague/html-to-markdown) - 將 HTML 轉換為 Markdown。
* [HTML5 PHP](https://github.com/Masterminds/html5-php) - HTML5 剖析與序列化函式庫。
* [Parsedown](https://github.com/erusev/parsedown) - 另一款 Markdown 剖析器。
* [PHP CSS Parser](https://github.com/MyIntervals/PHP-CSS-Parser) - 以 PHP 撰寫的 CSS 檔案剖析器。
* [PHP Markdown](https://github.com/michelf/php-markdown) - Markdown 剖析器。
* [Shiki PHP](https://github.com/spatie/shiki-php) - PHP 版的 [Shiki](https://github.com/shikijs/shiki) 程式碼語法上色套件。
* [VObject](https://github.com/sabre-io/vobject) - 剖析 VCard 與 iCalendar 物件的函式庫。

### JSON
*處理 JSON 的函式庫。*

* [JSON Lint](https://github.com/Seldaek/jsonlint) - JSON 格式檢查工具。
* [JSONMapper](https://github.com/JsonMapper/JsonMapper) - 將 JSON 對映至 PHP 物件的函式庫。
* [Lazy JSON](https://github.com/cerbero90/lazy-json) - 高效率處理大型 JSON 檔案的延遲剖析器。

### 字串
*剖析與操作字串的函式庫。*

* [Agent](https://github.com/jenssegers/agent) - 以 Mobiledetect 為基礎的 PHP 桌面與行動裝置 user agent 剖析器。
* [ANSI to HTML5](https://github.com/sensiolabs/ansi-to-html) - ANSI 轉 HTML5 函式庫。
* [Color Jizz](https://github.com/mikeemoo/ColorJizz-PHP) - 操作與轉換色彩的函式庫。
* [Device Detector](https://github.com/matomo-org/device-detector) - 另一款 user agent 字串剖析函式庫。
* [Hyphenation](https://github.com/heiglandreas/Org_Heigl_Hyphenator) - 以 TeX 斷字演算法為基礎的文字斷字工具。
* [Jieba-PHP](https://github.com/fukuball/jieba-php) - Python jieba 的 PHP 移植版，可對中文進行自然語言處理斷詞。
* [Mobile-Detect](https://github.com/serbanghita/Mobile-Detect) - 輕量 PHP 類別，可偵測行動裝置（包含平板）。
* [Patchwork UTF-8](https://github.com/nicolas-grekas/Patchwork-UTF8) - 可攜式 UTF-8 字串處理函式庫。
* [Portable ASCII](https://github.com/voku/portable-ascii) - 將字串轉換為 ASCII 的函式庫。
* [Portable UTF-8](https://github.com/voku/portable-utf8) - 提供 UTF-8 安全取代方法的字串操作函式庫。
* [Slugify](https://github.com/cocur/slugify) - 將字串轉換為 slug 的函式庫。
* [SQL Formatter](https://github.com/jdorn/sql-formatter/) - SQL 陳述式格式化函式庫。
* [Stringy](https://github.com/voku/Stringy) - 支援多位元組字元的字串操作函式庫。
* [Url highlight](https://github.com/vstelmakh/url-highlight) - 從文字中擷取 URL 並轉換成可點擊連結的函式庫。
* [URLify](https://github.com/jbroadway/urlify) - Django URLify.js 的 PHP 移植版。
* [UUID](https://github.com/ramsey/uuid) - 產生 UUID 的函式庫。

### 數字
*處理數字的函式庫。*

* [Brick Math](https://github.com/brick/math) - 支援大型數值的函式庫，提供 `BigInteger`、`BigDecimal` 與 `BigRational`。
* [ByteUnits](https://github.com/gabrielelana/byte-units) - 剖析、格式化及轉換二進位與公制位元組單位的函式庫。
* [DecimalObject](https://github.com/php-collective/decimal-object) - 輕鬆且精確處理小數與浮點數的值物件。
* [IP](https://github.com/darsyn/ip) - 處理 IPv4 與 IPv6 位址的不可變值物件。
* [PHP Conversion](https://github.com/cniska/php-conversion) - 另一款計量單位換算函式庫。
* [PHP Units of Measure](https://github.com/triplepoint/php-units-of-measure) - 計量單位換算函式庫。
* [MathPHP](https://github.com/markrogoyski/math-php) - PHP 數學函式庫。

### 篩選、清理與驗證
*篩選、清理與驗證資料的函式庫。*

* [Assert](https://github.com/beberlei/assert) - 提供豐富斷言功能的驗證函式庫，支援串接斷言與延遲斷言。
* [Aura.Filter](https://github.com/auraphp/Aura.Filter) - 驗證與清理物件及陣列的工具。
* [CakePHP Validation](https://github.com/cakephp/validation) - 另一款驗證函式庫。
* [Filterus](https://github.com/ircmaxell/filterus) - 簡易的 PHP 篩選函式庫。
* [HTML Purifier](https://github.com/ezyang/htmlpurifier) - 符合標準的 HTML 篩選器。
* [ISO-codes](https://github.com/ronanguilloux/IsoCodes) - 依據 ISO、國際金融、公共行政、GS1、圖書業等標準驗證輸入資料的函式庫，也支援多國電話號碼與郵遞區號。
* [JSON Schema](https://github.com/jsonrainbow/json-schema) - [JSON Schema](https://json-schema.org/) 驗證函式庫。
* [LibPhoneNumber for PHP](https://github.com/giggsey/libphonenumber-for-php) - Google 電話號碼處理函式庫的 PHP 實作。
* [MetaYaml](https://github.com/romaricdrigon/MetaYaml) - 支援 YAML、JSON 與 XML 的結構描述驗證函式庫。
* [Respect Validation](https://github.com/Respect/Validation) - 簡易驗證函式庫。
* [Symfony HTML Sanitizer](https://github.com/symfony/html-sanitizer) - HTML 清理函式庫。
* [Valitron](https://github.com/vlucas/valitron) - 另一款驗證函式庫。
* [Valinor](https://github.com/CuyZ/Valinor) - 將資料對映至強型別值物件的函式庫。
* [Volan](https://github.com/serkin/Volan) - 另一款精簡驗證函式庫。

### API
*開發 API 的函式庫與網頁工具。*

* [API Platform](https://api-platform.com) - 數分鐘內即可推出採用 JSON-LD 與 Hydra 格式的超媒體 REST API。
* [Laminas API Tool Skeleton](https://github.com/laminas-api-tools/api-tools-skeleton) - 以 Laminas Framework 建置的 API 建構工具。
* [HAL](https://github.com/blongden/hal) - 超文字應用程式語言（HAL）建構函式庫。
* [Hateoas](https://github.com/willdurand/Hateoas) - HATEOAS REST 網路服務函式庫。
* [Jane](https://github.com/janephp/janephp/) - 支援驗證功能的 OpenAPI 用戶端產生器。
* [Negotiation](https://github.com/willdurand/Negotiation) - 內容協商函式庫。
* [Restler](https://github.com/Luracast/Restler) - 輕量框架，可將 PHP 方法公開為 RESTful 網路 API。
* [PackageGenerator](https://github.com/WsdlToPhp/PackageGenerator) - 從任何 WSDL 產生 PHP SDK。

### 快取與鎖定
*快取資料與取得鎖定的函式庫。*

* [APIx Cache](https://github.com/apix/cache) - 輕量 PSR-6 快取包裝器，支援多種後端，並著重快取標籤與索引。
* [CacheTool](https://github.com/gordalina/cachetool) - 從命令列清除 APC／opcode 快取的工具。
* [CakePHP Cache](https://github.com/cakephp/cache) - 快取函式庫。
* [Doctrine Cache](https://github.com/doctrine/cache) - 快取函式庫。
* [Metaphore](https://github.com/sobstel/metaphore) - 使用 semaphore 避免快取雪崩效應。
* [Stash](https://github.com/tedious/Stash) - 另一款快取函式庫。
* [Laminas Cache](https://github.com/laminas/laminas-cache) - 另一款快取函式庫。
* [Lock](https://github.com/php-lock/lock) - 提供互斥執行能力的鎖定函式庫。

### 資料結構與儲存
*實作資料結構或儲存技術的函式庫。*

* [CakePHP Collection](https://github.com/cakephp/collection) - 簡易集合函式庫。
* [Fractal](https://github.com/thephpleague/fractal) - 將複雜資料結構轉換為 JSON 輸出的函式庫。
* [JsonMapper](https://github.com/cweiske/jsonmapper) - 將巢狀 JSON 結構對映至 PHP 類別的函式庫。
* [JSON Machine](https://github.com/halaxa/json-machine) - 透過簡單的 `foreach` 逐筆處理大型 JSON 資料。
* [msgpack.php](https://github.com/rybakit/msgpack.php) - [MessagePack](https://msgpack.org/) 序列化格式的純 PHP 實作。
* [Serializer](https://github.com/schmittjoh/serializer) - 序列化與還原序列化資料的函式庫。
* [YaLinqo](https://github.com/Athari/YaLinqo) - PHP 的另一款 LINQ to Objects。
* [Laminas Serializer](https://github.com/laminas/laminas-serializer) - 另一款資料序列化與還原序列化函式庫。

### 通知
*處理通知軟體的函式庫。*

* [JoliNotif](https://github.com/jolicode/JoliNotif) - 跨平台桌面通知函式庫（支援 Growl、notify-send、toaster 等）。

### 部署
*專案部署函式庫。*

* [Deployer](https://github.com/deployphp/deployer) - 部署工具。
* [Envoy](https://github.com/laravel/envoy) - 使用 PHP 執行 SSH 工作的工具。

### 國際化與在地化
*國際化（I18n）與在地化（L10n）函式庫。*

* [Aura.Intl](https://github.com/auraphp/Aura.Intl) - 國際化工具，特別適用於依語系管理套件訊息翻譯。
* [CakePHP I18n](https://github.com/cakephp/i18n) - 訊息翻譯，以及日期和數字的在地化。

### 無伺服器
*協助建置無伺服器網頁應用程式的函式庫與工具。*

* [Bref](https://bref.sh/) - 在 AWS Lambda 上執行無伺服器 PHP。
* [OpenWhisk](https://openwhisk.apache.org/) - 開源無伺服器雲端平台。
* [Serverless Framework](https://www.serverless.com/framework) - 建置無伺服器應用程式的開源框架。
* [Laravel Vapor](https://vapor.laravel.com/) - 以 AWS 為基礎的 Laravel 無伺服器部署平台。

### 設定
*設定相關的函式庫與工具。*

* [PHP Dotenv](https://github.com/vlucas/phpdotenv) - 解析並載入 `.env` 檔案中的環境變數。
* [Symfony Dotenv](https://github.com/symfony/dotenv) - 解析並載入 `.env` 檔案中的環境變數。
* [Toml](https://github.com/php-collective/toml) - TOML 剖析與編碼工具，支援 AST 存取與錯誤復原。

### 大型語言模型（LLM）
*處理大型語言模型的函式庫。*

* [Anthropic](https://github.com/mozex/anthropic-php) - Anthropic API 的 PHP 用戶端，支援訊息、串流、工具使用與批次處理。
* [Anthropic for Laravel](https://github.com/mozex/anthropic-laravel) - Anthropic PHP 用戶端的 Laravel 包裝器，提供 Facade、設定發佈與測試替身。
* [Instructor for PHP](https://github.com/cognesy/instructor-php) - 在 PHP 中透過 LLM 產生結構化資料。
* [LLPhant](https://github.com/LLPhant/LLPhant) - 使用 OpenAI GPT 4 的 PHP 生成式 AI 完整框架，靈感來自 Langchain。
* [OpenAI Client](https://github.com/openai-php/client) - 社群維護、功能強大的 OpenAI PHP API 用戶端，可與 OpenAI API 互動。
* [OpenAI Client for Laravel](https://github.com/openai-php/laravel) - 適用於 Laravel 的 OpenAI PHP API 用戶端，可與 OpenAI API 互動。
* [PHP Mistral AI SDK](https://github.com/SoftCreatR/php-mistral-ai-sdk) - 功能強大且易於使用的 Mistral AI API PHP SDK，能將進階 AI 功能順暢整合至 PHP 專案。

### 第三方 API
*存取第三方 API 的函式庫。*

* [Amazon Web Service SDK](https://github.com/aws/aws-sdk-php) - AWS 官方 PHP SDK 函式庫。
* [AsyncAWS](https://async-aws.com/) - 非官方的非同步 PHP AWS SDK。
* [Campaign Monitor](https://campaignmonitor.github.io/createsend-php/) - Campaign Monitor 官方 PHP 函式庫。
* [Github](https://github.com/KnpLabs/php-github-api) - 與 Github API 介接的函式庫。
* [Mailgun](https://github.com/mailgun/mailgun-php) - Mailgun 官方 PHP API。
* [Stripe](https://github.com/stripe/stripe-php) - Stripe 官方 PHP 函式庫。
* [Twilio](https://github.com/twilio/twilio-php) - Twilio 官方 PHP REST API。

### 擴充功能
*協助開發 PHP 擴充功能的函式庫。*

* [PHP CPP](https://www.php-cpp.com/) - 用於開發 PHP 擴充功能的 C++ 函式庫。
* [Zephir](https://github.com/zephir-lang/zephir) - PHP 與 C++ 之間的編譯式語言，用於開發 PHP 擴充功能。

### 其他
*無法歸入上述分類的實用函式庫或工具。*

* [Annotations](https://github.com/doctrine/annotations) - Doctrine 的註解函式庫。
* [BotMan](https://github.com/botman/botman) - 不受框架限制、可建置跨平台聊天機器人的 PHP 函式庫。
* [ClassPreloader](https://github.com/ClassPreloader/ClassPreloader) - 最佳化自動載入的函式庫。
* [Ganesha](https://github.com/ackintosh/ganesha) - PHP 斷路器模式實作。
* [Hprose-PHP](https://github.com/hprose/hprose-php) - 跨語言 RPC。
* [Laravel Serializable Closure](https://github.com/laravel/serializable-closure) - 將 Closure 序列化的函式庫。
* [noCAPTCHA](https://github.com/ARCANEDEV/noCAPTCHA) - Google noCAPTCHA（reCAPTCHA）的輔助工具。
* [Pagerfanta](https://github.com/whiteoctober/Pagerfanta) - 分頁函式庫。
* [Safe](https://github.com/thecodingmachine/safe) - 重寫所有 PHP 函式，讓它們在錯誤時擲出例外，而非回傳 false。

# 軟體
*建置開發環境所需的軟體。*

### PHP 安裝
*協助在電腦上安裝與管理 PHP 的工具。*

* [Brew PHP Switcher](https://github.com/philcook/brew-php-switcher) - 切換 Brew 安裝的 PHP 版本。
* [Homebrew](https://brew.sh/) - macOS 套件管理工具。
* [PHP Brew](https://github.com/phpbrew/phpbrew) - PHP 版本管理與安裝工具。
* [PHP Build](https://github.com/php-build/php-build) - 另一款 PHP 版本安裝工具。
* [Static PHP CLI](https://github.com/crazywhalecc/static-php-cli) - 建置或[下載](https://dl.static-php.dev/static-php-cli/)靜態編譯的 PHP CLI 與 FPM。

### 開發環境
*建置與分享開發環境的軟體和工具。*

* [Ansible](https://www.redhat.com/en/ansible-collaborative) - 極簡易用的自動化協作框架。
* [DDEV](https://github.com/ddev/ddev) - PHP 本機網頁開發環境系統。
* [Docker](https://www.docker.com/) - 容器化平台。
* [Docker PHP Extension Installer](https://github.com/mlocati/docker-php-extension-installer) - 在 Docker 容器中輕鬆安裝 PHP 擴充功能。
* [Docksal](https://github.com/docksal/docksal) - 以 Docker :whale: 為核心，支援 macOS、Windows 與 Linux 的統一網頁開發環境。
* [Expose](https://github.com/exposedev/expose) - 開源 PHP 通道服務。
* [Lando](https://lando.dev/) - 一鍵建立的開發環境。
* [Laravel Homestead](https://laravel.com/docs/master/homestead) - Laravel 本機開發環境。
* [Laravel Herd](https://herd.laravel.com/windows) - macOS 與 Windows 適用的一鍵 PHP 開發環境。
* [Laradock](https://laradock.io/) - 以 Docker 為基礎的完整 PHP 開發環境。
* [PHPMon](https://phpmon.app/) - 管理 PHP 安裝項目的 macOS 選單列應用程式（可搭配 [Laravel Valet](https://laravel.com/docs/master/valet) 使用）。
* [Puppet](https://www.puppet.com) - 伺服器自動化框架與應用程式。
* [Solo](https://github.com/soloterm/solo) - 管理 Laravel 應用程式程序的終端機工具。
* [Takeout](https://github.com/tighten/takeout) - 以 Docker 為基礎、僅供開發使用的相依性管理工具。
* [Vagrant](https://developer.hashicorp.com/vagrant) - 可攜式開發環境工具。

### 虛擬機器
*其他 PHP 虛擬機器。*

* [Hack](https://hacklang.org/) - HHVM 使用的程式語言。
* [HHVM](https://github.com/facebook/hhvm) - Facebook 推出的 PHP 虛擬機器、執行環境與 JIT。
* [PeachPie](https://github.com/peachpiecompiler/peachpie) - 適用於 .NET 與 .NET Core 的 PHP 編譯器和執行環境。

### 文字編輯器與 IDE
*支援 PHP 的文字編輯器與整合式開發環境（IDE）。*

* [Eclipse for PHP Developers](https://www.eclipse.org/downloads/) - 以 Eclipse 平台為基礎的 PHP IDE。
* [Apache NetBeans](https://netbeans.apache.org/front/main/index.html) - 支援 PHP 與 HTML5 的 IDE。
* [PhpEd](https://www.nusphere.com/products/phped.htm) - 配備專業商用偵錯器的 IDE。
* [PhpStorm](https://www.jetbrains.com/phpstorm/) - 商用 PHP IDE。
* [VS Code](https://code.visualstudio.com/) - 開源程式碼編輯器。

### 網頁應用程式
*網頁應用程式與工具。*

* [3V4L](https://3v4l.org/) - 線上 PHP 與 HHVM Shell。
* [Adminer](https://www.adminer.org/en/) - 以單一 PHP 檔案管理資料庫。
* [Cachet](https://github.com/cachethq/cachet) - 開源服務狀態頁面系統。
* [Lychee](https://github.com/electerious/Lychee) - 易用又美觀的相片管理系統。
* [Leantime](https://leantime.io) - 專為非專業專案經理打造的策略型專案管理系統。
* [MailCatcher](https://github.com/sj26/mailcatcher) - 擷取並檢視電子郵件的網頁工具。
* [Mailpit](https://github.com/axllent/mailpit) - 開發者專用的電子郵件與 SMTP 測試工具。
* [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - MySQL／MariaDB 網頁管理介面。
* [PHP Queue](https://github.com/CoderKungfu/php-queue) - 管理佇列後端的應用程式。
* [phpRedisAdmin](https://github.com/ErikDubbelboer/phpRedisAdmin) - 管理 [Redis](https://redis.io/) 資料庫的簡易網頁介面。
* [PHPSandbox](https://phpsandbox.io) - 在瀏覽器中使用的線上 PHP IDE。

### 基礎架構
*提供 PHP 應用程式與服務的基礎架構。*

* [appserver.io](https://github.com/appserver-io/appserver) - 以 PHP 撰寫的多執行緒應用程式伺服器。
* [php-pm](https://github.com/php-pm/php-pm) - PHP 應用程式的程序管理器、效能加速器與負載平衡器。
* [RoadRunner](https://github.com/roadrunner-server/roadrunner) - 高效能 PHP 應用程式伺服器、負載平衡器與程序管理器。

# 資源
提升 PHP 開發技能與知識的各類資源，包括書籍、網站與文章。

### PHP 網站
*實用的 PHP 相關網站。*

* [Nomad PHP](https://nomadphp.com/) - 線上 PHP 學習資源。
* [Laravel News](https://laravel-news.com/) - Laravel 官方部落格。
* [PHP Annotated Monthly](https://blog.jetbrains.com/phpstorm/tag/php-annotated-monthly/) - 每月一期的 PHP 新聞彙整。
* [PHP FIG](https://www.php-fig.org/) - PHP Framework Interoperability Group。
* [PHP Package Development Standards](https://php-pds.com/) - PHP 套件開發標準。
* [PHP School](https://www.phpschool.io/) - PHP 開源學習資源。
* [PHP The Right Way](https://phptherightway.com/) - PHP 最佳實務速查指南。
* [PHP UG](https://php.ug) - 協助尋找附近 PHP 使用者群組（UG）的網站。
* [PHP Watch](https://php.watch/) - PHP 文章、新聞、即將推出的變更、RFC 等資訊。
* [Unit Testing Tips](https://testing-tips.sarvendev.com/) - 透過 PHP 範例分享單元測試技巧。

### PHP 書籍
*精彩的 PHP 相關書籍。*

* [Domain-Driven Design in PHP](https://leanpub.com/ddd-in-php) - 以 PHP 範例展示 DDD 架構風格。
* [Functional Programming in PHP](https://www.functionalphp.com/) - 將函數式程式設計原則與技巧應用於 PHP 的書籍。
* [Mastering Object-Orientated PHP](https://masteringobjectorientedphp.com/) - Brandon Savage 撰寫的物件導向 PHP 指南。
* [PHP Cookbook](https://www.oreilly.com/library/view/php-cookbook/9781098121310/) - 收錄程式範例，協助解決各種開發問題。
* [Modernizing Legacy Applications in PHP](https://leanpub.com/mlaphp) - Paul M. Jones 撰寫的 PHP 舊有應用程式現代化指南。
* [Scaling PHP Applications](https://www.scalingphpbook.com) - Steve Corona 撰寫的 PHP 應用程式擴充性電子書。
* [Securing PHP: Core Concepts](https://leanpub.com/securingphp-coreconcepts) - Chris Cornutt 撰寫的 PHP 常見安全術語與實務指南。
* [Signaling PHP](https://leanpub.com/signalingphp) - Cal Evans 撰寫的 CLI 指令碼 PCNTL 訊號處理指南。
* [XML Parsing with PHP](https://www.phparch.com/books/xml-parsing-with-php/) - 本書涵蓋 XML 文件剖析與驗證、XPath 運用、命名空間處理，以及以程式建立和修改 XML 檔案。

### PHP 影片
*精彩的 PHP 相關影片。*

* [Laracasts](https://laracasts.com) - Laravel、Vue JS 等主題的螢幕教學影片。
* [Laravel YouTube Channel](https://www.youtube.com/channel/UCfO2GiQwb-cwJTb1CuRSkwg) - Laravel 官方 YouTube 頻道。
* [Program With Gio](https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-) - Gio 主講的 PHP 8 課程。
* [Programming with Anthony](https://www.youtube.com/playlist?list=PLM-218uGSX3DQ3KsB5NJnuOqPqc5CW2kW) - Anthony Ferrara 製作的影片系列。
* [SymfonyCasts](https://symfonycasts.com/) - PHP 與 Symfony 螢幕教學及教學文章。

### PHP 研討會
*PHP 研討會。*

* [Laracon EU](https://www.youtube.com/@LaraconEU) - 為期兩天的活動，適合想學習 Laravel 及相關技術，或想與他人分享知識的參與者。
* [PHP[TEK]](https://phptek.io/) - 美國歷史最悠久、以 PHP 程式語言為主題的網頁開發者研討會。
* [PHP UK Conference](https://www.youtube.com/user/phpukconference/videos) - PHP UK Conference 的影片集。

### PHP Podcast
*聚焦 PHP 主題的 Podcast。*

* [Laravel News Podcast](https://podcast.laravel-news.com/) - 帶來 Laravel PHP Framework 的最新消息與活動。
* [Mostly Technical](https://mostlytechnical.com/) - Ian Landsman 與 Aaron Francis 主持，暢談 Laravel、商業及各種相關話題。
* [No Compromises](https://show.nocompromises.io/) - 兩位資深、直言不諱的程式設計老手，根據多年與 Laravel SaaS 團隊合作的經驗分享最佳實務。
* [North Meets South Web Podcast](https://www.northmeetssouth.audio/) - Jacob Bennett 與 Michael Dyrynda 克服 14.5 小時時差，聊聊網頁開發者的日常。
* [Over Engineered](https://overengineered.fm/) - 以迷你系列節目深入探討看似無關緊要的程式設計問題。
* [PHP Internals News](https://phpinternals.news) - 探討 PHP 內部機制的 Podcast。
* [PHP Town Hall](https://phptownhall.com/) - Ben Edmunds 與 Phil Sturgeon 主持的輕鬆 PHP Podcast。
* [php[podcast] episodes from php[architect]](https://www.phparch.com/podcast/) - php[architect] 官方 Podcast；該刊物是專注 PHP 與網頁開發的領先科技雜誌與出版商。
* [PHPUgly](https://www.phpugly.com/) - 幾位忙到不可開交的 PHP 開發者閒聊分享。
* [The Laracasts Snippet](https://laracasts.simplecast.com) - 每集以短篇節目分享一個網頁開發相關想法。
* [The Laravel Podcast](https://laravelpodcast.com/) - 討論 Laravel 與 PHP 開發新聞的 Podcast。
* [The PHP Roundtable](https://phproundtable.com/) - 開發者輕鬆聚會，討論 PHP 愛好者關心的主題。

### PHP 電子報
*直接寄送至收件匣的 PHP 新聞。*

* [PHP Weekly](https://www.phpweekly.com/) - 每週一期的 PHP 電子報。

### PHP 閱讀資料
*PHP 相關閱讀資料。*

* [php[architect]](https://www.phparch.com/magazine/) - 專門介紹 PHP 的月刊。

### PHP 內部機制閱讀資料
*PHP 內部機制或效能相關的閱讀資料。*

* [PHP RFCs](https://wiki.php.net/rfc) - PHP RFC（徵求意見稿）的官方網站。
* [Externals](https://externals.io/) - PHP 內部開發討論區。
* [PHP RFC Watch](https://github.com/beberlei/php-rfc-watch) - 追蹤最新的 PHP [RFCs](https://wiki.php.net/rfc)。
* [PHP Internals Book](https://www.phpinternalsbook.com/) - 三位核心開發者撰寫的 PHP 內部機制線上書籍。
