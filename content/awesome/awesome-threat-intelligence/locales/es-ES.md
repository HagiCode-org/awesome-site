# awesome-threat-intelligence
Selección de recursos de calidad sobre inteligencia de amenazas

Definición concisa de inteligencia de amenazas: *conocimiento basado en pruebas que incluye contexto, mecanismos, indicadores, implicaciones y recomendaciones prácticas sobre una amenaza o peligro existente o emergente para los activos, y que puede servir para tomar decisiones sobre cómo responder a dicha amenaza o peligro*.

No dudes en [contribuir](CONTRIBUTING.md).

- [Fuentes](#sources)
- [Formatos](#formats)
- [Frameworks y plataformas](#frameworks-and-platforms)
- [Herramientas](#tools)
- [Investigación, normas y libros](#research)


## Fuentes

La mayoría de los recursos que aparecen a continuación ofrecen listas o API para obtener información, idealmente actualizada, sobre amenazas.
Algunas personas consideran que estas fuentes son inteligencia de amenazas, aunque hay opiniones distintas.
Para obtener verdadera inteligencia de amenazas hace falta cierto análisis específico del ámbito o del negocio.

<table>
    <tr>
        <td>
            <a href="https://www.abuseipdb.com/" target="_blank">AbuseIPDB</a>
        </td>
        <td>
            AbuseIPDB es un proyecto dedicado a ayudar a combatir la propagación de hackers, spammers y la actividad abusiva en Internet. Su misión es ayudar a que Web sea más segura proporcionando una lista negra central para webmasters, administradores de sistemas y otras partes interesadas para informar y encontrar direcciones IP que se han asociado con actividad maliciosa en línea.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://docs.google.com/spreadsheets/u/1/d/1H9_xaxQHpWaa4O_Son4Gx0YOIzlcBWMsdvePFX68EKU/pubhtml" target="_blank">APT Groups and Operations</a>
        </td>
        <td>
            Una hoja de cálculo que contiene información e inteligencia sobre grupos, operaciones y tácticas APT.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.binarydefense.com/banlist.txt" target="_blank">Binary Defense IP Banlist</a>
        </td>
        <td>
            Sistemas de Defensa binarios Artillería Inteligencia de amenazas y IP Banlist Feed.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.circl.lu/projects/bgpranking/" target="_blank">BGP Ranking</a>
        </td>
        <td>
            Ranking de ASN que tienen el contenido más malicioso.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intel.malwaretech.com/" target="_blank">Botnet Tracker</a>
        </td>
        <td>
            Rastrea varios botnets activos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.botvrij.eu/">BOTVRIJ.EU</a>
        </td>
        <td>
            Botvrij.eu proporciona diferentes conjuntos de COI de código abierto que puede utilizar en sus dispositivos de seguridad para detectar posibles actividades maliciosas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://danger.rulez.sk/index.php/bruteforceblocker/download/" target="_blank">BruteForceBlocker</a>
        </td>
        <td>
            BruteForceBlocker es un script perl que monitoriza los registros sshd de un servidor e identifica ataques de fuerza bruta, que luego utiliza para configurar automáticamente reglas de bloqueo de firewall y enviar esos IPs de vuelta al sitio del proyecto, <a href="http://danger.rulez.sk/projects/bruteforceblocker/blist.php">http://danger.rulez.sk/projects/bruteforceblocker/blist.php</a>.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://osint.bambenekconsulting.com/feeds/c2-ipmasterlist.txt" target="_blank">C&amp;C Tracker</a>
        </td>
        <td>
            Una alimentación de C conocida, activa y no sinkholed&amp;Dirección C IP, de Bambenek Consulting. Requiere licencia para uso comercial.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://certstream.calidog.io/" target="_blank">CertStream</a>
        </td>
        <td>
            Transparencia de registro de certificados en tiempo real. Ver certificados SSL como se publican en tiempo real.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.ccssforum.org/malware-certificates.php" target="_blank">CCSS Forum Malware Certificates</a>
        </td>
        <td>
            Lo siguiente es una lista de certificados digitales que han sido reportados por el foro como posiblemente asociados con malware a varias autoridades certificadoras. Esta información está destinada a ayudar a evitar que las empresas utilicen certificados digitales para agregar legitimidad al malware y fomentar la revocación rápida de dichos certificados.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://cinsscore.com/list/ci-badguys.txt" target="_blank">CI Army List</a>
        </td>
        <td>
        Un subconjunto del comercial <a href="http://cinsscore.com/">CINS Score</a> list, focused on poorly Rating IPs that are not currently present on other threatlists.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://s3-us-west-1.amazonaws.com/umbrella-static/index.html" target="_blank">Cisco Umbrella</a>
        </td>
        <td>
            Probable lista blanca de los primeros 1 millón de sitios resueltos por Cisco Umbrella (fue OpenDNS).
	</td>
    </tr>
    <tr>
        <td>
            <a href="https://cloudmersive.com/virus-api" target="_blank">Cloudmersive Virus Scan</a>
        </td>
        <td>
            Cloudmersive Virus Scan APIs escanea archivos, URLs y almacenamiento en la nube para virus. Aprovechan firmas continuamente actualizadas para millones de amenazas y avanzadas capacidades de escaneado de alto rendimiento. El servicio es gratuito, pero requiere que se registre para una cuenta para recuperar su clave de API personal.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.crowdsec.net/" target="_blank">CrowdSec Console</a>
        </td>
        <td>
            El CTI más grande de la multitud, actualizado en tiempo real, gracias a CrowdSec un software IDS/IPS de código abierto, libre y colaborativo. <a href="https://crowdsec.net" target="_blank">CrowdSec</a>  es capaz de analizar el comportamiento del visitante &quot; proporcionar una respuesta adaptada a todo tipo de ataques. Los usuarios pueden compartir sus alertas sobre amenazas con la comunidad y beneficiarse del efecto de red. Las direcciones IP se recogen de ataques reales y no provienen exclusivamente de una red de puntos de miel.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cybercure.ai/" target="_blank">Cyber Cure free intelligence feeds</a>
        </td>
        <td>
            Cyber Cure ofrece alimentación gratuita de inteligencia de amenazas cibernéticas con listas de direcciones IP que actualmente están infectadas y atacando en Internet. Hay lista de urls usados por malware y lista de archivos hash de malware conocido que se está propagando actualmente. CyberCure está usando sensores para recoger inteligencia con una tasa positiva muy baja. Información detallada <a href="https://docs.cybercure.ai" target="_blank">documentation</a> está disponible también.
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/community/ctix-feeds" target="_blank">Cyware Threat Intelligence Feeds</a>
        </td>
        <td>
            Los piensos de Inteligencia de Amenazas de Cyware le traen los valiosos datos de amenaza de una amplia gama de fuentes abiertas y confiables para ofrecer una corriente consolidada de inteligencia de amenaza valiosa y accionable. Nuestras fuentes de información de amenazas son totalmente compatibles con STIX 1.x y 2.0, dándole la información más reciente sobre los hashes maliciosos de malware, IPs y dominios descubiertas en todo el mundo en tiempo real.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://dataplane.org/" target="_blank">DataPlane.org</a>
        </td>
        <td>
          DataPlane.org es un recurso de información, alimentación y medición impulsado por la comunidad para operadores, por operadores. Proporcionamos un servicio confiable y confiable sin costo.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://focsec.com" target="_blank">Focsec.com</a>
        </td>
        <td>
          Focsec.com proporciona una API para detectar VPNs, Proxys, Bots y TOR solicitudes. Los datos siempre actualizados ayudan a detectar contactos sospechosos, fraude y abuso. Ejemplos de código se pueden encontrar en el <a href="https://docs.focsec.com" target="_blank">documentation</a>.
        </td>
   </tr>	
   <tr>
        <td>
            <a href="https://osint.digitalside.it/" target="_blank">DigitalSide Threat-Intel</a>
        </td>
        <td>
          Contiene conjuntos de indicadores Open Source Cyber Threat Intelligence, basados principalmente en análisis de malware y URLs comprometidas, IPs y dominios. El propósito de este proyecto es desarrollar y probar nuevas formas de cazar, analizar, recopilar y compartir los relevantes IoCs para ser utilizados por SOC/CSIRT/CERT/individuales con esfuerzo minimun. Los informes se comparten de tres maneras: <a href="https://osint.digitalside.it/Threat-Intel/stix2/" target="_blank">STIX2</a>, <a href="https://osint.digitalside.it/Threat-Intel/csv/" target="_blank">CSV</a> y <a href="https://osint.digitalside.it/Threat-Intel/digitalside-misp-feed/" target="_blank">MISP Feed</a>. Los informes se publican también en el <a href="https://github.com/davidonzo/Threat-Intel/" target="_blank">project's Git repository</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/martenson/disposable-email-domains">Disposable Email Domains</a>
        </td>
        <td>
            Una colección de dominios de correo electrónico anónimos o desechables comúnmente utilizados para servicios de spam/abuse.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://securitytrails.com/dns-trails">DNS Trails</a>
        </td>
        <td>
            Fuente de inteligencia gratuita para información DNS actual e histórica, información de la WHOIS, encontrar otros sitios web asociados con ciertos IPs, conocimientos y tecnologías de subdominio. Hay un <a href="https://securitytrails.com/">IP and domain intelligence API available</a> también. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feed.ellio.tech" target="_blank">ELLIO: IP Feed (community free version)</a>
        </td>
        <td>
            Una lista de amenazas de direcciones IP maliciosas conocidas anticipaba plantear amenazas potenciales a su red en un futuro cercano, conocidos escáneres benignos, y direcciones IP de actores con intención desconocida. Se proporciona un retraso de 24 horas para uso personal, no comercial, pero todavía proporciona una protección excepcional en comparación con otras listas/feeds de amenazas IP abiertas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/fwrules/" target="_blank">Emerging Threats Firewall Rules</a>
        </td>
        <td>
            Una colección de reglas para varios tipos de cortafuegos, incluyendo iptables, PF y PIX.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/blockrules/" target="_blank">Emerging Threats IDS Rules</a>
        </td>
        <td>
            Una colección de Snort y Suricata <i>reglas</i> archivos que se pueden utilizar para alertar o bloquear.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exonerator.torproject.org/" target="_blank">ExoneraTor</a>
        </td>
        <td>
            El ExoneraTor servicio mantiene una base de datos de direcciones IP que han sido parte de la red Tor. Responde a la pregunta de si hubo un relé Tor en una dirección IP dada en una fecha determinada.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.exploitalert.com/" target="_blank">Exploitalert</a>
        </td>
        <td>
            Lista de los exploits más recientes que se han publicado.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intercept.sh/threatlists/" target="_blank">FastIntercept</a>
        </td>
        <td>
	    Intercept Security acoge una serie de listas gratuitas de IP Reputation de su red global de puntos de miel.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feodotracker.abuse.ch/" target="_blank">ZeuS Tracker</a>
        </td>
        <td>
            El Feodo Tracker <a href="https://abuse.ch/" target="_blank">abuse.ch</a> rastrea el Feodo Trojan.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://iplists.firehol.org/" target="_blank">FireHOL IP Lists</a>
        </td>
        <td>
            400+ Public available IP Feeds analizado para documentar su evolución, geo-mapa, edad de IPs, política de retención, superposiciones. El sitio se centra en el delito cibernético (ataques, abuso, malware).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://fraudguard.io/" target="_blank">FraudGuard</a>
        </td>
        <td>
            FraudGuard es un servicio diseñado para proporcionar una manera fácil de validar el uso recogiendo y analizando continuamente el tráfico de Internet en tiempo real.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://greynoise.io/" target="_blank">GreyNoise</a>
        </td>
        <td>
            GreyNoise recopila y analiza datos sobre la actividad de escaneado en Internet. Recopila datos sobre escáneres benignos como Shodan.io, así como actores maliciosos como SSH y gusanos telnet. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://griffinguard.io/" target="_blank">GriffinGuard</a>
        </td>
        <td>
            GriffinGuard es una plataforma de ciberseguridad que ofrece inteligencia de amenazas en tiempo real analizando continuamente patrones globales de tráfico y explotación de Internet. Proporciona búsqueda gratuita de datos, y algunos gratis IP blocklists.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://honeydb.io/" target="_blank">HoneyDB</a>
        </td> 
        <td>
            HoneyDB proporciona datos en tiempo real de la actividad de las manchas de miel. Estos datos provienen de puntos de miel desplegados en Internet utilizando <a href="https://github.com/foospidy/HoneyPy" target="_blank">HoneyPy</a> Cariño. Además, HoneyDB proporciona acceso a la API a la actividad de puntos de miel recolectados, que también incluye datos agregados de varios alimentadores de Twitter de puntos de miel.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SupportIntelligence/Icewater" target="_blank">Icewater</a>
        </td>
        <td>
            12,805 reglas de Yara libre creadas por Project Icewater.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://infosec.cert-pa.it" target="_blank">Infosec - CERT-PA</a>
        </td>
        <td>
            Muestras de malware <a href="https://infosec.cert-pa.it/analyze/submission.html" target="_blank">collection and analysis</a>, <a href="https://infosec.cert-pa.it/analyze/statistics.html" target="_blank">blocklist service, <a href="https://infosec.cert-pa.it/cve.html">vulnerabilities database</a> y más. Creado y gestionado por CERT-PA.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://labs.inquest.net" target="_blank">InQuest Labs</a>
        </td>
        <td>
            Un portal de datos abierto, interactivo y impulsado por API para investigadores de seguridad. Busque un gran corpus de muestras de archivos, información de reputación agregada y COI extraídas de fuentes públicas. Agoment YARA desarrollo con herramientas para generar desencadenantes, tratar con hex mixto de casos y generar expresiones regulares compatibles con base64.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.iblocklist.com/lists" target="_blank">I-Blocklist</a>
        </td>
        <td>
            I-Blocklist mantiene varios tipos de listas que contienen direcciones IP pertenecientes a diversas categorías. Algunas de estas categorías principales incluyen países, ISP y organizaciones. Otras listas incluyen ataques web, TOR, spyware y proxies. Muchos son libres de usar, y están disponibles en varios formatos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ipasis.com" target="_blank">IPASIS</a>
        </td>
        <td>
            IPASIS es una API de detección de bots en tiempo real y prevención del fraude que combina inteligencia IP, detección proxy/VPN/Tor y validación de correo electrónico en una sola llamada de API. Cada solicitud devuelve un índice de confianza de interacción (0-100) con el tiempo de respuesta sub-20ms. El nivel gratuito incluye 1.000 solicitudes/día. <a href="https://ipasis.com/docs" target="_blank">API documentation</a> y a <a href="https://ipasis.com/scan" target="_blank">live scanner</a> están disponibles.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/stamparm/ipsum/master/ipsum.txt" target="_blank">IPsum</a>
        </td>
        <td>
            IPsum es un alimento de inteligencia de amenaza basado en 30+ diferentes listas disponibles públicamente de direcciones IP sospechosas y/o maliciosas. Todas las listas son recuperadas automáticamente y analizadas a diario (24h) y el resultado final es empujado a este repositorio. List is made of IP addresses together with a total number of (black)list occurrence (for each). Creado y gestionado por <a href="https://twitter.com/stamparm">Miroslav Stampar</a>.
        </td>
    </tr>
    <tr>
	<td>
            <a href="https://jamesbrine.com.au" target="_blank">James Brine Threat Intelligence Feeds</a>
        </td>
        <td>
		JamesBrine proporciona alimentaciones de inteligencia de amenazas diarias para direcciones IP maliciosas desde puntos de miel localizados internacionalmente en la nube y la infraestructura privada que abarcan una variedad de protocolos incluyendo SSH, FTP, RDP, GIT, SNMP y REDIS. Los COI del día anterior están disponibles en STIX2 , así como otros COI como URI sospechosos y dominios recién registrados que tienen una alta probabilidad de uso en campañas de phishing.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/datafeeds" target="_blank">Kaspersky Threat Data Feeds</a>
        </td>
        <td>
Actualizar e informar continuamente a su negocio o clientes sobre riesgos e implicaciones asociadas con amenazas cibernéticas. Los datos en tiempo real le ayudan a mitigar las amenazas más eficazmente y a defender contra los ataques incluso antes de que sean lanzados. Demo Data Feeds contienen conjuntos truncados de IoCs (hasta 1%) en comparación con los comerciales
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://majestic.com/reports/majestic-million" target="_blank">Majestic Million</a>
        </td>
        <td>
            Probable lista blanca de los primeros 1 millón de sitios web, clasificado por Majestic. Los sitios son ordenados por el número de subredes de referencia. Más sobre el ranking se puede encontrar en su <a href="https://blog.majestic.com/development/majestic-million-csv-daily/" target="_blank">blog</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maldatabase.com/" target="_blank">Maldatabase</a>
        </td>
        <td>
            Maldatabase está diseñado para ayudar a la ciencia de datos de malware y los feeds de inteligencia de amenaza. Los datos proporcionados contienen buena información sobre, entre otros campos, dominios contactados, lista de procesos ejecutados y archivos retirados por cada muestra. Estos alimentos le permiten mejorar sus herramientas de monitoreo y seguridad. Hay servicios gratuitos para investigadores y estudiantes de seguridad. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malpedia.caad.fkie.fraunhofer.de/" target="_blank">Malpedia</a>
        </td>
        <td>
El objetivo principal de Malpedia es proporcionar un recurso para la identificación rápida y el contexto accionable al investigar malware. La apertura a las contribuciones curadas garantizará un nivel de calidad responsable para fomentar una investigación significativa y reproducible. 
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://www.malshare.com/" target="_blank">MalShare.com</a>
        </td>
        <td>
            El Proyecto MalShare es un repositorio de malware público que proporciona a los investigadores acceso libre a las muestras.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.maltiverse.com/" target="_blank">Maltiverse</a>
        </td>
        <td>
            El Proyecto Maltiverse es una base de datos IoC grande y enriquecida donde es posible hacer consultas complejas, y agregaciones para investigar sobre campañas de malware y sus infraestructuras. También tiene un gran servicio de consulta a granel de IoC.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bazaar.abuse.ch/" target="_blank">MalwareBazaar</a>
        </td>
        <td>
            MalwareBazaar es un proyecto de abuse.ch con el objetivo de compartir muestras de malware con la comunidad infosec, proveedores de AV y proveedores de inteligencia de amenaza.
        </td>
    </tr>	
    <tr>
        <td>
            <a href="https://www.malwaredomainlist.com/" target="_blank">Malware Domain List</a>
        </td>
        <td>
            Una lista de dominios maliciosos que también realiza inversa lookups y listas de registrantes, centrados en phishing, troyanos y kits de explotación.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.malwarepatrol.net/" target="_blank">Malware Patrol</a>
        </td>
        <td>
            La Patrulla de Malware proporciona listas de bloques, alimentación de datos e inteligencia de amenazas a empresas de todos los tamaños. Debido a que nuestra especialidad es la inteligencia de la amenaza cibernética, todos nuestros recursos van a asegurarse de que sea de la más alta calidad posible. Creemos que un equipo de seguridad y sus herramientas son tan buenas como los datos utilizados. Esto significa que nuestros piensos no están llenos de indicadores raspados y no verificados. Valoramos la calidad sobre la cantidad. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malware-traffic-analysis.net/" target="_blank">Malware-Traffic-Analysis.net</a>
        </td>
        <td>
            Este blog se centra en el tráfico de red relacionado con infecciones de malware. Contiene ejercicios de análisis de tráfico, tutoriales, muestras de malware, archivos de pcap de tráfico de red malicioso, y publicaciones de blog técnico con observaciones.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.malwaredomains.com/" target="_blank">MalwareDomains.com</a>
        </td>
        <td>
            El proyecto DNS-BH crea y mantiene una lista de dominios que se sabe que se utilizan para propagar malware y spyware. Estos pueden utilizarse para la detección, así como para la prevención (bajokholing DNS requests).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opswat.com/developers/threat-intelligence-feed" target="_blank">MetaDefender Cloud</a>
        </td>
        <td>
            MetaDefender Cloud Threat Intelligence Feeds contiene nuevas firmas de malware, incluyendo MD5, SHA1, y SHA256. Estos nuevos hahes maliciosos han sido vistos por MetaDefender Cloud en las últimas 24 horas. Los piensos se actualizan diariamente con malware recién detectado y reportado para proporcionar inteligencia de amenaza accionable y oportuna.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.nothink.org">NoThink!</a>
        </td>
        <td>Direcciones IP bloqueadas de SNMP, SSH y Telnet recopiladas por los honeypots de Matteo Cantoni.</td>
    </tr>
    <tr>
        <td>
            <a href="https://services.normshield.com" target="_blank">NormShield Services</a>
        </td>
        <td>
            NormShield Services proporcionar miles de información de dominio (incluyendo información de quiénes) de los posibles ataques de phishing pueden provenir. También hay servicios de Breach y blacklist disponibles. Hay un registro gratuito para los servicios públicos para el monitoreo continuo.
        </td>
    </tr> 
    <tr>
        <td>
            <a href="https://novasense-threats.com" target="_blank">NovaSense Threats</a>
        </td>
        <td>
            NovaSense es el centro de inteligencia de la amenaza Snapt, y proporciona información y herramientas para la protección de amenazas preventivas y la mitigación de ataques. NovaSense protege a los clientes de todos los tamaños de atacantes, abusos, botnets, ataques DoS y más.
        </td>
    </tr>     
    <tr>
        <td>
            <a href="https://www.obstracts.com/" target="_blank">Obstracts</a>
        </td>
        <td>
            El lector RSS para equipos de ciberseguridad. Convertir cualquier blog en inteligencia de amenaza estructurada y accionable.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://openphish.com/phishing_feeds.html" target="_blank">OpenPhish Feeds</a>
        </td>
        <td>
            OpenPhish recibe URLs de múltiples secuencias y los analiza utilizando sus algoritmos de detección de phishing patentados. Hay ofertas gratuitas y comerciales disponibles.
        </td>
    </tr>
        <tr>
        <td>
            <a href="https://feed.seguranca-informatica.pt/index.php" target="_blank">0xSI_f33d</a>
        </td>
        <td>
            Servicio gratuito para detectar dominios de phishing possbible y malware, IPs en lista negra dentro del ciberespacio portugués.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.phishtank.com/developer_info.php" target="_blank">PhishTank</a>
        </td>
        <td>
            PhishTank ofrece una lista de direcciones URL sospechosas de phishing. Sus datos provienen de informes humanos, pero también ingieren alimentos externos cuando sea posible. Es un servicio gratuito, pero el registro de una clave de API es a veces necesario.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.celerium.com/pickupstix" target="_blank">PickupSTIX</a>
        </td>
        <td>
            PickupSTIX es un alimento de inteligencia de amenazas cibernéticas libre, de código abierto y no comercializada. Actualmente, PickupSTIX utiliza tres alimentaciones públicas y distribuye alrededor de 100 nuevas piezas de inteligencia cada día. PickupSTIX traduce los diferentes feeds en STIX, que pueden comunicarse con cualquier TAXII servidor. Los datos son libres de usar y es una gran manera de empezar a utilizar la inteligencia de amenazas cibernéticas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://qfeeds.com" target="_blank">Q-Feeds Threat Intelligence</a>
        </td>
        <td>
            Q-Feeds es una empresa de ciberseguridad que reúne datos de OSINT, investigación patentada, y fuentes de inteligencia de amenazas comerciales para ofrecer una solución integral y altamente factible. Su Portal de Inteligencia de Amenazas (TIP) facilita a las organizaciones acceder y gestionar estos datos en tiempo real. Al integrarse con firewalls, SIEMs y otras plataformas de seguridad, Q-Feeds ayuda a las empresas a bloquear proactivamente las conexiones con IPs, dominios y URLs maliciosos conocidos, antes de que las amenazas puedan hacer daño. También tienen una versión comunitaria disponible bajo petición.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rescure.fruxlabs.com/" target="_blank">REScure Threat Intel Feed</a>
        </td>
        <td>
            [RES]cure is an independant threat intelligence project performed by the Fruxlabs Crack Team to enhance their understanding of the underlying architecture of distributed systems, the nature of threat intelligence and how to effectively collect, store, consume and distribution threat intelligence. Las semillas se generan cada 6 horas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rstcloud.net/" target="_blank">RST Cloud Threat Intel Feed</a>
        </td>
        <td>
            Indicadores Agregados de Compromiso recogidos y cruzados de múltiples fuentes abiertas y apoyadas por la comunidad, enriquecidos y clasificados usando nuestra plataforma de inteligencia.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://report.cs.rutgers.edu/mrtg/drop/dropstat.cgi?start=-86400">Rutgers Blacklisted IPs</a>
        </td>
        <td>Lista de direcciones IP de atacantes de fuerza bruta por SSH, creada a partir de la combinación de IP observadas localmente y de IP registradas hace dos horas en badip.com y blocklist.de.</td>
    </tr>
    <tr>
        <td>
            <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS Suspicious Domains</a>
        </td>
        <td>
            Las listas de amenazas de dominios sospechosos por <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS</a> rastrea dominios sospechosos. Ofrece 3 listas clasificadas como <a href="https://isc.sans.edu/feeds/suspiciousdomains_High.txt" target="_blank">high</a>, <a href="https://isc.sans.edu/feeds/suspiciousdomains_Medium.txt" target="_blank">medium</a> o <a href="https://isc.sans.edu/feeds/suspiciousdomains_Low.txt" target="_blank">low</a> sensibilidad, donde la lista de alta sensibilidad tiene menos falsos positivos, mientras que la lista de baja sensibilidad con más falsos positivos. También hay un <a href="https://isc.sans.edu/feeds/suspiciousdomains_whitelist_approved.txt" target="_blank">approved whitelist</a> de dominios.<br/>
            Por último, se sugiere <a href="https://isc.sans.edu/block.txt" target="_blank">IP blocklist</a> desde <a href="https://dshield.org">DShield</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/securityscorecard/SSC-Threat-Intel-IoCs" target="_blank">SecurityScorecard IoCs</a>
        </td>
        <td>
            Acceso público IoCs de blogs técnicos posts e informes de SecurityScorecard.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.stixify.com/" target="_blank">Stixify</a>
        </td>
        <td>
            Tu analista de inteligencia de amenaza automatizada. Extraiga la inteligencia legible de la máquina de datos no estructurados.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/signature-base" target="_blank">signature-base</a>
        </td>
        <td>
            Una base de datos de firmas utilizada en otras herramientas por Neo23x0.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.spamhaus.org/" target="_blank">The Spamhaus project</a>
        </td>
        <td>
            El proyecto Spamhaus contiene múltiples amenazas asociadas con el spam y la actividad de malware.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.sophos.com/intelix" target="_blank">SophosLabs Intelix</a>
        </td>
        <td>
            SophosLabs Intelix es la plataforma de inteligencia de amenaza que potencia los productos y socios de Sophos. Puede acceder a la inteligencia basada en hash de archivo, url etc. así como presentar muestras para análisis. A través de REST API puedes agregar fácilmente y rápidamente esta amenaza de inteligencia a tus sistemas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://spur.us" target="_blank">Spur</a>
        </td>
        <td>
            Spur proporciona herramientas y datos para detectar VPNs, Proxies Residenciales y Bots. Plan gratuito permite a los usuarios lookup un IP y obtener su clasificación, proveedor VPN, geolocalizaciones populares detrás de la IP, y un contexto más útil.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://sslbl.abuse.ch/" target="_blank">SSL Blacklist</a>
        </td>
        <td>
            SSL Blacklist (SSLBL) es un proyecto mantenido por abuse.ch. El objetivo es proporcionar una lista de certificados SSL "malos" identificados por abuse.ch para estar asociado con actividades de malware o botnet. SSLBL se basa en las huellas dactilares SHA1 de certificados SSL maliciosos y ofrece varias listas negras
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://statvoo.com/dl/top-1million-sites.csv.zip" target="_blank">Statvoo Top 1 Million Sites</a>
        </td>
        <td>
            Probable lista blanca de los primeros 1 millón de sitios web, según Statvoo.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://strongarm.io" target="_blank">Strongarm, by Percipient Networks</a>
        </td>
        <td>
            Strongarm es un agujero negro DNS que toma acción en indicadores de compromiso bloqueando el comando y control de malware. Strongarm agrega los alimentadores de indicador gratuitos, se integra con alimentaciones comerciales, utiliza los alimentadores IOC de Percipient, y opera los soluciones y API de DNS para que usted pueda utilizar para proteger su red y negocio. Strongarm es gratuito para uso personal.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.siemrules.com" target="_blank">SIEM Rules</a>
        </td>
        <td>
            Tu base de datos de ingeniería de detección. Ver, modificar y desplegar SIEM rules para caza de amenazas y detección.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.talosintelligence.com/" target="_blank">Talos</a>
        </td>
        <td>
	    Cisco Talos Intelligence Group es uno de los mayores equipos de inteligencia de amenazas comerciales del mundo, compuestos por investigadores de clase mundial, analistas e ingenieros. Estos equipos cuentan con el apoyo de sistemas de telemetría sin rival y sofisticados para crear una inteligencia de amenaza precisa, rápida y accionable para clientes, productos y servicios de Cisco. Talos defiende a los clientes de Cisco contra amenazas conocidas y emergentes, descubre nuevas vulnerabilidades en el software común, e interviene amenazas en la naturaleza antes de que puedan dañar aún más el Internet en general. Talos mantiene los conjuntos oficiales de reglas de Snort.org, ClamAV y SpamCop, además de lanzar muchas herramientas de investigación y análisis de código abierto. Talos proporciona una interfaz de usuario web fácil de usar <a href="https://www.talosintelligence.com/reputation">observable's reputation</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfeeds.io" target="_blank">threatfeeds.io</a>
        </td>
        <td>
            threatfeeds.io listas de fuentes y fuentes de información de amenazas libres y de código abierto y proporciona enlaces de descarga directa y resúmenes en vivo.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfox.abuse.ch/" target="_blank">threatfox.abuse.ch</a>
        </td>
        <td>
            ThreatFox es una plataforma libre desde abuse.ch con el objetivo de compartir indicadores de compromiso (IOCs) asociados con malware con la comunidad infosec, proveedores de AV y proveedores de inteligencia de amenaza.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatconnect.com/blog/ingest-technical-blogs-reports/" target="_blank">Technical Blogs and Reports, by ThreatConnect</a>
        </td>
        <td>
            Esta fuente está siendo poblada con el contenido de más de 90 fuentes abiertas, blogs de seguridad. COI (OCI)<a href="https://en.wikipedia.org/wiki/Indicator_of_compromise" target="_blank">Indicators of Compromise</a>) son analizados fuera de cada blog y el contenido del blog se formatea en marcado.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatjammer.com" target="_blank">Threat Jammer</a>
        </td>
        <td>
            Threat Jammer es un servicio REST API que permite a los desarrolladores, ingenieros de seguridad y otros profesionales de TI acceder a datos de inteligencia de amenazas de alta calidad de una variedad de fuentes e integrarlos en sus aplicaciones con el único propósito de detectar y bloquear la actividad maliciosa.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatminer.org/" target="_blank">ThreatMiner</a>
        </td>
        <td>
            ThreatMiner ha sido creado para los analistas libres de la recopilación de datos y para proporcionarles un portal en el que puedan llevar a cabo sus tareas, desde la lectura de informes hasta el pivote y el enriquecimiento de datos.
            El énfasis ThreatMiner no se trata sólo de indicadores de compromiso (IoC), sino también de proporcionar a los analistas información contextual relacionada con el IoC que están mirando.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/WSTNPHX/scripts-n-tools/master/malware-email-addresses.txt">WSTNPHX Malware Email Addresses</a>
        </td>
        <td>Dirección de correo electrónico utilizadas por el malware recogido por VVestron Phoronix (WSTNPHX)</td>
    </tr>
    <tr>
        <td>
            <a href="https://portal.underattack.today/" target="_blank">UnderAttack.today</a>
        </td>
        <td>UnderAttack es una plataforma de inteligencia gratuita, comparte IPs e información sobre eventos y ataques sospechosos. La inscripción es gratuita.</td>
    </tr>
    <tr>
        <td>
            <a href="https://urlhaus.abuse.ch">URLhaus</a>
        </td>
        <td>URLhaus es un proyecto de abuse.ch con el objetivo de compartir URLs maliciosas que se están utilizando para la distribución de malware.</td>
    </tr>
    <tr>
        <td>
            <a href="https://virusshare.com/" target="_blank">VirusShare</a>
        </td>
        <td>
            VirusShare.com es un repositorio de muestras de malware para proporcionar investigadores de seguridad, respuesta a incidentes, analistas forenses, y el acceso sumamente curioso a muestras de código malicioso. El acceso al sitio se concede sólo por invitación.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://vuldb.com/?actor" target="_blank">VulDB CTI</a>
        </td>
        <td>
            VulDB es una base de datos de vulnerabilidad que asocia las actividades de los actores y ataca detalles con vulnerabilidades. El enfoque predictivo ayuda a determinar las actividades emergentes de investigación y ataque de actores maliciosos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yara-Rules/rules" target="_blank">Yara-Rules</a>
        </td>
        <td>
            Un repositorio de código abierto con diferentes firmas de Yara que se compilan, clasifican y mantienen al día como sea posible.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://IOCFeed.mrlooquer.com/" target="_blank">1st Dual Stack Threat Feed by MrLooquer</a>
        </td>
        <td>
Mrlooquer ha creado la primera amenaza de alimentación centrada en sistemas con doble pila. Puesto que el protocolo IPv6 ha comenzado a formar parte de las comunicaciones de malware y fraude, es necesario detectar y mitigar las amenazas en ambos protocolos (IPv4 y IPv6).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.validin.com/">Validin DNS Database</a>
        </td>
        <td>
            Fuente de inteligencia gratuita para información DNS actual e histórica, encontrando otros sitios web asociados con ciertos IPs, y conocimiento de subdominio Hay un <a href="https://app.validin.com/docs">free API for IP and domain intelligence</a> también. 
        </td>
    </tr>
</table>

## Formatos

Formatos estandarizados para compartir inteligencia de amenazas (principalmente IOC).

<table>
    <tr>
        <td>
            <a href="https://capec.mitre.org/" target="_blank">CAPEC</a>
        </td>
        <td>
            Enumeración y clasificación del patrón común de ataque (CAPEC) es un diccionario integral y taxonomía de clasificación de ataques conocidos que pueden ser utilizados por analistas, desarrolladores, testadores, y educadores para promover el entendimiento comunitario y mejorar las defensas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cyboxproject.github.io/" target="_blank">CybOX</a>
        </td>
        <td>
            La eXpresión Cyber Observable (EXpresión Cibernética)CybOX) el lenguaje proporciona una estructura común para representar los observables cibernéticos a través y entre las áreas operacionales de la seguridad cibernética empresarial que mejora la consistencia, eficiencia e interoperabilidad de los instrumentos y procesos desplegados, así como aumenta la conciencia general de la situación permitiendo el potencial de compartir, mapear, detectar y analizar las heurísticas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc5070" target="_blank">IODEF (RFC5070)</a>
        </td>
        <td>
            The Incident Object Description Exchange Format (IODEF) define a data representation that provides a framework for sharing information commonly exchanged by Computer Security Incident Response Teams (CSIRTs) about computer security incidents.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc4765" target="_blank">IDMEF (RFC4765)</a>
        </td>
        <td>
            <i>Experimental</i> - El propósito del Formato de Intercambio de Mensajes de Detección de Intrusión (IDMEF) es definir formatos de datos y procedimientos de intercambio para compartir información de interés a sistemas de detección y respuesta de intrusiones y a los sistemas de gestión que puedan necesitar interactuar con ellos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maecproject.github.io/" target="_blank">MAEC</a>
        </td>
        <td>
            La Enumeración y Caracterización del Atributo MalwareMAEC) proyectos está dirigido a crear y proporcionar un lenguaje estandarizado para compartir información estructurada sobre malware basado en atributos tales como comportamientos, artefactos y patrones de ataque.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=openc2" target="_blank">OpenC2</a>
        </td>
        <td>
            OEAIS Comando Abierto y Control (OpenC)2) Comité Técnico. El OpenC2 TC basará sus esfuerzos en artefactos generados por el OpenC2 Foro. Antes de la creación de este TC y specification, the OpenC2 El Foro era una comunidad de interesados en la seguridad cibernética facilitada por la Agencia Nacional de Seguridad (NSA). El OpenC2 TC was chartered to draft documents, specifications, lexicons or other artifacts to fulfil the needs of ciber security command and control in a standardized manner.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://oasis-open.github.io/cti-documentation/" target="_blank">STIX 2.0</a>
        </td>
        <td>
            El lenguaje de la eXpresión de información sobre amenazas estructuradas (STIX) es un constructo estandarizado para representar información sobre amenazas cibernéticas. El STIX Language tiene la intención de transmitir toda la gama de información potencial de amenazas cibernéticas y se esfuerza por ser plenamente expresivo, flexible, extensible y automatizado. STIX no sólo permite campos agnósticos de herramientas, sino que también proporciona los llamados <i>Mecanismos de prueba</i> que proporcionan los medios para incrustar el lenguaje de herramientascific elements, including OpenIOCYara y Snort. STIX 1.x ha sido archivado <a href="https://stixproject.github.io/" target="_blank">here</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://taxiiproject.github.io/" target="_blank">TAXII</a>
        </td>
        <td>
            El EXchange Automatizado Fideicomiso de Información de Indicadores (TAXII) estándar define un conjunto de servicios e intercambios de mensajes que, cuando se implementa, permiten compartir información de amenazas cibernéticas a través de las fronteras de organización y producto/servicio. TAXII define conceptos, protocolos e intercambios de mensajes para intercambiar información sobre amenazas cibernéticas para la detección, prevención y mitigación de amenazas cibernéticas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://veriscommunity.net/index.html" target="_blank">VERIS</a>
        </td>
        <td>
            El Vocabulario para la grabación de eventos y la participación de incidentes (VERIS) es un conjunto de métricas diseñadas para proporcionar un lenguaje común para describir los incidentes de seguridad de una manera estructurada y repetible. VERIS es una respuesta a uno de los desafíos más críticos y persistentes en la industria de la seguridad - una falta de información de calidad. Además de proporcionar un formato estructurado, VERIS también recopila datos de la comunidad para informar sobre infracciones en el Informe de Investigación de Violación de Datos de Verizon (Informe de Investigación de Violación de Datos de Verizon)<a target="_blank" href="http://www.verizonenterprise.com/verizon-insights-lab/dbir/">DBIR</a>) y publica esta base de datos en línea en un GitHub <a target="_blank" href="https://github.com/vz-risk/VCDB">repository.org</a>.
        </td>
    </tr>
