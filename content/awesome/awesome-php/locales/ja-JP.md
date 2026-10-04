# Awesome PHP [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

PHP の優れたライブラリ、リソース、便利なツールを厳選して紹介します。

## 貢献と協力
詳しくは [CONTRIBUTING](https://github.com/ziadoz/awesome-php/blob/master/CONTRIBUTING.md)、[CODE-OF-CONDUCT](https://github.com/ziadoz/awesome-php/blob/master/CODE-OF-CONDUCT.md)、[COLLABORATING](https://github.com/ziadoz/awesome-php/blob/master/COLLABORATING.md) をご覧ください。

## 目次
- [Awesome PHP](#awesome-php)
  - [Composer リポジトリ](#composer-repositories)
  - [依存関係管理](#dependency-management)
  - [依存関係管理の補助ツール](#dependency-management-extras)
  - [フレームワーク](#frameworks)
  - [フレームワークの補助ツール](#framework-extras)
  - [コンテンツ管理システム](#content-management-systems-cms)
  - [コンポーネント](#components)
  - [マイクロフレームワーク](#micro-frameworks)
  - [マイクロフレームワークの補助ツール](#micro-framework-extras)
  - [ルーター](#routers)
  - [テンプレート](#templating)
  - [静的サイトジェネレーター](#static-site-generators)
  - [HTTP](#http)
  - [スクレイピング](#scraping)
  - [ミドルウェア](#middlewares)
  - [URL](#url)
  - [メール](#email)
  - [ファイル](#files)
  - [ストリーム](#streams)
  - [依存性注入](#dependency-injection)
  - [画像](#imagery)
  - [テスト](#testing)
  - [継続的インテグレーション](#continuous-integration)
  - [ドキュメント](#documentation)
  - [セキュリティ](#security)
  - [パスワード](#passwords)
  - [コード解析](#code-analysis)
  - [コード品質](#code-quality)
  - [静的解析](#static-analysis)
  - [アーキテクチャ](#architectural)
  - [デバッグとプロファイリング](#debugging-and-profiling)
  - [エラー追跡・監視サービス](#error-tracking-and-monitoring-services)
  - [ビルドツール](#build-tools)
  - [タスクランナー](#task-runners)
  - [ナビゲーション](#navigation)
  - [アセット管理](#asset-management)
  - [位置情報](#geolocation)
  - [日付と時刻](#date-and-time)
  - [イベント](#event)
  - [ログ記録](#logging)
  - [e コマース](#e-commerce)
  - [PDF](#pdf)
  - [オフィス](#office)
  - [データベース](#database)
  - [マイグレーション](#migrations)
  - [NoSQL](#nosql)
  - [キュー](#queue)
  - [検索](#search)
  - [コマンドライン](#command-line)
  - [認証と認可](#authentication-and-authorization)
  - [マークアップと CSS](#markup-and-css)
  - [JSON](#json)
  - [文字列](#strings)
  - [数値](#numbers)
  - [フィルタリング、サニタイズ、検証](#filtering-sanitizing-and-validation)
  - [API](#api)
  - [キャッシュとロック](#caching-and-locking)
  - [データ構造とストレージ](#data-structure-and-storage)
  - [通知](#notifications)
  - [デプロイ](#deployment)
  - [国際化と地域化](#internationalisation-and-localisation)
  - [サーバーレス](#serverless)
  - [設定](#configuration)
  - [LLMs](#llms)
  - [サードパーティ API](#third-party-apis)
  - [拡張機能](#extensions)
  - [その他](#miscellaneous)
- [ソフトウェア](#software)
  - [PHP のインストール](#php-installation)
  - [開発環境](#development-environment)
  - [仮想マシン](#virtual-machines)
  - [テキストエディターと IDE](#text-editors-and-ides)
  - [Web アプリケーション](#web-applications)
  - [インフラ](#infrastructure)
- [リソース](#resources)
  - [PHP 関連 Web サイト](#php-websites)
  - [PHP 書籍](#php-books)
  - [PHP 動画](#php-videos)
  - [PHP カンファレンス](#php-conferences)
  - [PHP ポッドキャスト](#php-podcasts)
  - [PHP ニュースレター](#php-newsletters)
  - [PHP の読み物](#php-reading)
  - [PHP 内部情報の読み物](#php-internals-reading)

### Composer リポジトリ
*Composer リポジトリ。*

* [Firegento](https://packages.firegento.com/) - Magento モジュール向けの Composer リポジトリ。
* [Packagist](https://packagist.org/) - PHP パッケージのリポジトリ。
* [Packalyst](https://packalyst.com/) - Laravel パッケージのリポジトリ。
* [Private Packagist](https://packagist.com/) - PHP 向け Composer パッケージアーカイブのサービス。
* [WordPress Packagist](https://wpackagist.org/) - Composer でプラグインを管理できます。

### 依存関係管理
*依存関係とパッケージを管理するためのライブラリ。*

* [Composer](https://getcomposer.org/) - パッケージと依存関係を管理するツール。
* [Composer Installers](https://github.com/composer/installers) - 複数のフレームワークに対応した Composer ライブラリインストーラー。
* [Phive](https://phar.io/) - PHAR マネージャー。
* [Pickle](https://github.com/FriendsOfPHP/pickle) - PHP 拡張機能インストーラー。
* [Pie](https://github.com/php/pie) - 拡張機能向けの公式 PHP インストーラー。

### 依存関係管理の補助ツール
*依存関係管理に関連する補助ツール。*

* [Composer Merge Plugin](https://github.com/wikimedia/composer-merge-plugin) - `composer.json` ファイルを複数マージする Composer プラグイン。
* [Composer Normalize](https://github.com/ergebnis/composer-normalize) - `composer.json` ファイルを正規化するプラグイン。
* [Composer Patches](https://github.com/cweagans/composer-patches) - Composer でパッチを適用するプラグイン。
* [Composer Prefer Lowest Validator](https://github.com/dereuromark/composer-prefer-lowest) - 最小バージョンの依存関係をインストールしてテストできるか確認するプラグイン。
* [Composer Require Checker](https://github.com/maglnet/ComposerRequireChecker) - パッケージの Composer 依存関係を分析し、ソース内で未知のシンボルが使われていないか検証する CLI ツール。
* [Composer Unused](https://github.com/composer-unused/composer-unused) - 未使用の Composer パッケージを調べる CLI ツール。
* [Repman](https://repman.io) - プライベート PHP パッケージリポジトリの管理ツール兼 Packagist プロキシ。
* [Satis](https://github.com/composer/satis) - 静的な Composer リポジトリの生成ツール。

### フレームワーク
*Web 開発フレームワーク。*

* [CakePHP](https://cakephp.org/) - 迅速なアプリケーション開発のためのフレームワーク。
* [CodeIgniter](https://codeigniter.com/) - 非常に軽量でありながら強力な PHP フレームワーク。
* [Ecotone](https://docs.ecotone.tech/) - DDD、CQRS、イベントソーシングの設計原則に基づく PHP 向けサービスバス。
* [Laminas](https://getlaminas.org/) - 個別のコンポーネントで構成されるフレームワーク（旧 Zend Framework）。
* [Laravel](https://laravel.com/) - 表現力豊かで洗練された構文を備えた Web アプリケーションフレームワーク。
* [Nette](https://nette.org) - 成熟したコンポーネントで構成される Web フレームワーク。
* [Phalcon](https://phalcon.io/en-us) - C 拡張機能として実装されたフレームワーク。
* [Spiral](https://spiral.dev/) - 高性能な PHP/Go フレームワーク。
* [Symfony](https://symfony.com/) - 再利用可能なコンポーネント群と Web フレームワーク。
* [Tempest](https://github.com/tempestphp/tempest-framework) - 開発の邪魔をしないフレームワーク。
* [Yii2](https://github.com/yiisoft/yii2/) - 高速、安全、効率的な Web フレームワーク。

### フレームワークの補助ツール
*Web 開発フレームワークに関連する補助ツール。*

* [CakePHP CRUD](https://github.com/friendsofcake/crud) - CakePHP 向けの迅速なアプリケーション開発（RAD）プラグイン。
* [Filament PHP](https://filamentphp.com/) - Laravel 向けの強力なオープンソース UI フレームワーク。
* [Inertia.js](https://inertiajs.com/) - サーバー側のルーティングとコントローラーを使い、別途 API を用意せずにシングルページアプリケーションを構築するためのアダプター。
* [LaravelS](https://github.com/hhxsv5/laravel-s) - Laravel/Lumen と Swoole をすぐに連携できるアダプター。
* [Livewire](https://livewire.laravel.com/) - PHP を離れずに、強力で動的なフロントエンド UI を構築できます。

### コンテンツ管理システム（CMS）
*デジタルコンテンツを管理するためのツール。*

* [Backdrop](https://backdropcms.org) - 小規模から中規模の企業や非営利団体を対象とする CMS（Drupal のフォーク）。
* [Concrete5](https://www.concretecms.com/) - 技術的な知識がほとんどないユーザーを対象とする CMS。
* [CraftCMS](https://github.com/craftcms/cms) - Web などで独自のデジタル体験を作るための、柔軟で使いやすい CMS。
* [Drupal](https://new.drupal.org/home) - エンタープライズ向け CMS。
* [Grav](https://github.com/getgrav/grav) - モダンなフラットファイル CMS。
* [Joomla](https://www.joomla.org/) - もう一つの主要な CMS。
* [Kirby](https://getkirby.com/) - あらゆるプロジェクトに適応するフラットファイル CMS。
* [Magento](https://github.com/magento/magento2) - 広く利用されているオープンソースの e コマースプラットフォーム。
* [Moodle](https://moodle.org/) - オープンソースの学習プラットフォーム。
* [OctoberCMS](https://octobercms.com/) - Laravel を基盤とする CMS。
* [OpenMage](https://github.com/OpenMage/magento-lts) - サポート終了した Magento 1 e コマースプラットフォームのフォーク。
* [Pico CMS](https://picocms.org/) - 軽量なフラットファイル CMS。
* [Silverstripe](https://www.silverstripe.org/) - シンプルで柔軟かつ安全な CMS。
* [Statamic](https://statamic.com/) - Laravel を基盤とする、フラットファイル型で Git ベースの CMS。
* [Sulu](https://sulu.io/) - ユーザーにも開発者にも使いやすい、Symfony Framework を基盤とする CMS。
* [TYPO3](https://typo3.org) - エンタープライズ向け CMS。
* [WinterCMS](https://wintercms.com) - Laravel を基盤とする、OctoberCMS のコミュニティ保守版フォーク。
* [WordPress](https://github.com/WordPress/WordPress) - ブログプラットフォーム兼 CMS。

### コンポーネント
*Web 開発フレームワークや開発グループが提供する、単独で使えるコンポーネント。*

* [Aura](https://auraphp.com/) - 互いに、またあらゆるフレームワークから完全に独立したコンポーネント。
* [CakePHP Plugins](https://plugins.cakephp.org/) - CakePHP プラグインの一覧。
* [Laminas Components](https://docs.laminas.dev/components/) - Laminas Framework を構成するコンポーネント。
* [Laravel Components](https://github.com/illuminate) - Laravel Framework のコンポーネント。
* [League of Extraordinary Packages](https://thephpleague.com/) - PHP パッケージ開発グループ。
* [Spatie Open Source](https://spatie.be/open-source) - オープンソースの PHP および Laravel パッケージ集。
* [Symfony Packages](https://symfony.com/packages) - PHP アプリケーション向けの疎結合ライブラリ。

### マイクロフレームワーク
*マイクロフレームワークとルーター。*

* [Laravel Zero](https://laravel-zero.com) - コンソールアプリケーション向けのマイクロフレームワーク。
* [Mezzio](https://getexpressive.org/) - Laminas が提供するマイクロフレームワーク。
* [Minicli](https://github.com/minicli/minicli) - CLI 中心の PHP アプリケーションを構築するための、依存関係のないミニマルなフレームワーク。
* [Silly](https://github.com/mnapoli/silly) - CLI アプリケーション向けのマイクロフレームワーク。
* [Slim](https://www.slimframework.com/) - シンプルなマイクロフレームワーク。

### マイクロフレームワークの補助ツール
*マイクロフレームワークとルーターに関連する補助ツール。*

* [Slim Skeleton](https://github.com/slimphp/Slim-Skeleton) - Slim のひな形。
* [Slim PHP View](https://github.com/slimphp/PHP-View) - Slim 向けのシンプルな PHP レンダラー。

### ルーター
*アプリケーションのルーティングを処理するライブラリ。*

* [Aura.Router](https://github.com/auraphp/Aura.Router) - 機能が充実したルーティングライブラリ。
* [Fast Route](https://github.com/nikic/FastRoute) - 高速なルーティングライブラリ。
* [Klein](https://github.com/klein/klein.php) - 柔軟なルーター。
* [Route](https://github.com/thephpleague/route) - Fast Route を基盤とするルーティングライブラリ。

### テンプレート
*テンプレート処理と字句解析のためのライブラリおよびツール。*

* [Latte](https://latte.nette.org/) - PHP 向けの、安全で直感的なテンプレート。
* [MtHaml](https://github.com/arnaud-lb/MtHaml) - HAML テンプレート言語の PHP 実装。
* [Mustache](https://github.com/bobthecow/mustache.php) - Mustache テンプレート言語の PHP 実装。
* [PHPTAL](https://phptal.org/) - [TAL](https://en.wikipedia.org/wiki/Template_Attribute_Language) テンプレート言語の PHP 実装。
* [Plates](https://platesphp.com/) - ネイティブ PHP のテンプレートライブラリ。
* [Smarty](https://www.smarty.net/) - PHP を補完するテンプレートエンジン。
* [Twig](https://twig.symfony.com/) - 包括的なテンプレート言語。

### 静的サイトジェネレーター
*コンテンツを事前処理して Web ページを生成するツール。*

* [Cecil](https://cecil.app/) - シンプルで強力なコンテンツ駆動型静的サイトジェネレーター。
* [Couscous](https://couscous.io) - Markdown ドキュメントを Web サイトに変換するツール。
* [Jigsaw](https://jigsaw.tighten.com/) - Laravel の Blade を使ってシンプルな静的サイトを構築できます。
* [Sculpin](https://sculpin.io) - Markdown と Twig を静的 HTML に変換するツール。

### HTTP
*HTTP を扱うためのライブラリ。*

* [Buzz](https://github.com/kriswallsmith/Buzz) - もう一つの HTTP クライアント。
* [Guzzle](https://github.com/guzzle/guzzle) - 包括的な HTTP クライアント。
* [HTTPlug](https://httplug.io) - 特定の実装に依存しない HTTP クライアント抽象化。
* [Nyholm PSR-7](https://github.com/Nyholm/psr7) - 非常に軽量な PSR-7 実装。厳格で高速です。
* [PHP VCR](https://php-vcr.github.io/) - HTTP リクエストを記録・再生するライブラリ。
* [Requests](https://github.com/WordPress/Requests) - シンプルな HTTP ライブラリ。
* [Retrofit](https://github.com/tebru/retrofit-php) - REST API クライアントの作成を容易にするライブラリ。
* [Saloon](https://github.com/saloonphp/saloon) - 美しい API 連携と SDK を構築するためのフレームワーク。
* [Symfony HTTP Client](https://github.com/symfony/http-client) - HTTP リソースを同期または非同期で取得するコンポーネント。
* [Laminas Diactoros](https://github.com/laminas/laminas-diactoros) - PSR-7 HTTP メッセージ実装。

### スクレイピング
*Web サイトのスクレイピングやクローラーの検出に使うライブラリ。*

* [Chrome PHP](https://github.com/chrome-php/chrome) - PHP からヘッドレス Chrome/Chromium のインスタンスを操作します。
* [CrawlerDetect](https://github.com/JayBizzle/Crawler-Detect) - ユーザーエージェントからボット、クローラー、スパイダーを検出する PHP クラス。
* [DiDOM](https://github.com/Imangazaliev/DiDOM) - 非常に高速な HTML スクレイパー兼パーサー。
* [Embed](https://github.com/php-embed/Embed) - あらゆる Web サービスやページから情報を抽出します。
* [PHP Spider](https://github.com/mvdbos/php-spider) - 設定可能で拡張性の高い PHP Web スパイダー。
* [Symfony Panther](https://github.com/symfony/panther) - PHP および Symfony 向けのブラウザーテスト・Web クローリングライブラリ。

### ミドルウェア
*ミドルウェアを使ったアプリケーション構築のためのライブラリ。*

* [PSR-15 Middlewares](https://github.com/middlewares/psr15-middlewares) - 便利なミドルウェアを集めた、着想を得られるコレクション。
* [Stack](https://github.com/stackphp) - Symfony 向けの、連結可能なミドルウェアライブラリ。
* [Laminas Stratigility](https://github.com/laminas/laminas-stratigility) - PSR-7 を基盤とする PHP ミドルウェア。

### URL
*URL を解析するライブラリ。*

* [PHP Domain Parser](https://github.com/jeremykendall/php-domain-parser) - ドメインサフィックス解析ライブラリ。
* [sabre/uri](https://github.com/sabre-io/uri) - 関数型の URI 操作ライブラリ。
* [Uri](https://github.com/thephpleague/uri) - もう一つの URL 操作ライブラリ。

### メール
*メールの送信と解析に使うライブラリ。*

* [CssToInlineStyles](https://github.com/tijsverkoyen/CssToInlineStyles) - メールテンプレート内に CSS をインライン化するライブラリ。
* [ddeboer/imap](https://github.com/ddeboer/imap) - オブジェクト指向で、十分にテストされた PHP IMAP ライブラリ。
* [Email Reply Parser](https://github.com/willdurand/EmailReplyParser) - メール返信解析ライブラリ。
* [Fetch](https://github.com/tedious/Fetch) - IMAP ライブラリ。
* [Mautic](https://github.com/mautic/mautic) - メールマーケティングの自動化。
* [PHPMailer](https://github.com/PHPMailer/PHPMailer) - もう一つのメール送信ソリューション。
* [Stampie](https://github.com/Stampie/Stampie) - [SendGrid](https://www.twilio.com/en-us/sendgrid)、[PostMark](https://postmarkapp.com)、[MailGun](https://www.mailgun.com/)、[MailChimp](https://mailchimp.com/features/transactional-email/) などのメールサービス向けライブラリ。
* [Symfony Mailer](https://github.com/symfony/mailer) - メールの作成と送信に使える強力なライブラリ。

### ファイル
*ファイル操作と MIME タイプ検出のためのライブラリ。*

* [CSV](https://github.com/thephpleague/csv) - CSV データ操作ライブラリ。
* [Flysystem](https://github.com/thephpleague/Flysystem) - ローカルおよびリモートのファイルシステムを抽象化します。
* [Gaufrette](https://github.com/KnpLabs/Gaufrette) - ファイルシステム抽象化レイヤー。
* [PHP FFmpeg](https://github.com/PHP-FFmpeg/PHP-FFmpeg/) - [FFmpeg](https://www.ffmpeg.org/) 動画ライブラリのラッパー。
* [UnifiedArchive](https://github.com/wapmorgan/UnifiedArchive) - 圧縮アーカイブを読み書きする統合ライブラリ。
* [Parquet](https://github.com/flow-php/parquet) - Parquet ファイル形式の PHP 実装。

### ストリーム
*ストリームを扱うためのライブラリ。*

* [ByteStream](https://amphp.org/byte-stream) - 非同期ストリームの抽象化。

### 依存性注入
*依存性注入パターンを実装するライブラリ。*

* [Aura.Di](https://github.com/auraphp/Aura.Di) - シリアライズ可能な依存性注入コンテナ。コンストラクター注入とセッター注入、インターフェースとトレイトの認識、設定の継承などに対応します。
* [Acclimate](https://github.com/AcclimateContainer/acclimate-container) - 依存性注入コンテナとサービスロケーターに共通のインターフェースを提供します。
* [Auryn](https://github.com/rdlowrey/Auryn) - 再帰的な依存性注入ツール。
* [Container](https://github.com/thephpleague/container) - もう一つの柔軟な依存性注入コンテナ。
* [Disco](https://github.com/bitExpert/disco) - アノテーションベースで PSR-11 に準拠した依存性注入コンテナ。
* [PHP-DI](https://php-di.org/) - オートワイヤリングに対応する依存性注入コンテナ。
* [Pimple](https://github.com/silexphp/Pimple) - 小さな依存性注入コンテナ。
* [Symfony DI](https://github.com/symfony/dependency-injection) - 依存性注入コンテナコンポーネント。

### 画像
*画像操作のためのライブラリ。*

* [Color Extractor](https://github.com/thephpleague/color-extractor) - 画像から色を抽出するライブラリ。
* [Glide](https://github.com/thephpleague/glide) - オンデマンドの画像操作ライブラリ。
* [Image Hash](https://github.com/jenssegers/imagehash) - 知覚的画像ハッシュを生成するライブラリ。
* [Image Optimizer](https://github.com/psliwa/image-optimizer) - 画像を最適化するライブラリ。
* [Imagine](https://imagine.readthedocs.io/en/latest/index.html) - 画像操作ライブラリ。
* [Intervention Image](https://github.com/Intervention/image) - もう一つの画像操作ライブラリ。
* [PHP Image Workshop](https://github.com/Sybio/ImageWorkshop) - もう一つの画像操作ライブラリ。
* [PHP QR Code](https://github.com/chillerlan/php-qrcode/) - QR コードの生成・読み取りツール。

### テスト
*コードベースのテストとテストデータ生成のためのライブラリ。*

* [Alice](https://github.com/nelmio/alice) - 表現力豊かなフィクスチャ生成ライブラリ。
* [Behat](https://docs.behat.org/en/latest/) - ビヘイビア駆動開発（BDD）向けテストフレームワーク。
* [Codeception](https://github.com/Codeception/Codeception) - フルスタックのテストフレームワーク。
* [Faker](https://github.com/fakerphp/faker) - フェイクデータ生成ライブラリ。
* [Foundry](https://github.com/zenstruck/foundry) - Doctrine 向けフィクスチャファクトリー生成ライブラリ。
* [Infection](https://github.com/infection/infection) - AST ベースの PHP ミューテーションテストフレームワーク。
* [Kahlan](https://github.com/kahlan/kahlan) - スタブ、モック、コードカバレッジ機能を内蔵したフルスタックの単体テスト／BDD フレームワーク。
* [Mink](https://mink.behat.org/en/latest/) - Web 受け入れテスト。
* [Mockery](https://github.com/mockery/mockery) - テスト用モックオブジェクトライブラリ。
* [Nette Tester](https://github.com/nette/tester) - 生産性が高く、使いやすい並列単体テストフレームワーク。
* [ParaTest](https://github.com/paratestphp/paratest) - PHPUnit 向け並列テストライブラリ。
* [Pest](https://pestphp.com/) - シンプルさを重視したテストフレームワーク。
* [Phake](https://github.com/phake/phake) - もう一つのテスト用モックオブジェクトライブラリ。
* [PHP-Mock](https://github.com/php-mock/php-mock) - PHP 組み込み関数（例: time()）向けのモックライブラリ。
* [PHP MySQL Engine](https://github.com/vimeo/php-mysql-engine) - 純粋な PHP で書かれた MySQL エンジン。
* [PHPSpec](https://github.com/phpspec/phpspec) - 仕様による設計（Design by Specification）に基づく単体テストライブラリ。
* [PHPT](https://php.github.io/php-src/miscellaneous/writing-tests.html) - PHP 自体で使われているテストツール。
* [PHPUnit](https://github.com/sebastianbergmann/phpunit) - 単体テストフレームワーク。
* [PHPUnit Polyfills](https://github.com/Yoast/PHPUnit-Polyfills/) - 複数の PHPUnit バージョンでテストを簡単に実行できます。
* [Prophecy](https://github.com/phpspec/prophecy) - 独自の強い流儀を持つモックフレームワーク。
* [VFS Stream](https://github.com/bovigo/vfsStream) - テスト用の仮想ファイルシステム・ストリームラッパー。

### 継続的インテグレーション
*継続的インテグレーション向けのライブラリとアプリケーション。*

* [CircleCI](https://circleci.com) - 継続的インテグレーションプラットフォーム。
* [GitLab CI](https://about.gitlab.com/solutions/continuous-integration/) - 継続的インテグレーションプラットフォーム。
* [Jenkins](https://www.jenkins.io/) - [PHP に対応](https://www.jenkins.io/solutions/php/)した継続的インテグレーションプラットフォーム。
* [SemaphoreCI](https://semaphore.io/) - オープンソースおよびプライベートプロジェクト向けの継続的インテグレーションプラットフォーム。
* [Travis CI](https://www.travis-ci.com) - 継続的インテグレーションプラットフォーム。
* [Setup PHP](https://github.com/shivammathur/setup-php) - PHP 向け GitHub Action。

### ドキュメント
*プロジェクトドキュメントを生成するライブラリ。*

* [APIGen](https://github.com/apigen/apigen) - もう一つの API ドキュメント生成ツール。
* [daux.io](https://github.com/dauxio/daux.io) - Markdown ファイルを使うドキュメント生成ツール。
* [phpDocumentor](https://phpdoc.org/) - ドキュメント生成ツール。
* [Scramble](https://github.com/dedoc/scramble) - アノテーションなしで、コードから OpenAPI ドキュメントを自動生成します。
* [zircote/swagger-php](https://github.com/zircote/swagger-php) - RESTful API 向けの OpenAPI ドキュメントを生成します。

### セキュリティ
*安全な乱数の生成、データの暗号化、脆弱性のスキャンやテストを行うライブラリ。*

* [AntiXSS](https://github.com/voku/anti-xss) - ブラックリスト方式でクロスサイトスクリプティング（XSS）攻撃の防止を試みるライブラリ。
* [Halite](https://paragonie.com/project/halite) - [libsodium](https://github.com/jedisct1/libsodium) を使った暗号化のためのシンプルなライブラリ。
* [Optimus](https://github.com/jenssegers/optimus) - Knuth の乗法ハッシュ法に基づく ID 難読化ツール。
* [OWASP](https://owasp.org/) - サイバーセキュリティの世界を探求するための情報源。
* [PHPGGC](https://github.com/ambionics/phpggc) - PHP のデシリアライズ可能なペイロード集と、その生成ツール。
* [PHP Encryption](https://github.com/defuse/php-encryption) - 安全な PHP 暗号化ライブラリ。
* [PHPSecLib](https://github.com/phpseclib/phpseclib) - 純粋な PHP によるセキュア通信ライブラリ。
* [Roave Security Advisories](https://github.com/Roave/SecurityAdvisories) - 既知のセキュリティ脆弱性がある依存関係をアプリケーションにインストールできないようにします。
* [Secure Headers](https://github.com/BePsvPT/secure-headers) - HTTP レスポンスにセキュリティ関連ヘッダーを追加するパッケージ。
* [SQLMap](https://github.com/sqlmapproject/sqlmap) - SQL インジェクションとデータベース乗っ取りを自動的に試みるツール。
* [Zap](https://github.com/zaproxy/zaproxy) - Web アプリケーション向け統合ペネトレーションテストツール。

### パスワード
*パスワードの取り扱いと保存に使うライブラリおよびツール。*

* [GenPhrase](https://github.com/timoh6/GenPhrase) - 安全なランダムパスフレーズを生成するライブラリ。
* [Password Validator](https://github.com/jeremykendall/password-validator) - パスワードの検証とハッシュの更新を行うライブラリ。
* [Password-Generator](https://github.com/hackzilla/password-generator) - ランダムパスワードを生成する PHP ライブラリ。
* [phpass](https://www.openwall.com/phpass/) - 移植性の高いパスワードハッシュ化フレームワーク。
* [Zxcvbn PHP](https://github.com/bjeavons/zxcvbn-php) - Zxcvbn JS を基にした、現実的な PHP パスワード強度推定ライブラリ。

### コード解析
*コードベースの解析、パース、操作を行うライブラリとツール。*

* [Better Reflection](https://github.com/Roave/BetterReflection) - コードの解析と操作ができる AST ベースのリフレクションライブラリ。
* [Bladestan](https://github.com/bladestan/bladestan) - Blade テンプレートの静的解析を行う PHPStan 拡張機能。
* [Code Climate](https://codeclimate.com) - 自動コードレビュー。
* [Editorconfig-Checker](https://github.com/editorconfig-checker/editorconfig-checker.php) - ファイルが `.editorconfig` のルールに従っているか検証するコマンドラインツール。
* [GrumPHP](https://github.com/phpro/grumphp) - PHP コード品質ツール。
* [PHP AST Viewer](https://php-ast-viewer.com/) - PHP コードの抽象構文木を閲覧するツール。
* [PHP Magic Number Detector](https://github.com/povils/phpmnd) - コード内のマジックナンバーを検出するライブラリ。
* [PHP Parser](https://github.com/nikic/PHP-Parser) - PHP で書かれた PHP パーサー。
* [PHP Semantic Versioning Checker](https://github.com/tomzx/php-semver-checker) - 2 つのソース一式を比較し、適用すべきセマンティックバージョニングを判断するコマンドラインツール。
* [Phpactor](https://github.com/phpactor/phpactor) - PHP の補完、リファクタリング、イントロスペクションを行うツール。
* [PHPQA](https://github.com/EdgedesignCZ/phpqa) - QA ツール（phploc、phpcpd、phpcs、pdepend、phpmd、phpmetrics）を実行するツール。
* [Rector](https://github.com/rectorphp/rector) - コードのアップグレードとリファクタリングを行うツール。
* [Scrutinizer](https://scrutinizer-ci.com/) - [PHP コードを解析](https://github.com/scrutinizer-ci/php-analyzer)する Web ツール。
* [UBench](https://github.com/devster/ubench) - シンプルなマイクロベンチマークライブラリ。

### コード品質
*コード品質の管理、フォーマット、Lint に使うライブラリ。*

* [CaptainHook](https://github.com/captainhook-git/captainhook) - 使いやすく柔軟な Git フックライブラリ。
* [Laravel Pint](https://github.com/laravel/pint) - Laravel 向けコーディング規約修正ライブラリ。
* [PHP CodeSniffer](https://github.com/PHPCSStandards/PHP_CodeSniffer) - PHP、CSS、JS のコーディング規約違反を検出し、自動修正もできるライブラリ。
* [PHP CS Fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) - コーディング規約修正ライブラリ。
* [PHP CS Fixer Configurator](https://mlocati.github.io/php-cs-fixer-configurator/) - PHP CS Fixer のルールセット設定を支援する Web アプリケーション。
* [PHP Mess Detector](https://github.com/phpmd/phpmd) - バグ、品質の低いコード、未使用パラメーターなどをコードから検出するライブラリ。
* [PHPCheckstyle](https://github.com/PHPCheckstyle/phpcheckstyle) - 特定のコーディング規約への準拠を支援するツール。

### 静的解析
*PHP コードの静的解析を行うライブラリ。*

* [Dead Code Detector](https://github.com/shipmonk-rnd/dead-code-detector) - 未使用の PHP コードを検出する PHPStan 拡張機能。
* [Deptrac](https://github.com/deptrac/deptrac) - アーキテクチャ層間の依存関係ルールを適用する静的解析ツール。
* [Exakat](https://github.com/exakat/exakat) - PHP 向け静的解析エンジン。
* [Larastan](https://github.com/larastan/larastan) - Laravel プロジェクトに静的解析機能を追加する PHPStan ラッパー。
* [Mago](https://github.com/carthage-software/mago) - 開発者体験の向上を目指す PHP ツールチェーン。
* [phan](https://github.com/phan/phan) - PHP 7 以降と php-ast 拡張機能を基盤とする静的解析ツール。
* [PHP Architecture Tester](https://github.com/carlosas/phpat) - 使いやすい PHP 向けアーキテクチャテストツール。
* [PHPCompatibility](https://github.com/PHPCompatibility/PHPCompatibility) - PHP CodeSniffer 用の PHP 互換性チェッカー。
* [PHPDoc Parser](https://github.com/phpstan/phpdoc-parser) - 共用体型とジェネリクスに対応する次世代の phpDoc パーサー。
* [PHP Metrics](https://github.com/phpmetrics/PhpMetrics) - 静的メトリクスライブラリ。
* [PHPStan](https://github.com/phpstan/phpstan) - PHP 静的解析ツール。
* [Psalm](https://github.com/vimeo/psalm) - PHP アプリケーションのエラーを検出する静的解析ツール。

### アーキテクチャ
*デザインパターン、プログラミング手法、コード構成に関するライブラリ。*

* [Design Patterns PHP](https://github.com/DesignPatternsPHP/DesignPatternsPHP) - PHP で実装されたソフトウェアパターンのリポジトリ。
* [Finite](https://github.com/yohang/Finite) - シンプルな PHP 有限状態機械。
* [Functional PHP](https://github.com/lstrojny/functional-php) - 関数型プログラミングライブラリ。
* [Iter](https://github.com/nikic/iter) - ジェネレーターを使って反復処理のプリミティブを提供するライブラリ。
* [IterTools PHP](https://github.com/markrogoyski/itertools-php) - 反復可能なデータを扱う機能を提供するライブラリ（Python の itertools に相当）。
* [Pipeline](https://github.com/thephpleague/pipeline) - パイプラインパターンの実装。
* [Porter](https://github.com/ScriptFUSION/Porter) - Web API などのデータソースを利用するためのデータインポート抽象化ライブラリ。
* [RulerZ](https://github.com/K-Phoen/rulerz) - 仕様パターンを実装した強力なルールエンジン。

### デバッグとプロファイリング
*エラーのデバッグとコードのプロファイリングに使うライブラリとツール。*

* [APM](https://pecl.php.net/package/APM) - エラーと統計情報を SQLite/MySQL/StatsD に収集する監視拡張機能。
* [Barbushin PHP Console](https://github.com/barbushin/php-console) - Google Chrome を使う、もう一つの Web デバッグコンソール。
* [Kint](https://github.com/kint-php/kint) - デバッグとプロファイリングのためのツール。
* [LaraDumps](https://github.com/laradumps/laradumps) - 専用デスクトップアプリケーションを備えた Laravel 向けデバッグツール。
* [Metrics](https://github.com/beberlei/metrics) - シンプルなメトリクス API ライブラリ。
* [PCOV](https://github.com/krakjoe/pcov) - 自己完結型で、コードカバレッジドライバーと互換性があります。
* [PHP Console](https://github.com/Seldaek/php-console) - Web デバッグコンソール。
* [PHP Debug Bar](https://php-debugbar.com/) - デバッグ用ツールバー。
* [PHPBench](https://github.com/phpbench/phpbench) - ベンチマークフレームワーク。
* [PHPSpy](https://github.com/adsr/phpspy) - オーバーヘッドの小さいサンプリングプロファイラー。
* [Symfony VarDumper](https://github.com/symfony/var-dumper) - 変数ダンパーコンポーネント。
* [Tracy](https://github.com/nette/tracy) - シンプルなエラー検出、ログ記録、時間計測ライブラリ。
* [Trap](https://github.com/buggregator/trap) - Web インターフェースと IDE プラグインを備えた拡張変数ダンパー。
* [Whoops](https://github.com/filp/whoops) - 見やすいエラーハンドリングライブラリ。
* [xDebug](https://github.com/xdebug/xdebug) - PHP 向けデバッグ・プロファイリングツール。
* [XHProf](https://github.com/phacility/xhprof) - Facebook が開発したプロファイリングツール。
* [Z-Ray](https://www.zend.com/products/z-ray) - Zend Server 向けデバッグ・プロファイリングツール。

### エラー追跡・監視サービス
*セルフホスト型またはクラウド型のアプリケーションパフォーマンス監視・エラー追跡ツール。*

* [Blackfire](https://www.blackfire.io) - オーバーヘッドの小さいコードプロファイラー。
* [Buggregator](https://buggregator.dev) - var-dump、プロファイリングデータ、メール、ログ、Sentry イベントを集約するデバッグサーバー。
* [BugSnag](https://www.bugsnag.com/) - エラー監視と実ユーザー監視。
* [Honeybadger](https://www.honeybadger.io/) - 開発者向けエラー追跡・アプリケーション監視サービス。
* [Rollbar](https://rollbar.com/) - ソフトウェアチーム向けエラーログ記録・追跡サービス。
* [Sentry](https://sentry.io/welcome/) - アプリケーションパフォーマンス監視・エラー追跡ソフトウェア。
* [Tideways](https://tideways.com/) - 監視・プロファイリングツール。

### ビルドツール
*プロジェクトのビルドと自動化のためのツール。*

* [Box](https://github.com/box-project/box) - PHAR ファイルをビルドするユーティリティ。
* [PHPacker](https://github.com/phpacker/phpacker) - PHP アプリケーションをスタンドアロン実行ファイルにコンパイルする PHAR ビルダー。
* [Phing](https://www.phing.info/) - Apache Ant に着想を得た PHP プロジェクトビルドシステム。
* [RMT](https://github.com/liip/RMT) - ソフトウェアのバージョン管理とリリースを行うライブラリ。

### タスクランナー
*タスクを自動化・実行するライブラリ。*

* [Jobby](https://github.com/jobbyphp/jobby) - crontab を変更せずに使える PHP cron ジョブマネージャー。
* [Robo](https://github.com/consolidation/Robo) - オブジェクト指向の設定を備えた PHP タスクランナー。

### ナビゲーション
*ナビゲーション構造を構築するツール。*

* [KnpMenu](https://github.com/KnpLabs/KnpMenu) - メニューライブラリ。
* [Menu](https://github.com/spatie/menu) - 流れるようなインターフェースを備えた柔軟なメニューライブラリ。

### アセット管理
*Web サイトのアセットを管理、圧縮、最小化するツール。*

* [JShrink](https://github.com/tedious/JShrink) - JavaScript の最小化ライブラリ。
* [Laravel Mix](https://github.com/laravel-mix/laravel-mix) - 一般的なユースケースの大部分をカバーする、Webpack 用の洗練されたラッパー。
* [Symfony Asset](https://github.com/symfony/asset) - Web アセットの URL 生成とバージョン管理を行います。
* [Symfony Encore](https://github.com/symfony/webpack-encore) - Webpack を基盤に、アセットを処理・コンパイルするシンプルで強力な API。

### 位置情報
*住所のジオコーディングや緯度・経度の扱いに使うライブラリ。*

* [Country List](https://github.com/umpirsky/country-list) - 国名と ISO 3166-1 コードを収録した全世界の国一覧。
* [GeoCoder](https://geocoder-php.org/) - ジオコーディングライブラリ。
* [GeoJSON](https://github.com/jmikola/geojson) - GeoJSON の実装。
* [GeoTools](https://github.com/thephpleague/geotools) - 地理情報関連ツールのライブラリ。
* [PHPGeo](https://github.com/mjaschen/phpgeo) - シンプルな地理情報ライブラリ。

### 日付と時刻
*日付と時刻を扱うためのライブラリ。*

* [Business Time](https://github.com/kylekatarnls/business-time) - 営業時間と営業日を扱うための Carbon 拡張機能。
* [CalendR](https://github.com/yohang/CalendR) - カレンダー管理ライブラリ。
* [Carbon](https://github.com/briannesbitt/Carbon) - シンプルな DateTime API 拡張機能。
* [Chronos](https://github.com/cakephp/chronos) - 可変・不変の両方の日付／時刻を扱える DateTime API 拡張機能。
* [Moment.php](https://github.com/fightbulc/moment.php) - Moment.js に着想を得た、i18n 対応の PHP DateTime ハンドラー。
* [PHP RRule](https://github.com/rlanvin/php-rrule) - iCalendar RRule 仕様に基づいて繰り返し日付・時刻を扱うライブラリ。
* [Yasumi](https://github.com/azuyalabs/yasumi) - 祝日の日付と名称の計算を支援するライブラリ。

### イベント
*イベント駆動型、またはノンブロッキングのイベントループを実装するライブラリ。*

* [Amp](https://github.com/amphp/amp) - イベント駆動型のノンブロッキング I/O ライブラリ。
* [Broadway](https://github.com/broadway/broadway) - イベントソーシングと CQRS のライブラリ。
* [CakePHP Event](https://github.com/cakephp/event) - イベントディスパッチャーライブラリ。
* [Elephant.io](https://github.com/ElephantIO/elephant.io) - もう一つの WebSocket ライブラリ。
* [Evenement](https://github.com/igorw/evenement) - イベントディスパッチャーライブラリ。
* [Event](https://github.com/thephpleague/event) - ドメインイベントを重視したイベントライブラリ。
* [Fast CGI Client](https://github.com/hollodotme/fast-cgi-client) - php-fpm ソケット経由で同期／非同期リクエストを送信するクライアント。
* [FrankenPHP](https://frankenphp.dev/) - Go で書かれたモダンな PHP アプリケーションサーバー。
* [Pawl](https://github.com/ratchetphp/Pawl) - 非同期 WebSocket クライアント。
* [Prooph Event Store](https://github.com/prooph/event-store) - イベントメッセージを永続化するイベントソーシングコンポーネント。
* [PHP Defer](https://github.com/php-defer/php-defer) - PHP で Go の defer 文を実現します。
* [Ratchet](https://github.com/ratchetphp/Ratchet) - WebSocket ライブラリ。
* [ReactPHP](https://github.com/reactphp/reactphp) - イベント駆動型のノンブロッキング I/O ライブラリ。
* [RxPHP](https://github.com/ReactiveX/RxPHP) - リアクティブ拡張ライブラリ。
* [Swoole](https://github.com/swoole/swoole-src) - C で書かれた、高性能なイベント駆動型・非同期・並行ネットワーク通信フレームワーク。
* [Workerman](https://github.com/walkor/Workerman) - イベント駆動型のノンブロッキング I/O ライブラリ。

### ログ記録
*ログファイルの生成と操作を行うライブラリ。*

* [Monolog](https://github.com/Seldaek/monolog) - 包括的なロガー。

### e コマース
*決済処理とオンライン e コマースストアの構築に使うライブラリおよびアプリケーション。*

* [Money](https://github.com/moneyphp/money) - Fowler の Money パターンを PHP で実装したライブラリ。
* [Brick Money](https://github.com/brick/money) - コンテキスト、現金端数処理、通貨換算に対応する PHP 向け金額ライブラリ。
* [OmniPay](https://github.com/thephpleague/omnipay) - 特定のフレームワークに依存しない、複数ゲートウェイ対応の決済処理ライブラリ。
* [Payum](https://github.com/payum/payum) - 決済抽象化ライブラリ。
* [Shopsys Framework](https://github.com/shopsys/shopsys/) - 社内開発チーム向けのオープンソース e コマースプラットフォーム。
* [Shopware](https://github.com/shopware/shopware) - 高度にカスタマイズ可能な e コマースソフトウェア。
* [Swap](https://github.com/florianv/swap) - 為替レートライブラリ。
* [Sylius](https://sylius.com/) - オープンソースの e コマースソリューション。

### PDF
*PDF ファイルを扱うライブラリとソフトウェア。*

* [Browsershot](https://github.com/spatie/browsershot) - HTML を画像、PDF、または文字列に変換します。
* [Dompdf](https://github.com/dompdf/dompdf) - HTML から PDF への変換ツール。
* [Gotenberg](https://github.com/gotenberg/gotenberg-php) - Gotenberg と連携するための PHP クライアント。
* [Snappy](https://github.com/KnpLabs/snappy) - PDF・画像生成ライブラリ。
* [TCPDF](https://tcpdf.org/) - PDF ドキュメントを生成するオープンソース PHP クラス。

### オフィス
*オフィススイートのドキュメントを扱うライブラリ。*

* [PHPPowerPoint](https://github.com/PHPOffice/PHPPresentation) - Microsoft PowerPoint プレゼンテーションを扱うライブラリ。
* [PHPWord](https://github.com/PHPOffice/PHPWord) - Microsoft Word ドキュメントを扱うライブラリ。
* [PHPSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet) - スプレッドシートファイルの読み書きを行う純粋な PHP ライブラリ（PHPExcel の後継）。
* [OpenSpout](https://github.com/openspout/openspout) - スプレッドシート（CSV、XLSX、ODS）を高速かつスケーラブルに読み書きする PHP ライブラリ `box/spout` のコミュニティ主導フォーク。

### データベース
*オブジェクト関係マッピング（ORM）やデータマッピングの手法でデータベースを操作するライブラリ。*

* [Atlas.Orm](https://github.com/atlasphp/Atlas.Orm) - PHP の永続化モデル向けデータマッパー実装。
* [Aura.Sql](https://github.com/auraphp/Aura.Sql) - ネイティブ PDO を拡張し、プロファイラーと接続ロケーターも提供します。
* [Aura.SqlQuery](https://github.com/auraphp/Aura.SqlQuery) - MySQL、PostgreSQL、SQLite、Microsoft SQL Server 向けの独立したクエリビルダー。
* [Baum](https://github.com/etrepat/baum) - Eloquent 向けのネストセット実装。
* [CakePHP ORM](https://github.com/cakephp/orm) - DataMapper パターンで実装されたオブジェクト関係マッパー。
* [Cycle ORM](https://github.com/cycle/orm) - PHP のデータマッパー／ORM。
* [Doctrine Extensions](https://github.com/doctrine-extensions/DoctrineExtensions) - Doctrine の振る舞いを拡張する機能集。
* [Doctrine](https://www.doctrine-project.org/) - 包括的な DBAL と ORM。
* [Laravel Eloquent](https://github.com/illuminate/database) - シンプルな ORM。
* [ProxyManager](https://github.com/Ocramius/ProxyManager) - データマッパー向けのプロキシオブジェクトを生成するユーティリティ集。
* [RedBean](https://redbeanphp.com/index.php) - 設定不要の軽量 ORM。
* [Slimdump](https://github.com/webfactory/slimdump) - MySQL 用の使いやすいダンプツール。
* [Spot2](https://github.com/spotorm/spot2) - MySQL のデータマッパー ORM。

### マイグレーション
*データベーススキーマとマイグレーションの管理を支援するライブラリ。*

* [Doctrine Migrations](https://www.doctrine-project.org/projects/migrations.html) - Doctrine 向けマイグレーションライブラリ。
* [Phinx](https://github.com/cakephp/phinx) - もう一つのデータベースマイグレーションライブラリ。
* [PHPMig](https://github.com/davedevelopment/phpmig) - もう一つのマイグレーション管理ライブラリ。
* [Ruckusing](https://github.com/ruckus/ruckusing-migrations) - ActiveRecord Migrations 風の PHP データベースマイグレーション。MySQL、Postgres、SQLite に対応します。

### NoSQL
*「NoSQL」バックエンドを扱うライブラリ。*

* [MongoDB](https://github.com/mongodb/mongo-php-driver) - MongoDB PHP ドライバー。
* [MongoDB PHP Library](https://github.com/mongodb/mongo-php-library) - MongoDB PHP ドライバー上に構築された、公式の高水準 MongoDB PHP ライブラリ。
* [Predis](https://github.com/predis/predis) - 機能が充実した Redis ライブラリ。

### キュー
*イベントキューやタスクキューを扱うライブラリ。*

* [BunnyPHP](https://github.com/jakubkulhan/bunny) - 高性能な純粋 PHP 製 AMQP（RabbitMQ）ライブラリ。同期処理と、ReactPHP を使った非同期処理に対応します。
* [Pheanstalk](https://github.com/pheanstalk/pheanstalk) - Beanstalkd クライアントライブラリ。
* [PHP AMQP](https://github.com/php-amqplib/php-amqplib) - 純粋な PHP 製 AMQP ライブラリ。
* [Tarantool Queue](https://github.com/tarantool-php/queue) - Tarantool Queue 用 PHP バインディング。
* [Thumper](https://github.com/php-amqplib/Thumper) - RabbitMQ パターンライブラリ。
* [Enqueue](https://github.com/php-enqueue/enqueue-dev) - RabbitMQ、AMQP、STOMP、Amazon SQS、Redis、Doctrine トランスポートに対応する PHP メッセージキューパッケージ。

### 検索
*データのインデックス作成と検索クエリの実行に使うライブラリおよびソフトウェア。*

* [Elastica](https://github.com/ruflin/Elastica) - ElasticSearch 向けクライアントライブラリ。
* [ElasticSearch PHP](https://github.com/elastic/elasticsearch-php) - [ElasticSearch](https://www.elastic.co/) の公式クライアントライブラリ。
* [Solarium](https://www.solarium-project.org/) - [Solr](https://solr.apache.org/) のクライアントライブラリ。
* [SphinxQL Query Builder](https://foolcode.github.io/SphinxQL-Query-Builder/) - [Sphinx](https://sphinxsearch.com/) および [Manticore](https://manticoresearch.com/) 検索エンジン向けクエリライブラリ。

### コマンドライン
*コマンドライン関連のライブラリ。*

* [Aura.Cli](https://github.com/auraphp/Aura.Cli) - コマンドラインインターフェース向けに、リクエスト（Context）とレスポンス（Stdio）に相当するオブジェクトを提供します。Getopt に対応し、コマンドの説明に使う独立した Help オブジェクトも備えています。
* [CLI Menu](https://github.com/php-school/cli-menu) - CLI メニューを構築するライブラリ。
* [CLIFramework](https://github.com/c9s/CLIFramework) - zsh/bash の補完生成、サブコマンド、オプション制約に対応するコマンドラインフレームワーク。phpbrew でも使われています。
* [CLImate](https://github.com/thephpleague/climate) - 色や特殊な書式を出力するライブラリ。
* [Commando](https://github.com/nategood/commando) - もう一つのシンプルなコマンドラインオプションパーサー。
* [Cron Expression](https://github.com/mtdowling/cron-expression) - cron の実行日を計算するライブラリ。
* [GetOpt](https://github.com/getopt-php/getopt-php) - コマンドラインオプションパーサー。
* [GetOptionKit](https://github.com/c9s/GetOptionKit) - もう一つのコマンドラインオプションパーサー。
* [PsySH](https://github.com/bobthecow/psysh) - もう一つの PHP REPL。
* [ShellWrap](https://github.com/MrRio/shellwrap) - シンプルなコマンドラインラッパーライブラリ。

### 認証と認可
*ユーザー認証と認可を実装するためのライブラリ。*

* [Aura.Auth](https://github.com/auraphp/Aura.Auth) - さまざまなアダプターを使った認証機能とセッション追跡を提供します。
* [SocialConnect Auth](https://github.com/socialConnect/auth) - オープンソースのソーシャルログイン（OAuth1／OAuth2／OpenID／OpenID Connect）。
* [Json Web Token](https://github.com/lcobucci/jwt) - 認証と情報伝達に使う JSON トークン。
* [OAuth 1.0 Client](https://github.com/thephpleague/oauth1-client) - OAuth 1.0 クライアントライブラリ。
* [OAuth 2.0 Client](https://github.com/thephpleague/oauth2-client) - OAuth 2.0 クライアントライブラリ。
* [OAuth2 Server](https://bshaffer.github.io/oauth2-server-php-docs/) - もう一つの OAuth2 サーバー実装。
* [OAuth2 Server](https://oauth2.thephpleague.com/) - OAuth2 認証サーバー、リソースサーバー、クライアントライブラリ。
* [Paseto](https://github.com/paragonie/paseto) - プラットフォームに依存しないセキュリティトークン。
* [PHP oAuthLib](https://github.com/daviddesberg/PHPoAuthLib) - もう一つの OAuth ライブラリ。
* [TwitterOAuth](https://github.com/abraham/twitteroauth) - Twitter OAuth ライブラリ。

### マークアップと CSS
*マークアップ形式と CSS 形式を扱うライブラリ。*

* [Carve](https://github.com/markup-carve/carve-php) - Markdown と Djot を基にした軽量マークアップ言語 [Carve](https://markup-carve.github.io/carve/) の PHP パーサー。
* [Cebe Markdown](https://github.com/cebe/markdown) - 高速で拡張性の高い Markdown パーサー。
* [CommonMark PHP](https://github.com/thephpleague/commonmark) - [CommonMark 仕様](https://spec.commonmark.org/)を完全にサポートする、高い拡張性を備えた Markdown パーサー。
* [Decoda](https://github.com/milesj/decoda) - 軽量なマークアップパーサーライブラリ。
* [Djot](https://github.com/php-collective/djot-php) - 現代的な軽量マークアップ言語（Markdown の後継）である [Djot](https://djot.net/) の PHP パーサー。
* [Essence](https://github.com/essence/essence) - Web メディアを抽出するライブラリ。
* [Embera](https://github.com/mpratt/Embera) - oEmbed コンシューマーライブラリ。
* [HTML to Markdown](https://github.com/thephpleague/html-to-markdown) - HTML を Markdown に変換します。
* [HTML5 PHP](https://github.com/Masterminds/html5-php) - HTML5 パーサー兼シリアライザーライブラリ。
* [Parsedown](https://github.com/erusev/parsedown) - もう一つの Markdown パーサー。
* [PHP CSS Parser](https://github.com/MyIntervals/PHP-CSS-Parser) - PHP で書かれた CSS ファイル用パーサー。
* [PHP Markdown](https://github.com/michelf/php-markdown) - Markdown パーサー。
* [Shiki PHP](https://github.com/spatie/shiki-php) - PHP 製の [Shiki](https://github.com/shikijs/shiki) コードハイライトパッケージ。
* [VObject](https://github.com/sabre-io/vobject) - VCard と iCalendar オブジェクトを解析するライブラリ。

### JSON
*JSON を扱うライブラリ。*

* [JSON Lint](https://github.com/Seldaek/jsonlint) - JSON の Lint ユーティリティ。
* [JSONMapper](https://github.com/JsonMapper/JsonMapper) - JSON を PHP オブジェクトにマッピングするライブラリ。
* [Lazy JSON](https://github.com/cerbero90/lazy-json) - 大きな JSON ファイル向けの、メモリ効率に優れた遅延パーサー。

### 文字列
*文字列の解析と操作を行うライブラリ。*

* [Agent](https://github.com/jenssegers/agent) - MobileDetect を基にした、PHP のデスクトップ／モバイル向けユーザーエージェントパーサー。
* [ANSI to HTML5](https://github.com/sensiolabs/ansi-to-html) - ANSI を HTML5 に変換するライブラリ。
* [Color Jizz](https://github.com/mikeemoo/ColorJizz-PHP) - 色の操作と変換を行うライブラリ。
* [Device Detector](https://github.com/matomo-org/device-detector) - ユーザーエージェント文字列を解析するもう一つのライブラリ。
* [Hyphenation](https://github.com/heiglandreas/Org_Heigl_Hyphenator) - TeX のハイフネーションアルゴリズムに基づくテキストのハイフネーション。
* [Jieba-PHP](https://github.com/fukuball/jieba-php) - Python の jieba を PHP に移植したもの。自然言語処理向けの中国語テキスト分かち書きツール。
* [Mobile-Detect](https://github.com/serbanghita/Mobile-Detect) - タブレットを含むモバイル端末を検出する軽量な PHP クラス。
* [Patchwork UTF-8](https://github.com/nicolas-grekas/Patchwork-UTF8) - UTF-8 文字列を扱うための移植性の高いライブラリ。
* [Portable ASCII](https://github.com/voku/portable-ascii) - 文字列を ASCII に変換するライブラリ。
* [Portable UTF-8](https://github.com/voku/portable-utf8) - UTF-8 に安全な置換メソッドを備えた文字列操作ライブラリ。
* [Slugify](https://github.com/cocur/slugify) - 文字列をスラッグに変換するライブラリ。
* [SQL Formatter](https://github.com/jdorn/sql-formatter/) - SQL 文を整形するライブラリ。
* [Stringy](https://github.com/voku/Stringy) - マルチバイト対応の文字列操作ライブラリ。
* [Url highlight](https://github.com/vstelmakh/url-highlight) - テキスト内の URL を解析し、クリック可能なリンクに変換するライブラリ。
* [URLify](https://github.com/jbroadway/urlify) - Django の URLify.js を PHP に移植したもの。
* [UUID](https://github.com/ramsey/uuid) - UUID を生成するライブラリ。

### 数値
*数値を扱うためのライブラリ。*

* [Brick Math](https://github.com/brick/math) - `BigInteger`、`BigDecimal`、`BigRational` による大きな数値の扱いを提供するライブラリ。
* [ByteUnits](https://github.com/gabrielelana/byte-units) - 2 進法とメートル法のバイト単位を解析、整形、変換するライブラリ。
* [DecimalObject](https://github.com/php-collective/decimal-object) - 小数や浮動小数点数を簡単かつ高精度に扱うための値オブジェクト。
* [IP](https://github.com/darsyn/ip) - IPv4 アドレスと IPv6 アドレスを扱う不変の値オブジェクト。
* [PHP Conversion](https://github.com/cniska/php-conversion) - 測定単位を相互変換するもう一つのライブラリ。
* [PHP Units of Measure](https://github.com/triplepoint/php-units-of-measure) - 測定単位を相互変換するライブラリ。
* [MathPHP](https://github.com/markrogoyski/math-php) - PHP 向け数値計算ライブラリ。

### フィルタリング、サニタイズ、検証
*データのフィルタリング、サニタイズ、検証を行うライブラリ。*

* [Assert](https://github.com/beberlei/assert) - 豊富なアサーションを備えた検証ライブラリ。アサーションの連結と遅延評価に対応します。
* [Aura.Filter](https://github.com/auraphp/Aura.Filter) - オブジェクトや配列を検証・サニタイズするツールを提供します。
* [CakePHP Validation](https://github.com/cakephp/validation) - もう一つの検証ライブラリ。
* [Filterus](https://github.com/ircmaxell/filterus) - シンプルな PHP フィルタリングライブラリ。
* [HTML Purifier](https://github.com/ezyang/htmlpurifier) - 標準に準拠した HTML フィルター。
* [ISO-codes](https://github.com/ronanguilloux/IsoCodes) - ISO、国際金融、行政機関、GS1、書籍業界の規格、および各国の電話番号・郵便番号規格に基づいて入力を検証するライブラリ。
* [JSON Schema](https://github.com/jsonrainbow/json-schema) - [JSON Schema](https://json-schema.org/) 検証ライブラリ。
* [LibPhoneNumber for PHP](https://github.com/giggsey/libphonenumber-for-php) - Google の電話番号処理ライブラリを PHP で実装したもの。
* [MetaYaml](https://github.com/romaricdrigon/MetaYaml) - YAML、JSON、XML に対応するスキーマ検証ライブラリ。
* [Respect Validation](https://github.com/Respect/Validation) - シンプルな検証ライブラリ。
* [Symfony HTML Sanitizer](https://github.com/symfony/html-sanitizer) - HTML サニタイザーライブラリ。
* [Valitron](https://github.com/vlucas/valitron) - もう一つの検証ライブラリ。
* [Valinor](https://github.com/CuyZ/Valinor) - 強い型付けの値オブジェクトにマッピングするライブラリ。
* [Volan](https://github.com/serkin/Volan) - もう一つのシンプルな検証ライブラリ。

### API
*API 開発向けのライブラリと Web ツール。*

* [API Platform](https://api-platform.com) - JSON-LD と Hydra 形式に対応したハイパーメディア REST API を短時間で公開できます。
* [Laminas API Tool Skeleton](https://github.com/laminas-api-tools/api-tools-skeleton) - Laminas Framework で構築された API ビルダー。
* [HAL](https://github.com/blongden/hal) - Hypertext Application Language（HAL）を構築するライブラリ。
* [Hateoas](https://github.com/willdurand/Hateoas) - HATEOAS 対応 REST Web サービスライブラリ。
* [Jane](https://github.com/janephp/janephp/) - 検証機能に対応した OpenAPI クライアント生成ツール。
* [Negotiation](https://github.com/willdurand/Negotiation) - コンテンツネゴシエーションライブラリ。
* [Restler](https://github.com/Luracast/Restler) - PHP メソッドを RESTful Web API として公開する軽量フレームワーク。
* [PackageGenerator](https://github.com/WsdlToPhp/PackageGenerator) - WSDL から PHP SDK を生成するパッケージジェネレーター。

### キャッシュとロック
*データのキャッシュとロックの取得に使うライブラリ。*

* [APIx Cache](https://github.com/apix/cache) - キャッシュタグとインデックスを重視した、さまざまなキャッシュバックエンド向けの薄い PSR-6 キャッシュラッパー。
* [CacheTool](https://github.com/gordalina/cachetool) - コマンドラインから APC／opcode キャッシュを消去するツール。
* [CakePHP Cache](https://github.com/cakephp/cache) - キャッシュライブラリ。
* [Doctrine Cache](https://github.com/doctrine/cache) - キャッシュライブラリ。
* [Metaphore](https://github.com/sobstel/metaphore) - セマフォで同時アクセスを制御し、ドッグパイル効果を防ぐキャッシュ集中対策。
* [Stash](https://github.com/tedious/Stash) - もう一つのキャッシュライブラリ。
* [Laminas Cache](https://github.com/laminas/laminas-cache) - もう一つのキャッシュライブラリ。
* [Lock](https://github.com/php-lock/lock) - 排他的な実行を実現するロックライブラリ。

### データ構造とストレージ
*データ構造やストレージ手法を実装するライブラリ。*

* [CakePHP Collection](https://github.com/cakephp/collection) - シンプルなコレクションライブラリ。
* [Fractal](https://github.com/thephpleague/fractal) - 複雑なデータ構造を JSON 出力に変換するライブラリ。
* [JsonMapper](https://github.com/cweiske/jsonmapper) - ネストした JSON 構造を PHP クラスにマッピングするライブラリ。
* [JSON Machine](https://github.com/halaxa/json-machine) - シンプルな `foreach` で巨大な JSON を反復処理できます。
* [msgpack.php](https://github.com/rybakit/msgpack.php) - [MessagePack](https://msgpack.org/) シリアライズ形式の純粋な PHP 実装。
* [Serializer](https://github.com/schmittjoh/serializer) - データをシリアライズ／デシリアライズするライブラリ。
* [YaLinqo](https://github.com/Athari/YaLinqo) - PHP 向けの「もう一つの LINQ to Objects」。
* [Laminas Serializer](https://github.com/laminas/laminas-serializer) - データをシリアライズ／デシリアライズするもう一つのライブラリ。

### 通知
*通知ソフトウェアを扱うライブラリ。*

* [JoliNotif](https://github.com/jolicode/JoliNotif) - デスクトップ通知向けのクロスプラットフォームライブラリ（Growl、notify-send、toaster などに対応）。

### デプロイ
*プロジェクトのデプロイに使うライブラリ。*

* [Deployer](https://github.com/deployphp/deployer) - デプロイツール。
* [Envoy](https://github.com/laravel/envoy) - PHP で SSH タスクを実行するツール。

### 国際化と地域化
*国際化（I18n）と地域化（L10n）のためのライブラリ。*

* [Aura.Intl](https://github.com/auraphp/Aura.Intl) - 国際化（I18N）ツール、特にロケールごとのメッセージ翻訳をパッケージ単位で提供します。
* [CakePHP I18n](https://github.com/cakephp/i18n) - メッセージ翻訳と、日付・数値の地域化。

### サーバーレス
*サーバーレス Web アプリケーションの構築を支援するライブラリとツール。*

* [Bref](https://bref.sh/) - AWS Lambda 上のサーバーレス PHP。
* [OpenWhisk](https://openwhisk.apache.org/) - オープンソースのサーバーレスクラウドプラットフォーム。
* [Serverless Framework](https://www.serverless.com/framework) - サーバーレスアプリケーションを構築するためのオープンソースフレームワーク。
* [Laravel Vapor](https://vapor.laravel.com/) - AWS を基盤とする Laravel 向けサーバーレスデプロイプラットフォーム。

### 設定
*設定に使うライブラリとツール。*

* [PHP Dotenv](https://github.com/vlucas/phpdotenv) - `.env` ファイルから環境変数を解析して読み込みます。
* [Symfony Dotenv](https://github.com/symfony/dotenv) - `.env` ファイルから環境変数を解析して読み込みます。
* [Toml](https://github.com/php-collective/toml) - AST アクセスとエラー回復に対応した TOML パーサー兼エンコーダー。

### LLMs
*大規模言語モデルを扱うライブラリ。*

* [Anthropic](https://github.com/mozex/anthropic-php) - メッセージ、ストリーミング、ツール利用、バッチ処理に対応した Anthropic API 用 PHP クライアント。
* [Anthropic for Laravel](https://github.com/mozex/anthropic-laravel) - Facade、設定の公開、テスト用フェイクを備えた Anthropic PHP クライアントの Laravel ラッパー。
* [Instructor for PHP](https://github.com/cognesy/instructor-php) - PHP で LLM を使って構造化データを出力します。
* [LLPhant](https://github.com/LLPhant/LLPhant) - OpenAI GPT 4 を利用する包括的な PHP 生成 AI フレームワーク。Langchain に着想を得ています。
* [OpenAI Client](https://github.com/openai-php/client) - OpenAI API を利用できる、高機能なコミュニティ保守版 PHP API クライアント。
* [OpenAI Client for Laravel](https://github.com/openai-php/laravel) - OpenAI API を利用できる、高機能な Laravel 向け OpenAI PHP API クライアント。
* [PHP Mistral AI SDK](https://github.com/SoftCreatR/php-mistral-ai-sdk) - Mistral AI API 向けの強力で使いやすい PHP SDK。高度な AI 機能を PHP プロジェクトにシームレスに統合できます。

### サードパーティ API
*サードパーティ API にアクセスするためのライブラリ。*

* [Amazon Web Service SDK](https://github.com/aws/aws-sdk-php) - 公式 PHP AWS SDK ライブラリ。
* [AsyncAWS](https://async-aws.com/) - 非公式の非同期 PHP AWS SDK。
* [Campaign Monitor](https://campaignmonitor.github.io/createsend-php/) - 公式 Campaign Monitor PHP ライブラリ。
* [Github](https://github.com/KnpLabs/php-github-api) - Github API と連携するライブラリ。
* [Mailgun](https://github.com/mailgun/mailgun-php) - 公式 Mailgun PHP API。
* [Stripe](https://github.com/stripe/stripe-php) - 公式 Stripe PHP ライブラリ。
* [Twilio](https://github.com/twilio/twilio-php) - 公式 Twilio PHP REST API。

### 拡張機能
*PHP 拡張機能の構築を支援するライブラリ。*

* [PHP CPP](https://www.php-cpp.com/) - PHP 拡張機能を開発するための C++ ライブラリ。
* [Zephir](https://github.com/zephir-lang/zephir) - PHP 拡張機能の開発向けに作られた、PHP と C++ の中間に位置するコンパイル言語。

### その他
*上記のカテゴリに当てはまらない便利なライブラリやユーティリティ。*

* [Annotations](https://github.com/doctrine/annotations) - アノテーションライブラリ（Doctrine の一部）。
* [BotMan](https://github.com/botman/botman) - クロスプラットフォームのチャットボットを構築する、フレームワークに依存しない PHP ライブラリ。
* [ClassPreloader](https://github.com/ClassPreloader/ClassPreloader) - オートローディングを最適化するライブラリ。
* [Ganesha](https://github.com/ackintosh/ganesha) - Circuit Breaker パターンの PHP 実装。
* [Hprose-PHP](https://github.com/hprose/hprose-php) - 言語をまたいだ RPC。
* [Laravel Serializable Closure](https://github.com/laravel/serializable-closure) - Closure をシリアライズできるライブラリ。
* [noCAPTCHA](https://github.com/ARCANEDEV/noCAPTCHA) - Google の noCAPTCHA（reCAPTCHA）向けヘルパー。
* [Pagerfanta](https://github.com/whiteoctober/Pagerfanta) - ページネーションライブラリ。
* [Safe](https://github.com/thecodingmachine/safe) - すべての PHP 関数を書き直し、false の代わりに例外をスローします。

# ソフトウェア
*開発環境を構築するためのソフトウェア。*

### PHP のインストール
*コンピューターへの PHP のインストールと管理を支援するツール。*

* [Brew PHP Switcher](https://github.com/philcook/brew-php-switcher) - Homebrew 用 PHP バージョン切り替えツール。
* [Homebrew](https://brew.sh/) - macOS 向けパッケージマネージャー。
* [PHP Brew](https://github.com/phpbrew/phpbrew) - PHP のバージョン管理・インストーラー。
* [PHP Build](https://github.com/php-build/php-build) - もう一つの PHP バージョンインストーラー。
* [Static PHP CLI](https://github.com/crazywhalecc/static-php-cli) - PHP CLI と FPM の静的ビルドを作成するか、[ダウンロード](https://dl.static-php.dev/static-php-cli/)できます。

### 開発環境
*開発環境の構築と共有に使うソフトウェアおよびツール。*

* [Ansible](https://www.redhat.com/en/ansible-collaborative) - 非常にシンプルなオーケストレーションフレームワーク。
* [DDEV](https://github.com/ddev/ddev) - PHP 向けローカル Web 開発環境システム。
* [Docker](https://www.docker.com/) - コンテナ化プラットフォーム。
* [Docker PHP Extension Installer](https://github.com/mlocati/docker-php-extension-installer) - Docker コンテナに PHP 拡張機能を簡単にインストールできます。
* [Docksal](https://github.com/docksal/docksal) - Docker :whale: を活用した、macOS、Windows、Linux 向け統合 Web 開発環境。
* [Expose](https://github.com/exposedev/expose) - オープンソースの PHP トンネリングサービス。
* [Lando](https://lando.dev/) - ワンクリックで使える開発環境。
* [Laravel Homestead](https://laravel.com/docs/master/homestead) - Laravel 向けローカル開発環境。
* [Laravel Herd](https://herd.laravel.com/windows) - macOS と Windows 向けのワンクリック PHP 開発環境。
* [Laradock](https://laradock.io/) - Docker を基盤とする PHP 開発環境一式。
* [PHPMon](https://phpmon.app/) - PHP のインストールを管理する macOS メニューバーアプリ（[Laravel Valet](https://laravel.com/docs/master/valet) と連携）。
* [Puppet](https://www.puppet.com) - サーバー自動化フレームワーク兼アプリケーション。
* [Solo](https://github.com/soloterm/solo) - Laravel アプリケーションのプロセスを管理するターミナルアプリケーション。
* [Takeout](https://github.com/tighten/takeout) - Docker ベースの開発専用依存関係マネージャー。
* [Vagrant](https://developer.hashicorp.com/vagrant) - 移植可能な開発環境ユーティリティ。

### 仮想マシン
*PHP の代替仮想マシン。*

* [Hack](https://hacklang.org/) - HHVM 向けプログラミング言語。
* [HHVM](https://github.com/facebook/hhvm) - Facebook が開発した PHP 向け仮想マシン、ランタイム、JIT。
* [PeachPie](https://github.com/peachpiecompiler/peachpie) - .NET および .NET Core 向け PHP コンパイラー兼ランタイム。

### テキストエディターと IDE
*PHP に対応するテキストエディターと統合開発環境（IDE）。*

* [Eclipse for PHP Developers](https://www.eclipse.org/downloads/) - Eclipse プラットフォームを基盤とする PHP IDE。
* [Apache NetBeans](https://netbeans.apache.org/front/main/index.html) - PHP と HTML5 に対応した IDE。
* [PhpEd](https://www.nusphere.com/products/phped.htm) - プロ向けの商用デバッガーを備えた IDE。
* [PhpStorm](https://www.jetbrains.com/phpstorm/) - 商用 PHP IDE。
* [VS Code](https://code.visualstudio.com/) - オープンソースのコードエディター。

### Web アプリケーション
*Web ベースのアプリケーションとツール。*

* [3V4L](https://3v4l.org/) - オンライン PHP／HHVM シェル。
* [Adminer](https://www.adminer.org/en/) - 単一の PHP ファイルで使えるデータベース管理ツール。
* [Cachet](https://github.com/cachethq/cachet) - オープンソースのステータスページシステム。
* [Lychee](https://github.com/electerious/Lychee) - 使いやすく見栄えのよい写真管理システム。
* [Leantime](https://leantime.io) - プロジェクト管理の専門家ではない人向けの、戦略的プロジェクト管理システム。
* [MailCatcher](https://github.com/sj26/mailcatcher) - メールを受信して表示する Web ツール。
* [Mailpit](https://github.com/axllent/mailpit) - 開発者向けメール・SMTP テストツール。
* [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - MySQL/MariaDB 用 Web インターフェース。
* [PHP Queue](https://github.com/CoderKungfu/php-queue) - キューのバックエンドを管理するアプリケーション。
* [phpRedisAdmin](https://github.com/ErikDubbelboer/phpRedisAdmin) - [Redis](https://redis.io/) データベースを管理するシンプルな Web インターフェース。
* [PHPSandbox](https://phpsandbox.io) - ブラウザーで使える PHP 向けオンライン IDE。

### インフラ
*PHP アプリケーションとサービスを提供するためのインフラ。*

* [appserver.io](https://github.com/appserver-io/appserver) - PHP で書かれたマルチスレッド対応 PHP アプリケーションサーバー。
* [php-pm](https://github.com/php-pm/php-pm) - PHP アプリケーション向けプロセスマネージャー、性能強化ツール、ロードバランサー。
* [RoadRunner](https://github.com/roadrunner-server/roadrunner) - 高性能な PHP アプリケーションサーバー、ロードバランサー、プロセスマネージャー。

# リソース
PHP 開発のスキルと知識を高めるための書籍、Web サイト、記事などの各種リソース。

### PHP 関連 Web サイト
*PHP 関連の便利な Web サイト。*

* [Nomad PHP](https://nomadphp.com/) - オンラインの PHP 学習リソース。
* [Laravel News](https://laravel-news.com/) - Laravel の公式ブログ。
* [PHP Annotated Monthly](https://blog.jetbrains.com/phpstorm/tag/php-annotated-monthly/) - PHP ニュースを毎月まとめたダイジェスト。
* [PHP FIG](https://www.php-fig.org/) - PHP Framework Interoperability Group。
* [PHP Package Development Standards](https://php-pds.com/) - PHP パッケージ開発標準。
* [PHP School](https://www.phpschool.io/) - PHP のオープンソース学習コンテンツ。
* [PHP The Right Way](https://phptherightway.com/) - PHP のベストプラクティスをまとめたクイックリファレンス。
* [PHP UG](https://php.ug) - 最寄りの PHP ユーザーグループ（UG）を探すための Web サイト。
* [PHP Watch](https://php.watch/) - PHP の記事、ニュース、今後の変更、RFC など。
* [Unit Testing Tips](https://testing-tips.sarvendev.com/) - PHP の例を通じて学ぶ単体テストのヒント。

### PHP 書籍
*PHP 関連の優れた書籍。*

* [Domain-Driven Design in PHP](https://leanpub.com/ddd-in-php) - DDD のアーキテクチャスタイルを紹介する、PHP で書かれた実例集。
* [Functional Programming in PHP](https://www.functionalphp.com/) - PHP に関数型プログラミングの原則と手法を適用する書籍。
* [Mastering Object-Orientated PHP](https://masteringobjectorientedphp.com/) - Brandon Savage による、オブジェクト指向 PHP の書籍。
* [PHP Cookbook](https://www.oreilly.com/library/view/php-cookbook/9781098121310/) - さまざまなコーディング上の問題を解決するためのコードレシピ集。
* [Modernizing Legacy Applications in PHP](https://leanpub.com/mlaphp) - Paul M. Jones による、レガシー PHP アプリケーションのモダナイズに関する書籍。
* [Scaling PHP Applications](https://www.scalingphpbook.com) - Steve Corona による、PHP アプリケーションのスケーリングに関する電子書籍。
* [Securing PHP: Core Concepts](https://leanpub.com/securingphp-coreconcepts) - Chris Cornutt による、PHP の一般的なセキュリティ用語と実践に関する書籍。
* [Signaling PHP](https://leanpub.com/signalingphp) - Cal Evans による、CLI スクリプトで PCNTL シグナルを捕捉する方法を扱った書籍。
* [XML Parsing with PHP](https://www.phparch.com/books/xml-parsing-with-php/) - XPath 式の活用や名前空間の操作を含む XML ドキュメントの解析・検証、およびプログラムによる XML ファイルの作成・変更を解説します。

### PHP 動画
*PHP 関連の優れた動画。*

* [Laracasts](https://laracasts.com) - Laravel、Vue JS などに関するスクリーンキャスト。
* [Laravel YouTube Channel](https://www.youtube.com/channel/UCfO2GiQwb-cwJTb1CuRSkwg) - Laravel の公式 YouTube チャンネル。
* [Program With Gio](https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-) - Gio による PHP 8 講座。
* [Programming with Anthony](https://www.youtube.com/playlist?list=PLM-218uGSX3DQ3KsB5NJnuOqPqc5CW2kW) - Anthony Ferrara による動画シリーズ。
* [SymfonyCasts](https://symfonycasts.com/) - PHP と Symfony に関するスクリーンキャストとチュートリアル。

### PHP カンファレンス
*PHP カンファレンス。*

* [Laracon EU](https://www.youtube.com/@LaraconEU) - Laravel と関連技術を学びたい人や、知識を共有したい人を対象とする 2 日間のイベント。
* [PHP[TEK]](https://phptek.io/) - PHP 言語に焦点を当てた、米国で最も長く続いている Web 開発者向けカンファレンス。
* [PHP UK Conference](https://www.youtube.com/user/phpukconference/videos) - PHP UK Conference の動画集。

### PHP ポッドキャスト
*PHP をテーマにしたポッドキャスト。*

* [Laravel News Podcast](https://podcast.laravel-news.com/) - Laravel News Podcast では、Laravel PHP Framework に関する最新ニュースやイベントをお届けします。
* [Mostly Technical](https://mostlytechnical.com/) - Ian Landsman と Aaron Francis がホストを務め、Laravel、ビジネス、関連する多彩な話題を活発に議論します。
* [No Compromises](https://show.nocompromises.io/) - Laravel SaaS チームで長年働いてきた、経験豊富で辛口なプログラマー 2 人がベストプラクティスを語ります。
* [North Meets South Web Podcast](https://www.northmeetssouth.audio/) - Jacob Bennett と Michael Dyrynda が 14.5 時間の時差を越えて、Web 開発者としての暮らしを語ります。
* [Over Engineered](https://overengineered.fm/) - 重要でないプログラミング上の疑問を極めて詳しく掘り下げる、ミニシリーズ形式のポッドキャスト。
* [PHP Internals News](https://phpinternals.news) - PHP internals に関するポッドキャスト。
* [PHP Town Hall](https://phptownhall.com/) - Ben Edmunds と Phil Sturgeon による気軽な PHP ポッドキャスト。
* [php[podcast] episodes from php[architect]](https://www.phparch.com/podcast/) - PHP と Web 開発に特化した業界を代表する技術誌・出版社 php[architect] の公式ポッドキャスト。
* [PHPUgly](https://www.phpugly.com/) - 働きすぎの PHP 開発者たちによるあれこれ。
* [The Laracasts Snippet](https://laracasts.simplecast.com) - 各エピソードで Web 開発のある側面について一つの考えを紹介する、Laracasts の短編番組。
* [The Laravel Podcast](https://laravelpodcast.com/) - Laravel と PHP 開発のニュースや議論。
* [The PHP Roundtable](https://phproundtable.com/) - PHP 好きの開発者が関心のある話題を語り合う、気軽な集まり。

### PHP ニュースレター
*PHP 関連ニュースをメールで直接お届けします。*

* [PHP Weekly](https://www.phpweekly.com/) - PHP の週刊ニュースレター。

### PHP の読み物
*PHP 関連の読み物。*

* [php[architect]](https://www.phparch.com/magazine/) - PHP 専門の月刊誌。

### PHP 内部情報の読み物
*PHP の内部実装やパフォーマンスに関する読み物。*

* [PHP RFCs](https://wiki.php.net/rfc) - PHP RFC（Request for Comments）の公式サイト。
* [Externals](https://externals.io/) - PHP 内部の議論。
* [PHP RFC Watch](https://github.com/beberlei/php-rfc-watch) - 最新の PHP [RFC](https://wiki.php.net/rfc) を追跡します。
* [PHP Internals Book](https://www.phpinternalsbook.com/) - 3 人のコア開発者が執筆した、PHP internals に関するオンライン書籍。
