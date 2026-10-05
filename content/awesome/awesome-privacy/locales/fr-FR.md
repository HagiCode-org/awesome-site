# Awesome Privacy
<p align="center"><img width="500" src="misc/logo.png"> </img></p>
<p align="center">
	<img src="https://awesome.re/badge.svg" alt="Awesome">
	<a href="https://codeberg.org/pluja/awesome-privacy"><img alt="Mirror" src="https://img.shields.io/badge/Mirror-Codeberg-blue"></img></a>
</p>
<p align="center">Liste de services libres et open source respectueux de la vie privée, ainsi que d’alternatives aux services privatifs.</p>
<p align="center">
	<a href="https://github.com/pluja/awesome-privacy/blob/main/misc/ABOUT.md"> À propos </a> | 
	<a href="https://github.com/pluja/awesome-privacy/blob/main/misc/Contributing.md"> Contribuer </a> | 
	<a href="https://github.com/pluja/awesome-privacy/blob/main/misc/QUOTES.md"> Citations </a> | 
	<a href="https://github.com/pluja/awesome-privacy/discussions"> Discussions </a>
</p>

> [!IMPORTANT]
> Anonymat, vie privée et sécurité sont souvent employés indifféremment, mais désignent en réalité des notions distinctes. Il est important d’en comprendre les différences. [En savoir plus dans la section ci-dessous](#privacy-vs-security-vs-anonymity).
> 
> Cette liste vise avant tout à proposer des alternatives qui privilégient la vie privée. Elles vous donnent le contrôle de vos données et ne les collectent ni ne les vendent.

## Sommaire
- [2FA](#2fa)
- [Analytique](#analytics)
- [Android](#android)
  - [Boutiques d’applications Android](#android-app-store)
  - [Outils de nettoyage Android](#android-debloat-tools)
  - [Téléphone Android](#android-dialer)
  - [Gestionnaire de fichiers Android](#android-file-manager)
  - [Galerie Android](#android-gallery)
  - [Clavier Android](#android-keyboard)
  - [Lanceur Android](#android-launcher)
- [Intelligence artificielle](#artificial-intelligence)
	- [ChatGPT](#chatgpt)
	- [Programmation assistée par IA](#ai-coding)
	- [Synthèse vocale](#text-to-speech)
  	- [Reconnaissance vocale](#speech-to-text)
	- [Génération d’images](#image-generation)
- [Signets](#bookmarking)
    - [Annotations de livres et du Web](#book-and-web-annotationshighlights-management)
- [CAPTCHA](#captchas)
- [Calendrier](#calendar)
- [Moteurs de commentaires (Disqus)](#commenting-engines)
- [Dissimulation](#cloaking)
- [Stockage cloud](#cloud-storage)
- [Outils pour les créateurs](#creator-tools)
- [Bases de données](#databases)
- [Applications de rencontre](#dating-apps)
- [Outils de conception](#design-tools)
- [Outils pour développeurs](#developer-tools)
    - [IDE](#ides)
- [Domaines et hébergement](#domains--hosting)
- [Gestionnaires de téléchargement](#download-manager)
- [Livres numériques](#ebooks)
- [Chiffrement](#encryption)
- [Gestion et partage de fichiers](#file-management-and-sharing)
- [Forme et santé](#fitness-and-health)
	- [Suivi de la forme](#fitness-trackers)
	- [Alimentation](#food)
	- [Suivi du cycle menstruel](#menstrual-cycle-trackers)
	- [Santé médicale](#medical-health)
- [Polices de caractères](#fonts)
- [Formulaires](#forms)
- [Jeux](#games)
    - [Mario Kart](#mario-kart)
    - [Minecraft](#minecraft)
    - [Pokémon](#pokemon)
    - [Sonic le hérisson](#sonic-the-hedgehog)
- [Assistants domotiques](#home-assistants)
- [Messagerie instantanée](#instant-messaging)
- [Outils de liens en bio](#link-in-bio-tools)
- [Raccourcisseurs de liens](#link-shorteners)
- [Suivi de la localisation](#location-tracking)
- [Services de messagerie électronique](#mail-services)
- [Cartes et navigation](#maps-and-navigation)
- [Plateformes de diffusion de médias](#media-streaming-platforms)
    - [Vidéo et audio](#video-and-audio)
    - [Audio](#audio)
    - [Podcasts](#podcasts)
- [Reconnaissance musicale (alternative à Shazam)](#music-recognition)
- [Notes et tâches](#notes-and-tasks)
- [Bureautique](#office)
- [Fournisseurs de téléphonie en ligne (SMS)](#online-phone-providers)
- [Systèmes d’exploitation](#operating-systems)
    - [Android](#android)
    - [PC / macOS](#pc--macos)
    - [Smart TV](#smart-tv)
- [Gestionnaires de mots de passe](#password-managers)
- [Pastebin et partage de secrets](#pastebin-and-secret-sharing)
- [Paiements](#payments)
- [Finances personnelles](#personal-finances)
	- [Gestion financière complète](#full-featured-financial-management)
  	- [Gestion de budget](#budget-management)
   	- [Dépenses partagées](#shared-expenses)
	- [Autres](#others)
  	- [Suivi de portefeuille](#portfolio-trackers)
- [Retouche et gestion de photos](#photo-editing-and-management)
- [Stockage de photos](#photo-storage)
- [Outils de confidentialité](#privacy-tools)
- [Accès et contrôle à distance](#remote-access-and-control)
- [Routeurs](#routers)
- [Lecteurs RSS](#rss-readers)
- [Moteurs de recherche](#search-engines)
- [Réseaux et plateformes sociales](#social-networks-and-platforms)
    - [Plateformes de blog (Medium / Blogger)](#blogging-platforms-medium)
    - [Fandom](#fandom)
    - [IMDb](#imdb)
    - [Imgur](#imgur)
    - [Instagram](#instagram)
    - [Quora](#quora)
    - [Reddit](#reddit)
    - [Plateformes de streaming (Twitch)](#streaming-platforms-twitch)
    - [TikTok](#tiktok)
    - [Twitter](#twitter)
    - [YouTube](#youtube)
- [Enregistrement d’écran](#screen-recording)
- [Outils de travail en équipe](#teamworking-tools)
- [Traduction](#translation)
- [Divers](#uncategorized)
- [Utilitaires](#utilities)
- [Gestion de versions](#version-control)
- [Visioconférence et audioconférence](#video-and-audio-conferencing)
- [Montage vidéo](#video-editing)
- [Réseaux privés virtuels (VPN)](#vpns)
- [Navigateur Web](#web-browser)
    - [Extensions de navigateur](#browser-addons) 
    - [Synchronisation du navigateur](#browser-sync)
- [Lanceurs d’alerte](#whistleblowing)

## 2FA
⛔ Évitez les applications qui ne vous permettent pas d’exporter facilement vos clés.
- Authy
- Google Authenticator [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅ À utiliser plutôt
- [🤖](#icons) [Aegis](https://getaegis.app/) - Application Android gratuite, sécurisée et open source pour gérer vos jetons de vérification en deux étapes. Elle prend en charge l’importation depuis diverses applications (Google Authenticator, Authy, etc.), le chiffrement du coffre-fort et l’exportation des clés (en clair ou chiffrées).
- [ente Auth](https://ente.com/auth/) - Application gratuite, multiplateforme, chiffrée de bout en bout et open source pour gérer vos jetons de vérification en deux étapes. Créée par les auteurs d’[ente Photos](https://ente.com), elle utilise la même infrastructure éprouvée. Un compte ente.io est nécessaire.
- [Owky](https://github.com/charlietango/owky) [💀](#icons) - Application d’authentification à deux facteurs gratuite et open source pour iOS.
- [🤖](#icons) [FreeOTPPlus](https://github.com/helloworld1/FreeOTPPlus) - Version améliorée de FreeOTP-Android offrant un authentificateur 2FA riche en fonctionnalités.
- [🤖](#icons) [Stratum](https://github.com/stratumauth/app) - Client d’authentification à deux facteurs (2FA) pour Android et Wear OS.
- [Proton Authenticator](https://proton.me/authenticator) - Application 2FA de Proton, [open source](https://proton.me/community/open-source#apps), [chiffrée de bout en bout](https://proton.me/blog/password-encryption), simple et gratuite.
- [2FAS Auth](https://2fas.com/auth) - Authentificateur TOTP open source pour iOS et Android, avec une extension de navigateur compagnon et sans compte requis. Sous licence GPL-3.0.

[Retour en haut 🔝](#contents)

## Analytique
⛔ Évitez les services d’analyse provenant de Google, Facebook, Microsoft ou de toute entreprise privée. Ces services nuisent à la vie privée des utilisateurs.

✅  **À utiliser plutôt**
- [Ackee](https://ackee.electerious.com/) - Outil d’analyse de sites Web auto-hébergé.
- [Aptabase](https://aptabase.com) - Outil d’analyse open source, simple et privilégiant la confidentialité, pour applications mobiles et de bureau.
- [Cabin](https://withcabin.com) - Outil d’analyse Web qui privilégie la confidentialité et réduit son empreinte carbone.
- [GoatCounter](https://www.goatcounter.com/) - Plateforme d’analyse légère, open source et respectueuse de la vie privée.
- [Matomo](https://matomo.org/) - Alternative à Google Analytics qui protège vos données et la vie privée de vos clients.
- [Nullitics](https://nullitics.com/) - Outil d’analyse open source bon marché, sans effort de mise en place.
- [Pirsch](https://pirsch.io/) - Alternative simple, respectueuse de la vie privée et open source à Google Analytics : légère, sans cookies et facile à intégrer à tout site Web ou serveur.
- [Plausible](https://plausible.io/) - Alternative simple à Google Analytics qui respecte la vie privée.
- [Shynet](https://github.com/milesmcc/shynet) - Outil d’analyse Web moderne, détaillé et respectueux de la vie privée, qui fonctionne sans cookies ni JavaScript.
- [Swetrix](https://swetrix.com) - Service d’analyse Web axé sur la confidentialité, entièrement sans cookies et open source (également auto-hébergeable).
- [Umami](https://umami.is/) - Alternative simple et rapide à Google Analytics pour l’analyse de sites Web.
- [Unidentified Analytics](https://unidentifiedanalytics.web.app/) - Suivi naïf fondé sur l’adresse IP, qui fonctionne partout (Web, ligne de commande, e-mail, etc.). Aucun compte requis. Adapté aux développeurs.
- [Rybbit](https://rybbit.com) - Alternative open source et respectueuse de la vie privée à Google Analytics, 10 fois plus intuitive.

[Retour en haut 🔝](#contents)

## Android

### Boutique d’applications Android
⛔ **À éviter**
- Google Play Store [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **À utiliser plutôt**
- [F-Droid](https://f-droid.org/) - Catalogue installable d’applications FOSS (logiciels libres et open source) pour la plateforme Android.
	- [Droid-ify](https://github.com/Droid-ify/client) - Client F-Droid léger doté d’une interface Material.
	- [Aurora Droid](https://github.com/whyorean/AuroraDroid) [💀](#icons) - Client FOSS moderne pour F-Droid.
	- [Foxy Droid](https://github.com/kitsunyan/foxy-droid) [💀](#icons) - Client F-Droid non officiel dans le style de la version classique.
- [FossDroid](https://fossdroid.com/) - FossDroid a pour objectif de promouvoir les applications libres et open source pour Android : les plus récentes, les plus tendance et les plus populaires.
- [SkyDroid](https://github.com/redsolver/skydroid) [💀](#icons) - Boutique d’applications décentralisée pour Android.
- [Obtainium](https://github.com/ImranR98/Obtainium) - Obtenez les mises à jour des applications directement depuis leur source.
- [Accrescent](https://github.com/accrescent/accrescent) - Boutique d’applications Android novatrice, axée sur la sécurité, la confidentialité et la facilité d’utilisation.

### Clients alternatifs du Google Play Store
- [Aurora Store](https://auroraoss.com/download/#aurora-store) - Interface cliente open source alternative au Google Play Store, conçue dans un souci de confidentialité et avec un design moderne.

### Outils de nettoyage Android
⛔ **À éviter**
- ADB AppControl - Simple interface à ADB assortie d’une [politique de confidentialité désastreuse](https://adbappcontrol.com/en/terms/) qui collecte notamment des informations sur l’appareil et les applications installées ou désinstallées.

✅ **À utiliser plutôt**
- [Universal Android Debloater Next Generation](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/) - Interface graphique multiplateforme écrite en Rust qui utilise ADB pour nettoyer les appareils Android non rootés. Améliore la confidentialité, la sécurité et l’autonomie de votre appareil.

### Téléphone Android
⛔ **À éviter**

Les applications de téléphonie tierces du Play Store peuvent contenir des publicités ou des traqueurs et demander des autorisations inutiles.

✅  **À utiliser plutôt**
- [Fossify Phone](https://github.com/FossifyOrg/Phone) - Gestionnaire d’appels pratique avec répertoire, blocage des numéros et prise en charge de plusieurs cartes SIM.

### Gestionnaire de fichiers Android
⛔ **À éviter**

Les gestionnaires de fichiers préinstallés et les applications tierces du Play Store peuvent contenir des publicités ou des traqueurs et demander des autorisations inutiles.

✅  **À utiliser plutôt**

- [Amaze File Manager](https://github.com/TeamAmaze/AmazeFileManager) - Gestionnaire de fichiers Android simple et attrayant, au design Material.
- [Material Files](https://github.com/zhanghai/MaterialFiles) - Gestionnaire de fichiers open source au design Material pour Android 5.0 et versions ultérieures.
- [Ghost Commander](https://f-droid.org/packages/com.ghostsq.commander/) - Gestionnaire de fichiers à double panneau.
- [🤖](#icons) [Fossify File Manager](https://github.com/FossifyOrg/File-Manager) - Gestionnaire de fichiers open source pour Android, sans publicité ni suivi et sans autorisation d’accès à Internet. Sous licence GPL-3.0.

### Clavier Android
⛔ **À éviter**
- GBoard (Google) [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- SwiftKey [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

✅ **À utiliser plutôt**
- [AnySoftKeyboard](https://anysoftkeyboard.github.io/) - Le seul clavier Android dont vous aurez besoin. Libre comme la parole et gratuit comme une bière.
- [FlorisBoard](https://github.com/florisboard/florisboard) - Clavier gratuit et open source pour les appareils Android 6.0 et versions ultérieures. Moderne, convivial et personnalisable, il respecte pleinement votre vie privée. Encore en version bêta précoce.
- [Futo Keyboard](https://keyboard.futo.tech/) - Clavier moderne qui respecte votre vie privée et votre sécurité, avec saisie vocale hors ligne, écriture gestuelle et correction automatique intelligente.
- [Heliboard](https://github.com/HeliBorg/HeliBoard) - Clavier open source personnalisable et soucieux de la confidentialité, basé sur AOSP / OpenBoard, avec de nombreuses améliorations, notamment des dictionnaires personnalisés, des thèmes et la saisie gestuelle.
- [Indic Keyboard](https://gitlab.com/indicproject/indic-keyboard) - Clavier polyvalent pour les personnes souhaitant écrire en langues indiciennes et indiennes, notamment pour les messages et les e-mails, en complément de l’anglais sur leur téléphone.
- [OpenBoard](https://github.com/openboard-team/openboard) [💀](#icons) - Clavier FOSS à 100 % basé sur AOSP, sans dépendance aux binaires Google et respectueux de votre vie privée. Il n’est plus mis à jour, mais fonctionne toujours.
- [Simple Keyboard](https://github.com/rkkr/simple-keyboard) - Un clavier, tout simplement.

### Galerie Android

La galerie de votre téléphone contient des éléments très personnels de votre vie : des images et des vidéos peuvent immortaliser des moments intimes, des lieux et des personnes qui vous sont chères. En protéger la confidentialité est essentiel pour éviter tout usage abusif de ces informations, et pour préserver aussi la vie privée des amis et de la famille photographiés, qui n’ont peut-être pas consenti au partage de leurs images.

> [!NOTE]
> Pour stocker et sauvegarder vos photos en privé, consultez la section [Stockage de photos](#photo-storage).

⛔ **À éviter**
- **Google Photos** présente des problèmes de confidentialité. Le service collecte de nombreuses données vous concernant, comme l’indique sa [politique de confidentialité](https://policies.google.com/privacy?hl=en-US#infocollect). Google peut analyser vos photos et les signaler pour diverses raisons, comme le montre cet [incident](https://petapixel.com/2022/08/22/google-flags-photos-of-fathers-sick-son-as-child-abuse-informs-police/). L’entreprise utilise également vos photos pour améliorer sa technologie d’IA.
- **Amazon Photos** présente des problèmes similaires. Comme Google Photos, le service recueille de nombreuses informations issues de votre galerie. Vous pouvez consulter quelques exemples des données collectées dans cette [liste d’**exemples**](https://www.amazon.com/gp/help/customer/display.html?nodeId=468496&ref_=footer_privacy#GUID-8966E75F-9B92-4A2B-BFD5-967D57513A40__SECTION_87C837F9CCD84769B4AE2BEB14AF4F01).
- Galerie de **Samsung, Huawei, Xiaomi, etc.**

✅ **À utiliser plutôt**
- [Aves](https://github.com/deckerst/aves) - Belle application Android de galerie et d’exploration des métadonnées, conçue avec Flutter.
- [Fossify Gallery](https://github.com/FossifyOrg/Gallery) - Fork de Simple Gallery. Parcourez vos souvenirs sans interruption avec cette galerie de photos et vidéos.

### Lanceur Android
⛔ **À éviter**

Les lanceurs tiers du Play Store peuvent contenir des publicités ou des traqueurs et demander des autorisations inutiles.

✅  **À utiliser plutôt**
- [Lawnchair](https://lawnchair.app/) - Pas besoin de slogan astucieux.
- [OpenLauncher](https://github.com/OpenLauncherTeam/openlauncher) [💀](#icons) - Lanceur Android personnalisable et open source.
- [KISS](https://kisslauncher.com/) - Lanceur Android ultrarapide et open source de moins de 200 ko.
- [Olauncher](https://github.com/tanujnotes/Olauncher) - Lanceur minimaliste sans publicité pour Android.
- [Pie Launcher](https://github.com/markusfisch/PieLauncher) - Lanceur d’écran d’accueil Android qui utilise un menu radial dynamique plutôt que des icônes fixes.
- [Bliss Launcher](https://gitlab.e.foundation/e/os/BlissLauncher3) - Lanceur par défaut du système d’exploitation /e/, basé sur Android.
Il permet de créer et de parcourir facilement des groupes d’applications et affiche des badges de notification sur les icônes.

[Retour en haut 🔝](#contents)

## Intelligence artificielle

Lorsque vous utilisez des services d’IA dans le cloud, le fournisseur collecte et conserve souvent les données que vous saisissez. Il peut s’agir du contenu de vos requêtes, mais aussi de métadonnées comme les horodatages ou les adresses IP. Selon leurs politiques de confidentialité, les serveurs tiers peuvent donner accès à vos données à leurs employés, partenaires, voire à d’autres utilisateurs. Ces données peuvent servir à diverses fins : entraînement de modèles, recherche ou activités commerciales. Vos requêtes adressées à un service d’IA tiers peuvent être associées à vos informations de compte et de paiement, ce qui relie vos données à votre identité.

#### ChatGPT

- [Jan](https://github.com/janhq/jan) - Alternative open source à ChatGPT qui fonctionne entièrement hors ligne sur votre ordinateur.
- [llama.cpp](https://github.com/ggml-org/llama.cpp) - Exécution des modèles LLaMA de Facebook en C/C++ pur pour fonctionner localement sur un processeur.
- [LocalAI](https://github.com/mudler/LocalAI) - API locale simple, auto-hébergée, compatible avec OpenAI et portée par sa communauté, écrite en Go. Remplacement direct d’OpenAI, exécutable sur processeur avec du matériel grand public.
- [ollama](https://github.com/ollama/ollama) - Lancez localement Llama 2 et d’autres grands modèles de langage.
- [PasteGuard](https://github.com/sgasser/pasteguard) - Proxy de confidentialité pour API de LLM qui masque les informations personnelles et les secrets avant leur transmission aux fournisseurs cloud. Auto-hébergé et compatible OpenAI, il restaure les données d’origine dans les réponses.
- [Shimmy](https://github.com/Michael-A-Kuykendall/shimmy) - Serveur d’inférence IA axé sur la confidentialité, compatible avec l’API OpenAI, sans dépendance au cloud et traitant les modèles localement.
- [Tinfoil](https://tinfoil.sh/) - Chat IA vérifiable et privé, ainsi qu’inférence cloud compatible avec OpenAI. Utilise le calcul confidentiel de NVIDIA et du code open source épinglé dans un journal de transparence, pour une vérifiabilité de bout en bout.
- [Open WebUI](https://openwebui.com) - Interface Web auto-hébergée pour Ollama et d’autres modèles locaux, offrant une conversation privée de type ChatGPT. Sous licence BSD-3.
- [LibreChat](https://librechat.ai) - Interface de chat auto-hébergée qui relie de nombreux modèles d’IA dans une interface privée que vous contrôlez. Open source, sous licence MIT.

#### Programmation assistée par IA

- [Continue](https://github.com/continuedev/continue) - Pilote automatique open source pour VS Code et JetBrains : la manière la plus simple de programmer avec n’importe quel LLM.
- [Cline](https://cline.bot/) - Programmation assistée par IA open source pour VS Code. Examinez chaque décision et utilisez vos propres modèles.
	- [Zoo Code](https://github.com/Zoo-Code-Org/Zoo-Code) - Fork de Cline avec quelques améliorations, successeur communautaire de Roo Code, désormais abandonné.
- [OpenCode](https://github.com/anomalyco/opencode/) - Agent de programmation open source. Connectez des modèles locaux ou les fournisseurs de votre choix.
- [Aider](https://aider.chat) - Assistant de programmation IA en terminal qui modifie le code de votre dépôt Git local à l’aide de vos propres clés d’API. Sous licence Apache-2.0.
- [Tabby](https://tabby.tabbyml.com) - Assistant d’autocomplétion de code auto-hébergé, exécuté sur votre propre matériel, comme alternative à GitHub Copilot. Sous licence Apache-2.0.

#### Synthèse vocale

- [Kokoro FastAPI](https://github.com/remsky/Kokoro-FastAPI) - Wrapper FastAPI conteneurisé pour le modèle de synthèse vocale [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M), avec prise en charge du processeur, d’ONNX et des GPU NVIDIA, de la gestion et de l’assemblage automatique.
- [Piper](https://github.com/OHF-Voice/piper1-gpl) - Système local rapide de synthèse vocale neuronale, au rendu naturel et optimisé pour Raspberry Pi 4.
- [Espeak](https://github.com/espeak-ng/espeak-ng) - eSpeak NG est un synthétiseur vocal open source prenant en charge plus de cent langues et accents. Les voix sont plutôt robotiques.
- [Chatterbox](https://github.com/resemble-ai/chatterbox) - Modèle local de synthèse vocale avec clonage de voix, entièrement exécuté sur votre ordinateur. Open source, sous licence MIT.

#### Reconnaissance vocale

- **Modèles**
	- [Moonshine](https://github.com/moonshine-ai/moonshine) - Reconnaissance vocale automatique (ASR) rapide et précise pour appareils périphériques.
	- [OpenAI Whisper](https://github.com/openai/whisper) - Modèle de reconnaissance vocale polyvalent pouvant fonctionner localement, hors ligne. Il peut transcrire du contenu audio depuis et vers plusieurs langues.
		- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) - Inférence hautes performances du modèle de reconnaissance vocale automatique (ASR) Whisper d’OpenAI.
		- [faster-whisper](https://github.com/SYSTRAN/faster-whisper) - Réimplémentation de Whisper avec CTranslate2, qui transcrit localement jusqu’à quatre fois plus vite. Sous licence MIT.
	- [ParakeetTDT](https://parakeettdt.com/) - Transcription audio efficace. Convertissez la parole en texte avec une rapidité et une précision inédites grâce au modèle avancé de reconnaissance vocale par IA de NVIDIA.

- **Applications et services**
	- [OpenWhispr](https://github.com/OpenWhispr/openwhispr) - Application de dictée vocale et de productivité avec agents d’IA, transcription de réunions, notes et reconnaissance vocale locale ou cloud. Axée sur la confidentialité et disponible sur plusieurs plateformes. Alternative open source à WisprFlow.
	- [Sasayaki](https://github.com/pluja/sasayaki) - Petite application de dictée Android qui transforme la parole en texte clair.
	- [Speaches](https://github.com/speaches-ai/speaches) - Serveur compatible avec l’API OpenAI, prenant en charge la transcription en continu, la traduction et la synthèse vocale.

#### Génération d’images

- [ComfyUI](https://github.com/Comfy-Org/ComfyUI) - ComfyUI permet d’exécuter des pipelines avancés de génération d’images grâce à une interface évoluée. Disponible sur Windows, Linux et macOS.
- [InvokeAI](https://github.com/invoke-ai/InvokeAI) - Générez et créez de superbes contenus visuels localement grâce aux dernières technologies fondées sur l’IA.
- [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) - Interface Web locale pour Stable Diffusion et d’autres modèles de diffusion, reposant sur un backend ComfyUI. Sous licence MIT.

[Retour en haut 🔝](#contents)

## Signets
⛔ **À éviter**
- Evernote Web Clipper - [Politique de confidentialité médiocre](https://tosdr.org/en/service/207). [Les applications contiennent de nombreux traqueurs](https://reports.exodus-privacy.eu.org/en/reports/com.evernote/latest/) et demandent trop d’autorisations.

✅  **À utiliser plutôt**
- [42links](https://42links.tuxproject.de) - Service minimaliste open source et auto-hébergé de gestion des signets.
- [Floccus](https://floccus.org/) - Synchronisez vos signets en privé entre navigateurs et appareils.
- [Grimoire](https://github.com/goniszewski/grimoire) - Gestionnaire de signets moderne, open source et auto-hébergé.
- [Karakeep](https://karakeep.app/) - (anciennement Hoarder) Application open source pour tout mettre en signet, qui utilise l’IA pour étiqueter automatiquement les contenus que vous lui confiez.
- [LinkAce](https://github.com/Kovah/LinkAce) - Archive de signets open source et auto-hébergée qui surveille et organise vos liens enregistrés (GPL-3.0).
- [LinkDing](https://github.com/sissbruecker/linkding) - Gestionnaire de signets open source et auto-hébergé, conçu pour être minimal, rapide et facile à exécuter avec Docker (MIT).
- [Shiori](https://github.com/go-shiori/shiori) - Gestionnaire de signets open source et auto-hébergé écrit en Go, utilisable en ligne de commande ou comme application Web (MIT).
- [Wallabag](https://wallabag.org/) - Service open source de lecture différée, auto-hébergeable en option. Offre un service hébergé payant conçu dans le respect de la vie privée.
- [Linkwarden](https://linkwarden.app) - Gestionnaire de signets auto-hébergé qui enregistre et archive des copies complètes des pages que vous collectez (AGPL-3.0).
- [Readeck](https://readeck.org) - Application de lecture différée auto-hébergée, distribuée en un seul binaire, qui enregistre et archive les articles pour une lecture hors ligne (AGPL-3.0).

### Gestion des annotations et surlignages de livres et de pages Web

- [Blasta](https://git.xmpp-it.net/sch/Blasta) - Gestionnaire collaboratif de signets pour organiser les contenus en ligne.
- [Hypothesis](https://github.com/hypothesis/h/) - Annotez le Web, avec n’importe qui, où que vous soyez.
- [Kobuddy](https://github.com/karlicoss/kobuddy) - Récupérez les signets et annotations de votre liseuse Kobo dans un fichier .txt.

[Retour en haut 🔝](#contents)

## CAPTCHA
⛔ **À éviter**

Les CAPTCHA de Google utilisent des cookies pour suivre les utilisateurs et évaluer leurs adresses IP.

- Google reCAPTCHA [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- hCaptcha [![](https://shields.tosdr.org/en_2207.svg)](https://tosdr.org/en/service/2207)

✅  **À utiliser plutôt**
- [Altcha.org](https://altcha.org) - Alternative CAPTCHA gratuite, open source et auto-hébergée, fondée sur la preuve de travail.
- [mCaptcha](http://mcaptcha.org/) ([dépôt](https://github.com/mCaptcha/mCaptcha)) - Système CAPTCHA open source à l’expérience utilisateur fluide. mCaptcha utilise une preuve de travail (PoW) basée sur SHA-256 pour limiter le débit des utilisateurs.
- [Private Captcha](https://github.com/PrivateCaptcha/PrivateCaptcha) - Alternative CAPTCHA à preuve de travail, auto-hébergée et privilégiant la confidentialité, créée dans l’UE.

[Retour en haut 🔝](#contents)

## Calendrier

⛔ **À éviter**

- **Google Calendar** - Suit vos événements, s’intègre à l’écosystème publicitaire de Google et stocke vos données sur ses serveurs sans chiffrement de bout en bout.

✅  **À utiliser plutôt**

- [🤖](#icons) [Etar](https://github.com/Etar-Group/Etar-Calendar) - Application de calendrier open source pour Android, compatible avec tout serveur CalDAV.
- [🤖](#icons) [Fossify Calendar](https://github.com/FossifyOrg/Calendar) - Application de calendrier hors ligne simple pour Android, avec prise en charge des widgets.
- [🤖](#icons) [KashCal](https://github.com/KashCal/KashCal) - Calendrier Android privilégiant le mode hors ligne, avec synchronisation iCloud/CalDAV, recherche plein texte, événements récurrents et widget d’écran d’accueil. Sous licence Apache 2.0.
- [Nextcloud Calendar](https://apps.nextcloud.com/apps/calendar) - Application de calendrier pour Nextcloud, compatible avec CalDAV et auto-hébergeable.
- [Proton Calendar](https://proton.me/calendar) - Calendrier chiffré de bout en bout de Proton, membre de son écosystème dédié à la confidentialité.

[Retour en haut 🔝](#contents)

## Moteurs de commentaires

⛔ **À éviter**

- **Disqus** - Leurs sites comportent de nombreux traqueurs. Selon sa politique de confidentialité, Disqus collecte l’adresse IP, l’identifiant unique de cookie, l’identifiant de l’appareil, les données de connexion, le type et la version du navigateur, le fuseau horaire et la localisation, les types et versions des extensions, le système d’exploitation et la plateforme, ainsi que d’autres informations technologiques sur les appareils utilisés pour accéder au service.

✅  **À utiliser plutôt**

- [Comentario](https://comentario.app) - Moteur de commentaires Web compact, open source et axé sur la confidentialité, qui ajoute des discussions aux pages Web ordinaires.
- [Disgus](https://github.com/carlitoplatanito/disgus) - Commentaires intégrables à votre site, reposant sur Nostr. L’équivalent de Disqus avec Nostr.
- [Isso](https://github.com/isso-comments/isso) - Serveur de commentaires léger et auto-hébergé, écrit en Python et JavaScript, conçu pour remplacer Disqus sans autre changement.
- [Remark42](https://remark42.com) - Moteur de commentaires auto-hébergé, léger et simple (mais fonctionnel), qui n’espionne pas ses utilisateurs.
- [Giscus](https://giscus.app) - Système de commentaires qui stocke les discussions dans GitHub Discussions, sans base de données, publicité ni suivi. Open source, sous licence MIT.

[Retour en haut 🔝](#contents)

## Dissimulation
### Images
- [Fawkes](https://github.com/Shawn-Shan/fawkes) [💀](#icons) - Outil qui préserve la confidentialité face aux systèmes de reconnaissance faciale.
  - [CloakMe](https://github.com/pluja/CloakMe) [💀](#icons) - Interface Web pour l’algorithme Fawkes.
- [ImageScrubber](https://github.com/everestpipkin/image-scrubber) [💀](#icons) - Outil convivial dans le navigateur pour anonymiser les photos prises lors de manifestations ([version hébergée par everestpipkin](https://everestpipkin.github.io/image-scrubber/)).

### Texte
- [Stegcloak](https://stegcloak.surge.sh/) [💀](#icons) - Masquez des secrets dans du texte brut à l’aide de caractères invisibles et de mots de passe ([dépôt](https://github.com/kurolabs/stegcloak)).

[Retour en haut 🔝](#contents)

## Stockage cloud
⛔ **À éviter**
- **Google Drive** - Propriété de Google, sa politique de confidentialité est [très mauvaise](https://tosdr.org/en/service/217). Les données sont stockées sur ses serveurs distants, où vous en perdez le contrôle. Le service utilise des traqueurs et ne propose aucun chiffrement.
- **Dropbox** - [Politique de confidentialité médiocre](https://tosdr.org/en/service/270). L’application contient [divers traqueurs](https://reports.exodus-privacy.eu.org/en/reports/com.dropbox.android/latest/) et demande de nombreuses autorisations.
- **OneDrive** - Propriété de Microsoft, sa politique de confidentialité est [très mauvaise](https://tosdr.org/en/service/244). Les données sont stockées sur ses serveurs distants, où vous en perdez le contrôle. Le service utilise des traqueurs et ne propose aucun chiffrement.

✅  **À utiliser plutôt**
- [Nextcloud](https://nextcloud.com/) - Plateforme de productivité open source et auto-hébergée qui vous laisse le contrôle.
- [Seafile](https://www.seafile.com/en/home/) - Synchronisation et partage de fichiers hautes performances. Inclut un wiki, l’édition WYSIWYG et d’autres fonctions de gestion des connaissances.
- [Peergos](https://peergos.org/) - Espace en ligne sécurisé et privé pour stocker, partager et consulter vos photos, vidéos, musiques et documents. Inclut également un calendrier, un fil d’actualités, des listes de tâches, une messagerie instantanée et un client de courrier électronique. Open source et auto-hébergeable.
- [Proton Drive](https://proton.me/drive) - Coffre-fort suisse chiffré de bout en bout pour protéger vos fichiers. [Lire cet article sur l’arrestation d’un militant pour le climat](https://proton.me/blog/climate-activist-arrest).
- [PrivateStorage](https://private.storage/) - Stockage cloud et synchronisation de dossiers axés sur la confidentialité, sans compte et avec chiffrement côté client.

**Autres outils utiles**
- [Cryptomator](https://cryptomator.org) - Cryptomator chiffre vos données rapidement et simplement. Vous pouvez ensuite les envoyer à votre service cloud favori en toute sécurité.
- [Syncthing](https://syncthing.net/) - Programme de synchronisation continue de fichiers entre au moins deux ordinateurs en temps réel, à l’abri des regards indiscrets.
- [Rclone](https://rclone.org/) - Programme en ligne de commande pour gérer les fichiers stockés dans le cloud. Alternative complète aux interfaces Web des fournisseurs ; comme les outils ci-dessus, il permet de chiffrer les fichiers dans le cloud.
- [Restic](https://restic.net/) - Programme en ligne de commande pour gérer les fichiers auprès de divers fournisseurs cloud. Restic chiffre par défaut et offre notamment la navigation parmi les instantanés de type Git sans frais de stockage supplémentaires, la déduplication et d’importantes économies grâce à la compression.

[Retour en haut 🔝](#contents)

## Outils pour les créateurs

Privilégiez les alternatives open source et pair à pair qui protègent la confidentialité des données, écartent les intermédiaires tiers et offrent des fonctions transparentes, soutenues par la communauté, plutôt que des outils grand public comme Riverside.fm, Restream et Camtasia.

- [vdo.ninja](https://vdo.ninja/) - Outil puissant qui intègre des flux vidéo distants à OBS ou à d’autres logiciels de studio via WebRTC.
	- [socialstream.ninja](https://github.com/steveseguin/social_stream#readme) - Regroupez vos flux de messages sur les réseaux sociaux en direct et bien plus encore.
- [OBS Studio](https://obsproject.com/) - Logiciel gratuit et open source d’enregistrement vidéo et de diffusion en direct.
- [Screenity](https://screenity.io/) - Enregistreur d’écran gratuit, privé et convivial.

[Retour en haut 🔝](#contents)

## Bases de données
[![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
⛔ Évitez les bases de données privatives que vous ne contrôlez pas, comme Google Firebase.

✅ À utiliser plutôt
- [Appwrite](https://appwrite.io/) - Serveur backend sécurisé et open source pour les développeurs Web, mobiles et Flutter.
- [Supabase](https://supabase.com/) - Alternative open source à Firebase ([auto-hébergement limité](https://github.com/supabase/supabase/issues/4934) [parmi les fonctionnalités](https://github.com/supabase/supabase/issues/4440#issuecomment-992108832)).
- [Pocketbase](https://pocketbase.io/) - Backend open source écrit en Go et tenant dans un seul fichier.
- [TrailBase](https://trailbase.io/) - Alternative open source à Firebase, constituée d’un exécutable unique et basée sur Rust et SQLite. Propose des API REST typées et en temps réel, l’authentification et une interface d’administration. Sous licence OSL-3.0.
- [Baserow](https://baserow.io/) - Base de données sans code et tableur auto-hébergés, alternative open source à Airtable. Cœur du logiciel sous licence MIT.

[Retour en haut 🔝](#contents)

## Outils pour développeurs
- [Beekeeper Studio](https://www.beekeeperstudio.io) - Éditeur SQL et gestionnaire de bases de données open source dont la mission affirme un engagement pour la confidentialité.

### IDE
⛔ Évitez les IDE privatifs truffés de traqueurs et de télémétrie.

✅ À utiliser plutôt
- [Neovim](https://neovim.io/) - Éditeur de texte basé sur Vim et hautement extensible.
- [VSCodium](https://vscodium.com/) - Binaires libres et open source de VS Code. Le code source de VS Code est open source (sous licence MIT), mais le produit téléchargeable (Visual Studio Code) est distribué sous [une licence non libre](https://code.visualstudio.com/license) et comprend de la télémétrie et du suivi.

[Retour en haut 🔝](#contents)

## Applications de rencontre

Des applications comme Tinder collectent et vendent des informations personnelles et intimes. Il a notamment été démontré que Tinder [facture certains utilisateurs jusqu’à cinq fois plus pour le même service](https://www.mozillafoundation.org/en/blog/new-research-tinders-opaque-unfair-pricing-algorithm-can-charge-users-up-to-five-times-more-for-same-service/), [déduit des estimations de votre intelligence et d’autres caractéristiques psychométriques pour les vendre à des tiers](https://www.reddit.com/r/privacy/comments/k7x4s7/tinder_extrapolates_estimations_on_your/), et que [l’application pourrait en savoir plus sur vous que vous-même](https://www.theguardian.com/technology/2017/sep/26/tinder-personal-data-dating-app-messages-hacked-sold), parmi bien d’autres faits inquiétants rapportés en ligne.

⛔ **À éviter**
- [![](https://shields.tosdr.org/en_462.svg)](https://tosdr.org/en/service/462)
- Grindr
- Badoo
- Lovoo

✅  **À utiliser plutôt**
- [Alovoa](https://alovoa.com/) - Plateforme de rencontre gratuite, open source et respectueuse de votre vie privée.

[Retour en haut 🔝](#contents)

## Outils de conception

La domination d’**Adobe** dans les outils de conception restreint le choix des créateurs et compromet leur vie privée. L’[absence de prise en charge de Linux](https://helpx.adobe.com/in/download-install/kb/operating-system-guidelines.html) les cantonne à Windows ou macOS. La [collecte de données via Creative Cloud](https://tosdr.org/en/service/417) et les [traqueurs](https://reports.exodus-privacy.eu.org/en/reports/com.adobe.psmobile/latest/) d’Adobe renforcent encore les inquiétudes. L’entreprise pourrait aussi [utiliser les créations de ses clients pour entraîner ses IA](https://mastodon.art/@Krita/109632425661190494), avec des risques potentiels pour la propriété intellectuelle. Les designers peuvent donc envisager des alternatives open source et respectueuses de la vie privée afin d’éviter la plupart de ces problèmes.

### InDesign

✅  **À utiliser plutôt**
- [Scribus](https://www.scribus.net/) - Logiciel de PAO gratuit et open source, disponible sur la plupart des systèmes de bureau. Conçu pour la mise en page, la composition et la préparation de fichiers destinés à l’impression professionnelle, Scribus peut aussi créer des présentations et formulaires PDF animés et interactifs.

### Photoshop / Illustrator

✅  **À utiliser plutôt**
- [GIMP](https://www.gimp.org/) - Éditeur matriciel gratuit et open source permettant la manipulation et la retouche d’images, le dessin libre, la conversion entre différents formats et d’autres tâches spécialisées. Il n’est pas conçu pour le dessin, bien que des artistes et créateurs l’utilisent parfois à cette fin.
- [Inkscape](https://inkscape.org/) - Éditeur de graphismes vectoriels gratuit et open source pour GNU/Linux, Windows et macOS. Riche en fonctionnalités, il sert aux illustrations artistiques et techniques, comme les bandes dessinées, les images clipart, les logos, la typographie, les diagrammes et les organigrammes.
- [Krita](https://krita.org/) - Éditeur graphique matriciel gratuit et open source, conçu principalement pour l’art numérique et l’animation 2D.
- [Excalidraw](https://github.com/excalidraw/excalidraw) - Tableau blanc virtuel permettant d’esquisser des diagrammes à l’aspect dessiné à la main.

### Figma

✅  **À utiliser plutôt**
- [Penpot](https://penpot.app/) - Plateforme open source de conception et de prototypage pour les équipes produit.

[Retour en haut 🔝](#contents)

## Domaines et hébergement
⛔ Évitez les bureaux d’enregistrement de noms de domaine qui portent atteinte à la vie privée.

✅ À utiliser plutôt
- [OrangeWebsite](https://www.orangewebsite.com/) - Hébergement Web islandais favorable à la liberté d’expression, avec inscription anonyme et paiement en cryptomonnaie ou en espèces.
- [1984 Hosting](https://1984.hosting/) - Hébergeur et bureau d’enregistrement islandais axé sur les droits civils, acceptant Monero et l’inscription anonyme.
- [Autres offres sur kycnot.me (catégorie VPS)](https://kycnot.me/?categories=vps) - Fournisseurs de VPS et d’hébergement sans vérification d’identité (KYC).

[Retour en haut 🔝](#contents)

## Gestionnaires de téléchargement

- [Persepolis Download Manager](https://github.com/persepolisdm/persepolis) - Gestionnaire de téléchargement et interface graphique pour Aria2, écrit en Python. Logiciel libre et open source, conçu pour les distributions GNU/Linux, les BSD, macOS et Microsoft Windows.
- [Motrix](https://github.com/agalwood/Motrix) - Gestionnaire de téléchargement complet.
- [Xtreme Download Manager](https://github.com/subhra74/xdm) - Outil puissant qui accélère les téléchargements jusqu’à 500 %, enregistre les vidéos en streaming depuis YouTube, DailyMotion, Facebook, Vimeo, Google Video et plus de 1 000 autres sites, reprend les téléchargements interrompus, les planifie et les convertit.
- [axel](https://github.com/axel-download-accelerator/axel) - Accélérateur de téléchargement léger en ligne de commande. Prend en charge les protocoles HTTP, HTTPS, FTP et FTPS.

[Retour en haut 🔝](#contents)

## Livres numériques

⛔ **À éviter**

Les plateformes commerciales de livres numériques suivent vos habitudes de lecture, associent les achats à des comptes qui peuvent être désactivés et exigent une activation en ligne permanente.

- **Amazon Kindle** - Suit vos activités de lecture, exige un compte Amazon et possède un historique documenté de [suppression à distance](https://www.nytimes.com/2009/07/18/technology/18kindle.html).
- **Google Play Books** - Associé à un compte Google, suit les données de lecture et ne propose pas de mode entièrement hors ligne.
- **Kobo / Apple Books** - Exigent un compte et synchronisent par défaut les données de lecture sur les serveurs de l’entreprise.

✅ **À utiliser plutôt**

- [Calibre](https://calibre-ebook.com/) - Gestionnaire de livres numériques open source pour Linux, Windows et macOS, avec conversion de formats, modification des métadonnées et lecteur intégré (GPL-3.0).
- [Kavita](https://github.com/Kareadita/Kavita) - Bibliothèque numérique multiplateforme auto-hébergée pour livres et bandes dessinées, avec lecteur Web intégré (GPL-3.0).
- [Komga](https://github.com/gotson/komga) - Serveur multimédia auto-hébergé pour bandes dessinées, magazines et livres numériques, avec interface Web adaptative et prise en charge d’OPDS (MIT).

[Retour en haut 🔝](#contents)

## Chiffrement
N’oubliez pas : sans chiffrement fort, de nombreuses personnes vous espionneront systématiquement.

- [Veracrypt](https://www.veracrypt.fr/en/Home.html) - Logiciel gratuit et open source de chiffrement de disque pour Windows, macOS et Linux.
- [Shufflecake](https://shufflecake.net/index.html) - Logiciel libre et open source qui permet de dissimuler de manière plausible plusieurs systèmes de fichiers cachés sous Linux.
- [Hat.sh](https://hat.sh/) - Outil de chiffrement de fichiers gratuit, rapide, sécurisé et sans serveur.
- [Cryptomator](https://cryptomator.org/) - Cryptomator chiffre vos données rapidement et simplement. Vous pouvez ensuite les envoyer à votre service cloud favori en toute sécurité.
- [Stegcloak](https://stegcloak.surge.sh/) [💀](#icons) - Masquez des secrets dans du texte brut à l’aide de caractères invisibles et de mots de passe.
- [Photok](https://github.com/leonlatsch/Photok) - Coffre-fort photo gratuit qui stocke vos photos chiffrées sur votre appareil et les dissimule aux autres.
- [age](https://age-encryption.org) - Outil moderne de chiffrement de fichiers en ligne de commande, avec de petites clés et sans configuration ni trousseau à gérer. Open source, sous licence BSD-3.
- [Tomb](https://dyne.org/software/tomb/) - Outil en ligne de commande pour créer et gérer des dossiers de stockage chiffrés sous GNU/Linux, basé sur LUKS et cryptsetup standard.

### Chiffrement du système d’exploitation

- [Cryptsetup](https://gitlab.com/cryptsetup/cryptsetup) - Chiffrement intégral du disque sous Linux. Cryptsetup est un utilitaire qui facilite la configuration du chiffrement de disque fondé
sur le module du noyau DMCrypt.

[Retour en haut 🔝](#contents)

## Gestion et partage de fichiers
⛔ **À éviter**
- **WeTransfer** - [Politique de confidentialité médiocre](https://tosdr.org/en/service/214). Les fichiers ne sont pas chiffrés de bout en bout. Le site contient de nombreux outils d’analyse et traqueurs.
- **SendAnywhere** - Aucun chiffrement de bout en bout. Le site regorge d’outils d’analyse et de traqueurs de Facebook, Google, Cloudflare…

✅ **À utiliser plutôt**
- [Blaze](https://blaze.vercel.app/) - Méthode rapide, pair à pair et radicalement différente de transfert de fichiers.
- [Blindsend](https://github.com/blindnet-io/blindsend) [💀](#icons) - Outil open source d’échange de fichiers privé et chiffré de bout en bout.
- [Croc](https://github.com/schollz/croc) - Envoyez facilement et en toute sécurité des fichiers d’un ordinateur à un autre.
- [Dat-cp](https://github.com/tom-james-watson/dat-cp) [💀](#icons) - Copiez des fichiers entre des hôtes d’un réseau à l’aide du réseau pair à pair Dat.
- [Destiny](https://leastauthority.com/community-matters/destiny/) - Envoyez des fichiers directement au destinataire en temps réel. Développé pour et avec des organisations de défense des droits humains comme alternative libre de technologie améliorant la confidentialité.
- [Gokapi](https://github.com/Forceu/Gokapi) - Alternative légère et auto-hébergée à Firefox Send, sans téléversement public. Compatible avec AWS S3.
- [Lufi](https://framagit.org/fiat-tux/hat-softwares/lufi) - « Téléversons ce fichier » : logiciel de partage de fichiers.
- [Localsend](https://localsend.org/) - Partagez des fichiers avec les appareils à proximité. Gratuit, open source et multiplateforme.
- [Magic Wormhole](https://github.com/magic-wormhole/magic-wormhole) - Transférez des fichiers d’un ordinateur à un autre en toute sécurité.
- [OnionShare](https://github.com/onionshare/onionshare) - Outil open source permettant de partager des fichiers de façon sécurisée et anonyme, d’héberger des sites Web et de discuter avec des amis sur le réseau Tor.
- [Paperless-ngx](https://github.com/paperless-ngx/paperless-ngx) - Version surpuissante de paperless, soutenue par la communauté et basée sur paperless-ng.
- [PairDrop](https://github.com/schlagmichdoch/PairDrop) - Version améliorée de Snapdrop qui permet également d’associer des appareils et de partager des fichiers hors de votre réseau.
- [QRcp](https://github.com/claudiodangelis/qrcp) - Transférez des fichiers par Wi-Fi de votre ordinateur vers votre appareil mobile en scannant un code QR, sans quitter le terminal.
- [Send](https://gitlab.com/timvisee/send) - Partage de fichiers simple et privé. (Fork de Mozilla Send)
- [Sharik](https://github.com/marchellodev/sharik) [💀](#icons) - Fonctionne par Wi-Fi ou partage de connexion (point d’accès Wi-Fi), sans accès à Internet. Disponible sur Android, iOS, Linux, macOS et Windows.
- [Snapdrop](https://github.com/RobinLinus/snapdrop) - Application Web progressive de partage local de fichiers, inspirée d’AirDrop d’Apple.
- [Winden](https://winden.app/) - Version pratique de Magic Wormhole utilisable dans le navigateur, sans installer d’application.
- [Yopass](https://github.com/jhaals/yopass) - Partage sécurisé de secrets, mots de passe et fichiers.
- [scrt.link](https://scrt.link/file) - Transfert de fichiers chiffré de bout en bout, jusqu’à 100 Go et 30 jours de conservation. Stockage en Suisse.

[Retour en haut 🔝](#contents)

## Forme et santé
⛔ Votre santé est un élément **très** important de vos **données privées** et mérite **beaucoup** d’attention. Les données de santé sont aussi parmi les plus convoitées. N’utilisez pas les applications de Google, Fitbit, Huawei, Xiaomi ou de toute entreprise cherchant à collecter vos données personnelles.

Si vous avez besoin d’une application de **suivi du cycle menstruel**, évitez Clue, Period Tracker et autres applications du même genre. Ces applications roses et mignonnes convoitent vos données intimes et relatives à votre cycle menstruel, et les revendront certainement. Protégez votre vie privée : vous trouverez ci-dessous de bonnes alternatives.

✅  **À utiliser plutôt**

### Suivi de la forme

- [🤖](#icons) [Fitotrack](https://codeberg.org/jannis/FitoTrack) - Suivi d’activité physique pour Android, soucieux de la confidentialité.
- [🤖](#icons) [OpenTracks](https://codeberg.org/OpenTracksApp/OpenTracks) - Application de suivi sportif qui respecte entièrement votre vie privée.
- [🤖](#icons) [Gadgetbridge](https://codeberg.org/Freeyourgadget/Gadgetbridge) - Alternative gratuite et sans cloud aux applications Android propriétaires et fermées des fabricants d’objets connectés.
- [FitTrackee](https://codeberg.org/FitTrackee/FitTrackee) - Application Web auto-hébergée qui enregistre et analyse les activités en plein air à partir de fichiers GPS, comme alternative à Strava (AGPL-3.0).

### Planificateurs d’entraînement

- [wger](https://wger.de/en/software/features) - Application Web gratuite, open source et auto-hébergée pour gérer vos exercices, entraînements et votre alimentation.

### Alimentation
- [OpenFoodFacts](https://world.openfoodfacts.org/) - Base de données de produits alimentaires créée par tous et pour tous. Elle vous aide à faire de meilleurs choix alimentaires.
    - [Applications OFF](https://world.openfoodfacts.org/open-food-facts-mobile-app) - Applications open source pour Android et iOS qui scannent les codes-barres et affichent les ingrédients, additifs et données nutritionnelles.

### Suivi du cycle menstruel
- [🤖](#icons) [Bluemoon](https://gitlab.com/ngrob/bluemoon-android) - Application open source de suivi des menstruations, respectueuse de la vie privée. Vos règles, vos données !
- [🤖](#icons) [Drip](https://dripapp.org/) - Suivi du cycle menstruel et de la fertilité. Tout ce que vous saisissez reste sur votre appareil.
- [Euki](https://eukiapp.org/) - L’application de suivi des règles qui ne vous suit pas.
- [🤖](#icons) [Periodical](https://codeberg.org/askaaron/periodical) - Calendrier pour suivre vos menstruations et calculer les jours de fertilité possibles.
- [Poppy](https://poppy.usenostr.org) - Suivi privé des règles dans le navigateur. Les données sont conservées localement et peuvent être synchronisées et sauvegardées via des relais Nostr, sans serveur ni compte Poppy, avec chiffrement de bout en bout.

### Santé médicale
- [Fasten](https://github.com/fastenhealth/fasten-onprem) [💀](#icons) - Agrégateur open source, auto-hébergé et personnel ou familial de dossiers médicaux électroniques, conçu pour s’intégrer à des milliers d’assurances, d’hôpitaux et de cliniques.

[Retour en haut 🔝](#contents)

## Polices de caractères
⛔ **À éviter**
- Google Fonts (no selfhosted) [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **À utiliser plutôt**
### Alternatives à Google Fonts
- [coolLabs Fonts](https://fonts.coollabs.io/) - Alternative de remplacement à Google Fonts qui respecte la vie privée.
- [Bunny Fonts](https://fonts.bunny.net/) - Plateforme open source de polices Web, privilégiant la confidentialité et conçue pour remettre la vie privée au cœur d’Internet.

### Fonderies
- [Velvetyne](https://www.velvetyne.fr/) - Fonderie typographique française qui distribue des polices libres et open source, gratuites pour un usage personnel ou commercial.
- [OpenFoundry](https://open-foundry.com/) - Plateforme organisée qui présente des polices open source gratuites à utiliser et à modifier.

[Retour en haut 🔝](#contents)

## Formulaires
⛔ **À éviter**
- Google Forms [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **À utiliser plutôt**
- [TypeBot](https://typebot.com) - Formulaires conversationnels open source.
- [CryptPad Forms](https://cryptpad.fr/form/) - Fait partie de la suite collaborative open source et chiffrée de bout en bout CryptPad.
- [FramaForms](https://framaforms.org/) - Créez facilement des sondages en ligne tout en respectant votre public.
- [Formbricks](https://formbricks.com) - Créateur auto-hébergé de sondages et de formulaires, pour recueillir des réponses sans confier vos données à un tiers (AGPL-3.0).

[Retour en haut 🔝](#contents)

## Jeux

### Mario Kart

Nintendo [collecte des données utilisateur](https://www.reddit.com/r/privacy/comments/qtj9xt/til_nintendo_collects_data_from_switch_owners/) et, si vous désactivez cette collecte, peut [la réactiver](https://www.altchar.com/game-news/the-latest-nintendo-switch-update-secretly-turns-on-user-data-sharing-adSyV7t35NPg). Le jeu propose aussi un abonnement payant financièrement inaccessible à tout le monde.

✅  **À utiliser plutôt**

- [SuperTuxKart](https://supertuxkart.net/Main_Page) - Jeu de course d’arcade 3D open source proposant de nombreux personnages, circuits et modes de jeu.
- [Sonic Robo Blast 2 Kart](https://mb.srb2.org/addons/srb2kart.2435/) - Jeu de course de kart au style classique, doté de magnifiques circuits et d’objets loufoques.

### Minecraft

[![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

Le jeu appartient à Microsoft. Si cela ne suffisait pas, jouer à Minecraft nécessite un compte Microsoft depuis le 11 mars 2022. Microsoft verrouille parfois des comptes peu après leur création et [oblige l’utilisateur](https://github.com/MultiMC/Launcher/issues/4093) [à fournir](https://www.reddit.com/r/privacy/comments/e6x27o/microsoft_forcing_me_to_give_then_my_phone_number/) un **numéro de téléphone**. Voir : [FAQ Minecraft](https://help.minecraft.net/hc/en-us/articles/360050865492-Minecraft-Java-Edition-Account-Migration-FAQ), [1](https://www.reddit.com/r/Minecraft/comments/sl8pkv/how_can_my_friend_migrate_her_account_to/hvq2sv6/), [2](https://www.reddit.com/r/privacy/comments/spcuj4/microsoft_is_going_to_attempt_to_move_everyone_on/).

Le jeu intègre de la [télémétrie depuis la version v21w38a, sans possibilité de la désactiver](https://bugs.mojang.com/browse/MC-237493). Il est également [soumis](https://www.minecraft.net/en-us/terms) aux [conditions de confidentialité de Microsoft](https://privacy.microsoft.com/en-us/privacystatement), un véritable cauchemar pour la vie privée.

✅  **À utiliser plutôt**
- [Luanti](https://www.luanti.org/) - Moteur de jeu voxel open source doté de nombreuses fonctionnalités.
    - [Mineclonia](https://content.luanti.org/packages/ryvnf/mineclonia/) - Jeu bac à sable de survie inspiré de Minecraft. Fork de MineClone2 axé sur la stabilité, les performances multijoueur et les fonctionnalités.

#### Extensions pour Minecraft

Si vous souhaitez tout de même jouer à Minecraft, certaines extensions peuvent vous aider à préserver un peu votre vie privée. N’oubliez toutefois pas que vous soutenez ainsi Microsoft.

✅  **À utiliser plutôt**
- [No-Chat-Reports](https://github.com/Aizistral-Studios/No-Chat-Reports) - Extension Spigot qui retire les signatures cryptographiques des messages des joueurs, mais qui, par conception, casse toutes les extensions de chat.
- [FreedomChat](https://github.com/ocelotpotpie/FreedomChat) - Excellente alternative à No-Chat-Reports, qui ne casse aucune extension de chat.
- [No-Telemetry](https://github.com/kb-1000/no-telemetry) - Mod qui désactive la collecte de données d’utilisation (la télémétrie) introduite dans Minecraft 1.18 (instantané 21w38a).

### Pokémon

Nintendo [collecte des données utilisateur](https://www.reddit.com/r/privacy/comments/qtj9xt/til_nintendo_collects_data_from_switch_owners/) et, si vous désactivez cette collecte, peut [la réactiver](https://www.altchar.com/game-news/the-latest-nintendo-switch-update-secretly-turns-on-user-data-sharing-adSyV7t35NPg). Le jeu propose aussi un abonnement payant financièrement inaccessible à tout le monde.

✅  **À utiliser plutôt**

- [Pokete](https://github.com/lxgr-linux/pokete) - Petit jeu en terminal dans le style d’un jeu très populaire et ancien de Gamefreak.

### Sonic le hérisson

- [Sonic Robo Blast 2](https://www.srb2.org/) - Jeu de fans 3D open source mettant en scène Sonic le hérisson, développé à partir d’une version modifiée du port Doom Legacy de Doom.

[Retour en haut 🔝](#contents)

## Assistants domotiques

N’utilisez pas Google Home ni Alexa. S’il vous plaît. N’en offrez à personne. Ces appareils ouvrent les portes de votre domicile à la surveillance et peuvent être transformés à volonté en dispositifs de surveillance grâce à leurs mises à jour automatiques.

Articles intéressants : [1](https://www.theguardian.com/technology/2019/oct/09/alexa-are-you-invading-my-privacy-the-dark-side-of-our-voice-assistants), [2](https://www.theregister.com/2020/08/08/ai_in_brief/), [3](https://www.networkworld.com/article/3190176/virtual-assistants-hear-everything-so-watch-what-you-say-i-m-not-kidding.html), [4](https://www.democracynow.org/2017/1/4/privacy_advocates_warn_of_potential_surveillance), [5](https://www.mirror.co.uk/news/weird-news/woman-finds-amazon-thousands-recordings-25240984), [6](https://www.seattletimes.com/business/locked-down-lawyers-warned-alexa-is-hearing-confidential-calls/), [7](https://hide.me/en/blog/assistant-devices-are-a-privacy-nightmare/).

- Google Home [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Alexa [![](https://shields.tosdr.org/en_190.svg)](https://tosdr.org/en/service/190)
- Cortana [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Siri [![](https://shields.tosdr.org/en_158.svg)](https://tosdr.org/en/service/158)

✅  **À utiliser plutôt**
- [OpenVoiceOS](https://openvoiceos.org) - Assistant vocal open source et successeur maintenu de Mycroft, entièrement exécuté hors ligne sur votre propre matériel. Sous licence Apache-2.0.
- [Home Assistant](https://www.home-assistant.io/) - Domotique open source qui privilégie le contrôle local et la confidentialité.

[Retour en haut 🔝](#contents)

## Messagerie instantanée
**Consultez [ce site](https://www.securemessagingapps.com/) pour des comparatifs*.

⛔ **À éviter**
- WhatsApp | [![](https://shields.tosdr.org/en_198.svg)](https://tosdr.org/en/service/198)
- Instagram DM | [![](https://shields.tosdr.org/en_219.svg)](https://tosdr.org/en/service/219)
- Facebook Messenger | [![](https://shields.tosdr.org/en_182.svg)](https://tosdr.org/en/service/182)
- Skype | [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Zoom | [![](https://shields.tosdr.org/en_2198.svg)](https://tosdr.org/en/service/2198)
- Google Hangouts / Chat | [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **À utiliser plutôt**

### Décentralisée
Aucun point de contrôle ni de défaillance unique. Le réseau décentralisé est exploité par différents serveurs gérés par des bénévoles dans le monde entier. Vous choisissez où vos données sont conservées ou pouvez héberger votre propre serveur. Les protocoles sont un peu plus complexes (en raison de la fédération entre serveurs) et des métadonnées supplémentaires sont ajoutées aux messages, sans compromettre la confidentialité.

- [Matrix (protocole)](https://matrix.org/) - Réseau ouvert pour des communications sécurisées et décentralisées.
   - [Element](https://element.io/) - Application de messagerie sécurisée tout-en-un pour les équipes, amis et organisations. Vous gardez le contrôle de vos conversations, protégées contre l’exploration des données et la publicité. Chiffrement de bout en bout.
   - [Cinny](https://cinny.in/) - Client Matrix privilégiant une interface simple, élégante et sécurisée.
- [Jabber / XMPP (protocole)](https://xmpp.org/) - Standard universel et ouvert de messagerie, éprouvé, indépendant et axé sur la confidentialité, avec chiffrement de bout en bout.
  - [🤖](#icons) [Conversations](https://conversations.im/) - Client Jabber/XMPP pour smartphones Android 4.0 et versions ultérieures, optimisé pour offrir une expérience mobile unique.
  - [AstraChat](https://astrachat.com/) - Un autre client XMPP.
  - [Dino](https://dino.im/) - Client XMPP moderne pour ordinateur sous Linux, avec chiffrement de bout en bout OMEMO et OpenPGP. Open source, sous licence GPL-3.0.
  - [Gajim](https://gajim.org/) - Client XMPP multiplateforme avec chiffrement OMEMO, fonctionnant sous Linux, Windows et macOS. Open source, sous licence GPL-3.0.
  - [Snikket](https://snikket.org/) - Service XMPP auto-hébergé, déployable en une commande, regroupant un serveur et ses clients mobiles et de bureau. Open source et basé sur Docker.
- [DeltaChat](https://delta.chat/) - Messagerie par courrier électronique chiffré.
- [Session](https://getsession.org/) - Axée avant tout sur la confidentialité et l’anonymat. Utilise la technologie blockchain.
- [SimpleX Chat](https://simplex.chat/) - Première plateforme de messagerie 100 % privée par conception : elle n’a pas accès à votre graphe de connexions.
- [Status](https://status.app/) - Application de messagerie sécurisée, portefeuille crypto et navigateur Web3 reposant sur une technologie de pointe.

### Centralisée
Le service exploite les serveurs qui permettent aux utilisateurs de communiquer. Il existe un point unique de défaillance et de contrôle, mais le service reste parfaitement sûr et fiable si les protocoles et le code sont ouverts et audités.

- [Threema](https://threema.com/en) - Messagerie qui privilégie la sécurité et la confidentialité. Payez une fois, discutez pour toujours. Aucune collecte de données utilisateur. Client open source.
- [Signal](https://signal.org/) - Privilégie fortement la confidentialité tout en offrant les fonctionnalités attendues. Chiffrement robuste par conception. Entièrement open source.
  - [🤖](#icons) [Molly](https://github.com/mollyim/mollyim-android) - Fork compatible avec Signal, doté de quelques améliorations de sécurité.

### Pair à pair
Aucun serveur : tout circule directement d’un pair à l’autre, sans point de défaillance ni de contrôle. Les fonctionnalités sont réduites faute de serveur et la messagerie peut être plus lente. C’est la meilleure option pour les conversations sensibles.

- [Tox](https://tox.chat/) - Logiciel facile à utiliser qui vous met en relation avec vos amis et votre famille sans que personne d’autre ne puisse écouter.
- [Briar](https://briarproject.org/) - Messagerie et forums chiffrés de pair à pair.
- [Tinfoil Chat](https://github.com/maqp/tfc) - Système de messagerie sécurisée aux terminaux et acheminée par des nœuds Onion.
- [Berty](https://berty.tech/) - Application de messagerie axée sur la confidentialité, fonctionnant avec ou sans accès à Internet, données mobiles ou confiance dans le réseau.

[Retour en haut 🔝](#contents)

## Outils de liens en bio

- [Keyoxide](https://keyoxide.org/) - Plateforme moderne, sécurisée et respectueuse de la vie privée pour établir votre identité en ligne décentralisée.
- [LinkStack](https://linkstack.org/) - Alternative open source et auto-hébergée à Linktree.

[Retour en haut 🔝](#contents)

## Raccourcisseurs de liens

⛔ **À éviter**

- Bit.ly

✅  **À utiliser plutôt**

- [MagLit](https://maglit.me) - Service de raccourcissement de liens chiffré et respectueux de la vie privée, qui prend également en charge les liens Magnet.
- [Dub](https://github.com/dubinc/dub) - Hébergez vous-même Dub.co pour mieux contrôler vos données et votre design.
- [Yourls](https://yourls.org/) - Raccourcisseur d’URL auto-hébergé écrit en PHP.
- [tnyr.me](https://tnyr.me) - Raccourcisseur d’URL sans confiance implicite, avec chiffrement de bout en bout sans mot de passe.
- [Kutt](https://kutt.it/) - Raccourcisseur d’URL auto-hébergé, avec domaines personnalisés et liens protégés par mot de passe. Open source, sous licence MIT.
- [Shlink](https://shlink.io/) - Raccourcisseur d’URL auto-hébergé qui conserve les statistiques de clic sur votre serveur. Open source, sous licence MIT.

[Retour en haut 🔝](#contents)

## Suivi de la localisation

⛔ **À éviter**

- Google location history [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Google FindMyDevice [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **À utiliser plutôt**

### Suivi
- [Nextcloud Phonetrack](https://apps.nextcloud.com/apps/phonetrack) - Application Nextcloud de suivi de l’historique de localisation avec une [application Android](https://gitlab.com/eneiluj/phonetrack-android) ([autres applications également prises en charge](https://gitlab.com/eneiluj/phonetrack-oc/-/wikis/userdoc#logging-methods)). Permet de mettre les positions en cache hors ligne et de les envoyer au serveur par lots. L’application officielle dispose de bonnes options d’économie de batterie.
- [OwnTracks](https://owntracks.org/) - Suivi de localisation qui affiche uniquement la position actuelle (historique de localisation limité).
- [Traccar](https://www.traccar.org/) - Logiciel de suivi de localisation conçu pour les appareils dédiés à l’enregistrement GPS.
- [Dawarich](https://github.com/Freika/dawarich) - Alternative auto-hébergée à l’historique de localisation Google.

### Retrouver mon appareil
- [Find My Device](https://gitlab.com/Nulide/findmydevice) - Retrouvez votre appareil Android par SMS.
- [GPSlogger](https://github.com/mendhak/gpslogger) - Application légère d’enregistrement GPS pour Android. Sans serveur ni Internet : les données sont enregistrées dans un simple fichier local.

[Retour en haut 🔝](#contents)

## Services de messagerie électronique
⛔ **À éviter**
- Gmail
- Outlook
- Yandex Mail
- Yahoo! Mail

✅ **À utiliser plutôt**

### Fournisseurs tiers
- [Forward Email](https://forwardemail.net) - Service de messagerie électronique entièrement open source et axé sur la confidentialité.
- [ProtonMail](https://proton.me/mail) - Messagerie électronique sécurisée, basée en Suisse. [Lire cet article sur l’arrestation d’un militant pour le climat](https://proton.me/blog/climate-activist-arrest).
- [Tuta](https://tuta.com/) - Messagerie électronique sécurisée pour tous. Open source.
- [mailbox.org](https://mailbox.org/) - Suite payante de messagerie, calendrier et bureautique basée en Allemagne, avec chiffrement PGP intégré et sans publicité.
- [Riseup](https://riseup.net/en/about-us) - Outils de communication en ligne destinés aux personnes et groupes œuvrant pour un changement social émancipateur.
- [Mailfence](https://mailfence.com) - Messagerie électronique sécurisée et privée.

### Auto-hébergés
- [Docker mail server](https://github.com/docker-mailserver/docker-mailserver) - Serveur de messagerie complet mais simple (SMTP, IMAP, LDAP, antispam, antivirus, etc.) basé sur Docker.
- [Mailcow: dockerized](https://github.com/mailcow/mailcow-dockerized) - Suite de serveur de messagerie qui fait « meuh ».
- [Mail-in-a-box](https://github.com/mail-in-a-box/mailinabox) - Aide chacun à reprendre le contrôle de sa messagerie en proposant un serveur SMTP et tout le nécessaire, facile à déployer en un clic, dans une boîte.
- [Mox](https://github.com/mjl-/mox) - Serveur de messagerie moderne, complet, sécurisé et open source pour une messagerie auto-hébergée nécessitant peu de maintenance.
- [Stalwart](https://stalw.art/) - Serveur de messagerie tout-en-un écrit en Rust, compatible avec SMTP, IMAP et JMAP, ayant fait l’objet de deux audits de sécurité indépendants (AGPL-3.0).

### Clients

#### Android / iOS
- [🤖](#icons) [FairEmail](https://github.com/M66B/FairEmail) - Application Android de messagerie complète, open source et respectueuse de la vie privée.
- [🤖](#icons) [K9](https://k9mail.app/) - Application de messagerie open source pour Android.

#### Ordinateur
- [Thunderbird](https://www.thunderbird.net) - Client de messagerie gratuit, personnalisable et open source.

### Services d’alias de messagerie (transfert anonyme)

Grâce aux alias de messagerie, vous pouvez enfin créer une identité différente pour chaque site Web. Protégez-vous contre le spam, l’hameçonnage et les fuites de données. Vous pouvez auto-héberger l’une des solutions suivantes ou utiliser leur plateforme en tant que service.

- [SimpleLogin](https://github.com/simple-login/app) - Service open source et auto-hébergeable de création d’alias de messagerie, désormais propriété de Proton (AGPL-3.0).
- [AnonAddy](https://github.com/anonaddy/anonaddy) - Service open source et auto-hébergeable de création d’alias et de transfert de courriels, désormais nommé addy.io (AGPL-3.0).

[Retour en haut 🔝](#contents)

## Cartes et navigation
⛔ **À éviter**
- Google Maps
- Apple Maps
- Yandex Maps
- Bing Maps
- Waze
- Sygic
- HERE WeGo
- Petal Maps

✅ **À utiliser plutôt**
- [Open Street Map (OSM)](https://www.openstreetmap.org/) - OpenStreetMap est créé par une communauté de cartographes qui contribuent et maintiennent des données sur les routes, sentiers, cafés, gares et bien plus encore, dans le monde entier.
  - [OSMAnd](https://osmand.net/) - Application de navigation pour Android et iOS utilisant OSM, riche en fonctionnalités et proposant tout ce qu’on peut attendre.
- [Organic Maps](https://organicmaps.app/) - Excellentes cartes hors ligne pour les randonneurs et les cyclistes.
- [CoMaps](https://www.comaps.app/) - Application de cartes gratuite, open source et pilotée par sa communauté, basée sur OSM.

[Retour en haut 🔝](#contents)

## Plateformes de diffusion de médias
⛔ **À éviter**
- **Amazon Prime** - [Politique de confidentialité médiocre](https://tosdr.org/en/service/2444). Les applications comprennent des [traqueurs Google](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/). Un service de diffusion vidéo ne devrait pas nécessiter autant d’autorisations.
- **Netflix** - [Politique de confidentialité médiocre](https://tosdr.org/en/service/185). Les applications comprennent des [traqueurs Google](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/). Un service de diffusion vidéo ne devrait pas nécessiter autant d’autorisations.
- **Disney Plus** - [Très mauvaise politique de confidentialité](https://tosdr.org/en/service/2745). Les applications comprennent [divers traqueurs](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/). Un service de diffusion vidéo ne devrait pas nécessiter autant d’autorisations.
- **Plex** - [Politique de confidentialité douteuse](https://tosdr.org/en/service/1567). Les applications contiennent [de nombreux traqueurs](https://reports.exodus-privacy.eu.org/en/reports/com.plexapp.android/latest/). Un service de diffusion vidéo ne devrait pas nécessiter autant d’autorisations.
- **Spotify** - [Très mauvaise politique de confidentialité](https://tosdr.org/en/service/225). Les applications contiennent [de nombreux traqueurs](https://reports.exodus-privacy.eu.org/en/reports/com.spotify.music/latest/). Un service de diffusion vidéo ne devrait pas nécessiter autant d’autorisations.
- **Deezer** - [Politique de confidentialité médiocre](https://tosdr.org/en/service/2516). Les applications contiennent [de nombreux traqueurs](https://reports.exodus-privacy.eu.org/en/reports/deezer.android.tv/latest/). Un service de diffusion vidéo ne devrait pas nécessiter autant d’autorisations.
- **SoundCloud** - [Politique de confidentialité douteuse](https://tosdr.org/en/service/276). Les applications contiennent [de nombreux traqueurs](https://reports.exodus-privacy.eu.org/en/reports/com.soundcloud.android/latest/). Un service de diffusion vidéo ne devrait pas nécessiter autant d’autorisations.

✅  **À utiliser plutôt**
#### Vidéo et audio
- [Jellyfin](https://jellyfin.org/) - Solution multimédia conçue par des bénévoles qui vous laisse le contrôle de vos médias. Diffusez-les sur n’importe quel appareil depuis votre propre serveur, sans contrainte.
- [Dim](https://github.com/Dusk-Labs/dim) - Gestionnaire multimédia auto-hébergé. Avec une configuration minimale, Dim organise et embellit vos collections pour vous permettre d’y accéder et de les lire à tout moment et en tout lieu.
- [Stremio](https://www.stremio.com/) - Centre multimédia moderne qui réunit tout le nécessaire pour vos divertissements vidéo.

#### Audio
- [Funkwhale](https://funkwhale.audio/) - Plateforme sociale pour écouter et partager de la musique (alternative à SoundCloud).
- [Subsonic](https://www.subsonic.org/pages/index.jsp) - Votre service personnel complet de diffusion musicale.
- [Ampache](https://ampache.org/) - Application Web de diffusion audio et vidéo et de gestion de fichiers.
- [Koel](https://koel.dev/) - Serveur personnel de diffusion musicale fonctionnel.
- [Nuclear](https://nuclearplayer.com/) - Lecteur de musique moderne axé sur la diffusion depuis des sources gratuites.
- [Navidrome](https://navidrome.org/) - Service personnel de diffusion musicale léger, rapide et autonome.
- [🤖](#icons) [mucke](https://github.com/moritz-weber/mucke) - Lecteur de fichiers musicaux locaux avec des options de lecture personnalisées et originales.

**Clients alternatifs pour Spotify**
 > Ces clients réduisent le suivi, mais **ne protègent PAS du tout** votre vie privée, car vous diffusez toujours depuis les serveurs Spotify avec votre propre compte **Premium (payant et identifié)**.

\* Abonnement Premium requis.

- [Spot*](https://github.com/xou816/spot) - Client Spotify natif développé avec GTK et Rust.
- [psst*](https://github.com/jpochyla/psst) - Client Spotify rapide et multiplateforme avec interface graphique native.
- [ncspot*](https://github.com/hrkfdn/ncspot) - Client Spotify multiplateforme en ncurses, écrit en Rust et inspiré de ncmpc et de ses semblables.

Aucun abonnement Premium requis :

- [Spotube](https://github.com/team-spotube/spotube) - Client Spotify léger, gratuit et multiplateforme.

**Clients alternatifs pour YouTube Music**
- [Beatbump](https://github.com/snuffyDev/Beatbump) [💀](#icons) - Interface alternative pour YouTube Music, sans publicité et avec wrapper d’API personnalisé.
- [SimpMusic](https://github.com/Maxrave-Dev/SimpMusic) - Client YouTube Music open source et activement maintenu pour Android (successeur des projets abandonnés ViMusic et RiMusic).

**Clients alternatifs pour Deezer**
- [dzr](https://github.com/yne/dzr) - Lecteur Deezer en ligne de commande pour Linux, BSD et Android + Termux.

#### Podcasts

⛔ **À éviter**

- **Spotify** - [Très mauvaise](https://tosdr.org/en/service/225) politique de confidentialité. Le service collecte énormément de données à votre sujet : humeur, temps libre, préférences, aversions, amis… De plus, ses applications contiennent [beaucoup trop de traqueurs](https://reports.exodus-privacy.eu.org/en/reports/com.spotify.music/latest/).
- **iVoox** - Ses applications sont [remplies de traqueurs](https://reports.exodus-privacy.eu.org/en/reports/com.ivoox.app/latest/) et son site Web en contient également.
- **Audible** - [Très mauvaise](https://tosdr.org/en/service/190) politique de confidentialité. Son application comprend [de nombreux traqueurs](https://reports.exodus-privacy.eu.org/en/reports/com.audible.application/latest/).
- **Deezer** - [Politique de confidentialité médiocre](https://tosdr.org/en/service/2516). Les applications contiennent [de nombreux traqueurs](https://reports.exodus-privacy.eu.org/en/reports/deezer.android.tv/latest/). Un service de diffusion vidéo ne devrait pas nécessiter autant d’autorisations.

✅  **À utiliser plutôt**

- [Antennapod](https://antennapod.org) - Lecteur de podcasts entièrement ouvert. Abonnez-vous à n’importe quel flux RSS.
- [Castopod](https://castopod.org) - Hébergez facilement vos podcasts, gardez le contrôle de vos créations et échangez avec votre public sans intermédiaire. Votre podcast et votre public n’appartiennent qu’à vous.
- [Funkwhale](https://funkwhale.audio/) - Plateforme sociale pour écouter et partager du contenu audio.

[Retour en haut 🔝](#contents)

## Notes et tâches
⛔ **À éviter**

Ces fournisseurs proposent des applications et services truffés de traqueurs de données. De plus, la plupart stockent vos notes sur leurs serveurs et ne proposent aucun chiffrement.

- Google Keep
    - [Keep To Markdown](https://github.com/erikelisath/keep-to-markdown) - Convertissez vos notes Google Keep au format Markdown standard avec en-tête YAML.
- Evernote
- Squid
- Notion
- OneNote

✅  **À utiliser plutôt**

- [Anytype](https://www.anytype.io/) - Alternative open source à Notion. Chiffrement de bout en bout, synchronisation cloud et réseau local, auto-hébergeable.
- [AppFlowy](https://appflowy.com/) - Alternative open source à Notion. Vous contrôlez vos données et leur personnalisation.
- [HedgeDoc](https://hedgedoc.org/) - Anciennement CodiMD (communautaire). Excellente plateforme pour rédiger et partager du Markdown.
- [Joplin](https://github.com/laurent22/joplin) - Application de prise de notes et de tâches avec synchronisation et chiffrement.
- [Logseq](https://logseq.com/) - Alternative à WorkFlowy qui privilégie la confidentialité.
- [Memos](https://github.com/usememos/memos) - Centre de notes open source et auto-hébergé, avec gestion des connaissances et fonctions sociales.
- [Nextcloud Notes](https://github.com/nextcloud/notes/) - Application de notes Nextcloud sans distraction.
	- [Application Nextcloud Notes](https://github.com/nextcloud/notes-android) - Client Android pour Nextcloud Notes.
- [Notally](https://github.com/OmGodse/Notally) - Belle application de notes (uniquement locale, sans synchronisation).
- [Notesnook](https://notesnook.com/) - Prise de notes privée, open source et à connaissance nulle.
- [Obsidian](https://obsidian.md) - Application privée et flexible de prise de notes. Code fermé, mais sans traqueurs (site Web et applications) et avec synchronisation chiffrée de bout en bout.
- [Quillpad](https://quillpad.github.io/) - Prenez de belles notes Markdown et organisez-vous avec des listes de tâches. Fork de Quillnote.
- [SiYuan](https://github.com/siyuan-note/siyuan) - Système local d’abord de gestion des connaissances personnelles.
- [Standard Notes](https://standardnotes.com/) - Application de notes gratuite, open source et entièrement chiffrée.
- [TinyList](https://tinylist.app/) - Créez et partagez des notes et listes de contrôle sans sacrifier votre vie privée.
- [Trilium Notes](https://github.com/TriliumNext/Trilium) - Créez votre base de connaissances personnelle avec Trilium Notes.
- [Vikunja](https://vikunja.io) - Application de tâches open source pour organiser votre vie.
- [YankNote](https://github.com/purocean/yn) - Application de notes Markdown piratable pour les programmeurs.
- [🤖](#icons) [Tasks.org](https://tasks.org) - Gestionnaire open source de tâches et listes de choses à faire pour Android, avec synchronisation CalDAV et mode hors ligne. Sous licence GPL-3.0.

[Retour en haut 🔝](#contents)

## Reconnaissance musicale

⛔ **Avoid**

- Shazam - Relève de la [politique de confidentialité d’Apple](https://tosdr.org/en/service/158). L’application Android comprend [quelques traqueurs Google](https://reports.exodus-privacy.eu.org/en/reports/com.shazam.android/latest/).
- SoundHound - Comporte beaucoup trop de [traqueurs](https://reports.exodus-privacy.eu.org/en/reports/com.melodis.midomiMusicIdentifier.freemium/latest/) pour une application de reconnaissance musicale.
- Musicxmatch - L’application contient [des traqueurs](https://reports.exodus-privacy.eu.org/en/reports/com.musixmatch.android.lyrify/latest/) et exige un nombre dangereux d’autorisations.

✅  **À utiliser plutôt**

**Clients alternatifs à Shazam**

- [SongRec](https://github.com/marin-m/SongRec) - Client open source de Shazam pour Linux, écrit en Rust.
- [Bot Telegram SongID](https://github.com/smcclennon/SongID) - Bot Telegram capable d’identifier la musique dans les fichiers audio ou vidéo que vous lui envoyez.

[Retour en haut 🔝](#contents)

## Bureautique

⛔ **À éviter**
- Microsoft Office [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Google Docs [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **À utiliser plutôt**
- [LibreOffice](https://www.libreoffice.org/) - Suite bureautique hors ligne gratuite et open source.
- [OnlyOffice](https://www.onlyoffice.com/) - Suite bureautique en ligne gratuite et open source pour le travail collaboratif.
- [Cryptpad](https://cryptpad.fr/) - Suite collaborative chiffrée et open source.
- [Etherpad](https://etherpad.org/) - Éditeur en ligne open source hautement personnalisable, permettant la rédaction collaborative en temps réel.
- [Fileverse](https://fileverse.io) - Fileverse développe des alternatives plus saines, fondées sur la souveraineté des utilisateurs, la confidentialité dès la conception et le respect des normes.
	- [Ddocs](https://ddocs.new) : alternative à Google Docs qui améliore la confidentialité : sur chaîne, décentralisée et chiffrée de bout en bout.
  	- [dSheets](https://sheets.fileverse.io) : alternative décentralisée à Excel et Google Sheets.
- [Grist](https://www.getgrist.com) - Hybride auto-hébergeable de tableur et de base de données pour organiser des données, en alternative open source à Airtable. Sous licence Apache-2.0.

[Retour en haut 🔝](#contents)

## Fournisseurs de téléphonie en ligne

De nombreux sites Web exigent la vérification d’un numéro de téléphone. Ces services permettent de recevoir (et parfois d’envoyer) des SMS en privilégiant la confidentialité.

### Aucune vérification par e-mail, Monero accepté
- [Crypton](https://crypton.sh/) - Carte SIM SMS sécurisée dans le cloud. (Basé en Islande)
- [Virtualsim](https://virtualsim.net/) - Location de cartes SIM physiques pour la vérification par SMS. (Basé en Ukraine)
- [MoneroSMS](https://monerosms.com/) - Numéros virtuels pour les SMS/MMS et leur vérification. Ligne de commande et application Web. (Basé aux États-Unis)

### Vérification par e-mail requise, Monero accepté
- [Onlinesim](https://onlinesim.io/) - Recevez des SMS en ligne sur un numéro de téléphone virtuel. (Basé en Russie)

### Vérification par e-mail requise, cryptomonnaies acceptées
- [SmsPVA](https://smspva.com/) - Service proposant un numéro de téléphone auquel envoyer des SMS et en recevoir le contenu. (Basé en France)

## Systèmes d’exploitation
### Android
⛔ Évitez autant que possible Android de Google et les versions modifiées ou personnalisées par des fabricants comme Xiaomi, Huawei ou Samsung. Android est un projet open source, [AOSP - Android Open Source Project](https://source.android.com/), qui existe en de nombreuses variantes respectueuses de la vie privée et des données de l’utilisateur, sans les partager avec les serveurs privés des fabricants ou fournisseurs de services.

✅ **À utiliser plutôt**

> [!NOTE]
> **Compatibilité des applications Android** :
> Bien que tous ces systèmes d’exploitation soient basés sur Android, la compatibilité des applications peut être imparfaite en raison de l’absence des services GMS (Google Mobile Services) requis par certaines applications. Avec [Plexus](https://plexus.techlore.tech/), consultez les retours de la communauté sur le fonctionnement des applications Android avec microG (alternative gratuite et open source à GMS) ou sans aucun service GMS.

> [!NOTE]
> **Sécurité Android** : les ROM personnalisées peuvent améliorer votre confidentialité, mais aussi réduire la sécurité d’Android. Utilisez toujours des ROM qui prennent en charge le démarrage vérifié et le chiffrement, et qui n’activent **PAS** l’accès root par défaut. Si possible, évitez les versions userdebug. Si votre modèle de menace exige une forte sécurité, achetez un Google Pixel et installez-y GrapheneOS. [En savoir plus sur PrivacyGuides](https://www.privacyguides.org/android/overview).

#### Basés sur Android

**GrapheneOS** accorde une grande importance à la sécurité et à la confidentialité. Il déploie des technologies qui atténuent de nombreuses vulnérabilités et rendent leur exploitation nettement plus difficile. Il améliore la sécurité du système d’exploitation et des applications qui y fonctionnent.

- [GrapheneOS](https://grapheneos.org/) - Système d’exploitation mobile open source axé sur la confidentialité et la sécurité, compatible avec les applications Android. Seuls les téléphones **Google Pixel** sont pris en charge.

Ces ROM offrent également une bonne confidentialité et/ou une prise en charge étendue d’un plus grand nombre d’appareils. Notez toutefois qu’elles peuvent réduire la sécurité et élargir la surface d’attaque du système d’exploitation.

- [CalyxOS](https://calyxos.org/) - ROM conçue pour respecter la vie privée. Offre une meilleure sécurité que LineageOS ou Replicant.
- [LineageOS](https://lineageos.org/) - Système d’exploitation gratuit et open source pour divers appareils, basé sur la plateforme mobile Android.
- [/e/OS](https://e.foundation/e-os) - ROM Android dégooglisée de Murena, intégrant microG et des services cloud facultatifs. Open source, sous licence GPL-3.0.
- [iodéOS](https://iode.tech/iodeos) - ROM Android dégooglisée avec pare-feu réseau intégré qui bloque les publicités et les traqueurs. Open source, sous licence GPL-3.0.

#### Basés sur Linux
- [UBPorts](https://www.ubports.com/) - Ubuntu Touch est la version mobile tactile d’Ubuntu.
- [Nura](https://nura.eco/) (anciennement postmarketOS) - Version d’Alpine Linux optimisée pour l’écran tactile et préconfigurée.
- [PureOS](https://www.pureos.net/) - Système d’exploitation développé par Purism pour le Librem 5.
- [Plasma Mobile](https://www.plasma-mobile.org/) - Plasma dans votre poche : écosystème téléphonique sécurisé, open source et respectueux de la vie privée.
- [mobian](https://mobian-project.org/) - Debian pour appareils mobiles.
### Smart TV
⛔ N’utilisez pas Android TV de Google, LG WebOS ni les autres systèmes d’exploitation de téléviseurs courants qui portent atteinte à la vie privée et sont préinstallés sur votre téléviseur.

✅ **À utiliser plutôt**

À l’heure actuelle, je ne connais aucun logiciel de Smart TV respectueux de la vie privée. Si vous en connaissez un, ouvrez une demande de tirage ou un ticket.

Les logiciels suivants ne sont pas des **systèmes d’exploitation**, mais des applications utilisables sur presque tous les systèmes. Elles respectent votre vie privée et offrent des fonctions similaires à celles d’une Smart TV. Une configuration recommandée consiste à connecter à votre téléviseur un [Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) sous GNU/Linux, à installer des outils comme [KDE Connect](https://kdeconnect.kde.org/) pour contrôler les médias depuis votre téléphone, puis à ajouter les applications ci-dessous :

- [Kodi](https://kodi.tv/) - Centre de divertissement qui rassemble tous vos médias numériques dans une interface élégante et conviviale. Entièrement gratuit et open source, hautement personnalisable et compatible avec de nombreux appareils.
- [OSMC](https://osmc.tv/) - Centre multimédia gratuit et open source, conçu par et pour ses utilisateurs.

Vous pouvez également consulter la section [Plateformes de diffusion de médias](https://github.com/pluja/awesome-privacy#media-streaming-platforms).

### PC / macOS
⛔ **À éviter**
- MS Windows - Propriété de Microsoft, le système est réputé pour collecter de nombreuses données utilisateur et inciter les utilisateurs à créer un compte Microsoft. Si vous utilisez Windows 10 ou 11, [Win11Debloat](https://github.com/Raphire/Win11Debloat) ou [cet autre outil](https://www.w10privacy.de/english-home/) vous permettent de consulter et de désactiver les innombrables paramètres portant atteinte à la vie privée.
- macOS.

✅ **À utiliser plutôt**
#### [GNU/Linux](https://www.linux.com/what-is-linux/)

GNU/Linux est une famille de systèmes d’exploitation libres (dans le sens de la liberté comme dans celui de la bière gratuite) et open source, principalement développés par la communauté. Si vous ne savez pas par où commencer, voici de bonnes options pour débuter :

- [Fedora](https://fedoraproject.org/) - Distribution Linux communautaire parrainée par Red Hat, qui fournit des logiciels open source récents selon un cycle de six mois.
- [Mint (Cinnamon)](https://linuxmint.com/edition.php?id=305) est une distribution facile à prendre en main.
- [Qubes OS](https://qubes-os.org/) est un système d’exploitation axé sur la sécurité, qui isole différents espaces de travail dans des machines virtuelles distinctes pour renforcer la confidentialité et la sécurité.
- [Tails](https://tails.net/) est un système d’exploitation portable qui protège contre la surveillance et la censure. Il démarre toujours dans le même état vierge et efface automatiquement toute votre activité à l’arrêt.
- [Whonix](https://www.whonix.org/) est un système d’exploitation exécuté dans des machines virtuelles et qui fait passer toutes les connexions par Tor.
- [Kicksecure](https://www.kicksecure.com/) est une distribution renforcée basée sur Debian, créée par les développeurs de Whonix et sécurisée par défaut.
- [secureblue](https://secureblue.dev/) est une image renforcée basée sur Fedora Atomic Desktops, avec des paramètres axés sur la sécurité et un navigateur renforcé.

> [!TIP]
> Pour essayer Linux sans l’installer sur votre ordinateur, vous pouvez utiliser une [clé USB Live](https://www.fosslinux.com/274/how-to-create-linux-mint-live-usb-drive-on-windows.htm). Vous pouvez aussi découvrir [Ventoy](https://www.ventoy.net) pour télécharger et tester facilement des distributions Linux depuis une clé USB.

> [!TIP]
> Pour installer Linux tout en conservant votre système d’exploitation actuel, configurez un [double démarrage](https://averagelinuxuser.com/dualboot-linux-windows/).

> [!NOTE]
> Les distributions Linux ne sont pas toutes libres (au sens de la liberté), gratuites (au sens de la bière gratuite) ni respectueuses de la vie privée. Il existe énormément de distributions GNU/Linux : renseignez-vous un peu avant d’en choisir une !

#### Autres systèmes d’exploitation :

- [AtlasOS](https://atlasos.net/) - Modification open source de Windows 10 destinée à optimiser les performances et la latence. Atlas supprime toutes les formes de suivi intégrées à Windows et met en œuvre de nombreuses stratégies de groupe pour réduire la collecte de données.
- [ReactOS](https://reactos.org/) - Système d’exploitation gratuit et open source, à l’apparence de Windows et capable d’exécuter les logiciels et pilotes Windows.
- [RedoxOS](https://www.redox-os.org/) - Projet en cours visant à fournir un système d’exploitation de type Unix écrit en Rust.

[Retour en haut 🔝](#contents)

## Gestionnaires de mots de passe
⛔ **À éviter**
- LastPass
- Dashlane

✅  **À utiliser plutôt**
- [AliasVault](https://www.aliasvault.com) - Gestionnaire open source de mots de passe et d’alias chiffrés de bout en bout, avec serveur d’alias de messagerie intégré.
- [Bitwarden](https://bitwarden.com) - Gestionnaire de mots de passe cloud open source.
  - [vaultwarden](https://github.com/dani-garcia/vaultwarden/) - Serveur auto-hébergé non officiel, compatible avec Bitwarden, anciennement nommé bitwarden_rs.
- [CarryPass](https://carrypass.net) - Gestionnaire de mots de passe en PWA à connaissance nulle, avec génération déterministe, coffres chiffrés et collaboration en équipe. ([Source](https://github.com/racz-zoltan/racz-zoltan.github.io)) `MIT`
- [KeepassXC](https://keepassxc.org/) - Stockez vos mots de passe en toute sécurité grâce à un chiffrement conforme aux normes du secteur. Pas de synchronisation, uniquement du stockage.
  - [KeepassDX](https://www.keepassdx.com/) pour Android.
  - [Strongbox](https://strongboxsafe.com/) pour iOS.
  - [KeeWeb](https://keeweb.info/) pour le Web et d’autres plateformes.
- [LessPass](https://www.lesspass.com) - Gestionnaire de mots de passe sans état. Retenez un mot de passe maître pour accéder à vos mots de passe. Aucune synchronisation nécessaire.
- [Padloc](https://padloc.app/) - Le dernier gestionnaire de mots de passe dont vous aurez envie.
- [Passbolt](https://www.passbolt.com) - Gestionnaire de mots de passe open source conçu pour la collaboration en équipe.
- [Passky](https://passky.org) - Gestionnaire de mots de passe simple, moderne, léger, sécurisé et open source.
- [Proton Pass](https://proton.me/pass) - Gestionnaire de mots de passe open source et chiffré de Proton.

## Pastebin et partage de secrets

Ces outils sont utiles pour partager en privé des secrets, des extraits de code ou tout autre texte avec d’autres personnes.

- [crypt.fyi](https://www.crypt.fyi) - Plateforme éphémère à connaissance nulle de partage de données sensibles, avec clients Web, en ligne de commande et extension Chrome.
- [NoPaste](https://github.com/bokub/nopaste) - Alternative open source à Pastebin, sans base de données ni code backend. Les données sont compressées et stockées uniquement dans le lien que vous partagez, nulle part ailleurs.
- [PrivateBin](https://github.com/PrivateBin/PrivateBin) - Pastebin en ligne minimaliste et open source, dont le serveur n’a aucune connaissance des données collées. Elles sont chiffrées et déchiffrées dans le navigateur avec AES 256 bits.
- [Yopass](https://github.com/jhaals/yopass) - Partage sécurisé de secrets, mots de passe et fichiers.
- [scrt.link](https://scrt.link) - Partage de secrets chiffrés de bout en bout, éphémères et open source.
- [dele-to](https://dele.to) - Application moderne et open source de partage sécurisé d’identifiants et de secrets, avec chiffrement AES-256 côté client, architecture à connaissance nulle et autodestruction automatique.

[Retour en haut 🔝](#contents)

## Paiements
⛔ **À éviter**
- Visa / Mastercard
- PayPal [![](https://shields.tosdr.org/en_230.svg)](https://tosdr.org/en/service/230)
- WeChat
- _insertBigTechHere_Pay
- Paiements bancaires (virement, SEPA, etc.)

✅  **À utiliser plutôt**
- [Monero](https://www.getmonero.org/) - De l’argent liquide pour un monde connecté : rapide, privé, intraçable et sécurisé.
- Espèces - Effectuez des paiements de personne à personne à l’aide de billets et de pièces.

> [!WARNING]
> [Bitcoin](https://bitcoin.org) n’est ni anonyme ni privé. Il est traçable, transparent et pseudonyme. Pour une introduction, [regardez la vidéo d’aantonop](https://yewtu.be/watch?v=JN1Bowgcle8). Les utilisateurs plus avancés peuvent consulter cette [série sur la confidentialité de Bitcoin](https://yewtu.be/watch?v=QEnL5k0R08w).

### Portefeuilles

- [Sparrow Wallet](https://www.sparrowwallet.com/) - Portefeuille de bureau open source et multiplateforme, doté de nombreux outils de paiement préservant la confidentialité.
- [Wasabi Wallet](https://www.wasabiwallet.io/) - Portefeuille Bitcoin open source, non dépositaire et axé sur la confidentialité, disponible sur ordinateur.
- [Cake Wallet](https://cakewallet.com) - Portefeuille open source et non dépositaire pour Monero, Bitcoin et d’autres monnaies, sur mobile et ordinateur. Sous licence MIT.
- [Feather Wallet](https://featherwallet.org/) - Portefeuille Monero léger, open source et pour ordinateur, avec Tor et contrôle des monnaies intégrés. Sous licence BSD-3.

### Processeurs de paiement

- [BTCPay Server](https://btcpayserver.org) - Processeur de paiement en cryptomonnaie auto-hébergé et non dépositaire pour les commerçants, en alternative à PayPal ou BitPay. Sous licence MIT.

### Où utiliser Monero et Bitcoin

- [kycnot.me](https://kycnot.me/) - Répertoire de plateformes d’échange, processeurs de paiement et autres services de confidentialité sans vérification KYC.

[Retour en haut 🔝](#contents)

## Finances personnelles

### Gestion financière complète

- [Actual](https://actualbudget.org) - Application de gestion financière extrêmement rapide et axée sur la confidentialité.
- [Firefly III](https://www.firefly-iii.org/) - Gestionnaire de finances personnelles gratuit et open source.
- [GnuCash](https://gnucash.org/) - Logiciel de comptabilité personnelle et pour petites entreprises, distribué sous licence GNU GPL et disponible sur GNU/Linux, BSD, Solaris, Mac OS X et Microsoft Windows.
- [Sure](https://github.com/we-promise/sure) - Logiciel de finances personnelles sécurisé et open source. Fork communautaire maintenu du projet [Maybe](https://github.com/maybe-finance/maybe), archivé.
- [ezBookkeeping](https://ezbookkeeping.mayswind.net/) - Application légère et auto-hébergée de finances personnelles, avec interface conviviale et puissantes fonctionnalités de comptabilité.

### Gestion de budget
- [ProExpense](https://github.com/arduia/ProExpense/) - Bloc-notes financier simple et gratuit pour consigner vos dépenses quotidiennes en toute sécurité.
- [My Expenses](https://github.com/mtotschnig/MyExpenses) - Application Android complète de suivi des dépenses, sous licence GPL.
- [Wallos](https://wallosapp.com) - Suivi auto-hébergé des abonnements et dépenses récurrentes, avec rappels et statistiques de dépenses. Open source, sous licence GPL-3.0.

### Dépenses partagées

⛔ **À éviter**

- Tricount - Application très volumineuse (environ 200 Mo), qui contient de nombreux traqueurs de Facebook, Google et Huawei.
- Splitwise - L’application contient des traqueurs de Google et Amazon.

✅  **À utiliser plutôt**

- [Spliit](https://github.com/spliit-app/spliit#readme) - Partagez vos dépenses avec vos amis et votre famille. Sans publicité ni compte. Open source et toujours gratuit.
- [SplitPro](https://github.com/oss-apps/split-pro#readme) - [Site Web](https://splitpro.app) - Partagez gratuitement vos dépenses avec vos amis. Alternative open source à SplitWise.
- [IHateMoney](https://ihatemoney.org/) - Gérez facilement vos dépenses partagées. Ne permet pas les répartitions inégales.
  - [MoneyBuster](https://gitlab.com/eneiluj/moneybuster/) - Client Android pour les serveurs Nextcloud Cospend et IHateMoney.
- [Nextcloud Cospend](https://apps.nextcloud.com/apps/cospend) - Gestionnaire de budget partagé ou de groupe inspiré de l’excellent IHateMoney.
  - [MoneyBuster](https://gitlab.com/eneiluj/moneybuster/) - Client Android pour les serveurs Nextcloud Cospend et IHateMoney.

### Autres

- [Debitum](https://github.com/Marmo/debitum) [💀](#icons) - Suivez toutes sortes de sommes dues, qu’il s’agisse d’argent ou d’objets prêtés.

### Suivi de portefeuille

- [Ghostfolio](https://github.com/ghostfolio/ghostfolio#readme) - Logiciel open source de gestion de patrimoine développé avec des technologies Web.
- [PortfolioPerformance](https://www.portfolio-performance.info/en/) - Outil open source de calcul de la performance globale d’un portefeuille d’investissement.
- [Rotki](https://github.com/rotki/rotki) - Application complète de suivi de portefeuille, d’analyse, de comptabilité et de déclaration fiscale, qui protège votre vie privée.

## Retouche et gestion de photos
⛔ **À éviter**
- [![](https://shields.tosdr.org/en_417.svg)](https://tosdr.org/en/service/417)
- VSCO

✅  **À utiliser plutôt**
#### Web
- [miniPaint](https://github.com/viliusle/miniPaint) - Alternative open source à Photopea. miniPaint fonctionne directement dans le navigateur : rien n’est envoyé à un serveur, tout reste dans votre navigateur.

#### Ordinateur
- [GIMP](https://www.gimp.org/) - Éditeur d’images libre et open source.
- [Krita](https://github.com/KDE/krita) - Application gratuite et open source de peinture numérique.
- [Czkawka](https://github.com/qarmin/czkawka) - Application polyvalente pour trouver les doublons, les images similaires, etc.
- [DigiKam](https://www.digikam.org/) - Gestion professionnelle des photos grâce à la puissance de l’open source.
- [Inkscape](https://inkscape.org/) - Éditeur de graphismes vectoriels gratuit et open source permettant de créer des images vectorielles.
- [ImageGlass](https://imageglass.org/) - Application légère qui permet de visualiser des images dans un environnement de travail épuré et intuitif.
- [darktable](https://www.darktable.org/) - Application open source de gestion des flux de travail photographiques et de développement des fichiers RAW.
- [RapidRAW](https://github.com/CyberTimon/RapidRAW) - Magnifique éditeur d’images RAW non destructif et accéléré par GPU, conçu pour les performances. Alternative multiplateforme à Adobe Lightroom, légère (moins de 20 Mo). Sous licence AGPL-3.0.
- [RawTherapee](https://rawtherapee.com) - Développeur de photos RAW hors ligne et open source, qui complète darktable comme alternative à Lightroom. Sous licence GPL-3.0.

#### Android
- [Pocket Paint](https://github.com/Catrobat/Paintroid) - Application standard de manipulation d’images pour Catroid.
- [Scrambled Exif](https://gitlab.com/juanitobananas/scrambled-exif) - Supprimez les données EXIF des images avant de les partager.
- [ImagePipe](https://codeberg.org/Starfish/Imagepipe) - Réduit la taille des images et supprime les balises EXIF lors du partage sur les appareils Android.

[Retour en haut 🔝](#contents)

## Stockage de photos
⛔ **À éviter**
- Google Photos [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
    - [Google Photos Takeout Helper](https://github.com/TheLastGimbus/GooglePhotosTakeoutHelper) [💀](#icons) - Script qui organise l’archive désordonnée de Google Takeout dans un grand dossier chronologique. Utilisez-le pour quitter Google Photos :).
- Amazon Photos

✅  **À utiliser plutôt**

### Auto-hébergé
- [Immich](https://github.com/immich-app/immich) - Solution auto-hébergée de sauvegarde des photos et vidéos directement depuis votre téléphone.
- [LibrePhotos](https://github.com/LibrePhotos/librephotos) - Fork actif de [OwnPhotos](https://github.com/hooram/ownphotos), alternative auto-hébergée à Google Photos.
- [Nextcloud](https://nextcloud.com/) - Plateforme de productivité open source et auto-hébergée qui vous laisse le contrôle. Son extension [*Photos*](https://github.com/nextcloud/photos) permet d’organiser et de visualiser vos photos.
- [Photoprism](https://photoprism.app) - Application serveur riche en fonctionnalités pour parcourir, organiser et partager votre collection personnelle de photos. C’est l’alternative la plus proche de Google Photos.
- [Pigallery2](http://bpatrik.github.io/pigallery2/) - Galerie photo Web auto-hébergée, organisée d’abord par répertoires.
- [Photoview](https://photoview.github.io/) - Galerie photo pour serveurs personnels auto-hébergés avec reconnaissance faciale.
- [Photostructure](https://photostructure.com/) - Bibliothèque photo auto-hébergée qui facilite la navigation et le partage de toute une vie de souvenirs.
- [Stingle Photos](https://stingle.org/) - Solution open source offrant une sécurité renforcée, la confidentialité et le chiffrement pour sauvegarder vos photos.
- [Ente](https://ente.com/) - Stockage chiffré de bout en bout pour photos et vidéos. Open source, [audité](https://ente.com/blog/cryptography-audit/) de façon indépendante.

### Fournisseurs tiers
- [Crypt.ee](https://crypt.ee/) - Espace privé et chiffré pour toutes vos photos, documents, notes et bien plus encore.
- [Ente](https://ente.com/) - Stockage chiffré de bout en bout pour photos et vidéos. Open source, [audité](https://ente.com/blog/cryptography-audit/) de façon indépendante.
- [Stingle Photos](https://stingle.org/) - Solution open source offrant une sécurité renforcée, la confidentialité et le chiffrement pour sauvegarder vos photos.

### Local
- [DigiKam](https://www.digikam.org/) - Gestion professionnelle des photos grâce à la puissance de l’open source.
- [Photok](https://github.com/leonlatsch/Photok) - Coffre-fort photo gratuit qui stocke vos photos chiffrées sur votre appareil et les dissimule aux autres.
- [ImageGlass](https://imageglass.org/) - Application légère qui permet de visualiser des images dans un environnement de travail épuré et intuitif.

[Retour en haut 🔝](#contents)

## Outils de confidentialité

Cette section présente des outils qui peuvent aider à analyser le niveau de confidentialité de vos appareils.

### Ordinateur

- [Whoami Project](https://github.com/owerdogan/whoami-project) [💀](#icons) - Renforce la confidentialité et l’anonymat des distributions Linux basées sur Debian et Arch.
- [BusKill](https://www.buskill.in/) - Interrupteur d’homme mort déclenché par le détachement magnétique d’un câble, qui coupe une connexion USB.
- [OpenSnitch](https://github.com/evilsocket/opensnitch) - Pare-feu interactif pour GNU/Linux qui aide à détecter, surveiller et bloquer les connexions sortantes indésirables.
- [MAT2](https://github.com/jvoisin/mat2) - Supprime les métadonnées des images, documents, fichiers audio et autres. Outil en ligne de commande intégrable aux gestionnaires de fichiers.
- [Metadata Cleaner](https://gitlab.com/rmnvgr/metadata-cleaner) - Application de bureau simple pour afficher et supprimer les métadonnées des fichiers, basée sur MAT2.
- [Mobile Verification Toolkit](https://github.com/mvt-project/mvt) - Outil d’analyse forensique d’Amnesty International qui recherche dans les appareils Android et iOS les traces de logiciels espions comme Pegasus.

### Android

- [εxodus](https://reports.exodus-privacy.eu.org/en/) - Plateforme d’audit de la confidentialité des applications Android. Découvrez le nombre de traqueurs présents dans vos applications.
	- [ClassyShark3xodus](https://f-droid.org/en/packages/com.oF2pks.classyshark3xodus/) - Vérifie les APK à la recherche de traqueurs connus (fournis par Exodus), d’autres avertissements et de caractéristiques.
- [Plexus](https://plexus.techlore.tech/) - Éliminez l’incertitude quant à la compatibilité des applications Android sur les appareils dégooglisés. Vérifiez si une application fonctionnera sur un appareil sans Google.
- [Netguard](https://netguard.me/) - Moyen simple de bloquer l’accès à Internet application par application.
- [RethinkDNS + Firewall](https://github.com/celzero/rethink-app) - Pare-feu sans root et modificateur DNS open source pour Android 6 et versions ultérieures, doté de fonctions de lutte contre la censure.
- [🤖](#icons) [Orbot](https://orbot.app/) - Achemine le trafic des applications via le réseau Tor, à l’échelle du système comme VPN ou application par application. Créé par Guardian Project.

[Retour en haut 🔝](#contents)

## Accès et contrôle à distance
⛔ **À éviter**
- TeamViewer
- AnyDesk

✅  **À utiliser plutôt**
- [RustDesk](https://rustdesk.com/) - Logiciel client de bureau à distance open source, écrit en Rust. Fonctionne immédiatement, vous laisse le contrôle total de vos données et ne pose aucun problème de sécurité.
- [screego](https://screego.net/) - Partage d’écran pour les développeurs.
- [Remmina](https://remmina.org/) - Accès à distance au bureau et partage de fichiers via RDP.
- [UltraVNC](https://www.uvnc.com/) - Logiciel gratuit et puissant, facile à utiliser, pour accéder à distance à un PC et afficher l’écran d’un autre ordinateur (via Internet ou le réseau) sur le vôtre.
- [MeshCentral](https://meshcentral.com/) - Site Web open source, multiplateforme, auto-hébergé et riche en fonctionnalités pour la gestion à distance des appareils.
- [Apache Guacamole](https://guacamole.apache.org) - Passerelle de bureau à distance auto-hébergée et sans client, qui fournit un accès RDP, VNC et SSH depuis un navigateur. Sous licence Apache-2.0.
- [Sunshine + Moonlight](https://app.lizardbyte.dev/Sunshine) - Hôte auto-hébergé de diffusion de bureau et de jeux (Sunshine), accompagné de clients (Moonlight). Open source, sous licence GPL-3.0.

[Retour en haut 🔝](#contents)

## Routeurs
⛔ **À éviter**
- Routeurs fournis par les FAI et micrologiciels d’origine : code fermé, mises à jour de sécurité lentes ou inexistantes, et connexion fréquente aux serveurs du fabricant ou du FAI.

✅  **À utiliser plutôt**
- [OpenWrt](https://openwrt.org/) - Micrologiciel Linux open source qui remplace le logiciel d’origine de centaines de routeurs grand public et bénéficie de plusieurs années de mises à jour de sécurité.
- [OPNsense](https://opnsense.org/) - Plateforme de pare-feu et de routage open source basée sur FreeBSD, pour matériel dédié ou PC de rechange.
- [IPFire](https://www.ipfire.org/) - Distribution de pare-feu Linux open source renforcée, dotée d’un système de prévention des intrusions et d’une interface Web.

[Retour en haut 🔝](#contents)

## Lecteurs RSS
⛔ **À éviter**
- Feedly
- Inoreader
- Google News

Ces services dressent un profil à partir de tout ce que vous lisez. Un lecteur local ou auto-hébergé récupère directement les flux : personne ne voit votre liste de lecture.

✅  **À utiliser plutôt**
- [FreshRSS](https://freshrss.org/) - Agrégateur de flux auto-hébergé avec interface Web, prise en charge de plusieurs utilisateurs et API pour les applications mobiles.
- [Miniflux](https://miniflux.app/) - Lecteur de flux minimaliste, auto-hébergé, sans suivi et écrit en Go.
- [NetNewsWire](https://netnewswire.com/) - Lecteur RSS open source pour macOS et iOS, utilisable localement ou synchronisé avec des services auto-hébergés.
- [Fluent Reader](https://github.com/yang991178/fluent-reader) - Lecteur RSS open source pour ordinateur, compatible avec Windows, macOS et Linux.
- [NewsFlash](https://gitlab.com/news-flash/news_flash_gtk) - Lecteur RSS open source pour Linux, utilisable localement ou avec des services auto-hébergés comme Miniflux et FreshRSS.
- [Newsboat](https://newsboat.org/) - Lecteur RSS pour terminal.
- [🤖](#icons) [Feeder](https://github.com/spacecowboy/Feeder) - Lecteur RSS open source pour Android qui récupère les flux directement sur votre appareil, sans compte.
- [🤖](#icons) [Read You](https://github.com/ReadYouApp/ReadYou) - Lecteur RSS open source pour Android au design Material You, utilisable localement ou synchronisé avec des services auto-hébergés.
- [🤖](#icons) [Capy Reader](https://github.com/jocmp/capyreader) - Lecteur RSS open source pour Android, utilisable localement ou synchronisé avec Miniflux et FreshRSS.

[Retour en haut 🔝](#contents)

## Moteurs de recherche

⛔ **À éviter**
- Google [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Yahoo! [![](https://shields.tosdr.org/en_309.svg)](https://tosdr.org/en/service/309)
- Bing
- Yandex [![](https://shields.tosdr.org/en_860.svg)](https://tosdr.org/en/service/860)
- Ecosia [![](https://shields.tosdr.org/en_591.svg)](https://tosdr.org/en/service/591)

✅  **À utiliser plutôt**
- [librengine](https://github.com/liameno/librengine) [💀](#icons) - Moteur de recherche Web respectueux de la vie privée.
- [SearxNG](https://github.com/searxng/searxng) - Métamoteur de recherche libre qui agrège les résultats de différents services et bases de données.
- [DuckDuckGo](https://duckduckgo.com) - Moteur de recherche respectueux de la vie privée.
- [Brave Search](https://search.brave.com) - Moteur de recherche respectueux de la vie privée, doté de [son propre index indépendant](https://brave.com/search-independence/).
- [Qwant](https://www.qwant.com/) - Moteur de recherche sans suivi, créé et hébergé en France, dans l’UE.
- [Marginalia](https://marginalia-search.com/) - Moteur de recherche indépendant doté de son propre robot et index, qui privilégie les pages riches en texte et non commerciales. Auto-hébergeable, sous licence AGPL-3.0.
- [YaCy](https://yacy.net/) - Moteur de recherche décentralisé pair à pair, dans lequel chaque utilisateur exécute un nœud et partage l’index. Open source, sous licence GPL-2.0.

[Retour en haut 🔝](#contents)

## Réseaux et plateformes sociales

> [!NOTE]
> **Le fédivers**
>
> Le fédivers est un « uni**vers** » de réseaux sociaux « **fédé**rés », capables de communiquer entre eux grâce à un protocole standard et ouvert. Vous pouvez ainsi consulter le contenu de n’importe quel réseau depuis n’importe lequel des autres. Vous n’êtes pas enfermé chez un seul fournisseur et restez libre de choisir. [Regardez cette vidéo](https://framatube.org/w/9dRFC6Ya11NCVeYKn8ZhiD?start=8s) de FramaSoft, qui illustre très bien le concept.
>
> Idéalement, nous devrions tous rejoindre le fédivers et abandonner les réseaux sociaux centralisés et monopolistiques actuellement les plus populaires (Twitter, Reddit, Instagram…).
>
> Toutes les applications compatibles avec le fédivers (ActivityPub) sont marquées d’une icône [🧩](#icons).

> [!NOTE]
> **Interfaces et clients alternatifs**
>
> Les interfaces alternatives sont utiles pour protéger votre vie privée individuelle. Elles permettent de consulter les contenus de services privatifs et nuisibles à la confidentialité en étant mieux protégé et parfois de façon anonyme. Toutefois, même avec la plupart de ces interfaces, les services privatifs reçoivent des requêtes sur le contenu consulté (sans toujours savoir qu’il s’agit de vous). Cela nuit encore à la confidentialité collective et alimente leurs algorithmes de diverses façons. Seules les interfaces alternatives (ou clients) agissant comme proxy masquent votre véritable adresse IP au fournisseur de contenu.
>
> Vous pouvez utiliser les extensions et applications de navigateur suivantes pour rediriger automatiquement les liens vers des interfaces alternatives respectueuses de la vie privée :
> - [LibRedirect](https://github.com/libredirect/browser_extension#get) - Extension Web qui redirige YouTube, Twitter… vers d’autres interfaces et backends respectueux de la vie privée.
> - [UntrackMe](https://www.f-droid.org/en/packages/app.fedilab.nitterizeme/) - Transforme les liens YouTube, Twitter et autres en liens vers leurs alternatives libres et open source.



### Plateformes de blog (Medium)

⛔ **À éviter** :
- **Medium** - Le site contient des traqueurs Google et des publicités.
- **Blogger** - Propriété de Google, le service contient des traqueurs Google et des publicités.

✅ **Alternatives** :
- [Plume](https://github.com/Plume-org/Plume) [🧩](#icons) - Application de blog fédérée grâce à ActivityPub.
- [WriteFreely](https://writefreely.org/) [🧩](#icons) - Plateforme open source pour créer un espace d’écriture sur le Web.

✅ **Interfaces alternatives à Medium** :
- [Scribe](https://git.sr.ht/~edwardloveall/scribe/) - Interface alternative à Medium, inspirée d’Invidious.

### Instagram

[![](https://shields.tosdr.org/en_219.svg)](https://tosdr.org/en/service/219)

⛔ N’utilisez pas Instagram (ou au moins son client officiel). Cette application porte fortement atteinte à la vie privée, propose des résultats et fils d’actualité biaisés selon les profils, sert aussi d’outil de manipulation et censure beaucoup les discours libres. Enfin, son interface est conçue pour créer une dépendance et est toxique.

✅ **À utiliser plutôt**

**Alternatives à Instagram**
- [Pixelfed](https://pixelfed.org/) [🧩](#icons) - Alternative décentralisée, fédérée et open source à Instagram, avec publications, vidéos, stories, balises et plus encore.

### Quora

⛔ Le site de Quora contient des publicités et des traqueurs qui collectent vos données, ensuite vendues ou partagées avec des tiers. Sa [politique de confidentialité](https://tosdr.org/en/service/314) est médiocre.

✅ **Interfaces alternatives à Quora (Web)** :
- [Quetre](https://github.com/zyachel/quetre) - Interface alternative à Quora qui permet de consulter les réponses sans publicités, traqueurs ni autres éléments superflus.


### YouTube

[![](https://shields.tosdr.org/en_274.svg)](https://tosdr.org/en/service/274)

⛔ N’utilisez pas YouTube (ou au moins son client officiel). Le service porte fortement atteinte à la vie privée et crée un profil très précis de vos centres d’intérêt. C’est aussi un [outil de radicalisation](https://www.pcmag.com/news/does-youtubes-algorithm-lead-to-radicalization) qui présente aux utilisateurs des [contenus biaisés](https://arxiv.org/pdf/1908.08313.pdf) afin d’augmenter l’engagement et de les inciter à regarder toujours plus de contenu, créant une [dépendance](https://medium.com/dataseries/how-youtube-is-addictive-259d5c575883). Le service ne vous montre jamais d’[opinions alternatives](https://arxiv.org/pdf/1908.08313.pdf) à votre idéologie ou à vos biais et pratique une forte censure. YouTube collecte énormément de données : centres d’intérêt, temps libre, idéologie, préférences, aversions, goûts musicaux, etc.

✅ **À utiliser plutôt**
- [Peertube](https://joinpeertube.org/en/) [🧩](#icons) - Alternative libre, ouverte et décentralisée aux plateformes vidéo.
- [Odysee](https://odysee.com/) - Plateforme vidéo créée par les auteurs de LBRY et reposant sur le protocole blockchain LBRY.
- [DTube](https://github.com/dtube/dtube) - Site Web complet et décentralisé de partage de vidéos.

✅ **Interfaces alternatives à YouTube (Web)** :
- [Invidious](https://github.com/iv-org/invidious) - Interface alternative à YouTube, respectueuse de la vie privée.
- [Piped](https://github.com/TeamPiped/Piped) - Interface alternative à YouTube, respectueuse de la vie privée et efficace par conception.
- [ViewTube](https://github.com/ViewTube/viewtube) - Interface alternative à YouTube, respectueuse de la vie privée et écrite en Vue.js.
- [Youtube-Local](https://github.com/user234683/youtube-local) - Client Web permettant de regarder YouTube anonymement et avec de meilleures performances.

✅ **Clients alternatifs à YouTube (applications)** :
- [🤖](#icons) [NewPipe](https://newpipe.net/) - Application Android alternative à YouTube. Sans compte, respectueuse de la vie privée et sans publicité.
- [🤖](#icons) [SkyTube](https://github.com/SkyTubeTeam/SkyTube) - Application Android alternative à YouTube. Sans compte, respectueuse de la vie privée et sans publicité.
- [FreeTube](https://github.com/FreeTubeApp/FreeTube) - Lecteur YouTube de bureau open source conçu pour préserver la confidentialité (utilise l’API RSS locale ou Invidious comme backend).
- [🤖](#icons) [LibreTube](https://github.com/Libre-tube/LibreTube) - Interface alternative à YouTube pour Android, utilisant Piped.
- [Yattee](https://github.com/yattee/yattee) - Interface alternative à YouTube pour iOS, tvOS et macOS, basée sur Invidious et Piped.
- [🤖](#icons) [Clipious](https://github.com/lamarios/clipious) [💀](#icons) Client Invidious pour Android.

### TikTok

[![](https://shields.tosdr.org/en_1448.svg)](https://tosdr.org/en/service/1448)

⛔ Évitez TikTok : cette application à la conception toxique nuit non seulement à la vie privée des utilisateurs, mais aussi à leur intégrité. Vous pouvez consulter [ces nombreuses publications](https://www.reddit.com/r/privacy/search?q=tiktok&restrict_sr=on&sort=top&t=all).

✅ **Interfaces alternatives à TikTok (Web)** :
- [ProxiTok](https://github.com/pablouser1/ProxiTok) - Interface alternative open source à TikTok.

### Twitter

[![](https://shields.tosdr.org/en_195.svg)](https://tosdr.org/en/service/195)

⛔ Évitez l’application ou le site Web officiel de Twitter. Le service suit ses utilisateurs et crée des profils selon les comptes qu’ils suivent, les publications qu’ils repartagent et celles qu’ils aiment. Ses politiques portent par défaut [atteinte à la vie privée des utilisateurs](https://www.eff.org/deeplinks/2017/05/how-opt-out-twitters-new-privacy-settings).

#### Auto-hébergé

- [Memos](https://github.com/usememos/memos) - Centre de notes open source et auto-hébergé, avec gestion des connaissances et fonctions sociales.

#### Décentralisé

- [Nostr](https://nostr.com/) - Protocole ouvert permettant de créer un réseau social mondial résistant à la censure. Il ne dépend d’aucun serveur central de confiance et est donc résilient ; fondé sur des clés et signatures cryptographiques, il est infalsifiable ; il ne repose pas sur des techniques pair à pair et fonctionne donc. **Remarque** : Nostr est un protocole qui permet bien plus qu’une alternative à Twitter.

> [!NOTE]
> **Réseaux sociaux fédérés** : un réseau social fédéré n’est pas un site unique comme Twitter ou Facebook, mais un réseau de milliers de communautés gérées par diverses organisations et personnes, offrant une expérience homogène des médias sociaux.

- [Mastodon](https://joinmastodon.org/) [🧩](#icons) - Réseau social de microblogage gratuit et fédéré, fondé sur des protocoles ouverts.
  - [Applications Mastodon](https://joinmastodon.org/apps) - Liste d’applications Mastodon pour Android, iOS, le Web et ordinateur.
- [Pleroma](https://pleroma.social/) [🧩](#icons) - Serveur de réseau social fédéré, gratuit et fondé sur des protocoles ouverts.
  - [Soapbox](https://gitlab.com/soapbox-pub/soapbox-fe) - Interface de Pleroma privilégiant l’image de marque personnalisée et la facilité d’utilisation.

#### Interfaces alternatives
- [Nitter](https://github.com/zedeus/nitter/wiki/Instances) [💀](#icons) - Interface alternative à Twitter, gratuite, open source et axée sur la confidentialité.
- [Squawker](https://github.com/j-fbriere/squawker) - Client Twitter open source pour Android, fork maintenu de Fritter.
- [Feetter](https://codeberg.org/pluja/Feetter) [💀](#icons) - Créez, synchronisez et gérez des flux Nitter sans inscription, depuis n’importe quel appareil.

### Reddit

[![](https://shields.tosdr.org/en_194.svg)](https://tosdr.org/en/service/194)

⛔ Évitez Reddit, ou au moins ses clients officiels : ils regorgent de traqueurs et de publicités et partagent des données utilisateur inutiles avec leurs serveurs.

✅ **Alternatives à Reddit** :
- [Aether](https://getaether.net/) - Communautés publiques éphémères de pair à pair.
- [Mbin](https://github.com/MbinOrg/mbin) [🧩](#icons) - Agrégateur de contenu et plateforme de microblogage de type Reddit pour le fédivers, continuation de kbin maintenue par la communauté.
- [Lemmy](https://join-lemmy.org/) [🧩](#icons) - Alternative fédérée à Reddit, écrite en Rust et open source.

✅ **Clients Reddit respectueux de la vie privée** :
- [Redlib](https://github.com/redlib-org/redlib) - Interface privée alternative à Reddit, issue de Libreddit.

### Plateformes de streaming (Twitch)

[![](https://shields.tosdr.org/en_200.svg)](https://tosdr.org/en/service/200)

⛔ Évitez les plateformes comme Twitch, Patreon et YouTube : elles portent fortement atteinte à la vie privée de vos spectateurs (et à la vôtre !). Préférez des plateformes auto-hébergées qui protègent la confidentialité de tous.

✅ **Alternatives** :
- [Owncast](https://github.com/owncast/owncast) - Reprenez le contrôle de vos vidéos en direct en les hébergeant vous-même. Diffusion et clavardage intégrés.

✅ **Clients Twitch respectueux de la vie privée** :
- [🤖](#icons) [Twire](https://github.com/twireapp/Twire) - Navigateur et lecteur de flux Twitch open source et sans publicité pour Android.

[Retour en haut 🔝](#contents)

### Imgur

[![](https://shields.tosdr.org/en_325.svg)](https://tosdr.org/en/service/325)

⛔ Le site Imgur regorge d’éléments superflus, de GIF, de cookies, de JavaScript et de traqueurs.

✅ **Alternatives** :
- [rimgo](https://codeberg.org/video-prize-ranch/rimgo#instances) - Interface alternative à Imgur, en lecture seule et sans JavaScript, basée sur rimgu et réécrite en Go.

[Retour en haut 🔝](#contents)

### IMDb

⛔ IMDb appartient à Amazon et son site Web est saturé de publicités et de traqueurs tiers.

✅ **Interfaces alternatives à IMDb** :
- [libremdb](https://libremdb.iket.me/) - Interface alternative à IMDb respectueuse de la vie privée, qui supprime publicités et traqueurs. Open source et auto-hébergeable (AGPL-3.0).

[Retour en haut 🔝](#contents)

### Fandom

⛔ Les wikis Fandom (anciennement Wikia) sont saturés de publicités, de vidéos en lecture automatique et de traqueurs.

✅ **Interfaces alternatives à Fandom** :
- [BreezeWiki](https://breezewiki.com/) - Interface alternative aux wikis Fandom qui élimine publicités, vidéos et éléments superflus. Open source et auto-hébergeable.

[Retour en haut 🔝](#contents)

## Outils de travail en équipe
⛔ **À éviter**
- [![](https://shields.tosdr.org/en_206.svg)](https://tosdr.org/en/service/206)
- Google Meet [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Microsoft Teams [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- [![](https://shields.tosdr.org/en_536.svg)](https://tosdr.org/en/service/536)

✅  **À utiliser plutôt**
- [Zulip](https://zulip.com/) - Messagerie pour équipes réparties.
- [Stoat](https://stoat.chat/) (anciennement Revolt) - Plateforme de messagerie privilégiant ses utilisateurs et fondée sur des technologies Web modernes.
- [Twake](https://twake.app/) - Travaillez plus rapidement en équipe. Twake répond à tous vos besoins organisationnels depuis une plateforme unique.
- [RocketChat](https://rocket.chat/) - Maîtrisez vos communications, gérez vos données et disposez de votre propre plateforme collaborative pour améliorer la productivité de votre équipe.
- [Nextcloud Talk](https://nextcloud.com/talk/) - Préservez la confidentialité de vos conversations avec Nextcloud Talk.
- [Mattermost](https://mattermost.com/) - Alternative open source à Slack.

> [!WARNING]
> **Clients alternatifs et modifications de Discord :**
> Votre adresse IP et vos messages seront toujours partagés avec Discord et lui appartiendront ; ils ne sont pas chiffrés.\
> L’utilisation de ces modifications ou clients [viole](https://x.com/discord/status/1006178587731550208) les [conditions d’utilisation de Discord](https://discord.com/terms). Nous ne sommes donc pas responsables d’une suspension ou résiliation de votre compte, **mais** cela ne devrait [pas encore arriver](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-against-discord-tos).

- [Consultez cette section pour les modifications et clients Discord alternatifs](https://github.com/pluja/awesome-privacy/blob/main/README.md#alternative-clientsmodifications-of-discord)

[Retour en haut 🔝](#contents)

## Enregistrement d’écran

- [Screenity](https://screenity.io/) - Enregistreur d’écran puissant et respectueux de la vie privée, avec outil d’annotation pour créer de meilleures vidéos de travail, de formation et plus encore.
- [OBS](https://obsproject.com/) - Logiciel gratuit et open source d’enregistrement vidéo et de diffusion en direct.

[Retour en haut 🔝](#contents)

## Traduction
⛔ **À éviter**
- Google Translate [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- DeepL
- Bing Translator [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

✅ **Traduction de texte**
- [Mozilla Translate](https://mozilla.github.io/translate/) - Outil open source qui exécute le modèle localement dans votre navigateur.
- [Libretranslate](https://libretranslate.com/) - Traduction automatique open source, entièrement auto-hébergée, sans limites ni dépendance aux services propriétaires.
- [Apertium](https://apertium.org/) - Plateforme de traduction automatique libre et open source, qui fonctionne hors ligne sur votre ordinateur.
- [Softcatala](https://www.softcatala.org/traductor/) - Outil de traduction open source, disponible uniquement pour le catalan, l’espagnol, l’anglais et le français (utilise Apertium).
- [TranslateLocally](https://github.com/XapaJIaMnu/translateLocally) – Traduction automatique neuronale libre et open source, qui fonctionne hors ligne sur votre ordinateur.
- [Linguist](https://linguister.io) - Solution de traduction gratuite, open source et complète dans le navigateur, avec traducteur hors ligne intégré et [traducteurs personnalisés](https://linguister.io/docs/CustomTranslator). Traduction de pages complètes, synthèse vocale, dictionnaire, traduction de texte saisi et de texte sélectionné sur une page.

✅ **Interfaces alternatives à Google Traduction**
- [Lingva](https://github.com/TheDavidDelta/lingva-translate) [💀](#icons) - Interface alternative à Google Traduction. [Démo](https://lingva.ml/).
- [Simplytranslate](https://codeberg.org/ManeraKai/simplytranslate) - Interface alternative à Google Traduction et LibreTranslate. [Démo](https://simplytranslate.org/)
- [Mozhi](https://codeberg.org/aryak/mozhi) - Interface alternative qui regroupe Google Traduction, DeepL, Yandex et d’autres moteurs dans une seule interface privée. Auto-hébergeable, sous licence AGPL-3.0.

[Retour en haut 🔝](#contents)

## Divers
- [Skymap](https://skymaponline.net/) - Planétarium en ligne open source.
- [CrowdSec](https://github.com/crowdsecurity/crowdsec) - Outil fail2ban collaboratif, moderne et open source.
- [Hetty](https://github.com/dstotijn/hetty) - Boîte à outils HTTP pour la recherche en sécurité, conçue comme alternative open source à Burp Suite Pro.
- [Visited](https://github.com/didvc/visited) - Collectez localement l’historique de navigation sur différents navigateurs.

[Retour en haut 🔝](#contents)

## Utilitaires
- [Deskreen](https://github.com/pavlobu/deskreen) - Transformez n’importe quel appareil en écran secondaire pour votre ordinateur.

[Retour en haut 🔝](#contents)

## Gestion de versions
⛔ **À éviter**

- **GitHub** - [![](https://shields.tosdr.org/en_297.svg)](https://tosdr.org/en/service/297). Sa politique de confidentialité n’est pas si mauvaise, mais le service appartient à Microsoft et il est de notoriété publique que le code qu’il héberge sert à entraîner des modèles d’IA.

✅  **À utiliser plutôt**
- [Codeberg](https://codeberg.org/) - Plateforme collaborative proposant gratuitement l’hébergement Git et des services pour les logiciels libres et open source, les contenus et les projets.
- [Forgejo](https://forgejo.org/) - Forge logicielle légère, open source et auto-hébergée.
- [GitLab](https://about.gitlab.com/) - Ensemble d’outils DevOps permettant de développer, sécuriser et exploiter des logiciels.
- [Radicle](https://radicle.dev/) - Pile de collaboration de code open source et pair à pair, construite autour de Git. Contrairement aux plateformes d’hébergement centralisées, aucun acteur ne contrôle le réseau. Les dépôts sont répliqués entre pairs de façon décentralisée et les utilisateurs contrôlent entièrement leurs données et leur flux de travail.
- [Gitea](https://gitea.com) - Forge Git légère et auto-hébergée, dont le projet Forgejo est issu. Open source, sous licence MIT.

[Retour en haut 🔝](#contents)

## Visioconférence et audioconférence
⛔ **À éviter**

- **Zoom** - [Très mauvaise politique de confidentialité](https://tosdr.org/en/service/2198). Les applications comprennent des [traqueurs Google](https://reports.exodus-privacy.eu.org/en/reports/us.zoom.videomeetings/latest/). Elles exigent de nombreuses autorisations.
- **Skype** - [Très mauvaise politique de confidentialité](https://tosdr.org/en/service/244). Les applications comprennent des [traqueurs Google et Microsoft](https://reports.exodus-privacy.eu.org/en/reports/com.skype.insiders/latest/). Elles exigent beaucoup trop d’autorisations.
- **Google Meet** - [Très mauvaise politique de confidentialité](https://tosdr.org/en/service/217). Les applications embarquent des [traqueurs Google](https://reports.exodus-privacy.eu.org/en/reports/com.google.android.apps.tachyon/latest/) (puisqu’il s’agit d’une application Google). Elles exigent beaucoup trop d’autorisations.
- **WhatsApp** - [Politique de confidentialité médiocre](https://tosdr.org/en/service/198). Les applications comprennent des [traqueurs Google](https://reports.exodus-privacy.eu.org/en/reports/com.whatsapp/latest/) et probablement des traqueurs Facebook (puisqu’il s’agit d’une application Facebook). Elles exigent beaucoup trop d’autorisations.
- **Instagram** - [Très mauvaise politique de confidentialité](https://tosdr.org/en/service/219). Les applications comprennent des [traqueurs Facebook](https://reports.exodus-privacy.eu.org/en/reports/com.instagram.android/latest/). Elles exigent beaucoup trop d’autorisations.
- **Discord** - [Très mauvaise politique de confidentialité](https://tosdr.org/en/service/536). Les applications contiennent [divers traqueurs](https://reports.exodus-privacy.eu.org/en/reports/com.discord/latest/). Elles exigent de nombreuses autorisations.
- Clubhouse

✅  **À utiliser plutôt**
- [BigBlueButton](https://bigbluebutton.org/) - Système de conférence Web conçu pour l’apprentissage en ligne.
- [Briefing](https://github.com/holtwick/briefing/) - Conversation vidéo de groupe directe et sécurisée. N’utilise que des technologies ouvertes (comme WebRTC), compatibles avec tous les navigateurs modernes.
- [Chitchatter](https://chitchatter.im/) - Messagerie sécurisée pair à pair, sans serveur, décentralisée et éphémère. Prend en charge le texte, l’audio, la vidéo, le partage d’écran et de fichiers.
- [Jam](https://github.com/jam-systems/jam) [💀](#icons) - Votre propre Clubhouse open source pour les mini-conférences, les amis et les communautés.
- [Jami](https://jami.net/) - Conférences audio et vidéo pair à pair.
- [Jitsi Meet](https://github.com/jitsi/jitsi-meet) - Visioconférence plus sécurisée, plus flexible et entièrement gratuite. Une connexion est nécessaire sur l’instance officielle ; l’auto-hébergement est recommandé.
- [Mirotalk P2P](https://p2p.mirotalk.com/) - Visioconférences WebRTC pair à pair gratuites, simples, sécurisées et rapides, jusqu’à 4K et 60 ips, compatibles avec tous les navigateurs et plateformes.
- [Mumble](https://www.mumble.info/) - Application de communication vocale open source dotée de fonctions avancées.
- [PeerCalls](https://github.com/peer-calls/peer-calls) - Appels vidéo de groupe pair à pair pour tous, écrits en Go et TypeScript.
- [Nextcloud Talk](https://nextcloud.com/talk/) - Appels vidéo et messagerie auto-hébergés, exécutés sur votre propre serveur Nextcloud via WebRTC (AGPL-3.0).


##### Clients alternatifs et modifications de Discord :
> [!WARNING]
> Votre adresse IP et vos messages seront toujours partagés avec Discord et lui appartiendront ; ils ne sont pas chiffrés.\
> L’utilisation de ces modifications ou clients [viole](https://x.com/discord/status/1006178587731550208) les [conditions d’utilisation de Discord](https://discord.com/terms). Nous ne sommes donc pas responsables d’une suspension ou résiliation de votre compte, **mais** cela ne devrait [pas encore arriver](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-against-discord-tos).
- [OpenAsar](https://openasar.dev/) - Alternative open source au fichier app.asar de l’application Discord pour ordinateur, avec une option [sans suivi](https://github.com/GooseMod/OpenAsar#readme) qui désactive les rapports de plantage et d’erreur de Discord.
- [Vencord](https://github.com/Vendicated/Vencord) - Modification du client Discord qui fait les choses autrement.
- [BetterDiscord](https://betterdiscord.app/) - Modification du client Discord. Vous devez également installer l’extension [DoNotTrack](https://betterdiscord.app/plugin/DoNotTrack) pour bloquer les traqueurs.
- [Kernel](https://github.com/kernel-mod/electron) [💀](#icons) - Modification du client Electron très petite et rapide, offrant de nombreuses possibilités. Vous devez aussi installer le paquet [Discord Utilities](https://github.com/slow/discord-utilities) pour bloquer les traqueurs.
- [Replugged](https://replugged.dev/) - Suite de la modification de client abandonnée [Powercord](https://powercord.dev).
- [WebCord](https://github.com/SpacingBat3/WebCord) - Client Discord sans API Discord et sans API Fosscord, écrit avec Electron.
- [🤖](#icons) [Aliucord](https://github.com/Aliucord/Aliucord) - Modification de l’application Discord pour Android qui [désactive entièrement le suivi Discord](https://github.com/Aliucord/Aliucord/blob/main/Aliucord/src/main/java/com/aliucord/coreplugins/NoTrack.java).
- [Vesktop](https://vesktop.dev/) - Client de bureau autonome pour Discord qui bloque sa télémétrie et intègre Vencord. Open source, sous licence GPL-3.0.

[Retour en haut 🔝](#contents)

## Montage vidéo
⛔ **À éviter**
- [![](https://shields.tosdr.org/en_417.svg)](https://tosdr.org/en/service/417)
- Sony Vegas
- DaVinci Resolve

Ces programmes regorgent de traqueurs et de télémétrie. Vous trouverez [ici](https://www.gnu.org/proprietary/malware-adobe.html) la liste complète des raisons de **ne pas** utiliser Adobe. La plupart des logiciels de montage propriétaires présentent des problèmes similaires.

✅  **À utiliser plutôt**

- [kdenlive](https://kdenlive.org/) - Éditeur vidéo open source, gratuit et facile à utiliser, quelle que soit la finalité, pour toujours.
- [LosslessCut](https://github.com/mifi/lossless-cut) - LosslessCut vise à être l’interface graphique FFmpeg multiplateforme ultime pour effectuer très rapidement des opérations sans perte sur les vidéos, l’audio, les sous-titres et les autres médias associés.
- [Olive Video Editor](https://olivevideoeditor.org/) - Éditeur vidéo non linéaire avancé, gratuit et open source, actuellement en version alpha.
- [OpenCut](https://github.com/OpenCut-app/OpenCut) - [Bêta] Éditeur vidéo gratuit et open source pour le Web, l’ordinateur et le mobile.
- [Shotcut](https://www.shotcut.org/) - Éditeur vidéo multiplateforme simple, gratuit et open source.

[Retour en haut 🔝](#contents)

## VPN

⛔ **À éviter**

- [VPN gratuits](https://techcrunch.com/2020/09/24/free-vpn-bad-for-privacy/) du Google Play Store ou de toute autre boutique d’applications. Ces services ne sont pas vraiment gratuits : ils aspirent les données de vos connexions, conservent des journaux et établissent votre profil pour [vendre vos données aux annonceurs](https://thenextweb.com/news/be-cautious-free-vpns-are-selling-your-data-to-3rd-parties). Si un gouvernement veut suivre quelqu’un, ces applications seront les premières à céder.

- Les VPN à code fermé, comme Surfshark ou NordVPN, peuvent être moins fiables, car personne ne peut savoir avec certitude comment ils traitent vos données. De plus, un paiement par carte bancaire révèle votre identité. Si vous devez fournir une adresse e-mail déjà utilisée sur d’autres services, elle pourra également vous identifier.


✅  **À utiliser plutôt**

Voici quelques options open source et réellement privées, qui ne nécessitent ni données personnelles ni carte bancaire :

- [IVPN](https://ivpn.net) - VPN sans journaux, doté d’applications open source, avec inscription sans adresse e-mail et paiement en espèces, Monero ou Bitcoin.
- [nadanada](https://nadanada.me) (anciennement LNVPN) - VPN WireGuard à l’usage, sans compte, payable via le Lightning Network ou d’autres cryptomonnaies.
- [Mullvad VPN](https://mullvad.net) - VPN sans journaux, avec applications open source, comptes numérotés anonymes et paiement en espèces ou en cryptomonnaie.
- [Proton VPN](https://protonvpn.com) - VPN suisse sans journaux, proposant des applications open source auditées sur toutes les plateformes et une formule gratuite sans limite de données.
- [SPN](https://safing.io/) - Réseau système open source qui achemine chaque connexion d’application par son propre chemin, via plusieurs nœuds, afin de séparer les adresses IP par connexion plutôt que d’utiliser une seule adresse de sortie commune. Intégré au pare-feu Safing Portmaster pour Windows et Linux.
- [Amnezia VPN](https://amnezia.org) - VPN auto-hébergé et résistant à la censure, à déployer sur votre propre serveur, avec des applications open source auditées (GPL-3.0).
- [Autres offres sur kycnot.me (catégorie VPN)](https://kycnot.me/?categories=vpn) - Fournisseurs de VPN sans vérification d’identité (KYC).

[Retour en haut 🔝](#contents)

## Navigateur Web

⛔ **À éviter**

- **Google Chrome** - Propriété de Google et basé sur le projet open source Chromium (également propriété de Google), il comporte de nombreuses fonctions portant atteinte à la vie privée et est souvent associé à votre compte Google. Il relève de la [politique de confidentialité de Google](https://tosdr.org/en/service/217), connue pour être très mauvaise. Google entend imposer [Manifest V3](https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening), qui nuit directement aux efforts de protection de la vie privée.
- **Microsoft Edge** - Version de Chromium à l’image de Microsoft, avec des traqueurs Microsoft à la place des traqueurs Google. Il relève de la [politique de confidentialité de Microsoft](https://tosdr.org/en/service/244), elle aussi très mauvaise. Si vous souhaitez tout de même l’utiliser, vous pouvez [suivre ce guide](https://anonymousplanet.net/guide/#hardening-edge) pour le renforcer un peu.
- **Opera** - Opera a été [racheté par un consortium d’investisseurs chinois](https://en.wikipedia.org/wiki/Opera_(web_browser)#Acquisition_by_Chinese_consortium). L’application contient [de nombreux traqueurs](https://reports.exodus-privacy.eu.org/de/reports/com.opera.browser/latest/).

✅  **À utiliser plutôt**

#### Android / iOS
- [Brave](https://brave.com/) - Android/iOS. Brave offre dès l’installation une bonne protection de la vie privée et contre les traqueurs.
- [Firefox](https://www.firefox.com/en-US/mobile/) - Android/iOS.
    - [🤖](#icons) [IronFox](https://gitlab.com/ironfox-oss/IronFox) - Fork du navigateur Mull. Fork renforcé de Firefox pour Android, dont les blobs propriétaires ont été supprimés.
- [🤖](#icons) [Vanadium](https://vanadium.app/) - Versions de Chromium améliorées en matière de confidentialité et de sécurité par GrapheneOS.
- [🤖](#icons) [Privacy Browser](https://www.stoutner.com/privacy-browser/) - Navigateur axé sur la confidentialité.
- [Tor Browser](https://www.torproject.org/) - iOS/Android. Protégez-vous du suivi et de la surveillance et contournez la censure.
- [Cromite](https://github.com/uazo/cromite) - Fork de Chromium basé sur Bromite, intégrant le blocage des publicités et privilégiant la confidentialité.

#### Ordinateur
- [Ungoogled Chromium](https://github.com/ungoogled-software/ungoogled-chromium) - Approche légère pour supprimer la dépendance aux services Web de Google. Chromium de Google sans dépendance à ses services Web.
- [Brave](https://brave.com/) - Brave offre dès l’installation une bonne protection de la vie privée et contre les traqueurs.
- [Firefox](https://www.firefox.com/en-US/) - Navigateur indépendant et open source. Il nécessite un [renforcement et quelques ajustements](https://anonymousplanet.net/guide/#hardening-firefox) pour assurer une bonne confidentialité.
  - [LibreWolf](https://librewolf.net/) - Fork de Firefox axé sur la confidentialité.
- [Tor Browser](https://www.torproject.org/) - Version renforcée de Firefox qui achemine le trafic via le réseau Tor pour résister au suivi, à la surveillance et à la censure.
- [Mullvad Browser](https://mullvad.net/en/browser/) - Navigateur offrant les mêmes garanties de confidentialité et de sécurité que Tor Browser, sans utiliser le réseau Tor.
- [Zen Browser](https://zen-browser.app/) - Navigateur basé sur Firefox, avec protection renforcée contre le suivi activée par défaut et navigation épurée et apaisante. Sous licence MPL-2.0.
- [Floorp](https://floorp.app/) - Fork de Firefox avec télémétrie désactivée et personnalisation supplémentaire, conçu dans un souci de confidentialité. Open source, sous licence MPL-2.0.

> [!TIP]
> Il peut être utile de découvrir comment renforcer la sécurité de votre navigateur. Consultez cette section du [Guide du voyageur de l’anonymat en ligne](https://anonymousplanet.net/guide/#hardening-browsers). Si vous ne comprenez pas ce que vous faites, ne le faites pas : vous risqueriez de nuire davantage à votre confidentialité.

[Retour en haut 🔝](#contents)

### Extensions de navigateur

#### Anti-suivi
Lisez la description de l’extension avant de l’installer. Si vous ne comprenez pas son fonctionnement, vous pourriez compromettre votre confidentialité. En outre, un trop grand nombre d’extensions peut ralentir votre navigation.

- [uBlock Origin](https://ublockorigin.com/) - Bloqueur de contenu et de publicités gratuit et open source, léger en ressources processeur et mémoire.
	- [Consultez la documentation de l’extension](https://github.com/gorhill/uBlock/wiki/Blocking-mode) et choisissez l’un des modes recommandés pour renforcer votre confidentialité.
	- Dans les paramètres > listes de filtres > nuisances, activez easylist-cookies pour éviter les fenêtres contextuelles agaçantes relatives aux cookies.
- [LibRedirect](https://github.com/libredirect/browser_extension) - Extension Web simple qui redirige les requêtes Twitter, YouTube, Google Maps et bien d’autres vers des alternatives respectueuses de la vie privée. Privacy Redirect n’est plus maintenu ; LibRedirect est un fork maintenu.
- [Privacy Badger](https://privacybadger.org/) - Extension de navigateur de l’EFF qui apprend à bloquer les traqueurs pendant votre navigation. Open source, sous licence GPL-3.0.
- [ClearURLs](https://clearurls.xyz/) - Extension de navigateur qui supprime automatiquement les paramètres de suivi des liens et des URL. Open source, sous licence LGPL-3.0.

#### Outils utiles
- [Single File](https://github.com/gildas-lormeau/SingleFile) - Enregistrez une copie fidèle d’une page Web entière dans un seul fichier HTML, afin de la consulter hors ligne.

### Synchronisation du navigateur
- [xBrowserSync](https://www.xbrowsersync.org/) - La synchronisation de navigateur comme elle devrait être : sécurisée, anonyme et gratuite !

[Retour en haut 🔝](#contents)

## Lancement d’alerte

✅  **À utiliser plutôt**
- [GlobaLeaks](https://www.globaleaks.org/) - Plateforme de lancement d’alerte auto-hébergeable pour les organisations, rédactions et militants, en remplacement des portails de signalement hébergés. Open source (AGPL-3.0).
- [SecureDrop](https://securedrop.org/) - Système de soumission auto-hébergé permettant aux rédactions de recevoir des documents de sources anonymes via Tor, en remplacement des e-mails et téléversements vers le cloud. Open source (AGPL-3.0).

[Retour en haut 🔝](#contents)

## Vie privée, sécurité et anonymat

Anonymat, vie privée et sécurité sont souvent employés indifféremment, mais désignent en réalité des notions distinctes. Il est important d’en comprendre les différences.

- La vie privée consiste à déterminer qui peut accéder à vos informations personnelles, à savoir quelles données sont collectées à votre sujet et à décider qui peut y accéder et de quelle manière. En bref, elle suppose de garder le contrôle de vos informations personnelles.

- La sécurité consiste à protéger vos informations personnelles contre les accès non autorisés et le vol. Il s’agit de veiller à ce que vos données soient protégées et stockées de façon sûre, afin qu’il soit difficile pour des acteurs malveillants d’y accéder.

- L’anonymat consiste à faire en sorte que vos actions ne puissent pas être reliées à vous. Ainsi, même si quelqu’un découvre ce que vous faites, il ne pourra pas vous identifier comme source.

Il faut noter que la vie privée et la sécurité ne sont pas nécessairement interdépendantes. Par exemple, les systèmes de Google sont sécurisés et peu susceptibles d’être piratés, mais Google a toujours accès à vos données personnelles et les utilise.

La vie privée et l’anonymat ne sont pas non plus nécessairement liés. Des services comme Signal offrent un haut niveau de confidentialité, car ils ne collectent aucune donnée sur vos propos, vos interlocuteurs ou votre utilisation de l’application. Ils ne sont toutefois pas forcément anonymes, puisqu’une inscription avec un numéro de téléphone reste nécessaire (numéro souvent associé à votre identité).

Enfin, certains services peuvent offrir à la fois anonymat, vie privée et sécurité. Cette liste vise avant tout à proposer des alternatives qui privilégient la vie privée. Elles vous donnent le contrôle de vos données et ne les collectent ni ne les vendent.

[Retour en haut 🔝](#contents)

## Icônes

| Icône | Signification |
|-------|---------|
| 💀    | Attention : le développement de ce service semble inactif depuis longtemps. Le projet est peut-être abandonné. Renseignez-vous avant de l’utiliser. |
| ♻️    | Le logiciel est un fork : une personne a copié le projet original et en poursuit le développement de façon indépendante. |
| 🧩    | Le logiciel utilise ActivityPub, protocole décentralisé de réseau social. |
| 🤖    | Android uniquement. |

[Retour en haut 🔝](#contents)
