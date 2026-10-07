# awesome-web-hacking
Esta lista é para quem deseja aprender sobre segurança de aplicações web, mas não tem um ponto de partida.

Você pode ajudar enviando Pull Requests para adicionar mais informações.

Se você não está inclinado a fazer PRs, pode me chamar no Twitter em `@infoslack`

Índice
=================

   * [Livros](#books)
   * [Documentação](#documentation)
   * [Ferramentas](#tools)
   * [Folhas de referência](#cheat-sheets)
   * [Docker](#docker-images-for-penetration-testing)
   * [Vulnerabilidades](#vulnerabilities)
   * [Cursos](#courses)
   * [Sites de demonstração de hacking online](#online-hacking-demonstration-sites)
   * [Labs](#labs)
   * [SSL](#ssl)
   * [Segurança Ruby on Rails](#security-ruby-on-rails)

## Livros

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
   * https://www.crypto101.io/ - Crypto 101 é um curso introdutório sobre criptografia
   * http://www.offensive-security.com/metasploit-unleashed/ - Metasploit Unleashed
   * http://www.cl.cam.ac.uk/~rja14/book.html - Security Engineering
   * https://www.feistyduck.com/library/openssl-cookbook/ - OpenSSL Cookbook
   * https://www.manning.com/books/real-world-cryptography - Aprenda e aplique técnicas criptográficas.
   * https://www.manning.com/books/making-sense-of-cyber-security - Um guia para os principais conceitos, terminologia e tecnologias de cibersegurança, perfeito para quem planeja ou implementa uma estratégia de segurança.
   * https://www.manning.com/books/cyber-security-career-guide - Inicie uma carreira em cibersegurança aprendendo a adaptar suas habilidades técnicas e não técnicas existentes.
   * https://www.manning.com/books/secret-key-cryptography - Um livro sobre técnicas criptográficas e métodos de chave secreta.
   * https://www.manning.com/books/application-security-program-handbook - Este livro prático é um guia completo para implementar um programa robusto de segurança de aplicações.
   * https://www.manning.com/books/cyber-threat-hunting - Guia prático para caça a ameaças cibernéticas.
   * https://nostarch.com/bug-bounty-bootcamp - Bug Bounty Bootcamp
   * https://nostarch.com/hacking-apis - Hacking APIs
   * https://www.manning.com/books/grokking-web-application-security - Um livro sobre como construir aplicações web preparadas e resilientes a qualquer ataque.

## Documentação

   * https://www.owasp.org/ - Open Web Application Security Project
   * http://www.pentest-standard.org/ - Penetration Testing Execution Standard
   * http://www.binary-auditing.com/ - Auditoria binária do Dr. Thorsten Schneider
   * https://appsecwiki.com/ - Application Security Wiki é uma iniciativa para fornecer todos os recursos relacionados à segurança de aplicações a pesquisadores de segurança e desenvolvedores em um só lugar.
   * [AppSec Santa](https://appsecsanta.com) - Comparação independente de mais de 129 ferramentas de segurança de aplicações web abrangendo SAST, DAST, SCA e mais.

## Ferramentas
   * https://github.com/bad-antics/nullsec-linux - NullSec Linux - Distribuição de segurança com ferramentas de teste de aplicações web pré-configuradas
   * https://github.com/bad-antics/nullsec-webfuzz - NullSec WebFuzz - Framework de fuzzing de aplicações web
   * https://github.com/poszothebuilder/nextjs-security-headers-starter - Iniciador de cabeçalhos de segurança Next.js sem dependências, com CSP, HSTS e um verificador de produção para CI.

   * https://www.deepinfo.com/ - A plataforma de superfície de ataque Deepinfo descobre todos os seus ativos digitais, monitora-os 24/7, detecta quaisquer problemas e notifica você rapidamente para que você possa agir imediatamente.
     * https://github.com/bountyyfi/lonkero - Scanner de vulnerabilidades web de nível empresarial com mais de 60 módulos de ataque, construído em Rust para testes de penetração e avaliações de segurança.
   * https://spyse.com/ - Motor de busca OSINT que fornece dados recentes sobre toda a web, armazenando todos os dados em seu próprio BD, interconectando dados encontrados e com alguns recursos legais.
   * http://www.metasploit.com/ - O software de teste de penetração mais usado do mundo
   * https://findsubdomains.com - Serviço de varredura de subdomínios online com muitos dados adicionais. funciona usando OSINT.
   * https://cc.la - Kit de ferramentas online gratuito para WHOIS, RDAP, DNS, IP WHOIS, busca de certificados SSL, histórico de servidores de nomes, diagnóstico de rede (ping/traceroute/MTR) e monitoramento de domínios. Sem cadastro.
   * https://vacato.io - Lista de observação RDAP gratuita: verificações agendadas + Telegram/e-mail/Slack quando o status parece disponível. Não é um registrador nem um drop-catcher. Nível gratuito: 10 domínios.
   * https://github.com/BlessedRebuS/Krawl - Servidor de decepção web nativo da nuvem e anti-crawler.
   * https://github.com/bjeborn/basic-auth-pot HoneyPot de autenticação HTTP Basic.
   * http://www.arachni-scanner.com/ - Web Application Security Scanner Framework
   * https://github.com/ASCIT31/Dark-Moon - Darkmoon é uma plataforma de teste de penetração AI autônoma de código aberto (GPL-3.0) que orquestra mais de 80 ferramentas sobre MCP com subagentes ofensivos dedicados por tecnologia (GraphQL, Spring Boot, ASP.NET, Node.js, Flask, PHP, Ruby) e mantém um rastro de evidências por descoberta.
   * https://github.com/BugTraceAI/BugTraceAI - BugTraceAI é uma plataforma multiagente de código aberto para testes autorizados de segurança de aplicações web, com validação, captura de evidências e relatórios.
   * https://github.com/TayfurYldz/headerproof - HeaderProof é um scanner ativo de alfa-para-desenvolvedores, de baixo ruído, para testes autorizados de pistas de segurança web dirigidas por cabeçalhos, como configuração incorreta de CORS, divisão de resposta, candidatos a envenenamento de cache e caminhos de reflexão, com portões de evidência explícitos e supressão de falsos positivos.
   * https://github.com/ANVEAI/anve-offsec - Engenheiro de segurança AI autônomo e plataforma de bug bounty no Kali Linux com raciocínio Hermes com estado, sidecar de navegador OpenClaw Chromium e RAG de estratégia vetorial Qdrant. 🇮🇳
   * https://github.com/sullo/nikto - Scanner de servidores web Nikto
   * http://www.tenable.com/products/nessus-vulnerability-scanner - Nessus Vulnerability Scanner
   * http://www.portswigger.net/burp/intruder.html - Burp Intruder é uma ferramenta para automatizar ataques personalizados contra aplicações web.
   * http://www.openvas.org/ - O scanner e gerenciador de vulnerabilidades de código aberto mais avançado do mundo.
   * https://github.com/iSECPartners/Scout2 - Ferramenta de auditoria de segurança para ambientes AWS
   * https://www.owasp.org/index.php/Category:OWASP_DirBuster_Project - É uma aplicação Java multithread projetada para força bruta de diretórios e nomes de arquivos em servidores web/aplicativos.
   * https://www.owasp.org/index.php/ZAP - O Zed Attack Proxy é uma ferramenta de teste de penetração integrada e fácil de usar para encontrar vulnerabilidades em aplicações web.
   * https://github.com/vigolium/vigolium - Scanner de vulnerabilidades web e API de alta fidelidade que funde IA agentica com um motor nativo rápido; mais de 250 módulos de detecção cobrindo OWASP Top 10, testes autenticados IDOR/BOLA e out-of-band, e entradas OpenAPI/Postman/Burp/cURL. Código aberto, AGPL-3.0.
   * https://github.com/tecknicaltom/dsniff - dsniff é uma coleção de ferramentas para auditoria de rede e testes de penetração.
   * https://github.com/WangYihang/Webshell-Sniper - Gerencie seu webshell via terminal.
   * https://github.com/DanMcInerney/dnsspoof - Spoofer DNS. Descarta respostas DNS do roteador e as substitui pela resposta DNS falsificada.
   * https://github.com/trustedsec/social-engineer-toolkit - O repositório do Social-Engineer Toolkit (SET) da TrustedSec
   * https://github.com/sqlmapproject/sqlmap - Ferramenta automática de injeção SQL e tomada de controle de banco de dados
   * https://github.com/beefproject/beef - The Browser Exploitation Framework Project
   * http://w3af.org/ - w3af é um Web Application Attack and Audit Framework
   * https://github.com/espreto/wpsploit - WPSploit, Exploiting Wordpress With Metasploit
   * https://vulert.com/ - Vulert protege o software detectando vulnerabilidades em dependências de código aberto — sem acessar seu código. Suporta Js, PHP, Java, Python e mais.
   * https://github.com/WangYihang/Reverse-Shell-Manager - Gerenciador de reverse shell via terminal.
   * https://github.com/RUB-NDS/WS-Attacker - WS-Attacker é um framework modular para testes de penetração de serviços web
   * https://github.com/wpscanteam/wpscan - WPScan é um scanner de vulnerabilidades WordPress em caixa preta
   * https://github.com/own2pwn-fr/wp2shell-detect - Detector caixa-preta, não invasivo, da cadeia RCE pré-auth wp2shell no WordPress core (CVE-2026-63030 / CVE-2026-60137); obtém a impressão digital da versão do core a partir de fontes públicas e sinaliza instalações vulneráveis sem explorá-las
   * http://sourceforge.net/projects/paros/ Paros proxy
   * https://www.owasp.org/index.php/Category:OWASP_WebScarab_Project Web Scarab proxy
   * https://code.google.com/p/skipfish/ Skipfish, uma ferramenta ativa de reconhecimento de segurança de aplicações web
   * http://www.acunetix.com/vulnerability-scanner/ Acunetix Web Vulnerability Scanner
   * https://cystack.net/ CyStack Web Security Platform
   * http://www-03.ibm.com/software/products/en/appscan IBM Security AppScan
   * https://www.netsparker.com/web-vulnerability-scanner/ Netsparker web vulnerability scanner
   * http://www8.hp.com/us/en/software-solutions/webinspect-dynamic-analysis-dast/index.html HP Web Inspect
   * https://github.com/sensepost/wikto Wikto - Nikto para Windows com alguns recursos extras
   * http://samurai.inguardians.com Samurai Web Testing Framework
   * https://code.google.com/p/ratproxy/ Ratproxy
   * http://www.websecurify.com Websecurify
   * http://sourceforge.net/projects/grendel/ Grendel-scan
   * https://tools.kali.org/web-applications/gobuster Ferramenta de brute force de diretórios/arquivos e DNS escrita em Go
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
   * https://github.com/rastating/wordpress-exploit-framework Um framework Ruby para desenvolver e usar módulos que auxiliam no teste de penetração de sites e sistemas WordPress.
   * http://www.xss-payloads.com/ XSS Payloads para aproveitar vulnerabilidades XSS, construir payloads personalizados, praticar habilidades de teste de penetração.
   * https://github.com/joaomatosf/jexboss Ferramenta de verificação e exploração JBoss (e outras vulnerabilidades de desserialização Java)
   * https://github.com/commixproject/commix Ferramenta automatizada tudo-em-um de injeção e exploração de comandos OS
   * https://github.com/pathetiq/BurpSmartBuster Um plugin de descoberta de conteúdo do Burp Suite que coloca a inteligência no Buster!
   * https://github.com/GoSecure/csp-auditor Plugin do Burp e ZAP para analisar cabeçalhos CSP
   * https://github.com/ffleming/timing_attack Realizar ataques de temporização contra aplicações web
   * https://github.com/lalithr95/fuzzapi Fuzzapi é uma ferramenta usada para pentest de API REST
   * https://github.com/owtf/owtf Offensive Web Testing Framework (OWTF)
   * https://github.com/nccgroup/wssip Aplicação para capturar, modificar e enviar dados WebSocket personalizados do cliente para o servidor e vice-versa.
   * https://github.com/PalindromeLabs/STEWS Conjunto de ferramentas para descoberta, fingerprinting e detecção de vulnerabilidades WebSocket
   * https://github.com/tijme/angularjs-csti-scanner Detecção automatizada de injeção de template do lado cliente (escape/bypass de sandbox) para AngularJS (ACSTIS).
   * https://reshift.softwaresecured.com Uma ferramenta de análise de código-fonte para detectar e gerenciar vulnerabilidades de segurança Java.
   * https://encoding.tools Aplicativo web para transformar dados binários e strings, incluindo hashes e várias codificações. Versão offline GPLv3 disponível.
   * https://gchq.github.io/CyberChef/ Uma "Cyber Swiss Army Knife" para realizar várias codificações e transformações de dados binários e strings.
   * https://github.com/urbanadventurer/WhatWeb WhatWeb - Next generation web scanner
   * https://www.shodan.io/ Shodan - O mecanismo de busca para encontrar servidores vulneráveis
   * https://github.com/WangYihang/Webshell-Sniper Um gerenciador de webshell via terminal
   * https://github.com/nil0x42/phpsploit PhpSploit - Framework C2 completo que persiste silenciosamente no servidor web via one-liner PHP malicioso
   * https://webhint.io/ - webhint - webhint é uma ferramenta de linting personalizável que ajuda a melhorar a acessibilidade, velocidade, compatibilidade entre navegadores do seu site e mais, verificando seu código em busca de melhores práticas e erros comuns.
   * https://gtfobins.github.io/ - gtfobins - GTFOBins é uma lista selecionada de binários Unix que podem ser usados para contornar restrições de segurança locais em sistemas mal configurados.
   * https://github.com/HightechSec/git-scanner git-scanner - Uma ferramenta para bug hunting ou pentest direcionada a sites que têm repositórios `.git` abertos disponíveis publicamente
   * [Web Application Exploitation @ Rawsec Inventory](https://inventory.raw.pm/tools.html#title-tools-web-application-exploitation) - Lista completa de ferramentas de pentest web
   * [Cyclops é um navegador inovador que pode detectar vulnerabilidades automaticamente](https://github.com/v8blink/Chromium-based-XSS-Taint-Tracking/) - Cyclops é um navegador web com recurso de detecção XSS
   * https://caido.io/ - Web proxy
   * https://github.com/assetnote/kiterunner - Descoberta de API
   * https://github.com/owasp-amass/amass - reconhecimento de domínio
   * [https://columbus.elmasy.com/](https://columbus.elmasy.com/) - O projeto Columbus é um serviço avançado de descoberta de subdomínios com uma API rápida, poderosa e fácil de usar.
   * [BadUSB Script To Exfiltrate Passwords](https://github.com/MarkCyber/BadUSB/blob/main/HackStuff/CredentialHarvester.txt) - Extrai todas as senhas salvas do Chrome, Firefox e Edge para serem salvas em um USB secundário para análise posterior.
   * https://github.com/flibustier/jwt-online-cracker - Força bruta um token JWT HS256, HS384 ou HS512 do seu navegador (totalmente client-side).
   * [jwt-auditor](https://github.com/mohelobeid/jwt-auditor) - CLI offline para decodificar e auditar JWTs quanto a alg:none, segredos HMAC fracos e confusão RS256 para HS256.
   * https://github.com/lukechilds/reverse-shell - Reverse shell fácil de lembrar que deve funcionar na maioria dos sistemas do tipo Unix.
   * https://github.com/momenbasel/keyFinder - Extensão do Chrome que varre passivamente páginas web em busca de chaves de API, tokens e segredos vazados usando mais de 80 padrões de detecção e entropia de Shannon em 10 superfícies de ataque.
   * https://github.com/DenisPodgurskii/pentestkit - Scanner de vulnerabilidades baseado em navegador para fluxos de trabalho de bug bounty e pentest, combinando capacidades DAST, SAST, IAST e SCA para detectar problemas de segurança de runtime, nível de código, interativos e relacionados a dependências.
- [SaaSFort](https://saasfort.com/scan) - Verificação externa gratuita de postura de segurança / NIS2 de 60 segundos, nota A-F, sem cadastro.
- [ARS3NAL](https://github.com/inflictx/Arsenal) - Arsenal offline-first, pesquisável: ~1500 payloads, gerador de comandos, GTFOBins, wordlists, CyberChef embutido, reverse shells e 70 checklists.
- [Mozilla - HTTP Observatory](https://developer.mozilla.org/en-US/observatory) - Desenvolvido pela Mozilla, o HTTP Observatory realiza uma avaliação profunda dos cabeçalhos HTTP de um site e outras configurações de segurança importantes.
- [HTTP Security Report](https://httpsecurityreport.com/) - Obtenha um relatório instantâneo de como seu site se compara às melhores práticas.
- [ImmuniWeb CyberScore](https://www.immuniweb.com/cyberscore/) - pontuação gratuita de cibersegurança, privacidade e segurança de IA da sua empresa, parceiros ou fornecedores
- [ImmuniWeb - Website Security Test](https://www.immuniweb.com/websec/) - Verifica vulnerabilidades de segurança web, proteção de bots de IA, cabeçalhos de segurança e privacidade HTTP, configuração DNSSEC, CSP e conformidade com GDPR e PCI DSS. 10 testes gratuitos por mês (sem conta)
- [Pentest Tools - Website Vulnerability Scanner](https://pentest-tools.com/website-vulnerability-scanning/website-scanner) - detecta SQLi, XSS, injeção de comando, XXE e mais de 75 vulnerabilidades de aplicações web
- [Pentest Tools - Network Vulnerability Scanner](https://pentest-tools.com/network-vulnerability-scanning/network-security-scanner-online) - uma ferramenta de segurança online projetada para identificar vulnerabilidades, configurações incorretas, serviços desatualizados e portas expostas em infraestruturas de rede
- [UpClaw](https://github.com/okdkebm/UpClaw) - CLI de pentest web orientada por IA; um único arquivo Python sem dependências (29 verificações embutidas + 16 adaptadores de ferramentas externas + relatórios de evidências).
- [HTTP Detection Agent](https://github.com/ai-blueteam/http-detection-agent) - detector de ataques HTTP de código aberto, local-first: CLI Rust com 76 detecções em 62 famílias de comportamento (injeção, traversia, request smuggling, SSRF, XXE, desserialização e mais), além de um servidor MCP local para triagem dirigida por agentes

## Folhas de referência

   * http://n0p.net/penguicon/php_app_sec/mirror/xss.html - Folha de referência XSS
   * https://highon.coffee/blog/lfi-cheat-sheet/ - Folha de referência LFI
   * https://highon.coffee/blog/reverse-shell-cheat-sheet/ - Folha de referência Reverse Shell
   * https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/ - Folha de referência SQL Injection
   * https://www.gracefulsecurity.com/path-traversal-cheat-sheet-windows/ - Folha de referência Path Traversal: Windows
   * [Pentest Mindmap](https://pentestmindmap.com/en) - Mapa mental interativo com mais de 11.600 comandos de pentest em 32 categorias. Pesquisável com cópia em um clique.

## Imagens Docker para testes de penetração

   * `docker pull kalilinux/kali-linux-docker` [Kali Linux oficial](https://hub.docker.com/r/kalilinux/kali-linux-docker/)
   * `docker pull blackarchlinux/blackarch` [BlackArch Linux oficial](https://hub.docker.com/r/blackarchlinux/blackarch)
   * `docker pull owasp/zap2docker-stable` - [OWASP ZAP oficial](https://github.com/zaproxy/zaproxy)
   * `docker pull wpscanteam/wpscan` - [WPScan oficial](https://hub.docker.com/r/wpscanteam/wpscan/)
   * `docker pull metasploitframework/metasploit-framework` - [docker-metasploit](https://hub.docker.com/r/metasploitframework/metasploit-framework/)
   * `docker pull citizenstig/dvwa` - [Damn Vulnerable Web Application (DVWA)](https://hub.docker.com/r/citizenstig/dvwa/)
   * `docker pull bkimminich/juice-shop` [OWASP Juice Shop](https://hub.docker.com/r/bkimminich/juice-shop)
   * `docker pull wpscanteam/vulnerablewordpress` - [Instalação vulnerável do WordPress](https://hub.docker.com/r/wpscanteam/vulnerablewordpress/)
   * `docker pull hmlio/vaas-cve-2014-6271` - [Vulnerability as a service: Shellshock](https://hub.docker.com/r/hmlio/vaas-cve-2014-6271/)
   * `docker pull hmlio/vaas-cve-2014-0160` - [Vulnerability as a service: Heartbleed](https://hub.docker.com/r/hmlio/vaas-cve-2014-0160/)
   * `docker pull opendns/security-ninjas` - [Security Ninjas](https://hub.docker.com/r/opendns/security-ninjas/)
   * `docker pull noncetonic/archlinux-pentest-lxde:1.0` - [Arch Linux Penetration Tester](https://hub.docker.com/r/noncetonic/archlinux-pentest-lxde/)
   * `docker pull diogomonica/docker-bench-security` - [Docker Bench for Security](https://hub.docker.com/r/diogomonica/docker-bench-security/)
   * `docker pull ismisepaul/securityshepherd` - [OWASP Security Shepherd](https://hub.docker.com/r/ismisepaul/securityshepherd/)
   * `docker pull danmx/docker-owasp-webgoat` - [Imagem Docker do projeto OWASP WebGoat](https://hub.docker.com/r/webgoat/goatandwolf)
   *  `docker pull docker pull jeroenwillemsen/wrongsecrets` - [Imagem Docker do projeto OWASP WrongSecrets](https://hub.docker.com/r/jeroenwillemsen/wrongsecrets)
   * `docker pull citizenstig/nowasp` - [OWASP Mutillidae II Web Pen-Test Practice Application](https://hub.docker.com/r/citizenstig/nowasp/)
   * `docker pull aaaguirre/pentest` - [Docker for pentest](https://github.com/aaaguirrep/pentest)
   * `docker pull rustscan/rustscan:2.0.0` - [The Modern Port Scanner](https://github.com/RustScan/RustScan)

## Vulnerabilidades

   * http://cve.mitre.org/ - Common Vulnerabilities and Exposures. O padrão para nomes de vulnerabilidades de segurança da informação
   * https://www.exploit-db.com/ - The Exploit Database – arquivo definitivo de Exploits, Shellcode e Security Papers.
   * http://0day.today/ - Inj3ct0r é o banco de dados definitivo de exploits e vulnerabilidades e um ótimo recurso para pesquisadores de vulnerabilidades e profissionais de segurança.
   * http://www.securityfocus.com/ - Desde sua criação em 1999, a SecurityFocus tem sido um pilar na comunidade de segurança.
   * http://packetstormsecurity.com/ - Recurso de segurança global
   * https://wpvulndb.com/ - WPScan Vulnerability Database
   * https://snyk.io/vuln/ - Vulnerability DB, informações detalhadas e orientação de remediação para vulnerabilidades conhecidas.
   * https://stellastra.com/cipher-suite - Banco de dados de centenas de conjuntos de cifras TLS e seu status de segurança.
   * https://vulert.com/vuln-db - Vulert ajuda desenvolvedores a proteger seu software monitorando e alertando sobre vulnerabilidades em dependências de código aberto — sem exigir acesso ao seu código. Suporta dependências de Js, PHP, Java, Python e muitas mais.
   * https://vulncheck.com/xdb/ - Um índice de código de prova de conceito de exploit em repositórios Git.
   * https://labs.jamessawyer.co.uk/cves/ - CVE PoC Search fornece busca de prova de conceito de CVE para GitHub para pivotar rapidamente de uma vulnerabilidade web para código de exploit público.

## Cursos

   * https://pwn.guide/ - Plataforma de aprendizado de cibersegurança, com cerca de 100 tutoriais, dos quais cerca de 25 são sobre hacking web e defesa de sites.
   * https://www.offensive-security.com/information-security-training/advanced-web-attack-and-exploitation/ Offensive Security Advanced Web Attacks and Exploitation (ao vivo)
   * https://www.sans.org/course/web-app-penetration-testing-ethical-hacking Sans SEC542: Web App Penetration Testing and Ethical Hacking
   * https://www.sans.org/course/advanced-web-app-penetration-testing-ethical-hacking Sans SEC642: Advanced Web App Penetration Testing and Ethical Hacking
   * http://opensecuritytraining.info/ - Open Security Training
   * http://securitytrainings.net/security-trainings/ - Security Exploded Training
   * http://www.securitytube.net/ - O maior portal de Infosec e Hacking do mundo.
   * https://www.hacker101.com/ - Classe gratuita de segurança web por [Hackerone](https://www.hackerone.com)
   * https://www.darkrelay.com/courses/professional-penetration-tester - Curso de pentest estilo Zero-Hero por [DarkRelay Security Labs](https://www.darkrelay.com)

## Sites de demonstração de hacking online

   * http://testasp.vulnweb.com/ - Site de teste e demonstração Acunetix ASP
   * http://testaspnet.vulnweb.com/ - Site de teste e demonstração Acunetix ASP.Net
   * http://testphp.vulnweb.com/ - Site de teste e demonstração Acunetix PHP
   * http://crackme.cenzic.com/kelev/view/home.php - Crack Me Bank
   * http://zero.webappsecurity.com/ - Zero Bank
   * http://demo.testfire.net/ - Altoro Mutual
   * https://public-firing-range.appspot.com/ - Firing Range é um campo de teste para scanners automatizados de segurança de aplicações web.
   * https://xss-game.appspot.com/ - Desafio XSS
   * https://google-gruyere.appspot.com/ Google Gruyere, exploits e defesas de aplicações web
   * https://ginandjuice.shop/catalog
   * https://pentest-ground.com/ Pentest-Ground é um playground gratuito com aplicações web e serviços de rede deliberadamente vulneráveis.
  * [HackSimulator](https://chatgpt.com/g/g-jnT7HlNeK-hacksimulator) é um GPT criado por [MarkCyber](https://github.com/MarkCyber) no qual o ChatGPT 4 atua como um CTF de hacking. Este GPT perguntará seu nível de experiência e o que você gostaria de melhorar, antes de simular uma máquina/aplicativo para você hackear, usando a caixa de bate-papo como local para inserir comandos de terminal. Como isso é feito através de IA, muda e se ajusta com base no seu nível de experiência e você pode pedir ajuda se ficar preso.

## Labs
   * https://portswigger.net/web-security - Web Security Academy: Treinamento online gratuito da PortSwigger
   * http://www.cis.syr.edu/~wedu/seed/all_labs.html - Desenvolvendo laboratórios instrucionais para educação em segurança computacional
   * https://www.vulnhub.com/ - Máquinas virtuais para testes de penetração em localhost.
   * https://pentesterlab.com/ - PentesterLab é uma maneira fácil e excelente de aprender teste de penetração.
   * https://codereviewlab.com/ - Code Review Lab é uma plataforma de treinamento prático de revisão de código.
   * https://github.com/jerryhoff/WebGoat.NET - Esta aplicação web é uma plataforma de aprendizado sobre falhas comuns de segurança web.
   * http://www.dvwa.co.uk/ - Damn Vulnerable Web Application (DVWA)
   * http://sourceforge.net/projects/lampsecurity/ - LAMPSecurity Training
   * https://github.com/Audi-1/sqli-labs - Labs SQLI para testar baseado em erro, booleano cego, baseado em tempo.
   * https://github.com/paralax/lfi-labs - pequeno conjunto de scripts PHP para praticar exploração de vulnerabilidades LFI, RFI e injeção de CMD
   * https://hack.me/ - Construa, hospede e compartilhe aplicações web vulneráveis em um ambiente sandbox gratuitamente
   * http://azcwr.org/az-cyber-warfare-ranges - Capture the Flag ao vivo gratuito, equipe azul, equipe vermelha, campo de guerra cibernética para iniciantes a usuários avançados. Deve usar um celular para enviar uma mensagem de texto solicitando acesso ao campo.
   * https://github.com/adamdoupe/WackoPicko - WackoPicko é uma aplicação web vulnerável usada para testar scanners de vulnerabilidades de aplicações web.
   * https://github.com/rapid7/hackazon - Hackazon é um site de teste gratuito e vulnerável que é uma vitrine online construída com as mesmas tecnologias usadas nos aplicativos ricos de cliente e móveis atuais.
   * https://github.com/RhinoSecurityLabs/cloudgoat - Ferramenta de configuração de infraestrutura AWS "Vulnerable by Design" da Rhino Security Labs
   * https://www.hackthebox.eu/ - Hack The Box é uma plataforma online que permite testar e avançar suas habilidades em cibersegurança.
   * https://github.com/tegal1337/0l4bs - 0l4bs é um laboratório de cross-site scripting para entusiastas de segurança de aplicações web.
   * https://github.com/oliverwiegers/pentest_lab - Lab de pentest local aproveitando docker compose.
   * https://ginandjuice.shop/catalog
   * https://github.com/dolevf/Damn-Vulnerable-GraphQL-Application
   * https://labex.io/skilltrees/cybersecurity - LabEx é uma plataforma online para melhorar suas habilidades de cibersegurança por meio de labs práticos.
   * https://pythoncyber.go.ro - CyberPython ajuda você a fazer sua própria pesquisa para resolver desafios, explorar CVEs e criar bons scripts.
   * https://github.com/kOaDT/oss-oopssec-store - OSS – OopsSec Store: uma aplicação de comércio eletrônico intencionalmente vulnerável construída com Next.js e React para treinamento de segurança web e prática CTF.
   * https://github.com/momenbasel/htb-writeups - HTB Writeups: a coleção de writeups do Hack The Box mais abrangente com mais de 500 máquinas, 400+ desafios, ProLabs, Sherlocks, eventos CTF e folhas de referência.

## SSL

   * https://www.ssllabs.com/ssltest/index.html - Este serviço realiza uma análise profunda da configuração de qualquer servidor web SSL na Internet pública.
   * https://certobserver.com/ct-search - Pesquise nos logs de Certificate Transparency os certificados SSL/TLS emitidos para um domínio.
   * https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html - Strong SSL Security on nginx
   * https://weakdh.org/ - Weak Diffie-Hellman and the Logjam Attack
   * https://letsencrypt.org/ - Let’s Encrypt é uma nova autoridade de certificação: é gratuita, automatizada e aberta.
   * https://filippo.io/Heartbleed/ - Um verificador (site e ferramenta) para CVE-2014-0160 (Heartbleed).
   * https://testssl.sh/ - Uma ferramenta de linha de comando que verifica as cifras, protocolos e falhas criptográficas TLS/SSL de um site.
   * [Scorifya](https://www.scorifya.com) - Pontuação de segurança 0–100 para qualquer site cobrindo TLS, cabeçalhos de segurança (CSP, HSTS, X-Frame-Options), cookies, DNS e sinais de e-mail (SPF, DKIM, DMARC) com passos de correção ranqueados.
   * [ImmuniWeb SSL Security Test](https://www.immuniweb.com/ssl/) - uma ferramenta online gratuita que verifica a segurança da configuração SSL/TLS de um site ou servidor de e-mail. Verifica a conformidade com padrões de segurança como NIST, HIPAA, PCI DSS e GDPR. 10 testes gratuitos por mês (sem conta)

## Segurança Ruby on Rails

   * http://brakemanscanner.org/ - Um scanner de vulnerabilidades de segurança por análise estática para aplicações Ruby on Rails.
   * https://github.com/rubysec/ruby-advisory-db - Um banco de dados de gems Ruby vulneráveis
   * https://github.com/rubysec/bundler-audit - Verificação em nível de patch para Bundler
   * https://github.com/hakirisec/hakiri_toolbelt - Hakiri Toolbelt é uma interface de linha de comando para a plataforma Hakiri.
   * https://hakiri.io/facets - Verifique Gemfile.lock em busca de vulnerabilidades.
   * http://rails-sqli.org/ - Esta página lista muitos métodos e opções de consulta no ActiveRecord que não sanitizam argumentos SQL brutos e não se destinam a ser chamados com entrada de usuário insegura.
   * https://github.com/0xsauby/yasuo - Um script Ruby que varre aplicações web de terceiros vulneráveis e exploráveis em uma rede
