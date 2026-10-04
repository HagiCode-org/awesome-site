# Awesome PHP [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

엄선한 PHP 라이브러리, 자료 및 유용한 도구 모음입니다.

## 기여 및 협업
자세한 내용은 [CONTRIBUTING](https://github.com/ziadoz/awesome-php/blob/master/CONTRIBUTING.md), [CODE-OF-CONDUCT](https://github.com/ziadoz/awesome-php/blob/master/CODE-OF-CONDUCT.md) 및 [COLLABORATING](https://github.com/ziadoz/awesome-php/blob/master/COLLABORATING.md)을 참조하세요.

## 목차
- [Awesome PHP](#awesome-php)
  - [Composer 저장소](#composer-repositories)
  - [의존성 관리](#dependency-management)
  - [의존성 관리 추가 도구](#dependency-management-extras)
  - [프레임워크](#frameworks)
  - [프레임워크 추가 도구](#framework-extras)
  - [콘텐츠 관리 시스템](#content-management-systems-cms)
  - [구성 요소](#components)
  - [마이크로 프레임워크](#micro-frameworks)
  - [마이크로 프레임워크 추가 도구](#micro-framework-extras)
  - [라우터](#routers)
  - [템플릿](#templating)
  - [정적 사이트 생성기](#static-site-generators)
  - [HTTP](#http)
  - [스크래핑](#scraping)
  - [미들웨어](#middlewares)
  - [URL](#url)
  - [이메일](#email)
  - [파일](#files)
  - [스트림](#streams)
  - [의존성 주입](#dependency-injection)
  - [이미지](#imagery)
  - [테스트](#testing)
  - [지속적 통합](#continuous-integration)
  - [문서화](#documentation)
  - [보안](#security)
  - [비밀번호](#passwords)
  - [코드 분석](#code-analysis)
  - [코드 품질](#code-quality)
  - [정적 분석](#static-analysis)
  - [아키텍처](#architectural)
  - [디버깅 및 프로파일링](#debugging-and-profiling)
  - [오류 추적 및 모니터링 서비스](#error-tracking-and-monitoring-services)
  - [빌드 도구](#build-tools)
  - [작업 실행기](#task-runners)
  - [탐색](#navigation)
  - [에셋 관리](#asset-management)
  - [지리 위치](#geolocation)
  - [날짜 및 시간](#date-and-time)
  - [이벤트](#event)
  - [로깅](#logging)
  - [전자상거래](#e-commerce)
  - [PDF](#pdf)
  - [오피스](#office)
  - [데이터베이스](#database)
  - [마이그레이션](#migrations)
  - [NoSQL](#nosql)
  - [큐](#queue)
  - [검색](#search)
  - [명령줄](#command-line)
  - [인증 및 권한 부여](#authentication-and-authorization)
  - [마크업 및 CSS](#markup-and-css)
  - [JSON](#json)
  - [문자열](#strings)
  - [숫자](#numbers)
  - [필터링, 정제 및 검증](#filtering-sanitizing-and-validation)
  - [API](#api)
  - [캐싱 및 잠금](#caching-and-locking)
  - [데이터 구조 및 저장소](#data-structure-and-storage)
  - [알림](#notifications)
  - [배포](#deployment)
  - [국제화 및 현지화](#internationalisation-and-localisation)
  - [서버리스](#serverless)
  - [구성](#configuration)
  - [LLM](#llms)
  - [타사 API](#third-party-apis)
  - [확장 기능](#extensions)
  - [기타](#miscellaneous)
- [소프트웨어](#software)
  - [PHP 설치](#php-installation)
  - [개발 환경](#development-environment)
  - [가상 머신](#virtual-machines)
  - [텍스트 편집기 및 IDE](#text-editors-and-ides)
  - [웹 애플리케이션](#web-applications)
  - [인프라](#infrastructure)
- [자료](#resources)
  - [PHP 웹사이트](#php-websites)
  - [PHP 도서](#php-books)
  - [PHP 동영상](#php-videos)
  - [PHP 컨퍼런스](#php-conferences)
  - [PHP 팟캐스트](#php-podcasts)
  - [PHP 뉴스레터](#php-newsletters)
  - [PHP 읽을거리](#php-reading)
  - [PHP 내부 구조 읽을거리](#php-internals-reading)

### Composer 저장소
*Composer 패키지 저장소.*

* [Firegento](https://packages.firegento.com/) - Magento 모듈용 Composer 저장소.
* [Packagist](https://packagist.org/) - PHP 패키지 저장소.
* [Packalyst](https://packalyst.com/) - Laravel 패키지 저장소.
* [Private Packagist](https://packagist.com/) - PHP 패키지를 위한 호스팅형 Composer 저장소 서비스.
* [WordPress Packagist](https://wpackagist.org/) - Composer를 사용해 WordPress 플러그인을 관리할 수 있습니다.

### 의존성 관리
*의존성 및 패키지 관리를 위한 라이브러리.*

* [Composer](https://getcomposer.org/) - 패키지 및 의존성 관리자.
* [Composer Installers](https://github.com/composer/installers) - 여러 프레임워크를 지원하는 Composer 라이브러리 설치 도구.
* [Phive](https://phar.io/) - PHAR 관리자.
* [Pickle](https://github.com/FriendsOfPHP/pickle) - PHP 확장 설치 도구.
* [Pie](https://github.com/php/pie) - 확장 설치를 위한 공식 PHP 설치 도구.

### 의존성 관리 추가 도구
*의존성 관리와 관련된 추가 도구.*

* [Composer Merge Plugin](https://github.com/wikimedia/composer-merge-plugin) - `composer.json` 파일 여러 개를 병합하는 Composer 플러그인.
* [Composer Normalize](https://github.com/ergebnis/composer-normalize) - `composer.json` 파일을 정규화하는 플러그인.
* [Composer Patches](https://github.com/cweagans/composer-patches) - Composer에서 패치를 적용하는 플러그인.
* [Composer Prefer Lowest Validator](https://github.com/dereuromark/composer-prefer-lowest) - 최소 의존성을 설치하고 테스트할 수 있는지 확인하는 플러그인.
* [Composer Require Checker](https://github.com/maglnet/ComposerRequireChecker) - Composer 의존성을 분석하고 패키지 소스에서 알 수 없는 심볼을 사용하지 않는지 확인하는 CLI 도구.
* [Composer Unused](https://github.com/composer-unused/composer-unused) - 사용하지 않는 Composer 패키지를 검색하는 CLI 도구.
* [Repman](https://repman.io) - 비공개 PHP 패키지 저장소 관리자이자 Packagist 프록시.
* [Satis](https://github.com/composer/satis) - 정적 Composer 저장소 생성기.

### 프레임워크
*웹 개발 프레임워크.*

* [CakePHP](https://cakephp.org/) - 빠른 애플리케이션 개발 프레임워크.
* [CodeIgniter](https://codeigniter.com/) - 매우 작은 용량을 갖춘 강력한 PHP 프레임워크.
* [Ecotone](https://docs.ecotone.tech/) - DDD, CQRS 및 이벤트 소싱의 아키텍처 원칙을 기반으로 하는 PHP용 서비스 버스.
* [Laminas](https://getlaminas.org/) - 개별 구성 요소로 이루어진 프레임워크(이전 Zend Framework).
* [Laravel](https://laravel.com/) - 표현력 있고 우아한 문법을 갖춘 웹 애플리케이션 프레임워크.
* [Nette](https://nette.org) - 성숙한 구성 요소로 이루어진 웹 프레임워크.
* [Phalcon](https://phalcon.io/en-us) - C 확장으로 구현된 프레임워크.
* [Spiral](https://spiral.dev/) - 고성능 PHP/Go 프레임워크.
* [Symfony](https://symfony.com/) - 재사용 가능한 구성 요소 모음이자 웹 프레임워크.
* [Tempest](https://github.com/tempestphp/tempest-framework) - 개발을 방해하지 않는 프레임워크.
* [Yii2](https://github.com/yiisoft/yii2/) - 빠르고 안전하며 효율적인 웹 프레임워크.

### 프레임워크 추가 도구
*웹 개발 프레임워크와 관련된 추가 도구.*

* [CakePHP CRUD](https://github.com/friendsofcake/crud) - CakePHP용 신속한 애플리케이션 개발(RAD) 플러그인.
* [Filament PHP](https://filamentphp.com/) - Laravel용 강력한 오픈 소스 UI 프레임워크.
* [Inertia.js](https://inertiajs.com/) - 별도의 API 없이 서버 측 라우팅과 컨트롤러를 사용해 단일 페이지 애플리케이션을 구축하기 위한 어댑터.
* [LaravelS](https://github.com/hhxsv5/laravel-s) - 별도 설정 없이 Laravel/Lumen을 Swoole과 연동하는 어댑터.
* [Livewire](https://livewire.laravel.com/) - PHP 코드만으로 강력하고 동적인 프런트엔드 UI를 만들 수 있습니다.

### 콘텐츠 관리 시스템(CMS)
*디지털 콘텐츠 관리 도구.*

* [Backdrop](https://backdropcms.org) - 소규모·중견 기업과 비영리 단체를 위한 CMS(Drupal 포크).
* [Concrete5](https://www.concretecms.com/) - 기술 지식이 많지 않은 사용자도 쉽게 사용할 수 있는 CMS.
* [CraftCMS](https://github.com/craftcms/cms) - 웹과 그 밖의 환경에서 맞춤형 디지털 경험을 만들기 위한 유연하고 사용자 친화적인 CMS.
* [Drupal](https://new.drupal.org/home) - 엔터프라이즈급 CMS.
* [Grav](https://github.com/getgrav/grav) - 현대적인 플랫 파일 CMS.
* [Joomla](https://www.joomla.org/) - 주요 CMS 중 하나.
* [Kirby](https://getkirby.com/) - 프로젝트 특성에 맞춰 유연하게 활용할 수 있는 플랫 파일 CMS.
* [Magento](https://github.com/magento/magento2) - 널리 사용되는 오픈 소스 전자상거래 플랫폼.
* [Moodle](https://moodle.org/) - 오픈 소스 학습 플랫폼.
* [OctoberCMS](https://octobercms.com/) - Laravel 기반 CMS.
* [OpenMage](https://github.com/OpenMage/magento-lts) - 지원이 종료된 Magento 1 전자상거래 플랫폼의 포크.
* [Pico CMS](https://picocms.org/) - 가벼운 플랫 파일 CMS.
* [Silverstripe](https://www.silverstripe.org/) - 간단하고 유연하며 안전한 CMS.
* [Statamic](https://statamic.com/) - Laravel 기반의 플랫 파일 및 Git 기반 CMS.
* [Sulu](https://sulu.io/) - Symfony Framework 기반의 사용자 및 개발자 친화적인 CMS.
* [TYPO3](https://typo3.org) - 엔터프라이즈급 CMS.
* [WinterCMS](https://wintercms.com) - 커뮤니티가 유지 관리하는 Laravel 기반 OctoberCMS 포크.
* [WordPress](https://github.com/WordPress/WordPress) - 블로깅 플랫폼이자 CMS.

### 구성 요소
*웹 개발 프레임워크 및 개발 그룹에서 제공하는 독립형 구성 요소.*

* [Aura](https://auraphp.com/) - 서로 간은 물론 어떤 프레임워크와도 완전히 분리된 독립형 구성 요소.
* [CakePHP Plugins](https://plugins.cakephp.org/) - CakePHP 플러그인 디렉터리.
* [Laminas Components](https://docs.laminas.dev/components/) - Laminas Framework를 구성하는 구성 요소.
* [Laravel Components](https://github.com/illuminate) - Laravel Framework의 구성 요소.
* [League of Extraordinary Packages](https://thephpleague.com/) - PHP 패키지 개발 그룹.
* [Spatie Open Source](https://spatie.be/open-source) - 오픈 소스 PHP 및 Laravel 패키지 모음.
* [Symfony Packages](https://symfony.com/packages) - PHP 애플리케이션에서 독립적으로 사용할 수 있는 라이브러리.

### 마이크로 프레임워크
*마이크로 프레임워크 및 라우터.*

* [Laravel Zero](https://laravel-zero.com) - 콘솔 애플리케이션용 마이크로 프레임워크.
* [Mezzio](https://getexpressive.org/) - Laminas에서 제공하는 마이크로 프레임워크.
* [Minicli](https://github.com/minicli/minicli) - 의존성이 없고 CLI 중심의 PHP 애플리케이션을 만들기 위한 간결한 프레임워크.
* [Silly](https://github.com/mnapoli/silly) - CLI 애플리케이션용 마이크로 프레임워크.
* [Slim](https://www.slimframework.com/) - 또 다른 간단한 마이크로 프레임워크.

### 마이크로 프레임워크 추가 도구
*마이크로 프레임워크 및 라우터와 관련된 추가 도구.*

* [Slim Skeleton](https://github.com/slimphp/Slim-Skeleton) - Slim용 스켈레톤.
* [Slim PHP View](https://github.com/slimphp/PHP-View) - Slim용 간단한 PHP 렌더러.

### 라우터
*애플리케이션 라우팅을 처리하는 라이브러리.*

* [Aura.Router](https://github.com/auraphp/Aura.Router) - 다양한 기능을 갖춘 라우팅 라이브러리.
* [Fast Route](https://github.com/nikic/FastRoute) - 빠른 라우팅 라이브러리.
* [Klein](https://github.com/klein/klein.php) - 유연한 라우터.
* [Route](https://github.com/thephpleague/route) - Fast Route를 기반으로 구축된 라우팅 라이브러리.

### 템플릿
*템플릿 및 어휘 분석을 위한 라이브러리와 도구.*

* [Latte](https://latte.nette.org/) - PHP에서 가장 안전하고 직관적인 템플릿.
* [MtHaml](https://github.com/arnaud-lb/MtHaml) - HAML 템플릿 언어의 PHP 구현.
* [Mustache](https://github.com/bobthecow/mustache.php) - Mustache 템플릿 언어의 PHP 구현.
* [PHPTAL](https://phptal.org/) - [TAL](https://en.wikipedia.org/wiki/Template_Attribute_Language) 템플릿 언어의 PHP 구현.
* [Plates](https://platesphp.com/) - 네이티브 PHP 템플릿 라이브러리.
* [Smarty](https://www.smarty.net/) - PHP를 보완하는 템플릿 엔진.
* [Twig](https://twig.symfony.com/) - 기능이 풍부한 템플릿 언어.

### 정적 사이트 생성기
*콘텐츠를 사전 처리해 웹 페이지를 생성하는 도구.*

* [Cecil](https://cecil.app/) - 콘텐츠 중심의 간단하고 강력한 정적 사이트 생성기.
* [Couscous](https://couscous.io) - Markdown 문서를 웹사이트로 변환하는 도구.
* [Jigsaw](https://jigsaw.tighten.com/) - Laravel의 Blade를 사용하는 간단한 정적 사이트 생성기.
* [Sculpin](https://sculpin.io) - Markdown과 Twig를 정적 HTML로 변환하는 도구.

### HTTP
*HTTP 작업용 라이브러리.*

* [Buzz](https://github.com/kriswallsmith/Buzz) - 또 다른 HTTP 클라이언트.
* [Guzzle](https://github.com/guzzle/guzzle) - 기능이 풍부한 HTTP 클라이언트.
* [HTTPlug](https://httplug.io) - 특정 구현에 종속되지 않는 HTTP 클라이언트 추상화.
* [Nyholm PSR-7](https://github.com/Nyholm/psr7) - 매우 가볍고 빠르며 PSR-7을 엄격히 준수하는 구현체.
* [PHP VCR](https://php-vcr.github.io/) - HTTP 요청을 기록하고 재생하는 라이브러리.
* [Requests](https://github.com/WordPress/Requests) - 간단한 HTTP 라이브러리.
* [Retrofit](https://github.com/tebru/retrofit-php) - REST API 클라이언트 생성을 간소화하는 라이브러리.
* [Saloon](https://github.com/saloonphp/saloon) - 세련된 API 통합 및 SDK 구축을 위한 프레임워크.
* [Symfony HTTP Client](https://github.com/symfony/http-client) - HTTP 리소스를 동기식 또는 비동기식으로 가져오는 구성 요소.
* [Laminas Diactoros](https://github.com/laminas/laminas-diactoros) - PSR-7 HTTP 메시지 구현.

### 스크래핑
*웹사이트 스크래핑 및 크롤러 감지를 위한 라이브러리.*

* [Chrome PHP](https://github.com/chrome-php/chrome) - PHP에서 헤드리스 Chrome/Chromium 인스턴스를 제어할 수 있습니다.
* [CrawlerDetect](https://github.com/JayBizzle/Crawler-Detect) - 사용자 에이전트를 통해 봇/크롤러/스파이더를 감지하는 PHP 클래스.
* [DiDOM](https://github.com/Imangazaliev/DiDOM) - 매우 빠른 HTML 스크래퍼 및 파서.
* [Embed](https://github.com/php-embed/Embed) - 모든 웹 서비스나 페이지에서 정보를 추출하는 라이브러리.
* [PHP Spider](https://github.com/mvdbos/php-spider) - 구성 가능하고 확장 가능한 PHP 웹 스파이더.
* [Symfony Panther](https://github.com/symfony/panther) - PHP 및 Symfony용 브라우저 테스트 및 웹 크롤링 라이브러리.

### 미들웨어
*미들웨어를 사용해 애플리케이션을 구축하는 라이브러리.*

* [PSR-15 Middlewares](https://github.com/middlewares/psr15-middlewares) - 실용적인 미들웨어 모음.
* [Stack](https://github.com/stackphp) - Symfony용으로 연결 가능한 미들웨어 라이브러리.
* [Laminas Stratigility](https://github.com/laminas/laminas-stratigility) - PSR-7을 기반으로 구축된 PHP 미들웨어.

### URL
*URL 파싱 라이브러리.*

* [PHP Domain Parser](https://github.com/jeremykendall/php-domain-parser) - 도메인 접미사 파서 라이브러리.
* [sabre/uri](https://github.com/sabre-io/uri) - 함수형 URI 조작 라이브러리.
* [Uri](https://github.com/thephpleague/uri) - 또 다른 URL 조작 라이브러리.

### 이메일
*이메일 전송 및 파싱 라이브러리.*

* [CssToInlineStyles](https://github.com/tijsverkoyen/CssToInlineStyles) - 이메일 템플릿에 CSS를 인라인으로 삽입하는 라이브러리.
* [ddeboer/imap](https://github.com/ddeboer/imap) - 객체 지향 방식으로 구현되고 완전히 테스트된 PHP IMAP 라이브러리.
* [Email Reply Parser](https://github.com/willdurand/EmailReplyParser) - 이메일 답장 파서 라이브러리.
* [Fetch](https://github.com/tedious/Fetch) - IMAP 라이브러리.
* [Mautic](https://github.com/mautic/mautic) - 이메일 마케팅 자동화.
* [PHPMailer](https://github.com/PHPMailer/PHPMailer) - 또 다른 메일러 솔루션.
* [Stampie](https://github.com/Stampie/Stampie) - [SendGrid](https://www.twilio.com/en-us/sendgrid), [PostMark](https://postmarkapp.com), [MailGun](https://www.mailgun.com/) 및 [MailChimp](https://mailchimp.com/features/transactional-email/)와 같은 이메일 서비스용 라이브러리.
* [Symfony Mailer](https://github.com/symfony/mailer) - 이메일 생성 및 전송을 위한 강력한 라이브러리.

### 파일
*파일 조작 및 MIME 유형 감지 라이브러리.*

* [CSV](https://github.com/thephpleague/csv) - CSV 데이터 조작 라이브러리.
* [Flysystem](https://github.com/thephpleague/Flysystem) - 로컬 및 원격 파일 시스템을 위한 추상화.
* [Gaufrette](https://github.com/KnpLabs/Gaufrette) - 파일 시스템 추상화 계층.
* [PHP FFmpeg](https://github.com/PHP-FFmpeg/PHP-FFmpeg/) - [FFmpeg](https://www.ffmpeg.org/) 비디오 라이브러리용 래퍼.
* [UnifiedArchive](https://github.com/wapmorgan/UnifiedArchive) - 다양한 압축 아카이브를 하나의 인터페이스로 읽고 쓰는 라이브러리.
* [Parquet](https://github.com/flow-php/parquet) - Parquet 파일 형식의 PHP 구현.

### 스트림
*스트림 작업용 라이브러리.*

* [ByteStream](https://amphp.org/byte-stream) - 비동기 스트림 추상화.

### 의존성 주입
*의존성 주입 디자인 패턴을 구현하는 라이브러리.*

* [Aura.Di](https://github.com/auraphp/Aura.Di) - 직렬화 가능한 의존성 주입 컨테이너로, 생성자 및 세터 주입, 인터페이스 및 트레이트 인식, 구성 상속 등을 지원합니다.
* [Acclimate](https://github.com/AcclimateContainer/acclimate-container) - 의존성 주입 컨테이너와 서비스 로케이터를 위한 공통 인터페이스.
* [Auryn](https://github.com/rdlowrey/Auryn) - 재귀적 의존성 주입기.
* [Container](https://github.com/thephpleague/container) - 또 다른 유연한 의존성 주입 컨테이너.
* [Disco](https://github.com/bitExpert/disco) - PSR-11 호환 주석 기반 의존성 주입 컨테이너.
* [PHP-DI](https://php-di.org/) - 자동 연결(autowiring)을 지원하는 의존성 주입 컨테이너.
* [Pimple](https://github.com/silexphp/Pimple) - 작은 의존성 주입 컨테이너.
* [Symfony DI](https://github.com/symfony/dependency-injection) - 의존성 주입 컨테이너 구성 요소.

### 이미지
*이미지 조작 라이브러리.*

* [Color Extractor](https://github.com/thephpleague/color-extractor) - 이미지에서 색상을 추출하는 라이브러리.
* [Glide](https://github.com/thephpleague/glide) - 필요할 때 이미지를 조작하는 라이브러리.
* [Image Hash](https://github.com/jenssegers/imagehash) - 지각적 이미지 해시를 생성하는 라이브러리.
* [Image Optimizer](https://github.com/psliwa/image-optimizer) - 이미지를 최적화하는 라이브러리.
* [Imagine](https://imagine.readthedocs.io/en/latest/index.html) - 이미지 조작 라이브러리.
* [Intervention Image](https://github.com/Intervention/image) - 또 다른 이미지 조작 라이브러리.
* [PHP Image Workshop](https://github.com/Sybio/ImageWorkshop) - 또 다른 이미지 조작 라이브러리.
* [PHP QR Code](https://github.com/chillerlan/php-qrcode/) - QR 코드 생성기 및 리더.

### 테스트
*코드베이스 테스트 및 테스트 데이터 생성 라이브러리.*

* [Alice](https://github.com/nelmio/alice) - 표현력이 뛰어난 픽스처 생성 라이브러리.
* [Behat](https://docs.behat.org/en/latest/) - 행위 주도 개발(BDD) 테스트 프레임워크.
* [Codeception](https://github.com/Codeception/Codeception) - 풀스택 테스트 프레임워크.
* [Faker](https://github.com/fakerphp/faker) - 가짜 데이터 생성 라이브러리.
* [Foundry](https://github.com/zenstruck/foundry) - Doctrine용 픽스처 팩토리 생성 라이브러리.
* [Infection](https://github.com/infection/infection) - AST 기반 PHP 뮤테이션 테스트 프레임워크.
* [Kahlan](https://github.com/kahlan/kahlan) - 스텁, 모의 객체 및 코드 커버리지 지원 기능을 내장한 풀스택 단위/BDD 테스트 프레임워크.
* [Mink](https://mink.behat.org/en/latest/) - 웹 인수 테스트.
* [Mockery](https://github.com/mockery/mockery) - 테스트용 모의 객체 라이브러리.
* [Nette Tester](https://github.com/nette/tester) - 생산성을 높이고 즐겁게 사용할 수 있는 병렬 단위 테스트 프레임워크.
* [ParaTest](https://github.com/paratestphp/paratest) - PHPUnit용 병렬 테스트 라이브러리.
* [Pest](https://pestphp.com/) - 단순성에 중점을 둔 테스트 프레임워크.
* [Phake](https://github.com/phake/phake) - 또 다른 테스트용 모의 객체 라이브러리.
* [PHP-Mock](https://github.com/php-mock/php-mock) - 내장 PHP 함수(예: time())용 모의 라이브러리.
* [PHP MySQL Engine](https://github.com/vimeo/php-mysql-engine) - 순수 PHP로 작성된 MySQL 엔진.
* [PHPSpec](https://github.com/phpspec/phpspec) - 명세 기반 설계 단위 테스트 라이브러리.
* [PHPT](https://php.github.io/php-src/miscellaneous/writing-tests.html) - PHP 자체에서 사용하는 테스트 도구.
* [PHPUnit](https://github.com/sebastianbergmann/phpunit) - 단위 테스트 프레임워크.
* [PHPUnit Polyfills](https://github.com/Yoast/PHPUnit-Polyfills/) - 여러 PHPUnit 버전에서 테스트를 간편하게 실행할 수 있도록 돕습니다.
* [Prophecy](https://github.com/phpspec/prophecy) - 명확한 설계 원칙을 갖춘 모킹 프레임워크.
* [VFS Stream](https://github.com/bovigo/vfsStream) - 테스트용 가상 파일 시스템 스트림 래퍼.

### 지속적 통합
*지속적 통합용 라이브러리 및 애플리케이션.*

* [CircleCI](https://circleci.com) - 지속적 통합 플랫폼.
* [GitLab CI](https://about.gitlab.com/solutions/continuous-integration/) - 지속적 통합 플랫폼.
* [Jenkins](https://www.jenkins.io/) - [PHP 지원](https://www.jenkins.io/solutions/php/)을 제공하는 지속적 통합 플랫폼.
* [SemaphoreCI](https://semaphore.io/) - 오픈 소스 및 비공개 프로젝트를 위한 지속적 통합 플랫폼.
* [Travis CI](https://www.travis-ci.com) - 지속적 통합 플랫폼.
* [Setup PHP](https://github.com/shivammathur/setup-php) - PHP용 GitHub Action.

### 문서화
*프로젝트 문서 생성 라이브러리.*

* [APIGen](https://github.com/apigen/apigen) - 또 다른 API 문서 생성기.
* [daux.io](https://github.com/dauxio/daux.io) - Markdown 파일을 사용하는 문서 생성기.
* [phpDocumentor](https://phpdoc.org/) - 문서 생성기.
* [Scramble](https://github.com/dedoc/scramble) - 주석 없이 코드에서 OpenAPI 문서를 자동 생성합니다.
* [zircote/swagger-php](https://github.com/zircote/swagger-php) - RESTful API용 OpenAPI 문서를 생성합니다.

### 보안
*암호학적으로 안전한 난수 생성, 데이터 암호화, 취약점 검색 및 테스트를 위한 라이브러리.*

* [AntiXSS](https://github.com/voku/anti-xss) - 블랙리스트 방식으로 교차 사이트 스크립팅(XSS) 공격을 막도록 설계된 라이브러리.
* [Halite](https://paragonie.com/project/halite) - [libsodium](https://github.com/jedisct1/libsodium)을 사용한 암호화를 위한 간단한 라이브러리.
* [Optimus](https://github.com/jenssegers/optimus) - Knuth 곱셈 해싱 방식에 기반한 ID 난독화.
* [OWASP](https://owasp.org/) - 사이버 보안의 세계를 탐구해 보세요.
* [PHPGGC](https://github.com/ambionics/phpggc) - PHP 역직렬화 페이로드 모음과 이를 생성하는 도구.
* [PHP Encryption](https://github.com/defuse/php-encryption) - 안전한 PHP 암호화 라이브러리.
* [PHPSecLib](https://github.com/phpseclib/phpseclib) - 순수 PHP로 구현된 보안 통신 라이브러리.
* [Roave Security Advisories](https://github.com/Roave/SecurityAdvisories) - 이 패키지는 애플리케이션에 알려진 보안 취약점이 있는 의존성이 설치되지 않도록 합니다.
* [Secure Headers](https://github.com/BePsvPT/secure-headers) - HTTP 응답에 보안 관련 헤더를 추가하는 패키지.
* [SQLMap](https://github.com/sqlmapproject/sqlmap) - 자동 SQL 인젝션 및 데이터베이스 탈취 도구.
* [Zap](https://github.com/zaproxy/zaproxy) - 웹 애플리케이션용 통합 침투 테스트 도구.

### 비밀번호
*비밀번호 작업 및 저장을 위한 라이브러리와 도구.*

* [GenPhrase](https://github.com/timoh6/GenPhrase) - 안전한 임의 암호 문구를 생성하는 라이브러리.
* [Password Validator](https://github.com/jeremykendall/password-validator) - 비밀번호 해시를 검증하고 업그레이드하는 라이브러리.
* [Password-Generator](https://github.com/hackzilla/password-generator) - 임의 비밀번호를 생성하는 PHP 라이브러리.
* [phpass](https://www.openwall.com/phpass/) - 이식 가능한 비밀번호 해싱 프레임워크.
* [Zxcvbn PHP](https://github.com/bjeavons/zxcvbn-php) - Zxcvbn JS를 기반으로 PHP 비밀번호 강도를 현실적으로 추정하는 라이브러리.

### 코드 분석
*코드베이스 분석, 파싱 및 조작용 라이브러리와 도구.*

* [Better Reflection](https://github.com/Roave/BetterReflection) - 코드 분석 및 조작을 지원하는 AST 기반 리플렉션 라이브러리.
* [Bladestan](https://github.com/bladestan/bladestan) - Blade 템플릿의 정적 분석을 위한 PHPStan 확장.
* [Code Climate](https://codeclimate.com) - 자동화된 코드 리뷰 도구.
* [Editorconfig-Checker](https://github.com/editorconfig-checker/editorconfig-checker.php) - 파일이 `.editorconfig` 규칙을 준수하는지 확인하는 명령줄 유틸리티.
* [GrumPHP](https://github.com/phpro/grumphp) - PHP 코드 품질 도구.
* [PHP AST Viewer](https://php-ast-viewer.com/) - PHP 코드의 추상 구문 트리를 확인하는 도구.
* [PHP Magic Number Detector](https://github.com/povils/phpmnd) - 코드에서 매직 넘버를 감지하는 라이브러리.
* [PHP Parser](https://github.com/nikic/PHP-Parser) - PHP로 작성된 PHP 파서.
* [PHP Semantic Versioning Checker](https://github.com/tomzx/php-semver-checker) - 두 버전의 소스 코드를 비교해 적용할 적절한 시맨틱 버전을 판별하는 명령줄 유틸리티.
* [Phpactor](https://github.com/phpactor/phpactor) - PHP 자동 완성, 리팩터링 및 인트로스펙션 도구.
* [PHPQA](https://github.com/EdgedesignCZ/phpqa) - QA 도구(phploc, phpcpd, phpcs, pdepend, phpmd, phpmetrics)를 실행하는 도구.
* [Rector](https://github.com/rectorphp/rector) - 코드를 업그레이드하고 리팩터링하는 도구.
* [Scrutinizer](https://scrutinizer-ci.com/) -  [PHP 코드 검사](https://github.com/scrutinizer-ci/php-analyzer)를 위한 웹 도구.
* [UBench](https://github.com/devster/ubench) - 간단한 마이크로 벤치마크 라이브러리.

### 코드 품질
*코드 품질 관리, 포맷팅 및 린팅용 라이브러리.*

* [CaptainHook](https://github.com/captainhook-git/captainhook) - 사용하기 쉽고 유연한 Git 훅 라이브러리.
* [Laravel Pint](https://github.com/laravel/pint) - Laravel용 코딩 표준 수정 라이브러리.
* [PHP CodeSniffer](https://github.com/PHPCSStandards/PHP_CodeSniffer) - PHP, CSS 및 JS 코딩 표준 위반을 감지하고 자동 수정할 수 있는 라이브러리.
* [PHP CS Fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) - 코딩 표준 수정 라이브러리.
* [PHP CS Fixer Configurator](https://mlocati.github.io/php-cs-fixer-configurator/) - PHP CS Fixer 규칙 집합 구성을 돕는 웹 애플리케이션.
* [PHP Mess Detector](https://github.com/phpmd/phpmd) - 버그, 품질이 떨어지는 코드, 사용하지 않는 매개변수 등을 검색하는 라이브러리.
* [PHPCheckstyle](https://github.com/PHPCheckstyle/phpcheckstyle) - 특정 코딩 규칙을 준수하도록 돕는 도구.

### 정적 분석
*PHP 코드 정적 분석용 라이브러리.*

* [Dead Code Detector](https://github.com/shipmonk-rnd/dead-code-detector) - 사용되지 않는 PHP 코드를 찾는 PHPStan 확장.
* [Deptrac](https://github.com/deptrac/deptrac) - 아키텍처 계층 간 의존성 규칙을 적용하는 정적 분석 도구.
* [Exakat](https://github.com/exakat/exakat) - PHP용 정적 분석 엔진.
* [Larastan](https://github.com/larastan/larastan) - Laravel 프로젝트에 정적 분석을 추가하는 PHPStan 래퍼.
* [Mago](https://github.com/carthage-software/mago) - 개발자 경험 향상을 목표로 하는 PHP 도구 모음.
* [phan](https://github.com/phan/phan) - PHP 7 이상 및 php-ast 확장을 기반으로 하는 정적 분석기.
* [PHP Architecture Tester](https://github.com/carlosas/phpat) - 사용하기 쉬운 PHP 아키텍처 테스트 도구.
* [PHPCompatibility](https://github.com/PHPCompatibility/PHPCompatibility) - PHP CodeSniffer용 PHP 호환성 검사기.
* [PHPDoc Parser](https://github.com/phpstan/phpdoc-parser) - 교집합 타입과 제네릭을 지원하는 차세대 phpDoc 파서.
* [PHP Metrics](https://github.com/phpmetrics/PhpMetrics) - 정적 메트릭 라이브러리.
* [PHPStan](https://github.com/phpstan/phpstan) - PHP 정적 분석 도구.
* [Psalm](https://github.com/vimeo/psalm) - PHP 애플리케이션의 오류를 찾는 정적 분석 도구.

### 아키텍처
*디자인 패턴, 프로그래밍 방식 및 코드 구성 방법과 관련된 라이브러리.*

* [Design Patterns PHP](https://github.com/DesignPatternsPHP/DesignPatternsPHP) - PHP로 구현된 소프트웨어 패턴 저장소.
* [Finite](https://github.com/yohang/Finite) - 간단한 PHP 유한 상태 머신.
* [Functional PHP](https://github.com/lstrojny/functional-php) - 함수형 프로그래밍 라이브러리.
* [Iter](https://github.com/nikic/iter) - 제너레이터를 활용한 반복 연산 기능을 제공하는 라이브러리.
* [IterTools PHP](https://github.com/markrogoyski/itertools-php) - 반복 가능한 요소를 다루는 기능을 제공하는 라이브러리(Python의 itertools 라이브러리와 유사).
* [Pipeline](https://github.com/thephpleague/pipeline) - 파이프라인 패턴 구현.
* [Porter](https://github.com/ScriptFUSION/Porter) - 웹 API와 기타 데이터 소스에서 데이터를 가져오기 위한 추상화 라이브러리.
* [RulerZ](https://github.com/K-Phoen/rulerz) - 명세(Specification) 패턴을 구현한 강력한 규칙 엔진.

### 디버깅 및 프로파일링
*오류 디버깅 및 코드 프로파일링용 라이브러리와 도구.*

* [APM](https://pecl.php.net/package/APM) - 오류와 통계를 수집해 SQLite/MySQL/StatsD에 저장하는 모니터링 확장.
* [Barbushin PHP Console](https://github.com/barbushin/php-console) - Google Chrome을 사용하는 또 다른 웹 디버깅 콘솔.
* [Kint](https://github.com/kint-php/kint) - 디버깅 및 프로파일링 도구.
* [LaraDumps](https://github.com/laradumps/laradumps) - 전용 데스크톱 애플리케이션을 갖춘 Laravel 디버깅 도구.
* [Metrics](https://github.com/beberlei/metrics) - 간단한 메트릭 API 라이브러리.
* [PCOV](https://github.com/krakjoe/pcov) - 독립형 코드 커버리지 드라이버.
* [PHP Console](https://github.com/Seldaek/php-console) - 웹 디버깅 콘솔.
* [PHP Debug Bar](https://php-debugbar.com/) - 디버깅 도구 모음.
* [PHPBench](https://github.com/phpbench/phpbench) - 벤치마킹 프레임워크.
* [PHPSpy](https://github.com/adsr/phpspy) - 오버헤드가 적은 샘플링 프로파일러.
* [Symfony VarDumper](https://github.com/symfony/var-dumper) - 변수 덤퍼 구성 요소.
* [Tracy](https://github.com/nette/tracy) - 오류 감지, 로깅 및 시간 측정을 위한 간단한 라이브러리.
* [Trap](https://github.com/buggregator/trap) - 웹 인터페이스와 IDE 플러그인을 갖춘 확장형 변수 출력 도구.
* [Whoops](https://github.com/filp/whoops) - 오류를 보기 좋게 표시하는 처리 라이브러리.
* [xDebug](https://github.com/xdebug/xdebug) - PHP 디버그 및 프로파일링 도구.
* [XHProf](https://github.com/phacility/xhprof) - Facebook에서 처음 개발한 프로파일링 도구.
* [Z-Ray](https://www.zend.com/products/z-ray) - Zend Server용 디버그 및 프로파일링 도구.

### 오류 추적 및 모니터링 서비스
*자체 호스팅 또는 클라우드 기반 애플리케이션 성능 모니터링 및 오류 추적 도구.*

* [Blackfire](https://www.blackfire.io) - 오버헤드가 적은 코드 프로파일러.
* [Buggregator](https://buggregator.dev) - var-dump, 프로파일링 데이터, 이메일, 로그 및 Sentry 이벤트를 집계하는 디버그 서버.
* [BugSnag](https://www.bugsnag.com/) - 오류 및 실제 사용자 모니터링.
* [Honeybadger](https://www.honeybadger.io/) - 개발자를 위한 오류 추적 및 애플리케이션 모니터링.
* [Rollbar](https://rollbar.com/) - 소프트웨어 팀을 위한 오류 로깅 및 추적 서비스.
* [Sentry](https://sentry.io/welcome/) - 애플리케이션 성능 모니터링 및 오류 추적 소프트웨어.
* [Tideways](https://tideways.com/) - 모니터링 및 프로파일링 도구.

### 빌드 도구
*프로젝트 빌드 및 자동화 도구.*

* [Box](https://github.com/box-project/box) - PHAR 파일을 빌드하는 유틸리티.
* [PHPacker](https://github.com/phpacker/phpacker) - PHP 앱을 독립 실행형 파일로 컴파일하는 PHAR 빌더.
* [Phing](https://www.phing.info/) - Apache Ant에서 영감을 받은 PHP 프로젝트 빌드 시스템.
* [RMT](https://github.com/liip/RMT) - 소프트웨어의 버전 지정과 릴리스를 위한 라이브러리.

### 작업 실행기
*작업 자동화 및 실행용 라이브러리.*

* [Jobby](https://github.com/jobbyphp/jobby) - crontab을 수정하지 않고 PHP cron 작업을 관리합니다.
* [Robo](https://github.com/consolidation/Robo) - 객체 지향 방식으로 작업을 구성할 수 있는 PHP 작업 실행기.

### 탐색
*탐색 구조를 구축하는 도구.*

* [KnpMenu](https://github.com/KnpLabs/KnpMenu) - 메뉴 라이브러리.
* [Menu](https://github.com/spatie/menu) - 메서드 체이닝을 지원하는 유연한 메뉴 라이브러리.

### 에셋 관리
*웹사이트 에셋을 관리하고 압축 및 축소하는 도구.*

* [JShrink](https://github.com/tedious/JShrink) - JavaScript 축소 라이브러리.
* [Laravel Mix](https://github.com/laravel-mix/laravel-mix) - 일반적인 사용 사례 대부분을 지원하는 Webpack용 우아한 래퍼.
* [Symfony Asset](https://github.com/symfony/asset) - 웹 에셋의 URL 생성 및 버전 관리를 처리합니다.
* [Symfony Encore](https://github.com/symfony/webpack-encore) - Webpack 기반 에셋 처리 및 컴파일을 위한 간단하면서도 강력한 API.

### 지리 위치
*주소 지오코딩 및 위도·경도 작업용 라이브러리.*

* [Country List](https://github.com/umpirsky/country-list) - 국가명과 ISO 3166-1 코드가 포함된 전체 국가 목록.
* [GeoCoder](https://geocoder-php.org/) - 지오코딩 라이브러리.
* [GeoJSON](https://github.com/jmikola/geojson) - GeoJSON 구현.
* [GeoTools](https://github.com/thephpleague/geotools) - 지리 관련 도구 라이브러리.
* [PHPGeo](https://github.com/mjaschen/phpgeo) - 간단한 지리 정보 라이브러리.

### 날짜 및 시간
*날짜 및 시간 작업용 라이브러리.*

* [Business Time](https://github.com/kylekatarnls/business-time) - 영업시간 및 근무일 처리를 위한 Carbon 확장.
* [CalendR](https://github.com/yohang/CalendR) - 캘린더 관리 라이브러리.
* [Carbon](https://github.com/briannesbitt/Carbon) - 간단한 DateTime API 확장.
* [Chronos](https://github.com/cakephp/chronos) - 변경 가능 및 불변 날짜/시간을 모두 지원하는 DateTime API 확장.
* [Moment.php](https://github.com/fightbulc/moment.php) - Moment.js에서 영감을 받은 PHP용 날짜·시간 라이브러리로, i18n을 지원합니다.
* [PHP RRule](https://github.com/rlanvin/php-rrule) - iCalendar RRule 명세를 기반으로 반복 날짜와 시간을 처리하는 라이브러리.
* [Yasumi](https://github.com/azuyalabs/yasumi) - 공휴일 날짜와 이름을 계산하는 데 도움을 주는 라이브러리.

### 이벤트
*이벤트 기반이거나 비차단 이벤트 루프를 구현하는 라이브러리.*

* [Amp](https://github.com/amphp/amp) - 이벤트 기반 비차단 I/O 라이브러리.
* [Broadway](https://github.com/broadway/broadway) - 이벤트 소싱 및 CQRS 라이브러리.
* [CakePHP Event](https://github.com/cakephp/event) - 이벤트 디스패처 라이브러리.
* [Elephant.io](https://github.com/ElephantIO/elephant.io) - 또 다른 웹소켓 라이브러리.
* [Evenement](https://github.com/igorw/evenement) - 이벤트 디스패처 라이브러리.
* [Event](https://github.com/thephpleague/event) - 도메인 이벤트에 중점을 둔 이벤트 라이브러리.
* [Fast CGI Client](https://github.com/hollodotme/fast-cgi-client) - php-fpm 소켓을 통해 동기식/비동기식 요청을 보내는 클라이언트.
* [FrankenPHP](https://frankenphp.dev/) - Go로 작성된 최신 PHP 앱 서버.
* [Pawl](https://github.com/ratchetphp/Pawl) - 비동기 웹소켓 클라이언트.
* [Prooph Event Store](https://github.com/prooph/event-store) - 이벤트 메시지를 영구 저장하는 이벤트 소싱 구성 요소.
* [PHP Defer](https://github.com/php-defer/php-defer) - Go의 defer 문을 PHP에서 사용할 수 있게 해줍니다.
* [Ratchet](https://github.com/ratchetphp/Ratchet) - 웹소켓 라이브러리.
* [ReactPHP](https://github.com/reactphp/reactphp) - 이벤트 기반 비차단 I/O 라이브러리.
* [RxPHP](https://github.com/ReactiveX/RxPHP) - 반응형 확장 라이브러리.
* [Swoole](https://github.com/swoole/swoole-src) - C로 작성된 고성능 PHP 이벤트 기반 비동기·동시성 네트워크 통신 프레임워크.
* [Workerman](https://github.com/walkor/Workerman) - 이벤트 기반 비차단 I/O 라이브러리.

### 로깅
*로그 파일 생성 및 처리를 위한 라이브러리.*

* [Monolog](https://github.com/Seldaek/monolog) - 기능이 풍부한 로거.

### 전자상거래
*결제 처리 및 온라인 상점 구축을 위한 라이브러리와 애플리케이션.*

* [Money](https://github.com/moneyphp/money) - Fowler의 Money 패턴을 PHP로 구현.
* [Brick Money](https://github.com/brick/money) - 컨텍스트, 현금 반올림 및 통화 변환을 지원하는 PHP용 화폐 라이브러리.
* [OmniPay](https://github.com/thephpleague/omnipay) - 특정 프레임워크에 종속되지 않는 멀티 게이트웨이 결제 처리 라이브러리.
* [Payum](https://github.com/payum/payum) - 결제 추상화 라이브러리.
* [Shopsys Framework](https://github.com/shopsys/shopsys/) - 사내 개발 팀을 위한 오픈 소스 전자상거래 플랫폼.
* [Shopware](https://github.com/shopware/shopware) - 사용자 지정 기능이 풍부한 전자상거래 소프트웨어.
* [Swap](https://github.com/florianv/swap) - 환율 라이브러리.
* [Sylius](https://sylius.com/) - 오픈 소스 전자상거래 솔루션.

### PDF
*PDF 파일 작업용 라이브러리 및 소프트웨어.*

* [Browsershot](https://github.com/spatie/browsershot) - HTML을 이미지, PDF 또는 문자열로 변환합니다.
* [Dompdf](https://github.com/dompdf/dompdf) - HTML을 PDF로 변환합니다.
* [Gotenberg](https://github.com/gotenberg/gotenberg-php) - Gotenberg와 상호작용하기 위한 PHP 클라이언트.
* [Snappy](https://github.com/KnpLabs/snappy) - PDF 및 이미지 생성 라이브러리.
* [TCPDF](https://tcpdf.org/) - PDF 문서 생성을 위한 오픈 소스 PHP 클래스.

### 오피스
*오피스 제품군 문서 작업용 라이브러리.*

* [PHPPowerPoint](https://github.com/PHPOffice/PHPPresentation) - Microsoft PowerPoint 프레젠테이션 작업용 라이브러리.
* [PHPWord](https://github.com/PHPOffice/PHPWord) - Microsoft Word 문서 작업용 라이브러리.
* [PHPSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet) - 스프레드시트 파일을 읽고 쓰는 순수 PHP 라이브러리(PHPExcel의 후속작).
* [OpenSpout](https://github.com/openspout/openspout) - 스프레드시트 파일(CSV, XLSX, ODS)을 빠르고 확장 가능한 방식으로 읽고 쓰는 PHP 라이브러리 `box/spout`의 커뮤니티 주도 포크.

### 데이터베이스
*객체 관계 매핑(ORM) 또는 데이터 매핑 기법을 사용해 데이터베이스와 상호작용하는 라이브러리.*

* [Atlas.Orm](https://github.com/atlasphp/Atlas.Orm) - PHP 영속성 모델을 위한 데이터 매퍼 구현.
* [Aura.Sql](https://github.com/auraphp/Aura.Sql) - 프로파일러 및 연결 로케이터와 함께 기본 PDO를 확장합니다.
* [Aura.SqlQuery](https://github.com/auraphp/Aura.SqlQuery) - MySQL, PostgreSQL, SQLite 및 Microsoft SQL Server용 독립 쿼리 빌더.
* [Baum](https://github.com/etrepat/baum) - Eloquent용 중첩 집합 구현.
* [CakePHP ORM](https://github.com/cakephp/orm) - DataMapper 패턴을 사용해 구현된 객체 관계 매퍼.
* [Cycle ORM](https://github.com/cycle/orm) - PHP 데이터 매퍼 및 ORM.
* [Doctrine Extensions](https://github.com/doctrine-extensions/DoctrineExtensions) - Doctrine의 동작을 확장하는 라이브러리 모음.
* [Doctrine](https://www.doctrine-project.org/) - 기능이 풍부한 DBAL 및 ORM.
* [Laravel Eloquent](https://github.com/illuminate/database) - 간단한 ORM.
* [ProxyManager](https://github.com/Ocramius/ProxyManager) - 데이터 매퍼용 프록시 객체를 생성하는 유틸리티 모음.
* [RedBean](https://redbeanphp.com/index.php) - 가볍고 구성이 필요 없는 ORM.
* [Slimdump](https://github.com/webfactory/slimdump) - 간편한 MySQL 덤프 도구.
* [Spot2](https://github.com/spotorm/spot2) - MySQL 데이터 매퍼 ORM.

### 마이그레이션
*데이터베이스 스키마 및 마이그레이션 관리를 돕는 라이브러리.*

* [Doctrine Migrations](https://www.doctrine-project.org/projects/migrations.html) - Doctrine용 마이그레이션 라이브러리.
* [Phinx](https://github.com/cakephp/phinx) - 또 다른 데이터베이스 마이그레이션 라이브러리.
* [PHPMig](https://github.com/davedevelopment/phpmig) - 또 다른 마이그레이션 관리 라이브러리.
* [Ruckusing](https://github.com/ruckus/ruckusing-migrations) - MySQL, Postgres 및 SQLite를 지원하는 ActiveRecord Migrations 방식의 PHP 데이터베이스 마이그레이션.

### NoSQL
*"NoSQL" 백엔드 작업용 라이브러리.*

* [MongoDB](https://github.com/mongodb/mongo-php-driver) - MongoDB PHP 드라이버.
* [MongoDB PHP Library](https://github.com/mongodb/mongo-php-library) - MongoDB PHP 드라이버를 기반으로 구축된 공식 고수준 MongoDB PHP 라이브러리.
* [Predis](https://github.com/predis/predis) - 기능을 완벽하게 갖춘 Redis 라이브러리.

### 큐
*이벤트 및 작업 큐 작업용 라이브러리.*

* [BunnyPHP](https://github.com/jakubkulhan/bunny) - RabbitMQ용 고성능 순수 PHP AMQP 동기식 및 비동기식(ReactPHP) 라이브러리.
* [Pheanstalk](https://github.com/pheanstalk/pheanstalk) - Beanstalkd 클라이언트 라이브러리.
* [PHP AMQP](https://github.com/php-amqplib/php-amqplib) - 순수 PHP AMQP 라이브러리.
* [Tarantool Queue](https://github.com/tarantool-php/queue) - Tarantool Queue용 PHP 바인딩.
* [Thumper](https://github.com/php-amqplib/Thumper) - RabbitMQ 패턴 라이브러리.
* [Enqueue](https://github.com/php-enqueue/enqueue-dev) - RabbitMQ, AMQP, STOMP, Amazon SQS, Redis 및 Doctrine 전송 드라이버를 지원하는 PHP 메시지 큐 패키지.

### 검색
*데이터를 색인하고 검색 쿼리를 수행하기 위한 라이브러리와 소프트웨어.*

* [Elastica](https://github.com/ruflin/Elastica) - ElasticSearch 클라이언트 라이브러리.
* [ElasticSearch PHP](https://github.com/elastic/elasticsearch-php) - [ElasticSearch](https://www.elastic.co/)의 공식 클라이언트 라이브러리.
* [Solarium](https://www.solarium-project.org/) - [Solr](https://solr.apache.org/) 클라이언트 라이브러리.
* [SphinxQL Query Builder](https://foolcode.github.io/SphinxQL-Query-Builder/) - [Sphinx](https://sphinxsearch.com/) 및 [Manticore](https://manticoresearch.com/) 검색 엔진용 쿼리 라이브러리.

### 명령줄
*명령줄 관련 라이브러리.*

* [Aura.Cli](https://github.com/auraphp/Aura.Cli) - 명령줄 인터페이스에서 요청(Context)과 응답(Stdio)에 해당하는 객체를 제공하고 Getopt를 지원합니다. 명령을 설명하는 독립적인 Help 객체도 포함합니다.
* [CLI Menu](https://github.com/php-school/cli-menu) - CLI 메뉴 구축 라이브러리.
* [CLIFramework](https://github.com/c9s/CLIFramework) - zsh/bash 자동 완성 생성, 하위 명령 및 옵션 제약 조건을 지원하는 명령줄 프레임워크. phpbrew도 이 프레임워크를 사용합니다.
* [CLImate](https://github.com/thephpleague/climate) - 색상 및 특수 서식 출력을 위한 라이브러리.
* [Commando](https://github.com/nategood/commando) - 또 다른 간단한 명령줄 옵션 파서.
* [Cron Expression](https://github.com/mtdowling/cron-expression) - cron 작업의 실행 날짜를 계산하는 라이브러리.
* [GetOpt](https://github.com/getopt-php/getopt-php) - 명령줄 옵션 파서.
* [GetOptionKit](https://github.com/c9s/GetOptionKit) - 또 다른 명령줄 옵션 파서.
* [PsySH](https://github.com/bobthecow/psysh) - 또 다른 PHP REPL.
* [ShellWrap](https://github.com/MrRio/shellwrap) - 간단한 명령줄 래퍼 라이브러리.

### 인증 및 권한 부여
*사용자 인증 및 권한 부여를 구현하는 라이브러리.*

* [Aura.Auth](https://github.com/auraphp/Aura.Auth) - 다양한 어댑터를 사용해 인증 기능과 세션 추적을 제공합니다.
* [SocialConnect Auth](https://github.com/socialConnect/auth) - OAuth 1/2, OpenID 및 OpenID Connect를 지원하는 오픈 소스 소셜 로그인 라이브러리.
* [Json Web Token](https://github.com/lcobucci/jwt) - 인증 및 정보 전송을 위한 JSON 토큰.
* [OAuth 1.0 Client](https://github.com/thephpleague/oauth1-client) - OAuth 1.0 클라이언트 라이브러리.
* [OAuth 2.0 Client](https://github.com/thephpleague/oauth2-client) - OAuth 2.0 클라이언트 라이브러리.
* [OAuth2 Server](https://bshaffer.github.io/oauth2-server-php-docs/) - 또 다른 OAuth2 서버 구현.
* [OAuth2 Server](https://oauth2.thephpleague.com/) - OAuth2 인증 서버, 리소스 서버 및 클라이언트 라이브러리.
* [Paseto](https://github.com/paragonie/paseto) - 플랫폼에 구애받지 않는 보안 토큰.
* [PHP oAuthLib](https://github.com/daviddesberg/PHPoAuthLib) - 또 다른 OAuth 라이브러리.
* [TwitterOAuth](https://github.com/abraham/twitteroauth) - Twitter OAuth 라이브러리.

### 마크업 및 CSS
*마크업 및 CSS 형식 작업용 라이브러리.*

* [Carve](https://github.com/markup-carve/carve-php) - Markdown과 Djot에서 파생된 경량 마크업 언어인 [Carve](https://markup-carve.github.io/carve/)용 PHP 파서.
* [Cebe Markdown](https://github.com/cebe/markdown) - 빠르고 확장 가능한 Markdown 파서.
* [CommonMark PHP](https://github.com/thephpleague/commonmark) - [CommonMark 명세](https://spec.commonmark.org/)를 완벽하게 지원하는 고도로 확장 가능한 Markdown 파서.
* [Decoda](https://github.com/milesj/decoda) - 경량 마크업 파서 라이브러리.
* [Djot](https://github.com/php-collective/djot-php) - 현대적인 경량 마크업 언어(Markdown의 후속작)인 [Djot](https://djot.net/)용 PHP 파서.
* [Essence](https://github.com/essence/essence) - 웹 미디어 추출 라이브러리.
* [Embera](https://github.com/mpratt/Embera) - OEmbed 콘텐츠를 가져오는 라이브러리.
* [HTML to Markdown](https://github.com/thephpleague/html-to-markdown) - HTML을 Markdown으로 변환합니다.
* [HTML5 PHP](https://github.com/Masterminds/html5-php) - HTML5 파서 및 직렬화 라이브러리.
* [Parsedown](https://github.com/erusev/parsedown) - 또 다른 Markdown 파서.
* [PHP CSS Parser](https://github.com/MyIntervals/PHP-CSS-Parser) - PHP로 작성된 CSS 파일 파서.
* [PHP Markdown](https://github.com/michelf/php-markdown) - Markdown 파서.
* [Shiki PHP](https://github.com/spatie/shiki-php) - PHP로 작성된 [Shiki](https://github.com/shikijs/shiki) 구문 강조 패키지.
* [VObject](https://github.com/sabre-io/vobject) - VCard 및 iCalendar 객체 파싱 라이브러리.

### JSON
*JSON 작업용 라이브러리.*

* [JSON Lint](https://github.com/Seldaek/jsonlint) - JSON 문법 검사 도구.
* [JSONMapper](https://github.com/JsonMapper/JsonMapper) - JSON을 PHP 객체로 매핑하는 라이브러리.
* [Lazy JSON](https://github.com/cerbero90/lazy-json) - 대용량 JSON 파일을 위한 메모리 효율적인 지연 파서.

### 문자열
*문자열 파싱 및 조작용 라이브러리.*

* [Agent](https://github.com/jenssegers/agent) - MobileDetect 기반의 PHP 데스크톱/모바일 사용자 에이전트 파서.
* [ANSI to HTML5](https://github.com/sensiolabs/ansi-to-html) - ANSI를 HTML5로 변환하는 라이브러리.
* [Color Jizz](https://github.com/mikeemoo/ColorJizz-PHP) - 색상 조작 및 변환 라이브러리.
* [Device Detector](https://github.com/matomo-org/device-detector) - 사용자 에이전트 문자열 파싱을 위한 또 다른 라이브러리.
* [Hyphenation](https://github.com/heiglandreas/Org_Heigl_Hyphenator) - TeX의 하이픈 분리 알고리즘을 기반으로 텍스트의 단어를 줄바꿈에 맞춰 나누는 라이브러리.
* [Jieba-PHP](https://github.com/fukuball/jieba-php) - Python의 jieba를 PHP로 포팅한 버전. 자연어 처리를 위한 중국어 텍스트 분할 도구.
* [Mobile-Detect](https://github.com/serbanghita/Mobile-Detect) - 태블릿을 포함한 모바일 기기를 감지하는 경량 PHP 클래스.
* [Patchwork UTF-8](https://github.com/nicolas-grekas/Patchwork-UTF8) - UTF-8 문자열 작업을 위한 이식 가능한 라이브러리.
* [Portable ASCII](https://github.com/voku/portable-ascii) - 문자열을 ASCII로 변환하는 라이브러리.
* [Portable UTF-8](https://github.com/voku/portable-utf8) - UTF-8 문자열을 안전하게 치환하는 메서드를 제공하는 문자열 조작 라이브러리.
* [Slugify](https://github.com/cocur/slugify) - 문자열을 슬러그로 변환하는 라이브러리.
* [SQL Formatter](https://github.com/jdorn/sql-formatter/) - SQL 문 서식 지정 라이브러리.
* [Stringy](https://github.com/voku/Stringy) - 멀티바이트를 지원하는 문자열 조작 라이브러리.
* [Url highlight](https://github.com/vstelmakh/url-highlight) - 텍스트에서 URL을 파싱해 클릭 가능한 링크로 변환하는 라이브러리.
* [URLify](https://github.com/jbroadway/urlify) - Django의 URLify.js를 PHP로 포팅한 버전.
* [UUID](https://github.com/ramsey/uuid) - UUID 생성 라이브러리.

### 숫자
*숫자 작업용 라이브러리.*

* [Brick Math](https://github.com/brick/math) - 큰 수를 지원하는 라이브러리: `BigInteger`, `BigDecimal` 및 `BigRational`.
* [ByteUnits](https://github.com/gabrielelana/byte-units) - 이진 및 미터법 단위계에서 바이트 단위를 파싱, 서식 지정 및 변환하는 라이브러리.
* [DecimalObject](https://github.com/php-collective/decimal-object) - 십진수/부동소수점을 쉽고 정확하게 처리하는 값 객체.
* [IP](https://github.com/darsyn/ip) - IPv4 및 IPv6 주소 작업을 위한 불변 값 객체.
* [PHP Conversion](https://github.com/cniska/php-conversion) - 측정 단위 간 변환을 위한 또 다른 라이브러리.
* [PHP Units of Measure](https://github.com/triplepoint/php-units-of-measure) - 측정 단위 간 변환 라이브러리.
* [MathPHP](https://github.com/markrogoyski/math-php) - PHP용 수학 라이브러리.

### 필터링, 정제 및 검증
*데이터 필터링, 정제 및 검증용 라이브러리.*

* [Assert](https://github.com/beberlei/assert) - 다양한 어서션을 제공하는 검증 라이브러리로, 어서션을 연결하거나 지연 실행할 수 있습니다.
* [Aura.Filter](https://github.com/auraphp/Aura.Filter) - 객체와 배열을 검증하고 정제하는 도구를 제공합니다.
* [CakePHP Validation](https://github.com/cakephp/validation) - 또 다른 검증 라이브러리.
* [Filterus](https://github.com/ircmaxell/filterus) - 간단한 PHP 필터링 라이브러리.
* [HTML Purifier](https://github.com/ezyang/htmlpurifier) - 표준을 준수하는 HTML 필터.
* [ISO-codes](https://github.com/ronanguilloux/IsoCodes) - ISO, 국제 금융, 공공 행정, GS1, 출판업계, 전화번호 및 여러 국가의 우편번호 표준에 따른 입력값 검증 라이브러리.
* [JSON Schema](https://github.com/jsonrainbow/json-schema) - [JSON Schema](https://json-schema.org/) 검증 라이브러리.
* [LibPhoneNumber for PHP](https://github.com/giggsey/libphonenumber-for-php) - Google 전화번호 처리 라이브러리의 PHP 구현.
* [MetaYaml](https://github.com/romaricdrigon/MetaYaml) - YAML, JSON 및 XML을 지원하는 스키마 검증 라이브러리.
* [Respect Validation](https://github.com/Respect/Validation) - 간단한 검증 라이브러리.
* [Symfony HTML Sanitizer](https://github.com/symfony/html-sanitizer) - HTML 정제 라이브러리.
* [Valitron](https://github.com/vlucas/valitron) - 또 다른 검증 라이브러리.
* [Valinor](https://github.com/CuyZ/Valinor) - 강력한 형식의 값 객체로 매핑하는 라이브러리.
* [Volan](https://github.com/serkin/Volan) - 또 다른 간소화된 검증 라이브러리.

### API
*API 개발을 위한 라이브러리 및 웹 도구.*

* [API Platform](https://api-platform.com) - JSON-LD와 Hydra 형식을 지원하는 하이퍼미디어 REST API를 단 몇 분 만에 공개합니다.
* [Laminas API Tool Skeleton](https://github.com/laminas-api-tools/api-tools-skeleton) - Laminas Framework로 구축된 API 빌더.
* [HAL](https://github.com/blongden/hal) - 하이퍼텍스트 애플리케이션 언어(HAL) 빌더 라이브러리.
* [Hateoas](https://github.com/willdurand/Hateoas) - HATEOAS REST 웹 서비스 라이브러리.
* [Jane](https://github.com/janephp/janephp/) - 검증 기능을 지원하는 OpenAPI 클라이언트 생성기.
* [Negotiation](https://github.com/willdurand/Negotiation) - 콘텐츠 협상 라이브러리.
* [Restler](https://github.com/Luracast/Restler) - PHP 메서드를 RESTful 웹 API로 공개하는 경량 프레임워크.
* [PackageGenerator](https://github.com/WsdlToPhp/PackageGenerator) - 모든 WSDL에서 PHP SDK를 생성하는 패키지 생성기.

### 캐싱 및 잠금
*데이터 캐싱 및 잠금 획득용 라이브러리.*

* [APIx Cache](https://github.com/apix/cache) - 캐시 태그 지정 및 색인에 중점을 둔 다양한 캐시 백엔드용 얇은 PSR-6 캐시 래퍼.
* [CacheTool](https://github.com/gordalina/cachetool) - 명령줄에서 APC/opcode 캐시를 지우는 도구.
* [CakePHP Cache](https://github.com/cakephp/cache) - 캐싱 라이브러리.
* [Doctrine Cache](https://github.com/doctrine/cache) - 캐싱 라이브러리.
* [Metaphore](https://github.com/sobstel/metaphore) - 세마포어로 캐시 스탬피드(dogpile) 현상을 방지하는 라이브러리.
* [Stash](https://github.com/tedious/Stash) - 또 다른 캐싱 라이브러리.
* [Laminas Cache](https://github.com/laminas/laminas-cache) - 또 다른 캐싱 라이브러리.
* [Lock](https://github.com/php-lock/lock) - 독점 실행을 지원하는 잠금 라이브러리.

### 데이터 구조 및 저장소
*데이터 구조나 저장 방식을 구현하는 라이브러리.*

* [CakePHP Collection](https://github.com/cakephp/collection) - 간단한 컬렉션 라이브러리.
* [Fractal](https://github.com/thephpleague/fractal) - 복잡한 데이터 구조를 JSON 출력으로 변환하는 라이브러리.
* [JsonMapper](https://github.com/cweiske/jsonmapper) - 중첩된 JSON 구조를 PHP 클래스에 매핑하는 라이브러리.
* [JSON Machine](https://github.com/halaxa/json-machine) - 간단한 `foreach`를 사용해 대용량 JSON을 반복 처리합니다.
* [msgpack.php](https://github.com/rybakit/msgpack.php) - [MessagePack](https://msgpack.org/) 직렬화 형식의 순수 PHP 구현.
* [Serializer](https://github.com/schmittjoh/serializer) - 데이터 직렬화 및 역직렬화를 위한 라이브러리.
* [YaLinqo](https://github.com/Athari/YaLinqo) - PHP용 또 다른 LINQ to Objects 구현.
* [Laminas Serializer](https://github.com/laminas/laminas-serializer) - 데이터 직렬화 및 역직렬화를 위한 또 다른 라이브러리.

### 알림
*알림 소프트웨어 작업용 라이브러리.*

* [JoliNotif](https://github.com/jolicode/JoliNotif) - 데스크톱 알림용 크로스 플랫폼 라이브러리(Growl, notify-send, toaster 등 지원).

### 배포
*프로젝트 배포용 라이브러리.*

* [Deployer](https://github.com/deployphp/deployer) - 배포 도구.
* [Envoy](https://github.com/laravel/envoy) - PHP로 SSH 작업을 실행하는 도구.

### 국제화 및 현지화
*국제화(I18n) 및 현지화(L10n)용 라이브러리.*

* [Aura.Intl](https://github.com/auraphp/Aura.Intl) - 국제화 도구를 제공하며, 특히 패키지별 로캘 메시지 번역을 지원합니다.
* [CakePHP I18n](https://github.com/cakephp/i18n) - 날짜 및 숫자 메시지 번역과 현지화.

### 서버리스
*서버리스 웹 애플리케이션 구축을 돕는 라이브러리와 도구.*

* [Bref](https://bref.sh/) - AWS Lambda에서 실행되는 서버리스 PHP.
* [OpenWhisk](https://openwhisk.apache.org/) - 오픈 소스 서버리스 클라우드 플랫폼.
* [Serverless Framework](https://www.serverless.com/framework) - 서버리스 애플리케이션 구축을 위한 오픈 소스 프레임워크.
* [Laravel Vapor](https://vapor.laravel.com/) - AWS 기반의 Laravel용 서버리스 배포 플랫폼.

### 구성
*구성 관련 라이브러리 및 도구.*

* [PHP Dotenv](https://github.com/vlucas/phpdotenv) - `.env` 파일에서 환경 변수를 파싱하고 불러옵니다.
* [Symfony Dotenv](https://github.com/symfony/dotenv) - `.env` 파일에서 환경 변수를 파싱하고 불러옵니다.
* [Toml](https://github.com/php-collective/toml) - AST 접근 및 오류 복구를 지원하는 TOML 파서 및 인코더.

### LLM
*대규모 언어 모델 작업용 라이브러리.*

* [Anthropic](https://github.com/mozex/anthropic-php) - 메시지, 스트리밍, 도구 사용 및 일괄 처리를 지원하는 Anthropic API용 PHP 클라이언트.
* [Anthropic for Laravel](https://github.com/mozex/anthropic-laravel) - 파사드, 설정 게시 및 테스트 대역을 지원하는 Anthropic PHP 클라이언트용 Laravel 래퍼.
* [Instructor for PHP](https://github.com/cognesy/instructor-php) - PHP에서 LLM을 사용한 구조화된 데이터 출력.
* [LLPhant](https://github.com/LLPhant/LLPhant) - OpenAI GPT 4를 사용하는 포괄적인 PHP 생성형 AI 프레임워크. Langchain에서 영감을 받았습니다.
* [OpenAI Client](https://github.com/openai-php/client) - OpenAI API와 상호작용할 수 있는 강력한 커뮤니티 유지보수 PHP API 클라이언트.
* [OpenAI Client for Laravel](https://github.com/openai-php/laravel) - OpenAI API와 상호작용할 수 있는 강력한 Laravel용 PHP API 클라이언트.
* [PHP Mistral AI SDK](https://github.com/SoftCreatR/php-mistral-ai-sdk) - Mistral AI API용 강력하고 사용하기 쉬운 PHP SDK로, PHP 프로젝트에 고급 AI 기능을 원활하게 통합합니다.

### 타사 API
*타사 API 접근용 라이브러리.*

* [Amazon Web Service SDK](https://github.com/aws/aws-sdk-php) - 공식 PHP AWS SDK 라이브러리.
* [AsyncAWS](https://async-aws.com/) - 비공식 비동기 PHP AWS SDK.
* [Campaign Monitor](https://campaignmonitor.github.io/createsend-php/) - 공식 Campaign Monitor PHP 라이브러리.
* [Github](https://github.com/KnpLabs/php-github-api) - Github API와 연동하는 라이브러리.
* [Mailgun](https://github.com/mailgun/mailgun-php) - 공식 Mailgun PHP API.
* [Stripe](https://github.com/stripe/stripe-php) - 공식 Stripe PHP 라이브러리.
* [Twilio](https://github.com/twilio/twilio-php) - 공식 Twilio PHP REST API.

### 확장 기능
*PHP 확장 기능 개발을 돕는 라이브러리.*

* [PHP CPP](https://www.php-cpp.com/) - PHP 확장 기능 개발용 C++ 라이브러리.
* [Zephir](https://github.com/zephir-lang/zephir) - PHP 확장 기능 개발을 위한 PHP와 C++ 사이의 컴파일 언어.

### 기타
*위 범주에 속하지 않는 유용한 라이브러리 또는 유틸리티.*

* [Annotations](https://github.com/doctrine/annotations) - 주석 라이브러리(Doctrine의 일부).
* [BotMan](https://github.com/botman/botman) - 크로스 플랫폼 챗봇 구축을 위한 프레임워크 독립적인 PHP 라이브러리.
* [ClassPreloader](https://github.com/ClassPreloader/ClassPreloader) - 자동 로딩을 최적화하는 라이브러리.
* [Ganesha](https://github.com/ackintosh/ganesha) - PHP 회로 차단기 패턴 구현.
* [Hprose-PHP](https://github.com/hprose/hprose-php) - 언어 간 RPC.
* [Laravel Serializable Closure](https://github.com/laravel/serializable-closure) - 클로저를 직렬화할 수 있게 해주는 라이브러리.
* [noCAPTCHA](https://github.com/ARCANEDEV/noCAPTCHA) - Google noCAPTCHA(reCAPTCHA)용 도우미.
* [Pagerfanta](https://github.com/whiteoctober/Pagerfanta) - 페이지네이션 라이브러리.
* [Safe](https://github.com/thecodingmachine/safe) - 모든 PHP 함수를 다시 작성해 false 대신 예외를 발생시킵니다.

# 소프트웨어
*개발 환경을 구성하기 위한 소프트웨어.*

### PHP 설치
*컴퓨터에 PHP를 설치하고 관리하는 데 도움을 주는 도구.*

* [Brew PHP Switcher](https://github.com/philcook/brew-php-switcher) - Brew용 PHP 버전 전환 도구.
* [Homebrew](https://brew.sh/) - macOS용 패키지 관리자.
* [PHP Brew](https://github.com/phpbrew/phpbrew) - PHP 버전 관리자 및 설치 프로그램.
* [PHP Build](https://github.com/php-build/php-build) - 또 다른 PHP 버전 설치 프로그램.
* [Static PHP CLI](https://github.com/crazywhalecc/static-php-cli) - PHP CLI와 FPM의 정적 빌드를 만들거나 [다운로드](https://dl.static-php.dev/static-php-cli/)할 수 있습니다.

### 개발 환경
*개발 환경을 만들고 공유하는 소프트웨어와 도구.*

* [Ansible](https://www.redhat.com/en/ansible-collaborative) - 매우 간단한 오케스트레이션 프레임워크.
* [DDEV](https://github.com/ddev/ddev) - PHP용 로컬 웹 개발 환경 시스템.
* [Docker](https://www.docker.com/) - 컨테이너화 플랫폼.
* [Docker PHP Extension Installer](https://github.com/mlocati/docker-php-extension-installer) - Docker 컨테이너에 PHP 확장을 간편하게 설치합니다.
* [Docksal](https://github.com/docksal/docksal) - macOS, Windows 및 Linux용 통합 Docker :whale: 기반 웹 개발 환경.
* [Expose](https://github.com/exposedev/expose) - 오픈 소스 PHP 터널링 서비스.
* [Lando](https://lando.dev/) - 버튼 한 번으로 구성하는 개발 환경.
* [Laravel Homestead](https://laravel.com/docs/master/homestead) - Laravel용 로컬 개발 환경.
* [Laravel Herd](https://herd.laravel.com/windows) - macOS 및 Windows용 원클릭 PHP 개발 환경.
* [Laradock](https://laradock.io/) - Docker 기반의 완전한 PHP 개발 환경.
* [PHPMon](https://phpmon.app/) - PHP 설치를 관리하는 macOS 메뉴 막대 앱([Laravel Valet](https://laravel.com/docs/master/valet)과 함께 작동).
* [Puppet](https://www.puppet.com) - 서버 자동화 프레임워크이자 애플리케이션.
* [Solo](https://github.com/soloterm/solo) - Laravel 애플리케이션의 프로세스를 관리하는 터미널 애플리케이션.
* [Takeout](https://github.com/tighten/takeout) - 개발 전용 Docker 기반 의존성 관리자.
* [Vagrant](https://developer.hashicorp.com/vagrant) - 이식 가능한 개발 환경 유틸리티.

### 가상 머신
*대체 PHP 가상 머신.*

* [Hack](https://hacklang.org/) - HHVM용 프로그래밍 언어.
* [HHVM](https://github.com/facebook/hhvm) - Facebook이 만든 PHP 가상 머신, 런타임 및 JIT.
* [PeachPie](https://github.com/peachpiecompiler/peachpie) - .NET 및 .NET Core용 PHP 컴파일러 및 런타임.

### 텍스트 편집기 및 IDE
*PHP를 지원하는 텍스트 편집기 및 통합 개발 환경(IDE).*

* [Eclipse for PHP Developers](https://www.eclipse.org/downloads/) - Eclipse 플랫폼 기반 PHP IDE.
* [Apache NetBeans](https://netbeans.apache.org/front/main/index.html) - PHP 및 HTML5를 지원하는 IDE.
* [PhpEd](https://www.nusphere.com/products/phped.htm) - 전문가용 상용 디버거가 포함된 IDE.
* [PhpStorm](https://www.jetbrains.com/phpstorm/) - 상용 PHP IDE.
* [VS Code](https://code.visualstudio.com/) - 오픈 소스 코드 편집기.

### 웹 애플리케이션
*웹 기반 애플리케이션 및 도구.*

* [3V4L](https://3v4l.org/) - 온라인 PHP 및 HHVM 셸.
* [Adminer](https://www.adminer.org/en/) - 단일 PHP 파일로 제공되는 데이터베이스 관리 도구.
* [Cachet](https://github.com/cachethq/cachet) - 오픈 소스 상태 페이지 시스템.
* [Lychee](https://github.com/electerious/Lychee) - 사용하기 쉽고 디자인도 뛰어난 사진 관리 시스템.
* [Leantime](https://leantime.io) - 전문 프로젝트 관리자가 아니어도 사용할 수 있는 전략적 프로젝트 관리 시스템.
* [MailCatcher](https://github.com/sj26/mailcatcher) - 이메일을 캡처하고 확인하는 웹 도구.
* [Mailpit](https://github.com/axllent/mailpit) - 개발자를 위한 이메일 및 SMTP 테스트 도구.
* [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - MySQL/MariaDB용 웹 인터페이스.
* [PHP Queue](https://github.com/CoderKungfu/php-queue) - 큐 백엔드를 관리하는 애플리케이션.
* [phpRedisAdmin](https://github.com/ErikDubbelboer/phpRedisAdmin) - [Redis](https://redis.io/) 데이터베이스를 관리하는 간단한 웹 인터페이스.
* [PHPSandbox](https://phpsandbox.io) - 브라우저에서 사용하는 온라인 PHP IDE.

### 인프라
*PHP 애플리케이션 및 서비스를 제공하기 위한 인프라.*

* [appserver.io](https://github.com/appserver-io/appserver) - PHP로 구현된 멀티스레드 애플리케이션 서버.
* [php-pm](https://github.com/php-pm/php-pm) - PHP 애플리케이션용 프로세스 관리자, 성능 향상 도구 및 로드 밸런서.
* [RoadRunner](https://github.com/roadrunner-server/roadrunner) - 고성능 PHP 애플리케이션 서버, 로드 밸런서 및 프로세스 관리자.

# 자료
PHP 개발 기술과 지식을 향상하기 위한 도서, 웹사이트, 기사 등 다양한 자료입니다.

### PHP 웹사이트
*PHP 관련 유용한 웹사이트.*

* [Nomad PHP](https://nomadphp.com/) - 온라인 PHP 학습 자료.
* [Laravel News](https://laravel-news.com/) - Laravel 공식 블로그.
* [PHP Annotated Monthly](https://blog.jetbrains.com/phpstorm/tag/php-annotated-monthly/) - PHP 소식을 매월 정리한 다이제스트.
* [PHP FIG](https://www.php-fig.org/) - PHP Framework Interoperability Group.
* [PHP Package Development Standards](https://php-pds.com/) - PHP 패키지 개발 표준.
* [PHP School](https://www.phpschool.io/) - PHP를 위한 오픈 소스 학습 자료.
* [PHP The Right Way](https://phptherightway.com/) - PHP 모범 사례를 빠르게 찾아볼 수 있는 참고 자료.
* [PHP UG](https://php.ug) - 가장 가까운 PHP 사용자 그룹(UG)을 찾도록 돕는 웹사이트.
* [PHP Watch](https://php.watch/) - PHP 기사, 뉴스, 예정된 변경 사항, RFC 등.
* [Unit Testing Tips](https://testing-tips.sarvendev.com/) - PHP 예제를 통한 단위 테스트 팁.

### PHP 도서
*PHP 관련 훌륭한 도서.*

* [Domain-Driven Design in PHP](https://leanpub.com/ddd-in-php) - DDD 아키텍처 스타일을 실제 PHP 코드로 보여 주는 예제.
* [Functional Programming in PHP](https://www.functionalphp.com/) - PHP에서 함수형 프로그래밍 원칙과 기법을 적용하는 방법을 다룬 책.
* [Mastering Object-Orientated PHP](https://masteringobjectorientedphp.com/) - Brandon Savage가 쓴 객체 지향 PHP 책.
* [PHP Cookbook](https://www.oreilly.com/library/view/php-cookbook/9781098121310/) - 다양한 코딩 문제를 해결하는 데 도움이 되는 코드 레시피를 제공합니다.
* [Modernizing Legacy Applications in PHP](https://leanpub.com/mlaphp) - Paul M. Jones가 쓴 레거시 PHP 애플리케이션 현대화에 관한 책.
* [Scaling PHP Applications](https://www.scalingphpbook.com) - Steve Corona가 쓴 PHP 애플리케이션 확장에 관한 전자책.
* [Securing PHP: Core Concepts](https://leanpub.com/securingphp-coreconcepts) - Chris Cornutt가 쓴 PHP의 일반적인 보안 용어 및 실천 방법에 관한 책.
* [Signaling PHP](https://leanpub.com/signalingphp) - Cal Evans가 쓴 CLI 스크립트의 PCNTL 신호 처리에 관한 책.
* [XML Parsing with PHP](https://www.phparch.com/books/xml-parsing-with-php/) - XPath 표현식을 활용한 XML 문서의 파싱과 검증, 네임스페이스 처리, XML 파일의 프로그래밍 방식 생성 및 수정을 다루는 책.

### PHP 동영상
*PHP 관련 훌륭한 동영상.*

* [Laracasts](https://laracasts.com) - Laravel, Vue JS 등에 관한 스크린캐스트.
* [Laravel YouTube Channel](https://www.youtube.com/channel/UCfO2GiQwb-cwJTb1CuRSkwg) - Laravel 공식 YouTube 채널.
* [Program With Gio](https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-) - Gio의 PHP 8 강좌.
* [Programming with Anthony](https://www.youtube.com/playlist?list=PLM-218uGSX3DQ3KsB5NJnuOqPqc5CW2kW) - Anthony Ferrara의 동영상 시리즈.
* [SymfonyCasts](https://symfonycasts.com/) - PHP 및 Symfony 관련 스크린캐스트와 튜토리얼.

### PHP 컨퍼런스
*PHP 컨퍼런스.*

* [Laracon EU](https://www.youtube.com/@LaraconEU) - Laravel 및 관련 기술을 배우거나 지식을 공유하려는 사람들을 위한 2일간의 행사입니다.
* [PHP[TEK]](https://phptek.io/) - PHP 프로그래밍 언어에 중점을 둔 미국 최장수 웹 개발자 컨퍼런스.
* [PHP UK Conference](https://www.youtube.com/user/phpukconference/videos) - PHP UK Conference 동영상 모음.

### PHP 팟캐스트
*PHP 주제를 다루는 팟캐스트.*

* [Laravel News Podcast](https://podcast.laravel-news.com/) - Laravel News Podcast에서 Laravel PHP Framework 관련 최신 뉴스와 행사를 전해드립니다.
* [Mostly Technical](https://mostlytechnical.com/) - Ian Landsman과 Aaron Francis가 진행하는 Mostly Technical은 Laravel, 비즈니스 및 다양한 관련 주제를 활발히 논의합니다.
* [No Compromises](https://show.nocompromises.io/) - Laravel SaaS 팀과 일하며 쌓은 경험을 바탕으로 노련하고 거침없는 두 프로그래머가 모범 사례를 이야기합니다.
* [North Meets South Web Podcast](https://www.northmeetssouth.audio/) - Jacob Bennett와 Michael Dyrynda가 14.5시간의 시차를 넘어 웹 개발자의 삶에 관해 이야기합니다.
* [Over Engineered](https://overengineered.fm/) - 중요하지 않은 프로그래밍 질문을 극도로 자세히 탐구하는 미니 시리즈 형식의 팟캐스트.
* [PHP Internals News](https://phpinternals.news) - PHP 내부 구조에 관한 팟캐스트.
* [PHP Town Hall](https://phptownhall.com/) - Ben Edmunds와 Phil Sturgeon이 진행하는 편안한 분위기의 PHP 팟캐스트.
* [php[podcast] episodes from php[architect]](https://www.phparch.com/podcast/) - PHP 및 웹 개발에 중점을 둔 업계 선도 기술 잡지이자 출판사 php[architect]의 공식 팟캐스트.
* [PHPUgly](https://www.phpugly.com/) - 과로한 PHP 개발자 몇 명의 이런저런 이야기.
* [The Laracasts Snippet](https://laracasts.simplecast.com) - 각 에피소드에서 웹 개발의 한 측면에 대한 생각 하나를 전하는 Laracasts의 짧은 코너.
* [The Laravel Podcast](https://laravelpodcast.com/) - Laravel 및 PHP 개발 뉴스와 토론.
* [The PHP Roundtable](https://phproundtable.com/) - PHP 애호가들이 관심을 두는 주제를 논의하는 개발자들의 편안한 모임입니다.

### PHP 뉴스레터
*PHP 관련 뉴스를 이메일로 받아보세요.*

* [PHP Weekly](https://www.phpweekly.com/) - PHP 주간 뉴스레터.

### PHP 읽을거리
*PHP 관련 읽을거리.*

* [php[architect]](https://www.phparch.com/magazine/) - PHP 전용 월간 잡지.

### PHP 내부 구조 읽을거리
*PHP 내부 구조 또는 성능과 관련된 읽을거리.*

* [PHP RFCs](https://wiki.php.net/rfc) - PHP RFC(Request for Comments)의 공식 저장소.
* [Externals](https://externals.io/) - PHP 내부 개발 관련 토론.
* [PHP RFC Watch](https://github.com/beberlei/php-rfc-watch) - 최신 PHP [RFC](https://wiki.php.net/rfc)를 확인하세요.
* [PHP Internals Book](https://www.phpinternalsbook.com/) - 핵심 개발자 세 명이 집필한 PHP 내부 구조에 관한 온라인 도서.
