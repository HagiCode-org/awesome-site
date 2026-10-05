# awesome-threat-intelligence
Подборка качественных ресурсов по разведке киберугроз

Краткое определение разведки киберугроз: *основанные на фактах знания, включающие контекст, механизмы, индикаторы, последствия и практические рекомендации об уже существующей или возникающей угрозе либо опасности для активов, которые помогают принимать решения о мерах реагирования на эту угрозу или опасность*.

Вы можете [внести вклад](CONTRIBUTING.md).

- [Источники](#sources)
- [Форматы](#formats)
- [Фреймворки и платформы](#frameworks-and-platforms)
- [Инструменты](#tools)
- [Исследования, стандарты и книги](#research)


## Источники

Большинство перечисленных ниже ресурсов предоставляют списки и/или API для получения по возможности актуальной информации об угрозах.
Некоторые считают эти источники разведданными об угрозах, однако мнения на этот счёт расходятся.
Для создания полноценной разведки киберугроз необходим определённый отраслевой или бизнес-анализ.

<table>
    <tr>
        <td>
            <a href="https://www.abuseipdb.com/" target="_blank">AbuseIPDB</a>
        </td>
        <td>
            AbuseIPDB Это проект, посвященный борьбе с распространением хакеров, спамеров и оскорбительной деятельности в Интернете. Его миссия состоит в том, чтобы помочь сделать Интернет более безопасным, предоставляя центральный черный список для веб-мастеров, системных администраторов и других заинтересованных сторон, чтобы сообщать и находить IP-адреса, которые были связаны с вредоносной деятельностью в Интернете.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://docs.google.com/spreadsheets/u/1/d/1H9_xaxQHpWaa4O_Son4Gx0YOIzlcBWMsdvePFX68EKU/pubhtml" target="_blank">APT Groups and Operations</a>
        </td>
        <td>
            Электронная таблица, содержащая информацию и информацию о группах, операциях и тактике APT.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.binarydefense.com/banlist.txt" target="_blank">Binary Defense IP Banlist</a>
        </td>
        <td>
            Binary Defense Systems Artillery Threat Intelligence Feed и IP Banlist Feed.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.circl.lu/projects/bgpranking/" target="_blank">BGP Ranking</a>
        </td>
        <td>
            Рейтинг ASN с самым вредоносным контентом.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intel.malwaretech.com/" target="_blank">Botnet Tracker</a>
        </td>
        <td>
            Отслеживает несколько активных ботнетов.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.botvrij.eu/">BOTVRIJ.EU</a>
        </td>
        <td>
            Botvrij.eu Предоставляет различные наборы IOC с открытым исходным кодом, которые вы можете использовать в своих устройствах безопасности для обнаружения возможной вредоносной активности.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://danger.rulez.sk/index.php/bruteforceblocker/download/" target="_blank">BruteForceBlocker</a>
        </td>
        <td>
            BruteForceBlocker скрипт perl, который отслеживает sshd-логи сервера и идентифицирует атаки грубой силы, которые он затем использует для автоматической настройки правил блокировки брандмауэра и отправки этих IP-адресов обратно на сайт проекта; <a href="http://danger.rulez.sk/projects/bruteforceblocker/blist.php">http://danger.rulez.sk/projects/bruteforceblocker/blist.php</a>.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://osint.bambenekconsulting.com/feeds/c2-ipmasterlist.txt" target="_blank">C&amp;C Tracker</a>
        </td>
        <td>
            Подача известного, активного и не синхолированного C&amp;C IP-адреса от Bambenek Consulting. Требуется лицензия для коммерческого использования.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://certstream.calidog.io/" target="_blank">CertStream</a>
        </td>
        <td>
            Поток обновления журнала прозрачности сертификатов в реальном времени. Сертификаты SSL выдаются в режиме реального времени.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.ccssforum.org/malware-certificates.php" target="_blank">CCSS Forum Malware Certificates</a>
        </td>
        <td>
            Ниже приведен список цифровых сертификатов, которые, как сообщается на форуме, могут быть связаны с вредоносными программами для различных органов по сертификации. Эта информация предназначена для предотвращения использования компаниями цифровых сертификатов для придания легитимности вредоносным программам и поощрения быстрого отзыва таких сертификатов.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://cinsscore.com/list/ci-badguys.txt" target="_blank">CI Army List</a>
        </td>
        <td>
        Подмножество коммерческих <a href="http://cinsscore.com/">CINS Score</a> Список, ориентированный на плохо оцененные IP-адреса, которые в настоящее время отсутствуют в других списках угроз.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://s3-us-west-1.amazonaws.com/umbrella-static/index.html" target="_blank">Cisco Umbrella</a>
        </td>
        <td>
            Вероятный белый список из 1 миллиона лучших сайтов, разрешенных Cisco Umbrella (был OpenDNS).
	</td>
    </tr>
    <tr>
        <td>
            <a href="https://cloudmersive.com/virus-api" target="_blank">Cloudmersive Virus Scan</a>
        </td>
        <td>
            API Cloudmersive Virus Scan сканируют файлы, URL-адреса и облачное хранилище для вирусов. Они используют постоянно обновляемые подписи для миллионов угроз и передовые возможности высокопроизводительного сканирования. Услуга бесплатна, но требует регистрации учетной записи для получения личного ключа API.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.crowdsec.net/" target="_blank">CrowdSec Console</a>
        </td>
        <td>
            Крупнейший краудсорсинговый CTI, обновленный в режиме реального времени, благодаря CrowdSec Программное обеспечение следующего поколения с открытым исходным кодом, бесплатное и совместное программное обеспечение IDS / IPS. <a href="https://crowdsec.net" target="_blank">CrowdSec</a>  Он способен анализировать поведение посетителей и обеспечивать адаптированную реакцию на все виды атак. Пользователи могут делиться своими предупреждениями об угрозах с сообществом и извлекать выгоду из сетевого эффекта. IP-адреса собираются из реальных атак и не поступают исключительно из сети.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cybercure.ai/" target="_blank">Cyber Cure free intelligence feeds</a>
        </td>
        <td>
            Cyber Cure предлагает бесплатные каналы кибер-угроз со списками IP-адресов, которые в настоящее время заражены и атакуют в Интернете. Есть список URL-адресов, используемых вредоносными программами, и список хеш-файлов известных вредоносных программ, которые в настоящее время распространяются. CyberCure использует датчики для сбора информации с очень низким уровнем ложноположительных результатов. Подробно <a href="https://docs.cybercure.ai" target="_blank">documentation</a> Также доступен.
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/community/ctix-feeds" target="_blank">Cyware Threat Intelligence Feeds</a>
        </td>
        <td>
            Информационные каналы Cyware Threat Intelligence предоставляют вам ценные данные об угрозах из широкого спектра открытых и надежных источников, чтобы обеспечить консолидированный поток ценной и действенной информации об угрозах. Наши каналы информации об угрозах полностью совместимы с STIX 1.x и 2.0, предоставляя вам последнюю информацию о вредоносных хэшах, IP-адресах и доменах, обнаруженных по всему миру в режиме реального времени.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://dataplane.org/" target="_blank">DataPlane.org</a>
        </td>
        <td>
          DataPlane.org Это основанный на сообществе интернет-данные, каналы и измерительный ресурс для операторов операторами. Мы предоставляем надежные и надежные услуги бесплатно.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://focsec.com" target="_blank">Focsec.com</a>
        </td>
        <td>
          Focsec.com предоставляет API для обнаружения запросов VPN, Proxys, Bots и TOR. Всегда актуальные данные помогают обнаружить подозрительные логины, мошенничество и злоупотребления. Примеры кода можно найти в <a href="https://docs.focsec.com" target="_blank">documentation</a>.
        </td>
   </tr>	
   <tr>
        <td>
            <a href="https://osint.digitalside.it/" target="_blank">DigitalSide Threat-Intel</a>
        </td>
        <td>
          Содержит наборы индикаторов Open Source Cyber Threat Intelligence, в основном основанных на анализе вредоносных программ и скомпрометированных URL-адресах, IP-адресах и доменах. Цель этого проекта заключается в разработке и тестировании новых способов охоты, анализа, сбора и обмена соответствующими МК, которые будут использоваться SOC/CSIRT/CERT/индивидуалами с минимальными усилиями. Отчеты делятся тремя способами: <a href="https://osint.digitalside.it/Threat-Intel/stix2/" target="_blank">STIX2</a>, <a href="https://osint.digitalside.it/Threat-Intel/csv/" target="_blank">CSV</a> и <a href="https://osint.digitalside.it/Threat-Intel/digitalside-misp-feed/" target="_blank">MISP Feed</a>Отчеты публикуются также в <a href="https://github.com/davidonzo/Threat-Intel/" target="_blank">project's Git repository</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/martenson/disposable-email-domains">Disposable Email Domains</a>
        </td>
        <td>
            Коллекция анонимных или одноразовых доменов электронной почты, обычно используемых для спама / злоупотреблений.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://securitytrails.com/dns-trails">DNS Trails</a>
        </td>
        <td>
            Бесплатный источник информации для текущей и исторической информации DNS, информации WHOIS, поиска других веб-сайтов, связанных с определенными IP-адресами, знаниями и технологиями поддоменов. Существует A <a href="https://securitytrails.com/">IP and domain intelligence API available</a> Тоже самое. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feed.ellio.tech" target="_blank">ELLIO: IP Feed (community free version)</a>
        </td>
        <td>
            Список угроз известных вредоносных IP-адресов, которые, как ожидается, будут представлять потенциальные угрозы для вашей сети в ближайшем будущем, известные доброкачественные сканеры и IP-адреса субъектов с неизвестными намерениями. Он обеспечивает 24-часовую задержку для личного, некоммерческого использования, но по-прежнему обеспечивает исключительную защиту по сравнению с другими открытыми списками угроз IP.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/fwrules/" target="_blank">Emerging Threats Firewall Rules</a>
        </td>
        <td>
            Коллекция правил для нескольких типов брандмауэров, включая iptables, PF и PIX.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/blockrules/" target="_blank">Emerging Threats IDS Rules</a>
        </td>
        <td>
            Коллекция Snort и Suricata <i>правила</i> Файлы, которые можно использовать для оповещения или блокировки.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exonerator.torproject.org/" target="_blank">ExoneraTor</a>
        </td>
        <td>
            The ExoneraTor Сервис поддерживает базу данных IP-адресов, которые были частью сети Tor. Он отвечает на вопрос, была ли ретрансляция Tor запущена на заданном IP-адресе в заданную дату.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.exploitalert.com/" target="_blank">Exploitalert</a>
        </td>
        <td>
            Список последних выпущенных эксплойтов.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intercept.sh/threatlists/" target="_blank">FastIntercept</a>
        </td>
        <td>
	    Intercept Security размещает ряд бесплатных списков репутации IP из своей глобальной сети.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feodotracker.abuse.ch/" target="_blank">ZeuS Tracker</a>
        </td>
        <td>
            Трекер Feodo <a href="https://abuse.ch/" target="_blank">abuse.ch</a> Следы трояна Феодо.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://iplists.firehol.org/" target="_blank">FireHOL IP Lists</a>
        </td>
        <td>
            400+ Публично доступные IP-каналы, проанализированные для документирования их эволюции, геокарты, возраста IP-адресов, политики удержания, дублирования. Сайт посвящен киберпреступности (атаки, злоупотребления, вредоносные программы).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://fraudguard.io/" target="_blank">FraudGuard</a>
        </td>
        <td>
            FraudGuard Сервис предназначен для обеспечения простого способа проверки использования путем постоянного сбора и анализа интернет-трафика в режиме реального времени.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://greynoise.io/" target="_blank">GreyNoise</a>
        </td>
        <td>
            GreyNoise собирает и анализирует данные о сканирующей активности в Интернете. Он собирает данные о доброкачественных сканерах, таких как Shodan.io, а также о вредоносных игроках, таких как черви SSH и telnet. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://griffinguard.io/" target="_blank">GriffinGuard</a>
        </td>
        <td>
            GriffinGuard Это платформа кибербезопасности, обеспечивающая разведку угроз в режиме реального времени путем постоянного анализа глобального интернет-трафика и моделей эксплуатации. Он обеспечивает бесплатный поиск данных, а некоторые бесплатные. IP blocklistС.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://honeydb.io/" target="_blank">HoneyDB</a>
        </td> 
        <td>
            HoneyDB Предоставляет данные о активности медоносных пятен в реальном времени. Эти данные поступают из медовых котлов, развернутых в Интернете с использованием <a href="https://github.com/foospidy/HoneyPy" target="_blank">HoneyPy</a> Горшок с медом. Кроме того, HoneyDB предоставляет API доступ к собранной активности медоносных котлов, которая также включает агрегированные данные из различных лент Twitter.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SupportIntelligence/Icewater" target="_blank">Icewater</a>
        </td>
        <td>
            12 805 правил свободной яры, созданных проектом Icewater.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://infosec.cert-pa.it" target="_blank">Infosec - CERT-PA</a>
        </td>
        <td>
            Образцы вредоносных программ <a href="https://infosec.cert-pa.it/analyze/submission.html" target="_blank">collection and analysis</a>, <a href="https://infosec.cert-pa.it/analyze/statistics.html" target="_blank">blocklist service, <a href="https://infosec.cert-pa.it/cve.html">vulnerabilities database</a> и многое другое. Создан и управляется компанией CERT-PA.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://labs.inquest.net" target="_blank">InQuest Labs</a>
        </td>
        <td>
            Открытый, интерактивный и управляемый API портал данных для исследователей безопасности. Поиск большого корпуса образцов файлов, совокупной информации о репутации и МОК, извлеченных из открытых источников. Дополните разработку YARA инструментами для генерации триггеров, работы со смешанным случаем и генерации совместимых с базовыми 64 регулярных выражений.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.iblocklist.com/lists" target="_blank">I-Blocklist</a>
        </td>
        <td>
            I-Blocklist Поддерживает несколько типов списков, содержащих IP-адреса, принадлежащие к различным категориям. Некоторые из этих основных категорий включают страны, провайдеров и организации. Другие списки включают веб-атаки, TOR, шпионские программы и прокси. Многие из них бесплатны и доступны в различных форматах.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ipasis.com" target="_blank">IPASIS</a>
        </td>
        <td>
            IPASIS API обнаружения ботов и предотвращения мошенничества в режиме реального времени, который объединяет IP-аналитику, обнаружение прокси / VPN / Tor и проверку электронной почты в один вызов API. Каждый запрос возвращает оценку доверия взаимодействия (0-)100) Время отклика до 20 мс. Бесплатный уровень включает 1000 запросов в день. <a href="https://ipasis.com/docs" target="_blank">API documentation</a> и <a href="https://ipasis.com/scan" target="_blank">live scanner</a> Доступны.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/stamparm/ipsum/master/ipsum.txt" target="_blank">IPsum</a>
        </td>
        <td>
            IPsum Угроза разведки на основе 30+ различные общедоступные списки подозрительных и/или вредоносных IP-адресов. Все списки автоматически извлекаются и анализируются ежедневно (24 часа), и конечный результат выталкивается в это хранилище. Список состоит из IP-адресов вместе с общим количеством (черного) списка (для каждого). Созданный и управляемый <a href="https://twitter.com/stamparm">Miroslav Stampar</a>.
        </td>
    </tr>
    <tr>
	<td>
            <a href="https://jamesbrine.com.au" target="_blank">James Brine Threat Intelligence Feeds</a>
        </td>
        <td>
		JamesBrine предоставляет ежедневные каналы разведки угроз для вредоносных IP-адресов из международных точек на облачной и частной инфраструктуре, охватывающих различные протоколы, включая SSH, FTP, RDP, GIT, SNMP и REDIS. МОК предыдущего дня доступен в STIX2 а также дополнительные МОК, такие как подозрительные URI и недавно зарегистрированные домены, которые имеют высокую вероятность использования в фишинговых кампаниях.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/datafeeds" target="_blank">Kaspersky Threat Data Feeds</a>
        </td>
        <td>
Постоянно обновляйте и информируйте свой бизнес или клиентов о рисках и последствиях, связанных с киберугрозами. Данные в режиме реального времени помогают более эффективно смягчать угрозы и защищаться от атак еще до их запуска. Demo Data Feeds содержат усеченные наборы IoC (до 1%) по сравнению с коммерческими.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://majestic.com/reports/majestic-million" target="_blank">Majestic Million</a>
        </td>
        <td>
            Вероятный белый список из 1 миллиона лучших веб-сайтов, согласно рейтингу Majestic. Сайты заказываются по количеству ссылающихся подсетей. Подробнее о рейтинге можно узнать на их <a href="https://blog.majestic.com/development/majestic-million-csv-daily/" target="_blank">blog</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maldatabase.com/" target="_blank">Maldatabase</a>
        </td>
        <td>
            Maldatabase предназначена для помощи в изучении данных вредоносных программ и разведке угроз. Предоставленные данные содержат хорошую информацию о, среди других полей, контактных доменах, списке выполняемых процессов и удаленных файлах по каждому образцу. Эти каналы позволяют улучшить инструменты мониторинга и безопасности. Бесплатные услуги доступны для исследователей и студентов. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malpedia.caad.fkie.fraunhofer.de/" target="_blank">Malpedia</a>
        </td>
        <td>
Основная цель Malpedia - предоставить ресурс для быстрой идентификации и оперативного контекста при расследовании вредоносных программ. Открытость для кураторских взносов должна обеспечивать подотчетный уровень качества для содействия содержательным и воспроизводимым исследованиям. 
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://www.malshare.com/" target="_blank">MalShare.com</a>
        </td>
        <td>
            MalShare Project является публичным хранилищем вредоносных программ, которое предоставляет исследователям бесплатный доступ к образцам.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.maltiverse.com/" target="_blank">Maltiverse</a>
        </td>
        <td>
            Maltiverse Project - это большая и обогащенная база данных IoC, где можно делать сложные запросы и агрегации для изучения вредоносных кампаний и их инфраструктур. Он также имеет большой объемный запрос IoC.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bazaar.abuse.ch/" target="_blank">MalwareBazaar</a>
        </td>
        <td>
            MalwareBazaar Это проект из abuse.ch с целью обмена образцами вредоносных программ с сообществом infosec, поставщиками AV и поставщиками разведки угроз.
        </td>
    </tr>	
    <tr>
        <td>
            <a href="https://www.malwaredomainlist.com/" target="_blank">Malware Domain List</a>
        </td>
        <td>
            Поисковый список вредоносных доменов, которые также выполняют обратный lookups и списки регистрантов, ориентированные на фишинг, трояны и наборы эксплойтов.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.malwarepatrol.net/" target="_blank">Malware Patrol</a>
        </td>
        <td>
            Malware Patrol предоставляет списки блоков, данные и информацию об угрозах компаниям всех размеров. Поскольку наша специализация — это кибер-разведка, все наши ресурсы направлены на то, чтобы убедиться, что она максимально высокого качества. Мы считаем, что команда безопасности и ее инструменты так же хороши, как и используемые данные. Это означает, что наши каналы не заполнены непроверенными индикаторами. Мы ценим качество выше количества. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malware-traffic-analysis.net/" target="_blank">Malware-Traffic-Analysis.net</a>
        </td>
        <td>
            Этот блог посвящен сетевому трафику, связанному с вредоносными инфекциями. Содержит упражнения по анализу трафика, учебные пособия, образцы вредоносных программ, pcap-файлы вредоносного сетевого трафика и технические сообщения в блоге с наблюдениями.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.malwaredomains.com/" target="_blank">MalwareDomains.com</a>
        </td>
        <td>
            Проект DNS-BH создает и поддерживает список доменов, которые, как известно, используются для распространения вредоносных программ и шпионских программ. Они могут использоваться как для обнаружения, так и для предотвращения (запросы DNS).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opswat.com/developers/threat-intelligence-feed" target="_blank">MetaDefender Cloud</a>
        </td>
        <td>
            MetaDefender Cloud Threat Intelligence Feeds содержит новые хеш-сигналы вредоносных программ, включая MD5, SHA1 и SHA.256. Эти новые вредоносные хеши были замечены MetaDefender Cloud в течение последних 24 часов. Файлы ежедневно обновляются с недавно обнаруженными и зарегистрированными вредоносными программами для обеспечения оперативной и своевременной разведки угроз.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.nothink.org">NoThink!</a>
        </td>
        <td>SNMP, SSH, Telnet внесли IP-адреса из Honeypots Matteo Cantoni</td>
    </tr>
    <tr>
        <td>
            <a href="https://services.normshield.com" target="_blank">NormShield Services</a>
        </td>
        <td>
            NormShield Services Предоставьте тысячи данных о домене (включая информацию о том, кто это), которые могут возникнуть в результате потенциальных фишинговых атак. Доступны также услуги взлома и черного списка. Бесплатная регистрация на государственные услуги для постоянного мониторинга.
        </td>
    </tr> 
    <tr>
        <td>
            <a href="https://novasense-threats.com" target="_blank">NovaSense Threats</a>
        </td>
        <td>
            NovaSense является центром разведки угроз Snapt и предоставляет информацию и инструменты для упреждающей защиты от угроз и смягчения атак. NovaSense защищает клиентов всех размеров от злоумышленников, злоупотреблений, ботнетов, DoS-атак и многого другого.
        </td>
    </tr>     
    <tr>
        <td>
            <a href="https://www.obstracts.com/" target="_blank">Obstracts</a>
        </td>
        <td>
            RSS-ридер для команд кибербезопасности. Превратите любой блог в структурированный и действенный анализ угроз.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://openphish.com/phishing_feeds.html" target="_blank">OpenPhish Feeds</a>
        </td>
        <td>
            OpenPhish получает URL-адреса из нескольких потоков и анализирует их с помощью собственных алгоритмов обнаружения фишинга. Существуют бесплатные и коммерческие предложения.
        </td>
    </tr>
        <tr>
        <td>
            <a href="https://feed.seguranca-informatica.pt/index.php" target="_blank">0xSI_f33d</a>
        </td>
        <td>
            Бесплатный сервис для обнаружения возможных фишинговых и вредоносных доменов, занесенных в черный список IP-адресов в португальском киберпространстве.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.phishtank.com/developer_info.php" target="_blank">PhishTank</a>
        </td>
        <td>
            PhishTank Предоставляет список подозрительных фишинговых URL. Их данные поступают из человеческих отчетов, но они также поглощают внешние каналы, где это возможно. Это бесплатная услуга, но иногда требуется регистрация для ключа API.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.celerium.com/pickupstix" target="_blank">PickupSTIX</a>
        </td>
        <td>
            PickupSTIX Это источник бесплатной, открытой и некоммерческой информации о киберугрозах. В настоящее время PickupSTIX Он использует три общедоступных канала и ежедневно распространяет около 100 новых единиц информации. PickupSTIX переводит различные каналы в STIX, который может взаимодействовать с любым TAXII Сервер. Данные бесплатны и являются отличным способом начать использовать кибер-разведку.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://qfeeds.com" target="_blank">Q-Feeds Threat Intelligence</a>
        </td>
        <td>
            Q-Feeds - это компания по кибербезопасности, которая объединяет данные из OSINT, собственных исследований и коммерческих источников информации об угрозах, чтобы предложить всестороннее и высокоэффективное решение. Портал Threat Intelligence Portal (TIP) позволяет организациям получать доступ к этим данным и управлять ими в режиме реального времени. Интегрируясь с брандмауэрами, SIEM и другими платформами безопасности, Q-Feeds помогает компаниям активно блокировать соединения с известными вредоносными IP-адресами, доменами и URL-адресами, прежде чем угрозы могут нанести вред. У них также есть версия сообщества, доступная по запросу.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rescure.fruxlabs.com/" target="_blank">REScure Threat Intel Feed</a>
        </td>
        <td>
            [RES]cure - это независимый проект разведки угроз, выполняемый командой Fruxlabs Crack Team для улучшения понимания базовой архитектуры распределенных систем, характера разведки угроз и того, как эффективно собирать, хранить, потреблять и распространять разведданные об угрозах. Корм производится каждые 6 часов.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rstcloud.net/" target="_blank">RST Cloud Threat Intel Feed</a>
        </td>
        <td>
            Агрегированные показатели компромисса, собранные и проверенные из нескольких открытых и поддерживаемых сообществом источников, обогащенные и ранжированные с использованием нашей разведывательной платформы.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://report.cs.rutgers.edu/mrtg/drop/dropstat.cgi?start=-86400">Rutgers Blacklisted IPs</a>
        </td>
        <td>IP-список злоумышленников SSH Brute Force создан из объединенных локально наблюдаемых IP-адресов и 2-часовых IP-адресов, зарегистрированных на badip.com и blocklist.de</td>
    </tr>
    <tr>
        <td>
            <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS Suspicious Domains</a>
        </td>
        <td>
            Список угроз подозрительных доменов <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS</a> отслеживает подозрительные домены. Он предлагает 3 списка, классифицированных как <a href="https://isc.sans.edu/feeds/suspiciousdomains_High.txt" target="_blank">high</a>, <a href="https://isc.sans.edu/feeds/suspiciousdomains_Medium.txt" target="_blank">medium</a> или <a href="https://isc.sans.edu/feeds/suspiciousdomains_Low.txt" target="_blank">low</a> Чувствительность, где список высокой чувствительности имеет меньше ложных срабатываний, тогда как список низкой чувствительности имеет больше ложных срабатываний. Существует также и <a href="https://isc.sans.edu/feeds/suspiciousdomains_whitelist_approved.txt" target="_blank">approved whitelist</a> доменов.<br/>
            Наконец, есть предложение <a href="https://isc.sans.edu/block.txt" target="_blank">IP blocklist</a> из <a href="https://dshield.org">DShield</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/securityscorecard/SSC-Threat-Intel-IoCs" target="_blank">SecurityScorecard IoCs</a>
        </td>
        <td>
            Публичный доступ к IoC из сообщений технических блогов и отчетов SecurityScorecard.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.stixify.com/" target="_blank">Stixify</a>
        </td>
        <td>
            Ваш автоматизированный аналитик разведки угроз. Извлеките машиночитаемый интеллект из неструктурированных данных.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/signature-base" target="_blank">signature-base</a>
        </td>
        <td>
            База данных сигнатур, используемая в других инструментах Neo23x0.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.spamhaus.org/" target="_blank">The Spamhaus project</a>
        </td>
        <td>
            Проект Spamhaus содержит несколько списков угроз, связанных со спамом и вредоносными программами.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.sophos.com/intelix" target="_blank">SophosLabs Intelix</a>
        </td>
        <td>
            SophosLabs Intelix Это платформа разведки угроз, которая поддерживает продукты и партнеров Sophos. Вы можете получить доступ к интеллекту на основе хэша файлов, URL и т. Д. а также представить образцы для анализа. С помощью REST API вы можете легко и быстро добавить эту информацию об угрозах в свои системы.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://spur.us" target="_blank">Spur</a>
        </td>
        <td>
            Spur предоставляет инструменты и данные для обнаружения VPN, прокси-серверов и ботов. Бесплатный план позволяет пользователям lookup IP и получить его классификацию, VPN провайдера, популярные геолокации за IP, и некоторые более полезный контекст.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://sslbl.abuse.ch/" target="_blank">SSL Blacklist</a>
        </td>
        <td>
            SSL Blacklist (SSLBL) — проект, поддерживаемый abuse.chЦель состоит в том, чтобы предоставить список «плохих» SSL-сертификатов. abuse.ch быть связанным с вредоносными программами или действиями ботнета. SSLBL опирается на отпечатки SHA1 вредоносных SSL-сертификатов и предлагает различные черные списки.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://statvoo.com/dl/top-1million-sites.csv.zip" target="_blank">Statvoo Top 1 Million Sites</a>
        </td>
        <td>
            Вероятный белый список из 1 миллиона лучших веб-сайтов, согласно рейтингу Statvoo.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://strongarm.io" target="_blank">Strongarm, by Percipient Networks</a>
        </td>
        <td>
            Strongarm - это черная дыра DNS, которая принимает меры по показателям компромисса, блокируя команду и контроль вредоносных программ. Strongarm объединяет бесплатные индикаторные каналы, интегрируется с коммерческими каналами, использует каналы IOC Percipient и управляет DNS-решителями и API-интерфейсами для защиты вашей сети и бизнеса. Strongarm бесплатен для личного использования.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.siemrules.com" target="_blank">SIEM Rules</a>
        </td>
        <td>
            Ваша инженерная база данных обнаружения. Просмотр, изменение и развертывание SIEM rules Охота и обнаружение угроз.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.talosintelligence.com/" target="_blank">Talos</a>
        </td>
        <td>
	    Cisco Talos Intelligence Group - одна из крупнейших в мире команд по анализу коммерческих угроз, состоящая из исследователей, аналитиков и инженеров мирового класса. Эти команды поддерживаются непревзойденной телеметрией и сложными системами для создания точного, быстрого и действенного анализа угроз для клиентов, продуктов и услуг Cisco. Talos защищает клиентов Cisco от известных и возникающих угроз, обнаруживает новые уязвимости в общем программном обеспечении и пресекает угрозы в дикой природе, прежде чем они могут еще больше повредить Интернет в целом. Talos поддерживает официальные наборы правил Snort.org, ClamAV и SpamCop, а также выпускает множество инструментов для исследований и анализа с открытым исходным кодом. Talos предоставляет простой в использовании веб-интерфейс для проверки <a href="https://www.talosintelligence.com/reputation">observable's reputation</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfeeds.io" target="_blank">threatfeeds.io</a>
        </td>
        <td>
            threatfeeds.io перечисляет бесплатные и открытые источники информации об угрозах и предоставляет прямые ссылки на загрузку и резюме.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfox.abuse.ch/" target="_blank">threatfox.abuse.ch</a>
        </td>
        <td>
            ThreatFox — бесплатная платформа abuse.ch с целью обмена индикаторами компромисса (IOC), связанными с вредоносными программами, с сообществом infosec, поставщиками AV и поставщиками разведки угроз.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatconnect.com/blog/ingest-technical-blogs-reports/" target="_blank">Technical Blogs and Reports, by ThreatConnect</a>
        </td>
        <td>
            Этот источник наполнен контентом из более чем 90 блогов с открытым исходным кодом. МОК<a href="https://en.wikipedia.org/wiki/Indicator_of_compromise" target="_blank">Indicators of Compromise</a>) вычеркиваются из каждого блога, а содержание блога отформатировано в разметке.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatjammer.com" target="_blank">Threat Jammer</a>
        </td>
        <td>
            Threat Jammer - это сервис REST API, который позволяет разработчикам, инженерам по безопасности и другим ИТ-специалистам получать доступ к высококачественным данным разведки угроз из различных источников и интегрировать их в свои приложения с единственной целью обнаружения и блокировки вредоносной деятельности.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatminer.org/" target="_blank">ThreatMiner</a>
        </td>
        <td>
            ThreatMiner Он был создан, чтобы освободить аналитиков от сбора данных и предоставить им портал, на котором они могут выполнять свои задачи, от чтения отчетов до поворота и обогащения данных.
            Акцент на ThreatMiner Речь идет не только о показателях компромисса (IoC), но и о предоставлении аналитикам контекстной информации, связанной с IoC.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/WSTNPHX/scripts-n-tools/master/malware-email-addresses.txt">WSTNPHX Malware Email Addresses</a>
        </td>
        <td>Адреса электронной почты, используемые вредоносными программами, собранными VVestron Phoronix (WSTNPHX)</td>
    </tr>
    <tr>
        <td>
            <a href="https://portal.underattack.today/" target="_blank">UnderAttack.today</a>
        </td>
        <td>UnderAttack - это бесплатная платформа для обмена IP-адресами и информацией о подозрительных событиях и атаках. Регистрация бесплатная.</td>
    </tr>
    <tr>
        <td>
            <a href="https://urlhaus.abuse.ch">URLhaus</a>
        </td>
        <td>URLhaus Это проект из abuse.ch с целью обмена вредоносными URL-адресами, которые используются для распространения вредоносных программ.</td>
    </tr>
    <tr>
        <td>
            <a href="https://virusshare.com/" target="_blank">VirusShare</a>
        </td>
        <td>
            VirusShare.com является хранилищем образцов вредоносных программ для обеспечения исследователей безопасности, ответчиков на инциденты, судебных аналитиков и болезненно любопытного доступа к образцам вредоносного кода. Доступ к сайту предоставляется только по приглашению.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://vuldb.com/?actor" target="_blank">VulDB CTI</a>
        </td>
        <td>
            VulDB - это база данных уязвимостей, которая связывает действия участников и детали атаки с уязвимостями. Прогностический подход помогает определить новые исследования и атаки злоумышленников.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yara-Rules/rules" target="_blank">Yara-Rules</a>
        </td>
        <td>
            Репозиторий с открытым исходным кодом с различными подписями Yara, которые компилируются, классифицируются и поддерживаются в актуальном состоянии.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://IOCFeed.mrlooquer.com/" target="_blank">1st Dual Stack Threat Feed by MrLooquer</a>
        </td>
        <td>
Mrlooquer создал первый канал угроз, ориентированный на системы с двойным стеком. Поскольку протокол IPv6 стал частью сообщений о вредоносных программах и мошенничестве, необходимо выявлять и смягчать угрозы в обоих протоколах (IPv4 и IPv6).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.validin.com/">Validin DNS Database</a>
        </td>
        <td>
            Бесплатный источник информации для текущей и исторической информации DNS, поиск других веб-сайтов, связанных с определенными IP-адресами, и знание поддоменов Существует A <a href="https://app.validin.com/docs">free API for IP and domain intelligence</a> Тоже самое. 
        </td>
    </tr>
</table>

## Форматы

Стандартизированные форматы для обмена данными о киберугрозах (в основном IOC).

<table>
    <tr>
        <td>
            <a href="https://capec.mitre.org/" target="_blank">CAPEC</a>
        </td>
        <td>
            Перечисление и классификация общих шаблонов атакCAPEC) представляет собой всеобъемлющий словарь и классификационную таксономию известных атак, которые могут использоваться аналитиками, разработчиками, тестировщиками и преподавателями для улучшения понимания сообщества и усиления защиты.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cyboxproject.github.io/" target="_blank">CybOX</a>
        </td>
        <td>
            Cyber Observable eXpression (недоступная ссылка)CybOX) язык обеспечивает общую структуру для представления кибернаблюдаемых по всем операционным областям корпоративной кибербезопасности, что повышает согласованность, эффективность и совместимость развернутых инструментов и процессов, а также повышает общую ситуационную осведомленность, обеспечивая потенциал для подробного автоматического обмена, картирования, обнаружения и анализа эвристики.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc5070" target="_blank">IODEF (RFC5070)</a>
        </td>
        <td>
            Формат обмена описаниями объектов инцидентов (IODEF) определяет представление данных, которое обеспечивает основу для обмена информацией, обычно обмениваемой группами реагирования на инциденты компьютерной безопасности (CSIRT) об инцидентах компьютерной безопасности.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc4765" target="_blank">IDMEF (RFC4765)</a>
        </td>
        <td>
            <i>экспериментальный</i> Целью формата обмена сообщениями для обнаружения вторжений (IDMEF) является определение форматов данных и процедур обмена информацией, представляющей интерес для систем обнаружения вторжений и реагирования, а также для систем управления, которые могут потребоваться для взаимодействия с ними.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maecproject.github.io/" target="_blank">MAEC</a>
        </td>
        <td>
            Перечисление и характеристика атрибутов вредоносного ПО (MAEC) проекты направлены на создание и предоставление стандартизированного языка для обмена структурированной информацией о вредоносных программах на основе таких атрибутов, как поведение, артефакты и схемы атак.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=openc2" target="_blank">OpenC2</a>
        </td>
        <td>
            Открытое командование OASIS (OpenC)2) Технический комитет. The OpenC2 ТК будет основывать свои усилия на артефактах, созданных OpenC2 Форум. До создания этого ТК и СПЭcifикация, OpenC2 Форум представлял собой сообщество заинтересованных сторон в области кибербезопасности, которому способствовало Агентство национальной безопасности (АНБ). The OpenC2 ТК был зафрахтован для составления документов, specifИкации, лексиконы или другие артефакты для удовлетворения потребностей управления и контроля кибербезопасности стандартизированным образом.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://oasis-open.github.io/cti-documentation/" target="_blank">STIX 2.0</a>
        </td>
        <td>
            Язык структурированной информации об угрозах (STIX) представляет собой стандартизированную конструкцию для представления информации о киберугрозах. Язык STIX предназначен для передачи полного спектра потенциальной информации о киберугрозах и стремится быть полностью экспрессивным, гибким, расширяемым и автоматизированным. STIX не только допускает инструментально-агностические поля, но и предоставляет так называемые <i>испытательные механизмы</i> которые обеспечивают средства для встраивания инструментальной формыcifэлементов, в том числе OpenIOCЯра и Снорт. STIX 1.x заархивирован <a href="https://stixproject.github.io/" target="_blank">here</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://taxiiproject.github.io/" target="_blank">TAXII</a>
        </td>
        <td>
            Доверенный автоматизированный обмен информацией об индикаторах (EXchange of Indicator Information)TAXII) стандарт определяет набор услуг и обмен сообщениями, которые при внедрении позволяют обмениваться информацией о киберугрозах между организациями и границами продуктов/услуг. TAXII определяет концепции, протоколы и обмен сообщениями для обмена информацией о киберугрозах для обнаружения, предотвращения и смягчения киберугроз.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://veriscommunity.net/index.html" target="_blank">VERIS</a>
        </td>
        <td>
            Словарь для записи событий и обмена инцидентами (VERIS) представляет собой набор показателей, предназначенных для обеспечения общего языка для описания инцидентов безопасности структурированным и повторяемым образом. VERIS Это ответ на одну из самых критических и постоянных проблем в индустрии безопасности. - Отсутствие качественной информации. Помимо структурированного формата, VERIS также собирает данные из сообщества, чтобы сообщать о нарушениях в отчете Verizon Data Breach Investigations Report<a target="_blank" href="http://www.verizonenterprise.com/verizon-insights-lab/dbir/">DBIR</a>) и публикует эту базу данных в Интернете в GitHub <a target="_blank" href="https://github.com/vz-risk/VCDB">repository.org</a>.
        </td>
    </tr>
