# awesome-threat-intelligence
威脅情報優質資源精選

威脅情報的簡明定義：*以證據為基礎的知識，包含背景、機制、指標、影響及可採取行動的建議，描述對資產構成的現有或新興威脅或危害，可用於制定對該威脅或危害的應對決策*。

歡迎[貢獻](CONTRIBUTING.md)。

- [來源](#sources)
- [格式](#formats)
- [框架與平台](#frameworks-and-platforms)
- [工具](#tools)
- [研究、標準與書籍](#research)


## 來源

下列資源大多提供清單和／或 API，以取得（希望是）最新的威脅資訊。
有些人將這些來源視為威脅情報，但看法不一。
要形成真正的威脅情報，需要一定程度的領域或業務分析。

<table>
    <tr>
        <td>
            <a href="https://www.abuseipdb.com/" target="_blank">AbuseIPDB</a>
        </td>
        <td>
            AbuseIPDB 這項計畫專門協助在網路上打擊黑客、垃圾邮件及虐待活動。 提供一份中央黑名單, 供網站主管、系統管理員、其他相關方在網路上報導及找到與惡性活動有關的IP位址。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://docs.google.com/spreadsheets/u/1/d/1H9_xaxQHpWaa4O_Son4Gx0YOIzlcBWMsdvePFX68EKU/pubhtml" target="_blank">APT Groups and Operations</a>
        </td>
        <td>
            包含 APT 群組、 操作與策略的資訊與資訊。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.binarydefense.com/banlist.txt" target="_blank">Binary Defense IP Banlist</a>
        </td>
        <td>
            二元防守系統炮兵威脅情報源和IP封禁信息源.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.circl.lu/projects/bgpranking/" target="_blank">BGP Ranking</a>
        </td>
        <td>
            ASN的排名 內容最惡毒
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intel.malwaretech.com/" target="_blank">Botnet Tracker</a>
        </td>
        <td>
            追蹤數個有效的博特网 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.botvrij.eu/">BOTVRIJ.EU</a>
        </td>
        <td>
            Botvrij.eu 提供不同的開源的 IOC , 您可以在您的安全裝置中用來偵測可能的惡意活動 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://danger.rulez.sk/index.php/bruteforceblocker/download/" target="_blank">BruteForceBlocker</a>
        </td>
        <td>
            BruteForceBlocker 它會用它來自動設定防火牆封鎖規則 把那些IP放回專案網站 <a href="http://danger.rulez.sk/projects/bruteforceblocker/blist.php">http://danger.rulez.sk/projects/bruteforceblocker/blist.php</a>.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://osint.bambenekconsulting.com/feeds/c2-ipmasterlist.txt" target="_blank">C&amp;C Tracker</a>
        </td>
        <td>
            由已知的、活跃的和非沉沒的 C 提供&amp;CIP地址,來自Bambenek咨询公司 商業使用需要駕照。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://certstream.calidog.io/" target="_blank">CertStream</a>
        </td>
        <td>
            实时憑證透明紀錄更新流 。 參考 SSL 憑證是实时發行的 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.ccssforum.org/malware-certificates.php" target="_blank">CCSS Forum Malware Certificates</a>
        </td>
        <td>
            以下是數位憑證清單, 這項資訊旨在幫助阻止公司使用數位憑證增加恶意軟件的合法性,
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://cinsscore.com/list/ci-badguys.txt" target="_blank">CI Army List</a>
        </td>
        <td>
        廣告的子集 <a href="http://cinsscore.com/">CINS Score</a> 列表, 專注於目前其他威脅列表中不存在的標準差的IP。
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://s3-us-west-1.amazonaws.com/umbrella-static/index.html" target="_blank">Cisco Umbrella</a>
        </td>
        <td>
            Cisco Supplement(是 OpenDNS) 解析的100萬個網站,
	</td>
    </tr>
    <tr>
        <td>
            <a href="https://cloudmersive.com/virus-api" target="_blank">Cloudmersive Virus Scan</a>
        </td>
        <td>
            云源病毒 掃瞄API 掃瞄檔案, URL, 以及病毒的雲儲存 。 以及高性能掃瞄能力。 服務是免費的, 但需要您登記帳號才能取回您的個人 API 金鑰 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.crowdsec.net/" target="_blank">CrowdSec Console</a>
        </td>
        <td>
            最大群源CTI, CrowdSec 一個下一源,開源,自由,合作的IDS/IPS軟體。 <a href="https://crowdsec.net" target="_blank">CrowdSec</a>  能夠分析訪客行為, 使用者可以與社群分享對威脅的警示, IP地址來自真正的攻擊,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cybercure.ai/" target="_blank">Cyber Cure free intelligence feeds</a>
        </td>
        <td>
            Cyber Cure提供自由的網路威脅情報, 有恶意軟體使用的urls清單和已知恶意軟體的散列檔案清單, CyberCure正在使用感應器收集假正率很低的智慧。 详细 <a href="https://docs.cybercure.ai" target="_blank">documentation</a> 也提供。
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/community/ctix-feeds" target="_blank">Cyware Threat Intelligence Feeds</a>
        </td>
        <td>
            Cyware的威脅情報資訊給您帶來了來自各種開放且可信任的威脅資料, 我們的威脅情報訊息與STIX 1.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://dataplane.org/" target="_blank">DataPlane.org</a>
        </td>
        <td>
          DataPlane.org 由操作者提供。 我們不惜一切代價提供可靠和可靠的服務
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://focsec.com" target="_blank">Focsec.com</a>
        </td>
        <td>
          Focsec.com 提供 API 以檢測 VPN 、 代理伺服器、 Bots 和 TOR 要求 。 提供最新資料, 程式碼示例可以在 <a href="https://docs.focsec.com" target="_blank">documentation</a>.
        </td>
   </tr>	
   <tr>
        <td>
            <a href="https://osint.digitalside.it/" target="_blank">DigitalSide Threat-Intel</a>
        </td>
        <td>
          包含各套開源網路威脅情報指示器, 這項計畫的用意是研發和試驗新的捕獵、分析、收集和分享相關IC的方法, 分享報告的方式有三: <a href="https://osint.digitalside.it/Threat-Intel/stix2/" target="_blank">STIX2</a>, <a href="https://osint.digitalside.it/Threat-Intel/csv/" target="_blank">CSV</a> 和 <a href="https://osint.digitalside.it/Threat-Intel/digitalside-misp-feed/" target="_blank">MISP Feed</a>此外, <a href="https://github.com/davidonzo/Threat-Intel/" target="_blank">project's Git repository</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/martenson/disposable-email-domains">Disposable Email Domains</a>
        </td>
        <td>
            收集匿名或一次性的郵件域名,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://securitytrails.com/dns-trails">DNS Trails</a>
        </td>
        <td>
            尋找與某些IP、子域知識及科技相關的其他網站。 有 <a href="https://securitytrails.com/">IP and domain intelligence API available</a> 也是 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feed.ellio.tech" target="_blank">ELLIO: IP Feed (community free version)</a>
        </td>
        <td>
            一個已知的惡意IP地址的威脅列表, 預期在不遠的未來會對您的網路造成威脅, 已知的良性掃描器, 但與其他開放的IP威脅清單/食物相比,
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/fwrules/" target="_blank">Emerging Threats Firewall Rules</a>
        </td>
        <td>
            包括 iptables 、 PF 和 PIX 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/blockrules/" target="_blank">Emerging Threats IDS Rules</a>
        </td>
        <td>
            斯諾特和蘇里卡塔集 <i>规则</i> 可用于提醒或阻擋的檔案。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exonerator.torproject.org/" target="_blank">ExoneraTor</a>
        </td>
        <td>
            其 ExoneraTor 服務維持著 Tor 網路中 IP 位址的數據庫 。 答案是 Tor 在指定日期的 IP 位址上是否有執行中繼 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.exploitalert.com/" target="_blank">Exploitalert</a>
        </td>
        <td>
            列出最新釋放的利用
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intercept.sh/threatlists/" target="_blank">FastIntercept</a>
        </td>
        <td>
	    截取安全( Intercept Security) 從他們的全球蜂蜜罐網絡上,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feodotracker.abuse.ch/" target="_blank">ZeuS Tracker</a>
        </td>
        <td>
            Feodo 追蹤器 <a href="https://abuse.ch/" target="_blank">abuse.ch</a> 追蹤Feodo Trojan。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://iplists.firehol.org/" target="_blank">FireHOL IP Lists</a>
        </td>
        <td>
            400+ 分析公開的 IP Feed 以記錄其演化、地理圖、 IP 年齡、 保留政策、 重複。 網站關注網路犯罪(攻擊、虐待、恶意軟體),
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://fraudguard.io/" target="_blank">FraudGuard</a>
        </td>
        <td>
            FraudGuard 這項服務的設計是,
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://greynoise.io/" target="_blank">GreyNoise</a>
        </td>
        <td>
            GreyNoise 收集和分析全網路掃瞄活動的資料。 也收集 SSH 和 telenet 蠕蟲等惡意演員。 
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://griffinguard.io/" target="_blank">GriffinGuard</a>
        </td>
        <td>
            GriffinGuard 提供即時威脅情報, 它提供自由資料搜索,一些是自由的 IP blocklists.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://honeydb.io/" target="_blank">HoneyDB</a>
        </td> 
        <td>
            HoneyDB 提供蜜罐活性的实时數據。 此資料來自網路上部署的蜜罐, <a href="https://github.com/foospidy/HoneyPy" target="_blank">HoneyPy</a> 蜜罐 此外, HoneyDB 包括各種蜂蜜罐推特資訊的汇总資料。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SupportIntelligence/Icewater" target="_blank">Icewater</a>
        </td>
        <td>
            12,805 自由雅拉規則由冰水專案創立。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://infosec.cert-pa.it" target="_blank">Infosec - CERT-PA</a>
        </td>
        <td>
            恶意樣本 <a href="https://infosec.cert-pa.it/analyze/submission.html" target="_blank">collection and analysis</a>, <a href="https://infosec.cert-pa.it/analyze/statistics.html" target="_blank">blocklist service, <a href="https://infosec.cert-pa.it/cve.html">vulnerabilities database</a> 更多 由CERT-PA建立和管理.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://labs.inquest.net" target="_blank">InQuest Labs</a>
        </td>
        <td>
            供安全研究者使用。 搜索大量檔案樣本 收集名譽信息 以及從公共資源中提取的IOC 增強 YARA 發展, 用工具來產生觸發器, 處理混合大小寫的十六進制, 並產生 Base64 相容的正規表示式 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.iblocklist.com/lists" target="_blank">I-Blocklist</a>
        </td>
        <td>
            I-Blocklist 維持數種包含不同類別的 IP 位址的清單 。 包括國家、ISP和組織。 其他清單包括網絡攻擊、TOR、間諜軟件和代理。 許多人可以自由使用,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ipasis.com" target="_blank">IPASIS</a>
        </td>
        <td>
            IPASIS 包括IP情報、代理/VPN/Tor偵測、電子郵件驗證等, 每個要求都傳回互動信任分數 (0-)100) 有次20ms回應時間。 免費階段包括每天1,000次要求。 <a href="https://ipasis.com/docs" target="_blank">API documentation</a> 和 a <a href="https://ipasis.com/scan" target="_blank">live scanner</a> 已有。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/stamparm/ipsum/master/ipsum.txt" target="_blank">IPsum</a>
        </td>
        <td>
            IPsum 30的威脅情報+ 不同可公开的可疑和/或恶意IP地址列表。 所有清單都在每天( 24h) 的基础上自動取回並解析, 最後的結果被推到此主目錄 。 清單由 IP 位址及總數( 黑色) 清單發生( 每一個) 。 由 <a href="https://twitter.com/stamparm">Miroslav Stampar</a>.
        </td>
    </tr>
    <tr>
	<td>
            <a href="https://jamesbrine.com.au" target="_blank">James Brine Threat Intelligence Feeds</a>
        </td>
        <td>
		包括SSH、FTP、RDP、GIT、SNMP和REDIS等。 上一天的IOC有: STIX2 例如可疑的URI和新登記的網域,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/datafeeds" target="_blank">Kaspersky Threat Data Feeds</a>
        </td>
        <td>
持續更新資訊, 即時資料有助于你更有效地減輕威脅, Demo Data Feed 中包含短路集的IoC( 最多1% ) , 而不是商業集
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://majestic.com/reports/majestic-million" target="_blank">Majestic Million</a>
        </td>
        <td>
            依Majestic排名, 網站由參考子網的數量來排序 。 更多關於排名,可以在他們的 <a href="https://blog.majestic.com/development/majestic-million-csv-daily/" target="_blank">blog</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maldatabase.com/" target="_blank">Maldatabase</a>
        </td>
        <td>
            數據庫的設計是幫助恶意軟件數據科學 和威脅情報資源。 提供資料, 包括聯絡域、 執行行程清單、 以及每個樣本丟棄的檔案等。 這些素材可以讓你改善你的監控和安全工具 安全研究者和學生可享受免費服務。 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malpedia.caad.fkie.fraunhofer.de/" target="_blank">Malpedia</a>
        </td>
        <td>
Malpedia的首要目的, 開放捐款, 
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://www.malshare.com/" target="_blank">MalShare.com</a>
        </td>
        <td>
            馬爾沙雷計畫是一個公開的惡意軟件寄存器,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.maltiverse.com/" target="_blank">Maltiverse</a>
        </td>
        <td>
            馬爾蒂弗斯計畫是一個大型且内容豐富的IoC數據庫, 它也有很好的IoC批量查詢服務.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bazaar.abuse.ch/" target="_blank">MalwareBazaar</a>
        </td>
        <td>
            MalwareBazaar 是來自 abuse.ch 目的就是與資訊群體、AV小贩和威脅情報提供商分享惡意軟件樣本
        </td>
    </tr>	
    <tr>
        <td>
            <a href="https://www.malwaredomainlist.com/" target="_blank">Malware Domain List</a>
        </td>
        <td>
            可搜尋的同樣執行反轉的惡意域清單 lookup專注於網游、特洛伊人、开发工具。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.malwarepatrol.net/" target="_blank">Malware Patrol</a>
        </td>
        <td>
            提供區塊清單、數據資訊、威脅情報, 因為我們的專長是網絡威脅情報 我們所有的資源都投入到 確保它具有最高的質量 我們相信一個安全團隊 它的工具只有用過的數據 這意味著我們的饲料沒有被廢棄的 未经驗證的指示器填滿 我們把質量比量值高 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malware-traffic-analysis.net/" target="_blank">Malware-Traffic-Analysis.net</a>
        </td>
        <td>
            這個部落格關注與恶意軟體感染相關的網路流量。 包括流量分析、教訓、惡意软件樣本、惡意網路流量的pcap檔案,
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.malwaredomains.com/" target="_blank">MalwareDomains.com</a>
        </td>
        <td>
            DNS-BH專案建立並維持已知用于宣傳惡意軟件和間諜軟件的領域清單。 這些可以用于偵察及預防(Sinkholing DNS requests).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opswat.com/developers/threat-intelligence-feed" target="_blank">MetaDefender Cloud</a>
        </td>
        <td>
            MetaDefender Cloud 威脅情報訊息 Feeds 包含最新型的恶意軟件散列簽章, 包括 MD5, SHA1, 以及 SHA256. 這些新的惡毒的散列車被發現了 MetaDefender Cloud 在過去24小時內 提供可行動的及時威脅情報。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.nothink.org">NoThink!</a>
        </td>
        <td>SNMP, SSH, Telnet 黑名單IP 來自 Matteo Cantoni 的蜜罐</td>
    </tr>
    <tr>
        <td>
            <a href="https://services.normshield.com" target="_blank">NormShield Services</a>
        </td>
        <td>
            NormShield Services 提供數以千計的域名資訊(包括whois資訊), 也提供违反和黑名單服務。 公務單位可自由簽署,
        </td>
    </tr> 
    <tr>
        <td>
            <a href="https://novasense-threats.com" target="_blank">NovaSense Threats</a>
        </td>
        <td>
            NovaSense是Snapt威脅情報中心, NovaSense保護所有大小的客戶,
        </td>
    </tr>     
    <tr>
        <td>
            <a href="https://www.obstracts.com/" target="_blank">Obstracts</a>
        </td>
        <td>
            網路安全團隊的RSS讀者 任何部落格都變成有條理且可行動的威脅情報。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://openphish.com/phishing_feeds.html" target="_blank">OpenPhish Feeds</a>
        </td>
        <td>
            OpenPhish 從多串流接收 URL, 並使用其專有的網頁檢測算法分析 。 有免费提供的商品。
        </td>
    </tr>
        <tr>
        <td>
            <a href="https://feed.seguranca-informatica.pt/index.php" target="_blank">0xSI_f33d</a>
        </td>
        <td>
            在葡萄牙網路網絡上,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.phishtank.com/developer_info.php" target="_blank">PhishTank</a>
        </td>
        <td>
            PhishTank 傳送疑似網址清單 。 他們的數據來自人類的報告, 但他們也尽可能地摄取外部的資訊。 這是免費服務 但有時需要為API金鑰登記
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.celerium.com/pickupstix" target="_blank">PickupSTIX</a>
        </td>
        <td>
            PickupSTIX 是自由、開源、非商业化的網路威脅情報的素材。 目前, PickupSTIX 使用三張公用訊息, PickupSTIX 將各种資源翻譯成 STIX, 它能與任何 TAXII 伺服器。 數據可以自由使用,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://qfeeds.com" target="_blank">Q-Feeds Threat Intelligence</a>
        </td>
        <td>
            Q-Feeds是一家网络安全公司, 他們的威脅情報入口(TIP)讓組織很容易实时存取和管理此資料。 Q-Feeds協助企業在威脅可能造成傷害之前, 也提供社群版本。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rescure.fruxlabs.com/" target="_blank">REScure Threat Intel Feed</a>
        </td>
        <td>
            由Fruxlabs Crack團隊進行, 以提升他們對分布式系統的基本架构、威脅情報的本質, 食物每6小時生成一次。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rstcloud.net/" target="_blank">RST Cloud Threat Intel Feed</a>
        </td>
        <td>
            利用我們的智商平台,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://report.cs.rutgers.edu/mrtg/drop/dropstat.cgi?start=-86400">Rutgers Blacklisted IPs</a>
        </td>
        <td>SSH Brute強制攻擊者的IP列表是由當地觀察的IP和在badip.com和blocklist.de注册的2小時的老IP合并而成.</td>
    </tr>
    <tr>
        <td>
            <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS Suspicious Domains</a>
        </td>
        <td>
            可疑域威脅列表 <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS</a> 追蹤可疑域。 它提供3份列表 <a href="https://isc.sans.edu/feeds/suspiciousdomains_High.txt" target="_blank">high</a>, <a href="https://isc.sans.edu/feeds/suspiciousdomains_Medium.txt" target="_blank">medium</a> 或 <a href="https://isc.sans.edu/feeds/suspiciousdomains_Low.txt" target="_blank">low</a> 敏感度, 高敏感度列表的假陽性少, 而低敏感度列表的假陽性多。 還有一個 <a href="https://isc.sans.edu/feeds/suspiciousdomains_whitelist_approved.txt" target="_blank">approved whitelist</a> 域。<br/>
            最后,有人提出 <a href="https://isc.sans.edu/block.txt" target="_blank">IP blocklist</a> 從 <a href="https://dshield.org">DShield</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/securityscorecard/SSC-Threat-Intel-IoCs" target="_blank">SecurityScorecard IoCs</a>
        </td>
        <td>
            從技術部落格文章和SecurityScorecard的報告中,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.stixify.com/" target="_blank">Stixify</a>
        </td>
        <td>
            你的自動威脅情報分析員 從不結構的資料中提取機器可讀性智能 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/signature-base" target="_blank">signature-base</a>
        </td>
        <td>
            Neo23x0在其他工具中使用的簽名數據庫.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.spamhaus.org/" target="_blank">The Spamhaus project</a>
        </td>
        <td>
            Spamhaus 專案包含多份威脅列表,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.sophos.com/intelix" target="_blank">SophosLabs Intelix</a>
        </td>
        <td>
            SophosLabs Intelix 是索福斯產品和合伙人的威脅情報平台 您可以根據檔案散列、 URL等取得情報。 并提交样品以供分析。 透過 REST API,你可以輕而易舉地把這個威脅情報加入你的系統中。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://spur.us" target="_blank">Spur</a>
        </td>
        <td>
            Spur提供工具與資料, 自由計劃允許使用者 lookup VPN提供商 IP 后面的流行地理定位 以及一些更有用的上下文
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://sslbl.abuse.ch/" target="_blank">SSL Blacklist</a>
        </td>
        <td>
            SSL Blacklist (SSLBL)是由 abuse.ch。目標是提供一份由 abuse.ch 和惡意軟件或肉網活動有關 SSLBL 依赖于 SHA1 恶意 SSL 憑證的指紋, 并提供各种黑名單
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://statvoo.com/dl/top-1million-sites.csv.zip" target="_blank">Statvoo Top 1 Million Sites</a>
        </td>
        <td>
            由Statvoo排名,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://strongarm.io" target="_blank">Strongarm, by Percipient Networks</a>
        </td>
        <td>
            Strongarm是一個DNS的黑洞, Strongar 聚合自由指示器供應, 與商業供應整合, 使用 Percipient 的 IOC 供應, 強力武器是免費的
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.siemrules.com" target="_blank">SIEM Rules</a>
        </td>
        <td>
            你的探測工程資料庫 查看、修改和部署 SIEM rules 以捕捉和侦測威脅
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.talosintelligence.com/" target="_blank">Talos</a>
        </td>
        <td>
	    Cisco Talos Intelligence Group是世界上最大的商業威脅情報團體之一, 這些團隊由無敵的遥測和精密系統支持, Talos 保護思科的客戶免受已知和新出现的威脅, 除了釋放許多開源的研究和分析工具之外, Talos還維持Snort. Talos 提供方便使用網路 UI 檢查 。 <a href="https://www.talosintelligence.com/reputation">observable's reputation</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfeeds.io" target="_blank">threatfeeds.io</a>
        </td>
        <td>
            threatfeeds.io 列出自由與開源的威脅情報資訊與來源,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfox.abuse.ch/" target="_blank">threatfox.abuse.ch</a>
        </td>
        <td>
            PreportFox 是自由平台,來自 abuse.ch 以分享與惡意軟件相關的妥協指示器(IOCs),
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatconnect.com/blog/ingest-technical-blogs-reports/" target="_blank">Technical Blogs and Reports, by ThreatConnect</a>
        </td>
        <td>
            這個來源充斥著90多個開放源, 海洋学委员会(<a href="https://en.wikipedia.org/wiki/Indicator_of_compromise" target="_blank">Indicators of Compromise</a>部落格的內容以標示下的格式。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatjammer.com" target="_blank">Threat Jammer</a>
        </td>
        <td>
            Preport Jamer是一個REST API服務, 它讓開發者、安全工程師和其他IT專業人士從各種來源取得高质量的威脅情報資料,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatminer.org/" target="_blank">ThreatMiner</a>
        </td>
        <td>
            ThreatMiner 以讓分析家從數據收集中解脫出來, 並提供一個入口,
            着重 ThreatMiner 也為分析員提供他們所觀察的IoC背景資訊。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/WSTNPHX/scripts-n-tools/master/malware-email-addresses.txt">WSTNPHX Malware Email Addresses</a>
        </td>
        <td>VVestron Phoronix (WSTNPHX) 收集的恶意軟件使用的郵件位址</td>
    </tr>
    <tr>
        <td>
            <a href="https://portal.underattack.today/" target="_blank">UnderAttack.today</a>
        </td>
        <td>它分享IP和可疑事件及攻擊的資訊。 登記是免費的</td>
    </tr>
    <tr>
        <td>
            <a href="https://urlhaus.abuse.ch">URLhaus</a>
        </td>
        <td>URLhaus 是來自 abuse.ch 以分享恶意網址為目的,</td>
    </tr>
    <tr>
        <td>
            <a href="https://virusshare.com/" target="_blank">VirusShare</a>
        </td>
        <td>
            VirusShare提供安全研究者、事件反應者、法醫分析師, 只能以邀请方式获准使用该网站。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://vuldb.com/?actor" target="_blank">VulDB CTI</a>
        </td>
        <td>
            VulDB 是一個弱點數據庫, 預測方法有助于決定邪惡角色的 研究與攻擊活動。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yara-Rules/rules" target="_blank">Yara-Rules</a>
        </td>
        <td>
            有不同Yara簽章的開源寄存器,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://IOCFeed.mrlooquer.com/" target="_blank">1st Dual Stack Threat Feed by MrLooquer</a>
        </td>
        <td>
Mrlooquer創造了第一個威脅訊息 專注於雙堆的系統 由于IPv6協議開始成為恶意軟件和舞弊通訊的一部分,所以在兩項協議(IPv4和IPv6)中有必要侦測和減輕威脅.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.validin.com/">Validin DNS Database</a>
        </td>
        <td>
            尋找與某些IP相關的其他網站, 有 <a href="https://app.validin.com/docs">free API for IP and domain intelligence</a> 也是 
        </td>
    </tr>
</table>

## 格式

用於分享威脅情報（主要是 IOC）的標準化格式。

<table>
    <tr>
        <td>
            <a href="https://capec.mitre.org/" target="_blank">CAPEC</a>
        </td>
        <td>
            共同攻擊模式CAPEC分析家、開發者、測試者、教育者可以藉此提升社群理解力,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cyboxproject.github.io/" target="_blank">CybOX</a>
        </td>
        <td>
            網絡可觀察電壓CybOX語言提供了一個共同的結構, 代表跨企業網絡安全運作區域的網絡觀察器,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc5070" target="_blank">IODEF (RFC5070)</a>
        </td>
        <td>
            提供共享電腦安全事件反應小組(CSIRTs)通常交流的電腦安全事件資訊的框架。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc4765" target="_blank">IDMEF (RFC4765)</a>
        </td>
        <td>
            <i>實驗</i> - 入侵探測訊息交流格式(IDMEF)的目的是界定數據格式和交流程序,以便分享入侵探測和反應系統以及可能需要與它們相互作用的管理系统所關注的信息。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maecproject.github.io/" target="_blank">MAEC</a>
        </td>
        <td>
            Malware 屬性編號與字元化(MAEC專案旨在建立和提供標準的語言,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=openc2" target="_blank">OpenC2</a>
        </td>
        <td>
            OASIS 開啟指令與控制( OpenC)2) 技術委員會 其 OpenC2 技術部會以 OpenC2 论坛。 在建立此 TC 和 spe 之前cif斜体, OpenC2 由國家安全局協助, 其 OpenC2 TC被包租來起草文件, specif以標準的方式,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://oasis-open.github.io/cti-documentation/" target="_blank">STIX 2.0</a>
        </td>
        <td>
            以表示網路威脅資訊。 STIX語言意圖傳達全方位的潜在網路威脅資訊, STIX 不仅允許工具不可知字段,而且提供了所谓的 <i>測試機制</i> 提供嵌入工具Spe的手段cific 元素,包括 OpenIOC雅拉和斯諾特 STIX 1. x 已存档 <a href="https://stixproject.github.io/" target="_blank">here</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://taxiiproject.github.io/" target="_blank">TAXII</a>
        </td>
        <td>
            信任的指示器自動變更TAXII協定一套服務與訊息交流, TAXII 藉由網路威脅的探測、预防和減輕。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://veriscommunity.net/index.html" target="_blank">VERIS</a>
        </td>
        <td>
            事件紀錄和事件分享词汇表( C)VERIS以有條理且可重复的方式描述安全事件。 VERIS 這是對安全業最关键和最持久的挑戰之一的反應 - 缺乏高质量的信息。 除了提供结构化格式外, VERIS 也收集社區的資料,<a target="_blank" href="http://www.verizonenterprise.com/verizon-insights-lab/dbir/">DBIR</a>)並在網路上以 GitHub <a target="_blank" href="https://github.com/vz-risk/VCDB">repository.org</a>.
        </td>
    </tr>
</table>

## 框架與平台

用於收集、分析、建立和分享威脅情報的框架、平台與服務。

<table>
    <tr>
        <td>
            <a href="https://github.com/abusesa/abusehelper" target="_blank">AbuseHelper</a>
        </td>
        <td>
            AbuseHelper 是接收和再分配虐待資源和威脅情報的開源框架。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://abuse.io/" target="_blank">AbuseIO</a>
        </td>
        <td>
            一個接收、處理、關聯及通知最终用户虐待報告的工具包,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cisa.gov/ais" target="_blank">AIS</a>
        </td>
        <td>
            網路安全及基建安全局(CISA)AIS聯邦政府與私人企業以機動速度互通網路威脅指示器。 威脅指示器是一些資訊, 如恶意IP位址,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/csirtgadgets/bearded-avenger" target="_blank">Bearded Avenger</a>
        </td>
        <td>
            消耗威脅情報的最快方法 继承国 CIF.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.blueliv.com/" target="_blank">Blueliv Threat Exchange Network</a>
        </td>
        <td>
            讓參與者與社區分享威脅指示器。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Cortex" target="_blank">Cortex</a>
        </td>
        <td>
            Cortex 可以使用單個網頁介面, 逐個分析或散裝模式, 例如IP、 電子郵件位址、 URL、 域名、 檔案或散列 。 網路介面是許多分析者的前端, 分析家也可以使用 Cortex REST API 使分析部分自动化.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://crits.github.io/" target="_blank">CRITS</a>
        </td>
        <td>
            CRITS 提供分析師合作研究恶意軟件與威脅的手段。 它插入中央情報數據庫, 但也可以用作私人案例 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://csirtgadgets.org/collective-intelligence-framework" target="_blank">CIF</a>
        </td>
        <td>
            集体情報框架CIF) 允許您將從多個來源中已知的惡意威脅資訊整合,並使用此資訊進行IR,偵測和減輕. 可用的代碼 <a href="https://github.com/csirtgadgets/massive-octo-spice" target="_blank">GitHub</a>.
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/ctix-stix-taxii-cyber-threat-intelligence-exchange" target="_blank">CTIX</a>
        </td>
        <td>
            CTIX 一個聰明的、服務端的威脅情報平台(TIP),
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.eclecticiq.com/platform" target="_blank">EclecticIQ Platform</a>
        </td>
        <td>
            EclecticIQ Platform 是 STIX /TAXII 威脅情報平台(TIP)讓威脅分析員有能力在以機動速度傳播情報的同时,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.enisa.europa.eu/topics/csirt-cert-services/community-projects/incident-handling-automation" target="_blank">IntelMQ</a>
        </td>
        <td>
            IntelMQ 使用訊息排隊協議收集及處理安全資訊、貼子、推特。 由歐洲CERT在多項InfoSec活動中設計。 它的主要目標是讓事件反應者輕易收集及處理威脅情報,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/intelowlproject/IntelOwl/" target="_blank">IntelOwl</a>
        </td>
        <td>
            Intel Owl是OSINT的解答 以取得關於spe的威脅情報資料cific 檔案、 IP 或大小單位 API 的域名 。 Intel Owl由分析器组成,可以運作以從外部來源取回資料(如VirusTotal或VirusTotal). AbuseIPDB或從內部分析器(如Yara或Oletools)產生情報。 它很容易融入你堆裝的安全工具<a href="https://github.com/intelowlproject/pyintelowl" target="_blank">pyintelowl</a>通常由SOC分析員手動完成的普通工作自动化。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.kaspersky.com/enterprise-security/threat-intelligence" target="_blank">Kaspersky Threat Intelligence Portal</a>
        </td>
        <td>
            提供網路威脅、合法物件及關係的知識基礎網站, 加入Kaspersky Lab威脅情報網頁, 提供四種相關服務:Kaspersky威脅資料源、威脅情報、Kaspersky威脅。 Lookup Kaspersky Research Sandbox 都以人可讀和機可讀格式提供。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/malstrom" target="_blank">Malstrom</a>
        </td>
        <td>
            Malstrom)的目標是成為威脅追蹤與法證藝術品的存放地, 注: Github 專案已存档( 未接受新的捐款 ) 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stratosphereips/Manati" target="_blank">ManaTI</a>
        </td>
        <td>
            其 ManaTI 專案協助威脅分析師,
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://django-mantis.readthedocs.io/en/latest/" target="_blank">MANTIS</a>
        </td>
        <td>
            基于模型的威脅情報源分析MANTIS網路威脅情報管理框架支持以各种標準語言, CybOX是 *不是* 準備做大產
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cert-se/megatron-java" target="_blank">Megatron</a>
        </td>
        <td>
            威震天是由CERT-SE實施的工具,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/PaloAltoNetworks/minemeld/wiki" target="_blank">MineMeld</a>
        </td>
        <td>
            一個可延伸的威脅情報處理框架建立了帕洛阿爾托網路.
            它可以用于操縱指示器清單,
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.misp-project.org/" target="_blank">MISP</a>
        </td>
        <td>
            垃圾資訊分享平台( U)MISP以收集、儲存、分发和分享網路安全指示器及恶意軟體分析。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CERT-Polska/n6" target="_blank">n6</a>
        </td>
        <td>
            n6 (Network Security EXchange)是一個大规模收集,管理和分发安全信息的系統. 透過簡單的 REST API 及網路介面, 經授權的使用者可以接收各类資料, 由 <a href="https://www.cert.pl/en/" target="_blank">CERT Polska</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ocsf.io/" target="_blank">Open Cybersecurity Schema Framework (OCSF)</a>
        </td>
        <td>
            開放網路安全Schema框架是一個開放源碼的計畫, 供應商及其他數據製作商可採用及延伸其樣子的計劃cific域. 讓數據科學家與分析家能使用共同的語言, 其目標是提供一個在任何環境、應用或解決中通過的開放標準,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opencti.io/en/" target="_blank">OpenCTI</a>
        </td>
        <td>
            OpenCTI網路威脅情報平台讓組織管理他們的網路威脅情報知識與觀察。 它的目標是建立、儲存、整理和視覺有關網路威脅的技術和非技術資訊。 數據依據於 STIX2 标准。 OpenCTI 可与其他工具和平台整合,包括: MISP和MITRE ATT&CKA.o.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware.html" target="_blank">OpenIOC</a>
        </td>
        <td>
            OpenIOC 是分享威脅情報的开放式框架 它的設計是以機能化格式在内部和外部交流威脅信息。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/OpenTAXII" target="_blank">OpenTAXII</a>
        </td>
        <td>
            OpenTAXII 是 Python 的強烈實施 TAXII 提供豐富功能集的服務,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Ptr32Void/OSTrICa" target="_blank">OSTrICa</a>
        </td>
        <td>
            一個開源外掛程式的框架, 以收集和視像威脅情報資訊 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://otx.alienvault.com" target="_blank">OTX - Open Threat Exchange</a>
        </td>
        <td>
            全球威脅研究者及安全專家群組, 它能提供社區產生的威脅數據, 提供合作研究,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Lookingglass/opentpx/" target="_blank">Open Threat Partner eXchange</a>
        </td>
        <td>
            其 Open Threat Partner eXchange (OpenTPX)包含一种開源格式和工具,用以交换机器可讀取的威脅情報和網路安全操作資料. 它是一种基于 JSON 的格式, 可以讓相連系統分享資料 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.riskiq.com/" target="_blank">PassiveTotal</a>
        </td>
        <td>
            其 PassiveTotal RiskIQ提供平台是威脅分析平台, 提供几种解决方案,以及与其他系统的整合。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pulsedive.com/" target="_blank">Pulsedive</a>
        </td>
        <td>
            Pulsedive是一個自由的社區威脅情報平台, 它讓使用者可以提交、搜尋、連結及更新IOC; 列出「危險因素」,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.recordedfuture.com/" target="_blank">Recorded Future</a>
        </td>
        <td>
            由開放、關閉、技術來源, 他們的科技利用自然語言處理(NLP)與機器學習,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Netflix/Scumblr" target="_blank">Scumblr</a>
        </td>
        <td>
            Scumblr 是允许定期同步資料來源的網頁應用程式( 如 Github 分析(如静态分析、动态檢查和元数据收集)
            Scumblr協助你通過智慧的自動系統框架來精简积极主动的安保,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.anomali.com/platform/staxx" target="_blank">STAXX (Anomali)</a>
        </td>
        <td>
            Anomali STAXXTM 讓你可以自由、簡單地订阅任何STIX/TAXII 提供。 只需下載STAXX 用戶端, 設定您的資料來源, 而STAXX 會處理其余的 。
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://stoq.punchcyber.com/" target="_blank">stoQ</a>
        </td>
        <td>
            stoQ 讓網絡分析員能整理與自動化重复的、由數據導引的任務。 它的功能是插件, 很多其它系統可以與它互動 。
            一個用例是從文件提取IOCs, <a href="https://stoq-framework.blogspot.nl/2016/04/operationalizing-indicators.html" target="_blank">here</a>, 但是它也可以用于解碼和解碼內容, 以及像 YARA 那樣的自動掃描。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/tripwire/tardis" target="_blank">TARDIS</a>
        </td>
        <td>
            威脅分析ais和數據情報系統TARDIS)是使用攻擊簽章進行歷史搜尋的開源框架 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatconnect.com/" target="_blank">ThreatConnect</a>
        </td>
        <td>
            ThreatConnect 是一個具有威脅智慧 分析能力 以及管弦樂能力的平台 它旨在幫助你收集數據、產生智慧、與他人分享,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatcrowd.org/" target="_blank">ThreatCrowd</a>
        </td>
        <td>
            ThreatCrowd 這是一個尋找和研究與網路威脅有關的藝術品的系統。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatpipes.com" target="_blank">ThreatPipes</a>
        </td>
        <td>
            站在對手前面兩步 全面了解他們如何利用你
            <br />
            ThreatPipes 是個偵測器ais以收集IP位址、域名、電子郵件位址、姓名等資訊。
            <br />
            你只是cify 您要調查的目標, 選擇要啟動的模組, 然后 ThreatPipes 會收集數據 以建立對所有實體的理解 以及它們之間的關係
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://developers.facebook.com/docs/threat-exchange/" target="_blank">ThreatExchange</a>
        </td>
        <td>
            建立 Facebook ThreatExchange 藉由方便、有條理、容易使用的API, 提供隱私控制, 此專案仍在 <b>β</b>。參考代碼可以在 <a href="https://github.com/facebook/ThreatExchange" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/typedb-osi/typedb-cti" target="_blank">TypeDB CTI</a>
        </td>
        <td>
		類型DB 資料 - CTI是一個開源威脅情報平台, 讓威脅性情報專家能將不同的CTI資訊整合到一個數據庫, 此寄存器提供基于 STIX2包含MITRE ATT&CK 開始探索這個威脅情報平台 更多在這 <a href="https://blog.vaticle.com/introducing-a-knowledge-graph-for-cyber-threat-intelligence-with-typedb-bdb559a92d2a" target="_blank">blog post</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://beta.virusbay.io/" target="_blank">VirusBay</a>
        </td>
        <td>
            VirusBay 一個基于網路的合作平台,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/brianwarehime/threatnote" target="_blank">threatnote.io</a>
        </td>
        <td>
            新的和完善的 threatnote.io - CTI分析員與團隊在全國平台管理情報要求、報告與CTI行程的工具
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exchange.xforce.ibmcloud.com/" target="_blank">XFE - X-Force Exchange</a>
        </td>
        <td>
            IBM XFE的X-Force Exchange(XFE)是一款自由的SaaS產品,你可以用它來搜索威脅情報,收集你的發現,並與XFE社區的其他成员分享你的洞察力.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://yeti-platform.github.io/" target="_blank">Yeti</a>
        </td>
        <td>
            開放的 發行的 機器和資訊分析師的威脅情報庫 由事件反應者制造
        </td>
    </tr>
</table>



## 工具

用於解析、建立和編輯威脅情報的各類工具，主要以 IOC 為基礎。

<table>
    <tr>
        <td>
            <a href="https://github.com/jalewis/actortrackr" target="_blank">ActorTrackr</a>
        </td>
        <td>
            ActorTrackr 是用于儲存/ 搜尋/ 連結演員相關資料的開源網路應用程式 。 主要来源于使用者和各种公共寄存器。 可用來源於 <a href="https://github.com/jalewis/actortrackr" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/camp0/aiengine" target="_blank">AIEngine</a>
        </td>
        <td>
            AIEngine 是下一代交互式/可編程的 Python/Ruby/Java/Lua包檢查引擎, 有能力學習而無人干涉, NIDS( 網路入侵偵測系統) 功能、 DNS 域名分類、 網路收集器、 網路法學等。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/referefref/aiocrioc" target="_blank">AIOCRIOC</a>
        </td>
        <td>
            人工智能AIOCRIOC以分析並從報告和其他網路內容中提取IOC, 包括嵌入式影像與背景資料。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://analyze.intezer.com" target="_blank">Analyze (Intezer)</a>
        </td>
        <td>
            Analysis是一個全能的恶意軟件分析平台,能對所有檔案進行靜態、动态和基因代碼分析。 並下載YARA簽名。 社區版可免費推出。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/1aN0rmus/TekDefense-Automater" target="_blank">Automater</a>
        </td>
        <td>
            Automater 是一個 URL/ domain, IP 地址, 以及 Md5 Hash OSINT 工具,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/svdwi/BlueBox" target="_blank">BlueBox</a>
        </td>
        <td>
            BlueBox 是OSINT的解答,以取得關於 spe 的威脅情報資料cific 檔案、 IP、 域名或網址及分析 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://botscout.com/">BotScout</a>
        </td>
        <td>
            BotScout 防止自動網路文稿, 稱為「機器人」,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/bro-intel-generator" target="_blank">bro-intel-generator</a>
        </td>
        <td>
            從 pdf 或 html 報告產生 Bro 情報檔的文稿 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/cabby" target="_blank">cabby</a>
        </td>
        <td>
            簡單的 Python 函式庫,供與 TAXII 伺服器。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/cacador" target="_blank">cacador</a>
        </td>
        <td>
            卡卡多爾是Go寫作的工具,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/combine" target="_blank">Combine</a>
        </td>
        <td>
            收集威脅情報素材
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CrowdStrike/CrowdFMS" target="_blank">CrowdFMS</a>
        </td>
        <td>
            CrowdFMS 使用私人API系統,
            框架會自動下載最近的一些樣本, 這會引起使用者YARA通知 feed 的警示 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-transmute.org/" target="_blank">CTI-Transmute</a>
        </td>
        <td>
            CTI-Transmute 將網路威脅情報( CTI) 資料轉換為 MISP 和 STIX 格式。 它提供一套API端點,可以自動轉換資料,更容易整合不同的威脅情報平台和工作流程. 可用來源於 <a href="https://github.com/MISP/cti-transmute" target="_blank">GitHub</a>.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cuckoosandbox/cuckoo" target="_blank">Cuckoo Sandbox</a>
        </td>
        <td>
            Cuckoo Sandbox是一款自動動恶意軟件分析系統。 這是全球最知名的開源恶意軟件分析沙盒, 對於許多組織,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cybergordon.com/" target="_blank">CyberGordon</a>
        </td>
        <td>
            CyberGordon 是威脅情報搜索引擎 它利用30+ 源。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CylanceSPEAR/CyBot" target="_blank">CyBot</a>
        </td>
        <td>
            CyBot 是個威脅情報聊天機 它能做几种 lookups 由自訂模組提供。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Fenrir" target="_blank">Fenrir</a>
        </td>
        <td>
            簡單的巴什IOC掃瞄器
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/FireHOL-IP-Aggregator" target="_blank">FireHOL IP Aggregator</a>
        </td>
        <td>
            保存 FireHOL 資訊的應用程式 <a href="https://github.com/firehol/blocklist-ipsets" target="_blank">blocklist-ipsets</a> 有IP地址的外表歷史 。 基于 HTTP 的 API 服務是為搜尋要求而開發的 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/Forager" target="_blank">Forager</a>
        </td>
        <td>
            多字的威脅情報獵人 - 收集文稿。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.gigasheet.co" target="_blank">Gigasheet</a>
        </td>
        <td>
            Gigasheet是用于分析巨大且互不相干的網路安全數據集的SaaS產品。 匯入大紀錄檔、 網流、 pcaps、 大 CSV更多
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/BinaryDefense/goatrider" target="_blank">GoatRider</a>
        </td>
        <td>
            GoatRider 這是一個簡單的工具, 可以动态地拉下炮兵威脅情報源、TOR、外星沃爾特斯 OTX 以及Alexa的上百個網站,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cse.google.com/cse/publicurl?cx=003248445720253387346:turlh5vi4xc" target="_blank">Google APT Search Engine</a>
        </td>
        <td>
            APT 群組, 操作與恶意搜尋引擎 。 此 Google 自訂搜尋的來源列于 <a href="https://gist.github.com/Neo23x0/c4f40629342769ad0a8f3980942e21d3" target="_blank">this</a> GitHub 注意
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ciscocsirt/gosint" target="_blank">GOSINT</a>
        </td>
        <td>
            其 GOSINT 校對:Soup
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://hashdd.com/" target="_blank">hashdd</a>
        </td>
        <td>
            工具 lookup 加密散列值的相關資訊
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/harbinger" target="_blank">Harbinger Threat Intelligence</a>
        </td>
        <td>
            Python 文稿可以從一個介面查詢多個網路威脅集合器 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Hippocampe" target="_blank">Hippocampe</a>
        </td>
        <td>
            Hippocampe將網路的威脅資源集成成於一個弹性搜索群組。 它有REST API 可以搜索它的"记忆" 它以 Python 文稿为基础, 它會取得符合 feed, 剖析和索引的網址 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/S03D4-164/Hiryu" target="_blank">Hiryu</a>
        </td>
        <td>
            藉此組織APT運動資訊,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/ioc-editor.html" target="_blank">IOC Editor</a>
        </td>
        <td>
            折中指示器的自由編輯器。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/ioc-finder" target="_blank">IOC Finder</a>
        </td>
        <td>
            Python 文庫, 以尋找文本中折中指示器 。 使用語法而不是regexs 提高理解性。 截至2019年2月,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ioc-fang/ioc_fanger" target="_blank">IOC Fanger (and Defanger)</a>
        </td>
        <td>
            扇形的 Python 文庫( S)`hXXp://example[.]com` => `http://example.com`和污辱(`http://example.com` => `hXXp://example[.]com`文本中的折中指标。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/armbues/ioc_parser" target="_blank">ioc_parser</a>
        </td>
        <td>
            以 PDF 格式提取安全報告折中指示器的工具。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mandiant/ioc_writer" target="_blank">ioc_writer</a>
        </td>
        <td>
            提供 Python 文庫,可以基本建立和編輯 OpenIOC 物件。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/python-iocextract" target="_blank">iocextract</a>
        </td>
        <td>
            提取網址、 IP 位址、 MD5/ SHA 散列、 電子郵件位址、 YARA 規則。 包括一些編碼與「已解碼」的IOC,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stephenbrannon/IOCextractor" target="_blank">IOCextractor</a>
        </td>
        <td>
            IOC( 縮寫指示器) 解析器是幫助從文字檔案中提取 IOC 的程序 。 一般的目標是加速解析结构化資料(IOCs)的过程 從非結構或半結構資料中解析
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/johestephan/ibmxforceex.checker.py" target="_blank">ibmxforceex.checker.py</a>
        </td>
        <td>
            IBM X- Force 交易所的 Python 用戶端 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/jager" target="_blank">jager</a>
        </td>
        <td>
            Jager是從各种輸入來源(目前為PDF,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/13850" target="_blank">Kaspersky CyberTrace</a>
        </td>
        <td>
            整合威脅數據與SIEM解决方案的威脅情報整合和分析工具。 使用者可以在目前安全行動的工作流程中,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/KasperskyLab/klara" target="_blank">KLara</a>
        </td>
        <td>
            KLara以 Python 寫成的分布式系統, 使研究者可以掃描一個或多個Yara 規則,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/libtaxii" target="_blank">libtaxii</a>
        </td>
        <td>
            處理的 Python 文庫 TAXII 引用信件 TAXII 服務
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Loki" target="_blank">Loki</a>
        </td>
        <td>
            簡單的IOC和事件反應掃瞄器。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/ssanthosh243/ip-lookup-docker" target="_blank">LookUp</a>
        </td>
        <td>
            LookUp 一個集中的頁面來取得 IP 位址的各种威脅資訊。 它可以輕易地融入SIEMs等工具的上下文選單和其他調查工具.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/HurricaneLabs/machinae" target="_blank">Machinae</a>
        </td>
        <td>
            Machinae是收集公共網站/信息的工具,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/silascutler/MalPipe" target="_blank">MalPipe</a>
        </td>
        <td>
            模組的恶意軟件( 和指示器) 收集和處理框架 。 它旨在從多個資源中拉出恶意軟件、網址和IP地址,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/misp-workbench" target="_blank">MISP Workbench</a>
        </td>
        <td>
            匯出資料的工具 MISP MySQL 數據庫,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/MISP-Taxii-Server" target="_blank">MISP-Taxii-Server</a>
        </td>
        <td>
            用 EclecticIQ 使用的一套設定檔 OpenTAXII 實施,以及當數據傳送至 TAXII 伺服器的收件箱。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/microsoft/msticpy" target="_blank">MSTIC Jupyter and Python Security Tools</a>
        </td>
        <td>
            Msticpy是 Jupyter Notebooks 的 InfoSec 調查與獵捕的圖書庫。 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/paulpc/nyx" target="_blank">nyx</a>
        </td>
        <td>
            這項計畫的目標是便利威脅情報器械向防衛系統分配,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/onemillion" target="_blank">OneMillion</a>
        </td>
        <td>
            Python 圖片庫以決定一個域名是否在 Alexa 或 Cisco 頂端, 100 萬個域名清單 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/STIXProject/openioc-to-stix" target="_blank">openioc-to-stix</a>
        </td>
        <td>
            產生 STIX XML 從 OpenIOC XML 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/omnibus" target="_blank">Omnibus</a>
        </td>
        <td>
            Omnibus 是一款交互式指令行應用程式, 用于收集和管理IOC/ artifacts(IPs, domains, Email 地址, 使用者名稱, 和 Bitcoin 地址),
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kx499/ostip/wiki" target="_blank">OSTIP</a>
        </td>
        <td>
            家鄉威脅數據平台
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mgeide/poortego" target="_blank">poortego</a>
        </td>
        <td>
            開源專案, 處理開源情報的儲存與連結( ala Maltego,cific/专有資料庫。 最初是紅宝石開發的 但新的編碼庫完全重寫成蟒蛇
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/yahoo/PyIOCe" target="_blank">PyIOCe</a>
        </td>
        <td>
            PyIOCe 是 IOC editor 用Python寫的。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/QTek/QRadio" target="_blank">QRadio</a>
        </td>
        <td>
            QRadio 以整合網路威脅情報來源。
            這項計畫的目標是建立強固的模組框架,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/aboutsecurity/rastrea2r" target="_blank">rastrea2r</a>
        </td>
        <td>
            收集與捕捉折中指示器( IOC) ,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/redline.html" target="_blank">Redline</a>
        </td>
        <td>
            包括IOC分析。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ocmdev/rita" target="_blank">RITA</a>
        </td>
        <td>
            真正的情報威脅分析RITA目的是在大小不一的企業網絡中,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/softrace" target="_blank">Softrace</a>
        </td>
        <td>
            輕量級國家軟體參考庫 RDS 儲存 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/0x4d31/sqhunter" target="_blank">sqhunter</a>
        </td>
        <td>
            以 Osquery 、 鹽 Open 和 Cymon API 為基礎的威脅獵人 。 它可以查詢開放的網路套接字 檢查它們是否有威脅情報來源
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SecurityRiskAdvisors/sra-taxii2-server" target="_blank">SRA TAXII2 Server</a>
        </td>
        <td>
            完全 TAXII 2.0 specif使用MongoDB後端。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://stixvalidator.com" target="_blank">Stixvalidator.com</a>
        </td>
        <td>
            Stixvalidator.com 是網路自由的 STIX 和 STIX2 驗證器服務 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/traut/stixview" target="_blank">Stixview</a>
        </td>
        <td>
            Stixview 是 JS 可嵌入式互動的圖書館。 STIX2 圖
        </td>
    </tr>
	<tr>
        <td>
            <a href="https://github.com/STIXProject/stix-viz" target="_blank">stix-viz</a>
        </td>
        <td>
            STIX可視化工具.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://test.taxiistand.com/" target="_blank">TAXII Test Server</a>
        </td>
        <td>
            讓您試驗您的 TAXII 使用 : TAXII 大小cif
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jpsenior/threataggregator" target="_blank">threataggregator</a>
        </td>
        <td>
            包括CEF、Snort和IPTables規則。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcrowd_api" target="_blank">threatcrowd_api</a>
        </td>
        <td>
            Python 文庫 ThreatCrowdAPI。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcmd" target="_blank">threatcmd</a>
        </td>
        <td>
            Cli 介面到 ThreatCrowd.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/syphon1c/Threatelligence" target="_blank">Threatelligence</a>
        </td>
        <td>
            使用Elasticsearch、Kibana和Python自動收集定制或公共來源的情報。 自動更新 feed 并試圖进一步增強儀表上的資料 。 然而,各工程似乎不再保留。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/ThreatIngestor" target="_blank">ThreatIngestor</a>
        </td>
        <td>
            柔軟的、由設定導引的、可延伸的 吸食威脅情報的框架 ThreatIngestor 並將資訊發送至其他系統进行分析。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://chrome.google.com/webstore/detail/threatpinch-lookup/ljdgplocfnmnofbhpkjclbefmjoikgke" target="_blank">ThreatPinch Lookup</a>
        </td>
        <td>
            Chrome的延伸檔名為IPv4、MD5、SHA2和CVes。 可用于 lookup在威脅調查中
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/michael-yip/ThreatTracker" target="_blank">ThreatTracker</a>
        </td>
        <td>
            一個 Python 文稿, 設計來監控與產生對特定套的IOC 的警示,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yelp/threat_intel" target="_blank">threat_intel</a>
        </td>
        <td>
            一些威脅情報的API集成於一個套件中. 包括: OpenDNS 調查、病毒總和影子伺服器。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/abhinavbom/Threat-Intelligence-Hunter" target="_blank">Threat-Intelligence-Hunter</a>
        </td>
        <td>
            透過多個公開的安全資訊以及一些知名的API, 以建立您本地的指數資料庫。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/tiq-test" target="_blank">tiq-test</a>
        </td>
        <td>
            威脅情報引數(TIQ)測試工具提供TI素材的視覺化和統計分析.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/yeti" target="_blank">YETI</a>
        </td>
        <td>
            YETI 概念的實驗 TAXII 支援 Inbox、 Poll 和 探索服務的 TAXII 服務cif.
        </td>
    </tr>
</table>



## <a name="research"></a>研究、標準與書籍

各類威脅情報讀物，包括（科學）研究與白皮書。

<table>
    <tr>
        <td>
            <a href="https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections" target="_blank">APT & Cyber Criminal Campaign Collection</a>
        </td>
        <td>
            广泛收集(歷史)運動。 項目來自各種來源。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kbandla/APTnotes" target="_blank">APTnotes</a>
        </td>
        <td>
            大量消息來源 <i>长期威胁</i> (APTs). 這些報告通常包括戰略學術或建議。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://attack.mitre.org/" target="_blank">ATT&CK</a>
        </td>
        <td>
            策略、技术和共同知識ATT&CK在企業網絡內運作時, ATT&CK 在網路入侵時, 例如: CAPEC,STIX和 MAEC.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.activeresponse.org/building-threat-hunting-strategy-with-the-diamond-model/" target="_blank">Building Threat Hunting Strategies with the Diamond Model</a>
        </td>
        <td>
            透過鑽石模型,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://car.mitre.org/wiki/Main_Page" target="_blank">Cyber Analytics Repository by MITRE</a>
        </td>
        <td>
            網路分析資源庫(CAR)是MITRE基于反常策略,技術,和共同知識(Conventions)而开发的一款分析資源庫.ATT&CKTM)威脅模型.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a>
        </td>
        <td>
            新的 <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a> 采用第一方法,并与 <a href="https://www.energy.gov/ceser/cybersecurity-capability-maturity-model-c2m2" target="_blank">Cybersecurity Capability Maturity Model (C2M2)</a> 創造持久的價值
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mitre/cti" target="_blank">Cyber Threat Intelligence Repository by MITRE</a>
        </td>
        <td>
            網路威脅情報庫 ATT&CK 和 CAPEC 以 STIX 2.0 杰森。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.tandfonline.com/doi/full/10.1080/08850607.2020.1780062" target="_blank">Cyber Threat Intelligence: A Product Without a Process?</a>
        </td>
        <td>
            描述目前網路威脅情報產品如何不足,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cryptome.org/2015/09/cti-guide.pdf" target="_blank">Definitive Guide to Cyber Threat Intelligence</a>
        </td>
        <td>
            描述網路威脅情報的元素, 以及資訊如何能幫助你更快停止攻擊, 改善你的防衛, <i>垃圾</i> 样式。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ryanstillions.blogspot.nl/2014/04/the-dml-model_21.html" target="_blank">The Detection Maturity Level (DML)</a>
        </td>
        <td>
            DML模型是一個能力成熟模型,
            它的設計是為那些進行情報引導的偵測和反應的組織而設計的,他們强调有成熟的偵測程序.
            一個組織的成熟度不是以它是否有能力只取得相關的智慧来衡量的,而是以它有能力有效地把這項智慧应用于偵測和反應功能.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/diamond.pdf" target="_blank">The Diamond Model of Intrusion Analysis</a>
        </td>
        <td>
            本文介紹了鑽石模型, 支持增加入侵分析的可衡量性、可考性和可重复性,
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/a547092.pdf" target="_blank">The Targeting Process: D3A and F3EAD</a>
        </td>
        <td>
            F3EAD是把行動和智慧结合起来的軍事方法.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/NIST.SP.800-150.pdf" target="_blank">Guide to Cyber Threat Information Sharing by NIST</a>
        </td>
        <td>
            《网络威脅信息共享指南》(NIST特别出版物800-)150) 協助各組織建立電腦安全事件反應能力, 包括製造與消耗數據, 參與資訊分享社群,
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/Intelligence Preparation for the Battlefield-Battlespace.pdf" target="_blank">Intelligence Preparation of the Battlefield/Battlespace</a>
        </td>
        <td>
            這篇文章討論戰鬥空間的情報準備(IPB)是軍事决策與計劃程序的重要组成部分,
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.lockheedmartin.com/content/dam/lockheed/data/corporate/documents/LM-White-Paper-Intel-Driven-Defense.pdf" target="_blank">Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains</a>
        </td>
        <td>
            提供一個分层次的入侵分析、指示器提取及防衛行動。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.isao.org" target="_blank">ISAO Standards Organization</a>
        </td>
        <td>
            其 ISAO Standards Organization 10月1日成立。 2015. 它的使命是改善國家的网络安全态势,
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/jp2_0.pdf" target="_blank">Joint Publication 2-0: Joint Intelligence</a>
        </td>
        <td>
            美國軍隊的這份發表 构成了聯合情報教義的核心 并为將行動、計劃和情報 完全整合成一個團結團體奠定了基础 所展示的概念也适用于(Cyber)威脅情報。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://download.microsoft.com/download/8/0/1/801358EC-2A0A-4675-A2E7-96C2E7B93E73/Framework_for_Cybersecurity_Info_Sharing.pdf" target="_blank">Microsoft Research Paper</a>
        </td>
        <td>
            网络安全信息共享和减少风险框架。 微软的一篇高水平概述文件。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/draft-dulaunoy-misp-core-format-00" target="_blank">MISP Core Format (draft)</a>
        </td>
        <td>
            此文件描述 MISP 核心格式 MISP (馬爾瓦信息與威脅分享平台)例。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.necoma-project.eu/" target="_blank">NECOMA Project</a>
        </td>
        <td>
            日本-歐洲網路防衛多層威脅分析(NECOMA)研究計畫,
            已出版多份出版物及軟體計畫。
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/pyramidofpain.pdf" target="_blank">Pyramid of Pain</a>
        </td>
        <td>
            「痛苦金字塔」(Pyramid of Pain)是一種圖像化方式,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.amazon.com/Structured-Analytic-Techniques-Intelligence-Analysis/dp/1452241511" target="_blank">Structured Analytic Techniques For Intelligence Analysis</a>
        </td>
        <td>
            這本書包含了一些方法,
        </td>
    </tr>
    <tr>
        <td>
            <a href="./docs/mwr-threat-intelligence-whitepaper.pdf" target="_blank">Threat Intelligence: Collecting, Analysing, Evaluating</a>
        </td>
        <td>
            MWR InfoSecurity的這份報告清楚描述了幾種不同的威脅情報, 也討論資訊的引發、收集、分析、製作與評估。 包括一些速勝者,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://aisel.aisnet.org/wi2017/track08/paper/3/" target="_blank">Threat Intelligence Sharing Platforms: An Exploratory Study of Software Vendors and Research Perspectives</a>
        </td>
        <td>
            對於22個威脅情報分享平台(TISP),
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.us-cert.gov/tlp" target="_blank">Traffic Light Protocol</a>
        </td>
        <td>
            交通光線協議(TLP)是一套指定, 它使用四种顏色來表示不同程度的敏感度和受助者要遵循的相应共享考量。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pan-unit42.github.io/playbook_viewer/" target="_blank">Unit42 Playbook Viewer</a>
        </td> 
        <td>
            Playbook 的目標是將對手使用的工具、技術和程序整理成結構格式, 用于結構和分享對手遊戲本的框架是MITRE的 ATT&CK 框架和 STIX 2.0
        </td>    
    </tr>
    <tr>
        <td>
            <a href="docs/sans-whos-using-cyberthreat-intelligence-and-how.pdf" target="_blank">Who's Using Cyberthreat Intelligence and How?</a>
        </td>
        <td>
            包括已進行的調查。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.wombat-project.eu/" target="_blank">WOMBAT Project</a>
        </td>
        <td>
            其 WOMBAT project 以提供新手段來了解網路經濟與網民的現有及新兴威脅。 (一) 实时收集一套與安全相關的原始資料;(二) 利用各种分析技巧丰富這項投入;
        </td>
    </tr>
</table>



## 執照

依據 [Apache License 2.0](LICENSE) 授權。
