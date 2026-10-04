<p align="center">
  <br>
    <img src="awesome-actions.png" width="150"/>
  <br>
</p>

# Awesome Actions [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [<!--lint ignore no-dead-urls-->![GitHub Actions status | sdras/awesome-actions](https://github.com/sdras/awesome-actions/workflows/Lint%20Awesome%20List/badge.svg)](https://github.com/sdras/awesome-actions/actions?workflow=Lint+Awesome+List)

> GitHub Actions に関連する優れたものを厳選したリストです。

Actions はリポジトリ内で GitHub プラットフォームのイベントによって直接トリガーされ、それに応じて Linux、Windows、macOS の仮想マシン上、またはコンテナ内でオンデマンドのワークフローを実行します。GitHub Actions を使えば、アイデアから本番環境までのワークフローを自動化できます。

## 目次

- [公式リソース](#official-resources)
  - [ワークフローの例](#workflow-examples)
  - [公式アクション](#official-actions)
  - [独自のアクションを作成](#create-your-actions)
- [コミュニティリソース](#community-resources)
  - [GitHub のツールと管理](#github-tools-and-management)
  - [アクション集](#collection-of-actions)
  - [ユーティリティ](#utility)
  - [静的解析](#static-analysis)
  - [動的解析](#dynamic-analysis)
  - [モニタリング](#monitoring)
  - [プルリクエスト](#pull-requests)
  - [GitHub Pages](#github-pages)
  - [通知とメッセージ](#notifications-and-messages)
  - [デプロイ](#deployment)
  - [外部サービス](#external-services)
  - [フロントエンドツール](#frontend-tools)
  - [機械学習運用](#machine-learning-ops)
  - [ビルド](#build)
  - [データベース](#database)
  - [ネットワーク](#networking)
  - [ローカライズ](#localization)
  - [お楽しみ](#fun)
  - [チートシート](#cheat-sheet)
- [チュートリアル](#tutorials)

## 公式リソース

- [公式サイト](https://github.com/features/actions)
- [公式ドキュメント](https://help.github.com/en/actions)
- [公式 Actions 組織](https://github.com/actions)
  - [actions/virtual-environments](https://github.com/actions/virtual-environments) - GitHub Actions の仮想環境です。
  - [actions/runner](https://github.com/actions/runner) - GitHub Actions 用 Runner です。
- [GitHub ブログでのお知らせ](https://github.blog/2018-10-17-action-demos/)

### ワークフローの例

- [actions/starter-workflows](https://github.com/actions/starter-workflows) - スターターワークフローの管理です。
- [actions/example-services](https://github.com/actions/example-services) - サービスコンテナを使ったワークフローの例です。

### 公式アクション

<!--lint disable no-dead-urls-->

#### ワークフローツールアクション

ワークフローで使用するツールアクションです。

<!--lint ignore awesome-spell-check-->

- [actions/checkout](https://github.com/actions/checkout) - ワークフローでリポジトリをセットアップします。
- [actions/upload-artifact](https://github.com/actions/upload-artifact) - ワークフローからアーティファクトをアップロードします。
- [actions/download-artifact](https://github.com/actions/download-artifact) - ビルドからアーティファクトをダウンロードします。
- [actions/cache](https://github.com/actions/cache) - GitHub Actions で依存関係とビルド成果物をキャッシュします。
- [actions/github-script](https://github.com/actions/github-script) - GitHub API とワークフローコンテキスト用のスクリプトを記述します。

#### GitHub 自動化用アクション

issue、プルリクエスト、リリースの管理を自動化します。

- [actions/create-release](https://github.com/actions/create-release) - GitHub Release API を使ってリリースを作成する Action です。
- [actions/upload-release-asset](https://github.com/actions/upload-release-asset) - GitHub Release API を使ってリリースアセットをアップロードする Action です。
- [actions/first-interaction](https://github.com/actions/first-interaction) - 初めて貢献する人からのプルリクエストや issue をフィルタリングする Action です。
- [actions/stale](https://github.com/actions/stale) - 最近やり取りのない issue やプルリクエストにマークを付けます。
- [actions/labeler](https://github.com/actions/labeler) - プルリクエストに自動でラベルを付ける Action です。
- [actions/delete-package-versions](https://github.com/actions/delete-package-versions) - GitHub Packages からパッケージのバージョンを削除します。

#### セットアップアクション

使用するプログラミング言語の特定のバージョンで GitHub Actions ワークフローをセットアップします。

- [actions/setup-node: Node.js](https://github.com/actions/setup-node)
- [actions/setup-python: Python](https://github.com/actions/setup-python)
- [actions/setup-go: Go](https://github.com/actions/setup-go)
- [actions/setup-dotnet: .NET core sdk](https://github.com/actions/setup-dotnet)
- [actions/setup-haskell: Haskell (GHC and Cabal)](https://github.com/actions/setup-haskell)
- [actions/setup-java: Java](https://github.com/actions/setup-java)
- [actions/setup-ruby: Ruby](https://github.com/actions/setup-ruby)
- [actions/setup-elixir: Elixir](https://github.com/actions/setup-elixir)
- [actions/setup-julia: Julia](https://github.com/julia-actions/setup-julia)

### 独自のアクションを作成

#### JavaScript と TypeScript のアクション

- [actions/toolkit](https://github.com/actions/toolkit) - GitHub Actions を開発するための GitHub Toolkit です。
- [actions/hello-world-javascript-action](https://github.com/actions/hello-world-javascript-action) - JavaScript Action の作成方法を示すテンプレートです。
- [actions/javascript-action](https://github.com/actions/javascript-action) - JavaScript Action を作成します。
- [actions/typescript-action](https://github.com/actions/typescript-action) - TypeScript Action を作成します。
- [actions/http-client](https://github.com/actions/http-client) - Action での使用に最適化された軽量 HTTP クライアントです。ジェネリクスと async/await を備えた TypeScript 製です。

#### Docker コンテナアクション

- [actions/hello-world-docker-action](https://github.com/actions/hello-world-docker-action) - Docker Action の作成方法を示すテンプレートです。
- [actions/container-toolkit-action](https://github.com/actions/container-toolkit-action) - actions/toolkit を使ってコンテナアクションを作成するためのテンプレートリポジトリです。

## コミュニティリソース

### GitHub のツールと管理

- [GitHub ラベルを宣言的に設定](https://github.com/lannonbr/issue-label-manager-action)
- [GitHub ラベルを宣言的に同期するアクション](https://github.com/micnncim/action-label-syncer)
- [GitHub にリリースを追加](https://github.com/elgohr/Github-Release-Action)
- [Docker Hub に Docker イメージを公開](https://github.com/elgohr/Publish-Docker-Github-Action)
- [ファイルの内容を使って issue を作成](https://github.com/peter-evans/create-issue-from-file)
- [アセット付きの GitHub リリースを公開](https://github.com/softprops/action-gh-release)
- [GitHub Project Automation+](https://github.com/alex-page/github-project-automation-plus) - 任意の webhook イベントを使って GitHub Project のカードを自動化します。
- [Web インターフェースで GitHub Actions をローカル実行](https://github.com/phishy/wflow)
- [ターミナルで GitHub Actions をローカル実行](https://github.com/nektos/act)
- [Android のデバッグ APK をビルドして公開](https://github.com/ShaunLWM/action-release-debugapk)
- [GitHub Actions 用の連番ビルド番号を生成](https://github.com/einaregilsson/build-number)
- [認証の手間なく Git の変更を GitHub リポジトリにプッシュ](https://github.com/ad-m/github-push-action)
- [イベントに基づいてリリースノートを生成](https://github.com/Decathlon/release-notes-generator-action)
- [指定した Markdown ファイルを基に GitHub Wiki ページを作成](https://github.com/Decathlon/wiki-page-creator-action)
- [コミット済みファイルを使ってプルリクエストに自動でラベルを付与](https://github.com/Decathlon/pull-request-labeler-action)
- [作成者のチーム名に基づいてプルリクエストにラベルを追加](https://github.com/JulienKode/team-labeler-action)
- [PR/Push で変更されたファイルの一覧を取得](https://github.com/trilom/file-changes-action)
- [任意のワークフローでプライベートアクションを使用](https://github.com/InVisionApp/private-action-loader)
- [issue の内容に基づいてラベルを付与](https://github.com/damccorm/tag-ur-it)
- [GitHub リリースをロールバック](https://github.com/author/action-rollback)
- [一定期間操作のないクローズ済み issue とプルリクエストをロック](https://github.com/dessant/lock-threads)
- [2 つのブランチ間のコミット差分数を取得](https://github.com/jessicalostinspace/commit-difference-action)
- [Git の参照情報に基づいてリリースノートを生成](https://github.com/metcalfc/changelog-generator)
- [GitHub リポジトリとコミットにポリシーを適用](https://github.com/talos-systems/conform)
- [issue の説明に基づいて自動でラベルを付与](https://github.com/Renato66/auto-label)
- [設定済み GitHub Actions を最新バージョンに更新](https://github.com/fabasoad/ghacu)
- [issue ブランチを作成](https://github.com/robvanderleek/create-issue-branch)
- [古いアーティファクトを削除](https://github.com/c-hive/gha-remove-artifacts)
- [Git コミット情報を環境変数として公開](https://github.com/rlespinasse/git-commit-data-action)
- [指定したファイルやバイナリを Wiki または外部リポジトリと同期](https://github.com/kai-tub/external-repo-sync-action)
- [任意のファイルを基に GitHub Wiki ページを作成・更新・削除](https://github.com/Andrew-Chen-Wang/github-wiki-action)
- [Prow GitHub Actions](https://github.com/jpmcb/prow-github-actions) - ポリシー適用、chat-ops、自動 PR マージを自動化します。
- [ワークフローで GitHub のステータスを確認](https://github.com/crazy-max/ghaction-github-status)
- [GitHub ラベルをコードとして管理（作成・名前変更・更新・削除）](https://github.com/crazy-max/ghaction-github-labeler)
- [プロジェクトの貢献者と依存先へ継続的に資金を分配](https://github.com/protontypes/libreselery)
- [GitHub の Herald ルール：PR に購読者、担当者、ラベルなどを追加](https://github.com/gagoar/use-herald-action)
- [GitHub Codeowners Validator](https://github.com/mszostok/codeowners-validator) - GitHub CODEOWNERS ファイルの正確性を検証します。公開・プライベートの GitHub リポジトリと GitHub Enterprise のインストール環境にも対応します。
- [Copybara Action](https://github.com/olivr/copybara-action) - リポジトリ間でコードを移動・変換します（1 つのモノレポから複数のリポジトリを管理するのに最適です）。

### アクション集

- [HashiCorp の Terraform を使用](https://github.com/hashicorp/setup-terraform)
- [Yarn 1 用 GitHub Actions](https://github.com/Borales/actions-yarn)
- [Yarn 2 用 GitHub Actions](https://github.com/sergioramos/yarn-actions)
- [Golang 用 GitHub Actions](https://github.com/cedrickring/golang-action)
- [R と関連する #rstats パッケージ用 GitHub Actions](http://maxheld.de/ghactions/)
- [WordPress 用 GitHub Actions](https://github.com/10up/actions-wordpress/)
- [Composer 用 GitHub Actions](https://github.com/MilesChou/composer-action)
- [Flutter 用 GitHub Actions](https://github.com/subosito/flutter-action)
- [PHP 用 GitHub Actions](https://github.com/shivammathur/setup-php)
- [Rust 用 GitHub Actions](https://github.com/actions-rs)
- [Android 用 GitHub Actions](https://github.com/Malinskiy/action-android)
- [Logtalk と Prolog 用 GitHub Actions](https://github.com/logtalk-actions)
- [Deno 用 GitHub Actions](https://github.com/denolib/setup-deno)
- [Unity 用 GitHub Actions](https://github.com/webbertakken/unity-actions)
- [Octions - GitHub REST API 用 GitHub Actions](https://github.com/maxkomarychev/octions)
- [Docker 用 GitHub Actions](https://github.com/docker/github-actions)
- [AWS 用 GitHub Actions](https://github.com/clowdhaus/aws-github-actions)
- [Actions Hub](https://github.com/actionshub)

### ユーティリティ

- [`ssh-agent` をセットアップ](https://github.com/webfactory/ssh-agent) - 追加の SSH キーを指定して `ssh-agent` を実行し、プライベートリポジトリにアクセスします。
- [README 用 GitHub Actions バッジ](https://github.com/atrox/github-actions-badge)
- [poetry を使う Python プロジェクト用 GitHub Actions](https://github.com/abatilo/actions-poetry)
- [pyenv を使う Python プロジェクト用 GitHub Actions](https://github.com/gabrielfalcao/pyenv-action)
- [LaTeX ドキュメントをコンパイルする GitHub Actions](https://github.com/xu-cheng/latex-action)
- [Maxmind データベースを更新](https://github.com/meetup/maxmind-updater)
- [tmate 経由の SSH でデバッグ](https://github.com/mxschmitt/action-tmate) - SSH 接続を提供して Action を直接デバッグします。
- [git-crypt ファイルをロック解除](https://github.com/sliteteam/github-action-git-crypt-unlock)
- [Golang CGO クロスコンパイラー](https://github.com/crazy-max/ghaction-xgo)
- [別のアーキテクチャ（arm32、aarch64 など）でジョブを実行](https://github.com/uraimo/run-on-arch-action)
- [目次を生成](https://github.com/technote-space/toc-generator)
- [issue にラベルまたは担当者を自動追加](https://github.com/Naturalclar/issue-action)
- [lgtm と言ったときに画像または GIF で LGTM リアクションを送信](https://github.com/micnncim/action-lgtm-reaction)
- [複数の範囲にわたるビルド番号を生成](https://github.com/zyborg/gh-action-buildnum)
- [GitHub リリースのアーティファクトを公開](https://github.com/skx/github-action-publish-binaries)
- [Jekyll Diff Action](https://github.com/David-Byrne/jekyll-diff-action) - 変更後にビルドされた Jekyll サイトの差分を取り、その結果を GitHub にコメントします。
- [Branch Protection Bot](https://github.com/benjefferies/branch-protection-bot) - ブランチ保護の「Include administrators」オプションを一時的に無効化し、再度有効化します。
- [コミットのステータスを待機](https://github.com/WyriHaximus/github-action-wait-for-status) - すべてのステータスとチェックが成功するか、いずれかが失敗するまで待機し、それに応じたステータスを出力します。
- [最新のタグを取得](https://github.com/WyriHaximus/github-action-get-previous-tag) - git から前のタグを取得します。
- [マイルストーンを作成](https://github.com/WyriHaximus/github-action-create-milestone) - タイトルと説明を指定して、新しいオープン状態のマイルストーンを作成します。
- [マイルストーンをクローズ](https://github.com/WyriHaximus/github-action-close-milestone) - 指定したマイルストーンをクローズします。
- [ブランチの命名規則を適用するアクション](https://github.com/deepakputhraya/action-branch-name)
- [一部の GitHub 変数の slug を公開](https://github.com/marketplace/actions/github-slug)
- [GitHub Action としての awesome-lint](https://github.com/max/awesome-lint)
- [JSON ファイルを編集](https://github.com/deef0000dragon1/json-edit-action)
- [Slate ドキュメントをビルド](https://github.com/Decathlon/slate-builder-action)
- [Properties を読み込み](https://github.com/christian-draeger/read-properties) - `.properties` ファイルから値を読み込みます。
- [Properties を書き込み](https://github.com/christian-draeger/write-properties) - `.properties` ファイルに値を書き込みます。
- [Autotag](https://github.com/butlerlogic/action-autotag) - マニフェストファイル（例：`package.json`）のバージョンが変更されたときに新しいタグを自動生成します。
- [Jinja2 でテンプレートを適用](https://github.com/cuchi/jinja2-action) - Jinja2 テンプレートエンジンを使ってテンプレートからファイルを生成します。
- [変更の有無を確認](https://github.com/UnicornGlobal/has-changes-action) - 前のステップからコードに変更があるか確認します。
- [Mind Your Language Action](https://github.com/tailaiw/mind-your-language-action) - issue やプルリクエスト内の攻撃的なコメントを検出し、投稿者に警告します。
- [YAML/JSON/XML コンバーター](https://github.com/fabasoad/yaml-json-xml-converter-action) - YAML/JSON/XML のファイル形式を相互に変換します。
- [NSFW 検出](https://github.com/fabasoad/nsfw-detection-action) - コミットされたファイル内の NSFW コンテンツを検出します。
- [変更されたパスを確認](https://github.com/MarceloPrado/has-changed-path) - 変更されたパスに基づいて条件付きで Action を実行します。
- [Linguist](https://github.com/fabasoad/linguist-action) - リポジトリを確認し、使用言語に関する情報を出力します。
- [Twilio 音声通話](https://github.com/fabasoad/twilio-voice-call-action/) - 指定したテキストで Twilio 音声通話を発信します。
- [Xcode をセットアップ](https://github.com/maxim-lobanov/setup-xcode) - macOS イメージにプリインストールされた Xcode のバージョンを切り替えます。
- [Xamarin をセットアップ](https://github.com/maxim-lobanov/setup-xamarin) - macOS イメージにプリインストールされた Xamarin と Mono のバージョンを切り替えます。
- [Memer Action](https://github.com/Bhupesh-V/memer-action) - プログラマー向けミームの GitHub Action xD。
- [Cocoapods をセットアップ](https://github.com/maxim-lobanov/setup-cocoapods) - Cocoapods の特定バージョンをセットアップします。
- [パブリック IP](https://github.com/haythem/public-ip) - GitHub Actions Runner のパブリック IP アドレスを照会します。
- [Lazarus/FPC 用 GitHub Actions](https://github.com/gcarreno/setup-lazarus)
- [Twilio Fax](https://github.com/fabasoad/twilio-fax-action/) - Twilio アカウントを使って文書を FAX 送信します。
- [Kubernetes ツールをセットアップ](https://github.com/yokawasa/action-setup-kube-tools) - Runner に Kubernetes ツール（kubectl、kustomize、helm、kubeval、conftest、yq）をインストールします。
- [Elastic Cloud Control Tool をセットアップ](https://github.com/yokawasa/action-setup-ecctl) - Runner に ecctl の特定バージョンをインストールします。
- [PowerShell スクリプト](https://github.com/Amadevus/pwsh-script) - ワークフローコンテキスト（例：`$github.token`）とコマンドレットを使って PowerShell スクリプトを実行し、戻り値を Action の出力として返します。
- [ファイルをアップロードして VirusTotal でスキャン](https://github.com/crazy-max/ghaction-virustotal)
- [GPG キーをインポート](https://github.com/crazy-max/ghaction-import-gpg)
- [UPX で圧縮](https://github.com/crazy-max/ghaction-upx) - 実行ファイル用の究極のパッカーです。
- [新しい Go モジュールのバージョンをプロキシキャッシュに取り込む](https://github.com/andrewslotin/go-proxy-pull-action) - Go モジュールの最新バージョンがプロキシキャッシュにあることを保証します。また、リリース時に pkg.go.dev のドキュメントも更新します。
- [実行アーティファクトを削除](https://github.com/marketplace/actions/delete-run-artifacts) - ワークフロー実行の終了時にすべてのアーティファクトを削除します。
- [GitHub 環境変数アクション](https://github.com/FranzDiebold/github-env-vars-action) - ブランチ名やタグ名、リポジトリ slug、ref slug などの環境変数を公開します。
- [GitHub Action Locks](https://github.com/abatilo/github-action-locks/blob/master/README.md) - GitHub Action ワークフローのアトミックな実行を保証します。
- [パスフィルター](https://github.com/dorny/paths-filter) - PR、フィーチャーブランチ、またはプッシュされたコミットで変更されたファイルに基づき、条件付きで Action を実行します。
- [Minisauras](https://github.com/TeamTigers/minisauras) -  ベースブランチからすべての JavaScript ファイルと CSS ファイルを取得して縮小し、新しいブランチでプルリクエストを作成します。
- [Web サイトを GIF に変換](https://github.com/PabloLec/website-to-gif) - 任意の Web ページを GIF に変換し、README やドキュメントなどに表示します。
- [Interactive Inputs - 実行時のワークフロー入力](https://github.com/boasiHQ/interactive-inputs) - GitHub Actions ワークフローに実行時の動的な入力を追加します。

#### 環境

- [envfile を作成](https://github.com/SpicyPizza/create-envfile)
- [後続のビルドステップ用にグローバル環境変数をエクスポート](https://github.com/zweitag/github-actions)
- [後続のステップで使う環境変数をプログラムから設定](https://github.com/allenevans/set-env)
- [Python 用 Conda 環境をインストール](https://github.com/goanpeca/setup-miniconda)
- [NativeScript をセットアップ](https://github.com/hrueger/setup-nativescript)
- [JSON 環境ファイルを作成](https://github.com/schdck/create-env-json)

#### 依存関係

- [キャッシュを使って NPM 依存関係をインストール](https://github.com/bahmutov/npm-install)
- [新しい NPM 依存関係を強調表示](https://github.com/hiwelo/new-dependencies-action) - 新しく追加された NPM 依存関係の情報をプルリクエストにコメントします。
- [NPM 依存関係をキャッシュ](https://github.com/c-hive/gha-npm-cache)
- [Yarn 依存関係をキャッシュ](https://github.com/c-hive/gha-yarn-cache)

#### セマンティックバージョニング

- [次の SemVer バージョン](https://github.com/WyriHaximus/github-action-next-semvers) - 指定された SemVer バージョンに基づき、次の major、minor、patch バージョンを出力します。
- [検索文字列から最新の SemVer とブランチ名を取得](https://github.com/jessicalostinspace/github-action-get-regex-branch)
- [リリースブランチを作成](https://github.com/jessicalostinspace/cut-release-action) - ブランチの接頭辞と任意のセマンティックバージョンを指定してリリースブランチを作成します。
- [セマンティックバージョンをインクリメント](https://github.com/christian-draeger/increment-semantic-version) - 指定したリリース種別に応じて、セマンティックバージョン（SemVer）を更新します。

### 静的解析

- [PHPStan 静的コード解析アクション](https://github.com/OskarStark/phpstan-ga)
- [GraphQL Inspector Action](https://github.com/kamilkisiela/graphql-inspector)
- [PSScriptAnalyzer による PowerShell 静的解析](https://github.com/devblackops/github-action-psscriptanalyzer)
- [tfsec を実行し、reviewdog の結果を PR に出力](https://github.com/reviewdog/action-tfsec)

#### テスト

- [ヘッドレス Chrome の Node API、Puppeteer でテストを実行](https://github.com/ianwalter/puppeteer)
- [xUnit Slack Reporter：xUnit レポートのテスト概要を Slack チャンネルに送信](https://github.com/ivanklee86/xunit-slack-reporter)
- [codeception テストを実行](https://github.com/joelwmale/codeception-action)
- [TestCafe テストを実行](https://github.com/DevExpress/testcafe-action)
- [Unity テストを実行](https://github.com/webbertakken/unity-test-runner)
- [Cypress E2E テストを実行](https://github.com/cypress-io/github-action)
- [Molecule で Ansible ロールをテスト](https://github.com/robertdebock/molecule-action)
- [artillery.io でパフォーマンステストを実行](https://github.com/kenju/github-actions-artillery)
- [BuildPulse で不安定なテストを検出](https://github.com/Workshop64/buildpulse-action)
- [Jest テストのコード注釈をインライン表示](https://github.com/IgnusG/jest-report-action)
- [Julia テストを実行](https://github.com/julia-actions/julia-runtest)

#### Lint

- [PHP Coding Standards Fixer アクション](https://github.com/OskarStark/php-cs-fixer-ga)
- [リポジトリ内の Dockerfile に対して Hadolint を実行](https://github.com/burdzwastaken/hadolint-action)
- [ESLint を実行し、reviewdog の結果を PR に出力](https://github.com/reviewdog/action-eslint)
- [\*.workflow ファイル用の JavaScript ベースの linter](https://github.com/OmarTawfik/github-actions-js)
- [tflint で Terraform ファイルを lint し、reviewdog の結果を PR に出力](https://github.com/reviewdog/action-tflint)
- [autopep8：Python コードを PEP 8 スタイルガイドに沿って自動整形](https://github.com/peter-evans/autopep8)
- [PHP プロジェクトの `composer.json` を正規化するため `ergebnis/composer-normalize` を実行](https://github.com/ergebnis/composer-normalize-action)
- [パッケージに必要な `runtime` アーティファクトだけが含まれることを確認するため `stolt/lean-package-validator` を実行](https://github.com/raphaelstolt/lean-package-validator-action)
- [PR イベントで Go の lint チェックを実行](https://github.com/ArangoGutierrez/GoLinty-Action)
- [Node.js - パッケージで使われる `format` または `lint` スクリプトを自動実行](https://github.com/MarvinJWendt/run-node-formatter)
- [Stylelinter - stylelint を実行する GitHub Action](https://github.com/exelban/stylelint)
- [stylelint を実行し、reviewdog の結果を PR に出力](https://github.com/reviewdog/action-stylelint)
- [PyCodeStyle Action - pycodestyle（autopep8）のフィードバックを PR にコメントする GitHub Action](https://github.com/ankitvgupta/pycodestyle-action)
- [wemake-python-styleguide - 最も厳格で独自の主張が強い Python linter。reviewdog の結果を PR に出力することも可能](https://github.com/wemake-services/wemake-python-styleguide)
- [ステータスチェックとファイル差分の注釈付きで TSLint を実行](https://github.com/mooyoul/tslint-actions)
- [commitlint でプルリクエストのコミットを lint](https://github.com/wagoid/commitlint-github-action)
- [vint を実行し、reviewdog の結果を PR に出力](https://github.com/reviewdog/action-vint)
- [mispell を実行し、reviewdog の結果を PR に出力](https://github.com/reviewdog/action-misspell)
- [golangci-lint を実行し、reviewdog の結果を PR に出力](https://github.com/reviewdog/action-golangci-lint)
- [shellcheck を実行し、reviewdog の結果を PR に出力](https://github.com/reviewdog/action-shellcheck)
- [Markdown ドキュメント内の配慮に欠ける表現を検出](https://github.com/theashraf/alex-action)
- [dotenv-linter を実行 - .env ファイルを簡単に lint。reviewdog の結果を PR に出力することも可能](https://github.com/wemake-services/dotenv-linter)
- [dotenv-linter を実行し、reviewdog の結果を PR に出力](https://github.com/mgrachev/action-dotenv-linter)
- [多くのプログラミング言語の lint エラーを表示して自動修正](https://github.com/samuelmeuli/lint-action)
- [注釈付き PHP_CodeSniffer](https://github.com/chekalsky/phpcs-action)
- [Markdown 用 linter（プリセット付き）](https://github.com/avto-dev/markdown-lint)
- [注釈を作成する Stylelint problem matcher](https://github.com/xt0rted/stylelint-problem-matcher)
- [PR で sqlcheck を実行し、SQL クエリのアンチパターンを検出](https://github.com/yokawasa/action-sqlcheck)
- [Fastlane Supply のメタデータを Play ストアのガイドラインに照らして検証](https://github.com/ashutoshgngwr/validate-fastlane-supply-metadata)
- [Golint で Golang コードを lint](https://github.com/Jerome1337/golint-action)

#### セキュリティ

- [Docker イメージ用の脆弱性スキャナー](https://github.com/phonito/phonito-scanner-action)
- [Dependabot の更新を自動で承認・マージ](https://github.com/ridedott/dependabot-auto-merge-action)
- [Python コードに dlint セキュリティ linter を実行](https://github.com/xen0l/dlint-check)
- [AWS Secrets Manager Actions](https://github.com/say8425/aws-secrets-manager-actions) - AWS Secrets Manager のシークレットを環境変数に設定します。
- [AWS IAM ポリシードキュメントの正確性とセキュリティ上の問題を lint](https://github.com/xen0l/iam-lint)
- [Secret Spreader](https://github.com/webfactory/secret-spreader) - 厳密には Action ではなく、複数のリポジトリにわたる Actions シークレットを管理するツールです。
- [Secrets Sync Action](https://github.com/google/secrets-sync-action) - 複数のリポジトリ間でシークレットを同期する Action です。
- [Snyk Test Action](https://github.com/snyk/actions)
- [シンプルな CLI で GitHub Actions のシークレットを管理](https://github.com/unfor19/githubsecrets)
- [SecretHub](https://github.com/secrethub/actions) - シークレットの信頼できる唯一の情報源を用意し、必要に応じて GitHub Actions に読み込みます。

#### コードカバレッジ

- [SonarCloud でコードをスキャン](https://github.com/sonarsource/sonarcloud-github-action)
- [コードカバレッジを codecov.io に送信](https://github.com/codecov/codecov-action)
- [コードカバレッジを CodeClimate に公開](https://github.com/paambaati/codeclimate-action)
- [リポジトリの Go Report Card を更新](https://github.com/creekorful/goreportcard-action)

### 動的解析

- [Gofmt を実行して Golang コードのフォーマットを確認](https://github.com/Jerome1337/gofmt-action)
- [Goimports を実行して Golang の import 順を確認](https://github.com/Jerome1337/goimports-action)

### モニタリング

- [Google Chrome の Lighthouse テストで Web ページを監査](https://github.com/jakejarvis/lighthouse-action)
- [Lighthouse を実行し、結果を PR と Slack に投稿](https://github.com/foo-software/lighthouse-check-action)
- [GitHub Actions を使って CI で Lighthouse を実行](https://github.com/treosh/lighthouse-ci-action)
- [Go の継続的なベンチマークと可視化](https://github.com/bobheadxi/gobenchdata)
- [Size Limit Action](https://github.com/andresz1/size-limit-action) - PR で JavaScript のコスト比較をコメントし、上限を超えた場合は PR を拒否します。
- [bundlephobia を確認](https://github.com/carlesnunez/check-my-bundlephobia) - bundlephobia.io に基づいて新規・変更後のパッケージサイズをコメントし、しきい値を超えた場合は PR を拒否します。

### プルリクエスト

- [担当者に基づいて PR レビュアーを設定](https://github.com/pullreminders/assignee-to-reviewer-action)
- [ブランチへの push 時に PR を作成または更新（ブランチ選択対応）](https://github.com/vsoch/pull-request-action)
- [PR を自動で rebase](https://github.com/cirrus-actions/rebase)
- [指定数の承認後に PR にラベルを付与](https://github.com/pullreminders/label-when-approved-action)
- [一致するファイルパターンに基づいて PR にラベルを追加](https://github.com/banyan/auto-label)
- [PR を自動承認](https://github.com/hmarr/auto-approve-action)
- [設定ファイルに基づいて PR にレビュアーを自動追加](https://github.com/kentaro-m/auto-assign-action)
- [ブランチ名のパターンに基づいて PR にラベルを追加](https://github.com/TimonVS/pr-labeler-action)
- [差分の合計サイズに基づいて PR にラベルを追加](https://github.com/pascalgn/size-label-action)
- [準備ができた PR を自動マージ](https://github.com/pascalgn/automerge-action)
- [PR にチケット参照が含まれることを確認](https://github.com/vijaykramesh/pr-lint-action)
- [Actions ワークスペース内のリポジトリ変更から PR を作成](https://github.com/peter-evans/create-pull-request)
- [PR を lint](https://github.com/seferov/pr-lint-action)
- [PR 向け ChatOps](https://github.com/machine-learning-apps/actions-chatops)
- [ブランチ名から抽出したテキストを PR のタイトルと本文の先頭に付加](https://github.com/tzkhan/pr-update-action)
- [Autosquash コミットをブロック](https://github.com/xt0rted/block-autosquash-commits-action)
- [マージ時に自動でバージョンを上げてタグ付け](https://github.com/anothrNick/github-tag-action)
- [古いチェックのある PR を自動更新し、すべてのブランチ保護条件を満たすものを squash merge](https://github.com/tibdex/autosquash)
- [Merge Pal - PR を自動更新してマージ](https://github.com/maxkomarychev/merge-pal-action)
- [プルリクエストのタイトルに命名規則を適用](https://github.com/deepakputhraya/action-pr-title)
- [停滞したプルリクエストの通知](https://github.com/jrylan/github-action-stuck-pr-notifier)
- [commitlint でプルリクエスト名を lint（squash merge に最適！）](https://github.com/JulienKode/pull-request-name-linter-action)
- [対象ブランチのチェックが失敗している場合に PR のマージをブロック](https://github.com/cirrus-actions/branch-guard)
- [プルリクエストで更新された静的サイトの生成済みスクリーンショットを取得](https://github.com/ssowonny/diff-pages-action)
- [プルリクエストが進行中かどうかに応じてラベルを追加](https://github.com/AlbertHernandez/working-label-action)
- [Ticket Check Action](https://github.com/neofinancial/ticket-check-action) - すべてのプルリクエストのタイトル先頭にチケット番号または issue 番号を自動で追加します。
- [正規表現によるプルリクエストの lint](https://github.com/MorrisonCole/pr-lint-action)
- [Pull Request Landmines](https://github.com/tylermurry/github-pr-landmine)
- [Checkstyle XML レポートに基づいて GitHub プルリクエストに注釈を付与](https://github.com/staabm/annotate-pull-request-from-checkstyle)
- [プルリクエスト統計](https://github.com/flowwer-dev/pull-request-stats) - レビュアーに関する参考統計を表示します。
- [プルリクエスト説明文の必須化](https://github.com/derkinderfietsen/pr-description-enforcer) - プルリクエストに説明文の記載を必須にします。

### GitHub Pages

- [Zola サイトを GitHub Pages にデプロイ](https://github.com/shalzz/zola-deploy-action)
- [Hugo の静的サイトをビルドして gh-pages ブランチに公開](https://github.com/khanhicetea/gh-actions-hugo-deploy-gh-pages)
- [カスタム Jekyll プラグインとビルドスクリプトで Jekyll サイトをビルドし、Gh-Pages ブランチにデプロイ](https://github.com/BryanSchuetz/jekyll-deploy-gh-pages)
- [Google Dataset Search のメタデータ](https://www.github.com/openschemas/extractors/) - その他の schema.org 抽出ツールを使い、GitHub Pages からデータセットを見つけられるようにします。
- [静的サイトジェネレーターを使って GitHub Pages にデプロイする GitHub Actions](https://github.com/peaceiris/actions-gh-pages)
- [Hexo 用 GitHub Action](https://github.com/heowc/action-hexo)
- [Google Analytics の統計情報を GitHub Pages にデプロイ](https://github.com/cristianpb/analytics-google)
- [GitHub Actions、Pages、Jekyll を活用した Jupyter Notebook ブログプラットフォーム](https://github.com/fastai/fastpages)
- [静的サイトを GitHub Pages にデプロイ](https://github.com/appleboy/gh-pages-action) - カスタムディレクトリにデプロイし、フォルダーやファイルを除外します。
- [高度な設定で GitHub Pages にデプロイ](https://github.com/crazy-max/ghaction-github-pages)

### 通知とメッセージ

- [Discord 通知を送信](https://github.com/Ilshidur/action-discord)
- [ボットとして Slack メッセージを投稿](https://github.com/pullreminders/slack-action)
- [Nexmo を使って GitHub Actions から SMS を送信](https://github.com/nexmo-community/nexmo-sms-action)
- [Clockworksms を使って GitHub Actions から SMS を送信](https://github.com/bharathvaj1995/clockwork-sms-action)
- [Telegram メッセージを送信](https://github.com/appleboy/telegram-action)
- [Discord にファイルまたはテキストメッセージを送信（色、ユーザー名、アバターをカスタマイズ可能）](https://github.com/appleboy/discord-action)
- [プルリクエストを使ってツイートを共同編集](https://github.com/gr2m/twitter-together)
- [Techulus の Push 経由でプッシュ通知を送信](https://github.com/techulus/push-github-action)
- [SendGrid でメールを送信](https://github.com/peter-evans/sendgrid-action)
- [Join 経由でプッシュ通知を送信](https://github.com/ShaunLWM/action-join)
- [npm の新しいパッケージバージョンを確認](https://github.com/MeilCli/npm-update-check-action)
- [NuGet の新しいパッケージバージョンを確認](https://github.com/MeilCli/nuget-update-check-action)
- [Gradle の新しいパッケージバージョンを確認](https://github.com/MeilCli/gradle-update-check-action)
- [Pushbullet 経由でプッシュ通知を送信](https://github.com/ShaunLWM/action-pushbullet)
- [Microsoft Graph で Outlook カレンダーのイベントを作成](https://github.com/anoopt/ms-graph-create-event)
- [GitHub Wiki ページの変更を監視して Slack に投稿](https://github.com/benmatselby/gollum-page-watcher-action)
- [MessageBird で SMS を送信](https://github.com/nikitasavinov/messagebird-sms-action)
- [古いボットに返信](https://github.com/c-hive/fresh-bot)
- [Discord に埋め込みメッセージを送信](https://github.com/sarisia/actions-status-discord)
- [PR を Teamwork のタスクと同期](https://github.com/Teamwork/github-sync)
- [Microsoft Teams 通知を送信](https://github.com/opsless/ms-teams-github-actions)

### デプロイ

- [Netlify にデプロイ](https://github.com/netlify/actions)
- [Actions を使って Probot アプリをデプロイ](https://probot.github.io/docs/deployment/#github-actions)
- [プレイリストを Spotify にデプロイ](https://github.com/swinton/SpotHub)
- [vsce で VS Code 拡張機能をデプロイ](https://github.com/lannonbr/vsce-action)
- [Web サイト更新後に Cloudflare キャッシュを削除](https://github.com/jakejarvis/cloudflare-purge-action)
- [DNS Control を使って DNS 設定をデプロイ](https://github.com/koenrh/dnscontrol-action)
- [Shopify にテーマをデプロイ](https://github.com/pgrimaud/action-shopify)
- [複数の GitLab CI パイプラインを起動](https://github.com/appleboy/gitlab-ci-action)
- [複数の Jenkins ジョブを起動](https://github.com/appleboy/jenkins-action)
- [Homebrew Tap 用 GitHub Action](https://github.com/izumin5210/action-homebrew-tap)
- [SSH 経由でファイルとアーティファクトをコピー](https://github.com/appleboy/scp-action)
- [リモートで ssh コマンドを実行](https://github.com/appleboy/ssh-action)
- [Python 配布パッケージを PyPI に公開](https://github.com/pypa/gh-action-pypi-publish)
- [静的 Web サイトを Azure Storage にデプロイ](https://github.com/feeloor/azure-static-website-deploy)
- [クロスプラットフォームの Chocolatey CLI でパッケージをビルドして公開](https://github.com/crazy-max/ghaction-chocolatey)
- [iOS Pod ライブラリを Cocoapods にデプロイ](https://github.com/michaelhenry/deploy-to-cocoapods-github-action)
- [TencentCloud Serverless 用 GitHub Action](https://github.com/Juliiii/action-scf)
- [npm の（プレ）リリースを公開](https://github.com/epeli/npm-release/)
- [静的サイトを Surge.sh にデプロイ](https://github.com/yavisht/deploy-via-surge.sh-github-action-template)
- [Go プロジェクト向けリリース自動化ツール GoReleaser 用 GitHub Action](https://github.com/goreleaser/goreleaser-action)
- [FTP Deploy Action：GitHub Actions を使って GitHub プロジェクトを FTP サーバーにデプロイ](https://github.com/SamKirkland/FTP-Deploy-Action)
- [記事を Dev.to に公開](https://github.com/tylerauerbeck/publish-to-dev.to-action)
- [Semantic Release 用アクション](https://github.com/cycjimmy/semantic-release-action)
- [コレクションを Ansible Galaxy にデプロイ](https://github.com/artis3n/ansible_galaxy_collection)
- [モジュールを Puppet Forge に公開](https://github.com/barnumbirr/action-forge-publish)
- [Electron アプリをビルドして公開](https://github.com/samuelmeuli/action-electron-builder)
- [Maven パッケージを公開](https://github.com/samuelmeuli/action-maven-publish)
- [Ghost CMS のテーマをビルドしてデプロイ](https://github.com/TryGhost/action-deploy-theme)
- [Ansible ロールを Ansible Galaxy にデプロイ](https://github.com/robertdebock/galaxy-action)
- [1 つ以上の JS モジュールをレジストリに公開](https://github.com/author/action-publish)
- [Slack を使った 2FA でパッケージを公開](https://github.com/erezrokah/2fa-with-slack-action)
- [継続的デプロイパイプラインのワークフロー実行を直列化](https://github.com/softprops/turnstyle)
- [各コミット向け Netlify Deploy GitHub Action](https://github.com/nwtgck/actions-netlify)
- [Ansible Playbook を実行](https://github.com/arillso/action.playbook)
- [Python 配布パッケージを Anaconda Cloud に公開](https://github.com/fcakyon/conda-publish-action)
- [VS Code 拡張機能を Visual Studio Marketplace または Open VSX Registry にデプロイ](https://github.com/HaaLeo/publish-vscode-extension)
- [YouTube 動画を Anchor.fm ポッドキャストにデプロイ](https://github.com/Schrodinger-Hat/youtube-to-anchorfm)
- [AWS CodeDeploy でデプロイ](https://github.com/webfactory/create-aws-codedeploy-deployment)

#### Docker

- [README.md から Docker Hub リポジトリの説明を更新](https://github.com/peter-evans/dockerhub-description)
- [Docker イメージを GitHub Package Registry（GPR）に公開](https://github.com/machine-learning-apps/gpr-docker-publish)
- [Docker Hub 上のリポジトリの「Full description」を更新](https://github.com/mpepping/github-actions/tree/master/docker-hub-metadata)
- [Kaniko を使って任意のレジストリに Docker イメージをビルド・公開](https://github.com/outillage/kaniko-action)
- [Docker イメージのサイズを監視して制限](https://github.com/wemake-services/docker-image-size-limit)
- [Docker イメージを Amazon Elastic Container Registry（ECR）に公開](https://github.com/appleboy/docker-ecr-action)
- [各ステージをキャッシュして Docker イメージをビルド・プッシュし、ビルド時間を短縮](https://github.com/whoan/docker-build-with-cache-action)
- [Docker Buildx をセットアップ](https://github.com/crazy-max/ghaction-docker-buildx)
- [ブランチ名またはタグ名を Docker 互換のイメージタグに変換](https://github.com/ankitvgupta/ref-to-tag-action/)
- [README.md からコンテナリポジトリの説明を更新](https://github.com/marketplace/actions/update-container-description-action) - 対応レジストリ：Docker Hub、Quay、Harbor。

#### Kubernetes

- [Pulumi を使って任意のクラウドまたは Kubernetes にデプロイ](https://github.com/pulumi/actions)
- [kubectl で Kubernetes にデプロイ](https://github.com/steebchen/kubectl)
- [Google Kubernetes Engine（GKE）から Kubeconfig ファイルを取得](https://github.com/machine-learning-apps/gke-kubeconfig)
- [Kustomize で Kubernetes 設定 YAML を管理](https://github.com/karancode/kustomize-github-action)
- [Krucible を使ってテスト用 Kubernetes クラスターを作成](https://github.com/Krucible/krucible-github-action)

#### AWS

- [ディレクトリを AWS S3 バケットに同期・アップロード](https://github.com/jakejarvis/s3-sync-action)
- [既存の関数に Lambda コードをデプロイ](https://github.com/appleboy/lambda-action)

#### Terraform

- [Terraform ドキュメントを生成](https://github.com/Dirrk/terraform-docs) - terraform-docs を使って Terraform モジュールのドキュメントを生成します。
- [Terraform を使って GitHub の管理設定を検証・適用する例](https://github.com/asgharlabs/github-terraform/tree/master/.github/workflows)

### 外部サービス

- [Jenkinsfile を使用](https://github.com/jonico/jenkinsfile-runner-github-actions)
- [Firebase 用 GitHub Action](https://github.com/w9jds/firebase-action)
- [Contentful Migration CLI 用 GitHub Action](https://github.com/Shy/contentful-action)
- [Pixela（a-know/pi）用 GitHub Actions](https://github.com/peaceiris/actions-pixela)
- [Google Cloud Platform（GCP）用 GitHub Action](https://github.com/exelban/gcloud)
- [任意の OpenStack Swift サービスプロバイダーにファイルをアップロード](https://github.com/iksaku/openstack-swift-action)
- [Stack Overflow の投稿を Slack に送信する GitHub Action](https://github.com/logankilpatrick/StackOverflowBot)
- [AWS ロールを引き受ける](https://github.com/nordcloud/aws-assume-role/)
- [JSONbin を使ってカスタムレスポンスを生成](https://github.com/fabasoad/jsonbin-action)

### フロントエンドツール

- [Gradle タスクを実行](https://github.com/MrRamych/gradle-actions)
- [JS ビルドアクション](https://github.com/elstudio/actions-js-build) - Grunt または Gulp のビルドタスクを実行し、ファイルの変更をコミットします。
- [Gatsby CLI 用 GitHub Action](https://github.com/jzweifel/gatsby-cli-github-action)
- [WebPageTest 監査を実行し、結果をコミットコメントとして表示](https://github.com/JCofman/webPagetestAction)
- [Hugo extended 用 GitHub Actions](https://github.com/peaceiris/actions-hugo)
- [OG 画像を生成](https://github.com/BoyWithSilverWings/generate-og-image) - Markdown ファイルからカスタマイズ可能な Open Graph 画像を生成します。
- [mdBook 用 GitHub Actions](https://github.com/peaceiris/actions-mdbook)
- [Mint をセットアップ](https://github.com/fabasoad/setup-mint-action) - Mint（シングルページアプリケーションを記述するプログラミング言語）をセットアップします。
- [Gatsby の AWS S3 デプロイ](https://github.com/jonelantha/gatsby-s3-action) - Gatsby を S3 にデプロイします（CloudFront 対応）。

### 機械学習運用

- [Argo Workflows を送信（クラウド非依存）](https://github.com/machine-learning-apps/actions-argo)
- [Argo Workflows を GKE に送信](https://github.com/machine-learning-apps/gke-argo)
- [Weights & Biases から実験追跡の結果を取得](https://github.com/machine-learning-apps/wandb-action)
- [パラメーター付き Jupyter Notebook を実行](https://github.com/yaananth/run-notebook)
- [Kubeflow Pipeline をコンパイル、デプロイ、実行](https://github.com/NikeNano/kubeflow-github-action)
- [データサイエンスリポジトリを Jupyter Server として自動で Docker 化](https://github.com/jupyterhub/repo2docker-action)
- [GitHub Actions を使った Azure Machine Learning](https://github.com/machine-learning-apps/ml-template-azure)

### ビルド

- [run-cmake](https://github.com/lukka/run-cmake) - [CMake](https://cmake.org) と [Ninja](https://ninja-build.org/) を使って C/C++ ソフトウェアをビルドするマルチプラットフォーム対応 Action です。
- [run-vcpkg](https://github.com/lukka/run-vcpkg) - [vcpkg](https://github.com/microsoft/vcpkg) を使って C/C++ の依存関係をビルド・インストールするマルチプラットフォーム対応 Action です。
- [Go アプリケーションを複数プラットフォーム向けにビルド](https://github.com/izumin5210/action-go-crossbuild)
- [Maven ビルド用の ~/.m2/settings.xml を生成](https://github.com/whelk-io/maven-settings-xml-action)
- [Pascal スクリプトを実行](https://github.com/fabasoad/pascal-action)
- [Brainfuck をセットアップ](https://github.com/fabasoad/setup-brainfuck-action) - Brainfuck インタープリターをセットアップします。
- [Go バイナリを GitHub Release アセットに公開](https://github.com/wangyoucao577/go-release-action)
- [COBOL をセットアップ](https://github.com/fabasoad/setup-cobol-action)
- [Gradle のバージョンを確認](https://github.com/madhead/check-gradle-version) - Gradle のバージョンを最新に保ちます。

### データベース

- [Cassandra スキーマをセットアップ](https://github.com/fabasoad/setup-cassandra-action) - 指定したフォルダー内のスクリプトを Cassandra クラスター上で実行します。

### ネットワーク

- [ZeroTier をセットアップ](https://github.com/zerotier/github-action) - Runner を ZeroTier ネットワークに接続します。

### ローカライズ

- [コード内の誤字や文法の誤りを検出して自動修正](https://github.com/sobolevn/misspell-fixer-action)
- [翻訳](https://github.com/fabasoad/translation-action) - 任意の言語から任意の言語へテキストを翻訳します。

### お楽しみ

- [README に「いいね」ボタン相当の機能を追加](https://github.com/ariary/Readme-Like-Button) - README の一部に対するコミュニティの賛同を可視化します（投票としても使用できます）。

### チートシート

- [GitHub Actions ブランディングのチートシート](https://haya14busa.github.io/github-action-brandings/)

## チュートリアル

- [Up を使った Next.js アプリの継続的デプロイ](https://medium.com/@romanenko/simple-ci-for-next-js-projects-with-apex-up-github-actions-6f0b1b9a5400)
- [Docker ベースの Action を JavaScript/TypeScript に変換](https://httgp.com/converting-github-actions-from-docker-to-javascript/)
- [Swift/iOS プロジェクト向け GitHub Actions CI](https://medium.com/rosberryapps/github-actions-ci-for-swift-projects-c129baceed1a)
- [GitHub Actions の利用方法](https://jeffrafter.com/working-with-github-actions)
- [Rails 開発者向け GitHub Actions](https://www.youtube.com/watch?v=gGUXydw22zw)
- [GitHub Actions アドベントカレンダー](https://www.edwardthomson.com/blog/github_actions_advent_calendar.html)
- [GitHub Actions を使った Laravel のゼロダウンタイムデプロイ](https://atymic.dev/blog/github-actions-laravel-ci-cd/)
- [Pluralsight のカスタム GitHub Actions 構築コース](https://www.pluralsight.com/courses/building-custom-github-actions/)
- [Docker と GitHub Actions を使って Django を DigitalOcean に継続的にデプロイ](https://testdriven.io/blog/deploying-django-to-digitalocean-with-docker-and-github-actions/)
- [Docker を使ってセルフホスト GitHub Actions Runner をデプロイ](https://testdriven.io/blog/github-actions-docker/) - Docker と Docker Swarm を使ってセルフホスト GitHub Actions Runner を DigitalOcean にデプロイします。
- [AWS Spot インスタンスで自動スケールするセルフホスト GitHub Actions Runner をセットアップ](https://040code.github.io/2020/05/25/scaling-selfhosted-action-runners)
- [GitHub Actions の要点をつかむ](https://gist.github.com/br3ndonland/f9c753eb27381f97336aa21b8d932be6)

> 共有したいリソースがあれば、気軽に PR を作成してください。詳細は [contributing.md](contributing.md) をご覧ください。
