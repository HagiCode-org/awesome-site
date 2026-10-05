# awesome-threat-intelligence
Une sélection de ressources de qualité sur le renseignement sur les menaces

Définition concise du renseignement sur les menaces : *connaissances fondées sur des preuves, comprenant le contexte, les mécanismes, les indicateurs, les conséquences et des conseils exploitables, concernant une menace ou un danger existant ou émergent pour des actifs, et pouvant éclairer les décisions relatives à la réponse à cette menace ou à ce danger*.

N’hésitez pas à [contribuer](CONTRIBUTING.md).

- [Sources](#sources)
- [Formats](#formats)
- [Cadres et plateformes](#frameworks-and-platforms)
- [Outils](#tools)
- [Recherche, normes et ouvrages](#research)


## Sources

La plupart des ressources ci-dessous proposent des listes et/ou des API permettant d’obtenir des informations, espérons-le à jour, sur les menaces.
Certains considèrent ces sources comme du renseignement sur les menaces, mais les avis divergent.
Une certaine analyse propre au domaine ou à l’activité est nécessaire pour produire un véritable renseignement sur les menaces.

<table>
    <tr>
        <td>
            <a href="https://www.abuseipdb.com/" target="_blank">AbuseIPDB</a>
        </td>
        <td>
            AbuseIPDB est un projet dédié à la lutte contre la propagation des pirates, des spammeurs et des activités abusives sur Internet. Sa mission est d'aider à rendre le Web plus sûr en fournissant une liste noire centrale pour les webmasters, les administrateurs de système et d'autres parties intéressées à signaler et trouver des adresses IP qui ont été associées à des activités malveillantes en ligne.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://docs.google.com/spreadsheets/u/1/d/1H9_xaxQHpWaa4O_Son4Gx0YOIzlcBWMsdvePFX68EKU/pubhtml" target="_blank">APT Groups and Operations</a>
        </td>
        <td>
            Feuille de calcul contenant des renseignements sur les groupes, les opérations et les tactiques de l'APT.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.binarydefense.com/banlist.txt" target="_blank">Binary Defense IP Banlist</a>
        </td>
        <td>
            Systèmes de défense binaire Artillery Threat Intelligence Feed et IP Banlist Feed.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.circl.lu/projects/bgpranking/" target="_blank">BGP Ranking</a>
        </td>
        <td>
            Classement des ASN ayant le contenu le plus malveillant.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intel.malwaretech.com/" target="_blank">Botnet Tracker</a>
        </td>
        <td>
            Trace plusieurs botnets actifs.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.botvrij.eu/">BOTVRIJ.EU</a>
        </td>
        <td>
            Botvrij.eu fournit différents jeux de CIO open source que vous pouvez utiliser dans vos dispositifs de sécurité pour détecter d'éventuelles activités malveillantes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://danger.rulez.sk/index.php/bruteforceblocker/download/" target="_blank">BruteForceBlocker</a>
        </td>
        <td>
            BruteForceBlocker est un script perl qui surveille les journaux sshd d'un serveur et identifie les attaques de force brute, qu'il utilise ensuite pour configurer automatiquement les règles de blocage du pare-feu et soumettre ces IP au site du projet, <a href="http://danger.rulez.sk/projects/bruteforceblocker/blist.php">http://danger.rulez.sk/projects/bruteforceblocker/blist.php</a>.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://osint.bambenekconsulting.com/feeds/c2-ipmasterlist.txt" target="_blank">C&amp;C Tracker</a>
        </td>
        <td>
            Un aliment pour animaux de type C connu, actif ou non&amp;C Adresses IP de Bambenek Consulting. Nécessite une licence pour une utilisation commerciale.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://certstream.calidog.io/" target="_blank">CertStream</a>
        </td>
        <td>
            Flux de mise à jour du journal de transparence du certificat en temps réel. Voyez les certificats SSL comme ils sont émis en temps réel.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.ccssforum.org/malware-certificates.php" target="_blank">CCSS Forum Malware Certificates</a>
        </td>
        <td>
            Voici une liste de certificats numériques qui ont été signalés par le forum comme pouvant être associés à des logiciels malveillants à diverses autorités de certification. Ces informations visent à empêcher les entreprises d'utiliser des certificats numériques pour ajouter de la légitimité aux logiciels malveillants et encourager la révocation rapide de ces certificats.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://cinsscore.com/list/ci-badguys.txt" target="_blank">CI Army List</a>
        </td>
        <td>
        Un sous-ensemble du <a href="http://cinsscore.com/">CINS Score</a> liste, centrée sur les IP mal notés qui ne sont pas actuellement présents sur d'autres listes de menaces.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://s3-us-west-1.amazonaws.com/umbrella-static/index.html" target="_blank">Cisco Umbrella</a>
        </td>
        <td>
            Liste blanche probable des 1 millions de sites les plus résolus par Cisco Umbrella (était OpenDNS).
	</td>
    </tr>
    <tr>
        <td>
            <a href="https://cloudmersive.com/virus-api" target="_blank">Cloudmersive Virus Scan</a>
        </td>
        <td>
            Cloudmersive Virus Scan APIs scanner les fichiers, les URL et le stockage cloud pour les virus. Ils tirent parti de signatures constamment mises à jour pour des millions de menaces, et des capacités avancées de balayage à haute performance. Le service est gratuit, mais vous devez vous inscrire à un compte pour récupérer votre clé API personnelle.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.crowdsec.net/" target="_blank">CrowdSec Console</a>
        </td>
        <td>
            La plus grande CTI, mise à jour en temps quasi réel, grâce à CrowdSec un logiciel de prochaine génération, open-source, libre et collaboratif IDS/IPS. <a href="https://crowdsec.net" target="_blank">CrowdSec</a>  est capable d'analyser le comportement des visiteurs et de fournir une réponse adaptée à toutes sortes d'attaques. Les utilisateurs peuvent partager leurs alertes sur les menaces avec la communauté et bénéficier de l'effet réseau. Les adresses IP sont collectées à partir d'attaques réelles et ne proviennent pas exclusivement d'un réseau de pots à miel.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cybercure.ai/" target="_blank">Cyber Cure free intelligence feeds</a>
        </td>
        <td>
            Cyber Cure offre gratuitement des informations sur les cybermenaces avec des listes d'adresses IP actuellement infectées et attaquantes sur Internet. Il y a la liste des urls utilisés par les logiciels malveillants et la liste des fichiers de hachage des logiciels malveillants connus qui se propage actuellement. CyberCure utilise des capteurs pour recueillir des renseignements avec un taux de faux positifs très bas. Détails <a href="https://docs.cybercure.ai" target="_blank">documentation</a> est également disponible.
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/community/ctix-feeds" target="_blank">Cyware Threat Intelligence Feeds</a>
        </td>
        <td>
            Les flux de renseignements sur les menaces de Cywares vous apportent les précieuses données sur les menaces provenant d'un large éventail de sources ouvertes et fiables pour fournir un flux consolidé de renseignements sur les menaces utiles et exploitables. Nos flux d'information de menace sont entièrement compatibles avec STIX 1.x et 2.0, vous donnant les dernières informations sur les hashes malveillants, les IP et les domaines découverts dans le monde entier en temps réel.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://dataplane.org/" target="_blank">DataPlane.org</a>
        </td>
        <td>
          DataPlane.org est une ressource de données, de flux et de mesure Internet alimentée par la communauté pour les opérateurs. Nous fournissons un service fiable et fiable sans frais.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://focsec.com" target="_blank">Focsec.com</a>
        </td>
        <td>
          Focsec.com fournit une API pour détecter les demandes VPN, Proxys, Bots et TOR. Toujours des données à jour aident à détecter les connexions suspectes, la fraude et les abus. Des exemples de code peuvent être trouvés dans le <a href="https://docs.focsec.com" target="_blank">documentation</a>.
        </td>
   </tr>	
   <tr>
        <td>
            <a href="https://osint.digitalside.it/" target="_blank">DigitalSide Threat-Intel</a>
        </td>
        <td>
          Contient des ensembles d'indicateurs Open Source Cyber Threat Intelligence, principalement basés sur l'analyse de logiciels malveillants et les URL compromises, les IP et les domaines. Le but de ce projet est d'élaborer et de mettre à l'essai de nouvelles façons de chasser, d'analyser, de recueillir et de partager les IoC pertinents qui seront utilisés par le SOC/CSIRT/CERT/individus avec un minimum d'effort. Les rapports sont partagés de trois façons : <a href="https://osint.digitalside.it/Threat-Intel/stix2/" target="_blank">STIX2</a>, <a href="https://osint.digitalside.it/Threat-Intel/csv/" target="_blank">CSV</a> et <a href="https://osint.digitalside.it/Threat-Intel/digitalside-misp-feed/" target="_blank">MISP Feed</a>. Les rapports sont également publiés dans <a href="https://github.com/davidonzo/Threat-Intel/" target="_blank">project's Git repository</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/martenson/disposable-email-domains">Disposable Email Domains</a>
        </td>
        <td>
            Une collection de domaines de messagerie anonymes ou jetables couramment utilisés pour les services de spam/abus.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://securitytrails.com/dns-trails">DNS Trails</a>
        </td>
        <td>
            Source de renseignement gratuite pour les informations DNS actuelles et historiques, WHOIS, trouver d'autres sites Web associés à certaines PI, connaissances et technologies sous-domaines. Il y a une <a href="https://securitytrails.com/">IP and domain intelligence API available</a> aussi. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feed.ellio.tech" target="_blank">ELLIO: IP Feed (community free version)</a>
        </td>
        <td>
            Une liste de menaces d'adresses IP malveillantes connues devrait représenter des menaces potentielles pour votre réseau dans un proche avenir, des scanners benigns connus et des adresses IP d'acteurs dont l'intention est inconnue. Il bénéficie d'un délai de 24 heures pour un usage personnel et non commercial, mais il offre néanmoins une protection exceptionnelle par rapport à d'autres listes de menaces ouvertes en matière de propriété intellectuelle.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/fwrules/" target="_blank">Emerging Threats Firewall Rules</a>
        </td>
        <td>
            Une collection de règles pour plusieurs types de pare-feu, y compris les iptables, PF et PIX.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/blockrules/" target="_blank">Emerging Threats IDS Rules</a>
        </td>
        <td>
            Une collection de Snort et Suricata <i>règles</i> fichiers qui peuvent être utilisés pour alerter ou bloquer.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exonerator.torproject.org/" target="_blank">ExoneraTor</a>
        </td>
        <td>
            Les ExoneraTor service maintient une base de données d'adresses IP qui ont fait partie du réseau Tor. Il répond à la question de savoir s'il existe un relais Tor fonctionnant sur une adresse IP donnée à une date donnée.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.exploitalert.com/" target="_blank">Exploitalert</a>
        </td>
        <td>
            Liste des derniers exploits publiés.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intercept.sh/threatlists/" target="_blank">FastIntercept</a>
        </td>
        <td>
	    Intercept Security héberge un certain nombre de listes de réputation IP gratuites de son réseau mondial de pots à miel.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feodotracker.abuse.ch/" target="_blank">ZeuS Tracker</a>
        </td>
        <td>
            Le suivi Feodo <a href="https://abuse.ch/" target="_blank">abuse.ch</a> Il suit le trojan Feodo.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://iplists.firehol.org/" target="_blank">FireHOL IP Lists</a>
        </td>
        <td>
            400+ les flux IP accessibles au public analysés pour documenter leur évolution, leur géocarte, leur âge, leur politique de conservation, leurs chevauchements. Le site se concentre sur la cybercriminalité (attaques, abus, logiciels malveillants).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://fraudguard.io/" target="_blank">FraudGuard</a>
        </td>
        <td>
            FraudGuard est un service conçu pour fournir un moyen facile de valider l'utilisation en recueillant et en analysant en permanence le trafic internet en temps réel.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://greynoise.io/" target="_blank">GreyNoise</a>
        </td>
        <td>
            GreyNoise collecte et analyse des données sur l'activité de numérisation sur Internet. Il recueille des données sur des scanners bénins comme Shodan.io, ainsi que des acteurs malveillants comme SSH et les vers de telnet. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://griffinguard.io/" target="_blank">GriffinGuard</a>
        </td>
        <td>
            GriffinGuard est une plate-forme de cybersécurité qui fournit des renseignements en temps réel sur les menaces en analysant en permanence le trafic Internet mondial et les modèles d'exploitation. Il fournit une recherche de données gratuite, et certains IP blocklistPar.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://honeydb.io/" target="_blank">HoneyDB</a>
        </td> 
        <td>
            HoneyDB fournit des données en temps réel sur l'activité des pots de miel. Ces données proviennent de pots d'abeilles déployés sur l'Internet <a href="https://github.com/foospidy/HoneyPy" target="_blank">HoneyPy</a> - C'est quoi ? En outre, HoneyDB fournit un accès API à l'activité de pot de miel collectée, qui comprend également des données agrégées de divers flux Twitter de pot de miel.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SupportIntelligence/Icewater" target="_blank">Icewater</a>
        </td>
        <td>
            12 805 Règles Yara gratuites créées par Projet Icewater.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://infosec.cert-pa.it" target="_blank">Infosec - CERT-PA</a>
        </td>
        <td>
            Échantillons de malware <a href="https://infosec.cert-pa.it/analyze/submission.html" target="_blank">collection and analysis</a>, <a href="https://infosec.cert-pa.it/analyze/statistics.html" target="_blank">blocklist service, <a href="https://infosec.cert-pa.it/cve.html">vulnerabilities database</a> et plus encore. Créé et géré par CERT-PA.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://labs.inquest.net" target="_blank">InQuest Labs</a>
        </td>
        <td>
            Un portail de données ouvert, interactif et API pour les chercheurs en sécurité. Recherche d'un grand nombre d'échantillons de fichiers, d'informations sur la réputation globale et de COI extraits de sources publiques. Augmenter le développement YARA avec l'outillage pour générer des déclencheurs, traiter l'hexagone mixte et générer des expressions régulières compatibles base64.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.iblocklist.com/lists" target="_blank">I-Blocklist</a>
        </td>
        <td>
            I-Blocklist maintient plusieurs types de listes contenant des adresses IP appartenant à différentes catégories. Parmi ces principales catégories figurent les pays, les fournisseurs de services Internet et les organisations. D'autres listes incluent les attaques web, TOR, spyware et proxies. Beaucoup sont libres d'utilisation et disponibles dans différents formats.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ipasis.com" target="_blank">IPASIS</a>
        </td>
        <td>
            IPASIS est une API de détection de robots en temps réel et de prévention de la fraude qui combine l'intelligence IP, la détection proxy/VPN/Tor et la validation de courriel en un seul appel API. Chaque demande renvoie une note de confiance d'interaction (0-100) avec un temps de réponse inférieur à 20 ms. Le niveau gratuit comprend 1 000 demandes par jour. <a href="https://ipasis.com/docs" target="_blank">API documentation</a> et a <a href="https://ipasis.com/scan" target="_blank">live scanner</a> sont disponibles.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/stamparm/ipsum/master/ipsum.txt" target="_blank">IPsum</a>
        </td>
        <td>
            IPsum est un flux de renseignements de menace basé sur 30+ différentes listes publiques d'adresses IP suspectes et/ou malveillantes. Toutes les listes sont automatiquement récupérées et analysées sur une base quotidienne (24h) et le résultat final est poussé vers ce dépôt. La liste est faite d'adresses IP ainsi qu'un nombre total d'occurrences (noires) de la liste (pour chacune). Créé et géré par <a href="https://twitter.com/stamparm">Miroslav Stampar</a>.
        </td>
    </tr>
    <tr>
	<td>
            <a href="https://jamesbrine.com.au" target="_blank">James Brine Threat Intelligence Feeds</a>
        </td>
        <td>
		JamesBrine fournit des flux quotidiens de renseignements sur les menaces pour les adresses IP malveillantes provenant de pots à miel situés à l'étranger sur le cloud et l'infrastructure privée couvrant une variété de protocoles tels que SSH, FTP, RDP, GIT, SNMP et REDIS. Les CIO de la veille sont disponibles en STIX2 ainsi que d'autres CIO tels que les URI suspectes et les domaines nouvellement enregistrés qui ont une forte probabilité d'utilisation dans les campagnes d'hameçonnage.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/datafeeds" target="_blank">Kaspersky Threat Data Feeds</a>
        </td>
        <td>
Mise à jour continue et informer votre entreprise ou vos clients des risques et des implications associés aux cybermenaces. Les données en temps réel vous aident à atténuer les menaces plus efficacement et à vous défendre contre les attaques avant même qu'elles ne soient lancées. Demo Data Feeds contient des ensembles tronqués d'IoCs (jusqu'à 1%) par rapport aux séries commerciales
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://majestic.com/reports/majestic-million" target="_blank">Majestic Million</a>
        </td>
        <td>
            Liste blanche probable des 1 millions de sites Web, classés par Majestic. Les sites sont classés par le nombre de sous-réseaux de référence. En savoir plus sur le classement peut être trouvé sur leur <a href="https://blog.majestic.com/development/majestic-million-csv-daily/" target="_blank">blog</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maldatabase.com/" target="_blank">Maldatabase</a>
        </td>
        <td>
            Maldatabase est conçu pour aider les logiciels malveillants science des données et les flux d'intelligence de la menace. Les données fournies contiennent de bonnes informations sur, entre autres, les domaines contactés, la liste des processus exécutés et les fichiers déposés par chaque échantillon. Ces flux vous permettent d'améliorer vos outils de surveillance et de sécurité. Des services gratuits sont offerts aux chercheurs et aux étudiants en sécurité. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malpedia.caad.fkie.fraunhofer.de/" target="_blank">Malpedia</a>
        </td>
        <td>
L'objectif principal de Malpedia est de fournir une ressource pour l'identification rapide et le contexte actionnable lors de l'enquête sur les logiciels malveillants. L'ouverture aux contributions curées assure un niveau de qualité responsable afin de favoriser une recherche significative et reproductible. 
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://www.malshare.com/" target="_blank">MalShare.com</a>
        </td>
        <td>
            Le projet MalShare est un dépôt public de logiciels malveillants qui offre aux chercheurs un accès gratuit aux échantillons.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.maltiverse.com/" target="_blank">Maltiverse</a>
        </td>
        <td>
            Le projet Maltiverse est une grande base de données IoC enrichie où il est possible de faire des requêtes complexes, et des regroupements pour enquêter sur les campagnes de malware et ses infrastructures. Il a également un grand service de requête en vrac IoC.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bazaar.abuse.ch/" target="_blank">MalwareBazaar</a>
        </td>
        <td>
            MalwareBazaar est un projet de abuse.ch dans le but de partager des échantillons de logiciels malveillants avec la communauté infosec, les fournisseurs d'AV et les fournisseurs de renseignements de menace.
        </td>
    </tr>	
    <tr>
        <td>
            <a href="https://www.malwaredomainlist.com/" target="_blank">Malware Domain List</a>
        </td>
        <td>
            Une liste consultable de domaines malveillants qui effectue également l'inverse lookups et liste les inscrits, axés sur l'hameçonnage, les trojans et les kits d'exploitation.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.malwarepatrol.net/" target="_blank">Malware Patrol</a>
        </td>
        <td>
            Malware Patrol fournit des listes de blocs, des flux de données et des renseignements de menace aux entreprises de toutes tailles. Parce que notre spécialité est l'intelligence de la cybermenace, toutes nos ressources s'assurent qu'elle est de la plus haute qualité possible. Nous croyons qu'une équipe de sécurité et ses outils sont aussi bons que les données utilisées. Cela signifie que nos aliments ne sont pas remplis d'indicateurs grattés et non vérifiés. Nous valorisons la qualité sur la quantité. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malware-traffic-analysis.net/" target="_blank">Malware-Traffic-Analysis.net</a>
        </td>
        <td>
            Ce blog se concentre sur le trafic réseau lié aux infections de logiciels malveillants. Contient des exercices d'analyse de trafic, des tutoriels, des échantillons de logiciels malveillants, des fichiers pcap de trafic réseau malveillant, et des blogs techniques avec des observations.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.malwaredomains.com/" target="_blank">MalwareDomains.com</a>
        </td>
        <td>
            Le projet DNS-BH crée et maintient une liste de domaines connus pour être utilisés pour propager les logiciels malveillants et les logiciels espions. Ceux-ci peuvent être utilisés pour la détection ainsi que la prévention (demandes de traitement DNS).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opswat.com/developers/threat-intelligence-feed" target="_blank">MetaDefender Cloud</a>
        </td>
        <td>
            MetaDefender Cloud Threat Intelligence Feeds contient de nouvelles signatures de hachage de logiciels malveillants, y compris MD5, SHA1 et SHA256. Ces nouveaux hachages malveillants ont été repérés par MetaDefender Cloud dans les dernières 24 heures. Les flux sont mis à jour quotidiennement avec les logiciels malveillants nouvellement détectés et signalés pour fournir des renseignements de menace actionnables et opportuns.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.nothink.org">NoThink!</a>
        </td>
        <td>SNMP, SSH, Telnet Blacklisted IPs de Matteo Cantoni's Honeypots</td>
    </tr>
    <tr>
        <td>
            <a href="https://services.normshield.com" target="_blank">NormShield Services</a>
        </td>
        <td>
            NormShield Services fournir des milliers d'informations sur le domaine (y compris des informations de whois) dont peuvent provenir les attaques d'hameçonnage. Services de rupture et de liste noire également disponibles. Il y a une inscription gratuite pour les services publics pour une surveillance continue.
        </td>
    </tr> 
    <tr>
        <td>
            <a href="https://novasense-threats.com" target="_blank">NovaSense Threats</a>
        </td>
        <td>
            NovaSense est le centre de renseignement sur les menaces de Snapt, et fournit des idées et des outils pour la protection préventive des menaces et l'atténuation des attaques. NovaSense protège les clients de toutes tailles contre les attaquants, les abus, les botnets, les attaques DoS et plus encore.
        </td>
    </tr>     
    <tr>
        <td>
            <a href="https://www.obstracts.com/" target="_blank">Obstracts</a>
        </td>
        <td>
            Le lecteur RSS pour les équipes de cybersécurité. Transformez n'importe quel blog en renseignement de menace structuré et actionnable.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://openphish.com/phishing_feeds.html" target="_blank">OpenPhish Feeds</a>
        </td>
        <td>
            OpenPhish reçoit des URL de plusieurs flux et les analyse à l'aide de ses algorithmes propriétaires de détection de phishing. Il ya des offres gratuites et commerciales disponibles.
        </td>
    </tr>
        <tr>
        <td>
            <a href="https://feed.seguranca-informatica.pt/index.php" target="_blank">0xSI_f33d</a>
        </td>
        <td>
            Service gratuit pour détecter les domaines d'hameçonnage et de malware possibles, les IPs sur liste noire dans le cyberespace portugais.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.phishtank.com/developer_info.php" target="_blank">PhishTank</a>
        </td>
        <td>
            PhishTank livre une liste des URLs suspectées de phishing. Leurs données proviennent de rapports humains, mais elles ingèrent aussi des aliments extérieurs lorsque c'est possible. C'est un service gratuit, mais l'enregistrement pour une clé API est parfois nécessaire.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.celerium.com/pickupstix" target="_blank">PickupSTIX</a>
        </td>
        <td>
            PickupSTIX est une source de renseignements gratuits, de source ouverte et non commercialisés sur les cybermenaces. Actuellement, PickupSTIX utilise trois flux publics et distribue environ 100 nouvelles pièces d'intelligence chaque jour. PickupSTIX traduit les différents flux en STIX, qui peut communiquer avec n'importe quel TAXII serveur. Les données sont libres d'utilisation et sont un excellent moyen de commencer à utiliser l'intelligence cybermenace.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://qfeeds.com" target="_blank">Q-Feeds Threat Intelligence</a>
        </td>
        <td>
            Q-Feeds est une entreprise de cybersécurité qui rassemble des données d'OSINT, de la recherche exclusive et des flux commerciaux de renseignements sur les menaces pour offrir une solution équilibrée et hautement actionnable. Leur portail de renseignements sur les menaces (TIP) facilite l'accès et la gestion de ces données en temps réel. En s'intégrant aux pare-feu, aux SIEM et à d'autres plateformes de sécurité, Q-Feeds aide les entreprises à bloquer les connexions aux IP, aux domaines et aux URL malveillants connus, avant que les menaces ne nuisent. Ils ont également une version communautaire disponible sur demande.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rescure.fruxlabs.com/" target="_blank">REScure Threat Intel Feed</a>
        </td>
        <td>
            [RES]cure est un projet indépendant de renseignement sur les menaces exécuté par l'équipe Fruxlabs Crack pour mieux comprendre l'architecture sous-jacente des systèmes distribués, la nature des renseignements sur les menaces et la façon de recueillir, stocker, consommer et distribuer efficacement les renseignements sur les menaces. Les flux sont générés toutes les 6 heures.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rstcloud.net/" target="_blank">RST Cloud Threat Intel Feed</a>
        </td>
        <td>
            Indicateurs agrégés de compromis recueillis et vérifiés à partir de multiples sources ouvertes et soutenues par la communauté, enrichis et classés au moyen de notre plateforme de renseignement.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://report.cs.rutgers.edu/mrtg/drop/dropstat.cgi?start=-86400">Rutgers Blacklisted IPs</a>
        </td>
        <td>La liste IP des attaquants de force SSH Brute est créée à partir d'une fusion d'IP observés localement et d'IPs de 2 heures enregistrés sur badip.com et blocklist.de</td>
    </tr>
    <tr>
        <td>
            <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS Suspicious Domains</a>
        </td>
        <td>
            Les domaines suspects <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS</a> suit les domaines suspects. Il offre 3 listes classées <a href="https://isc.sans.edu/feeds/suspiciousdomains_High.txt" target="_blank">high</a>, <a href="https://isc.sans.edu/feeds/suspiciousdomains_Medium.txt" target="_blank">medium</a> ou <a href="https://isc.sans.edu/feeds/suspiciousdomains_Low.txt" target="_blank">low</a> sensibilité, où la liste de sensibilité élevée a moins de faux positifs, alors que la liste de sensibilité faible avec plus de faux positifs. Il y a aussi une <a href="https://isc.sans.edu/feeds/suspiciousdomains_whitelist_approved.txt" target="_blank">approved whitelist</a> de domaines.<br/>
            Enfin, il est suggéré <a href="https://isc.sans.edu/block.txt" target="_blank">IP blocklist</a> de <a href="https://dshield.org">DShield</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/securityscorecard/SSC-Threat-Intel-IoCs" target="_blank">SecurityScorecard IoCs</a>
        </td>
        <td>
            Accès public IoCs de blogs techniques et rapports par SecurityScorecard.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.stixify.com/" target="_blank">Stixify</a>
        </td>
        <td>
            Votre analyste automatique de renseignements sur les menaces. Extraire l'intelligence lisible par machine à partir de données non structurées.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/signature-base" target="_blank">signature-base</a>
        </td>
        <td>
            Une base de données de signatures utilisées dans d'autres outils par Neo23x0.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.spamhaus.org/" target="_blank">The Spamhaus project</a>
        </td>
        <td>
            Le projet Spamhaus contient plusieurs listes de menaces associées aux activités de spam et de malware.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.sophos.com/intelix" target="_blank">SophosLabs Intelix</a>
        </td>
        <td>
            SophosLabs Intelix est la plate-forme de renseignement de menace qui alimente les produits et les partenaires de Sophos. Vous pouvez accéder à l'intelligence basée sur le hash, url, etc. et soumettre des échantillons pour analyse. Grâce à l'API REST, vous pouvez facilement et rapidement ajouter cette information de menace à vos systèmes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://spur.us" target="_blank">Spur</a>
        </td>
        <td>
            Spur fournit des outils et des données pour détecter les VPN, les Proxies résidentielles et les Bots. Le plan gratuit permet aux utilisateurs de lookup une IP et obtenir sa classification, fournisseur VPN, des géolocalisations populaires derrière l'IP, et un contexte plus utile.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://sslbl.abuse.ch/" target="_blank">SSL Blacklist</a>
        </td>
        <td>
            SSL Blacklist (SSLBL) est un projet géré par abuse.ch. L'objectif est de fournir une liste de « mauvais » certificats SSL identifiés par abuse.ch être associé à des activités malware ou botnet. SSLBL s'appuie sur les empreintes SHA1 de certificats SSL malveillants et offre diverses listes noires
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://statvoo.com/dl/top-1million-sites.csv.zip" target="_blank">Statvoo Top 1 Million Sites</a>
        </td>
        <td>
            Liste blanche probable des 1 millions de sites Web, selon Statvoo.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://strongarm.io" target="_blank">Strongarm, by Percipient Networks</a>
        </td>
        <td>
            Strongarm est un trou noir DNS qui agit sur les indicateurs de compromis en bloquant la commande et le contrôle des logiciels malveillants. Strongarm regroupe des flux d'indicateurs gratuits, s'intègre aux flux commerciaux, utilise les flux du CIO de Percipient et exploite des résolveurs DNS et des API que vous pouvez utiliser pour protéger votre réseau et votre entreprise. Strongarm est gratuit pour un usage personnel.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.siemrules.com" target="_blank">SIEM Rules</a>
        </td>
        <td>
            Votre base de données d'ingénierie de détection. Affichage, modification et déploiement SIEM rules pour la chasse aux menaces et la détection.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.talosintelligence.com/" target="_blank">Talos</a>
        </td>
        <td>
	    Cisco Talos Intelligence Group est l'une des plus grandes équipes de renseignement sur les menaces commerciales au monde, composée de chercheurs, analystes et ingénieurs de calibre mondial. Ces équipes sont soutenues par une télémétrie inégalée et des systèmes sophistiqués pour créer des renseignements précis, rapides et concrets sur les menaces pour les clients, les produits et les services de Cisco. Talos défend les clients de Cisco contre les menaces connues et émergentes, découvre de nouvelles vulnérabilités dans les logiciels communs, et interdit les menaces dans la nature avant qu'ils ne puissent plus nuire à Internet en général. Talos maintient les règles officielles de Snort.org, ClamAV et SpamCop, en plus de publier de nombreux outils de recherche et d'analyse open-source. Talos fournit une interface utilisateur Web facile à utiliser pour vérifier une <a href="https://www.talosintelligence.com/reputation">observable's reputation</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfeeds.io" target="_blank">threatfeeds.io</a>
        </td>
        <td>
            threatfeeds.io liste les sources et les flux gratuits de renseignements sur les menaces et fournit des liens de téléchargement direct et des résumés en direct.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfox.abuse.ch/" target="_blank">threatfox.abuse.ch</a>
        </td>
        <td>
            ThreatFox est une plateforme libre de abuse.ch dans le but de partager les indicateurs de compromis (COI) associés aux logiciels malveillants avec la communauté infosec, les fournisseurs d'AV et les fournisseurs de renseignements de menace.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatconnect.com/blog/ingest-technical-blogs-reports/" target="_blank">Technical Blogs and Reports, by ThreatConnect</a>
        </td>
        <td>
            Cette source est peuplée avec le contenu de plus de 90 open source, blogs de sécurité. COI (<a href="https://en.wikipedia.org/wiki/Indicator_of_compromise" target="_blank">Indicators of Compromise</a>) sont analysés de chaque blog et le contenu du blog est formaté en balisage.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatjammer.com" target="_blank">Threat Jammer</a>
        </td>
        <td>
            Threat Jammer est un service d'API REST qui permet aux développeurs, ingénieurs de sécurité et autres professionnels de l'informatique d'accéder à des données de haute qualité de renseignements de menaces provenant de diverses sources et de les intégrer dans leurs applications dans le seul but de détecter et de bloquer les activités malveillantes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatminer.org/" target="_blank">ThreatMiner</a>
        </td>
        <td>
            ThreatMiner a été créé pour libérer les analystes de la collecte de données et leur fournir un portail sur lequel ils peuvent s'acquitter de leurs tâches, de la lecture des rapports à l'enrichissement des données et au pivotage.
            L'accent mis sur ThreatMiner Il ne s'agit pas seulement d'indicateurs de compromis (IoC) mais aussi de fournir aux analystes des renseignements contextuels liés à l'IoC qu'ils examinent.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/WSTNPHX/scripts-n-tools/master/malware-email-addresses.txt">WSTNPHX Malware Email Addresses</a>
        </td>
        <td>Adresses électroniques utilisées par les logiciels malveillants collectés par VVestron Phoronix (WSTNPHX)</td>
    </tr>
    <tr>
        <td>
            <a href="https://portal.underattack.today/" target="_blank">UnderAttack.today</a>
        </td>
        <td>UnderAttack est une plateforme de renseignement libre, elle partage des IP et des informations sur des événements et des attaques suspects. L'inscription est gratuite.</td>
    </tr>
    <tr>
        <td>
            <a href="https://urlhaus.abuse.ch">URLhaus</a>
        </td>
        <td>URLhaus est un projet de abuse.ch dans le but de partager des URLs malveillantes qui sont utilisées pour la distribution de logiciels malveillants.</td>
    </tr>
    <tr>
        <td>
            <a href="https://virusshare.com/" target="_blank">VirusShare</a>
        </td>
        <td>
            VirusShare.com est un dépôt d'échantillons de malware pour fournir des chercheurs de sécurité, des intervenants d'incident, des analystes médico-légaux, et l'accès morbidement curieux aux échantillons de code malveillant. L'accès au site est accordé sur invitation seulement.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://vuldb.com/?actor" target="_blank">VulDB CTI</a>
        </td>
        <td>
            VulDB est une base de données de vulnérabilité qui associe les activités des acteurs et les détails d'attaque avec les vulnérabilités. L'approche prédictive aide à déterminer les activités de recherche et d'attaque émergentes des acteurs malveillants.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yara-Rules/rules" target="_blank">Yara-Rules</a>
        </td>
        <td>
            Un dépôt open source avec différentes signatures Yara qui sont compilées, classifiées et conservées aussi à jour que possible.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://IOCFeed.mrlooquer.com/" target="_blank">1st Dual Stack Threat Feed by MrLooquer</a>
        </td>
        <td>
Mrlooquer a créé le premier flux de menace axé sur les systèmes à double pile. Comme le protocole IPv6 a commencé à faire partie des communications de malware et de fraude, il est nécessaire de détecter et d'atténuer les menaces dans les deux protocoles (IPv4 et IPv6).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.validin.com/">Validin DNS Database</a>
        </td>
        <td>
            Source de renseignements gratuite pour les informations DNS actuelles et historiques, la recherche d'autres sites Web associés à certaines PI et les connaissances sous-domaines Il y a une <a href="https://app.validin.com/docs">free API for IP and domain intelligence</a> aussi. 
        </td>
    </tr>
</table>

## Formats

Formats normalisés pour partager le renseignement sur les menaces (principalement des IOC).

<table>
    <tr>
        <td>
            <a href="https://capec.mitre.org/" target="_blank">CAPEC</a>
        </td>
        <td>
            Le dénombrement et la classification des modèles d'attaque communs (CAPEC) est un dictionnaire complet et taxonomie de classification des attaques connues qui peut être utilisé par les analystes, les développeurs, les testeurs et les éducateurs pour faire progresser la compréhension de la communauté et améliorer les défenses.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cyboxproject.github.io/" target="_blank">CybOX</a>
        </td>
        <td>
            La cyberpression observable (CybOX) le langage fournit une structure commune pour représenter les cyber-observables dans les domaines opérationnels de la cybersécurité des entreprises et entre eux, ce qui améliore la cohérence, l'efficacité et l'interopérabilité des outils et des processus déployés, et augmente la sensibilisation générale à la situation en permettant le partage automatique détaillé, la cartographie, la détection et l'heuristique d'analyse.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc5070" target="_blank">IODEF (RFC5070)</a>
        </td>
        <td>
            Le format d'échange de la description de l'objet d'incident (IODEF) définit une représentation des données qui fournit un cadre pour l'échange d'informations couramment échangées par les équipes d'intervention en cas d'incidents liés à la sécurité informatique.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc4765" target="_blank">IDMEF (RFC4765)</a>
        </td>
        <td>
            <i>Expérience</i> - Le format d'échange de messages de détection d'intrusion (IDMEF) a pour objet de définir des formats de données et des procédures d'échange d'informations présentant un intérêt pour les systèmes de détection et de réponse d'intrusion et les systèmes de gestion qui pourraient devoir interagir avec eux.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maecproject.github.io/" target="_blank">MAEC</a>
        </td>
        <td>
            L'énumération et la caractérisation des attributs malwares (MAEC) les projets visent à créer et fournir un langage normalisé pour partager des informations structurées sur les logiciels malveillants basées sur des attributs tels que les comportements, les artefacts et les modèles d'attaque.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=openc2" target="_blank">OpenC2</a>
        </td>
        <td>
            Commande et contrôle ouverts OASIS (OpenC2) Comité technique. Les OpenC2 TC fondera ses efforts sur les artefacts générés par la OpenC2 Forum. Avant la création de ce TC et specifla OpenC2 Le Forum était une communauté d'intervenants en cybersécurité qui a été facilitée par l'Agence de sécurité nationale (ANS). Les OpenC2 TC a été affrété pour rédiger des documents, specifles ions, lexiques ou autres artefacts pour répondre de manière normalisée aux besoins de la commande et du contrôle de la cybersécurité.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://oasis-open.github.io/cti-documentation/" target="_blank">STIX 2.0</a>
        </td>
        <td>
            Le langage eXpression (STIX) de l'information sur les menaces structurées est normalisé pour représenter l'information sur les menaces cybernétiques. Le langage STIX a l'intention de transmettre toute la gamme des informations potentielles sur les cybermenaces et s'efforce d'être pleinement expressif, flexible, extensible et automatisable. STIX permet non seulement les champs d'analyse d'outils, mais fournit aussi ce qu'on appelle <i>Mécanismes d'essai</i> qui fournissent des moyens pour intégrer tool-speciféléments, y compris OpenIOCYara et Snort. STIX 1.x a été archivé <a href="https://stixproject.github.io/" target="_blank">here</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://taxiiproject.github.io/" target="_blank">TAXII</a>
        </td>
        <td>
            L'échange automatisé fiable d'informations sur les indicateurs (TAXII) la norme définit un ensemble de services et d'échanges de messages qui, lorsqu'ils sont mis en oeuvre, permettent le partage d'informations sur les cybermenaces pouvant être mises en oeuvre entre les frontières de l'organisation et des produits et services. TAXII définit des concepts, des protocoles et des échanges de messages afin d'échanger des renseignements sur les cybermenaces pour la détection, la prévention et l'atténuation des cybermenaces.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://veriscommunity.net/index.html" target="_blank">VERIS</a>
        </td>
        <td>
            Le vocabulaire pour l'enregistrement d'événements et le partage d'incidents (VERIS) est un ensemble de mesures conçu pour fournir un langage commun pour décrire les incidents de sécurité de manière structurée et répétable. VERIS est une réponse à l'un des défis les plus critiques et les plus persistants dans le secteur de la sécurité - un manque d'information de qualité. En plus de fournir un format structuré, VERIS collecte également des données auprès de la communauté pour signaler les infractions dans le rapport d'enquête sur les infractions aux données de Verizon (<a target="_blank" href="http://www.verizonenterprise.com/verizon-insights-lab/dbir/">DBIR</a>) et publie cette base de données en ligne GitHub <a target="_blank" href="https://github.com/vz-risk/VCDB">repository.org</a>.
        </td>
    </tr>
</table>

## Cadres et plateformes

Cadres, plateformes et services pour collecter, analyser, créer et partager du renseignement sur les menaces.

<table>
    <tr>
        <td>
            <a href="https://github.com/abusesa/abusehelper" target="_blank">AbuseHelper</a>
        </td>
        <td>
            AbuseHelper est un cadre open-source pour recevoir et redistribuer les flux d'abus et les informations de menace.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://abuse.io/" target="_blank">AbuseIO</a>
        </td>
        <td>
            Une trousse d'outils pour recevoir, traiter, corréler et aviser les utilisateurs finals des rapports d'abus, consommant ainsi des sources de renseignements sur les menaces.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cisa.gov/ais" target="_blank">AIS</a>
        </td>
        <td>
            L'Agence de cybersécurité et de sécurité de l'infrastructure (CISA) libre Partage automatisé des indicateurs (AIS) permet l'échange d'indicateurs de cybermenace entre le gouvernement fédéral et le secteur privé à la vitesse de la machine. Les indicateurs de menace sont des informations comme les adresses IP malveillantes ou l'adresse de l'expéditeur d'un courriel d'hameçonnage (bien qu'ils puissent également être beaucoup plus compliqués).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/csirtgadgets/bearded-avenger" target="_blank">Bearded Avenger</a>
        </td>
        <td>
            La façon la plus rapide de consommer les renseignements sur les menaces. Successeur CIF.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.blueliv.com/" target="_blank">Blueliv Threat Exchange Network</a>
        </td>
        <td>
            Permet aux participants de partager les indicateurs de menace avec la collectivité.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Cortex" target="_blank">Cortex</a>
        </td>
        <td>
            Cortex permet aux observables, tels que les IP, adresses e-mail, URL, noms de domaine, fichiers ou hachages, d'être analysés un par un ou en mode en vrac à l'aide d'une seule interface web. L'interface web agit comme une façade pour de nombreux analyseurs, éliminant la nécessité de les intégrer vous-même lors de l'analyse. Les analystes peuvent également utiliser l'API Cortex REST pour automatiser certaines parties de leur analyse.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://crits.github.io/" target="_blank">CRITS</a>
        </td>
        <td>
            CRITS est une plateforme qui fournit aux analystes les moyens de mener des recherches collaboratives sur les logiciels malveillants et les menaces. Il se connecte à un dépôt centralisé de données de renseignement, mais peut également être utilisé comme une instance privée.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://csirtgadgets.org/collective-intelligence-framework" target="_blank">CIF</a>
        </td>
        <td>
            Le cadre du renseignement collectif (CIF) vous permet de combiner les informations connues de menaces malveillantes provenant de nombreuses sources et d'utiliser ces informations pour l'IR, la détection et l'atténuation. Code disponible le <a href="https://github.com/csirtgadgets/massive-octo-spice" target="_blank">GitHub</a>.
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/ctix-stix-taxii-cyber-threat-intelligence-exchange" target="_blank">CTIX</a>
        </td>
        <td>
            CTIX est une plate-forme intelligente de renseignement sur les menaces client-serveur (TIP) pour l'ingestion, l'enrichissement, l'analyse et le partage bidirectionnel des données de menace au sein de votre réseau de confiance.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.eclecticiq.com/platform" target="_blank">EclecticIQ Platform</a>
        </td>
        <td>
            EclecticIQ Platform est une STIX/TAXII une plate-forme de renseignements sur les menaces (PIT) qui permet aux analystes de la menace d'effectuer des enquêtes plus rapides, meilleures et plus approfondies tout en diffusant des renseignements à la vitesse de la machine.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.enisa.europa.eu/topics/csirt-cert-services/community-projects/incident-handling-automation" target="_blank">IntelMQ</a>
        </td>
        <td>
            IntelMQ est une solution pour les CERT pour la collecte et le traitement des flux de sécurité, des collabines, des tweets en utilisant un protocole de file d'attente de messages. C'est une initiative communautaire appelée IHAP (Incident Handling Automation Project) qui a été conçue conceptuellement par les CERT européens lors de plusieurs événements InfoSec. Son objectif principal est de donner aux intervenants en cas d'incident un moyen facile de recueillir et de traiter des renseignements sur les menaces, améliorant ainsi les processus de traitement des incidents des CERT.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/intelowlproject/IntelOwl/" target="_blank">IntelOwl</a>
        </td>
        <td>
            Intel Owl est une solution OSINT pour obtenir des données de renseignement de menace sur un specific fichier, une IP ou un domaine d'une API unique à l'échelle. Intel Owl est composé d'analyseurs qui peuvent être exécutés pour récupérer des données de sources externes (comme VirusTotal ou AbuseIPDB) ou pour générer des informations à partir d'analyseurs internes (comme Yara ou Oletools). Il peut être intégré facilement dans votre pile d'outils de sécurité (<a href="https://github.com/intelowlproject/pyintelowl" target="_blank">pyintelowl</a>) pour automatiser les tâches courantes habituellement effectuées, par exemple, par les analystes SOC manuellement.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.kaspersky.com/enterprise-security/threat-intelligence" target="_blank">Kaspersky Threat Intelligence Portal</a>
        </td>
        <td>
            Un site Web qui fournit une base de connaissances décrivant les cybermenaces, les objets légitimes et leurs relations, réunis en un seul service Web. L'abonnement au portail de renseignements sur les menaces de Kaspersky Labs vous fournit un point d'entrée unique à quatre services complémentaires: Kaspersky Threat Data Feeds, Threat Intelligence Reporting, Kaspersky Threat Lookup et Kaspersky Research Sandbox, tous disponibles dans des formats lisibles par ordinateur.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/malstrom" target="_blank">Malstrom</a>
        </td>
        <td>
            Malstrom vise à être un dépôt pour le suivi des menaces et les artefacts médico-légaux, mais aussi stocke les règles et les notes de YARA pour l'enquête. Remarque: Github projet a été archivé (aucune nouvelle contribution acceptée).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stratosphereips/Manati" target="_blank">ManaTI</a>
        </td>
        <td>
            Les ManaTI projet aide l'analyste de la menace en utilisant des techniques d'apprentissage automatique qui trouvent de nouvelles relations et inférences automatiquement.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://django-mantis.readthedocs.io/en/latest/" target="_blank">MANTIS</a>
        </td>
        <td>
            L'analyse des sources de renseignements sur les menaces fondée sur le modèle (MANTIS) Cyber Threat Intelligence Management Framework soutient la gestion de l'intelligence cyber-menace exprimée dans divers langages standard, comme STIX et CybOX. C'est *pas* prêts pour une production à grande échelle.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cert-se/megatron-java" target="_blank">Megatron</a>
        </td>
        <td>
            Megatron est un outil mis en œuvre par CERT-SE qui collecte et analyse de mauvaises IP, peut être utilisé pour calculer des statistiques, convertir et analyser des fichiers journaux et dans la gestion des abus et des incidents.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/PaloAltoNetworks/minemeld/wiki" target="_blank">MineMeld</a>
        </td>
        <td>
            Un cadre extensible de traitement du renseignement de menace a créé Palo Alto Networks.
            Il peut être utilisé pour manipuler des listes d'indicateurs et les transformer et/ou les agréger en vue de leur consommation par une infrastructure d'application par des tiers.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.misp-project.org/" target="_blank">MISP</a>
        </td>
        <td>
            La plate-forme de partage d'informations malware (MISP) est une solution logicielle ouverte pour collecter, stocker, distribuer et partager les indicateurs de cybersécurité et l'analyse des logiciels malveillants.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CERT-Polska/n6" target="_blank">n6</a>
        </td>
        <td>
            n6 (Network Security Incident eXchange) est un système de collecte, de gestion et de distribution d'informations de sécurité à grande échelle. La distribution est réalisée au moyen d'une API REST simple et d'une interface Web que les utilisateurs autorisés peuvent utiliser pour recevoir différents types de données, en particulier des informations sur les menaces et les incidents dans leurs réseaux. Il est développé par <a href="https://www.cert.pl/en/" target="_blank">CERT Polska</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ocsf.io/" target="_blank">Open Cybersecurity Schema Framework (OCSF)</a>
        </td>
        <td>
            L'Open Cybersecurity Schema Framework est un projet open-source, fournissant un cadre extensible pour développer des schémas, ainsi qu'un schéma de sécurité de base agnostique fournisseur. Les fournisseurs et autres producteurs de données peuvent adopter et étendre le schéma de leur specific domaines. Les ingénieurs en données peuvent cartographier différents schémas pour aider les équipes de sécurité à simplifier l'ingestion et la normalisation des données, de sorte que les scientifiques et les analystes en données puissent travailler avec un langage commun pour la détection et l'investigation des menaces. L'objectif est de fournir une norme ouverte, adoptée dans tout environnement, application ou solution, tout en complétant les normes et processus de sécurité existants.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opencti.io/en/" target="_blank">OpenCTI</a>
        </td>
        <td>
            OpenCTI, la plateforme Open Cyber Threat Intelligence, permet aux organisations de gérer leurs connaissances et leurs observables en matière de cybermenace. Son objectif est de structurer, stocker, organiser et visualiser des informations techniques et non techniques sur les cybermenaces. Les données sont structurées autour d'un schéma de connaissances basé sur les STIX2 normes. OpenCTI peuvent être intégrés à d'autres outils et plates-formes, MISP, TheHive et MITRE ATT&CK, a.o.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware.html" target="_blank">OpenIOC</a>
        </td>
        <td>
            OpenIOC est un cadre ouvert pour le partage des renseignements relatifs aux menaces. Il est conçu pour échanger des informations sur les menaces à l'interne et à l'externe dans un format digestible par machine.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/OpenTAXII" target="_blank">OpenTAXII</a>
        </td>
        <td>
            OpenTAXII est une mise en œuvre robuste de Python TAXII Services qui fournit un ensemble de fonctionnalités riche et une API Pythonique amicale construite sur le dessus d'une application bien conçue.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Ptr32Void/OSTrICa" target="_blank">OSTrICa</a>
        </td>
        <td>
            Un cadre ouvert axé sur les plugins pour collecter et visualiser les informations sur les menaces.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://otx.alienvault.com" target="_blank">OTX - Open Threat Exchange</a>
        </td>
        <td>
            AlienVault Open Threat Exchange (OTX) offre un accès libre à une communauté mondiale de chercheurs en menaces et de professionnels de la sécurité. Il fournit des données de menace générées par la communauté, permet la recherche collaborative et automatise le processus de mise à jour de votre infrastructure de sécurité avec des données de menace provenant de n'importe quelle source.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Lookingglass/opentpx/" target="_blank">Open Threat Partner eXchange</a>
        </td>
        <td>
            Les Open Threat Partner eXchange (OpenTPX) se compose d'un format open-source et d'outils pour l'échange de données de renseignements sur les menaces lisibles par machine et de données sur les opérations de sécurité du réseau. C'est un format JSON qui permet le partage de données entre les systèmes connectés.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.riskiq.com/" target="_blank">PassiveTotal</a>
        </td>
        <td>
            Les PassiveTotal plate-forme offerte par RiskIQ est une plate-forme d'analyse des menaces qui fournit aux analystes autant de données que possible afin de prévenir les attaques avant qu'elles ne se produisent. Plusieurs types de solutions sont proposés, ainsi que des intégrations (API) avec d'autres systèmes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pulsedive.com/" target="_blank">Pulsedive</a>
        </td>
        <td>
            Pulsedive est une plate-forme de renseignement communautaire libre qui consomme des flux open-source, enrichissant les COI et les exécutant à travers un algorithme de notation des risques pour améliorer la qualité des données. Elle permet aux utilisateurs de soumettre, de rechercher, de corréler et de mettre à jour les COI, de dresser une liste des « facteurs de risque » pour lesquels les COI sont plus exposés et de donner une vue d'ensemble des menaces et des activités liées aux menaces.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.recordedfuture.com/" target="_blank">Recorded Future</a>
        </td>
        <td>
            Enregistré Future est un produit SaaS premium qui unifie automatiquement les renseignements de menace de sources ouvertes, fermées et techniques en une seule solution. Leur technologie utilise le traitement du langage naturel (NLP) et l'apprentissage automatique pour fournir cette information de menace en temps réel, faisant de l'Enregistré Futur un choix populaire pour les équipes de sécurité informatique.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Netflix/Scumblr" target="_blank">Scumblr</a>
        </td>
        <td>
            Scumblr est une application Web qui permet d'effectuer des synchronisations périodiques de sources de données (comme Github les dépôts et les URL) et l'analyse (telle que l'analyse statique, les vérifications dynamiques et la collecte de métadonnées) des résultats identifiés.
            Scumblr vous aide à rationaliser la sécurité proactive grâce à un cadre d'automatisation intelligent pour vous aider à identifier, suivre et résoudre les problèmes de sécurité plus rapidement.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.anomali.com/platform/staxx" target="_blank">STAXX (Anomali)</a>
        </td>
        <td>
            Anomali STAXXTM vous offre un moyen facile et gratuit de vous abonner à toute STIX/TAXII La nourriture. Téléchargez simplement le client STAXX, configurez vos sources de données et STAXX gérera le reste.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://stoq.punchcyber.com/" target="_blank">stoQ</a>
        </td>
        <td>
            stoQ est un cadre qui permet aux cyberanalystes d'organiser et d'automatiser des tâches répétitives et axées sur les données. Il dispose de plugins pour beaucoup d'autres systèmes à interagir avec.
            Un cas d'utilisation est l'extraction des CIO de documents, dont un exemple est montré <a href="https://stoq-framework.blogspot.nl/2016/04/operationalizing-indicators.html" target="_blank">here</a>, mais il peut également être utilisé pour la désobfuscationg et le décodage du contenu et la numérisation automatisée avec YARA, par exemple.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/tripwire/tardis" target="_blank">TARDIS</a>
        </td>
        <td>
            L'analyse de la menace, reconnaiset système de renseignement de données (TARDIS) est un cadre open source pour effectuer des recherches historiques à l'aide de signatures d'attaque.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatconnect.com/" target="_blank">ThreatConnect</a>
        </td>
        <td>
            ThreatConnect est une plateforme avec des capacités d'intelligence de la menace, d'analyse et d'orchestration. Il est conçu pour vous aider à recueillir des données, à produire de l'intelligence, à les partager avec d'autres et à prendre des mesures à cet égard.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatcrowd.org/" target="_blank">ThreatCrowd</a>
        </td>
        <td>
            ThreatCrowd est un système de recherche et de recherche d'objets liés aux cybermenaces.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatpipes.com" target="_blank">ThreatPipes</a>
        </td>
        <td>
            Restez deux pas d'avance sur vos adversaires. Obtenez une image complète de la façon dont ils vont vous exploiter.
            <br />
            ThreatPipes est une reconnaissanceaisoutil de lance qui interroge automatiquement les 100s de sources de données pour recueillir des informations sur les adresses IP, les noms de domaine, les adresses e-mail, les noms et plus.
            <br />
            Vous n'avez qu'à direcify la cible que vous voulez étudier, choisissez les modules à activer et ensuite ThreatPipes recueillera des données pour acquérir une compréhension de toutes les entités et de leur relation les unes avec les autres.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://developers.facebook.com/docs/threat-exchange/" target="_blank">ThreatExchange</a>
        </td>
        <td>
            Facebook créé ThreatExchange afin que les organisations participantes puissent partager des données de menace en utilisant une API pratique, structurée et facile à utiliser qui fournit des contrôles de confidentialité pour permettre le partage avec seulement les groupes désirés. Ce projet est toujours en cours <b>bêta</b>. Code de référence : <a href="https://github.com/facebook/ThreatExchange" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/typedb-osi/typedb-cti" target="_blank">TypeDB CTI</a>
        </td>
        <td>
		TypeDB Données - CTI est une plate-forme de renseignements sur les menaces à source ouverte qui permet aux organisations de stocker et de gérer leurs connaissances en matière de renseignements sur les menaces cybernétiques. Il permet aux professionnels de l'information sur les menaces de rassembler leurs informations disparates sur l'ICT dans une seule base de données et de trouver de nouvelles idées sur les cybermenaces. Ce dépôt fournit un schéma basé sur STIX2, et contient MITRE ATT&CK comme exemple d'ensemble de données pour commencer à explorer cette plate-forme de renseignement sur les menaces. Plus dans cette <a href="https://blog.vaticle.com/introducing-a-knowledge-graph-for-cyber-threat-intelligence-with-typedb-bdb559a92d2a" target="_blank">blog post</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://beta.virusbay.io/" target="_blank">VirusBay</a>
        </td>
        <td>
            VirusBay est une plateforme de collaboration basée sur le Web qui relie les professionnels du centre d'opérations de sécurité (SOC) avec les chercheurs de logiciels malveillants pertinents.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/brianwarehime/threatnote" target="_blank">threatnote.io</a>
        </td>
        <td>
            Le nouveau et amélioré threatnote.io - Un outil pour les analystes et les équipes de l'ICT pour gérer les exigences en matière d'information, les rapports et les processus de l'ICT dans une plateforme tout-en-un
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exchange.xforce.ibmcloud.com/" target="_blank">XFE - X-Force Exchange</a>
        </td>
        <td>
            Le X-Force Exchange (XFE) d'IBM XFE est un produit SaaS gratuit que vous pouvez utiliser pour rechercher des renseignements sur les menaces, recueillir vos constatations et partager vos idées avec d'autres membres de la communauté XFE.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://yeti-platform.github.io/" target="_blank">Yeti</a>
        </td>
        <td>
            Le dépôt de renseignements sur les menaces ouvert, distribué, automatique et analyste. Fait par et pour les intervenants.
        </td>
    </tr>
</table>



## Outils

Toutes sortes d’outils pour analyser, créer et modifier du renseignement sur les menaces, principalement fondé sur les IOC.

<table>
    <tr>
        <td>
            <a href="https://github.com/jalewis/actortrackr" target="_blank">ActorTrackr</a>
        </td>
        <td>
            ActorTrackr est une application web open source pour stocker/recherche/lien des données relatives aux acteurs. Les principales sources proviennent des utilisateurs et de divers dépôts publics. Source disponible le <a href="https://github.com/jalewis/actortrackr" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/camp0/aiengine" target="_blank">AIEngine</a>
        </td>
        <td>
            AIEngine est un moteur d'inspection de paquets interactif/programmable de prochaine génération Python/Ruby/Java/Lua avec des capacités d'apprentissage sans aucune intervention humaine, la fonctionnalité NIDS(Network Intrusion Detection System), la classification de domaine DNS, collecteur réseau, réseau médico-légal et bien d'autres.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/referefref/aiocrioc" target="_blank">AIOCRIOC</a>
        </td>
        <td>
            Intelligence artificielle Indicateur de reconnaissance des caractères oculaires du compromis (AIOCRIOC) est un outil qui combine le grattage web, les capacités OCR de Tesseract et OpenAI compatible API LLM comme GPT-4 pour analyser et extraire des COI de rapports et d'autres contenus web, y compris des images intégrées avec des données contextuelles.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://analyze.intezer.com" target="_blank">Analyze (Intezer)</a>
        </td>
        <td>
            Analyser est une plate-forme d'analyse de malware tout-en-un qui est capable d'effectuer une analyse de code statique, dynamique et génétique sur tous les types de fichiers. Les utilisateurs peuvent suivre les familles de malwares, extraire les IOC/MITRE TTP, et télécharger les signatures YARA. Il y a une édition communautaire pour commencer gratuitement.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/1aN0rmus/TekDefense-Automater" target="_blank">Automater</a>
        </td>
        <td>
            Automater est un outil URL/Domain, IP Address et Md5 Hash OSINT destiné à faciliter le processus d'analyse pour les analystes d'intrusion.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/svdwi/BlueBox" target="_blank">BlueBox</a>
        </td>
        <td>
            BlueBox est une solution OSINT pour obtenir des données de renseignement de menace sur un specific fichier, IP, domaine ou URL et les analyser.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://botscout.com/">BotScout</a>
        </td>
        <td>
            BotScout aide à empêcher les scripts Web automatisés, connus sous le nom de "bots", de s'inscrire sur les forums, de polluer les bases de données, de diffuser des pourriels et d'abuser des formulaires sur les sites Web.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/bro-intel-generator" target="_blank">bro-intel-generator</a>
        </td>
        <td>
            Script pour générer des fichiers Bro intel à partir de rapports pdf ou html.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/cabby" target="_blank">cabby</a>
        </td>
        <td>
            Une bibliothèque Python simple pour interagir avec TAXII les serveurs.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/cacador" target="_blank">cacador</a>
        </td>
        <td>
            Cacador est un outil écrit dans Go pour extraire des indicateurs communs de compromis d'un bloc de texte.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/combine" target="_blank">Combine</a>
        </td>
        <td>
            Combiner les flux de renseignements sur les menaces provenant de sources publiques.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CrowdStrike/CrowdFMS" target="_blank">CrowdFMS</a>
        </td>
        <td>
            CrowdFMS est un cadre pour automatiser la collecte et le traitement des échantillons de VirusTotal, en tirant parti du système d'API privé.
            Le cadre télécharge automatiquement des échantillons récents, ce qui a déclenché une alerte sur le flux de notification YARA des utilisateurs.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-transmute.org/" target="_blank">CTI-Transmute</a>
        </td>
        <td>
            CTI-Transmute est un outil pour convertir les données de Cyber Threat Intelligence (CTI) entre MISP et les formats STIX. Il fournit un ensemble de paramètres de l'API qui permettent la conversion automatisée des données, ce qui facilite l'intégration de différentes plates-formes de renseignement de menace et de flux de travail. Source disponible le <a href="https://github.com/MISP/cti-transmute" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cuckoosandbox/cuckoo" target="_blank">Cuckoo Sandbox</a>
        </td>
        <td>
            Cuckoo Sandbox est un système d'analyse de malware dynamique automatisé. C'est le bac à sable le plus connu d'analyse de logiciels malveillants open source et est fréquemment déployé par des chercheurs, des équipes CERT/SOC et des équipes de renseignement de la menace partout dans le monde. Pour de nombreuses organisations Cuckoo Sandbox fournit un premier aperçu des échantillons de logiciels malveillants potentiels.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cybergordon.com/" target="_blank">CyberGordon</a>
        </td>
        <td>
            CyberGordon est un moteur de recherche de renseignements de menace. Il met à profit 30+ sources.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CylanceSPEAR/CyBot" target="_blank">CyBot</a>
        </td>
        <td>
            CyBot est un chat de renseignement de menace. Il peut effectuer plusieurs types de lookups offerts par des modules personnalisés.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Fenrir" target="_blank">Fenrir</a>
        </td>
        <td>
            Scanner simple du CIO Bash.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/FireHOL-IP-Aggregator" target="_blank">FireHOL IP Aggregator</a>
        </td>
        <td>
            Demande de conservation des aliments pour animaux de FireHOL <a href="https://github.com/firehol/blocklist-ipsets" target="_blank">blocklist-ipsets</a> avec l'historique des adresses IP. Le service API HTTP est développé pour les requêtes de recherche.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/Forager" target="_blank">Forager</a>
        </td>
        <td>
            Scénario multithreaded de recherche de renseignements.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.gigasheet.co" target="_blank">Gigasheet</a>
        </td>
        <td>
            Gigasheet est un produit SaaS utilisé pour analyser des ensembles de données de cybersécurité massives et disparates. Importer des fichiers journaux massifs, netflow, pcaps, gros CSVS et plus.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/BinaryDefense/goatrider" target="_blank">GoatRider</a>
        </td>
        <td>
            GoatRider est un outil simple qui va abattre dynamiquement Artillery Threat Intelligence Feeds, TOR, AlienVaults OTX, et le top 1 million de sites Web Alexa et faire une comparaison avec un fichier hostname ou un fichier IP.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cse.google.com/cse/publicurl?cx=003248445720253387346:turlh5vi4xc" target="_blank">Google APT Search Engine</a>
        </td>
        <td>
            Groupes APT, opérations et moteur de recherche de logiciels malveillants. Les sources utilisées pour cette recherche personnalisée de Google sont listées sur <a href="https://gist.github.com/Neo23x0/c4f40629342769ad0a8f3980942e21d3" target="_blank">this</a> GitHub - Oui.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ciscocsirt/gosint" target="_blank">GOSINT</a>
        </td>
        <td>
            Les GOSINT framework est un projet gratuit utilisé pour la collecte, le traitement et l'exportation d'indicateurs publics de compromis de haute qualité.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://hashdd.com/" target="_blank">hashdd</a>
        </td>
        <td>
            Un outil pour lookup informations connexes à partir de la valeur du hachage cryographique
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/harbinger" target="_blank">Harbinger Threat Intelligence</a>
        </td>
        <td>
            script Python qui permet de demander plusieurs agrégateurs de menaces en ligne à partir d'une seule interface.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Hippocampe" target="_blank">Hippocampe</a>
        </td>
        <td>
            Hippocampe regroupe les flux de menaces d'Internet dans un cluster Elasticsearch. Il a une API REST qui permet de chercher dans sa 'mémoire'. Il est basé sur un script Python qui récupère les URLs correspondant aux flux, analyse et les indexe.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/S03D4-164/Hiryu" target="_blank">Hiryu</a>
        </td>
        <td>
            Un outil pour organiser l'information de la campagne APT et pour visualiser les relations entre les CIO.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/ioc-editor.html" target="_blank">IOC Editor</a>
        </td>
        <td>
            Un éditeur gratuit pour Indicateurs de compromis (IOC).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/ioc-finder" target="_blank">IOC Finder</a>
        </td>
        <td>
            Bibliothèque Python pour trouver des indicateurs de compromis dans le texte. Utilise des grammaires plutôt que des regexes pour une meilleure compréhension. En février 2019, il analyse plus de 18 types d'indicateurs.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ioc-fang/ioc_fanger" target="_blank">IOC Fanger (and Defanger)</a>
        </td>
        <td>
            Python bibliothèque pour le fanging (`hXXp://example[.]com` => `http://example.com`) et le défangage (`http://example.com` => `hXXp://example[.]com`) indicateurs de compromis dans le texte.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/armbues/ioc_parser" target="_blank">ioc_parser</a>
        </td>
        <td>
            Outil pour extraire les indicateurs de compromis des rapports de sécurité en format PDF.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mandiant/ioc_writer" target="_blank">ioc_writer</a>
        </td>
        <td>
            Fournit une bibliothèque Python qui permet la création et l'édition de base de OpenIOC objets.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/python-iocextract" target="_blank">iocextract</a>
        </td>
        <td>
            Extraire les URL, les adresses IP, les hachages MD5/SHA, les adresses e-mail et les règles YARA à partir de textes. Inclut certains IOC encodés et défigurés dans la sortie, et éventuellement les décode/refangs.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stephenbrannon/IOCextractor" target="_blank">IOCextractor</a>
        </td>
        <td>
            IOC (Indicateur de compromis) Extractor est un programme destiné à aider à extraire les CIO des fichiers texte. L'objectif général est d'accélérer le processus d'analyse des données structurées (COI) à partir de données non structurées ou semi-structurées
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/johestephan/ibmxforceex.checker.py" target="_blank">ibmxforceex.checker.py</a>
        </td>
        <td>
            Client Python pour IBM X-Force Exchange.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/jager" target="_blank">jager</a>
        </td>
        <td>
            Jager est un outil pour tirer des COI utiles (indicateurs de compromis) de différentes sources d'entrée (PDF pour l'instant, texte simple très bientôt, pages Web finalement) et les mettre dans un format facile à manipuler JSON.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/13850" target="_blank">Kaspersky CyberTrace</a>
        </td>
        <td>
            Outil de fusion et d'analyse du renseignement de menace qui intègre les flux de données de menace avec les solutions SIEM. Les utilisateurs peuvent immédiatement utiliser les renseignements relatifs aux menaces pour les activités de surveillance de la sécurité et de rapport d'incident (IR) dans le déroulement de leurs opérations de sécurité existantes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/KasperskyLab/klara" target="_blank">KLara</a>
        </td>
        <td>
            KLara, un système distribué écrit en Python, permet aux chercheurs de scanner une ou plusieurs règles Yara sur les collections avec des échantillons, obtenir des notifications par e-mail ainsi que l'interface web lorsque les résultats de l'analyse sont prêts.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/libtaxii" target="_blank">libtaxii</a>
        </td>
        <td>
            Une bibliothèque Python pour le traitement TAXII Messages invoquant TAXII Services.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Loki" target="_blank">Loki</a>
        </td>
        <td>
            Scanner de réponse simple au CIO et aux incidents.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/ssanthosh243/ip-lookup-docker" target="_blank">LookUp</a>
        </td>
        <td>
            LookUp est une page centralisée pour obtenir diverses informations de menace sur une adresse IP. Il peut être intégré facilement dans des menus contextuels d'outils comme les SIEM et d'autres outils d'enquête.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/HurricaneLabs/machinae" target="_blank">Machinae</a>
        </td>
        <td>
            Machinae est un outil de collecte d'informations sur différents éléments de données liés à la sécurité : adresses IP, noms de domaine, URL, adresses email, hashes de fichiers et empreintes digitales SSL.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/silascutler/MalPipe" target="_blank">MalPipe</a>
        </td>
        <td>
            Cadre de collecte et de traitement des logiciels malveillants (et indicateurs). Il est conçu pour extraire les logiciels malveillants, les domaines, les URL et les adresses IP de plusieurs flux, enrichir les données collectées et exporter les résultats.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/misp-workbench" target="_blank">MISP Workbench</a>
        </td>
        <td>
            Outils pour exporter des données MISP MySQL base de données et les utiliser et les abuser en dehors de cette plate-forme.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/MISP-Taxii-Server" target="_blank">MISP-Taxii-Server</a>
        </td>
        <td>
            Un ensemble de fichiers de configuration à utiliser avec EclecticIQ OpenTAXII implémentation, ainsi qu'un callback pour quand les données sont envoyées au TAXII La boîte de réception du serveur.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/microsoft/msticpy" target="_blank">MSTIC Jupyter and Python Security Tools</a>
        </td>
        <td>
            msticpy est une bibliothèque pour l'enquête d'InfoSec et la chasse dans Jupyter Notebooks. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/paulpc/nyx" target="_blank">nyx</a>
        </td>
        <td>
            Le but de ce projet est de faciliter la distribution des artefacts du renseignement de menace aux systèmes défensifs et d'améliorer la valeur des outils à source ouverte et commerciaux.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/onemillion" target="_blank">OneMillion</a>
        </td>
        <td>
            Bibliothèque Python pour déterminer si un domaine est dans le top Alexa ou Cisco, un million de listes de domaines.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/STIXProject/openioc-to-stix" target="_blank">openioc-to-stix</a>
        </td>
        <td>
            Générer STIX XML à partir OpenIOC XML.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/omnibus" target="_blank">Omnibus</a>
        </td>
        <td>
            Omnibus est une application en ligne de commande interactive pour la collecte et la gestion des IOC/objets (IP, Domaines, Adresses e-mail, Noms d'utilisateur et Adresses Bitcoin), enrichissant ces artefacts avec des données OSINT de sources publiques, et fournissant les moyens de stocker et d'accéder à ces artefacts de manière simple.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kx499/ostip/wiki" target="_blank">OSTIP</a>
        </td>
        <td>
            Une plate-forme de données sur les menaces d'origine.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mgeide/poortego" target="_blank">poortego</a>
        </td>
        <td>
            Projet open-source pour gérer le stockage et la liaison de l'intelligence open-source (ala Maltego, mais libre comme dans la bière et non lié à un specific / base de données propriétaire). Initialement développé en rubis, mais nouvelle base de code complètement réécrite en python.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/yahoo/PyIOCe" target="_blank">PyIOCe</a>
        </td>
        <td>
            PyIOCe est un IOC editor écrit en Python.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/QTek/QRadio" target="_blank">QRadio</a>
        </td>
        <td>
            QRadio est un outil/cadre conçu pour consolider les sources de renseignements sur les cybermenaces.
            L'objectif du projet est d'établir un cadre modulaire solide pour l'extraction de données de renseignement à partir de sources vérifiées.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/aboutsecurity/rastrea2r" target="_blank">rastrea2r</a>
        </td>
        <td>
            Collecte et chasse pour les indicateurs de compromis (IOC) avec gustatif et style!
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/redline.html" target="_blank">Redline</a>
        </td>
        <td>
            Un outil d'enquête hôte qui peut être utilisé, entre autres, pour l'analyse du CIO.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ocmdev/rita" target="_blank">RITA</a>
        </td>
        <td>
            Analyse des menaces réelles en matière de renseignement (RITA) vise à faciliter la recherche d'indicateurs de compromis dans les réseaux d'entreprises de taille variable.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/softrace" target="_blank">Softrace</a>
        </td>
        <td>
            Bibliothèque nationale de référence de logiciels léger Stockage RDS.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/0x4d31/sqhunter" target="_blank">sqhunter</a>
        </td>
        <td>
            Chasseur de menaces basé sur l'Osquery, Salt Open et Cymon API. Il peut interroger les sockets réseau ouverts et les vérifier contre les sources de renseignement de menace
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SecurityRiskAdvisors/sra-taxii2-server" target="_blank">SRA TAXII2 Server</a>
        </td>
        <td>
            Total TAXII 2,0 specifServeur de cation implémenté dans Node JS avec moteur MongoDB.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://stixvalidator.com" target="_blank">Stixvalidator.com</a>
        </td>
        <td>
            Stixvalidator.com est un STIX gratuit en ligne et STIX2 service de validation.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/traut/stixview" target="_blank">Stixview</a>
        </td>
        <td>
            Stixview est une bibliothèque JS pour intégrer interactive STIX2 Graphiques.
        </td>
    </tr>
	<tr>
        <td>
            <a href="https://github.com/STIXProject/stix-viz" target="_blank">stix-viz</a>
        </td>
        <td>
            Outil de visualisation STIX.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://test.taxiistand.com/" target="_blank">TAXII Test Server</a>
        </td>
        <td>
            Vous permet de tester votre TAXII l'environnement en se connectant aux services fournis et en accomplissant les différentes fonctions TAXII specifDes ions.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jpsenior/threataggregator" target="_blank">threataggregator</a>
        </td>
        <td>
            ThreatAgrégator regroupe les menaces à la sécurité d'un certain nombre de sources en ligne, et les extrants vers divers formats, y compris les règles CEF, Snort et IPTables.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcrowd_api" target="_blank">threatcrowd_api</a>
        </td>
        <td>
            Bibliothèque Python pour ThreatCrowdL'API.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcmd" target="_blank">threatcmd</a>
        </td>
        <td>
            Interface Cli vers ThreatCrowd.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/syphon1c/Threatelligence" target="_blank">Threatelligence</a>
        </td>
        <td>
            Threatelligence est un simple collecteur de flux de renseignements de cybermenace, utilisant Elasticsearch, Kibana et Python pour collecter automatiquement des renseignements de sources personnalisées ou publiques. Mise à jour automatique des flux et essaie d'améliorer les données pour les tableaux de bord. Toutefois, les projets ne semblent plus être maintenus.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/ThreatIngestor" target="_blank">ThreatIngestor</a>
        </td>
        <td>
            Cadre flexible, axé sur la configuration, extensible pour la consommation de renseignements sur les menaces. ThreatIngestor peut regarder Twitter, les flux RSS et d'autres sources, extraire des informations significatives comme les IP/domaines C2 et les signatures YARA, et envoyer ces informations à d'autres systèmes pour analyse.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://chrome.google.com/webstore/detail/threatpinch-lookup/ljdgplocfnmnofbhpkjclbefmjoikgke" target="_blank">ThreatPinch Lookup</a>
        </td>
        <td>
            Une extension pour Chrome qui crée des popups hover sur chaque page pour IPv4, MD5, SHA2, et CVE. Il peut être utilisé pour lookups pendant les enquêtes sur les menaces.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/michael-yip/ThreatTracker" target="_blank">ThreatTracker</a>
        </td>
        <td>
            Un script Python conçu pour surveiller et générer des alertes sur des ensembles donnés de CIO indexés par un ensemble de moteurs de recherche Google Custom.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yelp/threat_intel" target="_blank">threat_intel</a>
        </td>
        <td>
            Plusieurs API pour le renseignement de menace intégrées dans un seul paquet. Sont inclus : OpenDNS Investigation, VirusTotal et ShadowServer.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/abhinavbom/Threat-Intelligence-Hunter" target="_blank">Threat-Intelligence-Hunter</a>
        </td>
        <td>
            TIH est un outil de renseignement qui vous aide à rechercher des IOC à travers plusieurs flux de sécurité ouvertement disponibles et quelques API bien connues. L'idée derrière cet outil est de faciliter la recherche et le stockage des COI fréquemment ajoutés pour créer votre propre base de données locale d'indicateurs.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/tiq-test" target="_blank">tiq-test</a>
        </td>
        <td>
            L'outil d'essai du Quotient de renseignement de menace (QTI) fournit une visualisation et une analyse statistique des flux de TI.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/yeti" target="_blank">YETI</a>
        </td>
        <td>
            YETI est une preuve de conception mise en œuvre de TAXII qui soutient les services Inbox, Poll et Discovery définis par le TAXII Services SpecifC'est le cas.
        </td>
    </tr>
</table>



## <a name="research"></a>Recherche, normes et ouvrages

Toutes sortes de documents sur le renseignement sur les menaces, notamment des travaux de recherche (scientifiques) et des livres blancs.

<table>
    <tr>
        <td>
            <a href="https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections" target="_blank">APT & Cyber Criminal Campaign Collection</a>
        </td>
        <td>
            Collection étendue de campagnes (historiques). Les entrées proviennent de diverses sources.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kbandla/APTnotes" target="_blank">APTnotes</a>
        </td>
        <td>
            Une grande collection de sources concernant <i>Menaces persistantes avancées</i> (APT). Ces rapports comprennent habituellement des connaissances ou des conseils stratégiques et tactiques.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://attack.mitre.org/" target="_blank">ATT&CK</a>
        </td>
        <td>
            Tactiques, techniques et connaissances communes (ATT&CKTM) est un modèle et un cadre pour décrire les actions qu'un adversaire peut prendre lorsqu'il opère au sein d'un réseau d'entreprise. ATT&CK est une référence commune sans cesse croissante pour les techniques post-accès qui permet de mieux connaître les actions qui peuvent être vues lors d'une intrusion de réseau. MITRE travaille activement à l'intégration avec la construction connexe, par exemple CAPEC, STIX et MAEC.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.activeresponse.org/building-threat-hunting-strategy-with-the-diamond-model/" target="_blank">Building Threat Hunting Strategies with the Diamond Model</a>
        </td>
        <td>
            Blogpost de Sergio Caltagirone sur la façon de développer des stratégies intelligentes de chasse à la menace en utilisant le modèle Diamond.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://car.mitre.org/wiki/Main_Page" target="_blank">Cyber Analytics Repository by MITRE</a>
        </td>
        <td>
            Le Cyber Analytics Repository (CAR) est une base de connaissances en analyse développée par MITRE sur la base de la tactique, des techniques et des connaissances communes (ATT&CKModèle de menace TM.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a>
        </td>
        <td>
            Un nouveau <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a> en utilisant une approche axée sur les parties prenantes et alignée sur la <a href="https://www.energy.gov/ceser/cybersecurity-capability-maturity-model-c2m2" target="_blank">Cybersecurity Capability Maturity Model (C2M2)</a> pour responsabiliser votre équipe et créer une valeur durable.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mitre/cti" target="_blank">Cyber Threat Intelligence Repository by MITRE</a>
        </td>
        <td>
            Le dépôt de renseignements sur la cybermenace ATT&CK et CAPEC catalogues exprimés en STIX 2.0 C'est JSON.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.tandfonline.com/doi/full/10.1080/08850607.2020.1780062" target="_blank">Cyber Threat Intelligence: A Product Without a Process?</a>
        </td>
        <td>
            Un document de recherche décrivant comment les produits actuels du renseignement sur les cybermenaces sont insuffisants et comment ils peuvent être améliorés en introduisant et en évaluant des méthodes et des processus solides.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cryptome.org/2015/09/cti-guide.pdf" target="_blank">Definitive Guide to Cyber Threat Intelligence</a>
        </td>
        <td>
            Décrit les éléments du renseignement sur les cybermenaces et discute de la façon dont il est recueilli, analysé et utilisé par divers consommateurs humains et technologiques. En outre, examine comment le renseignement peut améliorer la cybersécurité aux niveaux tactique, opérationnel et stratégique, et comment il peut vous aider à arrêter les attaques plus tôt, améliorer vos défenses, et parler de façon plus productive des questions de cybersécurité avec la direction exécutive dans le type <i>pour les mannequins</i> style.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ryanstillions.blogspot.nl/2014/04/the-dml-model_21.html" target="_blank">The Detection Maturity Level (DML)</a>
        </td>
        <td>
            Le modèle DML est un modèle de maturité de capacité pour référencer la maturité de ceux dans la détection des cyberattaques.
            Il est conçu pour les organisations qui effectuent la détection et la réponse par des renseignements et qui mettent l'accent sur un programme de détection mature.
            La maturité d'une organisation n'est pas mesurée par sa capacité d'obtenir simplement des renseignements pertinents, mais plutôt par sa capacité d'appliquer efficacement ces renseignements aux fonctions de détection et d'intervention.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/diamond.pdf" target="_blank">The Diamond Model of Intrusion Analysis</a>
        </td>
        <td>
            Cet article présente le modèle diamant, un cadre cognitif et un instrument analytique pour appuyer et améliorer l'analyse des intrusions. L'une de ses principales contributions consiste à soutenir une mesure, une testabilité et une répétabilité accrues dans l'analyse des intrusions afin d'atteindre une efficacité, une efficacité et une précision accrues pour vaincre les adversaires.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/a547092.pdf" target="_blank">The Targeting Process: D3A and F3EAD</a>
        </td>
        <td>
            Le F3EAD est une méthode militaire permettant de combiner opérations et renseignement.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/NIST.SP.800-150.pdf" target="_blank">Guide to Cyber Threat Information Sharing by NIST</a>
        </td>
        <td>
            Le Guide pour le partage de l'information sur la cybermenace (publication spéciale NIST 800-150) aide les organisations à mettre en place des capacités d'intervention en cas d'incident de sécurité informatique qui tirent parti des connaissances, de l'expérience et des capacités collectives de leurs partenaires en partageant activement le renseignement sur les menaces et la coordination continue. Le guide fournit des lignes directrices pour la gestion coordonnée des incidents, y compris la production et la consommation de données, la participation à l'échange d'information et la protection des données relatives aux incidents.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/Intelligence Preparation for the Battlefield-Battlespace.pdf" target="_blank">Intelligence Preparation of the Battlefield/Battlespace</a>
        </td>
        <td>
            Cette publication traite de la préparation du renseignement de l'espace de bataille (IPB) comme un élément essentiel du processus de prise de décisions et de planification militaire et de la façon dont l'IPB appuie la prise de décisions, ainsi que l'intégration des processus et des activités continues.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.lockheedmartin.com/content/dam/lockheed/data/corporate/documents/LM-White-Paper-Intel-Driven-Defense.pdf" target="_blank">Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains</a>
        </td>
        <td>
            La chaîne de destruction des intrusions présentée dans cet article offre une approche structurée pour l'analyse des intrusions, l'extraction des indicateurs et l'exécution d'actions défensives.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.isao.org" target="_blank">ISAO Standards Organization</a>
        </td>
        <td>
            Les ISAO Standards Organization est une organisation non gouvernementale créée le 1er octobre 2015. Sa mission est d'améliorer la position de la nation en matière de cybersécurité en définissant des normes et des lignes directrices pour un partage solide et efficace de l'information sur les risques, les incidents et les pratiques exemplaires en matière de cybersécurité.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/jp2_0.pdf" target="_blank">Joint Publication 2-0: Joint Intelligence</a>
        </td>
        <td>
            Cette publication de l'armée américaine constitue le noyau de la doctrine commune du renseignement et jette les bases pour intégrer pleinement les opérations, les plans et le renseignement dans une équipe cohésive. Les concepts présentés s'appliquent également au renseignement de menace (Cyber).
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://download.microsoft.com/download/8/0/1/801358EC-2A0A-4675-A2E7-96C2E7B93E73/Framework_for_Cybersecurity_Info_Sharing.pdf" target="_blank">Microsoft Research Paper</a>
        </td>
        <td>
            Un cadre pour le partage de l'information sur la cybersécurité et la réduction des risques. Un document d'aperçu de haut niveau par Microsoft.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/draft-dulaunoy-misp-core-format-00" target="_blank">MISP Core Format (draft)</a>
        </td>
        <td>
            Le présent document décrit MISP format de base utilisé pour échanger des indicateurs et des informations MISP (Malware Information and threat Sharing Platform) instances.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.necoma-project.eu/" target="_blank">NECOMA Project</a>
        </td>
        <td>
            Le projet de recherche Nippon-European Cyberdefense-Oriented Multilayer Threat Analysis (NECOMA) vise à améliorer la collecte et l'analyse de données sur les menaces afin de développer et de démontrer de nouveaux mécanismes de cyberdéfense.
            Dans le cadre du projet, plusieurs publications et projets logiciels ont été publiés.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/pyramidofpain.pdf" target="_blank">Pyramid of Pain</a>
        </td>
        <td>
            La pyramide de la douleur est une façon graphique d'exprimer la difficulté d'obtenir différents niveaux d'indicateurs et la quantité de ressources que les adversaires doivent dépenser lorsqu'ils sont obtenus par les défenseurs.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.amazon.com/Structured-Analytic-Techniques-Intelligence-Analysis/dp/1452241511" target="_blank">Structured Analytic Techniques For Intelligence Analysis</a>
        </td>
        <td>
            Ce livre contient des méthodes qui représentent les meilleures pratiques actuelles en matière de renseignement, d'application de la loi, de sécurité intérieure et d'analyse des affaires.
        </td>
    </tr>
    <tr>
        <td>
            <a href="./docs/mwr-threat-intelligence-whitepaper.pdf" target="_blank">Threat Intelligence: Collecting, Analysing, Evaluating</a>
        </td>
        <td>
            Le présent rapport du MWR InfoSecurity décrit clairement plusieurs types de renseignements sur les menaces, y compris les variations stratégiques, tactiques et opérationnelles. Il traite également des processus d'obtention, de collecte, d'analyse, de production et d'évaluation des renseignements sur les menaces. On y trouve aussi des gains rapides et un modèle de maturité pour chacun des types d'intelligence de menace définis par MWR InfoSecurity.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://aisel.aisnet.org/wi2017/track08/paper/3/" target="_blank">Threat Intelligence Sharing Platforms: An Exploratory Study of Software Vendors and Research Perspectives</a>
        </td>
        <td>
            Une étude systématique de 22 plates-formes de partage des renseignements sur les menaces (PSTI) a révélé huit constatations clés sur l'état actuel de l'utilisation des renseignements sur les menaces, sa définition et les PSTI.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.us-cert.gov/tlp" target="_blank">Traffic Light Protocol</a>
        </td>
        <td>
            Le Protocole sur les feux de circulation (PLV) est un ensemble de désignations utilisées pour s'assurer que les informations sensibles sont partagées avec le public approprié. Il utilise quatre couleurs pour indiquer différents degrés de sensibilité et les considérations de partage correspondantes à appliquer par le ou les destinataires.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pan-unit42.github.io/playbook_viewer/" target="_blank">Unit42 Playbook Viewer</a>
        </td> 
        <td>
            L'objectif du Playbook est d'organiser les outils, les techniques et les procédures qu'un adversaire utilise dans un format structuré, qui peut être partagé avec les autres, et construit sur. Les cadres utilisés pour structurer et partager les playbooks adverses sont ceux de MITRE ATT&CK Cadre et STIX 2.0
        </td>    
    </tr>
    <tr>
        <td>
            <a href="docs/sans-whos-using-cyberthreat-intelligence-and-how.pdf" target="_blank">Who's Using Cyberthreat Intelligence and How?</a>
        </td>
        <td>
            Un livre blanc de l'Institut SANS décrivant l'utilisation du renseignement relatif aux menaces, y compris une enquête effectuée.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.wombat-project.eu/" target="_blank">WOMBAT Project</a>
        </td>
        <td>
            Les WOMBAT project vise à fournir de nouveaux moyens de comprendre les menaces existantes et émergentes qui visent l'économie d'Internet et les citoyens du réseau. Pour atteindre cet objectif, la proposition comprend trois grands ensembles de travaux : (i) la collecte en temps réel d'un ensemble diversifié de données brutes liées à la sécurité, (ii) l'enrichissement de ces données au moyen de diverses techniques d'analyse, et (iii) l'identification et la compréhension des phénomènes examinés par les causes profondes.
        </td>
    </tr>
</table>



## Licence

Distribué sous licence [Apache License 2.0](LICENSE).
