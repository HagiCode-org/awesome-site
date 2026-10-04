# Selección de Awesome PHP [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Una lista seleccionada de bibliotecas, recursos y herramientas útiles de PHP.

## Contribuir y colaborar
Consulte [CONTRIBUTING](https://github.com/ziadoz/awesome-php/blob/master/CONTRIBUTING.md), [CODE-OF-CONDUCT](https://github.com/ziadoz/awesome-php/blob/master/CODE-OF-CONDUCT.md) y [COLLABORATING](https://github.com/ziadoz/awesome-php/blob/master/COLLABORATING.md) para obtener más información.

## Índice
- [Awesome PHP](#awesome-php)
  - [Repositorios de Composer](#composer-repositories)
  - [Gestión de dependencias](#dependency-management)
  - [Complementos para la gestión de dependencias](#dependency-management-extras)
  - [Marcos de trabajo](#frameworks)
  - [Complementos para frameworks](#framework-extras)
  - [Sistemas de gestión de contenidos (CMS)](#content-management-systems-cms)
  - [Componentes](#components)
  - [Microframeworks](#micro-frameworks)
  - [Complementos para microframeworks](#micro-framework-extras)
  - [Enrutadores](#routers)
  - [Plantillas](#templating)
  - [Generadores de sitios estáticos](#static-site-generators)
  - [HTTP](#http)
  - [Raspado web](#scraping)
  - [Middleware](#middlewares)
  - [URL](#url)
  - [Correo electrónico](#email)
  - [Archivos](#files)
  - [Flujos](#streams)
  - [Inyección de dependencias](#dependency-injection)
  - [Imágenes](#imagery)
  - [Pruebas](#testing)
  - [Integración continua](#continuous-integration)
  - [Documentación](#documentation)
  - [Seguridad](#security)
  - [Contraseñas](#passwords)
  - [Análisis de código](#code-analysis)
  - [Calidad del código](#code-quality)
  - [Análisis estático](#static-analysis)
  - [Arquitectura](#architectural)
  - [Depuración y perfilado](#debugging-and-profiling)
  - [Servicios de seguimiento de errores y monitorización](#error-tracking-and-monitoring-services)
  - [Herramientas de compilación](#build-tools)
  - [Ejecutores de tareas](#task-runners)
  - [Navegación](#navigation)
  - [Gestión de recursos](#asset-management)
  - [Geolocalización](#geolocation)
  - [Fecha y hora](#date-and-time)
  - [Eventos](#event)
  - [Registro](#logging)
  - [Comercio electrónico](#e-commerce)
  - [PDF](#pdf)
  - [Ofimática](#office)
  - [Bases de datos](#database)
  - [Migraciones](#migrations)
  - [NoSQL](#nosql)
  - [Colas](#queue)
  - [Búsqueda](#search)
  - [Línea de comandos](#command-line)
  - [Autenticación y autorización](#authentication-and-authorization)
  - [Marcado y CSS](#markup-and-css)
  - [JSON](#json)
  - [Cadenas](#strings)
  - [Números](#numbers)
  - [Filtrado, saneamiento y validación](#filtering-sanitizing-and-validation)
  - [API](#api)
  - [Caché y bloqueos](#caching-and-locking)
  - [Estructuras y almacenamiento de datos](#data-structure-and-storage)
  - [Notificaciones](#notifications)
  - [Despliegue](#deployment)
  - [Internacionalización y localización](#internationalisation-and-localisation)
  - [Sin servidor](#serverless)
  - [Configuración](#configuration)
  - [LLMs](#llms)
  - [API de terceros](#third-party-apis)
  - [Extensiones](#extensions)
  - [Varios](#miscellaneous)
- [Software](#software)
  - [Instalación de PHP](#php-installation)
  - [Entorno de desarrollo](#development-environment)
  - [Máquinas virtuales](#virtual-machines)
  - [Editores de texto e IDE](#text-editors-and-ides)
  - [Aplicaciones web](#web-applications)
  - [Infraestructura](#infrastructure)
- [Recursos](#resources)
  - [Sitios web sobre PHP](#php-websites)
  - [Libros sobre PHP](#php-books)
  - [Vídeos sobre PHP](#php-videos)
  - [Conferencias de PHP](#php-conferences)
  - [Pódcasts sobre PHP](#php-podcasts)
  - [Boletines sobre PHP](#php-newsletters)
  - [Lecturas sobre PHP](#php-reading)
  - [Lecturas sobre los componentes internos de PHP](#php-internals-reading)

### Repositorios de Composer
*Repositorios de Composer.*

* [Firegento](https://packages.firegento.com/) - Repositorio de módulos de Magento para Composer.
* [Packagist](https://packagist.org/) - El repositorio de paquetes de PHP.
* [Packalyst](https://packalyst.com/) - El repositorio de paquetes de Laravel.
* [Private Packagist](https://packagist.com/) - Archivo de paquetes de Composer como servicio para PHP.
* [WordPress Packagist](https://wpackagist.org/) - Administra tus plugins con Composer.

### Gestión de dependencias
*Bibliotecas para gestionar dependencias y paquetes.*

* [Composer](https://getcomposer.org/) - Un gestor de paquetes y dependencias.
* [Composer Installers](https://github.com/composer/installers) - Un instalador de bibliotecas de Composer compatible con varios frameworks.
* [Phive](https://phar.io/) - Un gestor de PHAR.
* [Pickle](https://github.com/FriendsOfPHP/pickle) - Un instalador de extensiones de PHP.
* [Pie](https://github.com/php/pie) - El instalador oficial de extensiones de PHP.

### Complementos para la gestión de dependencias
*Complementos relacionados con la gestión de dependencias.*

* [Composer Merge Plugin](https://github.com/wikimedia/composer-merge-plugin) - Un complemento de Composer para combinar varios archivos `composer.json`.
* [Composer Normalize](https://github.com/ergebnis/composer-normalize) - Un complemento para normalizar archivos `composer.json`.
* [Composer Patches](https://github.com/cweagans/composer-patches) - Un complemento de Composer para aplicar parches.
* [Composer Prefer Lowest Validator](https://github.com/dereuromark/composer-prefer-lowest) - Un complemento para comprobar si se pueden instalar y probar las dependencias mínimas.
* [Composer Require Checker](https://github.com/maglnet/ComposerRequireChecker) - Una herramienta de línea de comandos para analizar las dependencias de Composer y comprobar que el código fuente del paquete no use símbolos desconocidos.
* [Composer Unused](https://github.com/composer-unused/composer-unused) - Una herramienta de línea de comandos para buscar paquetes de Composer sin usar.
* [Repman](https://repman.io) - Un gestor privado de repositorios de paquetes PHP y proxy de Packagist.
* [Satis](https://github.com/composer/satis) - Un generador de repositorios estáticos de Composer.

### Marcos de trabajo
*Frameworks para el desarrollo web.*

* [CakePHP](https://cakephp.org/) - Un framework para el desarrollo rápido de aplicaciones.
* [CodeIgniter](https://codeigniter.com/) - Un framework PHP potente y muy ligero.
* [Ecotone](https://docs.ecotone.tech/) - Un bus de servicios para PHP basado en los principios arquitectónicos de DDD, CQRS y Event Sourcing.
* [Laminas](https://getlaminas.org/) - Un framework compuesto por componentes individuales (antes Zend Framework).
* [Laravel](https://laravel.com/) - Un framework para aplicaciones web con una sintaxis expresiva y elegante.
* [Nette](https://nette.org) - Un framework web compuesto por componentes maduros.
* [Phalcon](https://phalcon.io/en-us) - Un framework implementado como una extensión escrita en C.
* [Spiral](https://spiral.dev/) - Un framework PHP/Go de alto rendimiento.
* [Symfony](https://symfony.com/) - Un conjunto de componentes reutilizables y un framework web.
* [Tempest](https://github.com/tempestphp/tempest-framework) - Un framework que no se interpone en tu camino.
* [Yii2](https://github.com/yiisoft/yii2/) - Un framework web rápido, seguro y eficiente.

### Complementos para frameworks
*Complementos relacionados con los frameworks de desarrollo web.*

* [CakePHP CRUD](https://github.com/friendsofcake/crud) - Un plugin de desarrollo rápido de aplicaciones (RAD) para CakePHP.
* [Filament PHP](https://filamentphp.com/) - Un potente framework de interfaz de usuario de código abierto para Laravel.
* [Inertia.js](https://inertiajs.com/) - Un adaptador para crear aplicaciones de página única mediante enrutamiento y controladores del lado del servidor, sin una API aparte.
* [LaravelS](https://github.com/hhxsv5/laravel-s) - Un adaptador listo para usar entre Laravel/Lumen y Swoole.
* [Livewire](https://livewire.laravel.com/) - Interfaces de usuario front-end dinámicas y potentes, sin salir de PHP.

### Sistemas de gestión de contenidos (CMS)
*Herramientas para gestionar contenido digital.*

* [Backdrop](https://backdropcms.org) - Un CMS dirigido a pequeñas y medianas empresas y organizaciones sin ánimo de lucro (una bifurcación de Drupal).
* [Concrete5](https://www.concretecms.com/) - Un CMS dirigido a usuarios con conocimientos técnicos mínimos.
* [CraftCMS](https://github.com/craftcms/cms) - Un CMS flexible y fácil de usar para crear experiencias digitales personalizadas en la web y más allá.
* [Drupal](https://new.drupal.org/home) - Un CMS de nivel empresarial.
* [Grav](https://github.com/getgrav/grav) - Un CMS moderno basado en archivos.
* [Joomla](https://www.joomla.org/) - Otro CMS líder.
* [Kirby](https://getkirby.com/) - Un CMS basado en archivos que se adapta a cualquier proyecto.
* [Magento](https://github.com/magento/magento2) - Una plataforma de comercio electrónico de código abierto muy utilizada.
* [Moodle](https://moodle.org/) - Una plataforma de aprendizaje de código abierto.
* [OctoberCMS](https://octobercms.com/) - Un CMS creado sobre Laravel.
* [OpenMage](https://github.com/OpenMage/magento-lts) - Bifurcación de la plataforma de comercio electrónico Magento 1, cuyo soporte terminó.
* [Pico CMS](https://picocms.org/) - Un CMS ligero basado en archivos.
* [Silverstripe](https://www.silverstripe.org/) - Un CMS sencillo, flexible y seguro.
* [Statamic](https://statamic.com/) - Un CMS basado en archivos y Git, creado sobre Laravel.
* [Sulu](https://sulu.io/) - Un CMS fácil de usar para usuarios y desarrolladores, creado sobre Symfony Framework.
* [TYPO3](https://typo3.org) - Un CMS de nivel empresarial.
* [WinterCMS](https://wintercms.com) - Una bifurcación de OctoberCMS mantenida por la comunidad y creada sobre Laravel.
* [WordPress](https://github.com/WordPress/WordPress) - Una plataforma de blogs y CMS.

### Componentes
*Componentes independientes de frameworks de desarrollo web y grupos de desarrollo.*

* [Aura](https://auraphp.com/) - Componentes independientes, totalmente desacoplados entre sí y de cualquier framework.
* [CakePHP Plugins](https://plugins.cakephp.org/) - Un directorio de plugins de CakePHP.
* [Laminas Components](https://docs.laminas.dev/components/) - Los componentes que conforman Laminas Framework.
* [Laravel Components](https://github.com/illuminate) - Los componentes de Laravel Framework.
* [League of Extraordinary Packages](https://thephpleague.com/) - Un grupo de desarrollo de paquetes PHP.
* [Spatie Open Source](https://spatie.be/open-source) - Una colección de paquetes de código abierto para PHP y Laravel.
* [Symfony Packages](https://symfony.com/packages) - Bibliotecas desacopladas para aplicaciones PHP.

### Microframeworks
*Microframeworks y enrutadores.*

* [Laravel Zero](https://laravel-zero.com) - Un microframework para aplicaciones de consola.
* [Mezzio](https://getexpressive.org/) - Un microframework de Laminas.
* [Minicli](https://github.com/minicli/minicli) - Un framework minimalista y sin dependencias para crear aplicaciones PHP centradas en la línea de comandos.
* [Silly](https://github.com/mnapoli/silly) - Un microframework para aplicaciones de línea de comandos.
* [Slim](https://www.slimframework.com/) - Otro microframework sencillo.

### Complementos para microframeworks
*Complementos relacionados con microframeworks y enrutadores.*

* [Slim Skeleton](https://github.com/slimphp/Slim-Skeleton) - Un esqueleto para Slim.
* [Slim PHP View](https://github.com/slimphp/PHP-View) - Un renderizador PHP sencillo para Slim.

### Enrutadores
*Bibliotecas para gestionar el enrutamiento de aplicaciones.*

* [Aura.Router](https://github.com/auraphp/Aura.Router) - Una biblioteca de enrutamiento con todas las funciones.
* [Fast Route](https://github.com/nikic/FastRoute) - Una biblioteca de enrutamiento rápida.
* [Klein](https://github.com/klein/klein.php) - Un enrutador flexible.
* [Route](https://github.com/thephpleague/route) - Una biblioteca de enrutamiento basada en Fast Route.

### Plantillas
*Bibliotecas y herramientas para crear plantillas y analizar léxico.*

* [Latte](https://latte.nette.org/) - Las plantillas PHP más seguras y realmente intuitivas.
* [MtHaml](https://github.com/arnaud-lb/MtHaml) - Una implementación en PHP del lenguaje de plantillas HAML.
* [Mustache](https://github.com/bobthecow/mustache.php) - Una implementación en PHP del lenguaje de plantillas Mustache.
* [PHPTAL](https://phptal.org/) - Una implementación en PHP del lenguaje de plantillas [TAL](https://en.wikipedia.org/wiki/Template_Attribute_Language).
* [Plates](https://platesphp.com/) - Una biblioteca de plantillas nativa de PHP.
* [Smarty](https://www.smarty.net/) - Un motor de plantillas complementario a PHP.
* [Twig](https://twig.symfony.com/) - Un lenguaje de plantillas completo.

### Generadores de sitios estáticos
*Herramientas para preprocesar contenido y generar páginas web.*

* [Cecil](https://cecil.app/) - Un generador de sitios estáticos sencillo y potente, basado en contenido.
* [Couscous](https://couscous.io) - Una herramienta para convertir documentación Markdown en sitios web.
* [Jigsaw](https://jigsaw.tighten.com/) - Sitios estáticos sencillos con Blade de Laravel.
* [Sculpin](https://sculpin.io) - Una herramienta que convierte Markdown y Twig en HTML estático.

### HTTP
*Bibliotecas para trabajar con HTTP.*

* [Buzz](https://github.com/kriswallsmith/Buzz) - Otro cliente HTTP.
* [Guzzle](https://github.com/guzzle/guzzle) - Un cliente HTTP completo.
* [HTTPlug](https://httplug.io) - Una abstracción de cliente HTTP que no depende de una implementación específica.
* [Nyholm PSR-7](https://github.com/Nyholm/psr7) - Una implementación de PSR-7 muy ligera. Muy estricta y rápida.
* [PHP VCR](https://php-vcr.github.io/) - Una biblioteca para grabar y reproducir solicitudes HTTP.
* [Requests](https://github.com/WordPress/Requests) - Una biblioteca HTTP sencilla.
* [Retrofit](https://github.com/tebru/retrofit-php) - Una biblioteca que facilita la creación de clientes de API REST.
* [Saloon](https://github.com/saloonphp/saloon) - Un framework para crear integraciones y SDK de API de gran calidad.
* [Symfony HTTP Client](https://github.com/symfony/http-client) - Un componente para obtener recursos HTTP de forma síncrona o asíncrona.
* [Laminas Diactoros](https://github.com/laminas/laminas-diactoros) - Implementación de mensajes HTTP PSR-7.

### Raspado web
*Bibliotecas para extraer datos de sitios web y detectar rastreadores.*

* [Chrome PHP](https://github.com/chrome-php/chrome) - Controla instancias de Chrome/Chromium sin interfaz gráfica desde PHP.
* [CrawlerDetect](https://github.com/JayBizzle/Crawler-Detect) - Una clase PHP para detectar bots, rastreadores y arañas mediante el agente de usuario.
* [DiDOM](https://github.com/Imangazaliev/DiDOM) - Un analizador y extractor de HTML ultrarrápido.
* [Embed](https://github.com/php-embed/Embed) - Un extractor de información de cualquier servicio o página web.
* [PHP Spider](https://github.com/mvdbos/php-spider) - Una araña web PHP configurable y extensible.
* [Symfony Panther](https://github.com/symfony/panther) - Una biblioteca de pruebas de navegador y rastreo web para PHP y Symfony.

### Middleware
*Bibliotecas para crear aplicaciones mediante middleware.*

* [PSR-15 Middlewares](https://github.com/middlewares/psr15-middlewares) - Una colección inspiradora de middleware útiles.
* [Stack](https://github.com/stackphp) - Una biblioteca de middleware apilable para Symfony.
* [Laminas Stratigility](https://github.com/laminas/laminas-stratigility) - Middleware para PHP basado en PSR-7.

### URL
*Bibliotecas para analizar URL.*

* [PHP Domain Parser](https://github.com/jeremykendall/php-domain-parser) - Una biblioteca para analizar sufijos de dominios.
* [sabre/uri](https://github.com/sabre-io/uri) - Una biblioteca funcional para manipular URI.
* [Uri](https://github.com/thephpleague/uri) - Otra biblioteca para manipular URL.

### Correo electrónico
*Bibliotecas para enviar y analizar correos electrónicos.*

* [CssToInlineStyles](https://github.com/tijsverkoyen/CssToInlineStyles) - Una biblioteca para insertar CSS en las plantillas de correo electrónico.
* [ddeboer/imap](https://github.com/ddeboer/imap) - Una biblioteca IMAP orientada a objetos y con pruebas completas para PHP.
* [Email Reply Parser](https://github.com/willdurand/EmailReplyParser) - Una biblioteca para analizar respuestas de correo electrónico.
* [Fetch](https://github.com/tedious/Fetch) - Una biblioteca IMAP.
* [Mautic](https://github.com/mautic/mautic) - Automatización del marketing por correo electrónico.
* [PHPMailer](https://github.com/PHPMailer/PHPMailer) - Otra solución de envío de correo.
* [Stampie](https://github.com/Stampie/Stampie) - Una biblioteca para servicios de correo electrónico como [SendGrid](https://www.twilio.com/en-us/sendgrid), [PostMark](https://postmarkapp.com), [MailGun](https://www.mailgun.com/) y [MailChimp](https://mailchimp.com/features/transactional-email/).
* [Symfony Mailer](https://github.com/symfony/mailer) - Una potente biblioteca para crear y enviar correos electrónicos.

### Archivos
*Bibliotecas para manipular archivos y detectar tipos MIME.*

* [CSV](https://github.com/thephpleague/csv) - Una biblioteca para manipular datos CSV.
* [Flysystem](https://github.com/thephpleague/Flysystem) - Abstracción para sistemas de archivos locales y remotos.
* [Gaufrette](https://github.com/KnpLabs/Gaufrette) - Una capa de abstracción del sistema de archivos.
* [PHP FFmpeg](https://github.com/PHP-FFmpeg/PHP-FFmpeg/) - Un contenedor para la biblioteca de vídeo [FFmpeg](https://www.ffmpeg.org/).
* [UnifiedArchive](https://github.com/wapmorgan/UnifiedArchive) - Un lector y escritor unificado de archivos comprimidos.
* [Parquet](https://github.com/flow-php/parquet) - Implementación PHP del formato de archivo Parquet.

### Flujos
*Bibliotecas para trabajar con flujos.*

* [ByteStream](https://amphp.org/byte-stream) - Una abstracción asíncrona de flujos.

### Inyección de dependencias
*Bibliotecas que implementan el patrón de diseño de inyección de dependencias.*

* [Aura.Di](https://github.com/auraphp/Aura.Di) - Un contenedor de inyección de dependencias serializable, con inyección por constructor y setter, compatibilidad con interfaces y traits, herencia de configuración y mucho más.
* [Acclimate](https://github.com/AcclimateContainer/acclimate-container) - Una interfaz común para contenedores de inyección de dependencias y localizadores de servicios.
* [Auryn](https://github.com/rdlowrey/Auryn) - Un inyector de dependencias recursivo.
* [Container](https://github.com/thephpleague/container) - Otro contenedor flexible de inyección de dependencias.
* [Disco](https://github.com/bitExpert/disco) - Un contenedor de inyección de dependencias compatible con PSR-11 y basado en anotaciones.
* [PHP-DI](https://php-di.org/) - Un contenedor de inyección de dependencias compatible con autowiring.
* [Pimple](https://github.com/silexphp/Pimple) - Un contenedor de inyección de dependencias diminuto.
* [Symfony DI](https://github.com/symfony/dependency-injection) - Un componente de contenedor de inyección de dependencias.

### Imágenes
*Bibliotecas para manipular imágenes.*

* [Color Extractor](https://github.com/thephpleague/color-extractor) - Una biblioteca para extraer colores de imágenes.
* [Glide](https://github.com/thephpleague/glide) - Una biblioteca para manipular imágenes bajo demanda.
* [Image Hash](https://github.com/jenssegers/imagehash) - Una biblioteca para generar hashes perceptuales de imágenes.
* [Image Optimizer](https://github.com/psliwa/image-optimizer) - Una biblioteca para optimizar imágenes.
* [Imagine](https://imagine.readthedocs.io/en/latest/index.html) - Una biblioteca para manipular imágenes.
* [Intervention Image](https://github.com/Intervention/image) - Otra biblioteca para manipular imágenes.
* [PHP Image Workshop](https://github.com/Sybio/ImageWorkshop) - Otra biblioteca para manipular imágenes.
* [PHP QR Code](https://github.com/chillerlan/php-qrcode/) - Generador y lector de códigos QR.

### Pruebas
*Bibliotecas para probar bases de código y generar datos de prueba.*

* [Alice](https://github.com/nelmio/alice) - Una biblioteca expresiva para generar fixtures.
* [Behat](https://docs.behat.org/en/latest/) - Un framework de pruebas basado en el desarrollo guiado por comportamiento (BDD).
* [Codeception](https://github.com/Codeception/Codeception) - Un framework de pruebas de pila completa.
* [Faker](https://github.com/fakerphp/faker) - Una biblioteca para generar datos ficticios.
* [Foundry](https://github.com/zenstruck/foundry) - Una biblioteca para generar fábricas de fixtures para Doctrine.
* [Infection](https://github.com/infection/infection) - Un framework de pruebas de mutación para PHP basado en AST.
* [Kahlan](https://github.com/kahlan/kahlan) - Un framework de pruebas unitarias/BDD de pila completa, con compatibilidad integrada para stubs, mocks y cobertura de código.
* [Mink](https://mink.behat.org/en/latest/) - Pruebas de aceptación web.
* [Mockery](https://github.com/mockery/mockery) - Una biblioteca de objetos mock para pruebas.
* [Nette Tester](https://github.com/nette/tester) - Un framework productivo y agradable para realizar pruebas unitarias en paralelo.
* [ParaTest](https://github.com/paratestphp/paratest) - Una biblioteca para ejecutar PHPUnit en paralelo.
* [Pest](https://pestphp.com/) - Un framework de pruebas centrado en la sencillez.
* [Phake](https://github.com/phake/phake) - Otra biblioteca de objetos mock para pruebas.
* [PHP-Mock](https://github.com/php-mock/php-mock) - Una biblioteca de mocks para funciones integradas de PHP (p. ej., time()).
* [PHP MySQL Engine](https://github.com/vimeo/php-mysql-engine) - Un motor MySQL escrito íntegramente en PHP.
* [PHPSpec](https://github.com/phpspec/phpspec) - Una biblioteca de pruebas unitarias mediante especificaciones de diseño.
* [PHPT](https://php.github.io/php-src/miscellaneous/writing-tests.html) - Una herramienta de pruebas usada por el propio PHP.
* [PHPUnit](https://github.com/sebastianbergmann/phpunit) - Un framework de pruebas unitarias.
* [PHPUnit Polyfills](https://github.com/Yoast/PHPUnit-Polyfills/) - Simplifica la ejecución de pruebas PHPUnit en varias versiones de PHPUnit.
* [Prophecy](https://github.com/phpspec/prophecy) - Un framework de mocking con opiniones muy definidas.
* [VFS Stream](https://github.com/bovigo/vfsStream) - Un contenedor de flujo de sistema de archivos virtual para pruebas.

### Integración continua
*Bibliotecas y aplicaciones para la integración continua.*

* [CircleCI](https://circleci.com) - Una plataforma de integración continua.
* [GitLab CI](https://about.gitlab.com/solutions/continuous-integration/) - Una plataforma de integración continua.
* [Jenkins](https://www.jenkins.io/) - Una plataforma de integración continua con [compatibilidad para PHP](https://www.jenkins.io/solutions/php/).
* [SemaphoreCI](https://semaphore.io/) - Una plataforma de integración continua para proyectos de código abierto y privados.
* [Travis CI](https://www.travis-ci.com) - Una plataforma de integración continua.
* [Setup PHP](https://github.com/shivammathur/setup-php) - Una acción de GitHub para PHP.

### Documentación
*Bibliotecas para generar documentación de proyectos.*

* [APIGen](https://github.com/apigen/apigen) - Otro generador de documentación de API.
* [daux.io](https://github.com/dauxio/daux.io) - Un generador de documentación que usa archivos Markdown.
* [phpDocumentor](https://phpdoc.org/) - Un generador de documentación.
* [Scramble](https://github.com/dedoc/scramble) - Genera automáticamente documentación OpenAPI a partir del código, sin anotaciones.
* [zircote/swagger-php](https://github.com/zircote/swagger-php) - Genera documentación OpenAPI para tu API RESTful.

### Seguridad
*Bibliotecas para generar números aleatorios seguros, cifrar datos y analizar y probar vulnerabilidades.*

* [AntiXSS](https://github.com/voku/anti-xss) - Una biblioteca que intenta prevenir ataques de Cross-Site Scripting (XSS) mediante una lista de bloqueo.
* [Halite](https://paragonie.com/project/halite) - Una biblioteca sencilla para cifrar datos con [libsodium](https://github.com/jedisct1/libsodium).
* [Optimus](https://github.com/jenssegers/optimus) - Ofuscación de ID basada en el método de hash multiplicativo de Knuth.
* [OWASP](https://owasp.org/) - Explora el mundo de la ciberseguridad.
* [PHPGGC](https://github.com/ambionics/phpggc) - Una biblioteca de cargas útiles PHP no serializables y una herramienta para generarlas.
* [PHP Encryption](https://github.com/defuse/php-encryption) - Biblioteca de cifrado seguro para PHP.
* [PHPSecLib](https://github.com/phpseclib/phpseclib) - Una biblioteca de comunicaciones seguras escrita íntegramente en PHP.
* [Roave Security Advisories](https://github.com/Roave/SecurityAdvisories) - Este paquete garantiza que tu aplicación no tenga dependencias instaladas con vulnerabilidades de seguridad conocidas.
* [Secure Headers](https://github.com/BePsvPT/secure-headers) - Un paquete que añade encabezados relacionados con la seguridad a las respuestas HTTP.
* [SQLMap](https://github.com/sqlmapproject/sqlmap) - Una herramienta automática para detectar inyecciones SQL y tomar el control de bases de datos.
* [Zap](https://github.com/zaproxy/zaproxy) - Una herramienta integrada para pruebas de penetración en aplicaciones web.

### Contraseñas
*Bibliotecas y herramientas para gestionar y almacenar contraseñas.*

* [GenPhrase](https://github.com/timoh6/GenPhrase) - Una biblioteca para generar frases de contraseña aleatorias y seguras.
* [Password Validator](https://github.com/jeremykendall/password-validator) - Una biblioteca para validar y actualizar hashes de contraseñas.
* [Password-Generator](https://github.com/hackzilla/password-generator) - Biblioteca PHP para generar contraseñas aleatorias.
* [phpass](https://www.openwall.com/phpass/) - Un framework portable para calcular hashes de contraseñas.
* [Zxcvbn PHP](https://github.com/bjeavons/zxcvbn-php) - Una biblioteca PHP para estimar de forma realista la fortaleza de las contraseñas, basada en Zxcvbn JS.

### Análisis de código
*Bibliotecas y herramientas para analizar, procesar y manipular bases de código.*

* [Better Reflection](https://github.com/Roave/BetterReflection) - Una biblioteca de reflexión basada en AST que permite analizar y manipular código.
* [Bladestan](https://github.com/bladestan/bladestan) - Una extensión de PHPStan para el análisis estático de plantillas Blade.
* [Code Climate](https://codeclimate.com) - Revisión automatizada de código.
* [Editorconfig-Checker](https://github.com/editorconfig-checker/editorconfig-checker.php) - Una utilidad de línea de comandos que comprueba que tus archivos cumplan las reglas de `.editorconfig`.
* [GrumPHP](https://github.com/phpro/grumphp) - Una herramienta de calidad de código PHP.
* [PHP AST Viewer](https://php-ast-viewer.com/) - Una herramienta para visualizar el árbol de sintaxis abstracta del código PHP.
* [PHP Magic Number Detector](https://github.com/povils/phpmnd) - Una biblioteca que detecta números mágicos en el código.
* [PHP Parser](https://github.com/nikic/PHP-Parser) - Un analizador de PHP escrito en PHP.
* [PHP Semantic Versioning Checker](https://github.com/tomzx/php-semver-checker) - Una utilidad de línea de comandos que compara dos conjuntos de código fuente y determina la versión semántica adecuada que debe aplicarse.
* [Phpactor](https://github.com/phpactor/phpactor) - Herramienta de autocompletado, refactorización e introspección para PHP.
* [PHPQA](https://github.com/EdgedesignCZ/phpqa) - Una herramienta para ejecutar herramientas de control de calidad (phploc, phpcpd, phpcs, pdepend, phpmd, phpmetrics).
* [Rector](https://github.com/rectorphp/rector) - Una herramienta para actualizar y refactorizar código.
* [Scrutinizer](https://scrutinizer-ci.com/) - Una herramienta web para [analizar código PHP](https://github.com/scrutinizer-ci/php-analyzer).
* [UBench](https://github.com/devster/ubench) - Una sencilla biblioteca de microevaluación de rendimiento.

### Calidad del código
*Bibliotecas para gestionar la calidad del código, el formato y el linting.*

* [CaptainHook](https://github.com/captainhook-git/captainhook) - Una biblioteca de hooks de Git sencilla y flexible.
* [Laravel Pint](https://github.com/laravel/pint) - Una herramienta para corregir estándares de código en Laravel.
* [PHP CodeSniffer](https://github.com/PHPCSStandards/PHP_CodeSniffer) - Una biblioteca que detecta y puede corregir automáticamente infracciones de estándares de código en PHP, CSS y JS.
* [PHP CS Fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) - Una biblioteca para corregir estándares de código.
* [PHP CS Fixer Configurator](https://mlocati.github.io/php-cs-fixer-configurator/) - Una aplicación web que ayuda a configurar conjuntos de reglas de PHP CS Fixer.
* [PHP Mess Detector](https://github.com/phpmd/phpmd) - Una biblioteca que analiza el código en busca de errores, código subóptimo, parámetros sin usar y más.
* [PHPCheckstyle](https://github.com/PHPCheckstyle/phpcheckstyle) - Una herramienta que ayuda a cumplir determinadas convenciones de código.

### Análisis estático
*Bibliotecas para realizar análisis estático del código PHP.*

* [Dead Code Detector](https://github.com/shipmonk-rnd/dead-code-detector) - Una extensión de PHPStan para encontrar código PHP sin usar.
* [Deptrac](https://github.com/deptrac/deptrac) - Una herramienta de análisis estático para aplicar reglas de dependencias entre capas arquitectónicas.
* [Exakat](https://github.com/exakat/exakat) - Un motor de análisis estático para PHP.
* [Larastan](https://github.com/larastan/larastan) - Un wrapper de PHPStan para Laravel que incorpora análisis estático a los proyectos Laravel.
* [Mago](https://github.com/carthage-software/mago) - Una cadena de herramientas para PHP que busca mejorar la experiencia de desarrollo.
* [phan](https://github.com/phan/phan) - Un analizador estático basado en PHP 7 o posterior y la extensión php-ast.
* [PHP Architecture Tester](https://github.com/carlosas/phpat) - Una herramienta de pruebas arquitectónicas fácil de usar para PHP.
* [PHPCompatibility](https://github.com/PHPCompatibility/PHPCompatibility) - Un comprobador de compatibilidad de PHP para PHP CodeSniffer.
* [PHPDoc Parser](https://github.com/phpstan/phpdoc-parser) - Analizador de phpDoc de última generación, compatible con tipos de intersección y genéricos.
* [PHP Metrics](https://github.com/phpmetrics/PhpMetrics) - Una biblioteca de métricas estáticas.
* [PHPStan](https://github.com/phpstan/phpstan) - Una herramienta de análisis estático para PHP.
* [Psalm](https://github.com/vimeo/psalm) - Una herramienta de análisis estático para encontrar errores en aplicaciones PHP.

### Arquitectura
*Bibliotecas relacionadas con patrones de diseño, enfoques de programación y formas de organizar el código.*

* [Design Patterns PHP](https://github.com/DesignPatternsPHP/DesignPatternsPHP) - Un repositorio de patrones de software implementados en PHP.
* [Finite](https://github.com/yohang/Finite) - Una máquina de estados finitos sencilla para PHP.
* [Functional PHP](https://github.com/lstrojny/functional-php) - Una biblioteca de programación funcional.
* [Iter](https://github.com/nikic/iter) - Una biblioteca que ofrece primitivas de iteración mediante generadores.
* [IterTools PHP](https://github.com/markrogoyski/itertools-php) - Una biblioteca que ofrece funciones para trabajar con entidades iterables (similar a la biblioteca itertools de Python).
* [Pipeline](https://github.com/thephpleague/pipeline) - Una implementación del patrón de tuberías.
* [Porter](https://github.com/ScriptFUSION/Porter) - Una biblioteca de abstracción para importar datos desde API web y otras fuentes.
* [RulerZ](https://github.com/K-Phoen/rulerz) - Un potente motor de reglas e implementación del patrón Specification.

### Depuración y perfilado
*Bibliotecas y herramientas para depurar errores y perfilar código.*

* [APM](https://pecl.php.net/package/APM) - Extensión de monitorización que recopila errores y estadísticas en SQLite/MySQL/StatsD.
* [Barbushin PHP Console](https://github.com/barbushin/php-console) - Otra consola web de depuración que usa Google Chrome.
* [Kint](https://github.com/kint-php/kint) - Una herramienta de depuración y perfilado.
* [LaraDumps](https://github.com/laradumps/laradumps) - Una herramienta de depuración para Laravel con una aplicación de escritorio dedicada.
* [Metrics](https://github.com/beberlei/metrics) - Una biblioteca sencilla de API de métricas.
* [PCOV](https://github.com/krakjoe/pcov) - Un controlador autónomo compatible con la cobertura de código.
* [PHP Console](https://github.com/Seldaek/php-console) - Una consola web de depuración.
* [PHP Debug Bar](https://php-debugbar.com/) - Una barra de herramientas de depuración.
* [PHPBench](https://github.com/phpbench/phpbench) - Un framework de evaluación comparativa.
* [PHPSpy](https://github.com/adsr/phpspy) - Un perfilador de muestreo de baja sobrecarga.
* [Symfony VarDumper](https://github.com/symfony/var-dumper) - Un componente para volcar variables.
* [Tracy](https://github.com/nette/tracy) - Una biblioteca sencilla para detectar errores, registrar eventos y medir tiempos.
* [Trap](https://github.com/buggregator/trap) - Un volcado de variables ampliado con interfaz web y plugin para IDE.
* [Whoops](https://github.com/filp/whoops) - Una atractiva biblioteca para gestionar errores.
* [xDebug](https://github.com/xdebug/xdebug) - Una herramienta de depuración y perfilado para PHP.
* [XHProf](https://github.com/phacility/xhprof) - Una herramienta de perfilado desarrollada originalmente por Facebook.
* [Z-Ray](https://www.zend.com/products/z-ray) - Una herramienta de depuración y perfilado para Zend Server.

### Servicios de seguimiento de errores y monitorización
*Herramientas de monitorización del rendimiento de aplicaciones y seguimiento de errores, autoalojadas o en la nube.*

* [Blackfire](https://www.blackfire.io) - Un perfilador de código de baja sobrecarga.
* [Buggregator](https://buggregator.dev) - Un servidor de depuración que agrega volcados de variables, datos de perfilado, correos electrónicos, registros y eventos de Sentry.
* [BugSnag](https://www.bugsnag.com/) - Monitorización de errores y de usuarios reales.
* [Honeybadger](https://www.honeybadger.io/) - Seguimiento de errores y monitorización de aplicaciones para desarrolladores.
* [Rollbar](https://rollbar.com/) - Servicio de registro y seguimiento de errores para equipos de software.
* [Sentry](https://sentry.io/welcome/) - Software de monitorización del rendimiento de aplicaciones y seguimiento de errores.
* [Tideways](https://tideways.com/) - Herramienta de monitorización y perfilado.

### Herramientas de compilación
*Herramientas de compilación y automatización de proyectos.*

* [Box](https://github.com/box-project/box) - Una utilidad para crear archivos PHAR.
* [PHPacker](https://github.com/phpacker/phpacker) - Un creador de PHAR que compila aplicaciones PHP en ejecutables independientes.
* [Phing](https://www.phing.info/) - Un sistema de compilación de proyectos PHP inspirado en Apache Ant.
* [RMT](https://github.com/liip/RMT) - Una biblioteca para versionar y publicar software.

### Ejecutores de tareas
*Bibliotecas para automatizar y ejecutar tareas.*

* [Jobby](https://github.com/jobbyphp/jobby) - Un gestor de tareas cron en PHP que no modifica crontab.
* [Robo](https://github.com/consolidation/Robo) - Un ejecutor de tareas PHP con configuraciones orientadas a objetos.

### Navegación
*Herramientas para crear estructuras de navegación.*

* [KnpMenu](https://github.com/KnpLabs/KnpMenu) - Una biblioteca de menús.
* [Menu](https://github.com/spatie/menu) - Una biblioteca flexible de menús con una interfaz fluida.

### Gestión de recursos
*Herramientas para gestionar, comprimir y minificar recursos de sitios web.*

* [JShrink](https://github.com/tedious/JShrink) - Una biblioteca para minificar JavaScript.
* [Laravel Mix](https://github.com/laravel-mix/laravel-mix) - Un elegante wrapper de Webpack para los casos de uso más habituales.
* [Symfony Asset](https://github.com/symfony/asset) - Gestiona la generación y el versionado de URL de recursos web.
* [Symfony Encore](https://github.com/symfony/webpack-encore) - Una API sencilla pero potente para procesar y compilar recursos con Webpack.

### Geolocalización
*Bibliotecas para geocodificar direcciones y trabajar con latitudes y longitudes.*

* [Country List](https://github.com/umpirsky/country-list) - Una lista de todos los países con sus nombres y códigos ISO 3166-1.
* [GeoCoder](https://geocoder-php.org/) - Una biblioteca de geocodificación.
* [GeoJSON](https://github.com/jmikola/geojson) - Una implementación de GeoJSON.
* [GeoTools](https://github.com/thephpleague/geotools) - Una biblioteca de herramientas geográficas.
* [PHPGeo](https://github.com/mjaschen/phpgeo) - Una sencilla biblioteca geográfica.

### Fecha y hora
*Bibliotecas para trabajar con fechas y horas.*

* [Business Time](https://github.com/kylekatarnls/business-time) - Una extensión de Carbon para gestionar horarios y días laborables.
* [CalendR](https://github.com/yohang/CalendR) - Una biblioteca para gestionar calendarios.
* [Carbon](https://github.com/briannesbitt/Carbon) - Una extensión sencilla de la API DateTime.
* [Chronos](https://github.com/cakephp/chronos) - Una extensión de la API DateTime compatible con fechas y horas mutables e inmutables.
* [Moment.php](https://github.com/fightbulc/moment.php) - Un gestor de DateTime para PHP inspirado en Moment.js y compatible con i18n.
* [PHP RRule](https://github.com/rlanvin/php-rrule) - Una biblioteca para trabajar con fechas y horas recurrentes según la especificación RRule de iCalendar.
* [Yasumi](https://github.com/azuyalabs/yasumi) - Una biblioteca que ayuda a calcular las fechas y los nombres de los días festivos.

### Eventos
*Bibliotecas basadas en eventos o que implementan bucles de eventos no bloqueantes.*

* [Amp](https://github.com/amphp/amp) - Una biblioteca de E/S no bloqueante basada en eventos.
* [Broadway](https://github.com/broadway/broadway) - Una biblioteca de Event Sourcing y CQRS.
* [CakePHP Event](https://github.com/cakephp/event) - Una biblioteca de distribución de eventos.
* [Elephant.io](https://github.com/ElephantIO/elephant.io) - Otra biblioteca de WebSocket.
* [Evenement](https://github.com/igorw/evenement) - Una biblioteca de distribución de eventos.
* [Event](https://github.com/thephpleague/event) - Una biblioteca de eventos centrada en los eventos de dominio.
* [Fast CGI Client](https://github.com/hollodotme/fast-cgi-client) - Un cliente para realizar solicitudes síncronas o asíncronas a través de un socket php-fpm.
* [FrankenPHP](https://frankenphp.dev/) - Un servidor moderno de aplicaciones PHP escrito en Go.
* [Pawl](https://github.com/ratchetphp/Pawl) - Un cliente asíncrono de WebSocket.
* [Prooph Event Store](https://github.com/prooph/event-store) - Un componente de Event Sourcing para almacenar mensajes de eventos.
* [PHP Defer](https://github.com/php-defer/php-defer) - La instrucción defer de Go para PHP.
* [Ratchet](https://github.com/ratchetphp/Ratchet) - Una biblioteca de WebSocket.
* [ReactPHP](https://github.com/reactphp/reactphp) - Una biblioteca de E/S no bloqueante basada en eventos.
* [RxPHP](https://github.com/ReactiveX/RxPHP) - Una biblioteca de extensiones reactivas.
* [Swoole](https://github.com/swoole/swoole-src) - Un framework de comunicación de red de alto rendimiento, asíncrono, concurrente y basado en eventos, escrito en C para PHP.
* [Workerman](https://github.com/walkor/Workerman) - Una biblioteca de E/S no bloqueante basada en eventos.

### Registro
*Bibliotecas para generar y gestionar archivos de registro.*

* [Monolog](https://github.com/Seldaek/monolog) - Un registrador completo.

### Comercio electrónico
*Bibliotecas y aplicaciones para procesar pagos y crear tiendas de comercio electrónico.*

* [Money](https://github.com/moneyphp/money) - Una implementación PHP del patrón monetario de Fowler.
* [Brick Money](https://github.com/brick/money) - Una biblioteca monetaria para PHP compatible con contextos, redondeo de efectivo y conversión de divisas.
* [OmniPay](https://github.com/thephpleague/omnipay) - Una biblioteca de procesamiento de pagos multidivisa e independiente del framework.
* [Payum](https://github.com/payum/payum) - Una biblioteca de abstracción de pagos.
* [Shopsys Framework](https://github.com/shopsys/shopsys/) - Una plataforma de comercio electrónico de código abierto para equipos de desarrollo internos.
* [Shopware](https://github.com/shopware/shopware) - Software de comercio electrónico altamente personalizable.
* [Swap](https://github.com/florianv/swap) - Una biblioteca para tipos de cambio.
* [Sylius](https://sylius.com/) - Una solución de comercio electrónico de código abierto.

### PDF
*Bibliotecas y software para trabajar con archivos PDF.*

* [Browsershot](https://github.com/spatie/browsershot) - Convierte HTML en imagen, PDF o cadena de texto.
* [Dompdf](https://github.com/dompdf/dompdf) - Un conversor de HTML a PDF.
* [Gotenberg](https://github.com/gotenberg/gotenberg-php) - Un cliente PHP para interactuar con Gotenberg.
* [Snappy](https://github.com/KnpLabs/snappy) - Una biblioteca para generar PDF e imágenes.
* [TCPDF](https://tcpdf.org/) - Una clase PHP de código abierto para generar documentos PDF.

### Ofimática
*Bibliotecas para trabajar con documentos de suites ofimáticas.*

* [PHPPowerPoint](https://github.com/PHPOffice/PHPPresentation) - Una biblioteca para trabajar con presentaciones de Microsoft PowerPoint.
* [PHPWord](https://github.com/PHPOffice/PHPWord) - Una biblioteca para trabajar con documentos de Microsoft Word.
* [PHPSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet) - Una biblioteca escrita íntegramente en PHP para leer y escribir hojas de cálculo (sucesora de PHPExcel).
* [OpenSpout](https://github.com/openspout/openspout) - Una bifurcación comunitaria de `box/spout`, una biblioteca PHP para leer y escribir hojas de cálculo (CSV, XLSX y ODS) de forma rápida y escalable.

### Bases de datos
*Bibliotecas para interactuar con bases de datos mediante técnicas de mapeo objeto-relacional (ORM) o de mapeo de datos.*

* [Atlas.Orm](https://github.com/atlasphp/Atlas.Orm) - Una implementación de mapeador de datos para modelos de persistencia en PHP.
* [Aura.Sql](https://github.com/auraphp/Aura.Sql) - Amplía PDO nativo con un perfilador y un localizador de conexiones.
* [Aura.SqlQuery](https://github.com/auraphp/Aura.SqlQuery) - Constructores de consultas independientes para MySQL, PostgreSQL, SQLite y Microsoft SQL Server.
* [Baum](https://github.com/etrepat/baum) - Una implementación de conjuntos anidados para Eloquent.
* [CakePHP ORM](https://github.com/cakephp/orm) - Un mapeador objeto-relacional implementado con el patrón DataMapper.
* [Cycle ORM](https://github.com/cycle/orm) - Un ORM de tipo DataMapper para PHP.
* [Doctrine Extensions](https://github.com/doctrine-extensions/DoctrineExtensions) - Una colección de extensiones de comportamiento para Doctrine.
* [Doctrine](https://www.doctrine-project.org/) - Un DBAL y ORM completos.
* [Laravel Eloquent](https://github.com/illuminate/database) - Un ORM sencillo.
* [ProxyManager](https://github.com/Ocramius/ProxyManager) - Un conjunto de utilidades para generar objetos proxy para mapeadores de datos.
* [RedBean](https://redbeanphp.com/index.php) - Un ORM ligero que no requiere configuración.
* [Slimdump](https://github.com/webfactory/slimdump) - Una herramienta sencilla para volcar bases de datos MySQL.
* [Spot2](https://github.com/spotorm/spot2) - Un ORM de tipo DataMapper para MySQL.

### Migraciones
*Bibliotecas para gestionar esquemas de bases de datos y migraciones.*

* [Doctrine Migrations](https://www.doctrine-project.org/projects/migrations.html) - Una biblioteca de migraciones para Doctrine.
* [Phinx](https://github.com/cakephp/phinx) - Otra biblioteca de migraciones de bases de datos.
* [PHPMig](https://github.com/davedevelopment/phpmig) - Otra biblioteca para gestionar migraciones.
* [Ruckusing](https://github.com/ruckus/ruckusing-migrations) - Migraciones de bases de datos para PHP al estilo de ActiveRecord Migrations, compatibles con MySQL, Postgres y SQLite.

### NoSQL
*Bibliotecas para trabajar con sistemas NoSQL.*

* [MongoDB](https://github.com/mongodb/mongo-php-driver) - Controlador de MongoDB para PHP.
* [MongoDB PHP Library](https://github.com/mongodb/mongo-php-library) - La biblioteca oficial de alto nivel de MongoDB para PHP, construida sobre el controlador de MongoDB para PHP.
* [Predis](https://github.com/predis/predis) - Una biblioteca de Redis con todas las funciones.

### Colas
*Bibliotecas para trabajar con colas de eventos y tareas.*

* [BunnyPHP](https://github.com/jakubkulhan/bunny) - Una biblioteca AMQP (RabbitMQ) de PHP puro, eficiente, síncrona y también asíncrona (ReactPHP).
* [Pheanstalk](https://github.com/pheanstalk/pheanstalk) - Una biblioteca cliente de Beanstalkd.
* [PHP AMQP](https://github.com/php-amqplib/php-amqplib) - Una biblioteca AMQP escrita íntegramente en PHP.
* [Tarantool Queue](https://github.com/tarantool-php/queue) - Vinculaciones de PHP para Tarantool Queue.
* [Thumper](https://github.com/php-amqplib/Thumper) - Una biblioteca de patrones de RabbitMQ.
* [Enqueue](https://github.com/php-enqueue/enqueue-dev) - Un paquete de colas de mensajes para PHP compatible con RabbitMQ, AMQP, STOMP, Amazon SQS, Redis y transportes de Doctrine.

### Búsqueda
*Bibliotecas y software para indexar datos y realizar búsquedas.*

* [Elastica](https://github.com/ruflin/Elastica) - Una biblioteca cliente para ElasticSearch.
* [ElasticSearch PHP](https://github.com/elastic/elasticsearch-php) - La biblioteca cliente oficial para [ElasticSearch](https://www.elastic.co/).
* [Solarium](https://www.solarium-project.org/) - Una biblioteca cliente para [Solr](https://solr.apache.org/).
* [SphinxQL Query Builder](https://foolcode.github.io/SphinxQL-Query-Builder/) - Una biblioteca de consultas para los motores de búsqueda [Sphinx](https://sphinxsearch.com/) y [Manticore](https://manticoresearch.com/).

### Línea de comandos
*Bibliotecas relacionadas con la línea de comandos.*

* [Aura.Cli](https://github.com/auraphp/Aura.Cli) - Proporciona equivalentes de los objetos de solicitud (Context) y respuesta (Stdio) para la interfaz de línea de comandos, incluida la compatibilidad con Getopt y un objeto Help independiente para describir comandos.
* [CLI Menu](https://github.com/php-school/cli-menu) - Una biblioteca para crear menús de línea de comandos.
* [CLIFramework](https://github.com/c9s/CLIFramework) - Un framework de línea de comandos compatible con la generación de autocompletado para zsh/bash, subcomandos y restricciones de opciones. También es la base de phpbrew.
* [CLImate](https://github.com/thephpleague/climate) - Una biblioteca para mostrar colores y formatos especiales.
* [Commando](https://github.com/nategood/commando) - Otro analizador sencillo de opciones de línea de comandos.
* [Cron Expression](https://github.com/mtdowling/cron-expression) - Una biblioteca para calcular las fechas de ejecución de cron.
* [GetOpt](https://github.com/getopt-php/getopt-php) - Un analizador de opciones de línea de comandos.
* [GetOptionKit](https://github.com/c9s/GetOptionKit) - Otro analizador de opciones de línea de comandos.
* [PsySH](https://github.com/bobthecow/psysh) - Otra REPL para PHP.
* [ShellWrap](https://github.com/MrRio/shellwrap) - Una sencilla biblioteca wrapper de línea de comandos.

### Autenticación y autorización
*Bibliotecas para implementar la autenticación y autorización de usuarios.*

* [Aura.Auth](https://github.com/auraphp/Aura.Auth) - Proporciona funcionalidad de autenticación y seguimiento de sesiones mediante varios adaptadores.
* [SocialConnect Auth](https://github.com/socialConnect/auth) - Inicio de sesión social de código abierto (OAuth1/OAuth2/OpenID/OpenIDConnect).
* [Json Web Token](https://github.com/lcobucci/jwt) - Tokens JSON para autenticar y transmitir información.
* [OAuth 1.0 Client](https://github.com/thephpleague/oauth1-client) - Una biblioteca cliente de OAuth 1.0.
* [OAuth 2.0 Client](https://github.com/thephpleague/oauth2-client) - Una biblioteca cliente de OAuth 2.0.
* [OAuth2 Server](https://bshaffer.github.io/oauth2-server-php-docs/) - Otra implementación de servidor OAuth2.
* [OAuth2 Server](https://oauth2.thephpleague.com/) - Un servidor de autenticación OAuth2, servidor de recursos y biblioteca cliente.
* [Paseto](https://github.com/paragonie/paseto) - Tokens de seguridad independientes de la plataforma.
* [PHP oAuthLib](https://github.com/daviddesberg/PHPoAuthLib) - Otra biblioteca OAuth.
* [TwitterOAuth](https://github.com/abraham/twitteroauth) - Una biblioteca OAuth para Twitter.

### Marcado y CSS
*Bibliotecas para trabajar con formatos de marcado y CSS.*

* [Carve](https://github.com/markup-carve/carve-php) - Un analizador PHP para [Carve](https://markup-carve.github.io/carve/), un lenguaje de marcado ligero derivado de Markdown y Djot.
* [Cebe Markdown](https://github.com/cebe/markdown) - Un analizador Markdown rápido y extensible.
* [CommonMark PHP](https://github.com/thephpleague/commonmark) - Un analizador Markdown altamente extensible que cumple plenamente la [especificación CommonMark](https://spec.commonmark.org/).
* [Decoda](https://github.com/milesj/decoda) - Una biblioteca ligera para analizar lenguajes de marcado.
* [Djot](https://github.com/php-collective/djot-php) - Un analizador PHP para [Djot](https://djot.net/), un lenguaje moderno de marcado ligero (sucesor de Markdown).
* [Essence](https://github.com/essence/essence) - Una biblioteca para extraer contenido multimedia de la web.
* [Embera](https://github.com/mpratt/Embera) - Una biblioteca consumidora de oEmbed.
* [HTML to Markdown](https://github.com/thephpleague/html-to-markdown) - Convierte HTML a Markdown.
* [HTML5 PHP](https://github.com/Masterminds/html5-php) - Una biblioteca para analizar y serializar HTML5.
* [Parsedown](https://github.com/erusev/parsedown) - Otro analizador Markdown.
* [PHP CSS Parser](https://github.com/MyIntervals/PHP-CSS-Parser) - Un analizador de archivos CSS escrito en PHP.
* [PHP Markdown](https://github.com/michelf/php-markdown) - Un analizador Markdown.
* [Shiki PHP](https://github.com/spatie/shiki-php) - Un paquete PHP para resaltar código con [Shiki](https://github.com/shikijs/shiki).
* [VObject](https://github.com/sabre-io/vobject) - Una biblioteca para analizar objetos VCard e iCalendar.

### JSON
*Bibliotecas para trabajar con JSON.*

* [JSON Lint](https://github.com/Seldaek/jsonlint) - Una utilidad de linting para JSON.
* [JSONMapper](https://github.com/JsonMapper/JsonMapper) - Una biblioteca para mapear JSON a objetos PHP.
* [Lazy JSON](https://github.com/cerbero90/lazy-json) - Un analizador diferido y eficiente en memoria para archivos JSON grandes.

### Cadenas
*Bibliotecas para analizar y manipular cadenas.*

* [Agent](https://github.com/jenssegers/agent) - Un analizador PHP de agentes de usuario de escritorio y móviles, basado en Mobiledetect.
* [ANSI to HTML5](https://github.com/sensiolabs/ansi-to-html) - Una biblioteca para convertir ANSI a HTML5.
* [Color Jizz](https://github.com/mikeemoo/ColorJizz-PHP) - Una biblioteca para manipular y convertir colores.
* [Device Detector](https://github.com/matomo-org/device-detector) - Otra biblioteca para analizar cadenas de agentes de usuario.
* [Hyphenation](https://github.com/heiglandreas/Org_Heigl_Hyphenator) - Separación silábica de texto basada en el algoritmo TeX.
* [Jieba-PHP](https://github.com/fukuball/jieba-php) - Un port de jieba de Python a PHP. Segmentación de texto chino para el procesamiento del lenguaje natural.
* [Mobile-Detect](https://github.com/serbanghita/Mobile-Detect) - Una clase PHP ligera para detectar dispositivos móviles (incluidas tabletas).
* [Patchwork UTF-8](https://github.com/nicolas-grekas/Patchwork-UTF8) - Una biblioteca portable para trabajar con cadenas UTF-8.
* [Portable ASCII](https://github.com/voku/portable-ascii) - Una biblioteca para convertir cadenas a ASCII.
* [Portable UTF-8](https://github.com/voku/portable-utf8) - Una biblioteca para manipular cadenas con métodos de sustitución seguros para UTF-8.
* [Slugify](https://github.com/cocur/slugify) - Una biblioteca para convertir cadenas en slugs.
* [SQL Formatter](https://github.com/jdorn/sql-formatter/) - Una biblioteca para dar formato a sentencias SQL.
* [Stringy](https://github.com/voku/Stringy) - Una biblioteca de manipulación de cadenas compatible con varios bytes.
* [Url highlight](https://github.com/vstelmakh/url-highlight) - Una biblioteca para extraer URL del texto y convertirlas en enlaces en los que se puede hacer clic.
* [URLify](https://github.com/jbroadway/urlify) - Un port de URLify.js de Django a PHP.
* [UUID](https://github.com/ramsey/uuid) - Una biblioteca para generar UUID.

### Números
*Bibliotecas para trabajar con números.*

* [Brick Math](https://github.com/brick/math) - Una biblioteca que admite números grandes: `BigInteger`, `BigDecimal` y `BigRational`.
* [ByteUnits](https://github.com/gabrielelana/byte-units) - Una biblioteca para analizar, dar formato y convertir unidades de bytes en sistemas binarios y métricos.
* [DecimalObject](https://github.com/php-collective/decimal-object) - Un objeto de valor para gestionar decimales y números de coma flotante con facilidad y mayor precisión.
* [IP](https://github.com/darsyn/ip) - Un objeto de valor inmutable para trabajar con direcciones IPv4 e IPv6.
* [PHP Conversion](https://github.com/cniska/php-conversion) - Otra biblioteca para convertir unidades de medida.
* [PHP Units of Measure](https://github.com/triplepoint/php-units-of-measure) - Una biblioteca para convertir unidades de medida.
* [MathPHP](https://github.com/markrogoyski/math-php) - Una biblioteca matemática para PHP.

### Filtrado, saneamiento y validación
*Bibliotecas para filtrar, sanear y validar datos.*

* [Assert](https://github.com/beberlei/assert) - Una biblioteca de validación con un amplio conjunto de aserciones. Admite encadenamiento y evaluación diferida de aserciones.
* [Aura.Filter](https://github.com/auraphp/Aura.Filter) - Proporciona herramientas para validar y sanear objetos y matrices.
* [CakePHP Validation](https://github.com/cakephp/validation) - Otra biblioteca de validación.
* [Filterus](https://github.com/ircmaxell/filterus) - Una biblioteca sencilla de filtrado para PHP.
* [HTML Purifier](https://github.com/ezyang/htmlpurifier) - Un filtro HTML que cumple los estándares.
* [ISO-codes](https://github.com/ronanguilloux/IsoCodes) - Una biblioteca para validar entradas según estándares de ISO, finanzas internacionales, administraciones públicas, GS1, industria editorial, números de teléfono y códigos postales de numerosos países.
* [JSON Schema](https://github.com/jsonrainbow/json-schema) - Una biblioteca de validación de [JSON Schema](https://json-schema.org/).
* [LibPhoneNumber for PHP](https://github.com/giggsey/libphonenumber-for-php) - Una implementación PHP de la biblioteca de Google para gestionar números de teléfono.
* [MetaYaml](https://github.com/romaricdrigon/MetaYaml) - Una biblioteca de validación de esquemas compatible con YAML, JSON y XML.
* [Respect Validation](https://github.com/Respect/Validation) - Una biblioteca de validación sencilla.
* [Symfony HTML Sanitizer](https://github.com/symfony/html-sanitizer) - Una biblioteca para sanear HTML.
* [Valitron](https://github.com/vlucas/valitron) - Otra biblioteca de validación.
* [Valinor](https://github.com/CuyZ/Valinor) - Una biblioteca para mapear datos a objetos de valor fuertemente tipados.
* [Volan](https://github.com/serkin/Volan) - Otra biblioteca de validación simplificada.

### API
*Bibliotecas y herramientas web para desarrollar API.*

* [API Platform](https://api-platform.com) - Expón en minutos una API REST hipermedia que adopta JSON-LD y el formato Hydra.
* [Laminas API Tool Skeleton](https://github.com/laminas-api-tools/api-tools-skeleton) - Un generador de API creado con Laminas Framework.
* [HAL](https://github.com/blongden/hal) - Una biblioteca para crear Hypertext Application Language (HAL).
* [Hateoas](https://github.com/willdurand/Hateoas) - Una biblioteca de servicios web REST HATEOAS.
* [Jane](https://github.com/janephp/janephp/) - Un generador de clientes OpenAPI con compatibilidad para validación.
* [Negotiation](https://github.com/willdurand/Negotiation) - Una biblioteca de negociación de contenido.
* [Restler](https://github.com/Luracast/Restler) - Un framework ligero para exponer métodos PHP como API web RESTful.
* [PackageGenerator](https://github.com/WsdlToPhp/PackageGenerator) - Package Generator genera un SDK de PHP a partir de cualquier WSDL.

### Caché y bloqueos
*Bibliotecas para almacenar datos en caché y adquirir bloqueos.*

* [APIx Cache](https://github.com/apix/cache) - Un wrapper PSR-6 ligero para distintos backends de caché, centrado en el etiquetado e indexación de la caché.
* [CacheTool](https://github.com/gordalina/cachetool) - Una herramienta de línea de comandos para borrar cachés de APC y opcode.
* [CakePHP Cache](https://github.com/cakephp/cache) - Una biblioteca de almacenamiento en caché.
* [Doctrine Cache](https://github.com/doctrine/cache) - Una biblioteca de almacenamiento en caché.
* [Metaphore](https://github.com/sobstel/metaphore) - Defensa contra avalanchas de solicitudes a la caché mediante un semáforo que evita el efecto dogpile.
* [Stash](https://github.com/tedious/Stash) - Otra biblioteca de almacenamiento en caché.
* [Laminas Cache](https://github.com/laminas/laminas-cache) - Otra biblioteca de almacenamiento en caché.
* [Lock](https://github.com/php-lock/lock) - Una biblioteca para ofrecer ejecución exclusiva mediante bloqueos.

### Estructuras y almacenamiento de datos
*Bibliotecas que implementan estructuras de datos o técnicas de almacenamiento.*

* [CakePHP Collection](https://github.com/cakephp/collection) - Una sencilla biblioteca de colecciones.
* [Fractal](https://github.com/thephpleague/fractal) - Una biblioteca para convertir estructuras de datos complejas a formato JSON.
* [JsonMapper](https://github.com/cweiske/jsonmapper) - Una biblioteca que asigna estructuras JSON anidadas a clases PHP.
* [JSON Machine](https://github.com/halaxa/json-machine) - Permite iterar sobre archivos JSON enormes mediante un sencillo `foreach`.
* [msgpack.php](https://github.com/rybakit/msgpack.php) - Una implementación en PHP puro del formato de serialización [MessagePack](https://msgpack.org/).
* [Serializer](https://github.com/schmittjoh/serializer) - Una biblioteca para serializar y deserializar datos.
* [YaLinqo](https://github.com/Athari/YaLinqo) - Otra implementación de LINQ to Objects para PHP.
* [Laminas Serializer](https://github.com/laminas/laminas-serializer) - Otra biblioteca para serializar y deserializar datos.

### Notificaciones
*Bibliotecas para trabajar con software de notificaciones.*

* [JoliNotif](https://github.com/jolicode/JoliNotif) - Una biblioteca multiplataforma para notificaciones de escritorio (compatible con Growl, notify-send, toaster, etc.).

### Despliegue
*Bibliotecas para desplegar proyectos.*

* [Deployer](https://github.com/deployphp/deployer) - Una herramienta de implementación.
* [Envoy](https://github.com/laravel/envoy) - Una herramienta para ejecutar tareas SSH con PHP.

### Internacionalización y localización
*Bibliotecas para internacionalización (I18n) y localización (L10n).*

* [Aura.Intl](https://github.com/auraphp/Aura.Intl) - Proporciona herramientas de internacionalización (I18N), en concreto, traducción de mensajes por configuración regional y orientada a paquetes.
* [CakePHP I18n](https://github.com/cakephp/i18n) - Traducción de mensajes y localización de fechas y números.

### Sin servidor
*Bibliotecas y herramientas para crear aplicaciones web sin servidor.*

* [Bref](https://bref.sh/) - PHP sin servidor en AWS Lambda.
* [OpenWhisk](https://openwhisk.apache.org/) - Una plataforma de nube sin servidor de código abierto.
* [Serverless Framework](https://www.serverless.com/framework) - Un framework de código abierto para crear aplicaciones sin servidor.
* [Laravel Vapor](https://vapor.laravel.com/) - Una plataforma de implementación sin servidor para Laravel, basada en AWS.

### Configuración
*Bibliotecas y herramientas de configuración.*

* [PHP Dotenv](https://github.com/vlucas/phpdotenv) - Analiza y carga variables de entorno desde archivos `.env`.
* [Symfony Dotenv](https://github.com/symfony/dotenv) - Analiza y carga variables de entorno desde archivos `.env`.
* [Toml](https://github.com/php-collective/toml) - Un analizador y codificador TOML con acceso a AST y recuperación de errores.

### LLMs
*Bibliotecas para trabajar con modelos de lenguaje grandes.*

* [Anthropic](https://github.com/mozex/anthropic-php) - Un cliente PHP para la API de Anthropic, compatible con mensajes, streaming, uso de herramientas y procesamiento por lotes.
* [Anthropic for Laravel](https://github.com/mozex/anthropic-laravel) - Un wrapper de Laravel para el cliente PHP de Anthropic, con fachadas, publicación de configuración y dobles de prueba.
* [Instructor for PHP](https://github.com/cognesy/instructor-php) - Salidas de datos estructurados con LLM en PHP.
* [LLPhant](https://github.com/LLPhant/LLPhant) - Un framework completo de IA generativa para PHP que usa OpenAI GPT 4. Inspirado en Langchain.
* [OpenAI Client](https://github.com/openai-php/client) - OpenAI PHP es un cliente API PHP comunitario mejorado que permite interactuar con la API de OpenAI.
* [OpenAI Client for Laravel](https://github.com/openai-php/laravel) - OpenAI PHP para Laravel es un cliente API PHP mejorado que permite interactuar con la API de OpenAI.
* [PHP Mistral AI SDK](https://github.com/SoftCreatR/php-mistral-ai-sdk) - Un SDK de PHP potente y fácil de usar para la API de Mistral AI, que integra fácilmente funciones avanzadas basadas en IA en tus proyectos PHP.

### API de terceros
*Bibliotecas para acceder a API de terceros.*

* [Amazon Web Service SDK](https://github.com/aws/aws-sdk-php) - La biblioteca oficial del SDK de AWS para PHP.
* [AsyncAWS](https://async-aws.com/) - Un SDK asíncrono no oficial de AWS para PHP.
* [Campaign Monitor](https://campaignmonitor.github.io/createsend-php/) - La biblioteca oficial de Campaign Monitor para PHP.
* [Github](https://github.com/KnpLabs/php-github-api) - Una biblioteca para interactuar con la API de GitHub.
* [Mailgun](https://github.com/mailgun/mailgun-php) - La API oficial de Mailgun para PHP.
* [Stripe](https://github.com/stripe/stripe-php) - La biblioteca oficial de Stripe para PHP.
* [Twilio](https://github.com/twilio/twilio-php) - La API REST oficial de Twilio para PHP.

### Extensiones
*Bibliotecas para ayudar a crear extensiones de PHP.*

* [PHP CPP](https://www.php-cpp.com/) - Una biblioteca de C++ para desarrollar extensiones de PHP.
* [Zephir](https://github.com/zephir-lang/zephir) - Un lenguaje compilado entre PHP y C++ para desarrollar extensiones de PHP.

### Varios
*Bibliotecas y utilidades útiles que no encajan en las categorías anteriores.*

* [Annotations](https://github.com/doctrine/annotations) - Una biblioteca de anotaciones (parte de Doctrine).
* [BotMan](https://github.com/botman/botman) - Una biblioteca PHP independiente del framework para crear chatbots multiplataforma.
* [ClassPreloader](https://github.com/ClassPreloader/ClassPreloader) - Una biblioteca para optimizar la carga automática.
* [Ganesha](https://github.com/ackintosh/ganesha) - Una implementación PHP del patrón Circuit Breaker.
* [Hprose-PHP](https://github.com/hprose/hprose-php) - Un RPC multiplataforma.
* [Laravel Serializable Closure](https://github.com/laravel/serializable-closure) - Una biblioteca que permite serializar closures.
* [noCAPTCHA](https://github.com/ARCANEDEV/noCAPTCHA) - Un asistente para el noCAPTCHA (reCAPTCHA) de Google.
* [Pagerfanta](https://github.com/whiteoctober/Pagerfanta) - Una biblioteca de paginación.
* [Safe](https://github.com/thecodingmachine/safe) - Todas las funciones de PHP, reescritas para lanzar excepciones en lugar de devolver false.

# Software
*Software para crear un entorno de desarrollo.*

### Instalación de PHP
*Herramientas para instalar y gestionar PHP en tu ordenador.*

* [Brew PHP Switcher](https://github.com/philcook/brew-php-switcher) - Selector de versiones de PHP para Brew.
* [Homebrew](https://brew.sh/) - Un gestor de paquetes para macOS.
* [PHP Brew](https://github.com/phpbrew/phpbrew) - Un gestor e instalador de versiones de PHP.
* [PHP Build](https://github.com/php-build/php-build) - Otro instalador de versiones de PHP.
* [Static PHP CLI](https://github.com/crazywhalecc/static-php-cli) - Compila o [descarga](https://dl.static-php.dev/static-php-cli/) versiones estáticas de PHP CLI y FPM.

### Entorno de desarrollo
*Software y herramientas para crear y compartir entornos de desarrollo.*

* [Ansible](https://www.redhat.com/en/ansible-collaborative) - Un framework de orquestación radicalmente sencillo.
* [DDEV](https://github.com/ddev/ddev) - Un sistema de entorno de desarrollo web local para PHP.
* [Docker](https://www.docker.com/) - Una plataforma de contenedorización.
* [Docker PHP Extension Installer](https://github.com/mlocati/docker-php-extension-installer) - Instala fácilmente extensiones de PHP en contenedores Docker.
* [Docksal](https://github.com/docksal/docksal) - Entornos unificados de desarrollo web para macOS, Windows y Linux, con tecnología Docker :whale:.
* [Expose](https://github.com/exposedev/expose) - Un servicio de túneles PHP de código abierto.
* [Lando](https://lando.dev/) - Entornos de desarrollo listos para usar.
* [Laravel Homestead](https://laravel.com/docs/master/homestead) - Un entorno de desarrollo local para Laravel.
* [Laravel Herd](https://herd.laravel.com/windows) - Un entorno de desarrollo PHP para macOS y Windows que se configura con un solo clic.
* [Laradock](https://laradock.io/) - Un entorno de desarrollo PHP completo basado en Docker.
* [PHPMon](https://phpmon.app/) - Una aplicación de barra de menús para macOS para gestionar instalaciones de PHP (funciona con [Laravel Valet](https://laravel.com/docs/master/valet)).
* [Puppet](https://www.puppet.com) - Un framework y una aplicación de automatización de servidores.
* [Solo](https://github.com/soloterm/solo) - Una aplicación de terminal para gestionar procesos de una aplicación Laravel.
* [Takeout](https://github.com/tighten/takeout) - Un gestor de dependencias de desarrollo basado en Docker.
* [Vagrant](https://developer.hashicorp.com/vagrant) - Una utilidad para entornos de desarrollo portables.

### Máquinas virtuales
*Máquinas virtuales alternativas para PHP.*

* [Hack](https://hacklang.org/) - Un lenguaje de programación para HHVM.
* [HHVM](https://github.com/facebook/hhvm) - Una máquina virtual, un entorno de ejecución y un compilador JIT para PHP, desarrollado por Facebook.
* [PeachPie](https://github.com/peachpiecompiler/peachpie) - Un compilador y entorno de ejecución de PHP para .NET y .NET Core.

### Editores de texto e IDE
*Editores de texto y entornos de desarrollo integrados (IDE) compatibles con PHP.*

* [Eclipse for PHP Developers](https://www.eclipse.org/downloads/) - Un IDE de PHP basado en la plataforma Eclipse.
* [Apache NetBeans](https://netbeans.apache.org/front/main/index.html) - Un IDE compatible con PHP y HTML5.
* [PhpEd](https://www.nusphere.com/products/phped.htm) - Un IDE con depurador comercial profesional.
* [PhpStorm](https://www.jetbrains.com/phpstorm/) - Un IDE comercial para PHP.
* [VS Code](https://code.visualstudio.com/) - Un editor de código de código abierto.

### Aplicaciones web
*Aplicaciones y herramientas web.*

* [3V4L](https://3v4l.org/) - Un shell en línea para PHP y HHVM.
* [Adminer](https://www.adminer.org/en/) - Gestión de bases de datos desde un único archivo PHP.
* [Cachet](https://github.com/cachethq/cachet) - El sistema de páginas de estado de código abierto.
* [Lychee](https://github.com/electerious/Lychee) - Un sistema de gestión de fotos fácil de usar y atractivo.
* [Leantime](https://leantime.io) - Un sistema estratégico de gestión de proyectos para quienes no son gestores de proyectos.
* [MailCatcher](https://github.com/sj26/mailcatcher) - Una herramienta web para capturar y visualizar correos electrónicos.
* [Mailpit](https://github.com/axllent/mailpit) - Una herramienta para que los desarrolladores prueben correo electrónico y SMTP.
* [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - Una interfaz web para MySQL/MariaDB.
* [PHP Queue](https://github.com/CoderKungfu/php-queue) - Una aplicación para gestionar backends de colas.
* [phpRedisAdmin](https://github.com/ErikDubbelboer/phpRedisAdmin) - Una interfaz web sencilla para gestionar bases de datos [Redis](https://redis.io/).
* [PHPSandbox](https://phpsandbox.io) - Un IDE en línea para PHP desde el navegador.

### Infraestructura
*Infraestructura para ofrecer aplicaciones y servicios PHP.*

* [appserver.io](https://github.com/appserver-io/appserver) - Un servidor de aplicaciones multihilo para PHP, escrito en PHP.
* [php-pm](https://github.com/php-pm/php-pm) - Un gestor de procesos, acelerador y equilibrador de carga para aplicaciones PHP.
* [RoadRunner](https://github.com/roadrunner-server/roadrunner) - Servidor de aplicaciones PHP de alto rendimiento, equilibrador de carga y gestor de procesos.

# Recursos
Recursos variados, como libros, sitios web y artículos, para mejorar tus habilidades y conocimientos de desarrollo con PHP.

### Sitios web sobre PHP
*Sitios web útiles relacionados con PHP.*

* [Nomad PHP](https://nomadphp.com/) - Un recurso de aprendizaje de PHP en línea.
* [Laravel News](https://laravel-news.com/) - El blog oficial de Laravel.
* [PHP Annotated Monthly](https://blog.jetbrains.com/phpstorm/tag/php-annotated-monthly/) - Un resumen mensual de noticias de PHP.
* [PHP FIG](https://www.php-fig.org/) - El PHP Framework Interoperability Group.
* [PHP Package Development Standards](https://php-pds.com/) - Estándares de desarrollo de paquetes para PHP.
* [PHP School](https://www.phpschool.io/) - Aprendizaje de código abierto para PHP.
* [PHP The Right Way](https://phptherightway.com/) - Una guía rápida de buenas prácticas de PHP.
* [PHP UG](https://php.ug) - Un sitio web que ayuda a localizar el grupo de usuarios de PHP (UG) más cercano.
* [PHP Watch](https://php.watch/) - Artículos, noticias, cambios futuros, RFC y más sobre PHP.
* [Unit Testing Tips](https://testing-tips.sarvendev.com/) - Consejos de pruebas unitarias con ejemplos en PHP.

### Libros sobre PHP
*Libros excelentes relacionados con PHP.*

* [Domain-Driven Design in PHP](https://leanpub.com/ddd-in-php) - Ejemplos reales escritos en PHP que muestran estilos arquitectónicos de DDD.
* [Functional Programming in PHP](https://www.functionalphp.com/) - Un libro sobre cómo aplicar principios y técnicas de programación funcional en PHP.
* [Mastering Object-Orientated PHP](https://masteringobjectorientedphp.com/) - Un libro de Brandon Savage sobre PHP orientado a objetos.
* [PHP Cookbook](https://www.oreilly.com/library/view/php-cookbook/9781098121310/) - Este recetario ofrece ejemplos de código para resolver diversos problemas de programación.
* [Modernizing Legacy Applications in PHP](https://leanpub.com/mlaphp) - Un libro de Paul M. Jones sobre la modernización de aplicaciones PHP heredadas.
* [Scaling PHP Applications](https://www.scalingphpbook.com) - Un libro electrónico de Steve Corona sobre cómo escalar aplicaciones PHP.
* [Securing PHP: Core Concepts](https://leanpub.com/securingphp-coreconcepts) - Un libro de Chris Cornutt sobre términos y prácticas de seguridad habituales en PHP.
* [Signaling PHP](https://leanpub.com/signalingphp) - Un libro de Cal Evans sobre la captura de señales PCNTL en scripts CLI.
* [XML Parsing with PHP](https://www.phparch.com/books/xml-parsing-with-php/) - Este libro trata el análisis y la validación de documentos XML, el uso de expresiones XPath y el trabajo con espacios de nombres, además de la creación y modificación programática de archivos XML.

### Vídeos sobre PHP
*Vídeos excelentes relacionados con PHP.*

* [Laracasts](https://laracasts.com) - Vídeos tutoriales sobre Laravel, Vue JS y más.
* [Laravel YouTube Channel](https://www.youtube.com/channel/UCfO2GiQwb-cwJTb1CuRSkwg) - El canal oficial de YouTube de Laravel.
* [Program With Gio](https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-) - Curso de PHP 8 de Gio.
* [Programming with Anthony](https://www.youtube.com/playlist?list=PLM-218uGSX3DQ3KsB5NJnuOqPqc5CW2kW) - Una serie de vídeos de Anthony Ferrara.
* [SymfonyCasts](https://symfonycasts.com/) - Vídeos tutoriales y cursos sobre PHP y Symfony.

### Conferencias de PHP
*Conferencias de PHP.*

* [Laracon EU](https://www.youtube.com/@LaraconEU) - Laracon EU es un evento de dos días para quienes quieran aprender Laravel y tecnologías relacionadas o compartir sus conocimientos.
* [PHP[TEK]](https://phptek.io/) - La conferencia para desarrolladores web de mayor trayectoria en Estados Unidos, centrada en el lenguaje de programación PHP.
* [PHP UK Conference](https://www.youtube.com/user/phpukconference/videos) - Una colección de vídeos de la PHP UK Conference.

### Pódcasts sobre PHP
*Pódcasts centrados en temas de PHP.*

* [Laravel News Podcast](https://podcast.laravel-news.com/) - Laravel News Podcast te trae las últimas noticias y eventos relacionados con Laravel, el framework PHP.
* [Mostly Technical](https://mostlytechnical.com/) - Presentado por Ian Landsman y Aaron Francis, Mostly Technical es un animado debate sobre Laravel, negocios y una variada selección de temas relacionados.
* [No Compromises](https://show.nocompromises.io/) - Dos veteranos de la programación, curtidos y sin pelos en la lengua, hablan de buenas prácticas basadas en años de trabajo con equipos de SaaS de Laravel.
* [North Meets South Web Podcast](https://www.northmeetssouth.audio/) - Jacob Bennett y Michael Dyrynda superan una diferencia horaria de 14,5 horas para hablar de la vida de los desarrolladores web.
* [Over Engineered](https://overengineered.fm/) - Un pódcast en miniserie que explora con todo lujo de detalles preguntas irrelevantes de programación.
* [PHP Internals News](https://phpinternals.news) - Un pódcast sobre los componentes internos de PHP.
* [PHP Town Hall](https://phptownhall.com/) - Un pódcast informal sobre PHP de Ben Edmunds y Phil Sturgeon.
* [php[podcast] episodes from php[architect]](https://www.phparch.com/podcast/) - El pódcast oficial de php[architect], la revista y editorial líder del sector tecnológico, centrada en PHP y desarrollo web.
* [PHPUgly](https://www.phpugly.com/) - Las divagaciones de unos desarrolladores PHP sobrecargados de trabajo.
* [The Laracasts Snippet](https://laracasts.simplecast.com) - En cada episodio, The Laracasts Snippet ofrece una reflexión breve sobre algún aspecto del desarrollo web.
* [The Laravel Podcast](https://laravelpodcast.com/) - Noticias y debates sobre Laravel y el desarrollo con PHP.
* [The PHP Roundtable](https://phproundtable.com/) - The PHP Roundtable es una reunión informal de desarrolladores que debaten temas de interés para los entusiastas de PHP.

### Boletines sobre PHP
*Noticias relacionadas con PHP directamente en tu bandeja de entrada.*

* [PHP Weekly](https://www.phpweekly.com/) - Un boletín semanal sobre PHP.

### Lecturas sobre PHP
*Lecturas relacionadas con PHP.*

* [php[architect]](https://www.phparch.com/magazine/) - Una revista mensual dedicada a PHP.

### Lecturas sobre los componentes internos de PHP
*Lecturas relacionadas con los componentes internos o el rendimiento de PHP.*

* [PHP RFCs](https://wiki.php.net/rfc) - La página principal de las RFC de PHP (Request for Comments).
* [Externals](https://externals.io/) - Debates internos de PHP.
* [PHP RFC Watch](https://github.com/beberlei/php-rfc-watch) - Sigue las últimas [RFC](https://wiki.php.net/rfc) de PHP.
* [PHP Internals Book](https://www.phpinternalsbook.com/) - Un libro en línea sobre los componentes internos de PHP, escrito por tres desarrolladores principales.
