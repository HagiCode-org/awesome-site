# 恐ろしい事件対応 [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Check URLs](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml/badge.svg)](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml)

> セキュリティインシデント対応のためのツールとリソースのキュレーションリスト、セキュリティアナリストの支援 [DFIR](http://www.acronymfinder.com/Digital-Forensics%2c-Incident-Response-%28DFIR%29.html) チーム。

デジタルフォレンジックおよびインシデントレスポンス(DFIR)チームは、事故の証拠を収集し、その効果を回復し、将来の事故が再発することを防ぐための制御を実施するなど、セキュリティインシデントに対する応答を管理する責任のある組織のグループです。

## コンテンツ

- [アドバーサリーエミュレーション](#adversary-emulation)
- [オールインワンツール](#all-in-one-tools)
- [出版書籍](#books)
- [コミュニティ](#communities)
- [ディスクイメージ作成ツール](#disk-image-creation-tools)
- [証拠コレクション](#evidence-collection)
- [インシデントマネジメント](#incident-management)
- [ナレッジベース](#knowledge-bases)
- [Linuxディストリビューション](#linux-distributions)
- [Linuxの証拠コレクション](#linux-evidence-collection)
- [ログ分析ツール](#log-analysis-tools)
- [メモリ分析ツール](#memory-analysis-tools)
- [メモリイメージングツール](#memory-imaging-tools)
- [OSXの証拠コレクション](#osx-evidence-collection)
- [その他のリスト](#other-lists)
- [その他のツール](#other-tools)
- [プレイブック](#playbooks)
- [プロセスダンプツール](#process-dump-tools)
- [サンドボックス/リバースツール](#sandboxingreversing-tools)
- [スキャナツール](#scanner-tools)
- [タイムラインツール](#timeline-tools)
- [ビデオ](#videos)
- [Windowsの証拠コレクション](#windows-evidence-collection)

## IRツールコレクション

### アドバーサリーエミュレーション

* [APTSimulator](https://github.com/NextronSystems/APTSimulator) - Windows バッチスクリプトは、ツールと出力ファイルを使用して、システムが侵害されたかのように見えるようにします。
* [Atomic Red Team (ART)](https://github.com/redcanaryco/atomic-red-team) - MITRE ATT&CK Framework にマッピングされた小型で高度にポータブルな検出テスト。
* [AutoTTP](https://github.com/jymcheong/AutoTTP) - 自動戦術テクニックと手順。 回帰試験、製品評価、研究者向けデータを生成するための複雑なシーケンスを手動で再実行します。
* [Caldera](https://github.com/mitre/caldera) - Windows Enterpriseネットワーク内でのポスト・コモデーションのアドバーサリアル動作を行なう自動広告システム。 計画システムと事前構成されたアドバーサリカル戦術、テクニック、共通知識(ATT&CKTM)プロジェクトに基づいて、運用中の計画を生成します。
* [DumpsterFire](https://github.com/TryCatchHCF/DumpsterFire) - モジュラー、メニュー主導、再構築可能な時間遅れ、分散されたセキュリティイベントのためのクロスプラットフォームツール。 Blue Teamのドリルとセンサー/アラートマッピング用のカスタムイベントチェーンを簡単に作成できます。 レッドチームは、デコイド、気晴らし、そしてその操作をサポートし、スケールアップするために欲求を作成することができます。
* [Metta](https://github.com/uber-common/metta) - 情報セキュリティの準備ツールは、分散シミュレーションを行う。
* [Network Flight Simulator](https://github.com/alphasoc/flightsim) - 悪意のあるネットワークトラフィックを生成し、セキュリティチームがセキュリティ制御とネットワークの可視性を評価するために使用される軽量なユーティリティ。
* [Red Team Automation (RTA)](https://github.com/endgameinc/RTA) - RTA は、青のチームが、MITRE ATT&CK 以降モデル化された悪意のある取引技術に対する検出能力をテストできるように設計されたスクリプトのフレームワークを提供します。
* [RedHunt-OS](https://github.com/redhuntlabs/RedHunt-OS) - 逆エミュレーションと脅威狩猟のための仮想マシン。

### オールインワンツール

* [Belkasoft Evidence Center](https://belkasoft.com/ec) -  ツールキットは、ハードドライブを分析し、画像、メモリダンプ、iOS、ブラックベリー、Androidバックアップ、UFED、JTAGおよびチップオフダンプを駆動することにより、複数のソースからデジタル証拠をすぐに抽出します。
* [CimSweep](https://github.com/PowerShellMafia/CimSweep) - CIM/WMIベースのツールのスイートで、すべてのバージョンのWindows上で、インシデントレスポンスを実行し、操作をリモートでハンティングすることができます。
* [CIRTkit](https://github.com/byt3smith/CIRTKit) - CIRTKitは単なるツールの収集ではなく、インシデント対応とフォレンジック調査プロセスの継続的な統一化を支援するためのフレームワークです。
* [Cyber Triage](http://www.cybertriage.com) - サイバー・トリアージは、ホストデータを収集し分析し、侵害されるかどうかを判断します。 スコアリングシステムと推奨エンジンで、重要なアーティファクトにすばやく集中できます。 収集ツール、ディスクイメージ、その他のコレクター(KAPEなど)からデータをインポートできます。 審査官のデスクトップやサーバーモデルで実行できます。 また、Autopsyを作るSleuth Kit Labsが開発した。
* [Cynative](https://github.com/cynative/cynative) - あなたの赤外線のための深い研究の代理店 - AWS、GCP、Azure、K8s、GitHub、GitLabのサンドボックス、読み込み専用、カバー。
* [Dissect](https://github.com/fox-it/dissect) - Dissectは、Fox-IT(NCCグループ)が開発した様々なディスクやファイル形式からフォクス・IT(フォックス・IT)からフォレンジック・アーティファクトに素早くアクセスし、分析できるデジタルフォレンジック・レスポンス・フレームワークです。
* [Doorman](https://github.com/mwielgoszewski/doorman) - osquery のフリート マネージャーは、ノードによって取得された osquery 構成のリモート管理を可能にします。 osquery の TLS 構成、ロガー、および分散された読み取り/書き込みエンドポイントを活用し、管理者が最小限のオーバーヘッドと侵入を伴ったデバイスの艦隊全体で視認性を発揮します。
* [Falcon Orchestrator](https://github.com/CrowdStrike/falcon-orchestrator) - ワークフローの自動化、ケース管理、セキュリティ応答機能を提供する拡張可能なWindowsベースのアプリケーション。
* [Flare](https://github.com/fireeye/flare-vm) - マルウェア分析、インシデントレスポンス、ペネトレーションテスト用の完全にカスタマイズ可能なWindowsベースのセキュリティ配布。
* [Fleetdm](https://github.com/fleetdm/fleet) - セキュリティ専門家に適したアートホスト監視プラットフォームの状態。 Facebookの戦闘テスト済みスケリープロジェクトを活用し、Fleetdmは継続的なアップデート、機能、そして大きな質問に対する迅速な回答を提供します。
* [GRR Rapid Response](https://github.com/google/grr) - リモート・ライブ・フォレンジックを中心にしたインシデント・レスポンス・フレームワーク。 対象となるシステムにインストールされている python エージェント (client) と、エージェントに管理・相談できる python サーバインフラで構成されています。 含まれた Python API クライアント以外にも、 [PowerGRR](https://github.com/swisscom/PowerGRR) Windows、Linux および macOS で動作する PowerShell の API クライアントライブラリを GRR の自動化とスクリプトに提供します。
* [IRIS](https://github.com/dfir-iris/iris-web) - IRISは、インシデント対応アナリスト向けWebコラボレーションプラットフォームで、技術的なレベルで調査を共有できます。
* [Kuiper](https://github.com/DFIRKuiper/Kuiper) - デジタルフォレンジック調査プラットフォーム
* [Limacharlie](https://www.limacharlie.io/) - 小規模なプロジェクトのコレクションで構成されたエンドポイントセキュリティプラットフォームは、クロスプラットフォーム(Windows、OSX、Linux、Android、iOS)の低レベルな環境で、追加のモジュールをメモリに管理し、機能拡張します。
* [Matano](https://github.com/matanolabs/matano): AWS上で、オープンソースのサーバーレスセキュリティ・レイク・プラットフォームをオープンし、PetabytesのセキュリティデータをApache Icebergのデータ湖に取り込み、リアルタイムのPythonの検出をコードとして実行できます。
* [MozDef](https://github.com/mozilla/MozDef) - セキュリティインシデント処理プロセスを自動化し、インシデントハンドラーのリアルタイムアクティビティを容易にします。
* [MutableSecurity](https://github.com/MutableSecurity/mutablesecurity) - セットアップ、構成、およびサイバーセキュリティソリューションの使用を自動化するためのCLIプログラム。
* [nightHawk](https://github.com/biggiesmallsAG/nightHawkResponse) - ElasticSearch を使用して非同期フォレンジックデータプレゼンテーション用のアプリケーションをバックエンドとして構築しました。 Redlineコレクションを摂取するように設計されています。
* [Open Computer Forensics Architecture](http://sourceforge.net/projects/ocfa/) - もう一つの人気分散オープンソースコンピュータフォレンジックフレームワーク。 このフレームワークは、Linuxプラットフォーム上に構築され、データを保存するためのpostgreSQLデータベースを使用します。
* [osquery](https://osquery.io/) - SQL のようなクエリ言語を使用して、Linux および macOS インフラストラクチャに関する質問を容易にします。 *インシデントレスポンスパック* 侵害を検出し、対応するのに役立ちます。
* [Redline](https://www.fireeye.com/services/freeware/redline.html) - ユーザーがメモリとファイル分析による悪意のある活動の兆候を見つけるためのホストの調査機能を提供し、脅威評価プロファイルの開発。
* [SOC Multi-tool](https://github.com/zdhenard42/SOC-Multitool) - セキュリティ専門家の調査を合理化し、強力で使いやすいブラウザ拡張。
* [The Sleuth Kit & Autopsy](http://www.sleuthkit.org) - コンピュータのフォレンジック解析に役立つUnixとWindowsベースのツール。 デジタルフォレンジックに役立つさまざまなツールが付属しています。 これらのツールは、ディスクイメージを分析し、ファイルシステムの詳細な解析を実行し、さまざまなことを支援します。
* [TheHive](https://thehive-project.org/) - スケーラブルな3-in-1オープンソースと無料のソリューションは、SOC、CSIRT、CERT、およびセキュリティインシデントに対処するあらゆる情報セキュリティ実務者にとってより簡単に生活をできるように設計しました。
* [VanGuard](https://github.com/ridgelinecyberdefence/vanguard) - クロスプラットフォームインシデントレスポンスツールキットは、単一のゼロインストールバイナリで28ビルド済みのユースケース付きです。 自動タイムライン生成でメモリ、ディスク、ネットワーク、クラウドアーティファクトを収集します。
* [Velociraptor](https://github.com/Velocidex/velociraptor) - エンドポイントの可視化と収集ツール
* [X-Ways Forensics](http://www.x-ways.net/forensics/) - ディスククローニングとイメージングのためのフォレンジックツール。 削除されたファイルとディスクの分析を見つけるのに使用できます。
* [Zentral](https://github.com/zentralopensource/zentral) - osqueryの強力なエンドポイント在庫機能と柔軟な通知とアクションフレームワークを組み合わせます。 これにより、OS X および Linux クライアントの変更を識別し、反応させることができます。

### 出版書籍

* [Applied Incident Response](https://www.amazon.com/Applied-Incident-Response-Steve-Anson/dp/1119560268/) - インシデント・レスポンスのSteve Ansonの書籍。
* [Art of Memory Forensics](https://www.amazon.com/Art-Memory-Forensics-Detecting-Malware/dp/1118825098/) - Windows、Linux、Macメモリでマルウェアや脅威を検出します。
* [Crafting the InfoSec Playbook: Security Monitoring and Incident Response Master Plan](https://www.amazon.com/Crafting-InfoSec-Playbook-Security-Monitoring/dp/1491949406) - ジェフ・ボリンジャー、ブランドン・エンライト、マシュー・ヴァライト
* [Digital Forensics and Incident Response: Incident response techniques and procedures to respond to modern cyber threats](https://www.amazon.com/Digital-Forensics-Incident-Response-techniques/dp/183864900X) - ジェラード・ホハンセン
* [Introduction to DFIR](https://medium.com/@sroberts/introduction-to-dfir-d35d5de4c180/) - スコット・J・ロバートス
* [Incident Response & Computer Forensics, Third Edition](https://www.amazon.com/Incident-Response-Computer-Forensics-Third/dp/0071798684/) - インシデント対応の決定ガイド
* [Incident Response Techniques for Ransomware Attacks](https://www.amazon.com/Incident-Response-Techniques-Ransomware-Attacks/dp/180324044X) - ランサムウェア攻撃に対するインシデント対応戦略を構築する素晴らしいガイドです。 オリグ・スカルキン
* [Incident Response with Threat Intelligence](https://www.amazon.com/Incident-response-Threat-Intelligence-intelligence-based/dp/1801072957) - 脅威インテリジェンスに基づくインシデントレスポンスプランの構築に大きな参考をします。 ロベルト・マルティネス
* [Intelligence-Driven Incident Response](https://www.amazon.com/Intelligence-Driven-Incident-Response-Outwitting-Adversary-ebook-dp-B074ZRN5T7/dp/B074ZRN5T7) - スコット・J・ロバートス、リベカ・ブラウン
* [Operator Handbook: Red Team + OSINT + Blue Team Reference](https://www.amazon.com/Operator-Handbook-Team-OSINT-Reference/dp/B085RR67H5/) - 事件対応者への大きな参考文献
* [Practical Memory Forensics](https://www.amazon.com/Practical-Memory-Forensics-Jumpstart-effective/dp/1801070334) - メモリフォレンジックを実践するための決定的なガイド。 Svetlana OstrovskayaとOleg Skulkinによって.
* [The Practice of Network Security Monitoring: Understanding Incident Detection and Response](http://www.amazon.com/gp/product/1593275099) - リチャード・ベジリッシの本をIRに。

### コミュニティ

* [Digital Forensics Discord Server](https://discordapp.com/invite/JUqe9Ek) - 法執行機関、民間セクター、およびフォレンジックベンダーの8,000以上の作業専門家のコミュニティ。 また、学生や趣味者がたくさん! ガイド [here](https://aboutdfir.com/a-beginners-guide-to-the-digital-forensics-discord-server/).
* [Slack DFIR channel](https://dfircommunity.slack.com) - スラックDFIR コミュニティチャネル - [Signup here](https://start.paloaltonetworks.com/join-our-slack-community).

### ディスクイメージ作成ツール

* [AccessData FTK Imager](http://accessdata.com/product-download/?/support/adownloads#FTKImager) - 主な目的は、あらゆる種類のディスクから回復可能なデータをプレビューすることですフォレンジックツール。 FTKについて Imagerは32bitおよび64bitシステムでライブメモリとPagingファイルを取得することもできます。
* [Bitscout](https://github.com/vitaly-kamluk/bitscout) - VitalyのKamlukによるBitscoutは、リモートデジタルフォレンジック(またはあなたの選択の他のタスク)に使用できる、完全に信頼できるカスタマイズ可能なLiveCD / LiveUSBイメージを構築するのに役立ちます。 それはシステムの所有者によって透明で、監視可能であることを意味します、意図的に音、カスタマイズ可能および密集した。
* [GetData Forensic Imager](http://www.forensicimager.com/) - 次の一般的なフォレンジックファイル形式のいずれかでフォレンジックイメージを取得、変換、または検証するWindowsベースのプログラム。
* [Guymager](http://guymager.sourceforge.net) - Linux上でメディア取得のための無料のフォレンジックイメージャ。
* [Magnet ACQUIRE](https://www.magnetforensics.com/magnet-acquire/) - マグネットフォレンジックによるACQUIREは、Windows、Linux、OS X、モバイルオペレーティングシステムでさまざまな種類のディスク取得が可能です。

### 証拠コレクション

* [Acquire](https://github.com/fox-it/acquire) - 取得は、ディスクイメージやライブシステムから軽量コンテナまで、フォレンジックなアーティファクトをすばやく収集するツールです。 これにより、デジタルフォレンジックトライのプロセスをスピードアップし、他の人の間で優れたツールを入手できます。 使用している [Dissect](https://github.com/fox-it/dissect) 可能であれば、その情報を集める。
* [artifactcollector](https://github.com/forensicanalysis/artifactcollector) - アーティファクトコレクタプロジェクトは、システム上のフォレンジックアーティファクトを収集するソフトウェアを提供します。
* [bulk_extractor](https://github.com/simsong/bulk_extractor) - ディスクイメージ、ファイル、またはファイルのディレクトリをスキャンし、ファイルシステムやファイルシステム構造を解析せずに有用な情報を抽出するコンピュータフォレンジックツール。 ファイルシステム構造を無視する為、速度と徹底の面でプログラム自体を区別します。
* [Cold Disk Quick Response](https://github.com/rough007/CDQR) - パーサのリストを合理化して、フォレンジックイメージファイルをすばやく分析()`dd`, E01, `.vmdk`等)9つのレポートを出力し。
* [CyLR](https://github.com/orlikoski/CyLR) - CyLR ツールは、NTFS ファイルシステムとホストからフォレンジックなアーティファクトを迅速かつ安全に収集し、ホストへのインパクトを最小限に抑えます。
* [Forensic Artifacts](https://github.com/ForensicArtifacts/artifacts) - デジタルフォレンジックアーティファクトリポジトリ
* [ir-rescue](https://github.com/diogo-fernan/ir-rescue) - WindowsのバッチスクリプトとUnixバッシュスクリプトは、インシデント応答中にホストフォレンジックデータを総合的に収集します。
* [Live Response Collection](https://www.brimorlabs.com/tools/) - Windows、OSX、および\から揮発性データを収集する自動化されたツール*nixベースのオペレーティングシステム。
* [Margarita Shotgun](https://github.com/ThreatResponse/margaritashotgun) - コマンドラインユーティリティ(Amazon EC2インスタンスの有無にかかわらず動作します)は、リモートメモリ取得を並列化します。
* [SPECTR3](https://github.com/alpine-sec/SPECTR3) - ポータブルiSCSI読み取り専用アクセスによるリモート証拠の取得、試行および調査
* [UAC](https://github.com/tclahr/uac) - UAC(Unix-like Artifacts Collector)は、ネイティブバイナリとツールを使用して、AIX、Android、ESXi、FreeBSD、Linux、macOS、NetBSD、NetScaler、OpenBSD、Solarisシステムアーティファクトのコレクションを自動化するライブレスポンス・レスポンス・コレクション・スクリプトです。

### インシデントマネジメント

* [Catalyst](https://github.com/SecurityBrewery/catalyst) - アラート処理とインシデント対応プロセスの自動化に役立ちます無料のSOARシステム。
* [CyberCPR](https://www.cybercpr.com) - GDPRのコンプライアンスをサポートし、機密事件を処理するために構築された必要性から知っているコミュニティおよび商業インシデント管理ツール。
* [Cyphon](https://medevel.com/cyphon/) - Cyphonは、複数の関連タスクを単一のプラットフォームで合理化することで、インシデント管理の頭痛を排除します。 分析ワークフローのための包括的なソリューションを提供するイベントを受信、プロセス、およびトライエイジ — データの集計、冗長化、アラートの優先順位付け、アナリストによる調査および文書のインシデントの活用
* [CORTEX XSOAR](https://www.paloaltonetworks.com/cortex/xsoar) - Paloaltoのセキュリティオーケストレーション、自動化、応答プラットフォーム、フルインシデントのライフサイクル管理、多くの統合により、オートメーションを強化します。
* [DFTimewolf](https://github.com/log2timeline/dftimewolf) - フォレンジックコレクション、加工、データエクスポートのオーケストラのためのフレームワーク。
* [DFIRTrack](https://github.com/dfirtrack/dfirtrack) - 事件や多くの影響を受けたシステムやアーティファクトを持つタスクを介して、複数の事件を処理するインシデント応答トラッキングアプリケーション。
* [Fast Incident Response (FIR)](https://github.com/certsocietegenerale/FIR/) - 敏捷性とスピードを念頭に置いて設計されたサイバーセキュリティインシデント管理プラットフォーム。 サイバーセキュリティインシデントの簡単な作成、追跡、および報告を可能にし、CSIRT、CERT、SOCs にも役立ちます。
* [RTIR](https://www.bestpractical.com/rtir/) - インシデント・レスポンス(RTIR)のRequest Trackerは、コンピュータセキュリティ・チームを対象とした、オープンソース・インシデント・ハンドリング・システムです。 弊社では、世界各地の数多くのCERT/CSIRT チームと提携し、インシデントレポートの増量に対応しました。 RTIR は、Request Tracker のすべての機能に組み込まれています。
* [Sandia Cyber Omni Tracker (SCOT)](https://github.com/sandialabs/scot) - インシデント レスポンスのコラボレーションと知識のキャプチャ ツールは、柔軟性と使いやすさに焦点を当てています。 利用者に負担をかけずに、インシデント対応プロセスに付加価値を付与する。
* [Shuffle](https://github.com/frikky/Shuffle) - アクセシビリティを重視した汎用セキュリティ自動化プラットフォーム。
* [threat_note](https://github.com/defpoint/threat_note) - セキュリティ研究者が研究に関連する指標を登録し、取得することを可能にする軽量調査ノート。
* [Zenduty](https://www.zenduty.com) - Zenduty は、エンドツーエンドのインシデントアラート、オンコール管理、応答オーケストレーションを提供する新しいインシデント管理プラットフォームです。これにより、インシデント管理のライフサイクルにわたってチームをより効果的に制御および自動化できます。

### ナレッジベース

* [Digital Forensics Artifact Knowledge Base](https://github.com/ForensicArtifacts/artifacts-kb) - デジタルフォレンジックアーティファクトナレッジベース
* [Windows Events Attack Samples](https://github.com/sbousseaden/EVTX-ATTACK-SAMPLES) - Windowsイベント攻撃サンプル
* [Windows Registry Knowledge Base](https://github.com/libyal/winreg-kb) - Windowsレジストリナレッジベース

### Linuxディストリビューション

* [The Appliance for Digital Investigation and Analysis (ADIA)](https://forensics.cert.org/#ADIA) - デジタル調査や買収に用いられるVMwareベースのアプライアンスは、パブリックドメインソフトウェアから完全に構築されています。 ADIAに含まれるツールはAutopsy、Sleuth Kit、Digital Forensics Framework、log2timeline、Xplico、Wiresharkです。 ほとんどのシステムメンテナンスはWebminを利用しています。 小規模のデジタル調査や買収の小型化を図っています。 Linux、Windows、およびMac OSで動作します。 i386 (32ビット)とx86の両方_64(64-bit)バージョンをご用意しました。
* [Computer Aided Investigative Environment (CAINE)](http://www.caine-live.net/index.html) - フォレンジック証拠収集を含む、分析中に研究者を助ける多数のツールが含まれています。
* [CCF-VM](https://github.com/rough007/CCF-VM) - CyLR CDQRのフォレンジック仮想マシン(CCF-VM): 収集したデータを解析するためのオールインワンソリューションで、組み込みの共通検索で簡単に検索でき、シングルホストと複数のホストを同時に検索できます。
* [NST - Network Security Toolkit](https://sourceforge.net/projects/nst/files/latest/download?source=files) - Linux ディストリビューションは、ネットワーク セキュリティの専門家に有用な最高のオープンソース ネットワーク セキュリティ アプリケーションの膨大なコレクションが含まれています。
* [NullSec Linux](https://github.com/bad-antics/nullsec-linux) - 140以上のプリインストールされたフォレンジックおよびオフレンジセキュリティツール、カスタム強化されたカーネル、および統合インシデント応答ワークフローを備えたセキュリティ重視のLinuxディストリビューション。
* [PALADIN](https://sumuri.com/software/paladin/) - 様々なフォレンジックタスクをフォレンジックなサウンドで実行するための修正Linuxディストリビューション。 それは含まれている多くのオープンソースのフォレンジックツールが付属しています.
* [Security Onion](https://github.com/Security-Onion-Solutions/security-onion) - 高度な分析ツールを備えたネットワークセキュリティ監視を目的とした特別なLinuxディストロ。
* [SANS Investigative Forensic Toolkit (SIFT) Workstation](http://digital-forensics.sans.org/community/downloads) - 先進的なインシデント対応能力とディープダイビングのデジタルフォレンジック技術が、最先端のオープンソースツールを使用して、無料で利用可能で頻繁に更新されることを実証します。

### Linuxの証拠コレクション

* [FastIR Collector Linux](https://github.com/SekoiaLab/Fastir_Collector_Linux) - Linux 用の FastIR は、ライブ Linux で異なるアーティファクトを収集し、CSV ファイルの結果を記録します。
* [MAGNET DumpIt](https://github.com/MagnetForensics/dumpit-linux) - Rustで書かれたLinux用の高速メモリ取得オープンソースツール。 Linuxマシンのフルメモリクラッシュダンプを生成します。

### ログ分析ツール

* [AppCompatProcessor](https://github.com/mbevilacqua/appcompatprocessor) - AppCompatProcessorは、古典的なスタッキングとグリッピング技術を超えて、エンタープライズ全体のAppCompat / AmCacheデータから付加価値を抽出するように設計されています。
* [APT Hunter](https://github.com/ahmedkhlief/APT-Hunter) - APT-Hunterは、Windowsイベントログの脅威狩猟ツールです。
* [Chainsaw](https://github.com/countercept/chainsaw) - Chainsawは、Windowsイベントログ内の脅威を迅速に特定するための強力な「応急」機能を提供します。
* [Event Log Explorer](https://eventlogxp.com/) - ログファイルやその他のデータを迅速に分析するために開発されたツール。
* [Event Log Observer](https://lizard-labs.com/event_log_observer.aspx) - Microsoft Windowsイベントログに記録されたイベントをこのGUIツールで表示、解析、監視します。
* [Hayabusa](https://github.com/Yamato-Security/hayabusa) - はやぶさは、日本のヤマトセキュリティグループが作成したWindowsイベントログ高速フォレンジックタイムラインジェネレータと脅威ハンティングツールです。
* [Kaspersky CyberTrace](https://support.kaspersky.com/13850) - 脅威データフィードをSIEMソリューションと統合する脅威インテリジェンスの融合と解析ツール。 ユーザーは、既存のセキュリティ操作のワークフローでセキュリティ監視とインシデントレポート(IR)活動のために脅威インテリジェンスを即座に活用できます。
* [Log Parser Lizard](https://lizard-labs.com/log_parser_lizard.aspx) - 構造化されたログデータに対するSQLクエリを実行します。サーバーログ、Windowsイベント、ファイルシステム、Active Directory、log4netログ、comma/tabはテキスト、XMLまたはJSONファイルを分離します。 また、 GUI を Microsoft LogParser 2.2 に強力な UI 要素: 構文エディタ、データグリッド、チャート、ピボットテーブル、ダッシュボード、クエリマネージャなど。
* [Lorg](https://github.com/jensvoid/lorg) - 高度なHTTPDログファイルセキュリティ分析とフォレンジックのためのツール。
* [Logdissect](https://github.com/dogoncouch/logdissect) - ログファイルやその他のデータを分析するためのCLIユーティリティとPython API。
* [NullSec LogReaper](https://github.com/bad-antics/nullsec-logreaper) - 多フォーマット解析、パターンマッチング、タイムライン再構築、異常検知機能を備えた高速ログ解析とフォレンジックツール。
* [LogonTracer](https://github.com/JPCERTCC/LogonTracer) - Windowsイベントログを視覚化および分析することにより、悪意のあるWindowsログを調査するツール。
* [Sigma](https://github.com/SigmaHQ/sigma) - 既に広範な規則を含むSIEMシステムのための一般的なシグネチャ形式。
* [StreamAlert](https://github.com/airbnb/streamalert) - Serverless、リアルタイムログデータ解析フレームワーク、カスタムデータソースを摂取し、ユーザー定義のロジックを使用してアラートをトリガーできます。
* [SysmonSearch](https://github.com/JPCERTCC/SysmonSearch) - SysmonSearchは、イベントログの集計により、Windowsイベントログの解析が効果的で時間の節約がより少なくなります。
* [WELA](https://github.com/Yamato-Security/WELA) - Windowsイベントログアナライザーは、Windowsイベントログのスイス軍用ナイフであることを目指しています。
* [Zircolite](https://github.com/wagga40/Zircolite) - EVTXまたはJSON用のスタンドアローンおよび高速SIGMAベースの検出ツール。

### メモリ分析ツール

* [AVML](https://github.com/microsoft/avml) - Linux用のポータブル揮発性メモリ取得ツール。
* [Evolve](https://github.com/JamesHabben/evolve) - 揮発性メモリフォレンジックフレームワークのWebインターフェイス。
* [inVtero.net](https://github.com/ShaneK2/inVtero.net) - ネストされたハイパーバイザー サポートと Windows x64 用の高度なメモリ分析。
* [LiME](https://github.com/504ensicsLabs/LiME) - ロード可能なカーネルモジュール(LKM)は、以前はDMDと呼ばれるLinuxおよびLinuxベースのデバイスから揮発性メモリの獲得を可能にします。
* [MalConfScan](https://github.com/JPCERTCC/MalConfScan) - MalConfScanは、既知のマルウェアの構成データを抽出するVolatilityプラグインです。 Volatilityは、インシデントレスポンスとマルウェア分析のためのオープンソースのメモリフォレンジックフレームワークです。 このツールは、メモリイメージでマルウェアを検索し、設定データをダンプします。 また、このツールには、悪意のあるコードが参照する文字列をリストする機能があります。
* [Memoryze](https://www.fireeye.com/services/freeware/memoryze.html) - インシデント反応器がライブメモリに悪影響を及ぼすのに役立つ無料のメモリフォレンジックソフトウェア。 メモリーズは、メモリイメージの取得および/または分析、およびライブシステムでは、その解析に、メッセージングファイルを含めることができます。
* [Memoryze for Mac](https://www.fireeye.com/services/freeware/memoryze.html) - Mac用のメモリーズはメモリズですが、Mac用です。 しかし、機能の少ない数。
* [MemProcFS] (https://github.com/ufrisk/MemProcFS) - MemProcFSは、仮想ファイルシステム内のファイルとして物理メモリを表示する簡単で便利な方法です。
* [Orochi](https://github.com/LDO-CERT/orochi) - Orochiは、協調フォレンジックメモリダンプ解析のためのオープンソースフレームワークです。
* [Rekall](http://www.rekall-forensic.com/) - 揮発性メモリ(RAM)サンプルからのデジタルアーティファクトの抽出のためのオープンソースツール(およびライブラリ)。
* [Volatility](https://github.com/volatilityfoundation/volatility) - 高度なメモリフォレンジックフレームワーク。
* [Volatility 3](https://github.com/volatilityfoundation/volatility3) - 揮発性メモリ抽出フレームワーク(ボラティリティの成功者)
* [VolatilityBot](https://github.com/mkorman90/VolatilityBot) - 研究者のためのオートメーションツールは、バイナリ抽出段階からすべての推測とマニュアルタスクをカットします。, またはメモリ分析調査を実行する最初のステップで研究者を助けるために.
* [VolDiff](https://github.com/aim4r/VolDiff) - 揮発性に基づくマルウェア記憶フットプリント解析
* [WindowsSCOPE](http://www.windowsscope.com/windowsscope-cyber-forensics/) - メモリフォレンジックとリバースエンジニアリングツールは、Windowsカーネル、ドライバ、DLL、仮想および物理的なメモリを分析する機能を提供する揮発性メモリを分析するために使用される。

### メモリイメージングツール

* [Belkasoft Live RAM Capturer](http://belkasoft.com/ram-capturer) - コンピュータの揮発性メモリの全コンテンツを確実に抽出するための小さな無料のフォレンジックツール – アクティブ・アンチ・ダバッギングまたはアンチ・ダミング・システムで保護しても。
* [Linux Memory Grabber](https://github.com/halpomeranz/lmg/) - Linuxメモリをダンプし、Volatilityプロファイルを作成するスクリプト。
* [MAGNET DumpIt](https://www.magnetforensics.com/resources/magnet-dumpit-for-windows) - Windows(x86、x64、ARM64)用の高速メモリ取得ツール。 Windowsマシンの完全なメモリクラッシュダンプを生成します。
* [Magnet RAM Capture](https://www.magnetforensics.com/free-tool-magnet-ram-capture/) - 疑わしいコンピューターの物理的な記憶を捉えるように設計された無料のイメージングツール。 最近のバージョンのWindowsに対応
* [OSForensics](http://www.osforensics.com/) - 32ビットおよび64ビットシステムでライブメモリを取得するためのツール。 個々のプロセスの記憶空間または物理メモリダンプのダンプをすることができます。

### OSXの証拠コレクション

* [Knockknock](https://objective-see.com/products/knockknock.html) - OSX上で自動的に実行するように設定されている永続項目(スクリプト、コマンド、バイナリなど)を表示します。
* [macOS Artifact Parsing Tool (mac_apt)](https://github.com/ydkhatri/mac_apt) - ライブマシン、ディスクイメージ、個々のアーティファクトファイルで動作するクイックマックトリアージ用のプラグインベースのフォレンジックフレームワーク。
* [OSX Auditor](https://github.com/jipegit/OSXAuditor) - 無料のMac OS Xコンピュータフォレンジックツール。
* [OSX Collector](https://github.com/yelp/osxcollector) - OSX 監査役は、ライブ対応を中止します。
* [The ESF Playground](https://themittenmac.com/the-esf-playground/) - Appleエンドポイントセキュリティフレームワーク(ESF)でイベントをリアルタイムで表示するツール。

### その他のリスト

* [Awesome Event IDs](https://github.com/stuhli/awesome-event-ids) - デジタルフォレンジックやインシデント対応に役立つイベントIDリソースの収集
* [Awesome Forensics](https://github.com/cugu/awesome-forensics) - 素晴らしいフォレンジック分析ツールとリソースのキュレーションリスト。
* [Didier Stevens Suite](https://github.com/DidierStevens/DidierStevensSuite) - ツールコレクション
* [Eric Zimmerman Tools](https://ericzimmerman.github.io/) - SANS研究所のインストラクターであるエリック・ツィマーマンが制作したフォレンジックツールの一覧を更新しました。
* [List of various Security APIs](https://github.com/deralexxx/security-apis) - セキュリティで使用するための公開JSON APIの集合リスト。

### その他のツール

* [Cortex](https://thehive-project.org) - Cortexでは、IPアドレスやメールアドレス、URL、ドメインネーム、ファイル、ハッシュなどの保存可能を1つまたはWebインターフェイスを使用して一括モードで分析することができます。 REST API を使用して、これらの操作を自動化することもできます。
* [Crits](https://crits.github.io/) - 分析エンジンとサイバー脅威データベースを組み合わせたWebベースのツール。
* [Diffy](https://github.com/Netflix-Skunkworks/diffy) - Netflix の SIRT が開発した DFIR ツールは、インシデント中のクラウドインスタンス(AWS の Linux インスタンス、現在)で妥協を迅速にスコープ付けし、ベースラインに対する差を示すことで、フォローアップアクションのインスタンスを効率的に試すことができます。
* [domfind](https://github.com/diogo-fernan/domfind) - 異なるTLDの下で同じドメイン名を見つけるためのPython DNSクローラー。
* [Fileintel](https://github.com/keithjjones/fileintel) - ファイルハッシュごとのインテリジェンスをプルします。
* [HELK](https://github.com/Cyb3rWard0g/HELK) - 脅威狩猟プラットフォーム。
* [Hindsight](https://github.com/obsidianforensics/hindsight) - Google Chrome/Chromiumのインターネット履歴フォレンジック。
* [Hostintel](https://github.com/keithjjones/hostintel) - ホストごとのインテリジェンスを引き出します。
* [IPASIS](https://ipasis.com/) - 疑わしい相互作用を調査するためのリアルタイムIPの評判および電子メールの検証API。 VPN/proxy/Tor 検出と 1 つの API 呼び出しでメールリスク評価を組み合わせたインタラクション・トラスト・スコア (0-100) を返します。
* [imagemounter](https://github.com/ralphje/imagemounter) - コマンドラインユーティリティとPythonパッケージで、フォレンジックディスクイメージのマウントを容易にします。
* [Kansa](https://github.com/davehull/Kansa/) - PowerShellのモジュラーインシデントレスポンスフレームワーク。
* [MFT Browser](https://github.com/kacos2000/MFT_Browser) - MFTディレクトリツリーの復元と記録情報。
* [Munin](https://github.com/Neo23x0/munin) - VirusTotalなどのサービスのオンラインハッシュチェッカー。
* [PowerSponse](https://github.com/swisscom/PowerSponse) - PowerSponse は、セキュリティインシデント応答中にターゲットを絞った封入と修復に焦点を当てた PowerShell モジュールです。
* [PyaraScanner](https://github.com/nogoodconfig/pyarascanner) - マルウェアのズームとIRのためのYARAスキャンPythonスクリプトの多くのファイルに非常に簡単なマルチスレッドの多くのルール.
* [rastrea2r](https://github.com/rastrea2r/rastrea2r) - Windows、Linux、OS X で YARA を使用して IOC 用のディスクとメモリをスキャンできます。
* [RaQet](https://raqet.github.io/) - 意図せずにリモート・コンピュータ(クライアント)のディスクを、意図的に構築されたフォレンジック・オペレーティング・システムで再起動できるリモート・コンピュータ(クライアント)のディスクを試すことができます。
* [Raccine](https://github.com/Neo23x0/Raccine) - シンプルなランサムウェア保護
* [Stalk](https://www.percona.com/doc/percona-toolkit/2.2/pt-stalk.html) - 問題が発生したときにMySQLに関するフォレンジックデータを収集します。
* [Scout2](https://nccgroup.github.io/Scout2/) - Amazon Webサービス管理者が環境のセキュリティ姿勢を評価するためのセキュリティツール。
* [Stenographer](https://github.com/google/stenographer) - パケットキャプチャソリューションは、すべてのパケットをディスクにすばやくスプールし、これらのパケットのサブセットにシンプルで高速なアクセスを提供します。 ディスクの使用量を管理し、ディスクの制限が当たると削除できる限りの歴史を保存します。 必要な明示的な必要性なしで、インシデントの前後にトラフィックをキャプチャするのに理想的ですネットワークトラフィックのすべてを格納する必要があります。
* [sqhunter](https://github.com/0x4d31/sqhunter) - osqueryとSalt Open(SaltStack)に基づいて脅威ハンターは、squeryのtlsプラグインを必要としないアドホックや分散クエリを発行することができます。 sqhunterを使用すると、ネットワークソケットを開き、脅威インテリジェンスソースからそれらをチェックすることができます。
* [sysmon-config](https://github.com/SwiftOnSecurity/sysmon-config) - Sysmon 設定ファイル デフォルトで高品質なイベントのトレース
* [sysmon-modular](https://github.com/olafhartong/sysmon-modular) - sysmon 設定モジュールのリポジトリ
* [traceroute-circl](https://github.com/CIRCL/traceroute-circl) - CSIRT(またはCERT)オペレーターの活動をサポートする拡張トレースルート。 通常、CSIRT チームは IP アドレスに基づくインシデントを処理する必要があります。 コンピューター緊急対応センター ルクセンブルク が作成しました。
* [X-Ray 2.0](https://www.raymond.cc/blog/xray/) - ウイルスサンプルをAVベンダーに送信するために、Windowsユーティリティ(ほとんど維持されていない)。

### プレイブック

* [AWS Incident Response Runbook Samples](https://github.com/aws-samples/aws-incident-response-runbooks/tree/0d9a1c0f7ad68fb2c1b2d86be8914f2069492e21) - AWS IR Runbook サンプルは、それぞれのエンティティティごとにカスタマイズすることを目的としています。 「DoS または DDoS 攻撃」「認証漏れ」「Amazon S3 バケットへの未知のアクセス」の3つのサンプルです。
* [Counteractive Playbooks](https://github.com/counteractive/incident-response-plan-template/tree/master/playbooks) - 対向的なPLaybooksコレクション。
* [GuardSIght Playbook Battle Cards](https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards) - サイバーインシデント対応 Playbook バトルカードのコレクション
* [IRM](https://github.com/certsocietegenerale/IRM) - CERT Societe Generaleによるインシデント対応方法論。
* [PagerDuty Incident Response Documentation](https://response.pagerduty.com/) - PagerDuty インシデント レスポンス プロセスの部分を記述するドキュメント。 インシデントの準備だけでなく、中や後に行うための情報を提供します。 ソースは利用できます [GitHub](https://github.com/PagerDuty/incident-response-docs).
* [Phantom Community Playbooks](https://github.com/phantomcyber/playbooks) - パンクのためのファントムコミュニティ Playbook だけでなく、他の使用のためにカスタマイズ可能です。
* [ThreatHunter-Playbook](https://github.com/OTRF/ThreatHunter-Playbook) - 狩猟キャンペーンのための技術と仮説の開発を支援するための Playbook.

### プロセスダンプツール

* [Microsoft ProcDump](https://docs.microsoft.com/en-us/sysinternals/downloads/procdump) - 実行中のWin32プロセスのメモリイメージを飛ばします。
* [PMDump](http://www.ntsecurity.nu/toolbox/pmdump/) - プロセスのメモリコンテンツをプロセスを停止することなくファイルへダンプできるツールです。

### サンドボックス/リバースツール

* [Any Run](https://app.any.run/) - 任意の環境を使用してほとんどのタイプの脅威の動的および静的研究のためのインタラクティブなオンラインマルウェア分析サービス。
* [CAPA](https://github.com/mandiant/capa) - 実行ファイル内の機能を検出します。 PE、ELF、.NET モジュール、またはシェルコードファイルに対して実行し、プログラムができることを考えることを伝えます。
* [CAPEv2](https://github.com/kevoreilly/CAPEv2) - マルウェアの構成およびペイロード抽出。
* [Cuckoo](https://github.com/cuckoosandbox/cuckoo) - オープンソース 高度に構成可能なサンドボックスツール。
* [Cuckoo-modified](https://github.com/spender-sandbox/cuckoo-modified) - コミュニティが開発したCuckooフォークをHeavily修正。
* [Cuckoo-modified-api](https://github.com/keithjjones/cuckoo-modified-api) - cuckoo-modified sandbox を制御する Python ライブラリ。
* [Cutter](https://github.com/rizinorg/cutter) - rizinによって動力を与えられる自由で、開いた源の逆の技術のプラットホーム。
* [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - ソフトウェアリバースエンジニアリングフレームワーク。
* [Hybrid-Analysis](https://www.hybrid-analysis.com/) - クラウドストライクによる強力なオンラインサンドボックス。
* [Intezer](https://analyze.intezer.com/#/) - Intezer Analyzeは、既知の脅威にマイクロコードの類似性を検出するために、Windowsのバイナリに飛び込みます。
* [Joe Sandbox (Community)](https://www.joesandbox.com/) - ジョー・サンドボックスは、Windows、Android、Mac OS、Linux、iOS上の潜在的な悪意のあるファイルやURLを検知し、疑わしい活動のために分析します。 包括的な詳細な分析レポートを提供します。
* [Mastiff](https://github.com/KoreLogicSecurity/mastiff) - 異なるファイル形式の数からキー特性を抽出するプロセスを自動化する静的解析フレームワーク。
* [Metadefender Cloud](https://www.metadefender.com) - 複数のスキャン、データ・サニタイズ、ファイル脆弱性評価を提供する無料の脅威インテリジェンスプラットフォーム。
* [Radare2](https://github.com/radareorg/radare2) - リバースエンジニアリングフレームワークとコマンドラインツールセット。
* [Reverse.IT](https://www.reverse.it/) - クラウドストライクが提供するハイブリッド分析ツールの代替ドメイン。
* [Rizin](https://github.com/rizinorg/rizin) - UNIX のようなリバースエンジニアリングフレームワークとコマンドラインツールセット
* [StringSifter](https://github.com/fireeye/stringsifter) - マルウェア分析の関連性に基づいて文字列をランク付けする機械学習ツール。
* [Threat.Zone](https://app.threat.zone) - 研究者のためのサンドボックス、CDR、インタラクティブな分析を含むクラウドベースの脅威分析プラットフォーム。
* [Valkyrie Comodo](https://valkyrie.comodo.com) - Valkyrie は、ファイルから実行時の挙動と数百の機能を使用して解析を実行します。
* [Viper](https://github.com/viper-framework/viper) - Pythonベースのバイナリ解析と管理フレームワークは、CuckooとYARAでうまく機能します。
* [Virustotal](https://www.virustotal.com) - ウイルス、ワーム、トロイの木馬および他の種類の悪意のあるコンテンツの識別を可能にするファイルとURLを分析する無料のオンラインサービス アンチウィルス エンジンやウェブサイトのスキャナによって検出されました。
* [Visualize_Logs](https://github.com/keithjjones/visualize_logs) - オープンソースのビジュアライゼーションライブラリとコマンドラインツール(Cuckoo、Procmonなど)。
* [Yomi](https://yomi.yoroi.company) - Yoroiによって管理され、ホストされる自由なMultiSandbox。

### スキャナツール

* [Fenrir](https://github.com/Neo23x0/Fenrir) - 簡単なIOCの走査器。 これは、任意のLinux / Unix / OSXシステムをスキャンすることができます。 IOCs プレーンバッシュで. THORとLOKIのクリエイターが制作しました。
* [LOKI](https://github.com/Neo23x0/Loki) - yaraルールやその他のインジケータ(IOC)でエンドポイントをスキャンするための無料のIRスキャナー。
* [Spyre](https://github.com/spyre-project/spyre) - 簡単なYARAベースのIOCスキャナがGoに書かれています

### タイムラインツール

* [Aurora Incident Response](https://github.com/cyb3rfox/Aurora-Incident-Response) - インシデントのタイムラインを簡単に構築するために開発されたプラットフォーム。
* [Highlighter](https://www.fireeye.com/services/freeware/highlighter.html) - グラフィック上の領域を強調できるログ/テキストファイルを表示するFire/Mandiantから利用可能な無料のツール, キーワードやフレーズに対応する. 感染とポストの妥協を終わらせる時間のためによい。
* [Morgue](https://github.com/etsy/morgue) - Etsy による PHP Web アプリで postmortems を管理できます。
* [Plaso](https://github.com/log2timeline/plaso) -  ツール log2timeline 用の Python ベースのバックエンドエンジン。
* [Timesketch](https://github.com/google/timesketch) - 協調フォレンジックタイムライン解析のためのオープンソースツール。

### ビデオ

* [The Future of Incident Response](https://www.youtube.com/watch?v=bDcx4UNpKNc) - OWASP AppSecUSA 2015 でブルース・シュナイアーが発表しました。

### Windowsの証拠コレクション

* [AChoir](https://github.com/OMENScan/AChoir) - Windows用のライブ取得ユーティリティをスクリプト化および簡素化するためのフレームワーク/スクリプトツール。
* [Crowd Response](http://www.crowdstrike.com/community-tools/) - 軽量なWindowsコンソールアプリケーションは、インシデントレスポンスとセキュリティエンゲージメントのためのシステム情報の収集を支援するために設計されています。 多数のモジュールおよび出力フォーマットを備えています。
* [Cyber Triage](http://www.cybertriage.com) - Cyber Triageには、軽量なコレクションツールが搭載されています。 ソースファイル(レジストリハイブやイベントログなど)を収集しますが、ライブホスト上でそれらを解析して、起動項目、スケジュール、タスクなどの実行可能を収集することもできます。 出力は、Cyber Triageの無料版にインポートできるJSONファイルです。 サイバートリエイジは、Autopsy を作るスルースキットラボによって作られています。 
* [DFIR ORC](https://dfir-orc.github.io/) - DFIR ORCは、MFT、レジストリハイブ、イベントログなどの重要なアーティファクトを確実に解析し、収集する専用ツールのコレクションです。 DFIR ORC はデータを収集しますが、それを分析しません: マシンをトリガーするものではありません。 Microsoft Windows を実行しているマシンの意図的に関連したスナップショットを提供します。 コードが見つかります [GitHub](https://github.com/DFIR-ORC/dfir-orc).
* [FastIR Collector](https://github.com/SekoiaLab/Fastir_Collector) - ライブWindowsシステム上の異なるアーティファクトを収集し、csvファイルで結果を記録するツール。 これらのアーティファクトの分析により、初期の妥協が検出できます。
* [Fibratus](https://github.com/rabbitstack/fibratus) - Windowsカーネルの探索とトレースのためのツール。
* [Hoarder](https://github.com/muteb/Hoarder) - フォレンジックやインシデント対応調査に最も価値のあるアーティファクトを収集します。
* [IREC](https://binalyze.com/products/irec-free/) - オールインワンIR証拠コレクターは、RAMイメージ、$MFT、イベントログ、WMIスクリプト、レジストリハイブ、システム復元ポイントなどをキャプチャします。 それは自由、落雷速く、使いやすいです。
* [Invoke-LiveResponse](https://github.com/mgreen27/Invoke-LiveResponse) -  Invoke-LiveResponseは、ターゲットのコレクションのためのライブ応答ツールです。
* [IOC Finder](https://www.fireeye.com/services/freeware/ioc-finder.html) - ホストシステムデータを収集し、Compromise(IOC)のインジケータの存在を報告するためのMandiantの無料のツール。 Windowsのみ対応 メンテナンス不要 Windows 7/Windowsサーバー2008 R2まで十分に支えられるだけ。
* [IRTriage](https://github.com/AJMartel/IRTriage) - インシデント・レスポンス・トライエイジ - フォレンジック分析のためのWindowsの証拠コレクション。
* [KAPE](https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape) - Eric ZimmermanによるKrollアーティファクトパーサーと抽出器(KAPE)。 最も有価なデジタルアーティファクトを見つけ、すぐにそれらを解析するトリアージツール。 時が本質であるとき、大きくて徹底的に。
* [LOKI](https://github.com/Neo23x0/Loki) - yaraルールやその他のインジケータ(IOC)でエンドポイントをスキャンするための無料のIRスキャナー。
* [MEERKAT](https://github.com/TonyPhipps/Meerkat) - PowerShell ベースのトリアージと Windows 用の脅威狩猟。
* [Panorama](https://github.com/AlmCo/Panorama) - ライブWindowsシステムに関する迅速なインシデントの概要。
* [PowerForensics](https://github.com/Invoke-IR/PowerForensics) - PowerShellを使用したライブディスクフォレンジックプラットフォーム。
* [PSRecon](https://github.com/gfoss/PSRecon/) - PSReconは、PowerShell(v2以降)を使用してリモートWindowsホストからデータを収集し、データをフォルダに整理し、すべての抽出されたデータ、ハッシュパワーシェル、各種システムプロパティをハッシュし、セキュリティチームにデータをオフ送信します。 データは、メール送信、またはローカルに保存された共有にプッシュできます。
* [RegRipper](https://github.com/keydet89/RegRipper3.0) - レジストリから情報(キー、値、データ)を抽出し、分析のために提示するためにPerlで書かれているオープンソースツール。
