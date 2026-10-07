# awesome-web-hacking
Cette liste s'adresse à quiconque souhaite se former à la sécurité des applications web mais ne dispose pas d'un point de départ.

Vous pouvez aider en envoyant des Pull Requests pour ajouter des informations.

Si vous n'êtes pas enclin à faire des PR, vous pouvez me tweeter à `@infoslack`

Table des matières
=================

   * [Livres](#books)
   * [Documentation](#documentation)
   * [Outils](#tools)
   * [Aides-mémoire](#cheat-sheets)
   * [Docker](#docker-images-for-penetration-testing)
   * [Vulnérabilités](#vulnerabilities)
   * [Cours](#courses)
   * [Sites de démonstration de hacking en ligne](#online-hacking-demonstration-sites)
   * [Laboratoires](#labs)
   * [SSL](#ssl)
   * [Sécurité Ruby on Rails](#security-ruby-on-rails)

## Livres

   * http://www.amazon.com/The-Web-Application-Hackers-Handbook/dp/8126533404/ Le manuel du hacker des applications web : trouver et exploiter les failles de sécurité
   * http://www.amazon.com/Hacking-Web-Apps-Preventing-Application/dp/159749951X/ Hacking Web Apps : détecter et prévenir les problèmes de sécurité des applications web
   * http://www.amazon.com/Hacking-Exposed-Web-Applications-Third/dp/0071740643/ Hacking Exposed Web Applications
   * http://www.amazon.com/SQL-Injection-Attacks-Defense-Second/dp/1597499633/ Les attaques par injection SQL et leur défense
   * http://www.amazon.com/Tangled-Web-Securing-Modern-Applications/dp/1593273886/ The Tangled WEB : un guide pour sécuriser les applications web modernes
   * http://www.amazon.com/Web-Application-Obfuscation-Evasion-Filters/dp/1597496049/ Web Application Obfuscation : '-/WAFs..Evasion..Filters//alert(/Obfuscation/)-'
   * http://www.amazon.com/XSS-Attacks-Scripting-Exploits-Defense/dp/1597491543/ Les attaques XSS : exploits de script intersite et défense
   * http://www.amazon.com/Browser-Hackers-Handbook-Wade-Alcorn/dp/1118662091/ Le manuel du hacker de navigateur
   * http://www.amazon.com/Basics-Web-Hacking-Techniques-Attack/dp/0124166008/ Les bases du hacking web : outils et techniques pour attaquer le web
   * http://www.amazon.com/Web-Penetration-Testing-Kali-Linux/dp/1782163166/ Tests d'intrusion web avec Kali Linux
   * http://www.amazon.com/Web-Application-Security-Beginners-Guide/dp/0071776168/ La sécurité des applications web, un guide pour débutants
   * https://www.amazon.com/Hacking-Art-Exploitation-Jon-Erickson/dp/1593271441/ Hacking : l'art de l'exploitation
   * https://www.crypto101.io/ - Crypto 101 est un cours d'introduction à la cryptographie
   * http://www.offensive-security.com/metasploit-unleashed/ - Metasploit Unleashed
   * http://www.cl.cam.ac.uk/~rja14/book.html - Security Engineering
   * https://www.feistyduck.com/library/openssl-cookbook/ - OpenSSL Cookbook
   * https://www.manning.com/books/real-world-cryptography - Apprendre et appliquer les techniques cryptographiques.
   * https://www.manning.com/books/making-sense-of-cyber-security - Un guide des concepts clés, de la terminologie et des technologies de la cybersécurité, parfait pour quiconque planifie ou met en œuvre une stratégie de sécurité.
   * https://www.manning.com/books/cyber-security-career-guide - Lancez une carrière en cybersécurité en apprenant à adapter vos compétences techniques et non techniques existantes.
   * https://www.manning.com/books/secret-key-cryptography - Un livre sur les techniques cryptographiques et les méthodes à clé secrète.
   * https://www.manning.com/books/application-security-program-handbook - Ce livre pratique est un guide complet pour mettre en place un programme de sécurité des applications robuste.
   * https://www.manning.com/books/cyber-threat-hunting - Guide pratique de la chasse aux menaces cybernétiques.
   * https://nostarch.com/bug-bounty-bootcamp - Bug Bounty Bootcamp
   * https://nostarch.com/hacking-apis - Hacking APIs
   * https://www.manning.com/books/grokking-web-application-security - Un livre sur la construction d'applications web prêtes à faire face à n'importe quelle attaque et résilientes à celle-ci.

## Documentation

   * https://www.owasp.org/ - Open Web Application Security Project
   * http://www.pentest-standard.org/ - Penetration Testing Execution Standard
   * http://www.binary-auditing.com/ - L'audit binaire du Dr Thorsten Schneider
   * https://appsecwiki.com/ - Application Security Wiki est une initiative visant à fournir toutes les ressources liées à la sécurité des applications aux chercheurs en sécurité et aux développeurs en un seul endroit.
   * [AppSec Santa](https://appsecsanta.com) - Comparaison indépendante de plus de 129 outils de sécurité des applications web couvrant SAST, DAST, SCA, et plus encore.

## Outils
   * https://github.com/bad-antics/nullsec-linux - NullSec Linux - Distribution de sécurité avec outils de test d'applications web préconfigurés
   * https://github.com/bad-antics/nullsec-webfuzz - NullSec WebFuzz - Framework de fuzzing d'applications web
   * https://github.com/poszothebuilder/nextjs-security-headers-starter - Starter d'en-têtes de sécurité Next.js sans dépendance, avec CSP, HSTS et un vérificateur de production pour CI.

   * https://www.deepinfo.com/ - La plateforme de surface d'attaque Deepinfo découvre tous vos actifs numériques, les surveille 24h/24, détecte tout problème et vous notifie rapidement afin que vous puissiez agir immédiatement.
     * https://github.com/bountyyfi/lonkero - Scanner de vulnérabilités web de niveau entreprise avec plus de 60 modules d'attaque, écrit en Rust pour les tests d'intrusion et les évaluations de sécurité.
   * https://spyse.com/ - Moteur de recherche OSINT qui fournit des données récentes sur l'ensemble du web, stockant toutes les données dans sa propre base, interconnectant les données trouvées et proposant quelques fonctionnalités utiles.
   * http://www.metasploit.com/ - Le logiciel de test d'intrusion le plus utilisé au monde
   * https://findsubdomains.com - Service de numérisation de sous-domaines en ligne avec beaucoup de données supplémentaires. Fonctionne en utilisant l'OSINT.
   * https://cc.la - Boîte à outils en ligne gratuite pour WHOIS, RDAP, DNS, IP WHOIS, recherche de certificats SSL, historique des serveurs de noms, diagnostics réseau (ping/traceroute/MTR) et surveillance de domaines. Aucune inscription requise.
   * https://vacato.io - Liste de surveillance RDAP gratuite : vérifications planifiées + Telegram/e-mail/Slack lorsque le statut semble disponible. N'est ni un registraire ni un attrapeur de domaines. Niveau gratuit : 10 domaines.
   * https://github.com/BlessedRebuS/Krawl - Serveur de tromperie web cloud-natif et anti-crawler.
   * https://github.com/bjeborn/basic-auth-pot Pot de miel pour l'authentification HTTP Basic.
   * http://www.arachni-scanner.com/ - Framework de scan de sécurité des applications web
   * https://github.com/ASCIT31/Dark-Moon - Darkmoon est une plateforme de test d'intrusion AI autonome open source (GPL-3.0) qui orchestre plus de 80 outils via MCP avec des sous-agents offensifs dédiés par technologie (GraphQL, Spring Boot, ASP.NET, Node.js, Flask, PHP, Ruby) et conserve une piste de preuves par découverte.
   * https://github.com/BugTraceAI/BugTraceAI - BugTraceAI est une plateforme multi-agents open source pour les tests de sécurité d'applications web autorisés, avec validation, capture de preuves et rapports.
   * https://github.com/TayfurYldz/headerproof - HeaderProof est un scanner actif de niveau développeur-alpha, à faible bruit, pour les tests autorisés de pistes de sécurité web pilotées par les en-têtes, telles que la mauvaise configuration CORS, le fractionnement de réponse, les candidats à l'empoisonnement de cache et les chemins de réflexion, avec des portes de preuves explicites et une suppression des faux positifs.
   * https://github.com/ANVEAI/anve-offsec - Ingénieur de sécurité AI autonome et plateforme de bug bounty sous Kali Linux, avec raisonnement Hermes avec état, sidecar de navigateur OpenClaw Chromium et RAG de stratégie vectorielle Qdrant. 🇮🇳
   * https://github.com/sullo/nikto - Scanner de serveurs web Nikto
   * http://www.tenable.com/products/nessus-vulnerability-scanner - Scanner de vulnérabilités Nessus
   * http://www.portswigger.net/burp/intruder.html - Burp Intruder est un outil pour automatiser des attaques personnalisées contre les applications web.
   * http://www.openvas.org/ - Le scanner et gestionnaire de vulnérabilités open source le plus avancé au monde.
   * https://github.com/iSECPartners/Scout2 - Outil d'audit de sécurité pour les environnements AWS
   * https://www.owasp.org/index.php/Category:OWASP_DirBuster_Project - Application Java multithread conçue pour bruteforcer les noms de répertoires et de fichiers sur les serveurs web/applications.
   * https://www.owasp.org/index.php/ZAP - Le Zed Attack Proxy est un outil de test d'intrusion intégré et facile à utiliser pour trouver des vulnérabilités dans les applications web.
   * https://github.com/vigolium/vigolium - Scanner de vulnérabilités web et API haute fidélité fusionnant une IA agentique avec un moteur natif rapide ; plus de 250 modules de détection couvrant l'OWASP Top 10, les tests authentifiés IDOR/BOLA et hors bande, et les entrées OpenAPI/Postman/Burp/cURL. Open source, AGPL-3.0.
   * https://github.com/tecknicaltom/dsniff - dsniff est un ensemble d'outils pour l'audit réseau et les tests d'intrusion.
   * https://github.com/WangYihang/Webshell-Sniper - Gérez votre webshell via le terminal.
   * https://github.com/DanMcInerney/dnsspoof - Spoofer DNS. Supprime les réponses DNS du routeur et les remplace par la réponse DNS falsifiée
   * https://github.com/trustedsec/social-engineer-toolkit - Le dépôt du Social-Engineer Toolkit (SET) de TrustedSec
   * https://github.com/sqlmapproject/sqlmap - Outil automatique d'injection SQL et de prise de contrôle de base de données
   * https://github.com/beefproject/beef - The Browser Exploitation Framework Project
   * http://w3af.org/ - w3af est un framework d'attaque et d'audit des applications web
   * https://github.com/espreto/wpsploit - WPSploit, exploiter WordPress avec Metasploit
   * https://vulert.com/ - Vulert sécurise les logiciels en détectant les vulnérabilités dans les dépendances open source — sans accéder à votre code. Prend en charge Js, PHP, Java, Python, et plus.
   * https://github.com/WangYihang/Reverse-Shell-Manager - Gestionnaire de shell inverse via terminal.
   * https://github.com/RUB-NDS/WS-Attacker - WS-Attacker est un framework modulaire pour les tests d'intrusion de services web
   * https://github.com/wpscanteam/wpscan - WPScan est un scanner de vulnérabilités WordPress en boîte noire
   * https://github.com/own2pwn-fr/wp2shell-detect - Détecteur boîte noire et non intrusif de la chaîne RCE pré-auth wp2shell dans le cœur WordPress (CVE-2026-63030 / CVE-2026-60137) ; empreinte la version du cœur à partir de sources publiques et signale les installations vulnérables sans les exploiter
   * http://sourceforge.net/projects/paros/ Paros proxy
   * https://www.owasp.org/index.php/Category:OWASP_WebScarab_Project Web Scarab proxy
   * https://code.google.com/p/skipfish/ Skipfish, un outil de reconnaissance de sécurité d'applications web actif
   * http://www.acunetix.com/vulnerability-scanner/ Acunetix Web Vulnerability Scanner
   * https://cystack.net/ CyStack Web Security Platform
   * http://www-03.ibm.com/software/products/en/appscan IBM Security AppScan
   * https://www.netsparker.com/web-vulnerability-scanner/ Netsparker web vulnerability scanner
   * http://www8.hp.com/us/en/software-solutions/webinspect-dynamic-analysis-dast/index.html HP Web Inspect
   * https://github.com/sensepost/wikto Wikto - Nikto pour Windows avec quelques fonctionnalités supplémentaires
   * http://samurai.inguardians.com Samurai Web Testing Framework
   * https://code.google.com/p/ratproxy/ Ratproxy
   * http://www.websecurify.com Websecurify
   * http://sourceforge.net/projects/grendel/ Grendel-scan
   * https://tools.kali.org/web-applications/gobuster Outil de bruteforce de répertoires/fichiers et DNS écrit en Go
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
   * https://github.com/rastating/wordpress-exploit-framework Un framework Ruby pour développer et utiliser des modules qui aident au test d'intrusion de sites et systèmes propulsés par WordPress.
   * http://www.xss-payloads.com/ XSS Payloads pour exploiter les vulnérabilités XSS, construire des payloads personnalisés, pratiquer les compétences de test d'intrusion.
   * https://github.com/joaomatosf/jexboss Outil de vérification et d'exploitation JBoss (et autres vulnérabilités de désérialisation Java)
   * https://github.com/commixproject/commix Outil automatisé tout-en-un d'injection et d'exploitation de commandes OS
   * https://github.com/pathetiq/BurpSmartBuster Un plugin de découverte de contenu Burp Suite qui ajoute l'intelligence au Buster !
   * https://github.com/GoSecure/csp-auditor Plugin Burp et ZAP pour analyser les en-têtes CSP
   * https://github.com/ffleming/timing_attack Réaliser des attaques par temporisation contre les applications web
   * https://github.com/lalithr95/fuzzapi Fuzzapi est un outil utilisé pour le pentest d'API REST
   * https://github.com/owtf/owtf Offensive Web Testing Framework (OWTF)
   * https://github.com/nccgroup/wssip Application pour capturer, modifier et envoyer des données WebSocket personnalisées du client au serveur et vice versa.
   * https://github.com/PalindromeLabs/STEWS Suite d'outils pour la découverte, l'empreinte et la détection de vulnérabilités WebSocket
   * https://github.com/tijme/angularjs-csti-scanner Détection automatisée d'injection de template côté client (évasion/contournement de sandbox) pour AngularJS (ACSTIS).
   * https://reshift.softwaresecured.com Un outil d'analyse de code source pour détecter et gérer les vulnérabilités de sécurité Java.
   * https://encoding.tools Application web pour transformer des données binaires et des chaînes, y compris des hachages et divers encodages. Version hors ligne GPLv3 disponible.
   * https://gchq.github.io/CyberChef/ Un « couteau suisse cyber » pour effectuer divers encodages et transformations de données binaires et de chaînes.
   * https://github.com/urbanadventurer/WhatWeb WhatWeb - Next generation web scanner
   * https://www.shodan.io/ Shodan - Le moteur de recherche pour trouver les serveurs vulnérables
   * https://github.com/WangYihang/Webshell-Sniper Un gestionnaire de webshell via terminal
   * https://github.com/nil0x42/phpsploit PhpSploit - Framework C2 complet qui persiste silencieusement sur le serveur web via un one-liner PHP malveillant
   * https://webhint.io/ - webhint - webhint est un outil de linting personnalisable qui vous aide à améliorer l'accessibilité, la vitesse, la compatibilité multi-navigateurs de votre site, et plus encore, en vérifiant votre code pour les meilleures pratiques et les erreurs courantes.
   * https://gtfobins.github.io/ - gtfobins - GTFOBins est une liste sélectionnée de binaires Unix qui peuvent être utilisés pour contourner les restrictions de sécurité locales dans les systèmes mal configurés.
   * https://github.com/HightechSec/git-scanner git-scanner - Un outil pour la chasse aux bugs ou le pentest ciblant les sites web qui ont des dépôts `.git` ouverts disponibles publiquement
   * [Web Application Exploitation @ Rawsec Inventory](https://inventory.raw.pm/tools.html#title-tools-web-application-exploitation) - Liste complète des outils de pentest web
   * [Cyclops est un navigateur novateur capable de détecter automatiquement les vulnérabilités](https://github.com/v8blink/Chromium-based-XSS-Taint-Tracking/) - Cyclops est un navigateur web avec fonctionnalité de détection XSS
   * https://caido.io/ - Web proxy
   * https://github.com/assetnote/kiterunner - Découverte d'API
   * https://github.com/owasp-amass/amass - Reconnaissance de domaine
   * [https://columbus.elmasy.com/](https://columbus.elmasy.com/) - Le projet Columbus est un service avancé de découverte de sous-domaines avec une API rapide, puissante et facile à utiliser.
   * [Script BadUSB pour exfiltrer des mots de passe](https://github.com/MarkCyber/BadUSB/blob/main/HackStuff/CredentialHarvester.txt) - Extrait tous les mots de passe enregistrés de Chrome, Firefox et Edge pour les enregistrer sur une clé USB secondaire pour analyse ultérieure.
   * https://github.com/flibustier/jwt-online-cracker - Force brute un jeton JWT HS256, HS384 ou HS512 depuis votre navigateur (entièrement côté client).
   * [jwt-auditor](https://github.com/mohelobeid/jwt-auditor) - CLI hors ligne pour décoder et auditer les JWT pour alg:none, secrets HMAC faibles et confusion RS256 vers HS256.
   * https://github.com/lukechilds/reverse-shell - Shell reverse facile à mémoriser qui devrait fonctionner sur la plupart des systèmes de type Unix.
   * https://github.com/momenbasel/keyFinder - Extension Chrome qui analyse passivement les pages web à la recherche de clés API, jetons et secrets divulgués en utilisant plus de 80 motifs de détection et l'entropie de Shannon sur 10 surfaces d'attaque.
   * https://github.com/DenisPodgurskii/pentestkit - Scanner de vulnérabilités basé sur le navigateur pour les flux de travail bug bounty et pentest, combinant les capacités DAST, SAST, IAST et SCA pour détecter les problèmes de sécurité liés à l'exécution, au code source, interactifs et aux dépendances.
- [SaaSFort](https://saasfort.com/scan) - Analyse externe NIS2 / de posture de sécurité gratuite de 60 secondes, note A-F, sans inscription.
- [ARS3NAL](https://github.com/inflictx/Arsenal) - Arsenal hors ligne d'abord, recherchable : ~1500 payloads, générateur de commandes, GTFOBins, wordlists, CyberChef intégré, shells reverse et 70 checklists.
- [Mozilla - HTTP Observatory](https://developer.mozilla.org/en-US/observatory) - Développé par Mozilla, l'HTTP Observatory effectue une évaluation approfondie des en-têtes HTTP d'un site et d'autres configurations de sécurité clés.
- [HTTP Security Report](https://httpsecurityreport.com/) - Obtenez instantanément un rapport de la conformité de votre site aux meilleures pratiques.
- [ImmuniWeb CyberScore](https://www.immuniweb.com/cyberscore/) - notation gratuite de cybersécurité, de confidentialité et de sécurité IA de votre entreprise, partenaires ou fournisseurs
- [ImmuniWeb - Website Security Test](https://www.immuniweb.com/websec/) - Vérifie les vulnérabilités de sécurité web, la protection des bots IA, les en-têtes de sécurité et de confidentialité HTTP, la configuration DNSSEC, CSP, et la conformité au RGPD et PCI DSS. 10 tests gratuits par mois (sans compte)
- [Pentest Tools - Website Vulnerability Scanner](https://pentest-tools.com/website-vulnerability-scanning/website-scanner) - détecte SQLi, XSS, injection de commande, XXE, et plus de 75 autres vulnérabilités d'applications web
- [Pentest Tools - Network Vulnerability Scanner](https://pentest-tools.com/network-vulnerability-scanning/network-security-scanner-online) - un outil de sécurité en ligne conçu pour identifier les vulnérabilités, les mauvaises configurations, les services obsolètes et les ports exposés dans l'infrastructure réseau
- [UpClaw](https://github.com/okdkebm/UpClaw) - CLI de pentest web pilotée par IA ; un seul fichier Python sans dépendance (29 vérifications intégrées + 16 adaptateurs d'outils externes + rapports de preuves).
- [HTTP Detection Agent](https://github.com/ai-blueteam/http-detection-agent) - détecteur d'attaques HTTP open source, local-first : CLI Rust avec 76 détections sur 62 familles de comportements (injection, traversée, request smuggling, SSRF, XXE, désérialisation, et plus), ainsi qu'un serveur MCP local pour un triage piloté par agents

## Aides-mémoire

   * http://n0p.net/penguicon/php_app_sec/mirror/xss.html - Aide-mémoire XSS
   * https://highon.coffee/blog/lfi-cheat-sheet/ - Aide-mémoire LFI
   * https://highon.coffee/blog/reverse-shell-cheat-sheet/ - Aide-mémoire Reverse Shell
   * https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/ - Aide-mémoire Injection SQL
   * https://www.gracefulsecurity.com/path-traversal-cheat-sheet-windows/ - Aide-mémoire Path Traversal : Windows
   * [Pentest Mindmap](https://pentestmindmap.com/en) - Carte mentale interactive avec plus de 11 600 commandes de pentest sur 32 catégories. Recherchable avec copie en un clic.

## Images Docker pour les tests d'intrusion

   * `docker pull kalilinux/kali-linux-docker` [Kali Linux officiel](https://hub.docker.com/r/kalilinux/kali-linux-docker/)
   * `docker pull blackarchlinux/blackarch` [BlackArch Linux officiel](https://hub.docker.com/r/blackarchlinux/blackarch)
   * `docker pull owasp/zap2docker-stable` - [OWASP ZAP officiel](https://github.com/zaproxy/zaproxy)
   * `docker pull wpscanteam/wpscan` - [WPScan officiel](https://hub.docker.com/r/wpscanteam/wpscan/)
   * `docker pull metasploitframework/metasploit-framework` - [docker-metasploit](https://hub.docker.com/r/metasploitframework/metasploit-framework/)
   * `docker pull citizenstig/dvwa` - [Damn Vulnerable Web Application (DVWA)](https://hub.docker.com/r/citizenstig/dvwa/)
   * `docker pull bkimminich/juice-shop` [OWASP Juice Shop](https://hub.docker.com/r/bkimminich/juice-shop)
   * `docker pull wpscanteam/vulnerablewordpress` - [Installation WordPress vulnérable](https://hub.docker.com/r/wpscanteam/vulnerablewordpress/)
   * `docker pull hmlio/vaas-cve-2014-6271` - [Vulnérabilité en tant que service : Shellshock](https://hub.docker.com/r/hmlio/vaas-cve-2014-6271/)
   * `docker pull hmlio/vaas-cve-2014-0160` - [Vulnérabilité en tant que service : Heartbleed](https://hub.docker.com/r/hmlio/vaas-cve-2014-0160/)
   * `docker pull opendns/security-ninjas` - [Security Ninjas](https://hub.docker.com/r/opendns/security-ninjas/)
   * `docker pull noncetonic/archlinux-pentest-lxde:1.0` - [Testeur de pénétration Arch Linux](https://hub.docker.com/r/noncetonic/archlinux-pentest-lxde/)
   * `docker pull diogomonica/docker-bench-security` - [Docker Bench for Security](https://hub.docker.com/r/diogomonica/docker-bench-security/)
   * `docker pull ismisepaul/securityshepherd` - [OWASP Security Shepherd](https://hub.docker.com/r/ismisepaul/securityshepherd/)
   * `docker pull danmx/docker-owasp-webgoat` - [Image Docker du projet OWASP WebGoat](https://hub.docker.com/r/webgoat/goatandwolf)
   *  `docker pull docker pull jeroenwillemsen/wrongsecrets` - [Image Docker du projet OWASP WrongSecrets](https://hub.docker.com/r/jeroenwillemsen/wrongsecrets)
   * `docker pull citizenstig/nowasp` - [OWASP Mutillidae II Web Pen-Test Practice Application](https://hub.docker.com/r/citizenstig/nowasp/)
   * `docker pull aaaguirre/pentest` - [Docker pour pentest](https://github.com/aaaguirrep/pentest)
   * `docker pull rustscan/rustscan:2.0.0` - [The Modern Port Scanner](https://github.com/RustScan/RustScan)

## Vulnérabilités

   * http://cve.mitre.org/ - Common Vulnerabilities and Exposures. La norme pour les noms de vulnérabilités en sécurité de l'information
   * https://www.exploit-db.com/ - The Exploit Database – archive ultime des exploits, shellcodes et papiers de sécurité.
   * http://0day.today/ - Inj3ct0r est la base de données ultime des exploits et vulnérabilités et une excellente ressource pour les chercheurs en vulnérabilités et les professionnels de la sécurité.
   * http://www.securityfocus.com/ - Depuis sa création en 1999, SecurityFocus a été un pilier de la communauté de la sécurité.
   * http://packetstormsecurity.com/ - Ressource de sécurité mondiale
   * https://wpvulndb.com/ - WPScan Vulnerability Database
   * https://snyk.io/vuln/ - Vulnerability DB, informations détaillées et conseils de remédiation pour les vulnérabilités connues.
   * https://stellastra.com/cipher-suite - Base de données de centaines de suites de chiffrement TLS et de leur état de sécurité.
   * https://vulert.com/vuln-db - Vulert aide les développeurs à sécuriser leurs logiciels en surveillant et en les alertant sur les vulnérabilités dans les dépendances open source — sans nécessiter l'accès à leur code. Prend en charge les dépendances Js, PHP, Java, Python, et bien d'autres.
   * https://vulncheck.com/xdb/ - Un index de code de preuve de concept d'exploits dans les dépôts Git.
   * https://labs.jamessawyer.co.uk/cves/ - CVE PoC Search fournit une recherche de preuve de concept de CVE à GitHub pour passer rapidement d'une vulnérabilité web à un code d'exploitation public.

## Cours

   * https://pwn.guide/ - Plateforme d'apprentissage de la cybersécurité, avec environ 100 tutoriels, dont environ 25 traitent du hacking web et de la défense de sites web.
   * https://www.offensive-security.com/information-security-training/advanced-web-attack-and-exploitation/ Offensive Security Advanced Web Attacks and Exploitation (en direct)
   * https://www.sans.org/course/web-app-penetration-testing-ethical-hacking Sans SEC542 : Web App Penetration Testing and Ethical Hacking
   * https://www.sans.org/course/advanced-web-app-penetration-testing-ethical-hacking Sans SEC642 : Advanced Web App Penetration Testing and Ethical Hacking
   * http://opensecuritytraining.info/ - Open Security Training
   * http://securitytrainings.net/security-trainings/ - Security Exploded Training
   * http://www.securitytube.net/ - Le plus grand portail d'infosec et de hacking au monde.
   * https://www.hacker101.com/ - Cours gratuit sur la sécurité web par [Hackerone](https://www.hackerone.com)
   * https://www.darkrelay.com/courses/professional-penetration-tester - Cours de pentest de style Zero-Hero par [DarkRelay Security Labs](https://www.darkrelay.com)

## Sites de démonstration de hacking en ligne

   * http://testasp.vulnweb.com/ - Site de test et de démonstration Acunetix ASP
   * http://testaspnet.vulnweb.com/ - Site de test et de démonstration Acunetix ASP.Net
   * http://testphp.vulnweb.com/ - Site de test et de démonstration Acunetix PHP
   * http://crackme.cenzic.com/kelev/view/home.php - Crack Me Bank
   * http://zero.webappsecurity.com/ - Zero Bank
   * http://demo.testfire.net/ - Altoro Mutual
   * https://public-firing-range.appspot.com/ - Firing Range est un banc d'essai pour les scanners de sécurité d'applications web automatisés.
   * https://xss-game.appspot.com/ - Défi XSS
   * https://google-gruyere.appspot.com/ Google Gruyere, exploits et défenses d'applications web
   * https://ginandjuice.shop/catalog
   * https://pentest-ground.com/ Pentest-Ground est un terrain de jeu gratuit avec des applications web et des services réseau délibérément vulnérables.
  * [HackSimulator](https://chatgpt.com/g/g-jnT7HlNeK-hacksimulator) est un GPT créé par [MarkCyber](https://github.com/MarkCyber) dans lequel chatGPT 4 agit comme un CTF de hacking. Ce GPT vous demandera votre niveau d'expérience et ce que vous souhaitez améliorer, avant de simuler une machine/application pour que vous puissiez l'pirater, en utilisant la boîte de dialogue comme endroit pour saisir des commandes de terminal. Comme cela passe par l'IA, cela change et s'adapte en fonction de votre niveau d'expérience et vous pouvez demander de l'aide si vous êtes bloqué.

## Laboratoires
   * https://portswigger.net/web-security - Web Security Academy : formation en ligne gratuite de PortSwigger
   * http://www.cis.syr.edu/~wedu/seed/all_labs.html - Développer des laboratoires pédagogiques pour l'éducation à la sécurité informatique
   * https://www.vulnhub.com/ - Machines virtuelles pour les tests d'intrusion en localhost.
   * https://pentesterlab.com/ - PentesterLab est un moyen facile et excellent d'apprendre le test d'intrusion.
   * https://codereviewlab.com/ - Code Review Lab est une plateforme de formation pratique à la revue de code.
   * https://github.com/jerryhoff/WebGoat.NET - Cette application web est une plateforme d'apprentissage sur les failles de sécurité web courantes.
   * http://www.dvwa.co.uk/ - Damn Vulnerable Web Application (DVWA)
   * http://sourceforge.net/projects/lampsecurity/ - LAMPSecurity Training
   * https://github.com/Audi-1/sqli-labs - Labs SQLI pour tester par erreur, booléen aveugle, basé sur le temps.
   * https://github.com/paralax/lfi-labs - petit ensemble de scripts PHP pour pratiquer l'exploitation des vulnérabilités LFI, RFI et d'injection de commandes
   * https://hack.me/ - Construisez, hébergez et partagez des applications web vulnérables dans un environnement sandbox gratuitement
   * http://azcwr.org/az-cyber-warfare-ranges - Capture the Flag en direct gratuite, équipe bleue, équipe rouge, terrain de guerre cyber pour débutants à utilisateurs avancés. Doit utiliser un téléphone portable pour envoyer un SMS demandant l'accès au terrain.
   * https://github.com/adamdoupe/WackoPicko - WackoPicko est une application web vulnérable utilisée pour tester les scanners de vulnérabilités d'applications web.
   * https://github.com/rapid7/hackazon - Hackazon est un site de test gratuit et vulnérable qui est une vitrine en ligne construite avec les mêmes technologies utilisées dans les applications riches et mobiles d'aujourd'hui.
   * https://github.com/RhinoSecurityLabs/cloudgoat - Outil de configuration d'infrastructure AWS « Vulnérable par conception » de Rhino Security Labs
   * https://www.hackthebox.eu/ - Hack The Box est une plateforme en ligne permettant de tester et d'améliorer vos compétences en cybersécurité.
   * https://github.com/tegal1337/0l4bs - 0l4bs est un laboratoire de script intersite pour les passionnés de sécurité des applications web.
   * https://github.com/oliverwiegers/pentest_lab - Laboratoire de pentest local utilisant docker compose.
   * https://ginandjuice.shop/catalog
   * https://github.com/dolevf/Damn-Vulnerable-GraphQL-Application
   * https://labex.io/skilltrees/cybersecurity - LabEx est une plateforme en ligne pour améliorer vos compétences en cybersécurité grâce à des laboratoires pratiques.
   * https://pythoncyber.go.ro - CyberPython vous aide à faire vos propres recherches pour résoudre des défis, exploiter des CVE et créer de bons scripts.
   * https://github.com/kOaDT/oss-oopssec-store - OSS – OopsSec Store : une application e-commerce intentionnellement vulnérable construite avec Next.js et React pour la formation à la sécurité web et la pratique CTF.
   * https://github.com/momenbasel/htb-writeups - HTB Writeups : la collection de writeups Hack The Box la plus complète avec plus de 500 machines, 400+ défis, ProLabs, Sherlocks, événements CTF et aides-mémoire.

## SSL

   * https://www.ssllabs.com/ssltest/index.html - Ce service effectue une analyse approfondie de la configuration de tout serveur web SSL sur l'Internet public.
   * https://certobserver.com/ct-search - Recherchez dans les journaux de transparence des certificats les certificats SSL/TLS émis pour un domaine.
   * https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html - Strong SSL Security on nginx
   * https://weakdh.org/ - Weak Diffie-Hellman and the Logjam Attack
   * https://letsencrypt.org/ - Let’s Encrypt est une nouvelle autorité de certification : elle est gratuite, automatisée et ouverte.
   * https://filippo.io/Heartbleed/ - Un vérificateur (site et outil) pour CVE-2014-0160 (Heartbleed).
   * https://testssl.sh/ - Un outil en ligne de commande qui vérifie les chiffrements, protocoles et failles cryptographiques TLS/SSL d'un site web.
   * [Scorifya](https://www.scorifya.com) - Score de sécurité de 0 à 100 pour n'importe quel site web couvrant TLS, en-têtes de sécurité (CSP, HSTS, X-Frame-Options), cookies, DNS et signaux e-mail (SPF, DKIM, DMARC) avec des étapes de correction classées.
   * [ImmuniWeb SSL Security Test](https://www.immuniweb.com/ssl/) - un outil en ligne gratuit qui vérifie la sécurité de la configuration SSL/TLS d'un site web ou d'un serveur e-mail. Vérifie la conformité aux normes de sécurité telles que NIST, HIPAA, PCI DSS et RGPD. 10 tests gratuits par mois (sans compte)

## Sécurité Ruby on Rails

   * http://brakemanscanner.org/ - Un scanner de vulnérabilités de sécurité par analyse statique pour les applications Ruby on Rails.
   * https://github.com/rubysec/ruby-advisory-db - Une base de données de gems Ruby vulnérables
   * https://github.com/rubysec/bundler-audit - Vérification au niveau des correctifs pour Bundler
   * https://github.com/hakirisec/hakiri_toolbelt - Hakiri Toolbelt est une interface en ligne de commande pour la plateforme Hakiri.
   * https://hakiri.io/facets - Analysez Gemfile.lock pour les vulnérabilités.
   * http://rails-sqli.org/ - Cette page répertorie de nombreuses méthodes et options de requête dans ActiveRecord qui ne nettoient pas les arguments SQL bruts et ne sont pas destinées à être appelées avec des entrées utilisateur non sécurisées.
   * https://github.com/0xsauby/yasuo - Un script Ruby qui scanne les applications web tierces vulnérables et exploitables sur un réseau
