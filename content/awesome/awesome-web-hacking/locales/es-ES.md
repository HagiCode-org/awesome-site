# awesome-web-hacking
Esta lista es para cualquiera que desee aprender sobre la seguridad de aplicaciones web pero no tenga un punto de partida.

Puedes ayudar enviando Pull Requests para añadir más información.

Si no estás inclinado a hacer PRs, puedes escribirme en Twitter a `@infoslack`

Tabla de contenidos
=================

   * [Libros](#books)
   * [Documentación](#documentation)
   * [Herramientas](#tools)
   * [Hojas de referencia](#cheat-sheets)
   * [Docker](#docker-images-for-penetration-testing)
   * [Vulnerabilidades](#vulnerabilities)
   * [Cursos](#courses)
   * [Sitios de demostración de hacking en línea](#online-hacking-demonstration-sites)
   * [Labs](#labs)
   * [SSL](#ssl)
   * [Seguridad Ruby on Rails](#security-ruby-on-rails)

## Libros

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
   * https://www.crypto101.io/ - Crypto 101 es un curso introductorio sobre criptografía
   * http://www.offensive-security.com/metasploit-unleashed/ - Metasploit Unleashed
   * http://www.cl.cam.ac.uk/~rja14/book.html - Security Engineering
   * https://www.feistyduck.com/library/openssl-cookbook/ - OpenSSL Cookbook
   * https://www.manning.com/books/real-world-cryptography - Aprende y aplica técnicas criptográficas.
   * https://www.manning.com/books/making-sense-of-cyber-security - Una guía de los conceptos clave, la terminología y las tecnologías de ciberseguridad, perfecta para cualquiera que planifique o implemente una estrategia de seguridad.
   * https://www.manning.com/books/cyber-security-career-guide - Inicia una carrera en ciberseguridad aprendiendo a adaptar tus habilidades técnicas y no técnicas existentes.
   * https://www.manning.com/books/secret-key-cryptography - Un libro sobre técnicas criptográficas y métodos de clave secreta.
   * https://www.manning.com/books/application-security-program-handbook - Este libro práctico es una guía integral para implementar un programa robusto de seguridad de aplicaciones.
   * https://www.manning.com/books/cyber-threat-hunting - Guía práctica para la caza de amenazas cibernéticas.
   * https://nostarch.com/bug-bounty-bootcamp - Bug Bounty Bootcamp
   * https://nostarch.com/hacking-apis - Hacking APIs
   * https://www.manning.com/books/grokking-web-application-security - Un libro sobre cómo construir aplicaciones web preparadas y resilientes ante cualquier ataque.

## Documentación

   * https://www.owasp.org/ - Open Web Application Security Project
   * http://www.pentest-standard.org/ - Penetration Testing Execution Standard
   * http://www.binary-auditing.com/ - La auditoría binaria del Dr. Thorsten Schneider
   * https://appsecwiki.com/ - Application Security Wiki es una iniciativa para proporcionar todos los recursos relacionados con la seguridad de aplicaciones a investigadores de seguridad y desarrolladores en un solo lugar.
   * [AppSec Santa](https://appsecsanta.com) - Comparación independiente de más de 129 herramientas de seguridad de aplicaciones web en SAST, DAST, SCA y más.

## Herramientas
   * https://github.com/bad-antics/nullsec-linux - NullSec Linux - Distribución de seguridad con herramientas de prueba de aplicaciones web preconfiguradas
   * https://github.com/bad-antics/nullsec-webfuzz - NullSec WebFuzz - Framework de fuzzing de aplicaciones web
   * https://github.com/poszothebuilder/nextjs-security-headers-starter - Iniciador de cabeceras de seguridad Next.js sin dependencias, con CSP, HSTS y un verificador de producción para CI.

   * https://www.deepinfo.com/ - La plataforma de superficie de ataque Deepinfo descubre todos tus activos digitales, los monitorea 24/7, detecta cualquier problema y te notifica rápidamente para que puedas actuar de inmediato.
     * https://github.com/bountyyfi/lonkero - Escáner de vulnerabilidades web de nivel empresarial con más de 60 módulos de ataque, construido en Rust para pruebas de penetración y evaluaciones de seguridad.
   * https://spyse.com/ - Motor de búsqueda OSINT que proporciona datos recientes sobre toda la web, almacenando todos los datos en su propia BD, interconectando los datos encontrados y con algunas funciones interesantes.
   * http://www.metasploit.com/ - El software de pruebas de penetración más utilizado del mundo
   * https://findsubdomains.com - Servicio de escaneo de subdominios en línea con muchos datos adicionales. Funciona usando OSINT.
   * https://cc.la - Conjunto de herramientas en línea gratuitas para WHOIS, RDAP, DNS, IP WHOIS, búsqueda de certificados SSL, historial de servidores de nombres, diagnóstico de red (ping/traceroute/MTR) y monitoreo de dominios. Sin registro.
   * https://vacato.io - Lista de observación RDAP gratuita: comprobaciones programadas + Telegram/correo/Slack cuando el estado parece disponible. No es un registrador ni un cazador de caídas. Nivel gratuito: 10 dominios.
   * https://github.com/BlessedRebuS/Krawl - Servidor de engaño web nativo de la nube y anti-crawler.
   * https://github.com/bjeborn/basic-auth-pot HoneyPot de autenticación HTTP Basic.
   * http://www.arachni-scanner.com/ - Framework de escáner de seguridad de aplicaciones web
   * https://github.com/ASCIT31/Dark-Moon - Darkmoon es una plataforma de pruebas de penetración AI autónoma de código abierto (GPL-3.0) que orquesta más de 80 herramientas sobre MCP con subagentes ofensivos dedicados por tecnología (GraphQL, Spring Boot, ASP.NET, Node.js, Flask, PHP, Ruby) y mantiene una pista de evidencia por hallazgo.
   * https://github.com/BugTraceAI/BugTraceAI - BugTraceAI es una plataforma multiagente de código abierto para pruebas de seguridad de aplicaciones web autorizadas, con validación, captura de evidencia e informes.
   * https://github.com/TayfurYldz/headerproof - HeaderProof es un escáner activo de alfa-desarrollador, de bajo ruido, para pruebas autorizadas de pistas de seguridad web dirigidas por cabeceras, como configuración incorrecta de CORS, división de respuesta, candidatos a envenenamiento de caché y rutas de reflexión, con compuertas de evidencia explícitas y supresión de falsos positivos.
   * https://github.com/ANVEAI/anve-offsec - Ingeniero de seguridad AI autónomo y plataforma de bug bounty en Kali Linux con razonamiento Hermes con estado, sidecar de navegador OpenClaw Chromium y RAG de estrategia vectorial Qdrant. 🇮🇳
   * https://github.com/sullo/nikto - Escáner de servidores web Nikto
   * http://www.tenable.com/products/nessus-vulnerability-scanner - Nessus Vulnerability Scanner
   * http://www.portswigger.net/burp/intruder.html - Burp Intruder es una herramienta para automatizar ataques personalizados contra aplicaciones web.
   * http://www.openvas.org/ - El escáner y gestor de vulnerabilidades de código abierto más avanzado del mundo.
   * https://github.com/iSECPartners/Scout2 - Herramienta de auditoría de seguridad para entornos AWS
   * https://www.owasp.org/index.php/Category:OWASP_DirBuster_Project - Es una aplicación Java multihilo diseñada para fuerza bruta de directorios y nombres de archivos en servidores web/aplicaciones.
   * https://www.owasp.org/index.php/ZAP - El Zed Attack Proxy es una herramienta de pruebas de penetración integrada y fácil de usar para encontrar vulnerabilidades en aplicaciones web.
   * https://github.com/vigolium/vigolium - Escáner de vulnerabilidades web y API de alta fidelidad que fusiona IA agentica con un motor nativo rápido; más de 250 módulos de detección que cubren OWASP Top 10, pruebas autenticadas IDOR/BOLA y fuera de banda, e entradas OpenAPI/Postman/Burp/cURL. Código abierto, AGPL-3.0.
   * https://github.com/tecknicaltom/dsniff - dsniff es una colección de herramientas para auditoría de red y pruebas de penetración.
   * https://github.com/WangYihang/Webshell-Sniper - Gestiona tu webshell a través de la terminal.
   * https://github.com/DanMcInerney/dnsspoof - Engañador DNS. Elimina las respuestas DNS del router y las reemplaza con la respuesta DNS falsificada.
   * https://github.com/trustedsec/social-engineer-toolkit - El repositorio de Social-Engineer Toolkit (SET) de TrustedSec
   * https://github.com/sqlmapproject/sqlmap - Herramienta automática de inyección SQL y toma de control de base de datos
   * https://github.com/beefproject/beef - The Browser Exploitation Framework Project
   * http://w3af.org/ - w3af es un framework de ataque y auditoría de aplicaciones web
   * https://github.com/espreto/wpsploit - WPSploit, explotando WordPress con Metasploit
   * https://vulert.com/ - Vulert asegura el software detectando vulnerabilidades en dependencias de código abierto — sin acceder a tu código. Soporta Js, PHP, Java, Python y más.
   * https://github.com/WangYihang/Reverse-Shell-Manager - Gestor de shell inversa a través de la terminal.
   * https://github.com/RUB-NDS/WS-Attacker - WS-Attacker es un framework modular para pruebas de penetración de servicios web
   * https://github.com/wpscanteam/wpscan - WPScan es un escáner de vulnerabilidades WordPress en caja negra
   * https://github.com/own2pwn-fr/wp2shell-detect - Detector caja negra, no intrusivo, de la cadena RCE pre-auth wp2shell en WordPress core (CVE-2026-63030 / CVE-2026-60137); obtiene la huella de la versión del core desde fuentes públicas y marca instalaciones vulnerables sin explotarlas
   * http://sourceforge.net/projects/paros/ Paros proxy
   * https://www.owasp.org/index.php/Category:OWASP_WebScarab_Project Web Scarab proxy
   * https://code.google.com/p/skipfish/ Skipfish, una herramienta activa de reconocimiento de seguridad de aplicaciones web
   * http://www.acunetix.com/vulnerability-scanner/ Acunetix Web Vulnerability Scanner
   * https://cystack.net/ CyStack Web Security Platform
   * http://www-03.ibm.com/software/products/en/appscan IBM Security AppScan
   * https://www.netsparker.com/web-vulnerability-scanner/ Netsparker web vulnerability scanner
   * http://www8.hp.com/us/en/software-solutions/webinspect-dynamic-analysis-dast/index.html HP Web Inspect
   * https://github.com/sensepost/wikto Wikto - Nikto para Windows con algunas funciones extra
   * http://samurai.inguardians.com Samurai Web Testing Framework
   * https://code.google.com/p/ratproxy/ Ratproxy
   * http://www.websecurify.com Websecurify
   * http://sourceforge.net/projects/grendel/ Grendel-scan
   * https://tools.kali.org/web-applications/gobuster Herramienta de fuerza bruta de directorios/archivos y DNS escrita en Go
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
   * https://github.com/rastating/wordpress-exploit-framework Un framework Ruby para desarrollar y usar módulos que ayudan en la prueba de penetración de sitios y sistemas impulsados por WordPress.
   * http://www.xss-payloads.com/ XSS Payloads para aprovechar vulnerabilidades XSS, construir payloads personalizados, practicar habilidades de pruebas de penetración.
   * https://github.com/joaomatosf/jexboss Herramienta de verificación y explotación JBoss (y otras vulnerabilidades de deserialización Java)
   * https://github.com/commixproject/commix Herramienta automatizada todo en uno de inyección y explotación de comandos OS
   * https://github.com/pathetiq/BurpSmartBuster Un plugin de descubrimiento de contenido de Burp Suite que ¡añade inteligencia al Buster!
   * https://github.com/GoSecure/csp-auditor Plugin de Burp y ZAP para analizar cabeceras CSP
   * https://github.com/ffleming/timing_attack Realizar ataques de temporización contra aplicaciones web
   * https://github.com/lalithr95/fuzzapi Fuzzapi es una herramienta usada para pentesting de API REST
   * https://github.com/owtf/owtf Offensive Web Testing Framework (OWTF)
   * https://github.com/nccgroup/wssip Aplicación para capturar, modificar y enviar datos WebSocket personalizados del cliente al servidor y viceversa.
   * https://github.com/PalindromeLabs/STEWS Conjunto de herramientas para descubrimiento, fingerprinting y detección de vulnerabilidades WebSocket
   * https://github.com/tijme/angularjs-csti-scanner Detección automatizada de inyección de plantilla del lado cliente (escape/omisión de sandbox) para AngularJS (ACSTIS).
   * https://reshift.softwaresecured.com Una herramienta de análisis de código fuente para detectar y gestionar vulnerabilidades de seguridad Java.
   * https://encoding.tools Aplicación web para transformar datos binarios y cadenas, incluyendo hashes y varias codificaciones. Versión offline GPLv3 disponible.
   * https://gchq.github.io/CyberChef/ Un "cuchillo suizo cibernético" para realizar diversas codificaciones y transformaciones de datos binarios y cadenas.
   * https://github.com/urbanadventurer/WhatWeb WhatWeb - Next generation web scanner
   * https://www.shodan.io/ Shodan - El motor de búsqueda para encontrar servidores vulnerables
   * https://github.com/WangYihang/Webshell-Sniper Un gestor de webshell a través de la terminal
   * https://github.com/nil0x42/phpsploit PhpSploit - Framework C2 con todas las funciones que persiste silenciosamente en el servidor web mediante un one-liner PHP malicioso
   * https://webhint.io/ - webhint - webhint es una herramienta de linting personalizable que te ayuda a mejorar la accesibilidad, velocidad, compatibilidad entre navegadores de tu sitio y más, comprobando tu código en busca de mejores prácticas y errores comunes.
   * https://gtfobins.github.io/ - gtfobins - GTFOBins es una lista curada de binarios Unix que pueden usarse para eludir restricciones de seguridad locales en sistemas mal configurados.
   * https://github.com/HightechSec/git-scanner git-scanner - Una herramienta para bug hunting o pentesting dirigida a sitios web que tienen repositorios `.git` abiertos disponibles públicamente
   * [Web Application Exploitation @ Rawsec Inventory](https://inventory.raw.pm/tools.html#title-tools-web-application-exploitation) - Lista completa de herramientas de pentest web
   * [Cyclops es un navegador novedoso que puede detectar vulnerabilidades automáticamente](https://github.com/v8blink/Chromium-based-XSS-Taint-Tracking/) - Cyclops es un navegador web con función de detección XSS
   * https://caido.io/ - Web proxy
   * https://github.com/assetnote/kiterunner - Descubrimiento de API
   * https://github.com/owasp-amass/amass - Reconocimiento de dominio
   * [https://columbus.elmasy.com/](https://columbus.elmasy.com/) - El proyecto Columbus es un servicio avanzado de descubrimiento de subdominios con una API rápida, potente y fácil de usar.
   * [Script BadUSB para exfiltrar contraseñas](https://github.com/MarkCyber/BadUSB/blob/main/HackStuff/CredentialHarvester.txt) - Extrae todas las contraseñas guardadas de Chrome, Firefox y Edge para guardarlas en un USB secundario para su análisis.
   * https://github.com/flibustier/jwt-online-cracker - Fuerza bruta un token JWT HS256, HS384 o HS512 desde tu navegador (totalmente del lado del cliente).
   * [jwt-auditor](https://github.com/mohelobeid/jwt-auditor) - CLI offline para decodificar y auditar JWTs en busca de alg:none, secretos HMAC débiles y confusión RS256 a HS256.
   * https://github.com/lukechilds/reverse-shell - Shell inversa fácil de recordar que debería funcionar en la mayoría de los sistemas tipo Unix.
   * https://github.com/momenbasel/keyFinder - Extensión de Chrome que escanea pasivamente páginas web en busca de claves API, tokens y secretos filtrados usando más de 80 patrones de detección y entropía de Shannon en 10 superficies de ataque.
   * https://github.com/DenisPodgurskii/pentestkit - Escáner de vulnerabilidades basado en navegador para flujos de trabajo de bug bounty y pentesting, combinando capacidades DAST, SAST, IAST y SCA para detectar problemas de seguridad en tiempo de ejecución, a nivel de código fuente, interactivos y relacionados con dependencias.
- [SaaSFort](https://saasfort.com/scan) - Escaneo externo gratuito de postura de seguridad / NIS2 de 60 segundos, calificación A-F, sin registro.
- [ARS3NAL](https://github.com/inflictx/Arsenal) - Arsenal offline-first, buscable: ~1500 payloads, generador de comandos, GTFOBins, wordlists, CyberChef integrado, shells inversas y 70 listas de verificación.
- [Mozilla - HTTP Observatory](https://developer.mozilla.org/en-US/observatory) - Desarrollado por Mozilla, el HTTP Observatory realiza una evaluación en profundidad de las cabeceras HTTP de un sitio y otras configuraciones de seguridad clave.
- [HTTP Security Report](https://httpsecurityreport.com/) - Obtén un informe instantáneo de cómo tu sitio web se mide frente a las mejores prácticas.
- [ImmuniWeb CyberScore](https://www.immuniweb.com/cyberscore/) - calificación de ciberseguridad, privacidad y seguridad de IA gratuita de tu empresa, socios o proveedores
- [ImmuniWeb - Website Security Test](https://www.immuniweb.com/websec/) - Comprueba vulnerabilidades de seguridad web, protección de bots de IA, cabeceras de seguridad y privacidad HTTP, configuración DNSSEC, CSP y cumplimiento de GDPR y PCI DSS. 10 pruebas gratuitas al mes (sin cuenta)
- [Pentest Tools - Website Vulnerability Scanner](https://pentest-tools.com/website-vulnerability-scanning/website-scanner) - detecta SQLi, XSS, inyección de comandos, XXE y más de 75 vulnerabilidades de aplicaciones web
- [Pentest Tools - Network Vulnerability Scanner](https://pentest-tools.com/network-vulnerability-scanning/network-security-scanner-online) - una herramienta de seguridad en línea diseñada para identificar vulnerabilidades, configuraciones incorrectas, servicios desactualizados y puertos expuestos en infraestructuras de red
- [UpClaw](https://github.com/okdkebm/UpClaw) - CLI de pentest web impulsada por IA; un solo archivo Python sin dependencias (29 comprobaciones integradas + 16 adaptadores de herramientas externas + informes de evidencia).
- [HTTP Detection Agent](https://github.com/ai-blueteam/http-detection-agent) - detector de ataques HTTP de código abierto, local-first: CLI Rust con 76 detecciones en 62 familias de comportamiento (inyección, traversía, request smuggling, SSRF, XXE, deserialización y más), además de un servidor MCP local para triaje dirigido por agentes

## Hojas de referencia

   * http://n0p.net/penguicon/php_app_sec/mirror/xss.html - Hoja de referencia XSS
   * https://highon.coffee/blog/lfi-cheat-sheet/ - Hoja de referencia LFI
   * https://highon.coffee/blog/reverse-shell-cheat-sheet/ - Hoja de referencia Reverse Shell
   * https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/ - Hoja de referencia SQL Injection
   * https://www.gracefulsecurity.com/path-traversal-cheat-sheet-windows/ - Hoja de referencia Path Traversal: Windows
   * [Pentest Mindmap](https://pentestmindmap.com/en) - Mapa mental interactivo con más de 11.600 comandos de pentest en 32 categorías. Buscable con copia con un clic.

## Imágenes Docker para pruebas de penetración

   * `docker pull kalilinux/kali-linux-docker` [Kali Linux oficial](https://hub.docker.com/r/kalilinux/kali-linux-docker/)
   * `docker pull blackarchlinux/blackarch` [BlackArch Linux oficial](https://hub.docker.com/r/blackarchlinux/blackarch)
   * `docker pull owasp/zap2docker-stable` - [OWASP ZAP oficial](https://github.com/zaproxy/zaproxy)
   * `docker pull wpscanteam/wpscan` - [WPScan oficial](https://hub.docker.com/r/wpscanteam/wpscan/)
   * `docker pull metasploitframework/metasploit-framework` - [docker-metasploit](https://hub.docker.com/r/metasploitframework/metasploit-framework/)
   * `docker pull citizenstig/dvwa` - [Damn Vulnerable Web Application (DVWA)](https://hub.docker.com/r/citizenstig/dvwa/)
   * `docker pull bkimminich/juice-shop` [OWASP Juice Shop](https://hub.docker.com/r/bkimminich/juice-shop)
   * `docker pull wpscanteam/vulnerablewordpress` - [Instalación vulnerable de WordPress](https://hub.docker.com/r/wpscanteam/vulnerablewordpress/)
   * `docker pull hmlio/vaas-cve-2014-6271` - [Vulnerability as a service: Shellshock](https://hub.docker.com/r/hmlio/vaas-cve-2014-6271/)
   * `docker pull hmlio/vaas-cve-2014-0160` - [Vulnerability as a service: Heartbleed](https://hub.docker.com/r/hmlio/vaas-cve-2014-0160/)
   * `docker pull opendns/security-ninjas` - [Security Ninjas](https://hub.docker.com/r/opendns/security-ninjas/)
   * `docker pull noncetonic/archlinux-pentest-lxde:1.0` - [Arch Linux Penetration Tester](https://hub.docker.com/r/noncetonic/archlinux-pentest-lxde/)
   * `docker pull diogomonica/docker-bench-security` - [Docker Bench for Security](https://hub.docker.com/r/diogomonica/docker-bench-security/)
   * `docker pull ismisepaul/securityshepherd` - [OWASP Security Shepherd](https://hub.docker.com/r/ismisepaul/securityshepherd/)
   * `docker pull danmx/docker-owasp-webgoat` - [Imagen Docker del proyecto OWASP WebGoat](https://hub.docker.com/r/webgoat/goatandwolf)
   *  `docker pull docker pull jeroenwillemsen/wrongsecrets` - [Imagen Docker del proyecto OWASP WrongSecrets](https://hub.docker.com/r/jeroenwillemsen/wrongsecrets)
   * `docker pull citizenstig/nowasp` - [OWASP Mutillidae II Web Pen-Test Practice Application](https://hub.docker.com/r/citizenstig/nowasp/)
   * `docker pull aaaguirre/pentest` - [Docker for pentest](https://github.com/aaaguirrep/pentest)
   * `docker pull rustscan/rustscan:2.0.0` - [The Modern Port Scanner](https://github.com/RustScan/RustScan)

## Vulnerabilidades

   * http://cve.mitre.org/ - Common Vulnerabilities and Exposures. El estándar para los nombres de vulnerabilidades de seguridad de la información
   * https://www.exploit-db.com/ - The Exploit Database – archivo definitivo de Exploits, Shellcode y Security Papers.
   * http://0day.today/ - Inj3ct0r es la base de datos definitiva de exploits y vulnerabilidades y un gran recurso para investigadores de vulnerabilidades y profesionales de la seguridad.
   * http://www.securityfocus.com/ - Desde su creación en 1999, SecurityFocus ha sido un pilar en la comunidad de seguridad.
   * http://packetstormsecurity.com/ - Recurso de seguridad global
   * https://wpvulndb.com/ - WPScan Vulnerability Database
   * https://snyk.io/vuln/ - Vulnerability DB, información detallada y guía de remediación para vulnerabilidades conocidas.
   * https://stellastra.com/cipher-suite - Base de datos de cientos de conjuntos de cifrado TLS y su estado de seguridad.
   * https://vulert.com/vuln-db - Vulert ayuda a los desarrolladores a asegurar su software monitoreando y alertándolos sobre vulnerabilidades en dependencias de código abierto — sin requerir acceso a su código. Soporta dependencias de Js, PHP, Java, Python y muchas más.
   * https://vulncheck.com/xdb/ - Un índice de código de prueba de concepto de exploit en repositorios Git.
   * https://labs.jamessawyer.co.uk/cves/ - CVE PoC Search proporciona búsqueda de prueba de concepto de CVE a GitHub para pivotar rápidamente de una vulnerabilidad web a código de exploit público.

## Cursos

   * https://pwn.guide/ - Plataforma de aprendizaje de ciberseguridad, con unos 100 tutoriales, aproximadamente 25 de ellos sobre hacking web y defensa de sitios web.
   * https://www.offensive-security.com/information-security-training/advanced-web-attack-and-exploitation/ Offensive Security Advanced Web Attacks and Exploitation (en vivo)
   * https://www.sans.org/course/web-app-penetration-testing-ethical-hacking Sans SEC542: Web App Penetration Testing and Ethical Hacking
   * https://www.sans.org/course/advanced-web-app-penetration-testing-ethical-hacking Sans SEC642: Advanced Web App Penetration Testing and Ethical Hacking
   * http://opensecuritytraining.info/ - Open Security Training
   * http://securitytrainings.net/security-trainings/ - Security Exploded Training
   * http://www.securitytube.net/ - El mayor portal de Infosec y Hacking del mundo.
   * https://www.hacker101.com/ - Clase gratuita de seguridad web por [Hackerone](https://www.hackerone.com)
   * https://www.darkrelay.com/courses/professional-penetration-tester - Curso de pentest de estilo Zero-Hero por [DarkRelay Security Labs](https://www.darkrelay.com)

## Sitios de demostración de hacking en línea

   * http://testasp.vulnweb.com/ - Sitio de prueba y demostración Acunetix ASP
   * http://testaspnet.vulnweb.com/ - Sitio de prueba y demostración Acunetix ASP.Net
   * http://testphp.vulnweb.com/ - Sitio de prueba y demostración Acunetix PHP
   * http://crackme.cenzic.com/kelev/view/home.php - Crack Me Bank
   * http://zero.webappsecurity.com/ - Zero Bank
   * http://demo.testfire.net/ - Altoro Mutual
   * https://public-firing-range.appspot.com/ - Firing Range es un banco de pruebas para escáneres automatizados de seguridad de aplicaciones web.
   * https://xss-game.appspot.com/ - Desafío XSS
   * https://google-gruyere.appspot.com/ Google Gruyere, exploits y defensas de aplicaciones web
   * https://ginandjuice.shop/catalog
   * https://pentest-ground.com/ Pentest-Ground es un patio de juegos gratuito con aplicaciones web y servicios de red deliberadamente vulnerables.
  * [HackSimulator](https://chatgpt.com/g/g-jnT7HlNeK-hacksimulator) es un GPT creado por [MarkCyber](https://github.com/MarkCyber) en el que chatGPT 4 actúa como un CTF de hacking. Este GPT te preguntará tu nivel de experiencia y qué te gustaría mejorar, antes de simular una máquina/aplicación para que hackees, usando el cuadro de chat como lugar para introducir comandos de terminal. Como es a través de IA, cambia y se ajusta según tu nivel de experiencia y puedes pedir ayuda si te quedas atascado.

## Labs
   * https://portswigger.net/web-security - Web Security Academy: formación gratuita en línea de PortSwigger
   * http://www.cis.syr.edu/~wedu/seed/all_labs.html - Desarrollar laboratorios de instrucción para la educación en seguridad informática
   * https://www.vulnhub.com/ - Máquinas virtuales para pruebas de penetración en localhost.
   * https://pentesterlab.com/ - PentesterLab es una forma fácil y excelente de aprender pruebas de penetración.
   * https://codereviewlab.com/ - Code Review Lab es una plataforma de entrenamiento práctica de revisión de código.
   * https://github.com/jerryhoff/WebGoat.NET - Esta aplicación web es una plataforma de aprendizaje sobre fallos comunes de seguridad web.
   * http://www.dvwa.co.uk/ - Damn Vulnerable Web Application (DVWA)
   * http://sourceforge.net/projects/lampsecurity/ - LAMPSecurity Training
   * https://github.com/Audi-1/sqli-labs - Labs SQLI para probar basado en error, booleano ciego, basado en tiempo.
   * https://github.com/paralax/lfi-labs - pequeño conjunto de scripts PHP para practicar la explotación de vulnerabilidades LFI, RFI e inyección de CMD
   * https://hack.me/ - Construye, aloja y comparte aplicaciones web vulnerables en un entorno sandbox de forma gratuita
   * http://azcwr.org/az-cyber-warfare-ranges - Capture the Flag en vivo gratuito, equipo azul, equipo rojo, rango de guerra cibernética para principiantes a usuarios avanzados. Debe usar un teléfono celular para enviar un mensaje de texto solicitando acceso al rango.
   * https://github.com/adamdoupe/WackoPicko - WackoPicko es una aplicación web vulnerable usada para probar escáneres de vulnerabilidades de aplicaciones web.
   * https://github.com/rapid7/hackazon - Hackazon es un sitio de prueba gratuito y vulnerable que es una tienda en línea construida con las mismas tecnologías usadas en las aplicaciones ricas de cliente y móviles de hoy.
   * https://github.com/RhinoSecurityLabs/cloudgoat - Herramienta de configuración de infraestructura AWS "Vulnerable by Design" de Rhino Security Labs
   * https://www.hackthebox.eu/ - Hack The Box es una plataforma en línea que te permite probar y avanzar tus habilidades en ciberseguridad.
   * https://github.com/tegal1337/0l4bs - 0l4bs es un laboratorio de cross-site scripting para entusiastas de la seguridad de aplicaciones web.
   * https://github.com/oliverwiegers/pentest_lab - Lab de pentest local aprovechando docker compose.
   * https://ginandjuice.shop/catalog
   * https://github.com/dolevf/Damn-Vulnerable-GraphQL-Application
   * https://labex.io/skilltrees/cybersecurity - LabEx es una plataforma en línea para mejorar tus habilidades de ciberseguridad mediante labs prácticos.
   * https://pythoncyber.go.ro - CyberPython te ayuda a hacer tu propia investigación para resolver desafíos, explotar CVEs y hacer buenos scripts.
   * https://github.com/kOaDT/oss-oopssec-store - OSS – OopsSec Store: una aplicación de comercio electrónico intencionalmente vulnerable construida con Next.js y React para entrenamiento de seguridad web y práctica CTF.
   * https://github.com/momenbasel/htb-writeups - HTB Writeups: la colección de writeups de Hack The Box más completa con más de 500 máquinas, 400+ desafíos, ProLabs, Sherlocks, eventos CTF y hojas de referencia.

## SSL

   * https://www.ssllabs.com/ssltest/index.html - Este servicio realiza un análisis profundo de la configuración de cualquier servidor web SSL en Internet público.
   * https://certobserver.com/ct-search - Busca en los registros de Certificate Transparency los certificados SSL/TLS emitidos para un dominio.
   * https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html - Strong SSL Security on nginx
   * https://weakdh.org/ - Weak Diffie-Hellman and the Logjam Attack
   * https://letsencrypt.org/ - Let’s Encrypt es una nueva autoridad de certificación: es gratuita, automatizada y abierta.
   * https://filippo.io/Heartbleed/ - Un verificador (sitio y herramienta) para CVE-2014-0160 (Heartbleed).
   * https://testssl.sh/ - Una herramienta de línea de comandos que comprueba los cifrados, protocolos y fallos criptográficos TLS/SSL de un sitio web.
   * [Scorifya](https://www.scorifya.com) - Puntuación de seguridad 0–100 para cualquier sitio web que cubre TLS, cabeceras de seguridad (CSP, HSTS, X-Frame-Options), cookies, DNS y señales de correo (SPF, DKIM, DMARC) con pasos de corrección jerarquizados.
   * [ImmuniWeb SSL Security Test](https://www.immuniweb.com/ssl/) - una herramienta en línea gratuita que comprueba la seguridad de la configuración SSL/TLS de un sitio web o servidor de correo. Comprueba el cumplimiento de estándares de seguridad como NIST, HIPAA, PCI DSS y GDPR. 10 pruebas gratuitas al mes (sin cuenta)

## Seguridad Ruby on Rails

   * http://brakemanscanner.org/ - Un escáner de vulnerabilidades de seguridad por análisis estático para aplicaciones Ruby on Rails.
   * https://github.com/rubysec/ruby-advisory-db - Una base de datos de gems Ruby vulnerables
   * https://github.com/rubysec/bundler-audit - Verificación a nivel de parche para Bundler
   * https://github.com/hakirisec/hakiri_toolbelt - Hakiri Toolbelt es una interfaz de línea de comandos para la plataforma Hakiri.
   * https://hakiri.io/facets - Escanea Gemfile.lock en busca de vulnerabilidades.
   * http://rails-sqli.org/ - Esta página enumera muchos métodos y opciones de consulta en ActiveRecord que no sanitizan argumentos SQL crudos y no están destinados a ser llamados con entradas de usuario inseguras.
   * https://github.com/0xsauby/yasuo - Un script Ruby que escanea aplicaciones web de terceros vulnerables y explotables en una red
