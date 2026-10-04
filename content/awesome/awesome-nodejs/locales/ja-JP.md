<div align="center">
	<div>
		<img width="500" src="media/logo.svg" alt="Awesome Node.js">
		<br>
	</div>
	<br>
	<br>
	<br>
	<br>
	<hr>
	<p>
		<p>
			<sup>
				<a href="https://github.com/sponsors/sindresorhus">私のオープンソース活動はコミュニティに支えられています</a>
			</sup>
		</p>
		<sup>特別な感謝を贈ります：</sup>
		<br>
		<br>
		<br>
		<a href="https://depot.dev?utm_source=github&utm_medium=sindresorhus">
			<div>
				<picture>
					<source width="180" media="(prefers-color-scheme: dark)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-dark.svg">
					<source width="180" media="(prefers-color-scheme: light)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-light.svg">
					<img width="180" src="https://sindresorhus.com/assets/thanks/depot-logo-light.svg" alt="Depot logo">
				</picture>
			</div>
			<b>高速なリモートコンテナビルドと GitHub Actions ランナー。</b>
		</a>
		<br>
		<br>
		<br>
	</p>
	<hr>
	<br>
	<br>
	<br>
	<br>
	<br>
	<a href="https://awesome.re">
		<img src="https://awesome.re/badge-flat2.svg" alt="Awesome">
	</a>
	<p>
		<sub><a href="https://node.cool"><code>node.cool</code></a> と入力するだけでここにアクセスできます。<a href="https://twitter.com/sindresorhus">Twitter</a> でもフォローしてください。</sub>
	</p>
	<br>
	<p>
		<a href="https://en.wikipedia.org/wiki/Node.js">Node.js</a> は、サーバーやコマンドラインツールを作成するためのオープンソースかつクロスプラットフォームの JavaScript ランタイムです。
	</p>
	<br>
</div>

## 目次

