# awesome-threat-intelligence
脅威インテリジェンス関連の優れたリソースを厳選した一覧

脅威インテリジェンスの簡潔な定義：*背景、仕組み、指標、影響、および実行可能な助言を含む、証拠に基づいた知識。資産に対する既存または新たに発生しつつある脅威や危険に関するものであり、その脅威や危険への対応を判断するために利用できるもの*。

[貢献](CONTRIBUTING.md)を歓迎します。

- [情報源](#sources)
- [形式](#formats)
- [フレームワークとプラットフォーム](#frameworks-and-platforms)
- [ツール](#tools)
- [研究、標準、書籍](#research)


## 情報源

以下のリソースの多くは、脅威に関する最新（であることが望ましい）の情報を得るための一覧や API を提供しています。
これらの情報源を脅威インテリジェンスとみなすかどうかについては、意見が分かれます。
真の脅威インテリジェンスを作成するには、分野や業務に応じた分析がある程度必要です。

<table>
    <tr>
        <td>
            <a href="https://www.abuseipdb.com/" target="_blank">AbuseIPDB</a>
        </td>
        <td>
            AbuseIPDB インターネット上でハッカーやスパマー、行動活動の普及に対抗するプロジェクトです。 これは、Webマスター、システム管理者、およびその他の関心のある当事者が悪意のある活動に関連付けられているIPアドレスを報告し、見つけるために中央のブラックリストを提供することによって、Webセーバーを作るのを助けることです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://docs.google.com/spreadsheets/u/1/d/1H9_xaxQHpWaa4O_Son4Gx0YOIzlcBWMsdvePFX68EKU/pubhtml" target="_blank">APT Groups and Operations</a>
        </td>
        <td>
            APTグループ、操作、戦術に関する情報とインテリジェンスを含むスプレッドシート。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.binarydefense.com/banlist.txt" target="_blank">Binary Defense IP Banlist</a>
        </td>
        <td>
            バイナリ防衛システム動脈硬化インテリジェンスフィードとIPバナーフィード。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.circl.lu/projects/bgpranking/" target="_blank">BGP Ranking</a>
        </td>
        <td>
            最も悪意のあるコンテンツを持つASNのランキング。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intel.malwaretech.com/" target="_blank">Botnet Tracker</a>
        </td>
        <td>
            複数のアクティブボットネットを追跡します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.botvrij.eu/">BOTVRIJ.EU</a>
        </td>
        <td>
            Botvrij.eu さまざまな種類のオープンソース IOC を提供して、セキュリティデバイスで悪意のあるアクティビティを検出することができます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://danger.rulez.sk/index.php/bruteforceblocker/download/" target="_blank">BruteForceBlocker</a>
        </td>
        <td>
            BruteForceBlocker サーバの sshd ログを監視し、 brute フォース攻撃を識別する perl スクリプトです。これにより、ファイアウォールブロックルールを自動的に構成し、プロジェクトサイトにそれらの IP を投稿するために使用します。 <a href="http://danger.rulez.sk/projects/bruteforceblocker/blist.php">http://danger.rulez.sk/projects/bruteforceblocker/blist.php</a>お問い合わせ
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://osint.bambenekconsulting.com/feeds/c2-ipmasterlist.txt" target="_blank">C&amp;C Tracker</a>
        </td>
        <td>
            既知の、能動態および非沈着Cの供給&amp;Bambenek ConsultingのC IPアドレス。 商用利用のライセンスが必要です。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://certstream.calidog.io/" target="_blank">CertStream</a>
        </td>
        <td>
            リアルタイム証明書の透明性ログ更新ストリーム。 リアルタイムで発行された SSL 証明書を参照してください。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.ccssforum.org/malware-certificates.php" target="_blank">CCSS Forum Malware Certificates</a>
        </td>
        <td>
            以下は、マルウェアをさまざまな証明書当局に関連付ける可能性があるため、フォーラムによって報告されているデジタル証明書のリストです。 この情報は、企業がデジタル証明書を使用してマルウェアに合法性を追加し、そのような証明書の迅速な取消を促すのを助けるためのものです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://cinsscore.com/list/ci-badguys.txt" target="_blank">CI Army List</a>
        </td>
        <td>
        商用のサブセット <a href="http://cinsscore.com/">CINS Score</a> リスト, 他の脅威リストに現在存在していない低評価のIPに焦点を当て.
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://s3-us-west-1.amazonaws.com/umbrella-static/index.html" target="_blank">Cisco Umbrella</a>
        </td>
        <td>
            Cisco Umbrella(OpenDNS)によって解決される最上位1,000,000のサイトの確率的ホワイトリスト。
	</td>
    </tr>
    <tr>
        <td>
            <a href="https://cloudmersive.com/virus-api" target="_blank">Cloudmersive Virus Scan</a>
        </td>
        <td>
            クラウドマーシブウイルススキャンAPIは、ウイルスのファイル、URL、クラウドストレージをスキャンします。 数百万もの脅威に対して継続的に更新されたシグネチャを活用し、高度な高性能スキャン機能を実現します。 サービスは無料ですが、個人APIキーを取得するにはアカウントを登録する必要があります。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.crowdsec.net/" target="_blank">CrowdSec Console</a>
        </td>
        <td>
            最大のクラウドソースCTIは、リアルタイムで更新され、おかげで CrowdSec 次世代、オープンソース、フリー、コラボレーションIDS/IPSソフトウェア。 <a href="https://crowdsec.net" target="_blank">CrowdSec</a>  訪問者の行動を分析し、あらゆる種類の攻撃に適応した応答を提供することができます。 ユーザーは、コミュニティと脅威に関するアラートを共有し、ネットワーク効果の恩恵を受けることができます。 IPアドレスは、実際の攻撃から収集され、ハニポットネットワークからのみ来ていない。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cybercure.ai/" target="_blank">Cyber Cure free intelligence feeds</a>
        </td>
        <td>
            Cyber Cureは、インターネット上で感染し、攻撃しているIPアドレスのリストで無料のサイバー脅威インテリジェンスフィードを提供しています。 現在広がる既知のマルウェアのマルウェアやハッシュファイルのリストで使用されるURLのリストがあります。 CyberCureは、センサーを使用して、非常に低い偽陽率でインテリジェンスを収集しています。 詳細情報 <a href="https://docs.cybercure.ai" target="_blank">documentation</a> お問い合わせ
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/community/ctix-feeds" target="_blank">Cyware Threat Intelligence Feeds</a>
        </td>
        <td>
            CywareのThreat Intelligenceフィードは、さまざまなオープンソースから貴重な脅威データを提供し、価値のある脅威インテリジェンスの統合ストリームを実現します。 当社の脅威インテルフィードは、STIX 1.xと2.0と完全に互換性があり、悪意のあるマルウェアハッシュ、IP、ドメインに関する最新情報をリアルタイムで配信します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://dataplane.org/" target="_blank">DataPlane.org</a>
        </td>
        <td>
          DataPlane.org オペレータが、コミュニティ主導のインターネットデータ、フィード、および測定リソースです。 信頼でき、信頼されるサービスをコストなしで提供します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://focsec.com" target="_blank">Focsec.com</a>
        </td>
        <td>
          Focsec.com VPN、プロキシ、ボット、TORリクエストを検出するための API を提供します。 常に最新のデータは、疑わしいログイン、不正行為、不正行為を検知するのに役立ちます。 コード例は、 <a href="https://docs.focsec.com" target="_blank">documentation</a>お問い合わせ
        </td>
   </tr>	
   <tr>
        <td>
            <a href="https://osint.digitalside.it/" target="_blank">DigitalSide Threat-Intel</a>
        </td>
        <td>
          オープンソースのサイバー脅威インテリジェンスインジケーターのセットが含まれています。, 主にマルウェア分析と侵害されたURLに基づいて、, IPやドメイン. 本プロジェクトの目的は、SOC/CSIRT/CERT/individuals で利用する関連する IoC をハント、分析、収集、共有するための新しい方法を開発し、テストすることです。 レポートは3つの方法で共有されます。 <a href="https://osint.digitalside.it/Threat-Intel/stix2/" target="_blank">STIX2</a>, <a href="https://osint.digitalside.it/Threat-Intel/csv/" target="_blank">CSV</a> そして、 <a href="https://osint.digitalside.it/Threat-Intel/digitalside-misp-feed/" target="_blank">MISP Feed</a>. レポートも公開 <a href="https://github.com/davidonzo/Threat-Intel/" target="_blank">project's Git repository</a>お問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/martenson/disposable-email-domains">Disposable Email Domains</a>
        </td>
        <td>
            スパム/虐待サービスに一般的に使用される匿名または使い捨てのメールドメインの収集。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://securitytrails.com/dns-trails">DNS Trails</a>
        </td>
        <td>
            現在および過去のDNS情報、WHOIS情報、特定のIP、サブドメインの知識と技術に関連する他のウェブサイトを見つけるための無料のインテリジェンスソース。 そこにあります <a href="https://securitytrails.com/">IP and domain intelligence API available</a> お問い合わせ 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feed.ellio.tech" target="_blank">ELLIO: IP Feed (community free version)</a>
        </td>
        <td>
            既知の悪意のあるIPアドレスの脅威リストは、近い将来、既知の良性スキャナ、未知の意図を持つ俳優のIPアドレスでネットワークに潜在的な脅威をポーズすることを期待しています。 個人的な、非商用使用のための24時間遅れが提供されますが、他のオープンIPの脅威リスト/フィードと比較して、例外的な保護を提供します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/fwrules/" target="_blank">Emerging Threats Firewall Rules</a>
        </td>
        <td>
            iptables、PF、PIXなどのいくつかの種類のファイアウォールのルールのコレクション。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://rules.emergingthreats.net/blockrules/" target="_blank">Emerging Threats IDS Rules</a>
        </td>
        <td>
            SnortとSuricataのコレクション <i>ルール</i> 警告やブロックに使用できるファイル。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exonerator.torproject.org/" target="_blank">ExoneraTor</a>
        </td>
        <td>
            ザ・オブ・ザ・ ExoneraTor サービスは、Torネットワークの一部となっているIPアドレスのデータベースを維持します。 特定の日付で特定のIPアドレスで実行されているTorリレーがあったかどうか疑問に答えます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.exploitalert.com/" target="_blank">Exploitalert</a>
        </td>
        <td>
            リリースされた最新の悪用のリスト。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://intercept.sh/threatlists/" target="_blank">FastIntercept</a>
        </td>
        <td>
	    インターセプトセキュリティは、グローバルハニポットネットワークから多数の無料のIP評判リストをホストしています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://feodotracker.abuse.ch/" target="_blank">ZeuS Tracker</a>
        </td>
        <td>
            Feodoトラッカー <a href="https://abuse.ch/" target="_blank">abuse.ch</a> Feodoトロイの木馬を追跡します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://iplists.firehol.org/" target="_blank">FireHOL IP Lists</a>
        </td>
        <td>
            400円+ 一般に利用可能なIPフィードは、その進化、ジオマップ、IPの年齢、保持ポリシー、重複を文書化するために分析しました。 当サイトは、サイバー犯罪(攻撃、虐待、マルウェア)に焦点を当てています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://fraudguard.io/" target="_blank">FraudGuard</a>
        </td>
        <td>
            FraudGuard リアルタイムのインターネットトラフィックを継続的に収集し、分析することにより、利用状況を検証するための簡単な方法を提供するサービスです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://greynoise.io/" target="_blank">GreyNoise</a>
        </td>
        <td>
            GreyNoise インターネット全体のスキャン活動に関するデータを収集および分析します。 これは、SSHやtelnetワームなどの悪意のある俳優、SSHやtelnetワームなどの良性スキャナーでデータを収集します。 
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://griffinguard.io/" target="_blank">GriffinGuard</a>
        </td>
        <td>
            GriffinGuard グローバルなインターネットトラフィックと悪用パターンを継続的に分析することにより、リアルタイムの脅威インテリジェンスを提供するサイバーセキュリティプラットフォームです。 無料のデータ検索と無料のデータ検索を提供しています。 IP blocklistお問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://honeydb.io/" target="_blank">HoneyDB</a>
        </td> 
        <td>
            HoneyDB ハニポットアクティビティのリアルタイムデータを提供します。 このデータはインターネット上で展開されるハニポットから来ています。 <a href="https://github.com/foospidy/HoneyPy" target="_blank">HoneyPy</a> ハニポット。 その他、 HoneyDB 収集されたハニポットアクティビティへのAPIアクセスを提供し、さまざまなハニポットTwitterフィードから集計されたデータも含まれています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SupportIntelligence/Icewater" target="_blank">Icewater</a>
        </td>
        <td>
            12,805 プロジェクト氷水によって作成された無料のヤラルール。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://infosec.cert-pa.it" target="_blank">Infosec - CERT-PA</a>
        </td>
        <td>
            マルウェアサンプル <a href="https://infosec.cert-pa.it/analyze/submission.html" target="_blank">collection and analysis</a>, <a href="https://infosec.cert-pa.it/analyze/statistics.html" target="_blank">blocklist service, <a href="https://infosec.cert-pa.it/cve.html">vulnerabilities database</a> お問い合わせ CERT-PAによって作成および管理される。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://labs.inquest.net" target="_blank">InQuest Labs</a>
        </td>
        <td>
            セキュリティ研究者向けオープン、インタラクティブ、API 駆動型データポータル 公開ソースから抽出したファイルサンプル、集計評判情報、IOCの大きなコルパスを検索します。 トリガーを生成し、混合ケースの六角を扱い、ベース64互換正規表現を生成するためのツーリングによる拡張YARA開発。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.iblocklist.com/lists" target="_blank">I-Blocklist</a>
        </td>
        <td>
            I-Blocklist さまざまなカテゴリに属するIPアドレスを含むいくつかの種類のリストを保持します。 これらの主なカテゴリには、国、ISP、組織が含まれます。 他のリストには、Web攻撃、TOR、スパイウェア、プロキシが含まれます。 様々なフォーマットでご利用いただけます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ipasis.com" target="_blank">IPASIS</a>
        </td>
        <td>
            IPASIS リアルタイムのボット検出と不正防止APIで、IPインテリジェンス、プロキシ/VPN/Tor検出、メール検証を1つのAPI呼び出しに統合します。 それぞれがインタラクション・トラスト・スコア(0-)を返す100) sub-20msの応答時間を使って。 無料ティアには1,000リクエスト/日が含まれます。 <a href="https://ipasis.com/docs" target="_blank">API documentation</a> そして、 <a href="https://ipasis.com/scan" target="_blank">live scanner</a> 可能です。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/stamparm/ipsum/master/ipsum.txt" target="_blank">IPsum</a>
        </td>
        <td>
            IPsum 30に基づいて脅威インテリジェンスフィードです+ 疑わしいIPアドレスおよび/または悪意のあるIPアドレスの異なる公開リスト。 すべてのリストは自動的に取得され、毎日(24時間)に基づいて解析され、最終的な結果はこのリポジトリにプッシュされます。 リストは、IPアドレスと合計数(黒)リストの発生(それぞれ)で作成されます。 作成と管理 <a href="https://twitter.com/stamparm">Miroslav Stampar</a>お問い合わせ
        </td>
    </tr>
    <tr>
	<td>
            <a href="https://jamesbrine.com.au" target="_blank">James Brine Threat Intelligence Feeds</a>
        </td>
        <td>
		JamesBrineは、SSH、FTP、RDP、GIT、SNMP、REDISを含むさまざまなプロトコルをカバーするクラウドおよびプライベートインフラストラクチャ上の国際的に位置するハニポットから悪意のあるIPアドレスのための毎日の脅威インテリジェンスフィードを提供します。 前日のIOCが利用可能 STIX2 また、疑わしいURIやフィッシングキャンペーンで使用する高い確率を持つ新規登録ドメインなどのIOCも追加。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/datafeeds" target="_blank">Kaspersky Threat Data Feeds</a>
        </td>
        <td>
サイバー脅威に関連するリスクや影響について、ビジネスやクライアントを継続的に更新し、通知します。 リアルタイムのデータは、脅威をより効果的に軽減し、攻撃から防御するのに役立ちます。 デモデータフィードには、市販のものと比較して、IoC(最大1%)のトランクセットが含まれています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://majestic.com/reports/majestic-million" target="_blank">Majestic Million</a>
        </td>
        <td>
            Majesticによってランクされているトップ1百万のWebサイトの確率的ホワイトリスト。 参照サブネットの数でサイトを注文します。 ランキングについての詳細は、自分の上に見つけることができます <a href="https://blog.majestic.com/development/majestic-million-csv-daily/" target="_blank">blog</a>お問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maldatabase.com/" target="_blank">Maldatabase</a>
        </td>
        <td>
            Maldatabaseは、マルウェアのデータサイエンスと脅威インテリジェンスのフィードを支援するように設計されています。 提供データには、他のフィールド、連絡先ドメイン、実行されたプロセスのリスト、各サンプルによってファイルを落とす情報が含まれています。 これらのフィードを使用すると、監視およびセキュリティツールを改善できます。 セキュリティ研究者や学生向けに無料サービスをご利用いただけます。 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malpedia.caad.fkie.fraunhofer.de/" target="_blank">Malpedia</a>
        </td>
        <td>
Malpediaの主な目標は、マルウェアを調査する際に、迅速な識別と実用的なコンテキストのためのリソースを提供することです。 キュレーションされたコントリビューションのオープン性は、有意義で再現性のある研究を育成するために、品質を考慮に入れたレベルを確保します。 
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://www.malshare.com/" target="_blank">MalShare.com</a>
        </td>
        <td>
            MalShareプロジェクトは、研究者がサンプルに無料でアクセスできる公開マルウェアリポジトリです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.maltiverse.com/" target="_blank">Maltiverse</a>
        </td>
        <td>
            Maltiverse Projectは、複雑な質問やマルウェアキャンペーンやインフラに関する調査が可能な、IoCデータベースを大きく充実させています。 それはまた大きいIoCのバルク問い合わせサービスがあります。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bazaar.abuse.ch/" target="_blank">MalwareBazaar</a>
        </td>
        <td>
            MalwareBazaar プロジェクト abuse.ch マルウェアサンプルをインフォセックコミュニティ、AVベンダー、脅威インテリジェンスプロバイダーと共有することを目的としています。
        </td>
    </tr>	
    <tr>
        <td>
            <a href="https://www.malwaredomainlist.com/" target="_blank">Malware Domain List</a>
        </td>
        <td>
            悪意のあるドメインの検索可能なリストもリバースを実行します lookups とリスト registrants, フィッシングに焦点を当て, トロイの木馬, キットを悪用.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.malwarepatrol.net/" target="_blank">Malware Patrol</a>
        </td>
        <td>
            Malware Patrolは、すべてのサイズの企業にブロックリスト、データフィード、脅威インテリジェンスを提供します。 私たちの専門性は、サイバー脅威インテリジェンスであるため、すべてのリソースが可能な限り最高の品質であることを確認するために行きます。 私たちは、セキュリティチームを信じ、それはツールが使用されるデータと同じくらい良いです。 これは、フィードがスクレイピングされ、統一されたインジケータで満たされていないことを意味します。 私達は量に質を評価します。 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://malware-traffic-analysis.net/" target="_blank">Malware-Traffic-Analysis.net</a>
        </td>
        <td>
            このブログでは、マルウェア感染に関連するネットワークトラフィックに焦点を当てています。 トラフィック分析演習、チュートリアル、マルウェアサンプル、悪意のあるネットワークトラフィックのpcapファイル、および観察による技術的なブログ投稿が含まれています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.malwaredomains.com/" target="_blank">MalwareDomains.com</a>
        </td>
        <td>
            DNS-BH プロジェクトは、マルウェアやスパイウェアを宣伝するために使用される既知のドメインのリストを作成および維持します。 これらは、検出だけでなく、予防(DNSリクエストの呼び出し)に使用できます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opswat.com/developers/threat-intelligence-feed" target="_blank">MetaDefender Cloud</a>
        </td>
        <td>
            MetaDefender Cloud 脅威インテリジェンスフィードには、MD5、SHA1、およびSHAを含むトップの新しいマルウェアハッシュ署名が含まれています。256. これらの新しい悪意のあるハッシュは、 MetaDefender Cloud 24時間以内に。 フィードは、新しく検出されたマルウェアと報告されたマルウェアで毎日更新され、実用的な脅威インテリジェンスを提供します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.nothink.org">NoThink!</a>
        </td>
        <td>SNMP、SSH、Telnetは、Matteo CantoniのハニーポットからIPをブラックリストしました</td>
    </tr>
    <tr>
        <td>
            <a href="https://services.normshield.com" target="_blank">NormShield Services</a>
        </td>
        <td>
            NormShield Services 潜在的なフィッシング攻撃が来るかもしれない何千ものドメイン情報( whois 情報を含む)を提供します。 ブリーチとブラックリストサービスも利用できます。 継続的な監視のための公共サービスは無料です。
        </td>
    </tr> 
    <tr>
        <td>
            <a href="https://novasense-threats.com" target="_blank">NovaSense Threats</a>
        </td>
        <td>
            NovaSense は、Snapt の脅威インテリジェンス センターで、脅威保護と攻撃緩和のためのインサイトやツールを提供しています。 NovaSenseは、攻撃者、虐待、ボットネット、DoS攻撃など、あらゆるサイズのクライアントを保護します。
        </td>
    </tr>     
    <tr>
        <td>
            <a href="https://www.obstracts.com/" target="_blank">Obstracts</a>
        </td>
        <td>
            サイバーセキュリティチームのRSSリーダー。 任意のブログを構造化し、実用的な脅威インテリジェンスに変換します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://openphish.com/phishing_feeds.html" target="_blank">OpenPhish Feeds</a>
        </td>
        <td>
            OpenPhish は複数のストリームから URL を受信し、独自のフィッシング検出アルゴリズムを使用してそれらを解析します。 無料の商品と商用サービスをご利用いただけます。
        </td>
    </tr>
        <tr>
        <td>
            <a href="https://feed.seguranca-informatica.pt/index.php" target="_blank">0xSI_f33d</a>
        </td>
        <td>
            possbibleフィッシングやマルウェアドメインを検出するための無料サービス, ポルトガル語のサイバースペース内のブラックリストIP.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.phishtank.com/developer_info.php" target="_blank">PhishTank</a>
        </td>
        <td>
            PhishTank 疑わしいフィッシングURLのリストを配信します。 人間のレポートからのデータが来ますが、それらはまた可能で外的な供給を摂取します。 無料のサービスですが、APIキーの登録が必要になる場合があります。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.celerium.com/pickupstix" target="_blank">PickupSTIX</a>
        </td>
        <td>
            PickupSTIX 無料のオープンソースと非商用のサイバー脅威インテリジェンスのフィードです。 現在、 PickupSTIX 3つのパブリックフィードを使用して、毎日約100個の新しいインテリジェンスを配布します。 PickupSTIX さまざまなフィードをSTIXに変換し、あらゆるフィードと通信することができます。 TAXII サーバ。 データは無料で使用でき、サイバー脅威インテリジェンスを使用する素晴らしい方法です。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://qfeeds.com" target="_blank">Q-Feeds Threat Intelligence</a>
        </td>
        <td>
            Q-Feedsは、OSINT、独自の研究、および商用の脅威インテリジェンスフィードからデータを集めたサイバーセキュリティ企業です。 脅威インテリジェンスポータル(TIP)は、組織がこのデータをリアルタイムでアクセスし、管理するのを簡単にします。 ファイアウォール、SIEM、およびその他のセキュリティプラットフォームと統合することで、Q-Feedsは、企業が有意に悪意のあるIP、ドメイン、およびURLへの接続を積極的にブロックするのに役立ちます。脅威が害を及ぼす可能性があります。 また、コミュニティ版も用意しています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rescure.fruxlabs.com/" target="_blank">REScure Threat Intel Feed</a>
        </td>
        <td>
            [RES]cureは、Fluxlabs Crack Teamが実施する独立した脅威インテリジェンスプロジェクトで、分散システムの根本的なアーキテクチャ、脅威インテリジェンスの性質、および効率的な収集、保存、消費、および脅威インテリジェンスの配布に関する理解を強化しています。 フィードは6時間ごとに生成されます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://rstcloud.net/" target="_blank">RST Cloud Threat Intel Feed</a>
        </td>
        <td>
            複数のオープンおよびコミュニティ支援のソースから収集およびクロス検証されたCompromiseの集計されたインジケータ、インテリジェントプラットフォームを使用して強化およびランク付け。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://report.cs.rutgers.edu/mrtg/drop/dropstat.cgi?start=-86400">Rutgers Blacklisted IPs</a>
        </td>
        <td>SSHブルートフォース攻撃者のIPリストは、局所的に観察されたIPとBadip.comで登録された2時間の古いIPの結合から作成され、blocklist.de</td>
    </tr>
    <tr>
        <td>
            <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS Suspicious Domains</a>
        </td>
        <td>
            疑わしいドメインの脅威リストによる <a href="https://isc.sans.edu/suspicious_domains.html" target="_blank">SANS ICS</a> 疑わしいドメインを追跡します。 いずれかに分類された3つのリストを提供しています <a href="https://isc.sans.edu/feeds/suspiciousdomains_High.txt" target="_blank">high</a>, <a href="https://isc.sans.edu/feeds/suspiciousdomains_Medium.txt" target="_blank">medium</a> または <a href="https://isc.sans.edu/feeds/suspiciousdomains_Low.txt" target="_blank">low</a> 感度が高く、感度の高いリストが偽陽性が少ない場合、低感度リストは、より偽陽性です。 また、 <a href="https://isc.sans.edu/feeds/suspiciousdomains_whitelist_approved.txt" target="_blank">approved whitelist</a> ドメイン<br/>
            最後に、提案があります <a href="https://isc.sans.edu/block.txt" target="_blank">IP blocklist</a> から <a href="https://dshield.org">DShield</a>お問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/securityscorecard/SSC-Threat-Intel-IoCs" target="_blank">SecurityScorecard IoCs</a>
        </td>
        <td>
            SecurityScorecardによる技術的なブログ投稿とレポートからのパブリックアクセスIoC。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.stixify.com/" target="_blank">Stixify</a>
        </td>
        <td>
            自動化された脅威インテリジェンスを分析します。 未構造のデータから機械読み取り可能なインテリジェンスを抽出します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/signature-base" target="_blank">signature-base</a>
        </td>
        <td>
            Neo23x0 で他のツールで使用されるシグネチャのデータベース。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.spamhaus.org/" target="_blank">The Spamhaus project</a>
        </td>
        <td>
            スパムハウスプロジェクトには、スパムやマルウェアのアクティビティに関連する複数の脅威リストが含まれています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.sophos.com/intelix" target="_blank">SophosLabs Intelix</a>
        </td>
        <td>
            SophosLabs Intelix Sophosの製品やパートナーに電力を供給する脅威インテリジェンスプラットフォームです。 ファイルハッシュ、urlなどに基づいてインテリジェンスにアクセスすることができます。 分析のためのサンプルを提出するだけでなく。 REST API では、この脅威インテリジェンスをシステムに簡単に素早く追加できます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://spur.us" target="_blank">Spur</a>
        </td>
        <td>
            Spurは、VPN、レジデンシャルプロキシ、ボットを検出するためのツールとデータを提供します。 無料プランにより、ユーザーは lookup IP は、その分類、VPN プロバイダー、IP の背後にある一般的な地理位置情報、およびより有用なコンテキストを取得します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://sslbl.abuse.ch/" target="_blank">SSL Blacklist</a>
        </td>
        <td>
            SSL Blacklist (SSLBL) は、 abuse.ch. 目標は、識別された「悪い」SSL証明書のリストを提供することです abuse.ch マルウェアやボットネット活動に関連付けられている. SSLBLは、悪意のあるSSL証明書のSHA1指紋に依存し、さまざまなブラックリストを提供しています
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://statvoo.com/dl/top-1million-sites.csv.zip" target="_blank">Statvoo Top 1 Million Sites</a>
        </td>
        <td>
            Statvoo によってランク付けされるトップ 1,000,000 のウェブサイトの確率的ホワイトリスト。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://strongarm.io" target="_blank">Strongarm, by Percipient Networks</a>
        </td>
        <td>
            Strongarmはマルウェアのコマンドをブロックし、制御することにより、妥協の指標にアクションを取るDNSブラックホールです。 Strongarm は、無料のインジケータフィードを集約し、商用フィードと統合し、Percipient の IOC フィードを利用し、DNS のリゾルバと API を操作してネットワークやビジネスを保護します。 Strongarmは個人的な使用のために放します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.siemrules.com" target="_blank">SIEM Rules</a>
        </td>
        <td>
            検出エンジニアリングデータベース。 ビュー、変更、デプロイ SIEM rules 脅威の狩猟と検出のため。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.talosintelligence.com/" target="_blank">Talos</a>
        </td>
        <td>
	    シスコ・タロス・インテリジェンス・グループは、世界トップクラスの研究者、アナリスト、エンジニアで構成される世界最大の商業脅威インテリジェンスチームです。 これらのチームは、Cisco の顧客、製品、サービスの正確で迅速で実用的な脅威インテリジェンスを作成するために、比類のないテレメトリーと洗練されたシステムによってサポートされています。 Talosは、Ciscoの顧客を既知の脅威から防御し、一般的なソフトウェアで新しい脆弱性を発見し、彼らはさらに大きなインターネットを傷つけることができる前に、野生の脅威をインターディクトします。 TalosはSnort.org、ClamAV、およびSpamCopの公式ルールセットを維持し、多くのオープンソースの研究と分析ツールをリリースする。 タロスは、Web UIを簡単に使用して確認することができます。 <a href="https://www.talosintelligence.com/reputation">observable's reputation</a>お問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfeeds.io" target="_blank">threatfeeds.io</a>
        </td>
        <td>
            threatfeeds.io 無料のオープンソースの脅威インテリジェンスフィードとソースをリストし、直接ダウンロードリンクとライブの要約を提供します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatfox.abuse.ch/" target="_blank">threatfox.abuse.ch</a>
        </td>
        <td>
            ThreatFoxは無料のプラットフォームです。 abuse.ch マルウェアに関連する妥協(IOC)の指標をインフォセックコミュニティ、AVベンダー、脅威インテリジェンスプロバイダと共有することを目的としています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatconnect.com/blog/ingest-technical-blogs-reports/" target="_blank">Technical Blogs and Reports, by ThreatConnect</a>
        </td>
        <td>
            このソースは、90以上のオープンソース、セキュリティブログからコンテンツでポップアップしています。 IOCs(イオス)<a href="https://en.wikipedia.org/wiki/Indicator_of_compromise" target="_blank">Indicators of Compromise</a>) 各ブログの内容とブログの内容はマークダウンでフォーマットされます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://threatjammer.com" target="_blank">Threat Jammer</a>
        </td>
        <td>
            Threatジャマーは、開発者、セキュリティエンジニア、およびその他のIT専門家がさまざまなソースから高品質の脅威インテリジェンスデータにアクセスし、悪意のある活動を検出およびブロックする唯一の目的のために、そのアプリケーションに統合することを可能にするREST APIサービスです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatminer.org/" target="_blank">ThreatMiner</a>
        </td>
        <td>
            ThreatMiner データの収集からアナリストを解放し、レポートを読んだり、データの濃縮やデータの濃縮まで、タスクを実行できるポータルを提供できるように作成されました。
            こだわり ThreatMiner 妥協(IoC)の指標だけでなく、IoCに関連した文脈情報を分析するものではありません。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/WSTNPHX/scripts-n-tools/master/malware-email-addresses.txt">WSTNPHX Malware Email Addresses</a>
        </td>
        <td>VVestron Phoronix(WSTNPHX)が収集したマルウェアによって使用されるメールアドレス</td>
    </tr>
    <tr>
        <td>
            <a href="https://portal.underattack.today/" target="_blank">UnderAttack.today</a>
        </td>
        <td>UnderAttackは、IPと疑わしいイベントや攻撃に関する情報を共有する無料のインテリジェンスプラットフォームです。 登録は無料です。</td>
    </tr>
    <tr>
        <td>
            <a href="https://urlhaus.abuse.ch">URLhaus</a>
        </td>
        <td>URLhaus プロジェクト abuse.ch マルウェアの配布に使用される悪意のあるURLを共有するという目標で。</td>
    </tr>
    <tr>
        <td>
            <a href="https://virusshare.com/" target="_blank">VirusShare</a>
        </td>
        <td>
            VirusShare.comは、セキュリティ研究者、インシデント対応者、フォレンジックアナリスト、および悪意のあるコードのサンプルへのアクセスを悪用するマルウェアサンプルのリポジトリです。 当サイトへのアクセスは、招待状のみで付与されます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://vuldb.com/?actor" target="_blank">VulDB CTI</a>
        </td>
        <td>
            VulDBは、Vulnerabilityデータベースです。VulDBは、アクター活動と脆弱性の攻撃の詳細を関連付けています。 予測的なアプローチは、悪意のある俳優による新たな研究と攻撃活動を決定するのに役立ちます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yara-Rules/rules" target="_blank">Yara-Rules</a>
        </td>
        <td>
            コンパイル、分類され、可能な限り最新の状態に保つ異なるヤラシグネチャを持つオープンソースリポジトリ。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://IOCFeed.mrlooquer.com/" target="_blank">1st Dual Stack Threat Feed by MrLooquer</a>
        </td>
        <td>
Mrloquerは、デュアルスタックでシステムに焦点を当てた最初の脅威フィードを作成しました。 IPv6 プロトコルはマルウェアと不正通信の一部を始めたので、両方のプロトコル(IPv4 と IPv6)で脅威を検出し、軽減する必要があります。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://app.validin.com/">Validin DNS Database</a>
        </td>
        <td>
            現在のDNS情報や過去のDNS情報のための無料のインテリジェンスソース, 特定のIPに関連付けられている他のウェブサイトを見つけること, サブドメインの知識 そこにあります <a href="https://app.validin.com/docs">free API for IP and domain intelligence</a> お問い合わせ 
        </td>
    </tr>
</table>

## 形式

脅威インテリジェンス（主に IOC）を共有するための標準化された形式。

<table>
    <tr>
        <td>
            <a href="https://capec.mitre.org/" target="_blank">CAPEC</a>
        </td>
        <td>
            一般的な攻撃パターンの列挙と分類(CAPEC)は、分析、開発者、テスター、および教育者がコミュニティの理解を促進し、防衛を高めるために使用できる既知の攻撃の包括的な辞書および分類の分類の分類の分類の分類です。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cyboxproject.github.io/" target="_blank">CybOX</a>
        </td>
        <td>
            サイバー・オブザーバブル・エスプレッションCybOX) 言語は、サイバー・オブ・ザ・オブ・エンタープライズ・サイバー・セキュリティの運用領域において、展開されたツールやプロセスの一貫性、効率性、相互運用性を改善し、全体的な状況意識を高め、詳細なオートマタブル・シェア、マッピング、検出、分析のヒューリスティックスの可能性を高めるための共通の構造を提供します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc5070" target="_blank">IODEF (RFC5070)</a>
        </td>
        <td>
            インシデント オブジェクト 説明 Exchange Format (IODEF) は、コンピューターセキュリティインシデント レスポンス チーム (CSIRT) によって一般的に交換された情報を共有するフレームワークを提供するデータ表現を定義します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/rfc4765" target="_blank">IDMEF (RFC4765)</a>
        </td>
        <td>
            <i>実験実験</i> - 侵入検知メッセージ交換フォーマット(IDMEF)の目的は、侵入検知と応答システムへの関心情報の共有や、それらと相互作用する必要がある管理システムへのやり取りのためのデータフォーマットと交換手順を定義することです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://maecproject.github.io/" target="_blank">MAEC</a>
        </td>
        <td>
            マルウェアの属性の列挙と文字化 (Malware Attribute Enumeration and Characterization)MAEC)プロジェクトは、行動、アーティファクト、攻撃パターンなどの属性に基づいてマルウェアに関する構造化された情報を共有するための標準化された言語を作成および提供することを目的としています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=openc2" target="_blank">OpenC2</a>
        </td>
        <td>
            OASIS コマンドとコントロールを開く (OpenC)2) 技術委員会 ザ・オブ・ザ・ OpenC2 TCは、生成されたアーティファクトに対する取り組みをベースとする。 OpenC2 フォーラム このTCおよびspeの作成に先立ちcifコミュニケーション、 OpenC2 フォーラムは、国家安全保障機関(NSA)が推進したサイバーセキュリティ関係者のコミュニティでした。 ザ・オブ・ザ・ OpenC2 TC は文書、spe を起草するためにチャーターされましたcifサイバーセキュリティコマンドの必要性を満たし、標準化された方法で制御するために、通知、lexiconsまたは他のアーティファクト。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://oasis-open.github.io/cti-documentation/" target="_blank">STIX 2.0</a>
        </td>
        <td>
            構造化された脅威情報 eXpression (STIX) 言語は、サイバー脅威情報を表す標準化された構成です。 STIXランゲージは、潜在的なサイバー脅威情報をフルレンジに伝え、明確に、柔軟で、拡張性、および自動的であることに努めます。 STIXはツールアグノスティックフィールドだけでなく、いわゆる <i>テスト機構</i> ツールを埋め込むための手段を提供するcific要素、を含む OpenIOC, ヤラといびき. STIX 1.x のアーカイブ <a href="https://stixproject.github.io/" target="_blank">here</a>お問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://taxiiproject.github.io/" target="_blank">TAXII</a>
        </td>
        <td>
            インジケータ情報の自動電子交換(Trusted Auto eXchange)TAXII)標準は、実装時に実行されるサービスとメッセージ交換のセットを定義し、組織と製品/サービスの境界を横断する実用的なサイバー脅威情報の共有を有効にします。 TAXII サイバー脅威の検出、防止、および緩和のためのサイバー脅威情報を交換するための概念、プロトコル、およびメッセージ交換を定義します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://veriscommunity.net/index.html" target="_blank">VERIS</a>
        </td>
        <td>
            イベント録画とインシデント共有の語彙(Vocabulary)VERIS)は構造化され、反復可能な方法でセキュリティインシデントを記述するための一般的な言語を提供するように設計されたメトリックのセットです。 VERIS セキュリティ業界における最も重要かつ永続的な課題の1つに対する対応 - 品質情報の欠如。 構造化されたフォーマットを提供することに加えて、 VERIS また、コミュニティからデータを収集し、Verizon Data Breach Investigations Reportの侵害について報告します。<a target="_blank" href="http://www.verizonenterprise.com/verizon-insights-lab/dbir/">DBIR</a>) このデータベースをオンラインで公開する GitHub <a target="_blank" href="https://github.com/vz-risk/VCDB">repository.org</a>お問い合わせ
        </td>
    </tr>
