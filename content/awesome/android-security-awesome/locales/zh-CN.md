# Android Security Awesome ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)

[![Star History Rank](https://api.star-history.com/badge?repo=ashishb/android-security-awesome&theme=dark)](https://www.star-history.com/ashishb/android-security-awesome)

[![Link Liveness Checker](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml)

[![Lint Shell scripts](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml)
[![Lint Markdown](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml)
[![Lint YAML](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml)
[![Lint GitHub Actions](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml)
![GitHub contributors](https://img.shields.io/github/contributors/ashishb/android-security-awesome)

一份 Android 安全相关资源的合集。

如果您觉得本项目有用，请考虑[支持它](./sponsors.md)。

1. [工具](#tools)
1. [学术/研究/出版物/书籍](#academicresearchpublicationsbooks)
1. [漏洞利用/漏洞/缺陷](#exploitsvulnerabilitiesbugs)

## 工具

### 在线分析器

1. [Appknox](https://www.appknox.com/) - 非免费
1. [Virustotal](https://www.virustotal.com/)
1. [NowSecure Lab Automated](https://www.nowsecure.com/blog/2016/09/19/announcing-nowsecure-lab-automated/) - 面向 Android 与 iOS 移动应用的移动应用安全测试企业级工具。Lab Automated 可在云端真实设备上执行动态与静态分析，并在数分钟内返回结果。非免费
1. [App Detonator](https://appdetonator.run/) - 引爆 APK 二进制文件以提供源码级别的详细信息，包括应用作者、签名、构建和清单信息。每天免费配额 3 次分析。
1. [Pithus](https://beta.pithus.org/) - 开源的 APK 分析器。目前仍处于 Beta 阶段，且暂时仅支持静态分析。可以使用 YARA 规则来搜寻恶意软件。更多[信息](https://beta.pithus.org/about/)。
1. [Oversecured](https://oversecured.com/) - 面向 Android 与 iOS 应用的企业级漏洞扫描器；它使应用所有者与开发者能够通过将 Oversecured 集成到开发流程中，来保护移动应用的每个新版本。非免费。
1. [AppSweep by Guardsquare](https://appsweep.guardsquare.com/) - 面向开发者的免费、快速的 Android 应用安全测试
1. [Koodous](https://koodous.com) - 在海量 Android 样本仓库上执行静态/动态恶意软件分析，并根据公开与私有的 Yara 规则进行比对。
1. [Immuniweb](https://www.immuniweb.com/mobile/)。提供“OWASP 移动端 Top 10 测试”、“移动应用隐私检查”以及应用权限测试。免费层级为每天 4 次测试，注册后会提供报告
1. [ANY.RUN](https://app.any.run/) - 支持 Android 应用分析的交互式云端恶意软件分析平台。提供有限的免费方案。
1. ~~[BitBaan](https://malab.bitbaan.com/)~~
1. ~~[AVC UnDroid](http://undroid.av-comparatives.info/)~~
1. ~~[AMAaaS](https://amaaas.com) - 免费的 Android 恶意软件分析服务。一项裸金属服务，提供 Android 应用的静态与动态分析。由 [MalwarePot](https://malwarepot.com/index.php/AMAaaS) 出品~~。
1. ~~[AppCritique](https://appcritique.boozallen.com) - 上传你的 Android APK 并获取全面的免费安全评估~~
1. ~~[NVISO ApkScan](https://apkscan.nviso.be/) - 将于 2019 年 10 月 31 日停止维护~~
1. ~~[Mobile Malware Sandbox](http://www.mobilemalware.com.br/analysis/index_en.php)~~
1. ~~[IBM Security AppScan Mobile Analyzer](https://appscan.bluemix.net/mobileAnalyzer) - 非免费~~
1. ~~[Visual Threat](https://www.visualthreat.com/) - 不再是 Android 应用分析器~~
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
1. ~~[approver](https://approver.talos-sec.com/) - Approver 是一个完全自动化的 Android 与 iOS 应用安全分析与风险评估平台。非免费。~~
1. ~~[Fraunhofer App-ray](http://app-ray.co/) - 域名已过期~~
1. ~~[AndroTotal](http://andrototal.org/) - 已失效~~

### 静态分析工具

1. [Androwarn](https://github.com/maaaaz/androwarn/) - 检测并提醒用户注意 Android 应用可能存在的恶意行为。
1. [ApkAnalyser](https://github.com/sonyxperiadev/ApkAnalyser)
1. [APKInspector](https://github.com/honeynet/apkinspector/)
1. [Droid Intent Data Flow Analysis for Information Leakage](https://insights.sei.cmu.edu/library/didfail/)
1. [DroidLegacy](https://bitbucket.org/srl/droidlegacy)
1. [FlowDroid](https://blogs.uni-paderborn.de/sse/tools/flowdroid/)
1. [Android Decompiler](https://www.pnfsoftware.com/) – 非免费
1. [PSCout](https://security.csl.toronto.edu/pscout/) - 一个利用静态分析从 Android 操作系统源码中抽取权限规范的工具
1. [Amandroid](http://amandroid.sireum.org/)
1. [SmaliSCA](https://github.com/dorneanu/smalisca) - Smali 静态代码分析
1. [CFGScanDroid](https://github.com/douggard/CFGScanDroid) - 将 CFG 与恶意应用的 CFG 进行扫描与比对
1. [Madrolyzer](https://github.com/maldroid/maldrolyzer) - 提取 C&C、电话号码等可操作数据。
1. [ConDroid](https://github.com/JulianSchuette/ConDroid) - 对应用执行符号执行与具体执行相结合的分析
1. [DroidRA](https://github.com/serval-snt-uni-lu/DroidRA)
1. [RiskInDroid](https://github.com/ClaudiuGeorgiu/RiskInDroid) - 一个基于应用权限计算 Android 应用风险的工具，提供在线演示。
1. [SUPER](https://github.com/SUPERAndroidAnalyzer/super) - 安全、统一、强大且可扩展的 Rust Android 分析器
1. [ClassyShark](https://github.com/google/android-classyshark) - 一个独立的二进制检查工具，可浏览任意 Android 可执行文件并显示重要信息。
1. [StaCoAn](https://github.com/vincentcox/StaCoAn) - 一个跨平台工具，帮助开发者、漏洞赏金猎人和道德黑客对移动应用执行静态代码分析。该工具在创建时非常注重可用性和用户界面中的图形化引导。
1. [JAADAS](https://github.com/flankerhqd/JAADAS) - 基于 Soot 和 Scala 构建的、用于发现 Android 应用漏洞的联合过程内与过程间程序分析工具
1. [Quark-Engine](https://github.com/quark-engine/quark-engine) - 一个忽略混淆的 Android 恶意软件评分系统
1. [One Step Decompiler](https://github.com/b-mueller/apkx) - 为懒惰者准备的 Android APK 反编译
1. [APKLeaks](https://github.com/dwisiswant0/apkleaks) - 扫描 APK 文件中的 URI、端点与密钥。
1. [Mobile Audit](https://github.com/mpast/mobileAudit) - 用于对 Android APK 执行静态分析并检测恶意软件的 Web 应用。
1. [Detekt](https://github.com/detekt/detekt) - 针对 Kotlin 的静态代码分析
1. [APKdevastate](https://github.com/rafigk2v9c/APKdevastate/) - 用于分析由 RAT 创建的 APK 载荷的高级分析软件。
1. ~~[Smali CFG generator](https://github.com/EugenioDelfa/Smali-CFGs)~~
1. ~~[Several tools from PSU](http://siis.cse.psu.edu/tools.html)~~
1. ~~[SPARTA](https://www.cs.washington.edu/sparta) - 验证（证明）某个应用满足信息流安全策略；基于 [Checker Framework](https://types.cs.washington.edu/checker-framework/)~~

### 应用漏洞扫描器

1. [QARK](https://github.com/linkedin/qark/) - LinkedIn 出品的 QARK 供应用开发者扫描应用中的安全问题
1. [AndroBugs](https://github.com/AndroBugs/AndroBugs_Framework)
1. [Nogotofail](https://github.com/google/nogotofail)
1. [Ostorlab](https://ostorlab.co) - Ostorlab 的免费版本可扫描 Android Play 商店、iOS App Store 和华为 AppGallery 中的应用
1. ~~[Devknox](https://devknox.io/) - 用于构建安全 Android 应用的 IDE 插件。已不再维护。~~

### 动态分析工具

1. [Android DBI framework](http://www.mulliner.org/blog/blosxom.cgi/security/androiddbiv02.html)
1. [Androl4b](https://github.com/sh4hin/Androl4b)- 一个用于评估 Android 应用、逆向工程与恶意软件分析的虚拟机
1. [House](https://github.com/nccgroup/house)- House：一个由 Frida 驱动、使用 Python 编写、带有 Web GUI 的运行时移动应用分析工具包。
1. [Mobile-Security-Framework MobSF](https://github.com/MobSF/Mobile-Security-Framework-MobSF) - 移动安全框架是一个智能、一体化的开源移动应用（Android/iOS）自动化渗透测试框架，能够执行静态、动态分析和 Web API 测试。
1. [Droidbox](https://github.com/pjlantz/droidbox)
1. [Drozer](https://github.com/mwrlabs/drozer)
1. [Xposed](https://forum.xda-developers.com/xposed/xposed-installer-versions-changelog-t2714053) - 等同于进行基于桩（Stub）的代码注入，但无需对二进制文件做任何修改
1. [Inspeckage](https://github.com/ac-pm/Inspeckage) - Android 包检查器 - 带有 API 钩子的动态分析、启动未导出的活动等等。（Xposed 模块）
1. [Android Hooker](https://github.com/AndroidHooker/hooker) - 动态 Java 代码插桩（需要 Substrate 框架）
1. [ProbeDroid](https://github.com/ZSShen/ProbeDroid) - 动态 Java 代码插桩
1. [DECAF](https://github.com/sycurelab/DECAF) - 基于 QEMU 的动态可执行代码分析框架（DroidScope 现已成为 DECAF 的一个扩展）
1. [CuckooDroid](https://github.com/idanr1986/cuckoo-droid) - 针对 Cuckoo 沙箱的 Android 扩展
1. [Mem](https://github.com/MobileForensicsResearch/mem) - Android 的内存分析（需要 root）
1. [Crowdroid](http://www.ida.liu.se/labs/rtslab/publications/2011/spsm11-burguera.pdf) – 无法找到实际的工具
1. [AuditdAndroid](https://github.com/nwhusted/AuditdAndroid) – auditd 的 Android 移植版，已不再活跃开发
1. [Android Security Evaluation Framework](https://code.google.com/p/asef/) - 已不再活跃开发
1. [Aurasium](https://github.com/xurubin/aurasium) – 通过字节码重写和就地引用监控，为 Android 应用提供实用的安全策略强制执行。
1. [Android Linux Kernel modules](https://github.com/strazzere/android-lkms)
1. [StaDynA](https://github.com/zyrikby/StaDynA) - 一个在存在动态代码更新特性（动态类加载与反射）的情况下支持安全应用分析的系统。该工具结合 Android 应用的静态与动态分析，以揭示隐藏/已更新的行为，并用这些信息扩展静态分析结果。
1. [DroidAnalytics](https://github.com/zhengmin1989/DroidAnalytics) - 不完整
1. [Vezir Project](https://github.com/oguzhantopgul/Vezir-Project) - 用于移动应用渗透测试与移动恶意软件分析的虚拟机
1. [MARA](https://github.com/xtiankisutsa/MARA_Framework) - 移动应用逆向工程与分析框架
1. [Taintdroid](http://appanalysis.org) - 需要编译 AOSP
1. [ARTist](https://artist.cispa.saarland) - 一个灵活的开源插桩与混合分析框架，面向 Android 应用以及 Android 的 Java 中间件。它基于 Android 运行时（ART）编译器，并在设备端编译期间修改代码。
1. [Android Malware Sandbox](https://github.com/Areizen/Android-Malware-Sandbox)
1. [AndroPyTool](https://github.com/alexMyG/AndroPyTool) - 一个从 Android APK 中提取静态与动态特征的工具。它结合了 DroidBox、FlowDroid、Strace、AndroGuard 和 VirusTotal 分析等多种知名的 Android 应用分析工具。
1. [Runtime Mobile Security (RMS)](https://github.com/m0bilesecurity/RMS-Runtime-Mobile-Security) - 是一个强大的 Web 界面，可帮助你在运行时操控 Android 和 iOS 应用
1. [PAPIMonitor](https://github.com/Dado1513/PAPIMonitor) – PAPIMonitor（Android 应用 Python API 监视器）是一个基于 Frida 的 Python 工具，用于在应用运行时监视用户选择的 API。
1. [Android_application_analyzer](https://github.com/NotSoSecure/android_application_analyzer) - 该工具用于分析 Android 应用在本地存储中的内容。
1. [Decompiler.com](https://www.decompiler.com/) - 在线 APK 与 Java 反编译器
1. [friTap](https://github.com/fkie-cad/friTap)- 使用 Frida 拦截 SSL/TLS 连接；允许在 Android 上实时提取 TLS 密钥并将 TLS 负载解密为 PCAP。
1. [HacknDroid](https://github.com/RaffaDNDM/HacknDroid) - 一个旨在自动化各种移动应用渗透测试（MAPT）任务并方便与 Android 设备交互的工具。
1. [adbsploit](https://github.com/mesquidar/adbsploit) - 通过 ADB 利用设备的工具
1. [Brida](https://github.com/federicodotta/Brida) - 一个 Burp Suite 扩展，作为 Burp 与 Frida 之间的桥梁，让你可以调用并操控应用自身的方法，同时篡改应用与其后端服务/服务器之间交换的流量。
1. [MPT](https://github.com/ByteSnipers/mobile-pentest-toolkit) - MPT（Mobile Pentest Toolkit，移动渗透测试工具包）是你 Android 渗透测试工作流中必不可少的解决方案。该工具可帮助你自动化安全任务。
1. [Andriller](https://github.com/den4uk/andriller) - 一个包含智能手机取证工具集的软件工具。它对 Android 设备执行只读、取证可靠、非破坏性的数据获取。
1. [Mira](https://github.com/vwww-droid/Mira) - 面向第三方 Android 与 iOS 应用的运行时保护分析平台，利用 AI 调用宿主应用侧的 shell、Java、Native 和 Frida 能力进行环境风险检测与加固校验。
1. [FlutterTap](https://github.com/script-or-script/FlutterTap) - 一个 Zygisk 模块，可在 `libflutter.so` 内部绕过 BoringSSL 证书校验，并将所选 Flutter 应用的流量重定向到代理。它在重启后依然持久生效，因此无需 Frida 会话、无需数据线、也无需监听端口。
1. [Mobix](https://github.com/blackfoxxx/Mobix) - 经授权的 Android 渗透测试实验室：Frida SSL 固定/root 检测绕过链、带自动 IDOR 标记的 mitmproxy 流量捕获、一个 Web 仪表盘，以及一个包含 36 个工具的 MCP 服务器，使得 Claude Code 智能体可以自行运行从扫描到发现漏洞的完整循环。
1. ~~[AppUse](https://appsec-labs.com/AppUse/) – 为渗透测试定制的构建~~
1. ~~[Appie](https://manifestsecurity.com/appie/) - Appie 是一个预先配置好、可充当 Android 渗透测试环境的软件包。它完全可移植，可以装在 U 盘或智能手机上。这是满足 Android 应用安全评估所需全部工具的一站式方案，也是现有虚拟机的绝佳替代品。~~
1. ~~[Android Tamer](https://androidtamer.com/) - 面向 Android 安全专家的虚拟/ Live 平台~~
1. ~~[Android Malware Analysis Toolkit](http://www.mobilemalware.com.br/amat/download.html) - （Linux 发行版）此前它曾是一个 [在线分析器](http://dunkelheit.com.br/amat/analysis/index_en.php)~~
1. ~~[Android Reverse Engineering](https://redmine.honeynet.org/projects/are/wiki) – ARE（Android 逆向工程）已不再活跃开发~~
1. ~~[ViaLab Community Edition](https://www.nowsecure.com/blog/2014/09/09/introducing-vialab-community-edition/)~~
1. ~~[Mercury](https://labs.mwrinfosecurity.com/tools/2012/03/16/mercury/)~~
1. ~~[Cobradroid](https://thecobraden.com/projects/cobradroid/) – 用于恶意软件分析的定制镜像~~

### 逆向工程

1. [Smali/Baksmali](https://github.com/JesusFreke/smali) – apk 反编译
1. [emacs syntax coloring for smali files](https://github.com/strazzere/Emacs-Smali)
1. [vim syntax coloring for smali files](http://codetastrophe.com/smali.vim)
1. [AndBug](https://github.com/swdunlop/AndBug)
1. [Androguard](https://github.com/androguard/androguard) – 功能强大，与其他工具集成良好
1. [Apktool](https://github.com/iBotPeaches/Apktool) – 在编译/反编译方面非常实用（使用 smali）
1. [Android Framework for Exploitation](https://github.com/appknox/AFE)
1. [Bypass signature and permission checks for IPCs](https://github.com/iSECPartners/Android-KillPermAndSigChecks)
1. [Android OpenDebug](https://github.com/iSECPartners/Android-OpenDebug) – 借助 Cydia Substrate 使设备上的任意应用可调试。
1. [Dex2Jar](https://github.com/pxb1988/dex2jar) - dex 转 jar 转换器
1. [Enjarify](https://github.com/google/enjarify) - 来自 Google 的 dex 转 jar 转换器
1. [Dedexer](https://sourceforge.net/projects/dedexer/)
1. [Fino](https://github.com/sysdream/fino)
1. [Frida](https://www.frida.re/) - 注入 JavaScript 来探索应用，并提供了一个 [GUI 工具](https://github.com/antojoseph/diff-gui)
1. [Indroid](https://bitbucket.org/aseemjakhar/indroid) – 线程注入套件
1. [Introspy](https://github.com/iSECPartners/Introspy-Android)
1. [Jad]( https://varaneckas.com/jad/) - Java 反编译器
1. [JD-GUI](https://github.com/java-decompiler/jd-gui) - Java 反编译器
1. [CFR](http://www.benf.org/other/cfr/) - Java 反编译器
1. [Krakatau](https://github.com/Storyyeller/Krakatau) - Java 反编译器
1. [FernFlower](https://github.com/fesh0r/fernflower) - Java 反编译器
1. [Redexer](https://github.com/plum-umd/redexer) – apk 操作
1. [Simplify Android deobfuscator](https://github.com/CalebFenton/simplify)
1. [Bytecode viewer](https://github.com/Konloch/bytecode-viewer)
1. [Radare2](https://github.com/radare/radare2)
1. [Jadx](https://github.com/skylot/jadx)
1. [Dwarf](https://github.com/iGio90/Dwarf) - 用于逆向工程的 GUI
1. [Andromeda](https://github.com/secrary/Andromeda) - 另一个基础的命令行逆向工程工具
1. [apk-mitm](https://github.com/shroudedcode/apk-mitm) - 一个为 HTTPS 检查准备 Android APK 文件的 CLI 应用
1. [Noia](https://github.com/0x742/noia) - 简单的 Android 应用沙箱文件浏览器工具
1. [Obfuscapk](https://github.com/ClaudiuGeorgiu/Obfuscapk) — Obfuscapk 是一个模块化的 Python 工具，无需源码即可对 Android 应用进行混淆。
1. [ARMANDroid](https://github.com/Mobile-IoT-Security-Lab/ARMANDroid) - ARMAND（基于原生检测的多模式防重打包、防篡改）是一种新颖的防篡改保护方案，无需源码即可将逻辑炸弹与防篡改（AT）检测节点直接嵌入 apk 文件。
1. [MVT (Mobile Verification Toolkit)](https://github.com/mvt-project/mvt) - 一组用于简化并自动化收集有助于识别 Android 与 iOS 设备潜在入侵取证的工具集
1. [Dexmod](https://github.com/google/dexmod) - 一个用于在 DEX（Dalvik 可执行）文件中修补 Dalvik 字节码并辅助 Android 应用静态分析的工具。
1. [odex-patcher](https://github.com/giacomoferretti/odex-patcher) - 通过修补 OAT 文件来运行任意代码
1. [PhoneSploit-Pro](https://github.com/AzeemIdrisi/PhoneSploit-Pro) - 一个一体化的黑客工具，利用 ADB 与 Metasploit 框架远程利用 Android 设备以获取 Meterpreter 会话。
1. [APKLab](https://github.com/APKLab/APKLab) - 用于分析 APK 的 VS Code 插件
1. ~~[IntentSniffer](https://www.nccgroup.com/us/our-research/intent-sniffer/)~~
1. ~~[Procyon](https://bitbucket.org/mstrobel/procyon/wiki/Java%20Decompiler) - Java 反编译器~~
1. ~~[Smali viewer](http://blog.avlyun.com/wp-content/uploads/2014/04/SmaliViewer.zip)~~
1. ~~[ZjDroid](https://github.com/BaiduSecurityLabs/ZjDroid)~~, ~~[fork/mirror](https://github.com/yangbean9/ZjDroid)~~
1. ~~[Dare](http://siis.cse.psu.edu/dare/index.html) – .dex 转 .class 转换器~~

### 模糊测试

1. [Radamsa Fuzzer](https://github.com/anestisb/radamsa-android)
1. [Honggfuzz](https://github.com/google/honggfuzz)
1. [An Android port of the Melkor ELF fuzzer](https://github.com/anestisb/melkor-android)
1. [Media Fuzzing Framework for Android](https://github.com/fuzzing/MFFA)
1. [AndroFuzz](https://github.com/jonmetz/AndroFuzz)
1. [QuarksLab's Android Fuzzing](https://github.com/quarkslab/android-fuzzing)
1. ~~[IntentFuzzer](https://www.nccgroup.trust/us/about-us/resources/intent-fuzzer/)~~

### 应用重打包检测器

1. [FSquaDRA](https://github.com/zyrikby/FSquaDRA) - 一个基于应用资源哈希比对来检测重打包 Android 应用的工具。

### 市场爬虫

1. [Google Play crawler (Java)](https://github.com/Akdeniz/google-play-crawler)
1. [Google Play crawler (Python)](https://github.com/egirault/googleplay-api)
1. [Google Play crawler (Node)](https://github.com/dweinstein/node-google-play) - 从官方 Google Play 商店获取应用详情并下载应用。
1. [Aptoide downloader (Node)](https://github.com/dweinstein/node-aptoide) - 从 Aptoide 第三方 Android 市场下载应用
1. [Appland downloader (Node)](https://github.com/dweinstein/node-appland) - 从 Appland 第三方 Android 市场下载应用
1. [PlaystoreDownloader](https://github.com/ClaudiuGeorgiu/PlaystoreDownloader) - PlaystoreDownloader 是一个直接从 Google Play 商店下载 Android 应用的工具。经过初次（一次性）配置后，只需指定包名即可下载应用。
1. [APK Downloader](https://apkcombo.com/apk-downloader/) 用于为特定 Android 设备配置从 Play 商店下载 APK 的在线服务
1. ~~[Apkpure](https://apkpure.com/) - 在线 apk 下载器。同时提供自家的下载应用。~~

### 杂项工具

1. [smalihook](http://androidcracking.blogspot.com/2011/03/original-smalihook-java-source.html)
1. [AXMLPrinter2](http://code.google.com/p/android4me/downloads/detail?name=AXMLPrinter2.jar) - 将二进制 XML 文件转换为可读的 XML 文件
1. [adb autocomplete](https://github.com/mbrubeck/android-completion)
1. [mitmproxy](https://github.com/mitmproxy/mitmproxy)
1. [dockerfile/androguard](https://github.com/dweinstein/dockerfile-androguard)
1. [Android Vulnerability Test Suite](https://github.com/AndroidVTS/android-vts) - android-vts 扫描设备是否存在一组漏洞
1. [AppMon](https://github.com/dpnishant/appmon)- AppMon 是一个用于监视和篡改原生 macOS、iOS 与 Android 应用的系统 API 调用的自动化框架。它基于 Frida。
1. [Internal Blue](https://github.com/seemoo-lab/internalblue) - 基于对 Broadcom 蓝牙控制器逆向工程的蓝牙实验框架
1. [Android Mobile Device Hardening](https://github.com/SecTheTech/AMDH) - AMDH 会扫描并加固设备的设置，并根据权限列出有害的已安装应用。
1. [NullKia](https://github.com/bad-antics/nullkia) - 一个全面的移动安全框架，支持 18 家制造商，具备基带利用、蜂窝安全、TEE/TrustZone 研究与 BootROM 提取工具。
1. [Firmware Extractor](https://github.com/AndroidDumps/Firmware_extractor) - 将给定归档提取为镜像
1. [ARMv7 payload that provides arbitrary code execution on MediaTek bootloaders](https://github.com/R0rt1z2/kaeru)
1. [DroidGround](https://github.com/SECFORCE/droidground) - 一个用于 Android CTF 挑战的灵活练习场
1. [sundaysec/Android-Exploits](https://github.com/sundaysec/Android-Exploits) - 一个 Android 漏洞利用与黑客技巧的合集
1. [Spectre](https://github.com/thomasbuilds/Spectre) - 具备侦察与进攻能力的射频扫描器。在设备上监视蜂窝、Wi-Fi、蓝牙 LE 与 GNSS，并带有 BLE GATT 检查器、iBeacon 广播器和本地网络发现功能。
1. ~~[Android Device Security Database](https://www.android-device-security.org/client/datatable) - Android 设备安全特性数据库~~
1. ~~[Opcodes table for quick reference](http://ww38.xchg.info/corkami/opcodes_tables.pdf)~~
1. ~~[APK-Downloader](http://codekiem.com/2012/02/24/apk-downloader/)~~ - 现在似乎已失效
1. ~~[Dalvik opcodes](http://pallergabor.uw.hu/androidblog/dalvik_opcodes.html)~~

### 用于练习的漏洞应用

1. [Damn Insecure Vulnerable Application (DIVA)](https://github.com/payatu/diva-android)
1. [Vuldroid](https://github.com/jaiswalakshansh/Vuldroid)
1. [ExploitMe Android Labs](http://securitycompass.github.io/AndroidLabs/setup.html)
1. [GoatDroid](https://github.com/jackMannino/OWASP-GoatDroid-Project)
1. [Android InsecureBank](https://github.com/dineshshetty/Android-InsecureBankv2)
1. [Insecureshop](https://github.com/optiv/insecureshop)
1. [Oversecured Vulnerable Android App (OVAA)](https://github.com/oversecured/ovaa)
1. [Injured Android - CTF](https://github.com/B3nac/InjuredAndroid)
1. [Damn Vulnerable Mobile App (DVMA)](https://github.com/cpeoples/dvma)

## 学术/研究/出版物/书籍

### 研究论文

1. [Exploit Database](https://www.exploit-db.com/papers/)
1. [Android security-related presentations](https://github.com/jacobsoo/AndroidSlides)
1. [A good collection of static analysis papers](https://tthtlc.wordpress.com/2011/09/01/static-analysis-of-android-applications/)

### 书籍

1. [SEI CERT Android Secure Coding Standard](https://wiki.sei.cmu.edu/confluence/display/android/Android+Secure+Coding+Standard)

### 其他

1. [OWASP Mobile Security Testing Guide Manual](https://github.com/OWASP/owasp-mstg)
1. [doridori/Android-Security-Reference](https://github.com/doridori/Android-Security-Reference)
1. [android app security checklist](https://github.com/b-mueller/android_app_security_checklist)
1. [Mobile App Pentest Cheat Sheet](https://github.com/tanprathan/MobileApp-Pentest-Cheatsheet)
1. [Android Reverse Engineering 101 by Daniele Altomare (Web Archive link)](https://web.archive.org/web/20180721134044/http://www.fasteque.com:80/android-reverse-engineering-101-part-1/)
1. ~~[Mobile Security Reading Room](https://mobile-security.zeef.com) - 一个阅读室，包含关于移动渗透测试、移动恶意软件、移动取证以及各种移动安全相关主题的分类技术阅读资料~~

## 漏洞利用/漏洞/缺陷

### 列表

1. [Android Security Bulletins](https://source.android.com/security/bulletin/)
1. [Android's reported security vulnerabilities](https://www.cvedetails.com/vulnerability-list/vendor_id-1224/product_id-19997/Google-Android.html)
1. [OWASP Mobile Top 10 2016](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10)
1. [Exploit Database](https://www.exploit-db.com/search/?action=search&q=android) - 点击搜索
1. [Vulnerability Google Doc](https://docs.google.com/spreadsheet/pub?key=0Am5hHW4ATym7dGhFU1A4X2lqbUJtRm1QSWNRc3E0UlE&single=true&gid=0&output=html)
1. [Google Android Security Team’s Classifications for Potentially Harmful Applications (Malware)](https://source.android.com/security/reports/Google_Android_Security_PHA_classifications.pdf)
1. ~~[Android Devices Security Patch Status](https://kb.androidtamer.com/Device_Security_Patch_tracker/)~~

### 恶意软件

1. [androguard - Database Android Malware wiki](https://code.google.com/p/androguard/wiki/DatabaseAndroidMalwares)
1. [Android Malware GitHub repo](https://github.com/ashishb/android-malware)
1. [Android Malware Genome Project](http://www.malgenomeproject.org/) - 包含 1260 个恶意软件样本，分为 49 个不同的恶意软件家族，供研究免费使用。
1. [Contagio Mobile Malware Mini Dump](http://contagiominidump.blogspot.com)
1. [Drebin](https://www.sec.tu-bs.de/~danarp/drebin/)
1. [Hudson Rock](https://www.hudsonrock.com/threat-intelligence-cybercrime-tools) - 一个免费的网路犯罪情报工具集，可指示某个特定的 APK 包是否在信息窃取恶意软件攻击中遭到入侵。
1. [Kharon Malware Dataset](http://kharon.gforge.inria.fr/dataset/) - 7 个已被逆向工程并记录下来的恶意软件
1. [Android Adware and General Malware Dataset](https://www.unb.ca/cic/datasets/android-adware.html)
1. [AndroZoo](https://androzoo.uni.lu/) - AndroZoo 是一个不断增长的 Android 应用合集，来源包括官方 Google Play 应用市场等。
1. ~~[Android PRAGuard Dataset](http://pralab.diee.unica.it/en/AndroidPRAGuardDataset) - 该数据集包含 10479 个样本，通过对 MalGenome 与 Contagio Minidump 数据集使用七种不同的混淆技术得到。~~
1. ~~[Admire](http://admire.necst.it/)~~

### 漏洞赏金计划

1. [Android Security Reward Program](https://www.google.com/about/appsecurity/android-rewards/)

### 如何报告安全问题

1. [Android - reporting security issues](https://source.android.com/security/overview/updates-resources.html#report-issues)
1. [Android Reports and Resources](https://github.com/B3nac/Android-Reports-and-Resources) - 已披露的 Android Hackerone 报告及其他资源的列表

## 贡献

欢迎随时贡献你的力量！

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

本仓库已在 [10+ 篇论文](https://scholar.google.com/scholar?q=github.com%2Fashishb%2Fandroid-security-awesome) 中被引用
