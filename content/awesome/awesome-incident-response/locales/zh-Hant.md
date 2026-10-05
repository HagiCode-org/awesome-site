# 重大事件应对 [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Check URLs](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml/badge.svg)](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml)

> 安全事件反應工具與資源清單, [DFIR](http://www.acronymfinder.com/Digital-Forensics%2c-Incident-Response-%28DFIR%29.html) 團隊

數位法證與事件反應團隊(DFIR)是由一群人組成,

## 附 件

- [逆向模擬](#adversary-emulation)
- [全一工具](#all-in-one-tools)
- [书籍](#books)
- [社群](#communities)
- [磁碟影像建立工具](#disk-image-creation-tools)
- [收集证据](#evidence-collection)
- [事件管理](#incident-management)
- [知识基础](#knowledge-bases)
- [Linux 分布](#linux-distributions)
- [Linux 證物收藏](#linux-evidence-collection)
- [日志分析工具](#log-analysis-tools)
- [內存分析工具](#memory-analysis-tools)
- [內存影像工具](#memory-imaging-tools)
- [OSX 證物收集](#osx-evidence-collection)
- [其他列表](#other-lists)
- [其他工具](#other-tools)
- [游戲本](#playbooks)
- [處理堆放工具](#process-dump-tools)
- [沙盒/反射工具](#sandboxingreversing-tools)
- [掃描工具](#scanner-tools)
- [時間線工具](#timeline-tools)
- [影片](#videos)
- [視窗證據收藏](#windows-evidence-collection)

## IR 工具收藏

### 逆向模擬

* [APTSimulator](https://github.com/NextronSystems/APTSimulator) - 使用一套工具和輸出檔案的 Windows Batch 文稿讓系統看起來好像已失密 。
* [Atomic Red Team (ART)](https://github.com/redcanaryco/atomic-red-team) - 在MITRE ATT&CK框架下,
* [AutoTTP](https://github.com/jymcheong/AutoTTP) - 策略技巧和程序。 重新手動執行復原測試、產品評估的複雜序列,
* [Caldera](https://github.com/mitre/caldera) - 在 Windows 企業網絡內進行後期對手行為的自動對手模擬系統 。 它在運作中使用一個計劃系統和一個基于Adversarial Tacts, Technology & Community (ATT&CKTM) 專案的預設對手模型產生計劃。
* [DumpsterFire](https://github.com/TryCatchHCF/DumpsterFire) - 模式、選單、跨平台工具, 輕易建立自訂事件鏈, 供Blue Team 演習和傳感器/ 警示映射使用 。 紅色團隊可以制造誘惑事件、分心、誘惑、支持及擴張行動。
* [Metta](https://github.com/uber-common/metta) - 信息安全準備工具 做對戰模擬
* [Network Flight Simulator](https://github.com/alphasoc/flightsim) - 並協助安全團隊評估安全控制和網路能見度。
* [Red Team Automation (RTA)](https://github.com/endgameinc/RTA) - RTA提供一套文稿框架,
* [RedHunt-OS](https://github.com/redhuntlabs/RedHunt-OS) - 仿冒和威脅獵捕的虛擬機器

### 全一工具

* [Belkasoft Evidence Center](https://belkasoft.com/ec) -  工具箱將快速從多個來源中提取數位證據, 分析硬碟、驱动影像、記憶堆、iOS、Blackberry和Android備份、UFED、JTAG和芯片堆。
* [CimSweep](https://github.com/PowerShellMafia/CimSweep) - CIM/WMI工具套件,
* [CIRTkit](https://github.com/byt3smith/CIRTKit) - CIRTKit不只是一套工具,
* [Cyber Triage](http://www.cybertriage.com) - Cyber Triage 收集和分析主機資料以确定它是否失密 。 它的分數系統和推荐引擎 讓你能快速專注於重要的藝術品 它可以從收集工具、磁碟影像和其他收集器( 如 KAPE) 匯入資料 。 它可以在考試員的桌面或伺服器模型上运行. 由Sleuth Kit Labs開發,它也使Autospy。
* [Cynative](https://github.com/cynative/cynative) - 您的深究代理 - 沙盒,只讀,包括AWS、GCP、Azure、K8s、GitHub和GitLab。
* [Dissect](https://github.com/fox-it/dissect) - Fox-IT(NCC Group的一部分)開發的Dissect是數位法醫與事件反應框架與工具集,
* [Doorman](https://github.com/mwielgoszewski/doorman) - Osquery 船隊管理員 可以遠端管理由節點回收的 Osquery 設定 。 它利用Osquery的 TLS 設定, logger, 以及分布的讀/寫端點,
* [Falcon Orchestrator](https://github.com/CrowdStrike/falcon-orchestrator) - 基于Windows的可延伸應用程式,提供工作流程自动化,案件管理和安全反應功能.
* [Flare](https://github.com/fireeye/flare-vm) - 完全自訂的,基于Windows的安全分布,用于恶意軟件分析,事件反應,穿透測試.
* [Fleetdm](https://github.com/fleetdm/fleet) - 專為安全專家設計的藝術主機監控平台 Fleetdm提供持續更新、功能及快速回答大問題。
* [GRR Rapid Response](https://github.com/google/grr) - 事件应对框架侧重于远程直播法医学。 它包括一個Python代理( 客戶端) 安裝在目標系統上, 以及一個 Python 伺服器基礎, 可以管理和與代理商說話 。 除了包含的 Python API 客戶端之外 [PowerGRR](https://github.com/swisscom/PowerGRR) 在 PowerShell 中提供 API 客戶端函式庫, 工作於 Windows, Linux 和 macOS , 用于 GRR 的自动化與脚本 。
* [IRIS](https://github.com/dfir-iris/iris-web) - IRIS是事件反應分析員的網路合作平台,
* [Kuiper](https://github.com/DFIRKuiper/Kuiper) - 數位法證調查平台
* [Limacharlie](https://www.limacharlie.io/) - 由小專案集成的終點安全平台 讓您擁有一個跨平台(Windows, OSX, Linux, Android and iOS)的低層環境,
* [Matano](https://github.com/matanolabs/matano): AWS 上的開源伺服器無安全湖平台, 讓您能將安全資料的網頁儲存和分析成 Apache Iceberg 資料湖, 並將 Python 的实时測試執行為代碼 。
* [MozDef](https://github.com/mozilla/MozDef) - 自動處理安全事件,
* [MutableSecurity](https://github.com/MutableSecurity/mutablesecurity) - CLI 程式可以自動設定、設定及使用網路安全應用程式。
* [nightHawk](https://github.com/biggiesmallsAG/nightHawkResponse) - 用 ElasticSearch 做為後端的同步法醫資料顯示程式 。 它旨在吞噬Redline收藏。
* [Open Computer Forensics Architecture](http://sourceforge.net/projects/ocfa/) - 另一個受歡迎的開源電腦法醫框架 此框架建於 Linux 平台上, 並使用 postgreSQL 資料庫來儲存資料 。
* [osquery](https://osquery.io/) - 使用 SQL 類型的查詢語言, 容易問問關於您的 Linux 和 macOS 基礎; 提供的 *事件反應包* 幫助你侦測和回應違法事件
* [Redline](https://www.fireeye.com/services/freeware/redline.html) - 提供主機調查能力, 讓使用者透過內存與檔案分析,
* [SOC Multi-tool](https://github.com/zdhenard42/SOC-Multitool) - 一個強大且方便使用者的瀏覽器延伸,
* [The Sleuth Kit & Autopsy](http://www.sleuthkit.org) - Unix 和 Windows 工具, 它有各种工具 幫助數位法證。 這些工具有助于分析磁碟影像, 進行檔案系統的深度分析, 以及其它類似的東西 。
* [TheHive](https://thehive-project.org/) - 以方便SOC、CSIRT、CERT以及任何處理安全事件的資訊安全工作者,
* [VanGuard](https://github.com/ridgelinecyberdefence/vanguard) - 跨平台事件反應工具箱, 收集記憶體、磁碟、網路和云端藝術品,
* [Velociraptor](https://github.com/Velocidex/velociraptor) - 端點可见度與收藏工具
* [X-Ways Forensics](http://www.x-ways.net/forensics/) - 磁碟克隆和成像的法證工具 它可用于找到已刪除的檔案和磁碟分析 。
* [Zentral](https://github.com/zentralopensource/zentral) - 整合 Osquery 強大的端點目錄功能 以及灵活的通知和動作框架 這可以讓 OS X 和 Linux 客戶端辨識和反應變更 。

### 书籍

* [Applied Incident Response](https://www.amazon.com/Applied-Incident-Response-Steve-Anson/dp/1119560268/) - 史蒂夫·安森的《事件反應》一書
* [Art of Memory Forensics](https://www.amazon.com/Art-Memory-Forensics-Detecting-Malware/dp/1118825098/) - 在Windows、Linux和Mac Memory中侦測惡魔和威脅
* [Crafting the InfoSec Playbook: Security Monitoring and Incident Response Master Plan](https://www.amazon.com/Crafting-InfoSec-Playbook-Security-Monitoring/dp/1491949406) - 由杰夫·博林格,布蘭登·恩萊特和馬修·瓦利特斯主演.
* [Digital Forensics and Incident Response: Incident response techniques and procedures to respond to modern cyber threats](https://www.amazon.com/Digital-Forensics-Incident-Response-techniques/dp/183864900X) - 傑拉德·約翰森
* [Introduction to DFIR](https://medium.com/@sroberts/introduction-to-dfir-d35d5de4c180/) - 由斯科特·J·羅伯茨(Scott J.
* [Incident Response & Computer Forensics, Third Edition](https://www.amazon.com/Incident-Response-Computer-Forensics-Third/dp/0071798684/) - 事件反應的指南
* [Incident Response Techniques for Ransomware Attacks](https://www.amazon.com/Incident-Response-Techniques-Ransomware-Attacks/dp/180324044X) - 一個很好的指導,建立 一個事件反應策略的贖金軟件攻擊。 奧列格·斯庫爾金
* [Incident Response with Threat Intelligence](https://www.amazon.com/Incident-response-Threat-Intelligence-intelligence-based/dp/1801072957) - 以威脅情報機構為基礎 建立事件反應計劃 由羅伯托·馬丁內斯主演.
* [Intelligence-Driven Incident Response](https://www.amazon.com/Intelligence-Driven-Incident-Response-Outwitting-Adversary-ebook-dp-B074ZRN5T7/dp/B074ZRN5T7) - 由斯科特·J·羅伯特斯,雷貝卡·布朗主演.
* [Operator Handbook: Red Team + OSINT + Blue Team Reference](https://www.amazon.com/Operator-Handbook-Team-OSINT-Reference/dp/B085RR67H5/) - 事件反應器的參考
* [Practical Memory Forensics](https://www.amazon.com/Practical-Memory-Forensics-Jumpstart-effective/dp/1801070334) - 實驗記憶力法學的指南 由斯維特拉娜·奧斯特羅夫斯卡婭和奧列格·斯庫爾金主演.
* [The Practice of Network Security Monitoring: Understanding Incident Detection and Response](http://www.amazon.com/gp/product/1593275099) - 理查德·貝特利希在IR上的書

### 社群

* [Digital Forensics Discord Server](https://discordapp.com/invite/JUqe9Ek) - 由8 000多名执法、私营部门和法證供应商的专业人员组成。 此外,很多學生和爱好者! 指南 [here](https://aboutdfir.com/a-beginners-guide-to-the-digital-forensics-discord-server/).
* [Slack DFIR channel](https://dfircommunity.slack.com) - 黑 DFIR 共通通道 - [Signup here](https://start.paloaltonetworks.com/join-our-slack-community).

### 磁碟影像建立工具

* [AccessData FTK Imager](http://accessdata.com/product-download/?/support/adownloads#FTKImager) - 主要目的是預覽任何磁碟中可回收的資料的法證工具。 FTK 影像器也可以在32bit和64bit系統上取得活的記憶體和傳呼檔案.
* [Bitscout](https://github.com/vitaly-kamluk/bitscout) - Vitaly Kamluk的比特scout 幫助您建立您完全信任的自訂的 LiveCD/LiveUSB 影像, 它的用意是透明且可被系統的擁有者監控,在法學上是健全的,可定制和紧凑的.
* [GetData Forensic Imager](http://www.forensicimager.com/) - 基于 Windows 的程序會以以下常见的法醫檔案格式之一取得、轉換或驗證法醫影像 。
* [Guymager](http://guymager.sourceforge.net) - 在 Linux 上取得媒體的自由法醫影像器 。
* [Magnet ACQUIRE](https://www.magnetforensics.com/magnet-acquire/) - ACQUIRE 由 Magnet 法證公司提供,

### 收集证据

* [Acquire](https://github.com/fox-it/acquire) - 從磁碟影像或活體系統中快速收集法醫文物, 這讓Acquire成為了最佳工具, 它用 [Dissect](https://github.com/fox-it/dissect) 如果可能, 從原始磁碟中收集資訊。
* [artifactcollector](https://github.com/forensicanalysis/artifactcollector) - 藝術品收集計畫提供軟體,
* [bulk_extractor](https://github.com/simsong/bulk_extractor) - 電腦法證工具可以掃描磁碟影像、檔案或檔案目錄,並提取有用的信息而不解析檔案系統或檔案系統架构。 因為忽略了檔案系統架构,所以程序在速度和徹底性上會有所區別.
* [Cold Disk Quick Response](https://github.com/rough007/CDQR) - 精简了分析器清單以快速分析法醫影像檔( I)`dd`, E01, `.vmdk`和輸出九份報告。
* [CyLR](https://github.com/orlikoski/CyLR) - CyLR 工具用 NTFS 檔案系統快速、安全地收集主機的法醫藝術品, 并最小化對主機的影響 。
* [Forensic Artifacts](https://github.com/ForensicArtifacts/artifacts) - 數位法證物庫
* [ir-rescue](https://github.com/diogo-fernan/ir-rescue) - Windows Batch 文稿和 Unix Bash 文稿,以便在事件反應中全面收集主機法證資料 。
* [Live Response Collection](https://www.brimorlabs.com/tools/) - 從 Windows 、 OSX 和 \\ 收集挥發性資料的自動工具*nix 基于操作系統 。
* [Margarita Shotgun](https://github.com/ThreatResponse/margaritashotgun) - 命令行工具( 用亞馬遜 EC2 例或沒有 Amazon EC2 例來工作) 以平行化遠端內存取得 。
* [SPECTR3](https://github.com/alpine-sec/SPECTR3) - 透過便携 iSCSI 可讀存取取得、分類及調查遠端證據
* [UAC](https://github.com/tclahr/uac) - UAC(Unix-like Artifacts Collector)是一款事件反應的Live Response Collection 文稿,利用本地二進制和工具, 使收集的AIX, Android,ESXi, FreeBSD, Linux, macOS, NetBSD, Netscaler, OpenBSD 和 Solaris 系統的藝術品自动化.

### 事件管理

* [Catalyst](https://github.com/SecurityBrewery/catalyst) - 免費SOAR系統,
* [CyberCPR](https://www.cybercpr.com) - 在處理敏感事件時,
* [Cyphon](https://medevel.com/cyphon/) - Cyphon透過一個單一平台, 它接收、處理和分類事件,為您的分析工作流程提供全方位的解答 — 收集數據, 捆綁和优先警示,
* [CORTEX XSOAR](https://www.paloaltonetworks.com/cortex/xsoar) - Paloalto安全管弦、自動及反應平台,
* [DFTimewolf](https://github.com/log2timeline/dftimewolf) - 安排法醫收集、處理和資料出口的框架。
* [DFIRTrack](https://github.com/dfirtrack/dfirtrack) - 事件反應追蹤應用程式處理一起或多起事件,
* [Fast Incident Response (FIR)](https://github.com/certsocietegenerale/FIR/) - 網路安全事件管理平台, 對於CSIRT、CERT與SOC都有用。
* [RTIR](https://www.bestpractical.com/rtir/) - 以電腦安全團隊為目標, 我們與全球十幾支CERT和CSIRT團隊合作, RTIR 以要求追蹤器的所有功能为基础 。
* [Sandia Cyber Omni Tracker (SCOT)](https://github.com/sandialabs/scot) - 事件应对合作和知识收集工具侧重于灵活性和易用性。 我們的目標是增加事件反應的價值,
* [Shuffle](https://github.com/frikky/Shuffle) - 通用安全自動平台侧重于无障碍。
* [threat_note](https://github.com/defpoint/threat_note) - 輕量級的調查筆記,讓安全研究者能夠登記和取回與研究相關的指示器。
* [Zenduty](https://www.zenduty.com) - 提供端到端事件警報、待命管理及應應調整,

### 知识基础

* [Digital Forensics Artifact Knowledge Base](https://github.com/ForensicArtifacts/artifacts-kb) - 數位法醫學博物學基地
* [Windows Events Attack Samples](https://github.com/sbousseaden/EVTX-ATTACK-SAMPLES) - 視窗事件攻擊樣本
* [Windows Registry Knowledge Base](https://github.com/libyal/winreg-kb) - Windows 登記數據庫

### Linux 分布

* [The Appliance for Digital Investigation and Analysis (ADIA)](https://forensics.cert.org/#ADIA) - VMware基於數位調查與採用, ADIA 包含的工具包括自動心理、Sleuth Kit、數位法證框架、log2timeline、Xplico和Wireshark。 系統維修大多使用Webmin. 它的用途是小到中型的數位調查和收购。 應用程式在 Linux、 Windows 和 Mac OS 下運行。 i386 (32- bit) 和 x86 都一樣_64(64位)版本可供使用.
* [Computer Aided Investigative Environment (CAINE)](http://www.caine-live.net/index.html) - 包括法證收集。
* [CCF-VM](https://github.com/rough007/CCF-VM) - CyLR CDQR 法證虛擬機(CCF-VM): 解析收集的資料的全體溶液, 讓它很容易用內置的普通搜尋來搜尋,
* [NST - Network Security Toolkit](https://sourceforge.net/projects/nst/files/latest/download?source=files) - Linux 分布, 包括大量最有營養的開源網路安全應用程式, 對網路安全專業者有用 。
* [NullSec Linux](https://github.com/bad-antics/nullsec-linux) - 以安全為焦點的 Linux 發布 140 + 預置的法證與攻擊性安全工具, 自訂硬化內核, 以及集成事件反應工作流程。
* [PALADIN](https://sumuri.com/software/paladin/) - 修改 Linux 的分佈, 以 法醫 健全 的方式 完成 各种 法醫 工作 。 包括許多開源法證工具。
* [Security Onion](https://github.com/Security-Onion-Solutions/security-onion) - 特別 Linux Distro 以網路安全監控為主題,
* [SANS Investigative Forensic Toolkit (SIFT) Workstation](http://digital-forensics.sans.org/community/downloads) - 使用可自由使用且常更新的尖端開源工具,

### Linux 證物收藏

* [FastIR Collector Linux](https://github.com/SekoiaLab/Fastir_Collector_Linux) - Linux 的 FastIR 在 Linux 上收集不同的藝術品, 并在 CSV 檔案中記錄結果 。
* [MAGNET DumpIt](https://github.com/MagnetForensics/dumpit-linux) - 用 Rust 寫作的 Linux 快速內存取得開源工具 。 產生 Linux 機器的全記憶力崩塌堆放 。

### 日志分析工具

* [AppCompatProcessor](https://github.com/mbevilacqua/appcompatprocessor) - AppCompatProcessor 被設計為從全企業的 AppCompat / AmCache 資料中提取超出經典堆叠與 grepting 技術的附加值 。
* [APT Hunter](https://github.com/ahmedkhlief/APT-Hunter) - APT- Hunter 是視窗事件紀錄的威脅捕捉工具 。
* [Chainsaw](https://github.com/countercept/chainsaw) - 在Windows事件紀錄中迅速找出威脅,
* [Event Log Explorer](https://eventlogxp.com/) - 开发工具以快速分析日志檔案和其他資料 。
* [Event Log Observer](https://lizard-labs.com/event_log_observer.aspx) - 用此 GUI 工具檢視、分析並監控 Microsoft Windows 事件紀錄中紀錄的事件 。
* [Hayabusa](https://github.com/Yamato-Security/hayabusa) - Hayabusa是日本大和保安團體所創立的Windows事件紀錄快速法證時鐘產生器與威脅獵取工具。
* [Kaspersky CyberTrace](https://support.kaspersky.com/13850) - 整合威脅數據與SIEM解决方案的威脅情報整合和分析工具。 使用者可以在目前安全行動的工作流程中,
* [Log Parser Lizard](https://lizard-labs.com/log_parser_lizard.aspx) - 根據結構的紀錄資料執行 SQL 查詢: 伺服器紀錄、 Windows 事件、 檔案系統、 啟動目錄、 log4net 紀錄、 逗號/ Tab 分隔的文字、 XML 或 JSON 檔案 。 也提供 Microsoft LogParser 2. 2 的 GUI 工具, 包括語法編輯器、 資料網格、 圖表、 中枢表、 仪表板、 查詢管理器等等。
* [Lorg](https://github.com/jensvoid/lorg) - 高级 HTTPD 紀錄檔安全分析和法證工具 。
* [Logdissect](https://github.com/dogoncouch/logdissect) - CLI 工具與 Python API 分析日志檔案及其他資料 。
* [NullSec LogReaper](https://github.com/bad-antics/nullsec-logreaper) - 高速日志分析及法證工具,
* [LogonTracer](https://github.com/JPCERTCC/LogonTracer) - 透過視覺化分析 Windows 事件紀錄來調查恶意 Windows 登記的工具 。
* [Sigma](https://github.com/SigmaHQ/sigma) - SIEM 系統的通用簽章格式已包含大規模的規矩 。
* [StreamAlert](https://github.com/airbnb/streamalert) - 沒有伺服器的实时紀錄資料分析框架,能用使用者定義的邏輯來接收自訂的資料來源并觸發警報.
* [SysmonSearch](https://github.com/JPCERTCC/SysmonSearch) - SysmonSearch 使 Windows 事件紀錄分析更加有效,
* [WELA](https://github.com/Yamato-Security/WELA) - Windows事件紀錄分析器旨在成為Windows事件紀錄的瑞士軍隊刀。
* [Zircolite](https://github.com/wagga40/Zircolite) - EVTX 或 JSON 的獨立快速SIGMA測試工具。

### 內存分析工具

* [AVML](https://github.com/microsoft/avml) - Linux 的便携挥發性內存取得工具 。
* [Evolve](https://github.com/JamesHabben/evolve) - 波动記憶力法醫框架的網路介面。
* [inVtero.net](https://github.com/ShaneK2/inVtero.net) - Windows x64 的前進內存分析 , 支持嵌入的超視頻 。
* [LiME](https://github.com/504ensicsLabs/LiME) - 可載入的 Kernel 模組( LKM) , 它允許從 Linux 和 Linux 基礎裝置( 原稱 DMD ) 取得挥發性內存 。
* [MalConfScan](https://github.com/JPCERTCC/MalConfScan) - MalConfScan 是已知恶意軟件的 Volatility 插件提取設定資料 。 波动是事件反應和恶意軟件分析的開源內存法醫框架。 此工具搜尋內存影像中的惡意軟件, 並丟棄設定資料 。 此外, 這個工具還有一個功能可以列出惡性代碼所指的字符串 。
* [Memoryze](https://www.fireeye.com/services/freeware/memoryze.html) - 免費的內存法醫軟體能幫助事件反應者在實際內存中找到邪惡. 記憶體可以取得和/或分析記憶體影像,
* [Memoryze for Mac](https://www.fireeye.com/services/freeware/memoryze.html) - Mac的記憶是記憶,然后是Macs 然而,其特征较少。
* [MemProcFS] (中文(简体) ).https://github.com/ufrisk/MemProcFS) - MemProcFS是一種在虛擬檔案系統中將物理記憶體視為檔案的容易和方便的方法.
* [Orochi](https://github.com/LDO-CERT/orochi) - Orochi是合作法醫內存堆放分析的開源框架.
* [Rekall](http://www.rekall-forensic.com/) - 開源工具(及圖書館),
* [Volatility](https://github.com/volatilityfoundation/volatility) - 高级記憶法學框架
* [Volatility 3](https://github.com/volatilityfoundation/volatility3) - 易變的內存提取框架( 易動性的繼承者)
* [VolatilityBot](https://github.com/mkorman90/VolatilityBot) - 研究者們的自動工具將所有猜測和手動工作從二進制提取階段剪除, 或是幫助調查者進行記憶體分析調查。
* [VolDiff](https://github.com/aim4r/VolDiff) - 基于波动的 Malware 記憶腳印分析 。
* [WindowsSCOPE](http://www.windowsscope.com/windowsscope-cyber-forensics/) - 用于分析挥發性內存的內存、驅動程式、DLLs以及虛擬和物理內存的內存的內存法證和反向工程工具。

### 內存影像工具

* [Belkasoft Live RAM Capturer](http://belkasoft.com/ram-capturer) - 微小的免費法醫工具可以可靠地提取電腦易動記憶體的全部內容 – 即便受到有效的反除錯或反倾销系統的保护。
* [Linux Memory Grabber](https://github.com/halpomeranz/lmg/) - 丟棄 Linux 記憶體及建立 Volatility 描述檔的文稿 。
* [MAGNET DumpIt](https://www.magnetforensics.com/resources/magnet-dumpit-for-windows) - Windows (x86, x64, ARM64) 的快速內存取得工具 。 產生 Windows 機械的完全內存崩塌 。
* [Magnet RAM Capture](https://www.magnetforensics.com/free-tool-magnet-ram-capture/) - 自由影像工具, 支持最近版本的 Windows 。
* [OSForensics](http://www.osforensics.com/) - 在 32 位和 64 位系統上取得實存記憶體的工具 。 可以堆放单个行程的記憶空间或物理記憶堆放。

### OSX 證物收集

* [Knockknock](https://objective-see.com/products/knockknock.html) - 顯示設定在 OSX 上自動執行的持久項目( 標籤、 命令、 二進制等) 。
* [macOS Artifact Parsing Tool (mac_apt)](https://github.com/ydkhatri/mac_apt) - 以插件為基礎的法證框架, 用于快速的 Mac 分類, 工作於活機、 磁碟影像或個人的藝術品檔案 。
* [OSX Auditor](https://github.com/jipegit/OSXAuditor) - 免費Mac OS X電腦法證工具.
* [OSX Collector](https://github.com/yelp/osxcollector) - OSX監察員實際回應
* [The ESF Playground](https://themittenmac.com/the-esf-playground/) - 在 Apple Endpoint 安全框架 (ESF) 中看到事件的工具 。

### 其他列表

* [Awesome Event IDs](https://github.com/stuhli/awesome-event-ids) - 收集事件ID資源,
* [Awesome Forensics](https://github.com/cugu/awesome-forensics) - 一份非常棒的法醫分析工具與資源清單
* [Didier Stevens Suite](https://github.com/DidierStevens/DidierStevensSuite) - 工具收藏
* [Eric Zimmerman Tools](https://ericzimmerman.github.io/) - 由SANS研究所的教官Eric Zimmerman創立的最新法醫工具清單。
* [List of various Security APIs](https://github.com/deralexxx/security-apis) - 安全使用公用JSON API的列表

### 其他工具

* [Cortex](https://thehive-project.org) - Cortex 允許您用 Web 介面逐個分析 IP 和 email 位址 、 URL 、 域名、 檔案或散列模式 。 分析員也可以使用 REST API 使這些操作自动化 。
* [Crits](https://crits.github.io/) - 以網路為基礎的工具,
* [Diffy](https://github.com/Netflix-Skunkworks/diffy) - 由Netflix的 SIRT 發展而成的 DFIR 工具, 讓調查員能在一場事件中快速範圍在雲層區域(Linux example on AWS, 目前為Linux example,
* [domfind](https://github.com/diogo-fernan/domfind) - 在不同的 TLD 下尋找相同域名的 Python DNS 爬行器 。
* [Fileintel](https://github.com/keithjjones/fileintel) - 每個文件散列拉出情報
* [HELK](https://github.com/Cyb3rWard0g/HELK) - 威脅獵捕平台
* [Hindsight](https://github.com/obsidianforensics/hindsight) - Google Chrome/Chromium的網路歷史法證。
* [Hostintel](https://github.com/keithjjones/hostintel) - 每個主機拉出情報
* [IPASIS](https://ipasis.com/) - 即時IP名聲與電子郵件驗證API, 傳回一個互動信任分數( 0- 100) , 將 VPN/ proxy/ Tor 偵測與電子郵件风险评估整合到一個 API 呼叫中 。
* [imagemounter](https://github.com/ralphje/imagemounter) - 命令行工具與 Python 套件以方便( 卸载) 法證磁碟影像 。
* [Kansa](https://github.com/davehull/Kansa/) - PowerShell的模組事件反應框架。
* [MFT Browser](https://github.com/kacos2000/MFT_Browser) - MFT 目錄樹狀重建與紀錄資訊 。
* [Munin](https://github.com/Neo23x0/munin) - 病毒及其它服務的線上散列檢查器。
* [PowerSponse](https://github.com/swisscom/PowerSponse) - PowerSponse是一個PowerShell模組,
* [PyaraScanner](https://github.com/nogoodconfig/pyarascanner) - YARA 掃描 Python 文稿,
* [rastrea2r](https://github.com/rastrea2r/rastrea2r) - 允許一人在Windows, Linux 和 OS X 上使用 YARA 掃瞄IOC 的磁碟和內存 。
* [RaQet](https://raqet.github.io/) - 非傳統的遠端取得與分類工具, 可以分類遠端電腦( 客戶端) 的磁碟, 用有目的的法醫操作系統重新啟動 。
* [Raccine](https://github.com/Neo23x0/Raccine) - 簡單的 Ransomware 保護
* [Stalk](https://www.percona.com/doc/percona-toolkit/2.2/pt-stalk.html) - 當問題發生時收集MySQL的法醫資料.
* [Scout2](https://nccgroup.github.io/Scout2/) - 讓Amazon Web Services管理員評估環境安全态势的安全工具。
* [Stenographer](https://github.com/google/stenographer) - Packet 抓取溶液, 旨在快速將所有資料包拼接到磁碟中, 然后提供簡單、快速的存取這些資料包子集的功能 。 它會盡可能儲存歷史, 管理磁碟的使用, 當磁碟限制被擊中時刪除 。 在事件發生前和發生時,
* [sqhunter](https://github.com/0x4d31/sqhunter) - 基于 Osquery 和 Salt Open (SaltStack) 的威脅獵人, 可以不需 Osquery 的 tls 外掛程式而發送 ad-hoc 或 分布式 查詢 。 Sqhunter 允許您查詢開啟的網絡套接字 并檢查它們的威脅情報來源
* [sysmon-config](https://github.com/SwiftOnSecurity/sysmon-config) - Sysmon 設定檔案樣本, 包含預設的高质量事件追蹤
* [sysmon-modular](https://github.com/olafhartong/sysmon-modular) - Sysmon 設定模組的寄存器
* [traceroute-circl](https://github.com/CIRCL/traceroute-circl) - 延伸追蹤路徑, 支援 CSIRT (或 CERT) 操作者的活動 。 通常CSIRT團隊必須依據收到的IP地址處理事件. 由電腦緊急反應中心建立
* [X-Ray 2.0](https://www.raymond.cc/blog/xray/) - Windows 工具( 维护不足或不再維持) 將病毒樣本提交 AV 銷售商 。

### 游戲本

* [AWS Incident Response Runbook Samples](https://github.com/aws-samples/aws-incident-response-runbooks/tree/0d9a1c0f7ad68fb2c1b2d86be8914f2069492e21) - AWS IR runbook 樣本要對每個使用它們的實體定制 。 三個樣本是:"DoS或DDoS攻擊","可信泄漏",以及"無意存取亞馬遜S3桶".
* [Counteractive Playbooks](https://github.com/counteractive/incident-response-plan-template/tree/master/playbooks) - 反作用的 PLaybook 收藏 。
* [GuardSIght Playbook Battle Cards](https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards) - 網絡事件反應游戲本集
* [IRM](https://github.com/certsocietegenerale/IRM) - 由CERT Societ Generale公司制作。
* [PagerDuty Incident Response Documentation](https://response.pagerduty.com/) - 描述PagerDuty事件反應程序部分的文件。 它不僅提供預備事件的信息, 來源在 [GitHub](https://github.com/PagerDuty/incident-response-docs).
* [Phantom Community Playbooks](https://github.com/phantomcyber/playbooks) - Splunk 的幻影社區游戲簿,
* [ThreatHunter-Playbook](https://github.com/OTRF/ThreatHunter-Playbook) - 幫助打獵的技術與假設的發展。

### 處理堆放工具

* [Microsoft ProcDump](https://docs.microsoft.com/en-us/sysinternals/downloads/procdump) - 將任何執行中的 Win32 處理 fly 上的記憶體影像 。
* [PMDump](http://www.ntsecurity.nu/toolbox/pmdump/) - 工具可以讓您將行程的內存內容堆放到檔案中而不停止行程 。

### 沙盒/反射工具

* [Any Run](https://app.any.run/) - 使用任何環境,
* [CAPA](https://github.com/mandiant/capa) - 偵測可執行檔案中的功能 。 以 PE 、 ELF 、 . NET 模組或 shellcode 檔案來運作, 它會告訴你它認為程序能做什麼。
* [CAPEv2](https://github.com/kevoreilly/CAPEv2) - 不良配置與有效載荷提取 。
* [Cuckoo](https://github.com/cuckoosandbox/cuckoo) - 開放源碼高度可配置的沙盒工具 。
* [Cuckoo-modified](https://github.com/spender-sandbox/cuckoo-modified) - 由社區發展而成的Cuckoo叉
* [Cuckoo-modified-api](https://github.com/keithjjones/cuckoo-modified-api) - 用 Python 圖書庫來控制一個 cuckoo 改型的沙盒 。
* [Cutter](https://github.com/rizinorg/cutter) - 自由開放源碼反轉工程平台由Rizin提供電源.
* [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - 軟體反轉工程框架 。
* [Hybrid-Analysis](https://www.hybrid-analysis.com/) - 自由權力的網路沙盒,
* [Intezer](https://analyze.intezer.com/#/) - Intezer Analysis 潛入 Windows 二进制, 以檢測微碼與已知威脅的相似性,
* [Joe Sandbox (Community)](https://www.joesandbox.com/) - Joe Sandbox在Windows、Android、Mac OS、Linux和iOS上檢測及分析可能的惡意檔案與URL;
* [Mastiff](https://github.com/KoreLogicSecurity/mastiff) - 靜態分析框架可以使從一些不同的檔案格式中提取關鍵特性的过程自动化 。
* [Metadefender Cloud](https://www.metadefender.com) - 自由威脅情報平台提供多樣扫描、數據消毒與檔案脆弱度評估。
* [Radare2](https://github.com/radareorg/radare2) - 反向工程框架和命令行工具集。
* [Reverse.IT](https://www.reverse.it/) - CrowdStrike提供的混合解析工具的替代域 。
* [Rizin](https://github.com/rizinorg/rizin) - 類似 UNIX 的反向工程框架與命令行工具集
* [StringSifter](https://github.com/fireeye/stringsifter) - 一個機械學習工具,它會根據它們對恶意軟件分析的關鍵性排序字符串.
* [Threat.Zone](https://app.threat.zone) - 包括沙盒、CDR和對研究者的交互式分析。
* [Valkyrie Comodo](https://valkyrie.comodo.com) - Valkyrie使用檔案中的 run-time 行為與數百個功能來進行分析。
* [Viper](https://github.com/viper-framework/viper) - Python基于二進制分析與管理框架,
* [Virustotal](https://www.virustotal.com) - 自由網路服務分析檔案與網址,
* [Visualize_Logs](https://github.com/keithjjones/visualize_logs) - 開源可視化圖書庫和日志命令行工具( Cuckoo, Procmon, 更多將來) 。
* [Yomi](https://yomi.yoroi.company) - 由Yoroi管理並主辦的免費多樣箱。

### 掃描工具

* [Fenrir](https://github.com/Neo23x0/Fenrir) - 簡單的IOC掃瞄器。 它讓任何Linux/Unix/OSX系統在平坦的bash中掃描。 由THOR和LOKI的創作人建立.
* [LOKI](https://github.com/Neo23x0/Loki) - 用 yara 規則和其他指示器( IOCs) 掃描終點的自由 IR 掃描器 。
* [Spyre](https://github.com/spyre-project/spyre) - 使用 Go 寫入的簡單 YARA 的IOC 掃描器

### 時間線工具

* [Aurora Incident Response](https://github.com/cyb3rfox/Aurora-Incident-Response) - 建立平台,以輕易建立事件的详细时间表。
* [Highlighter](https://www.fireeye.com/services/freeware/highlighter.html) - 從 Fire/ Mandiant 提供的自由工具會描述可以突出圖片上的區域的紀錄/文字檔, 符合關鍵字或語言 。 好讓感染的時間流逝 以及後來的妥協
* [Morgue](https://github.com/etsy/morgue) - PHP Web 應用程式由 Etsy 管理屍體後。
* [Plaso](https://github.com/log2timeline/plaso) -  a 基于 Python 的后端引擎, 用于工具日志2timeline 。
* [Timesketch](https://github.com/google/timesketch) - 合作法證時間表分析的開源工具。

### 影片

* [The Future of Incident Response](https://www.youtube.com/watch?v=bDcx4UNpKNc) - 由Bruce Schneier在OWASP AppSecUSA 2015 推出.

### 視窗證據收藏

* [AChoir](https://github.com/OMENScan/AChoir) - 框架/描述工具, 以标准化和简化 Windows 的活性取得工具的寫入程序。
* [Crowd Response](http://www.crowdstrike.com/community-tools/) - 輕量級的Windows控制台應用程式, 它有許多模組和輸出格式。
* [Cyber Triage](http://www.cybertriage.com) - Cyber Trage有輕量级的收藏工具可以自由使用. 它收集來源檔案( 如註冊蜂巢與事件紀錄), 但也在直播主機上解析, 以便它也可以收集啟動項目、 排程、 工作等所指的可執行檔 。 它的輸出是JSON檔案,可以匯入自由版的Cyber Trage. Sleuth Kit Labs製作的網絡追蹤器, 
* [DFIR ORC](https://dfir-orc.github.io/) - DFIR ORC 是一套專為可靠剖析與收集重要藝術品的專用工具, 如MFT、登記蜂巢或事件紀錄。 DFIR ORC 收集數據, 但不分析它: 它不是要分類機器 。 它提供了一套在法學上相關的微软視窗運行的機器的快照。 密碼可以在 [GitHub](https://github.com/DFIR-ORC/dfir-orc).
* [FastIR Collector](https://github.com/SekoiaLab/Fastir_Collector) - 收集不同藝術品的工具 。 透過分析這些藝術品,
* [Fibratus](https://github.com/rabbitstack/fibratus) - 探索和追蹤Windows內核的工具。
* [Hoarder](https://github.com/muteb/Hoarder) - 收集最珍貴的文物 供法醫或事件反應調查之用
* [IREC](https://binalyze.com/products/irec-free/) - 收集 RAM 影像、 $MFT 、 EventLogs 、 WMI 文稿、 註冊蜂巢、 系統恢復點等全部 IR 證據收集器 。 這是FREE,閃電快而易用。
* [Invoke-LiveResponse](https://github.com/mgreen27/Invoke-LiveResponse) -  Invoke-LiveResponse是定向收集的活性反應工具。
* [IOC Finder](https://www.fireeye.com/services/freeware/ioc-finder.html) - Mandiant提供的自由工具, 只支援 Windows 。 不再保留。 只完全支持到Windows 7/Windows Server 2008 R2.
* [IRTriage](https://github.com/AJMartel/IRTriage) - 事件反應 - 用于法證分析的視窗證物集。
* [KAPE](https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape) - Kroll Artifact Parser and Crector (KAPE) 作者:埃里克·齊默曼(Eric Zimmerman). 找出最流行的數位藝術品, 大而徹底的當時間是最重要的。
* [LOKI](https://github.com/Neo23x0/Loki) - 用 yara 規則和其他指示器( IOCs) 掃描終點的自由 IR 掃描器 。
* [MEERKAT](https://github.com/TonyPhipps/Meerkat) - 以PowerShell為基礎的分類與威脅捕捉Windows。
* [Panorama](https://github.com/AlmCo/Panorama) - Windows直播系統的快速事件概述。
* [PowerForensics](https://github.com/Invoke-IR/PowerForensics) - 使用PowerShell的Live磁碟法證平台
* [PSRecon](https://github.com/gfoss/PSRecon/) - PSRecon 使用 PowerShell (v2 或 later) 從遠端 Windows 主機收集資料, 將資料整理成目錄, 把所有提取的資料、 PowerShell 和各种系統屬性都排好, 並將資料發送安全團隊 。 數據可以被推動到分享,
* [RegRipper](https://github.com/keydet89/RegRipper3.0) - 用 Perl 寫成的開源工具, 用于從註冊中提取/分解資訊( 關鍵、 值、 資料) , 并呈交分析 。
