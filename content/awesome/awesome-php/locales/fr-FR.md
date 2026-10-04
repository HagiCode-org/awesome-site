# Sélection Awesome PHP [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Une sélection de bibliothèques PHP remarquables, de ressources et d’outils utiles.

## Contribuer et collaborer
Veuillez consulter [CONTRIBUTING](https://github.com/ziadoz/awesome-php/blob/master/CONTRIBUTING.md), [CODE-OF-CONDUCT](https://github.com/ziadoz/awesome-php/blob/master/CODE-OF-CONDUCT.md) et [COLLABORATING](https://github.com/ziadoz/awesome-php/blob/master/COLLABORATING.md) pour plus de détails.

## Sommaire
- [Sélection Awesome PHP](#awesome-php)
  - [Dépôts Composer](#composer-repositories)
  - [Gestion des dépendances](#dependency-management)
  - [Compléments pour la gestion des dépendances](#dependency-management-extras)
  - [Frameworks](#frameworks)
  - [Compléments pour les frameworks](#framework-extras)
  - [Systèmes de gestion de contenu (CMS)](#content-management-systems-cms)
  - [Composants](#components)
  - [Microframeworks](#micro-frameworks)
  - [Compléments pour les microframeworks](#micro-framework-extras)
  - [Routeurs](#routers)
  - [Moteurs de templates](#templating)
  - [Générateurs de sites statiques](#static-site-generators)
  - [HTTP](#http)
  - [Extraction de données web](#scraping)
  - [Intergiciels](#middlewares)
  - [URL](#url)
  - [E-mail](#email)
  - [Fichiers](#files)
  - [Flux](#streams)
  - [Injection de dépendances](#dependency-injection)
  - [Images](#imagery)
  - [Tests](#testing)
  - [Intégration continue](#continuous-integration)
  - [Documentation](#documentation)
  - [Sécurité](#security)
  - [Mots de passe](#passwords)
  - [Analyse de code](#code-analysis)
  - [Qualité du code](#code-quality)
  - [Analyse statique](#static-analysis)
  - [Architecture](#architectural)
  - [Débogage et profilage](#debugging-and-profiling)
  - [Suivi des erreurs et services de surveillance](#error-tracking-and-monitoring-services)
  - [Outils de construction](#build-tools)
  - [Exécuteurs de tâches](#task-runners)
  - [Navigation](#navigation)
  - [Gestion des ressources](#asset-management)
  - [Géolocalisation](#geolocation)
  - [Date et heure](#date-and-time)
  - [Événements](#event)
  - [Journalisation](#logging)
  - [Commerce électronique](#e-commerce)
  - [PDF](#pdf)
  - [Bureautique](#office)
  - [Bases de données](#database)
  - [Migrations](#migrations)
  - [NoSQL](#nosql)
  - [Files d’attente](#queue)
  - [Recherche](#search)
  - [Ligne de commande](#command-line)
  - [Authentification et autorisation](#authentication-and-authorization)
  - [Balisage et CSS](#markup-and-css)
  - [JSON](#json)
  - [Chaînes de caractères](#strings)
  - [Nombres](#numbers)
  - [Filtrage, assainissement et validation](#filtering-sanitizing-and-validation)
  - [API](#api)
  - [Mise en cache et verrouillage](#caching-and-locking)
  - [Structures de données et stockage](#data-structure-and-storage)
  - [Notifications](#notifications)
  - [Déploiement](#deployment)
  - [Internationalisation et localisation](#internationalisation-and-localisation)
  - [Sans serveur](#serverless)
  - [Configuration](#configuration)
  - [LLM](#llms)
  - [API tierces](#third-party-apis)
  - [Extensions](#extensions)
  - [Divers](#miscellaneous)
- [Logiciels](#software)
  - [Installation de PHP](#php-installation)
  - [Environnement de développement](#development-environment)
  - [Machines virtuelles](#virtual-machines)
  - [Éditeurs de texte et IDE](#text-editors-and-ides)
  - [Applications web](#web-applications)
  - [Infrastructure](#infrastructure)
- [Ressources](#resources)
  - [Sites web PHP](#php-websites)
  - [Livres PHP](#php-books)
  - [Vidéos PHP](#php-videos)
  - [Conférences PHP](#php-conferences)
  - [Podcasts PHP](#php-podcasts)
  - [Infolettres PHP](#php-newsletters)
  - [Lectures sur PHP](#php-reading)
  - [Lectures sur les composants internes de PHP](#php-internals-reading)

### Dépôts Composer
*Dépôts Composer.*

* [Firegento](https://packages.firegento.com/) - Dépôt Composer de modules Magento.
* [Packagist](https://packagist.org/) - Le dépôt de paquets PHP.
* [Packalyst](https://packalyst.com/) - Le dépôt de paquets Laravel.
* [Private Packagist](https://packagist.com/) - Archive de paquets Composer proposée en tant que service pour PHP.
* [WordPress Packagist](https://wpackagist.org/) - Gérez vos extensions avec Composer.

### Gestion des dépendances
*Bibliothèques de gestion des dépendances et des paquets.*

* [Composer](https://getcomposer.org/) - Un gestionnaire de paquets et de dépendances.
* [Composer Installers](https://github.com/composer/installers) - Un installateur de bibliothèques Composer compatible avec plusieurs frameworks.
* [Phive](https://phar.io/) - Un gestionnaire de PHAR.
* [Pickle](https://github.com/FriendsOfPHP/pickle) - Un installateur d’extensions PHP.
* [Pie](https://github.com/php/pie) - L’installateur officiel d’extensions PHP.

### Compléments pour la gestion des dépendances
*Compléments liés à la gestion des dépendances.*

* [Composer Merge Plugin](https://github.com/wikimedia/composer-merge-plugin) - Un plug-in Composer permettant de fusionner plusieurs fichiers `composer.json`.
* [Composer Normalize](https://github.com/ergebnis/composer-normalize) - Un plug-in qui normalise les fichiers `composer.json`.
* [Composer Patches](https://github.com/cweagans/composer-patches) - Un plug-in Composer qui applique des correctifs.
* [Composer Prefer Lowest Validator](https://github.com/dereuromark/composer-prefer-lowest) - Un plug-in qui vérifie si les dépendances minimales peuvent être installées et testées.
* [Composer Require Checker](https://github.com/maglnet/ComposerRequireChecker) - Un outil en ligne de commande qui analyse les dépendances Composer et vérifie qu’aucun symbole inconnu n’est utilisé dans le code source d’un paquet.
* [Composer Unused](https://github.com/composer-unused/composer-unused) - Un outil en ligne de commande qui recherche les paquets Composer inutilisés.
* [Repman](https://repman.io) - Un gestionnaire de dépôts privés de paquets PHP et un proxy Packagist.
* [Satis](https://github.com/composer/satis) - Un générateur de dépôts Composer statiques.

### Frameworks
*Frameworks de développement web.*

* [CakePHP](https://cakephp.org/) - Un framework de développement rapide d’applications.
* [CodeIgniter](https://codeigniter.com/) - Un puissant framework PHP très léger.
* [Ecotone](https://docs.ecotone.tech/) - Un bus de services PHP fondé sur les principes architecturaux du DDD, du CQRS et de l’Event Sourcing.
* [Laminas](https://getlaminas.org/) - Un framework composé de composants indépendants (anciennement Zend Framework).
* [Laravel](https://laravel.com/) - Un framework d’applications web à la syntaxe expressive et élégante.
* [Nette](https://nette.org) - Un framework web composé de composants éprouvés.
* [Phalcon](https://phalcon.io/en-us) - Un framework implémenté sous forme d’extension C.
* [Spiral](https://spiral.dev/) - Un framework PHP/Go hautes performances.
* [Symfony](https://symfony.com/) - Un ensemble de composants réutilisables et un framework web.
* [Tempest](https://github.com/tempestphp/tempest-framework) - Un framework qui sait se faire oublier.
* [Yii2](https://github.com/yiisoft/yii2/) - Un framework web rapide, sécurisé et efficace.

### Compléments pour les frameworks
*Compléments liés aux frameworks de développement web.*

* [CakePHP CRUD](https://github.com/friendsofcake/crud) - Un plug-in de développement rapide d’applications (RAD) pour CakePHP.
* [Filament PHP](https://filamentphp.com/) - Un puissant framework d’interface utilisateur open source pour Laravel.
* [Inertia.js](https://inertiajs.com/) - Un adaptateur pour créer des applications monopages à l’aide du routage et des contrôleurs côté serveur, sans API distincte.
* [LaravelS](https://github.com/hhxsv5/laravel-s) - Un adaptateur prêt à l’emploi entre Laravel/Lumen et Swoole.
* [Livewire](https://livewire.laravel.com/) - Des interfaces utilisateur puissantes et dynamiques côté client, sans quitter PHP.

### Systèmes de gestion de contenu (CMS)
*Outils de gestion de contenu numérique.*

* [Backdrop](https://backdropcms.org) - Un CMS destiné aux petites et moyennes entreprises ainsi qu’aux organismes sans but lucratif (fork de Drupal).
* [Concrete5](https://www.concretecms.com/) - Un CMS destiné aux utilisateurs ayant peu de compétences techniques.
* [CraftCMS](https://github.com/craftcms/cms) - Un CMS flexible et convivial pour créer des expériences numériques personnalisées sur le Web et ailleurs.
* [Drupal](https://new.drupal.org/home) - Un CMS de niveau entreprise.
* [Grav](https://github.com/getgrav/grav) - Un CMS moderne utilisant des fichiers comme stockage.
* [Joomla](https://www.joomla.org/) - Un autre CMS de premier plan.
* [Kirby](https://getkirby.com/) - Un CMS à fichiers qui s’adapte à tous les projets.
* [Magento](https://github.com/magento/magento2) - Une plateforme de commerce électronique open source très répandue.
* [Moodle](https://moodle.org/) - Une plateforme d’apprentissage open source.
* [OctoberCMS](https://octobercms.com/) - Un CMS basé sur Laravel.
* [OpenMage](https://github.com/OpenMage/magento-lts) - Un fork de la plateforme de commerce électronique Magento 1 en fin de vie.
* [Pico CMS](https://picocms.org/) - Un CMS à fichiers léger.
* [Silverstripe](https://www.silverstripe.org/) - Un CMS simple, flexible et sécurisé.
* [Statamic](https://statamic.com/) - Un CMS à fichiers et fondé sur Git, construit avec Laravel.
* [Sulu](https://sulu.io/) - Un CMS convivial pour les utilisateurs comme pour les développeurs, construit avec le framework Symfony.
* [TYPO3](https://typo3.org) - Un CMS de niveau entreprise.
* [WinterCMS](https://wintercms.com) - Un fork d’OctoberCMS maintenu par la communauté et construit avec Laravel.
* [WordPress](https://github.com/WordPress/WordPress) - Une plateforme de blog et un CMS.

### Composants
*Composants autonomes issus de frameworks web et de groupes de développement.*

* [Aura](https://auraphp.com/) - Des composants indépendants, entièrement découplés les uns des autres et de tout framework.
* [CakePHP Plugins](https://plugins.cakephp.org/) - Un répertoire de plug-ins CakePHP.
* [Laminas Components](https://docs.laminas.dev/components/) - Les composants qui constituent le framework Laminas.
* [Laravel Components](https://github.com/illuminate) - Les composants du framework Laravel.
* [League of Extraordinary Packages](https://thephpleague.com/) - Un groupe qui développe des paquets PHP.
* [Spatie Open Source](https://spatie.be/open-source) - Une collection de paquets PHP et Laravel open source.
* [Symfony Packages](https://symfony.com/packages) - Des bibliothèques découplées pour les applications PHP.

### Microframeworks
*Microframeworks et routeurs.*

* [Laravel Zero](https://laravel-zero.com) - Un microframework pour les applications en ligne de commande.
* [Mezzio](https://getexpressive.org/) - Un microframework de Laminas.
* [Minicli](https://github.com/minicli/minicli) - Un framework minimaliste, sans dépendances, pour créer des applications PHP centrées sur la ligne de commande.
* [Silly](https://github.com/mnapoli/silly) - Un microframework pour les applications en ligne de commande.
* [Slim](https://www.slimframework.com/) - Un autre microframework simple.

### Compléments pour les microframeworks
*Compléments liés aux microframeworks et aux routeurs.*

* [Slim Skeleton](https://github.com/slimphp/Slim-Skeleton) - Un squelette d’application pour Slim.
* [Slim PHP View](https://github.com/slimphp/PHP-View) - Un moteur de rendu PHP simple pour Slim.

### Routeurs
*Bibliothèques de gestion du routage des applications.*

* [Aura.Router](https://github.com/auraphp/Aura.Router) - Une bibliothèque de routage complète.
* [Fast Route](https://github.com/nikic/FastRoute) - Une bibliothèque de routage rapide.
* [Klein](https://github.com/klein/klein.php) - Un routeur flexible.
* [Route](https://github.com/thephpleague/route) - Une bibliothèque de routage construite sur Fast Route.

### Moteurs de templates
*Bibliothèques et outils de création de templates et d’analyse lexicale.*

* [Latte](https://latte.nette.org/) - Les templates PHP les plus sûrs et véritablement intuitifs.
* [MtHaml](https://github.com/arnaud-lb/MtHaml) - Une implémentation PHP du langage de templates HAML.
* [Mustache](https://github.com/bobthecow/mustache.php) - Une implémentation PHP du langage de templates Mustache.
* [PHPTAL](https://phptal.org/) - Une implémentation PHP du langage de templates [TAL](https://en.wikipedia.org/wiki/Template_Attribute_Language).
* [Plates](https://platesphp.com/) - Une bibliothèque de templates native à PHP.
* [Smarty](https://www.smarty.net/) - Un moteur de templates complémentaire à PHP.
* [Twig](https://twig.symfony.com/) - Un langage de templates complet.

### Générateurs de sites statiques
*Outils de prétraitement du contenu pour générer des pages web.*

* [Cecil](https://cecil.app/) - Un générateur de sites statiques simple et puissant, piloté par le contenu.
* [Couscous](https://couscous.io) - Un outil qui convertit la documentation Markdown en sites web.
* [Jigsaw](https://jigsaw.tighten.com/) - Des sites statiques simples avec Blade de Laravel.
* [Sculpin](https://sculpin.io) - Un outil qui convertit Markdown et Twig en HTML statique.

### HTTP
*Bibliothèques de manipulation du protocole HTTP.*

* [Buzz](https://github.com/kriswallsmith/Buzz) - Un autre client HTTP.
* [Guzzle](https://github.com/guzzle/guzzle) - Un client HTTP complet.
* [HTTPlug](https://httplug.io) - Une abstraction de client HTTP qui ne dépend d’aucune implémentation particulière.
* [Nyholm PSR-7](https://github.com/Nyholm/psr7) - Une implémentation PSR-7 très légère, rigoureuse et très rapide.
* [PHP VCR](https://php-vcr.github.io/) - Une bibliothèque qui enregistre et rejoue les requêtes HTTP.
* [Requests](https://github.com/WordPress/Requests) - Une bibliothèque HTTP simple.
* [Retrofit](https://github.com/tebru/retrofit-php) - Une bibliothèque qui facilite la création de clients d’API REST.
* [Saloon](https://github.com/saloonphp/saloon) - Un framework pour créer de belles intégrations d’API et des SDK.
* [Symfony HTTP Client](https://github.com/symfony/http-client) - Un composant pour récupérer des ressources HTTP de façon synchrone ou asynchrone.
* [Laminas Diactoros](https://github.com/laminas/laminas-diactoros) - Une implémentation des messages HTTP PSR-7.

### Extraction de données web
*Bibliothèques d’extraction de données sur les sites web et de détection des robots d’exploration.*

* [Chrome PHP](https://github.com/chrome-php/chrome) - Pilotez des instances de Chrome/Chromium sans interface graphique depuis PHP.
* [CrawlerDetect](https://github.com/JayBizzle/Crawler-Detect) - Une classe PHP qui détecte les robots d’exploration à partir de l’agent utilisateur.
* [DiDOM](https://github.com/Imangazaliev/DiDOM) - Un analyseur et extracteur HTML très rapide.
* [Embed](https://github.com/php-embed/Embed) - Un extracteur d’informations depuis n’importe quel service ou page web.
* [PHP Spider](https://github.com/mvdbos/php-spider) - Un robot d’exploration web PHP configurable et extensible.
* [Symfony Panther](https://github.com/symfony/panther) - Une bibliothèque PHP et Symfony de tests de navigateur et d’exploration web.

### Intergiciels
*Bibliothèques pour créer des applications à l’aide de middlewares.*

* [PSR-15 Middlewares](https://github.com/middlewares/psr15-middlewares) - Une collection inspirante de middlewares pratiques.
* [Stack](https://github.com/stackphp) - Une bibliothèque de middlewares empilables pour Symfony.
* [Laminas Stratigility](https://github.com/laminas/laminas-stratigility) - Un middleware PHP fondé sur PSR-7.

### URL
*Bibliothèques d’analyse des URL.*

* [PHP Domain Parser](https://github.com/jeremykendall/php-domain-parser) - Une bibliothèque d’analyse des suffixes de domaine.
* [sabre/uri](https://github.com/sabre-io/uri) - Une bibliothèque fonctionnelle de manipulation des URI.
* [Uri](https://github.com/thephpleague/uri) - Une autre bibliothèque de manipulation des URL.

### E-mail
*Bibliothèques d’envoi et d’analyse des e-mails.*

* [CssToInlineStyles](https://github.com/tijsverkoyen/CssToInlineStyles) - Une bibliothèque pour intégrer le CSS aux templates d’e-mail.
* [ddeboer/imap](https://github.com/ddeboer/imap) - Une bibliothèque IMAP PHP orientée objet et entièrement testée.
* [Email Reply Parser](https://github.com/willdurand/EmailReplyParser) - Une bibliothèque d’analyse des réponses aux e-mails.
* [Fetch](https://github.com/tedious/Fetch) - Une bibliothèque IMAP.
* [Mautic](https://github.com/mautic/mautic) - Automatisation du marketing par e-mail.
* [PHPMailer](https://github.com/PHPMailer/PHPMailer) - Une autre solution d’envoi de courrier.
* [Stampie](https://github.com/Stampie/Stampie) - Une bibliothèque pour les services de messagerie tels que [SendGrid](https://www.twilio.com/en-us/sendgrid), [PostMark](https://postmarkapp.com), [MailGun](https://www.mailgun.com/) et [MailChimp](https://mailchimp.com/features/transactional-email/).
* [Symfony Mailer](https://github.com/symfony/mailer) - Une bibliothèque puissante pour créer et envoyer des e-mails.

### Fichiers
*Bibliothèques de manipulation de fichiers et de détection des types MIME.*

* [CSV](https://github.com/thephpleague/csv) - Une bibliothèque de manipulation de données CSV.
* [Flysystem](https://github.com/thephpleague/Flysystem) - Une abstraction des systèmes de fichiers locaux et distants.
* [Gaufrette](https://github.com/KnpLabs/Gaufrette) - Une couche d’abstraction du système de fichiers.
* [PHP FFmpeg](https://github.com/PHP-FFmpeg/PHP-FFmpeg/) - Un wrapper de la bibliothèque vidéo [FFmpeg](https://www.ffmpeg.org/).
* [UnifiedArchive](https://github.com/wapmorgan/UnifiedArchive) - Un lecteur et écrivain unifié d’archives compressées.
* [Parquet](https://github.com/flow-php/parquet) - Une implémentation PHP du format de fichier Parquet.

### Flux
*Bibliothèques de manipulation de flux.*

* [ByteStream](https://amphp.org/byte-stream) - Une abstraction asynchrone des flux.

### Injection de dépendances
*Bibliothèques qui implémentent le modèle de conception d’injection de dépendances.*

* [Aura.Di](https://github.com/auraphp/Aura.Di) - Un conteneur d’injection de dépendances sérialisable prenant en charge l’injection par constructeur et par accesseur, les interfaces et les traits, l’héritage de configuration et bien plus encore.
* [Acclimate](https://github.com/AcclimateContainer/acclimate-container) - Une interface commune aux conteneurs d’injection de dépendances et aux localisateurs de services.
* [Auryn](https://github.com/rdlowrey/Auryn) - Un injecteur de dépendances récursif.
* [Container](https://github.com/thephpleague/container) - Un autre conteneur d’injection de dépendances flexible.
* [Disco](https://github.com/bitExpert/disco) - Un conteneur d’injection de dépendances compatible PSR-11 et fondé sur les annotations.
* [PHP-DI](https://php-di.org/) - Un conteneur d’injection de dépendances qui prend en charge l’auto-injection.
* [Pimple](https://github.com/silexphp/Pimple) - Un minuscule conteneur d’injection de dépendances.
* [Symfony DI](https://github.com/symfony/dependency-injection) - Un composant de conteneur d’injection de dépendances.

### Images
*Bibliothèques de manipulation d’images.*

* [Color Extractor](https://github.com/thephpleague/color-extractor) - Une bibliothèque d’extraction des couleurs d’images.
* [Glide](https://github.com/thephpleague/glide) - Une bibliothèque de manipulation d’images à la demande.
* [Image Hash](https://github.com/jenssegers/imagehash) - Une bibliothèque de génération d’empreintes perceptuelles d’images.
* [Image Optimizer](https://github.com/psliwa/image-optimizer) - Une bibliothèque d’optimisation d’images.
* [Imagine](https://imagine.readthedocs.io/en/latest/index.html) - Une bibliothèque de manipulation d’images.
* [Intervention Image](https://github.com/Intervention/image) - Une autre bibliothèque de manipulation d’images.
* [PHP Image Workshop](https://github.com/Sybio/ImageWorkshop) - Une autre bibliothèque de manipulation d’images.
* [PHP QR Code](https://github.com/chillerlan/php-qrcode/) - Un générateur et lecteur de codes QR.

### Tests
*Bibliothèques de test de bases de code et de génération de données de test.*

* [Alice](https://github.com/nelmio/alice) - Une bibliothèque expressive de génération de fixtures.
* [Behat](https://docs.behat.org/en/latest/) - Un framework de test de développement piloté par le comportement (BDD).
* [Codeception](https://github.com/Codeception/Codeception) - Un framework de test complet.
* [Faker](https://github.com/fakerphp/faker) - Une bibliothèque de génération de données factices.
* [Foundry](https://github.com/zenstruck/foundry) - Une fabrique de fixtures pour Doctrine.
* [Infection](https://github.com/infection/infection) - Un framework de tests de mutation PHP fondé sur l’AST.
* [Kahlan](https://github.com/kahlan/kahlan) - Un framework complet de tests unitaires et BDD, avec prise en charge intégrée des stubs, des mocks et de la couverture de code.
* [Mink](https://mink.behat.org/en/latest/) - Tests d’acceptation web.
* [Mockery](https://github.com/mockery/mockery) - Une bibliothèque d’objets simulés pour les tests.
* [Nette Tester](https://github.com/nette/tester) - Un framework de tests unitaires parallèles, productif et agréable à utiliser.
* [ParaTest](https://github.com/paratestphp/paratest) - Une bibliothèque de tests parallèles pour PHPUnit.
* [Pest](https://pestphp.com/) - Un framework de test axé sur la simplicité.
* [Phake](https://github.com/phake/phake) - Une autre bibliothèque d’objets simulés pour les tests.
* [PHP-Mock](https://github.com/php-mock/php-mock) - Une bibliothèque de mocks pour les fonctions intégrées de PHP (par ex. time()).
* [PHP MySQL Engine](https://github.com/vimeo/php-mysql-engine) - Un moteur MySQL écrit en PHP pur.
* [PHPSpec](https://github.com/phpspec/phpspec) - Une bibliothèque de tests unitaires fondée sur les spécifications de conception.
* [PHPT](https://php.github.io/php-src/miscellaneous/writing-tests.html) - Un outil de test utilisé par PHP lui-même.
* [PHPUnit](https://github.com/sebastianbergmann/phpunit) - Un framework de tests unitaires.
* [PHPUnit Polyfills](https://github.com/Yoast/PHPUnit-Polyfills/) - Simplifie l’exécution des tests PHPUnit avec plusieurs versions de PHPUnit.
* [Prophecy](https://github.com/phpspec/prophecy) - Un framework de simulation très prescriptif.
* [VFS Stream](https://github.com/bovigo/vfsStream) - Un wrapper de flux de système de fichiers virtuel pour les tests.

### Intégration continue
*Bibliothèques et applications d’intégration continue.*

* [CircleCI](https://circleci.com) - Une plateforme d’intégration continue.
* [GitLab CI](https://about.gitlab.com/solutions/continuous-integration/) - Une plateforme d’intégration continue.
* [Jenkins](https://www.jenkins.io/) - Une plateforme d’intégration continue avec [prise en charge de PHP](https://www.jenkins.io/solutions/php/).
* [SemaphoreCI](https://semaphore.io/) - Une plateforme d’intégration continue pour les projets open source et privés.
* [Travis CI](https://www.travis-ci.com) - Une plateforme d’intégration continue.
* [Setup PHP](https://github.com/shivammathur/setup-php) - Une GitHub Action pour PHP.

### Documentation
*Bibliothèques de génération de documentation de projets.*

* [APIGen](https://github.com/apigen/apigen) - Un autre générateur de documentation d’API.
* [daux.io](https://github.com/dauxio/daux.io) - Un générateur de documentation utilisant des fichiers Markdown.
* [phpDocumentor](https://phpdoc.org/) - Un générateur de documentation.
* [Scramble](https://github.com/dedoc/scramble) - Génère automatiquement la documentation OpenAPI à partir de votre code, sans annotations.
* [zircote/swagger-php](https://github.com/zircote/swagger-php) - Générez la documentation OpenAPI de votre API REST.

### Sécurité
*Bibliothèques de génération de nombres aléatoires sécurisés, de chiffrement des données, ainsi que d’analyse et de test des vulnérabilités.*

* [AntiXSS](https://github.com/voku/anti-xss) - Une bibliothèque qui tente de prévenir les attaques de script intersites (XSS) à l’aide d’une liste de blocage.
* [Halite](https://paragonie.com/project/halite) - Une bibliothèque simple de chiffrement utilisant [libsodium](https://github.com/jedisct1/libsodium).
* [Optimus](https://github.com/jenssegers/optimus) - Obfuscation d’identifiants fondée sur la méthode de hachage multiplicatif de Knuth.
* [OWASP](https://owasp.org/) - Explorez le monde de la cybersécurité.
* [PHPGGC](https://github.com/ambionics/phpggc) - Une bibliothèque de charges utiles PHP désérialisables accompagnée d’un outil pour les générer.
* [PHP Encryption](https://github.com/defuse/php-encryption) - Une bibliothèque sécurisée de chiffrement pour PHP.
* [PHPSecLib](https://github.com/phpseclib/phpseclib) - Une bibliothèque de communications sécurisées écrite en PHP pur.
* [Roave Security Advisories](https://github.com/Roave/SecurityAdvisories) - Ce paquet garantit que votre application n’installe aucune dépendance présentant des vulnérabilités de sécurité connues.
* [Secure Headers](https://github.com/BePsvPT/secure-headers) - Un paquet qui ajoute des en-têtes liés à la sécurité aux réponses HTTP.
* [SQLMap](https://github.com/sqlmapproject/sqlmap) - Un outil automatique d’injection SQL et de prise de contrôle de bases de données.
* [Zap](https://github.com/zaproxy/zaproxy) - Un outil intégré de tests d’intrusion pour les applications web.

### Mots de passe
*Bibliothèques et outils de gestion et de stockage des mots de passe.*

* [GenPhrase](https://github.com/timoh6/GenPhrase) - Une bibliothèque de génération de phrases secrètes aléatoires et sécurisées.
* [Password Validator](https://github.com/jeremykendall/password-validator) - Une bibliothèque de validation et de mise à niveau des hachages de mots de passe.
* [Password-Generator](https://github.com/hackzilla/password-generator) - Une bibliothèque PHP de génération de mots de passe aléatoires.
* [phpass](https://www.openwall.com/phpass/) - Un framework portable de hachage de mots de passe.
* [Zxcvbn PHP](https://github.com/bjeavons/zxcvbn-php) - Une bibliothèque PHP réaliste d’estimation de la robustesse des mots de passe, basée sur Zxcvbn JS.

### Analyse de code
*Bibliothèques et outils d’analyse, d’analyse syntaxique et de manipulation des bases de code.*

* [Better Reflection](https://github.com/Roave/BetterReflection) - Une bibliothèque de réflexion fondée sur l’AST qui permet d’analyser et de manipuler le code.
* [Bladestan](https://github.com/bladestan/bladestan) - Une extension PHPStan pour l’analyse statique des templates Blade.
* [Code Climate](https://codeclimate.com) - Un outil automatisé de revue de code.
* [Editorconfig-Checker](https://github.com/editorconfig-checker/editorconfig-checker.php) - Un utilitaire en ligne de commande qui vérifie que vos fichiers respectent les règles de votre `.editorconfig`.
* [GrumPHP](https://github.com/phpro/grumphp) - Un outil de qualité du code PHP.
* [PHP AST Viewer](https://php-ast-viewer.com/) - Un outil de visualisation de l’arbre syntaxique abstrait du code PHP.
* [PHP Magic Number Detector](https://github.com/povils/phpmnd) - Une bibliothèque qui détecte les nombres magiques dans le code.
* [PHP Parser](https://github.com/nikic/PHP-Parser) - Un analyseur PHP écrit en PHP.
* [PHP Semantic Versioning Checker](https://github.com/tomzx/php-semver-checker) - Un utilitaire en ligne de commande qui compare deux ensembles de sources et détermine la version sémantique à appliquer.
* [Phpactor](https://github.com/phpactor/phpactor) - Un outil PHP de complétion, de refactorisation et d’introspection.
* [PHPQA](https://github.com/EdgedesignCZ/phpqa) - Un outil pour exécuter des outils d’assurance qualité (phploc, phpcpd, phpcs, pdepend, phpmd, phpmetrics).
* [Rector](https://github.com/rectorphp/rector) - Un outil de mise à niveau et de refactorisation du code.
* [Scrutinizer](https://scrutinizer-ci.com/) - Un outil web permettant d’[examiner le code PHP](https://github.com/scrutinizer-ci/php-analyzer).
* [UBench](https://github.com/devster/ubench) - Une bibliothèque simple de microbenchmark.

### Qualité du code
*Bibliothèques de gestion de la qualité, du formatage et de l’analyse statique du code.*

* [CaptainHook](https://github.com/captainhook-git/captainhook) - Une bibliothèque de hooks Git facile à utiliser et flexible.
* [Laravel Pint](https://github.com/laravel/pint) - Une bibliothèque de correction des normes de codage pour Laravel.
* [PHP CodeSniffer](https://github.com/PHPCSStandards/PHP_CodeSniffer) - Une bibliothèque qui détecte et peut corriger automatiquement les violations des normes de codage PHP, CSS et JS.
* [PHP CS Fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) - Une bibliothèque de correction des normes de codage.
* [PHP CS Fixer Configurator](https://mlocati.github.io/php-cs-fixer-configurator/) - Une application web qui facilite la configuration des ensembles de règles de PHP CS Fixer.
* [PHP Mess Detector](https://github.com/phpmd/phpmd) - Une bibliothèque qui recherche dans le code les bogues, le code sous-optimal, les paramètres inutilisés et bien plus.
* [PHPCheckstyle](https://github.com/PHPCheckstyle/phpcheckstyle) - Un outil qui aide à respecter certaines conventions de codage.

### Analyse statique
*Bibliothèques d’analyse statique du code PHP.*

* [Dead Code Detector](https://github.com/shipmonk-rnd/dead-code-detector) - Une extension PHPStan qui détecte le code PHP inutilisé.
* [Deptrac](https://github.com/deptrac/deptrac) - Un outil d’analyse statique qui impose des règles de dépendance entre les couches architecturales.
* [Exakat](https://github.com/exakat/exakat) - Un moteur d’analyse statique pour PHP.
* [Larastan](https://github.com/larastan/larastan) - Un wrapper PHPStan pour Laravel qui ajoute l’analyse statique aux projets Laravel.
* [Mago](https://github.com/carthage-software/mago) - Une chaîne d’outils PHP visant à améliorer l’expérience de développement.
* [phan](https://github.com/phan/phan) - Un analyseur statique fondé sur PHP 7+ et l’extension php-ast.
* [PHP Architecture Tester](https://github.com/carlosas/phpat) - Un outil convivial de tests d’architecture pour PHP.
* [PHPCompatibility](https://github.com/PHPCompatibility/PHPCompatibility) - Un vérificateur de compatibilité PHP pour PHP CodeSniffer.
* [PHPDoc Parser](https://github.com/phpstan/phpdoc-parser) - Un analyseur phpDoc de nouvelle génération prenant en charge les types d’intersection et les génériques.
* [PHP Metrics](https://github.com/phpmetrics/PhpMetrics) - Une bibliothèque de métriques statiques.
* [PHPStan](https://github.com/phpstan/phpstan) - Un outil d’analyse statique pour PHP.
* [Psalm](https://github.com/vimeo/psalm) - Un outil d’analyse statique qui recherche les erreurs dans les applications PHP.

### Architecture
*Bibliothèques liées aux modèles de conception, aux approches de programmation et à l’organisation du code.*

* [Design Patterns PHP](https://github.com/DesignPatternsPHP/DesignPatternsPHP) - Un dépôt de modèles de conception logicielle implémentés en PHP.
* [Finite](https://github.com/yohang/Finite) - Une machine à états finis simple pour PHP.
* [Functional PHP](https://github.com/lstrojny/functional-php) - Une bibliothèque de programmation fonctionnelle.
* [Iter](https://github.com/nikic/iter) - Une bibliothèque qui fournit des primitives d’itération à l’aide de générateurs.
* [IterTools PHP](https://github.com/markrogoyski/itertools-php) - Une bibliothèque qui fournit des fonctions de traitement des itérables (similaires à itertools en Python).
* [Pipeline](https://github.com/thephpleague/pipeline) - Une implémentation du modèle de pipeline.
* [Porter](https://github.com/ScriptFUSION/Porter) - Une bibliothèque d’abstraction pour importer des données depuis des API web et d’autres sources.
* [RulerZ](https://github.com/K-Phoen/rulerz) - Un puissant moteur de règles et une implémentation du modèle de spécification.

### Débogage et profilage
*Bibliothèques et outils de débogage et de profilage du code.*

* [APM](https://pecl.php.net/package/APM) - Une extension de surveillance qui collecte erreurs et statistiques dans SQLite, MySQL ou StatsD.
* [Barbushin PHP Console](https://github.com/barbushin/php-console) - Une autre console de débogage web utilisant Google Chrome.
* [Kint](https://github.com/kint-php/kint) - Un outil de débogage et de profilage.
* [LaraDumps](https://github.com/laradumps/laradumps) - Un outil de débogage pour Laravel accompagné d’une application de bureau dédiée.
* [Metrics](https://github.com/beberlei/metrics) - Une bibliothèque API simple de métriques.
* [PCOV](https://github.com/krakjoe/pcov) - Un pilote autonome compatible avec la couverture de code.
* [PHP Console](https://github.com/Seldaek/php-console) - Une console de débogage web.
* [PHP Debug Bar](https://php-debugbar.com/) - Une barre d’outils de débogage.
* [PHPBench](https://github.com/phpbench/phpbench) - Un framework de benchmarking.
* [PHPSpy](https://github.com/adsr/phpspy) - Un profileur par échantillonnage à faible surcharge.
* [Symfony VarDumper](https://github.com/symfony/var-dumper) - Un composant de vidage de variables.
* [Tracy](https://github.com/nette/tracy) - Une bibliothèque simple de détection des erreurs, de journalisation et de mesure du temps.
* [Trap](https://github.com/buggregator/trap) - Un afficheur de variables enrichi doté d’une interface web et d’un plug-in pour IDE.
* [Whoops](https://github.com/filp/whoops) - Une élégante bibliothèque de gestion des erreurs.
* [xDebug](https://github.com/xdebug/xdebug) - Un outil de débogage et de profilage pour PHP.
* [XHProf](https://github.com/phacility/xhprof) - Un outil de profilage développé à l’origine par Facebook.
* [Z-Ray](https://www.zend.com/products/z-ray) - Un outil de débogage et de profilage pour Zend Server.

### Services de suivi des erreurs et de surveillance
*Outils de surveillance des performances applicatives et de suivi des erreurs, auto-hébergés ou dans le cloud.*

* [Blackfire](https://www.blackfire.io) - Un profileur de code à faible surcharge.
* [Buggregator](https://buggregator.dev) - Un serveur de débogage qui agrège les dumps de variables, les données de profilage, les e-mails, les journaux et les événements Sentry.
* [BugSnag](https://www.bugsnag.com/) - Suivi des erreurs et surveillance des utilisateurs réels.
* [Honeybadger](https://www.honeybadger.io/) - Suivi des erreurs et surveillance des applications pour les développeurs.
* [Rollbar](https://rollbar.com/) - Service de journalisation et de suivi des erreurs pour les équipes logicielles.
* [Sentry](https://sentry.io/welcome/) - Logiciel de surveillance des performances applicatives et de suivi des erreurs.
* [Tideways](https://tideways.com/) - Un outil de surveillance et de profilage.

### Outils de construction
*Outils de construction et d’automatisation de projets.*

* [Box](https://github.com/box-project/box) - Un utilitaire de création de fichiers PHAR.
* [PHPacker](https://github.com/phpacker/phpacker) - Un générateur de PHAR qui compile les applications PHP en exécutables autonomes.
* [Phing](https://www.phing.info/) - Un système de construction de projets PHP inspiré d’Apache Ant.
* [RMT](https://github.com/liip/RMT) - Une bibliothèque de gestion des versions et des publications logicielles.

### Exécuteurs de tâches
*Bibliothèques d’automatisation et d’exécution des tâches.*

* [Jobby](https://github.com/jobbyphp/jobby) - Un gestionnaire de tâches cron PHP qui ne nécessite pas de modifier crontab.
* [Robo](https://github.com/consolidation/Robo) - Un exécuteur de tâches PHP avec des configurations orientées objet.

### Navigation
*Outils de création de structures de navigation.*

* [KnpMenu](https://github.com/KnpLabs/KnpMenu) - Une bibliothèque de menus.
* [Menu](https://github.com/spatie/menu) - Une bibliothèque de menus flexible dotée d’une interface fluide.

### Gestion des ressources
*Outils de gestion, de compression et de minification des ressources de sites web.*

* [JShrink](https://github.com/tedious/JShrink) - Une bibliothèque de minification JavaScript.
* [Laravel Mix](https://github.com/laravel-mix/laravel-mix) - Un élégant wrapper de Webpack couvrant les besoins les plus courants.
* [Symfony Asset](https://github.com/symfony/asset) - Gère la génération et le versionnage des URL des ressources web.
* [Symfony Encore](https://github.com/symfony/webpack-encore) - Une API simple mais puissante de traitement et de compilation des ressources, construite autour de Webpack.

### Géolocalisation
*Bibliothèques de géocodage d’adresses et de manipulation des latitudes et longitudes.*

* [Country List](https://github.com/umpirsky/country-list) - Une liste de tous les pays avec leurs noms et leurs codes ISO 3166-1.
* [GeoCoder](https://geocoder-php.org/) - Une bibliothèque de géocodage.
* [GeoJSON](https://github.com/jmikola/geojson) - Une implémentation de GeoJSON.
* [GeoTools](https://github.com/thephpleague/geotools) - Une bibliothèque d’outils liés à la géolocalisation.
* [PHPGeo](https://github.com/mjaschen/phpgeo) - Une bibliothèque de géolocalisation simple.

### Date et heure
*Bibliothèques de manipulation des dates et des heures.*

* [Business Time](https://github.com/kylekatarnls/business-time) - Une extension de Carbon pour gérer les heures d’ouverture et les jours ouvrés.
* [CalendR](https://github.com/yohang/CalendR) - Une bibliothèque de gestion de calendriers.
* [Carbon](https://github.com/briannesbitt/Carbon) - Une simple extension de l’API DateTime.
* [Chronos](https://github.com/cakephp/chronos) - Une extension de l’API DateTime prenant en charge les dates et heures mutables et immuables.
* [Moment.php](https://github.com/fightbulc/moment.php) - Un gestionnaire DateTime PHP inspiré de Moment.js et prenant en charge l’internationalisation.
* [PHP RRule](https://github.com/rlanvin/php-rrule) - Une bibliothèque de gestion des dates et heures récurrentes, conforme à la spécification iCalendar RRule.
* [Yasumi](https://github.com/azuyalabs/yasumi) - Une bibliothèque de calcul des dates et des noms des jours fériés.

### Événements
*Bibliothèques événementielles ou implémentant des boucles d’événements non bloquantes.*

* [Amp](https://github.com/amphp/amp) - Une bibliothèque d’E/S non bloquantes pilotée par les événements.
* [Broadway](https://github.com/broadway/broadway) - Une bibliothèque d’Event Sourcing et de CQRS.
* [CakePHP Event](https://github.com/cakephp/event) - Une bibliothèque de distribution d’événements.
* [Elephant.io](https://github.com/ElephantIO/elephant.io) - Encore une bibliothèque de sockets web.
* [Evenement](https://github.com/igorw/evenement) - Une bibliothèque de distribution d’événements.
* [Event](https://github.com/thephpleague/event) - Une bibliothèque d’événements axée sur les événements de domaine.
* [Fast CGI Client](https://github.com/hollodotme/fast-cgi-client) - Un client pour envoyer des requêtes synchrones ou asynchrones via un socket php-fpm.
* [FrankenPHP](https://frankenphp.dev/) - Un serveur moderne pour applications PHP écrit en Go.
* [Pawl](https://github.com/ratchetphp/Pawl) - Un client asynchrone de sockets web.
* [Prooph Event Store](https://github.com/prooph/event-store) - Un composant d’Event Sourcing pour conserver les messages d’événement.
* [PHP Defer](https://github.com/php-defer/php-defer) - L’équivalent de l’instruction defer de Go pour PHP.
* [Ratchet](https://github.com/ratchetphp/Ratchet) - Une bibliothèque de sockets web.
* [ReactPHP](https://github.com/reactphp/reactphp) - Une bibliothèque d’E/S non bloquantes pilotée par les événements.
* [RxPHP](https://github.com/ReactiveX/RxPHP) - Une bibliothèque d’extensions réactives.
* [Swoole](https://github.com/swoole/swoole-src) - Un framework PHP hautes performances de communication réseau événementielle, asynchrone et concurrente, écrit en C.
* [Workerman](https://github.com/walkor/Workerman) - Une bibliothèque d’E/S non bloquantes pilotée par les événements.

### Journalisation
*Bibliothèques de génération et de manipulation de fichiers journaux.*

* [Monolog](https://github.com/Seldaek/monolog) - Un enregistreur complet.

### Commerce électronique
*Bibliothèques et applications de traitement des paiements et de création de boutiques en ligne.*

* [Money](https://github.com/moneyphp/money) - Une implémentation PHP du modèle monétaire de Fowler.
* [Brick Money](https://github.com/brick/money) - Une bibliothèque monétaire pour PHP prenant en charge les contextes, les arrondis en espèces et la conversion de devises.
* [OmniPay](https://github.com/thephpleague/omnipay) - Une bibliothèque de traitement des paiements multi-passerelles, indépendante des frameworks.
* [Payum](https://github.com/payum/payum) - Une bibliothèque d’abstraction des paiements.
* [Shopsys Framework](https://github.com/shopsys/shopsys/) - Une plateforme de commerce électronique open source destinée aux équipes de développement internes.
* [Shopware](https://github.com/shopware/shopware) - Un logiciel de commerce électronique hautement personnalisable.
* [Swap](https://github.com/florianv/swap) - Une bibliothèque de taux de change.
* [Sylius](https://sylius.com/) - Une solution de commerce électronique open source.

### PDF
*Bibliothèques et logiciels de manipulation de fichiers PDF.*

* [Browsershot](https://github.com/spatie/browsershot) - Convertit le HTML en image, en PDF ou en chaîne de caractères.
* [Dompdf](https://github.com/dompdf/dompdf) - Un convertisseur HTML vers PDF.
* [Gotenberg](https://github.com/gotenberg/gotenberg-php) - Un client PHP pour interagir avec Gotenberg.
* [Snappy](https://github.com/KnpLabs/snappy) - Une bibliothèque de génération de PDF et d’images.
* [TCPDF](https://tcpdf.org/) - Une classe PHP open source de génération de documents PDF.

### Bureautique
*Bibliothèques de manipulation de documents bureautiques.*

* [PHPPowerPoint](https://github.com/PHPOffice/PHPPresentation) - Une bibliothèque de manipulation des présentations Microsoft PowerPoint.
* [PHPWord](https://github.com/PHPOffice/PHPWord) - Une bibliothèque de manipulation des documents Microsoft Word.
* [PHPSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet) - Une bibliothèque PHP pure de lecture et d’écriture de feuilles de calcul (successeur de PHPExcel).
* [OpenSpout](https://github.com/openspout/openspout) - Un fork communautaire de `box/spout`, bibliothèque PHP permettant de lire et d’écrire rapidement et à grande échelle des feuilles de calcul (CSV, XLSX et ODS).

### Bases de données
*Bibliothèques d’interaction avec les bases de données par mappage objet-relationnel (ORM) ou mappage de données.*

* [Atlas.Orm](https://github.com/atlasphp/Atlas.Orm) - Une implémentation de mappeur de données pour votre modèle de persistance en PHP.
* [Aura.Sql](https://github.com/auraphp/Aura.Sql) - Étend PDO, l’API native, et fournit un profileur ainsi qu’un localisateur de connexions.
* [Aura.SqlQuery](https://github.com/auraphp/Aura.SqlQuery) - Des générateurs de requêtes indépendants pour MySQL, PostgreSQL, SQLite et Microsoft SQL Server.
* [Baum](https://github.com/etrepat/baum) - Une implémentation d’ensembles imbriqués pour Eloquent.
* [CakePHP ORM](https://github.com/cakephp/orm) - Un mappeur objet-relationnel implémentant le modèle Data Mapper.
* [Cycle ORM](https://github.com/cycle/orm) - Un mappeur de données et ORM PHP.
* [Doctrine Extensions](https://github.com/doctrine-extensions/DoctrineExtensions) - Une collection d’extensions comportementales pour Doctrine.
* [Doctrine](https://www.doctrine-project.org/) - Une bibliothèque complète de DBAL et ORM.
* [Laravel Eloquent](https://github.com/illuminate/database) - Un ORM simple.
* [ProxyManager](https://github.com/Ocramius/ProxyManager) - Un ensemble d’utilitaires de génération d’objets proxy pour les mappeurs de données.
* [RedBean](https://redbeanphp.com/index.php) - Un ORM léger qui ne nécessite aucune configuration.
* [Slimdump](https://github.com/webfactory/slimdump) - Un outil simple de vidage de bases MySQL.
* [Spot2](https://github.com/spotorm/spot2) - Un ORM MySQL utilisant le modèle Data Mapper.

### Migrations
*Bibliothèques de gestion des schémas de bases de données et des migrations.*

* [Doctrine Migrations](https://www.doctrine-project.org/projects/migrations.html) - Une bibliothèque de migrations pour Doctrine.
* [Phinx](https://github.com/cakephp/phinx) - Une autre bibliothèque de migrations de bases de données.
* [PHPMig](https://github.com/davedevelopment/phpmig) - Une autre bibliothèque de gestion des migrations.
* [Ruckusing](https://github.com/ruckus/ruckusing-migrations) - Des migrations de bases de données PHP à la manière des migrations ActiveRecord, avec prise en charge de MySQL, PostgreSQL et SQLite.

### NoSQL
*Bibliothèques de manipulation des systèmes de stockage « NoSQL ».*

* [MongoDB](https://github.com/mongodb/mongo-php-driver) - Pilote PHP de MongoDB.
* [MongoDB PHP Library](https://github.com/mongodb/mongo-php-library) - La bibliothèque PHP officielle de haut niveau pour MongoDB, construite sur le pilote PHP de MongoDB.
* [Predis](https://github.com/predis/predis) - Une bibliothèque Redis complète.

### Files d’attente
*Bibliothèques de gestion des files d’événements et de tâches.*

* [BunnyPHP](https://github.com/jakubkulhan/bunny) - Une bibliothèque AMQP (RabbitMQ) performante en PHP pur, synchrone et également asynchrone (ReactPHP).
* [Pheanstalk](https://github.com/pheanstalk/pheanstalk) - Une bibliothèque cliente pour Beanstalkd.
* [PHP AMQP](https://github.com/php-amqplib/php-amqplib) - Une bibliothèque AMQP en PHP pur.
* [Tarantool Queue](https://github.com/tarantool-php/queue) - Liaisons PHP pour Tarantool Queue.
* [Thumper](https://github.com/php-amqplib/Thumper) - Une bibliothèque de modèles RabbitMQ.
* [Enqueue](https://github.com/php-enqueue/enqueue-dev) - Un paquet de files de messages pour PHP prenant en charge RabbitMQ, AMQP, STOMP, Amazon SQS, Redis et les transports Doctrine.

### Recherche
*Bibliothèques et logiciels d’indexation et d’exécution de recherches sur les données.*

* [Elastica](https://github.com/ruflin/Elastica) - Une bibliothèque cliente pour ElasticSearch.
* [ElasticSearch PHP](https://github.com/elastic/elasticsearch-php) - La bibliothèque cliente officielle pour [ElasticSearch](https://www.elastic.co/).
* [Solarium](https://www.solarium-project.org/) - Une bibliothèque cliente pour [Solr](https://solr.apache.org/).
* [SphinxQL Query Builder](https://foolcode.github.io/SphinxQL-Query-Builder/) - Une bibliothèque de requêtes pour les moteurs de recherche [Sphinx](https://sphinxsearch.com/) et [Manticore](https://manticoresearch.com/).

### Ligne de commande
*Bibliothèques liées à la ligne de commande.*

* [Aura.Cli](https://github.com/auraphp/Aura.Cli) - Fournit à l’interface en ligne de commande l’équivalent des objets de requête (Context) et de réponse (Stdio), notamment la prise en charge de Getopt, ainsi qu’un objet Help indépendant pour décrire les commandes.
* [CLI Menu](https://github.com/php-school/cli-menu) - Une bibliothèque de création de menus en ligne de commande.
* [CLIFramework](https://github.com/c9s/CLIFramework) - Un framework en ligne de commande prenant en charge la génération de complétion pour zsh/bash, les sous-commandes et les contraintes sur les options. Il est également utilisé par phpbrew.
* [CLImate](https://github.com/thephpleague/climate) - Une bibliothèque d’affichage en couleur et de mise en forme spéciale.
* [Commando](https://github.com/nategood/commando) - Un autre analyseur simple d’options de ligne de commande.
* [Cron Expression](https://github.com/mtdowling/cron-expression) - Une bibliothèque de calcul des dates d’exécution cron.
* [GetOpt](https://github.com/getopt-php/getopt-php) - Un analyseur d’options de ligne de commande.
* [GetOptionKit](https://github.com/c9s/GetOptionKit) - Un autre analyseur d’options de ligne de commande.
* [PsySH](https://github.com/bobthecow/psysh) - Un autre REPL PHP.
* [ShellWrap](https://github.com/MrRio/shellwrap) - Une bibliothèque simple d’encapsulation de commandes en ligne de commande.

### Authentification et autorisation
*Bibliothèques d’implémentation de l’authentification et de l’autorisation des utilisateurs.*

* [Aura.Auth](https://github.com/auraphp/Aura.Auth) - Fournit des fonctionnalités d’authentification et de suivi des sessions à l’aide de différents adaptateurs.
* [SocialConnect Auth](https://github.com/socialConnect/auth) - Une bibliothèque open source de connexion via les réseaux sociaux (OAuth1, OAuth2, OpenID, OpenID Connect).
* [Json Web Token](https://github.com/lcobucci/jwt) - Des jetons JSON pour authentifier et transmettre des informations.
* [OAuth 1.0 Client](https://github.com/thephpleague/oauth1-client) - Une bibliothèque cliente OAuth 1.0.
* [OAuth 2.0 Client](https://github.com/thephpleague/oauth2-client) - Une bibliothèque cliente OAuth 2.0.
* [OAuth2 Server](https://bshaffer.github.io/oauth2-server-php-docs/) - Une autre implémentation de serveur OAuth2.
* [OAuth2 Server](https://oauth2.thephpleague.com/) - Un serveur d’authentification OAuth2, un serveur de ressources et une bibliothèque cliente.
* [Paseto](https://github.com/paragonie/paseto) - Jetons de sécurité indépendants de la plateforme.
* [PHP oAuthLib](https://github.com/daviddesberg/PHPoAuthLib) - Une autre bibliothèque OAuth.
* [TwitterOAuth](https://github.com/abraham/twitteroauth) - Une bibliothèque OAuth pour Twitter.

### Balisage et CSS
*Bibliothèques de manipulation des formats de balisage et CSS.*

* [Carve](https://github.com/markup-carve/carve-php) - Un analyseur PHP de [Carve](https://markup-carve.github.io/carve/), un langage de balisage léger dérivé de Markdown et Djot.
* [Cebe Markdown](https://github.com/cebe/markdown) - Un analyseur Markdown rapide et extensible.
* [CommonMark PHP](https://github.com/thephpleague/commonmark) - Un analyseur Markdown hautement extensible qui prend entièrement en charge la [spécification CommonMark](https://spec.commonmark.org/).
* [Decoda](https://github.com/milesj/decoda) - Une bibliothèque légère d’analyse de balisage.
* [Djot](https://github.com/php-collective/djot-php) - Un analyseur PHP de [Djot](https://djot.net/), un langage de balisage léger et moderne (successeur de Markdown).
* [Essence](https://github.com/essence/essence) - Une bibliothèque d’extraction de médias web.
* [Embera](https://github.com/mpratt/Embera) - Une bibliothèque cliente OEmbed.
* [HTML to Markdown](https://github.com/thephpleague/html-to-markdown) - Convertit le HTML en Markdown.
* [HTML5 PHP](https://github.com/Masterminds/html5-php) - Une bibliothèque d’analyse et de sérialisation HTML5.
* [Parsedown](https://github.com/erusev/parsedown) - Un autre analyseur Markdown.
* [PHP CSS Parser](https://github.com/MyIntervals/PHP-CSS-Parser) - Un analyseur de fichiers CSS écrit en PHP.
* [PHP Markdown](https://github.com/michelf/php-markdown) - Un analyseur Markdown.
* [Shiki PHP](https://github.com/spatie/shiki-php) - Un paquet PHP de coloration syntaxique [Shiki](https://github.com/shikijs/shiki).
* [VObject](https://github.com/sabre-io/vobject) - Une bibliothèque d’analyse des objets VCard et iCalendar.

### JSON
*Bibliothèques de manipulation du JSON.*

* [JSON Lint](https://github.com/Seldaek/jsonlint) - Un outil de vérification de la syntaxe JSON.
* [JSONMapper](https://github.com/JsonMapper/JsonMapper) - Une bibliothèque de mappage du JSON vers des objets PHP.
* [Lazy JSON](https://github.com/cerbero90/lazy-json) - Un analyseur paresseux économe en mémoire pour les fichiers JSON volumineux.

### Chaînes de caractères
*Bibliothèques d’analyse et de manipulation des chaînes de caractères.*

* [Agent](https://github.com/jenssegers/agent) - Un analyseur PHP d’agents utilisateurs pour ordinateurs et appareils mobiles, basé sur Mobiledetect.
* [ANSI to HTML5](https://github.com/sensiolabs/ansi-to-html) - Une bibliothèque de conversion d’ANSI vers HTML5.
* [Color Jizz](https://github.com/mikeemoo/ColorJizz-PHP) - Une bibliothèque de manipulation et de conversion des couleurs.
* [Device Detector](https://github.com/matomo-org/device-detector) - Une autre bibliothèque d’analyse des chaînes d’agents utilisateurs.
* [Hyphenation](https://github.com/heiglandreas/Org_Heigl_Hyphenator) - Césure de texte fondée sur l’algorithme de césure TeX.
* [Jieba-PHP](https://github.com/fukuball/jieba-php) - Un portage PHP de jieba, la bibliothèque Python de segmentation du texte chinois pour le traitement automatique des langues.
* [Mobile-Detect](https://github.com/serbanghita/Mobile-Detect) - Une classe PHP légère de détection des appareils mobiles (y compris les tablettes).
* [Patchwork UTF-8](https://github.com/nicolas-grekas/Patchwork-UTF8) - Une bibliothèque portable de manipulation des chaînes UTF-8.
* [Portable ASCII](https://github.com/voku/portable-ascii) - Une bibliothèque de conversion de chaînes en ASCII.
* [Portable UTF-8](https://github.com/voku/portable-utf8) - Une bibliothèque de manipulation des chaînes avec des méthodes de remplacement compatibles UTF-8.
* [Slugify](https://github.com/cocur/slugify) - Une bibliothèque de conversion des chaînes en slugs.
* [SQL Formatter](https://github.com/jdorn/sql-formatter/) - Une bibliothèque de formatage des instructions SQL.
* [Stringy](https://github.com/voku/Stringy) - Une bibliothèque de manipulation des chaînes avec prise en charge des caractères multioctets.
* [Url highlight](https://github.com/vstelmakh/url-highlight) - Une bibliothèque d’extraction des URL dans le texte et de conversion en liens cliquables.
* [URLify](https://github.com/jbroadway/urlify) - Un portage PHP de URLify.js de Django.
* [UUID](https://github.com/ramsey/uuid) - Une bibliothèque de génération d’UUID.

### Nombres
*Bibliothèques de manipulation des nombres.*

* [Brick Math](https://github.com/brick/math) - Une bibliothèque prenant en charge les grands nombres : `BigInteger`, `BigDecimal` et `BigRational`.
* [ByteUnits](https://github.com/gabrielelana/byte-units) - Une bibliothèque d’analyse, de formatage et de conversion des unités d’octets en systèmes binaire et métrique.
* [DecimalObject](https://github.com/php-collective/decimal-object) - Un objet-valeur facilitant la manipulation précise des décimales et des nombres à virgule flottante.
* [IP](https://github.com/darsyn/ip) - Un objet-valeur immuable de manipulation des adresses IPv4 et IPv6.
* [PHP Conversion](https://github.com/cniska/php-conversion) - Une autre bibliothèque de conversion d’unités de mesure.
* [PHP Units of Measure](https://github.com/triplepoint/php-units-of-measure) - Une bibliothèque de conversion d’unités de mesure.
* [MathPHP](https://github.com/markrogoyski/math-php) - Une bibliothèque mathématique pour PHP.

### Filtrage, assainissement et validation
*Bibliothèques de filtrage, d’assainissement et de validation des données.*

* [Assert](https://github.com/beberlei/assert) - Une bibliothèque de validation proposant un riche ensemble d’assertions, avec chaînage et évaluation différée des assertions.
* [Aura.Filter](https://github.com/auraphp/Aura.Filter) - Fournit des outils de validation et d’assainissement des objets et des tableaux.
* [CakePHP Validation](https://github.com/cakephp/validation) - Une autre bibliothèque de validation.
* [Filterus](https://github.com/ircmaxell/filterus) - Une bibliothèque simple de filtrage PHP.
* [HTML Purifier](https://github.com/ezyang/htmlpurifier) - Un filtre HTML conforme aux normes.
* [ISO-codes](https://github.com/ronanguilloux/IsoCodes) - Une bibliothèque de validation des entrées selon les normes ISO, de la finance internationale, des administrations publiques, de GS1 et de l’industrie du livre, ainsi que pour les numéros de téléphone et codes postaux de nombreux pays.
* [JSON Schema](https://github.com/jsonrainbow/json-schema) - Une bibliothèque de validation [JSON Schema](https://json-schema.org/).
* [LibPhoneNumber for PHP](https://github.com/giggsey/libphonenumber-for-php) - Une implémentation PHP de la bibliothèque de gestion des numéros de téléphone de Google.
* [MetaYaml](https://github.com/romaricdrigon/MetaYaml) - Une bibliothèque de validation de schémas prenant en charge YAML, JSON et XML.
* [Respect Validation](https://github.com/Respect/Validation) - Une bibliothèque simple de validation.
* [Symfony HTML Sanitizer](https://github.com/symfony/html-sanitizer) - Une bibliothèque d’assainissement du HTML.
* [Valitron](https://github.com/vlucas/valitron) - Une autre bibliothèque de validation.
* [Valinor](https://github.com/CuyZ/Valinor) - Une bibliothèque de mappage vers des objets-valeurs fortement typés.
* [Volan](https://github.com/serkin/Volan) - Une autre bibliothèque de validation simplifiée.

### API
*Bibliothèques et outils web de développement d’API.*

* [API Platform](https://api-platform.com) - Exposez en quelques minutes une API REST hypermédia prenant en charge JSON-LD et le format Hydra.
* [Laminas API Tool Skeleton](https://github.com/laminas-api-tools/api-tools-skeleton) - Un générateur d’API construit avec le framework Laminas.
* [HAL](https://github.com/blongden/hal) - Une bibliothèque de création de langage d’application hypermédia (HAL).
* [Hateoas](https://github.com/willdurand/Hateoas) - Une bibliothèque de services web REST HATEOAS.
* [Jane](https://github.com/janephp/janephp/) - Un générateur de clients OpenAPI avec prise en charge de la validation.
* [Negotiation](https://github.com/willdurand/Negotiation) - Une bibliothèque de négociation de contenu.
* [Restler](https://github.com/Luracast/Restler) - Un framework léger qui expose des méthodes PHP sous forme d’API web RESTful.
* [PackageGenerator](https://github.com/WsdlToPhp/PackageGenerator) - Package Generator génère un SDK PHP à partir de n’importe quel WSDL.

### Mise en cache et verrouillage
*Bibliothèques de mise en cache des données et d’acquisition de verrous.*

* [APIx Cache](https://github.com/apix/cache) - Un wrapper PSR-6 léger pour différents backends de cache, axé sur l’indexation et l’étiquetage du cache.
* [CacheTool](https://github.com/gordalina/cachetool) - Un outil en ligne de commande pour vider les caches APC/opcode.
* [CakePHP Cache](https://github.com/cakephp/cache) - Une bibliothèque de mise en cache.
* [Doctrine Cache](https://github.com/doctrine/cache) - Une bibliothèque de mise en cache.
* [Metaphore](https://github.com/sobstel/metaphore) - Protège contre les tempêtes de requêtes en utilisant un sémaphore pour éviter l’effet de ruée.
* [Stash](https://github.com/tedious/Stash) - Une autre bibliothèque de mise en cache.
* [Laminas Cache](https://github.com/laminas/laminas-cache) - Une autre bibliothèque de mise en cache.
* [Lock](https://github.com/php-lock/lock) - Une bibliothèque de verrouillage garantissant l’exécution exclusive.

### Structures de données et stockage
*Bibliothèques implémentant des structures de données ou des techniques de stockage.*

* [CakePHP Collection](https://github.com/cakephp/collection) - Une bibliothèque simple de collections.
* [Fractal](https://github.com/thephpleague/fractal) - Une bibliothèque de conversion de structures de données complexes en sortie JSON.
* [JsonMapper](https://github.com/cweiske/jsonmapper) - Une bibliothèque qui mappe des structures JSON imbriquées vers des classes PHP.
* [JSON Machine](https://github.com/halaxa/json-machine) - Permet d’itérer sur de très grands documents JSON avec un simple `foreach`.
* [msgpack.php](https://github.com/rybakit/msgpack.php) - Une implémentation PHP pure du format de sérialisation [MessagePack](https://msgpack.org/).
* [Serializer](https://github.com/schmittjoh/serializer) - Une bibliothèque de sérialisation et de désérialisation des données.
* [YaLinqo](https://github.com/Athari/YaLinqo) - Encore une bibliothèque LINQ to Objects pour PHP.
* [Laminas Serializer](https://github.com/laminas/laminas-serializer) - Une autre bibliothèque de sérialisation et de désérialisation des données.

### Notifications
*Bibliothèques de manipulation de logiciels de notification.*

* [JoliNotif](https://github.com/jolicode/JoliNotif) - Une bibliothèque multiplateforme de notifications de bureau (prise en charge de Growl, notify-send, toaster, etc.).

### Déploiement
*Bibliothèques de déploiement de projets.*

* [Deployer](https://github.com/deployphp/deployer) - Un outil de déploiement.
* [Envoy](https://github.com/laravel/envoy) - Un outil d’exécution de tâches SSH avec PHP.

### Internationalisation et localisation
*Bibliothèques d’internationalisation (I18n) et de localisation (L10n).*

* [Aura.Intl](https://github.com/auraphp/Aura.Intl) - Fournit des outils d’internationalisation (I18N), notamment la traduction de messages par locale et par paquet.
* [CakePHP I18n](https://github.com/cakephp/i18n) - Traduction des messages et localisation des dates et des nombres.

### Sans serveur
*Bibliothèques et outils de création d’applications web sans serveur.*

* [Bref](https://bref.sh/) - PHP sans serveur sur AWS Lambda.
* [OpenWhisk](https://openwhisk.apache.org/) - Une plateforme cloud sans serveur open source.
* [Serverless Framework](https://www.serverless.com/framework) - Un framework open source de création d’applications sans serveur.
* [Laravel Vapor](https://vapor.laravel.com/) - Une plateforme de déploiement sans serveur pour Laravel, propulsée par AWS.

### Configuration
*Bibliothèques et outils de configuration.*

* [PHP Dotenv](https://github.com/vlucas/phpdotenv) - Analyse et chargement de variables d’environnement depuis des fichiers `.env`.
* [Symfony Dotenv](https://github.com/symfony/dotenv) - Analyse et chargement de variables d’environnement depuis des fichiers `.env`.
* [Toml](https://github.com/php-collective/toml) - Un analyseur et encodeur TOML prenant en charge l’accès à l’AST et la récupération après erreur.

### LLM
*Bibliothèques de manipulation des grands modèles de langage.*

* [Anthropic](https://github.com/mozex/anthropic-php) - Un client PHP pour l’API Anthropic, prenant en charge les messages, le streaming, l’utilisation d’outils et le traitement par lots.
* [Anthropic for Laravel](https://github.com/mozex/anthropic-laravel) - Un wrapper Laravel pour le client PHP Anthropic, avec façades, publication de configuration et doublures de test.
* [Instructor for PHP](https://github.com/cognesy/instructor-php) - Sorties de données structurées avec des LLM en PHP.
* [LLPhant](https://github.com/LLPhant/LLPhant) - Un framework complet d’IA générative pour PHP utilisant OpenAI GPT 4, inspiré de Langchain.
* [OpenAI Client](https://github.com/openai-php/client) - OpenAI PHP est un client API PHP communautaire surpuissant qui permet d’interagir avec l’API OpenAI.
* [OpenAI Client for Laravel](https://github.com/openai-php/laravel) - OpenAI PHP pour Laravel est un client API PHP surpuissant qui permet d’interagir avec l’API OpenAI.
* [PHP Mistral AI SDK](https://github.com/SoftCreatR/php-mistral-ai-sdk) - Un SDK PHP puissant et facile à utiliser pour l’API Mistral AI, qui intègre aisément des fonctionnalités avancées reposant sur l’IA à vos projets PHP.

### API tierces
*Bibliothèques d’accès aux API tierces.*

* [Amazon Web Service SDK](https://github.com/aws/aws-sdk-php) - La bibliothèque officielle du SDK PHP AWS.
* [AsyncAWS](https://async-aws.com/) - Un SDK PHP asynchrone non officiel pour AWS.
* [Campaign Monitor](https://campaignmonitor.github.io/createsend-php/) - La bibliothèque PHP officielle de Campaign Monitor.
* [Github](https://github.com/KnpLabs/php-github-api) - Une bibliothèque d’interface avec l’API Github.
* [Mailgun](https://github.com/mailgun/mailgun-php) - L’API PHP officielle de Mailgun.
* [Stripe](https://github.com/stripe/stripe-php) - La bibliothèque PHP officielle de Stripe.
* [Twilio](https://github.com/twilio/twilio-php) - L’API REST PHP officielle de Twilio.

### Extensions
*Bibliothèques facilitant la création d’extensions PHP.*

* [PHP CPP](https://www.php-cpp.com/) - Une bibliothèque C++ de développement d’extensions PHP.
* [Zephir](https://github.com/zephir-lang/zephir) - Un langage compilé intermédiaire entre PHP et C++ pour développer des extensions PHP.

### Divers
*Bibliothèques et utilitaires utiles qui ne correspondent à aucune des catégories ci-dessus.*

* [Annotations](https://github.com/doctrine/annotations) - Une bibliothèque d’annotations (faisant partie de Doctrine).
* [BotMan](https://github.com/botman/botman) - Une bibliothèque PHP indépendante des frameworks pour créer des robots conversationnels multiplateformes.
* [ClassPreloader](https://github.com/ClassPreloader/ClassPreloader) - Une bibliothèque d’optimisation du chargement automatique.
* [Ganesha](https://github.com/ackintosh/ganesha) - Une implémentation PHP du modèle Circuit Breaker.
* [Hprose-PHP](https://github.com/hprose/hprose-php) - Un RPC interlangage.
* [Laravel Serializable Closure](https://github.com/laravel/serializable-closure) - Une bibliothèque qui permet de sérialiser les closures.
* [noCAPTCHA](https://github.com/ARCANEDEV/noCAPTCHA) - Un outil d’assistance pour le noCAPTCHA (reCAPTCHA) de Google.
* [Pagerfanta](https://github.com/whiteoctober/Pagerfanta) - Une bibliothèque de pagination.
* [Safe](https://github.com/thecodingmachine/safe) - Toutes les fonctions PHP réécrites pour lever des exceptions au lieu de renvoyer false.

# Logiciels
*Logiciels de création d’environnements de développement.*

### Installation de PHP
*Outils d’installation et de gestion de PHP sur votre ordinateur.*

* [Brew PHP Switcher](https://github.com/philcook/brew-php-switcher) - Commutateur de versions PHP pour Brew.
* [Homebrew](https://brew.sh/) - Un gestionnaire de paquets pour macOS.
* [PHP Brew](https://github.com/phpbrew/phpbrew) - Un gestionnaire et installateur de versions PHP.
* [PHP Build](https://github.com/php-build/php-build) - Un autre installateur de versions PHP.
* [Static PHP CLI](https://github.com/crazywhalecc/static-php-cli) - Compilez ou [téléchargez](https://dl.static-php.dev/static-php-cli/) des versions statiques de PHP CLI et FPM.

### Environnement de développement
*Logiciels et outils de création et de partage d’environnements de développement.*

* [Ansible](https://www.redhat.com/en/ansible-collaborative) - Un framework d’orchestration résolument simple.
* [DDEV](https://github.com/ddev/ddev) - Un environnement local de développement web pour PHP.
* [Docker](https://www.docker.com/) - Une plateforme de conteneurisation.
* [Docker PHP Extension Installer](https://github.com/mlocati/docker-php-extension-installer) - Installez facilement des extensions PHP dans des conteneurs Docker.
* [Docksal](https://github.com/docksal/docksal) - Des environnements de développement web unifiés, propulsés par Docker :whale:, pour macOS, Windows et Linux.
* [Expose](https://github.com/exposedev/expose) - Un service open source de tunnelisation PHP.
* [Lando](https://lando.dev/) - Des environnements de développement prêts à l’emploi.
* [Laravel Homestead](https://laravel.com/docs/master/homestead) - Un environnement local de développement pour Laravel.
* [Laravel Herd](https://herd.laravel.com/windows) - Un environnement de développement PHP en un clic pour macOS et Windows.
* [Laradock](https://laradock.io/) - Un environnement complet de développement PHP basé sur Docker.
* [PHPMon](https://phpmon.app/) - Une application macOS de barre de menus pour gérer les installations PHP (fonctionne avec [Laravel Valet](https://laravel.com/docs/master/valet)).
* [Puppet](https://www.puppet.com) - Un framework et une application d’automatisation des serveurs.
* [Solo](https://github.com/soloterm/solo) - Une application de terminal pour gérer les processus d’une application Laravel.
* [Takeout](https://github.com/tighten/takeout) - Un gestionnaire de dépendances réservé au développement, basé sur Docker.
* [Vagrant](https://developer.hashicorp.com/vagrant) - Un utilitaire d’environnement de développement portable.

### Machines virtuelles
*Machines virtuelles PHP alternatives.*

* [Hack](https://hacklang.org/) - Un langage de programmation pour HHVM.
* [HHVM](https://github.com/facebook/hhvm) - Une machine virtuelle, un environnement d’exécution et un compilateur JIT pour PHP, créés par Facebook.
* [PeachPie](https://github.com/peachpiecompiler/peachpie) - Un compilateur et environnement d’exécution PHP pour .NET et .NET Core.

### Éditeurs de texte et IDE
*Éditeurs de texte et environnements de développement intégrés (IDE) prenant en charge PHP.*

* [Eclipse for PHP Developers](https://www.eclipse.org/downloads/) - Un IDE PHP basé sur la plateforme Eclipse.
* [Apache NetBeans](https://netbeans.apache.org/front/main/index.html) - Un IDE prenant en charge PHP et HTML5.
* [PhpEd](https://www.nusphere.com/products/phped.htm) - Un IDE doté d’un débogueur professionnel commercial.
* [PhpStorm](https://www.jetbrains.com/phpstorm/) - Un IDE PHP commercial.
* [VS Code](https://code.visualstudio.com/) - Un éditeur de code open source.

### Applications web
*Applications et outils web.*

* [3V4L](https://3v4l.org/) - Un shell PHP et HHVM en ligne.
* [Adminer](https://www.adminer.org/en/) - Gestion de bases de données dans un seul fichier PHP.
* [Cachet](https://github.com/cachethq/cachet) - Le système open source de pages d’état.
* [Lychee](https://github.com/electerious/Lychee) - Un système de gestion de photos élégant et facile à utiliser.
* [Leantime](https://leantime.io) - Un système de gestion stratégique de projets conçu pour les non-spécialistes.
* [MailCatcher](https://github.com/sj26/mailcatcher) - Un outil web de capture et de consultation des e-mails.
* [Mailpit](https://github.com/axllent/mailpit) - Un outil de test des e-mails et de SMTP pour les développeurs.
* [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - Une interface web pour MySQL/MariaDB.
* [PHP Queue](https://github.com/CoderKungfu/php-queue) - Une application de gestion des backends de files d’attente.
* [phpRedisAdmin](https://github.com/ErikDubbelboer/phpRedisAdmin) - Une interface web simple pour gérer les bases de données [Redis](https://redis.io/).
* [PHPSandbox](https://phpsandbox.io) - Un IDE PHP en ligne dans le navigateur.

### Infrastructure
*Infrastructure de fourniture d’applications et de services PHP.*

* [appserver.io](https://github.com/appserver-io/appserver) - Un serveur d’applications multithread pour PHP, écrit en PHP.
* [php-pm](https://github.com/php-pm/php-pm) - Un gestionnaire de processus, accélérateur et répartiteur de charge pour les applications PHP.
* [RoadRunner](https://github.com/roadrunner-server/roadrunner) - Un serveur d’applications PHP, répartiteur de charge et gestionnaire de processus hautes performances.

# Ressources
Diverses ressources, notamment des livres, des sites web et des articles, pour approfondir vos compétences et connaissances en développement PHP.

### Sites web PHP
*Sites web utiles consacrés à PHP.*

* [Nomad PHP](https://nomadphp.com/) - Une ressource en ligne pour apprendre PHP.
* [Laravel News](https://laravel-news.com/) - Le blog officiel de Laravel.
* [PHP Annotated Monthly](https://blog.jetbrains.com/phpstorm/tag/php-annotated-monthly/) - Un condensé mensuel de l’actualité PHP.
* [PHP FIG](https://www.php-fig.org/) - Le groupe d’interopérabilité des frameworks PHP.
* [PHP Package Development Standards](https://php-pds.com/) - Des normes de développement de paquets PHP.
* [PHP School](https://www.phpschool.io/) - Une plateforme open source d’apprentissage de PHP.
* [PHP The Right Way](https://phptherightway.com/) - Un guide de référence rapide des bonnes pratiques PHP.
* [PHP UG](https://php.ug) - Un site web qui aide à trouver le groupe d’utilisateurs PHP (UG) le plus proche.
* [PHP Watch](https://php.watch/) - Articles, actualités, changements à venir, RFC et bien plus sur PHP.
* [Unit Testing Tips](https://testing-tips.sarvendev.com/) - Conseils de tests unitaires illustrés par des exemples en PHP.

### Livres PHP
*De formidables livres consacrés à PHP.*

* [Domain-Driven Design in PHP](https://leanpub.com/ddd-in-php) - Des exemples concrets écrits en PHP illustrant les styles architecturaux DDD.
* [Functional Programming in PHP](https://www.functionalphp.com/) - Un livre sur l’application des principes et techniques de programmation fonctionnelle en PHP.
* [Mastering Object-Orientated PHP](https://masteringobjectorientedphp.com/) - Un livre de Brandon Savage sur la programmation orientée objet en PHP.
* [PHP Cookbook](https://www.oreilly.com/library/view/php-cookbook/9781098121310/) - Ce livre de recettes propose des exemples de code pour résoudre divers problèmes de programmation.
* [Modernizing Legacy Applications in PHP](https://leanpub.com/mlaphp) - Un livre de Paul M. Jones sur la modernisation des applications PHP héritées.
* [Scaling PHP Applications](https://www.scalingphpbook.com) - Un livre numérique de Steve Corona sur la mise à l’échelle des applications PHP.
* [Securing PHP: Core Concepts](https://leanpub.com/securingphp-coreconcepts) - Un livre de Chris Cornutt sur les notions et pratiques courantes de sécurité pour PHP.
* [Signaling PHP](https://leanpub.com/signalingphp) - Un livre de Cal Evans sur la gestion des signaux PCNTL dans les scripts CLI.
* [XML Parsing with PHP](https://www.phparch.com/books/xml-parsing-with-php/) - Ce livre explique comment analyser et valider des documents XML, utiliser les expressions XPath et manipuler les espaces de noms, ainsi que créer et modifier des fichiers XML par programmation.

### Vidéos PHP
*De formidables vidéos consacrées à PHP.*

* [Laracasts](https://laracasts.com) - Des screencasts sur Laravel, Vue JS et bien plus.
* [Laravel YouTube Channel](https://www.youtube.com/channel/UCfO2GiQwb-cwJTb1CuRSkwg) - La chaîne YouTube officielle de Laravel.
* [Program With Gio](https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-) - Un cours sur PHP 8 proposé par Gio.
* [Programming with Anthony](https://www.youtube.com/playlist?list=PLM-218uGSX3DQ3KsB5NJnuOqPqc5CW2kW) - Une série de vidéos d’Anthony Ferrara.
* [SymfonyCasts](https://symfonycasts.com/) - Des screencasts et tutoriels sur PHP et Symfony.

### Conférences PHP
*Conférences PHP.*

* [Laracon EU](https://www.youtube.com/@LaraconEU) - Laracon EU est un événement de deux jours destiné aux personnes qui souhaitent découvrir Laravel et les technologies associées, ou partager leurs connaissances.
* [PHP[TEK]](https://phptek.io/) - La conférence de développeurs web la plus ancienne des États-Unis, consacrée au langage de programmation PHP.
* [PHP UK Conference](https://www.youtube.com/user/phpukconference/videos) - Une collection de vidéos de la conférence PHP UK.

### Podcasts PHP
*Podcasts consacrés à des sujets liés à PHP.*

* [Laravel News Podcast](https://podcast.laravel-news.com/) - Le podcast Laravel News vous présente toute l’actualité et les événements du framework PHP Laravel.
* [Mostly Technical](https://mostlytechnical.com/) - Présenté par Ian Landsman et Aaron Francis, Mostly Technical est une discussion animée autour de Laravel, des affaires et d’un ensemble éclectique de sujets connexes.
* [No Compromises](https://show.nocompromises.io/) - Deux vétérans aguerris de la programmation discutent des bonnes pratiques à partir de leurs années d’expérience avec des équipes SaaS utilisant Laravel.
* [North Meets South Web Podcast](https://www.northmeetssouth.audio/) - Jacob Bennett et Michael Dyrynda surmontent un décalage horaire de 14,5 heures pour discuter de leur vie de développeurs web.
* [Over Engineered](https://overengineered.fm/) - Un podcast en mini-séries où sont explorées en détail des questions de programmation sans importance.
* [PHP Internals News](https://phpinternals.news) - Un podcast sur les composants internes de PHP.
* [PHP Town Hall](https://phptownhall.com/) - Un podcast PHP décontracté de Ben Edmunds et Phil Sturgeon.
* [php[podcast] episodes from php[architect]](https://www.phparch.com/podcast/) - Le podcast officiel de php[architect], le principal magazine et éditeur technologique du secteur consacré à PHP et au développement web.
* [PHPUgly](https://www.phpugly.com/) - Les divagations de quelques développeurs PHP débordés.
* [The Laracasts Snippet](https://laracasts.simplecast.com) - Chaque épisode du Laracasts Snippet propose une réflexion sur un aspect du développement web.
* [The Laravel Podcast](https://laravelpodcast.com/) - Actualités et discussions sur le développement avec Laravel et PHP.
* [The PHP Roundtable](https://phproundtable.com/) - Une réunion informelle de développeurs qui discutent des sujets chers aux passionnés de PHP.

### Infolettres PHP
*L’actualité PHP directement dans votre boîte de réception.*

* [PHP Weekly](https://www.phpweekly.com/) - Une infolettre hebdomadaire sur PHP.

### Lectures sur PHP
*Lectures consacrées à PHP.*

* [php[architect]](https://www.phparch.com/magazine/) - Un magazine mensuel consacré à PHP.

### Lectures sur les composants internes de PHP
*Lectures consacrées aux composants internes ou aux performances de PHP.*

* [PHP RFCs](https://wiki.php.net/rfc) - La référence des RFC PHP (Request for Comments).
* [Externals](https://externals.io/) - Discussions internes de PHP.
* [PHP RFC Watch](https://github.com/beberlei/php-rfc-watch) - Suivez les dernières [RFC](https://wiki.php.net/rfc) PHP.
* [PHP Internals Book](https://www.phpinternalsbook.com/) - Un livre en ligne sur les composants internes de PHP, écrit par trois développeurs du cœur.