</table>

## フレームワークとプラットフォーム

脅威インテリジェンスを収集、分析、作成、共有するためのフレームワーク、プラットフォーム、サービス。

<table>
    <tr>
        <td>
            <a href="https://github.com/abusesa/abusehelper" target="_blank">AbuseHelper</a>
        </td>
        <td>
            AbuseHelper 不正フィードや脅威インテルを受信し、再配布するためのオープンソースフレームワークです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://abuse.io/" target="_blank">AbuseIO</a>
        </td>
        <td>
            不正なレポートに関するエンドユーザーを受け取り、処理し、照合し、通知するツールキットは、脅威インテリジェンスフィードを消費します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.cisa.gov/ais" target="_blank">AIS</a>
        </td>
        <td>
            サイバーセキュリティとインフラ保安庁(CISA)の無料自動インジケーター共有(CISA)AIS) 機能により、連邦政府と機械速度の民間セクター間のサイバー脅威インジケーターの交換が可能になります。 Threatインジケータは、悪意のあるIPアドレスやフィッシングメールの送信者アドレスなどの情報の一部です(彼らはまた、はるかに複雑になることができますが)。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/csirtgadgets/bearded-avenger" target="_blank">Bearded Avenger</a>
        </td>
        <td>
            脅威インテリジェンスを消費する最速の方法。 成功者へ CIFお問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.blueliv.com/" target="_blank">Blueliv Threat Exchange Network</a>
        </td>
        <td>
            参加者がコミュニティと脅威インジケータを共有できるようにします。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Cortex" target="_blank">Cortex</a>
        </td>
        <td>
            Cortexは、IP、Eメールアドレス、URL、ドメイン名、ファイル、ハッシュなどの観察可能で、単一のWebインターフェイスを使用して一括モードで1つまたは1つずつ分析することができます。 ウェブインターフェイスは、分析中にこれらの自分自身を統合するための必要性を取り除き、多数の分析のためのフロントエンドとして機能します。 アナリストは、Cortex REST API を使用して解析の部分を自動化することもできます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://crits.github.io/" target="_blank">CRITS</a>
        </td>
        <td>
            CRITS マルウェアや脅威への共同研究を行うための手段をアナリストに提供するプラットフォームです。 集中型のインテリジェンスデータリポジトリに接続しますが、プライベートインスタンスとしても使用できます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://csirtgadgets.org/collective-intelligence-framework" target="_blank">CIF</a>
        </td>
        <td>
            集団知能フレームワーク(Co Collective Intelligence Framework)CIF) は、多くの情報源から知られた悪意のある脅威情報を結合し、IR、検出、および緩和のためにその情報を使用することを可能にします。 利用可能なコード <a href="https://github.com/csirtgadgets/massive-octo-spice" target="_blank">GitHub</a>お問い合わせ
        </td>
    </tr>
