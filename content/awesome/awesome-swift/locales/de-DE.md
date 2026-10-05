# Awesome Swift
 
<!-- 

BITTE DIESE DATEI NICHT AKTUALISIEREN, SONDERN STATTDESSEN CONTENTS.JSON BEARBEITEN. DANKE :-)

 -->



| Awesome | Linux | Projekte | Aktualisiert |
|:-------:|:-----:|:--------:|:-------:|
| [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) | :penguin: | 1107 | 03. August 2026 |

In Zusammenarbeit mit:

[![Codemotion](https://github.com/matteocrippa/awesome-swift/blob/master/.github/images/codemotion_logo.png?raw=true)](https://codemo.tech/partners)



### Inhalt

- [Anleitungen](#guides)
  - [Newsletter](#newsletter)
  - [Offizielle Anleitungen](#official-guides)
  - [Stilrichtlinien](#style-guides)
  - [Anleitungen von Drittanbietern](#third-party-guides)
- [Projektvorlagen](#boilerplates)
- [Interaktive REPL](#repl)
- [Editor-Unterstützung](#editor-support)
  - [Emacs](#emacs)
  - [Google Colaboratory](#google-colaboratory)
  - [Vim](#vim)
- [Benchmark](#benchmark)
- [Konverter](#converters)
- [Weitere Awesome-Listen](#other-awesome-lists)
- [Abhängigkeitsmanager](#dependency-managers)
- [Architekturmuster](#patterns)
- [Verschiedenes](#misc)
- [Bibliotheken](#libs)
  - [Barrierefreiheit](#accessibility)
  - [Künstliche Intelligenz](#ai)
  - [Algorithmen](#algorithm)
  - [Analytik](#analytics)
  - [Animation](#animation)
  - [API](#api)
  - [App-Routing](#app-routing)
  - [App Store](#app-store)
  - [Audio](#audio)
  - [Erweiterte Realität](#augmented-reality)
  - [Authentifizierung](#authentication)
  - [Bots](#bots)
  - [Cache](#cache)
  - [Diagramme](#chart)
  - [Chat](#chat)
  - [Farben](#colors)
  - [Kommandozeile](#command-line)
  - [Nebenläufigkeit](#concurrency)
  - [Währungen](#currency)
  - [Datenverwaltung](#data-management)
    - [CBOR](#cbor)
    - [Core Data](#core-data)
    - [CSV](#csv)
    - [Firebase](#firebase)
    - [GraphQL](#graphql)
    - [JSON](#json)
    - [Schlüssel-Wert-Speicher](#key-value-store)
    - [MongoDB](#mongodb)
    - [Mehrere Datenbanken](#multi-database)
    - [ORM](#orm)
    - [Weitere Daten](#other-data)
    - [Realm](#realm)
    - [SQL-Treiber](#sql-drivers)
    - [SQLite](#sqlite)
    - [TOML](#toml)
    - [XML](#xml)
    - [YAML](#yaml)
    - [ZIP](#zip)
  - [Datum](#date)
  - [Abhängigkeitsinjektion](#dependency-injection)
  - [Gerät](#device)
  - [Dokumentation](#documentation)
  - [E-Mail](#email)
  - [Eingebettete Systeme](#embedded-systems)
    - [Peripheriegeräte](#peripherals)
  - [Ereignisse](#events)
  - [Dateien](#files)
  - [Schriftarten](#fonts)
  - [Spiele-Engine](#game-engine)
    - [2D](#game-engine-2d)
  - [Spiele](#games)
  - [Gesten](#gesture)
  - [Hardware](#hardware)
    - [3D Touch](#3d-touch)
    - [Bluetooth](#bluetooth)
    - [Kamera](#camera)
      - [Barcode](#barcode)
    - [Haptisches Feedback](#haptic-feedback)
    - [iBeacon](#ibeacon)
    - [Sensoren](#sensors)
  - [Bilder](#images)
  - [Key-Value-Coding](#key-value-coding)
  - [Tastatur](#keyboard)
  - [Kit](#kit)
  - [Layout](#layout)
    - [Auto Layout](#auto-layout)
  - [Lokalisierung](#localization)
  - [Standort](#location)
  - [Protokollierung](#logging)
  - [Karten](#maps)
  - [Mathematik](#math)
  - [Verarbeitung natürlicher Sprache](#natural-language-processing)
  - [Netzwerk](#network)
    - [HTML](#html)
    - [Messaging-Protokoll](#messaging-protocol)
    - [SOAP](#soap)
    - [Socket](#socket)
    - [Webserver](#webserver)
  - [OCR](#ocr)
  - [Optimierung](#optimization)
  - [PDF](#pdf)
  - [Qualität](#quality)
  - [Skripting](#scripting)
  - [SDK](#sdk)
  - [Sicherheit](#security)
    - [Kryptografie](#cryptography)
    - [Schlüsselbund](#keychain)
  - [Streaming](#streaming)
  - [Gestaltung](#styling)
  - [SVG](#svg)
  - [System](#system)
  - [Testen](#testing)
    - [Mock](#mock)
  - [Text](#text)
  - [Threads](#thread)
  - [Benutzeroberfläche](#ui)
    - [Alarmmeldungen](#alert)
    - [Unschärfe](#blur)
    - [Schaltflächen](#button)
    - [Kalender](#calendar)
    - [Karten](#cards)
    - [Formulare](#form)
    - [HUD](#hud)
    - [Beschriftungen](#label)
    - [Menü](#menu)
    - [Seitennavigation](#pagination)
    - [Zahlungen](#payment)
    - [Berechtigungen](#permissions)
    - [Bildlaufleisten](#scroll-bars)
    - [StackView](#stackview)
    - [Schalter](#switch)
    - [Tabs](#tab)
    - [Vorlagen](#template)
    - [Textfelder](#textfield)
    - [Übergänge](#transition)
    - [3D](#ui-3d)
    - [UICollectionView](#uicollectionview)
    - [UITableView](#uitableview)
    - [Einführung](#walkthrough)
  - [Dienstprogramme](#utility)
  - [Validierung](#validation)
    - [Telefonnummern](#phone-numbers)
  - [Versionsverwaltung](#version-manager)
  - [Video](#video)
- [Serverless](#serverless)

## Anleitungen
*Eine großartige Liste von Anleitungen rund um Swift.*

### Newsletter
[zurück nach oben](#readme)

* [Open Source Updates for Swift Projects](https://ossp-updates.beehiiv.com/) - Ein zweiwöchentlicher Newsletter mit aktuellen Neuigkeiten zu bekannten und weniger bekannten Open-Source-Projekten, die mit Swift geschrieben wurden oder Swift betreffen.

### Offizielle Anleitungen
[zurück nach oben](#readme)

* [API Design Guidelines](https://www.swift.org/documentation/api-design-guidelines/) - Die offiziellen Richtlinien von Swift für API-Entwurf.
* [Apple eBook](https://books.apple.com/us/book/the-swift-programming-language-swift-5-7/id881256329) - Offizielles Apple-E-Book für Swift-Einsteiger.
* [Getting Started](https://www.swift.org/getting-started/) - Informationen zur Verwendung der Programmiersprache Swift.
* [Introducing SwiftUI](https://developer.apple.com/tutorials/swiftui) - Offizielles SwiftUI-Tutorial mit über vier Stunden Lernmaterial und interaktiven Übungen.

### Stilrichtlinien
[zurück nach oben](#readme)

* [Airbnb](https://github.com/airbnb/swift) - Die offiziellen Stilrichtlinien von Airbnb.
* [Google](https://google.github.io/swift/) - Diese Stilrichtlinien basieren auf dem hervorragenden Stil der Swift-Standardbibliothek von Apple und berücksichtigen außerdem Rückmeldungen aus der Verwendung in mehreren Swift-Projekten bei Google.
* [LinkedIn](https://github.com/linkedin/swift-style-guide) - Die offiziellen Stilrichtlinien von LinkedIn.
* [Raywenderlich](https://github.com/kodecocodes/swift-style-guide) - Die Anleitung von Raywenderlich; unbedingt lesenswert.

### Anleitungen von Drittanbietern
[zurück nach oben](#readme)

* [30 Days of Swift](https://github.com/allenwong/30DaysofSwift) - Ein unterhaltsames 30-Tage-Tutorial.
* [About Swift](https://github.com/NicolaLancellotti/about-swift) - Ein Playground rund um die Sprache Swift.
* [Awesome Swift Education](https://github.com/hsavit1/Awesome-Swift-Education) - Eine sortierte Liste wichtiger Themen der Swift-Sprache.
* [Conferences.digital](https://github.com/zagahr/Conferences.digital) - Konferenzvideos in einer nativen macOS-App ansehen.
* [Developing iOS Apps with Swift](https://podcasts.apple.com/us/podcast/developing-ios-11-apps-with-swift/id1315130780) - Stanford-Kurs von Paul Hegarty.
* [Hacking With Swift](https://www.hackingwithswift.com) - Ein vollständiger, kostenloser Lehrgang zur App-Entwicklung mit 30 praktischen Projekten.
* [Ray Wenderlich Tutorials, Videos, Podcasts and books](https://www.kodeco.com) - Hochwertige Programmier-Tutorials.
* [Swift & SwiftUI Tutorials](http://ww1.janeshswift.com) - SwiftUI einfach lernen.
* [Swift Education](https://github.com/swifteducation) - Eine Gemeinschaft von Lehrkräften, die Materialien zum Unterrichten von Swift und zur App-Entwicklung teilen.
* [swift-tips](https://github.com/vincent-pradeilles/swift-tips) - Eine Reihe nützlicher Tipps von Vincent Pradeilles.
* [SwiftDoc](https://sosumi.ai/) - Automatisch generierte Dokumentation.
* [SwiftGuide CN](https://github.com/ipader/SwiftGuide) - Eine auf Chinesisch verfasste Anleitung.
* [SwiftTips](https://github.com/JohnSundell/SwiftTips) - Eine Sammlung nützlicher Tipps von John Sundell.

## Vorlagen

* [iOS project template](https://github.com/messeb/ios-project-template) - iOS-Projektvorlage mit fastlane-Lanes, Travis-CI-Jobs und GitHub-Integrationen für Codecov, HoundCI für SwiftLint und Danger.
* [Model-View-Presenter template](https://github.com/onl1ner/ios-mvp-template) - Eine flexible und einfache Vorlage, die die Entwicklung deiner iOS-App auf Basis des MVP-Musters beschleunigt.
* [Swift Module Template](https://github.com/fulldecent/swift6-module-template) - Ein vorgegebener Ausgangspunkt für großartige, wiederverwendbare Module.

## Interaktive REPL

* [Online Swift Playground](http://online.swiftplayground.run) - Online-Swift-Playground.
* [SwiftFiddle](https://swiftfiddle.com) - Playground zum Erstellen, Teilen und Einbetten von Swift-Code.

## Editor-Unterstützung
*Unterstützung für deine bevorzugten Editoren.*

### Emacs
[zurück nach oben](#readme)

* [swift-mode](https://github.com/swift-emacs/swift-mode) - Emacs-Unterstützung, einschließlich teilweiser Fehlerprüfung mit flycheck.

### Google Colaboratory
[zurück nach oben](#readme)

* [swift-colab](https://github.com/philipturner/swift-colab) - Swift im Browser ausführen.

### Vim
[zurück nach oben](#readme)

* [swift-vim](https://github.com/keith/swift.vim) - Vim-Laufzeitdateien.
* [vim-polyglot](https://github.com/sheerun/vim-polyglot) - Sprachpaket für Vim mit vim-swift.

## Benchmark

* [xcprofiler](https://github.com/giginet/xcprofiler) - Kommandozeilenwerkzeug zur Profilierung der Kompilierungszeit.

## Konverter

* [Swiftify](https://swiftify.com/#/converter/code/) - Online-Codekonverter und Xcode-Erweiterung von Objective-C nach Swift.
* [Zolang](https://github.com/Zolang/Zolang) :penguin: - Eine DSL zur Codegenerierung in mehreren Programmiersprachen.

## Weitere Awesome-Listen
*Sieh dir Apps aus diesen Projekten an:*
* [Awesome iOS Interview](https://github.com/dashvlas/awesome-ios-interview) - Eine Liste von Fragen zur Vorbereitung auf ein Vorstellungsgespräch.
* [awesome-macOS](https://github.com/iCHAIT/awesome-macOS) - Eine kuratierte Liste großartiger macOS-Anwendungen, Software, Werkzeuge und anderer Dinge.
* [example-ios-apps](https://github.com/jogendra/example-ios-apps) - Eine großartige Liste für Einsteiger, die iOS-Entwicklung lernen, sowie für iOS-Entwickler, die Beispiel-Apps oder Funktionen suchen.
* [open-source-ios-apps](https://github.com/dkhamsing/open-source-ios-apps) - Eine gemeinschaftlich gepflegte Liste quelloffener iOS-Apps.
* [open-source-mac-os-apps](https://github.com/serhii-londar/open-source-mac-os-apps) - Eine großartige Liste quelloffener macOS-Anwendungen.

## Abhängigkeitsmanager
*Software zur Verwaltung von Swift-Abhängigkeiten.*
* [Accio](https://github.com/JamitLabs/Accio) - Ein auf SwiftPM basierender Abhängigkeitsmanager für iOS und verwandte Plattformen, mit Verbesserungen gegenüber Carthage.
* [Carthage](https://github.com/Carthage/Carthage) - Ein neuer Abhängigkeitsmanager.
* [CocoaPods](https://github.com/CocoaPods/CocoaPods) - Der am häufigsten verwendete Abhängigkeitsmanager.
* [Mint](https://github.com/yonaskolb/Mint) - Ein Paketmanager zum Installieren und Ausführen von Swift-Kommandozeilenwerkzeugen.
* [swift-package-manager](https://github.com/swiftlang/swift-package-manager) - SPM ist der Paketmanager für die Programmiersprache Swift.
* [Swiftly](https://github.com/swiftlang/swiftly) - Swift-CLI-Toolchain-Installer zum Installieren verschiedener Swift-Versionen.

## Entwurfsmuster

* [App Architecture](https://github.com/objcio/app-architecture) - Beispielcode zum Buch „App Architecture“.
* [CleanArchitectureRxSwift](https://github.com/sergdort/ModernCleanArchitectureSwiftUI) - Beispiel einer Clean Architecture für iOS-Apps mit RxSwift.
* [Design-Patterns-In-Swift](https://github.com/ochococo/Design-Patterns-In-Swift) - Entwurfsmuster.
* [GoodReactor](https://github.com/GoodRequest/GoodReactor) - ⚛️ Ein von Redux inspiriertes Reactor-Framework zur Kommunikation zwischen View Model, View Controller und Coordinator.
* [Reactant](https://github.com/Brightify/Reactant) - Eine reaktive Architektur für iOS.
* [ReduxUI](https://github.com/gre4ixin/ReduxUI) - Redux-Framework zur einfachen Verwendung mit SwiftUI.
* [SimplexArchitecture](https://github.com/Ryu0118/swiftui-simplex-architecture) - Eine einfache Architektur, die Zustandsänderungen von der SwiftUI-View entkoppelt.
* [Spin](https://github.com/Spinners/Spin.Swift) - Bietet eine vielseitige Feedback-Loop-Implementierung für RxSwift, ReactiveSwift und Combine.
* [StateViewController](https://github.com/davidask/StateViewController) - Zustandsbasierte Komposition von UIViewControllern – die MVC-Lösung für überladene View Controller.
* [SwiftUI Atom Properties](https://github.com/ra1028/swiftui-atom-properties) - Reaktive Datenbindung und Dependency Injection für SwiftUI und Concurrency.
* [The Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture) - Bibliothek zum konsistenten und verständlichen Entwickeln von Anwendungen, mit Fokus auf Komposition, Tests und Ergonomie.
* [Viperit](https://github.com/ferranabello/Viperit) - Viper-Framework für iOS.

## Verschiedenes
*Verschiedene Swift-Projekte.*
* [Beak](https://github.com/yonaskolb/Beak) - Eine Kommandozeilenschnittstelle für deine Swift-Skripte.
* [BetterCodable](https://github.com/marksands/BetterCodable) - Verbessert deine `Codable`-Structs mit Property Wrappers. So musst du seltener ein eigenes `init(from decoder: Decoder)` implementieren und dich mit Boilerplate herumschlagen.
* [CodableWrappers](https://github.com/GottaGetSwifty/CodableWrappers) - Eine Sammlung von Property Wrappers, die die benutzerdefinierte Serialisierung von Codable-Typen vereinfachen.
* [Forked](https://github.com/drewmccormack/Forked) - Allgemeiner Ansatz zur Verwaltung gemeinsam genutzter Daten in Swift-Anwendungen für Local-First-Apps.
* [Fugen](https://github.com/almazrafi/Fugen) - Kommandozeilenwerkzeug zum Exportieren von Ressourcen und Generieren von Code aus Figma-Dateien.
* [MemberwiseInit](https://github.com/gohanlon/swift-memberwise-init-macro) - `@MemberwiseInit` ist ein Swift-Makro, das häufiger den gewünschten `init` bereitstellt und dabei die sicheren Standardeinstellungen der Memberwise-Initialisierer von Swift beibehält.
* [Model2App](https://github.com/Q-Mobile/Model2App) - Verwandle dein Datenmodell in eine funktionierende CRUD-App.
* [Surmagic](https://github.com/gurhub/surmagic) - Erstelle ganz einfach XCFrameworks für mehrere Plattformen auf einmal: iOS, Mac Catalyst, tvOS, macOS und watchOS.
* [SwagGen](https://github.com/yonaskolb/SwagGen) :penguin: - Kommandozeilenwerkzeug, das anhand einer Swagger-Spezifikation und Stencil-Vorlagen eine REST-API generiert.
* [Swiftbrew](https://github.com/swiftbrew/Swiftbrew) - Homebrew für Swift-Pakete.
* [SwiftGen](https://github.com/SwiftGen/SwiftGen) - Eine Sammlung von Werkzeugen zur automatischen Codegenerierung für verschiedene Projektressourcen.
* [SwiftKit](https://github.com/SvenTiigi/SwiftKit) - Starte dein nächstes quelloffenes Swift-Framework 📦.
* [SwiftPlate](https://github.com/JohnSundell/SwiftPlate) - Generiere ganz einfach plattformübergreifende Framework-Projekte über die Kommandozeile.
* [Toybox](https://github.com/giginet/Toybox) - Einfache Verwaltung von Xcode-Playgrounds.
* [Tuist](https://github.com/tuist/tuist) - Ein quelloffenes Kommandozeilenwerkzeug zum Erstellen, Warten und Verwalten umfangreicher Xcode-Projekte.
* [xc](https://github.com/s2mr/xc) - Werkzeug zum Öffnen der Xcode-Projektdatei mit der angegebenen Version.
* [xcbeautify](https://github.com/cpisciotta/xcbeautify) - Kleines Verschönerungswerkzeug für xcodebuild.
* [XcodeGen](https://github.com/yonaskolb/XcodeGen) - Werkzeug zum Generieren von Xcode-Projekten aus einer YAML-Datei und deinem Projektverzeichnis.
* [xcodeproj](https://github.com/tuist/xcodeproj) - Bibliothek zum Lesen, Aktualisieren und Schreiben von Xcode-Projekten und Workspaces.

## Bibliotheken
*Hier findest du eine Liste von Codebeispielen und Bibliotheken für deine Swift-Projekte.*

### Barrierefreiheit
[zurück nach oben](#readme)

* [Capable](https://github.com/chrs1885/Capable) - Verwalte Bedienungshilfen-Einstellungen, nutze kontrastreiche Farben und skalierbare Schriftarten, damit Menschen mit Behinderungen deine App verwenden können.

### KI
*Bibliotheken für KI-Projekte (maschinelles Lernen, neuronale Netze usw.).* [zurück nach oben](#readme)

* [CoreML-Models](https://github.com/likedan/Awesome-CoreML-Models) - Eine Sammlung besonderer Core-ML-Modelle.
* [DL4S](https://github.com/palle-k/DL4S) - Automatische Differenzierung, schnelle Tensoroperationen und dynamische neuronale Netze – von CNNs und RNNs bis zu Transformern.
* [EdgeRunner](https://github.com/christopherkarani/EdgeRunner) - Schnelle, lokale LLM-Inferenz auf Apple Silicon. Von Grund auf mit Swift und Metal entwickelt.
* [Espresso](https://github.com/christopherkarani/Espresso) - Transformer direkt für Apples Neural Engine kompilieren.
* [Fazm](https://github.com/m13v/fazm) - Sprachgesteuerter KI-Agent für macOS mit Bedienungshilfen-APIs und ScreenCaptureKit.
* [Open Agent SDK](https://github.com/terryso/open-agent-sdk-swift) - Quelloffenes Agent-SDK mit vollständigem Agent-Loop, 34 integrierten Werkzeugen, Orchestrierung von Subagenten, MCP-Integration und Unterstützung mehrerer LLM-Anbieter.
* [OpenAI](https://github.com/MacPaw/OpenAI) - Swift-Paket für die öffentliche OpenAI-API.
* [swift-coding-agent](https://github.com/ivan-magda/swift-coding-agent) - Terminal-Coding-Agent mit Subagenten und Kontextkomprimierung.

### Algorithmen
[zurück nach oben](#readme)

* [Algorithm](https://github.com/CosmicMind/Algorithm) - Werkzeugkasten zum Schreiben von Algorithmen und Wahrscheinlichkeitsmodellen.
* [BTree](https://github.com/attaswift/BTree) - Schnelle sortierte Sammlungen für Swift mit In-Memory-B-Bäumen.
* [swift-algorithm-club](https://github.com/kodecocodes/swift-algorithm-club) - Algorithmen und Datenstrukturen mit Erläuterungen.
* [SwiftLCS](https://github.com/Frugghi/SwiftLCS) :penguin: - Implementierung des Longest-Common-Subsequence-Algorithmus (LCS).

### Analytik
*Bibliotheken zur einfachen Erfassung der App-Nutzung.* [zurück nach oben](#readme)

* [Aptabase](https://github.com/aptabase/aptabase) - Quelloffene, datenschutzorientierte und einfache Analytik für Swift-Apps.
* [Scout](https://github.com/kasianov-mikhail/scout) - Produktionsreifes Logging-SDK für iOS-Apps mit CloudKit als Backend.
* [Tracker Aggregator](https://github.com/kafejo/Tracker-Aggregator) - Vielseitige Abstraktionsschicht für Analytik.
* [Umbrella](https://github.com/devxoul/Umbrella) - Abstraktionsschicht für Analytik.

### Animation
*Bibliotheken zur Unterstützung von Animationen.* [zurück nach oben](#readme)

* [Advance](https://github.com/timdonnelly/Advance) - Leistungsstarkes Animations-Framework für iOS, tvOS und OS X.
* [AnimatedGradient](https://github.com/exyte/AnimatedGradient) - Bibliothek für animierte lineare Farbverläufe, geschrieben mit SwiftUI.
* [ChainPageCollectionView](https://github.com/jindulys/ChainPageCollectionView) - Ausgefallenes Layout und Animation für zweistufige Collection Views.
* [CocoaSprings](https://github.com/MacPaw/CocoaSprings) - Interaktive Federanimationen für iOS und macOS.
* [Comets](https://github.com/cruisediary/Comets) - Animierte Partikel.
* [Ease](https://github.com/roberthein/Ease) - Alles mit Ease animieren.
* [EasyAnimation](https://github.com/icanzilb/EasyAnimation) - Bringt die Möglichkeiten von UIView.animateWithDuration(_:, animations:...) auf ein neues Niveau.
* [Elephant](https://github.com/s2mr/Elephant) - Elegantes SVG-Animationskit.
* [FlightAnimator](https://github.com/AntonTheDev/FlightAnimator) - Natürliches, blockbasiertes Core-Animation-Framework.
* [Gemini](https://github.com/shoheiyokoyama/Gemini) - Leistungsstarkes animationsbasiertes Scroll-Framework.
* [IBAnimatable](https://github.com/IBAnimatable/IBAnimatable) - Entwirf und prototypisiere UI, Interaktionen, Navigation, Übergänge und Animationen für App-Store-fertige Apps direkt im Interface Builder.
* [Interpolate](https://github.com/marmelroy/Interpolate) - Interpolations-Framework für interaktive, gestengesteuerte Animationen.
* [lottie-ios](https://github.com/airbnb/lottie-ios) - iOS-Bibliothek zur nativen Darstellung von After-Effects-Vektoranimationen.
* [Pastel](https://github.com/cruisediary/Pastel) - Farbverlauf-Animation wie bei Instagram.
* [Poi](https://github.com/HideakiTouhara/Poi) - Ermöglicht eine kartenartige Benutzeroberfläche ähnlich Tinder und lässt sich wie eine Table View verwenden.
* [Presentation](https://github.com/hyperoslo/Presentation) - Bibliothek zum Erstellen von Tutorials, Versionshinweisen und animierten Seiten.
* [Pulsator](https://github.com/shu223/pulsator) - Pulsanimation für iOS.
* [Sica](https://github.com/cats-oss/Sica) - Einfache Interface Core Animation. Führt typsichere Animationen sequenziell oder parallel aus.
* [Spring](https://github.com/MengTo/Spring) - Bibliothek zur Vereinfachung von iOS-Animationen.
* [SpriteKitEasingSwift](https://github.com/craiggrummitt/SpriteKitEasingSwift) - Besseres Easing für SpriteKit.
* [spruce-ios](https://github.com/willowtreeapps/spruce-ios) - Choreografiere Animationen auf dem Bildschirm.
* [Stellar](https://github.com/AugustRush/Stellar) - Bibliothek für physikalische Animationen.
* [TheAnimation](https://github.com/marty-suzuki/TheAnimation) - Typsicherer CAAnimation-Wrapper, der falsche Werttypen verhindert.
* [ViewAnimator](https://github.com/marcosgriselli/ViewAnimator) - Erweckt deine UI mit nur einer Zeile zum Leben.
* [YapAnimator](https://github.com/yapstudios/YapAnimator) - Schnelles und benutzerfreundliches physikbasiertes Animationssystem.

### API
*Schnelle Bibliotheken für den Zugriff auf APIs von Drittanbietern.* [zurück nach oben](#readme)

* [GitHubAPI](https://github.com/serhii-londar/GithubAPI) - Implementierung der GitHub-REST-API v3.
* [GitHubRestAPISwiftOpenAPI](https://github.com/Wei18/github-rest-api-swift-openapi) - Generiert planmäßig die GitHub-REST-API aus der OpenAPI-Spezifikation als Swift-Code.
* [PXGoogleDirections](https://github.com/poulpix/PXGoogleDirections) - Hilfsbibliothek für die Google-Directions-API.
* [RandomUserSwift](https://github.com/dingwilson/RandomUserSwift) - Framework zur Erzeugung zufälliger Nutzer; ein inoffizielles SDK für randomuser.me.
* [reddift](https://github.com/sonsongithub/reddift) - Wrapper für die Reddit-API.
* [SwiftDisc](https://github.com/M1tsumi/SwiftDisc) - Discord-API-Bibliothek für Bots und Integrationen.
* [Swifter Twitter](https://github.com/mattdonnelly/Swifter) - Twitter-Framework.
* [Swiftkube](https://github.com/swiftkube/client) :penguin: - Swift-Client für Kubernetes.
* [SwiftlySalesforce](https://github.com/mike4aday/SwiftlySalesforce) - Framework zur schnellen Entwicklung nativer iOS-Apps mit Salesforce-Integration.
* [SwiftyInsta](https://github.com/TheM4hd1/SwiftyInsta) - Private, tokenlose REST-API für Instagram.
* [YouTubeKit](https://github.com/b5i/YouTubeKit) - Zugriff auf die YouTube-API ohne API-Schlüssel.

### App-Routing
*Interne App-Routing-Systeme.* [zurück nach oben](#readme)

* [Appz](https://github.com/SwiftKitz/Appz) - Starte externe Apps und verwende Deep Links ganz einfach.
* [Crossroad](https://github.com/giginet/Crossroad) - :oncoming_bus: URL-Router mit Schwerpunkt auf benutzerdefinierten URL-Schemata.
* [LightRoute](https://github.com/SpectralDragon/LiteRoute) - Routing zwischen VIPER-Modulen.
* [Linker](https://github.com/MaksimKurpa/Linker) - Einfache Verwaltung interner und externer Deep Links für iOS.
* [MonarchRouter](https://github.com/nikans/MonarchRouter) - Deklarativer zustands- und URL-basierter Router mit komplexen automatischen Übergängen in der View-Controller-Hierarchie und bewährten serverseitigen Konventionen.
* [RxFlow](https://github.com/RxSwiftCommunity/RxFlow) - Navigations-Framework für iOS-Anwendungen auf Basis eines reaktiven Flow-Coordinator-Musters.
* [SwiftCurrent](https://github.com/wwt/SwiftCurrent) - Verwaltung komplexer Workflows überall dort, wo Swift ausgeführt werden kann, mit integrierter Unterstützung für UIKit, Storyboards und SwiftUI.
* [SwiftRouter](https://github.com/skyline75489/SwiftRouter) - URL-Router für iOS.
* [SwiftUIRoutes](https://github.com/gabriel/swiftui-routes) - Minimaler und flexibler Router für SwiftUI-Apps.
* [URLNavigator](https://github.com/devxoul/URLNavigator) - Elegantes URL-Routing.

### App Store
*Bibliotheken für den Apple App Store, In-App-Käufe und Belegvalidierung.* [zurück nach oben](#readme)

* [Apphud](https://github.com/apphud/ApphudSDK) - Leichtgewichtige Bibliothek zur einfachen Verwaltung automatisch verlängerbarer Abonnements, ganz ohne Backend.
* [AppReview](https://github.com/mezhevikin/AppReview) - Kleine Bibliothek zum Anfordern einer Bewertung im App Store über SKStoreReviewController.
* [Flare](https://github.com/space-code/flare) - Vereinfacht In-App-Käufe unter iOS, macOS, tvOS und watchOS und unterstützt StoreKit 1 und StoreKit 2 vollständig.
* [InAppPurchase](https://github.com/jinSasaki/InAppPurchase) - Einfaches, leichtgewichtiges und sicheres Framework für In-App-Käufe.
* [merchantkit](https://github.com/benjaminmayo/merchantkit) - Modernes Framework zur Verwaltung von In-App-Käufen für iOS.
* [SwiftyStoreKit](https://github.com/bizz84/SwiftyStoreKit) - Leichtgewichtiges Framework für In-App-Käufe.

### Audio
*Bibliotheken für die Audiobearbeitung.* [zurück nach oben](#readme)

* [AudioKit](https://github.com/audiokit/AudioKit) - Leistungsstarke Audiosynthese, -verarbeitung und -analyse ohne steile Lernkurve.
* [AudioPlayer](https://github.com/delannoyk/AudioPlayer) - Wrapper um AVPlayer mit einigen praktischen Funktionen.
* [AudioPlayerSwift](https://github.com/tbaranes/AudioPlayerSwift) - Einfache Klasse zur Audiowiedergabe (grundlegend und fortgeschritten) in iOS-, OS-X- und tvOS-Apps.
* [Beethoven](https://github.com/vadymmarkov/Beethoven) - Audiobibliothek zur Tonhöhenerkennung in Musiksignalen.
* [FDSoundActivatedRecorder](https://github.com/fulldecent/FDSoundActivatedRecorder) - Startet die Aufnahme, wenn der Nutzer spricht.
* [FDWaveformView](https://github.com/fulldecent/FDWaveformView) - Einfache Darstellung einer Audiowellenform in deiner App.
* [FluidAudio](https://github.com/FluidInference/FluidAudio) - SDK für Echtzeit-Audioanalyse direkt auf iOS/macOS-Geräten (Diarisierung, Identifikation, VAD, Trennung, Embeddings, ASR); Core-ML-Modelle werden direkt aus PyTorch konvertiert, um die Leistung der Apple Neural Engine zu nutzen.
* [ModernAVPlayer](https://github.com/noreasonprojects/ModernAVPlayer) - Persistenter AVPlayer, der die Wiedergabe nach einer schlechten Netzwerkverbindung auch im Hintergrund fortsetzt.
* [MusicKit](https://github.com/0thernet/MusicKit) - Framework zum Komponieren und Transformieren von Musik.
* [Soundable](https://github.com/lcardevnas/Soundable) - Spielt Klänge einzeln oder nacheinander auf einfache Weise ab.
* [SwiftAudioPlayer](https://github.com/tanhakabir/SwiftAudioPlayer) - Einfacher Audioplayer für iOS, der streamt und Audio in Echtzeit mit AVAudioEngine bearbeitet.
* [SwiftySound](https://github.com/adamcichy/SwiftySound) - Einfache Bibliothek zur Audiowiedergabe mit nur einer Codezeile.
* [voice-overlay-ios](https://github.com/algolia/voice-overlay-ios) - Overlay, das die Erlaubnis zur Spracheingabe einholt und Spracheingaben in einer anpassbaren UI als Text entgegennimmt.

### Erweiterte Realität
[zurück nach oben](#readme)

* [ARHeadsetKit](https://github.com/philipturner/ARHeadsetKit) - High-Level-Framework, das ein 5-Dollar-Google-Cardboard zur Nachbildung der Microsoft HoloLens nutzt.
* [ARKit-CoreLocation](https://github.com/AndrewHartAR/ARKit-CoreLocation) - Verbindet die hohe Genauigkeit von AR mit der Reichweite von GPS-Daten.
* [ARKit-Navigation](https://github.com/chriswebb09/ARKitNavigationDemo) - Navigation in erweiterter Realität mit MapKit.
* [ARVideoKit](https://github.com/AFathi/ARVideoKit) - Nimmt ARKit-Videos, Fotos, Live Photos und GIFs auf.

### Authentifizierung
*Einfache Verwaltung der Authentifizierung in deinen Apps.* [zurück nach oben](#readme)

* [Cely](https://github.com/cely-tools/Cely) - Plug-and-Play-Framework für Anmeldungen.
* [LinkedInSignIn](https://github.com/serhii-londar/LinkedInSignIn) - Einfacher View Controller zur Anmeldung und zum Abrufen eines LinkedIn-Zugriffstokens.
* [LoginKit](https://github.com/IcaliaLabs/LoginKit) - Schnelle und einfache Ergänzung einer Anmelde-/Registrierungsoberfläche für deine iOS-App.
* [ReCaptcha](https://github.com/fjcaetano/ReCaptcha) - Sichtbares oder unsichtbares reCAPTCHA für iOS.
* [SpotifyLogin](https://github.com/spotify/SpotifyLogin) - Authentifizierung über die Spotify-API.

### Bots
*Bibliotheken zum Erstellen von Bots.* [zurück nach oben](#readme)

* [Telegram Bot SDK](https://github.com/rapierorg/telegram-bot-swift) :penguin: - Inoffizielles SDK.
* [Telegrammer](https://github.com/givip/Telegrammer) :penguin: - Quelloffenes Framework für Telegram-Bot-Entwickler. Es basiert auf Apple/SwiftNIO und bietet dadurch hervorragende Leistung.

### Cache
[zurück nach oben](#readme)

* [AwesomeCache](https://github.com/aschuch/AwesomeCache) - Cache einfach verwalten.
* [Cache](https://github.com/hyperoslo/Cache) - Nichts als Cache.
* [CachyKit](https://github.com/Sadmansamee/CachyKit) - Cache-Bibliothek für JSON, Bilder, ZIP-Dateien oder beliebige Objekte mit Ablaufdatum/TTYL und erzwungener Aktualisierung.
* [Cachyr](https://github.com/nrkno/yr-cachyr) - Kleiner Schlüssel-Wert-Datencache für iOS, macOS und tvOS.
* [Carlos](https://github.com/spring-media/Carlos) - Einfacher und flexibler Cache.
* [EVURLCache](https://github.com/evermeer/EVURLCache) - Damit deine App auch offline funktioniert.
* [MemoryCache](https://github.com/yysskk/MemoryCache) - Typsicherer Speicher-Cache.
* [Monstra](https://github.com/yangchenlarkin/Monstra) - Speicher-Cache-Framework mit TTL, prioritätsbasierter Verdrängung und Schutz vor Cache-Avalanches.

### Diagramme
[zurück nach oben](#readme)

* [Charts](https://github.com/ChartsOrg/Charts) - Ansprechende Diagramme für iOS/tvOS/OSX (Portierung von MPAndroidChart).
* [ChartView](https://github.com/AppPear/ChartView) - Swift-Paket zur mühelosen Darstellung ansprechender Diagramme.
* [FLCharts](https://github.com/francescoleoni98/FLCharts) - Einfach zu verwendende und stark anpassbare Diagrammbibliothek für iOS.
* [ScrollableGraphView](https://github.com/philackm/ScrollableGraphView) - Anpassbare, scrollbare Diagramm-View zur Visualisierung einfacher diskreter Datensätze unter iOS.
* [SwiftChart](https://github.com/gpbl/SwiftChart) - Einfache Linien- und Flächendiagrammbibliothek für iOS. Unterstützt mehrere Datenreihen, teilweise gefüllte Reihen und Touch-Ereignisse.
* [SwiftCharts](https://github.com/ivnsch/SwiftCharts) - Hochgradig anpassbare Diagramme für iOS.
* [SwiftUICharts](https://github.com/willdale/SwiftUICharts) - Diagramm- und Plot-Bibliothek für SwiftUI auf macOS, iOS, watchOS und tvOS mit integrierter Barrierefreiheit und Lokalisierung.
* [TKRadarChart](https://github.com/TBXark/TKRadarChart) - Anpassbares Netzdiagramm.

### Chat
*Bibliotheken zum Erstellen von Chat-Apps.* [zurück nach oben](#readme)

* [Chatto](https://github.com/badoo/Chatto) - Leichtgewichtiges Framework zum Erstellen von Chat-Anwendungen.
* [ExyteChat](https://github.com/exyte/chat) - SwiftUI-Framework für Chat-Oberflächen mit vollständig anpassbaren Nachrichten, Eingabeansicht und integrierter Medienauswahl.
* [InputBarAccessoryView](https://github.com/nathantannar4/InputBarAccessoryView) - Einfache und leicht anpassbare InputAccessoryView für leistungsstarke Eingabeleisten mit Autovervollständigung und Anhängen.
* [MessageKit](https://github.com/MessageKit/MessageKit) - Von der Community entwickelte Alternative zu JSQMessagesViewController.
* [MessengerKit](https://github.com/steve228uk/MessengerKit) - UI-Framework zum Erstellen von Messenger-Oberflächen.
* [Real-time Chat with Firebase](https://github.com/dopebase/messenger-iOS-chat-swift-firestore) - Funktionsfähige Echtzeit-Chat-App mit Firebase Firestore und MessageKit.
* [swiftui-messaging-ui](https://github.com/FluidGroup/swiftui-messaging-ui) - Elementare SwiftUI-Chat-UI-Komponente mit stabilem Voranstellen älterer Nachrichten ohne Scrollsprünge.

### Farben
*Interessante Codebeispiele zur Farbverwaltung und zu Farbwerkzeugen.* [zurück nach oben](#readme)

* [ChromaColorPicker](https://github.com/joncardasis/ChromaColorPicker) - Intuitive und unterhaltsame Farbauswahl für iOS.
* [ColorKit](https://github.com/Boris-Em/ColorKit) - Erweiterte Farbmanipulation für iOS.
* [DynamicColor](https://github.com/yannickl/DynamicColor) - Erweiterung zur einfachen Bearbeitung von Farben.
* [Gradients](https://github.com/Gradients/Gradients) - Kuratierte Sammlung von über 180 wunderschönen Farbverläufen.
* [Hue](https://github.com/zenangst/Hue) - Hue ist das vielseitige Farbwerkzeug, das du brauchst.
* [PrettyColors](https://github.com/jdhealy/PrettyColors) - Formatiert und koloriert Terminaltext mit ANSI-Escape-Codes gemäß ECMA-48-Standard.
* [SheetyColors](https://github.com/chrs1885/SheetyColors) - Farbauswahl im Stil eines Action Sheets für iOS.
* [SwiftGen-Colors](https://github.com/SwiftGen/SwiftGen#uicolor) - Werkzeug zur automatischen Generierung von `enums` für deine `UIColor`-Konstanten.
* [SwiftHEXColors](https://github.com/thii/SwiftHEXColors) - Erweiterung für UIColor zur Verarbeitung von HEX-Farben.
* [UIColor-Hex-Swift](https://github.com/yeahdongcn/UIColor-Hex-Swift) - Konverter von Hex-Werten zu UIColor.
* [UIGradient](https://github.com/dqhieu/UIGradient) - Einfache und leistungsstarke Bibliothek für Farbverlauf-Ebenen, Bilder und Farben.

### Kommandozeile
*Erstelle Kommandozeilenanwendungen.* [zurück nach oben](#readme)

* [Ashen](https://github.com/colinta/Ashen) - Framework zum Schreiben von Terminalanwendungen in Swift, basierend auf The Elm Architecture.
* [Commander](https://github.com/kylef/Commander) :penguin: - Erstelle ansprechende Kommandozeilenschnittstellen.
* [Guaka](https://github.com/nsomar/Guaka) :penguin: - Intelligentes und ansprechendes, POSIX-konformes Kommandozeilen-Framework.
* [LineNoise](https://github.com/andybest/linenoise-swift) :penguin: - Ersatz für readline ohne Abhängigkeiten.
* [Mocker](https://github.com/us/mocker) - Docker-kompatible Container-CLI für macOS auf Basis von Apples Containerization-Framework.
* [nef](https://github.com/bow-swift/nef) - Sammlung von Kommandozeilenwerkzeugen zur Kompilierzeitprüfung deiner in Xcode-Playgrounds verfassten Dokumentation.
* [Progress.swift](https://github.com/jkandzi/Progress.swift) :penguin: - Ansprechende Fortschrittsbalken für die Kommandozeile.
* [Swift Argument Parser](https://github.com/apple/swift-argument-parser) - Einfaches, typsicheres Parsen von Swift-Argumenten.
* [SwiftCLI](https://github.com/jakeheis/SwiftCLI) :penguin: - Leistungsstarkes Framework zur Entwicklung einer CLI.
* [Swiftline](https://github.com/nsomar/Swiftline) - Werkzeugsammlung zum Erstellen von Kommandozeilenanwendungen.
* [SwiftShell](https://github.com/kareman/SwiftShell) - Bibliothek zum Erstellen von Kommandozeilenanwendungen und Ausführen von Shell-Befehlen.
* [SwiftyTextTable](https://github.com/scottrhoyt/SwiftyTextTable) :penguin: - Leichtgewichtige Bibliothek zum Generieren von Texttabellen.

### Nebenläufigkeit
*Einfachere Möglichkeiten für nebenläufige Abläufe.* [zurück nach oben](#readme)

* [async+](https://github.com/async-plus/async-plus) :penguin: - Verkettbare Schnittstelle für async/await in Swift 5.5.
* [AsyncNinja](https://github.com/AsyncNinja/AsyncNinja) - Vollständige Sammlung von Nebenläufigkeits- und reaktiven Programmierprimitiven.
* [AsyncQueue](https://github.com/dfed/swift-async-queue) :penguin: - Warteschlangen zum geordneten Senden von Aufgaben aus synchronen in asynchrone Kontexte.
* [Futures](https://github.com/davidask/Futures) :penguin: - Leichtgewichtige Promises für iOS, macOS, tvOS, watchOS und serverseitige Anwendungen.
* [GroupWork](https://github.com/quanvo87/GroupWork) :penguin: - Einfache nebenläufige und asynchrone Aufgaben.
* [Hydra](https://github.com/malcommac/Hydra) - Promises und Await – für besseren asynchronen Code.
* [Queuer](https://github.com/FabrizioBrancati/Queuer) :penguin: - Warteschlangenverwaltung auf Basis von OperationQueue und Dispatch (auch GCD genannt).
* [SwiftCoroutine](https://github.com/belozierov/SwiftCoroutine) :penguin: - Coroutinen für iOS, macOS und Linux.
* [Throttler](https://github.com/boraseoksoon/Throttler) - Begrenzt eine große Zahl asynchroner Eingaben mit nur einer API-Zeile.
* [Venice](https://github.com/Zewo/Venice) :penguin: - Communicating Sequential Processes (CSP), bereit für Linux.

### Währungen
[zurück nach oben](#readme)


### Datenverwaltung
[zurück nach oben](#readme)


#### CBOR
*Concise Binary Object Representation.* [zurück nach oben](#readme)

* [CBORCoding](https://github.com/SomeRandomiOSDev/CBORCoding) :penguin: - Einfaches CBOR-Kodieren und -Dekodieren für iOS, macOS, tvOS und watchOS.

#### Core Data
*Keine Mühen mehr mit Core Data: Hier findest du interessante Bibliotheken zur Datenverwaltung.* [zurück nach oben](#readme)

* [AERecord](https://github.com/tadija/AERecord) - Großartiger Core-Data-Wrapper für iOS.
* [CloudCore](https://github.com/deeje/CloudCore/) - Zuverlässige CloudKit-Synchronisierung mit Offline-Bearbeitung, Beziehungen, geteilten und öffentlichen Datenbanken und mehr.
* [CoreStore](https://github.com/JohnEstropia/CoreStore) - Einfache und elegante Verwaltung von Core Data.
* [DataKernel](https://github.com/mrdekk/DataKernel) - Minimalistischer Wrapper um den Core-Data-Stack, der Persistenzoperationen vereinfacht – ohne externe Abhängigkeiten.
* [Graph](https://github.com/CosmicMind/Graph) - Elegantes, datengesteuertes Framework für Core Data.
* [JSQCoreDataKit](https://github.com/jessesquires/JSQCoreDataKit) - Ein Swift-ähnlicherer Core-Data-Stack.
* [JustPersist](https://github.com/justeat/JustPersist) - Einfachste und sicherste Persistenzlösung für iOS mit integrierter Core-Data-Unterstützung.
* [QueryKit](https://github.com/QueryKit/QueryKit) - Einfache Filterung von Core Data.
* [Skopelos](https://github.com/albertodebortoli/Skopelos) - Minimalistische, threadsichere, boilerplate-freie und einfach zu verwendende Active-Record-Implementierung für Core Data.
* [SugarRecord](https://github.com/modo-studio/SugarRecord) - Unterstützung für Core Data und Realm.

#### CSV
*Hilfreiche Bibliotheken zum Parsen und Serialisieren von CSV-Daten (Comma-Separated Values).* [zurück nach oben](#readme)

* [CodableCSV](https://github.com/dehesa/CodableCSV) :penguin: - CSV-Dateien zeilenweise oder über Swifts Codable-Schnittstelle lesen und schreiben.
* [CSVParser](https://github.com/Nero5023/CSVParser) :penguin: - Schneller CSV-Parser.

#### Firebase
[zurück nach oben](#readme)

* [Ballcap](https://github.com/1amageek/Ballcap-iOS) - Framework zum Entwurf von Datenbankschemata für Cloud Firestore.

#### GraphQL
[zurück nach oben](#readme)

* [SociableWeaver](https://github.com/NicholasBellucci/SociableWeaver) - Deklarative GraphQL-Abfragen und -Mutationen erstellen.

#### JSON
*Probleme mit JSON-Daten? Hier sind interessante Möglichkeiten zur Verarbeitung.* [zurück nach oben](#readme)

* [AlamofireObjectMapper](https://github.com/tristanhimmelman/AlamofireObjectMapper) - Alamofire-Erweiterung, die JSON-Antwortdaten mit ObjectMapper in Objekte umwandelt.
* [Alembic](https://github.com/ra1028/Alembic) - Funktionales Parsen von JSON, Zuordnung zu Objekten und Serialisierung in JSON.
* [Argo](https://github.com/thoughtbot/Argo) - Bibliothek zum Parsen von JSON.
* [Arrow](https://github.com/freshOS/Arrow) - Elegantes JSON-Parsing.
* [Decodable](https://github.com/Anviking/Decodable) :penguin: - JSON-Parsing.
* [Elevate](https://github.com/Nike-Inc/Elevate) - JSON-Parsing-Framework für einfaches, zuverlässiges und komponierbares Parsen.
* [EVReflection](https://github.com/evermeer/EVReflection) - Reflektionsbasiertes Kodieren und Dekodieren von JSON, einschließlich Unterstützung für NSDictionary, NSCoding, Printable, Hashable und Equatable.
* [HandyJSON](https://github.com/alibaba/handyjson) - Praktische Bibliothek zur Serialisierung und Deserialisierung von JSON-Objekten.
* [Himotoki](https://github.com/ikesyo/Himotoki) - Typsichere JSON-Dekodierungsbibliothek.
* [JASON](https://github.com/delba/JASON) - Leistungsstarkes JSON-Parsing mit praktischen Operatoren.
* [JSONHelper](https://github.com/isair/JSONHelper) - Blitzschnelle JSON-Deserialisierung und Wertkonvertierung für iOS und OS X.
* [JSONNeverDie](https://github.com/johnlui/JSONNeverDie) - Automatische Reflektion von JSON zu Model und benutzerfreundlicher JSON-Encoder/-Decoder mit dem Ziel, dauerhaft zu bestehen.
* [ObjectMapper](https://github.com/tristanhimmelman/ObjectMapper) - JSON-Objektzuordnung.
* [PMJSON](https://github.com/postmates/PMJSON) - Bibliothek zum Kodieren und Dekodieren von JSON.
* [ReerCodable](https://github.com/reers/ReerCodable) - Codable-Erweiterungen mithilfe von Swift-Makros.
* [Sextant](https://github.com/KittyMac/Sextant) :penguin: - Leistungsstarke JSONPath-Abfragen.
* [SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON) - JSON-Bibliothek mit Fehlerbehandlung.
* [SwiftyJSONAccelerator](https://github.com/insanoid/SwiftyJSONAccelerator) - macOS-App zur Generierung von Swift-5-Modellen für JSON (mit Codable).

#### Schlüssel-Wert-Speicher
[zurück nach oben](#readme)

* [Default](https://github.com/Nirma/Default) - Moderne Schnittstelle für UserDefaults mit Codable-Unterstützung.
* [Defaults](https://github.com/sindresorhus/Defaults) - Typsichere UserDefaults mit Codable-Unterstützung und Schlüsselbeobachtung.
* [DefaultsKit](https://github.com/nmdias/DefaultsKit) - Einfache, stark typisierte UserDefaults für iOS, macOS und tvOS.
* [Prephirences](https://github.com/phimage/Prephirences) - Verwaltung von App-Einstellungen, NSUserDefaults, iCloud, Keychain und mehr.
* [SecureDefaults](https://github.com/vpeschenkov/SecureDefaults) - Leichtgewichtiger Wrapper für UserDefaults und NSUserDefaults mit zusätzlicher AES-256-Verschlüsselung.
* [Storez](https://github.com/SwiftKitz/Storez) - Sichere, statisch typisierte und speicherunabhängige Schlüssel-Wert-Ablage.
* [SwiftStore](https://github.com/hemantasapkota/SwiftStore) - Schlüssel-Wert-Speicher auf Basis von LevelDB.
* [SwiftyUserDefaults](https://github.com/sunshinejr/SwiftyUserDefaults) - Klarere und angenehmere Syntax für NSUserDefaults.
* [Zephyr](https://github.com/ArtSabintsev/Zephyr) - Mühelose Synchronisierung von NSUserDefaults über iCloud.

#### MongoDB
[zurück nach oben](#readme)

* [MongoKitten](https://github.com/orlandos-nl/MongoKitten) :penguin: - MongoDB-Connector.
* [Perfect-MongoDB](https://github.com/PerfectlySoft/Perfect-MongoDB) :penguin: - Eigenständiger Wrapper um die mongo-c-Clientbibliothek für den Zugriff auf MongoDB-Server.

#### Mehrere Datenbanken
*Datenverwaltungsschichten für mehrere Datenquellen.* [zurück nach oben](#readme)

* [ModelAssistant](https://github.com/ssamadgh/ModelAssistant) - Elegante Bibliothek zur Verwaltung der Interaktion zwischen View und Model.
* [PersistenceKit](https://github.com/Teknasyon-Teknoloji/PersistenceKit) - Codable-Objekte mit wenigen Codezeilen in verschiedenen Persistenzschichten speichern und abrufen.
* [Shallows](https://github.com/dreymonde/Shallows) - Dein leichtgewichtiges Werkzeugset für Persistenz.

#### ORM
[zurück nach oben](#readme)

* [fluent](https://github.com/vapor/fluent) :penguin: - Einfache Active-Record-Implementierung.
* [Perfect-CRUD](https://github.com/PerfectlySoft/Perfect-CRUD) :penguin: - CRUD ist ein objekt-relationales Mapping-System (ORM), das das Codable-Protokoll verwendet.

#### Weitere Daten
*Weitere Möglichkeiten zur Datenpersistenz.* [zurück nach oben](#readme)

* [CacheAdvance](https://github.com/dfed/CacheAdvance) - Leistungsstarker Cache für Logging-Systeme. CacheAdvance speichert Log-Ereignisse 30-mal schneller als SQLite.
* [CoreXLSX](https://github.com/CoreOffice/CoreXLSX) - Unterstützung für das Excel-Tabellenformat (XLSX).
* [Disk](https://github.com/saoudrizwan/Disk) - Praktisches Framework zur einfachen Persistierung von Structs, Bildern und Daten unter iOS.
* [EVCloudKitDao](https://github.com/evermeer/EVCloudKitDao) - Vereinfachter Zugriff auf CloudKit mit Unterstützung für Abonnements und lokalen Cache.
* [KeyPathKit](https://github.com/vincent-pradeilles/KeyPathKit) - Nahtlose Syntax zur Datenbearbeitung über typisierte Keypaths.
* [LeetCode-Swift](https://github.com/soapyigu/LeetCode-Swift) - Lösungen für LeetCode-Vorstellungsgesprächsfragen.
* [Pencil](https://github.com/naru-jpn/pencil) - Beliebige Werte in Dateien schreiben.
* [StorageManager](https://github.com/iAmrSalman/StorageManager) - Sichere und einfache Verwendung von FileManager als Datenbank.

#### Realm
[zurück nach oben](#readme)

* [Realm](https://github.com/realm/realm-swift) - Realm ist eine mobile Datenbank und eine Alternative zu Core Data und SQLite.
* [RealmWrapper](https://github.com/k-lpmg/RealmWrapper) - Sichere und einfache Wrapper für RealmSwift.
* [Unrealm](https://github.com/matghazaryan/Unrealm) - Speichert native Swift-Klassen, Structs und Enums ganz einfach in Realm.

#### SQL-Treiber
[zurück nach oben](#readme)

* [MySQL Swift](https://github.com/novi/mysql-swift) :penguin: - MySQL-Clientbibliothek.
* [Perfect-MySQL](https://github.com/PerfectlySoft/Perfect-MySQL) :penguin: - Eigenständiger Wrapper um die MySQL-Clientbibliothek für den Zugriff auf MySQL-Server.
* [Perfect-PostgreSQL](https://github.com/PerfectlySoft/Perfect-PostgreSQL) :penguin: - Eigenständiger Wrapper um die libpq-Clientbibliothek für den Zugriff auf PostgreSQL-Server.

#### SQLite
*Möchtest du App-Daten mit SQLite speichern? Hier findest du interessante Ressourcen.* [zurück nach oben](#readme)

* [GRDB.swift](https://github.com/groue/GRDB.swift) - Vielseitiges SQLite-Werkzeugset.
* [SQLite.swift](https://github.com/stephencelis/SQLite.swift) - Framework-Wrapper für SQLite3: klein, einfach und sicher.
* [SQLiteDB](https://github.com/FahimF/SQLiteDB) - SQLite-Wrapper.

#### TOML
*Tom's Obvious, Minimal Language.* [zurück nach oben](#readme)

* [TOMLDecoder](https://github.com/dduan/TOMLDecoder) - Dekodiert den aktuellen TOML-Standard.

#### XML
*Wenn du XML-formatierte Daten verwalten möchtest, findest du hier hilfreiche Bibliotheken.* [zurück nach oben](#readme)

* [AEXML](https://github.com/tadija/AEXML) - XML-Wrapper.
* [CheatyXML](https://github.com/lobodart/CheatyXML) - Leistungsstarkes Framework zur einfachen XML-Verarbeitung.
* [SwiftyXML](https://github.com/chenyunguiMilook/SwiftyXML) - Der Swift-typische Weg zum Umgang mit XML.
* [SWXMLHash](https://github.com/drmohundro/SWXMLHash) - Einfaches XML-Parsing.
* [XMLCoder](https://github.com/CoreOffice/XMLCoder) - XMLEncoder und XMLDecoder auf Basis der Codable-Protokolle aus der Standardbibliothek.
* [XMLMapper](https://github.com/gcharita/XMLMapper) - Einfache Zuordnung von XML zu Objekten.

#### YAML
[zurück nach oben](#readme)

* [YamlSwift](https://github.com/behrang/YamlSwift) - YAML- und JSON-Dokumente laden.
* [Yams](https://github.com/jpsim/Yams) :penguin: - Praktischer YAML-Parser.

#### ZIP
[zurück nach oben](#readme)

* [Zip](https://github.com/marmelroy/Zip) - Framework zum Komprimieren und Entpacken von Dateien.
* [Zip Foundation](https://github.com/weichsel/ZIPFoundation) - Bibliothek zum Erstellen, Lesen und Ändern von ZIP-Archiven.

### Datum
*Datumsformatierung leicht gemacht.* [zurück nach oben](#readme)

* [AnyDate](https://github.com/Kawoou/AnyDate) - Datums- und Zeit-API, inspiriert von der DateTime-API aus Java 8.
* [Chronology](https://github.com/davedelong/time) - Eine bessere Datums- und Zeitbibliothek.
* [DateHelper](https://github.com/melvitax/DateHelper) - Einfache Datumshilfsfunktionen.
* [Datez](https://github.com/SwiftKitz/Datez) - Bibliothek für `NSDate`, `NSCalendar`, `NSDateComponents` und `NSTimeInterval`.
* [Datify](https://github.com/hemangshah/Datify) - Kinderleichte Datumsfunktionen.
* [NVDate](https://github.com/novalagung/nvdate) - Datumserweiterungsbibliothek.
* [SwiftDate](https://github.com/malcommac/SwiftDate) - Einfache Verwaltung von NSDate.
* [Time](https://github.com/dreymonde/Time) - Typsichere Zeitberechnungen auf Generics-Basis.
* [Timepiece](https://github.com/naoty/Timepiece) - Intuitive NSDate-Erweiterungen.
* [TrueTime.swift](https://github.com/instacart/TrueTime.swift) - Ermittelt die tatsächliche aktuelle Zeit unabhängig von Änderungen der Geräteuhr (NTP-Bibliothek).
* [TypedDate](https://github.com/Ryu0118/swift-typed-date) - Verbessert die Datumsverarbeitung durch Typanpassung auf Ebene der Datumskomponenten.

### Abhängigkeitsinjektion
*Bibliotheken für Dependency Injection.* [zurück nach oben](#readme)

* [Cleanse](https://github.com/square/Cleanse) - Leichtgewichtiges Dependency-Injection-Framework von Square.
* [Corridor](https://github.com/symentis/Corridor) - Mikroframework für Dependency Injection im Stil von Coreader.
* [Deli](https://github.com/kawoou/Deli) - Einfach zu verwendende Dependency Injection (DI).
* [DIKit](https://github.com/Liftric/DIKit) - Von KOIN inspiriertes Dependency-Injection-Framework für Swift.
* [Dip](https://github.com/AliSoftware/Dip) - Einfacher Dependency-Injection-Container.
* [DITranquillity](https://github.com/ivlevAstef/DITranquillity/) - Dependency-Injection-Framework mit Gelassenheit.
* [Locatable](https://github.com/vincent-pradeilles/locatable) - Mikroframework, das Property Wrappers für das Service-Locator-Muster nutzt.
* [Pure](https://github.com/devxoul/Pure) - Dependency Injection ohne DI-Container.
* [SafeDI](https://github.com/dfed/safedi) - Zur Kompilierzeit sichere Dependency Injection.
* [Swinject](https://github.com/Swinject/Swinject) - Framework für Dependency Injection.
* [Typhoon](https://github.com/appsquickly/Typhoon) - Toolkit für Dependency Injection.
* [Weaver](https://github.com/scribd/Weaver) - Deklaratives, einfach zu verwendendes und sicheres Dependency-Injection-Framework.

### Gerät
*Sammlung von Bibliotheken zur Geräteerkennung.* [zurück nach oben](#readme)

* [Device](https://github.com/Ekhoo/Device) - Leichtgewichtiges Werkzeug zur Erkennung des aktuellen Geräts und der Bildschirmgröße.
* [Device.swift](https://github.com/schickling/Device.swift) - Besonders leichtgewichtige Bibliothek zur Erkennung des verwendeten Geräts.
* [DeviceKit](https://github.com/devicekit/DeviceKit) - Werttypbasierter Ersatz für UIDevice.
* [Deviice](https://github.com/andrealufino/Deviice) - Swift-Bibliothek zur einfachen Ermittlung des aktuellen Geräts und weiterer Informationen.
* [Luminous](https://github.com/andrealufino/Luminous) - Liefert alle benötigten Informationen über das Gerät.
* [Thingy](https://github.com/bojan/Thingy) - Moderne Bibliothek zur Geräteerkennung und -abfrage.
* [UIDeviceComplete](https://github.com/Nirma/UIDeviceComplete) - UIDevice-Erweiterungen, die fehlende Funktionen ergänzen.

### Dokumentation
*Dokumentation für Swift-Code generieren.* [zurück nach oben](#readme)

* [jazzy](https://github.com/realm/jazzy/) - Aussagekräftige Dokumentation.
* [SourceDocs](https://github.com/SourceDocs/SourceDocs) - Markdown-Referenzdokumentation generieren, die zusammen mit deinem Code gespeichert wird.

### E-Mail
[zurück nach oben](#readme)


### Eingebettete Systeme
*Entwickle eingebettete Linux-Projekte auf Raspberry Pi, BeagleBone, C.H.I.P. und anderen Platinen.* [zurück nach oben](#readme)

* [SwiftyGPIO](https://github.com/uraimo/SwiftyGPIO) :penguin: - Zugriff auf Linux-GPIO/SPI/PWM unter ARM.

#### Peripheriegeräte
*Interagiere mit bestimmten externen Peripheriegeräten.* [zurück nach oben](#readme)


### Ereignisse
*Alternativen zu NSNotificationCenter, Key-Value-Observation oder Delegation.* [zurück nach oben](#readme)

* [Bond](https://github.com/DeclarativeHub/Bond) - Binding-Framework.
* [Combinative](https://github.com/noppefoxwolf/Combinative) - UI-Ereignisbehandlung mit Apples Combine-Framework.
* [EmitterKit](https://github.com/aleclarson/emitter-kit) - Implementierung von Event-Emittern und Listenern.
* [FutureKit](https://github.com/FutureKit/FutureKit) - Future-/Promise-Bibliothek.
* [Katana](https://github.com/BendingSpoons/katana-swift) - Apps im Stil von React und Redux schreiben.
* [LightweightObservable](https://github.com/fxm90/LightweightObservable) - Leichtgewichtige Implementierung einer abonnierbaren Observable-Sequenz.
* [NoticeObserveKit](https://github.com/marty-suzuki/NoticeObserveKit) - Typsicherer NotificationCenter-Wrapper, der Benachrichtigungstyp und Informationstyp verknüpft.
* [Notificationz](https://github.com/SwiftKitz/Notificationz) - Einfacher, anpassbarer Adapter zur Verwaltung von `NSNotificationCenter`.
* [Observable](https://github.com/roberthein/Observable) - Einfachste Möglichkeit, Werte zu beobachten.
* [OneWay](https://github.com/DevYeom/OneWay) - Zustandsverwaltung mit unidirektionalem Datenfluss.
* [OpenCombine](https://github.com/OpenCombine/OpenCombine) - Quelloffene Implementierung von Apples Combine-Framework zur Verarbeitung zeitabhängiger Werte.
* [PMKVObserver](https://github.com/postmates/PMKVObserver/) - Moderne, threadsichere und typsichere Key-Value-Beobachtung.
* [PromiseKit](https://github.com/mxcl/PromiseKit) - Bibliothek für asynchrone Promise-Programmierung.
* [ReactiveCocoa](https://github.com/ReactiveCocoa/ReactiveCocoa) - Von funktionaler reaktiver Programmierung inspiriertes Cocoa-Framework mit APIs zum Kombinieren und Transformieren zeitabhängiger Werteströme.
* [ReactorKit](https://github.com/ReactorKit/ReactorKit) - Framework für reaktive Anwendungsarchitektur mit unidirektionalem Datenfluss.
* [ReSwift](https://github.com/ReSwift/ReSwift) - Unidirektionaler Datenfluss.
* [RxSwift](https://github.com/ReactiveX/RxSwift) - Microsoft Reactive Extensions (Rx).
* [Signals](https://github.com/artman/Signals) - Ersetzt Delegates und Benachrichtigungen.
* [SwiftEventBus](https://github.com/cesarferreira/SwiftEventBus) - Publish-Subscribe-Event-Bus für iOS.
* [Tempura](https://github.com/BendingSpoons/tempura-swift) - Ganzheitlicher Ansatz zur iOS-Entwicklung, inspiriert von Redux und MVVM.
* [Tokamak](https://github.com/TokamakUI/Tokamak) - Deklarative API im Stil von React zum Erstellen nativer UI-Komponenten mit einfacher unidirektionaler Datenbindung.
* [Tomorrowland](https://github.com/lilyball/Tomorrowland) - Leichtgewichtige Promises.
* [TopicEventBus](https://github.com/mcmatan/topicEventBus) - Framework zur Implementierung des Publish-Subscribe-Musters mit themenbasiertem Veröffentlichen von Ereignissen.
* [VueFlux](https://github.com/ra1028/VueFlux) - Architektur zur Zustandsverwaltung mit unidirektionalem Datenfluss, inspiriert von Vuex und Flux.
* [When](https://github.com/vadymmarkov/When) - Leichtgewichtige Implementierung von Promises.

### Dateien
[zurück nach oben](#readme)

* [ExtendedAttributes](https://github.com/sindresorhus/ExtendedAttributes) - Erweiterte Attribute von Dateien und Ordnern verwalten.
* [FileKit](https://github.com/nvzqz/FileKit) - Einfache und ausdrucksstarke Dateiverwaltung.
* [FileProvider](https://github.com/amosavian/FileProvider) - FileManager-Ersatz für lokale, iCloud- und Remote-Dateien (WebDAV/FTP/Dropbox/OneDrive/SMB2) unter iOS/tvOS und macOS.
* [KZFileWatchers](https://github.com/krzysztofzablocki/KZFileWatchers) - Mikroframework zur Beobachtung lokaler und entfernter Dateiänderungen.
* [PathKit](https://github.com/kylef/PathKit) :penguin: - Mühelose Pfadoperationen.
* [Pathos](https://github.com/dduan/Pathos) :penguin: - Effiziente Unix-Dateiverwaltung.

### Schriftarten
*Sammlung von Codebeispielen rund um Schriftarten.* [zurück nach oben](#readme)

* [FontAwesome.swift](https://github.com/thii/FontAwesome.swift) - FontAwesome in deinen Projekten verwenden.
* [FontBlaster](https://github.com/ArtSabintsev/FontBlaster) - Benutzerdefinierte Schriftarten programmgesteuert in deine iOS-App laden.
* [Inkwell](https://github.com/ninjaprox/Inkwell) - Werkzeug zur spontanen Verwendung benutzerdefinierter Schriftarten.
* [IoniconsKit](https://github.com/keitaoouchi/IoniconsKit) - Ionicons als UIImage/UIFont in deinen Projekten verwenden.
* [OcticonsKit](https://github.com/keitaoouchi/OcticonsKit) - Octicons als UIImage/UIFont in deinen Projekten verwenden.
* [SwiftIconFont](https://github.com/segecey/SwiftIconFont) - Portierungen von Font Awesome, Iconic, Ionicons und Octicon.
* [SwiftIcons](https://github.com/ranesr/SwiftIcons) - Bibliothek für Schriftart-Symbole: Dripicons, Emoji, Font Awesome, Icofont, Ionicons, Linear Icons, Map Icons, Material Icons, Open Iconic, Status- und Wettersymbole.
* [SwiftUI-FontIcon](https://github.com/huybuidac/SwiftUIFontIcon) - Schriftart-Symbole für SwiftUI: Font Awesome, Ionicons und Material Icons.
* [SYSymbol](https://github.com/Nirma/SFSymbol) - Alle SFSymbols jederzeit griffbereit.
* [UIFontComplete](https://github.com/Nirma/UIFontComplete) - Verwaltung von System- und benutzerdefinierten Schriftarten für iOS und tvOS.

### Spiele-Engine
[zurück nach oben](#readme)

* [glide engine](https://github.com/cocoatoucher/Glide) - Auf SpriteKit und GameplayKit basierende Engine für 2D-Spiele mit praktischen Beispielen und Tutorials.
* [Raylib for Swift](https://github.com/STREGAsGate/Raylib) :penguin: - Plattformübergreifendes Swift-Paket für Raylib. Erstellt Raylib aus dem Quellcode, sodass keine Bibliotheken eingerichtet werden müssen; füge es einfach als Abhängigkeit zu deinem Spielepaket hinzu.
* [SwiftGodot](https://migueldeicaza.github.io/SwiftGodotDocs/tutorials/swiftgodot-tutorials/) - Swift-Bindings für die Godot-Game-Engine, um Erweiterungen zu erstellen oder sie über SwiftGodotKit als API zu verwenden.

#### 2D
[zurück nach oben](#readme)

* [ImagineEngine](https://github.com/JohnSundell/ImagineEngine) - Blitzschnelle 2D-Spiele-Engine.

### Spiele
[zurück nach oben](#readme)

* [FDChessboardView](https://github.com/fulldecent/FDChessboardView) - View Controller für Schachbretter.
* [Sage](https://github.com/nvzqz/Sage) :penguin: - Plattformübergreifende Schachbibliothek.

### Gesten
[zurück nach oben](#readme)

* [ShowTime](https://github.com/KaneCheshire/ShowTime) - Zeige iOS-Tipps und -Gesten für Demos und Videos mit nur einer Codezeile.
* [SwiftyGestureRecognition](https://github.com/b3ll/SwiftyGestureRecognition) - UIGestureRecognizers in Xcode-Playgrounds.
* [SwipyCell](https://github.com/moritzsternemann/SwipyCell) - UITableViewCell mit Wischgesten zum Auslösen von Aktionen, wie in der Mailbox-App.
* [Tactile](https://github.com/delba/Tactile) - Sicherere und idiomatischere Reaktion auf Gesten und Steuerelementereignisse.

### Hardware
*Kategorie für hardwarebezogene Bibliotheken.* [zurück nach oben](#readme)


#### 3D Touch
*Einfache Unterstützung der neuen 3D-Touch-/Force-Touch-Funktion mit diesen Bibliotheken.* [zurück nach oben](#readme)


#### Bluetooth
*Wrapper für CoreBluetooth.* [zurück nach oben](#readme)

* [BlueCap](https://github.com/troystribling/BlueCap) - Wrapper für CoreBluetooth und vieles mehr.
* [Bluejay](https://github.com/steamclock/bluejay) - Einfaches Framework zur Entwicklung zuverlässiger Bluetooth-LE-Apps.
* [BluetoothKit](https://github.com/rhummelmose/BluetoothKit) - Einfache Kommunikation zwischen iOS- und OS-X-Geräten über BLE.
* [RxBluetoothKit](https://github.com/polidea/RxBluetoothKit) - Bluetooth-Bibliothek für iOS und OS X mit RxSwift.
* [SwiftyBluetooth](https://github.com/jordanebelanger/SwiftyBluetooth) - Einfacher und zuverlässiger, Closure-basierter Wrapper für CoreBluetooth.

#### Kamera
*Großartige Kamerabibliotheken.* [zurück nach oben](#readme)

* [CameraBackground](https://github.com/yonat/CameraBackground) - Stellt die Kameraebene als Hintergrund für jede UIView dar.
* [CameraKit-iOS](https://github.com/CameraKit/camerakit-ios) - Steigert die Kameraleistung und Benutzerfreundlichkeit deines nächsten Projekts deutlich.
* [FDTake](https://github.com/fulldecent/FDTake) - Nimm einfach ein Foto oder Video auf oder wähle es aus der Mediathek.
* [Fusuma](https://github.com/ytakzk/Fusuma) - Fotobrowser im Instagram-Stil mit Kamerafunktion.
* [MediaPicker](https://github.com/exyte/mediapicker) - Anpassbare SwiftUI-Medienauswahl für Kamera und Galerie mit Alben.
* [MijickCamera](https://github.com/Mijick/Camera) - Kamera leicht gemacht: vollständig anpassbare Kamerabibliothek, die den Implementierungsaufwand deutlich reduziert.
* [NextLevel](https://github.com/NextLevel/NextLevel) - Moderne Medienaufnahme.

##### Barcode
*Barcode-, QR-Code- und andere Code-Scanner.* [zurück nach oben](#readme)

* [BarcodeScanner](https://github.com/hyperoslo/BarcodeScanner) - Einfacher und ansprechender Barcode-Scanner-View-Controller.
* [EFQRCode](https://github.com/EFPrefix/EFQRCode) - Bessere Verarbeitung von QR-Codes.
* [QRCodeReader.swift](https://github.com/yannickl/QRCodeReader.swift) - Einfacher QR-Code-Reader.

#### Haptisches Feedback
*Bibliotheken für den Einsatz haptischen Feedbacks.* [zurück nach oben](#readme)

* [Haptica](https://github.com/efremidze/Haptica) - Einfacher Generator für haptisches Feedback.

#### iBeacon
*Du möchtest iBeacon in deinem Swift-Projekt verwenden? Hier findest du interessante Ressourcen.* [zurück nach oben](#readme)

* [SwiftLocation](https://github.com/malcommac/SwiftLocation) - Standort- und Beacon-Überwachung.

#### Sensoren
*Verwalte deine Gerätesensoren schneller und einfacher.* [zurück nach oben](#readme)


### Bilder
*Interessante Liste von Bibliotheken rund um Bilder.* [zurück nach oben](#readme)

* [Agrume](https://github.com/JanGorman/Agrume) - Erfrischend einfacher iOS-Bildbetrachter.
* [AlamofireImage](https://github.com/Alamofire/AlamofireImage) - Komponentenbibliothek für Bilder in Alamofire.
* [APNGKit](https://github.com/onevcat/APNGKit) - Leistungsstarke und komfortable Wiedergabe des APNG-Formats unter iOS.
* [ATGMediaBrowser](https://github.com/altayer-digital/ATGMediaBrowser) - Bild-Diashow-Betrachter mit mehreren vordefinierten Übergängen und der Möglichkeit, mühelos eigene Übergänge zu erstellen.
* [AXPhotoViewer](https://github.com/alexhillc/AXPhotoViewer) - Fotogalerie-Betrachter für iPhone und iPad, nützlich für beliebig viele Fotos.
* [BlockiesSwift](https://github.com/Boilertalk/BlockiesSwift) - Generator einzigartiger, blockartiger Identicons und Profilbilder.
* [Brightroom](https://github.com/FluidGroup/Brightroom) - Bildeditor und Engine auf Basis von CoreImage.
* [CTPanoramaView](https://github.com/scihant/CTPanoramaView) - Bibliothek zur Anzeige sphärischer oder zylindrischer Panoramen mit Touch- oder bewegungsbasierter Steuerung.
* [DTPhotoViewerController](https://github.com/tungvoduc/DTPhotoViewerController) - Vollständig anpassbarer View Controller zur Anzeige einzelner Fotos oder ganzer Sammlungen, inspiriert vom Facebook-Fotobetrachter.
* [FacebookImagePicker](https://github.com/floriangbh/FacebookImagePicker) - Fotoauswahl für Facebook-Alben.
* [FaceCrop](https://github.com/Ancestry/FaceCrop) - Gesichter in Bildern mit Apples Vision-Framework erkennen und zentrieren.
* [FlexibleImage](https://github.com/kawoou/FlexibleImage) - Einfache Bildbearbeitung.
* [FMPhotoPicker](https://github.com/congnd/FMPhotoPicker) - Moderne, einfache Fotoauswahl ohne Abhängigkeiten, mit elegantem und anpassbarem Bildeditor.
* [gifu](https://github.com/kaishin/gifu) - Leistungsstarke Unterstützung animierter GIFs für iOS.
* [GPUImage 2](https://github.com/BradLarson/GPUImage2) - BSD-lizenziertes Framework zur GPU-beschleunigten Video- und Bildverarbeitung.
* [GPUImage 3](https://github.com/BradLarson/GPUImage3) - BSD-lizenziertes Framework zur GPU-beschleunigten Video- und Bildverarbeitung mit Metal.
* [HanekeSwift](https://github.com/Haneke/HanekeSwift) - Leichtgewichtiger generischer Cache für iOS, besonders für Bilder.
* [Harbeth](https://github.com/yangKJ/Harbeth) - Metal-Framework für GPU-beschleunigte Grafik-, Video- und Kamerafilter.
* [ImageDetect](https://github.com/Feghal/ImageDetect) - Gesichter, Barcodes und Texte in Bildern mit der Vision-API von iOS 11 erkennen und zuschneiden.
* [ImageLoader](https://github.com/hirohisa/ImageLoaderSwift) - Leichtgewichtiger und schneller Bildlader für iOS.
* [ImageScout](https://github.com/kaishin/ImageScout) - Implementierung von [fastimage](https://pypi.org/project/fastimage/0.2.1/) mit Unterstützung für PNG, GIF und JPEG.
* [ImageViewer](https://github.com/Krisiacik/ImageViewer) - Bildbetrachter im Stil von Twitter.
* [ImgixSwift](https://github.com/imgix/imgix-swift) - Bild-URLs ganz einfach beschleunigen und responsiv gestalten.
* [JLStickerTextView](https://github.com/Textcat/JLStickerTextView) - UIImageView-Erweiterung zum Hinzufügen mehrerer Beschriftungen mit mehrzeiligem Text; Beschriftungen lassen sich mit einem Finger bearbeiten, drehen, skalieren und anschließend ins Bild einfügen.
* [Kanvas](https://github.com/tumblr/kanvas-ios) - iOS-Bibliothek für Effekte, Zeichnungen, Text, Sticker und GIFs aus vorhandenen Medien oder der Kamera.
* [Kingfisher](https://github.com/onevcat/Kingfisher) - Herunterladen und Zwischenspeichern von Bildern.
* [LetterAvatarKit](https://github.com/vpeschenkov/LetterAvatarKit) - UIImage-Erweiterung zur Erstellung von Avataren aus Buchstaben.
* [Lightbox](https://github.com/hyperoslo/Lightbox) - Praktischer und einfach zu verwendender Bildbetrachter für iOS-Apps.
* [MapleBacon](https://github.com/JanGorman/MapleBacon) - Bibliothek zum Herunterladen und Zwischenspeichern von Bildern.
* [MCScratchImageView](https://github.com/JaylenCoding/MCScratchImageView) - Benutzerdefinierte ImageView, die eine andere View wie bei einer Rubbelkarte verdeckt; durch Wischen über die Beschichtung wird die darunterliegende View sichtbar.
* [Moa](https://github.com/evgenyneu/moa) - Erweiterung zum Laden von Bildern in Image Views für iOS, tvOS und macOS.
* [Nuke](https://github.com/kean/Nuke) - Erweitertes Framework zum Laden, Zwischenspeichern, Verarbeiten, Anzeigen und Vorladen von Bildern.
* [PassportScanner](https://github.com/evermeer/PassportScanner) - MRZ-Code eines Reisepasses scannen und Vorname, Nachname, Passnummer, Nationalität, Geburtsdatum, Ablaufdatum und persönliche Nummer auslesen.
* [Rough](https://github.com/bakhtiyork/Rough) - Ermöglicht Zeichnungen in skizzenhaftem, handgezeichnetem Stil.
* [Sharaku](https://github.com/makomori/Sharaku) - Bildfilter-UI-Bibliothek im Instagram-Stil.
* [Snowflake](https://github.com/onmyway133/Snowflake) - Mit SVG arbeiten.
* [SwiftDraw](https://github.com/swhitty/SwiftDraw) - Konvertiert SVG-Bilder in UIImage und NSImage und generiert CoreGraphics-Quellcode.
* [SwiftGen-Assets](https://github.com/SwiftGen/SwiftGen#assets-catalogs) - Werkzeug zur automatischen Generierung von `enums` für alle UIImages aus deinen Asset-Katalogen.
* [SwiftSVG](https://github.com/mchoe/SwiftSVG) - Ein-Pass-SVG-Parser mit mehreren Schnittstellen (String, NS/UIBezierPath, CAShapeLayer und NS/UIView).
* [SwiftWebImage](https://github.com/HotWordland/SwiftWebImage) - 🚀 SwiftUI-Bildlader mit leistungsfähigem LRU-Speicher- und Festplatten-Cache.
* [SwiftyGif](https://github.com/alexiscreuzot/SwiftyGif) - Leistungsstarke GIF-Engine.
* [TinyCrayon](https://github.com/TinyCrayon/TinyCrayon-iOS-SDK) - Intelligentes und einfach zu verwendendes SDK zum Maskieren und Freistellen von Bildern in mobilen Apps.
* [Toucan](https://github.com/gavinbunney/Toucan) - API zur Bildverarbeitung.
* [UIImageColors](https://github.com/jathu/UIImageColors) - Extrahiert Farben aus UIImage im iTunes-Stil.
* [YPImagePicker](https://github.com/Yummypets/YPImagePicker) - Bildauswahl und Filter für iOS im Instagram-Stil.
* [ZImageCropper](https://github.com/ZaidPathan/ZImageCropper) - Bilder beliebig zuschneiden.

### Key-Value-Coding
*Bibliotheken für Key-Value-Coding.* [zurück nach oben](#readme)


### Tastatur
*Möchtest du eine eigene angepasste Tastatur erstellen? Hier findest du interessante Ressourcen.* [zurück nach oben](#readme)

* [IHKeyboardAvoiding](https://github.com/IdleHandsApps/IHKeyboardAvoiding) - Elegante Lösung, um jede UIView bei eingeblendeter Tastatur sichtbar zu halten – ganz ohne UIScrollView.
* [IQKeyboardManager](https://github.com/hackiftekhar/IQKeyboardManager) - Universelle Bibliothek ohne Codeänderungen, die verhindert, dass die Tastatur nach oben rutscht und UITextField/UITextView verdeckt.
* [ISEmojiView](https://github.com/isaced/ISEmojiView) - Emoji-Tastatur für iOS.
* [KeyboardHideManager](https://github.com/bonyadmitr/KeyboardHideManager) - Manager ohne Codeänderungen, der die Tastatur unter iOS durch Tippen auf Views ausblendet.
* [KeyboardShortcuts](https://github.com/sindresorhus/KeyboardShortcuts) - Ergänzt deine macOS-App um global anpassbare Tastenkürzel mit Cocoa- und SwiftUI-Komponente.
* [Ribbon](https://github.com/chriszielinski/Ribbon) - 🎀 Einfache plattformübergreifende Bibliothek für Symbolleisten und benutzerdefinierte Input-Accessory-Views unter iOS und macOS.
* [Typist](https://github.com/totocaster/Typist) - Kleine, direkt integrierbare UIKit-Tastaturverwaltung für iOS-Apps; steuert Anzeige und Verhalten ohne Notification Center.

### Kit
*Bibliotheken zum Programmieren mit vereinfachten APIs.* [zurück nach oben](#readme)

* [BFKit-Swift](https://github.com/FabrizioBrancati/BFKit-Swift) :penguin: - Sammlung nützlicher Klassen, Structs und Erweiterungen zur schnelleren App-Entwicklung.
* [C4iOS](https://github.com/C4Labs/C4iOS) - Nutzt die Leistungsfähigkeit nativer iOS-Programmierung mit einer vereinfachten API.
* [ContactsChangeNotifier](https://github.com/yonat/ContactsChangeNotifier) - Welche Kontakte haben sich außerhalb deiner App geändert? Bessere CNContactStoreDidChange-Benachrichtigung: Liefert echte Änderungen ohne unnötige Meldungen.

### Layout
*Bibliotheken zur Unterstützung beim Layout.* [zurück nach oben](#readme)

* [AnimatedTabBar](https://github.com/exyte/AnimatedTabBar) - Tab-Leiste mit verschiedenen vordefinierten Animationen.
* [BrickKit](https://github.com/wayfair-archive/brickkit-ios) - Komplexe und responsive Layouts einfach erstellen.
* [CGLayout](https://github.com/k-o-d-e-n/CGLayout) :penguin: - Leistungsstarkes Auto-Layout-Framework für UIView/NSView, CALayer und nicht gerenderte Views; bietet Platzhalter.
* [FlexLayout](https://github.com/layoutBox/FlexLayout) - Saubere Schnittstelle für die hochoptimierte Flexbox-Implementierung Facebook Yoga.
* [FrameLayoutKit](https://github.com/kennic/FrameLayoutKit) - Framework für komplexe Layouts mit Verkettung und Verschachtelung über eine einfache, intuitive Operanden- und DSL-Syntax.
* [Grid](https://github.com/exyte/Grid) - Der leistungsstarke Grid-Container, der SwiftUI fehlt.
* [LayoutLess](https://github.com/DeclarativeHub/Layoutless) - Schreibe weniger UI-Code.
* [Neon](https://github.com/mamaral/Neon) - Leistungsstarkes Framework für programmatisches UI-Layout.
* [PinLayout](https://github.com/layoutBox/PinLayout) - Schnelles View-Layout ohne Auto Layout: keine Magie, reiner Code, volle Kontrolle und hohe Geschwindigkeit. Prägnante, intuitive, lesbare und verkettbare Syntax für iOS/macOS/tvOS.
* [Scaling Header Scroll View](https://github.com/exyte/ScalingHeaderScrollView) - Scroll View mit fixiertem Header, der beim Scrollen schrumpft; mit SwiftUI geschrieben.
* [Static](https://github.com/venmo/Static) - Einfache statische Table Views für iOS.
* [Stevia](https://github.com/freshOS/Stevia) - Elegantes View-Layout für iOS.

#### Auto Layout
*Du hast genug von Storyboards? Probiere deklarative Auto-Layout-Bibliotheken aus.* [zurück nach oben](#readme)

* [Bamboo](https://github.com/wordlessj/Bamboo) - Auto Layout und manuelles Layout in einer Zeile.
* [Cartography](https://github.com/robb/Cartography) - Deklarative Auto-Layout-Bibliothek für dein Projekt.
* [Cassowary](https://github.com/tribalworldwidelondon/CassowarySwift) - Bibliothek zur Lösung linearer Nebenbedingungen mit demselben Algorithmus wie AutoLayout.
* [Cupcake](https://github.com/nerdycat/Cupcake) - Einfache Erstellung und Anordnung von UI-Komponenten für iOS.
* [DeviceLayout](https://github.com/cruisediary/DeviceLayout) - AutoLayout für jedes Gerät separat konfigurieren.
* [EasyPeasy](https://github.com/nakiostudio/EasyPeasy) - Auto Layout leicht gemacht.
* [EasySwiftLayout](https://github.com/Pimine/EasySwiftLayout) - Leichtgewichtiges Swift-Framework für Apples Auto Layout.
* [EZLayout](https://github.com/alexliubj/EZAnchor) - Einfachere und schnellere Programmierung von Auto Layout.
* [FixFlex](https://github.com/psharanda/FixFlex) - Deklaratives Auto Layout auf Basis von NSLayoutAnchor, eine Swift-Neuinterpretation von VFL und Alternative zu UIStackView.
* [HypeUI](https://github.com/hyperconnect/HypeUI) - 🌺 Implementierung des SwiftUI-DSL-Stils von Apple auf Basis von UIKit.
* [KVConstraintKit](https://github.com/keshavvishwkarma/KVConstraintKit) - Leistungsstarke Auto-Layout-DSL für iOS, tvOS und OSX.
* [MisterFusion](https://github.com/marty-suzuki/MisterFusion) - DSL für AutoLayout mit Unterstützung für Size Classes.
* [Mortar](https://github.com/jmfieldman/Mortar) - Prägnante und flexible DSL zum Erstellen von Auto-Layout-Beschränkungen und Hinzufügen von Subviews.
* [NorthLayout](https://github.com/banjun/NorthLayout) - Schnelleres Layout mit Visual Format Language (VFL) und erweiterter Syntax.
* [PureLayout](https://github.com/PureLayout/PureLayout) - Die umfassende API für Auto Layout unter iOS und OS X.
* [SnapKit](https://github.com/SnapKit/SnapKit) - Auto-Layout-DSL für iOS und OS X.
* [Swiftstraints](https://github.com/Skyvive/Swiftstraints) - Leistungsstarkes Auto-Layout-Framework, mit dem sich Beschränkungen in einer Codezeile schreiben lassen.
* [TinyConstraints](https://github.com/roberthein/TinyConstraints) - Syntaktischer Zucker, der Auto Layout benutzerfreundlicher macht.

### Lokalisierung
*Frameworks zur Lokalisierung deiner App.* [zurück nach oben](#readme)

* [BartyCrouch](https://github.com/FlineDev/BartyCrouch) - Aktualisiert und übersetzt String-Dateien schrittweise anhand von Code und Storyboards/XIBs.
* [CrowdinSDK](https://github.com/crowdin/mobile-sdk-ios) - Überträgt alle neuen Übersetzungen aus dem Crowdin-Projekt sofort in die Anwendung.
* [IBLocalizable](https://github.com/PiXeL16/IBLocalizable) - Lokalisiere deine Views direkt im Interface Builder.
* [L10n-swift](https://github.com/Decybel07/L10n-swift) - Lokalisierung von Anwendungen mit Sprachwechsel zur Laufzeit und Unterstützung für Pluralformen in jeder Sprache.
* [LocalizationKit](https://github.com/willpowell8/LocalizationKit_iOS) - Dynamische Echtzeitlokalisierung mit Fernverwaltung, um Übersetzungen ohne erneute App-Einreichung zu verwalten, zu pflegen und bereitzustellen.
* [Localize](https://github.com/andresilvagomez/Localize) - Apps lokalisieren, etwa mit regulären Ausdrücken in Localizable.strings.
* [Localize-Swift](https://github.com/marmelroy/Localize-Swift) - Apps lokalisieren, etwa mit regulären Ausdrücken in Localizable.strings.
* [Locheck](https://github.com/Asana/locheck) - .strings- und .stringsdict-Dateien auf Fehler überprüfen.
* [StringSwitch](https://stringswitch.com) - iOS-.strings-Dateien ganz einfach ins Android-strings.xml-Format konvertieren und umgekehrt.
* [SwiftGen-L10n](https://github.com/SwiftGen/SwiftGen#localizablestrings) - Werkzeug zur automatischen Generierung von `enums` für alle Schlüssel aus Localizable.strings, einschließlich passender Werte für printf-Platzhalter wie `%@`.
* [Translatio](https://github.com/andrealufino/Translatio) - Besonders leichtgewichtige Bibliothek zur Lokalisierung von Zeichenfolgen, auch direkt in Storyboards.

### Standort
[zurück nach oben](#readme)

* [AsyncLocationKit](https://github.com/AsyncSwift/AsyncLocationKit) - Wrapper für Apples CoreLocation-Framework mit moderner Swift-Concurrency (async/await).
* [STLocationRequest](https://github.com/SvenTiigi/STLocationRequest) - Eleganter, einfacher Standort-Anfragebildschirm mit 3D-Flyover.

### Protokollierung
*Werkzeuge zum Schreiben und Lesen des Geräteprotokolls.* [zurück nach oben](#readme)

* [AEConsole](https://github.com/tadija/AEConsole) - Anpassbares Konsolen-Overlay mit Debug-Protokoll in deiner iOS-App.
* [CleanroomLogger](https://github.com/emaloney/CleanroomLogger) - Konfigurierbare und erweiterbare High-Level-Logging-API, die einfach, leichtgewichtig und leistungsfähig ist.
* [Duration](https://github.com/SwiftStudies/Duration) :penguin: - Leichtgewichtige Logging-Bibliothek zur Erfassung von Vorgangsdauern.
* [Gedatsu](https://github.com/bannzai/gedatsu) - Verständliche Formatierung von Auto-Layout-Fehlern im Konsolenprotokoll.
* [HeliumLogger](https://github.com/Kitura/HeliumLogger) :penguin: - Leichtgewichtiges Logging-Framework von IBM.
* [Printer](https://github.com/hemangshah/printer) - Ausgefallener Logger für deine nächste App.
* [Puppy](https://github.com/sushichop/Puppy) :penguin: - Flexible Logging-Bibliothek mit Unterstützung für mehrere Transportwege und Plattformen.
* [QorumLogs](https://github.com/Esqarrouth/QorumLogs) - Logging-Werkzeug für Xcode und Google Docs.
* [Rainbow](https://github.com/onevcat/Rainbow) :penguin: - Ausdrucksvolle Konsolenausgabe.
* [SwiftyBeaver](https://github.com/SwiftyBeaver/SwiftyBeaver) :penguin: - Plattformübergreifendes Logging während Entwicklung und Veröffentlichung.
* [TinyConsole](https://github.com/Cosmo/TinyConsole) - Kleine Protokollkonsole zur Anzeige von Informationen während der Nutzung deiner iOS-App.
* [TraceLog](https://github.com/tonystone/tracelog) :penguin: - Ganz einfaches Logging, wie es sein sollte. Läuft unter iOS, macOS und Linux.
* [Watchdog](https://github.com/wojteklu/Watchdog) - Werkzeug zur Protokollierung übermäßiger Blockierungen im Hauptthread.
* [WatchdogInspector](https://github.com/tapwork/WatchdogInspector) - Logging-Werkzeug zur Anzeige der aktuellen Bildrate (FPS) in der Statusleiste deiner iOS-App.
* [Willow](https://github.com/Nike-Inc/Willow) - Leistungsstarke und dennoch leichtgewichtige Logging-Bibliothek.
* [XCGLogger](https://github.com/DaveWoodCom/XCGLogger) - Umfangreiches und konfigurierbares Logging-Werkzeug mit Protokollstufen, Zeitstempeln und Zeilennummern.

### Karten
[zurück nach oben](#readme)

* [Cluster](https://github.com/efremidze/Cluster) - Einfache Clusterbildung für Kartenannotationen.
* [FlyoverKit](https://github.com/SvenTiigi/FlyoverKit) - Präsentiert beeindruckende 360°-Überflüge in deiner MKMapView – ohne Aufwand und mit umfangreichen Konfigurationsmöglichkeiten.
* [GEOSwift](https://github.com/GEOSwift/GEOSwift) - Vereinfacht die Arbeit mit geografischen Modellen und die Berechnung von Schnittpunkten, Überlappungen, Projektionen usw.
* [ImmersiveMap](https://github.com/artembobkin/ImmersiveMap) - Mit Metal gerenderte Vektorkarten-Engine für SwiftUI mit 3D-Globus, flacher Karte und Live-Avatar-Markierungen.
* [LocoKit](https://github.com/sobri909/LocoKit) - Framework zur Aufzeichnung von Standorten und Aktivitäten unter iOS.

### Mathematik
[zurück nach oben](#readme)

* [Arithmosophi](https://github.com/phimage/Arithmosophi) - Protokollsammlung für arithmetische und logische Operationen.
* [BigInt](https://github.com/attaswift/BigInt) - Arithmetik mit beliebiger Genauigkeit.
* [DDMathParser](https://github.com/davedelong/DDMathParser) - Parsen von Zeichenfolgen und Auswerten mathematischer Ausdrücke leicht gemacht.
* [SigmaSwiftStatistics](https://github.com/evgenyneu/SigmaSwiftStatistics) - Sammlung von Funktionen für statistische Berechnungen.
* [SwaTex](https://github.com/PhraseHQ/SwaTex) - KaTeX-kompatible LaTeX-Mathematik-Engine ohne JavaScript, WebView oder DOM.
* [Upsurge](https://github.com/alejandro-isaza/Upsurge) - Einfache und schnelle Matrix- und Vektormathematik.

### Verarbeitung natürlicher Sprache
[zurück nach oben](#readme)


### Netzwerk
*Bibliotheken, mit denen sich der Aufwand für HTTP-Anfragen verringern lässt.* [zurück nach oben](#readme)

* [Alamofire](https://github.com/Alamofire/Alamofire) :penguin: - Elegantes Networking.
* [APIKit](https://github.com/ishkawa/APIKit) - Bibliothek zum Erstellen typsicherer Web-API-Clients.
* [Ciao](https://github.com/AlTavares/Ciao) - Dienste über mDNS (Bonjour, Zeroconf) veröffentlichen und entdecken.
* [CodyFire](https://github.com/CodyFlame/CodyFire) - Leistungsstarker Builder und Manager für Codable-API-Anfragen unter iOS, basierend auf Alamofire.
* [Conduit](https://github.com/mindbody/Conduit) - Zuverlässiges Networking für Web-APIs.
* [Connectivity](https://github.com/rwbutler/Connectivity) - 🌐 Erkennt Internetverbindungen zuverlässiger und auch WLAN-Netzwerke ohne Internetzugang.
* [Dots](https://github.com/iAmrSalman/Dots) - Leichtgewichtiges Framework für nebenläufiges Networking.
* [GoodNetworking](https://github.com/GoodRequest/GoodNetworking) - 📡 Vereinfacht HTTP-Networking.
* [Heimdallr.swift](https://github.com/trivago/Heimdallr.swift) - Einfach zu verwendende OAuth-2-Bibliothek für iOS.
* [Just](https://github.com/dduan/Just) :penguin: - HTTP für Menschen (HTTP-Bibliothek im Stil von Python Requests).
* [Malibu](https://github.com/hyperoslo/Malibu) - Networking-Bibliothek auf Promise-Basis.
* [Moya](https://github.com/Moya/Moya) - Abstraktionsschicht für Netzwerke.
* [MultiPeer](https://github.com/dingwilson/MultiPeer) - Wrapper für das MultipeerConnectivity-Framework zur automatischen Offline-Datenübertragung zwischen Geräten.
* [Netfox](https://github.com/kasketis/netfox) - Leichtgewichtige Bibliothek zur Netzwerkfehlerbehebung, mit einer einzigen Zeile eingerichtet.
* [Netswift](https://github.com/MrSkwiggs/Netswift) - Typsichere Networking-Lösung auf hoher Abstraktionsebene.
* [OAuth2](https://github.com/p2/OAuth2) - OAuth-2-Authentifizierungsbibliothek.
* [OAuthSwift](https://github.com/OAuthSwift/OAuthSwift) - OAuth-Bibliothek für iOS.
* [Pitaya](https://github.com/johnlui/Pitaya) :penguin: - HTTP-/HTTPS-Networking-Bibliothek, die zufällig auch auf Rechnern ausgeführt werden kann.
* [PMHTTP](https://github.com/postmates/PMHTTP) - HTTP-Framework mit Schwerpunkt auf REST und JSON.
* [Postal](https://github.com/snipsco/Postal) - Framework für den einfachen Zugriff auf verbreitete E-Mail-Anbieter.
* [Reachability.swift](https://github.com/ashleymills/Reachability.swift) - Ersatz für Apples Reachability mit Closures.
* [ReactiveAPI](https://github.com/sky-uk/ReactiveAPI) - Prägnanter, deklarativer Netzwerkcode mit URLSession und RxSwift, inspiriert von Retrofit.
* [ResponseDetective](https://github.com/netguru/ResponseDetective) - Nicht-invasives Framework zum Abfangen ausgehender Anfragen und eingehender Antworten zwischen App und Server für Debugging-Zwecke.
* [RxNetworks](https://github.com/yangKJ/RxNetworks) - Netzwerk-API mit RxSwift, Moya, HandyJSON und Plugins.
* [ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG) - Schneller Tunnel-Proxy zur Umgehung von Firewalls.
* [Siesta](https://bustoutsolutions.github.io/siesta/) - Elegante Abstraktion für REST-APIs, die zustandsbehaftete Komplexität auflöst; Alternative zu callback- und delegatebasiertem Networking.
* [SolarNetwork](https://github.com/ThreeGayHub/SolarNetwork) - Elegante Netzwerk-Abstraktionsschicht.
* [SwiftHTTP](https://github.com/daltoniam/SwiftHTTP) - NSURLSession-Wrapper.
* [SwiftyOAuth](https://github.com/delba/SwiftyOAuth) - Kleine OAuth-Bibliothek mit integrierter Sammlung von Anbietern.
* [TermiNetwork](https://github.com/billp/TermiNetwork) - 🌏 Abhängigkeitsfreie Networking-Lösung für moderne und sichere iOS-, watchOS-, macOS- und tvOS-Anwendungen.
* [Tiercel](https://github.com/Danie1s/Tiercel) - Hintergrunddownloads, Wiederherstellung nach Neustarts, fortsetzbare Übertragungen und Aufgabenverwaltung für iOS-Apps.
* [TRON](https://github.com/MLSDev/TRON) - Leichtgewichtige Netzwerk-Abstraktionsschicht auf Basis von Alamofire.
* [Wormholy](https://github.com/pmusolino/Wormholy) - Netzwerk-Debugging für iOS wie von Zauberhand 🧙‍.

#### HTML
*HTML-Inhalte ganz einfach bearbeiten?* [zurück nach oben](#readme)

* [Fuzi](https://github.com/cezheng/Fuzi) - Schneller und leichtgewichtiger XML-/HTML-Parser mit XPath- und CSS-Unterstützung.
* [Kanna](https://github.com/tid-kijyun/Kanna) - Ein weiterer XML-/HTML-Parser.
* [SwiftSoup](https://github.com/scinfu/SwiftSoup) :penguin: - HTML-Parser mit den besten Funktionen aus DOM, CSS und jQuery.
* [WKZombie](https://github.com/mkoehnke/WKZombie) - Headless-Browser.
* [ZMarkupParser](https://github.com/ZhgChgLi/ZMarkupParser) - Wandelt HTML-Zeichenfolgen mit benutzerdefinierten Stilen und Tags in NSAttributedString um.

#### Messaging-Protokoll
[zurück nach oben](#readme)

* [CocoaMQTT](https://github.com/emqx/CocoaMQTT) - MQTT für iOS und OS X.
* [Perfect-Notifications](https://github.com/PerfectlySoft/Perfect-Notifications) - iOS-Benachrichtigungen für Linux und OS X.

#### SOAP
[zurück nach oben](#readme)

* [SOAPEngine](https://github.com/priore/SOAPEngine) - Generischer SOAP-Client für SOAP-Webdienste unter iOS, Mac OS X und Apple TV.

#### Socket
[zurück nach oben](#readme)

* [BlueSocket](https://github.com/Kitura/BlueSocket ) - Plattformübergreifendes Low-Level-Socket-Framework von IBM.
* [BlueSSLService](https://github.com/Kitura/BlueSSLService) - SSL-/TLS-Erweiterung für das Low-Level-Socket-Framework von IBM.
* [DNWebSocket](https://github.com/GlebRadchenko/DNWebSocket) - Objektorientierte, mit Autobahn getestete WebSocket-Bibliothek (RFC 6455).
* [RxWebSocket](https://github.com/fjcaetano/RxWebSocket) - Reaktive WebSockets.
* [Socket.IO](https://github.com/socketio/socket.io-client-swift) :penguin: - Socket.IO-Client für iOS/OS X.
* [sockets](https://github.com/vapor-community/sockets) :penguin: - TCP, UDP; Client, Server; Linux, OS X.
* [Starscream](https://github.com/daltoniam/Starscream) - WebSockets für iOS und OSX.
* [SwiftSocket](https://github.com/swiftsocket/SwiftSocket) - Einfache TCP-Socket-Bibliothek.
* [SwiftWebSocket](https://github.com/tidwall/SwiftWebSocket) - Leistungsstarke WebSocket-Clientbibliothek.

#### Webserver
*Möchtest du auf deinem Gerät einen Webserver hosten? Hier erfährst du, wie das geht.* [zurück nach oben](#readme)

* [Ambassador](https://github.com/envoy/Ambassador) - Besonders leichtgewichtiges Web-Framework auf Basis von SWSGI.
* [Curassow](https://github.com/kylef-archive/Curassow) :penguin: - HTTP-Server mit vorab gestarteten Worker-Prozessen.
* [Embassy](https://github.com/envoy/Embassy) :penguin: - Besonders leichtgewichtige asynchrone HTTP-Serverbibliothek.
* [Kitura](https://github.com/Kitura/Kitura) :penguin: - Web-Framework und Server von IBM für Webdienste.
* [Lightning](https://github.com/skylab-inc/Lightning) :penguin: - Plattformübergreifendes, nicht blockierendes Web- und Networking-Framework mit einem Thread.
* [Noze.io](https://github.com/NozeIO/Noze.io) :penguin: - Ereignisgesteuerte I/O-Datenströme wie bei Node.js.
* [Perfect](https://github.com/PerfectlySoft/Perfect) :penguin: - Serverseitiges Swift: Bibliothek, Anwendungsserver, Connectors und Beispiel-Apps.
* [swifter](https://github.com/httpswift/swifter) :penguin: - HTTP-Server mit Routing-Handler.
* [Vapor](https://github.com/vapor/vapor) :penguin: - Elegantes Web-Framework für iOS, OS X und Ubuntu.
* [Zewo](https://github.com/Zewo/Zewo) :penguin: - Serverseitiges Swift.

### OCR
[zurück nach oben](#readme)

* [SwiftOCR](https://github.com/NMAC427/SwiftOCR) - OCR-Bibliothek auf Basis neuronaler Netze.

### Optimierung
[zurück nach oben](#readme)


### PDF
[zurück nach oben](#readme)

* [PDFGenerator](https://github.com/sgr-ksmt/PDFGenerator) - Einfacher PDF-Generator, der PDFs aus Views oder Bildern erzeugt.
* [SimplePDF](https://github.com/nRewik/SimplePDF) - Mühelose Erstellung einfacher PDFs.
* [UXMPDFKit](https://github.com/uxmstudio/UXMPDFKit) - PDF-Betrachter und -Kommentierungswerkzeug zur Einbettung in iOS-Anwendungen.

### Qualität
[zurück nach oben](#readme)

* [AnyLint](https://github.com/FlineDev/AnyLint) :penguin: - Alles linten, indem die Leistungsfähigkeit von Swift und regulären Ausdrücken kombiniert wird.
* [IBLinter](https://github.com/IBDecodable/IBLinter) - Linter für den Interface Builder.
* [L10nLint](https://github.com/s2mr/L10nLint) - Linter für Localizable.strings.
* [solid-like-a-rock](https://github.com/nenadvulic/solid-like-a-rock) :penguin: - Architektur-Linter, der Clean Architecture und TCA-Importregeln mit SwiftSyntax durchsetzt.
* [swift-mod](https://github.com/ra1028/swift-mod) - Werkzeug zur Änderung von Swift-Code zwischen Codegenerierung und Formatierung.
* [SwiftCop](https://github.com/andresinaka/SwiftCop) - Validierungsbibliothek, inspiriert von der klaren Syntax der Active-Record-Validierungen in Ruby on Rails.
* [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) - Bibliothek und Kommandozeilenwerkzeug zur Formatierung von Swift-Code.
* [SwiftLint](https://github.com/realm/SwiftLint) - Werkzeug zur Durchsetzung von Coding-Konventionen.
* [Swimat](https://github.com/Jintin/Swimat) - Xcode-Plugin zur Codeformatierung.
* [Tailor](https://github.com/sleekbyte/tailor) :penguin: - Plattformübergreifender statischer Analysator für saubereren Code und weniger Fehler.

### Skripting
[zurück nach oben](#readme)

* [Swift for Scripting](https://github.com/artemnovichkov/Swift-For-Scripting) - Handverlesene Sammlung nützlicher und informativer Materialien zum Skripting.

### SDK
[zurück nach oben](#readme)


### Sicherheit
[zurück nach oben](#readme)

* [SecurePropertyStorage](https://github.com/alexruperez/SecurePropertyStorage) - Definiert sichere Speicher für Eigenschaften mithilfe von Swift-Property-Wrappers.
* [TouchBridge](https://github.com/HMAKT99/UnTouchID) - Verwende den Fingerabdruck deines Smartphones zur Authentifizierung auf jedem Mac.

#### Kryptografie
*Kryptografische Verfahren einfach nutzen.* [zurück nach oben](#readme)

* [BlueCryptor](https://github.com/Kitura/BlueCryptor) - Plattformübergreifende Kryptografiebibliothek von IBM.
* [BlueRSA](https://github.com/Kitura/BlueRSA) - Plattformübergreifende RSA-Kryptografiebibliothek von IBM.
* [CryptoSwift](https://github.com/krzyzanowskim/CryptoSwift) :penguin: - Kryptografische Funktionen und Hilfswerkzeuge.
* [IDZSwiftCommonCrypto](https://github.com/iosdevzone/IDZSwiftCommonCrypto) - Wrapper für Apples Common-Crypto-Bibliothek.
* [JOSESwift](https://github.com/airsidemobile/JOSESwift) - Framework für die JOSE-Standards JWS, JWE und JWK.
* [JWSETKit](https://github.com/amosavian/JWSETKit) - JOSE-Bibliothek mit Unterstützung für JWS, JWT, JWE und JWK.
* [RNCryptor](https://github.com/RNCryptor/RNCryptor) - CCCryptor-Wrapper (Apples AES-Verschlüsselung) für iOS und Mac.
* [SCrypto](https://github.com/sgl0v/scrypto) - Elegante Schnittstelle für den Zugriff auf CommonCrypto-Routinen.
* [Siphash](https://github.com/attaswift/SipHash) - Einfaches und sicheres Hashing mit dem SipHash-Algorithmus.
* [Swift-Sodium](https://github.com/jedisct1/swift-sodium) - Schnittstelle zur Sodium-Bibliothek für gängige kryptografische Operationen unter iOS und OS X.
* [Themis](https://github.com/cossacklabs/themis) - Mehrsprachiges Framework zur einfachen Nutzung gängiger Verschlüsselungsverfahren: ruhende Daten, authentifizierter Datenaustausch, Transportschutz, Authentifizierung und mehr.

#### Schlüsselbund
[zurück nach oben](#readme)

* [GoodPersistence](https://github.com/GoodRequest/GoodPersistence) - 💾 Vereinfacht das Zwischenspeichern von Daten im Schlüsselbund und in UserDefaults mithilfe von Property Wrappers.
* [keychain-swift](https://github.com/evgenyneu/keychain-swift) - Hilfsfunktionen zum sicheren Speichern von Text im Schlüsselbund unter iOS, OS X, tvOS und watchOS.
* [KeychainAccess](https://github.com/kishikawakatsumi/KeychainAccess) - Einfacher Schlüsselbund-Wrapper für iOS und OS X.
* [Latch](https://github.com/endocrimes/Latch) - Einfacher Schlüsselbund-Wrapper für iOS.
* [SwiftKeychainWrapper](https://github.com/jrendel/SwiftKeychainWrapper) - Statischer Wrapper für den iOS-Schlüsselbund, der eine Verwendung ähnlich wie User Defaults ermöglicht.
* [Valet](https://github.com/square/Valet) - Speichert Daten sicher im Schlüsselbund, ohne dass du wissen musst, wie er funktioniert. Ganz einfach, versprochen.

### Streaming
[zurück nach oben](#readme)

* [HaishinKit](https://github.com/HaishinKit/HaishinKit.swift) - Streaming-Bibliothek für Kamera und Mikrofon über RTMP und HLS unter iOS, macOS und tvOS.
* [Live](https://github.com/ltebean/Live) - Veranschaulicht die Entwicklung einer Live-Streaming-App.

### Gestaltung
[zurück nach oben](#readme)

* [Stylist](https://github.com/yonaskolb/Stylist) - UI-Stile in einer externen, zur Laufzeit ladbaren YAML- oder JSON-Datei definieren.
* [SwiftTheme](https://github.com/wxxsw/SwiftTheme) - Leistungsstarker Theme-/Skin-Manager für iOS 8 und neuer.
* [Themes](https://github.com/onmyway133/EasyTheme) - Theme-Verwaltung.

### SVG
[zurück nach oben](#readme)

* [SVGView](https://github.com/exyte/SVGView) - SVG-Parser und -Renderer in SwiftUI.

### System
[zurück nach oben](#readme)

* [BlueSignals](https://github.com/Kitura/BlueSignals) - Plattformübergreifende Bibliothek von IBM zur Behandlung von Betriebssystemsignalen.
* [LaunchAtLogin](https://github.com/sindresorhus/LaunchAtLogin-Legacy) - Ergänzt deine Sandbox-macOS-App mühelos um die Funktion „Beim Anmelden starten“.
* [SystemKit](https://github.com/beltex/SystemKit/) - Systembibliothek für OS X.

### Testen
*Sammlung von Test-Frameworks.* [zurück nach oben](#readme)

* [DVR](https://github.com/venmo/DVR) - Einfaches Netzwerk-Testframework.
* [Erik](https://github.com/phimage/Erik) - Headless-Browser zur Steuerung von Webseiten mit JavaScript und Ausführung funktionaler Tests.
* [Fakery](https://github.com/vadymmarkov/Fakery) - Generator für Testdaten.
* [Mussel](https://github.com/UrbanCompass/Mussel) - Framework zum einfachen Testen von Push-Benachrichtigungen, universellen Links und Routing in XCUITests.
* [Nimble](https://github.com/Quick/Nimble) - Matcher-Framework.
* [OHHTTPStubs](https://github.com/AliSoftware/OHHTTPStubs) - Testbibliothek zum einfachen Stubben von Netzwerkanfragen.
* [Quick](https://github.com/Quick/Quick) :penguin: - Framework für verhaltensgetriebene Entwicklung.
* [SBTUITestTunnel](https://github.com/Subito-it/SBTUITestTunnel) - UI-Testbibliothek für Netzwerkanfragen, CLLocationManager- und UNUserNotificationCenter-Stubs sowie präzises Scrollen in Tabellen-, Collection- und Scroll-Views.
* [Sizes](https://github.com/marcosgriselli/Sizes) - Teste deine App auf verschiedenen Geräten und mit unterschiedlichen Schriftgrößen.
* [SnapshotTest](https://github.com/parski/SnapshotTest) - Werkzeug für Snapshot-Tests unter iOS und tvOS.
* [Spectre](https://github.com/kylef/Spectre) :penguin: - BDD-Framework.
* [swift-testing-expectation](https://github.com/dfed/swift-testing-expectation) - Asynchrone Erwartung in Swift Testing erstellen.
* [SwiftCheck](https://github.com/typelift/SwiftCheck) - Testbibliothek, die automatisch Zufallsdaten zur Überprüfung von Programmeigenschaften erzeugt.
* [UI Testing Cheat Sheet](https://github.com/joemasilotti/UI-Testing-Cheat-Sheet) - Antworten auf häufige Fragen zum UI-Testing mit einer funktionierenden Beispiel-App.
* [XCTest](https://github.com/swiftlang/swift-corelibs-xctest) - Swift-Core-Bibliothek zur Unterstützung von Unit-Tests.

#### Mock
[zurück nach oben](#readme)

* [AutoMockable](https://github.com/vincent-pradeilles/AutoMocker) - Nutzt das Typsystem, damit sich Mock-Instanzen deiner Datentypen leicht erstellen lassen.
* [Cuckoo](https://github.com/Brightify/Cuckoo) - Erstes Mocking-Framework ohne Boilerplate.
* [Mocker](https://github.com/WeTransfer/Mocker) - Alamofire- und URLSession-Anfragen mocken, ohne die Implementierung deines Codes anzupassen.
* [Mockingbird](https://github.com/Farfetch/mockingbird) - Vereinfacht Softwaretests durch einfaches Mocking beliebiger Systeme über HTTP/HTTPS, damit Teams gegen unvollständige oder instabile Dienste testen und entwickeln können.
* [Mockingjay](https://github.com/kylef/Mockingjay) - Elegante Bibliothek zum einfachen Stubben von HTTP-Anfragen.
* [Mockit](https://github.com/sabirvirtuoso/Mockit) - Einfaches Mocking-Framework, inspiriert vom bekannten Mockito für Java.
* [MockSwift](https://github.com/leoture/MockSwift) - Mock-Framework, das Property Wrappers nutzt.

### Text
*Sammlung von Textprojekten.* [zurück nach oben](#readme)

* [Attributed](https://github.com/Nirma/Attributed) - Modernes Mikroframework für formatierte Zeichenfolgen.
* [AttributedTextView](https://github.com/evermeer/AttributedTextView) - Einfachste Erstellung einer formatierten UITextView mit Unterstützung für mehrere Links, Hashtags und Erwähnungen.
* [BonMot](https://github.com/Rightpoint/BonMot) - Schöne, unkomplizierte formatierte Zeichenfolgen für iOS.
* [Croc](https://github.com/JKalash/Croc) - Leichtgewichtige Bibliothek zum Parsen und Abfragen von Emoji.
* [edhita](https://github.com/tnantoka/edhita) - Vollständig quelloffener Texteditor für iOS.
* [GMarkdown](https://github.com/GIKICoder/GMarkdown) - Markdown-Renderingbibliothek für iOS mit Unterstützung für Tabellen, LaTeX, Mermaid und Codehervorhebung.
* [MarkdownDisplayView](https://github.com/zjc19891106/MarkdownDisplayView) - Markdown-Renderingkomponente auf Basis von TextKit 2 mit flüssiger Darstellung, umfangreichen Anpassungsmöglichkeiten und Unterstützung für gestreamte KI-Konversationen.
* [MarkdownKit](https://github.com/bmoliveira/MarkdownKit) - Einfacher und anpassbarer Markdown-Parser.
* [MarkdownView](https://github.com/keitaoouchi/MarkdownView) - Markdown-Ansicht für iOS.
* [MarkyMark](https://github.com/M2Mobi/Marky-Mark) - Wandelt Markdown in native Views oder formatierte Zeichenfolgen um.
* [Notepad](https://github.com/ruddfawcett/Notepad) - Vollständig thematisierbarer Markdown-Editor mit Live-Syntaxhervorhebung.
* [OEMentions](https://github.com/omar14/OEMentions) - Einfache Ergänzung von Erwähnungen in UITextView wie bei Facebook und Instagram.
* [Parsey](https://github.com/rxwei/Parsey) - Parser-Kombinator-Framework mit Quellpositionsverfolgung, Schutz vor Backtracking und aussagekräftigen Fehlermeldungen.
* [Pluralize.swift](https://github.com/joshualat/Pluralize.swift) - Praktische Erweiterung zur Pluralbildung von Zeichenfolgen.
* [PredicateFlow](https://github.com/andreadelfante/PredicateFlow) - Builder zum Schreiben beeindruckender, stark typisierter und gut lesbarer NSPredicate-Ausdrücke.
* [PrediKit](https://github.com/KrakenDev/PrediKit) - NSPredicate-DSL für iOS und OS X, inspiriert von SnapKit.
* [Regex by crossroadlabs](https://github.com/crossroadlabs/Regex) :penguin: - Einfach zu verwendende Bibliothek für reguläre Ausdrücke mit umfangreichen Funktionen, Operator-API `=~` und Methoden-API sowie Unit-Tests.
* [Regex by sindresorhus](https://github.com/sindresorhus/Regex) - Swift-typische reguläre Ausdrücke, vollständig getestet und dokumentiert, mit korrekter Unicode-Unterstützung.
* [RichEditorView](https://github.com/cjwirth/RichEditorView) - Einfache, modulare und direkt integrierbare UIView-Unterklasse zur Bearbeitung formatierter Texte.
* [Sprinter](https://github.com/nicklockwood/Sprinter) - Bibliothek zur Formatierung von Zeichenfolgen.
* [SwiftRichString](https://github.com/malcommac/SwiftRichString) - Elegante und mühelose Verwaltung formatierter Zeichenfolgen.
* [SwiftVerbalExpressions](https://github.com/VerbalExpressions/SwiftVerbalExpressions) - Portierung von VerbalExpressions.
* [SwiftyAttributes](https://github.com/eddiekaiger/SwiftyAttributes) - Erweiterungen für die einfache Arbeit mit formatierten Zeichenfolgen.
* [Tagging](https://github.com/k-lpmg/Tagging) - TextView mit einfach zu verwendender Markierungsfunktion für Erwähnungen oder Hashtags.
* [Texstyle](https://github.com/rosberry/texstyle) - Formatiert formatierte Zeichenfolgen ganz einfach.
* [TextAttributes](https://github.com/delba/TextAttributes) - Einfachere Zusammenstellung formatierter Zeichenfolgen.
* [TextBuilder](https://github.com/davdroman/swiftui-text-builder) - Wie SwiftUIs ViewBuilder, aber für Text.
* [TwitterTextEditor](https://github.com/twitter/TwitterTextEditor) - Eigenständige, flexible API für einen voll ausgestatteten Rich-Text-Editor in iOS-Anwendungen.
* [VEditorKit](https://github.com/GeekTree0101/VEditorKit) - Leichtgewichtiges und leistungsstarkes Editor-Kit.

### Threads
*Threading, aufgabenbasierte oder asynchrone Programmierung, Wrapper für Grand Central Dispatch (GCD).* [zurück nach oben](#readme)

* [Async](https://github.com/duemunk/Async) - Syntaktischer Zucker für Grand Central Dispatch.
* [AwaitKit](https://github.com/yannickl/AwaitKit) - Kontrollfluss für ES7 Async/Await.
* [Each](https://github.com/dalu93/Each) - Each ist eine NSTimer-Bridge-Bibliothek.
* [GCDTimer](https://github.com/hemantasapkota/GCDTimer) - Gründlich getesteter GCD-Timer.
* [Schedule](https://github.com/luoxiu/Schedule) :penguin: - Fehlender leichtgewichtiger Task-Scheduler mit besonders benutzerfreundlicher Syntax.
* [SwiftyTimer](https://github.com/radex/SwiftyTimer) - API für NSTimer.

### Benutzeroberfläche
*Sammlung vorgefertigter Übergänge und praktischer UI-Komponenten.* [zurück nach oben](#readme)

* [ActivityIndicatorView](https://github.com/exyte/ActivityIndicatorView) - Verschiedene vordefinierte Ladeanzeigen mit SwiftUI.
* [AECoreDataUI](https://github.com/tadija/AERecord) - Von Core Data gesteuerte UI.
* [AGCircularPicker](https://github.com/agilie/AGCircularPicker) - Praktische Komponente zur Steuerung beliebiger berechneter Parameter.
* [AMScrollingNavbar](https://github.com/andreamazz/AMScrollingNavbar) - Scrollbare UINavigationBar, die dem Scrollen einer UIScrollView folgt.
* [Arale](https://github.com/supercomputra/Arale) - Benutzerdefinierter, dehnbarer Header für UIScrollView oder Unterklassen mit Unterstützung für UIActivityIndicatorView beim Neuladen.
* [BadgeHub](https://github.com/jogendra/BadgeHub) - Verwandle jede UIView in ein vollwertiges animiertes Benachrichtigungszentrum und ergänze schnell ein Benachrichtigungs-Badge.
* [BatteryView](https://github.com/yonat/BatteryView) - Einfache UIView in Batterieform.
* [BetterSafariView](https://github.com/stleamist/BetterSafariView) - Bessere Anzeige von SFSafariViewController oder Start einer ASWebAuthenticationSession in SwiftUI.
* [BottomSheet](https://github.com/joomcode/BottomSheet) - Leistungsstarke Bottom-Sheet-Komponente mit inhaltsabhängiger Größe, interaktivem Schließen und Unterstützung für Navigationscontroller.
* [BreakOutToRefresh](https://github.com/dasdom/BreakOutToRefresh) - Spielbare Pull-to-Refresh-Ansicht mit SpriteKit.
* [BulletinBoard](https://github.com/alexaubry/BulletinBoard) - Erstellt und verwaltet kontextbezogene Karten am unteren Bildschirmrand.
* [CapturePreventionKit](https://github.com/Jaesung-Jung/CapturePreventionKit) - Stellt `Label` und `ImageView` zur Verhinderung von Bildschirmaufnahmen bereit.
* [CircularProgress](https://github.com/sindresorhus/CircularProgress) - Kreisförmige Fortschrittsanzeige für macOS-Apps.
* [CircularRangeSlider](https://github.com/diegotid/circular-range-slider) - Anpassbare SwiftUI-Komponente zur Auswahl eines Wertebereichs über einen Kreisschieberegler.
* [ClassicKit](https://github.com/Baddaboo/ClassicKit) - Sammlung klassisch gestalteter UI-Komponenten.
* [ContainerController](https://github.com/mrustaa/ContainerController) - UI-Komponente mit Wischpanel nach dem Vorbild von Apple Karten und Aktien.
* [CountryPickerView](https://github.com/kizitonwose/CountryPickerView) - Einfache, anpassbare View zur effizienten Erfassung von Länderinformationen in iOS-Apps.
* [CustomSegue](https://github.com/phimage/CustomSegue) - Benutzerdefinierter Segue für OS-X-Storyboards mit Schiebe- und Überblendungseffekten.
* [DeckTransition](https://github.com/HarshilShah/DeckTransition) - Bibliothek zur Nachbildung des Übergangs „Aktuelle Wiedergabe“ von Apple Music in iOS 10.
* [DockProgress](https://github.com/sindresorhus/DockProgress) - Zeigt den Fortschritt im Dock-Symbol deiner macOS-App an.
* [Dodo](https://github.com/evgenyneu/Dodo) - Nachrichtenleiste für iOS.
* [Doric Design System Foundation](https://github.com/jayeshk/Doric) - Protokollorientiertes, typsicheres und skalierbares Designsystem-Grundgerüst für iOS.
* [DropDown](https://github.com/AssistoLab/DropDown) - Dropdown für iOS im Material-Design-Stil.
* [Elissa](https://github.com/KitchenStories/Elissa) - Zeigt eine Benachrichtigung über einem UITabBarItem oder einer beliebigen Anker-View an, um zusätzliche Informationen einzublenden.
* [EstMusicIndicator](https://github.com/Aufree/ESTMusicIndicator) - Musikwiedergabe-Anzeige wie in iTunes.
* [Family](https://github.com/zenangst/Family) - Framework für Child-View-Controller, das die Einrichtung von Parent-Controllern stark vereinfacht.
* [FAQView](https://github.com/mukeshthawani/faqview) - Einfach zu verwendende FAQ-Ansicht für iOS.
* [Fashion](https://github.com/vadymmarkov/Fashion) - UI-Stile als Zubehör und Werkzeuge teilen und wiederverwenden.
* [FlagKit](https://github.com/madebybowtie/FlagKit) - Ansprechende Flaggensymbole für Apps und Websites.
* [FlexibleHeader](https://github.com/k-lpmg/FlexibleHeader) - Container-View, die auf das Scrollen einer UIScrollView reagiert.
* [FloatRatingView](https://github.com/glenyi/FloatRatingView) - Schwebendes Bewertungssystem.
* [Fluid Slider](https://github.com/Ramotion/fluid-slider) - Schieberegler mit Popup-Blase zur Anzeige des präzise gewählten Werts.
* [GaugeKit](https://github.com/skywinder/GaugeKit) - Anpassbare Messanzeigen zur einfachen Nachbildung des Apple-Stils.
* [GMStepper](https://github.com/gmertk/GMStepper) - Stepper mit verschiebbarem Beschriftungsfeld in der Mitte.
* [GradientProgressBar](https://github.com/fxm90/GradientProgressBar) - Animierter Fortschrittsbalken mit Farbverlauf.
* [GRMustache](https://github.com/groue/GRMustache.swift) - Flexible Mustache-Vorlagen.
* [GrowingTextView](https://github.com/KennethTsang/GrowingTextView) - UITextView mit automatischer Größenanpassung, Platzhalter und Längenbegrenzung.
* [HGCircularSlider](https://github.com/HamzaGhazouani/HGCircularSlider) - Benutzerdefinierter, wiederverwendbarer Kreisschieberegler für iOS-Apps.
* [HidesNavigationBarWhenPushed](https://github.com/gontovnik/HidesNavigationBarWhenPushed) - Ermöglicht das Ausblenden der Navigationsleiste beim Anzeigen eines View Controllers über das Flag hidesNavigationBarWhenPushed.
* [HorizontalDial](https://github.com/kciter/HorizontalDial) - Horizontales Scrollrad wie bei Instagram.
* [HPParallaxHeader](https://github.com/ngochiencse/HPParallaxHeader) - Einfacher Parallax-Header für UIScrollView.
* [IGColorPicker](https://github.com/iGenius-Srl/IGColorPicker) - Anpassbare Farbauswahl für iOS.
* [InstantSearch iOS](https://github.com/algolia/instantsearch-ios) - Bibliothek mit Widgets und Hilfsfunktionen für Sofortsuche unter iOS.
* [KALoader](https://github.com/Kirillzzy/KALoader) - Ansprechende animierte Platzhalter zum Anzeigen des Ladevorgangs.
* [KMNavigationBarTransition](https://github.com/MoZhouqi/KMNavigationBarTransition) - Direkt integrierbare Bibliothek zur Verwaltung von Navigationsleisten-Stilen und flüssigen Übergängen beim Anzeigen oder Schließen eines View Controllers in allen Ausrichtungen.
* [KMPlaceholderTextView](https://github.com/MoZhouqi/KMPlaceholderTextView) - UITextView-Unterklasse mit Unterstützung für mehrzeilige Platzhalter.
* [LeeGo](https://github.com/wangshengjia/LeeGo) - Deklarative, konfigurierbare und wiederverwendbare UI-Entwicklung wie mit LEGO-Steinen.
* [LicensePlist](https://github.com/mono0926/LicensePlist) - Kommandozeilenwerkzeug, das automatisch eine Plist-Datei mit allen Abhängigkeiten generiert.
* [LiquidLoader](https://github.com/yoavlt/LiquidLoader) - Spinner-Komponenten mit flüssiger Animation.
* [LoadingShimmer](https://github.com/jogendra/LoadingShimmer) - Fügt jeder View mit nur einer Codezeile einen Schimmereffekt als unaufdringliche Ladeanzeige hinzu.
* [Macaw](https://github.com/exyte/macaw) - Leistungsstarke, einfach zu verwendende Vektorgrafikbibliothek mit SVG-Unterstützung.
* [Magnetic](https://github.com/efremidze/Magnetic) - Schwebende SpriteKit-Blasenauswahl, inspiriert von Apple Music.
* [Mandoline](https://github.com/blueapron/Mandoline) - iOS-Auswahlansicht für alle Arten von Auswahlen.
* [MantleModal](https://github.com/canalesb93/MantleModal) - Einfache modale Ansicht mit UIScrollView, die sich durch Herunterziehen schließen lässt.
* [Material](https://github.com/CosmicMind/Material) - Setze deine Kreativität mit einem Animations- und Grafik-Framework für Googles Material Design und Apples Flat UI um.
* [Material Components for iOS](https://github.com/material-components/material-components-ios) - Modulare und anpassbare Material-Design-UI-Komponenten.
* [MaterialKit](https://github.com/nghialv/MaterialKit) - Material-Design-Komponenten.
* [MediaBrowser](https://github.com/younatics/MediaBrowser) - Einfacher Foto- und Videobetrachter für iOS mit optionaler Rasteransicht, Bildunterschriften und Auswahl.
* [MPParallaxView](https://github.com/DroidsOnRoids/MPParallaxView) - Parallax-Effekt von Apple TV.
* [MultiSelectSegmentedControl](https://github.com/yonat/MultiSelectSegmentedControl) - Neuimplementierung von UISegmentedControl mit Mehrfachauswahl, vertikaler Anordnung und Kombination von Text und Bildern.
* [MultiSlider](https://github.com/yonat/MultiSlider) - UISlider-Klon mit mehreren Griffen und Werten, Bereichshervorhebung, optionalen Fangintervallen und Wertbeschriftungen sowie vertikaler oder horizontaler Ausrichtung.
* [MuscleMap](https://github.com/melihcolpan/MuscleMap) - Interaktive Muskelkarten des menschlichen Körpers mit SwiftUI und UIKit rendern.
* [MXParallaxHeader](https://github.com/maxep/MXParallaxHeader) - Einfacher Parallax-Header für UIScrollView.
* [MZFormSheetPresentationController](https://github.com/m1entus/MZFormSheetPresentationController) - Alternative zu UIModalPresentationFormSheet mit iPhone-Unterstützung und zusätzlichen Möglichkeiten zur Anpassung von Größe und Aussehen.
* [NeumorphismKit](https://github.com/y-okudera/NeumorphismKit) - Neumorphismus-Framework für UIKit.
* [NextGrowingTextView](https://github.com/FluidGroup/NextGrowingTextView) - Weiterentwicklung automatisch wachsender Text-Views, optimiert für iOS 7 und neuer.
* [NVActivityIndicatorView](https://github.com/ninjaprox/NVActivityIndicatorView) - Sammlung ansprechender Ladeanimationen.
* [OverlayContainer](https://github.com/applidium/OverlayContainer) - Vereinfacht die Entwicklung von Overlay-Oberflächen wie in Apple Karten oder Aktien.
* [Partition Kit](https://github.com/kieranb662/PartitionKit) - SwiftUI-Bibliothek für anpassbare Bereiche von View-Inhalten.
* [Popovers](https://github.com/aheze/Popovers) - Bibliothek zum Anzeigen einfacher, moderner und stark anpassbarer Popovers.
* [Preferences](https://github.com/sindresorhus/Settings) - Ergänzt deine macOS-App in wenigen Minuten um ein Einstellungsfenster.
* [ProgressIndicatorView](https://github.com/exyte/ProgressIndicatorView) - SwiftUI-Bibliothek für Fortschrittsanzeigen.
* [PullToDismiss](https://github.com/sgr-ksmt/PullToDismiss) - Modale View Controller durch Ziehen der Scroll View oder Navigationsleiste schließen.
* [RangeSeekSlider](https://github.com/WorldDownTown/RangeSeekSlider) - Anpassbarer Bereichsschieberegler wie UISlider für iOS.
* [Reel search](https://github.com/Ramotion/reel-search) - Optionsliste in Form eines Filmstreifens.
* [ResizingTokenField](https://github.com/tadejr/ResizingTokenField) - Auf UICollectionView basierendes Token-Feld mit intrinsischer Inhaltshöhe.
* [RetroProgress](https://github.com/hyperoslo/RetroProgress) - Fortschrittsbalken im Retro-Stil der 90er.
* [SectionedSlider](https://github.com/LeonardoCardoso/SectionedSlider) - Schieberegler des Kontrollzentrums.
* [SelectionDialog](https://github.com/kciter/SelectionDialog) - Einfacher Auswahldialog.
* [ShadowView](https://github.com/PierrePerrin/ShadowView) - Schattenverwaltung für UIView leicht gemacht.
* [Shiny](https://github.com/efremidze/Shiny) - Schillernder View-Effekt, inspiriert von Apple Pay Cash.
* [ShowSomeProgress](https://github.com/stoneburner/ShowSomeProgress) - Animierte Fortschritts- und Aktivitätsanzeigen für iOS-Apps.
* [SkeletonView](https://github.com/Juanpe/SkeletonView) - Elegante Anzeige laufender Vorgänge und der Inhalte, auf die Nutzer warten.
* [SKPhotoBrowser](https://github.com/suzuki-0000/SKPhotoBrowser) - Einfacher Fotobetrachter, inspiriert von den Fotobetrachtern von Facebook und Twitter.
* [Spots](https://github.com/hyperoslo) - View-Controller-Framework, das Einrichtung und Weiterentwicklung besonders schnell macht.
* [SpreadsheetView](https://github.com/kishikawakatsumi/SpreadsheetView) - Vollständig konfigurierbare Tabellenkalkulations-UI für iOS-Anwendungen.
* [StarryStars](https://github.com/peterprokop/StarryStars) - Bewertungen anzeigen und bearbeiten, vollständig im Interface Builder anpassbar.
* [StatefulViewController](https://github.com/aschuch/StatefulViewController) - Platzhalteransichten für Inhalte, Lade-, Fehler- oder leere Zustände.
* [StepProgressView](https://github.com/yonat/StepProgressView) - Schrittweise Fortschrittsansicht mit Beschriftungen und Formen; gute Alternative zu UIActivityIndicatorView und UIProgressView.
* [SweetCurtain](https://github.com/ihormalovanyi/SweetCurtain) - Besonders angenehme und einfache, nach unten ziehbare Sheet-Implementierung ähnlich wie in Apple Karten, Wo ist? und Aktien.
* [SwiftUISkia](https://github.com/rustq/swiftui-skia) - Auf Skia basierende 2D-Grafikbibliothek für SwiftUI mit softwarebasierter Rasterisierung in Rust.
* [SwiftyUI](https://github.com/haoking/SwiftyUI) - Leistungsstarke und leichtgewichtige UIView-, UIImage-, UIImageView-, UILabel-, UIButton-Komponenten und mehr.
* [TagListView](https://github.com/ElaWorkshop/TagListView) - Einfache, aber stark anpassbare Tag-Listenansicht für iOS.
* [Toaster](https://github.com/devxoul/Toaster) - Toast-Benachrichtigungen.
* [Twinkle](https://github.com/piemonte/Twinkle) - Elemente deiner iOS-App ganz einfach funkeln lassen.
* [UltraDrawerView](https://github.com/super-ultra/UltraDrawerView) - Leichtgewichtige, schnelle und anpassbare Drawer-View wie in Apple Karten und Aktien.
* [URLEmbeddedView](https://github.com/marty-suzuki/URLEmbeddedView) - Ruft automatisch bestätigte Open-Graph-Metadaten ab, speichert sie zwischen und zeigt eine eingebettete URL-Karte an.
* [Windless](https://github.com/ParkGwangBeom/Windless) - Unsichtbare Layout-Ladeansichten einfach implementieren.
* [WSTagsField](https://github.com/whitesmith/WSTagsField) - iOS-Textfeld zur Darstellung verschiedener Tags.
* [YMTreeMap](https://github.com/yahoo/YMTreeMap) - Treemap-/Heatmap-Layout-Engine auf Basis von Squarified.
* [YNSearch](https://github.com/younatics/YNSearch) - Vollständig anpassbare Suchansicht im Pinterest-Stil.

#### Alarmmeldungen
*Bibliotheken für Meldungen, Aktionsblätter, Benachrichtigungen und Pop-ups.* [zurück nach oben](#readme)

* [Alertift](https://github.com/sgr-ksmt/Alertift) - Moderner, einfach zu verwendender UIAlertController-Wrapper.
* [Alerts Pickers](https://github.com/dillidon/alerts-and-pickers) - Erweiterte Nutzung von UIAlertController mit TextField, DatePicker, PickerView, TableView und CollectionView.
* [ALRT](https://github.com/mshrwtnb/alrt) - Einfachere Erstellung von UIAlertController; zeigt Meldungen von überall aus an.
* [AwaitToast](https://github.com/k-lpmg/AwaitToast) - 🍞 Asynchroner Warte-Toast mit einfachem Toast, inspiriert von Facebook-Posting-Meldungen.
* [CDAlertView](https://github.com/candostdagdeviren/CDAlertView) - Hochgradig anpassbares Popup für Meldungen, Benachrichtigungen, Erfolg, Fehler und Alarme.
* [CFNotify](https://github.com/JT501/SwiftNotify) - Anpassbares Framework für verschiebbare Meldungsansichten.
* [EZAlertController](https://github.com/thellimist/EZAlertController) - Einfacher UIAlertController.
* [FullscreenPopup](https://github.com/Ryu0118/swift-fullscreen-popup) - Zeigt beliebige Pop-ups in SwiftUI über der Navigationsleiste an.
* [GSMessage](https://github.com/wxxsw/GSMessages) - Einfache Meldungen und Benachrichtigungen für iOS 7 und neuer.
* [Kamagari](https://github.com/tasanobu-zz/Kamagari) - Einfache Builder-Klasse für UIAlertController.
* [Loaf](https://github.com/schmidyy/Loaf) - Einfaches Framework für iOS-Toast-Meldungen.
* [MijickPopups](https://github.com/Mijick/Popups) - Einfache Anzeige von Pop-ups, Popovers, Sheets, Alarmmeldungen, Toasts und Bannern.
* [NotificationBanner](https://github.com/Daltron/NotificationBanner) - Einfachste Anzeige stark anpassbarer In-App-Benachrichtigungsbanner unter iOS.
* [PMAlertController](https://github.com/pmusolino/PMAlertController) - Hervorragender und anpassbarer Ersatz für UIAlertController.
* [PopupDialog](https://github.com/orderella/PopupDialog) - Einfacher, anpassbarer Popup-Dialog als Ersatz für UIAlertController im Alarmstil.
* [PopupView](https://github.com/exyte/PopupView) - SwiftUI-Bibliothek für Toasts und Pop-ups.
* [SCLAlertView](https://github.com/vikmeup/SCLAlertView-Swift) - Animierte Alarmansicht.
* [Sheet](https://github.com/ParkGwangBeom/Sheet) - Aktionsblatt mit Navigationsfunktionen wie in der Flipboard-App.
* [SPAlert](https://github.com/sparrowcode/AlertKit) - Native Pop-ups wie in Apple Music und Feedback im App Store mit Vorlagen für „Fertig“ und „Herz“.
* [StatusAlert](https://github.com/LowKostKustomz/StatusAlert) - Selbstverschwindende Systemmeldungen im Apple-Stil ohne Unterbrechung des Nutzerablaufs.
* [SweetAlert](https://github.com/codestergit/SweetAlert-iOS) - Meldungssystem.
* [Swift-Prompts](https://github.com/GabrielAlva/Swift-Prompts) - Benutzerdefinierte Eingabeaufforderungen mit zahlreichen Optionen gestalten.
* [SwiftEntryKit](https://github.com/huri000/SwiftEntryKit) - Einfacher und vielseitiger Presenter für Pop-ups.
* [SwiftMessages](https://github.com/SwiftKickMobile/SwiftMessages) - Besonders flexible Nachrichtenleiste für iOS.
* [SwiftOverlays](https://github.com/peterprokop/SwiftOverlays) - Verschiedene Pop-ups und Benachrichtigungen.
* [Toast-Swift](https://github.com/BastiaanJansen/Toast-Swift) - Einfach zu verwendende Toast-Bibliothek im Stil von iOS 14 und neuer.
* [XLActionController](https://github.com/xmartlabs/XLActionController) - Vollständig anpassbarer und erweiterbarer Aktionsblatt-Controller.
* [Zingle](https://github.com/hemangshah/Zingle) - Meldung direkt unter der UINavigationBar.

#### Unschärfe
[zurück nach oben](#readme)

* [VisualEffectView](https://github.com/efremidze/VisualEffectView) - UIVisualEffectView-Unterklasse mit Farbton.

#### Schaltflächen
[zurück nach oben](#readme)

* [AHDownloadButton](https://github.com/amerhukic/AHDownloadButton) - Anpassbare Download-Schaltfläche mit Fortschritt und Übergangsanimationen, basierend auf der Download-Schaltfläche des Apple App Store.
* [DOFavoriteButton](https://github.com/okmr-d/DOFavoriteButton) - Niedliche animierte Schaltfläche.
* [ExpandableButton](https://github.com/DimaMishchenko/ExpandableButton) - Anpassbare und einfach zu verwendende erweiterbare Schaltfläche.
* [FloatingButton](https://github.com/exyte/FloatingButton) - Leicht anpassbares Menü mit schwebenden Schaltflächen in SwiftUI.
* [Floaty](https://github.com/kciter/Floaty) - Schwebende Aktionsschaltfläche für iOS.
* [IGStoryButtonKit](https://github.com/KaoruMuta/IGStoryButtonKit) - Einfach zu verwendende Schaltfläche mit auf Instagram Stories basierender Animation.
* [LGButton](https://github.com/loregr/LGButton) - Vollständig anpassbare UIControl-Unterklasse zum Erstellen schöner Schaltflächen ohne Code.
* [LTHRadioButton](https://github.com/rolandleth/LTHRadioButton) - Optionsfeld mit hübscher Animation.
* [MultiToggleButton](https://github.com/yonat/MultiToggleButton) - UIButton-Unterklasse mit Umschalten der Beschriftung durch Tippen, wie bei Kamera-Blitz- und Timer-Schaltflächen.
* [NFDownloadButton](https://github.com/LeonardoCardoso/NFDownloadButton) - Überarbeitete Download-Schaltfläche, nachgebildet anhand der Download-Schaltfläche der Netflix-App.
* [PMSuperButton](https://github.com/pmusolino/PMSuperButton) - Leistungsstarke UIButton mit besonderen Funktionen, im Storyboard anpassbar.
* [RadioGroup](https://github.com/yonat/RadioGroup) - Die fehlende Optionsfeld-Gruppe für iOS.
* [SwiftShareBubbles](https://github.com/takecian/SwiftShareBubbles) - Animierte Steuerelemente für Social-Media-Teilen unter iOS.
* [TransitionButton](https://github.com/AladinWay/TransitionButton) - UIButton-Unterklasse mit Lade- und Übergangsanimation.

#### Kalender
[zurück nach oben](#readme)

* [CalendarKit](https://github.com/richardtop/CalendarKit) - Vollständig anpassbare Tagesansicht für Kalender.
* [CalendarView](https://github.com/mmick66/CalendarView) - Kalenderkomponente mit vertikaler und horizontaler Anordnung samt Scrollen und Anzeige nativer Kalenderereignisse.
* [DateTimePicker](https://github.com/itsmeichigo/DateTimePicker) - Ansprechendere iOS-Komponente zur Auswahl von Datum und Uhrzeit.
* [ElegantCalendar](https://github.com/ThasianX/ElegantCalendar) - Der elegante Vollbildkalender, der SwiftUI bislang fehlte.
* [HorizonCalendar](https://github.com/airbnb/HorizonCalendar) - Deklarative, leistungsfähige iOS-Kalender-UI für einfache Datumsauswahl bis hin zu vollständigen Kalender-Apps.
* [JTAppleCalendar](https://github.com/patchthecode/JTAppleCalendar) - UI-Kalendersteuerung.
* [KVKCalendar](https://github.com/kvyatkovskys/KVKCalendar) - Besonders umfassend anpassbarer Kalender für Apple-Plattformen 📅
* [OBCalendar](https://github.com/oBilet/OBCalendar) - Kalender, der auf einfache Bedienung und Anpassbarkeit ausgelegt ist und mühelos ansprechende, funktionale Oberflächen erstellen lässt.
* [Workaholic](https://github.com/hemangshah/Workaholic) - GitHub-ähnliche Zeitleiste für Arbeitsbeiträge.
* [Yotei](https://github.com/claustrofob/Yotei) - Modulares, anpassbares SwiftUI-/UIKit-Kalenderpaket für iOS.

#### Karten
[zurück nach oben](#readme)

* [CardNavigation](https://github.com/james01/CardNavigation) - Navigationscontroller, der View Controller als interaktiven Kartenstapel anzeigt.
* [CardParts](https://github.com/intuit/CardParts) - Reaktives, kartenbasiertes UI-Framework auf UIKit für iOS-Entwickler.
* [VerticalCardSwiper](https://github.com/JoniVR/VerticalCardSwiper) - Mischung aus Shazams Discover-Oberfläche und Tinder auf Basis von UICollectionView.

#### Formulare
[zurück nach oben](#readme)

* [Carbon](https://github.com/ra1028/Carbon) - 🚴 Deklarative Bibliothek für komponentenbasierte Benutzeroberflächen in UITableView und UICollectionView.
* [Eureka](https://github.com/xmartlabs/Eureka) - Eleganter iOS-Formular-Builder.
* [FDBarGauge](https://github.com/fulldecent/FDBarGauge) - Simuliert die Pegelanzeige eines Audiomischpults.
* [Former](https://github.com/ra1028/Former) - Vollständig anpassbare Bibliothek zum einfachen Erstellen von Formularen auf UITableView-Basis.
* [ObjectForm](https://github.com/haojianzong/ObjectForm) - Einfache und leistungsstarke Bibliothek zum Erstellen von Formularen für Klassenmodelle.
* [SwiftyFORM](https://github.com/neoneye/SwiftyFORM) - Formulare mit Validierungsunterstützung.

#### HUD
[zurück nach oben](#readme)

* [EZLoadingActivity](https://github.com/Esqarrouth/EZLoadingActivity) - Leichtgewichtiges HUD für Ladeaktivitäten.
* [GradientLoadingBar](https://github.com/fxm90/GradientLoadingBar) - Animierter Ladebalken mit Farbverlauf.
* [KRProgressHUD](https://github.com/krimpedance/KRProgressHUD) - Schönes und anpassbares Fortschritts-HUD.
* [PKHUD](https://github.com/pkluz/PKHUD) - Neuimplementierung des Apple-HUD.

#### Beschriftungen
[zurück nach oben](#readme)

* [ActiveLabel](https://github.com/optonaut/ActiveLabel.swift) - Direkter Ersatz für UILabel mit Unterstützung für Hashtags (#), Erwähnungen (@) und URLs (http://).
* [Atributika](https://github.com/psharanda/Atributika) - Wandelt Text mit HTML-Tags, Links, Hashtags und Erwähnungen in NSAttributedString um und macht ihn mit einem UILabel-Ersatz anklickbar.
* [CountdownLabel](https://github.com/suzuki-0000/CountdownLabel) - Einfache Countdown-UILabel mit Verwandlungsanimation und nützlichen Funktionen.
* [GlitchLabel](https://github.com/kciter/GlitchLabel) - UILabel mit Glitch-Effekt für iOS.
* [IncrementableLabel](https://github.com/tbaranes/IncrementableLabel) - UILabel-Unterklasse zum Erhöhen und Verringern angezeigter Zahlen.
* [KDEDateLabel](https://github.com/delannoyk/KDEDateLabel) - UILabel-Unterklasse, die sich selbst aktualisiert und relative Zeitangaben vereinfacht.
* [LTMorphingLabel](https://github.com/lexrus/LTMorphingLabel) - Elegante Verwandlungseffekte für UILabel.
* [Nantes](https://github.com/instacart/Nantes) - Ersatz für TTTAttributedLabel.
* [TriLabelView](https://github.com/mukeshthawani/TriLabelView) - iOS-Beschriftungsansicht mit dreieckiger Ecke.

#### Menü
[zurück nach oben](#readme)

* [AKSwiftSlideMenu](https://github.com/ashishkakkad8/AKSwiftSlideMenu) - Schiebemenü (Drawer).
* [CircleMenu](https://github.com/Ramotion/circle-menu) - Einfaches, elegantes Menü mit kreisförmiger Anordnung und Material-Design-Animationen.
* [ENSwiftSideMenu](https://github.com/evnaz/ENSwiftSideMenu) - Seitlich einschiebendes Menü.
* [FanMenu](https://github.com/exyte/fan-menu) - Menü mit kreisförmiger Anordnung auf Basis von Macaw.
* [FlowingMenu](https://github.com/yannickl/FlowingMenu) - Interaktiver View-Übergang mit fließenden und federnden Effekten zur Darstellung von Menüs.
* [GuillotineMenu](https://github.com/Yalantis/GuillotineMenu) - Menü im Guillotine-Stil.
* [HHFloatingView](https://github.com/hemangshah/HHFloatingView) - Einfach einzurichtende schwebende Ansicht für deine App.
* [InteractiveSideMenu](https://github.com/handsomecode/InteractiveSideMenu) - Anpassbares interaktives Seitenmenü für iOS.
* [KWDrawerController](https://github.com/Kawoou/KWDrawerController) - Einfach zu verwendender Drawer-View-Controller.
* [MenuItemKit](https://github.com/cxa/MenuItemKit) - `UIMenuItem` mit Unterstützung für Bilder und Blöcke (Closures).
* [Pagemenu](https://github.com/PageMenu/PageMenu) - View Controller mit aktivierter Seitennavigation.
* [PagingKit](https://github.com/kazuhiro4949/PagingKit) - Bietet anpassbare Menü-UI für die Seitennavigation.
* [Panels](https://github.com/antoniocasero/Panels) - Framework zum einfachen Hinzufügen einschiebbarer Panels zu deiner Anwendung.
* [Parchment](https://github.com/rechsteiner/Parchment) - View Controller für Seitennavigation mit anpassbarem Menü auf UICollectionView-Basis.
* [PopMenu](https://github.com/CaliCastle/PopMenu) - 😎 Cooles und anpassbares Aktionsblatt im Popup-Stil für iOS.
* [SegmentIO](https://github.com/Yalantis/Segmentio) - Animiertes Menü mit Segmenten oben oder unten für iOS.
* [SideMenu](https://github.com/jonkykong/SideMenu) - Einfaches, von Facebook inspiriertes Seitenmenü für iOS, links oder rechts und ohne Programmierung.
* [SlideMenuControllerSwift](https://github.com/dekatotoro/SlideMenuControllerSwift) - iOS-Schiebemenü nach dem Vorbild der Apps Google+, iQON, Feedly und Ameba.
* [SwipeMenuViewController](https://github.com/yysskk/SwipeMenuViewController) - Wischbare Tabs, Menüs, Views und View Controller.
* [XLPagerTabStrip](https://github.com/xmartlabs/XLPagerTabStrip) - Android-PagerTabStrip für iOS.
* [YNDropDownMenu](https://github.com/younatics/YNDropDownMenu) - Ansprechendes Dropdown-Menü für iOS.

#### Seitennavigation
[zurück nach oben](#readme)

* [CHIPageControl](https://github.com/ChiliLabs/CHIPageControl) - Sammlung animierter Seitensteuerungen als Ersatz für die langweilige UIPageControl.
* [FlexiblePageControl](https://github.com/shima11/FlexiblePageControl) - Flexible UIPageControl wie bei Instagram.
* [iPages](https://github.com/blsage/iPages) - Wischbare Seitenansichten in SwiftUI schnell implementieren 📝.
* [Pageboy](https://github.com/uias/Pageboy) - Einfacher und informativer View Controller für Seitenansichten.
* [PageController](https://github.com/hirohisa/PageController) - Endloser Controller für Seitennavigation.
* [SlideController](https://github.com/touchlane/SlideController) - Schöne Alternative zu UIPageViewController auf Basis generischer Typen; Seiten mit interaktiver Titelsteuerung durchblättern und horizontale oder vertikale Ketten unbegrenzter Länge konfigurieren.

#### Zahlungen
[zurück nach oben](#readme)

* [AnimatedCardInput](https://github.com/netguru/AnimatedCardInput) - Anpassbare und einfach zu verwendende Kreditkarten-UI.
* [Caishen](https://github.com/prolificinteractive/Caishen) - Kreditkarten-UI und -Validator für iOS.
* [iCard](https://github.com/eliakorkmaz/iCard) - Bankkartengenerator mit SnapKit-DSL.
* [MFCard](https://github.com/MobileFirstInc/MFCard) - Kreditkartenzahlungen ganz einfach in iOS-Apps integrieren.
* [TPInAppReceipt](https://github.com/tikhop/TPInAppReceipt) - Leichtgewichtige reine Swift-Bibliothek zum lokalen Lesen und Validieren von Apple-In-App-Kaufbelegen.

#### Berechtigungen
[zurück nach oben](#readme)

* [AREK](https://github.com/ennioma/arek) - Sauberer und einfach zu verwendender Wrapper für beliebige iOS-Berechtigungen.
* [Permission](https://github.com/delba/Permission) - Einheitliche API zum Anfordern von Berechtigungen unter iOS.
* [SPPermission](https://github.com/sparrowcode/PermissionsKit) - Einfache Berechtigungsanfragen mit nativer UI und interaktiver Animation.

#### Bildlaufleisten
[zurück nach oben](#readme)

* [DMScrollBar](https://github.com/batanus/DMScrollBar) - Erstklassige, anpassbare Bildlaufleiste für jede Scroll View mit Verzögerung, Rückfederung und Gummibandeffekt und vielem mehr.

#### StackView
[zurück nach oben](#readme)

* [StackViewController](https://github.com/seedco/StackViewController) - Vereinfacht die Verwendung von UIStackView.
* [TZStackView](https://github.com/tomvanzummeren/TZStackView) - Für iOS 7 und 8 neu implementierte UIStackView-Layoutkomponente aus iOS 9.

#### Schalter
[zurück nach oben](#readme)

* [MJMaterialSwitch](https://github.com/JaleelNazir/MJMaterialSwitch) - Anpassbarer Schalter für iOS, inspiriert von Googles Material Design.
* [paper-switch](https://github.com/Ramotion/paper-switch) - RAMPaperSwitch ist ein Material-Design-Modul, das beim Aktivieren des Schalters die übergeordnete View übermalt.
* [Switch](https://github.com/T-Pham/Switch) - Schalter mit vollständiger Unterstützung für Interface Builder.

#### Tabs
[zurück nach oben](#readme)

* [Adaptive Tab Bar](https://github.com/Ramotion/adaptive-tab-bar) - Adaptive Tab-Leiste.
* [Animated Tab Bar](https://github.com/Ramotion/animated-tab-bar) - RAMAnimatedTabBarController ergänzt Animationen für Tab-Leistenelemente.
* [CardTabBar](https://github.com/yusadogru/CardTabBar) - Animationen für Tab-Leistenelemente unter iOS.
* [CircleBar](https://github.com/softhausHQ/CircleBar) - Unterhaltsamer und einfach zu verwendender Tab-Bar-Navigationscontroller für iOS.
* [ColorMatchTabs](https://github.com/Yalantis/ColorMatchTabs) - Interessante Darstellung von Tabs.
* [DTPagerController](https://github.com/tungvoduc/DTPagerController) - Container-View-Controller zur Anzeige mehrerer View Controller in einer horizontalen Scroll View.
* [ESTabBarController](https://github.com/eggswift/ESTabBarController) - Stark anpassbare TabBarController-Komponente, abgeleitet von UITabBarController.
* [HHTabBarView](https://github.com/hemangshah/HHTabBarView) - Leichtgewichtige, angepasste Tab-Leiste.
* [PolioPager](https://github.com/YuigaWada/PolioPager) - Flexibler TabBarController mit Such-Tab wie bei SNKRS.
* [SwiftUIMaterialTabs](https://github.com/SwiftKickMobile/SwiftUIMaterialTabs) - Tabs im Material-3-Stil und fixierte Header in einer SwiftUI-Bibliothek.
* [TabBar](https://github.com/onl1ner/TabBar) - Stark anpassbare Tab-Leiste für SwiftUI-Anwendungen.
* [Tabman](https://github.com/uias/Tabman) - Leistungsstarker View Controller für Seitennavigation mit Indikatorleiste.
* [TabPageViewController](https://github.com/EndouMari/TabPageViewController) - View Controller für Seitennavigation und scrollbare Tab-Ansicht.

#### Vorlagen
[zurück nach oben](#readme)

* [Stencil](https://github.com/stencilproject/Stencil) - Einfache und leistungsstarke Vorlagensprache.
* [SwiftCssParser](https://github.com/100mango/SwiftCssParser) - Erweiterbarer CSS-Parser.
* [Temple](https://github.com/GoodRequest/Temple) - 🗂️ Besonders fortschrittliche Projekt- und Dateivorlagen.

#### Textfelder
[zurück nach oben](#readme)

* [CBPinEntryView](https://github.com/Fawxy/CBPinEntryView) - Einfach zu verwendende und stark anpassbare PIN-Eingabe.
* [CHIOTPField](https://github.com/ChiliLabs/CHIOTPField) - Textfelder für Einmalpasswörter, SMS-Codes, PIN-Codes usw.
* [DTTextField](https://github.com/iDhaval/DTTextField) - Benutzerdefiniertes Textfeld mit schwebendem Platzhalter und Fehlerbeschriftung.
* [FloatingLabelTextFieldSwiftUI](https://github.com/kishanraja/FloatingLabelTextFieldSwiftUI) - Kleines, leichtgewichtiges SwiftUI-Framework, vollständig ohne UIViewRepresentable, zum Erstellen schöner Textfelder mit schwebender Beschriftung.
* [HTYTextField](https://github.com/hanton/HTYTextField) - UITextField mit federndem Platzhalter.
* [iTextField ⌨️](https://github.com/blsage/iTextField) - Vollständig umschlossenes `UITextField`, das ausschließlich in SwiftUI funktioniert 🦅.
* [PasswordTextField](https://github.com/PiXeL16/PasswordTextField) - Benutzerdefiniertes TextField mit umschaltbarem Symbol zum Anzeigen oder Verbergen des Passworts und Durchsetzung sicherer Passwortrichtlinien.
* [SkyFloatingLabelTextField](https://github.com/Skyscanner/SkyFloatingLabelTextField) - Schönes und flexibles Textfeld zur Umsetzung des „Float Label“-Musters.
* [StyledTextKit](https://github.com/GitHawkApp/StyledTextKit) - Deklarative Erstellung und schnelles Rendern formatierter Zeichenfolgen.
* [TextFieldCounter](https://github.com/serralvo/TextFieldCounter) - Zeichenanzähler mit angenehmer UX für UITextField.
* [TextFieldEffects](https://github.com/raulriera/TextFieldEffects) - Verschiedene sofort verwendbare Effekte für UITextFields.
* [UITextField-Navigation](https://github.com/T-Pham/UITextField-Navigation) - Ergänzt die Tastatur für UITextFields um „Weiter“-, „Zurück“- und „Fertig“-Schaltflächen; stark anpassbar.
* [VKPinCodeView](https://github.com/Sunspension/VKPinCodeView) - Einfache und elegante UI-Komponente zur PIN-Eingabe.

#### Übergänge
[zurück nach oben](#readme)

* [BubbleTransition](https://github.com/andreamazz/BubbleTransition) - Blasenübergänge einfach umgesetzt.
* [Cards XI](https://github.com/PaoloCuscela/Cards) - Großartige Kartenansichten des iOS-11-App-Store.
* [EasyTransitions](https://github.com/marcosgriselli/EasyTransitions) - Einfache Erstellung benutzerdefinierter interaktiver UIViewController-Übergänge.
* [Hero](https://github.com/HeroTransitions/Hero) - Elegante Übergangsbibliothek für iOS.
* [ImageTransition](https://github.com/shtnkgm/ImageTransition) - Bibliothek für flüssige Bildanimationen während Übergängen.
* [Jelly](https://github.com/SebastianBoldt/Jelly) - Benutzerdefinierte View-Controller-Übergänge mit wenigen Codezeilen.
* [LiquidSwipe](https://github.com/exyte/LiquidSwipe) - Flüssige Navigationsanimation.
* [MijickNavigattie](https://github.com/Mijick/NavigationView) - Einfache Navigation mit SwiftUI.
* [MusicPlayerTransition](https://github.com/xxxAIRINxxx/MusicPlayerTransition) - Benutzerdefinierter interaktiver Übergang wie in der Apple-Music-iOS-App.
* [NavigationTransitions](https://github.com/davdroman/swiftui-navigation-transitions) - Reine SwiftUI-Navigationsübergänge.
* [PanSlip](https://github.com/k-lpmg/PanSlip) - View in UIViewController und UIView mit einer Pan-Geste schließen.
* [PinterestSwift](https://github.com/demonnico/PinterestSwift) - Übergang im Pinterest-Stil.
* [RevealingSplashView](https://github.com/PiXeL16/RevealingSplashView) - Splash-Ansicht, die animiert ihren Inhalt enthüllt, inspiriert vom Twitter-Splashscreen.
* [SamuraiTransition](https://github.com/hachinobu/SamuraiTransition) - Swift-Bibliothek mit View-Controller-Übergängen und verschiedenen raffinierten Zerschneide-Animationen.
* [SPLarkController](https://github.com/ivanvorobei/SPLarkController) - Benutzerdefinierter Übergang zwischen zwei Controllern mit Verschiebung nach oben.
* [SPStorkController](https://github.com/ivanvorobei/SPStorkController) - „Aktuelle Wiedergabe“-Controller von Apple Music mit anpassbarer Höhe.
* [StarWars.iOS](https://github.com/Yalantis/StarWars.iOS) - Übergangsanimation, die einen View Controller in winzige Teile zerfallen lässt.
* [Transition](https://github.com/Touchwonders/Transition) - Einfache interaktive, unterbrechbare und benutzerdefinierte View-Controller-Übergänge.

#### 3D
[zurück nach oben](#readme)

* [Insert3D](https://github.com/Viktoo/Insert3D) - Der schnellste 🚀 Weg zum Einbetten eines 3D-Modells.

#### UICollectionView
[zurück nach oben](#readme)

* [ASCollectionView](https://github.com/abdullahselek/ASCollectionView) - Leichtgewichtige benutzerdefinierte Collection View, inspiriert von Airbnb.
* [AZCollectionViewController](https://github.com/AfrozZaheer/AZCollectionViewController) - Seitennavigation mit Platzhalter-Views in CollectionView einfach integrieren und in wenigen Minuten „Entdecken“ wie bei Instagram erstellen.
* [Blueprints](https://github.com/zenangst/Blueprints) - Framework zur einfacheren Arbeit mit Collection-View-Flow-Layouts.
* [BouncyLayout](https://github.com/roberthein/BouncyLayout) - Collection-View-Layout mit federnden Zellen.
* [CardsLayout](https://github.com/filletofish/CardsLayout) - Ansprechendes Collection-View-Layout mit Kartendesign.
* [CenteredCollectionView](https://github.com/BenEmdon/CenteredCollectionView) - Leichtgewichtiges UICollectionViewLayout, das durch Zellen blättert und sie zentriert.
* [CheckmarkCollectionViewCell](https://github.com/yonat/CheckmarkCollectionViewCell) - UICollectionViewCell mit Kontrollkästchen bei Auswahl und leerem Kreis ohne Auswahl, wie im Auswahlmodus von Fotos.
* [CollectionViewShelfLayout](https://github.com/pitiphong-p/CollectionViewShelfLayout) - UICollectionViewLayout-Unterklasse, die Elemente wie Zeilen auf der „Empfohlen“-Registerkarte des App Store darstellt – ohne verschachtelte UITableView-/UICollectionView-Tricks.
* [CollectionViewSlantedLayout](https://github.com/yacir/CollectionViewSlantedLayout) - UICollectionViewLayout zur schrägen Darstellung von Inhalten.
* [Drag and Drop UICollectionView](https://github.com/mmick66/KDDragAndDropCollectionView) - Daten zwischen mehreren UICollectionViews per Drag-and-drop verschieben.
* [FSPagerView](https://github.com/WenchaoD/FSPagerView) - Elegante Bibliothek für Bildschirmwechsel; nützlich für Banner, Produktpräsentationen, Willkommens-/Einführungsseiten und View-Controller-Slider.
* [Gliding Collection](https://github.com/Ramotion/gliding-collection) - Flüssige, anpassbare Lösung für einen UICollectionView-Controller.
* [GoodProvider](https://github.com/GoodRequest/GRProvider) - 🚀 Provider für UITableView und UICollectionView zur Vereinfachung grundlegender Szenarien der Datenanzeige.
* [GravitySlider](https://github.com/ApplikeySolutions/GravitySlider) - Schöne Alternative zum standardmäßigen UICollectionView-Flow-Layout.
* [ShelfView-iOS](https://github.com/tdscientist/ShelfView-iOS) - Benutzerdefinierte iOS-Ansicht zur Darstellung von Büchern im Regal.
* [SimpleSource](https://github.com/Squarespace/simple-source ) - Einfache und typsichere Tabellen- und Collection-Views für iOS.
* [SwiftSpreadsheet](https://github.com/stuffrabbit/SwiftSpreadsheet) - Vollständig anpassbares Spreadsheet-Collection-View-Layout.
* [TagCellLayout](https://github.com/riteshhgupta/TagCellLayout) - UICollectionView-Layout für Tags mit linksbündiger, zentrierter und rechtsbündiger Ausrichtung.
* [UICollectionViewSplitLayout](https://github.com/yahoojapan/UICollectionViewSplitLayout) - Macht Collection Views responsiver.
* [VegaScroll](https://github.com/AppliKeySolutions/VegaScroll) - Leichtgewichtiges animiertes Flow-Layout für UICollectionView.

#### UITableView
[zurück nach oben](#readme)

* [AZTableViewController](https://github.com/AfrozZaheer/AZTableViewController) - Elegante und einfache Seitennavigation mit Platzhalter-Views.
* [CollapsibleTableSectionViewController](https://github.com/jeantimex/CollapsibleTableSectionViewController) - Bibliothek für einklappbare Bereiche in einer Table View.
* [DGElasticPullToRefresh](https://github.com/gontovnik/DGElasticPullToRefresh) - Elastisches Pull-to-Refresh.
* [DiffableDataSources](https://github.com/ra1028/DiffableDataSources) - 💾 Bibliothek zur Rückportierung von UITableView/UICollectionViewDiffableDataSource.
* [DTTableViewManager](https://github.com/DenTelezhkin/DTTableViewManager) - Protokollorientierte UITableView-Verwaltung mit Generics und assoziierten Typen.
* [ExpandableCell](https://github.com/younatics/ExpandableCell) - Vollständig überarbeitete, prägnantere und fehlerfreie YNExpandableCell. Einfachste Verwendung anpassbarer, erweiterbarer und einklappbarer UITableViewCell; vermeidet die schwierige Arbeit mit insertRows und deleteRows – implementiere einfach ExpandableDelegate.
* [FDTextFieldTableViewCell](https://github.com/fulldecent/FDTextFieldTableViewCell) - Fügt ein UITextField korrekt in eine Zelle ein.
* [folding-cell](https://github.com/Ramotion/folding-cell) - Übergang mit sich faltender Zelle.
* [GridView](https://github.com/KyoheiG3/GridView) - Anpassbar als Stundenplan, Tabellenblatt, Seitennavigation und mehr.
* [HGPlaceholders](https://github.com/HamzaGhazouani/HGPlaceholders) - Schöne Platzhalter und leere Zustände für UITableView/UICollectionView anzeigen.
* [OKTableViewLiaison](https://github.com/okcupid/OKTableViewLiaison) - Framework zur besseren Verwaltung von UITableViews.
* [ParallaxHeader](https://github.com/romansorochak/ParallaxHeader) - Einfache Ergänzung eines Parallax-Headers zu UIScrollView/UITableView.
* [Persei](https://github.com/Yalantis/Persei) - Animiertes oberes Menü für UITableView, UICollectionView und UIScrollView.
* [PullToRefreshSwift](https://github.com/dekatotoro/PullToRefreshSwift) - Pull-to-Refresh-Bibliothek.
* [QuickTableViewController](https://github.com/bcylin/QuickTableViewController) - Einfaches Erstellen einer UITableView für Einstellungen.
* [ReverseExtension](https://github.com/marty-suzuki/ReverseExtension) - UITableView-Erweiterung zum Einfügen von Zellen am unteren Tabellenrand.
* [SelectionList](https://github.com/yonat/SelectionList) - Checkliste mit Einzel- oder Mehrfachauswahl auf Basis von UITableView.
* [Shoyu](https://github.com/xai3/Shoyu) - Einfachere Darstellung der Struktur einer UITableView.
* [SwiftyComments](https://github.com/tsucres/SwiftyComments) - Verschachtelte Hierarchie erweiterbarer und einklappbarer Zellen zum Erstellen eleganter Diskussionsthreads.
* [SwipeCellKit](https://github.com/SwipeCellKit/SwipeCellKit) - Wischbare UITableViewCell nach dem Vorbild der standardmäßigen Mail-App.
* [WLEmptyState](https://github.com/WizelineLabs/WLEmptyState) - Komponente zur Anpassung der Ansicht bei leerem UITableView-Datensatz.
* [YNExpandableCell](https://github.com/younatics/YNExpandableCell) - Großartige erweiterbare und einklappbare Table-View-Zelle für iOS.

#### Einführung
[zurück nach oben](#readme)

* [AwesomeSpotlightView](https://github.com/aleksandrshoshiashvili/AwesomeSpotlightView) - Tutorial oder geführte Einführung erstellen.
* [BWWalkthrough](https://github.com/ariok/BWWalkthrough) - Klasse zum Erstellen benutzerdefinierter Einführungen für deine iOS-App.
* [ConcentricOnboarding](https://github.com/exyte/ConcentricOnboarding) - SwiftUI-Bibliothek für geführte Einführung oder Onboarding mit Tippaktionen.
* [Gecco](https://github.com/xai3/Gecco) - Spotlight-Ansicht für iOS.
* [Instructions](https://github.com/ephread/Instructions) - Bibliothek für App-Einführungen und geführte Touren.
* [OnboardKit](https://github.com/NikolaKirev/OnboardKit) - Anpassbares Nutzer-Onboarding für deine iOS-App.
* [PaperOnboarding](https://github.com/Ramotion/paper-onboarding) - SwiftUI-Komponente für Seitennavigation im Material-Design-Stil.
* [SuggestionsKit](https://github.com/AlphanumericCharactersOrSingleHyphenz/SuggestionsKit) - Bibliothek, die Nutzern die App-Funktionen näherbringt.
* [SwiftyOnboard](https://github.com/juanpablofernandez/SwiftyOnboard) - iOS-Framework zum Erstellen ansprechender Onboarding-Erlebnisse.
* [SwiftyWalkthrough](https://github.com/ruipfcosta/SwiftyWalkthrough) - Einfachste Erstellung einer gelungenen geführten Einführung in deinen Apps.

### Dienstprogramme
*Interessante Dienstprogramme für deine Projekte.* [zurück nach oben](#readme)

* [AlexaSkillsKit](https://github.com/choefele/AlexaSkillsKit) - Benutzerdefinierte Alexa Skills entwickeln.
* [AmoreKit](https://github.com/AmoreComputer/AmoreKit) - Lizenzschlüssel für macOS-Apps verkaufen und validieren, die außerhalb des App Store vertrieben werden.
* [ApplyStyleKit](https://github.com/shindyu/ApplyStyleKit) - UIKit-Stile elegant über Method Chaining anwenden.
* [Basis](https://github.com/typelift/Basis) - Rein deklarative Programmierung.
* [Bow](https://github.com/bow-swift/bow) - Ergänzungsbibliothek für typsichere funktionale Programmierung.
* [CallbackURLKit](https://github.com/phimage/CallbackURLKit) - Implementierung von x-callback-url für die Kommunikation zwischen Apps.
* [Closures](https://github.com/vhesener/Closures) - Swift-typische Closures für UIKit und Foundation.
* [Codextended](https://github.com/JohnSundell/Codextended) - Erweiterungen mit leistungsstarker Typinferenz für die Codable-API.
* [Curry](https://github.com/thoughtbot/Curry) - Currying von Funktionen.
* [Delegated](https://github.com/dreymonde/Delegated) - Closure-basierte Delegation ohne Speicherlecks.
* [DifferenceKit](https://github.com/ra1028/DifferenceKit) - 💻 Schnelles und flexibles Framework für Differenzalgorithmen mit O(n)-Laufzeit.
* [Differific](https://github.com/zenangst/Differific) - Schnelles und praktisches Framework für Differenzberechnungen.
* [Dollar](https://github.com/ankurp/Dollar) - Ähnlich wie Lo-Dash oder Underscore für JavaScript.
* [DuctTape](https://github.com/marty-suzuki/DuctTape) - 📦 Syntaktischer Zucker auf Basis von KeyPath und dynamicMemberLookup für Swift.
* [EtherWalletKit](https://github.com/SteadyAction/EtherWalletKit) - Ethereum-Wallet-Toolkit für iOS: Ethereum-Wallets ohne Server oder Blockchain-Kenntnisse implementieren.
* [ExceptionCatcher](https://github.com/sindresorhus/ExceptionCatcher) - Objective-C-Ausnahmen abfangen.
* [EZSwiftExtensions](https://github.com/Esqarrouth/EZSwiftExtensions) - So sollten Standardtypen und -klassen funktionieren.
* [FlagAndCountryCode](https://github.com/exyte/FlagAndCountryCode) - Stellt Telefonvorwahlen und Flaggen aller Länder für UIKit und SwiftUI bereit.
* [FluentQuery](https://github.com/MihaelIsaev/FluentQuery) :penguin: - Leistungsstarker und einfach zu verwendender Query-Builder.
* [GoodExtensions-iOS](https://github.com/GoodRequest/GoodExtensions-iOS) - 📑 Sammlung nützlicher und häufig verwendeter Erweiterungen.
* [GoodUIKit](https://github.com/GoodRequest/GoodUIKit) - 📑 Erweiterungsbibliothek mit wiederverwendbaren UI-Codebeispielen für schnellere und effizientere Entwicklung.
* [Highlighter](https://github.com/younatics/Highlighter) - Hebe beliebige Elemente hervor. Findet auf magische Weise UI-Objekte wie UILabel, UITextView, UITextField und UIButton in UITableViewCell oder anderen Klassen.
* [LifetimeTracker](https://github.com/krzysztofzablocki/LifetimeTracker) - Erkennt Retain-Zyklen und Speicherprobleme bereits während der Entwicklung deiner Anwendung.
* [Lumos](https://github.com/sushinoya/Lumos) - Einfach zu verwendende API für Objective-C-Runtime-Funktionen.
* [ObjectiveKit](https://github.com/marmelroy/ObjectiveKit) - API für Objective-C-Runtime-Funktionen.
* [OpenSourceController](https://github.com/floriangbh/OpenSourceController) - Einfachste Anzeige der in deiner Anwendung verwendeten Bibliothekslizenzen.
* [Percentage](https://github.com/sindresorhus/Percentage) - Prozentangaben lesbarer und typsicherer gestalten.
* [Periphery](https://github.com/peripheryapp/periphery) - Werkzeug zum Erkennen ungenutzten Codes in Swift-Projekten.
* [Playbook](https://github.com/playbook-ui/playbook-ios) - 📘 Bibliothek zur isolierten Entwicklung von UI-Komponenten und automatischen Erstellung von Snapshots.
* [PrivacyFlash Pro](https://github.com/privacy-tech-lab/privacyflash-pro) - Datenschutzerklärung für deine Swift-iOS-App direkt aus dem Code generieren.
* [protobuf-swift](https://github.com/alexeyxo/protobuf-swift) - Protocol Buffers.
* [Prototope](http://khan.github.io/Prototope/) - Bibliothek leichtgewichtiger Schnittstellen für Prototypen, mit JavaScript verbunden.
* [R.swift](https://github.com/mac-cain13/R.swift) - Werkzeug für typsichere, automatisch vervollständigte Ressourcen wie Bilder, Zellen und Segues.
* [RandomKit](https://github.com/nvzqz/RandomKit/) :penguin: - Generierung zufälliger Daten.
* [ReadabilityKit](https://github.com/exyte/ReadabilityKit) - Extrahiert Vorschauen aus Nachrichten, Artikeln und Volltexten.
* [ReerKit](https://github.com/reers/ReerKit) - Leistungsstarke Swift-Grundlagenbibliothek mit Erweiterungen und Dienstprogrammen für iOS-, macOS- und Linux-Entwicklung.
* [ResourceKit](https://github.com/bannzai/ResourceKit) - Ermöglicht Autovervollständigung für Ressourcen.
* [Result](https://github.com/antitypical/Result) - Typ zur Modellierung von Erfolg und Fehler beliebiger Vorgänge.
* [Rugby](https://github.com/swiftyfinch/Rugby) - 🏈 CocoaPods zwischenspeichern, um Xcode-Neukompilierung und Indizierung zu beschleunigen.
* [Runes](https://github.com/thoughtbot/Runes) - Funktionale Operatoren: flatMap, map, apply.
* [Solar](https://github.com/ceeK/Solar) - Berechnet Sonnenaufgang und Sonnenuntergang für einen Standort.
* [SpriteKit+Spring](https://github.com/ataugeron/SpriteKit-Spring) - SpriteKit-API mit UIView-Federanimationen über SKAction.
* [Sugar](https://github.com/hyperoslo/Sugar) - Süße Ergänzungen für Cocoa.
* [swift-build](https://github.com/brightdigit/swift-build) - GitHub Action zum Erstellen und Testen von Swift-Paketen auf allen Plattformen.
* [swift-protobuf](https://github.com/apple/swift-protobuf) :penguin: - Plugin und Laufzeitbibliothek zur Verwendung von Googles Protocol Buffers.
* [SwiftAutoGUI](https://github.com/NakaokaRei/SwiftAutoGUI) - Steuert Maus und Tastatur programmgesteuert; Bibliothek zur Steuerung von macOS mit Swift.
* [SwiftBoost](https://github.com/sparrowcode/SwiftBoost) - Sammlung von Swift-Erweiterungen zur Beschleunigung der Entwicklung.
* [Swiftbot](https://github.com/noppefoxwolf/Swiftbot) - Swift-Code in Slack ausführen.
* [SwifterSwift](https://github.com/SwifterSwift/SwifterSwift) - Praktische Sammlung von über 500 nativen Erweiterungen zur Steigerung deiner Produktivität.
* [SwiftGen-Storyboard](https://github.com/SwiftGen/SwiftGen#uistoryboard) - Werkzeug zur automatischen Generierung von `enums` für Konstanten aller Storyboards, Szenen und Segues samt passenden Komfortzugriffen.
* [SwiftLinkPreview](https://github.com/LeonardoCardoso/SwiftLinkPreview) - Erstellt eine Vorschau aus einer URL und ruft Informationen wie Titel, relevante Texte und Bilder ab.
* [SwiftPlantUML](https://github.com/MarcoEidinger/SwiftPlantUML) - Kommandozeilenwerkzeug und Swift-Paket zur Generierung von UML-Klassendiagrammen aus Swift-Quellcode; auch als Xcode-Quelltexteditor-Erweiterung verfügbar.
* [SwiftRandom](https://github.com/thellimist/SwiftRandom) - Kleiner Generator für Zufallsdaten.
* [SwiftRater](https://github.com/takecian/SwiftRater) - Dienstprogramm, das Nutzer deiner iPhone-App an eine Bewertung erinnert.
* [SwiftTweaks](https://github.com/bryanjclark/SwiftTweaks) - Passe deine iOS-App ohne Neukompilierung an.
* [Swiftx](https://github.com/typelift/Swiftx) - Funktionale Datentypen und Funktionen für beliebige Projekte.
* [SwiftyUtils](https://github.com/tbaranes/SwiftyUtils) - Wiederverwendbarer Code, den wir in jedem Projekt benötigen.
* [Swiftz](https://github.com/typelift/Swiftz) - Funktionale Programmierung.
* [SyntaxKit](https://github.com/brightdigit/SyntaxKit) - Swift-Code programmgesteuert mit deklarativer Syntax generieren.
* [Then](https://github.com/devxoul/Then) - Besonders angenehmer syntaktischer Zucker für Initialisierer.
* [TSAO](https://github.com/lilyball/swift-tsao) - Typsichere assoziierte Objekte.
* [URLQueryItemEncoder](https://github.com/pitiphong-p/URLQueryItemEncoder) - Encoder, der beliebige Encodable-Werte in ein Array von URLQueryItem kodiert.
* [UTIKit](https://github.com/cockscomb/UTIKit) - Wrapper für UTI (Uniform Type Identifier).
* [Vaccine](https://github.com/zenangst/Vaccine) - Macht deine Apps immun gegen Neukompilierungs-Krankheit.
* [WeakableSelf](https://github.com/vincent-pradeilles/weakable-self) - Mikroframework, das `[weak self]` und Guard-Anweisungen in Closures kapselt.
* [WhatsNew](https://github.com/BalestraPatrick/WhatsNew) - Neue Funktionen nach einer App-Aktualisierung wie in Pages, Numbers und Keynote präsentieren.
* [WhatsNewKit](https://github.com/SvenTiigi/WhatsNewKit) - Die großartigen neuen Funktionen deiner App vorstellen.
* [XestiMonitors](https://github.com/eBardX/XestiMonitors) - Erweiterbares Überwachungs-Framework.
* [ZamzamKit](https://github.com/basememara/ZamzamKit) - Sammlung kleiner Dienstprogramme und Erweiterungen für Standard Library, Foundation und UIKit.

### Validierung
*Sammlung von Validierungsbibliotheken.* [zurück nach oben](#readme)

* [ATGValidator](https://github.com/altayer-digital/ATGValidator) - Regelbasiertes Validierungsframework mit Unterstützung für Formulare und Kreditkarten unter iOS.
* [FormValidatorSwift](https://github.com/ustwo/formvalidator-swift) - Validiert Eingaben in Textfeldern und Text-Views auf praktische Weise.
* [Input Mask](https://github.com/RedMadRobot/input-mask-ios) - Musterbasierter Formatierer, Parser und Validator für Nutzereingaben unter iOS.
* [RxValidator](https://github.com/vbmania/RxValidator) - Einfacher, erweiterbarer und flexibler Validator.
* [SwiftValidator](https://github.com/SwiftValidatorCommunity/SwiftValidator) - Regelbasierte Validierungsbibliothek.
* [SwiftValidators](https://github.com/gkaimakas/SwiftValidators) - Zeichenfolgenvalidierung für iOS, inspiriert von validator.js.
* [ValidatedPropertyKit](https://github.com/SvenTiigi/ValidatedPropertyKit) - Eigenschaften mit Property Wrappers ganz einfach validieren 👮.

#### Telefonnummern
*Bibliotheken zur Verwaltung von Telefonnummern.* [zurück nach oben](#readme)

* [NKVPhonePicker](https://github.com/NikKovIos/NKVPhonePicker) - UITextField-Unterklasse zur vereinfachten Auswahl von Landesvorwahlen.
* [PhoneNumberKit](https://github.com/marmelroy/PhoneNumberKit) - Framework zum Parsen, Formatieren und Validieren internationaler Telefonnummern, inspiriert von Googles libphonenumber.

### Versionsverwaltung
[zurück nach oben](#readme)

* [AppVersionMonitor](https://github.com/eure/AppVersionMonitor) - iOS-App-Versionen mühelos überwachen.
* [Siren](https://github.com/ArtSabintsev/Siren) - Nutzer über neue App-Versionen informieren und zur Aktualisierung auffordern.
* [Version](https://github.com/mrackwitz/Version) - Stellt semantische Versionen dar und vergleicht sie.
* [Version Tracker Swift](https://github.com/tbaranes/VersionTrackerSwift) - Versionsüberwachung für deine iOS-, OS-X- und tvOS-App.

### Video
[zurück nach oben](#readme)

* [BMPlayer](https://github.com/BrikerMan/BMPlayer) - Videoplayer für iOS auf Basis von AVPlayer mit horizontaler und vertikaler Ausrichtung; Lautstärke, Helligkeit und Suchlauf per Wischgeste anpassen.
* [Cabbage](https://github.com/VideoFlint/Cabbage) - Framework zur Videokomposition auf Basis von AVFoundation.
* [Kitsunebi](https://github.com/noppefoxwolf/Kitsunebi) - Overlay-Player für transparente Videonanimationen mit OpenGLES.
* [MMPlayerView](https://github.com/MillmanY/MMPlayerView) - Benutzerdefinierte AVPlayerLayer-View mit Player-Übergängen wie bei YouTube und Facebook.
* [MobilePlayer](https://github.com/sahin/mobileplayer-ios) - Leistungsstarker und vollständig anpassbarer Mediaplayer für iOS.
* [NextLevelSessionExporter](https://github.com/NextLevel/NextLevelSessionExporter) - Medien exportieren und transkodieren.
* [Player](https://github.com/piemonte/Player) - iOS-Videoplayer als einfache Drop-in-Komponente zur Wiedergabe und zum Streaming von Medien.
* [PlayerView](https://github.com/davidlondono/PlayerView) - Einfach zu verwendender Videoplayer auf UIView-Basis mit Wiedergabegeschwindigkeit, Screenshots und Callbacks/Delegates für den Playerstatus.
* [PryntTrimmerView](https://github.com/HHK1/PryntTrimmerView) - Videos kürzen und zuschneiden.
* [SwiftFFmpeg](https://github.com/sunlubo/SwiftFFmpeg) - Wrapper für die FFmpeg-C-API.
* [SwiftVideoBackground](https://github.com/dingwilson/SwiftVideoBackground) - Einfach zu verwendende UIView-Unterklasse zur Implementierung eines Videohintergrunds.
* [Swifty360Player](https://github.com/abdullahselek/Swifty360Player) - iOS-Player für 360-Grad-Videos, gestreamt über AVPlayer.
* [YiVideoEditor](https://github.com/coderyi/YiVideoEditor) - Bibliothek zum Drehen und Zuschneiden von Videos, Hinzufügen von Ebenen (Wasserzeichen) und Einfügen von Audio (Musik).

## Serverless

* [Azure Functions for Swift](https://github.com/SalehAlbuga/azure-functions-swift) :penguin: - Swift-Worker für Azure Functions.


### Mitwirken

Bitte wirf zunächst einen kurzen Blick auf die [Richtlinien für Beiträge](.github/CONTRIBUTING.md). Wenn dir ein Paket oder Projekt auffällt, das nicht mehr gepflegt wird oder nicht gut in die Liste passt, reiche bitte einen Pull Request ein, um diese Datei zu verbessern. Vielen Dank an alle [Mitwirkenden](https://github.com/matteocrippa/awesome-swift/graphs/contributors) – ihr seid großartig!!
