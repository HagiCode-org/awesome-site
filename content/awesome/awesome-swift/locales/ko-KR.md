# 멋진 Swift
 
<!-- 

이 파일을 수정하지 말고 CONTENTS.JSON을 수정해 주세요. 감사합니다 :-)

 -->



| 멋진 | Linux | 프로젝트 | 업데이트 |
|:-------:|:-----:|:--------:|:-------:|
| [![멋진](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) | :penguin: | 1107 | 2026년 8월 3일 |

다음과 함께합니다:

[![Codemotion](https://github.com/matteocrippa/awesome-swift/blob/master/.github/images/codemotion_logo.png?raw=true)](https://codemo.tech/partners)



### 목차

- [가이드](#guides)
  - [뉴스레터](#newsletter)
  - [공식 가이드](#official-guides)
  - [스타일 가이드](#style-guides)
  - [타사 가이드](#third-party-guides)
- [보일러플레이트](#boilerplates)
- [REPL](#repl)
- [편집기 지원](#editor-support)
  - [Emacs](#emacs)
  - [Google Colaboratory](#google-colaboratory)
  - [Vim](#vim)
- [벤치마크](#benchmark)
- [변환기](#converters)
- [기타 멋진 목록](#other-awesome-lists)
- [종속성 관리자](#dependency-managers)
- [패턴](#patterns)
- [기타](#misc)
- [라이브러리](#libs)
  - [접근성](#accessibility)
  - [AI](#ai)
  - [알고리즘](#algorithm)
  - [분석](#analytics)
  - [애니메이션](#animation)
  - [API](#api)
  - [앱 라우팅](#app-routing)
  - [App Store](#app-store)
  - [오디오](#audio)
  - [증강 현실](#augmented-reality)
  - [인증](#authentication)
  - [봇](#bots)
  - [캐시](#cache)
  - [차트](#chart)
  - [채팅](#chat)
  - [색상](#colors)
  - [명령줄](#command-line)
  - [동시성](#concurrency)
  - [통화](#currency)
  - [데이터 관리](#data-management)
    - [CBOR](#cbor)
    - [Core Data](#core-data)
    - [CSV](#csv)
    - [Firebase](#firebase)
    - [GraphQL](#graphql)
    - [JSON](#json)
    - [키-값 저장소](#key-value-store)
    - [MongoDB](#mongodb)
    - [다중 데이터베이스](#multi-database)
    - [ORM](#orm)
    - [기타 데이터](#other-data)
    - [Realm](#realm)
    - [SQL 드라이버](#sql-drivers)
    - [SQLite](#sqlite)
    - [TOML](#toml)
    - [XML](#xml)
    - [YAML](#yaml)
    - [ZIP](#zip)
  - [날짜](#date)
  - [의존성 주입](#dependency-injection)
  - [기기](#device)
  - [문서화](#documentation)
  - [이메일](#email)
  - [임베디드 시스템](#embedded-systems)
    - [주변 장치](#peripherals)
  - [이벤트](#events)
  - [파일](#files)
  - [글꼴](#fonts)
  - [게임 엔진](#game-engine)
    - [2D](#game-engine-2d)
  - [게임](#games)
  - [제스처](#gesture)
  - [하드웨어](#hardware)
    - [3D Touch](#3d-touch)
    - [Bluetooth](#bluetooth)
    - [카메라](#camera)
      - [바코드](#barcode)
    - [햅틱 피드백](#haptic-feedback)
    - [iBeacon](#ibeacon)
    - [센서](#sensors)
  - [이미지](#images)
  - [키-값 코딩](#key-value-coding)
  - [키보드](#keyboard)
  - [Kit](#kit)
  - [레이아웃](#layout)
    - [자동 레이아웃](#auto-layout)
  - [현지화](#localization)
  - [위치](#location)
  - [로깅](#logging)
  - [지도](#maps)
  - [수학](#math)
  - [자연어 처리](#natural-language-processing)
  - [네트워크](#network)
    - [HTML](#html)
    - [메시징 프로토콜](#messaging-protocol)
    - [SOAP](#soap)
    - [소켓](#socket)
    - [웹 서버](#webserver)
  - [OCR](#ocr)
  - [최적화](#optimization)
  - [PDF](#pdf)
  - [품질](#quality)
  - [스크립팅](#scripting)
  - [SDK](#sdk)
  - [보안](#security)
    - [암호화](#cryptography)
    - [키체인](#keychain)
  - [스트리밍](#streaming)
  - [스타일링](#styling)
  - [SVG](#svg)
  - [시스템](#system)
  - [테스트](#testing)
    - [모의 객체](#mock)
  - [텍스트](#text)
  - [스레드](#thread)
  - [UI](#ui)
    - [경고](#alert)
    - [흐림](#blur)
    - [버튼](#button)
    - [달력](#calendar)
    - [카드](#cards)
    - [양식](#form)
    - [HUD](#hud)
    - [레이블](#label)
    - [메뉴](#menu)
    - [페이지 매김](#pagination)
    - [결제](#payment)
    - [권한](#permissions)
    - [스크롤 막대](#scroll-bars)
    - [스택 뷰](#stackview)
    - [스위치](#switch)
    - [탭](#tab)
    - [템플릿](#template)
    - [텍스트 필드](#textfield)
    - [전환](#transition)
    - [3D](#ui-3d)
    - [UICollectionView](#uicollectionview)
    - [UITableView](#uitableview)
    - [안내](#walkthrough)
  - [유틸리티](#utility)
  - [유효성 검사](#validation)
    - [전화번호](#phone-numbers)
  - [버전 관리자](#version-manager)
  - [비디오](#video)
- [서버리스](#serverless)

## 가이드
*Swift 관련 가이드를 모은 멋진 목록입니다.* 

### 뉴스레터
[맨 위로](#readme) 

* [Open Source Updates for Swift Projects](https://ossp-updates.beehiiv.com/) - Swift로 작성되었거나 Swift와 관련된 인기 및 신생 오픈 소스 프로젝트의 최신 소식을 격주로 전하는 뉴스레터입니다.

### 공식 가이드
[맨 위로](#readme) 

* [API Design Guidelines](https://www.swift.org/documentation/api-design-guidelines/) - Swift 공식 API 설계 지침입니다.
* [Apple eBook](https://books.apple.com/us/book/the-swift-programming-language-swift-5-7/id881256329) - Swift 초보자를 위한 Apple 공식 전자책입니다.
* [Getting Started](https://www.swift.org/getting-started/) - Swift 프로그래밍 언어의 사용 방법을 알아보세요.
* [Introducing SwiftUI](https://developer.apple.com/tutorials/swiftui) - 4시간 이상의 콘텐츠와 대화형 튜토리얼을 제공하는 SwiftUI 공식 튜토리얼입니다.

### 스타일 가이드
[맨 위로](#readme) 

* [Airbnb](https://github.com/airbnb/swift) - Airbnb 공식 스타일 가이드입니다.
* [Google](https://google.github.io/swift/) - Apple의 훌륭한 Swift 표준 라이브러리 스타일을 바탕으로 하며, Google 내 여러 Swift 프로젝트에서 얻은 사용 경험과 의견도 반영한 스타일 가이드입니다.
* [LinkedIn](https://github.com/linkedin/swift-style-guide) - LinkedIn 공식 스타일 가이드입니다.
* [Raywenderlich](https://github.com/kodecocodes/swift-style-guide) - 꼭 읽어야 할 Raywenderlich 가이드입니다.

### 타사 가이드
[맨 위로](#readme) 

* [30 Days of Swift](https://github.com/allenwong/30DaysofSwift) - 흥미로운 30일 튜토리얼입니다.
* [About Swift](https://github.com/NicolaLancellotti/about-swift) - Swift 언어를 다루는 플레이그라운드입니다.
* [Awesome Swift Education](https://github.com/hsavit1/Awesome-Swift-Education) - 필수 Swift 언어 주제를 체계적으로 정리한 목록입니다.
* [Conferences.digital](https://github.com/zagahr/Conferences.digital) - macOS 네이티브 앱에서 컨퍼런스 영상을 시청할 수 있습니다.
* [Developing iOS Apps with Swift](https://podcasts.apple.com/us/podcast/developing-ios-11-apps-with-swift/id1315130780) - Paul Hegarty가 진행하는 스탠퍼드 강좌입니다.
* [Hacking With Swift](https://www.hackingwithswift.com) - 30개의 실습 프로젝트를 통해 앱 개발을 가르치는 완전 무료 교육 과정입니다.
* [Ray Wenderlich Tutorials, Videos, Podcasts and books](https://www.kodeco.com) - 고품질 프로그래밍 튜토리얼입니다.
* [Swift & SwiftUI Tutorials](http://ww1.janeshswift.com) - SwiftUI를 쉽게 배울 수 있습니다.
* [Swift Education](https://github.com/swifteducation) - Swift와 앱 개발 교육 자료를 공유하는 교육자 커뮤니티입니다.
* [swift-tips](https://github.com/vincent-pradeilles/swift-tips) - Vincent Pradeilles가 전하는 유용한 팁 모음입니다.
* [SwiftDoc](https://sosumi.ai/) - 자동 생성된 문서입니다.
* [SwiftGuide CN](https://github.com/ipader/SwiftGuide) - 중국어로 작성된 가이드입니다.
* [SwiftTips](https://github.com/JohnSundell/SwiftTips) - John Sundell의 유용한 팁 모음입니다.

## 보일러플레이트

* [iOS project template](https://github.com/messeb/ios-project-template) - fastlane 레인, Travis CI 작업과 Codecov, SwiftLint용 HoundCI, Danger의 GitHub 통합 기능을 제공하는 iOS 프로젝트 템플릿입니다.
* [Model-View-Presenter template](https://github.com/onl1ner/ios-mvp-template) - MVP 패턴 기반 iOS 앱 개발을 빠르게 시작할 수 있도록 만든 유연하고 간편한 템플릿입니다.
* [Swift Module Template](https://github.com/fulldecent/swift6-module-template) - 재사용 가능한 훌륭한 모듈을 시작하기 위한 독자적인 의견이 담긴 템플릿입니다.

## REPL

* [Online Swift Playground](http://online.swiftplayground.run) - 온라인 Swift 플레이그라운드입니다.
* [SwiftFiddle](https://swiftfiddle.com) - Swift 코드를 작성하고 공유하며 삽입할 수 있는 플레이그라운드입니다.

## 편집기 지원
*즐겨 사용하는 편집기를 위한 지원입니다.* 

### Emacs
[맨 위로](#readme) 

* [swift-mode](https://github.com/swift-emacs/swift-mode) - 일부 flycheck 오류 지원을 포함한 Emacs 지원입니다.

### Google Colaboratory
[맨 위로](#readme) 

* [swift-colab](https://github.com/philipturner/swift-colab) - 브라우저에서 Swift를 실행할 수 있습니다.

### Vim
[맨 위로](#readme) 

* [swift-vim](https://github.com/keith/swift.vim) - Vim 런타임 파일입니다.
* [vim-polyglot](https://github.com/sheerun/vim-polyglot) - vim-swift를 포함한 Vim용 언어 팩입니다.

## 벤치마크

* [xcprofiler](https://github.com/giginet/xcprofiler) - 컴파일 시간을 프로파일링하는 명령줄 유틸리티입니다.

## 변환기

* [Swiftify](https://swiftify.com/#/converter/code/) - Objective-C를 Swift로 변환하는 온라인 코드 변환기이자 Xcode 확장 프로그램입니다.
* [Zolang](https://github.com/Zolang/Zolang) :penguin: - 여러 프로그래밍 언어의 코드를 생성하기 위한 DSL입니다.

## 기타 멋진 목록
*다음 프로젝트의 앱도 살펴보세요:* 
* [Awesome iOS Interview](https://github.com/dashvlas/awesome-ios-interview) - 면접 준비에 도움이 되는 질문 목록입니다.
* [awesome-macOS](https://github.com/iCHAIT/awesome-macOS) - macOS용 훌륭한 앱, 소프트웨어, 도구와 흥미로운 항목을 엄선한 목록입니다.
* [example-ios-apps](https://github.com/jogendra/example-ios-apps) - iOS 개발을 배우는 초보자와 예제 앱이나 기능이 필요한 iOS 개발자를 위한 훌륭한 목록입니다.
* [open-source-ios-apps](https://github.com/dkhamsing/open-source-ios-apps) - 오픈 소스 iOS 앱을 함께 모은 목록입니다.
* [open-source-mac-os-apps](https://github.com/serhii-londar/open-source-mac-os-apps) - macOS용 오픈 소스 앱의 멋진 목록입니다.

## 종속성 관리자
*Swift용 종속성 관리 소프트웨어입니다.* 
* [Accio](https://github.com/JamitLabs/Accio) - Carthage를 개선한 iOS 등의 SwiftPM 기반 종속성 관리자입니다.
* [Carthage](https://github.com/Carthage/Carthage) - 새로운 종속성 관리자입니다.
* [CocoaPods](https://github.com/CocoaPods/CocoaPods) - 가장 널리 사용되는 종속성 관리자입니다.
* [Mint](https://github.com/yonaskolb/Mint) - Swift 명령줄 도구를 설치하고 실행하는 패키지 관리자입니다.
* [swift-package-manager](https://github.com/swiftlang/swift-package-manager) - SPM은 Swift 프로그래밍 언어용 패키지 관리자입니다.
* [Swiftly](https://github.com/swiftlang/swiftly) - 여러 Swift 버전을 설치하는 Swift CLI 툴체인 설치 프로그램입니다.

## 패턴

* [App Architecture](https://github.com/objcio/app-architecture) - 《App Architecture》 책의 샘플 코드입니다.
* [CleanArchitectureRxSwift](https://github.com/sergdort/ModernCleanArchitectureSwiftUI) - RxSwift를 사용하는 iOS 앱의 클린 아키텍처 예제입니다.
* [Design-Patterns-In-Swift](https://github.com/ochococo/Design-Patterns-In-Swift) - 디자인 패턴입니다.
* [GoodReactor](https://github.com/GoodRequest/GoodReactor) - ⚛️ View Model, View Controller, Coordinator 간 통신을 위한 Redux 기반 Reactor 프레임워크입니다.
* [Reactant](https://github.com/Brightify/Reactant) - iOS용 반응형 아키텍처입니다.
* [ReduxUI](https://github.com/gre4ixin/ReduxUI) - SwiftUI에서 쉽게 사용할 수 있는 Redux 프레임워크입니다.
* [SimplexArchitecture](https://github.com/Ryu0118/swiftui-simplex-architecture) - 상태 변경을 SwiftUI의 View와 분리하는 간단한 아키텍처입니다.
* [Spin](https://github.com/Spinners/Spin.Swift) - RxSwift, ReactiveSwift, Combine에서 작동하는 다목적 피드백 루프 구현을 제공합니다.
* [StateViewController](https://github.com/davidask/StateViewController) - 상태를 가진 UIViewController 구성 방식으로, 비대한 View Controller에 대한 MVC의 해결책입니다.
* [SwiftUI Atom Properties](https://github.com/ra1028/swiftui-atom-properties) - SwiftUI와 동시성을 위한 반응형 데이터 바인딩 및 의존성 주입 라이브러리입니다.
* [The Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture) - 합성, 테스트, 사용 편의성을 고려해 일관되고 이해하기 쉬운 방식으로 앱을 구축하는 라이브러리입니다.
* [Viperit](https://github.com/ferranabello/Viperit) - iOS용 Viper 프레임워크입니다.

## 기타
*Swift 관련 기타 프로젝트입니다.* 
* [Beak](https://github.com/yonaskolb/Beak) - Swift 스크립트용 명령줄 인터페이스입니다.
* [BetterCodable](https://github.com/marksands/BetterCodable) - 프로퍼티 래퍼로 `Codable` 구조체를 한층 더 활용해 보세요. 사용자 지정 `init(from decoder: Decoder) throws` 구현과 반복적인 보일러플레이트를 피하도록 돕는 것이 이 프로퍼티 래퍼의 목표입니다.
* [CodableWrappers](https://github.com/GottaGetSwifty/CodableWrappers) - Codable 타입의 사용자 지정 직렬화를 쉽게 만드는 PropertyWrapper 모음입니다.
* [Forked](https://github.com/drewmccormack/Forked) - 로컬 우선 앱을 지원하기 위해 Swift 앱의 공유 데이터를 관리하는 일반화된 접근 방식입니다.
* [Fugen](https://github.com/almazrafi/Fugen) - Figma 파일에서 리소스를 내보내고 코드를 생성하는 명령줄 도구입니다.
* [MemberwiseInit](https://github.com/gohanlon/swift-memberwise-init-macro) - `@MemberwiseInit`은 Swift 멤버별 이니셜라이저와 동일한 안전 우선 의미 체계를 따르면서 의도한 `init`을 더 자주 제공하는 Swift 매크로입니다.
* [Model2App](https://github.com/Q-Mobile/Model2App) - 데이터 모델을 실제 작동하는 CRUD 앱으로 바꿉니다.
* [Surmagic](https://github.com/gurhub/surmagic) - XCFramework를 손쉽게 만드세요! iOS, Mac Catalyst, tvOS, macOS, watchOS 등 여러 플랫폼용 XCFramework를 한 번에 생성하는 명령줄 도구입니다.
* [SwagGen](https://github.com/yonaskolb/SwagGen) :penguin: - Stencil 템플릿을 기반으로 Swagger 사양에서 REST API를 생성하는 명령줄 도구입니다.
* [Swiftbrew](https://github.com/swiftbrew/Swiftbrew) - Swift 패키지용 Homebrew입니다.
* [SwiftGen](https://github.com/SwiftGen/SwiftGen) - 프로젝트의 다양한 에셋에 대한 코드를 자동 생성하는 도구 모음입니다.
* [SwiftKit](https://github.com/SvenTiigi/SwiftKit) - 다음 오픈 소스 Swift 프레임워크를 시작해 보세요 📦.
* [SwiftPlate](https://github.com/JohnSundell/SwiftPlate) - 명령줄에서 크로스 플랫폼 프레임워크 프로젝트를 쉽게 생성합니다.
* [Toybox](https://github.com/giginet/Toybox) - Xcode Playground를 손쉽게 관리합니다.
* [Tuist](https://github.com/tuist/tuist) - 대규모 Xcode 프로젝트를 생성, 유지 관리하고 상호작용하기 위한 오픈 소스 명령줄 도구입니다.
* [xc](https://github.com/s2mr/xc) - 지정한 버전으로 Xcode 프로젝트 파일을 여는 도구입니다.
* [xcbeautify](https://github.com/cpisciotta/xcbeautify) - xcodebuild 출력 형식을 다듬는 작은 도구입니다.
* [XcodeGen](https://github.com/yonaskolb/XcodeGen) - YAML 파일과 프로젝트 디렉터리에서 Xcode 프로젝트를 생성하는 도구입니다.
* [xcodeproj](https://github.com/tuist/xcodeproj) - Xcode 프로젝트와 워크스페이스를 읽고, 업데이트하고, 작성하는 라이브러리입니다.

## 라이브러리
*Swift 프로젝트에 사용할 스니펫과 라이브러리를 여기에서 찾을 수 있습니다.* 

### 접근성
[맨 위로](#readme) 

* [Capable](https://github.com/chrs1885/Capable) - 접근성 설정을 추적하고 고대비 색상과 크기 조절 가능한 글꼴을 활용해 장애가 있는 사용자도 앱을 사용할 수 있도록 합니다.

### AI
*머신 러닝, 신경망 등을 비롯한 AI 기반 프로젝트용 라이브러리입니다.* [맨 위로](#readme) 

* [CoreML-Models](https://github.com/likedan/Awesome-CoreML-Models) - 독창적인 Core ML 모델 모음입니다.
* [DL4S](https://github.com/palle-k/DL4S) - 자동 미분, 빠른 텐서 연산, CNN과 RNN부터 트랜스포머까지 지원하는 동적 신경망을 제공합니다.
* [EdgeRunner](https://github.com/christopherkarani/EdgeRunner) - Apple Silicon에서 빠르게 로컬 LLM 추론을 수행합니다. Swift와 Metal로 처음부터 구축했습니다.
* [Espresso](https://github.com/christopherkarani/Espresso) - Apple Neural Engine에서 트랜스포머를 직접 컴파일합니다.
* [Fazm](https://github.com/m13v/fazm) - 접근성 API와 ScreenCaptureKit을 사용하는 macOS용 음성 제어 AI 에이전트입니다.
* [Open Agent SDK](https://github.com/terryso/open-agent-sdk-swift) - 전체 에이전트 루프, 34개의 내장 도구, 하위 에이전트 오케스트레이션, MCP 통합, 여러 공급자의 LLM 지원 기능을 갖춘 오픈 소스 에이전트 SDK입니다.
* [OpenAI](https://github.com/MacPaw/OpenAI) - OpenAI 공개 API용 Swift 패키지입니다.
* [swift-coding-agent](https://github.com/ivan-magda/swift-coding-agent) - 하위 에이전트와 컨텍스트 압축 기능을 갖춘 터미널 코딩 에이전트입니다.

### 알고리즘
[맨 위로](#readme) 

* [Algorithm](https://github.com/CosmicMind/Algorithm) - 알고리즘과 확률 모델 작성을 위한 도구 모음입니다.
* [BTree](https://github.com/attaswift/BTree) - 메모리 내 B-트리를 사용하는 Swift용 고속 정렬 컬렉션입니다.
* [swift-algorithm-club](https://github.com/kodecocodes/swift-algorithm-club) - 설명이 포함된 알고리즘 및 자료 구조입니다.
* [SwiftLCS](https://github.com/Frugghi/SwiftLCS) :penguin: - 최장 공통 부분 수열(LCS) 알고리즘 구현입니다.

### 분석
*앱 사용을 쉽게 추적할 수 있는 분석 관련 라이브러리입니다.* [맨 위로](#readme) 

* [Aptabase](https://github.com/aptabase/aptabase) - Swift 앱을 위한 오픈 소스, 개인정보 보호 우선의 간편한 분석 도구입니다.
* [Scout](https://github.com/kasianov-mikhail/scout) - CloudKit을 백엔드로 사용하는 프로덕션 수준의 iOS 앱 로깅 SDK입니다.
* [Tracker Aggregator](https://github.com/kafejo/Tracker-Aggregator) - 다목적 분석 추상화 계층입니다.
* [Umbrella](https://github.com/devxoul/Umbrella) - 분석 추상화 계층입니다.

### 애니메이션
*애니메이션을 지원하는 라이브러리입니다.* [맨 위로](#readme) 

* [Advance](https://github.com/timdonnelly/Advance) - iOS, tvOS, OS X용 강력한 애니메이션 프레임워크입니다.
* [AnimatedGradient](https://github.com/exyte/AnimatedGradient) - SwiftUI로 작성된 애니메이션 선형 그라디언트 라이브러리입니다.
* [ChainPageCollectionView](https://github.com/jindulys/ChainPageCollectionView) - 세련된 2단 컬렉션 뷰 레이아웃 및 애니메이션입니다.
* [CocoaSprings](https://github.com/MacPaw/CocoaSprings) - iOS/macOS용 대화형 스프링 애니메이션입니다.
* [Comets](https://github.com/cruisediary/Comets) - 입자 애니메이션입니다.
* [Ease](https://github.com/roberthein/Ease) - Ease로 무엇이든 애니메이션화하세요.
* [EasyAnimation](https://github.com/icanzilb/EasyAnimation) - UIView.animateWithDuration(_:, animations:...)의 기능을 한 단계 끌어올리는 라이브러리입니다.
* [Elephant](https://github.com/s2mr/Elephant) - 세련된 SVG 애니메이션 키트입니다.
* [FlightAnimator](https://github.com/AntonTheDev/FlightAnimator) - 자연스러운 블록 기반 Core Animation 프레임워크입니다.
* [Gemini](https://github.com/shoheiyokoyama/Gemini) - 풍부한 스크롤 기반 애니메이션 프레임워크입니다.
* [IBAnimatable](https://github.com/IBAnimatable/IBAnimatable) - IBAnimatable을 사용해 Interface Builder에서 App Store 출시용 앱의 UI, 상호작용, 탐색, 전환 및 애니메이션을 디자인하고 프로토타입으로 만드세요.
* [Interpolate](https://github.com/marmelroy/Interpolate) - 제스처 기반 대화형 애니메이션을 만드는 보간 프레임워크입니다.
* [lottie-ios](https://github.com/airbnb/lottie-ios) - After Effects 벡터 애니메이션을 iOS에서 네이티브로 렌더링하는 라이브러리입니다.
* [Pastel](https://github.com/cruisediary/Pastel) - Instagram과 같은 그라디언트 애니메이션 효과입니다.
* [Poi](https://github.com/HideakiTouhara/Poi) - Tinder와 같은 카드 UI를 사용할 수 있으며, 테이블 뷰 방식으로 사용할 수 있습니다.
* [Presentation](https://github.com/hyperoslo/Presentation) - 튜토리얼, 릴리스 노트, 애니메이션 페이지를 만드는 데 도움을 주는 라이브러리입니다.
* [Pulsator](https://github.com/shu223/pulsator) - iOS용 펄스 애니메이션입니다.
* [Sica](https://github.com/cats-oss/Sica) - 간단한 인터페이스 Core Animation입니다. 타입 안전한 애니메이션을 순차적 또는 병렬로 실행합니다.
* [Spring](https://github.com/MengTo/Spring) - iOS 애니메이션을 간소화하는 라이브러리입니다.
* [SpriteKitEasingSwift](https://github.com/craiggrummitt/SpriteKitEasingSwift) - SpriteKit을 위한 더 나은 이징 기능입니다.
* [spruce-ios](https://github.com/willowtreeapps/spruce-ios) - 화면의 애니메이션을 안무처럼 구성합니다.
* [Stellar](https://github.com/AugustRush/Stellar) - 물리 기반 애니메이션 라이브러리입니다.
* [TheAnimation](https://github.com/marty-suzuki/TheAnimation) - 잘못된 타입 값을 설정하지 않도록 돕는 타입 안전 CAAnimation 래퍼입니다.
* [ViewAnimator](https://github.com/marcosgriselli/ViewAnimator) - 한 줄만으로 UI에 생동감을 더합니다.
* [YapAnimator](https://github.com/yapstudios/YapAnimator) - 빠르고 친근한 물리 기반 애니메이션 시스템입니다.

### API
*타사 API 서비스에 접근할 수 있는 간편한 라이브러리입니다.* [맨 위로](#readme) 

* [GitHubAPI](https://github.com/serhii-londar/GithubAPI) - GitHub REST API v3 구현입니다.
* [GitHubRestAPISwiftOpenAPI](https://github.com/Wei18/github-rest-api-swift-openapi) - OpenAPI 사양에서 GitHub REST API를 Swift 코드로 예약 생성합니다.
* [PXGoogleDirections](https://github.com/poulpix/PXGoogleDirections) - Google Directions API 도우미입니다.
* [RandomUserSwift](https://github.com/dingwilson/RandomUserSwift) - 무작위 사용자를 생성하는 프레임워크로, randomuser.me의 비공식 SDK입니다.
* [reddift](https://github.com/sonsongithub/reddift) - Reddit API 래퍼입니다.
* [SwiftDisc](https://github.com/M1tsumi/SwiftDisc) - 봇과 통합을 위한 Discord API 라이브러리입니다.
* [Swifter Twitter](https://github.com/mattdonnelly/Swifter) - Twitter 프레임워크입니다.
* [Swiftkube](https://github.com/swiftkube/client) :penguin: - Kubernetes용 Swift 클라이언트입니다.
* [SwiftlySalesforce](https://github.com/mike4aday/SwiftlySalesforce) - Salesforce와 통합되는 네이티브 iOS 앱을 빠르게 개발하기 위한 프레임워크입니다.
* [SwiftyInsta](https://github.com/TheM4hd1/SwiftyInsta) - 비공개이며 토큰이 필요 없는 Instagram RESTful API입니다.
* [YouTubeKit](https://github.com/b5i/YouTubeKit) - API 키 없이 YouTube API와 상호작용합니다.

### 앱 라우팅
*앱 내부 라우팅 시스템입니다.* [맨 위로](#readme) 

* [Appz](https://github.com/SwiftKitz/Appz) - 외부 앱을 실행하고 딥 링크를 간편하게 처리합니다.
* [Crossroad](https://github.com/giginet/Crossroad) - :oncoming_bus: 사용자 지정 URL 스킴 처리에 중점을 둔 URL 라우터입니다.
* [LightRoute](https://github.com/SpectralDragon/LiteRoute) - VIPER 모듈 간 라우팅입니다.
* [Linker](https://github.com/MaksimKurpa/Linker) - iOS의 내부 및 외부 딥 링크를 가볍게 처리합니다.
* [MonarchRouter](https://github.com/nikans/MonarchRouter) - 선언형 상태 및 URL 기반 라우터입니다. 복잡한 View Controller 계층 전환을 자동 처리하며, 검증된 서버 측 규약을 사용합니다.
* [RxFlow](https://github.com/RxSwiftCommunity/RxFlow) - 반응형 Flow Coordinator 패턴을 기반으로 하는 iOS 앱용 탐색 프레임워크입니다.
* [SwiftCurrent](https://github.com/wwt/SwiftCurrent) - Swift를 빌드할 수 있는 모든 곳에서 복잡한 워크플로를 관리합니다. UIKit, Storyboard, SwiftUI를 기본 지원합니다.
* [SwiftRouter](https://github.com/skyline75489/SwiftRouter) - iOS용 URL 라우터입니다.
* [SwiftUIRoutes](https://github.com/gabriel/swiftui-routes) - SwiftUI 앱을 위한 간결하고 유연한 라우터입니다.
* [URLNavigator](https://github.com/devxoul/URLNavigator) - 우아한 URL 라우팅입니다.

### App Store
*Apple App Store, 인앱 구매 및 영수증 검증을 지원하는 라이브러리입니다.* [맨 위로](#readme) 

* [Apphud](https://github.com/apphud/ApphudSDK) - 백엔드 없이 자동 갱신 구독을 손쉽게 처리하는 경량 라이브러리입니다.
* [AppReview](https://github.com/mezhevikin/AppReview) - SKStoreReviewController를 통해 App Store 리뷰를 요청하는 작은 라이브러리입니다.
* [Flare](https://github.com/space-code/flare) - StoreKit 1과 2를 모두 완벽하게 지원하며 iOS, macOS, tvOS, watchOS의 인앱 구매 작업을 간소화하는 프레임워크입니다.
* [InAppPurchase](https://github.com/jinSasaki/InAppPurchase) - 간단하고 가벼우며 안전한 인앱 구매 프레임워크입니다.
* [merchantkit](https://github.com/benjaminmayo/merchantkit) - iOS용 최신 인앱 구매 관리 프레임워크입니다.
* [SwiftyStoreKit](https://github.com/bizz84/SwiftyStoreKit) - 경량 인앱 구매 프레임워크입니다.

### 오디오
*오디오 작업용 라이브러리입니다.* [맨 위로](#readme) 

* [AudioKit](https://github.com/audiokit/AudioKit) - 가파른 학습 곡선 없이 강력한 오디오 합성, 처리 및 분석 기능을 제공합니다.
* [AudioPlayer](https://github.com/delannoyk/AudioPlayer) - 유용한 기능을 더한 AVPlayer 래퍼입니다.
* [AudioPlayerSwift](https://github.com/tbaranes/AudioPlayerSwift) - iOS, OS X, tvOS 앱에서 오디오를 재생하는 간단한 클래스이며 기본 및 고급 사용을 모두 지원합니다.
* [Beethoven](https://github.com/vadymmarkov/Beethoven) - 음악 신호의 피치를 감지하는 오디오 처리 라이브러리입니다.
* [FDSoundActivatedRecorder](https://github.com/fulldecent/FDSoundActivatedRecorder) - 사용자가 말하기 시작하면 녹음을 시작합니다.
* [FDWaveformView](https://github.com/fulldecent/FDWaveformView) - 앱에 오디오 파형을 쉽게 표시합니다.
* [FluidAudio](https://github.com/FluidInference/FluidAudio) - iOS/macOS의 실시간 온디바이스 오디오 인텔리전스(화자 분할, 식별, VAD, 분리, 임베딩, ASR)를 위한 SDK입니다. Apple Neural Engine 성능을 활용하도록 PyTorch에서 CoreML 모델을 직접 변환합니다.
* [ModernAVPlayer](https://github.com/noreasonprojects/ModernAVPlayer) - 네트워크 연결이 불안정해도 백그라운드 모드에서 재생을 재개할 수 있는 영구 AVPlayer입니다.
* [MusicKit](https://github.com/0thernet/MusicKit) - 음악을 작곡하고 변환하는 프레임워크입니다.
* [Soundable](https://github.com/lcardevnas/Soundable) - 사운드를 개별적으로 또는 순서대로 매우 쉽게 재생할 수 있습니다.
* [SwiftAudioPlayer](https://github.com/tanhakabir/SwiftAudioPlayer) - AVAudioEngine으로 스트리밍하고 실시간 오디오 조작을 수행하는 iOS용 간단한 오디오 플레이어입니다.
* [SwiftySound](https://github.com/adamcichy/SwiftySound) - 한 줄의 코드로 사운드를 재생하는 간단한 라이브러리입니다.
* [voice-overlay-ios](https://github.com/algolia/voice-overlay-ios) - 사용자에게 음성 권한을 요청하고 입력된 음성을 텍스트로 표시하는 사용자 지정 가능한 UI 오버레이입니다.

### 증강 현실
[맨 위로](#readme) 

* [ARHeadsetKit](https://github.com/philipturner/ARHeadsetKit) - 5달러짜리 Google Cardboard로 Microsoft HoloLens를 재현하는 고수준 프레임워크입니다.
* [ARKit-CoreLocation](https://github.com/AndrewHartAR/ARKit-CoreLocation) - AR의 높은 정확도와 GPS 데이터의 광범위한 적용 범위를 결합합니다.
* [ARKit-Navigation](https://github.com/chriswebb09/ARKitNavigationDemo) - MapKit을 사용한 증강 현실 내비게이션입니다.
* [ARVideoKit](https://github.com/AFathi/ARVideoKit) - ARKit 동영상, 사진, Live Photo, GIF를 캡처하고 녹화합니다.

### 인증
*앱의 인증을 쉽게 관리합니다.* [맨 위로](#readme) 

* [Cely](https://github.com/cely-tools/Cely) - 바로 사용할 수 있는 로그인 프레임워크입니다.
* [LinkedInSignIn](https://github.com/serhii-londar/LinkedInSignIn) - LinkedIn에 로그인하고 액세스 토큰을 가져오는 간단한 뷰 컨트롤러입니다.
* [LoginKit](https://github.com/IcaliaLabs/LoginKit) - iOS 앱에 로그인/가입 UX를 빠르고 쉽게 추가합니다.
* [ReCaptcha](https://github.com/fjcaetano/ReCaptcha) - iOS용 표시형 및 비표시형 ReCaptcha입니다.
* [SpotifyLogin](https://github.com/spotify/SpotifyLogin) - Spotify API로 인증합니다.

### 봇
*봇 구축용 라이브러리입니다.* [맨 위로](#readme) 

* [Telegram Bot SDK](https://github.com/rapierorg/telegram-bot-swift) :penguin: - 비공식 SDK입니다.
* [Telegrammer](https://github.com/givip/Telegrammer) :penguin: - Telegram 봇 개발자를 위한 오픈 소스 프레임워크입니다. 뛰어난 성능을 보여주는 Apple/SwiftNIO 기반으로 구축되었습니다.

### 캐시
[맨 위로](#readme) 

* [AwesomeCache](https://github.com/aschuch/AwesomeCache) - 캐시를 간편하게 관리합니다.
* [Cache](https://github.com/hyperoslo/Cache) - 오직 캐시만을 위한 라이브러리입니다.
* [CachyKit](https://github.com/Sadmansamee/CachyKit) - 만료 날짜/TTL과 강제 새로 고침을 지원하며 JSON, 이미지, ZIP 또는 모든 객체를 캐시할 수 있는 라이브러리입니다.
* [Cachyr](https://github.com/nrkno/yr-cachyr) - iOS, macOS, tvOS용 작은 키-값 데이터 캐시입니다.
* [Carlos](https://github.com/spring-media/Carlos) - 간단하면서도 유연한 캐시입니다.
* [EVURLCache](https://github.com/evermeer/EVURLCache) - 오프라인 상태에서도 앱이 계속 작동하도록 합니다.
* [MemoryCache](https://github.com/yysskk/MemoryCache) - 타입 안전 메모리 캐시입니다.
* [Monstra](https://github.com/yangchenlarkin/Monstra) - TTL, 우선순위 기반 제거, 캐시 폭주 방지 기능을 갖춘 메모리 캐시 프레임워크입니다.

### 차트
[맨 위로](#readme) 

* [Charts](https://github.com/ChartsOrg/Charts) - iOS/tvOS/OSX용 아름다운 차트(MPAndroidChart 포팅)입니다.
* [ChartView](https://github.com/AppPear/ChartView) - 아름다운 차트를 손쉽게 표시하는 Swift 패키지입니다.
* [FLCharts](https://github.com/francescoleoni98/FLCharts) - 사용하기 쉽고 사용자 지정이 뛰어난 iOS용 차트 라이브러리입니다.
* [ScrollableGraphView](https://github.com/philackm/ScrollableGraphView) - 간단한 이산 데이터 세트를 시각화하는 iOS용 적응형 스크롤 그래프 뷰입니다.
* [SwiftChart](https://github.com/gpbl/SwiftChart) - iOS용 간단한 선 및 영역 차트 라이브러리입니다. 여러 계열, 부분 채우기 계열 및 터치 이벤트를 지원합니다.
* [SwiftCharts](https://github.com/ivnsch/SwiftCharts) - 사용자 지정이 뛰어난 iOS용 차트입니다.
* [SwiftUICharts](https://github.com/willdale/SwiftUICharts) - SwiftUI용 차트/플로팅 라이브러리입니다. macOS, iOS, watchOS, tvOS에서 작동하며 접근성과 현지화 기능이 내장되어 있습니다.
* [TKRadarChart](https://github.com/TBXark/TKRadarChart) - 사용자 지정 가능한 레이더 차트입니다.

### 채팅
*채팅 앱 구축을 지원하는 라이브러리입니다.* [맨 위로](#readme) 

* [Chatto](https://github.com/badoo/Chatto) - 채팅 애플리케이션 구축을 위한 경량 프레임워크입니다.
* [ExyteChat](https://github.com/exyte/chat) - 메시지 셀, 입력 뷰, 내장 미디어 선택기를 완전히 사용자 지정할 수 있는 SwiftUI 채팅 UI 프레임워크입니다.
* [InputBarAccessoryView](https://github.com/nathantannar4/InputBarAccessoryView) - 자동 완성과 첨부 파일을 지원하는 강력한 입력 막대를 만드는 간단하고 쉽게 사용자 지정 가능한 InputAccessoryView입니다.
* [MessageKit](https://github.com/MessageKit/MessageKit) - 커뮤니티 주도의 JSQMessagesViewController 대체 구현입니다.
* [MessengerKit](https://github.com/steve228uk/MessengerKit) - 메신저 인터페이스 구축을 위한 UI 프레임워크입니다.
* [Real-time Chat with Firebase](https://github.com/dopebase/messenger-iOS-chat-swift-firestore) - MessageKit을 사용하는 Firebase Firestore 기반의 완전한 실시간 채팅 앱입니다.
* [swiftui-messaging-ui](https://github.com/FluidGroup/swiftui-messaging-ui) - 이전 메시지를 불러올 때 스크롤이 튀지 않도록 안정적인 앞쪽 삽입을 지원하는 기본 SwiftUI 채팅 UI 구성 요소입니다.

### 색상
*색상 관리 및 유틸리티와 관련된 흥미로운 스니펫입니다.* [맨 위로](#readme) 

* [ChromaColorPicker](https://github.com/joncardasis/ChromaColorPicker) - 직관적이고 재미있는 iOS 색상 선택기입니다.
* [ColorKit](https://github.com/Boris-Em/ColorKit) - iOS용 고급 색상 조작 도구입니다.
* [DynamicColor](https://github.com/yannickl/DynamicColor) - 색상을 쉽게 조작하는 확장 기능입니다.
* [Gradients](https://github.com/Gradients/Gradients) - 180개 이상의 멋진 그라디언트를 엄선한 모음입니다.
* [Hue](https://github.com/zenangst/Hue) - 필요한 모든 기능을 갖춘 올인원 색상 유틸리티입니다.
* [PrettyColors](https://github.com/jdhealy/PrettyColors) - ANSI 이스케이프 코드를 사용해 터미널 텍스트의 스타일과 색상을 지정합니다. ECMA 표준 48을 준수합니다.
* [SheetyColors](https://github.com/chrs1885/SheetyColors) - iOS용 액션 시트 스타일 색상 선택기입니다.
* [SwiftGen-Colors](https://github.com/SwiftGen/SwiftGen#uicolor) - `UIColor` 상수에 대한 `enum`을 자동 생성하는 도구입니다.
* [SwiftHEXColors](https://github.com/thii/SwiftHEXColors) - UIColor 확장으로 HEX 색상을 처리합니다.
* [UIColor-Hex-Swift](https://github.com/yeahdongcn/UIColor-Hex-Swift) - Hex를 UIColor로 변환합니다.
* [UIGradient](https://github.com/dqhieu/UIGradient) - 그라디언트 레이어, 이미지, 색상을 사용하는 간단하고 강력한 라이브러리입니다.

### 명령줄
*명령줄 애플리케이션을 만듭니다.* [맨 위로](#readme) 

* [Ashen](https://github.com/colinta/Ashen) - Elm 아키텍처를 기반으로 Swift 터미널 애플리케이션을 작성하는 프레임워크입니다.
* [Commander](https://github.com/kylef/Commander) :penguin: - 멋진 명령줄 인터페이스를 구성합니다.
* [Guaka](https://github.com/nsomar/Guaka) :penguin: - 스마트하고 아름다운 POSIX 준수 명령줄 프레임워크입니다.
* [LineNoise](https://github.com/andybest/linenoise-swift) :penguin: - 종속성이 없는 readline 대체 라이브러리입니다.
* [Mocker](https://github.com/us/mocker) - Apple Containerization 프레임워크를 기반으로 구축된 macOS용 Docker 호환 컨테이너 CLI입니다.
* [nef](https://github.com/bow-swift/nef) - Xcode Playground로 작성한 문서를 컴파일 시 검증하는 명령줄 도구 모음입니다.
* [Progress.swift](https://github.com/jkandzi/Progress.swift) :penguin: - 명령줄에 멋진 진행률 표시줄을 추가합니다.
* [Swift Argument Parser](https://github.com/apple/swift-argument-parser) - 간편하고 타입 안전한 Swift 인수 파싱입니다.
* [SwiftCLI](https://github.com/jakeheis/SwiftCLI) :penguin: - CLI 개발에 사용할 수 있는 강력한 프레임워크입니다.
* [Swiftline](https://github.com/nsomar/Swiftline) - 명령줄 애플리케이션 작성을 돕는 도구 모음입니다.
* [SwiftShell](https://github.com/kareman/SwiftShell) - 명령줄 애플리케이션을 만들고 셸 명령을 실행하는 라이브러리입니다.
* [SwiftyTextTable](https://github.com/scottrhoyt/SwiftyTextTable) :penguin: - 텍스트 표를 생성하는 경량 라이브러리입니다.

### 동시성
*동시성 작업을 더 쉽게 만드는 도구입니다.* [맨 위로](#readme) 

* [async+](https://github.com/async-plus/async-plus) :penguin: - Swift 5.5의 async/await를 위한 체이닝 가능한 인터페이스입니다.
* [AsyncNinja](https://github.com/AsyncNinja/AsyncNinja) - 동시성 및 반응형 프로그래밍 기본 요소의 완전한 모음입니다.
* [AsyncQueue](https://github.com/dfed/swift-async-queue) :penguin: - 동기 컨텍스트에서 비동기 컨텍스트로 순서가 지정된 작업을 전송하는 큐 라이브러리입니다.
* [Futures](https://github.com/davidask/Futures) :penguin: - iOS, macOS, tvOS, watchOS 및 서버 측을 위한 경량 Promise입니다.
* [GroupWork](https://github.com/quanvo87/GroupWork) :penguin: - 동시 비동기 작업을 쉽게 처리합니다.
* [Hydra](https://github.com/malcommac/Hydra) - Promise와 Await를 사용해 더 나은 비동기 코드를 작성하세요.
* [Queuer](https://github.com/FabrizioBrancati/Queuer) :penguin: - OperationQueue와 Dispatch(GCD)를 기반으로 구축된 큐 관리자입니다.
* [SwiftCoroutine](https://github.com/belozierov/SwiftCoroutine) :penguin: - iOS, macOS, Linux용 코루틴입니다.
* [Throttler](https://github.com/boraseoksoon/Throttler) - 한 줄의 API로 대량의 비동기 입력을 제한합니다.
* [Venice](https://github.com/Zewo/Venice) :penguin: - Linux에서 사용할 수 있는 통신 순차 프로세스(CSP)입니다.

### 통화
[맨 위로](#readme) 


### 데이터 관리
[맨 위로](#readme) 


#### CBOR
*간결한 이진 객체 표현(Concise Binary Object Representation)입니다.* [맨 위로](#readme) 

* [CBORCoding](https://github.com/SomeRandomiOSDev/CBORCoding) :penguin: - iOS, macOS, tvOS, watchOS용 간편한 CBOR 인코딩 및 디코딩입니다.

#### Core Data
*Core Data 작업을 편하게 해주는 데이터 관리 라이브러리를 소개합니다.* [맨 위로](#readme) 

* [AERecord](https://github.com/tadija/AERecord) - iOS용 훌륭한 Core Data 래퍼 라이브러리입니다.
* [CloudCore](https://github.com/deeje/CloudCore/) - 오프라인 편집, 관계, 공유 및 공개 데이터베이스 등을 지원하는 견고한 CloudKit 동기화입니다.
* [CoreStore](https://github.com/JohnEstropia/CoreStore) - Core Data를 간단하고 우아하게 처리합니다.
* [DataKernel](https://github.com/mrdekk/DataKernel) - 영속성 작업을 간소화하는 최소한의 Core Data 스택 래퍼입니다. 외부 종속성이 없습니다.
* [Graph](https://github.com/CosmicMind/Graph) - Core Data용 우아한 데이터 중심 프레임워크입니다.
* [JSQCoreDataKit](https://github.com/jessesquires/JSQCoreDataKit) - 더 Swift다운 Core Data 스택입니다.
* [JustPersist](https://github.com/justeat/JustPersist) - Core Data를 기본 지원하는 iOS용 가장 쉽고 안전한 영속성 처리 방법입니다.
* [QueryKit](https://github.com/QueryKit/QueryKit) - Core Data 필터링을 쉽게 다룹니다.
* [Skopelos](https://github.com/albertodebortoli/Skopelos) - 최소한의 코드로 스레드 안전하며 매우 사용하기 쉬운 Core Data용 Active Record 구현입니다.
* [SugarRecord](https://github.com/modo-studio/SugarRecord) - Core Data와 Realm 작업을 돕습니다.

#### CSV
*쉼표로 구분된 값 형식의 파싱과 직렬화에 유용한 라이브러리입니다.* [맨 위로](#readme) 

* [CodableCSV](https://github.com/dehesa/CodableCSV) :penguin: - 행 단위 또는 Swift Codable 인터페이스를 사용해 CSV 파일을 읽고 씁니다.
* [CSVParser](https://github.com/Nero5023/CSVParser) :penguin: - 빠른 CSV 파서입니다.

#### Firebase
[맨 위로](#readme) 

* [Ballcap](https://github.com/1amageek/Ballcap-iOS) - Cloud Firestore용 데이터베이스 스키마 설계 프레임워크입니다.

#### GraphQL
[맨 위로](#readme) 

* [SociableWeaver](https://github.com/NicholasBellucci/SociableWeaver) - 선언형 GraphQL 쿼리와 뮤테이션을 만듭니다.

#### JSON
*JSON 데이터를 다루기 어렵다면 다음 도구를 살펴보세요.* [맨 위로](#readme) 

* [AlamofireObjectMapper](https://github.com/tristanhimmelman/AlamofireObjectMapper) - ObjectMapper를 사용해 JSON 응답 데이터를 객체로 변환하는 Alamofire 확장입니다.
* [Alembic](https://github.com/ra1028/Alembic) - 함수형 JSON 파싱, 객체 매핑, JSON 직렬화 기능입니다.
* [Argo](https://github.com/thoughtbot/Argo) - JSON 파싱 라이브러리입니다.
* [Arrow](https://github.com/freshOS/Arrow) - 우아한 JSON 파싱입니다.
* [Decodable](https://github.com/Anviking/Decodable) :penguin: - JSON 파싱입니다.
* [Elevate](https://github.com/Nike-Inc/Elevate) - 파싱을 간단하고 안정적이며 조합 가능하게 만드는 JSON 파싱 프레임워크입니다.
* [EVReflection](https://github.com/evermeer/EVReflection) - 리플렉션 기반 JSON 인코딩 및 디코딩입니다. NSDictionary, NSCoding, Printable, Hashable, Equatable 지원을 포함합니다.
* [HandyJSON](https://github.com/alibaba/handyjson) - 편리한 JSON 객체 직렬화/역직렬화 라이브러리입니다.
* [Himotoki](https://github.com/ikesyo/Himotoki) - 타입 안전 JSON 디코딩 라이브러리입니다.
* [JASON](https://github.com/delba/JASON) - 뛰어난 성능과 편리한 연산자를 제공하는 JSON 파싱 도구입니다.
* [JSONHelper](https://github.com/isair/JSONHelper) - iOS 및 OS X용 초고속 JSON 역직렬화 및 값 변환 라이브러리입니다.
* [JSONNeverDie](https://github.com/johnlui/JSONNeverDie) - JSON을 모델로 변환하는 자동 리플렉션 도구이자 사용하기 쉬운 JSON 인코더/디코더로, 언제까지나 쓸 수 있도록 설계되었습니다.
* [ObjectMapper](https://github.com/tristanhimmelman/ObjectMapper) - JSON 객체 매퍼입니다.
* [PMJSON](https://github.com/postmates/PMJSON) - JSON 인코딩/디코딩 라이브러리입니다.
* [ReerCodable](https://github.com/reers/ReerCodable) - Swift 매크로를 사용한 Codable 확장입니다.
* [Sextant](https://github.com/KittyMac/Sextant) :penguin: - 고성능 JSONPath 쿼리입니다.
* [SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON) - 오류 처리를 제공하는 JSON 라이브러리입니다.
* [SwiftyJSONAccelerator](https://github.com/insanoid/SwiftyJSONAccelerator) - JSON용 Swift 5 모델을 생성하는 macOS 앱입니다(Codeable 포함).

#### 키-값 저장소
[맨 위로](#readme) 

* [Default](https://github.com/Nirma/Default) - Codable을 지원하는 UserDefaults용 최신 인터페이스입니다.
* [Defaults](https://github.com/sindresorhus/Defaults) - Codable 및 키 변경 감지를 지원하는 강타입 UserDefaults입니다.
* [DefaultsKit](https://github.com/nmdias/DefaultsKit) - iOS, macOS, tvOS용 간결하고 강타입인 UserDefaults입니다.
* [Prephirences](https://github.com/phimage/Prephirences) - 앱 환경설정, NSUserDefaults, iCloud, Keychain 등을 관리합니다.
* [SecureDefaults](https://github.com/vpeschenkov/SecureDefaults) - AES-256 암호화 계층을 추가한 UserDefaults 및 NSUserDefaults용 경량 래퍼입니다.
* [Storez](https://github.com/SwiftKitz/Storez) - 안전하고 정적 타입을 사용하며 저장소에 구애받지 않는 키-값 저장소입니다.
* [SwiftStore](https://github.com/hemantasapkota/SwiftStore) - LevelDB 기반 키-값 저장소입니다.
* [SwiftyUserDefaults](https://github.com/sunshinejr/SwiftyUserDefaults) - NSUserDefaults를 더 깔끔하고 편리하게 사용하는 구문입니다.
* [Zephyr](https://github.com/ArtSabintsev/Zephyr) - iCloud를 통해 NSUserDefaults를 손쉽게 동기화합니다.

#### MongoDB
[맨 위로](#readme) 

* [MongoKitten](https://github.com/orlandos-nl/MongoKitten) :penguin: - MongoDB 커넥터입니다.
* [Perfect-MongoDB](https://github.com/PerfectlySoft/Perfect-MongoDB) :penguin: - MongoDB 서버에 접근할 수 있도록 mongo-c 클라이언트 라이브러리를 감싼 독립형 래퍼입니다.

#### 다중 데이터베이스
*여러 데이터 소스를 다루는 데이터 관리 계층입니다.* [맨 위로](#readme) 

* [ModelAssistant](https://github.com/ssamadgh/ModelAssistant) - 뷰와 모델 간 상호작용을 관리하는 우아한 라이브러리입니다.
* [PersistenceKit](https://github.com/Teknasyon-Teknoloji/PersistenceKit) - 몇 줄의 코드로 Codable 객체를 다양한 영속성 계층에 저장하고 가져옵니다!
* [Shallows](https://github.com/dreymonde/Shallows) - 가벼운 영속성 도구 모음입니다.

#### ORM
[맨 위로](#readme) 

* [fluent](https://github.com/vapor/fluent) :penguin: - 간단한 ActiveRecord 구현입니다.
* [Perfect-CRUD](https://github.com/PerfectlySoft/Perfect-CRUD) :penguin: - Codable 프로토콜을 사용하는 객체 관계 매핑(ORM) 시스템입니다.

#### 기타 데이터
*데이터를 영속화하는 다른 방법입니다.* [맨 위로](#readme) 

* [CacheAdvance](https://github.com/dfed/CacheAdvance) - 로깅 시스템용 고성능 캐시입니다. CacheAdvance는 SQLite보다 로그 이벤트를 30배 빠르게 영속화합니다.
* [CoreXLSX](https://github.com/CoreOffice/CoreXLSX) - Excel 스프레드시트(XLSX) 형식을 지원합니다.
* [Disk](https://github.com/saoudrizwan/Disk) - iOS에서 구조체, 이미지, 데이터를 쉽게 영속화하는 편리한 프레임워크입니다.
* [EVCloudKitDao](https://github.com/evermeer/EVCloudKitDao) - 구독 및 로컬 캐싱을 지원하는 간소화된 CloudKit 접근 기능입니다.
* [KeyPathKit](https://github.com/vincent-pradeilles/KeyPathKit) - 타입 지정 키 경로를 사용해 데이터를 매끄럽게 조작하는 구문을 제공합니다.
* [LeetCode-Swift](https://github.com/soapyigu/LeetCode-Swift) - LeetCode 면접 질문의 해답입니다.
* [Pencil](https://github.com/naru-jpn/pencil) - 모든 값을 파일에 씁니다.
* [StorageManager](https://github.com/iAmrSalman/StorageManager) - FileManager를 데이터베이스처럼 안전하고 쉽게 사용하는 방법입니다.

#### Realm
[맨 위로](#readme) 

* [Realm](https://github.com/realm/realm-swift) - Realm은 Core Data와 SQLite를 대체하는 모바일 데이터베이스입니다.
* [RealmWrapper](https://github.com/k-lpmg/RealmWrapper) - RealmSwift용 안전하고 간편한 래퍼입니다.
* [Unrealm](https://github.com/matghazaryan/Unrealm) - Swift 네이티브 클래스, 구조체, 열거형을 Realm에 쉽게 저장합니다.

#### SQL 드라이버
[맨 위로](#readme) 

* [MySQL Swift](https://github.com/novi/mysql-swift) :penguin: - MySQL 클라이언트 라이브러리입니다.
* [Perfect-MySQL](https://github.com/PerfectlySoft/Perfect-MySQL) :penguin: - MySQL 서버에 접근하도록 MySQL 클라이언트 라이브러리를 감싼 독립형 래퍼입니다.
* [Perfect-PostgreSQL](https://github.com/PerfectlySoft/Perfect-PostgreSQL) :penguin: - PostgreSQL 서버에 접근하도록 libpq 클라이언트 라이브러리를 감싼 독립형 래퍼입니다.

#### SQLite
*SQLite를 사용해 앱 데이터를 저장하고 싶다면 다음 자료를 살펴보세요.* [맨 위로](#readme) 

* [GRDB.swift](https://github.com/groue/GRDB.swift) - 다목적 SQLite 도구 모음입니다.
* [SQLite.swift](https://github.com/stephencelis/SQLite.swift) - SQLite3 래퍼 프레임워크입니다. 작고, 간단하고, 안전합니다.
* [SQLiteDB](https://github.com/FahimF/SQLiteDB) - SQLite 래퍼입니다.

#### TOML
*Tom's Obvious, Minimal Language입니다.* [맨 위로](#readme) 

* [TOMLDecoder](https://github.com/dduan/TOMLDecoder) - 최신 TOML 표준을 디코딩합니다.

#### XML
*XML 형식의 데이터를 관리하고 싶다면 다음 라이브러리가 유용합니다.* [맨 위로](#readme) 

* [AEXML](https://github.com/tadija/AEXML) - XML 래퍼입니다.
* [CheatyXML](https://github.com/lobodart/CheatyXML) - XML을 쉽게 관리하도록 설계된 강력한 프레임워크입니다.
* [SwiftyXML](https://github.com/chenyunguiMilook/SwiftyXML) - XML을 다루는 가장 Swift다운 방법입니다.
* [SWXMLHash](https://github.com/drmohundro/SWXMLHash) - 간단한 XML 파싱입니다.
* [XMLCoder](https://github.com/CoreOffice/XMLCoder) - 표준 라이브러리의 Codable 프로토콜을 기반으로 한 XMLEncoder 및 XMLDecoder입니다.
* [XMLMapper](https://github.com/gcharita/XMLMapper) - XML을 객체에 매핑하는 간단한 방법입니다.

#### YAML
[맨 위로](#readme) 

* [YamlSwift](https://github.com/behrang/YamlSwift) - YAML 및 JSON 문서를 불러옵니다.
* [Yams](https://github.com/jpsim/Yams) :penguin: - 깔끔한 YAML 파서입니다.

#### ZIP
[맨 위로](#readme) 

* [Zip](https://github.com/marmelroy/Zip) - 파일을 압축하고 압축 해제하는 프레임워크입니다.
* [Zip Foundation](https://github.com/weichsel/ZIPFoundation) - ZIP 아카이브 파일을 생성, 읽기, 수정하는 라이브러리입니다.

### 날짜
*날짜 형식을 쉽게 처리합니다.* [맨 위로](#readme) 

* [AnyDate](https://github.com/Kawoou/AnyDate) - Java 8 DateTime API에서 영감을 받은 날짜 및 시간 API입니다.
* [Chronology](https://github.com/davedelong/time) - 더 나은 날짜/시간 라이브러리를 만들기 위한 프로젝트입니다.
* [DateHelper](https://github.com/melvitax/DateHelper) - 간단한 날짜 도우미입니다.
* [Datez](https://github.com/SwiftKitz/Datez) - `NSDate`, `NSCalendar`, `NSDateComponents`, `NSTimeInterval`을 다루는 라이브러리입니다.
* [Datify](https://github.com/hemangshah/Datify) - 아주 간편한 날짜 함수입니다.
* [NVDate](https://github.com/novalagung/nvdate) - 날짜 확장 라이브러리입니다.
* [SwiftDate](https://github.com/malcommac/SwiftDate) - 간편한 NSDate 관리입니다.
* [Time](https://github.com/dreymonde/Time) - 제네릭을 활용한 타입 안전 시간 계산입니다.
* [Timepiece](https://github.com/naoty/Timepiece) - 직관적인 NSDate 확장입니다.
* [TrueTime.swift](https://github.com/instacart/TrueTime.swift) - 기기 시계 변경에 영향을 받지 않는 실제 현재 시간을 가져옵니다(NTP 라이브러리).
* [TypedDate](https://github.com/Ryu0118/swift-typed-date) - 날짜 구성 요소를 타입 수준에서 사용자 지정해 날짜 처리를 개선합니다.

### 의존성 주입
*의존성 주입 라이브러리입니다.* [맨 위로](#readme) 

* [Cleanse](https://github.com/square/Cleanse) - Square의 경량 의존성 주입 프레임워크입니다.
* [Corridor](https://github.com/symentis/Corridor) - Coreader와 유사한 의존성 주입 μFramework입니다.
* [Deli](https://github.com/kawoou/Deli) - 사용하기 쉬운 의존성 주입(DI) 도구입니다.
* [DIKit](https://github.com/Liftric/DIKit) - KOIN에서 영감을 받은 Swift용 의존성 주입 프레임워크입니다.
* [Dip](https://github.com/AliSoftware/Dip) - 간단한 의존성 주입 컨테이너입니다.
* [DITranquillity](https://github.com/ivlevAstef/DITranquillity/) - 편리한 의존성 주입 프레임워크입니다.
* [Locatable](https://github.com/vincent-pradeilles/locatable) - 프로퍼티 래퍼를 활용해 서비스 로케이터 패턴을 구현하는 마이크로 프레임워크입니다.
* [Pure](https://github.com/devxoul/Pure) - DI 컨테이너 없이 의존성을 주입하는 방법입니다.
* [SafeDI](https://github.com/dfed/safedi) - 컴파일 시 안전성을 보장하는 의존성 주입입니다.
* [Swinject](https://github.com/Swinject/Swinject) - 의존성 주입 프레임워크입니다.
* [Typhoon](https://github.com/appsquickly/Typhoon) - 의존성 주입 도구 모음입니다.
* [Weaver](https://github.com/scribd/Weaver) - 선언형이며 사용하기 쉽고 안전한 의존성 주입 프레임워크입니다.

### 기기
*기기를 인식하는 라이브러리 모음입니다.* [맨 위로](#readme) 

* [Device](https://github.com/Ekhoo/Device) - 현재 기기와 화면 크기를 감지하는 경량 도구입니다.
* [Device.swift](https://github.com/schickling/Device.swift) - 사용 중인 기기를 감지하는 초경량 라이브러리입니다.
* [DeviceKit](https://github.com/devicekit/DeviceKit) - UIDevice를 값 타입으로 대체하는 라이브러리입니다.
* [Deviice](https://github.com/andrealufino/Deviice) - 현재 기기 및 추가 정보를 쉽게 확인하는 Swift 라이브러리입니다.
* [Luminous](https://github.com/andrealufino/Luminous) - 기기에 대해 알아야 할 모든 정보를 가져옵니다.
* [Thingy](https://github.com/bojan/Thingy) - 최신 기기 감지 및 조회 라이브러리입니다.
* [UIDeviceComplete](https://github.com/Nirma/UIDeviceComplete) - UIDevice의 빠진 기능을 보완하는 확장입니다.

### 문서화
*Swift 코드용 문서를 생성합니다.* [맨 위로](#readme) 

* [jazzy](https://github.com/realm/jazzy/) - 정성이 담긴 문서입니다.
* [SourceDocs](https://github.com/SourceDocs/SourceDocs) - 코드와 함께 보관되는 Markdown 참조 문서를 생성합니다.

### 이메일
[맨 위로](#readme) 


### 임베디드 시스템
*Raspberry Pi, BeagleBone, C.H.I.P. 등의 보드에서 임베디드 Linux 프로젝트를 구축합니다.* [맨 위로](#readme) 

* [SwiftyGPIO](https://github.com/uraimo/SwiftyGPIO) :penguin: - ARM에서 Linux GPIO/SPI/PWM과 상호작용합니다.

#### 주변 장치
*특정 외부 주변 장치와 상호작용합니다.* [맨 위로](#readme) 


### 이벤트
*NSNotificationCenter, 키-값 관찰 또는 위임의 대안입니다.* [맨 위로](#readme) 

* [Bond](https://github.com/DeclarativeHub/Bond) - 바인딩 프레임워크입니다.
* [Combinative](https://github.com/noppefoxwolf/Combinative) - Apple Combine 프레임워크를 사용한 UI 이벤트 처리입니다.
* [EmitterKit](https://github.com/aleclarson/emitter-kit) - 이벤트 발생자와 리스너 구현입니다.
* [FutureKit](https://github.com/FutureKit/FutureKit) - Future/Promise 라이브러리입니다.
* [Katana](https://github.com/BendingSpoons/katana-swift) - React와 Redux 방식으로 앱을 작성합니다.
* [LightweightObservable](https://github.com/fxm90/LightweightObservable) - 구독할 수 있는 관찰 가능한 시퀀스를 가볍게 구현합니다.
* [NoticeObserveKit](https://github.com/marty-suzuki/NoticeObserveKit) - 알림 타입과 정보 타입을 연결하는 타입 안전 NotificationCenter 래퍼입니다.
* [Notificationz](https://github.com/SwiftKitz/Notificationz) - 간단하고 사용자 지정 가능한 어댑터로 `NSNotificationCenter`를 쉽게 사용할 수 있도록 돕습니다.
* [Observable](https://github.com/roberthein/Observable) - 값을 관찰하는 가장 쉬운 방법입니다.
* [OneWay](https://github.com/DevYeom/OneWay) - 단방향 데이터 흐름을 사용하는 상태 관리입니다.
* [OpenCombine](https://github.com/OpenCombine/OpenCombine) - 시간에 따른 값 처리를 위한 Apple Combine 프레임워크의 오픈 소스 구현입니다.
* [PMKVObserver](https://github.com/postmates/PMKVObserver/) - 최신 스레드 안전 및 타입 안전 키-값 관찰 기능입니다.
* [PromiseKit](https://github.com/mxcl/PromiseKit) - 비동기 Promise 프로그래밍 라이브러리입니다.
* [ReactiveCocoa](https://github.com/ReactiveCocoa/ReactiveCocoa) - 함수형 반응형 프로그래밍에서 영감을 받은 Cocoa 프레임워크(ReactiveCocoa, RAC)입니다. 시간에 따른 값 스트림을 합성하고 변환하는 API를 제공합니다.
* [ReactorKit](https://github.com/ReactorKit/ReactorKit) - 반응형 단방향 애플리케이션 아키텍처를 위한 프레임워크입니다.
* [ReSwift](https://github.com/ReSwift/ReSwift) - 단방향 데이터 흐름입니다.
* [RxSwift](https://github.com/ReactiveX/RxSwift) - Microsoft Reactive Extensions(Rx)입니다.
* [Signals](https://github.com/artman/Signals) - 위임과 알림을 대체합니다.
* [SwiftEventBus](https://github.com/cesarferreira/SwiftEventBus) - iOS에 최적화된 발행/구독 이벤트 버스입니다.
* [Tempura](https://github.com/BendingSpoons/tempura-swift) - Redux와 MVVM에서 영감을 받은 iOS 개발의 전체론적 접근 방식입니다.
* [Tokamak](https://github.com/TokamakUI/Tokamak) - 사용하기 쉬운 단방향 데이터 바인딩으로 네이티브 UI 구성 요소를 구축하는 React 스타일 선언형 API입니다.
* [Tomorrowland](https://github.com/lilyball/Tomorrowland) - 경량 Promise입니다.
* [TopicEventBus](https://github.com/mcmatan/topicEventBus) - 주제별로 이벤트를 게시할 수 있는 발행-구독 디자인 패턴 구현 프레임워크입니다.
* [VueFlux](https://github.com/ra1028/VueFlux) - Vuex와 Flux에서 영감을 받은 단방향 데이터 흐름 상태 관리 아키텍처입니다.
* [When](https://github.com/vadymmarkov/When) - Promise를 가볍게 구현한 라이브러리입니다.

### 파일
[맨 위로](#readme) 

* [ExtendedAttributes](https://github.com/sindresorhus/ExtendedAttributes) - 파일과 폴더의 확장 속성을 관리합니다.
* [FileKit](https://github.com/nvzqz/FileKit) - 간단하고 표현력 있는 파일 관리입니다.
* [FileProvider](https://github.com/amosavian/FileProvider) - iOS/tvOS 및 macOS의 로컬, iCloud, 원격(WebDAV/FTP/Dropbox/OneDrive/SMB2) 파일을 위한 FileManager 대체 구현입니다.
* [KZFileWatchers](https://github.com/krzysztofzablocki/KZFileWatchers) - 로컬 및 원격 파일 변경 사항을 관찰하는 마이크로 프레임워크입니다.
* [PathKit](https://github.com/kylef/PathKit) :penguin: - 경로 작업을 간편하게 수행합니다.
* [Pathos](https://github.com/dduan/Pathos) :penguin: - 효율적인 Unix 파일 관리입니다.

### 글꼴
*글꼴 관련 스니펫 모음입니다.* [맨 위로](#readme) 

* [FontAwesome.swift](https://github.com/thii/FontAwesome.swift) - 프로젝트에서 FontAwesome을 사용합니다.
* [FontBlaster](https://github.com/ArtSabintsev/FontBlaster) - iOS 앱에 사용자 지정 글꼴을 프로그래밍 방식으로 불러옵니다.
* [Inkwell](https://github.com/ninjaprox/Inkwell) - 사용자 지정 글꼴을 즉시 사용하는 도구입니다.
* [IoniconsKit](https://github.com/keitaoouchi/IoniconsKit) - 프로젝트에서 ionicons를 UIImage/UIFont로 사용합니다.
* [OcticonsKit](https://github.com/keitaoouchi/OcticonsKit) - 프로젝트에서 Octicons를 UIImage/UIFont로 사용합니다.
* [SwiftIconFont](https://github.com/segecey/SwiftIconFont) - Fontawesome, Iconic, Ionicons, Octicon 포팅입니다.
* [SwiftIcons](https://github.com/ranesr/SwiftIcons) - dripicons, emoji, font awesome, icofont, ionicons, linear icons, map icons, material icons, open iconic, state, weather용 글꼴 아이콘 라이브러리입니다.
* [SwiftUI-FontIcon](https://github.com/huybuidac/SwiftUIFontIcon) - SwiftUI용 Font Awesome, Ionicons, Material Icons 글꼴 아이콘입니다.
* [SYSymbol](https://github.com/Nirma/SFSymbol) - 모든 SFSymbol을 손쉽게 사용할 수 있습니다.
* [UIFontComplete](https://github.com/Nirma/UIFontComplete) - iOS 및 tvOS용 시스템 및 사용자 지정 글꼴 관리입니다.

### 게임 엔진
[맨 위로](#readme) 

* [glide engine](https://github.com/cocoatoucher/Glide) - 실용적인 예제와 튜토리얼을 갖춘 SpriteKit 및 GameplayKit 기반 2D 게임 제작 엔진입니다.
* [Raylib for Swift](https://github.com/STREGAsGate/Raylib) :penguin: - Raylib용 크로스 플랫폼 Swift 패키지입니다. Raylib를 소스에서 빌드하므로 라이브러리를 따로 다룰 필요가 없습니다. 게임 패키지에 종속성으로 추가하면 바로 사용할 수 있습니다!
* [SwiftGodot](https://migueldeicaza.github.io/SwiftGodotDocs/tutorials/swiftgodot-tutorials/) - 확장을 만들거나 SwiftGodotKit을 API처럼 사용할 수 있도록 하는 Godot 게임 엔진용 Swift 바인딩입니다.

#### 2D
[맨 위로](#readme) 

* [ImagineEngine](https://github.com/JohnSundell/ImagineEngine) - 매우 빠른 2D 게임 엔진입니다.

### 게임
[맨 위로](#readme) 

* [FDChessboardView](https://github.com/fulldecent/FDChessboardView) - 체스 보드용 뷰 컨트롤러입니다.
* [Sage](https://github.com/nvzqz/Sage) :penguin: - 크로스 플랫폼 체스 라이브러리입니다.

### 제스처
[맨 위로](#readme) 

* [ShowTime](https://github.com/KaneCheshire/ShowTime) - 한 줄의 코드로 데모와 동영상에 iOS 탭 및 제스처를 표시합니다.
* [SwiftyGestureRecognition](https://github.com/b3ll/SwiftyGestureRecognition) - Xcode Playground에서 UIGestureRecognizer를 사용합니다.
* [SwipyCell](https://github.com/moritzsternemann/SwipyCell) - Mailbox 앱에서처럼 밀어서 동작을 실행하는 UITableViewCell 구현입니다.
* [Tactile](https://github.com/delba/Tactile) - 제스처와 제어 이벤트에 더 안전하고 관용적인 방식으로 응답합니다.

### 하드웨어
*하드웨어 관련 라이브러리 모음입니다.* [맨 위로](#readme) 


#### 3D Touch
*이 라이브러리로 새로운 3D Touch/Force Touch 기능을 쉽게 처리합니다.* [맨 위로](#readme) 


#### Bluetooth
*CoreBluetooth 래퍼입니다.* [맨 위로](#readme) 

* [BlueCap](https://github.com/troystribling/BlueCap) - CoreBluetooth 래퍼와 그 이상의 기능을 제공합니다.
* [Bluejay](https://github.com/steamclock/bluejay) - 안정적인 Bluetooth LE 앱 구축을 위한 간단한 프레임워크입니다.
* [BluetoothKit](https://github.com/rhummelmose/BluetoothKit) - BLE를 사용해 iOS/OSX 기기 간에 쉽게 통신합니다.
* [RxBluetoothKit](https://github.com/polidea/RxBluetoothKit) - RxSwift용 iOS 및 OSX Bluetooth 라이브러리입니다.
* [SwiftyBluetooth](https://github.com/jordanebelanger/SwiftyBluetooth) - CoreBluetooth를 감싼 간단하고 안정적인 클로저 기반 래퍼입니다.

#### 카메라
*멋진 카메라 라이브러리입니다.* [맨 위로](#readme) 

* [CameraBackground](https://github.com/yonat/CameraBackground) - 카메라 레이어를 모든 UIView의 배경으로 표시합니다.
* [CameraKit-iOS](https://github.com/CameraKit/camerakit-ios) - 다음 프로젝트에서 카메라 성능과 사용 편의성을 크게 향상합니다.
* [FDTake](https://github.com/fulldecent/FDTake) - 사진이나 동영상을 쉽게 촬영하거나 라이브러리에서 선택합니다.
* [Fusuma](https://github.com/ytakzk/Fusuma) - Instagram 스타일의 사진 브라우저 및 카메라 기능입니다.
* [MediaPicker](https://github.com/exyte/mediapicker) - 앨범이 있는 카메라와 갤러리를 지원하는 SwiftUI 사용자 지정 미디어 선택기입니다.
* [MijickCamera](https://github.com/Mijick/Camera) - 카메라를 간편하게 사용합니다. 구현 시간과 노력을 크게 줄이는 완전 사용자 지정 카메라 라이브러리입니다.
* [NextLevel](https://github.com/NextLevel/NextLevel) - 멋진 미디어 캡처입니다.

##### 바코드
*바코드, QR 코드 및 기타 코드 리더입니다.* [맨 위로](#readme) 

* [BarcodeScanner](https://github.com/hyperoslo/BarcodeScanner) - 간단하고 아름다운 바코드 스캐너 뷰 컨트롤러입니다.
* [EFQRCode](https://github.com/EFPrefix/EFQRCode) - QR 코드를 더 나은 방식으로 처리합니다.
* [QRCodeReader.swift](https://github.com/yannickl/QRCodeReader.swift) - 간단한 QR 코드 리더입니다.

#### 햅틱 피드백
*햅틱 피드백을 사용하는 라이브러리입니다.* [맨 위로](#readme) 

* [Haptica](https://github.com/efremidze/Haptica) - 간편한 햅틱 피드백 생성기입니다.

#### iBeacon
*Swift 프로젝트에서 iBeacon을 사용하고 싶다면 다음 자료를 살펴보세요.* [맨 위로](#readme) 

* [SwiftLocation](https://github.com/malcommac/SwiftLocation) - 위치 및 비콘 모니터링입니다.

#### 센서
*기기 센서를 더 빠르고 쉽게 관리합니다.* [맨 위로](#readme) 


### 이미지
*이미지 관련 라이브러리의 흥미로운 목록입니다.* [맨 위로](#readme) 

* [Agrume](https://github.com/JanGorman/Agrume) - 상큼한 iOS 이미지 뷰어입니다.
* [AlamofireImage](https://github.com/Alamofire/AlamofireImage) - Alamofire용 이미지 구성 요소 라이브러리입니다.
* [APNGKit](https://github.com/onevcat/APNGKit) - iOS에서 APNG 형식을 고성능으로 즐겁게 사용하는 방법입니다.
* [ATGMediaBrowser](https://github.com/altayer-digital/ATGMediaBrowser) - 여러 사전 정의 전환 스타일을 제공하고 새로운 전환도 쉽게 만들 수 있는 이미지 슬라이드쇼 뷰어입니다.
* [AXPhotoViewer](https://github.com/alexhillc/AXPhotoViewer) - 사진을 많거나 적게 볼 때 유용한 iPhone/iPad 사진 갤러리 뷰어입니다.
* [BlockiesSwift](https://github.com/Boilertalk/BlockiesSwift) - 고유한 블록 스타일 아이덴티콘/프로필 사진 생성기입니다.
* [Brightroom](https://github.com/FluidGroup/Brightroom) - CoreImage를 사용하는 이미지 편집기 및 엔진입니다.
* [CTPanoramaView](https://github.com/scihant/CTPanoramaView) - 터치 또는 동작 기반 제어로 구형 또는 원통형 파노라마를 표시하는 라이브러리입니다.
* [DTPhotoViewerController](https://github.com/tungvoduc/DTPhotoViewerController) - Facebook 사진 뷰어에서 영감을 받은 완전 사용자 지정 가능 사진 뷰어 ViewController로, 단일 사진 또는 사진 모음을 표시합니다.
* [FacebookImagePicker](https://github.com/floriangbh/FacebookImagePicker) - Facebook 앨범 사진 선택기입니다.
* [FaceCrop](https://github.com/Ancestry/FaceCrop) - Apple Vision Framework를 사용해 이미지에서 얼굴을 감지하고 중앙에 맞춥니다.
* [FlexibleImage](https://github.com/kawoou/FlexibleImage) - 이미지를 간단히 다루는 방법입니다.
* [FMPhotoPicker](https://github.com/congnd/FMPhotoPicker) - 우아하고 사용자 지정 가능한 이미지 편집기를 갖춘 최신형 간단한 무종속성 사진 선택기입니다.
* [gifu](https://github.com/kaishin/gifu) - iOS용 고성능 애니메이션 GIF 지원입니다.
* [GPUImage 2](https://github.com/BradLarson/GPUImage2) - GPU 가속 동영상 및 이미지 처리를 위한 BSD 라이선스 프레임워크입니다.
* [GPUImage 3](https://github.com/BradLarson/GPUImage3) - Metal을 사용하는 GPU 가속 동영상 및 이미지 처리를 위한 BSD 라이선스 프레임워크입니다.
* [HanekeSwift](https://github.com/Haneke/HanekeSwift) - 특히 이미지 지원이 강화된 iOS용 경량 범용 캐시입니다.
* [Harbeth](https://github.com/yangKJ/Harbeth) - GPU 가속 그래픽, 동영상 및 카메라 필터 프레임워크용 Metal API입니다.
* [ImageDetect](https://github.com/Feghal/ImageDetect) - iOS 11 Vision API로 이미지 속 얼굴, 바코드, 텍스트를 감지하고 자릅니다.
* [ImageLoader](https://github.com/hirohisa/ImageLoaderSwift) - iOS용 경량 고속 이미지 로더입니다.
* [ImageScout](https://github.com/kaishin/ImageScout) - [fastimage](https://pypi.org/project/fastimage/0.2.1/) 구현으로 PNG, GIF, JPEG를 지원합니다.
* [ImageViewer](https://github.com/Krisiacik/ImageViewer) - Twitter 스타일의 이미지 뷰어입니다.
* [ImgixSwift](https://github.com/imgix/imgix-swift) - 빠르고 반응성이 뛰어난 이미지 URL로 쉽게 업데이트합니다.
* [JLStickerTextView](https://github.com/Textcat/JLStickerTextView) - UIImageView에 여러 줄 텍스트를 지원하는 레이블을 추가하고, 한 손가락으로 편집, 회전, 크기 조정한 후 이미지에 렌더링할 수 있습니다.
* [Kanvas](https://github.com/tumblr/kanvas-ios) - 기존 미디어나 카메라를 사용해 효과, 그림, 텍스트, 스티커를 추가하고 GIF를 만드는 iOS 라이브러리입니다.
* [Kingfisher](https://github.com/onevcat/Kingfisher) - 이미지 다운로드 및 캐싱입니다.
* [LetterAvatarKit](https://github.com/vpeschenkov/LetterAvatarKit) - 문자를 기반으로 아바타를 생성하는 UIImage 확장입니다.
* [Lightbox](https://github.com/hyperoslo/Lightbox) - iOS 앱을 위한 편리하고 사용하기 쉬운 이미지 뷰어입니다.
* [MapleBacon](https://github.com/JanGorman/MapleBacon) - 이미지 다운로드 및 캐싱 라이브러리입니다.
* [MCScratchImageView](https://github.com/JaylenCoding/MCScratchImageView) - 스크래치 카드처럼 다른 뷰 표면을 덮는 사용자 지정 ImageView입니다. 사용자가 표면을 문질러 아래쪽 뷰를 볼 수 있습니다.
* [Moa](https://github.com/evgenyneu/moa) - iOS, tvOS, macOS용 이미지 뷰 다운로드 확장입니다.
* [Nuke](https://github.com/kean/Nuke) - 이미지를 불러오고, 캐시하고, 처리하고, 표시하며 미리 준비하는 고급 프레임워크입니다.
* [PassportScanner](https://github.com/evermeer/PassportScanner) - 여권의 MRZ 코드를 스캔해 이름, 성, 여권 번호, 국적, 생년월일, 만료일, 개인 번호를 추출합니다.
* [Rough](https://github.com/bakhtiyork/Rough) - 손으로 그린 듯한 스케치 스타일로 그릴 수 있습니다.
* [Sharaku](https://github.com/makomori/Sharaku) - Instagram과 같은 이미지 필터 UI 라이브러리입니다.
* [Snowflake](https://github.com/onmyway133/Snowflake) - SVG 작업을 지원합니다.
* [SwiftDraw](https://github.com/swhitty/SwiftDraw) - SVG 이미지를 UIImage와 NSImage로 변환하고 CoreGraphics 소스 코드를 생성하는 라이브러리입니다.
* [SwiftGen-Assets](https://github.com/SwiftGen/SwiftGen#assets-catalogs) - 에셋 카탈로그의 모든 `UIImage`에 대한 `enum`을 자동 생성하는 도구입니다.
* [SwiftSVG](https://github.com/mchoe/SwiftSVG) - 여러 인터페이스(String, NS/UIBezierPath, CAShapeLayer, NS/UIView)를 제공하는 단일 패스 SVG 파서입니다.
* [SwiftWebImage](https://github.com/HotWordland/SwiftWebImage) - 🚀 성능이 뛰어난 LRU 메모리/디스크 캐시를 갖춘 SwiftUI 이미지 다운로더입니다.
* [SwiftyGif](https://github.com/alexiscreuzot/SwiftyGif) - 고성능 GIF 엔진입니다.
* [TinyCrayon](https://github.com/TinyCrayon/TinyCrayon-iOS-SDK) - 모바일 앱용 스마트하고 사용하기 쉬운 이미지 마스킹 및 잘라내기 SDK입니다.
* [Toucan](https://github.com/gavinbunney/Toucan) - 이미지 처리 API입니다.
* [UIImageColors](https://github.com/jathu/UIImageColors) - iTunes 스타일의 UIImage 색상 추출 도구입니다.
* [YPImagePicker](https://github.com/Yummypets/YPImagePicker) - Instagram 스타일의 iOS 이미지 선택기 및 필터입니다.
* [ZImageCropper](https://github.com/ZaidPathan/ZImageCropper) - 모든 모양으로 이미지를 자릅니다.

### 키-값 코딩
*키-값 코딩용 라이브러리입니다.* [맨 위로](#readme) 


### 키보드
*사용자 지정 키보드를 만들고 싶다면 다음 자료를 살펴보세요.* [맨 위로](#readme) 

* [IHKeyboardAvoiding](https://github.com/IdleHandsApps/IHKeyboardAvoiding) - 키보드가 표시될 때 UIScrollView 없이도 모든 UIView를 계속 보이게 하는 우아한 해결책입니다.
* [IQKeyboardManager](https://github.com/hackiftekhar/IQKeyboardManager) - 코드 없이 바로 추가하는 범용 라이브러리로, 키보드가 올라와 UITextField/UITextView를 가리는 문제를 방지합니다.
* [ISEmojiView](https://github.com/isaced/ISEmojiView) - iOS용 이모지 키보드입니다.
* [KeyboardHideManager](https://github.com/bonyadmitr/KeyboardHideManager) - 뷰를 탭해 키보드를 숨기는 iOS용 코드 없는 관리자입니다.
* [KeyboardShortcuts](https://github.com/sindresorhus/KeyboardShortcuts) - macOS 앱에 사용자가 사용자 지정할 수 있는 전역 키보드 단축키를 추가합니다. Cocoa 및 SwiftUI 구성 요소가 포함됩니다.
* [Ribbon](https://github.com/chriszielinski/Ribbon) - 🎀 iOS 및 macOS용 간단한 크로스 플랫폼 도구 모음/사용자 지정 입력 액세서리 뷰 라이브러리입니다.
* [Typist](https://github.com/totocaster/Typist) - 알림 센터 없이 키보드의 화면 표시와 동작을 관리하도록 돕는 iOS 앱용 소형 UIKit 키보드 관리자입니다.

### 키트
*간소화된 API로 코딩하는 라이브러리입니다.* [맨 위로](#readme) 

* [BFKit-Swift](https://github.com/FabrizioBrancati/BFKit-Swift) :penguin: - 앱 개발을 빠르게 하는 유용한 클래스, 구조체, 확장 모음입니다.
* [C4iOS](https://github.com/C4Labs/C4iOS) - 간소화된 API로 네이티브 iOS 프로그래밍의 강력한 기능을 활용합니다.
* [ContactsChangeNotifier](https://github.com/yonat/ContactsChangeNotifier) - 앱 외부에서 어떤 연락처가 바뀌었을까요? 불필요한 알림 없이 실제 변경 사항을 알려주는 개선된 CNContactStoreDidChange 알림입니다.

### 레이아웃
*레이아웃을 돕는 라이브러리입니다.* [맨 위로](#readme) 

* [AnimatedTabBar](https://github.com/exyte/AnimatedTabBar) - 여러 사전 설정 애니메이션을 제공하는 탭 표시줄입니다.
* [BrickKit](https://github.com/wayfair-archive/brickkit-ios) - 복잡하고 반응형인 레이아웃을 간단하게 만듭니다.
* [CGLayout](https://github.com/k-o-d-e-n/CGLayout) :penguin: - UIView(NSView), CALayer, 렌더링되지 않은 뷰 등을 관리할 수 있는 강력한 자동 레이아웃 프레임워크입니다. 자리 표시자를 제공합니다.
* [FlexLayout](https://github.com/layoutBox/FlexLayout) - 고도로 최적화된 Facebook yoga Flexbox 구현을 위한 깔끔한 인터페이스입니다.
* [FrameLayoutKit](https://github.com/kennic/FrameLayoutKit) - 간단하고 직관적인 연산자 및 DSL 구문으로 연결 및 중첩 레이아웃을 포함한 복잡한 레이아웃을 지원합니다.
* [Grid](https://github.com/exyte/Grid) - SwiftUI에 부족했던 가장 강력한 Grid 컨테이너입니다.
* [LayoutLess](https://github.com/DeclarativeHub/Layoutless) - UI 코드를 더 적게 작성하세요.
* [Neon](https://github.com/mamaral/Neon) - 강력한 프로그래밍 방식 UI 레이아웃 프레임워크입니다.
* [PinLayout](https://github.com/layoutBox/PinLayout) - 자동 레이아웃 없이 빠르게 뷰를 배치합니다. 마법 없이 순수 코드로 완전히 제어하며 매우 빠릅니다. 간결하고 직관적이며 읽기 쉽고 체이닝 가능한 구문을 제공합니다. [iOS/macOS/tvOS]
* [Scaling Header Scroll View](https://github.com/exyte/ScalingHeaderScrollView) - 스크롤할수록 축소되는 고정 헤더를 갖춘 SwiftUI 스크롤 뷰입니다.
* [Static](https://github.com/venmo/Static) - iOS용 간단한 정적 테이블 뷰입니다.
* [Stevia](https://github.com/freshOS/Stevia) - iOS용 우아한 뷰 레이아웃입니다.

#### 자동 레이아웃
*Storyboard 사용에 지쳤다면 선언형 자동 레이아웃 라이브러리를 사용해 보세요.* [맨 위로](#readme) 

* [Bamboo](https://github.com/wordlessj/Bamboo) - 한 줄로 자동 레이아웃(및 수동 레이아웃)을 설정합니다.
* [Cartography](https://github.com/robb/Cartography) - 프로젝트를 위한 선언형 자동 레이아웃 라이브러리입니다.
* [Cassowary](https://github.com/tribalworldwidelondon/CassowarySwift) - AutoLayout과 같은 알고리즘을 사용하는 선형 제약 조건 해결 라이브러리입니다.
* [Cupcake](https://github.com/nerdycat/Cupcake) - iOS UI 구성 요소를 쉽게 만들고 배치합니다.
* [DeviceLayout](https://github.com/cruisediary/DeviceLayout) - 기기마다 자동 레이아웃을 다르게 설정할 수 있습니다.
* [EasyPeasy](https://github.com/nakiostudio/EasyPeasy) - 자동 레이아웃을 쉽게 만듭니다.
* [EasySwiftLayout](https://github.com/Pimine/EasySwiftLayout) - Apple 자동 레이아웃용 경량 Swift 프레임워크입니다.
* [EZLayout](https://github.com/alexliubj/EZAnchor) - 자동 레이아웃을 더 쉽고 빠르게 작성하는 방법입니다.
* [FixFlex](https://github.com/psharanda/FixFlex) - NSLayoutAnchor 기반 선언형 자동 레이아웃으로, VFL을 Swift답게 재해석하고 UIStackView의 대안을 제공합니다.
* [HypeUI](https://github.com/hyperconnect/HypeUI) - 🌺 UIKit을 기반으로 Apple SwiftUI DSL 스타일을 구현합니다.
* [KVConstraintKit](https://github.com/keshavvishwkarma/KVConstraintKit) - iOS, tvOS, OSX용 인상적인 자동 레이아웃 DSL입니다.
* [MisterFusion](https://github.com/marty-suzuki/MisterFusion) - Size Class를 지원하는 자동 레이아웃 DSL입니다.
* [Mortar](https://github.com/jmfieldman/Mortar) - 자동 레이아웃 제약 조건을 만들고 하위 뷰를 추가하는 간결하면서도 유연한 DSL입니다.
* [NorthLayout](https://github.com/banjun/NorthLayout) - 확장 구문을 사용해 Visual Format Language(VFL)로 빠르게 레이아웃을 구성합니다.
* [PureLayout](https://github.com/PureLayout/PureLayout) - iOS 및 OS X 자동 레이아웃을 위한 궁극적인 API입니다.
* [SnapKit](https://github.com/SnapKit/SnapKit) - iOS 및 OS X용 자동 레이아웃 DSL입니다.
* [Swiftstraints](https://github.com/Skyvive/Swiftstraints) - 한 줄의 코드로 제약 조건을 작성하는 강력한 자동 레이아웃 프레임워크입니다.
* [TinyConstraints](https://github.com/roberthein/TinyConstraints) - 자동 레이아웃을 사람이 더 편리하게 사용하도록 해주는 구문 설탕입니다.

### 현지화
*앱 현지화를 돕는 프레임워크입니다.* [맨 위로](#readme) 

* [BartyCrouch](https://github.com/FlineDev/BartyCrouch) - 코드와 Storyboard/XIB에서 Strings 파일을 점진적으로 업데이트/번역합니다.
* [CrowdinSDK](https://github.com/crowdin/mobile-sdk-ios) - Crowdin 프로젝트의 모든 새 번역을 애플리케이션에 즉시 전달합니다.
* [IBLocalizable](https://github.com/PiXeL16/IBLocalizable) - IBLocalizable로 Interface Builder에서 뷰를 직접 현지화합니다.
* [L10n-swift](https://github.com/Decybel07/L10n-swift) - 실행 중 언어 변경과 모든 언어의 복수형을 지원하는 애플리케이션 현지화입니다.
* [LocalizationKit](https://github.com/willpowell8/LocalizationKit_iOS) - 앱을 다시 제출하지 않고도 번역을 관리, 유지, 배포할 수 있는 원격 관리 기능을 갖춘 실시간 동적 현지화입니다.
* [Localize](https://github.com/andresilvagomez/Localize) - Localizable.strings에서 정규식 등을 사용해 앱을 현지화합니다.
* [Localize-Swift](https://github.com/marmelroy/Localize-Swift) - Localizable.strings에서 정규식 등을 사용해 앱을 현지화합니다.
* [Locheck](https://github.com/Asana/locheck) - .strings 및 .stringsdict 파일의 오류를 검증합니다.
* [StringSwitch](https://stringswitch.com) - iOS .strings 파일을 Android strings.xml 형식으로, 또는 그 반대로 쉽게 변환합니다.
* [SwiftGen-L10n](https://github.com/SwiftGen/SwiftGen#localizablestrings) - 모든 Localizable.strings 키에 대한 `enum`을 자동 생성합니다(문자열에 `%@` 같은 printf 형식 자리 표시자가 있으면 적절한 연관 값 포함).
* [Translatio](https://github.com/andrealufino/Translatio) - Storyboard에서 직접 문자열을 현지화할 수 있도록 돕는 초경량 라이브러리입니다.

### 위치
[맨 위로](#readme) 

* [AsyncLocationKit](https://github.com/AsyncSwift/AsyncLocationKit) - 최신 Swift 동시성(async/await)을 사용하는 Apple CoreLocation 프레임워크 래퍼입니다.
* [STLocationRequest](https://github.com/SvenTiigi/STLocationRequest) - 우아하고 간단한 3D Flyover 위치 요청 화면입니다.

### 로깅
*기기 로그를 작성하고 읽는 유틸리티입니다.* [맨 위로](#readme) 

* [AEConsole](https://github.com/tadija/AEConsole) - iOS 앱 위에 디버그 로그를 표시하는 사용자 지정 가능한 콘솔 UI 오버레이입니다.
* [CleanroomLogger](https://github.com/emaloney/CleanroomLogger) - 간단하고 가벼우며 성능이 뛰어난 구성 가능하고 확장 가능한 고수준 로깅 API입니다.
* [Duration](https://github.com/SwiftStudies/Duration) :penguin: - 작업 시간 보고에 중점을 둔 경량 로깅 라이브러리입니다.
* [Gedatsu](https://github.com/bannzai/gedatsu) - AutoLayout 오류 콘솔 로그를 읽기 쉬운 형식으로 제공합니다.
* [HeliumLogger](https://github.com/Kitura/HeliumLogger) :penguin: - IBM의 경량 로깅 프레임워크입니다.
* [Printer](https://github.com/hemangshah/printer) - 다음 앱을 위한 멋진 로거입니다.
* [Puppy](https://github.com/sushichop/Puppy) :penguin: - 여러 전송 방식과 플랫폼을 지원하는 유연한 로깅 라이브러리입니다.
* [QorumLogs](https://github.com/Esqarrouth/QorumLogs) - Xcode 및 Google Docs용 로깅 유틸리티입니다.
* [Rainbow](https://github.com/onevcat/Rainbow) :penguin: - 보기 좋은 콘솔 출력입니다.
* [SwiftyBeaver](https://github.com/SwiftyBeaver/SwiftyBeaver) :penguin: - 개발 및 릴리스 단계에서 사용할 수 있는 멀티 플랫폼 로깅입니다.
* [TinyConsole](https://github.com/Cosmo/TinyConsole) - iOS 앱 사용 중 정보를 표시하는 작은 로그 콘솔입니다.
* [TraceLog](https://github.com/tonystone/tracelog) :penguin: - 아주 간단한, 본래 방식 그대로의 로깅입니다! iOS, macOS, Linux에서 작동합니다.
* [Watchdog](https://github.com/wojteklu/Watchdog) - 메인 스레드의 과도한 블로킹을 기록하는 유틸리티입니다.
* [WatchdogInspector](https://github.com/tapwork/WatchdogInspector) - iOS 앱 상태 표시줄에 현재 프레임 속도(fps)를 표시하는 로깅 도구입니다.
* [Willow](https://github.com/Nike-Inc/Willow) - 강력하면서도 가벼운 로깅 라이브러리입니다.
* [XCGLogger](https://github.com/DaveWoodCom/XCGLogger) - 로그 수준, 타임스탬프, 줄 번호를 지원하는 완전한 기능의 구성 가능한 로깅 유틸리티입니다.

### 지도
[맨 위로](#readme) 

* [Cluster](https://github.com/efremidze/Cluster) - 지도 주석을 쉽게 클러스터링합니다.
* [FlyoverKit](https://github.com/SvenTiigi/FlyoverKit) - 설정 기능을 완전히 유지하면서 별도의 노력 없이 MKMapView에 멋진 360° 플라이오버 뷰를 표시합니다.
* [GEOSwift](https://github.com/GEOSwift/GEOSwift) - 지리 모델 작업과 교차, 중첩, 투영 등을 더 쉽게 계산합니다.
* [ImmersiveMap](https://github.com/artembobkin/ImmersiveMap) - 3D 지구본, 평면 지도, 실시간 아바타 마커를 갖춘 SwiftUI용 Metal 렌더링 벡터 타일 지도 엔진입니다.
* [LocoKit](https://github.com/sobri909/LocoKit) - iOS용 위치 및 활동 기록 프레임워크입니다.

### 수학
[맨 위로](#readme) 

* [Arithmosophi](https://github.com/phimage/Arithmosophi) - 산술 및 논리 연산을 위한 프로토콜 모음입니다.
* [BigInt](https://github.com/attaswift/BigInt) - 임의 정밀도 산술 연산입니다.
* [DDMathParser](https://github.com/davedelong/DDMathParser) - 문자열을 쉽게 파싱해 수학 표현식으로 평가합니다.
* [SigmaSwiftStatistics](https://github.com/evgenyneu/SigmaSwiftStatistics) - 통계 계산용 함수 모음입니다.
* [SwaTex](https://github.com/PhraseHQ/SwaTex) - JavaScript, WebView, DOM 없이 KaTeX 호환 LaTeX 수식을 렌더링하는 엔진입니다.
* [Upsurge](https://github.com/alejandro-isaza/Upsurge) - 간단하고 빠른 행렬 및 벡터 연산입니다.

### 자연어 처리
[맨 위로](#readme) 


### 네트워크
*HTTP 요청 처리에 드는 시간을 줄여주는 라이브러리입니다.* [맨 위로](#readme) 

* [Alamofire](https://github.com/Alamofire/Alamofire) :penguin: - 우아한 네트워킹입니다.
* [APIKit](https://github.com/ishkawa/APIKit) - 타입 안전 웹 API 클라이언트를 만드는 라이브러리입니다.
* [Ciao](https://github.com/AlTavares/Ciao) - mDNS(Bonjour, Zeroconf)를 사용해 서비스를 게시하고 검색합니다.
* [CodyFire](https://github.com/CodyFlame/CodyFire) - Alamofire 기반의 강력한 iOS용 Codable API 요청 빌더 및 관리자입니다.
* [Conduit](https://github.com/mindbody/Conduit) - 웹 API를 위한 견고한 네트워킹입니다.
* [Connectivity](https://github.com/rwbutler/Connectivity) - 🌐 인터넷에 연결되지 않은 Wi-Fi 네트워크를 감지해 인터넷 연결 탐지를 강화합니다.
* [Dots](https://github.com/iAmrSalman/Dots) - 경량 동시 네트워킹 프레임워크입니다.
* [GoodNetworking](https://github.com/GoodRequest/GoodNetworking) - 📡 HTTP 네트워킹을 간소화합니다.
* [Heimdallr.swift](https://github.com/trivago/Heimdallr.swift) - 사용하기 쉬운 iOS용 OAuth 2 라이브러리입니다.
* [Just](https://github.com/dduan/Just) :penguin: - 사람을 위한 HTTP(Python requests 스타일의 HTTP 라이브러리)입니다.
* [Malibu](https://github.com/hyperoslo/Malibu) - Promise 기반 네트워킹 라이브러리입니다.
* [Moya](https://github.com/Moya/Moya) - 네트워크 추상화 계층입니다.
* [MultiPeer](https://github.com/dingwilson/MultiPeer) - 기기 간 오프라인 데이터 전송을 자동화하는 MultipeerConnectivity 프레임워크 래퍼입니다.
* [Netfox](https://github.com/kasketis/netfox) - 한 줄로 설정하는 경량 네트워크 디버깅 라이브러리입니다.
* [Netswift](https://github.com/MrSkwiggs/Netswift) - 타입 안전한 고수준 네트워킹 솔루션입니다.
* [OAuth2](https://github.com/p2/OAuth2) - OAuth2 인증 라이브러리입니다.
* [OAuthSwift](https://github.com/OAuthSwift/OAuthSwift) - iOS용 OAuth 라이브러리입니다.
* [Pitaya](https://github.com/johnlui/Pitaya) :penguin: - 다양한 컴퓨터에서 실행할 수 있는 HTTP/HTTPS 네트워킹 라이브러리입니다.
* [PMHTTP](https://github.com/postmates/PMHTTP) - REST와 JSON에 중점을 둔 HTTP 프레임워크입니다.
* [Postal](https://github.com/snipsco/Postal) - 주요 이메일 제공업체에 간단히 접근하는 프레임워크입니다.
* [Reachability.swift](https://github.com/ashleymills/Reachability.swift) - 클로저를 사용하는 Apple Reachability 대체 구현입니다.
* [ReactiveAPI](https://github.com/sky-uk/ReactiveAPI) - Retrofit에서 영감을 받아 RxSwift의 기능으로 URLSession 기반의 깔끔하고 간결한 선언형 네트워크 코드를 작성합니다.
* [ResponseDetective](https://github.com/netguru/ResponseDetective) - 디버깅을 위해 앱과 서버 사이의 모든 송신 요청과 수신 응답을 비침입적으로 가로채는 프레임워크입니다.
* [RxNetworks](https://github.com/yangKJ/RxNetworks) - RxSwift, Moya, HandyJSON, 플러그인을 사용하는 네트워크 API입니다.
* [ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG) - 방화벽을 우회하도록 돕는 빠른 터널 프록시입니다.
* [Siesta](https://bustoutsolutions.github.io/siesta/) - 상태 관리의 복잡함을 정리하는 REST API용 우아한 추상화입니다. 콜백 및 위임 기반 네트워킹의 대안입니다.
* [SolarNetwork](https://github.com/ThreeGayHub/SolarNetwork) - 우아한 네트워크 추상화 계층입니다.
* [SwiftHTTP](https://github.com/daltoniam/SwiftHTTP) - NSURLSession 래퍼입니다.
* [SwiftyOAuth](https://github.com/delba/SwiftyOAuth) - 공급자 모음이 내장된 소형 OAuth 라이브러리입니다.
* [TermiNetwork](https://github.com/billp/TermiNetwork) - 🌏 최신의 안전한 iOS, watchOS, macOS, tvOS 앱을 구축하기 위한 무종속성 네트워킹 솔루션입니다.
* [Tiercel](https://github.com/Danie1s/Tiercel) - iOS 앱용 백그라운드 다운로드, 재실행 복구, 재개 가능한 전송 및 작업 관리입니다.
* [TRON](https://github.com/MLSDev/TRON) - Alamofire를 기반으로 작성된 경량 네트워크 추상화 계층입니다.
* [Wormholy](https://github.com/pmusolino/Wormholy) - 마법사처럼 iOS 네트워크를 디버깅합니다 🧙‍.

#### HTML
*HTML 콘텐츠를 쉽게 조작하고 싶으신가요?* [맨 위로](#readme) 

* [Fuzi](https://github.com/cezheng/Fuzi) - XPath 및 CSS를 지원하는 빠르고 가벼운 XML/HTML 파서입니다.
* [Kanna](https://github.com/tid-kijyun/Kanna) - 또 다른 XML/HTML 파서입니다.
* [SwiftSoup](https://github.com/scinfu/SwiftSoup) :penguin: - DOM, CSS, jQuery의 장점을 갖춘 HTML 파서입니다.
* [WKZombie](https://github.com/mkoehnke/WKZombie) - 헤드리스 브라우저입니다.
* [ZMarkupParser](https://github.com/ZhgChgLi/ZMarkupParser) - 사용자 지정 스타일과 태그를 적용해 HTML 문자열을 NSAttributedString으로 변환합니다.

#### 메시징 프로토콜
[맨 위로](#readme) 

* [CocoaMQTT](https://github.com/emqx/CocoaMQTT) - iOS 및 OS X용 MQTT입니다.
* [Perfect-Notifications](https://github.com/PerfectlySoft/Perfect-Notifications) - Linux 및 OS X용 iOS 알림입니다.

#### SOAP
[맨 위로](#readme) 

* [SOAPEngine](https://github.com/priore/SOAPEngine) - iOS, Mac OS X, Apple TV에서 SOAP 웹 서비스에 접근하는 범용 SOAP 클라이언트입니다.

#### 소켓
[맨 위로](#readme) 

* [BlueSocket](https://github.com/Kitura/BlueSocket ) - IBM의 크로스 플랫폼 저수준 소켓 프레임워크입니다.
* [BlueSSLService](https://github.com/Kitura/BlueSSLService) - IBM 저수준 소켓 프레임워크용 SSL/TLS 추가 기능입니다.
* [DNWebSocket](https://github.com/GlebRadchenko/DNWebSocket) - Autobahn 테스트를 통과한 객체 지향 WebSocket 라이브러리(RFC 6455)입니다.
* [RxWebSocket](https://github.com/fjcaetano/RxWebSocket) - 반응형 WebSocket입니다.
* [Socket.IO](https://github.com/socketio/socket.io-client-swift) :penguin: - iOS/OS X용 Socket.IO 클라이언트입니다.
* [sockets](https://github.com/vapor-community/sockets) :penguin: - TCP, UDP, 클라이언트, 서버, Linux, OS X를 지원합니다.
* [Starscream](https://github.com/daltoniam/Starscream) - iOS 및 OSX용 WebSocket입니다.
* [SwiftSocket](https://github.com/swiftsocket/SwiftSocket) - 간단한 TCP 소켓 라이브러리입니다.
* [SwiftWebSocket](https://github.com/tidwall/SwiftWebSocket) - 고성능 WebSocket 클라이언트 라이브러리입니다.

#### 웹 서버
*기기에서 웹 서버를 호스팅하고 싶으신가요? 여기에서 방법을 찾을 수 있습니다.* [맨 위로](#readme) 

* [Ambassador](https://github.com/envoy/Ambassador) - SWSGI 기반 초경량 웹 프레임워크입니다.
* [Curassow](https://github.com/kylef-archive/Curassow) :penguin: - 프리포크 작업자 모델을 사용하는 HTTP 서버입니다.
* [Embassy](https://github.com/envoy/Embassy) :penguin: - 초경량 비동기 HTTP 서버 라이브러리입니다.
* [Kitura](https://github.com/Kitura/Kitura) :penguin: - IBM의 웹 서비스용 웹 프레임워크 및 서버입니다.
* [Lightning](https://github.com/skylab-inc/Lightning) :penguin: - 멀티 플랫폼 단일 스레드 논블로킹 웹 및 네트워킹 프레임워크입니다.
* [Noze.io](https://github.com/NozeIO/Noze.io) :penguin: - Node.js와 같은 이벤트 기반 I/O 스트림입니다.
* [Perfect](https://github.com/PerfectlySoft/Perfect) :penguin: - 서버 측 Swift입니다. Perfect 라이브러리, 애플리케이션 서버, 커넥터 및 예제 앱을 제공합니다.
* [swifter](https://github.com/httpswift/swifter) :penguin: - 라우팅 핸들러를 갖춘 HTTP 서버입니다.
* [Vapor](https://github.com/vapor/vapor) :penguin: - iOS, OS X, Ubuntu에서 작동하는 우아한 웹 프레임워크입니다.
* [Zewo](https://github.com/Zewo/Zewo) :penguin: - 서버 측 Swift입니다.

### OCR
[맨 위로](#readme) 

* [SwiftOCR](https://github.com/NMAC427/SwiftOCR) - 신경망 기반 OCR 라이브러리입니다.

### 최적화
[맨 위로](#readme) 


### PDF
[맨 위로](#readme) 

* [PDFGenerator](https://github.com/sgr-ksmt/PDFGenerator) - 간단한 PDF 생성기입니다. 뷰나 이미지에서 PDF를 생성합니다.
* [SimplePDF](https://github.com/nRewik/SimplePDF) - 손쉽게 간단한 PDF를 만듭니다.
* [UXMPDFKit](https://github.com/uxmstudio/UXMPDFKit) - iOS 애플리케이션에 삽입할 수 있는 PDF 뷰어 및 주석 도구입니다.

### 품질
[맨 위로](#readme) 

* [AnyLint](https://github.com/FlineDev/AnyLint) :penguin: - Swift와 정규식의 강력한 기능을 결합해 무엇이든 린트합니다.
* [IBLinter](https://github.com/IBDecodable/IBLinter) - Interface Builder용 린터 도구입니다.
* [L10nLint](https://github.com/s2mr/L10nLint) - Localizable.strings용 린터 도구입니다.
* [solid-like-a-rock](https://github.com/nenadvulic/solid-like-a-rock) :penguin: - SwiftSyntax로 클린 아키텍처와 TCA 가져오기 규칙을 적용하는 아키텍처 린터입니다.
* [swift-mod](https://github.com/ra1028/swift-mod) - 코드 생성과 서식 지정 사이에서 Swift 코드를 수정하는 도구입니다.
* [SwiftCop](https://github.com/andresinaka/SwiftCop) - Ruby on Rails Active Record 유효성 검사의 명료함에서 영감을 받은 유효성 검사 라이브러리입니다.
* [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) - Swift 코드를 다시 포맷하는 코드 라이브러리 및 명령줄 도구입니다.
* [SwiftLint](https://github.com/realm/SwiftLint) - 코딩 규칙을 적용하는 도구입니다.
* [Swimat](https://github.com/Jintin/Swimat) - 코드 서식을 지정하는 Xcode 플러그인입니다.
* [Tailor](https://github.com/sleekbyte/tailor) :penguin: - 더 깔끔한 코드를 작성하고 버그를 피하도록 돕는 크로스 플랫폼 정적 분석기입니다.

### 스크립팅
[맨 위로](#readme) 

* [Swift for Scripting](https://github.com/artemnovichkov/Swift-For-Scripting) - 유용하고 알찬 스크립팅 자료를 직접 엄선한 모음입니다.

### SDK
[맨 위로](#readme) 


### 보안
[맨 위로](#readme)

* [SecurePropertyStorage](https://github.com/alexruperez/SecurePropertyStorage) - Swift 프로퍼티 래퍼를 사용해 프로퍼티를 위한 보안 저장소를 정의하도록 돕습니다.
* [TouchBridge](https://github.com/HMAKT99/UnTouchID) - 휴대전화의 지문으로 모든 Mac에서 인증합니다.

#### 암호화
*암호화 방식을 쉽게 다룹니다.* [맨 위로](#readme) 

* [BlueCryptor](https://github.com/Kitura/BlueCryptor) - IBM의 크로스 플랫폼 암호화 라이브러리입니다.
* [BlueRSA](https://github.com/Kitura/BlueRSA) - IBM의 크로스 플랫폼 RSA 암호화 라이브러리입니다.
* [CryptoSwift](https://github.com/krzyzanowskim/CryptoSwift) :penguin: - 암호화 관련 함수와 도우미입니다.
* [IDZSwiftCommonCrypto](https://github.com/iosdevzone/IDZSwiftCommonCrypto) - Apple Common Crypto 라이브러리용 래퍼입니다.
* [JOSESwift](https://github.com/airsidemobile/JOSESwift) - JOSE 표준 JWS, JWE, JWK용 프레임워크입니다.
* [JWSETKit](https://github.com/amosavian/JWSETKit) - JWS, JWT, JWE, JWK를 지원하는 JOSE 라이브러리입니다.
* [RNCryptor](https://github.com/RNCryptor/RNCryptor) - iOS 및 Mac용 CCCryptor(Apple AES 암호화) 래퍼입니다.
* [SCrypto](https://github.com/sgl0v/scrypto) - CommonCrypto 루틴에 접근하는 우아한 인터페이스입니다.
* [Siphash](https://github.com/attaswift/SipHash) - SipHash 알고리즘을 사용한 간단하고 안전한 해싱입니다.
* [Swift-Sodium](https://github.com/jedisct1/swift-sodium) - iOS 및 OS X에서 일반적인 암호화 작업을 수행하기 위한 Sodium 라이브러리 인터페이스입니다.
* [Themis](https://github.com/cossacklabs/themis) - 저장 데이터, 인증된 데이터 교환, 전송 보호, 인증 등 일반적인 암호화 방식을 쉽게 사용하는 다국어 프레임워크입니다.

#### 키체인
[맨 위로](#readme) 

* [GoodPersistence](https://github.com/GoodRequest/GoodPersistence) - 💾 프로퍼티 래퍼를 사용해 키체인 및 UserDefaults의 데이터 캐싱을 간소화합니다.
* [keychain-swift](https://github.com/evgenyneu/keychain-swift) - iOS, OS X, tvOS, watchOS에서 텍스트를 키체인에 안전하게 저장하는 도우미 함수입니다.
* [KeychainAccess](https://github.com/kishikawakatsumi/KeychainAccess) - iOS 및 OS X에서 작동하는 간단한 키체인 래퍼입니다.
* [Latch](https://github.com/endocrimes/Latch) - iOS용 간단한 키체인 래퍼입니다.
* [SwiftKeychainWrapper](https://github.com/jrendel/SwiftKeychainWrapper) - iOS 키체인을 UserDefaults와 비슷한 방식으로 사용할 수 있도록 하는 간단한 정적 래퍼입니다.
* [Valet](https://github.com/square/Valet) - 키체인 작동 방식을 몰라도 데이터를 안전하게 키체인에 저장할 수 있습니다. 간단합니다. 정말입니다.

### 스트리밍
[맨 위로](#readme) 

* [HaishinKit](https://github.com/HaishinKit/HaishinKit.swift) - iOS, macOS, tvOS용 RTMP 및 HLS 카메라/마이크 스트리밍 라이브러리입니다.
* [Live](https://github.com/ltebean/Live) - 라이브 방송 앱 구축 방법을 보여줍니다.

### 스타일링
[맨 위로](#readme) 

* [Stylist](https://github.com/yonaskolb/Stylist) - 핫 로드 가능한 외부 YAML 또는 JSON 파일로 UI 스타일을 정의합니다.
* [SwiftTheme](https://github.com/wxxsw/SwiftTheme) - iOS 8 이상용 강력한 테마/스킨 관리자입니다.
* [Themes](https://github.com/onmyway133/EasyTheme) - 테마 관리입니다.

### SVG
[맨 위로](#readme) 

* [SVGView](https://github.com/exyte/SVGView) - SwiftUI로 작성된 SVG 파서 및 렌더러입니다.

### 시스템
[맨 위로](#readme) 

* [BlueSignals](https://github.com/Kitura/BlueSignals) - IBM의 크로스 플랫폼 OS 신호 처리 라이브러리입니다.
* [LaunchAtLogin](https://github.com/sindresorhus/LaunchAtLogin-Legacy) - 샌드박스 macOS 앱에 '로그인 시 실행' 기능을 쉽게 추가합니다.
* [SystemKit](https://github.com/beltex/SystemKit/) - OS X 시스템 라이브러리입니다.

### 테스트
*테스트 프레임워크 모음입니다.* [맨 위로](#readme) 

* [DVR](https://github.com/venmo/DVR) - 간단한 네트워크 테스트 프레임워크입니다.
* [Erik](https://github.com/phimage/Erik) - JavaScript로 웹 페이지에 접근하고 조작해 기능 테스트를 실행하는 헤드리스 브라우저입니다.
* [Fakery](https://github.com/vadymmarkov/Fakery) - 가짜 데이터 생성기입니다.
* [Mussel](https://github.com/UrbanCompass/Mussel) - XCUITest에서 푸시 알림, 유니버설 링크, 라우팅을 쉽게 테스트하는 프레임워크입니다.
* [Nimble](https://github.com/Quick/Nimble) - 매처 프레임워크입니다.
* [OHHTTPStubs](https://github.com/AliSoftware/OHHTTPStubs) - 네트워크 요청을 쉽게 스텁하도록 설계된 테스트 라이브러리입니다.
* [Quick](https://github.com/Quick/Quick) :penguin: - 동작 주도 개발(BDD) 프레임워크입니다.
* [SBTUITestTunnel](https://github.com/Subito-it/SBTUITestTunnel) - 네트워크 요청 상호작용, CLLocationManager 및 UNUserNotificationCenter 스텁, 테이블/컬렉션/스크롤 뷰의 세밀한 스크롤을 지원하는 UI 테스트 라이브러리입니다.
* [Sizes](https://github.com/marcosgriselli/Sizes) - 다양한 기기 및 글꼴 크기에서 앱을 테스트합니다.
* [SnapshotTest](https://github.com/parski/SnapshotTest) - iOS 및 tvOS용 스냅샷 테스트 도구입니다.
* [Spectre](https://github.com/kylef/Spectre) :penguin: - BDD 프레임워크입니다.
* [swift-testing-expectation](https://github.com/dfed/swift-testing-expectation) - Swift Testing에서 비동기 기대값을 생성합니다.
* [SwiftCheck](https://github.com/typelift/SwiftCheck) - 프로그램 속성 테스트용 무작위 데이터를 자동 생성하는 테스트 라이브러리입니다.
* [UI Testing Cheat Sheet](https://github.com/joemasilotti/UI-Testing-Cheat-Sheet) - 실제 작동 예제 앱과 함께 흔한 "UI Testing으로 어떻게 테스트하나요?" 질문에 답합니다.
* [XCTest](https://github.com/swiftlang/swift-corelibs-xctest) - 단위 테스트 지원을 제공하는 Swift 핵심 라이브러리인 XCTest 프로젝트입니다.

#### 모의 객체
[맨 위로](#readme) 

* [AutoMockable](https://github.com/vincent-pradeilles/AutoMocker) - 타입 시스템을 활용해 데이터 타입의 모의 인스턴스를 쉽게 만들 수 있는 프레임워크입니다.
* [Cuckoo](https://github.com/Brightify/Cuckoo) - 최초의 보일러플레이트 없는 모킹 프레임워크입니다.
* [Mocker](https://github.com/WeTransfer/Mocker) - 코드 구현을 수정하지 않고 Alamofire 및 URLSession 요청을 모킹합니다.
* [Mockingbird](https://github.com/Farfetch/mockingbird) - HTTP/HTTPS를 사용하는 모든 시스템을 쉽게 모킹해, 미완성이거나 불안정한 서비스를 대상으로 팀이 테스트 및 개발하거나 계획된 사례를 재현할 수 있도록 소프트웨어 테스트를 간소화합니다.
* [Mockingjay](https://github.com/kylef/Mockingjay) - HTTP 요청을 손쉽게 스텁하는 우아한 라이브러리입니다.
* [Mockit](https://github.com/sabirvirtuoso/Mockit) - 유명한 Java용 Mockito에서 영감을 받은 간단한 모킹 프레임워크입니다.
* [MockSwift](https://github.com/leoture/MockSwift) - 프로퍼티 래퍼의 강력한 기능을 사용하는 모킹 프레임워크입니다.

### 텍스트
*텍스트 프로젝트 모음입니다.* [맨 위로](#readme) 

* [Attributed](https://github.com/Nirma/Attributed) - 속성 문자열을 위한 최신 µframework입니다.
* [AttributedTextView](https://github.com/evermeer/AttributedTextView) - 여러 링크, 해시태그, 멘션을 지원하는 속성 UITextView를 가장 쉽게 만듭니다.
* [BonMot](https://github.com/Rightpoint/BonMot) - iOS용 아름답고 간편한 속성 문자열입니다.
* [Croc](https://github.com/JKalash/Croc) - 경량 이모지 파싱 및 쿼리 라이브러리입니다.
* [edhita](https://github.com/tnantoka/edhita) - 완전한 오픈 소스 iOS 텍스트 편집기입니다.
* [GMarkdown](https://github.com/GIKICoder/GMarkdown) - 표, LaTeX, Mermaid, 코드 강조 표시를 지원하는 iOS용 Markdown 렌더링 라이브러리입니다.
* [MarkdownDisplayView](https://github.com/zjc19891106/MarkdownDisplayView) - TextKit 2 기반 Markdown 렌더링 구성 요소로, 부드러운 성능, 풍부한 사용자 지정 옵션, 스트리밍 AI 대화형 상호작용을 지원합니다.
* [MarkdownKit](https://github.com/bmoliveira/MarkdownKit) - 간단하고 사용자 지정 가능한 Markdown 파서입니다.
* [MarkdownView](https://github.com/keitaoouchi/MarkdownView) - iOS Markdown 뷰입니다.
* [MarkyMark](https://github.com/M2Mobi/Marky-Mark) - Markdown을 네이티브 뷰 또는 속성 문자열로 변환합니다.
* [Notepad](https://github.com/ruddfawcett/Notepad) - 실시간 구문 강조 표시 기능과 완전한 테마 사용자 지정 기능을 갖춘 Markdown 편집기입니다.
* [OEMentions](https://github.com/omar14/OEMentions) - Facebook 및 Instagram처럼 uitextview에 멘션을 쉽게 추가합니다.
* [Parsey](https://github.com/rxwei/Parsey) - 소스 위치 추적, 역추적 방지, 풍부한 오류 메시지를 지원하는 파서 조합기 프레임워크입니다.
* [Pluralize.swift](https://github.com/joshualat/Pluralize.swift) - 훌륭한 문자열 복수형 확장입니다.
* [PredicateFlow](https://github.com/andreadelfante/PredicateFlow) - 강타입이며 읽기 쉬운 멋진 NSPredicate를 작성할 수 있는 빌더입니다.
* [PrediKit](https://github.com/KrakenDev/PrediKit) - SnapKit에서 영감을 받은 iOS 및 OS X용 NSPredicate DSL입니다.
* [Regex by crossroadlabs](https://github.com/crossroadlabs/Regex) :penguin: - 풍부한 기능을 갖춘 매우 사용하기 쉬운 정규식 라이브러리입니다. `=~` 연산자 API와 메서드 API를 모두 제공하며 단위 테스트도 포함합니다.
* [Regex by sindresorhus](https://github.com/sindresorhus/Regex) - 완전히 테스트 및 문서화되고 올바른 유니코드 처리를 지원하는 Swift다운 정규식입니다.
* [RichEditorView](https://github.com/cjwirth/RichEditorView) - 간단하고 모듈식이며 바로 추가할 수 있는 리치 텍스트 편집용 UIView 하위 클래스입니다.
* [Sprinter](https://github.com/nicklockwood/Sprinter) - 문자열 서식 지정 라이브러리입니다.
* [SwiftRichString](https://github.com/malcommac/SwiftRichString) - 우아하고 간편한 속성 문자열 관리 라이브러리입니다.
* [SwiftVerbalExpressions](https://github.com/VerbalExpressions/SwiftVerbalExpressions) - VerbalExpressions 포팅입니다.
* [SwiftyAttributes](https://github.com/eddiekaiger/SwiftyAttributes) - 속성 문자열을 아주 쉽게 처리하는 확장입니다.
* [Tagging](https://github.com/k-lpmg/Tagging) - 멘션이나 해시태그를 쉽게 지원하는 TextView입니다.
* [Texstyle](https://github.com/rosberry/texstyle) - 속성 문자열의 서식을 쉽게 지정합니다.
* [TextAttributes](https://github.com/delba/TextAttributes) - 속성 문자열을 더 쉽게 구성합니다.
* [TextBuilder](https://github.com/davdroman/swiftui-text-builder) - Text를 위한 SwiftUI ViewBuilder와 같은 도구입니다.
* [TwitterTextEditor](https://github.com/twitter/TwitterTextEditor) - iOS 애플리케이션을 위한 모든 기능을 갖춘 리치 텍스트 편집기를 제공하는 독립적이고 유연한 API입니다.
* [VEditorKit](https://github.com/GeekTree0101/VEditorKit) - 경량이면서 강력한 편집기 키트입니다.

### 스레드
*스레딩, 작업 기반 또는 비동기 프로그래밍, Grand Central Dispatch(GCD) 래퍼입니다.* [맨 위로](#readme) 

* [Async](https://github.com/duemunk/Async) - Grand Central Dispatch용 구문 설탕입니다.
* [AwaitKit](https://github.com/yannickl/AwaitKit) - ES7 Async/Await 제어 흐름입니다.
* [Each](https://github.com/dalu93/Each) - NSTimer 브리지 라이브러리입니다.
* [GCDTimer](https://github.com/hemantasapkota/GCDTimer) - 충분히 테스트된 GCD 타이머입니다.
* [Schedule](https://github.com/luoxiu/Schedule) :penguin: - 매우 친숙한 구문을 갖춘, 필요했지만 없었던 경량 작업 스케줄러입니다.
* [SwiftyTimer](https://github.com/radex/SwiftyTimer) - NSTimer용 API입니다.

### UI
*미리 준비된 전환과 멋진 UI 요소 모음입니다.* [맨 위로](#readme) 

* [ActivityIndicatorView](https://github.com/exyte/ActivityIndicatorView) - SwiftUI로 만든 여러 가지 사전 설정 로딩 표시기입니다.
* [AECoreDataUI](https://github.com/tadija/AERecord) - Core Data 기반 UI입니다.
* [AGCircularPicker](https://github.com/agilie/AGCircularPicker) - 계산된 매개변수를 관리하는 컨트롤러를 만들 때 유용한 구성 요소입니다.
* [AMScrollingNavbar](https://github.com/andreamazz/AMScrollingNavbar) - UIScrollView 스크롤을 따라 움직이는 스크롤 가능한 UINavigationBar입니다.
* [Arale](https://github.com/supercomputra/Arale) - 콘텐츠 새로 고침을 위한 UIActivityIndicatorView를 지원하는 UIScrollView 및 하위 클래스용 사용자 지정 확장 헤더 뷰입니다.
* [BadgeHub](https://github.com/jogendra/BadgeHub) - 모든 UIView를 완전한 애니메이션 알림 센터로 만듭니다. UIView에 알림 배지 아이콘을 빠르게 추가할 수 있습니다.
* [BatteryView](https://github.com/yonat/BatteryView) - 간단한 배터리 모양 UIView입니다.
* [BetterSafariView](https://github.com/stleamist/BetterSafariView) - SwiftUI에서 SFSafariViewController를 표시하거나 ASWebAuthenticationSession을 시작하는 더 나은 방법입니다.
* [BottomSheet](https://github.com/joomcode/BottomSheet) - 콘텐츠 기반 크기, 대화형 닫기, 내비게이션 컨트롤러를 지원하는 강력한 Bottom Sheet 구성 요소입니다.
* [BreakOutToRefresh](https://github.com/dasdom/BreakOutToRefresh) - SpriteKit을 사용한 플레이 가능한 당겨서 새로 고침 뷰입니다.
* [BulletinBoard](https://github.com/alexaubry/BulletinBoard) - 화면 하단에 표시되는 상황별 카드를 생성하고 관리합니다.
* [CapturePreventionKit](https://github.com/Jaesung-Jung/CapturePreventionKit) - `화면 캡처 방지`를 위한 `Label` 및 `ImageView`를 제공합니다.
* [CircularProgress](https://github.com/sindresorhus/CircularProgress) - macOS 앱용 원형 진행률 표시기입니다.
* [CircularRangeSlider](https://github.com/diegotid/circular-range-slider) - 원형 슬라이더로 값 범위를 선택하는 사용자 지정 SwiftUI 구성 요소입니다.
* [ClassicKit](https://github.com/Baddaboo/ClassicKit) - 클래식 스타일 UI 구성 요소 모음입니다.
* [ContainerController](https://github.com/mrustaa/ContainerController) - UI 구성 요소입니다. Apple Maps, Stocks 앱의 스와이프 패널을 복제했습니다.
* [CountryPickerView](https://github.com/kizitonwose/CountryPickerView) - iOS 앱에서 국가 정보를 효율적으로 수집하는 간단하고 사용자 지정 가능한 뷰입니다.
* [CustomSegue](https://github.com/phimage/CustomSegue) - 슬라이드 및 크로스 페이드 효과가 있는 OSX Storyboard용 사용자 지정 세그입니다.
* [DeckTransition](https://github.com/HarshilShah/DeckTransition) - iOS 10 Apple Music의 지금 재생 중 전환을 재현하는 라이브러리입니다.
* [DockProgress](https://github.com/sindresorhus/DockProgress) - macOS 앱의 Dock 아이콘에 진행률을 표시합니다.
* [Dodo](https://github.com/evgenyneu/Dodo) - iOS용 메시지 표시줄입니다.
* [Doric Design System Foundation](https://github.com/jayeshk/Doric) - 프로토콜 지향, 타입 안전, 확장 가능한 iOS 디자인 시스템 기반 프레임워크입니다.
* [DropDown](https://github.com/AssistoLab/DropDown) - iOS용 Material Design 드롭다운입니다.
* [Elissa](https://github.com/KitchenStories/Elissa) - UITabBarItem 또는 UIView 앵커 뷰 위에 알림을 표시해 추가 정보를 보여줍니다.
* [EstMusicIndicator](https://github.com/Aufree/ESTMusicIndicator) - iTunes 스타일 음악 재생 표시기입니다.
* [Family](https://github.com/zenangst/Family) - 상위 컨트롤러 설정을 아주 쉽게 만드는 하위 뷰 컨트롤러 프레임워크입니다.
* [FAQView](https://github.com/mukeshthawani/faqview) - 사용하기 쉬운 iOS FAQ 뷰입니다.
* [Fashion](https://github.com/vadymmarkov/Fashion) - UI 스타일을 공유하고 재사용하는 패션 액세서리 및 꾸미기 도구입니다.
* [FlagKit](https://github.com/madebybowtie/FlagKit) - 앱과 웹에서 사용할 수 있는 아름다운 국기 아이콘입니다.
* [FlexibleHeader](https://github.com/k-lpmg/FlexibleHeader) - UIScrollView 스크롤에 반응하는 컨테이너 뷰입니다.
* [FloatRatingView](https://github.com/glenyi/FloatRatingView) - 부동 평점 시스템입니다.
* [Fluid Slider](https://github.com/Ramotion/fluid-slider) - 선택한 정확한 값을 표시하는 팝업 말풍선이 있는 슬라이더 위젯입니다.
* [GaugeKit](https://github.com/skywinder/GaugeKit) - 사용자 지정 가능한 게이지입니다. Apple 스타일 게이지를 쉽게 재현합니다.
* [GMStepper](https://github.com/gmertk/GMStepper) - 중앙에 슬라이딩 레이블이 있는 스테퍼입니다.
* [GradientProgressBar](https://github.com/fxm90/GradientProgressBar) - 애니메이션 그라디언트 진행률 표시줄입니다.
* [GRMustache](https://github.com/groue/GRMustache.swift) - 유연한 Mustache 템플릿입니다.
* [GrowingTextView](https://github.com/KennethTsang/GrowingTextView) - 자동 확장, 자리 표시자, 길이 제한을 지원하는 UITextView입니다.
* [HGCircularSlider](https://github.com/HamzaGhazouani/HGCircularSlider) - iOS 앱용 사용자 지정 재사용 원형 슬라이더 컨트롤입니다.
* [HidesNavigationBarWhenPushed](https://github.com/gontovnik/HidesNavigationBarWhenPushed) - hidesNavigationBarWhenPushed 플래그를 통해 뷰 컨트롤러를 푸시할 때 내비게이션 막대를 숨기는 기능을 추가합니다.
* [HorizontalDial](https://github.com/kciter/HorizontalDial) - Instagram 스타일의 가로 스크롤 다이얼입니다.
* [HPParallaxHeader](https://github.com/ngochiencse/HPParallaxHeader) - UIScrollView용 간단한 시차 헤더입니다.
* [IGColorPicker](https://github.com/iGenius-Srl/IGColorPicker) - iOS용 사용자 지정 색상 선택기입니다.
* [InstantSearch iOS](https://github.com/algolia/instantsearch-ios) - iOS에서 인스턴트 검색 기능을 구축하는 위젯 및 도우미 라이브러리입니다.
* [KALoader](https://github.com/Kirillzzy/KALoader) - 데이터 로딩을 표시하는 아름다운 애니메이션 자리 표시자입니다.
* [KMNavigationBarTransition](https://github.com/MoZhouqi/KMNavigationBarTransition) - 모든 화면 방향에서 뷰 컨트롤러를 푸시하거나 팝할 때 내비게이션 막대 스타일을 관리하고 스타일 간 전환 애니메이션을 부드럽게 만드는 범용 드롭인 라이브러리입니다.
* [KMPlaceholderTextView](https://github.com/MoZhouqi/KMPlaceholderTextView) - 여러 줄 자리 표시자 지원을 추가하는 UITextView 하위 클래스입니다.
* [LeeGo](https://github.com/wangshengjia/LeeGo) - 레고 블록을 조립하듯 선언형으로 구성하고 설정할 수 있으며 재사용성이 높은 UI 개발 방식입니다.
* [LicensePlist](https://github.com/mono0926/LicensePlist) - 모든 종속성의 Plist를 자동 생성하는 명령줄 도구입니다.
* [LiquidLoader](https://github.com/yoavlt/LiquidLoader) - 액체 애니메이션을 사용하는 스피너 로더 구성 요소입니다.
* [LoadingShimmer](https://github.com/jogendra/LoadingShimmer) - 한 줄의 코드로 모든 뷰에 쉬머 효과를 쉽게 추가합니다. 눈에 거슬리지 않는 로딩 표시기로 유용합니다.
* [Macaw](https://github.com/exyte/macaw) - SVG를 지원하는 강력하고 사용하기 쉬운 벡터 그래픽 라이브러리입니다.
* [Magnetic](https://github.com/efremidze/Magnetic) - Apple Music에서 영감을 받은 SpriteKit 부동 버블 선택기입니다.
* [Mandoline](https://github.com/blueapron/Mandoline) - 다양한 선택 작업을 지원하는 iOS 선택기 뷰입니다.
* [MantleModal](https://github.com/canalesb93/MantleModal) - UIScrollView를 사용해 아래로 끌어 닫을 수 있는 간단한 모달입니다.
* [Material](https://github.com/CosmicMind/Material) - Google Material Design과 Apple Flat UI를 위한 애니메이션 및 그래픽 프레임워크 Material로 창의성을 발휘하세요.
* [Material Components for iOS](https://github.com/material-components/material-components-ios) - 모듈식이며 사용자 지정 가능한 Material Design UI 구성 요소입니다.
* [MaterialKit](https://github.com/nghialv/MaterialKit) - Material Design 구성 요소입니다.
* [MediaBrowser](https://github.com/younatics/MediaBrowser) - 선택 사항으로 격자 보기, 캡션, 선택 기능을 제공하는 간단한 iOS 사진 및 동영상 브라우저입니다.
* [MPParallaxView](https://github.com/DroidsOnRoids/MPParallaxView) - Apple TV 시차 효과입니다.
* [MultiSelectSegmentedControl](https://github.com/yonat/MultiSelectSegmentedControl) - 여러 세그먼트 선택, 세로 쌓기, 텍스트와 이미지 결합을 지원하는 UISegmentedControl 재구현입니다.
* [MultiSlider](https://github.com/yonat/MultiSlider) - 여러 손잡이와 값, 범위 강조, 선택적 스냅 간격 및 값 레이블을 지원하는 세로/가로 UISlider 복제 구현입니다.
* [MuscleMap](https://github.com/melihcolpan/MuscleMap) - SwiftUI와 UIKit으로 대화형 인체 근육 지도를 렌더링합니다.
* [MXParallaxHeader](https://github.com/maxep/MXParallaxHeader) - UIScrollView용 간단한 시차 헤더입니다.
* [MZFormSheetPresentationController](https://github.com/m1entus/MZFormSheetPresentationController) - 기본 iOS UIModalPresentationFormSheet의 대안으로, iPhone 지원과 컨트롤러 크기 및 폼 시트 모양을 설정하는 추가 기능을 제공합니다.
* [NeumorphismKit](https://github.com/y-okudera/NeumorphismKit) - UIKit용 뉴모피즘 프레임워크입니다.
* [NextGrowingTextView](https://github.com/FluidGroup/NextGrowingTextView) - iOS 7 이상에 최적화된 차세대 자동 확장 텍스트 뷰입니다.
* [NVActivityIndicatorView](https://github.com/ninjaprox/NVActivityIndicatorView) - 멋진 로딩 애니메이션 모음입니다.
* [OverlayContainer](https://github.com/applidium/OverlayContainer) - Apple Maps 또는 Stocks 앱에서 볼 수 있는 오버레이 기반 인터페이스를 더 쉽게 개발합니다.
* [Partition Kit](https://github.com/kieranb662/PartitionKit) - 뷰 콘텐츠용 크기 조정 가능한 영역을 만드는 SwiftUI 라이브러리입니다.
* [Popovers](https://github.com/aheze/Popovers) - 팝오버를 표시하는 간단하고 최신이며 사용자 지정이 뛰어난 라이브러리입니다. 지루하지 않습니다!
* [Preferences](https://github.com/sindresorhus/Settings) - 몇 분 만에 macOS 앱에 환경설정 창을 추가합니다.
* [ProgressIndicatorView](https://github.com/exyte/ProgressIndicatorView) - SwiftUI로 작성된 진행률 표시기 뷰 라이브러리입니다.
* [PullToDismiss](https://github.com/sgr-ksmt/PullToDismiss) - 스크롤 뷰나 내비게이션 막대를 당겨 모달 뷰 컨트롤러를 닫을 수 있습니다.
* [RangeSeekSlider](https://github.com/WorldDownTown/RangeSeekSlider) - iOS용 UISlider 스타일 사용자 지정 범위 슬라이더입니다.
* [Reel search](https://github.com/Ramotion/reel-search) - 릴 형태로 관리되는 옵션 목록입니다.
* [ResizingTokenField](https://github.com/tadejr/ResizingTokenField) - 고유 콘텐츠 높이를 제공하는 UICollectionView 기반 토큰 필드입니다.
* [RetroProgress](https://github.com/hyperoslo/RetroProgress) - 90년대에서 곧바로 가져온 듯한 복고풍 진행률 표시줄입니다.
* [SectionedSlider](https://github.com/LeonardoCardoso/SectionedSlider) - 제어 센터 슬라이더입니다.
* [SelectionDialog](https://github.com/kciter/SelectionDialog) - 간단한 선택 대화 상자입니다.
* [ShadowView](https://github.com/PierrePerrin/ShadowView) - UIView의 그림자 관리를 쉽게 합니다.
* [Shiny](https://github.com/efremidze/Shiny) - Apple Pay Cash에서 영감을 받은 무지갯빛 효과 뷰입니다.
* [ShowSomeProgress](https://github.com/stoneburner/ShowSomeProgress) - iOS 앱용 애니메이션 진행률 및 활동 표시기입니다.
* [SkeletonView](https://github.com/Juanpe/SkeletonView) - 작업 진행 중임을 사용자에게 우아하게 보여주고 기다리는 콘텐츠를 미리 준비할 수 있습니다.
* [SKPhotoBrowser](https://github.com/suzuki-0000/SKPhotoBrowser) - Facebook 및 Twitter 사진 브라우저에서 영감을 받은 간단한 사진 브라우저/뷰어입니다.
* [Spots](https://github.com/hyperoslo) - 설정과 향후 개발을 매우 빠르게 해주는 뷰 컨트롤러 프레임워크입니다.
* [SpreadsheetView](https://github.com/kishikawakatsumi/SpreadsheetView) - iOS 애플리케이션을 위한 완전히 구성 가능한 스프레드시트 뷰 UI입니다.
* [StarryStars](https://github.com/peterprokop/StarryStars) - 인터페이스 빌더에서 완전히 사용자 지정할 수 있는 평점 표시 및 편집 기능입니다.
* [StatefulViewController](https://github.com/aschuch/StatefulViewController) - 콘텐츠, 로딩, 오류 또는 빈 상태에 따른 자리 표시자 뷰입니다.
* [StepProgressView](https://github.com/yonat/StepProgressView) - 레이블과 모양을 갖춘 단계별 진행률 뷰입니다. UIActivityIndicatorView 및 UIProgressView를 대체하기 좋습니다.
* [SweetCurtain](https://github.com/ihormalovanyi/SweetCurtain) - 아래로 끌어 닫는 아주 간편한 하단 시트 구현입니다. Apple Maps, Find My, Stocks 등의 앱에서 유사한 구현을 볼 수 있습니다.
* [SwiftUISkia](https://github.com/rustq/swiftui-skia) - 렌더링을 위한 소프트웨어 래스터화를 Rust로 구현한 Skia 기반 2D 그래픽 SwiftUI 렌더링 라이브러리입니다.
* [SwiftyUI](https://github.com/haoking/SwiftyUI) - 고성능 경량 UIView, UIImage, UIImageView, UILabel, UIButton 등을 제공합니다.
* [TagListView](https://github.com/ElaWorkshop/TagListView) - 간단하면서도 사용자 지정이 뛰어난 iOS 태그 목록 뷰입니다.
* [Toaster](https://github.com/devxoul/Toaster) - 알림 토스트입니다.
* [Twinkle](https://github.com/piemonte/Twinkle) - iOS 앱의 요소를 쉽게 반짝이게 합니다.
* [UltraDrawerView](https://github.com/super-ultra/UltraDrawerView) - Apple Maps, Stocks 등의 Drawer View와 동일한 경량 고속 사용자 지정 구현입니다.
* [URLEmbeddedView](https://github.com/marty-suzuki/URLEmbeddedView) - Open Graph Protocol을 준수하는 객체를 자동으로 캐시하고 URL 삽입 카드로 표시합니다.
* [Windless](https://github.com/ParkGwangBeom/Windless) - 표시되지 않는 레이아웃 로딩 뷰를 쉽게 구현합니다.
* [WSTagsField](https://github.com/whitesmith/WSTagsField) - 다양한 태그를 표현하는 iOS 텍스트 필드입니다.
* [YMTreeMap](https://github.com/yahoo/YMTreeMap) - Squarified 기반 트리맵/히트맵 레이아웃 엔진입니다.
* [YNSearch](https://github.com/younatics/YNSearch) - Pinterest 스타일의 멋지고 완전히 사용자 지정 가능한 검색 뷰입니다.

#### 경고
*경고, 액션 시트, 알림, 팝업을 표시하는 라이브러리입니다.* [맨 위로](#readme) 

* [Alertift](https://github.com/sgr-ksmt/Alertift) - 최신식의 간편한 UIAlertController 래퍼입니다.
* [Alerts Pickers](https://github.com/dillidon/alerts-and-pickers) - TextField, DatePicker, PickerView, TableView, CollectionView를 포함한 UIAlertController 고급 사용법입니다.
* [ALRT](https://github.com/mshrwtnb/alrt) - UIAlertController를 더 쉽게 생성합니다. 어디서든 경고를 표시할 수 있습니다.
* [AwaitToast](https://github.com/k-lpmg/AwaitToast) - 🍞 기본 토스트를 갖춘 비동기 대기 토스트입니다. Facebook 게시 토스트에서 영감을 받았습니다.
* [CDAlertView](https://github.com/candostdagdeviren/CDAlertView) - 사용자 지정이 뛰어난 경고/알림/성공/오류/경보 팝업입니다.
* [CFNotify](https://github.com/JT501/SwiftNotify) - 드래그 가능한 경고 뷰를 만드는 사용자 지정 프레임워크입니다.
* [EZAlertController](https://github.com/thellimist/EZAlertController) - 간편한 UIAlertController입니다.
* [FullscreenPopup](https://github.com/Ryu0118/swift-fullscreen-popup) - SwiftUI에서 NavigationBar 위에 모든 팝업을 표시합니다.
* [GSMessage](https://github.com/wxxsw/GSMessages) - iOS 7 이상용 간단한 스타일 메시지/알림입니다.
* [Kamagari](https://github.com/tasanobu-zz/Kamagari) - 간단한 UIAlertController 빌더 클래스입니다.
* [Loaf](https://github.com/schmidyy/Loaf) - 간편한 iOS 토스트를 위한 간단한 프레임워크입니다.
* [MijickPopups](https://github.com/Mijick/Popups) - 팝업, 팝오버, 시트, 경고, 토스트, 배너 등의 표시를 간단하게 만듭니다.
* [NotificationBanner](https://github.com/Daltron/NotificationBanner) - iOS 앱 내에서 사용자 지정이 뛰어난 알림 배너를 가장 쉽게 표시합니다.
* [PMAlertController](https://github.com/pmusolino/PMAlertController) - UIAlertController를 대체하는 훌륭하고 사용자 지정 가능한 도구입니다.
* [PopupDialog](https://github.com/orderella/PopupDialog) - UIAlertController 경고 스타일을 대체하는 간단하고 사용자 지정 가능한 팝업 대화 상자입니다.
* [PopupView](https://github.com/exyte/PopupView) - SwiftUI로 작성된 토스트 및 팝업 라이브러리입니다.
* [SCLAlertView](https://github.com/vikmeup/SCLAlertView-Swift) - 애니메이션 경고 뷰입니다.
* [Sheet](https://github.com/ParkGwangBeom/Sheet) - Flipboard 앱과 같은 탐색 기능이 있는 액션 시트입니다.
* [SPAlert](https://github.com/sparrowcode/AlertKit) - Apple Music 및 App Store Feedback의 네이티브 팝업입니다. 완료 및 하트 사전 설정이 포함됩니다.
* [StatusAlert](https://github.com/LowKostKustomz/StatusAlert) - 사용자 흐름을 방해하지 않고 Apple 시스템 스타일의 자동 닫힘 상태 알림을 표시합니다.
* [SweetAlert](https://github.com/codestergit/SweetAlert-iOS) - 경고 시스템입니다.
* [Swift-Prompts](https://github.com/GabrielAlva/Swift-Prompts) - 다양한 옵션으로 사용자 지정 프롬프트를 디자인합니다.
* [SwiftEntryKit](https://github.com/huri000/SwiftEntryKit) - 간단하고 다목적인 팝업 표시기입니다.
* [SwiftMessages](https://github.com/SwiftKickMobile/SwiftMessages) - iOS용 매우 유연한 메시지 표시줄입니다.
* [SwiftOverlays](https://github.com/peterprokop/SwiftOverlays) - 다양한 팝업 및 알림입니다.
* [Toast-Swift](https://github.com/BastiaanJansen/Toast-Swift) - iOS 14 이상 스타일 토스트를 쉽게 만드는 라이브러리입니다.
* [XLActionController](https://github.com/xmartlabs/XLActionController) - 완전히 사용자 지정 가능하고 확장 가능한 액션 시트 컨트롤러입니다.
* [Zingle](https://github.com/hemangshah/Zingle) - UINavigationBar 아래에 경고를 표시합니다.

#### 흐림
[맨 위로](#readme) 

* [VisualEffectView](https://github.com/efremidze/VisualEffectView) - 색조 색상을 지원하는 UIVisualEffectView 하위 클래스입니다.

#### 버튼
[맨 위로](#readme) 

* [AHDownloadButton](https://github.com/amerhukic/AHDownloadButton) - Apple App Store 다운로드 버튼을 바탕으로 진행률 및 전환 애니메이션을 갖춘 사용자 지정 다운로드 버튼입니다.
* [DOFavoriteButton](https://github.com/okmr-d/DOFavoriteButton) - 귀여운 애니메이션 버튼입니다.
* [ExpandableButton](https://github.com/DimaMishchenko/ExpandableButton) - 사용자 지정 가능하고 사용하기 쉬운 확장 버튼입니다.
* [FloatingButton](https://github.com/exyte/FloatingButton) - SwiftUI로 만든 부동 버튼 메뉴를 쉽게 사용자 지정합니다.
* [Floaty](https://github.com/kciter/Floaty) - iOS용 부동 액션 버튼입니다.
* [IGStoryButtonKit](https://github.com/KaoruMuta/IGStoryButtonKit) - Instagram 스토리에서 영감을 받은 풍부한 애니메이션의 사용하기 쉬운 버튼입니다.
* [LGButton](https://github.com/loregr/LGButton) - 코드 한 줄 없이도 아름다운 버튼을 만들 수 있는 네이티브 UIControl의 완전 사용자 지정 하위 클래스입니다.
* [LTHRadioButton](https://github.com/rolandleth/LTHRadioButton) - 멋진 애니메이션을 갖춘 라디오 버튼입니다.
* [MultiToggleButton](https://github.com/yonat/MultiToggleButton) - 탭하여 버튼 텍스트를 전환하는 UIButton 하위 클래스입니다(카메라 플래시 및 타이머 버튼과 유사).
* [NFDownloadButton](https://github.com/LeonardoCardoso/NFDownloadButton) - 새롭게 개선된 다운로드 버튼으로, Netflix 앱 다운로드 버튼을 역설계한 형태입니다.
* [PMSuperButton](https://github.com/pmusolino/PMSuperButton) - Storyboard에서 사용자 지정할 수 있는 초능력을 가진 강력한 UIButton입니다.
* [RadioGroup](https://github.com/yonat/RadioGroup) - iOS에 없었던 라디오 버튼 그룹입니다.
* [SwiftShareBubbles](https://github.com/takecian/SwiftShareBubbles) - iOS용 애니메이션 소셜 공유 버튼 컨트롤입니다.
* [TransitionButton](https://github.com/AladinWay/TransitionButton) - 로딩 및 전환 애니메이션용 UIButton 하위 클래스입니다.

#### 달력
[맨 위로](#readme) 

* [CalendarKit](https://github.com/richardtop/CalendarKit) - 완전히 사용자 지정 가능한 달력 일간 뷰입니다.
* [CalendarView](https://github.com/mmick66/CalendarView) - 세로 및 가로 레이아웃과 스크롤, 네이티브 달력 이벤트 표시를 모두 지원하는 달력 구성 요소입니다.
* [DateTimePicker](https://github.com/itsmeichigo/DateTimePicker) - 날짜와 시간을 선택하는 더 나은 iOS UI 구성 요소입니다.
* [ElegantCalendar](https://github.com/ThasianX/ElegantCalendar) - SwiftUI에 없던 우아한 전체 화면 달력입니다.
* [HorizonCalendar](https://github.com/airbnb/HorizonCalendar) - 간단한 날짜 선택기부터 모든 기능을 갖춘 달력 앱까지 다양한 사용 사례를 지원하는 선언형 고성능 iOS 달력 UI 구성 요소입니다.
* [JTAppleCalendar](https://github.com/patchthecode/JTAppleCalendar) - UI 달력 처리 도구입니다.
* [KVKCalendar](https://github.com/kvyatkovskys/KVKCalendar) - Apple 플랫폼용으로 사용자 지정 기능이 매우 뛰어난 달력입니다 📅
* [OBCalendar](https://github.com/oBilet/OBCalendar) - 간결성과 사용자 지정 기능을 염두에 두고 설계되어 아름답고 유용한 달력 인터페이스를 손쉽게 만들 수 있습니다.
* [Workaholic](https://github.com/hemangshah/Workaholic) - GitHub 스타일 작업 기여 타임라인입니다.
* [Yotei](https://github.com/claustrofob/Yotei) - iOS용 모듈식 사용자 지정 SwiftUI/UIKit 달력 패키지입니다.

#### 카드
[맨 위로](#readme) 

* [CardNavigation](https://github.com/james01/CardNavigation) - 뷰 컨트롤러를 대화형 카드 스택으로 표시하는 내비게이션 컨트롤러입니다.
* [CardParts](https://github.com/intuit/CardParts) - iOS 개발자를 위해 UIKit으로 만든 반응형 카드 기반 UI 프레임워크입니다.
* [VerticalCardSwiper](https://github.com/JoniVR/VerticalCardSwiper) - UICollectionView로 만든 Shazam Discover UI와 Tinder의 결합입니다.

#### 양식
[맨 위로](#readme) 

* [Carbon](https://github.com/ra1028/Carbon) - 🚴 UITableView와 UICollectionView에서 구성 요소 기반 사용자 인터페이스를 구축하는 선언형 라이브러리입니다.
* [Eureka](https://github.com/xmartlabs/Eureka) - 우아한 iOS 폼 빌더입니다.
* [FDBarGauge](https://github.com/fulldecent/FDBarGauge) - 오디오 믹싱 콘솔의 레벨 표시기를 시뮬레이션합니다.
* [Former](https://github.com/ra1028/Former) - UITableView 기반 폼을 쉽게 만드는 완전 사용자 지정 가능 라이브러리입니다.
* [ObjectForm](https://github.com/haojianzong/ObjectForm) - 클래스 모델용 폼을 만드는 간단하면서도 강력한 라이브러리입니다.
* [SwiftyFORM](https://github.com/neoneye/SwiftyFORM) - 유효성 검사가 가능한 폼입니다.

#### HUD
[맨 위로](#readme) 

* [EZLoadingActivity](https://github.com/Esqarrouth/EZLoadingActivity) - 경량 로딩 작업 HUD입니다.
* [GradientLoadingBar](https://github.com/fxm90/GradientLoadingBar) - 애니메이션 그라디언트 로딩 막대입니다.
* [KRProgressHUD](https://github.com/krimpedance/KRProgressHUD) - 아름답고 사용자 지정 가능한 진행률 HUD입니다.
* [PKHUD](https://github.com/pkluz/PKHUD) - Apple HUD 재구현입니다.

#### 레이블
[맨 위로](#readme) 

* [ActiveLabel](https://github.com/optonaut/ActiveLabel.swift) - 해시태그(#), 멘션(@), URL(http://)을 지원하는 UILabel 드롭인 대체 구현입니다.
* [Atributika](https://github.com/psharanda/Atributika) - HTML 태그, 링크, 해시태그, 멘션이 포함된 텍스트를 NSAttributedString으로 변환합니다. UILabel 대체 구현으로 클릭도 가능하게 합니다.
* [CountdownLabel](https://github.com/suzuki-0000/CountdownLabel) - 모핑 애니메이션과 유용한 기능을 갖춘 간단한 카운트다운 UILabel입니다.
* [GlitchLabel](https://github.com/kciter/GlitchLabel) - iOS용 글리치 효과 UILabel입니다.
* [IncrementableLabel](https://github.com/tbaranes/IncrementableLabel) - UILabel의 숫자를 증감하는 UILabel 하위 클래스입니다.
* [KDEDateLabel](https://github.com/delannoyk/KDEDateLabel) - '얼마 전' 형식을 쉽게 표시하도록 스스로 업데이트하는 UILabel 하위 클래스입니다.
* [LTMorphingLabel](https://github.com/lexrus/LTMorphingLabel) - UILabel용 우아한 모핑 효과입니다.
* [Nantes](https://github.com/instacart/Nantes) - TTTAttributedLabel 대체 구현입니다.
* [TriLabelView](https://github.com/mukeshthawani/TriLabelView) - iOS용 삼각형 모서리 레이블 뷰입니다.

#### 메뉴
[맨 위로](#readme) 

* [AKSwiftSlideMenu](https://github.com/ashishkakkad8/AKSwiftSlideMenu) - 슬라이드 메뉴(드로어)입니다.
* [CircleMenu](https://github.com/Ramotion/circle-menu) - 원형 레이아웃과 Material Design 애니메이션을 갖춘 간단하고 우아한 UI 메뉴입니다.
* [ENSwiftSideMenu](https://github.com/evnaz/ENSwiftSideMenu) - 슬라이드 사이드 메뉴입니다.
* [FanMenu](https://github.com/exyte/fan-menu) - Macaw 기반 원형 레이아웃 메뉴입니다.
* [FlowingMenu](https://github.com/yannickl/FlowingMenu) - 흐르고 튀는 효과로 메뉴를 표시하는 대화형 뷰 전환입니다.
* [GuillotineMenu](https://github.com/Yalantis/GuillotineMenu) - 단두대 스타일 메뉴입니다.
* [HHFloatingView](https://github.com/hemangshah/HHFloatingView) - 앱에서 쉽게 설정하고 사용할 수 있는 부동 뷰입니다.
* [InteractiveSideMenu](https://github.com/handsomecode/InteractiveSideMenu) - 사용자 지정 가능한 iOS 대화형 사이드 메뉴입니다.
* [KWDrawerController](https://github.com/Kawoou/KWDrawerController) - 사용하기 쉬운 드로어 뷰 컨트롤러입니다.
* [MenuItemKit](https://github.com/cxa/MenuItemKit) - 이미지 및 블록(클로저)을 지원하는 `UIMenuItem`입니다.
* [Pagemenu](https://github.com/PageMenu/PageMenu) - 페이지 매김을 지원하는 뷰 컨트롤러입니다.
* [PagingKit](https://github.com/kazuhiro4949/PagingKit) - 사용자 지정 가능한 메뉴 UI를 제공합니다.
* [Panels](https://github.com/antoniocasero/Panels) - 애플리케이션에 슬라이딩 패널을 쉽게 추가하는 프레임워크입니다.
* [Parchment](https://github.com/rechsteiner/Parchment) - UICollectionView 기반의 사용자 지정이 뛰어난 메뉴가 있는 페이지 매김 뷰 컨트롤러입니다.
* [PopMenu](https://github.com/CaliCastle/PopMenu) - 😎 멋지고 사용자 지정 가능한 iOS용 팝업 스타일 액션 시트입니다.
* [SegmentIO](https://github.com/Yalantis/Segmentio) - iOS용 애니메이션 상단/하단 세그먼트 메뉴입니다.
* [SideMenu](https://github.com/jonkykong/SideMenu) - Facebook에서 영감을 받은 간단한 iOS 사이드 메뉴 컨트롤입니다. 오른쪽과 왼쪽 모두 지원하며 코딩이 필요 없습니다.
* [SlideMenuControllerSwift](https://github.com/dekatotoro/SlideMenuControllerSwift) - Google+, iQON, Feedly, Ameba iOS 앱을 기반으로 한 iOS 슬라이드 메뉴 뷰입니다.
* [SwipeMenuViewController](https://github.com/yysskk/SwipeMenuViewController) - 스와이프 가능한 탭 및 메뉴 뷰와 뷰 컨트롤러입니다.
* [XLPagerTabStrip](https://github.com/xmartlabs/XLPagerTabStrip) - iOS용 Android PagerTabStrip입니다.
* [YNDropDownMenu](https://github.com/younatics/YNDropDownMenu) - 사랑스러운 iOS 드롭다운 메뉴입니다.

#### 페이지 매김
[맨 위로](#readme) 

* [CHIPageControl](https://github.com/ChiliLabs/CHIPageControl) - 지루한 UIPageControl을 대체하는 멋진 애니메이션 페이지 컨트롤 모음입니다.
* [FlexiblePageControl](https://github.com/shima11/FlexiblePageControl) - Instagram 스타일의 유연한 UIPageControl입니다.
* [iPages](https://github.com/blsage/iPages) - SwiftUI에서 스와이프 가능한 페이지 뷰를 빠르게 구현합니다 📝.
* [Pageboy](https://github.com/uias/Pageboy) - 간단하고 정보가 풍부한 페이지 뷰 컨트롤러입니다.
* [PageController](https://github.com/hirohisa/PageController) - 무한 페이지 매김 컨트롤러입니다.
* [SlideController](https://github.com/touchlane/SlideController) - 제네릭 타입의 강력한 기능을 사용해 만든 UIPageViewController의 훌륭한 대안입니다. 대화형 제목 탐색 컨트롤로 페이지를 스와이프하고, 수평 또는 수직 체인을 구성해 페이지 수를 제한 없이 확장할 수 있습니다.

#### 결제
[맨 위로](#readme) 

* [AnimatedCardInput](https://github.com/netguru/AnimatedCardInput) - 사용자 지정 가능하고 사용하기 쉬운 신용카드 UI입니다.
* [Caishen](https://github.com/prolificinteractive/Caishen) - iOS용 결제 카드 UI 및 유효성 검사기입니다.
* [iCard](https://github.com/eliakorkmaz/iCard) - SnapKit DSL을 사용하는 은행 카드 생성기입니다.
* [MFCard](https://github.com/MobileFirstInc/MFCard) - iOS 앱에서 신용카드 결제를 쉽게 통합합니다.
* [TPInAppReceipt](https://github.com/tikhop/TPInAppReceipt) - Apple 인앱 구매 영수증을 로컬에서 읽고 검증하는 경량 순수 Swift 라이브러리입니다.

#### 권한
[맨 위로](#readme) 

* [AREK](https://github.com/ennioma/arek) - 모든 종류의 iOS 권한을 처리하는 깔끔하고 사용하기 쉬운 래퍼입니다.
* [Permission](https://github.com/delba/Permission) - iOS 권한 요청을 위한 통합 API입니다.
* [SPPermission](https://github.com/sparrowcode/PermissionsKit) - 네이티브 UI와 대화형 애니메이션으로 권한을 간편하게 요청합니다.

#### 스크롤 막대
[맨 위로](#readme) 

* [DMScrollBar](https://github.com/batanus/DMScrollBar) - 감속, 바운스, 고무 밴드 효과 등을 갖춘 모든 종류의 ScrollView용 최고 수준 사용자 지정 스크롤 막대입니다.

#### 스택 뷰
[맨 위로](#readme) 

* [StackViewController](https://github.com/seedco/StackViewController) - UIStackView 사용을 간소화합니다.
* [TZStackView](https://github.com/tomvanzummeren/TZStackView) - iOS 7 및 8용으로 다시 구현한 iOS 9 UIStackView 레이아웃 구성 요소입니다.

#### 스위치
[맨 위로](#readme) 

* [MJMaterialSwitch](https://github.com/JaleelNazir/MJMaterialSwitch) - Google Material Design에서 영감을 받은 iOS용 사용자 지정 스위치 UI입니다.
* [paper-switch](https://github.com/Ramotion/paper-switch) - 스위치를 켜면 상위 뷰 위에 색을 칠하는 Material Design UI 모듈입니다.
* [Switch](https://github.com/T-Pham/Switch) - Interface Builder를 완전히 지원하는 스위치 컨트롤입니다.

#### Tab
[맨 위로](#readme) 

* [Adaptive Tab Bar](https://github.com/Ramotion/adaptive-tab-bar) - 적응형 탭 표시줄입니다.
* [Animated Tab Bar](https://github.com/Ramotion/animated-tab-bar) - 탭 표시줄 항목에 애니메이션을 추가하는 모듈인 RAMAnimatedTabBarController입니다.
* [CardTabBar](https://github.com/yusadogru/CardTabBar) - iOS 탭 표시줄 항목에 애니메이션을 추가합니다.
* [CircleBar](https://github.com/softhausHQ/CircleBar) - 재미있고 사용하기 쉬운 iOS 탭 표시줄 내비게이션 컨트롤러입니다.
* [ColorMatchTabs](https://github.com/Yalantis/ColorMatchTabs) - 탭을 표시하는 흥미로운 방법입니다.
* [DTPagerController](https://github.com/tungvoduc/DTPagerController) - 가로 스크롤 뷰에 여러 ViewController를 표시하는 컨테이너 뷰 컨트롤러입니다.
* [ESTabBarController](https://github.com/eggswift/ESTabBarController) - UITabBarController를 상속한 사용자 지정 기능이 뛰어난 TabBarController 구성 요소입니다.
* [HHTabBarView](https://github.com/hemangshah/HHTabBarView) - 경량 사용자 지정 탭 표시줄 뷰입니다.
* [PolioPager](https://github.com/YuigaWada/PolioPager) - SNKRS 스타일 검색 탭을 갖춘 유연한 TabBarController입니다.
* [SwiftUIMaterialTabs](https://github.com/SwiftKickMobile/SwiftUIMaterialTabs) - Material 3 스타일 탭과 고정 헤더를 하나로 결합한 SwiftUI 라이브러리입니다.
* [TabBar](https://github.com/onl1ner/TabBar) - SwiftUI 애플리케이션용 사용자 지정 기능이 뛰어난 탭 표시줄입니다.
* [Tabman](https://github.com/uias/Tabman) - 표시 막대가 있는 강력한 페이지 매김 뷰 컨트롤러입니다.
* [TabPageViewController](https://github.com/EndouMari/TabPageViewController) - 페이지 매김 뷰 컨트롤러 및 스크롤 탭 뷰입니다.

#### 템플릿
[맨 위로](#readme) 

* [Stencil](https://github.com/stencilproject/Stencil) - 간단하고 강력한 템플릿 언어입니다.
* [SwiftCssParser](https://github.com/100mango/SwiftCssParser) - 확장 가능한 CSS 파서입니다.
* [Temple](https://github.com/GoodRequest/Temple) - 🗂️ 가장 발전된 프로젝트 및 파일 템플릿입니다.

#### 텍스트 필드
[맨 위로](#readme) 

* [CBPinEntryView](https://github.com/Fawxy/CBPinEntryView) - 사용하기 쉽고 사용자 지정이 뛰어난 PIN 입력입니다.
* [CHIOTPField](https://github.com/ChiliLabs/CHIOTPField) - 일회용 비밀번호, SMS 코드, PIN 코드 등에 사용할 수 있는 텍스트 필드 모음입니다.
* [DTTextField](https://github.com/iDhaval/DTTextField) - 부동 자리 표시자와 오류 레이블이 있는 사용자 지정 텍스트 필드입니다.
* [FloatingLabelTextFieldSwiftUI](https://github.com/kishanraja/FloatingLabelTextFieldSwiftUI) - 아름답고 사용자 지정 가능한 부동 레이블 텍스트 필드를 만들 수 있는 작고 가벼운 SwiftUI 프레임워크입니다. UIViewRepresentable을 사용하지 않고 완전히 SwiftUI로 작성되었습니다.
* [HTYTextField](https://github.com/hanton/HTYTextField) - 통통 튀는 자리 표시자가 있는 UITextField입니다.
* [iTextField ⌨️](https://github.com/blsage/iTextField) - SwiftUI에서 온전히 작동하는 완전 래핑된 `UITextField`입니다 🦅.
* [PasswordTextField](https://github.com/PiXeL16/PasswordTextField) - 암호를 표시하거나 숨기는 전환 아이콘이 있고 올바른 암호 정책을 적용하는 사용자 지정 TextField입니다.
* [SkyFloatingLabelTextField](https://github.com/Skyscanner/SkyFloatingLabelTextField) - "Float Label Pattern"을 구현한 아름답고 유연한 텍스트 필드 컨트롤입니다.
* [StyledTextKit](https://github.com/GitHawkApp/StyledTextKit) - 선언형 구성 및 빠른 렌더링을 지원하는 속성 문자열 라이브러리입니다.
* [TextFieldCounter](https://github.com/serralvo/TextFieldCounter) - 사랑스러운 UX를 갖춘 UITextField 문자 수 세기 도구입니다.
* [TextFieldEffects](https://github.com/raulriera/TextFieldEffects) - 바로 사용할 수 있는 여러 UITextField 효과입니다.
* [UITextField-Navigation](https://github.com/T-Pham/UITextField-Navigation) - UITextField-Navigation은 텍스트 필드 키보드에 다음, 이전, 완료 버튼을 추가합니다. 사용자 지정 기능이 뛰어납니다.
* [VKPinCodeView](https://github.com/Sunspension/VKPinCodeView) - PIN 입력용 간단하고 우아한 UI 구성 요소입니다.

#### 전환
[맨 위로](#readme) 

* [BubbleTransition](https://github.com/andreamazz/BubbleTransition) - 버블 전환을 쉽게 구현합니다.
* [Cards XI](https://github.com/PaoloCuscela/Cards) - 멋진 iOS 11 App Store 카드 뷰입니다.
* [EasyTransitions](https://github.com/marcosgriselli/EasyTransitions) - 사용자 지정 대화형 UIViewController 전환을 만드는 간단한 방법입니다.
* [Hero](https://github.com/HeroTransitions/Hero) - iOS용 우아한 전환 라이브러리입니다.
* [ImageTransition](https://github.com/shtnkgm/ImageTransition) - 전환 중 이미지에 부드러운 애니메이션을 적용하는 라이브러리입니다.
* [Jelly](https://github.com/SebastianBoldt/Jelly) - 몇 줄의 코드만으로 사용자 지정 뷰 컨트롤러 전환을 제공합니다.
* [LiquidSwipe](https://github.com/exyte/LiquidSwipe) - 액체 스타일 내비게이션 애니메이션입니다.
* [MijickNavigattie](https://github.com/Mijick/NavigationView) - SwiftUI를 사용한 간편한 탐색입니다.
* [MusicPlayerTransition](https://github.com/xxxAIRINxxx/MusicPlayerTransition) - Apple Music iOS 앱과 같은 사용자 지정 대화형 전환입니다.
* [NavigationTransitions](https://github.com/davdroman/swiftui-navigation-transitions) - 순수 SwiftUI 내비게이션 전환입니다.
* [PanSlip](https://github.com/k-lpmg/PanSlip) - PanGesture로 UIViewController 및 UIView의 뷰를 닫습니다.
* [PinterestSwift](https://github.com/demonnico/PinterestSwift) - Pinterest 스타일 전환입니다.
* [RevealingSplashView](https://github.com/PiXeL16/RevealingSplashView) - Twitter 시작 화면에서 영감을 받아 콘텐츠를 애니메이션으로 드러내는 스플래시 뷰입니다.
* [SamuraiTransition](https://github.com/hachinobu/SamuraiTransition) - 깔끔한 여러 자르기 애니메이션을 제공하는 ViewController 전환 모음의 Swift 라이브러리입니다.
* [SPLarkController](https://github.com/ivanvorobei/SPLarkController) - 두 컨트롤러 간 사용자 지정 전환으로, 위로 이동합니다.
* [SPStorkController](https://github.com/ivanvorobei/SPStorkController) - 사용자 지정 높이를 지원하는 Apple Music의 지금 재생 중 컨트롤러입니다.
* [StarWars.iOS](https://github.com/Yalantis/StarWars.iOS) - 뷰 컨트롤러를 작은 조각으로 부수는 전환 애니메이션입니다.
* [Transition](https://github.com/Touchwonders/Transition) - 대화형이며 중단 가능한 사용자 지정 ViewController 전환을 쉽게 만듭니다.

#### 3D
[맨 위로](#readme) 

* [Insert3D](https://github.com/Viktoo/Insert3D) - 3D 모델을 삽입하는 가장 빠른 🚀 방법입니다.

#### UICollectionView
[맨 위로](#readme) 

* [ASCollectionView](https://github.com/abdullahselek/ASCollectionView) - Airbnb에서 영감을 받은 경량 사용자 지정 컬렉션 뷰입니다.
* [AZCollectionViewController](https://github.com/AfrozZaheer/AZCollectionViewController) - CollectionView의 플레이스홀더 뷰와 페이지 매김을 쉽게 통합해 몇 분 만에 Instagram Discover를 만듭니다.
* [Blueprints](https://github.com/zenangst/Blueprints) - 컬렉션 뷰 플로 레이아웃 작업을 간소화하는 프레임워크입니다.
* [BouncyLayout](https://github.com/roberthein/BouncyLayout) - 셀이 튀어 오르는 컬렉션 뷰 레이아웃입니다.
* [CardsLayout](https://github.com/filletofish/CardsLayout) - 멋진 카드 디자인 사용자 지정 CollectionView 레이아웃입니다.
* [CenteredCollectionView](https://github.com/BenEmdon/CenteredCollectionView) - 페이지 전환을 지원하고 셀을 중앙에 배치하는 경량 UICollectionViewLayout입니다.
* [CheckmarkCollectionViewCell](https://github.com/yonat/CheckmarkCollectionViewCell) - 선택 시 체크박스, 선택되지 않았을 때 빈 원을 표시하는 UICollectionViewCell로, Photos.app의 '선택' 모드와 같습니다.
* [CollectionViewShelfLayout](https://github.com/pitiphong-p/CollectionViewShelfLayout) - 중첩 UITableView/UICollectionView 꼼수 없이 App Store 추천 탭처럼 항목을 행으로 표시하는 UICollectionViewLayout 하위 클래스입니다.
* [CollectionViewSlantedLayout](https://github.com/yacir/CollectionViewSlantedLayout) - 기울어진 콘텐츠를 표시하는 UICollectionViewLayout입니다.
* [Drag and Drop UICollectionView](https://github.com/mmick66/KDDragAndDropCollectionView) - 여러 UICollectionView 간 데이터 끌어서 놓기입니다.
* [FSPagerView](https://github.com/WenchaoD/FSPagerView) - 우아한 화면 슬라이드 라이브러리입니다. 배너 뷰, 제품 소개, 시작/안내 페이지, 화면/뷰 컨트롤러 슬라이더 제작에 매우 유용합니다.
* [Gliding Collection](https://github.com/Ramotion/gliding-collection) - UICollectionView 컨트롤러를 위한 부드럽고 유연하며 사용자 지정 가능한 솔루션입니다.
* [GoodProvider](https://github.com/GoodRequest/GRProvider) - 🚀 데이터 표시의 기본 시나리오를 간소화하는 UITableView 및 UICollectionView 공급자입니다.
* [GravitySlider](https://github.com/ApplikeySolutions/GravitySlider) - 표준 UICollectionView 플로 레이아웃을 대체하는 아름다운 구현입니다.
* [ShelfView-iOS](https://github.com/tdscientist/ShelfView-iOS) - 선반에 책을 표시하는 iOS 사용자 지정 뷰입니다.
* [SimpleSource](https://github.com/Squarespace/simple-source ) - 사용하기 쉽고 타입 안전한 iOS 테이블 및 컬렉션 뷰입니다.
* [SwiftSpreadsheet](https://github.com/stuffrabbit/SwiftSpreadsheet) - 완전히 사용자 지정 가능한 스프레드시트 CollectionViewLayout입니다.
* [TagCellLayout](https://github.com/riteshhgupta/TagCellLayout) - 왼쪽, 가운데, 오른쪽 정렬을 지원하는 태그용 UICollectionView 레이아웃입니다.
* [UICollectionViewSplitLayout](https://github.com/yahoojapan/UICollectionViewSplitLayout) - UICollectionViewSplitLayout은 컬렉션 뷰의 반응성을 높입니다.
* [VegaScroll](https://github.com/AppliKeySolutions/VegaScroll) - UICollectionView용 경량 애니메이션 플로 레이아웃입니다.

#### UITableView
[맨 위로](#readme) 

* [AZTableViewController](https://github.com/AfrozZaheer/AZTableViewController) - 자리 표시자 뷰와 페이지 매김을 우아하고 쉽게 통합합니다.
* [CollapsibleTableSectionViewController](https://github.com/jeantimex/CollapsibleTableSectionViewController) - 테이블 뷰에서 접을 수 있는 섹션을 지원하는 라이브러리입니다.
* [DGElasticPullToRefresh](https://github.com/gontovnik/DGElasticPullToRefresh) - 탄성 당겨서 새로 고침입니다.
* [DiffableDataSources](https://github.com/ra1028/DiffableDataSources) - 💾 UITableView/UICollectionViewDiffableDataSource를 이전 버전으로 백포팅하는 라이브러리입니다.
* [DTTableViewManager](https://github.com/DenTelezhkin/DTTableViewManager) - 제네릭과 연관 타입으로 구동되는 프로토콜 지향 UITableView 관리입니다.
* [ExpandableCell](https://github.com/younatics/ExpandableCell) - 더 간결하고 버그 없는 완전 리팩터링 YNExapnadableCell입니다. iOS에서 셀을 가장 쉽게 확장하거나 접을 수 있습니다. UITableViewCell을 원하는 대로 사용자 지정할 수 있습니다. insertRows와 deleteRows 사용이 어렵기 때문에 만들었습니다. ExpandableDelegate를 상속하기만 하면 됩니다.
* [FDTextFieldTableViewCell](https://github.com/fulldecent/FDTextFieldTableViewCell) - 셀에 UITextField를 추가하고 올바른 위치에 배치합니다.
* [folding-cell](https://github.com/Ramotion/folding-cell) - 접히는 셀 전환입니다.
* [GridView](https://github.com/KyoheiG3/GridView) - 시간표, 스프레드시트, 페이지 매김 등으로 사용자 지정할 수 있습니다.
* [HGPlaceholders](https://github.com/HamzaGhazouani/HGPlaceholders) - 프로젝트의 모든 UITableView/UICollectionView에 자리 표시자와 빈 상태를 표시하는 훌륭한 라이브러리입니다.
* [OKTableViewLiaison](https://github.com/okcupid/OKTableViewLiaison) - UITableView를 더 잘 관리하도록 돕는 프레임워크입니다.
* [ParallaxHeader](https://github.com/romansorochak/ParallaxHeader) - UIScrollView/UITableView에 시차 헤더를 추가하는 간단한 방법입니다.
* [Persei](https://github.com/Yalantis/Persei) - UITableView/UICollectionView/UIScrollView용 애니메이션 상단 메뉴입니다.
* [PullToRefreshSwift](https://github.com/dekatotoro/PullToRefreshSwift) - 당겨서 새로 고침 라이브러리입니다.
* [QuickTableViewController](https://github.com/bcylin/QuickTableViewController) - 설정용 UITableView를 만드는 간단한 방법입니다.
* [ReverseExtension](https://github.com/marty-suzuki/ReverseExtension) - 테이블 뷰 하단에 셀을 삽입할 수 있는 UITableView 확장입니다.
* [SelectionList](https://github.com/yonat/SelectionList) - UITableView 기반의 간단한 단일/다중 선택 체크리스트입니다.
* [Shoyu](https://github.com/xai3/Shoyu) - UITableView 구조를 더 쉽게 표현합니다.
* [SwiftyComments](https://github.com/tsucres/SwiftyComments) - 우아한 토론 스레드를 쉽게 만들 수 있는 중첩 확장/축소 셀 계층 구조입니다.
* [SwipeCellKit](https://github.com/SwipeCellKit/SwipeCellKit) - 기본 Mail.app을 기반으로 한 스와이프 가능한 UITableViewCell입니다.
* [WLEmptyState](https://github.com/WizelineLabs/WLEmptyState) - UITableView 데이터 집합이 비어 있을 때 뷰를 사용자 지정하는 구성 요소입니다.
* [YNExpandableCell](https://github.com/younatics/YNExpandableCell) - iOS용 멋진 확장 및 축소 가능 테이블 뷰 셀입니다.

#### 안내
[맨 위로](#readme) 

* [AwesomeSpotlightView](https://github.com/aleksandrshoshiashvili/AwesomeSpotlightView) - 튜토리얼이나 안내 투어를 만듭니다.
* [BWWalkthrough](https://github.com/ariok/BWWalkthrough) - iOS 앱의 사용자 지정 안내를 만드는 클래스입니다.
* [ConcentricOnboarding](https://github.com/exyte/ConcentricOnboarding) - 탭 동작이 있는 안내 또는 온보딩 흐름용 SwiftUI 라이브러리입니다.
* [Gecco](https://github.com/xai3/Gecco) - iOS용 스포트라이트 뷰입니다.
* [Instructions](https://github.com/ephread/Instructions) - 앱 안내 및 단계별 투어를 만드는 라이브러리입니다.
* [OnboardKit](https://github.com/NikolaKirev/OnboardKit) - iOS 앱용 사용자 지정 온보딩입니다.
* [PaperOnboarding](https://github.com/Ramotion/paper-onboarding) - Material Design UI 슬라이더입니다.
* [SuggestionsKit](https://github.com/AlphanumericCharactersOrSingleHyphenz/SuggestionsKit) - 앱 기능을 사용자에게 안내하는 라이브러리입니다.
* [SwiftyOnboard](https://github.com/juanpablofernandez/SwiftyOnboard) - 개발자가 아름다운 온보딩 경험을 만들 수 있는 iOS 프레임워크입니다.
* [SwiftyWalkthrough](https://github.com/ruipfcosta/SwiftyWalkthrough) - 앱에서 훌륭한 안내 경험을 가장 쉽게 만드는 방법입니다.

### 유틸리티
*프로젝트를 돕는 흥미로운 유틸리티입니다.* [맨 위로](#readme) 

* [AlexaSkillsKit](https://github.com/choefele/AlexaSkillsKit) - 사용자 지정 Alexa Skills를 개발합니다.
* [AmoreKit](https://github.com/AmoreComputer/AmoreKit) - App Store 외부에 배포하는 macOS 앱에서 라이선스 키를 판매하고 검증합니다.
* [ApplyStyleKit](https://github.com/shindyu/ApplyStyleKit) - 메서드 체이닝을 사용해 UIKit에 우아하게 스타일을 적용합니다.
* [Basis](https://github.com/typelift/Basis) - 순수 선언형 프로그래밍입니다.
* [Bow](https://github.com/bow-swift/bow) - 타입 기반 함수형 프로그래밍을 위한 보조 라이브러리입니다.
* [CallbackURLKit](https://github.com/phimage/CallbackURLKit) - x-callback-url(앱 간 통신) 구현입니다.
* [Closures](https://github.com/vhesener/Closures) - UIKit 및 Foundation용 Swift다운 클로저입니다.
* [Codextended](https://github.com/JohnSundell/Codextended) - Codable API 타입 추론 기능을 강화하는 확장입니다.
* [Curry](https://github.com/thoughtbot/Curry) - 함수 커링입니다.
* [Delegated](https://github.com/dreymonde/Delegated) - 메모리 누수 없는 클로저 기반 위임입니다.
* [DifferenceKit](https://github.com/ra1028/DifferenceKit) - 💻 빠르고 유연한 O(n) 차이 알고리즘 프레임워크입니다.
* [Differific](https://github.com/zenangst/Differific) - 빠르고 편리한 차이 비교 프레임워크입니다.
* [Dollar](https://github.com/ankurp/Dollar) - JavaScript의 Lo-Dash 또는 Underscore와 유사합니다.
* [DuctTape](https://github.com/marty-suzuki/DuctTape) - 📦 Swift용 KeyPath dynamicMemberLookup 기반 구문 설탕입니다.
* [EtherWalletKit](https://github.com/SteadyAction/EtherWalletKit) - iOS용 Ethereum 지갑 도구 모음입니다. 서버나 블록체인 지식 없이도 Ethereum 지갑을 구현할 수 있습니다.
* [ExceptionCatcher](https://github.com/sindresorhus/ExceptionCatcher) - Objective-C 예외를 잡습니다.
* [EZSwiftExtensions](https://github.com/Esqarrouth/EZSwiftExtensions) - 표준 타입과 클래스가 본래 작동해야 하는 방식을 제공합니다.
* [FlagAndCountryCode](https://github.com/exyte/FlagAndCountryCode) - 모든 국가의 전화 코드와 국기를 제공합니다. UIKit 및 SwiftUI에서 작동합니다.
* [FluentQuery](https://github.com/MihaelIsaev/FluentQuery) :penguin: - 강력하고 사용하기 쉬운 쿼리 빌더입니다.
* [GoodExtensions-iOS](https://github.com/GoodRequest/GoodExtensions-iOS) - 📑 유용하고 자주 사용하는 확장 모음입니다.
* [GoodUIKit](https://github.com/GoodRequest/GoodUIKit) - 📑 더 빠르고 효율적인 개발을 위한 재사용 가능한 UI 스니펫으로 가득한 확장 라이브러리입니다.
* [Highlighter](https://github.com/younatics/Highlighter) - 원하는 무엇이든 강조 표시하세요! UITableViewCell이나 다른 클래스에서 UILabel, UITextView, UITexTfield, UIButton 같은 UI 객체를 자동으로 찾아냅니다.
* [LifetimeTracker](https://github.com/krzysztofzablocki/LifetimeTracker) - 애플리케이션 개발 중 순환 참조 및 메모리 문제를 즉시 드러냅니다.
* [Lumos](https://github.com/sushinoya/Lumos) - Objective-C 런타임 함수용 사용하기 쉬운 API입니다.
* [ObjectiveKit](https://github.com/marmelroy/ObjectiveKit) - Objective-C 런타임 함수용 API입니다.
* [OpenSourceController](https://github.com/floriangbh/OpenSourceController) - 애플리케이션에서 사용하는 라이브러리 라이선스를 표시하는 가장 간단한 방법입니다.
* [Percentage](https://github.com/sindresorhus/Percentage) - 백분율을 더 읽기 쉽고 타입 안전하게 만듭니다.
* [Periphery](https://github.com/peripheryapp/periphery) - Swift 프로젝트에서 사용하지 않는 코드를 찾아내는 도구입니다.
* [Playbook](https://github.com/playbook-ui/playbook-ios) - 📘 UI 구성 요소를 격리해 개발하고 해당 스냅샷을 자동 생성하는 라이브러리입니다.
* [PrivacyFlash Pro](https://github.com/privacy-tech-lab/privacyflash-pro) - Swift iOS 앱 코드에서 개인정보 처리방침을 생성합니다.
* [protobuf-swift](https://github.com/alexeyxo/protobuf-swift) - Protocol Buffers입니다.
* [Prototope](http://khan.github.io/Prototope/) - JS와 연결된 경량 프로토타이핑 인터페이스 라이브러리입니다.
* [R.swift](https://github.com/mac-cain13/R.swift) - 이미지, 셀, 세그 같은 리소스를 강타입 및 자동 완성으로 사용할 수 있는 도구입니다.
* [RandomKit](https://github.com/nvzqz/RandomKit/) :penguin: - 무작위 데이터 생성입니다.
* [ReadabilityKit](https://github.com/exyte/ReadabilityKit) - 뉴스, 기사, 전체 텍스트의 미리 보기 추출기입니다.
* [ReerKit](https://github.com/reers/ReerKit) - iOS/macOS/Linux 개발 워크플로를 강화하는 강력한 Swift 기반 라이브러리로, 확장과 유틸리티 함수를 제공합니다.
* [ResourceKit](https://github.com/bannzai/ResourceKit) - 리소스를 자동 완성으로 사용할 수 있게 합니다.
* [Result](https://github.com/antitypical/Result) - 임의 작업의 성공/실패를 모델링하는 타입입니다.
* [Rugby](https://github.com/swiftyfinch/Rugby) - 🏈 Xcode 프로젝트를 더 빠르게 다시 빌드하고 인덱싱하도록 CocoaPods를 캐시합니다.
* [Runes](https://github.com/thoughtbot/Runes) - flatMap, map, apply 등의 함수형 연산자입니다.
* [Solar](https://github.com/ceeK/Solar) - 위치를 기준으로 일출 및 일몰 시각을 계산합니다.
* [SpriteKit+Spring](https://github.com/ataugeron/SpriteKit-Spring) - SKAction으로 UIView의 스프링 애니메이션을 재현하는 SpriteKit API입니다.
* [Sugar](https://github.com/hyperoslo/Sugar) - Cocoa와 잘 어울리는 달콤한 도구입니다.
* [swift-build](https://github.com/brightdigit/swift-build) - 모든 플랫폼에서 Swift 패키지를 빌드하고 테스트하는 GitHub Action입니다.
* [swift-protobuf](https://github.com/apple/swift-protobuf) :penguin: - Google Protocol Buffer를 사용하는 플러그인 및 런타임 라이브러리입니다.
* [SwiftAutoGUI](https://github.com/NakaokaRei/SwiftAutoGUI) - 마우스와 키보드를 프로그래밍 방식으로 제어합니다. Swift로 macOS를 조작하는 라이브러리입니다.
* [SwiftBoost](https://github.com/sparrowcode/SwiftBoost) - 개발 프로세스를 강화하는 Swift 확장 모음입니다.
* [Swiftbot](https://github.com/noppefoxwolf/Swiftbot) - Slack에서 Swift 코드를 실행합니다.
* [SwifterSwift](https://github.com/SwifterSwift/SwifterSwift) - 생산성을 높이는 500개 이상의 네이티브 확장 모음입니다.
* [SwiftGen-Storyboard](https://github.com/SwiftGen/SwiftGen#uistoryboard) - 모든 Storyboard, Scene, Segue 상수에 대한 `enum`과 적절한 편의 접근자를 자동 생성하는 도구입니다.
* [SwiftLinkPreview](https://github.com/LeonardoCardoso/SwiftLinkPreview) - URL에서 제목, 관련 텍스트, 이미지 등의 정보를 가져와 미리보기를 만듭니다.
* [SwiftPlantUML](https://github.com/MarcoEidinger/SwiftPlantUML) - Swift 소스 코드에서 UML 클래스를 생성하는 명령줄 도구 및 Swift 패키지입니다. Xcode Source Editor Extension으로도 제공됩니다.
* [SwiftRandom](https://github.com/thellimist/SwiftRandom) - 작은 무작위 데이터 생성기입니다.
* [SwiftRater](https://github.com/takecian/SwiftRater) - iPhone 앱 사용자에게 앱 리뷰 작성을 알리는 유틸리티입니다.
* [SwiftTweaks](https://github.com/bryanjclark/SwiftTweaks) - 다시 컴파일하지 않고 iOS 앱을 조정합니다.
* [Swiftx](https://github.com/typelift/Swiftx) - 모든 프로젝트를 위한 함수형 데이터 타입과 함수입니다.
* [SwiftyUtils](https://github.com/tbaranes/SwiftyUtils) - 각 프로젝트에 필요한 모든 재사용 가능 코드입니다.
* [Swiftz](https://github.com/typelift/Swiftz) - 함수형 프로그래밍입니다.
* [SyntaxKit](https://github.com/brightdigit/SyntaxKit) - 선언형 구문으로 Swift 코드를 프로그래밍 방식으로 생성합니다.
* [Then](https://github.com/devxoul/Then) - 이니셜라이저를 위한 아주 달콤한 구문 설탕입니다.
* [TSAO](https://github.com/lilyball/swift-tsao) - 타입 안전 연관 객체입니다.
* [URLQueryItemEncoder](https://github.com/pitiphong-p/URLQueryItemEncoder) - 모든 Encodable 값을 URLQueryItem 배열로 인코딩하는 Encoder입니다.
* [UTIKit](https://github.com/cockscomb/UTIKit) - UTI(Uniform Type Identifier) 래퍼입니다.
* [Vaccine](https://github.com/zenangst/Vaccine) - 앱이 재컴파일로 인한 질병에 걸리지 않도록 합니다.
* [WeakableSelf](https://github.com/vincent-pradeilles/weakable-self) - 클로저 내에서 [weak self]와 guard 문을 캡슐화하는 마이크로 프레임워크입니다.
* [WhatsNew](https://github.com/BalestraPatrick/WhatsNew) - Pages, Numbers, Keynote처럼 앱 업데이트 후 새 기능을 소개합니다.
* [WhatsNewKit](https://github.com/SvenTiigi/WhatsNewKit) - 앱의 새로운 멋진 기능을 소개합니다.
* [XestiMonitors](https://github.com/eBardX/XestiMonitors) - 확장 가능한 모니터링 프레임워크입니다.
* [ZamzamKit](https://github.com/basememara/ZamzamKit) - 표준 라이브러리, Foundation, UIKit용 마이크로 유틸리티 및 확장 모음입니다.

### 유효성 검사
*유효성 검사 라이브러리 모음입니다.* [맨 위로](#readme) 

* [ATGValidator](https://github.com/altayer-digital/ATGValidator) - iOS에서 폼 및 카드 유효성 검사를 지원하는 규칙 기반 유효성 검사 프레임워크입니다.
* [FormValidatorSwift](https://github.com/ustwo/formvalidator-swift) - 텍스트 필드와 텍스트 뷰의 입력을 편리하게 검증합니다.
* [Input Mask](https://github.com/RedMadRobot/input-mask-ios) - 패턴 기반 iOS 사용자 입력 포맷터, 파서, 유효성 검사기입니다.
* [RxValidator](https://github.com/vbmania/RxValidator) - 간단하고 확장 가능하며 유연한 유효성 검사기입니다.
* [SwiftValidator](https://github.com/SwiftValidatorCommunity/SwiftValidator) - 규칙 기반 유효성 검사 라이브러리입니다.
* [SwiftValidators](https://github.com/gkaimakas/SwiftValidators) - iOS용 문자열 유효성 검사입니다(validator.js에서 영감을 받음).
* [ValidatedPropertyKit](https://github.com/SvenTiigi/ValidatedPropertyKit) - 프로퍼티 래퍼로 프로퍼티를 쉽게 검증합니다 👮.

#### 전화번호
*전화번호 관리 라이브러리입니다.* [맨 위로](#readme) 

* [NKVPhonePicker](https://github.com/NikKovIos/NKVPhonePicker) - 국가 코드 선택을 간소화하는 UITextField 하위 클래스입니다.
* [PhoneNumberKit](https://github.com/marmelroy/PhoneNumberKit) - 국제 전화번호 파싱, 서식 지정, 검증을 위한 프레임워크입니다. Google libphonenumber에서 영감을 받았습니다.

### 버전 관리자
[맨 위로](#readme) 

* [AppVersionMonitor](https://github.com/eure/AppVersionMonitor) - iOS 앱 버전을 쉽게 모니터링합니다.
* [Siren](https://github.com/ArtSabintsev/Siren) - 앱의 새 버전이 출시되면 사용자에게 알리고 업그레이드를 안내합니다.
* [Version](https://github.com/mrackwitz/Version) - 시맨틱 버전을 표현하고 비교합니다.
* [Version Tracker Swift](https://github.com/tbaranes/VersionTrackerSwift) - iOS, OS X, tvOS 앱용 버전 추적기입니다.

### 비디오
[맨 위로](#readme) 

* [BMPlayer](https://github.com/BrikerMan/BMPlayer) - AVPlayer 기반 iOS 동영상 플레이어입니다. 가로 및 세로 화면을 지원하며 스와이프로 볼륨, 밝기, 탐색을 조절할 수 있습니다.
* [Cabbage](https://github.com/VideoFlint/Cabbage) - AVFoundation을 기반으로 구축된 동영상 합성 프레임워크입니다.
* [Kitsunebi](https://github.com/noppefoxwolf/Kitsunebi) - OpenGLES를 사용한 알파 채널 동영상 애니메이션 오버레이 플레이어 뷰입니다.
* [MMPlayerView](https://github.com/MillmanY/MMPlayerView) - YouTube 및 Facebook과 같은 효과를 갖춘 사용자 지정 AVPlayerLayer 뷰 및 전환 플레이어입니다.
* [MobilePlayer](https://github.com/sahin/mobileplayer-ios) - 강력하고 완전히 사용자 지정 가능한 iOS용 미디어 플레이어입니다.
* [NextLevelSessionExporter](https://github.com/NextLevel/NextLevelSessionExporter) - 미디어를 내보내고 트랜스코딩합니다.
* [Player](https://github.com/piemonte/Player) - 미디어 재생 및 스트리밍을 위한 iOS 동영상 플레이어 드롭인 구성 요소입니다.
* [PlayerView](https://github.com/davidlondono/PlayerView) - UIView를 사용하는 간편한 동영상 플레이어로 재생 속도, 스크린샷, 플레이어 상태 콜백/위임을 관리합니다.
* [PryntTrimmerView](https://github.com/HHK1/PryntTrimmerView) - 동영상을 자르고 트리밍합니다.
* [SwiftFFmpeg](https://github.com/sunlubo/SwiftFFmpeg) - FFmpeg C API용 래퍼입니다.
* [SwiftVideoBackground](https://github.com/dingwilson/SwiftVideoBackground) - 동영상 배경을 구현하기 쉬운 UIView 하위 클래스입니다.
* [Swifty360Player](https://github.com/abdullahselek/Swifty360Player) - AVPlayer에서 스트리밍하는 iOS 360도 동영상 플레이어입니다.
* [YiVideoEditor](https://github.com/coderyi/YiVideoEditor) - 동영상 회전 및 자르기, 레이어(워터마크) 추가, 오디오(음악) 추가를 지원하는 라이브러리입니다.

## 서버리스

* [Azure Functions for Swift](https://github.com/SalehAlbuga/azure-functions-swift) :penguin: - Azure Functions용 Swift 작업자입니다.


### 기여

먼저 [기여 지침](.github/CONTRIBUTING.md)을 간단히 확인해 주세요. 여기에서 더 이상 유지 관리되지 않거나 적합하지 않은 패키지나 프로젝트를 발견하면 이 파일을 개선하는 풀 리퀘스트를 제출해 주세요. 모든 [기여자](https://github.com/matteocrippa/awesome-swift/graphs/contributors) 여러분, 감사합니다. 정말 멋져요!!