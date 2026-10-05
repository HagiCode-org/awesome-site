# 素晴らしい Django [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> Djangoに関連する素晴らしいことのキュレーションリスト。 によって維持される [Will Vincent](https://github.com/wsvincent) そして、 [Jeff Triplett](https://github.com/jefftriplett).

<br>

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/django-logo-negative.svg">
  <img alt="Dark and Light mode version of the Django logo" src="./assets/django-logo-positive.svg">
</picture>
</div>

<br>

寄付金を寄付することで、Djangoのサポートを検討してください <a rel="sponsored" href="https://www.djangoproject.com/fundraising/">Djangoソフトウェア財団</a>,
スポンサー <a rel="sponsored" href="https://github.com/sponsors/django">GitHub スポンサー</a>,
または購入 <a rel="sponsored" href="https://django.threadless.com/">公式グッズ</a>.

## コンテンツ

<!--lint disable awesome-toc-->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [サードパーティパッケージ](#third-party-packages)
  - [アドミン](#admin)
  - [管理者テーマ](#admin-themes)
  - [API について](#apis)
  - [非同期](#async)
  - [キャッシュ](#caching)
  - [コマンド](#commands)
  - [仕様](#configuration)
  - [コンテンツ管理システム](#content-management-systems)
  - [データベースコネクタ](#database-connectors)
  - [依存症の注入](#dependency-injection)
  - [Eコマース](#ecommerce)
  - [編集者](#editors)
  - [ファイル/イメージ](#filesimages)
  - [フォーム](#forms)
  - [フルスタックフレームワーク](#full-stack-frameworks)
  - [インフォメーション](#general)
  - [国際化(i18n)](#internationalisation-i18n)
  - [ログイン](#logging)
  - [モニタリング](#monitoring)
  - [メーリング](#mailing)
  - [モデル分野](#model-fields)
  - [モデル](#models)
  - [パフォーマンス](#performance)
  - [パーミッション](#permissions)
  - [インフォメーション](#search)
  - [検索エンジン最適化](#search-engine-optimisation)
  - [セキュリティ](#security)
  - [静的資産](#static-assets)
  - [タスクキュー](#task-queues)
  - [テンプレート](#templates)
  - [テスト](#testing)
  - [サイトマップ](#urls)
  - [ユーザ名](#users)
  - [ニュース](#views)
- [開発者ツール](#developer-tools)
  - [テンプレート](#templates-1)
  - [静的解析](#static-analysis)
- [Python パッケージ](#python-packages)
- [リソース](#resources)
  - [公式リソース](#official-resources)
  - [教育機関](#educational)
  - [コミュニティ](#community)
  - [カンファレンス](#conferences)
  - [ジョブボード](#job-boards)
  - [ニュースレター](#newsletters)
  - [ポッドキャスト](#podcasts)
  - [ビデオ](#videos)
  - [出版書籍](#books)
- [ホスティング](#hosting)
  - [PaaS(Platforms-as-a-Service)](#paas-platforms-as-a-service)
  - [IaaS(インフラ・サービス)](#iaas-infrastructure-as-a-service)
  - [導入サービス](#deployment-services)
  - [自己主催の展開](#self-hosted-deployment)
- [プロジェクト](#projects)
  - [ボイラープレート](#boilerplate)
  - [オープンソースプロジェクト](#open-source-projects)
- [ジャンゴ REST フレームワーク](#django-rest-framework)
  - [DRF リソース](#drf-resources)
  - [DRFチュートリアル](#drf-tutorials)
- [ワグテール](#wagtail)
  - [ワグテールリソース](#wagtail-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!--lint enable awesome-toc-->

## サードパーティパッケージ

_すべての利用可能なパッケージの完全なリストについては、参照してください [Django Packages](https://djangopackages.org/)_

### アドミン
- [django-hijack](https://github.com/django-hijack/django-hijack) - 管理者は、自分の資格情報を知ることなく、他のユーザーの代わりにログインして作業することができます。
- [django-import-export](https://github.com/django-import-export/django-import-export) - Django アプリケーションと管理統合でデータをインポートおよびエクスポートするためのライブラリ。
- [django-admin-inline-paginator-plus](https://github.com/DmytroLitvinov/django-admin-inline-paginator-plus) - Django管理者でインラインをパギンする簡単な方法
- [django-loginas](https://github.com/skorokithakis/django-loginas) - Django管理者の「ユーザとしてログイン」。
- [impostor](https://github.com/avallbona/Impostor) - Impostor は Django アプリケーションで、従業員が自分のユーザー名とパスワードを使用して別のユーザーとしてログインできるようにします。
- [django-impersonate](https://pypi.org/project/django-impersonate/) - スーパユーザが他の非スーパーユーザアカウントを「偽り」できるようにします。
- [django-admin-env-notice](https://github.com/dizballanze/django-admin-env-notice) - Django Admin の環境を視覚的に区別します。 `development`, `staging`, `production`.
- [django-related-admin](https://github.com/PetrDlouhy/django-related-admin) - リストを書くことができるヘルパーライブラリ_外部キー関係を横断表示します。
- [django-admin-sortable2](https://github.com/jrief/django-admin-sortable2) - Django 管理インターフェイスのオブジェクトの汎用ドラッグアンドドロップオーダー。
- [django-admin-collaborator](https://github.com/brktrlw/django-admin-collaborator) - リアルタイムのユーザープレゼンスを追加し、ロックを編集し、チャンネルとRedisでDjango管理者にチャットします。
- [dj-control-room](https://github.com/django-control-room/dj-control-room) - Django管理者(Redis、キャッシュ、Celery、URLなど)内の操作ツールのスイートでコントロールプレーンを構築します。
- [django-admin-mcp](https://github.com/7tg/django-admin-mcp) - MCP クライアント (Claude のようなAI アシスタント) に管理登録モデルを公開します。CRUD、管理者アクション、Django の許可を捕捉した ModelAdmin クラスによる履歴。

### 管理者テーマ
- [django-grappelli](https://github.com/sehmaschine/django-grappelli) - 管理者のためのジャジースキン。
- [django-jazzmin](https://github.com/farridav/django-jazzmin) - django管理者のためのドロップインテーマ, そのutilises AdminLTE 3 & ブーツストラップ 4 ヨーの管理者は、ジャジーを見ます.
- [django-admin-interface](https://github.com/fabiocaccamo/django-admin-interface) - 管理者自身によって管理者自身をカスタマイズして下さい(色、ヘッダー)。 タイトル、ロゴ)とポップアップウィンドウがモーダルに置き換えられました。
- [django-semantic-admin](https://github.com/globophobe/django-semantic-admin) - Django Semantic UIの管理者のテーマ。
- [django-jet-reboot](https://github.com/assem-ch/django-jet-reboot) - Django Jet は、Django の管理者インターフェイス用のモダンなテンプレートで、機能を改善しました。
- [django-baton](https://github.com/otto-torino/django-baton) - ブーツストラップ5に基づいて、クールでモダンで応答性の高いdjango管理者アプリケーション。
- [django-unfold](https://github.com/unfoldadmin/django-unfold) - シームレスなインターフェース開発のためのモダンなDjango管理者テーマ。
- [django-daisy](https://github.com/hypy13/django-daisy) - 現代のジャンゴダッシュボードは、daisyuiで構築された完全応答性を備えています。
- [django-smartbase-admin](https://github.com/SmartBase-SK/django-smartbase-admin) - Django SmartBase Admin OST-tuned 2.00 end-user 準備が整った美しい管理パネル

### API について
<!--lint disable double-link-->
- [django-rest-framework](https://github.com/encode/django-rest-framework) - Django 用の Web API です。
- [django-cors-headers](https://github.com/adamchainz/django-cors-headers) - バックエンドとフロントエンドが異なるサーバーの場合、これが必要です。
- [dj-rest-auth](https://github.com/iMerica/dj-rest-auth) - Django Rest Frameworkの認証
- [django-rest-knox](https://github.com/jazzband/django-rest-knox) - django-rest-auth の認証モジュール。
- [djoser](https://github.com/sunscrapers/djoser) - Django authのREST実装。
- [djaq](https://github.com/paul-wolf/djaq) - 強力なクエリ言語でDjangoモデルへの即時リモートAPI。
- [django-rest-framework-simplejwt](https://github.com/jazzband/djangorestframework-simplejwt) - DRF用のJSON Webトークン。
- [django-webpack-loader](https://github.com/django-webpack/django-webpack-loader) - DjangoでWebpackを透明に使用。
- [drf-yasg](https://github.com/axnsan12/drf-yasg) - Django REST Framework コードから実際のSwagger/OpenAPI 2.0スキーマの自動生成。
- [graphene-django](https://github.com/graphql-python/graphene-django) - ジャンゴのグラコール
- [graphene-django-filter](https://github.com/devind-team/graphene-django-filter) - Django の GraphQL で、および/または/not 演算子を実装する高度なフィルタ。
- [django-modern-rest](https://github.com/wemake-services/django-modern-rest) - 速度、タイプ、非同期の現代REST、 `msgspec`, `pydantic` その他のグッズ
- [django-ninja](https://django-ninja.rest-framework.com/) - ジャンゴ・ニンジャ - 型アノテーションに基づく高速Django RESTフレームワーク。
- [django-tastypie](https://github.com/django-tastypie/django-tastypie) - 2010年以降、DjangoアプリのおいしいAPIを作成する。
- [drf-spectacular](https://github.com/tfranzel/drf-spectacular) - Django REST フレームワークの Sane と柔軟な OpenAPI 3 スキーマ生成。
- [django-webhook](https://github.com/danihodovic/django-webhook) - モデル変更にWebhookを発信するためのプラグインアンドプレイDjangoアプリ。
- [strawberry-django](https://github.com/strawberry-graphql/strawberry-django) - 現代の開発のために設計された GraphQL ライブラリである Strawberry との Django の統合
<!--lint enable double-link-->

### 非同期
- [channels](https://github.com/django/channels/) - Django のサポート

### キャッシュ
- [django-cachalot](https://github.com/noripyt/django-cachalot) - Django ORM のクエリをキャッシュし、自動的に無効にします。
- [django-cacheops](https://github.com/Suor/django-cacheops) - 自動粒状イベント主導の無効化によるSlick ORMキャッシュ。

### コマンド
- [django-extensions](https://github.com/django-extensions/django-extensions/) - カスタム管理拡張機能、特に `runserver_plus` そして、 `shell_plus`.
- [django-click](https://github.com/django-commons/django-click) - Djangoの管理コマンドをDjangoで書き込む [click CLI library](https://click.palletsprojects.com).
- [django-dbbackup](https://github.com/Archmonger/django-dbbackup) - プロジェクトデータベースとメディアファイルをバックアップおよび復元するための管理コマンド。
- [django-liquidb](https://github.com/Gusakovskiy/django-liquidb) - Djangoアプリケーションは、移行管理を簡素化し、dbスキームの状態の変化を簡素化します。
- [django-migration-zero](https://github.com/ambient-innovation/django-migration-zero/) - ジャンゴの「マイグレーションゼロ」パターンを現地の変化と生産中のデータベースの調整をカバー。
- [django-typer](https://github.com/django-commons/django-typer) - Djangoの管理コマンドをDjangoで書き込む [Typer CLI library](https://typer.tiangolo.com).

### 仕様
<!--lint disable double-link-->
- [confidential](https://github.com/candidco/confidential) - 設定とシークレットの管理(CLIサポート付き)
- [django-environ](https://github.com/joke2k/django-environ) - 環境変数。
- [django-split-settings](https://github.com/wemake-services/django-split-settings) - 複数の設定ファイルを整理します。
- [django-constance](https://github.com/jazzband/django-constance) - プラグイン可能なバックエンド(RedisとDjangoモデルのバックエンド)で動的設定を保存するためのDjangoアプリ。
- [django-configurations](https://github.com/jazzband/django-configurations) - Django プロジェクトの構成は、Python のクラスと次の原則の妥協性に依存しやすくなります。 [the twelve-factor app](https://12factor.net/config).
- [dynaconf](https://www.dynaconf.com/django/) - Dynaconf は複数のソースから django の設定をロードします (複数のファイルフォーマット、 env vars、redis、vault など)、 シークレットを管理し、 異なるマージ戦略を以下に割り当てます。 [the twelve-factor app](https://12factor.net/config).
- [django-extra-settings](https://github.com/fabiocaccamo/django-extra-settings) - django 管理者だけを使用して、タイプされた追加設定を設定および管理します。
- [django-removals](https://github.com/ambient-innovation/django-removals/) - 便利なシステムチェックによる非推奨設定変数の検出
- [environs](https://github.com/sloria/environs) - 簡略化された環境変数は、 [Django helper](https://github.com/sloria/environs#usage-with-django) 追加のパッケージをインストールします。
<!--lint enable double-link-->
- [django-classy-settings](https://github.com/funkybob/django-classy-settings) - クラスベースの設定で、環境を順番に保つことができます。タイプされた環境変数に簡単にアクセスできます。
- [django-content-settings](https://github.com/occipital/django-content-settings) - Django管理パネルから直接編集可能な型変数を作成および管理できます。

### コンテンツ管理システム
<!--lint disable double-link-->
- [wagtail](https://github.com/wagtail/wagtail) - 人気のDjangoコンテンツ管理システム(CMS)。 お問い合わせ [awesome-wagtail](https://github.com/wagtail/awesome-wagtail) お問い合わせ
- [mezzanine](https://github.com/stephenmcd/mezzanine) - CMSフレームワーク。
- [django-cms](https://github.com/django-cms/django-cms) - DjangoのCMS。
- [feincms](https://github.com/feincms/feincms) - 拡張可能なDjangoベースのCMS。
- [puput](https://github.com/APSL/puput) - Wagtailでブログアプリの機能。
<!--lint enable double-link-->

### データベースコネクタ
- [djongo](https://github.com/doableware/djongo) - Django および MongoDB データベースのコネクター。

### 依存症の注入
- [Wireup](https://github.com/maldoinc/wireup) - Djangoの依存症注射

### Eコマース
- [saleor](https://github.com/saleor/saleor) - グラフQLベースのDjango Eコマースプラットフォーム。
- [django-oscar](https://github.com/django-oscar/django-oscar) - Djangoのドメイン主導のeコマース。

### 編集者
<!--lint ignore awesome-list-item-->
- [django-markdownx](https://github.com/neutronX/django-markdownx) - Django用の包括的なMarkdownプラグイン。
- [django-markdown-editor](https://github.com/agusmakmun/django-markdown-editor) - Awesome Django Markdown Editor、Bootstrap および Semantic-UI に対応
- [django-business-logic](https://github.com/dgk/django-business-logic) - Django 用の Visual DSL フレームワーク。
- [django-summernote](https://github.com/lqez/django-summernote) - SummernoteはWYSIWYGエディタです。
- [django-tinymce](https://github.com/jazzband/django-tinymce) - Django 用の TinyMCE の統合。
- [django-prose](https://github.com/withlogicco/django-prose) - コンテンツ作成用の軽量エディタ。
- [django-ace](https://github.com/django-ace/django-ace) - DjangoのACE統合。

### ファイル/イメージ
- [django-cleanup](https://github.com/un1t/django-cleanup) - ローカルおよびリモート・ファイルのためのゼロ構成ファイル/イメージの取り外し。
- [django-imagekit](https://github.com/matthewwithanm/django-imagekit) - サムネイル、黒、白、サイズの画像を処理するためのDjangoアプリ。
- [django-pictures](https://github.com/codingjoe/django-pictures) - AVIF&WebPのような近代的なコードを使用して応答性のクロスブラウザイメージライブラリ。
- [sorl-thumbnail](https://github.com/jazzband/sorl-thumbnail) - ジャンゴのサムネイル。

### フォーム
- [django-crispy-forms](https://github.com/django-crispy-forms/django-crispy-forms/) - DRY Djangoの形態。
- [django-floppyforms](https://github.com/jazzband/django-floppyforms) - フォームレンダリングの完全な制御。
- [django-formtools](https://github.com/jazzband/django-formtools) - 以前のフォームとマルチステップフォームの場合、Django の前の部分は 1.8 です。
- [django-widget-tweaks](https://github.com/jazzband/django-widget-tweaks) - テンプレートのフィールドレンダリングを微調整します。
- [django-autocomplete-light](https://github.com/yourlabs/django-autocomplete-light) - フォームに自動補完を追加します。

### フルスタックフレームワーク
- [Django LiveView](https://github.com/Django-LiveView/liveview) - Django テンプレートで動的、反応的なインターフェイスをサーバー側で作成するためのフレームワーク。 デコレータベースのハンドラを使用したWebSocketによるリアルタイムアップデート。
- [Django-Bridge](https://github.com/kaedroho/django-bridge) - Djangoアプリケーション用のReact フロントエンドを作成する簡単な方法。
- [ReactPy](https://github.com/reactive-python/reactpy) - React ですが、Python で。 PythonをDjangoテンプレートに動的にレンダリング [ReactPy-Django module](https://github.com/reactive-python/reactpy-django).
- [Reactor](https://github.com/edelvalle/reactor/) - フェニックスライブビュー, しかし、ジャンゴのために.
- [Sockpuppet](https://sockpuppet.argpar.se/) - すでに知っていると愛のDjangoツールを使用して反応アプリケーションを構築します。
- [Unicorn](https://www.django-unicorn.com/) - 通常のDjangoビューを強力に強化し、AJAXがバックグラウンドで呼び出し、DOMを動的に更新する反応コンポーネントフレームワーク。

### インフォメーション
- [django-data-browser](https://github.com/tolomea/django-data-browser) - インタラクティブで使いやすいデータベースエクスプローラ。
- [django-filter](https://github.com/carltongibson/django-filter) - Django QuerySets に基づく強力なフィルタ。
- [django-sql-explorer](https://github.com/explorerhq/sql-explorer) - SQL クエリでデータを共有します。
- [django-tables2](https://github.com/jieter/django-tables2) - pagination/sorting の HTML のテーブル。
- [django-maintenance-mode](https://github.com/fabiocaccamo/django-maintenance-mode) - メンテナンスモード時に503エラーページが表示されます。
- [django-freeze](https://github.com/fabiocaccamo/django-freeze) - 動的 django サイトを静的 1 行のコードで変換します。
- [django-nh3](https://github.com/marksweb/django-nh3) - nh3とDjangoの統合は、django-bleachの代替手段です。
- [Weblate](https://github.com/WeblateOrg/weblate) - Weblate は 2500 以上の libre プロジェクトや 165 を超える国で使用されている、コピーレフトされた libre ソフトウェア Web ベースの継続的なローカリゼーション システムです。
- [Django-Classy-Doc](https://github.com/nanuxbe/django-classy-doc) - CCBVとCDRFのスタイルで独自のコードを記述します。
- [iommi](https://github.com/iommirocks/iommi) - HTMLやJavaScriptを記述せずにCRUDアプリケーションを開発するためのツールキット。

### 国際化(i18n)
- [django-localflavor](https://github.com/django/django-localflavor) - 特定の国や文化に役立つ機能性のコレクション。 以前はDjangoコアの一部です。
- [django-modeltrans](https://github.com/zostera/django-modeltrans) - JSONField の Django モデルフィールドを翻訳します。
- [django-modeltranslations](https://github.com/deschler/django-modeltranslation) -  Djangoモデルを登録アプローチで翻訳します。
- [django-rosetta](https://github.com/mbi/django-rosetta) - Rosettaは、Django Admin 内でプロジェクトの gettext のカタログを読み書きする UI を提供します。

### ログイン
- [django-guid](https://github.com/snok/django-guid) - Django リクエスト内のすべてのログメッセージに GUID (Correlation-ID) を注入します。
- [DRF-API-Logger](https://github.com/vishalanandl177/DRF-API-Logger) - Django Rest Frameworkプロジェクト用のAPIロガーです。
- [django-structlog](https://github.com/jrobichaud/django-structlog) - django-structlog は、Django プロジェクト向けの構造化されたロギング統合です。 [structlog](https://www.structlog.org)

### モニタリング
- [django-prometheus](https://github.com/django-commons/django-prometheus) - DjangoモニタリングメトリックをPrometheusにエクスポートします。
- [django-mixin](https://github.com/adinhodovic/django-mixin) - Django-prometheus のモニタリングミキサー。 GrafanaダッシュボードとDjangoのPrometheusルールのセット。

### メーリング
- [django-pony-express](https://github.com/ambient-innovation/django-pony-express) - Djangoのテストスイートを含むクラスベースのメール。
- [django-anymail](https://github.com/anymail/django-anymail) - Amazon SES、 Brevo(Sendinblue)、MailerSend、Mailgun、Mailjet、Postmark、Postal、Resend、SparkPost、Unisender GoなどのDjangoメールバックエンドとWebhook。

### モデル分野
- [django-colorfield](https://github.com/fabiocaccamo/django-colorfield) - 素敵なカラーピッカーウィジェットで、ジャンゴモデルのカラーフィールド。
- [django-model-utils](https://github.com/jazzband/django-model-utils) - Djangoモデルミックスインとユーティリティ。
- [django-phonenumber-field](https://github.com/django-phonenumber-field/django-phonenumber-field) - 正規電話番号のモデル/フォームフィールド。
- [django-streamfield](https://github.com/raagin/django-streamfield) - プレーン・ディヤンゴ・管理者(Wagtail CMS StreamFieldの考えに基づく)のための簡単な StreamField。

### モデル
- [django-lifecycle](https://github.com/rsinger86/django-lifecycle) - 決定的なモデルのライフサイクルのホック、信号の代替。
- [django-mptt](https://github.com/django-mptt/django-mptt) - 変更された Preorder Tree Traversal; モデルインスタンスのツリーを扱う。
- [django-taggit](https://github.com/jazzband/django-taggit/) - シンプルなモデルタグ。
- [django-reversion](https://github.com/etianen/django-reversion) - モデルインスタンス用のバージョン制御。
- [django-simple-history](https://github.com/django-commons/django-simple-history) - モデル履歴を保存し、管理者から変更を表示/変換します。
- [django-polymorphic](https://github.com/django-commons/django-polymorphic) - Django-polymorphic は、Django プロジェクトで継承されたモデルを使用して簡素化します。
- [django-recurrence](https://github.com/jazzband/django-recurrence) - Djangoでの定期的な日付での作業のためのユーティリティ。
- [django-treenode](https://github.com/fabiocaccamo/django-treenode) - ツリーベース用の抽象モデル/admin
- [django-auto-prefetch](https://github.com/adamchainz/django-auto-prefetch) - 必要に応じて外部キー値を自動的に取得します。

### パフォーマンス
- [django-perf-rec](https://cur.at/GHUO6cn?m=web) - Djangoコードのパフォーマンスの詳細なレコードを保持します。
- [New Relic](https://newrelic.com/python/django) - タイムミドルウェア、ビュー、SQLクエリ。
- [Scout](https://scoutapm.com/docs/python/django) - タイムミドルウェア、テンプレートレンダー、自動N+1検出によるSQLクエリ。
- [django-silk](https://github.com/jazzband/django-silk) - HTTP リクエストとデータベースのクエリのライブプロファイリングと検査。
- [py-spy](https://github.com/benfred/py-spy) - Pythonプログラム用のサンプリングプロファイラ。
- [pyinstrument](https://github.com/joerick/pyinstrument) - Python、Django、フラスコ、FastAPI 用のスタックプロファイラを呼び出します。
- [django-zeal](https://github.com/taobojlen/django-zeal) - ユーザーフレンドリーなエラーメッセージでN+1のクエリを検出する

### パーミッション
- [django-role-permissions](https://github.com/vintasoftware/django-role-permissions) - 役割ベースの権限管理のためのDjangoアプリ。
- [django-guardian](https://github.com/django-guardian/django-guardian) - Django のオブジェクトパーミッション
- [django-rules](https://github.com/dfunckt/django-rules) - Djangoの地上から構築されたオブジェクトレベルの権限を提供する小さな強力なアプリ。

### インフォメーション
- [django-haystack](https://github.com/django-haystack/django-haystack) - Djangoのモジュラー検索。
- [django-watson](https://github.com/etianen/django-watson) - フルテキスト検索プラグイン。
- [django-admin-search](https://github.com/shinneider/django-admin-search) - django 管理者のための Modal フィルター。
- [django-elasticsearch-dsl](https://github.com/django-es/django-elasticsearch-dsl) - Django用のElasticsearch DSL統合。

### 検索エンジン最適化
- [django-check-seo](https://github.com/kapt-labs/django-check-seo) - ページのSEOをチェック.

### セキュリティ
- [django-csp](https://github.com/mozilla/django-csp) - 追加する [Content-Security-Policy](http://www.w3.org/TR/CSP/) Django へのヘッダー。
- [django-feature-policy](https://github.com/adamchainz/django-permissions-policy) - ドラフトセキュリティHTTPヘッダーを設定する `Feature-Policy` Djangoアプリで。
- [django-protected-media](https://github.com/cobusc/django-protected-media) - 保護された方法で機密と見なされる媒体を管理します。
- [DJ Checkup](https://djcheckup.com) - デプロイされた Django サイトで複数のチェックを実行して、一般的なセキュリティ上の間違いを確認します。

### 静的資産
- [django-storages](https://github.com/jschneier/django-storages) - Django 用の複数のカスタムストレージバックエンドをサポートする単一のライブラリ。
- [django-compressor](https://github.com/django-compressor/django-compressor/) - JavaScript/CSS を単一のキャッシュファイルに圧縮します。
- [easy-thumbnails](https://github.com/SmileyChris/easy-thumbnails) - Djangoの画像サムネイル。
- [whitenoise](https://github.com/evansd/whitenoise) - Python の Web サイトの 簡易静的ファイル。

### タスクキュー
- [django-q2](https://github.com/django-q2/django-q2) - Django の複数の処理分散タスクキュー。
- [django-rq](https://github.com/rq/django-rq) - Redis Queueの統合。
- [django-redis](https://github.com/jazzband/django-redis) - Djangoのフル機能のRedisキャッシュバックエンド。
- [celery](https://github.com/celery/celery) - より大きい、性能重視のプロジェクトのための堅牢でブローカーアグノスティックなタスクキュー。
- [flower](https://github.com/mher/flower) - 花は、セルリークラスターのモニタリングと管理のためのウェブベースのツールです。
- [django-celery-beat](https://github.com/celery/django-celery-beat) - Djangoの管理者パネルによって構成されるデータベースが付いている定期的なタスクスケジューラ。
- [celery-exporter](https://github.com/danihodovic/celery-exporter) - CeleryタスクのPrometheus & Grafanaモニタリング。
- [django-dramatiq](https://github.com/Bogdanp/django_dramatiq) - シンプル、信頼性、パフォーマンスを重視したタスク処理ライブラリ。
- [django-celery-results](https://github.com/celery/django-celery-results) - Django でセルリーの結果バックエンド。
- [django-tasks](https://github.com/realOrangeOne/django-tasks) - Djangoのバックグラウンドワーカーとタスクのリファレンス実装とバックポート [DEP 14](https://www.djangoproject.com/weblog/2024/may/29/django-enhancement-proposal-14-background-workers/).
- [huey](https://github.com/coleifer/huey) - Python のタスク キューが少なく、Django のサポートが新しいものを含む `django.tasks` API 。
- [django-ox](https://github.com/oxpull/django-ox) - Djangoのタスクフレームワークのデータベース・バック・ワーカー、トランザクション・エンキュー、リトリート、リカール・タスク、ブローカーが実行しない。
- [django-absurd](https://github.com/lincolnloop/django-absurd) - Absurd、Postgres-native耐久性のあるワークフローシステム用のDjango統合。

### テンプレート
- [django-components](https://github.com/django-components/django-components/) - Djangoで簡単な再利用可能なテンプレートコンポーネントを作成する方法。
- [django-template-partials](https://github.com/carltongibson/django-template-partials/) - Djangoテンプレート言語のインライン部分に名前を付けた再使用可能な。
- [slippers](https://mitchel.me/slippers/) - Python の単一行を書くことなく、Django で再使用可能なコンポーネントを構築します。
- [JinjaX](https://jinjax.scaletti.dev/) - 優れたコンポーネントは、Jinjaテンプレートのパワーを発揮します。
- [django-cotton](https://django-cotton.com/) - グッドビー `{% raw %}{%{% endraw %} extends, block, include {% raw %}%}{% endraw %}`お問い合わせ `<c-component />`. 現代のUI構成をDjangoに持ち込む。
- [htpy](https://htpy.dev/) - htpy は、テンプレート言語を使わずに、Python をプレーンで楽しく効率的に書くライブラリです。
- [django-suspense](https://github.com/paqstd-dev/django-suspense) - 子がロード(React)のように終わるまで、テンプレートにフォールバックを表示する簡単な方法。

### テスト
- [django-debug-toolbar](https://github.com/django-commons/django-debug-toolbar/) - リクエスト/レスポンスをデバッグするためのパネルを設定します。
- [pytest-django](https://github.com/pytest-dev/pytest-django) - Djangoでpytest機能を使う。
- [django-test-migrations](https://github.com/wemake-services/django-test-migrations) - django スキーマとマイグレーションを含むデータのマイグレーションをテストします。
- [django-test-plus](https://github.com/revsys/django-test-plus/) - Django のデフォルト TestCase への便利な追加。
- [factory-boy](https://github.com/FactoryBoy/factory_boy) - 備品の交換をテストして下さい。
- [django-waffle](https://github.com/django-waffle/django-waffle) - Djangoの特長フリップパー。
- [model-bakery](https://github.com/model-bakers/model_bakery) - Django(レガシーモデルママプロジェクトの名前)のオブジェクト工場。
- [django-fakery](https://github.com/fcurella/django-fakery) - ファッカーがバックアップしたDjangoのクリエーションメソッドの簡単な実装。
- [django-pattern-library](https://github.com/torchbox/django-pattern-library) - Djangoテンプレート用のパターンライブラリジェネレーター、UIコンポーネントのテストを支援します。
- [storybook-django](https://github.com/torchbox/storybook-django) - ストーリーブックでDjango UIコンポーネントを開発。

### サイトマップ
- [dj-database-url](https://github.com/jazzband/dj-database-url) - データベースのURL。
- [urlman](https://github.com/andrewgodwin/urlman) - DjangoモデルのURLを行う素晴らしい方法。
- [django-robots](https://github.com/jazzband/django-robots) - ロボットを管理するための基本的なDjangoアプリケーションです。 ロボットの除外プロトコルに従うtxtファイルは、Djangoコントリブアプリを補完します。
- [django-redirects](https://github.com/fabiocaccamo/django-redirects) - 完全に制御して、あるべきようにリダイレクトします。

### ユーザ名
- [django-allauth](https://github.com/pennersr/django-allauth/) - ソーシャルオースを含むユーザー登録の改善
- [django-allauth-ui](https://github.com/danihodovic/django-allauth-ui/) - django-allauth のテンプレートをよく見栄えましょう。
- [django-improved-user](https://github.com/jambonrose/django-improved-user) - 電子メールで認証するカスタムDjangoユーザー。 アイデンティティと認証のベストプラクティスに従ってください。
- [django-organizations](https://github.com/bennylope/django-organizations/) - Djangoプロジェクト用のマルチユーザーアカウント。
- [django-cas-ng](https://github.com/django-cas-ng/django-cas-ng) - Django-cas-ng は Django CAS (中央認証サービス) 1.0/2.0/3.0 クライアントライブラリで SSO (シングルサインオン) とシングルログアウト (SLO) をサポートする。
- [django-guest-user](https://github.com/julianwachholz/django-guest-user) - 訪問者が通常のユーザーのようにサイトを利用し、後で登録できるようにします。

### ニュース
- [django-braces](https://github.com/brack3t/django-braces) - 再使用可能な、一般的なミックスイン。
- [django-easy-audit](https://github.com/soynatan/django-easy-audit) - ユーザーの行動を追跡します。
- [django-extra-views](https://github.com/AndrewIngram/django-extra-views) - 追加のクラスベースの一般的なビュー。
- [django-stronghold](https://github.com/mgrouchy/django-stronghold) - すべてのDjangoビューのデフォルトログインを作る_お問い合わせ
- [neapolitan](https://github.com/carltongibson/neapolitan) - DjangoのクイックCRUDビュー。

## 開発者ツール

Djangoプロジェクトの開発に役立つスタンドアローンツール。

### テンプレート
- [curlylint](https://www.curlylint.org/) - Jinja、Nunjucks、Djangoテンプレート、Twig、Liquid用の実験的なHTMLテンプレートライニング。
- [djhtml](https://github.com/rtts/djhtml) - Django/Jinjaテンプレートインデント
- [djlint](https://www.djlint.com/) - Lint & Format HTMLテンプレート。

### 静的解析
- [django-orm-lens](https://github.com/FROWNINGdev/django-orm-lens) - モデルレベルの静的解析: ER 図、N+1 検出、スキーマドリフト、および CI でラジウスを爆破、データベースまたは Django ブートなし。

## Python パッケージ

_Django でうまく機能する Python パッケージの短いリスト。_

- [black](https://github.com/psf/black) - Python コードフォーマッタを妥協しない。
- [coveragepy](https://github.com/coveragepy/coveragepy) - コードカバレッジ測定。
- [faker](https://github.com/joke2k/faker) - Faker は、偽りのデータを生成する Python パッケージです。
- [pillow](https://github.com/python-pillow/Pillow) - Pythonイメージングライブラリ。
- [pytest](https://github.com/pytest-dev/pytest/) - フレームワークのテスト
- [python-decouple](https://github.com/HBNetwork/python-decouple) - コードから設定の厳密な分離。
- [python-slugify](https://github.com/un33k/python-slugify) - ユニコードスラグを返します。
- [sentry-python](https://github.com/getsentry/sentry-python) - エラー報告SDK。
- [python-socketio](https://github.com/miguelgrinberg/python-socketio) - ソケットのPython実装。 ログイン_ リアルタイムのクライアントとサーバー。 [(create Socket.io Django server instance)](https://python-socketio.readthedocs.io/en/latest/server.html?highlight=django#creating-a-server-instance)
- [Ruff](https://github.com/astral-sh/ruff) - Rust で書かれている非常に高速な Python の linter とコード フォーマッタ。

## リソース

### 公式リソース
<!--lint ignore double-link-->
- [Project Website](https://www.djangoproject.com/) - 公式ウェブサイト
- [Documentation](https://docs.djangoproject.com/en/dev/) - すべてのDjangoバージョンの包括的なドキュメント。
- [Polls Tutorial](https://docs.djangoproject.com/en/dev/intro/tutorial01/) - Django内部を学習しながら、polls チュートリアルを作成します。
- [Source Code](https://github.com/django/django/) - GitHubでホストされている。

### 教育機関
- [Django Girls Tutorial](https://tutorial.djangogirls.org/en/) - 機能ベースのビューを使用して、ブログアプリを構築します。
- [LearnDjango](https://learndjango.com/) - DjangoとDjango REST Frameworkのチュートリアルとプレミアムコース。
- [Adam Johnson](https://adamj.eu/tech/) - アダムはDjangoの技術委員会にあり、定期的にチュートリアルを書きます。
- [Photon Designer - Django tutorials](https://photondesigner.com/articles) - トム・デカンによるDjangoのチュートリアルでは、Djangoアプリを単に構築する方法 - Djangoでインスタントメッセンジャーを作成する方法から、インスタント検索を追加し、Googleドライブをデータベースとして使用します。 定期的に更新しました。
- [TestDriven](https://testdriven.io/blog/) - Docker、支払いなどのトピックに関する複数のDjango固有のチュートリアル。
- [Classy Class-Based Views](https://ccbv.co.uk/) - 各ジェネリッククラスベースのビューのメソッド/プロパティ/アトリビュートの詳細な説明。
- [Classy Django REST Framework](http://www.cdrf.co) - DRFクラスベースのビューとシリアライズのためのメソッド/attributesの詳細な説明。
- [Simple is Better than Complex](https://simpleisbetterthancomplex.com/) - Djangoで多くのチュートリアルとヒントを定期的に更新しました。
- [Full Stack Python's Django Page](https://www.fullstackpython.com/django.html) - Djangoの哲学の説明と他のリソースやチュートリアルへのリンク.
- [RealPython](https://realpython.com/tutorials/django/) - Djangoの多くの高品質のチュートリアル。
- [Mozilla Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django) - 貸出ライブラリアプリを作成します。
- [Matt Layman](https://www.mattlayman.com) - ジャンゴのトピックに関する定期的なチュートリアルとディープ・ディブ。
- [Django Styleguide](https://github.com/HackSoftware/Django-Styleguide) - Djangoのスタイルガイドとベストプラクティスと例
- [Django Template Tags and Filters](https://www.djangotemplatetagsandfilters.com/) - Djangoの57組み込みテンプレートフィルタと27テンプレートタグの追加ドキュメント。
- [Django for Everybody](https://www.dj4e.com/) - DjangoにフォーカスしたWebdev初心者のための完全なコース。
- [CS50W](https://cs50.harvard.edu/web/2020/) - ハーバード大学のWeb開発入門コースでは、Djangoをバックエンドフレームワークとして説明しています。
- [Better Simple](https://www.better-simple.com/blog/django/) - ジャンゴ開発、ベストプラクティス、ジャンゴ生態系に関するティム・シリングの記事。

### コミュニティ
<!--lint disable double-link-->
- [Django Forum](https://forum.djangoproject.com/) - オフィシャルディスコースボード
- [Community Page](https://www.djangoproject.com/community/) - コミュニティブログ投稿、ジョブなどのフィードをフィーチャー。
- [Local Django Communities Page](https://www.djangoproject.com/community/local/) - 世界各地のローカルイベントを開催
- [Django Users Google Group](https://groups.google.com/forum/#!forum/django-users/) - 質問/回答者のための非常に活発な議論ボード。
- [Developers Google Group](https://groups.google.com/forum/#!forum/django-developers/) - Django自体への貢献のためだけ。
- [Mastodon](https://fosstodon.org/@django) - 更新、セキュリティ修正などの公式発表のため
- [X (formerly Twitter)](https://x.com/djangoproject/) - 更新、セキュリティ修正などの公式発表のため
- [Discord Server](https://discord.com/invite/xcRH6mN4fa) - ジャンゴDiscordコミュニティ。
- IRC チャネル - irc://irc.freenode.net/django で他の Django ユーザとチャットできます。
- [Djangonaut Space](https://djangonaut.space) - Djangoコミュニティのための無料のピアメンタリングプログラムで、オープンソースの貢献の宇宙に人々を起動します。
<!--lint enable double-link-->

### カンファレンス

- [DjangoCon US](https://djangocon.us/) ([YouTube Channel](https://www.youtube.com/channel/UC0yY6a79pPY9J0ShIHRf6yw))
- [DjangoCon Europe](https://djangocon.eu/) ([YouTube Channel](https://www.youtube.com/user/djangoconeurope))
- [DjangoCon AU](https://djangocon.com.au/)
- [DjangoCon Africa](https://djangocon.africa/)
- [Django Day Copenhagen](https://djangoday.dk/) ([YouTube Channel](https://www.youtube.com/@djangodanmark))
- [PyCon US](https://us.pycon.org/) ([YouTube Channel](https://www.youtube.com/channel/UCsX05-2sVSH7Nx3zuk3NYuQ))
- [PyCon Australia](https://pycon-au.org/) ([YouTube Channel](https://www.youtube.com/user/PyConAU))
- [Euro Python](https://europython.eu/) ([YouTube Channel](https://www.youtube.com/user/PythonItalia))
- [Django Under the Hood](https://www.youtube.com/channel/UC9T1dhIlL_8Va9DxvKRowBw/videos)
- [DjangoCongress JP](https://djangocongress.jp/) ([YouTube Channel](https://www.youtube.com/@djangocongressjp3623))
- [Complete listing of all PyCons globally](https://pycon.org)

### ジョブボード

- [Django Job Board](https://djangojobboard.com/) - 他のジョブボードを集計するDjangoジョブボード。 元々Djangoニュースの仕事.
- [Django Jobs](https://djangojobs.net) - Django Python開発者を雇うためのDjangoジョブ投稿。
- [Python.org Job Boards](https://www.python.org/jobs/) - Django 専用ではありませんが、このジョブボードは公式の Python のウェブサイトによってホストされ、さまざまな Python および Django 関連のジョブの機会を備えています。

### ニュースレター

- [Django News](https://django-news.com) - 発表、記事、プロジェクト、およびトークに関する毎週のニュースレター。

### ポッドキャスト

- [Django Chat](https://djangochat.com/) - ウィリアム・ヴィンセントとジャンゴ・フェロー・カールトン・ギブソンの毎週のポッドキャストが、コア・ディジャンゴのコンセプトと定例のゲストの議論をしています。
- [Django Brew](https://djangobrew.com/) - アダムヒルとSangeeta JadoonananによるDjango Webフレームワークに関する楽しい、カフェインパワードポッドキャスト。
- [TalkPython](https://talkpython.fm/) - Djangoのoccassionalエピソードと主要なPythonのポッドキャスト。
- [Running in Production](https://runninginproduction.com/tags/django) - もはやアクティブではありませんが、Djangoの技術スタックのエピソードの素晴らしいバックログ。

### ビデオ

- [DjangoTV](https://djangotv.com) - Django会議のビデオとチュートリアルのソース。
- [PyVideo](https://pyvideo.org) - Python関連のメディアのインデックスです。

### 出版書籍
印刷中の書籍の完全なリストについては、チェックアウト [DjangoBook.com](https://djangobook.com/).

_ジャンゴ 5_
- [Django for APIs, Fifth Edition](https://learndjango.com/courses/django-for-apis/)
- [Boost Your Django DX](https://adamchainz.gumroad.com/l/byddx)
- [Django 5 By Example](https://www.packtpub.com/en-us/product/django-5-by-example-9781805125457)
- [Django in Action](https://www.manning.com/books/django-in-action)
- [Django for Beginners, Fifth Edition](https://learndjango.com/courses/django-for-beginners/)

## ホスティング

### PaaS(Platforms-as-a-Service)
- [Divio](https://www.divio.com)
- [Fly](https://fly.io)
- [Google Cloud](https://cloud.google.com/python/django/)
- [Heroku](https://www.heroku.com)
- [Microsoft Azure](https://azure.microsoft.com/en-us/develop/python/)
- [Upsun](https://upsun.com)
- [PythonAnywhere](https://www.pythonanywhere.com)
- [Railway](https://railway.app)
- [Render](https://render.com)
- [Vercel](https://vercel.com/home)

### IaaS(インフラ・サービス)
- [Digital Ocean](https://www.digitalocean.com)
- [Linode](https://www.linode.com)
- [Amazon Lightsail](https://aws.amazon.com/lightsail/)
- [Hetzner](https://www.hetzner.com)

### 導入サービス
_アプリをサーバーにデプロイするホストサービスで、他の場所でレンタルできます。_
- [Appliku](https://appliku.com) - DigitalOcean、Hetzner、AWS、Linode上のサーバー向けのDjango-focusedデプロイサービス。
- [DeployHQ](https://www.deployhq.com) - Git からサーバーに SSH、SFTP、S3 をデプロイし、ビルド手順とロールバックを行います。

### 自己主催の展開
_アプリケーションをサーバーにデプロイするオープンソースツール。_
- [Coolify](https://coolify.io) - セルフホストのPaaS(Web UI)をDockerアプリやデータベースに、オプションの有料クラウドコントロールプレーン。
- [Dokploy](https://dokploy.com) - セルフホストPaaS(Web UI付き)、DockerとTraefik上に構築された、オプションの有料クラウドコントロールプレーン。
- [CapRover](https://caprover.com) - ウェブUIとワンクリックアプリでホストされているPaaSを、Docker Swarm上に構築しました。
- [Kamal](https://kamal-deploy.org) - Basecamp から、コンテナを SSH 上で任意のサーバーにデプロイします。
- [Dokku](https://dokku.com) - ヘロクスタイルの git プッシュ デプロイで Docker を搭載した PaaS。
- [Piku](https://github.com/piku/piku) - git push 用の Tiny Heroku-style PaaS が 1 つのサーバーにデプロイされます。

## プロジェクト

### ボイラープレート
- [cookiecutter-django](https://github.com/cookiecutter/cookiecutter-django/) - フルボディのスタータープロジェクト、高度にカスタマイズ可能です。
- [django-base-site](https://github.com/epicserve/django-base-site/) - 多くの一般的なサードパーティパッケージがあらかじめインストールされているDjangoサイト。
- [djangox](https://github.com/wsvincent/lithium/) - Pip、Pipenv、またはDocker用のスタータープロジェクトが含まれています。
- [django-docker-template](https://github.com/amerkurev/django-docker-template) - Postgres、Gunicorn、Traefik(自動更新 Let's Encrypt)でDjangoをDockerized。
- [django-startproject](https://github.com/jefftriplett/django-startproject) - Django は、バッテリーでプロジェクトテンプレートを起動します。
- [wemake-django-template](https://github.com/wemake-services/wemake-django-template/) - コードの品質とセキュリティに焦点を当てたBleeding-edge Djangoテンプレート。
- [cookiecutter-vue-django](https://github.com/ilikerobots/cookiecutter-vue-django) - ジャンゴ + VueスタータープロジェクトはVue SFCとDjangoテンプレートを融合しました。
- [sidewinder](https://github.com/stribny/sidewinder/) - Djangoスターターキットは、良いデフォルト、開発者の経験、および展開に焦点を当てています。
- [Falco](https://github.com/falcopackages/falco-cli) - Django 開発者の経験を高める: モダン ジャンゴ 開発者のための CLI とガイド。
- [BH2](https://codeberg.org/trey/bh2) - Djiffyで新しいDjangoサイトを立ち上げる
- [django-react-boilerplate](https://github.com/vintasoftware/django-react-boilerplate) - Django、React、Tailwind、Webpackプロジェクトボイラープレート

### オープンソースプロジェクト
- [Blog app with users and forms](https://github.com/wsvincent/djangoforbeginners/tree/master/ch7-blog-app-with-users/)
- [Newspaper app with custom user model, full user auth](https://github.com/wsvincent/djangoforbeginners/tree/master/ch15-comments)
- [Behavior-Driven Development with Aloe](https://github.com/testdrivenio/django-aloe-bdd/)
- [Image Sharing Blog](https://github.com/MeNsaaH/soMedia)
- [Bootcamp: An enterprise social network](https://github.com/vitorfs/bootcamp)
- [Zulip](https://github.com/zulip/zulip/) - オープンソースチームチャット。
- [django-job-portal](https://github.com/manjurulhoque/django-job-portal) - Djangoを使用したジョブポータルアプリケーション。
- [Built with Django](https://builtwithdjango.com) - 素晴らしいDjangoプロジェクトのキュレーションリスト。
- [PostHog](https://github.com/PostHog/posthog) - オープンソースの製品分析。
- [HyperKitty](https://gitlab.com/mailman/hyperkitty) - GNU Mailman v3 アーカイブにアクセスするためのWebインターフェイス。
- [Healthchecks](https://github.com/healthchecks/healthchecks) - PythonとDjangoで書かれたCronモニタリングツール。
- [Flagsmith](https://github.com/Flagsmith/flagsmith) - オープンソース機能 フラグ、リモート設定、ABテスト。
- [OpenContracts](https://github.com/Open-Source-Legal/OpenContracts) - 自動化されたPDF解析、ベクターの埋め込み、LLM統合を組み合わせたエンタープライズグレードのドキュメント分析プラットフォーム。
- [Baserow](https://github.com/baserow/baserow) - DjangoとVue.jsで構築されたオープンソースの非コードデータベースとAirtableの代替。
- [Django CRM Admin](https://github.com/DjangoCRM/django-crm) - Django Admin サイト上に完全に構築されたオープンソースのPython CRM。
- [linkding](https://github.com/sissbruecker/linkding) - Docker を使用して、最小限、高速、簡単にセットアップするように設計されているセルフホストのブックマークマネージャ。
- [pythonic-news](https://github.com/sebst/pythonic-news) - ハッカーニュースクローン。
- [Revel](https://github.com/letsrevel/revel-backend) - 組織、アンケートベースの出席者スクリーニング、QRチェックイン、Stripe支払いによるセルフホスト可能なイベント管理およびチケットプラットフォーム。
- [venueless](https://github.com/venueless/venueless) - プレティックスチームからライブストリーム、チャット、ビデオルームを備えたオンラインおよびハイブリッドイベントのプラットフォーム。
- [pretix](https://github.com/pretix/pretix) - カンファレンス、フェスティバル、コンサートなどのチケットショップのお申込み
- [pretalx](https://github.com/pretalx/pretalx) - 紙、スケジューリング、スピーカー管理の呼び出しのための会議計画ツール。
- [ioe](https://github.com/zhtyyx/ioe) - 在庫、販売チェックアウト、会員アカウントでセルフホストされた店舗管理。

## ジャンゴ REST フレームワーク

_DjangoでWeb APIをビルドする最も一般的な方法。_

### DRF リソース

<!--lint disable double-link-->
- [Official Documentation](https://www.django-rest-framework.org/)
- [DRF Source Code](https://github.com/encode/django-rest-framework)
- [awesome-django-rest-framework](https://github.com/nioperas06/awesome-django-rest-framework)
<!--lint enable double-link-->

### DRFチュートリアル

<!--lint ignore double-link-->
- [Official REST Framework - A Beginner's Guide](https://learndjango.com/tutorials/official-django-rest-framework-tutorial-beginners)
- [Building APIs with Django and DRF](https://books.agiliq.com/projects/django-api-polls-tutorial/en/latest/)
- [DRF with React](https://www.valentinog.com/blog/drf/)
- [Making React and Django play well together](https://fractalideas.com/blog/making-react-and-django-play-well-together/)

## ワグテール

_Wagtailは、現代のウェブサイトのための強力なCMSです。_

### ワグテールリソース
<!--lint disable double-link-->
- [Official website](https://wagtail.org/)
- [Developer documentation](https://docs.wagtail.org/en/stable/)
- [User documentation](https://guide.wagtail.org/en-latest/)
- [Wagtail Source Code](https://github.com/wagtail/wagtail/)
- [awesome-wagtail](https://github.com/wagtail/awesome-wagtail)
- [This week in Wagtail](https://wagtail.org/this-week-in-wagtail/) - Wagtailコアチームからのアップデートで毎週のメールが届きます。
- [Wagtail Space](https://www.wagtail.space/) - 世界中のワグテール会議。
- [Wagtail events](https://wagtail.org/events/) - オンライン・イン・パーソン・ワグテールイベント
<!--lint enable double-link-->

このリストからリポジトリを閲覧および検索するための便利な方法は、 [awesome.lvtd.dev/lists/awesome-django](https://awesome.lvtd.dev/lists/awesome-django/).
