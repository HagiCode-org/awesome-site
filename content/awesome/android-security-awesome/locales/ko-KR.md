# Android Security Awesome ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)

[![Star History Rank](https://api.star-history.com/badge?repo=ashishb/android-security-awesome&theme=dark)](https://www.star-history.com/ashishb/android-security-awesome)

[![Link Liveness Checker](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml)

[![Lint Shell scripts](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml)
[![Lint Markdown](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml)
[![Lint YAML](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml)
[![Lint GitHub Actions](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml)
![GitHub contributors](https://img.shields.io/github/contributors/ashishb/android-security-awesome)

Android 보안 관련 리소스를 모아놓은 컬렉션입니다.

이 프로젝트가 유용하다고 생각하시면 [후원](./sponsors.md)을 고려해 주세요.

1. [도구](#tools)
1. [학술/연구/출판물/도서](#academicresearchpublicationsbooks)
1. [익스플로잇/취약점/버그](#exploitsvulnerabilitiesbugs)

## 도구

### 온라인 분석기

1. [Appknox](https://www.appknox.com/) - 무료 아님
1. [Virustotal](https://www.virustotal.com/)
1. [NowSecure Lab Automated](https://www.nowsecure.com/blog/2016/09/19/announcing-nowsecure-lab-automated/) - Android 및 iOS 모바일 앱 모두를 위한 모바일 앱 보안 테스트 기업용 도구. Lab Automated는 클라우드의 실제 기기에서 동적 및 정적 분석을 수행하여 몇 분 안에 결과를 반환합니다. 무료 아님
1. [App Detonator](https://appdetonator.run/) - APK 바이너리를 폭발시켜 앱 작성자, 서명, 빌드 및 매니페스트 정보를 포함한 소스 코드 수준의 세부 정보를 제공합니다. 하루 3회 분석 무료 할당량.
1. [Pithus](https://beta.pithus.org/) - 오픈 소스 APK 분석기. 아직 베타 단계이며 당분간 정적 분석만 지원합니다. YARA 규칙으로 악성코드를 사냥할 수 있습니다. 더 알아보기 [여기](https://beta.pithus.org/about/).
1. [Oversecured](https://oversecured.com/) - Android 및 iOS 앱을 위한 기업용 취약점 스캐너. Oversecured를 개발 프로세스에 통합하여 모바일 앱의 새 버전마다 보안을 유지할 수 있습니다. 무료 아님.
1. [AppSweep by Guardsquare](https://appsweep.guardsquare.com/) - 개발자를 위한 무료이고 빠른 Android 애플리케이션 보안 테스트
1. [Koodous](https://koodous.com) - 방대한 Android 샘플 저장소에 대해 정적/동적 악성코드 분석을 수행하고 공개 및 비공개 Yara 규칙과 대조합니다.
1. [Immuniweb](https://www.immuniweb.com/mobile/). "OWASP Mobile Top 10 Test", "Mobile App Privacy Check", 애플리케이션 권한 테스트를 수행합니다. 무료 등급은 하루 4회 테스트이며 등록 후 보고서가 포함됩니다.
1. [ANY.RUN](https://app.any.run/) - Android 애플리케이션 분석을 지원하는 대화형 클라우드 기반 악성코드 분석 플랫폼. 제한된 무료 플랜을 이용할 수 있습니다.
1. ~~[BitBaan](https://malab.bitbaan.com/)~~
1. ~~[AVC UnDroid](http://undroid.av-comparatives.info/)~~
1. ~~[AMAaaS](https://amaaas.com) - 무료 Android 악성코드 분석 서비스. Android 애플리케이션에 대한 정적 및 동적 분석을 제공하는 bare-metal 서비스. [MalwarePot](https://malwarepot.com/index.php/AMAaaS)의 제품~~.
1. ~~[AppCritique](https://appcritique.boozallen.com) - Android APK를 업로드하면 포괄적인 무료 보안 평가를 받습니다~~
1. ~~[NVISO ApkScan](https://apkscan.nviso.be/) - 2019년 10월 31일 종료~~
1. ~~[Mobile Malware Sandbox](http://www.mobilemalware.com.br/analysis/index_en.php)~~
1. ~~[IBM Security AppScan Mobile Analyzer](https://appscan.bluemix.net/mobileAnalyzer) - 무료 아님~~
1. ~~[Visual Threat](https://www.visualthreat.com/) - 더 이상 Android 앱 분석기가 아님~~
1. ~~[Tracedroid](http://tracedroid.few.vu.nl/)~~
1. ~~[habo](https://habo.qq.com/) - 10회/일~~
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
1. ~~[Fireeye](https://fireeye.ijinshan.com/)- 최대 60MB, 15회/일~~
1. ~~[approver](https://approver.talos-sec.com/) - Approver는 Android 및 iOS 앱을 위한 완전 자동화된 보안 분석 및 위험 평가 플랫폼입니다. 무료 아님.~~
1. ~~[Fraunhofer App-ray](http://app-ray.co/) - 도메인 만료됨~~
1. ~~[AndroTotal](http://andrototal.org/) - 죽음~~

### 정적 분석 도구

1. [Androwarn](https://github.com/maaaaz/androwarn/) - Android 애플리케이션에서 개발된 잠재적으로 악의적인 동작을 탐지하고 사용자에게 경고합니다.
1. [ApkAnalyser](https://github.com/sonyxperiadev/ApkAnalyser)
1. [APKInspector](https://github.com/honeynet/apkinspector/)
1. [Droid Intent Data Flow Analysis for Information Leakage](https://insights.sei.cmu.edu/library/didfail/)
1. [DroidLegacy](https://bitbucket.org/srl/droidlegacy)
1. [FlowDroid](https://blogs.uni-paderborn.de/sse/tools/flowdroid/)
1. [Android Decompiler](https://www.pnfsoftware.com/) – 무료 아님
1. [PSCout](https://security.csl.toronto.edu/pscout/) - 정적 분석을 사용하여 Android OS 소스 코드에서 권한 사양을 추출하는 도구
1. [Amandroid](http://amandroid.sireum.org/)
1. [SmaliSCA](https://github.com/dorneanu/smalisca) - Smali Static Code Analysis
1. [CFGScanDroid](https://github.com/douggard/CFGScanDroid) - CFG를 악성 애플리케이션의 CFG와 스캔 및 비교합니다
1. [Madrolyzer](https://github.com/maldroid/maldrolyzer) - C&C, 전화번호 등 실행 가능한 데이터를 추출합니다.
1. [ConDroid](https://github.com/JulianSchuette/ConDroid) - 앱에 대한 기호 실행 + 구체 실행의 조합을 수행합니다
1. [DroidRA](https://github.com/serval-snt-uni-lu/DroidRA)
1. [RiskInDroid](https://github.com/ClaudiuGeorgiu/RiskInDroid) - 앱의 권한을 기반으로 Android 앱의 위험을 계산하는 도구로, 온라인 데모를 사용할 수 있습니다.
1. [SUPER](https://github.com/SUPERAndroidAnalyzer/super) - Secure, Unified, Powerful, and Extensible Rust Android Analyzer
1. [ClassyShark](https://github.com/google/android-classyshark) - 모든 Android 실행 파일을 탐색하고 중요한 정보를 표시할 수 있는 독립형 바이너리 검사 도구.
1. [StaCoAn](https://github.com/vincentcox/StaCoAn) - 개발자, 버그 바운티 헌터 및 윤리적 해커가 모바일 애플리케이션에서 정적 코드 분석을 수행하는 데 도움을 주는 크로스 플랫폼 도구. 이 도구는 사용성과 사용자 인터페이스의 그래픽 안내에 중점을 두고 만들어졌습니다.
1. [JAADAS](https://github.com/flankerhqd/JAADAS) - Soot 및 Scala를 기반으로 구축된, Android 앱의 취약점을 찾기 위한 공동 절차 내/절차 간 프로그램 분석 도구
1. [Quark-Engine](https://github.com/quark-engine/quark-engine) - 난독화를 무시하는 Android 악성코드 점수 시스템
1. [One Step Decompiler](https://github.com/b-mueller/apkx) - 게으른 사람을 위한 Android APK 디컴파일
1. [APKLeaks](https://github.com/dwisiswant0/apkleaks) - APK 파일에서 URI, 엔드포인트 및 비밀을 스캔합니다.
1. [Mobile Audit](https://github.com/mpast/mobileAudit) - Android APK의 정적 분석을 수행하고 악성코드를 탐지하는 웹 애플리케이션.
1. [Detekt](https://github.com/detekt/detekt) - Kotlin용 정적 코드 분석
1. [APKdevastate](https://github.com/rafigk2v9c/APKdevastate/) - RAT가 만든 APK 페이로드를 위한 고급 분석 소프트웨어.
1. ~~[Smali CFG generator](https://github.com/EugenioDelfa/Smali-CFGs)~~
1. ~~[Several tools from PSU](http://siis.cse.psu.edu/tools.html)~~
1. ~~[SPARTA](https://www.cs.washington.edu/sparta) - 앱이 정보 흐름 보안 정책을 만족함을 검증(증명)합니다. [Checker Framework](https://types.cs.washington.edu/checker-framework/) 기반~~

### 앱 취약점 스캐너

1. [QARK](https://github.com/linkedin/qark/) - LinkedIn의 QARK는 앱 개발자가 보안 문제에 대해 앱을 스캔하기 위한 것입니다
1. [AndroBugs](https://github.com/AndroBugs/AndroBugs_Framework)
1. [Nogotofail](https://github.com/google/nogotofail)
1. [Ostorlab](https://ostorlab.co) - Ostorlab 무료 버전은 Android Play 스토어, iOS App Store 및 Huawei AppGallery의 앱을 스캔합니다
1. ~~[Devknox](https://devknox.io/) - 안전한 Android 앱을 구축하기 위한 IDE 플러그인. 더 이상 유지 관리되지 않음.~~

### 동적 분석 도구

1. [Android DBI framework](http://www.mulliner.org/blog/blosxom.cgi/security/androiddbiv02.html)
1. [Androl4b](https://github.com/sh4hin/Androl4b)- Android 애플리케이션, 리버스 엔지니어링 및 악성코드 분석을 평가하기 위한 가상 머신
1. [House](https://github.com/nccgroup/house)- House: Frida로 구동되며 Python으로 작성된, 웹 GUI가 있는 런타임 모바일 애플리케이션 분석 툴킷.
1. [Mobile-Security-Framework MobSF](https://github.com/MobSF/Mobile-Security-Framework-MobSF) - Mobile Security Framework는 정적, 동적 분석 및 웹 API 테스트를 수행할 수 있는 Android/iOS 모바일 애플리케이션용 지능형 올인원 오픈 소스 모바일 애플리케이션 자동 침투 테스트 프레임워크입니다.
1. [Droidbox](https://github.com/pjlantz/droidbox)
1. [Drozer](https://github.com/mwrlabs/drozer)
1. [Xposed](https://forum.xda-developers.com/xposed/xposed-installer-versions-changelog-t2714053) - 스텁 기반 코드 주입과 동등하지만 바이너리를 전혀 수정하지 않음
1. [Inspeckage](https://github.com/ac-pm/Inspeckage) - Android Package Inspector - API 후크, 내보내지 않은 활동 시작 등이 있는 동적 분석. (Xposed 모듈)
1. [Android Hooker](https://github.com/AndroidHooker/hooker) - 동적 Java 코드 계측(Substrate 프레임워크 필요)
1. [ProbeDroid](https://github.com/ZSShen/ProbeDroid) - 동적 Java 코드 계측
1. [DECAF](https://github.com/sycurelab/DECAF) - QEMU 기반의 Dynamic Executable Code Analysis Framework(DroidScope는 이제 DECAF의 확장 기능임)
1. [CuckooDroid](https://github.com/idanr1986/cuckoo-droid) - Cuckoo 샌드박스를 위한 Android 확장
1. [Mem](https://github.com/MobileForensicsResearch/mem) - Android 메모리 분석(root 필요)
1. [Crowdroid](http://www.ida.liu.se/labs/rtslab/publications/2011/spsm11-burguera.pdf) – 실제 도구를 찾을 수 없음
1. [AuditdAndroid](https://github.com/nwhusted/AuditdAndroid) – auditd의 Android 포트로, 더 이상 활발한 개발 중이 아님
1. [Android Security Evaluation Framework](https://code.google.com/p/asef/) - 더 이상 활발한 개발 중이 아님
1. [Aurasium](https://github.com/xurubin/aurasium) – 바이트코드 재작성 및 제자리 참조 모니터링을 통해 Android 앱에 대한 실용적인 보안 정책 시행.
1. [Android Linux Kernel modules](https://github.com/strazzere/android-lkms)
1. [StaDynA](https://github.com/zyrikby/StaDynA) - 동적 코드 업데이트 기능(동적 클래스 로딩 및 리플렉션)이 있는 상황에서 보안 앱 분석을 지원하는 시스템입니다. 이 도구는 Android 애플리케이션의 정적 및 동적 분석을 결합하여 숨겨지거나 업데이트된 동작을 밝히고 이 정보로 정적 분석 결과를 확장합니다.
1. [DroidAnalytics](https://github.com/zhengmin1989/DroidAnalytics) - 미완성
1. [Vezir Project](https://github.com/oguzhantopgul/Vezir-Project) - 모바일 애플리케이션 침투 테스트 및 모바일 악성코드 분석을 위한 가상 머신
1. [MARA](https://github.com/xtiankisutsa/MARA_Framework) - Mobile Application Reverse Engineering and Analysis Framework
1. [Taintdroid](http://appanalysis.org) - AOSP 컴파일 필요
1. [ARTist](https://artist.cispa.saarland) - Android 앱 및 Android의 Java 미들웨어를 위한 유연한 오픈 소스 계측 및 하이브리드 분석 프레임워크입니다. Android Runtime(ART) 컴파일러를 기반으로 하며 디바이스 내 컴파일 중에 코드를 수정합니다.
1. [Android Malware Sandbox](https://github.com/Areizen/Android-Malware-Sandbox)
1. [AndroPyTool](https://github.com/alexMyG/AndroPyTool) - Android APK에서 정적 및 동적 특징을 추출하는 도구입니다. DroidBox, FlowDroid, Strace, AndroGuard 및 VirusTotal 분석 등 여러 잘 알려진 Android 앱 분석 도구를 결합합니다.
1. [Runtime Mobile Security (RMS)](https://github.com/m0bilesecurity/RMS-Runtime-Mobile-Security) - 런타임에 Android 및 iOS 앱을 조작하는 데 도움이 되는 강력한 웹 인터페이스입니다
1. [PAPIMonitor](https://github.com/Dado1513/PAPIMonitor) – PAPIMonitor(Android 앱용 Python API 모니터)는 앱 실행 중에 사용자가 선택한 API를 모니터링하기 위한 Frida 기반 Python 도구입니다.
1. [Android_application_analyzer](https://github.com/NotSoSecure/android_application_analyzer) - 이 도구는 로컬 저장소에 있는 Android 애플리케이션의 내용을 분석하는 데 사용됩니다.
1. [Decompiler.com](https://www.decompiler.com/) - 온라인 APK 및 Java 디컴파일러
1. [friTap](https://github.com/fkie-cad/friTap)- Frida를 사용하여 SSL/TLS 연결을 가로챕니다. Android에서 TLS 키를 추출하고 TLS 페이로드를 실시간으로 PCAP으로 복호화할 수 있습니다.
1. [HacknDroid](https://github.com/RaffaDNDM/HacknDroid) - 다양한 모바일 애플리케이션 침투 테스트(MAPT) 작업을 자동화하고 Android 기기와의 상호 작용을 용이하게 하도록 설계된 도구.
1. [adbsploit](https://github.com/mesquidar/adbsploit) - ADB를 통해 기기를 악용하는 도구
1. [Brida](https://github.com/federicodotta/Brida) - Burp와 Frida 사이의 다리 역할을 하는 Burp Suite 확장으로, 애플리케이션과 백엔드 서비스/서버 간에 교환되는 트래픽을 변조하면서 애플리케이션 자체의 메서드를 사용하고 조작할 수 있습니다.
1. [MPT](https://github.com/ByteSnipers/mobile-pentest-toolkit) - MPT(Mobile Pentest Toolkit)는 Android 침투 테스트 워크플로우에 꼭 필요한 솔루션입니다. 이 도구를 사용하면 보안 작업을 자동화할 수 있습니다.
1. [Andriller](https://github.com/den4uk/andriller) - 스마트폰용 포렌식 도구 모음이 포함된 소프트웨어 유틸리티입니다. Android 기기에서 읽기 전용, 포렌식적으로 건전하며 비파괴적인 획득을 수행합니다.
1. [Mira](https://github.com/vwww-droid/Mira) - 서드파티 Android 및 iOS 앱을 위한 런타임 보호 분석 플랫폼으로, AI가 호스트 앱 측 shell, Java, Native 및 Frida 기능을 활용하여 환경 위험 탐지 및 하드닝 검증을 수행합니다.
1. [FlutterTap](https://github.com/script-or-script/FlutterTap) - `libflutter.so` 내부의 BoringSSL 인증서 검증을 우회하고 선택한 Flutter 앱의 트래픽을 프록시로 리디렉션하는 Zygisk 모듈. 재부팅 후에도 지속되므로 Frida 세션, 케이블, 리스닝 포트가 필요 없습니다.
1. [Mobix](https://github.com/blackfoxxx/Mobix) - 승인된 Android 펜테스트 랩: Frida SSL 고정/루트 탐지 우회 체인, 자동 IDOR 플래그 지정이 있는 mitmproxy 트래픽 캡처, 웹 대시보드 및 36개 도구 MCP 서버를 갖추어 Claude Code 에이전트가 스캔부터 발견까지 전체 루프를 직접 실행할 수 있습니다.
1. ~~[AppUse](https://appsec-labs.com/AppUse/) – 침투 테스트용 사용자 정의 빌드~~
1. ~~[Appie](https://manifestsecurity.com/appie/) - Appie는 Android 펜테스트 환경으로 기능하도록 사전 구성된 소프트웨어 패키지입니다. 완전히 휴대 가능하며 USB 스틱이나 스마트폰에 넣어 휴대할 수 있습니다. 이는 Android 애플리케이션 보안 평가에 필요한 모든 도구에 대한 원스톱 답이며 기존 가상 머신에 대한 훌륭한 대안입니다.~~
1. ~~[Android Tamer](https://androidtamer.com/) - Android 보안 전문가를 위한 가상/Live 플랫폼~~
1. ~~[Android Malware Analysis Toolkit](http://www.mobilemalware.com.br/amat/download.html) - (Linux 배포판) 이전에는 [온라인 분석기](http://dunkelheit.com.br/amat/analysis/index_en.php)였음~~
1. ~~[Android Reverse Engineering](https://redmine.honeynet.org/projects/are/wiki) – ARE(Android 리버스 엔지니어링)는 더 이상 활발한 개발 중이 아님~~
1. ~~[ViaLab Community Edition](https://www.nowsecure.com/blog/2014/09/09/introducing-vialab-community-edition/)~~
1. ~~[Mercury](https://labs.mwrinfosecurity.com/tools/2012/03/16/mercury/)~~
1. ~~[Cobradroid](https://thecobraden.com/projects/cobradroid/) – 악성코드 분석용 사용자 정의 이미지~~

### 리버스 엔지니어링

1. [Smali/Baksmali](https://github.com/JesusFreke/smali) – apk 디컴파일
1. [emacs syntax coloring for smali files](https://github.com/strazzere/Emacs-Smali)
1. [vim syntax coloring for smali files](http://codetastrophe.com/smali.vim)
1. [AndBug](https://github.com/swdunlop/AndBug)
1. [Androguard](https://github.com/androguard/androguard) – 강력하며 다른 도구와 잘 통합됨
1. [Apktool](https://github.com/iBotPeaches/Apktool) – 컴파일/디컴파일(smali 사용)에 매우 유용
1. [Android Framework for Exploitation](https://github.com/appknox/AFE)
1. [Bypass signature and permission checks for IPCs](https://github.com/iSECPartners/Android-KillPermAndSigChecks)
1. [Android OpenDebug](https://github.com/iSECPartners/Android-OpenDebug) – Cydia Substrate를 사용하여 기기의 모든 애플리케이션을 디버그 가능하게 만듦.
1. [Dex2Jar](https://github.com/pxb1988/dex2jar) - dex에서 jar로 변환기
1. [Enjarify](https://github.com/google/enjarify) - Google의 dex에서 jar로 변환기
1. [Dedexer](https://sourceforge.net/projects/dedexer/)
1. [Fino](https://github.com/sysdream/fino)
1. [Frida](https://www.frida.re/) - JavaScript를 주입하여 애플리케이션을 탐색하고 이를 위한 [GUI 도구](https://github.com/antojoseph/diff-gui)도 있음
1. [Indroid](https://bitbucket.org/aseemjakhar/indroid) – 스레드 주입 키트
1. [Introspy](https://github.com/iSECPartners/Introspy-Android)
1. [Jad]( https://varaneckas.com/jad/) - Java 디컴파일러
1. [JD-GUI](https://github.com/java-decompiler/jd-gui) - Java 디컴파일러
1. [CFR](http://www.benf.org/other/cfr/) - Java 디컴파일러
1. [Krakatau](https://github.com/Storyyeller/Krakatau) - Java 디컴파일러
1. [FernFlower](https://github.com/fesh0r/fernflower) - Java 디컴파일러
1. [Redexer](https://github.com/plum-umd/redexer) – apk 조작
1. [Simplify Android deobfuscator](https://github.com/CalebFenton/simplify)
1. [Bytecode viewer](https://github.com/Konloch/bytecode-viewer)
1. [Radare2](https://github.com/radare/radare2)
1. [Jadx](https://github.com/skylot/jadx)
1. [Dwarf](https://github.com/iGio90/Dwarf) - 리버스 엔지니어링용 GUI
1. [Andromeda](https://github.com/secrary/Andromeda) - 또 다른 기본 명령줄 리버스 엔지니어링 도구
1. [apk-mitm](https://github.com/shroudedcode/apk-mitm) - Android APK 파일을 HTTPS 검사를 위해 준비하는 CLI 애플리케이션
1. [Noia](https://github.com/0x742/noia) - 간단한 Android 애플리케이션 샌드박스 파일 브라우저 도구
1. [Obfuscapk](https://github.com/ClaudiuGeorgiu/Obfuscapk) — Obfuscapk는 소스 코드 없이도 Android 앱을 난독화할 수 있는 모듈식 Python 도구입니다.
1. [ARMANDroid](https://github.com/Mobile-IoT-Security-Lab/ARMANDroid) - ARMAND(Anti-Repackaging through Multi-pattern, Anti-tampering based on Native Detection)은 소스 코드 없이도 apk 파일에 로직 폭탄과 AT 탐지 노드를 직접 임베드하는 새로운 변조 방지 보호 방식입니다.
1. [MVT (Mobile Verification Toolkit)](https://github.com/mvt-project/mvt) - Android 및 iOS 기기의 잠재적 손상을 식별하는 데 유용한 포렌식 흔적 수집 프로세스를 단순화하고 자동화하는 유틸리티 모음
1. [Dexmod](https://github.com/google/dexmod) - DEX(Dalvik Executable) 파일에서 Dalvik 바이트코드를 패치 적용하고 Android 애플리케이션의 정적 분석을 돕는 도구.
1. [odex-patcher](https://github.com/giacomoferretti/odex-patcher) - OAT 파일을 패치하여 임의 코드를 실행합니다
1. [PhoneSploit-Pro](https://github.com/AzeemIdrisi/PhoneSploit-Pro) - ADB와 Metasploit Framework를 사용하여 Android 기기를 원격으로 악용하여 Meterpreter 세션을 얻는 올인원 해킹 도구.
1. [APKLab](https://github.com/APKLab/APKLab) - APK를 분석하기 위한 VS Code 플러그인
1. ~~[IntentSniffer](https://www.nccgroup.com/us/our-research/intent-sniffer/)~~
1. ~~[Procyon](https://bitbucket.org/mstrobel/procyon/wiki/Java%20Decompiler) - Java 디컴파일러~~
1. ~~[Smali viewer](http://blog.avlyun.com/wp-content/uploads/2014/04/SmaliViewer.zip)~~
1. ~~[ZjDroid](https://github.com/BaiduSecurityLabs/ZjDroid)~~, ~~[fork/mirror](https://github.com/yangbean9/ZjDroid)~~
1. ~~[Dare](http://siis.cse.psu.edu/dare/index.html) – .dex에서 .class로 변환기~~

### 퍼징 테스트

1. [Radamsa Fuzzer](https://github.com/anestisb/radamsa-android)
1. [Honggfuzz](https://github.com/google/honggfuzz)
1. [An Android port of the Melkor ELF fuzzer](https://github.com/anestisb/melkor-android)
1. [Media Fuzzing Framework for Android](https://github.com/fuzzing/MFFA)
1. [AndroFuzz](https://github.com/jonmetz/AndroFuzz)
1. [QuarksLab's Android Fuzzing](https://github.com/quarkslab/android-fuzzing)
1. ~~[IntentFuzzer](https://www.nccgroup.trust/us/about-us/resources/intent-fuzzer/)~~

### 앱 재패키징 탐지기

1. [FSquaDRA](https://github.com/zyrikby/FSquaDRA) - 앱 리소스 해시 비교를 기반으로 재패키징된 Android 애플리케이션을 탐지하는 도구.

### 마켓 크롤러

1. [Google Play crawler (Java)](https://github.com/Akdeniz/google-play-crawler)
1. [Google Play crawler (Python)](https://github.com/egirault/googleplay-api)
1. [Google Play crawler (Node)](https://github.com/dweinstein/node-google-play) - 공식 Google Play 스토어에서 앱 세부 정보를 가져오고 앱을 다운로드합니다.
1. [Aptoide downloader (Node)](https://github.com/dweinstein/node-aptoide) - Aptoide 서드파티 Android 마켓에서 앱 다운로드
1. [Appland downloader (Node)](https://github.com/dweinstein/node-appland) - Appland 서드파티 Android 마켓에서 앱 다운로드
1. [PlaystoreDownloader](https://github.com/ClaudiuGeorgiu/PlaystoreDownloader) - PlaystoreDownloader는 Google Play 스토어에서 Android 애플리케이션을 직접 다운로드하는 도구입니다. 초기(일회성) 구성 후 패키지 이름을 지정하기만 하면 앱을 다운로드할 수 있습니다.
1. [APK Downloader](https://apkcombo.com/apk-downloader/) 특정 Android 기기 구성용 Play 스토어에서 APK를 다운로드하는 온라인 서비스
1. ~~[Apkpure](https://apkpure.com/) - 온라인 apk 다운로더. 다운로드용 자체 앱도 제공합니다.~~

### 기타 도구

1. [smalihook](http://androidcracking.blogspot.com/2011/03/original-smalihook-java-source.html)
1. [AXMLPrinter2](http://code.google.com/p/android4me/downloads/detail?name=AXMLPrinter2.jar) - 바이너리 XML 파일을 사람이 읽을 수 있는 XML 파일로 변환합니다
1. [adb autocomplete](https://github.com/mbrubeck/android-completion)
1. [mitmproxy](https://github.com/mitmproxy/mitmproxy)
1. [dockerfile/androguard](https://github.com/dweinstein/dockerfile-androguard)
1. [Android Vulnerability Test Suite](https://github.com/AndroidVTS/android-vts) - android-vts는 기기의 취약점 세트를 스캔합니다
1. [AppMon](https://github.com/dpnishant/appmon)- AppMon은 네이티브 macOS, iOS 및 Android 앱의 시스템 API 호출을 모니터링하고 변조하는 자동화 프레임워크입니다. Frida를 기반으로 합니다.
1. [Internal Blue](https://github.com/seemoo-lab/internalblue) - Broadcom Bluetooth 컨트롤러 리버스 엔지니어링을 기반으로 한 Bluetooth 실험 프레임워크
1. [Android Mobile Device Hardening](https://github.com/SecTheTech/AMDH) - AMDH는 기기 설정을 스캔 및 하드닝하고 권한을 기반으로 유해한 설치된 앱을 나열합니다.
1. [NullKia](https://github.com/bad-antics/nullkia) - 18개 제조업체를 지원하며 베이스밴드 익스플로잇, 셀룰러 보안, TEE/TrustZone 연구 및 BootROM 추출 도구를 갖춘 포괄적인 모바일 보안 프레임워크.
1. [Firmware Extractor](https://github.com/AndroidDumps/Firmware_extractor) - 주어진 아카이브를 이미지로 추출합니다
1. [ARMv7 payload that provides arbitrary code execution on MediaTek bootloaders](https://github.com/R0rt1z2/kaeru)
1. [DroidGround](https://github.com/SECFORCE/droidground) - Android CTF 챌린지를 위한 유연한 놀이터
1. [sundaysec/Android-Exploits](https://github.com/sundaysec/Android-Exploits) - Android 익스플로잇 및 해킹 모음
1. [Spectre](https://github.com/thomasbuilds/Spectre) - 정찰 및 공격 기능을 갖춘 무선 주파수 스캐너. 기기에서 셀룰러, Wi-Fi, Bluetooth LE 및 GNSS를 모니터링하며 BLE GATT 검사기, iBeacon 브로드캐스터 및 로컬 네트워크 검색을 갖추고 있습니다.
1. ~~[Android Device Security Database](https://www.android-device-security.org/client/datatable) - Android 기기 보안 기능 데이터베이스~~
1. ~~[Opcodes table for quick reference](http://ww38.xchg.info/corkami/opcodes_tables.pdf)~~
1. ~~[APK-Downloader](http://codekiem.com/2012/02/24/apk-downloader/)~~ - 이제 죽은 것으로 보임
1. ~~[Dalvik opcodes](http://pallergabor.uw.hu/androidblog/dalvik_opcodes.html)~~

### 연습용 취약 애플리케이션

1. [Damn Insecure Vulnerable Application (DIVA)](https://github.com/payatu/diva-android)
1. [Vuldroid](https://github.com/jaiswalakshansh/Vuldroid)
1. [ExploitMe Android Labs](http://securitycompass.github.io/AndroidLabs/setup.html)
1. [GoatDroid](https://github.com/jackMannino/OWASP-GoatDroid-Project)
1. [Android InsecureBank](https://github.com/dineshshetty/Android-InsecureBankv2)
1. [Insecureshop](https://github.com/optiv/insecureshop)
1. [Oversecured Vulnerable Android App (OVAA)](https://github.com/oversecured/ovaa)
1. [Injured Android - CTF](https://github.com/B3nac/InjuredAndroid)
1. [Damn Vulnerable Mobile App (DVMA)](https://github.com/cpeoples/dvma)

## 학술/연구/출판물/도서

### 연구 논문

1. [Exploit Database](https://www.exploit-db.com/papers/)
1. [Android security-related presentations](https://github.com/jacobsoo/AndroidSlides)
1. [A good collection of static analysis papers](https://tthtlc.wordpress.com/2011/09/01/static-analysis-of-android-applications/)

### 도서

1. [SEI CERT Android Secure Coding Standard](https://wiki.sei.cmu.edu/confluence/display/android/Android+Secure+Coding+Standard)

### 기타

1. [OWASP Mobile Security Testing Guide Manual](https://github.com/OWASP/owasp-mstg)
1. [doridori/Android-Security-Reference](https://github.com/doridori/Android-Security-Reference)
1. [android app security checklist](https://github.com/b-mueller/android_app_security_checklist)
1. [Mobile App Pentest Cheat Sheet](https://github.com/tanprathan/MobileApp-Pentest-Cheatsheet)
1. [Android Reverse Engineering 101 by Daniele Altomare (Web Archive link)](https://web.archive.org/web/20180721134044/http://www.fasteque.com:80/android-reverse-engineering-101-part-1/)
1. ~~[Mobile Security Reading Room](https://mobile-security.zeef.com) - 모바일 침투 테스트, 모바일 악성코드, 모바일 포렌식 및 다양한 모바일 보안 관련 주제에 대한 분류된 기술 읽기 자료가 포함된 열람실~~

## 익스플로잇/취약점/버그

### 목록

1. [Android Security Bulletins](https://source.android.com/security/bulletin/)
1. [Android's reported security vulnerabilities](https://www.cvedetails.com/vulnerability-list/vendor_id-1224/product_id-19997/Google-Android.html)
1. [OWASP Mobile Top 10 2016](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10)
1. [Exploit Database](https://www.exploit-db.com/search/?action=search&q=android) - 검색 클릭
1. [Vulnerability Google Doc](https://docs.google.com/spreadsheet/pub?key=0Am5hHW4ATym7dGhFU1A4X2lqbUJtRm1QSWNRc3E0UlE&single=true&gid=0&output=html)
1. [Google Android Security Team’s Classifications for Potentially Harmful Applications (Malware)](https://source.android.com/security/reports/Google_Android_Security_PHA_classifications.pdf)
1. ~~[Android Devices Security Patch Status](https://kb.androidtamer.com/Device_Security_Patch_tracker/)~~

### 악성코드

1. [androguard - Database Android Malware wiki](https://code.google.com/p/androguard/wiki/DatabaseAndroidMalwares)
1. [Android Malware GitHub repo](https://github.com/ashishb/android-malware)
1. [Android Malware Genome Project](http://www.malgenomeproject.org/) - 연구 목적으로 무료인 49개의 서로 다른 악성코드 패밀리로 분류된 1260개의 악성코드 샘플을 포함합니다.
1. [Contagio Mobile Malware Mini Dump](http://contagiominidump.blogspot.com)
1. [Drebin](https://www.sec.tu-bs.de/~danarp/drebin/)
1. [Hudson Rock](https://www.hudsonrock.com/threat-intelligence-cybercrime-tools) - 특정 APK 패키지가 Infostealer 악성코드 공격으로 손상되었는지 표시할 수 있는 무료 사이버 범죄 인텔리전스 도구 세트.
1. [Kharon Malware Dataset](http://kharon.gforge.inria.fr/dataset/) - 리버스 엔지니어링 및 문서화된 7개의 악성코드
1. [Android Adware and General Malware Dataset](https://www.unb.ca/cic/datasets/android-adware.html)
1. [AndroZoo](https://androzoo.uni.lu/) - AndroZoo는 공식 Google Play 앱 마켓을 포함한 여러 소스에서 가져온 성장하는 Android 애플리케이션 컬렉션입니다.
1. ~~[Android PRAGuard Dataset](http://pralab.diee.unica.it/en/AndroidPRAGuardDataset) - 이 데이터 세트에는 MalGenome 및 Contagio Minidump 데이터 세트를 7가지 다른 난독화 기술로 난독화하여 얻은 10479개의 샘플이 포함되어 있습니다.~~
1. ~~[Admire](http://admire.necst.it/)~~

### 버그 바운티 프로그램

1. [Android Security Reward Program](https://www.google.com/about/appsecurity/android-rewards/)

### 보안 문제를 보고하는 방법

1. [Android - reporting security issues](https://source.android.com/security/overview/updates-resources.html#report-issues)
1. [Android Reports and Resources](https://github.com/B3nac/Android-Reports-and-Resources) - 공개된 Android Hackerone 보고서 및 기타 리소스 목록

## 기여

여러분의 기여를 항상 환영합니다!

## 📖 인용

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

이 저장소는 [10개 이상의 논문](https://scholar.google.com/scholar?q=github.com%2Fashishb%2Fandroid-security-awesome)에서 인용되었습니다
