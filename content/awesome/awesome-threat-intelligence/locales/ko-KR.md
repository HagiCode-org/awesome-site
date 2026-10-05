# awesome-threat-intelligence
위협 인텔리전스 추천 자료 모음

위협 인텔리전스의 간결한 정의: *자산에 대한 기존 또는 새롭게 대두되는 위협이나 위험과 관련하여 맥락, 작동 방식, 지표, 영향 및 실행 가능한 조언을 포함하는 증거 기반 지식으로, 해당 위협이나 위험에 대한 대응을 결정하는 데 활용할 수 있습니다*.

[기여](CONTRIBUTING.md)를 환영합니다.

- [정보 출처](#sources)
- [형식](#formats)
- [프레임워크 및 플랫폼](#frameworks-and-platforms)
- [도구](#tools)
- [연구, 표준 및 서적](#research)


## 정보 출처

아래 자료 대부분은 위협에 관한 최신 정보를 얻을 수 있도록 목록 및/또는 API를 제공합니다.
이러한 출처를 위협 인텔리전스로 볼 수 있는지에 대해서는 의견이 엇갈립니다.
진정한 위협 인텔리전스를 만들려면 특정 분야나 업무에 맞는 분석이 어느 정도 필요합니다.

<table>
    <tr>
        <td>
            <a href="https://www.abuseipdb.com/" target="_blank">AbuseIPDB</a>
        </td>
        <td>
            AbuseIPDB 인터넷에서 해커, 스파머, 항공 활동의 확산을 돕는 전용 프로젝트입니다. 그것은 웹마스터, 시스템 관리자 및 기타 관심 당사자를위한 중앙 블랙리스트를 제공함으로써 웹 보안을 만드는 데 도움이되는 임무는 온라인 악의적 인 활동과 관련된 IP 주소를보고하고 찾을 수 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://docs.google.com/spreadsheets/u/1/d/1H9_xaxQHpWaa4O_Son4Gx0YOIzlcBWMsdvePFX68EKU/pubhtml" target="_blank">APT Groups and Operations</a>
        </td>
        <td>
            APT 그룹, 운영 및 전술에 대한 정보 및 인텔리전스를 포함하는 스프레드 시트.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.binarydefense.com/banlist.txt" target="_blank">Binary Defense IP Banlist</a>
        </td>
        <td>
            Binary Defense Systems Artillery 위협 인텔리전스 피드 및 IP Banlist 피드.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.circl.lu/projects/bgpranking/" target="_blank">BGP Ranking</a>
        </td>
        <td>
            가장 악명 높은 콘텐츠를 가진 ASNs의 순위.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intel.malwaretech.com/" target="_blank">Botnet Tracker</a>
        </td>
        <td>
            몇몇 활동적인 botnets를 추적하십시오.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.botvrij.eu/">BOTVRIJ.EU</a>
        </td>
        <td>
            Botvrij.eu 보안 기기에서 사용할 수 있는 오픈 소스 IOCs의 다른 세트를 제공합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://danger.rulez.sk/index.php/bruteforceblocker/download/" target="_blank">BruteForceBlocker</a>
        </td>
        <td>
            BruteForceBlocker 서버의 sshd 로그를 모니터링하고 brute force attacks를 식별하는 perl 스크립트입니다. 즉, 방화벽 차단 규칙을 자동으로 구성하고 프로젝트 사이트로 IP를 제출하는 데 사용됩니다. <a href="http://danger.rulez.sk/projects/bruteforceblocker/blist.php">http://danger.rulez.sk/projects/bruteforceblocker/blist.php</a>·
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://osint.bambenekconsulting.com/feeds/c2-ipmasterlist.txt" target="_blank">C&amp;C Tracker</a>
        </td>
        <td>
            알려진, 활성 및 비 sinkholed C의 피드&amp;C IP 주소, Bambenek Consulting. 상업적인 사용을 위한 면허.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://certstream.calidog.io/" target="_blank">CertStream</a>
        </td>
        <td>
            실시간 인증서 투명성 로그 업데이트 스트림. 실시간 SSL 인증서를 참조하십시오.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.ccssforum.org/malware-certificates.php" target="_blank">CCSS Forum Malware Certificates</a>
        </td>
        <td>
            다음은 포럼에 의해보고 된 디지털 인증서의 목록입니다. 맬웨어와 관련된 다양한 인증서 당국. 이 정보는 디지털 인증서를 사용하여 악성 코드에 레거시를 추가하고 그러한 인증서의 신속한 재발행을 격려하는 데 도움이되는 것입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://cinsscore.com/list/ci-badguys.txt" target="_blank">CI Army List</a>
        </td>
        <td>
        상업의 subset <a href="http://cinsscore.com/">CINS Score</a> 목록, 현재 다른 위협리스트에 표시되지 않는 가난한 정격 IP에 집중.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://s3-us-west-1.amazonaws.com/umbrella-static/index.html" target="_blank">Cisco Umbrella</a>
        </td>
        <td>
            Cisco 우산 (WopenDNS)에 의해 해결 된 상위 1 백만 사이트의 신속한 화이트리스트.
	</td>
    </tr>
    <tr>
        <td>
            <a href="https://cloudmersive.com/virus-api" target="_blank">Cloudmersive Virus Scan</a>
        </td>
        <td>
            Cloudmersive Virus Scan APIs 스캔 파일, URL 및 바이러스에 대한 클라우드 스토리지. 그들은 수백만의 위협에 대한 지속적으로 업데이트 된 서명을 활용하고 고성능 스캔 기능을 고급. 이 서비스는 무료이지만 개인 API 키를 검색하기 위해 계정을 등록해야합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.crowdsec.net/" target="_blank">CrowdSec Console</a>
        </td>
        <td>
            가장 큰 군중 자원 CTI, 실시간에서 업데이트, 덕분에 CrowdSec 차세대 오픈 소스, 무료 및 협업 IDS/IPS 소프트웨어. <a href="https://crowdsec.net" target="_blank">CrowdSec</a>  방문자 행동을 분석하고 모든 종류의 공격에 적합한 응답을 제공 할 수 있습니다. 사용자는 커뮤니티와 위협에 대한 경고를 공유하고 네트워크 효과의 혜택을 누릴 수 있습니다. IP 주소는 실제 공격에서 수집되며 허니팟 네트워크에서 독점적으로 오지 않습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cybercure.ai/" target="_blank">Cyber Cure free intelligence feeds</a>
        </td>
        <td>
            Cyber Cure는 현재 인터넷에 감염되고 공격되는 IP 주소 목록으로 무료 사이버 위협 인텔리전스 피드를 제공합니다. 현재 확산되는 알려진 악성 코드의 해시 파일에 의해 사용되는 URL 목록이 있습니다. CyberCure는 센서를 사용하여 매우 낮은 거짓 긍정적 인 비율로 지능을 수집합니다. 제품 정보 <a href="https://docs.cybercure.ai" target="_blank">documentation</a> 이용 가능
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/community/ctix-feeds" target="_blank">Cyware Threat Intelligence Feeds</a>
        </td>
        <td>
            Cyware의 위협 인텔리전스 피드는 다양한 개방 및 신뢰할 수있는 소스에서 귀중한 위협 데이터를 제공하여 가치와 행동 가능한 위협 인텔리전스의 통합 스트림을 제공합니다. 우리의 위협 인텔 피드는 STIX 1.x 및 2.0과 완벽하게 호환되며, 실시간 악성 코드 해시, IP 및 도메인에 대한 최신 정보를 제공합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://dataplane.org/" target="_blank">DataPlane.org</a>
        </td>
        <td>
          DataPlane.org 운영자가 제공하는 커뮤니티 전원 인터넷 데이터, 피드 및 측정 리소스입니다. 신뢰할 수 있고 신뢰할 수 있는 서비스를 제공합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://focsec.com" target="_blank">Focsec.com</a>
        </td>
        <td>
          Focsec.com VPN, 프록시, Bots 및 TOR 요청을 감지하는 API를 제공합니다. 항상 최신 데이터는 의심스러운 로그인, 사기 및 학대를 감지하는 데 도움이됩니다. Code 예제에서 찾을 수 있습니다 <a href="https://docs.focsec.com" target="_blank">documentation</a>·
        </td>
   </tr>	
   <tr>
        <td>
            <a href="https://osint.digitalside.it/" target="_blank">DigitalSide Threat-Intel</a>
        </td>
        <td>
          Open Source Cyber Threat Intelligence 지표 세트를 포함합니다. 주로 악성 코드 분석 및 손상된 URL, IP 및 도메인을 기반으로 합니다. 이 프로젝트의 목적은 SOC/CSIRT/CERT/individuals가 minimun 노력과 관련된 IoC를 수집하고 공유하는 새로운 방법을 개발하고 테스트하는 것입니다. 보고서는 세 가지 방법으로 공유됩니다. <a href="https://osint.digitalside.it/Threat-Intel/stix2/" target="_blank">STIX2</a>· <a href="https://osint.digitalside.it/Threat-Intel/csv/" target="_blank">CSV</a> · <a href="https://osint.digitalside.it/Threat-Intel/digitalside-misp-feed/" target="_blank">MISP Feed</a>. 보고는 또한 간행됩니다 <a href="https://github.com/davidonzo/Threat-Intel/" target="_blank">project's Git repository</a>·
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/martenson/disposable-email-domains">Disposable Email Domains</a>
        </td>
        <td>
            익명 또는 일회용 이메일 도메인의 수집은 일반적으로 스팸 / 사용 서비스에 사용됩니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://securitytrails.com/dns-trails">DNS Trails</a>
        </td>
        <td>
            현재 및 과거 DNS 정보를위한 무료 인텔리전스 소스, WHOIS 정보, 특정 IP, 하위 도메인 지식 및 기술과 관련된 다른 웹 사이트를 찾는. 있음 <a href="https://securitytrails.com/">IP and domain intelligence API available</a> 한국어 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feed.ellio.tech" target="_blank">ELLIO: IP Feed (community free version)</a>
        </td>
        <td>
            알려진 악의적 인 IP 주소의 위협 목록은 가까운 미래에 네트워크에 잠재적 인 위협, 알려진 benign 스캐너, 그리고 알 수없는 의도와 배우의 IP 주소. 그것은 개인, 비 상업적인 사용을 위한 24 시간 지연으로 제공됩니다 그러나 아직도 다른 열려있는 IP 위협 명부/feeds와 비교된 우수한 보호를 제공합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/fwrules/" target="_blank">Emerging Threats Firewall Rules</a>
        </td>
        <td>
            IPtables, PF 및 PIX를 포함한 여러 종류의 방화벽에 대한 규칙 모음.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/blockrules/" target="_blank">Emerging Threats IDS Rules</a>
        </td>
        <td>
            Snort와 Suricata의 컬렉션 <i>【특전】</i> 경고 또는 차단을 위해 사용될 수 있는 파일.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exonerator.torproject.org/" target="_blank">ExoneraTor</a>
        </td>
        <td>
            더 보기 ExoneraTor 서비스는 Tor 네트워크의 일부였던 IP 주소의 데이터베이스를 유지합니다. 주어진 날짜에 주어진 IP 주소에서 Tor Relay가 실행되었는지 궁금합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.exploitalert.com/" target="_blank">Exploitalert</a>
        </td>
        <td>
            최신 악용 목록.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intercept.sh/threatlists/" target="_blank">FastIntercept</a>
        </td>
        <td>
	    Intercept Security는 글로벌 허니팟 네트워크에서 무료 IP 평판 목록을 제공합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feodotracker.abuse.ch/" target="_blank">ZeuS Tracker</a>
        </td>
        <td>
            Feodo 추적기 <a href="https://abuse.ch/" target="_blank">abuse.ch</a> Feodo trojan을 추적합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://iplists.firehol.org/" target="_blank">FireHOL IP Lists</a>
        </td>
        <td>
            400명+ 공개적으로 사용 가능한 IP 피드는 진화, geo-map, IP의 나이, 보존 정책, overlaps를 문서로 분석. 이 사이트는 사이버 범죄에 초점을 맞추고 (attacks, 남용, 악성 코드).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://fraudguard.io/" target="_blank">FraudGuard</a>
        </td>
        <td>
            FraudGuard 실시간 인터넷 트래픽을 지속적으로 수집하고 분석하여 사용량을 검증하는 쉬운 방법을 제공하는 서비스입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://greynoise.io/" target="_blank">GreyNoise</a>
        </td>
        <td>
            GreyNoise Internet-wide 스캐닝 활동에 데이터를 수집하고 분석합니다. 쇼단.io, SSH 및 telnet 웜과 같은 악의적인 행위자와 같은 benign 스캐너에 데이터를 수집합니다. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://griffinguard.io/" target="_blank">GriffinGuard</a>
        </td>
        <td>
            GriffinGuard 글로벌 인터넷 트래픽 및 악용 패턴을 지속적으로 분석하여 실시간 위협 인텔리전스를 제공하는 사이버 보안 플랫폼입니다. 무료 데이터 검색 및 일부 무료 제공 IP blocklist₢ 킹
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://honeydb.io/" target="_blank">HoneyDB</a>
        </td> 
        <td>
            HoneyDB Honeypot 활동의 실시간 데이터를 제공합니다. 이 데이터는 Honeypots에서 인터넷에 배포됩니다. <a href="https://github.com/foospidy/HoneyPy" target="_blank">HoneyPy</a> 허니팟. 또한, HoneyDB 수집된 honeypot 활동에 API 액세스를 제공, 또한 다양한 honeypot Twitter 피드에서 집계 된 데이터를 포함.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SupportIntelligence/Icewater" target="_blank">Icewater</a>
        </td>
        <td>
            12,805 프로젝트 아이스 워터에 의해 생성 된 무료 Yara 규칙.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://infosec.cert-pa.it" target="_blank">Infosec - CERT-PA</a>
        </td>
        <td>
            Malware 표본 <a href="https://infosec.cert-pa.it/analyze/submission.html" target="_blank">collection and analysis</a>· <a href="https://infosec.cert-pa.it/analyze/statistics.html" target="_blank">blocklist service, <a href="https://infosec.cert-pa.it/cve.html">vulnerabilities database</a> 더 많은 것. CERT-PA에 의해 생성 및 관리.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://labs.inquest.net" target="_blank">InQuest Labs</a>
        </td>
        <td>
            보안 연구원을 위한 오픈, 대화형 및 API 구동 데이터 포털. 파일 샘플의 큰 손상을 검색, 집계 명성 정보, 그리고 IOCs는 공공 소스에서 추출. Augment YARA 개발 도구로 트리거 생성, 혼합 케이스 hex 처리, base64 호환 일반 표현 생성.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.iblocklist.com/lists" target="_blank">I-Blocklist</a>
        </td>
        <td>
            I-Blocklist 다양한 범주에 속하는 IP 주소를 포함하는 여러 종류의 목록을 유지합니다. 이러한 주요 범주의 일부는 국가, ISP 및 조직을 포함한다. 다른 목록에는 웹 공격, TOR, 스파이웨어 및 프록시가 포함됩니다. 다양한 형식으로 사용할 수 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ipasis.com" target="_blank">IPASIS</a>
        </td>
        <td>
            IPASIS IP 인텔리전스, 프록시/VPN/Tor 탐지를 결합한 실시간 봇 탐지 및 사기 방지 API이며, 단일 API 호출에 대한 이메일 검증입니다. 각 요청은 상호 작용 신뢰 점수 (0-100) sub-20ms 응답 시간으로. 무료 계층에는 1,000개의 요청/일이 포함됩니다. <a href="https://ipasis.com/docs" target="_blank">API documentation</a> · <a href="https://ipasis.com/scan" target="_blank">live scanner</a> 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/stamparm/ipsum/master/ipsum.txt" target="_blank">IPsum</a>
        </td>
        <td>
            IPsum 위협 인텔리전스 피드는 30+ 의심스러운 및/또는 악의적인 IP 주소의 다른 공개적으로 유효한 명부. 모든 목록은 매일 (24h)에 자동으로 검색되고 파싱되며 최종 결과는이 저장소에 푸시됩니다. 목록은 총 수 (블랙)리스트 발생 (각)와 함께 IP 주소로 만들어집니다. 작성 및 관리 <a href="https://twitter.com/stamparm">Miroslav Stampar</a>·
        </td>
    </tr>
    <tr>
	<td>
            <a href="https://jamesbrine.com.au" target="_blank">James Brine Threat Intelligence Feeds</a>
        </td>
        <td>
		JamesBrine은 SSH, FTP, RDP, GIT, SNMP 및 REDIS를 포함한 다양한 프로토콜을 포함하는 클라우드 및 개인 인프라에 위치한 국제적으로 위치한 허니팟에서 악의적인 IP 주소를 일일 위협 인텔리전스 피드를 제공합니다. 이전날의 IOC는 사용할 수 있습니다 STIX2 URI와 새로 등록 된 도메인과 같은 추가 IOCs는 피싱 캠페인에서 사용의 높은 확률을 가지고 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/datafeeds" target="_blank">Kaspersky Threat Data Feeds</a>
        </td>
        <td>
지속적인 업데이트 및 사이버 위협과 관련된 위험 및 복제에 대한 귀하의 비즈니스 또는 클라이언트를 알려줍니다. 실시간 데이터는 더 효과적으로 위협을 완화하고 그들이 출시되기 전에 공격을 방어하는 데 도움이됩니다. Demo Data Feeds는 상업적인 것에 비해 IoCs (최대 1%)의 truncated 세트를 포함합니다
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://majestic.com/reports/majestic-million" target="_blank">Majestic Million</a>
        </td>
        <td>
            Majestic에 의해 순위로 상위 1 백만 웹 사이트의 Probable Whitelist. 사이트 참조 하위넷의 수에 의해 주문됩니다. 순위에 대한 더 많은 것은 그들에 찾을 수 있습니다 <a href="https://blog.majestic.com/development/majestic-million-csv-daily/" target="_blank">blog</a>·
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maldatabase.com/" target="_blank">Maldatabase</a>
        </td>
        <td>
            Maldatabase는 악성 코드 데이터 과학 및 위협 인텔리전스 피드를 돕기 위해 설계되었습니다. 제공된 데이터는 다른 분야, 접촉된 도메인, 실행 프로세스 목록 및 각 샘플에 의해 파일을 떨어졌다. 이 피드는 모니터링 및 보안 도구를 개선 할 수 있습니다. 무료 서비스는 보안 연구자와 학생에게 제공됩니다. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malpedia.caad.fkie.fraunhofer.de/" target="_blank">Malpedia</a>
        </td>
        <td>
Malpedia의 주요 목표는 맬웨어를 조사 할 때 급속한 식별 및 행동 상황에 대한 리소스를 제공합니다. 공증에 대한 개방은 의미있는 연구와 재현 가능한 연구를 촉진하기 위해 품질의 책임 수준을 보장한다. 
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://www.malshare.com/" target="_blank">MalShare.com</a>
        </td>
        <td>
            MalShare Project는 연구원이 샘플에 무료 액세스 할 수있는 공공 맬웨어 저장소입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.maltiverse.com/" target="_blank">Maltiverse</a>
        </td>
        <td>
            Maltiverse Project는 복잡한 쿼리를 만들 수 있는 크고 풍부한 IoC 데이터베이스이며, 맬웨어 캠페인 및 인프라에 대한 조사를 위한 집단입니다. 그것은 또한 중대한 IoC 대량 조회 서비스가 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bazaar.abuse.ch/" target="_blank">MalwareBazaar</a>
        </td>
        <td>
            MalwareBazaar 프로젝트 abuse.ch infosec 커뮤니티, AV 공급 업체 및 위협 인텔리전스 제공 업체와 악성 코드 샘플을 공유하는 목표.
        </td>
    </tr>	
    <tr>
        <td>
            <a href="https://www.malwaredomainlist.com/" target="_blank">Malware Domain List</a>
        </td>
        <td>
            역을 수행 할 악성 도메인의 검색 목록 lookups 및 목록 레지스트리, trojans 및 악용 키트에 초점을 맞춘.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.malwarepatrol.net/" target="_blank">Malware Patrol</a>
        </td>
        <td>
            Malware Patrol은 블록 목록, 데이터 피드 및 위협 인텔리전스를 모든 크기의 회사에 제공합니다. 우리의 전문 지식은 사이버 위협 인텔리전스이기 때문에, 우리의 모든 자원은 가능한 가장 높은 품질의 확인으로 이동합니다. 우리는 보안 팀을 믿고 도구는 사용 된 데이터만큼 좋은 것입니다. 이것은 우리의 피드는 스크랩으로 채워지지 않는다, unverified 지표. 우리는 양에 질 값을 매깁니다. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malware-traffic-analysis.net/" target="_blank">Malware-Traffic-Analysis.net</a>
        </td>
        <td>
            이 블로그는 멀웨어 감염과 관련된 네트워크 트래픽에 중점을 둡니다. 트래픽 분석 운동, 자습서, 악성 코드 샘플, 악성 네트워크 트래픽의 Pcap 파일 및 관찰과 기술 블로그 게시물을 포함합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.malwaredomains.com/" target="_blank">MalwareDomains.com</a>
        </td>
        <td>
            DNS-BH 프로젝트가 생성하고 맬웨어 및 스파이웨어를 전파하는 데 사용되는 도메인의 목록을 유지합니다. 이러한 감지뿐만 아니라 예방에 사용할 수 있습니다 (sinkholing DNS 요청).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opswat.com/developers/threat-intelligence-feed" target="_blank">MetaDefender Cloud</a>
        </td>
        <td>
            MetaDefender Cloud 위협 인텔리전스 피드는 MD5, SHA1 및 SHA를 포함하여 최고 새로운 악성 코드 해시 서명을 포함256. 이 새로운 악의적인 hashes가 스포티드되었습니다. MetaDefender Cloud 마지막 24 시간 안에. 이 피드는 새로 발견 된 매일 업데이트하고 악성 코드가 행동 및 적시 위협 인텔리전스를 제공하기 위해보고.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.nothink.org">NoThink!</a>
        </td>
        <td>SNMP, SSH, 텔넷 블랙리스트 IPs Matteo Cantoni의 허니팟</td>
    </tr>
    <tr>
        <td>
            <a href="https://services.normshield.com" target="_blank">NormShield Services</a>
        </td>
        <td>
            NormShield Services 잠재적 인 피싱 공격이 제공 될 수천 개의 도메인 정보 ( whois information 포함)을 제공합니다. Breach 및 blacklist 서비스를 사용할 수 있습니다. 지속적인 모니터링을 위한 공공 서비스에 대한 무료 가입이 있습니다.
        </td>
    </tr> 
    <tr>
        <td>
            <a href="https://novasense-threats.com" target="_blank">NovaSense Threats</a>
        </td>
        <td>
            NovaSense는 Snapt 위협 인텔리전스 센터이며, 사전 예방 위협 보호 및 공격 완화에 대한 통찰력과 도구를 제공합니다. NovaSense는 공격자, 남용, botnets, DoS 공격 등 모든 크기의 클라이언트를 보호합니다.
        </td>
    </tr>     
    <tr>
        <td>
            <a href="https://www.obstracts.com/" target="_blank">Obstracts</a>
        </td>
        <td>
            사이버 보안 팀을위한 RSS 리더. 구조 및 행동 위협 인텔리전스로 블로그를 켭니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://openphish.com/phishing_feeds.html" target="_blank">OpenPhish Feeds</a>
        </td>
        <td>
            OpenPhish는 여러 스트림에서 URL을 수신하고 독점적 인 피싱 탐지 알고리즘을 사용하여 분석합니다. 무료 및 상업 제안이 있습니다.
        </td>
    </tr>
        <tr>
        <td>
            <a href="https://feed.seguranca-informatica.pt/index.php" target="_blank">0xSI_f33d</a>
        </td>
        <td>
            possbible phishing 및 malware domain, 포르투갈어 사이버 공간에서 블랙리스트 IP를 감지하는 무료 서비스.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.phishtank.com/developer_info.php" target="_blank">PhishTank</a>
        </td>
        <td>
            PhishTank 의심스러운 피싱 URL 목록을 제공합니다. 그들의 데이터는 인간의 보고서에서 온다, 그러나 그들은 또한 가능한 한 외부 피드를 ingest. 무료 서비스이지만 API 키에 등록하는 것은 때때로 필요합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.celerium.com/pickupstix" target="_blank">PickupSTIX</a>
        </td>
        <td>
            PickupSTIX 무료, 오픈 소스 및 비 상업화된 사이버 위협 인텔리전스 피드입니다. 현재, PickupSTIX 세 가지 공공 피드를 사용 하 고 매일 지능의 100 새로운 조각에 대 한 배포. PickupSTIX STIX로 다양한 피드를 번역합니다. TAXII 서버. 데이터는 무료이며 사이버 위협 인텔리전스를 사용하여 시작하는 훌륭한 방법입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://qfeeds.com" target="_blank">Q-Feeds Threat Intelligence</a>
        </td>
        <td>
            Q-Feeds는 OSINT, 독점 연구 및 상용 위협 인텔리전스 피드에서 함께 데이터를 가져오는 사이버 보안 회사입니다. Threat Intelligence Portal (TIP)는 조직이 실시간에 액세스하고 관리할 수 있도록 쉽게 만듭니다. 방화벽, SIEM 및 기타 보안 플랫폼과 통합함으로써, Q-Feeds는 악성 IP, 도메인 및 URL을 알려진 악성 IP, 도메인 및 URL에 대한 통합을 돕습니다. 그들은 또한 요청에 사용할 수있는 커뮤니티 버전이 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rescure.fruxlabs.com/" target="_blank">REScure Threat Intel Feed</a>
        </td>
        <td>
            [RES]cure는 Fruxlabs Crack Team에서 수행 한 독립 위협 인텔리전스 프로젝트로 분산 시스템의 기본 아키텍처, 위협 인텔리전스의 본질 및 효율적으로 수집, 저장, 소비 및 위협 인텔리전스를 배포합니다. 피드는 6 시간마다 생성됩니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rstcloud.net/" target="_blank">RST Cloud Threat Intel Feed</a>
        </td>
        <td>
            Compromise의 집계된 지표는 여러 개의 오픈 및 커뮤니티 지원 소스에서 수집 및 교차 검증, 우리의 지능 플랫폼을 사용하여 풍부하고 순위를 매겼습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://report.cs.rutgers.edu/mrtg/drop/dropstat.cgi?start=-86400">Rutgers Blacklisted IPs</a>
        </td>
        <td>IP List of SSH Brute force attackers는 지역적으로 관찰 된 IP와 2 시간의 오래된 IPs가 badip.com 및 blocklist.de에 등록되었습니다.</td>
    </tr>
    <tr>
        <td>
            <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS Suspicious Domains</a>
        </td>
        <td>
            의심스러운 도메인 위협 목록 <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS</a> 의심스러운 도메인을 추적합니다. 그것은 하나의 분류 3 목록 <a href="https://isc.sans.edu/feeds/suspiciousdomains_High.txt" target="_blank">high</a>· <a href="https://isc.sans.edu/feeds/suspiciousdomains_Medium.txt" target="_blank">medium</a> 또는 <a href="https://isc.sans.edu/feeds/suspiciousdomains_Low.txt" target="_blank">low</a> 높은 감도 명부가 더 적은 거짓 긍정을 비치하고 있는 감도 명부가, 더 거짓 긍정을 가진 낮은 감도 명부가 있는 감도. 또한 있습니다 <a href="https://isc.sans.edu/feeds/suspiciousdomains_whitelist_approved.txt" target="_blank">approved whitelist</a> 도메인의.<br/>
            마지막으로, 제안 된 <a href="https://isc.sans.edu/block.txt" target="_blank">IP blocklist</a> 이름 * <a href="https://dshield.org">DShield</a>·
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/securityscorecard/SSC-Threat-Intel-IoCs" target="_blank">SecurityScorecard IoCs</a>
        </td>
        <td>
            기술 블로그 게시물에서 공개 액세스 IoCs 및 SecurityScorecard에 의해 보고서.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.stixify.com/" target="_blank">Stixify</a>
        </td>
        <td>
            자동화된 위협 인텔리전스 분석가. unstructured 자료에서 읽을 수 있는 지능을 추출하십시오.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/signature-base" target="_blank">signature-base</a>
        </td>
        <td>
            Neo23x0에 의해 다른 도구에서 사용되는 서명의 데이터베이스.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.spamhaus.org/" target="_blank">The Spamhaus project</a>
        </td>
        <td>
            Spamhaus Project는 스팸 및 악성 코드 활동과 관련된 여러 위협 목록을 포함합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.sophos.com/intelix" target="_blank">SophosLabs Intelix</a>
        </td>
        <td>
            SophosLabs Intelix Sophos 제품 및 파트너를 강화하는 위협 인텔리전스 플랫폼입니다. 당신은 파일 해시, URL 등에 근거를 둔 정보에 접근할 수 있습니다. 또한 분석에 대한 샘플을 제출합니다. REST API를 통해 이 위협 인텔리전스를 시스템에 쉽게 추가할 수 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://spur.us" target="_blank">Spur</a>
        </td>
        <td>
            Spur는 VPN, Residential Proxies 및 Bots를 탐지하는 도구 및 데이터를 제공합니다. 무료 계획은 사용자가 lookup IP 및 분류, VPN 제공 업체, IP 뒤에 인기있는 지리적 위치, 그리고 더 유용한 상황에.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://sslbl.abuse.ch/" target="_blank">SSL Blacklist</a>
        </td>
        <td>
            SSL Blacklist (SSLBL)은 프로젝트 관리 abuse.ch. 목표는 "bad" SSL 인증서의 목록을 제공하는 것입니다. abuse.ch 악성 코드 또는 botnet 활동과 관련이 있습니다. SSLBL은 악성 SSL 인증서의 SHA1 지문에 의존하며 다양한 블랙리스트를 제공합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://statvoo.com/dl/top-1million-sites.csv.zip" target="_blank">Statvoo Top 1 Million Sites</a>
        </td>
        <td>
            Statvoo에 의해 순위로 상위 1 백만 웹 사이트의 Probable Whitelist.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://strongarm.io" target="_blank">Strongarm, by Percipient Networks</a>
        </td>
        <td>
            Strongarm은 악성 코드 명령 및 제어를 차단하여 타협의 지표에 작용하는 DNS 블랙홀입니다. Strongarm은 무료 지표 피드를 구성하고 상업 피드와 통합하여 Percipient의 IOC 피드를 활용하고 네트워크 및 비즈니스를 보호하는 데 사용할 수 있도록 DNS 해설기 및 API를 작동합니다. Strongarm은 개인용으로 무료입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.siemrules.com" target="_blank">SIEM Rules</a>
        </td>
        <td>
            당신의 탐지 기술설계 데이타베이스. 보기, 수정 및 배포 SIEM rules 위협 사냥 및 탐지.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.talosintelligence.com/" target="_blank">Talos</a>
        </td>
        <td>
	    Cisco Talos Intelligence Group은 세계 최고 수준의 연구원, 분석가 및 엔지니어로 구성된 세계에서 가장 큰 상업 위협 인텔리전스 팀 중 하나입니다. 이 팀은 Cisco 고객, 제품 및 서비스에 대한 정확하고 신속한 행동 위협 인텔리전스를 만들기 위해 탁월한 원격 측정 및 정교한 시스템에 의해 지원됩니다. Talos는 알려진 신흥 위협에 대한 Cisco 고객을 방어하고, 일반적인 소프트웨어의 새로운 취약점을 발견하고, 야생에서 위협을 더 큰 인터넷을 해칠 수 있기 전에. Talos는 Snort.org, ClamAV 및 SpamCop의 공식 규칙 세트를 유지하여 많은 오픈 소스 연구 및 분석 도구를 출시 할 수 있습니다. Talos는 웹 UI를 사용하여 쉽게 사용할 수 있습니다. <a href="https://www.talosintelligence.com/reputation">observable's reputation</a>·
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfeeds.io" target="_blank">threatfeeds.io</a>
        </td>
        <td>
            threatfeeds.io 무료 및 오픈 소스 위협 인텔리전스 피드 및 소스를 나열하고 직접 다운로드 링크 및 라이브 summaries를 제공합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfox.abuse.ch/" target="_blank">threatfox.abuse.ch</a>
        </td>
        <td>
            ThreatFox는 무료 플랫폼입니다. abuse.ch infosec 커뮤니티, AV 공급 업체 및 위협 인텔리전스 제공 업체와 악성 코드와 관련된 타협 (IOCs)의 공유 지표의 목표.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatconnect.com/blog/ingest-technical-blogs-reports/" target="_blank">Technical Blogs and Reports, by ThreatConnect</a>
        </td>
        <td>
            이 소스는 90 개 이상의 오픈 소스, 보안 블로그에서 콘텐츠로 변환됩니다. IOCs (주)<a href="https://en.wikipedia.org/wiki/Indicator_of_compromise" target="_blank">Indicators of Compromise</a>) 각 블로그에서 파싱하고 블로그의 내용은 Markdown에 포맷됩니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatjammer.com" target="_blank">Threat Jammer</a>
        </td>
        <td>
            Threat Jammer는 개발자, 보안 엔지니어 및 기타 IT 전문가가 다양한 소스에서 고품질의 위협 인텔리전스 데이터를 액세스하고 악의적 인 활동을 감지하고 차단하는 유일한 목적으로 응용 프로그램에 통합 할 수있는 REST API 서비스입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatminer.org/" target="_blank">ThreatMiner</a>
        </td>
        <td>
            ThreatMiner 데이터 수집에서 무료 분석가에 생성되어 그들이 작업을 수행 할 수있는 포털을 제공하기 위해, 독서 보고서에서 피벗 및 데이터 풍성에 이르기까지.
            더 강조 ThreatMiner 타협 (IoC)의 지표에 대해뿐만 아니라 IoC와 관련된 컨텍스트 정보와 분석을 제공합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/WSTNPHX/scripts-n-tools/master/malware-email-addresses.txt">WSTNPHX Malware Email Addresses</a>
        </td>
        <td>VVestron Phoronix (WSTNPHX)가 수집 한 악성 코드에 의해 사용되는 이메일 주소</td>
    </tr>
    <tr>
        <td>
            <a href="https://portal.underattack.today/" target="_blank">UnderAttack.today</a>
        </td>
        <td>UnderAttack은 무료 인텔리전스 플랫폼입니다. 의심스러운 사건과 공격에 대한 IP 및 정보를 공유합니다. 등록은 무료입니다.</td>
    </tr>
    <tr>
        <td>
            <a href="https://urlhaus.abuse.ch">URLhaus</a>
        </td>
        <td>URLhaus 프로젝트 abuse.ch 악성 URL을 공유하는 목표로 악성 코드 배포에 사용됩니다.</td>
    </tr>
    <tr>
        <td>
            <a href="https://virusshare.com/" target="_blank">VirusShare</a>
        </td>
        <td>
            VirusShare.com 보안 연구원, 사건 응답자, 법정 분석가 및 악의적 인 코드 샘플에 대한 악성 코드 샘플에 대한 심리적 접근을 제공하는 악성 코드 샘플의 저장소입니다. 사이트에 액세스는 초대를 통해 부여됩니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://vuldb.com/?actor" target="_blank">VulDB CTI</a>
        </td>
        <td>
            VulDB는 배우 활동과 취약성을 가진 공격 세부사항을 연관시키는 취약성 데이터베이스입니다. 예측 접근은 악의적인 행동으로 신흥 연구 및 공격 활동을 결정하는 데 도움이됩니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yara-Rules/rules" target="_blank">Yara-Rules</a>
        </td>
        <td>
            컴파일 된 다른 Yara 서명과 함께 오픈 소스 저장소, 분류 및 가능한 한 최대 날짜로 유지.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://IOCFeed.mrlooquer.com/" target="_blank">1st Dual Stack Threat Feed by MrLooquer</a>
        </td>
        <td>
Mrlooquer는 이중 더미를 가진 체계에 집중된 첫번째 위협 급식을 창조했습니다. IPv6 프로토콜은 악성 코드 및 사기 통신의 일부가되기 시작했기 때문에, 두 프로토콜 (IPv4 및 IPv6)의 위협을 감지하고 완화해야합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.validin.com/">Validin DNS Database</a>
        </td>
        <td>
            현재 및 과거 DNS 정보에 대한 무료 인텔리전스 소스, 특정 IP와 관련된 다른 웹 사이트를 찾는, 및 하위 도메인 지식 있음 <a href="https://app.validin.com/docs">free API for IP and domain intelligence</a> 한국어 
        </td>
    </tr>
</table>

## 형식

위협 인텔리전스(주로 IOC)를 공유하기 위한 표준 형식입니다.

<table>
    <tr>
        <td>
            <a href="https://capec.mitre.org/" target="_blank">CAPEC</a>
        </td>
        <td>
            일반 공격 패턴 Enumeration 및 분류 (CAPEC)는 분석가, 개발자, 테스터 및 교육자에 의해 사용될 수있는 알려진 공격의 종합 사전 및 분류 세무제입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cyboxproject.github.io/" target="_blank">CybOX</a>
        </td>
        <td>
            사이버 관찰 가능한 eXpression (CybOX) 언어는 사이버 관찰 가능을 대표하는 일반적인 구조를 제공하고 기업 사이버 보안의 운영 영역 중에는 배포 도구 및 프로세스의 일관성, 효율성 및 상호 운용성을 향상시키고, 전체적인 상황 인식을 증가하여 상세한 자동화 공유, 매핑, 탐지 및 분석 통계에 대한 잠재력을 가능하게 합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc5070" target="_blank">IODEF (RFC5070)</a>
        </td>
        <td>
            Incident Object Description Exchange Format (IODEF)는 컴퓨터 보안 사고에 대한 컴퓨터 보안 Incident Response Teams (CSIRTs)에 의해 일반적으로 정보를 공유하기위한 프레임 워크를 제공하는 데이터 표현을 정의합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc4765" target="_blank">IDMEF (RFC4765)</a>
        </td>
        <td>
            <i>회사 소개</i> - Intrusion Detection Message Exchange Format (IDMEF)의 목적은 침입 감지 및 응답 시스템에 대한 관심 정보를 공유하는 데이터 형식 및 교환 절차를 정의하고 그들과 상호 작용 할 수있는 관리 시스템에.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maecproject.github.io/" target="_blank">MAEC</a>
        </td>
        <td>
            Malware Attribute Enumeration 및 문자화 (주)MAEC) 프로젝트는 행동, artifacts 및 공격 패턴과 같은 속성에 따라 악성코드에 대한 구조화된 정보를 공유하기 위한 표준화된 언어를 생성하고 제공하는 것입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=openc2" target="_blank">OpenC2</a>
        </td>
        <td>
            OASIS 오픈 명령 및 제어 (OpenC2) 기술위원회. 더 보기 OpenC2 TC는 생성한 artifacts에 그것의 노력을 기지개할 것입니다 OpenC2 포럼. 이 TC와 spe의 창조 이전에cif정보, OpenC2 포럼은 National Security Agency (NSA)에 의해 촉진 된 사이버 보안 이해 관계자의 커뮤니티였습니다. 더 보기 OpenC2 TC는 문서, spe에 전세되었습니다cifications, lexicons 또는 다른 artifacts는 표준 방식으로 사이버 보안 명령과 통제의 필요를 성취하기 위하여.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://oasis-open.github.io/cti-documentation/" target="_blank">STIX 2.0</a>
        </td>
        <td>
            Structured Threat Information eXpression (STIX) 언어는 사이버 위협 정보를 나타내는 표준화 된 구성입니다. STIX Language는 전 범위의 사이버 위협 정보를 전달하고, 완전히 표현, 유연하고, 확장 가능하고, automatable 노력합니다. STIX는 Tool-agnostic 필드를 허용하지 않지만 소위 기능을 제공합니다. <i>시험 기계장치</i> 즉, embedding tool-spe의 의미를 제공한다.cific 요소, 포함 OpenIOC, Yara 및 Snort. STIX 1.x가 아카이브되었습니다. <a href="https://stixproject.github.io/" target="_blank">here</a>·
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://taxiiproject.github.io/" target="_blank">TAXII</a>
        </td>
        <td>
            지표 정보의 신뢰할 수있는 자동화 된 eXchange (TAXII) 표준은 조직 및 제품/서비스 경계를 통해 행동 가능한 사이버 위협 정보를 공유할 수 있도록 구현될 때 서비스 및 메시지 교환 세트를 정의합니다. TAXII 사이버 위협의 탐지, 예방, 완화에 대한 사이버 위협 정보를 교환하는 개념, 프로토콜 및 메시지 교환을 정의합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://veriscommunity.net/index.html" target="_blank">VERIS</a>
        </td>
        <td>
            Event Recording 및 Incident 공유를위한 어휘 (Vocabulary)VERIS)는 구조화되고 반복적인 방법에 있는 안전 사건을 설명하기를 위한 일반적인 언어를 제공하기 위하여 디자인된 미터의 세트입니다. VERIS 보안 업계에서 가장 중요하고 지속적인 과제 중 하나에 대한 응답 - 품질 정보의 부족. 구조화된 형식을 제공 이외에, VERIS 또한 Verizon Data Breach Investigations Report (베이즈온 데이터 Breach Investigations Report)의 위반에 대한보고 커뮤니티의 데이터를 수집합니다.<a target="_blank" href="http://www.verizonenterprise.com/verizon-insights-lab/dbir/">DBIR</a>) 이 데이터베이스를 온라인에서 게시 GitHub <a target="_blank" href="https://github.com/vz-risk/VCDB">repository.org</a>·
        </td>
    </tr>
</table>

## 프레임워크 및 플랫폼

위협 인텔리전스를 수집, 분석, 생성 및 공유하기 위한 프레임워크, 플랫폼 및 서비스입니다.

<table>
    <tr>
        <td>
            <a href="https://github.com/abusesa/abusehelper" target="_blank">AbuseHelper</a>
        </td>
        <td>
            AbuseHelper 수신 및 재배포 남용 피드 및 위협 인텔을위한 오픈 소스 프레임 워크입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://abuse.io/" target="_blank">AbuseIO</a>
        </td>
        <td>
            도구 키트 수신, 프로세스, correlate 및 남용 보고서에 대한 최종 사용자를 통지, thereby consuming 위협 인텔리전스 피드.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cisa.gov/ais" target="_blank">AIS</a>
        </td>
        <td>
            Cybersecurity 및 Infrastructure Security Agency (CISA) 무료 자동화 지표 공유 (AIS) 기능은 연방 정부와 기계 속도의 민간 부문 사이의 사이버 위협 지표의 교환을 가능하게합니다. 위협 지표는 악성 IP 주소 또는 피싱 이메일의 발신자 주소와 같은 정보의 조각입니다 (그들은 훨씬 더 복잡 할 수 있습니다).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/csirtgadgets/bearded-avenger" target="_blank">Bearded Avenger</a>
        </td>
        <td>
            위협 인텔리전스를 소비하는 가장 빠른 방법. 성공 사례 CIF·
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.blueliv.com/" target="_blank">Blueliv Threat Exchange Network</a>
        </td>
        <td>
            참가자는 커뮤니티와 위협 지표를 공유 할 수 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Cortex" target="_blank">Cortex</a>
        </td>
        <td>
            Cortex는 IP, 이메일 주소, URL, 도메인 이름, 파일 또는 해시와 같은 관찰 가능, 단일 웹 인터페이스를 사용하여 하나의 또는 대량 모드로 분석 할 수 있습니다. 웹 인터페이스는 분석 중이 자신을 통합하는 데 필요한 수많은 분석가에 대한 frontend 역할을합니다. 분석은 Cortex REST API를 사용하여 분석의 부품을 자동화 할 수 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://crits.github.io/" target="_blank">CRITS</a>
        </td>
        <td>
            CRITS 분석가를 제공하는 플랫폼은 악성 코드 및 위협으로 협업 연구를 수행하는 수단입니다. 중앙화된 인텔리전스 데이터 저장소에 연결하지만, 개인 인스턴스로도 사용할 수 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://csirtgadgets.org/collective-intelligence-framework" target="_blank">CIF</a>
        </td>
        <td>
            Collective Intelligence 프레임 워크 (Congressive Intelligence Framework)CIF) 많은 소스에서 알려진 악성 위협 정보를 결합하고 IR, 탐지 및 완화에 대한 정보를 사용합니다. 관련 상품 <a href="https://github.com/csirtgadgets/massive-octo-spice" target="_blank">GitHub</a>·
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/ctix-stix-taxii-cyber-threat-intelligence-exchange" target="_blank">CTIX</a>
        </td>
        <td>
            CTIX 신뢰할 수있는 네트워크 내에서 위협 데이터의 스마트, 클라이언트 서버 위협 인텔리전스 플랫폼 (TIP)입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.eclecticiq.com/platform" target="_blank">EclecticIQ Platform</a>
        </td>
        <td>
            EclecticIQ Platform STIX는TAXII Threat Intelligence Platform (TIP)을 기반으로 한 위협 분석가가가 빠르고, 더 나은, 더 깊은 조사를 수행하여 기계 속도에 대한 지능을 분산시킵니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.enisa.europa.eu/topics/csirt-cert-services/community-projects/incident-handling-automation" target="_blank">IntelMQ</a>
        </td>
        <td>
            IntelMQ 메시지 큐 프로토콜을 사용하여 보안 피드, 풀빈, 트윗을 수집 및 처리하기위한 CERT의 솔루션입니다. IHAP(Incident Handling Automation Project)라는 커뮤니티 주도적인 이니셔티브입니다. CERT의 사고 처리 프로세스를 개선하기 위해 이러한 주요 목표는 사건 대응자에게 쉽게 수집 및 프로세스 위협 인텔리전스를 제공하는 것입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/intelowlproject/IntelOwl/" target="_blank">IntelOwl</a>
        </td>
        <td>
            Intel Owl은 Spe에 대한 위협 인텔리전스 데이터를 얻는 OSINT 솔루션입니다.cific 파일, IP 또는 규모에서 단일 API에서 도메인. Intel Owl은 외부 소스에서 데이터를 검색할 수 있는 분석기 구성(virusTotal 또는 AbuseIPDB) 또는 내부 해석기 (Yara 또는 Oletools 같이)에서 intel를 생성하기 위하여. 보안 도구의 스택에서 쉽게 통합 할 수 있습니다 (<a href="https://github.com/intelowlproject/pyintelowl" target="_blank">pyintelowl</a>) 일반 작업을 자동화하기 위해, 예를 들어, SOC 분석가 수동으로.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.kaspersky.com/enterprise-security/threat-intelligence" target="_blank">Kaspersky Threat Intelligence Portal</a>
        </td>
        <td>
            사이버 위협, 합법적인 개체 및 그들의 관계를 설명하는 지식 기반을 제공하는 웹 사이트는 단일 웹 서비스로 함께 가져 왔습니다. Kaspersky Lab의 위협 인텔리전스 포털에 대해 자세히 알아보세요. Kaspersky Threat Data Feeds, Threat Intelligence Reporting, Kaspersky Threat Lookup 그리고 Kaspersky 연구 Sandbox는, 모두 인간 읽을 수 있는과 기계 읽을 수 있는 체재에서 유효합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/malstrom" target="_blank">Malstrom</a>
        </td>
        <td>
            Malstrom은 위협 추적 및 법정 예측에 대한 저장소가 될 것을 목표로하지만 조사에 대한 YARA 규칙과 메모를 저장합니다. 참고 : Github 프로젝트는 아카이브되었습니다 (새로운 기여는 허용되지 않음).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stratosphereips/Manati" target="_blank">ManaTI</a>
        </td>
        <td>
            더 보기 ManaTI 프로젝트는 새로운 관계를 발견하는 기계 학습 기술을 고용하여 위협 분석가를 지원합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://django-mantis.readthedocs.io/en/latest/" target="_blank">MANTIS</a>
        </td>
        <td>
            Threat Intelligence Sources의 모델 기반 분석 (모델 기반 분석)MANTIS) 사이버 위협 인텔리전스 관리 기구는 STIX와 같은 다양한 표준 언어로 표현된 사이버 위협 인텔리전스의 관리를 지원합니다 CybOX. 그것은 입니다 *아니다.* 대규모 생산을 준비했습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cert-se/megatron-java" target="_blank">Megatron</a>
        </td>
        <td>
            Megatron은 CERT-SE에 의해 구현된 도구로, 나쁜 IP를 수집하고 분석하는 것은 통계, 변환 및 분석 로그 파일 및 남용 및 사고 처리에 사용될 수 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/PaloAltoNetworks/minemeld/wiki" target="_blank">MineMeld</a>
        </td>
        <td>
            확장 가능한 위협 인텔리전스 처리 프레임 워크는 Palo Alto Networks를 만들었습니다.
            지표 목록과 변환 및/또는 제3자 시행 인프라에 의한 소비를 위해 구성할 수 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.misp-project.org/" target="_blank">MISP</a>
        </td>
        <td>
            Malware 정보 공유 플랫폼 (MISP) 수집, 저장, 배포 및 사이버 보안 지표 및 악성코드 분석을위한 오픈 소스 소프트웨어 솔루션입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CERT-Polska/n6" target="_blank">n6</a>
        </td>
        <td>
            n6 (Network Security Incident eXchange)는 대규모 보안 정보를 수집, 관리 및 배포하는 시스템입니다. 배포는 단순한 REST API 및 웹 인터페이스를 통해 실현됩니다. 공인된 사용자는 네트워크의 위협 및 사고에 대한 특정 정보에서 다양한 유형의 데이터를 수신하는 데 사용할 수 있습니다. 그것은에 의해 개발 <a href="https://www.cert.pl/en/" target="_blank">CERT Polska</a>·
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ocsf.io/" target="_blank">Open Cybersecurity Schema Framework (OCSF)</a>
        </td>
        <td>
            Open Cybersecurity Schema Framework는 오픈 소스 프로젝트이며, 공급업체의 핵심 보안 스키마와 함께 스키마 개발을 위한 확장 가능한 프레임워크를 제공합니다. 공급 업체 및 기타 데이터 생산자는 spe에 대한 스키마를 채택하고 확장 할 수 있습니다cific 도메인. 데이터 엔지니어는 보안 팀이 데이터 섭취 및 정상화를 단순화하는 데 도움이되는 스키마와 다른지도를 할 수 있으므로 데이터 과학자와 분석가는 위협 탐지 및 조사에 대한 일반적인 언어와 함께 작동 할 수 있습니다. 목표는 기존의 보안 표준과 프로세스를 보완하면서 모든 환경, 응용 프로그램, 또는 솔루션에서 채택된 개방형 표준을 제공하는 것입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opencti.io/en/" target="_blank">OpenCTI</a>
        </td>
        <td>
            OpenCTI, Open Cyber Threat Intelligence 플랫폼, 조직은 사이버 위협 인텔리전스 지식과 관찰을 관리 할 수 있습니다. 그것의 목표는 구조, 상점, 조직 및 사이버 위협에 대한 기술 및 비 기술 정보를 시각화하는 것입니다. Data는 지식 스키마를 중심으로 구축 STIX2 표준. OpenCTI 다른 도구와 플랫폼과 통합할 수 있습니다. MISP, TheHive, 그리고 MITRE ATT&CK, 아.o.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware.html" target="_blank">OpenIOC</a>
        </td>
        <td>
            OpenIOC 위협 인텔리전스를 공유하기위한 열린 프레임 워크입니다. 내부적으로 위협 정보를 교환하고 기계 소화 가능한 형식으로 외부로 설계되었습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/OpenTAXII" target="_blank">OpenTAXII</a>
        </td>
        <td>
            OpenTAXII 강력한 Python 구현 TAXII 풍부한 기능 세트와 잘 설계 된 응용 프로그램의 상단에 내장 된 친절한 Pythonic API를 제공하는 서비스.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Ptr32Void/OSTrICa" target="_blank">OSTrICa</a>
        </td>
        <td>
            오픈 소스 플러그인 중심 프레임 워크는 Threat Intelligence 정보를 수집하고 시각화합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://otx.alienvault.com" target="_blank">OTX - Open Threat Exchange</a>
        </td>
        <td>
            AlienVault Open Threat Exchange (OTX)는 위협 연구자와 보안 전문가의 글로벌 커뮤니티에 대한 액세스를 제공합니다. 그것은 커뮤니티 생성 위협 데이터를 전달, 협업 연구 활성화, 어떤 소스에서 위협 데이터와 보안 인프라를 업데이트 프로세스를 자동화.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Lookingglass/opentpx/" target="_blank">Open Threat Partner eXchange</a>
        </td>
        <td>
            더 보기 Open Threat Partner eXchange (OpenTPX)는 기계 읽기 쉬운 위협 인텔리전스 및 네트워크 보안 운영 데이터를 교환하기위한 오픈 소스 형식 및 도구로 구성됩니다. 연결된 시스템간에 데이터를 공유할 수 있는 JSON 기반 형식입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.riskiq.com/" target="_blank">PassiveTotal</a>
        </td>
        <td>
            더 보기 PassiveTotal RiskIQ가 제공하는 플랫폼은 공격을 방지하기 위해 가능한 한 많은 데이터와 분석가를 제공하는 위협 분석 플랫폼입니다. 여러 종류의 솔루션이 제공되고, 다른 시스템과 통합 (APIs).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pulsedive.com/" target="_blank">Pulsedive</a>
        </td>
        <td>
            Pulsedive는 오픈 소스 피드를 구성하는 무료, 커뮤니티 위협 인텔리전스 플랫폼이며, IOCs를 풍부하고, 데이터를 개선하기 위해 위험 득점 알고리즘을 통해 실행합니다. 사용자가 IOCs가 더 높은 위험 인 이유를 위해 IOCs를 제출, 검색, correlate 및 업데이트 IOCs; 목록 "리스크 요인"; 및 위협 활동의 높은 수준의보기를 제공합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.recordedfuture.com/" target="_blank">Recorded Future</a>
        </td>
        <td>
            Recorded Future는 오픈, 폐쇄 및 기술 소스로부터 위협 인텔리전스를 자동으로 인식하는 프리미엄 SaaS 제품입니다. 그들의 기술은 자연 언어 처리 (NLP) 및 기계 학습을 사용하여 실시간으로 위협 인텔리전스를 전달합니다. 기록 된 미래는 IT 보안 팀을위한 인기있는 선택입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Netflix/Scumblr" target="_blank">Scumblr</a>
        </td>
        <td>
            Scumblr는 데이터 소스의 정기 동기화를 수행하는 웹 응용 프로그램입니다 (예 : Github repositories 및 URL) 및 분석 수행 (정역학 분석, 동적 검사 및 메타 데이터 수집과 같은) 식별 된 결과.
            Scumblr는 지능형 자동화 프레임 워크를 통해 보안을 간소화하고 보안 문제를 빠르게 파악하고, 추적하고 해결하는 데 도움이됩니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.anomali.com/platform/staxx" target="_blank">STAXX (Anomali)</a>
        </td>
        <td>
            Anomali STAXXTM는 STIX/에 가입하는 무료, 쉬운 방법을 제공합니다.TAXII 제품 정보 STAXX 클라이언트를 다운로드하면 데이터 소스를 구성하고 STAXX는 나머지를 처리합니다.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://stoq.punchcyber.com/" target="_blank">stoQ</a>
        </td>
        <td>
            stoQ 사이버 분석가가가가 조직 및 자동화 반복, 데이터 구동 작업을 허용하는 프레임 워크입니다. 그것은 많은 다른 시스템에 대한 플러그인이 상호 작용합니다.
            하나의 사용 사례는 문서의 IOCs의 추출이며, 예는 다음과 같습니다. <a href="https://stoq-framework.blogspot.nl/2016/04/operationalizing-indicators.html" target="_blank">here</a>, 그러나 그것은 또한 예를 들면 YARA를 가진 내용과 자동화한 스캐닝의 deobfuscationg 그리고 해독을 위해 사용될 수 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/tripwire/tardis" target="_blank">TARDIS</a>
        </td>
        <td>
            위협 분석, Reconnaissance 및 데이터 인텔리전스 시스템 (Data Intelligence System)TARDIS)는 공격 서명을 사용하여 역사적인 검색을 수행하는 오픈 소스 프레임 워크입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatconnect.com/" target="_blank">ThreatConnect</a>
        </td>
        <td>
            ThreatConnect 위협 인텔리전스, 분석, 관현 기능을 갖춘 플랫폼입니다. 데이터 수집, 생성 인텔리전스, 다른 사람들과 공유, 그것에 조치를 취하도록 설계되었습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatcrowd.org/" target="_blank">ThreatCrowd</a>
        </td>
        <td>
            ThreatCrowd 사이버 위협에 관한 연구 및 연구의 체계입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatpipes.com" target="_blank">ThreatPipes</a>
        </td>
        <td>
            당신의 모험의 앞에 2 단계 체재하십시오. 그들이 너를 악용하는 방법의 완벽한 그림을 얻으십시오.
            <br />
            ThreatPipes reconn은aissance 도구 자동으로 IP 주소, 도메인 이름, 이메일 주소, 이름 및 더 많은 정보를 수집하는 데이터 소스 100의 쿼리.
            <br />
            당신은 단순히 specif조사하고 싶은 표적, 어떤 모듈을 활성화하고 그 후에 선택 ThreatPipes 데이터를 수집하여 모든 엔티티티티의 이해를 구축하고 어떻게 서로에 의존합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://developers.facebook.com/docs/threat-exchange/" target="_blank">ThreatExchange</a>
        </td>
        <td>
            Facebook 생성 ThreatExchange 참여 조직은 개인 정보 보호 기능을 제공하여 원하는 그룹과 공유할 수 있도록 편리한, 구조 및 사용하기 쉬운 API를 사용하여 위협 데이터를 공유 할 수 있습니다. 이 프로젝트는 여전히 <b>베타 베타</b>. 참고 부호는 안으로 찾아낼 수 있습니다 <a href="https://github.com/facebook/ThreatExchange" target="_blank">GitHub</a>·
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/typedb-osi/typedb-cti" target="_blank">TypeDB CTI</a>
        </td>
        <td>
		TypeDB 데이터 - CTI는 조직의 개방형 위협 인텔리전스 플랫폼으로 사이버 위협 인텔리전스(CTI) 지식을 저장하고 관리합니다. 위협 인텔 전문가가 하나의 데이터베이스로 CTI 정보를 분산시키고 사이버 위협에 대한 새로운 통찰력을 찾을 수 있도록합니다. 이 저장소는 schema를 제공합니다. STIX2MITRE 포함 ATT&CK 이 위협 인텔리전스 플랫폼을 탐구하기 위해 dataset의 예입니다. 더 많은 <a href="https://blog.vaticle.com/introducing-a-knowledge-graph-for-cyber-threat-intelligence-with-typedb-bdb559a92d2a" target="_blank">blog post</a>·
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://beta.virusbay.io/" target="_blank">VirusBay</a>
        </td>
        <td>
            VirusBay 보안 운영 센터 (SOC) 전문가를 연결하는 웹 기반 협업 플랫폼입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/brianwarehime/threatnote" target="_blank">threatnote.io</a>
        </td>
        <td>
            새로운 개선 threatnote.io - CTI 분석가 및 팀에 대한 도구는 인텔 요구 사항, 보고 및 CTI 프로세스를 모두 하나의 플랫폼에서 관리합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exchange.xforce.ibmcloud.com/" target="_blank">XFE - X-Force Exchange</a>
        </td>
        <td>
            IBM XFE의 X-Force Exchange (XFE)는 위협 인텔리전스 정보를 검색하는 데 사용할 수있는 무료 SaaS 제품입니다, 당신의 발견을 수집하고 XFE 커뮤니티의 다른 구성원과 통찰력을 공유.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://yeti-platform.github.io/" target="_blank">Yeti</a>
        </td>
        <td>
            개방형, 분산형, 기계 및 분석 가능한 위협 인텔리전스 저장소. 사건 응답자에 의해 만들어.
        </td>
    </tr>