<tr>
        <td>
            <a href="https://cyware.com/ctix-stix-taxii-cyber-threat-intelligence-exchange" target="_blank">CTIX</a>
        </td>
        <td>
            CTIX 信頼できるネットワーク内の脅威データのインジェクション、エンリッチメント、分析、双方向共有のためのスマートでクライアントサーバーの脅威インテリジェンスプラットフォーム(TIP)です。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.eclecticiq.com/platform" target="_blank">EclecticIQ Platform</a>
        </td>
        <td>
            EclecticIQ Platform は、STIX/TAXII 脅威分析プラットフォーム(TIP)をベースとした脅威インテリジェンスプラットフォーム(TIP)は、機械速度でインテリジェンスを発信しながら、より速く、より良く、より深い調査を実施します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.enisa.europa.eu/topics/csirt-cert-services/community-projects/incident-handling-automation" target="_blank">IntelMQ</a>
        </td>
        <td>
            IntelMQ メッセージキュープロトコルを使用してセキュリティフィード、ペーストビン、ツイートを収集および処理するためのCERTのソリューションです。 複数のインフォセックイベントでヨーロッパのCERTによって概念的に設計されたIHAP(Incident Handling Automation Project)と呼ばれるコミュニティ主導のイニシアチブです。 その主な目標は、インシデント対応者に脅威インテリジェンスの収集と処理の簡単な方法を提供することです。 これにより、CERTのインシデント処理プロセスを改善します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/intelowlproject/IntelOwl/" target="_blank">IntelOwl</a>
        </td>
        <td>
            Intel Owlは、Speに関する脅威インテリジェンスデータを取得するOSINTソリューションですcific ファイル、IP または 1 つの API からスケールでドメイン。 Intel Owl は、外部ソースからデータを取得するために実行できるアナライザで構成されます (VirusTotal や AbuseIPDB) または内部アナライザからインテルを生成する (ヤラやOletools のような). セキュリティツールのスタックに簡単に統合できます()<a href="https://github.com/intelowlproject/pyintelowl" target="_blank">pyintelowl</a>) 通常、一般的なジョブを自動化するには、例えば、SOC のアナリストが手動で実行します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.kaspersky.com/enterprise-security/threat-intelligence" target="_blank">Kaspersky Threat Intelligence Portal</a>
        </td>
        <td>
            サイバー脅威、正当なオブジェクト、およびその関係を記述するナレッジベースを提供するウェブサイトは、単一のWebサービスにまとめました。 カスペルスキーラボの脅威インテリジェンスポータルへのサブスクライブでは、カスペルスキー脅威データフィード、脅威インテリジェンスレポーティング、カスペルスキー脅威 Lookup そして、Kasperskyの研究のサンドボックスは、すべて人間可読および機械読みやすいフォーマットで利用できます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/malstrom" target="_blank">Malstrom</a>
        </td>
        <td>
            Malstromは、脅威追跡とフォレンジックアーティファクトのリポジトリであることを目指していますが、YARAルールとノートを格納して調査を行います。 注意: Github プロジェクトはアーカイブされています(新しい貢献は受け付けていません)。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stratosphereips/Manati" target="_blank">ManaTI</a>
        </td>
        <td>
            ザ・オブ・ザ・ ManaTI プロジェクトは、新しい関係と推論を自動的に見つける機械学習技術を採用することにより、脅威アナリストを支援します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://django-mantis.readthedocs.io/en/latest/" target="_blank">MANTIS</a>
        </td>
        <td>
            脅威インテリジェンスソースのモデルベースの分析()MANTIS) サイバー脅威インテリジェンス管理フレームワークは、STIXやSTIXなどのさまざまな標準言語で表現されたサイバー脅威インテリジェンスの管理をサポートしています。 CybOX. それはあります *コメントはありません* 大規模な生産の準備ができました。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cert-se/megatron-java" target="_blank">Megatron</a>
        </td>
        <td>
            Megatron は、不正な IP を収集し、分析する CERT-SE によって実装されたツールで、統計を計算したり、ログファイルを変換したり、悪用したり、インシデント処理したりすることができます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/PaloAltoNetworks/minemeld/wiki" target="_blank">MineMeld</a>
        </td>
        <td>
            拡張可能な脅威インテリジェンス処理フレームワークが Palo Alto Networks を作成しました。
            指標のリストを操作し、第三者の執行機関によって消費のためにそれらを変換および/または集計するために使用することができます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.misp-project.org/" target="_blank">MISP</a>
        </td>
        <td>
            マルウェア情報共有プラットフォーム (マルウェア情報共有プラットフォーム)MISP)は、サイバーセキュリティインジケータとマルウェア分析を収集、保存、配布および共有するためのオープンソースソフトウェアソリューションです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CERT-Polska/n6" target="_blank">n6</a>
        </td>
        <td>
            n6 (Network Security Incident eXchange)は、大規模にセキュリティ情報を収集、管理、配布するシステムです。 ディストリビューションは、シンプルなREST APIと認証されたユーザーがさまざまな種類のデータを受信するために使用できるWebインターフェイスによって実現されます。特に、ネットワーク内の脅威やインシデントに関する情報。 によって開発される <a href="https://www.cert.pl/en/" target="_blank">CERT Polska</a>お問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ocsf.io/" target="_blank">Open Cybersecurity Schema Framework (OCSF)</a>
        </td>
        <td>
            Open Cybersecurity Schema Framework はオープンソースプロジェクトで、スキーマを開発するための拡張可能なフレームワークと、ベンダー固有のコアセキュリティスキーマを提供します。 ベンダーや他のデータプロデューサーは、Speのスキーマを採用し、拡張することができますcific ドメイン。 データ エンジニアは、データ サイエンティストおよびアナリストが脅威の検出および調査のための共通言語と働かせることができるように、セキュリティ チームの単純化および正規化を助けるために回路図をマッピングできます。 目標は、既存のセキュリティ基準とプロセスを補完しながら、あらゆる環境、アプリケーション、またはソリューションで採用されたオープンスタンダードを提供することです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.opencti.io/en/" target="_blank">OpenCTI</a>
        </td>
        <td>
            OpenCTI、オープンサイバー脅威インテリジェンスプラットフォームは、組織がサイバー脅威インテリジェンスの知識と保守可能な管理を可能にします。 その目標は、サイバー脅威に関する技術的および非技術的な情報の構築、保存、整理、視覚化することです。 データは知識のスキーマを中心に構成されています STIX2 規格。 OpenCTI 他のツールやプラットフォームと統合できます。 MISP、TheHiveおよびMITRE ATT&CKお問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware.html" target="_blank">OpenIOC</a>
        </td>
        <td>
            OpenIOC 脅威インテリジェンスを共有するためのオープンフレームワークです。 マシンダイジェスブルフォーマットで内部と外部の両方の脅威情報を交換するように設計されています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/OpenTAXII" target="_blank">OpenTAXII</a>
        </td>
        <td>
            OpenTAXII 堅牢な Python の実装 TAXII 豊富な機能セットと、よく設計されたアプリケーションの上に構築されたフレンドリーな Pythonic API を提供するサービス。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Ptr32Void/OSTrICa" target="_blank">OSTrICa</a>
        </td>
        <td>
            オープンソースのプラグイン指向のフレームワークで、脅威インテリジェンス情報を収集および可視化します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://otx.alienvault.com" target="_blank">OTX - Open Threat Exchange</a>
        </td>
        <td>
            AlienVault Open Threat Exchange (OTX) は、脅威の研究者やセキュリティの専門家のグローバルコミュニティへのオープンアクセスを提供しています。 コミュニティで生成された脅威データを配信し、共同研究開発を可能にし、あらゆるソースから脅威データでセキュリティインフラストラクチャを更新するプロセスを自動化します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Lookingglass/opentpx/" target="_blank">Open Threat Partner eXchange</a>
        </td>
        <td>
            ザ・オブ・ザ・ Open Threat Partner eXchange (OpenTPX) は、機械で読みやすい脅威インテリジェンスとネットワークのセキュリティ操作データを交換するためのオープンソースのフォーマットとツールで構成されています。 接続されたシステム間でデータを共有できる JSON ベースのフォーマットです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://community.riskiq.com/" target="_blank">PassiveTotal</a>
        </td>
        <td>
            ザ・オブ・ザ・ PassiveTotal RiskIQが提供するプラットフォームは、攻撃を防ぐため、できるだけ多くのデータを分析できる脅威分析プラットフォームです。 複数のソリューションが提供され、他のシステムとの統合(API)も提供されます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pulsedive.com/" target="_blank">Pulsedive</a>
        </td>
        <td>
            Pulsedive は、オープンソースフィードを消費し、IOC を豊かにし、リスクスコアリングアルゴリズムでデータを品質を向上させるためのプラットフォームです。 ユーザーは、IOCを提出、検索、照合、更新することができます。IOCがリスクが高い理由の「リスク要因」を一覧表示し、脅威や脅威活動の高いレベルビューを提供します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.recordedfuture.com/" target="_blank">Recorded Future</a>
        </td>
        <td>
            記録された未来は、脅威インテリジェンスをオープン、クローズド、テクニカルソースから単一のソリューションに自動的に統一するプレミアムSaaS製品です。 彼らの技術は、自然言語処理(NLP)と機械学習を使用して、その脅威インテリジェンスをリアルタイムに配信し、記録された未来をITセキュリティチームにとって人気のある選択肢にします。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Netflix/Scumblr" target="_blank">Scumblr</a>
        </td>
        <td>
            Scumblrは、データソースの定期的な同期を実行できるWebアプリケーションです(例えば Github リポジトリとURL)と、特定された結果の分析(静的解析、動的チェック、メタデータ収集など)を実行します。
            Scumblr は、インテリジェントな自動化フレームワークを使用して、セキュリティの問題の特定、追跡、解決を迅速化するのに役立ちます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.anomali.com/platform/staxx" target="_blank">STAXX (Anomali)</a>
        </td>
        <td>
            Anomali STAXTM は、任意の STIX を購読するための無料で簡単な方法を提供します。TAXII フィード。 STAXXクライアントをダウンロードし、データソースを設定し、STAXXXは残りを処理します。
        </td>
    </tr>    
    <tr>
        <td>
            <a href="http://stoq.punchcyber.com/" target="_blank">stoQ</a>
        </td>
        <td>
            stoQ サイバーアナリストが繰り返し、データドリブンなタスクを整理し、自動化できるフレームワークです。 他の多くのシステムとやりとりするプラグインを備えています。
            1つのユースケースは、文書からIOCの抽出、その例を示します <a href="https://stoq-framework.blogspot.nl/2016/04/operationalizing-indicators.html" target="_blank">here</a>, しかし、それはまた、例えばYARAとコンテンツの解読と自動スキャンの解読のために使用することができます.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/tripwire/tardis" target="_blank">TARDIS</a>
        </td>
        <td>
            脅威分析、再調整aisデータ・インテリジェンス・システム(Sance, Data Intelligence System)TARDIS)は、攻撃シグネチャを使用して歴史的検索を実行するためのオープンソースフレームワークです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatconnect.com/" target="_blank">ThreatConnect</a>
        </td>
        <td>
            ThreatConnect 脅威インテリジェンス、分析、およびオーケストレーション機能を備えたプラットフォームです。 データを収集し、インテリジェンスを生成し、他の人と共有し、アクションを取るのに役立つように設計されています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatcrowd.org/" target="_blank">ThreatCrowd</a>
        </td>
        <td>
            ThreatCrowd サイバー脅威に関するアーティファクトを見つけることと研究のためのシステムです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.threatpipes.com" target="_blank">ThreatPipes</a>
        </td>
        <td>
            広告主の一歩先を踏み入れましょう。 彼らがあなたを悪用する方法の完全な写真を入手してください。
            <br />
            ThreatPipes 再考aissance ツールは、100 のデータソースを自動的に IP アドレス、ドメイン名、電子メール アドレス、名前などに関するインテリジェンスを収集します。
            <br />
            あなただけのスピーcify は、どのモジュールを有効化し、それを調査したいターゲットを選びます ThreatPipes データを収集して、すべてのエンティティティティを理解し、それらがどのように関係するかを把握します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://developers.facebook.com/docs/threat-exchange/" target="_blank">ThreatExchange</a>
        </td>
        <td>
            Facebook作成 ThreatExchange 参加組織が、目的のグループと共有できるように、プライバシー制御を提供する、便利で構造化された使いやすいAPIを使用して、脅威データを共有できるようにします。 このプロジェクトはまだ <b>ログイン</b>. 参照コードはで見つけることができます <a href="https://github.com/facebook/ThreatExchange" target="_blank">GitHub</a>お問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/typedb-osi/typedb-cti" target="_blank">TypeDB CTI</a>
        </td>
        <td>
		TypeDBデータ - CTIは、組織がサイバー脅威インテリジェンス(CTI)の知識を保存し、管理するためのオープンソースの脅威インテリジェンスプラットフォームです。 脅威インテルの専門家が、CTI情報を1つのデータベースに分散させ、サイバー脅威に関する新しいインサイトを見つけることを可能にします。 このリポジトリは、に基づいているスキーマを提供します STIX2MITRE を含む。 ATT&CK この脅威インテリジェンスプラットフォームを探索するデータセットとして。 詳しくはこちら <a href="https://blog.vaticle.com/introducing-a-knowledge-graph-for-cyber-threat-intelligence-with-typedb-bdb559a92d2a" target="_blank">blog post</a>お問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://beta.virusbay.io/" target="_blank">VirusBay</a>
        </td>
        <td>
            VirusBay セキュリティオペレーションセンター(SOC)の専門家と関連するマルウェアの研究者とつながるWebベースのコラボレーションプラットフォームです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/brianwarehime/threatnote" target="_blank">threatnote.io</a>
        </td>
        <td>
            新しく改良される threatnote.io - CTIアナリストとチームのためのツールは、オールインワンプラットフォームでインテル要件、レポート、およびCTIプロセスを管理します
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://exchange.xforce.ibmcloud.com/" target="_blank">XFE - X-Force Exchange</a>
        </td>
        <td>
            IBM XFE による X-Force Exchange (XFE) は、脅威情報を検索したり、あなたの発見を収集したり、XFE コミュニティの他のメンバーとあなたの洞察を共有したりするために使用できる無料の SaaS 製品です。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://yeti-platform.github.io/" target="_blank">Yeti</a>
        </td>
        <td>
            オープン、分散、機械およびアナリストフレンドリーな脅威インテリジェンスリポジトリ。 事件対応者・事件対応者
        </td>
    </tr>
