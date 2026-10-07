# awesome-web-hacking
このリストは、Web アプリケーション・セキュリティについて学びたいが、手がかりがない方のためのものです。

Pull Request を送って情報を追加することで、助けていただけます。

PR を作る気がない場合は、Twitter の `@infoslack` までツイートしてください。

目次
=================

   * [書籍](#books)
   * [ドキュメント](#documentation)
   * [ツール](#tools)
   * [チートシート](#cheat-sheets)
   * [Docker](#docker-images-for-penetration-testing)
   * [脆弱性](#vulnerabilities)
   * [コース](#courses)
   * [オンライン・ハッキング実演サイト](#online-hacking-demonstration-sites)
   * [ラボ](#labs)
   * [SSL](#ssl)
   * [Ruby on Rails セキュリティ](#security-ruby-on-rails)

## 書籍

   * http://www.amazon.com/The-Web-Application-Hackers-Handbook/dp/8126533404/ Web Application Hacker’s Handbook: Finding and Exploiting Security Flaws（Web アプリケーション・ハッカーの手引書：セキュリティ欠陥の発見と悪用）
   * http://www.amazon.com/Hacking-Web-Apps-Preventing-Application/dp/159749951X/ Hacking Web Apps: Detecting and Preventing Web Application Security Problems（Web アプリのハッキング：Web アプリ・セキュリティ問題の検出と防止）
   * http://www.amazon.com/Hacking-Exposed-Web-Applications-Third/dp/0071740643/ Hacking Exposed Web Applications（ハッキング・エクスポーズド Web アプリケーション）
   * http://www.amazon.com/SQL-Injection-Attacks-Defense-Second/dp/1597499633/ SQL Injection Attacks and Defense（SQL インジェクション攻撃と防御）
   * http://www.amazon.com/Tangled-Web-Securing-Modern-Applications/dp/1593273886/ The Tangled WEB: A Guide to Securing Modern Web Applications（混乱した Web：モダンな Web アプリケーションを守るためのガイド）
   * http://www.amazon.com/Web-Application-Obfuscation-Evasion-Filters/dp/1597496049/ Web Application Obfuscation: '-/WAFs..Evasion..Filters//alert(/Obfuscation/)-'
   * http://www.amazon.com/XSS-Attacks-Scripting-Exploits-Defense/dp/1597491543/ XSS Attacks: Cross Site Scripting Exploits and Defense（XSS 攻撃：クロスサイト・スクリプティングの悪用と防御）
   * http://www.amazon.com/Browser-Hackers-Handbook-Wade-Alcorn/dp/1118662091/ The Browser Hacker’s Handbook（ブラウザ・ハッカーの手引書）
   * http://www.amazon.com/Basics-Web-Hacking-Techniques-Attack/dp/0124166008/ The Basics of Web Hacking: Tools and Techniques to Attack the Web（Web ハッキングの基礎：Web を攻撃するためのツールと手法）
   * http://www.amazon.com/Web-Penetration-Testing-Kali-Linux/dp/1782163166/ Web Penetration Testing with Kali Linux（Kali Linux による Web 侵入テスト）
   * http://www.amazon.com/Web-Application-Security-Beginners-Guide/dp/0071776168/ Web Application Security, A Beginner's Guide（Web アプリケーション・セキュリティ、初学者の手引書）
   * https://www.amazon.com/Hacking-Art-Exploitation-Jon-Erickson/dp/1593271441/ Hacking: The Art of Exploitation（ハッキング：エクスプロイトの技術）
   * https://www.crypto101.io/ - Crypto 101 は暗号学の入門コースです
   * http://www.offensive-security.com/metasploit-unleashed/ - Metasploit Unleashed
   * http://www.cl.cam.ac.uk/~rja14/book.html - Security Engineering（セキュリティ・エンジニアリング）
   * https://www.feistyduck.com/library/openssl-cookbook/ - OpenSSL Cookbook
   * https://www.manning.com/books/real-world-cryptography - 暗号技術を学び、適用する。
   * https://www.manning.com/books/making-sense-of-cyber-security - セキュリティ戦略を計画または実装する人に最適な、サイバーセキュリティの中核となる概念・用語・技術のガイド。
   * https://www.manning.com/books/cyber-security-career-guide - 既存の技術的・非技術的スキルを活かしてサイバーセキュリティのキャリアを始める。
   * https://www.manning.com/books/secret-key-cryptography - 暗号技術と秘密鍵（Secret Key）方式についての本。
   * https://www.manning.com/books/application-security-program-handbook - この実践的な本は、堅牢なアプリケーション・セキュリティ・プログラムを導入するためのワンストップ・ガイドです。
   * https://www.manning.com/books/cyber-threat-hunting - サイバー脅威ハンティングの実践ガイド。
   * https://nostarch.com/bug-bounty-bootcamp - Bug Bounty Bootcamp（バグバウンティ・ブートキャンプ）
   * https://nostarch.com/hacking-apis - Hacking APIs（API のハッキング）
   * https://www.manning.com/books/grokking-web-application-security - あらゆる攻撃に備え、耐性を持つ Web アプリの構築についての本。

## ドキュメント

   * https://www.owasp.org/ - Open Web Application Security Project
   * http://www.pentest-standard.org/ - Penetration Testing Execution Standard
   * http://www.binary-auditing.com/ - Dr. Thorsten Schneider の Binary Auditing
   * https://appsecwiki.com/ - Application Security Wiki は、セキュリティ研究者と開発者にアプリケーション・セキュリティ関連のすべてのリソースを一箇所で提供する取り組みです。
   * [AppSec Santa](https://appsecsanta.com) - SAST、DAST、SCA などにわたる 129 以上の Web アプリ・セキュリティ・ツールの独立した比較。

## ツール
   * https://github.com/bad-antics/nullsec-linux - NullSec Linux - あらかじめ設定済みの Web アプリケーション・テスト・ツールを備えたセキュリティ・ディストリビューション
   * https://github.com/bad-antics/nullsec-webfuzz - NullSec WebFuzz - Web アプリケーション・ファジング・フレームワーク
   * https://github.com/poszothebuilder/nextjs-security-headers-starter - 依存関係のない Next.js セキュリティ・ヘッダー・スターター。CSP、HSTS、および CI 用の本番検証機能を備える。

   * https://www.deepinfo.com/ - Deepinfo Attack Surface Platform は、すべてのデジタル資産を発見し、24 時間 365 日監視し、問題を検出してすぐに通知することで、即座に対処できるようにします。
     * https://github.com/bountyyfi/lonkero - 60 以上の攻撃モジュールを持つエンタープライズ向け Web 脆弱性スキャナー。侵入テストとセキュリティ評価のために Rust で構築。
   * https://spyse.com/ - ウェブ全体の最新データを提供する OSINT 検索エンジン。すべてのデータを独自の DB に保存し、発見したデータを相互接続し、いくつかの便利な機能を持つ。
   * http://www.metasploit.com/ - 世界で最も広く使われているペネトレーションテスト用ソフトウェア
   * https://findsubdomains.com - 多くの追加データを備えたオンライン・サブドメイン・スキャン・サービス。OSINT を利用して動作する。
   * https://cc.la - WHOIS、RDAP、DNS、IP WHOIS、SSL 証明書検索、ネームサーバー履歴、ネットワーク診断（ping/traceroute/MTR）、ドメイン監視のための無料オンライン・ツールキット。登録不要。
   * https://vacato.io - 無料の RDAP ドメイン監視リスト：スケジュールされたチェック＋ステータスが利用可能と思われる場合の Telegram/メール/Slack 通知。レジストラやドロップキャッチャーではない。無料枠：10 ドメイン。
   * https://github.com/BlessedRebuS/Krawl - クラウドネイティブな Web 擬似サーバーおよびアンチクローラー。
   * https://github.com/bjeborn/basic-auth-pot HTTP Basic 認証のハニーポット。
   * http://www.arachni-scanner.com/ - Web Application Security Scanner Framework
   * https://github.com/ASCIT31/Dark-Moon - Darkmoon はオープンソース（GPL-3.0）の自律型 AI 侵入テスト・プラットフォームで、MCP を通じて 80 以上のツールをオーケストレーションし、技術ごとに専用の攻撃サブエージェント（GraphQL、Spring Boot、ASP.NET、Node.js、Flask、PHP、Ruby）を持ち、発見ごとに証拠の軌跡を保持する。
   * https://github.com/BugTraceAI/BugTraceAI - BugTraceAI は、検証・証拠取得・レポート機能を備えた、正規の Web アプリケーション・セキュリティ・テスト向けのオープンソース多エージェント・プラットフォーム。
   * https://github.com/TayfurYldz/headerproof - HeaderProof は開発者向けアルファ版の低ノイズな能動的スキャナーで、CORS 設定ミス、レスポンス分割、キャッシュポイズニング候補、リフレクション・パスなどのヘッダー主導の Web セキュリティ手がかりを正規のテストで検出し、明確な証拠ゲートと誤検知抑制を備える。
   * https://github.com/ANVEAI/anve-offsec - Kali Linux 上の自律型 AI セキュリティ・エンジニア兼バグバウンティ・プラットフォーム。ステートフルな Hermes 推論、OpenClaw Chromium ブラウザ・サイドカー、Qdrant ベクトル戦略 RAG を備える。 🇮🇳
   * https://github.com/sullo/nikto - Nikto Web サーバー・スキャナー
   * http://www.tenable.com/products/nessus-vulnerability-scanner - Nessus Vulnerability Scanner
   * http://www.portswigger.net/burp/intruder.html - Burp Intruder は、Web アプリに対するカスタマイズされた攻撃を自動化するツール。
   * http://www.openvas.org/ - 世界で最も高度なオープンソースの脆弱性スキャナーおよび管理ツール。
   * https://github.com/iSECPartners/Scout2 - AWS 環境向けのセキュリティ監査ツール
   * https://www.owasp.org/index.php/Category:OWASP_DirBuster_Project - Web/アプリケーション・サーバー上のディレクトリおよびファイル名をブルートフォースするために設計されたマルチスレッドの Java アプリケーション。
   * https://www.owasp.org/index.php/ZAP - Zed Attack Proxy は、Web アプリの脆弱性を見つけるための使いやすい統合型侵入テスト・ツール。
   * https://github.com/vigolium/vigolium - エージェント型 AI と高速なネイティブ・エンジンを融合させた高忠実度な Web および API 脆弱性スキャナー。OWASP Top 10、認証付き IDOR/BOLA および帯域外テストを網羅し、OpenAPI/Postman/Burp/cURL 入力に対応。250 以上の検出モジュール。オープンソース、AGPL-3.0。
   * https://github.com/tecknicaltom/dsniff - dsniff はネットワーク監査および侵入テスト向けのツール群。
   * https://github.com/WangYihang/Webshell-Sniper - ターミナル経由で Webshell を管理。
   * https://github.com/DanMcInerney/dnsspoof - DNS スプーファー。ルーターからの DNS 応答を破棄し、偽の DNS 応答に置き換える。
   * https://github.com/trustedsec/social-engineer-toolkit - TrustedSec 製の Social-Engineer Toolkit (SET) リポジトリ
   * https://github.com/sqlmapproject/sqlmap - 自動 SQL インジェクションおよびデータベース乗っ取りツール
   * https://github.com/beefproject/beef - The Browser Exploitation Framework Project
   * http://w3af.org/ - w3af は Web Application Attack and Audit Framework
   * https://github.com/espreto/wpsploit - WPSploit, Exploiting Wordpress With Metasploit
   * https://vulert.com/ - Vulert は、オープンソースの依存関係における脆弱性を検出することでソフトウェアを保護する—コードにアクセスすることなく。Js、PHP、Java、Python などをサポート。
   * https://github.com/WangYihang/Reverse-Shell-Manager - ターミナル経由のリバース・シェル管理。
   * https://github.com/RUB-NDS/WS-Attacker - WS-Attacker は Web サービス侵入テストのためのモジュール式フレームワーク
   * https://github.com/wpscanteam/wpscan - WPScan はブラックボックスの WordPress 脆弱性スキャナー
   * https://github.com/own2pwn-fr/wp2shell-detect - WordPress コアの wp2shell 事前認証 RCE チェーン（CVE-2026-63030 / CVE-2026-60137）向けのブラックボックス、非侵襲的な検出器。公開ソースからコア・バージョンの指紋を取得し、悪用せずに脆弱なインストールをフラグする
   * http://sourceforge.net/projects/paros/ Paros proxy
   * https://www.owasp.org/index.php/Category:OWASP_WebScarab_Project Web Scarab proxy
   * https://code.google.com/p/skipfish/ Skipfish, an active web application security reconnaissance tool
   * http://www.acunetix.com/vulnerability-scanner/ Acunetix Web Vulnerability Scanner
   * https://cystack.net/ CyStack Web Security Platform
   * http://www-03.ibm.com/software/products/en/appscan IBM Security AppScan
   * https://www.netsparker.com/web-vulnerability-scanner/ Netsparker web vulnerability scanner
   * http://www8.hp.com/us/en/software-solutions/webinspect-dynamic-analysis-dast/index.html HP Web Inspect
   * https://github.com/sensepost/wikto Wikto - Nikto for Windows with some extra features
   * http://samurai.inguardians.com Samurai Web Testing Framework
   * https://code.google.com/p/ratproxy/ Ratproxy
   * http://www.websecurify.com Websecurify
   * http://sourceforge.net/projects/grendel/ Grendel-scan
   * https://tools.kali.org/web-applications/gobuster Directory/file and DNS busting tool written in Go
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
   * https://github.com/rastating/wordpress-exploit-framework WordPress サイトやシステムの侵入テストを支援するモジュールの開発と利用のための Ruby フレームワーク。
   * http://www.xss-payloads.com/ XSS Payloads to leverage XSS vulnerabilities, build custom payloads, practice penetration testing skills.
   * https://github.com/joaomatosf/jexboss JBoss（およびその他の Java 逆シリアル化脆弱性）検証・悪用ツール
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
   * https://webhint.io/ - webhint - webhint は、コードのベスト・プラクティスと一般的なエラーをチェックすることで、サイトのアクセシビリティ、速度、ブラウザ間互換性などを改善するためのカスタマイズ可能な lint ツール。
   * https://gtfobins.github.io/ - gtfobins - GTFOBins は、設定の不適切なシステムでローカルのセキュリティ制限を回避するために使用できる Unix バイナリのキュレーションされたリスト。
   * https://github.com/HightechSec/git-scanner git-scanner - 公開された `.git` リポジトリを置いた Web サイトを標的とする、バグハンティングやペンテスト向けのツール
   * [Web Application Exploitation @ Rawsec Inventory](https://inventory.raw.pm/tools.html#title-tools-web-application-exploitation) - 完全な Web ペンテスト・ツール一覧
   * [Cyclops is a novel browser that can detect vulnerability automatically](https://github.com/v8blink/Chromium-based-XSS-Taint-Tracking/) - Cyclops は XSS 検出機能を持つ Web ブラウザ
   * https://caido.io/ - Web proxy
   * https://github.com/assetnote/kiterunner - API discovery
   * https://github.com/owasp-amass/amass - domain recon
   * [https://columbus.elmasy.com/](https://columbus.elmasy.com/) - Columbus Project は、高速で強力かつ使いやすい API を持つ高度なサブドメイン発見サービス。
   * [BadUSB Script To Exfiltrate Passwords](https://github.com/MarkCyber/BadUSB/blob/main/HackStuff/CredentialHarvester.txt) - Chrome、Firefox、Edge から保存されたすべてのパスワードを抽出し、さらに分析するためにセカンダリ USB に保存する。
   * https://github.com/flibustier/jwt-online-cracker - ブラウザから HS256、HS384、HS512 の JWT トークンをブルートフォース（完全にクライアント側）。
   * [jwt-auditor](https://github.com/mohelobeid/jwt-auditor) - alg:none、弱い HMAC シークレット、RS256 から HS256 への混同を検出するための、JWT をデコードおよび監査するオフライン CLI。
   * https://github.com/lukechilds/reverse-shell - ほとんどの Unix 系システムで動作するはずの、覚えやすいリバース・シェル。
   * https://github.com/momenbasel/keyFinder - 80 以上の検出パターンと 10 の攻撃面にわたるシャノン・エントロピーを使用して、漏洩した API キー、トークン、シークレットを Web ページから受動的にスキャンする Chrome 拡張機能。
   * https://github.com/DenisPodgurskii/pentestkit - DAST、SAST、IAST、SCA の機能を組み合わせ、ランタイム・ソースレベル・対話型・依存関係関連のセキュリティ問題を検出する、バグバウンティおよびペンテスト向けのブラウザベースの脆弱性スキャナー。
- [SaaSFort](https://saasfort.com/scan) - 無料の 60 秒外部 NIS2 / セキュリティ態勢スキャン。A-F 評価、登録不要。
- [ARS3NAL](https://github.com/inflictx/Arsenal) - オフライン優先で検索可能な武器庫：約 1500 のペイロード、コマンド生成器、GTFOBins、ワードリスト、組み込み CyberChef、リバース・シェル、70 のチェックリスト。
- [Mozilla - HTTP Observatory](https://developer.mozilla.org/en-US/observatory) - Mozilla が開発した HTTP Observatory は、サイトの HTTP ヘッダーやその他の重要なセキュリティ設定を詳細に評価する。
- [HTTP Security Report](https://httpsecurityreport.com/) - あなたの Web サイトがベスト・プラクティスとどの程度合致しているかを即座にレポートする。
- [ImmuniWeb CyberScore](https://www.immuniweb.com/cyberscore/) - あなたの企業、パートナー、またはサプライヤーの無料のサイバーセキュリティ、プライバシー、AI セキュリティ評価
- [ImmuniWeb - Website Security Test](https://www.immuniweb.com/websec/) - Web セキュリティ脆弱性、AI ボット保護、HTTP セキュリティおよびプライバシー・ヘッダー、DNSSEC 設定、CSP、および GDPR と PCI DSS への準拠をチェック。月 10 回の無料テスト（アカウント不要）
- [Pentest Tools - Website Vulnerability Scanner](https://pentest-tools.com/website-vulnerability-scanning/website-scanner) - SQLi、XSS、コマンド・インジェクション、XXE など 75 以上の Web アプリ脆弱性を検出
- [Pentest Tools - Network Vulnerability Scanner](https://pentest-tools.com/network-vulnerability-scanning/network-security-scanner-online) - ネットワーク・インフラストラクチャ内の脆弱性、設定ミス、古いサービス、公開ポートを特定するために設計されたオンライン・セキュリティ・ツール
- [UpClaw](https://github.com/okdkebm/UpClaw) - AI 駆動の Web ペンテスト CLI。単一の依存関係なし Python ファイル（29 の組み込みチェック + 16 の外部ツール・アダプター + 証拠レポート）。
- [HTTP Detection Agent](https://github.com/ai-blueteam/http-detection-agent) - オープンソース、ローカル優先の HTTP 攻撃検出器：Rust CLI で、62 の振る舞いファミリーにわたる 76 の検出（インジェクション、トラバーサル、リクエスト・スマグリング、SSRF、XXE、逆シリアル化など）と、エージェント主導のトリアージのためのローカル MCP サーバー

## チートシート

   * http://n0p.net/penguicon/php_app_sec/mirror/xss.html - XSS チートシート
   * https://highon.coffee/blog/lfi-cheat-sheet/ - LFI チートシート
   * https://highon.coffee/blog/reverse-shell-cheat-sheet/ - リバース・シェル・チートシート
   * https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/ - SQL インジェクション・チートシート
   * https://www.gracefulsecurity.com/path-traversal-cheat-sheet-windows/ - パストラバーサル・チートシート：Windows
   * [Pentest Mindmap](https://pentestmindmap.com/en) - 32 カテゴリにわたる 11,600 以上のペンテスト・コマンドを備えたインタラクティブなマインドマップ。検索可能でワンクリックでコピー。

## 侵入テスト用 Docker イメージ

   * `docker pull kalilinux/kali-linux-docker` [公式 Kali Linux](https://hub.docker.com/r/kalilinux/kali-linux-docker/)
   * `docker pull blackarchlinux/blackarch` [公式 BlackArch Linux](https://hub.docker.com/r/blackarchlinux/blackarch)
   * `docker pull owasp/zap2docker-stable` - [公式 OWASP ZAP](https://github.com/zaproxy/zaproxy)
   * `docker pull wpscanteam/wpscan` - [公式 WPScan](https://hub.docker.com/r/wpscanteam/wpscan/)
   * `docker pull metasploitframework/metasploit-framework` - [docker-metasploit](https://hub.docker.com/r/metasploitframework/metasploit-framework/)
   * `docker pull citizenstig/dvwa` - [Damn Vulnerable Web Application (DVWA)](https://hub.docker.com/r/citizenstig/dvwa/)
   * `docker pull bkimminich/juice-shop` [OWASP Juice Shop](https://hub.docker.com/r/bkimminich/juice-shop)
   * `docker pull wpscanteam/vulnerablewordpress` - [脆弱な WordPress インストール](https://hub.docker.com/r/wpscanteam/vulnerablewordpress/)
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

## 脆弱性

   * http://cve.mitre.org/ - Common Vulnerabilities and Exposures. 情報セキュリティ脆弱性命名の標準
   * https://www.exploit-db.com/ - The Exploit Database – エクスプロイト、シェルコード、セキュリティ・ペーパーの究極のアーカイブ。
   * http://0day.today/ - Inj3ct0r はエクスプロイトと脆弱性の究極のデータベースであり、脆弱性研究者やセキュリティ専門家にとって優れたリソース。
   * http://www.securityfocus.com/ - 1999 年の創設以来、SecurityFocus はセキュリティ・コミュニティの主力となっている。
   * http://packetstormsecurity.com/ - グローバル・セキュリティ・リソース
   * https://wpvulndb.com/ - WPScan Vulnerability Database
   * https://snyk.io/vuln/ - Vulnerability DB, Known vulnerabilities の詳細情報と修復ガイダンス。
   * https://stellastra.com/cipher-suite - 数百の TLS 暗号スイートとそのセキュリティ状態のデータベース。
   * https://vulert.com/vuln-db - Vulert は、オープンソースの依存関係における脆弱性を監視して警告することで、開発者がコードにアクセスすることなくソフトウェアを保護する手助けをする。Js、PHP、Java、Python など多くの依存関係をサポート。
   * https://vulncheck.com/xdb/ - Git リポジトリ内のエクスプロイト概念実証コードの索引。
   * https://labs.jamessawyer.co.uk/cves/ - CVE PoC Search は、Web 脆弱性から公開エクスプロイト・コードへ素早く移行するための CVE から GitHub への概念実証検索を提供。

## コース

   * https://pwn.guide/ - サイバーセキュリティ学習プラットフォーム。約 100 のチュートリアルがあり、そのうち約 25 が Web ハッキングと Web サイト防御について。
   * https://www.offensive-security.com/information-security-training/advanced-web-attack-and-exploitation/ Offensive Security Advanced Web Attacks and Exploitation（ライブ）
   * https://www.sans.org/course/web-app-penetration-testing-ethical-hacking Sans SEC542: Web App Penetration Testing and Ethical Hacking
   * https://www.sans.org/course/advanced-web-app-penetration-testing-ethical-hacking Sans SEC642: Advanced Web App Penetration Testing and Ethical Hacking
   * http://opensecuritytraining.info/ - Open Security Training
   * http://securitytrainings.net/security-trainings/ - Security Exploded Training
   * http://www.securitytube.net/ - 世界最大の Infosec およびハッキング・ポータル。
   * https://www.hacker101.com/ - [Hackerone](https://www.hackerone.com) による無料の Web セキュリティ講座
   * https://www.darkrelay.com/courses/professional-penetration-tester - [DarkRelay Security Labs](https://www.darkrelay.com) による Zero-Hero スタイルのペンテスト・コース

## オンライン・ハッキング実演サイト

   * http://testasp.vulnweb.com/ - Acunetix ASP テストおよび実演サイト
   * http://testaspnet.vulnweb.com/ - Acunetix ASP.Net テストおよび実演サイト
   * http://testphp.vulnweb.com/ - Acunetix PHP テストおよび実演サイト
   * http://crackme.cenzic.com/kelev/view/home.php - Crack Me Bank
   * http://zero.webappsecurity.com/ - Zero Bank
   * http://demo.testfire.net/ - Altoro Mutual
   * https://public-firing-range.appspot.com/ - Firing Range は、自動化された Web アプリケーション・セキュリティ・スキャナーのための試験場。
   * https://xss-game.appspot.com/ - XSS チャレンジ
   * https://google-gruyere.appspot.com/ Google Gruyere, Web アプリケーションのエクスプロイトと防御
   * https://ginandjuice.shop/catalog
   * https://pentest-ground.com/ Pentest-Ground は、意図的に脆弱な Web アプリケーションとネットワーク・サービスを備えた無料の練習場。
  * [HackSimulator](https://chatgpt.com/g/g-jnT7HlNeK-hacksimulator) は、[MarkCyber](https://github.com/MarkCyber) によって作成された GPT で、その中では ChatGPT 4 がハッキング CTF として振る舞う。この GPT は、あなたの経験レベルと何を向上させたいかを尋ねた後、ターミナル・コマンドを入力する場所としてチャットボックスを使用して、侵入するマシン／アプリケーションをシミュレートする。AI を通じているため、経験レベルに応じて変化し調整され、行き詰まった場合は助けを求めることもできる。

## ラボ
   * https://portswigger.net/web-security - Web Security Academy: PortSwigger による無料のオンライン・トレーニング
   * http://www.cis.syr.edu/~wedu/seed/all_labs.html - コンピュータ・セキュリティ教育のための教育用ラボの開発
   * https://www.vulnhub.com/ - ローカルホスト侵入テスト用の仮想マシン。
   * https://pentesterlab.com/ - PentesterLab は、侵入テストを学ぶための簡単で優れた方法。
   * https://codereviewlab.com/ - Code Review Lab は実践的なコード・レビュー・トレーニング・プラットフォーム。
   * https://github.com/jerryhoff/WebGoat.NET - この Web アプリケーションは、一般的な Web セキュリティ欠陥についての学習プラットフォーム。
   * http://www.dvwa.co.uk/ - Damn Vulnerable Web Application (DVWA)
   * http://sourceforge.net/projects/lampsecurity/ - LAMPSecurity Training
   * https://github.com/Audi-1/sqli-labs - エラーベース、ブラインド布尔、時間ベースの SQLI をテストするラボ。
   * https://github.com/paralax/lfi-labs - LFI、RFI、CMD インジェクションの脆弱性を悪用する練習用の小さな PHP スクリプト群
   * https://hack.me/ - サンドボックス環境で脆弱な Web アプリを無料で構築、ホスト、共有する
   * http://azcwr.org/az-cyber-warfare-ranges - 初心者から上級者までのための無料の実戦 Capture the Flag、ブルーチーム、レッドチームのサイバー戦場。射場へのアクセスを要求する SMS を送信するために携帯電話を使用する必要がある。
   * https://github.com/adamdoupe/WackoPicko - WackoPicko は、Web アプリケーション脆弱性スキャナーをテストするために使用される脆弱な Web アプリケーション。
   * https://github.com/rapid7/hackazon - Hackazon は、今日のリッチクライアントおよびモバイル・アプリケーションと同じ技術で構築されたオンライン・ストアフロントである、無料の脆弱なテスト・サイト。
   * https://github.com/RhinoSecurityLabs/cloudgoat - Rhino Security Labs の「Vulnerable by Design」AWS インフラストラクチャ構築ツール
   * https://www.hackthebox.eu/ - Hack The Box は、サイバーセキュリティのスキルをテストし向上させるためのオンライン・プラットフォーム。
   * https://github.com/tegal1337/0l4bs - 0l4bs は Web アプリケーション・セキュリティ愛好家のためのクロスサイト・スクリプティング・ラボ。
   * https://github.com/oliverwiegers/pentest_lab - docker compose を活用したローカル・ペンテスト・ラボ。
   * https://ginandjuice.shop/catalog
   * https://github.com/dolevf/Damn-Vulnerable-GraphQL-Application
   * https://labex.io/skilltrees/cybersecurity - LabEx は、実践的なラボを通じてサイバーセキュリティ・スキルを向上させるためのオンライン・プラットフォーム。
   * https://pythoncyber.go.ro - CyberPython は、チャレンジの解決、CVE の悪用、優れたスクリプトの作成のために自身で調査を行う手助けをする。
   * https://github.com/kOaDT/oss-oopssec-store - OSS – OopsSec Store：Web セキュリティ・トレーニングと CTF 練習のために Next.js と React で構築された、意図的に脆弱な電子商取引アプリケーション。
   * https://github.com/momenbasel/htb-writeups - HTB Writeups：500 以上のマシン、400 以上のチャレンジ、ProLabs、Sherlocks、CTF イベント、チートシートを含む、最も包括的な Hack The Box 解説集。

## SSL

   * https://www.ssllabs.com/ssltest/index.html - このサービスは、パブリックなインターネット上の任意の SSL Web サーバーの設定を詳細に分析する。
   * https://certobserver.com/ct-search - ドメインに対して発行された SSL/TLS 証明書の Certificate Transparency ログを検索。
   * https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html - Strong SSL Security on nginx
   * https://weakdh.org/ - Weak Diffie-Hellman and the Logjam Attack
   * https://letsencrypt.org/ - Let’s Encrypt は新しい認証局：無料で、自動化され、オープン。
   * https://filippo.io/Heartbleed/ - CVE-2014-0160（Heartbleed）向けのチェッカー（サイトおよびツール）。
   * https://testssl.sh/ - Web サイトの TLS/SSL 暗号、プロトコル、暗号学的欠陥をチェックするコマンドライン・ツール。
   * [Scorifya](https://www.scorifya.com) - TLS、セキュリティ・ヘッダー（CSP、HSTS、X-Frame-Options）、Cookie、DNS、およびメール信号（SPF、DKIM、DMARC）を網羅し、ランク付けされた修正手順とともに、任意の Web サイトの 0–100 セキュリティ・スコアを提供。
   * [ImmuniWeb SSL Security Test](https://www.immuniweb.com/ssl/) - Web サイトまたはメール・サーバーの SSL/TLS 設定のセキュリティをチェックする無料のオンライン・ツール。NIST、HIPAA、PCI DSS、GDPR などのセキュリティ基準への準拠をチェック。月 10 回の無料テスト（アカウント不要）

## Ruby on Rails セキュリティ

   * http://brakemanscanner.org/ - Ruby on Rails アプリケーション向けの静的解析セキュリティ脆弱性スキャナー。
   * https://github.com/rubysec/ruby-advisory-db - 脆弱な Ruby Gems のデータベース
   * https://github.com/rubysec/bundler-audit - Bundler のパッチレベル検証
   * https://github.com/hakirisec/hakiri_toolbelt - Hakiri Toolbelt は Hakiri プラットフォームのコマンドライン・インターフェイス。
   * https://hakiri.io/facets - Gemfile.lock の脆弱性をスキャン。
   * http://rails-sqli.org/ - このページは、生の SQL 引数をサニタイズせず、安全でないユーザー入力で呼び出すことを意図していない ActiveRecord の多くのクエリ・メソッドとオプションを掲載。
   * https://github.com/0xsauby/yasuo - ネットワーク上の脆弱で悪用可能なサードパーティ製 Web アプリケーションをスキャンする Ruby スクリプト
