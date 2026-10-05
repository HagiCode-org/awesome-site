# awesome-threat-intelligence
威胁情报优质资源精选

威胁情报的简明定义：*基于证据的知识，涵盖背景、机制、指标、影响和可执行建议，描述对资产构成的现有或新兴威胁或危险，可用于制定应对该威胁或危险的决策*。

欢迎[贡献](CONTRIBUTING.md)。

- [来源](#sources)
- [格式](#formats)
- [框架与平台](#frameworks-and-platforms)
- [工具](#tools)
- [研究、标准与书籍](#research)


## 来源

下列资源大多提供清单和/或 API，以便获取（希望是）最新的威胁信息。
有些人将这些来源视为威胁情报，但对此看法不一。
要形成真正的威胁情报，需要进行一定程度的领域或业务分析。

<table>
    <tr>
        <td>
            <a href="https://www.abuseipdb.com/" target="_blank">AbuseIPDB</a>
        </td>
        <td>
            AbuseIPDB 这个项目致力于帮助打击网络上黑客、垃圾邮件和虐待活动的蔓延。 其使命是提供一份中央黑名单,供网站主管,系统管理员,以及其他感兴趣的方面在线报告和找到与恶意活动有关的IP地址,从而帮助Web更安全.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://docs.google.com/spreadsheets/u/1/d/1H9_xaxQHpWaa4O_Son4Gx0YOIzlcBWMsdvePFX68EKU/pubhtml" target="_blank">APT Groups and Operations</a>
        </td>
        <td>
            包含有关APT团体,操作和战术的信息和情报的电子表格.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.binarydefense.com/banlist.txt" target="_blank">Binary Defense IP Banlist</a>
        </td>
        <td>
            二元防御系统炮兵威胁情报饲料和IPBanlist饲料.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.circl.lu/projects/bgpranking/" target="_blank">BGP Ranking</a>
        </td>
        <td>
            ANN的排名 内容最恶意。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intel.malwaretech.com/" target="_blank">Botnet Tracker</a>
        </td>
        <td>
            追踪多个活跃的botnet.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.botvrij.eu/">BOTVRIJ.EU</a>
        </td>
        <td>
            Botvrij.eu 提供不同的开源IOC,您可以在安全设备中用于检测可能的恶意活动.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://danger.rulez.sk/index.php/bruteforceblocker/download/" target="_blank">BruteForceBlocker</a>
        </td>
        <td>
            BruteForceBlocker 是用于监视服务器sshd日志并识别野蛮武力攻击的 prl 脚本,然后用于自动配置防火墙屏蔽规则并将这些IP提交项目站点, <a href="http://danger.rulez.sk/projects/bruteforceblocker/blist.php">http://danger.rulez.sk/projects/bruteforceblocker/blist.php</a>。 。 。 。
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://osint.bambenekconsulting.com/feeds/c2-ipmasterlist.txt" target="_blank">C&amp;C Tracker</a>
        </td>
        <td>
            由已知的、活跃的和无沉积的C组成的种子&amp;CIP地址 来自Bambenek咨询公司 需要商业使用许可证。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://certstream.calidog.io/" target="_blank">CertStream</a>
        </td>
        <td>
            实时证书透明日志更新流 。 见SSL证书作为实时发行.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.ccssforum.org/malware-certificates.php" target="_blank">CCSS Forum Malware Certificates</a>
        </td>
        <td>
            以下列出被论坛报告为可能与恶意软件相关的数字证书清单,提供给各证书主管部门. 这一信息旨在帮助防止公司使用数字证书为恶意软件增加合法性,并鼓励迅速撤销此类证书.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://cinsscore.com/list/ci-badguys.txt" target="_blank">CI Army List</a>
        </td>
        <td>
        商业的一个子集 <a href="http://cinsscore.com/">CINS Score</a> 列表,侧重于目前没有出现在其他威胁列表中的评级差的IP.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://s3-us-west-1.amazonaws.com/umbrella-static/index.html" target="_blank">Cisco Umbrella</a>
        </td>
        <td>
            Cisco United States(是OpenDNS)解决的100万网站的可能白名单.
	</td>
    </tr>
    <tr>
        <td>
            <a href="https://cloudmersive.com/virus-api" target="_blank">Cloudmersive Virus Scan</a>
        </td>
        <td>
            云雾病毒扫描API扫描文件,URL,以及病毒的云存储. 它们利用不断更新的签名应对数百万威胁,以及先进的高性能扫描能力。 此服务是免费的, 但需要您注册账户以获取您的个人 API 密钥 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.crowdsec.net/" target="_blank">CrowdSec Console</a>
        </td>
        <td>
            最大众源CTI, 近实时更新, CrowdSec a 下一源、开源、免费和协作的IDS/IPS软件。 <a href="https://crowdsec.net" target="_blank">CrowdSec</a>  能够分析访客行为, 用户可以与社区分享他们对威胁的警示,并从网络效应中获益. IP地址是从真正的攻击中收集的,并非完全来自蜜壶网络.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cybercure.ai/" target="_blank">Cyber Cure free intelligence feeds</a>
        </td>
        <td>
            Cyber Cure提供免费的网络威胁情报信息,其中包含目前被感染和网络攻击的IP地址清单. 有恶意软件使用的urls列表和已知恶意软件正在扩散的散列文件列表. CyberCure正在使用传感器来收集假阳性率很低的情报. 详细 <a href="https://docs.cybercure.ai" target="_blank">documentation</a> 也提供。
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/community/ctix-feeds" target="_blank">Cyware Threat Intelligence Feeds</a>
        </td>
        <td>
            Cyware的威胁情报情报从各种公开和可信赖的来源向你们提供了宝贵的威胁数据,以提供一批宝贵和可采取行动的威胁情报。 我们的威胁情报信息 与STIX 1.x 和 2.0 完全兼容, 提供最新信息 恶意恶意软件散列, IP 和域 在全球实时发现。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://dataplane.org/" target="_blank">DataPlane.org</a>
        </td>
        <td>
          DataPlane.org 由运营商为运营商提供社区驱动的互联网数据、种子和测量资源。 我们免费提供可靠和可信赖的服务。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://focsec.com" target="_blank">Focsec.com</a>
        </td>
        <td>
          Focsec.com 提供用于检测VPN、代理、Bots和TOR请求的API。 随时更新的数据有助于发现可疑的登录、欺诈和滥用。 代码示例可见于 <a href="https://docs.focsec.com" target="_blank">documentation</a>。 。 。 。
        </td>
   </tr>	
   <tr>
        <td>
            <a href="https://osint.digitalside.it/" target="_blank">DigitalSide Threat-Intel</a>
        </td>
        <td>
          包含各套开源网络威胁情报指标,大多基于恶意软件分析以及损坏的URL,IP和域. 这个项目的目的是制定和测试新的捕猎、分析、收集和分享有关IoC的方法,供SOC/CSIRT/CERT/个人在小型免疫方面努力使用。 报告的分享有三种方式: <a href="https://osint.digitalside.it/Threat-Intel/stix2/" target="_blank">STIX2</a>, (中文). <a href="https://osint.digitalside.it/Threat-Intel/csv/" target="_blank">CSV</a> 和 <a href="https://osint.digitalside.it/Threat-Intel/digitalside-misp-feed/" target="_blank">MISP Feed</a>报告也发表在《经济、社会、文化权利国际公约》 <a href="https://github.com/davidonzo/Threat-Intel/" target="_blank">project's Git repository</a>。 。 。 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/martenson/disposable-email-domains">Disposable Email Domains</a>
        </td>
        <td>
            用于垃圾邮件/滥用服务的匿名或一次性电子邮件域集。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://securitytrails.com/dns-trails">DNS Trails</a>
        </td>
        <td>
            目前和历史DNS信息的免费情报来源,WHOIS信息,寻找与某些IP,子域知识和技术相关的其他网站. 有一个 <a href="https://securitytrails.com/">IP and domain intelligence API available</a> 也一样。 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feed.ellio.tech" target="_blank">ELLIO: IP Feed (community free version)</a>
        </td>
        <td>
            一份已知恶意IP地址的威胁列表,预计在不久的将来会对您的网络构成潜在威胁,已知的良性扫描仪,以及意图不明的行为者的IP地址. 与其它公开的IP威胁清单/素材相比,它为个人和非商业用途提供了24小时的延迟,但仍提供特殊保护。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/fwrules/" target="_blank">Emerging Threats Firewall Rules</a>
        </td>
        <td>
            包括iptables,PF和PIX在内的几类防火墙的规则集.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/blockrules/" target="_blank">Emerging Threats IDS Rules</a>
        </td>
        <td>
            斯诺特和苏里卡塔的集合 <i>规则</i> 用于提醒或屏蔽的文件。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exonerator.torproject.org/" target="_blank">ExoneraTor</a>
        </td>
        <td>
            这个 ExoneraTor service维护着Tor网络中的IP地址数据库. 它回答了在特定日期某个IP地址上是否有Tor中继运行的问题.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.exploitalert.com/" target="_blank">Exploitalert</a>
        </td>
        <td>
            列出最新释放的剥削。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intercept.sh/threatlists/" target="_blank">FastIntercept</a>
        </td>
        <td>
	    拦截安全公司在其全球蜂蜜壶网络中托管了一些免费IP认证列表.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feodotracker.abuse.ch/" target="_blank">ZeuS Tracker</a>
        </td>
        <td>
            费奥多追踪器 <a href="https://abuse.ch/" target="_blank">abuse.ch</a> 追踪Feodo Trojan号
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://iplists.firehol.org/" target="_blank">FireHOL IP Lists</a>
        </td>
        <td>
            400个+ 分析公开的IP Feed,以记录其演化,地理图,IP的年龄,保留政策,重叠. 该网站关注网络犯罪(攻击,虐待,恶意软件).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://fraudguard.io/" target="_blank">FraudGuard</a>
        </td>
        <td>
            FraudGuard 这是一项服务,目的是通过不断收集和分析实时互联网流量,提供一种验证使用情况的简单方法。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://greynoise.io/" target="_blank">GreyNoise</a>
        </td>
        <td>
            GreyNoise 收集和分析关于互联网扫描活动的数据。 它收集了Shodan.io等良性扫描仪的数据,以及SSH和telnet蠕虫等恶意角色的数据. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://griffinguard.io/" target="_blank">GriffinGuard</a>
        </td>
        <td>
            GriffinGuard 网络安全平台提供实时威胁情报, 它提供免费数据搜索,一些免费 IP blocklist编号
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://honeydb.io/" target="_blank">HoneyDB</a>
        </td> 
        <td>
            HoneyDB 提供蜜壶活性的实时数据。 这些数据来自互联网上使用 <a href="https://github.com/foospidy/HoneyPy" target="_blank">HoneyPy</a> 蜜壶。 临Τ HoneyDB API提供获取所收集的蜂蜜壶活性的机会,其中也包括来自各种蜂蜜壶Twitter种子的汇总数据.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SupportIntelligence/Icewater" target="_blank">Icewater</a>
        </td>
        <td>
            12,805 自由雅拉规则由"冰水工程"创造.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://infosec.cert-pa.it" target="_blank">Infosec - CERT-PA</a>
        </td>
        <td>
            恶意样本 <a href="https://infosec.cert-pa.it/analyze/submission.html" target="_blank">collection and analysis</a>, (中文). <a href="https://infosec.cert-pa.it/analyze/statistics.html" target="_blank">blocklist service, <a href="https://infosec.cert-pa.it/cve.html">vulnerabilities database</a> 还有更多 由CERT-PA创建和管理.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://labs.inquest.net" target="_blank">InQuest Labs</a>
        </td>
        <td>
            面向安全研究人员的开放、互动和API驱动的数据门户。 搜索大量档案样本,汇总声誉信息,以及从公共来源提取的IOC. 增强YARA开发时使用生成触发器的工具,处理混合大小写十六进制,并生成base64兼容的正则表达式.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.iblocklist.com/lists" target="_blank">I-Blocklist</a>
        </td>
        <td>
            I-Blocklist 维护包含属于不同类别的IP地址的几种类型的列表. 其中一些主要类别包括国家、互联网服务提供商和组织。 其他列表包括网络攻击,TOR,间谍软件和代理. 许多人可以自由使用,并以各种形式提供。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ipasis.com" target="_blank">IPASIS</a>
        </td>
        <td>
            IPASIS 是一种实时的机器人检测和欺诈预防API,将IP智能,代理/VPN/Tor检测,电子邮件验证合并为一个API呼叫. 每个请求返回一个交互信任分数( 0 -)100) 带有子20ms响应时间. 免费等级包括每天1,000个请求。 <a href="https://ipasis.com/docs" target="_blank">API documentation</a> (单位:千美元) <a href="https://ipasis.com/scan" target="_blank">live scanner</a> 备有。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/stamparm/ipsum/master/ipsum.txt" target="_blank">IPsum</a>
        </td>
        <td>
            IPsum 威胁情报基于30+ 各种公开的可疑和/或恶意IP地址清单。 所有列表都按日(24h)自动检索和解析,最终结果被推到此寄存器. 列表由IP地址以及(每个)的(黑色)列表发生总数组成. 创建和管理者 <a href="https://twitter.com/stamparm">Miroslav Stampar</a>。 。 。 。
        </td>
    </tr>
    <tr>
	<td>
            <a href="https://jamesbrine.com.au" target="_blank">James Brine Threat Intelligence Feeds</a>
        </td>
        <td>
		JamesBrine每天提供来自云和私人基础设施的国际蜂窝的恶意IP地址的威胁情报信息,涵盖各种协议,包括SSH,FTP,RDP,GIT,SNMP和REDIS. 上一天的国际奥委会有: STIX2 以及其他一些国际海洋学委员会,例如可疑的核电站和新注册的、在钓鱼运动中使用率很高的领域。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/datafeeds" target="_blank">Kaspersky Threat Data Feeds</a>
        </td>
        <td>
不断更新并向您的企业或客户通报与网络威胁相关的风险和影响. 实时数据有助于你更有效地减轻威胁,并在攻击发动之前就加以防御。 Demo Data Feed 中包含短路集的IoCs(最多1%)与商业集相比
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://majestic.com/reports/majestic-million" target="_blank">Majestic Million</a>
        </td>
        <td>
            按Majestic的排名,可能为100万网站排名前的白名单. 站点由引用子网的数量来排序. 有关排名的更多信息可见于他们 <a href="https://blog.majestic.com/development/majestic-million-csv-daily/" target="_blank">blog</a>。 。 。 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maldatabase.com/" target="_blank">Maldatabase</a>
        </td>
        <td>
            马尔数据库旨在帮助恶意软件数据科学和威胁情报反馈. 如果数据包含关于联系领域、执行程序清单和每个样本丢弃文件等的良好信息。 这些素材可以让你改进你的监测和安全工具。 为安全研究人员和学生提供免费服务。 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malpedia.caad.fkie.fraunhofer.de/" target="_blank">Malpedia</a>
        </td>
        <td>
Malpedia的首要目标是在调查恶意软件时为快速识别和可采取行动的背景提供资源。 公开缴纳会费应确保问责的质量水平,以促进有意义的和可复制的研究。 
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://www.malshare.com/" target="_blank">MalShare.com</a>
        </td>
        <td>
            MalShare项目是一个公共恶意软件存储库,为研究人员提供免费的样本访问.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.maltiverse.com/" target="_blank">Maltiverse</a>
        </td>
        <td>
            Maltiverse Project是一个庞大且内容丰富的IoC数据库,可以进行复杂的查询和汇总,以调查恶意软件运动及其基础设施。 它还有一个很好的IoC批量查询服务.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bazaar.abuse.ch/" target="_blank">MalwareBazaar</a>
        </td>
        <td>
            MalwareBazaar 是一个来自 abuse.ch 目的是与信息化社区、AV供应商和威胁情报提供者分享恶意软件样本。
        </td>
    </tr>	
    <tr>
        <td>
            <a href="https://www.malwaredomainlist.com/" target="_blank">Malware Domain List</a>
        </td>
        <td>
            可搜索的同样执行反向的恶意域列表 lookup登记人名单,重点是钓鱼、特洛伊人和开发工具箱。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.malwarepatrol.net/" target="_blank">Malware Patrol</a>
        </td>
        <td>
            Malware巡逻队向各种规模的公司提供区块清单、数据资料和威胁情报。 因为我们的专长是网络威胁情报, 所有的资源都投入到确保它具有尽可能最高的质量。 我们相信一个安全小组 它的工具 仅与使用的数据一样好。 这意味着我们的饲料没有被刮掉,未经核实的指标填充. 我们重视质量而不是数量。 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malware-traffic-analysis.net/" target="_blank">Malware-Traffic-Analysis.net</a>
        </td>
        <td>
            这个博客关注与恶意软件感染有关的网络流量. 包含流量分析练习,教程,恶意软件样本,恶意网络流量的pcap文件,以及带有观察功能的技术博客帖子.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.malwaredomains.com/" target="_blank">MalwareDomains.com</a>
        </td>
        <td>
            DNS-BH项目创建并维护了已知用于传播恶意软件和间谍软件的域列表. 这些可用于侦测和预防(Sinkholing DNS请求)。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opswat.com/developers/threat-intelligence-feed" target="_blank">MetaDefender Cloud</a>
        </td>
        <td>
            MetaDefender Cloud 威胁情报种子包含最高的新恶意软件散列签名,包括MD5,SHA1和SHA256. 这些新的恶意散列物被发现 MetaDefender Cloud 24小时之内 每日用新发现和报告的恶意软件更新信息,以提供可采取行动和及时的威胁情报。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.nothink.org">NoThink!</a>
        </td>
        <td>SNMP, SSH, Telnet 黑名单IP来自 Matteo Cantoni 的蜂蜜罐</td>
    </tr>
    <tr>
        <td>
            <a href="https://services.normshield.com" target="_blank">NormShield Services</a>
        </td>
        <td>
            NormShield Services 提供数以千计可能来自钓鱼攻击的域信息(包括谁的信息)。 还提供违反和黑名单服务。 公共服务部门可免费注册,进行持续监测。
        </td>
    </tr> 
    <tr>
        <td>
            <a href="https://novasense-threats.com" target="_blank">NovaSense Threats</a>
        </td>
        <td>
            NovaSense是Snapt威胁情报中心,为先发制人的威胁保护和减轻攻击提供了洞察力和工具. NovaSense保护各种大小的客户免受攻击,虐待,botnet,DoS攻击等.
        </td>
    </tr>     
    <tr>
        <td>
            <a href="https://www.obstracts.com/" target="_blank">Obstracts</a>
        </td>
        <td>
            网络安全团队的RSS阅读器. 把任何博客变成有组织且可采取行动的威胁情报。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://openphish.com/phishing_feeds.html" target="_blank">OpenPhish Feeds</a>
        </td>
        <td>
            OpenPhish接收来自多个流的URL,并使用其专有的钓鱼检测算法对其进行分析. 有免费和商业性的供货。
        </td>
    </tr>
        <tr>
        <td>
            <a href="https://feed.seguranca-informatica.pt/index.php" target="_blank">0xSI_f33d</a>
        </td>
        <td>
            免费服务,用于检测可能的网易和恶意软件域,葡萄牙网络空间内列入黑名单的IP.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.phishtank.com/developer_info.php" target="_blank">PhishTank</a>
        </td>
        <td>
            PhishTank 提供疑似钓鱼網址列表. 它们的数据来自人类报告,但也尽可能地摄取外部信息。 这是一种免费服务,但注册API密钥有时是必要的.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.celerium.com/pickupstix" target="_blank">PickupSTIX</a>
        </td>
        <td>
            PickupSTIX 是自由、开源和非商业化网络威胁情报的素材。 目前, PickupSTIX 每天使用3个公共信息,分发大约100个新的情报。 PickupSTIX 将各种种子翻译为 STIX, 它可以与任何 TAXII 服务器。 数据可以自由使用,是开始使用网络威胁情报的好方法.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://qfeeds.com" target="_blank">Q-Feeds Threat Intelligence</a>
        </td>
        <td>
            Q-Feeds是一家网络安全公司,将OSINT的数据,专有研究,商业威胁情报反馈汇集在一起,提供全方位,高度可操作的解决方案. 其威胁情报门户网站(TIP)使得各组织能够方便地实时获取和管理这些数据. 通过整合防火墙,SIEM,以及其他安全平台,Q-Feeds帮助企业主动屏蔽与已知的恶意IP,域和URL的连接——在威胁可以造成伤害之前. 他们还根据请求提供社区版本。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rescure.fruxlabs.com/" target="_blank">REScure Threat Intel Feed</a>
        </td>
        <td>
            [RES]cure是一个由Fruxlabs Crack团队执行的相互依存的威胁情报项目,目的是增进他们对分布式系统的基本架构,威胁情报的性质以及如何有效收集,存储,消耗和分发威胁情报的了解. 饲料每6小时产生一次.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rstcloud.net/" target="_blank">RST Cloud Threat Intel Feed</a>
        </td>
        <td>
            从多种公开和社区支持的来源收集并交叉核实的妥协综合指标,利用我们的情报平台加以丰富和排名。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://report.cs.rutgers.edu/mrtg/drop/dropstat.cgi?start=-86400">Rutgers Blacklisted IPs</a>
        </td>
        <td>SSH Brute强力攻击者的IP列表由本地观察的IP和在badip.com和blocklist注册的2小时老IP合并而成. de.</td>
    </tr>
    <tr>
        <td>
            <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS Suspicious Domains</a>
        </td>
        <td>
            可疑领域威胁清单 <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS</a> 跟踪可疑域。 它提供3份清单,分类为: <a href="https://isc.sans.edu/feeds/suspiciousdomains_High.txt" target="_blank">high</a>, (中文). <a href="https://isc.sans.edu/feeds/suspiciousdomains_Medium.txt" target="_blank">medium</a> 或 <a href="https://isc.sans.edu/feeds/suspiciousdomains_Low.txt" target="_blank">low</a> 敏感度,高敏感度列表的假阳性较少,而低敏感度列表的假阳性较多. 还有一个 <a href="https://isc.sans.edu/feeds/suspiciousdomains_whitelist_approved.txt" target="_blank">approved whitelist</a> 区域。<br/>
            最后,有人建议 <a href="https://isc.sans.edu/block.txt" target="_blank">IP blocklist</a> 从 <a href="https://dshield.org">DShield</a>。 。 。 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/securityscorecard/SSC-Threat-Intel-IoCs" target="_blank">SecurityScorecard IoCs</a>
        </td>
        <td>
            使用安全计分卡,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.stixify.com/" target="_blank">Stixify</a>
        </td>
        <td>
            你的自动威胁情报分析师 从无结构的数据中提取机器可读智能.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/signature-base" target="_blank">signature-base</a>
        </td>
        <td>
            Neo23x0. 用于其他工具的签名数据库.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.spamhaus.org/" target="_blank">The Spamhaus project</a>
        </td>
        <td>
            垃圾邮件计划包含多个与垃圾邮件和恶意软件活动相关的威胁列表.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.sophos.com/intelix" target="_blank">SophosLabs Intelix</a>
        </td>
        <td>
            SophosLabs Intelix 是威胁情报平台 赋予索福斯产品和合作伙伴权力 您可以根据文件散列、 url 等获取情报。 并提交样品以供分析。 通过REST API,你可以轻松和迅速地将这个威胁情报加入到你的系统中.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://spur.us" target="_blank">Spur</a>
        </td>
        <td>
            斯普尔提供检测VPN,住宅代理和Bots的工具和数据. 自由计划允许用户 lookup 一个IP,并获得它的分类,VPN提供者,IP背后的流行地理定位,以及一些更有用的上下文.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://sslbl.abuse.ch/" target="_blank">SSL Blacklist</a>
        </td>
        <td>
            SSL Blacklist (SSLBL)是一个由下列机构维护的项目: abuse.ch。目标是提供一个列表,列出由 abuse.ch 与恶意软件或肉网活动有关 SSLBL依赖恶意SSL证书的SHA1指纹,并提供各种黑名单
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://statvoo.com/dl/top-1million-sites.csv.zip" target="_blank">Statvoo Top 1 Million Sites</a>
        </td>
        <td>
            按Statvoo的排名,可能为100万网站排名前的白名单.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://strongarm.io" target="_blank">Strongarm, by Percipient Networks</a>
        </td>
        <td>
            Strongarm是一个DNS黑洞,通过屏蔽恶意软件的指挥和控制,对妥协指标采取行动. strongarm聚合免费指标输入,与商业输入集成,使用Percipient的IOC输入,并运行DNS解析器和API供您用于保护您的网络和业务. 强臂可免费个人使用.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.siemrules.com" target="_blank">SIEM Rules</a>
        </td>
        <td>
            你的探测工程数据库 查看、修改和部署 SIEM rules 用来捕捉和侦测威胁
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.talosintelligence.com/" target="_blank">Talos</a>
        </td>
        <td>
	    Cisco Talos Intelligence Group是世界上最大的商业威胁情报小组之一,由世界级的研究人员,分析师和工程师组成. 这些团队得到无与伦比的遥测和精密系统的支持,为思科公司的客户,产品和服务创造准确,快速和可操作的威胁情报. Talos为思科客户抵御已知和新出现的威胁提供了保护,在共同软件中发现了新的弱点,在野外阻止威胁,以免进一步伤害整个互联网。 Talos除了发布许多开源研究和分析工具外,还维护了Snort.org,ClamAV和SpamCop的官方规则集. Talos 提供了方便使用网络用户界面来检查一个 <a href="https://www.talosintelligence.com/reputation">observable's reputation</a>。 。 。 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfeeds.io" target="_blank">threatfeeds.io</a>
        </td>
        <td>
            threatfeeds.io 列出自由和开源的威胁情报信息和来源,并提供直接下载链接和实况摘要。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfox.abuse.ch/" target="_blank">threatfox.abuse.ch</a>
        </td>
        <td>
            威胁Fox是一个免费平台,来自 abuse.ch 目的是与Infosec社区、AV供应商和威胁情报提供者分享与恶意软件有关的妥协指标。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatconnect.com/blog/ingest-technical-blogs-reports/" target="_blank">Technical Blogs and Reports, by ThreatConnect</a>
        </td>
        <td>
            超过90个公开源码、安全博客的内容, 国际奥委会(<a href="https://en.wikipedia.org/wiki/Indicator_of_compromise" target="_blank">Indicators of Compromise</a>博客内容以减号格式格式。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatjammer.com" target="_blank">Threat Jammer</a>
        </td>
        <td>
            威胁贾默是一个REST API服务,允许开发人员,安全工程师,以及其他IT专业人士从各种来源获取高质量的威胁情报数据,并将其整合到他们的应用中,其唯一目的是检测和阻止恶意活动.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatminer.org/" target="_blank">ThreatMiner</a>
        </td>
        <td>
            ThreatMiner 建立这一系统是为了让分析人员从数据收集中解脱出来,并为他们提供一个门户,让他们能够完成任务,从阅读报告到支点和丰富数据。
            重点 ThreatMiner 也为分析人员提供他们所研究的IoC的背景资料。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/WSTNPHX/scripts-n-tools/master/malware-email-addresses.txt">WSTNPHX Malware Email Addresses</a>
        </td>
        <td>VVestron Phoronix(WSTNPHX)收集的恶意软件使用的电子邮件地址</td>
    </tr>
    <tr>
        <td>
            <a href="https://portal.underattack.today/" target="_blank">UnderAttack.today</a>
        </td>
        <td>UnderAttack是一个自由情报平台,它分享IP和关于可疑事件和攻击的信息. 登记是免费的。</td>
    </tr>
    <tr>
        <td>
            <a href="https://urlhaus.abuse.ch">URLhaus</a>
        </td>
        <td>URLhaus 是一个来自 abuse.ch 以共享恶意URL为目标,用于恶意软件发布.</td>
    </tr>
    <tr>
        <td>
            <a href="https://virusshare.com/" target="_blank">VirusShare</a>
        </td>
        <td>
            VirusShare.com是一个恶意软件样本的存储库,提供安全研究者,事件应对人员,法医分析人员,以及恶意代码样本的极具好奇感的访问. 只能通过邀请才能进入该网站。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://vuldb.com/?actor" target="_blank">VulDB CTI</a>
        </td>
        <td>
            VulDB是一个脆弱性数据库,将行为者的活动和攻击细节与脆弱性联系起来。 预测方法有助于确定恶意行为者的新兴研究和攻击活动。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yara-Rules/rules" target="_blank">Yara-Rules</a>
        </td>
        <td>
            一个拥有不同Yara签名的开源存储器,经过编译,分类并尽可能更新.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://IOCFeed.mrlooquer.com/" target="_blank">1st Dual Stack Threat Feed by MrLooquer</a>
        </td>
        <td>
Mrlooquer创建了第一个以双叠叠系统为重点的威胁源. 由于IPv6协议开始成为恶意软件和欺诈通信的一部分,因此必须发现和减轻两个协议(IPv4和IPv6)中的威胁.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.validin.com/">Validin DNS Database</a>
        </td>
        <td>
            当前和历史DNS信息的免费情报来源,寻找与某些IP相关的其他网站,以及子域知识 有一个 <a href="https://app.validin.com/docs">free API for IP and domain intelligence</a> 也一样。 
        </td>
    </tr>
</table>

## 格式

用于共享威胁情报（主要是 IOC）的标准化格式。

<table>
    <tr>
        <td>
            <a href="https://capec.mitre.org/" target="_blank">CAPEC</a>
        </td>
        <td>
            共同攻击模式编号和分类CAPEC)是已知攻击的综合性词典和分类分类学,可供分析家,开发者,测试者,以及教育者用来推进社区理解和加强防御.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cyboxproject.github.io/" target="_blank">CybOX</a>
        </td>
        <td>
            网络可观察电子压抑( E)CybOX语言为企业网络安全业务领域之间的网络观测提供了一种共同的结构,可提高所部署工具和流程的一致性、效率和互操作性,并通过使详细可自动分享、绘图、检测和分析热度的潜力而提高总体情况意识。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc5070" target="_blank">IODEF (RFC5070)</a>
        </td>
        <td>
            事件对象描述交换格式(IODEF)定义了一个数据表示,为共享计算机安全事件反应小组(CSIRTs)通常交换的关于计算机安全事件的信息提供了一个框架.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc4765" target="_blank">IDMEF (RFC4765)</a>
        </td>
        <td>
            <i>实验</i> - 入侵检测信件交换格式(IDMEF)的目的是确定数据格式和交换程序,以便分享对入侵检测和反应系统以及可能需要与之互动的管理系统感兴趣的信息。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maecproject.github.io/" target="_blank">MAEC</a>
        </td>
        <td>
            恶意属性编号和字符化( E)MAEC),项目旨在根据行为,文物,攻击模式等属性,创建和提供用于共享恶意软件结构化信息的标准化语言.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=openc2" target="_blank">OpenC2</a>
        </td>
        <td>
            OASIS 开放指挥和控制( OpenC)2) 技术委员会。 这个 OpenC2 技转中心将努力以技转中心产生的文物为基础。 OpenC2 论坛. 在TC和spe创建之前cif画,画 OpenC2 论坛是由网络安全利益攸关方组成的社区,国家安全局(NSA)为论坛提供便利。 这个 OpenC2 TC被包租来起草文件cif以标准化方式满足网络安全指挥与控制需要的画像,词典或其他文物.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://oasis-open.github.io/cti-documentation/" target="_blank">STIX 2.0</a>
        </td>
        <td>
            结构化威胁信息eXpress(STIX)语言是一种代表网络威胁信息的标准化构建. STIX语言旨在传达各种潜在的网络威胁信息,并力求充分表达、灵活、可扩展和可自动。 STIX不仅允许工具不可知领域,而且还提供了所谓的“不可知领域”。 <i>测试机制</i> 提供了嵌入工具类型的手段cifc 包括: OpenIOC亚拉和斯诺特 STIX 1. x 已存档 <a href="https://stixproject.github.io/" target="_blank">here</a>。 。 。 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://taxiiproject.github.io/" target="_blank">TAXII</a>
        </td>
        <td>
            可信地自动交换指标信息TAXII标准界定了一套服务和信息交换,一旦实施,就能够跨越组织和产品/服务界限分享可采取行动的网络威胁信息。 TAXII 界定用于交换网络威胁信息的概念、协议和信息交换,以发现、预防和减轻网络威胁。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://veriscommunity.net/index.html" target="_blank">VERIS</a>
        </td>
        <td>
            事件记录和事件分享词汇表VERIS)是一套衡量标准,旨在提供一种共同语言,以有条理和可重复的方式描述安全事件。 VERIS 是对安全行业最关键和最持久挑战之一的回应 - 缺乏高质量的信息。 除了提供结构化格式之外, VERIS 还收集社区数据,以报告Verizon数据违反调查报告中的违规行为(<a target="_blank" href="http://www.verizonenterprise.com/verizon-insights-lab/dbir/">DBIR</a>)并在网上以 GitHub <a target="_blank" href="https://github.com/vz-risk/VCDB">repository.org</a>。 。 。 。
        </td>
    </tr>
</table>

## 框架与平台

用于收集、分析、创建和共享威胁情报的框架、平台和服务。

<table>
    <tr>
        <td>
            <a href="https://github.com/abusesa/abusehelper" target="_blank">AbuseHelper</a>
        </td>
        <td>
            AbuseHelper 这是一种接收和再分配滥用信息和威胁情报的开源框架。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://abuse.io/" target="_blank">AbuseIO</a>
        </td>
        <td>
            一个接收、处理、联系和通知最终用户虐待报告的工具包,从而消耗威胁情报信息。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cisa.gov/ais" target="_blank">AIS</a>
        </td>
        <td>
            网络安全和基础设施安全局(CISA) 免费自动指标共享AIS能力使联邦政府和私营部门能够以机器速度交流网络威胁指标。 威胁指标是诸如恶意IP地址或网易电子邮件的发送地址等信息片段(尽管它们也可能更为复杂).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/csirtgadgets/bearded-avenger" target="_blank">Bearded Avenger</a>
        </td>
        <td>
            消耗威胁情报的最快方式 继承人 CIF。 。 。 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.blueliv.com/" target="_blank">Blueliv Threat Exchange Network</a>
        </td>
        <td>
            允许参与者与社区分享威胁指标。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Cortex" target="_blank">Cortex</a>
        </td>
        <td>
            Cortex允许可观测到的,如IP,电子邮件地址,URL,域名,文件或散列,用一个单一的网络接口逐个分析或散装模式. 网络界面是众多分析器的前端,因此在分析过程中不需要自己整合这些. 分析师还可以使用Cortex REST API实现分析部分自动化.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://crits.github.io/" target="_blank">CRITS</a>
        </td>
        <td>
            CRITS 这是一个平台,为分析人员提供手段,对恶意软件和威胁进行协作研究. 它插入一个集中的情报数据存储器,但也可以作为私人实例使用.
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://csirtgadgets.org/collective-intelligence-framework" target="_blank">CIF</a>
        </td>
        <td>
            集体情报框架CIF)允许您将许多来源的已知恶意威胁信息合并,并将这些信息用于IR,检测和缓解. 可用代码于 <a href="https://github.com/csirtgadgets/massive-octo-spice" target="_blank">GitHub</a>。 。 。 。
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/ctix-stix-taxii-cyber-threat-intelligence-exchange" target="_blank">CTIX</a>
        </td>
        <td>
            CTIX 是一个智能的客户端-服务器威胁情报平台(TIP),用于在您信任的网络内摄取,浓缩,分析和双向共享威胁数据.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.eclecticiq.com/platform" target="_blank">EclecticIQ Platform</a>
        </td>
        <td>
            EclecticIQ Platform 属于STIX/TAXII 以威胁情报平台为基础,该平台授权威胁分析员进行更快、更好和更深入的调查,同时以机器速度传播情报。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.enisa.europa.eu/topics/csirt-cert-services/community-projects/incident-handling-automation" target="_blank">IntelMQ</a>
        </td>
        <td>
            IntelMQ 是CERT的解决方案,用于收集和处理安全素材,贴纸,微博使用消息队列协议. 这是一个名为IHAP(Incent Maling Automation Project)的社区驱动倡议,由欧洲CERTs在几个InfoSec活动期间在概念上设计. 其主要目标是为事件应对者提供收集并处理威胁情报的简单方法,从而改进CERT的事件处理程序.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/intelowlproject/IntelOwl/" target="_blank">IntelOwl</a>
        </td>
        <td>
            Intel Owl是一个OSINT的解决方案 来获取关于spe的威胁情报数据cific文件,一个IP或一个域来自一个规模的单一API. Intel Owl由分析器组成,可以运行从外部来源(如VirusTotal或VirusTotal)获取数据. AbuseIPDB)或从内部分析器(如Yara或Oletools)生成情报. 它可以很容易地集成到你的堆积安全工具(<a href="https://github.com/intelowlproject/pyintelowl" target="_blank">pyintelowl</a>使通常由SOC分析员手工完成的普通工作自动化。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.kaspersky.com/enterprise-security/threat-intelligence" target="_blank">Kaspersky Threat Intelligence Portal</a>
        </td>
        <td>
            一个提供知识库,描述网络威胁,合法对象,及其关系的网站,汇集成一个单一的网络服务. 加入Kaspersky Lab的威胁情报门户,为您提供了四个辅助服务的单一切入点:Kaspersky威胁数据种子,威胁情报报告,Kaspersky威胁 Lookup 和Kaspersky Research Sandbox,都以人可读和机可读格式提供.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/malstrom" target="_blank">Malstrom</a>
        </td>
        <td>
            Malstrom旨在成为威胁追踪和法医文物的存放处,但也存储YARA规则和笔记以供调查. 说明: Github 项目已存档(未接受新的捐款)。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stratosphereips/Manati" target="_blank">ManaTI</a>
        </td>
        <td>
            这个 ManaTI 项目通过采用自动发现新关系和推断的机器学习技术协助威胁分析员。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://django-mantis.readthedocs.io/en/latest/" target="_blank">MANTIS</a>
        </td>
        <td>
            威胁情报来源模型分析(A/CONF.192/20)MANTIS(c) 网络威胁情报管理框架支持管理以各种标准语言表达的网络威胁情报,如STIX和 CybOX这是 *没有* 准备进行大规模生产
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cert-se/megatron-java" target="_blank">Megatron</a>
        </td>
        <td>
            威震天是一个由CERT-SE实施的工具,它收集和分析不良的IP,可用于计算统计,转换和分析日志文件以及滥用和事件处理.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/PaloAltoNetworks/minemeld/wiki" target="_blank">MineMeld</a>
        </td>
        <td>
            一个可扩展的威胁情报处理框架建立了Palo Alto网络。
            它可以用来操纵指标清单,改变和(或)汇总这些指标,供第三方执法基础设施使用。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.misp-project.org/" target="_blank">MISP</a>
        </td>
        <td>
            恶意信息共享平台(MISP)是用于收集,存储,分发和分享网络安全指标和恶意软件分析的开源软件解决方案.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CERT-Polska/n6" target="_blank">n6</a>
        </td>
        <td>
            n6 (Network Security EXchange)是一个大规模收集,管理和分发安全信息的系统. 通过一个简单的REST API和一个网络界面实现分发,授权用户可以使用该界面接收各种类型的数据,特别是关于其网络中的威胁和事件的信息. 它是由 <a href="https://www.cert.pl/en/" target="_blank">CERT Polska</a>。 。 。 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ocsf.io/" target="_blank">Open Cybersecurity Schema Framework (OCSF)</a>
        </td>
        <td>
            开放网络安全框架是一个开放源码项目,为制定计划提供可扩展的框架,同时提供供应商不可知的核心安全计划。 销售商和其他数据生产者可采用并扩大计划。cific域名. 数据工程师可以绘制不同的计划图,帮助安全小组简化数据摄入和正常化,这样数据科学家和分析人员就可以使用通用语言进行威胁检测和调查. 目标是提供一个开放的标准,在任何环境、应用或解决方案中采用,同时补充现有的安全标准和流程。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opencti.io/en/" target="_blank">OpenCTI</a>
        </td>
        <td>
            OpenCTI,开放网络威胁情报平台,允许各组织管理其网络威胁情报知识和可观测信息. 其目标是对关于网络威胁的技术和非技术信息进行结构化、储存、组织和视觉化。 数据结构以基于 STIX2 标准。 OpenCTI 可与其他工具和平台整合,包括: MISP,The Hive, 和MITRE(英语:MITRE) ATT&CK,a.o. (英语).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware.html" target="_blank">OpenIOC</a>
        </td>
        <td>
            OpenIOC 是共享威胁情报的开放式框架。 它旨在以机器可开发的格式在内部和外部交换威胁信息。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/OpenTAXII" target="_blank">OpenTAXII</a>
        </td>
        <td>
            OpenTAXII 是一个强大的 Python 执行 TAXII 服务提供丰富的功能集和友好的Pythonic API在设计良好的应用之上搭建.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Ptr32Void/OSTrICa" target="_blank">OSTrICa</a>
        </td>
        <td>
            一个面向开源插件的框架,用于收集和可视化威胁情报信息.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://otx.alienvault.com" target="_blank">OTX - Open Threat Exchange</a>
        </td>
        <td>
            " 异形 " 开放威胁交易所(OTX)向全球威胁研究人员和安全专业人员开放。 它提供社区产生的威胁数据,使合作研究成为可能,并使从任何来源获得的威胁数据更新安全基础设施的进程自动化。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Lookingglass/opentpx/" target="_blank">Open Threat Partner eXchange</a>
        </td>
        <td>
            这个 Open Threat Partner eXchange (OpenTPX)包括一个开源格式和工具,用于交换机器可读的威胁情报和网络安全操作数据. 它是一种基于JSON的格式,允许连接的系统之间共享数据.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.riskiq.com/" target="_blank">PassiveTotal</a>
        </td>
        <td>
            这个 PassiveTotal RiskIQ提供的平台是一个威胁分析平台,为分析人员提供尽可能多的数据,以便在攻击发生前防止攻击. 提供了几种解决办法,并与其他系统进行了整合。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pulsedive.com/" target="_blank">Pulsedive</a>
        </td>
        <td>
            Pulsedictive是一个自由的社区威胁情报平台,它正在消耗开源信息,丰富国际奥委会,并通过风险评分算法运行,以提高数据的质量. 它允许用户提交,搜索,关联,并更新国际奥委会;列出"风险因素",说明国际奥委会为何风险较高;并提供高水平的威胁和威胁活动.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.recordedfuture.com/" target="_blank">Recorded Future</a>
        </td>
        <td>
            录音未来(英語:Recorded Future)是一种高价的SaaS产品,它自动将来自开放,封闭,技术来源的威胁情报统一为单一解决方案. 他们的技术利用自然语言处理(NLP)和机器学习来实时提供这种威胁情报——使录制未来成为IT安全团队的热门选择.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Netflix/Scumblr" target="_blank">Scumblr</a>
        </td>
        <td>
            Scumblr是一个允许对数据源进行定期同步的网络应用程序(例如: Github 数据库和URL),并对确定的结果进行分析(如静态分析、动态检查和元数据收集)。
            Scumblr帮助您通过智能自动化框架精简主动安全,帮助您更快地识别,跟踪和解决安全问题.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.anomali.com/platform/staxx" target="_blank">STAXX (Anomali)</a>
        </td>
        <td>
            Anomali STAXXTM为您提供了免费、方便的订阅任何STIX/TAXII 供养. 只需下载STAXX客户端, 配置您的数据源, 而STAXX将处理其余的 。
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://stoq.punchcyber.com/" target="_blank">stoQ</a>
        </td>
        <td>
            stoQ 是一个允许网络分析师组织和自动化重复的,数据驱动的任务的框架. 它具有许多其它系统与之交互的插件功能.
            一个使用案例是从文档中提取国际奥委会数据,其中的一个例子是 <a href="https://stoq-framework.blogspot.nl/2016/04/operationalizing-indicators.html" target="_blank">here</a>,但也可以用于解析和解码内容,并与YARA自动扫描等.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/tripwire/tardis" target="_blank">TARDIS</a>
        </td>
        <td>
            威胁分析,侦察ais和数据情报系统TARDIS)是使用攻击签名进行历史搜索的开源框架.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatconnect.com/" target="_blank">ThreatConnect</a>
        </td>
        <td>
            ThreatConnect 是一个具有威胁情报、分析 和管弦乐能力的平台。 它旨在帮助你收集数据,制作情报,与他人分享情报,并对此采取行动.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatcrowd.org/" target="_blank">ThreatCrowd</a>
        </td>
        <td>
            ThreatCrowd 是一个搜寻和研究与网络威胁有关的艺术品的系统。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatpipes.com" target="_blank">ThreatPipes</a>
        </td>
        <td>
            保持两步领先你的对手。 全面了解他们会如何利用你
            <br />
            ThreatPipes 是一个侦察ais用于自动查询100's数据源的sance工具,以收集IP地址,域名,电子邮件地址,名称等信息.
            <br />
            你只是说cify 您想要调查的目标, 选择要启用的模块, 然后 ThreatPipes 将收集数据,以增进对所有实体及其相互关系的理解。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://developers.facebook.com/docs/threat-exchange/" target="_blank">ThreatExchange</a>
        </td>
        <td>
            创建 Facebook ThreatExchange 以便各参与组织能够使用一种方便、有条理和易于使用的API来分享威胁数据,该API提供隐私控制,以便仅与理想群体分享。 这个项目还在 <b>贝塔</b>。可在 <a href="https://github.com/facebook/ThreatExchange" target="_blank">GitHub</a>。 。 。 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/typedb-osi/typedb-cti" target="_blank">TypeDB CTI</a>
        </td>
        <td>
		类型DB 数据 - CTI是一个开源威胁情报平台,供各组织存储和管理其网络威胁情报(CTI)知识. 它使威胁情报专业人员能够将其不同的CTI信息汇集到一个数据库中,并找到关于网络威胁的新见解。 这个寄存器提供了一个基于 STIX2,包含MITRE ATT&CK 作为开始探索这个威胁情报平台的示例数据集. 更多在这 <a href="https://blog.vaticle.com/introducing-a-knowledge-graph-for-cyber-threat-intelligence-with-typedb-bdb559a92d2a" target="_blank">blog post</a>。 。 。 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://beta.virusbay.io/" target="_blank">VirusBay</a>
        </td>
        <td>
            VirusBay 是一个基于网络的合作平台,将安全操作中心(SOC)的专业人士与相关的恶意软件研究人员联系起来.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/brianwarehime/threatnote" target="_blank">threatnote.io</a>
        </td>
        <td>
            新的和经改进的 threatnote.io - 气候技术倡议分析员和团队在全一平台管理情报要求、报告和气候技术倡议进程的工具
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exchange.xforce.ibmcloud.com/" target="_blank">XFE - X-Force Exchange</a>
        </td>
        <td>
            IBM XFE的X-Force Exchange(XFE)是一种免费的SaaS产品,你可以用来搜索威胁情报信息,收集你的发现,并与XFE社区的其他成员分享你的见解.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://yeti-platform.github.io/" target="_blank">Yeti</a>
        </td>
        <td>
            开放的,分布的,机器与分析方便的威胁情报库. 由事件反应者制造
        </td>
    </tr>
