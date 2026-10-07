# awesome-web-hacking
本列表面向任何希望学习 Web 应用安全、但又苦于没有入门起点的朋友。

你可以通过提交 Pull Request 来补充更多信息，帮助我们完善本列表。

如果你不想提交 PR，也可以在 Twitter 上 @infoslack 与我联系。

目录
=================

   * [书籍](#books)
   * [文档](#documentation)
   * [工具](#tools)
   * [速查表](#cheat-sheets)
   * [Docker](#docker-images-for-penetration-testing)
   * [漏洞](#vulnerabilities)
   * [课程](#courses)
   * [在线黑客演示站点](#online-hacking-demonstration-sites)
   * [实验环境](#labs)
   * [SSL](#ssl)
   * [Ruby on Rails 安全](#security-ruby-on-rails)

## 书籍

   * http://www.amazon.com/The-Web-Application-Hackers-Handbook/dp/8126533404/ Web 应用黑客手册：发现并利用安全缺陷
   * http://www.amazon.com/Hacking-Web-Apps-Preventing-Application/dp/159749951X/ 黑客攻防：Web 应用安全问题的检测与预防
   * http://www.amazon.com/Hacking-Exposed-Web-Applications-Third/dp/0071740643/ 黑客大曝光：Web 应用安全
   * http://www.amazon.com/SQL-Injection-Attacks-Defense-Second/dp/1597499633/ SQL 注入攻击与防御
   * http://www.amazon.com/Tangled-Web-Securing-Modern-Applications/dp/1593273886/ 混乱的 Web：现代 Web 应用安全加固指南
   * http://www.amazon.com/Web-Application-Obfuscation-Evasion-Filters/dp/1597496049/ Web 应用混淆：'-/WAFs..Evasion..Filters//alert(/Obfuscation/)-'
   * http://www.amazon.com/XSS-Attacks-Scripting-Exploits-Defense/dp/1597491543/ XSS 攻击：跨站脚本利用与防御
   * http://www.amazon.com/Browser-Hackers-Handbook-Wade-Alcorn/dp/1118662091/ 浏览器黑客手册
   * http://www.amazon.com/Basics-Web-Hacking-Techniques-Attack/dp/0124166008/ Web 黑客基础：攻击 Web 的工具与技术
   * http://www.amazon.com/Web-Penetration-Testing-Kali-Linux/dp/1782163166/ 使用 Kali Linux 进行 Web 渗透测试
   * http://www.amazon.com/Web-Application-Security-Beginners-Guide/dp/0071776168/ Web 应用安全初学者指南
   * https://www.amazon.com/Hacking-Art-Exploitation-Jon-Erickson/dp/1593271441/ 黑客：漏洞利用的艺术
   * https://www.crypto101.io/ - Crypto 101 是一门密码学入门课程
   * http://www.offensive-security.com/metasploit-unleashed/ - Metasploit 实战
   * http://www.cl.cam.ac.uk/~rja14/book.html - 安全工程
   * https://www.feistyduck.com/library/openssl-cookbook/ - OpenSSL 手册
   * https://www.manning.com/books/real-world-cryptography - 学习并应用密码学技术。
   * https://www.manning.com/books/making-sense-of-cyber-security - 面向任何计划或实施安全策略的人，讲解网络安全的核心概念、术语与技术的指南。
   * https://www.manning.com/books/cyber-security-career-guide - 通过学习如何运用你现有的技术技能与非技术技能，开启网络安全职业生涯。
   * https://www.manning.com/books/secret-key-cryptography - 一本讲解密码学技术与密钥（Secret Key）方法的书。
   * https://www.manning.com/books/application-security-program-handbook - 这本实用的书是实施稳健应用安全项目的一站式指南。
   * https://www.manning.com/books/cyber-threat-hunting - 网络威胁狩猎实用指南。
   * https://nostarch.com/bug-bounty-bootcamp - 漏洞赏金训练营
   * https://nostarch.com/hacking-apis - 黑客攻防 API
   * https://www.manning.com/books/grokking-web-application-security - 一本讲解如何构建能够抵御任何攻击的 Web 应用的书。

## 文档

   * https://www.owasp.org/ - 开放 Web 应用安全项目
   * http://www.pentest-standard.org/ - 渗透测试执行标准
   * http://www.binary-auditing.com/ - Thorsten Schneider 博士的二进制审计
   * https://appsecwiki.com/ - 应用安全 Wiki 是一项倡议，旨在将应用安全相关的所有资源汇聚一处，供安全研究人员和开发者使用。
   * [AppSec Santa](https://appsecsanta.com) - 对 129+ 款 Web 应用安全工具（涵盖 SAST、DAST、SCA 等）的独立对比。

## 工具
   * https://github.com/bad-antics/nullsec-linux - NullSec Linux - 预配置了 Web 应用测试工具的安全发行版
   * https://github.com/bad-antics/nullsec-webfuzz - NullSec WebFuzz - Web 应用模糊测试框架
   * https://github.com/poszothebuilder/nextjs-security-headers-starter - 无依赖的 Next.js 安全响应头启动模板，内置 CSP、HSTS 以及用于 CI 的生产环境校验器。

   * https://www.deepinfo.com/ - Deepinfo 攻击面平台可发现你的所有数字资产，7×24 小时监控，检测任何问题并快速通知你，以便你立即采取行动。
     * https://github.com/bountyyfi/lonkero - 企业级 Web 漏洞扫描器，内置 60+ 攻击模块，使用 Rust 构建，用于渗透测试与安全评估。
   * https://spyse.com/ - OSINT 搜索引擎，提供关于整个 Web 的最新数据，将所有数据存储于自有数据库，关联发现的数据，并具备一些实用功能。
   * http://www.metasploit.com/ - 世界上最常用的渗透测试软件
   * https://findsubdomains.com - 在线子域名扫描服务，附带大量附加数据，基于 OSINT 工作。
   * https://cc.la - 免费的在线工具集，提供 WHOIS、RDAP、DNS、IP WHOIS、SSL 证书查询、域名服务器历史、网络诊断（ping/traceroute/MTR）以及域名监控。无需注册。
   * https://vacato.io - 免费的 RDAP 域名观察列表：定时检查，当状态显示为可用时通过 Telegram/邮件/Slack 通知。不是注册商或抢注工具。免费层：10 个域名。
   * https://github.com/BlessedRebuS/Krawl - 云原生 Web 欺骗服务器与反爬虫工具。
   * https://github.com/bjeborn/basic-auth-pot HTTP 基础认证蜜罐。
   * http://www.arachni-scanner.com/ - Web 应用安全扫描框架
   * https://github.com/ASCIT31/Dark-Moon - Darkmoon 是一个开源（GPL-3.0）的自主 AI 渗透测试平台，通过 MCP 编排 80+ 工具，并为每种技术配备专用的攻击子代理（GraphQL、Spring Boot、ASP.NET、Node.js、Flask、PHP、Ruby），并保留每项发现的证据链。
   * https://github.com/BugTraceAI/BugTraceAI - BugTraceAI 是一个开源的多智能体平台，用于授权的 Web 应用安全测试，具备验证、证据捕获与报告功能。
   * https://github.com/TayfurYldz/headerproof - HeaderProof 是一个开发者预览版、低噪声的主动扫描器，用于在授权测试中检测由响应头驱动的 Web 安全线索，例如 CORS 配置错误、响应拆分、缓存投毒候选以及反射路径，并带有明确的证据门控与误报抑制。
   * https://github.com/ANVEAI/anve-offsec - 运行于 Kali Linux 上的自主 AI 安全工程师与漏洞赏金平台，具备有状态的 Hermes 推理、OpenClaw Chromium 浏览器伴随进程以及 Qdrant 向量策略 RAG。 🇮🇳
   * https://github.com/sullo/nikto - Nikto Web 服务器扫描器
   * http://www.tenable.com/products/nessus-vulnerability-scanner - Nessus 漏洞扫描器
   * http://www.portswigger.net/burp/intruder.html - Burp Intruder 是一款用于对 Web 应用发起自定义自动化攻击的工具。
   * http://www.openvas.org/ - 全球最先进的开源漏洞扫描器与管理器。
   * https://github.com/iSECPartners/Scout2 - 针对 AWS 环境的安全审计工具
   * https://www.owasp.org/index.php/Category:OWASP_DirBuster_Project - 一款多线程 Java 应用，用于对 Web/应用服务器上的目录与文件名进行暴力枚举。
   * https://www.owasp.org/index.php/ZAP - Zed 攻击代理是一款易于使用的集成式渗透测试工具，用于发现 Web 应用中的漏洞。
   * https://github.com/vigolium/vigolium - 高保真 Web 与 API 漏洞扫描器，融合智能体 AI 与快速原生引擎；覆盖 OWASP Top 10、经过认证的 IDOR/BOLA 及带外测试，支持 OpenAPI/Postman/Burp/cURL 输入，拥有 250+ 检测模块。开源，AGPL-3.0。
   * https://github.com/tecknicaltom/dsniff - dsniff 是一组用于网络审计与渗透测试的工具集合。
   * https://github.com/WangYihang/Webshell-Sniper - 通过终端管理你的 WebShell。
   * https://github.com/DanMcInerney/dnsspoof - DNS 欺骗工具。丢弃来自路由器的 DNS 响应，并替换为伪造的 DNS 响应。
   * https://github.com/trustedsec/social-engineer-toolkit - TrustedSec 出品的社会工程学工具包（SET）仓库
   * https://github.com/sqlmapproject/sqlmap - 自动 SQL 注入与数据库接管工具
   * https://github.com/beefproject/beef - 浏览器漏洞利用框架项目
   * http://w3af.org/ - w3af 是一个 Web 应用攻击与审计框架
   * https://github.com/espreto/wpsploit - WPSploit，利用 Metasploit 攻击 WordPress
   * https://vulert.com/ - Vulert 通过检测开源依赖中的漏洞来保护软件——无需访问你的代码。支持 Js、PHP、Java、Python 等。
   * https://github.com/WangYihang/Reverse-Shell-Manager - 通过终端管理反向 Shell。
   * https://github.com/RUB-NDS/WS-Attacker - WS-Attacker 是一个用于 Web 服务渗透测试的模块化框架
   * https://github.com/wpscanteam/wpscan - WPScan 是一款黑盒 WordPress 漏洞扫描器
   * https://github.com/own2pwn-fr/wp2shell-detect - 黑盒、非侵入式检测器，用于检测 WordPress 核心中的 wp2shell 预认证 RCE 链（CVE-2026-63030 / CVE-2026-60137）；从公开来源提取核心版本指纹，并在不利用漏洞的情况下标记存在漏洞的安装。
   * http://sourceforge.net/projects/paros/ Paros 代理
   * https://www.owasp.org/index.php/Category:OWASP_WebScarab_Project Web Scarab 代理
   * https://code.google.com/p/skipfish/ Skipfish，一款主动式 Web 应用安全侦察工具
   * http://www.acunetix.com/vulnerability-scanner/ Acunetix Web 漏洞扫描器
   * https://cystack.net/ CyStack Web 安全平台
   * http://www-03.ibm.com/software/products/en/appscan IBM Security AppScan
   * https://www.netsparker.com/web-vulnerability-scanner/ Netsparker Web 漏洞扫描器
   * http://www8.hp.com/us/en/software-solutions/webinspect-dynamic-analysis-dast/index.html HP Web Inspect
   * https://github.com/sensepost/wikto Wikto - 带有一些额外功能的 Windows 版 Nikto
   * http://samurai.inguardians.com Samurai Web 测试框架
   * https://code.google.com/p/ratproxy/ Ratproxy
   * http://www.websecurify.com Websecurify
   * http://sourceforge.net/projects/grendel/ Grendel-scan
   * https://tools.kali.org/web-applications/gobuster 用 Go 编写的目录/文件与 DNS 爆破工具
   * http://www.edge-security.com/wfuzz.php Wfuzz
   * http://wapiti.sourceforge.net wapiti
   * https://github.com/neuroo/grabber Grabber
   * https://subgraph.com/vega/ Vega
   * http://websecuritytool.codeplex.com Watcher 被动式 Web 扫描器
   * http://xss.codeplex.com x5s XSS 与 Unicode 转换安全测试助手
   * http://www.beyondsecurity.com/avds AVDS 漏洞评估与管理
   * http://www.golismero.com Golismero
   * http://www.ikare-monitoring.com IKare
   * http://www.nstalker.com N-Stalker X
   * https://www.rapid7.com/products/nexpose/index.jsp Nexpose
   * http://www.rapid7.com/products/appspider/ App Spider
   * http://www.milescan.com ParosPro
   * https://www.qualys.com/enterprises/qualysguard/web-application-scanning/ Qualys Web 应用扫描
   * http://www.beyondtrust.com/Products/RetinaNetworkSecurityScanner/ Retina
   * https://www.owasp.org/index.php/OWASP_Xenotix_XSS_Exploit_Framework Xenotix XSS 漏洞利用框架
   * https://github.com/future-architect/vuls 面向 Linux 的无代理漏洞扫描器，使用 golang 编写。
   * https://github.com/rastating/wordpress-exploit-framework 一个 Ruby 框架，用于开发和使用辅助 WordPress 网站与系统渗透测试的模块。
   * http://www.xss-payloads.com/ XSS Payloads，用于利用 XSS 漏洞、构建自定义载荷、练习渗透测试技能。
   * https://github.com/joaomatosf/jexboss JBoss（及其他 Java 反序列化漏洞）验证与漏洞利用工具
   * https://github.com/commixproject/commix 自动化的全能 OS 命令注入与漏洞利用工具
   * https://github.com/pathetiq/BurpSmartBuster 一款为 Buster 添加智能的 Burp Suite 内容发现插件！
   * https://github.com/GoSecure/csp-auditor 用于分析 CSP 响应头的 Burp 和 ZAP 插件
   * https://github.com/ffleming/timing_attack 对 Web 应用发起时序攻击
   * https://github.com/lalithr95/fuzzapi Fuzzapi 是一款用于 REST API 渗透测试的工具
   * https://github.com/owtf/owtf 进攻性 Web 测试框架（OWTF）
   * https://github.com/nccgroup/wssip 用于捕获、修改并从客户端向服务器（及反向）发送自定义 WebSocket 数据的应用程序。
   * https://github.com/PalindromeLabs/STEWS 用于 WebSocket 发现、指纹识别和漏洞检测的工具套件
   * https://github.com/tijme/angularjs-csti-scanner 针对 AngularJS（ACSTIS）的自动化客户端模板注入（沙箱逃逸/绕过）检测。
   * https://reshift.softwaresecured.com 一款用于检测和管理 Java 安全漏洞的源代码分析工具。
   * https://encoding.tools 用于转换二进制数据和字符串（包括哈希和各种编码）的 Web 应用。提供 GPLv3 离线版本。
   * https://gchq.github.io/CyberChef/ 一把用于执行各种二进制数据和字符串编码与转换的“网络瑞士军刀”。
   * https://github.com/urbanadventurer/WhatWeb WhatWeb - 下一代 Web 扫描器
   * https://www.shodan.io/ Shodan - 用于查找存在漏洞的服务器的搜索引擎
   * https://github.com/WangYihang/Webshell-Sniper 通过终端管理的 WebShell 管理器
   * https://github.com/nil0x42/phpsploit PhpSploit - 功能完备的 C2 框架，通过恶意 PHP 一行代码静默驻留在 Web 服务器上
   * https://webhint.io/ - webhint - webhint 是一个可定制的代码检查工具，通过检查代码中的最佳实践与常见错误，帮助你提升网站的可访问性、速度、跨浏览器兼容性等。
   * https://gtfobins.github.io/ - gtfobins - GTFOBins 是一份精选的 Unix 二进制文件列表，可用于绕过配置不当系统中的本地安全限制。
   * https://github.com/HightechSec/git-scanner git-scanner - 一款用于漏洞狩猎或渗透测试的工具，目标是那些在公开位置提供开放 `.git` 仓库的网站
   * [Web 应用漏洞利用 @ Rawsec 清单](https://inventory.raw.pm/tools.html#title-tools-web-application-exploitation) - 完整的 Web 渗透测试工具列表
   * [Cyclops 是一款能够自动检测漏洞的新型浏览器](https://github.com/v8blink/Chromium-based-XSS-Taint-Tracking/) - Cyclops 是一款具备 XSS 检测功能的 Web 浏览器
   * https://caido.io/ - Web 代理
   * https://github.com/assetnote/kiterunner - API 发现
   * https://github.com/owasp-amass/amass - 域名侦察
   * [https://columbus.elmasy.com/](https://columbus.elmasy.com/) - Columbus 项目是一项高级子域名发现服务，提供快速、强大且易用的 API。
   * [用于窃取密码的 BadUSB 脚本](https://github.com/MarkCyber/BadUSB/blob/main/HackStuff/CredentialHarvester.txt) - 从 Chrome、Firefox 和 Edge 中提取所有已保存的密码，保存到备用 USB 中以供进一步分析。
   * https://github.com/flibustier/jwt-online-cracker - 在浏览器中暴力破解 HS256、HS384 或 HS512 JWT 令牌（完全客户端运行）。
   * [jwt-auditor](https://github.com/mohelobeid/jwt-auditor) - 离线 CLI，用于解码和审计 JWT，检测 alg:none、弱 HMAC 密钥以及 RS256 到 HS256 的混淆。
   * https://github.com/lukechilds/reverse-shell - 易于记忆的反向 Shell，应能在大多数类 Unix 系统上运行。
   * https://github.com/momenbasel/keyFinder - Chrome 扩展，使用 80+ 检测模式和跨 10 个攻击面的香农熵，被动扫描网页中泄露的 API 密钥、令牌和机密信息。
   * https://github.com/DenisPodgurskii/pentestkit - 基于浏览器的漏洞扫描器，用于漏洞赏金和渗透测试工作流，结合 DAST、SAST、IAST 和 SCA 能力来检测运行时、源代码级、交互式和依赖相关的安全问题。
- [SaaSFort](https://saasfort.com/scan) - 免费的 60 秒外部 NIS2 / 安全态势扫描，A-F 评级，无需注册。
- [ARS3NAL](https://github.com/inflictx/Arsenal) - 离线优先、可搜索的武器库：约 1500 个载荷、命令生成器、GTFOBins、字典、内置 CyberChef、反向 Shell 以及 70 个检查清单。
- [Mozilla - HTTP 观测台](https://developer.mozilla.org/en-US/observatory) - 由 Mozilla 开发，HTTP 观测台对站点的 HTTP 响应头及其他关键安全配置进行深入评估。
- [HTTP 安全报告](https://httpsecurityreport.com/) - 立即获取你的网站与最佳实践对比的报告。
- [ImmuniWeb CyberScore](https://www.immuniweb.com/cyberscore/) - 针对你的公司、合作伙伴或供应商的免费网络安全、隐私与 AI 安全评分
- [ImmuniWeb - 网站安全测试](https://www.immuniweb.com/websec/) - 检查 Web 安全漏洞、AI 机器人防护、HTTP 安全与隐私响应头、DNSSEC 配置、CSP，以及是否符合 GDPR 和 PCI DSS。每月 10 次免费测试（无需账户）
- [Pentest Tools - 网站漏洞扫描器](https://pentest-tools.com/website-vulnerability-scanning/website-scanner) - 检测 SQLi、XSS、命令注入、XXE 以及 75+ 种更多 Web 应用漏洞
- [Pentest Tools - 网络漏洞扫描器](https://pentest-tools.com/network-vulnerability-scanning/network-security-scanner-online) - 一款在线安全工具，用于识别网络基础设施中的漏洞、错误配置、过时的服务以及暴露的端口
- [UpClaw](https://github.com/okdkebm/UpClaw) - AI 驱动的 Web 渗透测试 CLI；单一零依赖 Python 文件（29 个内置检查 + 16 个外部工具适配器 + 证据报告）。
- [HTTP 检测代理](https://github.com/ai-blueteam/http-detection-agent) - 开源、本地优先的 HTTP 攻击检测器：Rust CLI，覆盖 62 个行为家族的 76 种检测（注入、遍历、请求走私、SSRF、XXE、反序列化等），外加用于智能体驱动分诊的本地 MCP 服务器

## 速查表

   * http://n0p.net/penguicon/php_app_sec/mirror/xss.html - XSS 速查表
   * https://highon.coffee/blog/lfi-cheat-sheet/ - LFI 速查表
   * https://highon.coffee/blog/reverse-shell-cheat-sheet/ - 反向 Shell 速查表
   * https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/ - SQL 注入速查表
   * https://www.gracefulsecurity.com/path-traversal-cheat-sheet-windows/ - 路径遍历速查表：Windows
   * [渗透测试思维导图](https://pentestmindmap.com/en) - 交互式思维导图，包含跨 32 个类别的 11,600+ 渗透测试命令。可搜索，一键复制。

## 用于渗透测试的 Docker 镜像

   * `docker pull kalilinux/kali-linux-docker` [官方 Kali Linux](https://hub.docker.com/r/kalilinux/kali-linux-docker/)
   * `docker pull blackarchlinux/blackarch` [官方 BlackArch Linux](https://hub.docker.com/r/blackarchlinux/blackarch)
   * `docker pull owasp/zap2docker-stable` - [官方 OWASP ZAP](https://github.com/zaproxy/zaproxy)
   * `docker pull wpscanteam/wpscan` - [官方 WPScan](https://hub.docker.com/r/wpscanteam/wpscan/)
   * `docker pull metasploitframework/metasploit-framework` - [docker-metasploit](https://hub.docker.com/r/metasploitframework/metasploit-framework/)
   * `docker pull citizenstig/dvwa` - [Damn Vulnerable Web Application (DVWA)](https://hub.docker.com/r/citizenstig/dvwa/)
   * `docker pull bkimminich/juice-shop` [OWASP Juice Shop](https://hub.docker.com/r/bkimminich/juice-shop)
   * `docker pull wpscanteam/vulnerablewordpress` - [存在漏洞的 WordPress 安装](https://hub.docker.com/r/wpscanteam/vulnerablewordpress/)
   * `docker pull hmlio/vaas-cve-2014-6271` - [漏洞即服务：Shellshock](https://hub.docker.com/r/hmlio/vaas-cve-2014-6271/)
   * `docker pull hmlio/vaas-cve-2014-0160` - [漏洞即服务：Heartbleed](https://hub.docker.com/r/hmlio/vaas-cve-2014-0160/)
   * `docker pull opendns/security-ninjas` - [Security Ninjas](https://hub.docker.com/r/opendns/security-ninjas/)
   * `docker pull noncetonic/archlinux-pentest-lxde:1.0` - [Arch Linux 渗透测试器](https://hub.docker.com/r/noncetonic/archlinux-pentest-lxde/)
   * `docker pull diogomonica/docker-bench-security` - [Docker 安全基准](https://hub.docker.com/r/diogomonica/docker-bench-security/)
   * `docker pull ismisepaul/securityshepherd` - [OWASP Security Shepherd](https://hub.docker.com/r/ismisepaul/securityshepherd/)
   * `docker pull danmx/docker-owasp-webgoat` - [OWASP WebGoat 项目 Docker 镜像](https://hub.docker.com/r/webgoat/goatandwolf)
   *  `docker pull docker pull jeroenwillemsen/wrongsecrets` - [OWASP WrongSecrets 项目 Docker 镜像](https://hub.docker.com/r/jeroenwillemsen/wrongsecrets)
   * `docker pull citizenstig/nowasp` - [OWASP Mutillidae II Web 渗透测试练习应用](https://hub.docker.com/r/citizenstig/nowasp/)
   * `docker pull aaaguirre/pentest` - [用于渗透测试的 Docker](https://github.com/aaaguirrep/pentest)
   * `docker pull rustscan/rustscan:2.0.0` - [现代端口扫描器](https://github.com/RustScan/RustScan)

## 漏洞

   * http://cve.mitre.org/ - 通用漏洞披露（CVE）。信息安全漏洞命名的标准。
   * https://www.exploit-db.com/ - 漏洞利用数据库——漏洞利用、Shellcode 和安全论文的终极档案库。
   * http://0day.today/ - Inj3ct0r 是漏洞利用和漏洞的终极数据库，也是漏洞研究人员和安全从业人员的宝贵资源。
   * http://www.securityfocus.com/ - 自 1999 年创立以来，SecurityFocus 一直是安全社区的中流砥柱。
   * http://packetstormsecurity.com/ - 全球安全资源
   * https://wpvulndb.com/ - WPScan 漏洞数据库
   * https://snyk.io/vuln/ - 漏洞数据库，提供已知漏洞的详细信息与修复指导。
   * https://stellastra.com/cipher-suite - 数百种 TLS 密码套件及其安全状态的数据库。
   * https://vulert.com/vuln-db - Vulert 通过监控并提醒你开源依赖中的漏洞，帮助开发者保护其软件——无需访问他们的代码。支持 Js、PHP、Java、Python 等大量依赖。
   * https://vulncheck.com/xdb/ - Git 仓库中漏洞利用概念验证代码的索引。
   * https://labs.jamessawyer.co.uk/cves/ - CVE PoC 搜索提供从 CVE 到 GitHub 概念验证的查找，可快速从 Web 漏洞转向公开漏洞利用代码。

## 课程

   * https://pwn.guide/ - 网络安全学习平台，约有 100 篇教程，其中约 25 篇关于 Web 黑客与网站防御。
   * https://www.offensive-security.com/information-security-training/advanced-web-attack-and-exploitation/ Offensive Security 高级 Web 攻击与漏洞利用（现场）
   * https://www.sans.org/course/web-app-penetration-testing-ethical-hacking Sans SEC542：Web 应用渗透测试与道德黑客
   * https://www.sans.org/course/advanced-web-app-penetration-testing-ethical-hacking Sans SEC642：高级 Web 应用渗透测试与道德黑客
   * http://opensecuritytraining.info/ - 开放安全训练
   * http://securitytrainings.net/security-trainings/ - Security Exploded 训练
   * http://www.securitytube.net/ - 全球最大的信息安全与黑客门户。
   * https://www.hacker101.com/ - 由 [Hackerone](https://www.hackerone.com) 提供的免费 Web 安全课程
   * https://www.darkrelay.com/courses/professional-penetration-tester - 由 [DarkRelay Security Labs](https://www.darkrelay.com) 提供的从零到英雄式渗透测试课程

## 在线黑客演示站点

   * http://testasp.vulnweb.com/ - Acunetix ASP 测试与演示站点
   * http://testaspnet.vulnweb.com/ - Acunetix ASP.Net 测试与演示站点
   * http://testphp.vulnweb.com/ - Acunetix PHP 测试与演示站点
   * http://crackme.cenzic.com/kelev/view/home.php - Crack Me Bank
   * http://zero.webappsecurity.com/ - Zero Bank
   * http://demo.testfire.net/ - Altoro Mutual
   * https://public-firing-range.appspot.com/ - Firing Range 是自动化 Web 应用安全扫描器的测试平台。
   * https://xss-game.appspot.com/ - XSS 挑战
   * https://google-gruyere.appspot.com/ Google Gruyere，Web 应用漏洞利用与防御
   * https://ginandjuice.shop/catalog
   * https://pentest-ground.com/ Pentest-Ground 是一个免费的练习场，提供故意存在漏洞的 Web 应用和网络服务。
  * [HackSimulator](https://chatgpt.com/g/g-jnT7HlNeK-hacksimulator) 是由 [MarkCyber](https://github.com/MarkCyber) 创建的 GPT，其中 ChatGPT 4 扮演黑客 CTF 角色。该 GPT 会先询问你的经验水平以及想要提升的方面，然后为你模拟一台机器/应用供你入侵，使用聊天框作为输入终端命令的地方。由于通过 AI 实现，它会根据你的经验水平变化和调整，如果你卡住了也可以寻求帮助。

## 实验环境
   * https://portswigger.net/web-security - Web 安全学院：来自 PortSwigger 的免费在线培训
   * http://www.cis.syr.edu/~wedu/seed/all_labs.html - 为计算机安全教育开发教学实验
   * https://www.vulnhub.com/ - 用于本地渗透测试的虚拟机。
   * https://pentesterlab.com/ - PentesterLab 是一种轻松且出色的学习渗透测试的方式。
   * https://codereviewlab.com/ - Code Review Lab 是一个动手代码审查培训平台。
   * https://github.com/jerryhoff/WebGoat.NET - 这个 Web 应用是一个关于常见 Web 安全缺陷的学习平台。
   * http://www.dvwa.co.uk/ - Damn Vulnerable Web Application (DVWA)
   * http://sourceforge.net/projects/lampsecurity/ - LAMPSecurity 培训
   * https://github.com/Audi-1/sqli-labs - 用于测试基于错误、盲注布尔、基于时间的 SQLI 实验。
   * https://github.com/paralax/lfi-labs - 一组用于练习利用 LFI、RFI 和命令注入漏洞的小型 PHP 脚本
   * https://hack.me/ - 在沙箱环境中免费构建、托管和共享存在漏洞的 Web 应用
   * http://azcwr.org/az-cyber-warfare-ranges - 免费的实战夺旗、蓝队、红队网络战靶场，面向从初学者到高级用户。必须使用手机发送短信请求访问靶场。
   * https://github.com/adamdoupe/WackoPicko - WackoPicko 是一个用于测试 Web 应用漏洞扫描器的存在漏洞的 Web 应用。
   * https://github.com/rapid7/hackazon - Hackazon 是一个免费的、存在漏洞的测试站点，它是一个使用当今富客户端和移动应用相同技术构建的在线商店。
   * https://github.com/RhinoSecurityLabs/cloudgoat - Rhino Security Labs 的“故意存在漏洞”的 AWS 基础设施搭建工具
   * https://www.hackthebox.eu/ - Hack The Box 是一个在线平台，让你测试和提升你的网络安全技能。
   * https://github.com/tegal1337/0l4bs - 0l4bs 是面向 Web 应用安全爱好者的跨站脚本实验。
   * https://github.com/oliverwiegers/pentest_lab - 利用 docker compose 的本地渗透测试实验室。
   * https://ginandjuice.shop/catalog
   * https://github.com/dolevf/Damn-Vulnerable-GraphQL-Application
   * https://labex.io/skilltrees/cybersecurity - LabEx 是一个通过动手实验提升你网络安全技能的平台。
   * https://pythoncyber.go.ro - CyberPython 帮助你进行研究，以解决挑战、利用 CVE 并编写优秀的脚本。
   * https://github.com/kOaDT/oss-oopssec-store - OSS – OopsSec Store：一个使用 Next.js 和 React 构建的故意存在漏洞的电子商务应用，用于 Web 安全培训和 CTF 练习。
   * https://github.com/momenbasel/htb-writeups - HTB Writeups：最全面的 Hack The Box 解题报告合集，包含 500+ 台机器、400+ 项挑战、ProLabs、Sherlocks、CTF 赛事以及速查表。

## SSL

   * https://www.ssllabs.com/ssltest/index.html - 该服务对公共互联网上任何 SSL Web 服务器的配置进行深度分析。
   * https://certobserver.com/ct-search - 搜索为某个域名颁发的 SSL/TLS 证书的证书透明度日志。
   * https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html - nginx 上的强 SSL 安全
   * https://weakdh.org/ - 弱 Diffie-Hellman 与 Logjam 攻击
   * https://letsencrypt.org/ - Let’s Encrypt 是一个新的证书颁发机构：免费、自动化且开放。
   * https://filippo.io/Heartbleed/ - 用于 CVE-2014-0160（Heartbleed）的检查器（站点与工具）。
   * https://testssl.sh/ - 一个命令行工具，用于检查网站的 TLS/SSL 密码套件、协议和加密缺陷。
   * [Scorifya](https://www.scorifya.com) - 任何网站的 0–100 安全评分，覆盖 TLS、安全响应头（CSP、HSTS、X-Frame-Options）、Cookie、DNS 以及邮件信号（SPF、DKIM、DMARC），并提供分级的修复步骤。
   * [ImmuniWeb SSL 安全测试](https://www.immuniweb.com/ssl/) - 一款免费的在线工具，用于检查网站或邮件服务器 SSL/TLS 配置的安全性。检查是否符合 NIST、HIPAA、PCI DSS 和 GDPR 等安全标准。每月 10 次免费测试（无需账户）

## Ruby on Rails 安全

   * http://brakemanscanner.org/ - 一款针对 Ruby on Rails 应用的静态分析安全漏洞扫描器。
   * https://github.com/rubysec/ruby-advisory-db - 存在漏洞的 Ruby Gems 数据库
   * https://github.com/rubysec/bundler-audit - 针对 Bundler 的补丁级别验证
   * https://github.com/hakirisec/hakiri_toolbelt - Hakiri Toolbelt 是 Hakiri 平台的命令行接口。
   * https://hakiri.io/facets - 扫描 Gemfile.lock 中的漏洞。
   * http://rails-sqli.org/ - 本页列出了 ActiveRecord 中许多不会对原始 SQL 参数进行净化的查询方法和选项，并不打算使用不安全的用户输入来调用它们。
   * https://github.com/0xsauby/yasuo - 一个 Ruby 脚本，用于扫描网络上易受攻击且可被利用的第三方 Web 应用
