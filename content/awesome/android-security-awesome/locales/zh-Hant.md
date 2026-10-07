# Android Security Awesome ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)

[![Star History Rank](https://api.star-history.com/badge?repo=ashishb/android-security-awesome&theme=dark)](https://www.star-history.com/ashishb/android-security-awesome)

[![Link Liveness Checker](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml)

[![Lint Shell scripts](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml)
[![Lint Markdown](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml)
[![Lint YAML](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml)
[![Lint GitHub Actions](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml)
![GitHub contributors](https://img.shields.io/github/contributors/ashishb/android-security-awesome)

一份 Android 安全相關資源的合集。

如果您覺得本專案有用，請考慮[支援它](./sponsors.md)。

1. [工具](#tools)
1. [學術/研究/出版物/書籍](#academicresearchpublicationsbooks)
1. [漏洞利用/漏洞/缺陷](#exploitsvulnerabilitiesbugs)

## 工具

### 線上分析器

1. [Appknox](https://www.appknox.com/) - 非免費
1. [Virustotal](https://www.virustotal.com/)
1. [NowSecure Lab Automated](https://www.nowsecure.com/blog/2016/09/19/announcing-nowsecure-lab-automated/) - 專為 Android 與 iOS 行動應用程式打造的企業級行動應用安全測試工具。Lab Automated 可在雲端真實裝置上執行動態與靜態分析，並在數分鐘內回傳結果。非免費
1. [App Detonator](https://appdetonator.run/) - 引爆 APK 二進位檔案以提供原始碼層級的詳細資訊，包含應用作者、簽章、建置與清單資訊。每天免費額度 3 次分析。
1. [Pithus](https://beta.pithus.org/) - 開源 APK 分析器。目前仍處於 Beta 階段，且暫時僅支援靜態分析。可以使用 YARA 規則來搜尋惡意軟體。更多[資訊](https://beta.pithus.org/about/)。
1. [Oversecured](https://oversecured.com/) - 專為 Android 與 iOS 應用程式打造的企業級漏洞掃描器；它讓應用擁有者與開發者能夠透過將 Oversecured 整合進開發流程，來保護行動應用程式的每個新版本。非免費。
1. [AppSweep by Guardsquare](https://appsweep.guardsquare.com/) - 專為開發者打造的免費、快速的 Android 應用程式安全測試
1. [Koodous](https://koodous.com) - 在龐大的 Android 樣本倉庫上執行靜態/動態惡意軟體分析，並依據公開與私有的 Yara 規則進行比對。
1. [Immuniweb](https://www.immuniweb.com/mobile/)。提供「OWASP 行動端 Top 10 測試」、「行動應用隱私檢查」以及應用權限測試。免費層級為每天 4 次測試，註冊後會提供報告
1. [ANY.RUN](https://app.any.run/) - 支援 Android 應用分析的交互式雲端惡意軟體分析平台。提供有限的免費方案。
1. ~~[BitBaan](https://malab.bitbaan.com/)~~
1. ~~[AVC UnDroid](http://undroid.av-comparatives.info/)~~
1. ~~[AMAaaS](https://amaaas.com) - 免費的 Android 惡意軟體分析服務。一項裸金屬服務，提供 Android 應用程式的靜態與動態分析。由 [MalwarePot](https://malwarepot.com/index.php/AMAaaS) 出品~~。
1. ~~[AppCritique](https://appcritique.boozallen.com) - 上傳您的 Android APK 並取得全面的免費安全評估~~
1. ~~[NVISO ApkScan](https://apkscan.nviso.be/) - 將於 2019 年 10 月 31 日停止維護~~
1. ~~[Mobile Malware Sandbox](http://www.mobilemalware.com.br/analysis/index_en.php)~~
1. ~~[IBM Security AppScan Mobile Analyzer](https://appscan.bluemix.net/mobileAnalyzer) - 非免費~~
1. ~~[Visual Threat](https://www.visualthreat.com/) - 不再是 Android 應用分析器~~
1. ~~[Tracedroid](http://tracedroid.few.vu.nl/)~~
1. ~~[habo](https://habo.qq.com/) - 10 次/天~~
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
1. ~~[Fireeye](https://fireeye.ijinshan.com/)- 最大 60MB，15 次/天~~
1. ~~[approver](https://approver.talos-sec.com/) - Approver 是一個完全自動化的 Android 與 iOS 應用程式安全分析與風險評估平台。非免費。~~
1. ~~[Fraunhofer App-ray](http://app-ray.co/) - 網域已過期~~
1. ~~[AndroTotal](http://andrototal.org/) - 已失效~~

### 靜態分析工具

1. [Androwarn](https://github.com/maaaaz/androwarn/) - 偵測並提醒使用者注意 Android 應用程式可能存在的惡意行為。
1. [ApkAnalyser](https://github.com/sonyxperiadev/ApkAnalyser)
1. [APKInspector](https://github.com/honeynet/apkinspector/)
1. [Droid Intent Data Flow Analysis for Information Leakage](https://insights.sei.cmu.edu/library/didfail/)
1. [DroidLegacy](https://bitbucket.org/srl/droidlegacy)
1. [FlowDroid](https://blogs.uni-paderborn.de/sse/tools/flowdroid/)
1. [Android Decompiler](https://www.pnfsoftware.com/) – 非免費
1. [PSCout](https://security.csl.toronto.edu/pscout/) - 一個利用靜態分析從 Android 作業系統原始碼中抽取權限規範的工具
1. [Amandroid](http://amandroid.sireum.org/)
1. [SmaliSCA](https://github.com/dorneanu/smalisca) - Smali 靜態程式碼分析
1. [CFGScanDroid](https://github.com/douggard/CFGScanDroid) - 將 CFG 與惡意應用程式的 CFG 進行掃描與比對
1. [Madrolyzer](https://github.com/maldroid/maldrolyzer) - 萃取 C&C、電話號碼等可操作資料。
1. [ConDroid](https://github.com/JulianSchuette/ConDroid) - 對應用程式執行符號執行與具體執行相結合的分析
1. [DroidRA](https://github.com/serval-snt-uni-lu/DroidRA)
1. [RiskInDroid](https://github.com/ClaudiuGeorgiu/RiskInDroid) - 一個基於應用程式權限計算 Android 應用程式風險的工具，提供線上示範。
1. [SUPER](https://github.com/SUPERAndroidAnalyzer/super) - 安全、統一、強大且可擴充的 Rust Android 分析器
1. [ClassyShark](https://github.com/google/android-classyshark) - 一個獨立的二進位檢查工具，可瀏覽任意 Android 可執行檔並顯示重要資訊。
1. [StaCoAn](https://github.com/vincentcox/StaCoAn) - 一個跨平台工具，協助開發者、漏洞獎金獵人與道德駭客對行動應用程式執行靜態程式碼分析。該工具在打造時非常注重可用性以及使用者介面中的圖形化引導。
1. [JAADAS](https://github.com/flankerhqd/JAADAS) - 基於 Soot 與 Scala 建構的、用於發掘 Android 應用程式漏洞的聯合程序內與程序間程式分析工具
1. [Quark-Engine](https://github.com/quark-engine/quark-engine) - 一個忽略混淆的 Android 惡意軟體評分系統
1. [One Step Decompiler](https://github.com/b-mueller/apkx) - 為懶人準備的 Android APK 反編譯
1. [APKLeaks](https://github.com/dwisiswant0/apkleaks) - 掃描 APK 檔案中的 URI、端點與密鑰。
1. [Mobile Audit](https://github.com/mpast/mobileAudit) - 用於對 Android APK 執行靜態分析並偵測惡意軟體的 Web 應用程式。
1. [Detekt](https://github.com/detekt/detekt) - 針對 Kotlin 的靜態程式碼分析
1. [APKdevastate](https://github.com/rafigk2v9c/APKdevastate/) - 用於分析由 RAT 建立的 APK 載荷的進階分析軟體。
1. ~~[Smali CFG generator](https://github.com/EugenioDelfa/Smali-CFGs)~~
1. ~~[Several tools from PSU](http://siis.cse.psu.edu/tools.html)~~
1. ~~[SPARTA](https://www.cs.washington.edu/sparta) - 驗證（證明）某個應用程式滿足資訊流安全策略；基於 [Checker Framework](https://types.cs.washington.edu/checker-framework/)~~

### 應用程式漏洞掃描器

1. [QARK](https://github.com/linkedin/qark/) - LinkedIn 出品的 QARK 供應用程式開發者掃描應用程式中的安全問題
1. [AndroBugs](https://github.com/AndroBugs/AndroBugs_Framework)
1. [Nogotofail](https://github.com/google/nogotofail)
1. [Ostorlab](https://ostorlab.co) - Ostorlab 的免費版本可掃描 Android Play 商店、iOS App Store 與華為 AppGallery 中的應用程式
1. ~~[Devknox](https://devknox.io/) - 用於建構安全 Android 應用程式的 IDE 外掛。已不再維護。~~

### 動態分析工具

1. [Android DBI framework](http://www.mulliner.org/blog/blosxom.cgi/security/androiddbiv02.html)
1. [Androl4b](https://github.com/sh4hin/Androl4b)- 一個用於評估 Android 應用程式、逆向工程與惡意軟體分析的虛擬機器
1. [House](https://github.com/nccgroup/house)- House：一個由 Frida 驅動、使用 Python 編寫、帶有 Web GUI 的執行期行動應用分析工具包。
1. [Mobile-Security-Framework MobSF](https://github.com/MobSF/Mobile-Security-Framework-MobSF) - 行動安全框架是一個智慧、一體化的開源行動應用程式（Android/iOS）自動化滲透測試框架，能夠執行靜態、動態分析與 Web API 測試。
1. [Droidbox](https://github.com/pjlantz/droidbox)
1. [Drozer](https://github.com/mwrlabs/drozer)
1. [Xposed](https://forum.xda-developers.com/xposed/xposed-installer-versions-changelog-t2714053) - 等同於進行基於樁（Stub）的程式碼注入，但無需對二進位檔做任何修改
1. [Inspeckage](https://github.com/ac-pm/Inspeckage) - Android 套件檢查器 - 帶有 API 鉤子的動態分析、啟動未匯出的活動等等。（Xposed 模組）
1. [Android Hooker](https://github.com/AndroidHooker/hooker) - 動態 Java 程式碼插樁（需要 Substrate 框架）
1. [ProbeDroid](https://github.com/ZSShen/ProbeDroid) - 動態 Java 程式碼插樁
1. [DECAF](https://github.com/sycurelab/DECAF) - 基於 QEMU 的動態可執行程式碼分析框架（DroidScope 現已成為 DECAF 的一個擴充）
1. [CuckooDroid](https://github.com/idanr1986/cuckoo-droid) - 針對 Cuckoo 沙箱的 Android 擴充
1. [Mem](https://github.com/MobileForensicsResearch/mem) - Android 的記憶體分析（需要 root）
1. [Crowdroid](http://www.ida.liu.se/labs/rtslab/publications/2011/spsm11-burguera.pdf) – 無法找到實際的工具
1. [AuditdAndroid](https://github.com/nwhusted/AuditdAndroid) – auditd 的 Android 移植版，已不再活躍開發
1. [Android Security Evaluation Framework](https://code.google.com/p/asef/) - 已不再活躍開發
1. [Aurasium](https://github.com/xurubin/aurasium) – 透過位元組碼重寫與就地參照監控，為 Android 應用程式提供實用的安全策略強制執行。
1. [Android Linux Kernel modules](https://github.com/strazzere/android-lkms)
1. [StaDynA](https://github.com/zyrikby/StaDynA) - 一個在存在動態程式碼更新特性（動態類別載入與反射）的情況下支援安全應用分析的系统。該工具結合 Android 應用程式的靜態與動態分析，以揭示隱藏/已更新的行為，並用這些資訊擴充靜態分析結果。
1. [DroidAnalytics](https://github.com/zhengmin1989/DroidAnalytics) - 不完整
1. [Vezir Project](https://github.com/oguzhantopgul/Vezir-Project) - 用於行動應用程式滲透測試與行動惡意軟體分析的虛擬機器
1. [MARA](https://github.com/xtiankisutsa/MARA_Framework) - 行動應用程式逆向工程與分析框架
1. [Taintdroid](http://appanalysis.org) - 需要編譯 AOSP
1. [ARTist](https://artist.cispa.saarland) - 一個靈活的开源插樁與混合分析框架，面向 Android 應用程式以及 Android 的 Java 中介層。它基於 Android 執行期（ART）編譯器，並在裝置端編譯期間修改程式碼。
1. [Android Malware Sandbox](https://github.com/Areizen/Android-Malware-Sandbox)
1. [AndroPyTool](https://github.com/alexMyG/AndroPyTool) - 一個從 Android APK 中萃取靜態與動態特徵的工具。它結合了 DroidBox、FlowDroid、Strace、AndroGuard 與 VirusTotal 分析等多種知名的 Android 應用分析工具。
1. [Runtime Mobile Security (RMS)](https://github.com/m0bilesecurity/RMS-Runtime-Mobile-Security) - 是一個強大的 Web 介面，可協助您在執行期操控 Android 與 iOS 應用程式
1. [PAPIMonitor](https://github.com/Dado1513/PAPIMonitor) – PAPIMonitor（Android 應用 Python API 監視器）是一個基於 Frida 的 Python 工具，用於在應用程式執行時監視使用者選擇的 API。
1. [Android_application_analyzer](https://github.com/NotSoSecure/android_application_analyzer) - 該工具用於分析 Android 應用程式在本地儲存中的內容。
1. [Decompiler.com](https://www.decompiler.com/) - 線上 APK 與 Java 反編譯器
1. [friTap](https://github.com/fkie-cad/friTap)- 使用 Frida 攔截 SSL/TLS 連線；允許在 Android 上即時萃取 TLS 金鑰並將 TLS 負載解密為 PCAP。
1. [HacknDroid](https://github.com/RaffaDNDM/HacknDroid) - 一個旨在自動化各種行動應用程式滲透測試（MAPT）任務並方便與 Android 裝置互動的工具。
1. [adbsploit](https://github.com/mesquidar/adbsploit) - 透過 ADB 利用裝置的工具
1. [Brida](https://github.com/federicodotta/Brida) - 一個 Burp Suite 擴充，作為 Burp 與 Frida 之間的橋樑，讓您可以呼叫並操控應用程式自身的方法，同時竄改應用程式與其後端服務/伺服器之間交換的流量。
1. [MPT](https://github.com/ByteSnipers/mobile-pentest-toolkit) - MPT（Mobile Pentest Toolkit，行動滲透測試工具包）是您 Android 滲透測試工作流中必不可少的解决方案。該工具可協助您自動化安全任務。
1. [Andriller](https://github.com/den4uk/andriller) - 一個包含智慧型手機取證工具集的軟體工具。它對 Android 裝置執行唯讀、取證可靠、非破壞性的資料獲取。
1. [Mira](https://github.com/vwww-droid/Mira) - 面向第三方 Android 與 iOS 應用程式的執行期保護分析平台，利用 AI 呼叫宿主應用端的 shell、Java、Native 與 Frida 能力進行環境風險偵測與加固驗證。
1. [FlutterTap](https://github.com/script-or-script/FlutterTap) - 一個 Zygisk 模組，可在 `libflutter.so` 內部绕过 BoringSSL 憑證驗證，並將所選 Flutter 應用程式的流量重新導向到代理。它在重新開機後依然持久生效，因此無需 Frida 工作階段、無需傳輸線、也無需監聽埠。
1. [Mobix](https://github.com/blackfoxxx/Mobix) - 經授權的 Android 滲透測試實驗室：Frida SSL 固定/root 偵測绕过鏈、帶自動 IDOR 標記的 mitmproxy 流量擷取、一個 Web 儀表板，以及一個包含 36 個工具的 MCP 伺服器，使得 Claude Code 智能體可以自行執行從掃描到發現漏洞的完整循環。
1. ~~[AppUse](https://appsec-labs.com/AppUse/) – 為滲透測試定制的建置~~
1. ~~[Appie](https://manifestsecurity.com/appie/) - Appie 是一個預先配置好、可充當 Android 滲透測試環境的軟體包。它完全可移植，可以裝在 U 碟或智慧型手機上。這是滿足 Android 應用程式安全評估所需全部工具的一站式方案，也是現有虛擬機器的絕佳替代品。~~
1. ~~[Android Tamer](https://androidtamer.com/) - 面向 Android 安全專家的虛擬/ Live 平台~~
1. ~~[Android Malware Analysis Toolkit](http://www.mobilemalware.com.br/amat/download.html) - （Linux 發行版）此前它曾是一個 [線上分析器](http://dunkelheit.com.br/amat/analysis/index_en.php)~~
1. ~~[Android Reverse Engineering](https://redmine.honeynet.org/projects/are/wiki) – ARE（Android 逆向工程）已不再活躍開發~~
1. ~~[ViaLab Community Edition](https://www.nowsecure.com/blog/2014/09/09/introducing-vialab-community-edition/)~~
1. ~~[Mercury](https://labs.mwrinfosecurity.com/tools/2012/03/16/mercury/)~~
1. ~~[Cobradroid](https://thecobraden.com/projects/cobradroid/) – 用於惡意軟體分析的定制映像~~

### 逆向工程

1. [Smali/Baksmali](https://github.com/JesusFreke/smali) – apk 反編譯
1. [emacs syntax coloring for smali files](https://github.com/strazzere/Emacs-Smali)
1. [vim syntax coloring for smali files](http://codetastrophe.com/smali.vim)
1. [AndBug](https://github.com/swdunlop/AndBug)
1. [Androguard](https://github.com/androguard/androguard) – 功能強大，與其他工具整合良好
1. [Apktool](https://github.com/iBotPeaches/Apktool) – 在編譯/反編譯方面非常實用（使用 smali）
1. [Android Framework for Exploitation](https://github.com/appknox/AFE)
1. [Bypass signature and permission checks for IPCs](https://github.com/iSECPartners/Android-KillPermAndSigChecks)
1. [Android OpenDebug](https://github.com/iSECPartners/Android-OpenDebug) – 借助 Cydia Substrate 使裝置上的任意應用可除錯。
1. [Dex2Jar](https://github.com/pxb1988/dex2jar) - dex 轉 jar 轉換器
1. [Enjarify](https://github.com/google/enjarify) - 來自 Google 的 dex 轉 jar 轉換器
1. [Dedexer](https://sourceforge.net/projects/dedexer/)
1. [Fino](https://github.com/sysdream/fino)
1. [Frida](https://www.frida.re/) - 注入 JavaScript 來探索應用程式，並提供了一個 [GUI 工具](https://github.com/antojoseph/diff-gui)
1. [Indroid](https://bitbucket.org/aseemjakhar/indroid) – 執行緒注入套件
1. [Introspy](https://github.com/iSECPartners/Introspy-Android)
1. [Jad]( https://varaneckas.com/jad/) - Java 反編譯器
1. [JD-GUI](https://github.com/java-decompiler/jd-gui) - Java 反編譯器
1. [CFR](http://www.benf.org/other/cfr/) - Java 反編譯器
1. [Krakatau](https://github.com/Storyyeller/Krakatau) - Java 反編譯器
1. [FernFlower](https://github.com/fesh0r/fernflower) - Java 反編譯器
1. [Redexer](https://github.com/plum-umd/redexer) – apk 操作
1. [Simplify Android deobfuscator](https://github.com/CalebFenton/simplify)
1. [Bytecode viewer](https://github.com/Konloch/bytecode-viewer)
1. [Radare2](https://github.com/radare/radare2)
1. [Jadx](https://github.com/skylot/jadx)
1. [Dwarf](https://github.com/iGio90/Dwarf) - 用於逆向工程的 GUI
1. [Andromeda](https://github.com/secrary/Andromeda) - 另一個基礎的命令列逆向工程工具
1. [apk-mitm](https://github.com/shroudedcode/apk-mitm) - 一個為 HTTPS 檢查準備 Android APK 檔案的 CLI 應用程式
1. [Noia](https://github.com/0x742/noia) - 簡單的 Android 應用沙箱檔案瀏覽器工具
1. [Obfuscapk](https://github.com/ClaudiuGeorgiu/Obfuscapk) — Obfuscapk 是一個模組化的 Python 工具，無需原始碼即可對 Android 應用程式進行混淆。
1. [ARMANDroid](https://github.com/Mobile-IoT-Security-Lab/ARMANDroid) - ARMAND（基於原生偵測的多模式防重打包、防篡改）是一種新穎的防篡改保護方案，無需原始碼即可將邏輯炸彈與防篡改（AT）偵測節點直接嵌入 apk 檔案。
1. [MVT (Mobile Verification Toolkit)](https://github.com/mvt-project/mvt) - 一組用於簡化並自動化收集有助於識別 Android 與 iOS 裝置潛在入侵取證的工具集
1. [Dexmod](https://github.com/google/dexmod) - 一個用於在 DEX（Dalvik 可執行）檔案中修補 Dalvik 位元組碼並輔助 Android 應用程式靜態分析的工具。
1. [odex-patcher](https://github.com/giacomoferretti/odex-patcher) - 透過修補 OAT 檔案來執行任意程式碼
1. [PhoneSploit-Pro](https://github.com/AzeemIdrisi/PhoneSploit-Pro) - 一個一體化的駭客工具，利用 ADB 與 Metasploit 框架遠端利用 Android 裝置以取得 Meterpreter 工作階段。
1. [APKLab](https://github.com/APKLab/APKLab) - 用於分析 APK 的 VS Code 外掛
1. ~~[IntentSniffer](https://www.nccgroup.com/us/our-research/intent-sniffer/)~~
1. ~~[Procyon](https://bitbucket.org/mstrobel/procyon/wiki/Java%20Decompiler) - Java 反編譯器~~
1. ~~[Smali viewer](http://blog.avlyun.com/wp-content/uploads/2014/04/SmaliViewer.zip)~~
1. ~~[ZjDroid](https://github.com/BaiduSecurityLabs/ZjDroid)~~, ~~[fork/mirror](https://github.com/yangbean9/ZjDroid)~~
1. ~~[Dare](http://siis.cse.psu.edu/dare/index.html) – .dex 轉 .class 轉換器~~

### 模糊測試

1. [Radamsa Fuzzer](https://github.com/anestisb/radamsa-android)
1. [Honggfuzz](https://github.com/google/honggfuzz)
1. [An Android port of the Melkor ELF fuzzer](https://github.com/anestisb/melkor-android)
1. [Media Fuzzing Framework for Android](https://github.com/fuzzing/MFFA)
1. [AndroFuzz](https://github.com/jonmetz/AndroFuzz)
1. [QuarksLab's Android Fuzzing](https://github.com/quarkslab/android-fuzzing)
1. ~~[IntentFuzzer](https://www.nccgroup.trust/us/about-us/resources/intent-fuzzer/)~~

### 應用程式重打包偵測器

1. [FSquaDRA](https://github.com/zyrikby/FSquaDRA) - 一個基於應用程式資源雜湊比對來偵測重打包 Android 應用程式的工具。

### 市場爬蟲

1. [Google Play crawler (Java)](https://github.com/Akdeniz/google-play-crawler)
1. [Google Play crawler (Python)](https://github.com/egirault/googleplay-api)
1. [Google Play crawler (Node)](https://github.com/dweinstein/node-google-play) - 從官方 Google Play 商店取得應用程式詳情並下載應用程式。
1. [Aptoide downloader (Node)](https://github.com/dweinstein/node-aptoide) - 從 Aptoide 第三方 Android 市場下載應用程式
1. [Appland downloader (Node)](https://github.com/dweinstein/node-appland) - 從 Appland 第三方 Android 市場下載應用程式
1. [PlaystoreDownloader](https://github.com/ClaudiuGeorgiu/PlaystoreDownloader) - PlaystoreDownloader 是一個直接從 Google Play 商店下載 Android 應用程式的工具。經過初次（一次性）設定後，只需指定套件名稱即可下載應用程式。
1. [APK Downloader](https://apkcombo.com/apk-downloader/) 用於為特定 Android 裝置配置從 Play 商店下載 APK 的線上服務
1. ~~[Apkpure](https://apkpure.com/) - 線上 apk 下載器。同時提供自家的下載應用程式。~~

### 雜項工具

1. [smalihook](http://androidcracking.blogspot.com/2011/03/original-smalihook-java-source.html)
1. [AXMLPrinter2](http://code.google.com/p/android4me/downloads/detail?name=AXMLPrinter2.jar) - 將二進位 XML 檔案轉換為可讀的 XML 檔案
1. [adb autocomplete](https://github.com/mbrubeck/android-completion)
1. [mitmproxy](https://github.com/mitmproxy/mitmproxy)
1. [dockerfile/androguard](https://github.com/dweinstein/dockerfile-androguard)
1. [Android Vulnerability Test Suite](https://github.com/AndroidVTS/android-vts) - android-vts 掃描裝置是否存在一組漏洞
1. [AppMon](https://github.com/dpnishant/appmon)- AppMon 是一個用於監視和竄改原生 macOS、iOS 與 Android 應用程式系統 API 呼叫的自動化框架。它基於 Frida。
1. [Internal Blue](https://github.com/seemoo-lab/internalblue) - 基於對 Broadcom 藍牙控制器逆向工程的藍牙實驗框架
1. [Android Mobile Device Hardening](https://github.com/SecTheTech/AMDH) - AMDH 會掃描並加固裝置的設定，並根據權限列出有害的已安裝應用程式。
1. [NullKia](https://github.com/bad-antics/nullkia) - 一個全面的行動安全框架，支援 18 家製造商，具備基頻利用、蜂巢式安全、TEE/TrustZone 研究與 BootROM 萃取工具。
1. [Firmware Extractor](https://github.com/AndroidDumps/Firmware_extractor) - 將給定歸檔萃取為映像
1. [ARMv7 payload that provides arbitrary code execution on MediaTek bootloaders](https://github.com/R0rt1z2/kaeru)
1. [DroidGround](https://github.com/SECFORCE/droidground) - 一個用於 Android CTF 挑戰的靈活練習場
1. [sundaysec/Android-Exploits](https://github.com/sundaysec/Android-Exploits) - 一個 Android 漏洞利用與駭客技巧的合集
1. [Spectre](https://github.com/thomasbuilds/Spectre) - 具備偵察與進攻能力的射頻掃描器。在裝置上監視蜂巢式、Wi-Fi、藍牙 LE 與 GNSS，並帶有 BLE GATT 檢查器、iBeacon 廣播器與本地網路發現功能。
1. ~~[Android Device Security Database](https://www.android-device-security.org/client/datatable) - Android 裝置安全特性資料庫~~
1. ~~[Opcodes table for quick reference](http://ww38.xchg.info/corkami/opcodes_tables.pdf)~~
1. ~~[APK-Downloader](http://codekiem.com/2012/02/24/apk-downloader/)~~ - 現在似乎已失效
1. ~~[Dalvik opcodes](http://pallergabor.uw.hu/androidblog/dalvik_opcodes.html)~~

### 用於練習的漏洞應用程式

1. [Damn Insecure Vulnerable Application (DIVA)](https://github.com/payatu/diva-android)
1. [Vuldroid](https://github.com/jaiswalakshansh/Vuldroid)
1. [ExploitMe Android Labs](http://securitycompass.github.io/AndroidLabs/setup.html)
1. [GoatDroid](https://github.com/jackMannino/OWASP-GoatDroid-Project)
1. [Android InsecureBank](https://github.com/dineshshetty/Android-InsecureBankv2)
1. [Insecureshop](https://github.com/optiv/insecureshop)
1. [Oversecured Vulnerable Android App (OVAA)](https://github.com/oversecured/ovaa)
1. [Injured Android - CTF](https://github.com/B3nac/InjuredAndroid)
1. [Damn Vulnerable Mobile App (DVMA)](https://github.com/cpeoples/dvma)

## 學術/研究/出版物/書籍

### 研究論文

1. [Exploit Database](https://www.exploit-db.com/papers/)
1. [Android security-related presentations](https://github.com/jacobsoo/AndroidSlides)
1. [A good collection of static analysis papers](https://tthtlc.wordpress.com/2011/09/01/static-analysis-of-android-applications/)

### 書籍

1. [SEI CERT Android Secure Coding Standard](https://wiki.sei.cmu.edu/confluence/display/android/Android+Secure+Coding+Standard)

### 其他

1. [OWASP Mobile Security Testing Guide Manual](https://github.com/OWASP/owasp-mstg)
1. [doridori/Android-Security-Reference](https://github.com/doridori/Android-Security-Reference)
1. [android app security checklist](https://github.com/b-mueller/android_app_security_checklist)
1. [Mobile App Pentest Cheat Sheet](https://github.com/tanprathan/MobileApp-Pentest-Cheatsheet)
1. [Android Reverse Engineering 101 by Daniele Altomare (Web Archive link)](https://web.archive.org/web/20180721134044/http://www.fasteque.com:80/android-reverse-engineering-101-part-1/)
1. ~~[Mobile Security Reading Room](https://mobile-security.zeef.com) - 一個閱讀室，包含關於行動滲透測試、行動惡意軟體、行動取證以及各種行動安全相關主題的分類技術閱讀資料~~

## 漏洞利用/漏洞/缺陷

### 列表

1. [Android Security Bulletins](https://source.android.com/security/bulletin/)
1. [Android's reported security vulnerabilities](https://www.cvedetails.com/vulnerability-list/vendor_id-1224/product_id-19997/Google-Android.html)
1. [OWASP Mobile Top 10 2016](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10)
1. [Exploit Database](https://www.exploit-db.com/search/?action=search&q=android) - 點擊搜尋
1. [Vulnerability Google Doc](https://docs.google.com/spreadsheet/pub?key=0Am5hHW4ATym7dGhFU1A4X2lqbUJtRm1QSWNRc3E0UlE&single=true&gid=0&output=html)
1. [Google Android Security Team’s Classifications for Potentially Harmful Applications (Malware)](https://source.android.com/security/reports/Google_Android_Security_PHA_classifications.pdf)
1. ~~[Android Devices Security Patch Status](https://kb.androidtamer.com/Device_Security_Patch_tracker/)~~

### 惡意軟體

1. [androguard - Database Android Malware wiki](https://code.google.com/p/androguard/wiki/DatabaseAndroidMalwares)
1. [Android Malware GitHub repo](https://github.com/ashishb/android-malware)
1. [Android Malware Genome Project](http://www.malgenomeproject.org/) - 包含 1260 個惡意軟體樣本，分為 49 個不同的惡意軟體家族，供研究免費使用。
1. [Contagio Mobile Malware Mini Dump](http://contagiominidump.blogspot.com)
1. [Drebin](https://www.sec.tu-bs.de/~danarp/drebin/)
1. [Hudson Rock](https://www.hudsonrock.com/threat-intelligence-cybercrime-tools) - 一個免費的網路犯罪情報工具集，可指示某個特定的 APK 套件是否在資訊竊取惡意軟體攻擊中遭到入侵。
1. [Kharon Malware Dataset](http://kharon.gforge.inria.fr/dataset/) - 7 個已被逆向工程並記錄下來的惡意軟體
1. [Android Adware and General Malware Dataset](https://www.unb.ca/cic/datasets/android-adware.html)
1. [AndroZoo](https://androzoo.uni.lu/) - AndroZoo 是一個不斷成長的 Android 應用程式合集，來源包括官方 Google Play 應用程式市場等。
1. ~~[Android PRAGuard Dataset](http://pralab.diee.unica.it/en/AndroidPRAGuardDataset) - 該資料集包含 10479 個樣本，透過對 MalGenome 與 Contagio Minidump 資料集使用七種不同的混淆技術得到。~~
1. ~~[Admire](http://admire.necst.it/)~~

### 漏洞獎金計畫

1. [Android Security Reward Program](https://www.google.com/about/appsecurity/android-rewards/)

### 如何回報安全問題

1. [Android - reporting security issues](https://source.android.com/security/overview/updates-resources.html#report-issues)
1. [Android Reports and Resources](https://github.com/B3nac/Android-Reports-and-Resources) - 已揭露的 Android Hackerone 報告及其他資源的列表

## 貢獻

歡迎隨時貢獻您的力量！

## 📖 引用

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

本倉庫已在 [10+ 篇論文](https://scholar.google.com/scholar?q=github.com%2Fashishb%2Fandroid-security-awesome) 中被引用