</table>



## ツール

脅威インテリジェンスの解析、作成、編集に使う各種ツール。主に IOC を扱います。

<table>
    <tr>
        <td>
            <a href="https://github.com/jalewis/actortrackr" target="_blank">ActorTrackr</a>
        </td>
        <td>
            ActorTrackr アクター関連のデータを保存/検索/リンクするためのオープンソースのWebアプリケーションです。 プライマリソースは、ユーザーと様々な公共リポジトリからあります。 利用できる源 <a href="https://github.com/jalewis/actortrackr" target="_blank">GitHub</a>お問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/camp0/aiengine" target="_blank">AIEngine</a>
        </td>
        <td>
            AIEngine 次の世代のインタラクティブ/プログラミング可能なPython/Ruby/Java/Luaパケット検査エンジンで、人間の介入、NIDS(Network Intrusion Detection System)機能、DNSドメイン分類、ネットワークコレクター、ネットワークフォレンジック、その他多数。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/referefref/aiocrioc" target="_blank">AIOCRIOC</a>
        </td>
        <td>
            Compromiseの人工知能のOcularのキャラクター認識の表示()AIOCRIOC)は、Webスクレイピング、Tesseract および OpenAI 互換 LLM API の OCR 機能を組み合わせたツールで、GPT-4 などの OOC を解析し、IOC をレポートや他の Web コンテンツから抽出します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://analyze.intezer.com" target="_blank">Analyze (Intezer)</a>
        </td>
        <td>
            Analyzeは、あらゆる種類のファイルに対して静的、動的、および遺伝的コード解析を実行できるオールインワンマルウェア分析プラットフォームです。 マルウェアファミリーを追跡し、IOC/MITRE TTPを抽出し、YARAシグネチャをダウンロードすることができます。 無料で始めるコミュニティ版があります。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/1aN0rmus/TekDefense-Automater" target="_blank">Automater</a>
        </td>
        <td>
            Automater は URL/Domain、IP アドレス、Md5 ハッシュ OSINT ツールで、イントラクションアナリストの解析プロセスを容易にすることを目的としています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/svdwi/BlueBox" target="_blank">BlueBox</a>
        </td>
        <td>
            BlueBox speに関する脅威インテリジェンスデータを取得するOSINTソリューションです。cificファイル、IP、ドメイン、URL、およびそれらを分析します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://botscout.com/">BotScout</a>
        </td>
        <td>
            BotScout フォーラムに登録、データベースの汚染、スパムの拡散、Webサイト上での乱用フォームから「ボット」として知られる自動Webスクリプトを防ぐことができます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/bro-intel-generator" target="_blank">bro-intel-generator</a>
        </td>
        <td>
            pdf または html レポートから Bro の intel ファイルを生成するためのスクリプト。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/EclecticIQ/cabby" target="_blank">cabby</a>
        </td>
        <td>
            対話するための簡単なPythonライブラリ TAXII サーバ。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/cacador" target="_blank">cacador</a>
        </td>
        <td>
            Cacadorは、テキストのブロックから妥協の一般的な指標を抽出するためにGoで書かれているツールです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/combine" target="_blank">Combine</a>
        </td>
        <td>
            公に利用可能なソースから脅威インテリジェンスフィードを集めます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CrowdStrike/CrowdFMS" target="_blank">CrowdFMS</a>
        </td>
        <td>
            CrowdFMS プライベート API システムを利用することで、VrusTotal からサンプルの収集と処理を自動化するためのフレームワークです。
            フレームワークは、YARA通知フィードのユーザーにアラートをトリガーした最近のサンプルを自動的にダウンロードします。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-transmute.org/" target="_blank">CTI-Transmute</a>
        </td>
        <td>
            CTI-Transmute 間のサイバー脅威インテリジェンス(CTI)データを変換するためのツールです。 MISP STIXフォーマット データの自動変換を可能にするAPIエンドポイントのセットを提供し、さまざまな脅威インテリジェンスプラットフォームとワークフローを簡単に統合できます。 利用できる源 <a href="https://github.com/MISP/cti-transmute" target="_blank">GitHub</a>お問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/cuckoosandbox/cuckoo" target="_blank">Cuckoo Sandbox</a>
        </td>
        <td>
            Cuckoo Sandboxは自動動的マルウェア解析システムです。 それは最もよく知られているオープンソースのマルウェア分析サンドボックスであり、研究者、CERT/SOC チーム、世界中の脅威インテリジェンスチームによって頻繁に導入されています。 多くの組織のために、Cuckoo Sandboxは潜在的なマルウェアのサンプルの最初の洞察を提供します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cybergordon.com/" target="_blank">CyberGordon</a>
        </td>
        <td>
            CyberGordon 脅威インテリジェンス検索エンジンです。 レバレッジ 30+ ソース。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/CylanceSPEAR/CyBot" target="_blank">CyBot</a>
        </td>
        <td>
            CyBot 脅威インテリジェンスチャットボットです。 複数の種類を実行できます。 lookupカスタムモジュールによって提供されるs。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Fenrir" target="_blank">Fenrir</a>
        </td>
        <td>
            シンプルなBash IOCスキャナ。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/FireHOL-IP-Aggregator" target="_blank">FireHOL IP Aggregator</a>
        </td>
        <td>
            FireHOLからフィードを維持するためのアプリケーション <a href="https://github.com/firehol/blocklist-ipsets" target="_blank">blocklist-ipsets</a> IPアドレスの出現の履歴を使って。 検索リクエスト用に HTTP ベースの API サービスを開発
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/byt3smith/Forager" target="_blank">Forager</a>
        </td>
        <td>
            複数の脅威インテリジェンスハンターギャザースクリプト。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.gigasheet.co" target="_blank">Gigasheet</a>
        </td>
        <td>
            Gigasheet は、大規模で、サイバーセキュリティのデータセットを分離するために使用される SaaS 製品です。 巨大なログファイル、netflow、pcaps、大きい輸入して下さい CSVお問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/BinaryDefense/goatrider" target="_blank">GoatRider</a>
        </td>
        <td>
            GoatRider 動的にArtillery Threat Intelligenceフィード、TOR、AienVaults OTX、Alexa Top 1,000,000ウェブサイトをプルダウンし、ホスト名ファイルまたはIPファイルと比較して行う簡単なツールです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cse.google.com/cse/publicurl?cx=003248445720253387346:turlh5vi4xc" target="_blank">Google APT Search Engine</a>
        </td>
        <td>
            APTのグループ、操作およびマルウェアの検索エンジン。 このGoogleカスタム検索に使用されるソースは、 <a href="https://gist.github.com/Neo23x0/c4f40629342769ad0a8f3980942e21d3" target="_blank">this</a> GitHub ギスト。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ciscocsirt/gosint" target="_blank">GOSINT</a>
        </td>
        <td>
            ザ・オブ・ザ・ GOSINT フレームワークは、妥協(IOCs)の高品質の公共指標を収集、処理、およびエクスポートするために使用される無料のプロジェクトです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://hashdd.com/" target="_blank">hashdd</a>
        </td>
        <td>
            ツール lookup 暗号化ハッシュ値の関連情報
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/exp0se/harbinger" target="_blank">Harbinger Threat Intelligence</a>
        </td>
        <td>
            単一のインターフェイスから複数のオンライン脅威集計者を照会できる Python スクリプト。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TheHive-Project/Hippocampe" target="_blank">Hippocampe</a>
        </td>
        <td>
            Hippocampe は Elasticsearch クラスターでインターネットから脅威のフィードを集計します。 'memory' を検索できる REST API を持っています。 フィード、パーサー、インデックスに対応する URL を取得する Python スクリプトに基づいています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/S03D4-164/Hiryu" target="_blank">Hiryu</a>
        </td>
        <td>
            APTキャンペーン情報を整理し、IOC間のリレーションを可視化するツールです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/ioc-editor.html" target="_blank">IOC Editor</a>
        </td>
        <td>
            Compromise(IOC)の表示器用のフリーエディタです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/ioc-finder" target="_blank">IOC Finder</a>
        </td>
        <td>
            テキストで妥協の指標を見つけるためのPythonライブラリ。 文法は、 regexes ではなく、 理解度を高めます。 2019年2月現在、計18種類以上を保有しております。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ioc-fang/ioc_fanger" target="_blank">IOC Fanger (and Defanger)</a>
        </td>
        <td>
            ファンジングのための Python ライブラリ ()`hXXp://example[.]com` パスワード `http://example.com`) と defanging ()`http://example.com` パスワード `hXXp://example[.]com`) テキストの妥協の指標。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/armbues/ioc_parser" target="_blank">ioc_parser</a>
        </td>
        <td>
            PDF形式のセキュリティレポートから妥協の指標を抽出するツール。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mandiant/ioc_writer" target="_blank">ioc_writer</a>
        </td>
        <td>
            基本的な作成と編集を可能にする Python ライブラリを提供 OpenIOC オブジェクト。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/python-iocextract" target="_blank">iocextract</a>
        </td>
        <td>
            URL、IP アドレス、MD5/SHA ハッシュ、メールアドレス、YARA ルールをテキスト corpora から抽出します。 出力中のエンコードと「デフラグ」の IOC を含み、オプションでデコード/リファングを行います。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/stephenbrannon/IOCextractor" target="_blank">IOCextractor</a>
        </td>
        <td>
            IOC(Compromiseのインジケータ) Extractorは、テキストファイルからIOCを抽出するのに役立ちますプログラムです。 一般的な目標は、非構造化または半構造化されたデータを解析するプロセスを高速化することです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/johestephan/ibmxforceex.checker.py" target="_blank">ibmxforceex.checker.py</a>
        </td>
        <td>
            IBM X-Force Exchange 用の Python クライアント。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/sroberts/jager" target="_blank">jager</a>
        </td>
        <td>
            Jagerは、さまざまな入力ソースから有用なIOC(妥協の指標)を引き出すためのツールです(PDFsは現在、本当にすぐに文を平らに、最終的にはウェブページ)。JSON形式を簡単に操作できます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://support.kaspersky.com/13850" target="_blank">Kaspersky CyberTrace</a>
        </td>
        <td>
            脅威データフィードをSIEMソリューションと統合する脅威インテリジェンスの融合と解析ツール。 ユーザーは、既存のセキュリティ操作のワークフローでセキュリティ監視とインシデントレポート(IR)活動のために脅威インテリジェンスを即座に活用できます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/KasperskyLab/klara" target="_blank">KLara</a>
        </td>
        <td>
            KLara, Python で書かれている分散システム, 研究者は、サンプルとコレクション上の 1 つ以上の Yara ルールをスキャンすることができます。, 電子メールによる通知を取得するだけでなく、スキャン結果が準備ができたら web インターフェイス.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/libtaxii" target="_blank">libtaxii</a>
        </td>
        <td>
            処理のための Python ライブラリ TAXII メッセージの呼び出し TAXII サービス
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Neo23x0/Loki" target="_blank">Loki</a>
        </td>
        <td>
            シンプルなIOCとインシデント対応スキャナ。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bitbucket.org/ssanthosh243/ip-lookup-docker" target="_blank">LookUp</a>
        </td>
        <td>
            LookUp IPアドレスに関するさまざまな脅威情報を取得する一元化されたページです。 SIEMや他の調査ツールなどのツールのコンテキストメニューに簡単に統合できます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/HurricaneLabs/machinae" target="_blank">Machinae</a>
        </td>
        <td>
            Machinaeは、IPアドレス、ドメインネーム、URL、メールアドレス、ファイルハッシュ、SSL指紋など、さまざまなセキュリティ関連データに関するパブリックサイト/フィードからインテリジェンスを収集するためのツールです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/silascutler/MalPipe" target="_blank">MalPipe</a>
        </td>
        <td>
            マルウェア(およびインジケータ)の収集と処理フレームワーク。 複数のフィードからマルウェア、ドメイン、URL、IPアドレスをプルし、収集したデータを充実させ、結果をエクスポートするように設計されています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/misp-workbench" target="_blank">MISP Workbench</a>
        </td>
        <td>
            データをエクスポートするためのツール MISP MySQL データベースを使用して、このプラットフォームの外でそれらを悪用します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/MISP/MISP-Taxii-Server" target="_blank">MISP-Taxii-Server</a>
        </td>
        <td>
            EclecticIQ で使用できる設定ファイル OpenTAXII 実装、データが送信されたときのコールバックとともに TAXII サーバーの受信トレイ。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/microsoft/msticpy" target="_blank">MSTIC Jupyter and Python Security Tools</a>
        </td>
        <td>
            msticpy は InfoSec の調査と Jupyter Notebooks でハンティングするライブラリです。 
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/paulpc/nyx" target="_blank">nyx</a>
        </td>
        <td>
            このプロジェクトの目標は、脅威インテリジェンスアーティファクトの配布を防御し、オープンソースと商用ツールの両方から得られる価値を高めることです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/fhightower/onemillion" target="_blank">OneMillion</a>
        </td>
        <td>
            ドメインがAlexaまたはCiscoのトップにあるかどうかを判断するためのPythonライブラリは、100万のドメインリストです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/STIXProject/openioc-to-stix" target="_blank">openioc-to-stix</a>
        </td>
        <td>
            STIX XMLを生成します。 OpenIOC XML。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/omnibus" target="_blank">Omnibus</a>
        </td>
        <td>
            Omnibus は、IOCs/artifacts (IP、ドメイン、Email アドレス、ユーザー名、Bitcoin アドレス) の収集と管理のためのインタラクティブなコマンドラインアプリケーションで、これらのアーティファクトをパブリックソースから OSINT のデータとともに強化し、これらのアーティファクトを単純な方法で保存およびアクセスする手段を提供します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kx499/ostip/wiki" target="_blank">OSTIP</a>
        </td>
        <td>
            Homebrewの脅威データプラットフォーム。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mgeide/poortego" target="_blank">poortego</a>
        </td>
        <td>
            オープンソースプロジェクトは、オープンソースのインテリジェンス(ala Maltego)のストレージとリンクを処理しますが、ビールのように無料で、speに縛られませんcific / 独自のデータベース もともと ruby で開発されましたが、新しいコードベースは python で完全に書き換えられます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/yahoo/PyIOCe" target="_blank">PyIOCe</a>
        </td>
        <td>
            PyIOCe です。 IOC editor Pythonで書かれています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/QTek/QRadio" target="_blank">QRadio</a>
        </td>
        <td>
            QRadio サイバー脅威インテリジェンスソースを集約するツール/フレームワークです。
            プロジェクトの目標は、固定されたソースからインテリジェンスデータの抽出のための堅牢なモジュラーフレームワークを確立することです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/aboutsecurity/rastrea2r" target="_blank">rastrea2r</a>
        </td>
        <td>
            ガストとスタイルで妥協(IOC)の指標の収集と狩猟!
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.fireeye.com/services/freeware/redline.html" target="_blank">Redline</a>
        </td>
        <td>
            他者、IOCの分析の中で使用できるホスト調査ツール。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/ocmdev/rita" target="_blank">RITA</a>
        </td>
        <td>
            リアルインテリジェンス脅威分析(Real Intelligence Threat Analytics)RITA) さまざまなサイズの企業のネットワークの妥協の指標の検索に役立ちます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/spacepatcher/softrace" target="_blank">Softrace</a>
        </td>
        <td>
            軽量の国民ソフトウェア参照の図書館RDSの貯蔵。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/0x4d31/sqhunter" target="_blank">sqhunter</a>
        </td>
        <td>
            スクワリー、ソルトオープン、サイモンAPIに基づく脅威ハンター。 ネットワーク ソケットを開き、脅威インテリジェンス ソースから確認することができます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/SecurityRiskAdvisors/sra-taxii2-server" target="_blank">SRA TAXII2 Server</a>
        </td>
        <td>
            スタッフ TAXII 2.0のspecifMongoDB バックエンドで Node JS で実装された ication サーバー。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://stixvalidator.com" target="_blank">Stixvalidator.com</a>
        </td>
        <td>
            Stixvalidator.com オンライン無料STIXです。 STIX2 バリデータサービス
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/traut/stixview" target="_blank">Stixview</a>
        </td>
        <td>
            Stixview は、組み込み可能なインタラクティブな JS ライブラリです。 STIX2 グラフ。
        </td>
    </tr>
	<tr>
        <td>
            <a href="https://github.com/STIXProject/stix-viz" target="_blank">stix-viz</a>
        </td>
        <td>
            STIX 可視化ツール
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://test.taxiistand.com/" target="_blank">TAXII Test Server</a>
        </td>
        <td>
            あなたのテストを許可します TAXII 提供されるサービスに接続し、書面で異なる機能を実行することにより、環境 TAXII スピープルcifインフォメーション
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jpsenior/threataggregator" target="_blank">threataggregator</a>
        </td>
        <td>
            ThreatAggregratorは、複数のオンラインソースからセキュリティ脅威を集約し、CEF、Snort、IPTablesなどのさまざまなフォーマットに出力します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcrowd_api" target="_blank">threatcrowd_api</a>
        </td>
        <td>
            Pythonライブラリ ThreatCrowd's API です。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/jheise/threatcmd" target="_blank">threatcmd</a>
        </td>
        <td>
            Cliインターフェイスに ThreatCrowdお問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/syphon1c/Threatelligence" target="_blank">Threatelligence</a>
        </td>
        <td>
            Threatelligenceは、Elasticsearch、Kibana、Pythonを使用して、単純なサイバー脅威インテリジェンスフィードコレクターで、カスタムまたは公開ソースから自動的にインテリジェンスを収集します。 フィードを自動的に更新し、ダッシュボードのデータをさらに強化しようとします。 しかし、プロジェクトはもはや維持されていないようです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/InQuest/ThreatIngestor" target="_blank">ThreatIngestor</a>
        </td>
        <td>
            柔軟な構成主導、脅威インテリジェンスを消費するための拡張可能なフレームワーク。 ThreatIngestor Twitter、RSSフィード、その他の情報源、C2 IPs/domains や YARA のシグネチャなどの有意義な情報を抽出し、その情報を分析のために他のシステムに送ることができます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://chrome.google.com/webstore/detail/threatpinch-lookup/ljdgplocfnmnofbhpkjclbefmjoikgke" target="_blank">ThreatPinch Lookup</a>
        </td>
        <td>
            IPv4、MD5、SHA2、CVEの各ページでホバーポップアップを作成するChromeの拡張。 それはのために使用することができます lookup脅威調査中のs。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/michael-yip/ThreatTracker" target="_blank">ThreatTracker</a>
        </td>
        <td>
            与えられた IOC のセットを Google のカスタム検索エンジンのセットでインデックス化したアラートを監視し、生成する Python スクリプト。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/Yelp/threat_intel" target="_blank">threat_intel</a>
        </td>
        <td>
            Threat Intelligence用の複数のAPIは、単一のパッケージに統合されています。 含まれるもの: OpenDNS Investigate、VrusTotalおよびShadowServer。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/abhinavbom/Threat-Intelligence-Hunter" target="_blank">Threat-Intelligence-Hunter</a>
        </td>
        <td>
            TIHは、利用可能な複数のオープンなセキュリティフィードとよく知られた API 間で IOC を検索するのに役立つインテリジェンスツールです。 ツールの背後にあるアイデアは、頻繁に追加された IOC の検索と保存を容易にして、独自のローカルデータベースの指標を作成できるようにすることです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mlsecproject/tiq-test" target="_blank">tiq-test</a>
        </td>
        <td>
            Threat Intelligence Quotient(TIQ)テストツールは、TIフィードの可視化と統計解析を提供します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/TAXIIProject/yeti" target="_blank">YETI</a>
        </td>
        <td>
            YETI 実証済みの実装です。 TAXII Inbox、Poll、Discoveryサービスが定義されていることをサポートしています。 TAXII サービスSpecifコミュニケーション。
        </td>
    </tr>
