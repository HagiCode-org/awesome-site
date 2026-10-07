# Génial Swift
 
<!-- 

PLEASE DO NOT UPDATE THIS FILE, UPDATE CONTENTS.JSON INSTEAD. THANK YOU :-)

 -->



| Génial | Linux | Projets | Mise à jour |
|:-------:|:-----:|:--------:|:-------:|
| [![Génial](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) | :pingouin: | 1107 | 3 août 2026 |

En partenariat avec:

[![Mouvement de code](https://github.com/matteocrippa/awesome-swift/blob/master/.github/images/codemotion_logo.png?raw=true)](https://codemo.tech/partners)



### Sommaire

- [Guides](#guides)
  - [Lettre d'information](#newsletter)
  - [Guides officiels](#official-guides)
  - [Guides de style](#style-guides)
  - [Guides de tiers](#third-party-guides)
- [Chaudières](#boilerplates)
- [REPL](#repl)
- [Support de l'éditeur](#editor-support)
  - [Emacs](#emacs)
  - [Google Colaboratoire](#google-colaboratory)
  - [Vim](#vim)
- [Critères de référence](#benchmark)
- [Conversions](#converters)
- [Autres listes impressionnantes](#other-awesome-lists)
- [Gestionnaires de la dépendance](#dependency-managers)
- [Modèles](#patterns)
- [Divers](#misc)
- [Libs](#libs)
  - [Accessibilité](#accessibility)
  - [AI](#ai)
  - [Algorithme](#algorithm)
  - [Analyse](#analytics)
  - [Animation](#animation)
  - [API](#api)
  - [Routage de l'application](#app-routing)
  - [App Store](#app-store)
  - [Audio](#audio)
  - [La réalité augmentée](#augmented-reality)
  - [Authentification](#authentication)
  - [Bots](#bots)
  - [Cache](#cache)
  - [Graphique](#chart)
  - [Chat](#chat)
  - [Couleurs](#colors)
  - [Ligne de commande](#command-line)
  - [Monnaie](#concurrency)
  - [Monnaie](#currency)
  - [Gestion des données](#data-management)
    - [CBOR](#cbor)
    - [Données de base](#core-data)
    - [CSV](#csv)
    - [Base de secours](#firebase)
    - [GraphiqueQL](#graphql)
    - [JSON](#json)
    - [Stock de valeurs clés](#key-value-store)
    - [MangoDB](#mongodb)
    - [Multibase de données](#multi-database)
    - [ORM](#orm)
    - [Autres données](#other-data)
    - [Royaume](#realm)
    - [Pilotes SQL](#sql-drivers)
    - [SQLite](#sqlite)
    - [TOML](#toml)
    - [XML](#xml)
    - [YAML](#yaml)
    - [ZIP](#zip)
  - [Date](#date)
  - [Injection de la dépendance](#dependency-injection)
  - [Appareil](#device)
  - [Documentation](#documentation)
  - [Courriel](#email)
  - [Systèmes embarqués](#embedded-systems)
    - [Périphériques](#peripherals)
  - [Événements](#events)
  - [Fichiers](#files)
  - [Polices](#fonts)
  - [Moteur de jeu](#game-engine)
    - [2D](#game-engine-2d)
  - [Jeux](#games)
  - [Geste](#gesture)
  - [Matériel](#hardware)
    - [Touch 3D](#3d-touch)
    - [Bluetooth](#bluetooth)
    - [Caméra](#camera)
      - [Code barre](#barcode)
    - [Commentaires haptiques](#haptic-feedback)
    - [iBeacon](#ibeacon)
    - [Capteurs](#sensors)
  - [Images](#images)
  - [Codage de la valeur clé](#key-value-coding)
  - [Clavier](#keyboard)
  - [Kit](#kit)
  - [Mise en page](#layout)
    - [Mise en page automatique](#auto-layout)
  - [Localisation](#localization)
  - [Lieu](#location)
  - [Exploitation forestière](#logging)
  - [Cartes](#maps)
  - [Mathématiques](#math)
  - [Traitement des langues naturelles](#natural-language-processing)
  - [Réseau](#network)
    - [HTML](#html)
    - [Protocole de messagerie](#messaging-protocol)
    - [SOAP](#soap)
    - [Socket](#socket)
    - [Serveur Web](#webserver)
  - [OCR](#ocr)
  - [Optimisation](#optimization)
  - [PDF](#pdf)
  - [Qualité](#quality)
  - [Scénario](#scripting)
  - [SDK](#sdk)
  - [Sécurité](#security)
    - [Cryptographie](#cryptography)
    - [Porte-clés](#keychain)
  - [Streaming](#streaming)
  - [Style](#styling)
  - [SVG](#svg)
  - [Système](#system)
  - [Essais](#testing)
    - [Mock](#mock)
  - [Texte](#text)
  - [Fil](#thread)
  - [Prestations de chômage](#ui)
    - [Alerte](#alert)
    - [Flou](#blur)
    - [Bouton](#button)
    - [Calendrier](#calendar)
    - [Cartes](#cards)
    - [Formulaire](#form)
    - [HUD](#hud)
    - [Étiquette](#label)
    - [Menu](#menu)
    - [Pagination](#pagination)
    - [Paiement](#payment)
    - [Autorisations](#permissions)
    - [Barres de défilement](#scroll-bars)
    - [Affichage des piles](#stackview)
    - [Commutateur](#switch)
    - [onglet](#tab)
    - [Modèle](#template)
    - [Champ texte](#textfield)
    - [Transition](#transition)
    - [3D](#ui-3d)
    - [UICollectionView](#uicollectionview)
    - [UITableView](#uitableview)
    - [Passage](#walkthrough)
  - [Utilitaire](#utility)
  - [Validation](#validation)
    - [Numéro de téléphone](#phone-numbers)
  - [Gestionnaire de versions](#version-manager)
  - [Vidéo](#video)
- [Sans serveur](#serverless)

## Guides
*Une liste impressionnante de guides associés à Swift.* 

### Lettre d'information
[haut de page](#readme) 

* [Open Source Updates for Swift Projects](https://ossp-updates.beehiiv.com/) - Un bulletin bihebdomadaire pour vous donner les dernières mises à jour sur les projets open source populaires et inconnus écrits ou liés à Swift.

### Guides officiels
[haut de page](#readme) 

* [API Design Guidelines](https://www.swift.org/documentation/api-design-guidelines/) - Lignes directrices officielles de conception d'API Swift.
* [Apple eBook](https://books.apple.com/us/book/the-swift-programming-language-swift-5-7/id881256329) - Livre électronique officiel Apple pour débutants Swift.
* [Getting Started](https://www.swift.org/getting-started/) - Trouvez des informations sur la façon d'utiliser le langage de programmation Swift.
* [Introducing SwiftUI](https://developer.apple.com/tutorials/swiftui) - Didacticiel officiel SwiftUI avec 4 heures de contenu et didacticiels interactifs.

### Guides de style
[haut de page](#readme) 

* [Airbnb](https://github.com/airbnb/swift) - Le Guide du style officiel d'Airbnb.
* [Google](https://google.github.io/swift/) - Ce guide de style est basé sur l'excellent style de bibliothèque standard Swift d'Apple et intègre également les retours d'utilisation de plusieurs projets Swift dans Google.
* [LinkedIn](https://github.com/linkedin/swift-style-guide) - Guide de style officiel de LinkedIn.
* [Raywenderlich](https://github.com/kodecocodes/swift-style-guide) - Le guide Raywenderlich, il faut lire.

### Guides de tiers
[haut de page](#readme) 

* [30 Days of Swift](https://github.com/allenwong/30DaysofSwift) - Un tutoriel de 30 jours.
* [About Swift](https://github.com/NicolaLancellotti/about-swift) - Une aire de jeux sur la langue Swift.
* [Awesome Swift Education](https://github.com/hsavit1/Awesome-Swift-Education) - Une liste organisée de sujets linguistiques essentiels Swift.
* [Conferences.digital](https://github.com/zagahr/Conferences.digital) - Regardez les vidéos de la conférence dans une application macOS native.
* [Developing iOS Apps with Swift](https://podcasts.apple.com/us/podcast/developing-ios-11-apps-with-swift/id1315130780) - Stanford par Paul Hegarty.
* [Hacking With Swift](https://www.hackingwithswift.com) - Cours de formation complet qui enseigne le développement d'applications à travers 30 projets pratiques, gratuitement.
* [Ray Wenderlich Tutorials, Videos, Podcasts and books](https://www.kodeco.com) - Tutoriels de programmation de haute qualité.
* [Swift & SwiftUI Tutorials](http://ww1.janeshswift.com) - SwiftUI apprend avec Ease.
* [Swift Education](https://github.com/swifteducation) - Une communauté d'éducateurs partageant du matériel pour enseigner Swift et le développement d'applications.
* [swift-tips](https://github.com/vincent-pradeilles/swift-tips) - Une série de conseils utiles de Vincent Pradeilles.
* [SwiftDoc](https://sosumi.ai/) - Documentation générée automatiquement.
* [SwiftGuide CN](https://github.com/ipader/SwiftGuide) - Un guide chinois.
* [SwiftTips](https://github.com/JohnSundell/SwiftTips) - Une collection de conseils utiles de John Sundell.

## Chaudières

* [iOS project template](https://github.com/messeb/ios-project-template) - Modèle de projet iOS avec voies fastlane, emplois Travis CI et intégrations GitHub de Codecov, HoundCI pour SwiftLint et Danger.
* [Model-View-Presenter template](https://github.com/onl1ner/ios-mvp-template) - Un modèle flexible et facile créé pour accélérer le développement de votre application iOS basée sur le modèle MVP.
* [Swift Module Template](https://github.com/fulldecent/swift6-module-template) - Un point de départ estimé pour des modules impressionnants et réutilisables.

## REPL

* [Online Swift Playground](http://online.swiftplayground.run) - Terrain de jeux Swift en ligne.
* [SwiftFiddle](https://swiftfiddle.com) - Terrain de jeu pour faire, partager et intégrer le code Swift.

## Support de l'éditeur
*Support pour vos éditeurs préférés.* 

### Emacs
[haut de page](#readme) 

* [swift-mode](https://github.com/swift-emacs/swift-mode) - Prise en charge d'Emacs, y compris la prise en charge partielle des erreurs de contrôle de vol.

### Google Colaboratoire
[haut de page](#readme) 

* [swift-colab](https://github.com/philipturner/swift-colab) - Exécutez Swift dans un navigateur.

### Vim
[haut de page](#readme) 

* [swift-vim](https://github.com/keith/swift.vim) - Les fichiers d'exécution.
* [vim-polyglot](https://github.com/sheerun/vim-polyglot) - Pack de langue pour la vim qui comprend la vim-swift.

## Critères de référence

* [xcprofiler](https://github.com/giginet/xcprofiler) - Utilitaire de ligne de commande pour la compilation de profil.

## Conversions

* [Swiftify](https://swiftify.com/#/converter/code/) - Objectif-C au convertisseur de code en ligne Swift et extension Xcode.
* [Zolang](https://github.com/Zolang/Zolang) :penguin: - Un DSL pour générer du code dans plusieurs langages de programmation.

## Autres listes impressionnantes
*Consultez les applications de ces projets :* 
* [Awesome iOS Interview](https://github.com/dashvlas/awesome-ios-interview) - Liste des questions qui vous aident à vous préparer à l'entrevue.
* [awesome-macOS](https://github.com/iCHAIT/awesome-macOS) - Une liste d'applications, de logiciels, d'outils et de choses brillantes pour macOS.
* [example-ios-apps](https://github.com/jogendra/example-ios-apps) - Une liste étonnante pour les personnes qui sont des débutants et l'apprentissage ios développement et pour les développeurs ios qui ont besoin de n'importe quelle application ou fonctionnalité.
* [open-source-ios-apps](https://github.com/dkhamsing/open-source-ios-apps) - Une liste collaborative d'applications iOS open-source.
* [open-source-mac-os-apps](https://github.com/serhii-londar/open-source-mac-os-apps) - Liste impressionnante des applications open source pour macOS.

## Gestionnaires de la dépendance
*Logiciel de gestionnaire de dépendance pour Swift.* 
* [Accio](https://github.com/JamitLabs/Accio) - Un gestionnaire de dépendance basé sur SwiftPM pour iOS &Co. avec améliorations sur Carthage.
* [Carthage](https://github.com/Carthage/Carthage) - Un nouveau directeur de la dépendance.
* [CocoaPods](https://github.com/CocoaPods/CocoaPods) - Le gestionnaire de la dépendance le plus utilisé.
* [Mint](https://github.com/yonaskolb/Mint) - Un gestionnaire de paquets qui installe et exécute les outils de ligne de commande Swift.
* [swift-package-manager](https://github.com/swiftlang/swift-package-manager) - SPM est le gestionnaire de paquets pour le langage de programmation Swift.
* [Swiftly](https://github.com/swiftlang/swiftly) - Installation de la chaîne d'outils Swift CLI pour installer différentes versions de Swift.

## Modèles

* [App Architecture](https://github.com/objcio/app-architecture) - Un exemple de Code du Livre d'Architecture App.
* [CleanArchitectureRxSwift](https://github.com/sergdort/ModernCleanArchitectureSwiftUI) - Exemple d'architecture propre de l'application iOS en utilisant RxSwift.
* [Design-Patterns-In-Swift](https://github.com/ochococo/Design-Patterns-In-Swift) - Des dessins.
* [GoodReactor](https://github.com/GoodRequest/GoodReactor) - GoodReactor est un cadre de reactor d'inspiration Redux pour la communication entre le modèle View, le contrôleur View et le coordinateur.
* [Reactant](https://github.com/Brightify/Reactant) - Réactif est une architecture réactive pour iOS.
* [ReduxUI](https://github.com/gre4ixin/ReduxUI) - Cadre Redux pour une utilisation facile avec SwiftUI.
* [SimplexArchitecture](https://github.com/Ryu0118/swiftui-simplex-architecture) - Une architecture simple qui découple l'état change de la vue de SwiftUI
* [Spin](https://github.com/Spinners/Spin.Swift) - Fournit une mise en œuvre polyvalente de Feedback Loop fonctionnant avec RxSwift, RéactiveSwift et Combiner.
* [StateViewController](https://github.com/davidask/StateViewController) - Composition de contrôleur UIVIew – le remède MVC pour les contrôleurs de vue massive.
* [SwiftUI Atom Properties](https://github.com/ra1028/swiftui-atom-properties) - Une bibliothèque réactive d'injection de données et de dépendance pour SwiftUI x Concurrency.
* [The Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture) - Une bibliothèque pour les applications de construction d'une manière cohérente et compréhensible, avec la composition, les tests et l'ergonomie en tête.
* [Viperit](https://github.com/ferranabello/Viperit) - Cadre Viper pour iOS.

## Divers
*Divers Projets liés à la vitesse 
* [Beak](https://github.com/yonaskolb/Beak) - Une interface en ligne de commande pour vos scripts Swift.
* [BetterCodable](https://github.com/marksands/BetterCodable) - Élevez votre niveau `Codable` structurant à travers des enveloppes de propriété. L'objectif de ces emballages de propriété est d'éviter de mettre en œuvre une coutume `init(from decoder: Decoder)` Je jette et souffre à travers la plaque de chaudière.
* [CodableWrappers](https://github.com/GottaGetSwifty/CodableWrappers) - Une collection de PropertyWrappers pour faciliter la sérialisation sur mesure des types de codables.
* [Forked](https://github.com/drewmccormack/Forked) - Approche généralisée de gestion des données partagées dans les applications Swift pour soutenir les applications locales.
* [Fugen](https://github.com/almazrafi/Fugen) - Un outil de ligne de commande pour exporter des ressources et générer du code à partir de vos fichiers Figma.
* [MemberwiseInit](https://github.com/gohanlon/swift-memberwise-init-macro) - `@MemberwiseInit` est un Macro Swift qui peut plus souvent fournir votre intention `init`, tout en suivant la même sémantique safe-by-default des initialisateurs memberwise de Swift.
* [Model2App](https://github.com/Q-Mobile/Model2App) - Transformez votre modèle de données en une application CRUD fonctionnant.
* [Surmagic](https://github.com/gurhub/surmagic) - Créez facilement XCFrameworks ! Un outil de ligne de commande pour créer XCFramework pour plusieurs plateformes à un seul coup ! iOS, Mac Catalyst, tvOS, macOS et watchOS.
* [SwagGen](https://github.com/yonaskolb/SwagGen) :penguin: - Un outil de ligne de commande pour générer une API REST à partir d'une spécification Swagger basée sur des modèles Stencil.
* [Swiftbrew](https://github.com/swiftbrew/Swiftbrew) - Homebrew pour les paquets Swift.
* [SwiftGen](https://github.com/SwiftGen/SwiftGen) - Une suite d'outils pour générer automatiquement du code pour différents actifs de votre projet.
* [SwiftKit](https://github.com/SvenTiigi/SwiftKit) - Commencez votre prochain cadre Swift Open-Source.
* [SwiftPlate](https://github.com/JohnSundell/SwiftPlate) - Générer facilement des projets-cadres transplateforme à partir de la ligne de commande.
* [Toybox](https://github.com/giginet/Toybox) - Gestion de terrain de jeu Xcode facile.
* [Tuist](https://github.com/tuist/tuist) - Un outil de ligne de commande open source pour créer, maintenir et interagir avec vos projets Xcode à l'échelle.
* [xc](https://github.com/s2mr/xc) - Un outil pour ouvrir le fichier de projet Xcode par la version spécifiée.
* [xcbeautify](https://github.com/cpisciotta/xcbeautify) - Petit outil d'embellissement pour xcodebuild.
* [XcodeGen](https://github.com/yonaskolb/XcodeGen) - Outil pour générer des projets Xcode à partir d'un fichier YAML et de votre répertoire de projet.
* [xcodeproj](https://github.com/tuist/xcodeproj) - Une bibliothèque pour lire, mettre à jour et écrire des projets et des espaces de travail Xcode.

## Libs
*Vous trouverez ici une liste d'extraits et de libs pour vos projets Swift.* 

### Accessibilité
[haut de page](#readme) 

* [Capable](https://github.com/chrs1885/Capable) - Gardez une trace des paramètres d'accessibilité, utilisez des couleurs de contraste élevées et utilisez des polices évolutives pour permettre aux utilisateurs handicapés d'utiliser votre application.

### AI
*Libs pour les projets basés sur l'IA (Machine Learning, Neural Networks, etc.)* [haut de page](#readme) 

* [CoreML-Models](https://github.com/likedan/Awesome-CoreML-Models) - Une collection de modèles ML Core uniques.
* [DL4S](https://github.com/palle-k/DL4S) - Différenciation automatique, opérations de tenseur rapides et réseaux neuronaux dynamiques des CNN et RNN aux transformateurs.
* [EdgeRunner](https://github.com/christopherkarani/EdgeRunner) - Inférence LLM locale rapide pour Apple Silicon. Construit en Swift et Metal depuis le sol.
* [Espresso](https://github.com/christopherkarani/Espresso) - Compilez les transformateurs directement pour le moteur neuronal d'Apple.
* [Fazm](https://github.com/m13v/fazm) - Un agent AI contrôlé par la voix pour macOS utilisant les API d'accessibilité et ScreenCaptureKit.
* [Open Agent SDK](https://github.com/terryso/open-agent-sdk-swift) - Open-source Agent SDK avec boucle d'agent complète, 34 outils intégrés, orchestration sous-agent, intégration MCP et support LLM multi-fournisseur.
* [OpenAI](https://github.com/MacPaw/OpenAI) - Paquet Swift pour API publique OpenAI.
* [swift-coding-agent](https://github.com/ivan-magda/swift-coding-agent) - Agent de codage terminal avec sous-agents et compactage contextuel.

### Algorithme
[haut de page](#readme) 

* [Algorithm](https://github.com/CosmicMind/Algorithm) - Un ensemble d'outils pour écrire des algorithmes et des modèles de probabilité.
* [BTree](https://github.com/attaswift/BTree) - Collections triées rapidement pour Swift utilisant des arbres B en mémoire.
* [swift-algorithm-club](https://github.com/kodecocodes/swift-algorithm-club) - Algorithmes et structures de données, avec explications.
* [SwiftLCS](https://github.com/Frugghi/SwiftLCS) :penguin: - mise en œuvre de l'algorithme de subséquence commun le plus long (LCS).

### Analyse
*Bibliothèques liées à l'analyse pour suivre facilement votre utilisation de l'application* [haut de page](#readme) 

* [Aptabase](https://github.com/aptabase/aptabase) - Open Source, Privacy-First et Simple Analytics pour les applications Swift.
* [Scout](https://github.com/kasianov-mikhail/scout) - Enregistrement de qualité de production SDK pour les applications iOS en utilisant CloudKit comme moteur.
* [Tracker Aggregator](https://github.com/kafejo/Tracker-Aggregator) - couche d'abstraction analytique polyvalente.
* [Umbrella](https://github.com/devxoul/Umbrella) - Couche d'abstraction analytique.

### Animation
*Libs pour aider à l'animation* [haut de page](#readme) 

* [Advance](https://github.com/timdonnelly/Advance) - Un cadre d'animation puissant pour iOS, tvOS et OS X.
* [AnimatedGradient](https://github.com/exyte/AnimatedGradient) - Bibliothèque de dégradé linéaire animée écrite avec SwiftUI
* [ChainPageCollectionView](https://github.com/jindulys/ChainPageCollectionView) - Mise en page et animation de la collection de deux niveaux.
* [CocoaSprings](https://github.com/MacPaw/CocoaSprings) - Animations de printemps interactives pour iOS/macOS.
* [Comets](https://github.com/cruisediary/Comets) - Animer les particules.
* [Ease](https://github.com/roberthein/Ease) - Animez tout avec Ease.
* [EasyAnimation](https://github.com/icanzilb/EasyAnimation) - Une bibliothèque pour prendre le pouvoir de UIView.animateWithDuration(_:, animations :...) à un tout nouveau niveau.
* [Elephant](https://github.com/s2mr/Elephant) - Élégant kit d'animation SVG.
* [FlightAnimator](https://github.com/AntonTheDev/FlightAnimator) - Cadre d'animation de base basé sur les blocs naturels.
* [Gemini](https://github.com/shoheiyokoyama/Gemini) - Gemini est un riche cadre d'animation par rouleau.
* [IBAnimatable](https://github.com/IBAnimatable/IBAnimatable) - Conception et prototype d'interface utilisateur, d'interaction, de navigation, de transition et d'animation pour App Store prêt Apps dans Interface Builder avec IBAnimable.
* [Interpolate](https://github.com/marmelroy/Interpolate) - Cadre d'interpolation pour créer des animations interactives axées sur les gestes.
* [lottie-ios](https://github.com/airbnb/lottie-ios) - Une bibliothèque iOS pour rendre nativement les animations vectorielles après effets.
* [Pastel](https://github.com/cruisediary/Pastel) - Effet d'animation progressif comme Instagram.
* [Poi](https://github.com/HideakiTouhara/Poi) - Poi vous fait utiliser l'interface utilisateur de carte comme l'interface utilisateur. Vous pouvez l'utiliser comme méthode tableview.
* [Presentation](https://github.com/hyperoslo/Presentation) - Une bibliothèque pour vous aider à faire des tutoriels, des notes de sortie et des pages animées.
* [Pulsator](https://github.com/shu223/pulsator) - Animation d'impulsion pour iOS.
* [Sica](https://github.com/cats-oss/Sica) - Animation de base d'interface simple. Exécuter une animation sans danger de type séquentiellement ou parallèlement.
* [Spring](https://github.com/MengTo/Spring) - Une bibliothèque pour simplifier les animations iOS.
* [SpriteKitEasingSwift](https://github.com/craiggrummitt/SpriteKitEasingSwift) - Mieux vaut s'occuper de SpriteKit.
* [spruce-ios](https://github.com/willowtreeapps/spruce-ios) - Des animations chorégraphiques à l'écran.
* [Stellar](https://github.com/AugustRush/Stellar) - Une bibliothèque d'animation physique.
* [TheAnimation](https://github.com/marty-suzuki/TheAnimation) - Enveloppe CAAnimation sans danger. Il empêche de définir de mauvaises valeurs de type.
* [ViewAnimator](https://github.com/marcosgriselli/ViewAnimator) - Ça donne vie à ton UI avec une seule ligne.
* [YapAnimator](https://github.com/yapstudios/YapAnimator) - Votre système d'animation rapide et amical basé sur la physique.

### API
*Libs rapides pour accéder aux services API tiers* [haut de page](#readme) 

* [GitHubAPI](https://github.com/serhii-londar/GithubAPI) - Mise en œuvre de l'API GitHub REST v3.
* [GitHubRestAPISwiftOpenAPI](https://github.com/Wei18/github-rest-api-swift-openapi) - L'API REST de GitHub générée comme code Swift à partir de la spécification OpenAPI.
* [PXGoogleDirections](https://github.com/poulpix/PXGoogleDirections) - Aide API Google Directions.
* [RandomUserSwift](https://github.com/dingwilson/RandomUserSwift) - Cadre pour générer des utilisateurs aléatoires - Un SDK non officiel pour randomuser.me.
* [reddift](https://github.com/sonsongithub/reddift) - l'emballage de l'API.
* [SwiftDisc](https://github.com/M1tsumi/SwiftDisc) - Discord API bibliothèque pour les robots et les intégrations.
* [Swifter Twitter](https://github.com/mattdonnelly/Swifter) - Cadre Twitter.
* [Swiftkube](https://github.com/swiftkube/client) :penguin: - Client rapide pour Kubernetes.
* [SwiftlySalesforce](https://github.com/mike4aday/SwiftlySalesforce) - Cadre pour le développement rapide des applications iOS natives qui s'intègrent à Salesforce.
* [SwiftyInsta](https://github.com/TheM4hd1/SwiftyInsta) - API privée et sans tokenless Instagram RESTful.
* [YouTubeKit](https://github.com/b5i/YouTubeKit) - Interagir avec l'API YouTube sans clé API.

### Routage de l'application
*Systèmes internes de routage des applications.* [haut de page](#readme) 

* [Appz](https://github.com/SwiftKitz/Appz) - Lancez des applications externes et des liens profonds avec facilité.
* [Crossroad](https://github.com/giginet/Crossroad) - :oncoming bus: Crossroad est un routeur d'URL axé sur le traitement des schémas d'URL personnalisés.
* [LightRoute](https://github.com/SpectralDragon/LiteRoute) - Routage entre les modules VIPER.
* [Linker](https://github.com/MaksimKurpa/Linker) - Mode léger pour gérer les liens profonds internes et externes pour iOS.
* [MonarchRouter](https://github.com/nikans/MonarchRouter) - Routeur basé sur l'état et l'URL. Transitions de hiérarchie complexes des contrôleurs de vue automatiques. Conventions du côté serveur testées dans le temps.
* [RxFlow](https://github.com/RxSwiftCommunity/RxFlow) - RxFlow est un cadre de navigation pour les applications iOS basé sur un modèle de coordinateur de flux réactif.
* [SwiftCurrent](https://github.com/wwt/SwiftCurrent) - Gérer des workflows complexes où Swift peut être construit. Il vient avec le soutien intégré pour UIKit, Storyboards, et SwiftUI.
* [SwiftRouter](https://github.com/skyline75489/SwiftRouter) - Un routeur URL pour iOS.
* [SwiftUIRoutes](https://github.com/gabriel/swiftui-routes) - Un routeur minimal et flexible pour les applications SwiftUI.
* [URLNavigator](https://github.com/devxoul/URLNavigator) - Élégante URL.

### App Store
*Libs pour aider avec app store, dans les achats d'app et la validation de reçu.* [haut de page](#readme) 

* [Apphud](https://github.com/apphud/ApphudSDK) - Librairie légère pour gérer facilement les abonnements auto-renouvelables sans moteur nécessaire.
* [AppReview](https://github.com/mezhevikin/AppReview) - Une petite bibliothèque pour demander un avis sur l'AppStore via SKStoreReviewController.
* [Flare](https://github.com/space-code/flare) - Un cadre qui simplifie le travail avec les achats in-app sur iOS, macOS, tvOS et watchOS, avec un support complet pour StoreKit 1 et StoreKit 2.
* [InAppPurchase](https://github.com/jinSasaki/InAppPurchase) - Un cadre simple, léger et sûr pour l'achat d'applications.
* [merchantkit](https://github.com/benjaminmayo/merchantkit) - Un cadre de gestion des achats In-App pour iOS.
* [SwiftyStoreKit](https://github.com/bizz84/SwiftyStoreKit) - Cadre d'achats léger dans l'application.

### Audio
*Libs pour travailler avec audio* [haut de page](#readme) 

* [AudioKit](https://github.com/audiokit/AudioKit) - Synthèse, traitement et analyse audio puissants, sans courbe d'apprentissage raide.
* [AudioPlayer](https://github.com/delannoyk/AudioPlayer) - Une enveloppe autour d'AVPlayer avec quelques caractéristiques cool.
* [AudioPlayerSwift](https://github.com/tbaranes/AudioPlayerSwift) - AudioPlayer est une classe simple pour lire l'audio (utilisation de base et avancée) dans iOS, OS X et tvOS.
* [Beethoven](https://github.com/vadymmarkov/Beethoven) - Une bibliothèque de traitement audio pour la détection des signaux musicaux.
* [FDSoundActivatedRecorder](https://github.com/fulldecent/FDSoundActivatedRecorder) - Commencez à enregistrer quand l'utilisateur parle.
* [FDWaveformView](https://github.com/fulldecent/FDWaveformView) - Un moyen facile d'afficher une forme d'onde audio dans votre application.
* [FluidAudio](https://github.com/FluidInference/FluidAudio) - SDK pour l'intelligence audio sur appareil en temps réel sur iOS/macOS (diarisation, identification, VAD, séparation, intégration, ASR), avec des modèles CoreML convertis directement à partir de PyTorch pour tirer parti des performances du moteur Neural Apple.
* [ModernAVPlayer](https://github.com/noreasonprojects/ModernAVPlayer) - Persistance AVPlayer à reprendre la lecture après une mauvaise connexion réseau, même en mode arrière-plan.
* [MusicKit](https://github.com/0thernet/MusicKit) - Un cadre pour composer et transformer la musique.
* [Soundable](https://github.com/lcardevnas/Soundable) - Soundable vous permet de jouer des sons, simples et en séquence, de manière très facile.
* [SwiftAudioPlayer](https://github.com/tanhakabir/SwiftAudioPlayer) - Lecteur audio simple pour iOS qui diffuse et effectue des manipulations audio en temps réel avec AVAudioEngine.
* [SwiftySound](https://github.com/adamcichy/SwiftySound) - Bibliothèque simple qui vous permet de jouer des sons avec une seule ligne de code.
* [voice-overlay-ios](https://github.com/algolia/voice-overlay-ios) - Une superposition qui obtient la permission vocale de votre utilisateur et l'entrée comme texte dans une interface utilisateur personnalisable.

### La réalité augmentée
[haut de page](#readme) 

* [ARHeadsetKit](https://github.com/philipturner/ARHeadsetKit) - Cadre de haut niveau pour utiliser 5 $ Google Cardboard pour reproduire Microsoft Hololens.
* [ARKit-CoreLocation](https://github.com/AndrewHartAR/ARKit-CoreLocation) - Combine la haute précision de l'AR avec l'échelle des données GPS.
* [ARKit-Navigation](https://github.com/chriswebb09/ARKitNavigationDemo) - Navigation en réalité augmentée avec MapKit.
* [ARVideoKit](https://github.com/AFathi/ARVideoKit) - Capture &enregistrer des vidéos, des photos, des photos en direct et des GIF.

### Authentification
*Facile à gérer auth dans vos applications.* [haut de page](#readme) 

* [Cely](https://github.com/cely-tools/Cely) - Un cadre de connexion Plug-n-Play.
* [LinkedInSignIn](https://github.com/serhii-londar/LinkedInSignIn) - Contrôleur de vue simple pour se connecter et récupérer un jeton d'accès de LinkedIn.
* [LoginKit](https://github.com/IcaliaLabs/LoginKit) - LoginKit est un moyen rapide et facile d'ajouter un UX Login/S'inscrire à votre application iOS.
* [ReCaptcha](https://github.com/fjcaetano/ReCaptcha) - [In]visible ReCaptcha pour iOS.
* [SpotifyLogin](https://github.com/spotify/SpotifyLogin) - Authentifier avec l'API Spotify.

### Bots
*Libs pour construire bot* [haut de page](#readme) 

* [Telegram Bot SDK](https://github.com/rapierorg/telegram-bot-swift) :penguin: - SDK non officiel.
* [Telegrammer](https://github.com/givip/Telegrammer) :penguin: - Cadre open-source pour les développeurs de Telegram Bots. Il a été construit sur Apple/SwiftNIO qui aident à démontrer d'excellentes performances.

### Cache
[haut de page](#readme) 

* [AwesomeCache](https://github.com/aschuch/AwesomeCache) - Gérez le cache facilement.
* [Cache](https://github.com/hyperoslo/Cache) - Rien que Cache.
* [CachyKit](https://github.com/Sadmansamee/CachyKit) - Une bibliothèque de cache qui peut mettre en cache JSON, Image, Zip ou AnyObject avec la date d'expiration/TTYL et la force de rafraîchissement.
* [Cachyr](https://github.com/nrkno/yr-cachyr) - Un petit cache de données à valeur clé pour iOS, macOS et tvOS.
* [Carlos](https://github.com/spring-media/Carlos) - Un cache simple mais flexible.
* [EVURLCache](https://github.com/evermeer/EVURLCache) - Si vous voulez que votre application fonctionne quand elle est hors ligne.
* [MemoryCache](https://github.com/yysskk/MemoryCache) - Cache mémoire sécurisée.
* [Monstra](https://github.com/yangchenlarkin/Monstra) - Cadre de cache mémoire avec TTL, expulsion prioritaire et protection contre les avalanches.

### Graphique
[haut de page](#readme) 

* [Charts](https://github.com/ChartsOrg/Charts) - De beaux graphiques pour iOS/tvOS/OSX (port de MPAndroidChart).
* [ChartView](https://github.com/AppPear/ChartView) - Paquet Swift pour afficher de belles cartes sans effort
* [FLCharts](https://github.com/francescoleoni98/FLCharts) - Bibliothèque de cartes facile à utiliser et hautement personnalisable pour iOS.
* [ScrollableGraphView](https://github.com/philackm/ScrollableGraphView) - Vue graphique évolutive adaptative pour iOS pour visualiser des ensembles de données discrets simples.
* [SwiftChart](https://github.com/gpbl/SwiftChart) - Une simple bibliothèque de cartographie de ligne et de zone pour iOS. Prise en charge de séries multiples, séries partiellement remplies et événements tactiles.
* [SwiftCharts](https://github.com/ivnsch/SwiftCharts) - Cartes hautement personnalisables pour iOS.
* [SwiftUICharts](https://github.com/willdale/SwiftUICharts) - Une bibliothèque de graphiques pour SwiftUI. Fonctionne sur macOS, iOS, watchOS et tvOS et possède des fonctionnalités d'accessibilité et de localisation intégrées.
* [TKRadarChart](https://github.com/TBXark/TKRadarChart) - Une carte radar personnalisable.

### Chat
*Libs pour avoir accès à l'application de chat de construction* [haut de page](#readme) 

* [Chatto](https://github.com/badoo/Chatto) - Un cadre léger pour construire des applications de chat.
* [ExyteChat](https://github.com/exyte/chat) - Cadre d'interface utilisateur SwiftUI Chat avec cellules de message entièrement personnalisables, vue d'entrée et un sélectionneur multimédia intégré
* [InputBarAccessoryView](https://github.com/nathantannar4/InputBarAccessoryView) - Une entrée simple et facilement personnalisableAccessoireView pour rendre de puissantes barres d'entrée avec des pièces jointes et complètes.
* [MessageKit](https://github.com/MessageKit/MessageKit) - Un remplacement communautaire pour JSQMessagesViewController.
* [MessengerKit](https://github.com/steve228uk/MessengerKit) - Un cadre d'interface pour construire des interfaces de messagerie.
* [Real-time Chat with Firebase](https://github.com/dopebase/messenger-iOS-chat-swift-firestore) - Application de chat en temps réel fonctionnelle avec Firebase Firestore en utilisant MessageKit.
* [swiftui-messaging-ui](https://github.com/FluidGroup/swiftui-messaging-ui) - Primitive SwiftUI chat composant UI avec prépendance stable pour le chargement de messages plus anciens sans sauts de défilement.

### Couleurs
*Extraits intéressants liés à la gestion des couleurs et à l'utilité.* [haut de page](#readme) 

* [ChromaColorPicker](https://github.com/joncardasis/ChromaColorPicker) - Un choix de couleurs iOS intuitif et amusant.
* [ColorKit](https://github.com/Boris-Em/ColorKit) - Manipulation de couleur avancée pour iOS.
* [DynamicColor](https://github.com/yannickl/DynamicColor) - Une extension pour manipuler les couleurs facilement.
* [Gradients](https://github.com/Gradients/Gradients) - Une collection de splendides 180+ dégradés.
* [Hue](https://github.com/zenangst/Hue) - Hue est l'utilitaire de coloration tout-en-un dont vous aurez jamais besoin.
* [PrettyColors](https://github.com/jdhealy/PrettyColors) - Styles et couleurs texte dans le Terminal avec des codes d'échappement ANSI. Conformité à la norme ECMA 48.
* [SheetyColors](https://github.com/chrs1885/SheetyColors) - Une feuille d'action pour iOS.
* [SwiftGen-Colors](https://github.com/SwiftGen/SwiftGen#uicolor) - Un outil pour générer automatiquement `enums` pour votre `UIColor` constantes.
* [SwiftHEXColors](https://github.com/thii/SwiftHEXColors) - Manipulation de couleur HEX comme extension pour UIColor.
* [UIColor-Hex-Swift](https://github.com/yeahdongcn/UIColor-Hex-Swift) - Hex au convertisseur UIColor.
* [UIGradient](https://github.com/dqhieu/UIGradient) - Une bibliothèque simple et puissante pour utiliser le calque dégradé, l'image, la couleur.

### Ligne de commande
*Créer des applications en ligne de commande.* [haut de page](#readme) 

* [Ashen](https://github.com/colinta/Ashen) - Un cadre pour l'écriture d'applications terminaux à Swift. Basé sur l'architecture Elm.
* [Commander](https://github.com/kylef/Commander) :penguin: - Composez de belles interfaces en ligne de commande.
* [Guaka](https://github.com/nsomar/Guaka) :penguin: - Le cadre de ligne de commande intelligent et beau (conforme à POSIX).
* [LineNoise](https://github.com/andybest/linenoise-swift) :penguin: - Un remplacement de dépendance zéro pour la ligne de lecture.
* [Mocker](https://github.com/us/mocker) - Conteneur compatible Docker CLI pour macOS, construit sur le cadre de conteneurisation d'Apple.
* [nef](https://github.com/bow-swift/nef) - Un ensemble d'outils en ligne de commande qui vous permet de compiler la vérification du temps de votre documentation écrite sous le nom de Xcode Playground.
* [Progress.swift](https://github.com/jkandzi/Progress.swift) :penguin: - Ajoutez de belles barres de progression à votre ligne de commande.
* [Swift Argument Parser](https://github.com/apple/swift-argument-parser) - Un argument direct et sûr pour Swift.
* [SwiftCLI](https://github.com/jakeheis/SwiftCLI) :penguin: - Un cadre puissant qui peut être utilisé pour développer un CLI.
* [Swiftline](https://github.com/nsomar/Swiftline) - Un ensemble d'outils pour vous aider à créer des applications en ligne de commande.
* [SwiftShell](https://github.com/kareman/SwiftShell) - Une bibliothèque pour créer des applications en ligne de commande et exécuter des commandes shell.
* [SwiftyTextTable](https://github.com/scottrhoyt/SwiftyTextTable) :penguin: - Une bibliothèque légère pour générer des tables de texte.

### Monnaie
*Des façons plus faciles de travailler avec la concurrence*. [haut de page](#readme) 

* [async+](https://github.com/async-plus/async-plus) :penguin: - Une interface enchaînée pour l'async/attendu de Swift 5.5.
* [AsyncNinja](https://github.com/AsyncNinja/AsyncNinja) - Un ensemble complet de primitives de programmation concurrency et réactive.
* [AsyncQueue](https://github.com/dfed/swift-async-queue) :penguin: - Une bibliothèque de files d'attente qui permettent d'envoyer des tâches ordonnées de contextes synchrones à asynchrones.
* [Futures](https://github.com/davidask/Futures) :penguin: - Des promesses légères pour iOS, macOS, tvOS, watchOS et côté serveur.
* [GroupWork](https://github.com/quanvo87/GroupWork) :penguin: - Tâches simples simultanées et asynchrones.
* [Hydra](https://github.com/malcommac/Hydra) - Les promesses &Attendez - Écrivez mieux le code async.
* [Queuer](https://github.com/FabrizioBrancati/Queuer) :penguin: - Un gestionnaire de file d'attente, construit sur le dessus de l'opération Queue et Dispatch (alias GCD).
* [SwiftCoroutine](https://github.com/belozierov/SwiftCoroutine) :penguin: - Coroutines pour iOS, macOS et Linux.
* [Throttler](https://github.com/boraseoksoon/Throttler) - Nombre massif d'entrées asynchrones en une seule goutte d'API d'une ligne.
* [Venice](https://github.com/Zewo/Venice) :penguin: - Communication des processus séquentiels (CSP), Linux prêt.

### Monnaie
[haut de page](#readme) 


### Gestion des données
[haut de page](#readme) 


#### CBOR
*Représentation concise d'objets binaires.* [haut de page](#readme) 

* [CBORCoding](https://github.com/SomeRandomiOSDev/CBORCoding) :penguin: - Encodage et décodage facile pour iOS, macOS, tvOS et watchOS.

#### Données de base
*Plus de douleur avec Core Data, voici quelques libs intéressantes pour gérer la gestion des données.* [haut de page](#readme) 

* [AERecord](https://github.com/tadija/AERecord) - Super incroyable bibliothèque d'emballage Core Data pour iOS.
* [CloudCore](https://github.com/deeje/CloudCore/) - Synchronisation Robust CloudKit : édition hors ligne, relations, bases de données partagées et publiques, etc.
* [CoreStore](https://github.com/JohnEstropia/CoreStore) - une façon simple et élégante de gérer Core Data.
* [DataKernel](https://github.com/mrdekk/DataKernel) - DataKernel est un enrouleur minimaliste autour de la pile Core Data pour faciliter les opérations de persistance. Pas de dépendances externes.
* [Graph](https://github.com/CosmicMind/Graph) - Un élégant cadre de données de base.
* [JSQCoreDataKit](https://github.com/jessesquires/JSQCoreDataKit) - Une pile de données plus rapide.
* [JustPersist](https://github.com/justeat/JustPersist) - La manière la plus facile et la plus sûre de faire la persistance sur iOS avec le support Core Data hors de la boîte.
* [QueryKit](https://github.com/QueryKit/QueryKit) - Une façon facile de jouer avec le filtrage de données de base.
* [Skopelos](https://github.com/albertodebortoli/Skopelos) - Une version minimaliste, sans filetage, sans chaudière et super facile à utiliser de Active Record on Core Data.
* [SugarRecord](https://github.com/modo-studio/SugarRecord) - Aide avec les données de base et le Royaume.

#### CSV
*Bibliothèques utiles pour analyser et sérialiser des représentations de valeur séparées par des virgules.* [haut de page](#readme) 

* [CodableCSV](https://github.com/dehesa/CodableCSV) :penguin: - Lire et écrire des fichiers CSV ligne par ligne ou via l'interface Codable de Swift.
* [CSVParser](https://github.com/Nero5023/CSVParser) :penguin: - Analyseur rapide pour CSV.

#### Base de secours
[haut de page](#readme) 

* [Ballcap](https://github.com/1amageek/Ballcap-iOS) - Ballcap est un cadre de conception de schéma de base de données pour Cloud Firestore.

#### GraphiqueQL
[haut de page](#readme) 

* [SociableWeaver](https://github.com/NicholasBellucci/SociableWeaver) - Construire des requêtes et des mutations de GraphQL déclaratives.

#### JSON
*Lutter avec les données de Json ? Voici quelques façons intéressantes de le gérer.* [haut de page](#readme) 

* [AlamofireObjectMapper](https://github.com/tristanhimmelman/AlamofireObjectMapper) - Une extension Alamofire qui convertit les données de réponse JSON en objets en utilisant ObjectMapper.
* [Alembic](https://github.com/ra1028/Alembic) - Analyse fonctionnelle JSON, cartographie des objets et sérialisation JSON.
* [Argo](https://github.com/thoughtbot/Argo) - JSON analyse la bibliothèque.
* [Arrow](https://github.com/freshOS/Arrow) - Élégante JSON Parsing.
* [Decodable](https://github.com/Anviking/Decodable) - JSON analyse.
* [Elevate](https://github.com/Nike-Inc/Elevate) - JSON parsing framework qui rend l'analyse simple, fiable et Composable.
* [EVReflection](https://github.com/evermeer/EVReflection) - Codage et décodage JSON basés sur la réflexion. Y compris le soutien pour NSDictionary, NSCoding, Printable, Hashable et Equateur.
* [HandyJSON](https://github.com/alibaba/handyjson) - Une bibliothèque pratique de sérialisation/désérialisation d'objets JSON.
* [Himotoki](https://github.com/ikesyo/Himotoki) - Une bibliothèque de décodage JSON.
* [JASON](https://github.com/delba/JASON) - JSON analyse avec des performances exceptionnelles et des opérateurs pratiques.
* [JSONHelper](https://github.com/isair/JSONHelper) - Librairie rapide de désactivation et de conversion de valeur pour iOS &Système X.
* [JSONNeverDie](https://github.com/johnlui/JSONNeverDie) - Outil de réflexion automatique de JSON à Model, encodeur / décodeur JSON convivial, vise à ne jamais mourir.
* [ObjectMapper](https://github.com/tristanhimmelman/ObjectMapper) - Cartographe d'objets JSON.
* [PMJSON](https://github.com/postmates/PMJSON) - Bibliothèque d'encodage/de décodage JSON.
* [ReerCodable](https://github.com/reers/ReerCodable) - Extensions codables avec macro Swift.
* [Sextant](https://github.com/KittyMac/Sextant) :penguin: - Questions haute performance JSONPath
* [SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON) - Une lib pour JSON avec la gestion des erreurs.
* [SwiftyJSONAccelerator](https://github.com/insanoid/SwiftyJSONAccelerator) - l'application macOS pour générer des modèles Swift 5 pour JSON (avec code).

#### Stock de valeurs clés
[haut de page](#readme) 

* [Default](https://github.com/Nirma/Default) - Interface moderne vers le support UserDefaults + Codable.
* [Defaults](https://github.com/sindresorhus/Defaults) - Utilisateurs par défaut fortement typés avec support pour l'observation Codable et clé.
* [DefaultsKit](https://github.com/nmdias/DefaultsKit) - Défauts d'utilisateur simples et fortement tapés pour iOS, macOS et tvOS.
* [Prephirences](https://github.com/phimage/Prephirences) - Gérer les préférences des applications, NSUserDefaults, iCloud, Keychain et plus.
* [SecureDefaults](https://github.com/vpeschenkov/SecureDefaults) - Une enveloppe légère sur UserDefaults &NSUserDefaults avec une couche de chiffrement supplémentaire AES-256.
* [Storez](https://github.com/SwiftKitz/Storez) - Stockage sécurisé, statique, de la valeur de la clé.
* [SwiftStore](https://github.com/hemantasapkota/SwiftStore) - Un magasin Key-Value soutenu par LevelDB.
* [SwiftyUserDefaults](https://github.com/sunshinejr/SwiftyUserDefaults) - Syntaxe plus propre et plus agréable pour NSUserDefaults.
* [Zephyr](https://github.com/ArtSabintsev/Zephyr) - Synchroniser sans effort NSUserDefaults sur iCloud.

#### MangoDB
[haut de page](#readme) 

* [MongoKitten](https://github.com/orlandos-nl/MongoKitten) - Connecteur MongoDB.
* [Perfect-MongoDB](https://github.com/PerfectlySoft/Perfect-MongoDB) :penguin: - Un wrapper autonome autour de la bibliothèque client mongo-c, permettant l'accès aux serveurs MongoDB.

#### Multibase de données
*Couches de gestion des données qui impliquent plusieurs sources*. [haut de page](#readme) 

* [ModelAssistant](https://github.com/ssamadgh/ModelAssistant) - Bibliothèque élégante pour gérer les interactions entre la vue et le modèle.
* [PersistenceKit](https://github.com/Teknasyon-Teknoloji/PersistenceKit) - Entreposez et récupérez des objets Codables à différentes couches de persistance, en quelques lignes de code !
* [Shallows](https://github.com/dreymonde/Shallows) - Votre boîte à outils légère.

#### ORM
[haut de page](#readme) 

* [fluent](https://github.com/vapor/fluent) :penguin: - Implémentation Simple ActiveRecord.
* [Perfect-CRUD](https://github.com/PerfectlySoft/Perfect-CRUD) :penguin: - CRUD est un système de cartographie objet-relationnelle (ORM) utilisant le protocole Codable.

#### Autres données
*Autres moyens de maintenir les données* [haut de page](#readme) 

* [CacheAdvance](https://github.com/dfed/CacheAdvance) - Un cache performant pour les systèmes d'enregistrement. CacheAdvance persiste les événements log 30x plus rapidement que SQLite.
* [CoreXLSX](https://github.com/CoreOffice/CoreXLSX) - Prise en charge du format de tableur Excel (XLSX).
* [Disk](https://github.com/saoudrizwan/Disk) - Cadre d'action pour iOS qui persiste facilement les structures, les images et les données.
* [EVCloudKitDao](https://github.com/evermeer/EVCloudKitDao) - Accès simplifié à CloudKit avec prise en charge des abonnements et des caches locaux.
* [KeyPathKit](https://github.com/vincent-pradeilles/KeyPathKit) - KeyPathKit fournit une syntaxe transparente pour manipuler les données en utilisant des keypaths dactylographiés.
* [LeetCode-Swift](https://github.com/soapyigu/LeetCode-Swift) - Solutions pour les questions d'entrevue de LeetCode.
* [Pencil](https://github.com/naru-jpn/pencil) - Écrivez n'importe quelle valeur dans le fichier.
* [StorageManager](https://github.com/iAmrSalman/StorageManager) - Un moyen sûr et facile d'utiliser FileManager comme base de données.

#### Royaume
[haut de page](#readme) 

* [Realm](https://github.com/realm/realm-swift) - Realm est une base de données mobile : un remplacement des données de base &SQLite.
* [RealmWrapper](https://github.com/k-lpmg/RealmWrapper) - Emballages sûrs et faciles pour RealmSwift.
* [Unrealm](https://github.com/matghazaryan/Unrealm) - Unrealm vous permet de stocker facilement les Classes, Structures et Enums natifs Swift dans le Royaume.

#### Pilotes SQL
[haut de page](#readme) 

* [MySQL Swift](https://github.com/novi/mysql-swift) :penguin: - MySQL bibliothèque client.
* [Perfect-MySQL](https://github.com/PerfectlySoft/Perfect-MySQL) :penguin: - Un wrapper autonome autour de la bibliothèque client MySQL, permettant l'accès aux serveurs MySQL.
* [Perfect-PostgreSQL](https://github.com/PerfectlySoft/Perfect-PostgreSQL) :penguin: - Un wrapper autonome autour de la bibliothèque client libpq, permettant l'accès aux serveurs PostgreSQLTM.

#### SQLite
*Êtes-vous intéressé à stocker vos données app en utilisant SQLite ? Voici quelques ressources intéressantes.* [haut de page](#readme) 

* [GRDB.swift](https://github.com/groue/GRDB.swift) - Une boîte à outils SQLite polyvalente.
* [SQLite.swift](https://github.com/stephencelis/SQLite.swift) - Cadre d'emballage SQLite3. Petit. Simple. En sécurité.
* [SQLiteDB](https://github.com/FahimF/SQLiteDB) - Enveloppe SQLite.

#### TOML
*Le langage évident et minimal de Tom.* [haut de page](#readme) 

* [TOMLDecoder](https://github.com/dduan/TOMLDecoder) - Dernière norme TOML, décodée.

#### XML
*Si vous préférez gérer les entrées formatées de données XML, voici quelques libs utiles* [haut de page](#readme) 

* [AEXML](https://github.com/tadija/AEXML) - Enveloppe xml.
* [CheatyXML](https://github.com/lobodart/CheatyXML) - Un cadre puissant conçu pour gérer le XML facilement.
* [SwiftyXML](https://github.com/chenyunguiMilook/SwiftyXML) - La façon la plus rapide de traiter le XML.
* [SWXMLHash](https://github.com/drmohundro/SWXMLHash) - Analyse XML simple.
* [XMLCoder](https://github.com/CoreOffice/XMLCoder) - Encodeur XML &XMLDecoder basé sur les protocoles Codable de la bibliothèque standard.
* [XMLMapper](https://github.com/gcharita/XMLMapper) - Un moyen simple de cartographier XML en Objets.

#### YAML
[haut de page](#readme) 

* [YamlSwift](https://github.com/behrang/YamlSwift) - Chargez les documents YAML et JSON.
* [Yams](https://github.com/jpsim/Yams) - Doux analyseur YAML.

#### ZIP
[haut de page](#readme) 

* [Zip](https://github.com/marmelroy/Zip) - Cadre pour le zipping et le dézippage des fichiers.
* [Zip Foundation](https://github.com/weichsel/ZIPFoundation) - Une bibliothèque pour créer, lire et modifier des fichiers d'archives ZIP.

### Date
*Gérer le formatage de la date facilement.* [haut de page](#readme) 

* [AnyDate](https://github.com/Kawoou/AnyDate) - Date &API Time inspirée de Java 8 API DateTime.
* [Chronology](https://github.com/davedelong/time) - Bâtir une meilleure bibliothèque.
* [DateHelper](https://github.com/melvitax/DateHelper) - C'est simple.
* [Datez](https://github.com/SwiftKitz/Datez) - Bibliothèque pour traiter avec `NSDate`, `NSCalendar`, `NSDateComponents`et `NSTimeInterval`.
* [Datify](https://github.com/hemangshah/Datify) - Fonctions de date facile.
* [NVDate](https://github.com/novalagung/nvdate) - Bibliothèque d'extension de date.
* [SwiftDate](https://github.com/malcommac/SwiftDate) - Gestion facile des dates NS.
* [Time](https://github.com/dreymonde/Time) - Calcul du temps de sécurité par type, alimenté par des génériques.
* [Timepiece](https://github.com/naoty/Timepiece) - Extensions intuitives NSDate.
* [TrueTime.swift](https://github.com/instacart/TrueTime.swift) - Obtenez le vrai temps courant imperméable aux changements d'horloge de périphérique (bibliothèque NTP).
* [TypedDate](https://github.com/Ryu0118/swift-typed-date) - Améliorer le traitement de la date en permettant la personnalisation des composants de date au niveau du type

### Injection de la dépendance
*Libs d'injection de dépendance* [haut de page](#readme) 

* [Cleanse](https://github.com/square/Cleanse) - Un cadre d'injection de dépendance léger par carré.
* [Corridor](https://github.com/symentis/Corridor) - Une injection de dépendance semblable à une coreader μCadre.
* [Deli](https://github.com/kawoou/Deli) - Deli est une injection facile à utiliser.
* [DIKit](https://github.com/Liftric/DIKit) - Cadre d'injection de dépendance pour Swift, inspiré par KOIN.
* [Dip](https://github.com/AliSoftware/Dip) - Un simple contenant d'injection de dépendance.
* [DITranquillity](https://github.com/ivlevAstef/DITranquillity/) - Cadre d'injection de dépendance avec tranquillité.
* [Locatable](https://github.com/vincent-pradeilles/locatable) - Un micro-cadre qui met à profit les Wrappers de propriété pour mettre en œuvre le modèle de repère de service.
* [Pure](https://github.com/devxoul/Pure) - Un moyen de faire une injection de dépendance sans contenant de DI.
* [SafeDI](https://github.com/dfed/safedi) - Injection en toute sécurité.
* [Swinject](https://github.com/Swinject/Swinject) - Un cadre d'injection de dépendance.
* [Typhoon](https://github.com/appsquickly/Typhoon) - Boîte à outils d'injection de dépendance.
* [Weaver](https://github.com/scribd/Weaver) - Un cadre d'injection de dépendance déclaratif, facile à utiliser et sûr.

### Appareil
*Une collection de libs pour reconnaître votre appareil.* [haut de page](#readme) 

* [Device](https://github.com/Ekhoo/Device) - Outil léger pour détecter l'appareil actuel et la taille de l'écran.
* [Device.swift](https://github.com/schickling/Device.swift) - Bibliothèque super légère pour détecter les appareils usagés.
* [DeviceKit](https://github.com/devicekit/DeviceKit) - DeviceKit est un remplacement de type valeur de UIDevice.
* [Deviice](https://github.com/andrealufino/Deviice) - Bibliothèque Swift pour vérifier facilement l'appareil actuel et quelques autres informations à ce sujet.
* [Luminous](https://github.com/andrealufino/Luminous) - Obtenez tout ce que vous devez savoir sur l'appareil.
* [Thingy](https://github.com/bojan/Thingy) - Une bibliothèque moderne de détection et de requête.
* [UIDeviceComplete](https://github.com/Nirma/UIDeviceComplete) - Extensions UIDevice qui remplissent les pièces manquantes.

### Documentation
*Générer la documentation pour le code Swift* [haut de page](#readme) 

* [jazzy](https://github.com/realm/jazzy/) - Des docs soul.
* [SourceDocs](https://github.com/SourceDocs/SourceDocs) - Générez la documentation de référence Markdown qui vit avec votre code.

### Courriel
[haut de page](#readme) 


### Systèmes embarqués
*Construisez vos projets Linux embarqués sur un RaspberryPi, BeagleBone, C.H.I.P. et d'autres planches.* [haut de page](#readme) 

* [SwiftyGPIO](https://github.com/uraimo/SwiftyGPIO) :penguin: - Interagir avec Linux GPIO/SPI/PWM sur ARM.

#### Périphériques
*Interagir avec des périphériques extérieurs spécifiques.* [haut de page](#readme) 


### Événements
*Solutions de rechange au NS NotificationCenter, à l'observation des valeurs clés ou à la délégation*. [haut de page](#readme) 

* [Bond](https://github.com/DeclarativeHub/Bond) - Cadre contraignant.
* [Combinative](https://github.com/noppefoxwolf/Combinative) - Gestion des événements de l'interface utilisateur en utilisant le cadre de combinaison d'Apple.
* [EmitterKit](https://github.com/aleclarson/emitter-kit) - Mise en place d'émetteurs d'événements et d'auditeurs.
* [FutureKit](https://github.com/FutureKit/FutureKit) - Bibliothèque de l'avenir/promises.
* [Katana](https://github.com/BendingSpoons/katana-swift) - Ecrivez des applications à la React et Redux.
* [LightweightObservable](https://github.com/fxm90/LightweightObservable) - Une implémentation légère d'une séquence observable à laquelle vous pouvez vous abonner.
* [NoticeObserveKit](https://github.com/marty-suzuki/NoticeObserveKit) - NoticeObserveKit est un emballage NotificationCenter sécurisé qui associe le type notice avec le type info.
* [Notificationz](https://github.com/SwiftKitz/Notificationz) - Vous aider à posséder `NSNotificationCenter` en fournissant un adaptateur simple et personnalisable.
* [Observable](https://github.com/roberthein/Observable) - La meilleure façon d'observer les valeurs.
* [OneWay](https://github.com/DevYeom/OneWay) - Gestion de l'État avec flux de données unidirectionnel.
* [OpenCombine](https://github.com/OpenCombine/OpenCombine) - Implémentation open source du cadre Combine Apple pour le traitement des valeurs dans le temps.
* [PMKVObserver](https://github.com/postmates/PMKVObserver/) - Observation moderne de la valeur des clés sans fil et sans type.
* [PromiseKit](https://github.com/mxcl/PromiseKit) - Async promet la lib de programmation.
* [ReactiveCocoa](https://github.com/ReactiveCocoa/ReactiveCocoa) - RéactiveCocoa (RAC) est un cadre de cacao inspiré par la programmation réactive fonctionnelle. Il fournit des API pour composer et transformer des flux de valeurs au fil du temps.
* [ReactorKit](https://github.com/ReactorKit/ReactorKit) - Un cadre pour une architecture d'application réactive et unidirectionnelle.
* [ReSwift](https://github.com/ReSwift/ReSwift) - Flux de données unidirectionnel.
* [RxSwift](https://github.com/ReactiveX/RxSwift) - Extensions réactives de Microsoft (Rx).
* [Signals](https://github.com/artman/Signals) - Remplace les délégués et les notifications.
* [SwiftEventBus](https://github.com/cesarferreira/SwiftEventBus) - Un bus événementiel de publication/abonnement optimisé pour iOS.
* [Tempura](https://github.com/BendingSpoons/tempura-swift) - Une approche holistique du développement iOS, inspirée par Redux et MVVM.
* [Tokamak](https://github.com/TokamakUI/Tokamak) - L'API déclarative de type réagisse pour la construction de composants d'interface utilisateur natifs avec une liaison de données à sens unique facile à utiliser.
* [Tomorrowland](https://github.com/lilyball/Tomorrowland) - Des promesses légères.
* [TopicEventBus](https://github.com/mcmatan/topicEventBus) - Publier un cadre de mise en œuvre des modèles de conception, avec la possibilité de publier des événements par sujet.
* [VueFlux](https://github.com/ra1028/VueFlux) - Architecture unidirectionnelle de gestion des flux de données - Inspirée par Vuex et Flux.
* [When](https://github.com/vadymmarkov/When) - Une mise en œuvre légère des promesses.

### Fichiers
[haut de page](#readme) 

* [ExtendedAttributes](https://github.com/sindresorhus/ExtendedAttributes) - Gérer les attributs étendus pour les fichiers et les dossiers.
* [FileKit](https://github.com/nvzqz/FileKit) - Gestion simple et expressive des fichiers.
* [FileProvider](https://github.com/amosavian/FileProvider) - Remplacement FileManager pour les fichiers locaux, iCloud et Remote (WebDAV/FTP/Dropbox/OneDrive/SMB2) pour iOS/tvOS et macOS.
* [KZFileWatchers](https://github.com/krzysztofzablocki/KZFileWatchers) - Un micro-cadre pour l'observation des changements de fichiers, locaux et distants.
* [PathKit](https://github.com/kylef/PathKit) :penguin: - Opérations sans effort.
* [Pathos](https://github.com/dduan/Pathos) :penguin: - Gestion efficace des fichiers Unix.

### Polices
*Une collection d'extraits de polices.* [haut de page](#readme) 

* [FontAwesome.swift](https://github.com/thii/FontAwesome.swift) - Utilisez FontAwesome dans vos projets.
* [FontBlaster](https://github.com/ArtSabintsev/FontBlaster) - Chargez programmatiquement des polices personnalisées dans votre application iOS.
* [Inkwell](https://github.com/ninjaprox/Inkwell) - Un inkwell pour utiliser des polices personnalisées à la volée.
* [IoniconsKit](https://github.com/keitaoouchi/IoniconsKit) - Utilisez des ioniques comme UIImage / UIFont dans vos projets.
* [OcticonsKit](https://github.com/keitaoouchi/OcticonsKit) - Utilisez Octicons comme UIImage / UIFont dans vos projets.
* [SwiftIconFont](https://github.com/segecey/SwiftIconFont) - Fontawesome, Iconic, Ionicons, Octicon ports.
* [SwiftIcons](https://github.com/ranesr/SwiftIcons) - Bibliothèque pour les icônes de police: gouttes d'eau, émoji, police géniale, icofont, ioniques, icônes linéaires, icônes de carte, icônes matérielles, icônes ouvertes, état, météo.
* [SwiftUI-FontIcon](https://github.com/huybuidac/SwiftUIFontIcon) - Icônes de police pour SwiftUI: police géniale, ioniques, icônes matérielles.
* [SYSymbol](https://github.com/Nirma/SFSymbol) - Tous les SFSymbols au bout des doigts.
* [UIFontComplete](https://github.com/Nirma/UIFontComplete) - Gestion des polices (Système &Personnalisé) pour iOS et tvOS.

### Moteur de jeu
[haut de page](#readme) 

* [glide engine](https://github.com/cocoatoucher/Glide) - SpriteKit et GameplayKit moteur basé pour faire des jeux 2d, avec des exemples pratiques et des tutoriels.
* [Raylib for Swift](https://github.com/STREGAsGate/Raylib) :penguin: - Un paquet Swift Cross-Platform pour Raylib. Construit Raylib à partir de source donc pas besoin de jouer avec les bibliothèques. Il suffit d'ajouter comme une dépendance dans votre package de jeu et aller!
* [SwiftGodot](https://migueldeicaza.github.io/SwiftGodotDocs/tutorials/swiftgodot-tutorials/) - Reliures rapides pour le moteur de jeu Godot pour construire des extensions ou agir comme un api avec SwiftGodotKit.

#### 2D
[haut de page](#readme) 

* [ImagineEngine](https://github.com/JohnSundell/ImagineEngine) - Le moteur de jeu 2D.

### Jeux
[haut de page](#readme) 

* [FDChessboardView](https://github.com/fulldecent/FDChessboardView) - Un contrôleur de vue pour les échiquiers
* [Sage](https://github.com/nvzqz/Sage) Une bibliothèque d'échecs multiplateforme.

### Geste
[haut de page](#readme) 

* [ShowTime](https://github.com/KaneCheshire/ShowTime) - Affichez vos touches et gestes iOS pour les démos et vidéos avec une seule ligne de code.
* [SwiftyGestureRecognition](https://github.com/b3ll/SwiftyGestureRecognition) - UIGestureRecognizers dans Xcode Playgrounds.
* [SwipyCell](https://github.com/moritzsternemann/SwipyCell) - UITableViewCell implémentant le swiping pour déclencher des actions (connu depuis l'application Mailbox).
* [Tactile](https://github.com/delba/Tactile) - Une façon plus sûre et plus idiomatique de réagir aux gestes et aux événements de contrôle.

### Matériel
*Une catégorie dédiée aux libs liées au matériel* [haut de page](#readme) 


#### Touch 3D
*Une nouvelle fonctionnalité 3D Touch / Force Touch grâce à ces libs.* [haut de page](#readme) 


#### Bluetooth
*Enveloppes autour de CoreBluetooth* [haut de page](#readme) 

* [BlueCap](https://github.com/troystribling/BlueCap) - Enveloppe autour de CoreBluetooth et bien plus encore.
* [Bluejay](https://github.com/steamclock/bluejay) - Un cadre simple pour construire des applications Bluetooth LE fiables.
* [BluetoothKit](https://github.com/rhummelmose/BluetoothKit) - Communiquer facilement entre les appareils iOS/OSX en utilisant BLE.
* [RxBluetoothKit](https://github.com/polidea/RxBluetoothKit) - iOS &Bibliothèque Bluetooth OSX pour RxSwift.
* [SwiftyBluetooth](https://github.com/jordanebelanger/SwiftyBluetooth) - Enveloppe de fermeture simple et fiable autour de CoreBluetooth.

#### Caméra
*Impressionnante libs de caméra* [haut de page](#readme) 

* [CameraBackground](https://github.com/yonat/CameraBackground) - Affichez le calque de la caméra en arrière-plan de n'importe quel UIView.
* [CameraKit-iOS](https://github.com/CameraKit/camerakit-ios) - Augmentez massivement les performances de la caméra et la facilité d'utilisation dans votre prochain projet.
* [FDTake](https://github.com/fulldecent/FDTake) - Prenez facilement une photo ou une vidéo ou choisissez parmi la bibliothèque.
* [Fusuma](https://github.com/ytakzk/Fusuma) - Navigateur photo de type Instagram et un appareil photo.
* [MediaPicker](https://github.com/exyte/mediapicker) - SwiftUI sélectionneur multimédia personnalisable - prend en charge la caméra et la galerie avec des albums
* [MijickCamera](https://github.com/Mijick/Camera) - La caméra est simple. Bibliothèque entièrement personnalisable qui réduit considérablement le temps et l'effort de mise en œuvre.
* [NextLevel](https://github.com/NextLevel/NextLevel) - Capture de médias radicaux.

##### Code barre
*Code à barres, code QR, autres lecteurs de code* [haut de page](#readme) 

* [BarcodeScanner](https://github.com/hyperoslo/BarcodeScanner) - Un contrôleur de vue simple et beau code-barres.
* [EFQRCode](https://github.com/EFPrefix/EFQRCode) - Une meilleure façon d'utiliser le code de réponse rapide.
* [QRCodeReader.swift](https://github.com/yannickl/QRCodeReader.swift) - Lecteur simple QRCode.

#### Commentaires haptiques
*Bibliothèques qui impliquent l'utilisation de la rétroaction haptique* [haut de page](#readme) 

* [Haptica](https://github.com/efremidze/Haptica) - Générateur de rétroaction haptique facile.

#### iBeacon
*Vous souhaitez utiliser iBeacon dans votre projet Swift ? Voici quelques ressources intéressantes.* [haut de page](#readme) 

* [SwiftLocation](https://github.com/malcommac/SwiftLocation) - Emplacement &Surveillance des balises.

#### Capteurs
*Gérez vos capteurs d'appareils de manière plus rapide et plus facile* [haut de page](#readme) 


### Images
*Une liste intéressante de libs liés à l'image..* [haut de page](#readme) 

* [Agrume](https://github.com/JanGorman/Agrume) - Un visionneur d'images iOS frais et citronné.
* [AlamofireImage](https://github.com/Alamofire/AlamofireImage) - AlamofireImage est une bibliothèque de composants d'images pour Alamofire.
* [APNGKit](https://github.com/onevcat/APNGKit) - Haute performance et façon délicieuse de jouer avec le format APNG dans iOS.
* [ATGMediaBrowser](https://github.com/altayer-digital/ATGMediaBrowser) - Visualiseur de diaporama d'images avec plusieurs styles de transition prédéfinis, et avec la possibilité de créer de nouvelles transitions avec facilité.
* [AXPhotoViewer](https://github.com/alexhillc/AXPhotoViewer) - Un visionneur de galerie de photos iPhone/iPad, utile pour voir un grand (ou petit!) nombre de photos.
* [BlockiesSwift](https://github.com/Boilertalk/BlockiesSwift) - Un seul identicons bloc / générateur d'image de profil.
* [Brightroom](https://github.com/FluidGroup/Brightroom) - Un éditeur d'images et un moteur utilisant CoreImage.
* [CTPanoramaView](https://github.com/scihant/CTPanoramaView) - Une bibliothèque qui affiche des panoramas sphériques ou cylindriques avec des commandes basées sur le toucher ou le mouvement.
* [DTPhotoViewerController](https://github.com/tungvoduc/DTPhotoViewerController) - Un visionneur photo entièrement personnalisable ViewController pour afficher une photo ou une collection de photos, inspiré par le visionneur photo Facebook.
* [FacebookImagePicker](https://github.com/floriangbh/FacebookImagePicker) - Sélection de photos d'albums Facebook.
* [FaceCrop](https://github.com/Ancestry/FaceCrop) - Détectez et centrez les visages dans vos images en utilisant Apples Vision Framework.
* [FlexibleImage](https://github.com/kawoou/FlexibleImage) - Une façon simple de jouer avec les images.
* [FMPhotoPicker](https://github.com/congnd/FMPhotoPicker) - Un décaleur photo moderne, simple et à dépendance nulle avec un éditeur d'images élégant et personnalisable.
* [gifu](https://github.com/kaishin/gifu) - Support GIF animé très performant pour iOS.
* [GPUImage 2](https://github.com/BradLarson/GPUImage2) - GPUImage 2 est un cadre de traitement vidéo et d'image accéléré sous licence BSD.
* [GPUImage 3](https://github.com/BradLarson/GPUImage3) - GPUImage 3 est un cadre homologué BSD pour le traitement vidéo et d'image accéléré GPU utilisant Metal.
* [HanekeSwift](https://github.com/Haneke/HanekeSwift) - Un cache générique léger pour iOS avec un amour supplémentaire pour les images.
* [Harbeth](https://github.com/yangKJ/Harbeth) - API métallique pour le cadre de filtre graphique accéléré GPU et vidéo et caméra.
* [ImageDetect](https://github.com/Feghal/ImageDetect) - Détecter et recadrer les visages, les codes-barres et les textes en image avec l'API de vision iOS 11.
* [ImageLoader](https://github.com/hirohisa/ImageLoaderSwift) - Un chargeur d'image léger et rapide pour iOS.
* [ImageScout](https://github.com/kaishin/ImageScout) - Mise en œuvre de [image rapide](https://pypi.org/project/fastimage/0.2.1/) - prend en charge PNG, GIF et JPEG.
* [ImageViewer](https://github.com/Krisiacik/ImageViewer) - Un téléspectateur à la Twitter.
* [ImgixSwift](https://github.com/imgix/imgix-swift) - Mettre à jour facilement les urls d'image pour être rapide et réactif.
* [JLStickerTextView](https://github.com/Textcat/JLStickerTextView) - Un UIImageView vous permet d'ajouter plusieurs Label (multiple line text support) dessus, vous pouvez modifier, tourner, redimensionner l'étiquette comme vous voulez avec un doigt, puis rendre le texte sur Image.
* [Kanvas](https://github.com/tumblr/kanvas-ios) - Une bibliothèque iOS pour ajouter des effets, des dessins, du texte, des autocollants et faire des GIF à partir de supports existants ou de la caméra.
* [Kingfisher](https://github.com/onevcat/Kingfisher) - Téléchargement et cache d'images.
* [LetterAvatarKit](https://github.com/vpeschenkov/LetterAvatarKit) - Une extension UIImage qui génère des avatars basés sur des lettres.
* [Lightbox](https://github.com/hyperoslo/Lightbox) - Un visionneur d'images pratique et facile à utiliser pour votre application iOS.
* [MapleBacon](https://github.com/JanGorman/MapleBacon) - Téléchargement d'images et mise en cache.
* [MCScratchImageView](https://github.com/JaylenCoding/MCScratchImageView) - Une ImageView personnalisée qui est utilisée pour couvrir la surface d'une autre vue comme une carte à gratter, l'utilisateur peut glisser le paillis pour voir la vue ci-dessous.
* [Moa](https://github.com/evgenyneu/moa) - Une extension de téléchargement d'image pour iOS, tvOS et macOS.
* [Nuke](https://github.com/kean/Nuke) - Cadre avancé pour le chargement, la mise en cache, le traitement, l'affichage et la préchauffage des images.
* [PassportScanner](https://github.com/evermeer/PassportScanner) - Analyser le code MRZ d'un passeport et extraire le prénom, le nom de famille, le numéro de passeport, la nationalité, la date de naissance, la date d'expiration et le numéro personnel.
* [Rough](https://github.com/bakhtiyork/Rough) - Rough vous permet de dessiner dans un style à la main.
* [Sharaku](https://github.com/makomori/Sharaku) - Filtrage d'images UI bibliothèque comme Instagram.
* [Snowflake](https://github.com/onmyway133/Snowflake) - Travaille avec SVG.
* [SwiftDraw](https://github.com/swhitty/SwiftDraw) - Bibliothèque qui convertit les images SVG en UIImage, NSImage et génère le code source CoreGraphics.
* [SwiftGen-Assets](https://github.com/SwiftGen/SwiftGen#assets-catalogs) - Un outil pour générer automatiquement `enums` pour tous vos `UIImages` de vos catalogues d'actifs.
* [SwiftSVG](https://github.com/mchoe/SwiftSVG) - Un analyseur SVG avec plusieurs options d'interface (String, NS/UIBezierPath, CAShapeLayer et NS/UIView).
* [SwiftWebImage](https://github.com/HotWordland/SwiftWebImage) - SwiftUI Téléchargeur d'images avec cache LRU/disque performant.
* [SwiftyGif](https://github.com/alexiscreuzot/SwiftyGif) - Moteur GIF haute performance.
* [TinyCrayon](https://github.com/TinyCrayon/TinyCrayon-iOS-SDK) - Un SDK intelligent et facile à utiliser pour les applications mobiles.
* [Toucan](https://github.com/gavinbunney/Toucan) - Traitement d'images api.
* [UIImageColors](https://github.com/jathu/UIImageColors) - Capteur de couleur de style iTunes pour UIImage.
* [YPImagePicker](https://github.com/Yummypets/YPImagePicker) - Recherche d'images comme Instagram &filtres pour iOS.
* [ZImageCropper](https://github.com/ZaidPathan/ZImageCropper) - Crop image sous n'importe quelle forme.

### Codage de la valeur clé
*Bibliothèques pour le codage à valeur clé* [haut de page](#readme) 


### Clavier
*Voulez-vous créer votre propre clavier personnalisé? Voici quelques ressources intéressantes* [haut de page](#readme) 

* [IHKeyboardAvoiding](https://github.com/IdleHandsApps/IHKeyboardAvoiding) - Une solution élégante pour garder toute UIView visible lorsque le clavier est montré. Aucun UIScrollView requis.
* [IQKeyboardManager](https://github.com/hackiftekhar/IQKeyboardManager) - Bibliothèque universelle sans code permet d'éviter les problèmes de glissement du clavier et de couvrir UITextField/UITextView.
* [ISEmojiView](https://github.com/isaced/ISEmojiView) - Clavier Emoji pour iOS
* [KeyboardHideManager](https://github.com/bonyadmitr/KeyboardHideManager) - Gestionnaire Codeless pour masquer le clavier en appuyant sur les vues pour iOS.
* [KeyboardShortcuts](https://github.com/sindresorhus/KeyboardShortcuts) - Ajoutez des raccourcis clavier global personnalisables à votre application macOS. Comprend un composant Coca et SwiftUI.
* [Ribbon](https://github.com/chriszielinski/Ribbon) - Une simple barre d'outils multiplateforme / bibliothèque d'accessoires d'entrée personnalisée pour iOS &Macos.
* [Typist](https://github.com/totocaster/Typist) - Petit gestionnaire de clavier UIKit pour les applications iOS-helps gère la présence d'écran et le comportement du clavier sans centre de notification.

### Kit
*Bibliothèques pour le codage avec une API simplifiée* [haut de page](#readme) 

* [BFKit-Swift](https://github.com/FabrizioBrancati/BFKit-Swift) :penguin: - Une collection de classes, structures et extensions utiles pour développer les Apps plus rapidement.
* [C4iOS](https://github.com/C4Labs/C4iOS) - Attribue la puissance de la programmation iOS native avec une API simplifiée.
* [ContactsChangeNotifier](https://github.com/yonat/ContactsChangeNotifier) - Quels contacts ont changé en dehors de votre application ? Mieux CNContactStoreDidChanger notification: Obtenez de vrais changements, sans le bruit.

### Mise en page
*Libs pour vous aider avec la mise en page.* [haut de page](#readme) 

* [AnimatedTabBar](https://github.com/exyte/AnimatedTabBar) - Un onglet avec un certain nombre d'animations prédéfinies.
* [BrickKit](https://github.com/wayfair-archive/brickkit-ios) - Créer des mises en page complexes et réactives de manière simple.
* [CGLayout](https://github.com/k-o-d-e-n/CGLayout) :penguin: - Powerful autolayout framework, qui peut gérer UIView(NSView), CALayer, non rendu vues et etc. Fournit des places.
* [FlexLayout](https://github.com/layoutBox/FlexLayout) - Interface agréable et propre pour l'implémentation Facebook yoga Flexbox hautement optimisée.
* [FrameLayoutKit](https://github.com/kennic/FrameLayoutKit) - Ce cadre prend en charge les mises en page complexes, y compris l'enchaînement et la mise en page de nidification avec des opérandes simples et intuitives &Syntaxe DSL.
* [Grid](https://github.com/exyte/Grid) - Le plus puissant conteneur Grid a manqué à SwiftUI.
* [LayoutLess](https://github.com/DeclarativeHub/Layoutless) - Ecrivez moins de code d'assurance-chômage.
* [Neon](https://github.com/mamaral/Neon) - Un cadre de mise en page programmatique puissant.
* [PinLayout](https://github.com/layoutBox/PinLayout) - Affichages rapides sans mise en page automatique. Pas de magie, de code pur, de contrôle total et de jeûne. Syntaxe concise, intuitive, lisible &chaîne. [iOS/macOS/tvOS]
* [Scaling Header Scroll View](https://github.com/exyte/ScalingHeaderScrollView) - Une vue de défilement avec un en-tête collant qui rétrécit pendant que vous défilez. Ecrit avec SwiftUI.
* [Static](https://github.com/venmo/Static) - Une simple vue de table statique pour iOS.
* [Stevia](https://github.com/freshOS/Stevia) - Affichage élégant pour iOS.

#### Mise en page automatique
*Vous avez besoin d'un storyboard ? Essayez de déclarer les libs de mise en page automatique.* [haut de page](#readme) 

* [Bamboo](https://github.com/wordlessj/Bamboo) - Mise en page automatique (et mise en page manuelle) en une seule ligne.
* [Cartography](https://github.com/robb/Cartography) - Lib de mise en page automatique pour votre projet.
* [Cassowary](https://github.com/tribalworldwidelondon/CassowarySwift) - Une bibliothèque de résolution de contraintes linéaires utilisant le même algorithme que AutoLayout.
* [Cupcake](https://github.com/nerdycat/Cupcake) - Un moyen facile de créer et de mettre en page des composants d'interface utilisateur pour iOS.
* [DeviceLayout](https://github.com/cruisediary/DeviceLayout) - AutoLayout peut être réglé différemment pour chaque appareil.
* [EasyPeasy](https://github.com/nakiostudio/EasyPeasy) - La disposition automatique est facile.
* [EasySwiftLayout](https://github.com/Pimine/EasySwiftLayout) - Cadre Swift léger pour Apple Auto-Layout.
* [EZLayout](https://github.com/alexliubj/EZAnchor) - Un moyen plus facile et plus rapide de coder Autolayout.
* [FixFlex](https://github.com/psharanda/FixFlex) - Autolimitation déclarative basée sur NSLayoutAnchor, réimagination rapide de VFL, alternative à UIStackView.
* [HypeUI](https://github.com/hyperconnect/HypeUI) - HypeUI est une implémentation du style Apple SwiftUI DSL basé sur UIKit
* [KVConstraintKit](https://github.com/keshavvishwkarma/KVConstraintKit) - Un impressionnant DSL automatique pour iOS, tvOS &L'OSX.
* [MisterFusion](https://github.com/marty-suzuki/MisterFusion) - DSL pour AutoLayout, prend en charge la classe de taille.
* [Mortar](https://github.com/jmfieldman/Mortar) - Un DSL concis mais flexible pour créer des contraintes de mise en page automatique et ajouter des sous-vues.
* [NorthLayout](https://github.com/banjun/NorthLayout) - Chemin rapide vers la mise en page en utilisant Visual Format Language (VFL) avec syntaxe étendue.
* [PureLayout](https://github.com/PureLayout/PureLayout) - L'API ultime pour iOS &Mise en page automatique OS X.
* [SnapKit](https://github.com/SnapKit/SnapKit) - Autolayout DSL pour iOS &Système X.
* [Swiftstraints](https://github.com/Skyvive/Swiftstraints) - Cadre de mise en place automatique puissant qui vous permet d'écrire des contraintes dans une ligne de code.
* [TinyConstraints](https://github.com/roberthein/TinyConstraints) - TinyConstraints est le sucre syntaxique qui rend Auto Layout plus doux pour l'usage humain.

### Localisation
*Cadres qui aident à localiser votre application* [haut de page](#readme) 

* [BartyCrouch](https://github.com/FlineDev/BartyCrouch) - Mettre à jour/transcrire vos fichiers Strings à partir de Code et Storyboards/XIBs.
* [CrowdinSDK](https://github.com/crowdin/mobile-sdk-ios) - Livraison de toutes les nouvelles traductions du projet Crowdin à l'application immédiatement.
* [IBLocalizable](https://github.com/PiXeL16/IBLocalizable) - Localisez vos vues directement dans Interface Builder avec IBLocalizable.
* [L10n-swift](https://github.com/Decybel07/L10n-swift) - Localisation d'une application capable de changer de langue "à la volée" et support des formes plurielles dans n'importe quelle langue.
* [LocalizationKit](https://github.com/willpowell8/LocalizationKit_iOS) - Localisation dynamique en temps réel de votre application avec la gestion à distance afin que vous puissiez gérer la maintenance et déployer des traductions sans soumettre à nouveau l'application.
* [Localize](https://github.com/andresilvagomez/Localize) - Localiser les applications en utilisant par exemple des expressions régulières dans Localizable.strings.
* [Localize-Swift](https://github.com/marmelroy/Localize-Swift) - Localiser les applications en utilisant par exemple des expressions régulières dans Localizable.strings.
* [Locheck](https://github.com/Asana/locheck) - Valider .strings et .stringsdict fichiers pour les erreurs
* [StringSwitch](https://stringswitch.com) - Convertissez facilement les fichiers iOS .strings en format Android strings.xml et vice versa.
* [SwiftGen-L10n](https://github.com/SwiftGen/SwiftGen#localizablestrings) - Un outil pour générer automatiquement `enums` pour tout votre Localisable. strings keys (avec des valeurs associées appropriées si ces strings contiennent des placeholders printf-format comme `%@`).
* [Translatio](https://github.com/andrealufino/Translatio) - Bibliothèque super légère qui vous aide à localiser les cordes, même directement dans les storyboards.

### Lieu
[haut de page](#readme) 

* [AsyncLocationKit](https://github.com/AsyncSwift/AsyncLocationKit) - Wrapper pour Apple CoreLocation framework avec Modern Concurrency Swift (async/wait).
* [STLocationRequest](https://github.com/SvenTiigi/STLocationRequest) - Un écran de demande de localisation 3D Flyover élégant et simple.

### Exploitation forestière
*Utilitaires pour écrire et lire à partir du journal des appareils* [haut de page](#readme) 

* [AEConsole](https://github.com/tadija/AEConsole) - Superposition personnalisée de Console UI avec log de débogage sur le dessus de votre application iOS.
* [CleanroomLogger](https://github.com/emaloney/CleanroomLogger) - API de log de haut niveau configurable et extensible qui est simple, léger et performant.
* [Duration](https://github.com/SwiftStudies/Duration) :penguin: - Bibliothèque d'enregistrement légère axée sur les calendriers de déclaration des opérations.
* [Gedatsu](https://github.com/bannzai/gedatsu) - Fournir un format lisible sur le journal d'erreur AutoLayout console.
* [HeliumLogger](https://github.com/Kitura/HeliumLogger) :penguin: - cadre d'exploitation léger d'IBM.
* [Printer](https://github.com/hemangshah/printer) - Un bûcheron pour votre prochaine application.
* [Puppy](https://github.com/sushichop/Puppy) :penguin: - Une bibliothèque d'enregistrement flexible qui prend en charge plusieurs transports et plateformes.
* [QorumLogs](https://github.com/Esqarrouth/QorumLogs) - Utilitaire d'enregistrement pour Xcode &Google Docs.
* [Rainbow](https://github.com/onevcat/Rainbow) :penguin: - Délice sortie console.
* [SwiftyBeaver](https://github.com/SwiftyBeaver/SwiftyBeaver) :penguin: - Exploitation forestière multiplateforme pendant le développement &libérer.
* [TinyConsole](https://github.com/Cosmo/TinyConsole) - Une petite console de log pour afficher les informations en utilisant votre application iOS.
* [TraceLog](https://github.com/tonystone/tracelog) :penguin: - Dead Simple: l'enregistrement de la façon dont il est censé être! Exécute sur iOS, macOS et Linux.
* [Watchdog](https://github.com/wojteklu/Watchdog) - Utilitaire pour enregistrer un blocage excessif sur le fil principal.
* [WatchdogInspector](https://github.com/tapwork/WatchdogInspector) - Un outil d'enregistrement pour afficher le framerate actuel (fps) dans la barre d'état de votre application iOS.
* [Willow](https://github.com/Nike-Inc/Willow) - Willow est une bibliothèque d'enregistrement puissante mais légère.
* [XCGLogger](https://github.com/DaveWoodCom/XCGLogger) - En vedette &Utilitaire de journalisation configurable avec niveaux de log, horodatages et numéros de ligne.

### Cartes
[haut de page](#readme) 

* [Cluster](https://github.com/efremidze/Cluster) - Cluster d'Annotation de Carte Facile.
* [FlyoverKit](https://github.com/SvenTiigi/FlyoverKit) - FlyoverKit vous permet de présenter une vue imprenable à 360° sur votre MKMapView avec aucun effort tout en conservant toutes les possibilités de configuration.
* [GEOSwift](https://github.com/GEOSwift/GEOSwift) - Faciliter le travail avec les modèles géographiques et calculer les intersections, les chevauchements, les projections, etc.
* [ImmersiveMap](https://github.com/artembobkin/ImmersiveMap) - Un moteur de carte vectorielle-tile à rendu métallique pour SwiftUI avec un globe 3D, une carte plate et des marqueurs d'avatar vivants.
* [LocoKit](https://github.com/sobri909/LocoKit) - Un cadre d'enregistrement de localisation et d'activité pour iOS.

### Mathématiques
[haut de page](#readme) 

* [Arithmosophi](https://github.com/phimage/Arithmosophi) - Ensemble de protocoles pour les opérations arithmétique et logique.
* [BigInt](https://github.com/attaswift/BigInt) - Arithmétique de précision arbitraire.
* [DDMathParser](https://github.com/davedelong/DDMathParser) - DDMathParser permet d'analyser facilement une chaîne et de l'évaluer comme une expression mathématique.
* [SigmaSwiftStatistics](https://github.com/evgenyneu/SigmaSwiftStatistics) - Un ensemble de fonctions pour le calcul statistique.
* [SwaTex](https://github.com/PhraseHQ/SwaTex) - Moteur de rendu LaTeX compatible KaTeX sans JavaScript, WebView ou DOM.
* [Upsurge](https://github.com/alejandro-isaza/Upsurge) - Matrix simple et rapide et math vectoriel.

### Traitement des langues naturelles
[haut de page](#readme) 


### Réseau
*Une liste de libs qui vous permettent de diminuer le temps consacré à traiter les requêtes http.* [haut de page](#readme) 

* [Alamofire](https://github.com/Alamofire/Alamofire) :penguin: - Elégant réseautage.
* [APIKit](https://github.com/ishkawa/APIKit) - Bibliothèque pour construire un client d'API Web sécurisé.
* [Ciao](https://github.com/AlTavares/Ciao) - Publier et découvrir des services en utilisant mDNS (Bonjour, Zeroconf).
* [CodyFire](https://github.com/CodyFlame/CodyFire) - Powerful Codable API demande constructeur et gestionnaire pour iOS. Basé sur Alamofire.
* [Conduit](https://github.com/mindbody/Conduit) - Réseautage robuste pour les API web.
* [Connectivity](https://github.com/rwbutler/Connectivity) - Rendre la détection de la connectivité Internet plus robuste en détectant les réseaux Wi-Fi sans accès à Internet.
* [Dots](https://github.com/iAmrSalman/Dots) - Cadre de réseautage concomitant léger.
* [GoodNetworking](https://github.com/GoodRequest/GoodNetworking) - GoodNetworking simplifie le réseau HTTP.
* [Heimdallr.swift](https://github.com/trivago/Heimdallr.swift) - Facile à utiliser OAuth 2 pour iOS.
* [Just](https://github.com/dduan/Just) :penguin: - HTTP pour les humains (une bibliothèque HTTP de style python-requests).
* [Malibu](https://github.com/hyperoslo/Malibu) - Une bibliothèque de réseautage construite sur des promesses.
* [Moya](https://github.com/Moya/Moya) - Couche d'abstraction réseau.
* [MultiPeer](https://github.com/dingwilson/MultiPeer) - Une enveloppe pour le cadre MultipeerConnexion pour la transmission automatique de données hors ligne entre les appareils.
* [Netfox](https://github.com/kasketis/netfox) - Une bibliothèque de débogage du réseau, légère, à une ligne.
* [Netswift](https://github.com/MrSkwiggs/Netswift) - Une solution de réseau de haut niveau sans danger.
* [OAuth2](https://github.com/p2/OAuth2) - Auth2 auth lib.
* [OAuthSwift](https://github.com/OAuthSwift/OAuthSwift) - Bibliothèque OAuth pour iOS.
* [Pitaya](https://github.com/johnlui/Pitaya) :penguin: - La bibliothèque de réseau HTTP / HTTPS s'exécute de façon accessoire sur les machines.
* [PMHTTP](https://github.com/postmates/PMHTTP) - Cadre HTTP avec un accent sur REST et JSON.
* [Postal](https://github.com/snipsco/Postal) - Cadre permettant un accès simple aux fournisseurs de courriels communs.
* [Reachability.swift](https://github.com/ashleymills/Reachability.swift) - Un remplacement de la Reachability d'Apple par des fermetures.
* [ReactiveAPI](https://github.com/sky-uk/ReactiveAPI) - Écrire un code réseau propre, concis et déclaratif en s'appuyant sur URLSession, avec la puissance de RxSwift. Inspiré par Retrofit.
* [ResponseDetective](https://github.com/netguru/ResponseDetective) - Un cadre non intrusif pour intercepter les requêtes sortantes et les réponses entrantes entre votre application et le serveur à des fins de débogage.
* [RxNetworks](https://github.com/yangKJ/RxNetworks) - API réseau avec RxSwift + Moya + HandyJSON + Plugins.
* [ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG) - Un proxy de tunnel rapide qui vous aide à contourner les pare-feu.
* [Siesta](https://bustoutsolutions.github.io/siesta/) - Élégante abstraction pour les API REST qui démêlent les mess majestueux. Une alternative au réseautage par rappel et par délégation.
* [SolarNetwork](https://github.com/ThreeGayHub/SolarNetwork) - Élégante couche d'abstraction réseau.
* [SwiftHTTP](https://github.com/daltoniam/SwiftHTTP) - Enveloppe NSURLSession.
* [SwiftyOAuth](https://github.com/delba/SwiftyOAuth) - Une petite bibliothèque OAuth avec un ensemble intégré de fournisseurs.
* [TermiNetwork](https://github.com/billp/TermiNetwork) - Une solution de réseau à dépendance nulle pour construire des applications iOS, watchOS, macOS et tvOS modernes et sécurisées.
* [Tiercel](https://github.com/Danie1s/Tiercel) - téléchargements de fond, relance de la récupération, transferts récupérables et gestion des tâches pour les applications iOS.
* [TRON](https://github.com/MLSDev/TRON) - Couche d'abstraction réseau légère, écrite sur Alamofire.
* [Wormholy](https://github.com/pmusolino/Wormholy) - Débogage réseau iOS, comme un assistant.

#### HTML
*Besoin de manipuler le contenu de html facilement?* [haut de page](#readme) 

* [Fuzi](https://github.com/cezheng/Fuzi) - Un rapide &analyseur XML/HTML léger avec XPath &Soutien CSS.
* [Kanna](https://github.com/tid-kijyun/Kanna) - Un autre analyseur XML/HTML.
* [SwiftSoup](https://github.com/scinfu/SwiftSoup) :penguin: - HTML Parser, avec le meilleur de DOM, CSS et jquery.
* [WKZombie](https://github.com/mkoehnke/WKZombie) - Navigateur sans tête.
* [ZMarkupParser](https://github.com/ZhgChgLi/ZMarkupParser) - Aide à convertir des chaînes HTML en NSAttributedString avec des styles et des balises personnalisés.

#### Protocole de messagerie
[haut de page](#readme) 

* [CocoaMQTT](https://github.com/emqx/CocoaMQTT) - MQTT pour iOS et OS X.
* [Perfect-Notifications](https://github.com/PerfectlySoft/Perfect-Notifications) - Notifications iOS pour Linux et OS X.

#### SOAP
[haut de page](#readme) 

* [SOAPEngine](https://github.com/priore/SOAPEngine) - Client SOAP générique pour accéder aux services Web SOAP en utilisant iOS, Mac OS X et Apple TV.

#### Socket
[haut de page](#readme) 

* [BlueSocket](https://github.com/Kitura/BlueSocket ) - Cadre de base de plate-forme transversale d'IBM.
* [BlueSSLService](https://github.com/Kitura/BlueSSLService) - add-in SSL/TLS pour le cadre de socket bas niveau d'IBM.
* [DNWebSocket](https://github.com/GlebRadchenko/DNWebSocket) - Object-oriented, Autobahn testé WebSocket Library (RFC 6455).
* [RxWebSocket](https://github.com/fjcaetano/RxWebSocket) - WebSockets réactifs.
* [Socket.IO](https://github.com/socketio/socket.io-client-swift) - Socket. Client IO pour iOS/OS X.
* [sockets](https://github.com/vapor-community/sockets) :penguin: - TCP, UDP; Client, Serveur; Linux, OS X.
* [Starscream](https://github.com/daltoniam/Starscream) - Websockets pour iOS et OSX.
* [SwiftSocket](https://github.com/swiftsocket/SwiftSocket) - Bibliothèque simple de socket TCP.
* [SwiftWebSocket](https://github.com/tidwall/SwiftWebSocket) - Une bibliothèque client WebSocket haute performance .

#### Serveur Web
*Voulez-vous héberger un serveur web dans votre appareil ? Ici vous pouvez trouver comment le faire.* [haut de page](#readme) 

* [Ambassador](https://github.com/envoy/Ambassador) - Cadre web super léger basé sur SWSGI.
* [Curassow](https://github.com/kylef-archive/Curassow) :penguin: - Serveur HTTP utilisant le modèle de travailleur pré-fork.
* [Embassy](https://github.com/envoy/Embassy) :penguin: - Bibliothèque de serveur HTTP async ultra légère.
* [Kitura](https://github.com/Kitura/Kitura) :penguin: - Cadre web et serveur IBM pour les services web.
* [Lightning](https://github.com/skylab-inc/Lightning) :penguin: - Multiplateforme unique sans blocage Web et cadre de réseautage.
* [Noze.io](https://github.com/NozeIO/Noze.io) :penguin: - Flux d'E/S événementielle comme Node.js.
* [Perfect](https://github.com/PerfectlySoft/Perfect) - côté serveur Swift. La bibliothèque Perfect, serveur d'applications, connecteurs et exemples d'applications.
* [swifter](https://github.com/httpswift/swifter) :penguin: - Serveur Http avec gestionnaire de routage.
* [Vapor](https://github.com/vapor/vapor) :penguin: - Cadre web élégant qui fonctionne sur iOS, OS X et Ubuntu.
* [Zewo](https://github.com/Zewo/Zewo) - Serveur-Side Swift.

### OCR
[haut de page](#readme) 

* [SwiftOCR](https://github.com/NMAC427/SwiftOCR) - Réseau neuronal OCR lib.

### Optimisation
[haut de page](#readme) 


### PDF
[haut de page](#readme) 

* [PDFGenerator](https://github.com/sgr-ksmt/PDFGenerator) - Un simple Générateur de PDF. Générer PDF à partir d'une vue ou d'une image.
* [SimplePDF](https://github.com/nRewik/SimplePDF) - Créez un simple PDF sans effort.
* [UXMPDFKit](https://github.com/uxmstudio/UXMPDFKit) - Un visionneur PDF et un annotateur qui peuvent être intégrés dans des applications iOS.

### Qualité
[haut de page](#readme) 

* [AnyLint](https://github.com/FlineDev/AnyLint) :penguin: - N'importe quoi en combinant la puissance de Swift &expressions régulières.
* [IBLinter](https://github.com/IBDecodable/IBLinter) - Un outil de linter pour Interface Builder.
* [L10nLint](https://github.com/s2mr/L10nLint) - Un outil de linter pour Localizable.strings.
* [solid-like-a-rock](https://github.com/nenadvulic/solid-like-a-rock) :penguin: - Architecture linter qui applique les règles d'importation d'architecture propre et TCA en utilisant SwiftSyntax.
* [swift-mod](https://github.com/ra1028/swift-mod) - Un outil de modification de code Swift intermédiant entre la génération de code et le formatage.
* [SwiftCop](https://github.com/andresinaka/SwiftCop) - Une bibliothèque de validation qui s'inspire de la clarté des validations Ruby On Rails Active Record.
* [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) - Une bibliothèque de codes et un outil de formatage en ligne de commande pour reformater le code Swift.
* [SwiftLint](https://github.com/realm/SwiftLint) - Un outil pour faire respecter les conventions de codage.
* [Swimat](https://github.com/Jintin/Swimat) - plugin Xcode vers le code de format.
* [Tailor](https://github.com/sleekbyte/tailor) :penguin: - Analyseur statique multiplateforme qui vous aide à écrire du code de nettoyage et à éviter les bugs.

### Scénario
[haut de page](#readme) 

* [Swift for Scripting](https://github.com/artemnovichkov/Swift-For-Scripting) - Une collection de scripts utiles et instructifs.

### SDK
[haut de page](#readme) 


### Sécurité
[haut de page](#readme) 

* [SecurePropertyStorage](https://github.com/alexruperez/SecurePropertyStorage) - Vous aide à définir des stockages sécurisés pour vos propriétés à l'aide d'emballages Swift.
* [TouchBridge](https://github.com/HMAKT99/UnTouchID) - Utilisez l'empreinte de votre téléphone pour authentifier n'importe quel Mac.

#### Cryptographie
*Traiter la méthode de cryptographie facilement* [haut de page](#readme) 

* [BlueCryptor](https://github.com/Kitura/BlueCryptor) - La bibliothèque Crypto Cross Platform d'IBM.
* [BlueRSA](https://github.com/Kitura/BlueRSA) - La bibliothèque RSA Crypto de IBM.
* [CryptoSwift](https://github.com/krzyzanowskim/CryptoSwift) :penguin: - Fonctions et aides liées à Crypto.
* [IDZSwiftCommonCrypto](https://github.com/iosdevzone/IDZSwiftCommonCrypto) - Une enveloppe pour la bibliothèque de Crypto.
* [JOSESwift](https://github.com/airsidemobile/JOSESwift) - Un cadre pour les normes JOSE JWS, JWE et JWK.
* [JWSETKit](https://github.com/amosavian/JWSETKit) - Bibliothèque JOSE avec le soutien de JWS, JWT, JWE et JWK.
* [RNCryptor](https://github.com/RNCryptor/RNCryptor) - CCCryptor (cryptage AES) pour iOS et Mac.
* [SCrypto](https://github.com/sgl0v/scrypto) - Interface élégante pour accéder aux routines CommonCrypto.
* [Siphash](https://github.com/attaswift/SipHash) - Hachage simple et sécurisé avec l'algorithme SipHash.
* [Swift-Sodium](https://github.com/jedisct1/swift-sodium) - Interface avec la bibliothèque Sodium pour les opérations crypto communes pour iOS et OS X.
* [Themis](https://github.com/cossacklabs/themis) - Cadre multilingue pour faciliter l'utilisation des systèmes de chiffrement typiques : données au repos, échange de données authentifiées, protection du transport, authentification, etc.

#### Porte-clés
[haut de page](#readme) 

* [GoodPersistence](https://github.com/GoodRequest/GoodPersistence) - Le bonpersistance simplifie la mise en cache des données dans le porte-clés et UserDefaults. Utiliser un emballage de propriété.
* [keychain-swift](https://github.com/evgenyneu/keychain-swift) - Fonctions d'aide pour enregistrer le texte dans Keychain en toute sécurité pour iOS, OS X, tvOS et watchOS.
* [KeychainAccess](https://github.com/kishikawakatsumi/KeychainAccess) - Enveloppe simple pour Keychain qui fonctionne sur iOS et OS X.
* [Latch](https://github.com/endocrimes/Latch) - Un simple wrapper porte-clés pour iOS.
* [SwiftKeychainWrapper](https://github.com/jrendel/SwiftKeychainWrapper) - Enveloppe statique simple pour iOS Keychain pour vous permettre de l'utiliser de la même manière que par défaut.
* [Valet](https://github.com/square/Valet) - Valet vous permet de stocker les données en toute sécurité dans le Keychain sans savoir quelque chose sur le fonctionnement du Keychain. C'est facile. Nous promettons.

### Streaming
[haut de page](#readme) 

* [HaishinKit](https://github.com/HaishinKit/HaishinKit.swift) - Caméra et bibliothèque de streaming Microphone via RTMP, HLS pour iOS, macOS, tvOS.
* [Live](https://github.com/ltebean/Live) - Démontrer comment construire une application de diffusion en direct.

### Style
[haut de page](#readme) 

* [Stylist](https://github.com/yonaskolb/Stylist) - Définir les styles d'interface utilisateur dans un fichier Yaml ou json externe à charge chaude.
* [SwiftTheme](https://github.com/wxxsw/SwiftTheme) - Puissant thème / gestionnaire de peau pour iOS 8+.
* [Themes](https://github.com/onmyway133/EasyTheme) - Gestion des thèmes.

### SVG
[haut de page](#readme) 

* [SVGView](https://github.com/exyte/SVGView) - SVG analyse et rendeur écrit en SwiftUI.

### Système
[haut de page](#readme) 

* [BlueSignals](https://github.com/Kitura/BlueSignals) - La bibliothèque d'OS Cross Platform d'IBM.
* [LaunchAtLogin](https://github.com/sindresorhus/LaunchAtLogin-Legacy) - Ajoutez facilement la fonctionnalité 'Launch at Login' à votre application macOS sandboxed.
* [SystemKit](https://github.com/beltex/SystemKit/) - Bibliothèque système OS X.

### Essais
*Une collection de cadres d'essai.* [haut de page](#readme) 

* [DVR](https://github.com/venmo/DVR) - Un simple cadre de test réseau.
* [Erik](https://github.com/phimage/Erik) - Un navigateur sans tête pour accéder et manipuler des pages Web en utilisant javascript permettant d'exécuter des tests fonctionnels.
* [Fakery](https://github.com/vadymmarkov/Fakery) - Faux générateur de données.
* [Mussel](https://github.com/UrbanCompass/Mussel) - Un cadre pour tester facilement les notifications push, les liens universels et l'acheminement dans les XCUITests.
* [Nimble](https://github.com/Quick/Nimble) - Un cadre de matcheur.
* [OHHTTPStubs](https://github.com/AliSoftware/OHHTTPStubs) - Une bibliothèque de test conçue pour capter vos demandes réseau facilement.
* [Quick](https://github.com/Quick/Quick) :penguin: - Quick est un cadre de développement axé sur le comportement.
* [SBTUITestTunnel](https://github.com/Subito-it/SBTUITestTunnel) - Bibliothèque de tests d'interface utilisateur pour interagir avec les demandes réseau, stub CLLocationManager et UNUserNotificationCenter, et défilement du grain fin dans les vues table/collection/scroll
* [Sizes](https://github.com/marcosgriselli/Sizes) - Testez votre application sur différentes tailles de périphériques et de polices.
* [SnapshotTest](https://github.com/parski/SnapshotTest) - Outil de test instantané pour iOS et tvOS.
* [Spectre](https://github.com/kylef/Spectre) :penguin: - Cadre BDD.
* [swift-testing-expectation](https://github.com/dfed/swift-testing-expectation) - Créer une attente asynchrone dans Swift Testing.
* [SwiftCheck](https://github.com/typelift/SwiftCheck) - Une bibliothèque de test qui génère automatiquement des données aléatoires pour tester les propriétés du programme.
* [UI Testing Cheat Sheet](https://github.com/joemasilotti/UI-Testing-Cheat-Sheet) - Réponses aux questions communes « Comment puis-je tester cela avec les tests d'assurance-chômage? » avec une application d'exemple de travail.
* [XCTest](https://github.com/swiftlang/swift-corelibs-xctest) - Le projet XCTest, une bibliothèque de base Swift pour fournir un support de test unitaire.

#### Mock
[haut de page](#readme) 

* [AutoMockable](https://github.com/vincent-pradeilles/AutoMocker) - Un cadre qui exploite le système de type pour vous permettre de créer facilement des instances simulées de vos types de données.
* [Cuckoo](https://github.com/Brightify/Cuckoo) - Premier cadre de simulation sans plaque de chaudière.
* [Mocker](https://github.com/WeTransfer/Mocker) - Demande Mock Alamofire et URLSession sans toucher à votre implémentation de code
* [Mockingbird](https://github.com/Farfetch/mockingbird) - Simplifier les tests logiciels, en se moquant facilement de tout système utilisant HTTP/HTTPS, permettant à une équipe de tester et de développer contre un service qui n'est pas complet, instable ou simplement de reproduire des cas planifiés.
* [Mockingjay](https://github.com/kylef/Mockingjay) - Une bibliothèque élégante pour frotter facilement les requêtes HTTP.
* [Mockit](https://github.com/sabirvirtuoso/Mockit) - Un simple cadre de moquerie, inspiré par le célèbre Mockito pour Java.
* [MockSwift](https://github.com/leoture/MockSwift) - Mock Framework qui utilise le pouvoir des emballages de propriétés.

### Texte
*Une collection de projets textuels.* [haut de page](#readme) 

* [Attributed](https://github.com/Nirma/Attributed) - Cadre μ moderne pour les cordes attribuées.
* [AttributedTextView](https://github.com/evermeer/AttributedTextView) - La manière la plus facile de créer un UITextView attribué avec le support de plusieurs liens, hashtags et mentions.
* [BonMot](https://github.com/Rightpoint/BonMot) - Belles et faciles chaînes attribuées pour iOS.
* [Croc](https://github.com/JKalash/Croc) - Une bibliothèque d'analyse et de requête Emoji légère.
* [edhita](https://github.com/tnantoka/edhita) - Éditeur de texte entièrement open source pour iOS.
* [GMarkdown](https://github.com/GIKICoder/GMarkdown) - Librairie de rendu Markdown pour iOS avec support pour les tables, LaTeX, Mermaid et mise en surbrillance de code.
* [MarkdownDisplayView](https://github.com/zjc19891106/MarkdownDisplayView) - Un composant de rendu Markdown construit sur TextKit 2, offrant des performances fluides, des options de personnalisation riches et un support pour les interactions conversationnelles animées par l'IA.
* [MarkdownKit](https://github.com/bmoliveira/MarkdownKit) - Un analyseur Markdown simple et personnalisable.
* [MarkdownView](https://github.com/keitaoouchi/MarkdownView) - Vue de balisage iOS.
* [MarkyMark](https://github.com/M2Mobi/Marky-Mark) - Convertit Markdown en vues natives ou en chaînes attribuées.
* [Notepad](https://github.com/ruddfawcett/Notepad) - Un éditeur de balisage entièrement à thème avec mise en évidence syntaxique en direct.
* [OEMentions](https://github.com/omar14/OEMentions) - Un moyen facile d'ajouter des mentions à uitextview comme Facebook et Instagram.
* [Parsey](https://github.com/rxwei/Parsey) - Parser framework combinator qui prend en charge le suivi de l'emplacement des sources, la prévention du rétrovirement et les messages d'erreur riches.
* [Pluralize.swift](https://github.com/joshualat/Pluralize.swift) - Grande extension à cordes.
* [PredicateFlow](https://github.com/andreadelfante/PredicateFlow) - PrediceFlow est un constructeur qui vous permet d'écrire incroyable, forte et facile à lire NSPredice.
* [PrediKit](https://github.com/KrakenDev/PrediKit) - Un DSL NSPredice pour iOS &OS X inspiré par SnapKit.
* [Regex by crossroadlabs](https://github.com/crossroadlabs/Regex) :penguin: - Très facile à utiliser Bibliothèque Expressions régulières avec une riche fonctionnalité. Fonctions des deux opérateurs `=~` et des API basées sur la méthode. Essais unitaires couverts.
* [Regex by sindresorhus](https://github.com/sindresorhus/Regex) - Swifty expressions régulières, entièrement testées &documenté, et avec un traitement Unicode correct.
* [RichEditorView](https://github.com/cjwirth/RichEditorView) - RichEditorView est une sous-classe d'UIView simple et modulaire pour l'édition de texte riche.
* [Sprinter](https://github.com/nicklockwood/Sprinter) - Une bibliothèque pour le formatage des chaînes.
* [SwiftRichString](https://github.com/malcommac/SwiftRichString) - Élégant &Bibliothèque de gestion des chaînes sans douleur.
* [SwiftVerbalExpressions](https://github.com/VerbalExpressions/SwiftVerbalExpressions) - Le portage des expressions verbales.
* [SwiftyAttributes](https://github.com/eddiekaiger/SwiftyAttributes) - Des extensions qui font que c'est une brise de travailler avec les cordes attribuées.
* [Tagging](https://github.com/k-lpmg/Tagging) - Un TextView qui fournit une fonction d'étiquetage facile à utiliser pour Mention ou Hashtag.
* [Texstyle](https://github.com/rosberry/texstyle) - Texstyle vous permet de formater facilement les chaînes attribuées.
* [TextAttributes](https://github.com/delba/TextAttributes) - Une façon plus facile de composer les cordes attribuées.
* [TextBuilder](https://github.com/davdroman/swiftui-text-builder) - Comme un SwiftUI ViewBuilder, mais pour Text.
* [TwitterTextEditor](https://github.com/twitter/TwitterTextEditor) - Une API autonome et flexible qui fournit un éditeur de texte riche pour les applications iOS.
* [VEditorKit](https://github.com/GeekTree0101/VEditorKit) - Kit d'éditeur léger et puissant.

### Fil
*Programmation en threading, basée sur les tâches ou asynchrone, emballage Grand Central Dispatch (GCD)* [haut de page](#readme) 

* [Async](https://github.com/duemunk/Async) - Sucre syntaxique pour Grand Central.
* [AwaitKit](https://github.com/yannickl/AwaitKit) - Le flux de commande ES7 Async/Await.
* [Each](https://github.com/dalu93/Each) - Chacun est une bibliothèque de ponts NSTimer.
* [GCDTimer](https://github.com/hemantasapkota/GCDTimer) - Une minuterie GCD bien testée.
* [Schedule](https://github.com/luoxiu/Schedule) :penguin: - Un planificateur de tâches léger manquant avec une syntaxe incroyablement humaine.
* [SwiftyTimer](https://github.com/radex/SwiftyTimer) - API pour NSTimer.

### Prestations de chômage
*Une collection de transitions préemballées &Des trucs cools. [haut de page](#readme) 

* [ActivityIndicatorView](https://github.com/exyte/ActivityIndicatorView) - Un certain nombre d'indicateurs de chargement prédéfinis créés avec SwiftUI.
* [AECoreDataUI](https://github.com/tadija/AERecord) - UI de données de base.
* [AGCircularPicker](https://github.com/agilie/AGCircularPicker) - Composant utile pour créer un contrôleur destiné à gérer n'importe quel paramètre calculé.
* [AMScrollingNavbar](https://github.com/andreamazz/AMScrollingNavbar) - Barre de navigation de l'UI qui suit le défilement d'un UIScrollView.
* [Arale](https://github.com/supercomputra/Arale) - Une vue d'en-tête extensible personnalisée pour UIScrollView ou toutes ses sous-classes avec UIActivityIndicatorView support for content reloading.
* [BadgeHub](https://github.com/jogendra/BadgeHub) - Faites de n'importe quel UIView un centre de notification animé à part entière. C'est une façon d'ajouter rapidement une icône de badge de notification à un UIView.
* [BatteryView](https://github.com/yonat/BatteryView) - Une interface simple en forme de batterie.
* [BetterSafariView](https://github.com/stleamist/BetterSafariView) - Une meilleure façon de présenter un SFSafariViewController ou de lancer un ASWebAuthentificationSession dans SwiftUI.
* [BottomSheet](https://github.com/joomcode/BottomSheet) - Bas puissant Composant feuille avec taille basée sur le contenu, renvoi interactif et support du contrôleur de navigation.
* [BreakOutToRefresh](https://github.com/dasdom/BreakOutToRefresh) - Une traction jouable pour rafraîchir la vue avec SpriteKit.
* [BulletinBoard](https://github.com/alexaubry/BulletinBoard) - Génére et gère les cartes contextuelles affichées en bas de l'écran.
* [CapturePreventionKit](https://github.com/Jaesung-Jung/CapturePreventionKit) - Fournit `Label` et `ImageView` pour `screen capture prevention`.
* [CircularProgress](https://github.com/sindresorhus/CircularProgress) - Indicateur de progression circulaire pour votre application macOS.
* [CircularRangeSlider](https://github.com/diegotid/circular-range-slider) - Un composant SwiftUI personnalisable pour sélectionner une gamme de valeurs à l'aide d'un curseur circulaire.
* [ClassicKit](https://github.com/Baddaboo/ClassicKit) - Une collection de composants d'interface utilisateur de style classique.
* [ContainerController](https://github.com/mrustaa/ContainerController) - Composante UI. Ceci est une copie swipe-panel de l'application: Apple Maps, Stocks
* [CountryPickerView](https://github.com/kizitonwose/CountryPickerView) - Une vue simple et personnalisable pour collecter efficacement des informations nationales dans les applications iOS.
* [CustomSegue](https://github.com/phimage/CustomSegue) - Segue personnalisée pour les storyboards OSX avec effets de glisse et de croisement.
* [DeckTransition](https://github.com/HarshilShah/DeckTransition) - Une bibliothèque pour recréer l'iOS 10 Apple Music maintenant en cours de transition.
* [DockProgress](https://github.com/sindresorhus/DockProgress) - Affichez l'état d'avancement de votre application macOS.
* [Dodo](https://github.com/evgenyneu/Dodo) - Une barre de message pour iOS.
* [Doric Design System Foundation](https://github.com/jayeshk/Doric) - Protocol orienté, type sûr, scalable système de conception cadre de base pour iOS.
* [DropDown](https://github.com/AssistoLab/DropDown) - Une chute de conception de matériaux pour iOS.
* [Elissa](https://github.com/KitchenStories/Elissa) - Affiche une notification au-dessus d'un UITabBarItem ou de toute vue d'ancrage UIView pour révéler des informations supplémentaires.
* [EstMusicIndicator](https://github.com/Aufree/ESTMusicIndicator) - Indicateur de lecture de musique comme iTunes.
* [Family](https://github.com/zenangst/Family) - Un cadre de contrôleur de la vue des enfants qui facilite la configuration de vos contrôleurs parent.
* [FAQView](https://github.com/mukeshthawani/faqview) - Une vue FAQ facile à utiliser pour iOS.
* [Fashion](https://github.com/vadymmarkov/Fashion) - Accessoires de mode et outils de beauté pour partager et réutiliser les styles d'interface utilisateur.
* [FlagKit](https://github.com/madebybowtie/FlagKit) - Belles icônes de drapeau pour l'utilisation dans les applications et sur le web.
* [FlexibleHeader](https://github.com/k-lpmg/FlexibleHeader) - Une vue conteneur qui répond au défilement d'UIScrollView.
* [FloatRatingView](https://github.com/glenyi/FloatRatingView) - Système flottant.
* [Fluid Slider](https://github.com/Ramotion/fluid-slider) - Un widget slider avec une bulle popup affichant la valeur précise sélectionnée.
* [GaugeKit](https://github.com/skywinder/GaugeKit) - Des jauges personnalisables. Facile à reproduire les jauges de style d'Apple.
* [GMStepper](https://github.com/gmertk/GMStepper) - Une stepper avec une étiquette coulissante au milieu.
* [GradientProgressBar](https://github.com/fxm90/GradientProgressBar) - Une barre de progression animée.
* [GRMustache](https://github.com/groue/GRMustache.swift) - Modèles de moustache flexibles.
* [GrowingTextView](https://github.com/KennethTsang/GrowingTextView) - UITextView qui prend en charge la croissance automatique, le support et la limite de longueur.
* [HGCircularSlider](https://github.com/HamzaGhazouani/HGCircularSlider) - Un contrôle de curseur circulaire réutilisable personnalisé pour l'application iOS.
* [HidesNavigationBarWhenPushed](https://github.com/gontovnik/HidesNavigationBarWhenPushed) - Une bibliothèque, qui ajoute la possibilité de masquer la barre de navigation lorsque le contrôleur de vue est poussé via hidesNavigationBarWhenPushed flag.
* [HorizontalDial](https://github.com/kciter/HorizontalDial) - Un cadran à défilement horizontal comme Instagram.
* [HPParallaxHeader](https://github.com/ngochiencse/HPParallaxHeader) - En-tête simple parallaxe pour UIScrollView.
* [IGColorPicker](https://github.com/iGenius-Srl/IGColorPicker) - Un sélectionneur de couleurs personnalisable pour iOS.
* [InstantSearch iOS](https://github.com/algolia/instantsearch-ios) - Une bibliothèque de widgets et d'assistants pour construire des fonctions de recherche instantanée sur iOS.
* [KALoader](https://github.com/Kirillzzy/KALoader) - Magnifiques espaces animés pour montrer le chargement des données.
* [KMNavigationBarTransition](https://github.com/MoZhouqi/KMNavigationBarTransition) - Une bibliothèque universelle drop-in vous aide à gérer les styles de barre de navigation et rend les animations de transition lisses entre les différents styles de barre de navigation tout en poussant ou en popping un contrôleur de vue pour toutes les orientations.
* [KMPlaceholderTextView](https://github.com/MoZhouqi/KMPlaceholderTextView) - Une sous-classe UITextView qui ajoute un support pour le support multiligne.
* [LeeGo](https://github.com/wangshengjia/LeeGo) - Déclaratif, configurable &développement de l'interface utilisateur hautement réutilisable comme faire des briques Lego.
* [LicensePlist](https://github.com/mono0926/LicensePlist) - Un outil en ligne de commande qui génère automatiquement une liste de toutes vos dépendances.
* [LiquidLoader](https://github.com/yoavlt/LiquidLoader) - Composants de chargeuse avec animation liquide.
* [LoadingShimmer](https://github.com/jogendra/LoadingShimmer) - Un moyen facile d'ajouter un effet scintillant à n'importe quelle vue avec une seule ligne de code. Il est utile comme indicateur de chargement discret.
* [Macaw](https://github.com/exyte/macaw) - Une bibliothèque graphique vectorielle puissante et facile à utiliser avec support SVG.
* [Magnetic](https://github.com/efremidze/Magnetic) - Picker flottant de bulles SpriteKit (inspiré par Apple Music).
* [Mandoline](https://github.com/blueapron/Mandoline) - Une vue de sélection iOS pour répondre à tous vos besoins.
* [MantleModal](https://github.com/canalesb93/MantleModal) - Une ressource modale simple qui utilise un UIScrollView pour permettre à l'utilisateur de fermer le modal en le faisant descendre.
* [Material](https://github.com/CosmicMind/Material) - Exprimez votre créativité avec Material, un cadre d'animation et de graphisme pour Google Material Design et Apple Flat UI.
* [Material Components for iOS](https://github.com/material-components/material-components-ios) - Composants modulaires et personnalisables de conception de matériaux.
* [MaterialKit](https://github.com/nghialv/MaterialKit) - Composants de conception de matériaux.
* [MediaBrowser](https://github.com/younatics/MediaBrowser) - Navigateur photo et vidéo iOS simple avec vue de grille en option, légendes et sélections.
* [MPParallaxView](https://github.com/DroidsOnRoids/MPParallaxView) - Effet Apple TV Parallax.
* [MultiSelectSegmentedControl](https://github.com/yonat/MultiSelectSegmentedControl) - UISegmentedControl remake qui prend en charge la sélection de plusieurs segments, empilage vertical, combinant texte et images.
* [MultiSlider](https://github.com/yonat/MultiSlider) - clone UISlider avec plusieurs pouces et valeurs, mise en évidence de la plage, intervalles de pression optionnels, étiquettes de valeurs optionnelles, verticales ou horizontales.
* [MuscleMap](https://github.com/melihcolpan/MuscleMap) - Carte interactive des muscles du corps humain avec SwiftUI et UIKit.
* [MXParallaxHeader](https://github.com/maxep/MXParallaxHeader) - En-tête simple parallaxe pour UIScrollView.
* [MZFormSheetPresentationController](https://github.com/m1entus/MZFormSheetPresentationController) - Fournit une alternative à l'iOS natif UIModalPrésentationFormSheet, ajoutant le support pour iPhone et des possibilités supplémentaires pour configurer la taille du contrôleur et sentir la feuille de formulaire.
* [NeumorphismKit](https://github.com/y-okudera/NeumorphismKit) - Cadre de neumorphisme pour UIKit.
* [NextGrowingTextView](https://github.com/FluidGroup/NextGrowingTextView) - La prochaine génération de "textviews croissantes" optimisée pour iOS 7 et plus.
* [NVActivityIndicatorView](https://github.com/ninjaprox/NVActivityIndicatorView) - Collection de belles animations de chargement.
* [OverlayContainer](https://github.com/applidium/OverlayContainer) - OverlayContainer facilite le développement d'interfaces basées sur les superpositions, comme celle présentée dans les applications Apple Maps ou Stocks.
* [Partition Kit](https://github.com/kieranb662/PartitionKit) - Une bibliothèque SwiftUI pour la création de partitions redimensionnables pour le Contenu de vue.
* [Popovers](https://github.com/aheze/Popovers) - Une bibliothèque pour présenter des popovers. Simple, moderne et hautement personnalisable. Pas ennuyeux !
* [Preferences](https://github.com/sindresorhus/Settings) - Ajoutez une fenêtre de préférences à votre application macOS en quelques minutes.
* [ProgressIndicatorView](https://github.com/exyte/ProgressIndicatorView) - Une bibliothèque d'indicateurs de progrès écrite en SwiftUI.
* [PullToDismiss](https://github.com/sgr-ksmt/PullToDismiss) - Vous pouvez rejeter le contrôleur de vue modale en tirant sur la fenêtre ou la barre de navigation.
* [RangeSeekSlider](https://github.com/WorldDownTown/RangeSeekSlider) - Un slider de gamme personnalisable comme un UISlider pour iOS.
* [Reel search](https://github.com/Ramotion/reel-search) - Liste d'options gérée comme une bobine.
* [ResizingTokenField](https://github.com/tadejr/ResizingTokenField) - Un champ de jeton UICollectionView qui fournit une hauteur de contenu intrinsèque.
* [RetroProgress](https://github.com/hyperoslo/RetroProgress) - Barre de progression rétro à partir des années 90.
* [SectionedSlider](https://github.com/LeonardoCardoso/SectionedSlider) - Slider du centre de contrôle.
* [SelectionDialog](https://github.com/kciter/SelectionDialog) - Boîte de dialogue de sélection simple.
* [ShadowView](https://github.com/PierrePerrin/ShadowView) - Rendre la gestion des ombres facile sur UIView.
* [Shiny](https://github.com/efremidze/Shiny) - Vue d'effet irisé (inspirée par Apple Pay Cash).
* [ShowSomeProgress](https://github.com/stoneburner/ShowSomeProgress) - Indicateurs de progrès et d'activités animés pour les applications iOS.
* [SkeletonView](https://github.com/Juanpe/SkeletonView) - Une façon élégante de montrer aux utilisateurs que quelque chose se passe et de les préparer à quel contenu il attend.
* [SKPhotoBrowser](https://github.com/suzuki-0000/SKPhotoBrowser) - Simple PhotoBrowser/Viewer inspiré de facebook, navigateurs photo twitter.
* [Spots](https://github.com/hyperoslo) - Spots est un cadre de contrôleur de vue qui rend votre configuration et votre développement futur très rapide.
* [SpreadsheetView](https://github.com/kishikawakatsumi/SpreadsheetView) - Une feuille de calcul entièrement configurable affiche les interfaces utilisateur pour les applications iOS.
* [StarryStars](https://github.com/peterprokop/StarryStars) - Affichage &modifier les cotes, entièrement personnalisable à partir du constructeur d'interface.
* [StatefulViewController](https://github.com/aschuch/StatefulViewController) - Affichage des emplacements en fonction du contenu, du chargement, de l'erreur ou des états vides.
* [StepProgressView](https://github.com/yonat/StepProgressView) - Vue étape par étape avec étiquettes et formes. Un bon remplacement pour UIActivityIndicatorView et UIProgressView.
* [SweetCurtain](https://github.com/ihormalovanyi/SweetCurtain) - Implémentation de feuille très douce et facile. Vous pouvez trouver une implémentation similaire dans des applications comme Apple Maps, Find My, Stocks, etc.
* [SwiftUISkia](https://github.com/rustq/swiftui-skia) - Bibliothèque de rendu SwiftUI basée sur les graphiques 2d de Skia, basée sur Rust pour implémenter la rastérisation logicielle pour effectuer le rendu
* [SwiftyUI](https://github.com/haoking/SwiftyUI) - Haute performance et légère UIView, UIImage, UIImageView, UIlabel, UIButton et plus.
* [TagListView](https://github.com/ElaWorkshop/TagListView) - Vue simple mais hautement personnalisable de la liste des balises iOS.
* [Toaster](https://github.com/devxoul/Toaster) - Des toasts.
* [Twinkle](https://github.com/piemonte/Twinkle) - Facile à faire des éléments dans votre application iOS scintille.
* [UltraDrawerView](https://github.com/super-ultra/UltraDrawerView) - Léger, rapide et personnalisable Drawer View implémentation identique à Apple Maps, Stocks et etc.
* [URLEmbeddedView](https://github.com/marty-suzuki/URLEmbeddedView) - cache automatiquement l'objet qui est confirmé par le protocole Open Graph et l'affiche sous forme de carte intégrée URL.
* [Windless](https://github.com/ParkGwangBeom/Windless) - Windless facilite la mise en œuvre de la vue de chargement invisible.
* [WSTagsField](https://github.com/whitesmith/WSTagsField) - Un champ de texte iOS qui représente différents Tags.
* [YMTreeMap](https://github.com/yahoo/YMTreeMap) - Moteur de mise en page Treemap / Heatmap, basé sur Squarified.
* [YNSearch](https://github.com/younatics/YNSearch) - Impressionnante vue de recherche entièrement personnalisable comme Pinterest.

#### Alerte
*Libs pour afficher alerte, feuille d'action, notification, popup.* [haut de page](#readme) 

* [Alertift](https://github.com/sgr-ksmt/Alertift) - Un emballage moderne et facile.
* [Alerts Pickers](https://github.com/dillidon/alerts-and-pickers) - Utilisation avancée de UIAlertController avec TextField, DatePicker, PickerView, TableView et CollectionView.
* [ALRT](https://github.com/mshrwtnb/alrt) - Un constructeur plus facile pour UIAlertController. Présentez une alerte de n'importe où.
* [AwaitToast](https://github.com/k-lpmg/AwaitToast) - Un async qui attend avec un toast basique. Inspiré par facebook poster toast.
* [CDAlertView](https://github.com/candostdagdeviren/CDAlertView) - Alerte/notification/succès/erreur/rafale très personnalisable.
* [CFNotify](https://github.com/JT501/SwiftNotify) - Un cadre personnalisable pour créer des vues d'alerte dragables.
* [EZAlertController](https://github.com/thellimist/EZAlertController) - Facile à contrôler.
* [FullscreenPopup](https://github.com/Ryu0118/swift-fullscreen-popup) - Présentez tout popup au-dessus de Navigation Barre à SwiftUI
* [GSMessage](https://github.com/wxxsw/GSMessages) - Un simple style de messages/notifications pour iOS 7+.
* [Kamagari](https://github.com/tasanobu-zz/Kamagari) - Une simple classe de constructeur UIAlertController
* [Loaf](https://github.com/schmidyy/Loaf) - Un cadre simple pour des toasts iOS faciles.
* [MijickPopups](https://github.com/Mijick/Popups) - Popups, popovers, draps, alertes, toasts, bannières, (...) présentation rendue simple.
* [NotificationBanner](https://github.com/Daltron/NotificationBanner) - La manière la plus simple d'afficher des bannières de notification très personnalisables dans les applications iOS.
* [PMAlertController](https://github.com/pmusolino/PMAlertController) - PMAlertController est un excellent substitut personnalisable à UIAlertController.
* [PopupDialog](https://github.com/orderella/PopupDialog) - Une boîte de dialogue simple et personnalisable. Remplace le style d'alerte UIAlertController.
* [PopupView](https://github.com/exyte/PopupView) - Bibliothèque de Toasts et popups écrite avec SwiftUI.
* [SCLAlertView](https://github.com/vikmeup/SCLAlertView-Swift) - Vue d'alerte animée.
* [Sheet](https://github.com/ParkGwangBeom/Sheet) - Feuille d'action avec fonctions de navigation telles que l'application Flipboard.
* [SPAlert](https://github.com/sparrowcode/AlertKit) - Popup autochtone de Apple Music &Commentaires dans AppStore. Contient fait &Préréglage cardiaque.
* [StatusAlert](https://github.com/LowKostKustomz/StatusAlert) - Affichage Alertes d'état d'auto-caché de type système Apple sans interrompre le flux utilisateur.
* [SweetAlert](https://github.com/codestergit/SweetAlert-iOS) - Système d'alerte.
* [Swift-Prompts](https://github.com/GabrielAlva/Swift-Prompts) - Concevoir des invitations personnalisées avec une grande gamme d'options à choisir.
* [SwiftEntryKit](https://github.com/huri000/SwiftEntryKit) - Un présentateur contextuel simple et polyvalent.
* [SwiftMessages](https://github.com/SwiftKickMobile/SwiftMessages) - Une barre de message très flexible pour iOS.
* [SwiftOverlays](https://github.com/peterprokop/SwiftOverlays) - différents popups et notifications.
* [Toast-Swift](https://github.com/BastiaanJansen/Toast-Swift) - Une bibliothèque facile à utiliser pour créer des toasts iOS 14 et plus récents.
* [XLActionController](https://github.com/xmartlabs/XLActionController) - Contrôleur de feuille d'action entièrement personnalisable et extensible.
* [Zingle](https://github.com/hemangshah/Zingle) - Une alerte s'affichera sous votre barre de navigation.

#### Flou
[haut de page](#readme) 

* [VisualEffectView](https://github.com/efremidze/VisualEffectView) - UIVisualEffectView sous-classe avec couleur teintée.

#### Bouton
[haut de page](#readme) 

* [AHDownloadButton](https://github.com/amerhukic/AHDownloadButton) - Bouton de téléchargement personnalisable avec des animations de progression et de transition. Il est basé sur le bouton de téléchargement App Store d'Apple.
* [DOFavoriteButton](https://github.com/okmr-d/DOFavoriteButton) - Mignon Bouton Animé.
* [ExpandableButton](https://github.com/DimaMishchenko/ExpandableButton) - Bouton extensible personnalisable et facile à utiliser.
* [FloatingButton](https://github.com/exyte/FloatingButton) - Menu à bouton flottant facilement personnalisable créé avec SwiftUI.
* [Floaty](https://github.com/kciter/Floaty) - Bouton d'action flottant pour iOS.
* [IGStoryButtonKit](https://github.com/KaoruMuta/IGStoryButtonKit) - Bouton facile à utiliser avec une riche animation inspirée des histoires instagram.
* [LGButton](https://github.com/loregr/LGButton) - Une sous-classe entièrement personnalisable de l'UIControl natif qui vous permet de créer de beaux boutons sans écrire de ligne de code.
* [LTHRadioButton](https://github.com/rolandleth/LTHRadioButton) - Un bouton radio avec une jolie animation.
* [MultiToggleButton](https://github.com/yonat/MultiToggleButton) - Une sous-classe UIButton qui implémente le texte bouton tap-to-toggle (comme les boutons flash et minuterie de la caméra).
* [NFDownloadButton](https://github.com/LeonardoCardoso/NFDownloadButton) - Révisé Télécharger Bouton. C'est une ingénierie inverse du bouton de téléchargement de Netflix.
* [PMSuperButton](https://github.com/pmusolino/PMSuperButton) - Un puissant UIButton avec des super pouvoirs, personnalisable à partir de Storyboard.
* [RadioGroup](https://github.com/yonat/RadioGroup) - Le groupe de boutons radio iOS manquant.
* [SwiftShareBubbles](https://github.com/takecian/SwiftShareBubbles) - Contrôle des boutons de partage social animé pour iOS.
* [TransitionButton](https://github.com/AladinWay/TransitionButton) - Sous-classe UIButton pour le chargement et l'animation de transition.

#### Calendrier
[haut de page](#readme) 

* [CalendarKit](https://github.com/richardtop/CalendarKit) - Vue entièrement personnalisable du jour du calendrier.
* [CalendarView](https://github.com/mmick66/CalendarView) - Composante Calendrier, Il dispose à la fois la mise en page verticale et horizontale (et défilement) et l'affichage des événements calendrier natifs.
* [DateTimePicker](https://github.com/itsmeichigo/DateTimePicker) - Un composant d'interface utilisateur iOS plus agréable pour la date et l'heure de sélection.
* [ElegantCalendar](https://github.com/ThasianX/ElegantCalendar) - L'élégant calendrier plein écran manqué à SwiftUI.
* [HorizonCalendar](https://github.com/airbnb/HorizonCalendar) - Un composant d'interface de calendrier iOS déclaratif, performant qui prend en charge les cas d'utilisation allant des simples sélectionneurs de date jusqu'aux applications de calendrier entièrement adaptées.
* [JTAppleCalendar](https://github.com/patchthecode/JTAppleCalendar) - Gestionnaire de calendrier de l'assurance-chômage.
* [KVKCalendar](https://github.com/kvyatkovskys/KVKCalendar) - Un calendrier de personnalisation pour les plateformes Apple
* [OBCalendar](https://github.com/oBilet/OBCalendar) - OBCalendar est conçu pour la simplicité et la personnalisation, il vous permet de construire de belles et fonctionnelles interfaces calendrier sans effort.
* [Workaholic](https://github.com/hemangshah/Workaholic) - Une période de contribution comme GitHub.
* [Yotei](https://github.com/claustrofob/Yotei) - Un paquet de calendrier SwiftUI/UIKit modulaire et personnalisable pour iOS.

#### Cartes
[haut de page](#readme) 

* [CardNavigation](https://github.com/james01/CardNavigation) - Un contrôleur de navigation qui affiche ses contrôleurs de vue comme une pile interactive de cartes.
* [CardParts](https://github.com/intuit/CardParts) - Un cadre d'interface utilisateur réactif, basé sur carte, construit sur UIKit pour les développeurs iOS.
* [VerticalCardSwiper](https://github.com/JoniVR/VerticalCardSwiper) - Un mariage entre Shazam Discover UI et Tinder, construit avec UICollectionView.

#### Formulaire
[haut de page](#readme) 

* [Carbon](https://github.com/ra1028/Carbon) - Une bibliothèque déclarative pour construire des interfaces utilisateur basées sur des composants dans UITableView et UICollectionView.
* [Eureka](https://github.com/xmartlabs/Eureka) - Elégant constructeur de formulaires iOS.
* [FDBarGauge](https://github.com/fulldecent/FDBarGauge) - Simuler l'indicateur de niveau sur une carte de mixage audio
* [Former](https://github.com/ra1028/Former) - Une bibliothèque entièrement personnalisable pour créer facilement un formulaire basé sur UITableView.
* [ObjectForm](https://github.com/haojianzong/ObjectForm) - Une bibliothèque simple mais puissante pour construire un formulaire pour vos modèles de classe.
* [SwiftyFORM](https://github.com/neoneye/SwiftyFORM) - Formulaires qui peuvent être validés.

#### HUD
[haut de page](#readme) 

* [EZLoadingActivity](https://github.com/Esqarrouth/EZLoadingActivity) - Activité de chargement légère HUD.
* [GradientLoadingBar](https://github.com/fxm90/GradientLoadingBar) - Une barre de chargement animée.
* [KRProgressHUD](https://github.com/krimpedance/KRProgressHUD) - Un beau et personnalisable progrès HUD.
* [PKHUD](https://github.com/pkluz/PKHUD) - Réimplémentation de l'HUD Apple.

#### Étiquette
[haut de page](#readme) 

* [ActiveLabel](https://github.com/optonaut/ActiveLabel.swift) - UILabel remplacement drop-in supportant Hashtags (#), Mentions (@) et URLs (http://).
* [Atributika](https://github.com/psharanda/Atributika) - TConvert text with HTML tags, links, hashtags, mention in NSAttributedString. Faites-les cliquer avec UILabel de remplacement.
* [CountdownLabel](https://github.com/suzuki-0000/CountdownLabel) - Simple compte à rebours UILabel avec animation en transformation, et une fonction utile.
* [GlitchLabel](https://github.com/kciter/GlitchLabel) - Glitching UILabel pour iOS.
* [IncrementableLabel](https://github.com/tbaranes/IncrementableLabel) - Une sous-classe UILabel à (de)chiffres d'incrément dans une UILabel.
* [KDEDateLabel](https://github.com/delannoyk/KDEDateLabel) - Une sous-classe UILabel qui se met à jour pour faciliter le format d'il y a longtemps.
* [LTMorphingLabel](https://github.com/lexrus/LTMorphingLabel) - Des effets de transformation gracieuse pour UILabel.
* [Nantes](https://github.com/instacart/Nantes) - Attribué par TTT Remplacement de l'étiquette.
* [TriLabelView](https://github.com/mukeshthawani/TriLabelView) - Une vue en triangle pour iOS.

#### Menu
[haut de page](#readme) 

* [AKSwiftSlideMenu](https://github.com/ashishkakkad8/AKSwiftSlideMenu) - Menu de diapositives (Drawer).
* [CircleMenu](https://github.com/Ramotion/circle-menu) - CircleMenu est un menu UI simple et élégant avec une mise en page circulaire et des animations de conception de matériaux.
* [ENSwiftSideMenu](https://github.com/evnaz/ENSwiftSideMenu) - Menu latéral coulissant.
* [FanMenu](https://github.com/exyte/fan-menu) - Menu avec une mise en page circulaire basée sur Macaw.
* [FlowingMenu](https://github.com/yannickl/FlowingMenu) - Transition de vue interactive pour afficher les menus avec des effets fluides et rebondissants.
* [GuillotineMenu](https://github.com/Yalantis/GuillotineMenu) - Le menu de style Guillotine.
* [HHFloatingView](https://github.com/hemangshah/HHFloatingView) - Une vue flottante facile à utiliser et à configurer pour votre application.
* [InteractiveSideMenu](https://github.com/handsomecode/InteractiveSideMenu) - Menu latéral interactif iOS personnalisable.
* [KWDrawerController](https://github.com/Kawoou/KWDrawerController) - Contrôleur de vue de tiroir qui est facile à utiliser.
* [MenuItemKit](https://github.com/cxa/MenuItemKit) - `UIMenuItem` avec support image et bloc (fermeture).
* [Pagemenu](https://github.com/PageMenu/PageMenu) - Pagination activée contrôleur de vue.
* [PagingKit](https://github.com/kazuhiro4949/PagingKit) - PagingKit fournit une interface utilisateur de menu personnalisable.
* [Panels](https://github.com/antoniocasero/Panels) - Panneaux est un cadre pour ajouter facilement des panneaux coulissants à votre application.
* [Parchment](https://github.com/rechsteiner/Parchment) - Un contrôleur de visionnage avec un menu hautement personnalisable, construit sur UICollectionView.
* [PopMenu](https://github.com/CaliCastle/PopMenu) - Une feuille d'action de style contextuel cool et personnalisable pour iOS.
* [SegmentIO](https://github.com/Yalantis/Segmentio) - Menu segmenté haut/bas animé pour iOS.
* [SideMenu](https://github.com/jonkykong/SideMenu) - Contrôle de menu latéral simple pour iOS inspiré de Facebook. Les côtés droit et gauche. Pas de codage nécessaire.
* [SlideMenuControllerSwift](https://github.com/dekatotoro/SlideMenuControllerSwift) - iOS Diapositive Menu View basé sur Google+, iQON, Feedly, Ameba iOS app.
* [SwipeMenuViewController](https://github.com/yysskk/SwipeMenuViewController) - Onglet et menu Swipable View et ViewController.
* [XLPagerTabStrip](https://github.com/xmartlabs/XLPagerTabStrip) - PagerTabStrip Android pour iOS.
* [YNDropDownMenu](https://github.com/younatics/YNDropDownMenu) - Menu déroulant iOS adorable.

#### Pagination
[haut de page](#readme) 

* [CHIPageControl](https://github.com/ChiliLabs/CHIPageControl) - Un ensemble de contrôles de page animés cool pour remplacer l'interface utilisateur de contrôle.
* [FlexiblePageControl](https://github.com/shima11/FlexiblePageControl) - Un UIPageControl flexible comme Instagram.
* [iPages](https://github.com/blsage/iPages) - Implémenter rapidement les vues de pages swipables dans SwiftUI .
* [Pageboy](https://github.com/uias/Pageboy) - Un simple contrôleur de page très informatif.
* [PageController](https://github.com/hirohisa/PageController) - Régulateur de recherche infini.
* [SlideController](https://github.com/touchlane/SlideController) - C'est une belle alternative pour UIPageViewController construit en utilisant la puissance des types génériques. Faites glisser entre les pages avec un contrôle de navigation interactif. Configurez des chaînes horizontales ou verticales pour un montant illimité de pages.

#### Paiement
[haut de page](#readme) 

* [AnimatedCardInput](https://github.com/netguru/AnimatedCardInput) - L'interface carte de crédit est personnalisable et facile à utiliser.
* [Caishen](https://github.com/prolificinteractive/Caishen) - Une interface carte de paiement &Validateur pour iOS.
* [iCard](https://github.com/eliakorkmaz/iCard) - Générateur de cartes bancaires utilisant SnapKit DSL.
* [MFCard](https://github.com/MobileFirstInc/MFCard) - Intégrez facilement les paiements par carte de crédit dans l'application iOS.
* [TPInAppReceipt](https://github.com/tikhop/TPInAppReceipt) - Une bibliothèque légère et pure-Swift pour la lecture et la validation d'Apple In App.

#### Autorisations
[haut de page](#readme) 

* [AREK](https://github.com/ennioma/arek) - AREK est un emballage propre et facile à utiliser sur tout type de permission iOS.
* [Permission](https://github.com/delba/Permission) - Une API unifiée pour demander des permissions sur iOS.
* [SPPermission](https://github.com/sparrowcode/PermissionsKit) - Demande simple permission avec l'interface utilisateur native et l'animation interactive.

#### Barres de défilement
[haut de page](#readme) 

* [DMScrollBar](https://github.com/batanus/DMScrollBar) - La meilleure barre de défilement personnalisable de classe pour tout type de ScrollView avec Décélération, Bounce &Mécanismes de bande de caoutchouc et beaucoup plus.

#### Affichage des piles
[haut de page](#readme) 

* [StackViewController](https://github.com/seedco/StackViewController) - Simplifiez l'utilisation de UIStackView.
* [TZStackView](https://github.com/tomvanzummeren/TZStackView) - Un composant de mise en page iOS9 UIStackView ré-appliqué pour iOS 7 et 8.

#### Commutateur
[haut de page](#readme) 

* [MJMaterialSwitch](https://github.com/JaleelNazir/MJMaterialSwitch) - Une interface utilisateur personnalisée pour iOS, inspirée de Google Material Design.
* [paper-switch](https://github.com/Ramotion/paper-switch) - RAMPaperSwitch est un module UI de conception de matériau qui peint sur la vue parent lorsque l'interrupteur est allumé.
* [Switch](https://github.com/T-Pham/Switch) - Une commande de commutation avec prise en charge complète du constructeur d'interface.

#### onglet
[haut de page](#readme) 

* [Adaptive Tab Bar](https://github.com/Ramotion/adaptive-tab-bar) - Barre adaptative.
* [Animated Tab Bar](https://github.com/Ramotion/animated-tab-bar) - RAMAnimatedTabBarController est un module pour ajouter de l'animation aux éléments de la barre des onglets.
* [CardTabBar](https://github.com/yusadogru/CardTabBar) - Ajout d'animation à des onglets iOS.
* [CircleBar](https://github.com/softhausHQ/CircleBar) - Un contrôleur de navigation facile à utiliser pour iOS.
* [ColorMatchTabs](https://github.com/Yalantis/ColorMatchTabs) - Intéressant moyen d'afficher les onglets.
* [DTPagerController](https://github.com/tungvoduc/DTPagerController) - Container view controller pour afficher un ensemble de ViewControllers dans une vue de défilement horizontale.
* [ESTabBarController](https://github.com/eggswift/ESTabBarController) - Un composant TabBarController hautement personnalisable, hérité de UITabBarController.
* [HHTabBarView](https://github.com/hemangshah/HHTabBarView) - Une vue légère sur la barre d'onglets personnalisée.
* [PolioPager](https://github.com/YuigaWada/PolioPager) - Un TabBarController flexible avec onglet de recherche comme SNKRS.
* [SwiftUIMaterialTabs](https://github.com/SwiftKickMobile/SwiftUIMaterialTabs) - Matériel 3-style onglets et Sticky Headers roulé dans une bibliothèque SwiftUI
* [TabBar](https://github.com/onl1ner/TabBar) - Barre d'onglet très personnalisable pour les applications SwiftUI.
* [Tabman](https://github.com/uias/Tabman) - Un puissant contrôleur de visionnage avec barre indicateur.
* [TabPageViewController](https://github.com/EndouMari/TabPageViewController) - Le contrôleur de la vue et la vue des onglets de défilement.

#### Modèle
[haut de page](#readme) 

* [Stencil](https://github.com/stencilproject/Stencil) - Un langage modèle simple et puissant.
* [SwiftCssParser](https://github.com/100mango/SwiftCssParser) - Analyseur CSS extensible.
* [Temple](https://github.com/GoodRequest/Temple) - Les modèles de projets et de fichiers les plus avancés.

#### Champ texte
[haut de page](#readme) 

* [CBPinEntryView](https://github.com/Fawxy/CBPinEntryView) - Facile à utiliser, entrée de broche très personnalisable.
* [CHIOTPField](https://github.com/ChiliLabs/CHIOTPField) - Un ensemble de champs de texte pouvant être utilisés pour des mots de passe uniques, des codes SMS, des codes PIN, etc.
* [DTTextField](https://github.com/iDhaval/DTTextField) - DTTextField est un champ de texte personnalisé avec support flottant et étiquette d'erreur.
* [FloatingLabelTextFieldSwiftUI](https://github.com/kishanraja/FloatingLabelTextFieldSwiftUI) - FloatingLabelTextFieldSwiftUI est un petit et léger cadre SwiftUI écrit en SwiftUI complètement (pas en utilisant UIViewReprésentable) qui permet de créer une belle et personnalisable plage de texte d'étiquette flottante!
* [HTYTextField](https://github.com/hanton/HTYTextField) - Un champ UITextField avec porte-places bon marché.
* [iTextField ⌨️](https://github.com/blsage/iTextField) - Un enrobé `UITextField` qui fonctionne entièrement à SwiftUI.
* [PasswordTextField](https://github.com/PiXeL16/PasswordTextField) - Un TextField personnalisé avec une icône commutable qui affiche ou masque le mot de passe et applique de bonnes politiques de mot de passe.
* [SkyFloatingLabelTextField](https://github.com/Skyscanner/SkyFloatingLabelTextField) - Une belle et flexible application de contrôle de champ de texte de "Float Label Pattern".
* [StyledTextKit](https://github.com/GitHawkApp/StyledTextKit) - Construction déclarative et rendu rapide attribué bibliothèque de cordes.
* [TextFieldCounter](https://github.com/serralvo/TextFieldCounter) - Compteur de caractères UITextField avec UX agréable.
* [TextFieldEffects](https://github.com/raulriera/TextFieldEffects) - Plusieurs effets prêts à utiliser pour UITextFields.
* [UITextField-Navigation](https://github.com/T-Pham/UITextField-Navigation) - UITextField-Navigation ajoute les boutons suivants, précédents et faits au clavier pour votre UITextField. Très personnalisable.
* [VKPinCodeView](https://github.com/Sunspension/VKPinCodeView) - Composant d'interface utilisateur simple et élégant pour entrée PIN.

#### Transition
[haut de page](#readme) 

* [BubbleTransition](https://github.com/andreamazz/BubbleTransition) - La transition bubble est facile.
* [Cards XI](https://github.com/PaoloCuscela/Cards) - Impressionnant iOS 11 AppStore's Card Views.
* [EasyTransitions](https://github.com/marcosgriselli/EasyTransitions) - Une façon simple de créer des transitions interactives personnalisées UIViewController.
* [Hero](https://github.com/HeroTransitions/Hero) - Bibliothèque de transition élégante pour iOS.
* [ImageTransition](https://github.com/shtnkgm/ImageTransition) - ImageTransition est une bibliothèque pour l'animation en douceur des images pendant les transitions.
* [Jelly](https://github.com/SebastianBoldt/Jelly) - Jelly fournit des transitions personnalisées avec quelques lignes de code.
* [LiquidSwipe](https://github.com/exyte/LiquidSwipe) - Animation de navigation liquide
* [MijickNavigattie](https://github.com/Mijick/NavigationView) - Navigation facile avec SwiftUI.
* [MusicPlayerTransition](https://github.com/xxxAIRINxxx/MusicPlayerTransition) - Transition interactive personnalisée comme Apple Music iOS App.
* [NavigationTransitions](https://github.com/davdroman/swiftui-navigation-transitions) - Pure SwiftUI Navigation transitions.
* [PanSlip](https://github.com/k-lpmg/PanSlip) - Utilisez PanGesture pour rejeter la vue sur UIViewController et UIView.
* [PinterestSwift](https://github.com/demonnico/PinterestSwift) - Transition de style Pinterest.
* [RevealingSplashView](https://github.com/PiXeL16/RevealingSplashView) - Une vue Splash qui anime et révèle son contenu, inspiré par le splash Twitter.
* [SamuraiTransition](https://github.com/hachinobu/SamuraiTransition) - Bibliothèque Swift offrant une collection de transitions ViewController avec un certain nombre d'animations de coupe soignées.
* [SPLarkController](https://github.com/ivanvorobei/SPLarkController) - Transition personnalisée entre deux contrôleurs. Traduire en haut.
* [SPStorkController](https://github.com/ivanvorobei/SPStorkController) - Je joue à Apple Music. Hauteur personnalisable.
* [StarWars.iOS](https://github.com/Yalantis/StarWars.iOS) - Animation de transition pour écraser le contrôleur de vue en petits morceaux.
* [Transition](https://github.com/Touchwonders/Transition) - Transitions simples et interactives personnalisées ViewController.

#### 3D
[haut de page](#readme) 

* [Insert3D](https://github.com/Viktoo/Insert3D) - La manière la plus rapide d'intégrer un modèle 3D.

#### UICollectionView
[haut de page](#readme) 

* [ASCollectionView](https://github.com/abdullahselek/ASCollectionView) - Vue de collection sur mesure légère inspirée par Airbnb.
* [AZCollectionViewController](https://github.com/AfrozZaheer/AZCollectionViewController) - Une façon facile d'intégrer la pagination avec des vues factices dans CollectionView, faire Instagram Découvrez avec des minutes.
* [Blueprints](https://github.com/zenangst/Blueprints) - Un cadre destiné à faciliter votre vie en travaillant avec les plans de flux de vision de collection.
* [BouncyLayout](https://github.com/roberthein/BouncyLayout) - Vue de collection qui fait rebondir vos cellules.
* [CardsLayout](https://github.com/filletofish/CardsLayout) - Bel aménagement personnalisé de CollectionView.
* [CenteredCollectionView](https://github.com/BenEmdon/CenteredCollectionView) - Une légère UICollectionViewLayout que les pages et les centres ce sont des cellules.
* [CheckmarkCollectionViewCell](https://github.com/yonat/CheckmarkCollectionViewCell) - UICollectionViewCell avec case à cocher quand il estSélectionné et cercle vide quand il n'est pas - comme le mode Photos.app 'Select'.
* [CollectionViewShelfLayout](https://github.com/pitiphong-p/CollectionViewShelfLayout) - Une sous-classe UICollectionViewLayout affiche ses éléments sous forme de rangées d'éléments similaires à l'onglet App Store Feature sans un hack imbriqué UITableView/UICollectionView.
* [CollectionViewSlantedLayout](https://github.com/yacir/CollectionViewSlantedLayout) - UICollectionViewLayout pour afficher le contenu incliné.
* [Drag and Drop UICollectionView](https://github.com/mmick66/KDDragAndDropCollectionView) - Dragging et Dropping données sur plusieurs UICollectionViews.
* [FSPagerView](https://github.com/WenchaoD/FSPagerView) - Élégante bibliothèque de diapositives. Il est extrêmement utile pour la fabrication de Banner View.
* [Gliding Collection](https://github.com/Ramotion/gliding-collection) - Gliding Collection est une décision fluide et personnalisable pour un contrôleur UICollectionView.
* [GoodProvider](https://github.com/GoodRequest/GRProvider) - UIColectionView et UITableView pour simplifier les scénarios de base de l'affichage des données.
* [GravitySlider](https://github.com/ApplikeySolutions/GravitySlider) - Belle alternative à la mise en page standard UICollectionView.
* [ShelfView-iOS](https://github.com/tdscientist/ShelfView-iOS) - vue sur iOS pour afficher les livres sur l'étagère.
* [SimpleSource](https://github.com/Squarespace/simple-source ) - Vue de la table et de la collection iOS facile et sécuritaire.
* [SwiftSpreadsheet](https://github.com/stuffrabbit/SwiftSpreadsheet) - feuille de calcul entièrement personnalisable CollectionViewLayout.
* [TagCellLayout](https://github.com/riteshhgupta/TagCellLayout) - UICollectionView layout for Tags with Left, Center &Alignement droit.
* [UICollectionViewSplitLayout](https://github.com/yahoojapan/UICollectionViewSplitLayout) - UICollectionViewSplitLayout rend la vue de collection plus réactive.
* [VegaScroll](https://github.com/AppliKeySolutions/VegaScroll) - Déroulement d'animation léger pour UICollectionView.

#### UITableView
[haut de page](#readme) 

* [AZTableViewController](https://github.com/AfrozZaheer/AZTableViewController) - Une façon élégante et facile d'intégrer la pagination avec les vues des lieux.
* [CollapsibleTableSectionViewController](https://github.com/jeantimex/CollapsibleTableSectionViewController) - Une bibliothèque pour prendre en charge les sections pliables dans une vue de table.
* [DGElasticPullToRefresh](https://github.com/gontovnik/DGElasticPullToRefresh) - Tir élastique pour rafraîchir.
* [DiffableDataSources](https://github.com/ra1028/DiffableDataSources) - Une bibliothèque pour rétroporter UITableView/UICollectionViewDiffableDataSource.
* [DTTableViewManager](https://github.com/DenTelezhkin/DTTableViewManager) - Gestion UITableView axée sur le protocole, alimentée par des génériques et des types associés.
* [ExpandableCell](https://github.com/younatics/ExpandableCell) - Entièrement refactoré YNExapnadableCell avec plus concis, sans bug. Utilisation la plus facile de extensible &cellule pliable pour iOS. Vous pouvez personnaliser UITableViewCell ce que vous voulez. ExpandableCell est fait car insertRows et deleteRows est difficile à utiliser. Juste inheirt ExpandableDelegate.
* [FDTextFieldTableViewCell](https://github.com/fulldecent/FDTextFieldTableViewCell) - Ajoute un champ UITextField à la cellule et la place correctement.
* [folding-cell](https://github.com/Ramotion/folding-cell) - Transition de cellules repliables.
* [GridView](https://github.com/KyoheiG3/GridView) - Peut être personnalisé comme table de temps, table de calcul, pagination et plus.
* [HGPlaceholders](https://github.com/HamzaGhazouani/HGPlaceholders) - Jolie bibliothèque pour montrer les placeholders et les états vides pour n'importe quel UITableView / UICollectionView dans votre projet.
* [OKTableViewLiaison](https://github.com/okcupid/OKTableViewLiaison) - Cadre pour vous aider à mieux gérer UITableViews.
* [ParallaxHeader](https://github.com/romansorochak/ParallaxHeader) - Une façon simple d'ajouter l'en-tête parallax à UIScrollView/UITableView.
* [Persei](https://github.com/Yalantis/Persei) - Menu supérieur animé pour UITableView / UICollectionView / UIScrollView.
* [PullToRefreshSwift](https://github.com/dekatotoro/PullToRefreshSwift) - PullToRefraîchir la bibliothèque.
* [QuickTableViewController](https://github.com/bcylin/QuickTableViewController) - Une façon simple de créer un UITableView pour les paramètres.
* [ReverseExtension](https://github.com/marty-suzuki/ReverseExtension) - Extension UITableView qui permet l'insertion de cellules en bas d'une vue de table.
* [SelectionList](https://github.com/yonat/SelectionList) - Liste de contrôle simple à sélection unique ou à sélection multiple, basée sur UITableView.
* [Shoyu](https://github.com/xai3/Shoyu) - Une façon plus facile de représenter la structure de UITableView.
* [SwiftyComments](https://github.com/tsucres/SwiftyComments) - Hiérarchie imbriquée des cellules extensibles/collapsibles pour construire facilement des fils de discussion élégants.
* [SwipeCellKit](https://github.com/SwipeCellKit/SwipeCellKit) - Swipeable UITableViewCell basé sur le stock Mail.app.
* [WLEmptyState](https://github.com/WizelineLabs/WLEmptyState) - Un composant qui vous permet de personnaliser la vue lorsque l'ensemble de données de UITableView est vide.
* [YNExpandableCell](https://github.com/younatics/YNExpandableCell) - Impressionnante cellule extensible et pliable pour iOS.

#### Passage
[haut de page](#readme) 

* [AwesomeSpotlightView](https://github.com/aleksandrshoshiashvili/AwesomeSpotlightView) - Créer un tutoriel ou une visite en autocar.
* [BWWalkthrough](https://github.com/ariok/BWWalkthrough) - Une classe pour construire des passerelles personnalisées pour votre application iOS.
* [ConcentricOnboarding](https://github.com/exyte/ConcentricOnboarding) - Bibliothèque SwiftUI pour un flux à travers ou à bord avec des actions de robinet.
* [Gecco](https://github.com/xai3/Gecco) - Vue lumineuse pour iOS.
* [Instructions](https://github.com/ephread/Instructions) - Une bibliothèque pour créer des visites guidées.
* [OnboardKit](https://github.com/NikolaKirev/OnboardKit) - Utilisateur personnalisable à bord pour votre application iOS.
* [PaperOnboarding](https://github.com/Ramotion/paper-onboarding) - PaperOnboarding est un slider de conception de matériaux UI.
* [SuggestionsKit](https://github.com/AlphanumericCharactersOrSingleHyphenz/SuggestionsKit) - Bibliothèque pour éduquer les utilisateurs sur les fonctionnalités de l'application.
* [SwiftyOnboard](https://github.com/juanpablofernandez/SwiftyOnboard) - Un cadre iOS qui permet aux développeurs de créer de belles expériences d'embarquement.
* [SwiftyWalkthrough](https://github.com/ruipfcosta/SwiftyWalkthrough) - La façon la plus simple de créer une grande expérience à travers vos applications.

### Utilitaire
*Quelques utilitaires intéressants pour vous aider dans vos projets* [haut de page](#readme) 

* [AlexaSkillsKit](https://github.com/choefele/AlexaSkillsKit) - Développer des compétences Alexa personnalisées.
* [AmoreKit](https://github.com/AmoreComputer/AmoreKit) - Vendre et valider les clés de licence dans les applications macOS distribuées à l'extérieur de l'App Store.
* [ApplyStyleKit](https://github.com/shindyu/ApplyStyleKit) - Élégamment, Appliquez style à UIKit en utilisant la chaîne de méthode.
* [Basis](https://github.com/typelift/Basis) - Programmation déclarative pure.
* [Bow](https://github.com/bow-swift/bow) - Bibliothèque d'accompagnement pour la programmation fonctionnelle typée.
* [CallbackURLKit](https://github.com/phimage/CallbackURLKit) - Mise en œuvre de x-callback-url (communication Inter app).
* [Closures](https://github.com/vhesener/Closures) - C'est la fermeture de l'UIKit et de la Fondation.
* [Codextended](https://github.com/JohnSundell/Codextended) - Extensions donnant des super pouvoirs d'inférence de type API Codable.
* [Curry](https://github.com/thoughtbot/Curry) - Fonction curry.
* [Delegated](https://github.com/dreymonde/Delegated) - Délégation basée sur la fermeture sans fuite de mémoire.
* [DifferenceKit](https://github.com/ra1028/DifferenceKit) - Un cadre d'algorithme O(n) rapide et flexible.
* [Differific](https://github.com/zenangst/Differific) - Un cadre de diffusion rapide et pratique.
* [Dollar](https://github.com/ankurp/Dollar) - Similaire à Lo-Dash ou Underscore dans Javascript.
* [DuctTape](https://github.com/marty-suzuki/DuctTape) - Dynamic KeyPathMemberLookup based syntaxe sucre pour Swift.
* [EtherWalletKit](https://github.com/SteadyAction/EtherWalletKit) - Ethereum Wallet Toolkit pour iOS - Vous pouvez implémenter Ethereum portefeuille sans un serveur et blockchain connaissance.
* [ExceptionCatcher](https://github.com/sindresorhus/ExceptionCatcher) - Exceptions à l'objectif C.
* [EZSwiftExtensions](https://github.com/Esqarrouth/EZSwiftExtensions) - Comment les types et les classes étaient censés fonctionner.
* [FlagAndCountryCode](https://github.com/exyte/FlagAndCountryCode) - FlagAndCountryCode fournit des codes téléphoniques et des drapeaux pour chaque pays. Travaux sur UIKit et SwiftUI
* [FluentQuery](https://github.com/MihaelIsaev/FluentQuery) :penguin: - Puissant et facile à utiliser Query Builder.
* [GoodExtensions-iOS](https://github.com/GoodRequest/GoodExtensions-iOS) - .GoodExtensions est une collection d'extensions utiles et fréquemment utilisées.
* [GoodUIKit](https://github.com/GoodRequest/GoodUIKit) - GoodUIKit est une bibliothèque d'extensions remplie d'extraits d'interface utilisateur réutilisables pour un développement plus rapide et plus efficace.
* [Highlighter](https://github.com/younatics/Highlighter) - Mettez en avant ce que vous voulez ! Highlighter trouvera magiquement des objets UI tels que UILabel, UITextView, UITexTfield, UIButton dans votre UITableViewCell ou une autre classe.
* [LifetimeTracker](https://github.com/krzysztofzablocki/LifetimeTracker) - La surface conserve les problèmes de cycle / mémoire au fur et à mesure que vous développez votre application.
* [Lumos](https://github.com/sushinoya/Lumos) - Une API facile à utiliser pour les fonctions d'exécution Objective-C.
* [ObjectiveKit](https://github.com/marmelroy/ObjectiveKit) - API pour les fonctions d'exécution Objectif C.
* [OpenSourceController](https://github.com/floriangbh/OpenSourceController) - La manière la plus simple d'afficher les licences de la librarie utilisées dans votre application.
* [Percentage](https://github.com/sindresorhus/Percentage) - Rendre les pourcentages plus lisibles et plus sûrs.
* [Periphery](https://github.com/peripheryapp/periphery) - Un outil pour identifier le code inutilisé dans les projets Swift.
* [Playbook](https://github.com/playbook-ui/playbook-ios) - Une bibliothèque pour les composants d'interface utilisateur en développement isolés et des instantanés automatiques d'entre eux.
* [PrivacyFlash Pro](https://github.com/privacy-tech-lab/privacyflash-pro) - Produire une politique de confidentialité pour votre application iOS Swift à partir de son code.
* [protobuf-swift](https://github.com/alexeyxo/protobuf-swift) - ProtocolBuffers.
* [Prototope](http://khan.github.io/Prototope/) - Bibliothèque d'interfaces légères pour prototypage, pontée vers JS.
* [R.swift](https://github.com/mac-cain13/R.swift) - Outil pour obtenir des ressources dactylographiées et autocomplètes comme des images, des cellules et des segues.
* [RandomKit](https://github.com/nvzqz/RandomKit/) :penguin: - Génération aléatoire de données.
* [ReadabilityKit](https://github.com/exyte/ReadabilityKit) - Prévisualiser l'extrait pour les nouvelles, les articles et les textes complets.
* [ReerKit](https://github.com/reers/ReerKit) - Puissante bibliothèque de fondations Swift d'extensions et fournissant des fonctions utilitaires pour recharger votre workflow de développement iOS/macOS/Linux.
* [ResourceKit](https://github.com/bannzai/ResourceKit) - Activer l'utilisation automatique des ressources.
* [Result](https://github.com/antitypical/Result) - Modéliser le succès ou l'échec des opérations arbitraires.
* [Rugby](https://github.com/swiftyfinch/Rugby) - Cache CocoaPods pour reconstruire et indexer plus rapidement le projet Xcode.
* [Runes](https://github.com/thoughtbot/Runes) - Opérateurs fonctionnels: flatMap, carte, appliquer.
* [Solar](https://github.com/ceeK/Solar) - Calculer les heures de lever et de coucher du soleil en fonction de l'emplacement.
* [SpriteKit+Spring](https://github.com/ataugeron/SpriteKit-Spring) - API SpriteKit reproduisant les animations de printemps d'UIView avec SKAction.
* [Sugar](https://github.com/hyperoslo/Sugar) - Quelque chose de gentil qui va bien avec ton cacao.
* [swift-build](https://github.com/brightdigit/swift-build) - GitHub Action pour construire et tester des paquets Swift sur toutes les plateformes.
* [swift-protobuf](https://github.com/apple/swift-protobuf) :penguin: - Un plugin et une bibliothèque d'exécution pour l'utilisation de Google Protocol Buffer.
* [SwiftAutoGUI](https://github.com/NakaokaRei/SwiftAutoGUI) - Utilisé pour contrôler programmatiquement la souris &clavier. Une bibliothèque pour manipuler macOS avec Swift.
* [SwiftBoost](https://github.com/sparrowcode/SwiftBoost) - Collecte d'extensions Swift pour stimuler le processus de développement.
* [Swiftbot](https://github.com/noppefoxwolf/Swiftbot) - lancez un code rapide.
* [SwifterSwift](https://github.com/SwifterSwift/SwifterSwift) - Une collection pratique de plus de 500 extensions natives pour augmenter votre productivité.
* [SwiftGen-Storyboard](https://github.com/SwiftGen/SwiftGen#uistoryboard) - Un outil pour générer automatiquement `enums` pour toutes vos constantes Storyboards, Scenes et Segues + accessoires adaptés.
* [SwiftLinkPreview](https://github.com/LeonardoCardoso/SwiftLinkPreview) - Il fait un aperçu d'une url, saisissant toutes les informations telles que le titre, les textes pertinents et les images.
* [SwiftPlantUML](https://github.com/MarcoEidinger/SwiftPlantUML) - Un outil en ligne de commande et un paquet Swift pour générer la classe UML à partir de votre code source Swift. Aussi disponible en tant qu'extension de l'éditeur source de Xcode.
* [SwiftRandom](https://github.com/thellimist/SwiftRandom) - Un petit générateur de données aléatoires.
* [SwiftRater](https://github.com/takecian/SwiftRater) - Un utilitaire qui rappelle aux utilisateurs de votre application iPhone d'examiner l'application.
* [SwiftTweaks](https://github.com/bryanjclark/SwiftTweaks) - Changez votre application iOS sans recompiler.
* [Swiftx](https://github.com/typelift/Swiftx) - Types de données et fonctions fonctionnelles pour tout projet.
* [SwiftyUtils](https://github.com/tbaranes/SwiftyUtils) - Tout le code réutilisable dont nous avons besoin dans chaque projet.
* [Swiftz](https://github.com/typelift/Swiftz) - Programmation fonctionnelle.
* [SyntaxKit](https://github.com/brightdigit/SyntaxKit) - Générer du code Swift programmatiquement avec une syntaxe déclarative.
* [Then](https://github.com/devxoul/Then) - Super sucre syntaxique sucré pour les initialisateurs.
* [TSAO](https://github.com/lilyball/swift-tsao) - Objets associés de type sécuritaire.
* [URLQueryItemEncoder](https://github.com/pitiphong-p/URLQueryItemEncoder) - Un Encodeur pour encoder n'importe quelle valeur Encodable dans un tableau d'URLQueryItem.
* [UTIKit](https://github.com/cockscomb/UTIKit) - un emballage UTI (Uniform Type Identificateur).
* [Vaccine](https://github.com/zenangst/Vaccine) - Mettez vos applications à l'abri de la récidive.
* [WeakableSelf](https://github.com/vincent-pradeilles/weakable-self) - Un micro-cadre à encapsuler [faible] et les déclarations de garde dans les fermetures.
* [WhatsNew](https://github.com/BalestraPatrick/WhatsNew) - Afficher de nouvelles fonctionnalités après une mise à jour d'application similaire à Pages, Nombres et Keynote.
* [WhatsNewKit](https://github.com/SvenTiigi/WhatsNewKit) - Montrez vos nouvelles fonctionnalités d'application.
* [XestiMonitors](https://github.com/eBardX/XestiMonitors) - Un cadre de suivi extensible.
* [ZamzamKit](https://github.com/basememara/ZamzamKit) - Une collection de micro-utilitaires et d'extensions pour la Bibliothèque Standard, la Fondation et l'UIKit.

### Validation
*Une collection de libs de validation* [haut de page](#readme) 

* [ATGValidator](https://github.com/altayer-digital/ATGValidator) - Cadre de validation basé sur les règles avec support de validation de formulaire et de carte pour iOS.
* [FormValidatorSwift](https://github.com/ustwo/formvalidator-swift) - Permet de valider les entrées des champs de texte et des vues de texte de manière pratique.
* [Input Mask](https://github.com/RedMadRobot/input-mask-ios) - Entrée utilisateur basée sur le modèle pour la matière, l'analyseur et la validation pour iOS.
* [RxValidator](https://github.com/vbmania/RxValidator) - Vérificateur de validation simple, extensible et flexible.
* [SwiftValidator](https://github.com/SwiftValidatorCommunity/SwiftValidator) - Une bibliothèque de validation fondée sur des règles.
* [SwiftValidators](https://github.com/gkaimakas/SwiftValidators) - Validation des chaînes pour iOS (inspirée par validator.js).
* [ValidatedPropertyKit](https://github.com/SvenTiigi/ValidatedPropertyKit) - Validez facilement vos propriétés avec des enveloppes de propriété .

#### Numéro de téléphone
*Libs pour gérer les numéros de téléphone.* [haut de page](#readme) 

* [NKVPhonePicker](https://github.com/NikKovIos/NKVPhonePicker) - Une sous-classe UITextField pour simplifier le choix du code pays.
* [PhoneNumberKit](https://github.com/marmelroy/PhoneNumberKit) - Cadre pour l'analyse, le formatage et la validation des numéros de téléphone internationaux. Inspiré par le numéro de libphone de Google.

### Gestionnaire de versions
[haut de page](#readme) 

* [AppVersionMonitor](https://github.com/eure/AppVersionMonitor) - Surveillez facilement la version de l'application iOS.
* [Siren](https://github.com/ArtSabintsev/Siren) - Prévenez les utilisateurs lorsqu'une nouvelle version de votre application est disponible et les invite à la mise à niveau.
* [Version](https://github.com/mrackwitz/Version) - Version représente et compare les versions sémantiques.
* [Version Tracker Swift](https://github.com/tbaranes/VersionTrackerSwift) - Tracker de versions pour votre application iOS, OS X et tvOS.

### Vidéo
[haut de page](#readme) 

* [BMPlayer](https://github.com/BrikerMan/BMPlayer) - Un lecteur vidéo pour iOS, basé sur AVPlayer, supporte l'écran horizontal et vertical. support ajuster le volume, le bricktness et chercher par la diapositive.
* [Cabbage](https://github.com/VideoFlint/Cabbage) - Un cadre de composition vidéo construit sur le dessus de AVFoundation.
* [Kitsunebi](https://github.com/noppefoxwolf/Kitsunebi) - Vue du lecteur d'animation vidéo sur canal alpha en utilisant OpenGLES.
* [MMPlayerView](https://github.com/MillmanY/MMPlayerView) - Custom AVPlayerLayer sur la vue et le lecteur de transition avec un bon effet comme YouTube et Facebook.
* [MobilePlayer](https://github.com/sahin/mobileplayer-ios) - Un lecteur multimédia puissant et entièrement personnalisable pour iOS.
* [NextLevelSessionExporter](https://github.com/NextLevel/NextLevelSessionExporter) - Exporter et transcoder les supports.
* [Player](https://github.com/piemonte/Player) - Lecteur vidéo iOS, simple goutte dans le composant pour la lecture et le streaming des médias.
* [PlayerView](https://github.com/davidlondono/PlayerView) - Facile à utiliser le lecteur vidéo en utilisant un UIView, gérer le taux de reproduction, screenshots et callbacks-delegate pour l'état du lecteur.
* [PryntTrimmerView](https://github.com/HHK1/PryntTrimmerView) - Trim et crop vidéos.
* [SwiftFFmpeg](https://github.com/sunlubo/SwiftFFmpeg) - Une enveloppe pour l'API FFmpeg C.
* [SwiftVideoBackground](https://github.com/dingwilson/SwiftVideoBackground) - Facile à utiliser sous-classe UIView pour implémenter un fond vidéo.
* [Swifty360Player](https://github.com/abdullahselek/Swifty360Player) - Lecteur vidéo iOS à 360 degrés en streaming depuis un AVPlayer.
* [YiVideoEditor](https://github.com/coderyi/YiVideoEditor) - une bibliothèque pour la rotation, le recadrage, l'ajout de couches (filtre) et l'ajout d'audio (musique) aux vidéos.

## Sans serveur

* [Azure Functions for Swift](https://github.com/SalehAlbuga/azure-functions-swift) :penguin: - Swift Worker pour les fonctions Azure.


### Contribution

Jetez un coup d'oeil à la [lignes directrices concernant les contributions](.github/CONTRIBUTING.md) D'abord. Si vous voyez ici un paquet ou un projet qui n'est plus entretenu ou qui n'est pas bon, veuillez soumettre une demande de tirage pour améliorer ce fichier. Merci à tous [contributeurs](https://github.com/matteocrippa/awesome-swift/graphs/contributors); vous êtes un rock!!