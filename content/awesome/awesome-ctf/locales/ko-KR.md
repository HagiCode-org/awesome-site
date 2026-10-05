# Awesome CTF [![Build Status](https://travis-ci.org/apsdehal/awesome-ctf.svg?branch=master)](https://travis-ci.org/apsdehal/awesome-ctf) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[Capture The Flag](https://en.wikipedia.org/wiki/Capture_the_flag#Computer_security)(CTF) 프레임워크, 라이브러리, 리소스, 소프트웨어 및 튜토리얼의 선별된 목록입니다. 이 목록은 초보자와 노련한 CTF 플레이어가 CTF와 관련된 모든 것을 한 곳에서 찾을 수 있도록 돕는 것을 목표로 합니다.

### 기여하기

먼저 [기여 지침](https://github.com/apsdehal/ctf-tools/blob/master/CONTRIBUTING.md)를 잠깐 살펴보시기 바랍니다.

#### _여기에 없는 도구를 알고 있다면 언제든지 풀 리퀘스트를 보내 주세요._

### 이유

CTF에서 사용하는 도구들을 모아놓고 모두 기억하려면 시간이 걸립니다. 이 저장소는 흩어져 있는 모든 도구를 한 곳에 보관하는 데 도움이 됩니다.

### 목차

- [Awesome CTF](#awesome-ctf)
  - [만들기](#create)
    - [포렌식](#forensics)
    - [플랫폼](#platforms)
    - [스테가노그래피](#steganography)
    - [웹](#web)
  - [풀이](#solve)
    - [공격](#attacks)
    - [무차별 대입 도구](#bruteforcers)
    - [암호학](#crypto)
    - [익스플로잇](#exploits)
    - [포렌식](#forensics-1)
    - [네트워킹](#networking)
    - [리버스 엔지니어링](#reversing)
    - [서비스](#services)
    - [스테가노그래피](#steganography-1)
    - [웹](#web-1)

- [자료](#resources)
  - [운영체제](#operating-systems)
  - [시작 도구 모음](#starter-packs)
  - [튜토리얼](#tutorials)
  - [워게임](#wargames)
  - [웹사이트](#websites)
  - [위키](#wikis)
  - [풀이 모음](#writeups-collections)


# 만들기 <span id="create"></span>

*CTF 챌린지를 만드는 데 사용되는 도구*

- [Kali Linux CTF Blueprints](https://www.packtpub.com/eu/networking-and-servers/kali-linux-ctf-blueprints) - 나만의 깃발 탈취 과제를 구축, 테스트 및 사용자 정의하는 방법에 대한 온라인 책입니다.


## 포렌식 <span id="forensics"></span>

*법의학 문제를 만드는 데 사용되는 도구*

- [Dnscat2](https://github.com/iagox86/dnscat2) - DNS를 통해 통신을 호스팅합니다.
- [Kroll Artifact Parser and Extractor (KAPE)](https://learn.duffandphelps.com/kape) - 선별 프로그램.
- [Magnet AXIOM](https://www.magnetforensics.com/downloadaxiom) - 아티팩트 중심 DFIR 도구.
- [Registry Dumper](http://www.kahusecurity.com/posts/registry_dumper_find_and_dump_hidden_registry_keys.html) - 레지스트리를 덤프하십시오.

## 플랫폼 <span id="platforms"></span>

*CTF를 호스팅하는 데 사용할 수 있는 프로젝트*

- [CTFd](https://github.com/isislab/CTFd) - NYU Tandon의 ISISLab에서 위험 스타일 CTF를 호스팅하는 플랫폼입니다.
- [echoCTF.RED](https://github.com/echoCTF/echoCTF.RED) - 자체 CTF 인프라를 개발, 배포 및 유지 관리합니다.
- [FBCTF](https://github.com/facebook/fbctf) - Facebook에서 Capture the Flag 대회를 주최하는 플랫폼입니다.
- [Haaukins](https://github.com/aau-network-security/haaukins) - 보안 교육을 위한 접근성이 높고 자동화된 가상화 플랫폼입니다.
- [HackTheArch](https://github.com/mcpa-stlouis/hack-the-arch) - CTF 채점 플랫폼.
- [Mellivora](https://github.com/Nakiami/mellivora) - PHP로 작성된 CTF 엔진.
- [MotherFucking-CTF](https://github.com/andreafioraldi/motherfucking-ctf) - CTF 호스팅을 위한 강력하고 가벼운 플랫폼입니다. JavaScript가 필요하지 않습니다.
- [NightShade](https://github.com/UnrealAkama/NightShade) - 간단한 보안 CTF 프레임워크입니다.
- [OpenCTF](https://github.com/easyctf/openctf) - CTF가 상자에 들어있습니다. 최소한의 설정이 필요합니다.
- [PicoCTF](https://github.com/picoCTF/picoCTF) - picoCTF를 실행하는 데 사용되는 플랫폼입니다. 모든 CTF를 호스팅할 수 있는 훌륭한 프레임워크입니다.
- [PyChallFactory](https://github.com/pdautry/py_chall_factory) - 위험 CTF 문제를 생성/관리/패키징하기 위한 작은 프레임워크입니다.
- [RootTheBox](https://github.com/moloch--/RootTheBox) - 해커 게임(CTF 점수판 및 게임 관리자). Legitbs(Defcon)의 CTF용
- [Scorebot](https://github.com/legitbs/scorebot) - 플랫폼.
- [SecGen](https://github.com/cliffe/SecGen) - 보안 시나리오 생성기. 무작위로 취약한 가상 머신을 생성합니다.

## 스테가노그래피 <span id="steganography"></span>

*스테고 챌린지를 만드는 데 사용되는 도구*

스테가노그래피에 대한 해결 섹션을 확인하세요.

## 웹 <span id="web"></span>

*웹 챌린지 생성에 사용되는 도구*

*JavaScript 난독화 도구*

- [Metasploit JavaScript Obfuscator](https://github.com/rapid7/metasploit-framework/wiki/How-to-obfuscate-JavaScript-in-Metasploit)
- [Uglify](https://github.com/mishoo/UglifyJS)


# 풀이 <span id="solve"></span>

*CTF 문제 해결에 사용되는 도구*

## 공격 <span id="attacks"></span>

*다양한 종류의 공격을 수행하는 데 사용되는 도구*

- [Bettercap](https://github.com/bettercap/bettercap) - MITM(Man in the Middle) 공격을 수행하는 프레임워크입니다.
- [Yersinia](https://github.com/tomac/yersinia) - 레이어 2의 다양한 프로토콜을 공격합니다.

## 암호학 <span id="crypto"></span>

*암호화 문제 해결에 사용되는 도구*

- [CyberChef](https://gchq.github.io/CyberChef) - 데이터 분석 및 디코딩을 위한 웹 앱.
- [FeatherDuster](https://github.com/nccgroup/featherduster) - 자동화된 모듈식 암호 분석 도구입니다.
- [Hash Extender](https://github.com/iagox86/hash_extender) - 해시 길이 확장 공격을 수행하기 위한 유틸리티 도구입니다.
- [padding-oracle-attacker](https://github.com/KishanBagaria/padding-oracle-attacker) - 패딩 오라클 공격을 실행하는 CLI 도구입니다.
- [PkCrack](https://www.unix-ag.uni-kl.de/~conrad/krypto/pkcrack.html) - PkZip 암호화를 깨는 도구입니다.
- [QuipQuip](https://quipqiup.com) - 대체 암호 또는 vigenere 암호(키 없음)를 해독하기 위한 온라인 도구입니다.
- [RSACTFTool](https://github.com/Ganapati/RsaCtfTool) - 다양한 공격으로 RSA 개인키를 복구하는 툴입니다.
- [RSATool](https://github.com/ius/rsatool) - p와 q에 대한 지식을 바탕으로 개인키를 생성합니다.
- [XORTool](https://github.com/hellman/xortool) - 멀티바이트 xor 암호를 분석하는 도구입니다.

## 무차별 대입 도구 <span id="bruteforcers"></span>

*다양한 종류의 무차별 공격(비밀번호 등)에 사용되는 도구*

- [Hashcat](https://hashcat.net/hashcat/) - 비밀번호 크래커
- [Hydra](https://tools.kali.org/password-attacks/hydra) - 공격할 수 있는 다양한 프로토콜을 지원하는 병렬 로그인 크래커
- [John The Jumbo](https://github.com/magnumripper/JohnTheRipper) - John the Ripper의 커뮤니티 강화 버전입니다.
- [John The Ripper](http://www.openwall.com/john/) - 비밀번호 크래커.
- [Nozzlr](https://github.com/intrd/nozzlr) - Nozzlr은 진정한 모듈식이며 스크립트 친화적인 무차별 프레임워크입니다.
- [Ophcrack](http://ophcrack.sourceforge.net/) - 레인보우 테이블을 기반으로 하는 Windows 비밀번호 크래커입니다.
- [Patator](https://github.com/lanjelot/patator) - Patator는 모듈식 설계를 갖춘 다목적 무차별 공격자입니다.
- [Turbo Intruder](https://portswigger.net/research/turbo-intruder-embracing-the-billion-request-attack) - 대량의 HTTP 요청 전송을 위한 Burp Suite 확장

## 취약점 공격 <span id="exploits"></span>

*익스플로잇 문제를 해결하는 데 사용되는 도구*

- [DLLInjector](https://github.com/OpenSecurityResearch/dllinjector) - 프로세스에 dll을 삽입합니다.
- [libformatstr](https://github.com/hellman/libformatstr) - 형식 문자열 활용을 단순화합니다.
- [Metasploit](http://www.metasploit.com/) - 침투 테스트 소프트웨어.
  - [치트 시트](https://www.comparitech.com/net-admin/metasploit-cheat-sheet/)
- [one_gadget](https://github.com/david942j/one_gadget) -  하나의 가젯 `execve('/bin/sh', NULL, NULL)` 호출을 찾는 도구입니다.
  - `gem install one_gadget`
- [Pwntools](https://github.com/Gallopsled/pwntools) - 익스플로잇 작성을 위한 CTF 프레임워크.
- [Qira](https://github.com/BinaryAnalysisPlatform/qira) - QEMU 대화형 런타임 분석기. ROP 활용을 위한
- [ROP Gadget](https://github.com/JonathanSalwan/ROPgadget) - 프레임워크.
- [V0lt](https://github.com/P1kachu/v0lt) - 보안 CTF 툴킷.

## 포렌식 <span id="forensics-1"></span>

*법의학 문제를 해결하는 데 사용되는 도구*

- [Aircrack-Ng](http://www.aircrack-ng.org/) - 802.11 WEP 및 WPA-PSK 키를 크랙합니다.
  - `apt-get install aircrack-ng`
- [Audacity](http://sourceforge.net/projects/audacity/) - 사운드 파일(mp3, m4a 등)을 분석합니다.
  - `apt-get install audacity`
- [Bkhive and Samdump2](http://sourceforge.net/projects/ophcrack/files/samdump2/) - SYSTEM 및 SAM 파일을 덤프합니다.
  - `apt-get install samdump2 bkhive`
- [CFF Explorer](http://www.ntcore.com/exsuite.php) - PE 편집자.
- [Creddump](https://github.com/moyix/creddump) - Windows 자격 증명을 덤프합니다.
- [DVCS Ripper](https://github.com/kost/dvcs-ripper) - 웹 액세스 가능한(분산) 버전 제어 시스템을 추출합니다.
- [Exif Tool](http://www.sno.phy.queensu.ca/~phil/exiftool/) - 파일 메타데이터를 읽고 쓰고 편집합니다.
- [Extundelete](http://extundelete.sourceforge.net/) - 마운트 가능한 이미지에서 손실된 데이터를 복구하는 데 사용됩니다.
- [Fibratus](https://github.com/rabbitstack/fibratus) - Windows 커널 탐색 및 추적용 도구입니다.
- [Foremost](http://foremost.sourceforge.net/) - 헤더를 사용하여 특정 종류의 파일을 추출합니다.
  - `apt-get install foremost`
- [Fsck.ext4](http://linux.die.net/man/8/fsck.ext3) - 손상된 파일 시스템을 수정하는 데 사용됩니다.
- [Malzilla](http://malzilla.sourceforge.net/) - 악성 코드 사냥 도구.
- [NetworkMiner](http://www.netresec.com/?page=NetworkMiner) - 네트워크 포렌식 분석 도구.
- [PDF Streams Inflater](http://malzilla.sourceforge.net/downloads.html) - PDF 파일에 압축된 zlib 파일을 찾아 추출합니다.
- [Pngcheck](http://www.libpng.org/pub/png/apps/pngcheck.html) - PNG의 무결성을 확인하고 모든 청크 수준 정보를 사람이 읽을 수 있는 형식으로 덤프합니다.
  - `apt-get install pngcheck`
- [ResourcesExtract](http://www.nirsoft.net/utils/resources_extract.html) - exe에서 다양한 파일 형식을 추출합니다.
- [Shellbags](https://github.com/williballenthin/shellbags) - NT\_USER.dat 파일을 조사하십시오.
- [Snow](https://sbmlabs.com/notes/snow_whitespace_steganography_tool) - 공백 스테가노그래피 도구.
- [USBRip](https://github.com/snovvcrash/usbrip) - GNU/Linux에서 USB 장치 아티팩트(USB 이벤트 기록)를 추적하기 위한 간단한 CLI 포렌식 도구입니다.
- [Volatility](https://github.com/volatilityfoundation/volatility) - 메모리 덤프를 조사합니다.
- [Wireshark](https://www.wireshark.org) - pcap 또는 pcapng 파일을 분석하는 데 사용됩니다.

*레지스트리 뷰어*
- [OfflineRegistryView](https://www.nirsoft.net/utils/offline_registry_view.html) - 외부 드라이브에서 오프라인 레지스트리 파일을 읽고 원하는 레지스트리 키를 .reg 파일 형식으로 볼 수 있는 간단한 Windows용 도구입니다.
- [Registry Viewer®](https://accessdata.com/product-download/registry-viewer-2-0-0) - Windows 레지스트리를 보는 데 사용됩니다.

## 네트워킹 <span id="networking"></span>

*네트워킹 문제 해결에 사용되는 도구*

- [Masscan](https://github.com/robertdavidgraham/masscan) - 대량 IP 포트 스캐너, TCP 포트 스캐너.
- [Monit](https://linoxide.com/monitoring-2/monit-linux/) - 네트워크의 호스트(및 기타 비네트워크 활동)를 확인하는 Linux 도구입니다.
- [Nipe](https://github.com/GouveaHeitor/nipe) - Nipe는 Tor Network를 기본 게이트웨이로 만드는 스크립트입니다.
- [Nmap](https://nmap.org/) - 네트워크 검색 및 보안 감사를 위한 오픈 소스 유틸리티입니다.
- [Wireshark](https://www.wireshark.org/) - 네트워크 덤프를 분석합니다.
  - `apt-get install wireshark`
- [Zeek](https://www.zeek.org) - 오픈 소스 네트워크 보안 모니터입니다.
- [Zmap](https://zmap.io/) - 오픈 소스 네트워크 스캐너.

## 리버스 엔지니어링 <span id="reversing"></span>

*역전 문제를 해결하는 데 사용되는 도구*

- [Androguard](https://github.com/androguard/androguard) - Android 애플리케이션을 리버스 엔지니어링합니다.
- [Angr](https://github.com/angr/angr) - 플랫폼에 구애받지 않는 바이너리 분석 프레임워크.
- [Apk2Gold](https://github.com/lxdvs/apk2gold) - 또 다른 Android 디컴파일러입니다.
- [ApkTool](http://ibotpeaches.github.io/Apktool/) - 안드로이드 디컴파일러.
- [Barf](https://github.com/programa-stic/barf-project) - 바이너리 분석 및 리버스 엔지니어링 프레임워크.
- [Binary Ninja](https://binary.ninja/) - 이진 분석 프레임워크.
- [BinUtils](http://www.gnu.org/software/binutils/binutils.html) - 바이너리 도구 모음.
- [BinWalk](https://github.com/devttys0/binwalk) - 펌웨어 이미지를 분석, 리버스 엔지니어링 및 추출합니다.
- [Boomerang](https://github.com/BoomerangDecompiler/boomerang) - x86/SPARC/PowerPC/ST-20 바이너리를 C로 디컴파일합니다.
- [ctf_import](https://github.com/docileninja/ctf_import) – run basic functions from stripped binaries cross platform.
- [cwe_checker](https://github.com/fkie-cad/cwe_checker) - cwe_checker는 바이너리 실행 파일에서 취약한 패턴을 찾습니다.
- [demovfuscator](https://github.com/kirschju/demovfuscator) - movfuscated 바이너리용 작업 진행 중인 난독화 도구입니다.
- [Frida](https://github.com/frida/) - 동적 코드 삽입.
- [GDB](https://www.gnu.org/software/gdb/) - GNU 프로젝트 디버거.
- [GEF](https://github.com/hugsy/gef) - GDB 플러그인.
- [Ghidra](https://ghidra-sre.org/) - 리버스 엔지니어링 도구의 오픈 소스 제품군입니다.  IDA Pro와 유사합니다.
- [Hopper](http://www.hopperapp.com/) - OSX 및 Linux용 리버스 엔지니어링 도구(디스어셈블러).
- [IDA Pro](https://www.hex-rays.com/products/ida/) - 가장 많이 사용되는 반전 소프트웨어.
- [Jadx](https://github.com/skylot/jadx) - 안드로이드 파일을 디컴파일합니다.
- [Java Decompilers](http://www.javadecompilers.com) - Java 및 Android APK용 온라인 디컴파일러입니다.
- [Krakatau](https://github.com/Storyyeller/Krakatau) - Java 디컴파일러 및 디스어셈블러.
- [Objection](https://github.com/sensepost/objection) - 런타임 모바일 탐색.
- [PEDA](https://github.com/longld/peda) - GDB 플러그인(python2.7만 해당).
- [Pin](https://software.intel.com/en-us/articles/pin-a-dynamic-binary-instrumentation-tool) - Intel의 동적 바이너리 계측 도구입니다.
- [PINCE](https://github.com/korcankaraokcu/PINCE) - 게임 해킹 및 자동화에 중점을 둔 GDB 프런트엔드/리버스 엔지니어링 도구입니다.
- [PinCTF](https://github.com/ChrisTheCoolHut/PinCTF) - 사이드 채널 분석을 위해 인텔 핀을 사용하는 도구입니다.
- [Plasma](https://github.com/joelpx/plasma) - 컬러 구문으로 들여쓰기된 의사 코드를 생성할 수 있는 x86/ARM/MIPS용 대화형 디스어셈블러입니다.
- [Pwndbg](https://github.com/pwndbg/pwndbg) - GDB를 쉽게 해킹할 수 있는 유틸리티 모음을 제공하는 GDB 플러그인입니다.
- [radare2](https://github.com/radare/radare2) - 휴대용 반전 프레임워크입니다.
- [Triton](https://github.com/JonathanSalwan/Triton/) - 동적 이진 분석(DBA) 프레임워크.
- [Uncompyle](https://github.com/gstarnberger/uncompyle) - Python 2.7 바이너리(.pyc)를 디컴파일합니다.
- [WinDbg](http://www.windbg.org/) - Microsoft에서 배포하는 Windows 디버거.
- [Xocopy](http://reverse.lostrealm.com/tools/xocopy.html) - 실행 권한은 있지만 읽기 권한은 없는 실행 파일을 복사할 수 있는 프로그램입니다.
- [Z3](https://github.com/Z3Prover/z3) - Microsoft Research의 정리 증명자.

*JavaScript 난독화 장치*

- [Detox](http://relentless-coding.org/projects/jsdetox/install) - 자바스크립트 악성코드 분석 도구입니다.
- [Revelo](http://www.kahusecurity.com/posts/revelo_javascript_deobfuscator.html) - 난독화된 Javascript 코드를 분석합니다.

*SWF 분석 도구*
- [RABCDAsm](https://github.com/CyberShadow/RABCDAsm) - ActionScript 3 어셈블러/디스어셈블러를 포함한 유틸리티 모음입니다.
- [Swftools](http://www.swftools.org/) - SWF 파일 작업을 위한 유틸리티 모음입니다.
- [Xxxswf](https://bitbucket.org/Alexander_Hanel/xxxswf) -  Flash 파일 분석을 위한 Python 스크립트입니다.

## 서비스 <span id="services"></span>

*인터넷을 통해 얻을 수 있는 다양한 유용한 서비스*

- [CSWSH](http://cow.cat/cswsh.html) - 사이트 간 WebSocket 하이재킹 테스터.
- [Request Bin](https://requestbin.com/) - 특정 URL에 대한 http 요청을 검사할 수 있습니다.

## 스테가노그래피 <span id="steganography-1"></span>

*스테가노그래피 문제를 해결하는 데 사용되는 도구*

- [AperiSolve](https://aperisolve.fr/) - Aperi'Solve는 이미지에 대한 레이어 분석을 수행하는 플랫폼입니다(오픈소스).
- [Convert](http://www.imagemagick.org/script/convert.php) - 이미지를 흑백 형식으로 변환하고 필터를 적용합니다.
- [Exif](http://manpages.ubuntu.com/manpages/trusty/man1/exif.1.html) - JPEG 파일에 EXIF ​​정보를 표시합니다.
- [Exiftool](https://linux.die.net/man/1/exiftool) - 파일의 메타정보를 읽고 씁니다.
- [Exiv2](http://www.exiv2.org/manpage.html) - 이미지 메타데이터 조작 도구.
- [Image Steganography](https://sourceforge.net/projects/image-steg/) - 선택적 암호화를 사용하여 이미지에 텍스트와 파일을 삽입합니다. 사용하기 쉬운 UI.
- [Image Steganography Online](https://incoherency.co.uk/image-steganography) - 이는 다른 이미지의 하위 "비트" 내부에 이미지를 스테가노그래피 방식으로 숨기는 클라이언트 측 Javascript 도구입니다.
- [ImageMagick](http://www.imagemagick.org/script/index.php) - 이미지 조작용 도구.
- [Outguess](https://www.freebsd.org/cgi/man.cgi?query=outguess+&apropos=0&sektion=0&manpath=FreeBSD+Ports+5.1-RELEASE&format=html) - 범용 스테가노그래피 도구.
- [Pngtools](https://packages.debian.org/sid/pngtools) - PNG와 관련된 다양한 분석에 사용됩니다.
  - `apt-get install pngtools`
- [SmartDeblur](https://github.com/Y-Vladimir/SmartDeblur) - 초점이 흐려진 이미지를 흐리게 하고 수정하는 데 사용됩니다.
- [Steganabara](https://www.openhub.net/p/steganabara) -  Java로 작성된 스테가노 분석용 도구입니다.
- [SteganographyOnline](https://stylesuxx.github.io/steganography/) - 온라인 스테가노그래피 인코더 및 디코더.
- [Stegbreak](https://linux.die.net/man/1/stegbreak) - JPG 이미지에 대한 무차별 사전 공격을 시작합니다.
- [StegCracker](https://github.com/Paradoxis/StegCracker) - 파일 내부의 숨겨진 데이터를 찾아내는 Steganography 무차별 대입 유틸리티입니다.
- [stegextract](https://github.com/evyatarmeged/stegextract) - 이미지 속 숨겨진 파일과 텍스트를 탐지합니다.
- [Steghide](http://steghide.sourceforge.net/) - 다양한 종류의 이미지에 데이터를 숨깁니다.
- [StegOnline](https://georgeom.net/StegOnline/upload) - 비트 내에 숨겨진 파일을 숨기거나 드러내는 등 광범위한 이미지 스테가노그래피 작업을 수행합니다(오픈 소스).
- [Stegsolve](http://www.caesum.com/handbook/Stegsolve.jar) - 다양한 스테가노그래피 기법을 이미지에 적용합니다.
- [Zsteg](https://github.com/zed-0xff/zsteg/) - PNG/BMP 분석.

## 웹 <span id="web-1"></span>

*웹 문제 해결에 사용되는 도구*

- [BurpSuite](https://portswigger.net/burp) - 웹사이트 보안을 테스트하는 그래픽 도구입니다.
- [Commix](https://github.com/commixproject/commix) - 자동화된 올인원 OS 명령 주입 및 악용 도구.
- [Hackbar](https://addons.mozilla.org/en-US/firefox/addon/hackbartool/) - 쉬운 웹 활용을 위한 Firefox 애드온.
- [OWASP ZAP](https://www.owasp.org/index.php/Projects/OWASP_Zed_Attack_Proxy_Project) - HTTP 요청 및 응답을 재생, 디버깅 및 퍼징하기 위해 프록시를 가로채는 중
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) - 네트워크 요청 디버깅을 위한 Chrome용 추가 기능입니다.
- [Raccoon](https://github.com/evyatarmeged/Raccoon) - 정찰 및 취약점 스캐닝을 위한 고성능 공격 보안 도구입니다.
- [SQLMap](https://github.com/sqlmapproject/sqlmap) - 자동 SQL 주입 및 데이터베이스 인수 도구입니다.
  ```pip install sqlmap```
- [W3af](https://github.com/andresriancho/w3af) -  웹 애플리케이션 공격 및 감사 프레임워크.
- [XSSer](http://xsser.sourceforge.net/) - 자동 XSS 테스터.


# 자료 <span id="resources"></span>

*CTF에 대해 알아볼 수 있는 곳*

## 운영체제 <span id="operating-systems"></span>

*침투 테스트 및 보안 연구소 운영 체제*

- [Android Tamer](https://androidtamer.com/) - 데비안 기반.
- [BackBox](https://backbox.org/) - 우분투 기반.
- [BlackArch Linux](https://blackarch.org/) - 아치 리눅스 기반.
- [Fedora Security Lab](https://labs.fedoraproject.org/security/) - 페도라 기반.
- [Kali Linux](https://www.kali.org/) - 데비안 기반.
- [Parrot Security OS](https://www.parrotsec.org/) - 데비안 기반.
- [Pentoo](http://www.pentoo.ch/) - 젠투 기반.
- [URIX OS](http://urix.us/) - openSUSE 기반.
- [Wifislax](http://www.wifislax.com/) - 슬랙웨어 기반.

*맬웨어 분석가 및 리버스 엔지니어링*

- [Flare VM](https://github.com/fireeye/flare-vm/) - Windows 기반.
- [REMnux](https://remnux.org/) - 데비안 기반.

## 시작 도구 모음 <span id="starter-packs"></span>

*설치 프로그램 스크립트 모음, 유용한 도구*

- [CTF Tools](https://github.com/zardus/ctf-tools) - 다양한 보안 연구 도구를 설치하기 위한 설정 스크립트 모음입니다.
- [LazyKali](https://github.com/jlevitsk/lazykali) - 도구 설치 및 구성을 단순화하는 LazyKali의 2016년 업데이트입니다.

## 튜토리얼 <span id="tutorials"></span>

*CTF 참여 방법을 배우는 튜토리얼*

- [CTF Field Guide](https://trailofbits.github.io/ctf/) - Trails of Bits의 실전 가이드.
- [CTF Resources](http://ctfs.github.io/resources/) - 커뮤니티에서 관리하는 입문 가이드.
- [How to Get Started in CTF](https://www.endgame.com/blog/how-get-started-ctf) - Endgame의 CTF 초보자를 위한 간략한 가이드라인
- [Intro. to CTF Course](https://www.hoppersroppers.org/courseCTF.html) - 초보자에게 포렌식, 암호화 및 Web-Ex의 기본을 가르치는 무료 강좌입니다.
- [IppSec](https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA) - 인기 있는 CTF 플랫폼에 대한 비디오 튜토리얼 및 연습입니다.
- [LiveOverFlow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w) - Exploitation에 대한 비디오 튜토리얼.
- [MIPT CTF](https://github.com/xairy/mipt-ctf) - CTF 초보자를 위한 소규모 코스(러시아어).


## 보안 실습 게임 <span id="wargames"></span>

*상시 온라인 CTF*

- [Backdoor](https://backdoor.sdslabs.co/) - SDSLabs의 보안 플랫폼.
- [Crackmes](https://crackmes.one/) - 리버스 엔지니어링 과제.
- [CryptoHack](https://cryptohack.org/) - 재미있는 암호화 문제.
- [echoCTF.RED](https://echoctf.red/) - 공격 대상이 다양한 온라인 CTF입니다.
- [Exploit Exercises](https://exploit-exercises.lains.space/) - 다양한 컴퓨터 보안 문제를 학습할 수 있는 다양한 VM.
- [Exploit.Education](http://exploit.education) - 다양한 컴퓨터 보안 문제를 학습할 수 있는 다양한 VM.
- [Gracker](https://github.com/Samuirai/gracker) - 학습 곡선이 느린 바이너리 챌린지이며 각 레벨에 대한 글을 작성합니다.
- [Hack The Box](https://www.hackthebox.eu) - 모든 유형의 보안 매니아를 위한 주간 CTF입니다.
- [Hack This Site](https://www.hackthissite.org/) - 해커들을 위한 훈련장. HackerOne의
- [Hacker101](https://www.hacker101.com/) - CTF
- [Hacking-Lab](https://hacking-lab.com/) - 윤리적 해킹, 컴퓨터 네트워크 및 보안 문제 플랫폼입니다.
- [Hone Your Ninja Skills](https://honeyourskills.ninja/) - 웹챌린지는 기초부터 시작합니다.
- [IO](http://io.netgarage.org/) - 바이너리 챌린지를 위한 워게임.
- [Microcorruption](https://microcorruption.com) - 임베디드 보안 CTF.
- [Over The Wire](http://overthewire.org/wargames/) - OvertheWire 커뮤니티에서 관리하는 워게임.
- [PentesterLab](https://pentesterlab.com/) - 다양한 VM 및 온라인 챌린지(유료).
- [PicoCTF](https://2019game.picoctf.com) - 연중무휴 CTF 게임입니다. 연간 picoCTF 대회의 질문입니다.
- [PWN Challenge](http://pwn.eonew.cn/) - 바이너리 활용 워게임.
- [Pwnable.kr](http://pwnable.kr/) - Pwn 게임.
- [Pwnable.tw](https://pwnable.tw/) - 바이너리 워게임.
- [Pwnable.xyz](https://pwnable.xyz/) - 바이너리 활용 워게임.
- [Reversin.kr](http://reversing.kr/) - 반전 챌린지.
- [Ringzer0Team](https://ringzer0team.com/) - Ringzer0 팀 온라인 CTF.
- [Root-Me](https://www.root-me.org/) - 해킹 및 정보보안 학습 플랫폼입니다.
- [ROP Wargames](https://github.com/xelenonz/game) - ROP 워게임.
- [SANS HHC](https://holidayhackchallenge.com/past-challenges/) - 휴일 테마를 사용한 챌린지
는 매년 출시되고 SANS에서 유지 관리됩니다.
- [SmashTheStack](http://smashthestack.org/) - SmashTheStack 커뮤니티에서 관리하는 다양한 전쟁 게임입니다.
- [Viblo CTF](https://ctf.viblo.asia) - 다양한 카테고리의 다양하고 놀라운 CTF 챌린지입니다. 연습 모드와 콘테스트 모드가 모두 있습니다.
- [VulnHub](https://www.vulnhub.com/) - VM 기반으로 디지털 보안, 컴퓨터 애플리케이션 및 네트워크 관리 실무에 적합합니다.
- [W3Challs](https://w3challs.com) - 다양한 카테고리에서 다양한 컴퓨터 과제를 제공하는 침투 테스트 교육 플랫폼입니다.
- [WebHacking](http://webhacking.kr) - 웹 해킹 문제입니다.


*자체 호스팅 CTF*
- [Damn Vulnerable Web Application](http://www.dvwa.co.uk/) - 매우 취약한 PHP/MySQL 웹 애플리케이션입니다.
- [Juice Shop CTF](https://github.com/bkimminich/juice-shop-ctf) - [OWASP Juice Shop](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project)에서 CTF를 쉽게 호스팅하기 위한 스크립트 및 도구입니다.

## 웹사이트 <span id="websites"></span>

*CTF에 관한 다양한 일반 웹사이트*

- [Awesome CTF Cheatsheet](https://github.com/uppusaikiran/awesome-ctf-cheatsheet#awesome-ctf-cheatsheet-) - CTF 치트시트.
- [CTF Time](https://ctftime.org/) - 전 세계에서 발생하는 CTF에 대한 일반 정보입니다.
- [Reddit Security CTF](http://www.reddit.com/r/securityctf) - Reddit CTF 카테고리.

## 위키 <span id="wikis"></span>

*CTF에 대해 학습할 수 있는 다양한 위키*

- [Bamboofox](https://bamboofox.github.io/) - CTF를 배울 수 있는 중국어 자료입니다. 팀 bi0s의
- [bi0s Wiki](https://teambi0s.gitlab.io/bi0s-wiki/) - 위키입니다.
- [CTF Cheatsheet](https://uppusaikiran.github.io/hacking/Capture-the-Flag-CheatSheet/) - CTF 팁과 요령. Isis lab의
- [ISIS Lab](https://github.com/isislab/Project-Ideas/wiki) - CTF Wiki.
- [OpenToAll](https://github.com/OpenToAllCTF/Tips) - OTA CTF 팀원이 제공하는 CTF 팁.

## 풀이 모음 <span id="writeups-collections"></span>

*CTF 글 모음*

- [0e85dc6eaf](https://github.com/0e85dc6eaf/CTF-Writeups) - 0e85dc6eaf의 CTF 문제에 대한 기록
- [Captf](http://captf.com/) - psifertex에서 CTF 문제와 자료를 덤프했습니다.
- [CTF write-ups (community)](https://github.com/ctfs/) - CTF 챌린지 + 커뮤니티에서 유지관리하는 글쓰기 아카이브입니다.
- [CTFTime Scrapper](https://github.com/abdilahrf/CTFWriteupScrapper) - CTF 시간의 모든 기록을 스크랩하고 먼저 읽을 항목을 구성합니다.
- [HackThisSite](https://github.com/HackThisSite/CTF-Writeups) - HackThisSite 팀에서 관리하는 CTF 기록 저장소입니다.
- [Mzfr](https://github.com/mzfr/ctf-writeups/) - mzfr의 CTF 대회 글
- [pwntools writeups](https://github.com/Gallopsled/pwntools-write-ups) - pwntools를 사용하는 CTF 기록 모음입니다.
- [SababaSec](https://github.com/SababaSec/ctf-writeups) - SababaSec 팀의 CTF 글 모음
- [Shell Storm](http://shell-storm.org/repo/CTF/) - Jonathan Salwan이 관리하는 CTF 챌린지 아카이브.
- [Smoke Leet Everyday](https://github.com/smokeleeteveryday/CTF_WRITEUPS) - SmokeLeetEveryday 팀에서 관리하는 CTF 작성 저장소입니다.

### 라이선스

CC0 :)
