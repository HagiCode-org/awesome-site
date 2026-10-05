# awesome-threat-intelligence
Eine kuratierte Auswahl hochwertiger Ressourcen zu Threat Intelligence

Eine kurze Definition von Threat Intelligence: *evidenzbasiertes Wissen einschließlich Kontext, Mechanismen, Indikatoren, Auswirkungen und umsetzbarer Empfehlungen zu einer bestehenden oder neu entstehenden Bedrohung oder Gefahr für Vermögenswerte, das Entscheidungen über die Reaktion darauf unterstützen kann*.

Beiträge sind willkommen: [Mitwirken](CONTRIBUTING.md).

- [Quellen](#sources)
- [Formate](#formats)
- [Frameworks und Plattformen](#frameworks-and-platforms)
- [Werkzeuge](#tools)
- [Forschung, Standards und Bücher](#research)


## Quellen

Die meisten der unten aufgeführten Ressourcen bieten Listen und/oder APIs, um möglichst aktuelle Informationen zu Bedrohungen abzurufen.
Manche betrachten diese Quellen als Threat Intelligence; dazu gibt es jedoch unterschiedliche Meinungen.
Für echte Threat Intelligence ist eine gewisse domänen- oder geschäftsspezifische Analyse erforderlich.

<table>
    <tr>
        <td>
            <a href="https://www.abuseipdb.com/" target="_blank">AbuseIPDB</a>
        </td>
        <td>
            AbuseIPDB ist ein Projekt zur Bekämpfung der Verbreitung von Hackern, Spammern und missbräuchlichen Aktivitäten im Internet. Seine mission ist es, das web sicherer zu machen, indem sie eine zentrale schwarze liste für webmaster, systemadministratoren und andere interessierte bereitstellt, um ip-adressen zu melden und zu finden, die mit bösartigen aktivitäten online in verbindung gebracht wurden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://docs.google.com/spreadsheets/u/1/d/1H9_xaxQHpWaa4O_Son4Gx0YOIzlcBWMsdvePFX68EKU/pubhtml" target="_blank">APT Groups and Operations</a>
        </td>
        <td>
            Eine Tabelle mit Informationen und Informationen über APT-Gruppen, Operationen und Taktiken.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.binarydefense.com/banlist.txt" target="_blank">Binary Defense IP Banlist</a>
        </td>
        <td>
            Binary Defense Systems Artillery Threat Intelligence Feed und IP Banlist Feed.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.circl.lu/projects/bgpranking/" target="_blank">BGP Ranking</a>
        </td>
        <td>
            Ranking von ASNs mit den meisten bösartigen Inhalten.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intel.malwaretech.com/" target="_blank">Botnet Tracker</a>
        </td>
        <td>
            Verfolgt mehrere aktive Botnetze.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.botvrij.eu/">BOTVRIJ.EU</a>
        </td>
        <td>
            Botvrij.eu bietet verschiedene Sätze von Open-Source-IOCs, die Sie in Ihren Sicherheitsgeräten verwenden können, um mögliche bösartige Aktivitäten zu erkennen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://danger.rulez.sk/index.php/bruteforceblocker/download/" target="_blank">BruteForceBlocker</a>
        </td>
        <td>
            BruteForceBlocker Es handelt sich um ein Perl-Script, das die sshd-Protokolle eines Servers überwacht und Brute-Force-Angriffe identifiziert, mit denen es dann automatisch Firewall-Blockierungsregeln konfiguriert und diese IPs an die Projektseite zurücksendet. <a href="http://danger.rulez.sk/projects/bruteforceblocker/blist.php">http://danger.rulez.sk/projects/bruteforceblocker/blist.php</a>.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://osint.bambenekconsulting.com/feeds/c2-ipmasterlist.txt" target="_blank">C&amp;C Tracker</a>
        </td>
        <td>
            Ein Feed von bekannten, aktiven und nicht-sinkholierten C&amp;C IP-Adressen, von Bambenek Consulting. Benötigt eine Lizenz für die kommerzielle Nutzung.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://certstream.calidog.io/" target="_blank">CertStream</a>
        </td>
        <td>
            Echtzeit-Zertifikattransparenzprotokoll-Update-Stream. Sehen Sie SSL-Zertifikate, wie sie in Echtzeit ausgestellt werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.ccssforum.org/malware-certificates.php" target="_blank">CCSS Forum Malware Certificates</a>
        </td>
        <td>
            Im folgenden finden sie eine liste digitaler zertifikate, die vom forum als möglicherweise mit malware verbunden mit verschiedenen zertifizierungsstellen gemeldet wurden. Diese Informationen sollen verhindern, dass Unternehmen digitale Zertifikate verwenden, um Malware zu legitimieren und den sofortigen Widerruf solcher Zertifikate zu fördern.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://cinsscore.com/list/ci-badguys.txt" target="_blank">CI Army List</a>
        </td>
        <td>
        Eine Untergruppe des kommerziellen <a href="http://cinsscore.com/">CINS Score</a> Liste, die sich auf schlecht bewertete IPs konzentriert, die derzeit auf anderen Bedrohungslisten nicht vorhanden sind.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://s3-us-west-1.amazonaws.com/umbrella-static/index.html" target="_blank">Cisco Umbrella</a>
        </td>
        <td>
            Wahrscheinliche Whitelist der Top 1 Million Websites, die von Cisco Umbrella aufgelöst wurden (war OpenDNS).
	</td>
    </tr>
    <tr>
        <td>
            <a href="https://cloudmersive.com/virus-api" target="_blank">Cloudmersive Virus Scan</a>
        </td>
        <td>
            Cloudmersive Virus Scan APIs scannen Dateien, URLs und Cloud-Speicher nach Viren. Sie nutzen kontinuierlich aktualisierte Signaturen für Millionen von Bedrohungen und fortschrittliche Hochleistungs-Scanfunktionen. Der Dienst ist kostenlos, erfordert jedoch, dass Sie sich für ein Konto registrieren, um Ihren persönlichen API-Schlüssel abzurufen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.crowdsec.net/" target="_blank">CrowdSec Console</a>
        </td>
        <td>
            Der größte Crowdsourcing-CTI, der dank CrowdSec eine Next-Gen, Open-Source, freie und kollaborative IDS/IPS-Software. <a href="https://crowdsec.net" target="_blank">CrowdSec</a>  ist in der Lage, das Besucherverhalten zu analysieren und eine angepasste Reaktion auf alle Arten von Angriffen zu bieten. Benutzer können ihre Warnungen über Bedrohungen mit der Community teilen und vom Netzwerkeffekt profitieren. Die IP-Adressen werden von echten Angriffen gesammelt und stammen nicht ausschließlich aus einem Honeypot-Netzwerk.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cybercure.ai/" target="_blank">Cyber Cure free intelligence feeds</a>
        </td>
        <td>
            Cyber Cure bietet kostenlose Cyber Threat Intelligence Feeds mit Listen von IP-Adressen, die derzeit im Internet infiziert sind und angreifen. Es gibt eine Liste von URLs, die von Malware verwendet werden, und eine Liste von Hash-Dateien bekannter Malware, die sich derzeit ausbreitet. CyberCure verwendet Sensoren, um Intelligenz mit einer sehr geringen Falsch-Positiv-Rate zu sammeln. Ausführlich <a href="https://docs.cybercure.ai" target="_blank">documentation</a> ist ebenfalls verfügbar.
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/community/ctix-feeds" target="_blank">Cyware Threat Intelligence Feeds</a>
        </td>
        <td>
            Die Threat Intelligence-Feeds von Cyware bieten Ihnen wertvolle Bedrohungsdaten aus einer Vielzahl offener und vertrauenswürdiger Quellen, um einen konsolidierten Strom wertvoller und umsetzbarer Bedrohungsinformationen zu liefern. Unsere Threat-Intel-Feeds sind voll kompatibel mit STIX 1.x und 2.0 und bieten Ihnen die neuesten Informationen zu bösartigen Malware-Hashes, IPs und Domains, die weltweit in Echtzeit aufgedeckt werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://dataplane.org/" target="_blank">DataPlane.org</a>
        </td>
        <td>
          DataPlane.org ist eine Community-basierte Internet-Daten-, Feeds- und Messressource für Betreiber von Betreibern. Wir bieten zuverlässigen und vertrauenswürdigen Service ohne Kosten.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://focsec.com" target="_blank">Focsec.com</a>
        </td>
        <td>
          Focsec.com stellt eine API zur Erkennung von VPNs, Proxys, Bots und TOR-Anfragen bereit. Immer aktuelle Daten helfen dabei, verdächtige Anmeldungen, Betrug und Missbrauch zu erkennen. Codebeispiele finden Sie im <a href="https://docs.focsec.com" target="_blank">documentation</a>.
        </td>
   </tr>	
   <tr>
        <td>
            <a href="https://osint.digitalside.it/" target="_blank">DigitalSide Threat-Intel</a>
        </td>
        <td>
          Enthält Sätze von Open Source Cyber Threat Intelligence Indikatoren, die hauptsächlich auf Malware-Analysen und kompromittierten URLs, IPs und Domains basieren. Ziel dieses Projekts ist es, neue Wege zu entwickeln und zu testen, um relevante IoCs zu jagen, zu analysieren, zu sammeln und zu teilen, die von SOC / CSIRT / CERT / Einzelpersonen mit minimalem Aufwand verwendet werden können. Berichte werden auf drei Arten geteilt: <a href="https://osint.digitalside.it/Threat-Intel/stix2/" target="_blank">STIX2</a>, <a href="https://osint.digitalside.it/Threat-Intel/csv/" target="_blank">CSV</a> und <a href="https://osint.digitalside.it/Threat-Intel/digitalside-misp-feed/" target="_blank">MISP Feed</a>Berichte werden auch in der <a href="https://github.com/davidonzo/Threat-Intel/" target="_blank">project's Git repository</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/martenson/disposable-email-domains">Disposable Email Domains</a>
        </td>
        <td>
            Eine Sammlung von anonymen oder Einweg-E-Mail-Domains, die üblicherweise für Spam / Missbrauch von Diensten verwendet werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://securitytrails.com/dns-trails">DNS Trails</a>
        </td>
        <td>
            Freie Informationsquelle für aktuelle und historische DNS-Informationen, WHOIS-Informationen, Suche nach anderen Websites, die mit bestimmten IPs verbunden sind, Wissen und Technologien in Subdomains. Es gibt eine <a href="https://securitytrails.com/">IP and domain intelligence API available</a> auch. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feed.ellio.tech" target="_blank">ELLIO: IP Feed (community free version)</a>
        </td>
        <td>
            Eine Bedrohungsliste bekannter bösartiger IP-Adressen, von denen erwartet wird, dass sie in naher Zukunft potenzielle Bedrohungen für Ihr Netzwerk darstellen, bekannte gutartige Scanner und IP-Adressen von Akteuren mit unbekannter Absicht. Es ist mit einer 24-stündigen Verzögerung für den persönlichen, nicht-kommerziellen Gebrauch ausgestattet, bietet aber dennoch einen außergewöhnlichen Schutz im Vergleich zu anderen offenen IP-Bedrohungslisten / Feeds.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/fwrules/" target="_blank">Emerging Threats Firewall Rules</a>
        </td>
        <td>
            Eine Sammlung von Regeln für verschiedene Arten von Firewalls, einschließlich iptables, PF und PIX.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/blockrules/" target="_blank">Emerging Threats IDS Rules</a>
        </td>
        <td>
            Eine Sammlung von Snort und Suricata <i>Vorschriften</i> Dateien, die zum Warnen oder Blockieren verwendet werden können.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exonerator.torproject.org/" target="_blank">ExoneraTor</a>
        </td>
        <td>
            Die ExoneraTor Der dienst unterhält eine datenbank mit ip-adressen, die teil des tor-netzwerks waren. Es beantwortet die Frage, ob an einem bestimmten Datum ein Tor-Relay unter einer bestimmten IP-Adresse ausgeführt wurde.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.exploitalert.com/" target="_blank">Exploitalert</a>
        </td>
        <td>
            Auflistung der neuesten veröffentlichten Exploits.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intercept.sh/threatlists/" target="_blank">FastIntercept</a>
        </td>
        <td>
	    Intercept Security hostet eine Reihe von kostenlosen IP-Reputationslisten aus ihrem globalen Honeypot-Netzwerk.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feodotracker.abuse.ch/" target="_blank">ZeuS Tracker</a>
        </td>
        <td>
            Der Feodo Tracker <a href="https://abuse.ch/" target="_blank">abuse.ch</a> Der Trojaner Feodo.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://iplists.firehol.org/" target="_blank">FireHOL IP Lists</a>
        </td>
        <td>
            400+ öffentlich zugängliche IP-Feeds, die analysiert wurden, um ihre Entwicklung, Geo-Karte, Alter der IPs, Aufbewahrungsrichtlinien und Überschneidungen zu dokumentieren. Die Website konzentriert sich auf Cyberkriminalität (Angriffe, Missbrauch, Malware).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://fraudguard.io/" target="_blank">FraudGuard</a>
        </td>
        <td>
            FraudGuard ist ein Service, der eine einfache Möglichkeit bietet, die Nutzung durch kontinuierliches Sammeln und Analysieren des Echtzeit-Internetverkehrs zu validieren.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://greynoise.io/" target="_blank">GreyNoise</a>
        </td>
        <td>
            GreyNoise sammelt und analysiert Daten über internetweite Scan-Aktivitäten. Es sammelt Daten über gutartige Scanner wie Shodan.io sowie bösartige Akteure wie SSH und Telnet-Würmer. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://griffinguard.io/" target="_blank">GriffinGuard</a>
        </td>
        <td>
            GriffinGuard ist eine Cybersicherheitsplattform, die Echtzeit-Bedrohungsinformationen durch kontinuierliche Analyse des globalen Internetverkehrs und der Nutzungsmuster liefert. Es bietet kostenlose Datensuche und einige kostenlose IP blocklists.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://honeydb.io/" target="_blank">HoneyDB</a>
        </td> 
        <td>
            HoneyDB liefert Echtzeitdaten der Honeypot-Aktivität. Diese Daten stammen von Honeypots, die im Internet unter Verwendung der <a href="https://github.com/foospidy/HoneyPy" target="_blank">HoneyPy</a> Honigtopf. Darüber hinaus HoneyDB bietet API-Zugriff auf gesammelte Honeypot-Aktivitäten, die auch aggregierte Daten aus verschiedenen Honeypot-Twitter-Feeds enthalten.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SupportIntelligence/Icewater" target="_blank">Icewater</a>
        </td>
        <td>
            12.805 Freie Yara-Regeln, erstellt von Project Icewater.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://infosec.cert-pa.it" target="_blank">Infosec - CERT-PA</a>
        </td>
        <td>
            Malware-Proben <a href="https://infosec.cert-pa.it/analyze/submission.html" target="_blank">collection and analysis</a>, <a href="https://infosec.cert-pa.it/analyze/statistics.html" target="_blank">blocklist service, <a href="https://infosec.cert-pa.it/cve.html">vulnerabilities database</a> und mehr. Erstellt und verwaltet von CERT-PA.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://labs.inquest.net" target="_blank">InQuest Labs</a>
        </td>
        <td>
            Ein offenes, interaktives und API-gesteuertes Datenportal für Sicherheitsforscher. Durchsuchen Sie einen großen Korpus von Dateiproben, aggregierten Reputationsinformationen und IOCs aus öffentlichen Quellen. Erweitern Sie die YARA-Entwicklung mit Werkzeugen, um Trigger zu erzeugen, mit Mixed-Case-Hex umzugehen und base64-kompatible reguläre Ausdrücke zu erzeugen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.iblocklist.com/lists" target="_blank">I-Blocklist</a>
        </td>
        <td>
            I-Blocklist unterhält mehrere Arten von Listen, die IP-Adressen verschiedener Kategorien enthalten. Einige dieser Hauptkategorien umfassen Länder, ISPs und Organisationen. Andere Listen umfassen Web-Angriffe, TOR, Spyware und Proxies. Viele sind frei zu verwenden und in verschiedenen Formaten verfügbar.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ipasis.com" target="_blank">IPASIS</a>
        </td>
        <td>
            IPASIS ist eine Echtzeit-Boterkennungs- und Betrugspräventions-API, die IP-Intelligenz, Proxy/VPN/Tor-Erkennung und E-Mail-Validierung in einem einzigen API-Aufruf kombiniert. Jede Anfrage gibt einen Interaction Trust Score zurück (0-)100) mit Sub-20ms Reaktionszeit. Free tier beinhaltet 1000 anfragen pro tag. <a href="https://ipasis.com/docs" target="_blank">API documentation</a> und a <a href="https://ipasis.com/scan" target="_blank">live scanner</a> verfügbar sind.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/stamparm/ipsum/master/ipsum.txt" target="_blank">IPsum</a>
        </td>
        <td>
            IPsum ist ein Threat Intelligence Feed basierend auf 30+ verschiedene öffentlich zugängliche Listen von verdächtigen und/oder bösartigen IP-Adressen. Alle Listen werden täglich (24 Stunden) automatisch abgerufen und analysiert, und das Endergebnis wird in dieses Repository geschoben. Die Liste besteht aus IP-Adressen zusammen mit einer Gesamtzahl von (schwarzen) Listenvorkommen (für jede). Erstellt und verwaltet von <a href="https://twitter.com/stamparm">Miroslav Stampar</a>.
        </td>
    </tr>
    <tr>
	<td>
            <a href="https://jamesbrine.com.au" target="_blank">James Brine Threat Intelligence Feeds</a>
        </td>
        <td>
		JamesBrine bietet tägliche Threat-Intelligence-Feeds für bösartige IP-Adressen von international gelegenen Honeypots auf Cloud- und privater Infrastruktur, die eine Vielzahl von Protokollen wie SSH, FTP, RDP, GIT, SNMP und REDIS abdecken. Die IOCs des Vortages sind verfügbar in STIX2 sowie zusätzliche IOCs wie verdächtige URIs und neu registrierte Domains, die eine hohe Nutzungswahrscheinlichkeit in Phishing-Kampagnen haben.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/datafeeds" target="_blank">Kaspersky Threat Data Feeds</a>
        </td>
        <td>
Kontinuierliche Aktualisierung und Information Ihres Unternehmens oder Ihrer Kunden über Risiken und Auswirkungen im Zusammenhang mit Cyberbedrohungen. Die Echtzeitdaten helfen Ihnen, Bedrohungen effektiver zu mindern und sich noch vor dem Start vor Angriffen zu schützen. Demo Data Feeds enthalten gekürzte Sätze von IoCs (bis zu 1%) im Vergleich zu den kommerziellen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://majestic.com/reports/majestic-million" target="_blank">Majestic Million</a>
        </td>
        <td>
            Wahrscheinliche Whitelist der Top 1 Million Websites, wie von Majestic eingestuft. Sites werden nach der Anzahl der verweisenden Subnetze geordnet. Mehr zum Ranking finden Sie auf Ihrer <a href="https://blog.majestic.com/development/majestic-million-csv-daily/" target="_blank">blog</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maldatabase.com/" target="_blank">Maldatabase</a>
        </td>
        <td>
            Maldatabase wurde entwickelt, um Malware Data Science und Threat Intelligence Feeds zu unterstützen. Vorausgesetzt, die Daten enthalten gute Informationen über, unter anderem Felder, kontaktierte Domains, Liste der ausgeführten Prozesse und abgelegte Dateien von jedem Sample. Mit diesen Feeds können Sie Ihre Überwachungs- und Sicherheitstools verbessern. Kostenlose Dienste stehen für Sicherheitsforscher und Studenten zur Verfügung. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malpedia.caad.fkie.fraunhofer.de/" target="_blank">Malpedia</a>
        </td>
        <td>
Das primäre Ziel von Malpedia ist es, eine Ressource für eine schnelle Identifizierung und einen umsetzbaren Kontext bei der Untersuchung von Malware bereitzustellen. Die Offenheit für kuratierte Beiträge gewährleistet ein rechenschaftspflichtiges Qualitätsniveau, um sinnvolle und reproduzierbare Forschung zu fördern. 
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://www.malshare.com/" target="_blank">MalShare.com</a>
        </td>
        <td>
            Das MalShare-Projekt ist ein öffentliches Malware-Repository, das Forschern freien Zugriff auf Proben bietet.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.maltiverse.com/" target="_blank">Maltiverse</a>
        </td>
        <td>
            Das Maltiverse-Projekt ist eine große und erweiterte IoC-Datenbank, in der es möglich ist, komplexe Abfragen und Aggregationen zu erstellen, um Malware-Kampagnen und ihre Infrastrukturen zu untersuchen. Es hat auch einen großartigen IoC-Massenabfragedienst.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bazaar.abuse.ch/" target="_blank">MalwareBazaar</a>
        </td>
        <td>
            MalwareBazaar ist ein Projekt von abuse.ch mit dem Ziel, Malware-Samples mit der Infosec-Community, AV-Anbietern und Threat Intelligence-Anbietern zu teilen.
        </td>
    </tr>	
    <tr>
        <td>
            <a href="https://www.malwaredomainlist.com/" target="_blank">Malware Domain List</a>
        </td>
        <td>
            Eine durchsuchbare Liste von bösartigen Domains, die auch Reverse durchführen lookups und Listen von Registranten, die sich auf Phishing, Trojaner und Exploit-Kits konzentrieren.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.malwarepatrol.net/" target="_blank">Malware Patrol</a>
        </td>
        <td>
            Malware Patrol bietet Blocklisten, Datenfeeds und Threat Intelligence für Unternehmen jeder Größe. Da unsere Spezialität Cyber Threat Intelligence ist, gehen alle unsere Ressourcen in die Sicherstellung der höchstmöglichen Qualität. Wir glauben, dass ein Sicherheitsteam und seine Werkzeuge nur so gut sind wie die verwendeten Daten. Dies bedeutet, dass unsere Feeds nicht mit gekratzten, nicht verifizierten Indikatoren gefüllt sind. Wir schätzen Qualität über Quantität. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malware-traffic-analysis.net/" target="_blank">Malware-Traffic-Analysis.net</a>
        </td>
        <td>
            Dieser Blog konzentriert sich auf den Netzwerkverkehr im Zusammenhang mit Malware-Infektionen. Enthält Traffic-Analyseübungen, Tutorials, Malware-Beispiele, Pcap-Dateien von bösartigem Netzwerkverkehr und technische Blog-Posts mit Beobachtungen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.malwaredomains.com/" target="_blank">MalwareDomains.com</a>
        </td>
        <td>
            Das DNS-BH-Projekt erstellt und verwaltet eine Liste von Domänen, von denen bekannt ist, dass sie zur Verbreitung von Malware und Spyware verwendet werden. Diese können sowohl zur Erkennung als auch zur Prävention (Sinkholing DNS Requests) verwendet werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opswat.com/developers/threat-intelligence-feed" target="_blank">MetaDefender Cloud</a>
        </td>
        <td>
            MetaDefender Cloud Threat Intelligence Feeds enthält neue Malware-Hash-Signaturen, darunter MD5, SHA1 und SHA256. Diese neuen bösartigen Hashes wurden von MetaDefender Cloud innerhalb der letzten 24 Stunden. Die Feeds werden täglich mit neu erkannter und gemeldeter Malware aktualisiert, um umsetzbare und zeitnahe Bedrohungsinformationen bereitzustellen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.nothink.org">NoThink!</a>
        </td>
        <td>SNMP, SSH, Telnet Blacklisted IPs von Matteo Cantoni Honeypots</td>
    </tr>
    <tr>
        <td>
            <a href="https://services.normshield.com" target="_blank">NormShield Services</a>
        </td>
        <td>
            NormShield Services Tausende von Domäneninformationen (einschließlich Whois-Informationen) bereitstellen, von denen potenzielle Phishing-Angriffe stammen können. Breach- und Blacklist-Dienste sind ebenfalls verfügbar. Es gibt eine kostenlose Anmeldung für öffentliche Dienste zur kontinuierlichen Überwachung.
        </td>
    </tr> 
    <tr>
        <td>
            <a href="https://novasense-threats.com" target="_blank">NovaSense Threats</a>
        </td>
        <td>
            NovaSense ist das Snapt Threat Intelligence Center und bietet Einblicke und Werkzeuge für präventiven Bedrohungsschutz und Angriffsminderung. NovaSense schützt Kunden jeder Größe vor Angreifern, Missbrauch, Botnets, DoS-Angriffen und mehr.
        </td>
    </tr>     
    <tr>
        <td>
            <a href="https://www.obstracts.com/" target="_blank">Obstracts</a>
        </td>
        <td>
            Der RSS-Reader für Cybersicherheitsteams. Verwandeln Sie jeden Blog in strukturierte und umsetzbare Threat Intelligence.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://openphish.com/phishing_feeds.html" target="_blank">OpenPhish Feeds</a>
        </td>
        <td>
            OpenPhish empfängt URLs aus mehreren Streams und analysiert sie mithilfe seiner proprietären Phishing-Erkennungsalgorithmen. Es gibt kostenlose und kommerzielle Angebote.
        </td>
    </tr>
        <tr>
        <td>
            <a href="https://feed.seguranca-informatica.pt/index.php" target="_blank">0xSI_f33d</a>
        </td>
        <td>
            Kostenloser Service für die Erkennung von Phishing- und Malware-Domains, Blacklist-IPs im portugiesischen Cyberspace.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.phishtank.com/developer_info.php" target="_blank">PhishTank</a>
        </td>
        <td>
            PhishTank liefert eine Liste von mutmaßlichen Phishing-URLs. Ihre Daten stammen aus menschlichen Berichten, aber sie nehmen nach Möglichkeit auch externe Feeds auf. Es ist ein kostenloser Dienst, aber die Registrierung für einen API-Schlüssel ist manchmal notwendig.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.celerium.com/pickupstix" target="_blank">PickupSTIX</a>
        </td>
        <td>
            PickupSTIX ist ein Feed von freier, Open-Source- und nicht kommerzialisierter Cyber Threat Intelligence. Derzeit PickupSTIX verwendet drei öffentliche Feeds und verteilt jeden Tag etwa 100 neue Informationen. PickupSTIX übersetzt die verschiedenen Feeds in STIX, die mit jedem TAXII Server. Die Daten sind kostenlos zu verwenden und sind eine gute Möglichkeit, mit Cyber Threat Intelligence zu beginnen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://qfeeds.com" target="_blank">Q-Feeds Threat Intelligence</a>
        </td>
        <td>
            Q-Feeds ist ein Cybersicherheitsunternehmen, das Daten aus OSINT, proprietärer Forschung und kommerziellen Threat Intelligence Feeds zusammenführt, um eine abgerundete und äußerst umsetzbare Lösung zu bieten. Das Threat Intelligence Portal (TIP) erleichtert es Unternehmen, auf diese Daten in Echtzeit zuzugreifen und diese zu verwalten. Durch die Integration in Firewalls, SIEMs und andere Sicherheitsplattformen hilft Q-Feeds Unternehmen dabei, Verbindungen zu bekannten bösartigen IPs, Domains und URLs proaktiv zu blockieren, bevor Bedrohungen Schaden anrichten können. Sie haben auch eine Community-Version auf Anfrage zur Verfügung.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rescure.fruxlabs.com/" target="_blank">REScure Threat Intel Feed</a>
        </td>
        <td>
            [RES]cure ist ein unabhängiges Threat-Intelligence-Projekt, das vom Fruxlabs Crack-Team durchgeführt wird, um das Verständnis der zugrunde liegenden Architektur verteilter Systeme, der Art der Threat-Intelligence und der effizienten Erfassung, Speicherung, Verbrauch und Verteilung von Threat-Intelligence zu verbessern. Feeds werden alle 6 Stunden generiert.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rstcloud.net/" target="_blank">RST Cloud Threat Intel Feed</a>
        </td>
        <td>
            Aggregierte kompromissindikatoren, die aus mehreren offenen und von der community unterstützten quellen gesammelt und überprüft wurden, angereichert und mit unserer intelligence-plattform eingestuft.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://report.cs.rutgers.edu/mrtg/drop/dropstat.cgi?start=-86400">Rutgers Blacklisted IPs</a>
        </td>
        <td>IP-Liste der SSH Brute-Force-Angreifer wird aus einer Zusammenführung von lokal beobachteten IPs und 2 Stunden alten IPs erstellt, die bei badip.com und blocklist.de registriert sind</td>
    </tr>
    <tr>
        <td>
            <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS Suspicious Domains</a>
        </td>
        <td>
            The Suspicious Domains Threat Lists von <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS</a> Verfolgt verdächtige Domains. Es bietet 3 Listen kategorisiert als entweder <a href="https://isc.sans.edu/feeds/suspiciousdomains_High.txt" target="_blank">high</a>, <a href="https://isc.sans.edu/feeds/suspiciousdomains_Medium.txt" target="_blank">medium</a> oder <a href="https://isc.sans.edu/feeds/suspiciousdomains_Low.txt" target="_blank">low</a> Sensitivität, bei der die Liste mit hoher Sensitivität weniger falsch positive Werte aufweist, während die Liste mit niedriger Sensitivität mehr falsch positive Werte aufweist. Es gibt auch eine <a href="https://isc.sans.edu/feeds/suspiciousdomains_whitelist_approved.txt" target="_blank">approved whitelist</a> von Domains.<br/>
            Schließlich wird eine <a href="https://isc.sans.edu/block.txt" target="_blank">IP blocklist</a> von <a href="https://dshield.org">DShield</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/securityscorecard/SSC-Threat-Intel-IoCs" target="_blank">SecurityScorecard IoCs</a>
        </td>
        <td>
            Öffentlicher Zugriff auf IoCs aus technischen Blog-Posts und Berichten von SecurityScorecard.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.stixify.com/" target="_blank">Stixify</a>
        </td>
        <td>
            Ihr automatisierter Threat Intelligence Analyst. Extrahieren Sie maschinenlesbare Intelligenz aus unstrukturierten Daten.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/signature-base" target="_blank">signature-base</a>
        </td>
        <td>
            Eine Datenbank mit Signaturen, die in anderen Tools von Neo23x0 verwendet werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.spamhaus.org/" target="_blank">The Spamhaus project</a>
        </td>
        <td>
            Das Spamhaus-Projekt enthält mehrere Bedrohungslisten, die mit Spam- und Malware-Aktivitäten verbunden sind.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.sophos.com/intelix" target="_blank">SophosLabs Intelix</a>
        </td>
        <td>
            SophosLabs Intelix ist die Threat Intelligence Plattform, die Sophos Produkte und Partner unterstützt. Sie können auf Intelligenz basierend auf Datei-Hash, URL usw. zugreifen. sowie Proben zur Analyse vorzulegen. Über REST APIs können Sie diese Threat Intelligence einfach und schnell zu Ihren Systemen hinzufügen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://spur.us" target="_blank">Spur</a>
        </td>
        <td>
            Spur bietet Tools und Daten zur Erkennung von VPNs, Residential Proxies und Bots. Free Plan ermöglicht es Benutzern, lookup Eine ip und erhalten ihre klassifizierung, vpn-anbieter, beliebte geolocations hinter der ip und einige nützlichere kontexte.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://sslbl.abuse.ch/" target="_blank">SSL Blacklist</a>
        </td>
        <td>
            SSL Blacklist (SSLBL) ist ein Projekt, das von abuse.chZiel ist es, eine Liste "schlechter" SSL-Zertifikate bereitzustellen, die durch abuse.ch mit Malware- oder Botnet-Aktivitäten in Verbindung gebracht werden. SSLBL setzt auf SHA1-Fingerabdrücke von bösartigen SSL-Zertifikaten und bietet verschiedene Blacklists an
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://statvoo.com/dl/top-1million-sites.csv.zip" target="_blank">Statvoo Top 1 Million Sites</a>
        </td>
        <td>
            Wahrscheinliche Whitelist der Top 1 Million Websites, wie von Statvoo eingestuft.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://strongarm.io" target="_blank">Strongarm, by Percipient Networks</a>
        </td>
        <td>
            Strongarm ist ein DNS-Blackhole, das auf Indikatoren für Kompromisse reagiert, indem es Malware-Befehle und -Kontrolle blockiert. Strongarm aggregiert kostenlose Indikator-Feeds, integriert sich in kommerzielle Feeds, nutzt die IOC-Feeds von Percipient und betreibt DNS-Resolver und APIs, die Sie zum Schutz Ihres Netzwerks und Ihres Unternehmens verwenden können. Strongarm ist kostenlos für den persönlichen Gebrauch.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.siemrules.com" target="_blank">SIEM Rules</a>
        </td>
        <td>
            Ihre Detection Engineering Datenbank. View, Modification und Deployment SIEM rules zur Bedrohungsjagd und -aufdeckung.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.talosintelligence.com/" target="_blank">Talos</a>
        </td>
        <td>
	    Die Cisco Talos Intelligence Group ist eines der größten kommerziellen Threat Intelligence Teams der Welt, bestehend aus erstklassigen Forschern, Analysten und Ingenieuren. Diese Teams werden durch konkurrenzlose Telemetrie und ausgeklügelte Systeme unterstützt, um genaue, schnelle und umsetzbare Bedrohungsinformationen für Cisco-Kunden, Produkte und Dienstleistungen zu erstellen. Talos verteidigt Cisco-Kunden vor bekannten und aufkommenden Bedrohungen, entdeckt neue Schwachstellen in gängiger Software und verbietet Bedrohungen in freier Wildbahn, bevor sie das Internet weiter schädigen können. Talos unterhält die offiziellen Regelsätze von Snort.org, ClamAV und SpamCop und veröffentlicht viele Open-Source-Forschungs- und Analysetools. Talos bietet eine einfach zu bedienende web-ui, um eine zu überprüfen. <a href="https://www.talosintelligence.com/reputation">observable's reputation</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfeeds.io" target="_blank">threatfeeds.io</a>
        </td>
        <td>
            threatfeeds.io listet kostenlose und Open Source Threat Intelligence Feeds und Quellen auf und bietet direkte Download-Links und Live-Zusammenfassungen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfox.abuse.ch/" target="_blank">threatfox.abuse.ch</a>
        </td>
        <td>
            ThreatFox ist eine kostenlose Plattform von abuse.ch Mit dem Ziel, Indikatoren für Kompromisse (IOCs) im Zusammenhang mit Malware mit der Infosec-Community, AV-Anbietern und Threat Intelligence-Anbietern zu teilen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatconnect.com/blog/ingest-technical-blogs-reports/" target="_blank">Technical Blogs and Reports, by ThreatConnect</a>
        </td>
        <td>
            Diese Quelle wird mit Inhalten aus über 90 Open-Source-, Sicherheitsblogs gefüllt. IOCs<a href="https://en.wikipedia.org/wiki/Indicator_of_compromise" target="_blank">Indicators of Compromise</a>) werden aus jedem Blog analysiert und der Inhalt des Blogs wird in Markdown formatiert.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatjammer.com" target="_blank">Threat Jammer</a>
        </td>
        <td>
            Threat Jammer ist ein REST-API-Service, der es Entwicklern, Sicherheitsingenieuren und anderen IT-Profis ermöglicht, auf hochwertige Threat-Intelligence-Daten aus einer Vielzahl von Quellen zuzugreifen und sie in ihre Anwendungen zu integrieren, mit dem einzigen Zweck, bösartige Aktivitäten zu erkennen und zu blockieren.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatminer.org/" target="_blank">ThreatMiner</a>
        </td>
        <td>
            ThreatMiner wurde geschaffen, um Analysten von der Datenerhebung zu befreien und ihnen ein Portal zur Verfügung zu stellen, auf dem sie ihre Aufgaben vom Lesen von Berichten bis hin zu Pivot und Datenanreicherung ausführen können.
            Die Betonung der ThreatMiner Es geht nicht nur um kompromissindikatoren (ioc), sondern auch darum, analysten kontextbezogene informationen über die ioc zu liefern, die sie sich ansehen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/WSTNPHX/scripts-n-tools/master/malware-email-addresses.txt">WSTNPHX Malware Email Addresses</a>
        </td>
        <td>E-Mail-Adressen der von VVestron Phoronix (WSTNPHX) gesammelten Malware</td>
    </tr>
    <tr>
        <td>
            <a href="https://portal.underattack.today/" target="_blank">UnderAttack.today</a>
        </td>
        <td>UnderAttack ist eine kostenlose Intelligenzplattform, die IPs und Informationen über verdächtige Ereignisse und Angriffe teilt. Die Registrierung ist kostenlos.</td>
    </tr>
    <tr>
        <td>
            <a href="https://urlhaus.abuse.ch">URLhaus</a>
        </td>
        <td>URLhaus ist ein Projekt von abuse.ch mit dem Ziel, bösartige URLs zu teilen, die für die Verbreitung von Malware verwendet werden.</td>
    </tr>
    <tr>
        <td>
            <a href="https://virusshare.com/" target="_blank">VirusShare</a>
        </td>
        <td>
            VirusShare.com ist ein Repository von Malware-Samples, um Sicherheitsforschern, Incident Respondern, forensischen Analysten und dem krankhaft neugierigen Zugriff auf Proben von bösartigem Code zu bieten. Der Zugang zur Website wird nur auf Einladung gewährt.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://vuldb.com/?actor" target="_blank">VulDB CTI</a>
        </td>
        <td>
            VulDB ist eine Schwachstellendatenbank, die Akteursaktivitäten und Angriffsdetails mit Schwachstellen verknüpft. Der prädiktive Ansatz hilft, aufkommende Forschungs- und Angriffsaktivitäten von böswilligen Akteuren zu bestimmen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yara-Rules/rules" target="_blank">Yara-Rules</a>
        </td>
        <td>
            Ein Open-Source-Repository mit verschiedenen Yara-Signaturen, die zusammengestellt, klassifiziert und so aktuell wie möglich gehalten werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://IOCFeed.mrlooquer.com/" target="_blank">1st Dual Stack Threat Feed by MrLooquer</a>
        </td>
        <td>
Mrlooquer hat den ersten Bedrohungsfeed erstellt, der sich auf Systeme mit Dual Stack konzentriert. Da das IPv6-Protokoll begonnen hat, Teil der Malware- und Betrugskommunikation zu sein, ist es notwendig, die Bedrohungen in beiden Protokollen (IPv4 und IPv6) zu erkennen und zu mindern.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.validin.com/">Validin DNS Database</a>
        </td>
        <td>
            Freie Informationsquelle für aktuelle und historische DNS-Informationen, Suche nach anderen Websites, die mit bestimmten IPs verbunden sind, und Subdomain-Wissen Es gibt eine <a href="https://app.validin.com/docs">free API for IP and domain intelligence</a> auch. 
        </td>
    </tr>
</table>

## Formate

Standardisierte Formate zum Austausch von Threat Intelligence (hauptsächlich IOCs).

<table>
    <tr>
        <td>
            <a href="https://capec.mitre.org/" target="_blank">CAPEC</a>
        </td>
        <td>
            Die gemeinsame Angriffsmusteraufzählung und KlassifikationCAPECEs ist ein umfassendes Wörterbuch und eine Klassifizierungstaxonomie bekannter Angriffe, die von Analysten, Entwicklern, Testern und Pädagogen verwendet werden können, um das Verständnis der Gemeinschaft zu verbessern und die Abwehr zu verbessern.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cyboxproject.github.io/" target="_blank">CybOX</a>
        </td>
        <td>
            Der Cyber Observable eXpressionCybOXDie Sprache bietet eine gemeinsame Struktur für die Darstellung von Cyber-Observablen in und zwischen den operativen Bereichen der Cybersicherheit von Unternehmen, die die Konsistenz, Effizienz und Interoperabilität der bereitgestellten Tools und Prozesse verbessert und das allgemeine Situationsbewusstsein erhöht, indem sie das Potenzial für detaillierte automatisierte Sharing-, Mapping-, Erkennungs- und Analyseheuristiken ermöglicht.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc5070" target="_blank">IODEF (RFC5070)</a>
        </td>
        <td>
            Das Incident Object Description Exchange Format (IODEF) definiert eine Datendarstellung, die einen Rahmen für den Austausch von Informationen bietet, die üblicherweise von Computer Security Incident Response Teams (CSIRTs) über Computersicherheitsvorfälle ausgetauscht werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc4765" target="_blank">IDMEF (RFC4765)</a>
        </td>
        <td>
            <i>Experimentell</i> Der Zweck des Intrusion Detection Message Exchange Formats (IDMEF) besteht darin, Datenformate und Austauschprozeduren für den Austausch von Informationen zu definieren, die für Intrusion Detection- und Response-Systeme und für die Managementsysteme von Interesse sind, die möglicherweise mit ihnen interagieren müssen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maecproject.github.io/" target="_blank">MAEC</a>
        </td>
        <td>
            Die Malware-Attribut-Aufzählung und Charakterisierung ()MAECProjekte zielen darauf ab, eine standardisierte Sprache für den Austausch strukturierter Informationen über Malware basierend auf Attributen wie Verhaltensweisen, Artefakte und Angriffsmuster zu erstellen und bereitzustellen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=openc2" target="_blank">OpenC2</a>
        </td>
        <td>
            OASIS Open Command und Control (OpenC)2) Fachausschuss. Die OpenC2 TC wird seine Bemühungen auf Artefakte stützen, die von der OpenC2 Forum. Vor der Erstellung dieser TC und specifIcation, OpenC2 Forum war eine Gemeinschaft von Cyber-Security-Interessengruppen, die von der National Security Agency (NSA) unterstützt wurde. Die OpenC2 TC wurde gechartert, um Dokumente zu entwerfen, specifIcons, Lexikons oder andere Artefakte, um die Bedürfnisse der Cybersicherheit auf standardisierte Weise zu erfüllen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://oasis-open.github.io/cti-documentation/" target="_blank">STIX 2.0</a>
        </td>
        <td>
            Die Sprache Structured Threat Information eXpression (STIX) ist ein standardisiertes Konstrukt zur Darstellung von Cyber-Bedrohungsinformationen. Die STIX Language soll die gesamte Bandbreite potenzieller Cyber-Bedrohungsinformationen vermitteln und ist bestrebt, vollständig ausdrucksstark, flexibel, erweiterbar und automatisierbar zu sein. STIX erlaubt nicht nur tool-agnostische Felder, sondern stellt auch sogenannte <i>Prüfmechanismen</i> die Mittel zum Einbetten von Werkzeug-Speise bereitstellencific-Elemente, einschließlich OpenIOCYara und Snort. STIX 1.x wurde archiviert <a href="https://stixproject.github.io/" target="_blank">here</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://taxiiproject.github.io/" target="_blank">TAXII</a>
        </td>
        <td>
            Der vertrauenswürdige automatisierte eXchange von IndikatorinformationenTAXIIDer Standard definiert eine Reihe von Diensten und Nachrichtenaustausch, die, wenn sie implementiert werden, die gemeinsame Nutzung von umsetzbaren Cyber-Bedrohungsinformationen über Organisations- und Produkt- / Servicegrenzen hinweg ermöglichen. TAXII definiert Konzepte, Protokolle und Nachrichtenaustausch zum Austausch von Informationen über Cyberbedrohungen zur Erkennung, Verhütung und Minderung von Cyberbedrohungen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://veriscommunity.net/index.html" target="_blank">VERIS</a>
        </td>
        <td>
            Das Vokabular für Event Recording und Incident SharingVERIS) ist eine Reihe von Metriken, die eine gemeinsame Sprache für die Beschreibung von Sicherheitsvorfällen auf strukturierte und wiederholbare Weise bieten. VERIS ist eine Antwort auf eine der kritischsten und hartnäckigsten Herausforderungen in der Sicherheitsbranche - Mangel an qualitativ hochwertigen Informationen. Neben der Bereitstellung eines strukturierten Formats, VERIS sammelt auch Daten aus der Community, um über Verstöße im Verizon Data Breach Investigations Report zu berichten.<a target="_blank" href="http://www.verizonenterprise.com/verizon-insights-lab/dbir/">DBIR</a>) und veröffentlicht diese Datenbank online in einem GitHub <a target="_blank" href="https://github.com/vz-risk/VCDB">repository.org</a>.
        </td>
    </tr>