</table>

## Фреймворки и платформы

Фреймворки, платформы и сервисы для сбора, анализа, создания и обмена данными о киберугрозах.

<table>
    <tr>
        <td>
            <a href="https://github.com/abusesa/abusehelper" target="_blank">AbuseHelper</a>
        </td>
        <td>
            AbuseHelper Это платформа с открытым исходным кодом для получения и перераспределения кормов для злоупотреблений и информации об угрозах.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://abuse.io/" target="_blank">AbuseIO</a>
        </td>
        <td>
            Инструментарий для получения, обработки, корреляции и уведомления конечных пользователей о сообщениях о злоупотреблениях, тем самым потребляя каналы разведки угроз.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cisa.gov/ais" target="_blank">AIS</a>
        </td>
        <td>
            Агентство по кибербезопасности и безопасности инфраструктуры (CISA) бесплатное автоматическое распределение индикаторовAISСпособность позволяет обмениваться показателями киберугроз между федеральным правительством и частным сектором на машинной скорости. Показатели угроз представляют собой фрагменты информации, такие как вредоносные IP-адреса или адрес отправителя фишингового письма (хотя они также могут быть намного сложнее).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/csirtgadgets/bearded-avenger" target="_blank">Bearded Avenger</a>
        </td>
        <td>
            Самый быстрый способ использовать разведданные об угрозах. преемником CIF.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.blueliv.com/" target="_blank">Blueliv Threat Exchange Network</a>
        </td>
        <td>
            Позволяет участникам делиться индикаторами угроз с сообществом.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Cortex" target="_blank">Cortex</a>
        </td>
        <td>
            Cortex позволяет просматриваемым объектам, таким как IP-адреса, адреса электронной почты, URL-адреса, доменные имена, файлы или хэши, анализироваться по одному или в массовом режиме с использованием одного веб-интерфейса. Веб-интерфейс выступает в качестве интерфейса для многочисленных анализаторов, устраняя необходимость их интеграции. Аналитики также могут использовать API Cortex REST для автоматизации части своего анализа.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://crits.github.io/" target="_blank">CRITS</a>
        </td>
        <td>
            CRITS Платформа предоставляет аналитикам средства для проведения совместных исследований вредоносных программ и угроз. Он подключается к централизованному хранилище данных разведки, но также может использоваться в качестве частного экземпляра.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://csirtgadgets.org/collective-intelligence-framework" target="_blank">CIF</a>
        </td>
        <td>
            Система коллективного интеллекта (Collective Intelligence Framework)CIF) позволяет объединить известную информацию о вредоносных угрозах из многих источников и использовать эту информацию для ИК, обнаружения и смягчения последствий. Доступный код <a href="https://github.com/csirtgadgets/massive-octo-spice" target="_blank">GitHub</a>.
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/ctix-stix-taxii-cyber-threat-intelligence-exchange" target="_blank">CTIX</a>
        </td>
        <td>
            CTIX Умная платформа для анализа угроз клиент-сервер (TIP) для приема, обогащения, анализа и двунаправленного обмена данными об угрозах в доверенной сети.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.eclecticiq.com/platform" target="_blank">EclecticIQ Platform</a>
        </td>
        <td>
            EclecticIQ Platform Это STIX/TAXII Платформа Threat Intelligence Platform (TIP), которая позволяет аналитикам по угрозам выполнять более быстрые, лучшие и глубокие исследования, распространяя разведданные на машинной скорости.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.enisa.europa.eu/topics/csirt-cert-services/community-projects/incident-handling-automation" target="_blank">IntelMQ</a>
        </td>
        <td>
            IntelMQ Это решение для CERT для сбора и обработки лент безопасности, пастебинов, твитов с использованием протокола очереди сообщений. Проект IHAP (Incident Handling Automation Project) был концептуально разработан европейскими CERT во время нескольких мероприятий InfoSec. Его основная цель состоит в том, чтобы предоставить специалистам по реагированию на инциденты простой способ сбора и обработки информации об угрозах, тем самым улучшая процессы обработки инцидентов в CERT.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/intelowlproject/IntelOwl/" target="_blank">IntelOwl</a>
        </td>
        <td>
            Intel Owl - это решение OSINT для получения данных разведки угроз о шпионеcific-файл, IP или домен из одного API в масштабе. Intel Owl состоит из анализаторов, которые могут быть запущены для извлечения данных из внешних источников (например, VirusTotal). AbuseIPDB) или для получения информации от внутренних анализаторов (например, Yara или Oletools). Он может быть легко интегрирован в ваш стек инструментов безопасности.<a href="https://github.com/intelowlproject/pyintelowl" target="_blank">pyintelowl</a>) автоматизировать общие рабочие места, обычно выполняемые, например, аналитиками SOC вручную.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.kaspersky.com/enterprise-security/threat-intelligence" target="_blank">Kaspersky Threat Intelligence Portal</a>
        </td>
        <td>
            Веб-сайт, который предоставляет базу знаний, описывающую кибер-угрозы, законные объекты и их отношения, объединенные в единый веб-сервис. Подписка на Threat Intelligence Portal «Лаборатории Касперского» предоставляет вам единую точку входа в четыре дополнительных сервиса: Kaspersky Threat Data Feeds, Threat Intelligence Reporting, Kaspersky Threat. Lookup Kaspersky Research Sandbox, все доступны в машиночитаемом формате.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/malstrom" target="_blank">Malstrom</a>
        </td>
        <td>
            Malstrom стремится стать хранилищем для отслеживания угроз и судебно-медицинских артефактов, а также хранит правила YARA и заметки для расследования. Примечание: Github Проект был заархивирован (новые материалы не принимаются).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stratosphereips/Manati" target="_blank">ManaTI</a>
        </td>
        <td>
            The ManaTI Проект помогает аналитику угроз, используя методы машинного обучения, которые автоматически находят новые отношения и выводы.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://django-mantis.readthedocs.io/en/latest/" target="_blank">MANTIS</a>
        </td>
        <td>
            Модельный анализ источников информации об угрозахMANTIS) Система управления разведданными о киберугрозах поддерживает управление разведданными о киберугрозах, выраженными на различных стандартных языках, таких как STIX и CybOXЭто *не* Готовы к масштабному производству.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cert-se/megatron-java" target="_blank">Megatron</a>
        </td>
        <td>
            Megatron - это инструмент, реализованный CERT-SE, который собирает и анализирует плохие IP-адреса, может использоваться для расчета статистики, преобразования и анализа файлов журналов, а также при обработке злоупотреблений и инцидентов.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/PaloAltoNetworks/minemeld/wiki" target="_blank">MineMeld</a>
        </td>
        <td>
            Расширяемая структура обработки Threat Intelligence создала сеть Palo Alto Networks.
            Он может использоваться для манипулирования списками индикаторов и преобразования и/или агрегирования их для потребления сторонней правоохранительной инфраструктурой.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.misp-project.org/" target="_blank">MISP</a>
        </td>
        <td>
            Платформа обмена информацией о вредоносных программах (MISP) является программным решением с открытым исходным кодом для сбора, хранения, распространения и совместного использования показателей кибербезопасности и анализа вредоносных программ.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CERT-Polska/n6" target="_blank">n6</a>
        </td>
        <td>
            n6 Network Security Incident eXchange — это система для сбора, управления и распространения информации о безопасности в больших масштабах. Распространение осуществляется через простой REST API и веб-интерфейс, который авторизованные пользователи могут использовать для получения различных типов данных, в частности информации об угрозах и инцидентах в своих сетях. Развивается посредством <a href="https://www.cert.pl/en/" target="_blank">CERT Polska</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ocsf.io/" target="_blank">Open Cybersecurity Schema Framework (OCSF)</a>
        </td>
        <td>
            Open Cybersecurity Schema Framework - это проект с открытым исходным кодом, предоставляющий расширяемую структуру для разработки схем, а также агностичную для поставщиков базовую схему безопасности. Поставщики и другие производители данных могут принять и расширить схему для своих клиентов.cific domains. Инженеры данных могут отображать различные схемы, чтобы помочь командам безопасности упростить прием и нормализацию данных, чтобы ученые и аналитики данных могли работать с общим языком для обнаружения и расследования угроз. Цель состоит в том, чтобы обеспечить открытый стандарт, принятый в любой среде, приложении или решении, дополняя существующие стандарты безопасности и процессы.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opencti.io/en/" target="_blank">OpenCTI</a>
        </td>
        <td>
            OpenCTIПлатформа Open Cyber Threat Intelligence позволяет организациям управлять своими знаниями и наблюдаемыми данными о киберугрозах. Его целью является структурирование, хранение, организация и визуализация технической и нетехнической информации о киберугрозах. Данные структурированы вокруг схемы знаний, основанной на STIX2 стандартов. OpenCTI могут быть интегрированы с другими инструментами и платформами, включая MISP«Улей» и MITRE ATT&CKА.О.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware.html" target="_blank">OpenIOC</a>
        </td>
        <td>
            OpenIOC Это открытая основа для обмена информацией об угрозах. Он предназначен для обмена информацией об угрозах как внутри, так и снаружи в машиночитаемом формате.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/OpenTAXII" target="_blank">OpenTAXII</a>
        </td>
        <td>
            OpenTAXII Является надежной реализацией Python TAXII Сервисы, которые предоставляют богатый набор функций и дружественный Pythonic API, построенный поверх хорошо разработанного приложения.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Ptr32Void/OSTrICa" target="_blank">OSTrICa</a>
        </td>
        <td>
            Плагин-ориентированная платформа с открытым исходным кодом для сбора и визуализации информации Threat Intelligence.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://otx.alienvault.com" target="_blank">OTX - Open Threat Exchange</a>
        </td>
        <td>
            AlienVault Open Threat Exchange (OTX) предоставляет открытый доступ к глобальному сообществу исследователей угроз и специалистов по безопасности. Он предоставляет данные об угрозах, генерируемые сообществом, позволяет проводить совместные исследования и автоматизирует процесс обновления вашей инфраструктуры безопасности с данными об угрозах из любого источника.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Lookingglass/opentpx/" target="_blank">Open Threat Partner eXchange</a>
        </td>
        <td>
            The Open Threat Partner eXchange OpenTPX состоит из формата с открытым исходным кодом и инструментов для обмена машиночитаемой информацией об угрозах и данными об операциях сетевой безопасности. Это формат на основе JSON, который позволяет обмениваться данными между подключенными системами.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.riskiq.com/" target="_blank">PassiveTotal</a>
        </td>
        <td>
            The PassiveTotal Платформа RiskIQ представляет собой платформу для анализа угроз, которая предоставляет аналитикам как можно больше данных для предотвращения атак до их возникновения. Предлагается несколько типов решений, а также интеграция (API) с другими системами.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pulsedive.com/" target="_blank">Pulsedive</a>
        </td>
        <td>
            Pulsedive - это бесплатная платформа для анализа угроз сообщества, которая потребляет каналы с открытым исходным кодом, обогащает МОК и запускает их через алгоритм оценки рисков для улучшения качества данных. Он позволяет пользователям отправлять, искать, соотносить и обновлять МОК; перечисляет «факторы риска» для того, почему МОК имеют более высокий риск; и обеспечивает высокий уровень представления об угрозах и активности угроз.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.recordedfuture.com/" target="_blank">Recorded Future</a>
        </td>
        <td>
            Recorded Future - это премиальный SaaS-продукт, который автоматически объединяет информацию об угрозах из открытых, закрытых и технических источников в единое решение. Их технология использует обработку естественного языка (NLP) и машинное обучение для передачи информации об угрозах в режиме реального времени, что делает Recorded Future популярным выбором для команд ИТ-безопасности.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Netflix/Scumblr" target="_blank">Scumblr</a>
        </td>
        <td>
            Scumblr - это веб-приложение, которое позволяет выполнять периодическую синхронизацию источников данных (например, Github репозитории и URL-адреса и выполнение анализа (например, статический анализ, динамические проверки и сбор метаданных) по идентифицированным результатам.
            Scumblr поможет вам упростить упреждающую безопасность с помощью интеллектуальной системы автоматизации, чтобы помочь вам быстрее выявлять, отслеживать и решать проблемы безопасности.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.anomali.com/platform/staxx" target="_blank">STAXX (Anomali)</a>
        </td>
        <td>
            Anomali STAXX дает вам бесплатный и простой способ подписаться на любой STIX.TAXII кормить. Просто загрузите клиент STAXX, настройте свои источники данных, и STAXX обработает все остальное.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://stoq.punchcyber.com/" target="_blank">stoQ</a>
        </td>
        <td>
            stoQ Это платформа, которая позволяет кибераналитикам организовывать и автоматизировать повторяющиеся задачи, основанные на данных. Он имеет плагины для многих других систем для взаимодействия.
            Одним из примеров использования является извлечение МОК из документов, пример которого показан. <a href="https://stoq-framework.blogspot.nl/2016/04/operationalizing-indicators.html" target="_blank">here</a>Но его также можно использовать для деобфускации и декодирования контента и автоматического сканирования с помощью YARA.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/tripwire/tardis" target="_blank">TARDIS</a>
        </td>
        <td>
            Анализ угроз, ReconnaisSance и Data Intelligence System (недоступная ссылка).TARDIS) является фреймворком с открытым исходным кодом для выполнения исторических поисков с использованием подписей атаки.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatconnect.com/" target="_blank">ThreatConnect</a>
        </td>
        <td>
            ThreatConnect Это платформа с возможностями разведки угроз, аналитики и оркестровки. Он предназначен для того, чтобы помочь вам собирать данные, производить разведданные, делиться ими с другими и предпринимать действия по ним.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatcrowd.org/" target="_blank">ThreatCrowd</a>
        </td>
        <td>
            ThreatCrowd Это система поиска и исследования артефактов, связанных с киберугрозами.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatpipes.com" target="_blank">ThreatPipes</a>
        </td>
        <td>
            Оставайтесь на два шага впереди своих противников. Получите полную картину того, как они будут использовать вас.
            <br />
            ThreatPipes Это разведкаaisИнструмент sance, который автоматически запрашивает 100 источников данных для сбора информации об IP-адресах, доменных именах, адресах электронной почты, именах и многом другом.
            <br />
            Ты просто шпионишьcifцель, которую вы хотите исследовать, выбрать, какие модули включить, а затем ThreatPipes Мы будем собирать данные для создания понимания всех объектов и того, как они связаны друг с другом.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://developers.facebook.com/docs/threat-exchange/" target="_blank">ThreatExchange</a>
        </td>
        <td>
            Создан Facebook ThreatExchange Чтобы участвующие организации могли обмениваться данными об угрозах, используя удобный, структурированный и простой в использовании API, который предоставляет средства контроля конфиденциальности, позволяющие обмениваться данными только с желаемыми группами. Этот проект все еще в <b>бета</b>Справочный код можно найти в <a href="https://github.com/facebook/ThreatExchange" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/typedb-osi/typedb-cti" target="_blank">TypeDB CTI</a>
        </td>
        <td>
		Данные TypeDB - CTI является платформой разведки угроз с открытым исходным кодом для организаций для хранения и управления своими знаниями о киберугрозах (CTI). Это позволяет специалистам по разведке угроз объединить разрозненную информацию о CTI в одну базу данных и найти новые сведения о киберугрозах. Это хранилище предоставляет схему, которая основана на STIX2Содержит MITRE ATT&CK В качестве примера набора данных для начала изучения этой платформы разведки угроз. Больше в этом <a href="https://blog.vaticle.com/introducing-a-knowledge-graph-for-cyber-threat-intelligence-with-typedb-bdb559a92d2a" target="_blank">blog post</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://beta.virusbay.io/" target="_blank">VirusBay</a>
        </td>
        <td>
            VirusBay Это веб-платформа для совместной работы, которая соединяет специалистов центра безопасности (SOC) с соответствующими исследователями вредоносных программ.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/brianwarehime/threatnote" target="_blank">threatnote.io</a>
        </td>
        <td>
            Новый и улучшенный threatnote.io - Инструмент для аналитиков и команд CTI для управления информационными требованиями, отчетностью и процессами CTI на платформе «все в одном»
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exchange.xforce.ibmcloud.com/" target="_blank">XFE - X-Force Exchange</a>
        </td>
        <td>
            X-Force Exchange (XFE) от IBM XFE - это бесплатный SaaS-продукт, который вы можете использовать для поиска информации об угрозах, сбора ваших выводов и обмена информацией с другими членами сообщества XFE.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://yeti-platform.github.io/" target="_blank">Yeti</a>
        </td>
        <td>
            Открытый, распределенный, машинный и дружественный аналитику хранилище информации об угрозах. Сделано для и для реагировавших на инциденты.
        </td>
    </tr>
