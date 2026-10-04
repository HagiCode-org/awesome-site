# Awesome PHP [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Eine kuratierte Auswahl großartiger PHP-Bibliotheken, Ressourcen und nützlicher Werkzeuge.

## Mitwirken und Zusammenarbeiten
Bitte lies [CONTRIBUTING](https://github.com/ziadoz/awesome-php/blob/master/CONTRIBUTING.md), [CODE-OF-CONDUCT](https://github.com/ziadoz/awesome-php/blob/master/CODE-OF-CONDUCT.md) und [COLLABORATING](https://github.com/ziadoz/awesome-php/blob/master/COLLABORATING.md), um mehr zu erfahren.

## Inhaltsverzeichnis
- [Awesome PHP](#awesome-php)
  - [Composer-Repositories](#composer-repositories)
  - [Abhängigkeitsverwaltung](#dependency-management)
  - [Ergänzungen zur Abhängigkeitsverwaltung](#dependency-management-extras)
  - [Frameworks](#frameworks)
  - [Framework-Ergänzungen](#framework-extras)
  - [Content-Management-Systeme](#content-management-systems-cms)
  - [Komponenten](#components)
  - [Micro-Frameworks](#micro-frameworks)
  - [Ergänzungen zu Micro-Frameworks](#micro-framework-extras)
  - [Router](#routers)
  - [Vorlagensysteme](#templating)
  - [Generatoren für statische Websites](#static-site-generators)
  - [HTTP](#http)
  - [Web-Scraping](#scraping)
  - [Middleware](#middlewares)
  - [URLs](#url)
  - [E-Mail](#email)
  - [Dateien](#files)
  - [Datenströme](#streams)
  - [Abhängigkeitsinjektion](#dependency-injection)
  - [Bildverarbeitung](#imagery)
  - [Testen](#testing)
  - [Kontinuierliche Integration](#continuous-integration)
  - [Dokumentation](#documentation)
  - [Sicherheit](#security)
  - [Passwörter](#passwords)
  - [Codeanalyse](#code-analysis)
  - [Codequalität](#code-quality)
  - [Statische Analyse](#static-analysis)
  - [Architektur](#architectural)
  - [Fehlersuche und Profiling](#debugging-and-profiling)
  - [Fehlerverfolgungs- und Überwachungsdienste](#error-tracking-and-monitoring-services)
  - [Build-Werkzeuge](#build-tools)
  - [Aufgabenverwaltung](#task-runners)
  - [Navigation](#navigation)
  - [Asset-Verwaltung](#asset-management)
  - [Geolokalisierung](#geolocation)
  - [Datum und Uhrzeit](#date-and-time)
  - [Ereignisse](#event)
  - [Protokollierung](#logging)
  - [E-Commerce](#e-commerce)
  - [PDF](#pdf)
  - [Bürosoftware](#office)
  - [Datenbanken](#database)
  - [Migrationen](#migrations)
  - [NoSQL](#nosql)
  - [Warteschlangen](#queue)
  - [Suche](#search)
  - [Kommandozeile](#command-line)
  - [Authentifizierung und Autorisierung](#authentication-and-authorization)
  - [Markup und CSS](#markup-and-css)
  - [JSON](#json)
  - [Zeichenketten](#strings)
  - [Zahlen](#numbers)
  - [Filtern, Bereinigen und Validieren](#filtering-sanitizing-and-validation)
  - [APIs](#api)
  - [Caching und Sperren](#caching-and-locking)
  - [Datenstrukturen und Speicherung](#data-structure-and-storage)
  - [Benachrichtigungen](#notifications)
  - [Bereitstellung](#deployment)
  - [Internationalisierung und Lokalisierung](#internationalisation-and-localisation)
  - [Serverlos](#serverless)
  - [Konfiguration](#configuration)
  - [LLMs](#llms)
  - [Drittanbieter-APIs](#third-party-apis)
  - [Erweiterungen](#extensions)
  - [Sonstiges](#miscellaneous)
- [Software](#software)
  - [PHP-Installation](#php-installation)
  - [Entwicklungsumgebung](#development-environment)
  - [Virtuelle Maschinen](#virtual-machines)
  - [Texteditoren und IDEs](#text-editors-and-ides)
  - [Webanwendungen](#web-applications)
  - [Infrastruktur](#infrastructure)
- [Ressourcen](#resources)
  - [PHP-Websites](#php-websites)
  - [PHP-Bücher](#php-books)
  - [PHP-Videos](#php-videos)
  - [PHP-Konferenzen](#php-conferences)
  - [PHP-Podcasts](#php-podcasts)
  - [PHP-Newsletter](#php-newsletters)
  - [PHP-Lektüre](#php-reading)
  - [Lektüre zu PHP-Interna](#php-internals-reading)

### Composer-Repositories
*Composer-Repositories.*

* [Firegento](https://packages.firegento.com/) - Composer-Repository für Magento-Module.
* [Packagist](https://packagist.org/) - Das PHP-Paket-Repository.
* [Packalyst](https://packalyst.com/) - Das Laravel-Paket-Repository.
* [Private Packagist](https://packagist.com/) - Composer-Paketarchiv als Dienst für PHP.
* [WordPress Packagist](https://wpackagist.org/) - Verwalte deine Plugins mit Composer.

### Abhängigkeitsverwaltung
*Bibliotheken zur Verwaltung von Abhängigkeiten und Paketen.*

* [Composer](https://getcomposer.org/) - Paket- und Abhängigkeitsmanager.
* [Composer Installers](https://github.com/composer/installers) - Composer-Bibliotheksinstaller für mehrere Frameworks.
* [Phive](https://phar.io/) - PHAR-Verwaltung.
* [Pickle](https://github.com/FriendsOfPHP/pickle) - Installer für PHP-Erweiterungen.
* [Pie](https://github.com/php/pie) - Der offizielle PHP-Installer für Erweiterungen.

### Ergänzungen zur Abhängigkeitsverwaltung
*Ergänzungen rund um die Abhängigkeitsverwaltung.*

* [Composer Merge Plugin](https://github.com/wikimedia/composer-merge-plugin) - Composer-Plugin zum Zusammenführen mehrerer `composer.json`-Dateien.
* [Composer Normalize](https://github.com/ergebnis/composer-normalize) - Plugin zum Vereinheitlichen von `composer.json`-Dateien.
* [Composer Patches](https://github.com/cweagans/composer-patches) - Composer-Plugin zum Anwenden von Patches.
* [Composer Prefer Lowest Validator](https://github.com/dereuromark/composer-prefer-lowest) - Plugin zur Prüfung, ob Mindestversionen von Abhängigkeiten installiert und getestet werden können.
* [Composer Require Checker](https://github.com/maglnet/ComposerRequireChecker) - CLI-Werkzeug zur Analyse von Composer-Abhängigkeiten und zur Prüfung, ob im Quellcode eines Pakets unbekannte Symbole verwendet werden.
* [Composer Unused](https://github.com/composer-unused/composer-unused) - CLI-Werkzeug zum Aufspüren ungenutzter Composer-Pakete.
* [Repman](https://repman.io) - Privater PHP-Paket-Repository-Manager und Packagist-Proxy.
* [Satis](https://github.com/composer/satis) - Generator für statische Composer-Repositories.

### Frameworks
*Frameworks für die Webentwicklung.*

* [CakePHP](https://cakephp.org/) - Framework zur schnellen Anwendungsentwicklung.
* [CodeIgniter](https://codeigniter.com/) - Leistungsstarkes PHP-Framework mit sehr geringem Ressourcenbedarf.
* [Ecotone](https://docs.ecotone.tech/) - Service Bus für PHP auf Grundlage der Architekturprinzipien DDD, CQRS und Event Sourcing.
* [Laminas](https://getlaminas.org/) - Framework aus einzelnen Komponenten (zuvor Zend Framework).
* [Laravel](https://laravel.com/) - Webanwendungs-Framework mit ausdrucksstarker, eleganter Syntax.
* [Nette](https://nette.org) - Web-Framework aus ausgereiften Komponenten.
* [Phalcon](https://phalcon.io/en-us) - Als C-Erweiterung implementiertes Framework.
* [Spiral](https://spiral.dev/) - Leistungsstarkes PHP-/Go-Framework.
* [Symfony](https://symfony.com/) - Sammlung wiederverwendbarer Komponenten und Web-Framework.
* [Tempest](https://github.com/tempestphp/tempest-framework) - Framework, das einem nicht im Weg steht.
* [Yii2](https://github.com/yiisoft/yii2/) - Schnelles, sicheres und effizientes Web-Framework.

### Framework-Ergänzungen
*Ergänzungen rund um Webentwicklungs-Frameworks.*

* [CakePHP CRUD](https://github.com/friendsofcake/crud) - Rapid-Application-Development-(RAD-)Plugin für CakePHP.
* [Filament PHP](https://filamentphp.com/) - Leistungsstarkes Open-Source-UI-Framework für Laravel.
* [Inertia.js](https://inertiajs.com/) - Adapter zum Erstellen von Single-Page-Anwendungen mit serverseitigem Routing und Controllern – ganz ohne separate API.
* [LaravelS](https://github.com/hhxsv5/laravel-s) - Sofort einsatzbereiter Adapter zwischen Laravel/Lumen und Swoole.
* [Livewire](https://livewire.laravel.com/) - Leistungsstarke, dynamische Frontend-Oberflächen, ohne PHP zu verlassen.

### Content-Management-Systeme (CMS)
*Werkzeuge zur Verwaltung digitaler Inhalte.*

* [Backdrop](https://backdropcms.org) - CMS für kleine und mittelständische Unternehmen sowie gemeinnützige Organisationen (Fork von Drupal).
* [Concrete5](https://www.concretecms.com/) - CMS für Nutzer mit geringen technischen Vorkenntnissen.
* [CraftCMS](https://github.com/craftcms/cms) - Flexibles, benutzerfreundliches CMS zum Erstellen individueller digitaler Erlebnisse im Web und darüber hinaus.
* [Drupal](https://new.drupal.org/home) - CMS für Unternehmen.
* [Grav](https://github.com/getgrav/grav) - Modernes Flat-File-CMS.
* [Joomla](https://www.joomla.org/) - Ein weiteres führendes CMS.
* [Kirby](https://getkirby.com/) - Flat-File-CMS, das sich jedem Projekt anpasst.
* [Magento](https://github.com/magento/magento2) - Weitverbreitete Open-Source-E-Commerce-Plattform.
* [Moodle](https://moodle.org/) - Open-Source-Lernplattform.
* [OctoberCMS](https://octobercms.com/) - Auf Laravel basierendes CMS.
* [OpenMage](https://github.com/OpenMage/magento-lts) - Fork der nicht mehr unterstützten E-Commerce-Plattform Magento 1.
* [Pico CMS](https://picocms.org/) - Schlankes Flat-File-CMS.
* [Silverstripe](https://www.silverstripe.org/) - Einfaches, flexibles und sicheres CMS.
* [Statamic](https://statamic.com/) - Auf Laravel basierendes Flat-File- und Git-CMS.
* [Sulu](https://sulu.io/) - Benutzer- und entwicklerfreundliches CMS auf Basis des Symfony-Frameworks.
* [TYPO3](https://typo3.org) - CMS für Unternehmen.
* [WinterCMS](https://wintercms.com) - Community-gepflegter, auf Laravel basierender Fork von OctoberCMS.
* [WordPress](https://github.com/WordPress/WordPress) - Blogging-Plattform und CMS.

### Komponenten
*Eigenständige Komponenten aus Webentwicklungs-Frameworks und Entwicklergruppen.*

* [Aura](https://auraphp.com/) - Unabhängige, vollständig voneinander und von jedem Framework entkoppelte Komponenten.
* [CakePHP Plugins](https://plugins.cakephp.org/) - Verzeichnis mit CakePHP-Plugins.
* [Laminas Components](https://docs.laminas.dev/components/) - Die Komponenten des Laminas-Frameworks.
* [Laravel Components](https://github.com/illuminate) - Die Komponenten des Laravel-Frameworks.
* [League of Extraordinary Packages](https://thephpleague.com/) - PHP-Paketentwicklungsgruppe.
* [Spatie Open Source](https://spatie.be/open-source) - Sammlung von Open-Source-Paketen für PHP und Laravel.
* [Symfony Packages](https://symfony.com/packages) - Entkoppelte Bibliotheken für PHP-Anwendungen.

### Micro-Frameworks
*Micro-Frameworks und Router.*

* [Laravel Zero](https://laravel-zero.com) - Micro-Framework für Konsolenanwendungen.
* [Mezzio](https://getexpressive.org/) - Micro-Framework von Laminas.
* [Minicli](https://github.com/minicli/minicli) - Minimalistisches, abhängigkeitfreies Framework zum Erstellen CLI-zentrierter PHP-Anwendungen.
* [Silly](https://github.com/mnapoli/silly) - Micro-Framework für CLI-Anwendungen.
* [Slim](https://www.slimframework.com/) - Ein weiteres einfaches Micro-Framework.

### Ergänzungen zu Micro-Frameworks
*Ergänzungen rund um Micro-Frameworks und Router.*

* [Slim Skeleton](https://github.com/slimphp/Slim-Skeleton) - Grundgerüst für Slim.
* [Slim PHP View](https://github.com/slimphp/PHP-View) - Einfacher PHP-Renderer für Slim.

### Router
*Bibliotheken zur Verwaltung des Anwendungs-Routings.*

* [Aura.Router](https://github.com/auraphp/Aura.Router) - Funktionsreiche Routing-Bibliothek.
* [Fast Route](https://github.com/nikic/FastRoute) - Schnelle Routing-Bibliothek.
* [Klein](https://github.com/klein/klein.php) - Flexibler Router.
* [Route](https://github.com/thephpleague/route) - Routing-Bibliothek auf Basis von Fast Route.

### Vorlagensysteme
*Bibliotheken und Werkzeuge für Templating und Lexing.*

* [Latte](https://latte.nette.org/) - Die sichersten und wirklich intuitiven Templates für PHP.
* [MtHaml](https://github.com/arnaud-lb/MtHaml) - PHP-Implementierung der HAML-Templating-Sprache.
* [Mustache](https://github.com/bobthecow/mustache.php) - PHP-Implementierung der Mustache-Templating-Sprache.
* [PHPTAL](https://phptal.org/) - PHP-Implementierung der [TAL](https://en.wikipedia.org/wiki/Template_Attribute_Language)-Templating-Sprache.
* [Plates](https://platesphp.com/) - Native PHP-Templating-Bibliothek.
* [Smarty](https://www.smarty.net/) - Template-Engine als Ergänzung zu PHP.
* [Twig](https://twig.symfony.com/) - Umfassende Templating-Sprache.

### Generatoren für statische Websites
*Werkzeuge zur Vorverarbeitung von Inhalten und Generierung von Webseiten.*

* [Cecil](https://cecil.app/) - Einfacher und leistungsstarker, inhaltsgesteuerter Generator für statische Websites.
* [Couscous](https://couscous.io) - Werkzeug zum Umwandeln von Markdown-Dokumentation in Websites.
* [Jigsaw](https://jigsaw.tighten.com/) - Einfache statische Websites mit Laravels Blade.
* [Sculpin](https://sculpin.io) - Werkzeug zum Umwandeln von Markdown und Twig in statisches HTML.

### HTTP
*Bibliotheken für die Arbeit mit HTTP.*

* [Buzz](https://github.com/kriswallsmith/Buzz) - Ein weiterer HTTP-Client.
* [Guzzle](https://github.com/guzzle/guzzle) - Umfassender HTTP-Client.
* [HTTPlug](https://httplug.io) - Abstraktion für HTTP-Clients ohne Bindung an eine bestimmte Implementierung.
* [Nyholm PSR-7](https://github.com/Nyholm/psr7) - Besonders schlanke PSR-7-Implementierung. Sehr strikt und sehr schnell.
* [PHP VCR](https://php-vcr.github.io/) - Bibliothek zum Aufzeichnen und Wiedergeben von HTTP-Anfragen.
* [Requests](https://github.com/WordPress/Requests) - Einfache HTTP-Bibliothek.
* [Retrofit](https://github.com/tebru/retrofit-php) - Bibliothek zur einfacheren Erstellung von REST-API-Clients.
* [Saloon](https://github.com/saloonphp/saloon) - Framework zum Erstellen eleganter API-Integrationen und SDKs.
* [Symfony HTTP Client](https://github.com/symfony/http-client) - Komponente zum synchronen oder asynchronen Abrufen von HTTP-Ressourcen.
* [Laminas Diactoros](https://github.com/laminas/laminas-diactoros) - Implementierung von HTTP-Nachrichten nach PSR-7.

### Web-Scraping
*Bibliotheken zum Auslesen von Websites und Erkennen von Crawlern.*

* [Chrome PHP](https://github.com/chrome-php/chrome) - Headless-Chrome-/Chromium-Instanzen von PHP aus steuern.
* [CrawlerDetect](https://github.com/JayBizzle/Crawler-Detect) - PHP-Klasse zur Erkennung von Bots, Crawlern und Spidern anhand des User-Agents.
* [DiDOM](https://github.com/Imangazaliev/DiDOM) - Besonders schneller HTML-Scraper und -Parser.
* [Embed](https://github.com/php-embed/Embed) - Extrahiert Informationen aus beliebigen Webdiensten oder Webseiten.
* [PHP Spider](https://github.com/mvdbos/php-spider) - Konfigurierbarer und erweiterbarer PHP-Webcrawler.
* [Symfony Panther](https://github.com/symfony/panther) - Bibliothek für Browsertests und Web-Crawling mit PHP und Symfony.

### Middleware
*Bibliotheken zum Erstellen von Anwendungen mit Middlewares.*

* [PSR-15 Middlewares](https://github.com/middlewares/psr15-middlewares) - Inspirierende Sammlung nützlicher Middlewares.
* [Stack](https://github.com/stackphp) - Bibliothek mit stapelbaren Middlewares für Symfony.
* [Laminas Stratigility](https://github.com/laminas/laminas-stratigility) - Middleware für PHP auf Basis von PSR-7.

### URL
*Bibliotheken zum Parsen von URLs.*

* [PHP Domain Parser](https://github.com/jeremykendall/php-domain-parser) - Bibliothek zum Parsen von Domain-Suffixen.
* [sabre/uri](https://github.com/sabre-io/uri) - Funktionale Bibliothek zur URI-Manipulation.
* [Uri](https://github.com/thephpleague/uri) - Eine weitere Bibliothek zur URL-Manipulation.

### E-Mail
*Bibliotheken zum Versenden und Parsen von E-Mails.*

* [CssToInlineStyles](https://github.com/tijsverkoyen/CssToInlineStyles) - Bibliothek zum Einbetten von CSS in E-Mail-Vorlagen.
* [ddeboer/imap](https://github.com/ddeboer/imap) - Objektorientierte, vollständig getestete PHP-IMAP-Bibliothek.
* [Email Reply Parser](https://github.com/willdurand/EmailReplyParser) - Bibliothek zum Parsen von E-Mail-Antworten.
* [Fetch](https://github.com/tedious/Fetch) - IMAP-Bibliothek.
* [Mautic](https://github.com/mautic/mautic) - Automatisierung des E-Mail-Marketings.
* [PHPMailer](https://github.com/PHPMailer/PHPMailer) - Weitere Lösung zum Versenden von E-Mails.
* [Stampie](https://github.com/Stampie/Stampie) - Bibliothek für E-Mail-Dienste wie [SendGrid](https://www.twilio.com/en-us/sendgrid), [PostMark](https://postmarkapp.com), [MailGun](https://www.mailgun.com/) und [MailChimp](https://mailchimp.com/features/transactional-email/).
* [Symfony Mailer](https://github.com/symfony/mailer) - Leistungsstarke Bibliothek zum Erstellen und Versenden von E-Mails.

### Dateien
*Bibliotheken zur Bearbeitung von Dateien und Erkennung von MIME-Typen.*

* [CSV](https://github.com/thephpleague/csv) - Bibliothek zur Bearbeitung von CSV-Daten.
* [Flysystem](https://github.com/thephpleague/Flysystem) - Abstraktion für lokale und entfernte Dateisysteme.
* [Gaufrette](https://github.com/KnpLabs/Gaufrette) - Abstraktionsschicht für Dateisysteme.
* [PHP FFmpeg](https://github.com/PHP-FFmpeg/PHP-FFmpeg/) - Wrapper für die Videobibliothek [FFmpeg](https://www.ffmpeg.org/).
* [UnifiedArchive](https://github.com/wapmorgan/UnifiedArchive) - Einheitliches Werkzeug zum Lesen und Schreiben komprimierter Archive.
* [Parquet](https://github.com/flow-php/parquet) - PHP-Implementierung des Parquet-Dateiformats.

### Datenströme
*Bibliotheken für die Arbeit mit Datenströmen.*

* [ByteStream](https://amphp.org/byte-stream) - Asynchrone Abstraktion für Datenströme.

### Abhängigkeitsinjektion
*Bibliotheken zur Umsetzung des Dependency-Injection-Entwurfsmusters.*

* [Aura.Di](https://github.com/auraphp/Aura.Di) - Serialisierbarer Dependency-Injection-Container mit Konstruktor- und Setter-Injection, Unterstützung für Interfaces und Traits, Konfigurationsvererbung und vielem mehr.
* [Acclimate](https://github.com/AcclimateContainer/acclimate-container) - Einheitliche Schnittstelle für Dependency-Injection-Container und Service-Locators.
* [Auryn](https://github.com/rdlowrey/Auryn) - Rekursiver Dependency Injector.
* [Container](https://github.com/thephpleague/container) - Ein weiterer flexibler Dependency-Injection-Container.
* [Disco](https://github.com/bitExpert/disco) - PSR-11-kompatibler, annotationsbasierter Dependency-Injection-Container.
* [PHP-DI](https://php-di.org/) - Dependency-Injection-Container mit Unterstützung für Autowiring.
* [Pimple](https://github.com/silexphp/Pimple) - Winziger Dependency-Injection-Container.
* [Symfony DI](https://github.com/symfony/dependency-injection) - Komponente für einen Dependency-Injection-Container.

### Bildverarbeitung
*Bibliotheken zur Bearbeitung von Bildern.*

* [Color Extractor](https://github.com/thephpleague/color-extractor) - Bibliothek zum Extrahieren von Farben aus Bildern.
* [Glide](https://github.com/thephpleague/glide) - Bibliothek zur bedarfsgesteuerten Bildbearbeitung.
* [Image Hash](https://github.com/jenssegers/imagehash) - Bibliothek zur Erzeugung wahrnehmungsbasierter Bild-Hashes.
* [Image Optimizer](https://github.com/psliwa/image-optimizer) - Bibliothek zur Optimierung von Bildern.
* [Imagine](https://imagine.readthedocs.io/en/latest/index.html) - Bibliothek zur Bildbearbeitung.
* [Intervention Image](https://github.com/Intervention/image) - Eine weitere Bibliothek zur Bildbearbeitung.
* [PHP Image Workshop](https://github.com/Sybio/ImageWorkshop) - Eine weitere Bibliothek zur Bildbearbeitung.
* [PHP QR Code](https://github.com/chillerlan/php-qrcode/) - Generator und Reader für QR-Codes.

### Testen
*Bibliotheken zum Testen von Codebasen und Erzeugen von Testdaten.*

* [Alice](https://github.com/nelmio/alice) - Ausdrucksstarke Bibliothek zur Erzeugung von Test-Fixtures.
* [Behat](https://docs.behat.org/en/latest/) - Test-Framework für verhaltensgetriebene Entwicklung (BDD).
* [Codeception](https://github.com/Codeception/Codeception) - Full-Stack-Test-Framework.
* [Faker](https://github.com/fakerphp/faker) - Bibliothek zur Erzeugung von Testdaten.
* [Foundry](https://github.com/zenstruck/foundry) - Factory zur Erzeugung von Doctrine-Fixtures.
* [Infection](https://github.com/infection/infection) - AST-basiertes Framework für Mutationstests in PHP.
* [Kahlan](https://github.com/kahlan/kahlan) - Full-Stack-Framework für Unit- und BDD-Tests mit integrierter Unterstützung für Stubs, Mocks und Code-Coverage.
* [Mink](https://mink.behat.org/en/latest/) - Web-Akzeptanztests.
* [Mockery](https://github.com/mockery/mockery) - Mock-Objekt-Bibliothek zum Testen.
* [Nette Tester](https://github.com/nette/tester) - Produktives und angenehmes Framework für parallele Unit-Tests.
* [ParaTest](https://github.com/paratestphp/paratest) - Bibliothek für parallele PHPUnit-Tests.
* [Pest](https://pestphp.com/) - Test-Framework mit Fokus auf Einfachheit.
* [Phake](https://github.com/phake/phake) - Eine weitere Mock-Objekt-Bibliothek zum Testen.
* [PHP-Mock](https://github.com/php-mock/php-mock) - Mock-Bibliothek für integrierte PHP-Funktionen (z. B. time()).
* [PHP MySQL Engine](https://github.com/vimeo/php-mysql-engine) - In reinem PHP geschriebene MySQL-Engine.
* [PHPSpec](https://github.com/phpspec/phpspec) - Unit-Test-Bibliothek für Design by Specification.
* [PHPT](https://php.github.io/php-src/miscellaneous/writing-tests.html) - Von PHP selbst verwendetes Testwerkzeug.
* [PHPUnit](https://github.com/sebastianbergmann/phpunit) - Framework für Unit-Tests.
* [PHPUnit Polyfills](https://github.com/Yoast/PHPUnit-Polyfills/) - Vereinfacht die Ausführung von PHPUnit-Tests mit mehreren PHPUnit-Versionen.
* [Prophecy](https://github.com/phpspec/prophecy) - Sehr meinungsstarkes Mocking-Framework.
* [VFS Stream](https://github.com/bovigo/vfsStream) - Wrapper für virtuelle Dateisystem-Datenströme zum Testen.

### Kontinuierliche Integration
*Bibliotheken und Anwendungen für kontinuierliche Integration.*

* [CircleCI](https://circleci.com) - Plattform für kontinuierliche Integration.
* [GitLab CI](https://about.gitlab.com/solutions/continuous-integration/) - Plattform für kontinuierliche Integration.
* [Jenkins](https://www.jenkins.io/) - Plattform für kontinuierliche Integration mit [PHP-Unterstützung](https://www.jenkins.io/solutions/php/).
* [SemaphoreCI](https://semaphore.io/) - Plattform für kontinuierliche Integration in Open-Source- und privaten Projekten.
* [Travis CI](https://www.travis-ci.com) - Plattform für kontinuierliche Integration.
* [Setup PHP](https://github.com/shivammathur/setup-php) - GitHub Action für PHP.

### Dokumentation
*Bibliotheken zur Erzeugung von Projektdokumentation.*

* [APIGen](https://github.com/apigen/apigen) - Ein weiterer Generator für API-Dokumentation.
* [daux.io](https://github.com/dauxio/daux.io) - Generator für Dokumentationen aus Markdown-Dateien.
* [phpDocumentor](https://phpdoc.org/) - Generator für Dokumentation.
* [Scramble](https://github.com/dedoc/scramble) - Erzeugt automatisch OpenAPI-Dokumentation aus deinem Code – ganz ohne Annotationen.
* [zircote/swagger-php](https://github.com/zircote/swagger-php) - Erzeugt OpenAPI-Dokumentation für deine RESTful API.

### Sicherheit
*Bibliotheken zur Erzeugung sicherer Zufallszahlen, Verschlüsselung von Daten sowie zum Aufspüren und Testen von Sicherheitslücken.*

* [AntiXSS](https://github.com/voku/anti-xss) - Bibliothek, die Cross-Site-Scripting-Angriffe (XSS) mithilfe einer Sperrliste zu verhindern versucht.
* [Halite](https://paragonie.com/project/halite) - Einfache Verschlüsselungsbibliothek auf Basis von [libsodium](https://github.com/jedisct1/libsodium).
* [Optimus](https://github.com/jenssegers/optimus) - Verschleierung von IDs auf Grundlage von Knuths multiplikativem Hash-Verfahren.
* [OWASP](https://owasp.org/) - Entdecke die Welt der Cybersicherheit.
* [PHPGGC](https://github.com/ambionics/phpggc) - Sammlung nicht deserialisierbarer PHP-Payloads mit einem Werkzeug zu ihrer Erzeugung.
* [PHP Encryption](https://github.com/defuse/php-encryption) - Sichere PHP-Verschlüsselungsbibliothek.
* [PHPSecLib](https://github.com/phpseclib/phpseclib) - Bibliothek für sichere Kommunikation, vollständig in PHP geschrieben.
* [Roave Security Advisories](https://github.com/Roave/SecurityAdvisories) - Dieses Paket stellt sicher, dass deine Anwendung keine Abhängigkeiten mit bekannten Sicherheitslücken installiert hat.
* [Secure Headers](https://github.com/BePsvPT/secure-headers) - Paket zum Hinzufügen sicherheitsbezogener Header zu HTTP-Antworten.
* [SQLMap](https://github.com/sqlmapproject/sqlmap) - Werkzeug zur automatischen SQL-Injection und Übernahme von Datenbanken.
* [Zap](https://github.com/zaproxy/zaproxy) - Integriertes Penetrationstest-Werkzeug für Webanwendungen.

### Passwörter
*Bibliotheken und Werkzeuge für die Arbeit mit und Speicherung von Passwörtern.*

* [GenPhrase](https://github.com/timoh6/GenPhrase) - Bibliothek zur Erzeugung sicherer, zufälliger Passphrasen.
* [Password Validator](https://github.com/jeremykendall/password-validator) - Bibliothek zur Validierung und Aktualisierung von Passwort-Hashes.
* [Password-Generator](https://github.com/hackzilla/password-generator) - PHP-Bibliothek zur Erzeugung zufälliger Passwörter.
* [phpass](https://www.openwall.com/phpass/) - Portables Framework zum Hashen von Passwörtern.
* [Zxcvbn PHP](https://github.com/bjeavons/zxcvbn-php) - Realistische PHP-Bibliothek zur Einschätzung der Passwortstärke, basierend auf Zxcvbn JS.

### Codeanalyse
*Bibliotheken und Werkzeuge zur Analyse, zum Parsen und zur Bearbeitung von Codebasen.*

* [Better Reflection](https://github.com/Roave/BetterReflection) - AST-basierte Reflection-Bibliothek zur Analyse und Bearbeitung von Code.
* [Bladestan](https://github.com/bladestan/bladestan) - PHPStan-Erweiterung zur statischen Analyse von Blade-Templates.
* [Code Climate](https://codeclimate.com) - Automatisierte Code-Reviews.
* [Editorconfig-Checker](https://github.com/editorconfig-checker/editorconfig-checker.php) - Kommandozeilenprogramm zur Prüfung, ob deine Dateien den Regeln aus `.editorconfig` entsprechen.
* [GrumPHP](https://github.com/phpro/grumphp) - Werkzeug zur Sicherung der PHP-Codequalität.
* [PHP AST Viewer](https://php-ast-viewer.com/) - Werkzeug zum Anzeigen des Abstract Syntax Tree von PHP-Code.
* [PHP Magic Number Detector](https://github.com/povils/phpmnd) - Bibliothek zum Erkennen von Magic Numbers im Code.
* [PHP Parser](https://github.com/nikic/PHP-Parser) - PHP-Parser, geschrieben in PHP.
* [PHP Semantic Versioning Checker](https://github.com/tomzx/php-semver-checker) - Kommandozeilenprogramm zum Vergleich zweier Quellcodebestände und zur Bestimmung der passenden semantischen Versionsnummer.
* [Phpactor](https://github.com/phpactor/phpactor) - PHP-Werkzeug für Codevervollständigung, Refactoring und Introspektion.
* [PHPQA](https://github.com/EdgedesignCZ/phpqa) - Werkzeug zum Ausführen von QA-Tools (phploc, phpcpd, phpcs, pdepend, phpmd, phpmetrics).
* [Rector](https://github.com/rectorphp/rector) - Werkzeug zum Aktualisieren und Refactoring von Code.
* [Scrutinizer](https://scrutinizer-ci.com/) - Webwerkzeug zur [Analyse von PHP-Code](https://github.com/scrutinizer-ci/php-analyzer).
* [UBench](https://github.com/devster/ubench) - Einfache Microbenchmark-Bibliothek.

### Codequalität
*Bibliotheken zur Verwaltung der Codequalität, Formatierung und Lint-Prüfung.*

* [CaptainHook](https://github.com/captainhook-git/captainhook) - Einfach zu verwendende und flexible Git-Hook-Bibliothek.
* [Laravel Pint](https://github.com/laravel/pint) - Bibliothek zur Korrektur von Codierungsstandards für Laravel.
* [PHP CodeSniffer](https://github.com/PHPCSStandards/PHP_CodeSniffer) - Bibliothek, die Verstöße gegen PHP-, CSS- und JS-Codierungsstandards erkennt und automatisch beheben kann.
* [PHP CS Fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) - Bibliothek zur Korrektur von Codierungsstandards.
* [PHP CS Fixer Configurator](https://mlocati.github.io/php-cs-fixer-configurator/) - Webanwendung zur Konfiguration von PHP-CS-Fixer-Regelsätzen.
* [PHP Mess Detector](https://github.com/phpmd/phpmd) - Bibliothek, die Code auf Fehler, suboptimalen Code, ungenutzte Parameter und mehr untersucht.
* [PHPCheckstyle](https://github.com/PHPCheckstyle/phpcheckstyle) - Werkzeug zur Einhaltung bestimmter Codierungskonventionen.

### Statische Analyse
*Bibliotheken zur statischen Analyse von PHP-Code.*

* [Dead Code Detector](https://github.com/shipmonk-rnd/dead-code-detector) - PHPStan-Erweiterung zum Auffinden ungenutzten PHP-Codes.
* [Deptrac](https://github.com/deptrac/deptrac) - Statisches Analysewerkzeug zur Durchsetzung von Abhängigkeitsregeln zwischen Architekturschichten.
* [Exakat](https://github.com/exakat/exakat) - Engine zur statischen Analyse von PHP.
* [Larastan](https://github.com/larastan/larastan) - PHPStan-Wrapper für Laravel, der Laravel-Projekten statische Analyse hinzufügt.
* [Mago](https://github.com/carthage-software/mago) - Werkzeugkette für PHP mit dem Ziel, die Entwicklererfahrung zu verbessern.
* [phan](https://github.com/phan/phan) - Statischer Analyzer auf Basis von PHP 7+ und der php-ast-Erweiterung.
* [PHP Architecture Tester](https://github.com/carlosas/phpat) - Einfach zu verwendendes Werkzeug für Architekturtests in PHP.
* [PHPCompatibility](https://github.com/PHPCompatibility/PHPCompatibility) - PHP-Kompatibilitätsprüfer für PHP CodeSniffer.
* [PHPDoc Parser](https://github.com/phpstan/phpdoc-parser) - PHPDoc-Parser der nächsten Generation mit Unterstützung für Intersection Types und Generics.
* [PHP Metrics](https://github.com/phpmetrics/PhpMetrics) - Bibliothek für statische Metriken.
* [PHPStan](https://github.com/phpstan/phpstan) - Statisches Analysewerkzeug für PHP.
* [Psalm](https://github.com/vimeo/psalm) - Statisches Analysewerkzeug zum Auffinden von Fehlern in PHP-Anwendungen.

### Architektur
*Bibliotheken zu Entwurfsmustern, Programmieransätzen und Möglichkeiten der Codeorganisation.*

* [Design Patterns PHP](https://github.com/DesignPatternsPHP/DesignPatternsPHP) - Repository mit in PHP implementierten Softwaremustern.
* [Finite](https://github.com/yohang/Finite) - Einfache PHP-Zustandsmaschine.
* [Functional PHP](https://github.com/lstrojny/functional-php) - Bibliothek für funktionale Programmierung.
* [Iter](https://github.com/nikic/iter) - Bibliothek mit Iterationsprimitiven auf Basis von Generatoren.
* [IterTools PHP](https://github.com/markrogoyski/itertools-php) - Bibliothek mit Funktionen für iterierbare Objekte (ähnlich der itertools-Bibliothek in Python).
* [Pipeline](https://github.com/thephpleague/pipeline) - Implementierung des Pipeline-Musters.
* [Porter](https://github.com/ScriptFUSION/Porter) - Abstraktionsbibliothek zum Importieren von Daten aus Web-APIs und anderen Quellen.
* [RulerZ](https://github.com/K-Phoen/rulerz) - Leistungsstarke Regel-Engine und Implementierung des Specification-Musters.

### Debugging und Profiling
*Bibliotheken und Werkzeuge zum Debuggen von Fehlern und Profilieren von Code.*

* [APM](https://pecl.php.net/package/APM) - Monitoring-Erweiterung, die Fehler und Statistiken in SQLite/MySQL/StatsD sammelt.
* [Barbushin PHP Console](https://github.com/barbushin/php-console) - Eine weitere Web-Debugging-Konsole für Google Chrome.
* [Kint](https://github.com/kint-php/kint) - Werkzeug für Debugging und Profiling.
* [LaraDumps](https://github.com/laradumps/laradumps) - Debugging-Werkzeug für Laravel mit eigener Desktop-Anwendung.
* [Metrics](https://github.com/beberlei/metrics) - Einfache Bibliothek für eine Metrik-API.
* [PCOV](https://github.com/krakjoe/pcov) - Eigenständiger, mit Code-Coverage kompatibler Treiber.
* [PHP Console](https://github.com/Seldaek/php-console) - Web-Debugging-Konsole.
* [PHP Debug Bar](https://php-debugbar.com/) - Debugging-Symbolleiste.
* [PHPBench](https://github.com/phpbench/phpbench) - Benchmarking-Framework.
* [PHPSpy](https://github.com/adsr/phpspy) - Sampling-Profiler mit geringem Overhead.
* [Symfony VarDumper](https://github.com/symfony/var-dumper) - Komponente zum Ausgeben von Variablen.
* [Tracy](https://github.com/nette/tracy) - Einfache Bibliothek zur Fehlererkennung, Protokollierung und Zeitmessung.
* [Trap](https://github.com/buggregator/trap) - Erweiterte Variablenausgabe mit Weboberfläche und IDE-Plugin.
* [Whoops](https://github.com/filp/whoops) - Bibliothek für ansprechende Fehlerbehandlung.
* [xDebug](https://github.com/xdebug/xdebug) - Debugging- und Profiling-Werkzeug für PHP.
* [XHProf](https://github.com/phacility/xhprof) - Profiling-Werkzeug, ursprünglich von Facebook entwickelt.
* [Z-Ray](https://www.zend.com/products/z-ray) - Debugging- und Profiling-Werkzeug für Zend Server.

### Fehlerverfolgungs- und Überwachungsdienste
*Selbst gehostete oder cloudbasierte Werkzeuge zur Überwachung der Anwendungsleistung und Fehlerverfolgung.*

* [Blackfire](https://www.blackfire.io) - Code-Profiler mit geringem Overhead.
* [Buggregator](https://buggregator.dev) - Debugging-Server, der Variablenausgaben, Profiling-Daten, E-Mails, Logs und Sentry-Ereignisse zusammenführt.
* [BugSnag](https://www.bugsnag.com/) - Fehler- und Real-User-Monitoring.
* [Honeybadger](https://www.honeybadger.io/) - Fehlerverfolgung und Anwendungsüberwachung für Entwickler.
* [Rollbar](https://rollbar.com/) - Dienst zur Protokollierung und Verfolgung von Fehlern für Softwareteams.
* [Sentry](https://sentry.io/welcome/) - Software für Anwendungsleistungsüberwachung und Fehlerverfolgung.
* [Tideways](https://tideways.com/) - Überwachungs- und Profiling-Werkzeug.

### Build-Werkzeuge
*Werkzeuge zum Erstellen und Automatisieren von Projekten.*

* [Box](https://github.com/box-project/box) - Werkzeug zum Erstellen von PHAR-Dateien.
* [PHPacker](https://github.com/phpacker/phpacker) - PHAR-Builder, der PHP-Anwendungen zu eigenständigen ausführbaren Dateien kompiliert.
* [Phing](https://www.phing.info/) - PHP-Projekt-Build-System, inspiriert von Apache Ant.
* [RMT](https://github.com/liip/RMT) - Bibliothek für Versionierung und Veröffentlichung von Software.

### Aufgabenverwaltung
*Bibliotheken zur Automatisierung und Ausführung von Aufgaben.*

* [Jobby](https://github.com/jobbyphp/jobby) - PHP-Cronjob-Manager, der die Crontab nicht verändern muss.
* [Robo](https://github.com/consolidation/Robo) - PHP-Task-Runner mit objektorientierten Konfigurationen.

### Navigation
*Werkzeuge zum Erstellen von Navigationsstrukturen.*

* [KnpMenu](https://github.com/KnpLabs/KnpMenu) - Menü-Bibliothek.
* [Menu](https://github.com/spatie/menu) - Flexible Menü-Bibliothek mit Fluent Interface.

### Asset-Verwaltung
*Werkzeuge zur Verwaltung, Komprimierung und Minimierung von Website-Assets.*

* [JShrink](https://github.com/tedious/JShrink) - JavaScript-Minifier-Bibliothek.
* [Laravel Mix](https://github.com/laravel-mix/laravel-mix) - Eleganter Wrapper um Webpack für die gängigsten Anwendungsfälle.
* [Symfony Asset](https://github.com/symfony/asset) - Verwaltet URL-Erzeugung und Versionierung von Web-Assets.
* [Symfony Encore](https://github.com/symfony/webpack-encore) - Einfache, aber leistungsstarke API zur Verarbeitung und Kompilierung von Assets auf Basis von Webpack.

### Geolokalisierung
*Bibliotheken zur Geokodierung von Adressen und Arbeit mit Breiten- und Längengraden.*

* [Country List](https://github.com/umpirsky/country-list) - Liste aller Länder mit Namen und ISO-3166-1-Codes.
* [GeoCoder](https://geocoder-php.org/) - Geocoding-Bibliothek.
* [GeoJSON](https://github.com/jmikola/geojson) - Implementierung von GeoJSON.
* [GeoTools](https://github.com/thephpleague/geotools) - Bibliothek mit Geowerkzeugen.
* [PHPGeo](https://github.com/mjaschen/phpgeo) - Einfache Geobibliothek.

### Datum und Uhrzeit
*Bibliotheken für die Arbeit mit Datum und Uhrzeit.*

* [Business Time](https://github.com/kylekatarnls/business-time) - Carbon-Erweiterung zur Verwaltung von Geschäftszeiten und Arbeitstagen.
* [CalendR](https://github.com/yohang/CalendR) - Bibliothek zur Kalenderverwaltung.
* [Carbon](https://github.com/briannesbitt/Carbon) - Einfache Erweiterung der DateTime-API.
* [Chronos](https://github.com/cakephp/chronos) - DateTime-API-Erweiterung mit Unterstützung für veränderliche und unveränderliche Datums- und Zeitangaben.
* [Moment.php](https://github.com/fightbulc/moment.php) - Von Moment.js inspirierter PHP-DateTime-Handler mit i18n-Unterstützung.
* [PHP RRule](https://github.com/rlanvin/php-rrule) - Bibliothek für wiederkehrende Datums- und Zeitangaben nach der iCalendar-RRule-Spezifikation.
* [Yasumi](https://github.com/azuyalabs/yasumi) - Bibliothek zur Berechnung von Feiertagen einschließlich Datum und Bezeichnung.

### Ereignisse
*Ereignisgesteuerte Bibliotheken oder Bibliotheken zur Implementierung nicht blockierender Ereignisschleifen.*

* [Amp](https://github.com/amphp/amp) - Ereignisgesteuerte Bibliothek für nicht blockierende Ein-/Ausgabe.
* [Broadway](https://github.com/broadway/broadway) - Bibliothek für Event Sourcing und CQRS.
* [CakePHP Event](https://github.com/cakephp/event) - Bibliothek zum Verteilen von Ereignissen.
* [Elephant.io](https://github.com/ElephantIO/elephant.io) - Noch eine WebSocket-Bibliothek.
* [Evenement](https://github.com/igorw/evenement) - Bibliothek zum Verteilen von Ereignissen.
* [Event](https://github.com/thephpleague/event) - Ereignisbibliothek mit Fokus auf Domain-Events.
* [Fast CGI Client](https://github.com/hollodotme/fast-cgi-client) - Client für synchrone und asynchrone Anfragen über einen php-fpm-Socket.
* [FrankenPHP](https://frankenphp.dev/) - Moderner PHP-Anwendungsserver, geschrieben in Go.
* [Pawl](https://github.com/ratchetphp/Pawl) - Asynchroner WebSocket-Client.
* [Prooph Event Store](https://github.com/prooph/event-store) - Event-Sourcing-Komponente zum Speichern von Ereignismeldungen.
* [PHP Defer](https://github.com/php-defer/php-defer) - Golang-defer-Anweisung für PHP.
* [Ratchet](https://github.com/ratchetphp/Ratchet) - WebSocket-Bibliothek.
* [ReactPHP](https://github.com/reactphp/reactphp) - Ereignisgesteuerte Bibliothek für nicht blockierende Ein-/Ausgabe.
* [RxPHP](https://github.com/ReactiveX/RxPHP) - Bibliothek mit reaktiven Erweiterungen.
* [Swoole](https://github.com/swoole/swoole-src) - Leistungsstarkes, ereignisgesteuertes, asynchrones und nebenläufiges Netzwerkkommunikations-Framework für PHP, geschrieben in C.
* [Workerman](https://github.com/walkor/Workerman) - Ereignisgesteuerte Bibliothek für nicht blockierende Ein-/Ausgabe.

### Protokollierung
*Bibliotheken zur Erzeugung und Verarbeitung von Protokolldateien.*

* [Monolog](https://github.com/Seldaek/monolog) - Umfassender Logger.

### E-Commerce
*Bibliotheken und Anwendungen zur Zahlungsabwicklung und zum Aufbau von Online-Shops.*

* [Money](https://github.com/moneyphp/money) - PHP-Implementierung von Fowlers Money-Muster.
* [Brick Money](https://github.com/brick/money) - Geldbibliothek für PHP mit Unterstützung für Kontexte, Bargeldrundung und Währungsumrechnung.
* [OmniPay](https://github.com/thephpleague/omnipay) - Gateway-übergreifende Zahlungsabwicklungsbibliothek, unabhängig von Frameworks.
* [Payum](https://github.com/payum/payum) - Abstraktionsbibliothek für Zahlungen.
* [Shopsys Framework](https://github.com/shopsys/shopsys/) - Open-Source-E-Commerce-Plattform für interne Entwicklungsteams.
* [Shopware](https://github.com/shopware/shopware) - Hochgradig anpassbare E-Commerce-Software.
* [Swap](https://github.com/florianv/swap) - Bibliothek für Wechselkurse.
* [Sylius](https://sylius.com/) - Open-Source-E-Commerce-Lösung.

### PDF
*Bibliotheken und Software für die Arbeit mit PDF-Dateien.*

* [Browsershot](https://github.com/spatie/browsershot) - Wandelt HTML in ein Bild, PDF oder einen String um.
* [Dompdf](https://github.com/dompdf/dompdf) - Konverter von HTML zu PDF.
* [Gotenberg](https://github.com/gotenberg/gotenberg-php) - PHP-Client für die Interaktion mit Gotenberg.
* [Snappy](https://github.com/KnpLabs/snappy) - Bibliothek zur PDF- und Bilderzeugung.
* [TCPDF](https://tcpdf.org/) - Open-Source-PHP-Klasse zur Erzeugung von PDF-Dokumenten.

### Bürosoftware
*Bibliotheken für die Arbeit mit Office-Dokumenten.*

* [PHPPowerPoint](https://github.com/PHPOffice/PHPPresentation) - Bibliothek zur Arbeit mit Microsoft-PowerPoint-Präsentationen.
* [PHPWord](https://github.com/PHPOffice/PHPWord) - Bibliothek zur Arbeit mit Microsoft-Word-Dokumenten.
* [PHPSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet) - Reine PHP-Bibliothek zum Lesen und Schreiben von Tabellenkalkulationsdateien (Nachfolger von PHPExcel).
* [OpenSpout](https://github.com/openspout/openspout) - Community-gepflegter Fork von `box/spout`, einer PHP-Bibliothek zum schnellen und skalierbaren Lesen und Schreiben von Tabellenkalkulationsdateien (CSV, XLSX und ODS).

### Datenbanken
*Bibliotheken für die Interaktion mit Datenbanken mithilfe objektrelationaler Mapper (ORM) oder Data-Mapping-Techniken.*

* [Atlas.Orm](https://github.com/atlasphp/Atlas.Orm) - Data-Mapper-Implementierung für dein Persistenzmodell in PHP.
* [Aura.Sql](https://github.com/auraphp/Aura.Sql) - Erweitert das native PDO um einen Profiler und einen Connection-Locator.
* [Aura.SqlQuery](https://github.com/auraphp/Aura.SqlQuery) - Unabhängige Query Builder für MySQL, PostgreSQL, SQLite und Microsoft SQL Server.
* [Baum](https://github.com/etrepat/baum) - Implementierung eines Nested-Set-Baums für Eloquent.
* [CakePHP ORM](https://github.com/cakephp/orm) - Objekt-relationaler Mapper nach dem Data-Mapper-Muster.
* [Cycle ORM](https://github.com/cycle/orm) - PHP-Data-Mapper und ORM.
* [Doctrine Extensions](https://github.com/doctrine-extensions/DoctrineExtensions) - Sammlung von Doctrine-Erweiterungen für Verhaltensfunktionen.
* [Doctrine](https://www.doctrine-project.org/) - Umfassendes DBAL und ORM.
* [Laravel Eloquent](https://github.com/illuminate/database) - Einfaches ORM.
* [ProxyManager](https://github.com/Ocramius/ProxyManager) - Sammlung von Dienstprogrammen zur Erzeugung von Proxy-Objekten für Data-Mapper.
* [RedBean](https://redbeanphp.com/index.php) - Schlankes ORM ohne Konfiguration.
* [Slimdump](https://github.com/webfactory/slimdump) - Einfaches Dump-Werkzeug für MySQL.
* [Spot2](https://github.com/spotorm/spot2) - MySQL-Data-Mapper-ORM.

### Migrationen
*Bibliotheken zur Verwaltung von Datenbankschemata und Migrationen.*

* [Doctrine Migrations](https://www.doctrine-project.org/projects/migrations.html) - Migrationsbibliothek für Doctrine.
* [Phinx](https://github.com/cakephp/phinx) - Eine weitere Bibliothek für Datenbankmigrationen.
* [PHPMig](https://github.com/davedevelopment/phpmig) - Eine weitere Bibliothek zur Verwaltung von Migrationen.
* [Ruckusing](https://github.com/ruckus/ruckusing-migrations) - Datenbankmigrationen für PHP nach Art von ActiveRecord Migrations mit Unterstützung für MySQL, Postgres und SQLite.

### NoSQL
*Bibliotheken für die Arbeit mit NoSQL-Backends.*

* [MongoDB](https://github.com/mongodb/mongo-php-driver) - MongoDB-PHP-Treiber.
* [MongoDB PHP Library](https://github.com/mongodb/mongo-php-library) - Offizielle High-Level-PHP-Bibliothek für MongoDB, aufgebaut auf dem MongoDB-PHP-Treiber.
* [Predis](https://github.com/predis/predis) - Funktionsreiche Redis-Bibliothek.

### Warteschlangen
*Bibliotheken für die Arbeit mit Ereignis- und Aufgabenwarteschlangen.*

* [BunnyPHP](https://github.com/jakubkulhan/bunny) - Leistungsstarke AMQP-(RabbitMQ-)Bibliothek in reinem PHP für synchrone sowie asynchrone (ReactPHP-)Anwendungen.
* [Pheanstalk](https://github.com/pheanstalk/pheanstalk) - Client-Bibliothek für Beanstalkd.
* [PHP AMQP](https://github.com/php-amqplib/php-amqplib) - AMQP-Bibliothek in reinem PHP.
* [Tarantool Queue](https://github.com/tarantool-php/queue) - PHP-Bindings für Tarantool Queue.
* [Thumper](https://github.com/php-amqplib/Thumper) - Bibliothek mit RabbitMQ-Mustern.
* [Enqueue](https://github.com/php-enqueue/enqueue-dev) - PHP-Paket für Nachrichtenwarteschlangen mit Unterstützung für RabbitMQ, AMQP, STOMP, Amazon SQS, Redis und Doctrine-Transporte.

### Suche
*Bibliotheken und Software zur Indizierung von Daten und Ausführung von Suchanfragen.*

* [Elastica](https://github.com/ruflin/Elastica) - Client-Bibliothek für ElasticSearch.
* [ElasticSearch PHP](https://github.com/elastic/elasticsearch-php) - Offizielle Client-Bibliothek für [ElasticSearch](https://www.elastic.co/).
* [Solarium](https://www.solarium-project.org/) - Client-Bibliothek für [Solr](https://solr.apache.org/).
* [SphinxQL Query Builder](https://foolcode.github.io/SphinxQL-Query-Builder/) - Abfragebibliothek für die Suchmaschinen [Sphinx](https://sphinxsearch.com/) und [Manticore](https://manticoresearch.com/).

### Kommandozeile
*Bibliotheken rund um die Kommandozeile.*

* [Aura.Cli](https://github.com/auraphp/Aura.Cli) - Stellt für die Kommandozeile entsprechende Request-(Context-) und Response-(Stdio-)Objekte bereit, einschließlich Getopt-Unterstützung sowie eines unabhängigen Help-Objekts zur Beschreibung von Befehlen.
* [CLI Menu](https://github.com/php-school/cli-menu) - Bibliothek zum Erstellen von CLI-Menüs.
* [CLIFramework](https://github.com/c9s/CLIFramework) - Kommandozeilen-Framework mit Unterstützung für zsh-/bash-Vervollständigung, Unterbefehle und Optionsbeschränkungen. Es bildet auch die Grundlage für phpbrew.
* [CLImate](https://github.com/thephpleague/climate) - Bibliothek für farbige Ausgaben und spezielle Formatierungen.
* [Commando](https://github.com/nategood/commando) - Ein weiterer einfacher Parser für Kommandozeilenoptionen.
* [Cron Expression](https://github.com/mtdowling/cron-expression) - Bibliothek zur Berechnung von Cron-Ausführungsterminen.
* [GetOpt](https://github.com/getopt-php/getopt-php) - Parser für Kommandozeilenoptionen.
* [GetOptionKit](https://github.com/c9s/GetOptionKit) - Ein weiterer Parser für Kommandozeilenoptionen.
* [PsySH](https://github.com/bobthecow/psysh) - Eine weitere PHP-REPL.
* [ShellWrap](https://github.com/MrRio/shellwrap) - Einfache Wrapper-Bibliothek für die Kommandozeile.

### Authentifizierung und Autorisierung
*Bibliotheken zur Implementierung von Benutzerauthentifizierung und -autorisierung.*

* [Aura.Auth](https://github.com/auraphp/Aura.Auth) - Bietet Authentifizierungsfunktionen und Sitzungsverfolgung mithilfe verschiedener Adapter.
* [SocialConnect Auth](https://github.com/socialConnect/auth) - Open-Source-Bibliothek für Social Login (OAuth1\OAuth2\OpenID\OpenIDConnect).
* [Json Web Token](https://github.com/lcobucci/jwt) - JSON-Web-Tokens zur Authentifizierung und Übertragung von Informationen.
* [OAuth 1.0 Client](https://github.com/thephpleague/oauth1-client) - Client-Bibliothek für OAuth 1.0.
* [OAuth 2.0 Client](https://github.com/thephpleague/oauth2-client) - Client-Bibliothek für OAuth 2.0.
* [OAuth2 Server](https://bshaffer.github.io/oauth2-server-php-docs/) - Eine weitere OAuth2-Serverimplementierung.
* [OAuth2 Server](https://oauth2.thephpleague.com/) - OAuth2-Authentifizierungsserver, Ressourcenserver und Client-Bibliothek.
* [Paseto](https://github.com/paragonie/paseto) - Plattformunabhängige Sicherheitstoken.
* [PHP oAuthLib](https://github.com/daviddesberg/PHPoAuthLib) - Eine weitere OAuth-Bibliothek.
* [TwitterOAuth](https://github.com/abraham/twitteroauth) - Twitter-OAuth-Bibliothek.

### Markup und CSS
*Bibliotheken für die Arbeit mit Markup- und CSS-Formaten.*

* [Carve](https://github.com/markup-carve/carve-php) - PHP-Parser für [Carve](https://markup-carve.github.io/carve/), eine leichtgewichtige, von Markdown und Djot abgeleitete Markup-Sprache.
* [Cebe Markdown](https://github.com/cebe/markdown) - Schneller und erweiterbarer Markdown-Parser.
* [CommonMark PHP](https://github.com/thephpleague/commonmark) - Hochgradig erweiterbarer Markdown-Parser mit vollständiger Unterstützung der [CommonMark-Spezifikation](https://spec.commonmark.org/).
* [Decoda](https://github.com/milesj/decoda) - Leichtgewichtige Bibliothek zum Parsen von Markup.
* [Djot](https://github.com/php-collective/djot-php) - PHP-Parser für [Djot](https://djot.net/), eine moderne, leichtgewichtige Markup-Sprache und Nachfolger von Markdown.
* [Essence](https://github.com/essence/essence) - Bibliothek zum Extrahieren von Webmedien.
* [Embera](https://github.com/mpratt/Embera) - Bibliothek zum Abrufen von OEmbed-Inhalten.
* [HTML to Markdown](https://github.com/thephpleague/html-to-markdown) - Wandelt HTML in Markdown um.
* [HTML5 PHP](https://github.com/Masterminds/html5-php) - Bibliothek zum Parsen und Serialisieren von HTML5.
* [Parsedown](https://github.com/erusev/parsedown) - Ein weiterer Markdown-Parser.
* [PHP CSS Parser](https://github.com/MyIntervals/PHP-CSS-Parser) - In PHP geschriebener Parser für CSS-Dateien.
* [PHP Markdown](https://github.com/michelf/php-markdown) - Markdown-Parser.
* [Shiki PHP](https://github.com/spatie/shiki-php) - Paket zur Codehervorhebung mit [Shiki](https://github.com/shikijs/shiki) in PHP.
* [VObject](https://github.com/sabre-io/vobject) - Bibliothek zum Parsen von VCard- und iCalendar-Objekten.

### JSON
*Bibliotheken für die Arbeit mit JSON.*

* [JSON Lint](https://github.com/Seldaek/jsonlint) - Lint-Werkzeug für JSON.
* [JSONMapper](https://github.com/JsonMapper/JsonMapper) - Bibliothek zum Zuordnen von JSON zu PHP-Objekten.
* [Lazy JSON](https://github.com/cerbero90/lazy-json) - Speichereffizienter Lazy-Parser für große JSON-Dateien.

### Zeichenketten
*Bibliotheken zum Parsen und Bearbeiten von Zeichenketten.*

* [Agent](https://github.com/jenssegers/agent) - PHP-Parser für Desktop- und mobile User-Agents auf Basis von Mobiledetect.
* [ANSI to HTML5](https://github.com/sensiolabs/ansi-to-html) - Bibliothek zur Umwandlung von ANSI in HTML5.
* [Color Jizz](https://github.com/mikeemoo/ColorJizz-PHP) - Bibliothek zur Bearbeitung und Umwandlung von Farben.
* [Device Detector](https://github.com/matomo-org/device-detector) - Eine weitere Bibliothek zum Parsen von User-Agent-Strings.
* [Hyphenation](https://github.com/heiglandreas/Org_Heigl_Hyphenator) - Silbentrennung auf Basis des TeX-Silbentrennungsalgorithmus.
* [Jieba-PHP](https://github.com/fukuball/jieba-php) - PHP-Portierung von Pythons jieba zur Segmentierung chinesischer Texte für die Verarbeitung natürlicher Sprache.
* [Mobile-Detect](https://github.com/serbanghita/Mobile-Detect) - Leichtgewichtige PHP-Klasse zur Erkennung mobiler Geräte (einschließlich Tablets).
* [Patchwork UTF-8](https://github.com/nicolas-grekas/Patchwork-UTF8) - Portable Bibliothek für die Arbeit mit UTF-8-Zeichenketten.
* [Portable ASCII](https://github.com/voku/portable-ascii) - Bibliothek zur Umwandlung von Zeichenketten in ASCII.
* [Portable UTF-8](https://github.com/voku/portable-utf8) - Bibliothek zur Bearbeitung von Zeichenketten mit UTF-8-sicheren Ersetzungsmethoden.
* [Slugify](https://github.com/cocur/slugify) - Bibliothek zur Umwandlung von Zeichenketten in Slugs.
* [SQL Formatter](https://github.com/jdorn/sql-formatter/) - Bibliothek zur Formatierung von SQL-Anweisungen.
* [Stringy](https://github.com/voku/Stringy) - Bibliothek zur Bearbeitung von Zeichenketten mit Multibyte-Unterstützung.
* [Url highlight](https://github.com/vstelmakh/url-highlight) - Bibliothek zum Extrahieren von URLs aus Text und Umwandeln in anklickbare Links.
* [URLify](https://github.com/jbroadway/urlify) - PHP-Portierung von Djangos URLify.js.
* [UUID](https://github.com/ramsey/uuid) - Bibliothek zur Erzeugung von UUIDs.

### Zahlen
*Bibliotheken für die Arbeit mit Zahlen.*

* [Brick Math](https://github.com/brick/math) - Bibliothek mit Unterstützung für große Zahlen: `BigInteger`, `BigDecimal` und `BigRational`.
* [ByteUnits](https://github.com/gabrielelana/byte-units) - Bibliothek zum Parsen, Formatieren und Umrechnen von Byte-Einheiten im binären und metrischen System.
* [DecimalObject](https://github.com/php-collective/decimal-object) - Value Object zur einfachen und präzisen Verarbeitung von Dezimalzahlen und Gleitkommazahlen.
* [IP](https://github.com/darsyn/ip) - Unveränderliches Value Object für IPv4- und IPv6-Adressen.
* [PHP Conversion](https://github.com/cniska/php-conversion) - Eine weitere Bibliothek zur Umrechnung von Maßeinheiten.
* [PHP Units of Measure](https://github.com/triplepoint/php-units-of-measure) - Bibliothek zur Umrechnung von Maßeinheiten.
* [MathPHP](https://github.com/markrogoyski/math-php) - Mathematikbibliothek für PHP.

### Filtern, Bereinigen und Validieren
*Bibliotheken zum Filtern, Bereinigen und Validieren von Daten.*

* [Assert](https://github.com/beberlei/assert) - Validierungsbibliothek mit umfangreicher Auswahl an Assertions sowie Unterstützung für Assertion-Verkettung und verzögerte Assertions.
* [Aura.Filter](https://github.com/auraphp/Aura.Filter) - Werkzeuge zur Validierung und Bereinigung von Objekten und Arrays.
* [CakePHP Validation](https://github.com/cakephp/validation) - Eine weitere Validierungsbibliothek.
* [Filterus](https://github.com/ircmaxell/filterus) - Einfache PHP-Bibliothek zum Filtern.
* [HTML Purifier](https://github.com/ezyang/htmlpurifier) - HTML-Filter gemäß den Standards.
* [ISO-codes](https://github.com/ronanguilloux/IsoCodes) - Bibliothek zur Validierung von Eingaben nach Standards der ISO, des internationalen Finanzwesens, öffentlicher Verwaltungen, GS1, der Buchbranche sowie für Telefonnummern und Postleitzahlen vieler Länder.
* [JSON Schema](https://github.com/jsonrainbow/json-schema) - Bibliothek zur Validierung von [JSON Schema](https://json-schema.org/).
* [LibPhoneNumber for PHP](https://github.com/giggsey/libphonenumber-for-php) - PHP-Implementierung von Googles Bibliothek zur Verarbeitung von Telefonnummern.
* [MetaYaml](https://github.com/romaricdrigon/MetaYaml) - Bibliothek zur Schema-Validierung mit Unterstützung für YAML, JSON und XML.
* [Respect Validation](https://github.com/Respect/Validation) - Einfache Validierungsbibliothek.
* [Symfony HTML Sanitizer](https://github.com/symfony/html-sanitizer) - Bibliothek zur Bereinigung von HTML.
* [Valitron](https://github.com/vlucas/valitron) - Eine weitere Validierungsbibliothek.
* [Valinor](https://github.com/CuyZ/Valinor) - Bibliothek zur Zuordnung von Daten zu stark typisierten Value Objects.
* [Volan](https://github.com/serkin/Volan) - Eine weitere vereinfachte Validierungsbibliothek.

### APIs
*Bibliotheken und Webwerkzeuge zur Entwicklung von APIs.*

* [API Platform](https://api-platform.com) - Stelle in wenigen Minuten eine Hypermedia-REST-API bereit, die JSON-LD und das Hydra-Format nutzt.
* [Laminas API Tool Skeleton](https://github.com/laminas-api-tools/api-tools-skeleton) - API-Builder auf Basis des Laminas-Frameworks.
* [HAL](https://github.com/blongden/hal) - Bibliothek zum Erstellen von Hypertext Application Language (HAL).
* [Hateoas](https://github.com/willdurand/Hateoas) - Bibliothek für HATEOAS-REST-Webdienste.
* [Jane](https://github.com/janephp/janephp/) - OpenAPI-Clientgenerator mit Unterstützung für Validierung.
* [Negotiation](https://github.com/willdurand/Negotiation) - Bibliothek zur Inhaltsaushandlung.
* [Restler](https://github.com/Luracast/Restler) - Leichtgewichtiges Framework, um PHP-Methoden als RESTful-Web-API bereitzustellen.
* [PackageGenerator](https://github.com/WsdlToPhp/PackageGenerator) - Package Generator erstellt ein PHP-SDK aus jeder WSDL.

### Caching und Sperren
*Bibliotheken zum Zwischenspeichern von Daten und Erwerben von Sperren.*

* [APIx Cache](https://github.com/apix/cache) - Schlanker PSR-6-Cache-Wrapper für verschiedene Cache-Backends mit Schwerpunkt auf Cache-Tagging und -Indizierung.
* [CacheTool](https://github.com/gordalina/cachetool) - Werkzeug zum Löschen von APC-/Opcode-Caches über die Kommandozeile.
* [CakePHP Cache](https://github.com/cakephp/cache) - Caching-Bibliothek.
* [Doctrine Cache](https://github.com/doctrine/cache) - Caching-Bibliothek.
* [Metaphore](https://github.com/sobstel/metaphore) - Schutz vor Cache-Stampedes: Ein Semaphor verhindert den Dogpile-Effekt.
* [Stash](https://github.com/tedious/Stash) - Eine weitere Bibliothek für Caching.
* [Laminas Cache](https://github.com/laminas/laminas-cache) - Eine weitere Bibliothek für Caching.
* [Lock](https://github.com/php-lock/lock) - Bibliothek für Sperren zur exklusiven Ausführung.

### Datenstrukturen und Speicherung
*Bibliotheken zur Implementierung von Datenstrukturen oder Speicherverfahren.*

* [CakePHP Collection](https://github.com/cakephp/collection) - Einfache Bibliothek für Sammlungen.
* [Fractal](https://github.com/thephpleague/fractal) - Bibliothek zur Umwandlung komplexer Datenstrukturen in JSON-Ausgaben.
* [JsonMapper](https://github.com/cweiske/jsonmapper) - Bibliothek zur Zuordnung verschachtelter JSON-Strukturen zu PHP-Klassen.
* [JSON Machine](https://github.com/halaxa/json-machine) - Ermöglicht die Iteration über riesige JSON-Daten mit einem einfachen `foreach`.
* [msgpack.php](https://github.com/rybakit/msgpack.php) - Implementierung des [MessagePack](https://msgpack.org/)-Serialisierungsformats in reinem PHP.
* [Serializer](https://github.com/schmittjoh/serializer) - Bibliothek zur Serialisierung und Deserialisierung von Daten.
* [YaLinqo](https://github.com/Athari/YaLinqo) - Noch eine LINQ-to-Objects-Implementierung für PHP.
* [Laminas Serializer](https://github.com/laminas/laminas-serializer) - Eine weitere Bibliothek zur Serialisierung und Deserialisierung von Daten.

### Benachrichtigungen
*Bibliotheken für die Arbeit mit Benachrichtigungssoftware.*

* [JoliNotif](https://github.com/jolicode/JoliNotif) - Plattformübergreifende Bibliothek für Desktop-Benachrichtigungen (Unterstützung für Growl, notify-send, toaster usw.).

### Bereitstellung
*Bibliotheken zur Bereitstellung von Projekten.*

* [Deployer](https://github.com/deployphp/deployer) - Werkzeug zur Bereitstellung von Anwendungen.
* [Envoy](https://github.com/laravel/envoy) - Werkzeug zum Ausführen von SSH-Aufgaben mit PHP.

### Internationalisierung und Lokalisierung
*Bibliotheken für Internationalisierung (I18n) und Lokalisierung (L10n).*

* [Aura.Intl](https://github.com/auraphp/Aura.Intl) - Bietet Internationalisierungswerkzeuge (I18N), insbesondere paketbezogene Übersetzungen von Nachrichten pro Locale.
* [CakePHP I18n](https://github.com/cakephp/i18n) - Übersetzung von Nachrichten sowie Lokalisierung von Datums- und Zahlenformaten.

### Serverlos
*Bibliotheken und Werkzeuge zur Entwicklung serverloser Webanwendungen.*

* [Bref](https://bref.sh/) - Serverless-PHP auf AWS Lambda.
* [OpenWhisk](https://openwhisk.apache.org/) - Open-Source-Serverless-Cloud-Plattform.
* [Serverless Framework](https://www.serverless.com/framework) - Open-Source-Framework zum Erstellen von Serverless-Anwendungen.
* [Laravel Vapor](https://vapor.laravel.com/) - Serverless-Bereitstellungsplattform für Laravel auf Basis von AWS.

### Konfiguration
*Bibliotheken und Werkzeuge für die Konfiguration.*

* [PHP Dotenv](https://github.com/vlucas/phpdotenv) - Parst und lädt Umgebungsvariablen aus `.env`-Dateien.
* [Symfony Dotenv](https://github.com/symfony/dotenv) - Parst und lädt Umgebungsvariablen aus `.env`-Dateien.
* [Toml](https://github.com/php-collective/toml) - TOML-Parser und -Encoder mit AST-Zugriff und Fehlerbehandlung.

### LLMs
*Bibliotheken für die Arbeit mit Large Language Models.*

* [Anthropic](https://github.com/mozex/anthropic-php) - PHP-Client für die Anthropic-API mit Unterstützung für Nachrichten, Streaming, Tool-Nutzung und Stapelverarbeitung.
* [Anthropic for Laravel](https://github.com/mozex/anthropic-laravel) - Laravel-Wrapper für den Anthropic-PHP-Client mit Facades, Konfigurationsveröffentlichung und Test-Fakes.
* [Instructor for PHP](https://github.com/cognesy/instructor-php) - Strukturierte Datenausgaben mit LLMs in PHP.
* [LLPhant](https://github.com/LLPhant/LLPhant) - Umfassendes PHP-Framework für generative KI mit OpenAI GPT 4, inspiriert von Langchain.
* [OpenAI Client](https://github.com/openai-php/client) - OpenAI PHP ist ein leistungsstarker, von der Community gepflegter PHP-API-Client für die Interaktion mit der OpenAI-API.
* [OpenAI Client for Laravel](https://github.com/openai-php/laravel) - OpenAI PHP für Laravel ist ein leistungsstarker PHP-API-Client für Laravel zur Interaktion mit der OpenAI-API.
* [PHP Mistral AI SDK](https://github.com/SoftCreatR/php-mistral-ai-sdk) - Leistungsstarkes, benutzerfreundliches PHP-SDK für die Mistral-AI-API zur nahtlosen Integration moderner KI-Funktionen in PHP-Projekte.

### Drittanbieter-APIs
*Bibliotheken für den Zugriff auf APIs von Drittanbietern.*

* [Amazon Web Service SDK](https://github.com/aws/aws-sdk-php) - Offizielle PHP-SDK-Bibliothek für AWS.
* [AsyncAWS](https://async-aws.com/) - Inoffizielles asynchrones PHP-SDK für AWS.
* [Campaign Monitor](https://campaignmonitor.github.io/createsend-php/) - Offizielle PHP-Bibliothek für Campaign Monitor.
* [Github](https://github.com/KnpLabs/php-github-api) - Bibliothek zur Anbindung an die Github-API.
* [Mailgun](https://github.com/mailgun/mailgun-php) - Offizielle Mailgun-PHP-API.
* [Stripe](https://github.com/stripe/stripe-php) - Offizielle Stripe-Bibliothek für PHP.
* [Twilio](https://github.com/twilio/twilio-php) - Offizielle Twilio-PHP-REST-API.

### Erweiterungen
*Bibliotheken zur Entwicklung von PHP-Erweiterungen.*

* [PHP CPP](https://www.php-cpp.com/) - C++-Bibliothek zur Entwicklung von PHP-Erweiterungen.
* [Zephir](https://github.com/zephir-lang/zephir) - Kompilierte Sprache zwischen PHP und C++ zur Entwicklung von PHP-Erweiterungen.

### Sonstiges
*Nützliche Bibliotheken und Dienstprogramme, die in keine der obigen Kategorien passen.*

* [Annotations](https://github.com/doctrine/annotations) - Annotationsbibliothek (Teil von Doctrine).
* [BotMan](https://github.com/botman/botman) - Frameworkunabhängige PHP-Bibliothek zum Erstellen plattformübergreifender Chatbots.
* [ClassPreloader](https://github.com/ClassPreloader/ClassPreloader) - Bibliothek zur Optimierung des Autoloadings.
* [Ganesha](https://github.com/ackintosh/ganesha) - PHP-Implementierung des Circuit-Breaker-Musters.
* [Hprose-PHP](https://github.com/hprose/hprose-php) - Sprachenübergreifendes RPC.
* [Laravel Serializable Closure](https://github.com/laravel/serializable-closure) - Bibliothek zur Serialisierung von Closures.
* [noCAPTCHA](https://github.com/ARCANEDEV/noCAPTCHA) - Hilfsprogramm für Googles noCAPTCHA (reCAPTCHA).
* [Pagerfanta](https://github.com/whiteoctober/Pagerfanta) - Bibliothek für Paginierung.
* [Safe](https://github.com/thecodingmachine/safe) - Alle PHP-Funktionen neu geschrieben, damit sie statt false Ausnahmen auslösen.

# Software
*Software zum Einrichten einer Entwicklungsumgebung.*

### PHP-Installation
*Werkzeuge zur Installation und Verwaltung von PHP auf deinem Computer.*

* [Brew PHP Switcher](https://github.com/philcook/brew-php-switcher) - Brew PHP Switcher.
* [Homebrew](https://brew.sh/) - Paketmanager für macOS.
* [PHP Brew](https://github.com/phpbrew/phpbrew) - PHP-Versionsmanager und -Installer.
* [PHP Build](https://github.com/php-build/php-build) - Ein weiterer Installer für PHP-Versionen.
* [Static PHP CLI](https://github.com/crazywhalecc/static-php-cli) - Erstellt oder [lädt](https://dl.static-php.dev/static-php-cli/) statische Versionen von PHP CLI und FPM herunter.

### Entwicklungsumgebung
*Software und Werkzeuge zum Einrichten und Teilen einer Entwicklungsumgebung.*

* [Ansible](https://www.redhat.com/en/ansible-collaborative) - Radikal einfaches Orchestrierungs-Framework.
* [DDEV](https://github.com/ddev/ddev) - Lokale Webentwicklungsumgebung für PHP.
* [Docker](https://www.docker.com/) - Plattform zur Containerisierung.
* [Docker PHP Extension Installer](https://github.com/mlocati/docker-php-extension-installer) - Installiert PHP-Erweiterungen ganz einfach in Docker-Containern.
* [Docksal](https://github.com/docksal/docksal) - Einheitliche, von Docker :whale: unterstützte Webentwicklungsumgebungen für macOS, Windows und Linux.
* [Expose](https://github.com/exposedev/expose) - Open-Source-Tunneling-Dienst für PHP.
* [Lando](https://lando.dev/) - Entwicklungsumgebungen auf Knopfdruck.
* [Laravel Homestead](https://laravel.com/docs/master/homestead) - Lokale Entwicklungsumgebung für Laravel.
* [Laravel Herd](https://herd.laravel.com/windows) - PHP-Entwicklungsumgebung für macOS und Windows mit Ein-Klick-Installation.
* [Laradock](https://laradock.io/) - Vollständige PHP-Entwicklungsumgebung auf Basis von Docker.
* [PHPMon](https://phpmon.app/) - macOS-Menüleisten-App zur Verwaltung von PHP-Installationen (funktioniert mit [Laravel Valet](https://laravel.com/docs/master/valet)).
* [Puppet](https://www.puppet.com) - Framework und Anwendung zur Serverautomatisierung.
* [Solo](https://github.com/soloterm/solo) - Terminalanwendung zur Verwaltung von Prozessen einer Laravel-Anwendung.
* [Takeout](https://github.com/tighten/takeout) - Docker-basierter Abhängigkeitsmanager ausschließlich für die Entwicklung.
* [Vagrant](https://developer.hashicorp.com/vagrant) - Dienstprogramm für portable Entwicklungsumgebungen.

### Virtuelle Maschinen
*Alternative virtuelle PHP-Maschinen.*

* [Hack](https://hacklang.org/) - Programmiersprache für HHVM.
* [HHVM](https://github.com/facebook/hhvm) - Virtuelle Maschine, Laufzeitumgebung und JIT für PHP von Facebook.
* [PeachPie](https://github.com/peachpiecompiler/peachpie) - PHP-Compiler und Laufzeitumgebung für .NET und .NET Core.

### Texteditoren und IDEs
*Texteditoren und integrierte Entwicklungsumgebungen (IDE) mit PHP-Unterstützung.*

* [Eclipse for PHP Developers](https://www.eclipse.org/downloads/) - PHP-IDE auf Basis der Eclipse-Plattform.
* [Apache NetBeans](https://netbeans.apache.org/front/main/index.html) - IDE mit Unterstützung für PHP und HTML5.
* [PhpEd](https://www.nusphere.com/products/phped.htm) - IDE mit professionellem kommerziellem Debugger.
* [PhpStorm](https://www.jetbrains.com/phpstorm/) - Kommerzielle PHP-IDE.
* [VS Code](https://code.visualstudio.com/) - Open-Source-Codeeditor.

### Webanwendungen
*Webbasierte Anwendungen und Werkzeuge.*

* [3V4L](https://3v4l.org/) - Online-Shell für PHP und HHVM.
* [Adminer](https://www.adminer.org/en/) - Datenbankverwaltung in einer einzigen PHP-Datei.
* [Cachet](https://github.com/cachethq/cachet) - Open-Source-System für Statusseiten.
* [Lychee](https://github.com/electerious/Lychee) - Einfach zu bedienendes und ansprechend gestaltetes Fotomanagementsystem.
* [Leantime](https://leantime.io) - Strategisches Projektmanagementsystem für Menschen ohne Projektmanagement-Erfahrung.
* [MailCatcher](https://github.com/sj26/mailcatcher) - Webwerkzeug zum Abfangen und Anzeigen von E-Mails.
* [Mailpit](https://github.com/axllent/mailpit) - E-Mail- und SMTP-Testwerkzeug für Entwickler.
* [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - Weboberfläche für MySQL/MariaDB.
* [PHP Queue](https://github.com/CoderKungfu/php-queue) - Anwendung zur Verwaltung von Warteschlangen-Backends.
* [phpRedisAdmin](https://github.com/ErikDubbelboer/phpRedisAdmin) - Einfache Weboberfläche zur Verwaltung von [Redis](https://redis.io/)-Datenbanken.
* [PHPSandbox](https://phpsandbox.io) - Online-IDE für PHP im Browser.

### Infrastruktur
*Infrastruktur zur Bereitstellung von PHP-Anwendungen und -Diensten.*

* [appserver.io](https://github.com/appserver-io/appserver) - Multithreaded-Anwendungsserver für PHP, geschrieben in PHP.
* [php-pm](https://github.com/php-pm/php-pm) - Prozessmanager, Beschleuniger und Load-Balancer für PHP-Anwendungen.
* [RoadRunner](https://github.com/roadrunner-server/roadrunner) - Hochleistungsfähiger PHP-Anwendungsserver, Load-Balancer und Prozessmanager.

# Ressourcen
Verschiedene Ressourcen wie Bücher, Websites und Artikel, mit denen du deine PHP-Entwicklungskenntnisse und dein Wissen verbessern kannst.

### PHP-Websites
*Nützliche Websites rund um PHP.*

* [Nomad PHP](https://nomadphp.com/) - Online-Lernressource für PHP.
* [Laravel News](https://laravel-news.com/) - Offizieller Laravel-Blog.
* [PHP Annotated Monthly](https://blog.jetbrains.com/phpstorm/tag/php-annotated-monthly/) - Monatliche Zusammenfassung von PHP-Neuigkeiten.
* [PHP FIG](https://www.php-fig.org/) - PHP Framework Interoperability Group.
* [PHP Package Development Standards](https://php-pds.com/) - Standards für die Paketentwicklung mit PHP.
* [PHP School](https://www.phpschool.io/) - Open-Source-Lernangebote für PHP.
* [PHP The Right Way](https://phptherightway.com/) - Kurzübersicht zu Best Practices für PHP.
* [PHP UG](https://php.ug) - Website, die dabei hilft, die nächstgelegene PHP-Benutzergruppe (UG) zu finden.
* [PHP Watch](https://php.watch/) - Artikel, Neuigkeiten, kommende Änderungen, RFCs und mehr zu PHP.
* [Unit Testing Tips](https://testing-tips.sarvendev.com/) - Tipps zu Unit-Tests anhand von PHP-Beispielen.

### PHP-Bücher
*Hervorragende Bücher rund um PHP.*

* [Domain-Driven Design in PHP](https://leanpub.com/ddd-in-php) - Echte PHP-Beispiele zu Architekturmustern des Domain-Driven Designs (DDD).
* [Functional Programming in PHP](https://www.functionalphp.com/) - Buch über die Anwendung funktionaler Programmierprinzipien und -techniken in PHP.
* [Mastering Object-Orientated PHP](https://masteringobjectorientedphp.com/) - Buch von Brandon Savage über objektorientiertes PHP.
* [PHP Cookbook](https://www.oreilly.com/library/view/php-cookbook/9781098121310/) - Dieses Kochbuch bietet Code-Rezepte, mit denen sich zahlreiche Programmierprobleme lösen lassen.
* [Modernizing Legacy Applications in PHP](https://leanpub.com/mlaphp) - Buch von Paul M. Jones über die Modernisierung von Legacy-PHP-Anwendungen.
* [Scaling PHP Applications](https://www.scalingphpbook.com) - E-Book von Steve Corona über die Skalierung von PHP-Anwendungen.
* [Securing PHP: Core Concepts](https://leanpub.com/securingphp-coreconcepts) - Buch von Chris Cornutt über gängige Sicherheitsbegriffe und -praktiken für PHP.
* [Signaling PHP](https://leanpub.com/signalingphp) - Buch von Cal Evans über das Abfangen von PCNTL-Signalen in CLI-Skripten.
* [XML Parsing with PHP](https://www.phparch.com/books/xml-parsing-with-php/) - Dieses Buch behandelt das Parsen und Validieren von XML-Dokumenten, den Einsatz von XPath-Ausdrücken, die Arbeit mit Namespaces sowie das programmatische Erstellen und Ändern von XML-Dateien.

### PHP-Videos
*Hervorragende Videos rund um PHP.*

* [Laracasts](https://laracasts.com) - Screencasts zu Laravel, Vue JS und mehr.
* [Laravel YouTube Channel](https://www.youtube.com/channel/UCfO2GiQwb-cwJTb1CuRSkwg) - Offizieller Laravel-YouTube-Kanal.
* [Program With Gio](https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-) - PHP-8-Kurs von Gio.
* [Programming with Anthony](https://www.youtube.com/playlist?list=PLM-218uGSX3DQ3KsB5NJnuOqPqc5CW2kW) - Videoserie von Anthony Ferrara.
* [SymfonyCasts](https://symfonycasts.com/) - Screencasts und Tutorials zu PHP und Symfony.

### PHP-Konferenzen
*PHP-Konferenzen.*

* [Laracon EU](https://www.youtube.com/@LaraconEU) - Laracon EU ist eine zweitägige Veranstaltung für alle, die Laravel und verwandte Technologien kennenlernen oder ihr Wissen mit anderen teilen möchten.
* [PHP[TEK]](https://phptek.io/) - Die am längsten bestehende Webentwicklerkonferenz der Vereinigten Staaten mit Schwerpunkt auf der Programmiersprache PHP.
* [PHP UK Conference](https://www.youtube.com/user/phpukconference/videos) - Sammlung von Videos der PHP UK Conference.

### PHP-Podcasts
*Podcasts mit Schwerpunkt auf PHP-Themen.*

* [Laravel News Podcast](https://podcast.laravel-news.com/) - Der Laravel-News-Podcast informiert über die neuesten Nachrichten und Veranstaltungen rund um das Laravel-PHP-Framework.
* [Mostly Technical](https://mostlytechnical.com/) - Von Ian Landsman und Aaron Francis moderiert: eine lebhafte Diskussion über Laravel, Wirtschaft und eine bunte Mischung verwandter Themen.
* [No Compromises](https://show.nocompromises.io/) - Zwei erfahrene, meinungsstarke Programmier-Veteranen sprechen über Best Practices, basierend auf jahrelanger Arbeit mit Laravel-SaaS-Teams.
* [North Meets South Web Podcast](https://www.northmeetssouth.audio/) - Jacob Bennett und Michael Dyrynda überbrücken einen Zeitunterschied von 14,5 Stunden, um über den Alltag als Webentwickler zu sprechen.
* [Over Engineered](https://overengineered.fm/) - Podcast in Miniserien, in dem unwichtige Programmierfragen bis ins kleinste Detail untersucht werden.
* [PHP Internals News](https://phpinternals.news) - Podcast über die Interna von PHP.
* [PHP Town Hall](https://phptownhall.com/) - Ungezwungener PHP-Podcast von Ben Edmunds und Phil Sturgeon.
* [php[podcast] episodes from php[architect]](https://www.phparch.com/podcast/) - Offizieller Podcast von php[architect], dem branchenführenden Tech-Magazin und Verlag mit Schwerpunkt auf PHP und Webentwicklung.
* [PHPUgly](https://www.phpugly.com/) - Die Gedankengänge einiger überarbeiteter PHP-Entwickler.
* [The Laracasts Snippet](https://laracasts.simplecast.com) - Jede Folge des Laracasts Snippet bietet einen einzelnen Gedanken zu einem Aspekt der Webentwicklung.
* [The Laravel Podcast](https://laravelpodcast.com/) - Neuigkeiten und Diskussionen zu Laravel und PHP-Entwicklung.
* [The PHP Roundtable](https://phproundtable.com/) - Ungezwungene Gesprächsrunde von Entwicklern über Themen, die PHP-Nerds interessieren.

### PHP-Newsletter
*PHP-Neuigkeiten direkt in deinem Posteingang.*

* [PHP Weekly](https://www.phpweekly.com/) - Wöchentlicher Newsletter zu PHP.

### PHP-Lektüre
*Lesematerial rund um PHP.*

* [php[architect]](https://www.phparch.com/magazine/) - Monatlich erscheinendes Magazin rund um PHP.

### Lektüre zu PHP-Interna
*Lesematerial zu PHP-Interna und Performance.*

* [PHP RFCs](https://wiki.php.net/rfc) - Die zentrale Anlaufstelle für PHP-RFCs (Request for Comments).
* [Externals](https://externals.io/) - Interne Diskussionen zu PHP.
* [PHP RFC Watch](https://github.com/beberlei/php-rfc-watch) - Verfolge die neuesten PHP-[RFCs](https://wiki.php.net/rfc).
* [PHP Internals Book](https://www.phpinternalsbook.com/) - Online-Buch zu den Interna von PHP, geschrieben von drei Kernentwicklern.