</table>

## Frameworks und Plattformen

Frameworks, Plattformen und Dienste zum Sammeln, Analysieren, Erstellen und Teilen von Threat Intelligence.

<table>
    <tr>
        <td>
            <a href="https://github.com/abusesa/abusehelper" target="_blank">AbuseHelper</a>
        </td>
        <td>
            AbuseHelper ist ein Open-Source-Framework für den Empfang und die Umverteilung von Missbrauchsfeeds und Bedrohungsinformationen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://abuse.io/" target="_blank">AbuseIO</a>
        </td>
        <td>
            Ein Toolkit zum Empfangen, Verarbeiten, Korrelieren und Benachrichtigen von Missbrauchsberichten für Endbenutzer, wodurch Threat Intelligence Feeds verbraucht werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cisa.gov/ais" target="_blank">AIS</a>
        </td>
        <td>
            Die Cybersecurity and Infrastructure Security Agency (CISA) kostenlos Automated Indicator SharingAISDie Fähigkeit ermöglicht den Austausch von Cyber-Bedrohungsindikatoren zwischen der Bundesregierung und der Privatwirtschaft mit Maschinengeschwindigkeit. Bedrohungsindikatoren sind Informationen wie bösartige IP-Adressen oder die Absenderadresse einer Phishing-E-Mail (obwohl sie auch viel komplizierter sein können).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/csirtgadgets/bearded-avenger" target="_blank">Bearded Avenger</a>
        </td>
        <td>
            Der schnellste Weg, Threat Intelligence zu konsumieren. Nachfolger CIF.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.blueliv.com/" target="_blank">Blueliv Threat Exchange Network</a>
        </td>
        <td>
            Ermöglicht es den Teilnehmern, Bedrohungsindikatoren mit der Community zu teilen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Cortex" target="_blank">Cortex</a>
        </td>
        <td>
            Cortex ermöglicht es, Observables wie IPs, E-Mail-Adressen, URLs, Domainnamen, Dateien oder Hashes einzeln oder im Massenmodus mit einer einzigen Weboberfläche zu analysieren. Das Web-Interface fungiert als Frontend für zahlreiche Analysatoren, wodurch die Notwendigkeit entfällt, diese während der Analyse selbst zu integrieren. Analysten können auch die Cortex REST API verwenden, um Teile ihrer Analyse zu automatisieren.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://crits.github.io/" target="_blank">CRITS</a>
        </td>
        <td>
            CRITS ist eine Plattform, die Analysten die Mittel zur Verfügung stellt, um gemeinsame Untersuchungen zu Malware und Bedrohungen durchzuführen. Es wird in ein zentrales Intelligence-Datenrepository eingefügt, kann aber auch als private Instanz verwendet werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://csirtgadgets.org/collective-intelligence-framework" target="_blank">CIF</a>
        </td>
        <td>
            The Collective Intelligence Framework (Deutsche Übersetzung)CIF) ermöglicht es Ihnen, bekannte bösartige Bedrohungsinformationen aus vielen Quellen zu kombinieren und diese Informationen für IR, Erkennung und Minderung zu verwenden. Code verfügbar am <a href="https://github.com/csirtgadgets/massive-octo-spice" target="_blank">GitHub</a>.
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/ctix-stix-taxii-cyber-threat-intelligence-exchange" target="_blank">CTIX</a>
        </td>
        <td>
            CTIX ist eine intelligente Client-Server Threat Intelligence-Plattform (TIP) zur Aufnahme, Anreicherung, Analyse und bidirektionalen gemeinsamen Nutzung von Bedrohungsdaten in Ihrem vertrauenswürdigen Netzwerk.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.eclecticiq.com/platform" target="_blank">EclecticIQ Platform</a>
        </td>
        <td>
            EclecticIQ Platform ist ein STIX/TAXII Basierend auf der Threat Intelligence Platform (TIP), die es Bedrohungsanalysten ermöglicht, schnellere, bessere und tiefere Untersuchungen durchzuführen und gleichzeitig Informationen mit Maschinengeschwindigkeit zu verbreiten.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.enisa.europa.eu/topics/csirt-cert-services/community-projects/incident-handling-automation" target="_blank">IntelMQ</a>
        </td>
        <td>
            IntelMQ ist eine Lösung für CERTs zum Sammeln und Verarbeiten von Sicherheitsfeeds, Pastebins und Tweets unter Verwendung eines Nachrichtenwarteschlangenprotokolls. Es handelt sich um eine Community-Initiative namens IHAP (Incident Handling Automation Project), die von europäischen CERTs während mehrerer InfoSec-Veranstaltungen konzeptionell entworfen wurde. Sein Hauptziel ist es, Incident Respondern eine einfache Möglichkeit zu geben, Bedrohungsinformationen zu sammeln und zu verarbeiten und so die Incident-Handling-Prozesse von CERTs zu verbessern.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/intelowlproject/IntelOwl/" target="_blank">IntelOwl</a>
        </td>
        <td>
            Intel Owl ist eine OSINT-Lösung, um Threat Intelligence-Daten über einen Speer zu erhaltencific-Datei, eine IP oder eine Domain aus einer einzelnen API in großem Maßstab. Intel Owl besteht aus Analysatoren, die ausgeführt werden können, um Daten aus externen Quellen abzurufen (wie VirusTotal oder AbuseIPDB) oder um Intel von internen Analysatoren zu generieren (wie Yara oder Oletools. Es kann leicht in Ihren Stapel von Sicherheits-Tools integriert werden ()<a href="https://github.com/intelowlproject/pyintelowl" target="_blank">pyintelowl</a>) zur Automatisierung üblicher Jobs, die üblicherweise von SOC-Analysten manuell ausgeführt werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.kaspersky.com/enterprise-security/threat-intelligence" target="_blank">Kaspersky Threat Intelligence Portal</a>
        </td>
        <td>
            Eine Website, die eine Wissensdatenbank zur Verfügung stellt, die Cyberbedrohungen, legitime Objekte und ihre Beziehungen beschreibt und in einem einzigen Webdienst zusammengeführt wird. Wenn Sie das Threat Intelligence Portal von Kaspersky Lab abonnieren, erhalten Sie einen einzigen Zugangspunkt zu vier ergänzenden Diensten: Kaspersky Threat Data Feeds, Threat Intelligence Reporting, Kaspersky Threat. Lookup und Kaspersky Research Sandbox, alle in menschen- und maschinenlesbaren Formaten verfügbar.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/malstrom" target="_blank">Malstrom</a>
        </td>
        <td>
            Malstrom zielt darauf ab, ein Repository für Threat Tracking und forensische Artefakte zu sein, speichert aber auch YARA-Regeln und Notizen für Untersuchungen. Anmerkung: Github Das Projekt wurde archiviert (keine neuen Beiträge angenommen).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stratosphereips/Manati" target="_blank">ManaTI</a>
        </td>
        <td>
            Die ManaTI Das Projekt unterstützt Bedrohungsanalytiker durch den Einsatz maschineller Lerntechniken, die automatisch neue Beziehungen und Rückschlüsse finden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://django-mantis.readthedocs.io/en/latest/" target="_blank">MANTIS</a>
        </td>
        <td>
            Die modellbasierte Analyse von Threat Intelligence Quellen ()MANTISCyber Threat Intelligence Management Framework unterstützt die Verwaltung von Cyber Threat Intelligence, die in verschiedenen Standardsprachen wie STIX und CybOXEs ist *nicht* Bereit für die Großproduktion.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cert-se/megatron-java" target="_blank">Megatron</a>
        </td>
        <td>
            Megatron ist ein von CERT-SE implementiertes Tool, das schlechte IPs sammelt und analysiert, zur Berechnung von Statistiken, Konvertierung und Analyse von Protokolldateien sowie zur Behandlung von Missbrauch und Vorfällen verwendet werden kann.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/PaloAltoNetworks/minemeld/wiki" target="_blank">MineMeld</a>
        </td>
        <td>
            Ein erweiterbares Threat Intelligence Verarbeitungs-Framework schuf Palo Alto Networks.
            Es kann verwendet werden, um Listen von Indikatoren zu manipulieren und sie für den Verbrauch durch die Durchsetzungsinfrastruktur Dritter zu transformieren und / oder zu aggregieren.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.misp-project.org/" target="_blank">MISP</a>
        </td>
        <td>
            Die Malware Information Sharing Plattform ()MISP) ist eine Open-Source-Softwarelösung zum Sammeln, Speichern, Verteilen und Teilen von Cyber-Sicherheitsindikatoren und Malware-Analysen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CERT-Polska/n6" target="_blank">n6</a>
        </td>
        <td>
            n6 (Network Security Incident eXchange) ist ein System zum Sammeln, Verwalten und Verteilen von Sicherheitsinformationen in großem Umfang. Die Verteilung erfolgt über eine einfache REST-API und eine Webschnittstelle, über die autorisierte Benutzer verschiedene Arten von Daten erhalten können, insbesondere Informationen über Bedrohungen und Vorfälle in ihren Netzwerken. Es wird entwickelt von <a href="https://www.cert.pl/en/" target="_blank">CERT Polska</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ocsf.io/" target="_blank">Open Cybersecurity Schema Framework (OCSF)</a>
        </td>
        <td>
            Das Open Cybersecurity Schema Framework ist ein Open-Source-Projekt, das zusammen mit einem herstellerunabhängigen Kernsicherheitsschema ein erweiterbares Framework für die Entwicklung von Schemata bietet. Anbieter und andere Datenproduzenten können das Schema für ihre Daten übernehmen und erweiterncific Domains. Dateningenieure können unterschiedliche Schemata abbilden, um Sicherheitsteams dabei zu helfen, die Datenaufnahme und -normalisierung zu vereinfachen, sodass Datenwissenschaftler und Analysten mit einer gemeinsamen Sprache für die Erkennung und Untersuchung von Bedrohungen arbeiten können. Ziel ist es, einen offenen Standard bereitzustellen, der in jeder Umgebung, Anwendung oder Lösung angewendet wird und bestehende Sicherheitsstandards und -prozesse ergänzt.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opencti.io/en/" target="_blank">OpenCTI</a>
        </td>
        <td>
            OpenCTIDie Open Cyber Threat Intelligence-Plattform ermöglicht es Unternehmen, ihr Wissen und ihre Observablen über Cyber Threat Intelligence zu verwalten. Ziel ist es, technische und nicht-technische Informationen über Cyberbedrohungen zu strukturieren, zu speichern, zu organisieren und zu visualisieren. Die Daten sind um ein Wissensschema herum strukturiert, das auf der STIX2 Normen. OpenCTI kann mit anderen Tools und Plattformen integriert werden, einschließlich MISPTheHive und MITRE ATT&CK, a.o.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware.html" target="_blank">OpenIOC</a>
        </td>
        <td>
            OpenIOC ist ein offener Rahmen für den Austausch von Threat Intelligence. Es wurde entwickelt, um Bedrohungsinformationen sowohl intern als auch extern in einem maschinenverdaulichen Format auszutauschen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/OpenTAXII" target="_blank">OpenTAXII</a>
        </td>
        <td>
            OpenTAXII ist eine robuste Python-Implementierung von TAXII Dienste, die ein reichhaltiges Feature-Set und eine freundliche Pythonic-API bieten, die auf einer gut gestalteten Anwendung basiert.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Ptr32Void/OSTrICa" target="_blank">OSTrICa</a>
        </td>
        <td>
            Ein Open Source Plugin-orientiertes Framework zum Sammeln und Visualisieren von Threat Intelligence-Informationen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://otx.alienvault.com" target="_blank">OTX - Open Threat Exchange</a>
        </td>
        <td>
            AlienVault Open Threat Exchange (OTX) bietet offenen Zugang zu einer globalen Gemeinschaft von Bedrohungsforschern und Sicherheitsexperten. Es liefert Community-generierte Bedrohungsdaten, ermöglicht kollaborative Recherchen und automatisiert den Prozess der Aktualisierung Ihrer Sicherheitsinfrastruktur mit Bedrohungsdaten aus jeder Quelle.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Lookingglass/opentpx/" target="_blank">Open Threat Partner eXchange</a>
        </td>
        <td>
            Die Open Threat Partner eXchange (OpenTPX) besteht aus einem Open-Source-Format und Tools für den Austausch von maschinenlesbaren Threat Intelligence- und Netzwerksicherheitsoperationsdaten. Es ist ein JSON-basiertes Format, das die gemeinsame Nutzung von Daten zwischen verbundenen Systemen ermöglicht.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.riskiq.com/" target="_blank">PassiveTotal</a>
        </td>
        <td>
            Die PassiveTotal Eine von RiskIQ angebotene Plattform ist eine Bedrohungsanalyse-Plattform, die Analysten so viele Daten wie möglich zur Verfügung stellt, um Angriffe zu verhindern, bevor sie stattfinden. Es werden verschiedene Arten von Lösungen sowie Integrationen (APIs) mit anderen Systemen angeboten.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pulsedive.com/" target="_blank">Pulsedive</a>
        </td>
        <td>
            Pulsedive ist eine kostenlose Community-Bedrohungsinformationsplattform, die Open-Source-Feeds verbraucht, die IOCs anreichert und sie durch einen Risiko-Scoring-Algorithmus ausführt, um die Qualität der Daten zu verbessern. Es ermöglicht Benutzern, IOCs einzureichen, zu suchen, zu korrelieren und zu aktualisieren; listet "Risikofaktoren" auf, warum IOCs ein höheres Risiko darstellen; und bietet eine hochrangige Ansicht von Bedrohungen und Bedrohungsaktivitäten.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.recordedfuture.com/" target="_blank">Recorded Future</a>
        </td>
        <td>
            Recorded Future ist ein Premium-SaaS-Produkt, das Threat Intelligence aus offenen, geschlossenen und technischen Quellen automatisch in einer einzigen Lösung vereint. Ihre Technologie nutzt natürliche Sprachverarbeitung (NLP) und maschinelles Lernen, um diese Bedrohungsinformationen in Echtzeit zu liefern – was Recorded Future zu einer beliebten Wahl für IT-Sicherheitsteams macht.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Netflix/Scumblr" target="_blank">Scumblr</a>
        </td>
        <td>
            Scumblr ist eine Webanwendung, mit der periodische Synchronisierungen von Datenquellen (wie z.B. Github Repositories und URLs) und Durchführung von Analysen (z. B. statische Analysen, dynamische Prüfungen und Metadatensammlung) zu den ermittelten Ergebnissen.
            Scumblr hilft Ihnen, proaktive Sicherheit durch ein intelligentes Automatisierungs-Framework zu optimieren, um Sicherheitsprobleme schneller zu identifizieren, zu verfolgen und zu lösen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.anomali.com/platform/staxx" target="_blank">STAXX (Anomali)</a>
        </td>
        <td>
            Anomali STAXXTM bietet Ihnen eine kostenlose und einfache Möglichkeit, jeden STIX/TAXII Futtermittel. Laden Sie einfach den STAXX-Client herunter, konfigurieren Sie Ihre Datenquellen und STAXX übernimmt den Rest.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://stoq.punchcyber.com/" target="_blank">stoQ</a>
        </td>
        <td>
            stoQ ist ein Framework, das es Cyberanalysten ermöglicht, sich wiederholende, datengesteuerte Aufgaben zu organisieren und zu automatisieren. Es bietet Plugins für viele andere Systeme, mit denen Sie interagieren können.
            Ein Anwendungsfall ist die Extraktion von IOCs aus Dokumenten, von denen ein Beispiel gezeigt wird <a href="https://stoq-framework.blogspot.nl/2016/04/operationalizing-indicators.html" target="_blank">here</a>, kann aber auch zum Deobfuscationg und Decodieren von Inhalten und zum automatisierten Scannen mit YARA verwendet werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/tripwire/tardis" target="_blank">TARDIS</a>
        </td>
        <td>
            Die Bedrohungsanalyse, Reconnaissance und Data Intelligence System ()TARDIS) ist ein Open-Source-Framework zum Durchführen historischer Suchen mit Angriffssignaturen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatconnect.com/" target="_blank">ThreatConnect</a>
        </td>
        <td>
            ThreatConnect ist eine Plattform mit Threat Intelligence, Analytics und Orchestrierungsfunktionen. Es soll Ihnen helfen, Daten zu sammeln, Intelligenz zu erzeugen, sie mit anderen zu teilen und Maßnahmen zu ergreifen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatcrowd.org/" target="_blank">ThreatCrowd</a>
        </td>
        <td>
            ThreatCrowd ist ein System zur Suche und Erforschung von Artefakten im Zusammenhang mit Cyberbedrohungen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatpipes.com" target="_blank">ThreatPipes</a>
        </td>
        <td>
            Bleibe deinen Gegnern zwei Schritte voraus. Holen sie sich ein vollständiges bild davon, wie sie sie ausnutzen werden.
            <br />
            ThreatPipes Ist ein ReconnaisSance-Tool, das automatisch 100 Datenquellen abfragt, um Informationen zu IP-Adressen, Domainnamen, E-Mail-Adressen, Namen und mehr zu sammeln.
            <br />
            Du spuckst einfachcify das Ziel, das Sie untersuchen möchten, auswählen, welche Module aktiviert werden sollen und dann ThreatPipes Wir werden Daten sammeln, um ein Verständnis für alle Entitäten und ihre Beziehung zueinander aufzubauen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://developers.facebook.com/docs/threat-exchange/" target="_blank">ThreatExchange</a>
        </td>
        <td>
            Facebook erstellt ThreatExchange Damit die teilnehmenden Organisationen Bedrohungsdaten über eine bequeme, strukturierte und benutzerfreundliche API teilen können, die Datenschutzkontrollen bietet, um die gemeinsame Nutzung nur mit gewünschten Gruppen zu ermöglichen. Dieses Projekt ist noch in <b>Beta</b>Referenzcode unter: <a href="https://github.com/facebook/ThreatExchange" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/typedb-osi/typedb-cti" target="_blank">TypeDB CTI</a>
        </td>
        <td>
		TypDB-Daten - CTI ist eine Open-Source-Bedrohungsinformationsplattform für Unternehmen, um ihr Wissen über Cyber Threat Intelligence (CTI) zu speichern und zu verwalten. Es ermöglicht Threat-Intel-Experten, ihre unterschiedlichen CTI-Informationen in einer Datenbank zusammenzuführen und neue Erkenntnisse über Cyberbedrohungen zu erhalten. Dieses Repository bietet ein Schema, das auf STIX2, und enthält MITRE ATT&CK als Beispieldatensatz, um mit der Erkundung dieser Threat Intelligence-Plattform zu beginnen. Mehr dazu <a href="https://blog.vaticle.com/introducing-a-knowledge-graph-for-cyber-threat-intelligence-with-typedb-bdb559a92d2a" target="_blank">blog post</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://beta.virusbay.io/" target="_blank">VirusBay</a>
        </td>
        <td>
            VirusBay ist eine webbasierte Collaboration-Plattform, die Security Operations Center (SOC)-Experten mit relevanten Malware-Forschern verbindet.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/brianwarehime/threatnote" target="_blank">threatnote.io</a>
        </td>
        <td>
            Das neue und verbesserte threatnote.io - Ein Tool für CTI-Analysten und Teams zur Verwaltung von Intel-Anforderungen, Reporting und CTI-Prozessen auf einer All-in-One-Plattform
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exchange.xforce.ibmcloud.com/" target="_blank">XFE - X-Force Exchange</a>
        </td>
        <td>
            Der X-Force Exchange (XFE) von IBM XFE ist ein kostenloses SaaS-Produkt, mit dem Sie nach Bedrohungsinformationen suchen, Ihre Erkenntnisse sammeln und Ihre Erkenntnisse mit anderen Mitgliedern der XFE-Community teilen können.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://yeti-platform.github.io/" target="_blank">Yeti</a>
        </td>
        <td>
            Das offene, verteilte, maschinen- und analystenfreundliche Threat Intelligence Repository. Hergestellt von und für Incident Responder.
        </td>
    </tr>
