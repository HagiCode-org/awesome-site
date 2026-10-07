# 此列表不再更新。

## Awesome Red Teaming

Awesome Red Team / Red Teaming 資源列表

此列表是為任何想要學習 Red Teaming 但還沒有起點的人準備的。

無論如何，這是一個活躍的資源，將根據 [Mitre ATT&CK](https://attack.mitre.org/wiki/Main_Page) 定期更新最新的對抗性戰術和技術

您可以透過發送 Pull Requests 來幫助添加更多資訊。


目錄
=================

 * [初始訪問](#-initial-access)
 * [執行](#-execution)
 * [持久化](#-persistence)
 * [權限提升](#-privilege-escalation)
 * [防禦規避](#-defense-evasion)
 * [認證存取](#-credential-access)
 * [發現](#-discovery)
 * [橫向移動](#-lateral-movement)
 * [蒐集](#-collection)
 * [資料外洩](#-exfiltration)
 * [命令與控制](#-command-and-control)
 * [嵌入式和周邊設備駭客](#-embedded-and-peripheral-devices-hacking)
 * [雜項](#-misc)
 * [紅隊小工具](#-redteam-gadgets)
 * [電子書](#-ebooks)
 * [培訓](#-training--free-)
 * [認證](#-certification)
 

## [↑](#table-of-contents) 初始訪問
* [新手指南：初始訪問](https://posts.specterops.io/the-hitchhikers-guide-to-initial-access-57b66aa80dd6)
* [如何：Empire 的跨平台 Office 宏](https://www.blackhillsinfosec.com/empires-cross-platform-office-macro/)
* [使用 PowerPoint 進行網路釣魚](https://www.blackhillsinfosec.com/phishing-with-powerpoint/)
* [使用 EMPIRE 進行網路釣魚](https://enigma0x3.net/2016/03/15/phishing-with-empire/)
* [Bash Bunny](https://hakshop.com/products/bash-bunny)
* [OWASP 社交工程簡報 - OWASP](https://owasp.org/www-pdf-archive/Presentation_Social_Engineering.pdf)
* [USB 掉落攻擊：「失物招領」隨身碟的危險](https://www.redteamsecure.com/usb-drop-attacks-the-danger-of-lost-and-found-thumb-drives/)
* [利用資料科學進行社交工程：Twitter 上的自動化端對端魚叉網路釣魚 - Defcon 24](https://media.defcon.org/DEF%20CON%2024/DEF%20CON%2024%20presentations/DEF%20CON%2024%20-%20Seymour-Tully-Weaponizing-Data-Science-For-Social-Engineering-WP.pdf)
* [Cobalt Strike - 魚叉網路釣魚文件](https://www.cobaltstrike.com/help-spear-phish)
* [Cobalt Strike 部落格 - 首選的網路釣魚技術或漏洞利用是什麼？](https://blog.cobaltstrike.com/2014/12/17/whats-the-go-to-phishing-technique-or-exploit/)
* [使用 Cobalt Strike 進行魚叉網路釣魚 - Raphael Mudge](https://www.youtube.com/watch?v=V7UJjVcq2Ao)
* [電子郵件偵察和網路釣魚範本生成變得簡單](https://cybersyndicates.com/2016/05/email-reconnaissance-phishing-template-generation-made-simple/)
* [網路釣魚以獲得存取權限](http://www.rvrsh3ll.net/blog/phishing/phishing-for-access/)
* [使用 PowerShell 的 Excel 巨集](https://4sysops.com/archives/excel-macros-with-powershell/)
* [PowerPoint 和自訂操作](https://phishme.com/powerpoint-and-custom-actions/)
* [MSWord 中的無巨集代碼執行](https://sensepost.com/blog/2017/macro-less-code-exec-in-msword/)
* [多平台巨集網路釣魚載荷](https://medium.com/@malcomvetter/multi-platform-macro-phishing-payloads-3b688e8eff68)
* [濫用 Microsoft Word 功能進行網路釣魚：「subDoc」](https://rhinosecuritylabs.com/research/abusing-microsoft-word-features-phishing-subdoc/)
* [針對受保護檢視的網路釣魚](https://enigma0x3.net/2017/07/13/phishing-against-protected-view/)
* [POWERSHELL EMPIRE STAGERS 1：使用 OFFICE 宏進行網路釣魚並規避防毒軟體](https://fzuckerman.wordpress.com/2016/10/06/powershell-empire-stagers-1-phishing-with-an-office-macro-and-evading-avs/)
* [PlugBot：硬體殭屍網路研究項目](https://www.redteamsecure.com/the-plugbot-hardware-botnet-research-project/)
* [Luckystrike：邪惡 Office 文件產生器](https://www.shellntel.com/blog/2016/9/13/luckystrike-a-database-backed-evil-macro-generator)
* [CSV 注入的極度被低估的危險](http://georgemauer.net/2017/10/07/csv-injection.html)
* [無巨集 DOC 惡意軟體，使用 Yara 規則規避偵測](https://furoner.wordpress.com/2017/10/17/macroless-malware-that-avoids-detection-with-yara-rule/amp/)
* [在應用程式白名單之間進行網路釣魚](https://medium.com/@vivami/phishing-between-the-app-whitelists-1b7dcdab4279)
* [從 MS Office 文件屬性執行 Metasploit 和 Empire 載荷（第 1 部分）](https://stealingthe.network/executing-metasploit-empire-payloads-from-ms-office-document-properties-part-1-of-2/)
* [從 MS Office 文件屬性執行 Metasploit 和 Empire 載荷（第 2 部分）](https://stealingthe.network/executing-metasploit-empire-payloads-from-ms-office-document-properties-part-2-of-2/)
* [社交工程入口網站](https://www.social-engineer.org/)
* [7 大社交工程攻擊](http://www.darkreading.com/the-7-best-social-engineering-attacks-ever/d/d-id/1319411)
* [在大數據間諜活動中使用社交工程戰術 - RSA Conference Europe 2012](https://www.rsaconference.com/writable/presentations/file_upload/das-301_williams_rader.pdf)
* [使用 POWERSHELL EMPIRE 的 DDE 攻擊](https://1337red.wordpress.com/using-the-dde-attack-with-powershell-empire/)
* [Twitter 上的網路釣魚 - POT](https://www.kitploit.com/2018/02/pot-phishing-on-twitter.html)
* [Microsoft Office：透過 Frameset 的 NTLM 雜湊](https://pentestlab.blog/2017/12/18/microsoft-office-ntlm-hashes-via-frameset/)
* [深度防禦寫法](https://oddvar.moe/2017/09/13/defense-in-depth-writeup/)
* [魚叉網路釣魚 101](https://blog.inspired-sec.com/archive/2017/05/07/Phishing.html)

 
## [↑](#table-of-contents) 執行 
* [CMSTP.exe 研究，](https://msitpros.com/?p=3960)
* [Windows 單行指令以下載遠端載荷並執行任意代碼](https://arno0x0x.wordpress.com/2017/11/20/windows-oneliners-to-download-remote-payload-and-execute-arbitrary-code/)
* [使用 PowerShell 診斷指令碼執行指令並繞過 AppLocker](https://bohops.com/2017/12/02/clickonce-twice-or-thrice-a-technique-for-social-engineering-and-untrusted-command-execution/)
* [WSH 注入：案例研究](https://posts.specterops.io/wsh-injection-a-case-study-fd35f79d29dd)
* [Gscript 掉落程序](http://lockboxx.blogspot.com/2018/02/intro-to-using-gscript-for-red-teams.html)

 
## [↑](#table-of-contents) 持久化
* [持久化概覽](https://rastamouse.me/blog/view-of-persistence/)
* [使用 psreflect 隱藏登錄機碼](https://posts.specterops.io/hiding-registry-keys-with-psreflect-b18ec5ac8353)
* [使用 RunOnceEx 進行持久化：從 Autoruns.exe 隱藏](https://oddvar.moe/2018/03/21/persistence-using-runonceex-hidden-from-autoruns-exe/)
* [使用映像檔案執行選項中的 GlobalFlags 進行持久化：從 Autoruns.exe 隱藏](https://oddvar.moe/2018/04/10/persistence-using-globalflags-in-image-file-execution-options-hidden-from-autoruns-exe/)
* [將資料放入替代資料流並執行它 - 第 2 部分](https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/)
* [使用 Cobalt Strike 的 WMI 持久化](https://blog.inspired-sec.com/archive/2017/01/20/WMI-Persistence.html)
* [利用 INF-SCT Fetch & Execute 技術進行繞過、規避和持久化](https://bohops.com/2018/02/26/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence/)
* [利用 INF-SCT Fetch & Execute 技術進行繞過、規避和持久化（第 2 部分）](https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/)
* [Vshadow：濫用磁區卷影副本服務進行規避、持久化和 Active Directory 資料庫提取](https://bohops.com/2018/02/10/vshadow-abusing-the-volume-shadow-service-for-evasion-persistence-and-active-directory-database-extraction/)
 
## [↑](#table-of-contents) 權限提升

### 使用者帳戶控制繞過
* [首次進入：歡迎和無檔案 UAC 繞過，](https://winscripting.blog/2017/05/12/first-entry-welcome-and-uac-bypass/)
* [在計劃工作中濫用環境變數以進行 UAC 繞過，](https://tyranidslair.blogspot.ru/2017/05/exploiting-environment-variables-in.html)
* 透過閱讀方式繞過 UAC，分為 3 部分：
   [第 1 部分。](https://tyranidslair.blogspot.ru/2017/05/reading-your-way-around-uac-part-1.html)
   [第 2 部分。](https://tyranidslair.blogspot.ru/2017/05/reading-your-way-around-uac-part-2.html)
   [第 3 部分。](https://tyranidslair.blogspot.ru/2017/05/reading-your-way-around-uac-part-3.html)
* [使用應用程式路徑繞過 UAC，](https://enigma0x3.net/2017/03/14/bypassing-uac-using-app-paths/)
* [使用 sdclt.exe 進行「無檔案」UAC 繞過，](https://enigma0x3.net/2017/03/17/fileless-uac-bypass-using-sdclt-exe/)
* [UAC 繞過或關於三個提升的故事，](https://habrahabr.ru/company/pm/blog/328008/)
* [使用 eventvwr.exe 和登錄機碼劫持進行「無檔案」UAC 繞過，](https://enigma0x3.net/2016/08/15/fileless-uac-bypass-using-eventvwr-exe-and-registry-hijacking/)
* [使用磁碟清理繞過 Windows 10 上的 UAC，](https://enigma0x3.net/2016/07/22/bypassing-uac-on-windows-10-using-disk-cleanup/)
* [使用 IARPUninstallStringLauncher COM 介面繞過 UAC，](http://www.freebuf.com/articles/system/116611.html)
* [使用 sdclt 進行無檔案 UAC 繞過](https://posts.specterops.io/fileless-uac-bypass-using-sdclt-exe-3e9f9ad4e2b3)
* [Eventvwr 無檔案 UAC 繞過 CNA](https://www.mdsec.co.uk/2016/12/cna-eventvwr-uac-bypass/)
* [Windows 7 UAC 白名單](http://www.pretentiousname.com/misc/win7_uac_whitelist2.html)

### 權限提升
* [Windows 權限提升檢查清單](https://github.com/netbiosX/Checklists/blob/master/Windows-Privilege-Escalation.md)
* [從修補星期二到 DA](https://blog.inspired-sec.com/archive/2017/03/17/COM-Moniker-Privesc.html)
* [權限提升的路徑](https://blog.cobaltstrike.com/2016/12/08/cobalt-strike-3-6-a-path-for-privilege-escalation/)

## [↑](#table-of-contents) 防禦規避
* [Window 10 Device Guard 繞過](https://github.com/tyranid/DeviceGuardBypasses)
* [應用程式鎖定繞過列表](https://github.com/api0cradle/UltimateAppLockerByPassList)
* [Windows 簽署的二進制文件](https://github.com/vysec/Windows-SignedBinary)
* [繞過應用程式白名單指令碼保護 - Regsvr32.exe 和 COM Scriptlets (.sct 檔)](http://subt0x10.blogspot.sg/2017/04/bypass-application-whitelisting-script.html)
* [使用 MSBuild.exe 繞過應用程式白名單 - Device Guard 範例和緩解措施](http://subt0x10.blogspot.sg/2017/04/bypassing-application-whitelisting.html)
* [不用 PowerShell 的 Empire](https://bneg.io/2017/07/26/empire-without-powershell-exe/)
* [不用 Powershell 來繞過應用程式白名單](https://www.blackhillsinfosec.com/powershell-without-powershell-how-to-bypass-application-whitelisting-environment-restrictions-av/)
* [只需 3 步的 MS 簽署 mimikatz](https://github.com/secretsquirrel/SigThief)
* [從 Sysinternals 中隱藏您的流程](https://riscybusiness.wordpress.com/2017/10/07/hiding-your-process-from-sysinternals/)
* [代碼簽署憑證克隆攻擊和防禦](https://posts.specterops.io/code-signing-certificate-cloning-attacks-and-defenses-6f98657fc6ec)
* [使用者級 API 監控和代碼注入偵測](https://0x00sec.org/t/userland-api-monitoring-and-code-injection-detection/5565)
* [記憶體內規避](https://blog.cobaltstrike.com/2018/02/08/in-memory-evasion/)
* [透過 COM 伺服器劫持繞過 AMSI](https://posts.specterops.io/bypassing-amsi-via-com-server-hijacking-b8a3354d1aff)
* [流程替身](https://hshrzd.wordpress.com/2017/12/18/process-doppelganging-a-new-way-to-impersonate-a-process/)
* [規避 Microsoft ATA 一周 - 公告和第 1 天至第 5 天](http://www.labofapenetrationtester.com/2017/08/week-of-evading-microsoft-ata-day1.html)
* [VEIL-EVASION AES 加密 HTTPKEY 請求：沙箱規避](https://cybersyndicates.com/2015/06/veil-evasion-aes-encrypted-httpkey-request-module/)
* [將資料放入替代資料流並執行它](https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/)
* [AppLocker：案例研究：它到底有多不安全？第 1 部分](https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/)
* [AppLocker：案例研究：它到底有多不安全？第 2 部分](https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/)
* [使用 AppLocker 強化 Windows：基於案例研究第 2 部分](https://oddvar.moe/2017/12/13/harden-windows-with-applocker-based-on-case-study-part-1/)
* [使用 AppLocker 強化 Windows：基於案例研究第 2 部分](https://oddvar.moe/2017/12/21/harden-windows-with-applocker-based-on-case-study-part-2/)
* [Office 365 安全連結繞過](https://oddvar.moe/2018/01/03/office-365-safe-links-bypass/)
* [Windows Defender 攻擊面減少規則繞過](https://oddvar.moe/2018/03/15/windows-defender-attack-surface-reduction-rules-bypass/)
* [使用 CHM 繞過 Device guard UMCI - CVE-2017-8625](https://oddvar.moe/2017/08/13/bypassing-device-guard-umci-using-chm-cve-2017-8625/)
* [使用 BGInfo 繞過應用程式白名單](https://oddvar.moe/2017/05/18/bypassing-application-whitelisting-with-bginfo/)
* [使用 Wifi PineApple 克隆和託管邪惡的強制入口網站](https://blog.inspired-sec.com/archive/2017/01/10/cloning-captive-portals.html)
* [https://bohops.com/2018/01/23/loading-alternate-data-stream-ads-dll-cpl-binaries-to-bypass-applocker/](https://bohops.com/2018/01/23/loading-alternate-data-stream-ads-dll-cpl-binaries-to-bypass-applocker/)
* [使用 PowerShell 診斷指令碼執行指令並繞過 AppLocker](https://bohops.com/2018/01/07/executing-commands-and-bypassing-applocker-with-powershell-diagnostic-scripts/)
* [mavinject.exe 功能解構](https://posts.specterops.io/mavinject-exe-functionality-deconstructed-c29ab2cf5c0e)
  
## [↑](#table-of-contents) 認證存取
* [Windows 存取權杖和替代認證](https://blog.cobaltstrike.com/2015/12/16/windows-access-tokens-and-alternate-credentials/)
* [使用 reGeorg 和 Empire 將雜湊帶回家](https://sensepost.com/blog/2016/bringing-the-hashes-home-with-regeorg-empire/)
* [使用 Empire 攔截密碼並獲勝](https://sensepost.com/blog/2016/intercepting-passwords-with-empire-and-winning/)
* [本地系統管理員密碼解決方案 (LAPS) 第 1 部分](https://rastamouse.me/blog/laps-pt1/)
* [本地系統管理員密碼解決方案 (LAPS) 第 2 部分](https://rastamouse.me/blog/laps-pt2/)
* [使用 SCF 檔案蒐集雜湊](https://1337red.wordpress.com/using-a-scf-file-to-gather-hashes/)
* [按需進行遠端雜湊提取（透過主機安全描述符修改）](https://www.harmj0y.net/blog/)
* [攻擊性加密資料存儲](https://www.harmj0y.net/blog/redteaming/offensive-encrypted-data-storage/)
* [NTLM 中繼的實用指南](https://byt3bl33d3r.github.io/practical-guide-to-ntlm-relaying-in-2017-aka-getting-a-foothold-in-under-5-minutes.html)
* [使用 Mimikatz DCSync 為網域中的所有管理員轉儲清晰文字密碼](https://adsecurity.org/?p=2053)
* [轉儲網域密碼雜湊](https://pentestlab.blog/2018/07/04/dumping-domain-password-hashes/)
  
## [↑](#table-of-contents) 發現
* [Red Team 在現代環境中的運作](https://www.owasp.org/images/4/4b/Red_Team_Operating_in_a_Modern_Environment.pdf)
* [我的第一次 BloodHound 經歷](https://blog.cobaltstrike.com/2016/12/14/my-first-go-with-bloodhound/)
* [BloodHound 簡介](https://wald0.com/?p=68)
* [Red Teamer 的 GPOs 和 OUs 指南](https://wald0.com/?p=179)
* [自動化衍生系統管理員搜尋](https://wald0.com/?p=14)
* [滲透測試人員的群組範圍指南](https://www.harmj0y.net/blog/activedirectory/a-pentesters-guide-to-group-scoping/)
* [本地群組列舉](https://www.harmj0y.net/blog/redteaming/local-group-enumeration/)
* [PowerView PowerUsage 系列 #1 - 大量使用者設定檔列舉](http://www.harmj0y.net/blog/powershell/the-powerview-powerusage-series-1/)
* [PowerView PowerUsage 系列 #2：將電腦簡稱與全域編錄對應](http://www.harmj0y.net/blog/powershell/the-powerview-powerusage-series-2/)
* [PowerView PowerUsage 系列 #3：在外部網域中列舉 GPO 編輯權限](http://www.harmj0y.net/blog/powershell/the-powerview-powerusage-series-3/)
* [PowerView PowerUsage 系列 #4：尋找跨信任 ACEs](http://www.harmj0y.net/blog/powershell/the-powerview-powerusage-series-3/)
* [Aggressor PowerView](http://threat.tevora.com/aggressor-powerview/)
* [使用 BloodHound 查看土地](http://threat.tevora.com/lay-of-the-land-with-bloodhound/)
* [掃描 Active Directory 特權和特權帳戶](https://adsecurity.org/?p=3658)
* [Microsoft LAPS 安全性和 Active Directory LAPS 設定偵察](https://adsecurity.org/?p=3164)
* [信任方向：Active Directory 列舉和信任利用的推動者](https://bohops.com/2017/12/02/trust-direction-an-enabler-for-active-directory-enumeration-and-trust-exploitation/)
* [SPN 發現](https://pentestlab.blog/2018/06/04/spn-discovery/)
   
## [↑](#table-of-contents) 橫向移動 

* [一個 Citrix 故事](https://rastamouse.me/blog/a-citrix-story/)
* [使用 RDP 跳過網路隔離](https://rastamouse.me/blog/rdp-jump-boxes/)
* [透過雜湊傳遞票券傳遞，沒有痛苦](http://resources.infosecinstitute.com/pass-hash-pass-ticket-no-pain/)
* [濫用 DNSAdmins 特權以在 Active Directory 中進行提升](http://www.labofapenetrationtester.com/2017/05/abusing-dnsadmins-privilege-for-escalation-in-active-directory.html)
* [使用 SQL Server 攻擊森林信任](http://www.labofapenetrationtester.com/2017/03/using-sql-server-for-attacking-forest-trust.html)
* [為 Red Teamers 擴展 BloodHound](https://www.youtube.com/watch?v=Pn7GWRXfgeI)
* [Beacon 指令 OPSEC 考慮事項](https://blog.cobaltstrike.com/2017/06/23/opsec-considerations-for-beacon-commands/)
* [我的第一次 BloodHound 經歷](https://blog.cobaltstrike.com/2016/12/14/my-first-go-with-bloodhound/)
* [Kerberos 派對技巧：利用 Kerberos 協議漏洞](http://www.exumbraops.com/blog/2016/6/1/kerberos-party-tricks-weaponizing-kerberos-protocol-flaws)
* [使用 Excel 應用程式和 DCOM 進行橫向移動](https://enigma0x3.net/2017/09/11/lateral-movement-using-excel-application-and-dcom/)
* [使用 BloodHound 查看土地](http://threat.tevora.com/lay-of-the-land-with-bloodhound/)
* [最危險的使用者權限（您可能）從未聽說過](https://www.harmj0y.net/blog/activedirectory/the-most-dangerous-user-right-you-probably-have-never-heard-of/)
* [無代理程式後期開發](https://blog.cobaltstrike.com/2016/11/03/agentless-post-exploitation/)
* [域信任攻擊指南](https://www.harmj0y.net/blog/redteaming/a-guide-to-attacking-domain-trusts/)   
* [傳遞雜湊已過時：LocalAccountTokenFilterPolicy 長壽萬歲](https://www.harmj0y.net/blog/redteaming/pass-the-hash-is-dead-long-live-localaccounttokenfilterpolicy/)
* [針對性 Kerberoasting](https://www.harmj0y.net/blog/activedirectory/targeted-kerberoasting/)
* [不用 Mimikatz 的 Kerberoasting](https://www.harmj0y.net/blog/powershell/kerberoasting-without-mimikatz/)
* [濫用 GPO 權限](https://www.harmj0y.net/blog/redteaming/abusing-gpo-permissions/)
* [使用 PowerView 濫用 Active Directory 權限](https://www.harmj0y.net/blog/redteaming/abusing-active-directory-permissions-with-powerview/)
* [烘烤 AS-REPs](https://www.harmj0y.net/blog/activedirectory/roasting-as-reps/)
* [使用 CrackMapExec 獲得商品：第 1 部分](https://byt3bl33d3r.github.io/getting-the-goods-with-crackmapexec-part-1.html)
* [使用 CrackMapExec 獲得商品：第 2 部分](https://byt3bl33d3r.github.io/getting-the-goods-with-crackmapexec-part-2.html)
* [DiskShadow：VSS 規避、持久化和 Active Directory 資料庫提取的回歸](https://bohops.com/2018/03/26/diskshadow-the-return-of-vss-evasion-persistence-and-active-directory-database-extraction/)
* [濫用匯出函數和公開 DCOM 介面進行直通命令執行和橫向移動](https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/)
* [攻擊域信任的指南](https://posts.specterops.io/a-guide-to-attacking-domain-trusts-971e52cb2944)
* [Outlook 首頁：另一個 Ruler 向量](https://sensepost.com/blog/2017/outlook-home-page-another-ruler-vector/)
* [Outlook 表單和 Shells](https://sensepost.com/blog/2017/outlook-forms-and-shells/)
* [濫用 COM 登錄機碼結構：CLSID、LocalServer32 和 InprocServer32](https://bohops.com/2018/06/28/abusing-com-registry-structure-clsid-localserver32-inprocserver32/)
* [LethalHTA - 使用 DCOM 和 HTA 的新橫向移動技術](https://codewhitesec.blogspot.com/2018/07/lethalhta.html)
* [濫用 DCOM 進行另一項橫向移動技術](https://bohops.com/2018/04/28/abusing-dcom-for-yet-another-lateral-movement-technique/)
   
## [↑](#table-of-contents) 蒐集  
* [在 Windows 10 中從鎖定畫面存取剪貼簿 第 1 部分](https://oddvar.moe/2017/01/24/accessing-clipboard-from-the-lock-screen-in-windows-10/)
* [在 Windows 10 中從鎖定畫面存取剪貼簿 第 2 部分](https://oddvar.moe/2017/01/27/access-clipboard-from-lock-screen-in-windows-10-2/)

  
   
## [↑](#table-of-contents) 資料外洩
* [DNS 資料外洩：什麼是以及如何使用？](https://blog.fosec.vn/dns-data-exfiltration-what-is-this-and-how-to-use-2f6c69998822)
* [DNS 隧道](http://resources.infosecinstitute.com/dns-tunnelling/)
* [sg1：用於資料加密、外洩和隱蔽通信的瑞士刀](https://securityonline.info/sg1-swiss-army-knife-for-data-encryption-exfiltration-covert-communication/?utm_source=ReviveOldPost&utm_medium=social&utm_campaign=ReviveOldPost)
* [透過 DNS 請求隱蔽通道的資料外洩：DNSExfiltrator](https://n0where.net/data-exfiltration-over-dns-request-covert-channel-dnsexfiltrator)
* [DET（可擴展）資料外洩工具組](https://github.com/PaulSec/DET)
* [透過公式注入的資料外洩 第 1 部分](https://www.notsosecure.com/data-exfiltration-formula-injection/)


## [↑](#table-of-contents) 命令與控制

### Domain Fronting
* [Empire Domain Fronting](https://www.xorrior.com/Empire-Domain-Fronting/)
* [逃脫和規避限制網路的出口 - Tom Steele 和 Chris Patten](https://www.optiv.com/blog/escape-and-evasion-egressing-restricted-networks)
* [尋找可前置的域](https://github.com/rvrsh3ll/FindFrontableDomains)
* [TOR Fronting：利用隱藏服務來保護隱私](https://www.mdsec.co.uk/2017/02/tor-fronting-utilising-hidden-services-for-privacy/)
* [帶有 GAE C2 伺服器的簡單 domain fronting PoC](https://www.securityartwork.es/2017/01/31/simple-domain-fronting-poc-with-gae-c2-server/)
* [透過 Cloudfront 替代域進行 Domain Fronting](https://www.mdsec.co.uk/2017/02/domain-fronting-via-cloudfront-alternate-domains/)
* [尋找可前置的 Azure 域 - thoth / Fionnbharr (@a_profligate)](https://theobsidiantower.com/2017/07/24/d0a7cfceedc42bdf3a36f2926bd52863ef28befc.html)
* [Google Groups：部落格文章關於使用 Censys 尋找 2000+ Azure 域](https://groups.google.com/forum/#!topic/traffic-obf/7ygIXCPebwQ)
* [Red Team 對使用 Cobalt Strike 的 HTTPS Domain Fronting Google Hosts 的見解](https://www.cyberark.com/threat-research-blog/red-team-insights-https-domain-fronting-google-hosts-using-cobalt-strike/)
* [SSL Domain Fronting 101](http://www.rvrsh3ll.net/blog/offensive/ssl-domain-fronting-101/)
* [我如何識別 93k 可前置的 CloudFront 域](https://www.peew.pw/blog/2018/2/22/how-i-identified-93k-domain-frontable-cloudfront-domains)
* [經過驗證的 CloudFront SSL 域](https://medium.com/@vysec.private/validated-cloudfront-ssl-domains-27895822cea3)
* [CloudFront 劫持](https://www.mindpointgroup.com/blog/pen-test/cloudfront-hijacking/)
* [CloudFrunt GitHub 儲存庫](https://github.com/MindPointGroup/cloudfrunt)

### 連接代理
* [重新導向 Cobalt Strike DNS Beacons](http://www.rvrsh3ll.net/blog/offensive/redirecting-cobalt-strike-dns-beacons/)
* [Apache2Mod 重寫設定](https://github.com/n0pe-sled/Apache2-Mod-Rewrite-Setup)
* [使用 Apache mod_rewrite 的 Cobalt Strike HTTP C2 重新導向器](https://bluescreenofjeff.com/2016-06-28-cobalt-strike-http-c2-redirectors-with-apache-mod_rewrite/)
* [高信譽重新導向器和 Domain Fronting](https://blog.cobaltstrike.com/2017/02/06/high-reputation-redirectors-and-domain-fronting/)
* [用於分散式駭客的雲端重新導向器](https://blog.cobaltstrike.com/2014/01/14/cloud-based-redirectors-for-distributed-hacking/)
* [使用 Apache mod_rewrite 對付事件回應者](https://bluescreenofjeff.com/2016-04-12-combatting-incident-responders-with-apache-mod_rewrite/)
* [使用 Apache mod_rewrite 進行的基於作業系統的重新導向](https://bluescreenofjeff.com/2016-04-05-operating-system-based-redirection-with-apache-mod_rewrite/)
* [使用 Apache mod_rewrite 的無效 URI 重新導向](https://bluescreenofjeff.com/2016-03-29-invalid-uri-redirection-with-apache-mod_rewrite/)
* [使用 Apache mod_rewrite 和行動使用者重新導向加強您的網路釣魚](https://bluescreenofjeff.com/2016-03-22-strengthen-your-phishing-with-apache-mod_rewrite-and-mobile-user-redirection/)
* [mod_rewrite 規則以規避供應商沙箱](https://gist.github.com/curi0usJack/971385e8334e189d93a6cb4671238b10)
* [使用 Apache RewriteMap 的過期網路釣魚連結](https://bluescreenofjeff.com/2016-04-19-expire-phishing-links-with-apache-rewritemap/)
* [使用 NGINX 提供隨機載荷](https://gist.github.com/jivoi/a33ace2e25515a31aa2ffbae246d98c9)
* [Mod_Rewrite 自動設定](https://blog.inspired-sec.com/archive/2017/04/17/Mod-Rewrite-Automatic-Setup.html)
* [混合型 Cobalt Strike 重新導向器](https://zachgrace.com/2018/02/20/cobalt_strike_redirectors.html)
* [擴展您的視野紅隊：現代 SAAS C2](https://cybersyndicates.com/2017/04/expand-your-horizon-red-team/)
* [RTOps：使用 Ansible 自動化重新導向器部署](http://threat.tevora.com/automating-redirector-deployment-with-ansible/)

### Web 服務
* [使用 Dropbox 進行 C2](https://pentestlab.blog/2017/08/29/command-and-control-dropbox/)
* [使用 Gmail 進行 C2](https://pentestlab.blog/2017/08/03/command-and-control-gmail/)
* [使用 Twitter 進行 C2](https://pentestlab.blog/2017/09/26/command-and-control-twitter/)
* [用於 Cobalt Strike C2 的 Office 365](https://labs.mwrinfosecurity.com/blog/tasking-office-365-for-cobalt-strike-c2/)
* [Red Team 對使用 Cobalt Strike 的 HTTPS Domain Fronting Google Hosts 的見解](https://www.cyberark.com/threat-research-blog/red-team-insights-https-domain-fronting-google-hosts-using-cobalt-strike/)
* [一個隱秘的基於 Python 的 Windows 後門，使用 Github 作為 C&C 伺服器](http://securityblog.gr/4434/a-stealthy-python-based-windows-backdoor-that-uses-github-as-a-cc-server/)
* [外部 C2（第三方命令和控制）](https://www.cobaltstrike.com/help-externalc2)
* [透過外部 C2 的 Cobalt Strike - beacon 以最隱蔽的方式返家](https://outflank.nl/blog/2017/09/17/blogpost-cobalt-strike-over-external-c2-beacon-home-in-the-most-obscure-ways/)
* [Cobalt Strike 的外部 C2](https://github.com/ryhanson/ExternalC2/)
* [Cobalt Strike 的外部 C2 框架](http://www.insomniacsecurity.com/2018/01/11/externalc2.html)
* [外部 C2 框架 - GitHub 儲存庫](https://github.com/Und3rf10w/external_c2_framework)
* [隱藏在雲端：使用 Amazon APIs 的 Cobalt Strike Beacon C2](https://github.com/Und3rf10w/external_c2_framework)
* [探索 Cobalt Strike 的 ExternalC2 框架](https://blog.xpnsec.com/exploring-cobalt-strikes-externalc2-framework/)

### 應用層協議
* [C2 WebSocket](https://pentestlab.blog/2017/12/06/command-and-control-websocket/)
* [C2 WMI](https://pentestlab.blog/2017/11/20/command-and-control-wmi/)
* [C2 Website](https://pentestlab.blog/2017/11/14/command-and-control-website/)
* [C2 Image](https://pentestlab.blog/2018/01/02/command-and-control-images/)
* [C2 Javascript](https://pentestlab.blog/2018/01/08/command-and-control-javascript/)
* [C2 WebInterface](https://pentestlab.blog/2018/01/03/command-and-control-web-interface/)
* [C2 with DNS](https://pentestlab.blog/2017/09/06/command-and-control-dns/)
* [C2 with https](https://pentestlab.blog/2017/10/04/command-and-control-https/)
* [C2 with webdav](https://pentestlab.blog/2017/09/12/command-and-control-webdav/)
* [Merlin 簡介：跨平台後期開發 HTTP/2 命令和控制工具](https://medium.com/@Ne0nd0g/introducing-merlin-645da3c635a)
* [用於 C2 的 InternetExplorer.Application](https://adapt-and-attack.com/2017/12/19/internetexplorer-application-for-c2/)

### 基礎設施
* [使用 Terraform 進行自動化 Red Team 基礎設施部署 - 第 1 部分](https://rastamouse.me/blog/terraform-pt1/)
* [使用 Terraform 進行自動化 Red Team 基礎設施部署 - 第 2 部分](https://rastamouse.me/blog/terraform-pt2/)
* [Red Team 基礎設施 - AWS 加密 EBS](https://rastamouse.me/blog/encrypted-ebs/)
* [6 個紅隊基礎設施技巧](https://cybersyndicates.com/2016/11/top-red-team-tips/)
* [如何使用 Digital Ocean 構建 C2 基礎設施：第 1 部分](https://www.blackhillsinfosec.com/build-c2-infrastructure-digital-ocean-part-1/)
* [持續進行 Red Team 行動的基礎設施](https://blog.cobaltstrike.com/2014/09/09/infrastructure-for-ongoing-red-team-operations/)
* [攻擊基礎設施日誌彙總和監控](https://posts.specterops.io/attack-infrastructure-log-aggregation-and-monitoring-345e4173044e)
* [隨機化的易適應 C2 設定檔變得簡單](https://bluescreenofjeff.com/2017-08-30-randomized-malleable-c2-profiles-made-easy/)
* [遷移您的基礎設施](https://blog.cobaltstrike.com/2015/10/21/migrating-your-infrastructure/)
* [ICMP C2](https://pentestlab.blog/2017/07/28/command-and-control-icmp/)
* [使用 WebDAV 功能作為隱蔽通道](https://arno0x0x.wordpress.com/2017/09/07/using-webdav-features-as-a-covert-channel/)
* [安全的 Red Team 基礎設施](https://medium.com/@malcomvetter/safe-red-team-infrastructure-c5d6a0f13fac)
* [使用 COBALTSTIKE 和 LET'S ENCRYPT 退出 BLUECOAT](https://cybersyndicates.com/2016/12/egressing-bluecoat-with-cobaltstike-letsencrypt/)
* [使用 Active Directory 進行命令和控制](http://www.harmj0y.net/blog/powershell/command-and-control-using-active-directory/)
* [分散式 Red Team 行動的願景](https://blog.cobaltstrike.com/2013/02/12/a-vision-for-distributed-red-team-operations/)
* [設計有效的隱蔽 Red Team 攻擊基礎設施](https://bluescreenofjeff.com/2017-12-05-designing-effective-covert-red-team-attack-infrastructure/)
* [使用 Apache mod_rewrite 提供隨機載荷](https://bluescreenofjeff.com/2017-06-13-serving-random-payloads-with-apache-mod_rewrite/)
* [郵件伺服器變得簡單](https://blog.inspired-sec.com/archive/2017/02/14/Mail-Server-Setup.html)
* [使用 Apache mod_rewrite 保護您的 Empire C2](https://thevivi.net/2017/11/03/securing-your-empire-c2-with-apache-mod_rewrite/)
* [使用 Ansible 和 Docker 自動化 Gophish 版本](https://jordan-wright.com/blog/post/2018-02-04-automating-gophish-releases/)
* [如何為 Cobalt Strike 撰寫易適應 C2 設定檔](https://bluescreenofjeff.com/2017-01-24-how-to-write-malleable-c2-profiles-for-cobalt-strike/)
* [如何為 Empire 建立通信設定檔](https://bluescreenofjeff.com/2017-03-01-how-to-make-communication-profiles-for-empire/)
* [一個新的世界：易適應 C2](http://www.harmj0y.net/blog/redteaming/a-brave-new-world-malleable-c2/)
* [易適應命令和控制](https://www.cobaltstrike.com/help-malleable-c2)


## [↑](#table-of-contents) 嵌入式和周邊設備駭客
* [使用 Proxmark3 和 ProxBrute 進入](https://www.trustwave.com/Resources/SpiderLabs-Blog/Getting-in-with-the-Proxmark-3-and-ProxBrute/)
* [RFID 徽章複製實用指南](https://blog.nviso.be/2017/01/11/a-practical-guide-to-rfid-badge-copying/)
* [實體滲透測試人員背包的內容](https://www.tunnelsup.com/contents-of-a-physical-pen-testers-backpack/)
* [MagSpoof - 信用卡/磁條欺騙器](https://github.com/samyk/magspoof)
* [無線鍵盤嗅探器](https://samy.pl/keysweeper/)
* [使用 Proxmark 3 進行 RFID 駭客](https://blog.kchung.co/rfid-hacking-with-the-proxmark-3/)
* [RFID 瑞士刀](https://www.cs.bham.ac.uk/~garciaf/publications/Tutorial_Proxmark_the_Swiss_Army_Knife_for_RFID_Security_Research-RFIDSec12.pdf)
* [探索 NFC 攻擊面](https://media.blackhat.com/bh-us-12/Briefings/C_Miller/BH_US_12_Miller_NFC_attack_surface_WP.pdf)
* [戰勝智能卡](http://gerhard.dekoninggans.nl/documents/publications/dekoninggans.phd.thesis.pdf)
* [逆向工程 HID iClass 主金鑰](https://blog.kchung.co/reverse-engineering-hid-iclass-master-keys/)
* [Android Open Pwn Project (AOPP)](https://www.pwnieexpress.com/aopp)


## [↑](#table-of-contents) 雜項
* [Vysec 的 Red 提示](https://github.com/vysec/RedTips)
* [2016 CCDC Red Teams 的 Cobalt Strike 技巧](https://blog.cobaltstrike.com/2016/02/23/cobalt-strike-tips-for-2016-ccdc-red-teams/)
* [Red Team 行動的模型](https://blog.cobaltstrike.com/2015/07/09/models-for-red-team-operations/)
* [規劃 Red Team 練習](https://github.com/magoo/redteam-plan)
* [Raphael Mudge - 骯髒的 Red Team 技巧](https://www.youtube.com/watch?v=oclbbqvawQg)
* [引入對抗性韌性方法論第 1 部分](https://posts.specterops.io/introducing-the-adversary-resilience-methodology-part-one-e38e06ffd604)
* [引入對抗性韌性方法論第 2 部分](https://posts.specterops.io/introducing-the-adversary-resilience-methodology-part-two-279a1ed7863d)
* [負責任的 Red Team](https://medium.com/@malcomvetter/responsible-red-teams-1c6209fd43cc)
* [太平洋地區 CCDC 2017 Red Teaming](https://bluescreenofjeff.com/2017-05-02-red-teaming-for-pacific-rim-ccdc-2017/)
* [我如何準備在 PRCCDC 2015 進行 Red Teaming](https://bluescreenofjeff.com/2015-04-15-how-i-prepared-to-red-team-at-prccdc-2015/)
* [太平洋地區 CCDC 2016 的 Red Teaming](https://bluescreenofjeff.com/2016-05-24-pacific-rim-ccdc_2016/)
* [負責任的 Red Teams](https://medium.com/@malcomvetter/responsible-red-teams-1c6209fd43cc)
* [Awesome-CobaltStrike](https://github.com/zer0yu/Awesome-CobaltStrike)
* Red Teaming 從零到一 [第 1 部分](https://payatu.com/redteaming-from-zero-to-one-part-1) [第 2 部分](https://payatu.com/redteaming-zero-one-part-2)

## [↑](#table-of-contents) 紅隊小工具
#### 網路植入物
* [LAN Tap Pro](https://hackerwarehouse.com/product/lan-tap-pro/)
* [LAN Turtle](https://hakshop.com/collections/network-implants/products/lan-turtle)
* [Bash Bunny](https://hakshop.com/collections/physical-access/products/bash-bunny)
* [Key Croc](https://shop.hak5.org/collections/sale/products/key-croc)
* [Packet Squirrel](https://hakshop.com/products/packet-squirrel)
* [Shark Jack](https://shop.hak5.org/collections/sale/products/shark-jack)
#### WiFi 審計
* [WiFi Pineapple](https://hakshop.com/products/wifi-pineapple)
* [Alpha 長距離無線 USB](https://hackerwarehouse.com/product/alfa-802-11bgn-long-range-usb-wireless-adapter/)
* [Wifi-Deauth Monster](https://www.tindie.com/products/lspoplove/dstike-wifi-deauther-monster/)
* [Crazy PA](https://www.amazon.com/gp/product/B00VYA3A2U/ref=as_li_tl)
* [Signal Owl](https://shop.hak5.org/products/signal-owl)
#### IoT
* [BLE Key](https://hackerwarehouse.com/product/blekey/)
* [Proxmark3](https://hackerwarehouse.com/product/proxmark3-kit/)
* [Zigbee 嗅探器](https://www.attify-store.com/products/zigbee-sniffing-tool-atmel-rzraven)
* [Attify IoT Exploit 套件](https://www.attify-store.com/collections/frontpage/products/jtag-exploitation-kit-with-lab-manual)
#### 軟體定義無線電 - SDR
* [HackRF One Bundle](https://hackerwarehouse.com/product/hackrf-one-kit/)
* [RTL-SDR](https://hackerwarehouse.com/product/rtlsdr/)
* [YARD stick one Bundle](https://hackerwarehouse.com/product/yard-stick-one-kit/)
* [Ubertooth](https://hackerwarehouse.com/product/ubertooth-one/)
#### 雜項
* [鍵盤擷取器](https://hackerwarehouse.com/product/keygrabber/)
* [Magspoof](https://store.ryscc.com/products/magspoof%20)
* [Poison tap](https://samy.pl/poisontap/)
* [Keysweeper](https://samy.pl/keysweeper/)
* [USB Rubber Ducky](https://hakshop.com/collections/physical-access/products/usb-rubber-ducky-deluxe)
* [Screen Crab](https://shop.hak5.org/collections/sale/products/screen-crab)
* [O.MG Cable](https://shop.hak5.org/collections/featured-makers/products/o-mg-cable)
* [Keysy](https://shop.hak5.org/collections/featured-makers/products/keysy)
* [Dorothy for Okta SSO](https://github.com/elastic/dorothy)

## [↑](#table-of-contents) 電子書
* [下一代 Red Teaming](https://www.amazon.com/Next-Generation-Teaming-Henry-Dalziel/dp/0128041714)
* [針對性網絡攻擊](https://www.amazon.com/Targeted-Cyber-Attacks-Multi-staged-Exploits/dp/0128006048)
* [進階滲透測試：駭入全球最安全的網路](https://www.amazon.com/Advanced-Penetration-Testing-Hacking-Networks/dp/1119367689)
* [社交工程師遊戲手冊：實用的冒充](https://www.amazon.com/Social-Engineers-Playbook-Practical-Pretexting/dp/0692306617/)
* [駭客遊戲手冊 3：滲透測試實用指南](https://www.amazon.com/Hacker-Playbook-Practical-Penetration-Testing-ebook/dp/B07CSPFYZ2)
* [如何像 PORNSTAR 一樣駭客：進入銀行的一步一步過程](https://www.amazon.com/How-Hack-Like-PORNSTAR-breaking-ebook/dp/B01MTDLGQQ)

## [↑](#table-of-contents) 培訓（免費）
* [Tradecraft - 關於 Red Team 行動的課程](https://www.youtube.com/watch?v=IRpS7oZ3z0o&list=PL9HO6M_MU2nesxSmhJjEvwLhUoHPHmXvz)
* [進階威脅戰術課程和筆記](https://blog.cobaltstrike.com/2015/09/30/advanced-threat-tactics-course-and-notes/)
* [FireEye - 關於 Red Team 行動的白板會議](https://www.fireeye.com/services/red-team-assessments/red-team-operations-video-training.html)

#### 主實驗室
* [為測試構建有效的 Active Directory 實驗室環境](https://adsecurity.org/?p=2653)
* [設定 DetectionLab](https://www.c2.lol/articles/setting-up-chris-longs-detectionlab)
* [vulnerable-AD - 使您的主 AD 實驗室易受攻擊的指令碼](https://github.com/WazeHell/vulnerable-AD)

## [↑](#table-of-contents) 認證
* [CREST 認證模擬攻擊專家](http://www.crest-approved.org/examination/certified-simulated-attack-specialist/)
* [CREST 認證模擬攻擊經理](http://www.crest-approved.org/examination/certified-simulated-attack-manager/)
* [SEC564：Red Team 行動和威脅模擬](https://www.sans.org/course/red-team-operations-and-threat-emulation)
* [ELearn Security 滲透測試 eXtreme](https://www.elearnsecurity.com/course/penetration_testing_extreme/)
* [認證 Red Team 專業人士](https://www.pentesteracademy.com/activedirectorylab)
* [認證 Red Teaming 專家](https://www.pentesteracademy.com/redteamlab)
* [PentesterAcademy 認證企業安全專家 (PACES)](https://www.pentesteracademy.com/gcb)
