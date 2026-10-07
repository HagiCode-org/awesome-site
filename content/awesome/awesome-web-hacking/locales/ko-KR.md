# awesome-web-hacking
이 목록은 웹 애플리케이션 보안을 배우고 싶지만 시작점이 없는 모든 분을 위한 것입니다.

Pull Request를 보내 정보를 추가함으로써 도울 수 있습니다.

PR을 만들고 싶지 않다면 Twitter의 `@infoslack`으로 멘션해 주세요.

목차
=================

   * [도서](#books)
   * [문서](#documentation)
   * [도구](#tools)
   * [치트 시트](#cheat-sheets)
   * [Docker](#docker-images-for-penetration-testing)
   * [취약점](#vulnerabilities)
   * [강좌](#courses)
   * [온라인 해킹 데모 사이트](#online-hacking-demonstration-sites)
   * [랩](#labs)
   * [SSL](#ssl)
   * [Ruby on Rails 보안](#security-ruby-on-rails)

## 도서

   * http://www.amazon.com/The-Web-Application-Hackers-Handbook/dp/8126533404/ Web Application Hacker’s Handbook: Finding and Exploiting Security Flaws (웹 애플리케이션 해커 핸드북: 보안 결함 찾기 및 악용)
   * http://www.amazon.com/Hacking-Web-Apps-Preventing-Application/dp/159749951X/ Hacking Web Apps: Detecting and Preventing Web Application Security Problems (웹 앱 해킹: 웹 애플리케이션 보안 문제 탐지 및 예방)
   * http://www.amazon.com/Hacking-Exposed-Web-Applications-Third/dp/0071740643/ Hacking Exposed Web Applications
   * http://www.amazon.com/SQL-Injection-Attacks-Defense-Second/dp/1597499633/ SQL Injection Attacks and Defense (SQL 인젝션 공격과 방어)
   * http://www.amazon.com/Tangled-Web-Securing-Modern-Applications/dp/1593273886/ The Tangled WEB: A Guide to Securing Modern Web Applications (뒤얽힌 웹: 현대 웹 애플리케이션 보안 가이드)
   * http://www.amazon.com/Web-Application-Obfuscation-Evasion-Filters/dp/1597496049/ Web Application Obfuscation: '-/WAFs..Evasion..Filters//alert(/Obfuscation/)-'
   * http://www.amazon.com/XSS-Attacks-Scripting-Exploits-Defense/dp/1597491543/ XSS Attacks: Cross Site Scripting Exploits and Defense (XSS 공격: 크로스 사이트 스크립팅 악용과 방어)
   * http://www.amazon.com/Browser-Hackers-Handbook-Wade-Alcorn/dp/1118662091/ The Browser Hacker’s Handbook (브라우저 해커 핸드북)
   * http://www.amazon.com/Basics-Web-Hacking-Techniques-Attack/dp/0124166008/ The Basics of Web Hacking: Tools and Techniques to Attack the Web (웹 해킹의 기초: 웹을 공격하는 도구와 기법)
   * http://www.amazon.com/Web-Penetration-Testing-Kali-Linux/dp/1782163166/ Web Penetration Testing with Kali Linux (Kali Linux로 하는 웹 침투 테스트)
   * http://www.amazon.com/Web-Application-Security-Beginners-Guide/dp/0071776168/ Web Application Security, A Beginner's Guide (웹 애플리케이션 보안, 초보자 가이드)
   * https://www.amazon.com/Hacking-Art-Exploitation-Jon-Erickson/dp/1593271441/ Hacking: The Art of Exploitation (해킹: 익스플로잇의 기술)
   * https://www.crypto101.io/ - Crypto 101은 암호학 입문 과정입니다
   * http://www.offensive-security.com/metasploit-unleashed/ - Metasploit Unleashed
   * http://www.cl.cam.ac.uk/~rja14/book.html - Security Engineering (보안 공학)
   * https://www.feistyduck.com/library/openssl-cookbook/ - OpenSSL Cookbook
   * https://www.manning.com/books/real-world-cryptography - 암호 기술을 배우고 적용하십시오.
   * https://www.manning.com/books/making-sense-of-cyber-security - 보안 전략을 계획하거나 구현하는任何人에게 적합한 사이버 보안의 핵심 개념, 용어, 기술에 대한 가이드.
   * https://www.manning.com/books/cyber-security-career-guide - 기존의 기술적·비기술적 기술을 활용하는 방법을 배워 사이버 보안 경력을 시작하십시오.
   * https://www.manning.com/books/secret-key-cryptography - 암호 기술과 비밀 키(Secret Key) 방식에 관한 책.
   * https://www.manning.com/books/application-security-program-handbook - 이 실용적인 책은 견고한 애플리케이션 보안 프로그램을 구현하기 위한 올인원 가이드입니다.
   * https://www.manning.com/books/cyber-threat-hunting - 사이버 위협 헌팅 실무 가이드.
   * https://nostarch.com/bug-bounty-bootcamp - Bug Bounty Bootcamp (버그 바운티 부트캠프)
   * https://nostarch.com/hacking-apis - Hacking APIs (API 해킹)
   * https://www.manning.com/books/grokking-web-application-security - 어떤 공격에도 대비하고 복원력 있는 웹 앱 구축에 관한 책.

## 문서

   * https://www.owasp.org/ - Open Web Application Security Project
   * http://www.pentest-standard.org/ - Penetration Testing Execution Standard
   * http://www.binary-auditing.com/ - Thorsten Schneider 박사의 Binary Auditing
   * https://appsecwiki.com/ - Application Security Wiki는 보안 연구원과 개발자에게 애플리케이션 보안 관련 모든 리소스를 한곳에서 제공하려는 이니셔티브입니다.
   * [AppSec Santa](https://appsecsanta.com) - SAST, DAST, SCA 등 129개 이상의 웹 애플리케이션 보안 도구에 대한 독립적인 비교.

## 도구
   * https://github.com/bad-antics/nullsec-linux - NullSec Linux - 사전 구성된 웹 애플리케이션 테스트 도구를 갖춘 보안 배포판
   * https://github.com/bad-antics/nullsec-webfuzz - NullSec WebFuzz - 웹 애플리케이션 퍼징 프레임워크
   * https://github.com/poszothebuilder/nextjs-security-headers-starter - 종속성 없는 Next.js 보안 헤더 스타터. CSP, HSTS 및 CI용 프로덕션 검증기를 포함.

   * https://www.deepinfo.com/ - Deepinfo Attack Surface Platform은 모든 디지털 자산을 발견하고 24시간 모니터링하며 문제를 감지해 즉시 알림을 보내 신속히 대응할 수 있게 합니다.
     * https://github.com/bountyyfi/lonkero - 60개 이상의 공격 모듈을 갖춘 기업용 웹 취약점 스캐너. 침투 테스트 및 보안 평가용으로 Rust로 구축.
   * https://spyse.com/ - 전체 웹에 대한 최신 데이터를 제공하는 OSINT 검색 엔진. 모든 데이터를 자체 DB에 저장하고 발견한 데이터를 상호 연결하며 몇 가지 유용한 기능이 있음.
   * http://www.metasploit.com/ - 전 세계에서 가장 많이 사용되는 침투 테스트 소프트웨어
   * https://findsubdomains.com - 다양한 추가 데이터를 갖춘 온라인 하위 도메인 스캐너 서비스. OSINT를 사용해 동작.
   * https://cc.la - WHOIS, RDAP, DNS, IP WHOIS, SSL 인증서 조회, 네임서버 기록, 네트워크 진단(ping/traceroute/MTR), 도메인 모니터링을 위한 무료 온라인 툴킷. 가입 불필요.
   * https://vacato.io - 무료 RDAP 도메인 관찰 목록: 예약된 점검 + 상태가 사용 가능해 보일 때 Telegram/이메일/Slack 알림. 등록 기관이나 드롭 캐처가 아님. 무료 계층: 10개 도메인.
   * https://github.com/BlessedRebuS/Krawl - 클라우드 네이티브 웹 기만 서버 및 안티 크롤러.
   * https://github.com/bjeborn/basic-auth-pot HTTP Basic 인증 허니팟.
   * http://www.arachni-scanner.com/ - Web Application Security Scanner Framework
   * https://github.com/ASCIT31/Dark-Moon - Darkmoon은 MCP를 통해 80개 이상의 도구를 오케스트레이션하고 기술별 전담 공격 하위 에이전트(GraphQL, Spring Boot, ASP.NET, Node.js, Flask, PHP, Ruby)를 갖추며 발견별 증거 추적을 유지하는 오픈소스(GPL-3.0) 자율 AI 침투 테스트 플랫폼입니다.
   * https://github.com/BugTraceAI/BugTraceAI - BugTraceAI는 검증, 증거 포착, 보고 기능을 갖춘 승인된 웹 애플리케이션 보안 테스트용 오픈소스 다중 에이전트 플랫폼.
   * https://github.com/TayfurYldz/headerproof - HeaderProof는 CORS 잘못된 구성, 응답 분할, 캐시 포이즈닝 후보, 리플렉션 경로 등 헤더 기반 웹 보안 단서를 승인된 테스트에서 검사하는 개발자 알파 단계의 저노이즈 능동 스캐너로, 명시적 증거 게이트와 오탐 억제를 갖추고 있음.
   * https://github.com/ANVEAI/anve-offsec - Kali Linux에서 실행되는 자율 AI 보안 엔지니어이자 버그 바운티 플랫폼. 상태 기반 Hermes 추론, OpenClaw Chromium 브라우저 사이드카, Qdrant 벡터 전략 RAG 탑재. 🇮🇳
   * https://github.com/sullo/nikto - Nikto 웹 서버 스캐너
   * http://www.tenable.com/products/nessus-vulnerability-scanner - Nessus Vulnerability Scanner
   * http://www.portswigger.net/burp/intruder.html - Burp Intruder는 웹 앱에 대한 맞춤 공격을 자동화하는 도구.
   * http://www.openvas.org/ - 세계에서 가장 진보된 오픈소스 취약점 스캐너이자 관리자.
   * https://github.com/iSECPartners/Scout2 - AWS 환경을 위한 보안 감사 도구
   * https://www.owasp.org/index.php/Category:OWASP_DirBuster_Project - 웹/애플리케이션 서버의 디렉토리와 파일 이름을 무차별 대입하기 위해 설계된 멀티스레드 자바 애플리케이션.
   * https://www.owasp.org/index.php/ZAP - Zed Attack Proxy는 웹 애플리케이션의 취약점을 찾기 위한 사용하기 쉬운 통합 침투 테스트 도구.
   * https://github.com/vigolium/vigolium - 에이전트형 AI와 빠른 네이티브 엔진을 융합한 고정밀 웹 및 API 취약점 스캐너. OWASP Top 10, 인증된 IDOR/BOLA 및 대역 외 테스트를 포괄하며 OpenAPI/Postman/Burp/cURL 입력을 지원. 250개 이상의 탐지 모듈. 오픈소스, AGPL-3.0.
   * https://github.com/tecknicaltom/dsniff - dsniff는 네트워크 감사 및 침투 테스트용 도구 모음.
   * https://github.com/WangYihang/Webshell-Sniper - 터미널로 웹셸 관리.
   * https://github.com/DanMcInerney/dnsspoof - DNS 스푸퍼. 라우터의 DNS 응답을 삭제하고 위조된 DNS 응답으로 교체.
   * https://github.com/trustedsec/social-engineer-toolkit - TrustedSec의 Social-Engineer Toolkit (SET) 저장소
   * https://github.com/sqlmapproject/sqlmap - 자동 SQL 인젝션 및 데이터베이스 장악 도구
   * https://github.com/beefproject/beef - The Browser Exploitation Framework Project
   * http://w3af.org/ - w3af는 Web Application Attack and Audit Framework
   * https://github.com/espreto/wpsploit - WPSploit, Metasploit로 WordPress 악용
   * https://vulert.com/ - Vulert는 오픈소스 종속성의 취약점을 감지하여 소프트웨어를 보호—코드에 접근하지 않음. Js, PHP, Java, Python 등 지원.
   * https://github.com/WangYihang/Reverse-Shell-Manager - 터미널을 통한 리버스 셸 관리.
   * https://github.com/RUB-NDS/WS-Attacker - WS-Attacker는 웹 서비스 침투 테스트를 위한 모듈식 프레임워크
   * https://github.com/wpscanteam/wpscan - WPScan은 블랙박스 WordPress 취약점 스캐너
   * https://github.com/own2pwn-fr/wp2shell-detect - WordPress 코어의 wp2shell 사전 인증 RCE 체인(CVE-2026-63030 / CVE-2026-60137)용 블랙박스, 비침습적 탐지기. 공개 소스에서 코어 버전 지문을 추출하고 악용하지 않고 취약한 설치를 표시
   * http://sourceforge.net/projects/paros/ Paros proxy
   * https://www.owasp.org/index.php/Category:OWASP_WebScarab_Project Web Scarab proxy
   * https://code.google.com/p/skipfish/ Skipfish, 능동적 웹 애플리케이션 보안 정찰 도구
   * http://www.acunetix.com/vulnerability-scanner/ Acunetix Web Vulnerability Scanner
   * https://cystack.net/ CyStack Web Security Platform
   * http://www-03.ibm.com/software/products/en/appscan IBM Security AppScan
   * https://www.netsparker.com/web-vulnerability-scanner/ Netsparker web vulnerability scanner
   * http://www8.hp.com/us/en/software-solutions/webinspect-dynamic-analysis-dast/index.html HP Web Inspect
   * https://github.com/sensepost/wikto Wikto - 일부 추가 기능이 있는 Windows용 Nikto
   * http://samurai.inguardians.com Samurai Web Testing Framework
   * https://code.google.com/p/ratproxy/ Ratproxy
   * http://www.websecurify.com Websecurify
   * http://sourceforge.net/projects/grendel/ Grendel-scan
   * https://tools.kali.org/web-applications/gobuster Go로 작성된 디렉토리/파일 및 DNS 버스팅 도구
   * http://www.edge-security.com/wfuzz.php Wfuzz
   * http://wapiti.sourceforge.net wapiti
   * https://github.com/neuroo/grabber Grabber
   * https://subgraph.com/vega/ Vega
   * http://websecuritytool.codeplex.com Watcher passive web scanner
   * http://xss.codeplex.com x5s XSS and Unicode transformations security testing assistant
   * http://www.beyondsecurity.com/avds AVDS Vulnerability Assessment and Management
   * http://www.golismero.com Golismero
   * http://www.ikare-monitoring.com IKare
   * http://www.nstalker.com N-Stalker X
   * https://www.rapid7.com/products/nexpose/index.jsp Nexpose
   * http://www.rapid7.com/products/appspider/ App Spider
   * http://www.milescan.com ParosPro
   * https://www.qualys.com/enterprises/qualysguard/web-application-scanning/ Qualys Web Application Scanning
   * http://www.beyondtrust.com/Products/RetinaNetworkSecurityScanner/ Retina
   * https://www.owasp.org/index.php/OWASP_Xenotix_XSS_Exploit_Framework Xenotix XSS Exploit Framework
   * https://github.com/future-architect/vuls Vulnerability scanner for Linux, agentless, written in golang.
   * https://github.com/rastating/wordpress-exploit-framework WordPress 사이트 및 시스템 침투 테스트를 돕는 모듈을 개발하고 사용하기 위한 Ruby 프레임워크.
   * http://www.xss-payloads.com/ XSS Payloads to leverage XSS vulnerabilities, build custom payloads, practice penetration testing skills.
   * https://github.com/joaomatosf/jexboss JBoss(및 기타 Java 역직렬화 취약점) 검증 및 악용 도구
   * https://github.com/commixproject/commix Automated All-in-One OS command injection and exploitation tool
   * https://github.com/pathetiq/BurpSmartBuster A Burp Suite content discovery plugin that add the smart into the Buster!
   * https://github.com/GoSecure/csp-auditor Burp and ZAP plugin to analyze CSP headers
   * https://github.com/ffleming/timing_attack Perform timing attacks against web applications
   * https://github.com/lalithr95/fuzzapi Fuzzapi is a tool used for REST API pentesting
   * https://github.com/owtf/owtf Offensive Web Testing Framework (OWTF)
   * https://github.com/nccgroup/wssip Application for capturing, modifying and sending custom WebSocket data from client to server and vice versa.
   * https://github.com/PalindromeLabs/STEWS Tool suite for WebSocket discovery, fingerprinting, and vulnerability detection
   * https://github.com/tijme/angularjs-csti-scanner Automated client-side template injection (sandbox escape/bypass) detection for AngularJS (ACSTIS).
   * https://reshift.softwaresecured.com A source code analysis tool for detecting and managing Java security vulnerabilities.
   * https://encoding.tools Web app for transforming binary data and strings, including hashes and various encodings. GPLv3 offline version available.
   * https://gchq.github.io/CyberChef/ A "Cyber Swiss Army Knife" for carrying out various encodings and transformations of binary data and strings.
   * https://github.com/urbanadventurer/WhatWeb WhatWeb - Next generation web scanner
   * https://www.shodan.io/ Shodan - The search engine for find vulnerable servers
   * https://github.com/WangYihang/Webshell-Sniper A webshell manager via terminal
   * https://github.com/nil0x42/phpsploit PhpSploit - Full-featured C2 framework which silently persists on webserver via evil PHP oneliner
   * https://webhint.io/ - webhint - webhint는 코드의 모범 사례와 일반적인 오류를 검사하여 사이트의 접근성, 속도, 브라우저 간 호환성 등을 개선하는 데 도움이 되는 사용자 정의 가능한 린트 도구.
   * https://gtfobins.github.io/ - gtfobins - GTFOBins는 잘못 구성된 시스템에서 로컬 보안 제한을 우회하는 데 사용할 수 있는 Unix 바이너리의 큐레이션된 목록.
   * https://github.com/HightechSec/git-scanner git-scanner - 공개된 `.git` 저장소를 가진 웹사이트를 대상으로 하는 버그 헌팅이나 펜테스트용 도구
   * [Web Application Exploitation @ Rawsec Inventory](https://inventory.raw.pm/tools.html#title-tools-web-application-exploitation) - 완전한 웹 펜테스트 도구 목록
   * [Cyclops is a novel browser that can detect vulnerability automatically](https://github.com/v8blink/Chromium-based-XSS-Taint-Tracking/) - Cyclops는 XSS 탐지 기능이 있는 웹 브라우저
   * https://caido.io/ - Web proxy
   * https://github.com/assetnote/kiterunner - API discovery
   * https://github.com/owasp-amass/amass - domain recon
   * [https://columbus.elmasy.com/](https://columbus.elmasy.com/) - Columbus Project는 빠르고 강력하며 사용하기 쉬운 API를 갖춘 고급 하위 도메인 발견 서비스.
   * [BadUSB Script To Exfiltrate Passwords](https://github.com/MarkCyber/BadUSB/blob/main/HackStuff/CredentialHarvester.txt) - Chrome, Firefox, Edge에서 저장된 모든 비밀번호를 추출하여 추가 분석을 위해 보조 USB에 저장.
   * https://github.com/flibustier/jwt-online-cracker - 브라우저에서 HS256, HS384, HS512 JWT 토큰을 무차별 대입(완전 클라이언트 측).
   * [jwt-auditor](https://github.com/mohelobeid/jwt-auditor) - alg:none, 약한 HMAC 비밀, RS256에서 HS256으로 혼동을 탐지하기 위한 오프라인 CLI로 JWT를 디코딩하고 감사.
   * https://github.com/lukechilds/reverse-shell - 대부분의 Unix 계열 시스템에서 동작해야 하는 외우기 쉬운 리버스 셸.
   * https://github.com/momenbasel/keyFinder - 80개 이상의 탐지 패턴과 10개 공격 표면에 걸친 섀넌 엔트로피를 사용하여 유출된 API 키, 토큰, 비밀을 웹 페이지에서 수동적으로 스캔하는 Chrome 확장.
   * https://github.com/DenisPodgurskii/pentestkit - DAST, SAST, IAST, SCA 기능을 결합하여 런타임, 소스 수준, 대화형, 종속성 관련 보안 문제를 탐지하는 버그 바운티 및 펜테스트용 브라우저 기반 취약점 스캐너.
- [SaaSFort](https://saasfort.com/scan) - 무료 60초 외부 NIS2 / 보안 태세 스캔, A-F 등급, 가입 불필요.
- [ARS3NAL](https://github.com/inflictx/Arsenal) - 오프라인 우선, 검색 가능한 무기고: 약 1500개 페이로드, 명령 생성기, GTFOBins, 워드리스트, 내장 CyberChef, 리버스 셸 및 70개 체크리스트.
- [Mozilla - HTTP Observatory](https://developer.mozilla.org/en-US/observatory) - Mozilla가 개발한 HTTP Observatory는 사이트의 HTTP 헤더 및 기타 주요 보안 구성을 심층 평가.
- [HTTP Security Report](https://httpsecurityreport.com/) - 귀하의 웹사이트가 모범 사례와 얼마나 일치하는지 즉시 보고서를 받으세요.
- [ImmuniWeb CyberScore](https://www.immuniweb.com/cyberscore/) - 귀하의 기업, 파트너 또는 공급업체에 대한 무료 사이버 보안, 개인정보 보호 및 AI 보안 등급
- [ImmuniWeb - Website Security Test](https://www.immuniweb.com/websec/) - 웹 보안 취약점, AI 봇 보호, HTTP 보안 및 개인정보 보호 헤더, DNSSEC 구성, CSP 및 GDPR과 PCI DSS 준수 여부를 확인. 월 10회 무료 테스트(계정 불필요)
- [Pentest Tools - Website Vulnerability Scanner](https://pentest-tools.com/website-vulnerability-scanning/website-scanner) - SQLi, XSS, 명령 인젝션, XXE 및 75개 이상의 웹 앱 취약점 탐지
- [Pentest Tools - Network Vulnerability Scanner](https://pentest-tools.com/network-vulnerability-scanning/network-security-scanner-online) - 네트워크 인프라의 취약점, 잘못된 구성, 오래된 서비스, 노출된 포트를 식별하도록 설계된 온라인 보안 도구
- [UpClaw](https://github.com/okdkebm/UpClaw) - AI 기반 웹 펜테스트 CLI. 단일 종속성 없는 Python 파일(29개 내장 검사 + 16개 외부 도구 어댑터 + 증거 보고서).
- [HTTP Detection Agent](https://github.com/ai-blueteam/http-detection-agent) - 오픈소스, 로컬 우선 HTTP 공격 탐지기: Rust CLI로 62개 행동 패밀리에 걸쳐 76개 탐지(인젝션, 트래버설, 요청 스마글링, SSRF, XXE, 역직렬화 등)와 에이전트 기반 분류를 위한 로컬 MCP 서버 탑재

## 치트 시트

   * http://n0p.net/penguicon/php_app_sec/mirror/xss.html - XSS 치트 시트
   * https://highon.coffee/blog/lfi-cheat-sheet/ - LFI 치트 시트
   * https://highon.coffee/blog/reverse-shell-cheat-sheet/ - 리버스 셸 치트 시트
   * https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/ - SQL 인젝션 치트 시트
   * https://www.gracefulsecurity.com/path-traversal-cheat-sheet-windows/ - 경로 트래버설 치트 시트: Windows
   * [Pentest Mindmap](https://pentestmindmap.com/en) - 32개 범주에 걸쳐 11,600개 이상의 펜테스트 명령이 있는 대화형 마인드맵. 검색 가능하고 한 번에 복사.

## 침투 테스트용 Docker 이미지

   * `docker pull kalilinux/kali-linux-docker` [공식 Kali Linux](https://hub.docker.com/r/kalilinux/kali-linux-docker/)
   * `docker pull blackarchlinux/blackarch` [공식 BlackArch Linux](https://hub.docker.com/r/blackarchlinux/blackarch)
   * `docker pull owasp/zap2docker-stable` - [공식 OWASP ZAP](https://github.com/zaproxy/zaproxy)
   * `docker pull wpscanteam/wpscan` - [공식 WPScan](https://hub.docker.com/r/wpscanteam/wpscan/)
   * `docker pull metasploitframework/metasploit-framework` - [docker-metasploit](https://hub.docker.com/r/metasploitframework/metasploit-framework/)
   * `docker pull citizenstig/dvwa` - [Damn Vulnerable Web Application (DVWA)](https://hub.docker.com/r/citizenstig/dvwa/)
   * `docker pull bkimminich/juice-shop` [OWASP Juice Shop](https://hub.docker.com/r/bkimminich/juice-shop)
   * `docker pull wpscanteam/vulnerablewordpress` - [취약한 WordPress 설치](https://hub.docker.com/r/wpscanteam/vulnerablewordpress/)
   * `docker pull hmlio/vaas-cve-2014-6271` - [Vulnerability as a service: Shellshock](https://hub.docker.com/r/hmlio/vaas-cve-2014-6271/)
   * `docker pull hmlio/vaas-cve-2014-0160` - [Vulnerability as a service: Heartbleed](https://hub.docker.com/r/hmlio/vaas-cve-2014-0160/)
   * `docker pull opendns/security-ninjas` - [Security Ninjas](https://hub.docker.com/r/opendns/security-ninjas/)
   * `docker pull noncetonic/archlinux-pentest-lxde:1.0` - [Arch Linux Penetration Tester](https://hub.docker.com/r/noncetonic/archlinux-pentest-lxde/)
   * `docker pull diogomonica/docker-bench-security` - [Docker Bench for Security](https://hub.docker.com/r/diogomonica/docker-bench-security/)
   * `docker pull ismisepaul/securityshepherd` - [OWASP Security Shepherd](https://hub.docker.com/r/ismisepaul/securityshepherd/)
   * `docker pull danmx/docker-owasp-webgoat` - [OWASP WebGoat Project docker image](https://hub.docker.com/r/webgoat/goatandwolf)
   *  `docker pull docker pull jeroenwillemsen/wrongsecrets` - [OWASP WrongSecrets Project docker image](https://hub.docker.com/r/jeroenwillemsen/wrongsecrets)
   * `docker pull citizenstig/nowasp` - [OWASP Mutillidae II Web Pen-Test Practice Application](https://hub.docker.com/r/citizenstig/nowasp/)
   * `docker pull aaaguirre/pentest` - [Docker for pentest](https://github.com/aaaguirrep/pentest)
   * `docker pull rustscan/rustscan:2.0.0` - [The Modern Port Scanner](https://github.com/RustScan/RustScan)

## 취약점

   * http://cve.mitre.org/ - Common Vulnerabilities and Exposures. 정보 보안 취약점 명명을 위한 표준
   * https://www.exploit-db.com/ - The Exploit Database – Exploits, Shellcode 및 Security Papers의 궁극적 아카이브.
   * http://0day.today/ - Inj3ct0r는 익스플로잇과 취약점의 궁극적 데이터베이스이자 취약점 연구원과 보안 전문가를 위한 훌륭한 자원.
   * http://www.securityfocus.com/ - 1999년 창립 이래 SecurityFocus는 보안 커뮤니티의 중심축이었음.
   * http://packetstormsecurity.com/ - 글로벌 보안 리소스
   * https://wpvulndb.com/ - WPScan Vulnerability Database
   * https://snyk.io/vuln/ - Vulnerability DB, 알려진 취약점에 대한 상세 정보 및 수정 지침.
   * https://stellastra.com/cipher-suite - 수백 개의 TLS 암호 제품군과 그 보안 상태의 데이터베이스.
   * https://vulert.com/vuln-db - Vulert는 오픈소스 종속성의 취약점을 모니터링하고 경고하여 개발자가 코드에 접근하지 않고도 소프트웨어를 보호하도록 돕습니다. Js, PHP, Java, Python 등 다수의 종속성 지원.
   * https://vulncheck.com/xdb/ - Git 저장소의 익스플로잇 개념 증명 코드 색인.
   * https://labs.jamessawyer.co.uk/cves/ - CVE PoC Search는 웹 취약점에서 공개 익스플로잇 코드로 빠르게 전환할 수 있는 CVE 대 GitHub 개념 증명 조회를 제공.

## 강좌

   * https://pwn.guide/ - 사이버 보안 학습 플랫폼으로 약 100개 튜토리얼이 있으며 그중 약 25개가 웹 해킹 및 사이트 방어에 관한 것.
   * https://www.offensive-security.com/information-security-training/advanced-web-attack-and-exploitation/ Offensive Security Advanced Web Attacks and Exploitation (라이브)
   * https://www.sans.org/course/web-app-penetration-testing-ethical-hacking Sans SEC542: Web App Penetration Testing and Ethical Hacking
   * https://www.sans.org/course/advanced-web-app-penetration-testing-ethical-hacking Sans SEC642: Advanced Web App Penetration Testing and Ethical Hacking
   * http://opensecuritytraining.info/ - Open Security Training
   * http://securitytrainings.net/security-trainings/ - Security Exploded Training
   * http://www.securitytube.net/ - 세계 최대의 Infosec 및 해킹 포털.
   * https://www.hacker101.com/ - [Hackerone](https://www.hackerone.com)이 제공하는 무료 웹 보안 강좌
   * https://www.darkrelay.com/courses/professional-penetration-tester - [DarkRelay Security Labs](https://www.darkrelay.com)가 제공하는 Zero-Hero 스타일 펜테스트 강좌

## 온라인 해킹 데모 사이트

   * http://testasp.vulnweb.com/ - Acunetix ASP 테스트 및 데모 사이트
   * http://testaspnet.vulnweb.com/ - Acunetix ASP.Net 테스트 및 데모 사이트
   * http://testphp.vulnweb.com/ - Acunetix PHP 테스트 및 데모 사이트
   * http://crackme.cenzic.com/kelev/view/home.php - Crack Me Bank
   * http://zero.webappsecurity.com/ - Zero Bank
   * http://demo.testfire.net/ - Altoro Mutual
   * https://public-firing-range.appspot.com/ - Firing Range는 자동화된 웹 애플리케이션 보안 스캐너를 위한 테스트베드.
   * https://xss-game.appspot.com/ - XSS 챌린지
   * https://google-gruyere.appspot.com/ Google Gruyere, 웹 애플리케이션 익스플로잇과 방어
   * https://ginandjuice.shop/catalog
   * https://pentest-ground.com/ Pentest-Ground는 의도적으로 취약한 웹 애플리케이션과 네트워크 서비스를 갖춘 무료 놀이터.
  * [HackSimulator](https://chatgpt.com/g/g-jnT7HlNeK-hacksimulator)는 [MarkCyber](https://github.com/MarkCyber)가 만든 GPT로, 그 안에서 ChatGPT 4가 해킹 CTF 역할을 합니다. 이 GPT는 침투할 머신/애플리케이션을 시뮬레이션하기 전에 귀하의 경험 수준과 향상시키고 싶은 부분을 묻고, 채팅창을 터미널 명령을 입력하는 곳으로 사용합니다. AI를 통해 이루어지므로 경험 수준에 따라 변화하고 조정되며 막혔을 때 도움을 요청할 수 있습니다.

## 랩
   * https://portswigger.net/web-security - Web Security Academy: PortSwigger의 무료 온라인 교육
   * http://www.cis.syr.edu/~wedu/seed/all_labs.html - 컴퓨터 보안 교육을 위한 교수용 실습 개발
   * https://www.vulnhub.com/ - 로컬호스트 침투 테스트용 가상 머신.
   * https://pentesterlab.com/ - PentesterLab은 침투 테스트를 배우는 쉽고 훌륭한 방법.
   * https://codereviewlab.com/ - Code Review Lab은 실습형 코드 리뷰 교육 플랫폼.
   * https://github.com/jerryhoff/WebGoat.NET - 이 웹 애플리케이션은 일반적인 웹 보안 결함에 대한 학습 플랫폼.
   * http://www.dvwa.co.uk/ - Damn Vulnerable Web Application (DVWA)
   * http://sourceforge.net/projects/lampsecurity/ - LAMPSecurity Training
   * https://github.com/Audi-1/sqli-labs - 오류 기반, 블라인드 불리언 기반, 시간 기반 SQLI를 테스트하는 랩.
   * https://github.com/paralax/lfi-labs - LFI, RFI, CMD 인젝션 취약점을 연습하기 위한 작은 PHP 스크립트 모음
   * https://hack.me/ - 샌드박스 환경에서 취약한 웹 앱을 무료로 구축, 호스팅, 공유
   * http://azcwr.org/az-cyber-warfare-ranges - 초보자부터 고급 사용자까지를 위한 무료 실전 Capture the Flag, 블루팀, 레드팀 사이버 전장. 사격장 접근을 요청하는 문자 메시지를 보내기 위해 휴대전화를 사용해야 함.
   * https://github.com/adamdoupe/WackoPicko - WackoPicko는 웹 애플리케이션 취약점 스캐너를 테스트하는 데 사용되는 취약한 웹 애플리케이션.
   * https://github.com/rapid7/hackazon - Hackazon은 오늘날의 리치 클라이언트 및 모바일 애플리케이션과 동일한 기술로 구축된 온라인 상점인 무료 취약 테스트 사이트.
   * https://github.com/RhinoSecurityLabs/cloudgoat - Rhino Security Labs의 "의도적으로 취약한" AWS 인프라 구축 도구
   * https://www.hackthebox.eu/ - Hack The Box는 사이버 보안 기술을 테스트하고 향상시키는 온라인 플랫폼.
   * https://github.com/tegal1337/0l4bs - 0l4bs는 웹 애플리케이션 보안 애호가를 위한 크로스 사이트 스크립팅 랩.
   * https://github.com/oliverwiegers/pentest_lab - docker compose를 활용한 로컬 펜테스트 랩.
   * https://ginandjuice.shop/catalog
   * https://github.com/dolevf/Damn-Vulnerable-GraphQL-Application
   * https://labex.io/skilltrees/cybersecurity - LabEx는 실습 랩을 통해 사이버 보안 기술을 향상시키는 온라인 플랫폼.
   * https://pythoncyber.go.ro - CyberPython은 챌린지 해결, CVE 악용, 좋은 스크립트 작성을 위해 직접 조사하도록 돕습니다.
   * https://github.com/kOaDT/oss-oopssec-store - OSS – OopsSec Store: 웹 보안 교육과 CTF 연습을 위해 Next.js와 React로 구축된 의도적으로 취약한 전자상거래 애플리케이션.
   * https://github.com/momenbasel/htb-writeups - HTB Writeups: 500개 이상의 머신, 400개 이상의 챌린지, ProLabs, Sherlocks, CTF 이벤트 및 치트 시트를 포함한 가장 포괄적인 Hack The Box 해설 모음.

## SSL

   * https://www.ssllabs.com/ssltest/index.html - 이 서비스는 공개 인터넷상의 모든 SSL 웹 서버 구성을 심층 분석.
   * https://certobserver.com/ct-search - 도메인에 발급된 SSL/TLS 인증서의 Certificate Transparency 로그 검색.
   * https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html - Strong SSL Security on nginx
   * https://weakdh.org/ - Weak Diffie-Hellman and the Logjam Attack
   * https://letsencrypt.org/ - Let’s Encrypt는 새로운 인증 기관: 무료이고 자동화되었으며 개방적.
   * https://filippo.io/Heartbleed/ - CVE-2014-0160(Heartbleed)용 검사기(사이트 및 도구).
   * https://testssl.sh/ - 웹사이트의 TLS/SSL 암호, 프로토콜 및 암호학적 결함을 검사하는 명령줄 도구.
   * [Scorifya](https://www.scorifya.com) - TLS, 보안 헤더(CSP, HSTS, X-Frame-Options), 쿠키, DNS 및 이메일 신호(SPF, DKIM, DMARC)를 포괄하는 모든 웹사이트의 0–100 보안 점수와 순위화된 수정 단계 제공.
   * [ImmuniWeb SSL Security Test](https://www.immuniweb.com/ssl/) - 웹사이트 또는 메일 서버의 SSL/TLS 구성 보안을 확인하는 무료 온라인 도구. NIST, HIPAA, PCI DSS, GDPR 등 보안 표준 준수 여부 확인. 월 10회 무료 테스트(계정 불필요)

## Ruby on Rails 보안

   * http://brakemanscanner.org/ - Ruby on Rails 애플리케이션을 위한 정적 분석 보안 취약점 스캐너.
   * https://github.com/rubysec/ruby-advisory-db - 취약한 Ruby Gems 데이터베이스
   * https://github.com/rubysec/bundler-audit - Bundler용 패치 수준 검증
   * https://github.com/hakirisec/hakiri_toolbelt - Hakiri Toolbelt는 Hakiri 플랫폼용 명령줄 인터페이스.
   * https://hakiri.io/facets - Gemfile.lock의 취약점 스캔.
   * http://rails-sqli.org/ - 이 페이지는 원시 SQL 인수를 정리하지 않으며 안전하지 않은 사용자 입력으로 호출되도록 의도되지 않은 ActiveRecord의 많은 쿼리 메서드와 옵션을 나열.
   * https://github.com/0xsauby/yasuo - 네트워크에서 취약하고 악용 가능한 서드파티 웹 애플리케이션을 스캔하는 Ruby 스크립트