</table>



## <a name="research"></a>研究、標準、書籍

脅威インテリジェンスに関するさまざまな資料。科学研究やホワイトペーパーを含みます。

<table>
    <tr>
        <td>
            <a href="https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections" target="_blank">APT & Cyber Criminal Campaign Collection</a>
        </td>
        <td>
            (ヒステリック)キャンペーンの豊富なコレクション。 エントリーは様々なソースから来ています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/kbandla/APTnotes" target="_blank">APTnotes</a>
        </td>
        <td>
            ソースの素晴らしいコレクション <i>高度な持続的な脅威</i> (APTs). これらのレポートは通常、戦略的知識や戦術的な知識やアドバイスを含みます。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://attack.mitre.org/" target="_blank">ATT&CK</a>
        </td>
        <td>
            アドバーサリアル戦術、テクニック、共通の知識()ATT&CKTM)は、エンタープライズネットワーク内で動作する際の議論を記述するためのモデルとフレームワークです。 ATT&CK ネットワーク侵入時にどのような行動が見られるかを意識するポストアクセス技術の常時成長共通の参照です。 MITREは、関連するコンストラクトとの統合に積極的に取り組んでいます。 CAPEC、STIXおよび MAECお問い合わせ
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.activeresponse.org/building-threat-hunting-strategy-with-the-diamond-model/" target="_blank">Building Threat Hunting Strategies with the Diamond Model</a>
        </td>
        <td>
            ダイヤモンドモデルを使用してインテリジェントな脅威狩猟戦略を開発する方法に関するSergio Caltagironeによるブログ投稿。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://car.mitre.org/wiki/Main_Page" target="_blank">Cyber Analytics Repository by MITRE</a>
        </td>
        <td>
            サイバー・アナリティクス・リポジトリ(CAR)は、アドバーサリー・戦術、テクニック、共通知識に基づいてMITREが開発した分析の知識ベースです。ATT&CKTM)脅威モデル。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a>
        </td>
        <td>
            新着情報 <a href="https://cti-cmm.org/" target="_blank">Cyber Threat Intelligence Capability Maturity Model (CTI-CMM)</a> ステークホルダー・ファースト・アプローチを使用して、 <a href="https://www.energy.gov/ceser/cybersecurity-capability-maturity-model-c2m2" target="_blank">Cybersecurity Capability Maturity Model (C2M2)</a> チームの力を高め、永続的な価値を創造します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/mitre/cti" target="_blank">Cyber Threat Intelligence Repository by MITRE</a>
        </td>
        <td>
            サイバー脅威インテリジェンスのリポジトリ ATT&CK そして、 CAPEC で表現されるカタログ STIX 2.0 ジェイソン
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.tandfonline.com/doi/full/10.1080/08850607.2020.1780062" target="_blank">Cyber Threat Intelligence: A Product Without a Process?</a>
        </td>
        <td>
            現在のサイバー脅威インテリジェンス製品が不足し、健全な方法論とプロセスの導入と評価によって改善できる方法を説明する研究論文。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://cryptome.org/2015/09/cti-guide.pdf" target="_blank">Definitive Guide to Cyber Threat Intelligence</a>
        </td>
        <td>
            サイバー脅威インテリジェンスの要素を記述し、さまざまな人間とテクノロジーの消費者が収集、分析、使用する方法について議論します。 さらに、知能が戦術的、運用的、戦略的レベルでサイバーセキュリティを改善する方法と、攻撃を早期停止し、防御力を高め、典型的な管理でサイバーセキュリティの問題についてより生産的に話すことができる方法を検討しています。 <i>ダミー用</i> スタイル。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://ryanstillions.blogspot.nl/2014/04/the-dml-model_21.html" target="_blank">The Detection Maturity Level (DML)</a>
        </td>
        <td>
            DMLモデルは、サイバー攻撃を検知する際の成熟度を参照するための機能成熟モデルです。
            インテル主導の検出と応答を実行し、成熟した検出プログラムを持つことに重点を置いた組織のために設計されています。
            組織の成熟度は、単に関連した知性を得る能力ではなく、その知能を効果的に検出および応答機能に適用する能力です。
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/diamond.pdf" target="_blank">The Diamond Model of Intrusion Analysis</a>
        </td>
        <td>
            この論文は、Diamond Model、認知フレームワーク、分析機器を提示し、侵入解析をサポートおよび改善します。 増加した測定性、検査性、繰り返し性を侵入分析し、より高い効果、効率性、逆転の精度を実現するために、主要な貢献の一つです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/a547092.pdf" target="_blank">The Targeting Process: D3A and F3EAD</a>
        </td>
        <td>
            F3EADは、操作と知能を組み合わせた軍事的方法論です。
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/NIST.SP.800-150.pdf" target="_blank">Guide to Cyber Threat Information Sharing by NIST</a>
        </td>
        <td>
            サイバー脅威情報共有ガイド(NIST特別出版 800-)150) 脅威インテリジェンスと継続的な協調を積極的に共有することにより、パートナーの集団的知識、経験、能力を活用するコンピュータセキュリティインシデント対応能力を確立するための組織を支援します。 ガイドは、情報共有コミュニティに参加し、インシデント関連データを保護するデータの作成と消費を含む、インシデント処理の調整に関するガイドラインを提供します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/Intelligence Preparation for the Battlefield-Battlespace.pdf" target="_blank">Intelligence Preparation of the Battlefield/Battlespace</a>
        </td>
        <td>
            この出版物は、軍事意思決定と計画プロセスの重要なコンポーネントとして、戦闘スペース(IPB)のインテリジェンス準備とIPBが意思決定をサポートし、プロセスと継続的な活動を統合することについて議論しています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.lockheedmartin.com/content/dam/lockheed/data/corporate/documents/LM-White-Paper-Intel-Driven-Defense.pdf" target="_blank">Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains</a>
        </td>
        <td>
            この紙に示すように、侵入の殺害鎖は、侵入分析、インジケータ抽出、防御的な行動を構成されたアプローチを提供します。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.isao.org" target="_blank">ISAO Standards Organization</a>
        </td>
        <td>
            ザ・オブ・ザ・ ISAO Standards Organization 10月1日(水)に非政府機関を設立 2015. その使命は、サイバーセキュリティリスク、インシデント、ベストプラクティスに関連する堅牢かつ効果的な情報共有のための基準とガイドラインを識別することによって、Nationのサイバーセキュリティ姿勢を改善することです。
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/jp2_0.pdf" target="_blank">Joint Publication 2-0: Joint Intelligence</a>
        </td>
        <td>
            米国の軍隊によるこの出版物は共同知能の教義の核を形作り、徹底的なチームに操作、計画および知能を統合する基礎を置きます。 提示された概念は(サイバー)脅威インテリジェンスにも適用可能です。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://download.microsoft.com/download/8/0/1/801358EC-2A0A-4675-A2E7-96C2E7B93E73/Framework_for_Cybersecurity_Info_Sharing.pdf" target="_blank">Microsoft Research Paper</a>
        </td>
        <td>
            サイバーセキュリティ情報の共有とリスク低減のためのフレームワーク。 Microsoftによる高レベルの概要用紙。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://tools.ietf.org/html/draft-dulaunoy-misp-core-format-00" target="_blank">MISP Core Format (draft)</a>
        </td>
        <td>
            このドキュメントでは、 MISP 指標と脅威情報を交換するために使用されるコア形式 MISP (マルウェア情報と脅威共有プラットフォーム) インスタンス。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.necoma-project.eu/" target="_blank">NECOMA Project</a>
        </td>
        <td>
            日本欧州のサイバー防衛強化多層脅威分析(NECOMA)の研究プロジェクトは、脅威データ収集と分析の改善を目的とし、新たなサイバー防衛メカニズムの開発・実証を行っています。
            プロジェクトの一環として、いくつかの出版物やソフトウェアプロジェクトが公開されています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="docs/pyramidofpain.pdf" target="_blank">Pyramid of Pain</a>
        </td>
        <td>
            痛みのピラミッドは、異なるレベルの指標を得るの難しさを表現するためのグラフィカルな方法です。そして、ディフェンダーによって得られるときのリソースの広告の量を費やす必要があります。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.amazon.com/Structured-Analytic-Techniques-Intelligence-Analysis/dp/1452241511" target="_blank">Structured Analytic Techniques For Intelligence Analysis</a>
        </td>
        <td>
            この本には、知能、法執行、ホームランドのセキュリティ、ビジネス分析における最新のベストプラクティスを表す方法が含まれています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="./docs/mwr-threat-intelligence-whitepaper.pdf" target="_blank">Threat Intelligence: Collecting, Analysing, Evaluating</a>
        </td>
        <td>
            MWR InfoSecurityによるこのレポートは、戦略的、戦術的、運用上の変化を含むいくつかの種類の脅威インテリジェンスを明らかに説明しています。 また、脅威インテリジェンスの要求評価、収集、分析、生産および評価のプロセスについても議論します。 また、MWR InfoSecurity が定義する脅威インテリジェンスのそれぞれにいくつかのクイックウィンと成熟モデルが含まれています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://aisel.aisnet.org/wi2017/track08/paper/3/" target="_blank">Threat Intelligence Sharing Platforms: An Exploratory Study of Software Vendors and Research Perspectives</a>
        </td>
        <td>
            22 脅威インテリジェンス共有プラットフォーム(TISP)の系統的研究は、脅威インテリジェンスの使用状況、その定義、および TISP の現在の状態に関する8つの主要な発見をサーフしています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.us-cert.gov/tlp" target="_blank">Traffic Light Protocol</a>
        </td>
        <td>
            トラフィックライトプロトコル(TLP)は、機密情報が正しい聴衆と共有されていることを確認するために使用される指定のセットです。 異なる感度と、受取人によって適用される対応する共有の検討を示す4色を採用しています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://pan-unit42.github.io/playbook_viewer/" target="_blank">Unit42 Playbook Viewer</a>
        </td> 
        <td>
            Playbookの目標は、他の人と共有し、上に構築することができる構造化されたフォーマットに広告が使用するツール、テクニック、および手順を整理することです。 アドバーサリーの Playbook を構造化し、共有するフレームワークは MITRE の ATT&CK フレームワークとフレームワーク STIX 2.0
        </td>    
    </tr>
    <tr>
        <td>
            <a href="docs/sans-whos-using-cyberthreat-intelligence-and-how.pdf" target="_blank">Who's Using Cyberthreat Intelligence and How?</a>
        </td>
        <td>
            SANSインスティテュートのホワイトペーパーでは、Threat Intelligenceの活用方法を解説しています。
        </td>
    </tr>
    <tr>
        <td>
            <a href="http://www.wombat-project.eu/" target="_blank">WOMBAT Project</a>
        </td>
        <td>
            ザ・オブ・ザ・ WOMBAT project インターネット経済とネット市民を標的とする既存および新興の脅威を理解する新しい手段を提供することを目指しています。 この目標に到達するために、提案には、さまざまな分析手法により、多様なセキュリティ関連生データのセット(i)リアルタイム収集、および(iii)根本によるこの入力の充実、および(iii)根本原因の特定と理解が含まれている3つの主要なワークパッケージが含まれます。
        </td>
    </tr>
</table>



## ライセンス

[Apache License 2.0](LICENSE) のもとでライセンスされています。