</table>



## Werkzeuge

Verschiedene Werkzeuge zum Parsen, Erstellen und Bearbeiten von Threat Intelligence, meist auf IOC-Basis.

<table>
    <tr>
        <td>
            <a href="https://github.com/jalewis/actortrackr" target="_blank">ActorTrackr</a>
        </td>
        <td>
            ActorTrackr ist eine Open-Source-Webanwendung zum Speichern/Suchen/Verknüpfen von akteursbezogenen Daten. Die primären Quellen stammen von Benutzern und verschiedenen öffentlichen Repositories. Quelle verfügbar auf <a href="https://github.com/jalewis/actortrackr" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/camp0/aiengine" target="_blank">AIEngine</a>
        </td>
        <td>
            AIEngine ist eine interaktive/programmierbare Python/Ruby/Java/Lua-Paketinspektionsmaschine der nächsten Generation mit Lernfähigkeiten ohne menschliches Eingreifen, NIDS(Network Intrusion Detection System)-Funktionalität, DNS-Domänenklassifizierung, Netzwerksammler, Netzwerkforensik und vielen anderen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/referefref/aiocrioc" target="_blank">AIOCRIOC</a>
        </td>
        <td>
            Künstliche Intelligenz Ocular Character Recognition Indikator für KompromisseAIOCRIOC) ist ein Tool, das Web Scraping, die OCR-Fähigkeiten von Tesseract und OpenAI-kompatible LLM-APIs wie GPT-4 kombiniert, um IOCs aus Berichten und anderen Webinhalten einschließlich eingebetteter Bilder mit Kontextdaten zu analysieren und zu extrahieren.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://analyze.intezer.com" target="_blank">Analyze (Intezer)</a>
        </td>
        <td>
            Analyze ist eine All-in-One-Malware-Analyseplattform, die statische, dynamische und genetische Codeanalysen für alle Arten von Dateien durchführen kann. Benutzer können Malware-Familien verfolgen, IOCs/MITRE TTPs extrahieren und YARA-Signaturen herunterladen. Es gibt eine Community-Edition, um kostenlos zu beginnen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/1aN0rmus/TekDefense-Automater" target="_blank">Automater</a>
        </td>
        <td>
            Automater ist ein URL / Domain, IP-Adresse und Md5 Hash OSINT-Tool, das den Analyseprozess für Intrusion Analysten erleichtern soll.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/svdwi/BlueBox" target="_blank">BlueBox</a>
        </td>
        <td>
            BlueBox ist eine OSINT-Lösung, um Threat-Intelligence-Daten über eine spe zu erhaltencific-Datei, eine IP, eine Domain oder URL und analysieren sie.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://botscout.com/">BotScout</a>
        </td>
        <td>
            BotScout hilft zu verhindern, dass sich automatisierte Webskripte, bekannt als "Bots", in Foren registrieren, Datenbanken verschmutzen, Spam verbreiten und Formulare auf Websites missbrauchen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/bro-intel-generator" target="_blank">bro-intel-generator</a>
        </td>
        <td>
            Script zum Generieren von Bro-Intel-Dateien aus PDF- oder HTML-Berichten.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/cabby" target="_blank">cabby</a>
        </td>
        <td>
            Eine einfache Python-Bibliothek für die Interaktion mit TAXII Server.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/cacador" target="_blank">cacador</a>
        </td>
        <td>
            Cacador ist ein in Go geschriebenes Werkzeug zum Extrahieren gemeinsamer Kompromissindikatoren aus einem Textblock.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/combine" target="_blank">Combine</a>
        </td>
        <td>
            Combine sammelt Threat Intelligence Feeds aus öffentlich verfügbaren Quellen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CrowdStrike/CrowdFMS" target="_blank">CrowdFMS</a>
        </td>
        <td>
            CrowdFMS ist ein Framework für die Automatisierung der Sammlung und Verarbeitung von Proben von VirusTotal durch die Nutzung des Private API-Systems.
            Das Framework lädt die letzten Samples automatisch herunter, wodurch eine Warnung über den YARA-Benachrichtigungsfeed des Benutzers ausgelöst wurde.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-transmute.org/" target="_blank">CTI-Transmute</a>
        </td>
        <td>
            CTI-Transmute ist ein Tool zum Konvertieren von Cyber Threat Intelligence (CTI) Daten zwischen MISP und STIX Formate. Es bietet eine Reihe von API-Endpunkten, die eine automatisierte Konvertierung von Daten ermöglichen und die Integration verschiedener Threat-Intelligence-Plattformen und Workflows erleichtern. Quelle verfügbar auf <a href="https://github.com/MISP/cti-transmute" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cuckoosandbox/cuckoo" target="_blank">Cuckoo Sandbox</a>
        </td>
        <td>
            Cuckoo Sandbox ist ein automatisiertes dynamisches Malware-Analysesystem. Es ist die bekannteste Open-Source-Malware-Analyse-Sandbox und wird häufig von Forschern, CERT/SOC-Teams und Threat-Intelligence-Teams auf der ganzen Welt eingesetzt. Für viele Unternehmen bietet Cuckoo Sandbox einen ersten Einblick in potenzielle Malware-Samples.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cybergordon.com/" target="_blank">CyberGordon</a>
        </td>
        <td>
            CyberGordon ist eine Threat Intelligence Suchmaschine. Es nutzt 30+ Quellen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CylanceSPEAR/CyBot" target="_blank">CyBot</a>
        </td>
        <td>
            CyBot ist ein Threat Intelligence Chat Bot. Es kann verschiedene Arten von lookupS von benutzerdefinierten Modulen angeboten.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Fenrir" target="_blank">Fenrir</a>
        </td>
        <td>
            Einfacher Bash IOC Scanner.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/FireHOL-IP-Aggregator" target="_blank">FireHOL IP Aggregator</a>
        </td>
        <td>
            Antrag auf Haltung von Futtermitteln von FireHOL <a href="https://github.com/firehol/blocklist-ipsets" target="_blank">blocklist-ipsets</a> mit IP-Adressen Aussehen Geschichte. HTTP-basierter API-Service wird für Suchanfragen entwickelt.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/Forager" target="_blank">Forager</a>
        </td>
        <td>
            Multithreaded Threat Intelligence Jäger-Sammler-Skript.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.gigasheet.co" target="_blank">Gigasheet</a>
        </td>
        <td>
            Gigasheet ist ein SaaS-Produkt, das zur Analyse massiver und unterschiedlicher Cybersicherheitsdatensätze verwendet wird. Importieren Sie massive Logfiles, netflow, pcaps, big CSVS und mehr.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/BinaryDefense/goatrider" target="_blank">GoatRider</a>
        </td>
        <td>
            GoatRider ist ein einfaches Tool, das Artillery Threat Intelligence Feeds, TOR, AlienVaults OTX und die Alexa Top 1 Million Websites dynamisch herunterzieht und einen Vergleich mit einer Hostnamendatei oder IP-Datei durchführt.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cse.google.com/cse/publicurl?cx=003248445720253387346:turlh5vi4xc" target="_blank">Google APT Search Engine</a>
        </td>
        <td>
            APT Groups, Operations und Malware Search Engine. Die für diese Google Custom Search verwendeten Quellen sind unter <a href="https://gist.github.com/Neo23x0/c4f40629342769ad0a8f3980942e21d3" target="_blank">this</a> GitHub Kern.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ciscocsirt/gosint" target="_blank">GOSINT</a>
        </td>
        <td>
            Die GOSINT Ein Framework ist ein kostenloses Projekt zum Sammeln, Verarbeiten und Exportieren hochwertiger öffentlicher Kompromissindikatoren (IOCs).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://hashdd.com/" target="_blank">hashdd</a>
        </td>
        <td>
            Ein Werkzeug zum lookup Informationen aus dem krytografischen Hash-Wert
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/harbinger" target="_blank">Harbinger Threat Intelligence</a>
        </td>
        <td>
            Python-Skript, das es ermöglicht, mehrere Online-Bedrohungsaggregatoren von einer einzigen Schnittstelle abzufragen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Hippocampe" target="_blank">Hippocampe</a>
        </td>
        <td>
            Hippocampe aggregiert Bedrohungsfeeds aus dem Internet in einem Elasticsearch-Cluster. Es hat eine REST-API, die es ermöglicht, in sein "Gedächtnis" zu suchen. Es basiert auf einem Python-Skript, das URLs abruft, die Feeds entsprechen, sie analysieren und indizieren.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/S03D4-164/Hiryu" target="_blank">Hiryu</a>
        </td>
        <td>
            Ein Tool zur Organisation von APT-Kampagneninformationen und zur Visualisierung der Beziehungen zwischen IOCs.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/ioc-editor.html" target="_blank">IOC Editor</a>
        </td>
        <td>
            Ein kostenloser Editor für Indicators of Compromise (IOCs).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/ioc-finder" target="_blank">IOC Finder</a>
        </td>
        <td>
            Python-Bibliothek zum Finden von Indikatoren für Kompromisse im Text. Verwendet Grammatiken statt Regexe für eine verbesserte Verständlichkeit. Ab Februar 2019 analysiert es über 18 Indikatortypen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ioc-fang/ioc_fanger" target="_blank">IOC Fanger (and Defanger)</a>
        </td>
        <td>
            Python Bibliothek zum Fangen ()`hXXp://example[.]com` => `http://example.com`) und Defanging (`http://example.com` => `hXXp://example[.]com`) Indikatoren für Kompromisse im Text.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/armbues/ioc_parser" target="_blank">ioc_parser</a>
        </td>
        <td>
            Tool zum Extrahieren von Indikatoren für Kompromisse aus Sicherheitsberichten im PDF-Format.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mandiant/ioc_writer" target="_blank">ioc_writer</a>
        </td>
        <td>
            Bietet eine Python-Bibliothek, die eine grundlegende Erstellung und Bearbeitung von OpenIOC Gegenstände.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/python-iocextract" target="_blank">iocextract</a>
        </td>
        <td>
            Extrahiert URLs, IP-Adressen, MD5/SHA-Hashes, E-Mail-Adressen und YARA-Regeln aus Textkorpora. Enthält einige codierte und "defanged" IOCs in der Ausgabe und optional decodiert / refangs sie.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stephenbrannon/IOCextractor" target="_blank">IOCextractor</a>
        </td>
        <td>
            IOC (Indicator of Compromise) Extractor ist ein Programm, um IOCs aus Textdateien zu extrahieren. Das allgemeine Ziel ist es, den Prozess des Parsens strukturierter Daten (IOCs) aus unstrukturierten oder semistrukturierten Daten zu beschleunigen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/johestephan/ibmxforceex.checker.py" target="_blank">ibmxforceex.checker.py</a>
        </td>
        <td>
            Python-Client für den IBM X-Force Exchange.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/jager" target="_blank">jager</a>
        </td>
        <td>
            Jager ist ein Werkzeug, um nützliche IOCs (Indikatoren für Kompromisse) aus verschiedenen Eingangsquellen zu ziehen (PDFs vorerst, Klartext wirklich bald, Webseiten schließlich) und sie in ein einfach zu manipulierendes JSON-Format zu bringen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/13850" target="_blank">Kaspersky CyberTrace</a>
        </td>
        <td>
            Threat Intelligence Fusion und Analyse Tool, das Bedrohungsdatenfeeds mit SIEM-Lösungen integriert. Benutzer können Threat Intelligence sofort für Sicherheitsüberwachungs- und Incident Report (IR)-Aktivitäten im Workflow ihrer bestehenden Sicherheitsoperationen nutzen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/KasperskyLab/klara" target="_blank">KLara</a>
        </td>
        <td>
            KLara, ein verteiltes system, das in python geschrieben ist, ermöglicht es forschern, eine oder mehrere yara-regeln über sammlungen mit proben zu scannen, benachrichtigungen per e-mail sowie die weboberfläche zu erhalten, wenn die scanergebnisse fertig sind.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/libtaxii" target="_blank">libtaxii</a>
        </td>
        <td>
            Eine Python-Bibliothek zum Handling TAXII Aufrufende Nachrichten TAXII Dienstleistungen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Loki" target="_blank">Loki</a>
        </td>
        <td>
            Einfacher IOC und Incident Response Scanner.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/ssanthosh243/ip-lookup-docker" target="_blank">LookUp</a>
        </td>
        <td>
            LookUp ist eine zentralisierte Seite, um verschiedene Bedrohungsinformationen über eine IP-Adresse zu erhalten. Es kann leicht in Kontextmenüs von Tools wie SIEMs und anderen Untersuchungstools integriert werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/HurricaneLabs/machinae" target="_blank">Machinae</a>
        </td>
        <td>
            Machinae ist ein Tool zum Sammeln von Informationen von öffentlichen Websites / Feeds über verschiedene sicherheitsrelevante Daten: IP-Adressen, Domainnamen, URLs, E-Mail-Adressen, Datei-Hashes und SSL-Fingerabdrücke.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/silascutler/MalPipe" target="_blank">MalPipe</a>
        </td>
        <td>
            Amodular Malware (und Indikator) Sammlung und Verarbeitung Framework. Es wurde entwickelt, um Malware, Domains, URLs und IP-Adressen aus mehreren Feeds zu ziehen, die gesammelten Daten anzureichern und die Ergebnisse zu exportieren.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/misp-workbench" target="_blank">MISP Workbench</a>
        </td>
        <td>
            Tools zum Exportieren von Daten aus dem MISP MySQL-Datenbank und verwenden und missbrauchen sie außerhalb dieser Plattform.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/MISP-Taxii-Server" target="_blank">MISP-Taxii-Server</a>
        </td>
        <td>
            Eine Reihe von Konfigurationsdateien zur Verwendung mit EclecticIQs OpenTAXII Implementierung, zusammen mit einem Callback, wenn Daten an die TAXII Inbox des Servers.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/microsoft/msticpy" target="_blank">MSTIC Jupyter and Python Security Tools</a>
        </td>
        <td>
            msticpy ist eine Bibliothek für InfoSec Untersuchung und Jagd in Jupyter Notebooks. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/paulpc/nyx" target="_blank">nyx</a>
        </td>
        <td>
            Ziel dieses Projekts ist es, die Verbreitung von Threat Intelligence-Artefakten an defensive Systeme zu erleichtern und den Wert von Open-Source- und kommerziellen Tools zu verbessern.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/onemillion" target="_blank">OneMillion</a>
        </td>
        <td>
            Python-Bibliothek, um festzustellen, ob sich eine Domain in der Alexa- oder Cisco-Spitze befindet, eine Million Domain-Listen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/STIXProject/openioc-to-stix" target="_blank">openioc-to-stix</a>
        </td>
        <td>
            Generieren Sie STIX XML von OpenIOC XML.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/omnibus" target="_blank">Omnibus</a>
        </td>
        <td>
            Omnibus ist eine interaktive Befehlszeilenanwendung zum Sammeln und Verwalten von IOCs / Artefakten (IPs, Domains, E-Mail-Adressen, Benutzernamen und Bitcoin-Adressen), Anreichern dieser Artefakte mit OSINT-Daten aus öffentlichen Quellen und Bereitstellung der Mittel zum Speichern und Zugriff auf diese Artefakte auf einfache Weise.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kx499/ostip/wiki" target="_blank">OSTIP</a>
        </td>
        <td>
            Eine Homebrew Threat Data Plattform.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mgeide/poortego" target="_blank">poortego</a>
        </td>
        <td>
            Open-Source-Projekt zur Speicherung und Verknüpfung von Open-Source-Intelligenz (ala Maltego, aber kostenlos wie in Bier und nicht an eine Speerspitze gebunden)cific / proprietäre Datenbank. Ursprünglich in Ruby entwickelt, aber neue Codebasis komplett in Python umgeschrieben.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/yahoo/PyIOCe" target="_blank">PyIOCe</a>
        </td>
        <td>
            PyIOCe ist eine IOC editor geschrieben in Python.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/QTek/QRadio" target="_blank">QRadio</a>
        </td>
        <td>
            QRadio Es handelt sich um ein Tool/Framework zur Konsolidierung von Cyber-Bedrohungen.
            Ziel des Projekts ist es, einen robusten modularen Rahmen für die Extraktion von Intelligenzdaten aus überprüften Quellen zu schaffen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/aboutsecurity/rastrea2r" target="_blank">rastrea2r</a>
        </td>
        <td>
            Collecting & Hunting for Indicators of Compromise (IOC) mit Begeisterung und Stil!
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/redline.html" target="_blank">Redline</a>
        </td>
        <td>
            Ein Host-Untersuchungs-Tool, das unter anderem für die IOC-Analyse verwendet werden kann.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ocmdev/rita" target="_blank">RITA</a>
        </td>
        <td>
            Real Intelligence Threat Analytics (Deutsche Übersetzung)RITA) soll bei der Suche nach Indikatoren für Kompromisse in Unternehmensnetzwerken unterschiedlicher Größe helfen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/softrace" target="_blank">Softrace</a>
        </td>
        <td>
            Lightweight National Software Reference Library RDS-Speicher.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/0x4d31/sqhunter" target="_blank">sqhunter</a>
        </td>
        <td>
            Threat Hunter basiert auf Osquery, Salt Open und Cymon API. Es kann offene Netzwerksockets abfragen und sie gegen Bedrohungsquellen überprüfen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SecurityRiskAdvisors/sra-taxii2-server" target="_blank">SRA TAXII2 Server</a>
        </td>
        <td>
            voll TAXII 2.0 specifIcation Server implementiert in Node JS mit MongoDB Backend.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://stixvalidator.com" target="_blank">Stixvalidator.com</a>
        </td>
        <td>
            Stixvalidator.com ist ein online kostenloser STIX und STIX2 Validatordienst.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/traut/stixview" target="_blank">Stixview</a>
        </td>
        <td>
            Stixview ist eine JS-Bibliothek für einbettbare interaktive STIX2 Graphen.
        </td>
    </tr>
	<tr>
        <td>
            <a href="https://github.com/STIXProject/stix-viz" target="_blank">stix-viz</a>
        </td>
        <td>
            STIX Visualisierungstool.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://test.taxiistand.com/" target="_blank">TAXII Test Server</a>
        </td>
        <td>
            Ermöglicht es Ihnen, Ihre TAXII Umgebung durch Verbindung zu den bereitgestellten Diensten und Durchführung der verschiedenen Funktionen, wie in der TAXII SpeercifSications.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jpsenior/threataggregator" target="_blank">threataggregator</a>
        </td>
        <td>
            ThreatAggregrator bündelt Sicherheitsbedrohungen aus einer Reihe von Online-Quellen und Outputs in verschiedenen Formaten, einschließlich CEF-, Snort- und IPTables-Regeln.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcrowd_api" target="_blank">threatcrowd_api</a>
        </td>
        <td>
            Python Library für ThreatCrowd's API.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcmd" target="_blank">threatcmd</a>
        </td>
        <td>
            Cli Schnittstelle zum ThreatCrowd.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/syphon1c/Threatelligence" target="_blank">Threatelligence</a>
        </td>
        <td>
            Threatelligence ist ein einfacher Cyber Threat Intelligence Feed-Sammler, der Elasticsearch, Kibana und Python verwendet, um automatisch Informationen aus benutzerdefinierten oder öffentlichen Quellen zu sammeln. Aktualisiert automatisch Feeds und versucht, die Daten für Dashboards weiter zu verbessern. Projekte scheinen jedoch nicht mehr gepflegt zu werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/ThreatIngestor" target="_blank">ThreatIngestor</a>
        </td>
        <td>
            Flexibles, konfigurationsgesteuertes, erweiterbares Framework für die Nutzung von Threat Intelligence. ThreatIngestor Sie können Twitter, RSS-Feeds und andere Quellen ansehen, aussagekräftige Informationen wie C2-IPs/Domains und YARA-Signaturen extrahieren und diese Informationen zur Analyse an andere Systeme senden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://chrome.google.com/webstore/detail/threatpinch-lookup/ljdgplocfnmnofbhpkjclbefmjoikgke" target="_blank">ThreatPinch Lookup</a>
        </td>
        <td>
            Eine Erweiterung für Chrome, die auf jeder Seite Hover-Popups für IPv4, MD5, SHA2 und CVEs erstellt. Es kann verwendet werden für lookupS während bedrohungsuntersuchungen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/michael-yip/ThreatTracker" target="_blank">ThreatTracker</a>
        </td>
        <td>
            Ein Python-Skript, das entwickelt wurde, um Benachrichtigungen zu bestimmten IOCs zu überwachen und zu generieren, die von einer Reihe von Google Custom Search Engines indiziert werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yelp/threat_intel" target="_blank">threat_intel</a>
        </td>
        <td>
            Mehrere APIs für Threat Intelligence in einem einzigen Paket integriert. Enthalten sind: OpenDNS Investigate, VirusTotal und ShadowServer.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/abhinavbom/Threat-Intelligence-Hunter" target="_blank">Threat-Intelligence-Hunter</a>
        </td>
        <td>
            TIH ist ein Intelligenz-Tool, das Ihnen bei der Suche nach IOCs in mehreren offen verfügbaren Sicherheits-Feeds und einigen bekannten APIs hilft. Die Idee hinter dem Tool ist es, das Suchen und Speichern von häufig hinzugefügten IOCs zu erleichtern, um eine eigene lokale Datenbank mit Indikatoren zu erstellen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/tiq-test" target="_blank">tiq-test</a>
        </td>
        <td>
            Der Threat Intelligence Quotient (TIQ) Test bietet Visualisierung und statistische Analyse von TI-Feeds.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/yeti" target="_blank">YETI</a>
        </td>
        <td>
            YETI ist eine Proof-of-Concept Umsetzung von TAXII unterstützt die Inbox-, Poll- und Discovery-Dienste, die von der TAXII SpeckcifIcation.
        </td>
    </tr>
