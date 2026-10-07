# Android Security Awesome ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)

[![Star History Rank](https://api.star-history.com/badge?repo=ashishb/android-security-awesome&theme=dark)](https://www.star-history.com/ashishb/android-security-awesome)

[![Link Liveness Checker](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml)

[![Lint Shell scripts](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml)
[![Lint Markdown](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml)
[![Lint YAML](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml)
[![Lint GitHub Actions](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml)
![GitHub contributors](https://img.shields.io/github/contributors/ashishb/android-security-awesome)

Eine Sammlung von Android-sicherheitsrelevanten Ressourcen.

Wenn Sie dieses Projekt nützlich finden, erwägen Sie bitte, es zu [unterstützen](./sponsors.md).

1. [Werkzeuge](#tools)
1. [Akademisch/Forschung/Publikationen/Bücher](#academicresearchpublicationsbooks)
1. [Exploits/Schwachstellen/Bugs](#exploitsvulnerabilitiesbugs)

## Werkzeuge

### Online-Analysatoren

1. [Appknox](https://www.appknox.com/) - nicht kostenlos
1. [Virustotal](https://www.virustotal.com/)
1. [NowSecure Lab Automated](https://www.nowsecure.com/blog/2016/09/19/announcing-nowsecure-lab-automated/) - Enterprise-Werkzeug für mobile App-Sicherheitstests sowohl für Android- als auch iOS-Apps. Lab Automated führt dynamische und statische Analyse auf echten Geräten in der Cloud durch und liefert Ergebnisse in Minuten. Nicht kostenlos
1. [App Detonator](https://appdetonator.run/) - Detoniert das APK-Binary, um quellcodeähnliche Details bereitzustellen, einschließlich App-Autor, Signatur, Build- und Manifestinformationen. 3 Analysen/Tag kostenloses Kontingent.
1. [Pithus](https://beta.pithus.org/) - Open-Source-APK-Analysator. Noch in Beta und vorerst auf statische Analyse beschränkt. Es ist möglich, mit YARA-Regeln nach Malware zu suchen. Mehr [hier](https://beta.pithus.org/about/).
1. [Oversecured](https://oversecured.com/) - Enterprise-Schwachstellen-Scanner für Android- und iOS-Apps; er bietet App-Besitzern und Entwicklern die Möglichkeit, jede neue Version einer mobilen App abzusichern, indem Oversecured in den Entwicklungsprozess integriert wird. Nicht kostenlos.
1. [AppSweep by Guardsquare](https://appsweep.guardsquare.com/) - Kostenloser, schneller Android-Anwendungssicherheitstest für Entwickler
1. [Koodous](https://koodous.com) - Führt statische/dynamische Malware-Analyse über ein riesiges Repository von Android-Beispielen durch und prüft sie anhand öffentlicher und privater Yara-Regeln.
1. [Immuniweb](https://www.immuniweb.com/mobile/). Führt einen „OWASP Mobile Top 10 Test", eine „Mobile App Privacy Check" und einen Berechtigungstest der Anwendung durch. Der kostenlose Tarif umfasst 4 Tests pro Tag, einschließlich eines Berichts nach der Registrierung.
1. [ANY.RUN](https://app.any.run/) - Eine interaktive, cloudbasierte Malware-Analyseplattform mit Unterstützung für Android-Anwendungsanalyse. Ein begrenzter kostenloser Plan ist verfügbar.
1. ~~[BitBaan](https://malab.bitbaan.com/)~~
1. ~~[AVC UnDroid](http://undroid.av-comparatives.info/)~~
1. ~~[AMAaaS](https://amaaas.com) - Kostenloser Android-Malware-Analysedienst. Ein Bare-Metal-Dienst, der statische und dynamische Analyse für Android-Anwendungen bietet. Ein Produkt von [MalwarePot](https://malwarepot.com/index.php/AMAaaS)~~.
1. ~~[AppCritique](https://appcritique.boozallen.com) - Laden Sie Ihre Android-APKs hoch und erhalten Sie umfassende kostenlose Sicherheitsbewertungen~~
1. ~~[NVISO ApkScan](https://apkscan.nviso.be/) - Einstellung am 31. Okt. 2019~~
1. ~~[Mobile Malware Sandbox](http://www.mobilemalware.com.br/analysis/index_en.php)~~
1. ~~[IBM Security AppScan Mobile Analyzer](https://appscan.bluemix.net/mobileAnalyzer) - nicht kostenlos~~
1. ~~[Visual Threat](https://www.visualthreat.com/) - kein Android-App-Analysator mehr~~
1. ~~[Tracedroid](http://tracedroid.few.vu.nl/)~~
1. ~~[habo](https://habo.qq.com/) - 10/Tag~~
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
1. ~~[Fireeye](https://fireeye.ijinshan.com/)- max. 60 MB, 15/Tag~~
1. ~~[approver](https://approver.talos-sec.com/) - Approver ist eine vollautomatisierte Sicherheitsanalyse- und Risikobewertungsplattform für Android- und iOS-Apps. Nicht kostenlos.~~
1. ~~[Fraunhofer App-ray](http://app-ray.co/) - abgelaufene Domain~~
1. ~~[AndroTotal](http://andrototal.org/) - tot~~

### Statische Analysewerkzeuge

1. [Androwarn](https://github.com/maaaaz/androwarn/) - erkennt und warnt den Benutzer vor potenziell bösartigen Verhaltensweisen, die von einer Android-Anwendung entwickelt wurden.
1. [ApkAnalyser](https://github.com/sonyxperiadev/ApkAnalyser)
1. [APKInspector](https://github.com/honeynet/apkinspector/)
1. [Droid Intent Data Flow Analysis for Information Leakage](https://insights.sei.cmu.edu/library/didfail/)
1. [DroidLegacy](https://bitbucket.org/srl/droidlegacy)
1. [FlowDroid](https://blogs.uni-paderborn.de/sse/tools/flowdroid/)
1. [Android Decompiler](https://www.pnfsoftware.com/) – nicht kostenlos
1. [PSCout](https://security.csl.toronto.edu/pscout/) - Ein Werkzeug, das die Berechtigungsspezifikation aus dem Android-OS-Quellcode mittels statischer Analyse extrahiert
1. [Amandroid](http://amandroid.sireum.org/)
1. [SmaliSCA](https://github.com/dorneanu/smalisca) - Smali Static Code Analysis
1. [CFGScanDroid](https://github.com/douggard/CFGScanDroid) - Scannt und vergleicht den CFG mit dem CFG bösartiger Anwendungen
1. [Madrolyzer](https://github.com/maldroid/maldrolyzer) - extrahiert nutzbare Daten wie C&C, Telefonnummern usw.
1. [ConDroid](https://github.com/JulianSchuette/ConDroid) - Führt eine Kombination aus symbolischer + konkreter Ausführung der App durch
1. [DroidRA](https://github.com/serval-snt-uni-lu/DroidRA)
1. [RiskInDroid](https://github.com/ClaudiuGeorgiu/RiskInDroid) - Ein Werkzeug zur Berechnung des Risikos von Android-Apps basierend auf deren Berechtigungen, mit verfügbarer Online-Demo.
1. [SUPER](https://github.com/SUPERAndroidAnalyzer/super) - Secure, Unified, Powerful, and Extensible Rust Android Analyzer
1. [ClassyShark](https://github.com/google/android-classyshark) - Ein eigenständiges Binärinspektionswerkzeug, das jedes Android-Executable durchsuchen und wichtige Informationen anzeigen kann.
1. [StaCoAn](https://github.com/vincentcox/StaCoAn) - Plattformübergreifendes Werkzeug, das Entwicklern, Bug-Bounty-Jägern und ethischen Hackern bei der statischen Code-Analyse mobiler Anwendungen hilft. Dieses Werkzeug wurde mit starkem Fokus auf Benutzerfreundlichkeit und grafischer Führung in der Benutzeroberfläche erstellt.
1. [JAADAS](https://github.com/flankerhqd/JAADAS) - Gemeinsames intraprozedurales und interprozedurales Programmanalysewerkzeug zur Auffindung von Schwachstellen in Android-Apps, basierend auf Soot und Scala
1. [Quark-Engine](https://github.com/quark-engine/quark-engine) - Ein Obfuscation-Neglect Android Malware Scoring System
1. [One Step Decompiler](https://github.com/b-mueller/apkx) - Android-APK-Dekompilierung für Faule
1. [APKLeaks](https://github.com/dwisiswant0/apkleaks) - Scannt APK-Dateien nach URIs, Endpunkten und Geheimnissen.
1. [Mobile Audit](https://github.com/mpast/mobileAudit) - Web-Anwendung zur Durchführung statischer Analyse und Erkennung von Malware in Android-APKs.
1. [Detekt](https://github.com/detekt/detekt) - Statische Code-Analyse für Kotlin
1. [APKdevastate](https://github.com/rafigk2v9c/APKdevastate/) - Erweiterte Analyse-Software für von RATs erstellte APK-Payloads.
1. ~~[Smali CFG generator](https://github.com/EugenioDelfa/Smali-CFGs)~~
1. ~~[Several tools from PSU](http://siis.cse.psu.edu/tools.html)~~
1. ~~[SPARTA](https://www.cs.washington.edu/sparta) - verifiziert (beweist), dass eine App eine Information-Flow-Sicherheitsrichtlinie erfüllt; basierend auf dem [Checker Framework](https://types.cs.washington.edu/checker-framework/)~~

### App-Schwachstellen-Scanner

1. [QARK](https://github.com/linkedin/qark/) - QARK von LinkedIn dient App-Entwicklern zum Scannen von Apps auf Sicherheitsprobleme
1. [AndroBugs](https://github.com/AndroBugs/AndroBugs_Framework)
1. [Nogotofail](https://github.com/google/nogotofail)
1. [Ostorlab](https://ostorlab.co) - Die kostenlose Version von Ostorlab scannt Apps im Android Play Store, iOS App Store und Huawei AppGallery
1. ~~[Devknox](https://devknox.io/) - IDE-Plugin zum Erstellen sicherer Android-Apps. Wird nicht mehr gepflegt.~~

### Dynamische Analysewerkzeuge

1. [Android DBI framework](http://www.mulliner.org/blog/blosxom.cgi/security/androiddbiv02.html)
1. [Androl4b](https://github.com/sh4hin/Androl4b)- Eine virtuelle Maschine zur Bewertung von Android-Anwendungen, Reverse Engineering und Malware-Analyse
1. [House](https://github.com/nccgroup/house)- House: Ein Toolkit zur Laufzeitanalyse mobiler Anwendungen mit Web-GUI, angetrieben von Frida, geschrieben in Python.
1. [Mobile-Security-Framework MobSF](https://github.com/MobSF/Mobile-Security-Framework-MobSF) - Mobile Security Framework ist ein intelligentes, all-in-one Open-Source-Framework für automatisierte Penetrationstests mobiler Anwendungen (Android/iOS), das statische, dynamische Analyse und Web-API-Tests durchführen kann.
1. [Droidbox](https://github.com/pjlantz/droidbox)
1. [Drozer](https://github.com/mwrlabs/drozer)
1. [Xposed](https://forum.xda-developers.com/xposed/xposed-installer-versions-changelog-t2714053) - entspricht der stub-basierten Code-Injektion, jedoch ohne Änderungen am Binary
1. [Inspeckage](https://github.com/ac-pm/Inspeckage) - Android Package Inspector - dynamische Analyse mit API-Hooks, Start nicht exportierter Activities und mehr. (Xposed-Modul)
1. [Android Hooker](https://github.com/AndroidHooker/hooker) - Dynamische Java-Code-Instrumentierung (benötigt das Substrate-Framework)
1. [ProbeDroid](https://github.com/ZSShen/ProbeDroid) - Dynamische Java-Code-Instrumentierung
1. [DECAF](https://github.com/sycurelab/DECAF) - Dynamic Executable Code Analysis Framework basierend auf QEMU (DroidScope ist nun eine Erweiterung für DECAF)
1. [CuckooDroid](https://github.com/idanr1986/cuckoo-droid) - Android-Erweiterung für die Cuckoo-Sandbox
1. [Mem](https://github.com/MobileForensicsResearch/mem) - Speicheranalyse von Android (Root erforderlich)
1. [Crowdroid](http://www.ida.liu.se/labs/rtslab/publications/2011/spsm11-burguera.pdf) – das eigentliche Werkzeug konnte nicht gefunden werden
1. [AuditdAndroid](https://github.com/nwhusted/AuditdAndroid) – Android-Port von auditd, nicht mehr in aktiver Entwicklung
1. [Android Security Evaluation Framework](https://code.google.com/p/asef/) - nicht mehr in aktiver Entwicklung
1. [Aurasium](https://github.com/xurubin/aurasium) – Praktische Durchsetzung von Sicherheitsrichtlinien für Android-Apps durch Bytecode-Rewriting und In-Place-Referenzüberwachung.
1. [Android Linux Kernel modules](https://github.com/strazzere/android-lkms)
1. [StaDynA](https://github.com/zyrikby/StaDynA) - Ein System, das die Sicherheits-App-Analyse bei Vorhandensein dynamischer Code-Update-Funktionen (dynamisches Klassenladen und Reflexion) unterstützt. Dieses Werkzeug kombiniert statische und dynamische Analyse von Android-Anwendungen, um das verborgene/aktualisierte Verhalten aufzudecken und die statischen Analyseergebnisse damit zu erweitern.
1. [DroidAnalytics](https://github.com/zhengmin1989/DroidAnalytics) - unvollständig
1. [Vezir Project](https://github.com/oguzhantopgul/Vezir-Project) - Virtuelle Maschine für Mobile Application Pentesting und Mobile Malware Analysis
1. [MARA](https://github.com/xtiankisutsa/MARA_Framework) - Mobile Application Reverse Engineering and Analysis Framework
1. [Taintdroid](http://appanalysis.org) - erfordert AOSP-Kompilierung
1. [ARTist](https://artist.cispa.saarland) - Ein flexibles Open-Source-Instrumentierungs- und Hybrid-Analyse-Framework für Android-Apps und Androids Java-Middleware. Es basiert auf dem Compiler der Android Runtime (ART) und modifiziert Code während der Geräte-kompilierung.
1. [Android Malware Sandbox](https://github.com/Areizen/Android-Malware-Sandbox)
1. [AndroPyTool](https://github.com/alexMyG/AndroPyTool) - ein Werkzeug zum Extrahieren statischer und dynamischer Merkmale aus Android-APKs. Es kombiniert verschiedene bekannte Android-App-Analysewerkzeuge wie DroidBox, FlowDroid, Strace, AndroGuard und VirusTotal-Analyse.
1. [Runtime Mobile Security (RMS)](https://github.com/m0bilesecurity/RMS-Runtime-Mobile-Security) - ist eine leistungsstarke Web-Oberfläche, die Ihnen hilft, Android- und iOS-Apps zur Laufzeit zu manipulieren
1. [PAPIMonitor](https://github.com/Dado1513/PAPIMonitor) – PAPIMonitor (Python API Monitor für Android-Apps) ist ein auf Frida basierendes Python-Werkzeug zur Überwachung benutzerausgewählter APIs während der App-Ausführung.
1. [Android_application_analyzer](https://github.com/NotSoSecure/android_application_analyzer) - Das Werkzeug wird verwendet, um den Inhalt der Android-Anwendung im lokalen Speicher zu analysieren.
1. [Decompiler.com](https://www.decompiler.com/) - Online-APK- und Java-Decompiler
1. [friTap](https://github.com/fkie-cad/friTap)- Abfangen von SSL/TLS-Verbindungen mit Frida; ermöglicht TLS-Schlüsselextraktion und Entschlüsselung der TLS-Nutzlast als PCAP auf Android in Echtzeit.
1. [HacknDroid](https://github.com/RaffaDNDM/HacknDroid) - Ein Werkzeug zur Automatisierung verschiedener Mobile Application Penetration Testing (MAPT)-Aufgaben und zur Erleichterung der Interaktion mit Android-Geräten.
1. [adbsploit](https://github.com/mesquidar/adbsploit) - Werkzeuge zur Ausnutzung von Geräten über ADB
1. [Brida](https://github.com/federicodotta/Brida) - Burp Suite-Erweiterung, die als Brücke zwischen Burp und Frida funktioniert und es Ihnen ermöglicht, die eigenen Methoden der Anwendungen zu nutzen und zu manipulieren, während der zwischen den Anwendungen und ihren Backend-Diensten/Servern ausgetauschte Datenverkehr manipuliert wird.
1. [MPT](https://github.com/ByteSnipers/mobile-pentest-toolkit) - MPT (Mobile Pentest Toolkit) ist eine unverzichtbare Lösung für Ihre Android-Penetrationstest-Workflows. Dieses Werkzeug ermöglicht es Ihnen, Sicherheitsaufgaben zu automatisieren.
1. [Andriller](https://github.com/den4uk/andriller) - ein Software-Dienstprogramm mit einer Sammlung forensischer Werkzeuge für Smartphones. Es führt eine read-only, forensisch einwandfreie, nicht destruktive Akquisition von Android-Geräten durch.
1. [Mira](https://github.com/vwww-droid/Mira) - Runtime-Schutzanalyseplattform für Drittanbieter-Android- und iOS-Apps, die es der KI ermöglicht, host-app-seitige Shell-, Java-, Native- und Frida-Fähigkeiten für die Umgebungsrisikoerkennung und Härtungsvalidierung einzusetzen.
1. [FlutterTap](https://github.com/script-or-script/FlutterTap) - Zygisk-Modul, das die BoringSSL-Zertifikatsüberprüfung innerhalb von `libflutter.so` umgeht und den Datenverkehr ausgewählter Flutter-Apps an einen Proxy umleitet. Besteht Neustarts, benötigt also keine Frida-Sitzung, kein Kabel und keinen lauschenden Port.
1. [Mobix](https://github.com/blackfoxxx/Mobix) - Autorisierte Android-Pentest-Lab: Frida-SSL-Pinning/Root-Detection-Bypass-Kette, mit automatischer IDOR-Kennzeichnung versehene mitmproxy-Traffic-Aufzeichnung, ein Web-Dashboard und ein 36-Tool-MCP-Server, sodass ein Claude Code-Agent den gesamten Scan-to-Findings-Loop selbst ausführen kann.
1. ~~[AppUse](https://appsec-labs.com/AppUse/) – benutzerdefinierter Build für Penetrationstests~~
1. ~~[Appie](https://manifestsecurity.com/appie/) - Appie ist ein Softwarepaket, das vorab konfiguriert wurde, um als Android-Pentesting-Umgebung zu fungieren. Es ist vollständig portabel und kann auf einem USB-Stick oder Smartphone transportiert werden. Dies ist eine All-in-One-Antwort für alle Werkzeuge, die bei der Android-Anwendungssicherheitsbewertung benötigt werden, und eine großartige Alternative zu vorhandenen virtuellen Maschinen.~~
1. ~~[Android Tamer](https://androidtamer.com/) - Virtuelle/Live-Plattform für Android-Sicherheitsexperten~~
1. ~~[Android Malware Analysis Toolkit](http://www.mobilemalware.com.br/amat/download.html) - (Linux-Distro) Früher war es ein [Online-Analysator](http://dunkelheit.com.br/amat/analysis/index_en.php)~~
1. ~~[Android Reverse Engineering](https://redmine.honeynet.org/projects/are/wiki) – ARE (Android Reverse Engineering) wird nicht mehr aktiv entwickelt~~
1. ~~[ViaLab Community Edition](https://www.nowsecure.com/blog/2014/09/09/introducing-vialab-community-edition/)~~
1. ~~[Mercury](https://labs.mwrinfosecurity.com/tools/2012/03/16/mercury/)~~
1. ~~[Cobradroid](https://thecobraden.com/projects/cobradroid/) – benutzerdefiniertes Image für Malware-Analyse~~

### Reverse Engineering

1. [Smali/Baksmali](https://github.com/JesusFreke/smali) – apk-Dekompilierung
1. [emacs syntax coloring for smali files](https://github.com/strazzere/Emacs-Smali)
1. [vim syntax coloring for smali files](http://codetastrophe.com/smali.vim)
1. [AndBug](https://github.com/swdunlop/AndBug)
1. [Androguard](https://github.com/androguard/androguard) – leistungsstark, integriert sich gut mit anderen Werkzeugen
1. [Apktool](https://github.com/iBotPeaches/Apktool) – sehr nützlich für Kompilierung/Dekompilierung (verwendet smali)
1. [Android Framework for Exploitation](https://github.com/appknox/AFE)
1. [Bypass signature and permission checks for IPCs](https://github.com/iSECPartners/Android-KillPermAndSigChecks)
1. [Android OpenDebug](https://github.com/iSECPartners/Android-OpenDebug) – macht jede Anwendung auf dem Gerät debuggbar (mit Cydia Substrate).
1. [Dex2Jar](https://github.com/pxb1988/dex2jar) - dex-zu-jar-Konverter
1. [Enjarify](https://github.com/google/enjarify) - dex-zu-jar-Konverter von Google
1. [Dedexer](https://sourceforge.net/projects/dedexer/)
1. [Fino](https://github.com/sysdream/fino)
1. [Frida](https://www.frida.re/) - injiziert JavaScript, um Anwendungen zu erkunden, und ein [GUI-Werkzeug](https://github.com/antojoseph/diff-gui) dafür
1. [Indroid](https://bitbucket.org/aseemjakhar/indroid) – Thread-Injection-Kit
1. [Introspy](https://github.com/iSECPartners/Introspy-Android)
1. [Jad]( https://varaneckas.com/jad/) - Java-Decompiler
1. [JD-GUI](https://github.com/java-decompiler/jd-gui) - Java-Decompiler
1. [CFR](http://www.benf.org/other/cfr/) - Java-Decompiler
1. [Krakatau](https://github.com/Storyyeller/Krakatau) - Java-Decompiler
1. [FernFlower](https://github.com/fesh0r/fernflower) - Java-Decompiler
1. [Redexer](https://github.com/plum-umd/redexer) – apk-Manipulation
1. [Simplify Android deobfuscator](https://github.com/CalebFenton/simplify)
1. [Bytecode viewer](https://github.com/Konloch/bytecode-viewer)
1. [Radare2](https://github.com/radare/radare2)
1. [Jadx](https://github.com/skylot/jadx)
1. [Dwarf](https://github.com/iGio90/Dwarf) - GUI für Reverse Engineering
1. [Andromeda](https://github.com/secrary/Andromeda) - Ein weiteres grundlegendes Reverse-Engineering-Werkzeug für die Befehlszeile
1. [apk-mitm](https://github.com/shroudedcode/apk-mitm) - Eine CLI-Anwendung, die Android-APK-Dateien für die HTTPS-Inspektion vorbereitet
1. [Noia](https://github.com/0x742/noia) - Einfaches Android-Anwendungs-Sandbox-Dateibrowser-Werkzeug
1. [Obfuscapk](https://github.com/ClaudiuGeorgiu/Obfuscapk) — Obfuscapk ist ein modulares Python-Werkzeug zum Verschleiern von Android-Apps ohne deren Quellcode.
1. [ARMANDroid](https://github.com/Mobile-IoT-Security-Lab/ARMANDroid) - ARMAND (Anti-Repackaging through Multi-pattern, Anti-tampering based on Native Detection) ist ein neuartiges Anti-Tampering-Schutzschema, das Logic Bombs und AT-Erkennungsknoten direkt in die apk-Datei einbettet, ohne deren Quellcode zu benötigen.
1. [MVT (Mobile Verification Toolkit)](https://github.com/mvt-project/mvt) - eine Sammlung von Dienstprogrammen zur Vereinfachung und Automatisierung des Prozesses der Sammlung forensischer Spuren, die bei der Identifizierung einer potenziellen Kompromittierung von Android- und iOS-Geräten hilfreich sind
1. [Dexmod](https://github.com/google/dexmod) - ein Werkzeug, um das Patchen von Dalvik-Bytecode in einer DEX-Datei (Dalvik Executable) zu veranschaulichen und bei der statischen Analyse von Android-Anwendungen zu helfen.
1. [odex-patcher](https://github.com/giacomoferretti/odex-patcher) - Ausführen von beliebigem Code durch Patchen von OAT-Dateien
1. [PhoneSploit-Pro](https://github.com/AzeemIdrisi/PhoneSploit-Pro) - Ein All-in-One-Hacking-Werkzeug zum Remote-Ausnutzen von Android-Geräten mittels ADB und dem Metasploit-Framework, um eine Meterpreter-Sitzung zu erhalten.
1. [APKLab](https://github.com/APKLab/APKLab) - Plugin für VS Code zur Analyse von APKs
1. ~~[IntentSniffer](https://www.nccgroup.com/us/our-research/intent-sniffer/)~~
1. ~~[Procyon](https://bitbucket.org/mstrobel/procyon/wiki/Java%20Decompiler) - Java-Decompiler~~
1. ~~[Smali viewer](http://blog.avlyun.com/wp-content/uploads/2014/04/SmaliViewer.zip)~~
1. ~~[ZjDroid](https://github.com/BaiduSecurityLabs/ZjDroid)~~, ~~[fork/mirror](https://github.com/yangbean9/ZjDroid)~~
1. ~~[Dare](http://siis.cse.psu.edu/dare/index.html) – .dex-zu-.class-Konverter~~

### Fuzzing-Tests

1. [Radamsa Fuzzer](https://github.com/anestisb/radamsa-android)
1. [Honggfuzz](https://github.com/google/honggfuzz)
1. [An Android port of the Melkor ELF fuzzer](https://github.com/anestisb/melkor-android)
1. [Media Fuzzing Framework for Android](https://github.com/fuzzing/MFFA)
1. [AndroFuzz](https://github.com/jonmetz/AndroFuzz)
1. [QuarksLab's Android Fuzzing](https://github.com/quarkslab/android-fuzzing)
1. ~~[IntentFuzzer](https://www.nccgroup.trust/us/about-us/resources/intent-fuzzer/)~~

### App-Repackaging-Erkenner

1. [FSquaDRA](https://github.com/zyrikby/FSquaDRA) - ein Werkzeug zur Erkennung repackter Android-Anwendungen basierend auf dem Ressourcen-Hash-Vergleich der App.

### Markt-Crawler

1. [Google Play crawler (Java)](https://github.com/Akdeniz/google-play-crawler)
1. [Google Play crawler (Python)](https://github.com/egirault/googleplay-api)
1. [Google Play crawler (Node)](https://github.com/dweinstein/node-google-play) - App-Details abrufen und Apps aus dem offiziellen Google Play Store herunterladen.
1. [Aptoide downloader (Node)](https://github.com/dweinstein/node-aptoide) - Apps aus dem Drittanbieter-Android-Markt Aptoide herunterladen
1. [Appland downloader (Node)](https://github.com/dweinstein/node-appland) - Apps aus dem Drittanbieter-Android-Markt Appland herunterladen
1. [PlaystoreDownloader](https://github.com/ClaudiuGeorgiu/PlaystoreDownloader) - PlaystoreDownloader ist ein Werkzeug zum Herunterladen von Android-Anwendungen direkt aus dem Google Play Store. Nach einer anfänglichen (einmaligen) Konfiguration können Anwendungen durch Angabe ihres Paketnamens heruntergeladen werden.
1. [APK Downloader](https://apkcombo.com/apk-downloader/) Online-Dienst zum Herunterladen von APKs aus dem Play Store für eine bestimmte Android-Gerätekonfiguration
1. ~~[Apkpure](https://apkpure.com/) - Online-APK-Downloader. Bietet auch eine eigene App zum Herunterladen.~~

### Verschiedene Werkzeuge

1. [smalihook](http://androidcracking.blogspot.com/2011/03/original-smalihook-java-source.html)
1. [AXMLPrinter2](http://code.google.com/p/android4me/downloads/detail?name=AXMLPrinter2.jar) - konvertiert binäre XML-Dateien in menschenlesbare XML-Dateien
1. [adb autocomplete](https://github.com/mbrubeck/android-completion)
1. [mitmproxy](https://github.com/mitmproxy/mitmproxy)
1. [dockerfile/androguard](https://github.com/dweinstein/dockerfile-androguard)
1. [Android Vulnerability Test Suite](https://github.com/AndroidVTS/android-vts) - android-vts scannt ein Gerät auf eine Reihe von Schwachstellen
1. [AppMon](https://github.com/dpnishant/appmon)- AppMon ist ein automatisiertes Framework zum Überwachen und Manipulieren von System-API-Aufrufen nativer macOS-, iOS- und Android-Apps. Es basiert auf Frida.
1. [Internal Blue](https://github.com/seemoo-lab/internalblue) - Bluetooth-Experimentierframework basierend auf dem Reverse Engineering von Broadcom-Bluetooth-Controllern
1. [Android Mobile Device Hardening](https://github.com/SecTheTech/AMDH) - AMDH scannt und härtet die Einstellungen des Geräts und listet schädliche installierte Apps basierend auf Berechtigungen auf.
1. [NullKia](https://github.com/bad-antics/nullkia) - Umfassendes mobiles Sicherheitsframework mit Unterstützung für 18 Hersteller mit Baseband-Exploitation, Cellular Security, TEE/TrustZone-Forschung und BootROM-Extraktionstools.
1. [Firmware Extractor](https://github.com/AndroidDumps/Firmware_extractor) - Extrahiert das angegebene Archiv in Images
1. [ARMv7 payload that provides arbitrary code execution on MediaTek bootloaders](https://github.com/R0rt1z2/kaeru)
1. [DroidGround](https://github.com/SECFORCE/droidground) - Ein flexibler Spielplatz für Android-CTF-Herausforderungen
1. [sundaysec/Android-Exploits](https://github.com/sundaysec/Android-Exploits) - Eine Sammlung von Android-Exploits und Hacks
1. [Spectre](https://github.com/thomasbuilds/Spectre) - Funkfrequenz-Scanner mit Recon- und offensiven Fähigkeiten. Überwacht Cellular, Wi-Fi, Bluetooth LE und GNSS auf dem Gerät, mit einem BLE-GATT-Inspektor, iBeacon-Broadcaster und lokaler Netzwerkentdeckung.
1. ~~[Android Device Security Database](https://www.android-device-security.org/client/datatable) - Datenbank der Sicherheitsfunktionen von Android-Geräten~~
1. ~~[Opcodes table for quick reference](http://ww38.xchg.info/corkami/opcodes_tables.pdf)~~
1. ~~[APK-Downloader](http://codekiem.com/2012/02/24/apk-downloader/)~~ - scheint jetzt tot zu sein
1. ~~[Dalvik opcodes](http://pallergabor.uw.hu/androidblog/dalvik_opcodes.html)~~

### Verwundbare Anwendungen zum Üben

1. [Damn Insecure Vulnerable Application (DIVA)](https://github.com/payatu/diva-android)
1. [Vuldroid](https://github.com/jaiswalakshansh/Vuldroid)
1. [ExploitMe Android Labs](http://securitycompass.github.io/AndroidLabs/setup.html)
1. [GoatDroid](https://github.com/jackMannino/OWASP-GoatDroid-Project)
1. [Android InsecureBank](https://github.com/dineshshetty/Android-InsecureBankv2)
1. [Insecureshop](https://github.com/optiv/insecureshop)
1. [Oversecured Vulnerable Android App (OVAA)](https://github.com/oversecured/ovaa)
1. [Injured Android - CTF](https://github.com/B3nac/InjuredAndroid)
1. [Damn Vulnerable Mobile App (DVMA)](https://github.com/cpeoples/dvma)

## Akademisch/Forschung/Publikationen/Bücher

### Forschungsarbeiten

1. [Exploit Database](https://www.exploit-db.com/papers/)
1. [Android security-related presentations](https://github.com/jacobsoo/AndroidSlides)
1. [A good collection of static analysis papers](https://tthtlc.wordpress.com/2011/09/01/static-analysis-of-android-applications/)

### Bücher

1. [SEI CERT Android Secure Coding Standard](https://wiki.sei.cmu.edu/confluence/display/android/Android+Secure+Coding+Standard)

### Sonstiges

1. [OWASP Mobile Security Testing Guide Manual](https://github.com/OWASP/owasp-mstg)
1. [doridori/Android-Security-Reference](https://github.com/doridori/Android-Security-Reference)
1. [android app security checklist](https://github.com/b-mueller/android_app_security_checklist)
1. [Mobile App Pentest Cheat Sheet](https://github.com/tanprathan/MobileApp-Pentest-Cheatsheet)
1. [Android Reverse Engineering 101 by Daniele Altomare (Web Archive link)](https://web.archive.org/web/20180721134044/http://www.fasteque.com:80/android-reverse-engineering-101-part-1/)
1. ~~[Mobile Security Reading Room](https://mobile-security.zeef.com) - Ein Leseraum, der gut kategorisiertes technisches Lesematerial über mobile Penetrationstests, mobile Malware, mobile Forensik und alle Arten von mobilen sicherheitsrelevanten Themen enthält~~

## Exploits/Schwachstellen/Bugs

### Liste

1. [Android Security Bulletins](https://source.android.com/security/bulletin/)
1. [Android's reported security vulnerabilities](https://www.cvedetails.com/vulnerability-list/vendor_id-1224/product_id-19997/Google-Android.html)
1. [OWASP Mobile Top 10 2016](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10)
1. [Exploit Database](https://www.exploit-db.com/search/?action=search&q=android) - auf Suchen klicken
1. [Vulnerability Google Doc](https://docs.google.com/spreadsheet/pub?key=0Am5hHW4ATym7dGhFU1A4X2lqbUJtRm1QSWNRc3E0UlE&single=true&gid=0&output=html)
1. [Google Android Security Team’s Classifications for Potentially Harmful Applications (Malware)](https://source.android.com/security/reports/Google_Android_Security_PHA_classifications.pdf)
1. ~~[Android Devices Security Patch Status](https://kb.androidtamer.com/Device_Security_Patch_tracker/)~~

### Malware

1. [androguard - Database Android Malware wiki](https://code.google.com/p/androguard/wiki/DatabaseAndroidMalwares)
1. [Android Malware GitHub repo](https://github.com/ashishb/android-malware)
1. [Android Malware Genome Project](http://www.malgenomeproject.org/) - enthält 1260 Malware-Beispiele, kategorisiert in 49 verschiedene Malware-Familien, kostenlos für Forschungszwecke.
1. [Contagio Mobile Malware Mini Dump](http://contagiominidump.blogspot.com)
1. [Drebin](https://www.sec.tu-bs.de/~danarp/drebin/)
1. [Hudson Rock](https://www.hudsonrock.com/threat-intelligence-cybercrime-tools) - Ein kostenloses Cybercrime-Threat-Intelligence-Toolset, das anzeigen kann, ob ein bestimmtes APK-Paket bei einem Infostealer-Malware-Angriff kompromittiert wurde.
1. [Kharon Malware Dataset](http://kharon.gforge.inria.fr/dataset/) - 7 Malware, die rückentwickelt und dokumentiert wurden
1. [Android Adware and General Malware Dataset](https://www.unb.ca/cic/datasets/android-adware.html)
1. [AndroZoo](https://androzoo.uni.lu/) - AndroZoo ist eine wachsende Android-Anwendungssammlung aus mehreren Quellen, einschließlich des offiziellen Google Play App-Marktes.
1. ~~[Android PRAGuard Dataset](http://pralab.diee.unica.it/en/AndroidPRAGuardDataset) - Das Dataset enthält 10479 Beispiele, die durch Verschleierung der MalGenome- und Contagio-Minidump-Datasets mit sieben verschiedenen Verschleierungstechniken erhalten wurden.~~
1. ~~[Admire](http://admire.necst.it/)~~

### Bounty-Programme

1. [Android Security Reward Program](https://www.google.com/about/appsecurity/android-rewards/)

### Wie man Sicherheitsprobleme meldet

1. [Android - reporting security issues](https://source.android.com/security/overview/updates-resources.html#report-issues)
1. [Android Reports and Resources](https://github.com/B3nac/Android-Reports-and-Resources) - Liste von offengelegten Android-Hackerone-Berichten und anderen Ressourcen

## Mitwirken

Deine Beiträge sind immer willkommen!

## 📖 Zitation

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

Dieses Repository wurde in [über 10 Artikeln](https://scholar.google.com/scholar?q=github.com%2Fashishb%2Fandroid-security-awesome) zitiert
