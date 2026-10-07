# このリストはもう更新されていません。

## Awesome Red Teaming

素晴らしいレッドチーム / レッドティーミング リソースのリスト

このリストは、レッドティーミングについて学びたいが、開始点がない人を対象としています。

いずれにせよ、これは生きた資源であり、[Mitre ATT&CK](https://attack.mitre.org/wiki/Main_Page)に基づく最新の敵対的戦術と技術で定期的に更新される予定です。

プルリクエストを送信して、より多くの情報を追加することでお手伝いできます。


Table of Contents
=================

 * [初期アクセス](#-initial-access)
 * [実行](#-execution)
 * [永続化](#-persistence)
 * [権限昇格](#-privilege-escalation)
 * [防御回避](#-defense-evasion)
 * [認証情報アクセス](#-credential-access)
 * [探索](#-discovery)
 * [横方向の移動](#-lateral-movement)
 * [収集](#-collection)
 * [流出](#-exfiltration)
 * [コマンドおよび制御](#-command-and-control)
 * [組込みおよび周辺デバイスのハッキング](#-embedded-and-peripheral-devices-hacking)
 * [その他](#-misc)
 * [レッドチームガジェット](#-redteam-gadgets)
 * [電子書籍](#-ebooks)
 * [トレーニング](#-training--free-)
 * [認定](#-certification)
 

## [↑](#table-of-contents) 初期アクセス {#-initial-access}
* [初期アクセスへのヒッチハイカーズガイド](https://posts.specterops.io/the-hitchhikers-guide-to-initial-access-57b66aa80dd6)
* [方法：Empireのクロスプラットフォームオフィスマクロ](https://www.blackhillsinfosec.com/empires-cross-platform-office-macro/)
* [PowerPointでのフィッシング](https://www.blackhillsinfosec.com/phishing-with-powerpoint/)
* [EMPIREを使用したフィッシング](https://enigma0x3.net/2016/03/15/phishing-with-empire/)
* [Bash Bunny](https://hakshop.com/products/bash-bunny)
* [OWASP ソーシャルエンジニアリングプレゼンテーション - OWASP](https://owasp.org/www-pdf-archive/Presentation_Social_Engineering.pdf)
* [USBドロップ攻撃：「失われた見つかった」サムドライブの危険性](https://www.redteamsecure.com/usb-drop-attacks-the-danger-of-lost-and-found-thumb-drives/)
* [ソーシャルエンジニアリング用のデータサイエンスの武装化：Twitterでの自動E2Eスピアフィッシング - Defcon 24](https://media.defcon.org/DEF%20CON%2024/DEF%20CON%2024%20presentations/DEF%20CON%2024%20-%20Seymour-Tully-Weaponizing-Data-Science-For-Social-Engineering-WP.pdf)
* [Cobalt Strike - スピアフィッシングドキュメント](https://www.cobaltstrike.com/help-spear-phish)
* [Cobalt Strike ブログ - ゴートゥフィッシング技術またはエクスプロイトは何ですか？](https://blog.cobaltstrike.com/2014/12/17/whats-the-go-to-phishing-technique-or-exploit/)
* [Cobalt Strikeを使用したスピアフィッシング - Raphael Mudge](https://www.youtube.com/watch?v=V7UJjVcq2Ao)
* [電子メール偵察およびフィッシングテンプレート生成の簡素化](https://cybersyndicates.com/2016/05/email-reconnaissance-phishing-template-generation-made-simple/)
* [アクセス用のフィッシング](http://www.rvrsh3ll.net/blog/phishing/phishing-for-access/)
* [PowerShellを使用したExcelマクロ](https://4sysops.com/archives/excel-macros-with-powershell/)
* [PowerPointとカスタムアクション](https://phishme.com/powerpoint-and-custom-actions/)
* [MSWordでのマクロレスコード実行](https://sensepost.com/blog/2017/macro-less-code-exec-in-msword/)
* [マルチプラットフォームマクロフィッシングペイロード](https://medium.com/@malcomvetter/multi-platform-macro-phishing-payloads-3b688e8eff68)
* [フィッシング用にMicrosoft Word機能を悪用する：「subDoc」](https://rhinosecuritylabs.com/research/abusing-microsoft-word-features-phishing-subdoc/)
* [保護された表示に対するフィッシング](https://enigma0x3.net/2017/07/13/phishing-against-protected-view/)
* [POWERSHELL EMPIRE STAGERS 1：オフィスマクロを使用したフィッシングとAVS回避](https://fzuckerman.wordpress.com/2016/10/06/powershell-empire-stagers-1-phishing-with-an-office-macro-and-evading-avs/)
* [PlugBot：ハードウェアボットネット研究プロジェクト](https://www.redteamsecure.com/the-plugbot-hardware-botnet-research-project/)
* [Luckystrike：邪悪なオフィスドキュメントジェネレータ](https://www.shellntel.com/blog/2016/9/13/luckystrike-a-database-backed-evil-macro-generator)
* [CSV注入の不当に過小評価された危険性](http://georgemauer.net/2017/10/07/csv-injection.html)
* [Yaraルールで検出を回避するマクロレスDOCマルウェア](https://furoner.wordpress.com/2017/10/17/macroless-malware-that-avoids-detection-with-yara-rule/amp/)
* [アプリホワイトリスト間のフィッシング](https://medium.com/@vivami/phishing-between-the-app-whitelists-1b7dcdab4279)
* [MSOfficeドキュメントプロパティからのMetasploitおよびEmpireペイロード実行（パート1/2）](https://stealingthe.network/executing-metasploit-empire-payloads-from-ms-office-document-properties-part-1-of-2/)
* [MSOfficeドキュメントプロパティからのMetasploitおよびEmpireペイロード実行（パート2/2）](https://stealingthe.network/executing-metasploit-empire-payloads-from-ms-office-document-properties-part-2-of-2/)
* [ソーシャルエンジニアポータル](https://www.social-engineer.org/)
* [7つの最高のソーシャルエンジニアリング攻撃](http://www.darkreading.com/the-7-best-social-engineering-attacks-ever/d/d-id/1319411)
* [ビッグデータスパイをスパイするためのソーシャルエンジニアリング戦術 - RSA Conference Europe 2012](https://www.rsaconference.com/writable/presentations/file_upload/das-301_williams_rader.pdf)
* [POWERSHELL EMPIREでのDDE攻撃の使用](https://1337red.wordpress.com/using-the-dde-attack-with-powershell-empire/)
* [Twitterでのフィッシング - POT](https://www.kitploit.com/2018/02/pot-phishing-on-twitter.html)
* [Microsoft Office – フレームセット経由のNTLMハッシュ](https://pentestlab.blog/2017/12/18/microsoft-office-ntlm-hashes-via-frameset/)
* [深層防御のライトアップ](https://oddvar.moe/2017/09/13/defense-in-depth-writeup/)
* [スピアフィッシング101](https://blog.inspired-sec.com/archive/2017/05/07/Phishing.html)

 
## [↑](#table-of-contents) 実行 {#-execution} 
* [CMSTP.exeに関する研究](https://msitpros.com/?p=3960)
* [リモートペイロードをダウンロードして任意のコードを実行するWindowsワンライナー](https://arno0x0x.wordpress.com/2017/11/20/windows-oneliners-to-download-remote-payload-and-execute-arbitrary-code/)
* [PowerShell診断スクリプトでコマンドを実行してAppLockerをバイパスする](https://bohops.com/2017/12/02/clickonce-twice-or-thrice-a-technique-for-social-engineering-and-untrusted-command-execution/)
* [WSH注入：ケーススタディ](https://posts.specterops.io/wsh-injection-a-case-study-fd35f79d29dd)
* [Gスクリプトドロッパー](http://lockboxx.blogspot.com/2018/02/intro-to-using-gscript-for-red-teams.html)

 
## [↑](#table-of-contents) 永続化 {#-persistence}
* [永続性の見方](https://rastamouse.me/blog/view-of-persistence/)
* [psreflectを使用したレジストリキーの隠蔽](https://posts.specterops.io/hiding-registry-keys-with-psreflect-b18ec5ac8353)
* [RunOnceExを使用した永続化 – Autoruns.exeから非表示](https://oddvar.moe/2018/03/21/persistence-using-runonceex-hidden-from-autoruns-exe/)
* [イメージファイル実行オプションでGlobalFlagsを使用した永続化 – Autoruns.exeから非表示](https://oddvar.moe/2018/04/10/persistence-using-globalflags-in-image-file-execution-options-hidden-from-autoruns-exe/)
* [代替データストリームにデータを入れてそれを実行する方法 – パート2](https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/)
* [Cobalt StrikeでのWMI永続化](https://blog.inspired-sec.com/archive/2017/01/20/WMI-Persistence.html)
* [バイパス、回避、および永続化用のINF-SCTフェッチおよび実行技術の活用](https://bohops.com/2018/02/26/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence/)
* [バイパス、回避、および永続化用のINF-SCTフェッチおよび実行技術の活用（パート2）](https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/)
* [Vshadow：ボリュームシャドウサービスの悪用による回避、永続化、およびActive Directoryデータベース抽出](https://bohops.com/2018/02/10/vshadow-abusing-the-volume-shadow-service-for-evasion-persistence-and-active-directory-database-extraction/)
 
## [↑](#table-of-contents) 権限昇格 {#-privilege-escalation}

### User Account Control のバイパス
* [最初のエントリ：ウェルカムとファイルレスUACバイパス](https://winscripting.blog/2017/05/12/first-entry-welcome-and-uac-bypass/)
* [スケジュールされたタスクで環境変数を悪用してUACをバイパスする](https://tyranidslair.blogspot.ru/2017/05/exploiting-environment-variables-in.html)
* UACを読み込み方法で3つのパートをバイパスします：
   [パート1。](https://tyranidslair.blogspot.ru/2017/05/reading-your-way-around-uac-part-1.html)
   [パート2。](https://tyranidslair.blogspot.ru/2017/05/reading-your-way-around-uac-part-2.html)
   [パート3。](https://tyranidslair.blogspot.ru/2017/05/reading-your-way-around-uac-part-3.html)
* [アプリパスを使用したUACのバイパス](https://enigma0x3.net/2017/03/14/bypassing-uac-using-app-paths/)
* [sdclt.exeを使用した「ファイルレス」UACバイパス](https://enigma0x3.net/2017/03/17/fileless-uac-bypass-using-sdclt-exe/)
* [UACバイパスまたは3つのエスカレーションについてのストーリー](https://habrahabr.ru/company/pm/blog/328008/)
* [eventvwr.exeおよびレジストリハイジャックを使用した「ファイルレス」UACバイパス](https://enigma0x3.net/2016/08/15/fileless-uac-bypass-using-eventvwr-exe-and-registry-hijacking/)
* [ディスククリーンアップを使用してWindows 10でUACをバイパスする](https://enigma0x3.net/2016/07/22/bypassing-uac-on-windows-10-using-disk-cleanup/)
* [IARPUninstallStringLauncher COM インターフェイスを使用したUACのバイパス](http://www.freebuf.com/articles/system/116611.html)
* [sdcltを使用したファイルレスUACバイパス](https://posts.specterops.io/fileless-uac-bypass-using-sdclt-exe-3e9f9ad4e2b3)
* [Eventvwr ファイルレスUACバイパスCNA](https://www.mdsec.co.uk/2016/12/cna-eventvwr-uac-bypass/)
* [Windows 7 UACホワイトリスト](http://www.pretentiousname.com/misc/win7_uac_whitelist2.html)

### エスカレーション
* [Windows権限昇格チェックリスト](https://github.com/netbiosX/Checklists/blob/master/Windows-Privilege-Escalation.md)
* [パッチチューズデーからDA](https://blog.inspired-sec.com/archive/2017/03/17/COM-Moniker-Privesc.html)
* [権限昇格のための道](https://blog.cobaltstrike.com/2016/12/08/cobalt-strike-3-6-a-path-for-privilege-escalation/)

## [↑](#table-of-contents) 防御回避 {#-defense-evasion}
* [ウィンドウ10デバイスガード バイパス](https://github.com/tyranid/DeviceGuardBypasses)
* [アプリロッカー バイパスリスト](https://github.com/api0cradle/UltimateAppLockerByPassList)
* [ウィンドウ署名バイナリ](https://github.com/vysec/Windows-SignedBinary)
* [アプリケーションホワイトリスト スクリプト保護をバイパスします - Regsvr32.exe およびCOM スクリプトレット（.sctファイル）](http://subt0x10.blogspot.sg/2017/04/bypass-application-whitelisting-script.html)
* [MSBuild.exeを使用したアプリケーションホワイトリストのバイパス - デバイスガード例と軽減策](http://subt0x10.blogspot.sg/2017/04/bypassing-application-whitelisting.html)
* [PowerShellなしのEmpire](https://bneg.io/2017/07/26/empire-without-powershell-exe/)
* [アプリホワイトリストをバイパスするためのPowershell](https://www.blackhillsinfosec.com/powershell-without-powershell-how-to-bypass-application-whitelisting-environment-restrictions-av/)
* [わずか3ステップで署名されたmimikatz](https://github.com/secretsquirrel/SigThief)
* [sysinternalsからプロセスを隠す](https://riscybusiness.wordpress.com/2017/10/07/hiding-your-process-from-sysinternals/)
* [コード署名証明書のクローン化攻撃と防御](https://posts.specterops.io/code-signing-certificate-cloning-attacks-and-defenses-6f98657fc6ec)
* [ユーザーランドAPI監視とコード注入検出](https://0x00sec.org/t/userland-api-monitoring-and-code-injection-detection/5565)
* [メモリ内回避](https://blog.cobaltstrike.com/2018/02/08/in-memory-evasion/)
* [COMサーバーハイジャックによるAMSIのバイパス](https://posts.specterops.io/bypassing-amsi-via-com-server-hijacking-b8a3354d1aff)
* [プロセスドッペルゲンガー](https://hshrzd.wordpress.com/2017/12/18/process-doppelganging-a-new-way-to-impersonate-a-process/)
* [Microsoft ATA回避週 - 発表と第1日から第5日](http://www.labofapenetrationtester.com/2017/08/week-of-evading-microsoft-ata-day1.html)
* [VEIL-EVASION AES暗号化HTTPKEYリクエスト：サンドボックス回避](https://cybersyndicates.com/2015/06/veil-evasion-aes-encrypted-httpkey-request-module/)
* [代替データストリームにデータを入れてそれを実行する方法](https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/)
* [AppLocker – ケーススタディ – 実際にはどの程度安全でないか？ – パート1](https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/)
* [AppLocker – ケーススタディ – 実際にはどの程度安全でないか？ – パート2](https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/)
* [ケーススタディパート2に基づくAppLockerでWindowsを強化します](https://oddvar.moe/2017/12/13/harden-windows-with-applocker-based-on-case-study-part-1/)
* [ケーススタディパート2に基づくAppLockerでWindowsを強化します](https://oddvar.moe/2017/12/21/harden-windows-with-applocker-based-on-case-study-part-2/)
* [Office 365セーフリンク バイパス](https://oddvar.moe/2018/01/03/office-365-safe-links-bypass/)
* [Windows Defender 攻撃表面削減ルール バイパス](https://oddvar.moe/2018/03/15/windows-defender-attack-surface-reduction-rules-bypass/)
* [CHMを使用したデバイスガード UMCIのバイパス – CVE-2017-8625](https://oddvar.moe/2017/08/13/bypassing-device-guard-umci-using-chm-cve-2017-8625/)
* [BGInfoを使用したアプリケーションホワイトリストのバイパス](https://oddvar.moe/2017/05/18/bypassing-application-whitelisting-with-bginfo/)
* [Wifi PineAppleを使用した邪悪なキャプティブポータルのクローンと構築](https://blog.inspired-sec.com/archive/2017/01/10/cloning-captive-portals.html)
* [https://bohops.com/2018/01/23/loading-alternate-data-stream-ads-dll-cpl-binaries-to-bypass-applocker/](https://bohops.com/2018/01/23/loading-alternate-data-stream-ads-dll-cpl-binaries-to-bypass-applocker/)
* [PowerShell診断スクリプトでコマンドを実行してAppLockerをバイパスする](https://bohops.com/2018/01/07/executing-commands-and-bypassing-applocker-with-powershell-diagnostic-scripts/)
* [mavinject.exe機能の分析](https://posts.specterops.io/mavinject-exe-functionality-deconstructed-c29ab2cf5c0e)
  
## [↑](#table-of-contents) 認証情報アクセス {#-credential-access}
* [Windowsアクセストークンと代替認証情報](https://blog.cobaltstrike.com/2015/12/16/windows-access-tokens-and-alternate-credentials/)
* [reGeorgおよびEmpireでハッシュをホームに持ってくる](https://sensepost.com/blog/2016/bringing-the-hashes-home-with-regeorg-empire/)
* [Empireでパスワードをインターセプトして勝利する](https://sensepost.com/blog/2016/intercepting-passwords-with-empire-and-winning/)
* [ローカル管理者パスワードソリューション（LAPS）パート1](https://rastamouse.me/blog/laps-pt1/)
* [ローカル管理者パスワードソリューション（LAPS）パート2](https://rastamouse.me/blog/laps-pt2/)
* [SCFファイルを使用したハッシュの収集](https://1337red.wordpress.com/using-a-scf-file-to-gather-hashes/)
* [ホストセキュリティ記述子の変更によるオンデマンドリモートハッシュ抽出](https://www.harmj0y.net/blog/)
* [攻撃的な暗号化データストレージ](https://www.harmj0y.net/blog/redteaming/offensive-encrypted-data-storage/)
* [NTLM Relayingの実践ガイド](https://byt3bl33d3r.github.io/practical-guide-to-ntlm-relaying-in-2017-aka-getting-a-foothold-in-under-5-minutes.html)
* [Mimikatz DCSyncを使用してドメイン内すべての管理者のクリアテキストパスワードをダンプする](https://adsecurity.org/?p=2053)
* [ドメインパスワードハッシュをダンプする](https://pentestlab.blog/2018/07/04/dumping-domain-password-hashes/)
  
## [↑](#table-of-contents) 探索 {#-discovery}
* [最新環境で動作するレッドチーム](https://www.owasp.org/images/4/4b/Red_Team_Operating_in_a_Modern_Environment.pdf)
* [BloodHoundを使用した初めての実行](https://blog.cobaltstrike.com/2016/12/14/my-first-go-with-bloodhound/)
* [BloodHoundの紹介](https://wald0.com/?p=68)
* [レッドティーマーのGPOとOUガイド](https://wald0.com/?p=179)
* [自動派生管理者検索](https://wald0.com/?p=14)
* [ペネトレーションテスター向けグループスコーピングガイド](https://www.harmj0y.net/blog/activedirectory/a-pentesters-guide-to-group-scoping/)
* [ローカルグループ列挙](https://www.harmj0y.net/blog/redteaming/local-group-enumeration/)
* [PowerView PowerUsageシリーズ#1 - 大量ユーザープロファイル列挙](http://www.harmj0y.net/blog/powershell/the-powerview-powerusage-series-1/)
* [PowerView PowerUsageシリーズ#2 – グローバルカタログを使用してコンピュータ短縮名をマッピングする](http://www.harmj0y.net/blog/powershell/the-powerview-powerusage-series-2/)
* [PowerView PowerUsageシリーズ#3 – 外部ドメインでGPO編集権を列挙する](http://www.harmj0y.net/blog/powershell/the-powerview-powerusage-series-3/)
* [PowerView PowerUsageシリーズ#4 – クロストラストACEを探す](http://www.harmj0y.net/blog/powershell/the-powerview-powerusage-series-3/)
* [Aggressor PowerView](http://threat.tevora.com/aggressor-powerview/)
* [BloodHoundでレイアウトを置く](http://threat.tevora.com/lay-of-the-land-with-bloodhound/)
* [Active Directory権限と特権アカウントのスキャン](https://adsecurity.org/?p=3658)
* [Microsoft LAPSセキュリティおよびActive Directory LAPS構成偵察](https://adsecurity.org/?p=3164)
* [トラスト方向：Active Directory列挙とトラスト悪用のためのイネーブラー](https://bohops.com/2017/12/02/trust-direction-an-enabler-for-active-directory-enumeration-and-trust-exploitation/)
* [SPN検出](https://pentestlab.blog/2018/06/04/spn-discovery/)
   
## [↑](#table-of-contents) 横方向の移動 {#-lateral-movement} 

* [Citrixストーリー](https://rastamouse.me/blog/a-citrix-story/)
* [RDPでネットワーク分離を飛び越える](https://rastamouse.me/blog/rdp-jump-boxes/)
* [パスハッシュパスチケット痛みなし](http://resources.infosecinstitute.com/pass-hash-pass-ticket-no-pain/)
* [Active Directory権限昇格のためのDNSAdmin権限の悪用](http://www.labofapenetrationtester.com/2017/05/abusing-dnsadmins-privilege-for-escalation-in-active-directory.html)
* [フォレストトラストへの攻撃にSQL Serverを使用する](http://www.labofapenetrationtester.com/2017/03/using-sql-server-for-attacking-forest-trust.html)
* [BloodHoundをレッドティーマーに拡張する](https://www.youtube.com/watch?v=Pn7GWRXfgeI)
* [ビーコンコマンドのOPSEC上の考慮事項](https://blog.cobaltstrike.com/2017/06/23/opsec-considerations-for-beacon-commands/)
* [BloodHoundを使用した初めての実行](https://blog.cobaltstrike.com/2016/12/14/my-first-go-with-bloodhound/)
* [Kerberosパーティートリックス：Kerberosプロトコル欠陥の武装化](http://www.exumbraops.com/blog/2016/6/1/kerberos-party-tricks-weaponizing-kerberos-protocol-flaws)
* [ExcelアプリケーションとDCOMを使用した横方向の移動](https://enigma0x3.net/2017/09/11/lateral-movement-using-excel-application-and-dcom/)
* [BloodHoundでレイアウトを置く](http://threat.tevora.com/lay-of-the-land-with-bloodhound/)
* [おそらくあなたが聞いたことのない最も危険なユーザー権](https://www.harmj0y.net/blog/activedirectory/the-most-dangerous-user-right-you-probably-have-never-heard-of/)
* [エージェントレス事後搾取](https://blog.cobaltstrike.com/2016/11/03/agentless-post-exploitation/)
* [ドメイントラストへの攻撃ガイド](https://www.harmj0y.net/blog/redteaming/a-guide-to-attacking-domain-trusts/)   
* [パスザハッシュは廃止されました：長いLocalAccountTokenFilterPolicy](https://www.harmj0y.net/blog/redteaming/pass-the-hash-is-dead-long-live-localaccounttokenfilterpolicy/)
* [ターゲットKerberoasting](https://www.harmj0y.net/blog/activedirectory/targeted-kerberoasting/)
* [Mimikatzなしでのケルベロスティング](https://www.harmj0y.net/blog/powershell/kerberoasting-without-mimikatz/)
* [GPO権限の悪用](https://www.harmj0y.net/blog/redteaming/abusing-gpo-permissions/)
* [PowerViewによるActive Directory権限の悪用](https://www.harmj0y.net/blog/redteaming/abusing-active-directory-permissions-with-powerview/)
* [AS-REPのロースティング](https://www.harmj0y.net/blog/activedirectory/roasting-as-reps/)
* [CrackMapExecを使用した商品の取得：パート1](https://byt3bl33d3r.github.io/getting-the-goods-with-crackmapexec-part-1.html)
* [CrackMapExecを使用した商品の取得：パート2](https://byt3bl33d3r.github.io/getting-the-goods-with-crackmapexec-part-2.html)
* [DiskShadow：VSS回避、永続化、およびActive Directoryデータベース抽出の復帰](https://bohops.com/2018/03/26/diskshadow-the-return-of-vss-evasion-persistence-and-active-directory-database-extraction/)
* [エクスポートされた関数と公開されたDCOMインターフェイスの悪用によるパススルーコマンド実行および横方向の移動](https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/)
* [ドメイントラストへの攻撃ガイド](https://posts.specterops.io/a-guide-to-attacking-domain-trusts-971e52cb2944)
* [Outlook ホームページ – 別のRulerベクトル](https://sensepost.com/blog/2017/outlook-home-page-another-ruler-vector/)
* [Outlookフォームおよびシェル](https://sensepost.com/blog/2017/outlook-forms-and-shells/)
* [COM レジストリ構造の悪用：CLSID、LocalServer32、＆InprocServer32](https://bohops.com/2018/06/28/abusing-com-registry-structure-clsid-localserver32-inprocserver32/)
* [LethalHTA - DCOMおよびHTAを使用した新しい横方向の移動技術](https://codewhitesec.blogspot.com/2018/07/lethalhta.html)
* [別の横方向の移動技術のためのDCOMの悪用](https://bohops.com/2018/04/28/abusing-dcom-for-yet-another-lateral-movement-technique/)
   
## [↑](#table-of-contents) 収集 {#-collection}  
* [Windows 10でロック画面からクリップボードにアクセスする パート1](https://oddvar.moe/2017/01/24/accessing-clipboard-from-the-lock-screen-in-windows-10/)
* [Windows 10でロック画面からクリップボードにアクセスする パート2](https://oddvar.moe/2017/01/27/access-clipboard-from-lock-screen-in-windows-10-2/)

  
   
## [↑](#table-of-contents) 流出 {#-exfiltration}
* [DNSデータ流出 — これとは何か、どのように使用するか？](https://blog.fosec.vn/dns-data-exfiltration-what-is-this-and-how-to-use-2f6c69998822)
* [DNSトンネリング](http://resources.infosecinstitute.com/dns-tunnelling/)
* [sg1：データ暗号化、流出、秘密通信のためのスイス軍ナイフ](https://securityonline.info/sg1-swiss-army-knife-for-data-encryption-exfiltration-covert-communication/?utm_source=ReviveOldPost&utm_medium=social&utm_campaign=ReviveOldPost)
* [DNSリクエスト秘密チャネル経由のデータ流出：DNSExfiltrator](https://n0where.net/data-exfiltration-over-dns-request-covert-channel-dnsexfiltrator)
* [DET（拡張可能な）データ流出ツールキット](https://github.com/PaulSec/DET)
* [数式注入によるデータ流出パート1](https://www.notsosecure.com/data-exfiltration-formula-injection/)


## [↑](#table-of-contents) コマンドおよび制御 {#-command-and-control}

### ドメインフロント
* [Empre ドメインフロント](https://www.xorrior.com/Empire-Domain-Fronting/)
* [脱出と回避 制限されたネットワークの脱出 - Tom Steele および Chris Patten](https://www.optiv.com/blog/escape-and-evasion-egressing-restricted-networks)
* [フロント可能なドメインの検索](https://github.com/rvrsh3ll/FindFrontableDomains)
* [TORフロント – プライバシーのための隠されたサービスの利用](https://www.mdsec.co.uk/2017/02/tor-fronting-utilising-hidden-services-for-privacy/)
* [GAE C2サーバーを使用したシンプルなドメインフロント PoC](https://www.securityartwork.es/2017/01/31/simple-domain-fronting-poc-with-gae-c2-server/)
* [Cloudfrontの代替ドメインによるドメインフロント](https://www.mdsec.co.uk/2017/02/domain-fronting-via-cloudfront-alternate-domains/)
* [フロント可能なAzureドメインの検索 - thoth / Fionnbharr（@a_profligate）](https://theobsidiantower.com/2017/07/24/d0a7cfceedc42bdf3a36f2926bd52863ef28befc.html)
* [Google グループ：Censysを使用して2000以上のAzureドメインを検索するブログ投稿](https://groups.google.com/forum/#!topic/traffic-obf/7ygIXCPebwQ)
* [Cobalt Strikeを使用したHTTPSドメインフロント Google ホストのレッドチーム洞察](https://www.cyberark.com/threat-research-blog/red-team-insights-https-domain-fronting-google-hosts-using-cobalt-strike/)
* [SSL ドメインフロント 101](http://www.rvrsh3ll.net/blog/offensive/ssl-domain-fronting-101/)
* [93k個の フロント可能なCloudFront ドメインを特定した方法](https://www.peew.pw/blog/2018/2/22/how-i-identified-93k-domain-frontable-cloudfront-domains)
* [検証されたCloudFront SSLドメイン](https://medium.com/@vysec.private/validated-cloudfront-ssl-domains-27895822cea3)
* [CloudFront ハイジャック](https://www.mindpointgroup.com/blog/pen-test/cloudfront-hijacking/)
* [CloudFrunt GitHub リポジトリ](https://github.com/MindPointGroup/cloudfrunt)

### 接続プロキシ
* [Cobalt Strike DNSビーコンのリダイレクト](http://www.rvrsh3ll.net/blog/offensive/redirecting-cobalt-strike-dns-beacons/)
* [Apache2Mod書き換えセットアップ](https://github.com/n0pe-sled/Apache2-Mod-Rewrite-Setup)
* [Apachemod_rewriteを使用したCobalt Strike HTTP C2 リダイレクタ](https://bluescreenofjeff.com/2016-06-28-cobalt-strike-http-c2-redirectors-with-apache-mod_rewrite/)
* [高い評判のリダイレクタとドメインフロント](https://blog.cobaltstrike.com/2017/02/06/high-reputation-redirectors-and-domain-fronting/)
* [クラウドベースのリダイレクタによる分散ハッキング](https://blog.cobaltstrike.com/2014/01/14/cloud-based-redirectors-for-distributed-hacking/)
* [Apache mod_rewriteでインシデント対応者と戦う](https://bluescreenofjeff.com/2016-04-12-combatting-incident-responders-with-apache-mod_rewrite/)
* [Apache mod_rewriteを使用したオペレーティングシステムベースのリダイレクション](https://bluescreenofjeff.com/2016-04-05-operating-system-based-redirection-with-apache-mod_rewrite/)
* [Apache mod_rewriteを使用した無効なURIリダイレクション](https://bluescreenofjeff.com/2016-03-29-invalid-uri-redirection-with-apache-mod_rewrite/)
* [Apache mod_rewriteおよびモバイルユーザーリダイレクションでフィッシングを強化する](https://bluescreenofjeff.com/2016-03-22-strengthen-your-phishing-with-apache-mod_rewrite-and-mobile-user-redirection/)
* [ベンダーサンドボックスを回避するためのmod_rewriteルール](https://gist.github.com/curi0usJack/971385e8334e189d93a6cb4671238b10)
* [Apache RewriteMapを使用したフィッシングリンクの期限切れ](https://bluescreenofjeff.com/2016-04-19-expire-phishing-links-with-apache-rewritemap/)
* [NGINXでランダムペイロードを提供する](https://gist.github.com/jivoi/a33ace2e25515a31aa2ffbae246d98c9)
* [Mod_Rewrite 自動セットアップ](https://blog.inspired-sec.com/archive/2017/04/17/Mod-Rewrite-Automatic-Setup.html)
* [ハイブリッドCobalt Strike リダイレクタ](https://zachgrace.com/2018/02/20/cobalt_strike_redirectors.html)
* [視野を広げるレッドチーム – 最新のSAAS C2](https://cybersyndicates.com/2017/04/expand-your-horizon-red-team/)
* [RTOps：Ansibleを使用したリダイレクタ配置の自動化](http://threat.tevora.com/automating-redirector-deployment-with-ansible/)

### Webサービス
* [DropboxでのC2](https://pentestlab.blog/2017/08/29/command-and-control-dropbox/)
* [GmailでのC2](https://pentestlab.blog/2017/08/03/command-and-control-gmail/)
* [TwitterでのC2](https://pentestlab.blog/2017/09/26/command-and-control-twitter/)
* [Cobalt Strike C2用のOffice 365](https://labs.mwrinfosecurity.com/blog/tasking-office-365-for-cobalt-strike-c2/)
* [Cobalt Strikeを使用したHTTPSドメインフロント Google ホストのレッドチーム洞察](https://www.cyberark.com/threat-research-blog/red-team-insights-https-domain-fronting-google-hosts-using-cobalt-strike/)
* [Githubをc＆cサーバーとして使用する卑劣なPythonベースのWindowsバックドア](http://securityblog.gr/4434/a-stealthy-python-based-windows-backdoor-that-uses-github-as-a-cc-server/)
* [External C2（サードパーティコマンドおよび制御）](https://www.cobaltstrike.com/help-externalc2)
* [External C2 経由のCobalt Strike – ビーコンホームは最も不愉快な方法で](https://outflank.nl/blog/2017/09/17/blogpost-cobalt-strike-over-external-c2-beacon-home-in-the-most-obscure-ways/)
* [Cobalt Strike用External C2](https://github.com/ryhanson/ExternalC2/)
* [Cobalt Strike用External C2 フレームワーク](http://www.insomniacsecurity.com/2018/01/11/externalc2.html)
* [External C2 フレームワーク - GitHub リポジトリ](https://github.com/Und3rf10w/external_c2_framework)
* [クラウドでの隠蔽：Amazon APIを使用したCobalt Strike Beacon C2](https://github.com/Und3rf10w/external_c2_framework)
* [Cobalt StrikeのExternalC2フレームワークの探索](https://blog.xpnsec.com/exploring-cobalt-strikes-externalc2-framework/)

### アプリケーション層プロトコル
* [C2 WebSocket](https://pentestlab.blog/2017/12/06/command-and-control-websocket/)
* [C2 WMI](https://pentestlab.blog/2017/11/20/command-and-control-wmi/)
* [C2 ウェブサイト](https://pentestlab.blog/2017/11/14/command-and-control-website/)
* [C2 イメージ](https://pentestlab.blog/2018/01/02/command-and-control-images/)
* [C2 Javascript](https://pentestlab.blog/2018/01/08/command-and-control-javascript/)
* [C2 ウェブインターフェース](https://pentestlab.blog/2018/01/03/command-and-control-web-interface/)
* [DNS経由のC2](https://pentestlab.blog/2017/09/06/command-and-control-dns/)
* [Https経由のC2](https://pentestlab.blog/2017/10/04/command-and-control-https/)
* [Webdav経由のC2](https://pentestlab.blog/2017/09/12/command-and-control-webdav/)
* [Merlinの紹介 — クロスプラットフォーム事後搾取HTTP/2 コマンド＆制御ツール](https://medium.com/@Ne0nd0g/introducing-merlin-645da3c635a)
* [InternetExplorer.ApplicationをC2に使用する](https://adapt-and-attack.com/2017/12/19/internetexplorer-application-for-c2/)

### インフラストラクチャ
* [Terraformを使用した自動レッドチームインフラストラクチャ配置 - パート1](https://rastamouse.me/blog/terraform-pt1/)
* [Terraformを使用した自動レッドチームインフラストラクチャ配置 - パート2](https://rastamouse.me/blog/terraform-pt2/)
* [レッドチームインフラストラクチャ - AWS 暗号化EBS](https://rastamouse.me/blog/encrypted-ebs/)
* [6つのレッドチームインフラストラクチャのヒント](https://cybersyndicates.com/2016/11/top-red-team-tips/)
* [Digital Ocean でC2インフラストラクチャを構築する方法 – パート1](https://www.blackhillsinfosec.com/build-c2-infrastructure-digital-ocean-part-1/)
* [継続的なレッドチーム運用のためのインフラストラクチャ](https://blog.cobaltstrike.com/2014/09/09/infrastructure-for-ongoing-red-team-operations/)
* [攻撃インフラストラクチャログ集約および監視](https://posts.specterops.io/attack-infrastructure-log-aggregation-and-monitoring-345e4173044e)
* [ランダム化可能なMalleable C2 プロファイルを簡単に](https://bluescreenofjeff.com/2017-08-30-randomized-malleable-c2-profiles-made-easy/)
* [インフラストラクチャの移行](https://blog.cobaltstrike.com/2015/10/21/migrating-your-infrastructure/)
* [ICMP C2](https://pentestlab.blog/2017/07/28/command-and-control-icmp/)
* [秘密チャネルとしてのWebDAV機能の使用](https://arno0x0x.wordpress.com/2017/09/07/using-webdav-features-as-a-covert-channel/)
* [安全なレッドチームインフラストラクチャ](https://medium.com/@malcomvetter/safe-red-team-infrastructure-c5d6a0f13fac)
* [COBALTSTIKE＆LET'S ENCRYPTで BLUECOAT から脱出する](https://cybersyndicates.com/2016/12/egressing-bluecoat-with-cobaltstike-letsencrypt/)
* [Active Directoryを使用したコマンドおよび制御](http://www.harmj0y.net/blog/powershell/command-and-control-using-active-directory/)
* [分散レッドチーム運用のビジョン](https://blog.cobaltstrike.com/2013/02/12/a-vision-for-distributed-red-team-operations/)
* [効果的な秘密レッドチーム攻撃インフラストラクチャの設計](https://bluescreenofjeff.com/2017-12-05-designing-effective-covert-red-team-attack-infrastructure/)
* [Apache mod_rewriteを使用したランダムペイロードの提供](https://bluescreenofjeff.com/2017-06-13-serving-random-payloads-with-apache-mod_rewrite/)
* [メールサーバーが簡単に](https://blog.inspired-sec.com/archive/2017/02/14/Mail-Server-Setup.html)
* [Apache mod_rewriteを使用したEmpire C2の保護](https://thevivi.net/2017/11/03/securing-your-empire-c2-with-apache-mod_rewrite/)
* [AnsibleとDockerを使用したGophish リリースの自動化](https://jordan-wright.com/blog/post/2018-02-04-automating-gophish-releases/)
* [Cobalt Strike用のMalleable C2 プロファイルの書き方](https://bluescreenofjeff.com/2017-01-24-how-to-write-malleable-c2-profiles-for-cobalt-strike/)
* [Empireの通信プロファイルの作成方法](https://bluescreenofjeff.com/2017-03-01-how-to-make-communication-profiles-for-empire/)
* [勇敢な新世界：Malleable C2](http://www.harmj0y.net/blog/redteaming/a-brave-new-world-malleable-c2/)
* [Malleable Command and Control](https://www.cobaltstrike.com/help-malleable-c2)


## [↑](#table-of-contents) 組込みおよび周辺デバイスのハッキング {#-embedded-and-peripheral-devices-hacking}
* [Proxmark3＆ProxBruteでの認識開始](https://www.trustwave.com/Resources/SpiderLabs-Blog/Getting-in-with-the-Proxmark-3-and-ProxBrute/)
* [RFIDバッジコピーの実践ガイド](https://blog.nviso.be/2017/01/11/a-practical-guide-to-rfid-badge-copying/)
* [物理的なペネテスターバックパックの内容](https://www.tunnelsup.com/contents-of-a-physical-pen-testers-backpack/)
* [MagSpoof - クレジットカード/磁気ストライプスプーファー](https://github.com/samyk/magspoof)
* [ワイヤレスキーボード スニッファー](https://samy.pl/keysweeper/)
* [Proxmark 3でのRFIDハッキング](https://blog.kchung.co/rfid-hacking-with-the-proxmark-3/)
* [RFID向けスイス軍ナイフ](https://www.cs.bham.ac.uk/~garciaf/publications/Tutorial_Proxmark_the_Swiss_Army_Knife_for_RFID_Security_Research-RFIDSec12.pdf)
* [NFC攻撃表面の探索](https://media.blackhat.com/bh-us-12/Briefings/C_Miller/BH_US_12_Miller_NFC_attack_surface_WP.pdf)
* [スマートカードを上回る](http://gerhard.dekoninggans.nl/documents/publications/dekoninggans.phd.thesis.pdf)
* [HID iClass マスターキーのリバースエンジニアリング](https://blog.kchung.co/reverse-engineering-hid-iclass-master-keys/)
* [Androidオープンポーンプロジェクト（AOPP）](https://www.pwnieexpress.com/aopp)


## [↑](#table-of-contents) その他 {#-misc}
* [Vysecのレッドティップ](https://github.com/vysec/RedTips)
* [2016年ccdeレッドチーム向けCobalt Strike の役立つヒント](https://blog.cobaltstrike.com/2016/02/23/cobalt-strike-tips-for-2016-ccdc-red-teams/)
* [レッドチーム運用のモデル](https://blog.cobaltstrike.com/2015/07/09/models-for-red-team-operations/)
* [レッドチーム演習の計画](https://github.com/magoo/redteam-plan)
* [Raphael Mudge - ダーティレッドチームトリックス](https://www.youtube.com/watch?v=oclbbqvawQg)
* [敵対者の耐性方法論の導入 パート1](https://posts.specterops.io/introducing-the-adversary-resilience-methodology-part-one-e38e06ffd604)
* [敵対者の耐性方法論の導入 パート2](https://posts.specterops.io/introducing-the-adversary-resilience-methodology-part-two-279a1ed7863d)
* [責任あるレッドチーム](https://medium.com/@malcomvetter/responsible-red-teams-1c6209fd43cc)
* [太平洋リム CCDC 2017向けレッドティーミング](https://bluescreenofjeff.com/2017-05-02-red-teaming-for-pacific-rim-ccdc-2017/)
* [PRCCDC 2015でレッドティームを準備した方法](https://bluescreenofjeff.com/2015-04-15-how-i-prepared-to-red-team-at-prccdc-2015/)
* [太平洋リム CCDC 2016向けレッドティーミング](https://bluescreenofjeff.com/2016-05-24-pacific-rim-ccdc_2016/)
* [責任あるレッドチーム](https://medium.com/@malcomvetter/responsible-red-teams-1c6209fd43cc)
* [Awesome-CobaltStrike](https://github.com/zer0yu/Awesome-CobaltStrike)
* レッドティーミングゼロから1へ [パート-1](https://payatu.com/redteaming-from-zero-to-one-part-1) [パート-2](https://payatu.com/redteaming-zero-one-part-2)

## [↑](#table-of-contents) レッドチームガジェット {#-redteam-gadgets}
#### ネットワークインプラント
* [LAN タップ Pro](https://hackerwarehouse.com/product/lan-tap-pro/)
* [LAN タートル](https://hakshop.com/collections/network-implants/products/lan-turtle)
* [Bash Bunny](https://hakshop.com/collections/physical-access/products/bash-bunny)
* [Key Croc](https://shop.hak5.org/collections/sale/products/key-croc)
* [パケットリス](https://hakshop.com/products/packet-squirrel)
* [Shark Jack](https://shop.hak5.org/collections/sale/products/shark-jack)
#### WiFi監査
* [WiFi パイナップル](https://hakshop.com/products/wifi-pineapple)
* [Alpha ロングレンジワイヤレスUSB](https://hackerwarehouse.com/product/alfa-802-11bgn-long-range-usb-wireless-adapter/)
* [Wifi-Deauth モンスター](https://www.tindie.com/products/lspoplove/dstike-wifi-deauther-monster/)
* [Crazy PA](https://www.amazon.com/gp/product/B00VYA3A2U/ref=as_li_tl)
* [Signal Owl](https://shop.hak5.org/products/signal-owl)
#### IoT
* [BLE キー](https://hackerwarehouse.com/product/blekey/)
* [Proxmark3](https://hackerwarehouse.com/product/proxmark3-kit/)
* [Zigbee スニッファー](https://www.attify-store.com/products/zigbee-sniffing-tool-atmel-rzraven)
* [Attify IoT エクスプロイトキット](https://www.attify-store.com/collections/frontpage/products/jtag-exploitation-kit-with-lab-manual)
#### ソフトウェア定義ラジオ - SDR
* [HackRF One バンドル](https://hackerwarehouse.com/product/hackrf-one-kit/)
* [RTL-SDR](https://hackerwarehouse.com/product/rtlsdr/)
* [YARD stick one バンドル](https://hackerwarehouse.com/product/yard-stick-one-kit/)
* [Ubertooth](https://hackerwarehouse.com/product/ubertooth-one/)
#### その他
* [Key グラバー](https://hackerwarehouse.com/product/keygrabber/)
* [Magspoof](https://store.ryscc.com/products/magspoof%20)
* [ポイズンタップ](https://samy.pl/poisontap/)
* [Keysweeper](https://samy.pl/keysweeper/)
* [USB ラバーダッキー](https://hakshop.com/collections/physical-access/products/usb-rubber-ducky-deluxe)
* [スクリーン カニ](https://shop.hak5.org/collections/sale/products/screen-crab)
* [O.MG ケーブル](https://shop.hak5.org/collections/featured-makers/products/o-mg-cable)
* [Keysy](https://shop.hak5.org/collections/featured-makers/products/keysy)
* [Okta SSOのためのドロシー](https://github.com/elastic/dorothy)

## [↑](#table-of-contents) 電子書籍 {#-ebooks}
* [次世代レッドティーミング](https://www.amazon.com/Next-Generation-Teaming-Henry-Dalziel/dp/0128041714)
* [ターゲットされたサイバー攻撃](https://www.amazon.com/Targeted-Cyber-Attacks-Multi-staged-Exploits/dp/0128006048)
* [高度なペネトレーションテスト：世界で最も安全なネットワークへのハッキング](https://www.amazon.com/Advanced-Penetration-Testing-Hacking-Networks/dp/1119367689)
* [ソーシャルエンジニアプレイブック実践的な詐欺](https://www.amazon.com/Social-Engineers-Playbook-Practical-Pretexting/dp/0692306617/)
* [ハッカープレイブック3：ペネトレーションテストの実践ガイド](https://www.amazon.com/Hacker-Playbook-Practical-Penetration-Testing-ebook/dp/B07CSPFYZ2)
* [ハッカーのようにハッキングする方法：銀行への侵入プロセスのステップバイステップ](https://www.amazon.com/How-Hack-Like-PORNSTAR-breaking-ebook/dp/B01MTDLGQQ)

## [↑](#table-of-contents) トレーニング（無料） {#-training--free-}
* [Tradecraft - レッドチーム運用に関するコース](https://www.youtube.com/watch?v=IRpS7oZ3z0o&list=PL9HO6M_MU2nesxSmhJjEvwLhUoHPHmXvz)
* [高度な脅威戦術コース＆ノート](https://blog.cobaltstrike.com/2015/09/30/advanced-threat-tactics-course-and-notes/)
* [FireEye - レッドチーム運用のホワイトボードセッション](https://www.fireeye.com/services/red-team-assessments/red-team-operations-video-training.html)

#### ホームラボ
* [テスト用の効果的なActive Directoryラボ環境の構築](https://adsecurity.org/?p=2653)
* [DetectionLabの設定](https://www.c2.lol/articles/setting-up-chris-longs-detectionlab)
* [vulnerable-AD - ホームADラボを脆弱にするスクリプト](https://github.com/WazeHell/vulnerable-AD)

## [↑](#table-of-contents) 認定 {#-certification}
* [CREST 認定シミュレーション攻撃スペシャリスト](http://www.crest-approved.org/examination/certified-simulated-attack-specialist/)
* [CREST 認定シミュレーション攻撃マネージャー](http://www.crest-approved.org/examination/certified-simulated-attack-manager/)
* [SEC564：レッドチーム運用と脅威エミュレーション](https://www.sans.org/course/red-team-operations-and-threat-emulation)
* [ELearn Security ペネトレーションテスティング エクストリーム](https://www.elearnsecurity.com/course/penetration_testing_extreme/)
* [認定レッドチーム プロフェッショナル](https://www.pentesteracademy.com/activedirectorylab)
* [認定レッドティーミング エキスパート](https://www.pentesteracademy.com/redteamlab)
* [PentesterAcademy 認定エンタープライズセキュリティスペシャリスト（PACES）](https://www.pentesteracademy.com/gcb)
