# 멋진 Incident 응답 [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Check URLs](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml/badge.svg)](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml)

> 보안 사고 응답을위한 도구 및 리소스의 큐레이터 목록, 보안 분석가 및 자원을 돕기 위해 [DFIR](http://www.acronymfinder.com/Digital-Forensics%2c-Incident-Response-%28DFIR%29.html) 팀.

Digital Forensics and Incident Response (DFIR) 팀은 사고의 증거를 수집하고, 그 효과를 재조정하고, 향후 재조정에서 사고를 방지하기 위해 통제를 구현하는 보안 사고에 대한 대응을 담당하는 조직의 그룹입니다.

## 이름 *

- [Adversary 에뮬레이션](#adversary-emulation)
- [올인원 툴](#all-in-one-tools)
- [한국어](#books)
- [한국어](#communities)
- [Disk Image 생성 도구](#disk-image-creation-tools)
- [Evidence 컬렉션](#evidence-collection)
- [회사소개](#incident-management)
- [지식 베이스](#knowledge-bases)
- [Linux 배포](#linux-distributions)
- [Linux Evidence 컬렉션](#linux-evidence-collection)
- [Log Analysis 도구](#log-analysis-tools)
- [메모리 분석 도구](#memory-analysis-tools)
- [Memory Imaging 도구](#memory-imaging-tools)
- [OSX 증거 수집](#osx-evidence-collection)
- [기타 목록](#other-lists)
- [기타 도구](#other-tools)
- [다운로드](#playbooks)
- [프로세스 덤프 도구](#process-dump-tools)
- [Sandboxing / 도구 반전](#sandboxingreversing-tools)
- [스캐너 도구](#scanner-tools)
- [Timeline 도구](#timeline-tools)
- [이름 *](#videos)
- [Windows 증거 수집](#windows-evidence-collection)

## IR 도구 모음

### Adversary 에뮬레이션

* [APTSimulator](https://github.com/NextronSystems/APTSimulator) - Windows Batch 스크립트를 사용하여 도구 및 출력 파일 세트를 사용하여 시스템이 손상되었는지 확인합니다.
* [Atomic Red Team (ART)](https://github.com/redcanaryco/atomic-red-team) - MITRE ATT&CK Framework에 맵핑된 작고 높은 휴대용 탐지 테스트.
* [AutoTTP](https://github.com/jymcheong/AutoTTP) - 자동화된 전술 기술 & 절차. 회귀 테스트, 제품 평가, 연구자를 위한 데이터를 생성하는 Re-running 복잡한 순서.
* [Caldera](https://github.com/mitre/caldera) - Windows Enterprise 네트워크 내에서 post-compromise adversarial 동작을 수행하는 자동화된 adversary emulation 시스템. Adversarial Tactics, Techniques & Common Knowledge (ATT&CKTM) 프로젝트를 기반으로 계획 시스템 및 사전 구성 자문 모델을 사용하여 운영 중에 계획을 생성합니다.
* [DumpsterFire](https://github.com/TryCatchHCF/DumpsterFire) - 모듈, 메뉴 구동, 반복 가능한 건물을 위한 크로스 플랫폼 도구, 시간 지연, 분산 보안 이벤트. 쉽게 블루 팀 드릴 및 센서 / 경고 매핑을위한 사용자 정의 이벤트 체인을 만듭니다. Red Teams는 디코이 사건, 장애 및 지원 및 작업을 확장 할 수 있습니다.
* [Metta](https://github.com/uber-common/metta) - 정보 보안 준비 도구는 adversarial 시뮬레이션을 수행.
* [Network Flight Simulator](https://github.com/alphasoc/flightsim) - 네트워크 트래픽을 생성하는 데 사용되는 경량 유틸리티와 보안 팀이 보안 제어 및 네트워크 가시성을 평가하는 데 도움이됩니다.
* [Red Team Automation (RTA)](https://github.com/endgameinc/RTA) - RTA는 MITRE ATT&CK 후 모델링 된 악성 무역선에 대한 탐지 능력을 테스트하기 위해 블루 팀을 허용하도록 설계된 스크립트의 프레임 워크를 제공합니다.
* [RedHunt-OS](https://github.com/redhuntlabs/RedHunt-OS) - Adversary 에뮬레이션 및 위협 사냥을위한 가상 기계.

### 올인원 툴

* [Belkasoft Evidence Center](https://belkasoft.com/ec) -  도구 키트는 빠르게 하드 드라이브를 분석하여 여러 소스에서 디지털 증거를 추출, 이미지, 메모리 덤프, 아이폰 OS, 블랙 베리 및 안드로이드 백업, UFED, JTAG 및 칩 오프 덤프.
* [CimSweep](https://github.com/PowerShellMafia/CimSweep) - CIM / WMI 기반 도구의 스위트는 Windows의 모든 버전에서 사건 응답 및 사냥 작업을 원격으로 수행 할 수 있습니다.
* [CIRTkit](https://github.com/byt3smith/CIRTKit) - CIRTKit은 도구의 수집뿐만 아니라 Incident Response 및 Forensics 조사 프로세스의 지속적인 비화에 대한 프레임 워크도 없습니다.
* [Cyber Triage](http://www.cybertriage.com) - Cyber Triage는 호스트 데이터를 수집하고 분석하여 손상된 경우를 결정합니다. 그것은 scoring 체계와 권고 엔진은 당신이 중요한 artifacts에 빨리 집중할 것을 허용합니다. 수집 도구, 디스크 이미지 및 기타 수집가 (KAPE와 같은)에서 데이터를 가져올 수 있습니다. 시험자의 데스크탑 또는 서버 모델에서 실행할 수 있습니다. Autopsy를 만드는 Sleuth Kit Labs에 의해 개발.
* [Cynative](https://github.com/cynative/cynative) - 당신의 infra를 위한 깊은 연구 대리인 - sandboxed, 읽기 전용, AWS, GCP, Azure, K8s, GitHub 및 GitLab 커버.
* [Dissect](https://github.com/fox-it/dissect) - Dissect는 다양한 디스크 및 파일 형식에서 신속하게 액세스하고 분석할 수 있는 디지털 포렌식 및 사건 응답 프레임 워크 및 툴킷입니다. Fox-IT (NCC Group의 일부).
* [Doorman](https://github.com/mwielgoszewski/doorman) - osquery 함대 관리자는 노드에 의해 osquery 구성의 원격 관리를 허용. osquery의 TLS 구성, 로거 및 분산된 읽기/쓰기 엔드포인트를 활용하면 최소한의 오버헤드와 인루시브를 가진 장치의 함대를 통해 관리자에게 가시성을 부여합니다.
* [Falcon Orchestrator](https://github.com/CrowdStrike/falcon-orchestrator) - 워크플로우 자동화, 케이스 관리 및 보안 응답 기능을 제공하는 확장 가능한 Windows 기반 응용 프로그램입니다.
* [Flare](https://github.com/fireeye/flare-vm) - 완벽한 사용자 정의, Windows 기반 보안 배포 악성 코드 분석, 사건 응답, 침투 테스트.
* [Fleetdm](https://github.com/fleetdm/fleet) - 보안 전문가를 위해 맞춤화된 아트 호스트 모니터링 플랫폼. Facebook의 전투 테스트 osquery 프로젝트를 활용하여 Fleetdm은 지속적인 업데이트, 기능 및 빠른 답변을 큰 질문에 제공합니다.
* [GRR Rapid Response](https://github.com/google/grr) - 원격 라이브 포렌식에 중점을 둔 Incident 응답 프레임 워크. 대상 시스템에 설치되는 python 에이전트 (클라이언트)로 구성되며, 에이전트에 관리하고 대화할 수 있는 python 서버 인프라입니다. 포함 된 Python API 클라이언트 외에도, [PowerGRR](https://github.com/swisscom/PowerGRR) Windows, Linux 및 MacOS에서 작동하는 PowerShell에서 API 클라이언트 라이브러리를 제공합니다.
* [IRIS](https://github.com/dfir-iris/iris-web) - IRIS는 사고 응답 분석가를위한 웹 협업 플랫폼입니다. 기술 수준에서 조사를 공유 할 수 있습니다.
* [Kuiper](https://github.com/DFIRKuiper/Kuiper) - 디지털 포렌식투자 플랫폼
* [Limacharlie](https://www.limacharlie.io/) - 작은 프로젝트의 컬렉션으로 구성된 엔드포인트 보안 플랫폼은 크로스 플랫폼 (Windows, OSX, Linux, Android 및 iOS)을 제공하여 추가 모듈을 메모리로 관리하고 밀어주는 저수준의 환경으로 기능을 확장합니다.
* [Matano](https://github.com/matanolabs/matano): AWS의 오픈 소스 Serverless 보안 호수 플랫폼은 Apache Iceberg 데이터 호수에 보안 데이터의 petabytes를 분석하고 코드로 실시간 Python 탐지를 실행합니다.
* [MozDef](https://github.com/mozilla/MozDef) - 보안 사고 처리 프로세스를 자동화하고 사건 핸들러의 실시간 활동을 촉진합니다.
* [MutableSecurity](https://github.com/MutableSecurity/mutablesecurity) - 사이버 보안 솔루션의 설정, 구성 및 사용 자동화를 위한 CLI 프로그램.
* [nightHawk](https://github.com/biggiesmallsAG/nightHawkResponse) - ElasticSearch를 사용하여 비동기 인센티브 데이터 프리젠 테이션을 위해 구축 된 응용 프로그램입니다. Redline 컬렉션에 맞게 설계되었습니다.
* [Open Computer Forensics Architecture](http://sourceforge.net/projects/ocfa/) - 또 다른 인기있는 분산 오픈 소스 컴퓨터 법안 프레임 워크. 이 프레임 워크는 Linux 플랫폼에 내장되어 있으며 데이터를 저장하기위한 PostgreSQL 데이터베이스를 사용합니다.
* [osquery](https://osquery.io/) - 쉽게 SQL-like 쿼리 언어를 사용하여 Linux 및 macOS 인프라에 대한 질문을; 제공 *부대행사* 당신은 breaches에 감지하고 응답하는 데 도움이됩니다.
* [Redline](https://www.fireeye.com/services/freeware/redline.html) - 호스트 조사 기능을 제공하여 메모리 및 파일 분석, 위협 평가 프로파일의 개발과 악성 행위의 징후를 찾을 수 있습니다.
* [SOC Multi-tool](https://github.com/zdhenard42/SOC-Multitool) - 보안 전문가에 대한 조사를 간소화하는 강력한 사용자 친화적 인 브라우저 확장.
* [The Sleuth Kit & Autopsy](http://www.sleuthkit.org) - 유닉스 및 Windows 기반 도구는 컴퓨터의 법정 분석에 도움이됩니다. 디지털 포렌식에 도움이 되는 다양한 도구로 제공됩니다. 이 도구는 디스크 이미지를 분석, 파일 시스템의 심층 분석, 다양한 다른 것들을 수행.
* [TheHive](https://thehive-project.org/) - SOCs, CSIRTs, CERT 및 모든 정보 보안 실무자가 조사하고 신속하게 행동해야하는 보안 사고로 다루는 정보 보안 실무자에 대한 생명을 쉽게 만들기 위해 설계된 확장 가능한 3-in-1 오픈 소스 및 무료 솔루션.
* [VanGuard](https://github.com/ridgelinecyberdefence/vanguard) - Cross-platform 사건 응답 toolkit with 28 pre-built use case in a single zero-install binary. 메모리, 디스크, 네트워크 및 클라우드 artifacts를 자동화된 타임라인 세대로 수집합니다.
* [Velociraptor](https://github.com/Velocidex/velociraptor) - Endpoint 가시성 및 수집 도구
* [X-Ways Forensics](http://www.x-ways.net/forensics/) - Disk cloning 및 Imaging에 대한 포렌식 도구. 삭제된 파일과 디스크 분석을 찾을 수 있습니다.
* [Zentral](https://github.com/zentralopensource/zentral) - osquery의 강력한 엔드 포인트 재고 기능을 유연한 알림 및 작업 프레임 워크와 결합합니다. 이것은 OS X 및 Linux 클라이언트의 변경을 식별하고 반응 할 수 있습니다.

### 한국어

* [Applied Incident Response](https://www.amazon.com/Applied-Incident-Response-Steve-Anson/dp/1119560268/) - 스티브 앤슨의 책 Incident Response.
* [Art of Memory Forensics](https://www.amazon.com/Art-Memory-Forensics-Detecting-Malware/dp/1118825098/) - Windows, Linux 및 Mac Memory에서 악성 코드 및 위협 탐지.
* [Crafting the InfoSec Playbook: Security Monitoring and Incident Response Master Plan](https://www.amazon.com/Crafting-InfoSec-Playbook-Security-Monitoring/dp/1491949406) - 작성자: Jeff Bollinger, Brandon Enright and Matthew Valites
* [Digital Forensics and Incident Response: Incident response techniques and procedures to respond to modern cyber threats](https://www.amazon.com/Digital-Forensics-Incident-Response-techniques/dp/183864900X) - 에 의해 Gerard Johansen.
* [Introduction to DFIR](https://medium.com/@sroberts/introduction-to-dfir-d35d5de4c180/) - 스콧 J. 로버트.
* [Incident Response & Computer Forensics, Third Edition](https://www.amazon.com/Incident-Response-Computer-Forensics-Third/dp/0071798684/) - 사건 응답에 대한 결정적인 가이드.
* [Incident Response Techniques for Ransomware Attacks](https://www.amazon.com/Incident-Response-Techniques-Ransomware-Attacks/dp/180324044X) - 랜섬웨어 공격에 대한 사건 대응 전략을 구축하는 훌륭한 가이드. Oleg Skulkin에 의해.
* [Incident Response with Threat Intelligence](https://www.amazon.com/Incident-response-Threat-Intelligence-intelligence-based/dp/1801072957) - 위협 인텔리전스에 따라 사건 응답 계획을 세우는 중대한 참고. 로베르토 마르티네스.
* [Intelligence-Driven Incident Response](https://www.amazon.com/Intelligence-Driven-Incident-Response-Outwitting-Adversary-ebook-dp-B074ZRN5T7/dp/B074ZRN5T7) - 스콧 J. 로버트, 레베카 브라운.
* [Operator Handbook: Red Team + OSINT + Blue Team Reference](https://www.amazon.com/Operator-Handbook-Team-OSINT-Reference/dp/B085RR67H5/) - 사건 응답자를 위한 중대한 참고.
* [Practical Memory Forensics](https://www.amazon.com/Practical-Memory-Forensics-Jumpstart-effective/dp/1801070334) - 기억 법의학을 연습하는 정의 가이드. 으로 Svetlana Ostrovskaya 과 Oleg Skulkin.
* [The Practice of Network Security Monitoring: Understanding Incident Detection and Response](http://www.amazon.com/gp/product/1593275099) - Richard Bejtlich의 IR 책.

### 한국어

* [Digital Forensics Discord Server](https://discordapp.com/invite/JUqe9Ek) - 법 집행, 민간 부문 및 포렌식 공급 업체의 8,000 + 작업 전문가의 커뮤니티. 또한, 많은 학생과 취미! - 연혁 [here](https://aboutdfir.com/a-beginners-guide-to-the-digital-forensics-discord-server/).
* [Slack DFIR channel](https://dfircommunity.slack.com) - 슬랙 DFIR Communitiy 채널 - [Signup here](https://start.paloaltonetworks.com/join-our-slack-community).

### Disk Image 생성 도구

* [AccessData FTK Imager](http://accessdata.com/product-download/?/support/adownloads#FTKImager) - 주요 목적이 어떤 종류의 디스크에서 복구 가능한 데이터를 미리보기하는 법 사이트맵 Imager는 32bit 및 64bit 시스템에서 라이브 메모리 및 페이징 파일을 얻을 수 있습니다.
* [Bitscout](https://github.com/vitaly-kamluk/bitscout) - Vitaly Kamluk의 Bitscout은 원격 디지털 포렌식에 사용되기 위해 완전히 위탁된 customizable LiveCD/LiveUSB 이미지를 구축하는 데 도움이됩니다 (또는 아마도 당신의 선택의 다른 작업). 체계의 소유자에 의해 투명하고 감시할 것이, forensically 소리, customizable 및 콤팩트.
* [GetData Forensic Imager](http://www.forensicimager.com/) - Windows 기반 프로그램은 다음과 같은 일반적인 법의 파일 형식 중 하나에서 법의 이미지를 얻을 수 있습니다.
* [Guymager](http://guymager.sourceforge.net) - Linux에서 미디어 인수를 위한 무료 포렌식 이미지.
* [Magnet ACQUIRE](https://www.magnetforensics.com/magnet-acquire/) - Magnet Forensics의 ACQUIRE는 Windows, Linux 및 OS X 및 모바일 운영 체제에서 수행 할 수있는 다양한 유형의 디스크 취득을 허용합니다.

### Evidence 컬렉션

* [Acquire](https://github.com/fox-it/acquire) - 디스크 이미지 또는 라이브 시스템에서 forensic artifacts를 신속하게 수집하는 도구입니다. 이것은 우수한 공구를, 다른 사람의 사이에서, 디지털 포렌식 triage의 과정을 가속화합니다. 그것은 사용 [Dissect](https://github.com/fox-it/dissect) 가능한 경우 원시 디스크에서 정보를 수집합니다.
* [artifactcollector](https://github.com/forensicanalysis/artifactcollector) - artifactcollector 프로젝트는 시스템의 forensic artifacts를 수집하는 소프트웨어를 제공합니다.
* [bulk_extractor](https://github.com/simsong/bulk_extractor) - 디스크 이미지, 파일, 또는 파일의 디렉토리를 스캔하고 파일 시스템 또는 파일 시스템 구조를 파싱하지 않고 유용한 정보를 추출하는 컴퓨터 법. 파일 시스템 구조를 무시하기 때문에, 프로그램은 속도와 철저한 측면에서 자신을 구별합니다.
* [Cold Disk Quick Response](https://github.com/rough007/CDQR) - parsers의 간소화 된 목록은 신속하게 forensic 이미지 파일을 분석합니다 (`dd`, E01, `.vmdk`, 등)와 산출 9개의 보고.
* [CyLR](https://github.com/orlikoski/CyLR) - CyLR 도구는 NTFS 파일 시스템을 신속하게, 안전하게, 호스트에 영향을 최소화하면서 포렌식 아트팩트를 수집합니다.
* [Forensic Artifacts](https://github.com/ForensicArtifacts/artifacts) - 디지털 포렌식 Artifact 저장소
* [ir-rescue](https://github.com/diogo-fernan/ir-rescue) - Windows Batch 스크립트 및 유닉스 Bash 스크립트는 사건 응답 중에 Host forensic 데이터를 종합적으로 수집합니다.
* [Live Response Collection](https://www.brimorlabs.com/tools/) - Windows, OSX 및 \에서 휘발성 데이터를 수집하는 자동화 도구*nix 기반 운영 시스템.
* [Margarita Shotgun](https://github.com/ThreatResponse/margaritashotgun) - 명령 선 유틸리티 (Amazon EC2 인스턴스없이 작동) 원격 메모리 취득을 병렬화합니다.
* [SPECTR3](https://github.com/alpine-sec/SPECTR3) - 휴대용 iSCSI 읽기 전용 액세스를 통해 원격 증거 획득
* [UAC](https://github.com/tclahr/uac) - UAC (Unix-like Artifacts Collector)는 AIX, Android, ESXi, FreeBSD, Linux, macOS, NetBSD, NetScaler, OpenBSD 및 Solaris 시스템의 수집을 자동화하기 위해 기본 바이너리 및 도구의 사용을 만드는 Incident Response 컬렉션 스크립트입니다.

### 회사소개

* [Catalyst](https://github.com/SecurityBrewery/catalyst) - 경고 처리 및 사건 대응 프로세스를 자동화하는 데 도움이되는 무료 SOAR 시스템.
* [CyberCPR](https://www.cybercpr.com) - Need-to-Know와 함께 커뮤니티 및 상업용 사고 관리 도구는 민감한 사고를 처리하면서 GDPR 준수를 지원하기 위해 구축되었습니다.
* [Cyphon](https://medevel.com/cyphon/) - Cyphon은 단일 플랫폼을 통해 관련 업무를 간소화함으로써 사건 관리의 두통을 제거한다. 분석 워크플로우를 위한 all-encompassing 솔루션을 제공 할 수 있도록, 프로세스 및 트리시 이벤트를 수신합니다. — 데이터, 번들링 및 우선 경고를 통합하고 분석 결과를 조사하고 문서 사건을 제출합니다.
* [CORTEX XSOAR](https://www.paloaltonetworks.com/cortex/xsoar) - Paloalto 보안 오케스트라션, 자동화 및 응답 플랫폼 전체 사용 수명주기 관리 및 자동화를 강화하기 위해 많은 통합.
* [DFTimewolf](https://github.com/log2timeline/dftimewolf) - 포렌식 수집, 처리 및 데이터 내보내기를 위한 프레임 워크.
* [DFIRTrack](https://github.com/dfirtrack/dfirtrack) - 사건을 통해 하나 이상의 사건을 처리하고 많은 영향을받는 체계와 artifacts를 가진 작업.
* [Fast Incident Response (FIR)](https://github.com/certsocietegenerale/FIR/) - 사이버 보안 사고 관리 플랫폼은 민첩성 및 속도로 설계되었습니다. 사이버 보안 사건의 쉬운 창조, 추적 및 보고를 허용하고 CSIRTs, CERTs 및 SOCs를 위해 유용합니다.
* [RTIR](https://www.bestpractical.com/rtir/) - Incident Response (RTIR)의 요청 추적기는 컴퓨터 보안 팀을 대상으로 한 최초의 오픈 소스 사고 처리 시스템입니다. 우리는 전 세계 수십 CERT 및 CSIRT 팀과 협력하여 사건 보고서의 중단 볼륨을 처리 할 수 있습니다. RTIR는 요청 추적기의 모든 기능에 구축합니다.
* [Sandia Cyber Omni Tracker (SCOT)](https://github.com/sandialabs/scot) - 유능한 응답 협업 및 지식 캡처 도구는 유연성과 사용이 용이합니다. 우리의 목표는 사용자가 부담하지 않고 사건 응답 과정에 가치를 추가하는 것입니다.
* [Shuffle](https://github.com/frikky/Shuffle) - 접근성에 중점을 둔 범용 보안 자동화 플랫폼.
* [threat_note](https://github.com/defpoint/threat_note) - 보안 연구원을 허용하는 경량 수사 노트북은 자신의 연구와 관련된 지표를 등록하고 검색 할 수 있습니다.
* [Zenduty](https://www.zenduty.com) - Zenduty는 end-to-end 사건 경고, on-call 관리 및 응답 관현을 제공하는 소설 사건 관리 플랫폼입니다. 팀에게 더 큰 통제 및 자동화를 제공합니다.

### 지식 베이스

* [Digital Forensics Artifact Knowledge Base](https://github.com/ForensicArtifacts/artifacts-kb) - Digital Forensics Artifact 지식 베이스
* [Windows Events Attack Samples](https://github.com/sbousseaden/EVTX-ATTACK-SAMPLES) - Windows 이벤트 공격 샘플
* [Windows Registry Knowledge Base](https://github.com/libyal/winreg-kb) - Windows Registry 지식 자료

### Linux 배포

* [The Appliance for Digital Investigation and Analysis (ADIA)](https://forensics.cert.org/#ADIA) - 디지털 조사 및 인수에 사용되는 VMware 기반 어플라이언스는 공공 도메인 소프트웨어에서 완전히 구축됩니다. ADIA에 포함된 도구 중 Autopsy, Sleuth Kit, Digital Forensics Framework, log2timeline, Xplico 및 Wireshark가 있습니다. 시스템 유지 보수의 대부분은 Webmin을 사용합니다. 소형 디지털 조사 및 취득을 위해 설계되었습니다. 기구는 리눅스, Windows 및 Mac OS의 밑에 실행합니다. i386 (32 비트)와 x86 둘 다_64 (64 비트) 버전이 있습니다.
* [Computer Aided Investigative Environment (CAINE)](http://www.caine-live.net/index.html) - 인센티브 증거 수집을 포함한 분석 중 조사자가 돕는 수많은 도구를 포함합니다.
* [CCF-VM](https://github.com/rough007/CCF-VM) - CyLR CDQR 포렌식 가상 기계 (CCF-VM): 수집된 데이터를 파싱하는 올인원 솔루션으로, 내장형 일반 검색으로 쉽게 검색할 수 있으며, 단일 및 다중 호스트를 동시에 검색할 수 있습니다.
* [NST - Network Security Toolkit](https://sourceforge.net/projects/nst/files/latest/download?source=files) - Linux 배포에는 네트워크 보안 전문가에 유용한 최고의 오픈 소스 네트워크 보안 응용 프로그램의 광대 한 컬렉션이 포함되어 있습니다.
* [NullSec Linux](https://github.com/bad-antics/nullsec-linux) - 보안 중심 Linux 배포 140 + 사전 설치된 법정 및 공격 보안 도구, 사용자 정의 강화 커널 및 통합된 사건 응답 워크플로우.
* [PALADIN](https://sumuri.com/software/paladin/) - forensically sound 방식으로 다양한 법의 작업을 수행하기 위해 수정 된 Linux 배포. 많은 오픈 소스 포렌식 도구가 포함되어 있습니다.
* [Security Onion](https://github.com/Security-Onion-Solutions/security-onion) - 고급 분석 도구를 갖춘 네트워크 보안 모니터링을 목표로 특수 Linux distro.
* [SANS Investigative Forensic Toolkit (SIFT) Workstation](http://digital-forensics.sans.org/community/downloads) - 방사성능과 딥 다이브 디지털 포렌식 기술로 고급 사고 대응 능력과 딥 다이브 디지털 포렌식 기술은 자유롭게 사용할 수 있는 최첨단 오픈 소스 도구를 사용하여 수행 할 수 있습니다.

### Linux Evidence 컬렉션

* [FastIR Collector Linux](https://github.com/SekoiaLab/Fastir_Collector_Linux) - FastIR for Linux는 라이브 Linux에서 다른 artifacts를 수집하고 CSV 파일에서 결과를 기록합니다.
* [MAGNET DumpIt](https://github.com/MagnetForensics/dumpit-linux) - 빠른 메모리 취득 Rust에서 작성된 Linux 용 오픈 소스 도구. Linux 기계의 전체 메모리 충돌 덤프를 생성합니다.

### Log Analysis 도구

* [AppCompatProcessor](https://github.com/mbevilacqua/appcompatprocessor) - AppCompatProcessor는 고전적인 겹쳐 쌓이고 모래로 덮는 기술을 넘어서 기업 넓은 AppCompat/AAMCache 자료에서 부가 가치를 추출하기 위하여 디자인됩니다.
* [APT Hunter](https://github.com/ahmedkhlief/APT-Hunter) - APT-Hunter는 Windows 이벤트 로그에 대한 위협 사냥 도구입니다.
* [Chainsaw](https://github.com/countercept/chainsaw) - Chainsaw는 Windows 이벤트 로그 내에서 위협을 빠르게 식별하는 강력한 'First-response' 기능을 제공합니다.
* [Event Log Explorer](https://eventlogxp.com/) - 빠르게 로그 파일 및 기타 데이터를 분석하는 도구.
* [Event Log Observer](https://lizard-labs.com/event_log_observer.aspx) - 이 GUI 도구로 Microsoft Windows 이벤트 로그에 기록된 이벤트 보기, 분석 및 모니터링.
* [Hayabusa](https://github.com/Yamato-Security/hayabusa) - Hayabusa는 일본 야마토 보안 그룹에 의해 만들어진 Windows 이벤트 로그 빠른 포렌식 타임 라인 발전기 및 위협 사냥 도구입니다.
* [Kaspersky CyberTrace](https://support.kaspersky.com/13850) - 위협 데이터 피드를 SIEM 솔루션과 통합하는 위협 인텔리전스 융합 및 분석 도구. 사용자는 기존 보안 운영의 워크플로우에서 보안 모니터링 및 사고 보고서(IR) 활동을 즉시 활용할 수 있습니다.
* [Log Parser Lizard](https://lizard-labs.com/log_parser_lizard.aspx) - 구조 로그 데이터에 대한 SQL 쿼리를 실행: 서버 로그, Windows 이벤트, 파일 시스템, Active Directory, log4net 로그, comma/tab 분리 텍스트, XML 또는 JSON 파일. 또한 Microsoft LogParser 2.2에 GUI를 제공합니다. 강력한 UI 요소: 구문 편집기, 데이터 그리드, 차트, 피벗 테이블, 대시보드, 쿼리 관리자 등.
* [Lorg](https://github.com/jensvoid/lorg) - 고급 HTTPD 로그파일 보안 분석 및 포렌식 도구.
* [Logdissect](https://github.com/dogoncouch/logdissect) - CLI 유틸리티 및 Python API는 로그 파일 및 기타 데이터를 분석합니다.
* [NullSec LogReaper](https://github.com/bad-antics/nullsec-logreaper) - Multi-format Parsing, Pattern matching, timeline reconstruction 및 anomaly Detection을 가진 고속 로그 분석 및 포렌식 도구.
* [LogonTracer](https://github.com/JPCERTCC/LogonTracer) - Windows 이벤트 로그를 시각화하고 분석하여 Windows 로고를 조사하는 도구.
* [Sigma](https://github.com/SigmaHQ/sigma) - SIEM 시스템에 대한 일반적인 서명 형식은 이미 광범위한 규칙을 포함합니다.
* [StreamAlert](https://github.com/airbnb/streamalert) - Serverless, 실시간 로그 데이터 분석 프레임 워크, 사용자 정의 논리를 사용하여 사용자 정의 데이터 소스 및 트리거 경고를 소화 할 수 있습니다.
* [SysmonSearch](https://github.com/JPCERTCC/SysmonSearch) - SysmonSearch는 이벤트 로그의 집계에 의해 더 효과적인 및 더 적은 시간을 분석합니다.
* [WELA](https://github.com/Yamato-Security/WELA) - Windows Event Log Analyzer는 Windows 이벤트 로그에 대한 스위스 육군 칼이 될 것을 목표로합니다.
* [Zircolite](https://github.com/wagga40/Zircolite) - EVTX 또는 JSON을 위한 독립적이고 빠른 SIGMA 기반 탐지 도구.

### 메모리 분석 도구

* [AVML](https://github.com/microsoft/avml) - Linux용 휴대용 휘발성 메모리 취득 도구.
* [Evolve](https://github.com/JamesHabben/evolve) - Volatility Memory Forensics Framework의 웹 인터페이스.
* [inVtero.net](https://github.com/ShaneK2/inVtero.net) - Windows x64의 고급 메모리 분석은 배열된 하이퍼바이저 지원.
* [LiME](https://github.com/504ensicsLabs/LiME) - Loadable Kernel Module (LKM)는 Linux 및 Linux 기반 장치에서 휘발성 메모리를 취득할 수 있으며 이전에 DMD라고 불립니다.
* [MalConfScan](https://github.com/JPCERTCC/MalConfScan) - MalConfScan은 Volatility 플러그인으로 알려진 악성 코드의 구성 데이터를 추출합니다. Volatility는 사건 응답 및 악성 코드 분석을위한 오픈 소스 메모리 법안 프레임 워크입니다. 이 도구는 메모리 이미지 및 덤프 구성 데이터에 악성 코드를 검색합니다. 또한,이 도구는 문자열을 나열하는 기능을 가지고 악성 코드가 나타납니다.
* [Memoryze](https://www.fireeye.com/services/freeware/memoryze.html) - 무료 메모리 forensic 소프트웨어는 사건 응답자가 살아있는 기억에 악을 발견하는 데 도움이됩니다. Memoryze는 메모리 이미지를 취득 및/또는 분석할 수 있으며, 실시간 시스템에는 분석에서 Paging 파일을 포함할 수 있습니다.
* [Memoryze for Mac](https://www.fireeye.com/services/freeware/memoryze.html) - Mac 용 Memoryze는 Memoryze이지만 Mac 용입니다. 더 낮은 기능, 그러나.
* [MemProcFS] (영어)https://github.com/ufrisk/MemProcFS) - MemProcFS는 가상 파일 시스템에서 파일로 물리적 메모리를 쉽게 볼 수 있는 편리한 방법입니다.
* [Orochi](https://github.com/LDO-CERT/orochi) - Orochi는 협업 forensic Memory Dump 분석을위한 오픈 소스 프레임 워크입니다.
* [Rekall](http://www.rekall-forensic.com/) - 휘발성 메모리 (RAM) 샘플에서 디지털 아트팩트 추출을위한 오픈 소스 도구 (및 라이브러리).
* [Volatility](https://github.com/volatilityfoundation/volatility) - 고급 메모리 forensics 프레임 워크.
* [Volatility 3](https://github.com/volatilityfoundation/volatility3) - 휘발성 메모리 추출 프레임 워크 (Volatility)
* [VolatilityBot](https://github.com/mkorman90/VolatilityBot) - 연구원을위한 자동화 도구는 이진 추출 단계에서 모든 추측 및 수동 작업을 절단하거나 메모리 분석 조사를 수행하는 첫 단계의 조사를 돕습니다.
* [VolDiff](https://github.com/aim4r/VolDiff) - Malware Memory Footprint Analysis 기반의 변동성.
* [WindowsSCOPE](http://www.windowsscope.com/windowsscope-cyber-forensics/) - 메모리 forensics 및 역 엔지니어링 도구는 Windows 커널, 드라이버, DLL 및 가상 및 물리적 메모리를 분석하는 기능을 제공하는 휘발성 메모리를 분석하는 데 사용됩니다.

### Memory Imaging 도구

* [Belkasoft Live RAM Capturer](http://belkasoft.com/ram-capturer) - Tiny free forensic tool to reliably extract the 전체 내용의 컴퓨터의 휘발성 메모리 – 활성 anti-debugging 또는 anti-dumping 시스템에 의해 보호되는 경우에도.
* [Linux Memory Grabber](https://github.com/halpomeranz/lmg/) - Linux 메모리를 덤프하고 Volatility 프로파일을 만드는 스크립트.
* [MAGNET DumpIt](https://www.magnetforensics.com/resources/magnet-dumpit-for-windows) - Windows 용 빠른 메모리 취득 도구 (x86, x64, ARM64). Windows 기계의 전체 메모리 충돌 덤프를 생성합니다.
* [Magnet RAM Capture](https://www.magnetforensics.com/free-tool-magnet-ram-capture/) - 의심의 컴퓨터의 물리적 메모리를 캡처하도록 설계된 무료 이미징 도구. Windows의 최근 버전을 지원합니다.
* [OSForensics](http://www.osforensics.com/) - 32 비트 및 64 비트 시스템에 라이브 메모리를 취득하는 도구. 개별 프로세스의 메모리 공간 또는 물리적 메모리 덤프의 덤프가 수행 할 수 있습니다.

### OSX 증거 수집

* [Knockknock](https://objective-see.com/products/knockknock.html) - OSX에서 자동으로 실행되도록 설정된 각 항목(scripts, commands, binaries 등)을 표시합니다.
* [macOS Artifact Parsing Tool (mac_apt)](https://github.com/ydkhatri/mac_apt) - 라이브 머신, 디스크 이미지 또는 개별적인 artifact 파일에서 작동하는 빠른 Mac triage를 위한 forensics Framework를 기반으로 한 플러그인.
* [OSX Auditor](https://github.com/jipegit/OSXAuditor) - 무료 Mac OS X 컴퓨터 포렌식 도구.
* [OSX Collector](https://github.com/yelp/osxcollector) - 살아있는 응답을 위한 OSX 감사 offshoot.
* [The ESF Playground](https://themittenmac.com/the-esf-playground/) - Apple Endpoint Security Framework (ESF)의 이벤트를 실시간으로 볼 수 있습니다.

### 기타 목록

* [Awesome Event IDs](https://github.com/stuhli/awesome-event-ids) - Digital Forensics 및 Incident Response에 유용한 Event ID 리소스 모음.
* [Awesome Forensics](https://github.com/cugu/awesome-forensics) - 멋진 포렌식 분석 도구 및 리소스의 큐레이터 목록.
* [Didier Stevens Suite](https://github.com/DidierStevens/DidierStevensSuite) - 회사 소개
* [Eric Zimmerman Tools](https://ericzimmerman.github.io/) - Eric Zimmerman이 만든 forensic 도구의 업데이트 목록, SANS 기관 강사.
* [List of various Security APIs](https://github.com/deralexxx/security-apis) - Security에서 사용하기 위한 public JSON APIs의 수집 목록.

### 기타 도구

* [Cortex](https://thehive-project.org) - 웹 인터페이스를 사용하여 IP 및 이메일 주소, URL, 도메인 이름, 파일 또는 해시와 같은 관찰 가능한 분석 할 수 있습니다. Analysts는 REST API를 사용하여 이러한 작업을 자동화 할 수 있습니다.
* [Crits](https://crits.github.io/) - 사이버 위협 데이터베이스와 분석 엔진을 결합하는 웹 기반 도구.
* [Diffy](https://github.com/Netflix-Skunkworks/diffy) - DFIR 도구는 Netflix의 SIRT에 의해 개발되어 조사자가 클라우드 인스턴스 (Linux 인스턴스 AWS, 현재)를 통해 손상을 신속하게 수행 할 수 있으며, 특히 기본에 대한 차이를 보여주는 후속 조치에 대한 그 인스턴스를 효율화합니다.
* [domfind](https://github.com/diogo-fernan/domfind) - 다른 TLD에서 동일한 도메인 이름을 찾는 Python DNS 크롤러.
* [Fileintel](https://github.com/keithjjones/fileintel) - 파일 해시 당 지능을 잡아.
* [HELK](https://github.com/Cyb3rWard0g/HELK) - Threat Hunting 플랫폼.
* [Hindsight](https://github.com/obsidianforensics/hindsight) - Google Chrome/Chromium의 인터넷 역사
* [Hostintel](https://github.com/keithjjones/hostintel) - 호스트당 인텔리전스를 잡아라.
* [IPASIS](https://ipasis.com/) - 실시간 IP 명성 및 이메일 검증 API는 의심스러운 상호 작용을 조사합니다. VPN/proxy/Tor Detection을 결합한 인터랙티브 리스 점수(0-100)을 단일 API 통화의 이메일 위험 평가로 반환합니다.
* [imagemounter](https://github.com/ralphje/imagemounter) - Command line 유틸리티 및 Python 패키지를 사용하면 (un)Forensic disk 이미지의 마운트가 용이합니다.
* [Kansa](https://github.com/davehull/Kansa/) - PowerShell의 모듈 사건 응답 기구.
* [MFT Browser](https://github.com/kacos2000/MFT_Browser) - MFT 디렉토리 트리 재건축 및 기록 정보.
* [Munin](https://github.com/Neo23x0/munin) - VirusTotal 및 기타 서비스에 대한 온라인 해시 검수원.
* [PowerSponse](https://github.com/swisscom/PowerSponse) - PowerSponse는 보안 사건 응답 도중 표적으로 한 포함 및 재약에 집중된 PowerShell 단위입니다.
* [PyaraScanner](https://github.com/nogoodconfig/pyarascanner) - 매우 간단한 멀티 스레드는 많은 파일 YARA 스캔 Python 스크립트에 악성 코드 동물원 및 IR.
* [rastrea2r](https://github.com/rastrea2r/rastrea2r) - Windows, Linux 및 OS X에서 YARA를 사용하여 디스크 및 메모리를 스캔 할 수 있습니다.
* [RaQet](https://raqet.github.io/) - 원격 취득 및 triaging 도구는 목적적으로 내장 된 법정 운영 체제로 재시작되는 원격 컴퓨터 (클라이언트)의 디스크를 삼을 수 있습니다.
* [Raccine](https://github.com/Neo23x0/Raccine) - 간단한 랜섬웨어 보호
* [Stalk](https://www.percona.com/doc/percona-toolkit/2.2/pt-stalk.html) - 문제가 발생할 때 MySQL에 대한 법정 데이터를 수집합니다.
* [Scout2](https://nccgroup.github.io/Scout2/) - Amazon Web Services 관리자가 환경의 보안 자세를 평가하는 보안 도구.
* [Stenographer](https://github.com/google/stenographer) - Packet 캡처 솔루션은 모든 패킷을 디스크에 신속하게 스풀을 목표로하고, 그 패킷의 하위 설정에 간단한 빠른 액세스를 제공합니다. 그것은 가능한 한 많은 역사 저장, 디스크 사용 관리, 디스크 제한이 히트 때 삭제. 네트워크 트래픽의 모든 저장을 명시하지 않고, 사고 전에 트래픽을 캡처하는 데 이상적입니다.
* [sqhunter](https://github.com/0x4d31/sqhunter) - osquery와 Salt Open (SaltStack)을 기반으로 한 위협 사냥꾼은 osquery의 tls 플러그인을 필요로하지 않고 ad-hoc 또는 분산 쿼리를 발급 할 수 있습니다. sqhunter는 네트워크 소켓을 쿼리하고 위협 인텔리전스 소스에 대해 확인 할 수 있습니다.
* [sysmon-config](https://github.com/SwiftOnSecurity/sysmon-config) - Sysmon 구성 파일 템플릿 기본 고품질 이벤트 추적
* [sysmon-modular](https://github.com/olafhartong/sysmon-modular) - sysmon 구성 모듈의 저장소
* [traceroute-circl](https://github.com/CIRCL/traceroute-circl) - CSIRT (또는 CERT) 연산자의 활동을 지원하기 위해 확장된 traceroute. CSIRT 팀은 IP 주소에 따라 사건을 처리해야 합니다. Computer Emergency Response Center Luxembourg에 의해 작성되었습니다.
* [X-Ray 2.0](https://www.raymond.cc/blog/xray/) - Windows 유틸리티 (지속 유지 또는 더 이상 유지되지 않음) AV 공급 업체에 바이러스 샘플을 제출하십시오.

### 다운로드

* [AWS Incident Response Runbook Samples](https://github.com/aws-samples/aws-incident-response-runbooks/tree/0d9a1c0f7ad68fb2c1b2d86be8914f2069492e21) - AWS IR Runbook 샘플은 각 법인마다 사용자 정의되지 않습니다. 세 가지 샘플은 다음과 같습니다 : "DoS 또는 DDoS 공격", "credential 누설", 그리고 "Amazon S3 Bucket에 대한 무인 액세스".
* [Counteractive Playbooks](https://github.com/counteractive/incident-response-plan-template/tree/master/playbooks) - 카운터티브 PLaybooks 컬렉션.
* [GuardSIght Playbook Battle Cards](https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards) - Cyber Incident Response Playbook 전투 카드 컬렉션
* [IRM](https://github.com/certsocietegenerale/IRM) - CERT Societe Generale의 객관적인 응답 방법론.
* [PagerDuty Incident Response Documentation](https://response.pagerduty.com/) - PagerDuty Incident Response 프로세스의 부분을 설명하는 문서. 그것은 사건을 준비하는뿐만 아니라, 또한 동안해야 할 일도 제공합니다. 소스는 사용할 수 있습니다 [GitHub](https://github.com/PagerDuty/incident-response-docs).
* [Phantom Community Playbooks](https://github.com/phantomcyber/playbooks) - Phantom 커뮤니티 플레이북 Splunk뿐만 아니라 다른 용도로 사용자 정의 할 수 있습니다.
* [ThreatHunter-Playbook](https://github.com/OTRF/ThreatHunter-Playbook) - 놀이 책은 사냥 캠페인을위한 기술 및 hypothesis의 개발을 원조합니다.

### 프로세스 덤프 도구

* [Microsoft ProcDump](https://docs.microsoft.com/en-us/sysinternals/downloads/procdump) - 어떤 실행 Win32 프로세스 메모리 이미지를 비행에 덤프.
* [PMDump](http://www.ntsecurity.nu/toolbox/pmdump/) - 프로세스를 중지하지 않고 파일로 메모리 콘텐츠를 덤프 할 수있는 도구.

### Sandboxing / 도구 반전

* [Any Run](https://app.any.run/) - 모든 환경을 사용하여 위협의 대부분의 유형의 동적 및 정적 연구를위한 상호 작용 온라인 악성 코드 분석 서비스.
* [CAPA](https://github.com/mandiant/capa) - executable 파일에 있는 기능을 검출합니다. PE, ELF, .NET 모듈 또는 쉘 코드 파일에 대해 실행하고 프로그램을 할 수 있다고 생각합니다.
* [CAPEv2](https://github.com/kevoreilly/CAPEv2) - Malware 윤곽과 Payload 추출.
* [Cuckoo](https://github.com/cuckoosandbox/cuckoo) - 오픈 소스 Highly configurable sandboxing 도구.
* [Cuckoo-modified](https://github.com/spender-sandbox/cuckoo-modified) - Heavily 수정 Cuckoo fork 에 의해 개발 커뮤니티.
* [Cuckoo-modified-api](https://github.com/keithjjones/cuckoo-modified-api) - Python 라이브러리는 cuckoo-modified sandbox를 제어합니다.
* [Cutter](https://github.com/rizinorg/cutter) - 무료 및 오픈 소스 역 엔지니어링 플랫폼 rizin에 의해 구동.
* [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - 소프트웨어 역설계 Framework.
* [Hybrid-Analysis](https://www.hybrid-analysis.com/) - 무료 강력한 온라인 sandbox 로 CrowdStrike.
* [Intezer](https://analyze.intezer.com/#/) - Intezer Analyze는 Windows binaries로 다이빙을 통해 알려진 위협과 같은 마이크로 코드를 감지하기 위해 정확하지만 쉽게 결과를 제공합니다.
* [Joe Sandbox (Community)](https://www.joesandbox.com/) - Joe Sandbox는 Windows, Android, Mac OS, Linux 및 iOS에서 잠재적 악성 파일 및 URL을 탐지하고 분석합니다.
* [Mastiff](https://github.com/KoreLogicSecurity/mastiff) - 정적 분석 프레임 워크는 여러 파일 형식의 키 특성을 추출하는 과정을 자동화합니다.
* [Metadefender Cloud](https://www.metadefender.com) - 다중화, 데이터 위생 및 취약성 평가를 제공하는 무료 위협 인텔리전스 플랫폼.
* [Radare2](https://github.com/radareorg/radare2) - 역설계 프레임워크와 명령줄 도구.
* [Reverse.IT](https://www.reverse.it/) - CrowdStrike에서 제공하는 Hybrid-Analysis 도구에 대한 대안 도메인.
* [Rizin](https://github.com/rizinorg/rizin) - UNIX-like 역 엔지니어링 프레임 워크 및 명령 줄 도구
* [StringSifter](https://github.com/fireeye/stringsifter) - 악성코드 분석에 대한 그들의 relevance에 근거한 문자열을 평가하는 기계 학습 도구.
* [Threat.Zone](https://app.threat.zone) - Cloud 기반의 위협 분석 플랫폼은 Sandbox, CDR 및 연구원을 위한 대화형 분석을 포함합니다.
* [Valkyrie Comodo](https://valkyrie.comodo.com) - Valkyrie는 런타임 행동과 수백 가지 기능을 사용하여 분석 수행.
* [Viper](https://github.com/viper-framework/viper) - Python 기반 바이너리 분석 및 관리 프레임 워크, 그것은 Cuckoo와 YARA와 잘 작동.
* [Virustotal](https://www.virustotal.com) - 파일과 URL을 분석하는 무료 온라인 서비스는 바이러스, 웜, 트로잔 및 바이러스 엔진 및 웹 사이트 스캐너에 의해 감지 된 악성 콘텐츠의 다른 종류의 식별을 가능하게합니다.
* [Visualize_Logs](https://github.com/keithjjones/visualize_logs) - 로그(Cuckoo, Procmon, more to come)에 대한 오픈 소스 시각화 라이브러리 및 명령 줄 도구.
* [Yomi](https://yomi.yoroi.company) - Yoroi가 관리하고 호스팅하는 무료 MultiSandbox.

### 스캐너 도구

* [Fenrir](https://github.com/Neo23x0/Fenrir) - 간단한 IOC 스캐너. 그것은 일반 배시에서 IOCs에 대한 Linux / 유닉스 / OSX 시스템을 스캔 할 수 있습니다. THOR와 LOKI의 제작자에 의해 생성.
* [LOKI](https://github.com/Neo23x0/Loki) - yara 규칙과 다른 지시자 (IOCs)를 가진 스캐닝 endpoint를 위한 자유로운 IR 스캐너.
* [Spyre](https://github.com/spyre-project/spyre) - 간단한 YARA 기반 IOC 스캐너가 Go에서 작성되었습니다.

### Timeline 도구

* [Aurora Incident Response](https://github.com/cyb3rfox/Aurora-Incident-Response) - 플랫폼은 사건의 상세한 타임라인을 구축하기 위해 개발되었습니다.
* [Highlighter](https://www.fireeye.com/services/freeware/highlighter.html) - Fire/Mandiant에서 사용 가능한 무료 도구는 그래픽의 영역을 강조 할 수있는 로그 / 텍스트 파일을 묘사 할 것입니다. 즉, 중요한 단어 또는 구문에 해당합니다. 감염을 완화하고 어떤 포스트 타협을 수행 한 시간 동안 좋은.
* [Morgue](https://github.com/etsy/morgue) - Postmortems 관리를위한 Etsy의 PHP 웹 앱.
* [Plaso](https://github.com/log2timeline/plaso) -  도구 log2timeline에 대한 Python 기반 백엔드 엔진.
* [Timesketch](https://github.com/google/timesketch) - 협업 포렌식 타임라인 분석을위한 오픈 소스 도구.

### 이름 *

* [The Future of Incident Response](https://www.youtube.com/watch?v=bDcx4UNpKNc) - OWASP AppSecUSA 2015에서 Bruce Schneier에 의해 발표되었습니다.

### Windows 증거 수집

* [AChoir](https://github.com/OMENScan/AChoir) - Framework/scripting tool을 표준화하고 Windows의 실시간 취득 유틸리티를 간소화합니다.
* [Crowd Response](http://www.crowdstrike.com/community-tools/) - 경량 Windows 콘솔 응용 프로그램은 사건 응답 및 보안 참여에 대한 시스템 정보 수집에 도움. 그것은 수많은 단위 및 산출 체재를 특색짓습니다.
* [Cyber Triage](http://www.cybertriage.com) - Cyber Triage는 사용하기 쉬운 경량 컬렉션 도구가 있습니다. 그것은 소스 파일을 수집 (참고 hives 및 event logs와 같은), 뿐만 아니라 라이브 호스트에 그들을 구출 그래서 그것은 또한 시작 항목, 예정된, 작업, 등 참조를 실행할 수 있습니다. 출력은 Cyber Triage의 무료 버전으로 가져올 수있는 JSON 파일입니다. Cyber Triage는 또한 Autopsy를 만드는 Sleuth Kit Labs에 의해 합니다. 
* [DFIR ORC](https://dfir-orc.github.io/) - DFIR ORC는 MFT, 레지스트리 하이브 또는 이벤트 로그와 같은 중요한 artifacts를 안정적으로 파고 수집하는 전문 도구 모음입니다. DFIR ORC는 데이터를 수집하지만 분석하지 않습니다 : 그것은 삼비 기계가 아닙니다. 그것은 Microsoft Windows를 실행하는 기계의 forensically 관련 스냅 샷을 제공합니다. 코드를 찾을 수 있습니다 [GitHub](https://github.com/DFIR-ORC/dfir-orc).
* [FastIR Collector](https://github.com/SekoiaLab/Fastir_Collector) - 살아있는 Windows 체계에 다른 artifacts를 모으고 csv 파일에 결과를 기록하는 공구. 이 artifacts의 분석으로, 초기 손상을 감지 할 수 있습니다.
* [Fibratus](https://github.com/rabbitstack/fibratus) - Windows 커널의 탐험 및 추적을위한 도구.
* [Hoarder](https://github.com/muteb/Hoarder) - forensics 또는 사건 응답 조사를 위한 가장 귀중한 artifacts를 모으기.
* [IREC](https://binalyze.com/products/irec-free/) - RAM Image, $MFT, EventLogs, WMI Scripts, Registry Hives, System Restore Points 등을 캡처하는 모든 IR Evidence Collector. 그것은 무료, 번개 빠르고 사용하기 쉽습니다.
* [Invoke-LiveResponse](https://github.com/mgreen27/Invoke-LiveResponse) -  Invoke-LiveResponse는 표적 수집을 위한 살아있는 응답 공구입니다.
* [IOC Finder](https://www.fireeye.com/services/freeware/ioc-finder.html) - Mandiant의 무료 도구는 호스트 시스템 데이터를 수집하고 Compromise (IOCs)의 지표를보고합니다. Windows 전용 지원 더 이상 유지되지 않습니다. Windows 7 / Windows Server 2008 R2에서만 완벽하게 지원됩니다.
* [IRTriage](https://github.com/AJMartel/IRTriage) - Incident 응답 부족 - Windows Evidence 컬렉션 for Forensic Analysis.
* [KAPE](https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape) - Kroll Artifact Parser 및 추출기 (KAPE) 에릭 Zimmerman. 가장 진보 된 디지털 artifacts를 발견 한 삼위 도구와 그 후 신속하게 포즈. 시간이 본질의 때 크고 철저한.
* [LOKI](https://github.com/Neo23x0/Loki) - yara 규칙과 다른 지시자 (IOCs)를 가진 스캐닝 endpoint를 위한 자유로운 IR 스캐너.
* [MEERKAT](https://github.com/TonyPhipps/Meerkat) - PowerShell 기반 승리 및 Windows 용 위협 사냥.
* [Panorama](https://github.com/AlmCo/Panorama) - Windows 시스템에 대한 빠른 사건 개요.
* [PowerForensics](https://github.com/Invoke-IR/PowerForensics) - PowerShell을 사용하여 라이브 디스크 포렌식 플랫폼.
* [PSRecon](https://github.com/gfoss/PSRecon/) - PSRecon는 PowerShell (v2 또는 나중에)를 사용하여 원격 Windows 호스트에서 데이터를 수집하고 폴더에 데이터를 구성하고, 모든 추출 된 데이터, hashes PowerShell 및 다양한 시스템 특성을 가지고 있으며 보안 팀에 데이터를 보냅니다. 데이터는 공유에 푸시되거나 이메일을 보내거나 로컬로 유지될 수 있습니다.
* [RegRipper](https://github.com/keydet89/RegRipper3.0) - 오픈 소스 도구, 펄에서 작성, 추출/parsing 정보 (키, 값, 데이터) 레지스트리에서 및 분석에 대 한 제시.
