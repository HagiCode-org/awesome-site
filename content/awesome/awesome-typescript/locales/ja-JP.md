# TypeScript 厳選集

## 🗄️ アーカイブに関する注記

<details>
  <summary><strong>概要（2026）</strong> - このリストをアーカイブする理由</summary>
<hr/>
awesome-typescript を始めたのは 11 年前です。当時の TypeScript はまだ形になりつつあり、今のような標準的な選択肢にはほど遠いものでした。あの頃は、リソースを集めて厳選することに意味がありました。初期の利用者が信頼できる資料を見つけ、経験を共有し、多くの開発者が過小評価していたツールを中心にコミュニティを築く助けとなりました。

長年にわたり、TypeScript の将来について何度も議論しました（特に 2016 年から 2018 年頃）。TypeScript は現代の開発の礎になると考えていました。今では、それが現実になったことは明らかです。TypeScript は現在、フロントエンド開発の事実上の標準言語であり、アプリ、SDK、サンプル、さらには直接関係の薄いプロジェクトにも広く使われています。

この成功は、このリストに新たな問題をもたらしました。ほぼすべてのプロジェクトが TypeScript を使う今、あらゆる追加を受け入れることは厳選ではなく、際限のない保守になってしまいます。コミュニティからの投稿は減り、情報とノイズの比率も変化し、リストを拡大し続けても当初の目的を果たせなくなりました。

現在の状況における有意義で厳選された優れたリソース集を反映できないものを維持し続けるのではなく、awesome-typescript をアーカイブし、歴史的な資料として保存します。

プルリクエストの送信、リソースの提案、フィードバックの共有など、貢献してくださった皆さんに感謝します。皆さんのおかげで、このリストが最も必要とされた時期に役立ち、初期の TypeScript コミュニティが集まりました。
<br/><hr />

</details>

<hr />

#### -= Awesome TypeScript =- [Awesome Elasticsearch](https://github.com/dzharii/awesome-elasticsearch) →

