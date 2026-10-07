# Android Security Awesome ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)

[![Star History Rank](https://api.star-history.com/badge?repo=ashishb/android-security-awesome&theme=dark)](https://www.star-history.com/ashishb/android-security-awesome)

[![Link Liveness Checker](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml)

[![Lint Shell scripts](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml)
[![Lint Markdown](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml)
[![Lint YAML](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml)
[![Lint GitHub Actions](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml)
![GitHub contributors](https://img.shields.io/github/contributors/ashishb/android-security-awesome)

Подборка ресурсов, связанных с безопасностью Android.

Если вы считаете этот проект полезным, пожалуйста, рассмотрите возможность [поддержать его](./sponsors.md).

1. [Инструменты](#tools)
1. [Академические/Исследования/Публикации/Книги](#academicresearchpublicationsbooks)
1. [Эксплойты/Уязвимости/Баги](#exploitsvulnerabilitiesbugs)

## Инструменты

### Онлайн-анализаторы

1. [Appknox](https://www.appknox.com/) - не бесплатно
1. [Virustotal](https://www.virustotal.com/)
1. [NowSecure Lab Automated](https://www.nowsecure.com/blog/2016/09/19/announcing-nowsecure-lab-automated/) - Корпоративный инструмент для тестирования безопасности мобильных приложений как для Android, так и для iOS. Lab Automated выполняет динамический и статический анализ на реальных устройствах в облаке и возвращает результаты за минуты. Не бесплатно
1. [App Detonator](https://appdetonator.run/) - Подрывает APK-бинарник, предоставляя подробности на уровне исходного кода, включая автора приложения, подпись, сборку и информацию манифеста. Бесплатная квота — 3 анализа/день.
1. [Pithus](https://beta.pithus.org/) - Открытый анализатор APK. Всё ещё в бета-версии и пока ограничен статическим анализом. Можно охотиться за вредоносным ПО с помощью правил YARA. Подробнее [здесь](https://beta.pithus.org/about/).
1. [Oversecured](https://oversecured.com/) - Корпоративный сканер уязвимостей для приложений Android и iOS; он позволяет владельцам и разработчикам приложений защищать каждую новую версию мобильного приложения, интегрируя Oversecured в процесс разработки. Не бесплатно.
1. [AppSweep by Guardsquare](https://appsweep.guardsquare.com/) - Бесплатное, быстрое тестирование безопасности Android-приложений для разработчиков
1. [Koodous](https://koodous.com) - Выполняет статический/динамический анализ вредоносного ПО на обширном репозитории образцов Android и проверяет их по публичным и приватным правилам Yara.
1. [Immuniweb](https://www.immuniweb.com/mobile/). Выполняет «OWASP Mobile Top 10 Test», «Mobile App Privacy Check» и тест разрешений приложения. Бесплатный уровень — 4 теста в день, включая отчёт после регистрации.
1. [ANY.RUN](https://app.any.run/) - Интерактивная облачная платформа анализа вредоносного ПО с поддержкой анализа приложений Android. Доступен ограниченный бесплатный тариф.
1. ~~[BitBaan](https://malab.bitbaan.com/)~~
1. ~~[AVC UnDroid](http://undroid.av-comparatives.info/)~~
1. ~~[AMAaaS](https://amaaas.com) - Бесплатный сервис анализа Android-вредоносов. Bare-metal сервис, предоставляющий статический и динамический анализ для Android-приложений. Продукт [MalwarePot](https://malwarepot.com/index.php/AMAaaS)~~.
1. ~~[AppCritique](https://appcritique.boozallen.com) - Загрузите свои Android APK и получите комплексные бесплатные оценки безопасности~~
1. ~~[NVISO ApkScan](https://apkscan.nviso.be/) - прекращается 31 окт. 2019~~
1. ~~[Mobile Malware Sandbox](http://www.mobilemalware.com.br/analysis/index_en.php)~~
1. ~~[IBM Security AppScan Mobile Analyzer](https://appscan.bluemix.net/mobileAnalyzer) - не бесплатно~~
1. ~~[Visual Threat](https://www.visualthreat.com/) - больше не является анализатором Android-приложений~~
1. ~~[Tracedroid](http://tracedroid.few.vu.nl/)~~
1. ~~[habo](https://habo.qq.com/) - 10/день~~
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
1. ~~[Fireeye](https://fireeye.ijinshan.com/)- макс. 60 МБ, 15/день~~
1. ~~[approver](https://approver.talos-sec.com/) - Approver — полностью автоматизированная платформа анализа безопасности и оценки рисков для приложений Android и iOS. Не бесплатно.~~
1. ~~[Fraunhofer App-ray](http://app-ray.co/) - домен истёк~~
1. ~~[AndroTotal](http://andrototal.org/) - мёртв~~

### Инструменты статического анализа

1. [Androwarn](https://github.com/maaaaz/androwarn/) - обнаруживает и предупреждает пользователя о потенциально вредоносном поведении, разработанном Android-приложением.
1. [ApkAnalyser](https://github.com/sonyxperiadev/ApkAnalyser)
1. [APKInspector](https://github.com/honeynet/apkinspector/)
1. [Droid Intent Data Flow Analysis for Information Leakage](https://insights.sei.cmu.edu/library/didfail/)
1. [DroidLegacy](https://bitbucket.org/srl/droidlegacy)
1. [FlowDroid](https://blogs.uni-paderborn.de/sse/tools/flowdroid/)
1. [Android Decompiler](https://www.pnfsoftware.com/) – не бесплатно
1. [PSCout](https://security.csl.toronto.edu/pscout/) - Инструмент, который извлекает спецификацию разрешений из исходного кода ОС Android с помощью статического анализа
1. [Amandroid](http://amandroid.sireum.org/)
1. [SmaliSCA](https://github.com/dorneanu/smalisca) - Smali Static Code Analysis
1. [CFGScanDroid](https://github.com/douggard/CFGScanDroid) - Сканирует и сравнивает CFG с CFG вредоносных приложений
1. [Madrolyzer](https://github.com/maldroid/maldrolyzer) - извлекает полезные данные, такие как C&C, номер телефона и т.д.
1. [ConDroid](https://github.com/JulianSchuette/ConDroid) - Выполняет комбинацию символического + конкретного исполнения приложения
1. [DroidRA](https://github.com/serval-snt-uni-lu/DroidRA)
1. [RiskInDroid](https://github.com/ClaudiuGeorgiu/RiskInDroid) - Инструмент для расчёта риска Android-приложений на основе их разрешений, с доступной онлайн-демонстрацией.
1. [SUPER](https://github.com/SUPERAndroidAnalyzer/super) - Secure, Unified, Powerful, and Extensible Rust Android Analyzer
1. [ClassyShark](https://github.com/google/android-classyshark) - Автономный инструмент инспекции бинарников, который может просматривать любой исполняемый файл Android и показывать важную информацию.
1. [StaCoAn](https://github.com/vincentcox/StaCoAn) - Кроссплатформенный инструмент, помогающий разработчикам, охотникам за баг-баунти и этичным хакерам выполнять статический анализ кода мобильных приложений. Этот инструмент создавался с большим упором на удобство использования и графическое руководство в пользовательском интерфейсе.
1. [JAADAS](https://github.com/flankerhqd/JAADAS) - Совместный внутрипроцедурный и межпроцедурный инструмент анализа программ для поиска уязвимостей в Android-приложениях, построенный на Soot и Scala
1. [Quark-Engine](https://github.com/quark-engine/quark-engine) - Система оценки Android-вредоносов, игнорирующая обфускацию
1. [One Step Decompiler](https://github.com/b-mueller/apkx) - Декомпиляция Android APK для ленивых
1. [APKLeaks](https://github.com/dwisiswant0/apkleaks) - Сканирует файл APK на наличие URI, endpoints и секретов.
1. [Mobile Audit](https://github.com/mpast/mobileAudit) - Веб-приложение для выполнения статического анализа и обнаружения вредоносного ПО в Android APK.
1. [Detekt](https://github.com/detekt/detekt) - Статический анализ кода для Kotlin
1. [APKdevastate](https://github.com/rafigk2v9c/APKdevastate/) - Продвинутое ПО для анализа APK-полезных нагрузок, созданных RAT.
1. ~~[Smali CFG generator](https://github.com/EugenioDelfa/Smali-CFGs)~~
1. ~~[Several tools from PSU](http://siis.cse.psu.edu/tools.html)~~
1. ~~[SPARTA](https://www.cs.washington.edu/sparta) - проверяет (доказывает), что приложение удовлетворяет политике безопасности потока информации; построен на [Checker Framework](https://types.cs.washington.edu/checker-framework/)~~

### Сканеры уязвимостей приложений

1. [QARK](https://github.com/linkedin/qark/) - QARK от LinkedIn предназначен для разработчиков приложений, чтобы сканировать приложения на наличие проблем с безопасностью
1. [AndroBugs](https://github.com/AndroBugs/AndroBugs_Framework)
1. [Nogotofail](https://github.com/google/nogotofail)
1. [Ostorlab](https://ostorlab.co) - Бесплатная версия Ostorlab сканирует приложения в Android Play Store, iOS App Store и Huawei AppGallery
1. ~~[Devknox](https://devknox.io/) - Плагин IDE для создания безопасных Android-приложений. Больше не поддерживается.~~

### Инструменты динамического анализа

1. [Android DBI framework](http://www.mulliner.org/blog/blosxom.cgi/security/androiddbiv02.html)
1. [Androl4b](https://github.com/sh4hin/Androl4b)- Виртуальная машина для оценки Android-приложений, реверс-инжиниринга и анализа вредоносного ПО
1. [House](https://github.com/nccgroup/house)- House: набор инструментов анализа мобильных приложений во время выполнения с веб-GUI, работающий на Frida, написан на Python.
1. [Mobile-Security-Framework MobSF](https://github.com/MobSF/Mobile-Security-Framework-MobSF) - Mobile Security Framework — интеллектуальная, универсальная открытая платформа автоматизированного пентеста мобильных приложений (Android/iOS), способная выполнять статический, динамический анализ и тестирование веб-API.
1. [Droidbox](https://github.com/pjlantz/droidbox)
1. [Drozer](https://github.com/mwrlabs/drozer)
1. [Xposed](https://forum.xda-developers.com/xposed/xposed-installer-versions-changelog-t2714053) - эквивалентно внедрению кода на основе stub, но без каких-либо изменений бинарника
1. [Inspeckage](https://github.com/ac-pm/Inspeckage) - Android Package Inspector - динамический анализ с хуками API, запуск неэкспортируемых активностей и многое другое. (Модуль Xposed)
1. [Android Hooker](https://github.com/AndroidHooker/hooker) - Динамическая инструментация Java-кода (требуется фреймворк Substrate)
1. [ProbeDroid](https://github.com/ZSShen/ProbeDroid) - Динамическая инструментация Java-кода
1. [DECAF](https://github.com/sycurelab/DECAF) - Dynamic Executable Code Analysis Framework на базе QEMU (DroidScope теперь является расширением DECAF)
1. [CuckooDroid](https://github.com/idanr1986/cuckoo-droid) - Android-расширение для песочницы Cuckoo
1. [Mem](https://github.com/MobileForensicsResearch/mem) - Анализ памяти Android (требуется root)
1. [Crowdroid](http://www.ida.liu.se/labs/rtslab/publications/2011/spsm11-burguera.pdf) – не удалось найти реальный инструмент
1. [AuditdAndroid](https://github.com/nwhusted/AuditdAndroid) – порт auditd на Android, больше не находится в активной разработке
1. [Android Security Evaluation Framework](https://code.google.com/p/asef/) - больше не находится в активной разработке
1. [Aurasium](https://github.com/xurubin/aurasium) – Практическое применение политик безопасности для Android-приложений через перезапись байткода и мониторинг ссылок на месте.
1. [Android Linux Kernel modules](https://github.com/strazzere/android-lkms)
1. [StaDynA](https://github.com/zyrikby/StaDynA) - система, поддерживающая анализ защитных приложений в присутствии функций динамического обновления кода (динамическая загрузка классов и рефлексия). Этот инструмент объединяет статический и динамический анализ Android-приложений, чтобы выявить скрытое/обновлённое поведение и расширить результаты статического анализа этой информацией.
1. [DroidAnalytics](https://github.com/zhengmin1989/DroidAnalytics) - не завершён
1. [Vezir Project](https://github.com/oguzhantopgul/Vezir-Project) - Виртуальная машина для Mobile Application Pentesting и Mobile Malware Analysis
1. [MARA](https://github.com/xtiankisutsa/MARA_Framework) - Mobile Application Reverse Engineering and Analysis Framework
1. [Taintdroid](http://appanalysis.org) - требует компиляции AOSP
1. [ARTist](https://artist.cispa.saarland) - гибкий открытый фреймворк инструментации и гибридного анализа для Android-приложений и Java-промежуточного слоя Android. Он основан на компиляторе Android Runtime (ART) и изменяет код во время компиляции на устройстве.
1. [Android Malware Sandbox](https://github.com/Areizen/Android-Malware-Sandbox)
1. [AndroPyTool](https://github.com/alexMyG/AndroPyTool) - инструмент для извлечения статических и динамических признаков из Android APK. Он объединяет различные известные инструменты анализа Android-приложений, такие как DroidBox, FlowDroid, Strace, AndroGuard и анализ VirusTotal.
1. [Runtime Mobile Security (RMS)](https://github.com/m0bilesecurity/RMS-Runtime-Mobile-Security) - мощный веб-интерфейс, который помогает манипулировать Android- и iOS-приложениями во время выполнения
1. [PAPIMonitor](https://github.com/Dado1513/PAPIMonitor) – PAPIMonitor (Python API Monitor для Android-приложений) — это основанный на Frida Python-инструмент для мониторинга выбранных пользователем API во время выполнения приложения.
1. [Android_application_analyzer](https://github.com/NotSoSecure/android_application_analyzer) - Инструмент используется для анализа содержимого Android-приложения в локальном хранилище.
1. [Decompiler.com](https://www.decompiler.com/) - Онлайн-декомпилятор APK и Java
1. [friTap](https://github.com/fkie-cad/friTap)- Перехватывает SSL/TLS-соединения с помощью Frida; позволяет извлекать ключи TLS и расшифровывать полезную нагрузку TLS в виде PCAP на Android в реальном времени.
1. [HacknDroid](https://github.com/RaffaDNDM/HacknDroid) - Инструмент, предназначенный для автоматизации различных задач Mobile Application Penetration Testing (MAPT) и облегчения взаимодействия с Android-устройствами.
1. [adbsploit](https://github.com/mesquidar/adbsploit) - инструменты для эксплуатации устройства через ADB
1. [Brida](https://github.com/federicodotta/Brida) - Расширение Burp Suite, которое, работая как мост между Burp и Frida, позволяет использовать и манипулировать собственными методами приложений, одновременно подменяя трафик, обмениваемый между приложениями и их серверными службами/серверами.
1. [MPT](https://github.com/ByteSnipers/mobile-pentest-toolkit) - MPT (Mobile Pentest Toolkit) — необходимое решение для ваших рабочих процессов пентеста Android. Этот инструмент позволяет автоматизировать задачи безопасности.
1. [Andriller](https://github.com/den4uk/andriller) - программная утилита с набором криминалистических инструментов для смартфонов. Она выполняет только чтение, криминалистически надёжное, неразрушающее извлечение данных с Android-устройств.
1. [Mira](https://github.com/vwww-droid/Mira) - Платформа анализа защиты во время выполнения для сторонних Android- и iOS-приложений, позволяющая ИИ использовать возможности shell, Java, Native и Frida на стороне хост-приложения для обнаружения рисков окружения и проверки усиления защиты.
1. [FlutterTap](https://github.com/script-or-script/FlutterTap) - Модуль Zygisk, который обходит проверку сертификата BoringSSL внутри `libflutter.so` и перенаправляет трафик выбранных Flutter-приложений на прокси. Сохраняется после перезагрузок, поэтому не требует сессии Frida, кабеля и прослушивающего порта.
1. [Mobix](https://github.com/blackfoxxx/Mobix) - Авторизованная Android-лаборатория пентеста: цепочка обхода Frida SSL-pinning/обнаружения root, захват трафика mitmproxy с автоматической маркировкой IDOR, веб-панель и MCP-сервер из 36 инструментов, чтобы агент Claude Code мог сам выполнять весь цикл от сканирования до находок.
1. ~~[AppUse](https://appsec-labs.com/AppUse/) – пользовательская сборка для пентеста~~
1. ~~[Appie](https://manifestsecurity.com/appie/) - Appie — это программный пакет, предварительно настроенный для работы как среда пентеста Android. Он полностью портативен и может помещаться на USB-накопитель или смартфон. Это универсальное решение для всех инструментов, необходимых при оценке безопасности Android-приложений, и отличная альтернатива существующим виртуальным машинам.~~
1. ~~[Android Tamer](https://androidtamer.com/) - Виртуальная/Live-платформа для специалистов по безопасности Android~~
1. ~~[Android Malware Analysis Toolkit](http://www.mobilemalware.com.br/amat/download.html) - (дистрибутив Linux) Ранее это был [онлайн-анализатор](http://dunkelheit.com.br/amat/analysis/index_en.php)~~
1. ~~[Android Reverse Engineering](https://redmine.honeynet.org/projects/are/wiki) – ARE (Android reverse engineering) больше не находится в активной разработке~~
1. ~~[ViaLab Community Edition](https://www.nowsecure.com/blog/2014/09/09/introducing-vialab-community-edition/)~~
1. ~~[Mercury](https://labs.mwrinfosecurity.com/tools/2012/03/16/mercury/)~~
1. ~~[Cobradroid](https://thecobraden.com/projects/cobradroid/) – пользовательский образ для анализа вредоносного ПО~~

### Реверс-инжиниринг

1. [Smali/Baksmali](https://github.com/JesusFreke/smali) – декомпиляция apk
1. [emacs syntax coloring for smali files](https://github.com/strazzere/Emacs-Smali)
1. [vim syntax coloring for smali files](http://codetastrophe.com/smali.vim)
1. [AndBug](https://github.com/swdunlop/AndBug)
1. [Androguard](https://github.com/androguard/androguard) – мощный, хорошо интегрируется с другими инструментами
1. [Apktool](https://github.com/iBotPeaches/Apktool) – действительно полезен для компиляции/декомпиляции (использует smali)
1. [Android Framework for Exploitation](https://github.com/appknox/AFE)
1. [Bypass signature and permission checks for IPCs](https://github.com/iSECPartners/Android-KillPermAndSigChecks)
1. [Android OpenDebug](https://github.com/iSECPartners/Android-OpenDebug) – делает любое приложение на устройстве отлаживаемым (с использованием Cydia Substrate).
1. [Dex2Jar](https://github.com/pxb1988/dex2jar) - конвертер dex в jar
1. [Enjarify](https://github.com/google/enjarify) - конвертер dex в jar от Google
1. [Dedexer](https://sourceforge.net/projects/dedexer/)
1. [Fino](https://github.com/sysdream/fino)
1. [Frida](https://www.frida.re/) - внедряет JavaScript для исследования приложений и [GUI-инструмент](https://github.com/antojoseph/diff-gui) для этого
1. [Indroid](https://bitbucket.org/aseemjakhar/indroid) – набор для внедрения потоков
1. [Introspy](https://github.com/iSECPartners/Introspy-Android)
1. [Jad]( https://varaneckas.com/jad/) - декомпилятор Java
1. [JD-GUI](https://github.com/java-decompiler/jd-gui) - декомпилятор Java
1. [CFR](http://www.benf.org/other/cfr/) - декомпилятор Java
1. [Krakatau](https://github.com/Storyyeller/Krakatau) - декомпилятор Java
1. [FernFlower](https://github.com/fesh0r/fernflower) - декомпилятор Java
1. [Redexer](https://github.com/plum-umd/redexer) – манипуляция apk
1. [Simplify Android deobfuscator](https://github.com/CalebFenton/simplify)
1. [Bytecode viewer](https://github.com/Konloch/bytecode-viewer)
1. [Radare2](https://github.com/radare/radare2)
1. [Jadx](https://github.com/skylot/jadx)
1. [Dwarf](https://github.com/iGio90/Dwarf) - GUI для реверс-инжиниринга
1. [Andromeda](https://github.com/secrary/Andromeda) - Ещё один базовый инструмент реверс-инжиниринга командной строки
1. [apk-mitm](https://github.com/shroudedcode/apk-mitm) - CLI-приложение, которое подготавливает файлы Android APK для HTTPS-инспекции
1. [Noia](https://github.com/0x742/noia) - Простой инструмент-проводник файлов песочницы Android-приложений
1. [Obfuscapk](https://github.com/ClaudiuGeorgiu/Obfuscapk) — Obfuscapk — это модульный Python-инструмент для обфускации Android-приложений без необходимости их исходного кода.
1. [ARMANDroid](https://github.com/Mobile-IoT-Security-Lab/ARMANDroid) - ARMAND (Anti-Repackaging through Multi-pattern, Anti-tampering based on Native Detection) — это новая схема защиты от подделки, которая встраивает логические бомбы и узлы обнаружения AT прямо в apk-файл без необходимости исходного кода.
1. [MVT (Mobile Verification Toolkit)](https://github.com/mvt-project/mvt) - набор утилит для упрощения и автоматизации процесса сбора криминалистических следов, помогающих выявить потенциальный компромисс устройств Android и iOS
1. [Dexmod](https://github.com/google/dexmod) - инструмент для демонстрации патчинга байткода Dalvik в файле DEX (Dalvik Executable) и помощи в статическом анализе Android-приложений.
1. [odex-patcher](https://github.com/giacomoferretti/odex-patcher) - Выполняет произвольный код, патча OAT-файлы
1. [PhoneSploit-Pro](https://github.com/AzeemIdrisi/PhoneSploit-Pro) - Универсальный хакерский инструмент для удалённой эксплуатации Android-устройств с помощью ADB и фреймворка Metasploit для получения сессии Meterpreter.
1. [APKLab](https://github.com/APKLab/APKLab) - плагин для VS Code для анализа APK
1. ~~[IntentSniffer](https://www.nccgroup.com/us/our-research/intent-sniffer/)~~
1. ~~[Procyon](https://bitbucket.org/mstrobel/procyon/wiki/Java%20Decompiler) - декомпилятор Java~~
1. ~~[Smali viewer](http://blog.avlyun.com/wp-content/uploads/2014/04/SmaliViewer.zip)~~
1. ~~[ZjDroid](https://github.com/BaiduSecurityLabs/ZjDroid)~~, ~~[fork/mirror](https://github.com/yangbean9/ZjDroid)~~
1. ~~[Dare](http://siis.cse.psu.edu/dare/index.html) – конвертер .dex в .class~~

### Фаззинг-тесты

1. [Radamsa Fuzzer](https://github.com/anestisb/radamsa-android)
1. [Honggfuzz](https://github.com/google/honggfuzz)
1. [An Android port of the Melkor ELF fuzzer](https://github.com/anestisb/melkor-android)
1. [Media Fuzzing Framework for Android](https://github.com/fuzzing/MFFA)
1. [AndroFuzz](https://github.com/jonmetz/AndroFuzz)
1. [QuarksLab's Android Fuzzing](https://github.com/quarkslab/android-fuzzing)
1. ~~[IntentFuzzer](https://www.nccgroup.trust/us/about-us/resources/intent-fuzzer/)~~

### Детекторы переупаковки приложений

1. [FSquaDRA](https://github.com/zyrikby/FSquaDRA) - инструмент для обнаружения переупакованных Android-приложений на основе сравнения хешей ресурсов приложения.

### Краулеры магазинов

1. [Google Play crawler (Java)](https://github.com/Akdeniz/google-play-crawler)
1. [Google Play crawler (Python)](https://github.com/egirault/googleplay-api)
1. [Google Play crawler (Node)](https://github.com/dweinstein/node-google-play) - получение деталей приложения и загрузка приложений из официального магазина Google Play.
1. [Aptoide downloader (Node)](https://github.com/dweinstein/node-aptoide) - загрузка приложений из стороннего магазина Android Aptoide
1. [Appland downloader (Node)](https://github.com/dweinstein/node-appland) - загрузка приложений из стороннего магазина Android Appland
1. [PlaystoreDownloader](https://github.com/ClaudiuGeorgiu/PlaystoreDownloader) - PlaystoreDownloader — это инструмент для загрузки Android-приложений напрямую из Google Play Store. После первоначальной (однократной) настройки приложения можно загружать, указав их имя пакета.
1. [APK Downloader](https://apkcombo.com/apk-downloader/) Онлайн-сервис для загрузки APK из Play Store для конкретной конфигурации устройства Android
1. ~~[Apkpure](https://apkpure.com/) - Онлайн-загрузчик apk. Также предоставляет собственное приложение для загрузки.~~

### Прочие инструменты

1. [smalihook](http://androidcracking.blogspot.com/2011/03/original-smalihook-java-source.html)
1. [AXMLPrinter2](http://code.google.com/p/android4me/downloads/detail?name=AXMLPrinter2.jar) - преобразует двоичные XML-файлы в удобочитаемые XML-файлы
1. [adb autocomplete](https://github.com/mbrubeck/android-completion)
1. [mitmproxy](https://github.com/mitmproxy/mitmproxy)
1. [dockerfile/androguard](https://github.com/dweinstein/dockerfile-androguard)
1. [Android Vulnerability Test Suite](https://github.com/AndroidVTS/android-vts) - android-vts сканирует устройство на наличие набора уязвимостей
1. [AppMon](https://github.com/dpnishant/appmon)- AppMon — это автоматизированный фреймворк для мониторинга и подмены системных вызовов API нативных приложений macOS, iOS и Android. Он основан на Frida.
1. [Internal Blue](https://github.com/seemoo-lab/internalblue) - Фреймворк экспериментов с Bluetooth, основанный на реверс-инжиниринге контроллеров Bluetooth Broadcom
1. [Android Mobile Device Hardening](https://github.com/SecTheTech/AMDH) - AMDH сканирует и усиливает настройки устройства и перечисляет вредоносные установленные приложения на основе разрешений.
1. [NullKia](https://github.com/bad-antics/nullkia) - Комплексный фреймворк мобильной безопасности с поддержкой 18 производителей, включающий эксплуатацию baseband, сотовую безопасность, исследования TEE/TrustZone и инструменты извлечения BootROM.
1. [Firmware Extractor](https://github.com/AndroidDumps/Firmware_extractor) - Извлекает заданный архив в образы
1. [ARMv7 payload that provides arbitrary code execution on MediaTek bootloaders](https://github.com/R0rt1z2/kaeru)
1. [DroidGround](https://github.com/SECFORCE/droidground) - Гибкая площадка для CTF-задач Android
1. [sundaysec/Android-Exploits](https://github.com/sundaysec/Android-Exploits) - Подборка эксплойтов и хаков Android
1. [Spectre](https://github.com/thomasbuilds/Spectre) - Сканер радиочастот с разведывательными и наступательными возможностями. Отслеживает сотовую связь, Wi-Fi, Bluetooth LE и GNSS на устройстве, имеет инспектор BLE GATT, вещатель iBeacon и обнаружение локальной сети.
1. ~~[Android Device Security Database](https://www.android-device-security.org/client/datatable) - База данных функций безопасности устройств Android~~
1. ~~[Opcodes table for quick reference](http://ww38.xchg.info/corkami/opcodes_tables.pdf)~~
1. ~~[APK-Downloader](http://codekiem.com/2012/02/24/apk-downloader/)~~ - кажется, теперь мёртв
1. ~~[Dalvik opcodes](http://pallergabor.uw.hu/androidblog/dalvik_opcodes.html)~~

### Уязвимые приложения для практики

1. [Damn Insecure Vulnerable Application (DIVA)](https://github.com/payatu/diva-android)
1. [Vuldroid](https://github.com/jaiswalakshansh/Vuldroid)
1. [ExploitMe Android Labs](http://securitycompass.github.io/AndroidLabs/setup.html)
1. [GoatDroid](https://github.com/jackMannino/OWASP-GoatDroid-Project)
1. [Android InsecureBank](https://github.com/dineshshetty/Android-InsecureBankv2)
1. [Insecureshop](https://github.com/optiv/insecureshop)
1. [Oversecured Vulnerable Android App (OVAA)](https://github.com/oversecured/ovaa)
1. [Injured Android - CTF](https://github.com/B3nac/InjuredAndroid)
1. [Damn Vulnerable Mobile App (DVMA)](https://github.com/cpeoples/dvma)

## Академические/Исследования/Публикации/Книги

### Исследовательские статьи

1. [Exploit Database](https://www.exploit-db.com/papers/)
1. [Android security-related presentations](https://github.com/jacobsoo/AndroidSlides)
1. [A good collection of static analysis papers](https://tthtlc.wordpress.com/2011/09/01/static-analysis-of-android-applications/)

### Книги

1. [SEI CERT Android Secure Coding Standard](https://wiki.sei.cmu.edu/confluence/display/android/Android+Secure+Coding+Standard)

### Прочее

1. [OWASP Mobile Security Testing Guide Manual](https://github.com/OWASP/owasp-mstg)
1. [doridori/Android-Security-Reference](https://github.com/doridori/Android-Security-Reference)
1. [android app security checklist](https://github.com/b-mueller/android_app_security_checklist)
1. [Mobile App Pentest Cheat Sheet](https://github.com/tanprathan/MobileApp-Pentest-Cheatsheet)
1. [Android Reverse Engineering 101 by Daniele Altomare (Web Archive link)](https://web.archive.org/web/20180721134044/http://www.fasteque.com:80/android-reverse-engineering-101-part-1/)
1. ~~[Mobile Security Reading Room](https://mobile-security.zeef.com) - Читальный зал, содержащий хорошо категоризированные технические материалы о мобильном пентесте, мобильном вредоносном ПО, мобильной криминалистике и всяческих темах, связанных с мобильной безопасностью~~

## Эксплойты/Уязвимости/Баги

### Список

1. [Android Security Bulletins](https://source.android.com/security/bulletin/)
1. [Android's reported security vulnerabilities](https://www.cvedetails.com/vulnerability-list/vendor_id-1224/product_id-19997/Google-Android.html)
1. [OWASP Mobile Top 10 2016](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10)
1. [Exploit Database](https://www.exploit-db.com/search/?action=search&q=android) - нажмите поиск
1. [Vulnerability Google Doc](https://docs.google.com/spreadsheet/pub?key=0Am5hHW4ATym7dGhFU1A4X2lqbUJtRm1QSWNRc3E0UlE&single=true&gid=0&output=html)
1. [Google Android Security Team’s Classifications for Potentially Harmful Applications (Malware)](https://source.android.com/security/reports/Google_Android_Security_PHA_classifications.pdf)
1. ~~[Android Devices Security Patch Status](https://kb.androidtamer.com/Device_Security_Patch_tracker/)~~

### Вредоносное ПО

1. [androguard - Database Android Malware wiki](https://code.google.com/p/androguard/wiki/DatabaseAndroidMalwares)
1. [Android Malware GitHub repo](https://github.com/ashishb/android-malware)
1. [Android Malware Genome Project](http://www.malgenomeproject.org/) - содержит 1260 образцов вредоносного ПО, разделённых на 49 различных семейств вредоносов, бесплатно для исследовательских целей.
1. [Contagio Mobile Malware Mini Dump](http://contagiominidump.blogspot.com)
1. [Drebin](https://www.sec.tu-bs.de/~danarp/drebin/)
1. [Hudson Rock](https://www.hudsonrock.com/threat-intelligence-cybercrime-tools) - Бесплатный набор инструментов разведки киберпреступности, который может указать, был ли конкретный APK-пакет скомпрометирован при атаке вредоносного ПО Infostealer.
1. [Kharon Malware Dataset](http://kharon.gforge.inria.fr/dataset/) - 7 вредоносов, которые были подвергнуты реверс-инжинирингу и задокументированы
1. [Android Adware and General Malware Dataset](https://www.unb.ca/cic/datasets/android-adware.html)
1. [AndroZoo](https://androzoo.uni.lu/) - AndroZoo — это растущая подборка Android-приложений из нескольких источников, включая официальный магазин приложений Google Play.
1. ~~[Android PRAGuard Dataset](http://pralab.diee.unica.it/en/AndroidPRAGuardDataset) - Набор данных содержит 10479 образцов, полученных путём обфускации наборов данных MalGenome и Contagio Minidump семью различными методами обфускации.~~
1. ~~[Admire](http://admire.necst.it/)~~

### Программы вознаграждений

1. [Android Security Reward Program](https://www.google.com/about/appsecurity/android-rewards/)

### Как сообщать о проблемах безопасности

1. [Android - reporting security issues](https://source.android.com/security/overview/updates-resources.html#report-issues)
1. [Android Reports and Resources](https://github.com/B3nac/Android-Reports-and-Resources) - Список раскрытых отчётов Android Hackerone и других ресурсов

## Участие

Ваши дополнения всегда приветствуются!

## 📖 Цитирование

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

Этот репозиторий цитируется в [более чем 10 статьях](https://scholar.google.com/scholar?q=github.com%2Fashishb%2Fandroid-security-awesome)
