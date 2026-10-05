# Awesome Flask [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Python と拡張エコシステム用のマイクロWebフレームワークです。

このリストのチュートリアル、トーク、動画は無料です。 有料コースはご利用いただけません。

<p align="right">
  <a href="https://flask.palletsprojects.com/">
    <img src="flask-icon.svg" width="72" alt="Flask">
  </a>
</p>

## 目次

- [公式リソース](#official-resources)
- [拡張機能](#extensions)
  - [管理](#admin)
  - [API について](#apis)
  - [認証](#auth)
  - [キャッシュ](#cache)
  - [データベース](#databases)
  - [開発者ツール](#developer-tools)
  - [電子メール](#email)
  - [フォームと検証](#forms-and-validation)
  - [フルテキスト検索](#full-text-search)
  - [セキュリティ](#security)
  - [タスクキュー](#task-queues)
  - [ユーティリティ](#utils)
- [リソース](#resources)
  - [コミュニティ](#community)
  - [チュートリアル](#tutorials)
  - [出版書籍](#books)
  - [インタビュー](#talks)
  - [ビデオ](#videos)
- [プロジェクト](#projects)
  - [ひな形](#boilerplates)
  - [オープンソースプロジェクト](#open-source-projects)
- [ホスティング](#hosting)

## 公式リソース

- [Flask](https://flask.palletsprojects.com/) - 現在および過去のリリースに関する公式ドキュメント。
- [Flaskr Tutorial](https://flask.palletsprojects.com/tutorial/) - 小さなブログを作成する公式チュートリアル。
- [Source Code](https://github.com/pallets/flask) - パレットによってホストされるフラスコ自体。
- [Pallets-Eco](https://github.com/pallets-eco) - コミュニティエクステンションは、コアプロジェクトの横に維持されます。
- [Quart](https://github.com/pallets/quart) - フラスコの公式 ASGI は、対応する API で対応しています。

## 拡張機能

### 管理

- [Flask-Admin](https://github.com/pallets-eco/flask-admin) - アプリケーションデータを管理するための拡張可能な管理者インターフェイス。

### API について

- [APIFlask](https://github.com/apiflask/apiflask) - マーシュマロ検証とOpenAPI生成によるフラスコWeb APIフレームワーク。
- [Connexion](https://github.com/spec-first/connexion) - フラスコ上で実行できるSpec-first OpenAPIフレームワーク。
- [Eve](https://github.com/pyeve/eve) - FlaskとMongoDBのREST APIフレームワーク。
- [Flasgger](https://github.com/flasgger/flasgger) - OpenAPI と Swagger UI をフラスコビューで表示します。
- [Flask-Rebar](https://github.com/plangrid/flask-rebar) - Flask、marshmallow、およびOpenAPIはRESTサービスのために結合しました。
- [Flask-RESTful](https://github.com/flask-restful/flask-restful) - REST API を構築するための軽量ヘルパー。
- [Flask-RESTX](https://github.com/python-restx/flask-restx) - コミュニティフォークのフラスコ-RESTPlusとSwaggerの文書.
- [flask-smorest](https://github.com/marshmallow-code/flask-smorest) - Marshmallow-first REST フレームワーク(自動 OpenAPI )

### 認証

- [Authlib](https://github.com/authlib/authlib) - OAuth 1、OAuth 2、OpenID クライアントとサーバーを接続します。
- [Authomatic](https://github.com/authomatic/authomatic) - フレームワークアグノスティック OAuth と OpenID クライアント。
- [Flask-Dance](https://github.com/singingwolfboy/flask-dance) - OAuth は GitHub や Google などの組み込みプロバイダで対応しています。
- [Flask-HTTPAuth](https://github.com/miguelgrinberg/Flask-HTTPAuth) - ルートの基本的な、消化、トークン認証。
- [Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended) - リフレッシュトークンと細かい請求によるJWT認証。
- [Flask-Login](https://github.com/maxcountryman/flask-login) - セッションベースのユーザーログイン管理。
- [Flask-Praetorian](https://github.com/dusktreader/flask-praetorian) - API の JWT 認証とロールベース認証
- [Flask-Pundit](https://github.com/anurag90x/flask-pundit) - Rails Punditに触発されたポリシーベースの認可。
- [Flask-Security](https://github.com/pallets-eco/flask-security) - 口座管理、認証、認可。 Flask-Security-Too を続けてください。
- [Flask-Session](https://github.com/pallets-eco/flask-session) - フラスコのサーバー側セッション。
- [Flask-User](https://github.com/lingthio/Flask-User) - カスタマイズ可能なユーザー登録、ログイン、アカウント管理。

### キャッシュ

- [Flask-Caching](https://github.com/pallets-eco/flask-caching) - 複数のバックエンドのサポートをキャッシュします。

### データベース

- [Flask-Alembic](https://github.com/pallets-eco/flask-alembic) - フラスコ-SQLAlchemy データベースに並んでいる移行。
- [Flask-Migrate](https://github.com/miguelgrinberg/Flask-Migrate) - Alembic による Flask-SQLAlchemy のデータベースの移行。
- [Flask-MongoEngine](https://github.com/MongoEngine/flask-mongoengine) - WTForms サポートとMongoEngineの統合。
- [Flask-PyMongo](https://github.com/mongodb-labs/flask-pymongo) - MongoDB の PyMongo 統合
- [Flask-SQLAlchemy](https://github.com/pallets-eco/flask-sqlalchemy) - フラスコ用のSQLAlchemy統合。
- [Advanced Alchemy](https://github.com/litestar-org/advanced-alchemy) - SQLAlchemy のリポジトリ、Alembic のヘルパー、およびファーストパーティのフラスコの拡張を伴います。

### 開発者ツール

- [Elastic APM](https://github.com/elastic/apm-agent-python) - フラスコのアプリケーション性能監視
- [Flask-DebugToolbar](https://github.com/pallets-eco/flask-debugtoolbar) - Django から移植された In-browser デバッグツールバー。
- [Flask-MonitoringDashboard](https://github.com/flask-dashboard/Flask-MonitoringDashboard) - フラスコサービスの自動性能監視
- [Flask-Testing](https://github.com/jarus/flask-testing) - フラスコアプリケーション用のユニットテストヘルパー。
- [Mixer](https://github.com/klen/mixer) - SQLAlchemyとDjangoモデルのオブジェクト工場。
- [nplusone](https://github.com/jmcarp/nplusone) - Flask-SQLAlchemy を使用するときに N+1 のクエリを検出します。
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-python-contrib) - フラスコを含むトレースとメトリックス計測。
- [pytest-flask](https://github.com/pytest-dev/pytest-flask) - フラスコアプリケーション用のPytestフィクスチャ。
- [Sentry](https://github.com/getsentry/sentry-python) - フラスコ統合でSDKを追跡するエラー。

### 電子メール

- [Flask-Mail](https://github.com/pallets-eco/flask-mail) - フラスコのためのSMTPメール送信。
- [Flask-Mailman](https://github.com/waynerv/flask-mailman) - ジャンゴのメールシステムのポートをフラスコへ。

### フォームと検証

- [Flask-Marshmallow](https://github.com/marshmallow-code/flask-marshmallow) - シリアライズと検証のためのMarshmallow統合。
- [Flask-Pydantic](https://github.com/pallets-eco/flask-pydantic) - フラスコビューのピダンティック検証。
- [Flask-WTF](https://github.com/pallets-eco/flask-wtf) - CSRF、ファイルアップロード、およびreCAPTCHAとのWTFormsの統合。

### フルテキスト検索

- [flask-msearch](https://github.com/honmaple/flask-msearch) - フラスコのフルテキスト検索、Wooshサポート
- [SQLAlchemy-Searchable](https://github.com/falcony-io/sqlalchemy-searchable) - PostgreSQL の SQLAlchemy モデルのフルテキスト検索。

### セキュリティ

- [Flask-Bcrypt](https://github.com/maxcountryman/flask-bcrypt) - Bcryptパスワードハッシュ。
- [Flask-CORS](https://github.com/corydolphin/flask-cors) - クロスオリジンリソース共有(CORS)のサポート
- [Flask-Limiter](https://github.com/alisaifee/flask-limiter) - フラスコ経路のレート制限
- [Flask-SeaSurf](https://github.com/maxcountryman/flask-seasurf) - フラスコのCSRF保護
- [Flask-Talisman](https://github.com/wntrblm/flask-talisman) - HTTPS の執行および保証ヘッダー。

### タスクキュー

- [Celery](https://github.com/celery/celery) - 一般的にフラスコで使用されているタスクキューを配布しました。
- [Dramatiq](https://github.com/Bogdanp/dramatiq) - Celeryの速い代わり、と [Flask-Dramatiq](https://flask-dramatiq.readthedocs.io/) 利用できる。
- [Flask-RQ](https://github.com/pallets-eco/flask-rq) - Redis Queue (RQ) フラスコとQuartの統合。
- [Huey](https://github.com/coleifer/huey) - 小さなRedis-backedタスクキュー。

### ユーティリティ

- [Flask-Assets](https://github.com/miracle2k/flask-assets) - 静的ファイルの結合と縮小のためのWebassetsの統合。
- [Flask-Babel](https://github.com/python-babel/flask-babel) - Babelによる国際化とローカリゼーション。
- [Flask-GoogleMaps](https://github.com/flask-extensions/Flask-GoogleMaps) - フラスコテンプレートでGoogleマップを埋め込む。
- [flask-graphql](https://github.com/graphql-python/flask-graphql) - グラフQLはフラスコのサポートをしています。
- [Flask-HTMLmin](https://github.com/hamidfzm/Flask-HTMLmin) - フラスコ応答のためのHTMLの縮小。
- [flask-jsonrpc](https://github.com/cenobites/flask-jsonrpc) - フラスコのJSON-RPC対応
- [Flask-Moment](https://github.com/miguelgrinberg/Flask-Moment) - Moment.js は、Jinja テンプレートの日付のヘルパーです。
- [Flask-Paginate](https://github.com/lixxu/flask-paginate) - フラスコのためのパジネーションヘルパー。
- [flask-s3](https://github.com/e-dard/flask-s3) - Amazon S3からフラスコ静的資産をサーブします。
- [Flask-SocketIO](https://github.com/miguelgrinberg/Flask-SocketIO) - ソケット。 FlaskのIO統合。
- [Frozen-Flask](https://github.com/Frozen-Flask/Frozen-Flask) - フラスコアプリを静的なサイトに凍結します。

## リソース

### コミュニティ

- [Discord](https://discord.gg/pallets) - パレットコミュニティサーバー。 フラスコヘルプチャンネルを使用します。
- [Reddit](https://www.reddit.com/r/flask/) - フラスコサブreddit。
- [Stack Overflow](https://stackoverflow.com/questions/tagged/flask) - よくある質問`flask`お問い合わせ

### チュートリアル

- [The Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) - フルフラスコアプリケーションをカバーするロングフォームシリーズ。
- [Discover Flask](https://github.com/realpython/discover-flask) - 実際のPythonからフルスタックフラスコシリーズ。
- [Flaskr TDD](https://github.com/mjhea0/flaskr-tdd) - フラスコ、テスト主導の開発、JavaScript の導入

### 出版書籍

- [Explore Flask](https://explore-flask.readthedocs.io/en/latest/) - フラスコパターンとプロジェクト構造に関する無料書籍。
- [Flask Web Development](https://www.oreilly.com/library/view/flask-web-development/9781491991725/) - O'Reillyは、実際のアプリケーションを構築するMiguel Grinbergによって予約します。

### インタビュー

- [Advanced Flask Patterns](https://speakerdeck.com/mitsuhiko/advanced-flask-patterns) - アーミン・ロナチャーのパターン。
- [Flasky Goodness](https://speakerdeck.com/kennethreitz/flasky-goodness) - ケンネス・リッツ氏によるトーク
- [Domain Driven Design with Flask](https://speakerdeck.com/mikedebo/domain-driven-design-dot-dot-dot-with-flask) - フラスコでDDDのアイデアを適用します。

### ビデオ

- [PyVideo](https://pyvideo.org/search.html?q=flask) - 会議はフラスコにタグ付けされた話.
- [Python Flask Tutorial](https://www.youtube.com/playlist?list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH) - Corey Schaferによるフル機能のWebアプリシリーズ。

## プロジェクト

### ひな形

- [cookiecutter-flask](https://github.com/cookiecutter-flask/cookiecutter-flask) - ブートストラップ、Webpack、認証によるCookiecutterテンプレート。
- [fbone](https://github.com/imwilsonxu/fbone) - 構造化されたアプリケーションレイアウトで古典的なフラスコ骨格。
- [Flask-AppBuilder](https://github.com/dpgaspar/Flask-AppBuilder) - セキュリティ、自動CRUDおよびチャートを備えた迅速なアプリビルダー。
- [Flask-Foundation](https://github.com/JackStouffer/Flask-Foundation) - ベストプラクティススターターアプリケーション。
- [uwsgi-nginx-flask-docker](https://github.com/tiangolo/uwsgi-nginx-flask-docker) - uWSGI、Nginx、フラスコでドッカーイメージ。

### オープンソースプロジェクト

- [Apache Airflow](https://github.com/apache/airflow) - ワークフローを作者、スケジュール、監視するためのプラットフォーム。
- [Apache Superset](https://github.com/apache/superset) - データ探索と可視化プラットフォーム。
- [FlaskBB](https://github.com/flaskbb/flaskbb) - フラスコで構築された古典的なフォーラムソフトウェア。
- [Indico](https://github.com/indico/indico) - CERNが開発したイベント管理システム。
- [PythonBuddy](https://github.com/ethanchewy/PythonBuddy) - ライブシンタックスチェックでオンラインPythonエディタ。
- [Redash](https://github.com/getredash/redash) - さまざまなソースからデータを照会し、視覚化します。
- [SecureDrop](https://github.com/freedomofpress/securedrop) - ニュースルームのWhistleblower投稿システム。
- [SimpleLogin](https://github.com/simple-login/app) - 個人的な受信トレイを保護するメールエイリアスサービス。
- [SkyLines](https://github.com/skylines-project/skylines) - ライブトラッキングとフライトデータベースをグライドします。
- [Timesketch](https://github.com/google/timesketch) - 連携型フォレンジックタイムライン解析

## ホスティング

- [Flask Deployment Options](https://flask.palletsprojects.com/en/stable/deploying/) - WSGIサーバとプラットフォームに関する公式メモ
- [Fly.io](https://fly.io/docs/python/frameworks/flask/) - Fly Machine のユーザーに近いフラスコを展開します。
- [Google Cloud Run](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service) - フラスコとうまく機能するコンテナホスティング。
- [PythonAnywhere](https://help.pythonanywhere.com/pages/Flask/) - 一流のフラスコサポートでPython環境をホストしました。
- [Render](https://render.com/docs/deploy-flask) - フラスコのWebサービスやバックグラウンドワーカー。
- [Zappa](https://github.com/zappa/Zappa) - WSGIアプリをAWS LambdaとAPI Gatewayにデプロイします。

## 貢献する

ご提案も承っております。 お問い合わせ [CONTRIBUTING.md](CONTRIBUTING.md) まずは。 歴史と未整備のエントリは、[archived.md](archived.md) お問い合わせ