</table>



## <a name="research"></a>Forschung, Standards und Bücher

Lesematerial zu Threat Intelligence, darunter (wissenschaftliche) Forschung und Whitepapers.

<table>
    <tr>
        <td>
            <a href="https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections" target="_blank">APT & Cyber Criminal Campaign Collection</a>
        </td>
        <td>
            Umfangreiche Sammlung von (historischen) Kampagnen. Die Einträge stammen aus verschiedenen Quellen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kbandla/APTnotes" target="_blank">APTnotes</a>
        </td>
        <td>
            Eine große Sammlung von Quellen über <i>Fortgeschrittene anhaltende Bedrohungen</i> (APT). Diese Berichte enthalten in der Regel strategische und taktische Kenntnisse oder Ratschläge.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://attack.mitre.org/" target="_blank">ATT&CK</a>
        </td>
        <td>
            Gegensätzliche Taktiken, Techniken und allgemeines WissenATT&CKTM ist ein Modell und Framework zur Beschreibung der Aktionen, die ein Gegner während des Betriebs in einem Unternehmensnetzwerk ergreifen kann. ATT&CK ist eine ständig wachsende gemeinsame Referenz für Post-Access-Techniken, die ein größeres Bewusstsein dafür schafft, welche Aktionen während eines Netzwerkeinbruchs gesehen werden können. MITRE arbeitet aktiv an der Integration mit verwandten Konstrukten wie CAPEC, STIX und MAEC.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.activeresponse.org/building-threat-hunting-strategy-with-the-diamond-model/" target="_blank">Building Threat Hunting Strategies with the Diamond Model</a>
        </td>
        <td>
            Blogbeitrag von Sergio Caltagirone über die Entwicklung intelligenter Strategien zur Bedrohungsjagd mithilfe des Diamantmodells.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://car.mitre.org/wiki/Main_Page" target="_blank">Cyber Analytics Repository by MITRE</a>
        </td>
        <td>
            Das Cyber Analytics Repository (CAR) ist eine Wissensbasis für Analysen, die von MITRE auf der Grundlage der Gegnertaktik, -techniken und des allgemeinen Wissens entwickelt wurde.ATT&CKTM) Bedrohungsmodell.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a>
        </td>
        <td>
            Eine neue <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a> Mit einem Stakeholder-First-Ansatz und ausgerichtet auf die <a href="https://www.energy.gov/ceser/cybersecurity-capability-maturity-model-c2m2" target="_blank">Cybersecurity Capability Maturity Model (C2M2)</a> um Ihr Team zu stärken und dauerhaften Wert zu schaffen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mitre/cti" target="_blank">Cyber Threat Intelligence Repository by MITRE</a>
        </td>
        <td>
            Das Cyber Threat Intelligence Repository von ATT&CK und CAPEC Kataloge ausgedrückt in STIX 2.0 JSON.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.tandfonline.com/doi/full/10.1080/08850607.2020.1780062" target="_blank">Cyber Threat Intelligence: A Product Without a Process?</a>
        </td>
        <td>
            Eine Forschungsarbeit, die beschreibt, wie aktuelle Cyber Threat Intelligence-Produkte zu kurz kommen und wie sie durch die Einführung und Bewertung solider Methoden und Prozesse verbessert werden können.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cryptome.org/2015/09/cti-guide.pdf" target="_blank">Definitive Guide to Cyber Threat Intelligence</a>
        </td>
        <td>
            Beschreibt die Elemente der Cyber Threat Intelligence und diskutiert, wie sie von einer Vielzahl von menschlichen und technologischen Verbrauchern gesammelt, analysiert und verwendet wird. Untersucht weiter, wie Intelligenz die Cybersicherheit auf taktischer, operativer und strategischer Ebene verbessern kann und wie sie Ihnen helfen kann, Angriffe früher zu stoppen, Ihre Abwehrkräfte zu verbessern und produktiver über Cybersicherheitsprobleme mit der Geschäftsleitung zu sprechen. <i>für Dummies</i> Stil.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ryanstillions.blogspot.nl/2014/04/the-dml-model_21.html" target="_blank">The Detection Maturity Level (DML)</a>
        </td>
        <td>
            Das DML-Modell ist ein Fähigkeitsreifemodell zur Referenzierung der Reife bei der Erkennung von Cyberangriffen.
            Es wurde für Organisationen entwickelt, die Intel-gesteuerte Erkennung und Reaktion durchführen und den Schwerpunkt auf ein ausgereiftes Erkennungsprogramm legen.
            Die Reife einer Organisation wird nicht an ihrer Fähigkeit gemessen, nur relevante Informationen zu erhalten, sondern vielmehr an ihrer Fähigkeit, diese Informationen effektiv auf Erkennungs- und Reaktionsfunktionen anzuwenden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/diamond.pdf" target="_blank">The Diamond Model of Intrusion Analysis</a>
        </td>
        <td>
            Dieses Papier präsentiert das Diamantmodell, einen kognitiven Rahmen und ein analytisches Instrument zur Unterstützung und Verbesserung der Intrusionsanalyse. Die Unterstützung einer erhöhten Messbarkeit, Testbarkeit und Wiederholbarkeit in der Intrusionsanalyse, um eine höhere Effektivität, Effizienz und Genauigkeit bei der Bekämpfung von Gegnern zu erreichen, ist einer ihrer Hauptbeiträge.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/a547092.pdf" target="_blank">The Targeting Process: D3A and F3EAD</a>
        </td>
        <td>
            F3EAD ist eine militärische Methodik zur Kombination von Operationen und Intelligenz.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/NIST.SP.800-150.pdf" target="_blank">Guide to Cyber Threat Information Sharing by NIST</a>
        </td>
        <td>
            Der Leitfaden zum Informationsaustausch über Cyberbedrohungen (NIST Special Publication 800-)150) unterstützt Unternehmen bei der Einrichtung von Funktionen zur Reaktion auf Computer-Sicherheitsvorfälle, die das kollektive Wissen, die Erfahrung und die Fähigkeiten ihrer Partner nutzen, indem sie Bedrohungsinformationen aktiv austauschen und fortlaufend koordinieren. Der Leitfaden enthält Richtlinien für die koordinierte Behandlung von Vorfällen, einschließlich der Erstellung und des Verbrauchs von Daten, der Teilnahme an Informationsaustauschgemeinschaften und des Schutzes von Vorfalldaten.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/Intelligence Preparation for the Battlefield-Battlespace.pdf" target="_blank">Intelligence Preparation of the Battlefield/Battlespace</a>
        </td>
        <td>
            Diese Publikation diskutiert die geheimdienstliche Vorbereitung des Battlespace (IPB) als kritische Komponente des militärischen Entscheidungs- und Planungsprozesses und wie IPB die Entscheidungsfindung unterstützt sowie Prozesse und fortlaufende Aktivitäten integriert.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.lockheedmartin.com/content/dam/lockheed/data/corporate/documents/LM-White-Paper-Intel-Driven-Defense.pdf" target="_blank">Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains</a>
        </td>
        <td>
            Die in diesem Artikel vorgestellte Intrusion Kill Chain bietet einen strukturierten Ansatz für die Intrusionsanalyse, die Indikatorextraktion und die Durchführung von Abwehrmaßnahmen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.isao.org" target="_blank">ISAO Standards Organization</a>
        </td>
        <td>
            Die ISAO Standards Organization ist eine Nichtregierungsorganisation, die am 1. Oktober gegründet wurde, 2015. Seine Aufgabe ist es, die Cybersicherheitsposition der Nation zu verbessern, indem Standards und Richtlinien für einen robusten und effektiven Informationsaustausch in Bezug auf Cybersicherheitsrisiken, Vorfälle und bewährte Verfahren identifiziert werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/jp2_0.pdf" target="_blank">Joint Publication 2-0: Joint Intelligence</a>
        </td>
        <td>
            Diese Veröffentlichung der US-Armee bildet den Kern der gemeinsamen Geheimdienstdoktrin und legt den Grundstein für die vollständige Integration von Operationen, Plänen und Geheimdienstinformationen in ein zusammenhängendes Team. Die vorgestellten Konzepte gelten auch für (Cyber) Threat Intelligence.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://download.microsoft.com/download/8/0/1/801358EC-2A0A-4675-A2E7-96C2E7B93E73/Framework_for_Cybersecurity_Info_Sharing.pdf" target="_blank">Microsoft Research Paper</a>
        </td>
        <td>
            Ein Rahmen für den Austausch von Cybersicherheitsinformationen und die Risikominderung. Ein hochrangiges Übersichtspapier von Microsoft.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/draft-dulaunoy-misp-core-format-00" target="_blank">MISP Core Format (draft)</a>
        </td>
        <td>
            Dieses Dokument beschreibt die MISP Kernformat zum Austausch von Indikatoren und Bedrohungsinformationen zwischen MISP (Malware Information und Threat Sharing Platform) Instanzen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.necoma-project.eu/" target="_blank">NECOMA Project</a>
        </td>
        <td>
            Das Forschungsprojekt Nippon-European Cyberdefense-Oriented Multilayer Threat Analysis (NECOMA) zielt darauf ab, die Sammlung und Analyse von Bedrohungsdaten zu verbessern, um neue Cyberdefense-Mechanismen zu entwickeln und zu demonstrieren.
            Im Rahmen des Projekts wurden mehrere Publikationen und Softwareprojekte veröffentlicht.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/pyramidofpain.pdf" target="_blank">Pyramid of Pain</a>
        </td>
        <td>
            Die Pyramide des Schmerzes ist eine grafische Methode, um die Schwierigkeit auszudrücken, verschiedene Indikatoren zu erhalten, und die Menge an Ressourcen, die Gegner ausgeben müssen, wenn sie von Verteidigern erhalten werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.amazon.com/Structured-Analytic-Techniques-Intelligence-Analysis/dp/1452241511" target="_blank">Structured Analytic Techniques For Intelligence Analysis</a>
        </td>
        <td>
            Dieses Buch enthält Methoden, die die aktuellsten Best Practices in den Bereichen Intelligenz, Strafverfolgung, Heimatschutz und Geschäftsanalyse darstellen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="./docs/mwr-threat-intelligence-whitepaper.pdf" target="_blank">Threat Intelligence: Collecting, Analysing, Evaluating</a>
        </td>
        <td>
            Dieser Bericht von MWR InfoSecurity beschreibt eindeutig verschiedene Arten von Threat Intelligence, einschließlich strategischer, taktischer und operativer Variationen. Es diskutiert auch die Prozesse der Anforderungserhebung, Sammlung, Analyse, Produktion und Bewertung von Threat Intelligence. Ebenfalls enthalten sind einige schnelle Gewinne und ein Laufzeitmodell für jede der von MWR InfoSecurity definierten Arten von Threat Intelligence.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://aisel.aisnet.org/wi2017/track08/paper/3/" target="_blank">Threat Intelligence Sharing Platforms: An Exploratory Study of Software Vendors and Research Perspectives</a>
        </td>
        <td>
            Eine systematische Studie von 22 Threat Intelligence Sharing Platforms (TISP), die acht wichtige Erkenntnisse über den aktuellen Stand der Nutzung von Threat Intelligence, ihre Definition und TISPs enthält.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.us-cert.gov/tlp" target="_blank">Traffic Light Protocol</a>
        </td>
        <td>
            Das Traffic Light Protocol (TLP) ist eine Reihe von Bezeichnungen, die verwendet werden, um sicherzustellen, dass sensible Informationen mit der richtigen Zielgruppe geteilt werden. Es verwendet vier Farben, um unterschiedliche Empfindlichkeitsgrade und die entsprechenden gemeinsamen Überlegungen anzuzeigen, die von den Empfängern angewendet werden.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pan-unit42.github.io/playbook_viewer/" target="_blank">Unit42 Playbook Viewer</a>
        </td> 
        <td>
            Das Ziel des Playbooks ist es, die Werkzeuge, Techniken und Verfahren, die ein Gegner verwendet, in einem strukturierten Format zu organisieren, das mit anderen geteilt und darauf aufgebaut werden kann. Die Frameworks, die verwendet werden, um die gegnerischen Playbooks zu strukturieren und zu teilen, sind MITREs ATT&CK Rahmen und STIX 2.0
        </td>    
    </tr>
    <tr>
        <td>
            <a href="docs/sans-whos-using-cyberthreat-intelligence-and-how.pdf" target="_blank">Who's Using Cyberthreat Intelligence and How?</a>
        </td>
        <td>
            Ein Whitepaper des SANS Institute beschreibt die Verwendung von Threat Intelligence einschließlich einer durchgeführten Umfrage.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.wombat-project.eu/" target="_blank">WOMBAT Project</a>
        </td>
        <td>
            Die WOMBAT project zielt darauf ab, neue Mittel bereitzustellen, um die bestehenden und aufkommenden Bedrohungen zu verstehen, die auf die Internet-Wirtschaft und die Internet-Bürger abzielen. Um dieses Ziel zu erreichen, umfasst der Vorschlag drei wichtige Arbeitspakete: (i) Echtzeit-Erfassung verschiedener sicherheitsrelevanter Rohdaten, (ii) Anreicherung dieses Inputs durch verschiedene Analysetechniken und (iii) Identifizierung der Ursachen und Verständnis der untersuchten Phänomene.
        </td>
    </tr>
</table>



## Lizenz

Lizenziert unter [Apache License 2.0](LICENSE).