</table>



## 工具

用于解析、创建和编辑威胁情报的各类工具，主要基于 IOC。

<table>
    <tr>
        <td>
            <a href="https://github.com/jalewis/actortrackr" target="_blank">ActorTrackr</a>
        </td>
        <td>
            ActorTrackr 是用于存储/搜索/链接演员相关数据的开源网络应用程序。 主要来源于用户和各种公共储存库。 来源: <a href="https://github.com/jalewis/actortrackr" target="_blank">GitHub</a>。 。 。 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/camp0/aiengine" target="_blank">AIEngine</a>
        </td>
        <td>
            AIEngine 是一种下一代互动/可编程的Python/Ruby/Java/Lua包检查引擎,在没有任何人类干预的情况下具有学习能力、NIDS(网络侵入探测系统)功能、DNS域分类、网络采集器、网络法证和许多其他功能。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/referefref/aiocrioc" target="_blank">AIOCRIOC</a>
        </td>
        <td>
            人工智能 视觉特征识别 妥协指标AIOCRIOC)是一个将网络刮刮,魔方的OCR能力和OpenAI兼容的LLM API(如GPT-4)相结合的工具,用于从报告和其他网络内容中解析和提取IOC,包括嵌入式图像和背景数据.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://analyze.intezer.com" target="_blank">Analyze (Intezer)</a>
        </td>
        <td>
            Analysis是一个全能的恶意软件分析平台,能够对各类文件进行静态,动态,遗传密码分析. 用户可以追踪恶意软件家族,提取IOCs/MITRE TTP,下载YARA签名. 社区版免费发行。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/1aN0rmus/TekDefense-Automater" target="_blank">Automater</a>
        </td>
        <td>
            Automater是一个URL/域名,IP地址,以及Md5 Hash OSINT工具,旨在方便入侵分析员的分析过程.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/svdwi/BlueBox" target="_blank">BlueBox</a>
        </td>
        <td>
            BlueBox 是一个OSINT解决方案,以获取关于 spe的威胁情报数据cific文件,一个IP,一个域或URL并分析它们.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://botscout.com/">BotScout</a>
        </td>
        <td>
            BotScout 帮助防止被称为"机器人"的自动网络脚本在论坛注册,污染数据库,传播垃圾邮件,在网站上滥用表格.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/bro-intel-generator" target="_blank">bro-intel-generator</a>
        </td>
        <td>
            从 pdf 或 html 报告生成 Bro intel 文件的脚本 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/cabby" target="_blank">cabby</a>
        </td>
        <td>
            一个简单的用于交互的 Python 库 TAXII 服务器。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/cacador" target="_blank">cacador</a>
        </td>
        <td>
            卡卡多尔(英語:Cacador)是Go中为从一组文本中提取妥协的共同指标而写作的工具.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/combine" target="_blank">Combine</a>
        </td>
        <td>
            合并从公开来源收集威胁情报饲料。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CrowdStrike/CrowdFMS" target="_blank">CrowdFMS</a>
        </td>
        <td>
            CrowdFMS 通过利用私人API系统,将VirusTotal样本的收集和处理自动化的框架。
            框架自动下载最近的样本,这引发了对用户YARA通知feed的提示.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-transmute.org/" target="_blank">CTI-Transmute</a>
        </td>
        <td>
            CTI-Transmute 是将网络威胁情报数据转换为 MISP 和STIX格式。 它提供了一组API端点,可以自动转换数据,更容易整合不同的威胁情报平台和工作流程. 来源: <a href="https://github.com/MISP/cti-transmute" target="_blank">GitHub</a>。 。 。 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cuckoosandbox/cuckoo" target="_blank">Cuckoo Sandbox</a>
        </td>
        <td>
            Cuckoo Sandbox是一个自动动态恶意软件分析系统. 它是各地最知名的开源恶意软件分析沙盒,经常被研究人员,CERT/SOC团队,以及全球各地的威胁情报团队部署. 对许多组织来说,Cuckoo Sandbox提供了对潜在恶意软件样本的第一洞察力.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cybergordon.com/" target="_blank">CyberGordon</a>
        </td>
        <td>
            CyberGordon 是一个威胁情报搜索引擎。 它利用30个+ 来源。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CylanceSPEAR/CyBot" target="_blank">CyBot</a>
        </td>
        <td>
            CyBot 是一个威胁情报聊天机器人。 它可以执行几种类型的 lookups 由自定义模块提供。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Fenrir" target="_blank">Fenrir</a>
        </td>
        <td>
            简单巴什IOC扫描仪.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/FireHOL-IP-Aggregator" target="_blank">FireHOL IP Aggregator</a>
        </td>
        <td>
            保存 FireHOL 种子的应用程序 <a href="https://github.com/firehol/blocklist-ipsets" target="_blank">blocklist-ipsets</a> 有IP地址的外观历史。 基于HTTP的API服务是为搜索请求而开发的.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/Forager" target="_blank">Forager</a>
        </td>
        <td>
            多字形威胁 猎人 - 采集脚本。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.gigasheet.co" target="_blank">Gigasheet</a>
        </td>
        <td>
            Gigasheet是SaaS产品,用来分析庞大,不同的网络安全数据集. 导入大型日志文件、 网流、 pcaps、 大 CSV还有更多
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/BinaryDefense/goatrider" target="_blank">GoatRider</a>
        </td>
        <td>
            GoatRider 是一个简单的工具,可以动态地拉下炮兵威胁情报饲料,TOR,异形Vaults OTX,以及Alexa最顶尖的100万网站,并与主机名文件或IP文件进行比较.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cse.google.com/cse/publicurl?cx=003248445720253387346:turlh5vi4xc" target="_blank">Google APT Search Engine</a>
        </td>
        <td>
            APT小组,操作和恶意搜索引擎. 此 Google 自定义搜索所使用的来源列表于 <a href="https://gist.github.com/Neo23x0/c4f40629342769ad0a8f3980942e21d3" target="_blank">this</a> GitHub 格丝特。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ciscocsirt/gosint" target="_blank">GOSINT</a>
        </td>
        <td>
            这个 GOSINT 框架是一个免费项目,用于收集、处理和出口高质量的公共妥协指标。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://hashdd.com/" target="_blank">hashdd</a>
        </td>
        <td>
            一个工具 lookup 来自密码散列值的相关信息
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/harbinger" target="_blank">Harbinger Threat Intelligence</a>
        </td>
        <td>
            Python 脚本,允许从单一的界面查询多个在线威胁聚合器.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Hippocampe" target="_blank">Hippocampe</a>
        </td>
        <td>
            Hippocampe将来自互联网的威胁信息汇总到一个弹性搜索集群中。 它有一个 REST API 允许搜索它的"记忆"。 它基于一个 Python 脚本,该脚本获取对应的URL以获取种子、解析和索引。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/S03D4-164/Hiryu" target="_blank">Hiryu</a>
        </td>
        <td>
            一个组织APT运动信息以及视觉化国际奥委会之间关系的工具.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/ioc-editor.html" target="_blank">IOC Editor</a>
        </td>
        <td>
            妥协指标自由编辑器。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/ioc-finder" target="_blank">IOC Finder</a>
        </td>
        <td>
            Python 库用于查找文本中妥协的指标. 使用语法而不是语法来提高理解性. 截至2019年2月,它剖析了超过18种指标类型.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ioc-fang/ioc_fanger" target="_blank">IOC Fanger (and Defanger)</a>
        </td>
        <td>
            用于扇形的 Python 库`hXXp://example[.]com` => `http://example.com`)和贬损(`http://example.com` => `hXXp://example[.]com`案文中的妥协指标。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/armbues/ioc_parser" target="_blank">ioc_parser</a>
        </td>
        <td>
            从PDF格式的安全报告中提取妥协指标的工具.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mandiant/ioc_writer" target="_blank">ioc_writer</a>
        </td>
        <td>
            提供 Python 库,允许基本创建和编辑 OpenIOC 对象。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/python-iocextract" target="_blank">iocextract</a>
        </td>
        <td>
            从文字公司提取URL,IP地址,MD5/SHA散列,电子邮件地址,以及YARA规则. 在产出中包括一些编码和“失效”的国际奥委会,并可选地解码/重新编码。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stephenbrannon/IOCextractor" target="_blank">IOCextractor</a>
        </td>
        <td>
            IOC(妥协指数)提取器是一个帮助从文本文件中提取IOC的程序. 一般目标是加快从无结构或半结构数据解析结构化数据(IOC)的过程.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/johestephan/ibmxforceex.checker.py" target="_blank">ibmxforceex.checker.py</a>
        </td>
        <td>
            IBM X-Force交换机的Python客户端.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/jager" target="_blank">jager</a>
        </td>
        <td>
            Jager是一个工具,用来从各种输入源(现在的PDF, 纯文本真的很快, 网页最终)中拉出有用的国际奥委会(妥协指标), 并将其投入一个易于操作的JSON格式.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/13850" target="_blank">Kaspersky CyberTrace</a>
        </td>
        <td>
            将威胁数据与SIEM解决方案相结合的威胁情报聚合和分析工具。 用户可以在其现有安全业务工作流程中立即利用威胁情报进行安全监测和事件报告活动。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/KasperskyLab/klara" target="_blank">KLara</a>
        </td>
        <td>
            KLara,一个用Python写成的分布式系统,允许研究人员扫描一个或一个以上Yara规则对带样本的收藏进行扫描,在扫描结果准备就绪时通过电子邮件和网络界面获取通知.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/libtaxii" target="_blank">libtaxii</a>
        </td>
        <td>
            用于处理的 Python 库 TAXII 引用信件 TAXII 服务。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Loki" target="_blank">Loki</a>
        </td>
        <td>
            简易IOC和事件反应扫描仪.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/ssanthosh243/ip-lookup-docker" target="_blank">LookUp</a>
        </td>
        <td>
            LookUp 是一个集中的页面,以获取关于一个IP地址的各种威胁信息。 它可以很容易地融入诸如SIEMs和其他调查工具等工具的上下文菜单.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/HurricaneLabs/machinae" target="_blank">Machinae</a>
        </td>
        <td>
            Machinae是一个从公共网站/信息收集各种安全相关数据的情报的工具:IP地址,域名,URL,电子邮件地址,文件散列和SSL指纹.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/silascutler/MalPipe" target="_blank">MalPipe</a>
        </td>
        <td>
            模块恶意软件(和指标)收集和处理框架. 它旨在从多个种子中拉动恶意软件,域,URL和IP地址,丰富收集的数据并导出结果.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/misp-workbench" target="_blank">MISP Workbench</a>
        </td>
        <td>
            用于导出数据的工具 MISP MySQL数据库并使用和滥用于此平台之外.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/MISP-Taxii-Server" target="_blank">MISP-Taxii-Server</a>
        </td>
        <td>
            EclecticIQ 使用的一组配置文件 OpenTAXII 以及数据发送到 TAXII 服务器的收件箱。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/microsoft/msticpy" target="_blank">MSTIC Jupyter and Python Security Tools</a>
        </td>
        <td>
            msticpy是一个用于在Jupyter Notebooks中进行InfoSec调查和狩猎的库. 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/paulpc/nyx" target="_blank">nyx</a>
        </td>
        <td>
            该项目的目标是便利将威胁情报文物分发给防御系统,并增加从开放源码和商业工具获得的价值。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/onemillion" target="_blank">OneMillion</a>
        </td>
        <td>
            Python 库用于确定一个域是否位于Alexa或Cisco顶部,100万域列表.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/STIXProject/openioc-to-stix" target="_blank">openioc-to-stix</a>
        </td>
        <td>
            生成 STIX XML 从 OpenIOC XML (英语).
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/omnibus" target="_blank">Omnibus</a>
        </td>
        <td>
            Omnibus是一个交互式命令行应用,用于收集和管理IOC/Artiffacts(IPs,域名,电子邮件地址,用户名,和Bitcoin地址),用公共来源的OSINT数据丰富这些文物,并提供简便存储和访问这些文物的手段.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kx499/ostip/wiki" target="_blank">OSTIP</a>
        </td>
        <td>
            土豪威胁数据平台.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mgeide/poortego" target="_blank">poortego</a>
        </td>
        <td>
            处理开源智能存储和链接的开源项目(ala Maltego,但免费如啤酒,不与spe捆绑)cifc/ 专有数据库。 最初开发于红宝石,但新的密码库完全重写于蟒蛇.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/yahoo/PyIOCe" target="_blank">PyIOCe</a>
        </td>
        <td>
            PyIOCe 是一个 IOC editor 写在Python。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/QTek/QRadio" target="_blank">QRadio</a>
        </td>
        <td>
            QRadio 这是一种旨在巩固网络威胁情报来源的工具/框架。
            该项目的目标是建立一个强有力的模块框架,从经审查的来源提取情报数据。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/aboutsecurity/rastrea2r" target="_blank">rastrea2r</a>
        </td>
        <td>
            收集并猎取妥协指标( IOC) 并带有古典和风格 !
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/redline.html" target="_blank">Redline</a>
        </td>
        <td>
            可用于国际奥委会分析等工作的东道调查工具。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ocmdev/rita" target="_blank">RITA</a>
        </td>
        <td>
            真实情报威胁分析RITA目的是帮助在规模不同的企业网络中寻找折中指标。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/softrace" target="_blank">Softrace</a>
        </td>
        <td>
            轻量级国家软件参考库 RDS存储.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/0x4d31/sqhunter" target="_blank">sqhunter</a>
        </td>
        <td>
            基于Osquery,Salt Open和Cymon API的威胁猎人. 它可以查询打开的网络套接字 并对照威胁情报来源检查
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SecurityRiskAdvisors/sra-taxii2-server" target="_blank">SRA TAXII2 Server</a>
        </td>
        <td>
            满 TAXII 2.0 spe (简体中文).cification服务器在Node JS中与MongoDB后端执行.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://stixvalidator.com" target="_blank">Stixvalidator.com</a>
        </td>
        <td>
            Stixvalidator.com 是一个在线免费的STIX和 STIX2 验证服务 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/traut/stixview" target="_blank">Stixview</a>
        </td>
        <td>
            Stixview是 JS 的可嵌入式互动图书馆 STIX2 图表。
        </td>
    </tr>
	<tr>
        <td>
            <a href="https://github.com/STIXProject/stix-viz" target="_blank">stix-viz</a>
        </td>
        <td>
            STIX可视化工具.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://test.taxiistand.com/" target="_blank">TAXII Test Server</a>
        </td>
        <td>
            允许您测试您的 TAXII 与所提供的服务连接,并履行载于 TAXII 类型cif.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jpsenior/threataggregator" target="_blank">threataggregator</a>
        </td>
        <td>
            PreportAggregator汇总了来自一些在线来源的安全威胁,以及输出到各种格式,包括CEF,Snort和IPTables规则.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcrowd_api" target="_blank">threatcrowd_api</a>
        </td>
        <td>
            Python 库 ThreatCrowd这是API.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcmd" target="_blank">threatcmd</a>
        </td>
        <td>
            Cli 接口到 ThreatCrowd。 。 。 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/syphon1c/Threatelligence" target="_blank">Threatelligence</a>
        </td>
        <td>
            威胁情报是一个简单的网络威胁情报信息采集者,使用Elasticsearch,Kibana和Python自动从定制或公共来源收集情报. 自动更新 feed 并尝试进一步增强仪表板的数据. 但是,项目似乎不再维持。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/ThreatIngestor" target="_blank">ThreatIngestor</a>
        </td>
        <td>
            灵活、由配置驱动、可扩展的框架,用于获取威胁情报。 ThreatIngestor 可以观看Twitter,RSS种子,以及其他来源,提取像C2 IPs/域和YARA签名等有意义的信息,并将这些信息发送到其他系统进行分析.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://chrome.google.com/webstore/detail/threatpinch-lookup/ljdgplocfnmnofbhpkjclbefmjoikgke" target="_blank">ThreatPinch Lookup</a>
        </td>
        <td>
            Chrome的扩展,为IPv4,MD5,SHA2和CVES在每个页面上产生悬浮弹出. 它可用于 lookups 在威胁调查期间。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/michael-yip/ThreatTracker" target="_blank">ThreatTracker</a>
        </td>
        <td>
            一个Python脚本,旨在监视和生成由一套Google自定义搜索引擎索引的给定的几套IOC的提示.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yelp/threat_intel" target="_blank">threat_intel</a>
        </td>
        <td>
            几个用于威胁情报的API集成在一个包中. 包括:OpenDNS调查,病毒总数和影子服务员.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/abhinavbom/Threat-Intelligence-Hunter" target="_blank">Threat-Intelligence-Hunter</a>
        </td>
        <td>
            TIH是一个情报工具,可以帮助您通过多种公开的安全信息素材和一些知名的API搜索国际奥委会. 该工具背后的想法是便利搜索和储存经常增加的海洋学委员会,以建立你自己的当地指标数据库。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/tiq-test" target="_blank">tiq-test</a>
        </td>
        <td>
            威胁智能(TIQ)测试工具提供TI素材的可视化和统计分析.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/yeti" target="_blank">YETI</a>
        </td>
        <td>
            YETI 概念的证明 TAXII 用于支持由 TAXII 服务类cif.
        </td>
    </tr>
</table>



## <a name="research"></a>研究、标准与书籍

各类威胁情报读物，包括（科学）研究和白皮书。

<table>
    <tr>
        <td>
            <a href="https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections" target="_blank">APT & Cyber Criminal Campaign Collection</a>
        </td>
        <td>
            广泛开展(历史)运动. 条目来自各种来源.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kbandla/APTnotes" target="_blank">APTnotes</a>
        </td>
        <td>
            大量关于 <i>高级持续威胁</i> (APTs) (英语). 这些报告通常包括战略和战术知识或建议。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://attack.mitre.org/" target="_blank">ATT&CK</a>
        </td>
        <td>
            战术、技术和共同知识ATT&CKTM)是一个模型和框架,用以描述对手在企业网络中运作时可能采取的行动。 ATT&CK 这是进入后技术的日益常见的参考,它使人们更加了解在网络入侵期间可能看到的行动。 MITRE正在积极致力于与相关建筑相结合,例如: CAPEC页:1 MAEC。 。 。 。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.activeresponse.org/building-threat-hunting-strategy-with-the-diamond-model/" target="_blank">Building Threat Hunting Strategies with the Diamond Model</a>
        </td>
        <td>
            Sergio Caltagirone的博客,
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://car.mitre.org/wiki/Main_Page" target="_blank">Cyber Analytics Repository by MITRE</a>
        </td>
        <td>
            网络分析库(CAR)是麻省理工学院基于逆向策略,技术和共同知识开发的分析性知识库(CAR).ATT&CKTM)威胁模型.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a>
        </td>
        <td>
            一个新的 <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a> 采用首先由利益攸关方参与的办法,并与 <a href="https://www.energy.gov/ceser/cybersecurity-capability-maturity-model-c2m2" target="_blank">Cybersecurity Capability Maturity Model (C2M2)</a> 赋予你的团队力量 创造持久的价值
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mitre/cti" target="_blank">Cyber Threat Intelligence Repository by MITRE</a>
        </td>
        <td>
            网络威胁情报库 ATT&CK 和 CAPEC 以 STIX 2.0 贾森。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.tandfonline.com/doi/full/10.1080/08850607.2020.1780062" target="_blank">Cyber Threat Intelligence: A Product Without a Process?</a>
        </td>
        <td>
            一份研究论文描述了当前网络威胁情报产品如何不足,以及如何通过引入和评价合理的方法和进程加以改进。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cryptome.org/2015/09/cti-guide.pdf" target="_blank">Definitive Guide to Cyber Threat Intelligence</a>
        </td>
        <td>
            描述网络威胁情报的要素,并讨论各种人类和技术消费者如何收集、分析和使用网络威胁情报。 进一步审视情报如何在战术、行动和战略层面改善网络安全,以及如何帮助你更快地停止攻击,改善你的防御,在典型情况下与高级管理层更有成效地讨论网络安全问题。 <i>用于哑弹</i> 样式。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ryanstillions.blogspot.nl/2014/04/the-dml-model_21.html" target="_blank">The Detection Maturity Level (DML)</a>
        </td>
        <td>
            DML模型是一种能力成熟模型,用于在检测网络攻击时参考那些成熟度。
            其设计对象是执行情报驱动的检测和响应,强调拥有成熟检测程序的组织.
            一个组织的成熟程度不是以它仅仅获得相关情报的能力来衡量的,而是将该情报有效地应用于侦测和反应功能的能力.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/diamond.pdf" target="_blank">The Diamond Model of Intrusion Analysis</a>
        </td>
        <td>
            本文介绍了钻石模型,这是支持和改进入侵分析的认知框架和分析工具。 支持增加入侵分析的可衡量性、可检验性和可重复性,以便在击败对手方面达到更高的效果、效率和准确性,是其主要贡献之一。
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/a547092.pdf" target="_blank">The Targeting Process: D3A and F3EAD</a>
        </td>
        <td>
            F3EAD是将行动与情报相结合的一种军事方法.
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/NIST.SP.800-150.pdf" target="_blank">Guide to Cyber Threat Information Sharing by NIST</a>
        </td>
        <td>
            《网络威胁信息共享指南》(NIST特别出版物800-)150) 协助各组织建立计算机安全事件应对能力,通过积极共享威胁情报和持续协调,利用其合作伙伴的集体知识、经验和能力。 该指南为协调处理事件提供了指导方针,包括编制和消耗数据、参与信息共享社区以及保护与事件有关的数据。
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/Intelligence Preparation for the Battlefield-Battlespace.pdf" target="_blank">Intelligence Preparation of the Battlefield/Battlespace</a>
        </td>
        <td>
            这份出版物讨论了作为军事决策和规划进程关键组成部分的战斗空间的情报准备,以及军事决策和规划进程如何支持决策,以及整合进程和持续活动。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.lockheedmartin.com/content/dam/lockheed/data/corporate/documents/LM-White-Paper-Intel-Driven-Defense.pdf" target="_blank">Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains</a>
        </td>
        <td>
            本文件中介绍的入侵杀人链为入侵分析、指标提取和采取防御行动提供了一种结构化方法。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.isao.org" target="_blank">ISAO Standards Organization</a>
        </td>
        <td>
            这个 ISAO Standards Organization 10月1日成立的非政府组织 2015. 它的使命是通过确定有关网络安全风险、事件和最佳做法的有力和有效信息共享标准和准则来改善国家的网络安全态势。
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/jp2_0.pdf" target="_blank">Joint Publication 2-0: Joint Intelligence</a>
        </td>
        <td>
            美国军队的这份出版物构成了联合情报学说的核心,为将行动,计划和情报充分整合成一个凝聚力的团队奠定了基础. 所提出的概念也适用于威胁情报。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://download.microsoft.com/download/8/0/1/801358EC-2A0A-4675-A2E7-96C2E7B93E73/Framework_for_Cybersecurity_Info_Sharing.pdf" target="_blank">Microsoft Research Paper</a>
        </td>
        <td>
            网络安全信息共享和减少风险框架。 微软公司高水平综述论文.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/draft-dulaunoy-misp-core-format-00" target="_blank">MISP Core Format (draft)</a>
        </td>
        <td>
            本文件介绍 MISP 用于交换指标和威胁信息的核心格式 MISP (电子邮件信息和威胁共享平台)实例。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.necoma-project.eu/" target="_blank">NECOMA Project</a>
        </td>
        <td>
            日本-欧洲网络防御面向多层威胁分析(NECOMA)研究项目旨在改进威胁数据收集和分析,以发展并抑制新的网络防御机制。
            作为该项目的一部分,出版了若干出版物和软件项目。
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/pyramidofpain.pdf" target="_blank">Pyramid of Pain</a>
        </td>
        <td>
            《痛苦的金字塔》是一种图形化的方法,用以表达获得不同水平指标的困难,以及捍卫者获得资源时对手必须花费的资源数额。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.amazon.com/Structured-Analytic-Techniques-Intelligence-Analysis/dp/1452241511" target="_blank">Structured Analytic Techniques For Intelligence Analysis</a>
        </td>
        <td>
            这本书包含了一些方法,它们代表了情报、执法、国土安全和商业分析方面的最新最佳做法。
        </td>
    </tr>
    <tr>
        <td>
            <a href="./docs/mwr-threat-intelligence-whitepaper.pdf" target="_blank">Threat Intelligence: Collecting, Analysing, Evaluating</a>
        </td>
        <td>
            MWR InfoSecurity的这份报告明确描述了几种不同类型的威胁情报,包括战略,战术和行动变化. 报告还讨论了获取、收集、分析、制作和评价威胁情报的要求过程。 还包括MWR InfoSecurity定义的每一种威胁情报的速赢和成熟模式。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://aisel.aisnet.org/wi2017/track08/paper/3/" target="_blank">Threat Intelligence Sharing Platforms: An Exploratory Study of Software Vendors and Research Perspectives</a>
        </td>
        <td>
            对22个威胁情报分享平台(TISP)进行了系统研究,对当前威胁情报使用状况、其定义和TISP提出了8项关键结论。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.us-cert.gov/tlp" target="_blank">Traffic Light Protocol</a>
        </td>
        <td>
            "交通灯协议"(TLP)是一组用于确保敏感信息与正确受众共享的指定. 它使用四种颜色来表示不同程度的敏感度和接受方将采用的相应共享考虑。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pan-unit42.github.io/playbook_viewer/" target="_blank">Unit42 Playbook Viewer</a>
        </td> 
        <td>
            游戏本的目标是将对手使用的工具,技术和程序组织成结构化的格式,可以与他人共享,并在此基础上发展. 用来构建和分享对手游戏本的框架是MITRE的 ATT&CK 框架和框架 STIX 2.0
        </td>    
    </tr>
    <tr>
        <td>
            <a href="docs/sans-whos-using-cyberthreat-intelligence-and-how.pdf" target="_blank">Who's Using Cyberthreat Intelligence and How?</a>
        </td>
        <td>
            SANS研究所的一份白皮书,介绍了威胁情报的使用情况,包括进行的一项调查。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.wombat-project.eu/" target="_blank">WOMBAT Project</a>
        </td>
        <td>
            这个 WOMBAT project 目的是提供新的手段,以了解针对互联网经济和网民的现有和新出现的威胁。 为实现这一目标,该提议包括三个关键的工作组合:(一)实时收集一套与安全有关的各种原始数据,(二)通过各种分析技术丰富这种投入,(三)查明和了解受审查的现象。
        </td>
    </tr>
</table>



## 许可证

依据 [Apache License 2.0](LICENSE) 授权。
