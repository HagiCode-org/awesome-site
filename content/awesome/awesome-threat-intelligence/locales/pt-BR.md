# awesome-threat-intelligence
Seleção de recursos de qualidade sobre inteligência contra ameaças

Definição concisa de inteligência contra ameaças: *conhecimento baseado em evidências, que inclui contexto, mecanismos, indicadores, implicações e orientações práticas sobre uma ameaça ou perigo existente ou emergente para ativos, e que pode embasar decisões sobre a resposta a essa ameaça ou perigo*.

Fique à vontade para [contribuir](CONTRIBUTING.md).

- [Fontes](#sources)
- [Formatos](#formats)
- [Frameworks e plataformas](#frameworks-and-platforms)
- [Ferramentas](#tools)
- [Pesquisa, normas e livros](#research)


## Fontes

A maioria dos recursos abaixo oferece listas e/ou APIs para obter informações, de preferência atualizadas, sobre ameaças.
Algumas pessoas consideram essas fontes inteligência contra ameaças, mas há divergências.
É necessária alguma análise específica do domínio ou do negócio para produzir inteligência contra ameaças de fato.

<table>
    <tr>
        <td>
            <a href="https://www.abuseipdb.com/" target="_blank">AbuseIPDB</a>
        </td>
        <td>
            AbuseIPDB é um projeto dedicado a ajudar a combater a propagação de hackers, spammers e atividades abusivas na internet. Sua missão é ajudar a tornar a Web mais segura, fornecendo uma lista negra central para webmasters, administradores de sistema e outras partes interessadas para relatar e encontrar endereços IP que foram associados com atividade maliciosa online..
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://docs.google.com/spreadsheets/u/1/d/1H9_xaxQHpWaa4O_Son4Gx0YOIzlcBWMsdvePFX68EKU/pubhtml" target="_blank">APT Groups and Operations</a>
        </td>
        <td>
            Uma planilha contendo informações e informações sobre grupos, operações e táticas do APT.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.binarydefense.com/banlist.txt" target="_blank">Binary Defense IP Banlist</a>
        </td>
        <td>
            Sistemas de defesa binários Artilharia Ameaça Inteligência Feed e IP Banlist Feed.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.circl.lu/projects/bgpranking/" target="_blank">BGP Ranking</a>
        </td>
        <td>
            Ranking de ASNs tendo o conteúdo mais malicioso.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intel.malwaretech.com/" target="_blank">Botnet Tracker</a>
        </td>
        <td>
            Rastreia vários botnets ativos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.botvrij.eu/">BOTVRIJ.EU</a>
        </td>
        <td>
            Botvrij.eu fornece diferentes conjuntos de COIs de código aberto que você pode usar em seus dispositivos de segurança para detectar possíveis atividades maliciosas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://danger.rulez.sk/index.php/bruteforceblocker/download/" target="_blank">BruteForceBlocker</a>
        </td>
        <td>
            BruteForceBlocker é um script perl que monitora os logs sshd de um servidor e identifica ataques de força bruta, que ele usa para configurar automaticamente regras de bloqueio de firewall e enviar esses IPs de volta para o site do projeto, <a href="http://danger.rulez.sk/projects/bruteforceblocker/blist.php">http://danger.rulez.sk/projects/bruteforceblocker/blist.php</a>.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://osint.bambenekconsulting.com/feeds/c2-ipmasterlist.txt" target="_blank">C&amp;C Tracker</a>
        </td>
        <td>
            Uma alimentação de C conhecida, ativa e não-afundada&amp;Endereços IP C, da Bambenek Consulting. Requer licença para uso comercial.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://certstream.calidog.io/" target="_blank">CertStream</a>
        </td>
        <td>
            Fluxo de atualização do log de transparência do certificado em tempo real. Veja certificados SSL como eles são emitidos em tempo real.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.ccssforum.org/malware-certificates.php" target="_blank">CCSS Forum Malware Certificates</a>
        </td>
        <td>
            A seguir está uma lista de certificados digitais que foram relatados pelo fórum como possivelmente sendo associados com malware para várias autoridades certificado. Esta informação destina-se a ajudar as empresas a evitar o uso de certificados digitais para adicionar legitimidade ao malware e incentivar a rápida revogação desses certificados.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://cinsscore.com/list/ci-badguys.txt" target="_blank">CI Army List</a>
        </td>
        <td>
        Um subconjunto do comércio <a href="http://cinsscore.com/">CINS Score</a> lista, focada em IPs mal classificados que não estão atualmente presentes em outras listas de ameaças.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://s3-us-west-1.amazonaws.com/umbrella-static/index.html" target="_blank">Cisco Umbrella</a>
        </td>
        <td>
            Lista Branca provável dos melhores 1 milhão de sites resolvidos pela Cisco Umbrella (era OpenDNS).
	</td>
    </tr>
    <tr>
        <td>
            <a href="https://cloudmersive.com/virus-api" target="_blank">Cloudmersive Virus Scan</a>
        </td>
        <td>
            Cloudmersive Virus Scan APIs escaneia arquivos, URLs e armazenamento em nuvem para vírus. Eles aproveitam assinaturas continuamente atualizadas para milhões de ameaças e recursos avançados de digitalização de alto desempenho. O serviço é gratuito, mas requer que você se registre para uma conta para recuperar sua chave API pessoal.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.crowdsec.net/" target="_blank">CrowdSec Console</a>
        </td>
        <td>
            A maior CTI de origem crowd, atualizada em tempo real, graças CrowdSec um software de próxima geração, de código aberto, gratuito e colaborativo IDS/IPS. <a href="https://crowdsec.net" target="_blank">CrowdSec</a>  é capaz de analisar o comportamento do visitante e fornecer uma resposta adaptada a todos os tipos de ataques. Os usuários podem compartilhar seus alertas sobre ameaças com a comunidade e se beneficiar do efeito da rede. Os endereços IP são coletados de ataques reais e não estão vindo exclusivamente de uma rede honeypot.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cybercure.ai/" target="_blank">Cyber Cure free intelligence feeds</a>
        </td>
        <td>
            Cyber Cure oferece informações gratuitas sobre ameaças cibernéticas com listas de endereços IP que estão atualmente infectados e atacando na internet. Há lista de urls usados por malware e lista de arquivos hash de malware conhecido que está se espalhando atualmente. CyberCure está usando sensores para coletar inteligência com uma taxa de falsos positivos muito baixa. Detalhado <a href="https://docs.cybercure.ai" target="_blank">documentation</a> também está disponível.
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/community/ctix-feeds" target="_blank">Cyware Threat Intelligence Feeds</a>
        </td>
        <td>
            Os feeds da Cyware Threat Intelligence trazem para você os valiosos dados de ameaças de uma ampla gama de fontes abertas e confiáveis para fornecer um fluxo consolidado de informações valiosas e acionáveis sobre ameaças. Nossos feeds de informações de ameaça são totalmente compatíveis com STIX 1.x e 2.0, dando-lhe as últimas informações sobre hashes de malware malicioso, IPs e domínios descobertos em todo o mundo em tempo real.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://dataplane.org/" target="_blank">DataPlane.org</a>
        </td>
        <td>
          DataPlane.org é um recurso de dados, feeds e medição de Internet alimentados pela comunidade para operadores. Nós fornecemos serviço confiável e confiável sem custo.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://focsec.com" target="_blank">Focsec.com</a>
        </td>
        <td>
          Focsec.com fornece uma API para detectar VPNs, Proxys, Bots e solicitações TOR. Os dados sempre atualizados ajudam a detectar logins suspeitos, fraudes e abusos. Exemplos de código podem ser encontrados no <a href="https://docs.focsec.com" target="_blank">documentation</a>.
        </td>
   </tr>	
   <tr>
        <td>
            <a href="https://osint.digitalside.it/" target="_blank">DigitalSide Threat-Intel</a>
        </td>
        <td>
          Contém conjuntos de indicadores Open Source Cyber Threat Intelligence, principalmente baseado em análise de malware e URLs comprometidas, IPs e domínios. O objetivo deste projeto é desenvolver e testar novas formas de caçar, analisar, coletar e compartilhar IoCs relevantes a serem utilizados por SOC/CSIRT/CERT/indivíduos com esforço mínimo. Os relatórios são partilhados de três formas: <a href="https://osint.digitalside.it/Threat-Intel/stix2/" target="_blank">STIX2</a>, <a href="https://osint.digitalside.it/Threat-Intel/csv/" target="_blank">CSV</a> e <a href="https://osint.digitalside.it/Threat-Intel/digitalside-misp-feed/" target="_blank">MISP Feed</a>Os relatórios são igualmente publicados no <a href="https://github.com/davidonzo/Threat-Intel/" target="_blank">project's Git repository</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/martenson/disposable-email-domains">Disposable Email Domains</a>
        </td>
        <td>
            Uma coleção de domínios de email anônimos ou descartáveis comumente usados para serviços de spam/abuso.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://securitytrails.com/dns-trails">DNS Trails</a>
        </td>
        <td>
            Fonte de inteligência gratuita para informações DNS atuais e históricas, informações do WHOIS, encontrando outros sites associados a certos IPs, conhecimento subdomínio e tecnologias. Existe uma <a href="https://securitytrails.com/">IP and domain intelligence API available</a> Também. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feed.ellio.tech" target="_blank">ELLIO: IP Feed (community free version)</a>
        </td>
        <td>
            Uma lista de ameaças de endereços IP maliciosos conhecidos antecipados para representar potenciais ameaças à sua rede no futuro próximo, scanners benignos conhecidos e endereços IP de atores com intenção desconhecida. É fornecido com um atraso de 24 horas para uso pessoal, não comercial, mas ainda fornece proteção excepcional em comparação com outras listas de ameaças de IP abertas / feeds.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/fwrules/" target="_blank">Emerging Threats Firewall Rules</a>
        </td>
        <td>
            Uma coleção de regras para vários tipos de firewalls, incluindo iptables, PF e PIX.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/blockrules/" target="_blank">Emerging Threats IDS Rules</a>
        </td>
        <td>
            Uma coleção de Snort e Suricata <i>regras</i> arquivos que podem ser usados para alertar ou bloquear.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exonerator.torproject.org/" target="_blank">ExoneraTor</a>
        </td>
        <td>
            A ExoneraTor O serviço mantém uma base de dados de endereços IP que fizeram parte da rede Tor. Ele responde à pergunta se havia um relé Tor rodando em um determinado endereço IP em uma determinada data.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.exploitalert.com/" target="_blank">Exploitalert</a>
        </td>
        <td>
            Listagem das últimas façanhas lançadas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intercept.sh/threatlists/" target="_blank">FastIntercept</a>
        </td>
        <td>
	    Intercept Security hospeda uma série de listas gratuitas de reputação IP de sua rede global honeypot.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feodotracker.abuse.ch/" target="_blank">ZeuS Tracker</a>
        </td>
        <td>
            O Rastreador Feodo <a href="https://abuse.ch/" target="_blank">abuse.ch</a> Rastreia o Feodo Trojan.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://iplists.firehol.org/" target="_blank">FireHOL IP Lists</a>
        </td>
        <td>
            400+ Feeds IP disponíveis publicamente analisados para documentar sua evolução, geo-mapa, idade de IPs, política de retenção, sobreposições. O site foca no crime cibernético (ataques, abuso, malware).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://fraudguard.io/" target="_blank">FraudGuard</a>
        </td>
        <td>
            FraudGuard é um serviço projetado para fornecer uma maneira fácil de validar o uso, coletando e analisando continuamente o tráfego de internet em tempo real.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://greynoise.io/" target="_blank">GreyNoise</a>
        </td>
        <td>
            GreyNoise coleta e analisa dados sobre a atividade de digitalização na Internet. Ele coleta dados em scanners benignos como Shodan.io, bem como atores maliciosos como SSH e vermes telnet. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://griffinguard.io/" target="_blank">GriffinGuard</a>
        </td>
        <td>
            GriffinGuard é uma plataforma de segurança cibernética que fornece informações sobre ameaças em tempo real através da análise contínua de padrões globais de tráfego e exploração da internet. Ele fornece pesquisa de dados gratuita, e alguns grátis IP blocklists.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://honeydb.io/" target="_blank">HoneyDB</a>
        </td> 
        <td>
            HoneyDB fornece dados em tempo real da atividade do honeypot. Estes dados vêm de honeypots implantados na Internet usando o <a href="https://github.com/foospidy/HoneyPy" target="_blank">HoneyPy</a> Pote de mel. Além disso, HoneyDB fornece acesso API à atividade de honeypot coletada, que também inclui dados agregados de vários feeds de honeypot Twitter.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SupportIntelligence/Icewater" target="_blank">Icewater</a>
        </td>
        <td>
            12.805 Regras de Yara livres criadas pelo Projeto Icewater.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://infosec.cert-pa.it" target="_blank">Infosec - CERT-PA</a>
        </td>
        <td>
            Amostras de malware <a href="https://infosec.cert-pa.it/analyze/submission.html" target="_blank">collection and analysis</a>, <a href="https://infosec.cert-pa.it/analyze/statistics.html" target="_blank">blocklist service, <a href="https://infosec.cert-pa.it/cve.html">vulnerabilities database</a> e mais. Criado e gerido pelo CERT-PA.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://labs.inquest.net" target="_blank">InQuest Labs</a>
        </td>
        <td>
            Um portal de dados aberto, interativo e baseado em API para pesquisadores de segurança. Pesquise um grande corpus de amostras de arquivos, informações de reputação agregada e COI extraídas de fontes públicas. Desenvolvimento YARA aumento com ferramentas para gerar gatilhos, lidar com hex caso misto, e gerar expressões regulares compatíveis base64.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.iblocklist.com/lists" target="_blank">I-Blocklist</a>
        </td>
        <td>
            I-Blocklist mantém vários tipos de listas contendo endereços IP pertencentes a várias categorias. Algumas destas categorias principais incluem países, ISPs e organizações. Outras listas incluem ataques web, TOR, spyware e proxies. Muitos são livres de usar, e disponíveis em vários formatos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ipasis.com" target="_blank">IPASIS</a>
        </td>
        <td>
            IPASIS é uma API de detecção de bots e prevenção de fraudes em tempo real que combina inteligência IP, detecção proxy/VPN/Tor e validação de email em uma única chamada API. Cada pedido retorna uma pontuação de confiança de interação (0-100) com tempo de resposta sub-20ms. O nível livre inclui 1.000 pedidos/dia. <a href="https://ipasis.com/docs" target="_blank">API documentation</a> e a <a href="https://ipasis.com/scan" target="_blank">live scanner</a> estão disponíveis.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/stamparm/ipsum/master/ipsum.txt" target="_blank">IPsum</a>
        </td>
        <td>
            IPsum é um feed de inteligência de ameaça baseado em 30+ diferentes listas publicamente disponíveis de endereços IP suspeitos e/ou maliciosos. Todas as listas são automaticamente recuperadas e analisadas diariamente (24h) e o resultado final é enviado para este repositório. Lista é feita de endereços IP juntamente com um número total de (preto) lista de ocorrência (para cada). Criado e gerido por <a href="https://twitter.com/stamparm">Miroslav Stampar</a>.
        </td>
    </tr>
    <tr>
	<td>
            <a href="https://jamesbrine.com.au" target="_blank">James Brine Threat Intelligence Feeds</a>
        </td>
        <td>
		JamesBrine fornece informações de ameaças diárias para endereços IP maliciosos de honeypots localizados internacionalmente na nuvem e infraestrutura privada cobrindo uma variedade de protocolos, incluindo SSH, FTP, RDP, GIT, SNMP e REDIS. Os COI do dia anterior estão disponíveis em STIX2 bem como COI adicionais, tais como URIs suspeitas e domínios recém-registrados que têm uma alta probabilidade de uso em campanhas de phishing.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/datafeeds" target="_blank">Kaspersky Threat Data Feeds</a>
        </td>
        <td>
Atualize continuamente e informe o seu negócio ou clientes sobre riscos e implicações associadas a ameaças cibernéticas. Os dados em tempo real ajudam você a mitigar ameaças de forma mais eficaz e defender-se contra ataques mesmo antes de serem lançados. Demo Data Feeds contém conjuntos truncados de IoCs (até 1%) em comparação com os comerciais
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://majestic.com/reports/majestic-million" target="_blank">Majestic Million</a>
        </td>
        <td>
            Probable Whitelist dos melhores 1 milhão de sites, conforme classificado por Majestic. Os sítios são encomendados pelo número de subredes de referência. Mais sobre o ranking pode ser encontrado em seus <a href="https://blog.majestic.com/development/majestic-million-csv-daily/" target="_blank">blog</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maldatabase.com/" target="_blank">Maldatabase</a>
        </td>
        <td>
            Maldatabase foi projetado para ajudar a ciência de dados de malware e informações sobre ameaças. Desde que os dados contenham boas informações sobre, entre outros campos, domínios contatados, lista de processos executados e arquivos abandonados por cada amostra. Esses feeds permitem que você melhore suas ferramentas de monitoramento e segurança. Estão disponíveis serviços gratuitos para Pesquisadores e Estudantes de Segurança. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malpedia.caad.fkie.fraunhofer.de/" target="_blank">Malpedia</a>
        </td>
        <td>
O objetivo principal da Malpedia é fornecer um recurso para identificação rápida e contexto acionável ao investigar malware. A abertura a contribuições com curadoria deve assegurar um nível de qualidade responsável para promover uma investigação significativa e reprodutível. 
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://www.malshare.com/" target="_blank">MalShare.com</a>
        </td>
        <td>
            O Projeto MalShare é um repositório de malware público que fornece aos pesquisadores acesso gratuito a amostras.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.maltiverse.com/" target="_blank">Maltiverse</a>
        </td>
        <td>
            O Projeto Maltiverse é um grande e enriquecido banco de dados IoC, onde é possível fazer consultas complexas e agregações para investigar sobre campanhas de malware e suas infraestruturas. Ele também tem um ótimo serviço de consulta em massa IoC.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bazaar.abuse.ch/" target="_blank">MalwareBazaar</a>
        </td>
        <td>
            MalwareBazaar é um projeto de abuse.ch com o objetivo de compartilhar amostras de malware com a comunidade infosec, fornecedores de AV e provedores de inteligência ameaça.
        </td>
    </tr>	
    <tr>
        <td>
            <a href="https://www.malwaredomainlist.com/" target="_blank">Malware Domain List</a>
        </td>
        <td>
            Uma lista pesquisável de domínios maliciosos que também executa o inverso lookups e lista os registantes, focados em phishing, trojans e kits de exploração.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.malwarepatrol.net/" target="_blank">Malware Patrol</a>
        </td>
        <td>
            Malware Patrol fornece listas de blocos, feeds de dados e inteligência de ameaça para empresas de todos os tamanhos. Como a nossa especialidade é a inteligência ciberameaça, todos os nossos recursos vão para garantir que é da mais alta qualidade possível. Acreditamos que uma equipe de segurança e suas ferramentas são tão boas quanto os dados usados. Isto significa que os nossos feeds não estão cheios de indicadores não verificados. Valorizamos a qualidade sobre a quantidade. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malware-traffic-analysis.net/" target="_blank">Malware-Traffic-Analysis.net</a>
        </td>
        <td>
            Este blog foca no tráfego de rede relacionado a infecções por malware. Contém exercícios de análise de tráfego, tutoriais, amostras de malware, arquivos pcap de tráfego de rede malicioso, e posts de blog técnicos com observações.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.malwaredomains.com/" target="_blank">MalwareDomains.com</a>
        </td>
        <td>
            O projeto DNS-BH cria e mantém uma lista de domínios que são conhecidos por serem usados para propagar malware e spyware. Estes podem ser usados para detecção, bem como prevenção (pedidos de DNS sinkholing).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opswat.com/developers/threat-intelligence-feed" target="_blank">MetaDefender Cloud</a>
        </td>
        <td>
            MetaDefender Cloud Feeds de Inteligência de Ameaça contém novas assinaturas de hash de malware, incluindo MD5, SHA1 e SHA256. Estes novos hashes maliciosos foram vistos por MetaDefender Cloud nas últimas 24 horas. Os feeds são atualizados diariamente com malware recentemente detectado e relatado para fornecer inteligência de ameaça acionável e oportuna.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.nothink.org">NoThink!</a>
        </td>
        <td>SNMP, SSH, Telnet Blacklisted IPs dos Honeypots de Matteo Cantoni</td>
    </tr>
    <tr>
        <td>
            <a href="https://services.normshield.com" target="_blank">NormShield Services</a>
        </td>
        <td>
            NormShield Services fornecer milhares de informações de domínio (incluindo informações whois) de onde podem vir potenciais ataques de phishing. Serviços de violação e lista negra também disponíveis. Há livre inscrição para serviços públicos para monitoramento contínuo.
        </td>
    </tr> 
    <tr>
        <td>
            <a href="https://novasense-threats.com" target="_blank">NovaSense Threats</a>
        </td>
        <td>
            NovaSense é o centro de inteligência Snapt ameaça, e fornece insights e ferramentas para proteção preventiva ameaça e mitigação de ataques. NovaSense protege clientes de todos os tamanhos contra atacantes, abusos, botnets, ataques DoS e muito mais.
        </td>
    </tr>     
    <tr>
        <td>
            <a href="https://www.obstracts.com/" target="_blank">Obstracts</a>
        </td>
        <td>
            O leitor RSS para equipes de segurança cibernética. Transforme qualquer blog em inteligência de ameaça estruturada e acionável.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://openphish.com/phishing_feeds.html" target="_blank">OpenPhish Feeds</a>
        </td>
        <td>
            OpenPhish recebe URLs de vários fluxos e as analisa usando seus algoritmos de detecção de phishing proprietários. Existem ofertas gratuitas e comerciais disponíveis.
        </td>
    </tr>
        <tr>
        <td>
            <a href="https://feed.seguranca-informatica.pt/index.php" target="_blank">0xSI_f33d</a>
        </td>
        <td>
            Serviço gratuito para detectar possíveis domínios de phishing e malware, IPs na lista negra no ciberespaço português.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.phishtank.com/developer_info.php" target="_blank">PhishTank</a>
        </td>
        <td>
            PhishTank fornece uma lista de URLs de phishing suspeitos. Os seus dados provêm de relatórios humanos, mas também ingerim alimentos externos sempre que possível. É um serviço gratuito, mas registrar-se para uma chave API é às vezes necessário.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.celerium.com/pickupstix" target="_blank">PickupSTIX</a>
        </td>
        <td>
            PickupSTIX é um feed de inteligência livre, de código aberto e de ameaças cibernéticas não comercializadas. Actualmente, PickupSTIX utiliza três feeds públicos e distribui cerca de 100 novas informações por dia. PickupSTIX traduz os vários feeds em STIX, que pode comunicar com qualquer TAXII servidor. Os dados são livres de usar e é uma ótima maneira de começar a usar a inteligência ciberameaça.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://qfeeds.com" target="_blank">Q-Feeds Threat Intelligence</a>
        </td>
        <td>
            A Q-Feeds é uma empresa de segurança cibernética que reúne dados da OSINT, pesquisas proprietárias e informações sobre ameaças comerciais para oferecer uma solução bem arredondada e altamente acionável. Seu Portal de Inteligência de Ameaça (TIP) torna fácil para as organizações acessar e gerenciar esses dados em tempo real. Ao integrar com firewalls, SIEMs e outras plataformas de segurança, o Q-Feeds ajuda as empresas a bloquear proativamente conexões com IPs, domínios e URLs maliciosos conhecidos, antes que ameaças possam causar danos. Eles também têm uma versão comunitária disponível a pedido.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rescure.fruxlabs.com/" target="_blank">REScure Threat Intel Feed</a>
        </td>
        <td>
            [RES]cure é um projeto independente de inteligência de ameaça realizado pela equipe de Crack Fruxlabs para melhorar sua compreensão da arquitetura subjacente de sistemas distribuídos, a natureza da inteligência de ameaça e como coletar, armazenar, consumir e distribuir eficientemente inteligência de ameaça. As fontes de alimentação são geradas a cada 6 horas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rstcloud.net/" target="_blank">RST Cloud Threat Intel Feed</a>
        </td>
        <td>
            Indicadores Agregados de Compromisso coletados e verificados de várias fontes abertas e suportadas pela comunidade, enriquecidos e classificados usando nossa plataforma de inteligência.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://report.cs.rutgers.edu/mrtg/drop/dropstat.cgi?start=-86400">Rutgers Blacklisted IPs</a>
        </td>
        <td>Lista IP de atacantes de força SSH Brute é criada a partir de uma fusão de IPs localmente observados e IPs 2 horas antigos registrados em badip.com e blocklist.de</td>
    </tr>
    <tr>
        <td>
            <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS Suspicious Domains</a>
        </td>
        <td>
            A ameaça suspeita de domínios por <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS</a> Rastreia domínios suspeitos. Oferece 3 listas categorizadas como ambas <a href="https://isc.sans.edu/feeds/suspiciousdomains_High.txt" target="_blank">high</a>, <a href="https://isc.sans.edu/feeds/suspiciousdomains_Medium.txt" target="_blank">medium</a> ou <a href="https://isc.sans.edu/feeds/suspiciousdomains_Low.txt" target="_blank">low</a> sensibilidade, onde a lista de alta sensibilidade tem menos falsos positivos, enquanto a lista de baixa sensibilidade com mais falsos positivos. Há também um <a href="https://isc.sans.edu/feeds/suspiciousdomains_whitelist_approved.txt" target="_blank">approved whitelist</a> de domínios.<br/>
            Finalmente, há uma sugestão <a href="https://isc.sans.edu/block.txt" target="_blank">IP blocklist</a> de <a href="https://dshield.org">DShield</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/securityscorecard/SSC-Threat-Intel-IoCs" target="_blank">SecurityScorecard IoCs</a>
        </td>
        <td>
            Acesso público IoCs de blogs técnicos postagens e relatórios da SecurityScorecard.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.stixify.com/" target="_blank">Stixify</a>
        </td>
        <td>
            O teu analista automático de inteligência de ameaças. Extrair inteligência legível por máquina de dados não estruturados.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/signature-base" target="_blank">signature-base</a>
        </td>
        <td>
            Um banco de dados de assinaturas utilizado em outras ferramentas por Neo23x0.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.spamhaus.org/" target="_blank">The Spamhaus project</a>
        </td>
        <td>
            O Projeto Spamhaus contém várias listas de ameaças associadas com spam e atividade de malware.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.sophos.com/intelix" target="_blank">SophosLabs Intelix</a>
        </td>
        <td>
            SophosLabs Intelix é a plataforma de inteligência de ameaça que alimenta os produtos e parceiros Sophos. Você pode acessar inteligência com base no arquivo hash, url etc. bem como submeter amostras para análise. Através da API REST, você pode facilmente e rapidamente adicionar essa inteligência de ameaça aos seus sistemas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://spur.us" target="_blank">Spur</a>
        </td>
        <td>
            O Spur fornece ferramentas e dados para detectar VPNs, Proxies Residenciais e Bots. Plano livre permite que os usuários para lookup um IP e obter sua classificação, provedor VPN, geolocalizações populares por trás do IP, e algum contexto mais útil.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://sslbl.abuse.ch/" target="_blank">SSL Blacklist</a>
        </td>
        <td>
            SSL Blacklist (SSLBL) é um projeto mantido por abuse.chO objetivo é fornecer uma lista de certificados SSL "maus" identificados por abuse.ch estar associado a atividades de malware ou botnet. SSLBL baseia-se em impressões SHA1 de certificados SSL maliciosos e oferece várias listas negras
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://statvoo.com/dl/top-1million-sites.csv.zip" target="_blank">Statvoo Top 1 Million Sites</a>
        </td>
        <td>
            Probable Whitelist dos melhores 1 milhão de sites, conforme classificado por Statvoo.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://strongarm.io" target="_blank">Strongarm, by Percipient Networks</a>
        </td>
        <td>
            Strongarm é um buraco negro DNS que toma medidas sobre indicadores de compromisso bloqueando o comando e controle de malware. Strongarm agrega feeds de indicador gratuitos, integra-se com feeds comerciais, utiliza feeds de COI do Percipient e opera soluções de DNS e APIs para você usar para proteger sua rede e negócios. Strongarm é livre para uso pessoal.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.siemrules.com" target="_blank">SIEM Rules</a>
        </td>
        <td>
            A sua base de dados de engenharia de detecção. Ver, modificar e implantar SIEM rules para caça e detecção de ameaças.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.talosintelligence.com/" target="_blank">Talos</a>
        </td>
        <td>
	    O Cisco Talos Intelligence Group é uma das maiores equipes de inteligência de ameaças comerciais do mundo, composta por pesquisadores, analistas e engenheiros de classe mundial. Essas equipes são suportadas por telemetria inigualável e sistemas sofisticados para criar inteligência de ameaça precisa, rápida e acionável para clientes, produtos e serviços da Cisco. Talos defende os clientes da Cisco contra ameaças conhecidas e emergentes, descobre novas vulnerabilidades em software comum e interdita ameaças na natureza antes que possam prejudicar ainda mais a internet em geral. Talos mantém os conjuntos de regras oficiais de Snort.org, ClamAV e SpamCop, além de liberar muitas ferramentas de pesquisa e análise de código aberto. Talos fornece uma interface web fácil de usar para verificar uma <a href="https://www.talosintelligence.com/reputation">observable's reputation</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfeeds.io" target="_blank">threatfeeds.io</a>
        </td>
        <td>
            threatfeeds.io lista os feeds e fontes de inteligência de ameaças livres e de código aberto e fornece links de download direto e resumos ao vivo.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfox.abuse.ch/" target="_blank">threatfox.abuse.ch</a>
        </td>
        <td>
            ThreatFox é uma plataforma livre de abuse.ch com o objetivo de compartilhar indicadores de comprometimento (IOCs) associados a malware com a comunidade infosec, fornecedores de AV e provedores de inteligência ameaça.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatconnect.com/blog/ingest-technical-blogs-reports/" target="_blank">Technical Blogs and Reports, by ThreatConnect</a>
        </td>
        <td>
            Esta fonte está sendo povoada com o conteúdo de mais de 90 blogs de segurança de código aberto. COI (<a href="https://en.wikipedia.org/wiki/Indicator_of_compromise" target="_blank">Indicators of Compromise</a>) são analisados de cada blog e o conteúdo do blog é formatado em markdown.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatjammer.com" target="_blank">Threat Jammer</a>
        </td>
        <td>
            A Threat Jammer é um serviço de API REST que permite aos desenvolvedores, engenheiros de segurança e outros profissionais de TI acessar dados de inteligência de ameaças de alta qualidade de uma variedade de fontes e integrá-los em suas aplicações com o único propósito de detectar e bloquear atividades maliciosas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatminer.org/" target="_blank">ThreatMiner</a>
        </td>
        <td>
            ThreatMiner foi criado para libertar analistas da coleta de dados e fornecer-lhes um portal sobre o qual possam realizar suas tarefas, desde a leitura de relatórios até o pivotamento e o enriquecimento de dados.
            A ênfase da ThreatMiner não se trata apenas de indicadores de comprometimento (ICC), mas também para fornecer aos analistas informações contextuais relacionadas com a CIO que eles estão olhando.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/WSTNPHX/scripts-n-tools/master/malware-email-addresses.txt">WSTNPHX Malware Email Addresses</a>
        </td>
        <td>Endereços de e-mail usados pelo malware coletado por VVestron Phoronix (WSTNPHX)</td>
    </tr>
    <tr>
        <td>
            <a href="https://portal.underattack.today/" target="_blank">UnderAttack.today</a>
        </td>
        <td>UnderAttack é uma plataforma de inteligência gratuita, compartilha IPs e informações sobre eventos e ataques suspeitos. O registo é grátis.</td>
    </tr>
    <tr>
        <td>
            <a href="https://urlhaus.abuse.ch">URLhaus</a>
        </td>
        <td>URLhaus é um projeto de abuse.ch com o objetivo de compartilhar URLs maliciosas que estão sendo usadas para distribuição de malware.</td>
    </tr>
    <tr>
        <td>
            <a href="https://virusshare.com/" target="_blank">VirusShare</a>
        </td>
        <td>
            VirusShare.com é um repositório de amostras de malware para fornecer pesquisadores de segurança, respondedores de incidentes, analistas forenses, e o acesso mórbido curioso a amostras de código malicioso. O acesso ao site é concedido apenas por convite.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://vuldb.com/?actor" target="_blank">VulDB CTI</a>
        </td>
        <td>
            VulDB é um banco de dados de vulnerabilidade que associa atividades do ator e ataca detalhes com vulnerabilidades. A abordagem preditiva ajuda a determinar as atividades emergentes de pesquisa e ataque por atores maliciosos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yara-Rules/rules" target="_blank">Yara-Rules</a>
        </td>
        <td>
            Um repositório de código aberto com assinaturas Yara diferentes que são compilados, classificados e mantidos o mais atualizado possível.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://IOCFeed.mrlooquer.com/" target="_blank">1st Dual Stack Threat Feed by MrLooquer</a>
        </td>
        <td>
Mrlooquer criou o primeiro feed de ameaça focado em sistemas com dupla pilha. Uma vez que o protocolo IPv6 começou a fazer parte de comunicações de malware e fraude, é necessário detectar e mitigar as ameaças em ambos os protocolos (IPv4 e IPv6).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.validin.com/">Validin DNS Database</a>
        </td>
        <td>
            Fonte de inteligência gratuita para informações DNS atuais e históricas, encontrando outros sites associados a certos IPs e conhecimento subdomínio Existe uma <a href="https://app.validin.com/docs">free API for IP and domain intelligence</a> Também. 
        </td>
    </tr>
</table>

## Formatos

Formatos padronizados para compartilhar inteligência contra ameaças (principalmente IOCs).

<table>
    <tr>
        <td>
            <a href="https://capec.mitre.org/" target="_blank">CAPEC</a>
        </td>
        <td>
            O padrão comum de ataque enumeração e classificação (CAPEC) é um dicionário abrangente e taxonomia de classificação de ataques conhecidos que podem ser usados por analistas, desenvolvedores, testadores e educadores para promover a compreensão da comunidade e melhorar as defesas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cyboxproject.github.io/" target="_blank">CybOX</a>
        </td>
        <td>
            A eXpressão observável cibernética (CybOX) a linguagem oferece uma estrutura comum para representar cyberobservables em toda e entre as áreas operacionais da cibersegurança empresarial que melhora a consistência, eficiência e interoperabilidade de ferramentas e processos implantados, bem como aumenta a consciência situacional global, permitindo o potencial de compartilhamento, mapeamento, detecção e heurísticas de análise automatizáveis detalhadas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc5070" target="_blank">IODEF (RFC5070)</a>
        </td>
        <td>
            O Incident Object Description Exchange Format (IODEF) define uma representação de dados que fornece um framework para o compartilhamento de informações comumente trocadas por equipes de resposta de incidentes de segurança de computador (CSIRTs) sobre incidentes de segurança de computador.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc4765" target="_blank">IDMEF (RFC4765)</a>
        </td>
        <td>
            <i>Experimental</i> - O objetivo do Formato de Troca de Mensagens de Detecção de Intrusão (IDMEF) é definir formatos de dados e procedimentos de intercâmbio para compartilhar informações de interesse para sistemas de detecção e resposta de intrusão e para os sistemas de gestão que possam ter de interagir com eles.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maecproject.github.io/" target="_blank">MAEC</a>
        </td>
        <td>
            A enumeração e caracterização dos atributos de malware (MAEC) projetos têm como objetivo criar e fornecer uma linguagem padronizada para compartilhar informações estruturadas sobre malware com base em atributos como comportamentos, artefatos e padrões de ataque.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=openc2" target="_blank">OpenC2</a>
        </td>
        <td>
            OASIS Abrir Comando e Controlo (OpenC)2) Comité Técnico. A OpenC2 O TC baseará seus esforços em artefatos gerados pela OpenC2 Fórum. Antes da criação deste CT e especificação, OpenC2 O Fórum foi uma comunidade de atores da cibersegurança que foi facilitada pela Agência Nacional de Segurança (ANS). A OpenC2 O TC foi fretado para elaborar documentos, speciflicações, léxicos ou outros artefatos para atender as necessidades de comando e controle de segurança cibernética de forma padronizada.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://oasis-open.github.io/cti-documentation/" target="_blank">STIX 2.0</a>
        </td>
        <td>
            A linguagem Structured Threat Information eXpression (STIX) é uma construção padronizada para representar informações sobre ameaças cibernéticas. A linguagem STIX pretende transmitir toda a gama de potenciais informações sobre ameaças cibernéticas e se esforça para ser totalmente expressiva, flexível, extensível e automatizável. STIX não só permite campos de diagnóstico de ferramentas, mas também fornece <i>mecanismos de ensaio</i> que fornecem meios para incorporar a ferramenta-specifelementos ic, incluindo OpenIOC, Yara e Snort. STIX 1.x foi arquivado <a href="https://stixproject.github.io/" target="_blank">here</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://taxiiproject.github.io/" target="_blank">TAXII</a>
        </td>
        <td>
            A troca automática confiável de informações indicadoras (TAXII) padrão define um conjunto de serviços e trocas de mensagens que, quando implementado, permitem o compartilhamento de informações de ameaças cibernéticas acionáveis através de fronteiras de organização e produto / serviço. TAXII define conceitos, protocolos e trocas de mensagens para trocar informações sobre ameaças cibernéticas para a detecção, prevenção e mitigação de ameaças cibernéticas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://veriscommunity.net/index.html" target="_blank">VERIS</a>
        </td>
        <td>
            O vocabulário para gravação de eventos e compartilhamento de incidentes (VERIS) é um conjunto de métricas projetadas para fornecer uma linguagem comum para descrever incidentes de segurança de uma forma estruturada e repetivel. VERIS é uma resposta a um dos desafios mais críticos e persistentes da indústria de segurança - falta de informação de qualidade. Além de fornecer um formato estruturado, VERIS Também recolhe dados da comunidade para reportar violações no Relatório de Investigação sobre a Violação de Dados da Verizon (<a target="_blank" href="http://www.verizonenterprise.com/verizon-insights-lab/dbir/">DBIR</a>) e publica esta base de dados em linha em GitHub <a target="_blank" href="https://github.com/vz-risk/VCDB">repository.org</a>.
        </td>
    </tr>
</table>

## Frameworks e plataformas

Frameworks, plataformas e serviços para coletar, analisar, criar e compartilhar inteligência contra ameaças.

<table>
    <tr>
        <td>
            <a href="https://github.com/abusesa/abusehelper" target="_blank">AbuseHelper</a>
        </td>
        <td>
            AbuseHelper é um framework de código aberto para receber e redistribuir informações sobre abuso e ameaças.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://abuse.io/" target="_blank">AbuseIO</a>
        </td>
        <td>
            Um kit de ferramentas para receber, processar, correlacionar e notificar os usuários finais sobre relatórios de abuso, consumindo assim feeds de inteligência ameaça.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cisa.gov/ais" target="_blank">AIS</a>
        </td>
        <td>
            Partilha automática de indicadores da Agência de Segurança Cibernética e Infraestrutura (CISA) (AIS) a capacidade permite o intercâmbio de indicadores de ameaças cibernéticas entre o governo federal e o setor privado em velocidade de máquina. Indicadores de ameaça são informações como endereços IP maliciosos ou o endereço de remetente de um e-mail phishing (embora eles também possam ser muito mais complicados).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/csirtgadgets/bearded-avenger" target="_blank">Bearded Avenger</a>
        </td>
        <td>
            A maneira mais rápida de consumir informações sobre ameaças. Sucessor CIF.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.blueliv.com/" target="_blank">Blueliv Threat Exchange Network</a>
        </td>
        <td>
            Permite que os participantes compartilhem indicadores de ameaça com a comunidade.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Cortex" target="_blank">Cortex</a>
        </td>
        <td>
            Cortex permite que os observáveis, tais como IPs, endereços de e-mail, URLs, nomes de domínio, arquivos ou hashes, sejam analisados um por um ou em modo a granel usando uma única interface web. A interface web atua como um frontend para numerosos analisadores, removendo a necessidade de integrar estes durante a análise. Os analistas também podem usar a API Cortex REST para automatizar partes de suas análises.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://crits.github.io/" target="_blank">CRITS</a>
        </td>
        <td>
            CRITS é uma plataforma que fornece aos analistas os meios para realizar pesquisas colaborativas sobre malware e ameaças. Ele se conecta a um repositório centralizado de dados de inteligência, mas também pode ser usado como uma instância privada.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://csirtgadgets.org/collective-intelligence-framework" target="_blank">CIF</a>
        </td>
        <td>
            O Quadro de Inteligência Coletiva (CIF) permite combinar informações conhecidas de ameaças maliciosas de muitas fontes e usar essas informações para RI, detecção e mitigação. Código disponível em <a href="https://github.com/csirtgadgets/massive-octo-spice" target="_blank">GitHub</a>.
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/ctix-stix-taxii-cyber-threat-intelligence-exchange" target="_blank">CTIX</a>
        </td>
        <td>
            CTIX é uma plataforma inteligente de inteligência de ameaça cliente-servidor (TIP) para ingestão, enriquecimento, análise e compartilhamento bidirecional de dados de ameaça dentro de sua rede confiável.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.eclecticiq.com/platform" target="_blank">EclecticIQ Platform</a>
        </td>
        <td>
            EclecticIQ Platform é um STIX/TAXII Plataforma de Inteligência de Ameaça baseada (TIP) que capacita analistas de ameaça para executar investigações mais rápidas, melhores e mais profundas ao mesmo tempo que divulga inteligência em velocidade de máquina.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.enisa.europa.eu/topics/csirt-cert-services/community-projects/incident-handling-automation" target="_blank">IntelMQ</a>
        </td>
        <td>
            IntelMQ é uma solução para CERTs para coleta e processamento de feeds de segurança, pastebins, tweets usando um protocolo de fila de mensagens. Trata-se de uma iniciativa comunitária denominada IHAP (Incident Handling Automation Project), concebida conceptualmente pelos CERTs europeus durante vários eventos da InfoSec. Seu principal objetivo é dar aos respondedores de incidentes uma maneira fácil de coletar e processar inteligência de ameaças, melhorando assim os processos de manuseio de incidentes de CERTs.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/intelowlproject/IntelOwl/" target="_blank">IntelOwl</a>
        </td>
        <td>
            Intel Owl é uma solução OSINT para obter dados de inteligência de ameaça sobre uma especifarquivo ic, um IP ou um domínio de uma única API em escala. Intel Owl é composto por analisadores que podem ser executados para recuperar dados de fontes externas (como VirusTotal ou AbuseIPDB) ou gerar informações de analisadores internos (como Yara ou Oletools). Ele pode ser integrado facilmente em sua pilha de ferramentas de segurança (<a href="https://github.com/intelowlproject/pyintelowl" target="_blank">pyintelowl</a>) para automatizar trabalhos comuns geralmente realizados, por exemplo, por analistas SOC manualmente.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.kaspersky.com/enterprise-security/threat-intelligence" target="_blank">Kaspersky Threat Intelligence Portal</a>
        </td>
        <td>
            Um site que fornece uma base de conhecimento descrevendo ameaças cibernéticas, objetos legítimos e seus relacionamentos, reunidos em um único serviço web. Subscrever o Portal de Inteligência de Ameaça do Laboratório Kaspersky fornece um único ponto de entrada para quatro serviços complementares: Feeds de Dados de Ameaça Kaspersky, Relatório de Inteligência de Ameaça, Ameaça Kaspersky Lookup e Kaspersky Research Sandbox, todos disponíveis em formatos legíveis por humanos e legíveis por máquinas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/malstrom" target="_blank">Malstrom</a>
        </td>
        <td>
            Malstrom pretende ser um repositório para rastreamento de ameaças e artefatos forenses, mas também armazena regras e notas de YARA para investigação. Nota: Github projeto foi arquivado (nenhuma nova contribuição aceita).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stratosphereips/Manati" target="_blank">ManaTI</a>
        </td>
        <td>
            A ManaTI o projeto auxilia o analista de ameaças empregando técnicas de machine learning que encontram novos relacionamentos e inferências automaticamente.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://django-mantis.readthedocs.io/en/latest/" target="_blank">MANTIS</a>
        </td>
        <td>
            Análise baseada em modelos de fontes de informação sobre ameaças (MANTIS) Cyber Threat Intelligence Management Framework apoia a gestão de ciber-inteligência de ameaça expressa em várias línguas padrão, como STIX e CybOXÉ, sim. *não* Prontos para produção em larga escala.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cert-se/megatron-java" target="_blank">Megatron</a>
        </td>
        <td>
            Megatron é uma ferramenta implementada pelo CERT-SE que coleta e analisa IPs ruins, pode ser usado para calcular estatísticas, converter e analisar arquivos de log e em abuso e manipulação de incidentes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/PaloAltoNetworks/minemeld/wiki" target="_blank">MineMeld</a>
        </td>
        <td>
            Um extenso framework de processamento da Threat Intelligence criou a Palo Alto Networks.
            Pode ser utilizado para manipular listas de indicadores e transformá-las e/ou adicioná-las para consumo por infra-estrutura de execução de terceiros.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.misp-project.org/" target="_blank">MISP</a>
        </td>
        <td>
            A Plataforma de Partilha de Informação do Malware (MISP) é uma solução de software de código aberto para coletar, armazenar, distribuir e compartilhar indicadores de segurança cibernética e análise de malware.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CERT-Polska/n6" target="_blank">n6</a>
        </td>
        <td>
            n6 (Network Security Incident eXchange) é um sistema para coletar, gerenciar e distribuir informações de segurança em larga escala. A distribuição é realizada através de uma API REST simples e uma interface web que os usuários autorizados podem usar para receber vários tipos de dados, em particular informações sobre ameaças e incidentes em suas redes. É desenvolvido por <a href="https://www.cert.pl/en/" target="_blank">CERT Polska</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ocsf.io/" target="_blank">Open Cybersecurity Schema Framework (OCSF)</a>
        </td>
        <td>
            O Open Cybersecurity Schema Framework é um projeto de código aberto, fornecendo um framework extensível para o desenvolvimento de esquemas, juntamente com um esquema de segurança central diagnóstico de fornecedores. Os fornecedores e outros produtores de dados podem adoptar e alargar o esquema para a sua especifica domínios. Engenheiros de dados podem mapear esquemas diferentes para ajudar equipes de segurança a simplificar a ingestão e normalização de dados, para que cientistas e analistas de dados possam trabalhar com uma linguagem comum para detecção e investigação de ameaças. O objetivo é fornecer um padrão aberto, adotado em qualquer ambiente, aplicação ou solução, enquanto complementa os padrões de segurança e processos existentes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opencti.io/en/" target="_blank">OpenCTI</a>
        </td>
        <td>
            OpenCTI, a plataforma Open Cyber Threat Intelligence, permite que as organizações gerenciem seus conhecimentos e observáveis de inteligência ciberameaça. Seu objetivo é estruturar, armazenar, organizar e visualizar informações técnicas e não técnicas sobre ameaças cibernéticas. Os dados são estruturados em torno de um esquema de conhecimento baseado no STIX2 normas. OpenCTI pode ser integrado com outras ferramentas e plataformas, incluindo MISP, A Colmeia e MITRE ATT&CK, a.o.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware.html" target="_blank">OpenIOC</a>
        </td>
        <td>
            OpenIOC é um quadro aberto para partilhar informações sobre ameaças. Ele é projetado para trocar informações de ameaça tanto interna quanto externamente em um formato digestível por máquina.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/OpenTAXII" target="_blank">OpenTAXII</a>
        </td>
        <td>
            OpenTAXII é uma implementação robusta de Python TAXII Serviços que oferecem um rico conjunto de recursos e uma amigável API Pythonic construída em cima de um aplicativo bem projetado.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Ptr32Void/OSTrICa" target="_blank">OSTrICa</a>
        </td>
        <td>
            Um framework orientado para plugins de código aberto para coletar e visualizar informações de inteligência de ameaças.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://otx.alienvault.com" target="_blank">OTX - Open Threat Exchange</a>
        </td>
        <td>
            AlienVault Open Threat Exchange (OTX) oferece acesso aberto a uma comunidade global de pesquisadores de ameaças e profissionais de segurança. Ele fornece dados de ameaça gerados pela comunidade, permite pesquisa colaborativa e automatiza o processo de atualização de sua infraestrutura de segurança com dados de ameaça de qualquer fonte.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Lookingglass/opentpx/" target="_blank">Open Threat Partner eXchange</a>
        </td>
        <td>
            A Open Threat Partner eXchange (OpenTPX) consiste em um formato de código aberto e ferramentas para a troca de informações de ameaças legíveis por máquina e operações de segurança de rede. É um formato baseado em JSON que permite o compartilhamento de dados entre sistemas conectados.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.riskiq.com/" target="_blank">PassiveTotal</a>
        </td>
        <td>
            A PassiveTotal plataforma oferecida pelo RiskIQ é uma plataforma de análise de ameaças que fornece aos analistas o máximo de dados possível para evitar ataques antes que eles aconteçam. São oferecidos vários tipos de soluções, bem como integrações (APIs) com outros sistemas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pulsedive.com/" target="_blank">Pulsedive</a>
        </td>
        <td>
            Pulsedive é uma plataforma gratuita de inteligência de ameaças comunitárias que está consumindo feeds de código aberto, enriquecendo os COIs, e executando-os através de um algoritmo de pontuação de risco para melhorar a qualidade dos dados. Permite aos usuários submeter, pesquisar, correlacionar e atualizar COIs; lista "fatores de risco" para o porquê os COIs são de maior risco; e fornece uma visão de alto nível de ameaças e atividade de ameaça.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.recordedfuture.com/" target="_blank">Recorded Future</a>
        </td>
        <td>
            O futuro gravado é um produto premium da SaaS que unifica automaticamente a inteligência de ameaça de fontes abertas, fechadas e técnicas em uma única solução. Sua tecnologia usa processamento de linguagem natural (NLP) e aprendizado de máquina para fornecer essa inteligência de ameaça em tempo real — tornando o futuro gravado uma escolha popular para equipes de segurança de TI.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Netflix/Scumblr" target="_blank">Scumblr</a>
        </td>
        <td>
            Scumblr é uma aplicação web que permite realizar sincronização periódica de fontes de dados (como Github repositórios e URLs) e realização de análises (como análise estática, verificações dinâmicas e coleta de metadados) sobre os resultados identificados.
            O Scumblr ajuda você a simplificar a segurança proativa através de um framework de automação inteligente para ajudá-lo a identificar, rastrear e resolver problemas de segurança mais rápido.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.anomali.com/platform/staxx" target="_blank">STAXX (Anomali)</a>
        </td>
        <td>
            Anomali STAXXTM dá-lhe uma forma gratuita e fácil de subscrever qualquer STIX/TAXII ração. Basta baixar o cliente STAXX, configurar suas fontes de dados, e STAXX irá lidar com o resto.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://stoq.punchcyber.com/" target="_blank">stoQ</a>
        </td>
        <td>
            stoQ é um framework que permite aos analistas cibernéticos organizar e automatizar tarefas repetitivas e orientadas a dados. Ele possui plugins para muitos outros sistemas para interagir.
            Um caso de uso é a extração de COI de documentos, um exemplo dos quais é mostrado <a href="https://stoq-framework.blogspot.nl/2016/04/operationalizing-indicators.html" target="_blank">here</a>, mas também pode ser usado para desobstruçãog e decodificação de conteúdo e digitalização automatizada com YARA, por exemplo.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/tripwire/tardis" target="_blank">TARDIS</a>
        </td>
        <td>
            A Análise de Ameaças, Reconnaise Sistema de Informação de Dados (TARDIS) é um framework de código aberto para realizar pesquisas históricas usando assinaturas de ataque.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatconnect.com/" target="_blank">ThreatConnect</a>
        </td>
        <td>
            ThreatConnect é uma plataforma com capacidades de inteligência, análise e orquestração de ameaças. Ele é projetado para ajudar você a coletar dados, produzir inteligência, compartilhá-los com outros, e tomar medidas sobre ele.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatcrowd.org/" target="_blank">ThreatCrowd</a>
        </td>
        <td>
            ThreatCrowd é um sistema para encontrar e pesquisar artefatos relacionados com ameaças cibernéticas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatpipes.com" target="_blank">ThreatPipes</a>
        </td>
        <td>
            Fica dois passos à frente dos teus adversários. Obtenha uma visão completa de como eles vão explorá-lo.
            <br />
            ThreatPipes é um reconhecimentoaisferramenta de sance que consulta automaticamente 100 de fontes de dados para coletar inteligência em endereços IP, nomes de domínio, endereços de e-mail, nomes e muito mais.
            <br />
            Você simplesmente especify o alvo que você deseja investigar, escolha quais módulos habilitar e então ThreatPipes coletará dados para construir uma compreensão de todas as entidades e como elas se relacionam.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://developers.facebook.com/docs/threat-exchange/" target="_blank">ThreatExchange</a>
        </td>
        <td>
            Facebook criado ThreatExchange para que as organizações participantes possam compartilhar dados de ameaça usando uma API conveniente, estruturada e fácil de usar que forneça controles de privacidade para permitir o compartilhamento com apenas grupos desejados. Este projecto ainda está em curso <b>beta</b>. Código de referência <a href="https://github.com/facebook/ThreatExchange" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/typedb-osi/typedb-cti" target="_blank">TypeDB CTI</a>
        </td>
        <td>
		Dados do TipoDB - A CTI é uma plataforma de inteligência de ameaças de código aberto para as organizações armazenarem e gerenciarem seus conhecimentos de inteligência de ameaças cibernéticas (CTI). Ele permite que os profissionais de inteligência de ameaça reúnam suas informações CTI díspares em uma base de dados e encontrem novos insights sobre ameaças cibernéticas. Este repositório fornece um esquema baseado em STIX2, e contém MITRE ATT&CK como um conjunto de dados de exemplo para começar a explorar esta plataforma de inteligência de ameaças. Mais neste <a href="https://blog.vaticle.com/introducing-a-knowledge-graph-for-cyber-threat-intelligence-with-typedb-bdb559a92d2a" target="_blank">blog post</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://beta.virusbay.io/" target="_blank">VirusBay</a>
        </td>
        <td>
            VirusBay é uma plataforma de colaboração baseada na web que conecta profissionais do centro de operações de segurança (SOC) com pesquisadores de malware relevantes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/brianwarehime/threatnote" target="_blank">threatnote.io</a>
        </td>
        <td>
            O novo e melhorado threatnote.io - Uma ferramenta para analistas e equipes de CTI para gerenciar os requisitos de inteligência, relatórios e processos de CTI em uma plataforma única
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exchange.xforce.ibmcloud.com/" target="_blank">XFE - X-Force Exchange</a>
        </td>
        <td>
            O X-Force Exchange (XFE) da IBM XFE é um produto SaaS gratuito que você pode usar para pesquisar informações de inteligência sobre ameaças, coletar suas descobertas e compartilhar seus insights com outros membros da comunidade XFE.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://yeti-platform.github.io/" target="_blank">Yeti</a>
        </td>
        <td>
            O repositório de inteligência de ameaças aberto, distribuído, máquina e analista. Feito por e para respondedores de incidentes.
        </td>
    </tr>
</table>



## Ferramentas

Ferramentas variadas para analisar, criar e editar inteligência contra ameaças, principalmente com base em IOCs.

<table>
    <tr>
        <td>
            <a href="https://github.com/jalewis/actortrackr" target="_blank">ActorTrackr</a>
        </td>
        <td>
            ActorTrackr é um aplicativo web de código aberto para armazenar/pesquisar/ligar dados relacionados ao ator. As fontes primárias são de usuários e vários repositórios públicos. Fonte disponível em <a href="https://github.com/jalewis/actortrackr" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/camp0/aiengine" target="_blank">AIEngine</a>
        </td>
        <td>
            AIEngine é um motor de inspeção de pacotes Python/Ruby/Java/Lua de próxima geração com capacidades de aprendizagem sem qualquer intervenção humana, funcionalidade NIDS(Network Intrusion Detection System), classificação de domínio DNS, coletor de rede, forenses de rede e muitos outros.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/referefref/aiocrioc" target="_blank">AIOCRIOC</a>
        </td>
        <td>
            Inteligência artificial Indicador de reconhecimento de caracteres oculares de compromisso (AIOCRIOC) é uma ferramenta que combina raspagem web, o OCR capacidades de Tesseract e OpenAI compatível LLM API como GPT-4 para analisar e extrair IOCs de relatórios e outros conteúdos web, incluindo imagens incorporadas com dados contextuais.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://analyze.intezer.com" target="_blank">Analyze (Intezer)</a>
        </td>
        <td>
            Analyze é uma plataforma de análise de malware tudo-em-um que é capaz de realizar análise estática, dinâmica e genética de código em todos os tipos de arquivos. Os usuários podem rastrear famílias de malware, extrair COIs/MITRE TTPs e baixar assinaturas YARA. Há uma edição comunitária para começar de graça.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/1aN0rmus/TekDefense-Automater" target="_blank">Automater</a>
        </td>
        <td>
            Automater é uma ferramenta URL/Domain, IP Address e Md5 Hash OSINT que visa tornar o processo de análise mais fácil para os analistas de intrusão.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/svdwi/BlueBox" target="_blank">BlueBox</a>
        </td>
        <td>
            BlueBox é uma solução OSINT para obter dados de inteligência sobre ameaçascific arquivo, um IP, um domínio ou URL e analisá-los.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://botscout.com/">BotScout</a>
        </td>
        <td>
            BotScout ajuda a evitar que scripts automatizados, conhecidos como "bots", registem-se em fóruns, bancos de dados poluidores, espalhem spam e abusam de formulários em sites.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/bro-intel-generator" target="_blank">bro-intel-generator</a>
        </td>
        <td>
            Script para gerar arquivos de informações Bro de relatórios pdf ou html.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/cabby" target="_blank">cabby</a>
        </td>
        <td>
            Uma biblioteca simples em Python para interagir com TAXII servidores.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/cacador" target="_blank">cacador</a>
        </td>
        <td>
            Cacador é uma ferramenta escrita em Go para extrair indicadores comuns de comprometimento de um bloco de texto.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/combine" target="_blank">Combine</a>
        </td>
        <td>
            Combine reúne Feeds de Inteligência de Ameaça de fontes publicamente disponíveis.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CrowdStrike/CrowdFMS" target="_blank">CrowdFMS</a>
        </td>
        <td>
            CrowdFMS é um framework para automatizar coleta e processamento de amostras do VirusTotal, aproveitando o sistema API Private.
            O framework baixa automaticamente amostras recentes, o que desencadeou um alerta sobre o feed de notificação YARA dos usuários.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-transmute.org/" target="_blank">CTI-Transmute</a>
        </td>
        <td>
            CTI-Transmute é uma ferramenta para converter dados de Cyber Threat Intelligence (CTI) entre MISP e formatos STIX. Ele fornece um conjunto de endpoints de API que permitem a conversão automatizada de dados, tornando mais fácil integrar diferentes plataformas de inteligência de ameaça e fluxos de trabalho. Fonte disponível em <a href="https://github.com/MISP/cti-transmute" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cuckoosandbox/cuckoo" target="_blank">Cuckoo Sandbox</a>
        </td>
        <td>
            Cuckoo Sandbox é um sistema de análise de malware dinâmico automatizado. É a mais conhecida sandbox de análise de malware de código aberto e é frequentemente implantada por pesquisadores, equipes CERT/SOC e equipes de inteligência de ameaças em todo o mundo. Para muitas organizações Cuckoo Sandbox fornece uma primeira visão sobre amostras de malware em potencial.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cybergordon.com/" target="_blank">CyberGordon</a>
        </td>
        <td>
            CyberGordon é um mecanismo de busca de informações sobre ameaças. Ele alavanca 30+ fontes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CylanceSPEAR/CyBot" target="_blank">CyBot</a>
        </td>
        <td>
            CyBot é um bot de bate-papo da inteligência. Ele pode executar vários tipos de lookups oferecidos por módulos personalizados.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Fenrir" target="_blank">Fenrir</a>
        </td>
        <td>
            Scanner IOC Bash simples.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/FireHOL-IP-Aggregator" target="_blank">FireHOL IP Aggregator</a>
        </td>
        <td>
            Pedido para manter feeds de FireHOL <a href="https://github.com/firehol/blocklist-ipsets" target="_blank">blocklist-ipsets</a> com o histórico de aparência de endereços IP. O serviço de API baseado em HTTP é desenvolvido para pedidos de pesquisa.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/Forager" target="_blank">Forager</a>
        </td>
        <td>
            Um guião multithreaded de caçador-coletor de ameaças.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.gigasheet.co" target="_blank">Gigasheet</a>
        </td>
        <td>
            Gigasheet é um produto SaaS usado para analisar conjuntos de dados de segurança cibernética. Importar arquivos de log maciços, netflow, pcaps, big CSVs e mais.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/BinaryDefense/goatrider" target="_blank">GoatRider</a>
        </td>
        <td>
            GoatRider é uma ferramenta simples que irá dinamicamente puxar para baixo Artillery Threat Intelligence Feeds, TOR, AlienVaults OTX, e o Alexa top 1 milhão de sites e fazer uma comparação com um arquivo hostname ou arquivo IP.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cse.google.com/cse/publicurl?cx=003248445720253387346:turlh5vi4xc" target="_blank">Google APT Search Engine</a>
        </td>
        <td>
            Grupos APT, Operações e Motor de Busca de Malware. As fontes utilizadas para esta pesquisa personalizada do Google estão listadas em <a href="https://gist.github.com/Neo23x0/c4f40629342769ad0a8f3980942e21d3" target="_blank">this</a> GitHub A essência.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ciscocsirt/gosint" target="_blank">GOSINT</a>
        </td>
        <td>
            A GOSINT o framework é um projeto gratuito utilizado para coleta, processamento e exportação de indicadores públicos de compromisso de alta qualidade (IOCs).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://hashdd.com/" target="_blank">hashdd</a>
        </td>
        <td>
            Uma ferramenta para lookup informações relacionadas a partir do valor do hash critográfico
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/harbinger" target="_blank">Harbinger Threat Intelligence</a>
        </td>
        <td>
            Programa Python que permite consultar múltiplos agregadores de ameaças online a partir de uma única interface.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Hippocampe" target="_blank">Hippocampe</a>
        </td>
        <td>
            Hippocampe agrega os feeds de ameaça da Internet em um cluster Elasticsearch. Tem uma API REST que permite pesquisar em sua 'memória'. É baseado em um script Python que obtém URLs correspondentes a feeds, análise e índices deles.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/S03D4-164/Hiryu" target="_blank">Hiryu</a>
        </td>
        <td>
            Uma ferramenta para organizar informações de campanha do APT e visualizar relações entre COIs.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/ioc-editor.html" target="_blank">IOC Editor</a>
        </td>
        <td>
            Um editor gratuito para Indicadores de Compromisso (IOCs).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/ioc-finder" target="_blank">IOC Finder</a>
        </td>
        <td>
            Biblioteca Python para encontrar indicadores de compromisso em texto. Usa gramáticas em vez de regexes para melhor compreensão. A partir de fevereiro de 2019, analisa mais de 18 tipos de indicadores.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ioc-fang/ioc_fanger" target="_blank">IOC Fanger (and Defanger)</a>
        </td>
        <td>
            Biblioteca em Python para abanar (`hXXp://example[.]com` => `http://example.com`) e defanging (`http://example.com` => `hXXp://example[.]com`) indicadores de compromisso no texto.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/armbues/ioc_parser" target="_blank">ioc_parser</a>
        </td>
        <td>
            Ferramenta para extrair indicadores de compromisso de relatórios de segurança em formato PDF.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mandiant/ioc_writer" target="_blank">ioc_writer</a>
        </td>
        <td>
            Fornece uma biblioteca Python que permite a criação e edição básicas de OpenIOC objectos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/python-iocextract" target="_blank">iocextract</a>
        </td>
        <td>
            Extrai URLs, endereços IP, hashes MD5/SHA, endereços de e-mail e regras YARA de corpora de texto. Inclui alguns COI codificados e “defanged” na saída, e opcionalmente decodifica/refangs-los.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stephenbrannon/IOCextractor" target="_blank">IOCextractor</a>
        </td>
        <td>
            IOC (Indicador de Compromisso) Extractor é um programa para ajudar a extrair IOCs de arquivos de texto. O objetivo geral é acelerar o processo de análise de dados estruturados (COI) a partir de dados não estruturados ou semiestruturados
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/johestephan/ibmxforceex.checker.py" target="_blank">ibmxforceex.checker.py</a>
        </td>
        <td>
            Cliente Python para a Bolsa IBM X-Force.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/jager" target="_blank">jager</a>
        </td>
        <td>
            Jager é uma ferramenta para puxar COI úteis (indicadores de compromisso) de várias fontes de entrada (PDFs por enquanto, texto simples muito em breve, páginas web eventualmente) e colocá-los em um formato JSON fácil de manipular.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/13850" target="_blank">Kaspersky CyberTrace</a>
        </td>
        <td>
            Ferramenta de análise e fusão de inteligência de ameaças que integra dados de ameaças com soluções SIEM. Os usuários podem imediatamente alavancar a inteligência de ameaça para atividades de monitoramento de segurança e relatório de incidentes (IR) no fluxo de trabalho de suas operações de segurança existentes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/KasperskyLab/klara" target="_blank">KLara</a>
        </td>
        <td>
            KLara, um sistema distribuído escrito em Python, permite aos pesquisadores digitalizar uma ou mais regras de Yara sobre coleções com amostras, recebendo notificações por e-mail, bem como a interface web quando os resultados da varredura estão prontos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/libtaxii" target="_blank">libtaxii</a>
        </td>
        <td>
            Uma biblioteca em Python para manipulação TAXII Mensagens invocadas TAXII Serviços.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Loki" target="_blank">Loki</a>
        </td>
        <td>
            Scanner de resposta simples de COI e incidentes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/ssanthosh243/ip-lookup-docker" target="_blank">LookUp</a>
        </td>
        <td>
            LookUp é uma página centralizada para obter várias informações sobre ameaças sobre um endereço IP. Ele pode ser integrado facilmente em menus de contexto de ferramentas como SIEMs e outras ferramentas de investigação.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/HurricaneLabs/machinae" target="_blank">Machinae</a>
        </td>
        <td>
            Machinae é uma ferramenta para coletar informações de sites/feeds públicos sobre vários dados relacionados à segurança: endereços IP, nomes de domínio, URLs, endereços de e-mail, hashes de arquivos e impressões digitais SSL.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/silascutler/MalPipe" target="_blank">MalPipe</a>
        </td>
        <td>
            Framework de coleta e processamento de malware modular (e indicador). Ele é projetado para puxar malware, domínios, URLs e endereços IP de vários feeds, enriquecer os dados coletados e exportar os resultados.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/misp-workbench" target="_blank">MISP Workbench</a>
        </td>
        <td>
            Ferramentas para exportar dados do MISP Banco de dados MySQL e usá-los e abusar fora desta plataforma.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/MISP-Taxii-Server" target="_blank">MISP-Taxii-Server</a>
        </td>
        <td>
            Um conjunto de ficheiros de configuração a usar com o EclecticIQ OpenTAXII implementação, juntamente com uma chamada de retorno para quando os dados são enviados para TAXII A caixa de entrada do servidor.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/microsoft/msticpy" target="_blank">MSTIC Jupyter and Python Security Tools</a>
        </td>
        <td>
            msticpy é uma biblioteca para investigação e caça do InfoSec em Jupyter Notebooks. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/paulpc/nyx" target="_blank">nyx</a>
        </td>
        <td>
            O objetivo deste projeto é facilitar a distribuição de artefatos da Threat Intelligence para sistemas de defesa e aumentar o valor derivado de ferramentas de código aberto e comerciais.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/onemillion" target="_blank">OneMillion</a>
        </td>
        <td>
            Biblioteca Python para determinar se um domínio está no topo Alexa ou Cisco, um milhão de listas de domínios.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/STIXProject/openioc-to-stix" target="_blank">openioc-to-stix</a>
        </td>
        <td>
            Gerar o XML STIX de OpenIOC XML.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/omnibus" target="_blank">Omnibus</a>
        </td>
        <td>
            Omnibus é um aplicativo interativo de linha de comando para coletar e gerenciar COIs/artefatos (IPs, Domínios, Endereços de Email, Nomes de Usuário e Endereços Bitcoin), enriquecendo esses artefatos com dados do OSINT de fontes públicas, e fornecendo os meios para armazenar e acessar esses artefatos de forma simples.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kx499/ostip/wiki" target="_blank">OSTIP</a>
        </td>
        <td>
            Uma plataforma de dados de ameaças caseiras.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mgeide/poortego" target="_blank">poortego</a>
        </td>
        <td>
            Projeto de código aberto para lidar com o armazenamento e ligação de inteligência de código aberto (ala Maltego, mas livre como na cerveja e não ligado a uma specific / base de dados proprietária). Originalmente desenvolvido em rubi, mas nova base de código completamente reescrita em python.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/yahoo/PyIOCe" target="_blank">PyIOCe</a>
        </td>
        <td>
            PyIOCe é uma IOC editor escrita em Python.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/QTek/QRadio" target="_blank">QRadio</a>
        </td>
        <td>
            QRadio é uma ferramenta/framework projetada para consolidar fontes de inteligência de ameaças cibernéticas.
            O objetivo do projeto é estabelecer uma estrutura modular robusta para extração de dados de inteligência de fontes vetadas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/aboutsecurity/rastrea2r" target="_blank">rastrea2r</a>
        </td>
        <td>
            Recolha e caça para indicadores de compromisso (IOC) com estilo e estilo!
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/redline.html" target="_blank">Redline</a>
        </td>
        <td>
            Uma ferramenta de investigação de hospedeiros que pode ser utilizada para, entre outros, análise de COI.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ocmdev/rita" target="_blank">RITA</a>
        </td>
        <td>
            Análise de Ameaças de Inteligência (RITA) destina-se a ajudar na procura de indicadores de compromisso em redes empresariais de dimensão variável.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/softrace" target="_blank">Softrace</a>
        </td>
        <td>
            Ligeira Biblioteca Nacional de Referência de Software Armazenamento RDS.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/0x4d31/sqhunter" target="_blank">sqhunter</a>
        </td>
        <td>
            Caçador de ameaças baseado em Osquery, Salt Open e Cymon API. Ele pode consultar soquetes de rede abertos e confirmá-los contra fontes de inteligência ameaça
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SecurityRiskAdvisors/sra-taxii2-server" target="_blank">SRA TAXII2 Server</a>
        </td>
        <td>
            Completo TAXII 2.0 specifservidor de Ication implementado no Node JS com infraestrutura MongoDB.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://stixvalidator.com" target="_blank">Stixvalidator.com</a>
        </td>
        <td>
            Stixvalidator.com é um STIX online grátis e STIX2 serviço de validação.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/traut/stixview" target="_blank">Stixview</a>
        </td>
        <td>
            Stixview é uma biblioteca JS para a integração interativa STIX2 gráficos.
        </td>
    </tr>
	<tr>
        <td>
            <a href="https://github.com/STIXProject/stix-viz" target="_blank">stix-viz</a>
        </td>
        <td>
            Ferramenta de visualização STIX.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://test.taxiistand.com/" target="_blank">TAXII Test Server</a>
        </td>
        <td>
            Permite testar a sua TAXII ambiente, conectando-se aos serviços prestados e desempenhando as diferentes funções como escrito no TAXII specifMarcações.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jpsenior/threataggregator" target="_blank">threataggregator</a>
        </td>
        <td>
            O Aggregador de Ameaças agrega ameaças de segurança de várias fontes online e saídas para vários formatos, incluindo as regras CEF, Snort e IPTables.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcrowd_api" target="_blank">threatcrowd_api</a>
        </td>
        <td>
            Biblioteca Python para ThreatCrowdA API.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcmd" target="_blank">threatcmd</a>
        </td>
        <td>
            Interface Cli para ThreatCrowd.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/syphon1c/Threatelligence" target="_blank">Threatelligence</a>
        </td>
        <td>
            Threatelligence é um simples coletor de feed de inteligência de ameaças cibernéticas, usando Elasticsearch, Kibana e Python para coletar automaticamente inteligência de fontes personalizadas ou públicas. Atualiza automaticamente os feeds e tenta melhorar ainda mais os dados para painéis. No entanto, os projectos parecem deixar de ser mantidos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/ThreatIngestor" target="_blank">ThreatIngestor</a>
        </td>
        <td>
            Framework flexível, orientado à configuração e extensível para consumir inteligência de ameaça. ThreatIngestor pode assistir ao Twitter, feeds RSS e outras fontes, extrair informações significativas como IPs/domínios C2 e assinaturas YARA, e enviar essas informações para outros sistemas para análise.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://chrome.google.com/webstore/detail/threatpinch-lookup/ljdgplocfnmnofbhpkjclbefmjoikgke" target="_blank">ThreatPinch Lookup</a>
        </td>
        <td>
            Uma extensão para o Chrome que cria popups hover em cada página para IPv4, MD5, SHA2 e CVEs. Pode ser utilizado para lookups durante as investigações sobre ameaças.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/michael-yip/ThreatTracker" target="_blank">ThreatTracker</a>
        </td>
        <td>
            Um script Python projetado para monitorar e gerar alertas em determinados conjuntos de COI indexados por um conjunto de Google Custom Search Engines.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yelp/threat_intel" target="_blank">threat_intel</a>
        </td>
        <td>
            Várias APIs para a Threat Intelligence integradas em um único pacote. Estão incluídos: OpenDNS Investigate, VirusTotal e ShadowServer.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/abhinavbom/Threat-Intelligence-Hunter" target="_blank">Threat-Intelligence-Hunter</a>
        </td>
        <td>
            TIH é uma ferramenta de inteligência que ajuda você a procurar COIs em vários feeds de segurança abertamente disponíveis e em algumas APIs bem conhecidas. A ideia por trás da ferramenta é facilitar a busca e armazenamento de COIs frequentemente adicionados para criar seu próprio banco de dados local de indicadores.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/tiq-test" target="_blank">tiq-test</a>
        </td>
        <td>
            A ferramenta de teste Threat Intelligence Quocient (TIQ) fornece visualização e análise estatística de feeds de TI.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/yeti" target="_blank">YETI</a>
        </td>
        <td>
            YETI é uma prova-de-conceito implementação de TAXII que suporta os serviços Inbox, Poll e Discovery definidos pelo TAXII Serviços SpecifIcação.
        </td>
    </tr>
</table>



## <a name="research"></a>Pesquisa, normas e livros

Materiais de leitura sobre inteligência contra ameaças, incluindo pesquisas (científicas) e white papers.

<table>
    <tr>
        <td>
            <a href="https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections" target="_blank">APT & Cyber Criminal Campaign Collection</a>
        </td>
        <td>
            Ampla coleção de campanhas (históricas). As inscrições vêm de várias fontes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kbandla/APTnotes" target="_blank">APTnotes</a>
        </td>
        <td>
            Uma grande coleção de fontes sobre <i>Ameaças Persistentes Avançadas</i> (APTs). Esses relatórios geralmente incluem conhecimentos ou conselhos estratégicos e táticos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://attack.mitre.org/" target="_blank">ATT&CK</a>
        </td>
        <td>
            Táticas Adversárias, Técnicas e Conhecimento Comum (ATT&CKTM) é um modelo e framework para descrever as ações que um adversário pode tomar enquanto opera dentro de uma rede empresarial. ATT&CK é uma referência comum em constante crescimento para técnicas pós-acesso que traz maior consciência de quais ações podem ser vistas durante uma intrusão de rede. MITRE está trabalhando ativamente na integração com constructos relacionados, como CAPEC, STIX e MAEC.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.activeresponse.org/building-threat-hunting-strategy-with-the-diamond-model/" target="_blank">Building Threat Hunting Strategies with the Diamond Model</a>
        </td>
        <td>
            Blogpost de Sergio Caltagirone sobre como desenvolver estratégias inteligentes de caça a ameaças usando o Diamond Model.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://car.mitre.org/wiki/Main_Page" target="_blank">Cyber Analytics Repository by MITRE</a>
        </td>
        <td>
            O Cyber Analytics Repository (CAR) é uma base de conhecimento de análise desenvolvida pela MITRE com base nas táticas adversárias, técnicas e conhecimento comum (ATT&CKTM) modelo de ameaça.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a>
        </td>
        <td>
            Uma nova <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a> usando uma abordagem de primeiro stakeholder e alinhado com o <a href="https://www.energy.gov/ceser/cybersecurity-capability-maturity-model-c2m2" target="_blank">Cybersecurity Capability Maturity Model (C2M2)</a> para capacitar sua equipe e criar valor duradouro.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mitre/cti" target="_blank">Cyber Threat Intelligence Repository by MITRE</a>
        </td>
        <td>
            O repositório de informações sobre ameaças cibernéticas de ATT&CK e CAPEC catálogos expressos em STIX 2.0 JSON.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.tandfonline.com/doi/full/10.1080/08850607.2020.1780062" target="_blank">Cyber Threat Intelligence: A Product Without a Process?</a>
        </td>
        <td>
            Um artigo de pesquisa descreve como os atuais produtos de inteligência ciberameaça ficam aquém e como eles podem ser melhorados através da introdução e avaliação de metodologias e processos sólidos.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cryptome.org/2015/09/cti-guide.pdf" target="_blank">Definitive Guide to Cyber Threat Intelligence</a>
        </td>
        <td>
            Descreve os elementos da inteligência ciberameaça e discute como ela é coletada, analisada e utilizada por uma variedade de consumidores humanos e tecnológicos. Além disso, examina como a inteligência pode melhorar a segurança cibernética em níveis táticos, operacionais e estratégicos, e como pode ajudá-lo a parar ataques mais cedo, melhorar suas defesas e falar de forma mais produtiva sobre questões de segurança cibernética com a gestão executiva em <i>Para manequins</i> estilo.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ryanstillions.blogspot.nl/2014/04/the-dml-model_21.html" target="_blank">The Detection Maturity Level (DML)</a>
        </td>
        <td>
            O modelo DML é um modelo de maturidade de capacidade para referenciar maturidade na detecção de ataques cibernéticos.
            É projetado para organizações que realizam detecção e resposta orientadas pela inteligência e que dão ênfase em ter um programa de detecção maduro.
            A maturidade de uma organização não é medida pela sua capacidade de simplesmente obter inteligência relevante, mas sim pela sua capacidade de aplicar essa inteligência eficazmente às funções de detecção e resposta.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/diamond.pdf" target="_blank">The Diamond Model of Intrusion Analysis</a>
        </td>
        <td>
            Este artigo apresenta o Modelo Diamante, um quadro cognitivo e um instrumento analítico para apoiar e melhorar a análise de intrusão. Apoiar o aumento da mensurabilidade, da testabilidade e da repetibilidade na análise de intrusão, a fim de alcançar maior efetividade, eficiência e precisão na derrota de adversários, é uma de suas principais contribuições.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/a547092.pdf" target="_blank">The Targeting Process: D3A and F3EAD</a>
        </td>
        <td>
            F3EAD é uma metodologia militar para combinar operações e inteligência.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/NIST.SP.800-150.pdf" target="_blank">Guide to Cyber Threat Information Sharing by NIST</a>
        </td>
        <td>
            O Guia de Partilha de Informação sobre Ameaça Cibernética (NIST Special Publication 800-150) auxilia as organizações no estabelecimento de capacidades de resposta a incidentes de segurança informática que aproveitam o conhecimento coletivo, a experiência e as habilidades de seus parceiros, compartilhando ativamente a inteligência de ameaça e a coordenação contínua. O guia fornece diretrizes para o manejo coordenado de incidentes, incluindo produção e consumo de dados, participação em comunidades de compartilhamento de informações e proteção de dados relacionados a incidentes.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/Intelligence Preparation for the Battlefield-Battlespace.pdf" target="_blank">Intelligence Preparation of the Battlefield/Battlespace</a>
        </td>
        <td>
            Esta publicação discute a preparação da inteligência do espaço de batalha (IPB) como um componente crítico do processo de tomada de decisão e planejamento militar e como o IPB apoia a tomada de decisão, bem como a integração de processos e atividades continuadas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.lockheedmartin.com/content/dam/lockheed/data/corporate/documents/LM-White-Paper-Intel-Driven-Defense.pdf" target="_blank">Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains</a>
        </td>
        <td>
            A cadeia de intrusão kill, como apresentada neste artigo, proporciona uma abordagem estruturada para análise de intrusão, extração do indicador e realização de ações defensivas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.isao.org" target="_blank">ISAO Standards Organization</a>
        </td>
        <td>
            A ISAO Standards Organization é uma organização não governamental criada em 1 de outubro, 2015. Sua missão é melhorar a postura de cibersegurança da Nação, identificando padrões e diretrizes para o compartilhamento robusto e eficaz de informações relacionadas com riscos de cibersegurança, incidentes e melhores práticas.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/jp2_0.pdf" target="_blank">Joint Publication 2-0: Joint Intelligence</a>
        </td>
        <td>
            Esta publicação do exército dos EUA forma o núcleo da doutrina conjunta da inteligência e estabelece as bases para integrar plenamente operações, planos e inteligência em uma equipe coesa. Os conceitos apresentados também são aplicáveis à Inteligência de Ameaça (Cyber).
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://download.microsoft.com/download/8/0/1/801358EC-2A0A-4675-A2E7-96C2E7B93E73/Framework_for_Cybersecurity_Info_Sharing.pdf" target="_blank">Microsoft Research Paper</a>
        </td>
        <td>
            Um quadro para a partilha de informações sobre segurança cibernética e redução de riscos. Um artigo de alto nível da Microsoft.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/draft-dulaunoy-misp-core-format-00" target="_blank">MISP Core Format (draft)</a>
        </td>
        <td>
            Este documento descreve MISP Formato central utilizado para trocar indicadores e informações sobre ameaças entre MISP (Informação de malware e plataforma de partilha de ameaças).
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.necoma-project.eu/" target="_blank">NECOMA Project</a>
        </td>
        <td>
            O projeto de pesquisa Nippon-European Cyberdefence-Oriented Multilayer Ameat Analysis (NECOMA) visa melhorar a coleta e análise de dados sobre ameaças para desenvolver e demonstrar novos mecanismos de ciberdefesa.
            No âmbito do projecto foram publicadas várias publicações e projectos de software.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/pyramidofpain.pdf" target="_blank">Pyramid of Pain</a>
        </td>
        <td>
            A Pirâmide da Dor é uma forma gráfica de expressar a dificuldade de se obter diferentes níveis de indicadores e a quantidade de recursos que os adversários têm de gastar quando obtidos pelos defensores.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.amazon.com/Structured-Analytic-Techniques-Intelligence-Analysis/dp/1452241511" target="_blank">Structured Analytic Techniques For Intelligence Analysis</a>
        </td>
        <td>
            Este livro contém métodos que representam as melhores práticas mais atuais em inteligência, aplicação da lei, segurança interna e análise de negócios.
        </td>
    </tr>
    <tr>
        <td>
            <a href="./docs/mwr-threat-intelligence-whitepaper.pdf" target="_blank">Threat Intelligence: Collecting, Analysing, Evaluating</a>
        </td>
        <td>
            Este relatório da InfoSecurity da MWR descreve claramente vários tipos diferentes de inteligência de ameaças, incluindo variações estratégicas, táticas e operacionais. Também discute os processos de elicitação, coleta, análise, produção e avaliação de inteligência de ameaças. Também estão incluídas algumas vitórias rápidas e um modelo de maturidade para cada um dos tipos de inteligência de ameaça definidos pela InfoSecurity MWR.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://aisel.aisnet.org/wi2017/track08/paper/3/" target="_blank">Threat Intelligence Sharing Platforms: An Exploratory Study of Software Vendors and Research Perspectives</a>
        </td>
        <td>
            Um estudo sistemático de 22 Plataformas de Partilha de Informações sobre Ameaças (TISP) revelou oito descobertas fundamentais sobre o estado atual do uso de informações sobre ameaças, sua definição e TISPs.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.us-cert.gov/tlp" target="_blank">Traffic Light Protocol</a>
        </td>
        <td>
            O Traffic Light Protocol (TLP) é um conjunto de designações usadas para garantir que informações sensíveis sejam compartilhadas com o público correto. Utiliza quatro cores para indicar diferentes graus de sensibilidade e as considerações de partilha correspondentes a serem aplicadas pelo(s) destinatário(s).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pan-unit42.github.io/playbook_viewer/" target="_blank">Unit42 Playbook Viewer</a>
        </td> 
        <td>
            O objetivo do Playbook é organizar as ferramentas, técnicas e procedimentos que um adversário usa em um formato estruturado, que pode ser compartilhado com outros, e construído sobre. Os frameworks usados para estruturar e compartilhar os playbooks adversários são MITRE ATT&CK Quadro e STIX 2.0
        </td>    
    </tr>
    <tr>
        <td>
            <a href="docs/sans-whos-using-cyberthreat-intelligence-and-how.pdf" target="_blank">Who's Using Cyberthreat Intelligence and How?</a>
        </td>
        <td>
            Um whitepaper do Instituto SANS descrevendo o uso da Inteligência de Ameaça, incluindo uma pesquisa que foi realizada.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.wombat-project.eu/" target="_blank">WOMBAT Project</a>
        </td>
        <td>
            A WOMBAT project visa fornecer novos meios para compreender as ameaças existentes e emergentes que visam a economia da Internet e os cidadãos líquidos. Para atingir este objectivo, a proposta inclui três pacotes de trabalho-chave: (i) recolha em tempo real de um conjunto diversificado de dados brutos relacionados com a segurança, (ii) enriquecimento deste input através de várias técnicas de análise e (iii) identificação e compreensão dos fenómenos em estudo.
        </td>
    </tr>
</table>



## Licença

Licenciado sob a [Apache License 2.0](LICENSE).
