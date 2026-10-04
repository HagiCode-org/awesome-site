# Awesome PHP 精选集 [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

精选的优秀 PHP 库、资源和实用工具。

## 贡献与协作
详情请参阅 [CONTRIBUTING](https://github.com/ziadoz/awesome-php/blob/master/CONTRIBUTING.md)、[CODE-OF-CONDUCT](https://github.com/ziadoz/awesome-php/blob/master/CODE-OF-CONDUCT.md) 和 [COLLABORATING](https://github.com/ziadoz/awesome-php/blob/master/COLLABORATING.md)。

## 目录
- [Awesome PHP](#awesome-php)
  - [软件包仓库](#composer-repositories)
  - [依赖管理](#dependency-management)
  - [依赖管理扩展](#dependency-management-extras)
  - [框架](#frameworks)
  - [框架扩展](#framework-extras)
  - [内容管理系统（CMS）](#content-management-systems-cms)
  - [组件](#components)
  - [微型框架](#micro-frameworks)
  - [微型框架扩展](#micro-framework-extras)
  - [路由器](#routers)
  - [模板引擎](#templating)
  - [静态站点生成器](#static-site-generators)
  - [HTTP](#http)
  - [网页抓取](#scraping)
  - [中间件](#middlewares)
  - [URL](#url)
  - [电子邮件](#email)
  - [文件](#files)
  - [数据流](#streams)
  - [依赖注入](#dependency-injection)
  - [图像处理](#imagery)
  - [测试](#testing)
  - [持续集成](#continuous-integration)
  - [文档](#documentation)
  - [安全](#security)
  - [密码](#passwords)
  - [代码分析](#code-analysis)
  - [代码质量](#code-quality)
  - [静态分析](#static-analysis)
  - [架构设计](#architectural)
  - [调试与性能分析](#debugging-and-profiling)
  - [错误跟踪与监控服务](#error-tracking-and-monitoring-services)
  - [构建工具](#build-tools)
  - [任务运行器](#task-runners)
  - [导航](#navigation)
  - [资源管理](#asset-management)
  - [地理位置](#geolocation)
  - [日期与时间](#date-and-time)
  - [事件](#event)
  - [日志记录](#logging)
  - [电子商务](#e-commerce)
  - [PDF](#pdf)
  - [办公软件](#office)
  - [数据库](#database)
  - [迁移](#migrations)
  - [NoSQL](#nosql)
  - [队列](#queue)
  - [搜索](#search)
  - [命令行](#command-line)
  - [身份验证与授权](#authentication-and-authorization)
  - [标记语言与 CSS](#markup-and-css)
  - [JSON](#json)
  - [字符串](#strings)
  - [数字](#numbers)
  - [筛选、净化与验证](#filtering-sanitizing-and-validation)
  - [API](#api)
  - [缓存与锁](#caching-and-locking)
  - [数据结构与存储](#data-structure-and-storage)
  - [通知](#notifications)
  - [部署](#deployment)
  - [国际化与本地化](#internationalisation-and-localisation)
  - [无服务器](#serverless)
  - [配置](#configuration)
  - [大语言模型（LLM）](#llms)
  - [第三方 API](#third-party-apis)
  - [扩展](#extensions)
  - [其他](#miscellaneous)
- [软件](#software)
  - [PHP 安装](#php-installation)
  - [开发环境](#development-environment)
  - [虚拟机](#virtual-machines)
  - [文本编辑器与 IDE](#text-editors-and-ides)
  - [Web 应用](#web-applications)
  - [基础设施](#infrastructure)
- [资源](#resources)
  - [PHP 网站](#php-websites)
  - [PHP 图书](#php-books)
  - [PHP 视频](#php-videos)
  - [PHP 会议](#php-conferences)
  - [PHP 播客](#php-podcasts)
  - [PHP 新闻简报](#php-newsletters)
  - [PHP 阅读材料](#php-reading)
  - [PHP 内核阅读材料](#php-internals-reading)

### 软件包仓库
*Composer 软件包仓库。*

* [Firegento](https://packages.firegento.com/) - Magento 模块的 Composer 软件包仓库。
* [Packagist](https://packagist.org/) - PHP 软件包仓库。
* [Packalyst](https://packalyst.com/) - Laravel 软件包仓库。
* [Private Packagist](https://packagist.com/) - 面向 PHP 的 Composer 软件包托管服务。
* [WordPress Packagist](https://wpackagist.org/) - 使用 Composer 管理 WordPress 插件。

### 依赖管理
*用于管理依赖和软件包的库。*

* [Composer](https://getcomposer.org/) - 软件包与依赖管理器。
* [Composer Installers](https://github.com/composer/installers) - 支持多个框架的 Composer 库安装器。
* [Phive](https://phar.io/) - PHAR 管理器。
* [Pickle](https://github.com/FriendsOfPHP/pickle) - PHP 扩展安装器。
* [Pie](https://github.com/php/pie) - PHP 官方扩展安装器。

### 依赖管理扩展
*与依赖管理相关的扩展工具。*

* [Composer Merge Plugin](https://github.com/wikimedia/composer-merge-plugin) - 用于合并多个 `composer.json` 文件的 Composer 插件。
* [Composer Normalize](https://github.com/ergebnis/composer-normalize) - 用于规范化 `composer.json` 文件的插件。
* [Composer Patches](https://github.com/cweagans/composer-patches) - 可通过 Composer 应用补丁的插件。
* [Composer Prefer Lowest Validator](https://github.com/dereuromark/composer-prefer-lowest) - 检查最低版本依赖能否安装并通过测试的插件。
* [Composer Require Checker](https://github.com/maglnet/ComposerRequireChecker) - 用于分析 Composer 依赖，并验证软件包源代码是否使用了未声明符号的命令行工具。
* [Composer Unused](https://github.com/composer-unused/composer-unused) - 用于扫描未使用 Composer 软件包的命令行工具。
* [Repman](https://repman.io) - 私有 PHP 软件包仓库管理器，也是 Packagist 代理。
* [Satis](https://github.com/composer/satis) - 静态 Composer 仓库生成器。

### 框架
*用于 Web 开发的框架。*

* [CakePHP](https://cakephp.org/) - 支持快速应用开发的框架。
* [CodeIgniter](https://codeigniter.com/) - 功能强大且占用空间极小的 PHP 框架。
* [Ecotone](https://docs.ecotone.tech/) - 基于 DDD、CQRS 和事件溯源架构原则的 PHP 服务总线。
* [Laminas](https://getlaminas.org/) - 由彼此独立的组件组成的框架（前身为 Zend Framework）。
* [Laravel](https://laravel.com/) - 语法简洁优雅的 Web 应用框架。
* [Nette](https://nette.org) - 由成熟组件构成的 Web 框架。
* [Phalcon](https://phalcon.io/en-us) - 以 C 扩展形式实现的框架。
* [Spiral](https://spiral.dev/) - 高性能 PHP/Go 框架。
* [Symfony](https://symfony.com/) - 一套可复用组件及 Web 框架。
* [Tempest](https://github.com/tempestphp/tempest-framework) - 尽量不妨碍你工作的框架。
* [Yii2](https://github.com/yiisoft/yii2/) - 快速、安全且高效的 Web 框架。

### 框架扩展
*与 Web 开发框架相关的扩展工具。*

* [CakePHP CRUD](https://github.com/friendsofcake/crud) - 面向 CakePHP 的快速应用开发（RAD）插件。
* [Filament PHP](https://filamentphp.com/) - 面向 Laravel 的强大开源 UI 框架。
* [Inertia.js](https://inertiajs.com/) - 借助服务器端路由和控制器构建单页应用的适配器，无需另建 API。
* [LaravelS](https://github.com/hhxsv5/laravel-s) - Laravel/Lumen 与 Swoole 之间开箱即用的适配器。
* [Livewire](https://livewire.laravel.com/) - 无需离开 PHP，即可构建强大、动态的前端界面。

### 内容管理系统（CMS）
*用于管理数字内容的工具。*

* [Backdrop](https://backdropcms.org) - 面向中小型企业和非营利组织的 CMS（Drupal 的一个分支）。
* [Concrete5](https://www.concretecms.com/) - 面向技术经验较少用户的 CMS。
* [CraftCMS](https://github.com/craftcms/cms) - 灵活易用的 CMS，用于在 Web 及其他平台打造定制数字体验。
* [Drupal](https://new.drupal.org/home) - 面向企业级场景的 CMS。
* [Grav](https://github.com/getgrav/grav) - 现代化的扁平文件 CMS。
* [Joomla](https://www.joomla.org/) - 另一款主流 CMS。
* [Kirby](https://getkirby.com/) - 可适配各类项目的扁平文件 CMS。
* [Magento](https://github.com/magento/magento2) - 广泛使用的开源电子商务平台。
* [Moodle](https://moodle.org/) - 开源学习平台。
* [OctoberCMS](https://octobercms.com/) - 基于 Laravel 构建的 CMS。
* [OpenMage](https://github.com/OpenMage/magento-lts) - 已停止维护的 Magento 1 电子商务平台的分支版本。
* [Pico CMS](https://picocms.org/) - 轻量级扁平文件 CMS。
* [Silverstripe](https://www.silverstripe.org/) - 简单、灵活且安全的 CMS。
* [Statamic](https://statamic.com/) - 基于 Laravel 构建、使用扁平文件和 Git 的 CMS。
* [Sulu](https://sulu.io/) - 对用户和开发者都友好的 Symfony 框架 CMS。
* [TYPO3](https://typo3.org) - 面向企业级场景的 CMS。
* [WinterCMS](https://wintercms.com) - 社区维护的 OctoberCMS 分支，基于 Laravel 构建。
* [WordPress](https://github.com/WordPress/WordPress) - 博客平台及 CMS。

### 组件
*来自 Web 开发框架和开发团队的独立组件。*

* [Aura](https://auraphp.com/) - 各组件彼此完全解耦，也不依赖任何框架。
* [CakePHP Plugins](https://plugins.cakephp.org/) - CakePHP 插件目录。
* [Laminas Components](https://docs.laminas.dev/components/) - 构成 Laminas Framework 的组件。
* [Laravel Components](https://github.com/illuminate) - Laravel Framework 的组件。
* [League of Extraordinary Packages](https://thephpleague.com/) - PHP 软件包开发团队。
* [Spatie Open Source](https://spatie.be/open-source) - 一系列开源 PHP 和 Laravel 软件包。
* [Symfony Packages](https://symfony.com/packages) - 面向 PHP 应用的解耦库。

### 微型框架
*微型框架和路由器。*

* [Laravel Zero](https://laravel-zero.com) - 面向控制台应用的微型框架。
* [Mezzio](https://getexpressive.org/) - Laminas 推出的微型框架。
* [Minicli](https://github.com/minicli/minicli) - 极简、无依赖的框架，用于构建以 CLI 为核心的 PHP 应用。
* [Silly](https://github.com/mnapoli/silly) - 面向 CLI 应用的微型框架。
* [Slim](https://www.slimframework.com/) - 另一款简洁的微型框架。

### 微型框架扩展
*与微型框架和路由器相关的扩展工具。*

* [Slim Skeleton](https://github.com/slimphp/Slim-Skeleton) - Slim 项目的脚手架。
* [Slim PHP View](https://github.com/slimphp/PHP-View) - 面向 Slim 的简易 PHP 渲染器。

### 路由器
*用于处理应用路由的库。*

* [Aura.Router](https://github.com/auraphp/Aura.Router) - 功能齐全的路由库。
* [Fast Route](https://github.com/nikic/FastRoute) - 高速路由库。
* [Klein](https://github.com/klein/klein.php) - 灵活的路由器。
* [Route](https://github.com/thephpleague/route) - 基于 Fast Route 构建的路由库。

### 模板引擎
*用于模板处理和词法分析的库与工具。*

* [Latte](https://latte.nette.org/) - 更安全且真正直观易用的 PHP 模板引擎。
* [MtHaml](https://github.com/arnaud-lb/MtHaml) - HAML 模板语言的 PHP 实现。
* [Mustache](https://github.com/bobthecow/mustache.php) - Mustache 模板语言的 PHP 实现。
* [PHPTAL](https://phptal.org/) - [TAL](https://en.wikipedia.org/wiki/Template_Attribute_Language) 模板语言的 PHP 实现。
* [Plates](https://platesphp.com/) - 原生 PHP 模板库。
* [Smarty](https://www.smarty.net/) - 用于扩展 PHP 模板能力的模板引擎。
* [Twig](https://twig.symfony.com/) - 功能全面的模板语言。

### 静态站点生成器
*用于预处理内容并生成网页的工具。*

* [Cecil](https://cecil.app/) - 简单而强大的内容驱动型静态站点生成器。
* [Couscous](https://couscous.io) - 将 Markdown 文档转换为网站的工具。
* [Jigsaw](https://jigsaw.tighten.com/) - 使用 Laravel Blade 构建简洁的静态站点。
* [Sculpin](https://sculpin.io) - 将 Markdown 和 Twig 转换为静态 HTML 的工具。

### HTTP
*用于处理 HTTP 的库。*

* [Buzz](https://github.com/kriswallsmith/Buzz) - 另一款 HTTP 客户端。
* [Guzzle](https://github.com/guzzle/guzzle) - 功能全面的 HTTP 客户端。
* [HTTPlug](https://httplug.io) - 不绑定特定实现的 HTTP 客户端抽象层。
* [Nyholm PSR-7](https://github.com/Nyholm/psr7) - 极轻量的 PSR-7 实现，严格且快速。
* [PHP VCR](https://php-vcr.github.io/) - 用于录制和重放 HTTP 请求的库。
* [Requests](https://github.com/WordPress/Requests) - 简易 HTTP 库。
* [Retrofit](https://github.com/tebru/retrofit-php) - 简化 REST API 客户端创建的库。
* [Saloon](https://github.com/saloonphp/saloon) - 用于构建优雅 API 集成和 SDK 的框架。
* [Symfony HTTP Client](https://github.com/symfony/http-client) - 可同步或异步获取 HTTP 资源的组件。
* [Laminas Diactoros](https://github.com/laminas/laminas-diactoros) - PSR-7 HTTP 消息实现。

### 网页抓取
*用于抓取网站和识别爬虫的库。*

* [Chrome PHP](https://github.com/chrome-php/chrome) - 从 PHP 控制无头 Chrome/Chromium 实例。
* [CrawlerDetect](https://github.com/JayBizzle/Crawler-Detect) - 通过 User-Agent 识别机器人、爬虫和蜘蛛程序的 PHP 类。
* [DiDOM](https://github.com/Imangazaliev/DiDOM) - 极速 HTML 抓取与解析器。
* [Embed](https://github.com/php-embed/Embed) - 从任意 Web 服务或网页提取信息的工具。
* [PHP Spider](https://github.com/mvdbos/php-spider) - 可配置、可扩展的 PHP 网络爬虫。
* [Symfony Panther](https://github.com/symfony/panther) - 面向 PHP 和 Symfony 的浏览器测试与网页爬取库。

### 中间件
*用于通过中间件构建应用的库。*

* [PSR-15 Middlewares](https://github.com/middlewares/psr15-middlewares) - 值得借鉴的实用中间件合集。
* [Stack](https://github.com/stackphp) - Symfony 的可堆叠中间件库。
* [Laminas Stratigility](https://github.com/laminas/laminas-stratigility) - 基于 PSR-7 构建的 PHP 中间件。

### URL
*用于解析 URL 的库。*

* [PHP Domain Parser](https://github.com/jeremykendall/php-domain-parser) - 域名后缀解析库。
* [sabre/uri](https://github.com/sabre-io/uri) - 函数式 URI 处理库。
* [Uri](https://github.com/thephpleague/uri) - 另一款 URL 处理库。

### 电子邮件
*用于发送和解析电子邮件的库。*

* [CssToInlineStyles](https://github.com/tijsverkoyen/CssToInlineStyles) - 将 CSS 内联到电子邮件模板中的库。
* [ddeboer/imap](https://github.com/ddeboer/imap) - 面向对象且经过全面测试的 PHP IMAP 库。
* [Email Reply Parser](https://github.com/willdurand/EmailReplyParser) - 解析电子邮件回复的库。
* [Fetch](https://github.com/tedious/Fetch) - IMAP 库。
* [Mautic](https://github.com/mautic/mautic) - 电子邮件营销自动化工具。
* [PHPMailer](https://github.com/PHPMailer/PHPMailer) - 另一款邮件发送解决方案。
* [Stampie](https://github.com/Stampie/Stampie) - 支持 [SendGrid](https://www.twilio.com/en-us/sendgrid)、[PostMark](https://postmarkapp.com)、[MailGun](https://www.mailgun.com/) 和 [MailChimp](https://mailchimp.com/features/transactional-email/) 等电子邮件服务的库。
* [Symfony Mailer](https://github.com/symfony/mailer) - 用于创建和发送电子邮件的强大库。

### 文件
*用于文件操作和 MIME 类型检测的库。*

* [CSV](https://github.com/thephpleague/csv) - CSV 数据处理库。
* [Flysystem](https://github.com/thephpleague/Flysystem) - 本地与远程文件系统的抽象层。
* [Gaufrette](https://github.com/KnpLabs/Gaufrette) - 文件系统抽象层。
* [PHP FFmpeg](https://github.com/PHP-FFmpeg/PHP-FFmpeg/) - [FFmpeg](https://www.ffmpeg.org/) 视频库的封装器。
* [UnifiedArchive](https://github.com/wapmorgan/UnifiedArchive) - 统一的压缩归档文件读写工具。
* [Parquet](https://github.com/flow-php/parquet) - Parquet 文件格式的 PHP 实现。

### 数据流
*用于处理数据流的库。*

* [ByteStream](https://amphp.org/byte-stream) - 异步数据流抽象层。

### 依赖注入
*实现依赖注入设计模式的库。*

* [Aura.Di](https://github.com/auraphp/Aura.Di) - 可序列化的依赖注入容器，支持构造函数和 setter 注入、接口与 trait 感知、配置继承等功能。
* [Acclimate](https://github.com/AcclimateContainer/acclimate-container) - 依赖注入容器和服务定位器的通用接口。
* [Auryn](https://github.com/rdlowrey/Auryn) - 递归式依赖注入器。
* [Container](https://github.com/thephpleague/container) - 另一款灵活的依赖注入容器。
* [Disco](https://github.com/bitExpert/disco) - 兼容 PSR-11、基于注解的依赖注入容器。
* [PHP-DI](https://php-di.org/) - 支持自动装配的依赖注入容器。
* [Pimple](https://github.com/silexphp/Pimple) - 小巧的依赖注入容器。
* [Symfony DI](https://github.com/symfony/dependency-injection) - 依赖注入容器组件。

### 图像处理
*用于处理图像的库。*

* [Color Extractor](https://github.com/thephpleague/color-extractor) - 从图像中提取颜色的库。
* [Glide](https://github.com/thephpleague/glide) - 按需处理图像的库。
* [Image Hash](https://github.com/jenssegers/imagehash) - 生成图像感知哈希的库。
* [Image Optimizer](https://github.com/psliwa/image-optimizer) - 图像优化库。
* [Imagine](https://imagine.readthedocs.io/en/latest/index.html) - 图像处理库。
* [Intervention Image](https://github.com/Intervention/image) - 另一款图像处理库。
* [PHP Image Workshop](https://github.com/Sybio/ImageWorkshop) - 又一款图像处理库。
* [PHP QR Code](https://github.com/chillerlan/php-qrcode/) - QR Code 生成与读取工具。

### 测试
*用于测试代码库和生成测试数据的库。*

* [Alice](https://github.com/nelmio/alice) - 表达力丰富的测试固件生成库。
* [Behat](https://docs.behat.org/en/latest/) - 行为驱动开发（BDD）测试框架。
* [Codeception](https://github.com/Codeception/Codeception) - 全栈测试框架。
* [Faker](https://github.com/fakerphp/faker) - 生成虚假数据的库。
* [Foundry](https://github.com/zenstruck/foundry) - Doctrine 测试固件工厂生成库。
* [Infection](https://github.com/infection/infection) - 基于 AST 的 PHP 变异测试框架。
* [Kahlan](https://github.com/kahlan/kahlan) - 全栈单元测试/BDD 框架，内置 stub、mock 和代码覆盖率支持。
* [Mink](https://mink.behat.org/en/latest/) - Web 验收测试工具。
* [Mockery](https://github.com/mockery/mockery) - 用于测试的模拟对象库。
* [Nette Tester](https://github.com/nette/tester) - 高效且易用的并行单元测试框架。
* [ParaTest](https://github.com/paratestphp/paratest) - PHPUnit 并行测试库。
* [Pest](https://pestphp.com/) - 注重简洁性的测试框架。
* [Phake](https://github.com/phake/phake) - 另一款用于测试的模拟对象库。
* [PHP-Mock](https://github.com/php-mock/php-mock) - 内置 PHP 函数（如 time()）的模拟库。
* [PHP MySQL Engine](https://github.com/vimeo/php-mysql-engine) - 纯 PHP 编写的 MySQL 引擎。
* [PHPSpec](https://github.com/phpspec/phpspec) - 基于规范驱动设计的单元测试库。
* [PHPT](https://php.github.io/php-src/miscellaneous/writing-tests.html) - PHP 自身使用的测试工具。
* [PHPUnit](https://github.com/sebastianbergmann/phpunit) - 单元测试框架。
* [PHPUnit Polyfills](https://github.com/Yoast/PHPUnit-Polyfills/) - 简化在多个 PHPUnit 版本上运行测试的过程。
* [Prophecy](https://github.com/phpspec/prophecy) - 风格鲜明的模拟对象框架。
* [VFS Stream](https://github.com/bovigo/vfsStream) - 用于测试的虚拟文件系统流包装器。

### 持续集成
*用于持续集成的库和应用。*

* [CircleCI](https://circleci.com) - 持续集成平台。
* [GitLab CI](https://about.gitlab.com/solutions/continuous-integration/) - 持续集成平台。
* [Jenkins](https://www.jenkins.io/) - 提供 [PHP 支持](https://www.jenkins.io/solutions/php/) 的持续集成平台。
* [SemaphoreCI](https://semaphore.io/) - 面向开源和私有项目的持续集成平台。
* [Travis CI](https://www.travis-ci.com) - 持续集成平台。
* [Setup PHP](https://github.com/shivammathur/setup-php) - 用于 PHP 的 GitHub Action。

### 文档
*用于生成项目文档的库。*

* [APIGen](https://github.com/apigen/apigen) - 另一款 API 文档生成器。
* [daux.io](https://github.com/dauxio/daux.io) - 使用 Markdown 文件生成文档的工具。
* [phpDocumentor](https://phpdoc.org/) - 文档生成器。
* [Scramble](https://github.com/dedoc/scramble) - 无需注解，即可从代码自动生成 OpenAPI 文档。
* [zircote/swagger-php](https://github.com/zircote/swagger-php) - 为 RESTful API 生成 OpenAPI 文档。

### 安全
*用于生成安全随机数、加密数据、扫描和测试漏洞的库。*

* [AntiXSS](https://github.com/voku/anti-xss) - 通过黑名单机制尝试防止跨站脚本（XSS）攻击的库。
* [Halite](https://paragonie.com/project/halite) - 使用 [libsodium](https://github.com/jedisct1/libsodium) 加密的简易库。
* [Optimus](https://github.com/jenssegers/optimus) - 基于 Knuth 乘法哈希方法的 ID 混淆工具。
* [OWASP](https://owasp.org/) - 探索网络安全领域。
* [PHPGGC](https://github.com/ambionics/phpggc) - PHP 反序列化载荷库，并附带载荷生成工具。
* [PHP Encryption](https://github.com/defuse/php-encryption) - 安全的 PHP 加密库。
* [PHPSecLib](https://github.com/phpseclib/phpseclib) - 纯 PHP 编写的安全通信库。
* [Roave Security Advisories](https://github.com/Roave/SecurityAdvisories) - 确保应用没有安装存在已知安全漏洞的依赖。
* [Secure Headers](https://github.com/BePsvPT/secure-headers) - 为 HTTP 响应添加安全相关标头的软件包。
* [SQLMap](https://github.com/sqlmapproject/sqlmap) - 自动化 SQL 注入与数据库接管工具。
* [Zap](https://github.com/zaproxy/zaproxy) - Web 应用集成式渗透测试工具。

### 密码
*用于处理和存储密码的库与工具。*

* [GenPhrase](https://github.com/timoh6/GenPhrase) - 生成安全随机口令短语的库。
* [Password Validator](https://github.com/jeremykendall/password-validator) - 验证并升级密码哈希的库。
* [Password-Generator](https://github.com/hackzilla/password-generator) - 用于生成随机密码的 PHP 库。
* [phpass](https://www.openwall.com/phpass/) - 可移植的密码哈希框架。
* [Zxcvbn PHP](https://github.com/bjeavons/zxcvbn-php) - 基于 Zxcvbn JS、能够实际评估密码强度的 PHP 库。

### 代码分析
*用于分析、解析和处理代码库的库与工具。*

* [Better Reflection](https://github.com/Roave/BetterReflection) - 基于 AST 的反射库，可用于分析和处理代码。
* [Bladestan](https://github.com/bladestan/bladestan) - 用于静态分析 Blade 模板的 PHPStan 扩展。
* [Code Climate](https://codeclimate.com) - 自动化代码审查工具。
* [Editorconfig-Checker](https://github.com/editorconfig-checker/editorconfig-checker.php) - 验证文件是否遵循 `.editorconfig` 规则的命令行工具。
* [GrumPHP](https://github.com/phpro/grumphp) - PHP 代码质量工具。
* [PHP AST Viewer](https://php-ast-viewer.com/) - 查看 PHP 代码抽象语法树（AST）的工具。
* [PHP Magic Number Detector](https://github.com/povils/phpmnd) - 检测代码中魔术数字的库。
* [PHP Parser](https://github.com/nikic/PHP-Parser) - 使用 PHP 编写的 PHP 解析器。
* [PHP Semantic Versioning Checker](https://github.com/tomzx/php-semver-checker) - 比较两组源代码并判断应采用何种语义化版本号的命令行工具。
* [Phpactor](https://github.com/phpactor/phpactor) - PHP 代码补全、重构与内省工具。
* [PHPQA](https://github.com/EdgedesignCZ/phpqa) - 用于运行 QA 工具（phploc、phpcpd、phpcs、pdepend、phpmd、phpmetrics）的工具。
* [Rector](https://github.com/rectorphp/rector) - 用于升级和重构代码的工具。
* [Scrutinizer](https://scrutinizer-ci.com/) - 用于[检查 PHP 代码](https://github.com/scrutinizer-ci/php-analyzer)的 Web 工具。
* [UBench](https://github.com/devster/ubench) - 简易微基准测试库。

### 代码质量
*用于管理代码质量、格式和 lint 检查的库。*

* [CaptainHook](https://github.com/captainhook-git/captainhook) - 易用且灵活的 Git 钩子库。
* [Laravel Pint](https://github.com/laravel/pint) - 面向 Laravel 的编码规范修正工具。
* [PHP CodeSniffer](https://github.com/PHPCSStandards/PHP_CodeSniffer) - 检测并自动修复 PHP、CSS 和 JS 编码规范违规的库。
* [PHP CS Fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) - 编码规范修正工具。
* [PHP CS Fixer Configurator](https://mlocati.github.io/php-cs-fixer-configurator/) - 帮助配置 PHP CS Fixer 规则集的 Web 应用。
* [PHP Mess Detector](https://github.com/phpmd/phpmd) - 扫描代码中的错误、欠佳代码、未使用参数等问题的库。
* [PHPCheckstyle](https://github.com/PHPCheckstyle/phpcheckstyle) - 帮助遵循特定编码约定的工具。

### 静态分析
*用于对 PHP 代码执行静态分析的库。*

* [Dead Code Detector](https://github.com/shipmonk-rnd/dead-code-detector) - 用于查找未使用 PHP 代码的 PHPStan 扩展。
* [Deptrac](https://github.com/deptrac/deptrac) - 强制执行架构分层间依赖规则的静态分析工具。
* [Exakat](https://github.com/exakat/exakat) - PHP 静态分析引擎。
* [Larastan](https://github.com/larastan/larastan) - 为 Laravel 项目添加静态分析能力的 PHPStan 封装器。
* [Mago](https://github.com/carthage-software/mago) - 致力于提升开发者体验的 PHP 工具链。
* [phan](https://github.com/phan/phan) - 基于 PHP 7+ 和 php-ast 扩展的静态分析器。
* [PHP Architecture Tester](https://github.com/carlosas/phpat) - 易于使用的架构测试工具。
* [PHPCompatibility](https://github.com/PHPCompatibility/PHPCompatibility) - 面向 PHP CodeSniffer 的 PHP 兼容性检查器。
* [PHPDoc Parser](https://github.com/phpstan/phpdoc-parser) - 新一代 phpDoc 解析器，支持交叉类型和泛型。
* [PHP Metrics](https://github.com/phpmetrics/PhpMetrics) - 静态度量库。
* [PHPStan](https://github.com/phpstan/phpstan) - PHP 静态分析工具。
* [Psalm](https://github.com/vimeo/psalm) - 用于查找 PHP 应用错误的静态分析工具。

### 架构设计
*与设计模式、编程范式及代码组织方式相关的库。*

* [Design Patterns PHP](https://github.com/DesignPatternsPHP/DesignPatternsPHP) - 使用 PHP 实现的软件设计模式集合。
* [Finite](https://github.com/yohang/Finite) - 简易 PHP 有限状态机。
* [Functional PHP](https://github.com/lstrojny/functional-php) - 函数式编程库。
* [Iter](https://github.com/nikic/iter) - 使用生成器提供迭代原语的库。
* [IterTools PHP](https://github.com/markrogoyski/itertools-php) - 提供可迭代对象处理功能的库（类似 Python 的 itertools）。
* [Pipeline](https://github.com/thephpleague/pipeline) - 流水线模式的实现。
* [Porter](https://github.com/ScriptFUSION/Porter) - 用于消费 Web API 和其他数据源的数据导入抽象库。
* [RulerZ](https://github.com/K-Phoen/rulerz) - 强大的规则引擎及 Specification 模式实现。

### 调试与性能分析
*用于调试错误和分析代码性能的库与工具。*

* [APM](https://pecl.php.net/package/APM) - 监控扩展，可将错误和统计数据收集到 SQLite/MySQL/StatsD。
* [Barbushin PHP Console](https://github.com/barbushin/php-console) - 另一款使用 Google Chrome 的 Web 调试控制台。
* [Kint](https://github.com/kint-php/kint) - 调试与性能分析工具。
* [LaraDumps](https://github.com/laradumps/laradumps) - 配有专用桌面应用的 Laravel 调试工具。
* [Metrics](https://github.com/beberlei/metrics) - 简易指标 API 库。
* [PCOV](https://github.com/krakjoe/pcov) - 独立实现且兼容代码覆盖率功能的驱动程序。
* [PHP Console](https://github.com/Seldaek/php-console) - Web 调试控制台。
* [PHP Debug Bar](https://php-debugbar.com/) - 调试工具栏。
* [PHPBench](https://github.com/phpbench/phpbench) - 基准测试框架。
* [PHPSpy](https://github.com/adsr/phpspy) - 低开销采样分析器。
* [Symfony VarDumper](https://github.com/symfony/var-dumper) - 变量转储组件。
* [Tracy](https://github.com/nette/tracy) - 简易错误检测、日志记录和计时库。
* [Trap](https://github.com/buggregator/trap) - 扩展型变量转储器，提供 Web 界面和 IDE 插件。
* [Whoops](https://github.com/filp/whoops) - 美观易用的错误处理库。
* [xDebug](https://github.com/xdebug/xdebug) - PHP 调试与性能分析工具。
* [XHProf](https://github.com/phacility/xhprof) - 最初由 Facebook 开发的性能分析工具。
* [Z-Ray](https://www.zend.com/products/z-ray) - Zend Server 的调试与性能分析工具。

### 错误跟踪与监控服务
*自托管或基于云的应用性能监控与错误跟踪工具。*

* [Blackfire](https://www.blackfire.io) - 低开销代码分析器。
* [Buggregator](https://buggregator.dev) - 调试服务器，可汇总变量转储、性能分析数据、电子邮件、日志和 Sentry 事件。
* [BugSnag](https://www.bugsnag.com/) - 错误监控和真实用户监控。
* [Honeybadger](https://www.honeybadger.io/) - 面向开发者的错误跟踪与应用监控服务。
* [Rollbar](https://rollbar.com/) - 面向软件团队的错误日志与跟踪服务。
* [Sentry](https://sentry.io/welcome/) - 应用性能监控与错误跟踪软件。
* [Tideways](https://tideways.com/) - 监控与性能分析工具。

### 构建工具
*项目构建与自动化工具。*

* [Box](https://github.com/box-project/box) - 用于构建 PHAR 文件的工具。
* [PHPacker](https://github.com/phpacker/phpacker) - 将 PHP 应用编译为独立可执行文件的 PHAR 构建器。
* [Phing](https://www.phing.info/) - 受 Apache Ant 启发的 PHP 项目构建系统。
* [RMT](https://github.com/liip/RMT) - 用于软件版本管理和发布的库。

### 任务运行器
*用于自动化和运行任务的库。*

* [Jobby](https://github.com/jobbyphp/jobby) - 无需修改 crontab 的 PHP cron 任务管理器。
* [Robo](https://github.com/consolidation/Robo) - 使用面向对象配置的 PHP 任务运行器。

### 导航
*用于构建导航结构的工具。*

* [KnpMenu](https://github.com/KnpLabs/KnpMenu) - 菜单库。
* [Menu](https://github.com/spatie/menu) - 提供流畅接口的灵活菜单库。

### 资源管理
*用于管理、压缩和精简网站资源的工具。*

* [JShrink](https://github.com/tedious/JShrink) - JavaScript 压缩库。
* [Laravel Mix](https://github.com/laravel-mix/laravel-mix) - 面向常见使用场景的优雅 Webpack 封装。
* [Symfony Asset](https://github.com/symfony/asset) - 管理 Web 资源的 URL 生成与版本控制。
* [Symfony Encore](https://github.com/symfony/webpack-encore) - 基于 Webpack 构建、用于处理和编译资源的简洁强大 API。

### 地理位置
*用于地址地理编码以及处理经纬度的库。*

* [Country List](https://github.com/umpirsky/country-list) - 包含所有国家/地区名称及 ISO 3166-1 代码的列表。
* [GeoCoder](https://geocoder-php.org/) - 地理编码库。
* [GeoJSON](https://github.com/jmikola/geojson) - GeoJSON 实现。
* [GeoTools](https://github.com/thephpleague/geotools) - 地理信息相关工具库。
* [PHPGeo](https://github.com/mjaschen/phpgeo) - 简易地理信息库。

### 日期与时间
*用于处理日期和时间的库。*

* [Business Time](https://github.com/kylekatarnls/business-time) - 用于处理营业时间和工作日的 Carbon 扩展。
* [CalendR](https://github.com/yohang/CalendR) - 日历管理库。
* [Carbon](https://github.com/briannesbitt/Carbon) - 简易 DateTime API 扩展。
* [Chronos](https://github.com/cakephp/chronos) - 支持可变与不可变日期时间的 DateTime API 扩展。
* [Moment.php](https://github.com/fightbulc/moment.php) - 受 Moment.js 启发、支持国际化的 PHP 日期时间处理器。
* [PHP RRule](https://github.com/rlanvin/php-rrule) - 基于 iCalendar RRule 规范处理重复日期和时间的库。
* [Yasumi](https://github.com/azuyalabs/yasumi) - 帮助计算节假日日期和名称的库。

### 事件
*采用事件驱动模式或实现非阻塞事件循环的库。*

* [Amp](https://github.com/amphp/amp) - 事件驱动的非阻塞 I/O 库。
* [Broadway](https://github.com/broadway/broadway) - 事件溯源与 CQRS 库。
* [CakePHP Event](https://github.com/cakephp/event) - 事件分发器库。
* [Elephant.io](https://github.com/ElephantIO/elephant.io) - 又一款 WebSocket 库。
* [Evenement](https://github.com/igorw/evenement) - 事件分发器库。
* [Event](https://github.com/thephpleague/event) - 专注于领域事件的事件库。
* [Fast CGI Client](https://github.com/hollodotme/fast-cgi-client) - 通过 php-fpm 套接字发起同步或异步请求的客户端。
* [FrankenPHP](https://frankenphp.dev/) - 使用 Go 编写的现代 PHP 应用服务器。
* [Pawl](https://github.com/ratchetphp/Pawl) - 异步 WebSocket 客户端。
* [Prooph Event Store](https://github.com/prooph/event-store) - 用于持久化事件消息的事件溯源组件。
* [PHP Defer](https://github.com/php-defer/php-defer) - 为 PHP 带来类似 Golang defer 语句的功能。
* [Ratchet](https://github.com/ratchetphp/Ratchet) - WebSocket 库。
* [ReactPHP](https://github.com/reactphp/reactphp) - 事件驱动的非阻塞 I/O 库。
* [RxPHP](https://github.com/ReactiveX/RxPHP) - 响应式扩展库。
* [Swoole](https://github.com/swoole/swoole-src) - 使用 C 编写的高性能 PHP 网络通信框架，支持事件驱动、异步和并发。
* [Workerman](https://github.com/walkor/Workerman) - 事件驱动的非阻塞 I/O 库。

### 日志记录
*用于生成和处理日志文件的库。*

* [Monolog](https://github.com/Seldaek/monolog) - 功能全面的日志记录器。

### 电子商务
*用于收款和构建在线商店的库与应用。*

* [Money](https://github.com/moneyphp/money) - Fowler 货币模式的 PHP 实现。
* [Brick Money](https://github.com/brick/money) - 支持上下文、现金舍入和货币转换的 PHP 货币库。
* [OmniPay](https://github.com/thephpleague/omnipay) - 与框架无关、支持多个支付网关的支付处理库。
* [Payum](https://github.com/payum/payum) - 支付抽象库。
* [Shopsys Framework](https://github.com/shopsys/shopsys/) - 面向内部开发团队的开源电子商务平台。
* [Shopware](https://github.com/shopware/shopware) - 高度可定制的电子商务软件。
* [Swap](https://github.com/florianv/swap) - 汇率库。
* [Sylius](https://sylius.com/) - 开源电子商务解决方案。

### PDF
*用于处理 PDF 文件的库和软件。*

* [Browsershot](https://github.com/spatie/browsershot) - 将 HTML 转换为图像、PDF 或字符串。
* [Dompdf](https://github.com/dompdf/dompdf) - HTML 转 PDF 转换器。
* [Gotenberg](https://github.com/gotenberg/gotenberg-php) - 用于与 Gotenberg 交互的 PHP 客户端。
* [Snappy](https://github.com/KnpLabs/snappy) - PDF 和图像生成库。
* [TCPDF](https://tcpdf.org/) - 用于生成 PDF 文档的开源 PHP 类库。

### 办公软件
*用于处理办公套件文档的库。*

* [PHPPowerPoint](https://github.com/PHPOffice/PHPPresentation) - 用于处理 Microsoft PowerPoint 演示文稿的库。
* [PHPWord](https://github.com/PHPOffice/PHPWord) - 用于处理 Microsoft Word 文档的库。
* [PHPSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet) - 纯 PHP 编写的电子表格读写库（PHPExcel 的后继项目）。
* [OpenSpout](https://github.com/openspout/openspout) - 社区维护的 `box/spout` 分支，这是一个快速、可扩展的 PHP 电子表格读写库，支持 CSV、XLSX 和 ODS。

### 数据库
*使用对象关系映射（ORM）或数据映射技术与数据库交互的库。*

* [Atlas.Orm](https://github.com/atlasphp/Atlas.Orm) - PHP 持久化模型的数据映射器实现。
* [Aura.Sql](https://github.com/auraphp/Aura.Sql) - 扩展原生 PDO，并提供分析器和连接定位器。
* [Aura.SqlQuery](https://github.com/auraphp/Aura.SqlQuery) - 面向 MySQL、PostgreSQL、SQLite 和 Microsoft SQL Server 的独立查询构造器。
* [Baum](https://github.com/etrepat/baum) - Eloquent 的嵌套集实现。
* [CakePHP ORM](https://github.com/cakephp/orm) - 使用 DataMapper 模式实现的对象关系映射器。
* [Cycle ORM](https://github.com/cycle/orm) - PHP 数据映射器及 ORM。
* [Doctrine Extensions](https://github.com/doctrine-extensions/DoctrineExtensions) - Doctrine 行为扩展集合。
* [Doctrine](https://www.doctrine-project.org/) - 功能全面的 DBAL 和 ORM。
* [Laravel Eloquent](https://github.com/illuminate/database) - 简易 ORM。
* [ProxyManager](https://github.com/Ocramius/ProxyManager) - 用于为数据映射器生成代理对象的一组工具。
* [RedBean](https://redbeanphp.com/index.php) - 轻量、无需配置的 ORM。
* [Slimdump](https://github.com/webfactory/slimdump) - 易用的 MySQL 转储工具。
* [Spot2](https://github.com/spotorm/spot2) - MySQL 数据映射器 ORM。

### 迁移
*帮助管理数据库架构和迁移的库。*

* [Doctrine Migrations](https://www.doctrine-project.org/projects/migrations.html) - Doctrine 的迁移库。
* [Phinx](https://github.com/cakephp/phinx) - 另一款数据库迁移库。
* [PHPMig](https://github.com/davedevelopment/phpmig) - 另一款迁移管理库。
* [Ruckusing](https://github.com/ruckus/ruckusing-migrations) - PHP 数据库迁移工具，仿照 ActiveRecord Migrations，支持 MySQL、Postgres 和 SQLite。

### NoSQL
*用于处理“NoSQL”后端的库。*

* [MongoDB](https://github.com/mongodb/mongo-php-driver) - MongoDB PHP 驱动程序。
* [MongoDB PHP Library](https://github.com/mongodb/mongo-php-library) - 官方高级 MongoDB PHP 库，构建于 MongoDB PHP Driver 之上。
* [Predis](https://github.com/predis/predis) - 功能齐全的 Redis 库。

### 队列
*用于处理事件队列和任务队列的库。*

* [BunnyPHP](https://github.com/jakubkulhan/bunny) - 高性能纯 PHP AMQP（RabbitMQ）库，支持同步和异步（ReactPHP）操作。
* [Pheanstalk](https://github.com/pheanstalk/pheanstalk) - Beanstalkd 客户端库。
* [PHP AMQP](https://github.com/php-amqplib/php-amqplib) - 纯 PHP AMQP 库。
* [Tarantool Queue](https://github.com/tarantool-php/queue) - Tarantool Queue 的 PHP 绑定。
* [Thumper](https://github.com/php-amqplib/Thumper) - RabbitMQ 模式库。
* [Enqueue](https://github.com/php-enqueue/enqueue-dev) - PHP 消息队列软件包，支持 RabbitMQ、AMQP、STOMP、Amazon SQS、Redis 和 Doctrine 传输层。

### 搜索
*用于为数据建立索引并执行搜索查询的库和软件。*

* [Elastica](https://github.com/ruflin/Elastica) - ElasticSearch 客户端库。
* [ElasticSearch PHP](https://github.com/elastic/elasticsearch-php) - 官方 [ElasticSearch](https://www.elastic.co/) 客户端库。
* [Solarium](https://www.solarium-project.org/) - [Solr](https://solr.apache.org/) 客户端库。
* [SphinxQL Query Builder](https://foolcode.github.io/SphinxQL-Query-Builder/) - 面向 [Sphinx](https://sphinxsearch.com/) 和 [Manticore](https://manticoresearch.com/) 搜索引擎的查询库。

### 命令行
*与命令行相关的库。*

* [Aura.Cli](https://github.com/auraphp/Aura.Cli) - 为命令行界面提供相当于请求（Context）和响应（Stdio）的对象，包括 Getopt 支持；还提供独立的 Help 对象用于描述命令。
* [CLI Menu](https://github.com/php-school/cli-menu) - 用于构建 CLI 菜单的库。
* [CLIFramework](https://github.com/c9s/CLIFramework) - 命令行框架，支持生成 zsh/bash 补全、子命令和选项约束；也是 phpbrew 的底层框架。
* [CLImate](https://github.com/thephpleague/climate) - 用于输出颜色和特殊格式的库。
* [Commando](https://github.com/nategood/commando) - 另一款简单的命令行选项解析器。
* [Cron Expression](https://github.com/mtdowling/cron-expression) - 用于计算 cron 运行日期的库。
* [GetOpt](https://github.com/getopt-php/getopt-php) - 命令行选项解析器。
* [GetOptionKit](https://github.com/c9s/GetOptionKit) - 另一款命令行选项解析器。
* [PsySH](https://github.com/bobthecow/psysh) - 另一款 PHP REPL。
* [ShellWrap](https://github.com/MrRio/shellwrap) - 简易命令行封装库。

### 身份验证与授权
*用于实现用户身份验证和授权的库。*

* [Aura.Auth](https://github.com/auraphp/Aura.Auth) - 使用多种适配器提供身份验证功能和会话跟踪。
* [SocialConnect Auth](https://github.com/socialConnect/auth) - 开源社交登录（OAuth1\OAuth2\OpenID\OpenIDConnect）库。
* [Json Web Token](https://github.com/lcobucci/jwt) - 用于身份验证和信息传输的 JSON 令牌。
* [OAuth 1.0 Client](https://github.com/thephpleague/oauth1-client) - OAuth 1.0 客户端库。
* [OAuth 2.0 Client](https://github.com/thephpleague/oauth2-client) - OAuth 2.0 客户端库。
* [OAuth2 Server](https://bshaffer.github.io/oauth2-server-php-docs/) - 另一种 OAuth2 服务器实现。
* [OAuth2 Server](https://oauth2.thephpleague.com/) - OAuth2 身份验证服务器、资源服务器及客户端库。
* [Paseto](https://github.com/paragonie/paseto) - 与平台无关的安全令牌。
* [PHP oAuthLib](https://github.com/daviddesberg/PHPoAuthLib) - 另一款 OAuth 库。
* [TwitterOAuth](https://github.com/abraham/twitteroauth) - Twitter OAuth 库。

### 标记语言与 CSS
*用于处理标记语言和 CSS 格式的库。*

* [Carve](https://github.com/markup-carve/carve-php) - [Carve](https://markup-carve.github.io/carve/) 解析器；Carve 是一种源自 Markdown 和 Djot 的轻量标记语言。
* [Cebe Markdown](https://github.com/cebe/markdown) - 快速且可扩展的 Markdown 解析器。
* [CommonMark PHP](https://github.com/thephpleague/commonmark) - 高度可扩展的 Markdown 解析器，完整支持 [CommonMark 规范](https://spec.commonmark.org/)。
* [Decoda](https://github.com/milesj/decoda) - 轻量标记语言解析库。
* [Djot](https://github.com/php-collective/djot-php) - [Djot](https://djot.net/) 解析器；Djot 是一种现代轻量标记语言，也是 Markdown 的后继者。
* [Essence](https://github.com/essence/essence) - 提取 Web 媒体信息的库。
* [Embera](https://github.com/mpratt/Embera) - OEmbed 内容消费库。
* [HTML to Markdown](https://github.com/thephpleague/html-to-markdown) - 将 HTML 转换为 Markdown。
* [HTML5 PHP](https://github.com/Masterminds/html5-php) - HTML5 解析与序列化库。
* [Parsedown](https://github.com/erusev/parsedown) - 另一款 Markdown 解析器。
* [PHP CSS Parser](https://github.com/MyIntervals/PHP-CSS-Parser) - 使用 PHP 编写的 CSS 文件解析器。
* [PHP Markdown](https://github.com/michelf/php-markdown) - Markdown 解析器。
* [Shiki PHP](https://github.com/spatie/shiki-php) - PHP 版 [Shiki](https://github.com/shikijs/shiki) 代码高亮软件包。
* [VObject](https://github.com/sabre-io/vobject) - 解析 VCard 和 iCalendar 对象的库。

### JSON
*用于处理 JSON 的库。*

* [JSON Lint](https://github.com/Seldaek/jsonlint) - JSON lint 检查工具。
* [JSONMapper](https://github.com/JsonMapper/JsonMapper) - 将 JSON 映射为 PHP 对象的库。
* [Lazy JSON](https://github.com/cerbero90/lazy-json) - 用于解析大型 JSON 文件、节省内存的惰性解析器。

### 字符串
*用于解析和处理字符串的库。*

* [Agent](https://github.com/jenssegers/agent) - 基于 Mobiledetect 的 PHP 桌面/移动设备 User-Agent 解析器。
* [ANSI to HTML5](https://github.com/sensiolabs/ansi-to-html) - ANSI 到 HTML5 的转换库。
* [Color Jizz](https://github.com/mikeemoo/ColorJizz-PHP) - 处理和转换颜色的库。
* [Device Detector](https://github.com/matomo-org/device-detector) - 另一款 User-Agent 字符串解析库。
* [Hyphenation](https://github.com/heiglandreas/Org_Heigl_Hyphenator) - 基于 TeX 断词算法的文本断词工具。
* [Jieba-PHP](https://github.com/fukuball/jieba-php) - Python jieba 的 PHP 移植版，用于自然语言处理的中文分词工具。
* [Mobile-Detect](https://github.com/serbanghita/Mobile-Detect) - 用于检测移动设备（包括平板电脑）的轻量 PHP 类。
* [Patchwork UTF-8](https://github.com/nicolas-grekas/Patchwork-UTF8) - 便携式 UTF-8 字符串处理库。
* [Portable ASCII](https://github.com/voku/portable-ascii) - 将字符串转换为 ASCII 的库。
* [Portable UTF-8](https://github.com/voku/portable-utf8) - 提供 UTF-8 安全替换方法的字符串处理库。
* [Slugify](https://github.com/cocur/slugify) - 将字符串转换为 slug 的库。
* [SQL Formatter](https://github.com/jdorn/sql-formatter/) - SQL 语句格式化库。
* [Stringy](https://github.com/voku/Stringy) - 支持多字节字符的字符串处理库。
* [Url highlight](https://github.com/vstelmakh/url-highlight) - 从文本中解析 URL 并将其转换为可点击链接的库。
* [URLify](https://github.com/jbroadway/urlify) - Django URLify.js 的 PHP 移植版。
* [UUID](https://github.com/ramsey/uuid) - 生成 UUID 的库。

### 数字
*用于处理数字的库。*

* [Brick Math](https://github.com/brick/math) - 提供大数支持的库：`BigInteger`、`BigDecimal` 和 `BigRational`。
* [ByteUnits](https://github.com/gabrielelana/byte-units) - 解析、格式化并转换二进制和公制字节单位的库。
* [DecimalObject](https://github.com/php-collective/decimal-object) - 便于更精确地处理十进制数和浮点数的值对象。
* [IP](https://github.com/darsyn/ip) - 用于处理 IPv4 和 IPv6 地址的不可变值对象。
* [PHP Conversion](https://github.com/cniska/php-conversion) - 另一款计量单位转换库。
* [PHP Units of Measure](https://github.com/triplepoint/php-units-of-measure) - 计量单位转换库。
* [MathPHP](https://github.com/markrogoyski/math-php) - PHP 数学库。

### 筛选、净化与验证
*用于筛选、净化和验证数据的库。*

* [Assert](https://github.com/beberlei/assert) - 提供丰富断言的验证库，支持断言链和惰性断言。
* [Aura.Filter](https://github.com/auraphp/Aura.Filter) - 提供验证和净化对象及数组的工具。
* [CakePHP Validation](https://github.com/cakephp/validation) - 另一款验证库。
* [Filterus](https://github.com/ircmaxell/filterus) - 简易 PHP 筛选库。
* [HTML Purifier](https://github.com/ezyang/htmlpurifier) - 符合标准的 HTML 过滤器。
* [ISO-codes](https://github.com/ronanguilloux/IsoCodes) - 根据 ISO、国际金融、公共管理、GS1、图书行业等标准，以及电话号码和各国邮政编码规范验证输入的库。
* [JSON Schema](https://github.com/jsonrainbow/json-schema) - [JSON Schema](https://json-schema.org/) 验证库。
* [LibPhoneNumber for PHP](https://github.com/giggsey/libphonenumber-for-php) - Google 电话号码处理库的 PHP 实现。
* [MetaYaml](https://github.com/romaricdrigon/MetaYaml) - 支持 YAML、JSON 和 XML 的架构验证库。
* [Respect Validation](https://github.com/Respect/Validation) - 简易验证库。
* [Symfony HTML Sanitizer](https://github.com/symfony/html-sanitizer) - HTML 净化器库。
* [Valitron](https://github.com/vlucas/valitron) - 另一款验证库。
* [Valinor](https://github.com/CuyZ/Valinor) - 将数据映射到强类型值对象的库。
* [Volan](https://github.com/serkin/Volan) - 另一款简化的验证库。

### API
*用于开发 API 的库和 Web 工具。*

* [API Platform](https://api-platform.com) - 几分钟内即可发布遵循 JSON-LD 和 Hydra 格式的超媒体 REST API。
* [Laminas API Tool Skeleton](https://github.com/laminas-api-tools/api-tools-skeleton) - 基于 Laminas Framework 构建的 API 创建工具。
* [HAL](https://github.com/blongden/hal) - 超文本应用语言（HAL）构建库。
* [Hateoas](https://github.com/willdurand/Hateoas) - HATEOAS REST Web 服务库。
* [Jane](https://github.com/janephp/janephp/) - 支持验证的 OpenAPI 客户端生成器。
* [Negotiation](https://github.com/willdurand/Negotiation) - 内容协商库。
* [Restler](https://github.com/Luracast/Restler) - 将 PHP 方法公开为 RESTful Web API 的轻量框架。
* [PackageGenerator](https://github.com/WsdlToPhp/PackageGenerator) - 从任意 WSDL 生成 PHP SDK。

### 缓存与锁
*用于缓存数据和获取锁的库。*

* [APIx Cache](https://github.com/apix/cache) - 适配多种缓存后端的轻量 PSR-6 缓存封装，侧重缓存标签和索引。
* [CacheTool](https://github.com/gordalina/cachetool) - 从命令行清除 APC/opcode 缓存的工具。
* [CakePHP Cache](https://github.com/cakephp/cache) - 缓存库。
* [Doctrine Cache](https://github.com/doctrine/cache) - 缓存库。
* [Metaphore](https://github.com/sobstel/metaphore) - 使用信号量防止缓存击穿和惊群效应。
* [Stash](https://github.com/tedious/Stash) - 另一款缓存库。
* [Laminas Cache](https://github.com/laminas/laminas-cache) - 另一款缓存库。
* [Lock](https://github.com/php-lock/lock) - 提供排他执行能力的锁库。

### 数据结构与存储
*实现数据结构或存储技术的库。*

* [CakePHP Collection](https://github.com/cakephp/collection) - 简易集合库。
* [Fractal](https://github.com/thephpleague/fractal) - 将复杂数据结构转换为 JSON 输出的库。
* [JsonMapper](https://github.com/cweiske/jsonmapper) - 将嵌套 JSON 结构映射到 PHP 类的库。
* [JSON Machine](https://github.com/halaxa/json-machine) - 通过简单的 `foreach` 遍历超大型 JSON 数据。
* [msgpack.php](https://github.com/rybakit/msgpack.php) - [MessagePack](https://msgpack.org/) 序列化格式的纯 PHP 实现。
* [Serializer](https://github.com/schmittjoh/serializer) - 数据序列化与反序列化库。
* [YaLinqo](https://github.com/Athari/YaLinqo) - 面向 PHP 对象的又一个 LINQ 实现。
* [Laminas Serializer](https://github.com/laminas/laminas-serializer) - 另一款数据序列化与反序列化库。

### 通知
*用于处理通知软件的库。*

* [JoliNotif](https://github.com/jolicode/JoliNotif) - 跨平台桌面通知库（支持 Growl、notify-send、toaster 等）。

### 部署
*用于项目部署的库。*

* [Deployer](https://github.com/deployphp/deployer) - 部署工具。
* [Envoy](https://github.com/laravel/envoy) - 使用 PHP 运行 SSH 任务的工具。

### 国际化与本地化
*国际化（I18n）和本地化（L10n）库。*

* [Aura.Intl](https://github.com/auraphp/Aura.Intl) - 提供国际化（I18N）工具，特别支持按语言区域组织、以软件包为单位的消息翻译。
* [CakePHP I18n](https://github.com/cakephp/i18n) - 消息翻译，以及日期和数字的本地化。

### 无服务器
*帮助构建无服务器 Web 应用的库与工具。*

* [Bref](https://bref.sh/) - 在 AWS Lambda 上运行无服务器 PHP。
* [OpenWhisk](https://openwhisk.apache.org/) - 开源无服务器云平台。
* [Serverless Framework](https://www.serverless.com/framework) - 用于构建无服务器应用的开源框架。
* [Laravel Vapor](https://vapor.laravel.com/) - 由 AWS 提供支持的 Laravel 无服务器部署平台。

### 配置
*用于配置的库与工具。*

* [PHP Dotenv](https://github.com/vlucas/phpdotenv) - 解析并加载 `.env` 文件中的环境变量。
* [Symfony Dotenv](https://github.com/symfony/dotenv) - 解析并加载 `.env` 文件中的环境变量。
* [Toml](https://github.com/php-collective/toml) - 支持 AST 访问和错误恢复的 TOML 解析器与编码器。

### 大语言模型
*用于处理大语言模型的库。*

* [Anthropic](https://github.com/mozex/anthropic-php) - Anthropic API 的 PHP 客户端，支持消息、流式传输、工具调用和批处理。
* [Anthropic for Laravel](https://github.com/mozex/anthropic-laravel) - Anthropic PHP 客户端的 Laravel 封装，提供 Facade、配置发布和测试替身。
* [Instructor for PHP](https://github.com/cognesy/instructor-php) - 使用 PHP 和大语言模型生成结构化数据输出。
* [LLPhant](https://github.com/LLPhant/LLPhant) - 功能全面的 PHP 生成式 AI 框架，使用 OpenAI GPT 4，设计灵感来自 Langchain。
* [OpenAI Client](https://github.com/openai-php/client) - 社区维护的增强型 OpenAI PHP API 客户端，可与 OpenAI API 交互。
* [OpenAI Client for Laravel](https://github.com/openai-php/laravel) - 面向 Laravel 的增强型 OpenAI PHP API 客户端，可与 OpenAI API 交互。
* [PHP Mistral AI SDK](https://github.com/SoftCreatR/php-mistral-ai-sdk) - 功能强大且易用的 Mistral AI API PHP SDK，可将先进的 AI 功能无缝集成到 PHP 项目中。

### 第三方 API
*用于访问第三方 API 的库。*

* [Amazon Web Service SDK](https://github.com/aws/aws-sdk-php) - 官方 PHP AWS SDK。
* [AsyncAWS](https://async-aws.com/) - 非官方异步 PHP AWS SDK。
* [Campaign Monitor](https://campaignmonitor.github.io/createsend-php/) - 官方 Campaign Monitor PHP 库。
* [Github](https://github.com/KnpLabs/php-github-api) - 用于调用 Github API 的库。
* [Mailgun](https://github.com/mailgun/mailgun-php) - 官方 Mailgun PHP API。
* [Stripe](https://github.com/stripe/stripe-php) - 官方 Stripe PHP 库。
* [Twilio](https://github.com/twilio/twilio-php) - 官方 Twilio PHP REST API。

### 扩展
*帮助构建 PHP 扩展的库。*

* [PHP CPP](https://www.php-cpp.com/) - 用于开发 PHP 扩展的 C++ 库。
* [Zephir](https://github.com/zephir-lang/zephir) - 用于开发 PHP 扩展、介于 PHP 和 C++ 之间的编译型语言。

### 其他
*不属于以上类别的实用库或工具。*

* [Annotations](https://github.com/doctrine/annotations) - 注解库（Doctrine 的一部分）。
* [BotMan](https://github.com/botman/botman) - 与框架无关的 PHP 库，用于构建跨平台聊天机器人。
* [ClassPreloader](https://github.com/ClassPreloader/ClassPreloader) - 优化自动加载的库。
* [Ganesha](https://github.com/ackintosh/ganesha) - PHP 断路器模式实现。
* [Hprose-PHP](https://github.com/hprose/hprose-php) - 跨语言 RPC。
* [Laravel Serializable Closure](https://github.com/laravel/serializable-closure) - 支持序列化闭包的库。
* [noCAPTCHA](https://github.com/ARCANEDEV/noCAPTCHA) - Google noCAPTCHA（reCAPTCHA）的辅助工具。
* [Pagerfanta](https://github.com/whiteoctober/Pagerfanta) - 分页库。
* [Safe](https://github.com/thecodingmachine/safe) - 重写所有 PHP 函数，使其抛出异常而非返回 false。

# 软件
*用于搭建开发环境的软件。*

### PHP 安装
*帮助在计算机上安装和管理 PHP 的工具。*

* [Brew PHP Switcher](https://github.com/philcook/brew-php-switcher) - Brew PHP 版本切换工具。
* [Homebrew](https://brew.sh/) - macOS 软件包管理器。
* [PHP Brew](https://github.com/phpbrew/phpbrew) - PHP 版本管理器和安装器。
* [PHP Build](https://github.com/php-build/php-build) - 另一款 PHP 版本安装器。
* [Static PHP CLI](https://github.com/crazywhalecc/static-php-cli) - 构建或[下载](https://dl.static-php.dev/static-php-cli/) PHP CLI 和 FPM 的静态版本。

### 开发环境
*用于创建和共享开发环境的软件与工具。*

* [Ansible](https://www.redhat.com/en/ansible-collaborative) - 极简而强大的编排框架。
* [DDEV](https://github.com/ddev/ddev) - PHP 本地 Web 开发环境系统。
* [Docker](https://www.docker.com/) - 容器化平台。
* [Docker PHP Extension Installer](https://github.com/mlocati/docker-php-extension-installer) - 在 Docker 容器中轻松安装 PHP 扩展。
* [Docksal](https://github.com/docksal/docksal) - 由 Docker :whale: 驱动、适用于 macOS、Windows 和 Linux 的统一 Web 开发环境。
* [Expose](https://github.com/exposedev/expose) - 开源 PHP 隧道服务。
* [Lando](https://lando.dev/) - 一键启动的开发环境。
* [Laravel Homestead](https://laravel.com/docs/master/homestead) - Laravel 本地开发环境。
* [Laravel Herd](https://herd.laravel.com/windows) - 适用于 macOS 和 Windows 的一键式 PHP 开发环境。
* [Laradock](https://laradock.io/) - 基于 Docker 的完整 PHP 开发环境。
* [PHPMon](https://phpmon.app/) - 用于管理 PHP 安装的 macOS 菜单栏应用（兼容 [Laravel Valet](https://laravel.com/docs/master/valet)）。
* [Puppet](https://www.puppet.com) - 服务器自动化框架与应用。
* [Solo](https://github.com/soloterm/solo) - 用于管理 Laravel 应用进程的终端程序。
* [Takeout](https://github.com/tighten/takeout) - 基于 Docker、仅用于开发环境的依赖管理器。
* [Vagrant](https://developer.hashicorp.com/vagrant) - 可移植的开发环境工具。

### 虚拟机
*其他 PHP 虚拟机。*

* [Hack](https://hacklang.org/) - 面向 HHVM 的编程语言。
* [HHVM](https://github.com/facebook/hhvm) - Facebook 推出的 PHP 虚拟机、运行时和 JIT。
* [PeachPie](https://github.com/peachpiecompiler/peachpie) - 面向 .NET 和 .NET Core 的 PHP 编译器与运行时。

### 文本编辑器与 IDE
*支持 PHP 的文本编辑器和集成开发环境（IDE）。*

* [Eclipse for PHP Developers](https://www.eclipse.org/downloads/) - 基于 Eclipse 平台的 PHP IDE。
* [Apache NetBeans](https://netbeans.apache.org/front/main/index.html) - 支持 PHP 和 HTML5 的 IDE。
* [PhpEd](https://www.nusphere.com/products/phped.htm) - 配有专业商业调试器的 IDE。
* [PhpStorm](https://www.jetbrains.com/phpstorm/) - 商业 PHP IDE。
* [VS Code](https://code.visualstudio.com/) - 开源代码编辑器。

### Web 应用
*基于 Web 的应用和工具。*

* [3V4L](https://3v4l.org/) - 在线 PHP 和 HHVM shell。
* [Adminer](https://www.adminer.org/en/) - 仅用一个 PHP 文件即可运行的数据库管理工具。
* [Cachet](https://github.com/cachethq/cachet) - 开源状态页系统。
* [Lychee](https://github.com/electerious/Lychee) - 易用且美观的照片管理系统。
* [Leantime](https://leantime.io) - 面向非项目经理的战略项目管理系统。
* [MailCatcher](https://github.com/sj26/mailcatcher) - 用于捕获和查看电子邮件的 Web 工具。
* [Mailpit](https://github.com/axllent/mailpit) - 面向开发者的电子邮件和 SMTP 测试工具。
* [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - MySQL/MariaDB 的 Web 管理界面。
* [PHP Queue](https://github.com/CoderKungfu/php-queue) - 用于管理队列后端的应用。
* [phpRedisAdmin](https://github.com/ErikDubbelboer/phpRedisAdmin) - 管理 [Redis](https://redis.io/) 数据库的简易 Web 界面。
* [PHPSandbox](https://phpsandbox.io) - 浏览器中的在线 PHP IDE。

### 基础设施
*用于提供 PHP 应用和服务的基础设施。*

* [appserver.io](https://github.com/appserver-io/appserver) - 使用 PHP 编写的多线程应用服务器。
* [php-pm](https://github.com/php-pm/php-pm) - PHP 应用的进程管理器、性能增强器和负载均衡器。
* [RoadRunner](https://github.com/roadrunner-server/roadrunner) - 高性能 PHP 应用服务器、负载均衡器和进程管理器。

# 资源
用于提升 PHP 开发技能和知识的各类资源，例如书籍、网站和文章。

### PHP 网站
*实用的 PHP 相关网站。*

* [Nomad PHP](https://nomadphp.com/) - 在线 PHP 学习资源。
* [Laravel News](https://laravel-news.com/) - Laravel 官方博客。
* [PHP Annotated Monthly](https://blog.jetbrains.com/phpstorm/tag/php-annotated-monthly/) - 每月一期的 PHP 新闻摘要。
* [PHP FIG](https://www.php-fig.org/) - PHP 框架互操作性工作组。
* [PHP Package Development Standards](https://php-pds.com/) - PHP 软件包开发标准。
* [PHP School](https://www.phpschool.io/) - PHP 开源学习平台。
* [PHP The Right Way](https://phptherightway.com/) - PHP 最佳实践速查指南。
* [PHP UG](https://php.ug) - 帮助用户查找附近 PHP 用户组（UG）的网站。
* [PHP Watch](https://php.watch/) - PHP 文章、新闻、即将推出的变更、RFC 等内容。
* [Unit Testing Tips](https://testing-tips.sarvendev.com/) - 通过 PHP 示例讲解单元测试技巧。

### PHP 图书
*精彩的 PHP 相关图书。*

* [Domain-Driven Design in PHP](https://leanpub.com/ddd-in-php) - 通过 PHP 实例展示 DDD 架构风格。
* [Functional Programming in PHP](https://www.functionalphp.com/) - 介绍如何在 PHP 中应用函数式编程原则和技巧的图书。
* [Mastering Object-Orientated PHP](https://masteringobjectorientedphp.com/) - Brandon Savage 撰写的面向对象 PHP 图书。
* [PHP Cookbook](https://www.oreilly.com/library/view/php-cookbook/9781098121310/) - 提供代码示例，帮助解决各种编程问题。
* [Modernizing Legacy Applications in PHP](https://leanpub.com/mlaphp) - Paul M. Jones 撰写的 PHP 遗留应用现代化指南。
* [Scaling PHP Applications](https://www.scalingphpbook.com) - Steve Corona 撰写的 PHP 应用扩展电子书。
* [Securing PHP: Core Concepts](https://leanpub.com/securingphp-coreconcepts) - Chris Cornutt 撰写的 PHP 常见安全术语与实践指南。
* [Signaling PHP](https://leanpub.com/signalingphp) - Cal Evans 撰写的 CLI 脚本中捕获 PCNTL 信号的指南。
* [XML Parsing with PHP](https://www.phparch.com/books/xml-parsing-with-php/) - 介绍如何解析和验证 XML 文档、使用 XPath 表达式和命名空间，以及以编程方式创建和修改 XML 文件。

### PHP 视频
*精彩的 PHP 相关视频。*

* [Laracasts](https://laracasts.com) - 关于 Laravel、Vue JS 等主题的屏幕录制课程。
* [Laravel YouTube Channel](https://www.youtube.com/channel/UCfO2GiQwb-cwJTb1CuRSkwg) - Laravel 官方 YouTube 频道。
* [Program With Gio](https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-) - Gio 主讲的 PHP 8 课程。
* [Programming with Anthony](https://www.youtube.com/playlist?list=PLM-218uGSX3DQ3KsB5NJnuOqPqc5CW2kW) - Anthony Ferrara 制作的视频系列。
* [SymfonyCasts](https://symfonycasts.com/) - 关于 PHP 和 Symfony 的屏幕录制课程与教程。

### PHP 会议
*PHP 相关会议。*

* [Laracon EU](https://www.youtube.com/@LaraconEU) - 为期两天的活动，面向希望学习 Laravel 及相关技术，或愿意与他人分享知识的人士。
* [PHP[TEK]](https://phptek.io/) - 美国历史最悠久的 Web 开发者会议，重点关注 PHP 编程语言。
* [PHP UK Conference](https://www.youtube.com/user/phpukconference/videos) - PHP UK Conference 的视频合集。

### PHP 播客
*聚焦 PHP 主题的播客。*

* [Laravel News Podcast](https://podcast.laravel-news.com/) - 为你带来 Laravel PHP Framework 的最新新闻与活动。
* [Mostly Technical](https://mostlytechnical.com/) - Ian Landsman 和 Aaron Francis 主持，畅谈 Laravel、商业及其他相关话题。
* [No Compromises](https://show.nocompromises.io/) - 两位经验丰富的资深程序员结合多年 Laravel SaaS 团队经验，讨论最佳实践。
* [North Meets South Web Podcast](https://www.northmeetssouth.audio/) - Jacob Bennett 和 Michael Dyrynda 克服 14.5 小时时差，畅谈 Web 开发者的生活。
* [Over Engineered](https://overengineered.fm/) - 以迷你系列节目深入探讨那些无关紧要的编程问题。
* [PHP Internals News](https://phpinternals.news) - 关于 PHP 内核的播客。
* [PHP Town Hall](https://phptownhall.com/) - Ben Edmunds 和 Phil Sturgeon 主持的轻松 PHP 播客。
* [php[podcast] episodes from php[architect]](https://www.phparch.com/podcast/) - php[architect] 的官方播客；该刊物是专注于 PHP 和 Web 开发的知名技术杂志与出版商。
* [PHPUgly](https://www.phpugly.com/) - 几位过劳 PHP 开发者的闲谈。
* [The Laracasts Snippet](https://laracasts.simplecast.com) - 每期节目分享一个关于 Web 开发某方面的想法。
* [The Laravel Podcast](https://laravelpodcast.com/) - Laravel 与 PHP 开发新闻和讨论。
* [The PHP Roundtable](https://phproundtable.com/) - 开发者围绕 PHP 爱好者关心的话题展开的轻松交流。

### PHP 新闻简报
*将 PHP 相关资讯直接发送到你的收件箱。*

* [PHP Weekly](https://www.phpweekly.com/) - 每周一期的 PHP 新闻简报。

### PHP 阅读材料
*PHP 相关阅读材料。*

* [php[architect]](https://www.phparch.com/magazine/) - 专注于 PHP 的月刊。

### PHP 内核阅读材料
*与 PHP 内核或性能相关的阅读材料。*

* [PHP RFCs](https://wiki.php.net/rfc) - PHP RFC（征求意见稿）的官方主页。
* [Externals](https://externals.io/) - PHP 内核相关讨论。
* [PHP RFC Watch](https://github.com/beberlei/php-rfc-watch) - 关注最新的 [RFC](https://wiki.php.net/rfc)。
* [PHP Internals Book](https://www.phpinternalsbook.com/) - 由三位核心开发者撰写的 PHP 内核在线图书。
