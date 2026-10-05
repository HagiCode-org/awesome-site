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

## Music Recognition

⛔ **Avoid**

- Shazam - It's under [Apple's privacy policy](https://tosdr.org/en/service/158). The android app [has a few Google trackers](https://reports.exodus-privacy.eu.org/en/reports/com.shazam.android/latest/).
- SoundHound - Has way too many [trackers](https://reports.exodus-privacy.eu.org/en/reports/com.melodis.midomiMusicIdentifier.freemium/latest/) for a music recognition app.
- Musicxmatch - The app [has trackers](https://reports.exodus-privacy.eu.org/en/reports/com.musixmatch.android.lyrify/latest/) and requires a dangerous amount of permissions.

✅  **Instead use**

**Shazam alternative clients**

- [SongRec](https://github.com/marin-m/SongRec) - An open-source Shazam client for Linux, written in Rust.
- [SongID Telegram Bot](https://github.com/smcclennon/SongID) - A Telegram bot that can identify music in audio/video files you send it. 

[Back to top 🔝](#contents)

## Office

⛔ **Avoid**
- Microsoft Office [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Google Docs [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **Instead use**
- [LibreOffice](https://www.libreoffice.org/) - Free and open source offline office.
- [OnlyOffice](https://www.onlyoffice.com/) - Free and open source online office for collaboration.
- [Cryptpad](https://cryptpad.fr/) - Collaboration suite, encrypted and open-source.
- [Etherpad](https://etherpad.org/) - Highly customizable open source online editor providing collaborative editing in really real-time.
- [Fileverse](https://fileverse.io) - Fileverse is building healthier alternatives with self-sovereignty, privacy by design, and standards compliance at its core.
	- [Ddocs](https://ddocs.new): privacy-enhancing alternative to google docs: onchain, end-to-end encrypted, and decentralized. 
 	- [dSheets](https://sheets.fileverse.io): decentralized alternative to Excel and Google Sheets.
- [Grist](https://www.getgrist.com) - Self-hostable spreadsheet and database hybrid for organizing data, as an open source Airtable alternative. Apache-2.0 licensed.

[Back to top 🔝](#contents)

## Online Phone Providers

Many websites require phone number verification. These services offer a way to receive (and sometimes send) SMS messages in a privacy-focused manner.

### No email verification, accepting monero
- [Crypton](https://crypton.sh/) - Secure SMS Sim Card in the cloud. (Based in Iceland)
- [Virtualsim](https://virtualsim.net/) - Virtualsim provides physical SIM cards leasing for SMS verifications. (Based in Ukraine)
- [MoneroSMS](https://monerosms.com/) - Virtual numbers for SMS/MMS messaging and verifications. CLI and web app. (Based in United States)

### Email verification required, accepting monero
- [Onlinesim](https://onlinesim.io/) - Receive SMS online to virtual phone number. (Based in Russia)

### Email verification required, accepting crypto
- [SmsPVA](https://smspva.com/) - SmsPVA is a service providing a phone number you can send any SMS on and get a text of it. (Based in France)

## Operating Systems
### Android
⛔ Try to avoid using Google Android or any Android that has been modified and tuned by any manufacturer such as Xiaomi, Huawei, Samsung, etc. Android is an Open Source project - [AOSP - Android Open Source Project](https://source.android.com/) - and it has many versions that will respect the user privacy and data and won't share it with private servers from manufacturers or service providers.

✅ **Instead use**

> [!NOTE]
> **Android app compatibility**:
> Although all of these Operating Systems are Android, app compatibility may not be perfect due to a lack of GMS (Google Mobile Services) which some apps require. You can check how well apps work with microg (a free and open source alternative to GMS) or no GMS at all with [Plexus](https://plexus.techlore.tech/) where the community can report how well android apps perform in those environments.

> [!NOTE]
> **Android security**: Custom ROMs can improve your privacy the same as they can decrease the Android security, always use ROMs that support verified boot and encryption and **DO NOT** have root enabled by default. If possible, don't use userdebug builds. If your threat model requires security, buy a Google Pixel and install GrapheneOS on it. [Read more on PrivacyGuides](https://www.privacyguides.org/android/overview).

#### Android-Based

**GrapheneOS** has a strong focus on security and privacy. It deploys technologies to mitigate many vulnerabilities and makes exploiting of vulnerabilities substantially more difficult. It improves the security of both the OS and the apps running on it.

- [GrapheneOS](https://grapheneos.org/) - GrapheneOS is an open source privacy and security focused mobile OS with Android app compatibility. Only **Google Pixel** phones are supported.

These ROMs also offer good priavcy and/or extended support for a wider range of devices. Note that these may also reduce security, increasing the attack surface of the operating system.

- [CalyxOS](https://calyxos.org/) - Privacy by Design ROM. Offers better security than LineageOS or Replicant.
- [LineageOS](https://lineageos.org/) - A free and open-source operating system for various devices, based on the Android mobile platform.
- [/e/OS](https://e.foundation/e-os) - Degoogled Android ROM by Murena that bundles microG and optional cloud services. Open source, GPL-3.0 licensed.
- [iodéOS](https://iode.tech/iodeos) - Degoogled Android ROM with a built-in network firewall that blocks ads and trackers. Open source, GPL-3.0 licensed.

#### Based on Linux
- [UBPorts](https://www.ubports.com/) - Ubuntu Touch is the touch-friendly mobile version of Ubuntu.
- [Nura](https://nura.eco/) (formerly postmarketOS) - Touch optimised and pre-configured version of Alpine Linux.
- [PureOS](https://www.pureos.net/) - Operating system developed by purism for the Librem 5.
- [Plasma Mobile](https://www.plasma-mobile.org/) - Plasma, in your pocket. Privacy-respecting, open source and secure phone ecosystem.
- [mobian](https://mobian-project.org/) - Debian for mobile.
### Smart TV
⛔ Don't use Google's Android TV, LG WebOS or any other privacy-invasive common TV OS that comes preinstalled with your TV.

✅ **Instead use**

Currently I am not aware of any privacy-respecting smartTV software. If you are aware of any, please open a Pull Request or an issue.

The following software is not an **Operating System** but comprises apps that can be used on almost any OS. These apps respect your privacy and offer features similar to those of a Smart TV. A recommended setup involves connecting a [Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) running a GNU/Linux operating system to your TV, installing tools like [KDE Connect](https://kdeconnect.kde.org/) to control media from your phone, and then adding the apps listed below:

- [Kodi](https://kodi.tv/) - It is an entertainment hub that brings all your digital media together into a beautiful and user friendly package. It is 100% free and open source, very customisable and runs on a wide variety of devices.
- [OSMC](https://osmc.tv/) - OSMC is a free and open source media center built for the people, by the people.

You can also check out [Media Streaming Platforms](https://github.com/pluja/awesome-privacy#media-streaming-platforms) section.

### PC / MacOS
⛔ **Avoid**
- MS Windows - Owned by Microsoft it is known for collecting many user data and tricking users to own a Microsoft account. If you still want and happen to use Windows 10 or 11, you can use [Win11Debloat](https://github.com/Raphire/Win11Debloat), or [this other tool](https://www.w10privacy.de/english-home/) to see and disable the tons of privacy-invasive settings of MS Windows.
- MacOS.

✅ **Instead use**
#### [GNU/Linux](https://www.linux.com/what-is-linux/) 

GNU/Linux is a family of free (as in freedom and as in free beer) and open source Operating Systems mostly developed by the community. If you don't know where to start these are good options for begginers:

- [Fedora](https://fedoraproject.org/) - Community Linux distribution sponsored by Red Hat, shipping recent open source software on a six-month cycle.
- [Mint (Cinnamon)](https://linuxmint.com/edition.php?id=305) is a beginner friendly distribution.
- [Qubes OS](https://qubes-os.org/) is a security-oriented operating system that isolates various workspaces into separate virtual machines to enhance privacy and security.
- [Tails](https://tails.net/) is a portable operating system that protects against surveillance and censorship. It always starts from the same clean state and everything you do disappears automatically when you shut down Tails.
- [Whonix](https://www.whonix.org/) is an operating system that runs inside virtual machines and forces every connection through Tor.
- [Kicksecure](https://www.kicksecure.com/) is a hardened Debian-based distribution from the Whonix developers, secure by default.
- [secureblue](https://secureblue.dev/) is a hardened image built on Fedora Atomic Desktops, with security-focused defaults and a hardened browser.

> [!TIP]
>  If you want to try it out without installing it to your computer, you can use a [Live USB Stick](https://www.fosslinux.com/274/how-to-create-linux-mint-live-usb-drive-on-windows.htm). You can also investigate [Ventoy](https://www.ventoy.net) to easily download and test linux distros with a USB stick.

> [!TIP]
> If you want to install Linux but keep your current operating System, you can set up [dual boot](https://averagelinuxuser.com/dualboot-linux-windows/).

> [!NOTE]
> Not all Linux distributions are free (as in freedom), free (as in free beer) or respect user privacy. There are tons of GNU/Linux distributions and you should investigate a bit before jumping into one of them!

#### Other OS:

- [AtlasOS](https://atlasos.net/) - An open-source modification of Windows 10, designed to optimize performance, and latency. Atlas removes all types of tracking embedded within Windows and implements numerous group policies to minimize data collection.
- [ReactOS](https://reactos.org/) - ReactOS is an operating system able to run Windows software, Windows drivers that looks-like Windows and is free and open source.
- [RedoxOS](https://www.redox-os.org/) - A WIP project aiming to provide a Unix-like Operating System written in Rust.

[Back to top 🔝](#contents)

## Password Managers
⛔ **Avoid**
- LastPass
- Dashlane

✅  **Instead use**
- [AliasVault](https://www.aliasvault.com) - An open source E2EE password & alias manager with a built-in email alias server
- [Bitwarden](https://bitwarden.com) - An open source cloud based password manager.
  - [vaultwarden](https://github.com/dani-garcia/vaultwarden/) - Unofficial Bitwarden compatible self-hosted server, formerly known as bitwarden_rs.
- [CarryPass](https://carrypass.net) - Zero-knowledge PWA password manager with deterministic generation, encrypted vaults, and team collaboration. ([Source](https://github.com/racz-zoltan/racz-zoltan.github.io)) `MIT`
- [KeepassXC](https://keepassxc.org/) - Securely store passwords using industry standard encryption, no sync just storage.
  - [KeepassDX](https://www.keepassdx.com/) for Android.
  - [Strongbox](https://strongboxsafe.com/) for iOS.
  - [KeeWeb](https://keeweb.info/) for Web and other platforms.
- [LessPass](https://www.lesspass.com) - Stateless password manager. Remember one master password to access your passwords. No sync needed.
- [Padloc](https://padloc.app/) - The last password manager you'll ever want to use.
- [Passbolt](https://www.passbolt.com) - An open source password manager designed for team collaboration.
- [Passky](https://passky.org) - Simple, modern, lightweight, open-source and secure password manager.
- [Proton Pass](https://proton.me/pass) - Open-source and encrypted password manager by Proton.

## Pastebin and Secret Sharing

These tools are useful when sharing secrets, code snippets or any other kind of text with others in a private way.

- [crypt.fyi](https://www.crypt.fyi) - Ephemeral zero-knowledge sensitive data sharing platform with web, cli, and chrome-extension clients
- [NoPaste](https://github.com/bokub/nopaste) - Open Source pastebin alternative that works with no database, and no back-end code. Instead, the data is compressed and stored entirely in the link that you share, nowhere else.
- [PrivateBin](https://github.com/PrivateBin/PrivateBin) - A minimalist, open source online pastebin where the server has zero knowledge of pasted data. Data is encrypted/decrypted in the browser using 256 bits AES.
- [Yopass](https://github.com/jhaals/yopass) - Secure sharing of secrets, passwords and files.
- [scrt.link](https://scrt.link) - Share a secret. End-to-end encrypted. Ephemeral. Open-source.
- [dele-to](https://dele.to) - Open Source. Modern app to share sensitive credentials and secrets securely with client-side AES-256 encryption, zero-knowledge architecture, and automatic self-destruction.

[Back to top 🔝](#contents)

## Payments
⛔ **Avoid**
- Visa / Mastercard
- PayPal [![](https://shields.tosdr.org/en_230.svg)](https://tosdr.org/en/service/230)
- WeChat
- _insertBigTechHere_Pay
- Bank payments (wire, SEPA, etc)

✅  **Instead use**
- [Monero](https://www.getmonero.org/) - Monero is cash for a connected world. It's fast, private, untraceable and secure.
- Cash - Use person-to-person payments using physical notes and coins.

> [!WARNING]
> [Bitcoin](https://bitcoin.org) is not anonymous nor private. Bitcoin is traceable, transparent and pseudonymous. For a basic introduction, [see aantonop's video](https://yewtu.be/watch?v=JN1Bowgcle8). More advanced users can watch this [Bitcoin privacy series](https://yewtu.be/watch?v=QEnL5k0R08w).

### Wallets

- [Sparrow Wallet](https://www.sparrowwallet.com/) - An open source, cross-platform desktop wallet that gives you many privacy-preserving spending tools.
- [Wasabi Wallet](https://www.wasabiwallet.io/) - An open source, non-custodial, privacy-focused Bitcoin wallet available on Desktop.
- [Cake Wallet](https://cakewallet.com) - Open source, non-custodial wallet for Monero, Bitcoin, and other coins on mobile and desktop. MIT licensed.
- [Feather Wallet](https://featherwallet.org/) - Lightweight open source Monero desktop wallet with built-in Tor and coin control. BSD-3 licensed.

### Payment Processors

- [BTCPay Server](https://btcpayserver.org) - Self-hosted, non-custodial cryptocurrency payment processor for merchants, as an alternative to PayPal or BitPay. MIT licensed.

### Where to use Monero and Bitcoin

- [kycnot.me](https://kycnot.me/) - Directory of KYC-free exchanges, payment processors, and other privacy services.

[Back to top 🔝](#contents)

## Personal Finances

### Full Featured Financial Management

- [Actual](https://actualbudget.org) - Super fast and privacy-focused app for managing your finances.
- [Firefly III](https://www.firefly-iii.org/) - A free and open source personal finance manager.
- [GnuCash](https://gnucash.org/) - GnuCash is personal and small-business financial-accounting software, freely licensed under the GNU GPL and available for GNU/Linux, BSD, Solaris, Mac OS X and Microsoft Windows.
- [Sure](https://github.com/we-promise/sure) - Open Source and secure OS for your personal finances. Community maintained fork of the archived [Maybe](https://github.com/maybe-finance/maybe) project.
- [ezBookkeeping](https://ezbookkeeping.mayswind.net/) - A lightweight, self-hosted personal finance app with a user-friendly interface and powerful bookkeeping features.

### Budget Management
- [ProExpense](https://github.com/arduia/ProExpense/) - A simple free finance note to safely record daily expenses.
- [My Expenses](https://github.com/mtotschnig/MyExpenses) - Featureful GPL licenced Android Expense Tracking App.
- [Wallos](https://wallosapp.com) - Self-hosted tracker for subscriptions and recurring expenses, with reminders and spending statistics. Open source, GPL-3.0 licensed.

### Shared Expenses

⛔ **Avoid**

- Tricount - App size is massive (~200MB) and contains many trackers from Facebook, Google and Huawei.
- Splitwise - App contains trackers from Google and Amazon.

✅  **Instead use**

- [Spliit](https://github.com/spliit-app/spliit#readme) - Share Expenses with Friends & Family. No ads. No account. Open Source. Forever Free.
- [SplitPro](https://github.com/oss-apps/split-pro#readme) - [Website](https://splitpro.app) - Split Expenses with your friends for free. An open source alternative to SplitWise.
- [IHateMoney](https://ihatemoney.org/) - Manage your shared expenses, easily. Lacks unequal splitting.
  - [MoneyBuster](https://gitlab.com/eneiluj/moneybuster/) - Android client for Nextcloud Cospend and IHateMoney servers.
- [Nextcloud Cospend](https://apps.nextcloud.com/apps/cospend) - A group/shared budget manager inspired by the great IHateMoney.
  - [MoneyBuster](https://gitlab.com/eneiluj/moneybuster/) - Android client for Nextcloud Cospend and IHateMoney servers.

### Others 

- [Debitum](https://github.com/Marmo/debitum) [💀](#icons) - With Debitum you can track all kinds of IOUs, be it money or lent items.

### Portfolio trackers

- [Ghostfolio](https://github.com/ghostfolio/ghostfolio#readme) - open source wealth management software built with web technology.
- [PortfolioPerformance](https://www.portfolio-performance.info/en/) - An open source tool to calculate the overall performance of an investment portfolio-
- [Rotki](https://github.com/rotki/rotki) - An awesome portfolio tracking, analytics, accounting and tax reporting application that protects your privacy.

## Photo Editing and Management
⛔ **Avoid**
- [![](https://shields.tosdr.org/en_417.svg)](https://tosdr.org/en/service/417)
- VSCO

✅  **Instead use**
#### Web
- [miniPaint](https://github.com/viliusle/miniPaint) - Open Source alternative to Photopea. miniPaint operates directly in the browser. Nothing will be sent to any server. Everything stays in your browser.

#### Desktop
- [GIMP](https://www.gimp.org/) - The Free & Open Source Image Editor.
- [Krita](https://github.com/KDE/krita) - Krita is a free and open source digital painting application
- [Czkawka](https://github.com/qarmin/czkawka) - Multi functional app to find duplicates and similar images etc.
- [DigiKam](https://www.digikam.org/) - Awesome Professional Photo Management with the Power of Open Source.
- [Inkscape](https://inkscape.org/) - Inkscape is a free and open-source vector graphics editor used to create vector images.
- [ImageGlass](https://imageglass.org/) - ImageGlass is a lightweight software application whose purpose is to help you view images in a clean and intuitive working environment.
- [darktable](https://www.darktable.org/) - darktable is an open source photography workflow application and raw developer
- [RapidRAW](https://github.com/CyberTimon/RapidRAW) - A beautiful, non-destructive and GPU-accelerated RAW image editor built with performance in mind. Lightweight (<20MB) cross-platform alternative to Adobe Lightroom. AGPL-3.0 licensed.
- [RawTherapee](https://rawtherapee.com) - Offline open source RAW photo developer that pairs well with darktable as a Lightroom alternative. GPL-3.0 licensed.

#### Android
- [Pocket Paint](https://github.com/Catrobat/Paintroid) - The standard image manipulation app for Catroid.
- [Scrambled Exif](https://gitlab.com/juanitobananas/scrambled-exif) - Remove Exif data from pictures before sharing them.
- [ImagePipe](https://codeberg.org/Starfish/Imagepipe) - Reduces image size and removes exif-tags when sharing images on android devices.

[Back to top 🔝](#contents)

## Photo Storage
⛔ **Avoid**
- Google Photos [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
    - [Google Photos Takeout Helper](https://github.com/TheLastGimbus/GooglePhotosTakeoutHelper) [💀](#icons) - Script that organizes the Google Takeout messy archive into one big chronological folder. Use this script to get out of Google Photos :).
- Amazon Photos

✅  **Instead use**

### Self-hosted
- [Immich](https://github.com/immich-app/immich) - Self-hosted photo and video backup solution directly from your mobile phone.
- [LibrePhotos](https://github.com/LibrePhotos/librephotos) - Active [OwnPhotos](https://github.com/hooram/ownphotos) fork. Self hosted alternative to Google Photos.
- [Nextcloud](https://nextcloud.com/) - The open source self-hosted productivity platform that keeps you in control. It has a [*Photos*](https://github.com/nextcloud/photos) plugin to help you organize and visualize your photos.
- [Photoprism](https://photoprism.app) - Feature rich server-based application for browsing, organizing and sharing your personal photo collection. The most similar to Google Photos.
- [Pigallery2](http://bpatrik.github.io/pigallery2/) - A self-hosted directory-first photo gallery website.
- [Photoview](https://photoview.github.io/) - Photo gallery for self-hosted personal servers with Facial Recognition.
- [Photostructure](https://photostructure.com/) - Self-hosted photo library that makes browsing and sharing a lifetime of memories delightful.
- [Stingle Photos](https://stingle.org/) - Open source solution that provides strong security, privacy and encryption to backup your photos.
- [Ente](https://ente.com/) - End-to-end encrypted storage for photos and videos. Open source, [audited](https://ente.com/blog/cryptography-audit/) independently.

### Third-party
- [Crypt.ee](https://crypt.ee/) - A private and encrypted place for all your photos, documents, notes and more.
- [Ente](https://ente.com/) - End-to-end encrypted storage for photos and videos. Open source, [audited](https://ente.com/blog/cryptography-audit/) independently.
- [Stingle Photos](https://stingle.org/) - Open source solution that provides strong security, privacy and encryption to backup your photos.

### Local
- [DigiKam](https://www.digikam.org/) - Awesome Professional Photo Management with the Power of Open Source.
- [Photok](https://github.com/leonlatsch/Photok) - Photok is a free Photo-Safe. It stores your photos encrypted on your device and hides them from others.
- [ImageGlass](https://imageglass.org/) - ImageGlass is a lightweight software application whose purpose is to help you view images in a clean and intuitive working environment. 

[Back to top 🔝](#contents)

## Privacy Tools

This section is dedicated to some tools that may help users analyze the privacy status on their devices.

### Desktop

- [Whoami Project](https://github.com/owerdogan/whoami-project) [💀](#icons) - Whoami provides enhanced privacy, anonymity for Debian and Arch based linux distributions.
- [BusKill](https://www.buskill.in/) - BusKill is a Dead Man Switch triggered when a magnetic breakaway is tripped, severing a USB connection.
- [OpenSnitch](https://github.com/evilsocket/opensnitch) - Interactive application firewall for GNU/Linux that helps users detect, monitor, and block unwanted outbound connections.
- [MAT2](https://github.com/jvoisin/mat2) - Removes metadata from images, documents, audio and other files. Command line tool with file manager integrations.
- [Metadata Cleaner](https://gitlab.com/rmnvgr/metadata-cleaner) - Simple desktop app to view and remove file metadata, built on MAT2.
- [Mobile Verification Toolkit](https://github.com/mvt-project/mvt) - Forensic tool from Amnesty International that checks Android and iOS devices for traces of spyware such as Pegasus.

### Android

- [εxodus](https://reports.exodus-privacy.eu.org/en/) - The privacy audit platform for Android applications. Find how many trackers your apps have.
	- [ClassyShark3xodus](https://f-droid.org/en/packages/com.oF2pks.classyshark3xodus/) - Checks apk(s) for known trackers (provided by Exodus) +other warnings and specs. 
- [Plexus](https://plexus.techlore.tech/) - Remove the fear of Android app compatibility on de-Googled devices. Find if an app will work on a De-Googled device.
- [Netguard](https://netguard.me/) - A simple way to block access to the internet per application.
- [RethinkDNS + Firewall](https://github.com/celzero/rethink-app) - An open-source, no-root firewall and DNS changer, with anti-censorship capabilities for Android 6+.
- [🤖](#icons) [Orbot](https://orbot.app/) - Routes app traffic through the Tor network, system-wide as a VPN or per app. Made by the Guardian Project.

[Back to top 🔝](#contents)

## Remote Access and Control
⛔ **Avoid**
- TeamViewer
- AnyDesk

✅  **Instead use**
- [RustDesk](https://rustdesk.com/) - Open-source remote desktop client software, written in Rust. Works out of the box, full control of your data, with no concerns about security.
- [screego](https://screego.net/) - Screen sharing for developers.
- [Remmina](https://remmina.org/) - Remote access screen and file sharing to your desktop (RDP).
- [UltraVNC](https://www.uvnc.com/) - UltraVNC is a powerful, easy to use and free - remote pc access softwares - that can display the screen of another computer (via internet or network) on your own screen.
- [MeshCentral](https://meshcentral.com/) - The open source, multi-platform, self-hosted, feature packed web site for remote device management.
- [Apache Guacamole](https://guacamole.apache.org) - Clientless self-hosted remote desktop gateway that gives RDP, VNC, and SSH access from a browser. Apache-2.0 licensed.
- [Sunshine + Moonlight](https://app.lizardbyte.dev/Sunshine) - Self-hosted desktop and game streaming host (Sunshine) with matching clients (Moonlight). Open source, GPL-3.0 licensed.

[Back to top 🔝](#contents)

## Routers
⛔ **Avoid**
- Stock ISP routers and vendor firmware: closed source, slow or missing security updates, and often phone home to the vendor or ISP.

✅  **Instead use**
- [OpenWrt](https://openwrt.org/) - Open source Linux firmware that replaces the stock software on hundreds of consumer routers, with years of security updates.
- [OPNsense](https://opnsense.org/) - Open source firewall and routing platform based on FreeBSD, for dedicated hardware or a spare PC.
- [IPFire](https://www.ipfire.org/) - Hardened open source Linux firewall distribution with intrusion prevention and a web interface.

[Back to top 🔝](#contents)

## RSS Readers
⛔ **Avoid**
- Feedly
- Inoreader
- Google News

These services build a profile from everything you read. A local or self-hosted reader fetches feeds directly, so nobody sees your reading list.

✅  **Instead use**
- [FreshRSS](https://freshrss.org/) - Self-hosted feed aggregator with a web interface, multi-user support and an API for mobile apps.
- [Miniflux](https://miniflux.app/) - Minimalist self-hosted feed reader with no tracking, written in Go.
- [NetNewsWire](https://netnewswire.com/) - Open source RSS reader for macOS and iOS that works locally or syncs with self-hosted services.
- [Fluent Reader](https://github.com/yang991178/fluent-reader) - Open source desktop RSS reader for Windows, macOS and Linux.
- [NewsFlash](https://gitlab.com/news-flash/news_flash_gtk) - Open source RSS reader for Linux that works locally or with self-hosted services such as Miniflux and FreshRSS.
- [Newsboat](https://newsboat.org/) - RSS reader for the terminal.
- [🤖](#icons) [Feeder](https://github.com/spacecowboy/Feeder) - Open source RSS reader for Android that fetches feeds directly on your device, with no account.
- [🤖](#icons) [Read You](https://github.com/ReadYouApp/ReadYou) - Open source Material You RSS reader for Android, local or synced with self-hosted services.
- [🤖](#icons) [Capy Reader](https://github.com/jocmp/capyreader) - Open source RSS reader for Android, local or synced with Miniflux and FreshRSS.

[Back to top 🔝](#contents)

## Search Engines

⛔ **Avoid**
- Google [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Yahoo! [![](https://shields.tosdr.org/en_309.svg)](https://tosdr.org/en/service/309)
- Bing
- Yandex [![](https://shields.tosdr.org/en_860.svg)](https://tosdr.org/en/service/860)
- Ecosia [![](https://shields.tosdr.org/en_591.svg)](https://tosdr.org/en/service/591)

✅  **Instead use**
- [librengine](https://github.com/liameno/librengine) [💀](#icons) - Privacy Web Search Engine 
- [SearxNG](https://github.com/searxng/searxng) - Free internet metasearch engine which aggregates results from various search services and databases.  
- [DuckDuckGo](https://duckduckgo.com) - A privacy respecting search engine.
- [Brave Search](https://search.brave.com) - A privacy respecting search engine with [its own independent index](https://brave.com/search-independence/).
- [Qwant](https://www.qwant.com/) - A zero tracking search engine made and hosted in France, EU.
- [Marginalia](https://marginalia-search.com/) - Independent search engine with its own crawler and index that favors text-heavy, non-commercial pages. Self-hostable, AGPL-3.0 licensed.
- [YaCy](https://yacy.net/) - Peer-to-peer decentralized search engine where every user runs a node and shares the index. Open source, GPL-2.0 licensed.

[Back to top 🔝](#contents)

## Social Networks and Platforms

> [!NOTE]
> **The fediverse**
>
> The fediverse is a "**fed**erated" "un**iverse**" of social network platforms that are able to talk to one another through a standard and open protocol. This means that you can consume content on any network from any of these networks. You are not locked to a single provider, you are free to choose. Please [watch this video](https://framatube.org/w/9dRFC6Ya11NCVeYKn8ZhiD?start=8s) by FramaSoft that illustrates the concept very good.
>
> Ideally, we should all move to the fediverse and abandon the centralized and monopolized social networks that are now the most popular (Twitter, Reddit, Instagram...).
>
> All the apps compatible with the Fediverse (ActivityPub) are marked with a [🧩](#icons)

> [!NOTE]
> **Alternative frontends and clients**
>
> Alternative frontends are good to protect your individual privacy. You can still consume the contents of privative and privacy-harmful services with protection over your privacy and some anonymity. Even using most these alternative frontends, still, the privative services will receive requests about the content you are consuming (even not knowing it is you). This sitll harms the collective privacy and adds data to their algorithms in some ways. Only the alternative frontends (or clients) that act as a proxy will hide your real IP from the content provider. 
>
> You can use these browser extensions and apps to automatically redirect any links to privacy-respecting alternative frontends:
> - [LibRedirect](https://github.com/libredirect/browser_extension#get) - A web extension that redirects YouTube, Twitter... requests to alternative privacy friendly frontends and backends.
> - [UntrackMe](https://www.f-droid.org/en/packages/app.fedilab.nitterizeme/) - Transform Youtube, Twitter & other links to their free and open source alternatives.



### Blogging platforms (Medium)

⛔ **Avoid**:
- **Medium** - website has Google trackers and ads.
- **Blogger** - Google owned, has google trackers and ads.

✅ **Alternatives:**
- [Plume](https://github.com/Plume-org/Plume) [🧩](#icons) - Federated blogging application, thanks to ActivityPub.
- [WriteFreely](https://writefreely.org/) [🧩](#icons) - An open source platform for building a writing space on the web.

✅ **Alternative Medium frontends:**
- [Scribe](https://git.sr.ht/~edwardloveall/scribe/) - Medium alternative forntend inspired by Invidious.

### Instagram

[![](https://shields.tosdr.org/en_219.svg)](https://tosdr.org/en/service/219)

⛔ Don't use Instagram (or at least the official client). Instagram is a very privacy-invasive app with biased results and feeds based on user profiles, it is also used as a manipulation tool and has a lot of censorship going against free speech. Lastly, it has an addictive and toxic UI design.

✅ **Instead use**

**Alternatives to Instagram**
- [Pixelfed](https://pixelfed.org/) [🧩](#icons) - Decentralized, federated and Open Source alternative to Instagram with posts, videos, stories, tags, etc.

### Quora

⛔ Quora's website has ads and trackers that are used to get your data which is then sold/shared to third parties. Their [privacy policy](https://tosdr.org/en/service/314) is bad.

✅ **Quora alternative frontends (web-based):**
- [Quetre](https://github.com/zyachel/quetre) - Quetre is an alternative front-end to Quora. It enables you to see answers without ads, trackers, and other such bloat.


### YouTube

[![](https://shields.tosdr.org/en_274.svg)](https://tosdr.org/en/service/274)

⛔ Don't use YouTube (or at least the official client). YouTube is very privacy invasive, it generates a very accurate profile based on your interests. Also it is a [radicalization tool](https://www.pcmag.com/news/does-youtubes-algorithm-lead-to-radicalization) which shows [biased content to users](https://arxiv.org/pdf/1908.08313.pdf) in order to get more engagement and to get them to watch more and more content creating an [addiction](https://medium.com/dataseries/how-youtube-is-addictive-259d5c575883). It never shows you [alternative opinions](https://arxiv.org/pdf/1908.08313.pdf) to your ideology/bias. YouTube censors a lot. YouTube collects a LOT of your data: interests, free time, ideology, likes, dislikes, music taste, etc.

✅ **Instead use**
- [Peertube](https://joinpeertube.org/en/) [🧩](#icons) - A free, open and decentralized alternative to video platforms.
- [Odysee](https://odysee.com/) - Odysee is a video platform backed by the creators of lbry and uses the lbry blockchain protocol.
- [DTube](https://github.com/dtube/dtube) - A full-featured video sharing website, decentralized.

✅ **YouTube alternative frontends (web-based):**
- [Invidious](https://github.com/iv-org/invidious) - Alternative and privacy respecting YouTube frontend.
- [Piped](https://github.com/TeamPiped/Piped) - An alternative privacy-friendly YouTube frontend which is efficient by design.
- [ViewTube](https://github.com/ViewTube/viewtube) - ViewTube is an alternative privacy-friendly YouTube frontend written in Vue.js
- [Youtube-Local](https://github.com/user234683/youtube-local) - browser-based client for watching Youtube anonymously and with greater page performance.

✅ **YouTube alternative clients (apps):**
- [🤖](#icons) [NewPipe](https://newpipe.net/) - Alternative Android YouTube app. No account needed, privacy respecting, no ads.
- [🤖](#icons) [SkyTube](https://github.com/SkyTubeTeam/SkyTube) - Alternative Android YouTube app. No account needed, privacy respecting, no ads.
- [FreeTube](https://github.com/FreeTubeApp/FreeTube) - FreeTube is an open source desktop YouTube player built with privacy in mind. (Uses Local RSS API or Invidious for backend).
- [🤖](#icons) [LibreTube](https://github.com/Libre-tube/LibreTube) - An alternative frontend for YouTube, for Android using Piped.
- [Yattee](https://github.com/yattee/yattee) - Alternative YouTube frontend for iOS, tvOS and macOS built with Invidious and Piped.
- [🤖](#icons) [Clipious](https://github.com/lamarios/clipious) [💀](#icons) Invidious client for android

### TikTok

[![](https://shields.tosdr.org/en_1448.svg)](https://tosdr.org/en/service/1448)

⛔ Avoid using TikTok, it is a toxic-designed application that harms not only the user privacy but also user integrity. You can take a read on [these several posts](https://www.reddit.com/r/privacy/search?q=tiktok&restrict_sr=on&sort=top&t=all).

✅ **TikTok alternative frontends (web-based):**
- [ProxiTok](https://github.com/pablouser1/ProxiTok) - Open source alternative frontend for TikTok

### Twitter

[![](https://shields.tosdr.org/en_195.svg)](https://tosdr.org/en/service/195)

⛔ Avoid using Twitter official app / website. It tracks users and creates user profiles based on what they follow, retweet and like. Twitter harms and violates user privacy with their policies [by default](https://www.eff.org/deeplinks/2017/05/how-opt-out-twitters-new-privacy-settings). 

#### Self-hosted

- [Memos](https://github.com/usememos/memos) - An open-source, self-hosted memo hub with knowledge management and socialization.

#### Decentralized

- [Nostr](https://nostr.com/) - Open protocol that is able to create a censorship-resistant global "social" network. It doesn't rely on any trusted central server, hence it is resilient; it is based on cryptographic keys and signatures, so it is tamperproof; it does not rely on P2P techniques, therefore it works. **Note**: Nostr is a protocol, so it is capable of offering much more than a Twitter alternative.

> [!NOTE]
> **Federated social networks**: A federated social network isn't a single website like Twitter or Facebook, it's a network of thousands of communities operated by different organizations and individuals that provide a seamless social media experience.

- [Mastodon](https://joinmastodon.org/) [🧩](#icons) - Free, federated microblogging social network built on open protocols.
  - [Mastodon Apps](https://joinmastodon.org/apps) - List of Mastodon apps for Android, iOS, Web and Desktop.
- [Pleroma](https://pleroma.social/) [🧩](#icons) - Pleroma is a free, federated social networking server built on open protocols.
  - [Soapbox](https://gitlab.com/soapbox-pub/soapbox-fe) - A frontend for Pleroma with a focus on custom branding and ease of use.

#### Alternative Frontends
- [Nitter](https://github.com/zedeus/nitter/wiki/Instances) [💀](#icons) - Nitter is a free and open source alternative Twitter front-end focused on privacy.
- [Squawker](https://github.com/j-fbriere/squawker) - Open source Twitter client for Android, the maintained fork of Fritter.
- [Feetter](https://codeberg.org/pluja/Feetter) [💀](#icons) - Create, sync and manage Nitter feeds without registration from any device.

### Reddit

[![](https://shields.tosdr.org/en_194.svg)](https://tosdr.org/en/service/194)

⛔ Try to avoid using Reddit or at least avoid their official clients as they are plenty of trackers, ads and share unnecessary user data with their servers.

✅ **Reddit alternatives:**
- [Aether](https://getaether.net/) - Peer-to-peer ephemeral public communities.
- [Mbin](https://github.com/MbinOrg/mbin) [🧩](#icons) - A reddit-like content aggregator and micro-blogging platform for the fediverse; the community-maintained continuation of kbin.
- [Lemmy](https://join-lemmy.org/) [🧩](#icons) - A federated and open alternative to Reddit in Rust.

✅ **Privacy respecting Reddit clients:**
- [Redlib](https://github.com/redlib-org/redlib) - An alternative private front-end to Reddit, with its origins in Libreddit.

### Streaming Platforms (Twitch)

[![](https://shields.tosdr.org/en_200.svg)](https://tosdr.org/en/service/200)

⛔  Avoid using platforms as Twitch, Patreon, YouTube as they are very privacy-invasive with your viewers (and you!). Instead, you can try using some self-hosted platforms that do take care of everyone's privacy.

✅ **Alternatives:**
- [Owncast](https://github.com/owncast/owncast) - Take control over your live stream video by running it yourself. Streaming + chat out of the box.

✅ **Privacy respecting Twitch clients:**
- [🤖](#icons) [Twire](https://github.com/twireapp/Twire) - Open source, ad-free Twitch browser and stream player for Android.

[Back to top 🔝](#contents)

### Imgur

[![](https://shields.tosdr.org/en_325.svg)](https://tosdr.org/en/service/325)

⛔ Imgur website is plenty of bloat, gifs, cookies, javascript and trackers.

✅ **Alternatives:**
- [rimgo](https://codeberg.org/video-prize-ranch/rimgo#instances) - An alternative frontend for Imgur. Read-only, no-js, Based on rimgu and rewritten in Go.

[Back to top 🔝](#contents)

### IMDb

⛔ IMDb is owned by Amazon and its website is loaded with ads and third-party trackers.

✅ **IMDb alternative frontends:**
- [libremdb](https://libremdb.iket.me/) - Alternative privacy-respecting frontend for IMDb that removes ads and trackers. Open source and self-hostable (AGPL-3.0).

[Back to top 🔝](#contents)

### Fandom

⛔ Fandom wikis (formerly Wikia) are overloaded with ads, autoplaying video, and trackers.

✅ **Fandom alternative frontends:**
- [BreezeWiki](https://breezewiki.com/) - Alternative frontend for Fandom wikis that strips ads, video, and clutter. Open source and self-hostable.

[Back to top 🔝](#contents)

## Teamworking Tools
⛔ **Avoid**
- [![](https://shields.tosdr.org/en_206.svg)](https://tosdr.org/en/service/206)
- Google Meet [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Microsoft Teams [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- [![](https://shields.tosdr.org/en_536.svg)](https://tosdr.org/en/service/536)

✅  **Instead use**
- [Zulip](https://zulip.com/) - Chat for distributed teams.
- [Stoat](https://stoat.chat/) (formerly Revolt) - User-first chat platform built with modern web technologies.
- [Twake](https://twake.app/) - Work in a team faster. Twake covers all of your organizational needs through a single platform.
- [RocketChat](https://rocket.chat/) - Control your communication, manage your data, and have your own collaboration platform to improve team productivity.
- [Nextcloud Talk](https://nextcloud.com/talk/) - Keep conversations private with Nextcloud Talk.
- [Mattermost](https://mattermost.com/) - Open-source Slack alternative.

> [!WARNING]
> **Alternative clients/modifications of Discord:**
> Your IP and messages will still be shared and belong to Discord and they are not encrypted.\
> Also using any of these modifications/clients [violates](https://x.com/discord/status/1006178587731550208) the [Discord ToS](https://discord.com/terms) so, we are not responsible of any suspension or termination of your account **but**, this should [not happen **yet**](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-against-discord-tos).

- [See this section for Discord mods and alternative clients](https://github.com/pluja/awesome-privacy/blob/main/README.md#alternative-clientsmodifications-of-discord)

[Back to top 🔝](#contents)

## Screen recording

- [Screenity](https://screenity.io/) - A powerful privacy-friendly screen recorder and annotation tool to make better videos for work, education, and more.
- [OBS](https://obsproject.com/) - Free and open source software for video recording and live streaming.

[Back to top 🔝](#contents)

## Translation
⛔ **Avoid**
- Google Translate [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- DeepL
- Bing Translator [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

✅ **Text translation**
- [Mozilla Translate](https://mozilla.github.io/translate/) - Open Source, runs model locally in your browser.
- [Libretranslate](https://libretranslate.com/) - Open Source Machine Translation - 100% Self-Hosted. No Limits. No Ties to Proprietary Services.
- [Apertium](https://apertium.org/) - A free/open-source machine translation platform, runs offline on your computer
- [Softcatala](https://www.softcatala.org/traductor/) - Open Source Translation tool - Only Catalan/Spanish/English/French (uses apertium)
- [TranslateLocally](https://github.com/XapaJIaMnu/translateLocally) – Free/open-source neural MT, runs offline on your computer
- [Linguist](https://linguister.io) - A free and Open Source full-featured translation solution in-browser with embedded offline translator and [custom translators](https://linguister.io/docs/CustomTranslator). Full-page translation, TTS, dictionary, translation for user input and selected text on page.

✅ **Alternative Google Translate frontends**
- [Lingva](https://github.com/TheDavidDelta/lingva-translate) [💀](#icons) - Alternative front-end for Google Translate. [Demo](https://lingva.ml/).
- [Simplytranslate](https://codeberg.org/ManeraKai/simplytranslate) - Alternative front-end for Google Translate and LibreTranslate. [Demo](https://simplytranslate.org/)
- [Mozhi](https://codeberg.org/aryak/mozhi) - Alternative frontend that aggregates Google Translate, DeepL, Yandex, and other engines behind one private UI. Self-hostable, AGPL-3.0 licensed.

[Back to top 🔝](#contents)

## Uncategorized
- [Skymap](https://skymaponline.net/) - Open online planetarium program.
- [CrowdSec](https://github.com/crowdsecurity/crowdsec) - An open-source, modernized and collaborative fail2ban.
- [Hetty](https://github.com/dstotijn/hetty) - Hetty is an HTTP toolkit for security research. It aims to be an open-source alternative to Burp Suite Pro.
- [Visited](https://github.com/didvc/visited) - Locally collect browsing history over browsers.

[Back to top 🔝](#contents)

## Utilities
- [Deskreen](https://github.com/pavlobu/deskreen) - Turn any device into a secondary screen for your computer.

[Back to top 🔝](#contents)

## Version Control
⛔ **Avoid**

- **Github** - [![](https://shields.tosdr.org/en_297.svg)](https://tosdr.org/en/service/297), although the privacy policy is not very bad, it is owned by Microsoft, and it's common knowledge that it uses the code it hosts to train AI models.

✅  **Instead use**
- [Codeberg](https://codeberg.org/) -  Codeberg is a collaboration platform providing Git hosting and services for free and open source software, content and projects. 
- [Forgejo](https://forgejo.org/) - Forgejo is a self-hosted lightweight software forge.
- [GitLab](https://about.gitlab.com/) - GitLab a DevOps software package that can develop, secure, and operate software.
- [Radicle](https://radicle.dev/) - An open source, peer-to-peer code collaboration stack built on Git. Unlike centralized code hosting platforms, there is no single entity controlling the network. Repositories are replicated across peers in a decentralized manner, and users are in full control of their data and workflow.
- [Gitea](https://gitea.com) - Lightweight self-hosted Git forge and the project Forgejo was forked from. Open source, MIT licensed.

[Back to top 🔝](#contents)

## Video and Audio Conferencing
⛔ **Avoid**

- **Zoom** - [Very bad privacy policy](https://tosdr.org/en/service/2198). Apps have [Google trackers](https://reports.exodus-privacy.eu.org/en/reports/us.zoom.videomeetings/latest/). Many permissions required.
- **Skype** - [Very bad privacy policy](https://tosdr.org/en/service/244). Apps have [Google and Microsoft trackers](https://reports.exodus-privacy.eu.org/en/reports/com.skype.insiders/latest/). Way too many permissions required.
- **Google Meet** - [Very bad privacy policy](https://tosdr.org/en/service/217). Apps have [Google trackers](https://reports.exodus-privacy.eu.org/en/reports/com.google.android.apps.tachyon/latest/) embeded (as it is a Google app). Way too many permissions required.
- **Whatsapp** - [Bad privacy policy](https://tosdr.org/en/service/198). Apps have [Google trackers](https://reports.exodus-privacy.eu.org/en/reports/com.whatsapp/latest/) and most probably Facebook trackers embeded (as it is a Facebook app). Way too many permissions required.
- **Instagram** - [Very bad privacy policy](https://tosdr.org/en/service/219). Apps have [Facebook trackers](https://reports.exodus-privacy.eu.org/en/reports/com.instagram.android/latest/). Way too many permissions required.
- **Discord** - [Very bad privacy policy.](https://tosdr.org/en/service/536). Apps have [various trackers](https://reports.exodus-privacy.eu.org/en/reports/com.discord/latest/). Many permissions required.
- Clubhouse

✅  **Instead use**
- [BigBlueButton](https://bigbluebutton.org/) - BigBlueButton is a web conferencing system designed for online learning.
- [Briefing](https://github.com/holtwick/briefing/) - Secure direct video group chat. Only open technologies (such as WebRTC) are used, which work with all modern browsers.
- [Chitchatter](https://chitchatter.im/) - Secure P2P chat that is serverless, decentralized, and ephemeral. Supports text, audio, video, screen, and file sharing.
- [Jam](https://github.com/jam-systems/jam) [💀](#icons) - Jam is your own open source Clubhouse for mini conferences, friends, communities.
- [Jami](https://jami.net/) - P2P audio and video conferences.
- [Jitsi Meet](https://github.com/jitsi/jitsi-meet) - More secure, more flexible, and completely free video conferencing. If you use the official instance, you will need to login. Self-hosting is recommended.
- [Mirotalk P2P](https://p2p.mirotalk.com/) - Free WebRTC - P2P - Simple, Secure, Fast Real-Time Video Conferences Up to 4k and 60fps, compatible with all browsers and platforms.
- [Mumble](https://www.mumble.info/) - Mumble is an open source voice communication application with advanced features.
- [PeerCalls](https://github.com/peer-calls/peer-calls) - Group peer to peer video calls for everyone written in Go and TypeScript.
- [Nextcloud Talk](https://nextcloud.com/talk/) - Self-hosted video calls and chat that run inside your own Nextcloud server over WebRTC (AGPL-3.0).


##### Alternative clients/modifications of Discord:
> [!WARNING]
> Your IP and messages will still be shared and belong to Discord and they are not encrypted.\
> Also using any of these modifications/clients [violates](https://x.com/discord/status/1006178587731550208) the [Discord ToS](https://discord.com/terms) so, we are not responsible of any suspension or termination of your account **but**, this should [not happen **yet**](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-against-discord-tos).
- [OpenAsar](https://openasar.dev/) - An open-source alternative of Discord desktop's app.asar that comes with a [No Tracking](https://github.com/GooseMod/OpenAsar#readme) option that disables Discord's crash and error reporting.
- [Vencord](https://github.com/Vendicated/Vencord) - A Discord client mod that does things differently.
- [BetterDiscord](https://betterdiscord.app/) - A client modification for Discord, also you need to install a [DoNotTrack](https://betterdiscord.app/plugin/DoNotTrack) plugin to block trackers.
- [Kernel](https://github.com/kernel-mod/electron) [💀](#icons) - A super small and fast Electron client mod with the most capability, also you need to install a [Discord Utilities](https://github.com/slow/discord-utilities) package to block trackers.
- [Replugged](https://replugged.dev/) - A continuation of the deprecated client mod [Powercord](https://powercord.dev).
- [WebCord](https://github.com/SpacingBat3/WebCord) - A Discord and Fosscord API-less client made with the Electron.
- [🤖](#icons) [Aliucord](https://github.com/Aliucord/Aliucord) - A modification for the Android Discord app that fully [disables the Discord Tracking](https://github.com/Aliucord/Aliucord/blob/main/Aliucord/src/main/java/com/aliucord/coreplugins/NoTrack.java).
- [Vesktop](https://vesktop.dev/) - Standalone desktop client for Discord that blocks its telemetry and ships with Vencord built in. Open source, GPL-3.0 licensed.

[Back to top 🔝](#contents)

## Video Editing
⛔ **Avoid**
- [![](https://shields.tosdr.org/en_417.svg)](https://tosdr.org/en/service/417)
- Sony Vegas
- DaVinci Resolve

Such programs come filled with trackers and telemetry. You can get a full list of reasons of why you should **not** use Adobe [here](https://www.gnu.org/proprietary/malware-adobe.html). Almost the same apply for many privative editors.

✅  **Instead use**

- [kdenlive](https://kdenlive.org/) - Open source video editor. Free and easy to use for any purpose, forever.
- [LosslessCut](https://github.com/mifi/lossless-cut) - LosslessCut aims to be the ultimate cross platform FFmpeg GUI for extremely fast and lossless operations on video, audio, subtitle and other related media files.
- [Olive Video Editor](https://olivevideoeditor.org/) - Free open-source advanced non-linear video editor currently in Alpha state.
- [OpenCut](https://github.com/OpenCut-app/OpenCut) - [beta] A free, open-source video editor for web, desktop, and mobile.
- [Shotcut](https://www.shotcut.org/) - Shotcut is a free, open source and simple cross-platform video editor.

[Back to top 🔝](#contents)

## VPNs

⛔ **Avoid**

- [Free VPNs](https://techcrunch.com/2020/09/24/free-vpn-bad-for-privacy/) from Google Play or any appstore. These services are not free as they will suck your connections' data, keep logs and profile you to [sell your data to advertisers](https://thenextweb.com/news/be-cautious-free-vpns-are-selling-your-data-to-3rd-parties). If a government wants to track someone, such apps will be the first ones to fall.

- Closed source VPN apps such as Surfshark or NordVPN may be less trustworthy as nobody can be sure how they handle your data. Also, paying with Credit Card will get you identified on the payment. Furthermore, if you need to give your email it will also identify you if this same email has been used in other services.


✅  **Instead use**

Here are some open source and truly private (no personal data and/or credit card needed) options:

- [IVPN](https://ivpn.net) - No-logs VPN with open source apps, no-email signup, and cash, Monero, or Bitcoin payment.
- [nadanada](https://nadanada.me) (formerly LNVPN) - Pay-per-use WireGuard VPN with no account, paid by Lightning Network or other cryptocurrency.
- [Mullvad VPN](https://mullvad.net) - No-logs VPN with open source apps, anonymous numbered accounts, and cash or cryptocurrency payment.
- [Proton VPN](https://protonvpn.com) - Swiss no-logs VPN with open source, audited apps on every platform and a no-data-cap free tier.
- [SPN](https://safing.io/) - Open source, system-wide network that routes each app connection through its own path across multiple nodes, giving per-connection IP separation instead of a single shared exit. Built into the Safing Portmaster firewall for Windows and Linux.
- [Amnezia VPN](https://amnezia.org) - Self-hosted, censorship-resistant VPN that you deploy on your own server, with audited open source apps (GPL-3.0).
- [Find more at kycnot.me (VPN Category)](https://kycnot.me/?categories=vpn) - KYC-free VPN providers.

[Back to top 🔝](#contents)

## Web Browser

⛔ **Avoid**

- **Google Chrome** - Owned by google and built upon the open-source Chromium project (also Google-owned). It comes with many privacy-invasive features, it is connected to your Google account most times. It is under [Google's privacy policy](https://tosdr.org/en/service/217) which is known to be very bad. Google is willing to enforce the [Manifest v3](https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening) which is outright harmful to privacy efforts.
- **Microsoft Edge** - It's a Microsoft-themed version of Chromium with Microsoft trackers instead of Google ones. Under [Microsoft's privacy policy](https://tosdr.org/en/service/244), which is also very bad. If you still want to use it, you can [follow this guide](https://anonymousplanet.net/guide/#hardening-edge) to harden it a bit.
- **Opera** - Opera was [acquired by a consortium of Chinese investors](https://en.wikipedia.org/wiki/Opera_(web_browser)#Acquisition_by_Chinese_consortium). The app has [many trackers](https://reports.exodus-privacy.eu.org/de/reports/com.opera.browser/latest/).

✅  **Instead use**

#### Android / iOS
- [Brave](https://brave.com/) - Android/iOS. Brave offers a pretty good out-of-the-box set of privacy and tracker protections.
- [Firefox](https://www.firefox.com/en-US/mobile/) - Android/iOS
    - [🤖](#icons) [IronFox](https://gitlab.com/ironfox-oss/IronFox) - Mull browser fork. A hardened fork of Firefox for Android, with proprietary blobs removed.
- [🤖](#icons) [Vanadium](https://vanadium.app/) - Privacy and security enhanced releases of Chromium by GrapheneOS.
- [🤖](#icons) [Privacy Browser](https://www.stoutner.com/privacy-browser/)
- [Tor Browser](https://www.torproject.org/) - iOS/Android. Defend yourself against tracking and surveillance and circumvent censorship.
- [Cromite](https://github.com/uazo/cromite) - Cromite is a Chromium fork based on Bromite with built-in support for ad blocking and an eye for privacy.

#### Desktop
- [Ungoogled Chromium](https://github.com/ungoogled-software/ungoogled-chromium) - A lightweight approach to removing Google web service dependency. Ungoogled-chromium is Google Chromium, sans dependency on Google web services.
- [Brave](https://brave.com/) - Brave offers a pretty good out-of-the-box set of privacy and tracker protections.
- [Firefox](https://www.firefox.com/en-US/) - Open Source, independent browser. It needs some [hardening and tweaking](https://anonymousplanet.net/guide/#hardening-firefox) to achieve great privacy.
  - [LibreWolf](https://librewolf.net/) - Privacy-focused Firefox fork.
- [Tor Browser](https://www.torproject.org/) - Hardened Firefox that routes traffic through the Tor network to resist tracking, surveillance, and censorship.
- [Mullvad Browser](https://mullvad.net/en/browser/) - Browser with the privacy and security implications of the Tor Browser, without the use of the Tor network.
- [Zen Browser](https://zen-browser.app/) - Firefox-based browser with enhanced tracking protection on by default and a focus on calm, uncluttered browsing. MPL-2.0 licensed.
- [Floorp](https://floorp.app/) - Firefox fork with telemetry disabled and extra customization, built with privacy in mind. Open source, MPL-2.0 licensed.

> [!TIP]
> It may be interesting to learn what you can do to harden your browser. You can follow this [Hitchhiker’s Guide to Online Anonymity](https://anonymousplanet.net/guide/#hardening-browsers) section to do it. Please, if you don't understand what you are doing, don't do it as you may be causing more harm than good to your privacy.

[Back to top 🔝](#contents)

### Browser Addons

#### Anti-tracking
Please read about what the addon does before installing. If you don't understand what you are doing you could end up damaging your privacy. Also, too many addons can slow down your browsing experience.

- [uBlock Origin](https://ublockorigin.com/) - Free, open-source ad content blocker. Easy on CPU and memory.
	- [Read the extension docs](https://github.com/gorhill/uBlock/wiki/Blocking-mode) and pick one of the recommended modes to increase your privacy.
	- Go to settings > filters list > annoyances, turn on easylist-cookies. This will avoid you the annoying Cookie popups.
- [LibRedirect](https://github.com/libredirect/browser_extension) - A simple web extension that redirects Twitter, YouTube, Google Maps and many more requests to privacy friendly alternatives. Former Privacy Redirect is no longer maintained, LibRedirect is a maintained fork.
- [Privacy Badger](https://privacybadger.org/) - Browser extension from the EFF that learns to block trackers as you browse. Open source, GPL-3.0 licensed.
- [ClearURLs](https://clearurls.xyz/) - Browser extension that automatically strips tracking parameters from links and URLs. Open source, LGPL-3.0 licensed.

#### Useful Tools
- [Single File](https://github.com/gildas-lormeau/SingleFile) - Save a faithful copy of an entire web page in a single HTML file so you can use it offline.

### Browser Sync
- [xBrowserSync](https://www.xbrowsersync.org/) - Browser syncing as it should be: secure, anonymous and free!

[Back to top 🔝](#contents)

## Whistleblowing

✅  **Instead use**
- [GlobaLeaks](https://www.globaleaks.org/) - Self-hostable whistleblowing platform for organisations, newsrooms and activists, replacing hosted reporting portals. Open source (AGPL-3.0).
- [SecureDrop](https://securedrop.org/) - Self-hosted submission system that lets newsrooms receive documents from anonymous sources over Tor, replacing email and cloud uploads. Open source (AGPL-3.0).

[Back to top 🔝](#contents)

## Privacy vs Security vs Anonymity

Anonymity, Privacy, and Security are often used interchangeably, but they actually represent distinct concepts. It is important to understand the differences between them.

- Privacy is about regulating who has access to your personal information, being aware of the data that is being collected about you, and having the ability to decide who can access it and how. In short, privacy involves controlling your personal information.

- Security refers to safeguarding your personal information from unauthorized access or theft. It involves ensuring that your data is protected and stored in a secure manner, making it difficult for malicious actors to access it.

- Anonymity is about ensuring that your actions cannot be traced back to you. This means that even if someone discovers what you are doing, they will not be able to identify you as the source.

It is important to note that privacy and security are not necessarily interdependent. For instance, Google systems are secure and unlikely to be hacked, but Google still has access to your personal data and makes use of it. 

Privacy and anonymity are also not necessarily linked, services like Signal offer high levels of privacy since they do not collect any data about what you say, who you talk to or how you use the app, but they may not be anonymous since you still need to register using your phone number (which is in many cases linked to your identity).

Finally, there are services that may offer all three: anonymity, privacy, and security. The primary focus of this list is to provide alternatives that prioritize privacy. These alternatives give you control over your data and do not collect or sell it.

[Back to top 🔝](#contents)

## Icons

| Icon | Meaning |
|-------|---------|
| 💀    | Caution: The development of this service seems to be inactive for a long time. Maybe the project is abandoned. Investigate before use. |
| ♻️    | The software is a fork: someone has made a copy of the original project (a fork) and started developing it further independently. |
| 🧩    | The software uses ActivityPub, a decentralized social networking protocol. |
| 🤖    | Android Only. |

[Back to top 🔝](#contents)
