# Android Security Awesome ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)

[![Star History Rank](https://api.star-history.com/badge?repo=ashishb/android-security-awesome&theme=dark)](https://www.star-history.com/ashishb/android-security-awesome)

[![Link Liveness Checker](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml)

[![Lint Shell scripts](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml)
[![Lint Markdown](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml)
[![Lint YAML](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml)
[![Lint GitHub Actions](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml)
![GitHub contributors](https://img.shields.io/github/contributors/ashishb/android-security-awesome)

Android セキュリティ関連のリソースを集めたコレクション。

このプロジェクトが役に立った場合は、[支援](./sponsors.md)を検討してください。

1. [ツール](#tools)
1. [学術/研究/出版物/書籍](#academicresearchpublicationsbooks)
1. [エクスプロイト/脆弱性/バグ](#exploitsvulnerabilitiesbugs)

## ツール

### オンライン解析ツール

1. [Appknox](https://www.appknox.com/) - 無料ではない
1. [Virustotal](https://www.virustotal.com/)
1. [NowSecure Lab Automated](https://www.nowsecure.com/blog/2016/09/19/announcing-nowsecure-lab-automated/) - Android および iOS モバイルアプリの両方のモバイルアプリセキュリティテストのためのエンタープライズツール。Lab Automated はクラウド上の実機で動的および静的解析を実行し、数分で結果を返します。無料ではない
1. [App Detonator](https://appdetonator.run/) - APK バイナリを爆破して、アプリの作者、署名、ビルド、マニフェスト情報などのソースコードレベルの詳細を提供します。無料枠は1日3回の解析。
1. [Pithus](https://beta.pithus.org/) - オープンソースの APK 解析ツール。現在はまだベータ版で、当面は静的解析のみに限定されています。YARA ルールを使ってマルウェアを捜索できます。詳細は[こちら](https://beta.pithus.org/about/)。
1. [Oversecured](https://oversecured.com/) - Android および iOS アプリ向けのエンタープライズ脆弱性スキャナー。Oversecured を開発プロセスに統合することで、モバイルアプリの新しいバージョンごとにセキュリティを確保できます。無料ではない。
1. [AppSweep by Guardsquare](https://appsweep.guardsquare.com/) - 開発者向けの無料で高速な Android アプリケーションセキュリティテスト
1. [Koodous](https://koodous.com) - 膨大な Android サンプルリポジトリに対して静的/動的マルウェア解析を実行し、公開および非公開の Yara ルールと照合します。
1. [Immuniweb](https://www.immuniweb.com/mobile/)。「OWASP Mobile Top 10 Test」「Mobile App Privacy Check」およびアプリケーション権限テストを実行します。無料枠は1日4回のテストで、登録後にレポートが含まれます。
1. [ANY.RUN](https://app.any.run/) - Android アプリ解析をサポートする対話型クラウドベースのマルウェア解析プラットフォーム。限定的な無料プランが利用可能です。
1. ~~[BitBaan](https://malab.bitbaan.com/)~~
1. ~~[AVC UnDroid](http://undroid.av-comparatives.info/)~~
1. ~~[AMAaaS](https://amaaas.com) - 無料の Android マルウェア解析サービス。Android アプリケーション向けの静的および動的解析を特徴とするベアメタルサービス。[MalwarePot](https://malwarepot.com/index.php/AMAaaS) の製品~~。
1. ~~[AppCritique](https://appcritique.boozallen.com) - Android APK をアップロードすると、包括的な無料セキュリティ評価を受け取れます~~
1. ~~[NVISO ApkScan](https://apkscan.nviso.be/) - 2019年10月31日で提供終了~~
1. ~~[Mobile Malware Sandbox](http://www.mobilemalware.com.br/analysis/index_en.php)~~
1. ~~[IBM Security AppScan Mobile Analyzer](https://appscan.bluemix.net/mobileAnalyzer) - 無料ではない~~
1. ~~[Visual Threat](https://www.visualthreat.com/) - Android アプリ解析ツールではなくなりました~~
1. ~~[Tracedroid](http://tracedroid.few.vu.nl/)~~
1. ~~[habo](https://habo.qq.com/) - 10回/日~~
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
1. ~~[Fireeye](https://fireeye.ijinshan.com/)- 最大60MB、15回/日~~
1. ~~[approver](https://approver.talos-sec.com/) - Approver は、Android および iOS アプリ向けの完全自動化されたセキュリティ分析およびリスク評価プラットフォームです。無料ではない。~~
1. ~~[Fraunhofer App-ray](http://app-ray.co/) - ドメイン期限切れ~~
1. ~~[AndroTotal](http://andrototal.org/) - 死~~

### 静的解析ツール

1. [Androwarn](https://github.com/maaaaz/androwarn/) - Android アプリケーションによって開発された潜在的に悪意のある動作を検出し、ユーザーに警告します。
1. [ApkAnalyser](https://github.com/sonyxperiadev/ApkAnalyser)
1. [APKInspector](https://github.com/honeynet/apkinspector/)
1. [Droid Intent Data Flow Analysis for Information Leakage](https://insights.sei.cmu.edu/library/didfail/)
1. [DroidLegacy](https://bitbucket.org/srl/droidlegacy)
1. [FlowDroid](https://blogs.uni-paderborn.de/sse/tools/flowdroid/)
1. [Android Decompiler](https://www.pnfsoftware.com/) – 無料ではない
1. [PSCout](https://security.csl.toronto.edu/pscout/) - 静的解析を用いて Android OS のソースコードから権限仕様を抽出するツール
1. [Amandroid](http://amandroid.sireum.org/)
1. [SmaliSCA](https://github.com/dorneanu/smalisca) - Smali Static Code Analysis
1. [CFGScanDroid](https://github.com/douggard/CFGScanDroid) - CFG を悪意のあるアプリケーションの CFG とスキャンおよび比較します
1. [Madrolyzer](https://github.com/maldroid/maldrolyzer) - C&C、電話番号などの実用的なデータを抽出します。
1. [ConDroid](https://github.com/JulianSchuette/ConDroid) - アプリのシンボリック実行と具体実行を組み合わせて実行します
1. [DroidRA](https://github.com/serval-snt-uni-lu/DroidRA)
1. [RiskInDroid](https://github.com/ClaudiuGeorgiu/RiskInDroid) - アプリの権限に基づいて Android アプリのリスクを計算するツールで、オンラインデモが利用可能です。
1. [SUPER](https://github.com/SUPERAndroidAnalyzer/super) - Secure, Unified, Powerful, and Extensible Rust Android Analyzer
1. [ClassyShark](https://github.com/google/android-classyshark) - 任意の Android 実行可能ファイルを参照して重要な情報を表示できる、スタンドアロンのバイナリ検査ツール。
1. [StaCoAn](https://github.com/vincentcox/StaCoAn) - 開発者、バグバウンティハンター、倫理的ハッカーがモバイルアプリケーションの静的コード解析を実行するのを支援するクロスプラットフォームツール。このツールは、ユーザーインターフェイスにおける使いやすさとグラフィカルなガイダンスに重点を置いて作成されました。
1. [JAADAS](https://github.com/flankerhqd/JAADAS) - Soot および Scala 上に構築された、Android アプリの脆弱性を見つけるための統合的な手続き内および手続き間プログラム解析ツール
1. [Quark-Engine](https://github.com/quark-engine/quark-engine) - 難読化を無視する Android マルウェアスコアリングシステム
1. [One Step Decompiler](https://github.com/b-mueller/apkx) - 怠け者のための Android APK 逆コンパイル
1. [APKLeaks](https://github.com/dwisiswant0/apkleaks) - APK ファイル内の URI、エンドポイント、シークレットをスキャンします。
1. [Mobile Audit](https://github.com/mpast/mobileAudit) - Android APK の静的解析とマルウェア検出を実行する Web アプリケーション。
1. [Detekt](https://github.com/detekt/detekt) - Kotlin 用の静的コード解析
1. [APKdevastate](https://github.com/rafigk2v9c/APKdevastate/) - RAT によって作成された APK ペイロード用の高度な解析ソフトウェア。
1. ~~[Smali CFG generator](https://github.com/EugenioDelfa/Smali-CFGs)~~
1. ~~[Several tools from PSU](http://siis.cse.psu.edu/tools.html)~~
1. ~~[SPARTA](https://www.cs.washington.edu/sparta) - アプリが情報フローセキュリティポリシーを満たす（証明する）ことを検証します。[Checker Framework](https://types.cs.washington.edu/checker-framework/) 上に構築されています~~

### アプリ脆弱性スキャナー

1. [QARK](https://github.com/linkedin/qark/) - LinkedIn の QARK は、アプリ開発者がセキュリティ問題についてアプリをスキャンするためのものです
1. [AndroBugs](https://github.com/AndroBugs/AndroBugs_Framework)
1. [Nogotofail](https://github.com/google/nogotofail)
1. [Ostorlab](https://ostorlab.co) - Ostorlab の無料版は、Android Play ストア、iOS App Store、Huawei AppGallery のアプリをスキャンします
1. ~~[Devknox](https://devknox.io/) - 安全な Android アプリを構築するための IDE プラグイン。現在はメンテナンスされていません。~~

### 動的解析ツール

1. [Android DBI framework](http://www.mulliner.org/blog/blosxom.cgi/security/androiddbiv02.html)
1. [Androl4b](https://github.com/sh4hin/Androl4b)- Android アプリケーション、リバースエンジニアリング、マルウェア解析を評価するための仮想マシン
1. [House](https://github.com/nccgroup/house)- House：Frida を利用した、Python で書かれた Web GUI 付きのランタイムモバイルアプリケーション解析ツールキット。
1. [Mobile-Security-Framework MobSF](https://github.com/MobSF/Mobile-Security-Framework-MobSF) - Mobile Security Framework は、静的解析、動的解析、Web API テストを実行できる、Android/iOS モバイルアプリケーション向けのインテリジェントでオールインワンのオープンソース自動ペネトレーションテストフレームワークです。
1. [Droidbox](https://github.com/pjlantz/droidbox)
1. [Drozer](https://github.com/mwrlabs/drozer)
1. [Xposed](https://forum.xda-developers.com/xposed/xposed-installer-versions-changelog-t2714053) - スタブベースのコードインジェクションと同等ですが、バイナリに一切修正を加えません
1. [Inspeckage](https://github.com/ac-pm/Inspeckage) - Android Package Inspector - API フック、未エクスポートのアクティビティの起動などを備えた動的解析。（Xposed モジュール）
1. [Android Hooker](https://github.com/AndroidHooker/hooker) - 動的 Java コード計装（Substrate フレームワークが必要）
1. [ProbeDroid](https://github.com/ZSShen/ProbeDroid) - 動的 Java コード計装
1. [DECAF](https://github.com/sycurelab/DECAF) - QEMU ベースの Dynamic Executable Code Analysis Framework（DroidScope は現在 DECAF の拡張機能となっています）
1. [CuckooDroid](https://github.com/idanr1986/cuckoo-droid) - Cuckoo サンドボックス向けの Android 拡張
1. [Mem](https://github.com/MobileForensicsResearch/mem) - Android のメモリ解析（root が必要）
1. [Crowdroid](http://www.ida.liu.se/labs/rtslab/publications/2011/spsm11-burguera.pdf) – 実際のツールが見つかりませんでした
1. [AuditdAndroid](https://github.com/nwhusted/AuditdAndroid) – auditd の Android 移植版で、現在は活発な開発が行われていません
1. [Android Security Evaluation Framework](https://code.google.com/p/asef/) - 現在は活発な開発が行われていません
1. [Aurasium](https://github.com/xurubin/aurasium) – バイトコードの書き換えとインプレース参照監視により、Android アプリに対して実用的なセキュリティポリシーを適用します。
1. [Android Linux Kernel modules](https://github.com/strazzere/android-lkms)
1. [StaDynA](https://github.com/zyrikby/StaDynA) - 動的コード更新機能（動的クラスロードとリフレクション）が存在する状況下でセキュリティアプリ解析を支援するシステムです。このツールは Android アプリケーションの静的解析と動的解析を組み合わせて、隠された/更新された動作を明らかにし、その情報で静的解析の結果を拡張します。
1. [DroidAnalytics](https://github.com/zhengmin1989/DroidAnalytics) - 不完全
1. [Vezir Project](https://github.com/oguzhantopgul/Vezir-Project) - モバイルアプリケーションのペネトレーションテストとモバイルマルウェア解析のための仮想マシン
1. [MARA](https://github.com/xtiankisutsa/MARA_Framework) - Mobile Application Reverse Engineering and Analysis Framework
1. [Taintdroid](http://appanalysis.org) - AOSP のコンパイルが必要
1. [ARTist](https://artist.cispa.saarland) - Android アプリと Android の Java ミドルウェア向けの柔軟なオープンソース計装およびハイブリッド解析フレームワークです。Android Runtime（ART）のコンパイラに基づいており、デバイス上でのコンパイル時にコードを変更します。
1. [Android Malware Sandbox](https://github.com/Areizen/Android-Malware-Sandbox)
1. [AndroPyTool](https://github.com/alexMyG/AndroPyTool) - Android APK から静的および動的特徴を抽出するツールです。DroidBox、FlowDroid、Strace、AndroGuard、VirusTotal 解析など、さまざまな有名な Android アプリ解析ツールを組み合わせています。
1. [Runtime Mobile Security (RMS)](https://github.com/m0bilesecurity/RMS-Runtime-Mobile-Security) - ランタイムに Android および iOS アプリを操作するのに役立つ強力な Web インターフェイスです
1. [PAPIMonitor](https://github.com/Dado1513/PAPIMonitor) – PAPIMonitor（Android アプリ用 Python API モニター）は、アプリの実行中にユーザーが選択した API を監視するための Frida ベースの Python ツールです。
1. [Android_application_analyzer](https://github.com/NotSoSecure/android_application_analyzer) - このツールは、ローカルストレージ内の Android アプリケーションの内容を解析するために使用されます。
1. [Decompiler.com](https://www.decompiler.com/) - オンラインの APK および Java 逆コンパイラ
1. [friTap](https://github.com/fkie-cad/friTap)- Frida を使用して SSL/TLS 接続を傍受します。Android 上で TLS キーを抽出し、TLS ペイロードをリアルタイムで PCAP として復号します。
1. [HacknDroid](https://github.com/RaffaDNDM/HacknDroid) - さまざまなモバイルアプリケーションペネトレーションテスト（MAPT）タスクを自動化し、Android デバイスとの対話を容易にするために設計されたツール。
1. [adbsploit](https://github.com/mesquidar/adbsploit) - ADB 経由でデバイスを悪用するためのツール
1. [Brida](https://github.com/federicodotta/Brida) - Burp と Frida の橋渡しとして機能する Burp Suite 拡張機能で、アプリとそのバックエンドサービス/サーバー間で交換されるトラフィックを改ざんしながら、アプリ自身のメソッドを使用および操作できます。
1. [MPT](https://github.com/ByteSnipers/mobile-pentest-toolkit) - MPT（Mobile Pentest Toolkit）は、Android ペネトレーションテストワークフローに欠かせないソリューションです。このツールを使うと、セキュリティタスクを自動化できます。
1. [Andriller](https://github.com/den4uk/andriller) - スマートフォン向けのフォレンジックツール群を備えたソフトウェアユーティリティです。Android デバイスから読み取り専用でフォレンジックに健全な非破壊的な取得を実行します。
1. [Mira](https://github.com/vwww-droid/Mira) - サードパーティの Android および iOS アプリ向けのランタイム保護解析プラットフォームで、AI がホストアプリ側の shell、Java、Native、Frida の機能を活用して環境リスク検出とハードニング検証を行います。
1. [FlutterTap](https://github.com/script-or-script/FlutterTap) - `libflutter.so` 内の BoringSSL 証明書検証をバイパスし、選択した Flutter アプリのトラフィックをプロキシにリダイレクトする Zygisk モジュール。再起動後も持続するため、Frida セッション、ケーブル、リスニングポートは不要です。
1. [Mobix](https://github.com/blackfoxxx/Mobix) - 公認の Android ペンテストラボ：Frida SSL ピンニング/ルート検出バイパスチェーン、自動 IDOR フラグ付き mitmproxy トラフィックキャプチャ、Web ダッシュボード、および 36 のツールを備えた MCP サーバーにより、Claude Code エージェントがスキャンから発見までのループ全体を自身で実行できます。
1. ~~[AppUse](https://appsec-labs.com/AppUse/) – ペネトレーションテスト用にカスタム構築~~
1. ~~[Appie](https://manifestsecurity.com/appie/) - Appie は、Android ペンテスト環境として機能するように事前設定されたソフトウェアパッケージです。完全にポータブルで、USB メモリやスマートフォンに入れて持ち運べます。これは Android アプリケーションセキュリティ評価に必要なすべてのツールのワンストップソリューションであり、既存の仮想マシンに代わる素晴らしい選択肢です。~~
1. ~~[Android Tamer](https://androidtamer.com/) - Android セキュリティ専門家向けの仮想/Live プラットフォーム~~
1. ~~[Android Malware Analysis Toolkit](http://www.mobilemalware.com.br/amat/download.html) - （Linux ディストリビューション）以前は [オンライン解析ツール](http://dunkelheit.com.br/amat/analysis/index_en.php) でした~~
1. ~~[Android Reverse Engineering](https://redmine.honeynet.org/projects/are/wiki) – ARE（Android リバースエンジニアリング）は現在活発な開発が行われていません~~
1. ~~[ViaLab Community Edition](https://www.nowsecure.com/blog/2014/09/09/introducing-vialab-community-edition/)~~
1. ~~[Mercury](https://labs.mwrinfosecurity.com/tools/2012/03/16/mercury/)~~
1. ~~[Cobradroid](https://thecobraden.com/projects/cobradroid/) – マルウェア解析用のカスタムイメージ~~

### リバースエンジニアリング

1. [Smali/Baksmali](https://github.com/JesusFreke/smali) – apk 逆コンパイル
1. [emacs syntax coloring for smali files](https://github.com/strazzere/Emacs-Smali)
1. [vim syntax coloring for smali files](http://codetastrophe.com/smali.vim)
1. [AndBug](https://github.com/swdunlop/AndBug)
1. [Androguard](https://github.com/androguard/androguard) – 強力で、他のツールとよく統合します
1. [Apktool](https://github.com/iBotPeaches/Apktool) – コンパイル/逆コンパイル（smali を使用）に本当に便利
1. [Android Framework for Exploitation](https://github.com/appknox/AFE)
1. [Bypass signature and permission checks for IPCs](https://github.com/iSECPartners/Android-KillPermAndSigChecks)
1. [Android OpenDebug](https://github.com/iSECPartners/Android-OpenDebug) – Cydia Substrate を使用して、デバイス上の任意のアプリケーションをデバッグ可能にします。
1. [Dex2Jar](https://github.com/pxb1988/dex2jar) - dex から jar への変換ツール
1. [Enjarify](https://github.com/google/enjarify) - Google 製の dex から jar への変換ツール
1. [Dedexer](https://sourceforge.net/projects/dedexer/)
1. [Fino](https://github.com/sysdream/fino)
1. [Frida](https://www.frida.re/) - JavaScript を注入してアプリケーションを探索し、そのための [GUI ツール](https://github.com/antojoseph/diff-gui) もあります
1. [Indroid](https://bitbucket.org/aseemjakhar/indroid) – スレッドインジェクションキット
1. [Introspy](https://github.com/iSECPartners/Introspy-Android)
1. [Jad]( https://varaneckas.com/jad/) - Java 逆コンパイラ
1. [JD-GUI](https://github.com/java-decompiler/jd-gui) - Java 逆コンパイラ
1. [CFR](http://www.benf.org/other/cfr/) - Java 逆コンパイラ
1. [Krakatau](https://github.com/Storyyeller/Krakatau) - Java 逆コンパイラ
1. [FernFlower](https://github.com/fesh0r/fernflower) - Java 逆コンパイラ
1. [Redexer](https://github.com/plum-umd/redexer) – apk 操作
1. [Simplify Android deobfuscator](https://github.com/CalebFenton/simplify)
1. [Bytecode viewer](https://github.com/Konloch/bytecode-viewer)
1. [Radare2](https://github.com/radare/radare2)
1. [Jadx](https://github.com/skylot/jadx)
1. [Dwarf](https://github.com/iGio90/Dwarf) - リバースエンジニアリング用の GUI
1. [Andromeda](https://github.com/secrary/Andromeda) - もう一つの基本的なコマンドラインリバースエンジニアリングツール
1. [apk-mitm](https://github.com/shroudedcode/apk-mitm) - Android APK ファイルを HTTPS 検査用に準備する CLI アプリケーション
1. [Noia](https://github.com/0x742/noia) - シンプルな Android アプリケーションサンドボックスファイルブラウザツール
1. [Obfuscapk](https://github.com/ClaudiuGeorgiu/Obfuscapk) — Obfuscapk は、ソースコードを必要とせずに Android アプリを難読化するモジュール式の Python ツールです。
1. [ARMANDroid](https://github.com/Mobile-IoT-Security-Lab/ARMANDroid) - ARMAND（Anti-Repackaging through Multi-pattern, Anti-tampering based on Native Detection）は、ソースコードを必要とせずにロジックボムと AT 検出ノードを apk ファイルに直接埋め込む新しい改ざん防止保護方式です。
1. [MVT (Mobile Verification Toolkit)](https://github.com/mvt-project/mvt) - Android および iOS デバイスの潜在的な侵害を特定するために役立つフォレンジック痕跡の収集プロセスを簡素化および自動化するためのユーティリティ群
1. [Dexmod](https://github.com/google/dexmod) - DEX（Dalvik Executable）ファイル内の Dalvik バイトコードをパッチ適用し、Android アプリケーションの静的解析を支援するためのツール。
1. [odex-patcher](https://github.com/giacomoferretti/odex-patcher) - OAT ファイルをパッチ適用して任意のコードを実行します
1. [PhoneSploit-Pro](https://github.com/AzeemIdrisi/PhoneSploit-Pro) - ADB と Metasploit Framework を使用して Android デバイスをリモートで悪用し、Meterpreter セッションを取得するオールインワンのハッキングツール。
1. [APKLab](https://github.com/APKLab/APKLab) - APK を解析するための VS Code プラグイン
1. ~~[IntentSniffer](https://www.nccgroup.com/us/our-research/intent-sniffer/)~~
1. ~~[Procyon](https://bitbucket.org/mstrobel/procyon/wiki/Java%20Decompiler) - Java 逆コンパイラ~~
1. ~~[Smali viewer](http://blog.avlyun.com/wp-content/uploads/2014/04/SmaliViewer.zip)~~
1. ~~[ZjDroid](https://github.com/BaiduSecurityLabs/ZjDroid)~~, ~~[fork/mirror](https://github.com/yangbean9/ZjDroid)~~
1. ~~[Dare](http://siis.cse.psu.edu/dare/index.html) – .dex から .class への変換ツール~~

### ファジングテスト

1. [Radamsa Fuzzer](https://github.com/anestisb/radamsa-android)
1. [Honggfuzz](https://github.com/google/honggfuzz)
1. [An Android port of the Melkor ELF fuzzer](https://github.com/anestisb/melkor-android)
1. [Media Fuzzing Framework for Android](https://github.com/fuzzing/MFFA)
1. [AndroFuzz](https://github.com/jonmetz/AndroFuzz)
1. [QuarksLab's Android Fuzzing](https://github.com/quarkslab/android-fuzzing)
1. ~~[IntentFuzzer](https://www.nccgroup.trust/us/about-us/resources/intent-fuzzer/)~~

### アプリ再パッケージ検出器

1. [FSquaDRA](https://github.com/zyrikby/FSquaDRA) - アプリのリソースハッシュ比較に基づいて再パッケージ化された Android アプリケーションを検出するツール。

### マーケットクローラー

1. [Google Play crawler (Java)](https://github.com/Akdeniz/google-play-crawler)
1. [Google Play crawler (Python)](https://github.com/egirault/googleplay-api)
1. [Google Play crawler (Node)](https://github.com/dweinstein/node-google-play) - 公式 Google Play ストアからアプリの詳細を取得し、アプリをダウンロードします。
1. [Aptoide downloader (Node)](https://github.com/dweinstein/node-aptoide) - Aptoide サードパーティ Android マーケットからアプリをダウンロードします
1. [Appland downloader (Node)](https://github.com/dweinstein/node-appland) - Appland サードパーティ Android マーケットからアプリをダウンロードします
1. [PlaystoreDownloader](https://github.com/ClaudiuGeorgiu/PlaystoreDownloader) - PlaystoreDownloader は、Google Play ストアから直接 Android アプリケーションをダウンロードするツールです。最初の（1 回限りの）設定後、パッケージ名を指定するだけでアプリをダウンロードできます。
1. [APK Downloader](https://apkcombo.com/apk-downloader/) 特定の Android デバイス構成向けに Play ストアから APK をダウンロードするオンラインサービス
1. ~~[Apkpure](https://apkpure.com/) - オンライン apk ダウンローダー。ダウンロード用の独自のアプリも提供しています。~~

### その他のツール

1. [smalihook](http://androidcracking.blogspot.com/2011/03/original-smalihook-java-source.html)
1. [AXMLPrinter2](http://code.google.com/p/android4me/downloads/detail?name=AXMLPrinter2.jar) - バイナリ XML ファイルを人間が読める XML ファイルに変換します
1. [adb autocomplete](https://github.com/mbrubeck/android-completion)
1. [mitmproxy](https://github.com/mitmproxy/mitmproxy)
1. [dockerfile/androguard](https://github.com/dweinstein/dockerfile-androguard)
1. [Android Vulnerability Test Suite](https://github.com/AndroidVTS/android-vts) - android-vts はデバイスの脆弱性のセットをスキャンします
1. [AppMon](https://github.com/dpnishant/appmon)- AppMon は、ネイティブ macOS、iOS、Android アプリのシステム API 呼び出しを監視および改ざんするための自動化フレームワークです。Frida に基づいています。
1. [Internal Blue](https://github.com/seemoo-lab/internalblue) - Broadcom Bluetooth コントローラーのリバースエンジニアリングに基づいた Bluetooth 実験フレームワーク
1. [Android Mobile Device Hardening](https://github.com/SecTheTech/AMDH) - AMDH はデバイスの設定をスキャンおよび hardening し、権限に基づいて有害なインストール済みアプリをリストします。
1. [NullKia](https://github.com/bad-antics/nullkia) - 18 のメーカーをサポートし、ベースバンド exploit、セルラーセキュリティ、TEE/TrustZone 研究、BootROM 抽出ツールを備えた包括的なモバイルセキュリティフレームワーク。
1. [Firmware Extractor](https://github.com/AndroidDumps/Firmware_extractor) - 与えられたアーカイブをイメージに抽出します
1. [ARMv7 payload that provides arbitrary code execution on MediaTek bootloaders](https://github.com/R0rt1z2/kaeru)
1. [DroidGround](https://github.com/SECFORCE/droidground) - Android CTF チャレンジのための柔軟なプレイグラウンド
1. [sundaysec/Android-Exploits](https://github.com/sundaysec/Android-Exploits) - Android のエクスプロイトとハックのコレクション
1. [Spectre](https://github.com/thomasbuilds/Spectre) - 偵察および攻撃機能を備えた無線周波数スキャナー。デバイス上でセルラー、Wi-Fi、Bluetooth LE、GNSS を監視し、BLE GATT インスペクター、iBeacon ブロードキャスター、ローカルネットワーク検出を備えています。
1. ~~[Android Device Security Database](https://www.android-device-security.org/client/datatable) - Android デバイスのセキュリティ機能のデータベース~~
1. ~~[Opcodes table for quick reference](http://ww38.xchg.info/corkami/opcodes_tables.pdf)~~
1. ~~[APK-Downloader](http://codekiem.com/2012/02/24/apk-downloader/)~~ - 現在は死んでいるようです
1. ~~[Dalvik opcodes](http://pallergabor.uw.hu/androidblog/dalvik_opcodes.html)~~

### 練習用の脆弱なアプリケーション

1. [Damn Insecure Vulnerable Application (DIVA)](https://github.com/payatu/diva-android)
1. [Vuldroid](https://github.com/jaiswalakshansh/Vuldroid)
1. [ExploitMe Android Labs](http://securitycompass.github.io/AndroidLabs/setup.html)
1. [GoatDroid](https://github.com/jackMannino/OWASP-GoatDroid-Project)
1. [Android InsecureBank](https://github.com/dineshshetty/Android-InsecureBankv2)
1. [Insecureshop](https://github.com/optiv/insecureshop)
1. [Oversecured Vulnerable Android App (OVAA)](https://github.com/oversecured/ovaa)
1. [Injured Android - CTF](https://github.com/B3nac/InjuredAndroid)
1. [Damn Vulnerable Mobile App (DVMA)](https://github.com/cpeoples/dvma)

## 学術/研究/出版物/書籍

### 研究論文

1. [Exploit Database](https://www.exploit-db.com/papers/)
1. [Android security-related presentations](https://github.com/jacobsoo/AndroidSlides)
1. [A good collection of static analysis papers](https://tthtlc.wordpress.com/2011/09/01/static-analysis-of-android-applications/)

### 書籍

1. [SEI CERT Android Secure Coding Standard](https://wiki.sei.cmu.edu/confluence/display/android/Android+Secure+Coding+Standard)

### その他

1. [OWASP Mobile Security Testing Guide Manual](https://github.com/OWASP/owasp-mstg)
1. [doridori/Android-Security-Reference](https://github.com/doridori/Android-Security-Reference)
1. [android app security checklist](https://github.com/b-mueller/android_app_security_checklist)
1. [Mobile App Pentest Cheat Sheet](https://github.com/tanprathan/MobileApp-Pentest-Cheatsheet)
1. [Android Reverse Engineering 101 by Daniele Altomare (Web Archive link)](https://web.archive.org/web/20180721134044/http://www.fasteque.com:80/android-reverse-engineering-101-part-1/)
1. ~~[Mobile Security Reading Room](https://mobile-security.zeef.com) - モバイルペネトレーションテスト、モバイルマルウェア、モバイルフォレンジック、およびあらゆる種類のモバイルセキュリティ関連トピックに関する、分類された技術的な読み物を含む読書室~~

## エクスプロイト/脆弱性/バグ

### リスト

1. [Android Security Bulletins](https://source.android.com/security/bulletin/)
1. [Android's reported security vulnerabilities](https://www.cvedetails.com/vulnerability-list/vendor_id-1224/product_id-19997/Google-Android.html)
1. [OWASP Mobile Top 10 2016](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10)
1. [Exploit Database](https://www.exploit-db.com/search/?action=search&q=android) - 検索をクリック
1. [Vulnerability Google Doc](https://docs.google.com/spreadsheet/pub?key=0Am5hHW4ATym7dGhFU1A4X2lqbUJtRm1QSWNRc3E0UlE&single=true&gid=0&output=html)
1. [Google Android Security Team’s Classifications for Potentially Harmful Applications (Malware)](https://source.android.com/security/reports/Google_Android_Security_PHA_classifications.pdf)
1. ~~[Android Devices Security Patch Status](https://kb.androidtamer.com/Device_Security_Patch_tracker/)~~

### マルウェア

1. [androguard - Database Android Malware wiki](https://code.google.com/p/androguard/wiki/DatabaseAndroidMalwares)
1. [Android Malware GitHub repo](https://github.com/ashishb/android-malware)
1. [Android Malware Genome Project](http://www.malgenomeproject.org/) - 49 の異なるマルウェアファミリーに分類された 1260 のマルウェアサンプルを含み、研究目的で無料です。
1. [Contagio Mobile Malware Mini Dump](http://contagiominidump.blogspot.com)
1. [Drebin](https://www.sec.tu-bs.de/~danarp/drebin/)
1. [Hudson Rock](https://www.hudsonrock.com/threat-intelligence-cybercrime-tools) - 特定の APK パッケージが Infostealer マルウェア攻撃で侵害されたかどうかを示すことができる無料のサイバー犯罪インテリジェンスツールセット。
1. [Kharon Malware Dataset](http://kharon.gforge.inria.fr/dataset/) - リバースエンジニアリングおよび文書化された 7 つのマルウェア
1. [Android Adware and General Malware Dataset](https://www.unb.ca/cic/datasets/android-adware.html)
1. [AndroZoo](https://androzoo.uni.lu/) - AndroZoo は、公式の Google Play アプリ市場を含むいくつかのソースからの、成長し続ける Android アプリケーションコレクションです。
1. ~~[Android PRAGuard Dataset](http://pralab.diee.unica.it/en/AndroidPRAGuardDataset) - このデータセットには、MalGenome および Contagio Minidump データセットを 7 つの異なる難読化手法で難読化して得られた 10479 のサンプルが含まれています。~~
1. ~~[Admire](http://admire.necst.it/)~~

### バグ報奨金プログラム

1. [Android Security Reward Program](https://www.google.com/about/appsecurity/android-rewards/)

### セキュリティ問題を報告する方法

1. [Android - reporting security issues](https://source.android.com/security/overview/updates-resources.html#report-issues)
1. [Android Reports and Resources](https://github.com/B3nac/Android-Reports-and-Resources) - 公開された Android Hackerone レポートおよびその他のリソースのリスト

## コントリビューション

あなたの貢献をいつでも歓迎します！

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

このリポジトリは [10 以上の論文](https://scholar.google.com/scholar?q=github.com%2Fashishb%2Fandroid-security-awesome) で引用されています