</table>

## Frameworks y plataformas

Frameworks, plataformas y servicios para recopilar, analizar, crear y compartir inteligencia de amenazas.

<table>
    <tr>
        <td>
            <a href="https://github.com/abusesa/abusehelper" target="_blank">AbuseHelper</a>
        </td>
        <td>
            AbuseHelper es un marco de código abierto para recibir y redistribuir alimentos de abuso e información sobre amenazas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://abuse.io/" target="_blank">AbuseIO</a>
        </td>
        <td>
            Un conjunto de herramientas para recibir, procesar, correlacionar y notificar a los usuarios finales sobre informes de abuso, con lo que se consumen alimentos de inteligencia de amenazas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cisa.gov/ais" target="_blank">AIS</a>
        </td>
        <td>
            The Cybersecurity and Infrastructure Security Agency (CISA) free Automated Indicator Sharing (AIS) la capacidad permite el intercambio de indicadores de amenazas cibernéticas entre el Gobierno Federal y el sector privado a velocidad de máquina. Los indicadores de amenazas son piezas de información como direcciones IP maliciosas o la dirección del remitente de un correo electrónico de phishing (aunque también pueden ser mucho más complicados).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/csirtgadgets/bearded-avenger" target="_blank">Bearded Avenger</a>
        </td>
        <td>
            La manera más rápida de consumir inteligencia de amenazas. Sucesor para CIF.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.blueliv.com/" target="_blank">Blueliv Threat Exchange Network</a>
        </td>
        <td>
            Permite a los participantes compartir indicadores de amenaza con la comunidad.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Cortex" target="_blank">Cortex</a>
        </td>
        <td>
            Cortex permite que los observables, como IPs, direcciones de correo electrónico, URLs, nombres de dominio, archivos o hashes, sean analizados uno por uno o en modo a granel utilizando una única interfaz web. La interfaz web actúa como frontend para numerosos analizadores, eliminando la necesidad de integrarlos durante el análisis. Los analistas también pueden utilizar la API Cortex REST para automatizar partes de su análisis.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://crits.github.io/" target="_blank">CRITS</a>
        </td>
        <td>
            CRITS es una plataforma que proporciona a los analistas los medios para realizar investigaciones colaborativas en malware y amenazas. Se conecta a un repositorio de datos de inteligencia centralizado, pero también se puede utilizar como una instancia privada.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://csirtgadgets.org/collective-intelligence-framework" target="_blank">CIF</a>
        </td>
        <td>
            El Marco de Inteligencia ColectivaCIF) permite combinar información conocida sobre amenazas maliciosas de muchas fuentes y utilizar esa información para IR, detección y mitigación. Código disponible <a href="https://github.com/csirtgadgets/massive-octo-spice" target="_blank">GitHub</a>.
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/ctix-stix-taxii-cyber-threat-intelligence-exchange" target="_blank">CTIX</a>
        </td>
        <td>
            CTIX es una plataforma inteligente de inteligencia de amenaza para el cliente (TIP) para la ingestión, el enriquecimiento, el análisis y el intercambio bidireccional de datos de amenazas dentro de su red de confianza.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.eclecticiq.com/platform" target="_blank">EclecticIQ Platform</a>
        </td>
        <td>
            EclecticIQ Platform es un STIX/TAXII based Threat Intelligence Platform (TIP) that empowers threat anals to perform faster, better, and deep investigations while dissemination intelligence at machine-speed.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.enisa.europa.eu/topics/csirt-cert-services/community-projects/incident-handling-automation" target="_blank">IntelMQ</a>
        </td>
        <td>
            IntelMQ es una solución para CERTs para recopilar y procesar alimentos de seguridad, pastas, tweets usando un protocolo de cola de mensajes. Es una iniciativa impulsada por la comunidad llamada IHAP (Incident Handling Automation Project) que fue diseñada conceptualmente por los CERT europeos durante varios eventos de InfoSec. Su objetivo principal es dar a los respuestantes de incidentes una manera fácil de recopilar &quot; inteligencia de amenazas de proceso, mejorando así los procesos de manejo de incidentes de CERT.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/intelowlproject/IntelOwl/" target="_blank">IntelOwl</a>
        </td>
        <td>
            Intel Owl es una solución OSINT para obtener datos de inteligencia de amenazas sobre un specific file, un IP o un dominio de una sola API a escala. Intel Owl está compuesto por analizadores que se pueden ejecutar para recuperar datos de fuentes externas (como VirusTotal o AbuseIPDB) o generar información de analizadores internos (como Yara o Oletools). Puede integrarse fácilmente en su pila de herramientas de seguridad (<a href="https://github.com/intelowlproject/pyintelowl" target="_blank">pyintelowl</a>) para automatizar trabajos comunes generalmente realizados, por ejemplo, por analistas SOC manualmente.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.kaspersky.com/enterprise-security/threat-intelligence" target="_blank">Kaspersky Threat Intelligence Portal</a>
        </td>
        <td>
            Un sitio web que proporciona una base de conocimiento que describe amenazas cibernéticas, objetos legítimos y sus relaciones, reunidos en un solo servicio web. El Portal de Inteligencia de Amenazas de Kaspersky Lab le proporciona un único punto de entrada a cuatro servicios complementarios: Kaspersky Threat Data Feeds, Threat Intelligence Reporting, Kaspersky Threat Intelligence Lookup y Kaspersky Research Sandbox, todos disponibles en formatos legibles y legibles por máquina.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/malstrom" target="_blank">Malstrom</a>
        </td>
        <td>
            Malstrom pretende ser un repositorio para el seguimiento de amenazas y artefactos forenses, pero también almacena reglas y notas para la investigación de YARA. Nota: Github proyecto ha sido archivado (no se han aceptado nuevas contribuciones).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stratosphereips/Manati" target="_blank">ManaTI</a>
        </td>
        <td>
            El ManaTI proyecto ayuda a analista de amenazas empleando técnicas de aprendizaje automático que encuentran nuevas relaciones e inferencias automáticamente.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://django-mantis.readthedocs.io/en/latest/" target="_blank">MANTIS</a>
        </td>
        <td>
            The Model-based Analysis of Threat Intelligence Sources (MANTIS) Cyber Threat Intelligence Management Framework apoya la gestión de la inteligencia de amenazas cibernéticas expresada en varios idiomas estándar, como STIX y STIX CybOX. *no* listo para la producción a gran escala, sin embargo.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cert-se/megatron-java" target="_blank">Megatron</a>
        </td>
        <td>
            Megatron es una herramienta implementada por CERT-SE que recopila y analiza mal IPs, se puede utilizar para calcular estadísticas, convertir y analizar archivos de registro y en el manejo de incidentes de abuso.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/PaloAltoNetworks/minemeld/wiki" target="_blank">MineMeld</a>
        </td>
        <td>
            Un marco extensible de procesamiento de Inteligencia de Amenazas creó Redes Palo Alto.
            Puede utilizarse para manipular listas de indicadores y transformarlas y/o agregarlas para su consumo por infraestructura de ejecución de terceros.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.misp-project.org/" target="_blank">MISP</a>
        </td>
        <td>
            The Malware Information Sharing Platform (La plataforma de intercambio de información sobre el malware)MISP) es una solución de software de código abierto para recoger, almacenar, distribuir y compartir indicadores de seguridad cibernética y análisis de malware.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CERT-Polska/n6" target="_blank">n6</a>
        </td>
        <td>
            n6 (Network Security Incident eXchange) es un sistema para recopilar, gestionar y distribuir información de seguridad a gran escala. La distribución se realiza a través de una sencilla API REST y una interfaz web que los usuarios autorizados pueden utilizar para recibir diversos tipos de datos, en particular información sobre amenazas e incidentes en sus redes. It is developed by <a href="https://www.cert.pl/en/" target="_blank">CERT Polska</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ocsf.io/" target="_blank">Open Cybersecurity Schema Framework (OCSF)</a>
        </td>
        <td>
            El marco Open Cybersecurity Schema Framework es un proyecto de código abierto, que ofrece un marco extensible para el desarrollo de esquemas, junto con un esquema de seguridad central proveedor-agnóstico. Los vendedores y otros productores de datos pueden adoptar y ampliar el esquema para su specifdominios ic. Los ingenieros de datos pueden mapear esquemas diferentes para ayudar a los equipos de seguridad a simplificar la ingestión y normalización de datos, de manera que los científicos y analistas de datos puedan trabajar con un lenguaje común para la detección e investigación de amenazas. El objetivo es proporcionar un estándar abierto, adoptado en cualquier entorno, aplicación o solución, complementando al mismo tiempo las normas y procesos de seguridad existentes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opencti.io/en/" target="_blank">OpenCTI</a>
        </td>
        <td>
            OpenCTI, la plataforma Open Cyber Threat Intelligence, permite a las organizaciones gestionar sus conocimientos y observables de inteligencia de amenazas cibernéticas. Su objetivo es estructurar, almacenar, organizar y visualizar información técnica y no técnica sobre amenazas cibernéticas. Los datos se estructuran alrededor de un esquema de conocimiento basado en el STIX2 normas. OpenCTI se puede integrar con otras herramientas y plataformas, incluyendo MISP, TheHive y MITRE ATT&CKA.o.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware.html" target="_blank">OpenIOC</a>
        </td>
        <td>
            OpenIOC es un marco abierto para compartir inteligencia de amenazas. Está diseñado para intercambiar información sobre amenazas tanto interna como externamente en un formato manejable por máquina.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/OpenTAXII" target="_blank">OpenTAXII</a>
        </td>
        <td>
            OpenTAXII es una aplicación robusta de Python TAXII Servicios que ofrecen un conjunto de características ricas y una API Pythonic amigable construida sobre una aplicación bien diseñada.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Ptr32Void/OSTrICa" target="_blank">OSTrICa</a>
        </td>
        <td>
            Un marco orientado al plugin de código abierto para recopilar y visualizar información de Inteligencia de Amenaza.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://otx.alienvault.com" target="_blank">OTX - Open Threat Exchange</a>
        </td>
        <td>
            AlienVault Open Threat Exchange (OTX) proporciona acceso abierto a una comunidad global de investigadores de amenazas y profesionales de seguridad. Proporciona datos de amenazas generados por la comunidad, permite la investigación colaborativa y automatiza el proceso de actualización de su infraestructura de seguridad con datos de amenazas de cualquier fuente.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Lookingglass/opentpx/" target="_blank">Open Threat Partner eXchange</a>
        </td>
        <td>
            El Open Threat Partner eXchange (OpenTPX) consiste en un formato de código abierto y herramientas para intercambiar datos de inteligencia de amenazas legibles por máquina y operaciones de seguridad de red. Es un formato basado en JSON que permite compartir datos entre sistemas conectados.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.riskiq.com/" target="_blank">PassiveTotal</a>
        </td>
        <td>
            El PassiveTotal plataforma ofrecida por RiskIQ es una plataforma de análisis de amenazas que proporciona a los analistas la mayor cantidad de datos posible para prevenir ataques antes de que ocurran. Se ofrecen varios tipos de soluciones, así como integraciones (API) con otros sistemas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pulsedive.com/" target="_blank">Pulsedive</a>
        </td>
        <td>
            Pulsedive es una plataforma de inteligencia de amenazas comunitarias libre que consume alimentos de código abierto, enriquece a los COI y los ejecuta a través de un algoritmo que muestra riesgos para mejorar la calidad de los datos. Permite a los usuarios presentar, buscar, correlacionar y actualizar COI; enumera "factores de riesgo" por qué los COI son mayores riesgos; y proporciona una visión de alto nivel de las amenazas y la actividad de amenaza.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.recordedfuture.com/" target="_blank">Recorded Future</a>
        </td>
        <td>
            Recorded Future es un producto SaaS premium que unifica automáticamente la inteligencia de amenaza de fuentes abiertas, cerradas y técnicas en una sola solución. Su tecnología utiliza el procesamiento del lenguaje natural (NLP) y el aprendizaje automático para ofrecer esa inteligencia de amenaza en tiempo real, haciendo de Recorded Future una opción popular para los equipos de seguridad de TI.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Netflix/Scumblr" target="_blank">Scumblr</a>
        </td>
        <td>
            Scumblr es una aplicación web que permite realizar sincronizaciones periódicas de fuentes de datos (como Github repositorios y URLs) y realización de análisis (como análisis estático, cheques dinámicos y colección de metadatos) sobre los resultados identificados.
            Scumblr le ayuda a simplificar la seguridad proactiva a través de un marco de automatización inteligente para ayudarle a identificar, seguir y resolver problemas de seguridad más rápido.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.anomali.com/platform/staxx" target="_blank">STAXX (Anomali)</a>
        </td>
        <td>
            Anomali STAXXTM le ofrece una forma gratuita y fácil de suscribirse a cualquier STIX/TAXII Alimento. Simplemente descarga el cliente STAXX, configura tus fuentes de datos y STAXX se encargará del resto.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://stoq.punchcyber.com/" target="_blank">stoQ</a>
        </td>
        <td>
            stoQ es un marco que permite a los analistas cibernéticos organizar y automatizar tareas repetitivas y basadas en datos. Cuenta con plugins para muchos otros sistemas con los que interactuar.
            Un caso de uso es la extracción de COI de documentos, un ejemplo de los cuales se muestra <a href="https://stoq-framework.blogspot.nl/2016/04/operationalizing-indicators.html" target="_blank">here</a>, pero también se puede utilizar para deobfuscationg y decodificación de contenido y escaneado automatizado con YARA, por ejemplo.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/tripwire/tardis" target="_blank">TARDIS</a>
        </td>
        <td>
            The Threat Analysis, Reconnnaissance, and Data Intelligence System (TARDIS) es un marco de código abierto para realizar búsquedas históricas utilizando firmas de ataque.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatconnect.com/" target="_blank">ThreatConnect</a>
        </td>
        <td>
            ThreatConnect es una plataforma con capacidad de inteligencia de amenaza, análisis y orquestación. Está diseñado para ayudarle a recopilar datos, producir inteligencia, compartirlo con otros, y tomar medidas en él.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatcrowd.org/" target="_blank">ThreatCrowd</a>
        </td>
        <td>
            ThreatCrowd es un sistema para encontrar e investigar artefactos relacionados con amenazas cibernéticas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatpipes.com" target="_blank">ThreatPipes</a>
        </td>
        <td>
            Quedaos dos pasos por delante de vuestros adversarios. Consigue una imagen completa de cómo te explotarán.
            <br />
            ThreatPipes es un reconocimientoaissance herramienta que consulta automáticamente 100’s de fuentes de datos para reunir inteligencia en direcciones IP, nombres de dominio, direcciones de correo electrónico, nombres y más.
            <br />
            Simplemente golpeacify el objetivo que desea investigar, elegir qué módulos habilitar y luego ThreatPipes recopilará datos para crear una comprensión de todas las entidades y cómo se relacionan entre sí.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://developers.facebook.com/docs/threat-exchange/" target="_blank">ThreatExchange</a>
        </td>
        <td>
            Facebook creado ThreatExchange para que las organizaciones participantes puedan compartir datos de amenazas utilizando una API conveniente, estructurada y fácil de usar que proporciona controles de privacidad para permitir compartir con grupos deseados. Este proyecto todavía está en <b>beta</b>. Código de referencia se puede encontrar en <a href="https://github.com/facebook/ThreatExchange" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/typedb-osi/typedb-cti" target="_blank">TypeDB CTI</a>
        </td>
        <td>
		Datos de tipoDB - CTI es una plataforma de inteligencia de amenaza abierta para que las organizaciones puedan almacenar y gestionar sus conocimientos de inteligencia de amenazas cibernéticas (CTI). Permite a los profesionales de la información de amenazas reunir su información de CTI dispares en una base de datos y encontrar nuevas ideas sobre amenazas cibernéticas. Este repositorio proporciona un esquema basado en STIX2y contiene MITRE ATT&CK como un conjunto de datos de ejemplo para comenzar a explorar esta plataforma de inteligencia de amenazas. Más en esto <a href="https://blog.vaticle.com/introducing-a-knowledge-graph-for-cyber-threat-intelligence-with-typedb-bdb559a92d2a" target="_blank">blog post</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://beta.virusbay.io/" target="_blank">VirusBay</a>
        </td>
        <td>
            VirusBay es una plataforma de colaboración basada en web que conecta a profesionales del centro de operaciones de seguridad (SOC) con investigadores de malware relevantes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/brianwarehime/threatnote" target="_blank">threatnote.io</a>
        </td>
        <td>
            El nuevo y mejorado threatnote.io - Una herramienta para analistas y equipos de CTI para gestionar los requisitos de información, informes y procesos de CTI en una plataforma completa
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exchange.xforce.ibmcloud.com/" target="_blank">XFE - X-Force Exchange</a>
        </td>
        <td>
            El X-Force Exchange (XFE) de IBM XFE es un producto SaaS gratuito que puedes utilizar para buscar información de inteligencia de amenazas, recopilar tus hallazgos y compartir tus ideas con otros miembros de la comunidad XFE.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://yeti-platform.github.io/" target="_blank">Yeti</a>
        </td>
        <td>
            El repositorio de inteligencia de amenazas abierto, distribuido, automático y analista. Hecho por y para emergencias.
        </td>
    </tr>
