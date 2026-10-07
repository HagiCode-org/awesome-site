# 精選 Shodan 搜尋查詢 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)


長期以來，我蒐集了大量有趣、好笑又令人沮喪的搜尋查詢，可以輸入到 [Shodan](https://www.shodan.io/)（[字面意思](https://www.vice.com/en_uk/article/9bvxmd/shodan-exposes-the-dark-side-of-the-net)）——那個（名副其實的）網際網路搜尋引擎——中進行檢索。其中一些會回傳讓人扶額的尷尬結果，另一些則回傳真實存在、甚至年代久遠的漏洞。

<p align="center">
  <img src="screenshots/shodan.png" /><br />
  <strong><a href="https://account.shodan.io/register">大多數搜尋過濾器需要 Shodan 帳號。</a></strong>
</p>

你可以假設，在可能的情況下，這些查詢只會回傳未受保護／開放的執行個體。為了你自身的法律利益，如果它們並非如此，請勿嘗試登入（哪怕使用預設密碼）！可以藉由在結尾加上諸如 `country:US`、`org:"Harvard University"` 或 `hostname:"nasa.gov"` 之類的過濾器來縮小結果範圍。

世界及其裝置正透過嶄新閃亮的 [物聯網（此處原文戲謔稱為「物聯網即狗屁」）](https://motherboard.vice.com/en_us/topic/internet-of-shit) 快速互聯，並因此變得[更加危險](https://blog.malwarebytes.com/101/2017/12/internet-things-iot-security-never/)。為此，我希望這份清單傳播的是安全意識（坦白說，還有讓人嚇破膽的恐懼），而非危害。

**一如既往，請[負責任地發現並揭露漏洞](https://www.bugcrowd.com/resource/what-is-responsible-disclosure/)! 🤓**


---


### **目錄**

- [工業控制系統](#industrial-control-systems)
- [遠端桌面](#remote-desktop)
- [網路基礎設施](#network-infrastructure)
- [網路附加儲存（NAS）](#network-attached-storage-nas)
- [網路攝影機](#webcams)
- [印表機與影印機](#printers--copiers)
- [家用裝置](#home-devices)
- [雜項](#random-stuff)


---


## 工業控制系統


### 三星電子廣告看板 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Prismview+Player%22)

```
"Server: Prismview Player"
```

<div align="center"><img src="screenshots/billboard3.png" alt="Example: Electronic Billboards" width="500" /></div>


### 加油站油泵控制器 [🔎 &#x2192;](https://www.shodan.io/search?query=%22in-tank+inventory%22+port%3A10001)

```
"in-tank inventory" port:10001
```

<div align="center"><img src="screenshots/7-11.png" alt="Example: Gas Station Pump Inventories" width="700" /></div>


### 自動車牌辨識器 [🔎 &#x2192;](https://www.shodan.io/search?query=P372+%22ANPR+enabled%22)

```
P372 "ANPR enabled"
```

<div align="center"><img src="screenshots/plate-reader.png" alt="Example: Automatic License Plate Reader" /></div>


### 交通號誌控制器 / 闖紅燈攝影機 [🔎 &#x2192;](https://www.shodan.io/search?query=mikrotik+streetlight)

```
mikrotik streetlight
```


### 美國投票機 [🔎 &#x2192;](https://www.shodan.io/search?query=%22voter+system+serial%22+country%3AUS)

```
"voter system serial" country:US
```


### 執行 [Cisco 合法攔截](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst6500/ios/12-2SX/lawful/intercept/book/65LIch1.html) 電話竊聽的電信業者 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Cisco+IOS%22+%22ADVIPSERVICESK9_LI-M%22)

```
"Cisco IOS" "ADVIPSERVICESK9_LI-M"
```

Cisco 在 [RFC 3924](https://tools.ietf.org/html/rfc3924) 中概述的竊聽機制：

> 合法攔截是指依法對攔截對象的通訊進行授權攔截與監控。術語「攔截對象」[...]指的是某電信服務的訂閱用戶，其通訊及／或攔截相關資訊（IRI）已被依法授權攔截並傳送給某機構。


### 監獄付費電話 [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5B2J%5BH+Encartele+Confidential%22)

```
"[2J[H Encartele Confidential"
```


### [Tesla PowerPack](https://www.tesla.com/powerpack) 充電狀態 [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22Tesla+PowerPack+System%22+http.component%3A%22d3%22+-ga3ca4f2)

```
http.title:"Tesla PowerPack System" http.component:"d3" -ga3ca4f2
```

<div align="center"><img src="screenshots/tesla.png" alt="Example: Tesla PowerPack Charging Status" /></div>


### 電動車充電樁 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+gSOAP%2F2.8%22+%22Content-Length%3A+583%22)

```
"Server: gSOAP/2.8" "Content-Length: 583"
```


### 海事衛星 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Cobham+SATCOM%22+OR+%28%22Sailor%22+%22VSAT%22%29)

Shodan 還做了一個相當棒的 [Ship Tracker](https://shiptracker.shodan.io/)，可即時繪製船隻位置地圖！

```
"Cobham SATCOM" OR ("Sailor" "VSAT")
```

<div align="center"><img src="screenshots/sailor-vsat.png" alt="Example: Maritime Satellites" width="700" /></div>


### 潛艇任務控制儀表板 [🔎 &#x2192;](https://www.shodan.io/search?query=title%3A%22Slocum+Fleet+Mission+Control%22)

```
title:"Slocum Fleet Mission Control"
```


### [CAREL PlantVisor](https://www.carel.com/product/plantvisor) 製冷設備 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+CarelDataServer%22+%22200+Document+follows%22)

```
"Server: CarelDataServer" "200 Document follows"
```

<div align="center"><img src="screenshots/refrigeration.png" alt="Example: CAREL PlantVisor Refrigeration Units" /></div>


### [Nordex 風力渦輪機](http://www.nordex-online.com/en/products-services/wind-turbines.html) 風場 [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22Nordex+Control%22+%22Windows+2000+5.0+x86%22+%22Jetty%2F3.1+%28JSP+1.1%3B+Servlet+2.2%3B+java+1.6.0_14%29%22)

```
http.title:"Nordex Control" "Windows 2000 5.0 x86" "Jetty/3.1 (JSP 1.1; Servlet 2.2; java 1.6.0_14)"
```


### [C4 Max](https://www.mobile-devices.com/our-products/c4-max/) 商用車 GPS 追蹤器 [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5B1m%5B35mWelcome+on+console%22)

```
"[1m[35mWelcome on console"
```

<div align="center"><img src="screenshots/c4max.png" alt="Example: C4 Max Vehicle GPS" width="780" /></div>


### [DICOM](https://www.dicomstandard.org/about/) 醫療 X 光機 [🔎 &#x2192;](https://www.shodan.io/search?query=%22DICOM+Server+Response%22+port%3A104)

預設情況下是受保護的，這令人欣慰，但這些 1700 多台設備[本不應](https://documents.trendmicro.com/assets/rpt/rpt-securing-connected-hospitals.pdf)出現在網際網路上。

```
"DICOM Server Response" port:104
```


### [GaugeTech](https://electroind.com/all-products/) 電表 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+EIG+Embedded+Web+Server%22+%22200+Document+follows%22)

```
"Server: EIG Embedded Web Server" "200 Document follows"
```

<div align="center"><img src="screenshots/power-gaugetech.png" alt="Example: GaugeTech Electricity Meters" width="650" /></div>


### 西門子工業自動化 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Siemens%2C+SIMATIC%22+port%3A161)

```
"Siemens, SIMATIC" port:161
```


### 西門子 HVAC 控制器 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Microsoft-WinCE%22+%22Content-Length%3A+12581%22)

```
"Server: Microsoft-WinCE" "Content-Length: 12581"
```


### 門禁 / 鎖具存取控制器 [🔎 &#x2192;](https://www.shodan.io/search?query=%22HID+VertX%22+port%3A4070)

```
"HID VertX" port:4070
```


### 鐵路管理 [🔎 &#x2192;](https://www.shodan.io/search?query=%22log+off%22+%22select+the+appropriate%22)

```
"log off" "select the appropriate"
```


---


## 遠端桌面


### 未受保護的 VNC [🔎 &#x2192;](https://www.shodan.io/search?query=%22authentication+disabled%22+%22RFB+003.008%22)

```
"authentication disabled" "RFB 003.008"
```

[Shodan Images](https://images.shodan.io/) 是一個很棒的輔助工具，可用來瀏覽截圖，順便一提！[🔎 &#x2192;](https://images.shodan.io/?query=%22authentication+disabled%22+%21screenshot.label%3Ablank)

<p align="center">
  <img src="screenshots/vnc.png" alt="Example: Unprotected VNC" /><br />
  <em>此刻的第一條結果。😞</em>
</p>


### Windows 遠端桌面（RDP） [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5Cx03%5Cx00%5Cx00%5Cx0b%5Cx06%5Cxd0%5Cx00%5Cx00%5Cx124%5Cx00%22)

99.99% 都受到第二層 Windows 登入畫面的保護。

```
"\x03\x00\x00\x0b\x06\xd0\x00\x00\x124\x00"
```


---


## 網路基礎設施


### [Weave Scope](https://www.weave.works/oss/scope/) 儀表板 [🔎 &#x2192;](https://www.shodan.io/search?query=title%3A%22Weave+Scope%22+http.favicon.hash%3A567176827)

可在 Kubernetes pod 與 Docker 容器內取得命令列存取權限，並即時視覺化／監控整個基礎設施。

```
title:"Weave Scope" http.favicon.hash:567176827
```

<div align="center"><img src="screenshots/weavescope.png" alt="Example: Weave Scope Dashboards" /></div>


### MongoDB [🔎 &#x2192;](https://www.shodan.io/search?query=product%3AMongoDB+-authentication)

舊版本在預設情況下是不安全的。[非常可怕。](https://krebsonsecurity.com/tag/mongodb/)

```
"MongoDB Server Information" port:27017 -authentication
```

<div align="center"><img src="screenshots/mongo.png" alt="Example: MongoDB" width="500" /></div>


### [Mongo Express](https://github.com/mongo-express/mongo-express) Web 管理介面 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Set-Cookie%3A+mongo-express%3D%22+%22200+OK%22)

類似於[惡名昭彰的 phpMyAdmin](https://www.cvedetails.com/vulnerability-list/vendor_id-784/Phpmyadmin.html)，但是面向 MongoDB 的。

```
"Set-Cookie: mongo-express=" "200 OK"
```

<div align="center"><img src="screenshots/mongo-express.png" alt="Example: Mongo Express GUI" width="700" /></div>


### Jenkins CI [🔎 &#x2192;](https://www.shodan.io/search?query=%22X-Jenkins%22+%22Set-Cookie%3A+JSESSIONID%22+http.title%3A%22Dashboard%22)

```
"X-Jenkins" "Set-Cookie: JSESSIONID" http.title:"Dashboard"
```

<div align="center"><img src="screenshots/jenkins.png" alt="Example: Jenkins CI" width="700" /></div>


### Docker API [🔎 &#x2192;](https://www.shodan.io/search?query=%22Docker+Containers%3A%22+port%3A2375)

```
"Docker Containers:" port:2375
```


### Docker 私有映像倉庫 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Docker-Distribution-Api-Version%3A+registry%22+%22200+OK%22+-gitlab)

```
"Docker-Distribution-Api-Version: registry" "200 OK" -gitlab
```


### [Pi-hole](https://pi-hole.net/) 開放 DNS 伺服器 [🔎 &#x2192;](https://www.shodan.io/search?query=%22dnsmasq-pi-hole%22+%22Recursion%3A+enabled%22)

```
"dnsmasq-pi-hole" "Recursion: enabled"
```


### 透過 Telnet 已以 `root` 身分登入 [🔎 &#x2192;](https://www.shodan.io/search?query=%22root%40%22+port%3A23+-login+-password+-name+-Session)

```
"root@" port:23 -login -password -name -Session
```


### Android Root 偵錯橋 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Android+Debug+Bridge%22+%22Device%22+port%3A5555)

這是 Google 混亂、碎片化的更新策略所導致的一個附帶結果。🙄 [更多資訊見此。](https://medium.com/p/root-bridge-how-thousands-of-internet-connected-android-devices-now-have-no-security-and-are-b46a68cb0f20)

```
"Android Debug Bridge" "Device" port:5555
```


### Lantronix 串列轉乙太網路介面卡 [洩露 Telnet 密碼](https://www.bleepingcomputer.com/news/security/thousands-of-serial-to-ethernet-devices-leak-telnet-passwords/) [🔎 &#x2192;](https://www.shodan.io/search?query=Lantronix+password+port%3A30718+-secured)

```
Lantronix password port:30718 -secured
```


### Citrix 虛擬應用 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Citrix+Applications%3A%22+port%3A1604)

```
"Citrix Applications:" port:1604
```

<div align="center"><img src="screenshots/citrix.png" alt="Example: Citrix Virtual Apps" width="700" /></div>


### Cisco Smart Install [🔎 &#x2192;](https://www.shodan.io/search?query=%22smart+install+client+active%22)

[存在漏洞](https://2016.zeronights.ru/wp-content/uploads/2016/12/CiscoSmartInstall.v3.pdf)（某種程度上是「設計如此」，但一旦暴露尤其危險）。

```
"smart install client active"
```


### PBX IP 電話閘道 [🔎 &#x2192;](https://www.shodan.io/search?query=PBX+%22gateway+console%22+-password+port%3A23)

```
PBX "gateway console" -password port:23
```


### [Polycom](https://www.polycom.com/hd-video-conferencing.html) 視訊會議 [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22-+Polycom%22+%22Server%3A+lighttpd%22)

```
http.title:"- Polycom" "Server: lighttpd"
```

Telnet 設定：[🔎 &#x2192;](https://www.shodan.io/search?query=%22Polycom+Command+Shell%22+-failed+port%3A23)

```
"Polycom Command Shell" -failed port:23
```

<div align="center"><img src="screenshots/polycom.png" alt="Example: Polycom Video Conferencing" /></div>


### [Bomgar 幫助台](https://www.beyondtrust.com/remote-support/integrations) 門戶 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Bomgar%22+%22200+OK%22)

```
"Server: Bomgar" "200 OK"
```


### Intel 主動管理 [CVE-2017-5689](https://www.exploit-db.com/exploits/43385) [🔎 &#x2192;](https://www.shodan.io/search?query=%22Intel%28R%29+Active+Management+Technology%22+port%3A623%2C664%2C16992%2C16993%2C16994%2C16995)

```
"Intel(R) Active Management Technology" port:623,664,16992,16993,16994,16995
```


### HP iLO 4 [CVE-2017-12542](https://nvd.nist.gov/vuln/detail/CVE-2017-12542) [🔎 &#x2192;](https://www.shodan.io/search?query=HP-ILO-4+%21%22HP-ILO-4%2F2.53%22+%21%22HP-ILO-4%2F2.54%22+%21%22HP-ILO-4%2F2.55%22+%21%22HP-ILO-4%2F2.60%22+%21%22HP-ILO-4%2F2.61%22+%21%22HP-ILO-4%2F2.62%22+%21%22HP-iLO-4%2F2.70%22+port%3A1900)

```
HP-ILO-4 !"HP-ILO-4/2.53" !"HP-ILO-4/2.54" !"HP-ILO-4/2.55" !"HP-ILO-4/2.60" !"HP-ILO-4/2.61" !"HP-ILO-4/2.62" !"HP-iLO-4/2.70" port:1900
```


### Outlook Web Access：

#### Exchange 2007 [🔎 &#x2192;](https://www.shodan.io/search?query=%22x-owa-version%22+%22IE%3DEmulateIE7%22+%22Server%3A+Microsoft-IIS%2F7.0%22)

```
"x-owa-version" "IE=EmulateIE7" "Server: Microsoft-IIS/7.0"
```

<div align="center"><img src="screenshots/owa2007.png" alt="Example: OWA for Exchange 2007" width="400" /></div>

#### Exchange 2010 [🔎 &#x2192;](https://www.shodan.io/search?query=%22x-owa-version%22+%22IE%3DEmulateIE7%22+http.favicon.hash%3A442749392)

```
"x-owa-version" "IE=EmulateIE7" http.favicon.hash:442749392
```

<div align="center"><img src="screenshots/owa2010.png" alt="Example: OWA for Exchange 2010" width="400" /></div>

#### Exchange 2013 / 2016 [🔎 &#x2192;](https://www.shodan.io/search?query=%22X-AspNet-Version%22+http.title%3A%22Outlook%22+-%22x-owa-version%22)

```
"X-AspNet-Version" http.title:"Outlook" -"x-owa-version"
```

<div align="center"><img src="screenshots/owa2013.png" alt="Example: OWA for Exchange 2013/2016" width="500" /></div>


### Lync / Skype for Business [🔎 &#x2192;](https://www.shodan.io/search?query=%22X-MS-Server-Fqdn%22)

```
"X-MS-Server-Fqdn"
```


---


## 網路附加儲存（NAS）


### SMB（Samba）檔案共享 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Authentication%3A+disabled%22+port%3A445)

會產生約 500,000 條結果……可透過新增 "Documents" 或 "Videos" 等來縮小範圍。

```
"Authentication: disabled" port:445
```

具體而言網域控制站：[🔎 &#x2192;](https://www.shodan.io/search?query=%22Authentication%3A+disabled%22+NETLOGON+SYSVOL+-unix+port%3A445)

```
"Authentication: disabled" NETLOGON SYSVOL -unix port:445
```

關於 [QuickBooks 的預設網路共享](https://quickbooks.intuit.com/learn-support/en-us/help-articles/set-up-folder-and-windows-access-permissions-to-share-company/01/201880) 檔案：[🔎 &#x2192;](https://www.shodan.io/search?query=%22Authentication%3A+disabled%22+%22Shared+this+folder+to+access+QuickBooks+files+OverNetwork%22+-unix+port%3A445)

```
"Authentication: disabled" "Shared this folder to access QuickBooks files OverNetwork" -unix port:445
```


### 允許匿名登入的 FTP 伺服器 [🔎 &#x2192;](https://www.shodan.io/search?query=%22220%22+%22230+Login+successful.%22+port%3A21)

```
"220" "230 Login successful." port:21
```


### Iomega / LenovoEMC NAS 硬碟 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Set-Cookie%3A+iomega%3D%22+-%22manage%2Flogin.html%22+-http.title%3A%22Log+In%22)

```
"Set-Cookie: iomega=" -"manage/login.html" -http.title:"Log In"
```

<div align="center"><img src="screenshots/iomega.png" alt="Example: Iomega / LenovoEMC NAS Drives" width="600" /></div>


### Buffalo TeraStation NAS 硬碟 [🔎 &#x2192;](https://www.shodan.io/search?query=Redirecting+sencha+port%3A9000)

```
Redirecting sencha port:9000
```

<div align="center"><img src="screenshots/buffalo.png" alt="Example: Buffalo TeraStation NAS Drives" width="600" /></div>


### Logitech 媒體伺服器 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Logitech+Media+Server%22+%22200+OK%22)

```
"Server: Logitech Media Server" "200 OK"
```

<div align="center"><img src="screenshots/logitech.png" alt="Example: Logitech Media Servers" width="500" /></div>


### [Plex](https://www.plex.tv/) 媒體伺服器 [🔎 &#x2192;](https://www.shodan.io/search?query=%22X-Plex-Protocol%22+%22200+OK%22+port%3A32400)

```
"X-Plex-Protocol" "200 OK" port:32400
```


### [Tautulli / PlexPy](https://github.com/Tautulli/Tautulli) 儀表板 [🔎 &#x2192;](https://www.shodan.io/search?query=%22CherryPy%2F5.1.0%22+%22%2Fhome%22)

```
"CherryPy/5.1.0" "/home"
```

<div align="center"><img src="screenshots/plexpy.png" alt="Example: PlexPy / Tautulli Dashboards" width="570" /></div>


---


## 網路攝影機

示例圖片就沒必要了。🤦

### Yawcam [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+yawcam%22+%22Mime-Type%3A+text%2Fhtml%22)

```
"Server: yawcam" "Mime-Type: text/html"
```


### webcamXP/webcam7 [🔎 &#x2192;](https://www.shodan.io/search?query=%28%22webcam+7%22+OR+%22webcamXP%22%29+http.component%3A%22mootools%22+-401)

```
("webcam 7" OR "webcamXP") http.component:"mootools" -401
```


### Android IP 網路攝影機伺服器 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+IP+Webcam+Server%22+%22200+OK%22)

```
"Server: IP Webcam Server" "200 OK"
```


### 安防 DVR [🔎 &#x2192;](https://www.shodan.io/search?query=html%3A%22DVR_H264+ActiveX%22)

```
html:"DVR_H264 ActiveX"
```


---


## 印表機與影印機：


### HP 印表機 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Serial+Number%3A%22+%22Built%3A%22+%22Server%3A+HP+HTTP%22)

```
"Serial Number:" "Built:" "Server: HP HTTP"
```

<div align="center"><img src="screenshots/hp.png" alt="Example: HP Printers" width="650" /></div>


### 全錄（Xerox）影印機／印表機 [🔎 &#x2192;](https://www.shodan.io/search?query=ssl%3A%22Xerox+Generic+Root%22)

```
ssl:"Xerox Generic Root"
```

<div align="center"><img src="screenshots/xerox.png" alt="Example: Xerox Copiers/Printers" width="550" /></div>


### 愛普生（Epson）印表機 [🔎 &#x2192;](https://www.shodan.io/search?query=%22SERVER%3A+EPSON_Linux+UPnP%22+%22200+OK%22)

```
"SERVER: EPSON_Linux UPnP" "200 OK"
```

```
"Server: EPSON-HTTP" "200 OK"
```

<div align="center"><img src="screenshots/epson.png" alt="Example: Epson Printers" width="500" /></div>


### 佳能（Canon）印表機 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+KS_HTTP%22+%22200+OK%22)

```
"Server: KS_HTTP" "200 OK"
```

```
"Server: CANON HTTP Server"
```

<div align="center"><img src="screenshots/canon.png" alt="Example: Canon Printers" width="500" /></div>


---


## 家用裝置


### 山葉（Yamaha）音響 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+AV_Receiver%22+%22HTTP%2F1.1+406%22)

```
"Server: AV_Receiver" "HTTP/1.1 406"
```

<div align="center"><img src="screenshots/yamaha.png" alt="Example: Yamaha Stereos" width="500" /></div>


### Apple AirPlay 接收器 [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5Cx08_airplay%22+port%3A5353)

Apple TV、HomePod 等。

```
"\x08_airplay" port:5353
```


### Chromecast / 智慧電視 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Chromecast%3A%22+port%3A8008)

```
"Chromecast:" port:8008
```


### [Crestron 智慧家庭](https://www.crestron.com/Products/Market-Solutions/Residential-Solutions) 控制器 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Model%3A+PYNG-HUB%22)

```
"Model: PYNG-HUB"
```

---


## 雜項


### OctoPrint 3D 印表機控制器 [🔎 &#x2192;](https://www.shodan.io/search?query=title%3A%22OctoPrint%22+-title%3A%22Login%22+http.favicon.hash%3A1307375944)

```
title:"OctoPrint" -title:"Login" http.favicon.hash:1307375944
```

<div align="center"><img src="screenshots/octoprint.png" alt="Example: OctoPrint 3D Printers" width="740" /></div>


### 乙太坊礦機 [🔎 &#x2192;](https://www.shodan.io/search?query=%22ETH+-+Total+speed%22)

```
"ETH - Total speed"
```

<div align="center"><img src="screenshots/eth.png" alt="Example: Etherium Miners" /></div>


### Apache 目錄列表 [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22Index+of+%2F%22+http.html%3A%22.pem%22)

將 `.pem` 替換為任意副檔名或檔名，例如 `phpinfo.php`。

```
http.title:"Index of /" http.html:".pem"
```


### 設定錯誤的 WordPress [🔎 &#x2192;](https://www.shodan.io/search?query=http.html%3A%22*+The+wp-config.php+creation+script+uses+this+file%22)

暴露了包含資料庫憑證的 [`wp-config.php`](https://github.com/WordPress/WordPress/blob/master/wp-config-sample.php) 檔案。

```
http.html:"* The wp-config.php creation script uses this file"
```


### 過多的 Minecraft 伺服器 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Minecraft+Server%22+%22protocol+340%22+port%3A25565)

```
"Minecraft Server" "protocol 340" port:25565
```


### 北韓 🇰🇵 的[一切](https://www.vox.com/2014/12/22/7435625/north-korea-internet) [🔎 &#x2192;](https://www.shodan.io/search?query=net%3A175.45.176.0%2F22%2C210.52.109.0%2F24)

```
net:175.45.176.0/22,210.52.109.0/24,77.94.35.0/24
```


### TCP 每日名言 [🔎 &#x2192;](https://www.shodan.io/search?query=port%3A17+product%3A%22Windows+qotd%22)

埠 17（[RFC 865](https://tools.ietf.org/html/rfc865)）有著[一段離奇的歷史](https://en.wikipedia.org/wiki/QOTD)……

```
port:17 product:"Windows qotd"
```


### 找一份做這個的工作！👩‍💼 [🔎 &#x2192;](https://www.shodan.io/search?query=%22X-Recruiting%3A%22)

```
"X-Recruiting:"
```


---


如果你發現了其他有趣的 Shodan 寶藏，無論是搜尋查詢還是具體範例，務必在部落格上[留下評論](https://jarv.is/notes/shodan-search-queries/#commento)，或在 GitHub 上[提交 issue／PR](https://github.com/jakejarvis/awesome-shodan-queries)。

一路順風，各位滲透愛好者！😉


## 授權條款

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

在法律允許的最大範圍內，[Jake Jarvis](https://jarv.is/) 已放棄本作品的所有版權及相關或鄰接權利。

鏡像自部落格文章 [https://jarv.is/notes/shodan-search-queries/](https://jarv.is/notes/shodan-search-queries/)。
