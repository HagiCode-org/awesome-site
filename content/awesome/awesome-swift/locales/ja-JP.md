# 素晴らしいSwift
 
<!-- 

このファイルは更新せず、代わりに CONTENTS.JSON を更新してください。ありがとうございます :-)

 -->



| Awesome | Linux | プロジェクト | 更新日 |
|:-------:|:-----:|:--------:|:-------:|
| [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) | :penguin: | 1107 | August 03, 2026 |

協力:

[![Codemotion](https://github.com/matteocrippa/awesome-swift/blob/master/.github/images/codemotion_logo.png?raw=true)](https://codemo.tech/partners)



### 目次

- [Guides](#guides)
  - [ニュースレター](#newsletter)
  - [公式ガイド](#official-guides)
  - [スタイルガイド](#style-guides)
  - [サードパーティ製ガイド](#third-party-guides)
- [ボイラープレート](#boilerplates)
- [REPL](#repl)
- [エディターのサポート](#editor-support)
  - [Emacs](#emacs)
  - [Google Colaboratory](#google-colaboratory)
  - [Vim](#vim)
- [ベンチマーク](#benchmark)
- [コンバーター](#converters)
- [その他のAwesomeリスト](#other-awesome-lists)
- [依存関係マネージャー](#dependency-managers)
- [パターン](#patterns)
- [その他](#misc)
- [Libs](#libs)
  - [アクセシビリティ](#accessibility)
  - [AI](#ai)
  - [アルゴリズム](#algorithm)
  - [分析](#analytics)
  - [アニメーション](#animation)
  - [API](#api)
  - [アプリのルーティング](#app-routing)
  - [App Store](#app-store)
  - [Audio](#audio)
  - [拡張現実](#augmented-reality)
  - [認証](#authentication)
  - [Bots](#bots)
  - [Cache](#cache)
  - [チャート](#chart)
  - [Chat](#chat)
  - [色](#colors)
  - [コマンドライン](#command-line)
  - [並行処理](#concurrency)
  - [通貨](#currency)
  - [データ管理](#data-management)
    - [CBOR](#cbor)
    - [Core Data](#core-data)
    - [CSV](#csv)
    - [Firebase](#firebase)
    - [GraphQL](#graphql)
    - [JSON](#json)
    - [キー・バリューストア](#key-value-store)
    - [MongoDB](#mongodb)
    - [複数データベース](#multi-database)
    - [ORM](#orm)
    - [その他のデータ](#other-data)
    - [Realm](#realm)
    - [SQLドライバー](#sql-drivers)
    - [SQLite](#sqlite)
    - [TOML](#toml)
    - [XML](#xml)
    - [YAML](#yaml)
    - [ZIP](#zip)
  - [Date](#date)
  - [依存性注入](#dependency-injection)
  - [デバイス](#device)
  - [Documentation](#documentation)
  - [Email](#email)
  - [組み込みシステム](#embedded-systems)
    - [周辺機器](#peripherals)
  - [イベント](#events)
  - [ファイル](#files)
  - [フォント](#fonts)
  - [ゲームエンジン](#game-engine)
    - [2D](#game-engine-2d)
  - [ゲーム](#games)
  - [ジェスチャー](#gesture)
  - [ハードウェア](#hardware)
    - [3D Touch](#3d-touch)
    - [Bluetooth](#bluetooth)
    - [カメラ](#camera)
      - [バーコード](#barcode)
    - [触覚フィードバック](#haptic-feedback)
    - [iBeacon](#ibeacon)
    - [センサー](#sensors)
  - [画像](#images)
  - [キー・バリューコーディング](#key-value-coding)
  - [キーボード](#keyboard)
  - [Kit](#kit)
  - [レイアウト](#layout)
    - [Auto Layout](#auto-layout)
  - [ローカライズ](#localization)
  - [位置情報](#location)
  - [ログ記録](#logging)
  - [地図](#maps)
  - [数学](#math)
  - [自然言語処理](#natural-language-processing)
  - [ネットワーク](#network)
    - [HTML](#html)
    - [メッセージングプロトコル](#messaging-protocol)
    - [SOAP](#soap)
    - [Socket](#socket)
    - [ウェブサーバー](#webserver)
  - [OCR](#ocr)
  - [最適化](#optimization)
  - [PDF](#pdf)
  - [品質](#quality)
  - [スクリプト](#scripting)
  - [SDK](#sdk)
  - [セキュリティ](#security)
    - [Cryptography](#cryptography)
    - [Keychain](#keychain)
  - [ストリーミング](#streaming)
  - [スタイル設定](#styling)
  - [SVG](#svg)
  - [System](#system)
  - [テスト](#testing)
    - [Mock](#mock)
  - [Text](#text)
  - [スレッド](#thread)
  - [UI](#ui)
    - [アラート](#alert)
    - [ぼかし](#blur)
    - [Button](#button)
    - [カレンダー](#calendar)
    - [カード](#cards)
    - [フォーム](#form)
    - [HUD](#hud)
    - [ラベル](#label)
    - [メニュー](#menu)
    - [ページネーション](#pagination)
    - [決済](#payment)
    - [権限](#permissions)
    - [スクロールバー](#scroll-bars)
    - [StackView](#stackview)
    - [スイッチ](#switch)
    - [タブ](#tab)
    - [テンプレート](#template)
    - [TextField](#textfield)
    - [トランジション](#transition)
    - [3D](#ui-3d)
    - [UICollectionView](#uicollectionview)
    - [UITableView](#uitableview)
    - [チュートリアル](#walkthrough)
  - [ユーティリティ](#utility)
  - [検証](#validation)
    - [電話番号](#phone-numbers)
  - [バージョンマネージャー](#version-manager)
  - [動画](#video)
- [サーバーレス](#serverless)

## ガイド
*Swift関連の優れたガイド集。* 

### ニュースレター
[トップに戻る](#readme) 

* [Open Source Updates for Swift Projects](https://ossp-updates.beehiiv.com/) - Swiftで書かれた、またはSwiftに関連する人気および無名のオープンソースプロジェクトの最新情報を隔週でお届けするニュースレター。

### 公式ガイド
[トップに戻る](#readme) 

* [API Design Guidelines](https://www.swift.org/documentation/api-design-guidelines/) - Swift公式のAPI設計ガイドライン。
* [Apple eBook](https://books.apple.com/us/book/the-swift-programming-language-swift-5-7/id881256329) - Swift初心者向けのApple公式電子書籍。
* [Getting Started](https://www.swift.org/getting-started/) - Swiftプログラミング言語の使い方に関する情報。
* [Introducing SwiftUI](https://developer.apple.com/tutorials/swiftui) - 4時間以上のコンテンツとインタラクティブなチュートリアルを含むSwiftUI公式チュートリアル。

### スタイルガイド
[トップに戻る](#readme) 

* [Airbnb](https://github.com/airbnb/swift) - Airbnb公式スタイルガイド。
* [Google](https://google.github.io/swift/) - Appleの優れたSwift標準ライブラリのスタイルを基礎とし、Google内の複数のSwiftプロジェクトでの利用から得たフィードバックも取り入れたスタイルガイド。
* [LinkedIn](https://github.com/linkedin/swift-style-guide) - LinkedIn公式スタイルガイド。
* [Raywenderlich](https://github.com/kodecocodes/swift-style-guide) - 必読のRaywenderlichガイド。

### サードパーティ製ガイド
[トップに戻る](#readme) 

* [30 Days of Swift](https://github.com/allenwong/30DaysofSwift) - 楽しく学べる30日間のチュートリアル。
* [About Swift](https://github.com/NicolaLancellotti/about-swift) - Swift言語についてのプレイグラウンド。
* [Awesome Swift Education](https://github.com/hsavit1/Awesome-Swift-Education) - Swift言語の重要なトピックを整理した一覧。
* [Conferences.digital](https://github.com/zagahr/Conferences.digital) - ネイティブmacOSアプリでカンファレンス動画を視聴。
* [Developing iOS Apps with Swift](https://podcasts.apple.com/us/podcast/developing-ios-11-apps-with-swift/id1315130780) - Paul Hegartyによるスタンフォード大学のコース。
* [Hacking With Swift](https://www.hackingwithswift.com) - 30の実践プロジェクトを通じてアプリ開発を教える、無料の総合トレーニングコース。
* [Ray Wenderlich Tutorials, Videos, Podcasts and books](https://www.kodeco.com) - 高品質なプログラミングチュートリアル。
* [Swift & SwiftUI Tutorials](http://ww1.janeshswift.com) - SwiftUIを簡単に学べます。
* [Swift Education](https://github.com/swifteducation) - Swiftやアプリ開発の教材を共有する教育者コミュニティ。
* [swift-tips](https://github.com/vincent-pradeilles/swift-tips) - Vincent Pradeillesによる便利なヒント集。
* [SwiftDoc](https://sosumi.ai/) - 自動生成ドキュメント。
* [SwiftGuide CN](https://github.com/ipader/SwiftGuide) - 中国語で書かれたガイド。
* [SwiftTips](https://github.com/JohnSundell/SwiftTips) - John Sundellによる便利なヒント集。

## ボイラープレート

* [iOS project template](https://github.com/messeb/ios-project-template) - fastlaneのレーン、Travis CIジョブ、Codecov・SwiftLint用HoundCI・DangerのGitHub連携を備えたiOSプロジェクトテンプレート。
* [Model-View-Presenter template](https://github.com/onl1ner/ios-mvp-template) - MVPパターンに基づくiOSアプリの開発を効率化する、柔軟で使いやすいテンプレート。
* [Swift Module Template](https://github.com/fulldecent/swift6-module-template) - 再利用可能な優れたモジュールを始めるための、意見の明確なテンプレート。

## REPL

* [Online Swift Playground](http://online.swiftplayground.run) - オンラインのSwiftプレイグラウンド。
* [SwiftFiddle](https://swiftfiddle.com) - Swiftコードの作成、共有、埋め込みができるプレイグラウンド。

## エディターのサポート
*お気に入りのエディターをサポートします。* 

### Emacs
[トップに戻る](#readme) 

* [swift-mode](https://github.com/swift-emacs/swift-mode) - flycheckによる部分的なエラー対応を含むEmacsサポート。

### Google Colaboratory
[トップに戻る](#readme) 

* [swift-colab](https://github.com/philipturner/swift-colab) - ブラウザー上でSwiftを実行。

### Vim
[トップに戻る](#readme) 

* [swift-vim](https://github.com/keith/swift.vim) - Vimランタイムファイル。
* [vim-polyglot](https://github.com/sheerun/vim-polyglot) - vim-swiftを含むVim用言語パック。

## ベンチマーク

* [xcprofiler](https://github.com/giginet/xcprofiler) - コンパイル時間をプロファイルするコマンドラインユーティリティ。

## コンバーター

* [Swiftify](https://swiftify.com/#/converter/code/) - Objective-CからSwiftへのオンラインコード変換ツールおよびXcode拡張機能。
* [Zolang](https://github.com/Zolang/Zolang) :penguin: - 複数のプログラミング言語でコードを生成するDSL。

## その他のAwesomeリスト
*これらのプロジェクトのアプリもご覧ください:* 
* [Awesome iOS Interview](https://github.com/dashvlas/awesome-ios-interview) - 面接準備に役立つ質問集。
* [awesome-macOS](https://github.com/iCHAIT/awesome-macOS) - macOS向けの優れたアプリケーション、ソフトウェア、ツールなどを厳選した一覧。
* [example-ios-apps](https://github.com/jogendra/example-ios-apps) - iOS開発を学ぶ初心者や、サンプルアプリ・機能を探しているiOS開発者向けの素晴らしい一覧。
* [open-source-ios-apps](https://github.com/dkhamsing/open-source-ios-apps) - オープンソースiOSアプリの共同リスト。
* [open-source-mac-os-apps](https://github.com/serhii-londar/open-source-mac-os-apps) - macOS向けオープンソースアプリケーションのAwesomeリスト。

## 依存関係マネージャー
*Swift用の依存関係管理ソフトウェア。* 
* [Accio](https://github.com/JamitLabs/Accio) - Carthageを改良した、SwiftPMベースのiOSなど向け依存関係マネージャー。
* [Carthage](https://github.com/Carthage/Carthage) - 新しい依存関係マネージャー。
* [CocoaPods](https://github.com/CocoaPods/CocoaPods) - 最も広く使われている依存関係マネージャー。
* [Mint](https://github.com/yonaskolb/Mint) - Swiftのコマンドラインツールをインストールして実行するパッケージマネージャー。
* [swift-package-manager](https://github.com/swiftlang/swift-package-manager) - Swift Package Manager（SPM）はSwiftプログラミング言語用のパッケージマネージャーです。
* [Swiftly](https://github.com/swiftlang/swiftly) - 異なるバージョンのSwiftをインストールするSwift CLIツールチェーンインストーラー。

## パターン

* [App Architecture](https://github.com/objcio/app-architecture) - 『App Architecture』書籍のサンプルコード。
* [CleanArchitectureRxSwift](https://github.com/sergdort/ModernCleanArchitectureSwiftUI) - RxSwiftを使ったiOSアプリのクリーンアーキテクチャの例。
* [Design-Patterns-In-Swift](https://github.com/ochococo/Design-Patterns-In-Swift) - デザインパターン。
* [GoodReactor](https://github.com/GoodRequest/GoodReactor) - ⚛️ View Model、View Controller、Coordinator間の通信を行う、Reduxに着想を得たReactorフレームワーク。
* [Reactant](https://github.com/Brightify/Reactant) - iOS向けリアクティブアーキテクチャ。
* [ReduxUI](https://github.com/gre4ixin/ReduxUI) - SwiftUIで簡単に使えるReduxフレームワーク。
* [SimplexArchitecture](https://github.com/Ryu0118/swiftui-simplex-architecture) - 状態変化をSwiftUIのViewから分離するシンプルなアーキテクチャ。
* [Spin](https://github.com/Spinners/Spin.Swift) - RxSwift、ReactiveSwift、Combineで動作する汎用的なフィードバックループを提供。
* [StateViewController](https://github.com/davidask/StateViewController) - 状態を持つUIViewControllerの構成。巨大なView Controllerに対するMVCの解決策。
* [SwiftUI Atom Properties](https://github.com/ra1028/swiftui-atom-properties) - SwiftUIと並行処理向けのリアクティブなデータバインディングおよび依存性注入ライブラリ。
* [The Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture) - 合成性、テスト性、使いやすさを重視し、一貫性と理解しやすさを備えたアプリを構築するライブラリ。
* [Viperit](https://github.com/ferranabello/Viperit) - iOS向けViperフレームワーク。

## その他
*Swift関連のさまざまなプロジェクト。* 
* [Beak](https://github.com/yonaskolb/Beak) - Swiftスクリプト向けコマンドラインインターフェース。
* [BetterCodable](https://github.com/marksands/BetterCodable) - プロパティラッパーで`Codable`構造体を強化します。カスタムの`init(from decoder: Decoder)` throwsを実装する定型作業を避けることを目指しています。
* [CodableWrappers](https://github.com/GottaGetSwifty/CodableWrappers) - Codable型のカスタムシリアライズを簡単にするPropertyWrapper集。
* [Forked](https://github.com/drewmccormack/Forked) - ローカルファーストアプリを支援する、Swiftアプリケーションで共有データを管理する汎用的な手法。
* [Fugen](https://github.com/almazrafi/Fugen) - Figmaファイルからリソースをエクスポートしコードを生成するコマンドラインツール。
* [MemberwiseInit](https://github.com/gohanlon/swift-memberwise-init-macro) - `@MemberwiseInit`は、Swiftのメンバーごとのイニシャライザーと同じ安全性を既定とするセマンティクスに従い、意図した`init`をより適切に提供できるSwiftマクロです。
* [Model2App](https://github.com/Q-Mobile/Model2App) - データモデルを動作するCRUDアプリに変換。
* [Surmagic](https://github.com/gurhub/surmagic) - XCFrameworkを簡単に作成！iOS、Mac Catalyst、tvOS、macOS、watchOSなど複数プラットフォーム向けのXCFrameworkを一度に作成するコマンドラインツール。
* [SwagGen](https://github.com/yonaskolb/SwagGen) :penguin: - Stencilテンプレートを基にSwagger仕様からREST APIを生成するコマンドラインツール。
* [Swiftbrew](https://github.com/swiftbrew/Swiftbrew) - Swiftパッケージ向けHomebrew。
* [SwiftGen](https://github.com/SwiftGen/SwiftGen) - プロジェクト内のさまざまなアセット用コードを自動生成するツール群。
* [SwiftKit](https://github.com/SvenTiigi/SwiftKit) - 次のオープンソースSwiftフレームワークを始めましょう 📦。
* [SwiftPlate](https://github.com/JohnSundell/SwiftPlate) - クロスプラットフォームのフレームワークプロジェクトをコマンドラインから簡単に生成。
* [Toybox](https://github.com/giginet/Toybox) - Xcode Playgroundを簡単に管理。
* [Tuist](https://github.com/tuist/tuist) - Xcodeプロジェクトを大規模に作成、保守、操作するオープンソースのコマンドラインツール。
* [xc](https://github.com/s2mr/xc) - 指定したバージョンのXcodeプロジェクトファイルを開くツール。
* [xcbeautify](https://github.com/cpisciotta/xcbeautify) - xcodebuild用のシンプルな整形ツール。
* [XcodeGen](https://github.com/yonaskolb/XcodeGen) - YAMLファイルとプロジェクトディレクトリからXcodeプロジェクトを生成するツール。
* [xcodeproj](https://github.com/tuist/xcodeproj) - Xcodeプロジェクトとワークスペースを読み込み、更新、書き込みするライブラリ。

## ライブラリ
*Swiftプロジェクト向けのスニペットやライブラリを紹介します。* 

### アクセシビリティ
[トップに戻る](#readme) 

* [Capable](https://github.com/chrs1885/Capable) - アクセシビリティ設定を管理し、高コントラストの色や拡大可能なフォントを活用して、障がいのあるユーザーもアプリを使えるようにします。

### AI
*機械学習やニューラルネットワークなど、AIを利用するプロジェクト向けのライブラリ。* [トップに戻る](#readme) 

* [CoreML-Models](https://github.com/likedan/Awesome-CoreML-Models) - 独自のCore MLモデル集。
* [DL4S](https://github.com/palle-k/DL4S) - 自動微分、高速なテンソル演算、CNNやRNNからTransformerまでの動的ニューラルネットワーク。
* [EdgeRunner](https://github.com/christopherkarani/EdgeRunner) - Apple Silicon向けの高速なローカルLLM推論。SwiftとMetalで一から構築。
* [Espresso](https://github.com/christopherkarani/Espresso) - AppleのNeural Engine向けにTransformerを直接コンパイル。
* [Fazm](https://github.com/m13v/fazm) - アクセシビリティAPIとScreenCaptureKitを利用した、音声操作対応macOS用AIエージェント。
* [Open Agent SDK](https://github.com/terryso/open-agent-sdk-swift) - 完全なエージェントループ、34個の組み込みツール、サブエージェントのオーケストレーション、MCP統合、複数プロバイダーのLLM対応を備えたオープンソースAgent SDK。
* [OpenAI](https://github.com/MacPaw/OpenAI) - OpenAI公開API用Swiftパッケージ。
* [swift-coding-agent](https://github.com/ivan-magda/swift-coding-agent) - サブエージェントとコンテキスト圧縮を備えたターミナル用コーディングエージェント。

### アルゴリズム
[トップに戻る](#readme) 

* [Algorithm](https://github.com/CosmicMind/Algorithm) - アルゴリズムや確率モデルを作成するためのツールセット。
* [BTree](https://github.com/attaswift/BTree) - メモリ内Bツリーを使ったSwift向け高速ソート済みコレクション。
* [swift-algorithm-club](https://github.com/kodecocodes/swift-algorithm-club) - 解説付きのアルゴリズムとデータ構造。
* [SwiftLCS](https://github.com/Frugghi/SwiftLCS) :penguin: - 最長共通部分列（LCS）アルゴリズムの実装。

### 分析
*アプリの利用状況を簡単に追跡するための分析ライブラリ。* [トップに戻る](#readme) 

* [Aptabase](https://github.com/aptabase/aptabase) - オープンソースでプライバシーを重視した、Swiftアプリ向けのシンプルな分析ツール。
* [Scout](https://github.com/kasianov-mikhail/scout) - CloudKitをバックエンドに使う、本番環境対応のiOSアプリ向けロギングSDK。
* [Tracker Aggregator](https://github.com/kafejo/Tracker-Aggregator) - 多用途な分析抽象化レイヤー。
* [Umbrella](https://github.com/devxoul/Umbrella) - 分析抽象化レイヤー。

### アニメーション
*アニメーションを支援するライブラリ。* [トップに戻る](#readme) 

* [Advance](https://github.com/timdonnelly/Advance) - iOS、tvOS、OS X向けの強力なアニメーションフレームワーク。
* [AnimatedGradient](https://github.com/exyte/AnimatedGradient) - SwiftUIで書かれたアニメーション付き線形グラデーションライブラリ。
* [ChainPageCollectionView](https://github.com/jindulys/ChainPageCollectionView) - 洗練された2階層のコレクションビューのレイアウトとアニメーション。
* [CocoaSprings](https://github.com/MacPaw/CocoaSprings) - iOS/macOS向けのインタラクティブなスプリングアニメーション。
* [Comets](https://github.com/cruisediary/Comets) - パーティクルのアニメーション。
* [Ease](https://github.com/roberthein/Ease) - Easeであらゆるものをアニメーション化。
* [EasyAnimation](https://github.com/icanzilb/EasyAnimation) - UIView.animateWithDuration(_:, animations:...)の機能をさらに拡張するライブラリ。
* [Elephant](https://github.com/s2mr/Elephant) - 洗練されたSVGアニメーションキット。
* [FlightAnimator](https://github.com/AntonTheDev/FlightAnimator) - 自然なブロックベースのCore Animationフレームワーク。
* [Gemini](https://github.com/shoheiyokoyama/Gemini) - 豊富な機能を持つスクロール連動型アニメーションフレームワーク。
* [IBAnimatable](https://github.com/IBAnimatable/IBAnimatable) - IBAnimatableを使い、Interface BuilderでApp Store公開可能なアプリのUI、操作、ナビゲーション、トランジション、アニメーションをデザイン・試作。
* [Interpolate](https://github.com/marmelroy/Interpolate) - ジェスチャー操作に連動したインタラクティブアニメーションを作成する補間フレームワーク。
* [lottie-ios](https://github.com/airbnb/lottie-ios) - After EffectsのベクターアニメーションをiOSでネイティブに描画するライブラリ。
* [Pastel](https://github.com/cruisediary/Pastel) - Instagramのようなグラデーションアニメーション効果。
* [Poi](https://github.com/HideakiTouhara/Poi) - TinderのようなカードUIを使えるライブラリ。TableViewのように利用できます。
* [Presentation](https://github.com/hyperoslo/Presentation) - チュートリアル、リリースノート、アニメーション付きページの作成を支援するライブラリ。
* [Pulsator](https://github.com/shu223/pulsator) - iOS向けパルスアニメーション。
* [Sica](https://github.com/cats-oss/Sica) - シンプルなインターフェースのCore Animation。型安全なアニメーションを順次または並列に実行。
* [Spring](https://github.com/MengTo/Spring) - iOSアニメーションを簡素化するライブラリ。
* [SpriteKitEasingSwift](https://github.com/craiggrummitt/SpriteKitEasingSwift) - SpriteKit向けのより優れたイージング。
* [spruce-ios](https://github.com/willowtreeapps/spruce-ios) - 画面上のアニメーションを振り付け。
* [Stellar](https://github.com/AugustRush/Stellar) - 物理ベースのアニメーションライブラリ。
* [TheAnimation](https://github.com/marty-suzuki/TheAnimation) - 誤った型の値の設定を防ぐ、型安全なCAAnimationラッパー。
* [ViewAnimator](https://github.com/marcosgriselli/ViewAnimator) - たった1行でUIに動きを加えます。
* [YapAnimator](https://github.com/yapstudios/YapAnimator) - 高速で使いやすい物理ベースのアニメーションシステム。

### API
*サードパーティAPIサービスに手軽にアクセスするためのライブラリ。* [トップに戻る](#readme) 

* [GitHubAPI](https://github.com/serhii-londar/GithubAPI) - GitHub REST API v3の実装。
* [GitHubRestAPISwiftOpenAPI](https://github.com/Wei18/github-rest-api-swift-openapi) - OpenAPI仕様からGitHub REST APIをSwiftコードとして定期的に生成。
* [PXGoogleDirections](https://github.com/poulpix/PXGoogleDirections) - Google Directions APIヘルパー。
* [RandomUserSwift](https://github.com/dingwilson/RandomUserSwift) - randomuser.me向けの非公式SDK。ランダムユーザーを生成するフレームワーク。
* [reddift](https://github.com/sonsongithub/reddift) - Reddit APIラッパー。
* [SwiftDisc](https://github.com/M1tsumi/SwiftDisc) - ボットや連携機能向けDiscord APIライブラリ。
* [Swifter Twitter](https://github.com/mattdonnelly/Swifter) - Twitterフレームワーク。
* [Swiftkube](https://github.com/swiftkube/client) :penguin: - Kubernetes向けSwiftクライアント。
* [SwiftlySalesforce](https://github.com/mike4aday/SwiftlySalesforce) - Salesforceと連携するネイティブiOSアプリを迅速に開発するフレームワーク。
* [SwiftyInsta](https://github.com/TheM4hd1/SwiftyInsta) - 非公開かつトークン不要のInstagram RESTful API。
* [YouTubeKit](https://github.com/b5i/YouTubeKit) - APIキーなしでYouTube APIを利用。

### アプリのルーティング
*アプリ内部のルーティングシステム。* [トップに戻る](#readme) 

* [Appz](https://github.com/SwiftKitz/Appz) - 外部アプリの起動やディープリンクを簡単に実現。
* [Crossroad](https://github.com/giginet/Crossroad) - :oncoming_bus: カスタムURLスキームの処理に特化したURLルーター。
* [LightRoute](https://github.com/SpectralDragon/LiteRoute) - VIPERモジュール間のルーティング。
* [Linker](https://github.com/MaksimKurpa/Linker) - iOS向けの軽量な内部・外部ディープリンク処理。
* [MonarchRouter](https://github.com/nikans/MonarchRouter) - 状態とURLに基づく宣言的ルーター。View Controller階層の複雑な遷移を自動化し、実績あるサーバーサイドの慣例を採用。
* [RxFlow](https://github.com/RxSwiftCommunity/RxFlow) - Reactive Flow Coordinatorパターンに基づくiOSアプリ向けナビゲーションフレームワーク。
* [SwiftCurrent](https://github.com/wwt/SwiftCurrent) - Swiftをビルドできる環境で複雑なワークフローを管理。UIKit、Storyboard、SwiftUIを標準でサポート。
* [SwiftRouter](https://github.com/skyline75489/SwiftRouter) - iOS向けURLルーター。
* [SwiftUIRoutes](https://github.com/gabriel/swiftui-routes) - SwiftUIアプリ向けの小さく柔軟なルーター。
* [URLNavigator](https://github.com/devxoul/URLNavigator) - 洗練されたURLルーティング。

### App Store
*Apple App Store、アプリ内課金、レシート検証を支援するライブラリ。* [トップに戻る](#readme) 

* [Apphud](https://github.com/apphud/ApphudSDK) - バックエンド不要で自動更新サブスクリプションを簡単に扱える軽量ライブラリ。
* [AppReview](https://github.com/mezhevikin/AppReview) - SKStoreReviewController経由でApp Storeのレビューを依頼する小さなライブラリ。
* [Flare](https://github.com/space-code/flare) - StoreKit 1とStoreKit 2を完全サポートし、iOS、macOS、tvOS、watchOSのアプリ内課金を簡素化するフレームワーク。
* [InAppPurchase](https://github.com/jinSasaki/InAppPurchase) - シンプルで軽量、安全なアプリ内課金フレームワーク。
* [merchantkit](https://github.com/benjaminmayo/merchantkit) - iOS向けの最新のアプリ内課金管理フレームワーク。
* [SwiftyStoreKit](https://github.com/bizz84/SwiftyStoreKit) - 軽量なアプリ内課金フレームワーク。

### オーディオ
*オーディオを扱うライブラリ。* [トップに戻る](#readme) 

* [AudioKit](https://github.com/audiokit/AudioKit) - 高い学習コストなしで使える、強力なオーディオ合成・処理・分析ツール。
* [AudioPlayer](https://github.com/delannoyk/AudioPlayer) - 便利な機能を備えたAVPlayerラッパー。
* [AudioPlayerSwift](https://github.com/tbaranes/AudioPlayerSwift) - iOS、OS X、tvOSアプリで基本・高度な再生機能を提供するシンプルなクラス。
* [Beethoven](https://github.com/vadymmarkov/Beethoven) - 音楽信号のピッチ検出用オーディオ処理ライブラリ。
* [FDSoundActivatedRecorder](https://github.com/fulldecent/FDSoundActivatedRecorder) - ユーザーが話し始めると録音を開始。
* [FDWaveformView](https://github.com/fulldecent/FDWaveformView) - アプリ内にオーディオ波形を簡単に表示。
* [FluidAudio](https://github.com/FluidInference/FluidAudio) - iOS/macOS上のリアルタイム・オンデバイス音声処理SDK（話者分離、識別、VAD、分離、埋め込み、ASR）。PyTorchからCoreMLモデルへ直接変換し、Apple Neural Engineの性能を活用します。
* [ModernAVPlayer](https://github.com/noreasonprojects/ModernAVPlayer) - 通信状態が悪い場合でも、バックグラウンド再生を含めて再生を再開できる永続化対応AVPlayer。
* [MusicKit](https://github.com/0thernet/MusicKit) - 音楽を作曲・変換するフレームワーク。
* [Soundable](https://github.com/lcardevnas/Soundable) - 単音や連続した音を非常に簡単に再生できます。
* [SwiftAudioPlayer](https://github.com/tanhakabir/SwiftAudioPlayer) - AVAudioEngineを使ってストリーミングとリアルタイム音声処理を行う、iOS向けシンプルなオーディオプレーヤー。
* [SwiftySound](https://github.com/adamcichy/SwiftySound) - 1行のコードで音声を再生できるシンプルなライブラリ。
* [voice-overlay-ios](https://github.com/algolia/voice-overlay-ios) - 音声利用の許可を取得し、音声入力をテキストとして受け取るカスタマイズ可能なUIオーバーレイ。

### 拡張現実
[トップに戻る](#readme) 

* [ARHeadsetKit](https://github.com/philipturner/ARHeadsetKit) - 5ドルのGoogle CardboardでMicrosoft HoloLensを再現する高水準フレームワーク。
* [ARKit-CoreLocation](https://github.com/AndrewHartAR/ARKit-CoreLocation) - ARの高精度とGPSデータの広域性を組み合わせます。
* [ARKit-Navigation](https://github.com/chriswebb09/ARKitNavigationDemo) - MapKitを使った拡張現実ナビゲーション。
* [ARVideoKit](https://github.com/AFathi/ARVideoKit) - ARKitの動画、写真、Live Photos、GIFを撮影・記録。

### 認証
*アプリの認証を簡単に管理。* [トップに戻る](#readme) 

* [Cely](https://github.com/cely-tools/Cely) - すぐに使えるログインフレームワーク。
* [LinkedInSignIn](https://github.com/serhii-londar/LinkedInSignIn) - LinkedInへのログインとアクセストークン取得を行うシンプルなビューコントローラー。
* [LoginKit](https://github.com/IcaliaLabs/LoginKit) - iOSアプリにログイン・サインアップのUXを手早く簡単に追加。
* [ReCaptcha](https://github.com/fjcaetano/ReCaptcha) - iOS向け[不可視]ReCaptcha。
* [SpotifyLogin](https://github.com/spotify/SpotifyLogin) - Spotify APIで認証。

### ボット
*ボットを構築するライブラリ。* [トップに戻る](#readme) 

* [Telegram Bot SDK](https://github.com/rapierorg/telegram-bot-swift) :penguin: - 非公式SDK。
* [Telegrammer](https://github.com/givip/Telegrammer) :penguin: - Telegramボット開発者向けオープンソースフレームワーク。Apple/SwiftNIOを基盤として構築され、高い性能を実現します。

### キャッシュ
[トップに戻る](#readme) 

* [AwesomeCache](https://github.com/aschuch/AwesomeCache) - キャッシュを簡単に管理。
* [Cache](https://github.com/hyperoslo/Cache) - キャッシュに特化したライブラリ。
* [CachyKit](https://github.com/Sadmansamee/CachyKit) - JSON、画像、ZIP、任意のオブジェクトを有効期限・TTYL付きでキャッシュし、強制更新にも対応。
* [Cachyr](https://github.com/nrkno/yr-cachyr) - iOS、macOS、tvOS向けの小さなキー・バリュー型データキャッシュ。
* [Carlos](https://github.com/spring-media/Carlos) - シンプルで柔軟なキャッシュ。
* [EVURLCache](https://github.com/evermeer/EVURLCache) - オフライン時にもアプリを動作させたい場合に。
* [MemoryCache](https://github.com/yysskk/MemoryCache) - 型安全なメモリーキャッシュ。
* [Monstra](https://github.com/yangchenlarkin/Monstra) - TTL、優先度ベースの削除、キャッシュアバランシェ対策を備えたメモリーキャッシュフレームワーク。

### チャート
[トップに戻る](#readme) 

* [Charts](https://github.com/ChartsOrg/Charts) - iOS/tvOS/OSX向けの美しいチャート（MPAndroidChartの移植）。
* [ChartView](https://github.com/AppPear/ChartView) - 美しいチャートを手軽に表示するSwiftパッケージ。
* [FLCharts](https://github.com/francescoleoni98/FLCharts) - 使いやすく高度にカスタマイズ可能なiOS向けチャートライブラリ。
* [ScrollableGraphView](https://github.com/philackm/ScrollableGraphView) - 単純な離散データセットを可視化する、iOS向けの適応型スクロールグラフビュー。
* [SwiftChart](https://github.com/gpbl/SwiftChart) - iOS向けのシンプルな折れ線・面グラフライブラリ。複数系列、一部塗りつぶし、タッチイベントに対応。
* [SwiftCharts](https://github.com/ivnsch/SwiftCharts) - 高度にカスタマイズ可能なiOS向けチャート。
* [SwiftUICharts](https://github.com/willdale/SwiftUICharts) - SwiftUI向けのチャート・プロットライブラリ。macOS、iOS、watchOS、tvOSで動作し、アクセシビリティとローカライズ機能を内蔵。
* [TKRadarChart](https://github.com/TBXark/TKRadarChart) - カスタマイズ可能なレーダーチャート。

### チャット
*チャットアプリを構築するためのライブラリ。* [トップに戻る](#readme) 

* [Chatto](https://github.com/badoo/Chatto) - チャットアプリを構築する軽量フレームワーク。
* [ExyteChat](https://github.com/exyte/chat) - メッセージセル、入力ビュー、メディアピッカーを完全にカスタマイズできるSwiftUIチャットUIフレームワーク。
* [InputBarAccessoryView](https://github.com/nathantannar4/InputBarAccessoryView) - オートコンプリートや添付機能を備えた高機能入力バーを作る、シンプルでカスタマイズしやすいInputAccessoryView。
* [MessageKit](https://github.com/MessageKit/MessageKit) - コミュニティ主導のJSQMessagesViewController代替。
* [MessengerKit](https://github.com/steve228uk/MessengerKit) - メッセンジャーインターフェースを構築するUIフレームワーク。
* [Real-time Chat with Firebase](https://github.com/dopebase/messenger-iOS-chat-swift-firestore) - MessageKitとFirebase Firestoreを利用した実用的なリアルタイムチャットアプリ。
* [swiftui-messaging-ui](https://github.com/FluidGroup/swiftui-messaging-ui) - スクロール位置を飛ばさずに古いメッセージを読み込める、安定した先頭追加機能を備えた基本的なSwiftUIチャットUIコンポーネント。

### 色
*色の管理や便利な機能に関する興味深いスニペット。* [トップに戻る](#readme) 

* [ChromaColorPicker](https://github.com/joncardasis/ChromaColorPicker) - 直感的で楽しいiOS向けカラーピッカー。
* [ColorKit](https://github.com/Boris-Em/ColorKit) - iOS向け高度な色操作。
* [DynamicColor](https://github.com/yannickl/DynamicColor) - 色を簡単に操作する拡張機能。
* [Gradients](https://github.com/Gradients/Gradients) - 厳選された180種類以上の美しいグラデーション集。
* [Hue](https://github.com/zenangst/Hue) - 色に関するあらゆる機能を備えたユーティリティ。
* [PrettyColors](https://github.com/jdhealy/PrettyColors) - ANSIエスケープコードを使ってターミナルのテキストにスタイルと色を付けます。ECMA Standard 48準拠。
* [SheetyColors](https://github.com/chrs1885/SheetyColors) - アクションシート風のiOS向けカラーピッカー。
* [SwiftGen-Colors](https://github.com/SwiftGen/SwiftGen#uicolor) - `UIColor`定数用の`enum`を自動生成するツール。
* [SwiftHEXColors](https://github.com/thii/SwiftHEXColors) - UIColor向けHEXカラー処理拡張。
* [UIColor-Hex-Swift](https://github.com/yeahdongcn/UIColor-Hex-Swift) - HEXからUIColorへのコンバーター。
* [UIGradient](https://github.com/dqhieu/UIGradient) - グラデーションレイヤー、画像、色を扱うシンプルで強力なライブラリ。

### コマンドライン
*コマンドラインアプリケーションを作成。* [トップに戻る](#readme) 

* [Ashen](https://github.com/colinta/Ashen) - The Elm Architectureに基づく、Swiftでターミナルアプリケーションを書くためのフレームワーク。
* [Commander](https://github.com/kylef/Commander) :penguin: - 美しいコマンドラインインターフェースを構築。
* [Guaka](https://github.com/nsomar/Guaka) :penguin: - 洗練されたスマートなPOSIX準拠コマンドラインフレームワーク。
* [LineNoise](https://github.com/andybest/linenoise-swift) :penguin: - readlineの依存関係ゼロの代替。
* [Mocker](https://github.com/us/mocker) - AppleのContainerizationフレームワーク上に構築された、macOS向けDocker互換コンテナーCLI。
* [nef](https://github.com/bow-swift/nef) - Xcode Playgroundで書かれたドキュメントをコンパイル時に検証するコマンドラインツール集。
* [Progress.swift](https://github.com/jkandzi/Progress.swift) :penguin: - コマンドラインに美しいプログレスバーを追加。
* [Swift Argument Parser](https://github.com/apple/swift-argument-parser) - シンプルで型安全なSwift用引数パーサー。
* [SwiftCLI](https://github.com/jakeheis/SwiftCLI) :penguin: - CLI開発に使える強力なフレームワーク。
* [Swiftline](https://github.com/nsomar/Swiftline) - コマンドラインアプリケーション作成を支援するツール集。
* [SwiftShell](https://github.com/kareman/SwiftShell) - コマンドラインアプリケーションの作成とシェルコマンドの実行を行うライブラリ。
* [SwiftyTextTable](https://github.com/scottrhoyt/SwiftyTextTable) :penguin: - テキストテーブルを生成する軽量ライブラリ。

### 並行処理
*並行処理をより簡単に扱う方法。* [トップに戻る](#readme) 

* [async+](https://github.com/async-plus/async-plus) :penguin: - Swift 5.5のasync/await向けチェーン可能なインターフェース。
* [AsyncNinja](https://github.com/AsyncNinja/AsyncNinja) - 並行処理とリアクティブプログラミングのプリミティブを網羅したセット。
* [AsyncQueue](https://github.com/dfed/swift-async-queue) :penguin: - 同期コンテキストから非同期コンテキストへ、順序付きタスクを送信できるキューライブラリ。
* [Futures](https://github.com/davidask/Futures) :penguin: - iOS、macOS、tvOS、watchOS、サーバーサイド向けの軽量なPromise。
* [GroupWork](https://github.com/quanvo87/GroupWork) :penguin: - 並行・非同期タスクを簡単に実行。
* [Hydra](https://github.com/malcommac/Hydra) - PromiseとAwait。より良い非同期コードを記述。
* [Queuer](https://github.com/FabrizioBrancati/Queuer) :penguin: - OperationQueueとDispatch（GCD）を基盤とするキューマネージャー。
* [SwiftCoroutine](https://github.com/belozierov/SwiftCoroutine) :penguin: - iOS、macOS、Linux向けコルーチン。
* [Throttler](https://github.com/boraseoksoon/Throttler) - 1行のAPIで大量の非同期入力をスロットリング。
* [Venice](https://github.com/Zewo/Venice) :penguin: - Linux対応の通信逐次プロセス（CSP）。

### 通貨
[トップに戻る](#readme) 


### データ管理
[トップに戻る](#readme) 


#### CBOR
*Concise Binary Object Representation（簡潔なバイナリオブジェクト表現）。* [トップに戻る](#readme) 

* [CBORCoding](https://github.com/SomeRandomiOSDev/CBORCoding) :penguin: - iOS、macOS、tvOS、watchOS向けの簡単なCBORエンコード・デコード。

#### Core Data
*Core Dataの扱いに悩む必要はありません。データ管理に役立つ興味深いライブラリを紹介します。* [トップに戻る](#readme) 

* [AERecord](https://github.com/tadija/AERecord) - iOS向けの優れたCore Dataラッパーライブラリ。
* [CloudCore](https://github.com/deeje/CloudCore/) - オフライン編集、リレーション、共有・公開データベースなどに対応する堅牢なCloudKit同期。
* [CoreStore](https://github.com/JohnEstropia/CoreStore) - Core Dataを扱うシンプルで洗練された方法。
* [DataKernel](https://github.com/mrdekk/DataKernel) - 永続化操作を容易にする、Core Dataスタックの最小限のラッパー。外部依存なし。
* [Graph](https://github.com/CosmicMind/Graph) - 洗練されたデータ駆動型Core Dataフレームワーク。
* [JSQCoreDataKit](https://github.com/jessesquires/JSQCoreDataKit) - SwiftらしいCore Dataスタック。
* [JustPersist](https://github.com/justeat/JustPersist) - Core Dataを標準サポートした、iOSで永続化を行う最も簡単で安全な方法。
* [QueryKit](https://github.com/QueryKit/QueryKit) - Core Dataのフィルタリングを簡単に扱う方法。
* [Skopelos](https://github.com/albertodebortoli/Skopelos) - 最小限でスレッドセーフ、定型コード不要で非常に簡単に使えるCore Data版Active Record。
* [SugarRecord](https://github.com/modo-studio/SugarRecord) - Core DataとRealmを支援。

#### CSV
*CSV形式の解析とシリアライズに役立つライブラリ。* [トップに戻る](#readme) 

* [CodableCSV](https://github.com/dehesa/CodableCSV) :penguin: - CSVファイルを行単位、またはSwiftのCodableインターフェース経由で読み書き。
* [CSVParser](https://github.com/Nero5023/CSVParser) :penguin: - 高速なCSVパーサー。

#### Firebase
[トップに戻る](#readme) 

* [Ballcap](https://github.com/1amageek/Ballcap-iOS) - Cloud Firestore向けデータベーススキーマ設計フレームワーク。

#### GraphQL
[トップに戻る](#readme) 

* [SociableWeaver](https://github.com/NicholasBellucci/SociableWeaver) - 宣言的なGraphQLクエリとミューテーションを構築。

#### JSON
*JSONデータの扱いに困っていますか？ここで興味深い方法を紹介します。* [トップに戻る](#readme) 

* [AlamofireObjectMapper](https://github.com/tristanhimmelman/AlamofireObjectMapper) - ObjectMapperを使ってJSONレスポンスデータをオブジェクトに変換するAlamofire拡張。
* [Alembic](https://github.com/ra1028/Alembic) - 関数型JSON解析、オブジェクトへのマッピング、JSONへのシリアライズ。
* [Argo](https://github.com/thoughtbot/Argo) - JSON解析ライブラリ。
* [Arrow](https://github.com/freshOS/Arrow) - 洗練されたJSON解析。
* [Decodable](https://github.com/Anviking/Decodable) :penguin: - JSON解析。
* [Elevate](https://github.com/Nike-Inc/Elevate) - 解析をシンプルで信頼性が高く、合成可能にするJSON解析フレームワーク。
* [EVReflection](https://github.com/evermeer/EVReflection) - リフレクションベースのJSONエンコード・デコード。NSDictionary、NSCoding、Printable、Hashable、Equatableにも対応。
* [HandyJSON](https://github.com/alibaba/handyjson) - JSONオブジェクトの便利なシリアライズ・デシリアライズライブラリ。
* [Himotoki](https://github.com/ikesyo/Himotoki) - 型安全なJSONデコードライブラリ。
* [JASON](https://github.com/delba/JASON) - 優れたパフォーマンスと便利な演算子を備えたJSON解析。
* [JSONHelper](https://github.com/isair/JSONHelper) - iOSおよびOS X向けの非常に高速なJSONデシリアライズ・値変換ライブラリ。
* [JSONNeverDie](https://github.com/johnlui/JSONNeverDie) - JSONからModelへの自動リフレクションツール。使いやすいJSONエンコーダー／デコーダーで、長く使えることを目指します。
* [ObjectMapper](https://github.com/tristanhimmelman/ObjectMapper) - JSONオブジェクトマッパー。
* [PMJSON](https://github.com/postmates/PMJSON) - JSONエンコード・デコードライブラリ。
* [ReerCodable](https://github.com/reers/ReerCodable) - Swiftマクロを使ったCodable拡張。
* [Sextant](https://github.com/KittyMac/Sextant) :penguin: - 高性能なJSONPathクエリ。
* [SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON) - エラー処理機能を備えたJSONライブラリ。
* [SwiftyJSONAccelerator](https://github.com/insanoid/SwiftyJSONAccelerator) - JSONからSwift 5モデル（Codable対応）を生成するmacOSアプリ。

#### キー・バリューストア
[トップに戻る](#readme) 

* [Default](https://github.com/Nirma/Default) - Codable対応の最新UserDefaultsインターフェース。
* [Defaults](https://github.com/sindresorhus/Defaults) - Codableとキー監視に対応した型安全なUserDefaults。
* [DefaultsKit](https://github.com/nmdias/DefaultsKit) - iOS、macOS、tvOS向けのシンプルで型安全なUserDefaults。
* [Prephirences](https://github.com/phimage/Prephirences) - アプリの設定、NSUserDefaults、iCloud、Keychainなどを管理。
* [SecureDefaults](https://github.com/vpeschenkov/SecureDefaults) - AES-256暗号化レイヤーを追加した、UserDefaultsおよびNSUserDefaults向け軽量ラッパー。
* [Storez](https://github.com/SwiftKitz/Storez) - 安全で静的型付けされ、ストアに依存しないキー・バリューストレージ。
* [SwiftStore](https://github.com/hemantasapkota/SwiftStore) - LevelDBをバックエンドとするキー・バリューストア。
* [SwiftyUserDefaults](https://github.com/sunshinejr/SwiftyUserDefaults) - NSUserDefaultsをより簡潔で使いやすい構文で扱うライブラリ。
* [Zephyr](https://github.com/ArtSabintsev/Zephyr) - NSUserDefaultsをiCloud経由で簡単に同期。

#### MongoDB
[トップに戻る](#readme) 

* [MongoKitten](https://github.com/orlandos-nl/MongoKitten) :penguin: - MongoDBコネクター。
* [Perfect-MongoDB](https://github.com/PerfectlySoft/Perfect-MongoDB) :penguin: - mongo-cクライアントライブラリのスタンドアロンラッパー。MongoDBサーバーへのアクセスを可能にします。

#### 複数データベース
*複数のデータソースを扱うデータ管理レイヤー。* [トップに戻る](#readme) 

* [ModelAssistant](https://github.com/ssamadgh/ModelAssistant) - ViewとModel間のやり取りを管理する洗練されたライブラリ。
* [PersistenceKit](https://github.com/Teknasyon-Teknoloji/PersistenceKit) - 数行のコードでCodableオブジェクトをさまざまな永続化レイヤーに保存・取得。
* [Shallows](https://github.com/dreymonde/Shallows) - 軽量な永続化ツールボックス。

#### ORM
[トップに戻る](#readme) 

* [fluent](https://github.com/vapor/fluent) :penguin: - シンプルなActiveRecord実装。
* [Perfect-CRUD](https://github.com/PerfectlySoft/Perfect-CRUD) :penguin: - Codableプロトコルを使ったオブジェクト関係マッピング（ORM）システム。

#### その他のデータ
*データを永続化するその他の方法。* [トップに戻る](#readme) 

* [CacheAdvance](https://github.com/dfed/CacheAdvance) - ロギングシステム向けの高性能キャッシュ。CacheAdvanceはSQLiteより30倍高速にログイベントを永続化します。
* [CoreXLSX](https://github.com/CoreOffice/CoreXLSX) - Excelスプレッドシート（XLSX）形式のサポート。
* [Disk](https://github.com/saoudrizwan/Disk) - 構造体、画像、データを簡単に永続化できるiOS向けの優れたフレームワーク。
* [EVCloudKitDao](https://github.com/evermeer/EVCloudKitDao) - サブスクリプションとローカルキャッシュに対応した、CloudKitへの簡素化されたアクセス。
* [KeyPathKit](https://github.com/vincent-pradeilles/KeyPathKit) - 型付きキーパスを使ったデータ操作をシームレスな構文で実現。
* [LeetCode-Swift](https://github.com/soapyigu/LeetCode-Swift) - LeetCodeの面接問題の解答集。
* [Pencil](https://github.com/naru-jpn/pencil) - 任意の値をファイルに書き込み。
* [StorageManager](https://github.com/iAmrSalman/StorageManager) - FileManagerをデータベースとして安全かつ簡単に使う方法。

#### Realm
[トップに戻る](#readme) 

* [Realm](https://github.com/realm/realm-swift) - RealmはCore DataとSQLiteに代わるモバイルデータベースです。
* [RealmWrapper](https://github.com/k-lpmg/RealmWrapper) - RealmSwift向けの安全で使いやすいラッパー。
* [Unrealm](https://github.com/matghazaryan/Unrealm) - Swiftネイティブのクラス、構造体、列挙型をRealmに簡単に保存できます。

#### SQLドライバー
[トップに戻る](#readme) 

* [MySQL Swift](https://github.com/novi/mysql-swift) :penguin: - MySQLクライアントライブラリ。
* [Perfect-MySQL](https://github.com/PerfectlySoft/Perfect-MySQL) :penguin: - MySQLクライアントライブラリのスタンドアロンラッパー。MySQLサーバーへのアクセスを可能にします。
* [Perfect-PostgreSQL](https://github.com/PerfectlySoft/Perfect-PostgreSQL) :penguin: - libpqクライアントライブラリのスタンドアロンラッパー。PostgreSQLサーバーへのアクセスを可能にします。

#### SQLite
*SQLiteを使ったアプリデータの保存に興味がありますか？役立つリソースを紹介します。* [トップに戻る](#readme) 

* [GRDB.swift](https://github.com/groue/GRDB.swift) - 多機能なSQLiteツールキット。
* [SQLite.swift](https://github.com/stephencelis/SQLite.swift) - SQLite3ラッパーフレームワーク。小さく、シンプルで、安全。
* [SQLiteDB](https://github.com/FahimF/SQLiteDB) - SQLiteラッパー。

#### TOML
*Tom's Obvious, Minimal Language（Tomの明白で最小限の言語）。* [トップに戻る](#readme) 

* [TOMLDecoder](https://github.com/dduan/TOMLDecoder) - 最新のTOML標準をデコード。

#### XML
*XML形式のデータを管理したい場合に役立つライブラリ。* [トップに戻る](#readme) 

* [AEXML](https://github.com/tadija/AEXML) - XMLラッパー。
* [CheatyXML](https://github.com/lobodart/CheatyXML) - XMLを簡単に管理するために設計された強力なフレームワーク。
* [SwiftyXML](https://github.com/chenyunguiMilook/SwiftyXML) - XMLを扱う最もSwiftらしい方法。
* [SWXMLHash](https://github.com/drmohundro/SWXMLHash) - シンプルなXML解析。
* [XMLCoder](https://github.com/CoreOffice/XMLCoder) - 標準ライブラリのCodableプロトコルに基づくXMLEncoderとXMLDecoder。
* [XMLMapper](https://github.com/gcharita/XMLMapper) - XMLをオブジェクトにマッピングするシンプルな方法。

#### YAML
[トップに戻る](#readme) 

* [YamlSwift](https://github.com/behrang/YamlSwift) - YAMLおよびJSONドキュメントを読み込み。
* [Yams](https://github.com/jpsim/Yams) :penguin: - 使いやすいYAMLパーサー。

#### ZIP
[トップに戻る](#readme) 

* [Zip](https://github.com/marmelroy/Zip) - ファイルをZIP圧縮・展開するフレームワーク。
* [Zip Foundation](https://github.com/weichsel/ZIPFoundation) - ZIPアーカイブファイルを作成、読み込み、変更するライブラリ。

### 日付
*日付の書式設定を簡単に扱えます。* [トップに戻る](#readme) 

* [AnyDate](https://github.com/Kawoou/AnyDate) - Java 8 DateTime APIに着想を得た日付・時刻API。
* [Chronology](https://github.com/davedelong/time) - より優れた日付・時刻ライブラリの構築。
* [DateHelper](https://github.com/melvitax/DateHelper) - シンプルな日付ヘルパー。
* [Datez](https://github.com/SwiftKitz/Datez) - `NSDate`、`NSCalendar`、`NSDateComponents`、`NSTimeInterval`を扱うライブラリ。
* [Datify](https://github.com/hemangshah/Datify) - 簡単に使える日付関数。
* [NVDate](https://github.com/novalagung/nvdate) - 日付拡張ライブラリ。
* [SwiftDate](https://github.com/malcommac/SwiftDate) - NSDateを簡単に管理。
* [Time](https://github.com/dreymonde/Time) - ジェネリクスを活用した型安全な時間計算。
* [Timepiece](https://github.com/naoty/Timepiece) - 直感的なNSDate拡張。
* [TrueTime.swift](https://github.com/instacart/TrueTime.swift) - デバイスの時計変更の影響を受けない正確な現在時刻を取得（NTPライブラリ）。
* [TypedDate](https://github.com/Ryu0118/swift-typed-date) - 日付コンポーネントを型レベルでカスタマイズし、日付の扱いを強化。

### 依存性注入
*依存性注入ライブラリ。* [トップに戻る](#readme) 

* [Cleanse](https://github.com/square/Cleanse) - Squareによる軽量な依存性注入フレームワーク。
* [Corridor](https://github.com/symentis/Corridor) - Coreader風の依存性注入マイクロフレームワーク。
* [Deli](https://github.com/kawoou/Deli) - 使いやすい依存性注入（DI）。
* [DIKit](https://github.com/Liftric/DIKit) - KOINに着想を得たSwift向け依存性注入フレームワーク。
* [Dip](https://github.com/AliSoftware/Dip) - シンプルな依存性注入コンテナー。
* [DITranquillity](https://github.com/ivlevAstef/DITranquillity/) - 気軽に利用できる依存性注入フレームワーク。
* [Locatable](https://github.com/vincent-pradeilles/locatable) - Property Wrapperを活用してService Locatorパターンを実装するマイクロフレームワーク。
* [Pure](https://github.com/devxoul/Pure) - DIコンテナーを使わずに依存性注入を行う方法。
* [SafeDI](https://github.com/dfed/safedi) - コンパイル時に安全な依存性注入。
* [Swinject](https://github.com/Swinject/Swinject) - 依存性注入フレームワーク。
* [Typhoon](https://github.com/appsquickly/Typhoon) - 依存性注入ツールキット。
* [Weaver](https://github.com/scribd/Weaver) - 宣言的で使いやすく、安全な依存性注入フレームワーク。

### デバイス
*デバイスを識別するライブラリ集。* [トップに戻る](#readme) 

* [Device](https://github.com/Ekhoo/Device) - 現在のデバイスと画面サイズを検出する軽量ツール。
* [Device.swift](https://github.com/schickling/Device.swift) - 使用中のデバイスを検出する超軽量ライブラリ。
* [DeviceKit](https://github.com/devicekit/DeviceKit) - UIDeviceに代わる値型のDeviceKit。
* [Deviice](https://github.com/andrealufino/Deviice) - 現在のデバイスやその追加情報を簡単に確認できるSwiftライブラリ。
* [Luminous](https://github.com/andrealufino/Luminous) - デバイスに関する必要な情報をすべて取得。
* [Thingy](https://github.com/bojan/Thingy) - 最新のデバイス検出・照会ライブラリ。
* [UIDeviceComplete](https://github.com/Nirma/UIDeviceComplete) - UIDeviceに不足している機能を補う拡張。

### ドキュメント
*Swiftコードのドキュメントを生成。* [トップに戻る](#readme) 

* [jazzy](https://github.com/realm/jazzy/) - 心のこもったドキュメント。
* [SourceDocs](https://github.com/SourceDocs/SourceDocs) - コードと一緒に管理できるMarkdownリファレンスドキュメントを生成。

### メール
[トップに戻る](#readme) 


### 組み込みシステム
*Raspberry Pi、BeagleBone、C.H.I.P.などのボード上で組み込みLinuxプロジェクトを構築。* [トップに戻る](#readme) 

* [SwiftyGPIO](https://github.com/uraimo/SwiftyGPIO) :penguin: - ARM上でLinux GPIO/SPI/PWMを操作。

#### 周辺機器
*特定の外部周辺機器を操作。* [トップに戻る](#readme) 


### イベント
*NSNotificationCenter、Key-Value-Observation、デリゲーションに代わる選択肢。* [トップに戻る](#readme) 

* [Bond](https://github.com/DeclarativeHub/Bond) - バインディングフレームワーク。
* [Combinative](https://github.com/noppefoxwolf/Combinative) - AppleのCombineフレームワークを使ったUIイベント処理。
* [EmitterKit](https://github.com/aleclarson/emitter-kit) - イベントエミッターとリスナーの実装。
* [FutureKit](https://github.com/FutureKit/FutureKit) - Future／Promiseライブラリ。
* [Katana](https://github.com/BendingSpoons/katana-swift) - ReactやReduxのようなアプリを作成。
* [LightweightObservable](https://github.com/fxm90/LightweightObservable) - 購読できるObservableシーケンスの軽量な実装。
* [NoticeObserveKit](https://github.com/marty-suzuki/NoticeObserveKit) - 通知型と情報型を関連付ける型安全なNotificationCenterラッパー。
* [Notificationz](https://github.com/SwiftKitz/Notificationz) - シンプルでカスタマイズ可能なアダプターにより、`NSNotificationCenter`を使いやすくします。
* [Observable](https://github.com/roberthein/Observable) - 値を監視する最も簡単な方法。
* [OneWay](https://github.com/DevYeom/OneWay) - 単方向データフローによる状態管理。
* [OpenCombine](https://github.com/OpenCombine/OpenCombine) - 値を時間経過とともに処理するApple Combineフレームワークのオープンソース実装。
* [PMKVObserver](https://github.com/postmates/PMKVObserver/) - 最新のスレッドセーフかつ型安全なキー・バリュー監視。
* [PromiseKit](https://github.com/mxcl/PromiseKit) - 非同期Promiseプログラミングライブラリ。
* [ReactiveCocoa](https://github.com/ReactiveCocoa/ReactiveCocoa) - 関数型リアクティブプログラミングに着想を得たCocoaフレームワーク（RAC）。値のストリームを合成・変換するAPIを提供します。
* [ReactorKit](https://github.com/ReactorKit/ReactorKit) - リアクティブで単方向なアプリケーションアーキテクチャ向けフレームワーク。
* [ReSwift](https://github.com/ReSwift/ReSwift) - 単方向データフロー。
* [RxSwift](https://github.com/ReactiveX/RxSwift) - Microsoft Reactive Extensions（Rx）。
* [Signals](https://github.com/artman/Signals) - デリゲートと通知を置き換えます。
* [SwiftEventBus](https://github.com/cesarferreira/SwiftEventBus) - iOS向けに最適化されたパブリッシュ／サブスクライブ型イベントバス。
* [Tempura](https://github.com/BendingSpoons/tempura-swift) - ReduxとMVVMに着想を得た、iOS開発への包括的なアプローチ。
* [Tokamak](https://github.com/TokamakUI/Tokamak) - 使いやすい単方向データバインディングを備えた、ネイティブUIコンポーネント構築用のReact風宣言的API。
* [Tomorrowland](https://github.com/lilyball/Tomorrowland) - 軽量なPromise。
* [TopicEventBus](https://github.com/mcmatan/topicEventBus) - トピックごとにイベントを発行できる、パブリッシュ／サブスクライブ型デザインパターンの実装フレームワーク。
* [VueFlux](https://github.com/ra1028/VueFlux) - VuexとFluxに着想を得た単方向データフローの状態管理アーキテクチャ。
* [When](https://github.com/vadymmarkov/When) - Promiseの軽量な実装。

### ファイル
[トップに戻る](#readme) 

* [ExtendedAttributes](https://github.com/sindresorhus/ExtendedAttributes) - ファイルやフォルダーの拡張属性を管理。
* [FileKit](https://github.com/nvzqz/FileKit) - シンプルで表現力豊かなファイル管理。
* [FileProvider](https://github.com/amosavian/FileProvider) - iOS/tvOSとmacOS向けに、ローカル、iCloud、リモート（WebDAV/FTP/Dropbox/OneDrive/SMB2）ファイルを扱うFileManager代替。
* [KZFileWatchers](https://github.com/krzysztofzablocki/KZFileWatchers) - ローカルおよびリモートのファイル変更を監視するマイクロフレームワーク。
* [PathKit](https://github.com/kylef/PathKit) :penguin: - パスを簡単に操作。
* [Pathos](https://github.com/dduan/Pathos) :penguin: - 効率的なUnixファイル管理。

### フォント
*フォント関連のスニペット集。* [トップに戻る](#readme) 

* [FontAwesome.swift](https://github.com/thii/FontAwesome.swift) - プロジェクトでFontAwesomeを利用。
* [FontBlaster](https://github.com/ArtSabintsev/FontBlaster) - iOSアプリにカスタムフォントをプログラムから読み込み。
* [Inkwell](https://github.com/ninjaprox/Inkwell) - カスタムフォントをその場で利用するためのツール。
* [IoniconsKit](https://github.com/keitaoouchi/IoniconsKit) - プロジェクトでioniconsをUIImage／UIFontとして利用。
* [OcticonsKit](https://github.com/keitaoouchi/OcticonsKit) - プロジェクトでOcticonsをUIImage／UIFontとして利用。
* [SwiftIconFont](https://github.com/segecey/SwiftIconFont) - Font Awesome、Iconic、Ionicons、Octiconの移植。
* [SwiftIcons](https://github.com/ranesr/SwiftIcons) - dripicons、絵文字、Font Awesome、icofont、ionicons、linear icons、map icons、material icons、open iconic、state、weatherなどのアイコンフォントライブラリ。
* [SwiftUI-FontIcon](https://github.com/huybuidac/SwiftUIFontIcon) - SwiftUI向けアイコンフォント：Font Awesome、ionicons、Material Icons。
* [SYSymbol](https://github.com/Nirma/SFSymbol) - すべてのSFSymbolをすぐに利用。
* [UIFontComplete](https://github.com/Nirma/UIFontComplete) - iOSおよびtvOS向けフォント（システム・カスタム）管理。

### ゲームエンジン
[トップに戻る](#readme) 

* [glide engine](https://github.com/cocoatoucher/Glide) - 実用例とチュートリアルを備えた、SpriteKitとGameplayKitベースの2Dゲームエンジン。
* [Raylib for Swift](https://github.com/STREGAsGate/Raylib) :penguin: - Raylib向けのクロスプラットフォームSwiftパッケージ。Raylibをソースからビルドするため、ライブラリを手動で扱う必要はありません。ゲームパッケージに依存関係として追加するだけです。
* [SwiftGodot](https://migueldeicaza.github.io/SwiftGodotDocs/tutorials/swiftgodot-tutorials/) - GodotゲームエンジンのSwiftバインディング。拡張機能の構築やSwiftGodotKitを使ったAPIとしての利用が可能。

#### 2D
[トップに戻る](#readme) 

* [ImagineEngine](https://github.com/JohnSundell/ImagineEngine) - 非常に高速な2Dゲームエンジン。

### ゲーム
[トップに戻る](#readme) 

* [FDChessboardView](https://github.com/fulldecent/FDChessboardView) - チェス盤用ビューコントローラー。
* [Sage](https://github.com/nvzqz/Sage) :penguin: - クロスプラットフォーム対応のチェスライブラリ。

### ジェスチャー
[トップに戻る](#readme) 

* [ShowTime](https://github.com/KaneCheshire/ShowTime) - 1行のコードで、デモや動画にiOSのタップやジェスチャーを表示。
* [SwiftyGestureRecognition](https://github.com/b3ll/SwiftyGestureRecognition) - Xcode PlaygroundsでUIGestureRecognizerを利用。
* [SwipyCell](https://github.com/moritzsternemann/SwipyCell) - スワイプ操作でアクションを実行するUITableViewCell（Mailboxアプリでおなじみ）。
* [Tactile](https://github.com/delba/Tactile) - ジェスチャーやコントロールイベントに、より安全でSwiftらしい方法で応答。

### ハードウェア
*ハードウェア関連ライブラリのカテゴリ。* [トップに戻る](#readme) 


#### 3D Touch
*これらのライブラリを使って、新しい3D Touch／Force Touch機能を簡単に扱えます。* [トップに戻る](#readme) 


#### Bluetooth
*CoreBluetoothのラッパー。* [トップに戻る](#readme) 

* [BlueCap](https://github.com/troystribling/BlueCap) - CoreBluetoothなどのラッパー。
* [Bluejay](https://github.com/steamclock/bluejay) - 信頼性の高いBluetooth LEアプリを構築するシンプルなフレームワーク。
* [BluetoothKit](https://github.com/rhummelmose/BluetoothKit) - BLEを使ってiOS/OSXデバイス間で簡単に通信。
* [RxBluetoothKit](https://github.com/polidea/RxBluetoothKit) - RxSwift向けiOS・OSX Bluetoothライブラリ。
* [SwiftyBluetooth](https://github.com/jordanebelanger/SwiftyBluetooth) - シンプルで信頼性の高いクロージャーベースのCoreBluetoothラッパー。

#### カメラ
*優れたカメラライブラリ。* [トップに戻る](#readme) 

* [CameraBackground](https://github.com/yonat/CameraBackground) - 任意のUIViewの背景としてカメラレイヤーを表示。
* [CameraKit-iOS](https://github.com/CameraKit/camerakit-ios) - 次のプロジェクトでカメラの性能と使いやすさを大幅に向上。
* [FDTake](https://github.com/fulldecent/FDTake) - 写真・動画の撮影やライブラリからの選択を簡単に実現。
* [Fusuma](https://github.com/ytakzk/Fusuma) - Instagram風のフォトブラウザーとカメラ機能。
* [MediaPicker](https://github.com/exyte/mediapicker) - カメラやアルバム付きギャラリーに対応する、カスタマイズ可能なSwiftUIメディアピッカー。
* [MijickCamera](https://github.com/Mijick/Camera) - カメラ機能をシンプルに。実装時間と労力を大幅に削減する、完全カスタマイズ可能なライブラリ。
* [NextLevel](https://github.com/NextLevel/NextLevel) - 高度なメディア撮影。

##### バーコード
*バーコード、QRコードなどのコードリーダー。* [トップに戻る](#readme) 

* [BarcodeScanner](https://github.com/hyperoslo/BarcodeScanner) - シンプルで美しいバーコードスキャナー用ビューコントローラー。
* [EFQRCode](https://github.com/EFPrefix/EFQRCode) - QRコードを扱う、より優れた方法。
* [QRCodeReader.swift](https://github.com/yannickl/QRCodeReader.swift) - シンプルなQRコードリーダー。

#### 触覚フィードバック
*触覚フィードバックを利用するライブラリ。* [トップに戻る](#readme) 

* [Haptica](https://github.com/efremidze/Haptica) - 触覚フィードバックを簡単に生成。

#### iBeacon
*SwiftプロジェクトでiBeaconを使いたい方に役立つリソース。* [トップに戻る](#readme) 

* [SwiftLocation](https://github.com/malcommac/SwiftLocation) - 位置情報とBeaconの監視。

#### センサー
*デバイスのセンサーをより速く簡単に管理。* [トップに戻る](#readme) 


### 画像
*画像関連ライブラリの興味深い一覧。* [トップに戻る](#readme) 

* [Agrume](https://github.com/JanGorman/Agrume) - レモンのように爽やかなiOS画像ビューアー。
* [AlamofireImage](https://github.com/Alamofire/AlamofireImage) - Alamofire向け画像コンポーネントライブラリ。
* [APNGKit](https://github.com/onevcat/APNGKit) - iOSでAPNG形式を高性能かつ快適に再生。
* [ATGMediaBrowser](https://github.com/altayer-digital/ATGMediaBrowser) - 複数の既定トランジションを備え、新しいトランジションも簡単に作成できる画像スライドショービューアー。
* [AXPhotoViewer](https://github.com/alexhillc/AXPhotoViewer) - 大量または少数の写真を見るのに便利なiPhone/iPad向けフォトギャラリービューアー。
* [BlockiesSwift](https://github.com/Boilertalk/BlockiesSwift) - 独自のブロック状アイコン／プロフィール画像ジェネレーター。
* [Brightroom](https://github.com/FluidGroup/Brightroom) - CoreImageを利用した画像編集ツールおよびエンジン。
* [CTPanoramaView](https://github.com/scihant/CTPanoramaView) - タッチまたはモーション操作で球面・円筒パノラマを表示するライブラリ。
* [DTPhotoViewerController](https://github.com/tungvoduc/DTPhotoViewerController) - Facebookの写真ビューアーに着想を得た、単一または複数の写真を表示する完全カスタマイズ可能なビューコントローラー。
* [FacebookImagePicker](https://github.com/floriangbh/FacebookImagePicker) - Facebookアルバム用写真ピッカー。
* [FaceCrop](https://github.com/Ancestry/FaceCrop) - Apple Vision Frameworkで画像内の顔を検出して中央に配置。
* [FlexibleImage](https://github.com/kawoou/FlexibleImage) - 画像を簡単に扱う方法。
* [FMPhotoPicker](https://github.com/congnd/FMPhotoPicker) - 洗練されたカスタマイズ可能な画像エディターを備えた、最新のシンプルな依存関係ゼロの写真ピッカー。
* [gifu](https://github.com/kaishin/gifu) - iOS向け高性能アニメーションGIFサポート。
* [GPUImage 2](https://github.com/BradLarson/GPUImage2) - GPUアクセラレーションによる動画・画像処理用のBSDライセンスフレームワーク。
* [GPUImage 3](https://github.com/BradLarson/GPUImage3) - Metalを使ったGPUアクセラレーション動画・画像処理用のBSDライセンスフレームワーク。
* [HanekeSwift](https://github.com/Haneke/HanekeSwift) - 画像を重視した、iOS向け軽量汎用キャッシュ。
* [Harbeth](https://github.com/yangKJ/Harbeth) - GPUアクセラレーションによるグラフィックス・動画・カメラフィルター用Metal APIフレームワーク。
* [ImageDetect](https://github.com/Feghal/ImageDetect) - iOS 11 Vision APIで画像内の顔、バーコード、テキストを検出・切り抜き。
* [ImageLoader](https://github.com/hirohisa/ImageLoaderSwift) - iOS向けの軽量で高速な画像ローダー。
* [ImageScout](https://github.com/kaishin/ImageScout) - [fastimage](https://pypi.org/project/fastimage/0.2.1/)の実装。PNG、GIF、JPEGに対応。
* [ImageViewer](https://github.com/Krisiacik/ImageViewer) - Twitter風の画像ビューアー。
* [ImgixSwift](https://github.com/imgix/imgix-swift) - 画像URLを簡単に更新し、高速かつ応答性の高い画像を提供。
* [JLStickerTextView](https://github.com/Textcat/JLStickerTextView) - UIImageViewに複数のラベル（複数行対応）を追加し、指1本で編集・回転・サイズ変更して画像上に描画できるコンポーネント。
* [Kanvas](https://github.com/tumblr/kanvas-ios) - 既存メディアやカメラから、エフェクト、描画、テキスト、ステッカーの追加やGIF作成を行うiOSライブラリ。
* [Kingfisher](https://github.com/onevcat/Kingfisher) - 画像のダウンロードとキャッシュ。
* [LetterAvatarKit](https://github.com/vpeschenkov/LetterAvatarKit) - 文字ベースのアバターを生成するUIImage拡張。
* [Lightbox](https://github.com/hyperoslo/Lightbox) - iOSアプリ向けの便利で使いやすい画像ビューアー。
* [MapleBacon](https://github.com/JanGorman/MapleBacon) - 画像ダウンロード・キャッシュライブラリ。
* [MCScratchImageView](https://github.com/JaylenCoding/MCScratchImageView) - 他のビューを覆うスクラッチカード風のImageView。表面をスワイプして下のビューを表示できます。
* [Moa](https://github.com/evgenyneu/moa) - iOS、tvOS、macOS向け画像ビューの画像ダウンロード拡張。
* [Nuke](https://github.com/kean/Nuke) - 画像の読み込み、キャッシュ、処理、表示、事前読み込みを行う高度なフレームワーク。
* [PassportScanner](https://github.com/evermeer/PassportScanner) - パスポートのMRZコードをスキャンし、氏名、旅券番号、国籍、生年月日、有効期限、個人番号を抽出。
* [Rough](https://github.com/bakhtiyork/Rough) - 手描き風のラフなスタイルで描画。
* [Sharaku](https://github.com/makomori/Sharaku) - Instagram風の画像フィルターUIライブラリ。
* [Snowflake](https://github.com/onmyway133/Snowflake) - SVGを扱うツール。
* [SwiftDraw](https://github.com/swhitty/SwiftDraw) - SVG画像をUIImageやNSImageに変換し、CoreGraphicsソースコードを生成するライブラリ。
* [SwiftGen-Assets](https://github.com/SwiftGen/SwiftGen#assets-catalogs) - アセットカタログ内のすべてのUIImages向け`enum`を自動生成。
* [SwiftSVG](https://github.com/mchoe/SwiftSVG) - String、NS/UIBezierPath、CAShapeLayer、NS/UIViewなど複数のインターフェースを備えたシングルパスSVGパーサー。
* [SwiftWebImage](https://github.com/HotWordland/SwiftWebImage) - 🚀高性能なLRUメモリー／ディスクキャッシュを備えたSwiftUI画像ダウンローダー。
* [SwiftyGif](https://github.com/alexiscreuzot/SwiftyGif) - 高性能GIFエンジン。
* [TinyCrayon](https://github.com/TinyCrayon/TinyCrayon-iOS-SDK) - モバイルアプリ向けのスマートで使いやすい画像マスキング・切り抜きSDK。
* [Toucan](https://github.com/gavinbunney/Toucan) - 画像処理API。
* [UIImageColors](https://github.com/jathu/UIImageColors) - iTunes風のUIImageカラー抽出。
* [YPImagePicker](https://github.com/Yummypets/YPImagePicker) - iOS向けInstagram風画像ピッカーとフィルター。
* [ZImageCropper](https://github.com/ZaidPathan/ZImageCropper) - 任意の形状で画像を切り抜き。

### キー・バリューコーディング
*キー・バリューコーディング用ライブラリ。* [トップに戻る](#readme) 


### キーボード
*独自のカスタムキーボードを作成したい方に役立つリソース。* [トップに戻る](#readme) 

* [IHKeyboardAvoiding](https://github.com/IdleHandsApps/IHKeyboardAvoiding) - キーボード表示中に任意のUIViewを見える状態に保つ洗練された方法。UIScrollViewは不要。
* [IQKeyboardManager](https://github.com/hackiftekhar/IQKeyboardManager) - コード不要で導入できる汎用ライブラリ。キーボードがせり上がってUITextField/UITextViewを覆う問題を防ぎます。
* [ISEmojiView](https://github.com/isaced/ISEmojiView) - iOS向け絵文字キーボード。
* [KeyboardHideManager](https://github.com/bonyadmitr/KeyboardHideManager) - ビューをタップしてキーボードを閉じる、iOS向けコード不要のマネージャー。
* [KeyboardShortcuts](https://github.com/sindresorhus/KeyboardShortcuts) - macOSアプリにユーザーがカスタマイズ可能なグローバルキーボードショートカットを追加。CocoaとSwiftUIコンポーネントを含みます。
* [Ribbon](https://github.com/chriszielinski/Ribbon) - 🎀 iOSとmacOS向けのシンプルなクロスプラットフォーム・ツールバー／カスタム入力アクセサリービューライブラリ。
* [Typist](https://github.com/totocaster/Typist) - 通知センターを使わずにキーボードの表示や挙動を管理する、iOSアプリ向けの小さなUIKitキーボードマネージャー。

### キット
*簡素化されたAPIでコーディングするためのライブラリ。* [トップに戻る](#readme) 

* [BFKit-Swift](https://github.com/FabrizioBrancati/BFKit-Swift) :penguin: - アプリをより速く開発するための便利なクラス、構造体、拡張機能集。
* [C4iOS](https://github.com/C4Labs/C4iOS) - 簡素化されたAPIでネイティブiOS開発の力を活用。
* [ContactsChangeNotifier](https://github.com/yonat/ContactsChangeNotifier) - アプリ外で変更された連絡先を検出。余計な通知を避け、実際の変更を通知するCNContactStoreDidChangeの改良版。

### レイアウト
*レイアウトを支援するライブラリ。* [トップに戻る](#readme) 

* [AnimatedTabBar](https://github.com/exyte/AnimatedTabBar) - 複数の既定アニメーションを備えたタブバー。
* [BrickKit](https://github.com/wayfair-archive/brickkit-ios) - 複雑でレスポンシブなレイアウトを簡単に作成。
* [CGLayout](https://github.com/k-o-d-e-n/CGLayout) :penguin: - UIView（NSView）、CALayer、未描画ビューなどを扱える強力なAuto Layoutフレームワーク。プレースホルダーを提供します。
* [FlexLayout](https://github.com/layoutBox/FlexLayout) - Facebook Yogaの高度に最適化されたFlexbox実装を扱う、すっきりとしたインターフェース。
* [FrameLayoutKit](https://github.com/kennic/FrameLayoutKit) - シンプルで直感的な演算子とDSL構文により、連結やネストを含む複雑なレイアウトに対応。
* [Grid](https://github.com/exyte/Grid) - SwiftUIに不足している、強力なGridコンテナー。
* [LayoutLess](https://github.com/DeclarativeHub/Layoutless) - UIコードを減らして記述。
* [Neon](https://github.com/mamaral/Neon) - 強力なプログラム式UIレイアウトフレームワーク。
* [PinLayout](https://github.com/layoutBox/PinLayout) - Auto Layout不要の高速ビュー配置。魔法なしの純粋なコードで、完全な制御と圧倒的な速度を実現。簡潔で直感的、読みやすく連結可能な構文。[iOS/macOS/tvOS]
* [Scaling Header Scroll View](https://github.com/exyte/ScalingHeaderScrollView) - スクロールに合わせて縮小する固定ヘッダー付きスクロールビュー。SwiftUI製。
* [Static](https://github.com/venmo/Static) - iOS向けのシンプルな静的テーブルビュー。
* [Stevia](https://github.com/freshOS/Stevia) - iOS向けの洗練されたビュー配置。

#### Auto Layout
*Storyboardに飽きたら、宣言的Auto Layoutライブラリを試してみましょう。* [トップに戻る](#readme) 

* [Bamboo](https://github.com/wordlessj/Bamboo) - 1行でAuto Layout（および手動レイアウト）を指定。
* [Cartography](https://github.com/robb/Cartography) - プロジェクト向け宣言的Auto Layoutライブラリ。
* [Cassowary](https://github.com/tribalworldwidelondon/CassowarySwift) - AutoLayoutと同じアルゴリズムを使った線形制約ソルバーライブラリ。
* [Cupcake](https://github.com/nerdycat/Cupcake) - iOS向けUIコンポーネントの作成と配置を簡単にする方法。
* [DeviceLayout](https://github.com/cruisediary/DeviceLayout) - デバイスごとに異なるAutoLayoutを設定。
* [EasyPeasy](https://github.com/nakiostudio/EasyPeasy) - Auto Layoutを簡単に。
* [EasySwiftLayout](https://github.com/Pimine/EasySwiftLayout) - Apple Auto Layout向け軽量Swiftフレームワーク。
* [EZLayout](https://github.com/alexliubj/EZAnchor) - Auto Layoutをより簡単かつ高速に記述。
* [FixFlex](https://github.com/psharanda/FixFlex) - NSLayoutAnchorベースの宣言的Auto Layout。VFLをSwiftらしく再構成し、UIStackViewの代替を提供。
* [HypeUI](https://github.com/hyperconnect/HypeUI) - 🌺 UIKitを基盤にApple SwiftUIのDSLスタイルを実装。
* [KVConstraintKit](https://github.com/keshavvishwkarma/KVConstraintKit) - iOS、tvOS、OSX向けの優れたAuto Layout DSL。
* [MisterFusion](https://github.com/marty-suzuki/MisterFusion) - Size Class対応のAutoLayout DSL。
* [Mortar](https://github.com/jmfieldman/Mortar) - Auto Layout制約の作成やサブビュー追加のための、簡潔で柔軟なDSL。
* [NorthLayout](https://github.com/banjun/NorthLayout) - 拡張構文のVisual Format Language（VFL）を使った高速なレイアウト手法。
* [PureLayout](https://github.com/PureLayout/PureLayout) - iOSおよびOS X向けの究極のAuto Layout API。
* [SnapKit](https://github.com/SnapKit/SnapKit) - iOSおよびOS X向けAutolayout DSL。
* [Swiftstraints](https://github.com/Skyvive/Swiftstraints) - 1行のコードで制約を記述できる強力なAuto Layoutフレームワーク。
* [TinyConstraints](https://github.com/roberthein/TinyConstraints) - Auto Layoutを人にとって扱いやすくする構文糖衣。

### ローカライズ
*アプリのローカライズを支援するフレームワーク。* [トップに戻る](#readme) 

* [BartyCrouch](https://github.com/FlineDev/BartyCrouch) - コードやStoryboard/XIBのStringsファイルを段階的に更新・翻訳。
* [CrowdinSDK](https://github.com/crowdin/mobile-sdk-ios) - Crowdinプロジェクトの新しい翻訳をアプリに即時配信。
* [IBLocalizable](https://github.com/PiXeL16/IBLocalizable) - IBLocalizableを使ってInterface Builder内で直接ビューをローカライズ。
* [L10n-swift](https://github.com/Decybel07/L10n-swift) - 実行中の言語切り替えや各言語の複数形に対応したアプリのローカライズ。
* [LocalizationKit](https://github.com/willpowell8/LocalizationKit_iOS) - リモート管理によるリアルタイム動的ローカライズ。アプリを再提出せずに翻訳を管理・保守・公開できます。
* [Localize](https://github.com/andresilvagomez/Localize) - Localizable.strings内で正規表現などを利用してアプリをローカライズ。
* [Localize-Swift](https://github.com/marmelroy/Localize-Swift) - Localizable.strings内で正規表現などを利用してアプリをローカライズ。
* [Locheck](https://github.com/Asana/locheck) - .stringsおよび.stringsdictファイルのエラーを検証。
* [StringSwitch](https://stringswitch.com) - iOSの.stringsファイルとAndroidのstrings.xml形式を簡単に相互変換。
* [SwiftGen-L10n](https://github.com/SwiftGen/SwiftGen#localizablestrings) - Localizable.stringsのすべてのキーに対する`enum`を自動生成（`%@`などのprintf形式プレースホルダーが含まれる場合は適切な関連値も生成）。
* [Translatio](https://github.com/andrealufino/Translatio) - Storyboard内でも文字列をローカライズできる超軽量ライブラリ。

### 位置情報
[トップに戻る](#readme) 

* [AsyncLocationKit](https://github.com/AsyncSwift/AsyncLocationKit) - Swiftのモダンな並行処理（async/await）を使ったApple CoreLocationフレームワークのラッパー。
* [STLocationRequest](https://github.com/SvenTiigi/STLocationRequest) - 洗練されたシンプルな3D Flyover位置情報リクエスト画面。

### ログ記録
*デバイスログの書き込みと読み込みを行うユーティリティ。* [トップに戻る](#readme) 

* [AEConsole](https://github.com/tadija/AEConsole) - iOSアプリ上にデバッグログを表示する、カスタマイズ可能なコンソールUIオーバーレイ。
* [CleanroomLogger](https://github.com/emaloney/CleanroomLogger) - シンプルで軽量かつ高性能な、設定・拡張可能な高水準ロギングAPI。
* [Duration](https://github.com/SwiftStudies/Duration) :penguin: - 処理時間の報告に特化した軽量ロギングライブラリ。
* [Gedatsu](https://github.com/bannzai/gedatsu) - AutoLayoutのエラーをコンソールで読みやすく表示。
* [HeliumLogger](https://github.com/Kitura/HeliumLogger) :penguin: - IBMの軽量ロギングフレームワーク。
* [Printer](https://github.com/hemangshah/printer) - 次のアプリ向けのスタイリッシュなロガー。
* [Puppy](https://github.com/sushichop/Puppy) :penguin: - 複数の転送先とプラットフォームに対応する柔軟なロギングライブラリ。
* [QorumLogs](https://github.com/Esqarrouth/QorumLogs) - XcodeとGoogle Docs向けロギングユーティリティ。
* [Rainbow](https://github.com/onevcat/Rainbow) :penguin: - 快適なコンソール出力。
* [SwiftyBeaver](https://github.com/SwiftyBeaver/SwiftyBeaver) :penguin: - 開発時とリリース時に使えるマルチプラットフォーム対応ロギング。
* [TinyConsole](https://github.com/Cosmo/TinyConsole) - iOSアプリ使用中に情報を表示する小さなログコンソール。
* [TraceLog](https://github.com/tonystone/tracelog) :penguin: - 本来あるべき姿の、極めてシンプルなロギング。iOS、macOS、Linuxで動作。
* [Watchdog](https://github.com/wojteklu/Watchdog) - メインスレッドの過剰なブロックを記録するユーティリティ。
* [WatchdogInspector](https://github.com/tapwork/WatchdogInspector) - iOSアプリのステータスバーに現在のフレームレート（fps）を表示するロギングツール。
* [Willow](https://github.com/Nike-Inc/Willow) - 強力でありながら軽量なロギングライブラリ。
* [XCGLogger](https://github.com/DaveWoodCom/XCGLogger) - ログレベル、タイムスタンプ、行番号に対応した高機能で設定可能なロギングユーティリティ。

### 地図
[トップに戻る](#readme) 

* [Cluster](https://github.com/efremidze/Cluster) - 地図注釈を簡単にクラスタリング。
* [FlyoverKit](https://github.com/SvenTiigi/FlyoverKit) - 設定の自由度を保ちながら、MKMapViewに美しい360° Flyover表示を手軽に実装。
* [GEOSwift](https://github.com/GEOSwift/GEOSwift) - 地理モデルの操作、交差・重なり・投影などの計算を簡単に。
* [ImmersiveMap](https://github.com/artembobkin/ImmersiveMap) - 3D地球儀、平面地図、ライブアバターマーカーを備えた、Metal描画のSwiftUI向けベクタータイル地図エンジン。
* [LocoKit](https://github.com/sobri909/LocoKit) - iOS向け位置情報・アクティビティ記録フレームワーク。

### 数学
[トップに戻る](#readme) 

* [Arithmosophi](https://github.com/phimage/Arithmosophi) - 算術演算と論理演算のプロトコル集。
* [BigInt](https://github.com/attaswift/BigInt) - 任意精度演算。
* [DDMathParser](https://github.com/davedelong/DDMathParser) - 文字列を解析し、数式として評価する処理を簡単にします。
* [SigmaSwiftStatistics](https://github.com/evgenyneu/SigmaSwiftStatistics) - 統計計算用関数集。
* [SwaTex](https://github.com/PhraseHQ/SwaTex) - JavaScript、WebView、DOMを使わない、KaTeX互換のLaTeX数式レンダリングエンジン。
* [Upsurge](https://github.com/alejandro-isaza/Upsurge) - シンプルで高速な行列・ベクトル演算。

### 自然言語処理
[トップに戻る](#readme) 


### ネットワーク
*HTTPリクエストの処理にかかる時間を短縮するライブラリ集。* [トップに戻る](#readme) 

* [Alamofire](https://github.com/Alamofire/Alamofire) :penguin: - 洗練されたネットワーク処理。
* [APIKit](https://github.com/ishkawa/APIKit) - 型安全なWeb APIクライアントを構築するライブラリ。
* [Ciao](https://github.com/AlTavares/Ciao) - mDNS（Bonjour、Zeroconf）を使ってサービスを公開・検出。
* [CodyFire](https://github.com/CodyFlame/CodyFire) - Alamofireベースの、iOS向け高機能Codable APIリクエスト構築・管理ツール。
* [Conduit](https://github.com/mindbody/Conduit) - Web API向けの堅牢なネットワーク処理。
* [Connectivity](https://github.com/rwbutler/Connectivity) - 🌐 インターネットに接続できないWi-Fiネットワークも検出し、接続判定の信頼性を高めます。
* [Dots](https://github.com/iAmrSalman/Dots) - 軽量な並行ネットワークフレームワーク。
* [GoodNetworking](https://github.com/GoodRequest/GoodNetworking) - 📡 HTTPネットワーク処理を簡素化。
* [Heimdallr.swift](https://github.com/trivago/Heimdallr.swift) - iOS向けの使いやすいOAuth 2ライブラリ。
* [Just](https://github.com/dduan/Just) :penguin: - 人のためのHTTP（python-requests風のHTTPライブラリ）。
* [Malibu](https://github.com/hyperoslo/Malibu) - Promiseベースのネットワークライブラリ。
* [Moya](https://github.com/Moya/Moya) - ネットワーク抽象化レイヤー。
* [MultiPeer](https://github.com/dingwilson/MultiPeer) - デバイス間のオフラインデータ転送を自動化するMultipeerConnectivityフレームワークのラッパー。
* [Netfox](https://github.com/kasketis/netfox) - 1行で設定できる軽量ネットワークデバッグライブラリ。
* [Netswift](https://github.com/MrSkwiggs/Netswift) - 型安全な高水準ネットワークソリューション。
* [OAuth2](https://github.com/p2/OAuth2) - OAuth2認証ライブラリ。
* [OAuthSwift](https://github.com/OAuthSwift/OAuthSwift) - iOS向けOAuthライブラリ。
* [Pitaya](https://github.com/johnlui/Pitaya) :penguin: - マシン上でそのまま実行できるHTTP/HTTPSネットワークライブラリ。
* [PMHTTP](https://github.com/postmates/PMHTTP) - RESTとJSONに重点を置いたHTTPフレームワーク。
* [Postal](https://github.com/snipsco/Postal) - 一般的なメールプロバイダーへ簡単にアクセスするフレームワーク。
* [Reachability.swift](https://github.com/ashleymills/Reachability.swift) - クロージャー対応のApple Reachability代替。
* [ReactiveAPI](https://github.com/sky-uk/ReactiveAPI) - Retrofitに着想を得た、URLSessionとRxSwiftの力を活用する簡潔で宣言的なネットワークコード。
* [ResponseDetective](https://github.com/netguru/ResponseDetective) - デバッグ用にアプリとサーバー間の送信リクエストと受信レスポンスを非侵襲的に捕捉するフレームワーク。
* [RxNetworks](https://github.com/yangKJ/RxNetworks) - RxSwift、Moya、HandyJSON、プラグインを使ったネットワークAPI。
* [ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG) - ファイアウォールを回避する高速トンネルプロキシ。
* [Siesta](https://bustoutsolutions.github.io/siesta/) - 状態管理の複雑さを解消するREST API向け抽象化。コールバック・デリゲート型ネットワーク処理の代替。
* [SolarNetwork](https://github.com/ThreeGayHub/SolarNetwork) - 洗練されたネットワーク抽象化レイヤー。
* [SwiftHTTP](https://github.com/daltoniam/SwiftHTTP) - NSURLSessionラッパー。
* [SwiftyOAuth](https://github.com/delba/SwiftyOAuth) - プロバイダー一式を組み込んだ小さなOAuthライブラリ。
* [TermiNetwork](https://github.com/billp/TermiNetwork) - 🌏 iOS、watchOS、macOS、tvOSで最新かつ安全なアプリを構築するための、依存関係ゼロのネットワークソリューション。
* [Tiercel](https://github.com/Danie1s/Tiercel) - iOSアプリ向けバックグラウンドダウンロード、再起動後の復旧、転送再開、タスク管理。
* [TRON](https://github.com/MLSDev/TRON) - Alamofire上に構築された軽量なネットワーク抽象化レイヤー。
* [Wormholy](https://github.com/pmusolino/Wormholy) - 魔法のようなiOSネットワークデバッグ 🧙‍。

#### HTML
*HTMLの内容を簡単に操作したい方に。* [トップに戻る](#readme) 

* [Fuzi](https://github.com/cezheng/Fuzi) - XPathとCSSに対応した高速で軽量なXML/HTMLパーサー。
* [Kanna](https://github.com/tid-kijyun/Kanna) - XML/HTMLパーサー。
* [SwiftSoup](https://github.com/scinfu/SwiftSoup) :penguin: - DOM、CSS、jQueryの優れた機能を備えたHTMLパーサー。
* [WKZombie](https://github.com/mkoehnke/WKZombie) - ヘッドレスブラウザー。
* [ZMarkupParser](https://github.com/ZhgChgLi/ZMarkupParser) - カスタムスタイルやタグを使ってHTML文字列をNSAttributedStringに変換。

#### メッセージングプロトコル
[トップに戻る](#readme) 

* [CocoaMQTT](https://github.com/emqx/CocoaMQTT) - iOSおよびOS X向けMQTT。
* [Perfect-Notifications](https://github.com/PerfectlySoft/Perfect-Notifications) - LinuxおよびOS X向けiOS通知機能。

#### SOAP
[トップに戻る](#readme) 

* [SOAPEngine](https://github.com/priore/SOAPEngine) - iOS、Mac OS X、Apple TVからSOAP Webサービスにアクセスする汎用SOAPクライアント。

#### Socket
[トップに戻る](#readme) 

* [BlueSocket](https://github.com/Kitura/BlueSocket ) - IBMのクロスプラットフォーム低レベルソケットフレームワーク。
* [BlueSSLService](https://github.com/Kitura/BlueSSLService) - IBMの低レベルソケットフレームワーク向けSSL/TLSアドオン。
* [DNWebSocket](https://github.com/GlebRadchenko/DNWebSocket) - オブジェクト指向でAutobahnテスト済みのWebSocketライブラリ（RFC 6455）。
* [RxWebSocket](https://github.com/fjcaetano/RxWebSocket) - リアクティブWebSocket。
* [Socket.IO](https://github.com/socketio/socket.io-client-swift) :penguin: - iOS/OS X向けSocket.IOクライアント。
* [sockets](https://github.com/vapor-community/sockets) :penguin: - TCP、UDP、クライアント、サーバーに対応。Linux、OS Xで動作。
* [Starscream](https://github.com/daltoniam/Starscream) - iOSおよびOSX向けWebSocket。
* [SwiftSocket](https://github.com/swiftsocket/SwiftSocket) - シンプルなTCPソケットライブラリ。
* [SwiftWebSocket](https://github.com/tidwall/SwiftWebSocket) - 高性能WebSocketクライアントライブラリ。

#### ウェブサーバー
*デバイス上でWebサーバーをホストしたい方に、その方法を紹介します。* [トップに戻る](#readme) 

* [Ambassador](https://github.com/envoy/Ambassador) - SWSGIベースの超軽量Webフレームワーク。
* [Curassow](https://github.com/kylef-archive/Curassow) :penguin: - pre-forkワーカーモデルを使うHTTPサーバー。
* [Embassy](https://github.com/envoy/Embassy) :penguin: - 超軽量な非同期HTTPサーバーライブラリ。
* [Kitura](https://github.com/Kitura/Kitura) :penguin: - IBMのWebサービス向けWebフレームワークおよびサーバー。
* [Lightning](https://github.com/skylab-inc/Lightning) :penguin: - マルチプラットフォーム対応のシングルスレッド・ノンブロッキングWeb／ネットワークフレームワーク。
* [Noze.io](https://github.com/NozeIO/Noze.io) :penguin: - Node.jsのようなイベント駆動I/Oストリーム。
* [Perfect](https://github.com/PerfectlySoft/Perfect) :penguin: - サーバーサイドSwift。Perfectライブラリ、アプリケーションサーバー、コネクター、サンプルアプリを提供。
* [swifter](https://github.com/httpswift/swifter) :penguin: - ルーティングハンドラーを備えたHTTPサーバー。
* [Vapor](https://github.com/vapor/vapor) :penguin: - iOS、OS X、Ubuntuで動作する洗練されたWebフレームワーク。
* [Zewo](https://github.com/Zewo/Zewo) :penguin: - サーバーサイドSwift。

### OCR
[トップに戻る](#readme) 

* [SwiftOCR](https://github.com/NMAC427/SwiftOCR) - ニューラルネットワークベースのOCRライブラリ。

### 最適化
[トップに戻る](#readme) 


### PDF
[トップに戻る](#readme) 

* [PDFGenerator](https://github.com/sgr-ksmt/PDFGenerator) - ビューや画像からPDFを生成するシンプルなPDFジェネレーター。
* [SimplePDF](https://github.com/nRewik/SimplePDF) - 簡単にPDFを作成。
* [UXMPDFKit](https://github.com/uxmstudio/UXMPDFKit) - iOSアプリに埋め込めるPDFビューアー兼注釈ツール。

### 品質
[トップに戻る](#readme) 

* [AnyLint](https://github.com/FlineDev/AnyLint) :penguin: - Swiftと正規表現の力を組み合わせ、あらゆるものをLint。
* [IBLinter](https://github.com/IBDecodable/IBLinter) - Interface Builder向けリンターツール。
* [L10nLint](https://github.com/s2mr/L10nLint) - Localizable.strings向けリンターツール。
* [solid-like-a-rock](https://github.com/nenadvulic/solid-like-a-rock) :penguin: - SwiftSyntaxを使ってClean ArchitectureとTCAのインポート規則を強制するアーキテクチャリンター。
* [swift-mod](https://github.com/ra1028/swift-mod) - コード生成とフォーマットの間を仲介し、Swiftコードを変更するツール。
* [SwiftCop](https://github.com/andresinaka/SwiftCop) - Ruby on Rails Active Recordの明快なバリデーションに着想を得た検証ライブラリ。
* [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) - Swiftコードを再フォーマットするライブラリおよびコマンドラインツール。
* [SwiftLint](https://github.com/realm/SwiftLint) - コーディング規約を適用するツール。
* [Swimat](https://github.com/Jintin/Swimat) - コードを整形するXcodeプラグイン。
* [Tailor](https://github.com/sleekbyte/tailor) :penguin: - コードを読みやすくし、バグを防ぐクロスプラットフォーム静的解析ツール。

### スクリプト
[トップに戻る](#readme) 

* [Swift for Scripting](https://github.com/artemnovichkov/Swift-For-Scripting) - 便利で参考になるスクリプト資料を手作業で厳選したコレクション。

### SDK
[トップに戻る](#readme) 


### セキュリティ
[トップに戻る](#readme) 

* [SecurePropertyStorage](https://github.com/alexruperez/SecurePropertyStorage) - Swiftのプロパティラッパーを使って、プロパティ用の安全なストレージを定義。
* [TouchBridge](https://github.com/HMAKT99/UnTouchID) - スマートフォンの指紋認証で任意のMacにログイン。

#### 暗号技術
*暗号方式を簡単に扱う。* [トップに戻る](#readme) 

* [BlueCryptor](https://github.com/Kitura/BlueCryptor) - IBMのクロスプラットフォーム暗号ライブラリ。
* [BlueRSA](https://github.com/Kitura/BlueRSA) - IBMのクロスプラットフォームRSA暗号ライブラリ。
* [CryptoSwift](https://github.com/krzyzanowskim/CryptoSwift) :penguin: - 暗号関連の関数とヘルパー。
* [IDZSwiftCommonCrypto](https://github.com/iosdevzone/IDZSwiftCommonCrypto) - Apple Common Cryptoライブラリのラッパー。
* [JOSESwift](https://github.com/airsidemobile/JOSESwift) - JOSE標準のJWS、JWE、JWK向けフレームワーク。
* [JWSETKit](https://github.com/amosavian/JWSETKit) - JWS、JWT、JWE、JWKをサポートするJOSEライブラリ。
* [RNCryptor](https://github.com/RNCryptor/RNCryptor) - iOSおよびMac向けCCCryptor（AppleのAES暗号化）ラッパー。
* [SCrypto](https://github.com/sgl0v/scrypto) - CommonCryptoルーチンにアクセスする洗練されたインターフェース。
* [Siphash](https://github.com/attaswift/SipHash) - SipHashアルゴリズムによるシンプルで安全なハッシュ処理。
* [Swift-Sodium](https://github.com/jedisct1/swift-sodium) - iOSおよびOS Xの一般的な暗号処理向けSodiumライブラリのインターフェース。
* [Themis](https://github.com/cossacklabs/themis) - 保存データ、認証付きデータ交換、通信保護、認証など、一般的な暗号方式を使いやすくする多言語対応フレームワーク。

#### Keychain
[トップに戻る](#readme) 

* [GoodPersistence](https://github.com/GoodRequest/GoodPersistence) - 💾 プロパティラッパーを利用して、KeychainとUserDefaultsへのデータキャッシュを簡素化。
* [keychain-swift](https://github.com/evgenyneu/keychain-swift) - iOS、OS X、tvOS、watchOSでテキストをKeychainに安全に保存するヘルパー関数。
* [KeychainAccess](https://github.com/kishikawakatsumi/KeychainAccess) - iOSおよびOS Xで動作するシンプルなKeychainラッパー。
* [Latch](https://github.com/endocrimes/Latch) - iOS向けシンプルなKeychainラッパー。
* [SwiftKeychainWrapper](https://github.com/jrendel/SwiftKeychainWrapper) - iOS KeychainをUserDefaultsのように使えるシンプルな静的ラッパー。
* [Valet](https://github.com/square/Valet) - Keychainの仕組みを知らなくてもデータを安全に保存できます。簡単です。お約束します。

### ストリーミング
[トップに戻る](#readme) 

* [HaishinKit](https://github.com/HaishinKit/HaishinKit.swift) - iOS、macOS、tvOS向けのRTMP・HLSカメラ／マイクストリーミングライブラリ。
* [Live](https://github.com/ltebean/Live) - ライブ配信アプリの構築方法を紹介。

### スタイル設定
[トップに戻る](#readme) 

* [Stylist](https://github.com/yonaskolb/Stylist) - ホットロード可能な外部YAMLまたはJSONファイルでUIスタイルを定義。
* [SwiftTheme](https://github.com/wxxsw/SwiftTheme) - iOS 8以降向けの強力なテーマ／スキン管理。
* [Themes](https://github.com/onmyway133/EasyTheme) - テーマ管理。

### SVG
[トップに戻る](#readme) 

* [SVGView](https://github.com/exyte/SVGView) - SwiftUIで書かれたSVGパーサー兼レンダラー。

### システム
[トップに戻る](#readme) 

* [BlueSignals](https://github.com/Kitura/BlueSignals) - IBMのクロスプラットフォームOSシグナル処理ライブラリ。
* [LaunchAtLogin](https://github.com/sindresorhus/LaunchAtLogin-Legacy) - サンドボックス化されたmacOSアプリに「ログイン時に起動」機能を簡単に追加。
* [SystemKit](https://github.com/beltex/SystemKit/) - OS Xシステムライブラリ。

### テスト
*テストフレームワーク集。* [トップに戻る](#readme) 

* [DVR](https://github.com/venmo/DVR) - シンプルなネットワークテストフレームワーク。
* [Erik](https://github.com/phimage/Erik) - JavaScriptでWebページにアクセス・操作でき、機能テストを実行するヘッドレスブラウザー。
* [Fakery](https://github.com/vadymmarkov/Fakery) - 偽データジェネレーター。
* [Mussel](https://github.com/UrbanCompass/Mussel) - XCUITestでプッシュ通知、ユニバーサルリンク、ルーティングを簡単にテストするフレームワーク。
* [Nimble](https://github.com/Quick/Nimble) - マッチャーフレームワーク。
* [OHHTTPStubs](https://github.com/AliSoftware/OHHTTPStubs) - ネットワークリクエストを簡単にスタブ化するテストライブラリ。
* [Quick](https://github.com/Quick/Quick) :penguin: - ビヘイビア駆動開発フレームワーク。
* [SBTUITestTunnel](https://github.com/Subito-it/SBTUITestTunnel) - ネットワークリクエストの操作、CLLocationManagerとUNUserNotificationCenterのスタブ化、テーブル／コレクション／スクロールビューの細かなスクロール制御を行うUIテストライブラリ。
* [Sizes](https://github.com/marcosgriselli/Sizes) - さまざまなデバイスとフォントサイズでアプリをテスト。
* [SnapshotTest](https://github.com/parski/SnapshotTest) - iOSおよびtvOS向けスナップショットテストツール。
* [Spectre](https://github.com/kylef/Spectre) :penguin: - BDDフレームワーク。
* [swift-testing-expectation](https://github.com/dfed/swift-testing-expectation) - Swift Testingで非同期Expectationを作成。
* [SwiftCheck](https://github.com/typelift/SwiftCheck) - プログラムの性質をテストするためのランダムデータを自動生成するテストライブラリ。
* [UI Testing Cheat Sheet](https://github.com/joemasilotti/UI-Testing-Cheat-Sheet) - 動作するサンプルアプリとともに、UIテストに関するよくある「どうテストすればよいか」という質問に回答。
* [XCTest](https://github.com/swiftlang/swift-corelibs-xctest) - 単体テストをサポートするSwiftコアライブラリ、XCTestプロジェクト。

#### モック
[トップに戻る](#readme) 

* [AutoMockable](https://github.com/vincent-pradeilles/AutoMocker) - 型システムを活用し、データ型のモックインスタンスを簡単に作成するフレームワーク。
* [Cuckoo](https://github.com/Brightify/Cuckoo) - 定型コード不要の初のモックフレームワーク。
* [Mocker](https://github.com/WeTransfer/Mocker) - 実装コードを変更せずにAlamofireとURLSessionのリクエストをモック。
* [Mockingbird](https://github.com/Farfetch/mockingbird) - HTTP/HTTPSを使って任意のシステムを簡単にモックし、未完成・不安定なサービスや計画済みケースを対象にチームでテスト・開発できるようにして、ソフトウェアテストを簡素化。
* [Mockingjay](https://github.com/kylef/Mockingjay) - HTTPリクエストを簡単にスタブ化する洗練されたライブラリ。
* [Mockit](https://github.com/sabirvirtuoso/Mockit) - Javaで有名なMockitoに着想を得たシンプルなモックフレームワーク。
* [MockSwift](https://github.com/leoture/MockSwift) - プロパティラッパーの力を活用するモックフレームワーク。

### テキスト
*テキスト関連プロジェクト集。* [トップに戻る](#readme) 

* [Attributed](https://github.com/Nirma/Attributed) - 属性付き文字列向けの最新マイクロフレームワーク。
* [AttributedTextView](https://github.com/evermeer/AttributedTextView) - 複数リンク、ハッシュタグ、メンションに対応した属性付きUITextViewを作る最も簡単な方法。
* [BonMot](https://github.com/Rightpoint/BonMot) - iOS向けの美しく扱いやすい属性付き文字列。
* [Croc](https://github.com/JKalash/Croc) - 軽量な絵文字解析・検索ライブラリ。
* [edhita](https://github.com/tnantoka/edhita) - 完全オープンソースのiOS向けテキストエディター。
* [GMarkdown](https://github.com/GIKICoder/GMarkdown) - テーブル、LaTeX、Mermaid、コードハイライトに対応したiOS向けMarkdownレンダリングライブラリ。
* [MarkdownDisplayView](https://github.com/zjc19891106/MarkdownDisplayView) - TextKit 2で構築されたMarkdownレンダリングコンポーネント。滑らかな性能、豊富なカスタマイズ、AI会話のストリーミング表示に対応。
* [MarkdownKit](https://github.com/bmoliveira/MarkdownKit) - シンプルでカスタマイズ可能なMarkdownパーサー。
* [MarkdownView](https://github.com/keitaoouchi/MarkdownView) - iOS向けMarkdownビュー。
* [MarkyMark](https://github.com/M2Mobi/Marky-Mark) - Markdownをネイティブビューまたは属性付き文字列に変換。
* [Notepad](https://github.com/ruddfawcett/Notepad) - ライブ構文ハイライトと完全なテーマ機能を備えたMarkdownエディター。
* [OEMentions](https://github.com/omar14/OEMentions) - FacebookやInstagramのようにUITextViewにメンションを簡単に追加。
* [Parsey](https://github.com/rxwei/Parsey) - ソース位置追跡、バックトラッキング防止、詳細なエラーメッセージに対応するパーサーコンビネーターフレームワーク。
* [Pluralize.swift](https://github.com/joshualat/Pluralize.swift) - 優れたString複数形変換拡張。
* [PredicateFlow](https://github.com/andreadelfante/PredicateFlow) - 型安全で読みやすいNSPredicateを記述するビルダー。
* [PrediKit](https://github.com/KrakenDev/PrediKit) - SnapKitに着想を得たiOSおよびOS X向けNSPredicate DSL。
* [Regex by crossroadlabs](https://github.com/crossroadlabs/Regex) :penguin: - 豊富な機能を備え、非常に使いやすい正規表現ライブラリ。`=~`演算子とメソッドAPIの両方を提供し、単体テストも完備。
* [Regex by sindresorhus](https://github.com/sindresorhus/Regex) - Unicodeを正しく扱う、十分にテスト・文書化されたSwiftらしい正規表現。
* [RichEditorView](https://github.com/cjwirth/RichEditorView) - リッチテキスト編集向けのシンプルでモジュール化された、すぐに使えるUIViewサブクラス。
* [Sprinter](https://github.com/nicklockwood/Sprinter) - 文字列フォーマットライブラリ。
* [SwiftRichString](https://github.com/malcommac/SwiftRichString) - 洗練され、手間のかからない属性付き文字列管理ライブラリ。
* [SwiftVerbalExpressions](https://github.com/VerbalExpressions/SwiftVerbalExpressions) - VerbalExpressionsの移植。
* [SwiftyAttributes](https://github.com/eddiekaiger/SwiftyAttributes) - 属性付き文字列を簡単に扱える拡張機能。
* [Tagging](https://github.com/k-lpmg/Tagging) - メンションやハッシュタグを簡単に使えるTextView。
* [Texstyle](https://github.com/rosberry/texstyle) - 属性付き文字列を簡単にフォーマット。
* [TextAttributes](https://github.com/delba/TextAttributes) - 属性付き文字列をより簡単に組み立て。
* [TextBuilder](https://github.com/davdroman/swiftui-text-builder) - Text向けのSwiftUI ViewBuilder。
* [TwitterTextEditor](https://github.com/twitter/TwitterTextEditor) - iOSアプリ向けのフル機能リッチテキストエディターを提供する、独立した柔軟なAPI。
* [VEditorKit](https://github.com/GeekTree0101/VEditorKit) - 軽量で強力なエディターキット。

### スレッド
*スレッド、タスクベース／非同期プログラミング、Grand Central Dispatch（GCD）ラッパー。* [トップに戻る](#readme) 

* [Async](https://github.com/duemunk/Async) - Grand Central Dispatch向け構文糖衣。
* [AwaitKit](https://github.com/yannickl/AwaitKit) - ES7 Async/Awaitの制御フロー。
* [Each](https://github.com/dalu93/Each) - NSTimerブリッジライブラリ。
* [GCDTimer](https://github.com/hemantasapkota/GCDTimer) - 十分にテストされたGCDタイマー。
* [Schedule](https://github.com/luoxiu/Schedule) :penguin: - 非常に人間に優しい構文を備えた、待望の軽量タスクスケジューラー。
* [SwiftyTimer](https://github.com/radex/SwiftyTimer) - NSTimer向けAPI。

### UI
*すぐに使えるトランジションや便利なUI機能のコレクション。* [トップに戻る](#readme) 

* [ActivityIndicatorView](https://github.com/exyte/ActivityIndicatorView) - SwiftUIで作られた複数の既定ローディングインジケーター。
* [AECoreDataUI](https://github.com/tadija/AERecord) - Core Data駆動のUI。
* [AGCircularPicker](https://github.com/agilie/AGCircularPicker) - 任意の計算パラメーターを管理するコントローラーを作成する便利なコンポーネント。
* [AMScrollingNavbar](https://github.com/andreamazz/AMScrollingNavbar) - UIScrollViewのスクロールに追従するスクロール可能なUINavigationBar。
* [Arale](https://github.com/supercomputra/Arale) - UIScrollViewとそのサブクラス向けカスタム伸縮ヘッダービュー。コンテンツ再読み込み用UIActivityIndicatorViewに対応。
* [BadgeHub](https://github.com/jogendra/BadgeHub) - 任意のUIViewを本格的なアニメーション通知センターに変換。通知バッジアイコンを素早く追加できます。
* [BatteryView](https://github.com/yonat/BatteryView) - シンプルなバッテリー形状のUIView。
* [BetterSafariView](https://github.com/stleamist/BetterSafariView) - SwiftUIでSFSafariViewControllerを表示したりASWebAuthenticationSessionを開始したりする、より優れた方法。
* [BottomSheet](https://github.com/joomcode/BottomSheet) - コンテンツに応じたサイズ、インタラクティブな閉じる操作、ナビゲーションコントローラーに対応する強力なボトムシートコンポーネント。
* [BreakOutToRefresh](https://github.com/dasdom/BreakOutToRefresh) - SpriteKitを使った、遊び心のあるプル・トゥ・リフレッシュビュー。
* [BulletinBoard](https://github.com/alexaubry/BulletinBoard) - 画面下部に表示するコンテキストカードを生成・管理。
* [CapturePreventionKit](https://github.com/Jaesung-Jung/CapturePreventionKit) - `画面キャプチャ防止`用の`Label`と`ImageView`を提供。
* [CircularProgress](https://github.com/sindresorhus/CircularProgress) - macOSアプリ向け円形プログレスインジケーター。
* [CircularRangeSlider](https://github.com/diegotid/circular-range-slider) - 円形スライダーで値の範囲を選択するカスタマイズ可能なSwiftUIコンポーネント。
* [ClassicKit](https://github.com/Baddaboo/ClassicKit) - クラシックスタイルのUIコンポーネント集。
* [ContainerController](https://github.com/mrustaa/ContainerController) - Apple MapsやStocksアプリのスワイプパネルを再現したUIコンポーネント。
* [CountryPickerView](https://github.com/kizitonwose/CountryPickerView) - iOSアプリで国情報を効率よく収集するためのシンプルでカスタマイズ可能なビュー。
* [CustomSegue](https://github.com/phimage/CustomSegue) - スライドやクロスフェード効果に対応したOSX Storyboard用カスタムセグエ。
* [DeckTransition](https://github.com/HarshilShah/DeckTransition) - iOS 10 Apple Musicの再生中画面トランジションを再現するライブラリ。
* [DockProgress](https://github.com/sindresorhus/DockProgress) - macOSアプリのDockアイコンに進捗を表示。
* [Dodo](https://github.com/evgenyneu/Dodo) - iOS向けメッセージバー。
* [Doric Design System Foundation](https://github.com/jayeshk/Doric) - iOS向けのプロトコル指向、型安全、スケーラブルなデザインシステム基盤フレームワーク。
* [DropDown](https://github.com/AssistoLab/DropDown) - iOS向けMaterial Designドロップダウン。
* [Elissa](https://github.com/KitchenStories/Elissa) - UITabBarItemや任意のUIViewアンカービューの上に通知を表示し、追加情報を提示。
* [EstMusicIndicator](https://github.com/Aufree/ESTMusicIndicator) - iTunes風の音楽再生インジケーター。
* [Family](https://github.com/zenangst/Family) - 親コントローラーの設定を非常に簡単にする子ビューコントローラーフレームワーク。
* [FAQView](https://github.com/mukeshthawani/faqview) - iOS向けの使いやすいFAQビュー。
* [Fashion](https://github.com/vadymmarkov/Fashion) - UIスタイルを共有・再利用するためのファッション小物と美容ツール。
* [FlagKit](https://github.com/madebybowtie/FlagKit) - アプリやWebで使える美しい国旗アイコン。
* [FlexibleHeader](https://github.com/k-lpmg/FlexibleHeader) - UIScrollViewのスクロールに反応するコンテナービュー。
* [FloatRatingView](https://github.com/glenyi/FloatRatingView) - フローティング評価システム。
* [Fluid Slider](https://github.com/Ramotion/fluid-slider) - 選択した正確な値を吹き出しで表示するスライダーウィジェット。
* [GaugeKit](https://github.com/skywinder/GaugeKit) - カスタマイズ可能なゲージ。Apple風のゲージを簡単に再現。
* [GMStepper](https://github.com/gmertk/GMStepper) - 中央にスライドラベルを備えたステッパー。
* [GradientProgressBar](https://github.com/fxm90/GradientProgressBar) - アニメーション付きグラデーションプログレスバー。
* [GRMustache](https://github.com/groue/GRMustache.swift) - 柔軟なMustacheテンプレート。
* [GrowingTextView](https://github.com/KennethTsang/GrowingTextView) - 自動伸縮、プレースホルダー、文字数制限に対応したUITextView。
* [HGCircularSlider](https://github.com/HamzaGhazouani/HGCircularSlider) - iOSアプリ向けの再利用可能なカスタム円形スライダーコントロール。
* [HidesNavigationBarWhenPushed](https://github.com/gontovnik/HidesNavigationBarWhenPushed) - hidesNavigationBarWhenPushedフラグでビューコントローラーをプッシュした際にナビゲーションバーを隠す機能を追加。
* [HorizontalDial](https://github.com/kciter/HorizontalDial) - Instagram風の横スクロールダイヤル。
* [HPParallaxHeader](https://github.com/ngochiencse/HPParallaxHeader) - UIScrollView向けのシンプルなパララックスヘッダー。
* [IGColorPicker](https://github.com/iGenius-Srl/IGColorPicker) - iOS向けカスタマイズ可能なカラーピッカー。
* [InstantSearch iOS](https://github.com/algolia/instantsearch-ios) - iOSにインスタント検索機能を構築するウィジェットとヘルパーのライブラリ。
* [KALoader](https://github.com/Kirillzzy/KALoader) - データ読み込み中に表示する美しいアニメーションプレースホルダー。
* [KMNavigationBarTransition](https://github.com/MoZhouqi/KMNavigationBarTransition) - 全方向でビューコントローラーをプッシュ／ポップする際、ナビゲーションバーのスタイル管理とスタイル間の滑らかな遷移を支援する、導入が簡単な汎用ライブラリ。
* [KMPlaceholderTextView](https://github.com/MoZhouqi/KMPlaceholderTextView) - 複数行プレースホルダーに対応するUITextViewサブクラス。
* [LeeGo](https://github.com/wangshengjia/LeeGo) - レゴブロックを組み立てるように宣言的・設定可能で再利用性の高いUIを開発。
* [LicensePlist](https://github.com/mono0926/LicensePlist) - すべての依存関係のPlistを自動生成するコマンドラインツール。
* [LiquidLoader](https://github.com/yoavlt/LiquidLoader) - 液体アニメーション付きスピナーローダーコンポーネント。
* [LoadingShimmer](https://github.com/jogendra/LoadingShimmer) - 1行のコードで任意のビューにシマー効果を簡単に追加。控えめな読み込みインジケーターとして便利です。
* [Macaw](https://github.com/exyte/macaw) - SVG対応の強力で使いやすいベクターグラフィックスライブラリ。
* [Magnetic](https://github.com/efremidze/Magnetic) - Apple Musicに着想を得たSpriteKit製フローティングバブルピッカー。
* [Mandoline](https://github.com/blueapron/Mandoline) - あらゆる選択ニーズに応えるiOS向けピッカービュー。
* [MantleModal](https://github.com/canalesb93/MantleModal) - UIScrollViewを使い、下方向へのドラッグで閉じられるシンプルなモーダル。
* [Material](https://github.com/CosmicMind/Material) - Google Material DesignとApple Flat UI向けのアニメーション・グラフィックスフレームワークで創造力を発揮。
* [Material Components for iOS](https://github.com/material-components/material-components-ios) - モジュール式でカスタマイズ可能なMaterial Design UIコンポーネント。
* [MaterialKit](https://github.com/nghialv/MaterialKit) - Material Designコンポーネント。
* [MediaBrowser](https://github.com/younatics/MediaBrowser) - グリッド表示、キャプション、選択機能を任意で使えるシンプルなiOS向け写真・動画ブラウザー。
* [MPParallaxView](https://github.com/DroidsOnRoids/MPParallaxView) - Apple TVのパララックス効果。
* [MultiSelectSegmentedControl](https://github.com/yonat/MultiSelectSegmentedControl) - 複数セグメント選択、縦積み、テキストと画像の組み合わせに対応したUISegmentedControlの再実装。
* [MultiSlider](https://github.com/yonat/MultiSlider) - 複数のつまみ・値、範囲ハイライト、任意のスナップ間隔・値ラベル、縦横表示に対応するUISliderクローン。
* [MuscleMap](https://github.com/melihcolpan/MuscleMap) - SwiftUIとUIKitでインタラクティブな人体筋肉マップを描画。
* [MXParallaxHeader](https://github.com/maxep/MXParallaxHeader) - UIScrollView向けのシンプルなパララックスヘッダー。
* [MZFormSheetPresentationController](https://github.com/m1entus/MZFormSheetPresentationController) - iPhone対応やコントローラーサイズ・フォームシートの見た目の追加設定を提供し、ネイティブiOS UIModalPresentationFormSheetを置き換え。
* [NeumorphismKit](https://github.com/y-okudera/NeumorphismKit) - UIKit向けニューモーフィズムフレームワーク。
* [NextGrowingTextView](https://github.com/FluidGroup/NextGrowingTextView) - iOS 7以降に最適化された次世代の自動伸縮TextView。
* [NVActivityIndicatorView](https://github.com/ninjaprox/NVActivityIndicatorView) - 優れた読み込みアニメーション集。
* [OverlayContainer](https://github.com/applidium/OverlayContainer) - Apple MapsやStocksのようなオーバーレイ型インターフェースを簡単に開発。
* [Partition Kit](https://github.com/kieranb662/PartitionKit) - Viewコンテンツ向けのサイズ変更可能な分割を作るSwiftUIライブラリ。
* [Popovers](https://github.com/aheze/Popovers) - ポップオーバー表示ライブラリ。シンプルで最新、カスタマイズ性も高く、退屈ではありません。
* [Preferences](https://github.com/sindresorhus/Settings) - macOSアプリに設定ウィンドウを数分で追加。
* [ProgressIndicatorView](https://github.com/exyte/ProgressIndicatorView) - SwiftUIで書かれたプログレスインジケータービューライブラリ。
* [PullToDismiss](https://github.com/sgr-ksmt/PullToDismiss) - スクロールビューやナビゲーションバーを引っ張ってモーダルビューコントローラーを閉じられます。
* [RangeSeekSlider](https://github.com/WorldDownTown/RangeSeekSlider) - iOS向けUISlider風のカスタマイズ可能な範囲スライダー。
* [Reel search](https://github.com/Ramotion/reel-search) - リール形式で管理する選択肢リスト。
* [ResizingTokenField](https://github.com/tadejr/ResizingTokenField) - 固有のコンテンツ高さを提供するUICollectionViewベースのトークンフィールド。
* [RetroProgress](https://github.com/hyperoslo/RetroProgress) - 90年代を思わせるレトロなプログレスバー。
* [SectionedSlider](https://github.com/LeonardoCardoso/SectionedSlider) - コントロールセンタースライダー。
* [SelectionDialog](https://github.com/kciter/SelectionDialog) - シンプルな選択ダイアログ。
* [ShadowView](https://github.com/PierrePerrin/ShadowView) - UIViewの影を簡単に管理。
* [Shiny](https://github.com/efremidze/Shiny) - Apple Pay Cashに着想を得た玉虫色エフェクトビュー。
* [ShowSomeProgress](https://github.com/stoneburner/ShowSomeProgress) - iOSアプリ向けのアニメーション付き進捗表示・アクティビティインジケーター。
* [SkeletonView](https://github.com/Juanpe/SkeletonView) - 処理中であることを伝え、表示予定のコンテンツを示す洗練された方法。
* [SKPhotoBrowser](https://github.com/suzuki-0000/SKPhotoBrowser) - FacebookやTwitterの写真ブラウザーに着想を得たシンプルなフォトビューアー。
* [Spots](https://github.com/hyperoslo) - セットアップと今後の開発を非常に高速にするビューコントローラーフレームワーク。
* [SpreadsheetView](https://github.com/kishikawakatsumi/SpreadsheetView) - iOSアプリ向けの完全設定可能なスプレッドシートUI。
* [StarryStars](https://github.com/peterprokop/StarryStars) - Interface Builderから完全にカスタマイズできる評価の表示・編集。
* [StatefulViewController](https://github.com/aschuch/StatefulViewController) - コンテンツ、読み込み、エラー、空の状態に応じたプレースホルダービュー。
* [StepProgressView](https://github.com/yonat/StepProgressView) - ラベルと図形で段階的に進捗を表示するビュー。UIActivityIndicatorViewとUIProgressViewの優れた代替です。
* [SweetCurtain](https://github.com/ihormalovanyi/SweetCurtain) - 下から引き上げられる、とても使いやすいシート実装。Apple Maps、Find My、Stocksなどに似たUIを実現できます。
* [SwiftUISkia](https://github.com/rustq/swiftui-skia) - Rustによるソフトウェアラスタライズを用いた、Skiaベースの2DグラフィックスSwiftUIレンダリングライブラリ。
* [SwiftyUI](https://github.com/haoking/SwiftyUI) - 高性能で軽量なUIView、UIImage、UIImageView、UILabel、UIButtonなど。
* [TagListView](https://github.com/ElaWorkshop/TagListView) - シンプルながら高いカスタマイズ性を備えたiOSタグリストビュー。
* [Toaster](https://github.com/devxoul/Toaster) - 通知トースト。
* [Twinkle](https://github.com/piemonte/Twinkle) - iOSアプリの要素を簡単にきらめかせる方法。
* [UltraDrawerView](https://github.com/super-ultra/UltraDrawerView) - Apple MapsやStocksなどと同様のドロワービューを実現する、軽量・高速でカスタマイズ可能な実装。
* [URLEmbeddedView](https://github.com/marty-suzuki/URLEmbeddedView) - Open Graph Protocolに適合するオブジェクトを自動キャッシュし、URL埋め込みカードとして表示。
* [Windless](https://github.com/ParkGwangBeom/Windless) - 非表示レイアウトの読み込みビューを簡単に実装。
* [WSTagsField](https://github.com/whitesmith/WSTagsField) - 複数のタグを表示するiOSテキストフィールド。
* [YMTreeMap](https://github.com/yahoo/YMTreeMap) - Squarifiedアルゴリズムに基づくツリーマップ／ヒートマップレイアウトエンジン。
* [YNSearch](https://github.com/younatics/YNSearch) - Pinterest風の完全カスタマイズ可能な検索ビュー。

#### アラート
*アラート、アクションシート、通知、ポップアップを表示するライブラリ。* [トップに戻る](#readme) 

* [Alertift](https://github.com/sgr-ksmt/Alertift) - 最新で使いやすいUIAlertControllerラッパー。
* [Alerts Pickers](https://github.com/dillidon/alerts-and-pickers) - TextField、DatePicker、PickerView、TableView、CollectionViewを使ったUIAlertControllerの高度な利用。
* [ALRT](https://github.com/mshrwtnb/alrt) - UIAlertControllerをより簡単に構築。どこからでもアラートを表示。
* [AwaitToast](https://github.com/k-lpmg/AwaitToast) - 🍞 基本的なトーストを備えた非同期待機トースト。Facebookの投稿中トーストに着想。
* [CDAlertView](https://github.com/candostdagdeviren/CDAlertView) - アラート、通知、成功、エラー、警告ポップアップを高度にカスタマイズ。
* [CFNotify](https://github.com/JT501/SwiftNotify) - ドラッグ可能なアラートビューを作成するカスタマイズ可能なフレームワーク。
* [EZAlertController](https://github.com/thellimist/EZAlertController) - 簡単なUIAlertController。
* [FullscreenPopup](https://github.com/Ryu0118/swift-fullscreen-popup) - SwiftUIでNavigationBarの上に任意のポップアップを表示。
* [GSMessage](https://github.com/wxxsw/GSMessages) - iOS 7以降向けのシンプルなメッセージ／通知。
* [Kamagari](https://github.com/tasanobu-zz/Kamagari) - シンプルなUIAlertControllerビルダークラス。
* [Loaf](https://github.com/schmidyy/Loaf) - iOSトーストを簡単に表示するシンプルなフレームワーク。
* [MijickPopups](https://github.com/Mijick/Popups) - ポップアップ、ポップオーバー、シート、アラート、トースト、バナーなどを簡単に表示。
* [NotificationBanner](https://github.com/Daltron/NotificationBanner) - iOSアプリ内に高度にカスタマイズ可能な通知バナーを表示する最も簡単な方法。
* [PMAlertController](https://github.com/pmusolino/PMAlertController) - 優れたカスタマイズ可能なUIAlertController代替。
* [PopupDialog](https://github.com/orderella/PopupDialog) - シンプルでカスタマイズ可能なポップアップダイアログ。UIAlertControllerのアラートスタイルを置き換えます。
* [PopupView](https://github.com/exyte/PopupView) - SwiftUIで書かれたトースト・ポップアップライブラリ。
* [SCLAlertView](https://github.com/vikmeup/SCLAlertView-Swift) - アニメーション付きアラートビュー。
* [Sheet](https://github.com/ParkGwangBeom/Sheet) - Flipboardアプリのようなナビゲーション機能を備えたアクションシート。
* [SPAlert](https://github.com/sparrowcode/AlertKit) - Apple MusicやApp Storeのフィードバック画面のようなネイティブポップアップ。完了・ハートのプリセットを含みます。
* [StatusAlert](https://github.com/LowKostKustomz/StatusAlert) - ユーザーの操作を妨げず、自動で消えるAppleシステム風ステータスアラートを表示。
* [SweetAlert](https://github.com/codestergit/SweetAlert-iOS) - アラートシステム。
* [Swift-Prompts](https://github.com/GabrielAlva/Swift-Prompts) - 多数の選択肢からカスタムプロンプトをデザイン。
* [SwiftEntryKit](https://github.com/huri000/SwiftEntryKit) - シンプルで多用途なポップアップ表示ツール。
* [SwiftMessages](https://github.com/SwiftKickMobile/SwiftMessages) - iOS向けの非常に柔軟なメッセージバー。
* [SwiftOverlays](https://github.com/peterprokop/SwiftOverlays) - さまざまなポップアップと通知。
* [Toast-Swift](https://github.com/BastiaanJansen/Toast-Swift) - iOS 14以降のスタイルのトーストを簡単に作成するライブラリ。
* [XLActionController](https://github.com/xmartlabs/XLActionController) - 完全にカスタマイズ・拡張可能なアクションシートコントローラー。
* [Zingle](https://github.com/hemangshah/Zingle) - UINavigationBarの下にアラートを表示。

#### ぼかし
[トップに戻る](#readme) 

* [VisualEffectView](https://github.com/efremidze/VisualEffectView) - Tint Colorに対応したUIVisualEffectViewサブクラス。

#### ボタン
[トップに戻る](#readme) 

* [AHDownloadButton](https://github.com/amerhukic/AHDownloadButton) - Apple App Storeのダウンロードボタンに基づく、進捗・遷移アニメーション付きカスタマイズ可能なダウンロードボタン。
* [DOFavoriteButton](https://github.com/okmr-d/DOFavoriteButton) - かわいいアニメーションボタン。
* [ExpandableButton](https://github.com/DimaMishchenko/ExpandableButton) - カスタマイズ可能で使いやすい展開ボタン。
* [FloatingButton](https://github.com/exyte/FloatingButton) - SwiftUI製のカスタマイズしやすいフローティングボタンメニュー。
* [Floaty](https://github.com/kciter/Floaty) - iOS向けフローティングアクションボタン。
* [IGStoryButtonKit](https://github.com/KaoruMuta/IGStoryButtonKit) - Instagramストーリーズに着想を得た、豊富なアニメーション付きの使いやすいボタン。
* [LGButton](https://github.com/loregr/LGButton) - コードを一切書かずに美しいボタンを作成できる、完全カスタマイズ可能なネイティブUIControlサブクラス。
* [LTHRadioButton](https://github.com/rolandleth/LTHRadioButton) - 美しいアニメーション付きラジオボタン。
* [MultiToggleButton](https://github.com/yonat/MultiToggleButton) - タップでボタンのテキストを切り替えるUIButtonサブクラス。
* [NFDownloadButton](https://github.com/LeonardoCardoso/NFDownloadButton) - Netflixアプリのダウンロードボタンを再現した改良版。
* [PMSuperButton](https://github.com/pmusolino/PMSuperButton) - Storyboardからカスタマイズできる強力なUIButton。
* [RadioGroup](https://github.com/yonat/RadioGroup) - iOSに不足しているラジオボタングループ。
* [SwiftShareBubbles](https://github.com/takecian/SwiftShareBubbles) - iOS向けアニメーション付きソーシャル共有ボタンコントロール。
* [TransitionButton](https://github.com/AladinWay/TransitionButton) - 読み込みとトランジションのアニメーションに対応するUIButtonサブクラス。

#### カレンダー
[トップに戻る](#readme) 

* [CalendarKit](https://github.com/richardtop/CalendarKit) - 完全カスタマイズ可能なカレンダー日表示。
* [CalendarView](https://github.com/mmick66/CalendarView) - 縦横のレイアウト・スクロールと、ネイティブカレンダーイベントの表示に対応するカレンダーコンポーネント。
* [DateTimePicker](https://github.com/itsmeichigo/DateTimePicker) - iOS向けのより美しい日付・時刻選択UIコンポーネント。
* [ElegantCalendar](https://github.com/ThasianX/ElegantCalendar) - SwiftUIに欠けていた洗練された全画面カレンダー。
* [HorizonCalendar](https://github.com/airbnb/HorizonCalendar) - シンプルな日付ピッカーからフル機能のカレンダーアプリまで幅広く対応する、宣言的で高性能なiOSカレンダーUIコンポーネント。
* [JTAppleCalendar](https://github.com/patchthecode/JTAppleCalendar) - UIカレンダー管理ツール。
* [KVKCalendar](https://github.com/kvyatkovskys/KVKCalendar) - Appleプラットフォーム向けの非常に高いカスタマイズ性を持つカレンダー 📅
* [OBCalendar](https://github.com/oBilet/OBCalendar) - シンプルさとカスタマイズ性を重視し、美しく機能的なカレンダーUIを手軽に構築。
* [Workaholic](https://github.com/hemangshah/Workaholic) - GitHub風の作業コントリビューションタイムライン。
* [Yotei](https://github.com/claustrofob/Yotei) - iOS向けモジュール式でカスタマイズ可能なSwiftUI/UIKitカレンダーパッケージ。

#### カード
[トップに戻る](#readme) 

* [CardNavigation](https://github.com/james01/CardNavigation) - ビューコントローラーをインタラクティブなカードスタックとして表示するナビゲーションコントローラー。
* [CardParts](https://github.com/intuit/CardParts) - iOS開発者向けにUIKit上に構築されたリアクティブなカードベースUIフレームワーク。
* [VerticalCardSwiper](https://github.com/JoniVR/VerticalCardSwiper) - UICollectionViewで構築した、Shazam Discover UIとTinderを組み合わせたUI。

#### フォーム
[トップに戻る](#readme) 

* [Carbon](https://github.com/ra1028/Carbon) - 🚴 UITableViewとUICollectionViewでコンポーネントベースUIを構築する宣言的ライブラリ。
* [Eureka](https://github.com/xmartlabs/Eureka) - 洗練されたiOSフォームビルダー。
* [FDBarGauge](https://github.com/fulldecent/FDBarGauge) - オーディオミキサーのレベルインジケーターを再現。
* [Former](https://github.com/ra1028/Former) - UITableViewベースのフォームを簡単に作成できる、完全カスタマイズ可能なライブラリ。
* [ObjectForm](https://github.com/haojianzong/ObjectForm) - クラスモデル用フォームを構築するシンプルで強力なライブラリ。
* [SwiftyFORM](https://github.com/neoneye/SwiftyFORM) - 検証可能なフォーム。

#### HUD
[トップに戻る](#readme) 

* [EZLoadingActivity](https://github.com/Esqarrouth/EZLoadingActivity) - 軽量な読み込みアクティビティHUD。
* [GradientLoadingBar](https://github.com/fxm90/GradientLoadingBar) - アニメーション付きグラデーション読み込みバー。
* [KRProgressHUD](https://github.com/krimpedance/KRProgressHUD) - 美しくカスタマイズ可能な進捗HUD。
* [PKHUD](https://github.com/pkluz/PKHUD) - Apple HUDの再実装。

#### ラベル
[トップに戻る](#readme) 

* [ActiveLabel](https://github.com/optonaut/ActiveLabel.swift) - ハッシュタグ（#）、メンション（@）、URL（http://）に対応したUILabelのドロップイン代替。
* [Atributika](https://github.com/psharanda/Atributika) - HTMLタグ、リンク、ハッシュタグ、メンションをNSAttributedStringに変換し、UILabel代替を使ってクリック可能にします。
* [CountdownLabel](https://github.com/suzuki-0000/CountdownLabel) - モーフィングアニメーションと便利な機能を備えたシンプルなカウントダウンUILabel。
* [GlitchLabel](https://github.com/kciter/GlitchLabel) - iOS向けグリッチ効果UILabel。
* [IncrementableLabel](https://github.com/tbaranes/IncrementableLabel) - UILabel内の数値を増減するUILabelサブクラス。
* [KDEDateLabel](https://github.com/delannoyk/KDEDateLabel) - 「〜前」の形式を簡単に扱えるよう自動更新するUILabelサブクラス。
* [LTMorphingLabel](https://github.com/lexrus/LTMorphingLabel) - UILabel向けの優雅なモーフィング効果。
* [Nantes](https://github.com/instacart/Nantes) - TTTAttributedLabelの代替。
* [TriLabelView](https://github.com/mukeshthawani/TriLabelView) - iOS向け三角形コーナーラベルビュー。

#### メニュー
[トップに戻る](#readme) 

* [AKSwiftSlideMenu](https://github.com/ashishkakkad8/AKSwiftSlideMenu) - スライドメニュー（ドロワー）。
* [CircleMenu](https://github.com/Ramotion/circle-menu) - 円形レイアウトとMaterial Designアニメーションを備えた、シンプルで洗練されたUIメニュー。
* [ENSwiftSideMenu](https://github.com/evnaz/ENSwiftSideMenu) - スライド式サイドメニュー。
* [FanMenu](https://github.com/exyte/fan-menu) - Macawベースの円形レイアウトメニュー。
* [FlowingMenu](https://github.com/yannickl/FlowingMenu) - 流れるようなバウンス効果でメニューを表示するインタラクティブなビュー遷移。
* [GuillotineMenu](https://github.com/Yalantis/GuillotineMenu) - ギロチンスタイルのメニュー。
* [HHFloatingView](https://github.com/hemangshah/HHFloatingView) - アプリに簡単に設定できるフローティングビュー。
* [InteractiveSideMenu](https://github.com/handsomecode/InteractiveSideMenu) - カスタマイズ可能なiOS向けインタラクティブサイドメニュー。
* [KWDrawerController](https://github.com/Kawoou/KWDrawerController) - 使いやすいドロワービューコントローラー。
* [MenuItemKit](https://github.com/cxa/MenuItemKit) - 画像とブロック（クロージャー）に対応する`UIMenuItem`。
* [Pagemenu](https://github.com/PageMenu/PageMenu) - ページネーション対応ビューコントローラー。
* [PagingKit](https://github.com/kazuhiro4949/PagingKit) - カスタマイズ可能なメニューUIを提供。
* [Panels](https://github.com/antoniocasero/Panels) - アプリにスライドパネルを簡単に追加するフレームワーク。
* [Parchment](https://github.com/rechsteiner/Parchment) - UICollectionView上に構築された、高度にカスタマイズ可能なメニュー付きページングビューコントローラー。
* [PopMenu](https://github.com/CaliCastle/PopMenu) - 😎 クールでカスタマイズ可能なポップアップ形式のiOSアクションシート。
* [SegmentIO](https://github.com/Yalantis/Segmentio) - iOS向けアニメーション付き上下セグメントメニュー。
* [SideMenu](https://github.com/jonkykong/SideMenu) - Facebookに着想を得たシンプルなiOS用サイドメニュー。左右に対応し、コーディング不要。
* [SlideMenuControllerSwift](https://github.com/dekatotoro/SlideMenuControllerSwift) - Google+、iQON、Feedly、Ameba iOSアプリに基づくiOSスライドメニュービュー。
* [SwipeMenuViewController](https://github.com/yysskk/SwipeMenuViewController) - スワイプ可能なタブ・メニュービューおよびビューコントローラー。
* [XLPagerTabStrip](https://github.com/xmartlabs/XLPagerTabStrip) - iOS向けAndroid PagerTabStrip。
* [YNDropDownMenu](https://github.com/younatics/YNDropDownMenu) - かわいらしいiOSドロップダウンメニュー。

#### ページネーション
[トップに戻る](#readme) 

* [CHIPageControl](https://github.com/ChiliLabs/CHIPageControl) - 単調なUIPageControlに代わる、クールなアニメーション付きページコントロール集。
* [FlexiblePageControl](https://github.com/shima11/FlexiblePageControl) - Instagram風の柔軟なUIPageControl。
* [iPages](https://github.com/blsage/iPages) - SwiftUIでスワイプ可能なページビューをすばやく実装 📝。
* [Pageboy](https://github.com/uias/Pageboy) - シンプルで情報量の多いページビューコントローラー。
* [PageController](https://github.com/hirohisa/PageController) - 無限ページングコントローラー。
* [SlideController](https://github.com/touchlane/SlideController) - ジェネリック型の力で構築されたUIPageViewControllerの代替。インタラクティブなタイトルナビゲーションでページ間をスワイプし、横または縦方向に無制限のページを設定できます。

#### 決済
[トップに戻る](#readme) 

* [AnimatedCardInput](https://github.com/netguru/AnimatedCardInput) - カスタマイズ可能で使いやすいクレジットカードUI。
* [Caishen](https://github.com/prolificinteractive/Caishen) - iOS向け決済カードUIとバリデーター。
* [iCard](https://github.com/eliakorkmaz/iCard) - SnapKit DSLを使った銀行カード生成ツール。
* [MFCard](https://github.com/MobileFirstInc/MFCard) - iOSアプリにクレジットカード決済を簡単に統合。
* [TPInAppReceipt](https://github.com/tikhop/TPInAppReceipt) - Appleのアプリ内課金レシートをローカルで読み取り・検証する軽量な純Swiftライブラリ。

#### 権限
[トップに戻る](#readme) 

* [AREK](https://github.com/ennioma/arek) - あらゆる種類のiOS権限を扱う、シンプルで使いやすいラッパー。
* [Permission](https://github.com/delba/Permission) - iOSで権限を要求するための統一API。
* [SPPermission](https://github.com/sparrowcode/PermissionsKit) - ネイティブUIとインタラクティブなアニメーションで簡単に権限を要求。

#### スクロールバー
[トップに戻る](#readme) 

* [DMScrollBar](https://github.com/batanus/DMScrollBar) - 減速、バウンス、ラバーバンドなどに対応した、あらゆるScrollView向けの優れたカスタマイズ可能なスクロールバー。

#### StackView
[トップに戻る](#readme) 

* [StackViewController](https://github.com/seedco/StackViewController) - UIStackViewの利用を簡略化。
* [TZStackView](https://github.com/tomvanzummeren/TZStackView) - iOS 7および8向けに再実装されたiOS 9 UIStackViewレイアウトコンポーネント。

#### スイッチ
[トップに戻る](#readme) 

* [MJMaterialSwitch](https://github.com/JaleelNazir/MJMaterialSwitch) - Google Material Designに着想を得た、iOS向けカスタマイズ可能なスイッチUI。
* [paper-switch](https://github.com/Ramotion/paper-switch) - スイッチをオンにすると親ビューを塗りつぶすMaterial Design UIモジュール。
* [Switch](https://github.com/T-Pham/Switch) - Interface Builderを完全にサポートするスイッチコントロール。

#### タブ
[トップに戻る](#readme) 

* [Adaptive Tab Bar](https://github.com/Ramotion/adaptive-tab-bar) - アダプティブなタブバー。
* [Animated Tab Bar](https://github.com/Ramotion/animated-tab-bar) - タブバー項目にアニメーションを追加するRAMAnimatedTabBarControllerモジュール。
* [CardTabBar](https://github.com/yusadogru/CardTabBar) - iOSタブバー項目にアニメーションを追加。
* [CircleBar](https://github.com/softhausHQ/CircleBar) - iOS向けの楽しく使いやすいタブバー・ナビゲーションコントローラー。
* [ColorMatchTabs](https://github.com/Yalantis/ColorMatchTabs) - タブを興味深い方法で表示。
* [DTPagerController](https://github.com/tungvoduc/DTPagerController) - 水平スクロールビューに複数のViewControllerを表示するコンテナビューコントローラー。
* [ESTabBarController](https://github.com/eggswift/ESTabBarController) - UITabBarControllerを継承した、高度にカスタマイズ可能なTabBarControllerコンポーネント。
* [HHTabBarView](https://github.com/hemangshah/HHTabBarView) - 軽量でカスタマイズ可能なタブバービュー。
* [PolioPager](https://github.com/YuigaWada/PolioPager) - SNKRSのような検索タブを備えた柔軟なTabBarController。
* [SwiftUIMaterialTabs](https://github.com/SwiftKickMobile/SwiftUIMaterialTabs) - Material 3風タブと固定ヘッダーを統合したSwiftUIライブラリ。
* [TabBar](https://github.com/onl1ner/TabBar) - SwiftUIアプリ向けの高度にカスタマイズ可能なタブバー。
* [Tabman](https://github.com/uias/Tabman) - インジケーターバー付きの強力なページングビューコントローラー。
* [TabPageViewController](https://github.com/EndouMari/TabPageViewController) - ページングビューコントローラーとスクロールタブビュー。

#### テンプレート
[トップに戻る](#readme) 

* [Stencil](https://github.com/stencilproject/Stencil) - シンプルで強力なテンプレート言語。
* [SwiftCssParser](https://github.com/100mango/SwiftCssParser) - 拡張可能なCSSパーサー。
* [Temple](https://github.com/GoodRequest/Temple) - 🗂️ 高度なプロジェクト・ファイルテンプレート。

#### テキストフィールド
[トップに戻る](#readme) 

* [CBPinEntryView](https://github.com/Fawxy/CBPinEntryView) - 使いやすく、非常にカスタマイズ可能なPIN入力。
* [CHIOTPField](https://github.com/ChiliLabs/CHIOTPField) - ワンタイムパスワード、SMSコード、PINコードなどに使えるテキストフィールド集。
* [DTTextField](https://github.com/iDhaval/DTTextField) - フローティングプレースホルダーとエラーラベルを備えたカスタムテキストフィールド。
* [FloatingLabelTextFieldSwiftUI](https://github.com/kishanraja/FloatingLabelTextFieldSwiftUI) - UIViewRepresentableを使わずSwiftUIのみで記述された、小型軽量で美しくカスタマイズ可能なフローティングラベルテキストフィールド用フレームワーク。
* [HTYTextField](https://github.com/hanton/HTYTextField) - 弾むプレースホルダー付きUITextField。
* [iTextField ⌨️](https://github.com/blsage/iTextField) - SwiftUI内で完全に動作する、`UITextField`のフルラッパー 🦅。
* [PasswordTextField](https://github.com/PiXeL16/PasswordTextField) - パスワードの表示・非表示を切り替えるアイコン付きカスタムTextField。適切なパスワードポリシーを強制します。
* [SkyFloatingLabelTextField](https://github.com/Skyscanner/SkyFloatingLabelTextField) - 「フローティングラベルパターン」を実装した、美しく柔軟なテキストフィールドコントロール。
* [StyledTextKit](https://github.com/GitHawkApp/StyledTextKit) - 属性付き文字列を宣言的に構築し、高速に描画するライブラリ。
* [TextFieldCounter](https://github.com/serralvo/TextFieldCounter) - 愛着の持てるUXを備えたUITextField文字数カウンター。
* [TextFieldEffects](https://github.com/raulriera/TextFieldEffects) - すぐに使えるUITextField向け各種エフェクト。
* [UITextField-Navigation](https://github.com/T-Pham/UITextField-Navigation) - UITextFieldのキーボードに次へ、前へ、完了ボタンを追加。高度にカスタマイズ可能。
* [VKPinCodeView](https://github.com/Sunspension/VKPinCodeView) - PIN入力用のシンプルで洗練されたUIコンポーネント。

#### トランジション
[トップに戻る](#readme) 

* [BubbleTransition](https://github.com/andreamazz/BubbleTransition) - 簡単に使えるバブルトランジション。
* [Cards XI](https://github.com/PaoloCuscela/Cards) - iOS 11 App Store風の素晴らしいカードビュー。
* [EasyTransitions](https://github.com/marcosgriselli/EasyTransitions) - カスタムのインタラクティブなUIViewControllerトランジションを簡単に作成。
* [Hero](https://github.com/HeroTransitions/Hero) - iOS向けの洗練されたトランジションライブラリ。
* [ImageTransition](https://github.com/shtnkgm/ImageTransition) - トランジション中の画像を滑らかにアニメーションするライブラリ。
* [Jelly](https://github.com/SebastianBoldt/Jelly) - 数行のコードでカスタムビューコントローラートランジションを実現。
* [LiquidSwipe](https://github.com/exyte/LiquidSwipe) - 液体のようなナビゲーションアニメーション。
* [MijickNavigattie](https://github.com/Mijick/NavigationView) - SwiftUIで簡単にナビゲーション。
* [MusicPlayerTransition](https://github.com/xxxAIRINxxx/MusicPlayerTransition) - Apple Music iOSアプリ風のカスタムインタラクティブトランジション。
* [NavigationTransitions](https://github.com/davdroman/swiftui-navigation-transitions) - SwiftUIのみのナビゲーショントランジション。
* [PanSlip](https://github.com/k-lpmg/PanSlip) - PanGestureを使ってUIViewControllerやUIView上のビューを閉じる。
* [PinterestSwift](https://github.com/demonnico/PinterestSwift) - Pinterest風トランジション。
* [RevealingSplashView](https://github.com/PiXeL16/RevealingSplashView) - Twitterのスプラッシュに着想を得た、コンテンツをアニメーションで表示するスプラッシュビュー。
* [SamuraiTransition](https://github.com/hachinobu/SamuraiTransition) - 洗練された切断アニメーションを特徴とするViewControllerトランジション集を提供するSwiftライブラリ。
* [SPLarkController](https://github.com/ivanvorobei/SPLarkController) - 2つのコントローラー間のカスタムトランジション。上方向に移動。
* [SPStorkController](https://github.com/ivanvorobei/SPStorkController) - Apple Musicの再生中コントローラー。高さをカスタマイズ可能。
* [StarWars.iOS](https://github.com/Yalantis/StarWars.iOS) - ビューコントローラーを細かな破片に砕くトランジションアニメーション。
* [Transition](https://github.com/Touchwonders/Transition) - インタラクティブで中断可能なカスタムViewControllerトランジションを簡単に実装。

#### 3D
[トップに戻る](#readme) 

* [Insert3D](https://github.com/Viktoo/Insert3D) - 3Dモデルを埋め込む最速の方法 🚀。

#### UICollectionView
[トップに戻る](#readme) 

* [ASCollectionView](https://github.com/abdullahselek/ASCollectionView) - Airbnbに着想を得た軽量なカスタムコレクションビュー。
* [AZCollectionViewController](https://github.com/AfrozZaheer/AZCollectionViewController) - CollectionViewにダミービュー付きページネーションを簡単に統合し、数分でInstagram Discoverを作成。
* [Blueprints](https://github.com/zenangst/Blueprints) - コレクションビューのフローレイアウトを扱いやすくするフレームワーク。
* [BouncyLayout](https://github.com/roberthein/BouncyLayout) - セルが弾むコレクションビューレイアウト。
* [CardsLayout](https://github.com/filletofish/CardsLayout) - カードデザインの美しいカスタムCollectionViewレイアウト。
* [CenteredCollectionView](https://github.com/BenEmdon/CenteredCollectionView) - ページングとセルの中央揃えに対応する軽量なUICollectionViewLayout。
* [CheckmarkCollectionViewCell](https://github.com/yonat/CheckmarkCollectionViewCell) - 選択時はチェックボックス、未選択時は空の円を表示するUICollectionViewCell。Photos.appの「選択」モード風。
* [CollectionViewShelfLayout](https://github.com/pitiphong-p/CollectionViewShelfLayout) - 入れ子のUITableView/UICollectionViewというハックを使わず、App Storeの特集タブのように項目を行で表示するUICollectionViewLayoutサブクラス。
* [CollectionViewSlantedLayout](https://github.com/yacir/CollectionViewSlantedLayout) - 傾斜したコンテンツを表示するUICollectionViewLayout。
* [Drag and Drop UICollectionView](https://github.com/mmick66/KDDragAndDropCollectionView) - 複数のUICollectionView間でデータをドラッグ＆ドロップ。
* [FSPagerView](https://github.com/WenchaoD/FSPagerView) - 洗練された画面スライドライブラリ。バナービュー、商品紹介、ウェルカム・ガイドページ、画面・ViewControllerスライダーの作成に便利。
* [Gliding Collection](https://github.com/Ramotion/gliding-collection) - 滑らかで流れるように動き、カスタマイズ可能なUICollectionView Controller向けの優れたソリューション。
* [GoodProvider](https://github.com/GoodRequest/GRProvider) - 🚀 データ表示の基本的な用途を簡略化するUITableViewおよびUICollectionViewプロバイダー。
* [GravitySlider](https://github.com/ApplikeySolutions/GravitySlider) - 標準のUICollectionViewフローレイアウトに代わる美しい選択肢。
* [ShelfView-iOS](https://github.com/tdscientist/ShelfView-iOS) - 棚に本を表示するiOSカスタムビュー。
* [SimpleSource](https://github.com/Squarespace/simple-source ) - iOSのテーブルビューとコレクションビューを簡単かつ型安全に扱うツール。
* [SwiftSpreadsheet](https://github.com/stuffrabbit/SwiftSpreadsheet) - 完全にカスタマイズ可能なスプレッドシートCollectionViewLayout。
* [TagCellLayout](https://github.com/riteshhgupta/TagCellLayout) - タグを左・中央・右揃えで配置するUICollectionViewレイアウト。
* [UICollectionViewSplitLayout](https://github.com/yahoojapan/UICollectionViewSplitLayout) - コレクションビューの応答性を高めるUICollectionViewSplitLayout。
* [VegaScroll](https://github.com/AppliKeySolutions/VegaScroll) - UICollectionView向け軽量アニメーションフローレイアウト。

#### UITableView
[トップに戻る](#readme) 

* [AZTableViewController](https://github.com/AfrozZaheer/AZTableViewController) - プレースホルダービュー付きページネーションを簡単かつ洗練された方法で統合。
* [CollapsibleTableSectionViewController](https://github.com/jeantimex/CollapsibleTableSectionViewController) - テーブルビューの折りたたみ可能なセクションをサポートするライブラリ。
* [DGElasticPullToRefresh](https://github.com/gontovnik/DGElasticPullToRefresh) - 弾力的なプル・トゥ・リフレッシュ。
* [DiffableDataSources](https://github.com/ra1028/DiffableDataSources) - 💾 UITableView/UICollectionViewDiffableDataSourceをバックポートするライブラリ。
* [DTTableViewManager](https://github.com/DenTelezhkin/DTTableViewManager) - ジェネリクスと関連型を活用した、プロトコル指向のUITableView管理。
* [ExpandableCell](https://github.com/younatics/ExpandableCell) - 簡潔でバグのない形に全面改修されたYNExapnadableCell。iOSでセルを簡単に展開・折りたたみでき、UITableViewCellを自由にカスタマイズ可能。insertRowsとdeleteRowsの扱いにくさを解消し、ExpandableDelegateを継承するだけで使えます。
* [FDTextFieldTableViewCell](https://github.com/fulldecent/FDTextFieldTableViewCell) - セルにUITextFieldを追加して適切に配置。
* [folding-cell](https://github.com/Ramotion/folding-cell) - 折りたたみセルのトランジション。
* [GridView](https://github.com/KyoheiG3/GridView) - 時刻表、スプレッドシート、ページングなどにカスタマイズ可能。
* [HGPlaceholders](https://github.com/HamzaGhazouani/HGPlaceholders) - プロジェクト内の任意のUITableView/UICollectionViewにプレースホルダーや空状態を表示する便利なライブラリ。
* [OKTableViewLiaison](https://github.com/okcupid/OKTableViewLiaison) - UITableViewをより適切に管理するためのフレームワーク。
* [ParallaxHeader](https://github.com/romansorochak/ParallaxHeader) - UIScrollView/UITableViewに視差ヘッダーを簡単に追加。
* [Persei](https://github.com/Yalantis/Persei) - UITableView / UICollectionView / UIScrollView向けアニメーション付きトップメニュー。
* [PullToRefreshSwift](https://github.com/dekatotoro/PullToRefreshSwift) - プル・トゥ・リフレッシュライブラリ。
* [QuickTableViewController](https://github.com/bcylin/QuickTableViewController) - 設定用UITableViewを簡単に作成。
* [ReverseExtension](https://github.com/marty-suzuki/ReverseExtension) - テーブルビューの下部からセルを挿入できるUITableView拡張。
* [SelectionList](https://github.com/yonat/SelectionList) - UITableViewベースのシンプルな単一選択・複数選択チェックリスト。
* [Shoyu](https://github.com/xai3/Shoyu) - UITableViewの構造を簡単に表現。
* [SwiftyComments](https://github.com/tsucres/SwiftyComments) - 展開・折りたたみ可能なセルを階層化し、洗練されたスレッド形式の議論を簡単に構築。
* [SwipeCellKit](https://github.com/SwipeCellKit/SwipeCellKit) - 標準Mail.appに基づくスワイプ可能なUITableViewCell。
* [WLEmptyState](https://github.com/WizelineLabs/WLEmptyState) - UITableViewのデータセットが空の場合のビューをカスタマイズできるコンポーネント。
* [YNExpandableCell](https://github.com/younatics/YNExpandableCell) - iOS向けの優れた展開・折りたたみ可能なテーブルビューセル。

#### チュートリアル
[トップに戻る](#readme) 

* [AwesomeSpotlightView](https://github.com/aleksandrshoshiashvili/AwesomeSpotlightView) - チュートリアルやコーチマークを作成。
* [BWWalkthrough](https://github.com/ariok/BWWalkthrough) - iOSアプリ向けのカスタムチュートリアルを構築するクラス。
* [ConcentricOnboarding](https://github.com/exyte/ConcentricOnboarding) - タップ操作付きチュートリアル・オンボーディングフロー向けSwiftUIライブラリ。
* [Gecco](https://github.com/xai3/Gecco) - iOS向けスポットライトビュー。
* [Instructions](https://github.com/ephread/Instructions) - アプリのチュートリアルやガイドツアーを作成するライブラリ。
* [OnboardKit](https://github.com/NikolaKirev/OnboardKit) - iOSアプリ向けのカスタマイズ可能なユーザーオンボーディング。
* [PaperOnboarding](https://github.com/Ramotion/paper-onboarding) - Material DesignのUIスライダー。
* [SuggestionsKit](https://github.com/AlphanumericCharactersOrSingleHyphenz/SuggestionsKit) - アプリの機能をユーザーに案内するライブラリ。
* [SwiftyOnboard](https://github.com/juanpablofernandez/SwiftyOnboard) - 美しいオンボーディング体験を作成できるiOSフレームワーク。
* [SwiftyWalkthrough](https://github.com/ruipfcosta/SwiftyWalkthrough) - アプリで優れたチュートリアル体験を作る最も簡単な方法。

### ユーティリティ
*プロジェクトに役立つ便利なユーティリティ集* [トップに戻る](#readme) 

* [AlexaSkillsKit](https://github.com/choefele/AlexaSkillsKit) - カスタムAlexaスキルを開発。
* [AmoreKit](https://github.com/AmoreComputer/AmoreKit) - App Store外で配布するmacOSアプリのライセンスキーを販売・検証。
* [ApplyStyleKit](https://github.com/shindyu/ApplyStyleKit) - メソッドチェーンでUIKitにスタイルを優雅に適用。
* [Basis](https://github.com/typelift/Basis) - 純粋な宣言型プログラミング。
* [Bow](https://github.com/bow-swift/bow) - 型付き関数型プログラミングの補助ライブラリ。
* [CallbackURLKit](https://github.com/phimage/CallbackURLKit) - x-callback-url（アプリ間通信）の実装。
* [Closures](https://github.com/vhesener/Closures) - UIKitとFoundation向けのSwiftらしいクロージャー。
* [Codextended](https://github.com/JohnSundell/Codextended) - Codable APIの型推論を強化する拡張。
* [Curry](https://github.com/thoughtbot/Curry) - 関数のカリー化。
* [Delegated](https://github.com/dreymonde/Delegated) - メモリリークのないクロージャーベースのデリゲーション。
* [DifferenceKit](https://github.com/ra1028/DifferenceKit) - 💻 高速で柔軟なO(n)差分アルゴリズムフレームワーク。
* [Differific](https://github.com/zenangst/Differific) - 高速で便利な差分フレームワーク。
* [Dollar](https://github.com/ankurp/Dollar) - JavaScriptのLo-DashやUnderscoreに類似。
* [DuctTape](https://github.com/marty-suzuki/DuctTape) - 📦 KeyPathとdynamicMemberLookupに基づくSwiftのシンタックスシュガー。
* [EtherWalletKit](https://github.com/SteadyAction/EtherWalletKit) - iOS向けEthereumウォレットツールキット。サーバーやブロックチェーンの知識なしでウォレットを実装できます。
* [ExceptionCatcher](https://github.com/sindresorhus/ExceptionCatcher) - Objective-C例外を捕捉。
* [EZSwiftExtensions](https://github.com/Esqarrouth/EZSwiftExtensions) - 標準型やクラスが本来こうあるべきという機能を提供。
* [FlagAndCountryCode](https://github.com/exyte/FlagAndCountryCode) - すべての国の電話番号コードと国旗を提供。UIKitとSwiftUIに対応。
* [FluentQuery](https://github.com/MihaelIsaev/FluentQuery) :penguin: - 強力で使いやすいクエリビルダー。
* [GoodExtensions-iOS](https://github.com/GoodRequest/GoodExtensions-iOS) - 📑 便利で頻繁に使われる拡張機能のコレクション。
* [GoodUIKit](https://github.com/GoodRequest/GoodUIKit) - 📑 迅速かつ効率的な開発のための、再利用可能なUIスニペットを集めた拡張ライブラリ。
* [Highlighter](https://github.com/younatics/Highlighter) - 好きなものをハイライト！UITableViewCellなどのクラス内にあるUILabel、UITextView、UITextField、UIButtonなどのUIオブジェクトを自動検出します。
* [LifetimeTracker](https://github.com/krzysztofzablocki/LifetimeTracker) - アプリ開発中にretain cycleやメモリの問題をすぐに検出。
* [Lumos](https://github.com/sushinoya/Lumos) - Objective-Cランタイム関数を使いやすくするAPI。
* [ObjectiveKit](https://github.com/marmelroy/ObjectiveKit) - Objective-Cランタイム関数向けAPI。
* [OpenSourceController](https://github.com/floriangbh/OpenSourceController) - アプリで使用されるライブラリのライセンスを表示する最も簡単な方法。
* [Percentage](https://github.com/sindresorhus/Percentage) - パーセンテージを読みやすく型安全に扱う。
* [Periphery](https://github.com/peripheryapp/periphery) - Swiftプロジェクトの未使用コードを特定するツール。
* [Playbook](https://github.com/playbook-ui/playbook-ios) - 📘 UIコンポーネントを個別に開発し、そのスナップショットを自動生成するライブラリ。
* [PrivacyFlash Pro](https://github.com/privacy-tech-lab/privacyflash-pro) - Swift製iOSアプリのコードからプライバシーポリシーを生成。
* [protobuf-swift](https://github.com/alexeyxo/protobuf-swift) - Protocol Buffers。
* [Prototope](http://khan.github.io/Prototope/) - JSブリッジを備えた、プロトタイピング向け軽量インターフェースライブラリ。
* [R.swift](https://github.com/mac-cain13/R.swift) - 画像、セル、セグエなどのリソースを型安全かつ自動補完付きで取得するツール。
* [RandomKit](https://github.com/nvzqz/RandomKit/) :penguin: - ランダムデータ生成。
* [ReadabilityKit](https://github.com/exyte/ReadabilityKit) - ニュース、記事、全文のプレビュー抽出ツール。
* [ReerKit](https://github.com/reers/ReerKit) - iOS/macOS/Linuxの開発ワークフローを強化する、拡張機能とユーティリティ関数を備えた強力なSwift基盤ライブラリ。
* [ResourceKit](https://github.com/bannzai/ResourceKit) - リソースの自動補完を可能にします。
* [Result](https://github.com/antitypical/Result) - 任意の処理の成功・失敗をモデル化する型。
* [Rugby](https://github.com/swiftyfinch/Rugby) - 🏈 CocoaPodsをキャッシュし、Xcodeプロジェクトの再ビルドとインデックス作成を高速化。
* [Runes](https://github.com/thoughtbot/Runes) - 関数型演算子：flatMap、map、apply。
* [Solar](https://github.com/ceeK/Solar) - 位置情報から日の出・日の入り時刻を計算。
* [SpriteKit+Spring](https://github.com/ataugeron/SpriteKit-Spring) - SKActionでUIViewのスプリングアニメーションを再現するSpriteKit API。
* [Sugar](https://github.com/hyperoslo/Sugar) - Cocoaと相性の良い、ちょっとした便利機能。
* [swift-build](https://github.com/brightdigit/swift-build) - あらゆるプラットフォームでSwiftパッケージをビルド・テストするGitHub Action。
* [swift-protobuf](https://github.com/apple/swift-protobuf) :penguin: - Google Protocol Buffersを利用するためのプラグインとランタイムライブラリ。
* [SwiftAutoGUI](https://github.com/NakaokaRei/SwiftAutoGUI) - マウスとキーボードをプログラムから操作する、SwiftでmacOSを制御するライブラリ。
* [SwiftBoost](https://github.com/sparrowcode/SwiftBoost) - 開発プロセスを加速するSwift拡張機能集。
* [Swiftbot](https://github.com/noppefoxwolf/Swiftbot) - Slack上でSwiftコードを実行。
* [SwifterSwift](https://github.com/SwifterSwift/SwifterSwift) - 生産性を高める500以上のネイティブ拡張機能を集めた便利なコレクション。
* [SwiftGen-Storyboard](https://github.com/SwiftGen/SwiftGen#uistoryboard) - すべてのStoryboard、Scene、Segueの定数向け`enum`と便利なアクセサーを自動生成するツール。
* [SwiftLinkPreview](https://github.com/LeonardoCardoso/SwiftLinkPreview) - URLからタイトル、関連テキスト、画像などの情報を取得してプレビューを生成。
* [SwiftPlantUML](https://github.com/MarcoEidinger/SwiftPlantUML) - SwiftソースコードからUMLクラス図を生成するコマンドラインツール兼Swiftパッケージ。Xcode Source Editor Extensionとしても利用可能。
* [SwiftRandom](https://github.com/thellimist/SwiftRandom) - 小型のランダムデータ生成器。
* [SwiftRater](https://github.com/takecian/SwiftRater) - iPhoneアプリのユーザーにレビューを促すユーティリティ。
* [SwiftTweaks](https://github.com/bryanjclark/SwiftTweaks) - 再コンパイルせずにiOSアプリを調整。
* [Swiftx](https://github.com/typelift/Swiftx) - あらゆるプロジェクト向けの関数型データ型と関数。
* [SwiftyUtils](https://github.com/tbaranes/SwiftyUtils) - 各プロジェクトで必要となる再利用可能なコード集。
* [Swiftz](https://github.com/typelift/Swiftz) - 関数型プログラミング。
* [SyntaxKit](https://github.com/brightdigit/SyntaxKit) - 宣言的な構文でSwiftコードをプログラムから生成。
* [Then](https://github.com/devxoul/Then) - イニシャライザー向けの非常に便利なシンタックスシュガー。
* [TSAO](https://github.com/lilyball/swift-tsao) - 型安全なAssociated Objects。
* [URLQueryItemEncoder](https://github.com/pitiphong-p/URLQueryItemEncoder) - Encodable値をURLQueryItem配列にエンコードするEncoder。
* [UTIKit](https://github.com/cockscomb/UTIKit) - UTI（Uniform Type Identifier）ラッパー。
* [Vaccine](https://github.com/zenangst/Vaccine) - 再コンパイル病からアプリを守る。
* [WeakableSelf](https://github.com/vincent-pradeilles/weakable-self) - クロージャー内の[weak self]とguard文をカプセル化するマイクロフレームワーク。
* [WhatsNew](https://github.com/BalestraPatrick/WhatsNew) - Pages、Numbers、Keynoteのように、アプリ更新後に新機能を紹介。
* [WhatsNewKit](https://github.com/SvenTiigi/WhatsNewKit) - アプリの新機能を紹介。
* [XestiMonitors](https://github.com/eBardX/XestiMonitors) - 拡張可能なモニタリングフレームワーク。
* [ZamzamKit](https://github.com/basememara/ZamzamKit) - Standard Library、Foundation、UIKit向けの小さなユーティリティと拡張機能集。

### バリデーション
*バリデーションライブラリ集。* [トップに戻る](#readme) 

* [ATGValidator](https://github.com/altayer-digital/ATGValidator) - iOS向けのフォーム・カード検証に対応するルールベースのバリデーションフレームワーク。
* [FormValidatorSwift](https://github.com/ustwo/formvalidator-swift) - テキストフィールドやテキストビューの入力を簡単に検証。
* [Input Mask](https://github.com/RedMadRobot/input-mask-ios) - パターンベースのiOSユーザー入力フォーマッター、パーサー、バリデーター。
* [RxValidator](https://github.com/vbmania/RxValidator) - シンプルで拡張性・柔軟性のあるバリデーションチェッカー。
* [SwiftValidator](https://github.com/SwiftValidatorCommunity/SwiftValidator) - ルールベースのバリデーションライブラリ。
* [SwiftValidators](https://github.com/gkaimakas/SwiftValidators) - iOS向け文字列検証（validator.jsに着想）。
* [ValidatedPropertyKit](https://github.com/SvenTiigi/ValidatedPropertyKit) - Property Wrapperでプロパティを簡単に検証 👮。

#### 電話番号
*電話番号を扱うライブラリ。* [トップに戻る](#readme) 

* [NKVPhonePicker](https://github.com/NikKovIos/NKVPhonePicker) - 国番号の選択を簡単にするUITextFieldサブクラス。
* [PhoneNumberKit](https://github.com/marmelroy/PhoneNumberKit) - 国際電話番号を解析、フォーマット、検証するフレームワーク。Googleのlibphonenumberに着想。

### バージョン管理
[トップに戻る](#readme) 

* [AppVersionMonitor](https://github.com/eure/AppVersionMonitor) - iOSアプリのバージョンを簡単に監視。
* [Siren](https://github.com/ArtSabintsev/Siren) - アプリの新バージョンが利用可能になるとユーザーに通知し、更新を促す。
* [Version](https://github.com/mrackwitz/Version) - セマンティックバージョンを表現・比較。
* [Version Tracker Swift](https://github.com/tbaranes/VersionTrackerSwift) - iOS、OS X、tvOSアプリ向けバージョントラッカー。

### 動画
[トップに戻る](#readme) 

* [BMPlayer](https://github.com/BrikerMan/BMPlayer) - AVPlayerベースのiOS動画プレーヤー。横・縦画面に対応し、スライド操作で音量、明るさ、シークを調整できます。
* [Cabbage](https://github.com/VideoFlint/Cabbage) - AVFoundation上に構築された動画合成フレームワーク。
* [Kitsunebi](https://github.com/noppefoxwolf/Kitsunebi) - OpenGLESを使ったアルファチャンネル動画アニメーションのオーバーレイ再生ビュー。
* [MMPlayerView](https://github.com/MillmanY/MMPlayerView) - ビュー上にカスタムAVPlayerLayerを配置し、YouTubeやFacebook風の効果でプレーヤーを遷移。
* [MobilePlayer](https://github.com/sahin/mobileplayer-ios) - 強力で完全にカスタマイズ可能なiOSメディアプレーヤー。
* [NextLevelSessionExporter](https://github.com/NextLevel/NextLevelSessionExporter) - メディアのエクスポートとトランスコード。
* [Player](https://github.com/piemonte/Player) - メディア再生・ストリーミング用のシンプルなドロップインiOS動画プレーヤーコンポーネント。
* [PlayerView](https://github.com/davidlondono/PlayerView) - UIViewを使った使いやすい動画プレーヤー。再生速度、スクリーンショット、プレーヤー状態のコールバック・デリゲートを管理。
* [PryntTrimmerView](https://github.com/HHK1/PryntTrimmerView) - 動画のトリミングとクロップ。
* [SwiftFFmpeg](https://github.com/sunlubo/SwiftFFmpeg) - FFmpeg C APIのラッパー。
* [SwiftVideoBackground](https://github.com/dingwilson/SwiftVideoBackground) - 動画背景を実装する使いやすいUIViewサブクラス。
* [Swifty360Player](https://github.com/abdullahselek/Swifty360Player) - AVPlayerからストリーミングするiOS向け360度動画プレーヤー。
* [YiVideoEditor](https://github.com/coderyi/YiVideoEditor) - 動画の回転、クロップ、レイヤー（ウォーターマーク）や音声（音楽）の追加を行うライブラリ。

## サーバーレス

* [Azure Functions for Swift](https://github.com/SalehAlbuga/azure-functions-swift) :penguin: - Azure Functions向けSwiftワーカー。


### 貢献

まず[貢献ガイドライン](.github/CONTRIBUTING.md)をご確認ください。ここに掲載されているパッケージやプロジェクトがメンテナンスされていない、または掲載に適さない場合は、このファイルを改善するプルリクエストをお送りください。[貢献者の皆さん](https://github.com/matteocrippa/awesome-swift/graphs/contributors)、ありがとうございます！