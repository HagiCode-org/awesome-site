<div align="center">
    <img src="https://github.com/vsouza/awesome-ios/blob/master/header.png?raw=true" alt="Awesome">
    <br>
    <p align="center">
        <img alt="awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" />
        <a href="https://ko-fi.com/M4M3WPRD"><img width="110" alt="Offrez-moi un café" src="buy_me_a_coffee.png" /></a>
    </p>
</div>




## Contribution et collaboration

Veuillez consulter [CONTRIBUTING](https://github.com/vsouza/awesome-ios/blob/master/.github/CONTRIBUTING.md) et [CODE-OF-CONDUCT](https://github.com/vsouza/awesome-ios/blob/master/CODE_OF_CONDUCT.md) pour plus de détails.

## Sommaire

- [Analytique](#analytics)
- [Routage d'applications](#app-routing)
- [Apple TV](#apple-tv)
- [App Store](#app-store)
- [Patrons d'architecture](#architecture-patterns)
- [ARKit](#arkit)
- [Authentification](#authentication)
- [Blockchain](#blockchain)
- [Livres](#books)
- [Cache](#cache)
- [Graphiques](#charts)
- [Injection de code](#code-injection)
- [Qualité du code](#code-quality)
    - [Linter](#linter)
- [Couleur](#color)
- [Ligne de commande](#command-line)
- [Concurrence](#concurrency)
- [Core Data](#core-data)
- [Cours](#courses)
    - [Premiers pas](#getting-started)
- [Base de données](#database)
- [Structures de données / Algorithmes](#data-structures--algorithms)
- [Date et heure](#date--time)
- [Débogage](#debugging)
- [Injection de dépendances](#dependency-injection)
- [Gestionnaire de dépendances / de paquets](#dependency--package-manager)
- [Déploiement / Distribution](#deployment--distribution)
- [EventBus](#eventbus)
- [Fichiers](#files)
- [Programmation fonctionnelle](#functional-programming)
- [Jeux](#games)
- [GCD](#gcd)
- [Gestes](#gesture)
- [Graphismes](#graphics)
- [Matériel](#hardware)
    - [Bluetooth](#bluetooth)
    - [Appareil photo](#camera)
    - [Force Touch](#force-touch)
    - [iBeacon](#ibeacon)
    - [Géolocalisation](#location)
    - [Autre matériel](#other-hardware)
- [Mise en page](#layout)
- [Localisation](#localization)
- [Journalisation](#logging)
- [Apprentissage automatique](#machine-learning)
- [Cartographie](#maps)
- [Mathématiques](#math)
- [Médias](#media)
    - [Audio](#audio)
    - [GIF](#gif)
    - [Image](#image)
    - [Traitement des médias](#media-processing)
    - [PDF](#pdf)
    - [Streaming](#streaming)
    - [Vidéo](#video)
- [Messagerie](#messaging)
- [Réseau](#networking)
- [Lettres d'information](#newsletters)
- [Notifications](#notifications)
    - [Notifications push](#push-notifications)
    - [Fournisseurs de notifications push](#push-notification-providers)
- [Runtime Objective-C](#objective-c-runtime)
- [Optimisation](#optimization)
- [Autres listes Awesome](#other-awesome-lists)
- [Analyse syntaxique](#parsing)
    - [CSV](#csv)
    - [JSON](#json)
    - [XML et HTML](#xml--html)
    - [Autres analyseurs](#other-parsing)
- [Passbook](#passbook)
- [Paiements](#payments)
- [Autorisations](#permissions)
- [Podcasts](#podcasts)
- [Configuration de projet](#project-setup)
- [Prototypage](#prototyping)
- [Développement rapide](#rapid-development)
- [Programmation réactive](#reactive-programming)
    - [Inspirés de React](#react-like)
- [Référence](#reference)
- [Réflexion](#reflection)
- [Expressions régulières](#regex)
- [SDK](#sdk)
    - [Officiels](#official)
    - [Non officiels](#unofficial)
- [Sécurité](#security)
    - [Chiffrement](#encryption)
    - [Trousseau](#keychain)
- [Serveur](#server)
- [Guides de style](#style-guides)
- [Tests](#testing)
    - [TDD / BDD](#tdd--bdd)
    - [Tests A/B](#ab-testing)
    - [Tests d'interface utilisateur](#ui-testing)
    - [Autres tests](#other-testing)
- [Texte](#text)
    - [Polices](#font)
- [Interface utilisateur](#ui)
    - [Indicateur d'activité](#activity-indicator)
    - [Alertes et feuilles d'action](#alert--action-sheet)
    - [Animation](#animation)
    - [Transition](#transition)
    - [Badge](#badge)
    - [Bouton](#button)
    - [Calendrier](#calendar)
    - [Cartes](#cards)
    - [Formulaires et réglages](#form--settings)
    - [Clavier](#keyboard)
    - [Étiquette](#label)
    - [Connexion](#login)
    - [Menu](#menu)
    - [Barre de navigation](#navigation-bar)
    - [PickerView](#pickerview)
    - [Fenêtres contextuelles](#popup)
    - [Vue de progression](#progress-view)
    - [Tirer pour actualiser](#pull-to-refresh)
    - [Étoiles de notation](#rating-stars)
    - [ScrollView](#scrollview)
    - [Contrôle segmenté](#segmented-control)
    - [Curseur](#slider)
    - [Écran de démarrage](#splash-view)
    - [Barre d'état](#status-bar)
    - [Stepper](#stepper)
    - [Interrupteur](#switch)
    - [Barre d'onglets](#tab-bar)
    - [Table View / Collection View](#table-view--collection-view)
      - [Table View](#table-view)
      - [Collection View](#collection-view)
      - [Cellules extensibles](#expandable-cell)
      - [En-tête](#header)
      - [Espace réservé](#placeholder)
      - [Mise en page de Collection View](#collection-view-layout)
    - [Tags](#tag)
    - [TextField et TextView](#textfield--textview)
    - [UIPageControl](#uipagecontrol)
    - [Vue Web](#web-view)
- [Utilitaires](#utility)
- [Consentement de l'utilisateur](#user-consent)
- [Réalité virtuelle](#vr)
- [Visite guidée / Introduction / Tutoriel](#walkthrough--intro--tutorial)
- [Sites web](#websites)
- [Websocket](#websocket)
- [Outils](#tools)
- [Tutoriels et conférences](#tutorials-and-keynotes)
- [Modèles d'interface utilisateur](#ui-templates)
- [Xcode](#xcode)
    - [Extensions (Xcode 8+)](#extensions-xcode-8)
    - [Thèmes](#themes)
    - [Autres outils Xcode](#other-xcode)


## Analytique

 *Plateformes d'analytique, SDK, suivi des erreurs et réponses en temps réel sur votre application*

- [Answers by Fabric](https://get.fabric.io) - Answers vous donne un aperçu en temps réel de l'expérience des utilisateurs dans votre application.
- [Aptabase](https://aptabase.com/for-swift) - Analytique open source, respectueuse de la vie privée et simple pour les applications Swift.
- [Bugsnag](https://www.bugsnag.com/platforms/ios-crash-reporting) - Suivi des erreurs avec une offre gratuite. Les rapports d'erreur incluent des données sur l'appareil, la version et l'utilisateur, et acceptent des données arbitraires.
- [Countly](https://count.ly) - Plateforme open source d'analytique mobile et web, de rapports de plantage et de notifications push pour iOS et Android.
- [devtodev](https://www.devtodev.com/) - Service d'analytique complet qui améliore votre projet et fait gagner du temps dans le développement du produit.
- [Embrace](http://embrace.io) - Observabilité mobile, construite sur OpenTelemetry, pour offrir des applications fiables et centrées sur l'utilisateur.
- [Emerge Tools](https://www.emergetools.com) - Évitez les régressions de taille et de performances de l'application à chaque pull request, et obtenez des recommandations automatisées pour l'améliorer.
- [Instabug](https://instabug.com) - Retours dans l'application, rapports de bugs et de plantages ; corrigez les bugs plus vite grâce aux étapes de l'utilisateur, aux enregistrements vidéo, à l'annotation d'écran et à la journalisation des requêtes réseau.
- [Matomo](https://github.com/matomo-org/matomo-sdk-ios) - MatomoTracker est un SDK iOS, tvOS et macOS permettant d'envoyer les données d'analytique d'une application à un serveur Matomo.
- [Measure](https://measure.sh/) - Surveillance d'applications mobiles open source et auto-hébergeable, avec suivi des erreurs, traçage des performances et chronologies complètes des sessions, pour passer moins de temps à reconstituer le contexte et corriger les problèmes plus vite.
- [Mixpanel](https://mixpanel.com/) - Plateforme d'analytique avancée.
- [MOCA Analytics](https://www.mocaplatform.com/features) - Backend d'analytique multiplateforme payant.
- [Segment](https://github.com/segmentio/analytics-ios) - Le moyen le plus simple d'intégrer l'analytique dans n'importe quelle application iOS.
- [Sentry](https://sentry.io/) - Sentry fournit une surveillance des erreurs auto-hébergée ou dans le cloud qui aide toutes les équipes logicielles à découvrir, trier et prioriser les erreurs en temps réel.
- [Shake](https://www.shakebugs.com/) - Outil de retours et de signalement de bugs intégré à l'application. Corrigez les bugs jusqu'à 50 fois plus vite grâce à des données détaillées sur l'appareil, aux étapes de reproduction, à l'enregistrement vidéo, aux données de boîte noire, aux requêtes réseau et à la journalisation personnalisée.

**[retour en haut](#contributing-and-collaborating)**

## Routage d'applications

  *Routage d'URL élégant, frameworks de navigation, liens profonds et plus encore*

- [ApplicationCoordinator](https://github.com/AndreyPanov/ApplicationCoordinator) - Le Coordinator est un objet qui gère le flux de navigation et transmet la gestion du flux au coordinateur suivant lors du passage au maillon suivant de la chaîne.
- [Appz](https://github.com/SwiftKitz/Appz) - Lancez facilement des applications externes et ouvrez-y des liens profonds, avec repli sur le Web si elles ne sont pas installées.
- [Composable Navigator](https://github.com/Bahn-X/swift-composable-navigator) - Une bibliothèque open source pour créer des applications SwiftUI accessibles par liens profonds, pensée pour la composition, les tests et l'ergonomie
- [Crossroad](https://github.com/giginet/Crossroad) - Crossroad est un routeur d'URL axé sur la gestion des schémas d'URL personnalisés. Grâce à lui, vous pouvez router plusieurs schémas d'URL et récupérer facilement arguments et paramètres.
- [DeepLinkKit](https://github.com/button/DeepLinkKit) - Une manière splendide de gérer vos liens profonds, fondée sur la correspondance de routes et les blocs.
- [JLRoutes](https://github.com/joeldev/JLRoutes) - Bibliothèque de routage d'URL pour iOS avec une API simple à base de blocs.
- [Linker](https://github.com/MaksimKurpa/Linker) - Un moyen léger de gérer les liens profonds internes et externes sur iOS.
- [Marshroute](https://github.com/avito-tech/Marshroute) - Marshroute est une bibliothèque iOS qui rend vos routeurs simples mais extrêmement puissants.
- [RouteComposer](https://github.com/ekazaev/route-composer) - Bibliothèque qui aide à gérer la composition des contrôleurs de vue, le routage et les liens profonds.
- [RxFlow](https://github.com/RxSwiftCommunity/RxFlow) - Framework de navigation pour applications iOS fondé sur le patron Reactive Flow Coordinator.
- [SwiftCurrent](https://github.com/wwt/SwiftCurrent) - Une bibliothèque pour gérer des flux de travail complexes.
- [SwiftRouter](https://github.com/skyline75489/SwiftRouter) - Un routeur d'URL pour iOS.
- [URLNavigator](https://github.com/devxoul/URLNavigator) - Routage d'URL élégant pour Swift
- [WAAppRouting](https://github.com/Wasappli/WAAppRouting) - Le routage iOS bien fait. Gère à la fois la reconnaissance des URL et l'affichage des contrôleurs avec les paramètres analysés. Le tout en une ligne, avec la pile de contrôleurs préservée automatiquement !

**[retour en haut](#contributing-and-collaborating)**

## App Store

*Directives d'Apple et bibliothèques de notification de nouvelles versions*

- [Apple Review Guidelines](https://developer.apple.com/app-store/review/#common-app-rejections) - Met en évidence certains des problèmes les plus courants qui entraînent le rejet des applications.
- [Free App Store Optimization Tool](https://www.mobileaction.co) - Vous permet de suivre la visibilité de votre application sur l'App Store en termes de mots-clés et de concurrents.

**[retour en haut](#contributing-and-collaborating)**

## Apple TV

*Contrôleurs de vue tvOS, wrappers, gestionnaires de modèles et lecteurs vidéo.*

- [ParallaxView](https://github.com/PGSSoft/ParallaxView) - Contrôles et extensions iOS qui ajoutent un effet de parallaxe à votre application.
- [TvOSPinKeyboard](https://github.com/zattoo/TvOSPinKeyboard) - Clavier de saisie de code PIN pour tvOS.
- [XCDYouTubeKit](https://github.com/0xced/XCDYouTubeKit) - Lecteur vidéo YouTube pour iOS, tvOS et macOS.

**[retour en haut](#contributing-and-collaborating)**

## Patrons d'architecture

*Clean Architecture, Viper, MVVM, réactif... choisissez votre arme.*

- [Clean Architecture for SwiftUI + Combine](https://github.com/nalexn/clean-architecture-swiftui) - Un projet de démonstration présentant la configuration de production d'une application SwiftUI avec la Clean Architecture.
- [CleanArchitectureRxSwift](https://github.com/sergdort/CleanArchitectureRxSwift) - Exemple de Clean Architecture pour une application iOS utilisant RxSwift.
- [ios-architecture](https://github.com/tailec/ios-architecture) - Une collection d'architectures iOS - MVC, MVVM, MVVM+RxSwift, VIPER, RIBs et bien d'autres.
- [iOS-Viper-Architecture](https://github.com/MindorksOpenSource/iOS-Viper-Architecture) - Ce dépôt contient un exemple d'application détaillé qui implémente l'architecture VIPER sur iOS à l'aide de bibliothèques et de frameworks tels qu'Alamofire, AlamofireImage, PKHUD, CoreData, etc.
- [Reactant](https://github.com/Brightify/Reactant) - Reactant est une architecture réactive pour iOS.
- [Spin](https://github.com/Spinners/Spin.Swift) - Une implémentation universelle d'un système de boucle de rétroaction (Feedback Loop) pour RxSwift, ReactiveSwift et Combine
- [SwiftyVIPER](https://github.com/codytwinton/SwiftyVIPER) - Rend l'implémentation de l'architecture VIPER beaucoup plus simple et plus propre.
- [The Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture) - The Composable Architecture est une bibliothèque pour créer des applications de manière cohérente et compréhensible, en pensant à la composition, aux tests et à l'ergonomie.
- [Viperit](https://github.com/ferranabello/Viperit) - Framework VIPER pour iOS. Développez facilement une application selon l'architecture VIPER. Écrit et testé en Swift.

**[retour en haut](#contributing-and-collaborating)**

## ARKit

*Bibliothèque et outils pour vous aider à créer des expériences de réalité augmentée sans égales*

- [ARKit Virtual Objects](https://github.com/ignacio-chiazzo/ARKit) - Placement d'objets virtuels en réalité augmentée.
- [ARKit-CoreLocation](https://github.com/ProjectDent/ARKit-CoreLocation) - Combine la haute précision de la RA avec l'échelle des données GPS.
- [ARVideoKit](https://github.com/AFathi/ARVideoKit) - Enregistrez et capturez des vidéos, des photos, des Live Photos et des GIF avec ARKit.
- [SmileToUnlock](https://github.com/rsrbk/SmileToUnlock) - Cette bibliothèque utilise le suivi du visage d'ARKit pour détecter le sourire d'un utilisateur.

**[retour en haut](#contributing-and-collaborating)**

## Authentification

*Bibliothèques Oauth et Oauth2, connexions via les réseaux sociaux et outils de captcha.*

- [Heimdallr.swift](https://github.com/trivago/Heimdallr.swift) - Bibliothèque OAuth 2 facile à utiliser pour iOS, écrite en Swift.
- [OAuth2](https://github.com/p2/OAuth2) - Framework OAuth2 pour macOS et iOS, écrit en Swift.
- [OAuthSwift](https://github.com/OAuthSwift/OAuthSwift) - Bibliothèque OAuth basée sur Swift pour iOS
- [ReCaptcha](https://github.com/fjcaetano/ReCaptcha) - ReCaptcha (in)visible pour iOS.
- [SwiftyOAuth](https://github.com/delba/SwiftyOAuth) - Une bibliothèque OAuth simple pour iOS avec un ensemble de fournisseurs intégrés.

**[retour en haut](#contributing-and-collaborating)**

## Blockchain

*Outil pour interagir avec des contrats intelligents. Implémentations du protocole Bitcoin et frameworks pour interagir avec les cryptomonnaies.*

- [BitcoinKit](https://github.com/yenom/BitcoinKit) - Boîte à outils du protocole Bitcoin pour Swift ; BitcoinKit implémente le protocole Bitcoin en Swift. Il s'agit d'une implémentation du protocole Bitcoin SPV écrite en Swift.
- [EthereumKit](https://github.com/yuzushioh/EthereumKit) - EthereumKit est un framework Swift gratuit et open source pour interagir facilement avec Ethereum.
- [Web3.swift](https://github.com/Boilertalk/Web3.swift) - Bibliothèque Web3 pour interagir avec la blockchain Ethereum.
- [web3swift](https://github.com/web3swift-team/web3swift) - Les fonctionnalités élégantes de Web3js en Swift. Analyse native des ABI et interactions avec les contrats intelligents.

**[retour en haut](#contributing-and-collaborating)**

## Livres

*Les livres les plus recommandés*

- [Advanced Swift par Chris Eidhof, Ole Begemann et Airspeed Velocity](https://www.objc.io/books/advanced-swift/)
- [Anyone Can Create an App par Wendy L. Wise](https://www.manning.com/books/anyone-can-create-an-app)
- [Classic Computer Science Problems in Swift](https://www.manning.com/books/classic-computer-science-problems-in-swift)
- [Cocoa Design Patterns](https://www.amazon.com/Cocoa-Design-Patterns-Erik-Buck/dp/0321535022)
- [Core Data par Florian Kugler et Daniel Eggert](https://www.objc.io/books/core-data/)
- [Functional Swift par Chris Eidhof, Florian Kugler et Wouter Swierstra](https://www.objc.io/books/functional-swift/)
- [Hello Swift! par Tanmay Bakshi avec Lynn Beighley](https://www.manning.com/books/hello-swift)
- [iOS Development with Swift par Craig Grummitt](https://www.manning.com/books/ios-development-with-swift)
- [iOS Programming: The Big Nerd Ranch Guide par Christian Keur et Aaron Hillegass](https://www.bignerdranch.com/books/ios-programming-the-big-nerd-ranch-guide-seventh-edition/)
- [Programming in Objective-C par Stephen G. Kochan](https://www.amazon.com/Programming-Objective-C-6th-Developers-Library/dp/0321967607)
- [Swift in Depth](https://www.manning.com/books/swift-in-depth)
- [The Complete Friday Q & A: Volume 1](https://www.mikeash.com/book.html)
- [The Swift Programming Language par Apple](https://books.apple.com/us/book/swift-programming-language/id881256329)

**[retour en haut](#contributing-and-collaborating)**

## Cache

*Bibliothèques et frameworks de cache thread-safe, hors ligne et hautes performances.*

- [Awesome Cache](https://github.com/aschuch/AwesomeCache) - Un délicieux cache sur disque (écrit en Swift).
- [Cache](https://github.com/hyperoslo/Cache) - Du cache, rien que du cache.
- [Disk](https://github.com/saoudrizwan/Disk) - Un délicieux framework pour iOS permettant de persister facilement des structs, des images et des données.
- [HanekeSwift](https://github.com/Haneke/HanekeSwift) - Un cache générique léger pour iOS écrit en Swift, avec une attention toute particulière pour les images.
- [mattress](https://github.com/buzzfeed/mattress) - Mise en cache hors ligne de contenu Web pour iOS.
- [PINCache](https://github.com/pinterest/PINCache) - Cache d'objets parallèle, rapide et sans interblocage pour iOS et macOS.
- [RocketData](https://github.com/plivesey/RocketData) - Une solution de mise en cache et de cohérence pour les modèles immuables.
- [SPTPersistentCache](https://github.com/spotify/SPTPersistentCache) - Tout le monde essaie d'implémenter un cache à un moment donné du cycle de vie de son application iOS, et voici le nôtre. Par Spotify.
- [Track](https://github.com/maquannene/Track) - Track est un cache thread-safe écrit en Swift. Il se compose de DiskCache et de MemoryCache, qui prennent en charge LRU.
- [YYCache](https://github.com/ibireme/YYCache) - Framework de cache hautes performances pour iOS.

**[retour en haut](#contributing-and-collaborating)**

## Graphiques

*Découvrez de superbes bibliothèques de graphiques iOS, faciles à utiliser et personnalisables, idéales pour créer des visualisations de données dynamiques et saisissantes.*

- [ANDLineChartView](https://github.com/anaglik/ANDLineChartView) - ANDLineChartView est une classe facile à utiliser, basée sur une vue, pour afficher des graphiques linéaires animés.
- [Charts](https://github.com/danielgindi/Charts) - Un puissant framework de graphiques et de diagrammes, l'équivalent iOS de [MPAndroidChart](https://github.com/PhilJay/MPAndroidChart).
- [core-plot](https://github.com/core-plot/core-plot) - Une bibliothèque de tracés 2D hautement personnalisable, capable de dessiner de nombreux types de tracés.
- [EatFit](https://github.com/Yalantis/EatFit) - Eat fit est un composant de représentation de données attrayant, inspiré de Google Fit.
- [EChart](https://github.com/zhuhuihuihui/EChart) - Graphiques et diagrammes pour iOS/iPhone/iPad. Gestion des événements et animations prises en charge.
- [FSInteractiveMap](https://github.com/ArthurGuibert/FSInteractiveMap) - Une bibliothèque de graphiques pour visualiser une carte vectorielle et interagir avec elle sur iOS. C'est comme Geochart, mais pour iOS.
- [FSLineChart](https://github.com/ArthurGuibert/FSLineChart) - Une bibliothèque de graphiques linéaires pour iOS.
- [JBChartView](https://github.com/Jawbone/JBChartView) - Bibliothèque de graphiques pour iOS, aussi bien linéaires qu'en barres.
- [JYRadarChart](https://github.com/johnnywjy/JYRadarChart) - Une implémentation open source de graphique radar pour iOS.
- [MagicPie](https://github.com/AlexandrGraschenkov/MagicPie) - Un superbe graphique circulaire basé sur des calques. Incroyablement rapide et entièrement personnalisable. D'étonnantes animations sont disponibles avec MagicPie.
- [PieCharts](https://github.com/i-schuetz/PieCharts) - Bibliothèque de graphiques circulaires pour iOS, facile à utiliser et hautement personnalisable.
- [PNChart](https://github.com/kevinzhow/PNChart) - Une bibliothèque de graphiques simple et élégante utilisée dans Piner et CoinsMan pour iOS.
- [Scrollable-GraphView](https://github.com/philackm/ScrollableGraphView) - Une vue de graphique défilante et adaptative pour iOS permettant de visualiser des jeux de données discrets simples. Écrit en Swift.
- [SwiftChart](https://github.com/gpbl/SwiftChart) - Bibliothèque de graphiques linéaires et en aires pour iOS.
- [TEAChart](https://github.com/xhacker/TEAChart) - Bibliothèque de graphiques iOS simple et intuitive. Graphique de contributions, graphique en horloge et graphique en barres.
- [TKRadarChart](https://github.com/TBXark/TKRadarChart) - Un graphique radar personnalisable en Swift.
- [TWRCharts](https://github.com/chasseurmic/TWRCharts) - Un wrapper iOS pour ChartJS. Créez facilement des graphiques animés en tirant parti de la puissance du code Obj-C natif.

**[retour en haut](#contributing-and-collaborating)**

## Injection de code

 *Réduisez le temps de développement grâce à ces outils*

- [Inject](https://github.com/krzysztofzablocki/Inject) - Rechargement à chaud pour les applications Swift !
- [injectionforxcode](https://github.com/johnno1962/injectionforxcode) - Injection de code, y compris pour Swift.
- [Vaccine](https://github.com/zenangst/Vaccine) - Vaccine est un framework qui vise à immuniser vos applications contre la maladie de la recompilation.

**[retour en haut](#contributing-and-collaborating)**

## Qualité du code

 *La qualité compte toujours. Vérificateurs de code, surveillants de la mémoire, sucre syntaxique et plus encore.*

- [Aardvark](https://github.com/square/Aardvark) - Aardvark est une bibliothèque qui rend extrêmement simple la création de rapports de bugs exploitables.
- [Bootstrap](https://github.com/krzysztofzablocki/Bootstrap) - Amorce de projet iOS visant un code de haute qualité.
- [Bugsee](https://www.bugsee.com) - Rapports de bugs et de plantages dans l'application, avec vidéo, journaux, trafic réseau et traces.
- [FBRetainCycleDetector](https://github.com/facebook/FBRetainCycleDetector) - Bibliothèque iOS pour aider à détecter les cycles de rétention à l'exécution.
- [HeapInspector-for-iOS](https://github.com/tapwork/HeapInspector-for-iOS) - Trouvez les problèmes et les fuites de mémoire dans votre application iOS sans Instruments.
- [MLeaksFinder](https://github.com/Tencent/MLeaksFinder) - Trouvez les fuites de mémoire dans votre application iOS pendant le développement.
- [PSTModernizer](https://github.com/PSPDFKit-labs/PSTModernizer) - Facilite la prise en charge des anciennes versions d'iOS en corrigeant certains problèmes et en ajoutant les méthodes manquantes.
- [spacecommander](https://github.com/square/spacecommander) - Commitez en équipe du code Objective-C parfaitement formaté, sans même faire d'effort.
- [SwiftCop](https://github.com/andresinaka/SwiftCop) -  SwiftCop est une bibliothèque de validation entièrement écrite en Swift et inspirée par la clarté des validations Active Record de Ruby On Rails.
- [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) - Une bibliothèque de code et un outil de formatage en ligne de commande pour reformater le code Swift.
- [Tailor](https://github.com/sleekbyte/tailor) - Analyseur statique multiplateforme pour Swift qui vous aide à écrire un code plus propre et à éviter les bugs.

**[retour en haut](#contributing-and-collaborating)**

### Linter

*Analyseurs de code statiques pour faire respecter le style et les conventions.*

- [AnyLint](https://github.com/Flinesoft/AnyLint) - Analysez n'importe quoi en combinant la puissance de Swift et des expressions régulières.
- [IBLinter](https://github.com/IBDecodable/IBLinter) - Un outil de linting pour Interface Builder.
- [OCLint](https://github.com/oclint/oclint) - Outil d'analyse statique de code pour améliorer la qualité et réduire les défauts.
- [Swiftlint](https://github.com/realm/SwiftLint) - Un outil pour faire respecter le style et les conventions Swift.

**[retour en haut](#contributing-and-collaborating)**

## Couleur

*Extensions de couleurs hexadécimales, thèmes, sélecteurs de couleurs et autres superbes outils de couleur.*

- [BCColor](https://github.com/boycechang/BCColor) - Un kit de couleurs léger mais puissant (Swift).
- [ChromaColorPicker](https://github.com/joncardasis/ChromaColorPicker) - Un sélecteur de couleurs intuitif pour iOS, écrit en Swift.
- [Colours](https://github.com/bennyguitar/Colours) - Un bel ensemble de couleurs prédéfinies et de méthodes de couleur pour vous faciliter la vie en développement iOS/macOS.
- [DynamicColor](https://github.com/yannickl/DynamicColor) - Encore une autre extension pour manipuler facilement les couleurs en Swift.
- [FlatUIColors](https://github.com/brynbellomy/FlatUIColors) - Utilitaires de palette de couleurs Flat UI écrits en Swift.
- [Gestalt](https://github.com/regexident/Gestalt) - Une bibliothèque de thèmes pour applications iOS, légère et non intrusive, prenant en charge le changement de thème animé.
- [Hue](https://github.com/zenangst/Hue) - Hue est l'utilitaire de coloration tout-en-un dont vous aurez toujours besoin.
- [PrettyColors](https://github.com/jdhealy/PrettyColors) - Applique styles et couleurs au texte du Terminal à l'aide de codes d'échappement ANSI. Conforme à la norme ECMA 48.
- [RandomColorSwift](https://github.com/onevcat/RandomColorSwift) - Un générateur de couleurs attrayantes pour Swift. Porté depuis `randomColor.js`.
- [SheetyColors](https://github.com/chrs1885/SheetyColors) - Un sélecteur de couleurs pour iOS présenté sous forme de feuille d'action.
- [SwiftHEXColors](https://github.com/thii/SwiftHEXColors) - Gestion des couleurs HEX sous forme d'extension de UIColor.
- [UIColor-Hex-Swift](https://github.com/yeahdongcn/UIColor-Hex-Swift) - Méthode pratique pour créer une couleur en autorelease à partir d'une chaîne hexadécimale RGBA.

**[retour en haut](#contributing-and-collaborating)**

## Ligne de commande

*Des outils intelligents, beaux et élégants pour vous aider à créer des applications en ligne de commande.*

- [ColorizeSwift](https://github.com/mtynior/ColorizeSwift) - Mise en forme des chaînes du terminal pour Swift.
- [Commander](https://github.com/kylef/Commander) - Composez de belles interfaces en ligne de commande en Swift.
- [Guaka](https://github.com/nsomar/Guaka) - Le framework de ligne de commande le plus intelligent et le plus beau (conforme POSIX) pour Swift.
- [Linenoise](https://github.com/andybest/linenoise-swift) - Un remplaçant de readline en pur Swift
- [nef](https://github.com/bow-swift/nef) - Outil en ligne de commande qui facilite la création de documentation sous forme de Swift Playgrounds.
- [Progress](https://github.com/jkandzi/Progress.swift) - Ajoutez de belles barres de progression à vos boucles.
- [SourceDocs](https://github.com/eneko/SourceDocs) - Outil en ligne de commande qui génère de la documentation Markdown à partir des commentaires du code source.
- [Swift Argument Parser](https://github.com/apple/swift-argument-parser) - Analyse d'arguments simple et typée pour Swift
- [SwiftCLI](https://github.com/jakeheis/SwiftCLI) - Un puissant framework pour développer des CLI en Swift
- [Swiftline](https://github.com/nsomar/Swiftline) - Swiftline est un ensemble d'outils pour vous aider à créer des applications en ligne de commande.
- [SwiftShell](https://github.com/kareman/SwiftShell) - Un framework Swift pour écrire des scripts shell et exécuter des commandes shell.
- [SwiftyTextTable](https://github.com/scottrhoyt/SwiftyTextTable) - Une bibliothèque légère pour générer des tableaux en mode texte.

**[retour en haut](#contributing-and-collaborating)**

## Concurrence

*Planificateurs de tâches, coroutines, bibliothèques et frameworks de threads asynchrones et typés, écrits en Swift*

- [AsyncNinja](https://github.com/AsyncNinja/AsyncNinja) - Un ensemble complet de primitives de concurrence et de programmation réactive.
- [AsyncQueue](https://github.com/dfed/swift-async-queue) - Une bibliothèque de files d'attente permettant d'envoyer des tâches ordonnées depuis des contextes synchrones vers des contextes asynchrones.
- [Concurrent](https://github.com/typelift/Concurrent) - Primitives de concurrence fonctionnelles.
- [Queuer](https://github.com/FabrizioBrancati/Queuer) - Un gestionnaire de files d'attente construit sur OperationQueue et Dispatch (alias GCD).
- [SwiftQueue](https://github.com/lucas34/SwiftQueue) - Planificateur de tâches avec exécution concurrente, gestion des échecs et nouvelles tentatives, persistance, répétition, délai et plus encore.
- [Venice](https://github.com/Zewo/Venice) - CSP (Coroutines, Channels, Select) pour Swift.

**[retour en haut](#contributing-and-collaborating)**

## Core Data

*Frameworks, wrappers, générateurs et modèles de base pour Core Data.*

- [AERecord](https://github.com/tadija/AERecord) - Un wrapper Core Data super génial en Swift.
- [CloudCore](https://github.com/deeje/CloudCore) - Synchronisation CloudKit robuste : édition hors ligne, relations, bases de données partagées et publiques, deltas au niveau des champs, et plus encore.
- [CoreStore](https://github.com/JohnEstropia/CoreStore) - Puissant framework Core Data pour les migrations incrémentielles, la récupération, l'observation, etc.
- [Ensembles](https://github.com/drewmccormack/ensembles) - Un framework de synchronisation pour Core Data.
- [Graph](https://github.com/CosmicMind/Graph) - Un framework élégant piloté par les données pour CoreData en Swift.
- [JSQCoreDataKit](https://github.com/jessesquires/JSQCoreDataKit) - Une pile Core Data plus agile, à la sauce Swift.
- [MagicalRecord](https://github.com/magicalpanda/MagicalRecord) - Une récupération super géniale et facile pour Core Data.
- [Mogenerator](https://github.com/rentzsch/mogenerator) - Génération automatique de code Core Data.
- [PredicateFlow](https://github.com/andreadelfante/PredicateFlow) - Écrivez des NSPredicate étonnants, fortement typés et faciles à lire, sous une forme fluide, sans deviner les noms d'attributs ou les opérations de prédicat, ni passer des arguments du mauvais type.
- [PrediKit](https://github.com/KrakenDev/PrediKit) - Un DSL NSPredicate pour iOS, macOS, tvOS et watchOS. Inspiré de SnapKit et écrit avec amour en Swift.
- [Skopelos](https://github.com/albertodebortoli/Skopelos) - Une version d'Active Record sur Core Data minimaliste, thread-safe, sans code passe-partout et très facile à utiliser. Tout simplement tout ce dont vous avez besoin pour faire du Core Data.
- [Sync](https://github.com/3lvis/Sync) - Synchronisation JSON moderne vers Core Data, en Swift.

**[retour en haut](#contributing-and-collaborating)**

## Cours

*Cours en ligne, tutoriels et ressources d'apprentissage pour bien démarrer votre parcours de développement iOS.*

### Premiers pas

*Cours, tutoriels, guides et bootcamps*

- [100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui) - Collection gratuite de vidéos et de tutoriels mise à jour pour iOS 15 et Swift 5.5.
- [Apple - Object-Oriented Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/OOP_ObjC/Introduction/Introduction.html)
- [ARStarter](https://github.com/codePrincess/ARStarter) - Démarrez avec ARKit - Un petit exercice pour débutants.
- [Classpert - Une liste de 500 cours de développement iOS (gratuits et payants), issus des meilleures plateformes d'e-learning](https://classpert.com/ios-development) - Catalogue complet de cours d'Udacity, Pluralsight, Coursera, Edx, Treehouse et Skillshare.
- [iOS & Swift - The Complete iOS App Development Bootcamp](https://www.udemy.com/course/ios-13-app-development-bootcamp/)
- [Ray Wenderlich](https://www.raywenderlich.com/2690-learn-to-code-ios-apps-1-welcome-to-programming) - Apprenez à coder des applications iOS.
- [Stanford - Developing apps for iOS](https://cs193p.stanford.edu/) - Le cours CS193p de Stanford - Developing Apps for iOS.
- [Udacity - Intro to iOS App Development with Swift](https://www.udacity.com/course/intro-to-ios-app-development-with-swift--ud585) - Cours gratuit d'Udacity. Créez votre première application iPhone.

**[retour en haut](#contributing-and-collaborating)**

## Base de données

*Wrappers, clients, alternatives à Parse et outils sûrs pour gérer les données éphémères et persistantes.*

- [Couchbase Mobile](https://www.couchbase.com/products/mobile/) - Base de documents Couchbase pour mobile, avec synchronisation dans le cloud.
- [Default](https://github.com/Nirma/Default) - Interface moderne pour UserDefaults + prise en charge de Codable.
- [Defaults](https://github.com/sindresorhus/Defaults) - UserDefaults moderne, dans l'esprit de Swift.
- [DuckDB](https://github.com/duckdb/duckdb-swift) - DuckDB est un système de base de données analytique hautes performances.
- [FCModel](https://github.com/marcoarment/FCModel) - Une alternative à Core Data pour ceux qui aiment avoir un accès SQL direct.
- [Fluent](https://github.com/vapor/fluent) - Implémentation simple d'ActiveRecord pour travailler avec votre base de données en Swift.
- [FMDB](https://github.com/ccgus/fmdb) - Un wrapper Cocoa / Objective-C autour de SQLite.
- [GRDB.swift](https://github.com/groue/GRDB.swift) - Une boîte à outils SQLite polyvalente pour Swift, avec prise en charge du mode WAL.
- [IceCream](https://github.com/caiyue1993/IceCream) - Synchronisez une base de données Realm avec CloudKit.
- [MMKV](https://github.com/Tencent/MMKV) - Un framework de stockage clé-valeur mobile, efficace et compact, développé par WeChat. Fonctionne sur iOS, Android, macOS et Windows.
- [MongoKitten](https://github.com/OpenKitten/MongoKitten) - Une implémentation de client MongoDB en pur Swift, avec prise en charge des bases de données embarquées.
- [MySQL](https://github.com/PerfectlySoft/Perfect-MySQL) - Un wrapper Swift autour de la bibliothèque cliente MySQL, permettant d'accéder aux serveurs MySQL.
- [Nora](https://github.com/SD10/Nora) - Nora est une couche d'abstraction Firebase pour travailler avec FirebaseDatabase et FirebaseStorage.
- [ObjectBox](https://github.com/objectbox/objectbox-swift) - ObjectBox est un framework de persistance d'objets ultrarapide et léger.
- [OHMySQL](https://github.com/oleghnidets/OHMySQL) - Un wrapper Objective-C de l'API C de MySQL.
- [PersistenceKit](https://github.com/Teknasyon-Teknoloji/PersistenceKit) - Stockez et récupérez des objets Codable dans diverses couches de persistance, en quelques lignes de code.
- [PersistentStorageSerializable](https://github.com/IvanRublev/PersistentStorageSerializable) - Bibliothèque Swift qui facilite la sérialisation des préférences de l'utilisateur (réglages de l'application) avec les User Defaults du système ou un fichier Property List sur disque.
- [Prephirences](https://github.com/phimage/Prephirences) - Prephirences est une bibliothèque Swift qui fournit des protocoles utiles et des méthodes pratiques pour gérer les préférences, les configurations et l'état de l'application.
- [Realm](https://github.com/realm/realm-cocoa) - L'alternative à CoreData et SQLite : simple, moderne et rapide.
- [RealmGeoQueries](https://github.com/mhergon/RealmGeoQueries) - RealmGeoQueries simplifie les requêtes spatiales avec Realm Cocoa. En l'absence de fonctions officielles, cette bibliothèque offre la possibilité d'effectuer des recherches de proximité.
- [SecureDefaults](https://github.com/vpeschenkov/SecureDefaults) - Un wrapper léger au-dessus de UserDefaults/NSUserDefaults avec une couche supplémentaire de chiffrement AES-256.
- [Shallows](https://github.com/dreymonde/Shallows) - Votre boîte à outils de persistance légère.
- [SQLite.swift](https://github.com/stephencelis/SQLite.swift) - Une couche typée, en langage Swift, au-dessus de SQLite3.
- [StorageKit](https://github.com/StorageKit/StorageKit) - Votre dépanneur pour le stockage de données.
- [SugarRecord](https://github.com/modo-studio/SugarRecord)  - Bibliothèque de gestion de la persistance des données.
- [SwiftStore](https://github.com/hemantasapkota/SwiftStore) - Stockage clé-valeur pour Swift reposant sur LevelDB.
- [SwiftyUserDefaults](https://github.com/sunshinejr/SwiftyUserDefaults) - NSUserDefaults à typage statique.
- [TypedDefaults](https://github.com/tasanobu/TypedDefaults) - TypedDefaults est une bibliothèque utilitaire pour utiliser NSUserDefaults de manière typée.
- [Unrealm](https://github.com/arturdev/Unrealm) - Unrealm vous permet de stocker facilement des classes, structs et enums Swift natifs dans Realm.
- [UserDefaults](https://github.com/nmdias/DefaultsKit) - UserDefaults simple et fortement typé pour iOS, macOS et tvOS.
- [WCDB](https://github.com/Tencent/wcdb) - WCDB est un framework de base de données mobile efficace, complet et facile à utiliser pour iOS et macOS.
- [YapDatabase](https://github.com/yapstudios/YapDatabase) - YapDatabase est une base de données extensible pour iOS et Mac.

**[retour en haut](#contributing-and-collaborating)**

## Structures de données / Algorithmes

*Diffs, keypaths, listes triées et autres wrappers et bibliothèques de structures de données étonnants.*

- [Algorithm](https://github.com/CosmicMind/Algorithm) - Algorithm est une collection de structures de données dotées d'un ensemble d'outils probabilistes.
- [BTree](https://github.com/attaswift/BTree) - Collections ordonnées rapides pour Swift, utilisant des B-arbres en mémoire.
- [Buffer](https://github.com/alexdrone/Buffer) - μ-framework Swift pour des diffs de tableaux efficaces, l'observation de collections et la configuration de cellules.
- [Changeset](https://github.com/osteslag/Changeset) - Modifications minimales pour passer d'une collection à une autre.
- [Differ](https://github.com/tonyarnold/Differ) - Bibliothèque Swift pour générer des différences et des correctifs entre collections.
- [DifferenceKit](https://github.com/ra1028/DifferenceKit) - Un framework d'algorithme de différence en O(n), rapide et flexible, pour les collections Swift.
- [Differific](https://github.com/zenangst/Differific) - Un framework de diff rapide et pratique.
- [Dispatch](https://github.com/alexdrone/Store) - Implémentation de Flux multi-store en Swift.
- [Dollar](https://github.com/ankurp/Dollar) - Une boîte à outils fonctionnelle pour le langage Swift, similaire à Lo-Dash ou Underscore.js en Javascript https://www.dollarswift.org/.
- [EKAlgorithms](https://github.com/EvgenyKarkan/EKAlgorithms) - Quelques algorithmes et structures de données bien connus de l'informatique, en Objective-C.
- [HeckelDiff](https://github.com/mcudich/HeckelDiff) - Une bibliothèque de diff rapide en Swift.
- [KeyPathKit](https://github.com/vincent-pradeilles/KeyPathKit) - KeyPathKit fournit une syntaxe fluide pour manipuler les données à l'aide de keypaths typés.
- [Result](https://github.com/antitypical/Result) - Type Swift modélisant le succès ou l'échec d'opérations arbitraires.
- [swift-algorithm-club](https://github.com/raywenderlich/swift-algorithm-club) - Algorithmes et structures de données en Swift, avec des explications !
- [SwiftGraph](https://github.com/davecom/SwiftGraph) - Structure de données de graphe et fonctions utilitaires en pur Swift.
- [SwiftPriorityQueue](https://github.com/davecom/SwiftPriorityQueue) - Une file de priorité avec une implémentation classique de tas binaire en pur Swift.
- [SwiftStructures](https://github.com/waynewbishop/SwiftStructures) - Exemples de structures de données et d'algorithmes couramment utilisés, en Swift.

**[retour en haut](#contributing-and-collaborating)**

## Date et heure

*Bibliothèques de gestion du temps et de NSCalendar. Contient aussi des générateurs d'heures de lever et de coucher du soleil, des sélecteurs d'heure et des interfaces pour NSTimer.*

- [10Clock](https://github.com/joedaniels29/10Clock) - Ce contrôle est un superbe sélecteur d'heure fortement inspiré du minuteur "Bedtime" d'iOS 10.
- [AnyDate](https://github.com/Kawoou/AnyDate) - API de date et d'heure dans l'esprit de Swift, inspirée de l'API DateTime de Java 8.
- [Chronology](https://github.com/davedelong/Chronology) - Construire une meilleure bibliothèque de dates et d'heures.
- [DateHelper](https://github.com/melvitax/DateHelper) - Extension pratique pour NSDate en Swift.
- [DateTools](https://github.com/MatthewYork/DateTools) - Les dates et les heures en toute simplicité en Objective-C.
- [iso-8601-date-formatter](https://github.com/boredzo/iso-8601-date-formatter) - Une sous-classe de NSFormatter de Cocoa pour convertir des dates depuis et vers des chaînes au format ISO-8601. Prend en charge les formats calendaire, par semaine et ordinal.
- [Kronos](https://github.com/lyft/Kronos) - Élégante bibliothèque de date NTP en Swift.
- [NVDate](https://github.com/novalagung/nvdate) - Bibliothèque d'extension de Date pour Swift4.
- [Schedule](https://github.com/luoxiu/Schedule) - ⏳ Le planificateur de tâches léger qui manquait à Swift, avec une syntaxe incroyablement naturelle.
- [Solar](https://github.com/ceeK/Solar) - Une micro-bibliothèque Swift pour calculer les heures de lever et de coucher du soleil.
- [SwiftDate](https://github.com/malcommac/SwiftDate) - La meilleure façon de gérer les dates et les fuseaux horaires en Swift.
- [SwiftyTimer](https://github.com/radex/SwiftyTimer) - API dans l'esprit de Swift pour NSTimer.
- [Time](https://github.com/dreymonde/Time) - Calculs de temps typés en Swift, propulsés par les génériques.
- [Timepiece](https://github.com/naoty/Timepiece) - Extensions NSDate intuitives en Swift.
- [TimeZonePicker](https://github.com/gligorkot/TimeZonePicker) - Un UIViewController TimeZonePicker semblable à celui de l'app Réglages d'iOS.
- [TrueTime](https://github.com/instacart/TrueTime.swift) - Obtenez l'heure actuelle réelle, insensible aux modifications de l'horloge de l'appareil.

**[retour en haut](#contributing-and-collaborating)**

## Débogage

*Outils de débogage, rapports de plantage, journaux et interfaces de console.*

- [AEConsole](https://github.com/tadija/AEConsole) - Surcouche d'interface de console personnalisable, avec journal de débogage, par-dessus votre application iOS.
- [Alpha](https://github.com/Legoless/Alpha) - Framework de débogage nouvelle génération pour iOS.
- [AppSpector](https://appspector.com) - Service de débogage et de collecte de données à distance pour iOS et Android. Vous pouvez déboguer le réseau, les journaux, CoreData, SQLite, NSNotificationCenter et simuler la géolocalisation de l'appareil.
- [Atlantis](https://github.com/ProxymanApp/atlantis) - Un petit framework iOS puissant pour intercepter le trafic HTTP/HTTPS de votre application iOS. Fini les manipulations de configuration de proxy et de certificats. Inspectez le journal du trafic avec l'application Proxyman.
- [chisel](https://github.com/facebook/chisel) - Collection de commandes LLDB pour faciliter le débogage des applications iOS.
- [DBDebugToolkit](https://github.com/dbukowski/DBDebugToolkit) - Ensemble d'outils de débogage faciles à utiliser pour les développeurs iOS et les ingénieurs QA.
- [DebugSwift](https://github.com/DebugSwift/DebugSwift) - Une boîte à outils complète conçue pour simplifier et améliorer le processus de débogage des applications iOS.
- [DoraemonKit](https://github.com/didi/DoraemonKit) - Un assistant complet pour le développement d'applications iOS, avec plus de 30 outils inclus. Vous le méritez.
- [Flex](https://github.com/Flipboard/FLEX) - Un outil de débogage et d'exploration intégré à l'application pour iOS.
- [Httper-iOS](https://github.com/MuShare/Httper-iOS) - Application permettant aux développeurs de tester des API REST.
- [Hyperion](https://github.com/willowtreeapps/Hyperion-iOS) - Outil de revue de design intégré à l'application pour inspecter les mesures, les attributs et les animations.
- [LayoutInspector](https://github.com/isavynskyi/LayoutInspector) - Déboguez la mise en page des applications directement sur l'appareil iOS : inspectez les calques en 3D et déboguez les attributs de chaque vue visible.
- [MTHawkeye](https://github.com/meitu/MTHawkeye) - Outils d'aide au profilage et au débogage pour iOS, notamment : UITimeProfiler, Memory Allocations, Living ObjC Objects Sniffer, Network Transaction Waterfall, etc.
- [Netfox](https://github.com/kasketis/netfox) - Une bibliothèque de débogage réseau légère pour iOS / macOS, configurable en une seule ligne !
- [NetworkEye](https://github.com/coderyi/NetworkEye) - une bibliothèque de débogage réseau pour iOS. Elle peut surveiller les requêtes HTTP au sein de l'application et afficher les informations relatives à chaque requête.
- [Playbook](https://github.com/playbook-ui/playbook-ios) - Une bibliothèque pour développer des composants d'interface de manière isolée et en prendre automatiquement des instantanés.
- [PonyDebugger](https://github.com/square/PonyDebugger) - Débogage à distance du réseau et des données de votre application iOS native à l'aide des outils de développement de Chrome.
- [Scyther](https://github.com/bstillitano/Scyther) - Un menu de débogage complet intégré à l'application, regorgeant d'outils utiles, notamment la journalisation réseau, l'inspection de la mise en page, la simulation de position, la journalisation de la console et bien plus encore.
- [Woodpecker](http://www.woodpeck.cn) - Consultez les fichiers du bac à sable, les UserDefaults et les requêtes réseau depuis un Mac.
- [Wormholy](https://github.com/pmusolino/Wormholy) - Débogage réseau pour iOS, comme par magie.
- [Xniffer](https://github.com/xmartlabs/Xniffer) - Un profileur réseau Swift construit sur URLSession.

**[retour en haut](#contributing-and-collaborating)**


## Injection de dépendances

*Frameworks et bibliothèques d'injection de dépendances pour un code iOS découplé et testable.*

- [DITranquillity](https://github.com/ivlevAstef/DITranquillity) - Framework d'injection de dépendances pour les applications iOS, écrit en Swift propre.
- [Needle](https://github.com/uber/needle) — Framework d'injection de dépendances pour Swift, sûr à la compilation, avec du vrai code.
- [Perform](https://github.com/thoughtbot/Perform) - Injection de dépendances facile pour les segues de storyboard.
- [SafeDI](https://github.com/dfed/safedi) - Injection de dépendances sûre à la compilation en Swift 6.
- [Swinject](https://github.com/Swinject/Swinject) - Framework d'injection de dépendances pour Swift.
- [Typhoon](https://github.com/appsquickly/Typhoon) - Injection de dépendances puissante pour Objective-C.
- [Weaver](https://github.com/scribd/Weaver) - Un framework d'injection de dépendances déclaratif, facile à utiliser et sûr pour Swift.

**[retour en haut](#contributing-and-collaborating)**

## Gestionnaire de dépendances / de paquets

*Outils pour gérer les dépendances et les paquets tiers dans vos projets iOS.*

- [Accio](https://github.com/JamitLabs/Accio) - Un gestionnaire de dépendances basé sur SwiftPM pour iOS et consorts, avec des améliorations par rapport à Carthage.
- [Carthage](https://github.com/Carthage/Carthage) - Un gestionnaire de dépendances simple et décentralisé pour Cocoa.
- [CocoaPods](https://cocoapods.org/) - CocoaPods est le gestionnaire de dépendances des projets Objective-C. Il propose des milliers de bibliothèques et peut vous aider à faire évoluer vos projets avec élégance.
- [Rome](https://github.com/tmspzz/Rome) - Un outil de cache pour les frameworks compilés avec Carthage.
- [swift-package-manager](https://github.com/apple/swift-package-manager) - Le gestionnaire de paquets du langage de programmation Swift.
- [Xcode Maven](http://sap-production.github.io/xcode-maven-plugin/site/) - Le plugin Xcode Maven permet d'exécuter des builds Xcode intégrés dans un cycle de vie Maven.

**[retour en haut](#contributing-and-collaborating)**

## Déploiement / Distribution

*Outils d'intégration continue, de livraison et de distribution pour publier des applications iOS.*

- [AppCenter](https://appcenter.ms) - Compilez, testez, publiez et surveillez en continu des applications pour toutes les plateformes.
- [Appcircle.io](https://appcircle.io) — Une plateforme DevOps mobile de niveau entreprise qui automatise la compilation, les tests et la publication sur les stores des applications mobiles, pour un cycle de publication plus rapide et plus efficace
- [AppLaunchpad](https://theapplaunchpad.com/) - Générateur gratuit de captures d'écran pour l'App Store.
- [Bitrise](https://www.bitrise.io) - Intégration et livraison continues pour mobile, avec des dizaines d'intégrations pour compiler, tester, déployer et collaborer.
- [boarding](https://github.com/fastlane/boarding) - Créez instantanément une page d'inscription simple pour les bêta-testeurs TestFlight.
- [buddybuild](https://www.buddybuild.com/) - Une plateforme d'itération mobile - compilez, déployez et collaborez.
- [Codemagic](https://codemagic.io) - Compilez, testez et livrez des applications iOS 20 % plus vite avec la CI/CD de Codemagic.
- [Crashlytics](https://firebase.google.com/products/crashlytics/) - Un service de rapports de plantage et de bêta-test.
- [deliver](https://github.com/fastlane/fastlane/tree/master/deliver) - Téléversez des captures d'écran, des métadonnées et votre application sur l'App Store en une seule commande.
- [fastlane](https://github.com/fastlane/fastlane) - Réunissez tous les outils de déploiement iOS dans un seul flux de travail rationalisé.
- [Instabug](https://instabug.com) - Retours dans l'application, rapports de bugs et de plantages ; corrigez les bugs plus vite grâce aux étapes de l'utilisateur, aux enregistrements vidéo, à l'annotation d'écran et à la journalisation des requêtes réseau.
- [LaunchKit](https://github.com/LaunchKit/LaunchKit) - Un ensemble d'outils web pour les développeurs d'applications mobiles, désormais open source !
- [Rollout.io](https://rollout.io/) - SDK pour patcher, corriger des bugs, modifier et manipuler des applications natives (Obj-c et Swift) en temps réel.
- [Runway](https://runway.team) - Des publications mobiles plus faciles pour les équipes. S'intègre à vos outils (gestion de versions, gestion de projet, CI, stores d'applications, rapports de plantage, etc.) pour offrir aux équipes mobiles une source unique de vérité autour de laquelle se retrouver pendant les cycles de publication. Autant d'automatisation que de collaboration.
- [Screenplay](https://screenplay.dev) - Retours arrière instantanés et déploiements canary pour iOS.
- [ScreenshotFramer](https://github.com/IdeasOnCanvas/ScreenshotFramer) - Avec Screenshot Framer, vous pouvez facilement créer de belles images localisées pour l'App Store.
- [Semaphore](https://semaphoreci.com/product/ios) - Service de CI/CD qui facilite la compilation, les tests et le déploiement d'applications pour n'importe quel appareil Apple. La prise en charge d'iOS est entièrement intégrée à Semaphore 2.0 : vous pouvez donc utiliser pour iOS les mêmes puissantes fonctionnalités de pipeline CI/CD que pour le développement sous Linux.
- [snapshot](https://github.com/fastlane/fastlane/tree/master/snapshot) - Automatisez la prise de captures d'écran localisées de votre application iOS sur chaque appareil.
- [TestFlight Beta Testing](https://developer.apple.com/testflight/) - Le service de bêta-test hébergé sur iTunes Connect (nécessite iOS 8 ou version ultérieure).
- [watchbuild](https://github.com/fastlane/watchbuild) - Recevez une notification dès que le traitement de votre build iTunes Connect est terminé.

**[retour en haut](#contributing-and-collaborating)**

## EventBus

*Bibliothèques de promesses et de futures pour vous aider à écrire un meilleur code asynchrone en Swift.*

- [Bolts](https://github.com/BoltsFramework/Bolts-ObjC) - Bolts est une collection de bibliothèques de bas niveau conçues pour faciliter le développement d'applications mobiles, notamment les tâches (promesses) et les liens d'application (liens profonds).
- [Bolts-Swift](https://github.com/BoltsFramework/Bolts-Swift) - Bolts est une collection de bibliothèques de bas niveau conçues pour faciliter le développement d'applications mobiles.
- [FutureKit](https://github.com/FutureKit/FutureKit) - Une bibliothèque Future/Promises basée sur Swift pour iOS et macOS.
- [Hydra](https://github.com/malcommac/Hydra) - Promises et Await - Écrivez un meilleur code asynchrone en Swift.
- [Promis](https://github.com/albertodebortoli/Promis) - Le framework de Futures et de Promises le plus simple en Swift. Pas de magie. Pas de code passe-partout.
- [Promise](https://github.com/khanlou/Promise) - Une bibliothèque de promesses pour Swift, basée en partie sur la spécification A+ de Javascript.
- [PromiseKit](https://github.com/mxcl/PromiseKit) - Des promesses pour iOS et macOS.
- [RWPromiseKit](https://github.com/deput/RWPromiseKit) - Une bibliothèque de promesses légère pour Objective-C.
- [signals-ios](https://github.com/uber/signals-ios) - Gestion d'événements typée.
- [SwiftEventBus](https://github.com/cesarferreira/SwiftEventBus) - Un bus d'événements de publication/abonnement optimisé pour iOS.
- [SwiftNotificationCenter](https://github.com/100mango/SwiftNotificationCenter) - Un NotificationCenter orienté protocoles, sûr au niveau des types, des threads et de la mémoire.
- [SwiftTask](https://github.com/ReactKit/SwiftTask) - Promesse + progression + pause + annulation + nouvelle tentative pour Swift.
- [then🎬](https://github.com/freshOS/then) - Du code asynchrone élégant en Swift.
- [When](https://github.com/vadymmarkov/When) - Une implémentation légère des promesses en Swift.

**[retour en haut](#contributing-and-collaborating)**

## Fichiers

*Gestion de fichiers, navigateur de fichiers, manipulation d'archives zip et observateurs de fichiers.*

- [AMSMB2](https://github.com/amosavian/AMSMB2) - Framework Swift pour se connecter à des partages SMB 2/3 sur iOS.
- [AppFolder](https://github.com/dreymonde/AppFolder) - AppFolder est un framework léger qui vous permet de concevoir une représentation conviviale et fortement typée des répertoires du conteneur de votre application.
- [FileBrowser](https://github.com/marmelroy/FileBrowser) - Puissant navigateur de fichiers en Swift pour iOS.
- [FileKit](https://github.com/nvzqz/FileKit) - Gestion de fichiers simple et expressive en Swift.
- [FileProvider](https://github.com/amosavian/FileProvider) - Remplaçant de FileManager pour les fichiers locaux, iCloud et distants (WebDAV/FTP/Dropbox/OneDrive/SMB2) sur iOS/tvOS et macOS.
- [KZFileWatchers](https://github.com/krzysztofzablocki/KZFileWatchers) - Un micro-framework pour observer les modifications de fichiers, locaux comme distants. Utile pour créer des outils de développement.
- [Zip](https://github.com/marmelroy/Zip) - Framework Swift pour compresser et décompresser des fichiers zip.
- [ZipArchive](https://github.com/ZipArchive/ZipArchive) - ZipArchive est une classe utilitaire simple pour compresser et décompresser des fichiers zip sur iOS et Mac.
- [ZIPFoundation](https://github.com/weichsel/ZIPFoundation) - Manipulation de fichiers ZIP sans effort en Swift.
- [ZipZap](https://github.com/pixelglow/ZipZap) - Bibliothèque d'entrées/sorties de fichiers zip pour iOS, macOS et tvOS.


**[retour en haut](#contributing-and-collaborating)**

## Programmation fonctionnelle

*Collection d'outils de programmation fonctionnelle en Swift.*

- [Argo](https://github.com/thoughtbot/Argo) - Bibliothèque fonctionnelle d'analyse JSON pour Swift.
- [Bow](https://github.com/bow-swift/bow) - Bibliothèque compagnon de programmation fonctionnelle typée pour Swift.
- [OptionalExtensions](https://github.com/RuiAAPeres/OptionalExtensions) - µframework Swift avec des extensions pour le type Optional.
- [Prelude](https://github.com/robrix/Prelude) - µframework Swift d'outils simples de programmation fonctionnelle.
- [Runes](https://github.com/thoughtbot/Runes) - Opérateurs infixes pour les fonctions monadiques en Swift.
- [Swiftx](https://github.com/typelift/Swiftx) - Types de données et fonctions fonctionnels pour n'importe quel projet.
- [Swiftz](https://github.com/typelift/Swiftz) -  Programmation fonctionnelle en Swift.

**[retour en haut](#contributing-and-collaborating)**

## Jeux

*Moteurs de jeu, frameworks et exemples de projets pour créer des jeux sur iOS.*

- [CollectionNode](https://github.com/bwide/CollectionNode) - Un framework Swift pour une collectionView dans SpriteKit.
- [glide engine](https://github.com/cocoatoucher/Glide) - Moteur basé sur SpriteKit et GameplayKit pour créer des jeux 2D, avec des exemples pratiques et des tutoriels.
- [Sage](https://github.com/nvzqz/Sage) - Une bibliothèque d'échecs multiplateforme pour Swift.
- [SKTiled](https://github.com/mfessenden/SKTiled) - Framework Swift pour travailler avec des ressources Tiled dans SpriteKit.
- [SwiftFortuneWheel](https://github.com/sh-khashimov/SwiftFortuneWheel) - Un framework multiplateforme pour des jeux de type Roue de la fortune.

**[retour en haut](#contributing-and-collaborating)**

## GCD

*Sucre syntaxique, outils et minuteurs pour Grand Central Dispatch.*

- [Async](https://github.com/duemunk/Async) - Sucre syntaxique en Swift pour les dispatchs asynchrones de Grand Central Dispatch.
- [GCDKit](https://github.com/JohnEstropia/GCDKit) - Grand Central Dispatch simplifié avec Swift.
- [GCDTimer](https://github.com/hemantasapkota/GCDTimer) - Minuteur Grand Central Dispatch (GCD) bien testé, en Swift.
- [YYDispatchQueuePool](https://github.com/ibireme/YYDispatchQueuePool) - Classe utilitaire iOS pour gérer les files de dispatch globales.

**[retour en haut](#contributing-and-collaborating)**

## Gestes

*Bibliothèques et outils pour gérer les gestes.*

- [DBPathRecognizer](https://github.com/didierbrun/DBPathRecognizer) - Outil de reconnaissance de gestes.
- [FDFullscreenPopGesture](https://github.com/forkingdog/FDFullscreenPopGesture) - Une catégorie de UINavigationController permettant d'activer, grâce à l'AOP, le geste de retour en plein écran dans le style système d'iOS 7+.
- [Sensitive](https://github.com/hellowizman/Sensitive) - Une façon particulière de travailler avec les gestes sur iOS.
- [SwiftyGestureRecognition](https://github.com/b3ll/SwiftyGestureRecognition) - Facilite le prototypage de UIGestureRecognizers dans les Playgrounds Xcode.
- [Tactile](https://github.com/delba/Tactile) - Une meilleure façon de gérer les gestes sur iOS.

**[retour en haut](#contributing-and-collaborating)**

## Graphismes

*Bibliothèques, utilitaires et outils pour CoreGraphics, CoreAnimation, SVG et CGContext.*

- [AnimatedGradientView](https://github.com/rwbutler/AnimatedGradientView) - Un framework simple pour ajouter des dégradés animés à votre application iOS.
- [Drawsana](https://github.com/Asana/Drawsana) - Framework iOS pour créer des vues de dessin matriciel et d'annotation d'images.
- [EZYGradientView](https://github.com/shashankpali/EZYGradientView) - Créez des dégradés et des dégradés flous sans écrire une seule ligne de code.
- [jot](https://github.com/IFTTT/jot) - Un framework iOS pour ajouter facilement des dessins et du texte à des images.
- [Macaw](https://github.com/exyte/macaw) - Bibliothèque de graphismes vectoriels puissante et facile à utiliser, avec prise en charge de SVG, écrite en Swift.
- [MKGradientView](https://github.com/maxkonovalov/MKGradientView) - Vue de dégradé basée sur Core Graphics, capable de produire des dégradés linéaires (axiaux), radiaux (circulaires), coniques (angulaires) et bilinéaires (à quatre points), écrite en Swift.
- [MPWDrawingContext](https://github.com/mpw/MPWDrawingContext) - Un wrapper Objective-C pour le CGContext de CoreGraphics.
- [NXDrawKit](https://github.com/Nicejinux/NXDrawKit) - NXDrawKit est un kit de dessin simple et facile, mais utile, pour iPhone.
- [Snowflake](https://github.com/onmyway133/Snowflake) - Du SVG en Swift.
- [SVGKit](https://github.com/SVGKit/SVGKit) - Affichez des images SVG et interagissez avec elles sur iOS / macOS, avec un rendu natif (CoreAnimation) (actuellement pris en charge uniquement sur iOS - le code macOS doit être mis à jour).
- [SwiftSVG](https://github.com/mchoe/SwiftSVG) -  Un analyseur SVG en une seule passe, avec plusieurs options d'interface (String, NS/UIBezierPath, CAShapeLayer et NS/UIView).
- [YYAsyncLayer](https://github.com/ibireme/YYAsyncLayer) - Classes utilitaires iOS pour le rendu et l'affichage asynchrones.

**[retour en haut](#contributing-and-collaborating)**

## Matériel

*Bibliothèques et utilitaires pour interagir avec le matériel des appareils iOS.*

### Bluetooth

*Bibliothèques pour gérer les appareils à proximité, outils BLE et wrappers de MultipeerConnectivity.*

- [BabyBluetooth](https://github.com/coolnameismy/BabyBluetooth) - La façon la plus simple d'utiliser le Bluetooth (BLE) sur iOS/MacOS.
- [Bleu](https://github.com/1amageek/Bleu) - Le BLE (Bluetooth LE) pour vous.
- [BlueCap](https://github.com/troystribling/BlueCap) - Framework Bluetooth LE pour iOS.
- [Bluejay](https://github.com/steamclock/bluejay) - Un framework Swift simple pour créer des applications Bluetooth LE fiables.
- [Bluetonium](https://github.com/e-sites/Bluetonium) - Mappage Bluetooth en Swift.
- [BluetoothKit](https://github.com/rhummelmose/BluetoothKit) - Communiquez facilement entre appareils iOS/macOS grâce au BLE.
- [Discovery](https://github.com/omergul/Discovery) - Une bibliothèque très simple pour découvrir les appareils à proximité et en récupérer des données (même si l'application pair fonctionne en arrière-plan).
- [LGBluetooth](https://github.com/LGBluetooth/LGBluetooth) - Bibliothèque simple, légère et à base de blocs, au-dessus de CoreBluetooth. Elle nettoiera votre code lié à Core Bluetooth.
- [MultiPeer](https://github.com/dingwilson/MultiPeer) - Multipeer est un wrapper du framework MultipeerConnectivity d'Apple pour la transmission de données hors ligne entre appareils Apple. Il permet de se connecter facilement et automatiquement à plusieurs appareils à proximité et de partager des informations via Bluetooth ou Wi-Fi.
- [PeerKit](https://github.com/jpsim/PeerKit) Un framework Swift open source pour créer des applications Multipeer Connectivity orientées événements et sans configuration.

**[retour en haut](#contributing-and-collaborating)**

### Appareil photo

*Mocks, ImagePickers et multiples options d'implémentations de caméra personnalisables*

- [BarcodeScanner](https://github.com/hyperoslo/BarcodeScanner) - Lecteur de codes-barres simple et élégant.
- [CameraKit-iOS](https://github.com/CameraKit/camerakit-ios) - Améliorez considérablement les performances et la facilité d'utilisation de l'appareil photo dans votre prochain projet iOS.
- [CameraManager](https://github.com/imaginary-cloud/CameraManager) - Classe Swift simple fournissant toutes les configurations nécessaires pour créer une vue de caméra personnalisée dans votre application.
- [Cool-iOS-Camera](https://github.com/GabrielAlva/Cool-iOS-Camera) - Une implémentation de caméra moderne et entièrement personnalisable pour iOS, réalisée avec AVFoundation.
- [ExyteMediaPicker](https://github.com/exyte/mediapicker) - Sélecteur de médias personnalisable
- [FastttCamera](https://github.com/IFTTT/FastttCamera) - Framework de caméra ultrarapide et facile pour iOS, avec des filtres personnalisables.
- [FDTake](https://github.com/fulldecent/FDTake) - Prenez facilement une photo ou une vidéo, ou choisissez-en une dans la photothèque.
- [Fusuma](https://github.com/ytakzk/Fusuma) - Navigateur de photos à la Instagram et fonctionnalité d'appareil photo en quelques lignes de code Swift.
- [HorizonSDK-iOS](https://github.com/HorizonCamera/HorizonSDK-iOS) - Bibliothèque iOS de pointe pour l'enregistrement vidéo et la prise de photos en temps réel.
- [HybridCamera](https://github.com/eonist/HybridCamera) - Appareil photo et caméra vidéo pour iOS, semblable à celui de SnapChat.
- [iOS-Depth-Sampler](https://github.com/shu223/iOS-Depth-Sampler) - Une collection d'exemples de code pour les API de profondeur.
- [LLSimpleCamera](https://github.com/omergul/LLSimpleCamera) - Un contrôle de caméra simple et personnalisable - enregistreur vidéo pour iOS.
- [Lumina](https://github.com/dokun1/Lumina) - Caméra complète qui prend des photos et des vidéos, diffuse des images, détecte des métadonnées et diffuse des prédictions CoreML.
- [MijickCamera](https://github.com/Mijick/Camera) - L'appareil photo en toute simplicité. Bibliothèque de caméra entièrement personnalisable qui réduit considérablement le temps et l'effort d'implémentation. Écrite avec et pour SwiftUI.
- [NextLevel](https://github.com/NextLevel/NextLevel) - Next Level est une bibliothèque de caméra pour la capture multimédia sur iOS.
- [RSBarcodes_Swift](https://github.com/yeahdongcn/RSBarcodes_Swift) - Lecteur et générateurs de codes-barres 1D et 2D pour iOS 8, avec des contrôles agréables. Désormais en Swift.
- [SCRecorder](https://github.com/rFlex/SCRecorder) - Moteur de caméra avec enregistrement par appui à la Vine, filtres animables, ralenti et édition de segments.
- [SwiftyCam](https://github.com/Awalz/SwiftyCam) -  Un framework de caméra iOS inspiré de Snapchat, écrit en Swift.
- [YPImagePicker](https://github.com/Yummypets/YPImagePicker) - Sélecteur d'images et filtres à la Instagram pour iOS.

**[retour en haut](#contributing-and-collaborating)**

### Force Touch

*Actions rapides et interactions Peek and Pop*

- [PeekView](https://github.com/itsmeichigo/PeekView) - PeekView prend en charge les actions Peek, Pop et d'aperçu sur les appareils iOS dépourvus de 3D Touch.
- [QuickActions](https://github.com/ricardopereira/QuickActions) - Wrapper Swift pour les actions rapides de l'écran d'accueil d'iOS (raccourcis d'icône d'application).

**[retour en haut](#contributing-and-collaborating)**

### iBeacon

*Bibliothèques de détection d'appareils et utilitaires iBeacon*

- [BeaconEmitter](https://github.com/lgaches/BeaconEmitter) - Transformez votre Mac en iBeacon.
- [JMCBeaconManager](https://github.com/izotx/JMCBeaconManager) - Une classe de gestion d'iBeacon chargée de détecter les balises à proximité.
- [MOCA Proximity](https://www.mocaplatform.com/features) - Plateforme payante de marketing de proximité qui vous permet d'ajouter d'étonnantes expériences de proximité à votre application.
- [OWUProximityManager](https://github.com/ohayon/OWUProximityManager) - iBeacons + CoreBluetooth.

**[retour en haut](#contributing-and-collaborating)**

### Géolocalisation

*Bibliothèques de suivi de la position, de détection de mouvement et de géorepérage*

- [AsyncLocationKit](https://github.com/AsyncSwift/AsyncLocationKit) - Wrapper du framework CoreLocation d'Apple utilisant la concurrence moderne de Swift (async/await).
- [BBLocationManager](https://github.com/benzamin/BBLocationManager) - Un gestionnaire de localisation pour implémenter facilement les services de localisation et le géorepérage sur iOS.
- [LocationManager](https://github.com/intuit/LocationManager) - Fournit une API asynchrone à base de blocs pour demander la position actuelle, une seule fois ou en continu.
- [set-simulator-location](https://github.com/lyft/set-simulator-location) - CLI pour définir la position dans le simulateur iOS.
- [SOMotionDetector](https://github.com/arturdev/SOMotionDetector) - Bibliothèque simple pour détecter les mouvements. Basée sur les mises à jour de position et l'accélération.
- [SwiftLocation](https://github.com/malcommac/SwiftLocation) - Suivi de la position et des balises en Swift.

**[retour en haut](#contributing-and-collaborating)**

### Autre matériel

*Utilitaires pour les accéléromètres, les gyroscopes, le retour haptique et les autres capteurs de l'appareil.*

- [DarkLightning](https://github.com/jensmeder/DarkLightning) - Tout simplement le moyen le plus rapide de transmettre des données entre iOS/tvOS et macOS.
- [Device](https://github.com/Ekhoo/Device) - Outil léger, écrit en Swift, pour détecter l'appareil actuel et la taille de l'écran.
- [Device.swift](https://github.com/schickling/Device.swift) - Bibliothèque ultralégère pour détecter l'appareil utilisé.
- [DeviceKit](https://github.com/devicekit/DeviceKit) - DeviceKit est un remplaçant de UIDevice sous forme de type valeur.
- [Haptico](https://github.com/iSapozhnik/Haptico) - Générateur de retour haptique facile à utiliser, avec prise en charge de la lecture de motifs.
- [Luminous](https://github.com/andrealufino/Luminous) - Luminous est un gros framework qui peut vous fournir de nombreuses informations (plus de 50) sur le système actuel.
- [MotionKit](https://github.com/MHaroonBaig/MotionKit) - Récupérez les données de l'accéléromètre, du gyroscope et du magnétomètre en seulement deux lignes de code ou presque. CoreMotion devient incroyablement simple.
- [NFCPassportReader](https://github.com/AndyQ/NFCPassportReader) - Bibliothèque Swift pour lire un passeport compatible NFC. Prend en charge BAC, Secure Messaging, ainsi que l'authentification active et passive. Nécessite iOS 13 ou version ultérieure.
- [SDVersion](https://github.com/sebyddd/SDVersion) - Bibliothèque Cocoa légère pour détecter le modèle de l'appareil utilisé et la taille de son écran.
- [TapticEngine](https://github.com/WorldDownTown/TapticEngine) - TapticEngine génère des vibrations sur les appareils iOS.
- [UIDeviceComplete](https://github.com/Nirma/UIDeviceComplete) - Extensions de UIDevice qui comblent les pièces manquantes.
- [WatchShaker](https://github.com/ezefranca/WatchShaker) - WatchShaker est un utilitaire watchOS, écrit en Swift, pour détecter vos mouvements de secousse.

**[retour en haut](#contributing-and-collaborating)**

## Mise en page

*Auto Layout, frameworks d'interface et une superbe liste d'outils pour simplifier la construction de mises en page*

- [Anchorage](https://github.com/Rightpoint/Anchorage) - Une collection d'opérateurs et d'utilitaires qui simplifient le code de mise en page iOS.
- [Auto Layout Magic](http://akordadev.github.io/AutoLayoutMagic/) - Construisez une seule scène et laissez Auto Layout Magic générer les contraintes pour vous ! Les scènes s'affichent parfaitement sur tous les appareils !
- [BrickKit](https://github.com/wayfair/brickkit-ios) - Avec BrickKit, vous pouvez créer simplement des mises en page complexes et adaptatives. Il est facile à utiliser et à étendre. Créez vos propres briques et comportements réutilisables.
- [Cartography](https://github.com/robb/Cartography) - Un DSL Auto Layout déclaratif pour Swift.
- [Cupcake](https://github.com/nerdycat/Cupcake) - Un moyen simple de créer et de disposer des composants d'interface pour iOS.
- [EasyPeasy](https://github.com/nakiostudio/EasyPeasy) - Auto Layout en toute simplicité.
- [Façade](https://github.com/mamaral/Facade) - La mise en page programmatique des vues pour le commun des mortels - une alternative à Auto Layout.
- [FDTemplateLayoutCell](https://github.com/forkingdog/UITableView-FDTemplateLayoutCell) - Cellule modèle à mise en page automatique pour calculer automatiquement la hauteur des UITableViewCell.
- [FlexLayout](https://github.com/layoutBox/FlexLayout) - FlexLayout enveloppe en douceur l'implémentation flexbox hautement optimisée [facebook/yoga](https://github.com/facebook/yoga) dans une syntaxe concise, intuitive et chaînable.
- [FLKAutoLayout](https://github.com/floriankugler/FLKAutoLayout) - Catégorie de UIView qui facilite la création de contraintes de mise en page dans le code.
- [Grid](https://github.com/exyte/Grid) - Le conteneur Grid le plus puissant, qui manquait à SwiftUI.
- [Layout](https://github.com/nicklockwood/layout) - Un framework d'interface déclaratif pour iOS.
- [Layoutless](https://github.com/DeclarativeHub/Layoutless) - Framework minimaliste de mise en page et de stylisation déclaratives, construit sur Auto Layout.
- [ManualLayout](https://github.com/isair/ManualLayout) - Bibliothèque flexible et facile à utiliser pour disposer manuellement les vues et les calques sur iOS et tvOS. Prend en charge AsyncDisplayKit.
- [Masonry](https://github.com/SnapKit/Masonry) - Exploitez la puissance des NSLayoutConstraints d'AutoLayout avec une syntaxe simplifiée, chaînable et expressive.
- [MisterFusion](https://github.com/marty-suzuki/MisterFusion) - Un DSL Swift pour AutoLayout. Sa syntaxe est extrêmement claire tout en restant concise, et elle peut en outre être utilisée en Swift comme en Objective-C.
- [MondrianLayout](https://github.com/muukii/MondrianLayout) - Un constructeur de mise en page basé sur un DSL pour AutoLayout.
- [MyLinearLayout](https://github.com/youngsoft/MyLinearLayout) - MyLayout est un puissant framework d'interface iOS implémenté en Objective-C. Il intègre les fonctionnalités d'Android Layout, d'iOS AutoLayout, de SizeClass, du float HTML/CSS, de flexbox et de bootstrap.
- [Neon](https://github.com/mamaral/Neon) - Un puissant framework Swift de mise en page programmatique d'interfaces.
- [PinLayout](https://github.com/layoutBox/PinLayout) - Mise en page rapide des vues Swift sans Auto Layout. Pas de magie, du code pur, un contrôle total et une vitesse fulgurante. Syntaxe concise, intuitive, lisible et chaînable.
- [PureLayout](https://github.com/PureLayout/PureLayout) - L'API ultime pour Auto Layout sur iOS et macOS — d'une simplicité impressionnante, d'une puissance immense. Compatible avec Objective-C et Swift.
- [QuickLayout](https://github.com/huri000/QuickLayout) - QuickLayout offre un moyen simple de gérer facilement Auto Layout dans le code.
- [Relayout](https://github.com/stevestreza/Relayout) - Microframework Swift pour déclarer des contraintes Auto Layout de manière fonctionnelle.
- [SnapKit](https://github.com/SnapKit/SnapKit) - Un DSL Autolayout en Swift pour iOS et macOS.
- [Stevia](https://github.com/freshOS/Stevia) - Mise en page élégante des vues pour iOS.
- [SwiftAutoLayout](https://github.com/indragiek/SwiftAutoLayout) - Petit DSL Swift pour Autolayout.
- [SwiftBond](https://github.com/DeclarativeHub/Bond) - Bond est un framework de liaison de données en Swift qui porte les concepts de liaison à un tout autre niveau. Il est simple, puissant, typé et multiparadigme.
- [SwiftBox](https://github.com/joshaber/SwiftBox) - Flexbox en Swift, utilisant css-layout de Facebook.
- [Swiftstraints](https://github.com/Skyvive/Swiftstraints) - Auto Layout en Swift en toute simplicité.
- [TinyConstraints](https://github.com/roberthein/TinyConstraints) -  Le sucre syntaxique qui rend Auto Layout plus doux pour les humains.
- [Yalta](https://github.com/kean/Align) - Une bibliothèque Auto Layout intuitive et puissante.
- [YogaKit](https://github.com/facebook/yoga/tree/master/YogaKit) - Puissant moteur de mise en page qui implémente Flexbox.

**[retour en haut](#contributing-and-collaborating)**

## Localisation

*Outils pour gérer les fichiers de chaînes, traduire et activer la localisation dans vos applications.*

- [attranslate](https://github.com/fkirc/attranslate) - Traduisez ou synchronisez de manière semi-automatique des fichiers .strings ou des fichiers multiplateformes dans différentes langues.
- [BartyCrouch](https://github.com/Flinesoft/BartyCrouch) - Mettez à jour/traduisez de manière incrémentielle vos fichiers Strings à partir du code et des Storyboards/XIB.
- [CrowdinSDK](https://github.com/crowdin/mobile-sdk-ios) - Le SDK iOS de Crowdin livre immédiatement à l'application toutes les nouvelles traductions du projet Crowdin.
- [Hodor](https://github.com/Aufree/Hodor) - Solution simple pour localiser votre application iOS.
- [IBLocalizable](https://github.com/PiXeL16/IBLocalizable) - Localisez vos vues directement dans Interface Builder avec IBLocalizable.
- [L10n-swift](https://github.com/Decybel07/L10n-swift) - Localisation d'une application avec possibilité de changer de langue "à la volée" et prise en charge des formes plurielles dans n'importe quelle langue.
- [LocalizationKit](https://github.com/willpowell8/LocalizationKit_iOS) - Gestion de la localisation en temps réel depuis un portail web. Gérez facilement vos textes et vos traductions sans redéploiement ni nouvelle soumission.
- [Localize](https://github.com/andresilvagomez/Localize) - Outil simple pour localiser des applications à l'aide de JSON ou de Strings, et bien sûr d'IBDesignables avec des extensions pour les composants d'interface.
- [Localize-Swift](https://github.com/marmelroy/Localize-Swift) - Localisation et i18n compatibles avec Swift 2.0, avec changement de langue dans l'application.
- [locheck](https://github.com/Asana/locheck) - Vérifiez l'exactitude des fichiers .strings, .stringsdict et strings.xml pour éviter les plantages et les mauvaises traductions.
- [Respresso Localization Converter](https://respresso.io/localization-converter) - Convertisseur de localisation multiplateforme pour iOS (.strings + accesseurs Objective-C), Android (strings.xml) et le Web (.json).
- [Rubustrings](https://github.com/dcordero/Rubustrings) - Vérifiez le format et la cohérence des fichiers Localizable.strings.
- [StringSwitch](https://stringswitch.com) - Convertissez facilement les fichiers .strings d'iOS au format strings.xml d'Android, et inversement.
- [Swifternalization](https://github.com/tomkowz/Swifternalization) - Localisez les applications iOS de manière plus intelligente à l'aide de fichiers JSON. Framework Swift.

**[retour en haut](#contributing-and-collaborating)**

## Journalisation

*C'est ici que vit le débogage. Outils, frameworks et intégrations de journalisation, et plus encore.*

- [Atlantis](https://github.com/DrewKiino/Atlantis) - Un puissant framework de journalisation Swift, indépendant du type d'entrée, conçu pour accélérer le développement avec une lisibilité maximale.
- [CleanroomLogger](https://github.com/emaloney/CleanroomLogger) - Une API de journalisation configurable et extensible basée sur Swift, simple, légère et performante.
- [CocoaLumberjack](https://github.com/CocoaLumberjack/CocoaLumberjack) - Un framework de journalisation rapide et simple, mais puissant et flexible, pour Mac et iOS.
- [Diagnostics](https://github.com/WeTransfer/Diagnostics) - Permettez aux utilisateurs de partager facilement des diagnostics avec votre équipe d'assistance pour fluidifier la correction des bugs.
- [Gedatsu](https://github.com/bannzai/gedatsu) - Fournit un format lisible pour les journaux de console des erreurs AutoLayout.
- [Log](https://github.com/delba/Log) - Un outil de journalisation avec des thèmes et des formateurs intégrés, et une API agréable pour définir les vôtres.
- [LogDog](https://log.dog) - LogDog est un SDK de débogage et de journalisation à distance (iOS et Android) doté d'une interface web. Il capture tous les journaux et requêtes en temps réel et permet de les intercepter. 
- [LxDBAnything](https://github.com/DeveloperLx/LxDBAnything) - Encadrez automatiquement n'importe quelle valeur ! Affichez des journaux sans aucun symbole de contrôle de format ! Changez radicalement vos habitudes de débogage !
- [NSLogger](https://github.com/fpillet/NSLogger) - un utilitaire de journalisation hautes performances qui affiche les traces émises par les applications clientes fonctionnant sous macOS, iOS et Android.
- [Pulse](https://github.com/kean/Pulse) - Pulse est un puissant système de journalisation pour les plateformes Apple. Natif. Construit avec SwiftUI.
- [QorumLogs](https://github.com/goktugyil/QorumLogs) — Utilitaire de journalisation Swift pour Xcode et Google Docs.
- [Rainbow](https://github.com/onevcat/Rainbow) - Une sortie console agréable pour les développeurs Swift.
- [SwiftTrace](https://github.com/johnno1962/SwiftTrace) - Tracez les appels de méthodes Swift et Objective-C.
- [SwiftyBeaver](https://github.com/SwiftyBeaver/SwiftyBeaver) - Journalisation pratique pendant le développement et en production.
- [SwiftyTextTable](https://github.com/scottrhoyt/SwiftyTextTable) - Un outil léger pour générer des tableaux en mode texte.
- [TinyConsole](https://github.com/Cosmo/TinyConsole) - Une petite console de journalisation pour afficher des informations pendant l'utilisation de votre application iOS.
- [Twitter Logging Service](https://github.com/twitter/ios-twitter-logging-service) - Twitter Logging Service est un framework de journalisation robuste et performant pour les clients iOS.
- [Watchdog](https://github.com/wojteklu/Watchdog) - Classe permettant de journaliser les blocages excessifs du thread principal.
- [Willow](https://github.com/Nike-Inc/Willow) - Willow est une bibliothèque de journalisation puissante mais légère, écrite en Swift.
- [XCGLogger](https://github.com/DaveWoodCom/XCGLogger) - Un framework de journalisation de débogage pour les projets Swift. Il vous permet de journaliser des détails dans la console (et éventuellement dans un fichier), comme vous le feriez avec NSLog ou println, mais avec des informations supplémentaires telles que la date, le nom de la fonction, le nom du fichier et le numéro de ligne.

**[retour en haut](#contributing-and-collaborating)**

## Apprentissage automatique

*Une collection de modèles de ML et de bibliothèques d'apprentissage profond et de réseaux de neurones*

- [AIToolbox](https://github.com/KevinCoble/AIToolbox) - Une boîte à outils de modules d'IA écrits en Swift : graphes/arbres, régression linéaire, machines à vecteurs de support, réseaux de neurones, ACP, k-moyennes, algorithmes génétiques, MDP, mélanges de gaussiennes.
- [Bender](https://github.com/xmartlabs/Bender) - Créez facilement des réseaux de neurones rapides. Utilisez des modèles TensorFlow. Metal sous le capot.
- [CoreML-Models](https://github.com/likedan/Awesome-CoreML-Models) - Une collection de modèles Core ML uniques.
- [DL4S](https://github.com/palle-k/DL4S) - Deep Learning for Swift : opérations tensorielles accélérées et réseaux de neurones dynamiques basés sur la différentiation automatique en mode inverse, pour tout appareil capable d'exécuter Swift.
- [iOS-GenAI-Sampler](https://github.com/shu223/iOS-GenAI-Sampler) - Une collection d'exemples d'IA générative sur iOS.
- [off-grid-mobile](https://github.com/alichherawalla/off-grid-mobile) - Exécutez des LLM, des modèles de vision et Stable Diffusion entièrement sur l'appareil. Pas d'Internet, aucune donnée ne quitte le téléphone. React Native, prend en charge iOS et Android. Licence MIT.
- [Swift-AI](https://github.com/Swift-AI/Swift-AI) - La bibliothèque d'apprentissage automatique de Swift.
- [Swift-Brain](https://github.com/vlall/Swift-Brain) - Structures de données d'intelligence artificielle et d'apprentissage automatique, et algorithmes Swift pour le développement iOS de demain. Théorème de Bayes, réseaux de neurones et encore plus d'IA.
- [SwiftCoreMLTools](https://github.com/JacopoMangiavacchi/SwiftCoreMLTools) - Une bibliothèque Swift pour créer et exporter des modèles CoreML en Swift.
- [Tensorflow-iOS](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/examples/ios) - Le portage officiel pour iOS de la puissante bibliothèque de réseaux de neurones conçue par Google.
- [TensorSwift](https://github.com/qoncept/TensorSwift) - Une bibliothèque légère pour calculer des tenseurs en Swift, avec des API similaires à celles de TensorFlow.

**[retour en haut](#contributing-and-collaborating)**

## Cartographie

*SDK de cartographie, utilitaires de géolocalisation, outils de regroupement et moteurs de rendu d'itinéraires.*

- [Cluster](https://github.com/efremidze/Cluster) - Regroupement (clustering) facile des annotations de carte.
- [ClusterKit](https://github.com/hulab/ClusterKit) - Un framework iOS de regroupement sur carte ciblant MapKit, Google Maps et Mapbox.
- [FlyoverKit](https://github.com/SvenTiigi/FlyoverKit) - FlyoverKit vous permet de présenter sans effort de superbes survols à 360° sur votre MKMapView, tout en conservant toutes les possibilités de configuration.
- [GEOSwift](https://github.com/GEOSwift/GEOSwift) - Le moteur géographique de Swift.
- [PXGoogleDirections](https://github.com/poulpix/PXGoogleDirections) - Utilitaire pour l'API Google Directions sur iOS, écrit en Swift.
- [WhirlyGlobe-Maply](https://github.com/mousebird/WhirlyGlobe) - SDK de globe 3D et de carte plane pour iOS. Cette boîte à outils dispose d'une API étendue pour un contrôle précis de la carte ou du globe. Elle lit une grande variété de formats de données SIG.

**[retour en haut](#contributing-and-collaborating)**

## Mathématiques

*Frameworks, fonctions et bibliothèques mathématiques pour les opérations personnalisées, les calculs statistiques et plus encore.*

- [BigInt](https://github.com/attaswift/BigInt) - Arithmétique en précision arbitraire en pur Swift.
- [Expression](https://github.com/nicklockwood/Expression) - Une bibliothèque Mac et iOS pour évaluer des expressions numériques à l'exécution.
- [iosMath](https://github.com/kostub/iosMath) - Une bibliothèque pour afficher des équations mathématiques au rendu soigné. Permet la composition de formules mathématiques LaTeX sur iOS.
- [Matft](https://github.com/jjjkkkjjj/Matft) - Matft est une bibliothèque de type Numpy en Swift. Matft nous permet de manipuler facilement des tableaux à n dimensions en Swift.
- [Metron](https://github.com/toineheuvelmans/Metron) - Metron est une collection complète de fonctions et de types géométriques qui étendent les primitives géométriques 2D fournies par CoreGraphics.
- [SigmaSwiftStatistics](https://github.com/evgenyneu/SigmaSwiftStatistics) - Une collection de fonctions de calcul statistique.
- [Upsurge](https://github.com/alejandro-isaza/Upsurge) - Des mathématiques en Swift.
- [VectorMath](https://github.com/nicklockwood/VectorMath) - Une bibliothèque Swift pour Mac et iOS qui implémente les fonctions courantes de vecteurs et de matrices 2D et 3D, utiles pour les jeux ou les graphismes vectoriels.

**[retour en haut](#contributing-and-collaborating)**

## Médias

*Bibliothèques pour gérer l'audio, les images, les GIF, la vidéo et d'autres formats multimédias.*