</table>



## Herramientas

Herramientas de todo tipo para analizar, crear y editar inteligencia de amenazas, principalmente basadas en IOC.

<table>
    <tr>
        <td>
            <a href="https://github.com/jalewis/actortrackr" target="_blank">ActorTrackr</a>
        </td>
        <td>
            ActorTrackr es una aplicación web de código abierto para almacenar/buscar/enlazar datos relacionados con los actores. Las fuentes primarias son de usuarios y varios repositorios públicos. Fuente disponible <a href="https://github.com/jalewis/actortrackr" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/camp0/aiengine" target="_blank">AIEngine</a>
        </td>
        <td>
            AIEngine es un motor de inspección interactivo/programable de próxima generación Python/Ruby/Java/Lua con capacidades de aprendizaje sin ninguna intervención humana, funcionalidad NIDS(Network Intrusion Detection System), clasificación de dominios DNS, colector de red, red forense y muchos otros.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/referefref/aiocrioc" target="_blank">AIOCRIOC</a>
        </td>
        <td>
            Indicador de Reconocimiento de Carácteres Oculares de Inteligencia ArtificialAIOCRIOC) es una herramienta que combina el desguace web, las capacidades OCR de Tesseract y OpenAI compatible con LLM API como GPT-4 para analizar y extraer COI de informes y otros contenidos web, incluyendo imágenes integradas con datos contextuales.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://analyze.intezer.com" target="_blank">Analyze (Intezer)</a>
        </td>
        <td>
            Analyze es una plataforma de análisis de malware todo en uno que es capaz de realizar análisis de código estático, dinámico y genético en todos los tipos de archivos. Los usuarios pueden rastrear las familias de malware, extraer IOCs/MITRE TTPs y descargar firmas YARA. Hay una edición comunitaria para empezar de forma gratuita.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/1aN0rmus/TekDefense-Automater" target="_blank">Automater</a>
        </td>
        <td>
            Automater es una herramienta URL/Domain, IP Address, y Md5 Hash OSINT para facilitar el proceso de análisis para los analistas de intrusión.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/svdwi/BlueBox" target="_blank">BlueBox</a>
        </td>
        <td>
            BlueBox es una solución OSINT para obtener datos de inteligencia de amenaza sobre un specific file, un IP, un dominio o URL y analizarlos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://botscout.com/">BotScout</a>
        </td>
        <td>
            BotScout ayuda a prevenir scripts web automatizados, conocidos como "bots", de registrarse en foros, bases de datos contaminantes, difundir spam y abusar de formularios en sitios web.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/bro-intel-generator" target="_blank">bro-intel-generator</a>
        </td>
        <td>
            Script para generar archivos de información Bro de informes pdf o html.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/cabby" target="_blank">cabby</a>
        </td>
        <td>
            Una biblioteca Python simple para interactuar con TAXII servidores.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/cacador" target="_blank">cacador</a>
        </td>
        <td>
            Cacador es una herramienta escrita en Go para extraer indicadores comunes de compromiso de un bloque de texto.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/combine" target="_blank">Combine</a>
        </td>
        <td>
            Combine reúne Feeds de Inteligencia de Amenaza de fuentes disponibles públicamente.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CrowdStrike/CrowdFMS" target="_blank">CrowdFMS</a>
        </td>
        <td>
            CrowdFMS es un marco para automatizar la recogida y el procesamiento de muestras de VirusTotal, aprovechando el sistema de API privada.
            El marco descarga automáticamente muestras recientes, que activaron una alerta en el alimentario de notificación de los usuarios de YARA.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-transmute.org/" target="_blank">CTI-Transmute</a>
        </td>
        <td>
            CTI-Transmute es una herramienta para convertir los datos de Cyber Threat Intelligence (CTI) entre MISP y formatos STIX. Proporciona un conjunto de puntos finales de API que permiten la conversión automática de datos, facilitando la integración de diferentes plataformas de inteligencia de amenazas y flujos de trabajo. Fuente disponible <a href="https://github.com/MISP/cti-transmute" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cuckoosandbox/cuckoo" target="_blank">Cuckoo Sandbox</a>
        </td>
        <td>
            Cuckoo Sandbox es un sistema de análisis de malware dinámico automatizado. Es la caja de arena de análisis de malware de código abierto más conocida y es implementada frecuentemente por investigadores, equipos CERT/SOC y equipos de inteligencia de amenazas en todo el mundo. Para muchas organizaciones Cuckoo Sandbox proporciona una primera visión de las muestras potenciales de malware.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cybergordon.com/" target="_blank">CyberGordon</a>
        </td>
        <td>
            CyberGordon es un motor de búsqueda de inteligencia de amenaza. Apalanca 30+ fuentes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CylanceSPEAR/CyBot" target="_blank">CyBot</a>
        </td>
        <td>
            CyBot es una amenaza de chat de inteligencia. Puede realizar varios tipos de lookups ofrecido por módulos personalizados.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Fenrir" target="_blank">Fenrir</a>
        </td>
        <td>
            Escáner simple Bash IOC.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/FireHOL-IP-Aggregator" target="_blank">FireHOL IP Aggregator</a>
        </td>
        <td>
            Aplicación para mantener los alimentos de FireHOL <a href="https://github.com/firehol/blocklist-ipsets" target="_blank">blocklist-ipsets</a> con IP direcciones historial de apariencia. El servicio API basado en HTTP se desarrolla para solicitudes de búsqueda.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/Forager" target="_blank">Forager</a>
        </td>
        <td>
            Un guión de caza-recolectores de inteligencia de amenazas múltiples.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.gigasheet.co" target="_blank">Gigasheet</a>
        </td>
        <td>
            Gigasheet es un producto SaaS utilizado para analizar conjuntos masivos de datos de ciberseguridad y dispares. Importar archivos de registro masivos, netflow, pcaps, big CSVs y más.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/BinaryDefense/goatrider" target="_blank">GoatRider</a>
        </td>
        <td>
            GoatRider es una herramienta simple que va a eliminar dinámicamente Artillery Threat Intelligence Feeds, TOR, AlienVaults OTX, y el Alexa top 1 millón de sitios web y hacer una comparación con un archivo hostname o archivo IP.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cse.google.com/cse/publicurl?cx=003248445720253387346:turlh5vi4xc" target="_blank">Google APT Search Engine</a>
        </td>
        <td>
            APT Groups, Operations and Malware Search Engine. Las fuentes utilizadas para esta búsqueda personalizada de Google se enumeran en <a href="https://gist.github.com/Neo23x0/c4f40629342769ad0a8f3980942e21d3" target="_blank">this</a> GitHub Gist.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ciscocsirt/gosint" target="_blank">GOSINT</a>
        </td>
        <td>
            El GOSINT framework is a free project used for collecting, processing, and exporting high quality public indicators of compromise (IOCs).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://hashdd.com/" target="_blank">hashdd</a>
        </td>
        <td>
            Una herramienta para lookup información relacionada con el valor criográfico del hash
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/harbinger" target="_blank">Harbinger Threat Intelligence</a>
        </td>
        <td>
            script de Python que permite que se soliciten múltiples agregadores de amenazas en línea desde una única interfaz.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Hippocampe" target="_blank">Hippocampe</a>
        </td>
        <td>
            Hippocampe agrega la amenaza alimenta de Internet en un clúster de Elasticsearch. Tiene una API REST que permite buscar en su 'memoria'. Se basa en un script Python que incluye URLs correspondientes a los feeds, pares e índices.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/S03D4-164/Hiryu" target="_blank">Hiryu</a>
        </td>
        <td>
            Una herramienta para organizar información sobre la campaña APT y visualizar las relaciones entre COI.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/ioc-editor.html" target="_blank">IOC Editor</a>
        </td>
        <td>
            Editor gratuito para Indicadores de Compromiso (IOCs).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/ioc-finder" target="_blank">IOC Finder</a>
        </td>
        <td>
            Biblioteca Python para encontrar indicadores de compromiso en texto. Usa gramáticas en lugar de regexes para una mejor comprensión. En febrero de 2019, se analizan más de 18 tipos de indicadores.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ioc-fang/ioc_fanger" target="_blank">IOC Fanger (and Defanger)</a>
        </td>
        <td>
            Python biblioteca para el fanging (`hXXp://example[.]com` = `http://example.com`) y defanación (`http://example.com` = `hXXp://example[.]com`) indicadores de compromiso en texto.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/armbues/ioc_parser" target="_blank">ioc_parser</a>
        </td>
        <td>
            Herramienta para extraer indicadores de compromiso de los informes de seguridad en formato PDF.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mandiant/ioc_writer" target="_blank">ioc_writer</a>
        </td>
        <td>
            Proporciona una biblioteca Python que permite la creación básica y edición de OpenIOC objetos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/python-iocextract" target="_blank">iocextract</a>
        </td>
        <td>
            Extrae URLs, direcciones IP, hashes MD5/SHA, direcciones de correo electrónico y reglas de YARA de texto corpora. Incluye algunos COI codificados y “defanados” en la salida, y opcionalmente los decodifica/refangs.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stephenbrannon/IOCextractor" target="_blank">IOCextractor</a>
        </td>
        <td>
            IOC (Indicador de Compromiso) Extractor es un programa para ayudar a extraer COI de archivos de texto. El objetivo general es acelerar el proceso de análisis de datos estructurados (COI) de datos no estructurados o semiestructurados
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/johestephan/ibmxforceex.checker.py" target="_blank">ibmxforceex.checker.py</a>
        </td>
        <td>
            Cliente de Python para IBM X-Force Exchange.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/jager" target="_blank">jager</a>
        </td>
        <td>
            Jager es una herramienta para sacar COI útiles (indicadores de compromiso) de varias fuentes de entrada (PDF por ahora, texto simple muy pronto, páginas web eventualmente) y ponerlos en un formato JSON fácil de manipular.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/13850" target="_blank">Kaspersky CyberTrace</a>
        </td>
        <td>
            Herramienta de fusión y análisis de inteligencia de amenazas que integra los datos de amenazas con soluciones SIEM. Los usuarios pueden aprovechar de inmediato la información sobre amenazas para la vigilancia de la seguridad y el informe sobre incidentes (IR) en el flujo de trabajo de sus operaciones de seguridad existentes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/KasperskyLab/klara" target="_blank">KLara</a>
        </td>
        <td>
            KLara, un sistema distribuido escrito en Python, permite a los investigadores escanear una o más reglas de Yara sobre colecciones con muestras, recibiendo notificaciones por correo electrónico y la interfaz web cuando los resultados de la exploración están listos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/libtaxii" target="_blank">libtaxii</a>
        </td>
        <td>
            Una biblioteca Python para manejar TAXII Mensajes invocando TAXII Servicios.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Loki" target="_blank">Loki</a>
        </td>
        <td>
            Escáner de respuesta simple de COI e incidentes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/ssanthosh243/ip-lookup-docker" target="_blank">LookUp</a>
        </td>
        <td>
            LookUp es una página centralizada para obtener información sobre amenazas sobre una dirección IP. Puede integrarse fácilmente en menús contextuales de herramientas como SIEMs y otras herramientas de investigación.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/HurricaneLabs/machinae" target="_blank">Machinae</a>
        </td>
        <td>
            Machinae es una herramienta para recoger inteligencia de sitios públicos/profesiones sobre varias piezas de datos relacionadas con la seguridad: direcciones IP, nombres de dominio, URLs, direcciones de correo electrónico, hashes de archivos y huellas SSL.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/silascutler/MalPipe" target="_blank">MalPipe</a>
        </td>
        <td>
            Marco de recogida y procesamiento de malware Amodular (y indicador). Está diseñado para extraer malware, dominios, URL y direcciones IP de múltiples feeds, enriquecer los datos recogidos y exportar los resultados.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/misp-workbench" target="_blank">MISP Workbench</a>
        </td>
        <td>
            Herramientas para exportar datos fuera del MISP Base de datos MySQL y utilizarlos y abusarlos fuera de esta plataforma.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/MISP-Taxii-Server" target="_blank">MISP-Taxii-Server</a>
        </td>
        <td>
            Un conjunto de archivos de configuración para usar con EclecticIQ OpenTAXII aplicación, junto con un callback para cuando los datos se envían a TAXII La caja del servidor.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/microsoft/msticpy" target="_blank">MSTIC Jupyter and Python Security Tools</a>
        </td>
        <td>
            msticpy es una biblioteca para la investigación InfoSec y la caza en Jupyter Notebooks. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/paulpc/nyx" target="_blank">nyx</a>
        </td>
        <td>
            El objetivo de este proyecto es facilitar la distribución de artefactos de Inteligencia de Amenaza a sistemas defensivos y mejorar el valor derivado tanto de fuentes abiertas como de herramientas comerciales.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/onemillion" target="_blank">OneMillion</a>
        </td>
        <td>
            Biblioteca Python para determinar si un dominio está en la parte superior de Alexa o Cisco, un millón de listas de dominio.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/STIXProject/openioc-to-stix" target="_blank">openioc-to-stix</a>
        </td>
        <td>
            Generar XML STIX desde OpenIOC XML.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/omnibus" target="_blank">Omnibus</a>
        </td>
        <td>
            Omnibus es una aplicación interactiva de línea de comandos para la recogida y gestión de COI/artifactos (IPs, dominios, direcciones de correo electrónico, nombres de usuario y direcciones Bitcoin), enriquecer estos artefactos con datos OSINT de fuentes públicas, y proporcionar los medios para almacenar y acceder estos artefactos de una manera sencilla.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kx499/ostip/wiki" target="_blank">OSTIP</a>
        </td>
        <td>
            Una plataforma de datos de amenazas para el hogar.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mgeide/poortego" target="_blank">poortego</a>
        </td>
        <td>
            Proyecto de código abierto para manejar el almacenamiento y vinculación de inteligencia de código abierto (ala Maltego, pero libre como en cerveza y no atado a una cucharacific / base de datos patentada). Originalmente desarrollado en rubí, pero nueva base de código completamente reescrita en pitón.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/yahoo/PyIOCe" target="_blank">PyIOCe</a>
        </td>
        <td>
            PyIOCe es un IOC editor escrito en Python.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/QTek/QRadio" target="_blank">QRadio</a>
        </td>
        <td>
            QRadio es una herramienta / marco diseñado para consolidar las fuentes de inteligencia de amenazas cibernéticas.
            El objetivo del proyecto es establecer un sólido marco modular para la extracción de datos de inteligencia de fuentes analizadas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/aboutsecurity/rastrea2r" target="_blank">rastrea2r</a>
        </td>
        <td>
            Recogida &quot; Caza de Indicadores de Compromiso (IOC) con gusto y estilo!
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/redline.html" target="_blank">Redline</a>
        </td>
        <td>
            Una herramienta de investigación anfitriona que se puede utilizar para, entre otros, análisis de la COI.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ocmdev/rita" target="_blank">RITA</a>
        </td>
        <td>
            Análisis de la amenaza del cerebro realRITA) está destinado a ayudar en la búsqueda de indicadores de compromiso en redes empresariales de tamaño variable.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/softrace" target="_blank">Softrace</a>
        </td>
        <td>
            Biblioteca Nacional de Referencia de Software Ligero almacenamiento RDS.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/0x4d31/sqhunter" target="_blank">sqhunter</a>
        </td>
        <td>
            Cazador de amenazas basado en osquería, Salt Open y Cymon API. Puede consultar las tomas de red abiertas y comprobarlas contra fuentes de inteligencia amenazadas
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SecurityRiskAdvisors/sra-taxii2-server" target="_blank">SRA TAXII2 Server</a>
        </td>
        <td>
            Total TAXII 2.0 specification server implemented in Node JS with MongoDB backend.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://stixvalidator.com" target="_blank">Stixvalidator.com</a>
        </td>
        <td>
            Stixvalidator.com es gratis en línea STIX y STIX2 Servicio de validador.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/traut/stixview" target="_blank">Stixview</a>
        </td>
        <td>
            Stixview es una biblioteca JS para incrustar interactiva STIX2 Gráficos.
        </td>
    </tr>
	<tr>
        <td>
            <a href="https://github.com/STIXProject/stix-viz" target="_blank">stix-viz</a>
        </td>
        <td>
            Herramienta de visualización de STIX.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://test.taxiistand.com/" target="_blank">TAXII Test Server</a>
        </td>
        <td>
            Le permite probar su TAXII entorno mediante la conexión con los servicios proporcionados y el desempeño de las diferentes funciones escritas TAXII specifications.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jpsenior/threataggregator" target="_blank">threataggregator</a>
        </td>
        <td>
            ThreatAggregrator agrega amenazas de seguridad de varias fuentes en línea y productos a diversos formatos, incluyendo reglas CEF, Snort e IPTables.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcrowd_api" target="_blank">threatcrowd_api</a>
        </td>
        <td>
            Python Library para ThreatCrowdEs API.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcmd" target="_blank">threatcmd</a>
        </td>
        <td>
            Interfaz Cli ThreatCrowd.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/syphon1c/Threatelligence" target="_blank">Threatelligence</a>
        </td>
        <td>
            Threatelligence es un simple colector de inteligencia de amenazas cibernéticas, utilizando Elasticsearch, Kibana y Python para recopilar automáticamente inteligencia de fuentes públicas o personalizadas. Actualiza automáticamente los feeds y trata de mejorar aún más los datos para los paneles. Sin embargo, los proyectos ya no se mantienen.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/ThreatIngestor" target="_blank">ThreatIngestor</a>
        </td>
        <td>
            Marco flexible, impulsado por la configuración, extensible para consumir inteligencia de amenazas. ThreatIngestor puede ver Twitter, feeds RSS y otras fuentes, extraer información significativa como las firmas C2 IPs/dominios y YARA, y enviar esa información a otros sistemas para su análisis.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://chrome.google.com/webstore/detail/threatpinch-lookup/ljdgplocfnmnofbhpkjclbefmjoikgke" target="_blank">ThreatPinch Lookup</a>
        </td>
        <td>
            Una extensión para Chrome que crea popups en cada página para IPv4, MD5, SHA2, y CVEs. Se puede utilizar para lookups durante investigaciones de amenazas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/michael-yip/ThreatTracker" target="_blank">ThreatTracker</a>
        </td>
        <td>
            Un script Python diseñado para monitorear y generar alertas en conjuntos dados de COI indexados por un conjunto de Google Custom Search Engines.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yelp/threat_intel" target="_blank">threat_intel</a>
        </td>
        <td>
            Varias API para Inteligencia de Amenazas integradas en un solo paquete. Incluye: OpenDNS Investigar, VirusTotal y ShadowServer.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/abhinavbom/Threat-Intelligence-Hunter" target="_blank">Threat-Intelligence-Hunter</a>
        </td>
        <td>
            TIH es una herramienta de inteligencia que le ayuda en la búsqueda de COI en múltiples fuentes de seguridad disponibles abiertamente y algunas API bien conocidas. La idea detrás de la herramienta es facilitar la búsqueda y almacenamiento de COIs añadidas frecuentemente para crear su propia base de datos local de indicadores.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/tiq-test" target="_blank">tiq-test</a>
        </td>
        <td>
            La herramienta de prueba Threat Intelligence Quotient (TIQ) proporciona visualización y análisis estadístico de los piensos TI.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/yeti" target="_blank">YETI</a>
        </td>
        <td>
            YETI es una prueba de aceptación de la aplicación TAXII que soporta los servicios de Inbox, Poll y Discovery definidos por TAXII Servicioscification.
        </td>
    </tr>
