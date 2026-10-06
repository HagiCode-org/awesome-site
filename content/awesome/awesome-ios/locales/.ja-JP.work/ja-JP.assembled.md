<div align="center">
    <img src="https://github.com/vsouza/awesome-ios/blob/master/header.png?raw=true" alt="Awesome">
    <br>
    <p align="center">
        <img alt="awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" />
        <a href="https://ko-fi.com/M4M3WPRD"><img width="110" alt="コーヒーをおごる" src="buy_me_a_coffee.png" /></a>
    </p>
</div>




## 貢献とコラボレーション

詳細は [CONTRIBUTING](https://github.com/vsouza/awesome-ios/blob/master/.github/CONTRIBUTING.md) と [CODE-OF-CONDUCT](https://github.com/vsouza/awesome-ios/blob/master/CODE_OF_CONDUCT.md) をご覧ください。

## 目次

- [アナリティクス](#analytics)
- [アプリのルーティング](#app-routing)
- [Apple TV](#apple-tv)
- [App Store](#app-store)
- [アーキテクチャパターン](#architecture-patterns)
- [ARKit](#arkit)
- [認証](#authentication)
- [ブロックチェーン](#blockchain)
- [書籍](#books)
- [キャッシュ](#cache)
- [チャート](#charts)
- [コードインジェクション](#code-injection)
- [コード品質](#code-quality)
    - [リンター](#linter)
- [カラー](#color)
- [コマンドライン](#command-line)
- [並行処理](#concurrency)
- [Core Data](#core-data)
- [コース](#courses)
    - [はじめに](#getting-started)
- [データベース](#database)
- [データ構造 / アルゴリズム](#data-structures--algorithms)
- [日付と時刻](#date--time)
- [デバッグ](#debugging)
- [依存性注入](#dependency-injection)
- [依存関係 / パッケージマネージャー](#dependency--package-manager)
- [デプロイ / 配布](#deployment--distribution)
- [EventBus](#eventbus)
- [ファイル](#files)
- [関数型プログラミング](#functional-programming)
- [ゲーム](#games)
- [GCD](#gcd)
- [ジェスチャー](#gesture)
- [グラフィックス](#graphics)
- [ハードウェア](#hardware)
    - [Bluetooth](#bluetooth)
    - [カメラ](#camera)
    - [Force Touch](#force-touch)
    - [iBeacon](#ibeacon)
    - [位置情報](#location)
    - [その他のハードウェア](#other-hardware)
- [レイアウト](#layout)
- [ローカライズ](#localization)
- [ロギング](#logging)
- [機械学習](#machine-learning)
- [地図](#maps)
- [数学](#math)
- [メディア](#media)
    - [オーディオ](#audio)
    - [GIF](#gif)
    - [画像](#image)
    - [メディア処理](#media-processing)
    - [PDF](#pdf)
    - [ストリーミング](#streaming)
    - [動画](#video)
- [メッセージング](#messaging)
- [ネットワーキング](#networking)
- [ニュースレター](#newsletters)
- [通知](#notifications)
    - [プッシュ通知](#push-notifications)
    - [プッシュ通知プロバイダー](#push-notification-providers)
- [Objective-C ランタイム](#objective-c-runtime)
- [最適化](#optimization)
- [その他の Awesome リスト](#other-awesome-lists)
- [パース](#parsing)
    - [CSV](#csv)
    - [JSON](#json)
    - [XML & HTML](#xml--html)
    - [その他のパース](#other-parsing)
- [Passbook](#passbook)
- [決済](#payments)
- [権限](#permissions)
- [ポッドキャスト](#podcasts)
- [プロジェクトのセットアップ](#project-setup)
- [プロトタイピング](#prototyping)
- [ラピッド開発](#rapid-development)
- [リアクティブプログラミング](#reactive-programming)
    - [React ライク](#react-like)
- [リファレンス](#reference)
- [リフレクション](#reflection)
- [正規表現](#regex)
- [SDK](#sdk)
    - [公式](#official)
    - [非公式](#unofficial)
- [セキュリティ](#security)
    - [暗号化](#encryption)
    - [キーチェーン](#keychain)
- [サーバー](#server)
- [スタイルガイド](#style-guides)
- [テスト](#testing)
    - [TDD / BDD](#tdd--bdd)
    - [A/B テスト](#ab-testing)
    - [UI テスト](#ui-testing)
    - [その他のテスト](#other-testing)
- [テキスト](#text)
    - [フォント](#font)
- [UI](#ui)
    - [アクティビティインジケーター](#activity-indicator)
    - [アラートとアクションシート](#alert--action-sheet)
    - [アニメーション](#animation)
    - [トランジション](#transition)
    - [バッジ](#badge)
    - [ボタン](#button)
    - [カレンダー](#calendar)
    - [カード](#cards)
    - [フォームと設定](#form--settings)
    - [キーボード](#keyboard)
    - [ラベル](#label)
    - [ログイン](#login)
    - [メニュー](#menu)
    - [ナビゲーションバー](#navigation-bar)
    - [PickerView](#pickerview)
    - [ポップアップ](#popup)
    - [プログレスビュー](#progress-view)
    - [プルして更新](#pull-to-refresh)
    - [星評価](#rating-stars)
    - [ScrollView](#scrollview)
    - [セグメンテッドコントロール](#segmented-control)
    - [スライダー](#slider)
    - [スプラッシュビュー](#splash-view)
    - [ステータスバー](#status-bar)
    - [ステッパー](#stepper)
    - [スイッチ](#switch)
    - [タブバー](#tab-bar)
    - [テーブルビュー / コレクションビュー](#table-view--collection-view)
      - [テーブルビュー](#table-view)
      - [コレクションビュー](#collection-view)
      - [展開可能なセル](#expandable-cell)
      - [ヘッダー](#header)
      - [プレースホルダー](#placeholder)
      - [コレクションビューのレイアウト](#collection-view-layout)
    - [タグ](#tag)
    - [TextField と TextView](#textfield--textview)
    - [UIPageControl](#uipagecontrol)
    - [Web ビュー](#web-view)
- [ユーティリティ](#utility)
- [ユーザー同意](#user-consent)
- [VR](#vr)
- [ウォークスルー / イントロ / チュートリアル](#walkthrough--intro--tutorial)
- [Web サイト](#websites)
- [WebSocket](#websocket)
- [ツール](#tools)
- [チュートリアルと基調講演](#tutorials-and-keynotes)
- [UI テンプレート](#ui-templates)
- [Xcode](#xcode)
    - [拡張機能（Xcode 8 以降）](#extensions-xcode-8)
    - [テーマ](#themes)
    - [その他の Xcode](#other-xcode)


## アナリティクス

 *アプリのためのアナリティクスプラットフォーム、SDK、エラートラッキング、リアルタイムの回答*

- [Answers by Fabric](https://get.fabric.io) - Answers は、アプリを利用する人々の体験についてリアルタイムのインサイトを提供します。
- [Aptabase](https://aptabase.com/for-swift) - Swift アプリ向けの、オープンソースでプライバシーを最優先したシンプルなアナリティクス。
- [Bugsnag](https://www.bugsnag.com/platforms/ios-crash-reporting) - 無料プランのあるエラートラッキング。エラーレポートにはデバイス、リリース、ユーザーに関するデータが含まれ、任意のデータも添付できます。
- [Countly](https://count.ly) - iOS と Android 向けの、オープンソースのモバイル & Web アナリティクス、クラッシュレポート、プッシュ通知プラットフォーム。
- [devtodev](https://www.devtodev.com/) - プロジェクトを改善し、プロダクト開発の時間を節約する包括的なアナリティクスサービス。
- [Embrace](http://embrace.io) - OpenTelemetry をベースにしたモバイルオブザーバビリティで、ユーザー中心の信頼性の高いアプリを実現します。
- [Emerge Tools](https://www.emergetools.com) - プルリクエストごとにアプリサイズとパフォーマンスの劣化を防ぎ、改善方法に関する自動インサイトを得られます。
- [Instabug](https://instabug.com) - アプリ内フィードバック、バグおよびクラッシュレポート。ユーザー操作の手順、動画録画、画面への注釈、ネットワークリクエストのログによってバグをより速く修正できます。
- [Matomo](https://github.com/matomo-org/matomo-sdk-ios) - MatomoTracker は、アプリのアナリティクスを Matomo サーバーへ送信するための iOS、tvOS、macOS 向け SDK です。
- [Measure](https://measure.sh/) - エラートラッキング、パフォーマンストレーシング、完全なセッションタイムラインを備えた、オープンソースでセルフホスト可能なモバイルアプリ監視ツール。コンテキストをつなぎ合わせる時間を減らし、問題をより速く修正できます。
- [Mixpanel](https://mixpanel.com/) - 高度なアナリティクスプラットフォーム。
- [MOCA Analytics](https://www.mocaplatform.com/features) - 有料のクロスプラットフォーム向けアナリティクスバックエンド。
- [Segment](https://github.com/segmentio/analytics-ios) - あらゆる iOS アプリケーションに手間なくアナリティクスを統合する方法。
- [Sentry](https://sentry.io/) - Sentry はセルフホスト型およびクラウドベースのエラー監視を提供し、あらゆるソフトウェアチームがエラーをリアルタイムで発見、トリアージ、優先順位付けできるよう支援します。
- [Shake](https://www.shakebugs.com/) - アプリ内フィードバックとバグ報告のツール。詳細なデバイスデータ、再現手順、動画録画、ブラックボックスデータ、ネットワークリクエスト、カスタムログにより、アプリのバグを最大 50 倍速く修正できます。

**[トップに戻る](#contributing-and-collaborating)**

## アプリのルーティング

  *洗練された URL ルーティング、ナビゲーションフレームワーク、ディープリンクなど*

- [ApplicationCoordinator](https://github.com/AndreyPanov/ApplicationCoordinator) - Coordinator は、ナビゲーションフローを処理し、次のチェーンへ切り替えた後にフローの処理を次の Coordinator へ引き継ぐオブジェクトです。
- [Appz](https://github.com/SwiftKitz/Appz) - 外部アプリケーションを簡単に起動してディープリンクでき、インストールされていない場合は Web にフォールバックします。
- [Composable Navigator](https://github.com/Bahn-X/swift-composable-navigator) - コンポジション、テスト、使いやすさを念頭に置いて、ディープリンク可能な SwiftUI アプリケーションを構築するためのオープンソースライブラリ
- [Crossroad](https://github.com/giginet/Crossroad) - Crossroad はカスタム URL スキームの処理に特化した URL ルーターです。これを使えば、複数の URL スキームをルーティングし、引数やパラメーターを簡単に取得できます。
- [DeepLinkKit](https://github.com/button/DeepLinkKit) - ディープリンクを処理するための、見事なルートマッチングとブロックベースの方法。
- [JLRoutes](https://github.com/joeldev/JLRoutes) - シンプルなブロックベースの API を備えた iOS 向け URL ルーティングライブラリ。
- [Linker](https://github.com/MaksimKurpa/Linker) - iOS で内部および外部のディープリンクを処理する軽量な方法。
- [Marshroute](https://github.com/avito-tech/Marshroute) - Marshroute は、ルーターをシンプルでありながら非常に強力にするための iOS ライブラリです。
- [RouteComposer](https://github.com/ekazaev/route-composer) - ビューコントローラーの構成、ルーティング、ディープリンクのタスクを処理するのに役立つライブラリ。
- [RxFlow](https://github.com/RxSwiftCommunity/RxFlow) - Reactive Flow Coordinator パターンに基づく iOS アプリケーション向けナビゲーションフレームワーク。
- [SwiftCurrent](https://github.com/wwt/SwiftCurrent) - 複雑なワークフローを管理するためのライブラリ。
- [SwiftRouter](https://github.com/skyline75489/SwiftRouter) - iOS 向けの URL ルーター。
- [URLNavigator](https://github.com/devxoul/URLNavigator) - Swift 向けの洗練された URL ルーティング
- [WAAppRouting](https://github.com/Wasappli/WAAppRouting) - 正しく実装された iOS ルーティング。URL の認識と、解析済みパラメーターによるコントローラーの表示の両方を処理します。すべてが 1 行で完結し、コントローラースタックは自動的に保持されます！

**[トップに戻る](#contributing-and-collaborating)**

## App Store

*Apple のガイドラインとバージョン通知ライブラリ*

- [Apple Review Guidelines](https://developer.apple.com/app-store/review/#common-app-rejections) - アプリがリジェクトされる原因となる最も一般的な問題のいくつかを取り上げています。
- [Free App Store Optimization Tool](https://www.mobileaction.co) - キーワードや競合の観点から、App Store での露出度を追跡できます。

**[トップに戻る](#contributing-and-collaborating)**

## Apple TV

*tvOS のビューコントローラー、ラッパー、テンプレートマネージャー、動画プレーヤー。*

- [ParallaxView](https://github.com/PGSSoft/ParallaxView) - アプリケーションに視差効果を追加する iOS のコントロールと拡張機能。
- [TvOSPinKeyboard](https://github.com/zattoo/TvOSPinKeyboard) - tvOS 向けの PIN キーボード。
- [XCDYouTubeKit](https://github.com/0xced/XCDYouTubeKit) - iOS、tvOS、macOS 向けの YouTube 動画プレーヤー。

**[トップに戻る](#contributing-and-collaborating)**

## アーキテクチャパターン

*Clean Architecture、VIPER、MVVM、Reactive……武器を選びましょう。*

- [Clean Architecture for SwiftUI + Combine](https://github.com/nalexn/clean-architecture-swiftui) - Clean Architecture を用いた SwiftUI アプリの本番向け構成を紹介するデモプロジェクト。
- [CleanArchitectureRxSwift](https://github.com/sergdort/CleanArchitectureRxSwift) - RxSwift を使用した iOS アプリの Clean Architecture の例。
- [ios-architecture](https://github.com/tailec/ios-architecture) - iOS アーキテクチャのコレクション - MVC、MVVM、MVVM+RxSwift、VIPER、RIBs をはじめ多数。
- [iOS-Viper-Architecture](https://github.com/MindorksOpenSource/iOS-Viper-Architecture) - このリポジトリには、Alamofire、AlamofireImage、PKHUD、CoreData などのライブラリやフレームワークを使って iOS で VIPER アーキテクチャを実装した、詳細なサンプルアプリが含まれています。
- [Reactant](https://github.com/Brightify/Reactant) - Reactant は iOS 向けのリアクティブアーキテクチャです。
- [Spin](https://github.com/Spinners/Spin.Swift) - RxSwift、ReactiveSwift、Combine 向けのフィードバックループシステムの汎用実装
- [SwiftyVIPER](https://github.com/codytwinton/SwiftyVIPER) - VIPER アーキテクチャの実装をはるかに簡単かつクリーンにします。
- [The Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture) - The Composable Architecture は、コンポジション、テスト、使いやすさを念頭に置き、一貫性があり理解しやすい方法でアプリケーションを構築するためのライブラリです。
- [Viperit](https://github.com/ferranabello/Viperit) - iOS 向けの VIPER フレームワーク。VIPER アーキテクチャに沿ったアプリを簡単に開発できます。Swift で記述・テストされています。

**[トップに戻る](#contributing-and-collaborating)**

## ARKit

*比類のない拡張現実体験の構築に役立つライブラリとツール*

- [ARKit Virtual Objects](https://github.com/ignacio-chiazzo/ARKit) - 拡張現実の中に仮想オブジェクトを配置します。
- [ARKit-CoreLocation](https://github.com/ProjectDent/ARKit-CoreLocation) - AR の高い精度と GPS データのスケールを組み合わせます。
- [ARVideoKit](https://github.com/AFathi/ARVideoKit) - ARKit の動画、写真、Live Photos、GIF を録画・キャプチャします。
- [SmileToUnlock](https://github.com/rsrbk/SmileToUnlock) - このライブラリは ARKit のフェイストラッキングを使ってユーザーの笑顔を捉えます。

**[トップに戻る](#contributing-and-collaborating)**

## 認証

*OAuth および OAuth2 ライブラリ、ソーシャルログイン、CAPTCHA ツール。*

- [Heimdallr.swift](https://github.com/trivago/Heimdallr.swift) - Swift で書かれた、iOS 向けの使いやすい OAuth 2 ライブラリ。
- [OAuth2](https://github.com/p2/OAuth2) - Swift で書かれた、macOS と iOS 向けの OAuth2 フレームワーク。
- [OAuthSwift](https://github.com/OAuthSwift/OAuthSwift) - Swift ベースの iOS 向け OAuth ライブラリ
- [ReCaptcha](https://github.com/fjcaetano/ReCaptcha) - iOS 向けの（不）可視 ReCaptcha。
- [SwiftyOAuth](https://github.com/delba/SwiftyOAuth) - プロバイダーのセットを組み込んだ、iOS 向けのシンプルな OAuth ライブラリ。

**[トップに戻る](#contributing-and-collaborating)**

## ブロックチェーン

*スマートコントラクトとやり取りするためのツール。Bitcoin プロトコルの実装と、暗号通貨を扱うためのフレームワーク。*

- [BitcoinKit](https://github.com/yenom/BitcoinKit) - Swift 向けの Bitcoin プロトコルツールキット。BitcoinKit は Bitcoin プロトコルを Swift で実装しています。Swift で書かれた Bitcoin SPV プロトコルの実装です。
- [EthereumKit](https://github.com/yuzushioh/EthereumKit) - EthereumKit は、Ethereum と簡単にやり取りするための、無料でオープンソースの Swift フレームワークです。
- [Web3.swift](https://github.com/Boilertalk/Web3.swift) - Ethereum ブロックチェーンとやり取りするための Web3 ライブラリ。
- [web3swift](https://github.com/web3swift-team/web3swift) - Swift による洗練された Web3js の機能。ネイティブな ABI 解析とスマートコントラクトとのやり取りに対応。

**[トップに戻る](#contributing-and-collaborating)**

## 書籍

*最もおすすめの書籍*

- [Advanced Swift（Chris Eidhof、Ole Begemann、Airspeed Velocity 著）](https://www.objc.io/books/advanced-swift/)
- [Anyone Can Create an App（Wendy L. Wise 著）](https://www.manning.com/books/anyone-can-create-an-app)
- [Classic Computer Science Problems in Swift](https://www.manning.com/books/classic-computer-science-problems-in-swift)
- [Cocoa Design Patterns](https://www.amazon.com/Cocoa-Design-Patterns-Erik-Buck/dp/0321535022)
- [Core Data（Florian Kugler、Daniel Eggert 著）](https://www.objc.io/books/core-data/)
- [Functional Swift（Chris Eidhof、Florian Kugler、Wouter Swierstra 著）](https://www.objc.io/books/functional-swift/)
- [Hello Swift!（Tanmay Bakshi 著、Lynn Beighley 協力）](https://www.manning.com/books/hello-swift)
- [iOS Development with Swift（Craig Grummitt 著）](https://www.manning.com/books/ios-development-with-swift)
- [iOS Programming: The Big Nerd Ranch Guide（Christian Keur、Aaron Hillegass 著）](https://www.bignerdranch.com/books/ios-programming-the-big-nerd-ranch-guide-seventh-edition/)
- [Programming in Objective-C（Stephen G. Kochan 著）](https://www.amazon.com/Programming-Objective-C-6th-Developers-Library/dp/0321967607)
- [Swift in Depth](https://www.manning.com/books/swift-in-depth)
- [The Complete Friday Q & A: Volume 1](https://www.mikeash.com/book.html)
- [The Swift Programming Language（Apple 著）](https://books.apple.com/us/book/swift-programming-language/id881256329)

**[トップに戻る](#contributing-and-collaborating)**

## キャッシュ

*スレッドセーフ、オフライン対応、高性能なキャッシュのライブラリとフレームワーク。*

- [Awesome Cache](https://github.com/aschuch/AwesomeCache) - 快適なディスクキャッシュ（Swift で記述）。
- [Cache](https://github.com/hyperoslo/Cache) - キャッシュ、ただそれだけ。
- [Disk](https://github.com/saoudrizwan/Disk) - 構造体、画像、データを簡単に永続化できる、iOS 向けの快適なフレームワーク。
- [HanekeSwift](https://github.com/Haneke/HanekeSwift) - Swift で書かれた iOS 向けの軽量な汎用キャッシュで、画像には特に力を入れています。
- [mattress](https://github.com/buzzfeed/mattress) - Web コンテンツのための iOS オフラインキャッシュ。
- [PINCache](https://github.com/pinterest/PINCache) - iOS と macOS 向けの、高速でデッドロックしない並列オブジェクトキャッシュ。
- [RocketData](https://github.com/plivesey/RocketData) - イミュータブルなモデルのためのキャッシュと一貫性のソリューション。
- [SPTPersistentCache](https://github.com/spotify/SPTPersistentCache) - 誰もが iOS アプリのライフサイクルのどこかでキャッシュを実装しようとしますが、これは私たちによる実装です。Spotify 製。
- [Track](https://github.com/maquannene/Track) - Track は Swift で書かれたスレッドセーフなキャッシュです。LRU をサポートする DiskCache と MemoryCache で構成されています。
- [YYCache](https://github.com/ibireme/YYCache) - iOS 向けの高性能キャッシュフレームワーク。

**[トップに戻る](#contributing-and-collaborating)**

## チャート

*動的で見事なデータ可視化の作成に最適な、美しく使いやすくカスタマイズ可能な iOS チャートライブラリを探してみましょう。*

- [ANDLineChartView](https://github.com/anaglik/ANDLineChartView) - ANDLineChartView は、アニメーション付きの折れ線グラフを表示するための、使いやすいビューベースのクラスです。
- [Charts](https://github.com/danielgindi/Charts) - 強力なチャート/グラフフレームワークで、[MPAndroidChart](https://github.com/PhilJay/MPAndroidChart) の iOS 版に相当します。
- [core-plot](https://github.com/core-plot/core-plot) - 高度にカスタマイズ可能で、多くの種類のプロットを描画できる 2D プロットライブラリ。
- [EatFit](https://github.com/Yalantis/EatFit) - Eat fit は、Google Fit に触発された、魅力的なデータ表現のためのコンポーネントです。
- [EChart](https://github.com/zhuhuihuihui/EChart) - iOS/iPhone/iPad 向けのチャート、グラフ。イベント処理とアニメーションをサポートしています。
- [FSInteractiveMap](https://github.com/ArthurGuibert/FSInteractiveMap) - iOS でベクターマップを可視化して操作するためのチャートライブラリ。iOS 版の Geochart のようなものです。
- [FSLineChart](https://github.com/ArthurGuibert/FSLineChart) - iOS 向けの折れ線グラフライブラリ。
- [JBChartView](https://github.com/Jawbone/JBChartView) - 折れ線グラフと棒グラフの両方に対応した iOS ベースのチャートライブラリ。
- [JYRadarChart](https://github.com/johnnywjy/JYRadarChart) - iOS 向けのオープンソースのレーダーチャート実装。
- [MagicPie](https://github.com/AlexandrGraschenkov/MagicPie) - 素晴らしいレイヤーベースの円グラフ。驚くほど高速で、完全にカスタマイズ可能です。MagicPie では見事なアニメーションも利用できます。
- [PieCharts](https://github.com/i-schuetz/PieCharts) - iOS 向けの、使いやすく高度にカスタマイズ可能な円グラフライブラリ。
- [PNChart](https://github.com/kevinzhow/PNChart) - iOS 向けの Piner と CoinsMan で使用されている、シンプルで美しいチャートライブラリ。
- [Scrollable-GraphView](https://github.com/philackm/ScrollableGraphView) - シンプルな離散データセットを可視化するための、iOS 向けのアダプティブでスクロール可能なグラフビュー。Swift で記述。
- [SwiftChart](https://github.com/gpbl/SwiftChart) - iOS 向けの折れ線グラフおよびエリアチャートのライブラリ。
- [TEAChart](https://github.com/xhacker/TEAChart) - シンプルで直感的な iOS チャートライブラリ。コントリビューショングラフ、時計チャート、棒グラフ。
- [TKRadarChart](https://github.com/TBXark/TKRadarChart) - Swift で書かれたカスタマイズ可能なレーダーチャート。
- [TWRCharts](https://github.com/chasseurmic/TWRCharts) - ChartJS の iOS ラッパー。ネイティブな Obj-C コードの力を活用して、アニメーション付きのチャートを簡単に作成できます。

**[トップに戻る](#contributing-and-collaborating)**

## コードインジェクション

 *これらのツールで開発時間を短縮しましょう*

- [Inject](https://github.com/krzysztofzablocki/Inject) - Swift アプリケーションのためのホットリロード！
- [injectionforxcode](https://github.com/johnno1962/injectionforxcode) - Swift を含むコードインジェクション。
- [Vaccine](https://github.com/zenangst/Vaccine) - Vaccine は、アプリを「再コンパイル病」に対して免疫にすることを目指すフレームワークです。

**[トップに戻る](#contributing-and-collaborating)**

## コード品質

 *品質は常に重要です。コードチェッカー、メモリの見張り役、シンタックスシュガーなど。*

- [Aardvark](https://github.com/square/Aardvark) - Aardvark は、対処しやすいバグレポートをきわめて簡単に作成できるライブラリです。
- [Bootstrap](https://github.com/krzysztofzablocki/Bootstrap) - 高品質なコーディングを目指した iOS プロジェクトのブートストラップ。
- [Bugsee](https://www.bugsee.com) - 動画、ログ、ネットワークトラフィック、トレースを含むアプリ内バグおよびクラッシュレポート。
- [FBRetainCycleDetector](https://github.com/facebook/FBRetainCycleDetector) - 実行時の循環参照の検出を支援する iOS ライブラリ。
- [HeapInspector-for-iOS](https://github.com/tapwork/HeapInspector-for-iOS) - Instruments を使わずに、iOS アプリのメモリの問題やリークを見つけます。
- [MLeaksFinder](https://github.com/Tencent/MLeaksFinder) - 開発時に iOS アプリのメモリリークを見つけます。
- [PSTModernizer](https://github.com/PSPDFKit-labs/PSTModernizer) - 問題を修正し不足しているメソッドを追加することで、古いバージョンの iOS のサポートを容易にします。
- [spacecommander](https://github.com/square/spacecommander) - 特に意識しなくても、チームで完全にフォーマットされた Objective-C コードをコミットできます。
- [SwiftCop](https://github.com/andresinaka/SwiftCop) -  SwiftCop は完全に Swift で書かれたバリデーションライブラリで、Ruby On Rails の Active Record バリデーションの明快さに触発されています。
- [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) - Swift コードを再フォーマットするためのコードライブラリおよびコマンドラインのフォーマットツール。
- [Tailor](https://github.com/sleekbyte/tailor) - よりクリーンなコードを書き、バグを避けるのに役立つ、Swift 向けのクロスプラットフォームな静的解析ツール。

**[トップに戻る](#contributing-and-collaborating)**

### リンター

*スタイルと規約を徹底するための静的コード解析ツール。*

- [AnyLint](https://github.com/Flinesoft/AnyLint) - Swift と正規表現の力を組み合わせて、あらゆるものを lint できます。
- [IBLinter](https://github.com/IBDecodable/IBLinter) - Interface Builder 向けのリンターツール。
- [OCLint](https://github.com/oclint/oclint) - 品質を向上させ欠陥を減らすための静的コード解析ツール。
- [Swiftlint](https://github.com/realm/SwiftLint) - Swift のスタイルと規約を徹底するためのツール。

**[トップに戻る](#contributing-and-collaborating)**

## カラー

*16 進カラーの拡張、テーマ設定、カラーピッカー、その他の素晴らしいカラーツール。*

- [BCColor](https://github.com/boycechang/BCColor) - 軽量ながら強力なカラーキット（Swift）。
- [ChromaColorPicker](https://github.com/joncardasis/ChromaColorPicker) - Swift で構築された直感的な iOS カラーピッカー。
- [Colours](https://github.com/bennyguitar/Colours) - iOS/macOS 開発をより楽にするための、美しい定義済みカラーのセットとカラーメソッドのセット。
- [DynamicColor](https://github.com/yannickl/DynamicColor) - Swift で色を簡単に操作するための、もう一つの拡張機能。
- [FlatUIColors](https://github.com/brynbellomy/FlatUIColors) - Swift で書かれたフラット UI カラーパレットのヘルパー。
- [Gestalt](https://github.com/regexident/Gestalt) - アニメーション付きのテーマ切り替えをサポートする、控えめで軽量な iOS アプリのテーマ設定ライブラリ。
- [Hue](https://github.com/zenangst/Hue) - Hue は、あなたが必要とするであろうすべてを備えたオールインワンのカラーユーティリティです。
- [PrettyColors](https://github.com/jdhealy/PrettyColors) - ANSI エスケープコードを使ってターミナルのテキストにスタイルと色を付けます。ECMA Standard 48 に準拠しています。
- [RandomColorSwift](https://github.com/onevcat/RandomColorSwift) - Swift 向けの魅力的なカラージェネレーター。`randomColor.js` から移植されました。
- [SheetyColors](https://github.com/chrs1885/SheetyColors) - アクションシート形式の iOS 向けカラーピッカー。
- [SwiftHEXColors](https://github.com/thii/SwiftHEXColors) - UIColor の拡張機能としての HEX カラー処理。
- [UIColor-Hex-Swift](https://github.com/yeahdongcn/UIColor-Hex-Swift) - RGBA の 16 進文字列から autorelease されたカラーを作成するための便利なメソッド。

**[トップに戻る](#contributing-and-collaborating)**

## コマンドライン

*コマンドラインアプリケーションの作成に役立つ、スマートで美しく洗練されたツール。*

- [ColorizeSwift](https://github.com/mtynior/ColorizeSwift) - Swift 向けのターミナル文字列スタイリング。
- [Commander](https://github.com/kylef/Commander) - Swift で美しいコマンドラインインターフェースを構築します。
- [Guaka](https://github.com/nsomar/Guaka) - Swift 向けの最もスマートで最も美しい（POSIX 準拠の）コマンドラインフレームワーク。
- [Linenoise](https://github.com/andybest/linenoise-swift) - readline を置き換える純粋な Swift 実装
- [nef](https://github.com/bow-swift/nef) - Swift Playgrounds 形式のドキュメント作成を容易にするコマンドラインツール。
- [Progress](https://github.com/jkandzi/Progress.swift) - ループに美しいプログレスバーを追加します。
- [SourceDocs](https://github.com/eneko/SourceDocs) - インラインのソースコードコメントから Markdown ドキュメントを生成するコマンドラインツール。
- [Swift Argument Parser](https://github.com/apple/swift-argument-parser) - Swift 向けの、わかりやすく型安全な引数解析
- [SwiftCLI](https://github.com/jakeheis/SwiftCLI) - Swift で CLI を開発するための強力なフレームワーク
- [Swiftline](https://github.com/nsomar/Swiftline) - Swiftline は、コマンドラインアプリケーションの作成に役立つツールのセットです。
- [SwiftShell](https://github.com/kareman/SwiftShell) - シェルスクリプトとシェルコマンドの実行のための Swift フレームワーク。
- [SwiftyTextTable](https://github.com/scottrhoyt/SwiftyTextTable) - テキストテーブルを生成するための軽量ライブラリ。

**[トップに戻る](#contributing-and-collaborating)**

## 並行処理

*Swift で書かれた、ジョブスケジューラー、コルーチン、非同期処理、型安全なスレッドのライブラリとフレームワーク*

- [AsyncNinja](https://github.com/AsyncNinja/AsyncNinja) - 並行処理とリアクティブプログラミングのプリミティブの完全なセット。
- [AsyncQueue](https://github.com/dfed/swift-async-queue) - 同期コンテキストから非同期コンテキストへ順序付けられたタスクを送信できるキューのライブラリ。
- [Concurrent](https://github.com/typelift/Concurrent) - 関数型の並行処理プリミティブ。
- [Queuer](https://github.com/FabrizioBrancati/Queuer) - OperationQueue と Dispatch（別名 GCD）の上に構築されたキューマネージャー。
- [SwiftQueue](https://github.com/lucas34/SwiftQueue) - 並行実行、失敗時のリトライ、永続化、繰り返し、遅延などを備えたジョブスケジューラー。
- [Venice](https://github.com/Zewo/Venice) - Swift 向けの CSP（コルーチン、チャネル、Select）。

**[トップに戻る](#contributing-and-collaborating)**

## Core Data

*Core Data のフレームワーク、ラッパー、ジェネレーター、ボイラープレート。*

- [AERecord](https://github.com/tadija/AERecord) - Swift で書かれた超素晴らしい Core Data ラッパー。
- [CloudCore](https://github.com/deeje/CloudCore) - 堅牢な CloudKit 同期：オフライン編集、リレーションシップ、共有およびパブリックデータベース、フィールドレベルの差分など。
- [CoreStore](https://github.com/JohnEstropia/CoreStore) - インクリメンタルマイグレーション、フェッチ、監視などのための強力な Core Data フレームワーク。
- [Ensembles](https://github.com/drewmccormack/ensembles) - Core Data 向けの同期フレームワーク。
- [Graph](https://github.com/CosmicMind/Graph) - Swift で CoreData を扱うための、洗練されたデータ駆動型フレームワーク。
- [JSQCoreDataKit](https://github.com/jessesquires/JSQCoreDataKit) - より Swift らしい Core Data スタック。
- [MagicalRecord](https://github.com/magicalpanda/MagicalRecord) - Core Data のための、超素晴らしく簡単なフェッチ。
- [Mogenerator](https://github.com/rentzsch/mogenerator) - Core Data のコードの自動生成。
- [PredicateFlow](https://github.com/andreadelfante/PredicateFlow) - 見事で強く型付けされた読みやすい NSPredicate を記述できます。属性名や述語の演算を推測したり、誤った型の引数を書いたりすることなく、流れるように NSPredicate を書けます。
- [PrediKit](https://github.com/KrakenDev/PrediKit) - iOS、macOS、tvOS、watchOS 向けの NSPredicate DSL。SnapKit に触発され、Swift で愛情を込めて書かれています。
- [Skopelos](https://github.com/albertodebortoli/Skopelos) - Core Data 上の Active Record の、ミニマルでスレッドセーフ、ボイラープレート不要で非常に使いやすいバージョン。Core Data を扱うのに必要なものがすべて揃っています。
- [Sync](https://github.com/3lvis/Sync) - Core Data へのモダンな Swift の JSON 同期。

**[トップに戻る](#contributing-and-collaborating)**