> クライアントおよびサーバー側開発向けの優れた TypeScript リソース集です。TypeScript で素晴らしい JavaScript を書きましょう。[awesome](https://github.com/sindresorhus/awesome) リストに着想を得ています。

## その他の awesome リソース

> [semlinker/awesome-typescript](https://github.com/semlinker/awesome-typescript) リストを厳選してくれた @semlinker に感謝します！

## コントリビューション

まず[コントリビューションガイドライン](/contributing.md)に目を通してください。ここにあるパッケージやプロジェクトがメンテナンスされていない、または適切でない場合は、プルリクエストを送ってこのファイルの改善にご協力ください。

## 目次

- [TypeScript の必須リソース](#awesome-typescript-essential-resources)
- [TypeScript プロジェクトのスターター](#typescript-project-starters)
- [書籍](#books)
- [リファレンス一覧](#reference-lists)
- [ブログ](#blogs)
- [CLI と REPL](#cli-and-repl)
- [IDE](#ide)
- [ビルドシステム](#build-systems)
- [クラウドデータウェアハウス](#cloud-data-warehousing)
- [モジュールバンドラー](#module-bundlers)
- [CMS](#cms)
- [ツール](#tools)
- [型付き CSS-in-JS](#css-in-js-with-types)
- [型](#types)
- [ランタイム](#runtime)
- [TypeScript で構築：モバイル、ウェブ、バックエンド API、スタンドアロンアプリ、ライブラリ](#built-with-typescript)
- [LLM](#llm)
- [動画コース](#video-courses)
- [チュートリアル](#tutorials)
- [ロードマップ](#roadmap)
- [謝辞](#acknowledgements)

## （Awesome）TypeScript を始める

### TypeScript の必須リソース
* :books: [Handbook - Welcome to TypeScript](http://www.typescriptlang.org/Handbook) TypeScript 学習の公式資料
* :books: [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/) 著者: [Basarat Ali Syed](https://twitter.com/basarat)
* :octocat: [Microsoft/TypeScript on Github](https://github.com/Microsoft/TypeScript) GitHub で TypeScript をフォークするか、コードを読むだけでも構いません
* :octocat:[The official TypeScript Roadmap](https://github.com/Microsoft/TypeScript/wiki/Roadmap)
* :books: [TypeScript Team Blog](http://blogs.msdn.com/b/typescript/) お知らせと最新情報を掲載
* :octocat: [DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) Boris Yankov と多数の貢献者が保守する高品質な TypeScript 型定義のリポジトリ
* :octocat: [Type search](https://aka.ms/typings) npm の型定義を検索
* :books: [Community Curated Resources](https://hackr.io/tutorials/learn-typescript)
* :octocat: [Clean Code concepts adapted for TypeScript](https://github.com/labs42io/clean-code-typescript)
* :computer: [Should You Learn TypeScript? (Benefits & Resources)](https://snipcart.com/blog/learn-typescript-why-use-ts) TypeScript を学ぶべきか？（メリットと資料）
* :computer: [Learn how to unleash the full potential of the Turing Complete type system of TypeScript!](https://type-level-typescript.com) TypeScript のチューリング完全な型システムの力を最大限に引き出す方法を学びましょう！ 💵 最初の 5 章が無料のオンラインコース。著者: [Gabriel Vergnaud](https://twitter.com/GabrielVergnaud)
* :computer: [Codington](https://codington.io) 学習と指導向けに設計された、即時フィードバック付きの対話型練習問題
* :octocat: [Codebook](https://github.com/gvanastasov/codebook-typescript) 基本から高度な概念まで、短いコード例を読んで実行しながら TypeScript を学べます
* :octocat: [Type Challenges](https://github.com/type-challenges/type-challenges) オンライン判定機能付きの TypeScript 型チャレンジ集
- :books: [TypeScript Style Guide](https://mkosir.github.io/typescript-style-guide) 一貫性があり保守しやすいコードのための簡潔な規約とベストプラクティス
- :art: [Visual Types](https://types.kitlangton.com/) TypeScript の概念を対話的に可視化。美しい色をお楽しみください。

### TypeScript プロジェクトのスターター
* [React Starter Kit](https://github.com/kriasoft/react-starter-kit) – Bun、TypeScript、React、tRPC、Drizzle ORM、Cloudflare Workers による最新ウェブアプリ向けフルスタック・ボイラープレート。
* [typescript-starter](https://github.com/bitjson/typescript-starter) – ライブラリや Node.js プロジェクトをすばやく生成・設定する CLI
* [next-smrt](https://github.com/csprance/next-smrt) – Redux、Styled Components、Material UI、TypeSafe Actions を備えた TypeScript/Next.js ボイラープレート。
* :octocat: [Next-Postgres-With-Typescript](https://github.com/brandontle/next-postgres-with-typescript) - Next.js 7.0.2、Sequelize 4/Postgres、TypeScript、Redux、Passport Local Auth、Emotion を使うフォーラム形式のフルスタックアプリ用ボイラープレート
* [MicroTS](https://www.npmjs.com/package/microts) OpenAPI（Swagger）の REST API 仕様から、TypeScript コード、入力検証、UI、テスト、Docker 設定を含む完全なマイクロサービスプロジェクトを生成するツール。インターフェース先行のアプローチを採用。
* [pankod/next-boilerplate](https://github.com/pankod/next-boilerplate) TypeScript、Redux、Jest、Enzyme、Express.js、Sass、CSS、EnvConfig、リバースプロキシ、Bundle Analyzer、組み込み CLI を備えた本番対応 Next.js ボイラープレート
* [jsynowiec/node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate) 最新で開発にすぐ使える包括的かつミニマルなテンプレート。多くの Node.js プロジェクトでそのまま動き、基本ツールは設定済み。最新の Node.js LTS と TypeScript に対応。
* [typescript-express-starter](https://github.com/ljlm0402/typescript-express-starter) - 手軽に始められる TypeScript Express スターター。
* [The Knests Stack](https://github.com/tudorconstantin/knests/) - PostgreSQL、Knex.js、NestJS、Next.js、GraphQL、React（フックと TypeScript）、Material-UI、Docker マルチステージイメージ、Docker Compose、設定済み GitLab CI/CD を含むフルスタックのハッカソン用ボイラープレート。
* [tRPC + Next.js](https://trpc.io/docs/nextjs/introduction) - React を使ったエンドツーエンドの型安全な開発向けフルスタック・スターター
* [nd.ts](https://github.com/heyayushh/nd.ts/) - 必要最小限の Node.js プロジェクトをすぐにセットアップ
* :octocat: [samchon/backend](https://github.com/samchon/backend) - [NestJS](https://nestjs.com)（[nestia](https://github.com/samchon/nestia)）と [TypeORM](https://typeorm.io)（[safe-typeorm](https://github.com/samchon/safe-typeorm)）を使う TypeScript バックエンドテンプレート。派生サンプルで初心者を支援し、[pm2](https://pm2.keymetrics.io/) によるプロセスレベルの非破壊更新にも対応。
* :ok_man: [ts-express-boilerplate](https://github.com/d4rkstar/ts-express-boilerplate) - シンプルさと最小限の機能を重視した ExpressJS / TypeScript バックエンド用テンプレート :P ログとテストは設定済みで、データアクセスには TypeORM を使用。
* [create-typescript-app](https://github.com/hein-htut-aung/create-typescript-app) - TypeScript ウェブアプリ用の出発点。pnpm、Rollup、Jest、SCSS 付き CSS Modules を利用。
* [ts-vite-npm-template](https://github.com/kaandesu/ts-vite-npm-template) - Vite による TypeScript 製 NPM パッケージ作成の一括ソリューション。GitHub Pages デモのデプロイ、自動テスト・ビルド、カバレッジ対応ユニットテスト設定、README.md テンプレートを備えます。

### 書籍
* :books: [TypeScript in 50 Lessons](https://typescript-book.com/) 著者: Stefan Baumgartner
* :books: :fire: [TypeScript Quickly](https://www.manning.com/books/typescript-quickly) 最新の TypeScript を学び、独自のブロックチェーンを作りましょう。サンプルコード: :octocat:[yfain/getts](https://github.com/yfain/getts)
* :books: [Angular Development with Typescript, Second Edition (MEAP October 2017)](https://www.manning.com/books/angular-development-with-typescript-second-edition) 他のフレームワークやツールでウェブアプリを構築する開発者向けに、Angular と TypeScript を紹介する中級チュートリアル。（著者: Yakov Fain、Anton Moiseev; Manning）
* :books: [Angular 2 Development with TypeScript (2016)](https://www.manning.com/books/angular-2-development-with-typescript) 著者: Yakov Fain、Anton Moiseev; Manning
* :books: [Learning TypeScript 2.x 2nd Ed.](https://www.learningtypescript.com) 著者: Remo H. Jansen
* :books: [Mastering TypeScript 2nd Ed.](https://www.packtpub.com/application-development/mastering-typescript-second-edition) 著者: Nathan Rozentals
* :books: [Beginning Angular 4 with TypeScript](https://www.amazon.com/Beginning-Angular-Typescript-Greg-Lim/dp/1542916674) 著者: Greg Lim
* :books: [Programming with Types](https://www.manning.com/books/programming-with-types) - 型システムの力を生かし、安全で堅牢、正確で保守・理解しやすいソフトウェアを設計する方法の書籍。（著者: Vlad Riscutia）
* :books: [Essential TypeScript 5](https://www.manning.com/books/essential-typescript-5) - ベストセラー TypeScript ガイドの第 3 版。（著者: Adam Freeman）
* :books: [Effective TypeScript](https://www.oreilly.com/library/view/effective-typescript/9781492053736/) 著者: Dan Vanderkam
* :books: [Advanced TypeScript 3 Programming Projects](https://www.packtpub.com/product/advanced-typescript-3-programming-projects/9781789133042) 著者: Peter O'Hanlon
* :books: [The Concise TypeScript Book (Free and Open Source)](https://github.com/gibbok/typescript-book) 著者: Simone Poggiali
* :books: [Acing the Frontend Interview (Early Access)](https://www.manning.com/books/acing-the-frontend-interview) 著者: Jennifer Fu（Manning）

### リファレンス一覧
* [TypeScript Reference for JS developers](https://welldan97.github.io/typescript-reference/) - キーワード、演算子、文、ディレクティブの用語集

### ブログ
* [@captain-yossarian's blog](https://catchts.com/) - TypeScript の静的型付けに特化したブログ

### CLI と REPL
* [Taze](https://github.com/antfu/taze) 依存関係を最新に保つモダンな CLI ツール
* [ts-node](https://github.com/TypeStrong/ts-node) を使ってスクリプトや REPL を実行します
* 実行可能な TypeScript スクリプトの作り方:
  1. `npx`（`npm >= 5.2` に同梱）と `typescript` パッケージがインストール済みか確認します
  1. スクリプトの先頭にこの [シバン](https://en.wikipedia.org/wiki/Shebang_(Unix)) を追加します: `#!npx ts-node`
  1. スクリプトを実行可能にします: `chmod +x script.ts`
  1. 直接実行します: `./script.ts` :)

### 統合開発環境（IDE）
#### オフライン
##### Visual Studio
* [ Visual Studio Community Edition 2015](https://www.visualstudio.com/products/visual-studio-community-vs) - TypeScript サポートを統合した（条件付きで）無料の IDE
  * [VS Addon - TypescriptSyntaxPaste](https://visualstudiogallery.msdn.microsoft.com/eb0887f8-3ac1-434a-b50b-f0112f1572f7) - C# ソースをコピーして TypeScript 構文として貼り付けられます。DTO やインターフェースへの変換に便利です
* [NodeJS Tools for Visual Studio](https://github.com/Microsoft/nodejstools)

##### その他（プラグイン || クロスプラットフォーム || オープンソース || 無料）
* [Visual Studio Code](https://www.visualstudio.com/en-us/products/code-vs.aspx)
* [PhpStorm](https://www.jetbrains.com/phpstorm/download/)
* [WebStorm](https://www.jetbrains.com/webstorm/download/)
* [CATS](http://jbaron.github.io/cats/) @jbaron による TypeScript / ウェブ開発者向け IDE
* [TypeScript Sublime Plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin) 作者: @Microsoft
* [Atom TypeScript](https://github.com/TypeStrong/atom-typescript) 作者: @TypeStrong
* [TypeScript Interactive Development Environment for Emacs](https://github.com/ananthakumaran/tide) 作者: @ananthakumaran
* [TypeScript Syntax for VIM](https://github.com/leafgarland/typescript-vim)
* :octocat: [Typescript addin for](https://github.com/mrward/typescript-addin) MonoDevelop、SharpDevelop、Xamarin Studio 用。短い[紹介記事](http://lastexitcode.com/blog/2015/04/01/TypeScriptSupportInXamarinStudio/)もあります
* [Typescript tooling for Neovim](https://github.com/mhartington/nvim-typescript) Neovim 用 TypeScript 言語サービスプラグインです。
* [Coc](https://github.com/neoclide/coc.nvim) Vim/Neovim を VS Code のように賢くします。

#### オンライン

##### プレイグラウンド
* [TypeScript playground](https://agentcooper.github.io/typescript-play/) 作者: @agentcooper。複数の TS バージョンとコンパイラー出力先に対応
* [TypeScript playground-on-ace](https://github.com/hi104/typescript-playground-on-ace) 作者: @hi104。[TypeScript 1.5 対応版](https://github.com/basarat/TypeScriptEditor)
* [TypeScript official Playground](http://www.typescriptlang.org/Playground/)
* [JS Bin](http://jsbin.com/?js) （TypeScript を選択）
* [Codepen](http://codepen.io/) （TypeScript を選択）
* [TypeScript Interpret - Terminal Emulator](http://niutech.github.io/typescript-interpret/) 作者: @niutech
* [TypeScript Editor](http://drake7707.github.io/Typescript-Editor/) 作者: @drake7707

## ビルドシステム
* [Grunt](http://gruntjs.com/) タスク:
  - [grunt-ts](https://www.npmjs.com/package/grunt-ts) - GruntJS ビルドスクリプトで TypeScript コンパイルを処理する npm パッケージ
* [Zwitterion](https://github.com/lastmjs/zwitterion) - TypeScript ファイルを標準サポートするシンプルな開発サーバー。
* [Nx](https://github.com/nrwl/nx) - スマートで高速、拡張可能なビルドシステム

## クラウドデータウェアハウス
* :sparkles: [Crisp BigQuery](https://github.com/winwiz1/crisp-bigquery) コストを管理しつつ Google BigQuery のデータをブラウザーに配信するスターター。豊富なデータ表示を実装できます。
* [DDB-Table](https://github.com/neuledge/ddb-table) AWS DynamoDB 向けの型安全なクエリとテーブル
* [DynamoDB-Toolbox](https://github.com/dynamodb-toolbox/dynamodb-toolbox) AWS DynamoDB 向けの軽量で型安全なクエリビルダー

## モジュールバンドラー
* [Farm](https://farm-fe.github.io/) - Rust 製の超高速 Vite 互換ウェブビルドツール
* [Rspack](https://www.rspack.dev/) - 高速な Rust 製ウェブバンドラー 🦀️
* [Vite](https://vitejs.dev/) - 次世代のフロントエンドツール
* [Webpack](http://webpack.github.io/) - CommonJS と AMD のモジュールバンドルに対応
* [Browserify](http://browserify.org/) - CommonJS モジュールバンドラー。TypeScript は標準非対応ですが、* [Grunt](http://gruntjs.com/) のタスク: [grunt-ts](https://www.npmjs.com/package/grunt-ts)、[grunt-browserify](https://www.npmjs.com/package/grunt-browserify)、[grunt-contrib-uglify](https://www.npmjs.com/package/grunt-contrib-uglify) と組み合わせられます
* [fuse-box](https://github.com/fuse-box/fuse-box) | [http://fuse-box.org/](http://fuse-box.org/) - TypeScript のサンプル: [fuse-box-ts-react-reflux-seed](https://github.com/fuse-box/fuse-box-ts-react-reflux-seed)

## コンテンツ管理システム（CMS）
* [Factor](https://factor.dev) - JavaScript CMS（TypeScript を標準サポート）
* [Graphweaver](https://github.com/exogee-technology/graphweaver) - 複数のデータソースを単一の GraphQL ヘッドレス CMS にまとめます。

## ツール
* [sqlx-ts](https://github.com/JasonShin/sqlx-ts) - DSL 不要でコンパイル時にクエリを検証し、SQL から型を生成してコードの型安全性を保つ CLI
* [bun](https://bun.sh/) - 高速な JavaScript ランタイム、パッケージマネージャー、バンドラー、テストランナー
* [deno](https://deno.land/) - JavaScript と TypeScript の安全なランタイム
* [OXC](https://github.com/web-infra-dev/oxc) - Rust 製の JavaScript / TypeScript 高性能ツール群
* [biome](https://github.com/biomejs/biome) - Biome はコードを瞬時にフォーマットし、Lint を実行します
* [SweetIQ/schemats](https://github.com/SweetIQ/schemats) SQL データベースのスキーマから TypeScript インターフェース定義を生成
* [TypeDoc](http://typedoc.org/) - TypeScript プロジェクト向けドキュメント生成ツール
* [TypeScript Standard](https://github.com/e2tox/typescript-standard) - 設定不要の TypeScript 2 Standard 検証ツール
* [typed-install](https://github.com/xavdid/typed-install) - 場所を問わず、新しい依存関係と型定義を簡単にインストール
* [type-config](https://github.com/Saul-Mirone/type-config) - tsconfig 生成ツール。
* [Zapatos](https://jawj.github.io/zapatos/) - TypeScript 向けの抽象化ゼロの Postgres
* [dep-tree](https://github.com/gabotechs/dep-tree) - プロジェクトのファイル依存ツリーを表示したり、独自ルールで検証したりできます。
* [itertools-ts](https://github.com/Smoren/itertools-ts) - TypeScript / JavaScript 向けに拡張された itertools 移植版。非同期を含む反復可能コレクション用の多数の関数を提供。
* [ParaglideJS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) - 型安全な翻訳を完全に生成する i18n コンパイラー
* [pg](https://github.com/datawan-labs/pg) - サーバー不要のブラウザー版 PostgreSQL プレイグラウンド。クライアントと PGlite（PostgreSQL WASM）のみで動作
* [nocodb](https://github.com/nocodb/nocodb) - オープンソースの Airtable 代替ツール 🔥 🔥 🔥
* [jqlite](https://github.com/Jay-Karia/jqlite) - ⚡ JSON 向けクエリ言語
* [pompelmi](https://github.com/pompelmi/pompelmi) - Express、Koa、Next.js 用アダプターを備え、リモートファイルインクルージョン（RFI）防止に役立つ Node.js ファイルアップロード用マルウェアスキャナー
* [codables](https://codableslib.com/) - ほぼ全てのデータ型を扱える、デコレーター式で宣言的かつ型情報豊富な JSON シリアライザー／デシリアライザー
* [Rev-dep](https://github.com/jayu/rev-dep) - 高速 CLI でインポートを追跡し、循環依存や未使用コードを特定、node_modules を整理できます。

## 型
* [jsonup](https://github.com/tani/jsonup) - コンパイル時 JSON パーサー
* [type-o-rama](https://github.com/stereobooster/type-o-rama) - JavaScript の型システム間の相互運用性
* [utility-types](https://github.com/piotrwitek/utility-types) - TypeScript のユーティリティ型（Flow のユーティリティ型との互換性を提供）
* [elm-ts](https://github.com/gcanti/elm-ts) - fp-ts、io-ts、rxjs5、React を取り入れた Elm アーキテクチャの TypeScript 移植版
* [ts-essentials](https://github.com/krzkaczor/ts-essentials) - 必須の TypeScript 型をひとつに集約
* [typescript-conditional-types](https://github.com/LeDDGroup/typescript-conditional-types) - TypeScript ジェネリック型向けヘルパー
* [ts-types-utils](https://github.com/LeDDGroup/ts-types-utils) - TypeScript の型ユーティリティ
* [typesync](https://github.com/jeffijoe/typesync) - package.json の依存関係で不足している TypeScript 型定義をインストールします。
* [type-fest](https://github.com/sindresorhus/type-fest) - 必須の TypeScript 型のコレクション
* [typetype](https://github.com/mistlog/typetype) - TypeScript の型生成用に設計されたプログラミング言語
* [nominal](https://github.com/Coder-Spirit/nominal) - 名目的型と依存型。
* [@tool-belt/type-predicates](https://github.com/tool-belt/type-predicates) - 型述語、アサーション関数、ユーティリティ。
* [getmytypes](https://github.com/halchester/getmytypes) - @types ファイルを devDependencies にインストールします。
* [ts-toolbelt](https://github.com/millsp/ts-toolbelt) - TypeScript 向けの型ユーティリティ集
* [string-ts](https://github.com/gustavoguichard/string-ts) - あらゆる用途に使える型安全な文字列関数
* [lib-result](https://github.com/AhmedOsman101/lib-result) - TypeScript / JavaScript の型安全なエラー処理向け、軽量で Rust に着想を得た `Result` 型。
* [iso-locale](https://github.com/reacture-io/iso-locale) - 国、言語、方言、通貨の ISO 規格を扱う包括的な TypeScript ライブラリ。

## 型付き CSS-in-JS
* [PandaCSS](https://panda-css.com/) - ビルド時にスタイルを生成する CSS-in-JS。RSC 対応、複数バリアント、優れた開発体験を提供
* [Vanilla-Extract](https://vanilla-extract.style/) - TypeScript をプリプロセッサーとして使い、型安全でローカルスコープのクラス、変数、テーマを記述。ビルド時に静的 CSS を生成
* [StyleX](https://stylexjs.com/) - 最適化された UI のスタイルを定義する JavaScript ライブラリ

### ランタイム
* [json-decoder](https://github.com/venil7/json-decoder) - 型安全な JSON デコーダーと実行時チェッカー
* [typescript-is](https://github.com/woutervh-/typescript-is) - 実行時の型チェックを生成する TypeScript トランスフォーマー。
* [type-plus](https://github.com/unional/type-plus) - 追加の型と型調整済みユーティリティ
* [Agent Framework](https://github.com/agentframework/agentframework) デコレーターでクラスやメソッドのインターセプターを作成
* [SunTori](https://github.com/LancerComet/SunTori) - 実行時の安全性を確保する JSON シリアライザー／デシリアライザー。
* [config](https://github.com/mrspartak/config) - 実行時設定の解決ツール

## バリデーション
* [@core/match](https://github.com/tani/ts-match) - パターンマッチ検証付きの型安全な分割代入
* [io-ts](https://github.com/gcanti/io-ts) - IO のデコード／エンコード向け実行時型システム
* [zod](https://github.com/vriad/zod) - 静的型推論に対応する TypeScript ファーストのスキーマ検証
* [valibot](https://github.com/fabian-hiller/valibot) - 静的型推論に対応した TypeScript スキーマライブラリ。依存関係がなく、Zod より非常に軽量です。
* [runtypes](https://github.com/pelotom/runtypes) - 静的型の実行時検証
* [ts-codec](https://github.com/julienvincent/ts-codec) - データのエンコード、デコード、検証を行う TypeScript コーデック
* [ow](https://github.com/sindresorhus/ow) - 人にやさしい関数引数の検証
* [superstruct](https://github.com/ianstormtaylor/superstruct) - 簡単かつ合成可能なデータ検証
* [computed-types](https://github.com/neuledge/computed-types) - TypeScript 向けの Joi のような検証 🦩
* [json-schema-to-ts](https://github.com/thomasaribart/json-schema-to-ts) - JSON スキーマからの動的な型推論
* [Yunomix](https://github.com/LancerComet/MyWebLibs/tree/master/Yunomix) - アスペクト指向プログラミング（AOP）形式で設計されたフォーム検証ツールキット。
* [typia](https://github.com/samchon/typia) - TypeScript の型だけを使う実行時バリデーター。20,000 倍高速で、`typia.assert<T>(input)` のように 1 行で利用可能。JSON シリアライズも 200 倍高速化し Protocol Buffer にも対応 🚀（https://typia.io/docs も参照）
* [fta](https://github.com/sgb-io/fta) - コード品質を監視する Rust 製静的解析ツール
* [dto-classes](https://github.com/rsinger86/dto-classes) - 開発者向けパース、検証、シリアライズ。静的型を標準とし、デコレーターでなくプロパティでフィールドスキーマを定義。
* [iso-locale](https://github.com/reacture-io/iso-locale) - 国、言語、方言、通貨の ISO 規格を扱う包括的な TypeScript ライブラリ。
## TypeScript で構築
### モバイル
* :octocat: [ReactNative](https://reactnative.dev/) - React で Android、iOS などのネイティブアプリを作成
* :octocat: [NativeScript](https://github.com/NativeScript/NativeScript) - JavaScript で iOS、Android、Windows 向けの真のネイティブなクロスプラットフォームアプリを構築するオープンソースのフレームワーク
* [Monaco Editor](https://microsoft.github.io/monaco-editor/)

### ウェブ
* :octocat: [Angular](https://github.com/angular/angular) - モバイルおよびデスクトップのウェブアプリ開発プラットフォーム
* :octocat: [It-Tools](https://it-tools.tech/) - 優れた UX を備えた開発者向けオンラインツール集
* :octocat: [Fedify](https://github.com/fedify-dev/fedify) - ActivityPub と Fediverse を活用した分散型サーバーアプリ向け TypeScript フレームワーク
* :octocat: [feednext.io](https://github.com/feednext/feednext) - クライアントとサーバー双方を TypeScript で構築したオープンソースのソーシャルメディアアプリ。
* :octocat: [ionic](https://github.com/ionic-team/ionic) - TypeScript 製のオープンソース・モバイルアプリ開発フレームワーク
* :octocat: [React-UWP](https://github.com/myxvisual/react-uwp) - Microsoft の UWP / Fluent Design を実装した React コンポーネント。
* :octocat: [palantir/plottable](https://github.com/palantir/plottable) - `D3` 製のモジュール式チャートコンポーネントライブラリ（http://plottablejs.org も参照）
* :octocat: [APIs-guru/graphql-voyager](https://github.com/APIs-guru/graphql-voyager) - 任意の GraphQL API を対話型グラフとして表示 🛰️
* :octocat: [Rebilly/ReDoc](https://github.com/Rebilly/Redoc) - OpenAPI/Swagger 生成の API リファレンスドキュメント
* :octocat: [excaliburjs/Excalibur](https://github.com/excaliburjs/Excalibur) - 無料のオープンソース JavaScript ゲームエンジン
* :octocat: [Bobril](https://github.com/Bobris/Bobril) - Mithril と ReactJs に着想を得たコンポーネント指向フレームワーク。（http://bobril.com/ も参照）
* :octocat: [Stencil](https://github.com/ionic-team/stencil) - モダンなウェブコンポーネント構築ツール
* :octocat: [Langfuse](https://github.com/langfuse/langfuse) - オープンソースの LLM エンジニアリングプラットフォーム 🪢 - トレース、プロンプト管理、評価、分析
* :octocat: [redux-zero](https://github.com/concretesolutions/redux-zero) - Redux ベースの軽量状態コンテナー
* :octocat: [wretch](https://github.com/elbywan/wretch) - fetch を直感的な構文で包む小さな（gzip 時 2.2 KB 未満）ラッパー。
* :octocat: [Cycle.js](https://github.com/cyclejs/cyclejs) - 予測可能なコードのための関数型・リアクティブ JavaScript フレームワーク。
* :octocat: [Tridactyl](https://github.com/tridactyl/tridactyl) - Firefox の操作方法を Vim を手本にした方式へ置き換えるブラウザー拡張。
* :octocat: [armour/vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) - vue-cli 3.0 と TypeScript のミニマルな管理画面テンプレート。本番対応フロントエンド（[デモ](https://armour.github.io/vue-typescript-admin-template/#/dashboard)）
* :octocat: [n8n.io](https://github.com/n8n-io/n8n) - オープンソースのワークフロー自動化ツール
* :octocat: [Dnote](https://github.com/dnote/dnote) - 複数デバイス同期とウェブ UI を備えたコマンドライン・ノートブック。
* :octocat: [Thin Backend](https://github.com/digitallyinduced/thin-backend) - Postgres スキーマから型を導出し、エンドツーエンドの型安全性を実現する SPA 向けリアルタイムバックエンド
* :octocat: [Flowbite](https://github.com/themesberg/flowbite) - TypeScript 製の対話型 UI を備えた Tailwind CSS ベースのオープンソース・コンポーネントライブラリ
* :octocat: [ILLA Cloud](https://www.illacloud.com/) - Retool / Appsmith に代わるオープンソースのローコード基盤。開発者は数分で社内ツールを構築できます。
* :octocat: [Treehouse](https://github.com/treehousedev/treehouse) - 独自のノートツールを作るためのオープンソース軽量ライブラリ。
* :octocat: [GOUI](https://github.com/intermesh/goui) - ウェブアプリ構築用の多数のコンポーネントを備えたオープンソース UI ライブラリ
* :octocat: [InDom](https://github.com/constcallid/indom) - 4 KB 未満で特定スタックに依存しない最新 DOM ライブラリ。自動クリーンアップ、TypeScript ソースと型定義に対応。
* :octocat: [Bubble Lab](https://github.com/bubblelabai/BubbleLab) - AI 生成、完全な可観測性、エクスポート可能なコードを備える TypeScript ネイティブのオープンソース・ワークフロー自動化基盤。

### ウェブ/ReactJS
* :octocat: [facebook/create-react-app](https://facebook.github.io/create-react-app/docs/adding-typescript) ビルド設定不要で TypeScript の React アプリを作成
* :octocat: [Microsoft/TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter) TypeScript と React の併用方法を詳述した README を備えるスターター。`create-react-app` ベース
* :scroll: [typescript-cheatsheets/react-typescript-cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) TypeScript を始める経験豊富な React 開発者向けチートシート
* :octocat: [jsxtyper](https://github.com/fuselabs/jsxtyper) .jsx ファイルから TypeScript インターフェースを生成
* :octocat: [TodoMVC • TypeScript + React Example](https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react)
* :octocat: [Veritas Kanban](https://github.com/BradGroux/veritas-kanban) - AI エージェント連携付きセルフホスト型カンバンボード。React 19、TypeScript strict、Vite 6 で構築し、テスト 1,255 件。
* :scroll: [Working with React and TypeScript](http://blog.wolksoftware.com/working-with-react-and-typescript)
* :guardsman: [**vortigern** - A universal boilerplate for building web applications w/ TypeScript, React, Redux and more.](https://github.com/barbar/vortigern)
* :robot: [Convert React code to TypeScript automatically](https://github.com/lyft/react-javascript-to-typescript-transform)
* :octocat: [React Server Example TSX](https://github.com/styfle/react-server-example-tsx) TypeScript の React サーバーサイドレンダリングを使うアイソモーフィックなウェブアプリ用ボイラープレート
* :octocat: [React & Redux in TypeScript - Static Typing Guide](https://github.com/piotrwitek/react-redux-typescript-guide) TypeScript による「React & Redux」静的型付けの完全ガイド
* :octocat: [Typescript Monorepo CRA Example](https://github.com/deptno/typescript-monorepo-cra-example) - ミニマルな CRA + TypeScript モノレポ。
* :octocat: [Typescript Monorepo Next Example](https://github.com/deptno/typescript-monorepo-next-example) - ミニマルな Next.js + TypeScript モノレポ。
* :stars: [Crisp React](https://github.com/winwiz1/crisp-react) React クライアントと Express バックエンドのボイラープレート。性能・機能を強化し、React-Express のよくある問題を回避。
* :book: [React by Example](https://reactbyexample.github.io/) プログラマー向けのコード中心 React チュートリアル
* :octocat: [Materio Free MUI React NextJS Typescript Admin Template](https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free) - 開発者向けの強力で包括的な無料 MUI React NextJS 管理ダッシュボードテンプレート。TypeScript と JavaScript 製。
* :octocat: [Flowbite React](https://github.com/themesberg/flowbite-react) - React、TypeScript、Tailwind CSS ベースのオープンソース・コンポーネントライブラリ
* :octocat: [react-feedback-surveys](https://github.com/feedback-tools-platform/react-feedback-surveys) - TypeScript 完全対応。React アプリで NPS / CSAT / CES を収集する軽量・依存ゼロのアンケートウィジェット

### プラットフォームエンジニアリングと DevOps
* :octocat: [CDK8s](https://cdk8s.io/) - TypeScript で Kubernetes アプリと再利用可能な抽象化を定義
* :octocat: [AWS CDK](https://github.com/aws/aws-cdk) - TypeScript でクラウドインフラを定義する Cloud Development Kit
* :octocat: [Pulumi](https://github.com/pulumi/pulumi) - TypeScript、JavaScript、Python、Go、.NET によるコードとしてのインフラ（IaC）
* :octocat: [Backstage](https://github.com/backstage/backstage) - TypeScript 製の開発者ポータル構築基盤

### バックエンド API
* :octocat: [Actio](https://github.com/crufters/actio/) - モノリスとマイクロサービス向け Node.js フレームワーク。
* :octocat: [design-first](https://adam-hanna.github.io/design-first-docs/) - TypeScript 向け REST API テンプレートエンジン
* :octocat: [Fastify](https://github.com/fastify/fastify) - 高速で低オーバーヘッドの Node.js 用ウェブフレームワーク
* :octocat: [Hono](https://hono.dev/) - エッジ向けの小型・シンプル・超高速ウェブフレームワーク。あらゆる JavaScript ランタイムで動作
* :octocat: [Nest](https://github.com/nestjs/nest) - TypeScript ベースで効率的、スケーラブルなエンタープライズ級サーバーアプリを構築する進化型 Node.js フレームワーク 🚀（https://nestjs.com/ も参照）
  * :octocat: [nestia](https://github.com/samchon/nestia) - `typia` の検証デコレーターは 20,000 倍高速、JSON シリアライズは 200 倍高速。純粋な TypeScript インターフェースを DTO に利用でき、サーバー全体の性能は約 30 倍向上します。型付き `fetch` 関数集の SDK と、組み込みバックエンドシミュレーターも生成可能。`swagger.json` のみで NestJS プロジェクトを移行できます 🚀（https://nestia.io/docs も参照）
* :octocat: [LoopBack 4](https://github.com/strongloop/loopback-next) - API / マイクロサービス構築向けの高拡張性 Node.js / TypeScript フレームワーク。:rocket:（https://loopback.io/ も参照）
* :octocat: [FoalTS](https://github.com/FoalTS/foal) - エンタープライズ級 Node.JS アプリ向けのシンプルで直感的、完全なフレームワーク :boom: :rocket:（https://foalts.org も参照）
* :octocat: [Enso](http://ensojs.netlify.com) - 合成可能性と開発者体験を重視し、ドメイン駆動設計に着想を得た TypeScript ファーストの Node.JS フレームワーク
* :octocat: [Libstack](https://libstack.io) - TypeScript サーバーを簡単に作成し Docker にデプロイする各種モジュール集。
* :octocat: [tinyhttp](https://github.com/talentlessguy/tinyhttp) - TypeScript 製でネイティブ ESM にコンパイルされるモダンな Express 風 Node.js ウェブフレームワーク。
* :octocat: [ZenTS](https://github.com/sahachide/ZenTS) - リッチなウェブアプリ向けのモダンな Node.js / TypeScript ファーストのフレームワーク
* :octocat: [Booster Framework](https://github.com/boostercloud/booster) - Booster Cloud のイベント駆動・クラウドネイティブな GraphQL オープンソース基盤。高水準の抽象化と規約を活用。（https://booster.cloud も参照）

### AI

* :octocat: [MastraAI](https://github.com/mastra-ai/mastra) - AI アプリや機能をすばやく構築する独自の方針を持つ TypeScript フレームワーク。
* :octocat: [VoltAgent](https://github.com/voltagent/voltagent) - ツール、メモリ、可視性を備えた AI エージェントの構築・実行用 TypeScript フレームワーク。
* :octocat: [Tambo](https://github.com/tambo-ai/tambo) - MCP 対応の生成 UI を構築する React SDK。
* :octocat: [Maxim AI](https://github.com/maximhq/maxim-js) - Maxim の可観測性を実現する JS/TS SDK。Maxim はエンタープライズ級の評価・可観測性基盤です。（https://getmaxim.ai も参照）
* :octocat: [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - LLM 送信前に個人情報（PII）をローカルで匿名化し、応答を復元するゼロトラスト SDK。

### スタンドアロンアプリ
* :octocat: [Visual Studio Code](https://github.com/Microsoft/vscode) - マルチプラットフォーム IDE。
* :octocat: [alm](https://github.com/alm-tools/alm) - TypeScript と React で書かれた TypeScript 専用の次世代 IDE
* :octocat: [App Outlet](https://github.com/app-outlet/app-outlet) - TypeScript と Angular 製、AppImage / Flatpak / Snap 向けの汎用 Linux アプリストア
* :octocat: [SnowFS](https://github.com/snowtrack/snowfs) - グラフィックファイル向けの高速でスケーラブルなバージョン管理ストレージ
* :octocat: [MemFree](https://github.com/memfreeme/memfree) - オープンソースのハイブリッド AI 検索エンジン。インターネット、ブックマーク、ノート、文書から正確な答えをすぐ取得。ワンクリックでデプロイ可能。
* :octocat: [Nostream](https://github.com/cameri/nostream) - TypeScript 製 Nostr リレー
* :octocat: [Peekaping](https://github.com/0xfurai/peekaping) - ウェブサイト、API、サービスをリアルタイム通知、美しいステータスページ、詳細分析で監視する稼働状況監視ツール

##### Chrome 拡張機能
* [OctoLinker](https://github.com/OctoLinker/browser-extension)
* [lc-mate](https://github.com/cglotr/lc-mate) - LC ユーザー名にコンテストレーティングを追加する拡張機能

### デザインパターン
* :octocat: [Design Patterns implementation](https://github.com/torokmark/design_patterns_in_typescript) - GoF の有名な 23 パターンを実装
* :octocat: [Real World Design Patterns](https://github.com/vahidvdn/realworld-design-patterns) - テスト付きの実践的デザインパターン集

### デコレーター
- :octocat: [Performance Decorators](https://github.com/RyanMyrvold/Performance-Decorators) - 実行時間記録やメモリ使用量監視など、性能最適化向け TypeScript デコレーター集。

### ライブラリ
* :octocat: [SuperJSON](https://github.com/blitz-js/superjson) - Date、BigInt などを含む JSON の上位集合へ JavaScript 式を安全にシリアライズ
* :octocat: [Procedurem](https://github.com/ImVexed/Procedurem) - WebSocket 使用の小型（2 KB）で高性能な双方向 RPC ライブラリ。
* :octocat: [RxJS](https://github.com/ReactiveX/RxJS) - JavaScript 向けリアクティブプログラミングライブラリ。
* :octocat: [xstream](https://github.com/staltz/xstream) - JavaScript 向けの直感的で小さく高速な関数型リアクティブストリームライブラリ。
* :octocat: [mockt](https://github.com/nbottarini/mockt) - TypeScript / JavaScript 向けの楽しいモックライブラリ
* :octocat: [substitute.js](https://github.com/ffMathy/FluffySpoon.JavaScript.Testing) - NSubstitute から移植された流れるような API の TypeScript モックライブラリ。
* :octocat: [TypeMoq](https://github.com/florinn/typemoq) - シンプルな TypeScript モックライブラリ。
* :octocat: [fast-check](https://github.com/dubzzz/fast-check) - TypeScript 向けプロパティベーステストフレームワーク。
* :octocat: [Suites](https://github.com/suites-dev/suites) - IoC（制御の反転）や依存性注入フレームワークと連携する TypeScript バックエンド用ユニットテスト基盤。
* :octocat: [InversifyJS](https://github.com/inversify/InversifyJS/) -  TypeScript を活用した JavaScript / Node.js アプリ向けの強力で軽量な制御反転コンテナー。
* :octocat: [TypeORM](https://github.com/typeorm/typeorm) - TypeScript / JavaScript（ES7、ES6、ES5）向け ORM。MySQL、PostgreSQL、MariaDB、SQLite、MS SQL Server、Oracle、WebSQL に対応。NodeJS、ブラウザー、Ionic、Cordova、Electron で動作。
  * :octocat: [Safe-TypeORM](https://github.com/samchon/safe-typeorm) - コンパイル段階で `TypeORM` を強化し、アプリ側の結合による自動性能調整をサポート。型メタプログラミングで生 SQL クエリの安全性も保証。
* :octocat: [MikroORM](https://github.com/mikro-orm/mikro-orm) - データマッパー、作業単位、ID マップの各パターンに基づく Node.js 用 TypeScript ORM。MongoDB、PostgreSQL、MySQL、SQLite に対応。
* :octocat: [DrizzleORM](https://orm.drizzle.team/) - 軽量 TypeScript ORM。柔軟なデータアクセスを実現する SQL 風ライブラリでサーバーレス対応、依存ゼロ。
* :octocat: [Prisma](https://github.com/prisma/prisma) - Node.js / TypeScript 向けのモダンな DB アクセス（ORM 代替）。PostgreSQL、MySQL、SQLite に対応
  * :octocat: [prisma-markdown](https://github.com/samchon/prisma-markdown) ERD 図と説明からなる Markdown ドキュメントを生成。
* :octocat: [Corgi](https://github.com/cardog-ai/corgi) - 最適化 SQLite を使う TypeScript 製 VIN デコーダー。完全オフラインで 1 ms 未満、NHTSA 全データを 21 MB に収録。
* :octocat: [Neuledge](https://github.com/neuledge/engine-js) - DB 向け汎用言語。データモデリング、ビジネスロジック、スキーマ検証の最先端ツールを提供。
* :octocat: [Typetta](https://github.com/twinlogix/typetta) - GraphQL をスキーマ言語に使う Node.js 用 TypeScript ORM。主要 SQL DB と MongoDB に対応。
* :octocat: [TypeGQL](https://github.com/prismake/typegql) - 型付き TypeScript クラスから直接 GraphQL スキーマを作るツール集。
* :octocat: [TSTL](https://github.com/samchon/tstl) - TypeScript による C++ STL（標準テンプレートライブラリ）。コンテナー、イテレーター、アルゴリズム、ファンクターを提供。
  * :octocat: [ECol](https://github.com/samchon/ecol) - TSTL コンテナーの拡張。要素 I/O イベントを配信するコレクション。
  * :octocat: [TGrid](https://github.com/samchon/tgrid) - TSTL のグリッド計算拡張。ネットワークとスレッドに対応し、RFC（リモート関数呼び出し）をサポート。
  * :octocat: [Mutex-Server](https://github.com/samchon/mutex-server) - ネットワークレベルでミューテックスやセマフォのようにクリティカルセクションを制御。
* :octocat: [Kalimdor.js](https://github.com/JasonShin/kalimdorjs) - ウェブ、Node、開発者向け機械学習ライブラリ！
* :octocat: [prelude.ts](https://github.com/emmanueltouzery/prelude.ts) - 関数型プログラミング向け。不変の永続コレクション、Option / Either などの構成要素とコンビネーターを提供。
* :octocat: [ee-ts](https://github.com/aleclarson/ee-ts) - 型付きイベントエミッター
* :octocat: [io-ts](https://github.com/gcanti/io-ts) - 実行時の型検証
* :octocat: [mokia](https://github.com/varHarrie/mokia) - データシミュレーションと HTTP サービスを統合したモックサーバー。
* :octocat: [sub-events](https://github.com/vitaly-t/sub-events) - 型安全なイベント。
* :octocat: [ts-audio](https://github.com/EvandroLG/ts-audio) - `AudioContext` API を扱う環境非依存で使いやすいライブラリ
* :octocat: [tslog](https://github.com/fullstack-build/tslog) - ネイティブ TypeScript 対応の強力なロギングライブラリ。文字列補間、ネイティブ V8 スタックトレース、秘密情報のマスキング、AsyncLocalStorage による requestId に対応
* :octocat: [tsParticles](https://github.com/matteobruni/tsparticles) - ウェブサイトで簡単にパーティクルアニメを作る軽量ライブラリ（ReactJS、VueJS、Angular、Svelte などにも対応）
* :octocat: [statek](https://github.com/pie6k/statek) - リアクティブ状態管理ライブラリ
* :octocat: [Injex](https://www.injex.dev/) - TypeScript アプリ向けのシンプルでデコレーター対応、プラグイン可能な依存性注入基盤
* :octocat: [tRPC](https://www.trpc.io/) - エンドツーエンド型安全 API 構築用 TypeScript ツールキット
* :octocat: [vard](https://github.com/andersmyrmel/vard) - LLM アプリ向けのパターンベース TypeScript プロンプトインジェクション検出。Zod 風 API で 0.5 ms 未満に検証。
* :octocat: [interface-forge](https://www.npmjs.com/package/interface-forge) - TypeScript 型とインターフェースを使うテストデータファクトリー
* :octocat: [iter-ops](https://github.com/vitaly-t/iter-ops) - 反復可能オブジェクトの操作
* :octocat: [Remult](https://github.com/remult/remult) - フルスタック TypeScript アプリで型安全な CRUD とフロント／バックエンドのモデル共有を実現。
* :octocat: [Jest](https://github.com/facebook/jest) - 包括的な JavaScript テストソリューション。多くのプロジェクトでそのまま動作。
* :octocat: [diod](https://github.com/artberri/diod) - Node.js / ブラウザーアプリ向けの軽量な制御反転コンテナーおよび依存性インジェクター。
* :octocat: [@deliberative/crypto](https://github.com/deliberative/crypto) - 公開鍵暗号、AEAD 秘密ボックス、Shamir 秘密分散、ランダムシャッフル対応の TypeScript / WebAssembly ライブラリ。Node.js、ESM、CommonJS、ブラウザーで動作。
* :octocat: [castore](https://github.com/castore-dev/castore) - アプリにイベントソーシングを簡単に実装する TypeScript ライブラリ
* :octocat: [sweet-monads](https://github.com/JSMonk/sweet-monads) - `Maybe` / `Either` などのモナドと高性能イテレーターを提供する TypeScript ライブラリ。
* :octocat: [simple-mask-money](https://github.com/codermarcos/simple-mask-money) - 💰 金額をフォーマットするシンプルで安全な型付きパッケージ！
* :octocat: [Color-Core](https://github.com/iamlite/color-core) - TypeScript / JavaScript 用の強力で型安全な色操作ライブラリ。複数の色空間を扱う包括的ツールキットで、高度な色処理が必要な開発に不可欠。
* :octocat: [PigmentTS](https://github.com/Jay-Karia/pigment-ts) - 色の操作・変換向け軽量ユーティリティ。
* :octocat: [file-graph](https://github.com/DIY0R/file-graph) - ファイルにグラフを保存し、クエリするライブラリ。
* :octocat: [@diy0r/nestjs-rabbitmq](https://github.com/DIY0R/nestjs-rabbitmq) - RabbitMQ を使う NestJS マイクロサービス構築用ライブラリ。
* :octocat: [Onion.JS](https://github.com/ThomasAribart/onion.js) - 型を壊さずにラッパー（高階関数）を設計・適用。[HotScript](https://github.com/gvergnaud/hotscript) の高階型ベース。
* :octocat: [text-smart-trimmer](https://github.com/vaidehimani/text-smart-trimmer) - 単語境界、句読点、独自接尾辞を保持するか選べる、テキスト切り詰め用軽量 TypeScript ユーティリティ。
* :octocat: [nano-string-utils](https://github.com/Zheruel/nano-string-utils) - 依存ゼロの超軽量文字列ユーティリティ。ツリーシェイク可能で完全型付き、最新 JavaScript 向けに最適化。
* :octocat: [safe-fetch](https://github.com/asouei/safe-fetch) - 依存ゼロの fetch ラッパー。安全な結果、二重タイムアウト、スマート再試行、正規化された TypeScript エラーを提供。
* :octocat: [stunk](https://github.com/I-am-abdulazeez/stunk) - 軽量でフレームワーク非依存の状態管理。細粒度リアクティビティ向けのアトミックチャンクを備え、あらゆる TypeScript アプリで利用可能。
* :octocat: [blastore](https://github.com/sergey-shablenko/blastore) - localStorage、AsyncStorage、メモリなど同期・非同期バックエンド用の最小・高性能ストレージラッパー。完全な TypeScript 型安全性を提供。
* :octocat: [FilterQL](https://github.com/adamhl8/filterql) - 構造化データのフィルタリング用小型クエリ言語
* :octocat: [ffetch](https://github.com/fetch-kit/ffetch) – TypeScript ファーストの `fetch` ラッパー。再試行、タイムアウト、サーキットブレーカー、ライフサイクルフック対応。実行時依存ゼロで fetch のある環境なら動作
* :octocat: [iterflow](https://github.com/gv-sh/iterflow) - 統計処理、ウィンドウ処理、遅延評価を備えた強力なイテレーター用ユーティリティ
* :octocat: [Nano Queries](https://github.com/vitonsky/nano-queries) - DB 非依存のクエリビルダー。合成・ネスト・変更可能なクエリに対応。Postgres、SQLite、PGLite、DuckDB などで本番利用。

# 大規模言語モデル（LLM)
* [duckduckgo-ai-chat](https://github.com/mumu-lhl/duckduckgo-ai-chat) - 無料で gpt-4o-mini を使える DuckDuckGo AI Chat API を提供
* [Neurolink](https://github.com/juspay/neurolink) - OpenAI、Anthropic、Google、Bedrock、Azure など 12 以上の AI 提供元を統合する開発基盤。MCP、複数提供元のフェイルオーバー、本番向け企業機能を備える。TypeScript SDK + CLI。
* [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - LLM 送信前に個人情報（PII）をローカルで匿名化し、応答を復元するゼロトラスト SDK。

# 動画コース
## :free: 無料コース
* [Angular Applications with TypeScript](https://mva.microsoft.com/en-US/training-courses/angular-applications-with-typescript-14330) （Microsoft Virtual Academy）
* [AngularJS with TypeScript made easy](https://www.youtube.com/watch?v=OZxnFB0yQHs) （SSW TV）
* [Full Stack React GraphQL TypeScript Tutorial - 14 hour course](https://www.youtube.com/watch?v=I6ypD7qv3Z8) （YouTube）
* [Evolving JavaScript with TypeScript](https://www.youtube.com/watch?v=Ut694dsIa8w) TypeScript の詳しい入門
* [Why program in TypeScript?](https://www.youtube.com/watch?v=1TW9SdHIiXI) JavaScript の代わりに TypeScript を使う利点を中心に、主な構文要素を概説
* [Functional Programming with TypeScript](https://www.youtube.com/playlist?list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo) - 初心者向け YouTube プレイリストで Sahand Javid と関数型プログラミングを学び、fp-ts のようなライブラリを作りましょう。
* [Building CRM from scratch with Typescript and Bun](https://www.youtube.com/watch?v=l4QjeBEkNLc) - 大規模フレームワークなしで実用的な CRM をゼロから構築。Bun、TypeScript、Tailwind を使用。

## :dollar: 有料コース
* [TypeScript Fundamentals](https://www.pluralsight.com/courses/typescript) （Pluralsight）
* [Practical TypeScript Migration](https://www.pluralsight.com/courses/typescript-practical-migration) （Pluralsight）
* [Angular with TypeScript](http://www.pluralsight.com/courses/angular-typescript) （Pluralsight）
* [Using TypeScript for Large AngularJS Applications](https://www.pluralsight.com/courses/using-typescript-large-angularjs-apps) （Pluralsight）
* [Introduction to TypeScript](https://www.packtpub.com/application-development/introduction-typescript-video) （Packt）
* [Mastering TypeScript](https://www.packtpub.com/web-development/mastering-typescript-video) （Packt）
* [TypeScript: The Complete Developer's Guide](https://www.udemy.com/typescript-the-complete-developers-guide/) （Udemy）
* [Angular with TypeScript](https://www.manning.com/livevideo/angular-for-java-developers-typescript/) （Manning）
* [Mastering TypeScript - 2022 Edition](https://www.udemy.com/course/learn-typescript/) （Udemy）

# チュートリアル

* [Converting your vanilla JavaScript app to TypeScript](https://www.useanvil.com/blog/engineering/converting-vanilla-javascript-to-typescript)
* [Difference Between TypeScript and JavaScript](https://www.scaler.com/topics/typescript-vs-javascript/)

# ロードマップ

* [TypeScript Roadmap](https://roadmap.sh/typescript)
* [TypeScript Origins: The Documentary - YouTube](https://www.youtube.com/watch?v=U6s2pdxebSo) 提供: OfferZen Origins
  > このドキュメンタリーには、Anders Hejlsberg、Steve Lucco、Luke Hoban、Daniel Rosenwasser、Ryan Cavanaugh、Amanda Silver、Matt Pocock、Josh Goldberg など、多くの主要貢献者やコミュニティメンバーが登場します！

### バッジ
* [TypeScript Badges](https://github.com/ellerbrock/typescript-badges/)
[![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/awesome/typescript125x28.png)](https://github.com/ellerbrock/typescript-badges/) [![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/code/typescript-125x28.png)](https://github.com/ellerbrock/typescript-badges/) [![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/love/typescript-125x28.png)](https://github.com/ellerbrock/typescript-badges/)

### ソーシャル
 * [@typescriptlang](https://twitter.com/typescriptlang) - TypeScript 公式 Twitter
 * [@angularjs](https://twitter.com/angularjs) - TypeScript を 2.0 から使う AngularJS 公式 Twitter
 * [@jntrnr](https://twitter.com/jntrnr) - Microsoft の TypeScript プログラムマネージャー
 * [@ahejlsberg](https://twitter.com/ahejlsberg) - TypeScript プロジェクトに携わる Microsoft のテクニカルフェロー

### 謝辞
> （追加: 2023 年）貢献に感謝を伝える新しいセクション。

 - 2023 年 - ⚒ Hamza ( @Hamza12700 https://github.com/Hamza12700 ) の[15 件を超えるマージ済みプルリクエスト](https://github.com/dzharii/awesome-typescript/pulls?q=is%3Apr+author%3AHamza12700+is%3Aclosed)に感謝します。TypeScript の最新プロジェクトに合わせてリストを保つための大きな貢献です。**2023 年の年間最優秀コントリビューター**。
