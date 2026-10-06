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

## コース

*iOS 開発の旅を始めるためのオンラインコース、チュートリアル、学習リソース。*

### はじめに

*コース、チュートリアル、ガイド、ブートキャンプ*

- [100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui) - iOS 15 と Swift 5.5 に対応した、無料の動画とチュートリアルのコレクション。
- [Apple - Object-Oriented Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/OOP_ObjC/Introduction/Introduction.html)
- [ARStarter](https://github.com/codePrincess/ARStarter) - ARKit を始めよう - 初心者向けのちょっとした演習。
- [Classpert - トップクラスの e ラーニングプラットフォームが提供する iOS 開発コース 500 件（無料・有料）のリスト](https://classpert.com/ios-development) - Udacity、Pluralsight、Coursera、Edx、Treehouse、Skillshare のコースを網羅したカタログ。
- [iOS & Swift - The Complete iOS App Development Bootcamp](https://www.udemy.com/course/ios-13-app-development-bootcamp/)
- [Ray Wenderlich](https://www.raywenderlich.com/2690-learn-to-code-ios-apps-1-welcome-to-programming) - iOS アプリのコーディングを学びましょう。
- [Stanford - Developing apps for iOS](https://cs193p.stanford.edu/) - スタンフォード大学の CS193p - Developing Apps for iOS。
- [Udacity - Intro to iOS App Development with Swift](https://www.udacity.com/course/intro-to-ios-app-development-with-swift--ud585) - Udacity の無料コース。初めての iPhone アプリを作りましょう。

**[トップに戻る](#contributing-and-collaborating)**

## データベース

*ラッパー、クライアント、Parse の代替、そして一時的・永続的なデータを扱うための安全なツール。*

- [Couchbase Mobile](https://www.couchbase.com/products/mobile/) - クラウド同期を備えた、モバイル向けの Couchbase ドキュメントストア。
- [Default](https://github.com/Nirma/Default) - UserDefaults へのモダンなインターフェースと Codable のサポート。
- [Defaults](https://github.com/sindresorhus/Defaults) - Swift らしくモダンな UserDefaults。
- [DuckDB](https://github.com/duckdb/duckdb-swift) - DuckDB は高性能な分析用データベースシステムです。
- [FCModel](https://github.com/marcoarment/FCModel) - SQL に直接アクセスしたい人のための、Core Data の代替。
- [Fluent](https://github.com/vapor/fluent) - Swift でデータベースを扱うためのシンプルな ActiveRecord 実装。
- [FMDB](https://github.com/ccgus/fmdb) - SQLite の Cocoa / Objective-C ラッパー。
- [GRDB.swift](https://github.com/groue/GRDB.swift) - WAL モードをサポートする、Swift 向けの多用途な SQLite ツールキット。
- [IceCream](https://github.com/caiyue1993/IceCream) - Realm データベースを CloudKit と同期します。
- [MMKV](https://github.com/Tencent/MMKV) - WeChat が開発した、効率的で小さなモバイル向けキーバリューストレージフレームワーク。iOS、Android、macOS、Windows で動作します。
- [MongoKitten](https://github.com/OpenKitten/MongoKitten) - 組み込みデータベースをサポートする、純粋な Swift による MongoDB クライアント実装。
- [MySQL](https://github.com/PerfectlySoft/Perfect-MySQL) - MySQL クライアントライブラリの Swift ラッパーで、MySQL サーバーへのアクセスを可能にします。
- [Nora](https://github.com/SD10/Nora) - Nora は、FirebaseDatabase と FirebaseStorage を扱うための Firebase 抽象化レイヤーです。
- [ObjectBox](https://github.com/objectbox/objectbox-swift) - ObjectBox は、超高速で軽量なオブジェクト永続化フレームワークです。
- [OHMySQL](https://github.com/oleghnidets/OHMySQL) - MySQL C API の Objective-C ラッパー。
- [PersistenceKit](https://github.com/Teknasyon-Teknoloji/PersistenceKit) - 数行のコードで、Codable オブジェクトをさまざまな永続化レイヤーに保存・取得できます。
- [PersistentStorageSerializable](https://github.com/IvanRublev/PersistentStorageSerializable) - ユーザーの設定（アプリの設定）を、システムの User Defaults またはディスク上の Property List ファイルで簡単にシリアライズできるようにする Swift ライブラリ。
- [Prephirences](https://github.com/phimage/Prephirences) - Prephirences は、アプリケーションの設定、構成、アプリの状態を管理するための便利なプロトコルとメソッドを提供する Swift ライブラリです。
- [Realm](https://github.com/realm/realm-cocoa) - CoreData と SQLite の代替：シンプル、モダン、高速。
- [RealmGeoQueries](https://github.com/mhergon/RealmGeoQueries) - RealmGeoQueries は Realm Cocoa での空間クエリを簡素化します。公式の機能がないため、このライブラリが近接検索の手段を提供します。
- [SecureDefaults](https://github.com/vpeschenkov/SecureDefaults) - AES-256 暗号化レイヤーを追加した、UserDefaults/NSUserDefaults の軽量ラッパー。
- [Shallows](https://github.com/dreymonde/Shallows) - あなたのための軽量な永続化ツールボックス。
- [SQLite.swift](https://github.com/stephencelis/SQLite.swift) - SQLite3 上に構築された、型安全な Swift 言語のレイヤー。
- [StorageKit](https://github.com/StorageKit/StorageKit) - あなたのデータストレージのトラブルシューター。
- [SugarRecord](https://github.com/modo-studio/SugarRecord)  - データ永続化管理ライブラリ。
- [SwiftStore](https://github.com/hemantasapkota/SwiftStore) - LevelDB をバックエンドとする Swift 向けキーバリューストア。
- [SwiftyUserDefaults](https://github.com/sunshinejr/SwiftyUserDefaults) - 静的に型付けされた NSUserDefaults。
- [TypedDefaults](https://github.com/tasanobu/TypedDefaults) - TypedDefaults は、NSUserDefaults を型安全に使用するためのユーティリティライブラリです。
- [Unrealm](https://github.com/arturdev/Unrealm) - Unrealm を使うと、Swift ネイティブのクラス、構造体、列挙型を Realm に簡単に保存できます。
- [UserDefaults](https://github.com/nmdias/DefaultsKit) - iOS、macOS、tvOS 向けの、シンプルで強く型付けされた UserDefaults。
- [WCDB](https://github.com/Tencent/wcdb) - WCDB は、iOS、macOS 向けの効率的で完全な、使いやすいモバイルデータベースフレームワークです。
- [YapDatabase](https://github.com/yapstudios/YapDatabase) - YapDatabase は、iOS と Mac 向けの拡張可能なデータベースです。

**[トップに戻る](#contributing-and-collaborating)**

## データ構造 / アルゴリズム

*差分、キーパス、ソート済みリスト、その他の素晴らしいデータ構造のラッパーとライブラリ。*

- [Algorithm](https://github.com/CosmicMind/Algorithm) - Algorithm は、確率ツールセットによって強化されたデータ構造のコレクションです。
- [BTree](https://github.com/attaswift/BTree) - インメモリの B 木を使った、Swift 向けの高速な順序付きコレクション。
- [Buffer](https://github.com/alexdrone/Buffer) - 効率的な配列の差分、コレクションの監視、セルの構成のための Swift の μ フレームワーク。
- [Changeset](https://github.com/osteslag/Changeset) - あるコレクションから別のコレクションへの最小限の編集。
- [Differ](https://github.com/tonyarnold/Differ) - コレクション間の差分とパッチを生成する Swift ライブラリ。
- [DifferenceKit](https://github.com/ra1028/DifferenceKit) - Swift のコレクション向けの、高速で柔軟な O(n) 差分アルゴリズムフレームワーク。
- [Differific](https://github.com/zenangst/Differific) - 高速で便利な差分フレームワーク。
- [Dispatch](https://github.com/alexdrone/Store) - Swift によるマルチストアの Flux 実装。
- [Dollar](https://github.com/ankurp/Dollar) - Javascript の Lo-Dash や Underscore.js に似た、Swift 言語向けの関数型ツールベルト https://www.dollarswift.org/.
- [EKAlgorithms](https://github.com/EvgenyKarkan/EKAlgorithms) - よく知られた CS のアルゴリズムとデータ構造を Objective-C で実装したもの。
- [HeckelDiff](https://github.com/mcudich/HeckelDiff) - 高速な Swift の差分ライブラリ。
- [KeyPathKit](https://github.com/vincent-pradeilles/KeyPathKit) - KeyPathKit は、型付きキーパスを使ってデータを操作するためのシームレスな構文を提供します。
- [Result](https://github.com/antitypical/Result) - 任意の操作の成功/失敗をモデル化する Swift の型。
- [swift-algorithm-club](https://github.com/raywenderlich/swift-algorithm-club) - 解説付きの、Swift によるアルゴリズムとデータ構造！
- [SwiftGraph](https://github.com/davecom/SwiftGraph) - 純粋な Swift によるグラフデータ構造とユーティリティ関数。
- [SwiftPriorityQueue](https://github.com/davecom/SwiftPriorityQueue) - 純粋な Swift による、古典的な二分ヒープ実装の優先度付きキュー。
- [SwiftStructures](https://github.com/waynewbishop/SwiftStructures) - Swift でよく使われるデータ構造とアルゴリズムの例。

**[トップに戻る](#contributing-and-collaborating)**

## 日付と時刻

*時刻と NSCalendar のライブラリ。日の出・日の入り時刻のジェネレーター、タイムピッカー、NSTimer のインターフェースも含みます。*

- [10Clock](https://github.com/joedaniels29/10Clock) - このコントロールは、iOS 10 の「ベッドタイム」タイマーから大きな影響を受けた美しい時刻ピッカーです。
- [AnyDate](https://github.com/Kawoou/AnyDate) - Java 8 の DateTime API に触発された、Swift らしい日付と時刻の API。
- [Chronology](https://github.com/davedelong/Chronology) - より良い日付/時刻ライブラリを構築します。
- [DateHelper](https://github.com/melvitax/DateHelper) - Swift の NSDate のための便利な拡張機能。
- [DateTools](https://github.com/MatthewYork/DateTools) - Objective-C で日付と時刻を簡単に扱えます。
- [iso-8601-date-formatter](https://github.com/boredzo/iso-8601-date-formatter) - 日付と ISO-8601 形式の文字列を相互に変換するための Cocoa NSFormatter サブクラス。暦日、週、通日の形式をサポートしています。
- [Kronos](https://github.com/lyft/Kronos) - Swift で書かれた洗練された NTP 日付ライブラリ。
- [NVDate](https://github.com/novalagung/nvdate) - Swift4 の Date 拡張ライブラリ。
- [Schedule](https://github.com/luoxiu/Schedule) - ⏳ 信じられないほど人間にやさしい構文を備えた、Swift に欠けていた軽量タスクスケジューラー。
- [Solar](https://github.com/ceeK/Solar) - 日の出と日の入りの時刻を生成するための Swift マイクロライブラリ。
- [SwiftDate](https://github.com/malcommac/SwiftDate) - Swift で日付とタイムゾーンを管理する最良の方法。
- [SwiftyTimer](https://github.com/radex/SwiftyTimer) - NSTimer のための Swift らしい API。
- [Time](https://github.com/dreymonde/Time) - ジェネリクスを活用した、Swift での型安全な時間計算。
- [Timepiece](https://github.com/naoty/Timepiece) - Swift による直感的な NSDate の拡張機能。
- [TimeZonePicker](https://github.com/gligorkot/TimeZonePicker) - iOS の設定アプリに似た TimeZonePicker UIViewController。
- [TrueTime](https://github.com/instacart/TrueTime.swift) - デバイスの時計の変更に影響されない、本当の現在時刻を取得します。

**[トップに戻る](#contributing-and-collaborating)**

## デバッグ

*デバッグツール、クラッシュレポート、ログ、コンソール UI。*

- [AEConsole](https://github.com/tadija/AEConsole) - iOS アプリの上にデバッグログを重ねて表示する、カスタマイズ可能なコンソール UI オーバーレイ。
- [Alpha](https://github.com/Legoless/Alpha) - iOS 向けの次世代デバッグフレームワーク。
- [AppSpector](https://appspector.com) - iOS と Android のリモートデバッグおよびデータ収集サービス。ネットワーク、ログ、CoreData、SQLite、NSNotificationCenter をデバッグしたり、デバイスの位置情報をモックしたりできます。
- [Atlantis](https://github.com/ProxymanApp/atlantis) - iOS アプリの HTTP/HTTPS トラフィックを傍受するための、小さくて強力な iOS フレームワーク。プロキシや証明書の設定に煩わされることはもうありません。Proxyman アプリでトラフィックログを確認できます。
- [chisel](https://github.com/facebook/chisel) - iOS アプリのデバッグを支援する LLDB コマンドのコレクション。
- [DBDebugToolkit](https://github.com/dbukowski/DBDebugToolkit) - iOS 開発者と QA エンジニアのための、使いやすいデバッグツールのセット。
- [DebugSwift](https://github.com/DebugSwift/DebugSwift) - iOS アプリケーションのデバッグプロセスを簡素化・強化するために設計された包括的なツールキット。
- [DoraemonKit](https://github.com/didi/DoraemonKit) - 30 以上のツールを搭載した、フル機能の iOS アプリ開発アシスタント。あなたにふさわしいツールです。
- [Flex](https://github.com/Flipboard/FLEX) - iOS 向けのアプリ内デバッグおよび探索ツール。
- [Httper-iOS](https://github.com/MuShare/Httper-iOS) - 開発者が REST API をテストするためのアプリ。
- [Hyperion](https://github.com/willowtreeapps/Hyperion-iOS) - 寸法、属性、アニメーションを検査するためのアプリ内デザインレビューツール。
- [LayoutInspector](https://github.com/isavynskyi/LayoutInspector) - iOS デバイス上で直接アプリのレイアウトをデバッグ：レイヤーを 3D で検査し、表示されている各ビューの属性をデバッグできます。
- [MTHawkeye](https://github.com/meitu/MTHawkeye) - iOS 向けのプロファイリング / デバッグ支援ツール。UITimeProfiler、Memory Allocations、Living ObjC Objects Sniffer、Network Transaction Waterfall などのツールを含みます。
- [Netfox](https://github.com/kasketis/netfox) - 1 行で設定できる、軽量な iOS / macOS ネットワークデバッグライブラリ！
- [NetworkEye](https://github.com/coderyi/NetworkEye) - iOS のネットワークデバッグライブラリ。アプリ内の HTTP リクエストを監視し、リクエストに関連する情報を表示できます。
- [Playbook](https://github.com/playbook-ui/playbook-ios) - UI コンポーネントを分離して開発し、それらのスナップショットを自動的に撮るためのライブラリ。
- [PonyDebugger](https://github.com/square/PonyDebugger) - Chrome Developer Tools を使った、ネイティブ iOS アプリのリモートネットワークおよびデータデバッグ。
- [Scyther](https://github.com/bstillitano/Scyther) - ネットワークログ、レイアウト検査、位置情報の偽装、コンソールログなど、便利なツールが満載のフル機能のアプリ内デバッグメニュー。
- [Woodpecker](http://www.woodpeck.cn) - Mac からサンドボックスのファイル、UserDefaults、ネットワークリクエストを閲覧できます。
- [Wormholy](https://github.com/pmusolino/Wormholy) - 魔法使いのような iOS ネットワークデバッグ。
- [Xniffer](https://github.com/xmartlabs/Xniffer) - URLSession の上に構築された Swift のネットワークプロファイラー。

**[トップに戻る](#contributing-and-collaborating)**


## 依存性注入

*疎結合でテスト可能な iOS コードのための依存性注入フレームワークとライブラリ。*

- [DITranquillity](https://github.com/ivlevAstef/DITranquillity) - クリーンな Swift で書かれた、iOS アプリケーション向けの依存性注入フレームワーク。
- [Needle](https://github.com/uber/needle) — 実際のコードによる、コンパイル時に安全な Swift の依存性注入フレームワーク。
- [Perform](https://github.com/thoughtbot/Perform) - ストーリーボードの segue のための簡単な依存性注入。
- [SafeDI](https://github.com/dfed/safedi) - Swift 6 における、コンパイル時に安全な依存性注入。
- [Swinject](https://github.com/Swinject/Swinject) - Swift 向けの依存性注入フレームワーク。
- [Typhoon](https://github.com/appsquickly/Typhoon) - Objective-C 向けの強力な依存性注入。
- [Weaver](https://github.com/scribd/Weaver) - Swift 向けの、宣言的で使いやすく安全な依存性注入フレームワーク。

**[トップに戻る](#contributing-and-collaborating)**

## 依存関係 / パッケージマネージャー

*iOS プロジェクトでサードパーティの依存関係とパッケージを管理するためのツール。*

- [Accio](https://github.com/JamitLabs/Accio) - Carthage を改良した、iOS などのための SwiftPM ベースの依存関係マネージャー。
- [Carthage](https://github.com/Carthage/Carthage) - Cocoa 向けのシンプルで分散型の依存関係マネージャー。
- [CocoaPods](https://cocoapods.org/) - CocoaPods は Objective-C プロジェクト向けの依存関係マネージャーです。数千のライブラリがあり、プロジェクトをエレガントにスケールさせるのに役立ちます。
- [Rome](https://github.com/tmspzz/Rome) - Carthage でビルドされたフレームワークのためのキャッシュツール。
- [swift-package-manager](https://github.com/apple/swift-package-manager) - Swift プログラミング言語のためのパッケージマネージャー。
- [Xcode Maven](http://sap-production.github.io/xcode-maven-plugin/site/) - Xcode Maven Plugin を使うと、Maven のライフサイクルに組み込まれた Xcode ビルドを実行できます。

**[トップに戻る](#contributing-and-collaborating)**

## デプロイ / 配布

*iOS アプリを出荷するための継続的インテグレーション、デリバリー、配布ツール。*

- [AppCenter](https://appcenter.ms) - あらゆるプラットフォームのアプリを継続的にビルド、テスト、リリース、監視します。
- [Appcircle.io](https://appcircle.io) — より高速で効率的なリリースサイクルのために、モバイルアプリのビルド、テスト、ストアへの公開を自動化するエンタープライズグレードのモバイル DevOps プラットフォーム
- [AppLaunchpad](https://theapplaunchpad.com/) - 無料の App Store スクリーンショットビルダー。
- [Bitrise](https://www.bitrise.io) - ビルド、テスト、デプロイ、コラボレーションのための数十の連携機能を備えた、モバイルの継続的インテグレーション & デリバリー。
- [boarding](https://github.com/fastlane/boarding) - TestFlight ベータテスター向けのシンプルな登録ページを即座に作成します。
- [buddybuild](https://www.buddybuild.com/) - モバイルのイテレーションプラットフォーム - ビルド、デプロイ、コラボレーション。
- [Codemagic](https://codemagic.io) - Codemagic CI/CD で、iOS アプリのビルド、テスト、配信を 20% 高速化します。
- [Crashlytics](https://firebase.google.com/products/crashlytics/) - クラッシュレポートとベータテストのサービス。
- [deliver](https://github.com/fastlane/fastlane/tree/master/deliver) - 1 つのコマンドで、スクリーンショット、メタデータ、アプリを App Store にアップロードします。
- [fastlane](https://github.com/fastlane/fastlane) - すべての iOS デプロイツールを 1 つの合理化されたワークフローに接続します。
- [Instabug](https://instabug.com) - アプリ内フィードバック、バグおよびクラッシュレポート。ユーザー操作の手順、動画録画、画面への注釈、ネットワークリクエストのログによってバグをより速く修正できます。
- [LaunchKit](https://github.com/LaunchKit/LaunchKit) - モバイルアプリ開発者向けの Web ベースのツールのセットで、現在はオープンソースです！
- [Rollout.io](https://rollout.io/) - ネイティブアプリ（Obj-C & Swift）にリアルタイムでパッチを当て、バグを修正し、変更・操作するための SDK。
- [Runway](https://runway.team) - チームのためのより簡単なモバイルリリース。ツール（バージョン管理、プロジェクト管理、CI、アプリストア、クラッシュレポートなど）を横断して統合し、リリースサイクル中にモバイルチームが集まるための信頼できる唯一の情報源を提供します。自動化とコラボレーションを等しく兼ね備えています。
- [Screenplay](https://screenplay.dev) - iOS 向けの即時ロールバックとカナリアデプロイ。
- [ScreenshotFramer](https://github.com/IdeasOnCanvas/ScreenshotFramer) - Screenshot Framer を使えば、見栄えが良くローカライズされた App Store 画像を簡単に作成できます。
- [Semaphore](https://semaphoreci.com/product/ios) - あらゆる Apple デバイス向けのアプリケーションのビルド、テスト、デプロイを容易にする CI/CD サービス。iOS のサポートは Semaphore 2.0 に完全に統合されているため、Linux ベースの開発と同じ強力な CI/CD パイプライン機能を iOS にも使用できます。
- [snapshot](https://github.com/fastlane/fastlane/tree/master/snapshot) - あらゆるデバイスで、iOS アプリのローカライズされたスクリーンショットの撮影を自動化します。
- [TestFlight Beta Testing](https://developer.apple.com/testflight/) - iTunes Connect でホストされているベータテストサービス（iOS 8 以降が必要）。
- [watchbuild](https://github.com/fastlane/watchbuild) - iTunes Connect のビルドの処理が完了したら通知を受け取れます。

**[トップに戻る](#contributing-and-collaborating)**

## EventBus

*Swift でより良い非同期コードを書くのに役立つ、Promise と Future のライブラリ。*

- [Bolts](https://github.com/BoltsFramework/Bolts-ObjC) - Bolts は、タスク（Promise）やアプリリンク（ディープリンク）を含む、モバイルアプリの開発を容易にするために設計された低レベルライブラリのコレクションです。
- [Bolts-Swift](https://github.com/BoltsFramework/Bolts-Swift) - Bolts は、モバイルアプリの開発を容易にするために設計された低レベルライブラリのコレクションです。
- [FutureKit](https://github.com/FutureKit/FutureKit) - iOS と macOS 向けの、Swift ベースの Future/Promise ライブラリ。
- [Hydra](https://github.com/malcommac/Hydra) - Promise & Await - Swift でより良い非同期コードを書きましょう。
- [Promis](https://github.com/albertodebortoli/Promis) - Swift で最も簡単な Future と Promise のフレームワーク。魔法もボイラープレートもありません。
- [Promise](https://github.com/khanlou/Promise) - Javascript の A+ 仕様を部分的にベースにした、Swift 向けの Promise ライブラリ。
- [PromiseKit](https://github.com/mxcl/PromiseKit) - iOS と macOS のための Promise。
- [RWPromiseKit](https://github.com/deput/RWPromiseKit) - Objective-C 向けの軽量な Promise ライブラリ。
- [signals-ios](https://github.com/uber/signals-ios) - 型付きのイベント処理。
- [SwiftEventBus](https://github.com/cesarferreira/SwiftEventBus) - iOS 向けに最適化された、パブリッシュ/サブスクライブ型のイベントバス。
- [SwiftNotificationCenter](https://github.com/100mango/SwiftNotificationCenter) - 型安全、スレッドセーフ、メモリ安全なプロトコル指向の NotificationCenter。
- [SwiftTask](https://github.com/ReactKit/SwiftTask) - Swift 向けの Promise + 進捗 + 一時停止 + キャンセル + リトライ。
- [then🎬](https://github.com/freshOS/then) - Swift による洗練された非同期コード。
- [When](https://github.com/vadymmarkov/When) - Swift による Promise の軽量実装。

**[トップに戻る](#contributing-and-collaborating)**

## ファイル

*ファイル管理、ファイルブラウザー、zip 処理、ファイルの監視。*

- [AMSMB2](https://github.com/amosavian/AMSMB2) - iOS で SMB 2/3 共有に接続するための Swift フレームワーク。
- [AppFolder](https://github.com/dreymonde/AppFolder) - AppFolder は、アプリのコンテナ内のディレクトリを、わかりやすく強く型付けされた形で表現できる軽量フレームワークです。
- [FileBrowser](https://github.com/marmelroy/FileBrowser) - iOS 向けの強力な Swift ファイルブラウザー。
- [FileKit](https://github.com/nvzqz/FileKit) - Swift によるシンプルで表現力豊かなファイル管理。
- [FileProvider](https://github.com/amosavian/FileProvider) - iOS/tvOS および macOS 上のローカル、iCloud、リモート（WebDAV/FTP/Dropbox/OneDrive/SMB2）ファイルのための FileManager の代替。
- [KZFileWatchers](https://github.com/krzysztofzablocki/KZFileWatchers) - ローカルとリモートの両方のファイル変更を監視するためのマイクロフレームワーク。開発者ツールの構築に役立ちます。
- [Zip](https://github.com/marmelroy/Zip) - ファイルを zip 圧縮・解凍するための Swift フレームワーク。
- [ZipArchive](https://github.com/ZipArchive/ZipArchive) - ZipArchive は、iOS と Mac でファイルを zip 圧縮・解凍するためのシンプルなユーティリティクラスです。
- [ZIPFoundation](https://github.com/weichsel/ZIPFoundation) - Swift で手間なく ZIP を処理します。
- [ZipZap](https://github.com/pixelglow/ZipZap) - iOS、macOS、tvOS 向けの zip ファイル I/O ライブラリ。


**[トップに戻る](#contributing-and-collaborating)**

## 関数型プログラミング

*Swift の関数型プログラミングツールのコレクション。*

- [Argo](https://github.com/thoughtbot/Argo) - Swift 向けの関数型 JSON パースライブラリ。
- [Bow](https://github.com/bow-swift/bow) - Swift のための型付き関数型プログラミングのコンパニオンライブラリ。
- [OptionalExtensions](https://github.com/RuiAAPeres/OptionalExtensions) - Optional 型の拡張機能を提供する Swift の µ フレームワーク。
- [Prelude](https://github.com/robrix/Prelude) - シンプルな関数型プログラミングツールを集めた Swift の µ フレームワーク。
- [Runes](https://github.com/thoughtbot/Runes) - Swift のモナディックな関数のための中置演算子。
- [Swiftx](https://github.com/typelift/Swiftx) - あらゆるプロジェクトのための関数型データ型と関数。
- [Swiftz](https://github.com/typelift/Swiftz) -  Swift による関数型プログラミング。

**[トップに戻る](#contributing-and-collaborating)**

## ゲーム

*iOS でゲームを構築するためのゲームエンジン、フレームワーク、サンプルプロジェクト。*

- [CollectionNode](https://github.com/bwide/CollectionNode) - SpriteKit で collectionView を実現する Swift フレームワーク。
- [glide engine](https://github.com/cocoatoucher/Glide) - 実用的な例とチュートリアルを備えた、2D ゲームを作るための SpriteKit と GameplayKit ベースのエンジン。
- [Sage](https://github.com/nvzqz/Sage) - Swift 向けのクロスプラットフォームなチェスライブラリ。
- [SKTiled](https://github.com/mfessenden/SKTiled) - SpriteKit で Tiled のアセットを扱うための Swift フレームワーク。
- [SwiftFortuneWheel](https://github.com/sh-khashimov/SwiftFortuneWheel) - Wheel of Fortune のようなゲームのためのクロスプラットフォームフレームワーク。

**[トップに戻る](#contributing-and-collaborating)**

## GCD

*Grand Central Dispatch の構文糖、ツール、タイマー。*

- [Async](https://github.com/duemunk/Async) - Grand Central Dispatch の非同期ディスパッチのための Swift 構文糖。
- [GCDKit](https://github.com/JohnEstropia/GCDKit) - Swift でシンプルにした Grand Central Dispatch。
- [GCDTimer](https://github.com/hemantasapkota/GCDTimer) - 十分にテストされた Swift 製 Grand Central Dispatch（GCD）タイマー。
- [YYDispatchQueuePool](https://github.com/ibireme/YYDispatchQueuePool) - グローバルディスパッチキューを管理する iOS ユーティリティクラス。

**[トップへ戻る](#contributing-and-collaborating)**

## ジェスチャー

*ジェスチャーを扱うライブラリとツール。*

- [DBPathRecognizer](https://github.com/didierbrun/DBPathRecognizer) - ジェスチャー認識ツール。
- [FDFullscreenPopGesture](https://github.com/forkingdog/FDFullscreenPopGesture) - AOP を使って iOS7+ のシステムスタイルでフルスクリーンの pop ジェスチャーを有効にする UINavigationController のカテゴリ。
- [Sensitive](https://github.com/hellowizman/Sensitive) - iOS でジェスチャーを扱う特別な方法。
- [SwiftyGestureRecognition](https://github.com/b3ll/SwiftyGestureRecognition) - Xcode Playground での UIGestureRecognizer のプロトタイピングを支援。
- [Tactile](https://github.com/delba/Tactile) - iOS でジェスチャーを扱うより良い方法。

**[トップへ戻る](#contributing-and-collaborating)**

## グラフィックス

*CoreGraphics、CoreAnimation、SVG、CGContext のライブラリ、ヘルパー、ツール。*

- [AnimatedGradientView](https://github.com/rwbutler/AnimatedGradientView) - iOS アプリにアニメーションするグラデーションを追加するシンプルなフレームワーク。
- [Drawsana](https://github.com/Asana/Drawsana) - ラスター描画と画像マークアップビューを構築するための iOS フレームワーク。
- [EZYGradientView](https://github.com/shashankpali/EZYGradientView) - 1 行もコードを書かずにグラデーションとぼかしグラデーションを作成。
- [jot](https://github.com/IFTTT/jot) - 画像に描画やテキストを簡単に追加するための iOS フレームワーク。
- [Macaw](https://github.com/exyte/macaw) - SVG サポート付きの強力で使いやすい Swift 製ベクターグラフィックスライブラリ。
- [MKGradientView](https://github.com/maxkonovalov/MKGradientView) - Core Graphics ベースのグラデーションビュー。線形（軸方向）、放射状（円形）、円錐（角度）、双線形（4 点）グラデーションを生成でき、Swift で書かれています。
- [MPWDrawingContext](https://github.com/mpw/MPWDrawingContext) - CoreGraphics CGContext の Objective-C ラッパー。
- [NXDrawKit](https://github.com/Nicejinux/NXDrawKit) - NXDrawKit は iPhone 向けのシンプルで簡単、しかし有用な描画キット。
- [Snowflake](https://github.com/onmyway133/Snowflake) - Swift で SVG。
- [SVGKit](https://github.com/SVGKit/SVGKit) - ネイティブレンダリング（CoreAnimation）を使って iOS / macOS で SVG 画像を表示・操作（現在は iOS のみサポート、macOS コードは更新が必要）。
- [SwiftSVG](https://github.com/mchoe/SwiftSVG) -  複数のインターフェースオプション（String、NS/UIBezierPath、CAShapeLayer、NS/UIView）を持つシングルパス SVG パーサー。
- [YYAsyncLayer](https://github.com/ibireme/YYAsyncLayer) - 非同期レンダリングと表示のための iOS ユーティリティクラス。

**[トップへ戻る](#contributing-and-collaborating)**

## ハードウェア

*iOS デバイスのハードウェアとやり取りするためのライブラリとユーティリティ。*

### Bluetooth

*近くのデバイスの処理、BLE ツール、MultipeerConnectivity ラッパーのためのライブラリ。*

- [BabyBluetooth](https://github.com/coolnameismy/BabyBluetooth) - iOS/MacOS で Bluetooth（BLE）を使う最も簡単な方法。
- [Bleu](https://github.com/1amageek/Bleu) - あなたのための BLE（Bluetooth LE）。
- [BlueCap](https://github.com/troystribling/BlueCap) - iOS Bluetooth LE フレームワーク。
- [Bluejay](https://github.com/steamclock/bluejay) - 信頼性の高い Bluetooth LE アプリを構築するためのシンプルな Swift フレームワーク。
- [Bluetonium](https://github.com/e-sites/Bluetonium) - Swift での Bluetooth マッピング。
- [BluetoothKit](https://github.com/rhummelmose/BluetoothKit) - BLE を使って iOS/macOS デバイス間で簡単に通信。
- [Discovery](https://github.com/omergul/Discovery) - 近くのデバイスを発見してデータを取得する非常にシンプルなライブラリ（相手アプリがバックグラウンドで動作していても）。
- [LGBluetooth](https://github.com/LGBluetooth/LGBluetooth) - CoreBluetooth 上のシンプルでブロックベースの軽量ライブラリ。Core Bluetooth 関連のコードを整理します。
- [MultiPeer](https://github.com/dingwilson/MultiPeer) - Multipeer は Apple の MultipeerConnectivity フレームワークのラッパーで、Apple デバイス間のオフラインデータ転送を扱います。近くの複数デバイスへ自動接続し、Bluetooth や Wi-Fi で情報を共有するのを簡単にします。
- [PeerKit](https://github.com/jpsim/PeerKit) イベント駆動・ゼロ設定の Multipeer Connectivity アプリを構築するオープンソースの Swift フレームワーク。

**[トップへ戻る](#contributing-and-collaborating)**

### カメラ

*モック、イメージピッカー、そしてカスタマイズ可能なカメラ実装の複数の選択肢*

- [BarcodeScanner](https://github.com/hyperoslo/BarcodeScanner) - シンプルで美しいバーコードスキャナー。
- [CameraKit-iOS](https://github.com/CameraKit/camerakit-ios) - 次の iOS プロジェクトでカメラのパフォーマンスと使いやすさを大幅に向上。
- [CameraManager](https://github.com/imaginary-cloud/CameraManager) - アプリでカスタムカメラビューを作るために必要なすべての設定を提供するシンプルな Swift クラス。
- [Cool-iOS-Camera](https://github.com/GabrielAlva/Cool-iOS-Camera) - AVFoundation で作られた完全カスタマイズ可能なモダンな iOS カメラ実装。
- [ExyteMediaPicker](https://github.com/exyte/mediapicker) - カスタマイズ可能なメディアピッカー
- [FastttCamera](https://github.com/IFTTT/FastttCamera) - カスタマイズ可能なフィルター付き、高速で手軽な iOS カメラフレームワーク。
- [FDTake](https://github.com/fulldecent/FDTake) - 写真や動画の撮影、ライブラリからの選択を簡単に。
- [Fusuma](https://github.com/ytakzk/Fusuma) - Swift で数行のコードで実現する Instagram 風写真ブラウザーとカメラ機能。
- [HorizonSDK-iOS](https://github.com/HorizonCamera/HorizonSDK-iOS) - 最新鋭のリアルタイム動画録画／写真撮影 iOS ライブラリ。
- [HybridCamera](https://github.com/eonist/HybridCamera) - Snapchat のカメラに似た、iOS 向け動画・写真カメラ。
- [iOS-Depth-Sampler](https://github.com/shu223/iOS-Depth-Sampler) - Depth API のコード例集。
- [LLSimpleCamera](https://github.com/omergul/LLSimpleCamera) - シンプルでカスタマイズ可能な iOS カメラコントロール（ビデオレコーダー）。
- [Lumina](https://github.com/dokun1/Lumina) - 写真撮影、動画録画、フレームのストリーミング、メタデータ検出、CoreML 予測のストリーミングができるフルサービスカメラ。
- [MijickCamera](https://github.com/Mijick/Camera) - シンプルになったカメラ。実装時間と手間を大幅に減らす完全カスタマイズ可能なカメラライブラリ。SwiftUI で、SwiftUI のために書かれています。
- [NextLevel](https://github.com/NextLevel/NextLevel) - Next Level は iOS 向けメディアキャプチャカメラライブラリ。
- [RSBarcodes_Swift](https://github.com/yeahdongcn/RSBarcodes_Swift) - 魅力的なコントロール付き、iOS 8 向け 1D・2D バーコードリーダーとジェネレーター。現在は Swift。
- [SCRecorder](https://github.com/rFlex/SCRecorder) - Vine のようなタップ録画、アニメーション可能なフィルター、スローモーション、セグメント編集を備えたカメラエンジン。
- [SwiftyCam](https://github.com/Awalz/SwiftyCam) -  Swift で書かれた、Snapchat にインスパイアされた iOS カメラフレームワーク。
- [YPImagePicker](https://github.com/Yummypets/YPImagePicker) - Instagram 風の iOS イメージピッカーとフィルター。

**[トップへ戻る](#contributing-and-collaborating)**

### Force Touch

*クイックアクションと peek・pop インタラクション*

- [PeekView](https://github.com/itsmeichigo/PeekView) - PeekView は 3D Touch 非対応の iOS デバイスで peek、pop、プレビューアクションを提供。
- [QuickActions](https://github.com/ricardopereira/QuickActions) - iOS ホーム画面クイックアクション（アプリアイコンショートカット）の Swift ラッパー。

**[トップへ戻る](#contributing-and-collaborating)**

### iBeacon

*デバイス検出ライブラリと iBeacon ヘルパー*

- [BeaconEmitter](https://github.com/lgaches/BeaconEmitter) - あなたの Mac を iBeacon に。
- [JMCBeaconManager](https://github.com/izotx/JMCBeaconManager) - 近くのビーコン検出を担う iBeacon マネージャークラス。
- [MOCA Proximity](https://www.mocaplatform.com/features) - アプリに素晴らしい近接体験を追加できる有料の近接マーケティングプラットフォーム。
- [OWUProximityManager](https://github.com/ohayon/OWUProximityManager) - iBeacons + CoreBluetooth。

**[トップへ戻る](#contributing-and-collaborating)**

### 位置情報

*位置情報の監視、モーション検出、ジオフェンシングのライブラリ*

- [AsyncLocationKit](https://github.com/AsyncSwift/AsyncLocationKit) - モダンな Swift 並行処理（async/await）を使った Apple CoreLocation フレームワークのラッパー。
- [BBLocationManager](https://github.com/benzamin/BBLocationManager) - iOS で位置情報サービスとジオフェンシングを簡単に実装するためのロケーションマネージャー。
- [LocationManager](https://github.com/intuit/LocationManager) - 現在位置を 1 回または継続的に要求するブロックベースの非同期 API を提供。
- [set-simulator-location](https://github.com/lyft/set-simulator-location) - iOS シミュレーターで位置情報を設定する CLI。
- [SOMotionDetector](https://github.com/arturdev/SOMotionDetector) - モーションを検出するシンプルなライブラリ。位置情報の更新と加速度に基づく。
- [SwiftLocation](https://github.com/malcommac/SwiftLocation) - Swift での位置情報とビーコンの監視。

**[トップへ戻る](#contributing-and-collaborating)**

### その他のハードウェア

*加速度計、ジャイロスコープ、ハプティクス、その他のデバイスセンサーのヘルパー。*

- [DarkLightning](https://github.com/jensmeder/DarkLightning) - iOS/tvOS と macOS の間でデータを伝送する最速の方法。
- [Device](https://github.com/Ekhoo/Device) - 現在のデバイスと画面サイズを検出する Swift 製の軽量ツール。
- [Device.swift](https://github.com/schickling/Device.swift) - 使用中のデバイスを検出する超軽量ライブラリ。
- [DeviceKit](https://github.com/devicekit/DeviceKit) - DeviceKit は UIDevice の値型代替。
- [Haptico](https://github.com/iSapozhnik/Haptico) - パターン再生に対応した使いやすいハプティックフィードバックジェネレーター。
- [Luminous](https://github.com/andrealufino/Luminous) - Luminous は現在のシステムについて多くの情報（50 以上）を提供できる大きなフレームワーク。
- [MotionKit](https://github.com/MHaroonBaig/MotionKit) - 2 行または数行のコードで加速度計、ジャイロスコープ、磁力計のデータを取得。CoreMotion が驚くほどシンプルに。
- [NFCPassportReader](https://github.com/AndyQ/NFCPassportReader) - NFC 対応パスポートを読み取る Swift ライブラリ。BAC、セキュアメッセージング、アクティブ・パッシブ認証の両方に対応。iOS 13 以上が必要。
- [SDVersion](https://github.com/sebyddd/SDVersion) - 実行中デバイスのモデルと画面サイズを検出する軽量 Cocoa ライブラリ。
- [TapticEngine](https://github.com/WorldDownTown/TapticEngine) - TapticEngine は iOS デバイスの振動を生成します。
- [UIDeviceComplete](https://github.com/Nirma/UIDeviceComplete) - 不足している部分を埋める UIDevice 拡張。
- [WatchShaker](https://github.com/ezefranca/WatchShaker) - シェイク動作を取得する Swift 製 watchOS ヘルパー。

**[トップへ戻る](#contributing-and-collaborating)**

## レイアウト

*Auto Layout、UI フレームワーク、そしてレイアウト構築を簡単にする素晴らしいツールのリスト*

- [Anchorage](https://github.com/Rightpoint/Anchorage) - iOS レイアウトコードを簡素化する演算子とユーティリティのコレクション。
- [Auto Layout Magic](http://akordadev.github.io/AutoLayoutMagic/) - 1 シーンを作ると、Auto Layout Magic が制約を生成！シーンはすべてのデバイスで美しく見える！
- [BrickKit](https://github.com/wayfair/brickkit-ios) - BrickKit を使えば、シンプルな方法で複雑でレスポンシブなレイアウトを作成できます。使いやすく拡張も容易。自分だけの再利用可能な brick とビヘイビアを作りましょう。
- [Cartography](https://github.com/robb/Cartography) - Swift 向けの宣言的 Auto Layout DSL。
- [Cupcake](https://github.com/nerdycat/Cupcake) - iOS の UI コンポーネントを簡単に作成・レイアウトする方法。
- [EasyPeasy](https://github.com/nakiostudio/EasyPeasy) - Auto Layout を簡単に。
- [Façade](https://github.com/mamaral/Facade) - 誰にでも優しいプログラマティックなビューレイアウト — autolayout の代替。
- [FDTemplateLayoutCell](https://github.com/forkingdog/UITableView-FDTemplateLayoutCell) - UITableViewCell の高さを自動計算するテンプレート auto layout セル。
- [FlexLayout](https://github.com/layoutBox/FlexLayout) - FlexLayout は高度に最適化された [facebook/yoga](https://github.com/facebook/yoga) flexbox 実装を、簡潔で直感的なチェーン可能な構文で優しくラップします。
- [FLKAutoLayout](https://github.com/floriankugler/FLKAutoLayout) - コードでレイアウト制約を簡単に作れる UIView カテゴリ。
- [Grid](https://github.com/exyte/Grid) - SwiftUI に欠けていた最強のグリッドコンテナー。
- [Layout](https://github.com/nicklockwood/layout) - iOS 向けの宣言的 UI フレームワーク。
- [Layoutless](https://github.com/DeclarativeHub/Layoutless) - Auto Layout の上に構築されたミニマルな宣言的レイアウト・スタイリングフレームワーク。
- [ManualLayout](https://github.com/isair/ManualLayout) - iOS と tvOS のビューとレイヤーを手動でレイアウトする、使いやすく柔軟なライブラリ。AsyncDisplayKit 対応。
- [Masonry](https://github.com/SnapKit/Masonry) - 簡素化されたチェーン可能で表現力豊かな構文で AutoLayout NSLayoutConstraints のパワーを活用。
- [MisterFusion](https://github.com/marty-suzuki/MisterFusion) - AutoLayout の Swift DSL。極めて明快かつ簡潔な構文で、Swift と Objective-C の両方で使えます。
- [MondrianLayout](https://github.com/muukii/MondrianLayout) - DSL ベースの AutoLayout レイアウトビルダー。
- [MyLinearLayout](https://github.com/youngsoft/MyLinearLayout) - MyLayout は Objective-C で実装された強力な iOS UI フレームワーク。Android Layout、iOS AutoLayout、SizeClass、HTML CSS float、flexbox、bootstrap の機能を統合しています。
- [Neon](https://github.com/mamaral/Neon) - 強力な Swift プログラマティック UI レイアウトフレームワーク。
- [PinLayout](https://github.com/layoutBox/PinLayout) - auto layout なしの高速な Swift ビューレイアウト。魔法なし、純粋なコード、完全な制御、爆速。簡潔で直感的、読みやすくチェーン可能な構文。
- [PureLayout](https://github.com/PureLayout/PureLayout) - iOS と macOS の究極の Auto Layout API — 驚くほどシンプルで、非常に強力。Objective-C と Swift の両方に対応。
- [QuickLayout](https://github.com/huri000/QuickLayout) - QuickLayout はコードで Auto Layout を簡単に管理する方法を提供します。
- [Relayout](https://github.com/stevestreza/Relayout) - Auto Layout 制約を関数型で宣言する Swift マイクロフレームワーク。
- [SnapKit](https://github.com/SnapKit/SnapKit) - iOS と macOS 向けの Swift Autolayout DSL。
- [Stevia](https://github.com/freshOS/Stevia) - エレガントな iOS ビューレイアウト。
- [SwiftAutoLayout](https://github.com/indragiek/SwiftAutoLayout) - 小さな Swift Autolayout DSL。
- [SwiftBond](https://github.com/DeclarativeHub/Bond) - Bond はバインディングの概念をまったく新しいレベルに引き上げる Swift バインディングフレームワーク。シンプル、強力、型安全、マルチパラダイム。
- [SwiftBox](https://github.com/joshaber/SwiftBox) - Facebook の css-layout を使った Swift の Flexbox。
- [Swiftstraints](https://github.com/Skyvive/Swiftstraints) - Swift の Auto Layout を簡単に。
- [TinyConstraints](https://github.com/roberthein/TinyConstraints) -  Auto Layout を人間にとってより甘くする構文糖。
- [Yalta](https://github.com/kean/Align) - 直感的で強力な Auto Layout ライブラリ。
- [YogaKit](https://github.com/facebook/yoga/tree/master/YogaKit) - Flexbox を実装する強力なレイアウトエンジン。

**[トップへ戻る](#contributing-and-collaborating)**

## ローカライゼーション

*strings ファイルの管理、翻訳、アプリのローカライズを可能にするツール。*

- [attranslate](https://github.com/fkirc/attranslate) - 異なる言語の .strings ファイルやクロスプラットフォームファイルを半自動で翻訳・同期。
- [BartyCrouch](https://github.com/Flinesoft/BartyCrouch) - コードと Storyboards/XIB から Strings ファイルを増分的に更新・翻訳。
- [CrowdinSDK](https://github.com/crowdin/mobile-sdk-ios) - Crowdin iOS SDK は Crowdin プロジェクトのすべての新しい翻訳を即座にアプリへ届けます。
- [Hodor](https://github.com/Aufree/Hodor) - iOS アプリをローカライズするシンプルなソリューション。
- [IBLocalizable](https://github.com/PiXeL16/IBLocalizable) - IBLocalizable で Interface Builder から直接ビューをローカライズ。
- [L10n-swift](https://github.com/Decybel07/L10n-swift) - その場で言語を切り替えられ、あらゆる言語の複数形に対応するアプリのローカライゼーション。
- [LocalizationKit](https://github.com/willpowell8/LocalizationKit_iOS) - Web ポータルからのリアルタイム ローカライゼーション管理。再デプロイや再申請なしでテキストと翻訳を簡単に管理。
- [Localize](https://github.com/andresilvagomez/Localize) - JSON や Strings を使ってアプリをローカライズする簡単なツール。UI コンポーネントの拡張を備えた IBDesignables ももちろん対応。
- [Localize-Swift](https://github.com/marmelroy/Localize-Swift) - アプリ内言語切り替えに対応した、Swift 2.0 に優しいローカライゼーションと i18n。
- [locheck](https://github.com/Asana/locheck) - .strings、.stringsdict、strings.xml ファイルの正しさを検証し、クラッシュや悪い翻訳を防ぐ。
- [Respresso Localization Converter](https://respresso.io/localization-converter) - iOS（.strings + Objective-C ゲッター）、Android（strings.xml）、Web（.json）向けのマルチプラットフォーム ローカライゼーションコンバーター。
- [Rubustrings](https://github.com/dcordero/Rubustrings) - Localizable.strings ファイルの形式と整合性をチェック。
- [StringSwitch](https://stringswitch.com) - iOS の .strings ファイルと Android の strings.xml 形式を簡単に相互変換。
- [Swifternalization](https://github.com/tomkowz/Swifternalization) - JSON ファイルを使って iOS アプリをよりスマートにローカライズ。Swift フレームワーク。

**[トップへ戻る](#contributing-and-collaborating)**

## ロギング

*デバッグはここに。ロギングツール、フレームワーク、インテグレーションなど。*

- [Atlantis](https://github.com/DrewKiino/Atlantis) - 最大限の可読性で開発を高速化するために作られた、入力に依存しない強力な Swift ロギングフレームワーク。
- [CleanroomLogger](https://github.com/emaloney/CleanroomLogger) - シンプルで軽量かつ高性能な、設定可能で拡張可能な Swift ベースのロギング API。
- [CocoaLumberjack](https://github.com/CocoaLumberjack/CocoaLumberjack) - Mac と iOS 向けの高速かつシンプル、それでいて強力で柔軟なロギングフレームワーク。
- [Diagnostics](https://github.com/WeTransfer/Diagnostics) - ユーザーがサポートチームと簡単に診断情報を共有できるようにし、バグ修正の流れを改善。
- [Gedatsu](https://github.com/bannzai/gedatsu) - AutoLayout エラーのコンソールログを読みやすい形式で提供。
- [Log](https://github.com/delba/Log) - 組み込みテーマ、フォーマッター、自分用の API を定義できる素敵な API を備えたロギングツール。
- [LogDog](https://log.dog) - LogDog は Web UI を備えたリモートデバッグ／ロギング SDK（iOS と Android）。すべてのログとリクエストをリアルタイムでキャプチャし、インターセプトも可能。
- [LxDBAnything](https://github.com/DeveloperLx/LxDBAnything) - あらゆる値を自動で箱詰め！書式制御記号なしでログを出力！デバッグ習慣を根本から変える！
- [NSLogger](https://github.com/fpillet/NSLogger) - macOS、iOS、Android で動くクライアントアプリケーションが出力するトレースを表示する高性能ロギングユーティリティ。
- [Pulse](https://github.com/kean/Pulse) - Pulse は Apple プラットフォーム向けの強力なロギングシステム。ネイティブ。SwiftUI で構築。
- [QorumLogs](https://github.com/goktugyil/QorumLogs) — Xcode と Google Docs 向けの Swift ロギングユーティリティ。
- [Rainbow](https://github.com/onevcat/Rainbow) - Swift 開発者のための楽しいコンソール出力。
- [SwiftTrace](https://github.com/johnno1962/SwiftTrace) - Swift と Objective-C のメソッド呼び出しをトレース。
- [SwiftyBeaver](https://github.com/SwiftyBeaver/SwiftyBeaver) - 開発中もリリース後も便利なロギング。
- [SwiftyTextTable](https://github.com/scottrhoyt/SwiftyTextTable) - テキストテーブルを生成する軽量ツール。
- [TinyConsole](https://github.com/Cosmo/TinyConsole) - iOS アプリの使用中に情報を表示する小さなログコンソール。
- [Twitter Logging Service](https://github.com/twitter/ios-twitter-logging-service) - Twitter Logging Service は iOS クライアント向けの堅牢で高性能なロギングフレームワークです。
- [Watchdog](https://github.com/wojteklu/Watchdog) - メインスレッドの過度なブロッキングを記録するクラス。
- [Willow](https://github.com/Nike-Inc/Willow) - Willow は Swift で書かれた、強力でありながら軽量なロギングライブラリ。
- [XCGLogger](https://github.com/DaveWoodCom/XCGLogger) - Swift プロジェクトで使えるデバッグログフレームワーク。NSLog や println のように詳細をコンソール（およびオプションでファイル）に記録でき、日付、関数名、ファイル名、行番号などの追加情報も付けられます。

**[トップへ戻る](#contributing-and-collaborating)**

## 機械学習

*ML モデル、ディープラーニング、ニューラルネットワークライブラリのコレクション*

- [AIToolbox](https://github.com/KevinCoble/AIToolbox) - Swift で書かれた AI モジュールのツールボックス：グラフ／ツリー、線形回帰、サポートベクターマシン、ニューラルネットワーク、PCA、KMeans、遺伝的アルゴリズム、MDP、ガウス混合。
- [Bender](https://github.com/xmartlabs/Bender) - 高速なニューラルネットワークを簡単に構築。TensorFlow モデルを使用。内部は Metal。
- [CoreML-Models](https://github.com/likedan/Awesome-CoreML-Models) - ユニークな Core ML モデルのコレクション。
- [DL4S](https://github.com/palle-k/DL4S) - Swift のディープラーニング：Swift を実行できるすべてのデバイス向けに、逆モード自動微分に基づく高速化されたテンソル演算と動的ニューラルネットワーク。
- [iOS-GenAI-Sampler](https://github.com/shu223/iOS-GenAI-Sampler) - iOS での生成 AI の例のコレクション。
- [off-grid-mobile](https://github.com/alichherawalla/off-grid-mobile) - LLM、ビジョンモデル、Stable Diffusion を完全にオンデバイスで実行。インターネット不要、データは端末から出ません。React Native、iOS と Android に対応。MIT ライセンス。
- [Swift-AI](https://github.com/Swift-AI/Swift-AI) - Swift の機械学習ライブラリ。
- [Swift-Brain](https://github.com/vlall/Swift-Brain) - 未来の iOS 開発のための AI／機械学習のデータ構造と Swift アルゴリズム。ベイズの定理、ニューラルネットワークなど。
- [SwiftCoreMLTools](https://github.com/JacopoMangiavacchi/SwiftCoreMLTools) - Swift で CoreML モデルを作成・エクスポートするための Swift ライブラリ。
- [Tensorflow-iOS](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/examples/ios) - Google が公式にビルドした、iOS に移植された強力なニューラルネットワークライブラリ。
- [TensorSwift](https://github.com/qoncept/TensorSwift) - Swift でテンソルを計算する軽量ライブラリ。TensorFlow に似た API を持ちます。

**[トップへ戻る](#contributing-and-collaborating)**

## マップ

*マップ SDK、位置情報ユーティリティ、クラスタリングツール、ルートレンダラー。*

- [Cluster](https://github.com/efremidze/Cluster) - 簡単なマップアノテーションのクラスタリング。
- [ClusterKit](https://github.com/hulab/ClusterKit) - MapKit、Google Maps、Mapbox をターゲットにした iOS マップクラスタリングフレームワーク。
- [FlyoverKit](https://github.com/SvenTiigi/FlyoverKit) - FlyoverKit は、設定の自由度を保ったままゼロの手間で MKMapView 上に見事な 360° フライオーバービューを表示できるようにします。
- [GEOSwift](https://github.com/GEOSwift/GEOSwift) - Swift 地理エンジン。
- [PXGoogleDirections](https://github.com/poulpix/PXGoogleDirections) - Swift で書かれた iOS 向け Google Directions API ヘルパー。
- [WhirlyGlobe-Maply](https://github.com/mousebird/WhirlyGlobe) - iOS 向け 3D グローブと平面マップ SDK。このツールキットは地図や地球をきめ細かく制御する大きな API を備え、多種多様な GIS データ形式を読み込めます。

**[トップへ戻る](#contributing-and-collaborating)**

## 数学

*カスタム演算、統計計算などのための数学フレームワーク、関数、ライブラリ。*

- [BigInt](https://github.com/attaswift/BigInt) - 純 Swift の任意精度演算。
- [Expression](https://github.com/nicklockwood/Expression) - 実行時に数式を評価する Mac・iOS ライブラリ。
- [iosMath](https://github.com/kostub/iosMath) - 美しくレンダリングされた数式を表示するライブラリ。iOS で LaTeX 数式の組版を可能にします。
- [Matft](https://github.com/jjjkkkjjj/Matft) - Matft は Swift の Numpy 風ライブラリ。n 次元配列を Swift で簡単に扱えます。
- [Metron](https://github.com/toineheuvelmans/Metron) - Metron は CoreGraphics が提供する 2D 幾何プリミティブを拡張する、包括的な幾何関数と型のコレクションです。
- [SigmaSwiftStatistics](https://github.com/evgenyneu/SigmaSwiftStatistics) - 統計計算のための関数コレクション。
- [Upsurge](https://github.com/alejandro-isaza/Upsurge) - Swift の数学。
- [VectorMath](https://github.com/nicklockwood/VectorMath) - 一般的な 2D・3D ベクトルと行列の関数を実装した Mac・iOS 向け Swift ライブラリ。ゲームやベクターグラフィックスに有用。

**[トップへ戻る](#contributing-and-collaborating)**

## メディア

*オーディオ、画像、GIF、動画、その他のメディア形式を扱うライブラリ。*

### オーディオ

*オーディオの再生、録音、エフェクト、サウンド処理ライブラリ。*

- [AudioBus](https://developer.audiob.us/) - 次世代のライブ App 間オーディオルーティングを追加。
- [AudioKit](https://github.com/audiokit/AudioKit) - サウンドの合成、処理、分析のための強力なツールキット。
- [AudioPlayer](https://github.com/delannoyk/AudioPlayer) - AudioPlayer は AVPlayer の構文・機能糖。オーディオファイル（ローカルとリモート）を再生します。
- [AudioPlayerSwift]( https://github.com/tbaranes/AudioPlayerSwift) - AudioPlayer は iOS、macOS、tvOS アプリでオーディオを再生するシンプルなクラスです。
- [Beethoven](https://github.com/vadymmarkov/Beethoven) - 楽音信号のピッチ検出のためのオーディオ処理 Swift ライブラリ。
- [Cephalopod](https://github.com/evgenyneu/Cephalopod) - Swift で書かれた AVAudioPlayer のサウンドフェーダー。
- [Chirp](https://github.com/trifl/Chirp) - Swift アプリでサウンドを準備、再生、削除する最も簡単な方法！
- [ESTMusicIndicator](https://github.com/Aufree/ESTMusicIndicator) - Swift で書かれたクールなアニメーション音楽インジケータービュー。
- [EZAudio](https://github.com/syedhali/EZAudio) - Core Audio の上に構築された iOS/macOS オーディオ可視化フレームワーク。リアルタイム・低レイテンシのオーディオ処理と可視化に役立ちます。
- [FDSoundActivatedRecorder](https://github.com/fulldecent/FDSoundActivatedRecorder) - ユーザーが話し始めたら録音を開始。
- [FDWaveformView](https://github.com/fulldecent/FDWaveformView) - アニメーション付きで、アプリにオーディオ波形を簡単に表示する方法。
- [FluidAudio](https://github.com/FluidInference/FluidAudio) - Core ML を使ってローカル音声認識、話者分離、音声活動検出、テキスト読み上げを行う Swift フレームワーク。
- [InteractivePlayerView](https://github.com/AhmettKeskin/InteractivePlayerView) - カスタム iOS 音楽プレイヤービュー。
- [IQAudioRecorderController](https://github.com/hackiftekhar/IQAudioRecorderController) - 美しい UI でアプリ内録音を可能にする、組み込み式のユニバーサルライブラリ。
- [ModernAVPlayer](https://github.com/noreasonprojects/ModernAVPlayer) - 状態を永続化するプレイヤー。バックグラウンドモードでもネットワーク不良からの再生再開、ヘッドフォンの操作、システム割り込み、再生中情報、リモートコマンドを管理。
- [MusicKit](https://github.com/benzguo/MusicKit) - Swift で音楽を作曲・変換するフレームワーク。
- [novocaine](https://github.com/alexbw/novocaine) - iOS と macOS での手間のかからない高性能オーディオ。
- [NVDSP](https://github.com/bartolsthoorn/NVDSP) - （Novocaine と併用する）iOS/macOS のオーディオ DSP。
- [PandoraPlayer](https://github.com/AppliKeySolutions/PandoraPlayer) - AudioKit ベースの軽量 iOS 音楽プレイヤー。
- [Porcupine](https://github.com/Picovoice/Porcupine) - ディープラーニングで駆動される、macOS・iOS・watchOS 向けのオンデバイス ウェイクワード検出エンジン。
- [QuietModemKit](https://github.com/quiet/QuietModemKit) - Quiet モデム（音でデータを伝送）の iOS フレームワーク。
- [SubtleVolume](https://github.com/andreamazz/SubtleVolume) - システムの音量ポップアップをより控えめなインジケーターに置き換え。
- [SwiftySound](https://github.com/adamcichy/SwiftySound) - 1 行のコードでサウンドを再生できる（それ以上のこともできる）超シンプルなライブラリ。Swift 3 で書かれ、iOS・macOS・tvOS に対応。CocoaPods と Carthage に互換。
- [TheAmazingAudioEngine2](https://github.com/TheAmazingAudioEngine/TheAmazingAudioEngine2) - The Amazing Audio Engine は iOS オーディオアプリのための洗練されたフレームワーク。自分で作らなくても済むように作られています。
- [Voice Overlay](https://github.com/algolia/voice-overlay-ios) - カスタマイズ可能な UI でユーザーの音声権限を取得し、音声入力をテキストとして得るオーバーレイ。
**[トップへ戻る](#contributing-and-collaborating)**

### GIF

*アニメーション GIF の作成、表示、共有のためのライブラリ。*

- [AImage](https://github.com/wangjwchn/AImage) - メモリと CPU の使用量が少ない、Swift 製 iOS 向けアニメーション GIF・APNG エンジン。複数画像ケースに最適化。
- [APNGKit](https://github.com/onevcat/APNGKit) - iOS で APNG 形式を扱う高性能で楽しい方法。
- [FLAnimatedImage](https://github.com/Flipboard/FLAnimatedImage) - iOS 向けの高性能アニメーション GIF エンジン。
- [gifu](https://github.com/kaishin/gifu) - Swift による iOS 向け高性能アニメーション GIF サポート。
- [SwiftyGif](https://github.com/kirualex/SwiftyGif) - 高性能 GIF エンジン。
- [YLGIFImage](https://github.com/liyong03/YLGIFImage) - GIF 再生に対応した非同期 GIF デコーダーとイメージビューアー。メモリ使用量が非常に少ない。
- [YYImage](https://github.com/ibireme/YYImage) - アニメーション WebP、APNG、GIF などを表示／エンコード／デコードする iOS 向け画像フレームワーク。

**[トップへ戻る](#contributing-and-collaborating)**

### 画像

*画像の読み込み、キャッシュ、編集、フィルタリング、表示のヘルパー。*

- [Agrume](https://github.com/JanGorman/Agrume) - Swift で書かれた、レモンのようにフレッシュな iOS 画像ビューアー。
- [AlamofireImage](https://github.com/Alamofire/AlamofireImage) - Alamofire の画像コンポーネントライブラリ。
- [APKenBurnsView](https://github.com/Alterplay/APKenBurnsView) - 顔認識付き Ken Burns エフェクト！
- [APKenBurnsView](https://github.com/Alterplay/APKenBurnsView) - 顔認識付き Ken Burns エフェクト！
- [AsyncImageView](https://github.com/nicklockwood/AsyncImageView) - UI をブロックせずに画像を非同期で読み込み・表示する UIImageView のシンプルな拡張。
- [ATGMediaBrowser](https://github.com/altayer-digital/ATGMediaBrowser) - 複数の事前定義トランジションスタイルを備え、新しいトランジションも簡単に作れる画像スライドショービューアー。
- [ATGMediaBrowser](https://github.com/altayer-digital/ATGMediaBrowser) - 複数の事前定義トランジションスタイルを備え、新しいトランジションも簡単に作れる画像スライドショービューアー。
- [AXPhotoViewer](https://github.com/alexhillc/AXPhotoViewer) - iPhone/iPad のフォトギャラリービューアー。多数（少数！）の写真の表示に便利
- [AXPhotoViewer](https://github.com/alexhillc/AXPhotoViewer) - iPhone/iPad のフォトギャラリービューアー。多数（少数！）の写真の表示に便利
- [ComplimentaryGradientView](https://github.com/gkye/ComplimentaryGradientView) - 指定した画像の支配色・目立つ色から補完的なグラデーションを生成。Grade.js にインスパイア。
- [ComplimentaryGradientView](https://github.com/gkye/ComplimentaryGradientView) - 指定した画像の支配色・目立つ色から補完的なグラデーションを生成。Grade.js にインスパイア。
- [Concorde](https://github.com/contentful-labs/Concorde/) - プログレッシブ JPEG のダウンロードとデコード。
- [CTPanoramaView](https://github.com/scihant/CTPanoramaView) - タッチやモーション操作で球面・円筒パノラマや 360 度写真を表示。
- [CTPanoramaView](https://github.com/scihant/CTPanoramaView) - タッチやモーション操作で球面・円筒パノラマや 360 度写真を表示。
- [DTPhotoViewerController](https://github.com/tungvoduc/DTPhotoViewerController) - Facebook の写真ビューアーにインスパイアされた、完全カスタマイズ可能な写真ビューアー ViewController。
- [DTPhotoViewerController](https://github.com/tungvoduc/DTPhotoViewerController) - Facebook の写真ビューアーにインスパイアされた、完全カスタマイズ可能な写真ビューアー ViewController。
- [EBPhotoPages](https://github.com/EddyBorja/EBPhotoPages) - モダンな機能セットを備えた iOS フォトギャラリー。Facebook のフォトブラウザーに似た機能。
- [FastImageCache](https://github.com/path/FastImageCache) - スクロール中に画像を素早く表示する iOS ライブラリ。
- [FlagKit](https://github.com/madebybowtie/FlagKit) - アプリや Web で使える美しい国旗アイコン。
- [FlexibleImage](https://github.com/kawoou/FlexibleImage) - 画像を自由に遊ぶシンプルな方法！
- [FlexibleImage](https://github.com/kawoou/FlexibleImage) - 画像を自由に遊ぶシンプルな方法！
- [Gallery](https://github.com/hyperoslo/Gallery) - あなたの次のお気に入り画像・動画ピッカー。
- [Gallery](https://github.com/hyperoslo/Gallery) - あなたの次のお気に入り画像・動画ピッカー。
- [GPU Image](https://github.com/BradLarson/GPUImage) - GPU ベースの画像・動画処理のためのオープンソース iOS フレームワーク。
- [GPUImage2](https://github.com/BradLarson/GPUImage2) - GPUImage 2 は BSD ライセンスの Swift フレームワークで、GPU 加速の動画・画像処理を提供。
- [GPUImage2](https://github.com/BradLarson/GPUImage2) - GPUImage 2 は BSD ライセンスの Swift フレームワークで、GPU 加速の動画・画像処理を提供。
- [GPUImage3](https://github.com/BradLarson/GPUImage3) - GPUImage 3 は BSD ライセンスの Swift フレームワークで、Metal を使った GPU 加速の動画・画像処理を提供。
- [GPUImage3](https://github.com/BradLarson/GPUImage3) - GPUImage 3 は BSD ライセンスの Swift フレームワークで、Metal を使った GPU 加速の動画・画像処理を提供。
- [greedo-layout-for-ios](https://github.com/500px/greedo-layout-for-ios) - iOS 向けの完全アスペクト比グリッドレイアウト。
- [greedo-layout-for-ios](https://github.com/500px/greedo-layout-for-ios) - iOS 向けの完全アスペクト比グリッドレイアウト。
- [Harbeth](https://github.com/yangKJ/Harbeth) - GPU 加速のグラフィックス・動画・カメラフィルターフレームワークのための Metal API。🔥💥
- [Harbeth](https://github.com/yangKJ/Harbeth) - GPU 加速のグラフィックス・動画・カメラフィルターフレームワークのための Metal API。🔥💥
- [IDMPhotoBrowser](https://github.com/thiagoperes/IDMPhotoBrowser) - フォトブラウザー／ビューアー。
- [ImageButter](https://github.com/dollarshaveclub/ImageButter) - 画像の扱いをバターのように滑らかに。
- [ImageButter](https://github.com/dollarshaveclub/ImageButter) - 画像の扱いをバターのように滑らかに。
- [ImageDetect](https://github.com/Feghal/ImageDetect) - iOS 11 Vision API で画像内の顔、バーコード、テキストを検出・クロップ。
- [ImageDetect](https://github.com/Feghal/ImageDetect) - iOS 11 Vision API で画像内の顔、バーコード、テキストを検出・クロップ。
- [ImageLoaderSwift](https://github.com/hirohisa/ImageLoaderSwift) - Swift で書かれた軽量で高速な iOS 画像ローダー。
- [ImagePickerSheetController](https://github.com/lbrndnr/ImagePickerSheetController) - iMessage のカスタム写真アクションシートのような、グリッチなしの ImagePickerSheetController。
- [ImagePickerSheetController](https://github.com/lbrndnr/ImagePickerSheetController) - iMessage のカスタム写真アクションシートのような、グリッチなしの ImagePickerSheetController。
- [ImageScout](https://github.com/kaishin/ImageScout) - fastimage の Swift 実装。PNG、GIF、JPEG に対応。
- [ImageSlideshow](https://github.com/zvonicek/ImageSlideshow) - 循環スクロール、タイマー、フルスクリーンビューアー付きの Swift 画像スライドショー。
- [ImageSlideshow](https://github.com/zvonicek/ImageSlideshow) - 循環スクロール、タイマー、フルスクリーンビューアー付きの Swift 画像スライドショー。
- [ImageViewer](https://github.com/Krisiacik/ImageViewer) - Twitter 風の画像ビューアー。
- [ImageViewer](https://github.com/Krisiacik/ImageViewer) - Twitter 風の画像ビューアー。
- [Imaginary](https://github.com/hyperoslo/Imaginary) - リモート画像を、1、2、3 のように簡単に。
- [Imaginary](https://github.com/hyperoslo/Imaginary) - リモート画像を、1、2、3 のように簡単に。
- [InitialsImageView](https://github.com/bachonk/InitialsImageView) - ランダムな背景色で、ユーザープロフィール画像のプレースホルダーとして頭文字を生成する UIImageView 拡張。
- [InitialsImageView](https://github.com/bachonk/InitialsImageView) - ランダムな背景色で、ユーザープロフィール画像のプレースホルダーとして頭文字を生成する UIImageView 拡張。
- [JMCMarchingAnts](https://github.com/izotx/JMCMarchingAnts) - 画像の端にアリの行進（アニメーション）選択を追加できるライブラリ。
- [LetterAvatarKit](https://github.com/vpeschenkov/LetterAvatarKit) - 文字ベースのアバターを生成する Swift 製 UIImage 拡張。
- [Lightbox](https://github.com/hyperoslo/Lightbox) - iOS アプリのための便利で使いやすい画像ビューアー。
- [MCScratchImageView](https://github.com/Minecodecraft/MCScratchImageView) - スクラッチカードのように他のビューの表面を覆うカスタム ImageView。ユーザーが削ると下のビューが見えます。
- [MetalPetal](https://github.com/MetalPetal/MetalPetal) - [Metal](https://developer.apple.com/metal/) ベースの GPU 加速画像／動画処理フレームワーク。
- [Moa](https://github.com/evgenyneu/moa) - iOS、tvOS、macOS 向けの画像ビューのダウンロード拡張。
- [OnlyPictures](https://github.com/KiranJasvanee/OnlyPictures) - 重なり合う円形画像のソースを追加する、シンプルで柔軟な方法。
- [Paparazzo](https://github.com/avito-tech/Paparazzo) - 編集機能付きのカスタム iOS カメラと写真ピッカー。
- [PhotoEditorSDK](https://photoeditorsdk.com/) - アプリ向けの完全カスタマイズ可能な写真エディター。
- [Pixel](https://github.com/muukii/Pixel) - CoreImage を使った画像エディターとエンジン。
- [SFSafeSymbols](https://github.com/piknotech/SFSafeSymbols) - 静的型付けで Apple の SF Symbols に安全にアクセス。
- [ShadowImageView](https://github.com/olddonkey/ShadowImageView) - ShadowImageView は iOS 10 Apple Music スタイルの画像ビュー。影付きのエレガントな画像作成を助けます。
- [Sharaku](https://github.com/makomori/Sharaku) - Instagram 風の画像フィルター ViewController。
- [ShinpuruImage](https://github.com/FlexMonkey/ShinpuruImage) - Accelerate/vImage と Core Image フィルターのシンタックスシュガー。
- [SimpleImageViewer](https://github.com/aFrogleap/SimpleImageViewer) - ズームとインタラクティブな解除トランジションを備えた軽快な画像ビューアー。
- [SKPhotoBrowser](https://github.com/suzuki-0000/SKPhotoBrowser) - Facebook・Twitter のフォトブラウザーにインスパイアされた、Swift 製のシンプルなフォトブラウザー／ビューアー。
- [StyleArt](https://github.com/ileafsolutions/StyleArt) - Style Art ライブラリは COREML と事前学習済み機械学習モデルで画像を処理し、アートスタイルに変換します。
- [SwiftyAvatar](https://github.com/dkalaitzidis/SwiftyAvatar) - 円形アバター画像を作る UiImageView クラス。IBDesignable で storyboard からすべて変更可能。
- [TGLParallaxCarousel](https://github.com/taglia3/TGLParallaxCarousel) - 視差効果付きの軽量 3D リニアカルーセル。
- [TinyCrayon](https://github.com/TinyCrayon/TinyCrayon-iOS-SDK) - モバイルアプリ向けの賢く使いやすい画像マスキング・切り抜き SDK。
- [TLPhotoPicker](https://github.com/tilltue/TLPhotoPicker) - Facebook のような、複数 phasset を選択できる iOS ライブラリ。
- [Twitter Image Pipline](https://github.com/twitter/ios-twitter-image-pipeline) - アプリケーションで画像を取得・保存するための合理的なフレームワーク。
- [YUCIHighPassSkinSmoothing](https://github.com/YuAo/YUCIHighPassSkinSmoothing) - Apple の Core Image フレームワークを使ったハイパス肌補正の実装。
- [ZImageCropper](https://github.com/ZaidPathan/ZImageCropper) - 任意の形に画像を切り抜く Swift プロジェクト。

**[トップへ戻る](#contributing-and-collaborating)**

### メディア処理

*メディアの変換、トランスコード、処理ユーティリティ。*

- [EFQRCode](https://github.com/EFPrefix/EFQRCode) - Swift で QR コードを操作するより良い方法。
- [NSFWDetector](https://github.com/lovoo/NSFWDetector) - CoreML を使った NSFW（いわゆるポルノ）検出器。
- [QR Code Scanner](https://www.appcoda.com/qr-code-ios-programming-tutorial/) - QR コードの実装。
- [QRCode](https://github.com/aschuch/QRCode) - Swift で書かれた QRCode ジェネレーター。
- [SwiftOCR](https://github.com/garnele007/SwiftOCR) - Swift で書かれた高速でシンプルな OCR ライブラリ。

**[トップへ戻る](#contributing-and-collaborating)**

### PDF

*iOS で PDF ドキュメントを作成・レンダリング・操作するライブラリ。*

- [FastPdfKit](https://github.com/mobfarm/FastPdfKit) - Fast PDF 由来の PDF ドキュメントを表示するために iOS アプリへ組み込むスタティックライブラリ。
- [PDFGenerator](https://github.com/sgr-ksmt/PDFGenerator) - Swift 製のシンプルな PDF ジェネレーター。ビューや画像から PDF を生成。
- [PSPDFKit](https://pspdfkit.com/) - PDF のレンダリング、注釈の追加・編集、フォームの入力、ページの追加・編集、電子署名の表示・作成。
- [SimplePDF](https://github.com/nRewik/SimplePDF) - 手間なくシンプルな PDF を作成。
- [TPPDF](https://github.com/Techprimate/TPPDF) - コマンドと自動レイアウトで PDF を生成。

**[トップへ戻る](#contributing-and-collaborating)**

### ストリーミング

*iOS アプリ向けのライブ・オンデマンドメディアストリーミングフレームワーク。*

- [Airstream](https://github.com/qasim/Airstream) - AirPlay を使って Apple デバイス間でオーディオをストリーミングするフレームワーク。
- [HaishinKit.swift](https://github.com/shogo4405/HaishinKit.swift) - RTMP・HLS 経由でカメラとマイクをストリーミングする iOS・macOS ライブラリ。
- [LFLiveKit](https://github.com/LaiFengiOS/LFLiveKit) - H264 と AAC のハードウェアエンコード、GPUImage 美肌、rtmp 伝送、弱網でのフレーム落ち、動的ビットレート切り替えに対応。
- [StreamingKit](https://github.com/tumtumtum/StreamingKit) - macOS と iOS 向けの高速で拡張可能なギャップレス AudioPlayer／AudioStreamer。

**[トップへ戻る](#contributing-and-collaborating)**

### 動画

*iOS の動画ワークフロー向けのプレイヤー、エディター、ユーティリティ。*

- [AVAnimator](http://www.modejong.com/AVAnimator/) - 本格的な動画・オーディオ対応アプリの実装を簡単にするオープンソースの iOS ネイティブライブラリ。
- [AVPlayerViewController-Subtitles](https://github.com/mhergon/AVPlayerViewController-Subtitles) - AVPlayerViewController-Subtitles は iOS で字幕を表示するライブラリ。Swift 拡張として構築され、統合は非常に簡単です。
- [BMPlayer](https://github.com/BrikerMan/BMPlayer) - AVPlayer ベースの swift3・swift2 対応 iOS 動画プレイヤー。横向き・縦向き画面に対応し、スワイプでの音量・明るさ調整とシークに対応。
- [ios-360-videos](https://github.com/NYTimes/ios-360-videos) - NYT360Video は AVPlayer からストリーミングされる 360 度動画を再生します。
- [MHVideoPhotoGallery](https://github.com/mariohahn/MHVideoPhotoGallery) - フォト＆ビデオギャラリー。
- [MobilePlayer](https://github.com/mobileplayer/mobileplayer-ios) - 強力で完全にカスタマイズ可能な iOS メディアプレイヤー。
- [MPMoviePlayerController-Subtitles](https://github.com/mhergon/MPMoviePlayerController-Subtitles) - MPMoviePlayerController-Subtitles は iOS で字幕を表示するライブラリ。Swift 拡張として構築され、統合は非常に簡単です。
- [Periscope VideoViewController](https://github.com/gontovnik/Periscope-VideoViewController) - Periscope 風の高速巻き戻しコントロールを備えた動画ビューコントローラー。
- [Player](https://github.com/piemonte/Player) - Swift 製の動画プレイヤー。iOS や tvOS アプリでメディアを再生・ストリーミングするシンプルな方法。
- [PlayerView](https://github.com/davidlondono/PlayerView) - Player View は Swift の AVPlayer を使ったデリゲートビューです。
- [PryntTrimmerView](https://github.com/HHK1/PryntTrimmerView) - 動画内のトリム、クロップ、フレーム選択を行う UI 要素のセット。
- [swift-360-videos](https://github.com/gsabran/DDDKit) - 動画と 360 に特化したピュア Swift（SceneKit なし）の 3D ライブラリ。
- [Swift-YouTube-Player](https://github.com/gilesvangruisen/Swift-YouTube-Player) - iOS アプリに YouTube 動画を埋め込み・操作する Swift ライブラリ！
- [VersaPlayer](https://github.com/josejuanqm/VersaPlayer) - iOS、macOS、tvOS 向けの多目的 AVPlayer 実装。
- [VLC for iOS](https://github.com/videolan/vlc-ios) - VLC は iOS 向けの無料でオープンソースのマルチメディアプレイヤーです。
- [XCDYouTubeKit](https://github.com/0xced/XCDYouTubeKit) - iOS、tvOS、macOS 向けの YouTube 動画プレイヤー。
- [YoutubeKit](https://github.com/rinov/YoutubeKit) - Youtube IFrame API と YoutubeDataAPI を完全にサポートし、YouTube アプリを簡単に作れる動画プレイヤー。
- [ZFPlayer](https://github.com/renzifeng/ZFPlayer) - AVPlayer ベース。横画面・縦画面（フルスクリーン再生でも画面の向きをロック可能）に対応し、上下スワイプで音量と画面の明るさ、左右スワイプで再生位置を調整。

**[トップへ戻る](#contributing-and-collaborating)**

## メッセージング

*チャット UI、リアルタイムメッセージング SDK、アプリ内メッセージングツール。*

[プッシュ通知](#push-notifications)も参照してください

- [AsyncMessagesViewController](https://github.com/nguyenhuy/AsyncMessagesViewController) - スムーズで応答性が高く柔軟な、iOS 向けメッセージ UI ライブラリ。
- [chat-sdk-ios](https://github.com/chat-sdk/chat-sdk-ios) - Chat SDK iOS - オープンソースのモバイルメッセンジャー。
- [ChatLayout](https://github.com/ekazaev/ChatLayout) - カスタム `UICollectionViewLayout` を使ってチャット UI を構築する軽量フレームワーク。プレゼンテーションを完全に制御でき、`UICollectionView` のすべてのツールを利用できます。
- [Chatto](https://github.com/badoo/Chatto) - Swift で作られた、チャットアプリを構築する軽量フレームワーク。
- [ExyteChat](https://github.com/exyte/Chat) - 完全にカスタマイズ可能なメッセージセル、入力ビュー、内蔵メディアピッカーを備えた SwiftUI チャット UI フレームワーク。
- [MessageKit](https://github.com/MessageKit/MessageKit) - ついに登場した JSQMessagesViewController の Swift 書き直し版。
- [MessageViewController](https://github.com/GitHawkApp/MessageViewController) - iPhone X のために Swift で書かれた SlackTextViewController の代替。
- [Messenger Chat with Firebase](https://github.com/instamobile/messenger-iOS-chat-swift-firestore) - Firebase Firestore を統合した Swift メッセージングチャットアプリ。
- [XMPPFramework](https://github.com/robbiehanson/XMPPFramework) - Mac と iOS 向けの Objective-C XMPP フレームワーク。

**[トップへ戻る](#contributing-and-collaborating)**

## ネットワーキング

*HTTP クライアント、ソケットライブラリ、到達可能性ヘルパー、ネットワーキングユーティリティ。*

- [AFNetworking+RetryPolicy](https://github.com/kubatruhlar/AFNetworking-RetryPolicy) - AFNetworking が発行するリクエストにリトライロジックを設定できるようにする Objective-C カテゴリ。
- [AFNetworking-Synchronous](https://github.com/paulmelnikow/AFNetworking-Synchronous) - AFNetworking 1.x、2.x、3.x の同期リクエスト。
- [Alamofire](https://github.com/Alamofire/Alamofire) - Alamofire は AFNetworking の作者による、Swift で書かれた HTTP ネットワーキングライブラリです。
- [APIKit](https://github.com/ishkawa/APIKit) - Swift で型安全な Web API クライアントを構築するためのネットワーキングライブラリ。
- [ASIHTTPRequest](https://github.com/pokeb/asi-http-request) - HTTP リクエストのための使いやすい CFNetwork ラッパー。Objective-C、macOS、iPhone に対応。
- [Bamboots](https://github.com/mmoaay/Bamboots) - Bamboots は Alamofire ベースのネットワークリクエストフレームワークで、ビジネス開発におけるネットワークリクエストを簡単にすることを目指しています。
- [CocoaAsyncSocket](https://github.com/robbiehanson/CocoaAsyncSocket) - Mac と iOS 向けの非同期ソケットネットワーキングライブラリ。
- [EFInternetIndicator](https://github.com/ezefranca/EFInternetIndicator) - ReachabilitySwift を使った小さな Swift インターネットエラー状態インジケーター。
- [EVCloudKitDao](https://github.com/evermeer/EVCloudKitDao) - Apple の CloudKit へのアクセスを簡素化。
- [EVURLCache](https://github.com/evermeer/EVURLCache) - NSURLRequest を使うすべての Web リクエストを処理する NSURLCache のサブクラス。
- [FGRoute](https://github.com/Feghal/FGRoute) - 開発者が Wi-Fi の SSID、ルーター、デバイスの IP アドレスを取得するのを助ける使いやすいライブラリ。
- [FSNetworking](https://github.com/foursquare/FSNetworking) - Foursquare の iOS ネットワーキングライブラリ。
- [Get](https://github.com/kean/Get) - async/await を使って構築されたモダンな Swift Web API クライアント。
- [HappyDns](https://github.com/qiniu/happy-dns-objc) - DNS ライブラリ。カスタム DNS サーバーと dnspod httpdns に対応。A レコードのみ対応。
- [MMLanScan](https://github.com/mavris/MMLanScan) - iOS の LAN ネットワークスキャンライブラリ。
- [MonkeyKing](https://github.com/nixzhu/MonkeyKing) - MonkeyKing は中国のソーシャルネットワークへの投稿を支援します。
- [Moya](https://github.com/Moya/Moya) - Swift で書かれたネットワーク抽象化レイヤー。
- [Netdiag](https://github.com/qiniu/iOS-netdiag) - ネットワーク診断ライブラリ。Ping/TcpPing/Rtmp/TraceRoute/DNS/外部 IP/外部 DNS に対応。
- [Networking](https://github.com/3lvis/Networking) - 画像キャッシュ対応の NSURLSession ラッパーによる、Swift のシンプルな HTTP ネットワーキング。
- [Overcoat](https://github.com/Overcoat/Overcoat) - REST クライアントの作成をシンプルで楽しいものにする、小さくて強力なライブラリ。
- [Pitaya](https://github.com/johnlui/Pitaya) - マシン上でちょうど動く Swift HTTP / HTTPS ネットワーキングライブラリ。
- [Reachability.swift](https://github.com/ashleymills/Reachability.swift) - クロージャを使って Swift で書き直された、Apple の Reachability の代替。
- [Reactor](https://github.com/RuiAAPeres/Reactor) - あなたの RAC アーキテクチャにパワーを。
- [RealReachability](https://github.com/dustturtle/RealReachability) - ネットワークの「本当の」到達可能性を観測する必要があります。それが RealReachability の仕事です。
- [ResponseDetective](https://github.com/netguru/ResponseDetective) - ネットワークレイヤーのシャーロック・ホームズ。
- [RestKit](https://github.com/RestKit/RestKit) - RestKit は RESTful Web サービスとのやり取りをシンプルで速く楽しいものにすることを目指す、iOS 向け Objective-C フレームワークです。
- [Siesta](https://github.com/bustoutsolutions/siesta) - 状態まがりの混乱を解きほぐす、RESTful リソースのエレガントな抽象化。コールバック・デリゲートベースのネットワーキングの代替。
- [SOAPEngine](https://github.com/priore/SOAPEngine) - この汎用 SOAP クライアントにより、iOS アプリ、macOS アプリ、AppleTV アプリから Web サービスにアクセスできます。
- [SolarNetwork](https://github.com/ThreeGayHub/SolarNetwork) - Swift のエレガントなネットワーク抽象化レイヤー。
- [SwiftHTTP](https://github.com/daltoniam/SwiftHTTP) - NSURLSession の薄い Swift ラッパー。HTTP リクエストを簡素化します。
- [Swish](https://github.com/thoughtbot/Swish) - Nothing but Net(working)。
- [TermiNetwork](https://github.com/billp/TermiNetwork) - Swift 4.0 で書かれた、マルチ環境設定、ルーティング、自動デシリアライズに対応するネットワーキングライブラリ。
- [Tiercel](https://github.com/Danie1s/Tiercel) - バックグラウンドダウンロード、再起動復元、レジューム転送、タスク管理を備えた純 Swift の iOS ダウンロードフレームワーク。
- [Transporter](https://github.com/nghialv/Transporter) - アップロードとダウンロードを簡単にする小さなライブラリ。
- [TRON](https://github.com/MLSDev/TRON) - Alamofire の上に構築された軽量ネットワーク抽象化レイヤー。
- [TWRDownloadManager](https://github.com/chasseurmic/TWRDownloadManager) - NSURLSession ベースのモダンなダウンロードマネージャー。複数ファイルの非同期ダウンロード、管理、永続化を扱います。
- [ws ☁️](https://github.com/freshOS/ws) - Swift のエレガントな JSON WebService。
- [XMNetworking](https://github.com/kangzubin/XMNetworking) - AFNetworking ベースの、簡素化された表現力豊かな構文を持つ軽量で強力なネットワークライブラリ。
- [YTKNetwork](https://github.com/yuantiku/YTKNetwork) - YTKNetwork は AFNetworking ベースの高レベルリクエストユーティリティです。

**[トップへ戻る](#contributing-and-collaborating)**

## ニュースレター

*最新の iOS と Swift のニュースを追いかける厳選ニュースレター。*

- [AwesomeiOS Weekly](http://weekly.awesomeios.com) - AwesomeiOS 週報。
- [Indie iOS Focus Weekly](http://indieiosfocus.com/) - いつものニュースを超えた最高の iOS 開発リンク、チュートリアル、Tips を探しているなら？Chris Beshore がキュレーションし、毎週木曜日に発行。
- [Indie Watch](https://indie.watch/) - インディー iOS 開発者による最高のアプリを紹介する週刊ニュースレター。
- [iOS Cookies Newsletter](https://us11.campaign-archive.com/home/?u=cd1f3ed33c6527331d82107ba&id=532dc7fb64) - Swift で書かれた新しい iOS ライブラリの週次ダイジェスト。
- [iOS Dev Tools Weekly](https://iosdev.tools) - ウェブサイト、デスクトップ・モバイルアプリ、バックエンドサービスを含む最高の iOS 開発ツール。
- [iOS Dev Weekly](https://iosdevweekly.com/) - 毎週、厳選された最高の iOS 開発リンク集を購読。無料。
- [iOS Goodies](https://ios-goodies.com) - 週次 iOS ニュースレター。
- [iOS Trivia Weekly](https://wanderbit.us4.list-manage.com/subscribe?u=4e20cd8ea3a0ce09ff4619a52&id=5898a5992b) - 毎週水曜日に届く、iOS 開発についての難問 3 題。
- [Mobile Developers Cafe](https://mobiledeveloperscafe.com) - iOS コンテンツをたくさん含む、モバイル開発者向けの週刊ニュースレター。
- [raywenderlich.com Weekly](https://www.raywenderlich.com/newsletter) - 登録すると毎週 raywenderlich.com の最新チュートリアルが届きます。
- [Server-Side Swift Weekly](https://www.serverswift.tech) - サーバーサイド Swift とクロスプラットフォーム開発ツール関連のベストリンクを集めた週刊ニュースレター。[@maxdesiatov](https://twitter.com/maxdesiatov) がキュレーション
- [Swift Developments](https://andybargh.com/swiftdevelopments/) - Swift を使って自分の iOS、WatchOS、AppleTV アプリを設計・開発したい人のために、最新のリンク、動画、ツール、チュートリアルを厳選した週刊ニュースレター。
- [Swift Weekly Brief](https://swiftweekly.github.io/) - Swift.org についてのコミュニティ主導の週刊ニュースレター。Jesse Squires がキュレーションし、毎週木曜日に無料で公開。
- [SwiftLee](https://www.avanderlee.com/) - Swift、iOS、Xcode の Tips & Tricks についての週刊ブログ。

**[トップへ戻る](#contributing-and-collaborating)**

## 通知

*ローカル通知、プッシュサービス、通知 UI ツール。*

### プッシュ通知

*iOS でプッシュ通知を扱うためのライブラリとヘルパー。*

- [Knuff](https://github.com/KnuffApp/Knuff) - Apple Push Notification Service（APNS）のデバッグアプリケーション。
- [NWPusher](https://github.com/noodlewerk/NWPusher) - Apple Push Notification サービス（APNs）を操作する macOS と iOS のアプリケーションとフレームワーク。
- [PEM](https://github.com/fastlane/fastlane/tree/master/pem) - プッシュ通知プロファイルを自動生成・更新。
- [SimulatorRemoteNotifications](https://github.com/acoomans/SimulatorRemoteNotifications) - iOS シミュレーターにモックのリモート通知を送るライブラリ。

**[トップへ戻る](#contributing-and-collaborating)**

### プッシュ通知プロバイダー

*iOS デバイスにプッシュ通知を送るサードパーティサービス。*

ほとんどが有料サービスで、無料枠を設けているものもあります。

- [Batch](https://batch.com)
- [Boxcar](https://boxcar.io)
- [Braze](https://www.braze.com/)
- [Carnival](https://www.sailthru.com)
- [Catapush](https://www.catapush.com/)
- [Growth Push](https://growthpush.com) - 日本で人気。
- [Netmera](https://www.netmera.com/)
- [OneSignal](https://onesignal.com) - 無料。
- [PushBots](https://pushbots.com/)
- [Pusher](https://pusher.com/beams) - 無料で無制限。
- [Pushkin](https://github.com/Nordeus/pushkin) - 無料かつオープンソース。
- [Pushwoosh](https://www.pushwoosh.com)
- [Swrve](https://www.swrve.com)
- [Urban Airship](https://www.airship.com/platform/channels/mobile-app/)

**[トップへ戻る](#contributing-and-collaborating)**


## Objective-C ランタイム

*Objective-C ランタイムのラッパー、ライブラリ、ツール。*

- [Lumos](https://github.com/sushinoya/lumos) - Objective-C ランタイムの軽量な Swift ラッパー。
- [Swizzlean](https://github.com/rbaumbach/Swizzlean) - Objective-C の Swizzle ヘルパークラス。

**[トップへ戻る](#contributing-and-collaborating)**

## 最適化

*iOS アプリからパフォーマンスを絞り出すプロファイリングツールとテクニック。*

- [SmallStrings](https://github.com/EmergeTools/SmallStrings) - ローカライズされた .strings ファイルのサイズを 80% 削減。

**[トップへ戻る](#contributing-and-collaborating)**

## その他の Awesome リスト

*その他の素晴らしい Awesome リストはこちらに*

- [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) リスト。
- [Open Source apps](https://github.com/dkhamsing/open-source-ios-apps) オープンソース iOS アプリのリスト。

- [Awesome ARKit](https://github.com/olucurious/Awesome-ARKit) - 厳選された ARKit プロジェクトとリソースのリスト。
- [Awesome iOS Interview question list](https://github.com/dashvlas/awesome-ios-interview) - 面接官と面接者のためのガイド。これらの iOS 面接質問を復習し、実用的なヒントも得ましょう。
- [Awesome list of open source applications for macOS](https://github.com/serhii-londar/open-source-mac-os-apps) - macOS の素晴らしいオープンソースアプリケーションのリスト。
- [awesome-gists](https://github.com/vsouza/awesome-gists#ios) - 素晴らしい gist のリスト（iOS セクション）。
- [awesome-ios-books](https://github.com/bystritskiy/awesome-ios-books) - iOS 開発者向けの書籍リスト。
- [awesome-ios-developer](https://github.com/jphong1111/awesome-ios-developer) - iOS 開発者に役立つ知識と情報。
- [Awesome-iOS-Twitter](https://github.com/carolanitz/Awesome-iOS-Twitter) - 厳選された素晴らしい iOS Twitter アカウントのリスト。
- [awsome-ios-animation](https://github.com/ameizi/awesome-ios-animation) - Objective-C と Swift のライブラリを含む、厳選された iOS アニメーションのリスト。
- [CocoaConferences](https://github.com/Lascorbe/CocoaConferences) - iOS と macOS 開発者向けの Cocoa カンファレンスのリスト。
- [Curated-Resources-for-Learning-Swift](https://hackr.io/tutorials/learn-ios-swift) - 開発者がおすすめする厳選学習リソースのリスト。
- [Doloffer Guide](github.com/Doloffer-g/guide) - DolOffer 公式アフィリエイト＆クリエイターリソース
- [example-ios-apps](https://github.com/jogendra/example-ios-apps) - Swift で開発されたオープンソースのサンプル iOS アプリの厳選リスト。
- [iOS-Learning-Materials](https://github.com/jVirus/iOS-Learning-Materials) - iOS をさらに深く学ぶのに役立つ記事、Web リソース、チュートリアル、コードリポジトリの厳選リスト。

**[トップへ戻る](#contributing-and-collaborating)**

## パース

*一般的なデータ形式のパーサーとシリアライザー。*

### CSV

*Swift と Objective-C で CSV ファイルを読み書きするライブラリ。*

- [CodableCSV](https://github.com/dehesa/CodableCSV) - 行単位・フィールド単位、または Swift の Codable インターフェースで CSV ファイルを読み書き。
- [CSV.swift](https://github.com/yaslab/CSV.swift) - Swift で書かれた CSV の読み書きライブラリ。
- [CSwiftV](https://github.com/Daniel1of1/CSwiftV) - rfc4180 に準拠した Swift 製 csv パーサー。

**[トップへ戻る](#contributing-and-collaborating)**

### JSON

*JSON のパース、マッピング、シリアライズのライブラリ。*

- [AlamofireObjectMapper](https://github.com/tristanhimmelman/AlamofireObjectMapper) - ObjectMapper を使って JSON レスポンスデータを Swift オブジェクトに変換する Alamofire 拡張。
- [Arrow 🏹](https://github.com/freshOS/Arrow) - Swift のエレガントな JSON パース。
- [Elevate](https://github.com/Nike-Inc/Elevate) - Elevate は Swift を活かしてパースをシンプルで信頼性が高く組み合わせやすくする JSON パースフレームワークです。
- [FastEasyMapping](https://github.com/Yalantis/FastEasyMapping) - JSON を高速にシリアライズ・デシリアライズ。
- [FlatBuffersSwift](https://github.com/mzaks/FlatBuffersSwift) - このプロジェクトは FlatBuffers（効率的なクロスプラットフォームのシリアライズライブラリ）を Swift に導入します。
- [Groot](https://github.com/gonzalezreal/Groot) - JSON の辞書と配列を Core Data の管理オブジェクトと相互変換。
- [HandyJSON](https://github.com/alibaba/handyjson) - Swift 向けの使い勝手の良い JSON オブジェクト シリアライズ／デシリアライズライブラリ。
- [Himotoki](https://github.com/ikesyo/Himotoki) - 純粋に Swift で書かれた型安全な JSON デコードライブラリ。
- [JASON](https://github.com/delba/JASON) - 優れたパフォーマンスと便利な演算子を備えた JSON パース。
- [JAYSON](https://github.com/muukii/JAYSON) - 厳格でスケーラブルな JSON ライブラリ。
- [jsoncafe.com](http://www.jsoncafe.com/) - JSON からモデルクラスを生成するオンラインのテンプレート駆動ジェネレーター。
- [JSONExport](https://github.com/Ahmed-Ali/JSONExport) - JSONExport は macOS のデスクトップアプリケーションで、JSON オブジェクトをお好みの言語のモデルクラス（関連するコンストラクター、ユーティリティメソッド、セッター、ゲッター付き）としてエクスポートできます。
- [JSONModel](https://github.com/JSONModel/JSONModel) - JSON の魔法のようなデータモデリングフレームワーク。強力でアトミックなスマートなデータモデルクラスを素早く作成。
- [Mantle](https://github.com/Mantle/Mantle) - Cocoa と Cocoa Touch のモデルフレームワーク。
- [Marshal](https://github.com/utahiosmac/Marshal) - 型のない荒野である [String: Any] をマーシャリング（プロトコルベース）。
- [MJExtension](https://github.com/CoderMJLee/MJExtension) - JSON とモデル間の高速で便利な非侵入的な変換。モデルクラスは他の基底クラスを継承する必要がなく、モデルファイルを修正する必要もありません。
- [ObjectMapper](https://github.com/tristanhimmelman/ObjectMapper) - モデルオブジェクト（クラスと構造体）と JSON の相互変換を簡単にする Swift 製フレームワーク。
- [PMHTTP](https://github.com/postmates/PMHTTP) - REST と JSON に焦点を当てた Swift/Obj-C HTTP フレームワーク。
- [PMJSON](https://github.com/postmates/PMJSON) - 純 Swift の JSON エンコード／デコードライブラリ。
- [PropertyMapper](https://github.com/krzysztofzablocki/PropertyMapper) - 最小限のコードでのデータマッピングと検証。
- [SBJson](https://github.com/SBJson/SBJson) - このフレームワークは Objective-C で厳格な JSON パーサーとジェネレーターを実装しています。
- [SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON) - Swift で JSON データを扱うより良い方法。
- [SwiftyJSONAccelerator](https://github.com/insanoid/SwiftyJSONAccelerator) - JSON から Codeable 対応の Swift 5 モデルファイルを生成。

**[トップへ戻る](#contributing-and-collaborating)**

### XML & HTML

*XML と HTML のパーサー、セレクター、シリアライザー。*

- [AEXML](https://github.com/tadija/AEXML) - Swift で書かれたシンプルで軽量な XML パーサー。
- [Fuzi](https://github.com/cezheng/Fuzi) - XPath と CSS に対応した高速・軽量な Swift 製 XML & HTML パーサー。
- [HTMLKit](https://github.com/iabudiab/HTMLKit) - 日常の HTML ニーズに応える Objective-C フレームワーク。
- [Kanna](https://github.com/tid-kijyun/Kanna)  - Kanna(鉋) は macOS/iOS 向けの XML/HTML パーサーです。
- [Ono](https://github.com/mattt/Ono) - iOS と macOS で XML と HTML を扱う賢明な方法。
- [SwiftyXML](https://github.com/chenyunguiMilook/SwiftyXML) - Swift 4 で XML データを扱う最も swifty な方法。
- [SwiftyXMLParser](https://github.com/yahoojapan/SwiftyXMLParser) - Swift で実装されたシンプルな XML パーサー。
- [SWXMLHash](https://github.com/drmohundro/SWXMLHash) - Swift でのシンプルな XML パース。
- [XMLCoder](https://github.com/MaxDesiatov/XMLCoder) - Swift の `Codable` プロトコルを使った XML のエンコーダー＆デコーダー。
- [ZMarkupParser](https://github.com/ZhgChgLi/ZMarkupParser) - HTML 文字列をカスタムスタイルとタグ付きの NSAttributedString に変換。

**[トップへ戻る](#contributing-and-collaborating)**

### その他のパース

*YAML、INI、Markdown などの追加フォーマットのパーサー。*

- [CoreXLSX](https://github.com/MaxDesiatov/CoreXLSX) - 純 Swift による Excel スプレッドシート（XLSX）形式のサポート。
- [CreateAPI](https://github.com/CreateAPI/CreateAPI) - Swift で書かれた、OpenAPI 仕様のための Swift コード生成ツール。
- [Erik](https://github.com/phimage/Erik) - Erik は WebKit ベースのヘッドレスブラウザーです。ヘッドレスブラウザーにより、機能テストの実行や、JavaScript を使った Web ページへのアクセス・操作が可能になります。
- [FeedKit](https://github.com/nmdias/FeedKit) - Swift で書かれた RSS と Atom フィードのパーサー。
- [NetNewsWire](https://github.com/Ranchero-Software/NetNewsWire) - macOS と iOS 向けの無料でオープンソースのフィードリーダーです。
- [SVGView](https://github.com/exyte/SVGView) - SwiftUI で書かれた SVG パーサーとレンダラー。
- [SwiftCssParser](https://github.com/100mango/SwiftCssParser) - 純 Swift で書かれた強力で拡張可能な CSS パーサー。
- [URLEmbeddedView](https://github.com/marty-suzuki/URLEmbeddedView) - Open Graph Protocol に適合するオブジェクトを自動でキャッシュし、URL 埋め込みカードとして表示します。
- [URLPreview](https://github.com/itsmeichigo/URLPreview) - Web ページのプレビュー情報を表示する NSURL 拡張。
- [WKZombie](https://github.com/mkoehnke/WKZombie) - WKZombie はユーザーインターフェースや API を必要とせずに Web サイト内をナビゲートしてデータを収集する、iOS/macOS 向けの Swift フレームワークです。ヘッドレスブラウザーとも呼ばれます。自動テストの実行や JavaScript を使った Web サイトの操作に利用できます。

**[トップへ戻る](#contributing-and-collaborating)**

## Passbook

*Apple Wallet のパスを作成・管理するライブラリ。*

- [passbook](https://github.com/frozon/passbook) - Passbook gem で iOS 6+ の passbook 用 pkpass を作成できます。
- [Passkit](https://passkit.com) - Passbook パスの設計、作成、検証。

**[トップへ戻る](#contributing-and-collaborating)**

## 決済

*アプリ内課金、サブスクリプション、決済ゲートウェイのヘルパー。*

- [Braintree](https://www.braintreepayments.com) - 最初の 5 万ドルまで無料の決済処理。バックエンドが必要。
- [Caishen](https://github.com/prolificinteractive/Caishen) - iOS 向けの決済カード UI とバリデーター。
- [CreditCardForm-iOS](https://github.com/orazz/CreditCardForm-iOS) - CreditCardForm は実際のクレジットカードを再現する UI を開発者が作れるようにする iOS フレームワークです。
- [FramesIos](https://github.com/checkout/frames-ios) - Swift 製の決済フォーム UI とユーティリティ。
- [iCard](https://github.com/eliakorkmaz/iCard) - SnapKit DSL を使った Swift 製の銀行カードジェネレーター。
- [merchantkit](https://github.com/benjaminmayo/merchantkit) - iOS 向けのモダンなアプリ内課金管理フレームワーク。
- [MFCard](https://github.com/MobileFirstInc/MFCard) - iOS アプリへのクレジットカード決済の簡単な統合／カスタマイズ可能なカード UI。
- [Moltin](https://www.moltin.com/developer/swift-ecommerce-sdk/) - シンプルな SDK でアプリに EC を追加。ストアを作って実物の商品を販売でき、バックエンド不要。
- [monza](https://github.com/gabrielgarza/monza) - Rails 用 Ruby Gem - 自動更新サブスクリプションを含む iTunes アプリ内課金レシートの簡単な検証。
- [PatronKit](https://github.com/MosheBerman/PatronKit) - アプリにパトロン（支援）機能を追加するフレームワーク。
- [RMStore](https://github.com/robotmedia/RMStore) - アプリ内課金のための軽量 iOS ライブラリ。
- [Stripe](https://stripe.com) - PAY によるアプリへの決済統合。バックエンドの知識が少ない人に適しています。
- [SwiftyStoreKit](https://github.com/bizz84/SwiftyStoreKit) - iOS 8.0+ と macOS 9.0+ 向けの軽量アプリ内課金 Swift フレームワーク
- [TPInAppReceipt](https://github.com/tikhop/TPInAppReceipt) - App Store レシートの読み取りと検証。

**[トップへ戻る](#contributing-and-collaborating)**

## パーミッション

*iOS のユーザー権限を要求・管理する統一 API と UI。*

- [ClusterPrePermissions](https://github.com/rsattar/ClusterPrePermissions) - システムの権限要求の前に、開発者が独自のダイアログでユーザーに許可を求められるようにする再利用可能な事前権限ユーティリティ。
- [ISHPermissionKit](https://github.com/iosphere/ISHPermissionKit) - iOS アプリがユーザー権限を要求する統一的な方法。
- [PAPermissions](https://github.com/pascalbros/PAPermissions) - iOS で権限を求めるための統一 API。
- [Permission](https://github.com/delba/Permission) - iOS で権限を求めるための統一 API。
- [Proposer](https://github.com/nixzhu/Proposer) - 権限リクエストを簡単に（カメラ、写真、マイク、連絡先、位置情報に対応）。
- [SPPermissions](https://github.com/ivanvorobei/SPPermissions) - Swift で権限を要求。List、Dialog、ネイティブインターフェースを利用可能。権限状態の確認もできます。

**[トップへ戻る](#contributing-and-collaborating)**

## ポッドキャスト

*iOS と Swift を学び続けるのに価値のあるポッドキャスト。*

- [App Story](http://www.appstorypodcast.com)
- [Consult](https://consultpodcast.com/#_=_)
- [Core Intuition](http://coreint.org/)
- [Debug](https://www.imore.com/debug)
- [Fireside Swift](https://podcasts.apple.com/us/podcast/fireside-swift/id1269435221?mt=2)
- [iPhreaks](https://devchat.tv/iphreaks/)
- [More Than Just Code](https://mtjc.fireside.fm/)
- [Release Notes](https://releasenotes.tv/)
- [Runtime](https://spec.fm/podcasts/runtime)
- [Stacktrace](https://stacktracepodcast.fm)
- [Swift by Sundell](https://www.swiftbysundell.com/podcast/)
- [Swift Playhouse](http://www.swiftplayhouse.com/)
- [Swift Unwrapped](https://spec.fm/podcasts/swift-unwrapped)
- [The Ray Wenderlich Podcast](https://www.raywenderlich.com/podcast)
- [Under the Radar](https://www.relay.fm/radar)

**[トップへ戻る](#contributing-and-collaborating)**

## プロジェクトセットアップ

*新しい iOS アプリのためのプロジェクトジェネレーター、テンプレート、スキャフォールディングツール。*

- [chairs](https://github.com/orta/chairs) - iOS シミュレーターの Documents を入れ替える。
- [crafter](https://github.com/krzysztofzablocki/crafter) - カスタム DSL 構文で iOS プロジェクトのテンプレートを設定できる CLI。シンプルでかなり強力。
- [swift5-module-template](https://github.com/fulldecent/swift5-module-template) - 他の人がプロジェクトに取り込みたいあらゆる Swift 5 モジュールの出発点。
- [SwiftPlate](https://github.com/JohnSundell/SwiftPlate) - コマンドラインからクロスプラットフォームの Swift フレームワークプロジェクトを簡単に生成。
- [Tuist](https://github.com/tuist/tuist) - Xcode プロジェクトを大規模に作成・維持・操作するツール。
- [xcproj](https://github.com/tuist/xcodeproj) - Xcode プロジェクトの読み取りと更新。

**[トップへ戻る](#contributing-and-collaborating)**

### プロトタイピング

*iOS アプリのアイデアと UI フローを素早くプロトタイピングするツール。*

- [FluidUI](https://www.fluidui.com)
- [Framer](https://www.framer.com/)
- [Principle](https://principleformac.com/)
- [Proto.io](https://proto.io/)

**[トップへ戻る](#contributing-and-collaborating)**

## ラピッド開発

*日々の iOS 開発を加速するように設計されたフレームワークとツール。*

- [Playgrounds](https://github.com/krzysztofzablocki/Playgrounds) - 超高速なプロトタイピング／学習のための Objective-C 用 Playgrounds。
- [STV Framework](http://www.sensiblecocoa.com) - ネイティブでビジュアルな iOS 開発。

**[トップへ戻る](#contributing-and-collaborating)**

## リアクティブプログラミング

*Swift と Objective-C 向けのリアクティブ・関数型リアクティブライブラリ。*

- [CwlSignal](https://github.com/mattgallagher/CwlSignal) リアクティブプログラミングのための Swift フレームワーク。
- [Hanson](https://github.com/blendle/Hanson) - KVO と NotificationCenter に対応した、Swift での軽量なオブザベーションとバインディング。
- [JASONETTE-iOS](https://github.com/Jasonette/JASONETTE-iOS) - HTTP 上のネイティブアプリ。JSON だけでネイティブ iOS アプリを作れます。
- [LightweightObservable](https://github.com/fxm90/LightweightObservable) - 購読できるオブザーバブルシーケンスの軽量実装。
- [NSObject-Rx](https://github.com/RxSwiftCommunity/NSObject-Rx) - rx_disposeBag を含む、NSObject 上の便利な RxSwift 拡張。
- [Observable](https://github.com/roberthein/Observable) - Swift で値を監視する最も簡単な方法。
- [OneWay](https://github.com/DevYeom/OneWay) - 単方向データフローによる状態管理のための Swift ライブラリ。
- [OpenCombine](https://github.com/broadwaylamb/OpenCombine) — 時間とともに値を処理する Apple の Combine フレームワークのオープンソース実装。
- [ReactiveCocoa](https://github.com/ReactiveCocoa/ReactiveCocoa) - 時間とともに流れる値のストリーム。
- [ReactiveCoreData](https://github.com/apparentsoft/ReactiveCoreData) - ReactiveCoreData（RCD）は Core Data を ReactiveCocoa（RAC）の世界に持ち込む試みです。
- [ReactiveKit](https://github.com/DeclarativeHub/ReactiveKit) - ReactiveKit はリアクティブ・関数型リアクティブプログラミングのための Swift フレームワークのコレクションです。
- [ReactiveSwift](https://github.com/ReactiveCocoa/ReactiveSwift) - ReactiveCocoa チームによる、時間とともに流れる値のストリーム。
- [ReactiveTask](https://github.com/Carthage/ReactiveTask) - プロセス起動のための柔軟なストリームベースの抽象化。
- [Reactor](https://github.com/ReactorSwift/Reactor) - Elm と Redux にインスパイアされた、慣用的な Swift による単方向データフロー。
- [ReSwift](https://github.com/ReSwift/ReSwift) - Redux にインスパイアされた Swift の単方向データフロー。
- [RxAlamofire](https://github.com/RxSwiftCommunity/RxAlamofire) - エレガントな Swift HTTP ネットワーキング Alamofire の RxSwift ラッパー。
- [RxAnimated](https://github.com/RxSwiftCommunity/RxAnimated) - アニメーション付きの RxCocoa バインディング。
- [RxBluetoothKit](https://github.com/Polidea/RxBluetoothKit) - RxSwift 向けの iOS と macOS Bluetooth ライブラリ。
- [RxCoordinator](https://github.com/quickbirdstudios/XCoordinator) -  coordinator パターンに基づく強力な iOS ナビゲーションライブラリ。
- [RxCoreData](https://github.com/RxSwiftCommunity/RxCoreData) - Core Data の RxSwift 拡張。
- [RxGesture](https://github.com/RxSwiftCommunity/RxGesture) - ビュージェスチャーの RxSwift リアクティブラッパー。
- [RxKeyboard](https://github.com/RxSwiftCommunity/RxKeyboard) - iOS のリアクティブキーボード。
- [RxMediaPicker](https://github.com/RxSwiftCommunity/RxMediaPicker) - UIImagePickerController を包むリアクティブラッパー。
- [RxRealm](https://github.com/RxSwiftCommunity/RxRealm) - Realm のコレクション型の Rx ラッパー。
- [RxSwift](https://github.com/ReactiveX/RxSwift) - Swift でのリアクティブプログラミング。
- [Verge](https://github.com/muukii/Verge) - Verge は UIKit と SwiftUI 向けの、より高速でスケーラブルな状態管理ライブラリです
- [VueFlux](https://github.com/ra1028/VueFlux) - Vuex と Flux にインスパイアされた、Swift の単方向データフロー状態管理アーキテクチャ。

**[トップへ戻る](#contributing-and-collaborating)**

### React 風

*宣言的な iOS インターフェースを構築する、React にインスパイアされた UI ライブラリ。*

- [Render](https://github.com/alexdrone/Render) - React 流の Swift と UIKit。

**[トップへ戻る](#contributing-and-collaborating)**

## リファレンス

*iOS 開発者のためのチートシート、厳選ドキュメント、参考資料。*

- [Awesome-ios](https://kandi.openweaver.com/swift/vsouza/awesome-ios) - 厳選された iOS エコシステムのリスト。
- [Objective-C Cheat Sheet](https://github.com/iwasrobbed/Objective-C-CheatSheet) - Objective-C の一般的な高レベルトピックのクイックリファレンスチートシート。
- [Swift Cheat Sheet](https://github.com/iwasrobbed/Swift-CheatSheet) - Swift の一般的な高レベルトピックのクイックリファレンスチートシート。
- [SwiftSnippets](https://github.com/onmyway133/SwiftSnippets) - Xcode で使える Swift スニペットのコレクション。
- [WWDC-Recap](https://erenkabakci.github.io/WWDC-Recap/) - WWDC 19 と 17 のセッション要約を Markdown 形式でまとめたコレクション。

**[トップへ戻る](#contributing-and-collaborating)**

## リフレクション

*実行時リフレクション、ミラーリング、イントロスペクションのヘルパー。*

- [EVReflection](https://github.com/evermeer/EVReflection) - リフレクションによる JSON のエンコードとデコード。NSDictionary、NSCoding、Printable、Hashable、Equatable に対応。
- [JSONNeverDie](https://github.com/johnlui/JSONNeverDie) - JSON からモデルへの自動リフレクションツール。使いやすい JSON エンコーダー／デコーダー。決して死なないことを目指します。
- [Reflect](https://github.com/CharlinFeng/Reflect) - リフレクション、Dict2Model、Model2Dict、Archive。
- [Reflection](https://github.com/Zewo/Reflection) - Reflection は型の動的構築を含む、実行時の高度なリフレクションのための API を提供します。
- [Runtime](https://github.com/wickwirew/Runtime) - 型情報の閲覧やプロパティの動的な取得・設定のための Swift ランタイムライブラリ。
- [SwiftKVC](https://github.com/bradhilton/SwiftKVC) - ネイティブな Swift のクラスと構造体のためのキー値コーディング（KVC）。

**[トップへ戻る](#contributing-and-collaborating)**

## 正規表現

*Swift と Objective-C 向けの正規表現ライブラリと DSL。*

- [PySwiftyRegex](https://github.com/cezheng/PySwiftyRegex) - Pythonic な方法で Swift の正規表現を簡単に扱う。
- [Regex](https://github.com/sharplet/Regex) - NSRegularExpression を基盤とする Regex 型を提供する Swift マイクロフレームワーク。
- [Regex](https://github.com/crossroadlabs/Regex) - Swift のための正規表現。
- [SwiftRegex](https://github.com/kasei/SwiftRegex) - Swift 向けの Perl 風 Regex =~ 演算子。

**[トップへ戻る](#contributing-and-collaborating)**

## SDK

*外部サービスを iOS アプリに統合するための公式・サードパーティ SDK。*

### 公式

*プラットフォームベンダーが公式にサポートする SDK。*

- [Adapty](https://github.com/adaptyteam/AdaptySDK-iOS) - 3 行のコードでアプリ内サブスクリプションとその a/b テストを統合。
- [algoliasearch-client-swift](https://github.com/algolia/algoliasearch-client-swift) - Swift 向け Algolia Search API クライアント。
- [Apphud](https://github.com/apphud/ApphudSDK) - サーバーコード不要で 30 分以内に自動更新サブスクリプションと通常のアプリ内課金を統合する完全なソリューション。
- [AWS](https://github.com/aws-amplify/aws-sdk-ios) Amazon Web Services の iOS 向けモバイル SDK。
- [Box](https://github.com/box/box-ios-sdk) Box API の iOS + macOS SDK。
- [CareKit](https://github.com/carekit-apple/CareKit) - CareKit は、人々が健康をよりよく理解・管理できるアプリを作るためのオープンソースソフトウェアフレームワークです。Apple 製。
- [Dropbox](https://www.dropbox.com/lp/developers) Drop-ins と Dropbox Core API の SDK。
- [Evernote](https://github.com/evernote/evernote-cloud-sdk-ios) Evernote iOS SDK。
- [Facebook](https://github.com/facebook/facebook-ios-sdk) Facebook iOS SDK。
- [Firebase](https://firebase.google.com/docs/ios/setup) モバイル（および Web）アプリケーション開発プラットフォーム。
- [Google Analytics](https://developers.google.com/analytics/devguides/collection/ios/v3/) Google Analytics iOS SDK。
- [Primer](https://www.goprimer.com/) - ビジュアルエディター上でパーソナライズされたランディング画面、サインアップ、ログインフローを作れる簡単な SDK。a/b/n テストとアナリティクスを内蔵。
- [ResearchKit](https://github.com/ResearchKit/ResearchKit) ResearchKit は、医学研究やその他の研究プロジェクト向けのアプリを簡単に作れるオープンソースソフトウェアフレームワークです。
- [rides-ios-sdk](https://github.com/uber/rides-ios-sdk) - Uber Rides iOS SDK（ベータ）。
- [Shopify](https://github.com/Shopify/mobile-buy-sdk-ios) - Shopify の Mobile Buy SDK により、モバイルアプリ内での実物の商品販売が簡単になります。
- [Spotify](https://github.com/spotify/ios-sdk) Spotify iOS SDK。
- [Stripe](https://github.com/stripe/stripe-ios) iOS と macOS 向けの Stripe バインディング。
- [Tumblr](https://github.com/tumblr/TMTumblrSDK) Tumblr のデータを iOS や macOS アプリに簡単に統合するライブラリ。
- [Venmo](#payments)

**[トップへ戻る](#contributing-and-collaborating)**

### 非公式

*人気サービスのためのコミュニティ管理の SDK とクライアントライブラリ。*

- [das-quadrat](https://github.com/Constantine-Fry/das-quadrat) - Foursquare API の Swift ラッパー。iOS と macOS。
- [Easy Social](https://github.com/pjebs/EasySocial) - Twitter と Facebook の統合。
- [FHSTwitterEngine](https://github.com/natesymer/FHSTwitterEngine) Cocoa 開発者向けの Twitter API。
- [ForecastIO](https://github.com/sxg/ForecastIO) - Forecast.io Dark Sky API の Swift ライブラリ。
- [InstagramKit](https://github.com/shyambhat/InstagramKit) - Instagram iOS SDK。
- [objectiveflickr](https://github.com/lukhnos/objectiveflickr) - ObjectiveFlickr。Objective-C 向けの Flickr API フレームワーク。
- [PokemonKit](https://github.com/ContinuousLearning/PokemonKit) - Pokeapi ラッパー。Swift 製。
- [Spartan](https://github.com/Daltron/Spartan) - Swift で書かれた、iOS と macOS 向けのエレガントな Spotify Web API ライブラリ。
- [STTwitter](https://github.com/nst/STTwitter) Twitter REST API 1.1 向けの、安定して成熟した包括的な Objective-C ライブラリ。
- [Swifter](https://github.com/mattdonnelly/Swifter) - :bird: Swift で書かれた、iOS と macOS 向けの Twitter フレームワーク。
- [Swiftly Salesforce](https://github.com/mike4aday/SwiftlySalesforce) - Swift と promise を使って Salesforce と統合する iOS アプリを簡単に構築できるフレームワーク。
- [SwiftyVK](https://github.com/SwiftyVK/SwiftyVK) Swift で書かれた、VK ソーシャルネットワーク API と簡単にやり取りするためのライブラリ。
- [UnsplashKit](https://github.com/modo-studio/UnsplashKit) - Unsplash の Swift クライアント。
- [waterwheel.swift](https://github.com/kylebrowning/waterwheel.swift) - Waterwheel Swift SDK は、iOS、macOS、tvOS、watchOS アプリケーションを Drupal 7 と 8 にネイティブに接続するクラスを提供します。

**[トップへ戻る](#contributing-and-collaborating)**

## セキュリティ

*iOS アプリ、データ、ユーザー資格情報を保護するツールとライブラリ。*

- [BiometricAuthentication](https://github.com/rushisangani/BiometricAuthentication) - BiometricAuthentication を使ってアプリで Apple FaceID や TouchID 認証を利用。
- [cocoapods-keys](https://github.com/orta/cocoapods-keys) - 環境変数やアプリキーを保存するキー値ストア。
- [LTHPasscodeViewController](https://github.com/rolandleth/LTHPasscodeViewController) - （設定アプリの）iOS パスコードロック画面の再現。TouchID とシンプル（可変長）／複雑なパスコードに対応。
- [SecurePropertyStorage](https://github.com/alexruperez/SecurePropertyStorage) - Swift のプロパティラッパーを使ってプロパティの安全なストレージを定義するのを助けます。
- [simple-touch](https://github.com/simple-machines/simple-touch) - iOS の生体認証サービス（Touch ID）のための非常にシンプルな Swift ラッパー。
- [Smile-Lock](https://github.com/recruit-lifestyle/Smile-Lock) - 美しいパスコードロックビューを作るライブラリ。
- [SwiftPasscodeLock](https://github.com/yankodimitrov/SwiftPasscodeLock) - Swift で書かれた、TouchID 認証付きの iOS パスコードロック。
- [TOPasscodeViewController](https://github.com/timoliver/TOPasscodeViewController) - iOS 向けのモーダル パスコード入力・検証ビューコントローラー。
- [zxcvbn-ios](https://github.com/dropbox/zxcvbn-ios) - 現実的なパスワード強度推定器。

**[トップへ戻る](#contributing-and-collaborating)**

### 暗号化

*暗号化、ハッシュ、デジタル署名のための暗号ライブラリ。*

- [Arcane](https://github.com/onmyway133/Arcane) - Swift での CommonCrypto の軽量ラッパー。
- [CryptoSwift](https://github.com/krzyzanowskim/CryptoSwift) - Swift プログラミング言語で実装された、Swift 向けの暗号関連関数とヘルパー。
- [IDZSwiftCommonCrypto](https://github.com/iosdevzone/IDZSwiftCommonCrypto) - Swift で書かれた Apple の Common Crypto ライブラリのラッパー。
- [JOSESwift](https://github.com/airsidemobile/JOSESwift) - JOSE 標準の JWS、JWE、JWK を実装した Swift 製フレームワーク。
- [Obfuscator-iOS](https://github.com/pjebs/Obfuscator-iOS) - ハードコードされたセキュリティ上重要な文字列をすべて難読化してアプリを保護。
- [RNCryptor](https://github.com/RNCryptor/RNCryptor) - Swift による iOS と Mac 向けの CCCryptor（AES 暗号化）ラッパー。-- ObjC 版は RNCryptor/RNCryptor-objc を参照。
- [SipHash](https://github.com/attaswift/SipHash) - SipHash アルゴリズムによる、Swift でのシンプルで安全なハッシュ。
- [SwCrypt](https://github.com/soyersoyer/SwCrypt) - iOS と macOS で CommonCrypto を使って、RSA 公開鍵・秘密鍵の生成、RSA・AES の暗号化／復号、RSA の署名・検証を Swift で実行。
- [swift-sodium](https://github.com/jedisct1/swift-sodium) - iOS 向けの安全で使いやすい暗号ライブラリ。
- [SwiftHash](https://github.com/onmyway133/SwiftHash) - Swift でのハッシュ。
- [SwiftyRSA](https://github.com/TakeScoop/SwiftyRSA) - Swift での RSA 公開鍵・秘密鍵暗号化。
- [Themis](https://github.com/cossacklabs/themis) - 基本的な非対称暗号、前方秘匿性を持つセキュアメッセージング、セキュアなデータストレージを提供する高レベル暗号ライブラリ。iOS/macOS、Android、各種サーバーサイドプラットフォームに対応。

**[トップへ戻る](#contributing-and-collaborating)**

### キーチェーン

*iOS で機密情報と資格情報を安全に保存するキーチェーンラッパー。*

- [KeychainAccess](https://github.com/kishikawakatsumi/KeychainAccess) - iOS と macOS で動く、シンプルなキーチェーン Swift ラッパー。
- [Lockbox](https://github.com/granoff/Lockbox) - データをキーチェーンに安全に保存する Objective-C ユーティリティクラス。
- [Locksmith](https://github.com/matthewpalmer/Locksmith) - Swift でキーチェーンを扱うための、プロトコル指向の強力なライブラリ。
- [UICKeyChainStore](https://github.com/kishikawakatsumi/UICKeyChainStore) - UICKeyChainStore は iOS のキーチェーンのシンプルなラッパーです。
- [Valet](https://github.com/square/Valet) - キーチェーンの仕組みをまったく知らなくても、iOS や macOS のキーチェーンにデータを安全に保存。

**[トップへ戻る](#contributing-and-collaborating)**

## サーバー

*コルーチン、Linux、MacOS、iOS、Apache モジュール、非同期呼び出し、libuv などをサポートするサーバーサイドプロジェクト。*

- [ApacheExpress](https://github.com/ApacheExpress/ApacheExpress) - Swift で Apache モジュールを書こう！
- [CocoaHTTPServer](https://github.com/robbiehanson/CocoaHTTPServer) - macOS や iOS アプリケーション向けの、小さく軽量で組み込み可能な HTTP サーバー。
- [Curassow](https://github.com/kylef-archive/Curassow) - プリフォークワーカーモデルを使う Swift HTTP サーバー。
- [Embassy](https://github.com/envoy/Embassy) - 純 Swift で書かれた超軽量の非同期 HTTP サーバーライブラリ。iOS / MacOS / Linux で動作。
- [Express](https://github.com/crossroadlabs/Express) - Swift Express は Swift で書かれた、シンプルながら意見が強すぎない Web アプリケーションサーバーです。
- [Jobs](https://github.com/BrettRToomey/Jobs) - Swift バックエンドのためのジョブシステム。
- [Kitura](https://github.com/IBM-Swift/Kitura) - Swift の Web フレームワークと HTTP サーバー。
- [Lightning](https://github.com/skylab-inc/Lightning) - Swift のマルチプラットフォーム Web・ネットワーキングフレームワーク。
- [NetworkObjects](https://github.com/colemancda/NetworkObjects) - Swift バックエンド／サーバーフレームワーク（純 Swift、Linux 対応）。
- [Noze.io](http://noze.io) - イベント駆動 I/O ストリーム。いわば Swift 版 Node.js。
- [Perfect](https://github.com/PerfectlySoft/Perfect) - サーバーサイド Swift。Perfect ライブラリ、アプリケーションサーバー、コネクター、サンプルアプリ。
- [Redis](https://github.com/vapor/redis) - 元のプロトコル仕様から実装された純 Swift Redis クライアント。macOS + Linux 対応。
- [smoke-framework](https://github.com/amzn/smoke-framework) - Swift プログラミング言語で書かれた軽量サーバーサイドサービスフレームワーク。
- [swift-http](https://github.com/huytd/swift-http) - Linux と macOS 上の Swift 向け HTTP 実装。
- [Swifter](https://github.com/httpswift/swifter) - Swift プログラミング言語で書かれた小さな HTTP サーバーエンジン。
- [SwiftGD](https://github.com/twostraws/swiftgd) - libgd のシンプルな Swift ラッパー。
- [Swifton](https://github.com/sauliusgrigaitis/Swifton) - Linux と macOS で動く、Ruby on Rails にインスパイアされた Swift Web フレームワーク。
- [swiftra](https://github.com/takebayashi/swiftra) - Sinatra 風の DSL で Swift の Web アプリを開発。
- [Taylor](https://github.com/izqui/Taylor) - Swift で HTTP Web サーバーを書くための軽量ライブラリ。
- [Vapor](https://github.com/vapor/vapor) - iOS、macOS、Ubuntu で動くエレガントな Swift Web フレームワーク。
- [Zewo](https://github.com/Zewo/Zewo) - コルーチンで駆動される、macOS と Linux 上の Swift Web サーバーアプリケーション向け軽量ライブラリ。

**[トップへ戻る](#contributing-and-collaborating)**

## スタイルガイド

*クリーンな Swift と Objective-C のコードを書くためのコミュニティスタイルガイド。*

- [Futurice iOS Good Practices](https://github.com/futurice/ios-good-practices) - [@futurice](https://github.com/futurice) による iOS 入門ガイドと良いプラクティスの提案。
- [Objective-C Coding Convention and Best Practices](https://gist.github.com/soffes/812796) - コーディング規約をまとめた gist。
- [Prolific Interactive Style Guide](https://github.com/prolificinteractive/swift-style-guide) - Swift のスタイルガイド。
- [raywenderlich Style Guide](https://github.com/raywenderlich/objective-c-style-guide) - raywenderlich.com のコーディング規約を定めたスタイルガイド。
- [Spotify Objective-C Coding Style](https://github.com/spotify/ios-style) - Spotify で使われている iOS 開発のガイドライン。
- [Swift Style Guide by @raywenderlich](https://github.com/raywenderlich/swift-style-guide) - raywenderlich.com の公式 Swift スタイルガイド。
- [Swift Style Guide by LinkedIn](https://github.com/linkedin/swift-style-guide) - LinkedIn の公式 Swift スタイルガイド。

**[トップへ戻る](#contributing-and-collaborating)**

## テスト

*単体テスト、UI テスト、モッキング、ビヘイビア駆動開発ツール。*

### TDD / BDD

*テスト駆動・ビヘイビア駆動 iOS 開発のためのフレームワーク。*

- [Kiwi](https://github.com/kiwi-bdd/Kiwi) - iOS 開発のためのビヘイビア駆動開発ライブラリ。
- [Nimble](https://github.com/Quick/Nimble) - Swift と Objective-C 向けのマッチャーフレームワーク
- [OHHTTPStubs](https://github.com/AliSoftware/OHHTTPStubs) - ネットワークリクエストを簡単にスタブ！偽のネットワークデータやカスタムのレスポンス時間、ステータスコード、ヘッダーでアプリをテスト！
- [PlaygroundTDD](https://github.com/WhiskerzAB/PlaygroundTDD) - Playground 内で直接テストを手軽に実行する小さなライブラリ。
- [Quick](https://github.com/Quick/Quick) - Swift と Objective-C 向けのビヘイビア駆動開発フレームワーク。
- [Sleipnir](https://github.com/railsware/Sleipnir) - Swift 向けの BDD スタイルフレームワーク。
- [Specta](https://github.com/specta/specta) - Objective-C と Cocoa 向けの軽量 TDD / BDD フレームワーク。
- [swift-corelibs-xctest](https://github.com/apple/swift-corelibs-xctest) - XCTest プロジェクト。単体テストのサポートを提供する Swift コアライブラリ。
- [SwiftCheck](https://github.com/typelift/SwiftCheck) - Swift 版の QuickCheck。
- [XcodeCoverage](https://github.com/jonreid/XcodeCoverage) - Xcode プロジェクトのコードカバレッジ。

**[トップへ戻る](#contributing-and-collaborating)**

### A/B テスト

*iOS アプリで実験や A/B テストを実行するためのライブラリとプラットフォーム。*

- [ABKit](https://github.com/recruit-mp/ABKit) - iOS 向け AB テストフレームワーク。
- [Switchboard](https://github.com/KeepSafe/Switchboard) - Switchboard - モバイル iPhone / android アプリ向けの簡単で超軽量な A/B テスト。このモバイル A/B テストフレームワークにより、最小限のサーバーで大量のモバイルユーザー実験を実行できます。

**[トップへ戻る](#contributing-and-collaborating)**

### UI テスト

*iOS のユーザーインターフェースに対するインタラクションベースのテストを自動化するツール。*

- [appium](http://appium.io/) - Appium はネイティブ・ハイブリッドモバイルアプリで使えるオープンソースのテスト自動化フレームワークです。
- [AutoMate](https://github.com/PGSSoft/AutoMate) - UI 自動化テストを書くための XCTest 拡張。
- [Bluepill](https://github.com/linkedin/bluepill) - Bluepill は 1 台のマシンで複数のシミュレーターを使って UI テストを実行できる、信頼性の高い iOS テストツールです。
- [Cucumber](https://cucumber.io/) - iOS のビヘイビア駆動開発。
- [EarlGrey](https://github.com/google/EarlGrey) - :tea: iOS UI 自動化テストフレームワーク。
- [Flawless App](https://flawlessapp.io/) - モバイルアプリのビジュアル品質をリアルタイムでチェックするツール。iOS シミュレーターの中で元のデザインと実際の実装を比較します。
- [ios-driver](http://ios-driver.github.io/ios-driver/index.html) - Selenium / WebDriver であらゆる iOS のネイティブ・ハイブリッド・モバイル Web アプリをテスト。
- [Kif](https://github.com/kif-framework/KIF) - iOS の機能テストフレームワーク。
- [LayoutTest-iOS](https://github.com/linkedin/LayoutTest-iOS) - 複数の設定でビューのレイアウトをテストする単体テストを書く。
- [Marathon Runner](https://github.com/MarathonLabs/marathon) - パフォーマンスと安定性重視のテスト実行に特化した、高速でプラットフォーム非依存のテストランナー。
- [robotframework-appiumlibrary](https://github.com/serhatbolsu/robotframework-appiumlibrary) - AppiumLibrary は RobotFramework の appium テストライブラリです。
- [Subliminal](https://github.com/inkling/Subliminal) - 控えめなアプローチの iOS 統合テスト。
- [UI Testing Cheat Sheet](https://github.com/joemasilotti/UI-Testing-Cheat-Sheet) - これを UI Testing でどうテストする？
- [ViewInspector](https://github.com/nalexn/ViewInspector) - SwiftUI ビューのランタイム検査と単体テスト

**[トップへ戻る](#contributing-and-collaborating)**

### その他のテスト

*スナップショットテスト、モッキング、ファジングなどのテストユーティリティ。*

- [Buildasaur](https://github.com/buildasaurs/Buildasaur) - Xcode Server を使って GitHub と BitBucket 上の Pull Request を自動テスト。チームの生産性と安全性を保ち、数分で稼働させられます。
- [Cuckoo](https://github.com/Brightify/Cuckoo) - 最初のボイラープレートフリーの Swift モッキングフレームワーク。
- [DVR](https://github.com/venmo/DVR) - Swift のネットワークテスト。
- [ETTrace](https://github.com/EmergeTools/ETTrace) - Xcode や Instruments なしで、アプリのパフォーマンスをローカルで計測。
- [Fakery](https://github.com/vadymmarkov/Fakery) - Swift のフェイクデータジェネレーター。
- [iOS Snapshot Test Case](https://github.com/uber/ios-snapshot-test-case) — iOS と tvOS で UIView と CALayer のスナップショットテスト。
- [Kakapo](https://github.com/devlucky/Kakapo) - Swift でサーバーの振る舞いとレスポンスを動的にモック。
- [MirrorDiffKit](https://github.com/Kuniwak/MirrorDiffKit) - 任意の構造体やクラス間の見やすい差分。
- [Mockingbird](https://github.com/Farfetch/mockingbird) - HTTP/HTTPS を使うあらゆるシステムを簡単にモックしてソフトウェアテストを簡素化し、不完全または不安定なサービスに対してチームがテスト・開発できるようにし、予定されたケースを再現することもできます。
- [Mockingjay](https://github.com/kylef/Mockingjay) - Swift で HTTP リクエストを簡単にスタブするエレガントなライブラリ。
- [Mockit](https://github.com/sabirvirtuoso/Mockit) - Java の有名な Mockito にインスパイアされた、シンプルな Swift モッキングフレームワーク。
- [OCMock](https://ocmock.org/) - Objective-C のモックオブジェクト。
- [second_curtain](https://github.com/ashfurrow/second_curtain) - 失敗した iOS スナップショットテストケースを S3 にアップロード。
- [SnapshotTesting](https://github.com/pointfreeco/swift-snapshot-testing) - 楽しい Swift スナップショットテスト。
- [trainer](https://github.com/fastlane-community/trainer) - xcodebuild の plist ファイルを JUnit レポートに変換。
- [Vinyl](https://github.com/Velhotes/Vinyl) - Swift での VCR 風ネットワークテスト。

**[トップへ戻る](#contributing-and-collaborating)**

## テキスト

*アトリビュート文字列、Markdown、シンタックスハイライト、リッチテキストのヘルパー。*

- [Atributika](https://github.com/psharanda/Atributika) - HTML 風タグ、ハッシュタグ、メンション、RegExp、NSDataDetector パターンを検出してスタイルを適用し、NSAttributedString を簡単に構築。
- [Attributed](https://github.com/Nirma/Attributed) - アトリビュート文字列のためのモダンな Swift マイクロフレームワーク。
- [AttributedTextView](https://github.com/evermeer/AttributedTextView) - （ハッシュタグやメンションを含む）複数リンクに対応したアトリビュート UITextView を作る最も簡単な方法。
- [AztecEditor-iOS](https://github.com/wordpress-mobile/AztecEditor-iOS) - Aztec は HTML のビジュアル編集機能を持つ `UITextView` サブクラスを提供する Swift ライブラリです。プラグイン API はニーズに合わせて HTML 変換をカスタマイズできます。
- [BonMot](https://github.com/Rightpoint/BonMot) - Swift で美しく手軽なアトリビュート文字列。
- [CocoaMarkdown](https://github.com/indragiek/CocoaMarkdown) - iOS と macOS 向けの Markdown パースとレンダリング。
- [CodeMirror Swift](https://github.com/ProxymanApp/CodeMirror-Swift) - macOS と iOS 向けの CodeMirror 軽量ラッパー。シンタックスハイライトとテーマに対応。
- [Croc](https://github.com/jkalash/croc) - Emoji のパースとクエリのための軽量 Swift ライブラリ。
- [Down](https://github.com/iwasrobbed/Down) - cmark の上に構築された、爆速の Swift Markdown レンダリング。
- [DTCoreText](https://github.com/Cocoanetics/DTCoreText) - CoreText と共に HTML コードを使えるようにするメソッド群。
- [DTRichTextEditor](https://github.com/Cocoanetics/DTRichTextEditor) - iOS 向けのリッチテキストエディター。
- [Emojica](https://github.com/xoudini/emojica) - 文字列内の標準 emoji を [Twemoji](https://github.com/twitter/twemoji) や [EmojiOne](https://github.com/joypixels/emojione) などのカスタム emoji セットに置き換え。
- [Format](https://github.com/marmelroy/Format) - Swift フォーマッターキット。
- [Heimdall](https://github.com/henrinormak/Heimdall) - Heimdall はシンプルな暗号化／復号操作のための Security フレームワークのラッパーです。
- [Highlighter](https://github.com/younatics/Highlighter) - 何でもハイライト！Highlighter は UITableViewCell や他のクラスの中から UILabel、UITextView、UITexTfield、UIButton などの UI オブジェクトを魔法のように見つけます。
- [Highlightr](https://github.com/raspu/Highlightr) - iOS と macOS のシンタックスハイライター。176 言語に対応し、79 スタイルを同梱。
- [Input Mask](https://github.com/RedMadRobot/input-mask-ios) - パターンベースのユーザー入力フォーマッター、パーサー、バリデーター（iOS 向け）。
- [libPhoneNumber-iOS](https://github.com/iziz/libPhoneNumber-iOS) - libphonenumber（Google の電話番号処理ライブラリ）の iOS 移植版。
- [MarkdownDisplayView](https://github.com/zjc19891106/MarkdownDisplayView) - TextKit 2 の上に構築された強力な iOS Markdown レンダリングコンポーネント。滑らかなレンダリング性能と豊富なカスタマイズオプションを提供し、AI の質疑応答シナリオでの Markdown 形式のストリーミングレンダリングも可能にします。
- [MarkdownKit](https://github.com/bmoliveira/MarkdownKit) - Swift 向けのシンプルでカスタマイズ可能な Markdown パーサー。
- [MarkdownTextView](https://github.com/indragiek/MarkdownTextView) - iOS 向けのリッチ Markdown 編集コントロール。
- [MarkdownView](https://github.com/keitaoouchi/MarkdownView) - iOS 向けの Markdown ビュー。
- [Marklight](https://github.com/macteo/Marklight) - iOS 向けの Markdown シンタックスハイライター。
- [Marky Mark](https://github.com/m2mobi/Marky-Mark) - 高度にカスタマイズ可能な、Swift での Markdown パースとネイティブレンダリング。
- [MMMarkdown](https://github.com/mdiep/MMMarkdown) - Markdown を HTML に変換する Objective-C スタティックライブラリ。
- [Mustard](https://github.com/mathewsanders/Mustard) - Mustard は空白での分割では不十分な場合に文字列をトークン化する Swift ライブラリです。
- [Notepad](https://github.com/ruddfawcett/Notepad) - リアルタイムのシンタックスハイライトを備えた、完全にテーマ設定可能な Markdown エディター。
- [NSStringEmojize](https://github.com/diy/nsstringemojize) - Emoji Cheat Sheet のコードを対応する Unicode 文字に変換する NSString のカテゴリ。
- [PhoneNumberKit](https://github.com/marmelroy/PhoneNumberKit) - 国際電話番号のパース、フォーマット、検証のための Swift フレームワーク。Google の libphonenumber にインスパイア。
- [Pluralize.swift](https://github.com/joshualat/Pluralize.swift) - 素晴らしい Swift 文字列複数形化拡張。
- [Smile](https://github.com/onmyway133/Smile) Swift での Emoji。
- [Sprinter](https://github.com/nicklockwood/Sprinter) - iOS と macOS で文字列をフォーマットするライブラリ。
- [SwiftRichString](https://github.com/malcommac/SwiftRichString) - Swift のエレガントで painless なアトリビュート文字列管理ライブラリ。
- [SwiftString](https://github.com/amayne/SwiftString) - Swift 向けの包括的で軽量な文字列拡張。
- [SwiftyAttributes](https://github.com/eddiekaiger/SwiftyAttributes) - アトリビュート文字列の扱いを楽にする Swift 拡張。
- [SwiftyMarkdown](https://github.com/SimonFairbairn/SwiftyMarkdown) - Markdown ファイルと文字列を NSAttributedString に変換。
- [SZMentionsSwift](https://github.com/szweier/SZMentionsSwift) - メンションの処理を助けるライブラリ。
- [TextAttributes](https://github.com/delba/TextAttributes) - アトリビュート文字列を組み立てるより簡単な方法。
- [Translucid](https://github.com/Ekhoo/Translucid) - 画像をテキストの背景として設定する軽量ライブラリ。
- [Twitter Text Obj](https://github.com/twitter/twitter-text) - Twitter のテキスト処理ライブラリの Objective-C 実装。
- [TwitterTextEditor](https://github.com/twitter/TwitterTextEditor) - iOS アプリ向けのフル機能リッチテキストエディターを提供する、スタンドアローンで柔軟な API。
- [YYText](https://github.com/ibireme/YYText) - リッチテキストの表示と編集のための、iOS 向け強力なテキストフレームワーク。
- [ZSSRichTextEditor](https://github.com/nnhubbard/ZSSRichTextEditor) - シンタックスハイライト付きソースビューを備えた、iOS 向けの美しいリッチテキスト WYSIWYG エディター。

**[トップへ戻る](#contributing-and-collaborating)**

### フォント

*iOS 向けのアイコンフォントとフォント管理ユーティリティ。*

- [Font-Awesome-Swift](https://github.com/Vaberer/Font-Awesome-Swift) - iOS 向け Font Awesome Swift ライブラリ。
- [FontAwesome.swift](https://github.com/thii/FontAwesome.swift) - Swift プロジェクトで FontAwesome を使う。
- [FontAwesomeKit](https://github.com/PrideChung/FontAwesomeKit) - iOS 向けアイコンフォントライブラリ。現在は Font-Awesome、Foundation icons、Zocial、ionicons に対応。
- [FontAwesomeKit.Swift](https://github.com/qiuncheng/FontAwesomeKit.Swift) - iOS 開発者が FontAwesome アイコンを使うためのより良い選択肢。
- [GoogleMaterialDesignIcons](https://github.com/dekatotoro/GoogleMaterialDesignIcons) - iOS 向け Google Material Design アイコンフォント。
- [GoogleMaterialIconFont](https://github.com/kitasuke/GoogleMaterialIconFont) - Swift と ObjC プロジェクト向けの Google Material Design アイコン。
- [ios-fontawesome](https://github.com/alexdrone/ios-fontawesome) - NSString+FontAwesome。
- [SwiftIconFont](https://github.com/0x73/SwiftIconFont) - iOS 向けアイコンフォント（FontAwesome、Iconic、Ionicon、Octicon、Themify、MapIcon、MaterialIcon）。
- [SwiftIcons](https://github.com/ranesr/SwiftIcons) - さまざまなフォントアイコンを使うためのライブラリ：dripicons、emoji、font awesome、icofont、ionicons、linear icons、map icons、material icons、open iconic、state、weather。UIImage、UIImageView、UILabel、UIButton、UISegmentedControl、UITabBarItem、UISlider、UIBarButtonItem、UIViewController、UITextfield、UIStepper に対応。
- [UIFontComplete](https://github.com/Nirma/UIFontComplete) - iOS と tvOS 向けフォント管理（システムとカスタム）。

**[トップへ戻る](#contributing-and-collaborating)**



## UI

*すぐに使える iOS UI コンポーネント、コントロール、レイアウトヘルパー。*

- [BackgroundVideoiOS](https://github.com/Guzlan/BackgroundVideoiOS) - iOS のビューに背景動画を追加できる swift と objective-C のオブジェクト。
- [BAFluidView](https://github.com/antiguab/BAFluidView) - 動く液体の 2D ビューを模倣する UIView。
- [BEMCheckBox](https://github.com/Boris-Em/BEMCheckBox#sample-app) - iOS 向けの上品なチェックボックス。
- [Cacao](https://github.com/PureSwift/Cacao) - 純 Swift のクロスプラットフォーム UIKit（Cocoa Touch）実装（Linux 対応）。
- [ClassicKit](https://github.com/Baddaboo/ClassicKit) - iOS 向けのクラシックスタイル UI コンポーネントのコレクション。
- [ComponentKit](https://componentkit.org/) - Facebook 製の、React にインスパイアされた iOS ビューフレームワーク。
- [ConfettiView](https://github.com/OrRon/ConfettiView) - Confetti View でアプリ内に華やかな紙吹雪ビューを作れます。
- [DCKit](https://github.com/agordeev/DCKit) - 役立つ IBInspectable プロパティを備えた iOS コントロールのセット。Swift で書かれています。
- [DistancePicker](https://github.com/qmathe/DistancePicker) - パンジェスチャーで距離を選択するカスタムコントロール。Swift 製。
- [DrawerKit](https://github.com/babylonhealth/DrawerKit) - DrawerKit により、UIViewController は Apple のマップアプリのような方法で別の UIViewController をモーダル表示できます。
- [ElongationPreview](https://github.com/Ramotion/elongation-preview) - ElongationPreview は 3D Touch とジェスチャーに対応したエレガントな push-pop スタイルのビューコントローラーです。
- [EPSignature](https://github.com/ipraba/EPSignature) - Swift 製の iOS 署名コンポーネント。
- [EVFaceTracker](https://github.com/evermeer/EVFaceTracker) - デバイスと顔の距離と角度を計算します。
- [FAQView](https://github.com/mukeshthawani/FAQView) - Swift で書かれた、使いやすい iOS 向け FAQ ビュー。
- [FDStackView](https://github.com/forkingdog/FDStackView) - iOS で UIStackView を直接使う。
- [FlourishUI](https://github.com/thinkclay/FlourishUI) - 高度に設定可能で、箱から出してすぐ美しい UI ライブラリ。
- [FSPagerView](https://github.com/WenchaoD/FSPagerView) - FSPagerView はエレガントな画面スライドライブラリです。バナー、商品紹介、ウェルカム／ガイドページ、画面／ViewController スライダーの作成に非常に役立ちます。
- [GaugeKit](https://github.com/skywinder/GaugeKit) - カスタマイズ可能なゲージ。Apple スタイルのゲージを簡単に再現。
- [Haptica](https://github.com/efremidze/Haptica) - 使いやすいハプティックフィードバックジェネレーター。
- [HorizontalDial](https://github.com/kciter/HorizontalDial) - Instagram のような水平スクロールダイアル。
- [IGColorPicker](https://github.com/iGenius-Srl/IGColorPicker) - Swift で書かれたカスタマイズ可能な iOS カラーピッカー。
- [JDFlipNumberView](https://github.com/calimarkus/JDFlipNumberView) - 空港や駅の表示板のようなアナログ反転数字を表現。
- [LeeGo](https://github.com/wangshengjia/LeeGo) - 宣言的で設定可能、再利用性の高い UI 開発をレゴブロックのように実現。
- [LTHRadioButton](https://github.com/rolandleth/LTHRadioButton) - 美しいフィルアニメーション付きのラジオボタン。
- [Macaw-Examples](https://github.com/exyte/Macaw-Examples) - Macaw ライブラリのさまざまな使用例。
- [Material](https://github.com/CosmicMind/Material) - Material は開発者が美しいアプリを簡単に作れるアニメーションとグラフィックスのフレームワークです。
- [MEVHorizontalContacts](https://github.com/manuelescrig/MEVHorizontalContacts) - 設定可能な展開メニュー項目付きで連絡先リストを表示する、iOS UICollectionViewLayout のサブクラス。
- [NotchKit](https://github.com/HarshilShah/NotchKit) - iPhone X のノッチを隠すシンプルな方法
- [OAStackView](https://github.com/nsomar/OAStackView) - OAStackView は stackview を iOS 7+ へ逆移植することを目指します。OAStackView は UIStackView のすべての機能を再現することを目指しています。
- [OverlayContainer](https://github.com/applidium/OverlayContainer) - iOS 12 の Apple マップや株価アプリが示すような、オーバーレイベースのインターフェースを開発するためのライブラリ。
- [Pageboy](https://github.com/uias/Pageboy) - シンプルで情報量の多いページビューコントローラー。
- [PageController](https://github.com/hirohisa/PageController) - 無限ページングコントローラー。コンテンツのスクロールに合わせてタイトルバーが遅れてスクロールします。
- [Pages](https://github.com/hyperoslo/Pages) - シンプルにした UIPageViewController。
- [Pulley](https://github.com/52inc/Pulley) - iOS 10 のマップ UI を模倣するライブラリ。
- [RKNotificationHub](https://github.com/cwRichardKim/RKNotificationHub) - どんな UIView も本格的な通知センターに。
- [SCTrelloNavigation](https://github.com/SergioChan/SCTrelloNavigation) - Trello 風アニメーションナビゲーションの iOS ネイティブ実装。
- [SegmentedProgressBar](https://github.com/D-32/SegmentedProgressBar) - Snapchat / Instagram ストーリーズ風のアニメーションインジケーター。
- [ShadowView](https://github.com/PierrePerrin/ShadowView) - UIView の影の管理を簡単に。
- [Splitflap](https://github.com/yannickl/Splitflap) - Swift アプリケーション向けのシンプルなフラップディスプレイ。
- [STAControls](https://github.com/Stunner/STAControls ) – 便利な UIControl サブクラス。（UIControl 版の Three20/NimbusKit を想像してください。）Objective-C 製。

**[トップへ戻る](#contributing-and-collaborating)**

### アクティビティインジケーター

*スピナー、ローダー、プログレスインジケーター。*

- [ActivityIndicatorView](https://github.com/exyte/ActivityIndicatorView) - SwiftUI で作られた、プリセットのローディングインジケーターの数々。
- [AlamofireNetworkActivityIndicator](https://github.com/Alamofire/AlamofireNetworkActivityIndicator) - Alamofire を使って iOS のネットワークアクティビティインジケーターの表示を制御。
- [DACircularProgress](https://github.com/danielamitay/DACircularProgress) - DACircularProgress は円形の UIProgressView プロパティを備えた UIView サブクラスです。
- [EZLoadingActivity](https://github.com/goktugyil/EZLoadingActivity) - 軽量ローディングアクティビティ HUD。
- [FFCircularProgressView](https://github.com/elbryan/FFCircularProgressView) - FFCircularProgressView - iOS 7 にインスパイアされた青い円形プログレスビュー。
- [FillableLoaders](https://github.com/polqf/FillableLoaders) - Swift で書かれた、カスタム CGPath で描かれる完全にカスタマイズ可能なプログレスベースのローダー。
- [FlexibleSteppedProgressBar](https://github.com/amratab/FlexibleSteppedProgressBar) - 美しく簡単にカスタマイズできるステップ式プログレスバー。
- [GearRefreshControl](https://github.com/andreamazz/GearRefreshControl) - UIRefreshControl のカスタムアニメーション。
- [GradientLoadingBar](https://github.com/fxm90/GradientLoadingBar) - アニメーションするグラデーションロードバー。
- [GradientProgressBar](https://github.com/fxm90/GradientProgressBar) - グラデーションプログレスバー（UIProgressView）。
- [IHProgressHUD](https://github.com/Swiftify-Corp/IHProgressHUD) - シンプルな HUD。スレッドセーフで、iOS、tvOS、App Extension に対応。
- [iOS Circle Progress Bar](https://github.com/Eclair/CircleProgressBar) - iOS 円形プログレスバー。
- [iOS-CircleProgressView](https://github.com/CardinalNow/iOS-CircleProgressView) - このコントロールにより、コードでのインスタンス化またはインターフェースビルダーで円形プログレスビューを作成・描画できます。
- [KDCircularProgress](https://github.com/kaandedeoglu/KDCircularProgress) - Swift で書かれたグラデーション付き円形プログレスビュー。
- [KYNavigationProgress](https://github.com/ykyouhei/KYNavigationProgress) - UINavigationBar にプログレスを表示する UINavigationController のシンプルな拡張。
- [LinearProgressBar](https://github.com/PhilippeBoisney/LinearProgressBar) - iOS 向けのリニアプログレスバー（Google Material Design にインスパイア）。
- [LiquidLoader](https://github.com/yoavlt/LiquidLoader) - 液体アニメーション付きスピナーローダーコンポーネント。
- [Loader](https://github.com/Ekhoo/Loader) - Swift で書かれた驚くほどアニメーションするスイッチ型アクティビティインジケーター。
- [M13ProgressSuite](https://github.com/Marxon13/M13ProgressSuite) - iOS で進行状況を表示するための多くのツールを含むスイート。
- [MBCircularProgressBar](https://github.com/MatiBot/MBCircularProgressBar) -  IBDesignable で Interface Builder から編集できる、円形でアニメーション可能な高度にカスタマイズ可能なプログレスバー。
- [MBProgressHUD](https://github.com/jdg/MBProgressHUD) - バックグラウンドスレッドで処理中に、インジケーターやラベル付きの半透明 HUD を表示する組み込み式クラス。
- [MKProgress](https://github.com/kamirana4/MKProgress) - Swift で書かれた軽量 ProgressHUD。/MBProgressHUD/SVProgressHUD/KVNProgressHUD に見た目が似ています。
- [MKRingProgressView](https://github.com/maxkonovalov/MKRingProgressView) - Apple Watch のアクティビティアプリに似た、美しいリング／円形プログレスビュー。Swift 製。
- [MRProgress](https://github.com/mrackwitz/MRProgress) - 進行状況を可視化する iOS 組み込み式コンポーネントのコレクション。
- [NJKWebViewProgress](https://github.com/ninjinkun/NJKWebViewProgress) - UIWebView のプログレスインターフェースライブラリ。このモジュールでアプリ内ブラウザーのプログレスバーを実装できます。
- [NVActivityIndicatorView](https://github.com/ninjaprox/NVActivityIndicatorView) - 素敵なローディングアニメーションのコレクション。
- [PKHUD](https://github.com/pkluz/PKHUD) - iOS 8 以上向けに Apple HUD（音量、着信、回転…）を Swift で再実装。
- [ProgressHUD](https://github.com/relatedcode/ProgressHUD) - ProgressHUD は軽量で使いやすい HUD です。
- [ProgressIndicatorView](https://github.com/exyte/ProgressIndicatorView) - SwiftUI で作られた、プリセットのプログレスインジケーターの数々。
- [RHPlaceholder](https://github.com/robertherdzik/RHPlaceholder) - ビューに Facebook 風のローディング状態を追加できるシンプルなライブラリ。
- [RPLoadingAnimation](https://github.com/naoyashiga/RPLoadingAnimation) - Swift CALayer を使ったローディングアニメーション。
- [RSLoadingView](https://github.com/roytornado/RSLoadingView) - Swift 製 3D エンジンを使った素晴らしいローディングアニメーション。
- [Skeleton](https://github.com/gonzalonunez/Skeleton) - スライドする CAGradientLayer アニメーションを簡単に作る方法！コンテンツ読み込み中のスケルトンスクリーン作成に最適。
- [SkeletonView](https://github.com/Juanpe/SkeletonView) - 何かが進行していることをユーザーにエレガントに示し、待っているコンテンツへの期待感を持たせます。
- [SnapTimer](https://github.com/andresinaka/SnapTimer) - Snapchat ストーリーズタイマーの実装。
- [StatusBarOverlay](https://github.com/IdleHandsApps/StatusBarOverlay) - アプリが接続を失った／回復したときに「インターネット接続なし」バーを自動表示／非表示。ステータスバーを隠すアプリや「ノッチ」に対応。
- [STLoadingGroup](https://github.com/saitjr/STLoadingGroup) - ローディングビュー。
- [SVProgressHUD](https://github.com/SVProgressHUD/SVProgressHUD) - iOS アプリ向けのクリーンで軽量なプログレス HUD。
- [SwiftSpinner](https://github.com/icanzilb/SwiftSpinner) - ぼかし効果、半透明、フラットで大胆なデザインを使った、Swift で書かれた美しいアクティビティインジケーターとモーダルアラート。
- [VHUD](https://github.com/xxxAIRINxxx/VHUD) シンプルな HUD。
- [Windless](https://github.com/Interactive-Studio/Windless) - Windless は見えないレイアウトのローディングビューを簡単に実装できます。
- [WSProgressHUD](https://github.com/devSC/WSProgressHUD) - iPhone と iPad 向けの美しい HUD ビューです。
- [YLProgressBar](https://github.com/yannickl/YLProgressBar) - 純粋な Core Graphics による、高度かつ完全にカスタマイズ可能なアニメーションプログレスバーを備えた UIProgressView の代替。

**[トップへ戻る](#contributing-and-collaborating)**

### アニメーション

*アニメーションフレームワーク、キーフレームプレイヤー、モーションユーティリティ。*

- [ADPuzzleAnimation](https://github.com/Antondomashnev/ADPuzzleAnimation) - Fabric Answers のアニメーションにインスパイアされた UIView のカスタムアニメーション。
- [ADPuzzleAnimation](https://github.com/Antondomashnev/ADPuzzleAnimation) - Fabric Answers のアニメーションにインスパイアされた UIView のカスタムアニメーション。
- [AGInterfaceInteraction](https://github.com/agilie/AGInterfaceInteraction) - UI インターフェースとインタラクションするライブラリ。
- [AGInterfaceInteraction](https://github.com/agilie/AGInterfaceInteraction) - UI インターフェースとインタラクションするライブラリ。
- [AHKBendableView](https://github.com/fastred/AHKBendableView) - 位置が変わると端が曲がる UIView サブクラス。
- [AHKBendableView](https://github.com/fastred/AHKBendableView) - 位置が変わると端が曲がる UIView サブクラス。
- [anim](https://github.com/onurersel/anim) - カスタムイージングとわかりやすい API を備えた iOS アニメーションライブラリ。
- [anim](https://github.com/onurersel/anim) - カスタムイージングとわかりやすい API を備えた iOS アニメーションライブラリ。
- [Anima](https://github.com/satoshin21/Anima) - Anima は Swift4 向けのチェーン可能なレイヤーベースアニメーションライブラリです。
- [Anima](https://github.com/satoshin21/Anima) - Anima は Swift4 向けのチェーン可能なレイヤーベースアニメーションライブラリです。
- [AnimatedCollectionViewLayout](https://github.com/KelvinJin/AnimatedCollectionViewLayout) - UICollectionView にカスタムトランジション／アニメーションを追加する UICollectionViewLayout サブクラス。
- [AnimatedCollectionViewLayout](https://github.com/KelvinJin/AnimatedCollectionViewLayout) - UICollectionView にカスタムトランジション／アニメーションを追加する UICollectionViewLayout サブクラス。
- [Animo](https://github.com/eure/Animo) - CALayer 向けの SpriteKit 風アニメーションビルダー。
- [AppAnimations](http://www.appanimations.com) - 次のプロジェクトのインスピレーションになる iOS アニメーションのコレクション。
- [Cheetah](https://github.com/suguru/Cheetah) - iOS 上で使いやすいアニメーションライブラリ。
- [CKWaveCollectionViewTransition](https://github.com/CezaryKopacz/CKWaveCollectionViewTransition) - 2 つ以上の UICollectionView 間のかっこいい波のようなトランジション。
- [CurryFire](https://github.com/devinross/curry-fire) - ユニークなアニメーションを作るフレームワーク。
- [Dance](https://github.com/saoudrizwan/Dance) - iOS のために作られた、ラディカルでエレガントなアニメーションライブラリ。
- [Dance](https://github.com/saoudrizwan/Dance) - iOS のために作られた、ラディカルでエレガントなアニメーションライブラリ。
- [DCAnimationKit](https://github.com/daltoniam/DCAnimationKit) - iOS アニメーションのコレクション。シンプル、追加するだけのアニメーション。
- [Ease](https://github.com/roberthein/Ease) - Ease で何でもアニメーション。
- [Ease](https://github.com/roberthein/Ease) - Ease で何でもアニメーション。
- [EasyAnimation](https://github.com/icanzilb/EasyAnimation) - UIView.animateWithDuration() のパワーをまったく新しいレベルへ引き上げる Swift ライブラリ — レイヤー、スプリング、チェーン可能なアニメーション、ビュー／レイヤーアニメーションの混合。
- [fireworks](https://github.com/tomkowz/fireworks) - UIView の花火エフェクト
- [fireworks](https://github.com/tomkowz/fireworks) - UIView の花火エフェクト
- [FlightAnimator](https://github.com/AntonTheDev/FlightAnimator) - 高度な自然なモーションアニメーション。シンプルなブロックベース構文。
- [FlightAnimator](https://github.com/AntonTheDev/FlightAnimator) - 高度な自然なモーションアニメーション。シンプルなブロックベース構文。
- [Gemini](https://github.com/shoheiyokoyama/Gemini) - Gemini は Swift で書かれた、iOS 向けのリッチなスクロールベースアニメーションフレームワークです。
- [Interpolate](https://github.com/marmelroy/Interpolate) - ジェスチャー駆動アニメーションのための Swift 補間。
- [JHChainableAnimations](https://github.com/jhurray/JHChainableAnimations) - Objective-C で読み書きしやすいチェーン可能アニメーション。
- [JRMFloatingAnimation](https://github.com/carleihar/JRMFloatingAnimation) - 浮遊する画像ビューを作る Objective-C アニメーションライブラリ。
- [LoadingShimmer](https://github.com/jogendra/LoadingShimmer) - 1 行のコードで任意のビューにきらめき効果を追加する簡単な方法。控えめなローディングインジケーターとして便利です。
- [Lottie](https://github.com/airbnb/lottie-ios) - Adobe After Effects 由来のネイティブベクターアニメーションをリアルタイムレンダリングする iOS ライブラリ。
- [MotionAnimation](https://github.com/lkzhao/MotionAnimation) - UIKit 向けの軽量アニメーションライブラリ。
- [MotionBlur](https://github.com/fastred/MotionBlur) - MotionBlur により、iOS のアニメーションにモーションブラー効果を追加できます。
- [Pastel](https://github.com/cruisediary/Pastel) - Instagram のようなグラデーションアニメーション効果。
- [PMTween](https://github.com/poetmountain/PMTween) - エレガントで柔軟な iOS トゥイーンライブラリ。
- [RippleEffectView](https://github.com/alsedi/RippleEffectView) - RippleEffectView - きれいなさざ波ビュー効果。
- [SamuraiTransition](https://github.com/hachinobu/SamuraiTransition) - きれいな「切断」アニメーションを多数備えた ViewController トランジションを提供する、Swift ベースのライブラリ。
- [Sica](https://github.com/cats-oss/Sica) - Simple Interface Core Animation。型安全にアニメーションを逐次または並列で実行。
- [SPPerspective](https://github.com/ivanvorobei/SPPerspective) - 3D と動的な影を持つ iOS 14 ウィジェットアニメーション。トランスフォームと時間をカスタマイズ可能。
- [Spruce iOS Animation Library](https://github.com/willowtreeapps/spruce-ios) - 画面上のアニメーションを振り付ける Swift ライブラリ。
- [Stellar](https://github.com/AugustRush/Stellar) - Swift 向けの素晴らしい物理アニメーションライブラリ。
- [SwiftyAnimate](https://github.com/rchatham/SwiftyAnimate) - Swift の組み合わせ可能なアニメーション。
- [TheAnimation](https://github.com/marty-suzuki/TheAnimation) - 型安全な CAAnimation ラッパー。間違った型の値の設定を防ぎます。
- [TweenKit](https://github.com/SteveBarnegren/TweenKit) - Swift で書かれた iOS 向けアニメーションライブラリ。
- [Twinkle](https://github.com/piemonte/Twinkle) - iOS と tvOS アプリの要素をきらめかせるシンプルで Swift な方法。
- [ViewAnimator](https://github.com/marcosgriselli/ViewAnimator) - ViewAnimator はたった 1 行で UI に命を吹き込みます。
- [WaterDrops](https://github.com/LeFal/WaterDrops) - Swift で書かれた iOS 向けのシンプルな水滴アニメーション。
- [WXWaveView](https://github.com/WelkinXie/WXWaveView) - ビューにきれいな水の波を追加。
- [YetAnotherAnimationLibrary](https://github.com/lkzhao/YetAnotherAnimationLibrary) - ジェスチャー駆動アニメーションのために設計。速く、シンプル、拡張可能！
- [ZoomTransitioning](https://github.com/WorldDownTown/ZoomTransitioning) - 画像ズームアニメーション付きのカスタムトランジション。

**[トップへ戻る](#contributing-and-collaborating)**

### トランジション

*カスタムビューコントローラーとナビゲーショントランジションライブラリ。*

- [AnimatedTransitionGallery](https://github.com/shu223/AnimatedTransitionGallery) - UIViewControllerAnimatedTransitioning プロトコルを使った iOS 7 カスタムアニメーショントランジションのコレクション。
- [AppstoreTransition](https://github.com/appssemble/appstore-card-transition) - App Store のカードアニメーショントランジションを模倣。
- [AZTransitions](https://github.com/azimin/AZTransitions) - 1 つのメソッドで素晴らしいカスタムトランジションを作る API。
- [BlurryModalSegue](https://github.com/Citrrus/BlurryModalSegue) - ぼかしオーバーレイ効果を提供するカスタム modal segue。
- [BubbleTransition](https://github.com/andreamazz/BubbleTransition) - 膨らむバブル効果でコントローラーを表示・解除するカスタムモーダルトランジション。
- [DAExpandAnimation](https://github.com/ifitdoesntwork/DAExpandAnimation) - 元のコントローラーの残りをスライドアウトさせながら、展開効果でコントローラーを表示するカスタムモーダルトランジション。
- [DeckTransition](https://github.com/HarshilShah/DeckTransition) - iOS の Apple Music の「再生中」トランジションを再現するライブラリ。
- [ElasticTransition](https://github.com/lkzhao/ElasticTransition) - 弾力のあるドラッグをシミュレートする UIKit カスタムトランジション。Swift 製。
- [ElasticTransition-ObjC](https://github.com/taglia3/ElasticTransition-ObjC) - 弾力のあるドラッグをシミュレートする UIKit カスタムトランジション。lkzhao 製の Swift 版 Elastic Transition の Objective-C 版です。
- [Gagat](https://github.com/Boerworz/Gagat) - iOS アプリケーションのビジュアルスタイルを切り替える楽しい方法。
- [Hero](https://github.com/HeroTransitions/Hero) - iOS と tvOS 向けのエレガントなトランジションライブラリ。
- [JTMaterialTransition](https://github.com/jonathantribouharet/JTMaterialTransition) - マテリアルデザインに基づく iOS コントローラートランジション。
- [Kaeru](https://github.com/bannzai/Kaeru) - iOS のタスクマネージャーのようにビューコントローラーを切り替え。
- [LiquidSwipe](https://github.com/exyte/LiquidSwipe) - 液体のようなナビゲーションアニメーション
- [Motion](https://github.com/CosmicMind/Motion) - Swift のシームレスなアニメーションとトランジション。
- [NavigationTransitions](https://github.com/davdroman/swiftui-navigation-transitions) - 純粋な SwiftUI ナビゲーショントランジション。
- [RMPZoomTransitionAnimator](https://github.com/recruit-mp/RMPZoomTransitionAnimator) - UIViewController 向けのカスタムズームトランジションアニメーション。
- [SPStorkController](https://github.com/IvanVorobei/SPStorkController) - Apple Music、Podcasts、メールなどの Apple アプリで表示されるコントローラーにとてもよく似ています。
- [TBIconTransitionKit](https://github.com/AlexeyBelezeko/TBIconTransitionKit) - アイコンをある形から別の形へスムーズに変化させる、使いやすいアイコントランジションキット。
- [Transition](https://github.com/Touchwonders/Transition) - 簡単にインタラクティブ・中断可能なカスタム ViewController トランジション。
- [TransitionableTab](https://github.com/ParkGwangBeom/TransitionableTab) - TransitionableTab はタブ切り替え時のアニメーションを簡単にします。
- [View2ViewTransition](https://github.com/naru-jpn/View2ViewTransition) - あるビューから別のビューへのカスタムインタラクティブビューコントローラートランジション。
- [ZFDragableModalTransition](https://github.com/zoonooz/ZFDragableModalTransition) - モーダルビューコントローラー表示用のカスタムアニメーショントランジション。
- [ZOZolaZoomTransition](https://github.com/NewAmsterdamLabs/ZOZolaZoomTransition) - ビュー階層全体をアニメーションするズームトランジション。Zola iOS アプリケーションで多用されています。

**[トップへ戻る](#contributing-and-collaborating)**

### アラートとアクションシート

*アラート、トースト、アクションシート、バナー通知。*

- [Alertift](https://github.com/sgr-ksmt/Alertift) - Swifty でモダンな UIAlertController ラッパー。
- [Alerts & Pickers](https://github.com/dillidon/alerts-and-pickers) - TextField、DatePicker、PickerView、TableView、CollectionView を使えるネイティブ UIAlertController の高度な使い方。
- [BottomSheet](https://github.com/joomcode/BottomSheet) - コンテンツベースのサイズ、インタラクティブな解除、ナビゲーションコントローラー対応を備えた強力なボトムシートコンポーネント。
- [BPStatusBarAlert](https://github.com/ppth0608/BPStatusBarAlert) - ステータスバーとナビゲーションバーの下に表示される（Facebook のような）シンプルなアラート。
- [BRYXBanner](https://github.com/bryx-inc/BRYXBanner) - Swift 製、iOS 7+ 対応の軽量ドロップダウン通知。
- [BulletinBoard](https://github.com/alexaubry/BulletinBoard) - iOS でボトムカードインターフェースを生成・表示
- [CDAlertView](https://github.com/candostdagdeviren/CDAlertView) - 高度にカスタマイズ可能なアラート／通知／成功／エラー／アラームポップアップ。
- [CFAlertViewController](https://github.com/Codigami/CFAlertViewController) -  iPad と iPhone でアラートやアクションシートの表示とカスタマイズを助けるライブラリ。
- [CFNotify](https://github.com/JT501/CFNotify) - ドラッグ可能なビューを作るカスタマイズ可能なフレームワーク。
- [CleanyModal](https://github.com/loryhuz/CleanyModal) - ネイティブ UIAlertController に似た API で、素敵なカスタムアラートとアクションシートを簡単に使う。
- [CRToast](https://github.com/cruffenach/CRToast) - 通知のニーズに合うモダンな iOS トーストビュー。
- [CustomizableActionSheet](https://github.com/beryu/CustomizableActionSheet) - カスタムビューとボタンを含められるアクションシート。
- [DOAlertController](https://github.com/okmr-d/DOAlertController) - UIAlertController として使える Swift 製のシンプルな Alert View。（AlertController/AlertView/ActionSheet）。
- [Dodo](https://github.com/evgenyneu/Dodo) - Swift で書かれた iOS メッセージバー。
- [EZAlertController](https://github.com/thellimist/EZAlertController) - 簡単な Swift UIAlertController。
- [FCAlertView](https://github.com/krispenney/FCAlertView) - iOS 向けのフラットでカスタマイズ可能な AlertView。（Swift）。
- [FCAlertView](https://github.com/nimati/FCAlertView) - iOS 向けのフラットでカスタマイズ可能な AlertView。（Objective-C）。
- [FloatingActionSheetController](https://github.com/ra1028/FloatingActionSheetController) - FloatingActionSheetController は Swift で書かれた、クールなデザインの ActionSheetController ライブラリです。
- [GSMessages](https://github.com/wxxsw/GSMessages) - iOS 7+ 向けのシンプルなスタイルのメッセージ／通知。
- [HDNotificationView](https://github.com/nhdang103/HDNotificationView) - あらゆるアラートに対してネイティブの通知バナー UI を模倣。
- [Hokusai](https://github.com/ytakzk/Hokusai) - 弾むアクションシートを提供する Swift ライブラリ。
- [InAppNotify](https://github.com/lucabecchetti/InAppNotify) - WhatsApp、Telegram、Frind などのような、Swift 言語でアプリ内通知を管理する Swift ライブラリ。
- [JDStatusBarNotification](https://github.com/calimarkus/JDStatusBarNotification) - ステータスバーの上に表示される、簡単でカスタマイズ可能な通知。
- [Jelly](https://github.com/SebastianBoldt/Jelly) - Jelly はほんの数行のコードでカスタムビューコントローラートランジションを提供します。
- [JLToast](https://github.com/devxoul/Toaster) - 非常にシンプルなインターフェースの iOS トースト。
- [LCActionSheet](https://github.com/iTofu/LCActionSheet) - シンプルな ActionSheet。WeChat、Weibo、QQ はどれも似たスタイルを使っています。Swift を完全サポート。
- [LNRSimpleNotifications](https://github.com/LISNR/LNRSimpleNotifications) - シンプルな Swift アプリ内通知。LNRSimpleNotifications は TSMessages の簡略化された Swift ポートです。
- [Loaf](https://github.com/schmidyy/Loaf) - iOS トーストを簡単に実現するシンプルなフレームワーク。
- [Malert](https://github.com/vitormesquita/Malert) - Malert は Swift で書かれた、シンプルで簡単、カスタム可能な iOS UIAlertView です。
- [NoticeBar](https://github.com/qiuncheng/NoticeBar) - Swift 3 で書かれた、QQ の通知ビューに似たシンプルな NoticeBar。
- [NotificationBanner](https://github.com/Daltron/NotificationBanner) - iOS で高度にカスタマイズ可能なアプリ内通知バナーを表示する最も簡単な方法。
- [NYAlertViewController](https://github.com/nealyoung/NYAlertViewController) - カスタムコンテンツビュー付きの、高度に設定可能な iOS アラートビュー。
- [PCLBlurEffectAlert](https://github.com/hryk224/PCLBlurEffectAlert) - UIVisualEffectView を使った Swift AlertController。
- [PMAlertController](https://github.com/pmusolino/PMAlertController) - PMAlertController は UIAlertController の素晴らしくカスタマイズ可能な代替です。
- [PopMenu](https://github.com/CaliCastle/PopMenu) - クールでカスタマイズ可能なポップアップスタイルのアクションシート 😎
- [RKDropdownAlert](https://github.com/cwRichardKim/RKDropdownAlert) - 極めてシンプルな UIAlertView の代替。
- [RMActionController](https://github.com/CooperRS/RMActionController) - あらゆる UIView を UIAlertController のように表示。
- [RMDateSelectionViewController](https://github.com/CooperRS/RMDateSelectionViewController) - UIAlertController のように UIDatePicker で日付を選択。
- [RMessage](https://github.com/donileo/RMessage) - ObjC で作られた、きりっとしたアプリ内通知／メッセージバナー。
- [RMPickerViewController](https://github.com/CooperRS/RMPickerViewController) - UIAlertController のように UIPickerView で何かを選択。
- [SCLAlertView-Swift](https://github.com/vikmeup/SCLAlertView-Swift) - Swift で書かれた美しいアニメーション Alert View。
- [Sheet](https://github.com/ParkGwangBeom/Sheet) - SHEET は Flipboard アプリで使われているようなナビゲーション機能付きの、さまざまなアクションシートを簡単に作るのを助けます
- [SimpleAlert](https://github.com/KyoheiG3/SimpleAlert) - Swift 向けのカスタマイズ可能なシンプル Alert とシンプル ActionSheet。
- [SPAlert](https://github.com/IvanVorobei/SPAlert) - Apple Music と AppStore のフィードバックからのネイティブポップアップ。Done と Heart のプリセットを含む。
- [StatusAlert](https://github.com/LowKostKustomz/StatusAlert) - ユーザーフローを妨げずに、Apple のシステムのような自動で隠れるステータスアラートを表示。
- [SweetAlert](https://github.com/codestergit/SweetAlert-iOS) - Swift で書かれた、ライブアニメーションする iOS 向け Alert View。
- [Swift-Prompts](https://github.com/GabrielAlva/Swift-Prompts) - 豊富な選択肢からなるカスタムプロンプトをデザインする Swift ライブラリ。
- [SwiftMessages](https://github.com/SwiftKickMobile/SwiftMessages) - Swift で書かれた非常に柔軟な iOS メッセージバー。
- [SwiftNotice](https://github.com/johnlui/SwiftNotice) - SwiftNotice は純 Swift で書かれた、さまざまなポップアップ（HUD）を表示する GUI ライブラリで、あらゆる scrollview に適合します。
- [SwiftOverlays](https://github.com/peterprokop/SwiftOverlays) - SwiftOverlays はさまざまなポップアップと通知を表示する Swift GUI ライブラリです。
- [TKSwarmAlert](https://github.com/entotsu/TKSwarmAlert) - Swarm アプリのようなアニメーションアラートライブラリ。
- [TOActionSheet](https://github.com/TimOliver/TOActionSheet) - iOS 向け UIActionSheet コントロールのカスタムデザインによる再実装
- [Toast-Swift](https://github.com/scalessec/Toast-Swift) - UIView オブジェクトクラスにトースト通知を追加する Swift 拡張。
- [TTGSnackbar](https://github.com/zekunyan/TTGSnackbar) - 画面の下部に複数種類のアニメーションでシンプルなメッセージとアクションボタンを表示。
- [XLActionController](https://github.com/xmartlabs/XLActionController) - Swift で書かれた完全にカスタマイズ可能で拡張可能なアクションシートコントローラー。

**[トップへ戻る](#contributing-and-collaborating)**

### バッジ

*UI 要素の通知バッジとカウントバッジ。*

- [BadgeHub](https://github.com/jogendra/BadgeHub) - どんな UIView も本格的なアニメーション通知センターに。UIView に通知バッジアイコンをすばやく追加する方法です。
- [EasyNotificationBadge](https://github.com/Minitour/EasyNotificationBadge) - 通知バッジを追加する UIView 拡張。[e]
- [MIBadgeButton](https://github.com/mustafaibrahim989/MIBadgeButton-Swift) - UIButton の通知バッジ。
- [swift-badge](https://github.com/evgenyneu/swift-badge) - Swift で書かれた iOS バッジビュー

**[トップへ戻る](#contributing-and-collaborating)**

### ボタン

*カスタマイズ可能なボタンコントロールとヘルパー。*

- [BEMCheckBox](https://github.com/Boris-Em/BEMCheckBox) - iOS 向けの上品なチェックボックス。（Check box）
- [ButtonProgressBar-iOS](https://github.com/thePsguy/ButtonProgressBar-iOS) - アニメーションするローディングプログレスと完了アニメーションを備えた、小さく柔軟な UIButton サブクラス。
- [DOFavoriteButton](https://github.com/okmr-d/DOFavoriteButton) - Swift で書かれたかわいいアニメーションボタン。
- [DynamicButton](https://github.com/yannickl/DynamicButton) - また一つ、Swift のアニメーションフラットボタン
- [EasySocialButton](https://github.com/Minitour/EasySocialButton) - 美しいソーシャル認証ボタンを作る簡単な方法。
- [FloatingButton](https://github.com/exyte/FloatingButton) - SwiftUI で作られた、簡単にカスタマイズできるフローティングボタンメニュー。
- [Floaty](https://github.com/kciter/Floaty) - :heart: iOS 向けフローティングアクションボタン
- [HTPressableButton](https://github.com/Famolus/HTPressableButton) - フラットデザインの押せるボタン。
- [JOEmojiableBtn](https://github.com/lojals/JOEmojiableBtn) - Facebook リアクションのような Emoji セレクター。
- [LGButton](https://github.com/loregr/LGButton) - 1 行もコードを書かずに美しいボタンを作れる、ネイティブ UIControl の完全にカスタマイズ可能なサブクラス。
- [LiquidFloatingActionButton](https://github.com/yoavlt/LiquidFloatingActionButton) - 液体状態の Material Design フローティングアクションボタン
- [OnOffButton](https://github.com/rakaramos/OnOffButton) - オン／オフのアニメーションするカスタム UIButton。Swift 製。Creativedash 作
- [PMSuperButton](https://github.com/pmusolino/PMSuperButton) - スーパーパワーを備えた強力な UIButton。Storyboard からカスタマイズ可能！
- [SSBouncyButton](https://github.com/StyleShare/SSBouncyButton) - iOS7 スタイルのバウンシーボタン UI コンポーネント。
- [SwiftyButton](https://github.com/TakeScoop/SwiftyButton) - Swift のシンプルでカスタマイズ可能なボタン
- [TORoundedButton](https://github.com/TimOliver/TORoundedButton) - 角丸の高性能ボタンコントロール。
- [TransitionButton](https://github.com/AladinWay/TransitionButton) - ローディングとトランジションアニメーション用の UIButton サブクラス
- [VBFPopFlatButton](https://github.com/victorBaro/VBFPopFlatButton) - Facebook POP でアニメーションする、9 つの異なる状態を持つフラットボタン。
- [WCLShineButton](https://github.com/imwcl/WCLShineButton) - iOS 向け UI ライブラリです。輝くようなエフェクト。
- [ZFRippleButton](https://github.com/zoonooz/ZFRippleButton) - Google Material Design にインスパイアされたカスタム UIButton エフェクト

**[トップへ戻る](#contributing-and-collaborating)**

### カレンダー

*カレンダービュー、日付ピッカー、スケジュールコンポーネント。*

- [ASCalendar](https://github.com/scamps88/ASCalendar) - mvvm パターンで Swift で書かれた iOS カレンダーコントロール
- [Calendar](https://github.com/jumartin/Calendar) - iOS でイベントを表示・スケジュールするためのビューとコントローラーのセット
- [CalendarKit](https://github.com/richardtop/CalendarKit) - 完全にカスタマイズ可能なカレンダーの日ビュー。
- [CalendarPopUp](https://github.com/orazz/CalendarPopUp) - CalendarPopUp - JTAppleCalendar ライブラリ。
- [CVCalendar](https://github.com/CVCalendar/CVCalendar) - Swift（2.0）で書かれた、iOS 8+ 向けのカスタムビジュアルカレンダー。
- [DateTimePicker](https://github.com/itsmeichigo/DateTimePicker) - より良い見た目の iOS 日時選択 UI コンポーネント
- [Daysquare](https://github.com/unixzii/Daysquare) - iOS 向けのエレガントなカレンダーコントロール。
- [ElegantCalendar](https://github.com/ThasianX/ElegantCalendar) - SwiftUI に欠けていたエレガントなフルスクリーンカレンダー。
- [FSCalendar](https://github.com/WenchaoD/FSCalendar) - Objective-C と Swift の両方に互換性のある、完全にカスタマイズ可能な iOS カレンダーライブラリ。
- [GLCalendarView](https://github.com/Glow-Inc/GLCalendarView) - 日付範囲ピッカーとして動作する、完全にカスタマイズ可能なカレンダービュー
- [ios_calendar](https://github.com/maximbilan/Calendar-iOS)  - Locale と CalendarIdentifier に対応した軽量でシンプルなコントロール。iPhone と iPad のサンプルがあり、popover での表示にも対応。ペルシャ暦にも対応
- [JTAppleCalendar](https://github.com/patchthecode/JTAppleCalendar) - 非公式の Swift Apple カレンダーライブラリ。View。Control。iOS と tvOS 向け
- [JTCalendar](https://github.com/jonathantribouharet/JTCalendar) - iOS 向けのカスタマイズ可能なカレンダービュー。
- [KDCalendarView](https://github.com/mmick66/CalendarView) - Swift 4.0 で書かれた iOS カレンダーコンポーネント。縦横両方のレイアウト（とスクロール）と、ネイティブカレンダーイベントの表示に対応。
- [MBCalendarKit](https://github.com/MosheBerman/MBCalendarKit) - カスタマイズとローカライズを考慮して構築された iOS カレンダーフレームワーク。
- [RSDayFlow](https://github.com/ruslanskorb/RSDayFlow) - 無限スクロール対応の iOS 7+ カレンダー。

**[トップへ戻る](#contributing-and-collaborating)**

### カード

*カードベースの UI、パンジェスチャー、フリップとスワイプアニメーション*

- [CardAnimation](https://github.com/seedante/CardAnimation) - パンジェスチャーによるカードフリップアニメーション。
- [CardParts](https://github.com/intuit/CardParts) - UIKit の上に構築された、リアクティブなカードベース UI フレームワーク。
- [Cards](https://github.com/PaoloCuscela/Cards) - 素晴らしい iOS 11 App Store のカードビュー。
- [CardsLayout](https://github.com/filletofish/CardsLayout) - きれいなカードデザインのカスタムコレクションビューレイアウト。
- [DMSwipeCards](https://github.com/D-32/DMSwipeCards) - 遅延読み込みとジェネリクスに対応した Tinder 風カードスタック
- [Koloda](https://github.com/Yalantis/Koloda) - KolodaView は iOS で Tinder 風カードの実装を簡単にするために設計されたクラスです。
- [MDCSwipeToChoose](https://github.com/modocache/MDCSwipeToChoose) - Tinder.app のように、どんなビューもスワイプして「いいね」または「嫌い」。数時間ではなく数分で、フラッシュカードアプリやフォトビューアーなどを作れます！
- [Shuffle](https://github.com/mac-gallagher/Shuffle) - Tinder にインスパイアされた、多方向カードスワイプライブラリ。
- [TisprCardStack](https://github.com/tispr/tispr-card-stack) - カード UI を実現するライブラリ。
- [VerticalCardSwiper](https://github.com/JoniVR/VerticalCardSwiper) - Shazam の Discover UI と Tinder の結婚。Swift の UICollectionView で構築。

**[トップへ戻る](#contributing-and-collaborating)**

### フォームと設定

*入力バリデーター、フォームヘルパー、フォームビルダー。*

- [Eureka](https://github.com/xmartlabs/Eureka) - Swift のエレガントな iOS フォームビルダー。
- [Formalist](https://github.com/seedco/Formalist) - iOS 向けの宣言的フォーム構築フレームワーク
- [Former](https://github.com/ra1028/Former) - Former は UITableView ベースのフォームを簡単に作れる、完全にカスタマイズ可能な Swift2 ライブラリです。
- [formvalidator-swift](https://github.com/ustwo/formvalidator-swift) - 便利な方法でテキストフィールドとテキストビューの入力を検証するフレームワーク。
- [GenericPasswordRow](https://github.com/EurekaCommunity/GenericPasswordRow) - パスワード検証を実装するための Eureka の行。
- [SwiftValidator](https://github.com/SwiftValidatorCommunity/SwiftValidator) - Swift 向けのルールベース検証ライブラリ
- [SwiftyFORM](https://github.com/neoneye/SwiftyFORM) - SwiftyFORM は Swift で書かれた iOS フォームフレームワークです
- [ValidatedPropertyKit](https://github.com/SvenTiigi/ValidatedPropertyKit) - Property Wrapper でプロパティを簡単に検証。
- [XLForm](https://github.com/xmartlabs/XLForm) - XLForm は動的なテーブルビューフォームを作る、最も柔軟で強力な iOS ライブラリです。Swift と Obj-C に完全互換。

**[トップへ戻る](#contributing-and-collaborating)**

### キーボード

*キーボード回避、カスタムキーボード、入力ヘルパー。*

* [RSKKeyboardAnimationObserver](https://github.com/ruslanskorb/RSKKeyboardAnimationObserver) - シンプルな UIViewController カテゴリでキーボードの表示／解除アニメーションを扱う。
* [RFKeyboardToolbar](https://github.com/ruddfawcett/RFKeyboardToolbar) - UITextFields/UITextViews にカスタムボタンやツールバーを追加できる、柔軟な UIView と UIButton サブクラスです。
* [IQKeyboardManager](https://github.com/hackiftekhar/IQKeyboardManager) - コード不要の組み込み式ユニバーサルライブラリ。キーボードのスライドアップで UITextField/UITextView が隠れる問題を防ぎます。
* [NgKeyboardTracker](https://github.com/meiwin/NgKeyboardTracker) - iOS アプリでキーボードを追跡する Objective-C ライブラリ。
* [MMNumberKeyboard](https://github.com/matmartinez/MMNumberKeyboard) - 数字と（オプションで）小数点を使うシンプルなキーボード。
* [KeyboardObserver](https://github.com/morizotter/KeyboardObserver) - より簡単なキーボードイベント処理のために。
* [TPKeyboardAvoiding](https://github.com/michaeltyson/TPKeyboardAvoiding) - iOS でテキストフィールドをキーボードの邪魔から退ける組み込み式ユニバーサルソリューション
* [YYKeyboardManager](https://github.com/ibireme/YYKeyboardManager) - キーボードビューへのアクセスとキーボードアニメーションの追跡を可能にする iOS ユーティリティクラス。
* [KeyboardMan](https://github.com/nixzhu/KeyboardMan) - KeyboardMan はキーボードアニメーションを助けます。
* [MakemojiSDK](https://github.com/makemoji/MakemojiSDK) - Emoji キーボード SDK（iOS）
* [Typist](https://github.com/totocaster/Typist) - iOS アプリ向けの小さな組み込み式 Swift UIKit キーボードマネージャー。通知センターなしでキーボードの表示状態と振る舞いを管理するのに役立ちます。
* [KeyboardHideManager](https://github.com/bonyadmitr/KeyboardHideManager) - ビューをタップしてキーボードを隠すコード不要のマネージャー。Swift 製の iOS 向けです
* [Toolbar](https://github.com/1amageek/Toolbar) - 素晴らしい autolayout ツールバー。
* [IHKeyboardAvoiding](https://github.com/IdleHandsApps/IHKeyboardAvoiding) - キーボードが表示されている間、あらゆる UIView を見える状態に保つ組み込み式ユニバーサルソリューション — もう UIScrollView は不要！
* [NumPad](https://github.com/efremidze/NumPad) - テンキーパッド（Square のデザインにインスパイア）。
* [Ribbon](https://github.com/chriszielinski/Ribbon) - iOS と macOS 向けのシンプルなクロスプラットフォームツールバー／カスタム入力アクセサリビューライブラリ。
* [ISEmojiView](https://github.com/isaced/ISEmojiView) - iOS 向け Emoji キーボード

**[トップへ戻る](#contributing-and-collaborating)**

### ラベル

*強化された UILabel の代替とテキスト表示ユーティリティ。*

- [ActiveLabel.swift](https://github.com/optonaut/ActiveLabel.swift) - ハッシュタグ (#)、メンション (@)、URL (http://) に対応した、組み込み式の UILabel 代替。Swift 製
- [CountdownLabel](https://github.com/suzuki-0000/CountdownLabel) - モーフィングアニメーションと便利な機能を備えたシンプルなカウントダウン UILabel。
- [GlitchLabel](https://github.com/kciter/GlitchLabel) - iOS 向けのグリッチ UILabel。
- [LTMorphingLabel](https://github.com/lexrus/LTMorphingLabel) - Swift で書かれた UILabel の優雅なモーフィング効果。
- [MZTimerLabel](https://github.com/mineschan/MZTimerLabel) - Apple の時計アプリのように UILabel をカウントダウンタイマーやストップウォッチとして使える、便利な iOS クラス。
- [NumberMorphView](https://github.com/me-abhinav/NumberMorphView) - 数値トゥイーンまたは数値モーフィングと呼ばれる技法で遷移・アニメーションできる、数字表示ラベルビュー。
- [Preloader.Ophiuchus](https://github.com/Yalantis/Preloader.Ophiuchus) - テキスト全体または文字にアニメーションを適用するカスタム Label。
- [RQShineLabel](https://github.com/zipme/RQShineLabel) - 秘密のアプリのようなテキストアニメーション
- [STULabel](https://github.com/stephan-tolksdorf/STULabel) -  UILabel より高速で、非同期レンダリング、UIDragInteraction 対応のリンク、非常に柔軟なテキスト切り詰め、Auto Layout、UIAccessibility などに対応したラベルビュー。
- [THLabel](https://github.com/tobihagemann/THLabel) - UILabel のサブクラス。追加で影のぼかし、内側の影、文字の縁取り、グラデーション塗りを可能にします。
- [TOMSMorphingLabel](https://github.com/tomknig/TOMSMorphingLabel) - ラベルのテキスト値の間の設定可能なモーフィングトランジション。
- [TriLabelView](https://github.com/mukeshthawani/TriLabelView) - Swift で書かれた iOS 向け三角形のコーナーラベルビュー。
- [TTTAttributedLabel](https://github.com/TTTAttributedLabel/TTTAttributedLabel) - 属性、データディテクター、リンクなどをサポートする UILabel の組み込み式代替
- [UICountingLabel](https://github.com/dataxpress/UICountingLabel/) - UILabel にアニメーションカウント機能を追加。
- [ZCAnimatedLabel](https://github.com/overboming/ZCAnimatedLabel) - 細やかな出現／消滅アニメーションを持つ UILabel の代替

**[トップへ戻る](#contributing-and-collaborating)**

### ログイン

*すぐに使えるログイン UI と認証フロー。*

- [Cely](https://github.com/cely-tools/Cely) - Swift で書かれたプラグアンドプレイのログインフレームワーク。
- [LFLoginController](https://github.com/awesome-labs/LFLoginController) - Swift で書かれたカスタマイズ可能なログイン画面。
- [LoginKit](https://github.com/IcaliaLabs/LoginKit) - LoginKit は iOS アプリにログイン／サインアップ UX を追加する、素早く簡単な方法です。

**[トップへ戻る](#contributing-and-collaborating)**

### メニュー

*サイドメニュー、ドロップダウン、コンテキストメニュー、ナビゲーションドロワー。*

- [AirBar](https://github.com/uptechteam/AirBar) - UIScrollView 駆動の展開可能メニュー。Swift 3 製。
- [AKSideMenu](https://github.com/dogo/AKSideMenu) - 視差効果付きの美しい iOS サイドメニューライブラリ。
- [BTNavigationDropdownMenu](https://github.com/PhamBaTho/BTNavigationDropdownMenu) - Swift で書かれたエレガントなドロップダウンメニュー。ナビゲーションバーの下に表示され、ユーザーがナビゲーションタイトルをクリックすると関連項目のリストを表示します。
- [CategorySliderView](https://github.com/cemolcay/CategorySliderView) - カテゴリを選ぶスライダービュー。任意の UIView 型をカテゴリ項目ビューにできます。完全にカスタマイズ可能
- [CircleBar](https://github.com/softhausHQ/CircleBar) - 🔶 楽しくて使いやすい iOS タブバーナビゲーションコントローラー。
- [CircleMenu](https://github.com/Ramotion/circle-menu) - アニメーションする多選択肢メニューボタン。
- [Context-Menu.iOS](https://github.com/Yalantis/Context-Menu.iOS) - 素晴らしいアニメーションコンテキストメニューをアプリに簡単に追加できます。
- [ContextMenu](https://github.com/GitHawkApp/ContextMenu) - Things 3 にインスパイアされた iOS コンテキストメニュー UI。
- [DropDown](https://github.com/AssistoLab/DropDown) - iOS 向けの Material Design ドロップダウン
- [DropDownMenuKit](https://github.com/qmathe/DropDownMenuKit) - ナビゲーションバーまたはツールバーに取り付けられる、シンプルでモジュール化された高度にカスタマイズ可能な UIKit メニュー。Swift 製。
- [Dropdowns](https://github.com/onmyway133/Dropdowns) - 💧 Swift のドロップダウン
- [DTPagerController](https://github.com/tungvoduc/DTPagerController) - 水平スクローラーで一連の ViewController を表示する、完全にカスタマイズ可能なコンテナビューコントローラー
- [ENSwiftSideMenu](https://github.com/evnaz/ENSwiftSideMenu) - Swift で書かれた、iOS 7/8 向けのシンプルなサイドメニュー。
- [ExpandingMenu](https://github.com/monoqlo/ExpandingMenu) - ExpandingMenu は Swift で書かれた iOS 展開メニューボタンです。
- [FanMenu](https://github.com/exyte/fan-menu) - Macaw ベースの円形レイアウトメニュー。
- [FAPanels](https://github.com/fahidattique55/FAPanels) - トランジション用の FAPanels
- [FlowingMenu](https://github.com/yannickl/FlowingMenu) - 流れるようなバウンド効果でメニューを表示するインタラクティブビュートランジション。Swift 製
- [FrostedSidebar](https://github.com/edekhayser/FrostedSidebar) - Swift と iOS 8 API を使ったハンバーガーメニュー
- [GuillotineMenu](https://github.com/Yalantis/GuillotineMenu) - Swift で実装した私たちのギロチンメニュートランジションアニメーションは、あの悪名高い処刑機械を少し思い起こさせます。
- [IGCMenu](https://github.com/sunilsharma08/IGCMenu) - アニメーション付きのグリッド・円形メニュー。カスタマイズ簡単。
- [IGLDropDownMenu](https://github.com/bestwnh/IGLDropDownMenu) - きれいなアニメーションと簡単なカスタマイズが特徴の iOS ドロップダウンメニュー。
- [InteractiveSideMenu](https://github.com/handsomecode/InteractiveSideMenu) - Swift 3 で書かれたカスタマイズ可能な iOS インタラクティブサイドメニュー。
- [KWDrawerController](https://github.com/Kawoou/KWDrawerController) - 使いやすいドロービューコントローラー！
- [KYGooeyMenu](https://github.com/KittenYang/KYGooeyMenu) - 悪くないグーイー効果メニュー。
- [LLSlideMenu](https://github.com/lilei644/LLSlideMenu) - iOS アプリ向けのスプリングスライドメニューです
- [MKDropdownMenu](https://github.com/maxkonovalov/MKDropdownMenu) - あらゆるニーズに合わせられる、多数のカスタマイズ可能なパラメータを備えた iOS ドロップダウンメニュー。
- [PageMenu](https://github.com/PageMenu/PageMenu) - スクロールビュー内に置かれた他のビューコントローラーから構築されるページングメニューコントローラー（Spotify、Windows Phone、Instagram のような）
- [PagingKit](https://github.com/kazuhiro4949/PagingKit) - PagingKit はカスタマイズ可能なメニュー UI を提供します。他のライブラリより柔軟なレイアウトとデザインが可能です。
- [Panels](https://github.com/antoniocasero/Panels) - Panels はアプリケーションにスライドパネルを簡単に追加するフレームワークです。
- [Parchment](https://github.com/rechsteiner/Parchment) - 高度にカスタマイズ可能なメニューを備えたページングビューコントローラー。UICollectionView 上に構築され、カスタムレイアウトと無限データソースに対応。
- [Persei](https://github.com/Yalantis/Persei) - Swift で書かれた、UITableView / UICollectionView / UIScrollView 向けのアニメーションするトップメニュー
- [PopMenu](https://github.com/xhzengAIB/PopMenu) - PopMenu は新浪微博／網易アプリにインスパイアされたポップアップアニメーションメニューです。
- [RadialMenu](https://github.com/bradjasper/radialmenu) - RadialMenu は Swift と POP で構築された、タッチコンテキストメニュー（iOS 8 の iMessage 録音のような）を提供するカスタムコントロールです
- [RESideMenu](https://github.com/romaonthego/RESideMenu) - Dribbble のショットにインスパイアされた、視差効果付きの iOS 7/8 スタイルサイドメニュー。
- [RHSideButtons](https://github.com/robertherdzik/RHSideButtons) - Android（Material Design）フローティングアクションボタンのバリエーションを iOS 向けに簡単に実装できるライブラリ。アプリの小さなサイドメニューとして使えます。
- [Side-Menu.iOS](https://github.com/Yalantis/Side-Menu.iOS) - UI をカスタマイズできるアニメーションサイドメニュー
- [SideMenu](https://github.com/jonkykong/SideMenu) - Facebook にインスパイアされたシンプルな Swift サイドメニューコントロール。右と左の両サイド。多くのカスタマイズとアニメーションオプション。Storyboard でコードなしで実装可能。
- [SlideMenuControllerSwift](https://github.com/dekatotoro/SlideMenuControllerSwift) - Google+、iQON、Feedly、Ameba iOS アプリをベースにした iOS スライドメニュービュー。純 Swift 製。
- [SPLarkController](https://github.com/IvanVorobei/SPLarkController) - ボタンとスイッチ付きの設定画面。
- [SSASideMenu](https://github.com/SSA111/SSASideMenu) - RESideMenu の Swift 実装。視差効果付きの iOS 7/8 スタイルサイドメニュー。
- [SwiftyMenu](https://github.com/KarimEbrahemAbdelaziz/SwiftyMenu) - シンプルでエレガントな iOS ドロップダウンメニュー 🔥💥
- [SwipeMenuViewController](https://github.com/yysskk/SwipeMenuViewController) - スワイプ可能なタブとメニューのビューおよびビューコントローラー。
- [ViewDeck](https://github.com/ViewDeck/ViewDeck) - Path 2.0 や Facebook iOS アプリにあるスライド機能の実装。
- [VLDContextSheet](https://github.com/vangelov/VLDContextSheet) - Pinterest iOS アプリのようなコンテキストメニュー
- [XXXRoundMenuButton](https://github.com/zsy78191/XXXRoundMenuButton) - シンプルな円形スタイルメニュー。
- [YNDropDownMenu](https://github.com/younatics/YNDropDownMenu) - Swift3 で書かれたかわいい iOS ドロップダウンメニュー。

**[トップへ戻る](#contributing-and-collaborating)**

### ナビゲーションバー

*カスタマイズ可能なナビゲーションバーと画面上部の UI コンポーネント。*

- [AMScrollingNavbar](https://github.com/andreamazz/AMScrollingNavbar) - UIScrollView のスクロールに追従するスクロール可能な UINavigationBar
- [BusyNavigationBar](https://github.com/gmertk/BusyNavigationBar) - ローディング効果を表示する UINavigationBar 拡張
- [HidingNavigationBar](https://github.com/tristanhimmelman/HidingNavigationBar) - ユーザーのスクロールに合わせてビューコントローラーのナビゲーションバー（とタブバー）を簡単に隠したり表示したり
- [KDInteractiveNavigationController](https://github.com/kingiol/KDInteractiveNavigationController) - 非表示または表示状態の UINavigationBar でインタラクティブな pop に対応する UINavigationController サブクラス。
- [KMNavigationBarTransition](https://github.com/MoZhouqi/KMNavigationBarTransition) - 組み込み式ユニバーサルライブラリ。ナビゲーションバーのスタイル管理を助け、ビューコントローラーの push/pop 時に異なるナビゲーションバーのスタイル間のトランジションアニメーションを滑らかにします。全方向対応。
- [LTNavigationBar](https://github.com/ltebean/LTNavigationBar) - 外観を動的に変更できる UINavigationBar カテゴリ
- [RainbowNavigation](https://github.com/DanisFabric/RainbowNavigation) - Push と Pop のときに UINavigationBar の背景色を簡単に変更
- [TONavigationBar](https://github.com/TimOliver/TONavigationBar) - ナビゲーションバーの背景を「透明」に設定し、視認できるようにゆっくりと戻す機能を追加するシンプルなサブクラス。iOS のミュージックアプリの効果に似ています。

**[トップへ戻る](#contributing-and-collaborating)**

### ピッカー

*カスタマイズ可能なピッカービューと選択コントロール。*

- [ActionSheetPicker-3.0](https://github.com/skywinder/ActionSheetPicker-3.0/) - iOS のドロップダウン UIPickerView / ActionSheet 機能を素早く再現。
- [ADDatePicker](https://github.com/abhiperry/ADDatePicker) - 純 Swift で書かれた、完全にカスタマイズ可能な iOS 水平 PickerView ライブラリ。
- [CountryPicker](https://github.com/4taras4/CountryCode) - :date: 国名・国旗・電話番号のプレフィックス付き UIPickerView
- [CountryPickerView](https://github.com/kizitonwose/CountryPickerView)- iOS アプリで国の情報を効率的に収集する、シンプルでカスタマイズ可能なビュー
- [CZPicker](https://github.com/chenzeyu/CZPicker) - ポップアップとして表示される iOS ピッカービュー。
- [DatePickerDialog](https://github.com/squimer/DatePickerDialog-iOS-Swift) - iOS 向けの日付選択ダイアログ
- [Mandoline](https://github.com/blueapron/Mandoline) - あらゆる「選択」のニーズに応える iOS ピッカービュー
- [McPicker](https://github.com/kmcgill88/McPicker-iOS) - アニメーション付きで回転にも対応できる、カスタマイズ可能でクロージャ駆動の UIPickerView 組み込み式ソリューション。
- [PickerView](https://github.com/filipealva/PickerView) - Swift 製の UIPickerView のカスタマイズ可能な代替。
- [SKCountryPicker](https://github.com/SURYAKANTSHARMA/CountryPicker) - 国またはダイヤルコードを選ぶためのシンプルでカスタマイズ可能な国ピッカー。

**[トップへ戻る](#contributing-and-collaborating)**

### ポップアップ

*ポップアップ、モーダル、ボトムシート、オーバーレイコンポーネント。*

- [AZDialogViewController](https://github.com/Minitour/AZDialogViewController) - Snapchat のアラートダイアログを模倣した、高度にカスタマイズ可能なアラートダイアログコントローラー。
- [FFPopup](https://github.com/JonyFang/FFPopup) - ⛩FFPopup はカスタムビューをポップアップとして表示する軽量ライブラリです。
- [LNPopupController](https://github.com/LeoNatan/LNPopupController) - 他のビューコントローラーのポップアップとしてビューコントローラーを表示するフレームワーク。Apple Music や Podcasts アプリにとてもよく似ています。
- [MIBlurPopup](https://github.com/MarioIannotta/MIBlurPopup) - MIBlurPopup はぼかし背景付きの素晴らしいポップアップを作らせてくれます。
- [MijickPopups](https://github.com/Mijick/Popups) - ポップアップ、ポップオーバー、シート、アラート、トースト、バナーなどの表示をシンプルに。SwiftUI で、SwiftUI のために書かれています。
- [NMPopUpView](https://github.com/psy2k/NMPopUpView) - きれいなポップアップウィンドウを表示するシンプルな iOS クラス。Swift 版と Objective-C 版があります。
- [Popover](https://github.com/corin8823/Popover) - Facebook アプリのようなバルーンライブラリ。純 Swift 製。
- [PopupController](https://github.com/daisuke310vvv/PopupController) - 一時的なポップアップビューを表示するカスタマイズ可能なコントローラー。
- [PopupDialog](https://github.com/Orderella/PopupDialog) - Swift で書かれた、シンプルでカスタマイズ可能な iOS ポップアップダイアログ。UIAlertController のアラートスタイルを置き換えます。
- [PopupView](https://github.com/exyte/PopupView) - SwiftUI で書かれたトーストとポップアップライブラリ。
- [PopupWindow](https://github.com/shin8484/PopupWindow) - PopupWindow は別の UIWindow を使った Swift 製のシンプルなポップアップです。
- [Presentr](https://github.com/IcaliaLabs/Presentr) - iOS 8+ のカスタム ViewController プレゼンテーションのラッパー
- [SelectionDialog](https://github.com/kciter/SelectionDialog) - シンプルな選択ダイアログ。
- [STPopup](https://github.com/kevin0571/STPopup) - STPopup は iPhone と iPad の両方で使える、ポップアップスタイルの UINavigationController を提供します。
- [SubscriptionPrompt](https://github.com/binchik/SubscriptionPrompt) - Tinder が使っているようなサブスクリプションビューコントローラー
- [SwiftEntryKit](https://github.com/huri000/SwiftEntryKit) - 高度にカスタマイズ可能な iOS 向けポップアップ、アラート、バナーのプレゼンター。さまざまなプリセットを提供し、純 Swift 製です。

**[トップへ戻る](#contributing-and-collaborating)**

### プログレスビュー

*プログレスバーと確定的プログレスインジケーター。*

- [GradientCircularProgress](https://github.com/keygx/GradientCircularProgress) - Swift のカスタマイズ可能なプログレスインジケーターライブラリ。

**[トップへ戻る](#contributing-and-collaborating)**

### プルして更新

*プルトゥリフレッシュコントロールとアニメーション。*

- [ADChromePullToRefresh](https://github.com/Antondomashnev/ADChromePullToRefresh) - Chrome iOS アプリ風の、複数アクション付きプルトゥリフレッシュ。
- [BreakOutToRefresh](https://github.com/dasdom/BreakOutToRefresh) - SpriteKit を使った、プレイできるプルトゥリフレッシュビュー。
- [CBStoreHouseRefreshControl](https://github.com/coolbeet/CBStoreHouseRefreshControl) - Storehouse iOS アプリにインスパイアされた、完全にカスタマイズ可能なプルトゥリフレッシュコントロール
- [CRRefresh](https://github.com/CRAnimation/CRRefresh) - 使いやすいプルトゥリフレッシュ。
- [DGElasticPullToRefresh](https://github.com/gontovnik/DGElasticPullToRefresh) - Swift で開発された iOS 向けの弾力性のあるプルトゥリフレッシュ
- [ESPullToRefresh](https://github.com/eggswift/pull-to-refresh) - カスタマイズ可能なプルトゥリフレッシュ。上部に素敵なアニメーション付き
- [KafkaRefresh](https://github.com/HsiaohuiHsiang/KafkaRefresh) - より速く簡単な iOS 開発のための、アニメーション付きでカスタマイズ可能で柔軟なプルトゥリフレッシュフレームワーク。
- [MJRefresh](https://github.com/CoderMJLee/MJRefresh) 使いやすいプルトゥリフレッシュ。
- [mntpulltoreact](https://github.com/mentionapp/mntpulltoreact) - 1 つのジェスチャーで多くのアクション。プルトゥリフレッシュの進化形。
- [PullToBounce](https://github.com/entotsu/PullToBounce) - UIScrollView 向けのアニメーション「プルして更新」ライブラリ。
- [PullToMakeSoup](https://github.com/Yalantis/PullToMakeSoup) - UIScrollView に簡単に追加できる、カスタムアニメーションのプルトゥリフレッシュ
- [PullToRefreshCoreText](https://github.com/cemolcay/PullToRefreshCoreText) - アニメーション付きテキスト描画スタイルの、すべての UIScrollView 型クラス向けプルトゥリフレッシュ拡張
- [PullToRefreshSwift](https://github.com/dekatotoro/PullToRefreshSwift) - シンプルでかっこいい iOS プルトゥリフレッシュライブラリ。純 Swift 製。
- [RainyRefreshControl](https://github.com/Onix-Systems/RainyRefreshControl) - [コンセプト](https://dribbble.com/shots/2242263--1-Pull-to-refresh-Freebie-Weather-Concept)にインスパイアされたシンプルな iOS リフレッシュコントロール。
- [ReplaceAnimation](https://github.com/fruitcoder/ReplaceAnimation) - スティッキーヘッダーの flow layout を使った UICollectionView のプルトゥリフレッシュアニメーション。Swift 製
- [SVPullToRefresh](https://github.com/samvermette/SVPullToRefresh) - 1 行のコードであらゆる UIScrollView にプルトゥリフレッシュと無限スクロールを追加。http://samvermette.com/314
- [UzysAnimatedGifPullToRefresh](https://github.com/uzysjung/UzysAnimatedGifPullToRefresh) - 簡単なコードだけで、アニメーション GIF を使ったプルトゥリフレッシュをあらゆる scrollView に追加

**[トップへ戻る](#contributing-and-collaborating)**

### レーティングスター

*星評価とレビュー入力コントロール。*

- [Cosmos](https://github.com/evgenyneu/Cosmos) - iOS / Swift 向けの星評価コントロール
- [FloatRatingView](https://github.com/glenyi/FloatRatingView) - Swift で書かれた、整数・半分・浮動小数点の評価コントロール
- [HCSStarRatingView](https://github.com/hsousa/HCSStarRatingView) - Objective-C で書かれたシンプルな iOS 星評価ビュー
- [StarryStars](https://github.com/peterprokop/StarryStars) - StarryStars は評価の表示と編集のための iOS GUI ライブラリです
- [TTGEmojiRate](https://github.com/zekunyan/TTGEmojiRate) - Swift で実装された、emoji のような iOS 評価ビュー。

**[トップへ戻る](#contributing-and-collaborating)**

### スクロールビュー

*カスタム UIScrollView サブクラスとスクロールヘルパー。*

- [AppStoreStyleHorizontalScrollView](https://github.com/terenceLuffy/AppStoreStyleHorizontalScrollView) - App Store スタイルの水平スクロールビュー。
- [CrownControl](https://github.com/huri000/CrownControl) - Apple Watch のデジタルクラウンにインスパイアされた CrownControl は、親指を離さずにスクロール可能なコンテンツをスクロールできる小さなアクセサリビューです。
- [PullToDismiss](https://github.com/sgr-ksmt/PullToDismiss) - Swift で、スクロールビューやナビゲーションバーを引っ張ることでモーダルビューコントローラーを閉じられます。
- [ScrollingFollowView](https://github.com/ktanaka117/ScrollingFollowView) - ScrollingFollowView は UIScrollView のスクロールに追従するシンプルなビューです。
- [SegementSlide](https://github.com/Jiar/SegementSlide) - 多層 UIScrollView のネストスクロールソリューション。
- [ShelfView-iOS](https://github.com/tdscientist/ShelfView-iOS) - 棚に本を表示する iOS カスタムビュー
- [SlideController](https://github.com/touchlane/SlideController) - SlideController は完全に Swift で書かれた、シンプルで柔軟な UI コンポーネントです。ジェネリクスの力を使って構築された、UIPageViewController の素晴らしい代替です。
- [SpreadsheetView](https://github.com/bannzai/SpreadsheetView) - iOS アプリケーション向けの完全に設定可能なスプレッドシートビュー UI。このフレームワークにより、Excel を使うかのようにスケジュール、ガントチャート、時間割などの複雑なレイアウトを簡単に作成できます。
- [UIScrollView-InfiniteScroll](https://github.com/pronebird/UIScrollView-InfiniteScroll) - UIScrollView の無限スクロールカテゴリ。
- [VegaScroll](https://github.com/AppliKeySolutions/VegaScroll) - VegaScroll は完全に Swift 4 で書かれた、UICollectionView 向けの軽量アニメーションフローレイアウトです。iOS 11 と Xcode 9 に互換

**[トップへ戻る](#contributing-and-collaborating)**

### セグメントコントロール

*セグメントコントロールとタブスタイルのセレクター。*

- [BetterSegmentedControl](https://github.com/gmarm/BetterSegmentedControl) - 使いやすくカスタマイズ可能な UISegmentedControl と UISwitch の代替。
- [DGRunkeeperSwitch](https://github.com/gontovnik/DGRunkeeperSwitch) - Runkeeper デザインのスイッチコントロール（2 部構成のセグメントコントロール）
- [HMSegmentedControl](https://github.com/HeshamMegid/HMSegmentedControl) - Google Currents などさまざまな Google 製品で使われているセグメントコントロールのスタイルを模倣する、UISegmentedControl の組み込み式代替。
- [LUNSegmentedControl](https://github.com/Stormotion-Mobile/LUNSegmentedControl) - インタラクティブなアニメーション付きのカスタマイズ可能なセグメントコントロール。
- [MultiSelectSegmentedControl](https://github.com/yonat/MultiSelectSegmentedControl) - 標準の `UISegmentedControl` に複数選択を追加。
- [PinterestSegment](https://github.com/TBXark/PinterestSegment) - マスキングアニメーション付きの Pinterest 風セグメントコントロール。
- [SJFluidSegmentedControl](https://github.com/sasojadrovski/SJFluidSegmentedControl) - カスタム外観とインタラクティブなアニメーションを備えたセグメントコントロール。Swift 3.0 製。
- [TwicketSegmentedControl](https://github.com/twicketapp/TwicketSegmentedControl) - Swift で書かれた、iOS 向けカスタム UISegmentedControl の代替。

**[トップへ戻る](#contributing-and-collaborating)**

### スライダー

*UISlider サブクラスとカスタムスライダーコントロール。*

- [AGCircularPicker](https://github.com/agilie/AGCircularPicker) - AGCircularPicker は、あらゆる計算パラメータを管理するコントローラーを作るのに役立つコンポーネントです。
- [ASValueTrackingSlider](https://github.com/alskipp/ASValueTrackingSlider) - ポップアップビューにスライダーの値を表示する UISlider サブクラス
- [CircleSlider](https://github.com/shushutochako/CircleSlider) - CircleSlider は円形スライダーライブラリです。純 Swift 製。
- [Fluid Slider](https://github.com/Ramotion/fluid-slider) - 選択した正確な値を表示するポップアップバブル付きのスライダーウィジェット。
- [HGCircularSlider](https://github.com/HamzaGhazouani/HGCircularSlider) - iOS アプリケーション向けのカスタム再利用可能な円形スライダーコントロール。
- [MARKRangeSlider](https://github.com/vadymmarkov/MARKRangeSlider) - 2 つのつまみ（レンジスライダー）を持つ、カスタム再利用可能なスライダーコントロール。
- [MTCircularSlider](https://github.com/EranBoudjnah/MTCircularSlider) - 多機能な円形スライダーコントロール。
- [MultiSlider](https://github.com/yonat/MultiSlider) - 複数のつまみと値、オプションのスナップ間隔と値ラベルを備えた UISlider のクローン。
- [RangeSeekSlider](https://github.com/WorldDownTown/RangeSeekSlider) - iOS 向けのカスタマイズ可能なレンジスライダー。
- [RangeSlider](https://github.com/warchimede/RangeSlider) - Swift で作られたシンプルなレンジスライダー
- [StepSlider](https://github.com/spromicky/StepSlider) - StepSlider は、事前定義された整数値向けの UISlider のようなスライダーのカスタム実装です。
- [TTRangeSlider](https://github.com/TomThorpe/TTRangeSlider) - UISlider に似たスタイルのスライダーですが、最小値と最大値の範囲を選択できます。

**[トップへ戻る](#contributing-and-collaborating)**

### スプラッシュビュー

*起動画面、スプラッシュビュー、ローディングアニメーション。*

- [CBZSplashView](https://github.com/callumboddy/CBZSplashView) - Twitter スタイルのスプラッシュスクリーンビュー。成長して背後の初期ビューを現します。
- [RevealingSplashView](https://github.com/PiXeL16/RevealingSplashView) - アニメーションして内容を現すスプラッシュビュー。Twitter のスプラッシュにインスパイア

**[トップへ戻る](#contributing-and-collaborating)**

### ステータスバー

*ステータスバーのカスタマイズとオーバーレイユーティリティ。*

- [Bartinter](https://github.com/MaximKotliar/Bartinter) - 背後のコンテンツに応じたステータスバーの色付け。動的に更新。

**[トップへ戻る](#contributing-and-collaborating)**

### ステッパー

*UIStepper サブクラスと増減コントロール。*

- [GMStepper](https://github.com/gmertk/GMStepper) - 中央にスライドするラベルが付いたステッパー。
- [SnappingStepper](https://github.com/yannickl/SnappingStepper) - Swift で書かれたエレガントな UIStepper の代替
- [ValueStepper](https://github.com/BalestraPatrick/ValueStepper) - 自身の値を表示する Stepper オブジェクト。

**[トップへ戻る](#contributing-and-collaborating)**

### スイッチ

*カスタム UISwitch の代替とトグルコントロール。*

- [AIFlatSwitch](https://github.com/cocoatoucher/AIFlatSwitch) - iOS の UISwitch に代わるフラットなコンポーネント
- [AnimatedSwitch](https://github.com/alsedi/AnimatedSwitch) - 切り替え時に親ビューを色で塗り重ねる Swift 製 UISwitch。
- [PMZSwitch](https://github.com/kovpas/PMZSwitch) - また一つ、アニメーションするトグル
- [RAMPaperSwitch](https://github.com/Ramotion/paper-switch) - RAMPaperSwitch はスイッチが ON になったときに親ビューを色で塗り重ねる Swift モジュールです。
- [SevenSwitch](https://github.com/bvogelzang/SevenSwitch) - iOS7 スタイルの組み込み式 UISwitch 代替。
- [Switch](https://github.com/T-Pham/Switch) - Interface Builder を完全にサポートして Swift で実装された iOS スイッチコントロール。
- [Switcher](https://github.com/knn90/Switcher) - Swift - 状態変更時にアニメーションするカスタム UISwitcher
- [TKSwitcherCollection](https://github.com/TBXark/TKSwitcherCollection) - アニメーションスイッチのコレクション
- [ViralSwitch](https://github.com/andreamazz/ViralSwitch) - 自身の色を親ビューに感染させる UISwitch。

**[トップへ戻る](#contributing-and-collaborating)**

### タブバー

*カスタマイズ可能なタブバーとタブナビゲーションコンポーネント。*

- [adaptive-tab-bar](https://github.com/Ramotion/adaptive-tab-bar) - AdaptiveController は、ネイティブまたはカスタムの iOS UI 要素にカスタム状態を追加する「プログレッシブリダクション」Swift モジュールです
- [animated-tab-bar](https://github.com/Ramotion/animated-tab-bar) - RAMAnimatedTabBarController はタブバーアイテムにアニメーションを追加する Swift モジュールです。
- [AnimatedTabBar](https://github.com/exyte/AnimatedTabBar) - 複数のプリセットアニメーションを備えたタブバー。SwiftUI 製。
- [AZTabBarController](https://github.com/Minitour/AZTabBarController) - Swift 3.0 で書かれた iOS 向けカスタムタブバーコントローラー
- [BEKCurveTabbar](https://github.com/behrad-kzm/BEKCurveTabbar) - XCode +10 と互換性があり、Interface_Builder パネルから完全にカスタマイズ可能。BEKCurveTabBar は UITabBar 派生クラスで、すべての iOS デバイスと互換性があります。
- [ColorMatchTabs](https://github.com/Yalantis/ColorMatchTabs) - タブを表示する面白い方法
- [ESTabBarController](https://github.com/ezescaruli/ESTabBarController) - ボタンをハイライトし、カスタムアクションを設定できる iOS タブバーコントローラー。
- [ExpandedTabBar](https://github.com/yervandsar/ExpandedTabBar) - UITabBarController の「その他」項目に対する、とてもクリエイティブにデザインされたソリューション
- [FoldingTabBar.iOS](https://github.com/Yalantis/FoldingTabBar.iOS) - 折りたたみタブバーとタブバーコントローラー
- [GGTabBar](https://github.com/Goles/GGTabBar) - また一つの UITabBar と UITabBarController（iOS タブバー）の代替。ただしビュー階層の配置に Auto Layout を使用します。
- [GooeyTabbar](https://github.com/KittenYang/GooeyTabbar) - グーイー効果のタブバー
- [KYWheelTabController](https://github.com/ykyouhei/KYWheelTabController) - KYWheelTabController は UITabBarController のサブクラスです。UITabBar の代わりに円形メニューを表示します。
- [MiniTabBar](https://github.com/D-32/MiniTabBar) - クリーンでシンプルな UITabBar の代替
- [ScrollPager](https://github.com/aryaxt/ScrollPager) - タブ（セグメント）のリストを表示し、指定したビュー間のページングを管理するスクロールページャー
- [Segmentio](https://github.com/Yalantis/Segmentio) - Swift で書かれた、アニメーションする上下セグメントコントロール。
- [SmoothTab](https://github.com/yervandsar/SmoothTab) - iOS アプリ向けのスムーズでカスタマイズ可能なタブ。
- [SwipeableTabBarController](https://github.com/marcosgriselli/SwipeableTabBarController) - タブ間のスワイプインタラクションを備えた UITabBarController。
- [SwipeViewController](https://github.com/fortmarek/SwipeViewController) - SwipeViewController は RKSwipeBetweenViewControllers の Swift 改造版です。ページ／ビューコントローラー間をナビゲートします
- [TabDrawer](https://github.com/winslowdibona/TabDrawer) - TabBarItem を選んだときにコードブロックを実行できるカスタマイズ可能なタブバー UI 要素。Swift 製
- [Tabman](https://github.com/uias/Tabman) - iOS 向けの、インジケーターバー付きの強力なページングビューコントローラー。
- [TabPageViewController](https://github.com/EndouMari/TabPageViewController) - ページングビューコントローラーとスクロールタブビュー。
- [WormTabStrip](https://github.com/EzimetYusup/WormTabStrip) Swift で書かれた iOS 向けの美しい ViewPager（Android の [SmartTabLayout](https://github.com/ogaclejapan/SmartTabLayout) にインスパイア）
- [XLPagerTabStrip](https://github.com/xmartlabs/XLPagerTabStrip) - iOS 版の Android PagerTabStrip。

**[トップへ戻る](#contributing-and-collaborating)**

### テーブルビュー / コレクションビュー

*UITableView と UICollectionView のためのツールとコンポーネント。*

#### テーブルビュー

*UITableView のヘルパー、データソース抽象化、セルユーティリティ。*

- [AMWaveTransition](https://github.com/andreamazz/AMWaveTransition) - テーブルビューを保持するビューコントローラー間のカスタムトランジション。
- [CascadingTableDelegate](https://github.com/edopelawi/CascadingTableDelegate) - Swift でよりクリーンな UITableViewDelegate と UITableViewDataSource を書く、無駄のない方法。
- [DTTableViewManager](https://github.com/DenTelezhkin/DTTableViewManager) - ジェネリクスと関連型によって駆動される、プロトコル指向の UITableView 管理。
- [MGSwipeTableCell](https://github.com/MortimerGoro/MGSwipeTableCell) - さまざまなトランジションでスワイプ可能なボタンを表示できる UITableViewCell サブクラス。
- [MYTableViewIndex](https://github.com/mindz-eye/MYTableViewIndex) - Swift で書かれた、ピクセルパーフェクトな UITableView セクションインデックスの代替
- [preview-transition](https://github.com/Ramotion/preview-transition) - PreviewTransition はシンプルなプレビューギャラリーコントローラーです
- [QuickTableViewController](https://github.com/bcylin/QuickTableViewController) - Swift で設定用の UITableView を作るシンプルな方法。
- [ReverseExtension](https://github.com/marty-suzuki/ReverseExtension) - テーブルビューの下からセルを挿入できる UITableView 拡張。
- [SelectionList](https://github.com/yonat/SelectionList) - UITableView をベースにした、シンプルな単一選択・複数選択のチェックリスト。
- [Static](https://github.com/venmo/Static) - Swift による iOS 向けのシンプルな静的テーブルビュー。
- [SwiftReorder](https://github.com/adamshin/SwiftReorder) - ほんの数行のコードで、あらゆるテーブルビューにドラッグ＆ドロップの並べ替えを追加。堅牢、軽量、完全にカスタマイズ可能。[e]
- [SwipeCellKit](https://github.com/SwipeCellKit/SwipeCellKit) - 標準の Mail.app をベースに Swift で実装された、スワイプ可能な UITableViewCell。
- [SWTableViewCell](https://github.com/CEWendel/SWTableViewCell) - スワイプするとユーティリティボタンが現れるコンテンツビューを実装した、使いやすい UITableViewCell サブクラス（iOS 7 メールアプリに類似）
- [TableFlip](https://github.com/mergesort/TableFlip) - かっこいい UITableView アニメーションをよりシンプルに！(╯°□°）╯︵ ┻━┻
- [TableKit](https://github.com/maxsokolov/TableKit) - Swift による型安全な宣言的テーブルビュー
- [TableViewDragger](https://github.com/KyoheiG3/TableViewDragger) - UITableView のセルをドラッグ＆ドロップで並べ替えできます。
- [TimelineTableViewCell](https://github.com/kf99916/TimelineTableViewCell) - Swift 3.0 で書かれた UITableViewCell で実装されたシンプルなタイムラインビュー。
- [TORoundedTableView](https://github.com/TimOliver/TORoundedTableView) - iPad の Settings.app のようにスタイルを適用する UITableView サブクラス
- [VBPiledView](https://github.com/v-braun/VBPiledView) - UITableView や UIImageView の代わり、またはメニューとして使えるシンプルで美しい積み重ね UIView
- [VTMagic](https://github.com/tianzhuo112/VTMagic) - VTMagic は iOS 向けのページコンテナライブラリです。
- [ZYThumbnailTableView](https://github.com/liuzhiyi1992/ZYThumbnailTableView) - サムネイルセルだけを持つ TableView。ジェスチャーで他の expansionView を展開できます。すべて DIY

**[トップへ戻る](#contributing-and-collaborating)**

#### コレクションビュー

*UICollectionView のヘルパーと高度なコレクションレイアウト。*

- [ASCollectionView](https://github.com/abdullahselek/ASCollectionView) - Airbnb にインスパイアされた Swift コレクションビュー。
- [CampcotCollectionView](https://github.com/touchlane/CampcotCollectionView) - CampcotCollectionView はセクションの展開と折りたたみを可能にする、Swift で書かれたカスタム UICollectionView です。コレクションビューの外観を管理するシンプルな API を提供します。
- [Carbon](https://github.com/ra1028/Carbon) - 🚴 UITableView と UICollectionView でコンポーネントベースの UI を構築する宣言的ライブラリ。
- [CollectionKit](https://github.com/SoySauceLab/CollectionKit) - 再利用可能なデータ駆動コレクションコンポーネントを構築するためのモダンな Swift フレームワーク。
- [Conv](https://github.com/bannzai/conv) - Conv は UIKit 以上に賢く UICollectionView のデータ構造を表現します。
- [DataSources](https://github.com/muukii/DataSources) - 型安全なデータ駆動リスト UI フレームワーク。（ASCollectionNode も使えます）
- [DiffableDataSources](https://github.com/ra1028/DiffableDataSources) - UITableView/UICollectionViewDiffableDataSource のバックポート用ライブラリ。
- [DisplaySwitcher](https://github.com/Yalantis/DisplaySwitcher) - 2 つのコレクションビューレイアウト間のカスタムトランジション
- [Dwifft](https://github.com/jflinter/Dwifft) - Swift Diff
- [GenericDataSource](https://github.com/GenericDataSource/GenericDataSource) - Swift で UITableView/UICollectionView のデータソース実装に使える、汎用的な小さな再利用コンポーネント。
- [GLTableCollectionView](https://github.com/giulio92/GLTableCollectionView) - Netflix や App Store のような、UICollectionView と組み合わせた UITableView
- [IGListKit](https://github.com/Instagram/IGListKit) - 高速で柔軟なリストを構築するためのデータ駆動 UICollectionView フレームワーク。
- [KDDragAndDropCollectionView](https://github.com/mmick66/KDDragAndDropCollectionView) - 複数の UICollectionView 間でデータをドラッグ＆ドロップ。
- [MEVFloatingButton](https://github.com/manuelescrig/MEVFloatingButton) - その上にカスタマイズ可能なフローティングボタンを表示する、iOS 組み込み式の UITableView、UICollectionView、UIScrollView スーパークラスカテゴリ。
- [MSPeekCollectionViewDelegateImplementation](https://github.com/MaherKSantina/MSPeekCollectionViewDelegateImplementation) - コレクションビューの前後の項目を覗くカスタムページング動作。
- [PagingView](https://github.com/KyoheiG3/PagingView) - 無限ページング、賢いオートレイアウト、UIKit に似たインターフェース。
- [Reusable](https://github.com/AliSoftware/Reusable) - UITableViewCells と UICollectionViewCells の Swift ミックスイン
- [Sapporo](https://github.com/nghialv/Sapporo) - セルモデル駆動のコレクションビューマネージャー
- [SimpleSource](https://github.com/Squarespace/simple-source) - Swift で簡単かつ型安全に iOS のテーブルビューとコレクションビューを扱う。
- [StickyCollectionView-Swift](https://github.com/matbeich/StickyCollectionView-Swift) - 重なり合うセルを表示するための UICollectionView レイアウト。
- [SwiftSpreadSheet](https://github.com/stuffrabbit/SwiftSpreadsheet) - Swift のスプレッドシート CollectionViewLayout。完全にカスタマイズ可能。
- [TLIndexPathTools](https://github.com/SwiftKickMobile/TLIndexPathTools) - TLIndexPathTools は、テーブルビューとコレクションビューを大幅に簡素化できる小さなクラス群です。

**[トップへ戻る](#contributing-and-collaborating)**

#### 展開可能セル

*展開・折りたたみ可能なテーブル／コレクションビューセル。*

- [CollapsibleTableSectionViewController](https://github.com/jeantimex/CollapsibleTableSectionViewController) - テーブルビューの折りたたみ可能なセクションをサポートする Swift ライブラリ。
- [ExpandableCell](https://github.com/younatics/ExpandableCell) - より簡潔でバグのないように完全にリファクタリングされた YNExapnadableCell。iOS 向けの素晴らしい展開・折りたたみ可能なテーブルビューセル。
- [expanding-collection](https://github.com/Ramotion/expanding-collection) - ExpandingCollection はカードの peek/pop コントローラーです。
- [folding-cell](https://github.com/Ramotion/folding-cell) - FoldingCell は紙を折るマテリアルにインスパイアされた展開コンテンツセルです
- [YNExpandableCell](https://github.com/younatics/YNExpandableCell) - iOS 向けの素晴らしい展開・折りたたみ可能なテーブルビューセル。

**[トップへ戻る](#contributing-and-collaborating)**

#### ヘッダー

*カスタムセクションヘッダーとフローティングヘッダーヘルパー。*

- [CSStickyHeaderFlowLayout](https://github.com/CSStickyHeaderFlowLayout/CSStickyHeaderFlowLayout) - UITableView の代替となる UICollectionView。パララックスヘッダー、スティッキーセクションヘッダーなど、さらに多くのことができます。
- [GSKStretchyHeaderView](https://github.com/gskbyte/GSKStretchyHeaderView) - UITableView と UICollectionView 向けの、設定しやすいのに使いやすい伸縮ヘッダービュー。
- [ParallaxTableViewHeader](https://github.com/Vinodh-G/ParallaxTableViewHeader) - tableView がスクロールしたときの UITableView ヘッダービューのパララックススクロール効果。

**[トップへ戻る](#contributing-and-collaborating)**

#### プレースホルダー

*リストとコレクションの空状態・プレースホルダービュー。*

- [HGPlaceholders](https://github.com/HamzaGhazouani/HGPlaceholders) - プロジェクト内のあらゆる UITableView/UICollectionView のプレースホルダーと空状態を表示・作成する素敵なライブラリ
- [ListPlaceholder](https://github.com/malkouz/ListPlaceholder) - ListPlaceholder は、テーブルビューやコレクションビューに Facebook 風のアニメーション読み込みプレースホルダーを簡単に追加できる Swift ライブラリです
- [WLEmptyState](https://github.com/wizeline/WLEmptyState) - UITableView のデータセットが空のときにビューをカスタマイズできるコンポーネント。

**[トップへ戻る](#contributing-and-collaborating)**

#### コレクションビューレイアウト

*カスタムコレクションビューレイアウト：ウォーターフォール、円形、タグクラウドなど。*

- [AZSafariCollectionViewLayout](https://github.com/AfrozZaheer/AZSafariCollectionViewLayout) - AZSafariCollectionViewLayout は Safari ブラウザーの履歴ページのレイアウトを再現したものです。非常に使いやすく、簡単に統合できる IBInspectable を備えています。
- [BouncyLayout](https://github.com/roberthein/BouncyLayout) - BouncyLayout はセルをバウンスさせるコレクションビューレイアウトです。
- [CenteredCollectionView](https://github.com/BenEmdon/CenteredCollectionView) - セルを _ページング_ して中央に配置する軽量 UICollectionViewLayout 🎡 Swift 製。
- [CHTCollectionViewWaterfallLayout](https://github.com/chiahsien/CHTCollectionViewWaterfallLayout) - UICollectionView のウォーターフォール（つまり Pinterest 風）レイアウト。
- [CollectionViewSlantedLayout](https://github.com/yacir/CollectionViewSlantedLayout) - 斜めのコンテンツを持つ UICollectionViewLayout
- [mosaic-layout](https://github.com/vinnyoodles/mosaic-layout) - Lightbox のアルゴリズムにインスパイアされたモザイクコレクションビューレイアウト。Swift 製
- [SquareMosaicLayout](https://github.com/iwheelbuy/SquareMosaicLayout) - 極めて柔軟なカスタマイズに焦点を当てた拡張可能なモザイク UICollectionViewLayout
- [Swinflate](https://github.com/VladIacobIonut/Swinflate) - CollectionView に軽やかでシームレスな体験を提供する多数のレイアウト。
- [TLLayoutTransitioning](https://github.com/SwiftKickMobile/TLLayoutTransitioning) - iOS での UICollectionView レイアウト間の強化されたトランジション。
- [UICollectionViewSplitLayout](https://github.com/yahoojapan/UICollectionViewSplitLayout) - UICollectionViewSplitLayout はコレクションビューをよりレスポンシブにします。

**[トップへ戻る](#contributing-and-collaborating)**


### タグ

*タグ入力フィールド、チップコントロール、タグクラウドビュー。*

- [AMTagListView](https://github.com/andreamazz/AMTagListView) - 高度にカスタマイズ可能なタグのリストを追加できる UIScrollView サブクラス。
- [PARTagPicker](https://github.com/paulrolfe/PARTagPicker) - この pod は、wordpress や tumblr スタイルでタグを選択・作成するビューコントローラーを提供します。
- [RKTagsView](https://github.com/kuler90/RKTagsView) - 高度にカスタマイズ可能な iOS タグビュー（NSTokenField のような）。編集、複数選択、Auto Layout などに対応。
- [TagCellLayout](https://github.com/riteshhgupta/TagCellLayout) - 左寄せ・中央寄せ・右寄せに対応したタグ用 UICollectionView レイアウト。
- [TTGTagCollectionView](https://github.com/zekunyan/TTGTagCollectionView) - 垂直スクロールビューでシンプルなテキストタグやカスタムタグビューを表示。
- [WSTagsField](https://github.com/whitesmith/WSTagsField) - さまざまなタグを表す iOS テキストフィールド。
- [YNSearch](https://github.com/younatics/YNSearch) - Swift 3 で書かれた、Pinterest のような完全にカスタマイズ可能な素晴らしい検索ビュー。

**[トップへ戻る](#contributing-and-collaborating)**

### テキストフィールドとテキストビュー

*機能を追加された UITextField と UITextView のサブクラス。*

- [ARAutocompleteTextView](https://github.com/alexruperez/ARAutocompleteTextView) - テキスト候補をリアルタイムで自動表示する UITextView サブクラス。メール用 Textview に最適。
- [AwesomeTextField](https://github.com/aleksandrshoshiashvili/AwesomeTextFieldSwift) - Awesome TextField は iOS 向けの素敵でシンプルなライブラリです。高度にカスタマイズでき、使いやすいツール。アプリの登録・ログインフォームに完璧に機能します。
- [CBPinEntryView](https://github.com/Fawxy/CBPinEntryView) - PIN、コード、パスワードの入力全般に使える、Swift 4.2 で書かれたカスタマイズ可能なビュー。iOS 12 のワンタイムコードに対応。
- [CHIOTPField](https://github.com/ChiliLabs/CHIOTPField) - ワンタイムパスワード、SMS コード、PIN コードなどに使えるテキストフィールドのセット。
- [CocoaTextField](https://github.com/edgar-zigis/CocoaTextField) - 2019 年の Material.IO ガイドラインに従って作られた UITextField。
- [DTTextField](https://github.com/iDhaval/DTTextField) - DTTextField は Swift3.0 製の、フローティングプレースホルダーとエラーラベル付きのカスタムテキストフィールドです。
- [GrowingTextView](https://github.com/KennethTsang/GrowingTextView) - Swift3 と Swift2.3 の UITextView。自動拡張、プレースホルダー、文字数制限に対応。
- [HTYTextField](https://github.com/hanton/HTYTextField) - バウンドするプレースホルダー付きの UITextField。
- [InputBarAccessoryView](https://github.com/nathantannar4/InputBarAccessoryView) - オートコンプリートと添付機能を備えた強力な入力バーを作るための、シンプルで簡単にカスタマイズできる InputAccessoryView。
- [InstantSearch iOS](https://github.com/algolia/instantsearch-ios) - iOS でインスタント検索アプリケーションを構築するためのウィジェットとヘルパーのライブラリ。
- [IQDropDownTextField](https://github.com/hackiftekhar/IQDropDownTextField) - UIPickerView によるドロップダウン対応のテキストフィールド。
- [JVFloatLabeledTextField](https://github.com/jverdi/JVFloatLabeledTextField) - フローティングラベル付きの UITextField サブクラス。
- [KMPlaceholderTextView](https://github.com/MoZhouqi/KMPlaceholderTextView) - Swift で書かれた、複数行プレースホルダー対応を追加する UITextView サブクラス。
- [MLPAutoCompleteTextField](https://github.com/EddyBorja/MLPAutoCompleteTextField) - 通常の UITextField と同じように振る舞う UITextField サブクラスですが、一つだけ顕著な違いがあります。ユーザーの入力に合わせて更新される、オートコンプリート候補のドロップダウンテーブルを管理します。
- [NextGrowingTextView](https://github.com/muukii/NextGrowingTextView) - iOS 7 以上に最適化された、次世代の「伸びる textview」。
- [PasswordTextField](https://github.com/PiXeL16/PasswordTextField) - パスワードの表示／非表示を切り替えるアイコンと、良いパスワードポリシーを強制するカスタム TextField。
- [PYSearch](https://github.com/ko1o/PYSearch) - iOS（iPhone と iPad）の UISearchController を置き換えるエレガントな検索コントローラー。
- [Reel Search](https://github.com/Ramotion/reel-search) - RAMReel はリストから選択肢を選べるコントローラーです。
- [RPFloatingPlaceholders](https://github.com/iwasrobbed/RPFloatingPlaceholders) - フィールドにテキストが入るとプレースホルダーがフローティングラベルに変わる、UITextField と UITextView のサブクラス。
- [RSFloatInputView](https://github.com/roytornado/RSFloatInputView) - 滑らかなアニメーションと、アイコンとセパレーターのサポートを備えた、Swift 製のフロート入力ビュー。
- [RSKGrowingTextView](https://github.com/ruslanskorb/RSKGrowingTextView) - 自動で伸び縮みする軽量 UITextView サブクラス。
- [RSKPlaceholderTextView](https://github.com/ruslanskorb/RSKPlaceholderTextView) - プレースホルダー対応を追加する軽量 UITextView サブクラス。
- [SearchTextField](https://github.com/apasccon/SearchTextField) - オートコンプリート候補リスト付きの UITextField サブクラス。
- [SelectableTextView](https://github.com/jhurray/SelectableTextView) - 選択と展開に対応したテキストビュー。
- [StatefulViewController](https://github.com/aschuch/StatefulViewController) - コンテンツ、読み込み中、エラー、空の状態に基づくプレースホルダービュー。
- [styled-text](https://github.com/blueapron/styled-text) - iOS 向けの宣言的テキストスタイルと効率化された Dynamic Type サポート。
- [TextFieldCounter](https://github.com/serralvo/TextFieldCounter) - 愛らしい UX の UITextField 文字カウンター。
- [TextFieldEffects](https://github.com/raulriera/TextFieldEffects) - Codrops にインスパイアされた、Swift で構築されたカスタム UITextField エフェクト。
- [TweeTextField](https://github.com/oleghnidets/TweeTextField) - 素敵なアニメーションと機能を備えた軽量テキストフィールドセット。
- [UITextField-Navigation](https://github.com/T-Pham/UITextField-Navigation) - UITextField-Navigation は、あなたの UITextFields のキーボードに「次へ」「前へ」「完了」ボタンを追加します。
- [UITextField-Shake](https://github.com/andreamazz/UITextField-Shake) - シェイクアニメーションを追加する UITextField カテゴリ。[Swift 版もあります](https://github.com/King-Wizard/UITextField-Shake-Swift)
- [VENTokenField](https://github.com/venmo/VENTokenField) - Venmo アプリで使われている、使いやすいトークンフィールド。
- [VMaskTextField](https://github.com/viniciusmo/VMaskTextField) - VMaskTextField は iOS 用の入力マスクを作るライブラリです。

**[トップへ戻る](#contributing-and-collaborating)**

### UIPageControl

*UIPageControl の代替とページングインジケーター。*

- [CHIPageControl](https://github.com/ChiliLabs/CHIPageControl) - 退屈な UIPageControl を置き換える、かっこいいアニメーションページコントロールのセット。
- [PageControls](https://github.com/popwarsweet/PageControls) - UIPageControl を置き換えるカスタムページコントロールのセレクションです。ある dribbble 作品にインスパイアされています。
- [TKRubberIndicator](https://github.com/TBXark/TKRubberIndicator) - Swift のラバーインジケーター。

**[トップへ戻る](#contributing-and-collaborating)**

### ウェブビュー

*WKWebView と UIWebView のラッパーとヘルパー。*

- [PTPopupWebView](https://github.com/pjocprac/PTPopupWebView) - PTPopupWebView はシンプルで実用的な iOS 用 WebView です。ポップアップ表示でき、多くのカスタマイズ項目を備えています。
- [SVWebViewController](https://github.com/TransitApp/SVWebViewController) - iOS アプリ向けの組み込み式インラインブラウザー。
- [SwiftWebVC](https://github.com/meismyles/SwiftWebVC) - Swift 製 iOS アプリ向けの組み込み式インラインブラウザー。

**[トップへ戻る](#contributing-and-collaborating)**

## ユーティリティ

*iOS 向けの汎用ユーティリティ、拡張、スイスアーミーナイフ的なヘルパー。*

 * [Underscore.m](https://github.com/robb/Underscore.m) - データ操作のための DSL。
 * [XExtensionItem](https://github.com/tumblr/XExtensionItem) - iOS アプリケーションと共有拡張の間で、構造化データをより簡単に共有。
 * [ReflectableEnum](https://github.com/fastred/ReflectableEnum) - Objective-C の列挙型のリフレクション。
 * [ObjectiveSugar](https://github.com/supermarin/ObjectiveSugar) - 人間のための ObjectiveC 拡張。Ruby スタイル。
 * [OpinionatedC](https://github.com/leoschweizer/OpinionatedC) - Objective-C は Smalltalk からもっと継承すべきだったから。
 * [SwiftRandom](https://github.com/thellimist/SwiftRandom) - ランダムデータのジェネレーター。
 * [RandomKit](https://github.com/nvzqz/RandomKit/) - Swift でのランダムデータ生成。
 * [YOLOKit](https://github.com/mxcl/YOLOKit) - 丸い穴に四角いオブジェクトを入れる。
 * [EZSwiftExtensions](https://github.com/goktugyil/EZSwiftExtensions) - :smirk: Swift の標準型とクラスはこうあるべきだった。
 * [Pantry](https://github.com/nickoneill/Pantry) - Swift に欠けていた軽量の永続化レイヤー。
 * [SwiftParsec](https://github.com/davedufresne/SwiftParsec) - Swift プログラミング言語で書かれたパーサーコンビネーターライブラリ。
 * [OrderedSet](https://github.com/Weebly/OrderedSet) - 一意で順序付けられたオブジェクトの Swift コレクション。
 * [Datez](https://github.com/SwiftKitz/Datez) - `NSDate`、`NSCalendar`、`NSDateComponents` を扱う Swift ライブラリ。
 * [BFKit](https://github.com/FabrizioBrancati/BFKit) - アプリ開発を速くするための、有用なクラスの Objective-C コレクション。
 * [BFKit-Swift](https://github.com/FabrizioBrancati/BFKit-Swift) - アプリ開発を速くするための、有用なクラスの Swift コレクション。
 * [Scale](https://github.com/onmyway133/scale) - Swift の単位コンバーター（CocoaPods から利用可能）。
 * [Standard Template Protocols](https://github.com/cconeil/Standard-Template-Protocols) - 日常の iOS のニーズを満たすプロトコル群。
 * [TimeLord](https://github.com/JonFir/TimeLord) - Swift で DateTime（NSDate）を簡単に管理。
 * [AppVersionMonitor](https://github.com/eure/AppVersionMonitor) - iOS アプリのバージョンを簡単に監視。
 * [Sugar](https://github.com/hyperoslo/Sugar) - あなたの Cocoa と相性抜群の甘いもの。
 * [Then](https://github.com/devxoul/Then) - ✨ Swift のイニシャライザのための超甘い構文糖。
 * [Kvitto](https://github.com/Cocoanetics/Kvitto) - App Store レシートの検証。
 * [Notificationz](https://github.com/SwiftKitz/Notificationz) - Swift で NSNotificationCenter を自分のものにするのを助けます。
 * [SwiftFoundation](https://github.com/PureSwift/SwiftFoundation) - Swift 標準ライブラリを補完する、クロスプラットフォーム・プロトコル指向プログラミングの基底ライブラリ。（純 Swift、Linux 対応）。
 * [libextobjc](https://github.com/jspahrsummers/libextobjc) - Objective-C プログラミング言語を拡張する Cocoa ライブラリ。
 * [VersionTrackerSwift](https://github.com/tbaranes/VersionTrackerSwift) - ユーザーが以前にインストールしたことのある、あなたのアプリのバージョンを追跡。
 * [DeviceGuru](https://github.com/InderKumarRathore/DeviceGuru/) - DeviceGuru はデバイスの正確な型（例：iPhone 6 または iPhone 6s）を知るためのシンプルなライブラリ（Swift）です。
 * [AEAppVersion](https://github.com/tadija/AEAppVersion) - Swift で書かれた、シンプルで軽量な iOS アプリバージョン追跡。
 * [BlocksKit](https://github.com/BlocksKit/BlocksKit) - あなたがずっと欲しかった Objective-C のブロックユーティリティ。
 * [SwiftyUtils](https://github.com/tbaranes/swiftyutils) - 各プロジェクトで必要になる、すべての再利用可能なコード。
 * [RateLimit](https://github.com/soffes/RateLimit) - 一定間隔でのみコードを実行するシンプルなユーティリティ。
 * [Outlets](https://github.com/phatblat/Outlets) - IBOutlet と IBAction の接続を検証するユーティリティ関数。
 * [EasyAbout](https://github.com/JARMourato/EasyAbout) - Settings Bundle を使って、iOS アプリに CocoaPods のライセンスと App バージョンを簡単に追加する方法。
 * [Validated](https://github.com/Ben-G/Validated) - 依存型っぽい何かのための Swift マイクロライブラリ。
 * [Cent](https://github.com/ankurp/Cent) - Swift 標準型とクラスの拡張。
 * [AssistantKit](https://github.com/anatoliyv/AssistantKit) - iOS デバイスのプロパティ、OS バージョンの検出と画面サイズの扱いを簡単に。Swift 駆動。
 * [SwiftLinkPreview](https://github.com/LeonardoCardoso/SwiftLinkPreview) - URL からプレビューを作成し、タイトル、関連テキスト、画像などの情報をすべて取得します。
 * [BundleInfos](https://github.com/rollmind/BundleInfos) - Bundle 情報のシンプルなゲッター。bundle からの短いバージョンなど。
 * [YAML.framework](https://github.com/mirek/YAML.framework) - `LibYAML` ベースの、Objective-C 向けの適切な YAML サポート。
 * [ReadabilityKit](https://github.com/exyte/ReadabilityKit) - ニュース、記事、全文書からメタデータを抽出する Swift ツール。
 * [MissionControl-iOS](https://github.com/appculture/MissionControl-iOS) - Swift で書かれた超強力なリモート設定ユーティリティ（iOS、watchOS、tvOS、macOS）。
 * [SwiftTweaks](https://github.com/Khan/SwiftTweaks) - 再コンパイルなしで iOS アプリを調整！
 * [UnsupportedOSVersionAlert](https://github.com/caloon/UnsupportedOSVersionAlert) - サポートされていない iOS バージョン（例：iOS ベータ）でアプリを使うユーザーにポップアップで警告。
 * [SwiftSortUtils](https://github.com/dsmatter/SwiftSortUtils) - このライブラリは、Swift でのソートをより快適にすることに挑戦します。古い NSSortDescriptor インスタンスを Swift で再利用することもできます。
 * [Retry](https://github.com/icanzilb/Retry) - `try` にもう少し頑張ってほしいと思ったことはありませんか？ `retry` の出番です。
 * [ObjectiveKit](https://github.com/marmelroy/ObjectiveKit) - Objective C ランタイム関数のための、Swift にやさしい API。
 * [MoyaSugar](https://github.com/devxoul/MoyaSugar) -  Moya の構文糖。
 * [SwifterSwift](https://github.com/SwifterSwift/SwifterSwift) -  生産性を高める 400 以上のネイティブ Swift 4 拡張の便利なコレクション。
 * [Eject](https://github.com/Rightpoint/Eject) - Interface Builder 用のイジェクトボタンで Swift コードを生成。
 * [ContactsWrapper](https://github.com/abdullahselek/ContactsWrapper) - 連絡先と連絡先グループの両方を Objective-C で簡単に扱えるラッパー。
 * [XestiMonitors](https://github.com/eBardX/XestiMonitors) - Swift で書かれた拡張可能な監視フレームワーク。
 * [OpenSourceController](https://github.com/floriangbh/OpenSourceController) - アプリケーションで使われているライブラリのライセンスを表示する最も簡単な方法。
 * [App-Update-Tracker](https://github.com/Stunner/App-Update-Tracker) - アプリのインストールや更新時にコードを簡単に検出して実行。
 * [ExtensionalSwift](https://github.com/4taras4/SwiftExtension) - 一箇所にまとめた便利な Swift 拡張。
 * [InAppSettingsKit](https://github.com/futuretap/InAppSettingsKit) - この iOS フレームワークにより、設定アプリの代わりに、または加えてアプリ内で設定を行えます。
 * [MMWormhole](https://github.com/mutualmobile/MMWormhole) - iOS アプリと拡張の間のメッセージパッシング。
 * [DefaultStringConvertible](https://github.com/jessesquires/DefaultStringConvertible) - Swift 型のためのデフォルト CustomStringConvertible 実装。
 * [FluxCapacitor](https://github.com/marty-suzuki/FluxCapacitor) - FluxCapacitor はプロトコルと typealias で Flux デザインパターンの実装を簡単にします。
 * [VTAcknowledgementsViewController](https://github.com/vtourraine/VTAcknowledgementsViewController) - CocoaPods 用のすぐに使える「謝辞」／「ライセンス」／「クレジット」ビューコントローラー。
 * [Closures](https://github.com/vhesener/Closures) - UIKit と Foundation のための Swifty なクロージャ。
 * [WhatsNew](https://github.com/BalestraPatrick/WhatsNew) - Pages、Numbers、Keynote のように、アプリ更新後に新機能を紹介。
 * [MKUnits](https://github.com/michalkonturek/MKUnits) - Swift 向けの単位変換ライブラリ。
 * [ActionClosurable](https://github.com/takasek/ActionClosurable) - objc スタイルの target/action を swifty なクロージャに変換するのを助ける拡張。
 * [ios_system](https://github.com/holzschu/ios_system) - iOS プログラムの system() の組み込み式代替。
 * [SwiftProvisioningProfile](https://github.com/Sherlouk/SwiftProvisioningProfile) - プロビジョニングプロファイルを Swift モデルにパース。
 * [Once](https://github.com/luoxiu/Once) - 一回限りの操作を管理するミニマリストライブラリ。
 * [ZamzamKit](https://github.com/ZamzamInc/ZamzamKit) - Standard Library、Foundation、UIKit 向けのマイクロユーティリティと拡張のコレクション。
 * [DuctTape](https://github.com/marty-suzuki/DuctTape) - KeyPath dynamicMemberLookup ベースの Swift 構文糖。
 * [ReviewKit](https://github.com/simonmitchell/ReviewKit) – SKStoreReviewController を使い、ポジティブ・ネガティブなアクションを記録することで、アプリを楽しんで使ってくれたユーザーにだけレビュー依頼を出すよう制御するフレームワーク。
 * [SwiftBoost](https://github.com/sparrowcode/SwiftBoost) - 開発プロセスを加速する Swift 拡張のコレクション。

 **[トップへ戻る](#contributing-and-collaborating)**

## ユーザーの同意

*GDPR、トラッキングの透明性、ユーザー同意管理ライブラリ。*

- [PrivacyFlash Pro](https://github.com/privacy-tech-lab/privacyflash-pro) - iOS アプリのコードからプライバシーポリシーを生成
- [SmartlookConsentSDK](https://github.com/smartlook/ios-consent-sdk) - ユーザーがプライバシーオプションを選択し、アプリのユーザー設定を保存できる設定可能なコントロールパネルを提供するオープンソース SDK。

**[トップへ戻る](#contributing-and-collaborating)**

## VR

*iOS アプリ向けのバーチャルリアリティ SDK とフレームワーク。*

- [360 VR Player](https://github.com/hanton/HTY360Player) - オープンソース、広告なし、ネイティブでユニバーサルな iOS 向け 360 度パノラマ動画プレイヤー。
- [simple360player](https://github.com/Aralekk/simple360player_iOS) - 無料で広告なしの 360 VR 動画プレイヤー。フラットまたはステレオ。Swift 2 製。
- [Swifty360Player](https://github.com/abdullahselek/Swifty360Player) - AVPlayer からストリーミングする Swift 製の iOS 360 度動画プレイヤー。

**[トップへ戻る](#contributing-and-collaborating)**

## ウォークスルー / イントロ / チュートリアル

*オンボーディング画面、ウォークスルー、入門チュートリアル。*

- [AlertOnboarding](https://github.com/PhilippeBoisney/AlertOnboarding) - ユーザーをあなたの素晴らしい世界へ案内する、シンプルで素敵な AlertView。
- [AMPopTip](https://github.com/andreamazz/AMPopTip) - 指定したフレームから飛び出すアニメーションポップオーバー。さりげない UI のヒントやオンボーディングに最適。
- [AwesomeSpotlightView](https://github.com/aleksandrshoshiashvili/AwesomeSpotlightView) - 素晴らしいチュートリアルを作ったり、アプリの使い方をユーザーに教えたりするツール。画面上の何かをハイライトするだけでも。Swift 製。
- [BWWalkthrough](https://github.com/ariok/BWWalkthrough) - iOS アプリ向けのカスタムウォークスルーを構築するクラス。
- [ConcentricOnboarding](https://github.com/exyte/ConcentricOnboarding) - タップアクション付きのウォークスルーやオンボーディングフローのための SwiftUI ライブラリ。
- [EAIntroView](https://github.com/ealeksandrov/EAIntroView) - 高度にカスタマイズ可能な、組み込み式のイントロビューソリューション。
- [GHWalkThrough](https://github.com/GnosisHub/GHWalkThrough) - UICollectionView をバックエンドに持つ、組み込み式のイントロビューコンポーネント。
- [ICETutorial](https://github.com/icepat/ICETutorial) - Path 3.X アプリで紹介されたもののような、素敵なチュートリアル。
- [Instructions](https://github.com/ephread/Instructions) - iOS プロジェクトにカスタマイズ可能なコーチマークを簡単に追加。
- [JazzHands](https://github.com/IFTTT/JazzHands) - Jazz Hands は UIKit 向けのシンプルなキーフレームベースアニメーションフレームワークです。アニメーションはジェスチャー、スクロールビュー、KVO、ReactiveCocoa から制御できます。
- [Material Showcase iOS](https://github.com/aromajoin/material-showcase-ios) - iOS アプリ向けのエレガントで美しいショーケース。
- [Minamo](https://github.com/yukiasai/Minamo) - Swift で書かれたシンプルなコーチマークライブラリ。
- [MYBlurIntroductionView](https://github.com/MatthewYork/MYBlurIntroductionView) - カスタムアプリイントロとチュートリアルを構築するための、MYIntroductionView の強化版。
- [Onboard](https://github.com/mamaral/Onboard) - ほんの数行のコードで、美しく心をつかむオンボーディング体験を簡単に作成。
- [OnboardKit](https://github.com/NikolaKirev/OnboardKit) - iOS アプリ向けのカスタマイズ可能なユーザーオンボーディング。
- [paper-onboarding](https://github.com/Ramotion/paper-onboarding) - PaperOnboarding はマテリアルデザインのスライダーです。
- [Presentation](https://github.com/hyperoslo/Presentation) - Presentation はチュートリアル、リリースノート、アニメーションページの作成を助けます。
- [RazzleDazzle](https://github.com/IFTTT/RazzleDazzle) - Swift で書かれた、iOS 向けのシンプルなキーフレームベースアニメーションフレームワーク。スクロールするアプリイントロに最適。
- [SwiftyWalkthrough](https://github.com/ruipfcosta/SwiftyWalkthrough) - Swift の力を借りて、アプリで素晴らしいウォークスルー体験を作る最も簡単な方法。
- [VideoSplashKit](https://github.com/svhawks/VideoSplashKit) - VideoSplashKit - 背景動画付きの簡単なイントロページを作るための UIViewController ライブラリ。
- [WhatsNewKit](https://github.com/SvenTiigi/WhatsNewKit) - あなたの素晴らしいアプリの新機能を紹介。

**[トップへ戻る](#contributing-and-collaborating)**

## ウェブサイト

*iOS 開発者がフォローすべき重要なウェブサイト。*

- [Apple's Swift Blog](https://developer.apple.com/swift/blog/)
- [ASCIIwwdc](https://asciiwwdc.com/)
- [BGR](https://bgr.com/ios-7/)
- [Cocoa Controls](https://www.cocoacontrols.com/) - iOS と macOS 向けのオープンソース UI コンポーネント。
- [Code Facebook](https://engineering.fb.com/category/ios/)
- [Feeds for iOS Developer](https://github.com/rgnlax/Feeds-for-iOS-Developer) - iOS 開発者向け RSS フィードのリスト。
- [iMore](https://www.imore.com/)
- [iOS Dev Nuggets](http://hboon.com/iosdevnuggets/)
- [iOS Developer and Designer interview](https://github.com/9magnets/iOS-Developer-and-Designer-Interview-Questions) - iOS の仕事で開発者やデザイナーを雇おうとしている人を助ける小さなガイド。
- [iOS Programming Subreddit](https://www.reddit.com/r/iOSProgramming/)
- [iOS8-day-by-day](https://github.com/ScottLogic/iOS8-day-by-day)
- [iOS9-day-by-day](https://github.com/ScottLogic/iOS9-day-by-day)
- [iOScreator](https://www.ioscreator.com/)
- [Lifehacker](https://lifehacker.com/tag/ios)
- [Mathew Sanders](http://mathewsanders.com/)
- [Natasha The Robot](https://www.natashatherobot.com/)
- [NSHipster](https://nshipster.com)
- [Objc.io](https://www.objc.io/)
- [Ohmyswift](https://www.ohmyswift.com/blog/)
- [Point Free](https://www.pointfree.co/) - 関数型プログラミングと Swift を探求するビデオシリーズ。
- [Roadmap.sh iOS Roadmap](https://roadmap.sh/ios) - コミュニティが作った iOS 開発者ロードマップ。

**[トップへ戻る](#contributing-and-collaborating)**


## WebSocket

*iOS のリアルタイム通信のための WebSocket クライアントライブラリ。*

- [socket.io-client-swift](https://github.com/socketio/socket.io-client-swift) - iOS/macOS 向け Socket.IO クライアント。
- [SocketRocket](https://github.com/facebook/SocketRocket) - 仕様に準拠した Objective-C WebSocket クライアントライブラリ。
- [Socks](https://github.com/vapor-community/sockets) - 純 Swift ソケット：TCP、UDP；クライアント、サーバー；Linux、macOS。
- [Starscream](https://github.com/daltoniam/Starscream) - iOS と macOS 向けの swift 製 Websockets。
- [Swift-ActionCableClient](https://github.com/danielrhodes/Swift-ActionCableClient) - ActionCable は Rails 5 と共にリリースされた新しい WebSocket サーバーで、アプリへのリアルタイム機能の追加を簡単にします。
- [SwiftSocket](https://github.com/swiftsocket/SwiftSocket) - apple swift 言語向けのシンプルなソケットライブラリ。

**[トップへ戻る](#contributing-and-collaborating)**


## ツール

*iOS 開発向けのコマンドラインユーティリティ、コードジェネレーター、ヘルパーツール。*

- [abandoned-strings](https://github.com/ijoshsmith/abandoned-strings) - iOS や macOS アプリケーションで未使用のリソース文字列を検出するコマンドラインプログラム。
- [AppDevKit](https://github.com/yahoo/AppDevKit) - AppDevKit は、開発者の日常的な iOS アプリ開発のニーズを満たす有用な機能を提供する iOS 開発ライブラリです。
- [appledoc](https://github.com/tomaz/appledoc) - ObjectiveC コードの Apple スタイルドキュメントセットジェネレーター。
- [AssetChecker 👮](https://github.com/freshOS/AssetChecker) - Assets.xcassets ファイルを清潔に保ち、怪しいものがあれば警告を出します。
- [Attabench](https://github.com/attaswift/Attabench) - きれいな log-log プロット付きの Swift マイクロベンチマークアプリ。
- [AVXCAssets-Generator](https://github.com/angelvasa/AVXCAssets-Generator) - AVXCAssets Generator はアセット画像のパスを受け取り、ワンクリックで appiconset と imageset を作成します。
- [Blade](https://github.com/jondot/blade) - iOS / macOS のアプリアイコン、ユニバーサル画像などの Xcode 画像カタログを生成。
- [BuildTimeAnalyzer](https://github.com/RobertGummesson/BuildTimeAnalyzer-for-Xcode) - Swift のビルド時間アナライザー。
- [Cichlid](https://github.com/dealforest/Cichlid) - 現在のプロジェクトの DerivedData ディレクトリを自動削除。
- [Cutter](https://cutter.albemala.me/) - 単一のテンプレートからすべての画面サイズ向けの iOS 起動画像（スプラッシュスクリーン）を生成するツール。
- [Duration](https://github.com/SwiftStudies/Duration) - 処理にかかった時間を測定・報告するためのシンプルな Swift パッケージ。
- [Ecno](https://github.com/xmartlabs/Ecno) - Ecno は純 Swift 3 で UserDefaults の上に構築されたタスク状態マネージャーです。
- [fastlane-plugin-appicon](https://github.com/fastlane-community/fastlane-plugin-appicon) - マスターのアプリケーションアイコンから必要なアイコンサイズと iconset を生成。
- [FBSimulatorControl](https://github.com/facebook/idb) - iOS シミュレーターを管理・操作するための macOS ライブラリ
- [FengNiao](https://github.com/onevcat/FengNiao) - Xcode の未使用リソースを掃除するコマンドラインツール。
- [GDPerformanceView-Swift](https://github.com/dani-gavrilov/GDPerformanceView-Swift) - ステータスバーの上に FPS、CPU 使用率、アプリと iOS のバージョンを表示し、delegate 経由で FPS と CPU 使用率を報告します。
- [GetUniversal.link](https://getuniversal.link/) - 無料の Universal Link と Apple App Site Association テストツール。
- [IBM Swift Sandbox](https://swift.sandbox.bluemix.net) - IBM Swift Sandbox は、Swift コードを書いてサーバー環境で実行できるインタラクティブなウェブサイトです — しかも Linux の上で！
- [infer](https://github.com/facebook/infer) - Java、C、Objective-C 向けの静的アナライザー。
- [iSimulator](https://github.com/wigl/iSimulator) - iSimulator はシミュレーターを制御し、シミュレーターにインストールされたアプリを管理する GUI ユーティリティです。
- [Jazzy](https://github.com/realm/jazzy) - Swift と Objective-C の魂のこもったドキュメント。
- [Kin](https://github.com/Karumi/Kin) - Xcode ビルドの失敗のせいでマージを取り消したことはありませんか？それなら Kin があなたのツールです。プロジェクトの設定ファイルをパースしてエラーを検出します。
- [Laurine](https://github.com/JiriTrecak/Laurine) - Laurine - Swift で書かれたローカライゼーションコードジェネレーター。甘い！
- [LicensePlist](https://github.com/mono0926/LicensePlist) - iOS アプリケーションのすべての依存関係のライセンスリストジェネレーター。
- [LifetimeTracker](https://github.com/krzysztofzablocki/LifetimeTracker) - 保持サイクル／メモリリークをより早く発見。
- [Lona](https://github.com/airbnb/Lona) - デザインシステムを定義し、それを使ってクロスプラットフォームの UI コード、Sketch ファイル、画像などの成果物を生成するためのツール。
- [Misen](https://github.com/tasanobu/Misen) - Swift で Xcode Asset Catalog を簡単に使えるようにするスクリプト。
- [nef](https://github.com/bow-swift/nef) - Xcode Playground 向けコマンドラインツールセット：Xcode Playground として書いたドキュメントのコンパイル時検証を可能にし、markdown ファイルを生成し、Jekyll と統合してマイクロサイトを構築し、Carbon でコードスニペットをエクスポートできます。
- [Nomad](https://nomad-cli.com) - APNs の送信、`.ipa` の作成と配布、アプリ内課金レシートの検証などを行うコマンドラインユーティリティとライブラリのスイート。
- [Pecker](https://github.com/woshiccm/Pecker) - CodePecker は未使用コードを検出するツールです。
- [Peek](https://github.com/shaps80/Peek) - アプリケーションを Peek する。
- [Plank](https://github.com/pinterest/plank) - 不変（immutable）なモデルオブジェクトを生成するツール。
- [PlayAlways](https://github.com/insidegui/PlayAlways) - メニューバーから Xcode playground を作成
- [playgroundbook](https://github.com/playgroundbooks/playgroundbook) - Swift Playground ブックのためのツール。
- [ProvisionQL](https://github.com/ealeksandrov/ProvisionQL) - アプリとプロビジョニングプロファイルファイルの Quick Look プラグイン。
- [R.swift](https://github.com/mac-cain13/R.swift) - Swift プロジェクトで、画像、セル、セグエなどの強く型付けされた自動補完リソースを取得するツール。
- [Respresso Image Converter](https://respresso.io/image-converter) - pdf、svg、vector drawable、jpg、png、webp 形式をサポートする、iOS、Android、Web 向けマルチプラットフォーム画像コンバーター。
- [Retini](https://github.com/terwanerik/Retini) - 超シンプルなレティーナ（2x、3x）画像コンバーター。
- [Rugby](https://github.com/swiftyfinch/Rugby) - 🏈 CocoaPods をキャッシュして、再ビルドと Xcode プロジェクトのインデックスを高速化。
- [SBConstants](https://github.com/paulsamuels/SBConstants) - プロジェクトの storyboard から識別子を取り出して定数ファイルを生成。
- [Shark](https://github.com/kaandedeoglu/Shark) - .xcassets フォルダーを型安全な enum に変換する Swift スクリプト。
- [SourceKitten](https://github.com/jpsim/SourceKitten) - SourceKit と対話するための、愛らしい小さなフレームワークとコマンドラインツール。
- [Sourcery](https://github.com/krzysztofzablocki/Sourcery) - Swift にメタプログラミングをもたらし、Swift コードのコード生成を可能にするツール。
- [Speculid](https://speculid.com) - SVG、PNG、JPEG ファイルから画像セットとアプリアイコンを生成
- [Storyboard -> SwiftUI Converter](https://swiftify.com/#/converter/storyboard2swiftui/) - Storyboard -> SwiftUI Converter は .storyboard と .xib を SwiftUI に変換するコンバーターです。
- [StoryboardMerge](https://github.com/marcinolawski/StoryboardMerge) - Xcode storyboard の差分比較・マージツール。
- [Struct](https://www.get-struct.tools) - iOS と Mac 開発者向けに、Xcode プロジェクトの作成と管理を自動化するツール。
- [Swift Package Index](https://swiftpackageindex.com) - パッケージの品質と互換性に関する多くの情報を備えた Swift パッケージリスト。
- [SwiftCompilationPerformanceReporter](https://github.com/TumblrArchive/SwiftCompilationPerformanceReporter) - 特定のターゲットにおける遅い Swift コンパイルパスの自動レポートを生成。
- [swiftenv](https://github.com/kylef/swiftenv) - swiftenv により、複数の Swift バージョンを簡単にインストールし切り替えられます。
- [SwiftGen](https://github.com/SwiftGen/SwiftGen) - Swift コードを生成する Swift ツールのコレクション（アセット、storyboards、Localizable.strings、UIColors 用の enum）。
- [SwiftLintXcode](https://github.com/ypresto/SwiftLintXcode) - SwiftLint を使ってコードをフォーマットする Xcode プラグイン。
- [Traits](https://github.com/krzysztofzablocki/Traits) - 再コンパイルなしでネイティブ iOS アプリのデザインと振る舞いをリアルタイムに変更するライブラリ（コードとインターフェースビルダーの変更に対応）。
- [Transformer](https://github.com/andresinaka/transformer) - 簡単なオンライン属性文字列クリエーター。ブラウザー上で直接文字列をフォーマットし、属性文字列コードをアプリにコピー／ペーストできます。
- [ViewMonitor](https://github.com/daisuke0131/ViewMonitor) - ViewMonitor はビューの位置を正確に測定できます。
- [WatchdogInspector](https://github.com/tapwork/WatchdogInspector) - iOS アプリのステータスバーに現在のフレームレート（fps）を表示します。
- [xcenv](https://github.com/xcenv/xcenv) - Xcode 環境を整える。
- [XcodeGen](https://github.com/yonaskolb/XcodeGen) - 仕様ファイルとフォルダー構造から Xcode プロジェクトを生成するコマンドラインツール。
- [Xcodes.app](https://github.com/RobotsAndPencils/XcodesApp) - 複数の Xcode バージョンをインストールし切り替える最も簡単な方法。
- [xib2Storyboard](https://github.com/novemberfiveco/xib2Storyboard) - Xcode の .xib を .storyboard ファイルに変換するツール。
- [Xtrace](https://github.com/johnno1962/Xtrace) - クラスまたはインスタンス単位で Objective-C のメソッド呼び出しをトレース。
- [Zolang](https://github.com/Zolang/Zolang) - iOS、Android、ツール間でロジックを共有するためのプログラミング言語。

**[トップへ戻る](#contributing-and-collaborating)**

## チュートリアルと基調講演

*iOS 開発者向けの動画チュートリアル、基調講演の録画、カンファレンストーク。*

- [AppCoda](https://www.appcoda.com/)
- [Awesome-Swift-Education](https://github.com/hsavit1/Awesome-Swift-Education) - Swift を学ぶためのすべてのリソース。
- [Awesome-Swift-Playgrounds](https://github.com/uraimo/Awesome-Swift-Playgrounds) - 素晴らしい Swift Playground のリスト！
- [Big Nerd Ranch](https://www.bignerdranch.com/blog/category/ios/)
- [Brian Advent youtube channel](https://www.youtube.com/channel/UCysEngjfeIYapEER9K8aikw/videos) - Swift チュートリアルの YouTube チャンネル。
- [Cocoa Dev Central](http://cocoadevcentral.com)
- [Cocoa with Love](http://www.cocoawithlove.com/)
- [Code with Chris](https://codewithchris.com/)
- [Conferences.digital](https://github.com/zagahr/Conferences.digital) - ネイティブ macOS アプリでカンファレンス動画を見る。
- [DaddyCoding](https://daddycoding.com/) - 初心者から上級者までの iOS チュートリアル。
- [Hacking With Swift](https://www.hackingwithswift.com) - 3 つの Swift チュートリアルで iPhone と iPad アプリのコーディングを学ぶ。
- [iOS Development with Swift in Motion ](https://www.manning.com/livevideo/ios-development-with-swift-lv) -  このライブビデオコースは言語の基礎を固めた後、興味深い例と演習を提供して、知識とスキルを構築・練習できます。
- [Learn Swift](https://blog.coursesity.com/best-swift-tutorials/) - Learn Swift - トップクラスのオンライン Swift チュートリアルとコースの厳選リスト。
- [learn-swift](https://github.com/nettlep/learn-swift) - これらの playground を通じて Apple の Swift プログラミング言語をインタラクティブに学ぶ。
- [LearnAppMaking](https://learnappmaking.com) - LearnAppMaking はアプリ開発者の iOS アプリの構築、ローンチ、マーケティングを支援します。
- [Mike Ash](https://www.mikeash.com/pyblog/)
- [raywenderlich.com](https://www.raywenderlich.com/ios) - 開発者とゲーマー向けのチュートリアル。
- [Realm Academy](https://academy.realm.io/)
- [Swift Education](https://github.com/swifteducation) - Swift とアプリ開発の教材を共有する教育者のコミュニティ。
- [Swift Tutorials by Jameson Quave](https://jamesonquave.com/blog/tutorials/)
- [SwiftUI Tutorials](https://JaneshSwift.com) - SwiftUI と Swift を無料で学ぶ。
- [The Swift Summary Book](https://github.com/jakarmy/swift-summary) - Playground に書かれた Apple の Swift 言語の要約。
- [Thinkster](https://thinkster.io/a-better-way-to-learn-swift)
- [Treehouse's iOS Courses and Workshops](https://teamtreehouse.com/library/topic:ios) - Objective-C と Swift の両方の、初級・上級開発者向けトピック。
- [Tutorials Point](https://www.tutorialspoint.com/ios/index.htm)
- [Tuts+](https://code.tutsplus.com/categories/ios-sdk)
- [Use Your Loaf](https://useyourloaf.com/)

**[トップへ戻る](#contributing-and-collaborating)**

### UI テンプレート

*iOS アプリデザインを素早く始めるためのデザインテンプレートと UI キット。*

- [iOS 11 iPhone GUI from Design at Meta](https://design.facebook.com/toolsandresources/ios-11-iphone-gui/)
- [iOS Design Guidelines](https://ivomynttinen.com/blog/ios-design-guidelines)
- [iOS UI Design Kit](https://www.invisionapp.com/inside-design/design-resources/tethr/)

**[トップへ戻る](#contributing-and-collaborating)**

## Xcode

*Xcode の拡張、テーマ、その他の強化ツール。*

### 拡張

*Xcode のソースエディターとプロジェクト拡張。*

* [CleanClosureXcode](https://github.com/BalestraPatrick/CleanClosureXcode) - クロージャ構文をきれいにする Xcode Source Editor 拡張。
* [xTextHandler](https://github.com/cyanzhong/xTextHandler) - Xcode Source Editor 拡張ツールセット（Xcode 8 用プラグイン）。
* [SwiftInitializerGenerator](https://github.com/Bouke/SwiftInitializerGenerator) - Swift イニシャライザを生成する Xcode 8 Source Code 拡張。
* [XcodeEquatableGenerator](https://github.com/sergdort/XcodeEquatableGenerator) - 型とフィールドの選択に基づいて Swift Equatable プロトコルへの準拠を生成する Xcode 8 Source Code 拡張。
* [Import](https://github.com/markohlebar/Import) - コードのどこからでも import を追加できる Xcode 拡張。
* [Mark](https://github.com/velyan/Mark) - MARK コメントを生成する Xcode 拡張。
* [XShared](https://github.com/Otbivnoe/XShared) - ソーシャル（Slack、Telegram）用の特別な整形引用符付きでコードをコピーできる Xcode 拡張。
* [XGist](https://github.com/Bunn/Xgist) - 選択したテキストやファイル全体を GitHub の Gist に送り、Gist URL を自動でクリップボードにコピーできる Xcode 拡張。
* [Swiftify](https://swiftify.com/) - Objective-C から Swift へのオンラインコードコンバーターと Xcode 拡張。
* [DocumenterXcode](https://github.com/serhii-londar/DocumenterXcode) - VVDocumenter-Xcode をソースエディタ拡張として新たな生命を与える試み。
* [Snowonder](https://github.com/Karetski/Snowonder) - Xcode 向けの魔法のような import 宣言フォーマッター。
* [XVim2](https://github.com/XVimProject/XVim2) - Xcode 9 の Vim キーバインド。
* [Comment Spell Checker](https://github.com/velyan/Comment-Spell-Checker) - コードコメントのスペルチェックと自動修正を行う Xcode 拡張。
* [nef](https://github.com/bow-swift/nef-plugin) - この Xcode 拡張により、コードを選択してスニペットとしてエクスポートできます。Mac AppStore で入手可能。

**[トップへ戻る](#contributing-and-collaborating)**

### テーマ

*Xcode と関連ツールのカラーテーマ。*

- [Dracula Theme](https://draculatheme.com/xcode/) - Xcode のダークテーマ。
- [Solarized-Dark-for-Xcode](https://github.com/ArtSabintsev/Solarized-Dark-for-Xcode/) - Xcode 5 の Solarized Dark テーマ。
- [WWDC2016 Xcode Color Scheme](https://github.com/cargath/WWDC2016-Xcode-Color-Scheme) - WWDC 2016 の招待状に基づく Xcode カラースキーム。
- [Xcode themes list](https://github.com/hdoria/xcode-themes) - Xcode のカラーテーマ。

**[トップへ戻る](#contributing-and-collaborating)**


### その他の Xcode

*その他の Xcode プラグイン、ヘルパー、ユーティリティ。*

- [awesome-xcode-scripts](https://github.com/aashishtamsya/awesome-xcode-scripts) - 役立つ xcode スクリプトの厳選リスト。
- [SBShortcutMenuSimulator](https://github.com/DeskConnect/SBShortcutMenuSimulator) - シミュレーターでの 3D Touch ショートカット。
- [Swift Macros 🚀](https://github.com/krzysztofzablocki/Swift-Macros) - コミュニティが作成した Macro と関連学習リソースの厳選リスト。
- [Synx](https://github.com/venmo/synx) - Xcode プロジェクトのフォルダーを Xcode グループに合わせて再編成するコマンドラインツール。
- [Xcode Developer Disk Images](https://github.com/haikieu/xcode-developer-disk-image-all-platforms) - ビルドをデバイスに入れるには Xcode Developer Disk Images が必要です。しかし Xcode が最新の Disk Images に更新されていないことがあります。そんなときはここで便利に見つけられます。
- [Xcode Keymap for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=stevemoser.xcode-keybindings) - この拡張は、人気の Xcode キーボードショートカットを Visual Studio Code に移植します。

**[トップへ戻る](#contributing-and-collaborating)**