</table>



## 도구

위협 인텔리전스를 분석하고 생성·편집하기 위한 다양한 도구이며, 주로 IOC를 다룹니다.

<table>
    <tr>
        <td>
            <a href="https://github.com/jalewis/actortrackr" target="_blank">ActorTrackr</a>
        </td>
        <td>
            ActorTrackr 저장/검색/링크 관련 자료에 대한 오픈 소스 웹 응용 프로그램입니다. 주요 소스는 사용자와 다양한 공공 저장소입니다. 사용 설명서 <a href="https://github.com/jalewis/actortrackr" target="_blank">GitHub</a>·
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/camp0/aiengine" target="_blank">AIEngine</a>
        </td>
        <td>
            AIEngine 차세대 대화 형 / 프로그래밍 가능 Python / Ruby / Java / Lua 패킷 검사 엔진은 어떤 인간 개입없이 학습의 기능을 갖춘 NIDS (Network Intrusion Detection System) 기능, DNS 도메인 분류, 네트워크 수집가, 네트워크 포렌식 및 기타.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/referefref/aiocrioc" target="_blank">AIOCRIOC</a>
        </td>
        <td>
            Artificial Intelligence Ocular 캐릭터 인식 지표 (Comromise)AIOCRIOC)는 GPT-4와 같은 Tesseract와 OpenAI 호환 LLM API의 OCR 기능, 보고에서 IOC를 추출하고 컨텍스트 데이터와 임베디드 이미지를 포함한 다른 웹 콘텐츠를 추출하는 도구입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://analyze.intezer.com" target="_blank">Analyze (Intezer)</a>
        </td>
        <td>
            Analyze는 모든 유형의 파일에 정적, 동적 및 유전적 코드 분석을 수행 할 수있는 올인원 악성 코드 분석 플랫폼입니다. 사용자는 IOCs/MITRE TTP를 추출하고 YARA 서명을 다운로드 할 수 있습니다. 무료로 시작하기 위해 커뮤니티 에디션이 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/1aN0rmus/TekDefense-Automater" target="_blank">Automater</a>
        </td>
        <td>
            Automater는 URL/Domain, IP Address 및 Md5 Hash OSINT 도구로 침입 분석 프로세스를 쉽게 만드는 것입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/svdwi/BlueBox" target="_blank">BlueBox</a>
        </td>
        <td>
            BlueBox spe에 대한 위협 인텔리전스 데이터를 얻는 OSINT 솔루션cific 파일, IP, 도메인 또는 URL 및 분석.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://botscout.com/">BotScout</a>
        </td>
        <td>
            BotScout 자동화 된 웹 스크립트를 방지하는 데 도움이, "봇", 포럼에 등록에서, 오염 데이터베이스, 스팸 확산, 웹 사이트에 abusing 양식.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/bro-intel-generator" target="_blank">bro-intel-generator</a>
        </td>
        <td>
            pdf 또는 html 보고서에서 Bro intel 파일을 생성하는 스크립트.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/cabby" target="_blank">cabby</a>
        </td>
        <td>
            간단한 Python 라이브러리와 상호 작용 TAXII 서버.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/cacador" target="_blank">cacador</a>
        </td>
        <td>
            Cacador는 텍스트 블록에서 타협의 일반적인 지표를 추출하기위한 도구입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/combine" target="_blank">Combine</a>
        </td>
        <td>
            Combine는 Threat Intelligence Feeds를 공개적으로 사용 가능한 소스로 수집합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CrowdStrike/CrowdFMS" target="_blank">CrowdFMS</a>
        </td>
        <td>
            CrowdFMS VirusTotal에서 샘플을 자동 수집 및 처리하기위한 프레임 워크입니다.
            프레임 워크는 사용자 YARA 알림 피드에 경고를 트리거 최근 샘플을 자동으로 다운로드합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-transmute.org/" target="_blank">CTI-Transmute</a>
        </td>
        <td>
            CTI-Transmute Cyber Threat Intelligence (CTI) 데이터를 변환하는 도구입니다. MISP STIX 형식 자동화된 데이터 변환을 허용하는 API 엔드포인트 세트를 제공하여 다른 위협 인텔리전스 플랫폼과 워크플로우를 통합할 수 있습니다. 사용 설명서 <a href="https://github.com/MISP/cti-transmute" target="_blank">GitHub</a>·
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cuckoosandbox/cuckoo" target="_blank">Cuckoo Sandbox</a>
        </td>
        <td>
            Cuckoo Sandbox는 자동화된 동적인 맬웨어 분석 시스템입니다. 그것은 가장 잘 알려진 오픈 소스 맬웨어 분석 샌드 박스 주변에는 연구원, CERT / SOC 팀 및 위협 인텔리전스 팀에 의해 자주 배포됩니다. 많은 조직 Cuckoo Sandbox는 잠재적 인 악성 코드 샘플에 대한 첫 통찰력을 제공합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cybergordon.com/" target="_blank">CyberGordon</a>
        </td>
        <td>
            CyberGordon 위협 인텔리전스 검색 엔진입니다. 레버리지 30+ 이름 *
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CylanceSPEAR/CyBot" target="_blank">CyBot</a>
        </td>
        <td>
            CyBot 위협 인텔리전스 채팅 봇입니다. 그것은 몇몇 유형을 실행할 수 있습니다 lookup사용자 정의 모듈에 의해 제공 s.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Fenrir" target="_blank">Fenrir</a>
        </td>
        <td>
            간단한 Bash IOC 스캐너.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/FireHOL-IP-Aggregator" target="_blank">FireHOL IP Aggregator</a>
        </td>
        <td>
            FireHOL에서 피드를 유지하기위한 응용 <a href="https://github.com/firehol/blocklist-ipsets" target="_blank">blocklist-ipsets</a> IP 주소 외관 기록으로. HTTP 기반 API 서비스는 검색 요청을 위해 개발됩니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/Forager" target="_blank">Forager</a>
        </td>
        <td>
            Multithreaded 위협 인텔리전스 사냥꾼 스크립트.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.gigasheet.co" target="_blank">Gigasheet</a>
        </td>
        <td>
            Gigasheet는 대규모 분석 및 사이버 보안 데이터 세트를 분산시키는 SaaS 제품입니다. 대규모 로그 파일, netflow, pcaps, 큰 CSVs와 더.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/BinaryDefense/goatrider" target="_blank">GoatRider</a>
        </td>
        <td>
            GoatRider 역학적으로 Artillery Threat Intelligence Feeds, TOR, AlienVaults OTX 및 Alexa top 1 백만 웹 사이트를 끌어 놓고 호스트 이름 파일 또는 IP 파일에 비교 할 수있는 간단한 도구입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cse.google.com/cse/publicurl?cx=003248445720253387346:turlh5vi4xc" target="_blank">Google APT Search Engine</a>
        </td>
        <td>
            APT 그룹, 운영 및 악성 검색 엔진. 이 Google Custom Search에 사용되는 소스는 위에 나열됩니다. <a href="https://gist.github.com/Neo23x0/c4f40629342769ad0a8f3980942e21d3" target="_blank">this</a> GitHub 이름 *
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ciscocsirt/gosint" target="_blank">GOSINT</a>
        </td>
        <td>
            더 보기 GOSINT 프레임 워크는 타협 (IOCs)의 고품질 공공 지표를 수집, 처리 및 수출하는 데 사용되는 무료 프로젝트입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://hashdd.com/" target="_blank">hashdd</a>
        </td>
        <td>
            도구에 lookup crytographic hash 가치의 관련 정보
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/harbinger" target="_blank">Harbinger Threat Intelligence</a>
        </td>
        <td>
            하나의 인터페이스에서 여러 온라인 위협 집계를 쿼리 할 수있는 Python 스크립트.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Hippocampe" target="_blank">Hippocampe</a>
        </td>
        <td>
            Hippocampe는 Elasticsearch 클러스터의 인터넷에서 위협 피드를 집계합니다. 'memory'로 검색 할 수있는 REST API가 있습니다. 그것은 피드에 대응하는 URL을 fetchs하는 파이썬 스크립트에 기반하고, 파삭스와 색인.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/S03D4-164/Hiryu" target="_blank">Hiryu</a>
        </td>
        <td>
            APT 캠페인 정보를 구성하고 IOC 간의 관계를 시각화하는 도구.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/ioc-editor.html" target="_blank">IOC Editor</a>
        </td>
        <td>
            Compromise (IOCs)의 지표에 대한 무료 편집기.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/ioc-finder" target="_blank">IOC Finder</a>
        </td>
        <td>
            텍스트의 타협의 지표를 찾는 Python 라이브러리. 개량된 comprehensibility를 위한 regexes 보다는 오히려 문법을 이용합니다. 2019 년 2 월 현재 18 개 이상의 지표 유형이 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ioc-fang/ioc_fanger" target="_blank">IOC Fanger (and Defanger)</a>
        </td>
        <td>
            fanging에 대한 Python 라이브러리 (`hXXp://example[.]com` => · `http://example.com`)와 편향 (`http://example.com` => · `hXXp://example[.]com`) 텍스트의 타협의 지표.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/armbues/ioc_parser" target="_blank">ioc_parser</a>
        </td>
        <td>
            PDF 형식의 보안 보고서에서 타협의 지표를 추출하는 도구.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mandiant/ioc_writer" target="_blank">ioc_writer</a>
        </td>
        <td>
            기본 생성 및 편집을 허용하는 Python 라이브러리 제공 OpenIOC 기타 제품
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/python-iocextract" target="_blank">iocextract</a>
        </td>
        <td>
            URL, IP 주소, MD5/SHA hashes, 이메일 주소 및 텍스트 corpora의 YARA 규칙을 추출합니다. 출력에 몇 인코딩 및 "defanged"IOCs를 포함하고, 선택적으로 decodes/refangs 그들.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stephenbrannon/IOCextractor" target="_blank">IOCextractor</a>
        </td>
        <td>
            IOC (Comromise) Extractor는 텍스트 파일에서 IOC를 추출하는 데 도움이되는 프로그램입니다. 일반 목표는 구조화된 데이터(IOC)의 파싱 프로세스를 가속화하는 것입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/johestephan/ibmxforceex.checker.py" target="_blank">ibmxforceex.checker.py</a>
        </td>
        <td>
            IBM X-Force Exchange에 대한 파이썬 클라이언트.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/jager" target="_blank">jager</a>
        </td>
        <td>
            Jager는 다양한 입력 소스 (PDFs for now, Plain text really soon, webs last)에서 유용한 IOCs (Indicators of compromise)을 끌어 놓는 도구이며 JSON 형식을 조작하기 쉽습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/13850" target="_blank">Kaspersky CyberTrace</a>
        </td>
        <td>
            위협 데이터 피드를 SIEM 솔루션과 통합하는 위협 인텔리전스 융합 및 분석 도구. 사용자는 기존 보안 운영의 워크플로우에서 보안 모니터링 및 사고 보고서(IR) 활동을 즉시 활용할 수 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/KasperskyLab/klara" target="_blank">KLara</a>
        </td>
        <td>
            KLara, Python에서 작성된 분산 시스템, 연구원들은 샘플과 함께 컬렉션에 하나 이상의 Yara 규칙을 스캔할 수 있으며, 스캔 결과가 준비될 때 이메일과 웹 인터페이스로 알림을 얻고 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/libtaxii" target="_blank">libtaxii</a>
        </td>
        <td>
            처리를위한 Python 라이브러리 TAXII 메시지 invoking TAXII 서비스.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Loki" target="_blank">Loki</a>
        </td>
        <td>
            간단한 IOC 및 Incident 응답 스캐너.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/ssanthosh243/ip-lookup-docker" target="_blank">LookUp</a>
        </td>
        <td>
            LookUp IP 주소에 대한 다양한 위협 정보를 얻을 수있는 중앙화 된 페이지입니다. SIEM 및 기타 투자 도구와 같은 도구의 컨텍스트 메뉴로 쉽게 통합 할 수 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/HurricaneLabs/machinae" target="_blank">Machinae</a>
        </td>
        <td>
            Machinae는 다양한 보안 관련 데이터에 대한 공공 사이트 / 피드로부터 인텔리전스를 수집하기위한 도구입니다. IP 주소, 도메인 이름, URL, 이메일 주소, 파일 해시 및 SSL 지문.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/silascutler/MalPipe" target="_blank">MalPipe</a>
        </td>
        <td>
            Amodular malware (및 지표) 수집 및 처리 프레임 워크. 그것은 여러 피드에서 악성 코드, 도메인, URL 및 IP 주소를 잡아 설계, 수집 된 데이터를 풍부하고 결과를 수출.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/misp-workbench" target="_blank">MISP Workbench</a>
        </td>
        <td>
            데이터 내보내기 도구 MISP MySQL 데이터베이스 및 사용 및이 플랫폼 밖에 남용.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/MISP-Taxii-Server" target="_blank">MISP-Taxii-Server</a>
        </td>
        <td>
            EclecticIQ의 설정 OpenTAXII 구현, 데이터가 전송 될 때 콜백과 함께 TAXII 서버의 inbox.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/microsoft/msticpy" target="_blank">MSTIC Jupyter and Python Security Tools</a>
        </td>
        <td>
            msticpy는 Jupyter Notebooks의 InfoSec 조사 및 사냥을위한 라이브러리입니다. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/paulpc/nyx" target="_blank">nyx</a>
        </td>
        <td>
            이 프로젝트의 목표는 Threat Intelligence Artifacts의 배포를 촉진하고 개방형 소스 및 상용 도구 모두에서 파생 된 가치를 향상시킬 수 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/onemillion" target="_blank">OneMillion</a>
        </td>
        <td>
            Python 라이브러리는 Alexa 또는 Cisco 상단에 있는 경우, 백만개의 도메인 목록입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/STIXProject/openioc-to-stix" target="_blank">openioc-to-stix</a>
        </td>
        <td>
            STIX XML 생성 OpenIOC XML.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/omnibus" target="_blank">Omnibus</a>
        </td>
        <td>
            Omnibus는 IOCs/artifacts (IPs, Domains, Email Addresses, Usernames 및 Bitcoin Addresses)를 수집하고 관리하기위한 대화 형 명령 줄 응용 프로그램입니다. 공공 소스에서 OSINT 데이터와 이러한 artifacts를 풍부하게하고 간단한 방법으로 이러한 artifacts를 저장하고 액세스하는 수단을 제공합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kx499/ostip/wiki" target="_blank">OSTIP</a>
        </td>
        <td>
            homebrew 위협 데이터 플랫폼.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mgeide/poortego" target="_blank">poortego</a>
        </td>
        <td>
            오픈 소스 프로젝트는 오픈 소스 인텔리전스 (ala Maltego)의 저장 및 연결을 처리하지만 맥주로 무료하고 spe에 묶지 않는cific / 독점 데이터베이스). 원래 루비에서 개발, 하지만 새로운 codebase 완전히 python에 rewritten.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/yahoo/PyIOCe" target="_blank">PyIOCe</a>
        </td>
        <td>
            PyIOCe 이름 * IOC editor Python에서 작성되었습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/QTek/QRadio" target="_blank">QRadio</a>
        </td>
        <td>
            QRadio 사이버 위협 인텔리전스 소스를 통합하도록 설계된 도구 / 프레임 워크입니다.
            프로젝트의 목표는 vetted 소스에서 지능 데이터를 추출하기위한 강력한 모듈 형 프레임 워크를 구축하는 것입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/aboutsecurity/rastrea2r" target="_blank">rastrea2r</a>
        </td>
        <td>
            Compromise (IOC)와 gusto 및 스타일의 지표에 대한 수집 및 사냥!
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/redline.html" target="_blank">Redline</a>
        </td>
        <td>
            다른 사람, IOC 분석 중, 사용할 수있는 호스트 조사 도구.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ocmdev/rita" target="_blank">RITA</a>
        </td>
        <td>
            Real Intelligence 위협 분석RITA)는 다양한 크기의 기업 네트워크에서 타협의 지표에 대한 검색에 도움이 될 것입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/softrace" target="_blank">Softrace</a>
        </td>
        <td>
            경량 국가 소프트웨어 참고 도서관 RDS 저장.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/0x4d31/sqhunter" target="_blank">sqhunter</a>
        </td>
        <td>
            osquery, Salt Open 및 Cymon API를 기반으로 한 위협 사냥꾼. 네트워크 소켓을 열고 위협 인텔리전스 소스에 대해 확인 할 수 있습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SecurityRiskAdvisors/sra-taxii2-server" target="_blank">SRA TAXII2 Server</a>
        </td>
        <td>
            한국어 TAXII 2.0 스파이cifMongoDB 백엔드와 Node JS에서 구현된 ication 서버.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://stixvalidator.com" target="_blank">Stixvalidator.com</a>
        </td>
        <td>
            Stixvalidator.com 온라인 무료 STIX 및 STIX2 유효한 서비스.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/traut/stixview" target="_blank">Stixview</a>
        </td>
        <td>
            Stixview는 embeddable Interactive에 대한 JS 라이브러리입니다. STIX2 그래프.
        </td>
    </tr>
	<tr>
        <td>
            <a href="https://github.com/STIXProject/stix-viz" target="_blank">stix-viz</a>
        </td>
        <td>
            STIX 시각화 도구.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://test.taxiistand.com/" target="_blank">TAXII Test Server</a>
        </td>
        <td>
            테스트 할 수 있습니다. TAXII 제공된 서비스에 연결하고 다른 기능을 수행함으로써 환경 TAXII 뚱 베어cif제품 정보
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jpsenior/threataggregator" target="_blank">threataggregator</a>
        </td>
        <td>
            ThreatAggregrator는 CEF, Snort 및 IPTables 규칙을 포함하여 다양한 형식으로 온라인 소스에서 보안 위협을 통합합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcrowd_api" target="_blank">threatcrowd_api</a>
        </td>
        <td>
            Python 라이브러리 ThreatCrowdAPI는
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcmd" target="_blank">threatcmd</a>
        </td>
        <td>
            Cli 인터페이스 ThreatCrowd·
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/syphon1c/Threatelligence" target="_blank">Threatelligence</a>
        </td>
        <td>
            Threatelligence는 Elasticsearch, Kibana 및 Python을 사용하여 간단한 사이버 위협 인텔리전스 피드 수집가입니다. 자동 업데이트 피드 및 트리는 대시보드에 대한 데이터를 더 향상시킬 수 있습니다. 프로젝트는 더 이상 유지되지 않습니다, 그러나.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/ThreatIngestor" target="_blank">ThreatIngestor</a>
        </td>
        <td>
            유연성, 구성 중심, 확장 가능한 프레임 워크 for consuming 위협 인텔리전스. ThreatIngestor Twitter, RSS 피드 및 기타 소스를 볼 수 있으며 C2 IPs/domains 및 YARA 서명과 같은 의미있는 정보를 추출하고 분석을위한 다른 시스템에 대한 정보를 보내주십시오.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://chrome.google.com/webstore/detail/threatpinch-lookup/ljdgplocfnmnofbhpkjclbefmjoikgke" target="_blank">ThreatPinch Lookup</a>
        </td>
        <td>
            IPv4, MD5, SHA2 및 CVE에 대한 모든 페이지에 hover 팝업을 생성하는 크롬의 확장. 그것은 사용될 수 있습니다 lookup위협 조사 중 s.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/michael-yip/ThreatTracker" target="_blank">ThreatTracker</a>
        </td>
        <td>
            Google Custom Search Engines를 설정하여 IOCs의 주어진 세트에 경고를 모니터링하고 생성하도록 설계된 Python 스크립트.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yelp/threat_intel" target="_blank">threat_intel</a>
        </td>
        <td>
            단일 패키지에 통합 된 위협 인텔리전스에 대한 몇 가지 API. 포함: OpenDNS 투자, VirusTotal 및 ShadowServer.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/abhinavbom/Threat-Intelligence-Hunter" target="_blank">Threat-Intelligence-Hunter</a>
        </td>
        <td>
            TIH는 여러 개의 오픈 가능한 보안 피드와 잘 알려진 API를 통해 IOC를 검색하는 데 도움이되는 지능 도구입니다. 도구 뒤에 아이디어는 지표의 자신의 로컬 데이터베이스를 만들기 위해 자주 추가 IOCs의 검색 및 저장을 촉진하는 것입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/tiq-test" target="_blank">tiq-test</a>
        </td>
        <td>
            Threat Intelligence Quotient (TIQ) 테스트 도구는 TI 피드의 시각화 및 통계 분석을 제공합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/yeti" target="_blank">YETI</a>
        </td>
        <td>
            YETI 의 증명을 받아들이는 TAXII Inbox, Poll 및 Discovery 서비스를 지원하는 서비스 TAXII 서비스 Specif제품 정보
        </td>
    </tr>
