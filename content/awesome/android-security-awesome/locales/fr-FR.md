# Android Security Awesome ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)

[![Star History Rank](https://api.star-history.com/badge?repo=ashishb/android-security-awesome&theme=dark)](https://www.star-history.com/ashishb/android-security-awesome)

[![Link Liveness Checker](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml)

[![Lint Shell scripts](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml)
[![Lint Markdown](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml)
[![Lint YAML](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml)
[![Lint GitHub Actions](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml)
![GitHub contributors](https://img.shields.io/github/contributors/ashishb/android-security-awesome)

Une collection de ressources liées à la sécurité Android.

Si vous trouvez ce projet utile, merci d'envisager de le [soutenir](./sponsors.md).

1. [Outils](#tools)
1. [Recherche/Publications/Livres](#academicresearchpublicationsbooks)
1. [Exploits/Vulnérabilités/Bugs](#exploitsvulnerabilitiesbugs)

## Outils

### Analyseurs en ligne

1. [Appknox](https://www.appknox.com/) - payant
1. [Virustotal](https://www.virustotal.com/)
1. [NowSecure Lab Automated](https://www.nowsecure.com/blog/2016/09/19/announcing-nowsecure-lab-automated/) - Outil d'entreprise pour les tests de sécurité des applications mobiles Android et iOS. Lab Automated effectue une analyse dynamique et statique sur de vrais appareils dans le cloud et renvoie les résultats en quelques minutes. Payant
1. [App Detonator](https://appdetonator.run/) - Détonne le binaire APK pour fournir des détails au niveau du code source, y compris l'auteur de l'application, la signature, la build et les informations du manifeste. Quota gratuit de 3 analyses/jour.
1. [Pithus](https://beta.pithus.org/) - Analyseur APK open source. Encore en version bêta et limité à l'analyse statique pour le moment. Il est possible de chasser les logiciels malveillants avec des règles YARA. En savoir plus [ici](https://beta.pithus.org/about/).
1. [Oversecured](https://oversecured.com/) - Scanner de vulnérabilités d'entreprise pour les applications Android et iOS ; il offre aux propriétaires et développeurs d'applications la possibilité de sécuriser chaque nouvelle version d'une application mobile en intégrant Oversecured au processus de développement. Payant.
1. [AppSweep by Guardsquare](https://appsweep.guardsquare.com/) - Test de sécurité des applications Android gratuit et rapide pour les développeurs
1. [Koodous](https://koodous.com) - Effectue une analyse statique/dynamique des logiciels malveillants sur un vaste dépôt d'échantillons Android et les compare à des règles Yara publiques et privées.
1. [Immuniweb](https://www.immuniweb.com/mobile/). Effectue un « OWASP Mobile Top 10 Test », une « Mobile App Privacy Check » et un test des permissions de l'application. Le niveau gratuit est de 4 tests par jour, avec un rapport après inscription.
1. [ANY.RUN](https://app.any.run/) - Une plateforme d'analyse de logiciels malveillants interactive basée sur le cloud avec prise en charge de l'analyse d'applications Android. Un plan gratuit limité est disponible.
1. ~~[BitBaan](https://malab.bitbaan.com/)~~
1. ~~[AVC UnDroid](http://undroid.av-comparatives.info/)~~
1. ~~[AMAaaS](https://amaaas.com) - Service gratuit d'analyse de logiciels malveillants Android. Un service bare-metal proposant une analyse statique et dynamique des applications Android. Un produit de [MalwarePot](https://malwarepot.com/index.php/AMAaaS)~~.
1. ~~[AppCritique](https://appcritique.boozallen.com) - Téléchargez vos APK Android et recevez des évaluations de sécurité gratuites complètes~~
1. ~~[NVISO ApkScan](https://apkscan.nviso.be/) - arrêt le 31 oct. 2019~~
1. ~~[Mobile Malware Sandbox](http://www.mobilemalware.com.br/analysis/index_en.php)~~
1. ~~[IBM Security AppScan Mobile Analyzer](https://appscan.bluemix.net/mobileAnalyzer) - payant~~
1. ~~[Visual Threat](https://www.visualthreat.com/) - n'est plus un analyseur d'applications Android~~
1. ~~[Tracedroid](http://tracedroid.few.vu.nl/)~~
1. ~~[habo](https://habo.qq.com/) - 10/jour~~
1. ~~[CopperDroid](http://copperdroid.isg.rhul.ac.uk/copperdroid/)~~
1. ~~[SandDroid](http://sanddroid.xjtu.edu.cn/)~~
1. ~~[Stowaway](http://www.android-permissions.org/)~~
1. ~~[Anubis](http://anubis.iseclab.org/)~~
1. ~~[Mobile app insight](http://www.mobile-app-insight.org)~~
1. ~~[Mobile-Sandbox](http://mobile-sandbox.com)~~
1. ~~[Ijiami](http://safe.ijiami.cn/)~~
1. ~~[Comdroid](http://www.comdroid.org/)~~
1. ~~[Android Sandbox](http://www.androidsandbox.net/)~~
1. ~~[Foresafe](http://www.foresafe.com/scan)~~
1. ~~[Dexter](https://dexter.dexlabs.org/)~~
1. ~~[MobiSec Eacus](http://www.mobiseclab.org/eacus.jsp)~~
1. ~~[Fireeye](https://fireeye.ijinshan.com/)- max 60 Mo, 15/jour~~
1. ~~[approver](https://approver.talos-sec.com/) - Approver est une plateforme d'analyse de sécurité et d'évaluation des risques entièrement automatisée pour les applications Android et iOS. Payant.~~
1. ~~[Fraunhofer App-ray](http://app-ray.co/) - domaine expiré~~
1. ~~[AndroTotal](http://andrototal.org/) - mort~~

### Outils d'analyse statique

1. [Androwarn](https://github.com/maaaaz/androwarn/) - détecte et avertit l'utilisateur des comportements potentiellement malveillants développés par une application Android.
1. [ApkAnalyser](https://github.com/sonyxperiadev/ApkAnalyser)
1. [APKInspector](https://github.com/honeynet/apkinspector/)
1. [Droid Intent Data Flow Analysis for Information Leakage](https://insights.sei.cmu.edu/library/didfail/)
1. [DroidLegacy](https://bitbucket.org/srl/droidlegacy)
1. [FlowDroid](https://blogs.uni-paderborn.de/sse/tools/flowdroid/)
1. [Android Decompiler](https://www.pnfsoftware.com/) – payant
1. [PSCout](https://security.csl.toronto.edu/pscout/) - Un outil qui extrait la spécification des permissions du code source d'Android OS en utilisant l'analyse statique
1. [Amandroid](http://amandroid.sireum.org/)
1. [SmaliSCA](https://github.com/dorneanu/smalisca) - Analyse statique de code Smali
1. [CFGScanDroid](https://github.com/douggard/CFGScanDroid) - Analyse et compare le CFG par rapport au CFG d'applications malveillantes
1. [Madrolyzer](https://github.com/maldroid/maldrolyzer) - extrait des données exploitables comme les C&C, numéros de téléphone, etc.
1. [ConDroid](https://github.com/JulianSchuette/ConDroid) - Effectue une combinaison d'exécution symbolique et concrète de l'application
1. [DroidRA](https://github.com/serval-snt-uni-lu/DroidRA)
1. [RiskInDroid](https://github.com/ClaudiuGeorgiu/RiskInDroid) - Un outil pour calculer le risque des applications Android en fonction de leurs permissions, avec une démo en ligne disponible.
1. [SUPER](https://github.com/SUPERAndroidAnalyzer/super) - Analyseur Android Rust Sécurisé, Unifié, Puissant et Extensible
1. [ClassyShark](https://github.com/google/android-classyshark) - Un outil autonome d'inspection binaire qui peut parcourir n'importe quel exécutable Android et afficher des informations importantes.
1. [StaCoAn](https://github.com/vincentcox/StaCoAn) - Outil multiplateforme qui aide les développeurs, les chasseurs de bug-bounty et les hackers éthiques à effectuer une analyse de code statique sur les applications mobiles. Cet outil a été créé avec un fort accent sur la convivialité et le guidage graphique dans l'interface utilisateur.
1. [JAADAS](https://github.com/flankerhqd/JAADAS) - Outil d'analyse de programme intraprocédural et interprocédural conjoint pour trouver des vulnérabilités dans les applications Android, basé sur Soot et Scala
1. [Quark-Engine](https://github.com/quark-engine/quark-engine) - Un système de notation des logiciels malveillants Android ignorant l'obfuscation
1. [One Step Decompiler](https://github.com/b-mueller/apkx) - Décompilation d'APK Android pour les paresseux
1. [APKLeaks](https://github.com/dwisiswant0/apkleaks) - Analyse du fichier APK à la recherche d'URI, d'endpoints et de secrets.
1. [Mobile Audit](https://github.com/mpast/mobileAudit) - Application Web pour effectuer une analyse statique et détecter les logiciels malveillants dans les APK Android.
1. [Detekt](https://github.com/detekt/detekt) - Analyse statique de code pour Kotlin
1. [APKdevastate](https://github.com/rafigk2v9c/APKdevastate/) - Logiciel d'analyse avancé pour les payloads APK créés par des RAT.
1. ~~[Smali CFG generator](https://github.com/EugenioDelfa/Smali-CFGs)~~
1. ~~[Several tools from PSU](http://siis.cse.psu.edu/tools.html)~~
1. ~~[SPARTA](https://www.cs.washington.edu/sparta) - vérifie (prouve) qu'une application satisfait une politique de sécurité de flux d'informations ; basé sur le [Checker Framework](https://types.cs.washington.edu/checker-framework/)~~

### Analyseurs de vulnérabilités d'applications

1. [QARK](https://github.com/linkedin/qark/) - QARK par LinkedIn permet aux développeurs d'applications de scanner les applications à la recherche de problèmes de sécurité
1. [AndroBugs](https://github.com/AndroBugs/AndroBugs_Framework)
1. [Nogotofail](https://github.com/google/nogotofail)
1. [Ostorlab](https://ostorlab.co) - La version gratuite d'Ostorlab scanne les applications de l'Android Play Store, de l'iOS App Store et de Huawei AppGallery
1. ~~[Devknox](https://devknox.io/) - Plugin IDE pour construire des applications Android sécurisées. N'est plus maintenu.~~

### Outils d'analyse dynamique

1. [Android DBI framework](http://www.mulliner.org/blog/blosxom.cgi/security/androiddbiv02.html)
1. [Androl4b](https://github.com/sh4hin/Androl4b)- Une machine virtuelle pour l'évaluation d'applications Android, la rétro-ingénierie et l'analyse de logiciels malveillants
1. [House](https://github.com/nccgroup/house)- House : un kit d'analyse d'applications mobiles à l'exécution avec une interface Web, propulsé par Frida, écrit en Python.
1. [Mobile-Security-Framework MobSF](https://github.com/MobSF/Mobile-Security-Framework-MobSF) - Mobile Security Framework est un framework de test de pénétration automatisé open source intelligent, tout-en-un, pour applications mobiles (Android/iOS), capable d'effectuer une analyse statique, dynamique et des tests d'API Web.
1. [Droidbox](https://github.com/pjlantz/droidbox)
1. [Drozer](https://github.com/mwrlabs/drozer)
1. [Xposed](https://forum.xda-developers.com/xposed/xposed-installer-versions-changelog-t2714053) - équivalent d'une injection de code basée sur stub mais sans aucune modification du binaire
1. [Inspeckage](https://github.com/ac-pm/Inspeckage) - Inspecteur de packages Android - analyse dynamique avec hooks d'API, démarrage d'activités non exportées, et plus. (Module Xposed)
1. [Android Hooker](https://github.com/AndroidHooker/hooker) - Instrumentation de code Java dynamique (nécessite le framework Substrate)
1. [ProbeDroid](https://github.com/ZSShen/ProbeDroid) - Instrumentation de code Java dynamique
1. [DECAF](https://github.com/sycurelab/DECAF) - Framework d'analyse de code exécutable dynamique basé sur QEMU (DroidScope est maintenant une extension de DECAF)
1. [CuckooDroid](https://github.com/idanr1986/cuckoo-droid) - Extension Android pour le sandbox Cuckoo
1. [Mem](https://github.com/MobileForensicsResearch/mem) - Analyse de la mémoire d'Android (root requis)
1. [Crowdroid](http://www.ida.liu.se/labs/rtslab/publications/2011/spsm11-burguera.pdf) – impossible de trouver l'outil réel
1. [AuditdAndroid](https://github.com/nwhusted/AuditdAndroid) – Portage Android d'auditd, plus sous développement actif
1. [Android Security Evaluation Framework](https://code.google.com/p/asef/) - plus sous développement actif
1. [Aurasium](https://github.com/xurubin/aurasium) – Application pratique de politiques de sécurité pour les applications Android via la réécriture de bytecode et le monitoring de référence sur place.
1. [Android Linux Kernel modules](https://github.com/strazzere/android-lkms)
1. [StaDynA](https://github.com/zyrikby/StaDynA) - Un système supportant l'analyse d'applications de sécurité en présence de fonctionnalités de mise à jour de code dynamique (chargement dynamique de classes et réflexion). Cet outil combine l'analyse statique et dynamique des applications Android afin de révéler le comportement caché/mis à jour et d'étendre les résultats de l'analyse statique avec ces informations.
1. [DroidAnalytics](https://github.com/zhengmin1989/DroidAnalytics) - incomplet
1. [Vezir Project](https://github.com/oguzhantopgul/Vezir-Project) - Machine virtuelle pour le pentest d'applications mobiles et l'analyse de logiciels malveillants mobiles
1. [MARA](https://github.com/xtiankisutsa/MARA_Framework) - Framework de rétro-ingénierie et d'analyse d'applications mobiles
1. [Taintdroid](http://appanalysis.org) - nécessite la compilation d'AOSP
1. [ARTist](https://artist.cispa.saarland) - Un framework flexible d'instrumentation et d'analyse hybride open source pour les applications Android et le middleware Java d'Android. Il est basé sur le compilateur de l'Android Runtime (ART) et modifie le code lors de la compilation sur l'appareil.
1. [Android Malware Sandbox](https://github.com/Areizen/Android-Malware-Sandbox)
1. [AndroPyTool](https://github.com/alexMyG/AndroPyTool) - un outil pour extraire des caractéristiques statiques et dynamiques des APK Android. Il combine différents outils d'analyse d'applications Android bien connus tels que DroidBox, FlowDroid, Strace, AndroGuard et VirusTotal.
1. [Runtime Mobile Security (RMS)](https://github.com/m0bilesecurity/RMS-Runtime-Mobile-Security) - est une puissante interface Web qui vous aide à manipuler les applications Android et iOS à l'exécution
1. [PAPIMonitor](https://github.com/Dado1513/PAPIMonitor) – PAPIMonitor (Python API Monitor pour applications Android) est un outil Python basé sur Frida pour surveiller les API sélectionnées par l'utilisateur pendant l'exécution de l'application.
1. [Android_application_analyzer](https://github.com/NotSoSecure/android_application_analyzer) - L'outil est utilisé pour analyser le contenu de l'application Android dans le stockage local.
1. [Decompiler.com](https://www.decompiler.com/) - Décompileur APK et Java en ligne
1. [friTap](https://github.com/fkie-cad/friTap)- Intercepte les connexions SSL/TLS avec Frida ; permet l'extraction de clés TLS et le déchiffrement de la charge TLS au format PCAP sur Android en temps réel.
1. [HacknDroid](https://github.com/RaffaDNDM/HacknDroid) - Un outil conçu pour automatiser diverses tâches de pentest d'applications mobiles (MAPT) et faciliter l'interaction avec les appareils Android.
1. [adbsploit](https://github.com/mesquidar/adbsploit) - outils pour exploiter l'appareil via ADB
1. [Brida](https://github.com/federicodotta/Brida) - Extension Burp Suite qui, faisant office de pont entre Burp et Frida, vous permet d'utiliser et de manipuler les propres méthodes des applications tout en falsifiant le trafic échangé entre les applications et leurs services/serveurs backend.
1. [MPT](https://github.com/ByteSnipers/mobile-pentest-toolkit) - MPT (Mobile Pentest Toolkit) est une solution indispensable pour vos workflows de test de pénétration Android. Cet outil vous permet d'automatiser les tâches de sécurité.
1. [Andriller](https://github.com/den4uk/andriller) - un utilitaire logiciel avec un ensemble d'outils forensiques pour smartphones. Il effectue une acquisition en lecture seule, forensiquement sûre et non destructive à partir d'appareils Android.
1. [Mira](https://github.com/vwww-droid/Mira) - Plateforme d'analyse de protection à l'exécution pour les applications Android et iOS tierces, permettant à l'IA d'utiliser les capacités shell, Java, Native et Frida côté application hôte pour la détection des risques d'environnement et la validation de durcissement.
1. [FlutterTap](https://github.com/script-or-script/FlutterTap) - Module Zygisk qui contourne la vérification de certificat BoringSSL dans `libflutter.so` et redirige le trafic des applications Flutter sélectionnées vers un proxy. Persistant après redémarrage, il ne nécessite donc ni session Frida, ni câble, ni port d'écoute.
1. [Mobix](https://github.com/blackfoxxx/Mobix) - Laboratoire de pentest Android autorisé : chaîne de contournement du SSL-pinning/root-detection Frida, capture de trafic mitmproxy avec balisage automatique IDOR, un tableau de bord Web, et un serveur MCP de 36 outils afin qu'un agent Claude Code puisse exécuter lui-même l'ensemble du cycle scan-découverte.
1. ~~[AppUse](https://appsec-labs.com/AppUse/) – build personnalisé pour le test de pénétration~~
1. ~~[Appie](https://manifestsecurity.com/appie/) - Appie est un paquet logiciel préconfiguré pour fonctionner comme un environnement de pentest Android. Il est entièrement portable et peut être transporté sur une clé USB ou un smartphone. C'est une solution unique pour tous les outils nécessaires à l'évaluation de sécurité des applications Android et une alternative formidable aux machines virtuelles existantes.~~
1. ~~[Android Tamer](https://androidtamer.com/) - Plateforme virtuelle/live pour les professionnels de la sécurité Android~~
1. ~~[Android Malware Analysis Toolkit](http://www.mobilemalware.com.br/amat/download.html) - (distribution Linux) Auparavant, c'était un [analyseur en ligne](http://dunkelheit.com.br/amat/analysis/index_en.php)~~
1. ~~[Android Reverse Engineering](https://redmine.honeynet.org/projects/are/wiki) – ARE (rétro-ingénierie Android) n'est plus sous développement actif~~
1. ~~[ViaLab Community Edition](https://www.nowsecure.com/blog/2014/09/09/introducing-vialab-community-edition/)~~
1. ~~[Mercury](https://labs.mwrinfosecurity.com/tools/2012/03/16/mercury/)~~
1. ~~[Cobradroid](https://thecobraden.com/projects/cobradroid/) – image personnalisée pour l'analyse de logiciels malveillants~~

### Rétro-ingénierie

1. [Smali/Baksmali](https://github.com/JesusFreke/smali) – décompilation apk
1. [emacs syntax coloring for smali files](https://github.com/strazzere/Emacs-Smali)
1. [vim syntax coloring for smali files](http://codetastrophe.com/smali.vim)
1. [AndBug](https://github.com/swdunlop/AndBug)
1. [Androguard](https://github.com/androguard/androguard) – puissant, s'intègre bien avec d'autres outils
1. [Apktool](https://github.com/iBotPeaches/Apktool) – vraiment utile pour la compilation/décompilation (utilise smali)
1. [Android Framework for Exploitation](https://github.com/appknox/AFE)
1. [Bypass signature and permission checks for IPCs](https://github.com/iSECPartners/Android-KillPermAndSigChecks)
1. [Android OpenDebug](https://github.com/iSECPartners/Android-OpenDebug) – rendre n'importe quelle application sur l'appareil débogable (en utilisant Cydia Substrate).
1. [Dex2Jar](https://github.com/pxb1988/dex2jar) - convertisseur dex vers jar
1. [Enjarify](https://github.com/google/enjarify) - convertisseur dex vers jar de Google
1. [Dedexer](https://sourceforge.net/projects/dedexer/)
1. [Fino](https://github.com/sysdream/fino)
1. [Frida](https://www.frida.re/) - injecte du JavaScript pour explorer les applications et un [outil GUI](https://github.com/antojoseph/diff-gui) pour cela
1. [Indroid](https://bitbucket.org/aseemjakhar/indroid) – kit d'injection de threads
1. [Introspy](https://github.com/iSECPartners/Introspy-Android)
1. [Jad]( https://varaneckas.com/jad/) - décompileur Java
1. [JD-GUI](https://github.com/java-decompiler/jd-gui) - décompileur Java
1. [CFR](http://www.benf.org/other/cfr/) - décompileur Java
1. [Krakatau](https://github.com/Storyyeller/Krakatau) - décompileur Java
1. [FernFlower](https://github.com/fesh0r/fernflower) - décompileur Java
1. [Redexer](https://github.com/plum-umd/redexer) – manipulation apk
1. [Simplify Android deobfuscator](https://github.com/CalebFenton/simplify)
1. [Bytecode viewer](https://github.com/Konloch/bytecode-viewer)
1. [Radare2](https://github.com/radare/radare2)
1. [Jadx](https://github.com/skylot/jadx)
1. [Dwarf](https://github.com/iGio90/Dwarf) - GUI pour la rétro-ingénierie
1. [Andromeda](https://github.com/secrary/Andromeda) - Un autre outil de rétro-ingénierie en ligne de commande de base
1. [apk-mitm](https://github.com/shroudedcode/apk-mitm) - Une application CLI qui prépare les fichiers APK Android pour l'inspection HTTPS
1. [Noia](https://github.com/0x742/noia) - Outil simple de navigateur de fichiers de sandbox d'applications Android
1. [Obfuscapk](https://github.com/ClaudiuGeorgiu/Obfuscapk) — Obfuscapk est un outil Python modulaire pour obfuscater les applications Android sans nécessiter leur code source.
1. [ARMANDroid](https://github.com/Mobile-IoT-Security-Lab/ARMANDroid) - ARMAND (Anti-Repackaging through Multi-pattern, Anti-tampering based on Native Detection) est un nouveau schéma de protection anti-falsification qui intègre des bombes logiques et des nœuds de détection AT directement dans le fichier apk sans avoir besoin de son code source.
1. [MVT (Mobile Verification Toolkit)](https://github.com/mvt-project/mvt) - un ensemble d'utilitaires pour simplifier et automatiser le processus de collecte de traces forensiques utiles pour identifier une compromission potentielle des appareils Android et iOS
1. [Dexmod](https://github.com/google/dexmod) - un outil pour illustrer le patchage de bytecode Dalvik dans un fichier DEX (Dalvik Executable) et aider à l'analyse statique des applications Android.
1. [odex-patcher](https://github.com/giacomoferretti/odex-patcher) - Exécute du code arbitraire en patchant les fichiers OAT
1. [PhoneSploit-Pro](https://github.com/AzeemIdrisi/PhoneSploit-Pro) - Un outil de piratage tout-en-un pour exploiter à distance les appareils Android en utilisant ADB et le framework Metasploit afin d'obtenir une session Meterpreter.
1. [APKLab](https://github.com/APKLab/APKLab) - plugin pour VS Code pour analyser les APK
1. ~~[IntentSniffer](https://www.nccgroup.com/us/our-research/intent-sniffer/)~~
1. ~~[Procyon](https://bitbucket.org/mstrobel/procyon/wiki/Java%20Decompiler) - décompileur Java~~
1. ~~[Smali viewer](http://blog.avlyun.com/wp-content/uploads/2014/04/SmaliViewer.zip)~~
1. ~~[ZjDroid](https://github.com/BaiduSecurityLabs/ZjDroid)~~, ~~[fork/mirror](https://github.com/yangbean9/ZjDroid)~~
1. ~~[Dare](http://siis.cse.psu.edu/dare/index.html) – convertisseur .dex vers .class~~

### Tests de fuzzing

1. [Radamsa Fuzzer](https://github.com/anestisb/radamsa-android)
1. [Honggfuzz](https://github.com/google/honggfuzz)
1. [An Android port of the Melkor ELF fuzzer](https://github.com/anestisb/melkor-android)
1. [Media Fuzzing Framework for Android](https://github.com/fuzzing/MFFA)
1. [AndroFuzz](https://github.com/jonmetz/AndroFuzz)
1. [QuarksLab's Android Fuzzing](https://github.com/quarkslab/android-fuzzing)
1. ~~[IntentFuzzer](https://www.nccgroup.trust/us/about-us/resources/intent-fuzzer/)~~

### Détecteurs de ré-empaquetage d'applications

1. [FSquaDRA](https://github.com/zyrikby/FSquaDRA) - un outil pour détecter les applications Android ré-empaquetées basé sur la comparaison de hachage des ressources de l'application.

### Crawlers de marché

1. [Google Play crawler (Java)](https://github.com/Akdeniz/google-play-crawler)
1. [Google Play crawler (Python)](https://github.com/egirault/googleplay-api)
1. [Google Play crawler (Node)](https://github.com/dweinstein/node-google-play) - obtient les détails des applications et télécharge les applications depuis le Google Play Store officiel.
1. [Aptoide downloader (Node)](https://github.com/dweinstein/node-aptoide) - télécharge des applications depuis le marché Android tiers Aptoide
1. [Appland downloader (Node)](https://github.com/dweinstein/node-appland) - télécharge des applications depuis le marché Android tiers Appland
1. [PlaystoreDownloader](https://github.com/ClaudiuGeorgiu/PlaystoreDownloader) - PlaystoreDownloader est un outil pour télécharger des applications Android directement depuis le Google Play Store. Après une configuration initiale (unique), les applications peuvent être téléchargées en spécifiant leur nom de package.
1. [APK Downloader](https://apkcombo.com/apk-downloader/) Service en ligne pour télécharger des APK du Play Store pour une configuration de périphérique Android spécifique
1. ~~[Apkpure](https://apkpure.com/) - Téléchargeur apk en ligne. Il fournit également sa propre application pour le téléchargement.~~

### Outils divers

1. [smalihook](http://androidcracking.blogspot.com/2011/03/original-smalihook-java-source.html)
1. [AXMLPrinter2](http://code.google.com/p/android4me/downloads/detail?name=AXMLPrinter2.jar) - pour convertir des fichiers XML binaires en fichiers XML lisibles par l'homme
1. [adb autocomplete](https://github.com/mbrubeck/android-completion)
1. [mitmproxy](https://github.com/mitmproxy/mitmproxy)
1. [dockerfile/androguard](https://github.com/dweinstein/dockerfile-androguard)
1. [Android Vulnerability Test Suite](https://github.com/AndroidVTS/android-vts) - android-vts scanne un appareil à la recherche d'un ensemble de vulnérabilités
1. [AppMon](https://github.com/dpnishant/appmon)- AppMon est un framework automatisé pour surveiller et falsifier les appels d'API système des applications natives macOS, iOS et Android. Il est basé sur Frida.
1. [Internal Blue](https://github.com/seemoo-lab/internalblue) - Framework d'expérimentation Bluetooth basé sur la rétro-ingénierie des contrôleurs Bluetooth Broadcom
1. [Android Mobile Device Hardening](https://github.com/SecTheTech/AMDH) - AMDH scanne et durcit les paramètres de l'appareil et liste les applications installées nuisibles en fonction des permissions.
1. [NullKia](https://github.com/bad-antics/nullkia) - Framework de sécurité mobile complet prenant en charge 18 fabricants avec exploitation du baseband, sécurité cellulaire, recherche TEE/TrustZone et outils d'extraction BootROM.
1. [Firmware Extractor](https://github.com/AndroidDumps/Firmware_extractor) - Extrait l'archive donnée en images
1. [ARMv7 payload that provides arbitrary code execution on MediaTek bootloaders](https://github.com/R0rt1z2/kaeru)
1. [DroidGround](https://github.com/SECFORCE/droidground) - Un terrain de jeu flexible pour les défis CTF Android
1. [sundaysec/Android-Exploits](https://github.com/sundaysec/Android-Exploits) - Une collection d'exploits et de hacks Android
1. [Spectre](https://github.com/thomasbuilds/Spectre) - Scanner de fréquence radio avec capacités de reconnaissance et offensives. Surveille la cellularie, le Wi-Fi, le Bluetooth LE et le GNSS sur l'appareil, avec un inspecteur BLE GATT, un diffuseur iBeacon et une découverte de réseau local.
1. ~~[Android Device Security Database](https://www.android-device-security.org/client/datatable) - Base de données des fonctionnalités de sécurité des appareils Android~~
1. ~~[Opcodes table for quick reference](http://ww38.xchg.info/corkami/opcodes_tables.pdf)~~
1. ~~[APK-Downloader](http://codekiem.com/2012/02/24/apk-downloader/)~~ - semble mort maintenant
1. ~~[Dalvik opcodes](http://pallergabor.uw.hu/androidblog/dalvik_opcodes.html)~~

### Applications vulnérables pour la pratique

1. [Damn Insecure Vulnerable Application (DIVA)](https://github.com/payatu/diva-android)
1. [Vuldroid](https://github.com/jaiswalakshansh/Vuldroid)
1. [ExploitMe Android Labs](http://securitycompass.github.io/AndroidLabs/setup.html)
1. [GoatDroid](https://github.com/jackMannino/OWASP-GoatDroid-Project)
1. [Android InsecureBank](https://github.com/dineshshetty/Android-InsecureBankv2)
1. [Insecureshop](https://github.com/optiv/insecureshop)
1. [Oversecured Vulnerable Android App (OVAA)](https://github.com/oversecured/ovaa)
1. [Injured Android - CTF](https://github.com/B3nac/InjuredAndroid)
1. [Damn Vulnerable Mobile App (DVMA)](https://github.com/cpeoples/dvma)

## Recherche/Publications/Livres

### Articles de recherche

1. [Exploit Database](https://www.exploit-db.com/papers/)
1. [Android security-related presentations](https://github.com/jacobsoo/AndroidSlides)
1. [A good collection of static analysis papers](https://tthtlc.wordpress.com/2011/09/01/static-analysis-of-android-applications/)

### Livres

1. [SEI CERT Android Secure Coding Standard](https://wiki.sei.cmu.edu/confluence/display/android/Android+Secure+Coding+Standard)

### Autres

1. [OWASP Mobile Security Testing Guide Manual](https://github.com/OWASP/owasp-mstg)
1. [doridori/Android-Security-Reference](https://github.com/doridori/Android-Security-Reference)
1. [android app security checklist](https://github.com/b-mueller/android_app_security_checklist)
1. [Mobile App Pentest Cheat Sheet](https://github.com/tanprathan/MobileApp-Pentest-Cheatsheet)
1. [Android Reverse Engineering 101 by Daniele Altomare (Web Archive link)](https://web.archive.org/web/20180721134044/http://www.fasteque.com:80/android-reverse-engineering-101-part-1/)
1. ~~[Mobile Security Reading Room](https://mobile-security.zeef.com) - Une salle de lecture qui contient du matériel de lecture technique bien catégorisé sur le test de pénétration mobile, les logiciels malveillants mobiles, la forensic mobile et toutes sortes de sujets liés à la sécurité mobile~~

## Exploits/Vulnérabilités/Bugs

### Liste

1. [Android Security Bulletins](https://source.android.com/security/bulletin/)
1. [Android's reported security vulnerabilities](https://www.cvedetails.com/vulnerability-list/vendor_id-1224/product_id-19997/Google-Android.html)
1. [OWASP Mobile Top 10 2016](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10)
1. [Exploit Database](https://www.exploit-db.com/search/?action=search&q=android) - cliquez sur rechercher
1. [Vulnerability Google Doc](https://docs.google.com/spreadsheet/pub?key=0Am5hHW4ATym7dGhFU1A4X2lqbUJtRm1QSWNRc3E0UlE&single=true&gid=0&output=html)
1. [Google Android Security Team’s Classifications for Potentially Harmful Applications (Malware)](https://source.android.com/security/reports/Google_Android_Security_PHA_classifications.pdf)
1. ~~[Android Devices Security Patch Status](https://kb.androidtamer.com/Device_Security_Patch_tracker/)~~

### Logiciels malveillants

1. [androguard - Database Android Malware wiki](https://code.google.com/p/androguard/wiki/DatabaseAndroidMalwares)
1. [Android Malware GitHub repo](https://github.com/ashishb/android-malware)
1. [Android Malware Genome Project](http://www.malgenomeproject.org/) - contient 1260 échantillons de logiciels malveillants classés en 49 familles différentes, gratuits à des fins de recherche.
1. [Contagio Mobile Malware Mini Dump](http://contagiominidump.blogspot.com)
1. [Drebin](https://www.sec.tu-bs.de/~danarp/drebin/)
1. [Hudson Rock](https://www.hudsonrock.com/threat-intelligence-cybercrime-tools) - Un ensemble d'outils gratuits de renseignement sur la cybercriminalité qui peut indiquer si un package APK spécifique a été compromis lors d'une attaque de logiciel malveillant de type Infostealer.
1. [Kharon Malware Dataset](http://kharon.gforge.inria.fr/dataset/) - 7 logiciels malveillants qui ont été rétro-ingénierés et documentés
1. [Android Adware and General Malware Dataset](https://www.unb.ca/cic/datasets/android-adware.html)
1. [AndroZoo](https://androzoo.uni.lu/) - AndroZoo est une collection d'applications Android croissante provenant de plusieurs sources, y compris le marché d'applications officiel Google Play.
1. ~~[Android PRAGuard Dataset](http://pralab.diee.unica.it/en/AndroidPRAGuardDataset) - Le jeu de données contient 10479 échantillons, obtenus en obfuscant les jeux de données MalGenome et Contagio Minidump avec sept techniques d'obfuscation différentes.~~
1. ~~[Admire](http://admire.necst.it/)~~

### Programmes de primes

1. [Android Security Reward Program](https://www.google.com/about/appsecurity/android-rewards/)

### Comment signaler des problèmes de sécurité

1. [Android - reporting security issues](https://source.android.com/security/overview/updates-resources.html#report-issues)
1. [Android Reports and Resources](https://github.com/B3nac/Android-Reports-and-Resources) - Liste de rapports Android Hackerone divulgués et d'autres ressources

## Contribution

Vos contributions sont toujours les bienvenues !

## 📖 Citation

```bibtex
@misc{
  author = {Ashish Bhatia - ashishb.net},
  title = {The most comprehensive collection of Android security-related resources},
  year = {2025},
  publisher = {GitHub},
  journal = {GitHub repository},
  howpublished = {\url{https://github.com/ashishb/android-security-awesome}}
}
```

Ce dépôt a été cité dans [plus de 10 articles](https://scholar.google.com/scholar?q=github.com%2Fashishb%2Fandroid-security-awesome)
