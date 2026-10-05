# 重大事件应对 [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Check URLs](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml/badge.svg)](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml)

> 安全事件应对工具和资源一览表,旨在帮助安全分析员和 [DFIR](http://www.acronymfinder.com/Digital-Forensics%2c-Incident-Response-%28DFIR%29.html) 团队。

数字法证和事件应对小组是一个组织中的一群人,负责管理对安全事件的应对,包括收集事件证据,补救其影响,以及实施控制以防止事件今后再次发生.

## 目录

- [逆向模拟](#adversary-emulation)
- [全一工具](#all-in-one-tools)
- [书籍](#books)
- [社区](#communities)
- [磁盘图像创建工具](#disk-image-creation-tools)
- [收集证据](#evidence-collection)
- [事件管理](#incident-management)
- [知识基础](#knowledge-bases)
- [Linux 发行](#linux-distributions)
- [Linux 证据收集](#linux-evidence-collection)
- [逻辑分析工具](#log-analysis-tools)
- [内存分析工具](#memory-analysis-tools)
- [内存成像工具](#memory-imaging-tools)
- [OSX 证据收集](#osx-evidence-collection)
- [其他名单](#other-lists)
- [其他工具](#other-tools)
- [游戏本](#playbooks)
- [处理垃圾倾倒工具](#process-dump-tools)
- [沙箱/反弹工具](#sandboxingreversing-tools)
- [扫描器工具](#scanner-tools)
- [时间线工具](#timeline-tools)
- [视频](#videos)
- [窗口证据收藏](#windows-evidence-collection)

## IR 工具收藏库

### 逆向模拟

* [APTSimulator](https://github.com/NextronSystems/APTSimulator) - 使用一组工具和输出文件的 Windows Batch 脚本让系统看起来像是被损坏了.
* [Atomic Red Team (ART)](https://github.com/redcanaryco/atomic-red-team) - 与MITRE ATT&CK框架映射的小型和高便携检测测试.
* [AutoTTP](https://github.com/jymcheong/AutoTTP) - 自动战术技术和程序。 重新运行复杂的序列,用于回归测试,产品评价,为研究人员生成数据.
* [Caldera](https://github.com/mitre/caldera) - 自动对抗者模拟系统,在Windows Enterprise网络中执行妥协后的对抗行为. 它利用一个规划系统和一个基于Anversarial战术、技术和共同知识(ATT&CKTM)项目的预先配置对手模型,在运营期间生成计划。
* [DumpsterFire](https://github.com/TryCatchHCF/DumpsterFire) - 模块化,菜单驱动,跨平台工具用于构建可重复,时间延迟,分布式安全事件. 易为Blue Team钻探和传感器/警报映射创建定制事件链. 红队可以制造诱饵事件,分散注意力,并引诱他们支持和扩大其行动规模.
* [Metta](https://github.com/uber-common/metta) - 信息安全防范工具进行对抗模拟.
* [Network Flight Simulator](https://github.com/alphasoc/flightsim) - 轻量级公用用来生成恶意网络流量,并帮助安全小组评价安全控制和网络可见度.
* [Red Team Automation (RTA)](https://github.com/endgameinc/RTA) - RTA提供了一个脚本框架,旨在让蓝团队测试自己对恶意交易工具的检测能力,其模式为MITRE ATT&CK.
* [RedHunt-OS](https://github.com/redhuntlabs/RedHunt-OS) - 模拟和威胁猎杀的虚拟机器

### 全一工具

* [Belkasoft Evidence Center](https://belkasoft.com/ec) -  该工具包将很快通过分析硬盘,驱动图像,内存堆放,iOS,黑莓和Android备份,UFED,JTAG和芯片卸放,从多个来源提取数字证据.
* [CimSweep](https://github.com/PowerShellMafia/CimSweep) - 一套基于CIM/WMI的工具,能够在所有版本的Windows上远程进行事件响应和狩猎操作.
* [CIRTkit](https://github.com/byt3smith/CIRTKit) - CIRTKit不仅是一个工具的集合,而且也是一个框架,有助于当前事件应对和法证调查过程的统一。
* [Cyber Triage](http://www.cybertriage.com) - Cyber Triage收集和分析主机数据以确定是否失密. 它的评分系统 和推荐引擎 允许你快速专注于 重要的文物。 它可以从它的收集工具,磁盘图像,以及其他收集器(如KAPE)中导入数据. 它可以在考官的桌面或服务器模型中运行. 由Sleuth Kit Labs开发,它也使Autopy.
* [Cynative](https://github.com/cynative/cynative) - 帮您做深层研究 - 沙盒,只读,覆盖AWS,GCP,Azure,K8s,GitHub和GitLab.
* [Dissect](https://github.com/fox-it/dissect) - Dissect是一个数字法证和事件反应框架和工具集,可以快速访问和分析各种磁盘和文件格式的法证文物,由Fox-IT(NCC Group的一部分)开发.
* [Doorman](https://github.com/mwielgoszewski/doorman) - osquery车队管理器,允许对节点检索的osquery配置进行远程管理. 它利用Osquery的TLS配置,记录器,以及分布的读/写端点,使管理员在机上和侵入性最小的一组设备中具有能见度.
* [Falcon Orchestrator](https://github.com/CrowdStrike/falcon-orchestrator) - 可扩展基于Windows的应用程序,提供工作流程自动化,案件管理和安全响应功能.
* [Flare](https://github.com/fireeye/flare-vm) - 一个完全定制,基于Windows的安全发布,用于恶意软件分析,事件反应,渗透测试.
* [Fleetdm](https://github.com/fleetdm/fleet) - 为安全专家定制的艺术主持人监测平台。 利用Facebook的战斗测试Osquery项目,Fleetdm提供连续更新,功能和快速回答大问题.
* [GRR Rapid Response](https://github.com/google/grr) - 事件应对框架侧重于远程现场取证。 它包括一个安装在目标系统中的蟒蛇代理(client),以及一个蟒蛇服务器基础设施,可以管理和与代理交谈. 除了包含的Python API客户端, [PowerGRR](https://github.com/swisscom/PowerGRR) 提供PowerShell中一个API客户端库,致力于Windows,Linux和macOS,用于GRR自动化和脚本.
* [IRIS](https://github.com/dfir-iris/iris-web) - IRIS是一个事件应对分析员的网络合作平台,可以在技术层面共享调查.
* [Kuiper](https://github.com/DFIRKuiper/Kuiper) - 数字法证调查平台
* [Limacharlie](https://www.limacharlie.io/) - Endpoint安全平台由一系列小项目组成,所有合作项目都为您提供了跨平台(Windows,OSX,Linux,Android和iOS)低级环境,用于管理和推动额外的模块进入内存以扩展其功能.
* [Matano](https://github.com/matanolabs/matano): AWS上的开源服务器无安全湖平台,可以让你摄入,存储,分析Petabytes的安全数据进入Apache Iceberg数据湖,并将实时Python检测作为代码运行.
* [MozDef](https://github.com/mozilla/MozDef) - 自动化安全事故处理流程,方便事故处理人员的实时活动.
* [MutableSecurity](https://github.com/MutableSecurity/mutablesecurity) - 用于网络安全解决方案的设置,配置和使用自动化的CLI程序.
* [nightHawk](https://github.com/biggiesmallsAG/nightHawkResponse) - 以ElasticSearch为后端为同步法证数据演示而构建的应用程序. 其设计为吞噬红线收藏.
* [Open Computer Forensics Architecture](http://sourceforge.net/projects/ocfa/) - 另一个流行的分布式开源计算机鉴证框架. 这个框架建立在Linux平台上,并使用postgreSQL数据库存储数据.
* [osquery](https://osquery.io/) - 使用类似 SQL 的查询语言, 容易询问您的 Linux 和 macOS 基础设施; 提供的 *事件反应包* 帮助你发现和应对违规事件。
* [Redline](https://www.fireeye.com/services/freeware/redline.html) - 向用户提供主机调查能力,以便通过内存和档案分析以及编制威胁评估简介,发现恶意活动的迹象。
* [SOC Multi-tool](https://github.com/zdhenard42/SOC-Multitool) - 一个强大和方便用户的浏览器扩展,简化了安保专业人员的调查。
* [The Sleuth Kit & Autopsy](http://www.sleuthkit.org) - Unix 和 Windows 工具,有助于对计算机进行法证分析。 它有各种有助于数字法证的工具。 这些工具有助于分析磁盘图像,对文件系统进行深入分析,以及其他各种事情.
* [TheHive](https://thehive-project.org/) - 可扩展的3-in-1开放源码和免费解决方案,旨在使SOC、CSIRT、CERT和任何处理安全事件的信息安全从业人员的生活更容易,需要迅速调查并采取行动。
* [VanGuard](https://github.com/ridgelinecyberdefence/vanguard) - 跨平台事件应对工具包,在单一的零安装二进制中设置28个预建使用箱. 收集内存,磁盘,网络,以及云端文物,并自动生成时间段.
* [Velociraptor](https://github.com/Velocidex/velociraptor) - 端点可见度和收藏工具
* [X-Ways Forensics](http://www.x-ways.net/forensics/) - 磁盘克隆和成像的法证工具. 它可用于查找删除的文件和磁盘分析.
* [Zentral](https://github.com/zentralopensource/zentral) - 将Osquery强大的端点盘点特征与灵活的通知和行动框架结合起来. 这使得人们能够识别并应对OS X和Linux客户端上的变化.

### 书籍

* [Applied Incident Response](https://www.amazon.com/Applied-Incident-Response-Steve-Anson/dp/1119560268/) - 史蒂夫·安森的"事件应对"一书.
* [Art of Memory Forensics](https://www.amazon.com/Art-Memory-Forensics-Detecting-Malware/dp/1118825098/) - 在Windows,Linux和Mac Memory中检测恶意软件和威胁.
* [Crafting the InfoSec Playbook: Security Monitoring and Incident Response Master Plan](https://www.amazon.com/Crafting-InfoSec-Playbook-Security-Monitoring/dp/1491949406) - 由杰夫·博林格(英语:Jeff Bollinger),布兰登·恩莱特(英语:Brandon Enright)和马修·瓦利特斯(英语:Matthew Valites)演唱.
* [Digital Forensics and Incident Response: Incident response techniques and procedures to respond to modern cyber threats](https://www.amazon.com/Digital-Forensics-Incident-Response-techniques/dp/183864900X) - 杰拉德·约翰森著.
* [Introduction to DFIR](https://medium.com/@sroberts/introduction-to-dfir-d35d5de4c180/) - 由斯科特·J·罗伯茨(Scott J.
* [Incident Response & Computer Forensics, Third Edition](https://www.amazon.com/Incident-Response-Computer-Forensics-Third/dp/0071798684/) - 事件应对明确指南.
* [Incident Response Techniques for Ransomware Attacks](https://www.amazon.com/Incident-Response-Techniques-Ransomware-Attacks/dp/180324044X) - 为赎金软件攻击制定事件应对策略的伟大指南. 奥列格·斯库尔金著.
* [Incident Response with Threat Intelligence](https://www.amazon.com/Incident-response-Threat-Intelligence-intelligence-based/dp/1801072957) - 参照威胁情报 制定事件应对计划 罗伯托·马丁内斯著.
* [Intelligence-Driven Incident Response](https://www.amazon.com/Intelligence-Driven-Incident-Response-Outwitting-Adversary-ebook-dp-B074ZRN5T7/dp/B074ZRN5T7) - 由斯科特·J·罗伯茨(英语:Scott J. Roberts, Rebekah Brown)主演.
* [Operator Handbook: Red Team + OSINT + Blue Team Reference](https://www.amazon.com/Operator-Handbook-Team-OSINT-Reference/dp/B085RR67H5/) - 事件应对人员大参考.
* [Practical Memory Forensics](https://www.amazon.com/Practical-Memory-Forensics-Jumpstart-effective/dp/1801070334) - 最终的记忆法医学实践指南. 由斯韦特兰娜·奥斯特罗夫斯卡娅和奥列格·斯库尔金主演.
* [The Practice of Network Security Monitoring: Understanding Incident Detection and Response](http://www.amazon.com/gp/product/1593275099) - 理查德·贝特利希关于IR的著作.

### 社区

* [Digital Forensics Discord Server](https://discordapp.com/invite/JUqe9Ek) - 执法、私营部门和法医供应商的8 000多名工作专业人员社区。 此外,还有很多学生和爱好者! 指南 [here](https://aboutdfir.com/a-beginners-guide-to-the-digital-forensics-discord-server/).
* [Slack DFIR channel](https://dfircommunity.slack.com) - 黑 DFIR 软件 社区频道 - [Signup here](https://start.paloaltonetworks.com/join-our-slack-community).

### 磁盘图像创建工具

* [AccessData FTK Imager](http://accessdata.com/product-download/?/support/adownloads#FTKImager) - 法医工具,其主要目的是从任何磁盘中预览可收回的数据。 FTK 键盘 图像器还可以在32bit和64bit系统上获取直播内存和呼呼文件.
* [Bitscout](https://github.com/vitaly-kamluk/bitscout) - Vitaly Kamluk的比特scout帮助您构建了您完全信任的自定义的LiveCD/LiveUSB图像,用于远程数字鉴证(或可能您选择的任何其他任务). 它的用意是系统所有人透明和可监测的,具有法证性、可定制性和紧凑性。
* [GetData Forensic Imager](http://www.forensicimager.com/) - 基于Windows的程序,将获取,转换,或以以下常见的法证文件格式之一验证法证图像.
* [Guymager](http://guymager.sourceforge.net) - Linux上用于媒体获取的自由法证图像器.
* [Magnet ACQUIRE](https://www.magnetforensics.com/magnet-acquire/) - ACQUIRE by Magnet Friences允许在Windows,Linux,OS X以及移动操作系统上进行各种类型的磁盘获取.

### 收集证据

* [Acquire](https://github.com/fox-it/acquire) - 获取是快速从磁盘图像或活系统收集法证文物进入轻量级容器的工具. 这使得Acquile成为加快数字法医学分解过程等的绝佳工具. 用来 [Dissect](https://github.com/fox-it/dissect) 如果可能,可以从原始磁盘中收集信息。
* [artifactcollector](https://github.com/forensicanalysis/artifactcollector) - 文物收集器项目提供了一个系统收集法医文物的软件。
* [bulk_extractor](https://github.com/simsong/bulk_extractor) - 计算机鉴证工具可以扫描磁盘图像,文件,或文件目录,并提取有用的信息而无需解析文件系统或文件系统结构. 由于忽略了文件系统结构,程序在速度和彻底性上区分了自己.
* [Cold Disk Quick Response](https://github.com/rough007/CDQR) - 简化解析器列表,以快速分析一个法证图像文件(`dd`, E01, `.vmdk`并发表九份报告。
* [CyLR](https://github.com/orlikoski/CyLR) - CyLR工具用NTFS文件系统从主机中快速,安全地收集法证文物,并尽量减少对主机的影响.
* [Forensic Artifacts](https://github.com/ForensicArtifacts/artifacts) - 数字法证物库
* [ir-rescue](https://github.com/diogo-fernan/ir-rescue) - Windows批次脚本和一个Unix Bash脚本,用于在事件响应时全面收集主机法证数据.
* [Live Response Collection](https://www.brimorlabs.com/tools/) - 从 Windows, OSX 和\\ 收集挥发性数据的自动工具*nix 基于操作系统.
* [Margarita Shotgun](https://github.com/ThreatResponse/margaritashotgun) - 命令行工具(无论是否亚马逊EC2实例工作)将远程内存获取并行.
* [SPECTR3](https://github.com/alpine-sec/SPECTR3) - 通过便携式iSCSI只读访问获取、分解和调查远程证据
* [UAC](https://github.com/tclahr/uac) - UAC(Unix-like Artifacts Collector)是一款用于事件反应的Live Response收藏脚本,它利用本土二进制和工具将收集的AIX,Android,ESXi,FreeBSD,Linux,macOS,NetBSD,Netscaler,OpenBSD和Solaris系统文物自动化.

### 事件管理

* [Catalyst](https://github.com/SecurityBrewery/catalyst) - 一个免费的SOAR系统,帮助自动的警报处理和事件反应过程.
* [CyberCPR](https://www.cybercpr.com) - 社区和商业事件管理工具,包括 " 需要了解 " 工具,目的是在处理敏感事件的同时支持遵守GDPR。
* [Cyphon](https://medevel.com/cyphon/) - Cyphon通过一个单一平台精简大量相关任务,消除了事件管理中的头痛。 它接收、处理和分解事件,为您的分析工作流程提供全方位解决方案 — 汇总数据、捆绑和确定警报的优先次序以及授权分析人员调查和记录事件。
* [CORTEX XSOAR](https://www.paloaltonetworks.com/cortex/xsoar) - Paloalto安全管弦乐,自动化和响应平台,具有全事件生命周期管理,并有许多集成功能来增强自动化.
* [DFTimewolf](https://github.com/log2timeline/dftimewolf) - 协调法证收集、处理和数据出口的框架。
* [DFIRTrack](https://github.com/dfirtrack/dfirtrack) - 突发事件应对跟踪应用通过案件和任务处理一起或多起事件,涉及许多受影响的系统和文物.
* [Fast Incident Response (FIR)](https://github.com/certsocietegenerale/FIR/) - 网络安全事件管理平台设计要敏捷快捷. 它可以方便地创建、跟踪和报告网络安全事件,对CSIRT、CERT和SOC都有用。
* [RTIR](https://www.bestpractical.com/rtir/) - 事件应对请求跟踪器(英語:Request Tracker for Special Responsibility,简称RTIR)是针对计算机安全团队的首款开源事件处理系统. 我们与全球十多个CERT和CSIRT团队合作,帮助你们处理不断增加的事件报告。 RTIR基于请求追踪器的所有功能.
* [Sandia Cyber Omni Tracker (SCOT)](https://github.com/sandialabs/scot) - 事件应对协作和知识采集工具侧重于灵活性和易用性。 我们的目标是在不给用户造成负担的情况下增加事件应对进程的价值.
* [Shuffle](https://github.com/frikky/Shuffle) - 一个通用安全自动化平台侧重于无障碍。
* [threat_note](https://github.com/defpoint/threat_note) - 轻量级调查笔记本,使安全研究人员能够登记和检索与其研究有关的指标。
* [Zenduty](https://www.zenduty.com) - Zenduct是一个全新的事件管理平台,提供端到端事件警报,待命管理和响应的管弦乐,让团队对事件管理生命周期有更大的控制和自动化.

### 知识基础

* [Digital Forensics Artifact Knowledge Base](https://github.com/ForensicArtifacts/artifacts-kb) - 数字法证知识库
* [Windows Events Attack Samples](https://github.com/sbousseaden/EVTX-ATTACK-SAMPLES) - Windows 事件攻击样本
* [Windows Registry Knowledge Base](https://github.com/libyal/winreg-kb) - 视窗登记知识库

### Linux 发行

* [The Appliance for Digital Investigation and Analysis (ADIA)](https://forensics.cert.org/#ADIA) - 用于数字化调查和收购的基于VMware的电器,完全由公有领域软件建造. ADIA所包含的工具包括Autospy,Sleuth Kit,数字法证框架,log2timeline,Xplico,和Wireshark. 系统的大部分维护使用Webmin. 它是为中小型数字调查和采购而设计的。 应用程序运行在 Linux, Windows, 和 Mac OS 下. i386 (32- bit) 和 x86_64(64-bit)版本可供使用.
* [Computer Aided Investigative Environment (CAINE)](http://www.caine-live.net/index.html) - 载有许多有助于调查人员分析的工具,包括法医证据的收集。
* [CCF-VM](https://github.com/rough007/CCF-VM) - CyLR CDQR 法医虚拟机(CCF-VM): 一个解析所收集数据的全能解决方案,使得它容易通过内置的普通搜索进行搜索,使得能够同时搜索单个和多个主机.
* [NST - Network Security Toolkit](https://sourceforge.net/projects/nst/files/latest/download?source=files) - Linux 分布,包括大量对网络安全专业人员有用的最佳开源网络安全应用程序集.
* [NullSec Linux](https://github.com/bad-antics/nullsec-linux) - 以安全为主的Linux发行,配有140+预先安装的法证和攻击性安全工具,定制硬化内核,以及综合事件应对工作流程.
* [PALADIN](https://sumuri.com/software/paladin/) - 修改了Linux的分布,以法证可靠的方式执行各种法证任务. 其中包括许多开源法证工具。
* [Security Onion](https://github.com/Security-Onion-Solutions/security-onion) - 以高级分析工具为特色的网络安全监测。
* [SANS Investigative Forensic Toolkit (SIFT) Workstation](http://digital-forensics.sans.org/community/downloads) - 利用可自由获取并经常更新的尖端开源工具,可以证明先进的事件应对能力和深度潜水数字法证技术可以实现入侵。

### Linux 证据收集

* [FastIR Collector Linux](https://github.com/SekoiaLab/Fastir_Collector_Linux) - FastIR for Linux在Linux直播上收集不同的文物,并将结果记录在CSV文件中.
* [MAGNET DumpIt](https://github.com/MagnetForensics/dumpit-linux) - 用 Rust 写的 Linux 快速内存获取开源工具. 生成 Linux 机器的全部内存崩溃垃圾堆.

### 逻辑分析工具

* [AppCompatProcessor](https://github.com/mbevilacqua/appcompatprocessor) - AppCompatProcessor被设计为从全企业的AppCompat / AmCache数据中提取超出经典堆叠和粘贴技术的额外价值.
* [APT Hunter](https://github.com/ahmedkhlief/APT-Hunter) - APT-Hunter是窗口事件日志的威胁狩猎工具.
* [Chainsaw](https://github.com/countercept/chainsaw) - 链锯提供了强大的 " 第一反应 " 能力,可以快速识别Windows事件日志内的威胁。
* [Event Log Explorer](https://eventlogxp.com/) - 开发了快速分析日志文件和其他数据的工具.
* [Event Log Observer](https://lizard-labs.com/event_log_observer.aspx) - 使用此GUI工具查看,分析并监视微软Windows事件日志中记录的事件.
* [Hayabusa](https://github.com/Yamato-Security/hayabusa) - Hayabusa是一个Windows事件日志快速鉴证时间表生成器和威胁猎杀工具,由日本大和保安集团创建.
* [Kaspersky CyberTrace](https://support.kaspersky.com/13850) - 将威胁数据与SIEM解决方案相结合的威胁情报聚合和分析工具。 用户可以在其现有安全业务工作流程中立即利用威胁情报进行安全监测和事件报告活动。
* [Log Parser Lizard](https://lizard-labs.com/log_parser_lizard.aspx) - 根据结构化日志数据执行SQL查询:服务器日志,Windows事件,文件系统,活动目录,log4net日志,逗号/tab分隔文本,XML或JSON文件. 同时为Microsoft LogParser 2.2提供GUI,具有强大的UI元素:语法编辑器,数据网格,图表,枢轴表,仪表板,查询管理器等.
* [Lorg](https://github.com/jensvoid/lorg) - 高级HTTPD日志文件安全分析和法证工具.
* [Logdissect](https://github.com/dogoncouch/logdissect) - 用于分析日志文件和其他数据的 CLI 工具及 Python API 。
* [NullSec LogReaper](https://github.com/bad-antics/nullsec-logreaper) - 高速日志分析和法证工具,具有多格式解析,图案匹配,时间线重建及异常检测等事件应对功能.
* [LogonTracer](https://github.com/JPCERTCC/LogonTracer) - 通过可视化和分析Windows事件日志来调查恶意Windows登录的工具.
* [Sigma](https://github.com/SigmaHQ/sigma) - SIEM系统的通用签名格式已经包含一个广泛的规则集.
* [StreamAlert](https://github.com/airbnb/streamalert) - 无服务器的实时日志数据分析框架,能够使用用户定义的逻辑来摄取自定义的数据源并触发警报.
* [SysmonSearch](https://github.com/JPCERTCC/SysmonSearch) - SysmonSearch使Windows事件日志分析通过事件日志的汇总而更有效,更省时.
* [WELA](https://github.com/Yamato-Security/WELA) - Windows事件日志分析器旨在成为Windows事件日志的瑞士陆军刀.
* [Zircolite](https://github.com/wagga40/Zircolite) - 一个独立且快速的SIGMA基于EVTX或JSON的检测工具.

### 内存分析工具

* [AVML](https://github.com/microsoft/avml) - Linux 的便携式挥发性内存获取工具.
* [Evolve](https://github.com/JamesHabben/evolve) - 波动记忆法医框架的网络界面.
* [inVtero.net](https://github.com/ShaneK2/inVtero.net) - 对Windows x64进行高级内存分析,并配有嵌入式超视星等支持.
* [LiME](https://github.com/504ensicsLabs/LiME) - 可装入的Kernel模块(LKM),它允许从Linux和基于Linux的设备中获取挥发性内存,原名为DMD.
* [MalConfScan](https://github.com/JPCERTCC/MalConfScan) - MalConfScan是一个波动插件,提取已知恶意软件的配置数据. 波动是一个用于事件应对和恶意软件分析的开源内存鉴证框架. 这个工具搜索内存图像中的恶意软件,并丢弃配置数据. 此外,这个工具还有一个功能,可以列出恶意代码所指的字符串.
* [Memoryze](https://www.fireeye.com/services/freeware/memoryze.html) - 免费的内存法证软件,帮助事件应对人员在现场记忆中发现邪恶. 记忆器可以获取和/或分析内存图像,在直播系统上,可以将呼呼文件纳入其分析中.
* [Memoryze for Mac](https://www.fireeye.com/services/freeware/memoryze.html) - Mac的记忆器是记忆器,然后是Macs. 然而,特征数量较少。
* [MemProcFS] (中文(简体) ).https://github.com/ufrisk/MemProcFS) - MemProcFS是在虚拟文件系统中将物理内存视为文件的一种简单方便的方式.
* [Orochi](https://github.com/LDO-CERT/orochi) - Orochi是合作法医学记忆堆放分析的开源框架.
* [Rekall](http://www.rekall-forensic.com/) - 从挥发性内存(RAM)样本中提取数字文物的开源工具(和库).
* [Volatility](https://github.com/volatilityfoundation/volatility) - 高级内存法证框架.
* [Volatility 3](https://github.com/volatilityfoundation/volatility3) - 挥发性内存提取框架(波动性的继承者)
* [VolatilityBot](https://github.com/mkorman90/VolatilityBot) - 研究人员的自动化工具将所有的猜想和人工任务都从二进制提取阶段中切除,或者帮助调查人员在进行内存分析调查的最初步骤中.
* [VolDiff](https://github.com/aim4r/VolDiff) - 基于波动的恶意记忆足迹分析.
* [WindowsSCOPE](http://www.windowsscope.com/windowsscope-cyber-forensics/) - 用于分析挥发性内存的内存法证和反向工程工具,提供了分析Windows内核,驱动程序,DLLs以及虚拟和物理内存的能力.

### 内存成像工具

* [Belkasoft Live RAM Capturer](http://belkasoft.com/ram-capturer) - 微小的免费法医学工具,以可靠地提取计算机不稳定内存的全部内容 – 即使受到主动反调试或反倾销系统的保护。
* [Linux Memory Grabber](https://github.com/halpomeranz/lmg/) - 用于倾倒Linux内存和创建Volatility剖面的脚本.
* [MAGNET DumpIt](https://www.magnetforensics.com/resources/magnet-dumpit-for-windows) - Windows的快速内存获取工具(x86,x64,ARM64). 生成 Windows 机器的全部内存崩溃垃圾堆.
* [Magnet RAM Capture](https://www.magnetforensics.com/free-tool-magnet-ram-capture/) - 免费成像工具,旨在捕捉嫌疑人计算机的物理记忆. 支持最近版本的Windows.
* [OSForensics](http://www.osforensics.com/) - 在32位和64位系统上获取直播内存的工具. 个人过程的内存空间或物理内存堆放可以完成。

### OSX 证据收集

* [Knockknock](https://objective-see.com/products/knockknock.html) - 显示设置在OSX上自动执行的持久项目(标注,命令,二进制等).
* [macOS Artifact Parsing Tool (mac_apt)](https://github.com/ydkhatri/mac_apt) - 基于插件的法证框架,用于在活机,磁盘图像或个人文物文件上工作的快速mac分类.
* [OSX Auditor](https://github.com/jipegit/OSXAuditor) - 免费Mac OS X计算机鉴证工具.
* [OSX Collector](https://github.com/yelp/osxcollector) - OSX审计师进行现场响应
* [The ESF Playground](https://themittenmac.com/the-esf-playground/) - 在苹果端点安全框架(ESF)中实时查看事件的工具.

### 其他名单

* [Awesome Event IDs](https://github.com/stuhli/awesome-event-ids) - 收集对数字法证和事件应对有用的事件识别资源。
* [Awesome Forensics](https://github.com/cugu/awesome-forensics) - 一份出色的法医分析工具和资源清单。
* [Didier Stevens Suite](https://github.com/DidierStevens/DidierStevensSuite) - 工具收藏
* [Eric Zimmerman Tools](https://ericzimmerman.github.io/) - 由SANS研究所教官埃里克·齐默曼(Eric Zimmerman)创建的法医工具最新清单.
* [List of various Security APIs](https://github.com/deralexxx/security-apis) - 安全使用公共JSON API的集体清单.

### 其他工具

* [Cortex](https://thehive-project.org) - Cortex 允许您使用Web 接口逐个分析或散装模式分析可观测到的IP和电子邮件地址,URL,域名,文件或散列. 分析师还可以使用它的REST API实现这些操作自动化.
* [Crits](https://crits.github.io/) - 将分析引擎与网络威胁数据库相结合的网络工具。
* [Diffy](https://github.com/Netflix-Skunkworks/diffy) - 由Netflix的SIRT开发的DFIR工具,该工具允许调查人员在事件期间迅速对云层事件(目前是AWS上的Linux实例)进行折中,并通过显示与基线的差别,有效地区分这些实例以采取后续行动。
* [domfind](https://github.com/diogo-fernan/domfind) - Python DNS爬行器用于在不同TLD下查找相同的域名.
* [Fileintel](https://github.com/keithjjones/fileintel) - 收集情报
* [HELK](https://github.com/Cyb3rWard0g/HELK) - 威胁狩猎平台.
* [Hindsight](https://github.com/obsidianforensics/hindsight) - 互联网历史鉴证为Google Chrome/Chromeum.
* [Hostintel](https://github.com/keithjjones/hostintel) - 每个主机拉情报。
* [IPASIS](https://ipasis.com/) - 实时IP声誉及电子邮件验证 API调查可疑互动. 返回一个交互信任分数(0-100),将VPN/proxy/Tor检测与电子邮件风险评估合并在一个API呼叫中.
* [imagemounter](https://github.com/ralphje/imagemounter) - 命令行效用和Python包,以方便(不)挂载法证磁盘图像.
* [Kansa](https://github.com/davehull/Kansa/) - PowerShell的模块事件应对框架.
* [MFT Browser](https://github.com/kacos2000/MFT_Browser) - MFT目录树重建与记录信息.
* [Munin](https://github.com/Neo23x0/munin) - VirusTotal和其他服务的在线散列检查器。
* [PowerSponse](https://github.com/swisscom/PowerSponse) - PowerSponse是一个PowerShell模块,侧重于安全事件应对过程中的定向遏制和补救.
* [PyaraScanner](https://github.com/nogoodconfig/pyarascanner) - 非常简单的多线程规则给许多文件的YARA扫描Python脚本用于恶意软件动物园和IR.
* [rastrea2r](https://github.com/rastrea2r/rastrea2r) - 允许一人在Windows,Linux和OS X上使用YARA扫描国际奥委会的磁盘和内存.
* [RaQet](https://raqet.github.io/) - 非常规远程获取和分解工具,允许对远程计算机(客户端)的磁盘进行分解,该磁盘在有目的地构建的法证操作系统下重新启动.
* [Raccine](https://github.com/Neo23x0/Raccine) - 简单的 Ransomware 保护
* [Stalk](https://www.percona.com/doc/percona-toolkit/2.2/pt-stalk.html) - 当问题发生时收集MySQL的法证数据.
* [Scout2](https://nccgroup.github.io/Scout2/) - 让亚马逊网络服务管理员评估环境安全态势的安全工具.
* [Stenographer](https://github.com/google/stenographer) - Packet 抓取解决方案旨在快速将所有数据包拼接到磁盘,然后为这些数据包的子集提供简单快速的访问. 它尽可能存储历史,管理磁盘的使用,并在磁盘限制被击中时删除. 在事件发生前和事件发生期间,这是捕捉流量的理想,不需要明确存储所有网络流量.
* [sqhunter](https://github.com/0x4d31/sqhunter) - 基于Osquery和Salt Open(英语:SaltStack)的威胁猎人,可以发布ad-hoc或分发查询而不需要Osquery的tls插件. sqhunter允许您查询打开的网络套接字,并对照威胁情报来源检查.
* [sysmon-config](https://github.com/SwiftOnSecurity/sysmon-config) - 带有默认高质量事件跟踪的 Sysmon 配置文件模板
* [sysmon-modular](https://github.com/olafhartong/sysmon-modular) - Sysmon 配置模块库
* [traceroute-circl](https://github.com/CIRCL/traceroute-circl) - 扩展跟踪路径以支持CSIRT(或CERT)运营商的活动. 通常CSIRT团队必须根据收到的IP地址处理事件. 由卢森堡计算机应急中心创建.
* [X-Ray 2.0](https://www.raymond.cc/blog/xray/) - Windows工具(维护不足或不再维护)向AV销售商提交病毒样本.

### 游戏本

* [AWS Incident Response Runbook Samples](https://github.com/aws-samples/aws-incident-response-runbooks/tree/0d9a1c0f7ad68fb2c1b2d86be8914f2069492e21) - AWS IR 运行图样本,指每个使用它们的实体定制. 三个样本分别是:"DoS或DDoS攻击","信用泄漏",以及"无意进入亚马逊S3水桶".
* [Counteractive Playbooks](https://github.com/counteractive/incident-response-plan-template/tree/master/playbooks) - 反活动 PLaybooks 收藏.
* [GuardSIght Playbook Battle Cards](https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards) - 网络事件应对游戏手册
* [IRM](https://github.com/certsocietegenerale/IRM) - CERT Societ Generale的事故应对方法。
* [PagerDuty Incident Response Documentation](https://response.pagerduty.com/) - 描述PagerDuty事件反应过程部分内容的文件. 它不仅提供关于事件准备的信息,而且还提供了在事件期间和之后应做什么的信息。 资料来源: [GitHub](https://github.com/PagerDuty/incident-response-docs).
* [Phantom Community Playbooks](https://github.com/phantomcyber/playbooks) - 用于Splunk的幽灵社区游戏手册,但也可用于其他用途。
* [ThreatHunter-Playbook](https://github.com/OTRF/ThreatHunter-Playbook) - 游戏手册,帮助开发狩猎运动的技术和假设.

### 处理垃圾倾倒工具

* [Microsoft ProcDump](https://docs.microsoft.com/en-us/sysinternals/downloads/procdump) - 丢弃任何运行中的Win32处理苍蝇上的内存图像.
* [PMDump](http://www.ntsecurity.nu/toolbox/pmdump/) - 工具可以让您将进程内存内容向文件倾斜而不停止进程。

### 沙箱/反弹工具

* [Any Run](https://app.any.run/) - 互动在线恶意软件分析服务,用于利用任何环境对大多数类型的威胁进行动态和静态研究.
* [CAPA](https://github.com/mandiant/capa) - 检测可执行文件中的能力。 你用一个PE,ELF,.NET模块,或者 shellcode文件运行, 它告诉你它认为程序可以做什么。
* [CAPEv2](https://github.com/kevoreilly/CAPEv2) - 恶意配置和有效载荷提取 。
* [Cuckoo](https://github.com/cuckoosandbox/cuckoo) - 开源高可配置沙箱工具.
* [Cuckoo-modified](https://github.com/spender-sandbox/cuckoo-modified) - 由社区开发的经过重修的Cuckoo叉.
* [Cuckoo-modified-api](https://github.com/keithjjones/cuckoo-modified-api) - Python 库可以控制一个 cuckoo 修改后的沙盒.
* [Cutter](https://github.com/rizinorg/cutter) - 自由与开源逆向工程平台由Rizin供电.
* [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - 软件逆向工程框架.
* [Hybrid-Analysis](https://www.hybrid-analysis.com/) - 自由强大的在线沙盒由CrowdStrike制作.
* [Intezer](https://analyze.intezer.com/#/) - Intezer Analysis潜入Windows二进制,以检测微码与已知威胁的相似性,以提供准确而容易理解的结果.
* [Joe Sandbox (Community)](https://www.joesandbox.com/) - Joe Sandbox在Windows,Android,Mac OS,Linux和iOS上检测并分析潜在的恶意文件和URL,用于可疑活动;提供全面和详细的分析报告.
* [Mastiff](https://github.com/KoreLogicSecurity/mastiff) - 静态分析框架可以自动化从一些不同的文件格式中提取关键特性的过程.
* [Metadefender Cloud](https://www.metadefender.com) - 免费威胁情报平台提供多扫描、数据消毒和对文件的脆弱性评估。
* [Radare2](https://github.com/radareorg/radare2) - 逆向工程框架和命令行工具集.
* [Reverse.IT](https://www.reverse.it/) - CrowdStrike提供的混合解析工具的替代域.
* [Rizin](https://github.com/rizinorg/rizin) - 类似 UNIX 的逆向工程框架和命令行工具集
* [StringSifter](https://github.com/fireeye/stringsifter) - 一个机器学习工具,根据字符串对恶意软件分析的相关性排序.
* [Threat.Zone](https://app.threat.zone) - 基于云的威胁分析平台,包括沙盒、CDR和对研究人员的互动分析。
* [Valkyrie Comodo](https://valkyrie.comodo.com) - Valkyrie使用运行时的行为以及一个文件中的数百个特性来进行分析.
* [Viper](https://github.com/viper-framework/viper) - Python基于二进制分析和管理框架,与Cuckoo和YARA合作良好.
* [Virustotal](https://www.virustotal.com) - 免费在线服务,分析文件和URL,能够识别病毒,蠕虫,trojans以及抗病毒引擎和网站扫描仪检测到的其他各类恶意内容.
* [Visualize_Logs](https://github.com/keithjjones/visualize_logs) - 开放源代码可视化库和日志命令行工具(Cuckoo,Procmon,更多未来).
* [Yomi](https://yomi.yoroi.company) - 由Yoroi管理和托管的自由多屏箱.

### 扫描器工具

* [Fenrir](https://github.com/Neo23x0/Fenrir) - 简单的IOC扫描仪. 它允许扫描任何 Linux/Unix/OSX 系统,用于平面bash中的IOCs. 由THOR和LOKI的创作者创建.
* [LOKI](https://github.com/Neo23x0/Loki) - 免费IR扫描仪,用于扫描雅拉规则和其他指标的终点(IOCs).
* [Spyre](https://github.com/spyre-project/spyre) - 使用 Go 编写的基于 YARA 的简单国际奥委会扫描仪

### 时间线工具

* [Aurora Incident Response](https://github.com/cyb3rfox/Aurora-Incident-Response) - 平台的开发便于构建事件的详细时间表.
* [Highlighter](https://www.fireeye.com/services/freeware/highlighter.html) - 从 Fire/Mandiant 获得的自由工具,将描绘可以突出图形上区域,对应关键词或短语的日志/文本文件. 给感染时间和在妥协后做了什么
* [Morgue](https://github.com/etsy/morgue) - PHP Web app by Etsy 用于管理尸检.
* [Plaso](https://github.com/log2timeline/plaso) -  a 基于Python的后端引擎,用于工具日志2timeline.
* [Timesketch](https://github.com/google/timesketch) - 合作法证时间表分析的开源工具.

### 视频

* [The Future of Incident Response](https://www.youtube.com/watch?v=bDcx4UNpKNc) - 由布鲁斯·施奈尔在OWASP AppSecUSA 2015上介绍.

### 窗口证据收藏

* [AChoir](https://github.com/OMENScan/AChoir) - 将Windows的实时获取工具脚本程序标准化和简化的框架/描述工具。
* [Crowd Response](http://www.crowdstrike.com/community-tools/) - 轻量级Windows控制台应用程序,旨在协助收集系统信息,用于事件应对和安全接触. 它具有许多模块和产出格式。
* [Cyber Triage](http://www.cybertriage.com) - Cyber Triage拥有一种可以自由使用的轻量级收藏工具. 它收集源文件(如注册蜂窝和事件日志),但也在直播主机上进行剖析,以便也可以收集启动项目,计划,任务等提到的可执行文件. 它的输出是一个JSON文件,可以导入自由版的Cyber Trage. Cyber Triage由Sleuth Kit Labs制作,它也使Autosy. 
* [DFIR ORC](https://dfir-orc.github.io/) - DFIR ORC是专用于可靠地剖析和收集MFT,注册蜂窝或事件日志等关键文物的专门工具的集合. DFIR ORC收集数据,但不分析数据:它不是用于对机器进行分解. 它为运行Microsoft Windows的机器提供了具有法医学相关性的快照. 代码可见于 [GitHub](https://github.com/DFIR-ORC/dfir-orc).
* [FastIR Collector](https://github.com/SekoiaLab/Fastir_Collector) - 在现场Windows系统上收集不同文物并将结果记录在csv文件中的工具. 通过对这些文物的分析,可以发现早期的妥协.
* [Fibratus](https://github.com/rabbitstack/fibratus) - Windows内核的探索和追踪工具.
* [Hoarder](https://github.com/muteb/Hoarder) - 收集最有价值的文物进行鉴证或事件应对调查.
* [IREC](https://binalyze.com/products/irec-free/) - 捕获 RAM 图像、 $MFT 、 事件日志、 WMI 脚本、 注册蜂窝、 系统还原点等全部 IR 证据收集器 。 它是自由的,闪电快而且易于使用。
* [Invoke-LiveResponse](https://github.com/mgreen27/Invoke-LiveResponse) -  Invoke-LiveResponse是定向收集的现场响应工具.
* [IOC Finder](https://www.fireeye.com/services/freeware/ioc-finder.html) - 来自Mandiant的免费工具,用于收集主机系统数据和报告妥协指标的存在。 仅支持 Windows 。 不再保留。 只完全支持到Windows 7/Windows Server 2008 R2.
* [IRTriage](https://github.com/AJMartel/IRTriage) - 事件应对 - 用于法医分析的Windows证据收集.
* [KAPE](https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape) - Kroll Artifact Parser and Extractor (KAPE) 作者:埃里克·齐默曼. 一个分辨工具,它发现了最流行的数码文物,然后快速剖析. 当时间是关键时,就大而彻底。
* [LOKI](https://github.com/Neo23x0/Loki) - 免费IR扫描仪,用于扫描雅拉规则和其他指标的终点(IOCs).
* [MEERKAT](https://github.com/TonyPhipps/Meerkat) - 基于PowerShell的分类和威胁猎取Windows.
* [Panorama](https://github.com/AlmCo/Panorama) - 现场Windows系统快速事件综述.
* [PowerForensics](https://github.com/Invoke-IR/PowerForensics) - 现场磁盘鉴证平台,使用PowerShell.
* [PSRecon](https://github.com/gfoss/PSRecon/) - PSRecon使用PowerShell(v2或以后)从远程Windows主机收集数据,将数据组织到文件夹中,将所有提取的数据,Hashes PowerShell和各种系统属性全部散开,并将数据发送到安全团队. 数据可以被推向共享,通过电子邮件发送,也可以在当地保留.
* [RegRipper](https://github.com/keydet89/RegRipper3.0) - 用Perl书写的开源工具,用于从书记官处提取/分析信息(钥匙、价值、数据)。