- [公式](#official)
- [パッケージ](#packages)
	- [マッドサイエンス](#mad-science)
	- [コマンドラインアプリ](#command-line-apps)
	- [関数型プログラミング](#functional-programming)
	- [HTTP](#http)
	- [デバッグ / プロファイリング](#debugging--profiling)
	- [ロギング](#logging)
	- [コマンドラインユーティリティ](#command-line-utilities)
	- [ビルドツール](#build-tools)
	- [ハードウェア](#hardware)
	- [テンプレート](#templating)
	- [Web フレームワーク](#web-frameworks)
	- [ドキュメント](#documentation)
	- [ファイルシステム](#filesystem)
	- [制御フロー](#control-flow)
	- [ストリーム](#streams)
	- [リアルタイム](#real-time)
	- [画像](#image)
	- [テキスト](#text)
	- [数値](#number)
	- [数学](#math)
	- [日付](#date)
	- [URL](#url)
	- [データ検証](#data-validation)
	- [パース](#parsing)
	- [人間向け表示](#humanize)
	- [圧縮](#compression)
	- [ネットワーク](#network)
	- [データベース](#database)
	- [テスト](#testing)
	- [セキュリティ](#security)
	- [ベンチマーク](#benchmarking)
	- [ミニファイア](#minifiers)
	- [認証](#authentication)
	- [認可](#authorization)
	- [メール](#email)
	- [ジョブキュー](#job-queues)
	- [Node.js 管理](#nodejs-management)
	- [クロスプラットフォーム連携](#cross-platform-integration)
	- [自然言語処理](#natural-language-processing)
	- [プロセス管理](#process-management)
	- [自動化](#automation)
	- [AST](#ast)
	- [静的サイトジェネレーター](#static-site-generators)
	- [コンテンツ管理システム](#content-management-systems)
	- [フォーラム](#forum)
	- [ブログ](#blogging)
	- [奇妙なもの](#weird)
	- [シリアライズ](#serialization)
	- [その他](#miscellaneous)
- [パッケージマネージャー](#package-manager)
- [リソース](#resources)
	- [チュートリアル](#tutorials)
	- [検索](#discovery)
	- [記事](#articles)
	- [ニュースレター](#newsletters)
	- [動画](#videos)
	- [書籍](#books)
	- [ブログ](#blogs)
	- [コース](#courses)
	- [チートシート](#cheatsheets)
	- [ツール](#tools)
	- [コミュニティ](#community)
	- [その他](#miscellaneous-1)
- [関連リスト](#related-lists)

## 公式

- [ウェブサイト](https://nodejs.org)
- [ドキュメント](https://nodejs.org/dist/latest/docs/api/)
- [リポジトリ](https://github.com/nodejs/node)

## パッケージ

### マッドサイエンス

- [webtorrent](https://github.com/webtorrent/webtorrent) - Node.js とブラウザーで動作するストリーミング対応のトレントクライアント。
- [peerflix](https://github.com/mafintosh/peerflix) - ストリーミング対応のトレントクライアント。
- [ipfs](https://github.com/ipfs/helia) - あらゆるコンピューティングデバイスを共通のファイルシステムで接続することを目指す分散型ファイルシステム。
- [stackgl](https://github.com/stackgl) - browserify と npm を基盤とする、WebGL 向けのオープンソースソフトウェアエコシステム。
- [peerwiki](https://github.com/mafintosh/peerwiki) - BitTorrent 上で Wikipedia 全体を利用できます。
- [peercast](https://github.com/mafintosh/peercast) - トレント動画を Chromecast にストリーミングします。
- [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib) - クリーンで読みやすく、実績のある Bitcoin ライブラリ。
- [Bitcore](https://github.com/bitpay/bitcore) - 純粋な実装による強力な Bitcoin ライブラリ。
- [PDFKit](https://github.com/foliojs/pdfkit) - PDF 生成ライブラリ。
- [turf](https://github.com/Turfjs/turf) - モジュール式の地理空間データ処理・分析エンジン。
- [webcat](https://github.com/mafintosh/webcat) - WebRTC を使って Web 上でピアツーピア通信を行うパイプ。GitHub の秘密鍵／公開鍵を認証に利用します。
- [NodeOS](https://github.com/NodeOS/NodeOS) - npm を基盤として動作する、初のオペレーティングシステム。
- [YodaOS](https://github.com/yodaos-project/yodaos) - AI オペレーティングシステム。
- [Brain.js](https://github.com/BrainJS/brain.js) - 機械学習フレームワーク。
- [Pipcook](https://github.com/alibaba/pipcook) - 機械学習パイプラインを作成するためのフロントエンド・アルゴリズムフレームワーク。
- [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) - グラフ理論（ネットワークとも呼ばれる）のモデリングと分析。
- [js-git](https://github.com/creationix/js-git) - Git の JavaScript 実装。
- [xlsx](https://github.com/SheetJS/sheetjs) - 純粋な JavaScript 製の Excel スプレッドシート読み書きライブラリ。
- [isomorphic-git](https://github.com/isomorphic-git/isomorphic-git) - Git の純粋な JavaScript 実装。

### コマンドラインアプリ

- [np](https://github.com/sindresorhus/np) - より使いやすい `npm publish`。
- [npm-name](https://github.com/sindresorhus/npm-name) - npm でパッケージ名が利用可能か確認します。
- [gh-home](https://github.com/sindresorhus/gh-home) - カレントディレクトリにあるリポジトリの GitHub ページを開きます。
- [npm-home](https://github.com/sindresorhus/npm-home) - パッケージの npm ページを開きます。
- [trash](https://github.com/sindresorhus/trash) - `rm` より安全な代替ツール。
- [speed-test](https://github.com/sindresorhus/speed-test) - インターネット接続の速度と ping を測定します。
- [pageres](https://github.com/sindresorhus/pageres) - Web サイトのスクリーンショットを撮影します。
- [cpy](https://github.com/sindresorhus/cpy) - ファイルをコピーします。
- [vtop](https://github.com/MrRio/vtop) - 見やすいグラフを備えた、さらに使いやすい top。
- [empty-trash](https://github.com/sindresorhus/empty-trash) - ゴミ箱を空にします。
- [is-up](https://github.com/sindresorhus/is-up) - Web サイトが稼働中か停止中かを確認します。
- [is-online](https://github.com/sindresorhus/is-online) - インターネット接続が有効か確認します。
- [public-ip](https://github.com/sindresorhus/public-ip) - 自分のパブリック IP アドレスを取得します。
- [clipboard-cli](https://github.com/sindresorhus/clipboard-cli) - ターミナルでコピー＆ペーストします。
- [XO](https://github.com/xojs/xo) - JavaScript の happiness スタイルを用いて、厳格なコードスタイルを強制します。
- [ESLint](https://github.com/eslint/eslint) - JavaScript 向けのプラグイン可能な lint ユーティリティ。
- [David](https://github.com/alanshaw/david) - npm パッケージの依存関係が古くなったときに知らせます。
- [http-server](https://github.com/http-party/http-server) - 設定不要で使えるシンプルなコマンドライン HTTP サーバー。
- [Live Server](https://github.com/tapio/live-server) - ライブリロード機能を備えた開発用 HTTP サーバー。
- [bcat](https://github.com/kessler/node-bcat) - コマンドの出力を Web ブラウザーにパイプします。
- [normit](https://github.com/pawurb/normit) - ターミナルで Google 翻訳と音声合成を利用できます。
- [fkill](https://github.com/sindresorhus/fkill-cli) - プロセスを簡単に終了できる、クロスプラットフォーム対応ツール。
- [pjs](https://github.com/danielstjules/pjs) - パイプで使える JavaScript。ターミナルから素早くフィルター、map、reduce を実行します。
- [license-checker](https://github.com/davglass/license-checker) - アプリの依存関係のライセンスを確認します。
- [browser-run](https://github.com/juliangruber/browser-run) - ブラウザー環境でコードを簡単に実行します。
- [tmpin](https://github.com/sindresorhus/tmpin) - ファイル入力に対応する任意の CLI アプリに、stdin 対応を追加します。
- [wallpaper](https://github.com/sindresorhus/wallpaper) - デスクトップの壁紙を変更します。
- [pen](https://github.com/hatashiro/pen) - お気に入りのエディターから、ブラウザーで Markdown のライブプレビューを表示します。
- [dark-mode](https://github.com/sindresorhus/dark-mode) - macOS のダークモードを切り替えます。
- [Jsome](https://github.com/Javascipt/Jsome) - 色とインデントを設定でき、JSON を見やすく整形して出力します。
- [mobicon](https://github.com/samverschueren/mobicon-cli) - モバイルアプリのアイコン生成ツール。
- [mobisplash](https://github.com/samverschueren/mobisplash-cli) - モバイルアプリのスプラッシュ画面生成ツール。
- [diff2html-cli](https://github.com/rtfpessoa/diff2html-cli) - Git の差分を見やすい HTML に変換します。
- [trymodule](https://github.com/victorb/trymodule) - ターミナルで npm パッケージを試せます。
- [jscpd](https://github.com/kucherenko/jscpd) - ソースコードのコピー＆ペースト箇所を検出します。
- [atmo](https://github.com/Raathigesh/Atmo) - サーバーサイド API のモックツール。
- [auto-install](https://github.com/siddharthkp/auto-install) - コードを書くと、依存関係を自動でインストールします。
- [cost-of-modules](https://github.com/siddharthkp/cost-of-modules) - 動作を遅くしている依存関係を見つけます。
- [localtunnel](https://github.com/localtunnel/localtunnel) - ローカルホストをインターネットに公開します。
- [svg-term-cli](https://github.com/marionebl/svg-term-cli) - ターミナルセッションを SVG 形式で共有します。
- [gtop](https://github.com/aksakalli/gtop) - ターミナル向けのシステム監視ダッシュボード。
- [themer](https://github.com/themerdev/themer) - エディター、ターミナル、壁紙、Slack などのテーマを生成します。
- [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - ターミナルから直接、コードの美しい画像を作成します。
- [cash-cli](https://github.com/xxczaki/cash-cli) - 170 種類の通貨を相互に換算します。
- [taskbook](https://github.com/klaussinani/taskbook) - コマンドライン環境で使えるタスク、ボード、メモ。
- [discharge](https://github.com/brandonweiss/discharge) - 静的 Web サイトを Amazon S3 に簡単にデプロイします。
- [npkill](https://github.com/voidcosmos/npkill) - 古くて容量の大きい node_modules フォルダーを簡単に見つけて削除します。

### 関数型プログラミング

- [lodash](https://github.com/lodash/lodash) - 一貫性、カスタマイズ性、パフォーマンスなどを実現するユーティリティライブラリ。Underscore.js より優れ、高速です。
- [immutable](https://github.com/immutable-js/immutable-js) - 不変データコレクション。
- [Ramda](https://github.com/ramda/ramda) - 自動カリー化と引数順序の反転によって柔軟な関数合成を実現するユーティリティライブラリ。データを変更せずに扱えます。
- [Mout](https://github.com/mout/mout) - 必要なモジュールや関数だけを選んで読み込める点が、他の既存ライブラリとの大きな違いであるユーティリティライブラリ。余計なオーバーヘッドがありません。
- [RxJS](https://github.com/reactivex/rxjs) - さまざまな種類のデータを変換、合成、クエリするための関数型リアクティブライブラリ。
- [Kefir.js](https://github.com/kefirjs/kefir) - 高いパフォーマンスと低いメモリ使用量を重視したリアクティブライブラリ。

### HTTP

- [got](https://github.com/sindresorhus/got) - 組み込みの `http` モジュールを使いやすくしたインターフェース。
- [undici](https://github.com/nodejs/undici) - 依存関係ゼロで一から書かれた、高性能な HTTP クライアント。
- [ky-universal](https://github.com/sindresorhus/ky-universal) - Fetch をベースにした汎用 HTTP クライアント。
- [node-fetch](https://github.com/node-fetch/node-fetch) - Node.js 向けの `window.fetch`。
- [axios](https://github.com/axios/axios) - ブラウザーでも動作する Promise ベースの HTTP クライアント。
- [superagent](https://github.com/visionmedia/superagent) - HTTP リクエストライブラリ。
- [http-fake-backend](https://github.com/micromata/http-fake-backend) - 設定可能なルートを介し、JSON ファイルや JavaScript オブジェクトの内容を使って疑似バックエンドを構築します。
- [cacheable-request](https://github.com/lukechilds/cacheable-request) - RFC 準拠のキャッシュに対応し、ネイティブ HTTP リクエストをラップします。
- [gotql](https://github.com/khaosdoctor/gotql) - [got](https://github.com/sindresorhus/got) をベースにした GraphQL リクエストライブラリ。
- [global-agent](https://github.com/gajus/global-agent) - 環境変数で設定できるグローバル HTTP/HTTPS プロキシエージェント。
- [smoke](https://github.com/sinedied/smoke) - 記録機能を備えた、ファイルベースの HTTP モックサーバー。
- [purest](https://github.com/simov/purest) - REST クライアント。

### デバッグ / プロファイリング

- [debug](https://github.com/debug-js/debug) - 小さなデバッグ用ユーティリティ。
- [why-is-node-running](https://github.com/mafintosh/why-is-node-running) - Node.js が動いているのに、理由がわからないときに。
- [njsTrace](https://github.com/valyouw/njstrace) - コードを計測・トレースし、すべての関数呼び出し、引数、戻り値、各関数の実行時間を確認できます。
- [vstream](https://github.com/joyent/node-vstream) - ストリームのパイプラインを調べるための、計測可能なストリーム用ミックスイン。
- [stackman](https://github.com/watson/stackman) - コード抜粋などを加えて、エラースタックトレースを見やすくします。
- [locus](https://github.com/alidavut/locus) - 実行時に REPL を起動し、すべての変数にアクセスできます。
- [0x](https://github.com/davidmarkclements/0x) - フレームグラフによるプロファイリング。
- [ctrace](https://github.com/automation-stack/ctrace) - システムコールとシグナルのトレースを、見やすく改善された形式で表示します。
- [leakage](https://github.com/andywer/leakage) - メモリリークのテストを作成します。
- [llnode](https://github.com/nodejs/llnode) - クラッシュした Node.js プロセスのオブジェクトを調べ、分析結果を得られる事後解析ツール。
- [thetool](https://github.com/sfninja/thetool) - アプリの CPU、メモリなどのプロファイルを、Chrome DevTools で扱いやすい形式で収集します。
- [swagger-stats](https://github.com/slanatech/swagger-stats) - API 呼び出しをトレースし、API のパフォーマンス、稼働状態、利用状況の指標を監視します。
- [NiM](https://github.com/june07/nim) - DevTools のデバッグワークフローを管理します。
- [dats](https://github.com/immobiliare/dats) - ミニマルで依存関係ゼロの [StatsD](https://github.com/statsd/statsd) クライアント。

### ロギング

- [pino](https://github.com/pinojs/pino) - Bunyan に着想を得た、非常に高速なロガー。
- [winston](https://github.com/winstonjs/winston) - 複数のトランスポートに対応した非同期ロギングライブラリ。
- [console-log-level](https://github.com/watson/console-log-level) - ログレベルとカスタムプレフィックスに対応した、できる限りシンプルなロガー。
- [storyboard](https://github.com/guigrpa/storyboard) - エンドツーエンドで階層化された、リアルタイムかつ色鮮やかなログとストーリー。
- [consola](https://github.com/unjs/consola) - コンソールロガー。

### コマンドラインユーティリティ

- [chalk](https://github.com/chalk/chalk) - ターミナルの文字列を適切にスタイリングします。
- [meow](https://github.com/sindresorhus/meow) - CLI アプリ用ヘルパー。
- [yargs](https://github.com/yargs/yargs) - 洗練されたユーザーインターフェースを自動生成するコマンドラインパーサー。
- [ora](https://github.com/sindresorhus/ora) - 洗練されたターミナル用スピナー。
- [get-stdin](https://github.com/sindresorhus/get-stdin) - stdin を簡単に扱えます。
- [log-update](https://github.com/sindresorhus/log-update) - ターミナルで前の出力を上書きしてログを表示します。進捗バーやアニメーションなどの描画に便利です。
- [Ink](https://github.com/vadimdemedes/ink) - 対話型コマンドラインアプリのための React。
- [listr2](https://github.com/listr2/listr2) - ターミナル用タスクリスト。
- [conf](https://github.com/sindresorhus/conf) - アプリやモジュール向けのシンプルな設定管理。
- [ansi-escapes](https://github.com/sindresorhus/ansi-escapes) - ターミナルを操作するための ANSI エスケープコード。
- [log-symbols](https://github.com/sindresorhus/log-symbols) - さまざまなログレベルに使える色付きシンボル。
- [figures](https://github.com/sindresorhus/figures) - Windows CMD 用の代替表示も備えた Unicode シンボル。
- [boxen](https://github.com/sindresorhus/boxen) - ターミナルにボックスを作成します。
- [terminal-link](https://github.com/sindresorhus/terminal-link) - ターミナルにクリック可能なリンクを作成します。
- [terminal-image](https://github.com/sindresorhus/terminal-image) - ターミナルに画像を表示します。
- [string-width](https://github.com/sindresorhus/string-width) - 文字列を表示するのに必要な桁数、つまり視覚上の幅を取得します。
- [cli-truncate](https://github.com/sindresorhus/cli-truncate) - ターミナル上で文字列を指定した幅に切り詰めます。
- [blessed](https://github.com/chjj/blessed) - Curses 風ライブラリ。
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - 対話型のコマンドラインプロンプト。
- [yn](https://github.com/sindresorhus/yn) - yes/no のような値を解析します。
- [cli-table3](https://github.com/cli-table/cli-table3) - 見やすい Unicode テーブル。
- [drawille](https://github.com/madbence/node-drawille) - Unicode 点字文字を使ってターミナルに描画します。
- [ascii-charts](https://github.com/jstrace/chart) - ターミナル用 ASCII 棒グラフ。
- [progress](https://github.com/visionmedia/node-progress) - 柔軟な ASCII 進捗バー。
- [insight](https://github.com/yeoman/insight) - 利用状況の指標を匿名で Google Analytics に送信し、ツールがどのように使われているかを把握できます。
- [cli-cursor](https://github.com/sindresorhus/cli-cursor) - CLI のカーソルを表示・非表示にします。
- [cli-columns](https://github.com/shannonmoeller/cli-columns) - Unicode と ANSI に安全に対応した、列形式のテキストリスト。
- [cfonts](https://github.com/dominikwilkowski/cfonts) - コンソール向けのクールな ASCII フォント。
- [multispinner](https://github.com/codekirei/node-multispinner) - 複数の CLI スピナーを同時に実行し、それぞれ個別に制御できます。
- [omelette](https://github.com/f/omelette) - シェルの自動補完を支援します。
- [cross-env](https://github.com/kentcdodds/cross-env) - クロスプラットフォームで環境変数を設定します。
- [shelljs](https://github.com/shelljs/shelljs) - 移植性のある Unix シェルコマンド。
- [sudo-block](https://github.com/sindresorhus/sudo-block) - root 権限でアプリを実行できないようにします。
- [sparkly](https://github.com/sindresorhus/sparkly) - `▁▂▃▅▂▇` のようなスパークラインを生成します。
- [Bit](https://github.com/teambit/bit) - リポジトリをまたいで小さなモジュールやコンポーネントを作成、保守、検索、利用できます。
- [gradient-string](https://github.com/bokub/gradient-string) - ターミナル出力に美しいカラーグラデーションを付けます。
- [oclif](https://github.com/oclif/oclif) - パーサー、自動ドキュメント生成、テスト、プラグインを備えた CLI フレームワーク。
- [terminal-size](https://github.com/sindresorhus/terminal-size) - ターミナルウィンドウのサイズを確実に取得します。
- [Cliffy](https://github.com/drew-y/cliffy) - 対話型 CLI を構築するためのフレームワーク。
- [zx](https://github.com/google/zx) - JavaScript でシェルスクリプトを書けます。

### ビルドツール

- [parcel](https://github.com/parcel-bundler/parcel) - 圧倒的な速さで動作する、設定不要の Web アプリ向けバンドラー。
- [webpack](https://github.com/webpack/webpack) - ブラウザー向けにモジュールとアセットをパッケージ化します。
- [rollup](https://github.com/rollup/rollup) - 次世代の ES2015 モジュールバンドラー。
- [gulp](https://github.com/gulpjs/gulp) - 設定よりコードを重視する、ストリーミング対応の高速ビルドシステム。
- [Broccoli](https://github.com/broccolijs/broccoli) - 高速で信頼性の高いアセットパイプライン。一定時間での再ビルドと簡潔なビルド定義に対応します。
- [Brunch](https://github.com/brunch/brunch) - シンプルで宣言的な設定、高速なインクリメンタルコンパイル、明確な方針に基づくワークフローを備えたフロントエンド Web アプリ用ビルドツール。
- [FuseBox](https://github.com/fuse-box/fuse-box) - webpack、JSPM、SystemJS の強みを組み合わせた高速ビルドシステム。TypeScript を第一級でサポートします。
- [pkg](https://github.com/vercel/pkg) - Node.js プロジェクトを実行可能ファイルにパッケージ化します。
- [Vite](https://github.com/vitejs/vite) - ホットモジュール置換と静的アセットのバンドルに対応したフロントエンドビルドツール。

### ハードウェア

- [johnny-five](https://github.com/rwaldron/johnny-five) - Firmata ベースの Arduino フレームワーク。
- [serialport](https://github.com/serialport/node-serialport) - 読み書き用にシリアルポートへアクセスします。
- [usb](https://github.com/node-usb/node-usb) - USB ライブラリ。
- [i2c-bus](https://github.com/fivdi/i2c-bus) - I2C シリアルバスへのアクセス。
- [onoff](https://github.com/fivdi/onoff) - GPIO へのアクセスと割り込み検出。
- [spi-device](https://github.com/fivdi/spi-device) - SPI シリアルバスへのアクセス。
- [pigpio](https://github.com/fivdi/pigpio) - Raspberry Pi 上で高速な GPIO、PWM、サーボ制御、状態変化通知、割り込み処理を行います。
- [gps](https://github.com/infusion/GPS.js) - GPS 受信機を扱うための NMEA パーサー。
- [modbus-serial](https://github.com/yaacov/node-modbus-serial) - MODBUS-RTU（シリアルおよび TCP）の純粋な JavaScript 実装。

### テンプレート

- [marko](https://github.com/marko-js/marko) - HTML ベースのテンプレートエンジン。テンプレートを CommonJS モジュールにコンパイルし、ストリーミング、非同期レンダリング、カスタムタグに対応します。
- [nunjucks](https://github.com/mozilla/nunjucks) - テンプレート継承や非同期制御などに対応したテンプレートエンジン（Jinja2 に着想）。
- [handlebars.js](https://github.com/handlebars-lang/handlebars.js) - Mustache テンプレートを拡張し、ヘルパーや高度なブロックなどの強力な機能を追加します。
- [EJS](https://github.com/mde/ejs) - シンプルで特定の流儀を押し付けないテンプレート言語。
- [Pug](https://github.com/pugjs/pug) - Haml の影響を強く受けた高性能テンプレートエンジン。

### Web フレームワーク

- [Fastify](https://github.com/fastify/fastify) - 高速でオーバーヘッドの小さい Web フレームワーク。
- [Next.js](https://github.com/vercel/next.js) - サーバーサイドレンダリングに対応した、ユニバーサル JavaScript Web アプリ向けのミニマルなフレームワーク。
- [Nuxt.js](https://github.com/nuxt/nuxt.js) - サーバーサイドレンダリングに対応した Vue.js アプリ向けのミニマルなフレームワーク。
- [Hapi](https://github.com/hapijs/hapi) - アプリケーションやサービスを構築するためのフレームワーク。
- [Micro](https://github.com/vercel/micro) - 非同期処理を採用したミニマルなマイクロサービスフレームワーク。
- [Koa](https://github.com/koajs/koa) - Express の開発チームが設計したフレームワーク。Web アプリケーションや API のために、より小さく表現力豊かで堅牢な基盤を目指しています。
- [Express](https://github.com/expressjs/express) - 単一ページ、複数ページ、ハイブリッド型の Web アプリケーションを構築するための、豊富な機能を備えたフレームワーク。
- [Feathers](https://github.com/feathersjs/feathers) - Express の理念に基づいて構築されたマイクロサービスフレームワーク。
- [LoopBack](https://github.com/loopbackio/loopback-next) - REST API を作成し、バックエンドのデータソースに簡単に接続できる強力なフレームワーク。
- [Meteor](https://github.com/meteor/meteor) - どこでもデータベースを使え、ネットワーク上でデータを扱える、極めてシンプルな純粋 JavaScript 製 Web フレームワーク。*([awesome-meteor](https://github.com/Urigo/awesome-meteor) もおすすめです)*
- [Restify](https://github.com/restify/node-restify) - 適切な REST Web サービスを構築できます。
- [ThinkJS](https://github.com/thinkjs/thinkjs) - ES2015 以降、WebSocket、REST API に対応したフレームワーク。
- [ActionHero](https://github.com/actionhero/actionhero) - TCP ソケット、WebSocket、HTTP クライアント向けに、再利用可能でスケーラブルな API を構築するフレームワーク。
- [seneca](https://github.com/senecajs/seneca) - マイクロサービスを作成するためのツールキット。
- [AdonisJs](https://github.com/adonisjs/core) - 依存性注入と IoC コンテナを堅固な基盤とする、Node.js 向けの本格的な MVC フレームワーク。
- [Moleculer](https://github.com/moleculerjs/moleculer) - 高速で強力なマイクロサービスフレームワーク。
- [Nest](https://github.com/nestjs/nest) - 効率的でスケーラブルなサーバーサイドアプリを構築するための、Angular に着想を得たフレームワーク。
- [TypeGraphQL](https://github.com/MichalLytek/type-graphql) - クラスとデコレーターを使い、TypeScript で GraphQL API を作成する最新のフレームワーク。
- [Tinyhttp](https://github.com/tinyhttp/tinyhttp) - モダンで高速な Express 風 Web フレームワーク。
- [Marble.js](https://github.com/marblejs/marble) - TypeScript と RxJS をベースにした、サーバーサイドアプリ構築用の関数型リアクティブフレームワーク。
- [Lad](https://github.com/ladjs/lad) - Express の元テクニカルコミッティーメンバーであり Koa のメンバーでもある開発者が作成したフレームワーク。Web、API、ジョブ、プロキシの各サーバーをまとめています。
- [Ts.ED](https://github.com/tsedio/tsed) - Express.js または Koa.js を基盤としてサーバーサイドアプリを構築するための、直感的な TypeScript フレームワーク。
- [Hono](https://github.com/honojs/hono) - 小型で高速な Web フレームワーク。

### ドキュメント

- [documentation.js](https://github.com/documentationjs/documentation) - ES2015 以降と Flow の型注釈に対応した API ドキュメント生成ツール。
- [Docco](https://github.com/jashkenas/docco) - コードにコメントを織り交ぜて表示する HTML ドキュメントを生成します。
- [JSDoc](https://github.com/jsdoc/jsdoc) - JavaDoc や PHPDoc に似た API ドキュメント生成ツール。
- [Docusaurus](https://github.com/facebook/docusaurus) - React と Markdown を活用するドキュメントサイト生成ツール。翻訳とバージョン管理機能を備えています。

### ファイルシステム

- [del](https://github.com/sindresorhus/del) - glob パターンを使ってファイルやフォルダーを削除します。
- [globby](https://github.com/sindresorhus/globby) - 複数のパターンに対応した glob ファイル検索。
- [chokidar](https://github.com/paulmillr/chokidar) - `fs.watch` と `fs.watchFile` のイベントを安定化し、macOS ではネイティブの `fsevents` も利用するファイルシステム監視ツール。
- [find-up](https://github.com/sindresorhus/find-up) - 親ディレクトリをたどってファイルを検索します。
- [proper-lockfile](https://github.com/moxystudio/node-proper-lockfile) - プロセス間およびマシン間で使えるロックファイルユーティリティ。
- [load-json-file](https://github.com/sindresorhus/load-json-file) - JSON ファイルを読み込んで解析します。
- [write-json-file](https://github.com/sindresorhus/write-json-file) - JSON を文字列化し、ファイルへアトミックに書き込みます。
- [fs-write-stream-atomic](https://github.com/npm/fs-write-stream-atomic) - `fs.createWriteStream()` と同様ですが、アトミックに書き込みます。
- [filenamify](https://github.com/sindresorhus/filenamify) - 文字列を有効なファイル名に変換します。
- [istextorbinary](https://github.com/bevry/istextorbinary) - ファイルがテキストかバイナリかを判定します。
- [fs-jetpack](https://github.com/szwacz/fs-jetpack) - 日常的な使いやすさを追求して、ファイルシステム API を全面的に再設計しました。
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - `fs` モジュールに追加メソッドを提供します。
- [package-directory](https://github.com/sindresorhus/package-directory) - npm パッケージのルートディレクトリを見つけます。
- [filehound](https://github.com/nspragg/filehound) - 柔軟で流れるようなインターフェースによるファイルシステム検索。
- [move-file](https://github.com/sindresorhus/move-file) - デバイスをまたぐ場合にも対応してファイルを移動します。
- [tempy](https://github.com/sindresorhus/tempy) - ランダムな一時ファイルまたは一時ディレクトリのパスを取得します。

### 制御フロー

- Promise
	- [pify](https://github.com/sindresorhus/pify) - コールバック形式の関数を Promise 化します。
	- [delay](https://github.com/sindresorhus/delay) - 指定した時間だけ Promise の処理を遅延させます。
	- [promise-memoize](https://github.com/nodeca/promise-memoize) - Promise を返す関数をメモ化し、有効期限と先行取得に対応します。
	- [valvelet](https://github.com/lpinca/valvelet) - Promise を返す関数の実行頻度を制限します。
	- [p-map](https://github.com/sindresorhus/p-map) - Promise を並行して map 処理します。
	- [もっと見る…](https://github.com/sindresorhus/promise-fun)
- Observable
	- [RxJS](https://github.com/ReactiveX/RxJS) - リアクティブプログラミング。
	- [observable-to-promise](https://github.com/sindresorhus/observable-to-promise) - Observable を Promise に変換します。
	- [もっと見る…](https://github.com/sindresorhus/awesome-observables)
- ストリーム
	- [Highland.js](https://github.com/caolan/highland) - 標準 JavaScript と Node.js 風ストリームだけを使って、同期・非同期コードを簡単に扱えます。

### ストリーム

- [get-stream](https://github.com/sindresorhus/get-stream) - ストリームを文字列またはバッファーとして取得します。
- [from2](https://github.com/hughsk/from2) - ReadableStream を手軽に扱うためのラッパー。`through2` に着想を得ています。
- [into-stream](https://github.com/sindresorhus/into-stream) - バッファー、文字列、配列、オブジェクトをストリームに変換します。
- [duplexify](https://github.com/mafintosh/duplexify) - 書き込み可能ストリームと読み取り可能ストリームを、単一の Streams2 デュプレックスストリームにまとめます。
- [pumpify](https://github.com/mafintosh/pumpify) - ストリームの配列を単一のデュプレックスストリームにまとめます。
- [peek-stream](https://github.com/mafintosh/peek-stream) - 先頭行を確認してから解析方法を決められる変換ストリーム。
- [binary-split](https://github.com/maxogden/binary-split) - 改行など、任意の区切り文字で分割するストリーム。
- [byline](https://github.com/jahewson/node-byline) - 非常にシンプルな、行単位のストリームリーダー。
- [first-chunk-stream](https://github.com/sindresorhus/first-chunk-stream) - ストリームの最初のチャンクを変換します。
- [pad-stream](https://github.com/sindresorhus/pad-stream) - ストリームの各行にパディングを追加します。
- [multistream](https://github.com/feross/multistream) - 複数のストリームを単一のストリームにまとめます。
- [readable-stream](https://github.com/nodejs/readable-stream) - コアにある Streams2 および Streams3 実装のミラー。
- [through2-concurrent](https://github.com/almost/through2-concurrent) - オブジェクトストリームを並行して変換します。

### リアルタイム

- [µWebSockets](https://github.com/uNetworking/uWebSockets) - 高いスケーラビリティを備えた WebSocket サーバー兼クライアントライブラリ。
- [Socket.io](https://github.com/socketio/socket.io) - リアルタイムの双方向イベント通信を実現します。
- [Faye](https://github.com/faye/faye) - Bayeux プロトコルをベースにした、リアルタイムのクライアント・サーバーメッセージバス。
- [SocketCluster](https://github.com/SocketCluster/socketcluster) - 複数の CPU コアで実行できる、スケーラブルな HTTP + WebSocket エンジン。
- [Primus](https://github.com/primus/primus) - 特定のモジュールに依存しないようにする、リアルタイムフレームワーク向け抽象化レイヤー。
- [deepstream.io](https://github.com/deepstreamIO/deepstream.io-client-js) - スケーラブルなリアルタイムマイクロサービスフレームワーク。
- [Kalm](https://github.com/kalm/kalm.js) - 低レベルのソケットルーターとミドルウェアフレームワーク。
- [MQTT.js](https://github.com/mqttjs/MQTT.js) - MQTT（TCP/IP 上で使う pub/sub 型メッセージングプロトコル）のクライアント。
- [rpc-websockets](https://github.com/elpheria/rpc-websockets) - WebSocket 上で動作する JSON-RPC 2.0 の実装。
- [Aedes](https://github.com/moscajs/aedes) - 任意のストリームサーバー上で実行できる、最小構成の MQTT サーバー。

### 画像

- [sharp](https://github.com/lovell/sharp) - JPEG、PNG、WebP、TIFF 画像のリサイズを最速で行うモジュール。
- [image-type](https://github.com/sindresorhus/image-type) - 画像の種類を判定します。
- [image-dimensions](https://github.com/sindresorhus/image-dimensions) - 画像の寸法を取得します。
- [lwip](https://github.com/EyalAr/lwip) - ImageMagick を必要としない軽量画像処理ツール。
- [pica](https://github.com/nodeca/pica) - 純粋な JavaScript で高品質かつ高速（lanczos3）にリサイズします。ピクセル化が許されない場合の canvas drawImage() の代替です。
- [jimp](https://github.com/oliver-moran/jimp) - 純粋な JavaScript による画像処理。
- [qrcode](https://github.com/soldair/node-qrcode) - QR コードとバーコードの生成ツール。
- [ImageScript](https://github.com/matmen/ImageScript) - WebAssembly を活用して高速化する JavaScript 画像処理ライブラリ。

### テキスト

- [iconv-lite](https://github.com/ashtuchkin/iconv-lite) - 文字エンコーディングを変換します。
- [string-length](https://github.com/sindresorhus/string-length) - サロゲートペアを正しく数え、ANSI エスケープコードを無視して文字列の実際の長さを取得します。
- [camelcase](https://github.com/sindresorhus/camelcase) - ハイフン、ドット、アンダースコア、空白で区切られた文字列を camelCase に変換します（foo-bar → fooBar）。
- [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp) - 正規表現の特殊文字をエスケープします。
- [splice-string](https://github.com/sindresorhus/splice-string) - `Array#splice` のように文字列の一部を削除または置換します。
- [indent-string](https://github.com/sindresorhus/indent-string) - 文字列の各行にインデントを付けます。
- [strip-indent](https://github.com/sindresorhus/strip-indent) - 文字列の各行の先頭にある空白を削除します。
- [detect-indent](https://github.com/sindresorhus/detect-indent) - コードのインデントを検出します。
- [he](https://github.com/mathiasbynens/he) - HTML エンティティのエンコード／デコード。
- [i18n-node](https://github.com/mashpie/i18n-node) - JSON による動的ストレージを備えた、シンプルな翻訳モジュール。
- [babelfish](https://github.com/nodeca/babelfish) - 複数形を非常に簡単な構文で扱える i18n ライブラリ。
- [matcher](https://github.com/sindresorhus/matcher) - シンプルなワイルドカードマッチング。
- [unhomoglyph](https://github.com/nodeca/unhomoglyph) - 見た目が似ている Unicode 文字を正規化します。
- [i18next](https://github.com/i18next/i18next) - 国際化フレームワーク。
- [nanoid](https://github.com/ai/nanoid) - 小型で安全、URL に使いやすい一意な文字列 ID 生成ツール。
- [StegCloak](https://github.com/kurolabs/stegcloak) - 秘密情報を文字列の中に、見た目には分からない形で隠します。

### 数値

- [random-int](https://github.com/sindresorhus/random-int) - ランダムな整数を生成します。
- [random-float](https://github.com/sindresorhus/random-float) - ランダムな浮動小数点数を生成します。
- [unique-random](https://github.com/sindresorhus/unique-random) - 連続して重複しない乱数を生成します。
- [round-to](https://github.com/sindresorhus/round-to) - 数値を指定した小数桁数に丸めます（`1.234` → `1.2`）。

### 数学

- [ndarray](https://github.com/scijs/ndarray) - 多次元配列。
- [mathjs](https://github.com/josdejong/mathjs) - 幅広い機能を備えた数学ライブラリ。
- [math-clamp](https://github.com/sindresorhus/math-clamp) - 数値を指定範囲内に収めます。
- [algebra](https://github.com/fibo/algebra) - 代数的構造。
- [multimath](https://github.com/nodeca/multimath) - WebAssembly と JavaScript で高速な画像演算を実現するための基盤。

### 日付

- [Luxon](https://github.com/moment/luxon) - 日付と時刻を扱うライブラリ。
- [date-fns](https://github.com/date-fns/date-fns) - モダンな日付ユーティリティ。
- [Day.js](https://github.com/iamkun/dayjs) - Moment.js の代替となる不変の日付ライブラリ。
- [dateformat](https://github.com/felixge/node-dateformat) - 日付のフォーマット処理。
- [tz-format](https://github.com/samverschueren/tz-format) - タイムゾーン付きの日付をフォーマットします（`2015-11-30T10:40:35+01:00`）。
- [cctz](https://github.com/floatdrop/node-cctz) - 日付の高速な解析、フォーマット、タイムゾーン変換。

### URL

- [normalize-url](https://github.com/sindresorhus/normalize-url) - URL を正規化します。
- [humanize-url](https://github.com/sindresorhus/humanize-url) - URL を人が読みやすい形式に変換します（https://sindresorhus.com → sindresorhus.com）。
- [url-unshort](https://github.com/nodeca/url-unshort) - 短縮 URL を展開します。
- [speakingurl](https://github.com/pid/speakingurl) - 文字列を音訳してスラッグを生成します。
- [linkify-it](https://github.com/markdown-it/linkify-it) - Unicode を完全にサポートするリンクパターン検出ツール。
- [url-pattern](https://github.com/snd/url-pattern) - URL などの文字列パターン検索を、正規表現より簡単に行えます。
- [embedza](https://github.com/nodeca/embedza) - oEmbed、Open Graph、メタタグの情報を使って、URL から HTML スニペットや埋め込みを作成します。

### データ検証

- [joi](https://github.com/sideway/joi) - JavaScript オブジェクト向けのオブジェクトスキーマ記述言語兼バリデーター。
- [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) - コード生成を利用して非常に高速に動作する JSON Schema バリデーター。
- [property-validator](https://github.com/nettofarah/property-validator) - Express 用の使いやすいプロパティ検証。
- [schema-inspector](https://github.com/schema-inspector/schema-inspector) - JSON API のサニタイズと検証。
- [ajv](https://github.com/ajv-validator/ajv) - 最速の JSON Schema バリデーター。v5、v6、v7 の提案をサポートします。
- [Superstruct](https://github.com/ianstormtaylor/superstruct) - JavaScript（および TypeScript）でデータを検証するための、シンプルで組み合わせ可能な方法。
- [yup](https://github.com/jquense/yup) - オブジェクトスキーマの検証。
- [zod](https://github.com/colinhacks/zod) - 静的型推論に対応した TypeScript ファーストのスキーマ検証。

### パース

- [remark](https://github.com/remarkjs/remark) - プラグインを活用する Markdown プロセッサー。
- [markdown-it](https://github.com/markdown-it/markdown-it) - CommonMark 100% 準拠で、拡張機能と構文プラグインに対応した Markdown パーサー。
- [parse5](https://github.com/inikulin/parse5) - 高速で多機能、仕様に準拠した HTML パーサー。
- [@parcel/css](https://github.com/parcel-bundler/parcel-css) - Rust で書かれた CSS パーサー、変換ツール、ミニファイア。
- [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) - JSON からコメントを取り除きます。
- [strip-css-comments](https://github.com/sindresorhus/strip-css-comments) - CSS からコメントを取り除きます。
- [parse-json](https://github.com/sindresorhus/parse-json) - より分かりやすいエラーを表示する JSON パーサー。
- [URI.js](https://github.com/medialize/URI.js) - URL の変更・操作。
- [JSONStream](https://github.com/dominictarr/JSONStream) - ストリーミング対応の JSON.parse と stringify。
- [neat-csv](https://github.com/sindresorhus/neat-csv) - 高速な CSV パーサー。上記パーサー向けのコールバックインターフェース。
- [csv-parser](https://github.com/mafintosh/csv-parser) - 他のどのツールよりも高速であることを目指す、ストリーミング対応 CSV パーサー。
- [PEG.js](https://github.com/pegjs/pegjs) - 優れたエラー報告機能を備えた高速パーサーを生成する、シンプルなパーサー生成ツール。
- [x-ray](https://github.com/matthewmueller/x-ray) - Web スクレイピング用ユーティリティ。
- [nearley](https://github.com/kach/nearley) - JavaScript 向けのシンプル、高速、強力なパース処理。
- [binary-extract](https://github.com/juliangruber/binary-extract) - JSON 全体を解析せずに、バッファーから値を取り出します。
- [Stylecow](https://github.com/stylecow/stylecow) - 最新の CSS を解析、操作、変換し、すべてのブラウザーに対応させます。プラグインで拡張できます。
- [js-yaml](https://github.com/nodeca/js-yaml) - 非常に高速な YAML パーサー。
- [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - XML を JavaScript オブジェクトに変換します。
- [Jison](https://github.com/zaach/jison) - 親しみやすい JavaScript パーサー生成ツール。Bison、Yacc などと共通の系譜を持ちます。
- [google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber) - 電話番号の解析、フォーマット、保存、検証。
- [ref](https://github.com/TooTallNate/ref) - Buffer 内の構造化バイナリデータを読み書きします。
- [xlsx-populate](https://github.com/dtjohnson/xlsx-populate) - Excel XLSX ファイルの読み書き。
- [Chevrotain](https://github.com/Chevrotain/chevrotain) - 非常に高速で機能豊富な JavaScript パーサー構築ツールキット。
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) - XML を検証・解析します。

### 人間向け表示

- [pretty-bytes](https://github.com/sindresorhus/pretty-bytes) - バイト数を人が読みやすい文字列に変換します（`1337` → `1.34 kB`）。
- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - ミリ秒を人が読みやすい文字列に変換します（`1337000000` → `15d 11h 23m 20s`）。
- [ms](https://github.com/vercel/ms) - 小型のミリ秒変換ユーティリティ。
- [pretty-error](https://github.com/AriaMinaei/pretty-error) - 余計な情報を省いてエラーを表示します。
- [read-art](https://github.com/Tjatse/node-readability) - あらゆるページから読みやすいコンテンツを抽出します。

### 圧縮

- [yazl](https://github.com/thejoshwolfe/yazl) - ZIP 圧縮。
- [yauzl](https://github.com/thejoshwolfe/yauzl) - ZIP 解凍。
- [Archiver](https://github.com/archiverjs/node-archiver) - ZIP と TAR に対応した、アーカイブ生成用ストリーミングインターフェース。
- [pako](https://github.com/nodeca/pako) - 純粋な JavaScript に移植された高速な zlib（deflate、inflate、gzip）。
- [tar-stream](https://github.com/mafintosh/tar-stream) - ストリーミング対応の tar パーサー兼ジェネレーター。[tar-fs](https://github.com/mafintosh/tar-fs) も参照してください。

### ネットワーク

- [get-port](https://github.com/sindresorhus/get-port) - 利用可能なポートを取得します。
- [ipify](https://github.com/sindresorhus/ipify) - 自分のパブリック IP アドレスを取得します。
- [getmac](https://github.com/bevry/getmac) - コンピューターの MAC アドレスを取得します。
- [DHCP](https://github.com/infusion/node-dhcp) - DHCP クライアント兼サーバー。
- [netcat](https://github.com/roccomuso/netcat) - 純粋な JavaScript による Netcat 実装。

### データベース

- ドライバー
	- [PostgreSQL](https://github.com/brianc/node-postgres) - 純粋な JavaScript とネイティブの libpq バインディングによる PostgreSQL クライアント。
	- [Redis](https://github.com/luin/ioredis) - Redis クライアント。
	- [LevelUP](https://github.com/Level/levelup) - LevelDB。
	- [MySQL](https://github.com/mysqljs/mysql) - MySQL クライアント。
	- [couchdb-nano](https://github.com/apache/couchdb-nano) - CouchDB クライアント。
	- [Aerospike](https://github.com/aerospike/aerospike-client-nodejs) - Aerospike クライアント。
	- [Couchbase](https://github.com/couchbase/couchnode) - Couchbase クライアント。
	- [MongoDB](https://github.com/mongodb/node-mongodb-native) - MongoDB ドライバー。
- ODM / ORM
	- [Sequelize](https://github.com/sequelize/sequelize) - 複数の SQL 方言に対応した ORM。PostgreSQL、SQLite、MySQL などをサポートします。
	- [Bookshelf](https://github.com/bookshelf/bookshelf) - Backbone.js 風の PostgreSQL、MySQL、SQLite3 向け ORM。
	- [Mongoose](https://github.com/Automattic/mongoose) - 洗練された MongoDB オブジェクトモデリング。
	- [Waterline](https://github.com/balderdashy/waterline) - データストアに依存せず、1 つ以上のデータベースとのやり取りを大幅に簡素化するツール。
	- [OpenRecord](https://github.com/PhilWaldmann/openrecord) - PostgreSQL、MySQL、SQLite3、RESTful データストア向け ORM。ActiveRecord に似ています。
	- [pg-promise](https://github.com/vitaly-t/pg-promise) - Promise を使ってネイティブ SQL を扱う PostgreSQL フレームワーク。
	- [slonik](https://github.com/gajus/slonik) - 厳格な型、詳細なログ、アサーションに対応した PostgreSQL クライアント。
	- [Objection.js](https://github.com/Vincit/objection.js) - SQL クエリビルダー Knex を基盤とする軽量 ORM。
	- [TypeORM](https://github.com/typeorm/typeorm) - PostgreSQL、MariaDB、MySQL、SQLite などに対応した ORM。
	- [MikroORM](https://github.com/mikro-orm/mikro-orm) - Data Mapper、Unit of Work、Identity Map パターンを基盤とする TypeScript ORM。MongoDB、PostgreSQL、MySQL、SQLite をサポートします。
	- [Prisma](https://github.com/prisma/prisma) - モダンなデータベースアクセス（ORM の代替）。自動生成される型安全な TypeScript クエリビルダーで、PostgreSQL、MySQL、SQLite に対応します。
 	- [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) - PostgreSQL など、さまざまなデータベースに対応する TypeScript ORM。
- クエリビルダー
	- [Knex](https://github.com/knex/knex) - PostgreSQL、MySQL、SQLite3 向けのクエリビルダー。柔軟で移植性が高く、使いやすい設計です。
- その他
	- [NeDB](https://github.com/louischatriot/nedb) - JavaScript で書かれた、組み込み型の永続データベース。
	- [Lowdb](https://github.com/typicode/lowdb) - Lodash を基盤とする小型の JavaScript データベース。
	- [Keyv](https://github.com/jaredwray/keyv) - 複数のバックエンドに対応したシンプルなキー・バリューストレージ。
	- [Finale](https://github.com/tommybananas/finale) - Sequelize モデル用の RESTful エンドポイント生成ツール。
	- [database-js](https://github.com/mlaanderson/database-js) - JDBC 風の接続方法で複数のデータベースを扱うラッパー。
	- [Mongo Seeding](https://github.com/pkosiec/mongo-seeding) - JavaScript と JSON ファイルを使って MongoDB データベースにデータを投入します。
	- [@databases](https://github.com/ForbesLindesay/atdatabases) - SQL インジェクションの危険を避けながら、プレーンな SQL で PostgreSQL、MySQL、SQLite3 をクエリできます。
	- [pg-mem](https://github.com/oguimbal/pg-mem) - テスト用のインメモリ PostgreSQL インスタンス。

### テスト

- [AVA](https://github.com/avajs/ava) - 未来志向のテストランナー。
- [Mocha](https://github.com/mochajs/mocha) - 非同期テストを簡単かつ楽しくする、多機能なテストフレームワーク。
- [nyc](https://github.com/istanbuljs/nyc) - サブプロセスにも対応した、istanbul ベースのコードカバレッジツール。
- [tap](https://github.com/tapjs/node-tap) - TAP テストフレームワーク。
- [tape](https://github.com/substack/tape) - TAP を生成するテストハーネス。
- [power-assert](https://github.com/power-assert-js/power-assert) - 標準の assert インターフェースを通じて、説明的なアサーションメッセージを提供します。
- [Mochify](https://github.com/mantoni/mochify.js) - Browserify、Mocha、PhantomJS、WebDriver を使った TDD。
- [trevor](https://github.com/vadimdemedes/trevor) - バージョンを手動で切り替えたり Travis CI にプッシュしたりせずに、複数の Node.js バージョンでテストを実行します。
- [loadtest](https://github.com/alexfernandez/loadtest) - 自動化 API を備えた Web アプリ向け負荷テストツール。
- [Sinon.JS](https://github.com/sinonjs/sinon) - テスト用のスパイ、スタブ、モック。
- [navit](https://github.com/nodeca/navit) - ブラウザーテストスクリプトを簡単に作成できる PhantomJS／SlimerJS ラッパー。
- [Nock](https://github.com/nock/nock) - HTTP のモックと期待値設定。
- [intern](https://github.com/theintern/intern) - コードテストの一式。
- [toxy](https://github.com/h2non/toxy) - 障害シナリオやネットワーク状態をシミュレートできる、改造可能な HTTP プロキシ。
- [hook-std](https://github.com/sindresorhus/hook-std) - stdout／stderr をフックして変更します。
- [testen](https://github.com/egoist/testen) - NVM を使って、複数の Node.js バージョンでローカルにテストを実行します。
- [Nightwatch](https://github.com/nightwatchjs/nightwatch) - Selenium WebDriver ベースの自動 UI テストフレームワーク。
- [WebdriverIO](https://github.com/webdriverio/webdriverio) - WebDriver プロトコルに基づく自動テスト。
- [Jest](https://github.com/facebook/jest) - 手間なく JavaScript をテストできます。
- [Vitest](https://github.com/vitest-dev/vitest) - Vite を活用した高速なユニットテストフレームワーク。
- [TestCafe](https://github.com/DevExpress/testcafe) - ブラウザー自動テスト。
- [abstruse](https://github.com/bleenco/abstruse) - 継続的インテグレーションサーバー。
- [CodeceptJS](https://github.com/codeceptjs/CodeceptJS) - エンドツーエンドテスト。
- [Puppeteer](https://github.com/puppeteer/puppeteer) - ヘッドレス Chrome。
- [Playwright](https://github.com/microsoft/playwright) - 単一の API で利用できるヘッドレス Chromium、WebKit、Firefox。
- [nve](https://github.com/ehmicky/nve) - ローカルで任意のコマンドを複数バージョンの Node.js 上で実行します。
- [axe-core](https://github.com/dequelabs/axe-core) - Web UI の自動テスト向けアクセシビリティエンジン。
- [testcontainers-node](https://github.com/testcontainers/testcontainers-node) - データベース、Selenium 対応 Web ブラウザーなど、Docker コンテナで実行できる各種サービスの使い捨てインスタンスを手軽に提供します。

### セキュリティ

- [upash](https://github.com/simonepri/upash) - あらゆるパスワードハッシュアルゴリズムに対応する統一 API。
- [themis](https://github.com/cossacklabs/themis) - 保存データの保護、認証付きデータ交換、通信保護、認証など、一般的な暗号化方式を簡単に使える多言語対応フレームワーク。
- [GuardRails](https://github.com/apps/guardrails) - プルリクエストにセキュリティ上のフィードバックを提供する GitHub アプリ。
- [rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible) - ブルートフォース攻撃や DDoS 攻撃への対策。
- [crypto-hash](https://github.com/sindresorhus/crypto-hash) - 非同期でノンブロッキングなハッシュ処理。
- [jose-simple](https://github.com/davesag/jose-simple) - JOSE（JSON Object Signing and Encryption）標準を使ったデータの暗号化と復号。

### ベンチマーク

- [Benchmark.js](https://github.com/bestiejs/benchmark.js) - 高精度タイマーに対応し、統計的に有意な結果を返すベンチマークライブラリ。

### ミニファイア

- [babel-minify](https://github.com/babel/minify) - Babel ツールチェーンをベースにした、ES2015 以降に対応するミニファイア。
- [UglifyJS2](https://github.com/mishoo/UglifyJS) - JavaScript ミニファイア。
- [clean-css](https://github.com/clean-css/clean-css) - CSS ミニファイア。
- [minimize](https://github.com/Swaagie/minimize) - HTML ミニファイア。
- [imagemin](https://github.com/imagemin/imagemin) - 画像ミニファイア。

### 認証

- [Passport](https://github.com/jaredhanson/passport) - シンプルで邪魔にならない認証。
- [Grant](https://github.com/simov/grant) - Express、Koa、Hapi、Fastify、AWS Lambda、Azure、Google Cloud、Vercel など向けの OAuth プロバイダー。

### 認可

- [CASL](https://github.com/stalniy/casl) - UI と API の両方で使える同型認可。
- [node-casbin](https://github.com/casbin/node-casbin) - ACL、RBAC、ABAC などのアクセス制御モデルに対応した認可ライブラリ。

### メール

- [Nodemailer](https://github.com/nodemailer/nodemailer) - メール処理を最速で実現する方法。
- [emailjs](https://github.com/eleith/emailjs) - 添付ファイル付きのテキスト／HTML メールを、任意の SMTP サーバーへ送信します。
- [email-templates](https://github.com/forwardemail/email-templates) - カスタムメールテンプレートを作成、プレビュー、送信します。
- [MJML](https://github.com/mjmlio/mjml) - レスポンシブメールの作成を簡単にするために設計されたマークアップ言語。
- [Forward Email](https://github.com/forwardemail/forwardemail.net) - オープンソースでセルフホスト可能なメールサービス。

### ジョブキュー

- [bull](https://github.com/OptimalBits/bull) - 永続化に対応したジョブ・メッセージキュー。
- [agenda](https://github.com/agenda/agenda) - MongoDB を利用したジョブスケジューリング。
- [idoit](https://github.com/nodeca/idoit) - 高度なジョブ制御機能を備えた Redis ベースのジョブキューエンジン。
- [node-resque](https://github.com/actionhero/node-resque) - Redis ベースのジョブキュー。
- [rsmq](https://github.com/smrchy/rsmq) - Redis ベースのメッセージキュー。
- [bee-queue](https://github.com/bee-queue/bee-queue) - 高性能な Redis ベースのジョブキュー。
- [RedisSMQ](https://github.com/weyoss/redis-smq) - リアルタイム監視機能を備えた、シンプルで高性能な Redis メッセージキュー。
- [sqs-consumer](https://github.com/bbc/sqs-consumer) - 定型コードを書かずに Amazon Simple Queue Service（SQS）ベースのアプリを構築できます。
- [better-queue](https://github.com/diamondio/better-queue) - Redis が使えない場合に便利な、シンプルで効率的なジョブキュー。
- [bullmq](https://github.com/taskforcesh/bullmq) - 永続化に対応したジョブ・メッセージキュー。
- [bree](https://github.com/breejs/bree) - ワーカースレッド、cron、日付、人が読みやすい構文に対応したジョブスケジューラー。
- [graphile-worker](https://github.com/graphile/worker) - 高性能な PostgreSQL ジョブキュー。

### Node.js 管理

- [n](https://github.com/tj/n) - Node.js のバージョン管理。
- [nave](https://github.com/isaacs/nave) - Node.js 用の仮想環境。
- [nodeenv](https://github.com/ekalinin/nodeenv) - Python の virtualenv と互換性のある Node.js 仮想環境。
- [nvm for Windows](https://github.com/coreybutler/nvm-windows) - Windows 向けバージョン管理。
- [nodenv](https://github.com/nodenv/nodenv) - Ruby の rbenv に似たバージョンマネージャー。バージョンの自動切り替えに対応します。
- [fnm](https://github.com/Schniz/fnm) - Rust で構築されたクロスプラットフォーム対応の Node.js バージョンマネージャー。

### クロスプラットフォーム連携

- [napi-rs](https://github.com/napi-rs/napi-rs) - Node-API を使って、コンパイル済み Node.js アドオンを Rust で構築するためのフレームワーク。
- [Neon](https://github.com/neon-bindings/neon) - 安全で高速なネイティブ Node.js モジュールを作成するための Rust バインディング。
- [Edge.js](https://github.com/agracio/edge-js) - Windows、macOS、Linux の同一プロセス内で .NET と Node.js のコードを実行します。
- [DotNetJS](https://github.com/Elringus/DotNetJS) - この .NET 相互運用レイヤーを使って、Node.js から .NET ライブラリを利用します。

### 自然言語処理

- [retext](https://github.com/retextjs/retext) - 拡張可能な自然言語処理システム。
- [franc](https://github.com/wooorm/franc) - テキストの言語を判定します。
- [leven](https://github.com/sindresorhus/leven) - レーベンシュタイン距離アルゴリズムを使って、2 つの文字列の違いを測定します。
- [natural](https://github.com/NaturalNode/natural) - 自然言語処理機能。
- [nlp.js](https://github.com/axa-group/nlp.js) - エンティティ抽出、感情分析、自動言語識別などの機能を備えたボットを構築します。

### プロセス管理

- [PM2](https://github.com/Unitech/pm2) - 高機能なプロセスマネージャー。
- [nodemon](https://github.com/remy/nodemon) - アプリの変更を監視し、サーバーを自動で再起動します。
- [node-mac](https://github.com/coreybutler/node-mac) - スクリプトをネイティブの Mac デーモンとして実行し、コンソールアプリにログを記録します。
- [node-linux](https://github.com/coreybutler/node-linux) - スクリプトをネイティブのシステムサービスとして実行し、syslog にログを記録します。
- [node-windows](https://github.com/coreybutler/node-windows) - スクリプトをネイティブの Windows サービスとして実行し、イベントビューアーにログを記録します。
- [supervisor](https://github.com/petruisfan/node-supervisor) - スクリプトがクラッシュしたとき、または `*.js` ファイルが変更されたときに再起動します。
- [Phusion Passenger](https://github.com/phusion/passenger) - Nginx に直接統合できる、使いやすいプロセスマネージャー。

### 自動化

- [robotjs](https://github.com/octalmage/robotjs) - デスクトップ自動化ツール。マウスやキーボードを操作し、画面を読み取ります。
- [nut.js](https://github.com/nut-tree/nut.js) - 画像マッチング機能を備え、Jest と連携するクロスプラットフォーム対応のネイティブ GUI 自動化・テストフレームワーク。

### AST

- [Acorn](https://github.com/acornjs/acorn) - 小型で高速な JavaScript パーサー。
- [babel-parser](https://github.com/babel/babel/tree/master/packages/babel-parser) - Babel で使われている JavaScript パーサー。

### 静的サイトジェネレーター

- [DocPad](https://github.com/docpad/docpad) - 動的な機能と豊富なプラグインエコシステムを備えた静的サイト生成ツール。
- [docsify](https://github.com/docsifyjs/docsify) - 静的にビルドされた HTML ファイルを必要としない Markdown ドキュメントサイト生成ツール。
- [Charge](https://github.com/brandonweiss/charge) - JSX と MDX を使う、特定の流儀に基づいた設定不要の静的サイト生成ツール。

### コンテンツ管理システム

- [KeystoneJS](https://github.com/keystonejs/keystone) - Express と MongoDB を基盤とする CMS 兼 Web アプリケーションプラットフォーム。
- [ApostropheCMS](https://github.com/apostrophecms/apostrophe) - 直感的なフロントエンドでのコンテンツ編集と管理を重視した、Express と MongoDB ベースのコンテンツ管理システム。
- [Strapi](https://github.com/strapi/strapi) - 強力な API を構築するためのコンテンツ管理フレームワーク（ヘッドレス CMS）。
- [Factor](https://github.com/FactorJS/factor) - Vue.js のダッシュボードフレームワーク兼ヘッドレス CMS。
- [AdminBro](https://github.com/SoftwareBrothers/adminjs) - すべてのリソースに対する CRUD 機能を備えた、自動生成の管理パネル。
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - CMS 兼ヘッドレス GraphQL API。

### フォーラム

- [nodeBB](https://github.com/NodeBB/NodeBB) - 現代の Web 向けフォーラムプラットフォーム。

### ブログ

- [Ghost](https://github.com/TryGhost/Ghost) - シンプルで強力な出版プラットフォーム。
- [Hexo](https://github.com/hexojs/hexo) - 高速、シンプル、かつ高機能なブログフレームワーク。

### 奇妙なもの

- [cows](https://github.com/sindresorhus/cows) - ASCII の牛。
- [superb](https://github.com/sindresorhus/superb) - 「素晴らしい」を意味する言葉を取得します。
- [cat-names](https://github.com/sindresorhus/cat-names) - 人気の猫の名前を取得します。
- [dog-names](https://github.com/sindresorhus/dog-names) - 人気の犬の名前を取得します。
- [superheroes](https://github.com/sindresorhus/superheroes) - スーパーヒーローの名前を取得します。
- [supervillains](https://github.com/sindresorhus/supervillains) - スーパーヴィランの名前を取得します。
- [cool-ascii-faces](https://github.com/maxogden/cool-ascii-faces) - クールな ASCII 顔文字を取得します。
- [cat-ascii-faces](https://github.com/melaniecebula/cat-ascii-faces) - `₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛ (=ↀωↀ=)✧ (^･o･^)ﾉ”`.
- [nerds](https://github.com/SkyHacks/nerds) - ハリー・ポッター、スター・ウォーズ、ポケモンなど、マニアックな話題のデータを取得します。

### シリアライズ

- [snappy](https://github.com/kesla/node-snappy) - Google の Snappy 圧縮ライブラリ用ネイティブバインディング。
- [protobuf](https://github.com/protobufjs/protobuf.js) - Protocol Buffers の実装。
- [compactr](https://github.com/compactr/compactr.js) - Compactr プロトコルの実装。

### その他

- [execa](https://github.com/sindresorhus/execa) - `child_process` をより使いやすくします。
- [cheerio](https://github.com/cheeriojs/cheerio) - サーバー向けに特化した、高速で柔軟かつ軽量な jQuery コア実装。
- [open](https://github.com/sindresorhus/open) - Web サイト、ファイル、実行ファイルなどを開きます。
- [hasha](https://github.com/sindresorhus/hasha) - ハッシュ処理を簡単にします。バッファー、文字列、ストリーム、ファイルのハッシュ値を取得します。
- [dot-prop](https://github.com/sindresorhus/dot-prop) - ドット区切りのパスを使って、ネストされたオブジェクトからプロパティを取得します。
- [onetime](https://github.com/sindresorhus/onetime) - 関数を一度だけ実行します。
- [mem](https://github.com/sindresorhus/mem) - 同じ入力に対する呼び出し結果をキャッシュして、連続する関数呼び出しを高速化する最適化手法。関数をメモ化します。
- [strip-bom](https://github.com/sindresorhus/strip-bom) - 文字列、バッファー、ストリームから UTF-8 のバイト順マーク（BOM）を取り除きます。
- [os-locale](https://github.com/sindresorhus/os-locale) - システムのロケールを取得します。
- [ssh2](https://github.com/mscdex/ssh2) - SSH2 クライアント兼サーバーモジュール。
- [adit](https://github.com/markelog/adit) - SSH トンネリングを簡単にします。
- [file-type](https://github.com/sindresorhus/file-type) - Buffer のファイル形式を判定します。
- [Bottleneck](https://github.com/SGrondin/bottleneck) - スロットリングを簡単にするレート制限ツール。
- [webworker-threads](https://github.com/audreyt/node-webworker-threads) - ネイティブスレッドを使った軽量な Web Worker API 実装。
- [clipboardy](https://github.com/sindresorhus/clipboardy) - システムのクリップボード（コピー／ペースト）にアクセスします。
- [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) - バイナリを使った Node.js C++ アドオンの公開とインストールを簡単にします。
- [opencv](https://github.com/peterbraden/node-opencv) - OpenCV 用バインディング。事実上の標準となっているコンピュータービジョンライブラリです。
- [dotenv](https://github.com/motdotla/dotenv) - .env ファイルから環境変数を読み込みます。
- [semver](https://github.com/npm/node-semver) - セマンティックバージョンを解析します。
- [nodegit](https://github.com/nodegit/nodegit) - Git 用のネイティブバインディング。
- [json-strictify](https://github.com/pigulla/json-strictify) - データを失ったり無限ループに陥ったりせずに、値を安全に JSON へシリアライズします。
- [jsdom](https://github.com/jsdom/jsdom) - HTML と DOM の JavaScript 実装。
- [@sindresorhus/is](https://github.com/sindresorhus/is) - 値の型を判定します。
- [env-dot-prop](https://github.com/simonepri/env-dot-prop) - ドット区切りのパスを使い、process.env のネストされたプロパティを取得、設定、削除します。
- [node-video-lib](https://github.com/gkozlenko/node-video-lib) - MP4／FLV 動画ファイルを扱い、HLS ストリーミング向けの MPEG-TS チャンクを作成する純粋な JavaScript ライブラリ。
- [basic-ftp](https://github.com/patrickjuchli/basic-ftp) - FTP／FTPS クライアント。
- [cashify](https://github.com/xxczaki/cashify) - 通貨換算。
- [genepi](https://github.com/Geode-solutions/genepi) - C++ コードからネイティブ Node.js アドオンを自動生成します。
- [husky](https://github.com/typicode/husky) - Git フックのスクリプトを作成します。
- [patch-package](https://github.com/ds300/patch-package) - npm 依存関係への修正を作成し、保持します。
- [editly](https://github.com/mifi/editly) - 宣言的な動画編集 API。
- [wild-wild-path](https://github.com/ehmicky/wild-wild-path) - ワイルドカードと正規表現に対応したオブジェクトプロパティのパス。
- [uint8array-extras](https://github.com/sindresorhus/uint8array-extras) - Uint8Array と Buffer を扱うための便利なユーティリティ。

## パッケージマネージャー

- [npm](https://docs.npmjs.com/about-npm) - デフォルトのパッケージマネージャー。
- [pnpm](https://pnpm.io) - ディスク容量を効率的に使うパッケージマネージャー。
- [yarn](https://yarnpkg.com) - 代替のパッケージマネージャー。
- [bun](https://bun.sh) - JavaScript と TypeScript アプリ向けのオールインワンツールキット。

## リソース

### チュートリアル

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) - 複数の言語で読める、Node.js のベストプラクティスに関する高評価コンテンツの要約と厳選集。
- [Nodeschool](https://github.com/nodeschool) - 対話型レッスンで Node.js を学べます。
- [The Art of Node](https://github.com/maxogden/art-of-node/#the-art-of-node) - Node.js の入門。
- [module-best-practices](https://github.com/mattdesl/module-best-practices) - npm モジュールを新しく作成する際の実践的なヒント。
- [The Node Way](https://github.com/FredKSchott/the-node-way) - 保守しやすいモジュール、スケーラブルなアプリケーション、読みやすく心地よいコードを書くための、Node.js ベストプラクティスと指針の包括的な考え方。
- [You Don't Know Node.js](https://github.com/azat-co/you-dont-know-node) - Node.js のコア機能と非同期 JavaScript の入門。
- [Portable Node.js guide](https://github.com/ehmicky/cross-platform-node-guide) - 移植性・クロスプラットフォーム性のある Node.js コードの書き方を解説する実践ガイド。
- [Build a real web app with no frameworks](https://frameworkless.js.org/course) - 少数のシンプルなライブラリと Node.js コアモジュールを使って、実際に動く Web アプリを構築・デプロイするための動画チュートリアル／ライブ配信集。

### 検索

- [npms](https://npms.io) - [多数の指標](https://npms.io/about)を使ったパッケージ品質の詳細な分析機能を備えた、優れたパッケージ検索。
- [npm addict](https://npmaddict.com) - 毎日楽しめる npm パッケージ。

### 記事

- [Error Handling in Node.js](https://sematext.com/blog/node-js-error-handling/)
- [Teach Yourself Node.js in 10 Steps](https://ponyfoo.com/articles/teach-yourself-nodejs-in-10-steps)
- [Mastering the filesystem in Node.js](https://medium.com/@yoshuawuyts/mastering-the-filesystem-in-node-js-4706b7cb0801)
- [Semver: A Primer](https://nodesource.com/blog/semver-a-primer/)
- [Semver: Tilde and Caret](https://nodesource.com/blog/semver-tilde-and-caret/)
- [Why Asynchronous?](https://nodesource.com/blog/why-asynchronous/)
- [Understanding the Node.js Event Loop](https://nodesource.com/blog/understanding-the-nodejs-event-loop/)
- [Understanding Object Streams](https://nodesource.com/blog/understanding-object-streams/)
- [Using Express to Quickly Build a GraphQL Server](https://snipcart.com/blog/graphql-nodejs-express-tutorial)

### ニュースレター

- [Node Weekly](https://nodeweekly.com) - Node.js のニュースや記事を毎週まとめて配信するメールマガジン。

### 動画

- [Introduction to Node.js with Ryan Dahl](https://www.youtube.com/watch?v=jo_B4LTHi3I)
- [Hands on with Node.js](https://learn.bevry.me/hands-on-with-node.js/preface)
- [V8 Garbage Collector](https://v8.dev/blog/trash-talk) - V8 ガベージコレクターについての軽妙な解説。
- [10 Things I Regret About Node.js by Ryan Dahl](https://www.youtube.com/watch?v=M3BM9TB-8yA) - Node.js の作者が、その制約のいくつかについて語る示唆に富んだ講演。
- [Mastering REST APIs in Node.js: Zero-To-Hero](https://www.manning.com/livevideo/mastering-rest-apis-in-nodejs) - Node.js を使った REST API の作り方を学ぶ動画コース。
- [Make a vanilla Node.js REST API](https://www.youtube.com/watch?v=_1xa8Bsho6A) - Express のようなフレームワークを使わずに REST API を構築します。
- [Google I/O 2009 - V8: High Performance JavaScript Engine](https://www.youtube.com/watch?v=FrufJFBSoQY) - V8 のアーキテクチャの基礎と、JavaScript の実行を最適化する仕組み。
- [Google I/O 2012 - Breaking the JavaScript Speed Limit with V8](https://www.youtube.com/watch?v=UJPdhx5zTaw) - V8 が JavaScript の実行を最適化する仕組み。
- [Google I/O 2013 - Accelerating Oz with V8: Follow the Yellow Brick Road to JavaScript Performance](https://www.youtube.com/watch?v=VhpdsjBUS3g) - V8 の知識を使ってアプリのボトルネックを特定し、パフォーマンスを最適化する方法。
- [Node.js Internal Architecture | Ignition, Turbofan, Libuv](https://www.youtube.com/watch?v=OCjvhCFFPTw) - V8 と libuv に焦点を当てた、Node.js の内部動作の解説。
- [Introduction to libuv: What's a Unicorn Velociraptor?](https://www.youtube.com/watch?v=_c51fcXRLGw) - `libuv` のアーキテクチャ、スレッドプール、イベントループをソースコードとともに解説します。
- [libuv Cross platform asynchronous i/o](https://www.youtube.com/watch?v=kCJ3PFU8Ke8) - スレッドが実際にどこで使われているかなど、`libuv` のアーキテクチャを詳しく解説します。
- [You Don't Know Node - ForwardJS San Francisco](https://www.youtube.com/watch?v=oPo4EQmkjvY) - V8、libuv、イベントループ、モジュール、ストリーム、クラスターに関するクイズを通じて Node.js の内部を解説します。

### 書籍

- [Node.js in Action](https://www.manning.com/books/node-js-in-action-second-edition)
- [Node.js in Practice](https://www.amazon.com/Node-js-Practice-Alex-R-Young/dp/1617290939)
- [Mastering Node](https://visionmedia.github.io/masteringnode/)
- [Node.js 8 the Right Way](https://pragprog.com/book/jwnode2/node-js-8-the-right-way/)
- [Professional Node.js: Building JavaScript Based Scalable Software](https://www.amazon.com/Professional-Node-js-Building-JavaScript-Scalable-ebook/dp/B009L7QETY/)
- [Secure Your Node.js Web Application](https://www.amazon.com/Secure-Your-Node-js-Web-Application/dp/1680500856)
- [Express in Action](https://www.manning.com/books/express-in-action)
- [Practical Modern JavaScript](https://www.amazon.com/Practical-Modern-JavaScript-Dive-Future/dp/149194353X)
- [Mastering Modular JavaScript](https://www.amazon.com/Mastering-Modular-JavaScript-Nicolas-Bevacqua/dp/1491955686/)
- [Get Programming with Node.js](https://www.manning.com/books/get-programming-with-node-js)
- [Node.js Cookbook](https://www.amazon.com/dp/1838558756)
- [Node.js Design Patterns](https://www.nodejsdesignpatterns.com)

### ブログ

- [Node.js blog](https://nodejs.org/en/blog/)
- [webapplog.com](https://webapplog.com/tag/node-js/) - 『Practical Node.js』『Pro Express.js』の著者 Azat Mardan による Node.js と JavaScript のブログ記事。

### コース

- [Learn to build apps and APIs with Node.js](https://learnnode.com/friend/AWESOME) - Wes Bos による動画コース。
- [Real Time Web with Node.js](https://www.pluralsight.com/courses/code-school-real-time-web-with-nodejs)
- [Learn and Understand Node.js](https://www.udemy.com/course/understand-nodejs/)
- [Node.js Full Stack Developer Course](https://kinsta.com/academy/course/node-js-full-stack-developer/)

### チートシート

- [Express.js](https://github.com/azat-co/cheatsheets/tree/master/express4)
- [Stream FAQs](https://github.com/stephenplusplus/stream-faqs) - ページネーション、イベントなどを含む、ストリームに関するよくある質問への回答。
- [Strong Node.js](https://github.com/jesusprubio/strong-node) - Node.js Web サービスのソースコードをセキュリティ分析するためのチェックリスト。

### ツール

- [OctoLinker](https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp) - GitHub 上の package.json、.js、.jsx、.coffee、.md ファイルにある依存関係をリンク化する Chrome 拡張機能。
- [npm-hub](https://chrome.google.com/webstore/detail/npmhub/kbbbjimdjbjclaebffknlabpogocablj) - リポジトリの README の下部に npm の依存関係を表示する Chrome 拡張機能。
- [RunKit](https://runkit.com) - 任意の Web サイトに Node.js 環境を埋め込めます。
- [github-npm-stats](https://chrome.google.com/webstore/detail/github-npm-stats/oomfflokggoffaiagenekchfnpighcef) - GitHub 上に npm のダウンロード統計を表示する Chrome 拡張機能。
- [npm semver calculator](https://semver.npmjs.com) - semver の範囲に一致するパッケージのバージョンを視覚的に確認できます。
- [CodeSandbox](https://codesandbox.io/templates/node-http-server) - オンライン IDE とプロトタイピング環境。
- [Amplication](https://github.com/amplication/amplication) - 完全に機能するアプリを自動生成します。
- [RunJS](https://runjs.app) - デスクトップ向け JavaScript プレイグラウンド。

### コミュニティ

- [Stack Overflow](https://stackoverflow.com/questions/tagged/node.js)
- [Reddit](https://www.reddit.com/r/node)
- [Twitter](https://twitter.com/nodejs)
- [Hashnode](https://hashnode.com/n/nodejs)
- [Discord](https://discord.com/invite/96WGtJt)

### その他

- [nodebots](https://nodebots.io) - JavaScript で動くロボット。
- [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) - Node モジュールの作成を始めるためのひな形。
- [modern-node](https://github.com/sheerun/modern-node) - Jest、Prettier、ESLint、Standard を使って Node モジュールを作成するツールキット。
- [generator-nm](https://github.com/sindresorhus/generator-nm) - Node モジュールのひな形を生成します。
- [Microsoft Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines) - Microsoft のプラットフォームで Node.js を扱うためのヒント、技法、リソース。
- [Module Requests & Ideas](https://github.com/sindresorhus/project-ideas) - 存在してほしい JavaScript モジュールをリクエストしたり、モジュールのアイデアを得たりできます。
- [v8-perf](https://github.com/thlorenz/v8-perf) - V8、ひいては Node.js のパフォーマンスに関するメモとリソース。

## 関連リスト

- [awesome-npm](https://github.com/sindresorhus/awesome-npm) - npm の利用に関するリソースとヒント。
- [awesome-cross-platform-nodejs](https://github.com/bcoe/awesome-cross-platform-nodejs) - クロスプラットフォーム対応コードの作成とテストに関するリソース。
