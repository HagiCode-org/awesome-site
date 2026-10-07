# Android Security Awesome ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)

[![Star History Rank](https://api.star-history.com/badge?repo=ashishb/android-security-awesome&theme=dark)](https://www.star-history.com/ashishb/android-security-awesome)

[![Link Liveness Checker](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml)

[![Lint Shell scripts](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml)
[![Lint Markdown](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml)
[![Lint YAML](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml)
[![Lint GitHub Actions](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml)
![GitHub contributors](https://img.shields.io/github/contributors/ashishb/android-security-awesome)

Una colección de recursos relacionados con la seguridad de Android.

Si encuentras útil este proyecto, considera por favor [apoyarlo](./sponsors.md).

1. [Herramientas](#tools)
1. [Académico/Investigación/Publicaciones/Libros](#academicresearchpublicationsbooks)
1. [Explotaciones/Vulnerabilidades/Bugs](#exploitsvulnerabilitiesbugs)

## Herramientas

### Analizadores en línea

1. [Appknox](https://www.appknox.com/) - no gratuito
1. [Virustotal](https://www.virustotal.com/)
1. [NowSecure Lab Automated](https://www.nowsecure.com/blog/2016/09/19/announcing-nowsecure-lab-automated/) - Herramienta empresarial para pruebas de seguridad de aplicaciones móviles tanto para apps Android como iOS. Lab Automated realiza análisis dinámico y estático en dispositivos reales en la nube y devuelve resultados en minutos. No gratuito
1. [App Detonator](https://appdetonator.run/) - Detona el binario APK para proporcionar detalles a nivel de código fuente, incluyendo autor de la app, firma, compilación e información del manifiesto. Cuota gratuita de 3 análisis/día.
1. [Pithus](https://beta.pithus.org/) - Analizador APK de código abierto. Todavía en Beta y limitado a análisis estático por el momento. Es posible cazar malware con reglas YARA. Más [aquí](https://beta.pithus.org/about/).
1. [Oversecured](https://oversecured.com/) - Escáner de vulnerabilidades empresarial para apps Android e iOS; ofrece a los propietarios y desarrolladores de aplicaciones la capacidad de asegurar cada nueva versión de una app móvil integrando Oversecured en el proceso de desarrollo. No gratuito.
1. [AppSweep by Guardsquare](https://appsweep.guardsquare.com/) - Prueba de seguridad de aplicaciones Android gratuita y rápida para desarrolladores
1. [Koodous](https://koodous.com) - Realiza análisis estático/dinámico de malware sobre un vasto repositorio de muestras de Android y las comprueba contra reglas Yara públicas y privadas.
1. [Immuniweb](https://www.immuniweb.com/mobile/). Realiza una "OWASP Mobile Top 10 Test", una "Mobile App Privacy Check" y una prueba de permisos de la aplicación. El nivel gratuito son 4 pruebas por día, incluyendo un informe tras el registro.
1. [ANY.RUN](https://app.any.run/) - Una plataforma interactiva de análisis de malware basada en la nube con soporte para análisis de aplicaciones Android. Hay disponible un plan gratuito limitado.
1. ~~[BitBaan](https://malab.bitbaan.com/)~~
1. ~~[AVC UnDroid](http://undroid.av-comparatives.info/)~~
1. ~~[AMAaaS](https://amaaas.com) - Servicio gratuito de análisis de malware Android. Un servicio bare-metal que presenta análisis estático y dinámico para aplicaciones Android. Un producto de [MalwarePot](https://malwarepot.com/index.php/AMAaaS)~~.
1. ~~[AppCritique](https://appcritique.boozallen.com) - Sube tus APK de Android y recibe evaluaciones de seguridad gratuitas y completas~~
1. ~~[NVISO ApkScan](https://apkscan.nviso.be/) - dejando de funcionar el 31 oct. 2019~~
1. ~~[Mobile Malware Sandbox](http://www.mobilemalware.com.br/analysis/index_en.php)~~
1. ~~[IBM Security AppScan Mobile Analyzer](https://appscan.bluemix.net/mobileAnalyzer) - no gratuito~~
1. ~~[Visual Threat](https://www.visualthreat.com/) - ya no es un analizador de apps Android~~
1. ~~[Tracedroid](http://tracedroid.few.vu.nl/)~~
1. ~~[habo](https://habo.qq.com/) - 10/día~~
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
1. ~~[Fireeye](https://fireeye.ijinshan.com/)- máx 60MB 15/día~~
1. ~~[approver](https://approver.talos-sec.com/) - Approver es una plataforma de análisis de seguridad y evaluación de riesgos totalmente automatizada para apps Android e iOS. No gratuito.~~
1. ~~[Fraunhofer App-ray](http://app-ray.co/) - dominio caducado~~
1. ~~[AndroTotal](http://andrototal.org/) - muerto~~

### Herramientas de análisis estático

1. [Androwarn](https://github.com/maaaaz/androwarn/) - detecta y advierte al usuario sobre posibles comportamientos maliciosos desarrollados por una aplicación Android.
1. [ApkAnalyser](https://github.com/sonyxperiadev/ApkAnalyser)
1. [APKInspector](https://github.com/honeynet/apkinspector/)
1. [Droid Intent Data Flow Analysis for Information Leakage](https://insights.sei.cmu.edu/library/didfail/)
1. [DroidLegacy](https://bitbucket.org/srl/droidlegacy)
1. [FlowDroid](https://blogs.uni-paderborn.de/sse/tools/flowdroid/)
1. [Android Decompiler](https://www.pnfsoftware.com/) – no gratuito
1. [PSCout](https://security.csl.toronto.edu/pscout/) - Una herramienta que extrae la especificación de permisos del código fuente de Android OS mediante análisis estático
1. [Amandroid](http://amandroid.sireum.org/)
1. [SmaliSCA](https://github.com/dorneanu/smalisca) - Smali Static Code Analysis
1. [CFGScanDroid](https://github.com/douggard/CFGScanDroid) - Escanea y compara el CFG contra el CFG de aplicaciones maliciosas
1. [Madrolyzer](https://github.com/maldroid/maldrolyzer) - extrae datos accionables como C&C, número de teléfono, etc.
1. [ConDroid](https://github.com/JulianSchuette/ConDroid) - Realiza una combinación de ejecución simbólica + concreta de la app
1. [DroidRA](https://github.com/serval-snt-uni-lu/DroidRA)
1. [RiskInDroid](https://github.com/ClaudiuGeorgiu/RiskInDroid) - Una herramienta para calcular el riesgo de las apps Android basándose en sus permisos, con una demostración en línea disponible.
1. [SUPER](https://github.com/SUPERAndroidAnalyzer/super) - Secure, Unified, Powerful, and Extensible Rust Android Analyzer
1. [ClassyShark](https://github.com/google/android-classyshark) - Una herramienta de inspección binaria autónoma que puede explorar cualquier ejecutable de Android y mostrar información importante.
1. [StaCoAn](https://github.com/vincentcox/StaCoAn) - Herramienta multiplataforma que ayuda a desarrolladores, cazadores de bug-bounty y hackers éticos a realizar análisis de código estático en aplicaciones móviles. Esta herramienta se creó con un gran enfoque en la usabilidad y la guía gráfica en la interfaz de usuario.
1. [JAADAS](https://github.com/flankerhqd/JAADAS) - Herramienta de análisis de programa intraprocedural e interprocedural conjunta para encontrar vulnerabilidades en apps Android, construida sobre Soot y Scala
1. [Quark-Engine](https://github.com/quark-engine/quark-engine) - Un sistema de puntuación de malware Android que ignora la ofuscación
1. [One Step Decompiler](https://github.com/b-mueller/apkx) - Descompilación de APK Android para los perezosos
1. [APKLeaks](https://github.com/dwisiswant0/apkleaks) - Escanea el archivo APK en busca de URI, endpoints y secretos.
1. [Mobile Audit](https://github.com/mpast/mobileAudit) - Aplicación web para realizar análisis estático y detectar malware en APK de Android.
1. [Detekt](https://github.com/detekt/detekt) - Análisis de código estático para Kotlin
1. [APKdevastate](https://github.com/rafigk2v9c/APKdevastate/) - Software de análisis avanzado para payloads APK creados por RATs.
1. ~~[Smali CFG generator](https://github.com/EugenioDelfa/Smali-CFGs)~~
1. ~~[Several tools from PSU](http://siis.cse.psu.edu/tools.html)~~
1. ~~[SPARTA](https://www.cs.washington.edu/sparta) - verifica (demuestra) que una app satisface una política de seguridad de flujo de información; construido sobre el [Checker Framework](https://types.cs.washington.edu/checker-framework/)~~

### Escáneres de vulnerabilidades de aplicaciones

1. [QARK](https://github.com/linkedin/qark/) - QARK de LinkedIn está para que los desarrolladores de apps escaneen sus aplicaciones en busca de problemas de seguridad
1. [AndroBugs](https://github.com/AndroBugs/AndroBugs_Framework)
1. [Nogotofail](https://github.com/google/nogotofail)
1. [Ostorlab](https://ostorlab.co) - La versión gratuita de Ostorlab escanea apps en Android Play Store, iOS App Store y Huawei AppGallery
1. ~~[Devknox](https://devknox.io/) - Plugin de IDE para construir apps Android seguras. Ya no se mantiene.~~

### Herramientas de análisis dinámico

1. [Android DBI framework](http://www.mulliner.org/blog/blosxom.cgi/security/androiddbiv02.html)
1. [Androl4b](https://github.com/sh4hin/Androl4b)- Una máquina virtual para evaluar aplicaciones Android, ingeniería inversa y análisis de malware
1. [House](https://github.com/nccgroup/house)- House: un kit de herramientas de análisis de aplicaciones móviles en tiempo de ejecución con GUI web, impulsado por Frida, escrito en Python.
1. [Mobile-Security-Framework MobSF](https://github.com/MobSF/Mobile-Security-Framework-MobSF) - Mobile Security Framework es un framework inteligente, todo en uno y de código abierto para pruebas de penetración automatizadas de aplicaciones móviles (Android/iOS), capaz de realizar análisis estático, dinámico y pruebas de API web.
1. [Droidbox](https://github.com/pjlantz/droidbox)
1. [Drozer](https://github.com/mwrlabs/drozer)
1. [Xposed](https://forum.xda-developers.com/xposed/xposed-installer-versions-changelog-t2714053) - equivalente a hacer inyección de código basada en stub pero sin modificaciones al binario
1. [Inspeckage](https://github.com/ac-pm/Inspeckage) - Android Package Inspector - análisis dinámico con hooks de API, iniciar actividades no exportadas y más. (Módulo Xposed)
1. [Android Hooker](https://github.com/AndroidHooker/hooker) - Instrumentación de código Java dinámica (requiere el framework Substrate)
1. [ProbeDroid](https://github.com/ZSShen/ProbeDroid) - Instrumentación de código Java dinámica
1. [DECAF](https://github.com/sycurelab/DECAF) - Dynamic Executable Code Analysis Framework basado en QEMU (DroidScope ahora es una extensión de DECAF)
1. [CuckooDroid](https://github.com/idanr1986/cuckoo-droid) - Extensión de Android para el sandbox Cuckoo
1. [Mem](https://github.com/MobileForensicsResearch/mem) - Análisis de memoria de Android (requiere root)
1. [Crowdroid](http://www.ida.liu.se/labs/rtslab/publications/2011/spsm11-burguera.pdf) – no se pudo encontrar la herramienta real
1. [AuditdAndroid](https://github.com/nwhusted/AuditdAndroid) – puerto de auditd a Android, ya no en desarrollo activo
1. [Android Security Evaluation Framework](https://code.google.com/p/asef/) - ya no en desarrollo activo
1. [Aurasium](https://github.com/xurubin/aurasium) – Aplicación práctica de políticas de seguridad para apps Android mediante reescritura de bytecode y monitoreo de referencia in situ.
1. [Android Linux Kernel modules](https://github.com/strazzere/android-lkms)
1. [StaDynA](https://github.com/zyrikby/StaDynA) - un sistema que admite el análisis de apps de seguridad en presencia de características de actualización de código dinámico (carga dinámica de clases y reflexión). Esta herramienta combina análisis estático y dinámico de aplicaciones Android para revelar el comportamiento oculto/actualizado y ampliar los resultados del análisis estático con esta información.
1. [DroidAnalytics](https://github.com/zhengmin1989/DroidAnalytics) - incompleto
1. [Vezir Project](https://github.com/oguzhantopgul/Vezir-Project) - Máquina virtual para pruebas de penetración de aplicaciones móviles y análisis de malware móvil
1. [MARA](https://github.com/xtiankisutsa/MARA_Framework) - Marco de ingeniería inversa y análisis de aplicaciones móviles
1. [Taintdroid](http://appanalysis.org) - requiere compilación de AOSP
1. [ARTist](https://artist.cispa.saarland) - un framework flexible de instrumentación y análisis híbrido de código abierto para apps Android y el middleware Java de Android. Se basa en el compilador de Android Runtime (ART) y modifica el código durante la compilación en el dispositivo.
1. [Android Malware Sandbox](https://github.com/Areizen/Android-Malware-Sandbox)
1. [AndroPyTool](https://github.com/alexMyG/AndroPyTool) - una herramienta para extraer características estáticas y dinámicas de APK de Android. Combina diferentes herramientas de análisis de apps Android conocidas como DroidBox, FlowDroid, Strace, AndroGuard y análisis VirusTotal.
1. [Runtime Mobile Security (RMS)](https://github.com/m0bilesecurity/RMS-Runtime-Mobile-Security) - es una potente interfaz web que te ayuda a manipular apps Android e iOS en tiempo de ejecución
1. [PAPIMonitor](https://github.com/Dado1513/PAPIMonitor) – PAPIMonitor (Python API Monitor para apps Android) es una herramienta Python basada en Frida para monitorear las API seleccionadas por el usuario durante la ejecución de la app.
1. [Android_application_analyzer](https://github.com/NotSoSecure/android_application_analyzer) - La herramienta se usa para analizar el contenido de la aplicación Android en el almacenamiento local.
1. [Decompiler.com](https://www.decompiler.com/) - Descompilador APK y Java en línea
1. [friTap](https://github.com/fkie-cad/friTap)- Intercepta conexiones SSL/TLS con Frida; permite extracción de claves TLS y descifrado de la carga TLS como PCAP en Android en tiempo real.
1. [HacknDroid](https://github.com/RaffaDNDM/HacknDroid) - Una herramienta diseñada para automatizar varias tareas de pruebas de penetración de aplicaciones móviles (MAPT) y facilitar la interacción con dispositivos Android.
1. [adbsploit](https://github.com/mesquidar/adbsploit) - herramientas para explotar el dispositivo vía ADB
1. [Brida](https://github.com/federicodotta/Brida) - Extensión de Burp Suite que, actuando como puente entre Burp y Frida, te permite usar y manipular los propios métodos de las aplicaciones mientras alteras el tráfico intercambiado entre las aplicaciones y sus servicios/servidores backend.
1. [MPT](https://github.com/ByteSnipers/mobile-pentest-toolkit) - MPT (Mobile Pentest Toolkit) es una solución imprescindible para tus flujos de trabajo de pruebas de penetración Android. Esta herramienta te permite automatizar tareas de seguridad.
1. [Andriller](https://github.com/den4uk/andriller) - un utilidad de software con una colección de herramientas forenses para teléfonos inteligentes. Realiza una adquisición de solo lectura, forense y no destructiva de dispositivos Android.
1. [Mira](https://github.com/vwww-droid/Mira) - Plataforma de análisis de protección en tiempo de ejecución para apps Android e iOS de terceros, que permite a la IA usar capacidades shell, Java, Native y Frida del lado de la app host para la detección de riesgos del entorno y la validación de endurecimiento.
1. [FlutterTap](https://github.com/script-or-script/FlutterTap) - Módulo Zygisk que evita la verificación de certificados BoringSSL dentro de `libflutter.so` y redirige el tráfico de las apps Flutter seleccionadas a un proxy. Persiste tras reinicios, por lo que no necesita sesión Frida, ni cable, ni puerto de escucha.
1. [Mobix](https://github.com/blackfoxxx/Mobix) - Laboratorio de pentest Android autorizado: cadena de bypass de Frida SSL-pinning/detección de root, captura de tráfico mitmproxy con marcado automático de IDOR, un panel web y un servidor MCP de 36 herramientas para que un agente Claude Code pueda ejecutar él mismo todo el ciclo de escaneo a hallazgos.
1. ~~[AppUse](https://appsec-labs.com/AppUse/) – compilación personalizada para pruebas de penetración~~
1. ~~[Appie](https://manifestsecurity.com/appie/) - Appie es un paquete de software preconfigurado para funcionar como un entorno de pentest Android. Es totalmente portátil y se puede llevar en una memoria USB o smartphone. Esta es una solución integral para todas las herramientas necesarias en la evaluación de seguridad de aplicaciones Android y una alternativa fantástica a las máquinas virtuales existentes.~~
1. ~~[Android Tamer](https://androidtamer.com/) - Plataforma virtual/en vivo para profesionales de seguridad Android~~
1. ~~[Android Malware Analysis Toolkit](http://www.mobilemalware.com.br/amat/download.html) - (distro Linux) Antes, solía ser un [analizador en línea](http://dunkelheit.com.br/amat/analysis/index_en.php)~~
1. ~~[Android Reverse Engineering](https://redmine.honeynet.org/projects/are/wiki) – ARE (ingeniería inversa Android) ya no está en desarrollo activo~~
1. ~~[ViaLab Community Edition](https://www.nowsecure.com/blog/2014/09/09/introducing-vialab-community-edition/)~~
1. ~~[Mercury](https://labs.mwrinfosecurity.com/tools/2012/03/16/mercury/)~~
1. ~~[Cobradroid](https://thecobraden.com/projects/cobradroid/) – imagen personalizada para análisis de malware~~

### Ingeniería inversa

1. [Smali/Baksmali](https://github.com/JesusFreke/smali) – descompilación apk
1. [emacs syntax coloring for smali files](https://github.com/strazzere/Emacs-Smali)
1. [vim syntax coloring for smali files](http://codetastrophe.com/smali.vim)
1. [AndBug](https://github.com/swdunlop/AndBug)
1. [Androguard](https://github.com/androguard/androguard) – potente, se integra bien con otras herramientas
1. [Apktool](https://github.com/iBotPeaches/Apktool) – realmente útil para compilación/descompilación (usa smali)
1. [Android Framework for Exploitation](https://github.com/appknox/AFE)
1. [Bypass signature and permission checks for IPCs](https://github.com/iSECPartners/Android-KillPermAndSigChecks)
1. [Android OpenDebug](https://github.com/iSECPartners/Android-OpenDebug) – hace que cualquier aplicación en el dispositivo sea depurable (usando Cydia Substrate).
1. [Dex2Jar](https://github.com/pxb1988/dex2jar) - convertidor de dex a jar
1. [Enjarify](https://github.com/google/enjarify) - convertidor de dex a jar de Google
1. [Dedexer](https://sourceforge.net/projects/dedexer/)
1. [Fino](https://github.com/sysdream/fino)
1. [Frida](https://www.frida.re/) - inyecta JavaScript para explorar aplicaciones y una [herramienta GUI](https://github.com/antojoseph/diff-gui) para ello
1. [Indroid](https://bitbucket.org/aseemjakhar/indroid) – kit de inyección de hilos
1. [Introspy](https://github.com/iSECPartners/Introspy-Android)
1. [Jad]( https://varaneckas.com/jad/) - descompilador Java
1. [JD-GUI](https://github.com/java-decompiler/jd-gui) - descompilador Java
1. [CFR](http://www.benf.org/other/cfr/) - descompilador Java
1. [Krakatau](https://github.com/Storyyeller/Krakatau) - descompilador Java
1. [FernFlower](https://github.com/fesh0r/fernflower) - descompilador Java
1. [Redexer](https://github.com/plum-umd/redexer) – manipulación apk
1. [Simplify Android deobfuscator](https://github.com/CalebFenton/simplify)
1. [Bytecode viewer](https://github.com/Konloch/bytecode-viewer)
1. [Radare2](https://github.com/radare/radare2)
1. [Jadx](https://github.com/skylot/jadx)
1. [Dwarf](https://github.com/iGio90/Dwarf) - GUI para ingeniería inversa
1. [Andromeda](https://github.com/secrary/Andromeda) - Otra herramienta básica de ingeniería inversa de línea de comandos
1. [apk-mitm](https://github.com/shroudedcode/apk-mitm) - Una aplicación CLI que prepara archivos APK de Android para inspección HTTPS
1. [Noia](https://github.com/0x742/noia) - Sencilla herramienta de explorador de archivos de sandbox de aplicaciones Android
1. [Obfuscapk](https://github.com/ClaudiuGeorgiu/Obfuscapk) — Obfuscapk es una herramienta Python modular para ofuscar aplicaciones Android sin requerir su código fuente.
1. [ARMANDroid](https://github.com/Mobile-IoT-Security-Lab/ARMANDroid) - ARMAND (Anti-Repackaging through Multi-pattern, Anti-tampering based on Native Detection) es un novedoso esquema de protección anti-manipulación que incrusta logic bombs y nodos de detección AT directamente en el archivo apk sin necesidad de su código fuente.
1. [MVT (Mobile Verification Toolkit)](https://github.com/mvt-project/mvt) - una colección de utilidades para simplificar y automatizar el proceso de recopilación de rastros forenses útiles para identificar una posible compromisión de dispositivos Android e iOS
1. [Dexmod](https://github.com/google/dexmod) - una herramienta para ejemplificar el parcheo de bytecode Dalvik en un archivo DEX (Dalvik Executable) y ayudar en el análisis estático de aplicaciones Android.
1. [odex-patcher](https://github.com/giacomoferretti/odex-patcher) - Ejecuta código arbitrario parcheando archivos OAT
1. [PhoneSploit-Pro](https://github.com/AzeemIdrisi/PhoneSploit-Pro) - Una herramienta de hacking todo en uno para explotar remotamente dispositivos Android usando ADB y el framework Metasploit para obtener una sesión Meterpreter.
1. [APKLab](https://github.com/APKLab/APKLab) - plugin para VS Code para analizar APK
1. ~~[IntentSniffer](https://www.nccgroup.com/us/our-research/intent-sniffer/)~~
1. ~~[Procyon](https://bitbucket.org/mstrobel/procyon/wiki/Java%20Decompiler) - descompilador Java~~
1. ~~[Smali viewer](http://blog.avlyun.com/wp-content/uploads/2014/04/SmaliViewer.zip)~~
1. ~~[ZjDroid](https://github.com/BaiduSecurityLabs/ZjDroid)~~, ~~[fork/mirror](https://github.com/yangbean9/ZjDroid)~~
1. ~~[Dare](http://siis.cse.psu.edu/dare/index.html) – convertidor de .dex a .class~~

### Pruebas de fuzzing

1. [Radamsa Fuzzer](https://github.com/anestisb/radamsa-android)
1. [Honggfuzz](https://github.com/google/honggfuzz)
1. [An Android port of the Melkor ELF fuzzer](https://github.com/anestisb/melkor-android)
1. [Media Fuzzing Framework for Android](https://github.com/fuzzing/MFFA)
1. [AndroFuzz](https://github.com/jonmetz/AndroFuzz)
1. [QuarksLab's Android Fuzzing](https://github.com/quarkslab/android-fuzzing)
1. ~~[IntentFuzzer](https://www.nccgroup.trust/us/about-us/resources/intent-fuzzer/)~~

### Detectores de reempaquetado de aplicaciones

1. [FSquaDRA](https://github.com/zyrikby/FSquaDRA) - una herramienta para detectar aplicaciones Android reempaquetadas basada en la comparación de hash de recursos de la app.

### Rastreadores de mercado

1. [Google Play crawler (Java)](https://github.com/Akdeniz/google-play-crawler)
1. [Google Play crawler (Python)](https://github.com/egirault/googleplay-api)
1. [Google Play crawler (Node)](https://github.com/dweinstein/node-google-play) - obtener detalles de la app y descargar apps de la tienda oficial Google Play.
1. [Aptoide downloader (Node)](https://github.com/dweinstein/node-aptoide) - descargar apps del mercado Android de terceros Aptoide
1. [Appland downloader (Node)](https://github.com/dweinstein/node-appland) - descargar apps del mercado Android de terceros Appland
1. [PlaystoreDownloader](https://github.com/ClaudiuGeorgiu/PlaystoreDownloader) - PlaystoreDownloader es una herramienta para descargar aplicaciones Android directamente desde Google Play Store. Tras una configuración inicial (única), las aplicaciones se pueden descargar especificando su nombre de paquete.
1. [APK Downloader](https://apkcombo.com/apk-downloader/) Servicio en línea para descargar APK de Play Store para una configuración de dispositivo Android específica
1. ~~[Apkpure](https://apkpure.com/) - Descargador apk en línea. También proporciona su propia app para descargar.~~

### Herramientas varias

1. [smalihook](http://androidcracking.blogspot.com/2011/03/original-smalihook-java-source.html)
1. [AXMLPrinter2](http://code.google.com/p/android4me/downloads/detail?name=AXMLPrinter2.jar) - para convertir archivos XML binarios en archivos XML legibles por humanos
1. [adb autocomplete](https://github.com/mbrubeck/android-completion)
1. [mitmproxy](https://github.com/mitmproxy/mitmproxy)
1. [dockerfile/androguard](https://github.com/dweinstein/dockerfile-androguard)
1. [Android Vulnerability Test Suite](https://github.com/AndroidVTS/android-vts) - android-vts escanea un dispositivo en busca de un conjunto de vulnerabilidades
1. [AppMon](https://github.com/dpnishant/appmon)- AppMon es un framework automatizado para monitorear y alterar las llamadas a la API del sistema de apps nativas macOS, iOS y Android. Se basa en Frida.
1. [Internal Blue](https://github.com/seemoo-lab/internalblue) - Framework de experimentación Bluetooth basado en la ingeniería inversa de controladores Bluetooth Broadcom
1. [Android Mobile Device Hardening](https://github.com/SecTheTech/AMDH) - AMDH escanea y endurece la configuración del dispositivo y enumera las apps instaladas dañinas basándose en permisos.
1. [NullKia](https://github.com/bad-antics/nullkia) - Framework de seguridad móvil integral que admite 18 fabricantes con explotación de baseband, seguridad celular, investigación TEE/TrustZone y herramientas de extracción BootROM.
1. [Firmware Extractor](https://github.com/AndroidDumps/Firmware_extractor) - Extrae el archivo dado a imágenes
1. [ARMv7 payload that provides arbitrary code execution on MediaTek bootloaders](https://github.com/R0rt1z2/kaeru)
1. [DroidGround](https://github.com/SECFORCE/droidground) - Un patio de recreo flexible para desafíos CTF de Android
1. [sundaysec/Android-Exploits](https://github.com/sundaysec/Android-Exploits) - Una colección de exploits y hacks de Android
1. [Spectre](https://github.com/thomasbuilds/Spectre) - Escáner de radiofrecuencia con capacidades de reconocimiento y ofensivas. Monitorea celular, Wi-Fi, Bluetooth LE y GNSS en el dispositivo, con un inspector BLE GATT, un difusor iBeacon y descubrimiento de red local.
1. ~~[Android Device Security Database](https://www.android-device-security.org/client/datatable) - Base de datos de características de seguridad de dispositivos Android~~
1. ~~[Opcodes table for quick reference](http://ww38.xchg.info/corkami/opcodes_tables.pdf)~~
1. ~~[APK-Downloader](http://codekiem.com/2012/02/24/apk-downloader/)~~ - parece muerto ahora
1. ~~[Dalvik opcodes](http://pallergabor.uw.hu/androidblog/dalvik_opcodes.html)~~

### Aplicaciones vulnerables para practicar

1. [Damn Insecure Vulnerable Application (DIVA)](https://github.com/payatu/diva-android)
1. [Vuldroid](https://github.com/jaiswalakshansh/Vuldroid)
1. [ExploitMe Android Labs](http://securitycompass.github.io/AndroidLabs/setup.html)
1. [GoatDroid](https://github.com/jackMannino/OWASP-GoatDroid-Project)
1. [Android InsecureBank](https://github.com/dineshshetty/Android-InsecureBankv2)
1. [Insecureshop](https://github.com/optiv/insecureshop)
1. [Oversecured Vulnerable Android App (OVAA)](https://github.com/oversecured/ovaa)
1. [Injured Android - CTF](https://github.com/B3nac/InjuredAndroid)
1. [Damn Vulnerable Mobile App (DVMA)](https://github.com/cpeoples/dvma)

## Académico/Investigación/Publicaciones/Libros

### Artículos de investigación

1. [Exploit Database](https://www.exploit-db.com/papers/)
1. [Android security-related presentations](https://github.com/jacobsoo/AndroidSlides)
1. [A good collection of static analysis papers](https://tthtlc.wordpress.com/2011/09/01/static-analysis-of-android-applications/)

### Libros

1. [SEI CERT Android Secure Coding Standard](https://wiki.sei.cmu.edu/confluence/display/android/Android+Secure+Coding+Standard)

### Otros

1. [OWASP Mobile Security Testing Guide Manual](https://github.com/OWASP/owasp-mstg)
1. [doridori/Android-Security-Reference](https://github.com/doridori/Android-Security-Reference)
1. [android app security checklist](https://github.com/b-mueller/android_app_security_checklist)
1. [Mobile App Pentest Cheat Sheet](https://github.com/tanprathan/MobileApp-Pentest-Cheatsheet)
1. [Android Reverse Engineering 101 by Daniele Altomare (Web Archive link)](https://web.archive.org/web/20180721134044/http://www.fasteque.com:80/android-reverse-engineering-101-part-1/)
1. ~~[Mobile Security Reading Room](https://mobile-security.zeef.com) - Una sala de lectura que contiene material de lectura técnica bien categorizado sobre pruebas de penetración móvil, malware móvil, forense móvil y todo tipo de temas relacionados con la seguridad móvil~~

## Explotaciones/Vulnerabilidades/Bugs

### Lista

1. [Android Security Bulletins](https://source.android.com/security/bulletin/)
1. [Android's reported security vulnerabilities](https://www.cvedetails.com/vulnerability-list/vendor_id-1224/product_id-19997/Google-Android.html)
1. [OWASP Mobile Top 10 2016](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10)
1. [Exploit Database](https://www.exploit-db.com/search/?action=search&q=android) - haz clic en buscar
1. [Vulnerability Google Doc](https://docs.google.com/spreadsheet/pub?key=0Am5hHW4ATym7dGhFU1A4X2lqbUJtRm1QSWNRc3E0UlE&single=true&gid=0&output=html)
1. [Google Android Security Team’s Classifications for Potentially Harmful Applications (Malware)](https://source.android.com/security/reports/Google_Android_Security_PHA_classifications.pdf)
1. ~~[Android Devices Security Patch Status](https://kb.androidtamer.com/Device_Security_Patch_tracker/)~~

### Malware

1. [androguard - Database Android Malware wiki](https://code.google.com/p/androguard/wiki/DatabaseAndroidMalwares)
1. [Android Malware GitHub repo](https://github.com/ashishb/android-malware)
1. [Android Malware Genome Project](http://www.malgenomeproject.org/) - contiene 1260 muestras de malware categorizadas en 49 familias de malware diferentes, gratis para fines de investigación.
1. [Contagio Mobile Malware Mini Dump](http://contagiominidump.blogspot.com)
1. [Drebin](https://www.sec.tu-bs.de/~danarp/drebin/)
1. [Hudson Rock](https://www.hudsonrock.com/threat-intelligence-cybercrime-tools) - Un conjunto de herramientas gratuitas de inteligencia de cibercrimen que puede indicar si un paquete APK específico fue comprometido en un ataque de malware Infostealer.
1. [Kharon Malware Dataset](http://kharon.gforge.inria.fr/dataset/) - 7 malware que han sido ingeniería inversa y documentados
1. [Android Adware and General Malware Dataset](https://www.unb.ca/cic/datasets/android-adware.html)
1. [AndroZoo](https://androzoo.uni.lu/) - AndroZoo es una colección de aplicaciones Android creciente de varias fuentes, incluido el mercado de aplicaciones oficial Google Play.
1. ~~[Android PRAGuard Dataset](http://pralab.diee.unica.it/en/AndroidPRAGuardDataset) - El conjunto de datos contiene 10479 muestras, obtenidas ofuscando los conjuntos de datos MalGenome y Contagio Minidump con siete técnicas de ofuscación diferentes.~~
1. ~~[Admire](http://admire.necst.it/)~~

### Programas de recompensas

1. [Android Security Reward Program](https://www.google.com/about/appsecurity/android-rewards/)

### Cómo reportar problemas de seguridad

1. [Android - reporting security issues](https://source.android.com/security/overview/updates-resources.html#report-issues)
1. [Android Reports and Resources](https://github.com/B3nac/Android-Reports-and-Resources) - Lista de informes Android Hackerone divulgados y otros recursos

## Contribuyendo

¡Tus contribuciones siempre son bienvenidas!

## 📖 Cita

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

Este repositorio ha sido citado en [más de 10 artículos](https://scholar.google.com/scholar?q=github.com%2Fashishb%2Fandroid-security-awesome)
