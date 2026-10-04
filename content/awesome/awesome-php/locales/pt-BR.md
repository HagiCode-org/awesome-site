# Awesome PHP [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Uma seleção criteriosa de excelentes bibliotecas, recursos e ferramentas úteis para PHP.

## Contribuição e colaboração
Consulte [CONTRIBUTING](https://github.com/ziadoz/awesome-php/blob/master/CONTRIBUTING.md), [CODE-OF-CONDUCT](https://github.com/ziadoz/awesome-php/blob/master/CODE-OF-CONDUCT.md) e [COLLABORATING](https://github.com/ziadoz/awesome-php/blob/master/COLLABORATING.md) para obter mais detalhes.

## Sumário
- [Awesome PHP](#awesome-php)
  - [Repositórios Composer](#composer-repositories)
  - [Gerenciamento de dependências](#dependency-management)
  - [Complementos do gerenciamento de dependências](#dependency-management-extras)
  - [Frameworks](#frameworks)
  - [Complementos de frameworks](#framework-extras)
  - [Sistemas de gerenciamento de conteúdo](#content-management-systems-cms)
  - [Componentes](#components)
  - [Microframeworks](#micro-frameworks)
  - [Complementos de microframeworks](#micro-framework-extras)
  - [Roteadores](#routers)
  - [Templates](#templating)
  - [Geradores de sites estáticos](#static-site-generators)
  - [HTTP](#http)
  - [Web scraping](#scraping)
  - [Middlewares](#middlewares)
  - [URL](#url)
  - [E-mail](#email)
  - [Arquivos](#files)
  - [Fluxos](#streams)
  - [Injeção de dependência](#dependency-injection)
  - [Imagens](#imagery)
  - [Testes](#testing)
  - [Integração contínua](#continuous-integration)
  - [Documentação](#documentation)
  - [Segurança](#security)
  - [Senhas](#passwords)
  - [Análise de código](#code-analysis)
  - [Qualidade de código](#code-quality)
  - [Análise estática](#static-analysis)
  - [Arquitetura](#architectural)
  - [Depuração e criação de perfis](#debugging-and-profiling)
  - [Serviços de monitoramento e rastreamento de erros](#error-tracking-and-monitoring-services)
  - [Ferramentas de build](#build-tools)
  - [Executores de tarefas](#task-runners)
  - [Navegação](#navigation)
  - [Gerenciamento de recursos](#asset-management)
  - [Geolocalização](#geolocation)
  - [Data e hora](#date-and-time)
  - [Eventos](#event)
  - [Registro de logs](#logging)
  - [Comércio eletrônico](#e-commerce)
  - [PDF](#pdf)
  - [Pacote Office](#office)
  - [Banco de dados](#database)
  - [Migrações](#migrations)
  - [NoSQL](#nosql)
  - [Filas](#queue)
  - [Busca](#search)
  - [Linha de comando](#command-line)
  - [Autenticação e autorização](#authentication-and-authorization)
  - [Marcação e CSS](#markup-and-css)
  - [JSON](#json)
  - [Strings](#strings)
  - [Números](#numbers)
  - [Filtragem, sanitização e validação](#filtering-sanitizing-and-validation)
  - [API](#api)
  - [Cache e bloqueios](#caching-and-locking)
  - [Estruturas de dados e armazenamento](#data-structure-and-storage)
  - [Notificações](#notifications)
  - [Implantação](#deployment)
  - [Internacionalização e localização](#internationalisation-and-localisation)
  - [Serverless](#serverless)
  - [Configuração](#configuration)
  - [LLMs](#llms)
  - [APIs de terceiros](#third-party-apis)
  - [Extensões](#extensions)
  - [Diversos](#miscellaneous)
- [Software](#software)
  - [Instalação do PHP](#php-installation)
  - [Ambiente de desenvolvimento](#development-environment)
  - [Máquinas virtuais](#virtual-machines)
  - [Editores de texto e IDEs](#text-editors-and-ides)
  - [Aplicações web](#web-applications)
  - [Infraestrutura](#infrastructure)
- [Recursos](#resources)
  - [Sites sobre PHP](#php-websites)
  - [Livros sobre PHP](#php-books)
  - [Vídeos sobre PHP](#php-videos)
  - [Conferências de PHP](#php-conferences)
  - [Podcasts sobre PHP](#php-podcasts)
  - [Newsletters sobre PHP](#php-newsletters)
  - [Leituras sobre PHP](#php-reading)
  - [Leituras sobre os internos do PHP](#php-internals-reading)

### Repositórios Composer
*Repositórios Composer.*

* [Firegento](https://packages.firegento.com/) - Repositório Composer de módulos do Magento.
* [Packagist](https://packagist.org/) - O repositório de pacotes do PHP.
* [Packalyst](https://packalyst.com/) - O repositório de pacotes do Laravel.
* [Private Packagist](https://packagist.com/) - Arquivo de pacotes Composer como serviço para PHP.
* [WordPress Packagist](https://wpackagist.org/) - Gerencie seus plugins com o Composer.

### Gerenciamento de dependências
*Bibliotecas para gerenciamento de dependências e pacotes.*

* [Composer](https://getcomposer.org/) - Gerenciador de pacotes e dependências.
* [Composer Installers](https://github.com/composer/installers) - Instalador de bibliotecas Composer para vários frameworks.
* [Phive](https://phar.io/) - Gerenciador de PHAR.
* [Pickle](https://github.com/FriendsOfPHP/pickle) - Instalador de extensões do PHP.
* [Pie](https://github.com/php/pie) - Instalador oficial de extensões do PHP.

### Complementos do gerenciamento de dependências
*Complementos relacionados ao gerenciamento de dependências.*

* [Composer Merge Plugin](https://github.com/wikimedia/composer-merge-plugin) - Plugin do Composer para mesclar vários arquivos `composer.json`.
* [Composer Normalize](https://github.com/ergebnis/composer-normalize) - Plugin para normalizar arquivos `composer.json`.
* [Composer Patches](https://github.com/cweagans/composer-patches) - Plugin do Composer para aplicar patches.
* [Composer Prefer Lowest Validator](https://github.com/dereuromark/composer-prefer-lowest) - Plugin para verificar se é possível instalar e testar as dependências mínimas.
* [Composer Require Checker](https://github.com/maglnet/ComposerRequireChecker) - Ferramenta de linha de comando para analisar as dependências do Composer e verificar se não há símbolos desconhecidos no código-fonte de um pacote.
* [Composer Unused](https://github.com/composer-unused/composer-unused) - Ferramenta de linha de comando para procurar pacotes Composer não utilizados.
* [Repman](https://repman.io) - Gerenciador privado de repositórios de pacotes PHP e proxy do Packagist.
* [Satis](https://github.com/composer/satis) - Gerador de repositórios Composer estáticos.

### Frameworks
*Frameworks para desenvolvimento web.*

* [CakePHP](https://cakephp.org/) - Framework de desenvolvimento rápido de aplicações.
* [CodeIgniter](https://codeigniter.com/) - Framework PHP poderoso e com uma pegada bastante leve.
* [Ecotone](https://docs.ecotone.tech/) - Barramento de serviços para PHP baseado nos princípios arquiteturais de DDD, CQRS e Event Sourcing.
* [Laminas](https://getlaminas.org/) - Framework composto por componentes individuais (anteriormente Zend Framework).
* [Laravel](https://laravel.com/) - Framework para aplicações web com sintaxe expressiva e elegante.
* [Nette](https://nette.org) - Framework web composto por componentes maduros.
* [Phalcon](https://phalcon.io/en-us) - Framework implementado como uma extensão em C.
* [Spiral](https://spiral.dev/) - Framework de alto desempenho para PHP e Go.
* [Symfony](https://symfony.com/) - Conjunto de componentes reutilizáveis e um framework web.
* [Tempest](https://github.com/tempestphp/tempest-framework) - Framework que não fica no seu caminho.
* [Yii2](https://github.com/yiisoft/yii2/) - Framework web rápido, seguro e eficiente.

### Complementos de frameworks
*Complementos relacionados a frameworks de desenvolvimento web.*

* [CakePHP CRUD](https://github.com/friendsofcake/crud) - Plugin de desenvolvimento rápido de aplicações (RAD) para CakePHP.
* [Filament PHP](https://filamentphp.com/) - Framework de interface de usuário poderoso e de código aberto para Laravel.
* [Inertia.js](https://inertiajs.com/) - Adaptador para criar aplicações de página única usando roteamento e controladores no servidor, sem precisar de uma API separada.
* [LaravelS](https://github.com/hhxsv5/laravel-s) - Adaptador pronto para uso entre Laravel/Lumen e Swoole.
* [Livewire](https://livewire.laravel.com/) - Interfaces de front-end poderosas e dinâmicas sem sair do PHP.

### Sistemas de gerenciamento de conteúdo (CMS)
*Ferramentas para gerenciar conteúdo digital.*

* [Backdrop](https://backdropcms.org) - CMS voltado a pequenas e médias empresas e organizações sem fins lucrativos (um fork do Drupal).
* [Concrete5](https://www.concretecms.com/) - CMS voltado a usuários com conhecimentos técnicos básicos.
* [CraftCMS](https://github.com/craftcms/cms) - CMS flexível e fácil de usar para criar experiências digitais personalizadas na web e além.
* [Drupal](https://new.drupal.org/home) - CMS de nível empresarial.
* [Grav](https://github.com/getgrav/grav) - CMS moderno baseado em arquivos.
* [Joomla](https://www.joomla.org/) - Mais um CMS líder de mercado.
* [Kirby](https://getkirby.com/) - CMS baseado em arquivos que se adapta a qualquer projeto.
* [Magento](https://github.com/magento/magento2) - Plataforma de comércio eletrônico de código aberto amplamente utilizada.
* [Moodle](https://moodle.org/) - Plataforma de aprendizagem de código aberto.
* [OctoberCMS](https://octobercms.com/) - CMS baseado no Laravel.
* [OpenMage](https://github.com/OpenMage/magento-lts) - Fork da plataforma de comércio eletrônico Magento 1, que chegou ao fim de vida útil.
* [Pico CMS](https://picocms.org/) - CMS leve baseado em arquivos.
* [Silverstripe](https://www.silverstripe.org/) - CMS simples, flexível e seguro.
* [Statamic](https://statamic.com/) - CMS baseado em arquivos e no Git, construído sobre Laravel.
* [Sulu](https://sulu.io/) - CMS fácil de usar para usuários e desenvolvedores, construído sobre o framework Symfony.
* [TYPO3](https://typo3.org) - CMS de nível empresarial.
* [WinterCMS](https://wintercms.com) - Fork do OctoberCMS mantido pela comunidade e construído sobre Laravel.
* [WordPress](https://github.com/WordPress/WordPress) - Plataforma de blogs e CMS.

### Componentes
*Componentes independentes de frameworks de desenvolvimento web e grupos de desenvolvimento.*

* [Aura](https://auraphp.com/) - Componentes independentes, totalmente desacoplados entre si e de qualquer framework.
* [CakePHP Plugins](https://plugins.cakephp.org/) - Diretório de plugins do CakePHP.
* [Laminas Components](https://docs.laminas.dev/components/) - Os componentes que formam o Laminas Framework.
* [Laravel Components](https://github.com/illuminate) - Componentes do Laravel Framework.
* [League of Extraordinary Packages](https://thephpleague.com/) - Grupo de desenvolvimento de pacotes PHP.
* [Spatie Open Source](https://spatie.be/open-source) - Coleção de pacotes de código aberto para PHP e Laravel.
* [Symfony Packages](https://symfony.com/packages) - Bibliotecas desacopladas para aplicações PHP.

### Microframeworks
*Microframeworks e roteadores.*

* [Laravel Zero](https://laravel-zero.com) - Microframework para aplicações de console.
* [Mezzio](https://getexpressive.org/) - Microframework do Laminas.
* [Minicli](https://github.com/minicli/minicli) - Framework minimalista, sem dependências, para criar aplicações PHP centradas em CLI.
* [Silly](https://github.com/mnapoli/silly) - Microframework para aplicações CLI.
* [Slim](https://www.slimframework.com/) - Mais um microframework simples.

### Complementos de microframeworks
*Complementos relacionados a microframeworks e roteadores.*

* [Slim Skeleton](https://github.com/slimphp/Slim-Skeleton) - Estrutura inicial para o Slim.
* [Slim PHP View](https://github.com/slimphp/PHP-View) - Renderizador PHP simples para Slim.

### Roteadores
*Bibliotecas para lidar com o roteamento de aplicações.*

* [Aura.Router](https://github.com/auraphp/Aura.Router) - Biblioteca de roteamento completa.
* [Fast Route](https://github.com/nikic/FastRoute) - Biblioteca de roteamento rápida.
* [Klein](https://github.com/klein/klein.php) - Roteador flexível.
* [Route](https://github.com/thephpleague/route) - Biblioteca de roteamento construída sobre Fast Route.

### Templates
*Bibliotecas e ferramentas para criação de templates e análise léxica.*

* [Latte](https://latte.nette.org/) - Templates mais seguros e realmente intuitivos para PHP.
* [MtHaml](https://github.com/arnaud-lb/MtHaml) - Implementação em PHP da linguagem de templates HAML.
* [Mustache](https://github.com/bobthecow/mustache.php) - Implementação em PHP da linguagem de templates Mustache.
* [PHPTAL](https://phptal.org/) - Implementação em PHP da linguagem de templates [TAL](https://en.wikipedia.org/wiki/Template_Attribute_Language).
* [Plates](https://platesphp.com/) - Biblioteca de templates nativa do PHP.
* [Smarty](https://www.smarty.net/) - Mecanismo de templates complementar ao PHP.
* [Twig](https://twig.symfony.com/) - Linguagem de templates abrangente.

### Geradores de sites estáticos
*Ferramentas para pré-processar conteúdo e gerar páginas web.*

* [Cecil](https://cecil.app/) - Gerador de sites estáticos simples, poderoso e orientado a conteúdo.
* [Couscous](https://couscous.io) - Ferramenta para converter documentação Markdown em sites.
* [Jigsaw](https://jigsaw.tighten.com/) - Sites estáticos simples com Blade do Laravel.
* [Sculpin](https://sculpin.io) - Ferramenta que converte Markdown e Twig em HTML estático.

### HTTP
*Bibliotecas para trabalhar com HTTP.*

* [Buzz](https://github.com/kriswallsmith/Buzz) - Mais um cliente HTTP.
* [Guzzle](https://github.com/guzzle/guzzle) - Cliente HTTP abrangente.
* [HTTPlug](https://httplug.io) - Abstração de cliente HTTP que não depende de uma implementação específica.
* [Nyholm PSR-7](https://github.com/Nyholm/psr7) - Implementação PSR-7 superleve, muito rigorosa e rápida.
* [PHP VCR](https://php-vcr.github.io/) - Biblioteca para gravar e reproduzir requisições HTTP.
* [Requests](https://github.com/WordPress/Requests) - Biblioteca HTTP simples.
* [Retrofit](https://github.com/tebru/retrofit-php) - Biblioteca que facilita a criação de clientes para APIs REST.
* [Saloon](https://github.com/saloonphp/saloon) - Framework para criar integrações e SDKs de API elegantes.
* [Symfony HTTP Client](https://github.com/symfony/http-client) - Componente para buscar recursos HTTP de forma síncrona ou assíncrona.
* [Laminas Diactoros](https://github.com/laminas/laminas-diactoros) - Implementação de mensagens HTTP PSR-7.

### Web scraping
*Bibliotecas para fazer scraping de sites e detectar rastreadores.*

* [Chrome PHP](https://github.com/chrome-php/chrome) - Controle instâncias headless do Chrome/Chromium usando PHP.
* [CrawlerDetect](https://github.com/JayBizzle/Crawler-Detect) - Classe PHP para detectar bots, crawlers e spiders pelo user agent.
* [DiDOM](https://github.com/Imangazaliev/DiDOM) - Analisador e ferramenta de scraping de HTML super-rápida.
* [Embed](https://github.com/php-embed/Embed) - Extrator de informações de qualquer serviço ou página da web.
* [PHP Spider](https://github.com/mvdbos/php-spider) - Spider web em PHP configurável e extensível.
* [Symfony Panther](https://github.com/symfony/panther) - Biblioteca de testes em navegadores e rastreamento da web para PHP e Symfony.

### Middlewares
*Bibliotecas para criar aplicações usando middlewares.*

* [PSR-15 Middlewares](https://github.com/middlewares/psr15-middlewares) - Coleção inspiradora de middlewares práticos.
* [Stack](https://github.com/stackphp) - Biblioteca de middlewares combináveis para Symfony.
* [Laminas Stratigility](https://github.com/laminas/laminas-stratigility) - Middleware para PHP construído sobre PSR-7.

### URL
*Bibliotecas para analisar URLs.*

* [PHP Domain Parser](https://github.com/jeremykendall/php-domain-parser) - Biblioteca para analisar sufixos de domínios.
* [sabre/uri](https://github.com/sabre-io/uri) - Biblioteca funcional para manipulação de URIs.
* [Uri](https://github.com/thephpleague/uri) - Mais uma biblioteca para manipulação de URLs.

### E-mail
*Bibliotecas para enviar e analisar e-mails.*

* [CssToInlineStyles](https://github.com/tijsverkoyen/CssToInlineStyles) - Biblioteca para incorporar CSS em templates de e-mail.
* [ddeboer/imap](https://github.com/ddeboer/imap) - Biblioteca IMAP orientada a objetos para PHP, totalmente testada.
* [Email Reply Parser](https://github.com/willdurand/EmailReplyParser) - Biblioteca para analisar respostas de e-mail.
* [Fetch](https://github.com/tedious/Fetch) - Biblioteca IMAP.
* [Mautic](https://github.com/mautic/mautic) - Automação de marketing por e-mail.
* [PHPMailer](https://github.com/PHPMailer/PHPMailer) - Mais uma solução para envio de e-mails.
* [Stampie](https://github.com/Stampie/Stampie) - Biblioteca para serviços de e-mail como [SendGrid](https://www.twilio.com/en-us/sendgrid), [PostMark](https://postmarkapp.com), [MailGun](https://www.mailgun.com/) e [MailChimp](https://mailchimp.com/features/transactional-email/).
* [Symfony Mailer](https://github.com/symfony/mailer) - Biblioteca poderosa para criar e enviar e-mails.

### Arquivos
*Bibliotecas para manipular arquivos e detectar tipos MIME.*

* [CSV](https://github.com/thephpleague/csv) - Biblioteca para manipulação de dados CSV.
* [Flysystem](https://github.com/thephpleague/Flysystem) - Abstração para sistemas de arquivos locais e remotos.
* [Gaufrette](https://github.com/KnpLabs/Gaufrette) - Camada de abstração de sistema de arquivos.
* [PHP FFmpeg](https://github.com/PHP-FFmpeg/PHP-FFmpeg/) - Wrapper para a biblioteca de vídeo [FFmpeg](https://www.ffmpeg.org/).
* [UnifiedArchive](https://github.com/wapmorgan/UnifiedArchive) - Leitor e gravador unificado de arquivos compactados.
* [Parquet](https://github.com/flow-php/parquet) - Implementação em PHP do formato de arquivo Parquet.

### Fluxos
*Bibliotecas para trabalhar com fluxos.*

* [ByteStream](https://amphp.org/byte-stream) - Abstração de fluxo assíncrono.

### Injeção de dependência
*Bibliotecas que implementam o padrão de projeto de injeção de dependência.*

* [Aura.Di](https://github.com/auraphp/Aura.Di) - Contêiner de injeção de dependência serializável com injeção por construtor e setter, suporte a interfaces e traits, herança de configuração e muito mais.
* [Acclimate](https://github.com/AcclimateContainer/acclimate-container) - Interface comum para contêineres de injeção de dependência e localizadores de serviços.
* [Auryn](https://github.com/rdlowrey/Auryn) - Injetor de dependências recursivo.
* [Container](https://github.com/thephpleague/container) - Mais um contêiner de injeção de dependência flexível.
* [Disco](https://github.com/bitExpert/disco) - Contêiner de injeção de dependência compatível com PSR-11 e baseado em anotações.
* [PHP-DI](https://php-di.org/) - Contêiner de injeção de dependência com suporte a autowiring.
* [Pimple](https://github.com/silexphp/Pimple) - Contêiner de injeção de dependência compacto.
* [Symfony DI](https://github.com/symfony/dependency-injection) - Componente de contêiner de injeção de dependência.

### Imagens
*Bibliotecas para manipular imagens.*

* [Color Extractor](https://github.com/thephpleague/color-extractor) - Biblioteca para extrair cores de imagens.
* [Glide](https://github.com/thephpleague/glide) - Biblioteca para manipulação de imagens sob demanda.
* [Image Hash](https://github.com/jenssegers/imagehash) - Biblioteca para gerar hashes perceptuais de imagens.
* [Image Optimizer](https://github.com/psliwa/image-optimizer) - Biblioteca para otimizar imagens.
* [Imagine](https://imagine.readthedocs.io/en/latest/index.html) - Biblioteca para manipulação de imagens.
* [Intervention Image](https://github.com/Intervention/image) - Mais uma biblioteca para manipulação de imagens.
* [PHP Image Workshop](https://github.com/Sybio/ImageWorkshop) - Mais uma biblioteca para manipulação de imagens.
* [PHP QR Code](https://github.com/chillerlan/php-qrcode/) - Gerador e leitor de códigos QR.

### Testes
*Bibliotecas para testar bases de código e gerar dados de teste.*

* [Alice](https://github.com/nelmio/alice) - Biblioteca expressiva para geração de fixtures.
* [Behat](https://docs.behat.org/en/latest/) - Framework de testes baseado em desenvolvimento orientado a comportamento (BDD).
* [Codeception](https://github.com/Codeception/Codeception) - Framework de testes full-stack.
* [Faker](https://github.com/fakerphp/faker) - Biblioteca para geração de dados fictícios.
* [Foundry](https://github.com/zenstruck/foundry) - Fábrica de fixtures para Doctrine.
* [Infection](https://github.com/infection/infection) - Framework de testes de mutação baseado em AST para PHP.
* [Kahlan](https://github.com/kahlan/kahlan) - Framework full-stack de testes unitários/BDD com suporte integrado a stubs, mocks e cobertura de código.
* [Mink](https://mink.behat.org/en/latest/) - Testes de aceitação web.
* [Mockery](https://github.com/mockery/mockery) - Biblioteca de objetos mock para testes.
* [Nette Tester](https://github.com/nette/tester) - Framework produtivo e agradável para testes unitários paralelos.
* [ParaTest](https://github.com/paratestphp/paratest) - Biblioteca de testes paralelos para PHPUnit.
* [Pest](https://pestphp.com/) - Framework de testes com foco na simplicidade.
* [Phake](https://github.com/phake/phake) - Mais uma biblioteca de objetos mock para testes.
* [PHP-Mock](https://github.com/php-mock/php-mock) - Biblioteca de mocks para funções nativas do PHP (por exemplo, time()).
* [PHP MySQL Engine](https://github.com/vimeo/php-mysql-engine) - Mecanismo MySQL escrito em PHP puro.
* [PHPSpec](https://github.com/phpspec/phpspec) - Biblioteca de testes unitários baseada em especificações de projeto.
* [PHPT](https://php.github.io/php-src/miscellaneous/writing-tests.html) - Ferramenta de testes usada pelo próprio PHP.
* [PHPUnit](https://github.com/sebastianbergmann/phpunit) - Framework de testes unitários.
* [PHPUnit Polyfills](https://github.com/Yoast/PHPUnit-Polyfills/) - Facilita a execução de testes PHPUnit em várias versões do PHPUnit.
* [Prophecy](https://github.com/phpspec/prophecy) - Framework de mocking altamente opinativo.
* [VFS Stream](https://github.com/bovigo/vfsStream) - Wrapper de fluxo de sistema de arquivos virtual para testes.

### Integração contínua
*Bibliotecas e aplicações para integração contínua.*

* [CircleCI](https://circleci.com) - Plataforma de integração contínua.
* [GitLab CI](https://about.gitlab.com/solutions/continuous-integration/) - Plataforma de integração contínua.
* [Jenkins](https://www.jenkins.io/) - Plataforma de integração contínua com [suporte a PHP](https://www.jenkins.io/solutions/php/).
* [SemaphoreCI](https://semaphore.io/) - Plataforma de integração contínua para projetos de código aberto e privados.
* [Travis CI](https://www.travis-ci.com) - Plataforma de integração contínua.
* [Setup PHP](https://github.com/shivammathur/setup-php) - Uma GitHub Action para PHP.

### Documentação
*Bibliotecas para gerar a documentação de projetos.*

* [APIGen](https://github.com/apigen/apigen) - Mais um gerador de documentação de API.
* [daux.io](https://github.com/dauxio/daux.io) - Gerador de documentação que usa arquivos Markdown.
* [phpDocumentor](https://phpdoc.org/) - Gerador de documentação.
* [Scramble](https://github.com/dedoc/scramble) - Gera automaticamente documentação OpenAPI a partir do seu código, sem anotações.
* [zircote/swagger-php](https://github.com/zircote/swagger-php) - Gera documentação OpenAPI para sua API RESTful.

### Segurança
*Bibliotecas para gerar números aleatórios seguros, criptografar dados e analisar e testar vulnerabilidades.*

* [AntiXSS](https://github.com/voku/anti-xss) - Biblioteca que tenta prevenir ataques de Cross-Site Scripting (XSS) por meio de listas de bloqueio.
* [Halite](https://paragonie.com/project/halite) - Biblioteca simples para criptografia usando [libsodium](https://github.com/jedisct1/libsodium).
* [Optimus](https://github.com/jenssegers/optimus) - Ofuscação de IDs baseada no método de hash multiplicativo de Knuth.
* [OWASP](https://owasp.org/) - Explore o universo da segurança cibernética.
* [PHPGGC](https://github.com/ambionics/phpggc) - Biblioteca de payloads PHP desserializáveis e ferramenta para gerá-los.
* [PHP Encryption](https://github.com/defuse/php-encryption) - Biblioteca segura de criptografia para PHP.
* [PHPSecLib](https://github.com/phpseclib/phpseclib) - Biblioteca de comunicação segura, escrita inteiramente em PHP.
* [Roave Security Advisories](https://github.com/Roave/SecurityAdvisories) - Este pacote garante que sua aplicação não tenha dependências instaladas com vulnerabilidades de segurança conhecidas.
* [Secure Headers](https://github.com/BePsvPT/secure-headers) - Pacote que adiciona cabeçalhos relacionados à segurança às respostas HTTP.
* [SQLMap](https://github.com/sqlmapproject/sqlmap) - Ferramenta automática para injeção de SQL e invasão de bancos de dados.
* [Zap](https://github.com/zaproxy/zaproxy) - Ferramenta integrada de testes de invasão para aplicações web.

### Senhas
*Bibliotecas e ferramentas para trabalhar com senhas e armazená-las.*

* [GenPhrase](https://github.com/timoh6/GenPhrase) - Biblioteca para gerar frases-senha aleatórias e seguras.
* [Password Validator](https://github.com/jeremykendall/password-validator) - Biblioteca para validar e atualizar hashes de senhas.
* [Password-Generator](https://github.com/hackzilla/password-generator) - Biblioteca PHP para gerar senhas aleatórias.
* [phpass](https://www.openwall.com/phpass/) - Framework portátil de hash de senhas.
* [Zxcvbn PHP](https://github.com/bjeavons/zxcvbn-php) - Biblioteca PHP para estimar de forma realista a força de senhas, baseada em Zxcvbn JS.

### Análise de código
*Bibliotecas e ferramentas para analisar, interpretar e manipular bases de código.*

* [Better Reflection](https://github.com/Roave/BetterReflection) - Biblioteca de reflexão baseada em AST que permite analisar e manipular código.
* [Bladestan](https://github.com/bladestan/bladestan) - Extensão do PHPStan para análise estática de templates Blade.
* [Code Climate](https://codeclimate.com) - Revisão automatizada de código.
* [Editorconfig-Checker](https://github.com/editorconfig-checker/editorconfig-checker.php) - Utilitário de linha de comando que verifica se seus arquivos seguem as regras do `.editorconfig`.
* [GrumPHP](https://github.com/phpro/grumphp) - Ferramenta de qualidade de código para PHP.
* [PHP AST Viewer](https://php-ast-viewer.com/) - Ferramenta para visualizar a Árvore Sintática Abstrata do código PHP.
* [PHP Magic Number Detector](https://github.com/povils/phpmnd) - Biblioteca que detecta números mágicos no código.
* [PHP Parser](https://github.com/nikic/PHP-Parser) - Analisador sintático de PHP escrito em PHP.
* [PHP Semantic Versioning Checker](https://github.com/tomzx/php-semver-checker) - Utilitário de linha de comando que compara dois conjuntos de código-fonte e determina a versão semântica apropriada a aplicar.
* [Phpactor](https://github.com/phpactor/phpactor) - Ferramenta de conclusão, refatoração e introspecção de código PHP.
* [PHPQA](https://github.com/EdgedesignCZ/phpqa) - Ferramenta para executar ferramentas de QA (phploc, phpcpd, phpcs, pdepend, phpmd, phpmetrics).
* [Rector](https://github.com/rectorphp/rector) - Ferramenta para atualizar e refatorar código.
* [Scrutinizer](https://scrutinizer-ci.com/) - Ferramenta web para [analisar código PHP](https://github.com/scrutinizer-ci/php-analyzer).
* [UBench](https://github.com/devster/ubench) - Biblioteca simples para microbenchmarking.

### Qualidade de código
*Bibliotecas para gerenciar a qualidade, formatação e análise estática do código.*

* [CaptainHook](https://github.com/captainhook-git/captainhook) - Biblioteca flexível e fácil de usar para hooks do Git.
* [Laravel Pint](https://github.com/laravel/pint) - Biblioteca para corrigir padrões de codificação no Laravel.
* [PHP CodeSniffer](https://github.com/PHPCSStandards/PHP_CodeSniffer) - Biblioteca que detecta e corrige automaticamente violações de padrões de codificação em PHP, CSS e JS.
* [PHP CS Fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) - Biblioteca para corrigir padrões de codificação.
* [PHP CS Fixer Configurator](https://mlocati.github.io/php-cs-fixer-configurator/) - Aplicação web que ajuda a configurar conjuntos de regras do PHP CS Fixer.
* [PHP Mess Detector](https://github.com/phpmd/phpmd) - Biblioteca que analisa código em busca de bugs, código abaixo do ideal, parâmetros não utilizados e muito mais.
* [PHPCheckstyle](https://github.com/PHPCheckstyle/phpcheckstyle) - Ferramenta que ajuda a seguir determinadas convenções de codificação.

### Análise estática
*Bibliotecas para realizar análise estática de código PHP.*

* [Dead Code Detector](https://github.com/shipmonk-rnd/dead-code-detector) - Extensão do PHPStan para encontrar código PHP não utilizado.
* [Deptrac](https://github.com/deptrac/deptrac) - Ferramenta de análise estática para impor regras de dependência entre camadas arquiteturais.
* [Exakat](https://github.com/exakat/exakat) - Mecanismo de análise estática para PHP.
* [Larastan](https://github.com/larastan/larastan) - Wrapper do PHPStan para Laravel que adiciona análise estática a projetos Laravel.
* [Mago](https://github.com/carthage-software/mago) - Conjunto de ferramentas para PHP que busca melhorar a experiência de desenvolvimento.
* [phan](https://github.com/phan/phan) - Analisador estático baseado em PHP 7+ e na extensão php-ast.
* [PHP Architecture Tester](https://github.com/carlosas/phpat) - Ferramenta de testes de arquitetura fácil de usar para PHP.
* [PHPCompatibility](https://github.com/PHPCompatibility/PHPCompatibility) - Verificador de compatibilidade do PHP para PHP CodeSniffer.
* [PHPDoc Parser](https://github.com/phpstan/phpdoc-parser) - Analisador de phpDoc de nova geração, com suporte a tipos de interseção e genéricos.
* [PHP Metrics](https://github.com/phpmetrics/PhpMetrics) - Biblioteca de métricas estáticas.
* [PHPStan](https://github.com/phpstan/phpstan) - Ferramenta de análise estática para PHP.
* [Psalm](https://github.com/vimeo/psalm) - Ferramenta de análise estática para encontrar erros em aplicações PHP.

### Arquitetura
*Bibliotecas relacionadas a padrões de projeto, abordagens de programação e formas de organizar o código.*

* [Design Patterns PHP](https://github.com/DesignPatternsPHP/DesignPatternsPHP) - Repositório de padrões de software implementados em PHP.
* [Finite](https://github.com/yohang/Finite) - Máquina de estados finitos simples para PHP.
* [Functional PHP](https://github.com/lstrojny/functional-php) - Biblioteca de programação funcional.
* [Iter](https://github.com/nikic/iter) - Biblioteca que oferece primitivas de iteração usando geradores.
* [IterTools PHP](https://github.com/markrogoyski/itertools-php) - Biblioteca que oferece funcionalidades para trabalhar com entidades iteráveis (semelhante à biblioteca itertools do Python).
* [Pipeline](https://github.com/thephpleague/pipeline) - Implementação do padrão pipeline.
* [Porter](https://github.com/ScriptFUSION/Porter) - Biblioteca de abstração de importação de dados para consumir APIs web e outras fontes de dados.
* [RulerZ](https://github.com/K-Phoen/rulerz) - Mecanismo de regras poderoso e implementação do padrão Specification.

### Depuração e criação de perfis
*Bibliotecas e ferramentas para depurar erros e criar perfis de código.*

* [APM](https://pecl.php.net/package/APM) - Extensão de monitoramento que coleta erros e estatísticas em SQLite/MySQL/StatsD.
* [Barbushin PHP Console](https://github.com/barbushin/php-console) - Mais um console de depuração web que usa o Google Chrome.
* [Kint](https://github.com/kint-php/kint) - Ferramenta de depuração e criação de perfis.
* [LaraDumps](https://github.com/laradumps/laradumps) - Ferramenta de depuração para Laravel com aplicativo desktop dedicado.
* [Metrics](https://github.com/beberlei/metrics) - Biblioteca simples de API de métricas.
* [PCOV](https://github.com/krakjoe/pcov) - Driver independente e compatível com cobertura de código.
* [PHP Console](https://github.com/Seldaek/php-console) - Console de depuração web.
* [PHP Debug Bar](https://php-debugbar.com/) - Barra de ferramentas para depuração.
* [PHPBench](https://github.com/phpbench/phpbench) - Framework de benchmarking.
* [PHPSpy](https://github.com/adsr/phpspy) - Profiler de amostragem com baixo overhead.
* [Symfony VarDumper](https://github.com/symfony/var-dumper) - Componente para despejar variáveis.
* [Tracy](https://github.com/nette/tracy) - Biblioteca simples para detecção de erros, registro de logs e medição de tempo.
* [Trap](https://github.com/buggregator/trap) - Depurador de variáveis expandido, com interface web e plugin para IDE.
* [Whoops](https://github.com/filp/whoops) - Biblioteca elegante para tratamento de erros.
* [xDebug](https://github.com/xdebug/xdebug) - Ferramenta de depuração e criação de perfis para PHP.
* [XHProf](https://github.com/phacility/xhprof) - Ferramenta de criação de perfis desenvolvida originalmente pelo Facebook.
* [Z-Ray](https://www.zend.com/products/z-ray) - Ferramenta de depuração e criação de perfis para Zend Server.

### Serviços de monitoramento e rastreamento de erros
*Ferramentas de monitoramento de desempenho de aplicações e rastreamento de erros, auto-hospedadas ou na nuvem.*

* [Blackfire](https://www.blackfire.io) - Profiler de código com baixo overhead.
* [Buggregator](https://buggregator.dev) - Servidor de depuração que agrega dumps de variáveis, dados de criação de perfis, e-mails, logs e eventos do Sentry.
* [BugSnag](https://www.bugsnag.com/) - Monitoramento de erros e de usuários reais.
* [Honeybadger](https://www.honeybadger.io/) - Rastreamento de erros e monitoramento de aplicações para desenvolvedores.
* [Rollbar](https://rollbar.com/) - Serviço de registro e rastreamento de erros para equipes de software.
* [Sentry](https://sentry.io/welcome/) - Software de monitoramento de desempenho de aplicações e rastreamento de erros.
* [Tideways](https://tideways.com/) - Ferramenta de monitoramento e criação de perfis.

### Ferramentas de build
*Ferramentas de automação e build de projetos.*

* [Box](https://github.com/box-project/box) - Utilitário para criar arquivos PHAR.
* [PHPacker](https://github.com/phpacker/phpacker) - Criador de PHAR que compila aplicações PHP em executáveis independentes.
* [Phing](https://www.phing.info/) - Sistema de build de projetos PHP inspirado no Apache Ant.
* [RMT](https://github.com/liip/RMT) - Biblioteca para versionar e lançar software.

### Executores de tarefas
*Bibliotecas para automatizar e executar tarefas.*

* [Jobby](https://github.com/jobbyphp/jobby) - Gerenciador de tarefas cron em PHP que não exige modificar o crontab.
* [Robo](https://github.com/consolidation/Robo) - Executor de tarefas PHP com configurações orientadas a objetos.

### Navegação
*Ferramentas para criar estruturas de navegação.*

* [KnpMenu](https://github.com/KnpLabs/KnpMenu) - Biblioteca de menus.
* [Menu](https://github.com/spatie/menu) - Biblioteca flexível de menus com interface fluente.

### Gerenciamento de recursos
*Ferramentas para gerenciar, compactar e minificar recursos de sites.*

* [JShrink](https://github.com/tedious/JShrink) - Biblioteca para minificar JavaScript.
* [Laravel Mix](https://github.com/laravel-mix/laravel-mix) - Wrapper elegante para o Webpack, voltado aos casos de uso mais comuns.
* [Symfony Asset](https://github.com/symfony/asset) - Gerencia a geração e o versionamento de URLs de recursos web.
* [Symfony Encore](https://github.com/symfony/webpack-encore) - API simples, mas poderosa, para processar e compilar recursos usando Webpack.

### Geolocalização
*Bibliotecas para geocodificar endereços e trabalhar com latitude e longitude.*

* [Country List](https://github.com/umpirsky/country-list) - Lista de todos os países com nomes e códigos ISO 3166-1.
* [GeoCoder](https://geocoder-php.org/) - Biblioteca para geocodificação.
* [GeoJSON](https://github.com/jmikola/geojson) - Implementação de GeoJSON.
* [GeoTools](https://github.com/thephpleague/geotools) - Biblioteca de ferramentas geográficas.
* [PHPGeo](https://github.com/mjaschen/phpgeo) - Biblioteca geográfica simples.

### Data e hora
*Bibliotecas para trabalhar com datas e horários.*

* [Business Time](https://github.com/kylekatarnls/business-time) - Extensão do Carbon para gerenciar horários comerciais e dias úteis.
* [CalendR](https://github.com/yohang/CalendR) - Biblioteca para gerenciamento de calendários.
* [Carbon](https://github.com/briannesbitt/Carbon) - Extensão simples da API DateTime.
* [Chronos](https://github.com/cakephp/chronos) - Extensão da API DateTime com suporte a datas e horários mutáveis e imutáveis.
* [Moment.php](https://github.com/fightbulc/moment.php) - Manipulador de DateTime para PHP inspirado no Moment.js, com suporte a i18n.
* [PHP RRule](https://github.com/rlanvin/php-rrule) - Biblioteca para trabalhar com datas e horários recorrentes, baseada na especificação RRule do iCalendar.
* [Yasumi](https://github.com/azuyalabs/yasumi) - Biblioteca que ajuda a calcular as datas e os nomes de feriados.

### Eventos
*Bibliotecas orientadas a eventos ou que implementam loops de eventos não bloqueantes.*

* [Amp](https://github.com/amphp/amp) - Biblioteca de E/S não bloqueante e orientada a eventos.
* [Broadway](https://github.com/broadway/broadway) - Biblioteca de event sourcing e CQRS.
* [CakePHP Event](https://github.com/cakephp/event) - Biblioteca de distribuição de eventos.
* [Elephant.io](https://github.com/ElephantIO/elephant.io) - Mais uma biblioteca de WebSocket.
* [Evenement](https://github.com/igorw/evenement) - Biblioteca de distribuição de eventos.
* [Event](https://github.com/thephpleague/event) - Biblioteca de eventos com foco em eventos de domínio.
* [Fast CGI Client](https://github.com/hollodotme/fast-cgi-client) - Cliente para fazer requisições síncronas/assíncronas pelo socket do php-fpm.
* [FrankenPHP](https://frankenphp.dev/) - Servidor moderno de aplicações PHP escrito em Go.
* [Pawl](https://github.com/ratchetphp/Pawl) - Cliente assíncrono de WebSocket.
* [Prooph Event Store](https://github.com/prooph/event-store) - Componente de event sourcing para persistir mensagens de eventos.
* [PHP Defer](https://github.com/php-defer/php-defer) - Instrução defer do Go para PHP.
* [Ratchet](https://github.com/ratchetphp/Ratchet) - Biblioteca de WebSocket.
* [ReactPHP](https://github.com/reactphp/reactphp) - Biblioteca de E/S não bloqueante e orientada a eventos.
* [RxPHP](https://github.com/ReactiveX/RxPHP) - Biblioteca de extensão reativa.
* [Swoole](https://github.com/swoole/swoole-src) - Framework de comunicação de rede de alto desempenho para PHP, assíncrono, concorrente e orientado a eventos, escrito em C.
* [Workerman](https://github.com/walkor/Workerman) - Biblioteca de E/S não bloqueante e orientada a eventos.

### Registro de logs
*Bibliotecas para gerar e trabalhar com arquivos de log.*

* [Monolog](https://github.com/Seldaek/monolog) - Sistema abrangente de registro de logs.

### Comércio eletrônico
*Bibliotecas e aplicações para receber pagamentos e criar lojas de comércio eletrônico.*

* [Money](https://github.com/moneyphp/money) - Implementação em PHP do padrão monetário de Fowler.
* [Brick Money](https://github.com/brick/money) - Biblioteca monetária para PHP com suporte a contextos, arredondamentos em dinheiro e conversão de moedas.
* [OmniPay](https://github.com/thephpleague/omnipay) - Biblioteca de processamento de pagamentos com múltiplos gateways, independente de framework.
* [Payum](https://github.com/payum/payum) - Biblioteca de abstração de pagamentos.
* [Shopsys Framework](https://github.com/shopsys/shopsys/) - Plataforma de comércio eletrônico de código aberto para equipes internas de desenvolvimento.
* [Shopware](https://github.com/shopware/shopware) - Software de comércio eletrônico altamente personalizável.
* [Swap](https://github.com/florianv/swap) - Biblioteca de taxas de câmbio.
* [Sylius](https://sylius.com/) - Solução de comércio eletrônico de código aberto.

### PDF
*Bibliotecas e softwares para trabalhar com arquivos PDF.*

* [Browsershot](https://github.com/spatie/browsershot) - Converta HTML em imagem, PDF ou string.
* [Dompdf](https://github.com/dompdf/dompdf) - Conversor de HTML para PDF.
* [Gotenberg](https://github.com/gotenberg/gotenberg-php) - Cliente PHP para interagir com Gotenberg.
* [Snappy](https://github.com/KnpLabs/snappy) - Biblioteca para geração de PDFs e imagens.
* [TCPDF](https://tcpdf.org/) - Classe PHP de código aberto para gerar documentos PDF.

### Pacote Office
*Bibliotecas para trabalhar com documentos de suítes de escritório.*

* [PHPPowerPoint](https://github.com/PHPOffice/PHPPresentation) - Biblioteca para trabalhar com apresentações do Microsoft PowerPoint.
* [PHPWord](https://github.com/PHPOffice/PHPWord) - Biblioteca para trabalhar com documentos do Microsoft Word.
* [PHPSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet) - Biblioteca PHP pura para ler e gravar planilhas (sucessora do PHPExcel).
* [OpenSpout](https://github.com/openspout/openspout) - Fork mantido pela comunidade do `box/spout`, biblioteca PHP para ler e gravar planilhas (CSV, XLSX e ODS) de forma rápida e escalável.

### Banco de dados
*Bibliotecas para interagir com bancos de dados usando mapeamento objeto-relacional (ORM) ou técnicas de mapeamento de dados.*

* [Atlas.Orm](https://github.com/atlasphp/Atlas.Orm) - Implementação de mapeador de dados para seu modelo de persistência em PHP.
* [Aura.Sql](https://github.com/auraphp/Aura.Sql) - Amplia o PDO nativo e oferece um profiler e localizador de conexões.
* [Aura.SqlQuery](https://github.com/auraphp/Aura.SqlQuery) - Construtores de consultas independentes para MySQL, PostgreSQL, SQLite e Microsoft SQL Server.
* [Baum](https://github.com/etrepat/baum) - Implementação de conjunto aninhado para Eloquent.
* [CakePHP ORM](https://github.com/cakephp/orm) - Mapeador objeto-relacional implementado com o padrão DataMapper.
* [Cycle ORM](https://github.com/cycle/orm) - DataMapper e ORM para PHP.
* [Doctrine Extensions](https://github.com/doctrine-extensions/DoctrineExtensions) - Coleção de extensões comportamentais do Doctrine.
* [Doctrine](https://www.doctrine-project.org/) - DBAL e ORM abrangentes.
* [Laravel Eloquent](https://github.com/illuminate/database) - ORM simples.
* [ProxyManager](https://github.com/Ocramius/ProxyManager) - Conjunto de utilitários para gerar objetos proxy para mapeadores de dados.
* [RedBean](https://redbeanphp.com/index.php) - ORM leve, sem necessidade de configuração.
* [Slimdump](https://github.com/webfactory/slimdump) - Ferramenta simples para despejar bancos de dados MySQL.
* [Spot2](https://github.com/spotorm/spot2) - ORM DataMapper para MySQL.

### Migrações
*Bibliotecas para ajudar a gerenciar esquemas e migrações de bancos de dados.*

* [Doctrine Migrations](https://www.doctrine-project.org/projects/migrations.html) - Biblioteca de migrações para Doctrine.
* [Phinx](https://github.com/cakephp/phinx) - Mais uma biblioteca de migrações de banco de dados.
* [PHPMig](https://github.com/davedevelopment/phpmig) - Mais uma biblioteca de gerenciamento de migrações.
* [Ruckusing](https://github.com/ruckus/ruckusing-migrations) - Migrações de banco de dados para PHP ao estilo das migrações do ActiveRecord, com suporte a MySQL, Postgres e SQLite.

### NoSQL
*Bibliotecas para trabalhar com back-ends "NoSQL".*

* [MongoDB](https://github.com/mongodb/mongo-php-driver) - Driver PHP do MongoDB.
* [MongoDB PHP Library](https://github.com/mongodb/mongo-php-library) - Biblioteca PHP oficial de alto nível do MongoDB, construída sobre o MongoDB PHP Driver.
* [Predis](https://github.com/predis/predis) - Biblioteca Redis completa, com todos os recursos.

### Filas
*Bibliotecas para trabalhar com filas de eventos e tarefas.*

* [BunnyPHP](https://github.com/jakubkulhan/bunny) - Biblioteca AMQP (RabbitMQ) síncrona e também assíncrona (ReactPHP), eficiente e escrita inteiramente em PHP.
* [Pheanstalk](https://github.com/pheanstalk/pheanstalk) - Biblioteca cliente para Beanstalkd.
* [PHP AMQP](https://github.com/php-amqplib/php-amqplib) - Biblioteca AMQP escrita inteiramente em PHP.
* [Tarantool Queue](https://github.com/tarantool-php/queue) - Bindings PHP para Tarantool Queue.
* [Thumper](https://github.com/php-amqplib/Thumper) - Biblioteca de padrões para RabbitMQ.
* [Enqueue](https://github.com/php-enqueue/enqueue-dev) - Pacote PHP de filas de mensagens com suporte a RabbitMQ, AMQP, STOMP, Amazon SQS, Redis e transportes Doctrine.

### Busca
*Bibliotecas e softwares para indexar dados e executar consultas de busca.*

* [Elastica](https://github.com/ruflin/Elastica) - Biblioteca cliente para ElasticSearch.
* [ElasticSearch PHP](https://github.com/elastic/elasticsearch-php) - Biblioteca cliente oficial para [ElasticSearch](https://www.elastic.co/).
* [Solarium](https://www.solarium-project.org/) - Biblioteca cliente para [Solr](https://solr.apache.org/).
* [SphinxQL Query Builder](https://foolcode.github.io/SphinxQL-Query-Builder/) - Biblioteca de consultas para os mecanismos de busca [Sphinx](https://sphinxsearch.com/) e [Manticore](https://manticoresearch.com/).

### Linha de comando
*Bibliotecas relacionadas à linha de comando.*

* [Aura.Cli](https://github.com/auraphp/Aura.Cli) - Oferece objetos equivalentes a requisição (Context) e resposta (Stdio) para a interface de linha de comando, incluindo suporte a Getopt e um objeto Help independente para descrever comandos.
* [CLI Menu](https://github.com/php-school/cli-menu) - Biblioteca para criar menus de CLI.
* [CLIFramework](https://github.com/c9s/CLIFramework) - Framework de linha de comando com suporte à geração de conclusão para zsh/bash, subcomandos e restrições de opções. Também é usado pelo phpbrew.
* [CLImate](https://github.com/thephpleague/climate) - Biblioteca para exibir cores e formatação especial.
* [Commando](https://github.com/nategood/commando) - Mais um analisador simples de opções de linha de comando.
* [Cron Expression](https://github.com/mtdowling/cron-expression) - Biblioteca para calcular datas de execução do cron.
* [GetOpt](https://github.com/getopt-php/getopt-php) - Analisador de opções de linha de comando.
* [GetOptionKit](https://github.com/c9s/GetOptionKit) - Mais um analisador de opções de linha de comando.
* [PsySH](https://github.com/bobthecow/psysh) - Mais um REPL para PHP.
* [ShellWrap](https://github.com/MrRio/shellwrap) - Biblioteca simples de wrapper para linha de comando.

### Autenticação e autorização
*Bibliotecas para implementar autenticação e autorização de usuários.*

* [Aura.Auth](https://github.com/auraphp/Aura.Auth) - Oferece funcionalidades de autenticação e rastreamento de sessões usando vários adaptadores.
* [SocialConnect Auth](https://github.com/socialConnect/auth) - Login social de código aberto (OAuth1\OAuth2\OpenID\OpenIDConnect).
* [Json Web Token](https://github.com/lcobucci/jwt) - Tokens JSON para autenticar e transmitir informações.
* [OAuth 1.0 Client](https://github.com/thephpleague/oauth1-client) - Biblioteca cliente OAuth 1.0.
* [OAuth 2.0 Client](https://github.com/thephpleague/oauth2-client) - Biblioteca cliente OAuth 2.0.
* [OAuth2 Server](https://bshaffer.github.io/oauth2-server-php-docs/) - Mais uma implementação de servidor OAuth2.
* [OAuth2 Server](https://oauth2.thephpleague.com/) - Servidor de autenticação OAuth2, servidor de recursos e biblioteca cliente.
* [Paseto](https://github.com/paragonie/paseto) - Tokens de segurança independentes de plataforma.
* [PHP oAuthLib](https://github.com/daviddesberg/PHPoAuthLib) - Mais uma biblioteca OAuth.
* [TwitterOAuth](https://github.com/abraham/twitteroauth) - Biblioteca OAuth para Twitter.

### Marcação e CSS
*Bibliotecas para trabalhar com formatos de marcação e CSS.*

* [Carve](https://github.com/markup-carve/carve-php) - Analisador PHP para [Carve](https://markup-carve.github.io/carve/), uma linguagem de marcação leve derivada de Markdown e Djot.
* [Cebe Markdown](https://github.com/cebe/markdown) - Analisador Markdown rápido e extensível.
* [CommonMark PHP](https://github.com/thephpleague/commonmark) - Analisador Markdown altamente extensível, com suporte completo à [especificação CommonMark](https://spec.commonmark.org/).
* [Decoda](https://github.com/milesj/decoda) - Biblioteca leve para análise de marcação.
* [Djot](https://github.com/php-collective/djot-php) - Analisador PHP para [Djot](https://djot.net/), uma linguagem moderna de marcação leve (sucessora do Markdown).
* [Essence](https://github.com/essence/essence) - Biblioteca para extrair mídia da web.
* [Embera](https://github.com/mpratt/Embera) - Biblioteca consumidora de oEmbed.
* [HTML to Markdown](https://github.com/thephpleague/html-to-markdown) - Converte HTML em Markdown.
* [HTML5 PHP](https://github.com/Masterminds/html5-php) - Biblioteca analisadora e serializadora de HTML5.
* [Parsedown](https://github.com/erusev/parsedown) - Mais um analisador Markdown.
* [PHP CSS Parser](https://github.com/MyIntervals/PHP-CSS-Parser) - Analisador de arquivos CSS escrito em PHP.
* [PHP Markdown](https://github.com/michelf/php-markdown) - Analisador Markdown.
* [Shiki PHP](https://github.com/spatie/shiki-php) - Pacote PHP para realce de código [Shiki](https://github.com/shikijs/shiki).
* [VObject](https://github.com/sabre-io/vobject) - Biblioteca para analisar objetos VCard e iCalendar.

### JSON
*Bibliotecas para trabalhar com JSON.*

* [JSON Lint](https://github.com/Seldaek/jsonlint) - Utilitário de lint para JSON.
* [JSONMapper](https://github.com/JsonMapper/JsonMapper) - Biblioteca para mapear JSON em objetos PHP.
* [Lazy JSON](https://github.com/cerbero90/lazy-json) - Analisador preguiçoso e econômico em memória para arquivos JSON grandes.

### Strings
*Bibliotecas para analisar e manipular strings.*

* [Agent](https://github.com/jenssegers/agent) - Analisador de user agents para desktop e dispositivos móveis em PHP, baseado no Mobiledetect.
* [ANSI to HTML5](https://github.com/sensiolabs/ansi-to-html) - Biblioteca para converter ANSI em HTML5.
* [Color Jizz](https://github.com/mikeemoo/ColorJizz-PHP) - Biblioteca para manipular e converter cores.
* [Device Detector](https://github.com/matomo-org/device-detector) - Mais uma biblioteca para analisar strings de user agent.
* [Hyphenation](https://github.com/heiglandreas/Org_Heigl_Hyphenator) - Hifenização de texto baseada no algoritmo de hifenização TeX.
* [Jieba-PHP](https://github.com/fukuball/jieba-php) - Port do jieba do Python para PHP. Segmentação de texto chinês para processamento de linguagem natural.
* [Mobile-Detect](https://github.com/serbanghita/Mobile-Detect) - Classe PHP leve para detectar dispositivos móveis (incluindo tablets).
* [Patchwork UTF-8](https://github.com/nicolas-grekas/Patchwork-UTF8) - Biblioteca portátil para trabalhar com strings UTF-8.
* [Portable ASCII](https://github.com/voku/portable-ascii) - Biblioteca para converter strings para ASCII.
* [Portable UTF-8](https://github.com/voku/portable-utf8) - Biblioteca de manipulação de strings com métodos de substituição seguros para UTF-8.
* [Slugify](https://github.com/cocur/slugify) - Biblioteca para converter strings em slugs.
* [SQL Formatter](https://github.com/jdorn/sql-formatter/) - Biblioteca para formatar instruções SQL.
* [Stringy](https://github.com/voku/Stringy) - Biblioteca de manipulação de strings com suporte a multibyte.
* [Url highlight](https://github.com/vstelmakh/url-highlight) - Biblioteca para analisar URLs em textos e convertê-las em links clicáveis.
* [URLify](https://github.com/jbroadway/urlify) - Port do URLify.js do Django para PHP.
* [UUID](https://github.com/ramsey/uuid) - Biblioteca para gerar UUIDs.

### Números
*Bibliotecas para trabalhar com números.*

* [Brick Math](https://github.com/brick/math) - Biblioteca que oferece suporte a números grandes: `BigInteger`, `BigDecimal` e `BigRational`.
* [ByteUnits](https://github.com/gabrielelana/byte-units) - Biblioteca para analisar, formatar e converter unidades de bytes nos sistemas binário e métrico.
* [DecimalObject](https://github.com/php-collective/decimal-object) - Objeto de valor para manipular decimais e números de ponto flutuante de forma simples e precisa.
* [IP](https://github.com/darsyn/ip) - Objeto de valor imutável para trabalhar com endereços IPv4 e IPv6.
* [PHP Conversion](https://github.com/cniska/php-conversion) - Mais uma biblioteca para converter unidades de medida.
* [PHP Units of Measure](https://github.com/triplepoint/php-units-of-measure) - Biblioteca para converter unidades de medida.
* [MathPHP](https://github.com/markrogoyski/math-php) - Biblioteca matemática para PHP.

### Filtragem, sanitização e validação
*Bibliotecas para filtrar, sanitizar e validar dados.*

* [Assert](https://github.com/beberlei/assert) - Biblioteca de validação com um amplo conjunto de asserções. Compatível com encadeamento e avaliação tardia de asserções.
* [Aura.Filter](https://github.com/auraphp/Aura.Filter) - Oferece ferramentas para validar e sanitizar objetos e arrays.
* [CakePHP Validation](https://github.com/cakephp/validation) - Mais uma biblioteca de validação.
* [Filterus](https://github.com/ircmaxell/filterus) - Biblioteca simples de filtragem para PHP.
* [HTML Purifier](https://github.com/ezyang/htmlpurifier) - Filtro HTML compatível com os padrões.
* [ISO-codes](https://github.com/ronanguilloux/IsoCodes) - Biblioteca para validar entradas de acordo com padrões ISO, finanças internacionais, administrações públicas, GS1, indústria editorial, números de telefone e códigos postais de diversos países.
* [JSON Schema](https://github.com/jsonrainbow/json-schema) - Biblioteca de validação de [JSON Schema](https://json-schema.org/).
* [LibPhoneNumber for PHP](https://github.com/giggsey/libphonenumber-for-php) - Implementação em PHP da biblioteca de tratamento de números de telefone do Google.
* [MetaYaml](https://github.com/romaricdrigon/MetaYaml) - Biblioteca de validação de esquemas compatível com YAML, JSON e XML.
* [Respect Validation](https://github.com/Respect/Validation) - Biblioteca simples de validação.
* [Symfony HTML Sanitizer](https://github.com/symfony/html-sanitizer) - Biblioteca para sanitização de HTML.
* [Valitron](https://github.com/vlucas/valitron) - Mais uma biblioteca de validação.
* [Valinor](https://github.com/CuyZ/Valinor) - Biblioteca para mapear dados em objetos de valor fortemente tipados.
* [Volan](https://github.com/serkin/Volan) - Mais uma biblioteca simplificada de validação.

### API
*Bibliotecas e ferramentas web para desenvolver APIs.*

* [API Platform](https://api-platform.com) - Publique em minutos uma API REST hipermídia que adota JSON-LD e o formato Hydra.
* [Laminas API Tool Skeleton](https://github.com/laminas-api-tools/api-tools-skeleton) - Criador de APIs desenvolvido com o Laminas Framework.
* [HAL](https://github.com/blongden/hal) - Biblioteca para criar Hypertext Application Language (HAL).
* [Hateoas](https://github.com/willdurand/Hateoas) - Biblioteca para serviços web REST HATEOAS.
* [Jane](https://github.com/janephp/janephp/) - Gerador de clientes OpenAPI com suporte à validação.
* [Negotiation](https://github.com/willdurand/Negotiation) - Biblioteca para negociação de conteúdo.
* [Restler](https://github.com/Luracast/Restler) - Framework leve para expor métodos PHP como API web RESTful.
* [PackageGenerator](https://github.com/WsdlToPhp/PackageGenerator) - Gera um SDK PHP a partir de qualquer WSDL.

### Cache e bloqueios
*Bibliotecas para armazenar dados em cache e adquirir bloqueios.*

* [APIx Cache](https://github.com/apix/cache) - Wrapper fino de cache PSR-6 para vários back-ends, com ênfase em marcação e indexação de cache.
* [CacheTool](https://github.com/gordalina/cachetool) - Ferramenta para limpar caches APC/opcode pela linha de comando.
* [CakePHP Cache](https://github.com/cakephp/cache) - Biblioteca de cache.
* [Doctrine Cache](https://github.com/doctrine/cache) - Biblioteca de cache.
* [Metaphore](https://github.com/sobstel/metaphore) - Protege contra avalanche de cache usando um semáforo para evitar o efeito dogpile.
* [Stash](https://github.com/tedious/Stash) - Mais uma biblioteca de cache.
* [Laminas Cache](https://github.com/laminas/laminas-cache) - Mais uma biblioteca de cache.
* [Lock](https://github.com/php-lock/lock) - Biblioteca de bloqueios para garantir execução exclusiva.

### Estruturas de dados e armazenamento
*Bibliotecas que implementam estruturas de dados ou técnicas de armazenamento.*

* [CakePHP Collection](https://github.com/cakephp/collection) - Biblioteca simples de coleções.
* [Fractal](https://github.com/thephpleague/fractal) - Biblioteca para converter estruturas de dados complexas em saída JSON.
* [JsonMapper](https://github.com/cweiske/jsonmapper) - Biblioteca que mapeia estruturas JSON aninhadas para classes PHP.
* [JSON Machine](https://github.com/halaxa/json-machine) - Permite iterar sobre JSONs enormes usando um simples `foreach`.
* [msgpack.php](https://github.com/rybakit/msgpack.php) - Implementação em PHP puro do formato de serialização [MessagePack](https://msgpack.org/).
* [Serializer](https://github.com/schmittjoh/serializer) - Biblioteca para serializar e desserializar dados.
* [YaLinqo](https://github.com/Athari/YaLinqo) - Mais uma implementação de LINQ to Objects para PHP.
* [Laminas Serializer](https://github.com/laminas/laminas-serializer) - Mais uma biblioteca para serializar e desserializar dados.

### Notificações
*Bibliotecas para trabalhar com softwares de notificação.*

* [JoliNotif](https://github.com/jolicode/JoliNotif) - Biblioteca multiplataforma para notificações de desktop (compatível com Growl, notify-send, toaster etc.).

### Implantação
*Bibliotecas para implantação de projetos.*

* [Deployer](https://github.com/deployphp/deployer) - Ferramenta de implantação.
* [Envoy](https://github.com/laravel/envoy) - Ferramenta para executar tarefas SSH com PHP.

### Internacionalização e localização
*Bibliotecas para internacionalização (I18n) e localização (L10n).*

* [Aura.Intl](https://github.com/auraphp/Aura.Intl) - Oferece ferramentas de internacionalização (I18N), em especial tradução de mensagens por localidade e orientada a pacotes.
* [CakePHP I18n](https://github.com/cakephp/i18n) - Tradução de mensagens e localização de datas e números.

### Serverless
*Bibliotecas e ferramentas para ajudar a criar aplicações web serverless.*

* [Bref](https://bref.sh/) - PHP serverless no AWS Lambda.
* [OpenWhisk](https://openwhisk.apache.org/) - Plataforma de nuvem serverless de código aberto.
* [Serverless Framework](https://www.serverless.com/framework) - Framework de código aberto para criar aplicações serverless.
* [Laravel Vapor](https://vapor.laravel.com/) - Plataforma serverless de implantação para Laravel, baseada na AWS.

### Configuração
*Bibliotecas e ferramentas de configuração.*

* [PHP Dotenv](https://github.com/vlucas/phpdotenv) - Analisa e carrega variáveis de ambiente de arquivos `.env`.
* [Symfony Dotenv](https://github.com/symfony/dotenv) - Analisa e carrega variáveis de ambiente de arquivos `.env`.
* [Toml](https://github.com/php-collective/toml) - Analisador e codificador TOML com acesso à AST e recuperação de erros.

### LLMs
*Bibliotecas para trabalhar com modelos de linguagem de grande porte.*

* [Anthropic](https://github.com/mozex/anthropic-php) - Cliente PHP para a API da Anthropic, com suporte a mensagens, streaming, uso de ferramentas e processamento em lote.
* [Anthropic for Laravel](https://github.com/mozex/anthropic-laravel) - Wrapper Laravel para o cliente PHP da Anthropic, com Facades, publicação de configurações e fakes para testes.
* [Instructor for PHP](https://github.com/cognesy/instructor-php) - Saídas de dados estruturados com LLMs em PHP.
* [LLPhant](https://github.com/LLPhant/LLPhant) - Framework abrangente de IA generativa para PHP que usa OpenAI GPT 4. Inspirado no Langchain.
* [OpenAI Client](https://github.com/openai-php/client) - OpenAI PHP é um cliente de API PHP mantido pela comunidade e com recursos avançados, que permite interagir com a API da OpenAI.
* [OpenAI Client for Laravel](https://github.com/openai-php/laravel) - OpenAI PHP para Laravel é um cliente de API PHP com recursos avançados que permite interagir com a API da OpenAI.
* [PHP Mistral AI SDK](https://github.com/SoftCreatR/php-mistral-ai-sdk) - SDK PHP poderoso e fácil de usar para a API da Mistral AI, que permite integrar recursos avançados de IA aos seus projetos PHP.

### APIs de terceiros
*Bibliotecas para acessar APIs de terceiros.*

* [Amazon Web Service SDK](https://github.com/aws/aws-sdk-php) - Biblioteca oficial do SDK PHP da AWS.
* [AsyncAWS](https://async-aws.com/) - SDK PHP assíncrono não oficial da AWS.
* [Campaign Monitor](https://campaignmonitor.github.io/createsend-php/) - Biblioteca PHP oficial do Campaign Monitor.
* [Github](https://github.com/KnpLabs/php-github-api) - Biblioteca para interagir com a API do Github.
* [Mailgun](https://github.com/mailgun/mailgun-php) - API PHP oficial do Mailgun.
* [Stripe](https://github.com/stripe/stripe-php) - Biblioteca PHP oficial do Stripe.
* [Twilio](https://github.com/twilio/twilio-php) - API REST PHP oficial do Twilio.

### Extensões
*Bibliotecas para ajudar a criar extensões PHP.*

* [PHP CPP](https://www.php-cpp.com/) - Biblioteca C++ para desenvolver extensões PHP.
* [Zephir](https://github.com/zephir-lang/zephir) - Linguagem compilada entre PHP e C++ para desenvolver extensões PHP.

### Diversos
*Bibliotecas ou utilitários úteis que não se encaixam nas categorias acima.*

* [Annotations](https://github.com/doctrine/annotations) - Biblioteca de anotações (parte do Doctrine).
* [BotMan](https://github.com/botman/botman) - Biblioteca PHP independente de framework para criar chatbots multiplataforma.
* [ClassPreloader](https://github.com/ClassPreloader/ClassPreloader) - Biblioteca para otimizar o autoloading.
* [Ganesha](https://github.com/ackintosh/ganesha) - Implementação em PHP do padrão Circuit Breaker.
* [Hprose-PHP](https://github.com/hprose/hprose-php) - RPC entre linguagens.
* [Laravel Serializable Closure](https://github.com/laravel/serializable-closure) - Biblioteca que permite serializar Closures.
* [noCAPTCHA](https://github.com/ARCANEDEV/noCAPTCHA) - Auxiliar para o noCAPTCHA (reCAPTCHA) do Google.
* [Pagerfanta](https://github.com/whiteoctober/Pagerfanta) - Biblioteca de paginação.
* [Safe](https://github.com/thecodingmachine/safe) - Todas as funções do PHP reescritas para lançar exceções em vez de retornar false.

# Software
*Software para criar um ambiente de desenvolvimento.*

### Instalação do PHP
*Ferramentas para ajudar a instalar e gerenciar o PHP no seu computador.*

* [Brew PHP Switcher](https://github.com/philcook/brew-php-switcher) - Alternador de versões do PHP para Brew.
* [Homebrew](https://brew.sh/) - Gerenciador de pacotes para macOS.
* [PHP Brew](https://github.com/phpbrew/phpbrew) - Gerenciador e instalador de versões do PHP.
* [PHP Build](https://github.com/php-build/php-build) - Mais um instalador de versões do PHP.
* [Static PHP CLI](https://github.com/crazywhalecc/static-php-cli) - Compile ou [baixe](https://dl.static-php.dev/static-php-cli/) versões estáticas do PHP CLI e do FPM.

### Ambiente de desenvolvimento
*Softwares e ferramentas para criar e compartilhar um ambiente de desenvolvimento.*

* [Ansible](https://www.redhat.com/en/ansible-collaborative) - Framework de orquestração radicalmente simples.
* [DDEV](https://github.com/ddev/ddev) - Sistema de ambiente local de desenvolvimento web para PHP.
* [Docker](https://www.docker.com/) - Plataforma de conteinerização.
* [Docker PHP Extension Installer](https://github.com/mlocati/docker-php-extension-installer) - Instale extensões PHP facilmente em contêineres Docker.
* [Docksal](https://github.com/docksal/docksal) - Ambientes de desenvolvimento web unificados, baseados em Docker :whale:, para macOS, Windows e Linux.
* [Expose](https://github.com/exposedev/expose) - Serviço de túneis de código aberto para PHP.
* [Lando](https://lando.dev/) - Ambientes de desenvolvimento prontos para uso.
* [Laravel Homestead](https://laravel.com/docs/master/homestead) - Ambiente local de desenvolvimento para Laravel.
* [Laravel Herd](https://herd.laravel.com/windows) - Ambiente de desenvolvimento PHP para macOS e Windows que pode ser instalado com um clique.
* [Laradock](https://laradock.io/) - Ambiente completo de desenvolvimento PHP baseado em Docker.
* [PHPMon](https://phpmon.app/) - Aplicativo de barra de menus do macOS para gerenciar instalações do PHP (funciona com o [Laravel Valet](https://laravel.com/docs/master/valet)).
* [Puppet](https://www.puppet.com) - Framework e aplicação para automação de servidores.
* [Solo](https://github.com/soloterm/solo) - Aplicativo de terminal para gerenciar processos de uma aplicação Laravel.
* [Takeout](https://github.com/tighten/takeout) - Gerenciador de dependências apenas para desenvolvimento, baseado em Docker.
* [Vagrant](https://developer.hashicorp.com/vagrant) - Utilitário portátil de ambiente de desenvolvimento.

### Máquinas virtuais
*Máquinas virtuais PHP alternativas.*

* [Hack](https://hacklang.org/) - Linguagem de programação para HHVM.
* [HHVM](https://github.com/facebook/hhvm) - Máquina virtual, runtime e JIT para PHP do Facebook.
* [PeachPie](https://github.com/peachpiecompiler/peachpie) - Compilador e runtime PHP para .NET e .NET Core.

### Editores de texto e IDEs
*Editores de texto e ambientes integrados de desenvolvimento (IDE) com suporte a PHP.*

* [Eclipse for PHP Developers](https://www.eclipse.org/downloads/) - IDE PHP baseada na plataforma Eclipse.
* [Apache NetBeans](https://netbeans.apache.org/front/main/index.html) - IDE com suporte a PHP e HTML5.
* [PhpEd](https://www.nusphere.com/products/phped.htm) - IDE com depurador comercial profissional.
* [PhpStorm](https://www.jetbrains.com/phpstorm/) - IDE PHP comercial.
* [VS Code](https://code.visualstudio.com/) - Editor de código de código aberto.

### Aplicações web
*Aplicações e ferramentas baseadas na web.*

* [3V4L](https://3v4l.org/) - Shell online para PHP e HHVM.
* [Adminer](https://www.adminer.org/en/) - Gerenciamento de bancos de dados em um único arquivo PHP.
* [Cachet](https://github.com/cachethq/cachet) - Sistema de páginas de status de código aberto.
* [Lychee](https://github.com/electerious/Lychee) - Sistema de gerenciamento de fotos fácil de usar e com ótima aparência.
* [Leantime](https://leantime.io) - Sistema estratégico de gerenciamento de projetos para quem não é gerente de projetos.
* [MailCatcher](https://github.com/sj26/mailcatcher) - Ferramenta web para capturar e visualizar e-mails.
* [Mailpit](https://github.com/axllent/mailpit) - Ferramenta de teste de e-mail e SMTP para desenvolvedores.
* [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - Interface web para MySQL/MariaDB.
* [PHP Queue](https://github.com/CoderKungfu/php-queue) - Aplicação para gerenciar back-ends de filas.
* [phpRedisAdmin](https://github.com/ErikDubbelboer/phpRedisAdmin) - Interface web simples para gerenciar bancos de dados [Redis](https://redis.io/).
* [PHPSandbox](https://phpsandbox.io) - IDE online para PHP no navegador.

### Infraestrutura
*Infraestrutura para fornecer aplicações e serviços PHP.*

* [appserver.io](https://github.com/appserver-io/appserver) - Servidor de aplicações multithread para PHP, escrito em PHP.
* [php-pm](https://github.com/php-pm/php-pm) - Gerenciador de processos, acelerador e balanceador de carga para aplicações PHP.
* [RoadRunner](https://github.com/roadrunner-server/roadrunner) - Servidor de aplicações PHP de alto desempenho, balanceador de carga e gerenciador de processos.

# Recursos
Recursos variados, como livros, sites e artigos, para aprimorar suas habilidades e seus conhecimentos de desenvolvimento em PHP.

### Sites sobre PHP
*Sites úteis relacionados a PHP.*

* [Nomad PHP](https://nomadphp.com/) - Recurso online de aprendizagem de PHP.
* [Laravel News](https://laravel-news.com/) - Blog oficial do Laravel.
* [PHP Annotated Monthly](https://blog.jetbrains.com/phpstorm/tag/php-annotated-monthly/) - Resumo mensal de notícias sobre PHP.
* [PHP FIG](https://www.php-fig.org/) - Grupo de interoperabilidade de frameworks PHP.
* [PHP Package Development Standards](https://php-pds.com/) - Padrões de desenvolvimento de pacotes para PHP.
* [PHP School](https://www.phpschool.io/) - Aprendizado de código aberto para PHP.
* [PHP The Right Way](https://phptherightway.com/) - Guia de referência rápida de boas práticas para PHP.
* [PHP UG](https://php.ug) - Site para ajudar as pessoas a encontrar o grupo de usuários (UG) de PHP mais próximo.
* [PHP Watch](https://php.watch/) - Artigos, notícias, próximas mudanças, RFCs e muito mais sobre PHP.
* [Unit Testing Tips](https://testing-tips.sarvendev.com/) - Dicas de testes unitários com exemplos em PHP.

### Livros sobre PHP
*Livros excelentes relacionados a PHP.*

* [Domain-Driven Design in PHP](https://leanpub.com/ddd-in-php) - Exemplos reais em PHP que ilustram estilos arquiteturais de DDD.
* [Functional Programming in PHP](https://www.functionalphp.com/) - Livro sobre a aplicação de princípios e técnicas de programação funcional em PHP.
* [Mastering Object-Orientated PHP](https://masteringobjectorientedphp.com/) - Livro de Brandon Savage sobre PHP orientado a objetos.
* [PHP Cookbook](https://www.oreilly.com/library/view/php-cookbook/9781098121310/) - Este livro de receitas oferece exemplos de código para ajudar a resolver diversos problemas de programação.
* [Modernizing Legacy Applications in PHP](https://leanpub.com/mlaphp) - Livro de Paul M. Jones sobre modernização de aplicações PHP legadas.
* [Scaling PHP Applications](https://www.scalingphpbook.com) - Livro eletrônico de Steve Corona sobre escalabilidade de aplicações PHP.
* [Securing PHP: Core Concepts](https://leanpub.com/securingphp-coreconcepts) - Livro de Chris Cornutt sobre conceitos e práticas comuns de segurança para PHP.
* [Signaling PHP](https://leanpub.com/signalingphp) - Livro de Cal Evans sobre como capturar sinais PCNTL em scripts CLI.
* [XML Parsing with PHP](https://www.phparch.com/books/xml-parsing-with-php/) - Este livro aborda a análise e validação de documentos XML, o uso de expressões XPath e o trabalho com namespaces, além da criação e modificação programática de arquivos XML.

### Vídeos sobre PHP
*Vídeos excelentes relacionados a PHP.*

* [Laracasts](https://laracasts.com) - Vídeos tutoriais sobre Laravel, Vue JS e muito mais.
* [Laravel YouTube Channel](https://www.youtube.com/channel/UCfO2GiQwb-cwJTb1CuRSkwg) - Canal oficial do Laravel no YouTube.
* [Program With Gio](https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-) - Curso de PHP 8 de Gio.
* [Programming with Anthony](https://www.youtube.com/playlist?list=PLM-218uGSX3DQ3KsB5NJnuOqPqc5CW2kW) - Série de vídeos de Anthony Ferrara.
* [SymfonyCasts](https://symfonycasts.com/) - Vídeos tutoriais e screencasts sobre PHP e Symfony.

### Conferências de PHP
*Conferências de PHP.*

* [Laracon EU](https://www.youtube.com/@LaraconEU) - A Laracon EU é um evento de dois dias para quem tem interesse em aprender Laravel e tecnologias relacionadas ou quer compartilhar conhecimento com outras pessoas.
* [PHP[TEK]](https://phptek.io/) - A conferência para desenvolvedores web mais antiga dos Estados Unidos, com foco na linguagem de programação PHP.
* [PHP UK Conference](https://www.youtube.com/user/phpukconference/videos) - Coleção de vídeos da PHP UK Conference.

### Podcasts sobre PHP
*Podcasts com foco em assuntos relacionados a PHP.*

* [Laravel News Podcast](https://podcast.laravel-news.com/) - O Laravel News Podcast traz as últimas notícias e novidades relacionadas ao Laravel PHP Framework.
* [Mostly Technical](https://mostlytechnical.com/) - Apresentado por Ian Landsman e Aaron Francis, Mostly Technical é uma conversa animada sobre Laravel, negócios e uma mistura eclética de assuntos relacionados.
* [No Compromises](https://show.nocompromises.io/) - Dois veteranos experientes e irreverentes da programação conversam sobre boas práticas, com base em anos de trabalho com equipes de SaaS em Laravel.
* [North Meets South Web Podcast](https://www.northmeetssouth.audio/) - Jacob Bennett e Michael Dyrynda superam uma diferença de fuso horário de 14,5 horas para conversar sobre a vida de desenvolvedores web.
* [Over Engineered](https://overengineered.fm/) - Podcast em minisséries no qual exploramos questões de programação irrelevantes em detalhes extremos.
* [PHP Internals News](https://phpinternals.news) - Podcast sobre os internos do PHP.
* [PHP Town Hall](https://phptownhall.com/) - Podcast descontraído sobre PHP, apresentado por Ben Edmunds e Phil Sturgeon.
* [php[podcast] episodes from php[architect]](https://www.phparch.com/podcast/) - Podcast oficial da php[architect], a principal revista e editora de tecnologia do setor, com foco em PHP e desenvolvimento web.
* [PHPUgly](https://www.phpugly.com/) - As divagações de alguns desenvolvedores PHP sobrecarregados.
* [The Laracasts Snippet](https://laracasts.simplecast.com) - Cada episódio do The Laracasts Snippet apresenta uma única ideia sobre algum aspecto do desenvolvimento web.
* [The Laravel Podcast](https://laravelpodcast.com/) - Notícias e discussões sobre desenvolvimento com Laravel e PHP.
* [The PHP Roundtable](https://phproundtable.com/) - O PHP Roundtable é um encontro descontraído de desenvolvedores que discutem assuntos de interesse dos fãs de PHP.

### Newsletters sobre PHP
*Notícias relacionadas a PHP diretamente na sua caixa de entrada.*

* [PHP Weekly](https://www.phpweekly.com/) - Newsletter semanal sobre PHP.

### Leituras sobre PHP
*Materiais de leitura relacionados a PHP.*

* [php[architect]](https://www.phparch.com/magazine/) - Revista mensal dedicada a PHP.

### Leituras sobre os internos do PHP
*Materiais de leitura relacionados aos internos ou ao desempenho do PHP.*

* [PHP RFCs](https://wiki.php.net/rfc) - A casa das RFCs do PHP (Request for Comments).
* [Externals](https://externals.io/) - Discussões internas do PHP.
* [PHP RFC Watch](https://github.com/beberlei/php-rfc-watch) - Acompanhe as últimas [RFCs](https://wiki.php.net/rfc) do PHP.
* [PHP Internals Book](https://www.phpinternalsbook.com/) - Livro online sobre os internos do PHP, escrito por três desenvolvedores do núcleo.