</table>



## <a name="research"></a>Investigación, normas y libros

Material de lectura sobre inteligencia de amenazas, incluidos estudios (científicos) y libros blancos.

<table>
    <tr>
        <td>
            <a href="https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections" target="_blank">APT & Cyber Criminal Campaign Collection</a>
        </td>
        <td>
            Amplia colección de campañas (históricas). Las entradas proceden de diversas fuentes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kbandla/APTnotes" target="_blank">APTnotes</a>
        </td>
        <td>
            Una gran colección de fuentes sobre <i>Amenazas Persistentes Avanzadas</i> (APTs). Estos informes suelen incluir conocimientos o consejos estratégicos y tácticos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://attack.mitre.org/" target="_blank">ATT&CK</a>
        </td>
        <td>
            Tácticas adversarias, técnicas y conocimientos comunes (ATT&CKTM) es un modelo y marco para describir las acciones que un adversario puede tomar mientras opera en una red empresarial. ATT&CK es una referencia común cada vez mayor para las técnicas post-acceso que trae mayor conciencia de qué acciones pueden ser vistas durante una intrusión de red. MITRE está trabajando activamente en la integración con la construcción relacionada, como CAPEC, STIX y MAEC.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.activeresponse.org/building-threat-hunting-strategy-with-the-diamond-model/" target="_blank">Building Threat Hunting Strategies with the Diamond Model</a>
        </td>
        <td>
            Blogpost de Sergio Caltagirone sobre cómo desarrollar estrategias inteligentes de caza de amenazas utilizando el modelo Diamond.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://car.mitre.org/wiki/Main_Page" target="_blank">Cyber Analytics Repository by MITRE</a>
        </td>
        <td>
            El Repositorio de Análisis Cibernético (CAR) es una base de conocimiento de la analítica desarrollada por MITRE basada en las tácticas adversarias, técnicas y el conocimiento común (ATT&CKModelo de amenaza.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a>
        </td>
        <td>
            Una nueva <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a> utilizando un enfoque orientado a los interesados y alineado con el <a href="https://www.energy.gov/ceser/cybersecurity-capability-maturity-model-c2m2" target="_blank">Cybersecurity Capability Maturity Model (C2M2)</a> para empoderar a su equipo y crear un valor duradero.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mitre/cti" target="_blank">Cyber Threat Intelligence Repository by MITRE</a>
        </td>
        <td>
            The Cyber Threat Intelligence Repository of ATT&CK y CAPEC catálogos expresados en STIX 2.0 JSON.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.tandfonline.com/doi/full/10.1080/08850607.2020.1780062" target="_blank">Cyber Threat Intelligence: A Product Without a Process?</a>
        </td>
        <td>
            Un documento de investigación en el que se describía cómo los productos de inteligencia de amenazas cibernéticas son insuficientes y cómo pueden mejorarse mediante la introducción y evaluación de metodologías y procesos racionales.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cryptome.org/2015/09/cti-guide.pdf" target="_blank">Definitive Guide to Cyber Threat Intelligence</a>
        </td>
        <td>
            Describe los elementos de la inteligencia de amenazas cibernéticas y discute cómo es recolectada, analizada y utilizada por una variedad de consumidores humanos y tecnológicos. Además examina cómo la inteligencia puede mejorar la ciberseguridad a nivel táctico, operacional y estratégico, y cómo puede ayudarle a detener los ataques antes, mejorar sus defensas, y hablar más productivamente sobre los problemas de ciberseguridad con la gestión ejecutiva en lo típico <i>for Dummies</i> estilo.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ryanstillions.blogspot.nl/2014/04/the-dml-model_21.html" target="_blank">The Detection Maturity Level (DML)</a>
        </td>
        <td>
            El modelo DML es un modelo de madurez de capacidad para referenciar la madurez de los ataques cibernéticos.
            Está diseñado para las organizaciones que realizan la detección y respuesta impulsadas por la información y que ponen énfasis en tener un programa de detección maduro.
            La madurez de una organización no se mide por su capacidad de obtener simplemente información relevante, sino más bien su capacidad de aplicar esa inteligencia eficazmente a las funciones de detección y respuesta.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/diamond.pdf" target="_blank">The Diamond Model of Intrusion Analysis</a>
        </td>
        <td>
            Este artículo presenta el Modelo Diamante, un marco cognitivo y un instrumento analítico para apoyar y mejorar el análisis de la intrusión. Apoyar una mayor mensurabilidad, testabilidad y repetibilidad en el análisis de intrusión para lograr una mayor efectividad, eficiencia y precisión en la derrota de los adversarios es una de sus principales contribuciones.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/a547092.pdf" target="_blank">The Targeting Process: D3A and F3EAD</a>
        </td>
        <td>
            F3EAD es una metodología militar para combinar operaciones e inteligencia.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/NIST.SP.800-150.pdf" target="_blank">Guide to Cyber Threat Information Sharing by NIST</a>
        </td>
        <td>
            The Guide to Cyber Threat Information Sharing (NIST Special Publication 800-150) ayuda a las organizaciones a establecer capacidades de respuesta a incidentes de seguridad informática que apalanquen los conocimientos, la experiencia y las capacidades colectivos de sus asociados mediante el intercambio activo de información sobre amenazas y la coordinación en curso. La guía proporciona directrices para la gestión coordinada de incidentes, incluidos datos de producción y consumo, la participación en comunidades de intercambio de información y la protección de datos relacionados con incidentes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/Intelligence Preparation for the Battlefield-Battlespace.pdf" target="_blank">Intelligence Preparation of the Battlefield/Battlespace</a>
        </td>
        <td>
            Esta publicación analiza la preparación de inteligencia del espacio de batalla (IPB) como componente crítico del proceso de toma de decisiones y planificación militar y cómo la IPB apoya la toma de decisiones, así como la integración de procesos y actividades continuas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.lockheedmartin.com/content/dam/lockheed/data/corporate/documents/LM-White-Paper-Intel-Driven-Defense.pdf" target="_blank">Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains</a>
        </td>
        <td>
            La cadena de intrusión de la muerte tal como se presenta en este documento proporciona un enfoque estructurado del análisis de intrusión, la extracción de indicadores y la realización de acciones defensivas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.isao.org" target="_blank">ISAO Standards Organization</a>
        </td>
        <td>
            El ISAO Standards Organization es una organización no gubernamental establecida el 1 de octubre 2015. Su misión es mejorar la postura de seguridad cibernética de la nación identificando normas y directrices para el intercambio de información sólido y eficaz en relación con los riesgos, incidentes y mejores prácticas de ciberseguridad.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/jp2_0.pdf" target="_blank">Joint Publication 2-0: Joint Intelligence</a>
        </td>
        <td>
            Esta publicación del ejército estadounidense forma el núcleo de la doctrina conjunta de inteligencia y sienta las bases para integrar plenamente las operaciones, planes e inteligencia en un equipo cohesivo. Los conceptos presentados son aplicables a (Cyber) Threat Intelligence también.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://download.microsoft.com/download/8/0/1/801358EC-2A0A-4675-A2E7-96C2E7B93E73/Framework_for_Cybersecurity_Info_Sharing.pdf" target="_blank">Microsoft Research Paper</a>
        </td>
        <td>
            Un marco para el intercambio de información sobre seguridad cibernética y la reducción del riesgo. Un documento de visión general de alto nivel de Microsoft.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/draft-dulaunoy-misp-core-format-00" target="_blank">MISP Core Format (draft)</a>
        </td>
        <td>
            Este documento describe el MISP formato básico utilizado para intercambiar indicadores e información sobre amenazas MISP (Malware Information and threat Sharing Platform) instances.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.necoma-project.eu/" target="_blank">NECOMA Project</a>
        </td>
        <td>
            El proyecto Nippon-European Cyberdefense-Oriented Multilayer threat Analysis (NECOMA) busca mejorar la recopilación y el análisis de datos sobre amenazas para desarrollar y desacreditar nuevos mecanismos de ciberdefensa.
            Como parte del proyecto se han publicado varias publicaciones y proyectos de software.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/pyramidofpain.pdf" target="_blank">Pyramid of Pain</a>
        </td>
        <td>
            La Pirámide del Dolor es una manera gráfica de expresar la dificultad de obtener diferentes niveles de indicadores y la cantidad de recursos que los adversarios tienen que gastar cuando lo obtienen los defensores.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.amazon.com/Structured-Analytic-Techniques-Intelligence-Analysis/dp/1452241511" target="_blank">Structured Analytic Techniques For Intelligence Analysis</a>
        </td>
        <td>
            Este libro contiene métodos que representan las mejores prácticas más actuales en inteligencia, cumplimiento de la ley, seguridad en el país y análisis de negocios.
        </td>
    </tr>
    <tr>
        <td>
            <a href="./docs/mwr-threat-intelligence-whitepaper.pdf" target="_blank">Threat Intelligence: Collecting, Analysing, Evaluating</a>
        </td>
        <td>
            Este informe de MWR InfoSecurity describe claramente varios tipos diferentes de inteligencia de amenazas, incluyendo variaciones estratégicas, tácticas y operativas. También se examinan los procesos de obtención, reunión, análisis, producción y evaluación de la inteligencia de amenazas. También se incluyen algunas victorias rápidas y un modelo de madurez para cada uno de los tipos de inteligencia de amenazas definidos por MWR InfoSecurity.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://aisel.aisnet.org/wi2017/track08/paper/3/" target="_blank">Threat Intelligence Sharing Platforms: An Exploratory Study of Software Vendors and Research Perspectives</a>
        </td>
        <td>
            Estudio sistemático de 22 plataformas de intercambio de inteligencia de amenazas (TISP) que reúnen ocho hallazgos clave sobre el estado actual de uso de inteligencia de amenazas, su definición y TISPs.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.us-cert.gov/tlp" target="_blank">Traffic Light Protocol</a>
        </td>
        <td>
            El Protocolo de la Luz de Tráfico (TLP) es un conjunto de denominaciones utilizadas para asegurar que la información sensible sea compartida con el público correcto. Emplea cuatro colores para indicar diferentes grados de sensibilidad y las correspondientes consideraciones compartidas que deben ser aplicadas por los destinatarios.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pan-unit42.github.io/playbook_viewer/" target="_blank">Unit42 Playbook Viewer</a>
        </td> 
        <td>
            El objetivo de la Playbook es organizar las herramientas, técnicas y procedimientos que un adversario utiliza en un formato estructurado, que puede ser compartido con otros, y construido sobre. Los marcos utilizados para estructurar y compartir los playbooks adversarios son MITRE ATT&CK Marco y STIX 2.0
        </td>    
    </tr>
    <tr>
        <td>
            <a href="docs/sans-whos-using-cyberthreat-intelligence-and-how.pdf" target="_blank">Who's Using Cyberthreat Intelligence and How?</a>
        </td>
        <td>
            Un libro blanco del Instituto SANS que describe el uso de Inteligencia de Amenazas incluyendo una encuesta realizada.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.wombat-project.eu/" target="_blank">WOMBAT Project</a>
        </td>
        <td>
            El WOMBAT project El objetivo es proporcionar nuevos medios para comprender las amenazas existentes y emergentes que están dirigidas a la economía de Internet y a los ciudadanos netos. Para alcanzar este objetivo, la propuesta incluye tres paquetes de trabajo clave: i) la recopilación en tiempo real de un conjunto diverso de datos brutos relacionados con la seguridad, ii) el enriquecimiento de esta entrada por medio de diversas técnicas de análisis, y iii) la identificación de causa raíz y la comprensión de los fenómenos objeto de escrutinio.
        </td>
    </tr>
</table>



## Licencia

Distribuido bajo la licencia [Apache License 2.0](LICENSE).
