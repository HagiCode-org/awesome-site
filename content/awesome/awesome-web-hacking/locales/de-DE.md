# awesome-web-hacking
Diese Liste richtet sich an alle, die etwas über die Sicherheit von Webanwendungen lernen möchten, aber keinen Anfangspunkt haben.

Du kannst helfen, indem du Pull Requests sendest, um weitere Informationen hinzuzufügen.

Wenn du keine PRs erstellen möchtest, kannst du mir unter `@infoslack` auf Twitter schreiben.

Inhaltsverzeichnis
=================

   * [Bücher](#books)
   * [Dokumentation](#documentation)
   * [Werkzeuge](#tools)
   * [Spickzettel](#cheat-sheets)
   * [Docker](#docker-images-for-penetration-testing)
   * [Schwachstellen](#vulnerabilities)
   * [Kurse](#courses)
   * [Online-Hacking-Demonstrationsseiten](#online-hacking-demonstration-sites)
   * [Labs](#labs)
   * [SSL](#ssl)
   * [Sicherheit Ruby on Rails](#security-ruby-on-rails)

## Bücher

   * http://www.amazon.com/The-Web-Application-Hackers-Handbook/dp/8126533404/ The Web Application Hacker’s Handbook: Finding and Exploiting Security Flaws
   * http://www.amazon.com/Hacking-Web-Apps-Preventing-Application/dp/159749951X/ Hacking Web Apps: Detecting and Preventing Web Application Security Problems
   * http://www.amazon.com/Hacking-Exposed-Web-Applications-Third/dp/0071740643/ Hacking Exposed Web Applications
   * http://www.amazon.com/SQL-Injection-Attacks-Defense-Second/dp/1597499633/ SQL Injection Attacks and Defense
   * http://www.amazon.com/Tangled-Web-Securing-Modern-Applications/dp/1593273886/ The Tangled WEB: A Guide to Securing Modern Web Applications
   * http://www.amazon.com/Web-Application-Obfuscation-Evasion-Filters/dp/1597496049/ Web Application Obfuscation: '-/WAFs..Evasion..Filters//alert(/Obfuscation/)-'
   * http://www.amazon.com/XSS-Attacks-Scripting-Exploits-Defense/dp/1597491543/ XSS Attacks: Cross Site Scripting Exploits and Defense
   * http://www.amazon.com/Browser-Hackers-Handbook-Wade-Alcorn/dp/1118662091/ The Browser Hacker’s Handbook
   * http://www.amazon.com/Basics-Web-Hacking-Techniques-Attack/dp/0124166008/ The Basics of Web Hacking: Tools and Techniques to Attack the Web
   * http://www.amazon.com/Web-Penetration-Testing-Kali-Linux/dp/1782163166/ Web Penetration Testing with Kali Linux
   * http://www.amazon.com/Web-Application-Security-Beginners-Guide/dp/0071776168/ Web Application Security, A Beginner's Guide
   * https://www.amazon.com/Hacking-Art-Exploitation-Jon-Erickson/dp/1593271441/ Hacking: The Art of Exploitation
   * https://www.crypto101.io/ - Crypto 101 ist ein einführender Kurs über Kryptographie
   * http://www.offensive-security.com/metasploit-unleashed/ - Metasploit Unleashed
   * http://www.cl.cam.ac.uk/~rja14/book.html - Security Engineering
   * https://www.feistyduck.com/library/openssl-cookbook/ - OpenSSL Cookbook
   * https://www.manning.com/books/real-world-cryptography - Kryptografische Techniken erlernen und anwenden.
   * https://www.manning.com/books/making-sense-of-cyber-security - Ein Leitfaden zu den Schlüsselkonzepten, der Terminologie und den Technologien der Cybersicherheit, perfekt für alle, die eine Sicherheitsstrategie planen oder umsetzen.
   * https://www.manning.com/books/cyber-security-career-guide - Starte eine Karriere in der Cybersicherheit, indem du lernst, deine vorhandenen technischen und nichttechnischen Fähigkeiten anzupassen.
   * https://www.manning.com/books/secret-key-cryptography - Ein Buch über kryptografische Techniken und Secret-Key-Verfahren.
   * https://www.manning.com/books/application-security-program-handbook - Dieses praktische Buch ist ein umfassender Leitfaden zur Implementierung eines robusten Anwendungssicherheitsprogramms.
   * https://www.manning.com/books/cyber-threat-hunting - Praktischer Leitfaden zur Cyber-Threat-Hunting.
   * https://nostarch.com/bug-bounty-bootcamp - Bug Bounty Bootcamp
   * https://nostarch.com/hacking-apis - Hacking APIs
   * https://www.manning.com/books/grokking-web-application-security - Ein Buch über den Aufbau von Web-Apps, die auf jeden Angriff vorbereitet und gegen ihn resistent sind.

## Dokumentation

   * https://www.owasp.org/ - Open Web Application Security Project
   * http://www.pentest-standard.org/ - Penetration Testing Execution Standard
   * http://www.binary-auditing.com/ - Dr. Thorsten Schneiders Binary Auditing
   * https://appsecwiki.com/ - Application Security Wiki ist eine Initiative, um allen Sicherheitsforschern und Entwicklern alle anwendungssicherheitsbezogenen Ressourcen an einem Ort bereitzustellen.
   * [AppSec Santa](https://appsecsanta.com) - Unabhängiger Vergleich von über 129 Web-Anwendungssicherheitswerkzeugen in den Bereichen SAST, DAST, SCA und mehr.

## Werkzeuge
   * https://github.com/bad-antics/nullsec-linux - NullSec Linux - Sicherheits-Distribution mit vorkonfigurierten Web-Anwendungstestwerkzeugen
   * https://github.com/bad-antics/nullsec-webfuzz - NullSec WebFuzz - Web-Anwendungs-Fuzzing-Framework
   * https://github.com/poszothebuilder/nextjs-security-headers-starter - Next.js-Sicherheitsheader-Starter ohne Abhängigkeiten mit CSP, HSTS und einem Produktionsprüfer für CI.

   * https://www.deepinfo.com/ - Die Deepinfo Attack Surface Platform entdeckt alle deine digitalen Assets, überwacht sie rund um die Uhr, erkennt Probleme und benachrichtigt dich schnell, damit du sofort handeln kannst.
     * https://github.com/bountyyfi/lonkero - Unternehmensweiter Web-Schwachstellenscanner mit über 60 Angriffsmodulen, in Rust für Penetrationstests und Sicherheitsbewertungen gebaut.
   * https://spyse.com/ - OSINT-Suchmaschine, die aktuelle Daten über das gesamte Web liefert, alle Daten in einer eigenen DB speichert, gefundene Daten vernetzt und einige coole Funktionen hat.
   * http://www.metasploit.com/ - Die weltweit am häufigsten genutzte Penetration-Testing-Software
   * https://findsubdomains.com - Online-Subdomain-Scan-Dienst mit vielen Zusatzdaten. Funktioniert mit OSINT.
   * https://cc.la - Kostenloses Online-Toolkit für WHOIS, RDAP, DNS, IP-WHOIS, SSL-Zertifikatssuche, Nameserver-Verlauf, Netzwerkdiagnose (ping/traceroute/MTR) und Domain-Überwachung. Keine Registrierung erforderlich.
   * https://vacato.io - Kostenlose RDAP-Domain-Beobachtungsliste: geplante Prüfungen + Telegram/E-Mail/Slack, wenn der Status verfügbar aussieht. Kein Registrar oder Drop-Catcher. Kostenlose Stufe: 10 Domains.
   * https://github.com/BlessedRebuS/Krawl - Cloud-nativer Web-Täuschungsserver und Anti-Crawler.
   * https://github.com/bjeborn/basic-auth-pot HTTP-Basic-Authentication-Honeypot.
   * http://www.arachni-scanner.com/ - Web Application Security Scanner Framework
   * https://github.com/ASCIT31/Dark-Moon - Darkmoon ist eine Open-Source-Plattform (GPL-3.0) für autonome KI-Penetrationstests, die über 80 Werkzeuge über MCP orchestriert, mit dedizierten offensive Sub-Agents pro Technologie (GraphQL, Spring Boot, ASP.NET, Node.js, Flask, PHP, Ruby) und einer Beweisspur pro Fund.
   * https://github.com/BugTraceAI/BugTraceAI - BugTraceAI ist eine Open-Source-Multi-Agent-Plattform für autorisierte Web-Anwendungssicherheitstests mit Validierung, Bewegssicherung und Berichterstattung.
   * https://github.com/TayfurYldz/headerproof - HeaderProof ist ein Entwickler-Alpha-, störungsarmer aktiver Scanner für autorisierte Tests von header-getriebenen Web-Sicherheitsansätzen wie CORS-Fehlkonfiguration, Response Splitting, Cache-Poisoning-Kandidaten und Reflektionspfaden, mit expliziten Beweisschranken und False-Positive-Unterdrückung.
   * https://github.com/ANVEAI/anve-offsec - Autonomer KI-Sicherheitsingenieur & Bug-Bounty-Plattform in Kali Linux mit stateful Hermes-Reasoning, OpenClaw-Chromium-Browser-Sidecar und Qdrant-Vektorstrategie-RAG. 🇮🇳
   * https://github.com/sullo/nikto - Nikto Webserver-Scanner
   * http://www.tenable.com/products/nessus-vulnerability-scanner - Nessus Vulnerability Scanner
   * http://www.portswigger.net/burp/intruder.html - Burp Intruder ist ein Werkzeug zur Automatisierung von angepassten Angriffen gegen Web-Apps.
   * http://www.openvas.org/ - Der weltweit fortschrittlichste Open-Source-Schwachstellenscanner und -manager.
   * https://github.com/iSECPartners/Scout2 - Sicherheits-Audit-Werkzeug für AWS-Umgebungen
   * https://www.owasp.org/index.php/Category:OWASP_DirBuster_Project - Ist eine multithreaded Java-Anwendung, die Verzeichnis- und Dateinamen auf Web/Anwendungsservern per Brute-Force angreift.
   * https://www.owasp.org/index.php/ZAP - Der Zed Attack Proxy ist ein einfach zu bedienendes integriertes Penetrationstest-Werkzeug zum Finden von Schwachstellen in Webanwendungen.
   * https://github.com/vigolium/vigolium - Hochpräziser Web- & API-Schwachstellenscanner, der agentische KI mit einer schnellen nativen Engine verbindet; über 250 Erkennungsmodule abdeckend OWASP Top 10, authentifizierte IDOR/BOLA- und Out-of-Band-Tests sowie OpenAPI/Postman/Burp/cURL-Eingaben. Open Source, AGPL-3.0.
   * https://github.com/tecknicaltom/dsniff - dsniff ist eine Sammlung von Werkzeugen für Netzwerk-Audits und Penetrationstests.
   * https://github.com/WangYihang/Webshell-Sniper - Verwalte deine Webshell über das Terminal.
   * https://github.com/DanMcInerney/dnsspoof - DNS-Spoofer. Verwirft DNS-Antworten vom Router und ersetzt sie durch die gefälschte DNS-Antwort.
   * https://github.com/trustedsec/social-engineer-toolkit - Das Social-Engineer Toolkit (SET) Repository von TrustedSec
   * https://github.com/sqlmapproject/sqlmap - Automatisches SQL-Injection- und Datenbankübernahme-Werkzeug
   * https://github.com/beefproject/beef - The Browser Exploitation Framework Project
   * http://w3af.org/ - w3af ist ein Web Application Attack and Audit Framework
   * https://github.com/espreto/wpsploit - WPSploit, Exploiting Wordpress With Metasploit
   * https://vulert.com/ - Vulert sichert Software, indem es Schwachstellen in Open-Source-Abhängigkeiten erkennt — ohne auf deinen Code zuzugreifen. Unterstützt Js, PHP, Java, Python und mehr.
   * https://github.com/WangYihang/Reverse-Shell-Manager - Reverse-Shell-Manager über das Terminal.
   * https://github.com/RUB-NDS/WS-Attacker - WS-Attacker ist ein modulares Framework für Penetrationstests von Webdiensten
   * https://github.com/wpscanteam/wpscan - WPScan ist ein Black-Box-WordPress-Schwachstellenscanner
   * https://github.com/own2pwn-fr/wp2shell-detect - Blackbox-, nicht-invasive Erkennung für die wp2shell Pre-Auth-RCE-Kette in WordPress-Core (CVE-2026-63030 / CVE-2026-60137); fingert den Core verifiziert aus öffentlichen Quellen und markiert verwundbare Installationen, ohne sie auszunutzen
   * http://sourceforge.net/projects/paros/ Paros proxy
   * https://www.owasp.org/index.php/Category:OWASP_WebScarab_Project Web Scarab proxy
   * https://code.google.com/p/skipfish/ Skipfish, ein aktives Web-Anwendungs-Sicherheits-Reconnaissance-Werkzeug
   * http://www.acunetix.com/vulnerability-scanner/ Acunetix Web Vulnerability Scanner
   * https://cystack.net/ CyStack Web Security Platform
   * http://www-03.ibm.com/software/products/en/appscan IBM Security AppScan
   * https://www.netsparker.com/web-vulnerability-scanner/ Netsparker web vulnerability scanner
   * http://www8.hp.com/us/en/software-solutions/webinspect-dynamic-analysis-dast/index.html HP Web Inspect
   * https://github.com/sensepost/wikto Wikto - Nikto für Windows mit einigen Zusatzfunktionen
   * http://samurai.inguardians.com Samurai Web Testing Framework
   * https://code.google.com/p/ratproxy/ Ratproxy
   * http://www.websecurify.com Websecurify
   * http://sourceforge.net/projects/grendel/ Grendel-scan
   * https://tools.kali.org/web-applications/gobuster Verzeichnis-/Datei- und DNS-Busting-Werkzeug geschrieben in Go
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
   * https://github.com/rastating/wordpress-exploit-framework Ein Ruby-Framework zum Entwickeln und Nutzen von Modulen, die bei Penetrationstests von WordPress-Websites und -Systemen helfen.
   * http://www.xss-payloads.com/ XSS Payloads zum Ausnutzen von XSS-Schwachstellen, Erstellen eigener Payloads, Üben von Penetrationstest-Fähigkeiten.
   * https://github.com/joaomatosf/jexboss JBoss- (und andere Java-Deserialisierungsschwachstellen) Verifizierungs- und Exploitation-Tool
   * https://github.com/commixproject/commix Automatisiertes All-in-One-OS-Command-Injection- und Exploitation-Werkzeug
   * https://github.com/pathetiq/BurpSmartBuster Ein Burp-Suite-Inhaltsentdeckungs-Plugin, das dem Buster Intelligenz hinzufügt!
   * https://github.com/GoSecure/csp-auditor Burp- und ZAP-Plugin zum Analysieren von CSP-Headern
   * https://github.com/ffleming/timing_attack Timing-Angriffe gegen Webanwendungen durchführen
   * https://github.com/lalithr95/fuzzapi Fuzzapi ist ein Werkzeug für REST-API-Pentests
   * https://github.com/owtf/owtf Offensive Web Testing Framework (OWTF)
   * https://github.com/nccgroup/wssip Anwendung zum Erfassen, Ändern und Senden benutzerdefinierter WebSocket-Daten vom Client zum Server und umgekehrt.
   * https://github.com/PalindromeLabs/STEWS Werkzeugsuite für WebSocket-Entdeckung, Fingerprinting und Schwachstellenerkennung
   * https://github.com/tijme/angularjs-csti-scanner Automatisierte Client-seitige Template-Injection-Erkennung (Sandbox-Escape/Bypass) für AngularJS (ACSTIS).
   * https://reshift.softwaresecured.com Ein Quellcode-Analysewerkzeug zum Erkennen und Verwalten von Java-Sicherheitsschwachstellen.
   * https://encoding.tools Web-App zum Transformieren von Binärdaten und Strings, einschließlich Hashes und verschiedener Kodierungen. GPLv3-Offline-Version verfügbar.
   * https://gchq.github.io/CyberChef/ Ein „Cyber-Schweizer Taschenmesser" zum Durchführen verschiedener Kodierungen und Transformationen von Binärdaten und Strings.
   * https://github.com/urbanadventurer/WhatWeb WhatWeb - Next generation web scanner
   * https://www.shodan.io/ Shodan - Die Suchmaschine zum Finden verwundbarer Server
   * https://github.com/WangYihang/Webshell-Sniper Ein Webshell-Manager über das Terminal
   * https://github.com/nil0x42/phpsploit PhpSploit - Voll ausgestattetes C2-Framework, das über ein böses PHP-One-Liner still auf dem Webserver persistiert
   * https://webhint.io/ - webhint - webhint ist ein anpassbares Linting-Werkzeug, das dir hilft, die Zugänglichkeit, Geschwindigkeit, browserübergreifende Kompatibilität deiner Seite und mehr zu verbessern, indem es deinen Code auf Best Practices und häufige Fehler prüft.
   * https://gtfobins.github.io/ - gtfobins - GTFOBins ist eine kuratierte Liste von Unix-Binärdateien, die genutzt werden können, um lokale Sicherheitsbeschränkungen in fehlkonfigurierten Systemen zu umgehen.
   * https://github.com/HightechSec/git-scanner git-scanner - Ein Werkzeug für Bug-Hunting oder Pentests, das auf Websites abzielt, die offene `.git`-Repositories öffentlich verfügbar haben
   * [Web Application Exploitation @ Rawsec Inventory](https://inventory.raw.pm/tools.html#title-tools-web-application-exploitation) - Vollständige Liste der Web-Pentest-Werkzeuge
   * [Cyclops ist ein neuartiger Browser, der Schwachstellen automatisch erkennen kann](https://github.com/v8blink/Chromium-based-XSS-Taint-Tracking/) - Cyclops ist ein Webbrowser mit XSS-Erkennungsfunktion
   * https://caido.io/ - Web-Proxy
   * https://github.com/assetnote/kiterunner - API-Entdeckung
   * https://github.com/owasp-amass/amass - Domain-Recon
   * [https://columbus.elmasy.com/](https://columbus.elmasy.com/) - Das Columbus-Projekt ist ein fortschrittlicher Subdomain-Discovery-Dienst mit schneller, leistungsstarker und einfach zu nutzender API.
   * [BadUSB-Skript zum Exfiltrieren von Passwörtern](https://github.com/MarkCyber/BadUSB/blob/main/HackStuff/CredentialHarvester.txt) - Extrahiert alle gespeicherten Passwörter aus Chrome, Firefox und Edge, um sie zur weiteren Analyse auf einem sekundären USB zu speichern.
   * https://github.com/flibustier/jwt-online-cracker - Brute-Force HS256-, HS384- oder HS512-JWT-Token aus deinem Browser (vollständig clientseitig).
   * [jwt-auditor](https://github.com/mohelobeid/jwt-auditor) - Offline-CLI zum Dekodieren und Prüfen von JWTs auf alg:none, schwache HMAC-Secrets und RS256-zu-HS256-Verwechslung.
   * https://github.com/lukechilds/reverse-shell - Einfach zu merkende Reverse-Shell, die auf den meisten Unix-ähnlichen Systemen funktionieren sollte.
   * https://github.com/momenbasel/keyFinder - Chrome-Erweiterung, die Webseiten passiv nach geleakten API-Schlüsseln, Tokens und Secrets scannt, unter Verwendung von über 80 Erkennungsmustern und Shannon-Entropie über 10 Angriffsflächen.
   * https://github.com/DenisPodgurskii/pentestkit - Browserbasierter Schwachstellenscanner für Bug-Bounty- und Pentest-Workflows, der DAST-, SAST-, IAST- und SCA-Fähigkeiten kombiniert, um Laufzeit-, Quellcode-, interaktive und abhängigkeitsbezogene Sicherheitsprobleme zu erkennen.
- [SaaSFort](https://saasfort.com/scan) - Kostenloser 60-Sekunden-externer NIS2-/Sicherheitsstatus-Scan, Note A-F, keine Anmeldung nötig.
- [ARS3NAL](https://github.com/inflictx/Arsenal) - Offline-first, durchsuchbares Arsenal: ~1500 Payloads, Befehlsgenerator, GTFOBins, Wordlisten, eingebettetes CyberChef, Reverse-Shells und 70 Checklisten.
- [Mozilla - HTTP Observatory](https://developer.mozilla.org/en-US/observatory) - Vom Mozilla entwickelt, führt das HTTP Observatory eine tiefgehende Bewertung der HTTP-Header und anderer wichtiger Sicherheitskonfigurationen einer Seite durch.
- [HTTP Security Report](https://httpsecurityreport.com/) - Erhalte sofort einen Bericht darüber, wie deine Website im Vergleich zu den Best Practices abschneidet.
- [ImmuniWeb CyberScore](https://www.immuniweb.com/cyberscore/) - kostenlose Cyber-, Datenschutz- und KI-Sicherheitsbewertung deines Unternehmens, Partner oder Lieferanten
- [ImmuniWeb - Website Security Test](https://www.immuniweb.com/websec/) - Prüft auf Web-Sicherheitsschwachstellen, KI-Bot-Schutz, HTTP-Sicherheits- und Datenschutz-Header, DNSSEC-Konfiguration, CSP und Einhaltung von GDPR und PCI DSS. 10 kostenlose Tests pro Monat (ohne Konto)
- [Pentest Tools - Website Vulnerability Scanner](https://pentest-tools.com/website-vulnerability-scanning/website-scanner) - erkennt SQLi, XSS, Command Injection, XXE und über 75 weitere Web-App-Schwachstellen
- [Pentest Tools - Network Vulnerability Scanner](https://pentest-tools.com/network-vulnerability-scanning/network-security-scanner-online) - ein Online-Sicherheitswerkzeug, das Schwachstellen, Fehlkonfigurationen, veraltete Dienste und offene Ports in Netzwerkinfrastrukturen identifizieren soll
- [UpClaw](https://github.com/okdkebm/UpClaw) - KI-gesteuerte Web-Pentest-CLI; einzelne Python-Datei ohne Abhängigkeiten (29 eingebaute Checks + 16 externe Tool-Adapter + Beweisberichte).
- [HTTP Detection Agent](https://github.com/ai-blueteam/http-detection-agent) - open-source, local-first HTTP-Angriffserkenner: Rust-CLI mit 76 Erkennungen über 62 Verhaltensfamilien (Injection, Traversal, Request Smuggling, SSRF, XXE, Deserialisierung und mehr), plus ein lokaler MCP-Server für agentengetriebenes Triage

## Spickzettel

   * http://n0p.net/penguicon/php_app_sec/mirror/xss.html - XSS-Spickzettel
   * https://highon.coffee/blog/lfi-cheat-sheet/ - LFI-Spickzettel
   * https://highon.coffee/blog/reverse-shell-cheat-sheet/ - Reverse-Shell-Spickzettel
   * https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/ - SQL-Injection-Spickzettel
   * https://www.gracefulsecurity.com/path-traversal-cheat-sheet-windows/ - Path-Traversal-Spickzettel: Windows
   * [Pentest Mindmap](https://pentestmindmap.com/en) - Interaktive Mindmap mit über 11.600 Pentest-Befehlen in 32 Kategorien. Durchsuchbar mit Ein-Klick-Kopie.

## Docker-Images für Penetrationstests

   * `docker pull kalilinux/kali-linux-docker` [offizielles Kali Linux](https://hub.docker.com/r/kalilinux/kali-linux-docker/)
   * `docker pull blackarchlinux/blackarch` [offizielles BlackArch Linux](https://hub.docker.com/r/blackarchlinux/blackarch)
   * `docker pull owasp/zap2docker-stable` - [offizielles OWASP ZAP](https://github.com/zaproxy/zaproxy)
   * `docker pull wpscanteam/wpscan` - [offizieller WPScan](https://hub.docker.com/r/wpscanteam/wpscan/)
   * `docker pull metasploitframework/metasploit-framework` - [docker-metasploit](https://hub.docker.com/r/metasploitframework/metasploit-framework/)
   * `docker pull citizenstig/dvwa` - [Damn Vulnerable Web Application (DVWA)](https://hub.docker.com/r/citizenstig/dvwa/)
   * `docker pull bkimminich/juice-shop` [OWASP Juice Shop](https://hub.docker.com/r/bkimminich/juice-shop)
   * `docker pull wpscanteam/vulnerablewordpress` - [Verwundbare WordPress-Installation](https://hub.docker.com/r/wpscanteam/vulnerablewordpress/)
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

## Schwachstellen

   * http://cve.mitre.org/ - Common Vulnerabilities and Exposures. Der Standard für Namen von Informationssicherheitsschwachstellen
   * https://www.exploit-db.com/ - The Exploit Database – ultimatives Archiv von Exploits, Shellcode und Security Papers.
   * http://0day.today/ - Inj3ct0r ist die ultimative Datenbank von Exploits und Schwachstellen und eine großartige Ressource für Schwachstellenforscher und Sicherheitsprofis.
   * http://www.securityfocus.com/ - Seit seiner Gründung 1999 ist SecurityFocus ein Hauptpfeiler in der Sicherheitsgemeinschaft.
   * http://packetstormsecurity.com/ - Globale Sicherheitsressource
   * https://wpvulndb.com/ - WPScan Vulnerability Database
   * https://snyk.io/vuln/ - Vulnerability DB, detaillierte Informationen und Reparaturleitfaden für bekannte Schwachstellen.
   * https://stellastra.com/cipher-suite - Datenbank von hunderten TLS-Cipher-Suites und deren Sicherheitsstatus.
   * https://vulert.com/vuln-db - Vulert hilft Entwicklern, ihre Software zu sichern, indem es sie über Schwachstellen in Open-Source-Abhängigkeiten überwacht und warnt — ohne Zugriff auf ihren Code zu benötigen. Unterstützt Abhängigkeiten von Js, PHP, Java, Python und vielen mehr.
   * https://vulncheck.com/xdb/ - Ein Index von Exploit-Proof-of-Concept-Code in Git-Repositories.
   * https://labs.jamessawyer.co.uk/cves/ - CVE PoC Search bietet die Suche von CVE zu GitHub-Proof-of-Concept, um schnell von einer Web-Schwachstelle zu öffentlichem Exploit-Code zu wechseln.

## Kurse

   * https://pwn.guide/ - Cybersecurity-Lernplattform, mit etwa 100 Tutorials, wovon etwa 25 über Web-Hacking & Verteidigung von Websites handeln.
   * https://www.offensive-security.com/information-security-training/advanced-web-attack-and-exploitation/ Offensive Security Advanced Web Attacks and Exploitation (live)
   * https://www.sans.org/course/web-app-penetration-testing-ethical-hacking Sans SEC542: Web App Penetration Testing and Ethical Hacking
   * https://www.sans.org/course/advanced-web-app-penetration-testing-ethical-hacking Sans SEC642: Advanced Web App Penetration Testing and Ethical Hacking
   * http://opensecuritytraining.info/ - Open Security Training
   * http://securitytrainings.net/security-trainings/ - Security Exploded Training
   * http://www.securitytube.net/ - Die weltgrößte Infosec- und Hacking-Portal.
   * https://www.hacker101.com/ - Kostenloser Kurs für Web-Sicherheit von [Hackerone](https://www.hackerone.com)
   * https://www.darkrelay.com/courses/professional-penetration-tester - Zero-Hero-artiger Pentest-Kurs von [DarkRelay Security Labs](https://www.darkrelay.com)

## Online-Hacking-Demonstrationsseiten

   * http://testasp.vulnweb.com/ - Acunetix ASP-Test- und Demonstrationsseite
   * http://testaspnet.vulnweb.com/ - Acunetix ASP.Net-Test- und Demonstrationsseite
   * http://testphp.vulnweb.com/ - Acunetix PHP-Test- und Demonstrationsseite
   * http://crackme.cenzic.com/kelev/view/home.php - Crack Me Bank
   * http://zero.webappsecurity.com/ - Zero Bank
   * http://demo.testfire.net/ - Altoro Mutual
   * https://public-firing-range.appspot.com/ - Firing Range ist ein Testbett für automatisierte Web-Anwendungs-Sicherheitsscanner.
   * https://xss-game.appspot.com/ - XSS-Herausforderung
   * https://google-gruyere.appspot.com/ Google Gruyere, Web-Anwendungs-Exploits und -Verteidigung
   * https://ginandjuice.shop/catalog
   * https://pentest-ground.com/ Pentest-Ground ist ein kostenloser Spielplatz mit absichtlich verwundbaren Web-Anwendungen und Netzwerkdiensten.
  * [HackSimulator](https://chatgpt.com/g/g-jnT7HlNeK-hacksimulator) ist ein GPT, erstellt von [MarkCyber](https://github.com/MarkCyber), in dem ChatGPT 4 als Hacking-CTF agiert. Dieses GPT fragt nach deinem Erfahrungslevel und was du verbessern möchtest, bevor es eine Maschine/Anwendung simuliert, die du hacken sollst, wobei das Chatfenster als Ort zum Eingeben von Terminalbefehlen dient. Da dies über KI läuft, ändert und passt es sich an dein Erfahrungslevel an, und du kannst um Hilfe fragen, wenn du feststeckst.

## Labs
   * https://portswigger.net/web-security - Web Security Academy: Kostenlose Online-Schulung von PortSwigger
   * http://www.cis.syr.edu/~wedu/seed/all_labs.html - Entwicklung von Lehrlaboren für Computersicherheitsausbildung
   * https://www.vulnhub.com/ - Virtuelle Maschinen für Penetrationstests auf localhost.
   * https://pentesterlab.com/ - PentesterLab ist ein einfacher und großartiger Weg, um Penetrationstests zu lernen.
   * https://codereviewlab.com/ - Code Review Lab ist eine praxisnahe Code-Review-Schulungsplattform.
   * https://github.com/jerryhoff/WebGoat.NET - Diese Web-Anwendung ist eine Lernplattform über häufige Web-Sicherheitsfehler.
   * http://www.dvwa.co.uk/ - Damn Vulnerable Web Application (DVWA)
   * http://sourceforge.net/projects/lampsecurity/ - LAMPSecurity Training
   * https://github.com/Audi-1/sqli-labs - SQLI-Labs zum Testen von error based, Blind boolean based, Time based.
   * https://github.com/paralax/lfi-labs - kleine Sammlung von PHP-Skripten, um LFI-, RFI- und CMD-Injection-Schwachstellen auszunutzen
   * https://hack.me/ - Erstelle, hoste und teile verwundbare Web-Apps in einer Sandbox-Umgebung kostenlos
   * http://azcwr.org/az-cyber-warfare-ranges - Kostenlose Live-Fire Capture the Flag, Blue Team, Red Team Cyber Warfare Range für Anfänger bis Fortgeschrittene. Muss ein Handy nutzen, um eine SMS zur Zugriffsanfrage an den Range zu senden.
   * https://github.com/adamdoupe/WackoPicko - WackoPicko ist eine verwundbare Web-Anwendung, die zum Testen von Web-Anwendungs-Schwachstellenscannern verwendet wird.
   * https://github.com/rapid7/hackazon - Hackazon ist eine kostenlose, verwundbare Testseite, die ein Online-Shop ist, gebaut mit den gleichen Technologien wie heutige Rich-Client- und Mobile-Anwendungen.
   * https://github.com/RhinoSecurityLabs/cloudgoat - Rhino Security Labs' "Vulnerable by Design"-AWS-Infrastruktur-Setup-Tool
   * https://www.hackthebox.eu/ - Hack The Box ist eine Online-Plattform, die es dir ermöglicht, deine Fähigkeiten in der Cybersicherheit zu testen und zu verbessern.
   * https://github.com/tegal1337/0l4bs - 0l4bs ist ein Cross-site-Scripting-Lab für Web-Anwendungs-Sicherheitsenthusiasten.
   * https://github.com/oliverwiegers/pentest_lab - Lokales Pentest-Lab mit docker compose.
   * https://ginandjuice.shop/catalog
   * https://github.com/dolevf/Damn-Vulnerable-GraphQL-Application
   * https://labex.io/skilltrees/cybersecurity - LabEx ist eine Online-Plattform zur Verbesserung deiner Cybersecurity-Fähigkeiten durch praxisnahe Labs.
   * https://pythoncyber.go.ro - CyberPython hilft dir, eigene Forschung zu betreiben, um Herausforderungen zu lösen, CVEs auszunutzen und gute Skripte zu schreiben.
   * https://github.com/kOaDT/oss-oopssec-store - OSS – OopsSec Store: Eine absichtlich verwundbare E-Commerce-Anwendung, gebaut mit Next.js und React für Web-Sicherheitstraining und CTF-Praxis.
   * https://github.com/momenbasel/htb-writeups - HTB Writeups: Die umfassendste Hack-The-Box-Writeup-Sammlung mit über 500 Maschinen, 400+ Challenges, ProLabs, Sherlocks, CTF-Events und Spickzetteln.

## SSL

   * https://www.ssllabs.com/ssltest/index.html - Dieser Dienst führt eine tiefgehende Analyse der Konfiguration eines beliebigen SSL-Webservers im öffentlichen Internet durch.
   * https://certobserver.com/ct-search - Durchsuche Certificate Transparency-Logs nach für eine Domain ausgestellten SSL/TLS-Zertifikaten.
   * https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html - Strong SSL Security on nginx
   * https://weakdh.org/ - Weak Diffie-Hellman and the Logjam Attack
   * https://letsencrypt.org/ - Let’s Encrypt ist eine neue Zertifizierungsstelle: Sie ist kostenlos, automatisiert und offen.
   * https://filippo.io/Heartbleed/ - Ein Prüfer (Site und Tool) für CVE-2014-0160 (Heartbleed).
   * https://testssl.sh/ - Ein Kommandozeilenwerkzeug, das die TLS/SSL-Ciphers, -Protokolle und kryptografischen Fehler einer Website prüft.
   * [Scorifya](https://www.scorifya.com) - 0–100 Sicherheits-Score für jede Website, abdeckend TLS, Sicherheitsheader (CSP, HSTS, X-Frame-Options), Cookies, DNS und E-Mail-Signale (SPF, DKIM, DMARC) mit rangsortierten Reparaturschritten.
   * [ImmuniWeb SSL Security Test](https://www.immuniweb.com/ssl/) - ein kostenloses Online-Tool, das die Sicherheit der SSL/TLS-Konfiguration einer Website oder eines E-Mail-Servers prüft. Prüft die Einhaltung von Sicherheitsstandards wie NIST, HIPAA, PCI DSS und GDPR. 10 kostenlose Tests pro Monat (ohne Konto)

## Sicherheit Ruby on Rails

   * http://brakemanscanner.org/ - Ein statischer Analyse-Sicherheitsschwachstellenscanner für Ruby-on-Rails-Anwendungen.
   * https://github.com/rubysec/ruby-advisory-db - Eine Datenbank von verwundbaren Ruby Gems
   * https://github.com/rubysec/bundler-audit - Patch-Level-Verifizierung für Bundler
   * https://github.com/hakirisec/hakiri_toolbelt - Hakiri Toolbelt ist eine Befehlszeilenschnittstelle für die Hakiri-Plattform.
   * https://hakiri.io/facets - Scanne Gemfile.lock auf Schwachstellen.
   * http://rails-sqli.org/ - Diese Seite listet viele Query-Methoden und -Optionen in ActiveRecord auf, die rohe SQL-Argumente nicht bereinigen und nicht dazu gedacht sind, mit unsicheren Benutzereingaben aufgerufen zu werden.
   * https://github.com/0xsauby/yasuo - Ein Ruby-Skript, das nach verwundbaren & ausnutzbaren Drittanbieter-Web-Anwendungen in einem Netzwerk scannt
