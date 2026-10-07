# awesome-web-hacking
本清單適用於任何希望學習 Web 應用程式安全、卻苦於沒有入門起點的朋友。

您可以透過提交 Pull Request 來補充更多資訊，協助我們完善本清單。

如果您不想提交 PR，也可以在 Twitter 上 @infoslack 與我聯繫。

目錄
=================

   * [書籍](#books)
   * [文件](#documentation)
   * [工具](#tools)
   * [速查表](#cheat-sheets)
   * [Docker](#docker-images-for-penetration-testing)
   * [漏洞](#vulnerabilities)
   * [課程](#courses)
   * [線上駭客示範網站](#online-hacking-demonstration-sites)
   * [實驗環境](#labs)
   * [SSL](#ssl)
   * [Ruby on Rails 安全](#security-ruby-on-rails)

## 書籍

   * http://www.amazon.com/The-Web-Application-Hackers-Handbook/dp/8126533404/ Web 應用程式駭客手冊：發現並利用安全缺陷
   * http://www.amazon.com/Hacking-Web-Apps-Preventing-Application/dp/159749951X/ 駭客攻防：Web 應用程式安全問題的偵測與預防
   * http://www.amazon.com/Hacking-Exposed-Web-Applications-Third/dp/0071740643/ 駭客大曝光：Web 應用程式安全
   * http://www.amazon.com/SQL-Injection-Attacks-Defense-Second/dp/1597499633/ SQL 注入攻擊與防禦
   * http://www.amazon.com/Tangled-Web-Securing-Modern-Applications/dp/1593273886/ 混亂的 Web：現代 Web 應用程式安全加固指南
   * http://www.amazon.com/Web-Application-Obfuscation-Evasion-Filters/dp/1597496049/ Web 應用程式混淆：'-/WAFs..Evasion..Filters//alert(/Obfuscation/)-'
   * http://www.amazon.com/XSS-Attacks-Scripting-Exploits-Defense/dp/1597491543/ XSS 攻擊：跨站腳本利用與防禦
   * http://www.amazon.com/Browser-Hackers-Handbook-Wade-Alcorn/dp/1118662091/ 瀏覽器駭客手冊
   * http://www.amazon.com/Basics-Web-Hacking-Techniques-Attack/dp/0124166008/ Web 駭客基礎：攻擊 Web 的工具與技術
   * http://www.amazon.com/Web-Penetration-Testing-Kali-Linux/dp/1782163166/ 使用 Kali Linux 進行 Web 滲透測試
   * http://www.amazon.com/Web-Application-Security-Beginners-Guide/dp/0071776168/ Web 應用程式安全初學者指南
   * https://www.amazon.com/Hacking-Art-Exploitation-Jon-Erickson/dp/1593271441/ 駭客：漏洞利用的藝術
   * https://www.crypto101.io/ - Crypto 101 是一門密碼學入門課程
   * http://www.offensive-security.com/metasploit-unleashed/ - Metasploit 實戰
   * http://www.cl.cam.ac.uk/~rja14/book.html - 安全工程
   * https://www.feistyduck.com/library/openssl-cookbook/ - OpenSSL 手冊
   * https://www.manning.com/books/real-world-cryptography - 學習並應用密碼學技術。
   * https://www.manning.com/books/making-sense-of-cyber-security - 面向任何計畫或實施安全策略的人，講解網路安全的核心概念、術語與技術的指南。
   * https://www.manning.com/books/cyber-security-career-guide - 透過學習如何運用您現有的技術與非技術技能，開啟網路安全職涯。
   * https://www.manning.com/books/secret-key-cryptography - 一本講解密碼學技術與金鑰（Secret Key）方法的書。
   * https://www.manning.com/books/application-security-program-handbook - 這本實用的書是實施穩健應用安全專案的一站式指南。
   * https://www.manning.com/books/cyber-threat-hunting - 網路威脅狩獵實用指南。
   * https://nostarch.com/bug-bounty-bootcamp - 漏洞獎金訓練營
   * https://nostarch.com/hacking-apis - 駭客攻防 API
   * https://www.manning.com/books/grokking-web-application-security - 一本講解如何建構能夠抵禦任何攻擊的 Web 應用程式的書。

## 文件

   * https://www.owasp.org/ - 開放 Web 應用程式安全專案
   * http://www.pentest-standard.org/ - 滲透測試執行標準
   * http://www.binary-auditing.com/ - Thorsten Schneider 博士的二進位審計
   * https://appsecwiki.com/ - 應用安全 Wiki 是一項倡議，旨在將應用安全相關的所有資源匯聚一處，供安全研究人員和開發者使用。
   * [AppSec Santa](https://appsecsanta.com) - 對 129+ 款 Web 應用程式安全工具（涵蓋 SAST、DAST、SCA 等）的獨立對比。

## 工具
   * https://github.com/bad-antics/nullsec-linux - NullSec Linux - 預先配置了 Web 應用程式測試工具的安全發行版
   * https://github.com/bad-antics/nullsec-webfuzz - NullSec WebFuzz - Web 應用程式模糊測試框架
   * https://github.com/poszothebuilder/nextjs-security-headers-starter - 無依賴的 Next.js 安全回應頭啟動模板，內建 CSP、HSTS 以及用於 CI 的生產環境驗證器。

   * https://www.deepinfo.com/ - Deepinfo 攻擊面平台可發現您的所有數位資產，7×24 小時監控，偵測任何問題並快速通知您，以便您立即採取行動。
     * https://github.com/bountyyfi/lonkero - 企業級 Web 漏洞掃描器，內建 60+ 攻擊模組，使用 Rust 建構，用於滲透測試與安全評估。
   * https://spyse.com/ - OSINT 搜尋引擎，提供關於整個 Web 的最新資料，將所有資料儲存於自有資料庫，關聯發現的資料，並具備一些實用功能。
   * http://www.metasploit.com/ - 世界上最常用的滲透測試軟體
   * https://findsubdomains.com - 線上子網域掃描服務，附帶大量附加資料，基於 OSINT 運作。
   * https://cc.la - 免費的線上工具集，提供 WHOIS、RDAP、DNS、IP WHOIS、SSL 憑證查詢、網域名稱伺服器歷史、網路診斷（ping/traceroute/MTR）以及網域監控。無需註冊。
   * https://vacato.io - 免費的 RDAP 網域觀察清單：定時檢查，當狀態顯示為可用時透過 Telegram/郵件/Slack 通知。不是註冊商或搶注工具。免費層：10 個網域。
   * https://github.com/BlessedRebuS/Krawl - 雲端原生 Web 欺騙伺服器與反爬蟲工具。
   * https://github.com/bjeborn/basic-auth-pot HTTP 基礎認證蜜罐。
   * http://www.arachni-scanner.com/ - Web 應用程式安全掃描框架
   * https://github.com/ASCIT31/Dark-Moon - Darkmoon 是一個開源（GPL-3.0）的自主 AI 滲透測試平台，透過 MCP 編排 80+ 工具，並為每種技術配備專用的攻擊子代理（GraphQL、Spring Boot、ASP.NET、Node.js、Flask、PHP、Ruby），並保留每項發現的證據鏈。
   * https://github.com/BugTraceAI/BugTraceAI - BugTraceAI 是一個開源的多智能體平台，用於授權的 Web 應用程式安全測試，具備驗證、證據擷取與報告功能。
   * https://github.com/TayfurYldz/headerproof - HeaderProof 是一個開發者預覽版、低雜訊的主動掃描器，用於在授權測試中偵測由回應頭驅動的 Web 安全線索，例如 CORS 設定錯誤、回應拆分、快取投毒候選以及反射路徑，並帶有明確的證據閘控與誤報抑制。
   * https://github.com/ANVEAI/anve-offsec - 執行於 Kali Linux 上的自主 AI 安全工程師與漏洞獎金平台，具備有狀態的 Hermes 推理、OpenClaw Chromium 瀏覽器伴隨程序以及 Qdrant 向量策略 RAG。 🇮🇳
   * https://github.com/sullo/nikto - Nikto Web 伺服器掃描器
   * http://www.tenable.com/products/nessus-vulnerability-scanner - Nessus 漏洞掃描器
   * http://www.portswigger.net/burp/intruder.html - Burp Intruder 是一款用於對 Web 應用程式發起自訂自動化攻擊的工具。
   * http://www.openvas.org/ - 全球最先進的開源漏洞掃描器與管理器。
   * https://github.com/iSECPartners/Scout2 - 針對 AWS 環境的安全審計工具
   * https://www.owasp.org/index.php/Category:OWASP_DirBuster_Project - 一款多執行緒 Java 應用，用於對 Web/應用伺服器上的目錄與檔案名稱進行暴力列舉。
   * https://www.owasp.org/index.php/ZAP - Zed 攻擊代理是一款易於使用的整合式滲透測試工具，用於發現 Web 應用程式中的漏洞。
   * https://github.com/vigolium/vigolium - 高保真 Web 與 API 漏洞掃描器，融合智能體 AI 與快速原生引擎；覆蓋 OWASP Top 10、經過認證的 IDOR/BOLA 及帶外測試，支援 OpenAPI/Postman/Burp/cURL 輸入，擁有 250+ 偵測模組。開源，AGPL-3.0。
   * https://github.com/tecknicaltom/dsniff - dsniff 是一組用於網路審計與滲透測試的工具集合。
   * https://github.com/WangYihang/Webshell-Sniper - 透過終端管理您的 WebShell。
   * https://github.com/DanMcInerney/dnsspoof - DNS 欺騙工具。丟棄來自路由器的 DNS 回應，並替換為偽造的 DNS 回應。
   * https://github.com/trustedsec/social-engineer-toolkit - TrustedSec 出品的社會工程學工具包（SET）倉庫
   * https://github.com/sqlmapproject/sqlmap - 自動 SQL 注入與資料庫接管工具
   * https://github.com/beefproject/beef - 瀏覽器漏洞利用框架專案
   * http://w3af.org/ - w3af 是一個 Web 應用程式攻擊與審計框架
   * https://github.com/espreto/wpsploit - WPSploit，利用 Metasploit 攻擊 WordPress
   * https://vulert.com/ - Vulert 透過偵測開源依賴中的漏洞來保護軟體——無需存取您的程式碼。支援 Js、PHP、Java、Python 等。
   * https://github.com/WangYihang/Reverse-Shell-Manager - 透過終端管理反向 Shell。
   * https://github.com/RUB-NDS/WS-Attacker - WS-Attacker 是一個用於 Web 服務滲透測試的模組化框架
   * https://github.com/wpscanteam/wpscan - WPScan 是一款黑盒 WordPress 漏洞掃描器
   * https://github.com/own2pwn-fr/wp2shell-detect - 黑盒、非侵入式偵測器，用於偵測 WordPress 核心中的 wp2shell 預認證 RCE 鏈（CVE-2026-63030 / CVE-2026-60137）；從公開來源擷取核心版本指紋，並在不利用漏洞的情況下標記存在漏洞的安裝。
   * http://sourceforge.net/projects/paros/ Paros 代理
   * https://www.owasp.org/index.php/Category:OWASP_WebScarab_Project Web Scarab 代理
   * https://code.google.com/p/skipfish/ Skipfish，一款主動式 Web 應用程式安全偵察工具
   * http://www.acunetix.com/vulnerability-scanner/ Acunetix Web 漏洞掃描器
   * https://cystack.net/ CyStack Web 安全平台
   * http://www-03.ibm.com/software/products/en/appscan IBM Security AppScan
   * https://www.netsparker.com/web-vulnerability-scanner/ Netsparker Web 漏洞掃描器
   * http://www8.hp.com/us/en/software-solutions/webinspect-dynamic-analysis-dast/index.html HP Web Inspect
   * https://github.com/sensepost/wikto Wikto - 帶有一些額外功能的 Windows 版 Nikto
   * http://samurai.inguardians.com Samurai Web 測試框架
   * https://code.google.com/p/ratproxy/ Ratproxy
   * http://www.websecurify.com Websecurify
   * http://sourceforge.net/projects/grendel/ Grendel-scan
   * https://tools.kali.org/web-applications/gobuster 用 Go 編寫的目錄/檔案與 DNS 爆破工具
   * http://www.edge-security.com/wfuzz.php Wfuzz
   * http://wapiti.sourceforge.net wapiti
   * https://github.com/neuroo/grabber Grabber
   * https://subgraph.com/vega/ Vega
   * http://websecuritytool.codeplex.com Watcher 被動式 Web 掃描器
   * http://xss.codeplex.com x5s XSS 與 Unicode 轉換安全測試助手
   * http://www.beyondsecurity.com/avds AVDS 漏洞評估與管理
   * http://www.golismero.com Golismero
   * http://www.ikare-monitoring.com IKare
   * http://www.nstalker.com N-Stalker X
   * https://www.rapid7.com/products/nexpose/index.jsp Nexpose
   * http://www.rapid7.com/products/appspider/ App Spider
   * http://www.milescan.com ParosPro
   * https://www.qualys.com/enterprises/qualysguard/web-application-scanning/ Qualys Web 應用程式掃描
   * http://www.beyondtrust.com/Products/RetinaNetworkSecurityScanner/ Retina
   * https://www.owasp.org/index.php/OWASP_Xenotix_XSS_Exploit_Framework Xenotix XSS 漏洞利用框架
   * https://github.com/future-architect/vuls 面向 Linux 的無代理漏洞掃描器，使用 golang 編寫。
   * https://github.com/rastating/wordpress-exploit-framework 一個 Ruby 框架，用於開發和使用輔助 WordPress 網站與系統滲透測試的模組。
   * http://www.xss-payloads.com/ XSS Payloads，用於利用 XSS 漏洞、建構自訂載荷、練習滲透測試技能。
   * https://github.com/joaomatosf/jexboss JBoss（及其他 Java 反序列化漏洞）驗證與漏洞利用工具
   * https://github.com/commixproject/commix 自動化的全能 OS 命令注入與漏洞利用工具
   * https://github.com/pathetiq/BurpSmartBuster 一款為 Buster 添加智慧的 Burp Suite 內容發現插件！
   * https://github.com/GoSecure/csp-auditor 用於分析 CSP 回應頭的 Burp 和 ZAP 插件
   * https://github.com/ffleming/timing_attack 對 Web 應用程式發起時序攻擊
   * https://github.com/lalithr95/fuzzapi Fuzzapi 是一款用於 REST API 滲透測試的工具
   * https://github.com/owtf/owtf 進攻性 Web 測試框架（OWTF）
   * https://github.com/nccgroup/wssip 用於擷取、修改並從用戶端向伺服器（及反向）發送自訂 WebSocket 資料的應用程式。
   * https://github.com/PalindromeLabs/STEWS 用於 WebSocket 發現、指紋識別和漏洞偵測的工具套件
   * https://github.com/tijme/angularjs-csti-scanner 針對 AngularJS（ACSTIS）的自動化用戶端模板注入（沙箱逃逸/繞過）偵測。
   * https://reshift.softwaresecured.com 一款用於偵測和管理 Java 安全漏洞的源始碼分析工具。
   * https://encoding.tools 用於轉換二進位資料和字串（包括雜湊和各種編碼）的 Web 應用。提供 GPLv3 離線版本。
   * https://gchq.github.io/CyberChef/ 一把用於執行各種二進位資料和字串編碼與轉換的「網路瑞士軍刀」。
   * https://github.com/urbanadventurer/WhatWeb WhatWeb - 下一代 Web 掃描器
   * https://www.shodan.io/ Shodan - 用於尋找存在漏洞的伺服器的搜尋引擎
   * https://github.com/WangYihang/Webshell-Sniper 透過終端管理的 WebShell 管理器
   * https://github.com/nil0x42/phpsploit PhpSploit - 功能完備的 C2 框架，透過惡意 PHP 一行程式碼靜默駐留在 Web 伺服器上
   * https://webhint.io/ - webhint - webhint 是一個可自訂的程式碼檢查工具，透過檢查程式碼中的最佳實踐與常見錯誤，協助您提升網站的可存取性、速度、跨瀏覽器相容性等。
   * https://gtfobins.github.io/ - gtfobins - GTFOBins 是一份精選的 Unix 二進位檔案清單，可用於繞過設定不當系統中的本機安全限制。
   * https://github.com/HightechSec/git-scanner git-scanner - 一款用於漏洞狩獵或滲透測試的工具，目標是那些在公開位置提供開放 `.git` 倉庫的網站
   * [Web 應用程式漏洞利用 @ Rawsec 清單](https://inventory.raw.pm/tools.html#title-tools-web-application-exploitation) - 完整的 Web 滲透測試工具清單
   * [Cyclops 是一款能夠自動偵測漏洞的新型瀏覽器](https://github.com/v8blink/Chromium-based-XSS-Taint-Tracking/) - Cyclops 是一款具備 XSS 偵測功能的 Web 瀏覽器
   * https://caido.io/ - Web 代理
   * https://github.com/assetnote/kiterunner - API 發現
   * https://github.com/owasp-amass/amass - 網域偵察
   * [https://columbus.elmasy.com/](https://columbus.elmasy.com/) - Columbus 專案是一項進階子網域發現服務，提供快速、強大且易用的 API。
   * [用於竊取密碼的 BadUSB 腳本](https://github.com/MarkCyber/BadUSB/blob/main/HackStuff/CredentialHarvester.txt) - 從 Chrome、Firefox 和 Edge 中擷取所有已儲存的密碼，儲存到備用 USB 中以供進一步分析。
   * https://github.com/flibustier/jwt-online-cracker - 在瀏覽器中暴力破解 HS256、HS384 或 HS512 JWT 權杖（完全用戶端執行）。
   * [jwt-auditor](https://github.com/mohelobeid/jwt-auditor) - 離線 CLI，用於解碼和審計 JWT，偵測 alg:none、弱 HMAC 金鑰以及 RS256 到 HS256 的混淆。
   * https://github.com/lukechilds/reverse-shell - 易於記憶的反向 Shell，應能在大多數類 Unix 系統上運作。
   * https://github.com/momenbasel/keyFinder - Chrome 擴充功能，使用 80+ 偵測模式和跨 10 個攻擊面的香農熵，被動掃描網頁中洩漏的 API 金鑰、權杖和機密資訊。
   * https://github.com/DenisPodgurskii/pentestkit - 基於瀏覽器的漏洞掃描器，用於漏洞獎金和滲透測試工作流，結合 DAST、SAST、IAST 和 SCA 能力來偵測執行時、源始碼級、互動式和依賴相關的安全問題。
- [SaaSFort](https://saasfort.com/scan) - 免費的 60 秒外部 NIS2 / 安全態勢掃描，A-F 評級，無需註冊。
- [ARS3NAL](https://github.com/inflictx/Arsenal) - 離線優先、可搜尋的武器庫：約 1500 個載荷、命令產生器、GTFOBins、字典、內建 CyberChef、反向 Shell 以及 70 個檢查清單。
- [Mozilla - HTTP 觀測台](https://developer.mozilla.org/en-US/observatory) - 由 Mozilla 開發，HTTP 觀測台對網站的 HTTP 回應頭及其他關鍵安全配置進行深入評估。
- [HTTP 安全報告](https://httpsecurityreport.com/) - 立即取得您的網站與最佳實踐對比的报告。
- [ImmuniWeb CyberScore](https://www.immuniweb.com/cyberscore/) - 針對您的公司、合作夥伴或供應商的免費網路安全、隱私與 AI 安全評分
- [ImmuniWeb - 網站安全測試](https://www.immuniweb.com/websec/) - 檢查 Web 安全漏洞、AI 機器人防護、HTTP 安全與隱私回應頭、DNSSEC 配置、CSP，以及是否符合 GDPR 和 PCI DSS。每月 10 次免費測試（無需帳戶）
- [Pentest Tools - 網站漏洞掃描器](https://pentest-tools.com/website-vulnerability-scanning/website-scanner) - 偵測 SQLi、XSS、命令注入、XXE 以及 75+ 種更多 Web 應用程式漏洞
- [Pentest Tools - 網路漏洞掃描器](https://pentest-tools.com/network-vulnerability-scanning/network-security-scanner-online) - 一款線上安全工具，用於識別網路基礎設施中的漏洞、錯誤配置、過時的服務以及暴露的連接埠
- [UpClaw](https://github.com/okdkebm/UpClaw) - AI 驅動的 Web 滲透測試 CLI；單一零依賴 Python 檔案（29 個內建檢查 + 16 個外部工具適配器 + 證據報告）。
- [HTTP 偵測代理](https://github.com/ai-blueteam/http-detection-agent) - 開源、本地優先的 HTTP 攻擊偵測器：Rust CLI，覆蓋 62 個行為家族的 76 種偵測（注入、遍歷、請求走私、SSRF、XXE、反序列化等），外加用於智能體驅動分診的本地 MCP 伺服器

## 速查表

   * http://n0p.net/penguicon/php_app_sec/mirror/xss.html - XSS 速查表
   * https://highon.coffee/blog/lfi-cheat-sheet/ - LFI 速查表
   * https://highon.coffee/blog/reverse-shell-cheat-sheet/ - 反向 Shell 速查表
   * https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/ - SQL 注入速查表
   * https://www.gracefulsecurity.com/path-traversal-cheat-sheet-windows/ - 路徑遍歷速查表：Windows
   * [滲透測試思維導圖](https://pentestmindmap.com/en) - 互動式思維導圖，包含跨 32 個類別的 11,600+ 滲透測試指令。可搜尋，一鍵複製。

## 用於滲透測試的 Docker 映像

   * `docker pull kalilinux/kali-linux-docker` [官方 Kali Linux](https://hub.docker.com/r/kalilinux/kali-linux-docker/)
   * `docker pull blackarchlinux/blackarch` [官方 BlackArch Linux](https://hub.docker.com/r/blackarchlinux/blackarch)
   * `docker pull owasp/zap2docker-stable` - [官方 OWASP ZAP](https://github.com/zaproxy/zaproxy)
   * `docker pull wpscanteam/wpscan` - [官方 WPScan](https://hub.docker.com/r/wpscanteam/wpscan/)
   * `docker pull metasploitframework/metasploit-framework` - [docker-metasploit](https://hub.docker.com/r/metasploitframework/metasploit-framework/)
   * `docker pull citizenstig/dvwa` - [Damn Vulnerable Web Application (DVWA)](https://hub.docker.com/r/citizenstig/dvwa/)
   * `docker pull bkimminich/juice-shop` [OWASP Juice Shop](https://hub.docker.com/r/bkimminich/juice-shop)
   * `docker pull wpscanteam/vulnerablewordpress` - [存在漏洞的 WordPress 安裝](https://hub.docker.com/r/wpscanteam/vulnerablewordpress/)
   * `docker pull hmlio/vaas-cve-2014-6271` - [漏洞即服務：Shellshock](https://hub.docker.com/r/hmlio/vaas-cve-2014-6271/)
   * `docker pull hmlio/vaas-cve-2014-0160` - [漏洞即服務：Heartbleed](https://hub.docker.com/r/hmlio/vaas-cve-2014-0160/)
   * `docker pull opendns/security-ninjas` - [Security Ninjas](https://hub.docker.com/r/opendns/security-ninjas/)
   * `docker pull noncetonic/archlinux-pentest-lxde:1.0` - [Arch Linux 滲透測試器](https://hub.docker.com/r/noncetonic/archlinux-pentest-lxde/)
   * `docker pull diogomonica/docker-bench-security` - [Docker 安全基準](https://hub.docker.com/r/diogomonica/docker-bench-security/)
   * `docker pull ismisepaul/securityshepherd` - [OWASP Security Shepherd](https://hub.docker.com/r/ismisepaul/securityshepherd/)
   * `docker pull danmx/docker-owasp-webgoat` - [OWASP WebGoat 專案 Docker 映像](https://hub.docker.com/r/webgoat/goatandwolf)
   *  `docker pull docker pull jeroenwillemsen/wrongsecrets` - [OWASP WrongSecrets 專案 Docker 映像](https://hub.docker.com/r/jeroenwillemsen/wrongsecrets)
   * `docker pull citizenstig/nowasp` - [OWASP Mutillidae II Web 滲透測試練習應用](https://hub.docker.com/r/citizenstig/nowasp/)
   * `docker pull aaaguirre/pentest` - [用於滲透測試的 Docker](https://github.com/aaaguirrep/pentest)
   * `docker pull rustscan/rustscan:2.0.0` - [現代連接埠掃描器](https://github.com/RustScan/RustScan)

## 漏洞

   * http://cve.mitre.org/ - 通用漏洞披露（CVE）。資訊安全漏洞命名的標準。
   * https://www.exploit-db.com/ - 漏洞利用資料庫——漏洞利用、Shellcode 和安全論文的終極檔案庫。
   * http://0day.today/ - Inj3ct0r 是漏洞利用和漏洞的終極資料庫，也是漏洞研究人員和安全從業人員的寶貴資源。
   * http://www.securityfocus.com/ - 自 1999 年創立以來，SecurityFocus 一直是安全社群的中流砥柱。
   * http://packetstormsecurity.com/ - 全球安全資源
   * https://wpvulndb.com/ - WPScan 漏洞資料庫
   * https://snyk.io/vuln/ - 漏洞資料庫，提供已知漏洞的詳細資訊與修復指導。
   * https://stellastra.com/cipher-suite - 數百種 TLS 密碼套件及其安全狀態的資料庫。
   * https://vulert.com/vuln-db - Vulert 透過監控並提醒您開源依賴中的漏洞，協助開發者保護其軟體——無需存取他們的程式碼。支援 Js、PHP、Java、Python 等大量依賴。
   * https://vulncheck.com/xdb/ - Git 倉庫中漏洞利用概念驗證程式碼的索引。
   * https://labs.jamessawyer.co.uk/cves/ - CVE PoC 搜尋提供從 CVE 到 GitHub 概念驗證的查詢，可快速從 Web 漏洞轉向公開漏洞利用程式碼。

## 課程

   * https://pwn.guide/ - 網路安全學習平台，約有 100 篇教學，其中約 25 篇關於 Web 駭客與網站防禦。
   * https://www.offensive-security.com/information-security-training/advanced-web-attack-and-exploitation/ Offensive Security 進階 Web 攻擊與漏洞利用（現場）
   * https://www.sans.org/course/web-app-penetration-testing-ethical-hacking Sans SEC542：Web 應用程式滲透測試與道德駭客
   * https://www.sans.org/course/advanced-web-app-penetration-testing-ethical-hacking Sans SEC642：進階 Web 應用程式滲透測試與道德駭客
   * http://opensecuritytraining.info/ - 開放安全訓練
   * http://securitytrainings.net/security-trainings/ - Security Exploded 訓練
   * http://www.securitytube.net/ - 全球最大的資訊安全與駭客門戶。
   * https://www.hacker101.com/ - 由 [Hackerone](https://www.hackerone.com) 提供的免費 Web 安全課程
   * https://www.darkrelay.com/courses/professional-penetration-tester - 由 [DarkRelay Security Labs](https://www.darkrelay.com) 提供的從零到英雄式滲透測試課程

## 線上駭客示範網站

   * http://testasp.vulnweb.com/ - Acunetix ASP 測試與示範網站
   * http://testaspnet.vulnweb.com/ - Acunetix ASP.Net 測試與示範網站
   * http://testphp.vulnweb.com/ - Acunetix PHP 測試與示範網站
   * http://crackme.cenzic.com/kelev/view/home.php - Crack Me Bank
   * http://zero.webappsecurity.com/ - Zero Bank
   * http://demo.testfire.net/ - Altoro Mutual
   * https://public-firing-range.appspot.com/ - Firing Range 是自動化 Web 應用程式安全掃描器的測試平台。
   * https://xss-game.appspot.com/ - XSS 挑戰
   * https://google-gruyere.appspot.com/ Google Gruyere，Web 應用程式漏洞利用與防禦
   * https://ginandjuice.shop/catalog
   * https://pentest-ground.com/ Pentest-Ground 是一個免費的練習場，提供故意存在漏洞的 Web 應用程式和網路服務。
  * [HackSimulator](https://chatgpt.com/g/g-jnT7HlNeK-hacksimulator) 是由 [MarkCyber](https://github.com/MarkCyber) 建立的 GPT，其中 ChatGPT 4 扮演駭客 CTF 角色。該 GPT 會先詢問您的經驗水平以及想要提升的方面，然後為您模擬一台機器/應用程式供您入侵，使用聊天框作為輸入終端指令的地方。由於透過 AI 實現，它會根據您的經驗水平變化和調整，如果您卡住了也可以尋求協助。

## 實驗環境
   * https://portswigger.net/web-security - Web 安全學院：來自 PortSwigger 的免費線上培訓
   * http://www.cis.syr.edu/~wedu/seed/all_labs.html - 為電腦安全教育開發教學實驗
   * https://www.vulnhub.com/ - 用於本地滲透測試的虛擬機器。
   * https://pentesterlab.com/ - PentesterLab 是一種輕鬆且出色的學習滲透測試的方式。
   * https://codereviewlab.com/ - Code Review Lab 是一個動手程式碼審查培訓平台。
   * https://github.com/jerryhoff/WebGoat.NET - 這個 Web 應用程式是一個關於常見 Web 安全缺陷的學習平台。
   * http://www.dvwa.co.uk/ - Damn Vulnerable Web Application (DVWA)
   * http://sourceforge.net/projects/lampsecurity/ - LAMPSecurity 培訓
   * https://github.com/Audi-1/sqli-labs - 用於測試基於錯誤、盲注布林、基於時間的 SQLI 實驗。
   * https://github.com/paralax/lfi-labs - 一組用於練習利用 LFI、RFI 和命令注入漏洞的小型 PHP 腳本
   * https://hack.me/ - 在沙箱環境中免費建構、託管和共享存在漏洞的 Web 應用程式
   * http://azcwr.org/az-cyber-warfare-ranges - 免費的實戰奪旗、藍隊、紅隊網路戰靶場，面向從初學者到進階使用者。必須使用手機發送簡訊請求存取靶場。
   * https://github.com/adamdoupe/WackoPicko - WackoPicko 是一個用於測試 Web 應用程式漏洞掃描器的存在漏洞的 Web 應用程式。
   * https://github.com/rapid7/hackazon - Hackazon 是一個免費的、存在漏洞的測試站點，它是一個使用當今富客戶端和行動應用相同技術建構的線上商店。
   * https://github.com/RhinoSecurityLabs/cloudgoat - Rhino Security Labs 的「故意存在漏洞」的 AWS 基礎設施搭建工具
   * https://www.hackthebox.eu/ - Hack The Box 是一個線上平台，讓您測試和提升您的網路安全技能。
   * https://github.com/tegal1337/0l4bs - 0l4bs 是面向 Web 應用程式安全愛好者的跨站腳本實驗。
   * https://github.com/oliverwiegers/pentest_lab - 利用 docker compose 的本地滲透測試實驗室。
   * https://ginandjuice.shop/catalog
   * https://github.com/dolevf/Damn-Vulnerable-GraphQL-Application
   * https://labex.io/skilltrees/cybersecurity - LabEx 是一個透過動手實驗提升您網路安全技能的平台。
   * https://pythoncyber.go.ro - CyberPython 協助您進行研究，以解決挑戰、利用 CVE 並編寫優秀的腳本。
   * https://github.com/kOaDT/oss-oopssec-store - OSS – OopsSec Store：一個使用 Next.js 和 React 建構的故意存在漏洞的電子商務應用，用於 Web 安全培訓和 CTF 練習。
   * https://github.com/momenbasel/htb-writeups - HTB Writeups：最全面的 Hack The Box 解題報告合集，包含 500+ 台機器、400+ 項挑戰、ProLabs、Sherlocks、CTF 賽事以及速查表。

## SSL

   * https://www.ssllabs.com/ssltest/index.html - 該服務對公共網際網路上任何 SSL Web 伺服器的配置進行深度分析。
   * https://certobserver.com/ct-search - 搜尋為某個網域名稱核發的 SSL/TLS 憑證的憑證透明度日誌。
   * https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html - nginx 上的強 SSL 安全
   * https://weakdh.org/ - 弱 Diffie-Hellman 與 Logjam 攻擊
   * https://letsencrypt.org/ - Let’s Encrypt 是一個新的憑證頒發機構：免費、自動化且開放。
   * https://filippo.io/Heartbleed/ - 用於 CVE-2014-0160（Heartbleed）的檢查器（站點與工具）。
   * https://testssl.sh/ - 一個命令列工具，用於檢查網站的 TLS/SSL 密碼套件、協定和加密缺陷。
   * [Scorifya](https://www.scorifya.com) - 任何網站的 0–100 安全評分，覆蓋 TLS、安全回應頭（CSP、HSTS、X-Frame-Options）、Cookie、DNS 以及郵件信號（SPF、DKIM、DMARC），並提供分級的修復步驟。
   * [ImmuniWeb SSL 安全測試](https://www.immuniweb.com/ssl/) - 一款免費的線上工具，用於檢查網站或郵件伺服器 SSL/TLS 配置的安全性。檢查是否符合 NIST、HIPAA、PCI DSS 和 GDPR 等安全標準。每月 10 次免費測試（無需帳戶）

## Ruby on Rails 安全

   * http://brakemanscanner.org/ - 一款針對 Ruby on Rails 應用程式的靜態分析安全漏洞掃描器。
   * https://github.com/rubysec/ruby-advisory-db - 存在漏洞的 Ruby Gems 資料庫
   * https://github.com/rubysec/bundler-audit - 針對 Bundler 的补丁級別驗證
   * https://github.com/hakirisec/hakiri_toolbelt - Hakiri Toolbelt 是 Hakiri 平台的命令列介面。
   * https://hakiri.io/facets - 掃描 Gemfile.lock 中的漏洞。
   * http://rails-sqli.org/ - 本頁列出了 ActiveRecord 中許多不會對原始 SQL 參數進行淨化的查詢方法和選項，並不打算使用不安全的用戶輸入來呼叫它們。
   * https://github.com/0xsauby/yasuo - 一個 Ruby 腳本，用於掃描網路上易受攻擊且可被利用的第三方 Web 應用程式