</table>



## Инструменты

Различные инструменты для анализа, создания и редактирования данных о киберугрозах, в основном на основе IOC.

<table>
    <tr>
        <td>
            <a href="https://github.com/jalewis/actortrackr" target="_blank">ActorTrackr</a>
        </td>
        <td>
            ActorTrackr Это веб-приложение с открытым исходным кодом для хранения / поиска / связывания данных, связанных с актером. Основными источниками являются пользователи и различные публичные хранилища. Источник доступен на <a href="https://github.com/jalewis/actortrackr" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/camp0/aiengine" target="_blank">AIEngine</a>
        </td>
        <td>
            AIEngine Это интерактивный/программируемый движок проверки пакетов Python/Ruby/Java/Lua следующего поколения с возможностями обучения без вмешательства человека, функциональностью NIDS (Network Intrusion Detection System), классификацией доменов DNS, сетевым коллектором, сетевой криминалистикой и многими другими.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/referefref/aiocrioc" target="_blank">AIOCRIOC</a>
        </td>
        <td>
            Искусственный интеллект (индикатор распознавания окулярных признаков)AIOCRIOC) является инструментом, который сочетает в себе веб-скребинг, возможности OCR Tesseract и OpenAI совместимых LLM API, таких как GPT-4, для анализа и извлечения МОК из отчетов и другого веб-контента, включая встроенные изображения с контекстными данными.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://analyze.intezer.com" target="_blank">Analyze (Intezer)</a>
        </td>
        <td>
            Analyze - это платформа для анализа вредоносных программ, которая способна выполнять статический, динамический и генетический анализ кода на всех типах файлов. Пользователи могут отслеживать семейства вредоносных программ, извлекать IOC / MITRE TTP и загружать подписи YARA. Есть общественное издание, чтобы начать бесплатно.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/1aN0rmus/TekDefense-Automater" target="_blank">Automater</a>
        </td>
        <td>
            Automater - это инструмент URL / домена, IP-адреса и Md5 Hash OSINT, предназначенный для облегчения процесса анализа для аналитиков вторжения.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/svdwi/BlueBox" target="_blank">BlueBox</a>
        </td>
        <td>
            BlueBox OSINT-решение для получения данных разведки угроз о шпионеcific-файл, IP, домен или URL и их анализ.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://botscout.com/">BotScout</a>
        </td>
        <td>
            BotScout Это помогает предотвратить автоматизированные веб-скрипты, известные как «боты», от регистрации на форумах, загрязнения баз данных, распространения спама и злоупотребления формами на веб-сайтах.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/bro-intel-generator" target="_blank">bro-intel-generator</a>
        </td>
        <td>
            Скрипт для генерации файлов Bro intel из отчетов pdf или html.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/cabby" target="_blank">cabby</a>
        </td>
        <td>
            Простая библиотека Python для взаимодействия TAXII Серверы.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/cacador" target="_blank">cacador</a>
        </td>
        <td>
            Cacador - это инструмент, написанный в Go для извлечения общих показателей компромисса из блока текста.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/combine" target="_blank">Combine</a>
        </td>
        <td>
            Combine собирает информацию об угрозах из общедоступных источников.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CrowdStrike/CrowdFMS" target="_blank">CrowdFMS</a>
        </td>
        <td>
            CrowdFMS Это основа для автоматизации сбора и обработки образцов от VirusTotal, используя систему Private API.
            Фреймворк автоматически загружает последние образцы, что вызвало оповещение на канале уведомлений YARA пользователей.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-transmute.org/" target="_blank">CTI-Transmute</a>
        </td>
        <td>
            CTI-Transmute Инструмент для преобразования данных разведки киберугроз (CTI) между MISP Форматы STIX. Он предоставляет набор конечных точек API, которые позволяют автоматизировать преобразование данных, что облегчает интеграцию различных платформ и рабочих процессов. Источник доступен на <a href="https://github.com/MISP/cti-transmute" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cuckoosandbox/cuckoo" target="_blank">Cuckoo Sandbox</a>
        </td>
        <td>
            Cuckoo Sandbox - это автоматизированная система динамического анализа вредоносных программ. Это самая известная песочница для анализа вредоносных программ с открытым исходным кодом, которая часто развертывается исследователями, командами CERT / SOC и группами разведки угроз по всему миру. Для многих организаций Cuckoo Sandbox дает первое представление о потенциальных образцах вредоносных программ.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cybergordon.com/" target="_blank">CyberGordon</a>
        </td>
        <td>
            CyberGordon Это поисковая система разведки угроз. Он использует 30+ Источники.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CylanceSPEAR/CyBot" target="_blank">CyBot</a>
        </td>
        <td>
            CyBot Это чат-бот разведки угроз. Он может выполнять несколько типов lookups, предлагаемые пользовательскими модулями.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Fenrir" target="_blank">Fenrir</a>
        </td>
        <td>
            Простой сканер МОК.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/FireHOL-IP-Aggregator" target="_blank">FireHOL IP Aggregator</a>
        </td>
        <td>
            Применение для хранения кормов из FireHOL <a href="https://github.com/firehol/blocklist-ipsets" target="_blank">blocklist-ipsets</a> История появления IP-адресов. Сервис API на основе HTTP разработан для поисковых запросов.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/Forager" target="_blank">Forager</a>
        </td>
        <td>
            Многопоточный сценарий охотника-собирателя.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.gigasheet.co" target="_blank">Gigasheet</a>
        </td>
        <td>
            Gigasheet - это продукт SaaS, используемый для анализа массивных и разрозненных наборов данных кибербезопасности. Импорт массивных файлов журналов, netflow, pcaps, big CSVs и более.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/BinaryDefense/goatrider" target="_blank">GoatRider</a>
        </td>
        <td>
            GoatRider Это простой инструмент, который будет динамически удалять Artillery Threat Intelligence Feeds, TOR, AlienVaults OTX и Alexa топ 1 миллион веб-сайтов и делать сравнение с файлом имени хоста или IP-файлом.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cse.google.com/cse/publicurl?cx=003248445720253387346:turlh5vi4xc" target="_blank">Google APT Search Engine</a>
        </td>
        <td>
            APT Groups, Operations and Malware Search Engine. Источники, используемые для этого пользовательского поиска Google, перечислены в <a href="https://gist.github.com/Neo23x0/c4f40629342769ad0a8f3980942e21d3" target="_blank">this</a> GitHub Суть.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ciscocsirt/gosint" target="_blank">GOSINT</a>
        </td>
        <td>
            The GOSINT Фреймворк - это бесплатный проект, используемый для сбора, обработки и экспорта высококачественных публичных индикаторов компромисса.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://hashdd.com/" target="_blank">hashdd</a>
        </td>
        <td>
            Инструмент для lookup связанная информация о критографическом хеш-значении
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/harbinger" target="_blank">Harbinger Threat Intelligence</a>
        </td>
        <td>
            Python скрипт, который позволяет запрашивать несколько онлайн-агрегаторов угроз из одного интерфейса.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Hippocampe" target="_blank">Hippocampe</a>
        </td>
        <td>
            Гиппокамп объединяет угрозы из Интернета в кластере Elasticsearch. Он имеет API REST, который позволяет искать в его «памяти». Он основан на скрипте Python, который извлекает URL-адреса, соответствующие фидам, анализирует и индексирует их.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/S03D4-164/Hiryu" target="_blank">Hiryu</a>
        </td>
        <td>
            Инструмент для организации информации о кампании APT и визуализации отношений между МОК.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/ioc-editor.html" target="_blank">IOC Editor</a>
        </td>
        <td>
            Бесплатный редактор для индикаторов компромисса (IOC).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/ioc-finder" target="_blank">IOC Finder</a>
        </td>
        <td>
            Библиотека Python для поиска показателей компромисса в тексте. Использует грамматику, а не регексы для улучшения понимания. По состоянию на февраль 2019 года он анализирует более 18 типов индикаторов.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ioc-fang/ioc_fanger" target="_blank">IOC Fanger (and Defanger)</a>
        </td>
        <td>
            Библиотека Python для фанинга (`hXXp://example[.]com` => `http://example.com`) и обезвреживание (`http://example.com` => `hXXp://example[.]com`) показатели компромисса в тексте.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/armbues/ioc_parser" target="_blank">ioc_parser</a>
        </td>
        <td>
            Инструмент извлечения показателей компромисса из отчетов о безопасности в формате PDF.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mandiant/ioc_writer" target="_blank">ioc_writer</a>
        </td>
        <td>
            Предоставляет библиотеку Python, которая позволяет создавать и редактировать OpenIOC объекты.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/python-iocextract" target="_blank">iocextract</a>
        </td>
        <td>
            Извлекает URL-адреса, IP-адреса, хэши MD5 / SHA, адреса электронной почты и правила YARA из текстовых корпусов. Включает в выход некоторые закодированные и «обезвреженные» МОК и необязательно декодирует/переименовывает их.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stephenbrannon/IOCextractor" target="_blank">IOCextractor</a>
        </td>
        <td>
            IOC (Indicator of Compromise) Extractor — программа, помогающая извлекать МОК из текстовых файлов. Общая цель заключается в ускорении процесса анализа структурированных данных (IOC) из неструктурированных или полуструктурированных данных.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/johestephan/ibmxforceex.checker.py" target="_blank">ibmxforceex.checker.py</a>
        </td>
        <td>
            Клиент Python для IBM X-Force Exchange.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/jager" target="_blank">jager</a>
        </td>
        <td>
            Jager - это инструмент для извлечения полезных МОК (показателей компромисса) из различных источников ввода (PDF на данный момент, простой текст действительно скоро, веб-страницы в конечном итоге) и их размещения в легком для манипулирования формате JSON.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/13850" target="_blank">Kaspersky CyberTrace</a>
        </td>
        <td>
            Инструмент слияния и анализа данных об угрозах, который интегрирует потоки данных об угрозах с решениями SIEM. Пользователи могут немедленно использовать информацию об угрозах для мониторинга безопасности и отчетов об инцидентах в рабочем процессе своих существующих операций безопасности.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/KasperskyLab/klara" target="_blank">KLara</a>
        </td>
        <td>
            KLaraРаспределенная система, написанная на Python, позволяет исследователям сканировать одно или несколько правил Yara по коллекциям с образцами, получая уведомления по электронной почте, а также веб-интерфейс, когда результаты сканирования готовы.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/libtaxii" target="_blank">libtaxii</a>
        </td>
        <td>
            Библиотека Python для обработки TAXII Сообщения, вызывающие TAXII Услуги.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Loki" target="_blank">Loki</a>
        </td>
        <td>
            Простой сканер реагирования на инциденты.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/ssanthosh243/ip-lookup-docker" target="_blank">LookUp</a>
        </td>
        <td>
            LookUp Это централизованная страница для получения различной информации об угрозе IP-адреса. Он может быть легко интегрирован в контекстное меню таких инструментов, как SIEM и другие инструменты для расследования.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/HurricaneLabs/machinae" target="_blank">Machinae</a>
        </td>
        <td>
            Machinae - это инструмент для сбора информации с публичных сайтов / фейдов о различных связанных с безопасностью фрагментах данных: IP-адресах, доменных именах, URL-адресах, адресах электронной почты, хэшах файлов и отпечатках пальцев SSL.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/silascutler/MalPipe" target="_blank">MalPipe</a>
        </td>
        <td>
            Амодульная вредоносная программа (и индикатор) для сбора и обработки. Он предназначен для извлечения вредоносных программ, доменов, URL-адресов и IP-адресов из нескольких каналов, обогащения собранных данных и экспорта результатов.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/misp-workbench" target="_blank">MISP Workbench</a>
        </td>
        <td>
            Инструменты для экспорта данных из MISP База данных MySQL использует и злоупотребляет ими за пределами этой платформы.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/MISP-Taxii-Server" target="_blank">MISP-Taxii-Server</a>
        </td>
        <td>
            Набор конфигурационных файлов для использования с EclecticIQ OpenTAXII реализация, а также обратный вызов, когда данные отправляются в TAXII Входящие данные сервера.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/microsoft/msticpy" target="_blank">MSTIC Jupyter and Python Security Tools</a>
        </td>
        <td>
            msticpy — библиотека для исследований и охоты в Jupyter Notebooks. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/paulpc/nyx" target="_blank">nyx</a>
        </td>
        <td>
            Целью проекта является содействие распространению артефактов Threat Intelligence в оборонительных системах и повышение ценности, получаемой как из открытых источников, так и из коммерческих инструментов.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/onemillion" target="_blank">OneMillion</a>
        </td>
        <td>
            Библиотека Python определяет, находится ли домен в топе Alexa или Cisco, один миллион списков доменов.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/STIXProject/openioc-to-stix" target="_blank">openioc-to-stix</a>
        </td>
        <td>
            Создание STIX XML из OpenIOC XML.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/omnibus" target="_blank">Omnibus</a>
        </td>
        <td>
            Omnibus - это интерактивное приложение командной строки для сбора и управления МОК / артефактами (IP, доменами, адресами электронной почты, именами пользователей и адресами биткойнов), обогащая эти артефакты данными OSINT из общедоступных источников и предоставляя средства для хранения и доступа к этим артефактам простым способом.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kx499/ostip/wiki" target="_blank">OSTIP</a>
        </td>
        <td>
            Платформа данных об угрозах.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mgeide/poortego" target="_blank">poortego</a>
        </td>
        <td>
            Проект с открытым исходным кодом для хранения и связывания информации с открытым исходным кодом (ala Maltego, но бесплатно, как в пиве, и не привязан к шпиону)cifСобственная база данных. Изначально разрабатывался в рубине, но новая кодовая база полностью переписывалась в питоне.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/yahoo/PyIOCe" target="_blank">PyIOCe</a>
        </td>
        <td>
            PyIOCe является IOC editor Написано на Python.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/QTek/QRadio" target="_blank">QRadio</a>
        </td>
        <td>
            QRadio Инструмент/фреймворк, предназначенный для консолидации источников информации о киберугрозах.
            Целью проекта является создание надежной модульной структуры для извлечения разведывательных данных из проверенных источников.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/aboutsecurity/rastrea2r" target="_blank">rastrea2r</a>
        </td>
        <td>
            Сбор и охота за показателями компромисса (IOC) с удовольствием и стилем!
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/redline.html" target="_blank">Redline</a>
        </td>
        <td>
            Инструмент для проведения расследований, который может быть использован, среди прочего, для анализа МОК.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ocmdev/rita" target="_blank">RITA</a>
        </td>
        <td>
            Real Intelligence Threat Analytics (англ.) (недоступная ссылка).RITA) призван помочь в поиске показателей компромисса в корпоративных сетях различного размера.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/softrace" target="_blank">Softrace</a>
        </td>
        <td>
            Легкое хранилище RDS National Software Reference Library.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/0x4d31/sqhunter" target="_blank">sqhunter</a>
        </td>
        <td>
            Охотник за угрозами на основе osquery, Salt Open и Cymon API Он может запрашивать открытые сетевые разъемы и проверять их на наличие источников информации об угрозах.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SecurityRiskAdvisors/sra-taxii2-server" target="_blank">SRA TAXII2 Server</a>
        </td>
        <td>
            Полный TAXII 2,0 шп.cifСервер обледенения реализован в Node JS с бэкэндом MongoDB.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://stixvalidator.com" target="_blank">Stixvalidator.com</a>
        </td>
        <td>
            Stixvalidator.com Онлайн бесплатный STIX и STIX2 Служба валидаторов.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/traut/stixview" target="_blank">Stixview</a>
        </td>
        <td>
            Stixview - это библиотека JS для встраиваемого интерактивного интерфейса. STIX2 Графики.
        </td>
    </tr>
	<tr>
        <td>
            <a href="https://github.com/STIXProject/stix-viz" target="_blank">stix-viz</a>
        </td>
        <td>
            Инструмент визуализации STIX.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://test.taxiistand.com/" target="_blank">TAXII Test Server</a>
        </td>
        <td>
            Позволяет вам проверить свои TAXII окружающей среды путем подключения к предоставляемым услугам и выполнения различных функций, описанных в TAXII шпагаcifИкации.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jpsenior/threataggregator" target="_blank">threataggregator</a>
        </td>
        <td>
            ThreatAggregrator объединяет угрозы безопасности из ряда онлайн-источников и выводов в различные форматы, включая правила CEF, Snort и IPTables.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcrowd_api" target="_blank">threatcrowd_api</a>
        </td>
        <td>
            Библиотека Python для ThreatCrowdAPI.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcmd" target="_blank">threatcmd</a>
        </td>
        <td>
            Кли интерфейс для ThreatCrowd.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/syphon1c/Threatelligence" target="_blank">Threatelligence</a>
        </td>
        <td>
            Threatelligence - это простой сборщик информации о киберугрозах, использующий Elasticsearch, Kibana и Python для автоматического сбора информации из пользовательских или общедоступных источников. Автоматически обновляет каналы и пытается дополнительно улучшить данные для приборных панелей. Однако проекты, похоже, больше не поддерживаются.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/ThreatIngestor" target="_blank">ThreatIngestor</a>
        </td>
        <td>
            Гибкая, конфигурационная, расширяемая структура для потребления информации об угрозах. ThreatIngestor Вы можете просматривать Twitter, RSS-каналы и другие источники, извлекать значимую информацию, такую как IP / домены C2 и подписи YARA, и отправлять эту информацию в другие системы для анализа.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://chrome.google.com/webstore/detail/threatpinch-lookup/ljdgplocfnmnofbhpkjclbefmjoikgke" target="_blank">ThreatPinch Lookup</a>
        </td>
        <td>
            Расширение для Chrome, которое создает всплывающие окна на каждой странице для IPv4, MD5, SHA2 и CVE. Его можно использовать для lookupво время расследования угроз.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/michael-yip/ThreatTracker" target="_blank">ThreatTracker</a>
        </td>
        <td>
            Скрипт Python, предназначенный для мониторинга и генерации предупреждений на заданных наборах IOC, индексируемых набором пользовательских поисковых систем Google.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yelp/threat_intel" target="_blank">threat_intel</a>
        </td>
        <td>
            Несколько API для Threat Intelligence интегрированы в единый пакет. Среди них: OpenDNS Investigate, VirusTotal и ShadowServer.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/abhinavbom/Threat-Intelligence-Hunter" target="_blank">Threat-Intelligence-Hunter</a>
        </td>
        <td>
            TIH - это инструмент разведки, который помогает вам в поиске МОК по нескольким общедоступным каналам безопасности и некоторым известным API. Идея этого инструмента заключается в том, чтобы облегчить поиск и хранение часто добавляемых МОК для создания собственной локальной базы данных показателей.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/tiq-test" target="_blank">tiq-test</a>
        </td>
        <td>
            Тестовый инструмент Threat Intelligence Quotient (TIQ) обеспечивает визуализацию и статистический анализ каналов TI.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/yeti" target="_blank">YETI</a>
        </td>
        <td>
            YETI является доказательством реализации концепции TAXII поддерживает службы Inbox, Poll и Discovery, определенные TAXII Услуги Specifобледенение.
        </td>
    </tr>
