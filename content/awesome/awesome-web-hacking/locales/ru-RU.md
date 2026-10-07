# awesome-web-hacking
Этот список предназначен для тех, кто хочет изучать безопасность веб-приложений, но не знает, с чего начать.

Вы можете помочь, отправляя Pull Request'ы для добавления информации.

Если вы не хотите делать PR, вы можете написать мне в Twitter `@infoslack`

Содержание
=================

   * [Книги](#books)
   * [Документация](#documentation)
   * [Инструменты](#tools)
   * [Шпаргалки](#cheat-sheets)
   * [Docker](#docker-images-for-penetration-testing)
   * [Уязвимости](#vulnerabilities)
   * [Курсы](#courses)
   * [Сайты онлайн-демонстрации взлома](#online-hacking-demonstration-sites)
   * [Лаборатории](#labs)
   * [SSL](#ssl)
   * [Безопасность Ruby on Rails](#security-ruby-on-rails)

## Книги

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
   * https://www.crypto101.io/ - Crypto 101 — это вводный курс по криптографии
   * http://www.offensive-security.com/metasploit-unleashed/ - Metasploit Unleashed
   * http://www.cl.cam.ac.uk/~rja14/book.html - Security Engineering
   * https://www.feistyduck.com/library/openssl-cookbook/ - OpenSSL Cookbook
   * https://www.manning.com/books/real-world-cryptography - Изучайте и применяйте криптографические методы.
   * https://www.manning.com/books/making-sense-of-cyber-security - Руководство по ключевым концепциям, терминологии и технологиям кибербезопасности, идеально подходящее тем, кто планирует или внедряет стратегию безопасности.
   * https://www.manning.com/books/cyber-security-career-guide - Начните карьеру в кибербезопасности, научившись адаптировать свои существующие технические и нетехнические навыки.
   * https://www.manning.com/books/secret-key-cryptography - Книга о криптографических методах и способах с секретным ключом.
   * https://www.manning.com/books/application-security-program-handbook - Эта практическая книга — исчерпывающее руководство по внедрению надёжной программы безопасности приложений.
   * https://www.manning.com/books/cyber-threat-hunting - Практическое руководство по охоте за киберугрозами.
   * https://nostarch.com/bug-bounty-bootcamp - Bug Bounty Bootcamp
   * https://nostarch.com/hacking-apis - Hacking APIs
   * https://www.manning.com/books/grokking-web-application-security - Книга о создании веб-приложений, готовых к любой атаке и устойчивых к ней.

## Документация

   * https://www.owasp.org/ - Open Web Application Security Project
   * http://www.pentest-standard.org/ - Penetration Testing Execution Standard
   * http://www.binary-auditing.com/ - Бинарный аудит доктора Торстена Шнайдера
   * https://appsecwiki.com/ - Application Security Wiki — инициатива по предоставлению всем исследователям безопасности и разработчикам всех ресурсов, связанных с безопасностью приложений, в одном месте.
   * [AppSec Santa](https://appsecsanta.com) - Независимое сравнение более чем 129 инструментов безопасности веб-приложений в категориях SAST, DAST, SCA и других.

## Инструменты
   * https://github.com/bad-antics/nullsec-linux - NullSec Linux - Дистрибутив безопасности с предустановленными инструментами тестирования веб-приложений
   * https://github.com/bad-antics/nullsec-webfuzz - NullSec WebFuzz - Фреймворк для фаззинга веб-приложений
   * https://github.com/poszothebuilder/nextjs-security-headers-starter - Стартовый шаблон заголовков безопасности Next.js без зависимостей с CSP, HSTS и проверщиком продакшена для CI.

   * https://www.deepinfo.com/ - Платформа поверхности атак Deepinfo обнаруживает все ваши цифровые активы, отслеживает их 24/7, выявляет проблемы и быстро уведомляет вас, чтобы вы могли немедленно принять меры.
     * https://github.com/bountyyfi/lonkero - Корпоративный сканер уязвимостей веб-приложений с более чем 60 модулями атак, написанный на Rust для penetration-тестирования и оценки безопасности.
   * https://spyse.com/ - Поисковый движок OSINT, предоставляющий свежие данные обо всём вебе, хранящий все данные в собственной БД, связывающий найденные данные и обладающий несколькими полезными функциями.
   * http://www.metasploit.com/ - Самое используемое в мире ПО для тестирования на проникновение
   * https://findsubdomains.com - Онлайн-сервис сканирования поддоменов с большим количеством дополнительных данных. работает с использованием OSINT.
   * https://cc.la - Бесплатный онлайн-набор инструментов для WHOIS, RDAP, DNS, IP WHOIS, поиска SSL-сертификатов, истории серверов имён, сетевой диагностики (ping/traceroute/MTR) и мониторинга доменов. Регистрация не требуется.
   * https://vacato.io - Бесплатный список наблюдения RDAP: запланированные проверки + Telegram/email/Slack, когда статус выглядит доступным. Не регистратор и не перехватчик доменов. Бесплатный уровень: 10 доменов.
   * https://github.com/BlessedRebuS/Krawl - Облачный сервер веб-обмана и анти-краулер.
   * https://github.com/bjeborn/basic-auth-pot HTTP Basic Authentication HoneyPot.
   * http://www.arachni-scanner.com/ - Web Application Security Scanner Framework
   * https://github.com/ASCIT31/Dark-Moon - Darkmoon — это автономная платформа ИИ-тестирования на проникновение с открытым исходным кодом (GPL-3.0), которая оркестрирует более 80 инструментов через MCP с выделенными наступательными субагентами под каждую технологию (GraphQL, Spring Boot, ASP.NET, Node.js, Flask, PHP, Ruby) и ведёт цепочку доказательств для каждой находки.
   * https://github.com/BugTraceAI/BugTraceAI - BugTraceAI — многогентная платформа с открытым исходным кодом для авторизованного тестирования безопасности веб-приложений с проверкой, сбором доказательств и отчётностью.
   * https://github.com/TayfurYldz/headerproof - HeaderProof — это сканер активного типа developer-alpha с низким уровнем шума для авторизованного тестирования связанных с заголовками веб-уязвимостей, таких как неверная конфигурация CORS, расщепление ответа, кандидаты в отравление кэша и пути отражения, с явными шлюзами доказательств и подавлением ложных срабатываний.
   * https://github.com/ANVEAI/anve-offsec - Автономный ИИ-инженер безопасности и платформа bug bounty на Kali Linux с осведомленным рассуждением Hermes, sidecar-браузером OpenClaw Chromium и RAG векторной стратегии Qdrant. 🇮🇳
   * https://github.com/sullo/nikto - Сканер веб-серверов Nikto
   * http://www.tenable.com/products/nessus-vulnerability-scanner - Nessus Vulnerability Scanner
   * http://www.portswigger.net/burp/intruder.html - Burp Intruder — инструмент для автоматизации настраиваемых атак против веб-приложений.
   * http://www.openvas.org/ - Самый продвинутый в мире сканер и менеджер уязвимостей с открытым исходным кодом.
   * https://github.com/iSECPartners/Scout2 - Инструмент аудита безопасности для сред AWS
   * https://www.owasp.org/index.php/Category:OWASP_DirBuster_Project - Многопоточное Java-приложение, предназначенное для перебора имён каталогов и файлов на веб/приложенческих серверах.
   * https://www.owasp.org/index.php/ZAP - Zed Attack Proxy — простой в использовании интегрированный инструмент тестирования на проникновение для поиска уязвимостей в веб-приложениях.
   * https://github.com/vigolium/vigolium - Высокоточный сканер уязвимостей веба и API, сочетающий агентский ИИ с быстрым нативным движком; более 250 модулей обнаружения, покрывающих OWASP Top 10, аутентифицированные IDOR/BOLA и out-of-band тесты, а также вводы OpenAPI/Postman/Burp/cURL. Открытый исходный код, AGPL-3.0.
   * https://github.com/tecknicaltom/dsniff - dsniff — набор инструментов для аудита сети и тестирования на проникновение.
   * https://github.com/WangYihang/Webshell-Sniper - Управляйте своей webshell через терминал.
   * https://github.com/DanMcInerney/dnsspoof - Подмена DNS. Отбрасывает DNS-ответы от роутера и заменяет их поддельным DNS-ответом.
   * https://github.com/trustedsec/social-engineer-toolkit - Репозиторий Social-Engineer Toolkit (SET) от TrustedSec
   * https://github.com/sqlmapproject/sqlmap - Автоматический инструмент SQL-инъекций и захвата базы данных
   * https://github.com/beefproject/beef - The Browser Exploitation Framework Project
   * http://w3af.org/ - w3af — это Web Application Attack and Audit Framework
   * https://github.com/espreto/wpsploit - WPSploit, эксплуатация WordPress с помощью Metasploit
   * https://vulert.com/ - Vulert защищает ПО, обнаруживая уязвимости в открытых зависимостях — без доступа к вашему коду. Поддерживает Js, PHP, Java, Python и др.
   * https://github.com/WangYihang/Reverse-Shell-Manager - Менеджер обратной оболочки через терминал.
   * https://github.com/RUB-NDS/WS-Attacker - WS-Attacker — модульный фреймворк для тестирования веб-сервисов
   * https://github.com/wpscanteam/wpscan - WPScan — чёрноящичный сканер уязвимостей WordPress
   * https://github.com/own2pwn-fr/wp2shell-detect - Чёрноящичный, неинвазивный детектор цепочки предварительной RCE wp2shell в ядре WordPress (CVE-2026-63030 / CVE-2026-60137); снимает отпечаток версии ядра из открытых источников и помечает уязвимые установки, не эксплуатируя их
   * http://sourceforge.net/projects/paros/ Paros proxy
   * https://www.owasp.org/index.php/Category:OWASP_WebScarab_Project Web Scarab proxy
   * https://code.google.com/p/skipfish/ Skipfish, активный инструмент разведки безопасности веб-приложений
   * http://www.acunetix.com/vulnerability-scanner/ Acunetix Web Vulnerability Scanner
   * https://cystack.net/ CyStack Web Security Platform
   * http://www-03.ibm.com/software/products/en/appscan IBM Security AppScan
   * https://www.netsparker.com/web-vulnerability-scanner/ Netsparker web vulnerability scanner
   * http://www8.hp.com/us/en/software-solutions/webinspect-dynamic-analysis-dast/index.html HP Web Inspect
   * https://github.com/sensepost/wikto Wikto - Nikto для Windows с некоторыми дополнительными функциями
   * http://samurai.inguardians.com Samurai Web Testing Framework
   * https://code.google.com/p/ratproxy/ Ratproxy
   * http://www.websecurify.com Websecurify
   * http://sourceforge.net/projects/grendel/ Grendel-scan
   * https://tools.kali.org/web-applications/gobuster Инструмент перебора каталогов/файлов и DNS, написанный на Go
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
   * https://github.com/rastating/wordpress-exploit-framework Ruby-фреймворк для разработки и использования модулей, помогающих в тестировании на проникновение сайтов и систем на базе WordPress.
   * http://www.xss-payloads.com/ XSS Payloads для использования уязвимостей XSS, создания пользовательских полезных нагрузок, отработки навыков тестирования на проникновение.
   * https://github.com/joaomatosf/jexboss Инструмент проверки и эксплуатации JBoss (и других уязвимостей десериализации Java)
   * https://github.com/commixproject/commix Автоматизированный универсальный инструмент инъекции и эксплуатации команд ОС
   * https://github.com/pathetiq/BurpSmartBuster Плагин обнаружения контента Burp Suite, добавляющий интеллект в Buster!
   * https://github.com/GoSecure/csp-auditor Плагин Burp и ZAP для анализа заголовков CSP
   * https://github.com/ffleming/timing_attack Выполнять атаки по времени против веб-приложений
   * https://github.com/lalithr95/fuzzapi Fuzzapi — инструмент для пентеста REST API
   * https://github.com/owtf/owtf Offensive Web Testing Framework (OWTF)
   * https://github.com/nccgroup/wssip Приложение для захвата, изменения и отправки пользовательских данных WebSocket от клиента к серверу и наоборот.
   * https://github.com/PalindromeLabs/STEWS Набор инструментов для обнаружения, отпечатков и выявления уязвимостей WebSocket
   * https://github.com/tijme/angularjs-csti-scanner Автоматическое обнаружение инъекции клиентских шаблонов (обход/побег sandbox) для AngularJS (ACSTIS).
   * https://reshift.softwaresecured.com Инструмент анализа исходного кода для обнаружения и управления уязвимостями безопасности Java.
   * https://encoding.tools Веб-приложение для преобразования бинарных данных и строк, включая хэши и различные кодировки. Доступна офлайн-версия GPLv3.
   * https://gchq.github.io/CyberChef/ «Кибер-швейцарский армейский нож» для выполнения различных кодировок и преобразований бинарных данных и строк.
   * https://github.com/urbanadventurer/WhatWeb WhatWeb - Next generation web scanner
   * https://www.shodan.io/ Shodan - Поисковая система для нахождения уязвимых серверов
   * https://github.com/WangYihang/Webshell-Sniper Менеджер webshell через терминал
   * https://github.com/nil0x42/phpsploit PhpSploit - Многофункциональный C2-фреймворк, который незаметно закрепляется на веб-сервере через злонамеренную PHP-однострочник
   * https://webhint.io/ - webhint - webhint — настраиваемый инструмент линтинга, помогающий улучшить доступность, скорость, кросс-браузерную совместимость вашего сайта и многое другое, проверяя код на лучшие практики и распространённые ошибки.
   * https://gtfobins.github.io/ - gtfobins - GTFOBins — курируемый список Unix-бинарников, которые можно использовать для обхода локальных ограничений безопасности в неправильно настроенных системах.
   * https://github.com/HightechSec/git-scanner git-scanner - Инструмент для охоты за багами или пентеста, нацеленный на сайты, у которых открытые репозитории `.git` доступны публично
   * [Web Application Exploitation @ Rawsec Inventory](https://inventory.raw.pm/tools.html#title-tools-web-application-exploitation) - Полный список инструментов веб-пентеста
   * [Cyclops — новый браузер, который может автоматически обнаруживать уязвимости](https://github.com/v8blink/Chromium-based-XSS-Taint-Tracking/) - Cyclops — веб-браузер с функцией обнаружения XSS
   * https://caido.io/ - Веб-прокси
   * https://github.com/assetnote/kiterunner - Обнаружение API
   * https://github.com/owasp-amass/amass - разведка доменов
   * [https://columbus.elmasy.com/](https://columbus.elmasy.com/) - Проект Columbus — продвинутый сервис обнаружения поддоменов с быстрым, мощным и удобным API.
   * [BadUSB Script To Exfiltrate Passwords](https://github.com/MarkCyber/BadUSB/blob/main/HackStuff/CredentialHarvester.txt) - Извлекает все сохранённые пароли из Chrome, Firefox и Edge для сохранения на вторичную USB для дальнейшего анализа.
   * https://github.com/flibustier/jwt-online-cracker - Перебор JWT-токенов HS256, HS384 или HS512 из вашего браузера (полностью на стороне клиента).
   * [jwt-auditor](https://github.com/mohelobeid/jwt-auditor) - Офлайн-CLI для декодирования и аудита JWT на предмет alg:none, слабых HMAC-секретов и путаницы RS256→HS256.
   * https://github.com/lukechilds/reverse-shell - Легко запоминающаяся обратная оболочка, которая должна работать на большинстве Unix-подобных систем.
   * https://github.com/momenbasel/keyFinder - Расширение Chrome, которое пассивно сканирует веб-страницы на утечки API-ключей, токенов и секретов, используя более 80 шаблонов обнаружения и энтропию Шеннона по 10 поверхностям атак.
   * https://github.com/DenisPodgurskii/pentestkit - Основанный на браузере сканер уязвимостей для рабочих процессов bug bounty и пентеста, сочетающий возможности DAST, SAST, IAST и SCA для обнаружения проблем безопасности времени выполнения, уровня исходного кода, интерактивных и связанных с зависимостями.
- [SaaSFort](https://saasfort.com/scan) - Бесплатное 60-секундное внешнее сканирование позиции безопасности / NIS2, оценка A-F, без регистрации.
- [ARS3NAL](https://github.com/inflictx/Arsenal) - Арсенал с приоритетом офлайна, с возможностью поиска: ~1500 полезных нагрузок, генератор команд, GTFOBins, словари, встроенный CyberChef, обратные оболочки и 70 чек-листов.
- [Mozilla - HTTP Observatory](https://developer.mozilla.org/en-US/observatory) - Разработанный Mozilla, HTTP Observatory проводит глубокую оценку HTTP-заголовков сайта и других ключевых настроек безопасности.
- [HTTP Security Report](https://httpsecurityreport.com/) - Получите мгновенный отчёт о том, насколько ваш сайт соответствует лучшим практикам.
- [ImmuniWeb CyberScore](https://www.immuniweb.com/cyberscore/) - бесплатная оценка кибербезопасности, приватности и ИИ-безопасности вашей компании, партнёров или поставщиков
- [ImmuniWeb - Website Security Test](https://www.immuniweb.com/websec/) - Проверяет уязвимости веб-безопасности, защиту от ИИ-ботов, заголовки безопасности и приватности HTTP, конфигурацию DNSSEC, CSP и соответствие GDPR и PCI DSS. 10 бесплатных тестов в месяц (без аккаунта)
- [Pentest Tools - Website Vulnerability Scanner](https://pentest-tools.com/website-vulnerability-scanning/website-scanner) - обнаруживает SQLi, XSS, инъекцию команд, XXE и более 75 других уязвимостей веб-приложений
- [Pentest Tools - Network Vulnerability Scanner](https://pentest-tools.com/network-vulnerability-scanning/network-security-scanner-online) - онлайн-инструмент безопасности, предназначенный для выявления уязвимостей, неверных конфигураций, устаревших сервисов и открытых портов в сетевой инфраструктуре
- [UpClaw](https://github.com/okdkebm/UpClaw) - CLI для веб-пентеста на базе ИИ; один файл Python без зависимостей (29 встроенных проверок + 16 адаптеров внешних инструментов + отчёты с доказательствами).
- [HTTP Detection Agent](https://github.com/ai-blueteam/http-detection-agent) - открытый, локально-приоритетный детектор HTTP-атак: Rust-CLI с 76 обнаружениями по 62 семействам поведения (инъекция, обход каталогов, request smuggling, SSRF, XXE, десериализация и др.), а также локальный MCP-сервер для триажа под управлением агентов

## Шпаргалки

   * http://n0p.net/penguicon/php_app_sec/mirror/xss.html - Шпаргалка по XSS
   * https://highon.coffee/blog/lfi-cheat-sheet/ - Шпаргалка по LFI
   * https://highon.coffee/blog/reverse-shell-cheat-sheet/ - Шпаргалка по Reverse Shell
   * https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/ - Шпаргалка по SQL-инъекциям
   * https://www.gracefulsecurity.com/path-traversal-cheat-sheet-windows/ - Шпаргалка по обходу каталогов: Windows
   * [Pentest Mindmap](https://pentestmindmap.com/en) - Интерактивная карта знаний с более чем 11 600 командами пентеста в 32 категориях. С поиском и копированием в один клик.

## Docker-образы для тестирования на проникновение

   * `docker pull kalilinux/kali-linux-docker` [официальный Kali Linux](https://hub.docker.com/r/kalilinux/kali-linux-docker/)
   * `docker pull blackarchlinux/blackarch` [официальный BlackArch Linux](https://hub.docker.com/r/blackarchlinux/blackarch)
   * `docker pull owasp/zap2docker-stable` - [официальный OWASP ZAP](https://github.com/zaproxy/zaproxy)
   * `docker pull wpscanteam/wpscan` - [официальный WPScan](https://hub.docker.com/r/wpscanteam/wpscan/)
   * `docker pull metasploitframework/metasploit-framework` - [docker-metasploit](https://hub.docker.com/r/metasploitframework/metasploit-framework/)
   * `docker pull citizenstig/dvwa` - [Damn Vulnerable Web Application (DVWA)](https://hub.docker.com/r/citizenstig/dvwa/)
   * `docker pull bkimminich/juice-shop` [OWASP Juice Shop](https://hub.docker.com/r/bkimminich/juice-shop)
   * `docker pull wpscanteam/vulnerablewordpress` - [Уязвимая установка WordPress](https://hub.docker.com/r/wpscanteam/vulnerablewordpress/)
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

## Уязвимости

   * http://cve.mitre.org/ - Common Vulnerabilities and Exposures. Стандарт для имён уязвимостей информационной безопасности
   * https://www.exploit-db.com/ - The Exploit Database – исчерпывающий архив эксплойтов, шеллкодов и материалов по безопасности.
   * http://0day.today/ - Inj3ct0r — это лучшая база данных эксплойтов и уязвимостей и отличный ресурс для исследователей уязвимостей и профессионалов безопасности.
   * http://www.securityfocus.com/ - С момента своего основания в 1999 году SecurityFocus остаётся оплотом сообщества безопасности.
   * http://packetstormsecurity.com/ - Глобальный ресурс безопасности
   * https://wpvulndb.com/ - WPScan Vulnerability Database
   * https://snyk.io/vuln/ - Vulnerability DB, подробная информация и рекомендации по устранению известных уязвимостей.
   * https://stellastra.com/cipher-suite - База данных сотен наборов шифров TLS и их статуса безопасности.
   * https://vulert.com/vuln-db - Vulert помогает разработчикам защищать их ПО, отслеживая и предупреждая об уязвимостях в открытых зависимостях — без доступа к их коду. Поддерживает зависимости Js, PHP, Java, Python и многие другие.
   * https://vulncheck.com/xdb/ - Индекс кода доказательства концепции эксплойтов в Git-репозиториях.
   * https://labs.jamessawyer.co.uk/cves/ - CVE PoC Search предоставляет поиск доказательства концепции от CVE к GitHub, чтобы быстро перейти от веб-уязвимости к публичному коду эксплойта.

## Курсы

   * https://pwn.guide/ - Платформа обучения кибербезопасности, с около 100 уроками, примерно 25 из которых посвящены веб-взлому и защите сайтов.
   * https://www.offensive-security.com/information-security-training/advanced-web-attack-and-exploitation/ Offensive Security Advanced Web Attacks and Exploitation (вживую)
   * https://www.sans.org/course/web-app-penetration-testing-ethical-hacking Sans SEC542: Web App Penetration Testing and Ethical Hacking
   * https://www.sans.org/course/advanced-web-app-penetration-testing-ethical-hacking Sans SEC642: Advanced Web App Penetration Testing and Ethical Hacking
   * http://opensecuritytraining.info/ - Open Security Training
   * http://securitytrainings.net/security-trainings/ - Security Exploded Training
   * http://www.securitytube.net/ - Крупнейший в мире портал Infosec и хакинга.
   * https://www.hacker101.com/ - Бесплатный курс по веб-безопасности от [Hackerone](https://www.hackerone.com)
   * https://www.darkrelay.com/courses/professional-penetration-tester - Курс пентеста в стиле Zero-Hero от [DarkRelay Security Labs](https://www.darkrelay.com)

## Сайты онлайн-демонстрации взлома

   * http://testasp.vulnweb.com/ - Тестовый и демонстрационный сайт Acunetix ASP
   * http://testaspnet.vulnweb.com/ - Тестовый и демонстрационный сайт Acunetix ASP.Net
   * http://testphp.vulnweb.com/ - Тестовый и демонстрационный сайт Acunetix PHP
   * http://crackme.cenzic.com/kelev/view/home.php - Crack Me Bank
   * http://zero.webappsecurity.com/ - Zero Bank
   * http://demo.testfire.net/ - Altoro Mutual
   * https://public-firing-range.appspot.com/ - Firing Range — полигон для автоматизированных сканеров безопасности веб-приложений.
   * https://xss-game.appspot.com/ - XSS-челлендж
   * https://google-gruyere.appspot.com/ Google Gruyere, эксплойты и защита веб-приложений
   * https://ginandjuice.shop/catalog
   * https://pentest-ground.com/ Pentest-Ground — бесплатная игровая площадка с намеренно уязвимыми веб-приложениями и сетевыми сервисами.
  * [HackSimulator](https://chatgpt.com/g/g-jnT7HlNeK-hacksimulator) — это GPT, созданный [MarkCyber](https://github.com/MarkCyber), в котором ChatGPT 4 выступает как хакерский CTF. Этот GPT спросит ваш уровень опыта и что вы хотите улучшить, прежде чем смоделировать машину/приложение для взлома, используя чат как место для ввода терминальных команд. Поскольку это работает через ИИ, он меняется и подстраивается под ваш уровень, и вы можете попросить помощи, если застряли.

## Лаборатории
   * https://portswigger.net/web-security - Web Security Academy: бесплатное онлайн-обучение от PortSwigger
   * http://www.cis.syr.edu/~wedu/seed/all_labs.html - Разработка учебных лабораторий для образования в области компьютерной безопасности
   * https://www.vulnhub.com/ - Виртуальные машины для локального тестирования на проникновение.
   * https://pentesterlab.com/ - PentesterLab — простой и отличный способ изучить тестирование на проникновение.
   * https://codereviewlab.com/ - Code Review Lab — платформа практического обучения проверке кода.
   * https://github.com/jerryhoff/WebGoat.NET - Это веб-приложение — обучающая платформа по распространённым недостаткам безопасности веба.
   * http://www.dvwa.co.uk/ - Damn Vulnerable Web Application (DVWA)
   * http://sourceforge.net/projects/lampsecurity/ - LAMPSecurity Training
   * https://github.com/Audi-1/sqli-labs - Лабы SQLI для тестирования на основе ошибок, слепого булева, по времени.
   * https://github.com/paralax/lfi-labs - небольшой набор PHP-скриптов для отработки эксплуатации уязвимостей LFI, RFI и инъекции CMD
   * https://hack.me/ - Создавайте, размещайте и делитесь уязвимыми веб-приложениями в песочнице бесплатно
   * http://azcwr.org/az-cyber-warfare-ranges - Бесплатный реальный Capture the Flag, синяя команда, красная команда, кибер-полигон для начинающих и продвинутых. Необходимо использовать мобильный телефон для отправки SMS с запросом доступа к полигону.
   * https://github.com/adamdoupe/WackoPicko - WackoPicko — уязвимое веб-приложение, используемое для тестирования сканеров уязвимостей веб-приложений.
   * https://github.com/rapid7/hackazon - Hackazon — бесплатный уязвимый тестовый сайт, представляющий собой интернет-витрину, построенную на тех же технологиях, что и современные насыщенные клиентские и мобильные приложения.
   * https://github.com/RhinoSecurityLabs/cloudgoat - Инструмент настройки инфраструктуры AWS «Vulnerable by Design» от Rhino Security Labs
   * https://www.hackthebox.eu/ - Hack The Box — онлайн-платформа, позволяющая проверять и развивать ваши навыки кибербезопасности.
   * https://github.com/tegal1337/0l4bs - 0l4bs — лаборатория межсайтового скриптинга для энтузиастов безопасности веб-приложений.
   * https://github.com/oliverwiegers/pentest_lab - Локальная пентест-лаборатория на базе docker compose.
   * https://ginandjuice.shop/catalog
   * https://github.com/dolevf/Damn-Vulnerable-GraphQL-Application
   * https://labex.io/skilltrees/cybersecurity - LabEx — онлайн-платформа для повышения навыков кибербезопасности через практические лабы.
   * https://pythoncyber.go.ro - CyberPython помогает вам проводить собственные исследования для решения задач, эксплуатации CVE и написания хороших скриптов.
   * https://github.com/kOaDT/oss-oopssec-store - OSS – OopsSec Store: намеренно уязвимое приложение электронной коммерции, построенное на Next.js и React для обучения веб-безопасности и практики CTF.
   * https://github.com/momenbasel/htb-writeups - HTB Writeups: самая полная подборка отчётов Hack The Box с более чем 500 машинами, 400+ заданиями, ProLabs, Sherlocks, CTF-ивентами и шпаргалками.

## SSL

   * https://www.ssllabs.com/ssltest/index.html - Этот сервис проводит глубокий анализ конфигурации любого SSL-веб-сервера в публичном интернете.
   * https://certobserver.com/ct-search - Поиск в журналах прозрачности сертификатов SSL/TLS-сертификатов, выпущенных для домена.
   * https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html - Strong SSL Security on nginx
   * https://weakdh.org/ - Weak Diffie-Hellman and the Logjam Attack
   * https://letsencrypt.org/ - Let’s Encrypt — новый удостоверяющий центр: бесплатный, автоматизированный и открытый.
   * https://filippo.io/Heartbleed/ - Проверщик (сайт и инструмент) для CVE-2014-0160 (Heartbleed).
   * https://testssl.sh/ - Командная строка для проверки шифров, протоколов и криптографических недостатков TLS/SSL сайта.
   * [Scorifya](https://www.scorifya.com) - Оценка безопасности 0–100 для любого сайта, охватывающая TLS, заголовки безопасности (CSP, HSTS, X-Frame-Options), cookie, DNS и почтовые сигналы (SPF, DKIM, DMARC) с ранжированными шагами исправления.
   * [ImmuniWeb SSL Security Test](https://www.immuniweb.com/ssl/) - бесплатный онлайн-инструмент, проверяющий безопасность конфигурации SSL/TLS вашего сайта или почтового сервера. Проверяет соответствие стандартам безопасности, таким как NIST, HIPAA, PCI DSS и GDPR. 10 бесплатных тестов в месяц (без аккаунта)

## Безопасность Ruby on Rails

   * http://brakemanscanner.org/ - Статический анализатор уязвимостей безопасности для приложений Ruby on Rails.
   * https://github.com/rubysec/ruby-advisory-db - База данных уязвимых Ruby Gems
   * https://github.com/rubysec/bundler-audit - Проверка на уровне патчей для Bundler
   * https://github.com/hakirisec/hakiri_toolbelt - Hakiri Toolbelt — интерфейс командной строки платформы Hakiri.
   * https://hakiri.io/facets - Сканирование Gemfile.lock на уязвимости.
   * http://rails-sqli.org/ - Эта страница перечисляет многие методы и опции запросов в ActiveRecord, которые не очищают сырые SQL-аргументы и не предназначены для вызова с небезопасным пользовательским вводом.
   * https://github.com/0xsauby/yasuo - Ruby-скрипт, который сканирует уязвимые и эксплуатируемые сторонние веб-приложения в сети
