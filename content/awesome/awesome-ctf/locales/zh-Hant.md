# Awesome CTF [![Build Status](https://travis-ci.org/apsdehal/awesome-ctf.svg?branch=master)](https://travis-ci.org/apsdehal/awesome-ctf) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[Capture The Flag](https://en.wikipedia.org/wiki/Capture_the_flag#Computer_security) (CTF) 框架、函式庫、資源、軟體和教學的精選清單。此清單旨在幫助初學者以及經驗豐富的 CTF 玩家在一個地方找到與 CTF 相關的所有內容。

### 參與貢獻

請先快速瀏覽 [貢獻指南](https://github.com/apsdehal/ctf-tools/blob/master/CONTRIBUTING.md)。

#### _如果你知道此處未收錄的工具，歡迎提交拉取請求。_

### 為什麼？

建立 CTF 中使用的工具集並記住它們需要時間。該存儲庫有助於將所有這些分散的工具保留在一個地方。

### 目錄

- [Awesome CTF](#awesome-ctf)
  - [建立](#create)
    - [鑑識](#forensics)
    - [平台](#platforms)
    - [隱寫術](#steganography)
    - [Web](#web)
  - [解題](#solve)
    - [攻擊](#attacks)
    - [暴力破解工具](#bruteforcers)
    - [密碼學](#crypto)
    - [漏洞利用](#exploits)
    - [鑑識](#forensics-1)
    - [網路](#networking)
    - [逆向工程](#reversing)
    - [服務](#services)
    - [隱寫術](#steganography-1)
    - [Web](#web-1)

- [資源](#resources)
  - [作業系統](#operating-systems)
  - [入門工具包](#starter-packs)
  - [教學](#tutorials)
  - [攻防練習場](#wargames)
  - [網站](#websites)
  - [Wiki](#wikis)
  - [解題報告集](#writeups-collections)


# 建立 <span id="create"></span>

*用於創建 CTF 挑戰的工具*

- [Kali Linux CTF Blueprints](https://www.packtpub.com/eu/networking-and-servers/kali-linux-ctf-blueprints) - 有關建立、測試和自訂您自己的奪旗挑戰的線上書籍。


## 鑑識 <span id="forensics"></span>

*用於創建取證挑戰的工具*

- [Dnscat2](https://github.com/iagox86/dnscat2) - 透過 DNS 進行主機通訊。
- [Kroll Artifact Parser and Extractor (KAPE)](https://learn.duffandphelps.com/kape) - 分類程序。
- [Magnet AXIOM](https://www.magnetforensics.com/downloadaxiom) - 以工件為中心的 DFIR 工具。
- [Registry Dumper](http://www.kahusecurity.com/posts/registry_dumper_find_and_dump_hidden_registry_keys.html) - 轉儲您的註冊表。

## 平台 <span id="platforms"></span>

*可用於託管 CTF 的專案*

- [CTFd](https://github.com/isislab/CTFd) - Jeopardy 形式的 CTF
- [echoCTF.RED](https://github.com/echoCTF/echoCTF.RED) - 開發、部署和維護您自己的 CTF 基礎架構。
- [FBCTF](https://github.com/facebook/fbctf) - 舉辦 Facebook 奪旗比賽的平台。
- [Haaukins](https://github.com/aau-network-security/haaukins) - 用於安全教育的高可及性自動化虛擬化平台。
- [HackTheArch](https://github.com/mcpa-stlouis/hack-the-arch) - CTF評分平台。
- [Mellivora](https://github.com/Nakiami/mellivora) - 用 PHP 寫的 CTF 引擎。
- [MotherFucking-CTF](https://github.com/andreafioraldi/motherfucking-ctf) - 功能強大且輕量的 CTF 託管平台，不需要 JavaScript。
- [NightShade](https://github.com/UnrealAkama/NightShade) - 一個簡單的安全CTF框架。
- [OpenCTF](https://github.com/easyctf/openctf) - CTF 盒裝。需要最少的設定。
- [PicoCTF](https://github.com/picoCTF/picoCTF) - 用於運行 picoCTF 的平台。一個託管任何 CTF 的優秀框架。
- [PyChallFactory](https://github.com/pdautry/py_chall_factory) - 用於創建/管理/打包危險 CTF 挑戰的小型框架。
- [RootTheBox](https://github.com/moloch--/RootTheBox) - 駭客遊戲（CTF 記分板和遊戲管理器）。
- [Scorebot](https://github.com/legitbs/scorebot) - Legitbs (Defcon) 的 CTF 平台。
- [SecGen](https://github.com/cliffe/SecGen) - 安全場景產生器。建立隨機易受攻擊的虛擬機器。

## 隱寫術 <span id="steganography"></span>

*用於創建隱寫挑戰的工具*

檢查隱寫術的解決部分。

## Web <span id="web"></span>

*用於創建 Web 挑戰的工具*

*JavaScript 混淆工具*

- [Metasploit JavaScript Obfuscator](https://github.com/rapid7/metasploit-framework/wiki/How-to-obfuscate-JavaScript-in-Metasploit)
- [Uglify](https://github.com/mishoo/UglifyJS)


# 解題 <span id="solve"></span>

*用於解決 CTF 挑戰的工具*

## 攻擊 <span id="attacks"></span>

*用於執行各種攻擊的工具*

- [Bettercap](https://github.com/bettercap/bettercap) - 執行 MITM（中間人）攻擊的框架。
- [Yersinia](https://github.com/tomac/yersinia) - 攻擊第2層的各種協定。

## 密碼學 <span id="crypto"></span>

*用於解決加密挑戰的工具*

- [CyberChef](https://gchq.github.io/CyberChef) - 用於分析和解碼資料的 Web 應用程式。
- [FeatherDuster](https://github.com/nccgroup/featherduster) - 一種自動化、模組化密碼分析工具。
- [Hash Extender](https://github.com/iagox86/hash_extender) - 用於執行雜湊長度擴展攻擊的實用工具。
- [padding-oracle-attacker](https://github.com/KishanBagaria/padding-oracle-attacker) - 用於執行填充預言機攻擊的 CLI 工具。
- [PkCrack](https://www.unix-ag.uni-kl.de/~conrad/krypto/pkcrack.html) - 破解 PkZip 加密的工具。
- [QuipQuip](https://quipqiup.com) - 用於破解替換密碼或維吉尼亞密碼（無金鑰）的線上工具。
- [RSACTFTool](https://github.com/Ganapati/RsaCtfTool) - 一種透過各種攻擊恢復RSA私鑰的工具。
- [RSATool](https://github.com/ius/rsatool) - 根據 p 和 q 的知識產生私鑰。
- [XORTool](https://github.com/hellman/xortool) - 分析多位元組異或密碼的工具。

## 暴力破解工具 <span id="bruteforcers"></span>

*用於各種暴力破解的工具（密碼等）*

- [Hashcat](https://hashcat.net/hashcat/) - 密碼破解器
- [Hydra](https://tools.kali.org/password-attacks/hydra) - 並行登入破解器，支援多種協定攻擊
- [John The Jumbo](https://github.com/magnumripper/JohnTheRipper) - 開膛手約翰的社群增強版。
- [John The Ripper](http://www.openwall.com/john/) - 密碼破解器。
- [Nozzlr](https://github.com/intrd/nozzlr) - Nozzlr 是一個強力框架，真正模組化且腳本友好。
- [Ophcrack](http://ophcrack.sourceforge.net/) - 基於彩虹表的 Windows 密碼破解程式。
- [Patator](https://github.com/lanjelot/patator) - Patator是一款多用途暴力破解器，採用模組化設計。
- [Turbo Intruder](https://portswigger.net/research/turbo-intruder-embracing-the-billion-request-attack) - Burp Suite 擴充功能用於發送大量 HTTP 請求

## 漏洞利用 <span id="exploits"></span>

*用於解決漏洞挑戰的工具*

- [DLLInjector](https://github.com/OpenSecurityResearch/dllinjector) - 在進程中註入 dll。
- [libformatstr](https://github.com/hellman/libformatstr) - 簡化格式字串利用。
- [Metasploit](http://www.metasploit.com/) - 滲透測試軟體。
  - [速查表](https://www.comparitech.com/net-admin/metasploit-cheat-sheet/)
- [one_gadget](https://github.com/david942j/one_gadget) -  一種用來尋找 `execve('/bin/sh', NULL, NULL)` 呼叫的小工具的工具。
  - `gem install one_gadget`
- [Pwntools](https://github.com/Gallopsled/pwntools) - 用於編寫漏洞利用的 CTF 框架。
- [Qira](https://github.com/BinaryAnalysisPlatform/qira) - QEMU 互動式執行時間分析器。
- [ROP Gadget](https://github.com/JonathanSalwan/ROPgadget) - ROP 利用框架。
- [V0lt](https://github.com/P1kachu/v0lt) - 安全 CTF 工具包。

## 鑑識 <span id="forensics-1"></span>

*用於解決取證挑戰的工具*

- [Aircrack-Ng](http://www.aircrack-ng.org/) - 破解 802.11 WEP 和 WPA-PSK 金鑰。
  - `apt-get install aircrack-ng`
- [Audacity](http://sourceforge.net/projects/audacity/) - 分析聲音檔案（mp3、m4a 等）。
  - `apt-get install audacity`
- [Bkhive and Samdump2](http://sourceforge.net/projects/ophcrack/files/samdump2/) - 轉儲 SYSTEM 和 SAM 檔案。
  - `apt-get install samdump2 bkhive`
- [CFF Explorer](http://www.ntcore.com/exsuite.php) - PE編輯器。
- [Creddump](https://github.com/moyix/creddump) - 轉儲 Windows 憑證。
- [DVCS Ripper](https://github.com/kost/dvcs-ripper) - 破解 Web 可存取（分散式）版本控制系統。
- [Exif Tool](http://www.sno.phy.queensu.ca/~phil/exiftool/) - 讀取、寫入和編輯檔案元資料。
- [Extundelete](http://extundelete.sourceforge.net/) - 用於從可安裝映像復原遺失的資料。
- [Fibratus](https://github.com/rabbitstack/fibratus) - 用於探索和追蹤 Windows 核心的工具。
- [Foremost](http://foremost.sourceforge.net/) - 使用標頭擷取特定類型的檔案。
  - `apt-get install foremost`
- [Fsck.ext4](http://linux.die.net/man/8/fsck.ext3) - 用於修復損壞的檔案系統。
- [Malzilla](http://malzilla.sourceforge.net/) - 惡意軟體搜尋工具。
- [NetworkMiner](http://www.netresec.com/?page=NetworkMiner) - 網路取證分析工具。
- [PDF Streams Inflater](http://malzilla.sourceforge.net/downloads.html) - 尋找並提取 PDF 檔案中壓縮的 zlib 檔案。
- [Pngcheck](http://www.libpng.org/pub/png/apps/pngcheck.html) - 驗證 PNG 的完整性並以人類可讀的形式轉儲所有區塊級資訊。
  - `apt-get install pngcheck`
- [ResourcesExtract](http://www.nirsoft.net/utils/resources_extract.html) - 從 exe 擷取各種檔案類型。
- [Shellbags](https://github.com/williballenthin/shellbags) - 調查 NT\_USER.dat 檔案。
- [Snow](https://sbmlabs.com/notes/snow_whitespace_steganography_tool) - 空白隱寫工具。
- [USBRip](https://github.com/snovvcrash/usbrip) - 用於在 GNU/Linux 上追蹤 USB 裝置工件（USB 事件歷史記錄）的簡單 CLI 取證工具。
- [Volatility](https://github.com/volatilityfoundation/volatility) - 要調查記憶體轉儲。
- [Wireshark](https://www.wireshark.org) - 分析 pcap 或 pcapng 文件

*登錄檔檢視器*
- [OfflineRegistryView](https://www.nirsoft.net/utils/offline_registry_view.html) - 適用於 Windows 的簡單工具，可讓您從外部磁碟機讀取離線登錄檔案並以 .reg 檔案格式查看所需的登錄機碼。
- [Registry Viewer®](https://accessdata.com/product-download/registry-viewer-2-0-0) - 用於檢視 Windows 登錄。

## 網路 <span id="networking"></span>

*用於解決網路挑戰的工具*

- [Masscan](https://github.com/robertdavidgraham/masscan) - 海量IP埠掃描器、TCP埠掃描器。
- [Monit](https://linoxide.com/monitoring-2/monit-linux/) - 用於檢查網路上的主機（以及其他非網路活動）的 Linux 工具。
- [Nipe](https://github.com/GouveaHeitor/nipe) - Nipe 是一個使 Tor 網路成為預設閘道的腳本。
- [Nmap](https://nmap.org/) - 用於網路發現和安全審核的開源實用程式。
- [Wireshark](https://www.wireshark.org/) - 分析網路轉儲。
  - `apt-get install wireshark`
- [Zeek](https://www.zeek.org) - 開源網路安全監視器。
- [Zmap](https://zmap.io/) - 開源網路掃描器。

## 逆向工程 <span id="reversing"></span>

*用於解決倒車挑戰的工具*

- [Androguard](https://github.com/androguard/androguard) - 對 Android 應用程式進行逆向工程。
- [Angr](https://github.com/angr/angr) - 與平台無關的二進位分析架構。
- [Apk2Gold](https://github.com/lxdvs/apk2gold) - 又一個 Android 反編譯器。
- [ApkTool](http://ibotpeaches.github.io/Apktool/) - Android 反編譯器。
- [Barf](https://github.com/programa-stic/barf-project) - 二進位分析與逆向工程架構。
- [Binary Ninja](https://binary.ninja/) - 二進位分析架構。
- [BinUtils](http://www.gnu.org/software/binutils/binutils.html) - 二進位工具集合。
- [BinWalk](https://github.com/devttys0/binwalk) - 分析、逆向工程並擷取韌體映像。
- [Boomerang](https://github.com/BoomerangDecompiler/boomerang) - 將 x86/SPARC/PowerPC/ST-20 二進位檔反編譯為 C。
- [ctf_import](https://github.com/docileninja/ctf_import) – run basic functions from stripped binaries cross platform.
- [cwe_checker](https://github.com/fkie-cad/cwe_checker) - cwe_checker 在二進位可執行檔中發現易受攻擊的模式。
- [demovfuscator](https://github.com/kirschju/demovfuscator) - 用於 movfuscated 二進位檔案的正在進行的反混淆器。
- [Frida](https://github.com/frida/) - 動態程式碼注入。
- [GDB](https://www.gnu.org/software/gdb/) - GNU 專案調試器。
- [GEF](https://github.com/hugsy/gef) - GDB插件。
- [Ghidra](https://ghidra-sre.org/) - 逆向工程工具的開源套件。  與 IDA Pro 類似。
- [Hopper](http://www.hopperapp.com/) - 適用於 OSX 和 Linux 的逆向工程工具（反組譯程式）。
- [IDA Pro](https://www.hex-rays.com/products/ida/) - 最常用的倒車軟體。
- [Jadx](https://github.com/skylot/jadx) - 反編譯Android檔。
- [Java Decompilers](http://www.javadecompilers.com) - Java 和 Android APK 的線上反編譯器。
- [Krakatau](https://github.com/Storyyeller/Krakatau) - Java 反編譯器和反組譯器。
- [Objection](https://github.com/sensepost/objection) - 運行時移動探索。
- [PEDA](https://github.com/longld/peda) - GDB插件（僅限python2.7）。
- [Pin](https://software.intel.com/en-us/articles/pin-a-dynamic-binary-instrumentation-tool) - Intel 的動態二進位偵測工具。
- [PINCE](https://github.com/korcankaraokcu/PINCE) - GDB前端/逆向工程工具，專注於遊戲駭客和自動化。
- [PinCTF](https://github.com/ChrisTheCoolHut/PinCTF) - 一款使用 intel pin 進行旁路分析的工具。
- [Plasma](https://github.com/joelpx/plasma) - x86/ARM/MIPS 的互動式反組譯程序，可產生具有彩色語法的縮排偽代碼。
- [Pwndbg](https://github.com/pwndbg/pwndbg) - 一個 GDB 插件，提供了一套實用程式來輕鬆破解 GDB。
- [radare2](https://github.com/radare/radare2) - 手提式倒車框架。
- [Triton](https://github.com/JonathanSalwan/Triton/) - 動態二進位分析 (DBA) 架構。
- [Uncompyle](https://github.com/gstarnberger/uncompyle) - 反編譯 Python 2.7 二進位 (.pyc)。
- [WinDbg](http://www.windbg.org/) - Microsoft 分發的 Windows 偵錯器。
- [Xocopy](http://reverse.lostrealm.com/tools/xocopy.html) - 可以複製具有執行權限但沒有讀取權限的可執行檔的程式。
- [Z3](https://github.com/Z3Prover/z3) - 來自 Microsoft Research 的定理證明。

*JavaScript 反混淆器*

- [Detox](http://relentless-coding.org/projects/jsdetox/install) - Javascript 惡意軟體分析工具。
- [Revelo](http://www.kahusecurity.com/posts/revelo_javascript_deobfuscator.html) - 分析混淆的 Javascript 程式碼。

*SWF 分析工具*
- [RABCDAsm](https://github.com/CyberShadow/RABCDAsm) - 實用程式集合，包括 ActionScript 3 組譯器/反組譯器。
- [Swftools](http://www.swftools.org/) - 用於處理 SWF 檔案的實用程式集合。
- [Xxxswf](https://bitbucket.org/Alexander_Hanel/xxxswf) -  用於分析 Flash 檔案的 Python 腳本。

## 服務 <span id="services"></span>

*透過網路提供各種有用的服務*

- [CSWSH](http://cow.cat/cswsh.html) - 跨站 WebSocket 劫持測試儀。
- [Request Bin](https://requestbin.com/) - 可讓您檢查對特定 url 的 http 請求。

## 隱寫術 <span id="steganography-1"></span>

*用於解決隱寫術挑戰的工具*

- [AperiSolve](https://aperisolve.fr/) - Aperi'Solve 是一個對影像進行圖層分析的平台（開源）。
- [Convert](http://www.imagemagick.org/script/convert.php) - 轉換影像黑白格式並套用濾鏡。
- [Exif](http://manpages.ubuntu.com/manpages/trusty/man1/exif.1.html) - 顯示 JPEG 檔案中的 EXIF 資訊。
- [Exiftool](https://linux.die.net/man/1/exiftool) - 在檔案中讀取和寫入元資訊。
- [Exiv2](http://www.exiv2.org/manpage.html) - 影像元資料操作工具。
- [Image Steganography](https://sourceforge.net/projects/image-steg/) - 透過可選加密將文字和檔案嵌入圖像中。易於使用的使用者介面。
- [Image Steganography Online](https://incoherency.co.uk/image-steganography) - 這是一個客戶端 Javascript 工具，用於以隱寫方式將圖像隱藏在其他圖像的較低「位元」內
- [ImageMagick](http://www.imagemagick.org/script/index.php) - 用於操作影像的工具。
- [Outguess](https://www.freebsd.org/cgi/man.cgi?query=outguess+&apropos=0&sektion=0&manpath=FreeBSD+Ports+5.1-RELEASE&format=html) - 通用隱寫工具。
- [Pngtools](https://packages.debian.org/sid/pngtools) - 用於與 PNG 相關的各種分析。
  - `apt-get install pngtools`
- [SmartDeblur](https://github.com/Y-Vladimir/SmartDeblur) - 用於去模糊和修復散焦影像。
- [Steganabara](https://www.openhub.net/p/steganabara) -  用 Ja​​va 寫的隱寫分析工具。
- [SteganographyOnline](https://stylesuxx.github.io/steganography/) - 線上隱寫編碼器和解碼器。
- [Stegbreak](https://linux.die.net/man/1/stegbreak) - 對 JPG 影像發動暴力字典攻擊。
- [StegCracker](https://github.com/Paradoxis/StegCracker) - 隱寫術強力實用程序，用於發現文件內的隱藏資料。
- [stegextract](https://github.com/evyatarmeged/stegextract) - 偵測影像中的隱藏檔案和文字。
- [Steghide](http://steghide.sourceforge.net/) - 在各種影像中隱藏資料。
- [StegOnline](https://georgeom.net/StegOnline/upload) - 進行各種影像隱寫操作，例如隱藏/顯示隱藏在位元中的檔案（開源）。
- [Stegsolve](http://www.caesum.com/handbook/Stegsolve.jar) - 將各種隱寫技術應用於影像。
- [Zsteg](https://github.com/zed-0xff/zsteg/) - PNG/BMP 分析。

## Web <span id="web-1"></span>

*用於解決 Web 挑戰的工具*

- [BurpSuite](https://portswigger.net/burp) - 用於測試網站安全性的圖形工具。
- [Commix](https://github.com/commixproject/commix) - 自動化一體化作業系統指令注入和利用工具。
- [Hackbar](https://addons.mozilla.org/en-US/firefox/addon/hackbartool/) - Firefox 插件，可輕鬆進行網路利用。
- [OWASP ZAP](https://www.owasp.org/index.php/Projects/OWASP_Zed_Attack_Proxy_Project) - 攔截代理程式以重播、偵錯和模糊 HTTP 請求和回應
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) - chrome 插件，用於偵錯網路請求。
- [Raccoon](https://github.com/evyatarmeged/Raccoon) - 一款用於偵察和漏洞掃描的高效能攻擊性安全工具。
- [SQLMap](https://github.com/sqlmapproject/sqlmap) - 自動 SQL 注入和資料庫接管工具。
  ```pip install sqlmap```
- [W3af](https://github.com/andresriancho/w3af) -  Web 應用程式攻擊和稽核框架。
- [XSSer](http://xsser.sourceforge.net/) - 自動 XSS 測試儀。


# 資源 <span id="resources"></span>

*在哪裡可以找到有關 CTF 的資訊*

## 作業系統 <span id="operating-systems"></span>

*滲透測試和安全實驗室作業系統*

- [Android Tamer](https://androidtamer.com/) - 基於 Debian。
- [BackBox](https://backbox.org/) - 基於 Ubuntu。
- [BlackArch Linux](https://blackarch.org/) - 基於 Arch Linux。
- [Fedora Security Lab](https://labs.fedoraproject.org/security/) - 基於 Fedora。
- [Kali Linux](https://www.kali.org/) - 基於 Debian。
- [Parrot Security OS](https://www.parrotsec.org/) - 基於 Debian。
- [Pentoo](http://www.pentoo.ch/) - 基於 Gentoo。
- [URIX OS](http://urix.us/) - 是基於 openSUSE。
- [Wifislax](http://www.wifislax.com/) - 基於 Slackware。

*惡意軟體分析者與逆向工程*

- [Flare VM](https://github.com/fireeye/flare-vm/) - 基於 Windows。
- [REMnux](https://remnux.org/) - 基於 Debian。

## 入門工具包 <span id="starter-packs"></span>

*安裝程式腳本集合，有用的工具*

- [CTF Tools](https://github.com/zardus/ctf-tools) - 用於安裝各種安全研究工具的安裝腳本集合。
- [LazyKali](https://github.com/jlevitsk/lazykali) - LazyKali 的 2016 年更新，簡化了工具的安裝和配置。

## 教學 <span id="tutorials"></span>

*學習參加 CTF 的教學*

- [CTF Field Guide](https://trailofbits.github.io/ctf/) - Trails of Bits 編寫的實戰指南。
- [CTF Resources](http://ctfs.github.io/resources/) - 由社群維護的入門指南。
- [How to Get Started in CTF](https://www.endgame.com/blog/how-get-started-ctf) - Endgame 為 CTF 初學者提供的簡短指南
- [Intro. to CTF Course](https://www.hoppersroppers.org/courseCTF.html) - 免費課程，向初學者教授取證、加密和網路交換的基礎知識。
- [IppSec](https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA) - 流行CTF平台的影片教學與演練。
- [LiveOverFlow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w) - 有關利用的影片教學。
- [MIPT CTF](https://github.com/xairy/mipt-ctf) - 針對 CTF 初學者的小型課程（俄語）。


## 安全演練平台 <span id="wargames"></span>

*常年開放的線上 CTF*

- [Backdoor](https://backdoor.sdslabs.co/) - SDSLabs 提供的安全平台。
- [Crackmes](https://crackmes.one/) - 逆向工程挑戰。
- [CryptoHack](https://cryptohack.org/) - 有趣的密碼學挑戰。
- [echoCTF.RED](https://echoctf.red/) - 線上CTF具有多種目標攻擊。
- [Exploit Exercises](https://exploit-exercises.lains.space/) - 各種虛擬機，用於學習各種電腦安全問題。
- [Exploit.Education](http://exploit.education) - 各種虛擬機，用於學習各種電腦安全問題。
- [Gracker](https://github.com/Samuirai/gracker) - 二元挑戰的學習曲線較慢，且每個等級都有記錄。
- [Hack The Box](https://www.hackthebox.eu) - 適合各類安全愛好者的每週 CTF。
- [Hack This Site](https://www.hackthissite.org/) - 黑客訓練場。 來自 HackerOne 的
- [Hacker101](https://www.hacker101.com/) - CTF
- [Hacking-Lab](https://hacking-lab.com/) - 道德駭客、電腦網路和安全挑戰平台。
- [Hone Your Ninja Skills](https://honeyourskills.ninja/) - Web 挑戰從基礎開始。
- [IO](http://io.netgarage.org/) - 二元挑戰的戰爭遊戲。
- [Microcorruption](https://microcorruption.com) - 嵌入式安全 CTF。
- [Over The Wire](http://overthewire.org/wargames/) - Wargame 由 OvertheWire 社群維護。
- [PentesterLab](https://pentesterlab.com/) - 各種虛擬機器和線上挑戰（付費）。
- [PicoCTF](https://2019game.picoctf.com) - 常年ctf比賽。每年 picoCTF 競賽的問題。
- [PWN Challenge](http://pwn.eonew.cn/) - 二進位開發戰爭遊戲。
- [Pwnable.kr](http://pwnable.kr/) - Pwn 遊戲。
- [Pwnable.tw](https://pwnable.tw/) - 二進位兵棋。
- [Pwnable.xyz](https://pwnable.xyz/) - 二進位開發戰爭遊戲。
- [Reversin.kr](http://reversing.kr/) - 倒車挑戰。
- [Ringzer0Team](https://ringzer0team.com/) - Ringzer0團隊線上CTF。
- [Root-Me](https://www.root-me.org/) - 駭客與資訊安全學習平台。
- [ROP Wargames](https://github.com/xelenonz/game) - ROP 戰爭遊戲。
- [SANS HHC](https://holidayhackchallenge.com/past-challenges/) - 節日主題挑戰
每年發布並由 SANS 維護。
- [SmashTheStack](http://smashthestack.org/) - SmashTheStack 社群維護的各種戰爭遊戲。
- [Viblo CTF](https://ctf.viblo.asia) - 各種令人驚嘆的 CTF 挑戰，涉及許多不同的類別。有練習模式和比賽模式。
- [VulnHub](https://www.vulnhub.com/) - 基於虛擬機，適用於數位安全、電腦應用和網路管理。
- [W3Challs](https://w3challs.com) - 滲透測試訓練平台，提供各種類別的各種電腦挑戰。
- [WebHacking](http://webhacking.kr) - 網路駭客挑戰。


*自架 CTF*
- [Damn Vulnerable Web Application](http://www.dvwa.co.uk/) - PHP/MySQL Web 應用程式非常脆弱。
- [Juice Shop CTF](https://github.com/bkimminich/juice-shop-ctf) - 用於在 [OWASP Juice Shop](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project) 上輕鬆託管 CTF 的腳本和工具。

## 網站 <span id="websites"></span>

*有關 CTF 的各種綜合網站*

- [Awesome CTF Cheatsheet](https://github.com/uppusaikiran/awesome-ctf-cheatsheet#awesome-ctf-cheatsheet-) - CTF 備忘單。
- [CTF Time](https://ctftime.org/) - 有關世界各地發生的 CTF 的一般資訊。
- [Reddit Security CTF](http://www.reddit.com/r/securityctf) - Reddit CTF 類別。

## Wiki <span id="wikis"></span>

*可用來了解 CTF 的各種 Wiki*

- [Bamboofox](https://bamboofox.github.io/) - 學習CTF的中文資源。 來自 bi0s 團隊的
- [bi0s Wiki](https://teambi0s.gitlab.io/bi0s-wiki/) - Wiki。
- [CTF Cheatsheet](https://uppusaikiran.github.io/hacking/Capture-the-Flag-CheatSheet/) - CTF 提示和技巧。
- [ISIS Lab](https://github.com/isislab/Project-Ideas/wiki) - Isis 實驗室的 CTF 維基。
- [OpenToAll](https://github.com/OpenToAllCTF/Tips) - OTA CTF 團隊成員的 CTF 提示。

## 解題報告集 <span id="writeups-collections"></span>

*CTF 文章合輯*

- [0e85dc6eaf](https://github.com/0e85dc6eaf/CTF-Writeups) - 0e85dc6eaf 針對 CTF 挑戰的文章
- [Captf](http://captf.com/) - 轉儲 psifertex 的 CTF 挑戰和材料。
- [CTF write-ups (community)](https://github.com/ctfs/) - CTF 挑戰 + 由社群維護的文章存檔。
- [CTFTime Scrapper](https://github.com/abdilahrf/CTFWriteupScrapper) - 放棄 CTF Time 中的所有文章並組織先閱讀哪些內容。
- [HackThisSite](https://github.com/HackThisSite/CTF-Writeups) - CTF write-ups 儲存庫由 HackThisSite 團隊維護。
- [Mzfr](https://github.com/mzfr/ctf-writeups/) - Mzfr 的 CTF 競賽文章
- [pwntools writeups](https://github.com/Gallopsled/pwntools-write-ups) - 所有使用 pwntools 的 CTF 文章集。
- [SababaSec](https://github.com/SababaSec/ctf-writeups) - SababaSec 團隊的 CTF 文章集
- [Shell Storm](http://shell-storm.org/repo/CTF/) - CTF 挑戰檔案由 Jonathan Salwan 維護。
- [Smoke Leet Everyday](https://github.com/smokeleeteveryday/CTF_WRITEUPS) - CTF write-ups 儲存庫由 SmokeLeetEveryday 團隊維護。

### 授權條款

CC0 :)
