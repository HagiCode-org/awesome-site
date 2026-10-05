# Awesome C++ [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/fffaraz/awesome-cpp/)
Une sélection de frameworks, bibliothèques, ressources et autres merveilles pour C++ (ou C). Inspirée notamment par awesome-....

- [Awesome C++  ](#awesome-c--)
	- [Bibliothèques standard](#standard-libraries)
	- [Frameworks](#frameworks)
	- [Intelligence artificielle](#artificial-intelligence)
	- [Boucle d’événements asynchrone](#asynchronous-event-loop)
	- [Audio](#audio)
	- [Biologie](#biology)
	- [BitTorrent](#bittorrent)
	- [Chimie](#chemistry)
	- [CLI](#cli)
	- [Compression](#compression)
	- [Concurrence](#concurrency)
	- [Configuration](#configuration)
	- [Conteneurs](#containers)
	- [Cryptographie](#cryptography)
	- [CSV](#csv)
	- [Bases de données](#database)
	- [Visualisation des données](#data-visualization)
	- [Débogage](#debug)
	- [Documentation](#documentation)
	- [DSP](#dsp)
	- [Polices](#font)
	- [Moteurs de jeu](#game-engine)
	- [Graphes](#graph)
	- [GUI](#gui)
	- [Graphisme](#graphics)
	- [Traitement d’images](#image-processing)
	- [Internationalisation](#internationalization)
	- [Communication interprocessus](#inter-process-communication)
	- [JSON](#json)
	- [Journalisation](#logging)
	- [Machine Learning](#machine-learning)
	- [Mathématiques](#math)
	- [Allocation mémoire](#memory-allocation)
	- [Multimédia](#multimedia)
	- [Réseaux](#networking)
	- [Office Open XML](#office-open-xml)
	- [PDF](#pdf)
	- [Physique](#physics)
	- [Réflexion](#reflection)
	- [Expressions régulières](#regular-expression)
	- [Robotique](#robotics)
	- [Calcul scientifique](#scientific-computing)
	- [Scripting](#scripting)
	- [Sérialisation](#serialization)
	- [Port série](#serial-port)
	- [Tri](#sorting)
	- [Video](#video)
	- [Machines virtuelles](#virtual-machines)
	- [Frameworks d’applications web](#web-application-framework)
	- [XML](#xml)
	- [Yaml](#yaml)
	- [Divers](#miscellaneous)
- [Logiciels](#software)
	- [Compilateurs](#compiler)
	- [Compilateurs en ligne](#online-compiler)
	- [Débogueurs](#debugger)
	- [Environnements de développement intégrés](#integrated-development-environment)
	- [Systèmes de compilation](#build-systems)
	- [Analyse statique du code](#static-code-analysis)
	- [Outils de style de code](#coding-style-tools)
- [Ressources](#resources)
	- [Conception d’API](#api-design)
	- [Articles](#articles)
	- [Livres](#books)
	- [Normes de codage](#coding-standards)
	- [Style de code](#coding-style)
	- [Podcasts](#podcasts)
	- [Conférences](#talks)
	- [Vidéos](#videos)
	- [Sites web](#websites)
	- [Weblogs](#weblogs)
	- [Autres projets remarquables](#other-awesome-projects)
- [Autres listes remarquables](#other-awesome-lists)
- [Emplois](#jobs)
- [Sponsors](#sponsors)
- [Contribuer](#contributing)
			- [*Si vous remarquez un projet ou un lien qui n’est plus maintenu ou n’a pas sa place ici, veuillez proposer une pull request pour améliorer ce document. Merci !*](#if-you-see-a-project-or-link-here-that-is-no-longer-maintained-or-is-not-a-good-fit-please-submit-a-pull-request-to-improve-this-document-thank-you)

## Bibliothèques standard
*Bibliothèque standard C++, y compris les conteneurs, algorithmes, composants fonctionnels de la STL, etc.*

* [C++ Standard Library](https://en.wikipedia.org/wiki/C%2B%2B_Standard_Library) - Ensemble de classes et de fonctions écrites dans le langage de base et faisant partie intégrante de la norme ISO C++.
* [Standard Template Library](https://en.wikipedia.org/wiki/Standard_Template_Library) - La bibliothèque standard de modèles (STL).
* [C POSIX library](https://en.wikipedia.org/wiki/C_POSIX_library) - Spécification d’une bibliothèque standard C pour les systèmes POSIX.
* [ISO C++ Standards Committee](https://github.com/cplusplus) - ISO/IEC JTC1/SC22/WG21, le comité de normalisation du C++. [site web](https://www.open-std.org/JTC1/SC22/WG21/)
* [The GNU C Library](https://www.gnu.org/software/libc/manual) - Ce manuel explique comment utiliser les fonctionnalités de la bibliothèque GNU C.

## Frameworks
*Frameworks et bibliothèques génériques en C++.*

* [abseil-cpp](https://github.com/abseil/abseil-cpp) - Bibliothèques C++ généralistes d’Abseil. [Apache2]
* [Apache C++ Standard Library](https://stdcxx.apache.org/) - STDCXX, un ensemble d’algorithmes, de conteneurs, d’itérateurs et d’autres composants fondamentaux. [retired] [Apache2]
* [APR](https://apr.apache.org/) - Apache Portable Runtime, une bibliothèque de fonctions utilitaires multiplateformes. [Apache2]
* [ASL](https://stlab.adobe.com/) - Les Adobe Source Libraries fournissent des bibliothèques de code source C++ portables et évaluées par les pairs. [MIT]
* [AUI](https://github.com/aui-framework/aui) - Boîte à outils d’interface utilisateur déclarative pour C++20. [MPL2]
* [Boost](https://github.com/boostorg) :zap: - Une vaste collection de bibliothèques C++ génériques. [Boost] [site web](https://www.boost.org)
* [BDE](https://github.com/bloomberg/bde) - Environnement de développement BDE de Bloomberg Labs. [Apache2]
* [C++ Workflow](https://github.com/sogou/workflow) :zap: - Moteur de calcul parallèle et de réseau asynchrone en C++. [Apache2]
* [CGraph](https://github.com/ChunelFeng/CGraph) - Framework DAG multiplateforme en C++, sans dépendance tierce. [MIT]
* [Cinder](https://libcinder.org/) - Bibliothèque libre et open source, développée par la communauté pour la programmation créative de qualité professionnelle. [BSD]
* [Coost](https://github.com/idealvin/coost) - Bibliothèque C++ légère et sans dépendances, avec des coroutines de style Go, la journalisation, la configuration et d’autres utilitaires. [MIT]
* [Cxxomfort](https://ryan.gulix.cl/fossil.cgi/cxxomfort/) - Petite bibliothèque ne contenant que des fichiers d’en-tête, qui rétroporte diverses fonctionnalités des normes C++ récentes vers C++03 et les versions ultérieures. [MIT]
* [Dlib](https://github.com/davisking/dlib) :zap: - Boîte à outils pour créer des applications C++ réelles d’apprentissage automatique et d’analyse de données. [Boost] [site web](https://dlib.net/)
* [EASTL](https://github.com/electronicarts/EASTL) - Bibliothèque standard de modèles d’Electronic Arts. [BSD]
* [ETL](https://github.com/ETLCPP/etl) - Bibliothèque de modèles pour systèmes embarqués. [MIT]
* [ffead-cpp](https://github.com/sumeetchhetri/ffead-cpp) - Framework de développement d’applications d’entreprise. [Apache2]
* [Folly](https://github.com/facebook/folly) - Bibliothèque C++ open source développée et utilisée chez Facebook. [Apache2]
* [FunctionalPlus](https://github.com/Dobiasd/FunctionalPlus) - Bibliothèque de programmation fonctionnelle en C++. Écrivez du code C++ concis et lisible. [MIT]
* [GLib](https://wiki.gnome.org/Projects/GLib) - GLib fournit les composants fondamentaux nécessaires aux bibliothèques et applications écrites en C. [LGPL]
* [itlib](https://github.com/iboB/itlib) - Collection de bibliothèques C++ à en-tête unique, semblables à celles de std. [MIT]
* [JUCE](https://github.com/julianstorer/JUCE) - Bibliothèque de classes C++ complète pour développer des logiciels multiplateformes. [Module principal : ISC, autres : GPL2/GPL3/propriétaire] [site web](https://www.juce.com/)
* [Kigs framework](https://github.com/Kigs-framework/kigs) - Framework RAD C++ modulaire, polyvalent, multiplateforme, libre et open source. [MIT] [site web](https://kigs-framework.org/)
* [libPhenom](https://github.com/facebook/libphenom) - Framework de gestion d’événements pour créer des systèmes C hautes performances et hautement évolutifs. [Apache2]
* [LibSourcey](https://github.com/sourcey/libsourcey) - Entrées-sorties événementielles en C++11 pour la diffusion vidéo en temps réel et les applications réseau hautes performances. [LGPL]
* [LibU](https://github.com/koanlogic/libu) - Bibliothèque utilitaire multiplateforme écrite en C. [BSD]
* [libxutils](https://github.com/kala13x/libxutils) - Bibliothèque C multiplateforme, simple et puissante, fournissant des structures de données, des algorithmes et bien plus encore. [MIT]
* [Loki](https://loki-lib.sourceforge.net/) - Bibliothèque de conception C++ proposant des implémentations flexibles de motifs de conception et d’idiomes courants. [MIT]
* [micron.cpp](https://github.com/rfgplk/micron.cpp) - Réimplémentation et refonte entièrement en C++ de libc et de la bibliothèque standard. [Boost/MIT]
* [MiLi](https://github.com/MariadeAnton/MiLi) - Bibliothèque C++ minimale, uniquement composée de fichiers d’en-tête. [Boost]
* [OpenFrameworks](https://github.com/openframeworks/openFrameworks) - Boîte à outils open source multiplateforme pour la programmation créative en C++. [MIT] [site web](https://www.openframeworks.cc/)
* [PhotonLibOS](https://github.com/alibaba/PhotonLibOS) - Framework C++ complet comprenant des threads efficaces en espace utilisateur (coroutines avec vol de travail), les E/S, le réseau, RPC, HTTP, etc., largement utilisé chez Alibaba. Compatible avec C++ 14/17/20/23, Linux, macOS, x86-64, ARM64, gcc et clang. [Apache2] [site web](https://photonlibos.github.io/)
* [Qt](https://github.com/qt) :zap: - Framework multiplateforme pour les applications et les interfaces utilisateur. [GPL/LGPL/propriétaire] [site web](https://www.qt.io)
* [Reason](https://code.google.com/p/reason/) - Framework multiplateforme conçu pour offrir la simplicité d’utilisation de Java, .Net ou Python aux développeurs qui ont besoin des performances et de la puissance de C++. [GPL2]
* [ROOT](https://root.cern.ch/) - Ensemble de frameworks orientés objet fournissant toutes les fonctionnalités nécessaires pour traiter et analyser très efficacement de grandes quantités de données. Utilisé au CERN. [LGPL]
* [rpp](https://github.com/TheNumbat/rpp) - Remplacement minimal de la STL en C++20, inspiré de Rust. [MIT]
* [SaneCppLibraries](https://github.com/Pagghiu/SaneCppLibraries) - Ensemble de bibliothèques d’abstraction de plateforme C++ pour macOS, Windows et Linux. [MIT] [site web](https://pagghiu.github.io/SaneCppLibraries/)
* [Seastar](https://github.com/scylladb/seastar) - Framework C++ open source avancé destiné aux applications serveur hautes performances sur matériel moderne. [Licence Apache 2.0] [seastar.io](https://seastar.io/)
* [sfl library](https://github.com/slavenf/sfl-library) - Bibliothèque C++11 à en-tête unique fournissant plusieurs conteneurs nouveaux ou moins connus, dont certains utilisables dans des expressions constantes C++20. [zlib]
* [Siv3D](https://github.com/Siv3D/OpenSiv3D) - Siv3D (OpenSiv3D) est un framework C++20 de programmation créative (jeux 2D/3D, art multimédia, visualisations et simulateurs). [MIT] [site web](https://siv3d.github.io/)
* [STLport](https://www.stlport.org/) - Implémentation exemplaire de la STL. [Libre]
* [STXXL](https://stxxl.sourceforge.net/) - Bibliothèque standard de modèles pour les ensembles de données de très grande taille. [Boost]
* [tbox](https://github.com/tboox/tbox) - Bibliothèque C multiplateforme semblable à GLib. [Apache2] [site web](https://tboox.org/)
* [Ultimate++](https://www.ultimatepp.org/) - Framework C++ multiplateforme de développement rapide d’applications. [BSD]
* [Windows Template Library](https://sourceforge.net/projects/wtl/) - Bibliothèque C++ pour le développement d’applications Windows et de composants d’interface utilisateur. [Public]
* [WUI](https://github.com/intent-garden/wui) - WUI (Window User Interface Library) est une bibliothèque multiplateforme pour créer des interfaces graphiques en C++17+. [Boost] [site web](https://libwui.org)
* [xtd](https://github.com/gammasoft71/xtd) - Framework C++20 moderne pour créer des applications console (CLI), des formulaires (GUI) et des tests unitaires (xUnit) sous Windows, macOS, Linux, iOS, Android, FreeBSD et Haiku. [MIT]
* [Yomm2](https://github.com/jll63/yomm2) - Méthodes multiples rapides, orthogonales et ouvertes. Remplace [Yomm11](https://github.com/jll63/yomm11). [Boost]
* [YUP!](https://github.com/kunitoki/yup) - Framework moderne optimisé pour l’audio en temps réel et les logiciels créatifs exploitant nativement le GPU. [ISC]

## Intelligence artificielle

* [ANNetGPGPU](https://github.com/ANNetGPGPU/ANNetGPGPU) - Bibliothèque de réseaux neuronaux artificiels s’appuyant sur le GPU (CUDA). [LGPL]
* [btsk](https://github.com/aigamedev/btsk) - Kit de démarrage pour les arbres de comportement de jeu. [zlib]
* [cpp-mcp](https://github.com/hkr04/cpp-mcp) - SDK léger du MCP (Model Context Protocol) en C++. [MIT]
* [Evolving Objects](https://eodev.sourceforge.net/) - Bibliothèque de calcul évolutionnaire à base de modèles, en ANSI-C++, qui permet d’écrire très rapidement ses propres algorithmes d’optimisation stochastique. [LGPL]
* [fastmcpp](https://github.com/0xeb/fastmcpp) - Portage C++ de la bibliothèque Python fastmcp. [Apache2]
* [frugally-deep](https://github.com/Dobiasd/frugally-deep) - Bibliothèque à en-tête unique pour utiliser des modèles Keras en C++. [MIT]
* [Genann](https://github.com/codeplea/genann) - Bibliothèque simple de réseaux neuronaux en C. [zlib]
* [MXNet](https://github.com/apache/incubator-mxnet) - Apprentissage profond distribué et mobile, léger, portable et flexible, avec un planificateur dynamique de dépendances de flux de données tenant compte des mutations ; pour Python, R, Julia, Scala, Go, JavaScript et plus encore. [site web](https://mxnet.apache.org)
* [PyTorch](https://github.com/pytorch/pytorch) - Tenseurs et réseaux neuronaux dynamiques en Python, avec une forte accélération GPU. [site web](https://pytorch.org)
* [flashlight](https://github.com/flashlight/flashlight) - Bibliothèque d’apprentissage automatique rapide et flexible, entièrement écrite en C++. [BSD]
* [Recast/Detour](https://github.com/recastnavigation/recastnavigation) - Générateur de maillages de navigation (3D) et recherche de chemin, principalement pour les jeux. [zlib]
* [TensorFlow](https://github.com/tensorflow/tensorflow) - Bibliothèque logicielle open source de calcul numérique au moyen de graphes de flux de données. [Apache]
* [Txeo](https://github.com/rdabra/txeo) - Wrapper moderne de TensorFlow pour C++. [Apache]
* [oneDNN](https://github.com/oneapi-src/oneDNN) - Bibliothèque de performances multiplateforme open source pour les applications d’apprentissage profond. [Apache] [site web](https://01.org/onednn)
* [CNTK](https://github.com/Microsoft/CNTK) - Microsoft Cognitive Toolkit (CNTK), boîte à outils open source d’apprentissage profond. [Boost]
* [tiny-dnn](https://github.com/tiny-dnn/tiny-dnn) - Framework d’apprentissage profond C++11 sans dépendances, uniquement composé de fichiers d’en-tête. [BSD]
* [Veles](https://github.com/Samsung/veles) - Plateforme distribuée pour développer rapidement des applications d’apprentissage profond. [Apache]
* [Kaldi](https://github.com/kaldi-asr/kaldi) - Boîte à outils de reconnaissance vocale. [Apache]

## Boucle d’événements asynchrone

* [Asio](https://github.com/chriskohlhoff/asio/) - Bibliothèque C++ multiplateforme pour la programmation réseau et les E/S de bas niveau, qui fournit aux développeurs un modèle asynchrone cohérent fondé sur une approche C++ moderne. [Boost] [site web](https://think-async.com/)
* [Boost.Asio](https://github.com/boostorg/asio) - Bibliothèque C++ multiplateforme pour la programmation réseau et les E/S de bas niveau. [Boost] [site web](https://boost.org/libs/asio)
* [C++ Actor Framework](https://github.com/actor-framework/actor-framework) - Implémentation open source du modèle acteur en C++. [BSD-3-Clause] [site web](https://actor-framework.org/)
* [Ichor](https://github.com/volt-software/ichor) - File d’événements privilégiant la sécurité des threads et fournissant l’injection de dépendances. [MIT]
* [libev](https://libev.schmorp.de/) - Boucle d’événements complète et performante, inspirée de libevent mais sans ses limitations ni ses bogues. [BSD et GPL]
* [libevent](https://libevent.org/) - Bibliothèque de notification d’événements. [BSD]
* [libhv](https://github.com/ithewei/libhv) - Bibliothèque de boucle d’événements multiplateforme. [BSD]
* [libuv](https://github.com/libuv/libuv) - E/S asynchrones multiplateformes. [BSD]
* [promise-cpp](https://github.com/xhawk18/promise-cpp) - Bibliothèque à en-tête unique implémentant la norme Promise/A+. [Anti-996]
* [uvw](https://github.com/skypjack/uvw) - Wrapper C++ de libuv. [MIT]
* [uv-cpp](https://github.com/wlgq2/uv-cpp) - Bibliothèque réseau performante basée sur C++11 et dotée d’une interface simple. [MIT]

## Audio
*Bibliothèques audio, son, musique et voix numérisée*

* [Amplitude Audio SDK](https://github.com/SparkyStudios/AmplitudeAudioSDK) - Moteur audio multiplateforme conçu pour répondre aux besoins des jeux. [Apache-2.0] [site web](https://amplitudeaudiosdk.com)
* [Aubio](https://github.com/aubio/aubio) - Bibliothèque d’analyse audio et musicale. [GPL-3.0] [site web](https://aubio.org/)
* [AudioFile](https://github.com/adamstark/AudioFile) - Bibliothèque C++ simple pour lire et écrire des fichiers audio. [MIT]
* [audioFlux](https://github.com/libAudioFlux/audioFlux) - Bibliothèque C d’analyse audio et musicale et d’extraction de caractéristiques. [MIT]
* [dr_libs](https://github.com/mackron/dr_libs) - Bibliothèques de décodage audio en fichier unique pour C et C++. [Unlicense]
* [FMOD](https://www.fmod.org/) - Moteur audio multiplateforme facile à utiliser et outil de création de contenu audio pour les jeux. [Gratuit pour usage non commercial / commercial]
* [KFR](https://www.kfrlib.com/) - Framework DSP C++ moderne et rapide : FFT, filtres FIR/IIR, conversion de fréquence d’échantillonnage. [GPL/propriétaire]
* [LAME](https://lame.sourceforge.io/using.php) - Encodeur MPEG Audio Layer III (MP3) de haute qualité. [LGPL]
* [libsndfile](https://github.com/erikd/libsndfile/) - Bibliothèque C avec wrapper C++ pour lire et écrire des fichiers audio échantillonnés au moyen d’une interface de bibliothèque standard. [LGPL-2.1] [site web](https://www.mega-nerd.com/libsndfile/)
* [libsoundio](https://github.com/andrewrk/libsoundio) - Bibliothèque C multiplateforme d’entrée et de sortie audio en temps réel. [MIT] [site web](https://libsound.io/)
* [Maximilian](https://github.com/micknoise/Maximilian) - Bibliothèque DSP C++ pour l’audio et la musique. [MIT]
* [OpenAL](https://www.openal.org/) - Open Audio Library, API audio multiplateforme. [BSD/LGPL/propriétaire]
* [miniaudio](https://github.com/mackron/miniaudio) - Bibliothèque de lecture et de capture audio en fichier unique. [Unlicense] [site web](https://miniaud.io/)
* [ni-media](https://github.com/NativeInstruments/ni-media) - Bibliothèque C++ pour lire et écrire des fichiers audio. [MIT]
* [Opus](https://opus-codec.org/) - Codec audio entièrement ouvert, libre de redevances et très polyvalent. [BSD]
* [PortAudio](https://www.portaudio.com/) - Bibliothèque libre, multiplateforme et open source d’E/S audio. [MIT]
* [rnnoise](https://github.com/xiph/rnnoise) - Réseau neuronal récurrent pour la réduction du bruit audio. [BSD-3-Clause]
* [SELA](https://github.com/sahaRatul/sela) - Audio sans perte simplifié. [MIT]
* [SoLoud](https://github.com/jarikomppa/soloud) - Moteur audio facile à utiliser et portable pour les jeux. [zlib]
* [Speex](https://www.speex.org/) - Codec libre pour la parole. Remplacé par Opus. [BSD]
* [Tonic](https://github.com/TonicAudio/Tonic) - Synthèse audio facile et efficace en C++. [Unlicense]
* [Vorbis](https://xiph.org/vorbis/) - Ogg Vorbis est un format audio compressé polyvalent, entièrement ouvert, non propriétaire, libre de brevets et de redevances. [BSD]
* [minimp3](https://github.com/lieff/minimp3) - Décodeur MP3 du domaine public, à en-tête unique et issu d’une implémentation en salle blanche. [CC0]
* [Verovio](https://github.com/rism-ch/verovio) - Bibliothèque rapide et légère de gravure de notation musicale. [LGPL] [site web](https://www.verovio.org)
* [Wav2Letter++](https://github.com/facebookresearch/wav2letter/) - Boîte à outils de traitement de la parole rapide et open source, dans le domaine public, entièrement écrite en C++. Elle utilise les bibliothèques de tenseurs ArrayFire et d’apprentissage automatique flashlight pour une efficacité maximale. [BSD]
* [PocketSphinx](https://github.com/cmusphinx/pocketsphinx) - Moteur léger de reconnaissance vocale. [BSD-2-Clause] [site web](https://cmusphinx.github.io/)

## Biologie
*Bio-informatique, génomique, biotechnologies*

* [BioC++](https://biocpp.sourceforge.net/) - Bibliothèques de calcul C++ pour la bio-informatique. [BSD]
* [Chaste](https://www.cs.ox.ac.uk/chaste/) - Bibliothèque C++ open source de simulation informatique de modèles mathématiques en physiologie et en biologie. [BSD]
* [libsequence](https://molpopgen.github.io/libsequence/) - Bibliothèque C++ pour représenter et analyser des données de génétique des populations. [GPL]
* [SeqAn](https://www.seqan.de/) - Algorithmes et structures de données pour l’analyse de séquences, en particulier de données biologiques. [BSD/3-clause]
* [Vcflib](https://github.com/ekg/vcflib) - Bibliothèque C++ pour analyser et manipuler des fichiers VCF. [MIT]
* [Wham](https://github.com/zeeev/wham) - Détection de variants structurels (SV) dans les génomes par application directe de tests d’association aux fichiers BAM. [MIT]
* [htslib](https://github.com/samtools/htslib) - Bibliothèque C pour lire et écrire des données de séquençage à haut débit. [MIT/BSD] [site web](https://www.htslib.org/)

## BitTorrent

* [jech/dht](https://github.com/jech/dht) - Bibliothèque DHT BitTorrent en C. [MIT]
* [libtorrent](https://github.com/arvidn/libtorrent) (aussi appelée libtorrent-rasterbar) - Implémentation C++ efficace et complète de BitTorrent. [BSD]
* [LibTorrent](https://github.com/rakshasa/libtorrent) (aussi appelée libtorrent-rakshasa) - Bibliothèque BitTorrent. [GPL]
* [libutp](https://github.com/bittorrent/libutp) - Bibliothèque du protocole de transport uTorrent. [MIT]

## Chimie
*Chimie, chimie quantique, chimie/physique de l’état solide, géochimie, biochimie*

* [d-SEAMS](https://github.com/d-SEAMS/seams-core) - Moteur d’analyse de trajectoires de dynamique moléculaire en C++ et Lua avec Nix. Son nom est l’acronyme de « Deferred Structural Elucidation Analysis for Molecular Simulations ». [GPL] [site web](https://dseams.info)
* [gromacs](https://github.com/gromacs/gromacs) - Implémentation parallèle de dynamique moléculaire par passage de messages. [GPL] [site web](https://www.gromacs.org)
* [Reaktoro](https://github.com/reaktoro/reaktoro) - Framework de calcul en C++ et Python pour la modélisation de systèmes chimiquement réactifs. [LGPL] [site web](https://reaktoro.org)
* [LAMMPS](https://github.com/lammps/lammps) - Code de dynamique moléculaire classique axé sur la modélisation des matériaux. Son nom signifie « Large-scale Atomic/Molecular Massively Parallel Simulator ». [GPL] [site web](https://lammps.sandia.gov/)
* [MADNESS](https://github.com/m-a-d-n-e-s-s/madness) - Environnement numérique adaptatif multirésolution pour la simulation scientifique. [GPL] [site web](https://github.com/m-a-d-n-e-s-s/madness)
* [MPQC](https://github.com/ValeevGroup/mpqc) - MPQC, le programme de chimie quantique massivement parallèle, calcule les propriétés des atomes et des molécules à partir des premiers principes, à l’aide de l’équation de Schrödinger indépendante du temps. [GPL] [site web](https://mpqc.org/)
* [Psi](https://github.com/psi4/psi4) - Logiciel de chimie computationnelle ab initio. [GPL] [site web](https://psicode.org/)

## CLI
*Interface utilisateur de console/terminal, interface en ligne de commande*

 * [Argh!](https://github.com/adishavit/argh) - Gestionnaire d’arguments minimaliste, sans frustration et à en-tête unique. [BSD]
 * [argparse](https://github.com/p-ranav/argparse) - Analyseur d’arguments pour le C++ moderne. [MIT]
 * [args](https://github.com/taywee/args) - Bibliothèque simple d’analyse d’arguments C++ à en-tête unique. [MIT]
 * [Argy](https://github.com/mshenoda/argy) - Bibliothèque d’analyse des arguments de ligne de commande pour le C++ moderne : simple, intuitive, à en-tête unique et sans dépendances. [MIT]
 * [barkeep](https://github.com/oir/barkeep) - Petit en-tête C++ pour afficher des animations asynchrones, des compteurs et des barres de progression. [Apache-2.0] [site web](https://oir.github.io/barkeep/)
 * [Boost.Program_options](https://github.com/boostorg/program_options) - Bibliothèque permettant d’obtenir les options d’un programme par des méthodes classiques, comme la ligne de commande ou un fichier de configuration. [Boost] [site web](https://boost.org/libs/program_options)
 * [cli](https://github.com/daniele77/cli) - Bibliothèque C++14 multiplateforme à en-tête unique pour les interfaces interactives en ligne de commande (style Cisco). [Boost]
 * [CLI11](https://github.com/CLIUtils/CLI11) - Bibliothèque C++11 à un ou plusieurs fichiers d’en-tête pour l’analyse CLI simple ou avancée. [BSD]
 * [clipp](https://github.com/muellan/clipp) - Gestion facile, puissante et expressive des arguments de ligne de commande en C++11/14/17, dans un seul fichier d’en-tête. [MIT]
 * [cpp-terminal](https://github.com/jupyter-xeus/cpp-terminal) - Petite bibliothèque C++ à en-tête unique pour écrire des applications de terminal multiplateformes. [MIT]
 * [Crossline](https://github.com/jcwangxp/Crossline) - Remplacement multiplateforme de readline et libedit, petit, autonome, sans configuration et sous licence MIT. [MIT]
 * [Ctrl+C](https://github.com/evgenykislov/ctrl-c) - Bibliothèque C++11 multiplateforme pour gérer l’événement Ctrl+C dans des fonctions personnalisées. [MIT]
 * [cxxopts](https://github.com/jarro2783/cxxopts) - Analyseur léger d’options de ligne de commande C++. [MIT]
 * [docopt.cpp](https://github.com/docopt/docopt.cpp) - Bibliothèque qui génère un analyseur d’options à partir d’une chaîne de documentation. [MIT/Boost]
 * [FINAL CUT](https://github.com/gansm/finalcut) - Bibliothèque de création d’applications de terminal à l’aide de composants textuels. [LGPL]
 * [FTXUI](https://github.com/ArthurSonzogni/FTXUI) - Interface fonctionnelle de terminal en C++. [MIT]
 * [gflags](https://gflags.github.io/gflags/) - Module C++ de gestion des options de ligne de commande. [BSD]
 * [imtui](https://github.com/ggerganov/imtui) - Interface utilisateur textuelle en mode immédiat. [MIT]
 * [indicators](https://github.com/p-ranav/indicators/) - Indicateurs d’activité pour le C++ moderne. [MIT]
 * [linenoise](https://github.com/antirez/linenoise) - Petite alternative autonome à readline et libedit. [BSD-2-Clause]
 * [linenoise-ng](https://github.com/arangodb/linenoise-ng) - Petit remplacement portable de GNU readline pour Linux, Windows et macOS, capable de gérer les caractères UTF-8. [BSD]
 * [Lyra](https://github.com/bfgroup/Lyra) - Analyseur de ligne de commande simple à utiliser et composable pour C++11 et versions ultérieures. [Boost]
 * [Ncurses](https://invisible-island.net/ncurses/) - Interface utilisateur de terminal. [MIT]
 * [FINAL CUT](https://github.com/gansm/finalcut) - Interface utilisateur de terminal, remplacement moderne de Ncurses. [LGPLv3+]
 * [oof](https://github.com/s9w/oof) - Contrôle pratique et performant des couleurs RVB et du positionnement dans la sortie de console. [MIT]
 * [PDCurses](https://github.com/wmcbrine/PDCurses) - Bibliothèque curses du domaine public, disponible en code source et en version précompilée. [Domaine public]
 * [popl](https://github.com/badaix/popl) - Analyseur de paramètres de ligne de commande et de fichiers INI à modèles, en un seul en-tête, pour C++11 et versions ultérieures. [MIT]
 * [replxx](https://github.com/AmokHuginnsson/replxx) - Remplacement de readline et libedit prenant en charge UTF-8, la coloration syntaxique et les suggestions, sous Unix et Windows. [BSD]
 * [tabulate](https://github.com/p-ranav/tabulate) - Générateur de tableaux pour le C++ moderne. [MIT]
 * [TCLAP](https://tclap.sourceforge.net) - Bibliothèque mature, stable et riche en fonctionnalités pour définir et accéder aux arguments de ligne de commande en ANSI C++. [MIT]
 * [termbox](https://github.com/nsf/termbox) - Bibliothèque C pour écrire des interfaces utilisateur textuelles. [MIT]
 * [TermOx](https://github.com/a-n-t-h-o-n-y/TermOx) - Bibliothèque d’interface utilisateur de terminal (TUI) pour C++17. [MIT]
 * [tuibox](https://github.com/Cubified/tuibox) - Bibliothèque TUI de terminal à en-tête unique permettant de créer des applications interactives en ligne de commande pilotées à la souris. [MIT]
* [Ginseng](https://github.com/chewax/Ginseng) - Analyseur d’arguments de ligne de commande en C++. [MIT]

## Compression
*Bibliothèques de compression et d’archivage*

* [bit7z](https://github.com/rikyoz/bit7z) - Bibliothèque statique C++ offrant une interface simple et claire aux bibliothèques partagées 7-Zip. [MPL2]
* [Brotli](https://github.com/google/brotli) - Format de compression Brotli, développé par Google. [MIT]
* [bzip2](https://www.bzip.org/) - Compresseur de données de haute qualité, librement disponible et libre de brevets. [BSD]
* [bzip3](https://github.com/kspalaiologos/bzip3) - Successeur spirituel amélioré et plus puissant de BZip2. [LGPL]
* [FastLZ](https://github.com/ariya/FastLZ) - Compression LZ77 compacte, portable et alignée sur les octets. [MIT]
* [FiniteStateEntropy](https://github.com/Cyan4973/FiniteStateEntropy) - Codecs entropiques de nouvelle génération : Finite State Entropy et Huff0.
* [FSST](https://github.com/cwida/fsst) - Compression de chaînes efficace avec accès aléatoire. [MIT]
* [heatshrink](https://github.com/atomicobject/heatshrink) - Bibliothèque de compression de données pour systèmes embarqués et temps réel. [ISC]
* [Kanzi](https://github.com/flanglet/kanzi-cpp) - Compresseur de données sans perte moderne, modulaire, portable et efficace, implémenté en C++. [Apache-2.0]
* [KArchive](https://api.kde.org/karchive-index.html) - Bibliothèque de création, lecture, écriture et manipulation d’archives comme ZIP et TAR. Elle fournit aussi la compression et la décompression transparentes de données, dans des formats comme gzip, au moyen d’une sous-classe de QIODevice. [LGPL]
* [libarchive](https://github.com/libarchive/libarchive) - Bibliothèque d’archivage et de compression multiformat. [New BSD] [site web](https://www.libarchive.org/)
* [LZ4](https://github.com/lz4/lz4) - Algorithme de compression extrêmement rapide. [BSD] [site web](https://www.lz4.org/)
* [LZAV](https://github.com/avaneev/lzav) - Algorithme rapide de compression de données en mémoire. [MIT]
* [LZFSE](https://github.com/lzfse/lzfse) - Bibliothèque de compression LZFSE et outil en ligne de commande, développés par Apple.
* [LZHAM](https://code.google.com/p/lzham/) - Bibliothèque de compression sans perte offrant un taux similaire à LZMA, mais une décompression bien plus rapide. [BSD]
* [LZMA](https://sourceforge.net/projects/sevenzip/files/7-Zip) :zap: - Méthode de compression générale et par défaut du format 7z. [Domaine public] [site web](https://www.7-zip.org)
* [LZMAT](https://github.com/nemequ/lzmat) - Bibliothèque extrêmement rapide de compression de données sans perte en temps réel. [GPL]
* [miniz](https://github.com/richgel999/miniz) - Bibliothèque Deflate/Inflate en un seul fichier source C, avec API compatible zlib, lecture/écriture d’archives ZIP et écriture PNG. [MIT]
* [Minizip](https://github.com/nmoinvaz/minizip) - Zlib avec les dernières corrections de bogues, prenant en charge le fractionnement de disque PKWARE, le chiffrement AES et la mise en mémoire tampon des E/S. [zlib]
* [minizip-ng](https://github.com/zlib-ng/minizip-ng) - Fork de la célèbre bibliothèque de manipulation ZIP incluse dans la distribution zlib. [zlib]
* [misa77](https://github.com/welcome-to-the-sunny-side/misa77) - Décompression incroyablement rapide avec de bons taux de compression. [MIT]
* [OpenZL](https://github.com/facebook/openzl) - Framework novateur de compression de données. [BSD] [site web](https://openzl.org/)
* [PhysicsFS](https://icculus.org/physfs/) - Bibliothèque offrant un accès abstrait à différentes archives. Conçue pour les jeux vidéo, elle s’inspire en partie du sous-système de fichiers de Quake 3. [zlib]
* [Rapidgzip](https://github.com/mxmlnkn/rapidgzip) - Décompression gzip et accès aléatoire pour les machines multicœurs modernes. [Apache-2/MIT]
* [smaz](https://github.com/antirez/smaz) - Bibliothèque de compression de chaînes courtes. [BSD]
* [Snappy](https://google.github.io/snappy/) - Compresseur/décompresseur rapide. [BSD]
* [ZLib](https://zlib.net/) - Bibliothèque de compression très compacte pour les flux de données. [zlib]
* [zlib-ng](https://github.com/zlib-ng/zlib-ng) - zlib pour les systèmes de « nouvelle génération », remplacement direct doté d’optimisations importantes. [zlib]
* [zstd](https://github.com/facebook/zstd) - Zstandard, algorithme de compression rapide en temps réel développé par Facebook. [BSD]
* [ZXC](https://github.com/hellobertrand/zxc) - Compression sans perte asymétrique à hautes performances. [BSD-3-Clause]
* [ZZIPlib](https://zziplib.sourceforge.net/) - Fournit un accès en lecture aux archives ZIP. [MPL/LGPL]
* [cmix](https://github.com/byronknoll/cmix) - Programme de compression sans perte visant les taux les plus élevés, au prix de la vitesse. [GPL-3.0]
* [LZSSE-SIMDe](https://github.com/nemequ/LZSSE-SIMDe) - Implémentation SIMD portable de la compression LZSSE. [BSD-2-Clause]
* [Zopfli](https://github.com/google/zopfli) - Bibliothèque de compression offrant une très bonne compression deflate/zlib, mais lente. [Apache-2.0]

## Concurrence
*Concurrence et multithreading*

* [alpaka](https://github.com/ComputationalRadiationPhysics/alpaka) - Bibliothèque d’abstraction pour l’accélération parallèle de noyaux. [LGPLv3+]
* [ArrayFire](https://github.com/arrayfire/arrayfire) - Bibliothèque GPU à usage général. [BSD]
* [Async++](https://github.com/Amanieu/asyncplusplus) - Framework de concurrence léger pour C++11, inspiré de la bibliothèque PPL de Microsoft et de la proposition de norme C++ N3428. [MIT]
* [atomic_queue](https://github.com/max0x7ba/atomic_queue) - Files C++14 sans verrou, à producteurs et consommateurs multiples, fondées sur des tampons circulaires et std::atomic. [MIT]
* [Boost.Compute](https://github.com/boostorg/compute) - Bibliothèque C++ de calcul GPU pour OpenCL. [Boost] [site web](https://boost.org/libs/compute)
* [Bolt](https://github.com/HSA-Libraries/Bolt) - Bibliothèque de modèles C++ optimisée pour les GPU. [Apache2]
* [BS::thread_pool](https://github.com/bshoshany/thread-pool) - Bibliothèque de pools de threads C++17 rapide, légère et facile à utiliser. [MIT]
* [Channel](https://github.com/andreiavrammsd/cpp-channel) - Conteneur sécurisé pour les threads, destiné au partage de données entre threads. [MIT]
* [ck](https://github.com/concurrencykit/ck) - Primitives de concurrence, mécanismes sûrs de récupération de mémoire et structures de données non bloquantes. [BSD]
* [concurrentqueue](https://github.com/cameron314/concurrentqueue) - File concurrente C++11 rapide, sans verrou, à producteurs et consommateurs multiples. [BSD,Boost]
* [Coros](https://github.com/mtmucha/coros) - Bibliothèque rapide et simple d’utilisation pour le parallélisme basé sur les tâches, exploitant les coroutines. [BSL-1.0]
* [CUB](https://github.com/NVlabs/cub) - CUB fournit des composants logiciels réutilisables de pointe pour chaque couche du modèle de programmation CUDA. [New BSD]
* [cuda-api-wrappers](https://github.com/eyalroz/cuda-api-wrappers) - Wrappers légers en C++ moderne pour l’API d’exécution de programmation GPU CUDA. [BSD]
* [cupla](https://github.com/ComputationalRadiationPhysics/cupla) - API C++ permettant d’exécuter CUDA/C++ sur OpenMP, Threads, TBB, etc., via Alpaka. [LGPLv3+]
* [C++React](https://github.com/schlangster/cpp.react) - Bibliothèque de programmation réactive pour C++11. [Boost]
* [dispenso](https://github.com/facebookincubator/dispenso) - Bibliothèque C++ hautes performances de programmation parallèle avec pools de threads, boucles parallèles, futures, graphes de tâches et conteneurs concurrents. [MIT]
* [FiberTaskingLib](https://github.com/RichieSams/FiberTaskingLib) - Bibliothèque de multithreading par tâches prenant en charge les graphes de tâches à dépendances arbitraires. [Apache]
* [HPX](https://github.com/STEllAR-GROUP/hpx/) - Système d’exécution C++ polyvalent pour les applications parallèles et distribuées, quelle que soit leur échelle. [Boost]
* [Intel Games Task Scheduler](https://github.com/GameTechDev/GTS-GamesTaskScheduler) - Framework de planification des tâches conçu pour les besoins des développeurs de jeux. [MIT]
* [Intel Parallel STL](https://github.com/intel/parallelstl) - Implémentation Intel® de la STL C++17 pour C++11 et versions ultérieures. [Apache2]
* [Intel TBB](https://www.threadingbuildingblocks.org/) - Intel® Threading Building Blocks. [Apache2]
* [junction](https://github.com/preshing/junction) - Bibliothèque C++ de structures de données concurrentes. [BSD]
* [Kokkos](https://github.com/kokkos/kokkos) - Modèle de programmation portable en matière de performances pour l’exécution parallèle et l’abstraction mémoire. [BSD]
* [libcds](https://github.com/khizmax/libcds) - Bibliothèque C++ de structures de données concurrentes. [BSD]
* [Libclsph](https://github.com/libclsph/libclsph) - Bibliothèque de simulation de fluides SPH accélérée par GPU et fondée sur OpenCL. [MIT]
* [libdill](https://github.com/sustrik/libdill/) - Introduit la concurrence structurée en C. [MIT]
* [libdispatch](https://github.com/apple/swift-corelibs-libdispatch) - Grand Central Dispatch (GCD), développé par Apple Inc., est une technologie de parallélisme des tâches fondée sur le modèle des pools de threads. libdispatch implémente les services GCD. [Apache-2.0] [site web](https://apple.github.io/swift-corelibs-libdispatch/)
* [libfork](https://github.com/ConorWilliams/libfork) - Bibliothèque de tâches de pointe, sans verrou ni attente, avec vol de continuations, fondée sur les coroutines C++20. [MPL-2.0] [site web](https://conorwilliams.github.io/libfork/)
* [libmill](https://github.com/sustrik/libmill/) - Introduit en C une concurrence de style Go. [MIT]
* [marl](https://github.com/google/marl) - Planificateur de tâches hybride threads/fibres écrit en C++11. [Apache-2.0]
* [moderngpu](https://github.com/moderngpu/moderngpu) - Bibliothèque améliorant la productivité du calcul généraliste sur GPU. Cette bibliothèque C++ à en-tête unique pour CUDA se distingue par ses primitives accélérées de résolution des problèmes à parallélisme irrégulier. [FreeBSD et droit d’auteur, Sean Baxter]
* [NCCL](https://github.com/NVIDIA/nccl) - Primitives optimisées pour la communication collective multi-GPU. [BSD]
* [Neco](https://github.com/tidwall/neco) - Bibliothèque de concurrence pour C (coroutines). [MIT]
* [OpenCL](https://www.khronos.org/opencl/) - Norme ouverte de programmation parallèle des systèmes hétérogènes.
* [OpenMP](https://openmp.org/) - API OpenMP.
* [rotor](https://github.com/basiliscos/cpp-rotor) - Microframework d’acteurs C++ adapté aux boucles d’événements. [MIT]
* [SObjectizer](https://github.com/Stiffstream/sobjectizer) - Implémentation des modèles acteur, publication-abonnement et CSP dans un framework C++ assez compact. [BSD-3-Clause]
* [Quantum](https://github.com/bloomberg/quantum) - Framework puissant de distribution de coroutines C++, construit sur [Boost.Coroutine2](https://boost.org/libs/coroutine2).
* [RaftLib](https://raftlib.io/) - Bibliothèque C++ pour la concurrence en flux et en flux de données, via des opérateurs de style iostream. [Apache2]
* [readerwriterqueue](https://github.com/cameron314/readerwriterqueue) - File C++ rapide, sans verrou, à un producteur et un consommateur. [BSD]
* [stdgpu](https://github.com/stotko/stdgpu) - Structures de données efficaces de style STL sur GPU. [Apache2]
* [Taskflow](https://github.com/taskflow/taskflow) - Système généraliste de programmation parallèle et hétérogène par tâches (anciennement Cpp-Taskflow). [MIT]
* [ThreadPool](https://github.com/progschj/ThreadPool) - Implémentation simple d’un pool de threads C++11. [zlib]
* [Thrust](https://developer.nvidia.com/thrust) - Bibliothèque d’algorithmes parallèles semblable à la bibliothèque standard de modèles C++ (STL). [Apache2]
* [TooManyCooks](https://github.com/tzcnt/TooManyCooks/) - Framework de coroutines C++20 hautes performances avec détection avancée du matériel. [BSL-1.0]
* [transwarp](https://github.com/bloomen/transwarp) - Bibliothèque C++ à en-tête unique pour la concurrence des tâches. [MIT]
* [VexCL](https://github.com/ddemidov/vexcl) - Bibliothèque C++ d’expressions vectorielles à modèles pour OpenCL/CUDA. [MIT]
* [STAPL](https://parasol-lab.gitlab.io/stapl-home/) - Framework C++ de programmation parallèle pour les ordinateurs à mémoire partagée ou distribuée. [BSD]
* [concurrencpp](https://github.com/David-Haim/concurrencpp) - Bibliothèque générale de concurrence comprenant tâches, exécuteurs, minuteries et coroutines C++20.
* [libcu++](https://github.com/NVIDIA/libcudacxx) - Bibliothèque standard C++ de NVIDIA, fournissant une implémentation hétérogène des fonctionnalités de la bibliothèque standard C++. [Apache-2.0]
* [nvthreads](https://github.com/HewlettPackard/nvthreads) - Bibliothèque permettant un multithreading efficace et persistant en C/C++. [LGPL-2.1]

## Configuration
*Fichiers de configuration, fichiers INI*

* [inifile-cpp](https://github.com/Rookfighter/inifile-cpp) - Analyseur de fichiers INI C++ à en-tête unique et facile à utiliser. [MIT]
* [inih](https://github.com/benhoyt/inih) - Analyseur simple de fichiers .INI en C, adapté aux systèmes embarqués. [BSD-3-Clause]
* [inih](https://github.com/jtilly/inih) - Version C++ de [inih](https://github.com/benhoyt/inih), dans un seul fichier d’en-tête. [BSD-3-Clause]
* [ini-cpp](https://github.com/SSARCandy/ini-cpp) - Version C++ d’inih dans un seul fichier d’en-tête, avec une interface pratique de lecture/écriture, étendue à partir de [inih](https://github.com/benhoyt/inih). [BSD-3-Clause] [site web](https://ssarcandy.tw/ini-cpp/index.html)
* [iniparser](https://github.com/ndevilla/iniparser) - Analyseur de fichiers INI. [MIT]
* [inipp](https://github.com/mcmtroffaes/inipp) - Analyseur et générateur INI C++ simple, à en-tête unique. [MIT]
* [libconfig](https://github.com/hyperrealm/libconfig) - Bibliothèque C et C++ de traitement des fichiers de configuration structurés. [LGPL-2.1] [site web](https://hyperrealm.github.io/libconfig/)
* [libconfuse](https://github.com/martinh/libconfuse) - Petite bibliothèque C d’analyse de fichiers de configuration. [ISC]
* [mINI](https://github.com/metayeti/mINI) - Lecteur et rédacteur de fichiers INI. [MIT]
* [simpleini](https://github.com/brofield/simpleini) - Bibliothèque C++ multiplateforme offrant une API simple pour lire et écrire des fichiers de configuration de type INI. [MIT]
* [toml++](https://github.com/marzer/tomlplusplus) - Analyseur et sérialiseur TOML à en-tête unique pour C++17 et versions ultérieures. [MIT] [site web](https://marzer.github.io/tomlplusplus/)
* [toml11](https://github.com/ToruNiina/toml11) - Analyseur/encodeur TOML à en-tête unique pour C++11 et versions ultérieures, ne dépendant que de la bibliothèque standard C++. [MIT]

## Conteneurs

* [CRoaring](https://github.com/RoaringBitmap/CRoaring) - Bitmaps Roaring en C (et C++), avec optimisations SIMD. [Apache-2.0]
* [dynamic_bitset](https://github.com/pinam45/dynamic_bitset) - Simple Useful Libraries : bitset dynamique C++17/20 à en-tête unique. [MIT] [site web](https://pinam45.github.io/dynamic_bitset/)
* [fixed-containers](https://github.com/teslamotors/fixed-containers) - Bibliothèque C++20 à en-tête unique fournissant des conteneurs constexpr de capacité fixe. [MIT]
* [flat_hash_map](https://github.com/skarupke/flat_hash_map) - Table de hachage plate très rapide, utilisant le hachage de Fibonacci.
* [frozen](https://github.com/serge-sans-paille/frozen) - Alternative constexpr à gperf, à en-tête unique, pour les utilisateurs de C++14. [Apache-2.0]
* [Hashmaps](https://github.com/goossaert/hashmap) - Implémentation en C++ d’algorithmes de tables de hachage à adressage ouvert. [MIT]
* [hat-trie](https://github.com/Tessil/hat-trie) - Implémentation C++ d’un HAT-trie rapide et économe en mémoire. [MIT]
* [Hopscotch map](https://github.com/Tessil/hopscotch-map) - Table de hachage rapide à en-tête unique qui résout les collisions par hachage hopscotch. [MIT]
* [librb](https://github.com/mlyszczek/librb) - Implémentation C d’un tampon circulaire, entièrement consciente des threads, permettant les lectures/écritures concurrentes et un agrandissement automatique si nécessaire. [BSD] [site web](https://librb.bofc.pl/)
* [LSHBOX](https://github.com/RSIA-LIESMARS-WHU/LSHBOX) - Boîte à outils C++ de hachage sensible à la localité (LSH), fournissant plusieurs algorithmes LSH courants et prenant aussi en charge Python et MATLAB. [GPL]
* [marisa-trie](https://github.com/s-yata/marisa-trie) - Algorithme de correspondance avec stockage implémenté récursivement. [BSD-2-Clause/LGPL-2.1]
* [parallel-hashmap](https://github.com/greg7mdp/parallel-hashmap) - Famille de conteneurs hashmap et B-tree à en-tête unique, très rapides et économes en mémoire. [Apache2] [site web](https://greg7mdp.github.io/parallel-hashmap/)
* [PGM-index](https://github.com/gvinciguerra/PGM-index) - Structure de données permettant des recherches rapides, recherches de prédécesseurs et de plages, ainsi que des mises à jour dans des tableaux de milliards d’éléments, avec beaucoup moins d’espace que les index classiques. [Apache2] [site web](https://pgm.di.unipi.it)
* [plf::colony](https://github.com/mattreecebentley/plf_colony) - Conteneur non ordonné de type « sac », plus performant que les conteneurs std lorsque les modifications sont fréquentes, tout en conservant les pointeurs vers les éléments non effacés quelles que soient les insertions ou suppressions. [zLib] [site web](https://www.plflib.org/colony.htm)
* [plf::list](https://github.com/mattreecebentley/plf_list) - Implémentation de std::list supprimant le splice de plages pour obtenir une structure plus adaptée au cache et de meilleures performances. [zLib] [site web](https://www.plflib.org/list.htm)
* [plf::stack](https://github.com/mattreecebentley/plf_stack) - Conteneur remplaçant l’adaptateur std::stack, plus performant que tout conteneur std dans un contexte de pile. [zLib] [site web](https://www.plflib.org/stack.htm)
* [ring_span lite](https://github.com/martinmoene/ring-span-lite) - Implémentation simplifiée de ring_span par Arthur O’Dwyer, c’est-à-dire une vue sur un tampon circulaire. [MIT]
* [robin-hood-hashing](https://github.com/martinus/robin-hood-hashing) - Table de hachage rapide et économe en mémoire, fondée sur le hachage robin hood pour C++14. [MIT]
* [robin-map](https://github.com/Tessil/robin-map) - Table de hachage et ensemble rapides utilisant le hachage robin hood. [MIT]
* [sparsepp](https://github.com/greg7mdp/sparsepp) - Table de hachage C++ rapide et économe en mémoire. [BSD 3-clause]
* [sqlitemap](https://github.com/bw-hro/sqlitemap) - Map persistante reposant sur SQLite. [MIT]
* [st_tree](https://github.com/erikerlandson/st_tree) - Classe modèle C++ rapide et flexible pour les structures de données arborescentes. [Apache-2.0]
* [svector](https://github.com/martinus/svector) - Vecteur compact optimisé pour SVO en C++17 et versions ultérieures. [MIT]
* [tree.hh](https://github.com/kpeeters/tree.hh) - Bibliothèque d’arbres C++ à en-tête unique, de style STL. [GPL2+]
* [unordered_dense](https://github.com/martinus/unordered_dense) - Hashmap et hashset rapides et stockés de manière dense, avec suppression par décalage arrière robin hood. [MIT]
* [fifo_map](https://github.com/nlohmann/fifo_map) - Conteneur associatif C++ ordonné selon le principe FIFO. [MIT]
* [ordered-map](https://github.com/Tessil/ordered-map) - Map et ensemble de hachage C++ qui préservent l’ordre d’insertion. [MIT]

## Cryptographie
*Bibliothèques de cryptographie et de chiffrement*

* [Bcrypt](https://bcrypt.sourceforge.net/) - Utilitaire multiplateforme de chiffrement de fichiers. Les fichiers chiffrés sont portables sur tous les systèmes d’exploitation et processeurs pris en charge. [BSD]
* [BeeCrypt](https://beecrypt.sourceforge.net/) - Bibliothèque de cryptographie portable et rapide. [LGPLv2.1+]
* [BoringSSL](https://boringssl.googlesource.com/boringssl) - Fork d’OpenSSL conçu pour répondre aux besoins de Google. [Apache2]
* [Botan](https://botan.randombit.net/) - Bibliothèque cryptographique pour C++. [BSD-2]
* [Crypto++](https://github.com/weidai11/cryptopp) - Bibliothèque gratuite de classes C++ dédiées aux schémas cryptographiques. [Boost] [site web](https://www.cryptopp.com/)
* [digestpp](https://github.com/kerukuro/digestpp) - Bibliothèque C++11 à en-tête unique de condensés de message (hachages). [Domaine public]
* [GnuPG](https://www.gnupg.org/) - Implémentation complète et libre de la norme OpenPGP. [GPL]
* [GnuTLS](https://www.gnutls.org/) - Bibliothèque de communications sécurisées implémentant les protocoles SSL, TLS et DTLS. [LGPL2.1]
* [Libgcrypt](https://www.gnu.org/software/libgcrypt/) - Bibliothèque cryptographique généraliste, initialement fondée sur du code de GnuPG. [LGPLv2.1+]
* [LibreSSL](https://www.libressl.org/) - Version libre du protocole SSL/TLS, dérivée d’OpenSSL en 2014. [?]
* [libsodium](https://github.com/jedisct1/libsodium) - Bibliothèque cryptographique portable/packagée basée sur NaCl, avec des choix affirmés et facile à utiliser. [ISC]
* [libhydrogen](https://github.com/jedisct1/libhydrogen) - Bibliothèque cryptographique légère, sécurisée et facile à utiliser, adaptée aux environnements contraints. [ISC]
* [LibTomCrypt](https://github.com/libtom/libtomcrypt) - Boîte à outils cryptographiques modulaire, portable et assez complète. [WTFPL]
* [mbedTLS](https://github.com/ARMmbed/mbedtls) - Bibliothèque SSL open source, portable, flexible, lisible et facile à utiliser, anciennement connue sous le nom de PolarSSL. [Apache2] [site web](https://tls.mbed.org/)
* [Nettle](https://www.lysator.liu.se/~nisse/nettle/) - Bibliothèque cryptographique de bas niveau. [LGPL]
* [OpenSSL](https://github.com/openssl/openssl) - Bibliothèque cryptographique open source robuste, de qualité commerciale et complète. [Apache] [site web](https://www.openssl.org/)
* [retter](https://github.com/MaciejCzyzewski/retter) - Collection de fonctions de hachage, chiffrements, outils, bibliothèques et ressources liés à la cryptographie.
* [s2n](https://github.com/awslabs/s2n) - Implémentation des protocoles TLS/SSL. [Apache]
* [sha1collisiondetection](https://github.com/cr-marcstevens/sha1collisiondetection) - Bibliothèque et outil en ligne de commande détectant les collisions SHA-1 dans un fichier. [MIT]
* [stduuid](https://github.com/mariusbancila/stduuid) - Implémentation multiplateforme des UUID en C++17. [MIT]
* [Tink](https://github.com/google/tink) - Bibliothèque multilingue et multiplateforme proposant des API cryptographiques sécurisées, faciles à utiliser correctement et difficiles à détourner. [Apache-2.0]
* [Tiny AES in C](https://github.com/kokke/tiny-AES-c) - Implémentation AES128/192/256 compacte et portable en C. [Domaine public]
* [tiny-ECDH-c](https://github.com/kokke/tiny-ECDH-c) - Implémentation compacte et portable du protocole d’accord de clés ECDH en C. [Domaine public]
* [Themis](https://github.com/cossacklabs/themis) - Bibliothèque cryptographique simplifiant la sécurisation des données : chiffrement symétrique et asymétrique, sockets sécurisées avec confidentialité persistante, pour plateformes mobiles et serveurs. [Apache2]
* [HEhub](https://github.com/primihub/HEhub) - Bibliothèque de chiffrement homomorphe et de ses applications. [Apache2]
* [Qt-Secret](https://github.com/QuasarApp/Qt-Secret) - Bibliothèque simple de chiffrement fondée sur Qt pour les projets C++. [LGPL]
* [micro-ecc](https://github.com/kmackay/micro-ecc) - Implémentation ECDH et ECDSA compacte et rapide pour processeurs 8, 32 et 64 bits. [BSD-2-Clause]
* [crypto-algorithms](https://github.com/B-Con/crypto-algorithms) - Implémentations de base d’algorithmes cryptographiques standard (AES, SHA, etc.) en C. [Domaine public]
* [aes-stream](https://github.com/jedisct1/aes-stream) - Chiffrement de flux rapide fondé sur AES pour C. [ISC]

## CSV
*Bibliothèques d’analyse de fichiers CSV (valeurs séparées par des virgules)*

* [commata](https://github.com/furfurylic/commata) - Un autre analyseur CSV C++17 à en-tête unique. [Unlicense]
* [csv2](https://github.com/p-ranav/csv2) - Analyseur CSV rapide pour le C++ moderne. [MIT]
* [Csv::Parser](https://github.com/ashaduri/csv-parser) - Analyseur CSV C++17 à la compilation et à l’exécution. [Zlib]
* [Fast C++ CSV Parser](https://github.com/ben-strasser/fast-cpp-csv-parser) - Bibliothèque rapide, compacte, facile à utiliser et à en-tête unique pour lire des fichiers CSV. [BSD-3-Clause]
* [Glaze](https://github.com/stephenberry/glaze) - Bibliothèque CSV performante, à en-tête unique et prenant en charge la réflexion. [MIT]
* [lazycsv](https://github.com/ashtum/lazycsv) - Analyseur CSV rapide et léger, en un seul en-tête, pour le C++ moderne. [MIT]
* [rapidcsv](https://github.com/d99kris/rapidcsv) - Bibliothèque C++ d’analyse CSV à en-tête unique et facile à utiliser. [BSD-3-Clause]
* [ssp](https://github.com/red0124/ssp) - Analyseur « CSV » rapide et polyvalent, à en-tête unique, avec une API C++ moderne. [MIT]
* [Vince's CSV Parser](https://github.com/vincentlaucsb/csv-parser) - Analyseur CSV C++17 rapide, autonome et en flux, avec conversion de types et statistiques facultatives. [MIT]
* [zsv](https://github.com/liquidaty/zsv) - Analyseur CSV SIMD le plus rapide au monde, avec une CLI extensible. [MIT]

## Bases de données
*Bibliothèques de bases de données, serveurs SQL, pilotes ODBC et outils*

* [ClickHouse](https://github.com/ClickHouse/clickhouse-cpp) - Client C++ pour le SGBD ClickHouse. [Apache2]
* [CrossDB](https://github.com/crossdb-org/crossdb) - SGBDR OLTP embarqué et serveur, léger et extrêmement performant. [MPL-2.0] [site web](https://crossdb.org/)
* [Doltlite](https://github.com/dolthub/doltlite) - SQLite avec contrôle de version. [Domaine public/Apache2]
* [DuckDB](https://duckdb.org/) - Système de gestion de base de données SQL OLAP en processus. [MIT] [site web](https://duckdb.org/)
* [hiberlite](https://github.com/paulftw/hiberlite) - Mapping objet-relationnel C++ pour sqlite3. [BSD]
* [Hiredis](https://github.com/redis/hiredis) - Bibliothèque cliente C minimaliste pour la base de données Redis. [BSD]
* [Infinity](https://github.com/infiniflow/infinity) - Base de données native pour l’IA, conçue pour les applications LLM et offrant une recherche vectorielle et plein texte extrêmement rapide. [Apache2]
* [Kuzu](https://github.com/kuzudb/kuzu) - Système de gestion de bases de données de graphes de propriétés intégrable, conçu pour la vitesse des requêtes et l’évolutivité. Implémente Cypher. [MIT]
* [Kvrocks](https://github.com/apache/incubator-kvrocks) - Base de données NoSQL distribuée clé-valeur utilisant RocksDB comme moteur de stockage et compatible avec le protocole Redis. [Apache2]
* [Ladybug](https://github.com/LadybugDB/ladybug) - Base de données de graphes intégrable, conçue pour la vitesse des requêtes et l’évolutivité. [MIT] [site web](https://ladybugdb.com/)
* [LevelDB](https://github.com/google/leveldb) - Bibliothèque de stockage clé-valeur rapide écrite chez Google, fournissant une correspondance ordonnée entre clés et valeurs de type chaîne. [BSD]
* [libpg_query](https://github.com/pganalyze/libpg_query) - Bibliothèque C permettant d’accéder à l’analyseur PostgreSQL en dehors du serveur. [BSD-3-Clause]
* [libpqxx](https://github.com/jtv/libpqxx) - API cliente C++ officielle pour PostgreSQL. [BSD-3-Clause]
* [LMDB](https://www.symas.com/lmdb) - Base de données clé-valeur embarquée très rapide, avec sémantique ACID complète. [OpenLDAP]
* [LMDB++](https://github.com/bendiken/lmdbxx) - Wrapper C++11 de la bibliothèque de base de données embarquée LMDB. [Domaine public]
* [mgclient](https://github.com/memgraph/mgclient) - Client Memgraph en C/C++. [Apache2]
* [MongoDB C Driver](https://github.com/mongodb/mongo-c-driver) - Bibliothèque cliente C pour MongoDB. [Apache2]
* [MongoDB C++ Driver](https://github.com/mongodb/mongo-cxx-driver) - Pilote C++ pour MongoDB. [Apache2]
* [MongoDB Libbson](https://github.com/mongodb/libbson) - Bibliothèque utilitaire BSON. [Apache2]
* [MySQL++](https://www.tangentsoft.net/mysql++/) - Wrapper C++ de l’API C de MySQL. [LGPL]
* [nanodbc](https://github.com/nanodbc/nanodbc) - Petit wrapper C++ de l’API ODBC native en C. [MIT]
* [ODB](https://www.codesynthesis.com/products/odb/) - Système ORM C++ open source, multiplateforme et indépendant de la base de données. [GPLv2]
* [redis3m](https://github.com/luca3m/redis3m) - Wrapper de hiredis avec une interface C++ claire, prenant en charge Sentinel et des modèles prêts à l’emploi. [Apache2]
* [Reindexer](https://github.com/Restream/reindexer) - Base de données documentaire intégrable en mémoire, dotée d’une interface de construction de requêtes de haut niveau. [Apache2] [site web](https://reindexer.io/)
* [RocksDB](https://github.com/facebook/rocksdb) - Base de données clé-valeur embarquée pour le stockage rapide, développée par Facebook. [BSD]
* [SimDB](https://github.com/LiveAsynchronousVisualizedArchitecture/simdb) - Base clé-valeur C++11 hautes performances, à mémoire partagée, sans verrou et multiplateforme, dans un seul fichier et avec peu de dépendances. [Apache2]
* [SlothDB](https://github.com/SouravRoy-ETL/slothdb) - Base de données SQL embarquée qui fonctionne partout : sur votre ordinateur portable, sur un serveur et dans le navigateur. [MIT] [site web](https://slothdb.org/)
* [SOCI](https://github.com/SOCI/soci) - Couche d’abstraction de base de données pour C++. [Boost]
* [Speedb](https://github.com/speedb-io/speedb) - Projet communautaire : base clé-valeur embarquée évolutive et performante, compatible RocksDB. [Apache2]
* [sqlgen](https://github.com/getml/sqlgen) - ORM et générateur de requêtes SQL fondés sur la réflexion pour C++20, semblables à SQLAlchemy/SQLModel en Python ou Diesel en Rust. [MIT]
* [SQLite](https://www.sqlite.org/) - Base relationnelle entièrement embarquée et complète, de quelques centaines de kilo-octets, intégrable directement à un projet. [Domaine public]
* [SQLiteC++](https://github.com/SRombauts/SQLiteCpp) - Wrapper C++ SQLite3 pratique et facile à utiliser. [MIT]
* [sqlite_modern_cpp](https://github.com/SqliteModernCpp/sqlite_modern_cpp) - Wrapper de la bibliothèque SQLite en C++14, à en-tête unique. [MIT]
* [sqlite_orm](https://github.com/fnc12/sqlite_orm) - Bibliothèque ORM SQLite légère, à en-tête unique, pour le C++ moderne. [AGPL + MIT payante]
* [sqlpp11](https://github.com/rbock/sqlpp11) - Langage spécifique au domaine embarqué, à typage sûr, pour les requêtes et résultats SQL en C++. [BSD-2-Clause]
* [sqlpp23](https://github.com/rbock/sqlpp23) - Bibliothèque SQL à typage sûr pour C++. [BSD-2-Clause]
* [TidesDB](https://github.com/tidesdb/tidesdb) - Moteur de stockage embarqué transactionnel, durable et hautes performances, conçu pour optimiser la mémoire flash et la RAM. [MPL-2.0] [site web](https://tidesdb.com/)
* [TileDB](https://github.com/TileDB-Inc/TileDB) - SGBD rapide de tableaux multidimensionnels denses et creux. [MIT] [site web](https://tiledb.io/)
* [TinyORM](https://github.com/silverqx/TinyORM) - Bibliothèque ORM moderne pour C++. [MIT] [site web](https://www.tinyorm.org/)
* [UnQLite](https://github.com/symisc/unqlite) - Moteur NoSQL transactionnel autonome, sans serveur et sans configuration. [BSD-2-Clause] [site web](https://unqlite.symisc.net/)
* [upscaledb](https://upscaledb.com) - Stockage clé-valeur « typé » embarqué avec interface de requête intégrée. [GPLv3]
* [TigerBeetleDB C++ client (Community)](https://github.com/kassane/tigerbeetle-cpp) - TigerBeetle est une base de données comptable financière conçue pour garantir sécurité et performances critiques et soutenir l’avenir des services financiers. [BSL-1.0]
* [Trilogy](https://github.com/trilogy-libraries/trilogy) - Bibliothèque cliente pour les serveurs de base de données compatibles MySQL, conçue pour les performances, la flexibilité et la facilité d’intégration. [MIT]
* [UStore](https://github.com/unum-cloud/ustore) - Base de données multimodale pour les BLOB, JSON et graphes. [Apache2]
* [Velox](https://github.com/facebookincubator/velox) - Bibliothèque C++ vectorisée d’accélération des bases de données, visant à optimiser les moteurs de requête et les systèmes de traitement des données. [Apache-2.0] [site web](https://velox-lib.io/)
* [Zvec](https://github.com/alibaba/zvec) - Base de données vectorielle légère, extrêmement rapide et exécutée en processus. [Apache2] [site web](https://zvec.org/)
* [constexpr-sql](https://github.com/mkitzan/constexpr-sql) - Analyseur et exécuteur de requêtes SQL à la compilation en C++17. [MIT]
* [NuDB](https://github.com/cppalliance/NuDB) - Stockage clé-valeur rapide, en ajout seul, pour disques SSD. [Boost]

## Visualisation des données
*Bibliothèques de visualisation des données*

* [gplot++](https://github.com/ziotom78/gplotpp) - Bibliothèque C++ de tracé multiplateforme à en-tête unique, interfacée avec Gnuplot. [MIT]
* [matplotplusplus](https://github.com/alandefreitas/matplotplusplus) - Bibliothèque graphique C++ de visualisation des données. [MIT] [site web](https://alandefreitas.github.io/matplotplusplus/)
* [mathplot](https://github.com/sebsjames/mathplot) - Graphiques et visualisation de données en C++, à en-tête unique, avec OpenGL moderne. [Apache-2.0] [site web](https://sebsjames.github.io/mathplot/)
* [Plotly++](https://github.com/jimmyorourke/plotlypp) - Interface C++ vers la spécification des figures Plotly.js pour créer des visualisations de données interactives. [MIT]
* [matplotlib-cpp](https://github.com/lava/matplotlib-cpp) - Wrapper C++ de la bibliothèque de tracé Python matplotlib. [MIT]

## Débogage
*Bibliothèques de débogage, détection des fuites mémoire et de ressources, tests unitaires*

* [Attest](https://github.com/tugglecore/attest) - Framework de test C multiplateforme sans allocation sur le tas, avec tests paramétrés tenant compte du cycle de vie et assertions accompagnées de messages formatés à la demande. [MIT]
* [backward-cpp](https://github.com/bombela/backward-cpp) - Outil élégant de mise en forme des traces de pile en C++. [MIT]
* [Bencher](https://bencher.dev/) - Suite d’outils d’étalonnage continu conçue pour repérer les régressions de performances dans l’intégration continue. [MIT]/[Apache2]
* [benchmark](https://github.com/google/benchmark) - Petite bibliothèque de prise en charge des microbenchmarks fournie par Google. [Apache2]
* [Boost.Test](https://github.com/boostorg/test) - Bibliothèque de tests Boost. [Boost] [site web](https://boost.org/libs/test)
* [check](https://github.com/libcheck/check) - Check est un framework de tests unitaires pour C. [LGPL-2.1] [site web](https://libcheck.github.io/check/)
* [doctest](https://github.com/onqtam/doctest) - Framework de test C++ à en-tête unique, le plus léger parmi ceux riches en fonctionnalités. [MIT]
* [Catch2](https://github.com/catchorg/Catch2) - Framework de test moderne, natif C++, pour les tests unitaires, le TDD et le BDD. [Boost]
* [Celero](https://github.com/DigitalInBlue/Celero) - Framework d’étalonnage des performances en C++. [Apache2]
* [cpp-dump](https://github.com/philip82148/cpp-dump) - Bibliothèque C++ de débogage pouvant afficher n’importe quelle variable, y compris les types définis par l’utilisateur. [MIT]
* [CppUTest](https://github.com/cpputest/cpputest) - Framework de tests unitaires et de simulation d’objets pour C/C++. [BSD-3-clause]
* [CUTE](https://cute-test.com) - Simplifier les tests unitaires en C++. [LGPL3]
* [CMocka](https://cmocka.org/) - Framework de tests unitaires en C prenant en charge les objets simulés. [Apache2]
* [CppBenchmark](https://github.com/chronoxor/CppBenchmark) - Framework d’étalonnage des performances C++ avec une précision de mesure à la nanoseconde. [MIT]
* [Cpptrace](https://github.com/jeremy-rifkin/cpptrace) - Bibliothèque de traces de pile C++ simple, portable et autonome, compatible avec C++11 et versions ultérieures. [MIT]
* [CppUnit](https://www.freedesktop.org/wiki/Software/cppunit/) - Portage de JUnit en C++. [LGPL2]
* [CrashCatch](https://github.com/keithpotz/CrashCatch) - Rapport de plantage C++ dans un seul en-tête, enregistrant les traces de pile et créant des vidages `.dmp` et `.txt`. [MIT] [site web](https://keithpotz.github.io/CrashCatch)
* [CTest](https://cmake.org/cmake/help/v2.8.8/ctest.html) - Programme pilote de tests de CMake. [BSD]
* [dbg-macro](https://github.com/sharkdp/dbg-macro) - Macro dbg(…) pour C++. [MIT]
* [DebugViewPP](https://github.com/CobaltFusion/DebugViewPP) - Visionneuse de journaux de débogage. [Boost]
* [Deleaker](https://www.deleaker.com) - Outil de détection des fuites de ressources, notamment de mémoire, GDI et handles.
* [FakeIt](https://github.com/eranpeer/FakeIt) - Framework simple de simulation d’objets pour C++. [MIT]
* [fff](https://github.com/meekrosoft/fff) - Microframework de création de fonctions C factices. [MIT]
* [Google Mock](https://github.com/google/googletest/blob/master/googlemock/README.md) - Bibliothèque d’écriture et d’utilisation de classes simulées en C++. [BSD]
* [Google Test](https://github.com/google/googletest) - Framework de tests C++ de Google. [BSD]
* [Hippomocks](https://github.com/dascandy/hippomocks) - Framework de simulation d’objets à en-tête unique. [LGPL-2.1]
* [IceCream-Cpp](https://github.com/renatoGarcia/icecream-cpp) - Plus besoin d’utiliser cout/printf pour déboguer. [MIT]
* [ig-debugheap](https://github.com/deplinenoise/ig-debugheap) - Tas de débogage multiplateforme utile pour localiser les erreurs mémoire. [BSD]
* [libassert](https://github.com/jeremy-rifkin/libassert) - Bibliothèque d’assertions C++ la plus surconçue. [MIT]
* [libtap](https://github.com/zorgnax/libtap) - Écrire des tests en C. [GPL2]
* [microprofile](https://github.com/jonasmr/microprofile) - Profileur doté d’une interface web pour plusieurs plateformes. [Unlicense]
* [MinUnit](https://github.com/siu/minunit) - Framework minimal de tests unitaires C, autonome dans un seul fichier d’en-tête. [MIT]
* [nanobench](https://github.com/martinus/nanobench) - Fonctionnalité simple, rapide et précise de microbenchmark dans un seul en-tête pour C++11/14/17/20. [MIT] [site web](https://nanobench.ankerl.com)
* [Nanotimer](https://github.com/mattreecebentley/plf_nanotimer) - Classe de minuterie multiplateforme simple et peu coûteuse pour l’étalonnage. [zLib] [site web](https://www.plflib.org/nanotimer.htm)
* [Nonius](https://github.com/libnonius/nonius) - Framework de microbenchmark C++. [CC]
* [Remotery](https://github.com/Celtoys/Remotery) - Profileur dans un seul fichier C, avec visualiseur web. [Apache2]
* [snitch](https://github.com/cschreib/snitch) - Framework de test C++20 léger. [Boost]
* [Touca](https://github.com/trytouca/trytouca) - Système open source de tests de régression hébergeable soi-même. [Apache2] [site web](https://touca.io/)
* [UnitTest++](https://github.com/unittest-cpp/unittest-cpp) - Framework léger de tests unitaires pour C++. [Licence MIT/X Consortium]
* [Unity](https://github.com/ThrowTheSwitch/Unity) - Tests unitaires simples pour C. [MIT]
* [utest.h](https://github.com/sheredom/utest.h) - Framework de tests unitaires C et C++ dans un seul en-tête. [Unlicense]
* [utl::profiler](https://github.com/DmitriBogdanov/UTL/blob/master/docs/module_profiler.md) - Profileur C++17 à en-tête unique. [MIT]
* [μt](https://github.com/boost-experimental/ut) - Framework de tests unitaires μ(micro) sans macro, dans un seul en-tête/module C++20. [Boost]
* [VLD](https://kinddragon.github.io/vld//) - Visual Leak Detector, système libre, robuste et open source de détection des fuites mémoire pour Visual C++.
* [heaptrack](https://github.com/KDE/heaptrack) - Profileur de tas mémoire pour Linux. [LGPL-2.1]

## Documentation

* [Doxide](https://github.com/lawmurray/doxide) - Documentation moderne pour le C++ moderne, configurée en YAML et produisant du Markdown. [Apache 2.0] [site web](https://doxide.org)
* [doxygen](https://github.com/doxygen/doxygen) :zap: - Outil de référence de facto pour générer de la documentation à partir de sources C++ annotées. [GPL2] [site web](https://www.doxygen.org)
* [doxyrest](https://github.com/vovkos/doxyrest) - Compilateur de XML Doxygen en reStructuredText pour Sphinx. [MIT]
* [hdoc](https://github.com/hdoc/hdoc) - Outil moderne de documentation pour C++. [AGPL/propriétaire] [site web](https://hdoc.io)
* [Natural Docs](https://github.com/NaturalDocs/NaturalDocs) - Générateur de documentation open source pour plusieurs langages de programmation. [AGPL/propriétaire] [site web](https://www.naturaldocs.org)
* [Sourcey](https://github.com/sourcey/sourcey) - Générateur de documentation statique exploitant XML Doxygen, OpenAPI, godoc, MCP et Markdown. [AGPL-3.0] [site web](https://sourcey.com)
* [Sphinx](https://github.com/sphinx-doc/sphinx) - Sphinx facilite la création d’une documentation intelligente et élégante. [BSD-2-Clause] [site web](https://www.sphinx-doc.org)

## DSP
*Traitement numérique du signal.*

* [DSPFilters](https://github.com/vinniefalco/DSPFilters) - Collection de classes C++ utiles pour le traitement numérique du signal. [MIT]
* [fCWT](https://github.com/fastlib/fCWT) - La transformée en ondelettes continue rapide (fCWT) est une bibliothèque de calcul rapide de la CWT. [Apache-2.0]
* [FFTW](https://www.fftw.org/) - Bibliothèque C de calcul de la transformée de Fourier discrète en une ou plusieurs dimensions. [GPL]
* [iir1](https://github.com/berndporr/iir1) - Bibliothèque C++ de filtres RII en temps réel. [MIT]
* [kissfft](https://github.com/mborgerding/kissfft) - Bibliothèque de transformée de Fourier rapide (FFT) qui s’efforce de rester simple. [BSD-3-Clause]
* [pocketfft](https://github.com/mreineck/pocketfft) - Implémentation FFT fondée sur FFTPack, avec plusieurs améliorations. [BSD-3-Clause]
* [wavelib](https://github.com/rafat/wavelib) - Implémentation C des transformées en ondelettes 1D et 2D. [BSD-3-Clause]

## Polices
*Bibliothèques d’analyse et de manipulation de fichiers de polices.*

* [Fontconfig](https://gitlab.freedesktop.org/fontconfig/fontconfig) - Bibliothèque de configuration et de personnalisation des polices. [MIT] [site web](https://www.freedesktop.org/wiki/Software/fontconfig/)
* [FreeType](https://www.freetype.org/) - Bibliothèque logicielle librement disponible pour le rendu des polices. [FTL et GPLv2]
* [otfcc](https://github.com/caryll/otfcc) - Bibliothèque C et utilitaire d’analyse et d’écriture de fichiers de polices OpenType. [Apache-2.0]
* [harfbuzz](https://github.com/harfbuzz/harfbuzz) - Moteur de façonnage du texte. [Ancienne MIT]
* [libschrift](https://github.com/tomolt/libschrift) - Bibliothèque légère de rendu des polices TrueType. [ISC]
* [SheenBidi](https://github.com/Tehreer/SheenBidi) - Implémentation sophistiquée de l’algorithme bidirectionnel Unicode. [Apache-2.0]

## Moteurs de jeu

* [Acid](https://github.com/Equilibrium-Games/Acid) - Moteur de jeu Vulkan C++17 à haute vitesse. [MIT]
* [Allegro](https://liballeg.org/) - Bibliothèque multiplateforme principalement destinée aux jeux vidéo et à la programmation multimédia. [zlib]
* [Axmol Engine](https://github.com/axmolengine/axmol) - Moteur de jeu multiplateforme pour ordinateur, mobile et XBOX (UWP), dérivé de Cocos2d-x-4.0. [MIT] [site web](https://axmol.dev/)
* [Cocos2d-x](https://www.cocos2d-x.org/) - Framework multiplateforme pour créer des jeux 2D, livres interactifs, démonstrations et autres applications graphiques. [MIT]
* [Corange](https://github.com/orangeduck/Corange) - Moteur de jeu écrit en C pur, SDL et OpenGL. [BSD]
* [crown](https://github.com/dbartolini/crown) - Moteur de jeu généraliste piloté par les données, écrit de zéro en C++ orthodoxe selon une philosophie minimaliste et axée sur les données. [MIT]
* [delta3d](https://sourceforge.net/projects/delta3d/) - Plateforme de simulation robuste. [LGPL2]
* [EnTT](https://github.com/skypjack/entt) - Le jeu vidéo rencontre le C++ moderne. [MIT]
* [GamePlay](https://github.com/gameplay3d/GamePlay) - Framework de jeu natif C++ multiplateforme pour créer des jeux mobiles et de bureau 2D/3D. [Apache2]
* [Godot](https://github.com/godotengine/godot) - Moteur de jeu complet, open source et sous licence MIT. [MIT]
* [Grit](https://github.com/grit-engine/grit-engine) - Projet communautaire visant à créer un moteur de jeu libre pour réaliser des jeux 3D en monde ouvert. [MIT]
* [Halley](https://github.com/amzeratul/halley) - Moteur de jeu léger écrit en C++14, doté d’un véritable système entité-composant. [Apache 2.0]
* [Hazel Game Engine](https://github.com/TheCherno/Hazel) - Hazel est principalement un moteur d’applications interactives et de rendu pour Windows, encore à ses débuts. [Licence Apache-2.0]
* [IX-Ray Platform](https://github.com/ixray-team/ixray-1.6-stcop) - Fork du moteur X-Ray 1.6 visant à améliorer l’expérience de jeu et à simplifier le développement de modifications. [MIT modifiée/usage non commercial uniquement]
* [JNGL](https://github.com/jhasse/jngl/) - Bibliothèque 2D pour Linux, Windows, macOS, Android, iOS, Xbox, Nintendo Switch et le Web. [zlib] [site web](https://bixense.com/jngl/)
* [KlayGE](https://github.com/gongminmin/KlayGE) - Moteur de jeu open source multiplateforme doté d’une architecture à plugins. [GPLv2] [site web](https://www.klayge.org/)
* [nCine](https://github.com/nCine/nCine) - Moteur de jeu 2D multiplateforme axé sur les performances, écrit en C++11 et éventuellement scriptable en Lua. [MIT] [site web](https://ncine.github.io/)
* [o3de](https://github.com/o3de/o3de) - Moteur 3D open source, temps réel et multiplateforme, fondé sur Amazon Lumberyard. [Apache2] [site web](https://o3de.org/)
* [OpenXRay](https://github.com/OpenXRay/xray-16) - Moteur X-Ray modifié par la communauté et utilisé dans la série de jeux S.T.A.L.K.E.R. [BSD modifiée/usage non commercial uniquement]
* [Oxygine](https://oxygine.org/) - Moteur de jeu C++ 2D multiplateforme. [MIT]
* [Panda3D](https://github.com/panda3d/panda3d) - Moteur de jeu et framework de rendu 3D et de développement de jeux pour les programmes Python et C++. [BSD modifiée] [site web](https://www.panda3d.org/)
* [PixelGameEngine](https://github.com/OneLoneCoder/olcPixelGameEngine) - Distribution officielle de olcPixelGameEngine, outil utilisé dans les vidéos YouTube et projets de javidx9. [OLC3]
* [Polycode](https://github.com/ivansafrin/Polycode) - Framework multiplateforme de programmation créative en C++ (avec liaisons Lua). [MIT]
* [quakeforge](https://github.com/quakeforge/quakeforge) - Branche maintenue activement du code du moteur Quake original, développé depuis plus de 20 ans. [GPL-2.0]
* [raylib](https://github.com/raysan5/raylib) - Bibliothèque simple et facile à utiliser pour découvrir la programmation de jeux vidéo. [zlib/libpng] [site web](https://www.raylib.com/)
* [Spring](https://github.com/spring/spring) - Moteur de jeu de stratégie en temps réel (RTS) puissant, libre et multiplateforme. [GPLv2/GPLv3] [site web](https://springrts.com/)
* [Torque2D](https://github.com/TorqueGameEngines/Torque2D) - Moteur C++ open source et multiplateforme conçu pour le développement de jeux 2D. [MIT] [site web](https://torque3d.org/torque2d)
* [Torque3D](https://github.com/TorqueGameEngines/Torque3D) - Moteur C++ open source conçu pour le développement de jeux 3D. [MIT] [site web](https://torque3d.org/torque3d)
* [toy engine](https://github.com/hugoam/toy) - toy est un moteur de jeu C++ léger et modulaire, proposant des idiomes C++ simples et expressifs pour concevoir rapidement des jeux 2D ou 3D complets.
* [Urho3D](https://urho3d.github.io/) - Moteur de jeu 2D et 3D libre, léger et multiplateforme, implémenté en C++. Fortement inspiré d’OGRE et de Horde3D. [MIT]
* [Zodiac Engine](https://github.com/JeanPhilippeKernel/RendererEngine) - Moteur de rendu 3D et éditeur open source multiplateformes, écrits en C++20 avec Vulkan (ZEngine). [MIT]
* [ezEngine](https://github.com/ezEngine/ezEngine) - Moteur de jeu libre et open source écrit en C++, conçu selon une philosophie modulaire et flexible pour s’adapter à de nombreux cas d’usage. [MIT] [site web](https://ezengine.net/)

## Graphes

* [CXXGraph](https://github.com/ZigRazor/CXXGraph) - Bibliothèque libre de graphes C++17 à en-tête unique, pour la représentation et l’exécution d’algorithmes. [AGPL-3.0]
* [Graaf](https://github.com/bobluppes/graaf) - Bibliothèque de graphes C++20 légère et généraliste. [MIT] [site web](https://bobluppes.github.io/graaf/)

## GUI
*Interface utilisateur graphique*

* [Boden](https://github.com/AshampooSystems/boden) - Framework d’interface graphique natif, mobile et multiplateforme. [GPL/LGPL/propriétaire] [site web](https://www.boden.io)
* [Brisk](https://github.com/brisklib/brisk) - Framework d’interface graphique C++20 multiplateforme, avec MVVM et capacités réactives. Rendu GPU évolutif et accéléré. [GPL/propriétaire] [site web](https://brisklib.com)
* [CEGUI](https://cegui.org.uk/) - Bibliothèque d’interface graphique flexible et multiplateforme.
* [Elements](https://github.com/cycfi/elements) - Bibliothèque d’interface graphique légère, modulaire, à granularité fine et indépendante de la résolution. [MIT]
* [FLTK](https://www.fltk.org/index.php) - Boîte à outils d’interface graphique C++ rapide, légère et multiplateforme. [LGPL2]
* [FOX Toolkit](https://fox-toolkit.org) - Boîte à outils de widgets open source et multiplateforme. [LGPL]
* [GacUI](https://github.com/vczh-libraries/GacUI) - Interface utilisateur C++ accélérée par GPU, avec outils de développement WYSIWYG, prise en charge XML, liaison de données intégrée et fonctionnalités MVVM. [Ms-PL]
* [GTK+](https://www.gtk.org/) - Boîte à outils multiplateforme pour créer des interfaces graphiques. [LGPL]
* [gtkmm](https://www.gtkmm.org/en/) - Interface C++ officielle de la célèbre bibliothèque d’interface graphique GTK+. [LGPL]
* [imgui](https://github.com/ocornut/imgui) - Interface graphique en mode immédiat avec peu de dépendances. [MIT]
* [implot](https://github.com/epezent/implot) - Widgets de tracé en mode immédiat pour imgui. [MIT]
* [iup](https://www.tecgraf.puc-rio.br/iup) - Boîte à outils multiplateforme pour créer des interfaces graphiques. [MIT]
* [libui](https://github.com/andlabs/libui) - Bibliothèque C d’interface graphique simple et portable (mais flexible), utilisant les technologies natives de chaque plateforme prise en charge. [MIT]
* [MyGUI](https://github.com/MyGUI/mygui) - Interface graphique rapide, flexible et simple. [MIT]
* [nana](https://github.com/cnjinhao/nana) - Bibliothèque multiplateforme de programmation d’interfaces graphiques dans le style du C++ moderne. [Boost]
* [NanoGui](https://github.com/mitsuba-renderer/nanogui) - Bibliothèque de widgets minimaliste et multiplateforme pour OpenGL 3.x et versions ultérieures. [BSD]
* [NAppGUI](https://github.com/frang75/nappgui_src) - SDK de création d’applications de bureau multiplateformes en ANSI-C. [MIT] [site web](https://nappgui.com/en/home/web/home.html)
* [nuklear](https://github.com/Immediate-Mode-UI/Nuklear) - Bibliothèque d’interface graphique ANSI C dans un seul en-tête. [Domaine public]
* [QCustomPlot](https://qcustomplot.com/) - Widget de tracé Qt sans dépendances supplémentaires. [GPLv3]
* [Qwt](https://qwt.sourceforge.net/) - Widgets Qt pour applications techniques. [Licence propre fondée sur LGPL]
* [QwtPlot3D](https://qwtplot3d.sourceforge.net/) - Bibliothèque de programmation C++ riche en fonctionnalités, fondée sur Qt/OpenGL, fournissant essentiellement des widgets 3D. [zlib]
* [RmlUi](https://github.com/mikke89/RmlUi) - Évolution de la bibliothèque d’interface utilisateur HTML/CSS, fork de libRocket. [MIT]
* [Saucer](https://github.com/saucer/saucer) - Bibliothèque C++ moderne et multiplateforme de vues web. [MIT]
* [Sciter](https://sciter.com/) - Moteur intégrable HTML/CSS/script, destiné à servir de couche d’interface utilisateur aux applications de bureau modernes. [Gratuit/commercial]
* [Slint](https://github.com/slint-ui/slint) - Boîte à outils d’interface graphique légère pour ordinateur et systèmes embarqués. [GPL/gratuite/propriétaire] [site web](https://slint.dev/)
* [TGUI](https://github.com/texus/TGUI) - Interface graphique C++ moderne et multiplateforme. [Zlib] [site web](https://tgui.eu/)
* [WebUI](https://github.com/webui-dev/webui) - Utilisez n’importe quel navigateur web comme interface graphique, avec le langage de votre choix côté serveur et HTML5 côté client. [MIT] [site web](https://webui.me/)
* [wxCharts](https://github.com/wxIshiko/wxCharts) - Bibliothèque de création de graphiques dans les applications wxWidgets. [MIT] [site web](https://www.wxishiko.com/wxCharts/)
* [wxWidgets](https://wxwidgets.org/) - Bibliothèque C++ permettant de créer des applications pour Windows, Mac OS X, Linux et d’autres plateformes à partir d’une base de code unique. [LGPL propre]
* [Yue](https://github.com/yue/yue) - Bibliothèque de création d’applications natives d’interface graphique multiplateformes. [LGPLv2]
* [GuiLite](https://github.com/idea4good/GuiLite) - Plus petite bibliothèque d’interface graphique à en-tête unique (5 KLOC) pour toutes les plateformes. [Apache-2.0]
* [LCUI](https://github.com/lc-soft/LCUI) - Petite bibliothèque C de création d’interfaces utilisateur avec C, XML et CSS. [MIT]

## Graphisme

* [assimp](https://github.com/assimp/assimp) - Open Asset Import Library (assimp) est une bibliothèque multiplateforme d’importation de modèles 3D, visant à fournir une API commune à différents formats de fichiers d’objets 3D. [BSD-3-Clause] [site web](https://www.assimp.org)
* [bgfx](https://github.com/bkaradzic/bgfx) - Bibliothèque de rendu multiplateforme. [BSD]
* [Blend2D](https://github.com/blend2d/blend2d) - Moteur graphique vectoriel 2D accéléré par un compilateur JIT. [Zlib] [site web](https://blend2d.com/)
* [Cairo](https://www.cairographics.org/) - Bibliothèque graphique 2D prenant en charge plusieurs périphériques de sortie. [LGPL2 ou Mozilla MPL]
* [C-Turtle](https://github.com/walkerje/C-Turtle) - Bibliothèque graphique tortue C++11 à en-tête unique servant de wrapper à CImg. [MIT]
* [Diligent Engine](https://github.com/DiligentGraphics/DiligentEngine) - Bibliothèque graphique 3D moderne, multiplateforme et de bas niveau. [Apache2]
* [DirectXTK](https://github.com/Microsoft/DirectXTK) - Collection de classes utilitaires pour écrire du code DirectX 11.x en C++. [MIT]
* [GLFW](https://github.com/glfw/glfw) - Bibliothèque simple et multiplateforme de gestion d’OpenGL. [zlib/libpng]
* [GLFWPP](https://github.com/janekb04/glfwpp) - Wrapper GLFW léger, moderne, C++17 et à en-tête unique. [MIT]
* [Harfang 3D](https://github.com/harfang3d/harfang3d) Bibliothèque de visualisation 3D utilisable en C++, Python, Lua et Go, fondée sur BGFX. [GPLv3/LGPLv3/propriétaire] [site web](https://www.harfang3d.com)
* [herebedragons](https://github.com/kosua20/herebedragons) - Scène 3D élémentaire implémentée avec différents moteurs, frameworks ou API. [MIT] [site web](https://simonrodriguez.fr/dragon/)
* [Horde3D](https://github.com/horde3d/Horde3D) - Petit moteur de rendu et d’animation 3D. [EPL]
* [Ion](https://github.com/google/ion) - Ensemble compact et efficace de bibliothèques pour créer des applications clientes ou serveurs multiplateformes utilisant des graphismes 3D. [Apache2] [site web](https://google.github.io/ion/)
* [Irrlicht](https://irrlicht.sourceforge.net/) - Moteur 3D temps réel hautes performances écrit en C++. [zlib]
* [libigl](https://github.com/libigl/libigl) - Bibliothèque simple de traitement géométrique en C++. [MPL2]
* [LLGL](https://github.com/LukasBanana/LLGL) - Low Level Graphics Library (LLGL), mince couche d’abstraction des API graphiques modernes. [BSD-3-Clause]
* [LunaSVG](https://github.com/sammycage/lunasvg) - Bibliothèque autonome de rendu SVG en C++. [MIT]
* [magnum](https://github.com/mosra/magnum) - Middleware graphique C++11/C++14 léger et modulaire pour les jeux et la visualisation de données. [MIT] [site web](https://magnum.graphics)
* [MESHLIB](https://github.com/meshinspector/meshlib) - SDK pour accélérer le traitement des données 3D. [Gratuit/commercial] [site web](https://meshlib.io/)
* [micro-gl](https://github.com/micro-gl/micro-gl) - Graphismes vectoriels CPU C++11 en temps réel, intégrables et à en-tête unique. Sans bibliothèque standard, FPU ni GPU requis. [PERSONNALISÉ] [site web](https://micro-gl.github.io/docs/microgl)
* [NanoVG](https://github.com/memononen/nanovg) - Bibliothèque de dessin vectoriel 2D anticrénelé reposant sur OpenGL pour les interfaces et les visualisations. [Zlib]
* [Ogre 3D](https://github.com/OGRECave) :zap: - Moteur de rendu 3D temps réel flexible et orienté scène (contrairement à un moteur de jeu), écrit en C++. [MIT] [site web](https://www.ogre3d.org)
* [OpenSceneGraph](https://www.openscenegraph.org/) - Boîte à outils graphique 3D open source et hautes performances. [OSGPL]
* [OpenSubdiv](https://github.com/PixarAnimationStudios/OpenSubdiv) - Bibliothèque de Pixar pour évaluer et rendre des surfaces de subdivision sur CPU et GPU. [Apache2 modifiée]
* [OpenVDB](https://www.openvdb.org/) - Bibliothèque et outils de stockage, modification et rendu de jeux de données volumiques. [MPL2]
* [Panda3D](https://www.panda3d.org/) - Framework de rendu 3D et de développement de jeux pour Python et C++. [BSD]
* [Partio](https://github.com/wdas/partio) - Bibliothèque de manipulation de données de particules prenant en charge la plupart des formats de fichiers courants. [BSD modifiée]
* [Skia](https://github.com/google/skia) - Bibliothèque graphique 2D complète pour dessiner du texte, des géométries et des images. [BSD] [site web](https://skia.org/)
* [ThorVG](https://github.com/thorvg/thorvg) - Bibliothèque portable et indépendante de la plateforme pour dessiner des scènes et animations vectorielles, dont SVG et Lottie. [MIT] [site web](https://www.thorvg.org/)
* [TinySpline](https://github.com/msteinbeck/tinyspline) - Bibliothèque ANSI C compacte mais puissante pour interpoler, transformer et interroger des courbes NURBS, B-splines et Bézier arbitraires. [MIT]
* [urho3d](https://github.com/urho3d/Urho3D) - Moteur de rendu et moteur de jeu multiplateformes. [Nombreuses licences, principalement MIT]
* [Yocto/GL](https://github.com/xelatihy/yocto-gl) - Petites bibliothèques C++ de graphismes fondés sur la physique et pilotés par les données. [MIT]
* [olive.c](https://github.com/tsoding/olive.c) - Bibliothèque graphique 2D simple. [MIT]

## Traitement d’images

* [avir](https://github.com/avaneev/avir) - Redimensionneur d’images HDR professionnel de haute qualité et redimensionneur Lanczos SIMD rapide. [MIT]
* [Boost.GIL](https://github.com/boostorg/gil) - Bibliothèque générique d’images. [Boost] [site web](https://boost.org/libs/gil)
* [BitmapPlusPLus](https://github.com/baderouaich/BitmapPlusPlus) - Bibliothèque C++ bitmap simple et rapide, à en-tête unique. [MIT]
* [CImg](https://cimg.eu/) - Petite boîte à outils C++ open source de traitement d’images. [LGPL ou GPL propre]
* [CxImage](https://www.codeproject.com/Articles/1300/CxImage) - Bibliothèque de traitement et de conversion d’images pour charger, enregistrer, afficher et transformer des images BMP, JPEG, GIF, PNG, TIFF, MNG, ICO, PCX, TGA, WMF, WBMP, JBG et J2K. [zlib]
* [Dlib](https://github.com/davisking/dlib) :zap: - Boîte à outils C++11 moderne d’apprentissage automatique, vision par ordinateur, optimisation numérique et apprentissage profond. [Boost] [site web](https://dlib.net/)
* [fpng](https://github.com/richgel999/fpng) - Lecteur/rédacteur PNG C++ extrêmement rapide. [Unlicense]
* [FreeImage](https://freeimage.sourceforge.net/) - Bibliothèque open source prenant en charge les formats d’image populaires et d’autres formats utiles aux applications multimédias actuelles. [GPL2 ou GPL3]
* [GD](https://github.com/libgd/libgd) - Bibliothèque graphique GD, célèbre pour son usage en PHP pour charger et manipuler des images et créer des miniatures. [Licence permissive personnalisée, mention obligatoire dans la documentation utilisateur] [site web](https://libgd.github.io/)
* [DCMTK](https://dicom.offis.de/dcmtk.php.en) - Boîte à outils DICOM.
* [GDCM](https://gdcm.sourceforge.net/wiki/index.php/Main_Page) - Bibliothèque DICOM communautaire.
* [ITK](https://www.itk.org/) - Système open source et multiplateforme d’analyse d’images. [Apache2 depuis ITK 4.0]
* [Jpegli](https://github.com/google/jpegli) - Implémentation améliorée d’un encodeur et décodeur JPEG. [BSD-3-Clause]
* [Leptonica](https://github.com/DanBloomberg/leptonica) - Bibliothèque open source regroupant des logiciels largement utiles au traitement d’images et aux applications d’analyse d’images. [BSD-2-Clause] [site web](https://leptonica.org/index.html)
* [libavif](https://github.com/AOMediaCodec/libavif) - Bibliothèque d’encodage et de décodage des fichiers .avif. [BSD-2-Clause]
* [libfacedetection](https://github.com/ShiqiYu/libfacedetection) - Bibliothèque open source de détection de visages dans les images. La détection peut atteindre 1 500 images/s. [BSD]
* [libjpeg-turbo](https://github.com/libjpeg-turbo/libjpeg-turbo) - Codec d’image JPEG utilisant des instructions SIMD pour accélérer l’encodage et le décodage JPEG de base. [IJG, BSD-3-Clause et zlib] [site web](https://libjpeg-turbo.org/)
* [libjxl](https://github.com/libjxl/libjxl) - Implémentation de référence du format d’image JPEG XL. [BSD-3-Clause]
* [libpng](https://github.com/pnggroup/libpng) - Bibliothèque de référence utilisée par les applications qui lisent, créent et manipulent des images matricielles PNG (Portable Network Graphics). [libpng-2.0] [site web](https://libpng.sourceforge.io/)
* [libspng](https://github.com/randy408/libspng) - Alternative simple et moderne à libpng. [BSD-2] [site web](https://libspng.org/)
* [libvips](https://github.com/jcupitt/libvips) - Bibliothèque de traitement d’images rapide et peu gourmande en mémoire. [LGPL] [site web](https://www.vips.ecs.soton.ac.uk/)
* [LodePNG](https://github.com/lvandeve/lodepng) - Encodeur et décodeur PNG en C et C++. [Zlib]
* [Magick++](https://imagemagick.org/script/magick++.php) - Interfaces de programmation ImageMagick pour C++. [Apache2]
* [MagickWnd](https://imagemagick.org/script/magick-wand.php) - Interfaces de programmation ImageMagick pour C. [Apache2]
* [MozJPEG](https://github.com/mozilla/mozjpeg) - Encodeur JPEG amélioré. [BSD/BSD-3-Clause/ZLIB]
* [OpenCV](https://github.com/opencv) :zap: - Vision par ordinateur open source. [Apache2] [site web](https://opencv.org)
* [OpenEXR](https://www.openexr.com/) - Bibliothèque multiplateforme d’imagerie à grande plage dynamique. [BSDF modifiée]
* [OpenImageIO](https://github.com/OpenImageIO/oiio) - Puissante bibliothèque de manipulation d’images et de textures prenant en charge un grand nombre de formats avec perte et RAW courants. [BSD modifiée]
* [OpenJPEG](https://github.com/uclouvain/openjpeg) - Codec JPEG 2000 open source écrit en C. [BSD-2-Clause]
* [PlutoFilter](https://github.com/sammycage/plutofilter) - Bibliothèque de filtres d’image en C, à en-tête unique et sans allocation. [MIT]
* [QOI](https://github.com/phoboslab/qoi) - « Quite OK Image Format », format rapide de compression d’images sans perte. [MIT]
* [SAIL](https://github.com/happy-sea-fox/sail) - Bibliothèque multiplateforme facile à utiliser de décodage d’images, avec codecs d’image enfichables. [MIT]
* [Simd](https://github.com/ermig1979/Simd) - Bibliothèque C++ de traitement d’images exploitant SIMD : SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, AVX-512, VMX(Altivec), VSX(Power7) et NEON pour ARM. [MIT]
* [stb-image](https://github.com/nothings/stb/blob/master/stb_image.h) - Bibliothèque STB de chargement d’images à en-tête unique. [Domaine public]
* [tesseract-ocr](https://github.com/tesseract-ocr) - Moteur de reconnaissance optique de caractères (OCR). [Apache2]
* [TinyDNG](https://github.com/syoyo/tinydng) - Lecteur et rédacteur Tiny DNG/TIFF C++ à en-tête unique. [MIT]
* [TinyEXIF](https://github.com/cdcseacave/TinyEXIF) - Petite bibliothèque C++ conforme ISO d’analyse EXIF et XMP pour JPEG. [MIT]
* [TinyTIFF](https://github.com/jkriege2/TinyTIFF) - Bibliothèque légère de lecture/écriture TIFF. [GPL-3.0]
* [Video++](https://github.com/matt-42/vpp) - Bibliothèque C++14 hautes performances de traitement vidéo et d’images. [MIT]
* [VIGRA](https://github.com/ukoethe/vigra) - Bibliothèque C++ généraliste de vision par ordinateur pour l’analyse d’images. [MIT X11]
* [VTK](https://www.vtk.org/) - Système logiciel open source et librement disponible pour l’infographie 3D, le traitement d’images et la visualisation. [BSD]
* [OpenImageDenoise](https://github.com/OpenImageDenoise/oidn) - Bibliothèque de débruitage hautes performances et de haute qualité pour les images tracées par rayons. [Apache-2.0] [site web](https://www.openimagedenoise.org/)
* [bitmap](https://github.com/ArashPartow/bitmap) - Bibliothèque C++ de lecture, écriture et traitement de fichiers image bitmap. [MIT]

## Internationalisation

* [gettext](https://www.gnu.org/software/gettext/) - GNU « gettext ». [GPL2]
* [IBM ICU](https://site.icu-project.org/) - Ensemble de bibliothèques C/C++ et Java prenant en charge Unicode et la mondialisation. [ICU]
* [libiconv](https://www.gnu.org/software/libiconv/) - Bibliothèque de conversion entre différents encodages de caractères. [GPL]
* [simdutf](https://github.com/simdutf/simdutf) - Routines Unicode (UTF-8, UTF-16, UTF-32) : des milliards de caractères par seconde avec SSE2, AVX2, NEON et AVX-512. [Apache-2/MIT]
* [uni-algo](https://github.com/uni-algo/uni-algo) - Implémentation d’algorithmes Unicode pour C/C++. [Unlicense ou MIT]
* [utf8.h](https://github.com/sheredom/utf8.h) - Fonctions de chaînes UTF-8 pour C et C++ dans un seul en-tête. [Unlicense]
* [utf8proc](https://github.com/JuliaStrings/utf8proc) - Bibliothèque C claire de traitement des données Unicode UTF-8. [MIT]

## Communication interprocessus

* [Apache Thrift](https://thrift.apache.org/) - IPC/RPC interlangages efficace entre C++, Java, Python, PHP, C# et de nombreux autres langages. Initialement développé par Facebook. [Apache2]
* [Boost.Interprocess](https://github.com/boostorg/interprocess) - Bibliothèque Boost à en-tête unique prenant en charge la mémoire partagée au niveau du noyau et les fichiers mappés en mémoire, avec mécanismes de synchronisation intégrés (sémaphores, mutex et autres). [Boost] [site web](https://boost.org/libs/interprocess)
* [bRPC](https://github.com/apache/brpc) - Framework RPC C++ de qualité industrielle, souvent utilisé dans des systèmes hautes performances de recherche, stockage, apprentissage automatique, publicité, recommandation, etc. [Apache2] [site web](https://brpc.apache.org/)
* [Cap'n Proto](https://github.com/capnproto/capnproto) - Format d’échange de données rapide et système RPC fondé sur les capacités. [MIT] [site web](https://capnproto.org/)
* [eCAL](https://github.com/continental/ecal) - Publication/abonnement, client/serveur, C++/Python/C#, divers protocoles de messages (protobuf, capnproto, etc.). [Apache2] [site web](https://www.ecal.io/)
* [gRPC](https://github.com/grpc/grpc) - Framework RPC généraliste, open source et hautes performances. [BSD] [site web](https://www.grpc.io/)
* [Ice](https://github.com/zeroc-ice/ice) - Framework RPC complet prenant en charge C++, C#, Java, JavaScript, Python et d’autres langages. [GPLv2]
* [iceoryx](https://github.com/eclipse-iceoryx/iceoryx) - Framework IPC réellement sans copie pour systèmes critiques de sécurité, avec liaisons C et Rust. Fonctionne sous Linux, QNX, Windows, macOS et FreeBSD. [Apache2] [site web](https://iceoryx.io/)
* [libjson-rpc-cpp](https://github.com/cinemast/libjson-rpc-cpp) - Framework JSON-RPC pour serveurs et clients C++. [MIT]
* [nanomsg](https://github.com/nanomsg/nanomsg) - Implémentation simple et performante de plusieurs « protocoles d’évolutivité ». [MIT] [site web](https://nanomsg.org/)
* [nng](https://github.com/nanomsg/nng) - nanomsg nouvelle génération, bibliothèque de messagerie légère sans courtier. [MIT] [site web](https://nanomsg.github.io/nng/)
* [rpclib](https://github.com/rpclib/rpclib) - Bibliothèque C++ moderne de serveur et client msgpack-RPC. [MIT]
* [simple-rpc-cpp](https://github.com/pearu/simple-rpc-cpp) - Générateur simple de wrappers RPC pour les fonctions C/C++. [BSD]
* [SRPC](https://github.com/sogou/srpc) - Système RPC léger prenant en charge plusieurs protocoles et OpenTelemetry. [Apache2]
* [WAMP](https://wamp.ws/) - Fournit des modèles de messagerie RPC et publication/abonnement (diverses implémentations et langages).
* [xmlrpc-c](https://xmlrpc-c.sourceforge.net/) - Bibliothèque RPC légère fondée sur XML et HTTP. [BSD]

## JSON

* [Boost.PropertyTree](https://github.com/boostorg/property_tree) - Analyseur/générateur d’arborescences de propriétés pouvant analyser les fichiers XML/JSON/INI/Info. [Boost] [site web](https://boost.org/libs/property_tree)
* [cJSON](https://github.com/DaveGamble/cJSON) - Analyseur JSON ultraléger en ANSI C. [MIT]
* [DAW JSON Link](https://github.com/beached/daw_json_link) - Sérialisation et analyse JSON rapides et pratiques en C++. [BSL-1.0]
* [frozen](https://github.com/cesanta/frozen) - Analyseur et générateur JSON pour C/C++. [GPL et GPL2]
* [Glaze](https://github.com/stephenberry/glaze) - Bibliothèque JSON et d’interface en mémoire extrêmement rapide pour le C++ moderne. [MIT]
* [Jansson](https://github.com/akheron/jansson) - Bibliothèque C d’encodage, décodage et manipulation des données JSON. [MIT]
* [jbson](https://github.com/chrismanning/jbson) - Bibliothèque de création et d’itération de données BSON et de documents JSON en C++14. [Boost]
* [JeayeSON](https://github.com/jeaye/jeayeson) - Bibliothèque JSON C++ très bien conçue, à en-tête unique. [BSD]
* [Jsmn](https://github.com/zserge/jsmn) - Analyseur JSON minimaliste en C. [MIT]
* [json](https://github.com/nlohmann/json) :zap: - JSON pour le C++ moderne. [MIT] [site web](https://json.nlohmann.me)
* [json.cpp](https://github.com/jart/json.cpp) - Bibliothèque baroque d’analyse et de sérialisation JSON pour C++. [Apache-2.0]
* [json.h](https://github.com/sheredom/json.h) - Solution simple, avec un seul en-tête/fichier source, pour analyser JSON en C et C++. [Unlicense]
* [json-build](https://github.com/lcsmuller/json-build) - Sérialiseur JSON C89 minuscule et sans allocation. [MIT]
* [json-c](https://github.com/json-c/json-c) - Implémentation de JSON en C. [MIT]
* [jsoncons](https://github.com/danielaparker/jsoncons) - Bibliothèque C++ à en-tête unique pour JSON et les formats binaires apparentés, avec JSONPointer, JSONPatch, JSONPath et JMESPath. [Boost]
* [JsonCpp](https://github.com/open-source-parsers/jsoncpp) - Bibliothèque C++ d’interaction avec JSON. [MIT]
* [Jsonifier](https://github.com/RealTimeChris/Jsonifier) - Quelques classes pour analyser et sérialiser très rapidement des objets JSON et vers JSON. [MIT]
* [jsonParse](https://github.com/liufeigit/jsonParse) - Analyseur JSON simple en ANSI C. [MIT]
* [json-parser](https://github.com/udp/json-parser) - Analyseur JSON portable en ANSI C, à empreinte mémoire très réduite. [BSD]
* [json-struct](https://github.com/jorgen/json_struct) - Analyseur JSON C++ hautes performances à en-tête unique, vers et depuis les structures C++. [MIT]
* [json-voorhees](https://github.com/tgockel/json-voorhees) - Bibliothèque JSON pour C++11, sans dépendances, rapide et conviviale pour les développeurs. [Apache2]
* [JSON Toolkit](https://github.com/sourcemeta/jsontoolkit) - Bibliothèque C++20 pour JSON, JSON Pointer, JSON Schema et JSONL. [AGPL/commerciale]
* [jute](https://github.com/amir-s/jute) - Analyseur JSON C++ très simple. [Domaine public]
* [libjson](https://github.com/vincenthz/libjson) - Bibliothèque C d’analyse et d’impression JSON, facile à intégrer à tout modèle. [LGPL]
* [libjson](https://sourceforge.net/projects/libjson/) - Bibliothèque JSON légère. [?]
* [LIBUCL](https://github.com/vstakhov/libucl) :zap: - Analyseur de bibliothèque de configuration universelle. [BSD-2-Clause]
* [meojson](https://github.com/MistEO/meojson) - Moteur de sérialisation JSON/JSON5 C++ nouvelle génération : aucune dépendance, en-tête unique, tout le potentiel de JSON. [MIT]
* [parson](https://github.com/kgabis/parson) - Bibliothèque JSON légère écrite en C. [MIT]
* [PicoJSON](https://github.com/kazuho/picojson) - Analyseur-sérialiseur JSON C++ uniquement composé d’un fichier d’en-tête. [BSD]
* [qt-json](https://github.com/gaudecker/qt-json) - Classe simple d’analyse des données JSON en hiérarchie QVariant, et inversement. [GPLv3]
* [RapidJSON](https://github.com/miloyip/rapidjson) :zap: - Analyseur/générateur JSON rapide pour C++, doté d’API de style SAX et DOM. [MIT] [site web](https://rapidjson.org)
* [sajson](https://github.com/chadaustin/sajson) - Analyseur JSON C++11 léger et extrêmement performant. [MIT]
* [simdjson](https://github.com/lemire/simdjson) - Bibliothèque JSON extrêmement rapide, capable d’analyser des gigaoctets de JSON par seconde. [Apache-2.0]
* [Sonic-Cpp](https://github.com/bytedance/sonic-cpp) - Bibliothèque rapide de sérialisation et désérialisation JSON, accélérée par SIMD. [Apache-2.0]
* [taoJSON](https://github.com/taocpp/json) - Bibliothèque JSON C++ à en-tête unique et sans dépendances. [MIT]
* [ujson](https://bitbucket.org/awangk/ujson) - µjson est une petite bibliothèque JSON UTF-8 pour C++11. [MIT]
* [UltraJSON](https://github.com/ultrajson/ultrajson) - Décodeur et encodeur JSON ultra-rapide écrit en C. [BSD-3-Clause]
* [YAJL](https://github.com/lloyd/yajl) - Bibliothèque rapide d’analyse JSON en flux en C. [ISC]
* [yyjson](https://github.com/ibireme/yyjson) - Bibliothèque JSON hautes performances écrite en ANSI C. [MIT]
* [libdart](https://github.com/target/libdart) - Bibliothèque de manipulation JSON hautes performances, optimisée pour le réseau. [MIT]

## Journalisation

* [Abseil Logging](https://abseil.io/docs/cpp/guides/logging) - La bibliothèque de journalisation Abseil fournit des moyens d’écrire des messages de journal dans stderr, des fichiers ou d’autres destinations. [Apache-2.0]
* [Blackhole](https://github.com/3Hren/blackhole) - Framework de journalisation fondé sur les attributs, conçu pour être rapide, modulaire et hautement personnalisable. [MIT]
* [Boost.Log](https://github.com/boostorg/log) - Conçu pour être très modulaire et extensible. [Boost] [site web](https://boost.org/libs/log)
* [BqLog](https://github.com/Tencent/BqLog) - Système de journalisation léger et hautes performances, utilisé notamment dans « Honor of Kings ». [Apache-2.0]
* [fmtlog](https://github.com/MengRao/fmtlog) - Bibliothèque de journalisation performante de style fmtlib, avec une latence de quelques nanosecondes. [MIT]
* [G3log](https://github.com/KjellKod/g3log) - Enregistreur asynchrone avec destinations dynamiques. [Domaine public]
* [glog](https://github.com/google/glog) - Implémentation C++ du module de journalisation Google.
* [haclog](https://github.com/MuggleWei/haclog) - Bibliothèque de journalisation C pure extrêmement rapide. [MIT]
* [Log4cpp](https://log4cpp.sourceforge.net/) - Bibliothèque de classes C++ permettant une journalisation flexible dans des fichiers, syslog, IDSA et d’autres destinations. [LGPL]
* [log4cplus](https://github.com/log4cplus/log4cplus) - API de journalisation C++ facile à utiliser, offrant un contrôle flexible, sécurisé pour les threads et arbitrairement granulaire de la gestion et de la configuration des journaux. [BSD et Apache2]
* [loguru](https://github.com/emilk/loguru) - Bibliothèque légère de journalisation C++. [Domaine public]
* [lwlog](https://github.com/ChristianPanov/lwlog) - Bibliothèque de journalisation C++17 synchrone et asynchrone très rapide. [MIT]
* [ng-log](https://github.com/ng-log/ng-log) - Bibliothèque C++14 de journalisation au niveau applicatif. [BSD-3-Clause]
* [plog](https://github.com/SergiusTheBest/plog) - Journalisation C++ portable et simple, en moins de 1 000 lignes de code. [MPL2]
* [reckless](https://github.com/mattiasflodin/reckless) - Bibliothèque C++ de journalisation asynchrone, à faible latence et haut débit. [MIT]
* [spdlog](https://github.com/gabime/spdlog) - Bibliothèque de journalisation C++ extrêmement rapide, à en-tête unique.
* [templog](https://www.templog.org/) - Bibliothèque C++ très compacte et légère pour ajouter la journalisation aux applications. [Boost]
* [P7Baical](https://baical.net/p7.html) - Bibliothèque open source multiplateforme d’envoi rapide de télémétrie et de traces, avec une utilisation minimale du CPU et de la mémoire. [LGPL]
* [Quill](https://github.com/odygrd/quill) - Bibliothèque de journalisation asynchrone multiplateforme à faible latence. [MIT]
* [logfault](https://github.com/jgaa/logfault) - Bibliothèque C++ de journalisation à en-tête unique, simple, élégante et efficace. [MIT]

## Apprentissage automatique

* [Caffe](https://github.com/BVLC/caffe) - Framework rapide de réseaux neuronaux. [BSD]
* [catboost](https://github.com/catboost/catboost) - Bibliothèque de gradient boosting sur arbres de décision rapide, évolutive et hautes performances. [Apache2]
* [CCV](https://github.com/liuliu/ccv) - Bibliothèque de vision par ordinateur en C, avec cache et cœur moderne. [BSD]
* [darknet](https://github.com/pjreddie/darknet) - Framework de réseaux neuronaux open source écrit en C et CUDA. [Domaine public] [site web](https://pjreddie.com/darknet/)
* [Dlib](https://github.com/davisking/dlib) :zap: - Boîte à outils C++11 moderne d’apprentissage automatique, vision par ordinateur, optimisation numérique et apprentissage profond. [Boost] [site web](https://dlib.net/)
* [FAISS](https://github.com/facebookresearch/faiss) - Bibliothèque de recherche efficace par similarité et de regroupement de vecteurs denses. [MIT]
* [FANN](https://github.com/libfann/fann) - Bibliothèque rapide de réseaux neuronaux artificiels en C. [LGPL]
* [Fido](https://github.com/FidoProject/Fido) - Bibliothèque C++ d’apprentissage automatique hautement modulaire pour l’électronique embarquée et la robotique. [MIT] [site web](https://fidoproject.github.io/)
* [flashlight](https://github.com/facebookresearch/flashlight) - Bibliothèque d’apprentissage automatique rapide et flexible de Facebook AI Research, entièrement écrite en C++ et fondée sur la bibliothèque de tenseurs ArrayFire. [BSD-3-Clause] [site web](https://fl.readthedocs.io/en/latest/)
* [ggml](https://github.com/ggerganov/ggml) - Bibliothèque de tenseurs pour l’apprentissage automatique, prenant en charge la quantification 16 et 4 bits. [MIT]
* [libsvm](https://github.com/cjlin1/libsvm) - Bibliothèque simple, facile à utiliser et efficace pour les machines à vecteurs de support. [BSD-3-Clause] [site web](https://www.csie.ntu.edu.tw/~cjlin/libsvm/)
* [m2cgen](https://github.com/BayesWitnesses/m2cgen) - Outil CLI transcompilant les modèles classiques d’apprentissage automatique entraînés en code C natif, sans dépendances. [MIT]
* [MeTA](https://github.com/meta-toolkit/meta) - Boîte à outils moderne de science des données en C++. [MIT]
* [Minerva](https://github.com/dmlc/minerva) - Système rapide et flexible d’apprentissage profond. [Apache2]
* [mlpack](https://github.com/mlpack/mlpack) - Bibliothèque C++ évolutive d’apprentissage automatique. [LGPLv3] [site web](https://www.mlpack.org/)
* [ncnn](https://github.com/Tencent/ncnn) - Framework de calcul d’inférence de réseaux neuronaux hautes performances, optimisé pour les plateformes mobiles. [BSD]
* [OpenCV](https://github.com/Itseez/opencv) :zap: - Bibliothèque open source de vision par ordinateur. [BSD] [site web](https://opencv.org/)
* [oneDAL](https://github.com/oneapi-src/oneDAL) - Puissante bibliothèque d’apprentissage automatique accélérant l’analyse des mégadonnées. [Apache]
* [ONNX runtime](https://github.com/microsoft/onnxruntime) - Bibliothèque C et C++ d’entraînement et d’inférence de modèles ONNX. ONNX est une norme vers laquelle convertir les modèles d’IA, quelle que soit la bibliothèque d’entraînement. [MIT] [site web](https://onnxruntime.ai/)
* [Recommender](https://github.com/GHamrouni/Recommender) - Bibliothèque C de recommandations de produits fondée sur le filtrage collaboratif (CF). [BSD]
* [RNNLIB](https://github.com/szcom/rnnlib) - Bibliothèque de réseaux neuronaux récurrents pour les problèmes d’apprentissage séquentiel. [GPLv3]
* [SHOGUN](https://github.com/shogun-toolbox/shogun) - Boîte à outils d’apprentissage automatique Shogun. [GPLv3]
* [sofia-ml](https://code.google.com/p/sofia-ml/) - Suite d’algorithmes rapides et incrémentiels d’apprentissage automatique. [Apache2]
* [USearch](https://github.com/unum-cloud/usearch) - Bibliothèque rapide de recherche et de regroupement de vecteurs et de chaînes. [Apache2]
* [VLFeat](https://github.com/vlfeat/vlfeat) - Bibliothèque open source mettant en œuvre des algorithmes populaires de vision par ordinateur, notamment la compréhension d’images et l’extraction/mise en correspondance de caractéristiques locales. [BSD-2-Clause] [site web](https://www.vlfeat.org/)
* [xgboost](https://github.com/dmlc/xgboost) - Bibliothèque évolutive, portable et distribuée de gradient boosting (GBDT, GBRT ou GBM) pour Python, R, Java, Scala, C++ et d’autres langages. Fonctionne sur une seule machine, Hadoop, Spark, Flink et DataFlow. [Apache2]
* [TensorComprehensions](https://github.com/facebookresearch/TensorComprehensions) - Bibliothèque C++ complète synthétisant automatiquement des noyaux d’apprentissage automatique hautes performances. [Apache-2.0]
* [kann](https://github.com/attractivechaos/kann) - Bibliothèque C légère de réseaux neuronaux artificiels. [MIT]

## Mathématiques

* [Apophenia](https://github.com/b-k/apophenia) - Bibliothèque C de calcul statistique et scientifique. [GPL2]
* [Armadillo](https://gitlab.com/conradsnicta/armadillo-code) - Bibliothèque C++ rapide d’algèbre linéaire et de calcul scientifique. [Apache2] [site web](https://arma.sourceforge.net/)
* [autodiff](https://github.com/autodiff/autodiff) - Bibliothèque C++ moderne, rapide et expressive de différentiation automatique. [MIT] [site web](https://autodiff.github.io)
* [blaze](https://bitbucket.org/blaze-lib/blaze) - Bibliothèque mathématique C++ hautes performances pour le calcul dense et creux. [BSD]
* [Boost.Multiprecision](https://github.com/boostorg/multiprecision) - Fournit en C++ des types entiers, rationnels et à virgule flottante de plage/précision étendue, à en-tête unique ou avec les backends GMP/MPFR/LibTomMath. [Boost] [site web](https://boost.org/libs/multiprecision)
* [ceres-solver](https://ceres-solver.org/) - Bibliothèque C++ de Google pour modéliser et résoudre de grands problèmes complexes de moindres carrés non linéaires. [BSD]
* [CGAL](https://github.com/CGAL/cgal) - Collection d’algorithmes géométriques efficaces et fiables. [LGPL et GPL] [site web](https://www.cgal.org/)
* [cml](https://github.com/demianmnave/CML) - Bibliothèque mathématique configurable. [Boost]
* [CNL](https://github.com/johnmcfarlane/cnl/) - Bibliothèque numérique compositionnelle pour C++. [Boost]
* [DirectXMath](https://github.com/microsoft/DirectXMath) - Bibliothèque d’algèbre linéaire C++ SIMD entièrement intégrée, destinée aux jeux et applications graphiques.
* [Dlib](https://github.com/davisking/dlib) :zap: - Boîte à outils C++11 moderne d’apprentissage automatique, vision par ordinateur, optimisation numérique et apprentissage profond. [Boost] [site web](https://dlib.net/)
* [Eigen](https://eigen.tuxfamily.org/) - Bibliothèque C++ de haut niveau, composée d’en-têtes modèles, pour l’algèbre linéaire, les opérations sur matrices et vecteurs, les solveurs numériques et les algorithmes associés. [MPL2]
* [ExprTk](https://www.partow.net/programming/exprtk/) - ExprTk, boîte à outils C++ d’expressions mathématiques, est un analyseur et moteur d’évaluation à l’exécution, simple à utiliser, facile à intégrer et extrêmement efficace. [MIT]
* [Fastor](https://github.com/romeric/Fastor) - Framework léger et hautes performances d’algèbre tensorielle pour le C++ moderne. [MIT]
* [geo-utils-cpp](https://github.com/gistrec/geo-utils-cpp) - Bibliothèque C++17 à en-tête unique de géométrie sphérique latitude/longitude : distance, azimut, surface, appartenance d’un point à un polygone. [Apache2]
* [Geometric Tools](https://www.geometrictools.com) - Bibliothèque C++ de calcul en mathématiques, graphisme, analyse d’images et physique. [Boost] [site web](https://www.geometrictools.com)
* [GLM](https://github.com/g-truc/glm) - Bibliothèque mathématique C++ à en-tête unique, compatible et interopérable avec les mathématiques GLSL d’OpenGL. [MIT] [site web](https://glm.g-truc.net/)
* [GMTL](https://ggt.sourceforge.net/) - Graphics Math Template Library est une collection d’outils implémentant de manière généralisée des primitives graphiques. [GPL2]
* [GMP](https://gmplib.org/) - Bibliothèque C d’arithmétique en précision arbitraire sur les entiers signés, nombres rationnels et nombres à virgule flottante. [LGPL3 et GPL2]
* [Klein](https://github.com/jeremyong/klein) - Bibliothèque C++17 rapide d’algèbre géométrique optimisée SIMD pour les projections de points, lignes et plans, intersections, jointures, mouvements de corps rigides, etc. [MIT] [site web](https://jeremyong.com/klein)
* [libfixmath](https://github.com/PetteriAimonen/libfixmath) - Bibliothèque multiplateforme de mathématiques en virgule fixe. [MIT]
* [linalg.h](https://github.com/sgorsten/linalg) - Bibliothèque C++ de mathématiques sur vecteurs courts, dans un seul en-tête et du domaine public. [Unlicense]
* [MATIO](https://github.com/tbeu/matio) - Bibliothèque d’E/S de fichiers MAT de MATLAB. [BSD-2-Clause] [site web](https://sourceforge.net/projects/matio/)
* [MatX](https://github.com/NVIDIA/MatX) - Bibliothèque C++17 de calcul numérique accéléré par GPU, avec une syntaxe proche de MATLAB/Python. [BSD 3-clause]
* [mexce](https://github.com/imakris/mexce) - Compilateur JIT sans dépendances, à en-tête unique, d’expressions mathématiques scalaires, générant du code machine x87 FPU optimisé. [BSD]
* [MIRACL](https://github.com/CertiVox/MIRACL) - Bibliothèque cryptographique d’arithmétique entière et rationnelle multiprécision. [AGPL]
* [NumCpp](https://github.com/dpilger26/NumCpp) - Implémentation C++ à modèles, à en-tête unique, de la bibliothèque Python NumPy. [MIT]
* [NumKong](https://github.com/ashvardanian/NumKong) - Distances, produits scalaires, opérations matricielles et noyaux géospatiaux/géométriques accélérés SIMD pour 16 types numériques. [Apache2] (anciennement SimSIMD)
* [OMath](https://github.com/orange-cpp/omath) - Bibliothèque mathématique généraliste moderne et multiplateforme, écrite en C++23, adaptée au développement de triches et de jeux. [ZLIB]
* [muparser](https://beltoforion.de/en/muparser) - Bibliothèque C++ extensible et hautes performances d’analyse d’expressions mathématiques. [MIT]
* [LibTomMath](https://github.com/libtom/libtommath) - Bibliothèque portable, libre et open source d’entiers multiprécision de théorie des nombres, entièrement écrite en C. [Domaine public et WTFPL] [site web](https://www.libtom.net/)
* [linmath.h](https://github.com/datenwolf/linmath.h) - Bibliothèque d’algèbre linéaire compacte destinée à la programmation graphique. [WTFPL]
* [lp_solve](https://sourceforge.net/projects/lpsolve) - Bibliothèque de formulation et de résolution de problèmes de programmation linéaire. [LGPL] [site web](https://lpsolve.sourceforge.net)
* [OpenBLAS](https://github.com/xianyi/OpenBLAS) - Bibliothèque BLAS optimisée, fondée sur la version BSD de GotoBLAS2 1.13. [BSD 3-clause] [site web](https://www.openblas.net/)
* [PCG-rand](https://www.pcg-random.org/) - PCG est une famille d’algorithmes simples, rapides, peu gourmands en espace et statistiquement performants pour générer des nombres aléatoires. Contrairement à nombre de générateurs généralistes, ils sont aussi difficiles à prédire. [Apache]
* [QuantLib](https://github.com/lballabio/quantlib) - Bibliothèque libre et open source de finance quantitative. [BSD modifiée] [site web](https://quantlib.org/)
* [sebsjames/maths](https://github.com/sebsjames/maths) - Bibliothèque mathématique C++20 à modèles, privilégiant la simplicité et le plaisir d’utilisation pour les développeurs (utilisée dans [mathplot](https://github.com/sebsjames/mathplot)). [Apache2] [site web](https://sebsjames.github.io/maths/)
* [StatsLib](https://github.com/kthohr/stats) - Bibliothèque C++ à en-tête unique de fonctions de distributions statistiques. [Apache2] [site web](https://www.kthohr.com/statslib.html)
* [SymEngine](https://github.com/symengine/symengine) - Bibliothèque rapide de manipulation symbolique, réécriture en C++ du cœur de SymPy. [MIT]
* [TinyExpr](https://github.com/codeplea/tinyexpr) - Bibliothèque C d’analyse et d’évaluation d’expressions mathématiques sous forme de chaînes. [zlib]
* [Vc](https://github.com/VcDevel/Vc) - Classes de vecteurs SIMD pour C++. [BSD]
* [Versor](https://versor.mat.ucsb.edu/) - Bibliothèque C++ générique et rapide d’algèbres géométriques, notamment euclidiennes, projectives, conformes et de l’espace-temps.
* [Wagyu](https://github.com/mapbox/wagyu) - Bibliothèque généraliste d’opérations géométriques d’union, d’intersection, de différence et de différence symétrique. [mapbox-wagyu original]
* [wide-integer](https://github.com/ckormanyos/wide-integer) - Implémente un modèle C++ générique pour uint128_t, uint256_t, uint512_t, uint1024_t, etc. [BSL-1.0]
* [Wykobi](https://www.wykobi.com) - Bibliothèque C++ de routines de géométrie computationnelle 2D/3D efficaces, robustes et faciles à utiliser. [MIT]
* [xtensor](https://github.com/xtensor-stack/xtensor) - Bibliothèque C++14 d’analyse numérique avec expressions de tableaux multidimensionnels, inspirée de la syntaxe NumPy. [BSD 3-clause] [site web](https://xtensor-stack.github.io/xtensor)
* [universal](https://github.com/stillwater-sc/universal) - Bibliothèque C++14 à en-tête unique implémentant l’arithmétique posit arbitraire. Le système numérique posit utilise une virgule flottante à précision progressive, plus efficace que celle d’IEEE, permettant une science computationnelle reproductible. [Licence MIT]
* [utl::random](https://github.com/DmitriBogdanov/UTL/blob/master/docs/module_random.md) - Bibliothèque C++17 à en-tête unique de génération aléatoire rapide pour les simulations Monte-Carlo et le développement de jeux. [MIT]
* [XAD](https://github.com/auto-differentiation/xad) - Puissante différentiation automatique pour C++. [AGPL] [site web](https://auto-differentiation.github.io/)
* [geogram](https://github.com/BrunoLevy/geogram) - Bibliothèque de programmation d’algorithmes géométriques. [BSD-3-Clause]
* [std-simd](https://github.com/VcDevel/std-simd) - Implémentation portable de std::experimental::simd pour C++. [BSD-3-Clause]
* [libdivide](https://github.com/ridiculousfish/libdivide) - Division entière optimisée en C/C++ au moyen de libdivide. [zlib] [site web](https://libdivide.com)
* [fpsqrt](https://github.com/chmike/fpsqrt) - Racine carrée rapide en virgule fixe et flottante en C. [MIT]
* [fastmod](https://github.com/lemire/fastmod) - Bibliothèque C/C++ rapide à en-tête unique de calcul des restes et réductions modulaires. [Apache-2.0]
* [Spectra](https://github.com/yixuan/spectra) - Bibliothèque C++ de problèmes de valeurs propres à grande échelle, fondée sur Eigen. [MPL2] [site web](https://spectralib.org)
* [FastNoiseSIMD](https://github.com/Auburns/FastNoiseSIMD) - Bibliothèque de fonctions de génération de bruit accélérées par SIMD. [MIT]

## Allocation mémoire

* [Boehm GC](https://github.com/ivmai/bdwgc) - Ramasse-miettes conservateur pour C et C++. [semblable à X11] [site web](https://www.hboehm.info/gc/)
* [C Smart Pointers](https://github.com/Snaipe/libcsptr) - Pointeurs intelligents pour le langage de programmation C (GNU). [MIT]
* [Hoard](https://github.com/emeryberger/Hoard) - Malloc rapide, évolutif et économe en mémoire pour Linux, Windows et Mac. [Apache-2.0] [site web](https://hoard.org/)
* [jemalloc](https://github.com/jemalloc/jemalloc) - Implémentation généraliste de malloc(3) privilégiant la prévention de la fragmentation et la prise en charge évolutive de la concurrence. [BSD] [site web](https://jemalloc.net/)
* [memory](https://github.com/foonathan/memory) - Bibliothèque C++ d’allocateurs mémoire compatible STL. [ZLib]
* [memory-allocators](https://github.com/mtrebi/memory-allocators) - Allocateurs mémoire personnalisés améliorant les performances de l’allocation dynamique. [MIT]
* [mimalloc](https://github.com/microsoft/mimalloc) - Allocateur généraliste compact aux excellentes performances. [MIT]
* [rpmalloc](https://github.com/mjansson/rpmalloc) - Allocateur mémoire C multiplateforme, sans verrou, avec cache de threads et alignement sur 16 octets. [Domaine public]
* [snmalloc](https://github.com/microsoft/snmalloc) - Allocateur hautes performances fondé sur le passage de messages. [MIT]
* [TCMalloc](https://github.com/google/tcmalloc) - Implémentation rapide et multithread de malloc par Google. [Apache-2.0] [site web](https://google.github.io/tcmalloc/)
* [buddy_alloc](https://github.com/spaskalev/buddy_alloc) - Allocateur mémoire buddy C à en-tête unique, avec coûts d’allocation bornés. [0BSD]
* [tgc](https://github.com/orangeduck/tgc) - Minuscule ramasse-miettes C écrit en environ 500 lignes de code. [BSD]
* [Mesh](https://github.com/plasma-umass/Mesh) - Allocateur mémoire réduisant automatiquement l’empreinte mémoire des applications C/C++. [Apache-2.0]
* [rpmalloc](https://github.com/rampantpixels/rpmalloc) - Allocateur multiplateforme du domaine public, sans verrou, avec cache de threads et alignement mémoire sur 16 octets. [Domaine public]
* [TLSF](https://github.com/mattconte/tlsf) - Allocateur mémoire Two-Level Segregated Fit, généraliste et dynamique. [BSD]

## Multimédia

* [GStreamer](https://gstreamer.freedesktop.org/) - Bibliothèque de construction de graphes de composants de traitement multimédia. [LGPL]
* [icey](https://github.com/nilstate/icey) - Pile multimédia temps réel et alternative légère à libwebrtc pour l’ingestion RTSP, le traitement des médias, la signalisation, TURN et la diffusion dans le navigateur, écrite en C++20. [LGPL v2.1+]
* [libass](https://github.com/libass/libass) - Moteur portable de rendu des sous-titres au format ASS/SSA. [ISC]
* [libav](https://github.com/libav/libav) - Collection de bibliothèques et d’outils de traitement des contenus multimédias, comme l’audio, la vidéo, les sous-titres et leurs métadonnées. [LGPL v2.1+ et autres] [site web](https://www.libav.org/)
* [LIVE555 Streaming Media](https://www.live555.com/liveMedia/) - Bibliothèque de diffusion multimédia utilisant des protocoles ouverts standard (RTP/RTCP, RTSP, SIP). [LGPL]
* [libVLC](https://wiki.videolan.org/LibVLC) - Framework multimédia libVLC (SDK VLC). [GPL]
* [MediaInfoLib](https://github.com/MediaArea/MediaInfoLib) - Affichage unifié pratique des données techniques et balises les plus pertinentes des fichiers vidéo et audio. [BSD]
* [QtAv](https://github.com/wang-bin/QtAV) - Framework de lecture multimédia fondé sur Qt et FFmpeg, facilitant la création d’un lecteur. [LGPL] [site web](https://wang-bin.github.io/QtAV/)
* [SDL](https://github.com/libsdl-org/SDL) :zap: - Simple DirectMedia Layer. [zlib] [site web](https://libsdl.org)
* [SFML](https://github.com/SFML/SFML) :zap: - Bibliothèque multimédia simple et rapide. [zlib] [site web](https://www.sfml-dev.org/)
* [TagLib](https://github.com/taglib/taglib) - Bibliothèque de lecture et de modification des métadonnées de plusieurs formats audio populaires. [LGPL/MPL] [site web](https://taglib.org/)

## Réseaux

* [ada](https://github.com/ada-url/ada) - Analyseur d’URL rapide, conforme à WHATWG et écrit en C++ moderne. [Apache-2.0/MIT]
* [ACE](https://www.dre.vanderbilt.edu/~schmidt/ACE.html) - Boîte à outils de programmation réseau orientée objet en C++. [?MIT?]
* [AGENT++](https://www.agentpp.com/api/cpp/agent_pp.html) - Framework C++ fournissant un moteur de protocole et répartiteur SNMP v1/2c/3 complet, en trois langues, pour développer des agents SNMP. [Apache-2.0]
* [Boost.Asio](https://github.com/boostorg/asio) :zap: - Bibliothèque C++ multiplateforme de programmation réseau et d’E/S bas niveau. [Boost] [site web](https://boost.org/libs/asio)
* [Boost.Beast](https://github.com/boostorg/beast) :zap: - HTTP et WebSocket fondés sur Boost.Asio en C++11. [Boost] [site web](https://www.boost.org/libs/beast)
* [Breep](https://github.com/Organic-Code/Breep) - Bibliothèque pair-à-pair C++14 de haut niveau, pilotée par événements. [EUPL-1.1 (approuvée par l’OSI)]
* [C++ REST SDK](https://github.com/Microsoft/cpprestsdk) - SDK REST C++, anciennement nommé Casablanca. [Apache2]
* [CZMQ](https://github.com/zeromq/czmq) - Liaison C de haut niveau pour ØMQ. [MPL2] [site web](https://czmq.zeromq.org/)
* [Restbed](https://github.com/corvusoft/restbed) - Framework RESTful asynchrone C++11. [AGPL]
* [Restinio](https://github.com/Stiffstream/restinio) - Bibliothèque C++14 à en-tête unique fournissant un serveur HTTP/WebSocket embarqué. [BSD]
* [c-ares](https://github.com/c-ares/c-ares) - Bibliothèque C de requêtes DNS asynchrones. [MIT]
* [cofetch](https://github.com/SSARCandy/cofetch) - Client HTTP asynchrone chaînable, fondé sur l’interface multi de libcurl et ASIO. Callbacks, coroutines et futures dans une même implémentation. [MIT]
* [cpp-httplib](https://github.com/yhirose/cpp-httplib) - Bibliothèque serveur HTTP/HTTPS C++11 à en-tête unique dans un seul fichier. [MIT]
* [cpp-netlib](https://cpp-netlib.org/) - Collection de bibliothèques open source de programmation réseau de haut niveau. [Boost]
* [cpp-netlib/uri](https://github.com/cpp-netlib/uri) - Bibliothèque C++ d’analyse et de construction d’URI, compatible avec les RFC 3986 et 3987. [Boost]
* [CppServer](https://github.com/chronoxor/CppServer) - Bibliothèque C++ ultra-rapide et à faible latence de serveurs et clients de sockets asynchrones, prenant en charge TCP, SSL, UDP, HTTP, HTTPS et WebSocket, et résolvant le problème des 10 000 connexions. [MIT]
* [cpr](https://github.com/whoshuu/cpr) - Bibliothèque moderne de requêtes HTTP C++ avec une interface simple mais puissante, inspirée du module Python Requests. [MIT] [site web](https://docs.libcpr.org)
* [curlcpp](https://github.com/JosephP91/curlcpp) - Wrapper C++ orienté objet de CURL (libcurl). [MIT]
* [curlpp](https://github.com/jpbarrette/curlpp) - Wrapper C++ de libcURL. [MIT]
* [DPDK](https://github.com/DPDK/dpdk) - Data Plane Development Kit : bibliothèques et pilotes de traitement rapide des paquets. [BSD-3-Clause et GPL-2.0] [site web](https://www.dpdk.org/)
* [ENet](https://github.com/lsalzman/enet) - Bibliothèque réseau UDP fiable. [MIT] [site web](https://enet.bespin.org/)
* [evpp](https://github.com/Qihoo360/evpp) - Réseau C++ hautes performances avec les protocoles TCP/UDP/HTTP. [BSD]
* [FTP client for C++](https://github.com/embeddedmz/ftpclient-cpp) - Client C++ pour envoyer des requêtes FTP. [MIT]
* [H2O](https://github.com/h2o/h2o) - Serveur HTTP optimisé prenant en charge HTTP/1.x et HTTP/2, également utilisable comme bibliothèque. [MIT]
* [KCP](https://github.com/skywind3000/kcp/blob/master/README.en.md) - Protocole ARQ rapide et fiable aidant les applications à réduire la latence réseau. [MIT]
* [libcurl](https://curl.haxx.se/libcurl/) - Bibliothèque de transfert de fichiers multiprotocole. [MIT/licence dérivée de X]
* [libhttpserver](https://github.com/etr/libhttpserver) - Bibliothèque C++ de création d’un serveur HTTP REST embarqué, entre autres. [LGPL2.1]
* [Libmicrohttpd](https://www.gnu.org/software/libmicrohttpd/) - Petite bibliothèque C GNU facilitant l’exécution d’un serveur HTTP au sein d’une autre application. [LGPL v2.1+]
* [libpcap](https://github.com/the-tcpdump-group/libpcap) - Bibliothèque C/C++ portable de capture du trafic réseau. [BSD] [site web](https://www.tcpdump.org/)
* [libquic](https://github.com/devsisters/libquic) - Bibliothèque du protocole QUIC extraite de l’implémentation QUIC de Chromium. [BSD]
* [librdkafka](https://github.com/edenhill/librdkafka) - Bibliothèque cliente Apache Kafka pour C et C++. [BSD-2-Clause]
* [libwebsockets](https://github.com/warmcat/libwebsockets) - Implémentation WebSocket légère en C pur fournissant des bibliothèques clientes et serveur. [LGPL2.1 + exception de liaison statique] [site web](https://libwebsockets.org/)
* [Lithium](https://matt-42.github.io/lithium/) - Créez des serveurs HTTP C++ hautes performances sans être expert en C++. [MIT]
* [lwIP](https://savannah.nongnu.org/projects/lwip/) - Pile TCP/IP légère. [BSD modifiée]
* [mailio](https://github.com/karastojko/mailio) - Bibliothèque C++ multiplateforme pour le format MIME et les protocoles SMTP, POP3 et IMAP. [BSD]
* [Mongoose](https://github.com/cesanta/mongoose) - Serveur web extrêmement léger. [GPL2]
* [MQTT-C](https://github.com/LiamBindle/MQTT-C) - Client MQTT C portable pour systèmes embarqués et ordinateurs. [MIT] [site web](https://liambindle.ca/MQTT-C)
* [mTCP](https://github.com/mtcp-stack/mtcp) - Pile TCP hautement évolutive en espace utilisateur pour systèmes multicœurs. [BSD modifiée]
* [Muduo](https://github.com/chenshuo/muduo) - Bibliothèque réseau C++ non bloquante pour serveurs multithread sous Linux. [BSD]
* [nghttp2](https://github.com/nghttp2/nghttp2) - Bibliothèque C HTTP/2. [MIT] [site web](https://nghttp2.org/)
* [nghttp3](https://github.com/ngtcp2/nghttp3) - Bibliothèque HTTP/3 écrite en C. [MIT] [site web](https://nghttp2.org/nghttp3/)
* [Onion](https://github.com/davidmoreno/onion) - Bibliothèque de serveur HTTP C légère et facile à utiliser. [Apache2/GPL2]
* [OpenDDS](https://github.com/objectcomputing/OpenDDS) - Implémentation C++ open source du Data Distribution Service (DDS) de l’Object Management Group (OMG). [Apache2]
* [PF_RING™](https://github.com/ntop/PF_RING) - Framework de traitement rapide des paquets. [LGPL-2.1] [site web](https://www.ntop.org/products/packet-capture/pf_ring/)
* [PicoHTTPParser](https://github.com/h2o/picohttpparser) - Analyseur de requêtes/réponses HTTP minuscule, élémentaire et rapide. [MIT]
* [POCO](https://github.com/pocoproject) :zap: - Bibliothèques de classes et frameworks C++ pour créer des applications réseau et Internet fonctionnant sur ordinateur, serveur, mobile et systèmes embarqués. [Boost] [site web](https://pocoproject.org/)
* [Proxygen](https://github.com/facebook/proxygen) - Collection de bibliothèques HTTP C++ de Facebook, dont un serveur HTTP facile à utiliser. [BSD]
* [RedPanda](https://github.com/redpanda-data/redpanda) - Plateforme de données en flux pour développeurs, compatible avec l’API Kafka et dix fois plus rapide. [BSL]
* [RakNet](https://github.com/OculusVR/RakNet) - Moteur réseau C++ open source et multiplateforme pour développeurs de jeux. [BSD]
* [restclient-cpp](https://github.com/mrtazz/restclient-cpp) - Client REST simple pour C++, utilisant libcurl pour les requêtes HTTP. [MIT]
* [Seasocks](https://github.com/mattgodbolt/seasocks) - Serveur web C++ simple, compact et intégrable, avec prise en charge de WebSockets. [BSD]
* [SNMP++](https://www.agentpp.com/api/cpp/snmp_pp.html) - API C++ prenant en charge SNMP v1/2c/v3. [Licence permissive personnalisée]
* [tlse](https://github.com/eduardsui/tlse) - Implémentation TLS 1.2/1.3 dans un seul fichier C, utilisant tomcrypt comme bibliothèque cryptographique. [BSD-2-Clause]
* [TQUIC](https://github.com/tencent/tquic) - Bibliothèque QUIC hautes performances, légère et multiplateforme, exposée en C et C++. [Apache2]
* [Tufão](https://github.com/vinipsmaker/tufao) - Framework web asynchrone C++ construit sur Qt. [LGPL2]
* [uriparser](https://github.com/uriparser/uriparser) - Bibliothèque stricte d’analyse et de gestion des URI, conforme à la RFC 3986. [BSD-3-Clause]
* [uWebSockets](https://github.com/uNetworking/uWebSockets) - µWS est l’une des implémentations de serveurs WebSocket et HTTP les plus légères, efficaces et évolutives disponibles. [Zlib]
* [UCall](https://github.com/unum-cloud/ucall) - Bibliothèque RPC hautes performances accélérée par SIMD sur io_uring. [Apache2]
* [WAFer](https://github.com/riolet/WAFer) - Plateforme logicielle ultra-légère fondée sur C pour les applications réseau et côté serveur évolutives, comme node.js pour les programmeurs C. [GPL2]
* [Wangle](https://github.com/facebook/wangle) - Framework d’applications client/serveur permettant de créer des services C++ modernes asynchrones et pilotés par événements. [Apache-2.0]
* [wdt](https://github.com/facebook/wdt) - Bibliothèque intégrable (et outil en ligne de commande) conçue pour transférer des données entre deux systèmes aussi rapidement que possible via plusieurs connexions TCP. [BSD-3-Clause]
* [WebSocket++](https://github.com/zaphoyd/websocketpp) - Bibliothèque cliente/serveur WebSocket fondée sur C++/Boost.Asio. [BSD]
* [wspp](https://github.com/pinwhell/wspp) - Bibliothèque WebSocket moderne ws/wss, cliente et serveur, sans dépendances et dans un seul en-tête. [MIT]
* [PcapPlusPlus](https://github.com/seladb/PcapPlusPlus) - Framework multiplateforme C++ d’écoute réseau, d’analyse et de création de paquets. [Unlicense]
* [ZeroMQ](https://github.com/zeromq/libzmq) - Bibliothèque de communication asynchrone rapide et modulaire. [LGPL3/MPL2] [site web](https://zeromq.org/)
* [Zyre](https://github.com/zeromq/zyre) - Mise en cluster de réseau local pour applications pair-à-pair. [MPL2]
* [easyhttpcpp](https://github.com/sony/easyhttpcpp) - Bibliothèque cliente HTTP multiplateforme de Sony, avec mise en cache. [MIT]
* [GameNetworkingSockets](https://github.com/ValveSoftware/GameNetworkingSockets) - Messages fiables et non fiables sur UDP par Valve, avec API orientée connexion (comme TCP). [BSD-3-Clause]
* [wepoll](https://github.com/piscisaureus/wepoll) - Wrapper Windows d’epoll fondé sur Winsock. [BSD-2-Clause]

## Office Open XML
*Bibliothèques d’analyse et de manipulation des fichiers xlsx, pptx, docx, etc.*

* [DuckX](https://github.com/amiremohamadi/DuckX) - Bibliothèque C++ de création et de modification de fichiers Microsoft Word (.docx). [MIT]
* [FreeXL](https://www.gaia-gis.it/fossil/freexl/index) - Bibliothèque open source d’extraction de données valides depuis des feuilles de calcul. [MPL/GPL-2/LGPL-2]
* [libxls](https://github.com/libxls/libxls) - Lecture de fichiers Excel binaires en C/C++. [BSD-2-Clause]
* [libxlsxwriter](https://github.com/jmcnamara/libxlsxwriter) - Bibliothèque C de création de fichiers Excel XLSX. [BSD-2-Clause] [site web](https://libxlsxwriter.github.io/)
* [OpenXLSX](https://github.com/troldal/OpenXLSX) - Bibliothèque C++ de lecture, écriture, création et modification de fichiers Microsoft Excel® (.xlsx). [BSD-3-Clause]
* [SimpleXlsxWriter](https://sourceforge.net/projects/simplexlsx/) - Rédacteur de fichiers XLSX pour Microsoft Excel 2007 et versions ultérieures. [zlib]
* [XLSX I/O](https://github.com/brechtsanders/xlsxio) - Bibliothèque C de lecture et d’écriture des fichiers .xlsx. [MIT]

## PDF
*Bibliothèques d’analyse et de manipulation de documents PDF.*

* [libharu](https://github.com/libharu/libharu) - Bibliothèque logicielle libre, open source et multiplateforme de génération de PDF. [zlib]
* [litePDF](https://litepdf.sourceforge.io) - Bibliothèque de création et de modification de documents PDF, utilisant les fonctions GDI via un contexte de périphérique pour dessiner le contenu des pages. [LGPL v3 et zlib]
* [MuPDF](https://mupdf.com/) - Visionneuse légère de PDF, XPS et livres électroniques. [AGPL/propriétaire]
* [PDF-Writer](https://github.com/galkahana/PDF-Writer) - Bibliothèque C++ hautes performances de création, modification et analyse de fichiers PDF. [Apache-2.0] [site web](https://www.pdfhummus.com/)
* [PDF4QT](https://github.com/JakubMelka/PDF4QT) - Boîte à outils PDF avec bibliothèque de rendu et de modification, visionneuse et outils en ligne de commande. [MIT] [site web](https://jakubmelka.github.io/)
* [pdfio](https://github.com/michaelrsweet/pdfio) - Bibliothèque C simple de lecture et d’écriture de fichiers PDF. [Apache-2] [site web](https://www.msweet.org/pdfio/)
* [PDFium](https://pdfium.googlesource.com/pdfium/) - Bibliothèque de génération et de rendu PDF. [BSD-3-Clause]
* [PoDoFo](https://podofo.sourceforge.net/) - Bibliothèque de manipulation du format de fichier PDF. [LGPL]
* [Poppler](https://poppler.freedesktop.org/) - Bibliothèque open source de rendu PDF multibackend, fondée sur le code de xpdf-3.0. [GPLv2/GPLv3]
* [QPDF](https://github.com/qpdf/qpdf) - Outil et bibliothèque C++ de transformations de fichiers PDF préservant leur contenu. [Apache-2.0] [site web](https://qpdf.sourceforge.io/)
* [Xpdf](https://www.xpdfreader.com/) - Visionneuse PDF et boîte à outils gratuites, avec notamment extraction de texte, conversion d’images et conversion HTML. [GPL v2/GPL v3]
* [DynaPDF](https://www.dynaforms.com/) - Bibliothèque facile à utiliser de génération de PDF. [Commerciale]

## Physique
*Moteurs de simulation dynamique*

* [Box2D](https://github.com/erincatto/Box2D) - Moteur physique 2D pour les jeux. [Type BSD]
* [Bullet](https://github.com/bulletphysics/bullet3) - Moteur physique 3D pour les jeux. [zlib] [site web](https://bulletphysics.org)
* [Chipmunk](https://github.com/slembcke/Chipmunk2D) - Bibliothèque physique 2D rapide et légère pour les jeux. [MIT] [site web](https://chipmunk-physics.net/)
* [Jolt Physics](https://github.com/jrouwe/JoltPhysics) - Bibliothèque de physique des corps rigides et de détection des collisions adaptée au multicœur. [MIT]
* [Kratos](https://github.com/KratosMultiphysics/Kratos) - Framework de création de logiciels de simulation parallèles et multidisciplinaires, axé sur la modularité, l’extensibilité et les performances. [BSD] [site web](https://www.cimne.com/kratos/)
* [LiquidFun](https://github.com/google/liquidfun) - Moteur physique 2D pour les jeux. [Type BSD]
* [Newton Dynamics](https://github.com/MADEAPPS/newton-dynamics) - Solution intégrée de simulation en temps réel d’environnements physiques. [zlib]
* [ODE](https://www.ode.org/) - Open Dynamics Engine, bibliothèque open source hautes performances de simulation de la dynamique des corps rigides. [BSD et LGPL]
* [ofxBox2d](https://github.com/vanderlin/ofxBox2d) - Wrapper openFrameworks pour Box2D. [Type BSD]
* [PhysX](https://github.com/NVIDIAGameWorks/PhysX-3.4) - SDK middleware open source de moteur physique temps réel, développé par Nvidia dans le cadre de la suite Nvidia GameWorks. [BSD-3-Clause]
* [PlayRho](https://github.com/louis-langholtz/PlayRho) - Moteur et bibliothèque de physique interactive. [Zlib]
* [Project Chrono](https://github.com/projectchrono/chrono) - Moteur open source de simulation multiphysique. [BSD-3-Clause] [site web](https://projectchrono.org/)
* [Quantum++](https://github.com/vsoftco/qpp) - Bibliothèque moderne de calcul quantique en C++11. [MIT]
* [QuarkPhysics](https://github.com/erayzesen/QuarkPhysics) - Moteur physique 2D des corps déformables et rigides. [MIT]
* [Simbody](https://github.com/simbody/simbody) - Bibliothèque C++ hautes performances de dynamique/physique multicorps pour simuler des systèmes biomécaniques et mécaniques articulés, tels que véhicules, robots et squelette humain. [Apache2]
* [SOFA](https://github.com/sofa-framework/sofa) - Framework open source de simulation temps réel, avec un accent sur la simulation médicale. [LGPL] [site web](https://www.sofa-framework.org)
* [tungsten](https://github.com/tunabrain/tungsten) - Moteur de rendu C++ hautes performances fondé sur la physique. [zlib]

## Réflexion

* [config-loader](https://github.com/netcan/config-loader) - Framework de réflexion statique C++17, de l’analyse des fichiers de configuration à la structure de données native. [MIT]
* [Better Enums](https://github.com/aantron/better-enums) - Énumérations réflexives (conversion en chaîne, itération), dans un seul en-tête. [BSD] [site web](https://aantron.github.io/better-enums/)
* [clReflect](https://github.com/Celtoys/clReflect) - Réflexion C++ à l’aide de clang. [MIT]
* [CPFG](https://github.com/cpgf/cpgf) - Bibliothèque C++03 de réflexion, de callbacks et de liaison de scripts. [Apache2]
* [CPP-Reflection](https://github.com/AustinBrunkhorst/CPP-Reflection) - Réflexion C++ à l’aide de clang. [MIT]
* [Easy Reflection](https://github.com/chocolacula/easy_reflection_cpp) - Solution simple et rapide de réflexion et de sérialisation, à la manière de Rust, Java ou Go. [Apache]
* [Enchantum](https://github.com/ZXShady/enchantum) - Bibliothèque C++17 moderne à en-tête unique de réflexion des énumérations à la compilation. [MIT]
* [Magic Enum](https://github.com/Neargye/magic_enum) - Bibliothèque C++17 à en-tête unique assurant la réflexion statique des énumérations (conversion chaîne/valeur, itération), pour tout type d’énumération sans macro ni code répétitif. [MIT]
* [magic_get](https://github.com/apolukhin/magic_get) - Méthodes de style std::tuple pour les types définis par l’utilisateur, sans macro ni code répétitif. [Boost]
* [meta](https://github.com/skypjack/meta) - Système C++ de réflexion à l’exécution à en-tête unique, non intrusif et sans macro. [MIT]
* [Nameof](https://github.com/Neargye/nameof) - Bibliothèque C++17 à en-tête unique fournissant macros et fonctions nameof pour obtenir le nom simple des variables, types, fonctions, macros et énumérations. [MIT]
* [REFLECT](https://github.com/qlibs/reflect) - Bibliothèque C++20 de réflexion statique. [MIT]
* [reflect-cpp](https://github.com/getml/reflect-cpp) - Sérialisation par réflexion, avec notamment la récupération automatique des noms de champs des structures. [MIT]
* [RTTR](https://github.com/rttrorg/rttr) - Bibliothèque C++11 de réflexion. [MIT] [site web](https://www.rttr.org)
* [simple_enum](https://github.com/arturbac/simple_enum) - Bibliothèque rapide, intuitive et sûre en matière de types, de prise en charge des énumérations C++. [BSL-1.0] [site web](https://arturbac.github.io/simple_enum/)
* [TSMP](https://github.com/fabian-jung/tsmp) - Bibliothèque C++20 de réflexion statique, sans intrusion ni macro. Elle utilise libclang pour extraire les données de réflexion du code source et les rend accessibles par spécialisation de modèles. [MIT]
* [visit_struct](https://github.com/cbeck88/visit_struct) - Petite bibliothèque de réflexion des champs de structures en C++. [Boost]
* [Refureku](https://github.com/jsoysouvanh/Refureku) - Bibliothèque C++17 de réflexion à l’exécution et de génération de code. [MIT]

## Expressions régulières

* [CppVerbalExpressions](https://github.com/VerbalExpressions/CppVerbalExpressions) - Les expressions régulières en C++ en toute simplicité. [MIT]
* [CTRE](https://github.com/hanickadot/compile-time-regular-expressions) - Comparateur d’expressions régulières PCRE (presque) compatible à la compilation. [MIT]
* [Hyperscan](https://github.com/intel/hyperscan) - Bibliothèque Intel hautes performances de correspondance de plusieurs expressions régulières, simultanément et en grand nombre (jusqu’à plusieurs dizaines de milliers), généralement utilisée dans une pile DPI. [BSD]
* [Oniguruma](https://github.com/kkos/oniguruma) - Bibliothèque moderne et flexible d’expressions régulières prenant en charge divers encodages de caractères. [BSD]
* [PCRE](https://pcre.org/) - Bibliothèque C d’expressions régulières inspirée des fonctionnalités de Perl. [BSD]
* [PCRE2](https://github.com/PCRE2Project/pcre2) - Ensemble de fonctions C implémentant la recherche de motifs par expressions régulières. [BSD] [site web](https://pcre2project.github.io/pcre2/)
* [PIRE](https://github.com/yandex/pire) - Bibliothèque Yandex d’expressions régulières incompatibles avec Perl. Peut être très rapide (plus de 400 Mo/s). [LPGL v3.0]
* [RE2](https://github.com/google/re2) - Bibliothèque logicielle d’expressions régulières utilisant une machine à états finis fondée sur la théorie des automates. [BSD-3-Clause]
* [SLRE](https://github.com/cesanta/slre) - Moteur d’expressions régulières ultra-léger pour C/C++. [GPLv2/propriétaire]
* [sregex](https://github.com/openresty/sregex) - Moteur de regex compatible Perl, fondé sur NFA/DFA sans retour arrière, pour faire correspondre de grands flux de données. [BSD]
* [SRELL](https://www.akenotsuki.com/misc/srell/en/) - Bibliothèque C++ de modèles d’expressions régulières prenant en charge Unicode. [BSD]
* [TRE](https://github.com/laurikari/tre) - Bibliothèque de correspondance approximative par regex et outil en ligne de commande agrep. [BSD-2-Clause]
* [Vectorscan](https://github.com/VectorCamp/vectorscan) - Fork portable de la bibliothèque hautes performances de correspondance d’expressions régulières. [BSD-3-Clause]
* [Pawn.Regex](https://github.com/urShadow/Pawn.Regex) - Plugin Pawn prenant en charge les expressions régulières au moyen de std::regex C++11. [MIT]

## Robotique

* [FusionCore](https://github.com/manankharwar/fusioncore) - Bibliothèque ROS 2 de fusion de capteurs par UKF, combinant GPS, IMU et odométrie des roues avec bruit adaptatif et rejet des valeurs aberrantes pour une localisation extérieure robuste. [Apache2]
* [MOOS-IvP](https://moos-ivp.org) - Ensemble de modules C++ open source fournissant l’autonomie aux plateformes robotiques, en particulier aux véhicules marins autonomes.
* [MRPT](https://www.mrpt.org/) - Boîte à outils de programmation de robots mobiles. [BSD]
* [PCL](https://github.com/PointCloudLibrary/pcl) - Point Cloud Library est un projet open source autonome et de grande ampleur pour le traitement d’images 2D/3D et de nuages de points. [BSD] [site web](https://www.pointclouds.org/)
* [Robotics Library (RL)](https://www.roboticslibrary.org/) - Bibliothèque C++ autonome de cinématique robotique, planification des mouvements et contrôle. [BSD]
* [RobWork](https://gitlab.com/sdurobotics/RobWork) - Collection de bibliothèques C++ de simulation et de contrôle des systèmes robotiques. [Apache2] [site web](https://www.robwork.dk/)
* [ROS](https://wiki.ros.org/) - Robot Operating System fournit des bibliothèques et outils aidant les développeurs à créer des applications robotiques. [BSD]
* [Ruckig](https://github.com/pantor/ruckig) - Génération de mouvements en temps réel pour les robots et machines. [MIT] [site web](https://ruckig.com)
* [YARP (Yet Another Robot Platform)](https://github.com/robotology/yarp) - Bibliothèque et boîte à outils d’interfaces de communication et de périphériques. [BSD-3-Clause] [site web](https://www.yarp.it/)
* [SPICE Toolkit](https://github.com/arturania/cspice) - Bibliothèque et boîte à outils de calcul des informations géométriques utilisées pour planifier et analyser les observations scientifiques de sondes spatiales robotisées. [MIT] [site web](https://naif.jpl.nasa.gov/naif/toolkit.html)

## Calcul scientifique

* [AMGCL](https://github.com/ddemidov/amgcl) - Bibliothèque C++ à en-tête unique de résolution de grands systèmes linéaires creux par multigrille algébrique. [MIT]
* [Au](https://github.com/aurora-opensource/au) - Bibliothèque d’unités physiques compatible C++14, sans dépendances et disponible en fichier unique. Privilégie la sécurité, l’accessibilité, les performances et l’expérience développeur. [Apache 2.0] [site web](https://aurora-opensource.github.io/au/main/)
* [FFTW](https://www.fftw.org/) - Bibliothèque C de calcul de la transformée de Fourier discrète en une ou plusieurs dimensions. [GPL]
* [GSL](https://www.gnu.org/software/gsl/) - Bibliothèque scientifique GNU. [GPL]
* [preCICE](https://github.com/precice/precice) - Bibliothèque de couplage pour simulations multiphysiques partitionnées (interaction fluide-structure, transfert de chaleur conjugué, etc.). [LGPL] [site web](https://precice.org/)
* [TileDB](https://github.com/TileDB-Inc/TileDB) - SGBD rapide de tableaux multidimensionnels denses et creux. [MIT] [site web](https://tiledb.io/)
* [Trilinos](https://github.com/trilinos/Trilinos) - Solveurs d’équations aux dérivées partielles hautes performances. [BSD]
* [Torch](https://github.com/torch/torch7) - Framework de calcul scientifique prenant largement en charge les algorithmes d’apprentissage automatique et privilégiant les GPU. [BSD-3-Clause] [site web](https://torch.ch/)
* [volesti](https://github.com/GeomScale/volesti) - Échantillonnage de grande dimension à partir de distributions tronquées, optimisation convexe et calcul de volumes.

## Scripting

* [AngelScript](https://www.angelcode.com/angelscript/) - Langage de script interprété/compilé orienté jeu. [zlib]
* [Boost.Python](https://github.com/boostorg/python) - Bibliothèque C++ assurant une interopérabilité fluide entre C++ et le langage Python. [Boost] [site web](https://boost.org/libs/python)
* [cppimport](https://github.com/tbenthompson/cppimport) - Importez directement des fichiers C++ depuis Python ! [MIT]
* [CppSharp](https://github.com/mono/CppSharp) - Outils et bibliothèques reliant les API C/C++ aux langages de haut niveau. [MIT]
* [ChaiScript](https://github.com/ChaiScript/ChaiScript/) - Langage de script embarqué en C++, facile à utiliser. [BSD] [site web](https://chaiscript.com/)
* [ctypes.sh](https://github.com/taviso/ctypes.sh) - Interface de fonctions étrangères pour bash. [MIT]
* [Cython](https://github.com/cython/cython) - Compilateur statique optimisant à la fois Python et le langage étendu Cython (fondé sur Pyrex). Il rend l’écriture d’extensions C pour Python aussi facile que Python lui-même. [Apache] [site web](https://cython.org/)
* [djinni](https://djinni.xlcpp.dev) - Outil de génération de déclarations de types interlangages et de liaisons d’interfaces. [Apache2]
* [Duktape](https://github.com/svaarala/duktape) - Moteur JavaScript intégrable à faible empreinte. [MIT] [site web](https://duktape.org)
* [JavaCpp](https://github.com/bytedeco/javacpp) - Le chaînon manquant entre Java et le C++ natif. [Apache2]
* [JerryScript](https://github.com/jerryscript-project/jerryscript) - Moteur JavaScript ultra-léger pour l’Internet des objets. [Apache-2.0] [site web](https://jerryscript.net/)
* [libffi](https://github.com/libffi/libffi) - Bibliothèque portable d’interface de fonctions étrangères. [MIT] [site web](https://sourceware.org/libffi/)
* [Lua](https://www.lua.org/) - Moteur de script minimal et rapide pour les fichiers de configuration et les scripts applicatifs simples. [MIT]
* [LuaBridge](https://github.com/vinniefalco/LuaBridge) - Bibliothèque légère et sans dépendances de liaison entre Lua et C++. [MIT]
* [LuaBridge3](https://github.com/kunitoki/LuaBridge3) - Bibliothèque légère et sans dépendances de liaison de Lua, LuaJIT, Luau et Ravi à C++. [MIT]
* [luacxx](https://github.com/dafrito/luacxx) - API C++11 de création de liaisons Lua. [MIT]
* [Luau](https://github.com/luau-lang/luau) - Langage de script intégrable, rapide, compact, sûr et progressivement typé, dérivé de Lua. [MIT] [site web](https://luau.org/)
* [MicroQuickJS](https://github.com/bellard/mquickjs) - MicroQuickJS (aussi appelé MQuickJS) est un moteur JavaScript destiné aux systèmes embarqués. [MIT]
* [MiniScript](https://miniscript.org/) - Langage de script moderne, élégant, facile à apprendre et facile à intégrer aux projets C# ou C++. [MIT]
* [nanobind](https://github.com/wjakob/nanobind) - Liaisons C++/Python minuscules et efficaces. [BSD-3-Clause]
* [nbind](https://github.com/charto/nbind) - En-têtes magiques rendant les bibliothèques C++ accessibles depuis JavaScript. [MIT]
* [PHP-CPP](https://github.com/CopernicaMarketingSoftware/PHP-CPP) - Bibliothèque de création d’extensions PHP avec C++. [Apache2] [site web](https://www.php-cpp.com/)
* [pocketpy](https://github.com/blueloveTH/pocketpy) - Interpréteur Python C++17 à en-tête unique pour les scripts de jeu. [MIT] [site web](https://pocketpy.dev/)
* [pybind11](https://github.com/pybind/pybind11) - Interopérabilité fluide entre C++11 et Python. [BSD]
* [QuickJS](https://bellard.org/quickjs/) - Petit moteur JavaScript intégrable. [MIT]
* [SIP](https://riverbankcomputing.com/software/sip/intro) - Générateur de liaisons C ou C++ pour Python 2 et 3. [GPL]
* [sol2](https://github.com/ThePhD/sol2) - Wrapper d’API C++ ↔ Lua doté de fonctionnalités avancées et d’excellentes performances. [MIT]
* [SWIG](https://github.com/swig/swig) - Générateur de wrappers/interfaces reliant le code C++ à JavaScript, Perl, PHP, Python, Tcl et Ruby. [GPL/sortie sans licence] [site web](https://www.swig.org/)
* [txiki.js](https://github.com/saghul/txiki.js) - Minuscule environnement d’exécution JavaScript. [MIT]
* [V7](https://github.com/cesanta/v7) - Moteur JavaScript embarqué. [GPL2]
* [V8](https://v8.dev) - Moteur JavaScript rapide de Google, intégrable à toute application C++. [BSD]
* [v8pp](https://github.com/pmed/v8pp) - Bibliothèque à en-tête unique exposant les classes et fonctions C++ dans V8 afin de les utiliser en JavaScript. [BOOST] [site web](https://pmed.github.io/v8pp/)
* [ChakraCore](https://github.com/Microsoft/ChakraCore) - Moteur JavaScript de Microsoft intégrable à nodejs. [MIT]
* [MuJS](https://codeberg.org/ccxvii/mujs) - Interpréteur JavaScript intégrable en C. [ISC] [site web](https://mujs.com)
* [hobbes](https://github.com/Morgan-Stanley/hobbes) - Langage et compilateur JIT embarqué de Morgan Stanley. [Apache-2.0]

## Sérialisation

* [BitSerializer](https://github.com/PavelKisliak/BitSerializer) - Bibliothèque de sérialisation multiformat (JSON, XML, YAML, CSV, MsgPack). [MIT]
* [Bitsery](https://github.com/fraillt/bitsery) - Bibliothèque C++ de sérialisation binaire à en-tête unique. [MIT]
* [Bond](https://github.com/Microsoft/bond) - Framework open source et multiplateforme de traitement de données à schéma. [MIT]
* [Boost.Serialization](https://github.com/boostorg/serialization) - Bibliothèque Boost de sérialisation. [Boost] [site web](https://boost.org/libs/serialization)
* [Cap'n Proto](https://github.com/capnproto/capnproto) - Format d’échange de données rapide et système RPC fondé sur les capacités. [MIT] [site web](https://capnproto.org/)
* [cereal](https://github.com/USCiLab/cereal) - Bibliothèque C++11 de sérialisation. [BSD]
* [cista](https://github.com/felixguendling/cista) - Bibliothèque C++17 de sérialisation/désérialisation hautes performances sans copie. [MIT]
* [cppcodec](https://github.com/tplgy/cppcodec) - Bibliothèque C++11 à en-tête unique d’encodage/décodage base64, base32 et hexadécimal, avec API cohérente et flexible. [MIT]
* [FastBinaryEncoding](https://github.com/chronoxor/FastBinaryEncoding) - Solution universelle et ultra-rapide de sérialisation binaire pour C++, C#, Go, Java, JavaScript, Kotlin, Python, Ruby et Swift. [MIT]
* [FlatBuffers](https://github.com/google/flatbuffers) - Bibliothèque de sérialisation économe en mémoire. [Apache2]
* [Kaitai Struct](https://kaitai.io) - Langage déclaratif décrivant diverses structures de données binaires et compilateur générant le code C++ de leur analyseur. [GPLv3+][MIT][Apache2]
* [iguana](https://github.com/qicosmos/iguana) - Moteur de sérialisation moderne, universel et facile à utiliser, développé en C++20 et C++17. [Apache2]
* [MessagePack](https://github.com/msgpack/msgpack-c) - Format efficace de sérialisation binaire « comme JSON » pour C et C++. [Apache2] [site web](https://msgpack.org/)
* [mrpt-serialization](https://github.com/mrpt/mrpt/) - Sérialisation versionnée en formats binaires ou textuels. [BSD] [site web](https://docs.mrpt.org/reference/latest/group_mrpt_serialization_grp.html)
* [nanopb](https://github.com/nanopb/nanopb) - Implémentation de Protocol Buffers en ANSI C, de petite taille. [Zlib]
* [protobuf](https://github.com/protocolbuffers/protobuf) - Protocol Buffers, format d’échange de données de Google. [BSD]
* [protobuf-c](https://github.com/protobuf-c/protobuf-c) - Implémentation de Protocol Buffers en C. [BSD]
* [Protocol Puffers](https://github.com/PragmaTwice/protopuf) - Petite bibliothèque C++20 de sérialisation/désérialisation à en-tête unique, fortement fondée sur les modèles et compatible protobuf. [Apache-2.0]
* [SimpleBinaryEncoding](https://github.com/real-logic/simple-binary-encoding) - Encodage et décodage de messages applicatifs au format binaire pour les applications à faible latence. [Apache2]
* [upb](https://github.com/protocolbuffers/upb) - Petite implémentation de protobuf en C. [BSD]
* [Wirehair](https://github.com/catid/wirehair) - Code fontaine O(N) pour les grandes quantités de données. [BSD-3-Clause]
* [YAS](https://github.com/niXman/yas) - Bibliothèque de sérialisation très rapide « Yet Another Serialization », prenant en charge les formats binaire, texte et JSON. [Boost]
* [zpp_bits](https://github.com/eyalz800/zpp_bits) - En fait, la bibliothèque moderne de sérialisation la plus rapide. Voir [cette vidéo](https://www.youtube.com/watch?v=G7-GQhCw8eE&ab_channel=CppCon).
* [fbthrift](https://github.com/facebook/fbthrift) - Branche Facebook d’Apache Thrift, comprenant une bibliothèque de sérialisation et un framework RPC. [Apache-2.0]

## Port série

* [Asio](https://github.com/chriskohlhoff/asio/) - Asio inclut des classes permettant de créer et manipuler des ports série de manière portable. [Boost] [site web](https://think-async.com/)
* [Boost.Asio](https://github.com/boostorg/asio) - Boost.Asio inclut des classes permettant de créer et manipuler des ports série de manière portable. [Boost] [site web](https://boost.org/libs/asio)
* [CSerialPort](https://github.com/itas109/CSerialPort) - Bibliothèque légère et multiplateforme de ports série. [LGPL3]
* [Libserial](https://github.com/crayzeewulf/libserial) - Programmation des ports série en C++. [BSD-3-Clause]
* [Serial Communication Library](https://github.com/wjwwood/serial) - Bibliothèque multiplateforme de ports série écrite en C++. [MIT] [site web](https://wjwwood.io/serial/)

## Tri

+ [cpp-sort](https://github.com/Morwenn/cpp-sort) - Algorithmes de tri et outils associés pour C++14. [MIT]
* [pdqsort](https://github.com/orlp/pdqsort) - Quicksort qui élimine les motifs défavorables. [zlib]
* [Timsort](https://github.com/gfx/cpp-TimSort) - Fonction de tri stable à modèles, plus performante que les tris fondés sur quicksort, dont std::sort, sur des données inversées ou partiellement triées. [MIT]
* [Indiesort](https://github.com/mattreecebentley/plf_indiesort) - Wrapper de tri permettant d’utiliser std::sort (et d’autres tris à accès aléatoire) sur des conteneurs sans accès aléatoire, et améliorant aussi le tri de grands types ou de types non trivialement copiables dans les conteneurs et tableaux à accès aléatoire. [zLib] [site web](https://plflib.org/indiesort.htm)
* [x86-simd-sort](https://github.com/numpy/x86-simd-sort) - Bibliothèque de modèles C++ d’algorithmes de tri SIMD hautes performances. [BSD-3-Clause]

## Vidéo

* [libvpx](https://www.webmproject.org/code/) - SDK du codec VP8/VP9. [BSD]
* [FFmpeg](https://www.ffmpeg.org/) - Solution complète et multiplateforme d’enregistrement, de conversion et de diffusion audio et vidéo. [LGPL2/GPL2]
* [avcpp](https://github.com/h4tr3d/avcpp) - Wrapper C++ moderne de FFmpeg. [MIT]
* [libde265](https://github.com/strukturag/libde265) - Implémentation open source du codec vidéo H.265. [LGPL] [site web](https://www.libde265.org/)
* [x265](https://bitbucket.org/multicoreware/x265_git/src) - Implémentation open source du codec vidéo H.265. [GPL2] [site web](https://x265.readthedocs.io/en/master/)
* [OpenH264](https://github.com/cisco/openh264) - Codec H.264 open source. [BSD] [site web](https://www.openh264.org/)
* [Theora](https://www.theora.org/) - Format libre et ouvert de compression vidéo. [BSD]
* [Vireo](https://github.com/twitter/vireo/) - Bibliothèque légère et polyvalente de traitement vidéo par Twitter. [MIT]
* [libuvc](https://github.com/libuvc/libuvc) - Bibliothèque multiplateforme pour périphériques vidéo USB. [BSD]

## Machines virtuelles

* [CarpVM](https://github.com/tekknolagi/carp) - Machine virtuelle C « intéressante ». Voyons ce que cela donne. [GPLv3]
* [MicroPython](https://github.com/micropython/micropython) - Vise à porter une implémentation de Python 3.x sur un microcontrôleur. [MIT]
* [TinyVM](https://github.com/jakogut/tinyvm) - Machine virtuelle compacte, rapide et légère, écrite en ANSI C pur. [MIT]

## Frameworks d’applications web

* [aeronet](https://github.com/sjanel/aeronet) - Framework modulaire de microservices C++ HTTP/1.1, HTTP/2 et WebSocket hautes performances, axé sur les performances et l’évolutivité. [MIT]
* [Civetweb](https://github.com/civetweb/civetweb) - Serveur web C/C++ puissant et intégrable, facile à utiliser, avec prise en charge facultative de CGI, SSL et Lua. [MIT]
* [C++ REST SDK](https://github.com/Microsoft/cpprestsdk) - Projet Microsoft de communication client-serveur cloud en code natif, avec conception moderne d’API C++ asynchrones. [MIT]
* [CppCMS](https://cppcms.com/) - Framework libre et hautes performances de développement web (pas un CMS). [LGPLv3]
* [Crow](https://github.com/CrowCpp/Crow) - Microframework C++ d’exécution de services web, avec routage semblable à celui de Flask pour Python. [BSD] [site web](https://crowcpp.org)
* [Cutelyst](https://github.com/cutelyst/cutelyst) - Framework web C++ fondé sur Qt, reprenant l’approche simple de Catalyst (Perl). [BSD-3-Clause] [site web](https://cutelyst.org/)
* [Drogon](https://github.com/an-tao/drogon) - Framework d’applications HTTP hautes performances fondé sur C++17/20. [MIT]
* [C++ wfrest](https://github.com/wfrest/wfrest) - Framework web C++ pour API REST. [Apache2]
* [facil.io](https://github.com/boazsegev/facil.io) - Framework web C hautes performances et piloté par événements, prenant en charge HTTP, WebSockets, SSE et plus encore. [MIT] [site web](https://facil.io)
* [Kore](https://kore.io/) - Serveur web/framework C ultra-rapide et flexible pour les applications web. [ISC]
* [libOnion](https://www.coralbits.com/libonion/) - Bibliothèque légère facilitant la création de serveurs web en C. [LGPLv3]
* [lwan](https://github.com/lpereira/lwan) - Serveur HTTP expérimental, évolutif et hautes performances. [GPL2]
* [Mach](https://github.com/machframework/mach) - Framework web C++20 moderne privilégiant les performances, la sûreté des types et l’expérience développeur. [MIT] [site web](https://machframework.dev/).
* [oat++](https://github.com/oatpp/oatpp) - Framework léger et sans dépendances de création de services web hautes performances. [Apache-2.0] [site web](https://oatpp.io/)
* [Pistache](https://pistacheio.github.io/pistache/) - Framework REST C++ écrit en C++11 pur, sans dépendance externe. [Apache2]
* [QDjango](https://github.com/jlaine/qdjango/) - Framework web C++ fondé sur la bibliothèque Qt. Dans la mesure du possible, il reprend l’API de Django, d’où son nom. [LGPL]
* [TreeFrog Framework](https://github.com/treefrogframework/treefrog-framework) - Framework web full stack haut débit fondé sur C++ et Qt, prenant en charge HTTP et WebSocket (avec mapping objet-relationnel). [BSD] [site web](https://www.treefrogframework.org/)
* [userver](https://github.com/userver-framework/userver) - Framework C++17 asynchrone doté de nombreuses abstractions et pilotes de bases de données, pour créer facilement et rapidement des microservices, services et utilitaires efficaces. [Apache-2.0] [site web](https://userver.tech/)
* [Wt](https://www.webtoolkit.eu/wt) - Bibliothèque C++ de développement d’applications web. [GPL/propriétaire]
* [httpserver.h](https://github.com/jeremycw/httpserver.h) - Bibliothèque serveur HTTP C à en-tête unique. [MIT]
* [libhttp](https://github.com/lammertb/libhttp) - Bibliothèque HTTP et HTTPS multiplateforme en C/C++. [MIT]

## XML
*XML, c’est nul. Vraiment. Il n’y a aucune excuse. XML est pénible à analyser pour les humains et c’est une catastrophe même pour les ordinateurs. Cette saleté n’a aucune raison d’exister. — Linus Torvalds*

* [Boost.PropertyTree](https://github.com/boostorg/property_tree) - Analyseur/générateur d’arborescences de propriétés pour fichiers XML/JSON/INI/Info. [Boost] [site web](https://boost.org/libs/property_tree)
* [Expat](https://www.libexpat.org/) - Bibliothèque d’analyse XML écrite en C. [MIT]
* [Libxml2](https://xmlsoft.org/) - Analyseur et boîte à outils XML C de GNOME. [MIT]
* [libxml++](https://libxmlplusplus.sourceforge.net/) - Analyseur XML pour C++. [LGPL2]
* [Mini-XML](https://github.com/michaelrsweet/mxml) - Petite bibliothèque d’analyse XML écrite en ANSI C. [LGPL2 avec exceptions]
* [PugiXML](https://pugixml.org/) - Analyseur XML C++ simple, léger et rapide, prenant en charge XPath. [MIT]
* [RapidXml](https://rapidxml.sourceforge.net/) - Tentative de créer l’analyseur XML le plus rapide possible, tout en préservant l’ergonomie, la portabilité et une compatibilité raisonnable avec le W3C. [Boost]
* [TinyXML](https://sourceforge.net/projects/tinyxml/) - Analyseur XML C++ simple, compact et minimal, facile à intégrer à d’autres programmes. [zlib]
* [TinyXML2](https://github.com/leethomason/tinyxml2) - Analyseur XML C++ simple, compact et efficace, facile à intégrer à d’autres programmes. [zlib]
* [TinyXML++](https://github.com/rjpcomputing/ticpp) - Interface entièrement nouvelle de TinyXML exploitant de nombreuses forces du C++ : modèles, exceptions et bien meilleure gestion des erreurs. [MIT]
* [Xalan C](https://github.com/apache/xalan-c) - Bibliothèque et programme en ligne de commande transformant les documents XML au moyen de feuilles de style conformes à la norme XSLT 1.0. [Apache-2.0] [site web](https://xalan.apache.org/)
* [Xerces-C++](https://xerces.apache.org/xerces-c/) - Analyseur XML validant, écrit dans un sous-ensemble portable du C++. [Apache2]

## Yaml

* [fkYAML](https://github.com/fktn-k/fkYAML) - Bibliothèque YAML C++ à en-tête unique. [MIT]
* [LibCYAML](https://github.com/tlsa/libcyaml) - Bibliothèque C de lecture et d’écriture YAML. [ISC]
* [libfyaml](https://github.com/pantoniou/libfyaml) - Analyseur et rédacteur élégant de YAML 1.2 et JSON. [MIT]
* [LibYAML](https://github.com/yaml/libyaml) - Bibliothèque C d’analyse et d’émission YAML. [MIT] [site web](https://pyyaml.org/wiki/LibYAML)
* [mini-yaml](https://github.com/jimmiebergmann/mini-yaml) - Sérialiseur/désérialiseur YAML 1.0 C++11 dans un seul en-tête. [MIT]
* [rapidyaml](https://github.com/biojppm/rapidyaml) - Bibliothèque C++ rapide d’analyse et d’émission YAML. [MIT]
* [yaml-cpp](https://github.com/jbeder/yaml-cpp) - Analyseur et émetteur YAML en C++. [MIT]

## Divers
*Bibliothèques ou outils utiles qui ne correspondent pas aux catégories ci-dessus ou ne sont pas encore catégorisés*

* [access_profiler](https://github.com/arvidn/access_profiler) - Outil de comptage des accès aux variables membres dans les programmes C++. [GPL3]
* [American fuzzy lop](https://lcamtuf.coredump.cx/afl/) aussi appelé afl-fuzz - Outil de fuzzing déjanté qui découvre automatiquement les bogues lorsqu’on lui fournit du temps et un exemple d’entrée minimal. [Apache2]
* [Argon2](https://github.com/P-H-C/phc-winner-argon2) - Fonction de hachage de mots de passe Argon2, lauréate du PHC. [CC0/Apache2]
* [AsmJit](https://github.com/asmjit/asmjit) - Génération de code machine à faible latence. [Zlib] [site web](https://asmjit.com)
* [Better String](https://bstring.sourceforge.net) - Alternative plus fonctionnelle à la bibliothèque de chaînes C, évitant les problèmes de dépassement de tampon. Comprend aussi un wrapper C++. [BSD, GPL2]
* [Boost.Signals2](https://github.com/boostorg/signals2) - Implémentation d’un système géré de signaux et de slots. [Boost] [site web](https://boost.org/libs/signals2)
* [casacore](https://code.google.com/p/casacore/) - Ensemble de bibliothèques fondamentales C++ dérivées de aips++. [LGPL]
* [CCTZ](https://github.com/google/cctz) - Bibliothèque C++ de conversion entre temps absolu et temps civil à l’aide des règles de fuseaux horaires. [Apache-2.0]
* [Cheat Sheets of HackingCPP](https://hackingcpp.com/cpp/cheat_sheets.html) - Fiches pratiques et infographies utiles sur les algorithmes, vues, conteneurs, nombres aléatoires, etc.
* [Concord](https://github.com/Cogmasters/concord) - Bibliothèque wrapper de l’API Discord écrite en C. [MIT] [site web](https://cogmasters.github.io/concord)
* [CPPItertools](https://github.com/ryanhaining/cppitertools) - Extensions aux boucles for basées sur les plages, inspirées des fonctions intégrées de Python et de la bibliothèque itertools. [BSD-2-Clause]
* [CPP-JWT](https://github.com/arun11299/cpp-jwt) - Bibliothèque C++ de jetons web JSON. [MIT]
* [cpp-lazy](https://github.com/MarcDirven/cpp-lazy) - Bibliothèque d’évaluation paresseuse rapide et facile pour C++11/14/17/20. [MIT]
* [CRCpp](https://github.com/d-bahr/CRCpp) - Bibliothèque CRC C++ rapide et facile à utiliser. [BSD-3-Clause]
* [cxx-prettyprint](https://github.com/louisdx/cxx-prettyprint) - Bibliothèque d’affichage formaté des conteneurs C++. [Boost]
* [date](https://github.com/HowardHinnant/date) - Bibliothèque de dates et d’heures fondée sur l’en-tête <chrono> de C++11/14/17. [MIT] [site web](https://howardhinnant.github.io/date/date.html)
* [D++ (DPP)](https://github.com/brainboxdotcc/DPP) - Bibliothèque C++ légère, hautes performances et évolutive de création de bots Discord. [Apache2] [site web](https://dpp.dev)
* [Dragonbox](https://github.com/jk-jeon/dragonbox) - Implémentation de référence d’un nouvel algorithme C++ de conversion des nombres flottants en chaînes. [Apache2/BSL-1.0]
* [DynaMix](https://github.com/iboB/dynamix) - Bibliothèque permettant de composer et modifier des objets à l’exécution. [MIT]
* [emio](https://github.com/Viatorus/emio) - Bibliothèque sûre et rapide d’E/S de caractères, de haut et bas niveau. [MIT]
* [faker-cxx](https://github.com/cieslarmichal/faker-cxx) - Bibliothèque Faker C++20 générant des données factices mais réalistes pour les tests et le développement. [MIT]
* [fast_float](https://github.com/fastfloat/fast_float) - from_chars C++ rapide et exact, 4 à 10 fois plus rapide que strtod, intégré à GCC 12, Chromium, Redis, WebKit/Safari. [Apache2/BSL-1.0/MIT]
* [FastFormat](https://www.fastformat.org) - Formatage C++ rapide et sûr, inspiré de log4j et Pantheios. [BSD simplifiée]
* [fast_io](https://github.com/cppfastio/fast_io) - Entrées/sorties C++20 nettement plus rapides. [MIT]
* [fccf](https://github.com/p-ranav/fccf) - Outil en ligne de commande recherchant récursivement dans un répertoire le code source C/C++ correspondant à une chaîne donnée. [MIT]
* [ffc.h](https://github.com/kolemannix/ffc.h) - Analyse accélérée des flottants/doubles C99 dans un seul en-tête, portage de fast_float. [Apache-2.0/BSL-1.0/MIT]
* [{fmt}](https://github.com/fmtlib/fmt) :zap: - Bibliothèque C++ de formatage compacte, sûre et rapide. [BSD simplifiée] [site web](https://fmt.dev)
* [gcc-poison](https://github.com/leafsr/gcc-poison) - Fichier d’en-tête simple permettant aux développeurs d’interdire les fonctions C/C++ dangereuses dans les applications.
* [Gear-Lib](https://github.com/gozfree/gear-lib) - Collection de bibliothèques fondamentales en C POSIX pour le développement embarqué et les services réseau. [MIT]
* [happly](https://github.com/nmwsharp/happly) - Analyseur C++ du format de fichier PLY à en-tête unique. Analysez les fichiers .ply en toute simplicité ! [MIT]
* [hedley](https://github.com/nemequ/hedley) - En-tête C/C++ conçu pour gommer certains désagréments propres aux plateformes. [site web](https://nemequ.github.io/hedley/)
* [Hexi](https://github.com/EmberEmu/Hexi) - Bibliothèque C++ légère, à en-tête unique, de flux binaires et de sérialisation. [Apache-2.0/MIT]
* [HighwayHash](https://github.com/google/highwayhash) - Fonctions de hachage rapides et robustes : SipHash/HighwayHash. [Apache-2.0]
* [inja](https://github.com/pantor/inja) - Moteur de modèles pour le C++ moderne. [MIT]
* [Jinja2С++](https://github.com/jinja2cpp/Jinja2Cpp) - Implémentation d’un moteur de modèles presque entièrement conforme. [site web](https://jinja2cpp.github.io/)
* [jwt-cpp](https://github.com/Thalhammer/jwt-cpp) - Bibliothèque C++ à en-tête unique de création et validation de jetons web JSON. [MIT]
* [Kangaru](https://github.com/gracicot/kangaru) - Conteneur d’injection de dépendances pour C++11 et C++14. [MIT]
* [Klib](https://github.com/attractivechaos/klib) - Implémentations compactes et légères d’algorithmes et structures de données courants. [MIT]
* [KOMIHASH](https://github.com/avaneev/komihash) - Fonction de hachage très rapide et de haute qualité, prenant en charge le hachage incrémentiel discret et en flux. [MIT]
* [libcpuid](https://github.com/anrieff/libcpuid) - Petite bibliothèque C de détection des processeurs x86 et d’extraction de leurs fonctionnalités. [BSD]
* [libenvpp](https://github.com/ph3at/libenvpp) - Bibliothèque C++ moderne d’analyse des variables d’environnement avec sûreté des types. [Apache-2.0]
* [libevil](https://github.com/avati/libevil) - Gestionnaire de licences maléfique. [GPLv3]
* [libnih](https://github.com/keybuk/libnih) - Bibliothèque légère de fonctions et structures C. [GPL2.1]
* [libONVIF](https://github.com/Privatehive/libONVIF) - Encore une bibliothèque ONVIF. [GPL-3.0]
* [libpopcnt](https://github.com/kimwalisch/libpopcnt) - Bibliothèque C/C++ rapide de comptage des bits à 1. [BSD-2-Clause]
* [libsigc++](https://github.com/libsigcplusplus/libsigcplusplus) - Système de callbacks à typage sûr pour le C++ standard. [LGPL] [site web](https://libsigcplusplus.github.io/libsigcplusplus)
* [libusb](https://libusb.info/) - Bibliothèque USB universelle permettant un accès portable aux périphériques USB. [LGPL2]
* [Mach7](https://github.com/solodon4/Mach7) - Bibliothèque C++ de filtrage par motifs. [BSD]
* [minja.hpp](https://github.com/google/minja) - Moteur de modèles Jinja C++ minimaliste pour les modèles de conversation des LLM. [MIT]
* [mio](https://github.com/mandreyel/mio) - Bibliothèque C++11 multiplateforme à en-tête unique d’E/S de fichiers mappés en mémoire. [MIT]
* [MPark.Variant](https://github.com/mpark/variant) - `std::variant` de C++17 pour C++11/14/17. [BSL-1.0]
* [MPH](https://github.com/qlibs/mph) - Bibliothèque C++20 minimaliste de hachage parfait statique. [MIT]
* [Patternia](https://github.com/sentomk/patternia) - Fournit le filtrage par motifs au C++ moderne. [MIT] [site web](https://patternia.tech/)
* [PEGTL](https://github.com/taocpp/PEGTL) - Bibliothèque de modèles de grammaires d’expressions d’analyse (PEG). [MIT]
* [Pipes](https://github.com/joboccara/pipes) - Pipelines permettant un code expressif sur les collections C++. [MIT]
* [pprint](https://github.com/p-ranav/pprint) - Afficheur formaté pour le C++ moderne. [MIT]
* [pspsdk](https://github.com/pspdev/pspsdk) - SDK open source de développement amateur pour PSP. [BSD/GNU GPL3]
* [QtVerbalExpressions](https://github.com/VerbalExpressions/QtVerbalExpressions) - Bibliothèque Qt fondée sur la bibliothèque C++ VerbalExpressions. [MIT]
* [rain](https://github.com/DOSAYGO-Research/rain) - Hachage non cryptographique 128 et 256 bits le plus rapide, passant tous les tests et tenant en moins de 140 lignes de code source. [Apache-2.0]
* [RapidFuzz](https://github.com/rapidfuzz/rapidfuzz-cpp) - Comparaison approximative rapide de chaînes en C++ à l’aide de la distance de Levenshtein. [MIT] [site web](https://rapidfuzz.github.io/rapidfuzz-cpp/)
* [rapidhash](https://github.com/Nicoshev/rapidhash) - Algorithme de hachage très rapide, de haute qualité et indépendant de la plateforme. [BSD-2-Clause]
* [Reaction](https://github.com/lumia431/reaction) - Framework léger de programmation réactive à en-tête unique exploitant les fonctionnalités du C++20 moderne pour créer des applications efficaces de flux de données. [MIT]
* [reproc](https://github.com/DaanDeMeyer/reproc) - Bibliothèque de processus multiplateforme (C99/C++11). [MIT]
* [SafetyHook](https://github.com/cursey/safetyhook) - Bibliothèque C++23 de hooks de procédures. [BSL-1.0]
* [scnlib](https://github.com/eliaskosunen/scnlib) - scanf pour le C++ moderne. [Apache-2.0] [site web](https://v1.scnlib.dev/)
* [Scintilla](https://scintilla.org/) - Composant libre d’édition de code source. [MIT]
* [SDS](https://github.com/antirez/sds) - Bibliothèque de chaînes dynamiques simples en C. [BSD]
* [semver.c](https://github.com/h2non/semver.c) - Analyseur et formateur semver en ANSI C. [MIT]
* [sigslot](https://sigslot.sourceforge.net/) - Bibliothèque C++ de signaux et slots. [Domaine public]
* [SIMD Everywhere](https://github.com/simd-everywhere/simde) - Implémentations de jeux d’instructions SIMD pour les systèmes qui ne les prennent pas nativement en charge. [MIT]
* [SLJIT](https://github.com/zherczeg/sljit) - Compilateur JIT de bas niveau indépendant de la plateforme. [BSD] [site web](https://zherczeg.github.io/sljit/)
* [palacaze/sigslot](https://github.com/palacaze/sigslot) - Implémentation simple, à en-tête unique, des signaux-slots en C++14. [MIT]
* [simdzone](https://github.com/NLnetLabs/simdzone) - Analyseur de zones DNS rapide et conforme aux normes. [BSD-3-Clause]
* [SimpleSignal](https://github.com/larspensjo/SimpleSignal) - Signaux C++11 hautes performances. [Domaine public]
* [single_file_libs](https://github.com/r-lyeh/single_file_libs) - Bibliothèques open source C/C++ avec un minimum de dépendances. [Diverses]
* [Spicy](https://github.com/zeek/spicy) - Générateur d’analyseurs C++ pour disséquer protocoles et fichiers. [BSD] [site web](https://docs.zeek.org/projects/spicy/en/latest/)
* [Stage](https://github.com/rtv/Stage) - Simulateur de robot mobile. [GPL2]
* [stb](https://github.com/nothings/stb) :zap: - Ensemble de bibliothèques C/C++ en fichier unique. [Domaine public]
* [stdman](https://github.com/jeaye/stdman) - Outil analysant les fichiers HTML archivés de [cppreference](https://cppreference.com) et générant des pages de manuel au format groff pour les systèmes Unix. [MIT]
* [StringZilla](https://github.com/ashvardanian/StringZilla) - Godzilla des bibliothèques de chaînes : découpe, trie et mélange de grands jeux de données textuels plus vite qu’il ne faut pour dire « Tokyo Tower ». [Apache-2.0]
* [StrTk](https://www.partow.net/programming/strtk/index.html) - Bibliothèque C++ de routines hautes performances de traitement des chaînes. [MIT]
* [tgbotxx](https://github.com/baderouaich/tgbotxx) - Bibliothèque C++ de bots Telegram. [MIT]
* [The RaBitQ Library](https://github.com/VectorDB-NTU/RaBitQ-Library) - Bibliothèque légère de l’algorithme RaBitQ. [Apache-2.0] [site web](https://vectordb-ntu.github.io/RaBitQ-Library/)
* [tiny::optional](https://github.com/Sedeniono/tiny-optional/) - Remplacement de std::optional évitant le gaspillage inutile de mémoire. [BSL-1.0]
* [Tulip Indicators](https://tulipindicators.org) - Bibliothèque C de plus de 100 indicateurs d’analyse technique financière. [LGPL]
* [ub-canaries](https://github.com/regehr/ub-canaries) - Collection de programmes C/C++ cherchant à pousser les compilateurs à exploiter les comportements indéfinis.
* [value-category-cheatsheet](https://github.com/jeaye/value-category-cheatsheet) Fiche PDF sur les lvalues, rvalues et notions apparentées. [Copyleft Jank]
* [VarTypes](https://github.com/szi/vartypes) - Framework orienté objet riche en fonctionnalités de gestion de variables en C++/Qt4. [LGPL]
* [Wildcards](https://github.com/zemasoft/wildcards/) - Bibliothèque simple de modèles C++ à en-tête unique implémentant la correspondance par jokers. [BSL-1.0]
* [xjb](https://github.com/xjb714/xjb) - Algorithme rapide de conversion flottant-chaîne. [Apache-2.0]
* [xxHash](https://github.com/Cyan4973/xxHash) - Algorithme de hachage non cryptographique extrêmement rapide. [BSD-2-Clause] [site web](https://xxhash.com/)
* [xxhash_cpp](https://github.com/RedSpah/xxhash_cpp) - Portage de la bibliothèque xxhash en C++17. [BSD-2-Clause]
* [ZBar](https://zbar.sourceforge.net/) - Bibliothèque de lecture de codes-barres dans les photos, images et flux vidéo, renvoyant les valeurs détectées. [LGPL2]
* [ZXing](https://github.com/zxing/zxing/) - Bibliothèque open source multiformat de traitement d’images de codes-barres 1D/2D, implémentée en Java et portée vers d’autres langages. [Apache]
* [spy](https://github.com/jfalcou/spy) - Bibliothèque constexpr C++17 de détection à la compilation du système d’exploitation, compilateur, architecture et SIMD. [MIT]
* [licensepp](https://github.com/amrayn/licensepp) - Bibliothèque de gestion des licences logicielles pour les projets C++. [Apache-2.0]
* [tinydir](https://github.com/cxong/tinydir) - Lecteur C léger, portable et facile à intégrer de répertoires et fichiers. [BSD-2-Clause]
* [Cello](https://github.com/orangeduck/Cello) - Programmation de plus haut niveau en C, avec structures de données génériques et polymorphisme. [BSD-2-Clause] [site web](https://libcello.org/)
* [dyno](https://github.com/ldionne/dyno) - Bibliothèque C++ de polymorphisme à l’exécution avec sémantique de valeur. [Boost]
* [PolyHook](https://github.com/stevemk14ebr/PolyHook) - Bibliothèque C++ de hooks x86/x64. [MIT]
* [Verdigris](https://github.com/woboq/verdigris) - Bibliothèque à en-tête unique permettant d’utiliser Qt sans moc. [MIT]
* [Flicks](https://github.com/OculusVR/Flicks) - Unité de temps définie par Facebook/Oculus pour représenter précisément les fréquences d’images courantes. [BSD]
* [Linq](https://github.com/pfultz2/Linq) - Fournit une syntaxe LINQ de compréhension de listes en C++. [Boost]
* [libcorrect](https://github.com/quiet/libcorrect) - Bibliothèque C de codes convolutifs et de correction d’erreurs Reed-Solomon. [BSD-3-Clause]
* [libfsm](https://github.com/katef/libfsm) - Bibliothèque de création et d’exécution de machines à états finis, incluant regex et glob. [BSD-2-Clause]
* [origin](https://github.com/asutton/origin) - Bibliothèque C++ de concepts, diagnostics et autres utilitaires fondamentaux.

# Logiciels
*Logiciels de création d’un environnement de développement.*

## Compilateurs
*Liste de compilateurs C ou C++*

* [8cc](https://github.com/rui314/8cc) - Petit compilateur C.
* [c](https://github.com/ryanmjacobs/c) - Compile et exécute des « scripts » C en une seule commande ! [MIT]
* [Clang](https://clang.llvm.org/) - Compilateur C pour LLVM, prenant en charge C++11/14/1z et C11, développé par l’équipe LLVM. [NCSA]
* [Fil-C](https://fil-c.org/) - Implémentation de C et C++ sûre en mémoire et fanatiquement compatible.
* [GCC](https://gcc.gnu.org/) - GNU Compiler Collection, prenant en charge C++11/14/1z, C11 et OpenMP. [GNU GPL3]
* [PCC](https://github.com/IanHarvey/pcc) - Très ancien compilateur C prenant en charge C99.
* [AMD C++ Compiler](https://www.amd.com/en/developer/aocc.html) - Développé par AMD.
* [Intel C++ Compiler](https://software.intel.com/en-us/c-compilers) - Développé par Intel.
* [LLVM](https://llvm.org/) - Collection de technologies modulaires et réutilisables pour les compilateurs et chaînes d’outils.
* [Microsoft Visual C++](https://docs.microsoft.com/en-us/cpp/dotnet/dotnet-programming-with-cpp-cli-visual-cpp?view=msvc-160) - MSVC, développé par Microsoft.
* [Open WatCom](https://github.com/open-watcom) - Compilateurs croisés et outils Watcom C, C++ et Fortran. [Licence publique Sybase Open Watcom]
* [Oracle Solaris Studio](https://www.oracle.com/technetwork/server-storage/solarisstudio/overview/index.html) - Compilateur C, C++ et Fortran pour SPARC et x86, prenant en charge C++11, disponible sous Linux et Solaris. [Licence développeur OTN]
* [TCC](https://bellard.org/tcc/) - Tiny C Compiler. [LGPL]
* [sierra](https://sierra-lang.github.io/) - Langage de programmation orienté CISC, axé sur la création de programmes maintenables.
* [movfuscator](https://github.com/xoreaxeaxeax/movfuscator) - Compilateur C à instruction unique, compilant les programmes uniquement en instructions mov. [MIT]

## Compilateurs en ligne
*Liste de compilateurs C ou C++ en ligne*

* [codechef](https://www.codechef.com/ide) - Compilateur en ligne simple de CodeChef.
* [coliru](https://coliru.stacked-crooked.com/) - Compilateur/shell en ligne prenant en charge plusieurs compilateurs C++.
* [Compiler Explorer](https://gcc.godbolt.org/) - Compilateur interactif pouvant afficher le code assembleur.
* [CompileOnline](https://www.tutorialspoint.com/codingground.htm) - Compile et exécute du C++ en ligne sous Linux.
* [Ideone](https://ideone.com/) - Compilateur et outil de débogage en ligne permettant de compiler et exécuter du code dans plus de 60 langages.
* [OneCompiler](https://onecompiler.com/) - Compilateur en ligne prenant en charge plus de 70 langages de programmation et systèmes de bases de données.
* [Programiz](https://www.programiz.com/cpp-programming/online-compiler) - Compilateur en ligne pour apprenants et développeurs.
* [repl.it](https://repl.it) - Outils et plateformes puissants mais simples pour les enseignants, apprenants et développeurs.
* [Rextester](https://rextester.com/runcode) - Compilateur en ligne proposant plusieurs compilateurs (Clang, GCC, MSVC) et éditeurs.
* [Try It Online](https://tio.run/) - TIO est une famille d’interpréteurs en ligne pour une liste en constante expansion de langages pratiques et ludiques.
* [Wandbox](https://wandbox.org) - Compilateur Clang/GCC en ligne avec Boost disponible.
* [paiza.io](https://paiza.io/en) - Compilateur C/C++ en ligne avec prise en charge de plusieurs fichiers, intégration GitHub (gist) et édition collaborative.
* [InterviewBit](https://www.interviewbit.com/online-cpp-compiler/) - Compilateur C++ en ligne simple et facile à utiliser.

## Débogueurs
*Liste de débogueurs C ou C++*

* [Comparison of debuggers](https://en.wikipedia.org/wiki/Comparison_of_debuggers) - Liste de débogueurs tirée de Wikipédia.
* [GDB](https://www.gnu.org/software/gdb/) - Débogueur GNU.
* [LLDB](https://lldb.llvm.org/) - Débogueur LLDB.
* [Metashell](https://metashell.readthedocs.org) - Shell interactif de métaprogrammation par modèles intégrant le métadébogueur MDB.
* [Valgrind](https://valgrind.org/) - Outil de débogage mémoire, de détection des fuites mémoire et de profilage.
* [x64dbg](https://x64dbg.com/) - Débogueur x64/x32 open source pour Windows.

## Environnements de développement intégrés
*Liste d’IDE pour C ou C++.*

* [Anjuta DevStudio](https://sourceforge.net/projects/anjuta/) - IDE de GNOME. [GPL3]
* [AppCode](https://www.jetbrains.com/objc/) - IDE de développement Objective-C, C, C++ et JavaScript, fondé sur la plateforme IntelliJ IDEA de JetBrains.
* [Cevelop](https://www.cevelop.com) - IDE C et C++ multiplateforme fondé sur Eclipse CDT et complété par des plug-ins.
* [CLion](https://www.jetbrains.com/clion/) - IDE C et C++ multiplateforme de JetBrains.
* [Code::Blocks](https://www.codeblocks.org/) - IDE libre pour C, C++ et Fortran.
* [CodeLite](https://codelite.org/) - Autre IDE C et C++ libre et multiplateforme. [GPL2 avec exception pour les plug-ins]
* [Dev-C++](https://sourceforge.net/projects/orwelldevcpp/) - IDE portable pour C/C++/C++11.
* [Eclipse CDT](https://www.eclipse.org/cdt/) - IDE C et C++ complet fondé sur la plateforme Eclipse.
* [Embarcadero Dev-CPP](https://github.com/Embarcadero/Dev-Cpp) - Fork de Dev-C++ préinstallé avec de nouveaux thèmes et des compilateurs modernes. [GPLv2] [site web](https://www.embarcadero.com/free-tools/dev-cpp)
* [Geany](https://www.geany.org/) - IDE compact, rapide et multiplateforme. [GPL]
* [IBM VisualAge](https://www-03.ibm.com/software/products/en/visgen) - Famille d’environnements de développement intégrés d’IBM.
* [Irony-mode](https://github.com/Sarcasm/irony-mode) - Mode mineur C/C++ pour Emacs, propulsé par libclang.
* [juCi++](https://gitlab.com/cppit/jucipp) - IDE C++ léger et multiplateforme avec intégration libclang. [MIT]
* [KDevelop](https://www.kdevelop.org/) - IDE libre et open source.
* [Microsoft Visual Studio](https://www.visualstudio.com/) - IDE de Microsoft.
* [Microsoft Visual Studio Code](https://github.com/microsoft/vscode) :zap: - IDE open source de Microsoft. [MIT] [site web](https://code.visualstudio.com)
* [NetBeans](https://netbeans.org/) - IDE principalement destiné au développement Java, mais aussi à d’autres langages, notamment PHP, C/C++ et HTML5.
* [Qt Creator](https://github.com/qt-creator/qt-creator) :zap: - IDE C++, JavaScript et QML multiplateforme inclus dans le SDK de Qt. [GPL3 avec exceptions] [site web](https://www.qt.io/product/development-tools)
* [rtags](https://github.com/Andersbakken/rtags) - Indexeur client/serveur C/C++ fondé sur clang et intégrable à Emacs.
* [Xcode](https://developer.apple.com/xcode/) - Développé par Apple.
* [YouCompleteMe](https://github.com/ycm-core/YouCompleteMe) - Moteur rapide de complétion de code pour Vim, à recherche approximative et suggestions pendant la saisie.
* [C Playground - Online C Programming IDE](https://programiz.pro/ide/c) - IDE en ligne pour s’exercer à programmer en C, écrire, modifier et exécuter du code.

## Systèmes de compilation

* [awesome-cmake](https://github.com/onqtam/awesome-cmake) - Sélection de scripts, modules et ressources CMake remarquables.
* [Bazel](https://bazel.build) - Système de compilation multilingue, rapide et évolutif de Google. [Apache]
* [Bear](https://github.com/rizsotto/Bear) - Outil de génération d’une base de données de compilation pour les outils clang. [GPLv3]
* [Buck](https://github.com/facebook/buck) - Système de compilation rapide encourageant la création de petits modules réutilisables sur diverses plateformes et dans plusieurs langages, dont C++. Développé et utilisé chez Facebook, écrit en Java. [Apache]
* [build2](https://build2.org/) - Chaîne d’outils multiplateforme de compilation, empaquetage et gestion des dépendances pour développer et empaqueter des projets C/C++. [MIT]
* [Ccache](https://ccache.dev/) - Cache rapide de compilateur C/C++. [GPLv3]
* [clib](https://github.com/clibs/clib) - Gestionnaire de paquets pour le langage C. [MIT]
* [CMake](https://cmake.org/) - Logiciel libre et open source multiplateforme de gestion de la compilation, indépendant du compilateur. [BSD]
* [Cget](https://github.com/pfultz2/cget) - Récupération de paquets CMake. [Boost] [site web](https://cget.readthedocs.io)
* [Conan](https://conan.io/) - Gestionnaire de paquets C/C++ open source. [MIT]
* [CPM](https://github.com/iauns/cpm) - Gestionnaire de paquets C++ fondé sur CMake et Git.
* [FASTBuild](https://www.fastbuild.org/docs/home.html) - Système de compilation open source hautes performances prenant en charge la compilation très évolutive, la mise en cache et la distribution réseau.
* [Hunter](https://www.github.com/ruslo/hunter) - Gestionnaire de paquets C++ multiplateforme piloté par CMake. [BSD-2]
* [MesonBuild](https://mesonbuild.com) - Système de compilation open source conçu pour être extrêmement rapide et, surtout, aussi convivial que possible.
* [Ninja](https://ninja-build.org/) - Petit système de compilation privilégiant la vitesse.
* [Sccache](https://github.com/mozilla/sccache) - Cache rapide de compilateur C/C++, multiplateforme et prenant en charge le stockage dans le cloud.
* [Scons](https://www.scons.org/) - Outil de construction logicielle configuré par un script Python.
* [Sconsolidator](https://github.com/IFS-HSR/SConsolidator) - Intégration du système de compilation Scons à Eclipse CDT.
* [Spack](https://spack.io/) - Gestionnaire de paquets flexible prenant en charge plusieurs versions, configurations, plateformes et compilateurs. [Apache-2.0/MIT]
* [SW](https://software-network.org/) - Système de compilation et gestionnaire de paquets multiplateforme pour C++ et d’autres langages, proposant de nombreux paquets. [GPLv3]
* [tundra](https://github.com/deplinenoise/tundra) - Système de compilation hautes performances conçu pour offrir les meilleures compilations incrémentielles possibles, même pour de très grands projets logiciels.
* [tup](https://gittup.org/tup/) - Système de compilation basé sur les fichiers, qui surveille en arrière-plan les fichiers modifiés.
* [Premake](https://premake.github.io) - Outil configuré par un script Lua qui génère des fichiers de projet pour Visual Studio, GNU Make, Xcode, Code::Blocks, etc., sous Windows, Mac OS X et Linux.
* [Vcpkg](https://github.com/microsoft/vcpkg) - Gestionnaire de bibliothèques C++ pour Windows, Linux et macOS. [MIT]
* [waf](https://gitlab.com/ita1024/waf) - Framework Python de configuration, compilation et installation d’applications. [BSD] [site web](https://waf.io/)
* [XMake](https://xmake.io/) - Outil de compilation C/C++ multiplateforme fondé sur Lua, avec gestionnaire de paquets intégré xrepo. [Apache]
* [boost-cmake](https://github.com/Orphis/boost-cmake) - Modules CMake pour les bibliothèques Boost. [BSD-3-Clause]
* [cmake-examples](https://github.com/pr0g/cmake-examples) - Collection d’exemples CMake utiles pour différents scénarios. [MIT]

## Analyse statique du code
*Liste d’outils d’amélioration de la qualité et de réduction des défauts par analyse du code*

* [Cppcheck](https://cppcheck.sourceforge.net/) - Outil d’analyse statique du code C/C++. - [source](https://github.com/danmar/cppcheck)
* [CppDepend](https://www.cppdepend.com/) - Simplifie la gestion des bases de code C/C++ complexes en analysant et visualisant les dépendances, définissant des règles de conception, effectuant des analyses d’impact et comparant différentes versions.
* [cpplint](https://github.com/cpplint/cpplint) - Vérificateur de style C++ conforme au guide de style C++ de Google.
* [PVS-Studio](https://www.viva64.com/en/pvs-studio/) - Outil de détection de bogues dans le code source de programmes écrits en C, C++ et C#.
* [cpp-dependencies](https://github.com/tomtom-international/cpp-dependencies) - Outil de vérification des dépendances #include C++ (graphes de dépendances générés au format .dot). [Apache]
* [include-what-you-use](https://github.com/include-what-you-use/include-what-you-use) - Outil utilisable avec clang pour analyser les inclusions dans les fichiers source C et C++. [site web](https://include-what-you-use.org/)
* [Infer](https://github.com/facebook/infer) - Analyseur statique pour Java, C et Objective-C. [BSD]
* [OCLint](https://oclint.org/) - Outil d’analyse statique du code source C, C++ et Objective-C visant à améliorer la qualité et réduire les défauts. - [source](https://github.com/oclint/oclint)
* [Clang Static Analyzer](https://clang-analyzer.llvm.org/index.html) - Outil d’analyse du code source détectant les bogues dans les programmes C, C++ et Objective-C.
* [Linticator](https://linticator.com) - Intégration de Pc-/FlexeLint à Eclipse CDT.
* [IKOS](https://github.com/NASA-SW-VnV/ikos) - Analyseur statique C/C++ fondé sur la théorie de l’interprétation abstraite. [NOSA 1.3]
* [List of tools for static code analysis](https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis#C.2FC.2B.2B) - Liste d’outils d’analyse statique du code tirée de Wikipédia.
* [OptView2](https://github.com/OfekShilon/optview2) - Examine les optimisations manquées par Clang.
* [Trunk](https://trunk.io) - Boîte à outils de vérification, test, fusion et surveillance du code.
* [CodeCompass](https://github.com/Ericsson/CodeCompass) - Outil open source de compréhension du code pour les grands projets C/C++. [GPL-3.0]
* [CodeChecker](https://github.com/Ericsson/codechecker) - Outils d’analyse, base de données des défauts et extension de visualisation pour Clang Static Analyzer et Clang-Tidy. [Apache-2.0]

## Outils de style de code

* [Artistic Style](https://astyle.sourceforge.net/) - Outil de formatage de code C/C++/C#/Obj-C/Java, également appelé astyle.
* [ClangFormat](https://clang.llvm.org/docs/ClangFormat.html) - Outil de formatage de code C/C++/Obj-C.
* [Clang-Tidy](https://clang.llvm.org/extra/clang-tidy.html) - Outil de linting C++ fondé sur Clang.
* [EditorConfig](https://editorconfig.org/) - EditorConfig aide à maintenir un style de code cohérent entre différents éditeurs et IDE.
* [Uncrustify](https://github.com/uncrustify/uncrustify) - Outil d’embellissement du code.

# Ressources
*Ressources diverses, comme des livres, sites web et articles, pour approfondir vos compétences et connaissances en développement C++.*

## Conception d’API

* [Beautiful Native Libraries](https://lucumr.pocoo.org/2013/8/18/beautiful-native-libraries/)
* [Designing Qt-Style C++ APIs](https://doc.qt.io/archives/qq/qq13-apis.html)

## Articles
*Articles remarquables sur C++.*

* [CppCon 2023 Presentation Materials](https://github.com/CppCon/CppCon2023) - Supports de présentation de CppCon 2023.
* [CppCon 2022 Presentation Materials](https://github.com/CppCon/CppCon2022) - Supports de présentation de CppCon 2022.
* [CppCon 2021 Presentation Materials](https://github.com/CppCon/CppCon2021) - Supports de présentation de CppCon 2021.
* [CppCon 2020 Presentation Materials](https://github.com/CppCon/CppCon2020) - Supports de présentation de CppCon 2020.
* [CppCon 2019 Presentation Materials](https://github.com/CppCon/CppCon2019) - Supports de présentation de CppCon 2019.
* [CppCon 2018 Presentation Materials](https://github.com/CppCon/CppCon2018) - Supports de présentation de CppCon 2018.
* [CppCon 2017 Presentation Materials](https://github.com/CppCon/CppCon2017) - Supports de présentation de CppCon 2017.
* [CppCon 2016 Presentation Materials](https://github.com/CppCon/CppCon2016) - Supports de présentation de CppCon 2016.
* [CppCon 2015 Presentation Materials](https://github.com/CppCon/CppCon2015) - Supports de présentation de CppCon 2015.
* [CppCon 2014 Presentation Materials](https://github.com/CppCon/CppCon2014) - Supports de présentation de CppCon 2014.
* [C++Now 2023 Presentations](https://github.com/boostcon/cppnow_presentations_2023) - Supports présentés à C++Now 2023.
* [C++Now 2022 Presentations](https://github.com/boostcon/cppnow_presentations_2022) - Supports présentés à C++Now 2022.
* [C++Now 2021 Presentations](https://github.com/boostcon/cppnow_presentations_2021) - Supports présentés à C++Now 2021.
* [C++Now 2019 Presentations](https://github.com/boostcon/cppnow_presentations_2019) - Supports présentés à C++Now 2019.
* [C++Now 2018 Presentations](https://github.com/boostcon/cppnow_presentations_2018) - Supports présentés à C++Now 2018.
* [C++Now 2017 Presentations](https://github.com/boostcon/cppnow_presentations_2017) - Supports présentés à C++Now 2017.
* [C++Now 2016 Presentations](https://github.com/boostcon/cppnow_presentations_2016) - Supports présentés à C++Now 2016.
* [C++Now 2015 Presentations](https://github.com/boostcon/cppnow_presentations_2015) - Supports présentés à C++Now 2015.
* [C++Now 2014 Presentations](https://github.com/boostcon/cppnow_presentations_2014) - Supports présentés à C++Now 2014.
* [C++Now 2013 Presentations](https://github.com/boostcon/cppnow_presentations_2013) - Supports présentés à C++Now 2013.
* [C++Now 2012 Presentations](https://github.com/boostcon/cppnow_presentations_2012) - Supports présentés à C++Now 2012.
* [cpp17_in_TTs](https://github.com/tvaneerd/cpp17_in_TTs) - Descriptions des fonctionnalités de C++17, présentées principalement sous forme de « Tony Tables ».
* [All C++20 core language features with examples](https://oleksandrkvl.github.io/2021/04/02/cpp-20-overview.html) - Référence de toutes les fonctionnalités du langage C++20, avec des exemples.
* [Memory Footprint of GUI Toolkits](https://szibele.com/memory-footprint-of-gui-toolkits/) - Comparaison de l’empreinte mémoire de différentes boîtes à outils d’interfaces graphiques.
* [C++ UI Libraries](https://philippegroarke.com/posts/2018/c++_ui_solutions/) - Liste complète de solutions d’interface utilisateur en C++.
* [C++ Compilation](https://github.com/green7ea/cpp-compilation) - Brève description du processus de compilation C++.
* [Books on C++17](https://blogs.msdn.microsoft.com/vcblog/2018/09/25/books-on-c17/) - Liste de livres sur C++17.
* [modern-cpp-features](https://github.com/AnthonyCalandra/modern-cpp-features) - Aide-mémoire des fonctionnalités modernes du langage et des bibliothèques C++.
* [Choosing Some C++ Over C](https://medium.com/@davidtstrauss/choosing-some-c-over-c-f5acb3dce4f5) - Article sur les cas où préférer C++ à C.
* [C++ 17 Features](https://www.bfilipek.com/2017/01/cpp17features.html) - Liste complète des fonctionnalités de C++17.
* [Master C Programming with Open Source Books](https://www.ossblog.org/master-c-programming-with-open-source-books/) - Sélection de livres open source pour apprendre la programmation en C.

## Livres
*Livres remarquables sur C ou C++.*

* [List of Free C or C++ Books](https://github.com/fffaraz/awesome-cpp/blob/master/books.md)
* [Free C Books](https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#c) - vhf/free-programming-books/C.
* [Free C++ Books](https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#cpp) - vhf/free-programming-books/C++.
* [Practical Guide to Bare Metal C++](https://github.com/arobenko/bare_metal_cpp)
* [cppbestpractices](https://github.com/lefticus/cppbestpractices) - Collection collaborative de bonnes pratiques C++.

## Normes de codage

* [Cert C++](https://resources.sei.cmu.edu/downloads/secure-coding/assets/sei-cert-cpp-coding-standard-2016-v01.pdf)
* [Misra C++ 2008](https://www.cppdepend.com/misra-cpp)
* [Autosar C++ 2014](https://www.autosar.org/fileadmin/standards/R21-11/AP/AUTOSAR_RS_CPP14Guidelines.pdf)
* [F-35 Fighter Jet's C++ Coding Standards](https://www.stroustrup.com/JSF-AV-rules.pdf)

## Style de codage

* [C++ Core Guidelines](https://github.com/isocpp/CppCoreGuidelines) - Ensemble « officiel » de recommandations C++, révisé par l’auteur du langage C++.
* [C++ Dos and Don'ts](https://www.chromium.org/developers/coding-style/cpp-dos-and-donts) - Les projets Chromium > Pour les développeurs > Style de codage > À faire et à ne pas faire en C++.
* [google-styleguide](https://github.com/google/styleguide) - Guides de style pour les projets open source issus de Google.
* [Google C++ Style Guide](https://google.github.io/styleguide/cppguide.html)
* [GNU Coding Standard](https://www.gnu.org/prep/standards/standards.html)
* [Linux kernel coding style](https://www.kernel.org/doc/Documentation/process/coding-style.rst)
* [LLVM Coding Standards](https://llvm.org/docs/CodingStandards.html)

## Balados

* [CppCast](https://cppcast.com) - Le premier balado sur C++ réalisé par des développeurs C++ pour des développeurs C++.
* [CppChat](https://cpp.chat) - Tour d’horizon (parfois) hebdomadaire de l’actualité C++, avec un invité de la communauté.

## Conférences

* [C++ Conferences](https://github.com/eoan-ermine/cpp-conferences) - Catalogue de conférences C++.
* [CppCon Talks](https://www.youtube.com/user/CppCon/videos) :zap: - La conférence C++.
* [Quick game development with C++11/C++14](https://github.com/SuperV1234/cppcon2014) - Conférence de Vittorio Romeo à CppCon 2014.
* [Presentation on Hana for C++Now 2015](https://github.com/ldionne/hana-cppnow-2015)
* [Meeting Cpp](https://www.youtube.com/user/MeetingCPP/videos) - Chaîne YouTube Meeting C++.

## Vidéos
*Vidéos remarquables sur C ou C++.*

* [List of C or C++ YouTube Videos](https://github.com/fffaraz/awesome-cpp/blob/master/videos.md)
* [Awesome C Programming Tutorials in Hi Def [HD]](https://www.youtube.com/playlist?list=PLCB9F975ECF01953C) - Collection de tutoriels détaillés sur le langage C, destinée aux débutants et aux nouveaux programmeurs.
* [C++](https://www.youtube.com/playlist?list=PL2F919ADECA5E39A6) - Par VoidRealms.
* [C++ Qt Programming](https://www.youtube.com/playlist?list=PL2D1942A4688E9D63) - Par VoidRealms.
* [C++ Programming Tutorials Playlist](https://www.youtube.com/playlist?list=PLAE85DE8440AA6B83) - Liste officielle des tutoriels de programmation C++ de Bucky par TheNewBoston.
* [C++ Programming Tutorials from thenewboston](https://www.youtube.com/playlist?list=PLF541C2C1F671AEF6) - Tous les tutoriels de programmation C++ de thenewboston.
* [C++ GUI with Qt Playlist](https://www.youtube.com/playlist?list=PLD0D54219E5F2544D) - Liste officielle des tutoriels d’interfaces graphiques C++ avec Qt de thenewboston.
* [Caleb Curry's C Programming Tutorials](https://www.youtube.com/playlist?list=PL_c9BZzLwBRKKqOc9TJz1pP0ASrxLMtp2) - Liste complète de tutoriels de programmation en C.
* [C Programming Tutorials](https://www.youtube.com/playlist?list=PL78280D6BE6F05D34) - Retrouvez ici tous les tutoriels de programmation en C de TheNewBoston.
* [Bo Qian's playlist](https://www.youtube.com/user/BoQianTheProgrammer/playlists) - Bibliothèque Boost, bibliothèque standard C++, C++ moderne, C++ avancé, STL avancée, ...
* [The Cherno's C++ Playlist](https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb) - Série complète de tutoriels C++ par The Cherno.
* [Code for Yourself C++ Playlist](https://www.youtube.com/playlist?list=PLwhKb0RIaIS1sJkejUmWj-0lk7v_xgCuT) - Cours complet de C++ couvrant les bases jusqu’à la conception logicielle.

## Sites web
*Sites web utiles sur C ou C++.*

* [Standard C++](https://isocpp.org/) :zap: - Actualités, état et discussions autour du C++ standard.
* [Build Bench](https://build-bench.com/) - Comparaison de compilations C++.
* [Quick Bench](https://quick-bench.com/) - Tests de performance rapides en C++.
* [CppCon](https://cppcon.org/) - La conférence C++.
* [C++ reference](https://cppreference.com) - Référence en ligne complète des langages C et C++ et de leurs bibliothèques standard.
* [cppstat](https://cppstat.dev) - Site répertoriant les fonctionnalités C++ et leur prise en charge par les compilateurs et les implémentations de bibliothèques standard, de manière accessible.
* [C++ by Example](https://www.cbyexample.com/) - Apprendre C++ par l’exemple.
* [cplusplus.com](https://www.cplusplus.com/) - Le réseau de ressources C++.
* [C FAQ](https://c-faq.com/) - Foire aux questions sur C.
* [C++ FAQ](https://www.parashift.com/c++-faq/) - Foire aux questions sur C++.
* [C++ FQA Lite](https://yosefk.com/c++fqa/) - Réponses aux questions fréquemment posées sur C++.
* [C++ Quiz](https://cppquiz.org) - Quiz en ligne simple pour tester vos connaissances du langage C++.
* [Guru of the Week](https://www.gotw.ca/gotw/) - Série régulière de problèmes de programmation C++ conçus et rédigés par Herb Sutter.
* [Meeting C++](https://meetingcpp.com/)
* [PVS-Studio’s challenge](https://quiz.pvs-studio.com) - Quiz C++ de PVS-Studio dans lequel il faut trouver des erreurs dans des fragments de code de projets open source.
* [Udemy C++ Courses and Tutorials](https://www.udemy.com/topic/c-plus-plus/)
* [C++ Hints](https://cpphints.com/) - Conseils quotidiens de l’équipe PVS-Studio sur les erreurs C++ les plus courantes et les moyens de les résoudre.
* [C++ tutorial](https://hackr.io/tutorials/learn-c-plus-plus) - Site de tutoriels en ligne classés par les utilisateurs, proposant plusieurs cours pour apprendre C++.
* [C++ Tutorial for Beginners](https://www.scaler.com/topics/cpp) - Tutoriel complet sur C++, conçu par des experts qualifiés.
* [C++ for yourself](https://github.com/cpp-for-yourself) - Tutoriel complet de C++ moderne, des fondamentaux à la conception logicielle.
* [CompileBytes C++ Compiler](https://www.compilebytes.com/tools/cpp) – Compilateur C++ en ligne et environnement interactif d’exécution de code.
* [C++ Resources](https://andreasfertig.com/cpp-resources/) - Collection de ressources C++, notamment des livres, articles et outils.
* [CppPatterns](https://github.com/sftrabbit/CppPatterns-Patterns) - Dépôt de modèles et idiomes C++ modernes. [site web](https://cpppatterns.com)
* [Function Pointers](https://github.com/jerryryle/fuckingfunctionpointers.com) - Guide de compréhension des pointeurs de fonction en C/C++.


## Blogs
*Blogs utiles sur C ou C++.*

* [Coding For Speed](https://codingforspeed.com/) - Coding For Speed DOT COM, moins de temps d’exécution.
* [Eric Niebler](https://ericniebler.com/)
* [Sticky Bits](https://blog.feabhas.com/)
* [Paul Fultz II's Blog](https://pfultz2.com/blog/)
* [ridiculousfish](https://ridiculousfish.com/blog/posts/will-it-optimize.html) - Will It Optimize?
* [Embedded in Academia](https://blog.regehr.org/)
* [Simplify C++](https://arne-mertz.de/)
* [Fluent C++](https://www.fluentcpp.com/)
* [Bartek's Coding Blog](https://www.bfilipek.com/?m=1)
* [Kenny Kerr](https://kennykerr.ca/)
* [Sutter’s Mill](https://herbsutter.com/gotw/)
* [Vorbrodt's C++ Blog](https://vorbrodt.blog/)
* [foonathan::blog()](https://foonathan.net/index.html)
* [C++ Team Blog](https://devblogs.microsoft.com/cppblog/) - Blog de l’équipe Microsoft Visual C++.

## Autres projets Awesome
*Collection de codes, extraits utiles, ...*

* [algorithms](https://github.com/xtaci/algorithms) - Algorithmes et structures de données en C++.
* [c-algorithms](https://github.com/fragglet/c-algorithms) - Bibliothèque d’algorithmes en C.
* [30 Seconds of C++](https://github.com/Bhupesh-V/30-seconds-of-cpp)
* [awesome-ld-preload](https://github.com/gaul/awesome-ld-preload) - Sélection de ressources liées à LD_PRELOAD.
* [awesome-static-analysis](https://github.com/mre/awesome-static-analysis) - Sélection d’outils d’analyse statique pour tous les langages de programmation.
* [cpp_functional_programming](https://github.com/graninas/cpp_functional_programming) - Liste de ressources et de liens sur la programmation fonctionnelle en C++.
* [algorithms_and_data_structures](https://github.com/mandliya/algorithms_and_data_structures) - Implémentation d’algorithmes et de structures de données en C++.

# Autres listes Awesome
*Autres listes remarquables*

* [lists](https://github.com/jnv/lists) - Liste de listes (awesome) répertoriées sur GitHub.
* [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) - Sélection de ressources remarquables.
* [awesome](https://github.com/sindresorhus/awesome) :zap: - Sélection de listes Awesome.
* [C++ links](https://github.com/MattPD/cpplinks) - Liste thématique de ressources C++.
* [Awesome C++](https://cpp.libhunt.com/) - Miroir de LibHunt.
* [Awesome C](https://github.com/oz123/awesome-c) 1
* [Awesome C](https://github.com/aleksandar-todorovic/awesome-c) 2
* [Awesome Modern C++](https://github.com/rigtorp/awesome-modern-cpp) - Collection de ressources sur le C++ moderne.
* [AwesomePerfCpp](https://github.com/fenbf/AwesomePerfCpp) - Sélection de ressources remarquables sur l’optimisation des performances en C/C++.
* [free-programming-books](https://github.com/vhf/free-programming-books) - Liste de livres de programmation librement accessibles.
* [Inqlude](https://inqlude.org/) - Archive des bibliothèques Qt.
* [papers-we-love](https://github.com/papers-we-love/papers-we-love) - Articles de la communauté informatique à lire et à discuter.
* [awesome-algorithms](https://github.com/tayllan/awesome-algorithms) - Sélection de ressources remarquables pour apprendre et/ou pratiquer les algorithmes.
* [awesome-hpp](https://github.com/p-ranav/awesome-hpp) - Sélection de bibliothèques C++ remarquables à en-têtes seuls.
* [awesome-talks](https://github.com/JanVanRyswyck/awesome-talks) - Nombreux screencasts, enregistrements de rencontres de groupes d’utilisateurs et conférences.
* [Projects](https://github.com/karan/Projects) - Liste de projets pratiques que chacun peut réaliser dans n’importe quel langage de programmation.
* [Awesome interview questions](https://github.com/MaximAbramchuck/awesome-interviews) - Liste de listes de questions d’entretien pour les technologies les plus populaires, dont C et C++.
* [nothings/single_file_libs](https://github.com/nothings/single_file_libs) :zap: - Liste de bibliothèques C/C++ à fichier unique.

# Emplois

* Cette liste est actuellement vide, mais vous pouvez la compléter en ouvrant une demande de fusion.

# Sponsors

* Veuillez nous contacter si vous souhaitez parrainer ce dépôt. Le nom et le logo de votre entreprise seront mis en évidence ici.

# Contribuer
Veuillez consulter les [consignes de contribution](https://github.com/fffaraz/awesome-cpp/blob/master/CONTRIBUTING.md) pour en savoir plus.
Merci à tous les [contributeurs](https://github.com/fffaraz/awesome-cpp/graphs/contributors) ; vous êtes formidables !

#### *Si vous remarquez ici un projet ou un lien qui n’est plus maintenu ou n’a plus sa place dans cette liste, veuillez proposer une pull request pour améliorer ce document. Merci !*
