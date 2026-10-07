# Awesome Chrome DevTools [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Chrome DevTools エコシステムにおける素晴らしいツールとリソース

Chrome DevTools および Chrome DevTools Protocol（CDP）を中心に構築されたツール、プロトコルドライバー、トレースビューア、スタンドアローンフロントエンド。[Awesome Manifesto](https://github.com/sindresorhus/awesome/blob/main/awesome.md) に従い、このリストは分野のすべてを網羅するのではなく、本当に有用なものに絞っています。

## 目次

- [学習](#学習)
- [トレースとプロファイリング](#トレースとプロファイリング)
- [Chrome DevTools Protocol](#chrome-devtools-protocol)
- [他のプラットフォームで DevTools フロントエンドを使う](#他のプラットフォームで-devtools-フロントエンドを使う)
- [DevTools 拡張機能](#devtools-拡張機能)
- [過去のプロジェクト](#過去のプロジェクト)

---

## 学習
- [Dev Tips](https://umaar.com/dev-tips/) - アニメーション GIF で示す豊富なヒント集。
- [DevTools Tips](https://devtoolstips.org/) - ミニチュートリアル形式の図解ヒント集。
- [Web cheatcodes](https://codepo8.github.io/web-cheatcodes/) - 開発者以外向けのブラウザ開発者ツール。
- [Dear Console](https://codepo8.github.io/dearconsole) - ブラウザのコンソールで使うスニペット集。
- [Chrome Secret Menus](https://github.com/sparkyrider/chrome-secret-menus) - Chrome の内部 `chrome://` ページと診断ツールのガイド。
- [Front-end Debugging Tools Handbook](https://github.com/lala-hakobyan/front-end-debugging-handbook) - DevTools、フレームワーク拡張、IDE を横断するフロントエンドデバッグの実践ガイド。

---

## トレースとプロファイリング

DevTools の Performance トレースや V8 の `.cpuprofile` ログは裏側では単なる JSON であり、いくつかのスタンドアローンビューアがそれを活用しています：

- [trace.cafe](https://trace.cafe/) - DevTools の Performance パネルで Web パフォーマンストレースを直接共有・閲覧（[ソース](https://github.com/paulirish/trace.cafe)）。
- [speedscope](https://github.com/jlfwong/speedscope) - Chrome の `.cpuprofile` やタイムライントレースをインポートする高速でインタラクティブなフレームグラフビューア。
- [cpupro](https://github.com/discoveryjs/cpupro) - フレームグラフ、コールツリー、ホットスポット診断を備えた高度な V8/Chrome `.cpuprofile` アナライザー。
- [Perfetto](https://github.com/google/perfetto) - システムプロファイリングとトレース解析スイート（[ui.perfetto.dev](https://ui.perfetto.dev/)）。Chromium トレース対応と SQL トレースクエリを備える。

---

## Chrome DevTools Protocol

プロ向けのヒント：Chrome 内蔵の [Protocol Monitor](https://developer.chrome.com/docs/devtools/protocol-monitor)（`More tools > Protocol monitor`）をオンにすると、ブラウザ内で生 CDP トラフィックを監視し、生コマンドを発行できます。

- [ChromeDevTools/devtools-protocol](https://github.com/chromedevtools/devtools-protocol) - **プロトコル JSON の正規の場所**。TypeScript 型とプロトコル不具合の issue トラッカーを含む。
- [DevTools Protocol API Docs](https://chromedevtools.github.io/devtools-protocol/) - プロトコルのドメイン、メソッド、イベントを探索するためのブラウズ可能な UI。

### プロトコルを使った開発
- [chrome-remote-interface Wiki](https://github.com/cyrus-and/chrome-remote-interface/wiki) - 一般的な生 CDP タスクの便利なレシピ。
- [Chrome Protocol Proxy](https://github.com/wendigo/chrome-protocol-proxy) - CDP クライアント通信を検査・デバッグするためのプロキシ。

### 二大自動化ライブラリ
- [Puppeteer](https://github.com/puppeteer/puppeteer) - CDP と WebDriver BiDi 経由で Chrome を制御する高レベル Node.js API。[awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer) も参照。
- [Playwright](https://github.com/microsoft/playwright) - Chromium、Firefox、WebKit 向けのクロスブラウザ自動化。Node.js、Python、.NET、Java に対応。[awesome-playwright](https://github.com/mxschmitt/awesome-playwright) も参照。

### プロトコル（またはその上の層）を駆動するライブラリ

- JavaScript/Node.js: [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface) - 低レベル CDP クライアント
- Rust: [chromiumoxide](https://github.com/mattsse/chromiumoxide) - 生成型を持つ非同期/tokio ライブラリ
- Rust: [Rust Headless Chrome](https://github.com/rust-headless-chrome/rust-headless-chrome) - 高レベルなヘッドレス Chrome クライアント
- Java: [chrome-devtools-java-client](https://github.com/kklisura/chrome-devtools-java-client) - 低レベルなプロトコルクライアント
- Java: [jvppeteer](https://github.com/fanyong920/jvppeteer) - Java 向けヘッドレス Chrome
- Python: [Zendriver](https://github.com/cdpdriver/zendriver) - 非同期 CDP ブラウザ自動化
- Python: [PyCDP](https://github.com/hyperiongray/python-chrome-devtools-protocol) - 入出力なしのラッパー（[Trio driver](https://github.com/hyperiongray/trio-chrome-devtools-protocol) も参照）
- Python: [ChromeController](https://github.com/fake-name/ChromeController) - 高レベルなブラウザ管理
- Go: [chromedp](https://github.com/chromedp/chromedp) - 高レベルなアクションとタスク
- Go: [Rod](https://github.com/go-rod/rod) - 高レベルな自動化とスクレイピング
- Go: [cdp](https://github.com/mafredri/cdp) - CDP の型安全なバインディング
- C#/.NET: [Puppeteer Sharp](https://github.com/hardkoded/puppeteer-sharp) - Puppeteer の移植
- C#/.NET: [dotnet-chrome-protocol](https://github.com/seclerp/dotnet-chrome-protocol) - ランタイムライブラリとスキーマコード生成
- Ruby: [Ferrum](https://github.com/rubycdp/ferrum) - Chrome を制御する高レベル API
- Ruby: [Cuprite](https://github.com/rubycdp/cuprite) - Capybara ドライバー
- Kotlin: [chrome-devtools-kotlin](https://github.com/joffrey-bion/chrome-devtools-kotlin) - コルーチンベースのクライアントライブラリ
- Kotlin: [kdriver](https://github.com/cdpdriver/kdriver) - コルーチンベースの高レベル自動化
- Clojure: [clj-chrome-devtools](https://github.com/tatut/clj-chrome-devtools) - 自動生成された CDP ラッパー
- Clojure: [cuic](https://github.com/milankinen/cuic) - 高レベルな UI テスト自動化
- PHP: [chrome-devtools-protocol](https://github.com/jakubkulhan/chrome-devtools-protocol) - クライアントライブラリ

### エージェント型ブラウザ自動化

> このセクションには *極めて* 厳格です。現在、誰もがブラウザをエージェント向けにラップしています — 実際の支持を得ており、かつ裏側で CDP を使って新しいことをしていない限り、別の MCP サーバーやエージェント CLI を追加する PR はクローズされます。

- [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) - Chrome DevTools 公式の MCP サーバー。その中に [CLI](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/skills/chrome-devtools-cli/SKILL.md) も含む。
- [Webcmd](https://github.com/agentrhq/webcmd) - サイトナビゲーションを AI エージェント向けのサイトごとの決定的な CLI コマンドにコンパイルする。
- [Lumen](https://github.com/omxyz/lumen) - 視覚優先のブラウザエージェント。CDP 上で自己修復する決定的なリプレイを備える。
- [bdg](https://github.com/szymdzum/browser-debugger-cli) - DOM、ネットワーク、コンソール、生プロトコルメソッドを shell コマンドとして公開する永続的なバックグラウンド CDP セッション。

### ブラウザアダプター
- [devtools-remote-debugger](https://github.com/Nice-PLQ/devtools-remote-debugger) - クライアント側 JS で実装された CDP エージェントを通じて Web ページをリモートデバッグする。
- [Inspect](https://inspect.dev/) - iOS および Android のブラウザや WebView に対して DevTools を使用。**（クローズドソース）**

## 他のプラットフォームで DevTools フロントエンドを使う

DevTools の UI は WebSocket 経由で CDP を話す Web アプリなので、Node、Ruby、モバイル WebView、カスタムランタイムに埋め込んだり、それらを対象にしたりできます（組み込みターゲットは `chrome://inspect` を参照）。

- [ChromeDevTools/devtools-frontend](https://github.com/ChromeDevTools/devtools-frontend) - Chrome DevTools UI の正規のソースリポジトリ（npm では [chrome-devtools-frontend](https://www.npmjs.com/package/chrome-devtools-frontend) として公開）。
- [Chii](https://github.com/liriliri/chii) と [Eruda](https://github.com/liriliri/eruda) - 本物の `devtools-frontend` UI（`Chii`、Weinre の現代的な代替）とページ内モバイル DevTools コンソール（`Eruda`）を使ったリモートデバッグサーバー。
- [vscode-js-debug](https://github.com/microsoft/vscode-js-debug) - VS Code を支える公式の DAP 互換 JavaScript および Chrome CDP デバッガー。
- [VS Code - Elements for Microsoft Edge](https://github.com/microsoft/vscode-edge-devtools) - VS Code 内に組み込まれた Elements および Network パネル。
- [Debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27) - `node --inspect` を使った Node.js のデバッグとプロファイリングのガイド。
- [ruby/debug](https://github.com/ruby/debug) - Ruby 公式のデバッガー。CDP 経由で Chrome DevTools への接続をサポート（`rdbg --open=chrome`）。

---

## DevTools 拡張機能

- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - React コンポーネント階層、props、プロファイラーのフレームグラフを検査。
- [Vue.js Developer Tools](https://github.com/vuejs/devtools) - Vue.js のコンポーネント、状態、ルーティングを検査。
- [Angular DevTools](https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh) - Angular 向けのコンポーネントツリー検査と変更検出のプロファイリング。
- [Redux Devtools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) - Redux 向けのタイムトラベルデバッグとアクション履歴。
- [Ember.js Inspector](https://chromewebstore.google.com/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi) - Ember.js のオブジェクト、ルート、データを検査。
- [Web Component DevTools](https://chromewebstore.google.com/detail/web-component-devtools/gdniinfdlmmmjpnhgnkmfpffipenjljo) - ページ上のカスタム要素とシャドウ DOM を検査・変更・監視。
- [Clockwork](https://chromewebstore.google.com/detail/clockwork/dmggabnehkmmfmdffgajcflpdjlnoemp?hl=en) - DevTools での PHP アプリケーションプロファイリングとリクエスト検査。
- [RailsPanel](https://chromewebstore.google.com/detail/railspanel/gjpfobpafnhjhbajcjgccbbdofdckggg?hl=en-US) - Ruby on Rails のリクエストおよび SQL プロファイリングパネル。

## 過去のプロジェクト
古いプロジェクト、おそらくもうメンテされていない……でもまだ cool。

- [ndb](https://github.com/GoogleChromeLabs/ndb) - DevTools フロントエンド上に構築された改善された Node.js デバッグ体験。
- [thetool](https://github.com/sfninja/thetool) - Node.js 向けの CPU、メモリ、カバレッジ、型プロファイリング。
- [Facebook Stetho](https://github.com/facebook/stetho) - Chrome DevTools を使ったネイティブ Android デバッグ。
- [PonyDebugger](https://github.com/square/PonyDebugger) - Chrome DevTools 経由で iOS アプリのリモートネットワークと Core Data をデバッグ。
- [betwixt](https://github.com/kdzwinel/betwixt) - スタンドアローンの DevTools Network パネルで検査されるシステムレベルのネットワークプロキシ。
- [Dirac](https://github.com/binaryage/dirac) - カスタム DevTools フォークを使った ClojureScript デバッグ。
- [VS Code - Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug/) - VS Code 向けの当初の Chrome デバッガー（豊富な CDP/DAP 実装を持つ組み込みの [vscode-js-debug](https://github.com/microsoft/vscode-js-debug) に取って代わられた）。
- [noice-json-rpc](https://github.com/nojvek/noice-json-rpc) - CDP ドメインを直接 API として公開するプロキシベースの TypeScript/JS ライブラリ。
- [PuPHPeteer](https://github.com/rialto-php/puphpeteer) - Node Puppeteer への PHP ブリッジ。
- [Insight](https://github.com/3Dparallax/insight/) - Chrome DevTools 向けの WebGL デバッグツールキット。
- [Remote Debug Gateway](https://github.com/RemoteDebug/remotedebug-gateway) - デバッグクライアントを一度に複数のブラウザに接続。
  - マルチユーザー DevTools：[DevTools Remote](https://github.com/auchenberg/devtools-remote) - 他者のブラウザをリモートデバッグ。
- [DevTools Backend](https://github.com/christian-bromann/devtools-backend) - 任意の Web 環境をデバッグするための Chrome DevTools バックエンドのスタンドアロン実装。
- Python CDP ドライバー：[pychrome](https://github.com/fate0/pychrome) - 低レベルな CDP トランスポートハンドラー。
- [ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy) - Mobile Safari と UIWebView のインスタンスを CDP 経由で公開。
  - [Remote Debug iOS WebKit adapter](https://github.com/RemoteDebug/remotedebug-ios-webkit-adapter) - `ios-webkit-debug-proxy` を基に構築され、WebKit の Remote Debugging Protocol を CDP に変換する。
- [IE Diagnostics Adapter](https://github.com/Microsoft/IEDiagnosticsAdapter) - IE 11 を CDP に変換するプロトコルアダプター。