</table>



## <a name="research"></a>Исследования, стандарты и книги

Материалы о разведке киберугроз, включая научные исследования и аналитические доклады.

<table>
    <tr>
        <td>
            <a href="https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections" target="_blank">APT & Cyber Criminal Campaign Collection</a>
        </td>
        <td>
            Обширное собрание (исторических) кампаний. Записи поступают из различных источников.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kbandla/APTnotes" target="_blank">APTnotes</a>
        </td>
        <td>
            Большое количество источников относительно <i>Продвинутые постоянные угрозы</i> (APTs). Эти отчеты обычно включают стратегические и тактические знания или советы.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://attack.mitre.org/" target="_blank">ATT&CK</a>
        </td>
        <td>
            Противоборствующая тактика, методы и общие знанияATT&CKТМ является моделью и основой для описания действий, которые противник может предпринять во время работы в корпоративной сети. ATT&CK Это постоянно растущий общий ориентир для методов пост-доступа, который приносит большую осведомленность о том, какие действия могут быть замечены во время сетевого вторжения. MITRE активно работает над интеграцией со связанными конструкциями. CAPECСтикс и MAEC.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.activeresponse.org/building-threat-hunting-strategy-with-the-diamond-model/" target="_blank">Building Threat Hunting Strategies with the Diamond Model</a>
        </td>
        <td>
            Серхио Кальтагироне о том, как разработать интеллектуальные стратегии охоты за угрозами с помощью алмазной модели
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://car.mitre.org/wiki/Main_Page" target="_blank">Cyber Analytics Repository by MITRE</a>
        </td>
        <td>
            Cyber Analytics Repository (CAR) - это база знаний аналитики, разработанная MITRE на основе тактики, методов и общих знаний противника.ATT&CKТМ) модель угрозы.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a>
        </td>
        <td>
            Новый <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a> использовать подход заинтересованных сторон и согласовывать с <a href="https://www.energy.gov/ceser/cybersecurity-capability-maturity-model-c2m2" target="_blank">Cybersecurity Capability Maturity Model (C2M2)</a> Расширение возможностей вашей команды и создание прочной ценности.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mitre/cti" target="_blank">Cyber Threat Intelligence Repository by MITRE</a>
        </td>
        <td>
            Репозиторий киберугроз разведки ATT&CK и CAPEC каталогов, выраженных в STIX 2.0 Джон.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.tandfonline.com/doi/full/10.1080/08850607.2020.1780062" target="_blank">Cyber Threat Intelligence: A Product Without a Process?</a>
        </td>
        <td>
            В научно-исследовательской работе описывается, как современные продукты разведки киберугроз не дотягивают и как их можно улучшить путем внедрения и оценки обоснованных методологий и процессов.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cryptome.org/2015/09/cti-guide.pdf" target="_blank">Definitive Guide to Cyber Threat Intelligence</a>
        </td>
        <td>
            Описывает элементы анализа киберугроз и обсуждает, как они собираются, анализируются и используются различными потребителями. Далее исследуется, как разведка может улучшить кибербезопасность на тактическом, оперативном и стратегическом уровнях и как она может помочь вам быстрее остановить атаки, улучшить защиту и более продуктивно говорить о проблемах кибербезопасности с исполнительным руководством в типичных условиях. <i>Для чайников</i> стиль.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ryanstillions.blogspot.nl/2014/04/the-dml-model_21.html" target="_blank">The Detection Maturity Level (DML)</a>
        </td>
        <td>
            Модель DML - это модель зрелости возможностей для ссылки на зрелость при обнаружении кибератак.
            Он предназначен для организаций, которые выполняют обнаружение и реагирование, основанное на информации, и которые делают акцент на наличие зрелой программы обнаружения.
            Зрелость организации измеряется не ее способностью просто получать соответствующий интеллект, а ее способностью эффективно применять этот интеллект к функциям обнаружения и реагирования.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/diamond.pdf" target="_blank">The Diamond Model of Intrusion Analysis</a>
        </td>
        <td>
            В этой статье представлена Алмазная модель, когнитивный каркас и аналитический инструмент для поддержки и улучшения анализа вторжений. Поддержка повышения измеримости, проверяемости и повторяемости в анализе вторжений для достижения более высокой эффективности, эффективности и точности в победе над противниками является одним из ее основных вкладов.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/a547092.pdf" target="_blank">The Targeting Process: D3A and F3EAD</a>
        </td>
        <td>
            F3EAD — это военная методология для объединения операций и разведки.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/NIST.SP.800-150.pdf" target="_blank">Guide to Cyber Threat Information Sharing by NIST</a>
        </td>
        <td>
            Руководство по обмену информацией о киберугрозах (специальная публикация NIST 800-)150) помогает организациям в создании возможностей реагирования на инциденты компьютерной безопасности, которые используют коллективные знания, опыт и способности своих партнеров, активно обмениваясь информацией об угрозах и продолжающейся координацией. Руководство содержит руководящие принципы для скоординированной обработки инцидентов, включая производство и потребление данных, участие в сообществах обмена информацией и защиту данных, связанных с инцидентами.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/Intelligence Preparation for the Battlefield-Battlespace.pdf" target="_blank">Intelligence Preparation of the Battlefield/Battlespace</a>
        </td>
        <td>
            В этой публикации обсуждается подготовка разведывательных данных о боевом пространстве как важнейшем компоненте процесса принятия и планирования военных решений, а также то, как IPB поддерживает принятие решений, а также интеграцию процессов и продолжение деятельности.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.lockheedmartin.com/content/dam/lockheed/data/corporate/documents/LM-White-Paper-Intel-Driven-Defense.pdf" target="_blank">Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains</a>
        </td>
        <td>
            Цепь уничтожения вторжений, представленная в этой статье, обеспечивает структурированный подход к анализу вторжений, извлечению индикаторов и выполнению защитных действий.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.isao.org" target="_blank">ISAO Standards Organization</a>
        </td>
        <td>
            The ISAO Standards Organization Неправительственная организация, созданная 1 октября. 2015. Его миссия заключается в улучшении положения кибербезопасности страны путем определения стандартов и руководящих принципов для надежного и эффективного обмена информацией, связанной с рисками кибербезопасности, инцидентами и передовой практикой.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/jp2_0.pdf" target="_blank">Joint Publication 2-0: Joint Intelligence</a>
        </td>
        <td>
            Эта публикация армии США составляет основу совместной доктрины разведки и закладывает основу для полной интеграции операций, планов и разведки в сплоченную команду. Представленные концепции применимы и к кибер-разведке.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://download.microsoft.com/download/8/0/1/801358EC-2A0A-4675-A2E7-96C2E7B93E73/Framework_for_Cybersecurity_Info_Sharing.pdf" target="_blank">Microsoft Research Paper</a>
        </td>
        <td>
            Рамки для обмена информацией о кибербезопасности и снижения рисков. Обзорный документ высокого уровня от Microsoft.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/draft-dulaunoy-misp-core-format-00" target="_blank">MISP Core Format (draft)</a>
        </td>
        <td>
            Этот документ описывает MISP основной формат обмена индикаторами и информацией об угрозах между MISP (Платформа обмена вредоносной информацией и угрозами).
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.necoma-project.eu/" target="_blank">NECOMA Project</a>
        </td>
        <td>
            Исследовательский проект Nippon-European Cyberdefense-Oriented Multilayer Threat Analysis (NECOMA) направлен на улучшение сбора и анализа данных об угрозах для разработки и демонстрации новых механизмов киберзащиты.
            В рамках проекта было опубликовано несколько публикаций и программных проектов.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/pyramidofpain.pdf" target="_blank">Pyramid of Pain</a>
        </td>
        <td>
            Пирамида боли — это графический способ выразить сложность получения различных уровней показателей и количества ресурсов, которые противники должны расходовать при получении защитниками.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.amazon.com/Structured-Analytic-Techniques-Intelligence-Analysis/dp/1452241511" target="_blank">Structured Analytic Techniques For Intelligence Analysis</a>
        </td>
        <td>
            Эта книга содержит методы, которые представляют самые современные лучшие практики в области разведки, правоохранительных органов, внутренней безопасности и бизнес-анализа.
        </td>
    </tr>
    <tr>
        <td>
            <a href="./docs/mwr-threat-intelligence-whitepaper.pdf" target="_blank">Threat Intelligence: Collecting, Analysing, Evaluating</a>
        </td>
        <td>
            В этом отчете MWR InfoSecurity четко описано несколько различных типов разведки угроз, включая стратегические, тактические и оперативные варианты. В нем также рассматриваются процессы выявления требований, сбора, анализа, производства и оценки разведки угроз. Также включены некоторые быстрые выигрыши и модель зрелости для каждого из типов разведки угроз, определенных MWR InfoSecurity.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://aisel.aisnet.org/wi2017/track08/paper/3/" target="_blank">Threat Intelligence Sharing Platforms: An Exploratory Study of Software Vendors and Research Perspectives</a>
        </td>
        <td>
            Систематическое исследование 22 платформ обмена информацией об угрозах (TISP) выявило восемь ключевых выводов о текущем состоянии использования разведки об угрозах, ее определении и TISP.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.us-cert.gov/tlp" target="_blank">Traffic Light Protocol</a>
        </td>
        <td>
            Протокол светофора (TLP) представляет собой набор обозначений, используемых для обеспечения обмена конфиденциальной информацией с правильной аудиторией. Он использует четыре цвета для обозначения различных степеней чувствительности и соответствующих общих соображений, которые должны применяться получателем (получателями).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pan-unit42.github.io/playbook_viewer/" target="_blank">Unit42 Playbook Viewer</a>
        </td> 
        <td>
            Цель Playbook состоит в том, чтобы организовать инструменты, методы и процедуры, которые противник использует в структурированном формате, который может быть разделен с другими и построен на основе. Фреймворки, используемые для структурирования и обмена сценариями противника, принадлежат MITRE. ATT&CK Рамки и STIX 2.0
        </td>    
    </tr>
    <tr>
        <td>
            <a href="docs/sans-whos-using-cyberthreat-intelligence-and-how.pdf" target="_blank">Who's Using Cyberthreat Intelligence and How?</a>
        </td>
        <td>
            Документ Института SANS, описывающий использование Threat Intelligence, включая проведенный опрос.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.wombat-project.eu/" target="_blank">WOMBAT Project</a>
        </td>
        <td>
            The WOMBAT project Цель состоит в том, чтобы предоставить новые средства для понимания существующих и возникающих угроз, которые нацелены на интернет-экономику и чистых граждан. Для достижения этой цели предложение включает в себя три ключевых рабочих пакета: i) сбор в режиме реального времени разнообразного набора исходных данных, связанных с безопасностью, ii) обогащение этих данных с помощью различных методов анализа и iii) выявление первопричин и понимание рассматриваемых явлений.
        </td>
    </tr>
</table>



## Лицензия

Лицензировано по условиям [Apache License 2.0](LICENSE).