</table>



## <a name="research"></a>연구, 표준 및 서적

위협 인텔리전스에 관한 다양한 읽을거리로, (과학) 연구와 백서를 포함합니다.

<table>
    <tr>
        <td>
            <a href="https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections" target="_blank">APT & Cyber Criminal Campaign Collection</a>
        </td>
        <td>
            (historic) 캠페인의 광범위한 컬렉션. 다양한 소스에서 온 항목.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kbandla/APTnotes" target="_blank">APTnotes</a>
        </td>
        <td>
            관련 소스의 훌륭한 컬렉션 <i>고급 Persistent 위협</i> (APT). 이 보고서는 일반적으로 전략적 및 전술적 지식이나 조언을 포함합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://attack.mitre.org/" target="_blank">ATT&CK</a>
        </td>
        <td>
            Adversarial 전술, 기술 및 일반적인 지식 (ATT&CKTM)는 작업에 대한 모델과 프레임 워크입니다. adversary는 기업 네트워크 내에서 작동 할 수 있습니다. ATT&CK 네트워크 침입 중에 어떤 행동이 볼 수 있는지 더 큰 인식을 제공하는 포스트 액세스 기술에 대한 끊임없이 성장하는 일반적인 참조입니다. MITRE는 관련 건설과의 통합에 적극적으로 노력하고 있습니다. CAPEC, STIX 및 MAEC·
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.activeresponse.org/building-threat-hunting-strategy-with-the-diamond-model/" target="_blank">Building Threat Hunting Strategies with the Diamond Model</a>
        </td>
        <td>
            Sergio Caltagirone의 블로그 포스트는 Diamond Model을 사용하여 지능형 위협 사냥 전략을 개발하는 방법에.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://car.mitre.org/wiki/Main_Page" target="_blank">Cyber Analytics Repository by MITRE</a>
        </td>
        <td>
            Cyber Analytics Repository (CAR)는 Adversary Tactics, Techniques 및 Common Knowledge를 기반으로하는 MITRE에 의해 개발 된 분석의 지식 기반입니다 (ATT&CKTM) 위협 모델.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a>
        </td>
        <td>
            새로운 <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a> stakeholder-first 접근을 사용하여 정렬 된 <a href="https://www.energy.gov/ceser/cybersecurity-capability-maturity-model-c2m2" target="_blank">Cybersecurity Capability Maturity Model (C2M2)</a> 팀에 권한을 부여하고 지속적인 가치를 창출합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mitre/cti" target="_blank">Cyber Threat Intelligence Repository by MITRE</a>
        </td>
        <td>
            사이버 위협 인텔리전스 저장소 ATT&CK · CAPEC 카탈로그에서 표현 STIX 2.0 JSON입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.tandfonline.com/doi/full/10.1080/08850607.2020.1780062" target="_blank">Cyber Threat Intelligence: A Product Without a Process?</a>
        </td>
        <td>
            현재 사이버 위협 인텔리전스 제품이 얼마나 짧고 어떻게 개선 될 수 있는지 설명하는 연구 논문 및 사운드 방법론 및 프로세스.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cryptome.org/2015/09/cti-guide.pdf" target="_blank">Definitive Guide to Cyber Threat Intelligence</a>
        </td>
        <td>
            사이버 위협 인텔리전스의 요소를 설명하고 수집, 분석 및 다양한 인간 및 기술 소비자에 의해 사용되는 방법을 논의합니다. 또한 지능이 전술적, 운영 및 전략적인 수준에서 사이버 보안을 개선할 수 있는 방법을 조사하고, 공격을 멈출 수 있는 방법을 통해 방어력을 향상시키고, 사이버 보안 문제에 대해 더 생산적으로 이야기할 수 있습니다. <i>Dummies를 위해</i> 스타일.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ryanstillions.blogspot.nl/2014/04/the-dml-model_21.html" target="_blank">The Detection Maturity Level (DML)</a>
        </td>
        <td>
            DML 모델은 사이버 공격을 탐지하는 데 하나의 성숙을 참조하기위한 기능 성숙 모델입니다.
            intel-driven detection and response을 수행하고 성숙한 검출 프로그램을 갖는 것에 중점을 둔 조직을 위해 설계되었습니다.
            조직의 성숙은 단순히 관련 인텔리전스를 얻을 수있는 능력에 의해 측정되지 않습니다, 그러나 그것은 지능을 효과적으로 탐지 및 응답 기능에 적용 할 수있는 용량입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/diamond.pdf" target="_blank">The Diamond Model of Intrusion Analysis</a>
        </td>
        <td>
            이 논문은 Diamond Model, 인지 프레임 워크 및 분석 기기를 제공하며 침입 분석을 개선합니다. 지원은 더 높은 effectivity, 효율성을 달성하기 위하여 침입 분석에 있는 증가된 measurability, 시험성 및 반복성, 그것의 주요 기여의 한개입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/a547092.pdf" target="_blank">The Targeting Process: D3A and F3EAD</a>
        </td>
        <td>
            F3EAD는 작업과 지능을 결합하는 군사 방법론입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/NIST.SP.800-150.pdf" target="_blank">Guide to Cyber Threat Information Sharing by NIST</a>
        </td>
        <td>
            사이버 위협 정보 공유 가이드 (NIST Special Publication 800-)150) 컴퓨터 보안 사고 대응 능력을 구축하여 공동 지식, 경험 및 파트너의 역량을 활용하여 위협 인텔리전스 및 지속적인 조정을 적극적으로 공유합니다. ο 수집항목 : 이름 , 생년월일 , 성별 , 로그인ID , 비밀번호 , 비밀번호 질문과 답변 , 자택 전화번호 , 자택 주소 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호 , 휴대전화번호
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/Intelligence Preparation for the Battlefield-Battlespace.pdf" target="_blank">Intelligence Preparation of the Battlefield/Battlespace</a>
        </td>
        <td>
            이 간행물은 전투 공간 (IPB)의 인텔리전스 준비를 논의하고 계획 프로세스의 중요한 구성 요소와 IPB가 결정하는 방법을 지원, 뿐만 아니라 통합 프로세스 및 지속적인 활동.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.lockheedmartin.com/content/dam/lockheed/data/corporate/documents/LM-White-Paper-Intel-Driven-Defense.pdf" target="_blank">Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains</a>
        </td>
        <td>
            이 종이에 발표 된 침입 위기는 침입 분석, 지표 추출 및 방어 작업을 수행하는 구조화 된 접근법을 제공합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.isao.org" target="_blank">ISAO Standards Organization</a>
        </td>
        <td>
            더 보기 ISAO Standards Organization 10월 1일에 설립된 비정부기구입니다. 2015. 사이버 보안 위험, 사건 및 모범 사례와 관련된 견고한 정보 공유를 위한 표준 및 지침을 식별함으로써 Nation의 사이버 보안 자세를 개선하는 것입니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/jp2_0.pdf" target="_blank">Joint Publication 2-0: Joint Intelligence</a>
        </td>
        <td>
            미국 군대의이 출판은 공동 지능 교리의 핵심을 형성하고 완전히 운영, 계획 및 인텔리전스를 공동 팀에 통합하는 기초를 놓습니다. 발표된 개념은 (Cyber) 위협 인텔리전스에 적용 가능합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://download.microsoft.com/download/8/0/1/801358EC-2A0A-4675-A2E7-96C2E7B93E73/Framework_for_Cybersecurity_Info_Sharing.pdf" target="_blank">Microsoft Research Paper</a>
        </td>
        <td>
            사이버 보안 정보 공유 및 위험 감소를위한 프레임 워크. Microsoft의 높은 수준의 개요 용지.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/draft-dulaunoy-misp-core-format-00" target="_blank">MISP Core Format (draft)</a>
        </td>
        <td>
            이 문서는 MISP 표시기 및 위협 정보를 교환하는 데 사용되는 핵심 형식 MISP (Malware Information 및 위협 공유 플랫폼) 인스턴스.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.necoma-project.eu/" target="_blank">NECOMA Project</a>
        </td>
        <td>
            Nippon-European Cyberdefense-Oriented Multilayer 위협 분석 (NECOMA) 연구 프로젝트는 위협 데이터 수집 및 분석 개선을 목표로하고 새로운 사이버 공격 메커니즘을 개발하고 민주화합니다.
            프로젝트의 일부로서 여러 출판물 및 소프트웨어 프로젝트가 출판되었습니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/pyramidofpain.pdf" target="_blank">Pyramid of Pain</a>
        </td>
        <td>
            통증의 피라미드는 지표의 다른 수준을 얻기의 어려움을 표현하는 그래픽 방법이며 자원 adversaries의 금액은 수비수에 의해 얻을 때 만료해야합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.amazon.com/Structured-Analytic-Techniques-Intelligence-Analysis/dp/1452241511" target="_blank">Structured Analytic Techniques For Intelligence Analysis</a>
        </td>
        <td>
            이 책은 인텔리전스, 법 집행, 홈랜드 보안 및 비즈니스 분석에서 가장 최신 모범 사례를 나타내는 방법을 포함합니다.
        </td>
    </tr>
    <tr>
        <td>
            <a href="./docs/mwr-threat-intelligence-whitepaper.pdf" target="_blank">Threat Intelligence: Collecting, Analysing, Evaluating</a>
        </td>
        <td>
            MWR InfoSecurity의이 보고서는 전략적, 전술적 및 운영적 변이를 포함한 여러 종류의 위협 인텔리전스를 명확하게 설명합니다. 또한 요구 사항 elicitation, 수집, 분석, 생산 및 위협 인텔리전스의 평가 프로세스에 대해 논의합니다. 또한 포함 된 몇 가지 빠른 승리와 MWR InfoSecurity에 의해 정의 된 위협 인텔리전스의 각 유형에 대한 성숙 모델.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://aisel.aisnet.org/wi2017/track08/paper/3/" target="_blank">Threat Intelligence Sharing Platforms: An Exploratory Study of Software Vendors and Research Perspectives</a>
        </td>
        <td>
            22 Threat Intelligence Sharing Platforms (TISP)의 체계적인 연구는 위협 인텔리전스 사용법의 현재 국가, 그것의 정의 및 TISPs에 관하여 8개의 중요한 발견을 서핑.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.us-cert.gov/tlp" target="_blank">Traffic Light Protocol</a>
        </td>
        <td>
            트래픽 라이트 프로토콜 (TLP)는 민감한 정보가 올바른 청중과 공유되도록 사용하는 지정의 집합입니다. 감도의 다른 정도를 나타내는 4개의 색깔을 고용하고 받는 사람 (s)에 의해 적용되는 대응 공유 고려사항.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pan-unit42.github.io/playbook_viewer/" target="_blank">Unit42 Playbook Viewer</a>
        </td> 
        <td>
            Playbook의 목표는 다른 사람들과 공유 할 수있는 구조형 형식으로 광고가 사용되는 도구, 기술 및 절차를 구성하는 것입니다. 구조에 사용되는 프레임 워크는 MITRE 's ATT&CK 프레임 및 STIX 2.0
        </td>    
    </tr>
    <tr>
        <td>
            <a href="docs/sans-whos-using-cyberthreat-intelligence-and-how.pdf" target="_blank">Who's Using Cyberthreat Intelligence and How?</a>
        </td>
        <td>
            SANS Institute가 수행한 설문조사를 포함하여 위협 인텔리전스 사용을 설명하는 백서.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.wombat-project.eu/" target="_blank">WOMBAT Project</a>
        </td>
        <td>
            더 보기 WOMBAT project 인터넷 경제 및 인터넷 시민을 대상으로하는 기존 및 신흥 위협을 이해하는 새로운 수단을 제공하는 것을 목표로합니다. 이 목표를 달성하기 위해 제안에는 다양한 보안 관련 원시 데이터 (ii)의 실시간 수집, 다양한 분석 기법과 (iii) 루트 원인 식별 및 scrutiny의 현상에 대한 이해에 의해이 입력의 풍부가 포함됩니다.
        </td>
    </tr>
</table>



## 이름 *

[Apache License 2.0](LICENSE)에 따라 제공됩니다.
