# Awesome CTF [![Build Status](https://travis-ci.org/apsdehal/awesome-ctf.svg?branch=master)](https://travis-ci.org/apsdehal/awesome-ctf) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[Capture The Flag](https://en.wikipedia.org/wiki/Capture_the_flag#Computer_security) (CTF) フレームワーク、ライブラリ、リソース、ソフトウェア、チュートリアルの厳選されたリスト。このリストは、初心者だけでなく熟練した CTF プレーヤーも CTF に関連するすべてを 1 か所で見つけられるようにすることを目的としています。

### 貢献

まずは[貢献ガイドライン](https://github.com/apsdehal/ctf-tools/blob/master/CONTRIBUTING.md)をざっと見てください。

#### _ここに掲載されていないツールをご存じでしたら、ぜひプルリクエストを作成してください。_

### 目的

CTFで使用するツールを集めてすべて覚えるには時間がかかります。このリポジトリは、これらの分散したツールをすべて 1 か所に保管するのに役立ちます。

### 目次

- [Awesome CTF](#awesome-ctf)
  - [作成](#create)
    - [フォレンジック](#forensics)
    - [プラットフォーム](#platforms)
    - [ステガノグラフィ](#steganography)
    - [Web](#web)
  - [攻略](#solve)
    - [攻撃](#attacks)
    - [総当たりツール](#bruteforcers)
    - [暗号](#crypto)
    - [エクスプロイト](#exploits)
    - [フォレンジック](#forensics-1)
    - [ネットワーク](#networking)
    - [リバースエンジニアリング](#reversing)
    - [サービス](#services)
    - [ステガノグラフィ](#steganography-1)
    - [Web](#web-1)

- [リソース](#resources)
  - [オペレーティングシステム](#operating-systems)
  - [スターターパック](#starter-packs)
  - [チュートリアル](#tutorials)
  - [ウォーゲーム](#wargames)
  - [Webサイト](#websites)
  - [Wiki](#wikis)
  - [Write-up集](#writeups-collections)


# 作成 <span id="create"></span>

*CTF チャレンジの作成に使用されるツール*

- [Kali Linux CTF Blueprints](https://www.packtpub.com/eu/networking-and-servers/kali-linux-ctf-blueprints) - 独自のキャプチャ ザ フラッグ チャレンジの構築、テスト、カスタマイズに関するオンライン ブック。


## フォレンジック <span id="forensics"></span>

*フォレンジックチャレンジの作成に使用されるツール*

- [Dnscat2](https://github.com/iagox86/dnscat2) - DNS を介した通信をホストします。
- [Kroll Artifact Parser and Extractor (KAPE)](https://learn.duffandphelps.com/kape) - トリアージ プログラム。
- [Magnet AXIOM](https://www.magnetforensics.com/downloadaxiom) - アーティファクト中心の DFIR ツール。
- [Registry Dumper](http://www.kahusecurity.com/posts/registry_dumper_find_and_dump_hidden_registry_keys.html) - レジストリをダンプします。

## プラットフォーム <span id="platforms"></span>

*CTF のホストに使用できるプロジェクト*

- [CTFd](https://github.com/isislab/CTFd) - ニューヨーク大学タンドンの ISISLab からの危険なスタイルの CTF をホストするプラットフォーム。
- [echoCTF.RED](https://github.com/echoCTF/echoCTF.RED) - 独自の CTF インフラストラクチャを開発、展開、保守します。
- [FBCTF](https://github.com/facebook/fbctf) - Facebook のキャプチャ ザ フラッグ コンテストを主催するプラットフォーム。
- [Haaukins](https://github.com/aau-network-security/haaukins) - セキュリティ教育向けの、非常に利用しやすく自動化された仮想化プラットフォーム。
- [HackTheArch](https://github.com/mcpa-stlouis/hack-the-arch) - CTF スコアリング プラットフォーム。
- [Mellivora](https://github.com/Nakiami/mellivora) - PHP で書かれた CTF エンジン。
- [MotherFucking-CTF](https://github.com/andreafioraldi/motherfucking-ctf) - CTFをホストするための高機能で軽量なプラットフォーム。JavaScriptは不要。
- [NightShade](https://github.com/UnrealAkama/NightShade) - シンプルなセキュリティ CTF フレームワーク。
- [OpenCTF](https://github.com/easyctf/openctf) - CTF 箱入り。最小限のセットアップが必要です。
- [PicoCTF](https://github.com/picoCTF/picoCTF) - picoCTF を実行するために使用されるプラットフォーム。あらゆる CTF をホストするための優れたフレームワーク。
- [PyChallFactory](https://github.com/pdautry/py_chall_factory) - 危険な CTF チャレンジを作成/管理/パッケージ化するための小さなフレームワーク。
- [RootTheBox](https://github.com/moloch--/RootTheBox) - ハッカーのゲーム (CTF スコアボード & ゲーム マネージャー)。
- [Scorebot](https://github.com/legitbs/scorebot) - Legitbs (Defcon) による CTF 用プラットフォーム。
- [SecGen](https://github.com/cliffe/SecGen) - セキュリティ シナリオ ジェネレーター。脆弱な仮想マシンをランダムに作成します。

## ステガノグラフィ <span id="steganography"></span>

*ステゴチャレンジの作成に使用するツール*

ステガノグラフィーのソルブセクションをチェックしてください。

## Web <span id="web"></span>

*Web チャレンジの作成に使用するツール*

*JavaScript難読化ツール*

- [Metasploit JavaScript Obfuscator](https://github.com/rapid7/metasploit-framework/wiki/How-to-obfuscate-JavaScript-in-Metasploit)
- [Uglify](https://github.com/mishoo/UglifyJS)


# 攻略 <span id="solve"></span>

*CTF の課題を解決するために使用されるツール*

## 攻撃 <span id="attacks"></span>

*各種攻撃に使用されるツール*

- [Bettercap](https://github.com/bettercap/bettercap) - MITM (中間者) 攻撃を実行するフレームワーク。
- [Yersinia](https://github.com/tomac/yersinia) - レイヤ 2 上のさまざまなプロトコルを攻撃します。

## 暗号 <span id="crypto"></span>

*暗号化チャレンジの解決に使用されるツール*

- [CyberChef](https://gchq.github.io/CyberChef) - データを分析およびデコードするための Web アプリ。
- [FeatherDuster](https://github.com/nccgroup/featherduster) - 自動化されたモジュール式暗号解析ツール。
- [Hash Extender](https://github.com/iagox86/hash_extender) - ハッシュ長拡張攻撃を実行するためのユーティリティ ツール。
- [padding-oracle-attacker](https://github.com/KishanBagaria/padding-oracle-attacker) - パディングオラクル攻撃を実行する CLI ツール。
- [PkCrack](https://www.unix-ag.uni-kl.de/~conrad/krypto/pkcrack.html) - PkZip 暗号化を破るためのツール。
- [QuipQuip](https://quipqiup.com) - 置換暗号またはヴィジェネレ暗号 (鍵なし) を解読するためのオンライン ツール。
- [RSACTFTool](https://github.com/Ganapati/RsaCtfTool) - さまざまな攻撃から RSA 秘密鍵を回復するツール。
- [RSATool](https://github.com/ius/rsatool) - p と q の情報を使用して秘密鍵を生成します。
- [XORTool](https://github.com/hellman/xortool) - マルチバイトXOR暗号を解析するツールです。

## 総当たりツール <span id="bruteforcers"></span>

*さまざまな種類の総当たり攻撃に使用されるツール (パスワードなど)*

- [Hashcat](https://hashcat.net/hashcat/) - パスワード クラッカー
- [Hydra](https://tools.kali.org/password-attacks/hydra) - 多数の攻撃プロトコルをサポートする並列化されたログイン クラッカー
- [John The Jumbo](https://github.com/magnumripper/JohnTheRipper) - John the Ripper のコミュニティ拡張バージョン。
- [John The Ripper](http://www.openwall.com/john/) - パスワード クラッカー。
- [Nozzlr](https://github.com/intrd/nozzlr) - Nozzlr は、真にモジュール式でスクリプトに適したブルートフォース フレームワークです。
- [Ophcrack](http://ophcrack.sourceforge.net/) - レインボー テーブルに基づく Windows パスワード クラッカー。
- [Patator](https://github.com/lanjelot/patator) - Patator は、モジュール式設計の多目的ブルートフォーサーです。
- [Turbo Intruder](https://portswigger.net/research/turbo-intruder-embracing-the-billion-request-attack) - 大量の HTTP リクエストを送信するための Burp Suite 拡張機能

## 脆弱性の悪用 <span id="exploits"></span>

*エクスプロイトの課題を解決するために使用されるツール*

- [DLLInjector](https://github.com/OpenSecurityResearch/dllinjector) - プロセスに DLL を挿入します。
- [libformatstr](https://github.com/hellman/libformatstr) - フォーマット文字列の利用を簡素化します。
- [Metasploit](http://www.metasploit.com/) - ペネトレーションテストソフトウェア。
  - [チートシート](https://www.comparitech.com/net-admin/metasploit-cheat-sheet/)
- [one_gadget](https://github.com/david942j/one_gadget) -  1 つのガジェット `execve('/bin/sh', NULL, NULL)` 呼び出しを検索するツール。
  - `gem install one_gadget`
- [Pwntools](https://github.com/Gallopsled/pwntools) - エクスプロイトを作成するための CTF フレームワーク。
- [Qira](https://github.com/BinaryAnalysisPlatform/qira) - QEMU インタラクティブ ランタイム アナライザー。
- [ROP Gadget](https://github.com/JonathanSalwan/ROPgadget) - ROP 活用のためのフレームワーク。
- [V0lt](https://github.com/P1kachu/v0lt) - セキュリティ CTF ツールキット。

## フォレンジック <span id="forensics-1"></span>

*フォレンジックの課題を解決するために使用されるツール*

- [Aircrack-Ng](http://www.aircrack-ng.org/) - 802.11 WEP および WPA-PSK キーをクラックします。
  - `apt-get install aircrack-ng`
- [Audacity](http://sourceforge.net/projects/audacity/) - サウンド ファイル (mp3、m4a など) を分析します。
  - `apt-get install audacity`
- [Bkhive and Samdump2](http://sourceforge.net/projects/ophcrack/files/samdump2/) - SYSTEM ファイルと SAM ファイルをダンプします。
  - `apt-get install samdump2 bkhive`
- [CFF Explorer](http://www.ntcore.com/exsuite.php) - PE エディター。
- [Creddump](https://github.com/moyix/creddump) - Windows 資格情報をダンプします。
- [DVCS Ripper](https://github.com/kost/dvcs-ripper) - Web アクセス可能な (分散型) バージョン管理システムをリッピングします。
- [Exif Tool](http://www.sno.phy.queensu.ca/~phil/exiftool/) - ファイルのメタデータの読み取り、書き込み、編集。
- [Extundelete](http://extundelete.sourceforge.net/) - マウント可能なイメージから失われたデータを回復するために使用されます。
- [Fibratus](https://github.com/rabbitstack/fibratus) - Windows カーネルの探索とトレースのためのツール。
- [Foremost](http://foremost.sourceforge.net/) - ヘッダーを使用して特定の種類のファイルを抽出します。
  - `apt-get install foremost`
- [Fsck.ext4](http://linux.die.net/man/8/fsck.ext3) - 破損したファイルシステムを修復するために使用されます。
- [Malzilla](http://malzilla.sourceforge.net/) - マルウェアハンティングツール。
- [NetworkMiner](http://www.netresec.com/?page=NetworkMiner) - ネットワークフォレンジック分析ツール。
- [PDF Streams Inflater](http://malzilla.sourceforge.net/downloads.html) - PDF ファイルに圧縮された zlib ファイルを検索して抽出します。
- [Pngcheck](http://www.libpng.org/pub/png/apps/pngcheck.html) - PNG の整合性を検証し、すべてのチャンクレベルの情報を人間が読める形式でダンプします。
  - `apt-get install pngcheck`
- [ResourcesExtract](http://www.nirsoft.net/utils/resources_extract.html) - exe からさまざまなファイルタイプを抽出します。
- [Shellbags](https://github.com/williballenthin/shellbags) - NT\_USER.dat ファイルを調査します。
- [Snow](https://sbmlabs.com/notes/snow_whitespace_steganography_tool) - ホワイトスペースステガノグラフィーツール。
- [USBRip](https://github.com/snovvcrash/usbrip) - GNU/Linux 上で USB デバイスのアーティファクト (USB イベントの履歴) を追跡するためのシンプルな CLI フォレンジック ツール。
- [Volatility](https://github.com/volatilityfoundation/volatility) - メモリ ダンプを調査します。
- [Wireshark](https://www.wireshark.org) - pcap または pcapng ファイルの分析に使用されます

*レジストリビューアー*
- [OfflineRegistryView](https://www.nirsoft.net/utils/offline_registry_view.html) - 外部ドライブからオフライン レジストリ ファイルを読み取り、.reg ファイル形式で目的のレジストリ キーを表示できる Windows 用のシンプルなツール。
- [Registry Viewer®](https://accessdata.com/product-download/registry-viewer-2-0-0) - Windows レジストリを表示するために使用されます。

## ネットワーク <span id="networking"></span>

*ネットワークの課題を解決するために使用されるツール*

- [Masscan](https://github.com/robertdavidgraham/masscan) - 大規模 IP ポート スキャナ、TCP ポート スキャナ。
- [Monit](https://linoxide.com/monitoring-2/monit-linux/) - ネットワーク上のホスト (およびその他のネットワーク以外のアクティビティ) をチェックする Linux ツール。
- [Nipe](https://github.com/GouveaHeitor/nipe) - Nipe は Tor ネットワークをデフォルト ゲートウェイにするスクリプトです。
- [Nmap](https://nmap.org/) - ネットワーク検出とセキュリティ監査のためのオープンソース ユーティリティ。
- [Wireshark](https://www.wireshark.org/) - ネットワークダンプを分析します。
  - `apt-get install wireshark`
- [Zeek](https://www.zeek.org) - オープンソースのネットワーク セキュリティ モニター。
- [Zmap](https://zmap.io/) - オープンソースのネットワーク スキャナー。

## リバースエンジニアリング <span id="reversing"></span>

*逆転の課題を解決するために使用されるツール*

- [Androguard](https://github.com/androguard/androguard) - Android アプリケーションのリバース エンジニアリング。
- [Angr](https://github.com/angr/angr) - プラットフォームに依存しないバイナリ分析フレームワーク。
- [Apk2Gold](https://github.com/lxdvs/apk2gold) - さらに別の Android デコンパイラ。
- [ApkTool](http://ibotpeaches.github.io/Apktool/) - Android デコンパイラ。
- [Barf](https://github.com/programa-stic/barf-project) - バイナリ解析およびリバース エンジニアリング フレームワーク。
- [Binary Ninja](https://binary.ninja/) - バイナリ解析フレームワーク。
- [BinUtils](http://www.gnu.org/software/binutils/binutils.html) - バイナリ ツールのコレクション。
- [BinWalk](https://github.com/devttys0/binwalk) - ファームウェア イメージを分析、リバース エンジニアリング、抽出します。
- [Boomerang](https://github.com/BoomerangDecompiler/boomerang) - x86/SPARC/PowerPC/ST-20 バイナリを C に逆コンパイルします。
- [ctf_import](https://github.com/docileninja/ctf_import) – run basic functions from stripped binaries cross platform.
- [cwe_checker](https://github.com/fkie-cad/cwe_checker) - cwe_checker は、バイナリ実行可能ファイル内の脆弱なパターンを検出します。
- [demovfuscator](https://github.com/kirschju/demovfuscator) - movfuscated バイナリ用の開発中の難読化解除ツール。
- [Frida](https://github.com/frida/) - 動的コード挿入。
- [GDB](https://www.gnu.org/software/gdb/) - GNU プロジェクト デバッガ。
- [GEF](https://github.com/hugsy/gef) - GDB プラグイン。
- [Ghidra](https://ghidra-sre.org/) - リバース エンジニアリング ツールのオープンソース スイート。  IDA Proに似ています。
- [Hopper](http://www.hopperapp.com/) - OSXおよびLinux用のリバースエンジニアリングツール(逆アセンブラ)。
- [IDA Pro](https://www.hex-rays.com/products/ida/) - 最も使用されているリバース ソフトウェア。
- [Jadx](https://github.com/skylot/jadx) - Android ファイルを逆コンパイルします。
- [Java Decompilers](http://www.javadecompilers.com) - Java および Android APK 用のオンライン逆コンパイラー。
- [Krakatau](https://github.com/Storyyeller/Krakatau) - Java デコンパイラおよび逆アセンブラ。
- [Objection](https://github.com/sensepost/objection) - ランタイムモバイル探索。
- [PEDA](https://github.com/longld/peda) - GDB プラグイン (Python2.7 のみ)。
- [Pin](https://software.intel.com/en-us/articles/pin-a-dynamic-binary-instrumentation-tool) - Intel による動的バイナリ インストルメンテーション ツール。
- [PINCE](https://github.com/korcankaraokcu/PINCE) - GDB フロントエンド/リバース エンジニアリング ツール。ゲームのハッキングと自動化に重点を置いています。
- [PinCTF](https://github.com/ChrisTheCoolHut/PinCTF) - サイドチャネル解析にインテルピンを使用するツール。
- [Plasma](https://github.com/joelpx/plasma) - 色付きの構文でインデントされた疑似コードを生成できる、x86/ARM/MIPS 用の対話型逆アセンブラ。
- [Pwndbg](https://github.com/pwndbg/pwndbg) - GDB を簡単にハッキングするためのユーティリティ スイートを提供する GDB プラグイン。
- [radare2](https://github.com/radare/radare2) - ポータブルな逆転フレームワーク。
- [Triton](https://github.com/JonathanSalwan/Triton/) - 動的バイナリ分析 (DBA) フレームワーク。
- [Uncompyle](https://github.com/gstarnberger/uncompyle) - Python 2.7 バイナリ (.pyc) を逆コンパイルします。
- [WinDbg](http://www.windbg.org/) - Microsoft から配布されている Windows デバッガ。
- [Xocopy](http://reverse.lostrealm.com/tools/xocopy.html) - 実行可能ファイルを実行権限でコピーできるプログラムですが、読み取り権限はありません。
- [Z3](https://github.com/Z3Prover/z3) - Microsoft Research の定理証明者。

*JavaScript 難読化解除ツール*

- [Detox](http://relentless-coding.org/projects/jsdetox/install) - Javascript マルウェア分析ツール。
- [Revelo](http://www.kahusecurity.com/posts/revelo_javascript_deobfuscator.html) - 難読化された Javascript コードを分析します。

*SWF解析ツール*
- [RABCDAsm](https://github.com/CyberShadow/RABCDAsm) - ActionScript 3 アセンブラ/逆アセンブラを含むユーティリティのコレクション。
- [Swftools](http://www.swftools.org/) - SWF ファイルを操作するためのユーティリティのコレクション。
- [Xxxswf](https://bitbucket.org/Alexander_Hanel/xxxswf) -  Flash ファイルを分析するための Python スクリプト。

## サービス <span id="services"></span>

*インターネットで利用できるさまざまな便利なサービス*

- [CSWSH](http://cow.cat/cswsh.html) - クロスサイト WebSocket ハイジャック テスター。
- [Request Bin](https://requestbin.com/) - 特定の URL への http リクエストを検査できます。

## ステガノグラフィ <span id="steganography-1"></span>

*ステガノグラフィーの課題を解決するために使用されるツール*

- [AperiSolve](https://aperisolve.fr/) - Aperi'Solve は画像のレイヤー解析を行うプラットフォームです（オープンソース）。
- [Convert](http://www.imagemagick.org/script/convert.php) - 画像を白黒形式に変換し、フィルターを適用します。
- [Exif](http://manpages.ubuntu.com/manpages/trusty/man1/exif.1.html) - JPEG ファイル内の EXIF 情報を表示します。
- [Exiftool](https://linux.die.net/man/1/exiftool) - ファイル内のメタ情報の読み取りと書き込み。
- [Exiv2](http://www.exiv2.org/manpage.html) - 画像メタデータ操作ツール。
- [Image Steganography](https://sourceforge.net/projects/image-steg/) - オプションの暗号化を使用して、画像にテキストとファイルを埋め込みます。使いやすいUI。
- [Image Steganography Online](https://incoherency.co.uk/image-steganography) - これは、他の画像の下位「ビット」内の画像をステガノグラフィー的に隠すためのクライアント側 Javascript ツールです
- [ImageMagick](http://www.imagemagick.org/script/index.php) - 画像を操作するためのツール。
- [Outguess](https://www.freebsd.org/cgi/man.cgi?query=outguess+&apropos=0&sektion=0&manpath=FreeBSD+Ports+5.1-RELEASE&format=html) - ユニバーサルステガノグラフィーツール。
- [Pngtools](https://packages.debian.org/sid/pngtools) - PNGに関する各種解析に。
  - `apt-get install pngtools`
- [SmartDeblur](https://github.com/Y-Vladimir/SmartDeblur) - 焦点のぼけた画像をぼかし、修正するために使用します。
- [Steganabara](https://www.openhub.net/p/steganabara) -  Java で書かれたステガノ分析用ツール。
- [SteganographyOnline](https://stylesuxx.github.io/steganography/) - オンライン ステガノグラフィー エンコーダーおよびデコーダー。
- [Stegbreak](https://linux.die.net/man/1/stegbreak) - JPG 画像に対してブルートフォース辞書攻撃を開始します。
- [StegCracker](https://github.com/Paradoxis/StegCracker) - ファイル内の隠されたデータを明らかにするステガノグラフィー総当たりユーティリティ。
- [stegextract](https://github.com/evyatarmeged/stegextract) - 画像内の隠しファイルとテキストを検出します。
- [Steghide](http://steghide.sourceforge.net/) - 各種画像のデータを非表示にします。
- [StegOnline](https://georgeom.net/StegOnline/upload) - ビット内に隠されたファイルの隠蔽/暴露など、幅広い画像ステガノグラフィー操作を実行します (オープンソース)。
- [Stegsolve](http://www.caesum.com/handbook/Stegsolve.jar) - さまざまなステガノグラフィー技術を画像に適用します。
- [Zsteg](https://github.com/zed-0xff/zsteg/) - PNG/BMP 解析。

## Web <span id="web-1"></span>

*Web の課題解決に使用されるツール*

- [BurpSuite](https://portswigger.net/burp) - Web サイトのセキュリティをテストするためのグラフィカル ツール。
- [Commix](https://github.com/commixproject/commix) - 自動化されたオールインワン OS コマンド インジェクションおよび悪用ツール。
- [Hackbar](https://addons.mozilla.org/en-US/firefox/addon/hackbartool/) - Web を簡単に活用できる Firefox アドオン。
- [OWASP ZAP](https://www.owasp.org/index.php/Projects/OWASP_Zed_Attack_Proxy_Project) - HTTP 要求と応答を再生、デバッグ、ファジングするためのプロキシのインターセプト
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) - ネットワーク リクエストをデバッグするための Chrome のアドオン。
- [Raccoon](https://github.com/evyatarmeged/Raccoon) - 偵察および脆弱性スキャンのための高性能攻撃的セキュリティ ツール。
- [SQLMap](https://github.com/sqlmapproject/sqlmap) - 自動 SQL インジェクションおよびデータベース引き継ぎツール。
  ```pip install sqlmap```
- [W3af](https://github.com/andresriancho/w3af) -  Web アプリケーションの攻撃と監査のフレームワーク。
- [XSSer](http://xsser.sourceforge.net/) - 自動 XSS テスター。


# リソース <span id="resources"></span>

*CTF について知る場所*

## オペレーティングシステム <span id="operating-systems"></span>

*侵入テストおよびセキュリティ ラボのオペレーティング システム*

- [Android Tamer](https://androidtamer.com/) - Debian に基づいています。
- [BackBox](https://backbox.org/) - Ubuntu ベース。
- [BlackArch Linux](https://blackarch.org/) - Arch Linux ベース。
- [Fedora Security Lab](https://labs.fedoraproject.org/security/) - Fedora ベース。
- [Kali Linux](https://www.kali.org/) - Debian に基づいています。
- [Parrot Security OS](https://www.parrotsec.org/) - Debian に基づいています。
- [Pentoo](http://www.pentoo.ch/) - Gentoo に基づいています。
- [URIX OS](http://urix.us/) - openSUSE に基づいています。
- [Wifislax](http://www.wifislax.com/) - Slackware に基づいています。

*マルウェア アナリストとリバース エンジニアリング*

- [Flare VM](https://github.com/fireeye/flare-vm/) - Windows ベース。
- [REMnux](https://remnux.org/) - Debian に基づいています。

## スターターパック <span id="starter-packs"></span>

*インストーラー スクリプト、便利なツールのコレクション*

- [CTF Tools](https://github.com/zardus/ctf-tools) - さまざまなセキュリティ調査ツールをインストールするためのセットアップ スクリプトのコレクション。
- [LazyKali](https://github.com/jlevitsk/lazykali) - ツールのインストールと構成を簡素化する LazyKali の 2016 年の更新。

## チュートリアル <span id="tutorials"></span>

*CTF の遊び方を学ぶチュートリアル*

- [CTF Field Guide](https://trailofbits.github.io/ctf/) - Trails of Bits による実践ガイド。
- [CTF Resources](http://ctfs.github.io/resources/) - コミュニティが管理する入門ガイド。
- [How to Get Started in CTF](https://www.endgame.com/blog/how-get-started-ctf) - Endgame による CTF 初心者向けの短いガイドライン
- [Intro. to CTF Course](https://www.hoppersroppers.org/courseCTF.html) - 初心者にフォレンジック、暗号化、Web-Ex の基礎を教える無料コース。
- [IppSec](https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA) - 一般的な CTF プラットフォームのビデオ チュートリアルとウォークスルー。
- [LiveOverFlow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w) - エクスプロイトに関するビデオ チュートリアル。
- [MIPT CTF](https://github.com/xairy/mipt-ctf) - CTF の初心者向けの小さなコース (ロシア語)。


## セキュリティ演習ゲーム <span id="wargames"></span>

*常時参加できるオンライン CTF*

- [Backdoor](https://backdoor.sdslabs.co/) - SDSLabs が提供するセキュリティプラットフォーム。
- [Crackmes](https://crackmes.one/) - リバース エンジニアリングの課題。
- [CryptoHack](https://cryptohack.org/) - 楽しい暗号化チャレンジ。
- [echoCTF.RED](https://echoctf.red/) - さまざまな攻撃対象を備えたオンライン CTF。
- [Exploit Exercises](https://exploit-exercises.lains.space/) - さまざまなコンピューター セキュリティの問題を学習するためのさまざまな VM。
- [Exploit.Education](http://exploit.education) - さまざまなコンピューター セキュリティの問題を学習するためのさまざまな VM。
- [Gracker](https://github.com/Samuirai/gracker) - 学習曲線が遅いバイナリの課題と、各レベルの書き込み。
- [Hack The Box](https://www.hackthebox.eu) - あらゆる種類のセキュリティ愛好家向けの毎週の CTF。
- [Hack This Site](https://www.hackthissite.org/) - ハッカーの訓練場。 HackerOne の
- [Hacker101](https://www.hacker101.com/) - CTF
- [Hacking-Lab](https://hacking-lab.com/) - 倫理的ハッキング、コンピューター ネットワーク、セキュリティ チャレンジ プラットフォーム。
- [Hone Your Ninja Skills](https://honeyourskills.ninja/) - 基礎から始めるWebチャレンジ。
- [IO](http://io.netgarage.org/) - バイナリ チャレンジのウォーゲーム。
- [Microcorruption](https://microcorruption.com) - 組み込みセキュリティ CTF。
- [Over The Wire](http://overthewire.org/wargames/) - ウォーゲームは OvertheWire コミュニティによって管理されています。
- [PentesterLab](https://pentesterlab.com/) - さまざまな VM およびオンライン チャレンジ (有料)。
- [PicoCTF](https://2019game.picoctf.com) - 一年中使えるCTFゲーム。毎年恒例の picoCTF コンテストからの質問。
- [PWN Challenge](http://pwn.eonew.cn/) - バイナリ搾取ウォーゲーム。
- [Pwnable.kr](http://pwnable.kr/) - Pwn ゲーム。
- [Pwnable.tw](https://pwnable.tw/) - バイナリウォーゲーム。
- [Pwnable.xyz](https://pwnable.xyz/) - バイナリ搾取ウォーゲーム。
- [Reversin.kr](http://reversing.kr/) - 逆転チャレンジ。
- [Ringzer0Team](https://ringzer0team.com/) - Ringzer0 チーム オンライン CTF。
- [Root-Me](https://www.root-me.org/) - ハッキングと情報セキュリティの学習プラットフォーム。
- [ROP Wargames](https://github.com/xelenonz/game) - ROP ウォーゲーム。
- [SANS HHC](https://holidayhackchallenge.com/past-challenges/) - ホリデーをテーマにしたチャレンジ
は毎年リリースされ、SANS によって保守されています。
- [SmashTheStack](http://smashthestack.org/) - SmashTheStack コミュニティによって管理されているさまざまなウォーゲーム。
- [Viblo CTF](https://ctf.viblo.asia) - さまざまなカテゴリのさまざまな驚くべき CTF チャレンジ。練習モードとコンテストモードの両方があります。
- [VulnHub](https://www.vulnhub.com/) - VM ベースで、デジタル セキュリティ、コンピュータ アプリケーション、ネットワーク管理に実用的です。
- [W3Challs](https://w3challs.com) - さまざまなカテゴリのさまざまなコンピューターの課題を提供する侵入テストのトレーニング プラットフォーム。
- [WebHacking](http://webhacking.kr) - Web のハッキングの課題。


*セルフホスト型CTF*
- [Damn Vulnerable Web Application](http://www.dvwa.co.uk/) - PHP/MySQL Web アプリケーションは非常に脆弱です。
- [Juice Shop CTF](https://github.com/bkimminich/juice-shop-ctf) - [OWASP Juice Shop](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project) で CTF を簡単にホストするためのスクリプトとツール。

## Webサイト <span id="websites"></span>

*CTF に関するさまざまな総合 Web サイト*

- [Awesome CTF Cheatsheet](https://github.com/uppusaikiran/awesome-ctf-cheatsheet#awesome-ctf-cheatsheet-) - CTF チートシート。
- [CTF Time](https://ctftime.org/) - 世界中で発生している CTF に関する一般情報。
- [Reddit Security CTF](http://www.reddit.com/r/securityctf) - Reddit CTF カテゴリ。

## Wiki <span id="wikis"></span>

*CTF について学ぶために利用できるさまざまな Wiki*

- [Bamboofox](https://bamboofox.github.io/) - CTF を学習するための中国語リソース。
- [bi0s Wiki](https://teambi0s.gitlab.io/bi0s-wiki/) - チームbi0sのWiki。
- [CTF Cheatsheet](https://uppusaikiran.github.io/hacking/Capture-the-Flag-CheatSheet/) - CTF のヒントとコツ。
- [ISIS Lab](https://github.com/isislab/Project-Ideas/wiki) - Isis lab による CTF Wiki。
- [OpenToAll](https://github.com/OpenToAllCTF/Tips) - OTA CTF チーム メンバーによる CTF ヒント。

## Write-up集 <span id="writeups-collections"></span>

*CTF の書き込み集*

- [0e85dc6eaf](https://github.com/0e85dc6eaf/CTF-Writeups) - 0e85dc6eaf による CTF チャレンジの書き込み
- [Captf](http://captf.com/) - psifertex によってダンプされた CTF チャレンジとマテリアル。
- [CTF write-ups (community)](https://github.com/ctfs/) - CTF チャレンジ + コミュニティによって管理される書き込みアーカイブ。
- [CTFTime Scrapper](https://github.com/abdilahrf/CTFWriteupScrapper) - CTF 時間からの書き込みをすべて破棄し、最初に読み取るものを整理します。
- [HackThisSite](https://github.com/HackThisSite/CTF-Writeups) - CTF 書き込みリポジトリは、HackThisSite チームによって管理されています。
- [Mzfr](https://github.com/mzfr/ctf-writeups/) - CTF コンテストの記事 (mzfr による)
- [pwntools writeups](https://github.com/Gallopsled/pwntools-write-ups) - すべて pwntools を使用した CTF 書き込みのコレクション。
- [SababaSec](https://github.com/SababaSec/ctf-writeups) - SababaSec チームによる CTF 書き込みのコレクション
- [Shell Storm](http://shell-storm.org/repo/CTF/) - CTF チャレンジ アーカイブは Jonathan Salwan によって管理されています。
- [Smoke Leet Everyday](https://github.com/smokeleeteveryday/CTF_WRITEUPS) - CTF 書き込みリポジトリは SmokeLeetEveryday チームによって管理されています。

### ライセンス

CC0 :)
