# Shodan 検索クエリ集 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)


長い間、私は [Shodan](https://www.shodan.io/)（[その名の通り](https://www.vice.com/en_uk/article/9bvxmd/shodan-exposes-the-dark-side-of-the-net)のインターネット検索エンジン）に放り込むための、興味深く、おかしく、そして憂鬱な検索クエリを集めてきました。中には頭を抱えたくなるような結果を返すものもあれば、実際に野外で見つかる深刻な、そして／または古い脆弱性を返すものもあります。

<p align="center">
  <img src="screenshots/shodan.png" /><br />
  <strong><a href="https://account.shodan.io/register">大半の検索フィルターには Shodan アカウントが必要です。</a></strong>
</p>

可能な場合、これらのクエリは保護されていない／オープンなインスタンスのみを返すと想定して構いません。法的な観点から、そうでない場合は（デフォルトのパスワードであっても）ログインしようとしてはいけません！ 末尾に `country:US` や `org:"Harvard University"`、`hostname:"nasa.gov"` のようなフィルターを追加することで結果を絞り込めます。

世界とそのデバイスは、きらびやかな新しい [Internet of ~~Things~~ Sh*t](https://motherboard.vice.com/en_us/topic/internet-of-shit) を通じて急速に相互接続されており、その結果として指数関数的に[危険](https://blog.malwarebytes.com/101/2017/12/internet-things-iot-security-never/)になっています。そのため、私はこのリストが害ではなく、意識の啓蒙（そして、率直に言えば、ズボンを濡らすような恐怖）を広めることを願っています。

**そしていつものように、[責任を持って発見し開示しましょう](https://www.bugcrowd.com/resource/what-is-responsible-disclosure/)! 🤓**


---


### **目次**

- [産業用制御システム](#industrial-control-systems)
- [リモートデスクトップ](#remote-desktop)
- [ネットワークインフラストラクチャ](#network-infrastructure)
- [ネットワーク接続ストレージ（NAS）](#network-attached-storage-nas)
- [ウェブカメラ](#webcams)
- [プリンターとコピー機](#printers--copiers)
- [家庭用デバイス](#home-devices)
- [その他](#random-stuff)


---


## 産業用制御システム


### Samsung 電子看板 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Prismview+Player%22)

```
"Server: Prismview Player"
```

<div align="center"><img src="screenshots/billboard3.png" alt="Example: Electronic Billboards" width="500" /></div>


### ガソリンスタンド給油ポンプ制御装置 [🔎 &#x2192;](https://www.shodan.io/search?query=%22in-tank+inventory%22+port%3A10001)

```
"in-tank inventory" port:10001
```

<div align="center"><img src="screenshots/7-11.png" alt="Example: Gas Station Pump Inventories" width="700" /></div>


### 自動ナンバープレートリーダー [🔎 &#x2192;](https://www.shodan.io/search?query=P372+%22ANPR+enabled%22)

```
P372 "ANPR enabled"
```

<div align="center"><img src="screenshots/plate-reader.png" alt="Example: Automatic License Plate Reader" /></div>


### 信号機制御装置 / 赤信号カメラ [🔎 &#x2192;](https://www.shodan.io/search?query=mikrotik+streetlight)

```
mikrotik streetlight
```


### アメリカの投票機 [🔎 &#x2192;](https://www.shodan.io/search?query=%22voter+system+serial%22+country%3AUS)

```
"voter system serial" country:US
```


### [Cisco Lawful Intercept](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst6500/ios/12-2SX/lawful/intercept/book/65LIch1.html) 盗聴を実行している通信事業者 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Cisco+IOS%22+%22ADVIPSERVICESK9_LI-M%22)

```
"Cisco IOS" "ADVIPSERVICESK9_LI-M"
```

Cisco が [RFC 3924](https://tools.ietf.org/html/rfc3924) で概説している盗聴の仕組み：

> 合法的な傍受（lawful intercept）とは、傍受対象者の通信を法的に認可された上で傍受し、監視することである。「傍受対象者（intercept subject）」という用語は[...]、その通信および／または傍受関連情報（IRI）を何らかの機関へ傍受し配信することが法的に認可されている電気通信サービスの加入者を指す。


### 刑務所の公衆電話 [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5B2J%5BH+Encartele+Confidential%22)

```
"[2J[H Encartele Confidential"
```


### [Tesla PowerPack](https://www.tesla.com/powerpack) 充電状況 [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22Tesla+PowerPack+System%22+http.component%3A%22d3%22+-ga3ca4f2)

```
http.title:"Tesla PowerPack System" http.component:"d3" -ga3ca4f2
```

<div align="center"><img src="screenshots/tesla.png" alt="Example: Tesla PowerPack Charging Status" /></div>


### 電気自動車充電器 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+gSOAP%2F2.8%22+%22Content-Length%3A+583%22)

```
"Server: gSOAP/2.8" "Content-Length: 583"
```


### 海上衛星 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Cobham+SATCOM%22+OR+%28%22Sailor%22+%22VSAT%22%29)

Shodan は船の位置をリアルタイムにマップする、かなり素晴らしい [Ship Tracker](https://shiptracker.shodan.io/) も作っています！

```
"Cobham SATCOM" OR ("Sailor" "VSAT")
```

<div align="center"><img src="screenshots/sailor-vsat.png" alt="Example: Maritime Satellites" width="700" /></div>


### 潜水艦ミッションコントロールダッシュボード [🔎 &#x2192;](https://www.shodan.io/search?query=title%3A%22Slocum+Fleet+Mission+Control%22)

```
title:"Slocum Fleet Mission Control"
```


### [CAREL PlantVisor](https://www.carel.com/product/plantvisor) 冷凍ユニット [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+CarelDataServer%22+%22200+Document+follows%22)

```
"Server: CarelDataServer" "200 Document follows"
```

<div align="center"><img src="screenshots/refrigeration.png" alt="Example: CAREL PlantVisor Refrigeration Units" /></div>


### [Nordex Wind Turbine](http://www.nordex-online.com/en/products-services/wind-turbines.html) 風力発電所 [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22Nordex+Control%22+%22Windows+2000+5.0+x86%22+%22Jetty%2F3.1+%28JSP+1.1%3B+Servlet+2.2%3B+java+1.6.0_14%29%22)

```
http.title:"Nordex Control" "Windows 2000 5.0 x86" "Jetty/3.1 (JSP 1.1; Servlet 2.2; java 1.6.0_14)"
```


### [C4 Max](https://www.mobile-devices.com/our-products/c4-max/) 商用車 GPS トラッカー [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5B1m%5B35mWelcome+on+console%22)

```
"[1m[35mWelcome on console"
```

<div align="center"><img src="screenshots/c4max.png" alt="Example: C4 Max Vehicle GPS" width="780" /></div>


### [DICOM](https://www.dicomstandard.org/about/) 医療用 X 線装置 [🔎 &#x2192;](https://www.shodan.io/search?query=%22DICOM+Server+Response%22+port%3A104)

デフォルトで保護されており、幸いなことに、これらの 1,700 台以上の装置がインターネットに[あるべきではない](https://documents.trendmicro.com/assets/rpt/rpt-securing-connected-hospitals.pdf)。

```
"DICOM Server Response" port:104
```


### [GaugeTech](https://electroind.com/all-products/) 電力メーター [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+EIG+Embedded+Web+Server%22+%22200+Document+follows%22)

```
"Server: EIG Embedded Web Server" "200 Document follows"
```

<div align="center"><img src="screenshots/power-gaugetech.png" alt="Example: GaugeTech Electricity Meters" width="650" /></div>


### Siemens 産業オートメーション [🔎 &#x2192;](https://www.shodan.io/search?query=%22Siemens%2C+SIMATIC%22+port%3A161)

```
"Siemens, SIMATIC" port:161
```


### Siemens HVAC 制御装置 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Microsoft-WinCE%22+%22Content-Length%3A+12581%22)

```
"Server: Microsoft-WinCE" "Content-Length: 12581"
```


### ドア／錠のアクセス制御装置 [🔎 &#x2192;](https://www.shodan.io/search?query=%22HID+VertX%22+port%3A4070)

```
"HID VertX" port:4070
```


### 鉄道管理 [🔎 &#x2192;](https://www.shodan.io/search?query=%22log+off%22+%22select+the+appropriate%22)

```
"log off" "select the appropriate"
```


---


## リモートデスクトップ


### 保護されていない VNC [🔎 &#x2192;](https://www.shodan.io/search?query=%22authentication+disabled%22+%22RFB+003.008%22)

```
"authentication disabled" "RFB 003.008"
```

[Shodan Images](https://images.shodan.io/) は、スクリーンショットを閲覧するのに非常に便利な補助ツールです、ついでに！[🔎 &#x2192;](https://images.shodan.io/?query=%22authentication+disabled%22+%21screenshot.label%3Ablank)

<p align="center">
  <img src="screenshots/vnc.png" alt="Example: Unprotected VNC" /><br />
  <em>現在の最初の結果。😞</em>
</p>


### Windows RDP [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5Cx03%5Cx00%5Cx00%5Cx0b%5Cx06%5Cxd0%5Cx00%5Cx00%5Cx124%5Cx00%22)

99.99% は二次的な Windows ログイン画面によって保護されています。

```
"\x03\x00\x00\x0b\x06\xd0\x00\x00\x124\x00"
```


---


## ネットワークインフラストラクチャ


### [Weave Scope](https://www.weave.works/oss/scope/) ダッシュボード [🔎 &#x2192;](https://www.shodan.io/search?query=title%3A%22Weave+Scope%22+http.favicon.hash%3A567176827)

Kubernetes ポッドや Docker コンテナ内へのコマンドラインアクセス、およびインフラストラクチャ全体のリアルタイム可視化／監視が可能。

```
title:"Weave Scope" http.favicon.hash:567176827
```

<div align="center"><img src="screenshots/weavescope.png" alt="Example: Weave Scope Dashboards" /></div>


### MongoDB [🔎 &#x2192;](https://www.shodan.io/search?query=product%3AMongoDB+-authentication)

古いバージョンはデフォルトで安全ではありませんでした。[非常に恐ろしい。](https://krebsonsecurity.com/tag/mongodb/)

```
"MongoDB Server Information" port:27017 -authentication
```

<div align="center"><img src="screenshots/mongo.png" alt="Example: MongoDB" width="500" /></div>


### [Mongo Express](https://github.com/mongo-express/mongo-express) Web GUI [🔎 &#x2192;](https://www.shodan.io/search?query=%22Set-Cookie%3A+mongo-express%3D%22+%22200+OK%22)

[悪名高い phpMyAdmin](https://www.cvedetails.com/vulnerability-list/vendor_id-784/Phpmyadmin.html) に似ていますが、MongoDB 向けです。

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


### Docker プライベートレジストリ [🔎 &#x2192;](https://www.shodan.io/search?query=%22Docker-Distribution-Api-Version%3A+registry%22+%22200+OK%22+-gitlab)

```
"Docker-Distribution-Api-Version: registry" "200 OK" -gitlab
```


### [Pi-hole](https://pi-hole.net/) オープン DNS サーバー [🔎 &#x2192;](https://www.shodan.io/search?query=%22dnsmasq-pi-hole%22+%22Recursion%3A+enabled%22)

```
"dnsmasq-pi-hole" "Recursion: enabled"
```


### Telnet 経由で既に `root` としてログイン済み [🔎 &#x2192;](https://www.shodan.io/search?query=%22root%40%22+port%3A23+-login+-password+-name+-Session)

```
"root@" port:23 -login -password -name -Session
```


### Android ルートブリッジ [🔎 &#x2192;](https://www.shodan.io/search?query=%22Android+Debug+Bridge%22+%22Device%22+port%3A5555)

Google のずさんでバラバラなアップデート方針の結果として生じた二次的な現象です。🙄 [詳細はこちら。](https://medium.com/p/root-bridge-how-thousands-of-internet-connected-android-devices-now-have-no-security-and-are-b46a68cb0f20)

```
"Android Debug Bridge" "Device" port:5555
```


### Lantronix シリアル-イーサネットアダプター [Telnet パスワード漏洩](https://www.bleepingcomputer.com/news/security/thousands-of-serial-to-ethernet-devices-leak-telnet-passwords/) [🔎 &#x2192;](https://www.shodan.io/search?query=Lantronix+password+port%3A30718+-secured)

```
Lantronix password port:30718 -secured
```


### Citrix Virtual Apps [🔎 &#x2192;](https://www.shodan.io/search?query=%22Citrix+Applications%3A%22+port%3A1604)

```
"Citrix Applications:" port:1604
```

<div align="center"><img src="screenshots/citrix.png" alt="Example: Citrix Virtual Apps" width="700" /></div>


### Cisco Smart Install [🔎 &#x2192;](https://www.shodan.io/search?query=%22smart+install+client+active%22)

[脆弱](https://2016.zeronights.ru/wp-content/uploads/2016/12/CiscoSmartInstall.v3.pdf)（ある意味「仕様通り」ですが、特に露出している場合に）。

```
"smart install client active"
```


### PBX IP 電話ゲートウェイ [🔎 &#x2192;](https://www.shodan.io/search?query=PBX+%22gateway+console%22+-password+port%3A23)

```
PBX "gateway console" -password port:23
```


### [Polycom](https://www.polycom.com/hd-video-conferencing.html) ビデオ会議 [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22-+Polycom%22+%22Server%3A+lighttpd%22)

```
http.title:"- Polycom" "Server: lighttpd"
```

Telnet 設定：[🔎 &#x2192;](https://www.shodan.io/search?query=%22Polycom+Command+Shell%22+-failed+port%3A23)

```
"Polycom Command Shell" -failed port:23
```

<div align="center"><img src="screenshots/polycom.png" alt="Example: Polycom Video Conferencing" /></div>


### [Bomgar Help Desk](https://www.beyondtrust.com/remote-support/integrations) ポータル [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Bomgar%22+%22200+OK%22)

```
"Server: Bomgar" "200 OK"
```


### Intel Active Management [CVE-2017-5689](https://www.exploit-db.com/exploits/43385) [🔎 &#x2192;](https://www.shodan.io/search?query=%22Intel%28R%29+Active+Management+Technology%22+port%3A623%2C664%2C16992%2C16993%2C16994%2C16995)

```
"Intel(R) Active Management Technology" port:623,664,16992,16993,16994,16995
```


### HP iLO 4 [CVE-2017-12542](https://nvd.nist.gov/vuln/detail/CVE-2017-12542) [🔎 &#x2192;](https://www.shodan.io/search?query=HP-ILO-4+%21%22HP-ILO-4%2F2.53%22+%21%22HP-ILO-4%2F2.54%22+%21%22HP-ILO-4%2F2.55%22+%21%22HP-ILO-4%2F2.60%22+%21%22HP-ILO-4%2F2.61%22+%21%22HP-ILO-4%2F2.62%22+%21%22HP-iLO-4%2F2.70%22+port%3A1900)

```
HP-ILO-4 !"HP-ILO-4/2.53" !"HP-ILO-4/2.54" !"HP-ILO-4/2.55" !"HP-ILO-4/2.60" !"HP-ILO-4/2.61" !"HP-ILO-4/2.62" !"HP-iLO-4/2.70" port:1900
```


### Outlook Web Access:

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


## ネットワーク接続ストレージ（NAS）


### SMB（Samba）ファイル共有 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Authentication%3A+disabled%22+port%3A445)

約 500,000 件の結果を返します……「Documents」や「Videos」などを追加して絞り込んでください。

```
"Authentication: disabled" port:445
```

具体的にはドメインコントローラー：[🔎 &#x2192;](https://www.shodan.io/search?query=%22Authentication%3A+disabled%22+NETLOGON+SYSVOL+-unix+port%3A445)

```
"Authentication: disabled" NETLOGON SYSVOL -unix port:445
```

QuickBooks の[デフォルトのネットワーク共有](https://quickbooks.intuit.com/learn-support/en-us/help-articles/set-up-folder-and-windows-access-permissions-to-share-company/01/201880) ファイルについて：[🔎 &#x2192;](https://www.shodan.io/search?query=%22Authentication%3A+disabled%22+%22Shared+this+folder+to+access+QuickBooks+files+OverNetwork%22+-unix+port%3A445)

```
"Authentication: disabled" "Shared this folder to access QuickBooks files OverNetwork" -unix port:445
```


### 匿名ログイン可能な FTP サーバー [🔎 &#x2192;](https://www.shodan.io/search?query=%22220%22+%22230+Login+successful.%22+port%3A21)

```
"220" "230 Login successful." port:21
```


### Iomega / LenovoEMC NAS ドライブ [🔎 &#x2192;](https://www.shodan.io/search?query=%22Set-Cookie%3A+iomega%3D%22+-%22manage%2Flogin.html%22+-http.title%3A%22Log+In%22)

```
"Set-Cookie: iomega=" -"manage/login.html" -http.title:"Log In"
```

<div align="center"><img src="screenshots/iomega.png" alt="Example: Iomega / LenovoEMC NAS Drives" width="600" /></div>


### Buffalo TeraStation NAS ドライブ [🔎 &#x2192;](https://www.shodan.io/search?query=Redirecting+sencha+port%3A9000)

```
Redirecting sencha port:9000
```

<div align="center"><img src="screenshots/buffalo.png" alt="Example: Buffalo TeraStation NAS Drives" width="600" /></div>


### Logitech メディアサーバー [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Logitech+Media+Server%22+%22200+OK%22)

```
"Server: Logitech Media Server" "200 OK"
```

<div align="center"><img src="screenshots/logitech.png" alt="Example: Logitech Media Servers" width="500" /></div>


### [Plex](https://www.plex.tv/) メディアサーバー [🔎 &#x2192;](https://www.shodan.io/search?query=%22X-Plex-Protocol%22+%22200+OK%22+port%3A32400)

```
"X-Plex-Protocol" "200 OK" port:32400
```


### [Tautulli / PlexPy](https://github.com/Tautulli/Tautulli) ダッシュボード [🔎 &#x2192;](https://www.shodan.io/search?query=%22CherryPy%2F5.1.0%22+%22%2Fhome%22)

```
"CherryPy/5.1.0" "/home"
```

<div align="center"><img src="screenshots/plexpy.png" alt="Example: PlexPy / Tautulli Dashboards" width="570" /></div>


---


## ウェブカメラ

例の画像は不要です。🤦

### Yawcams [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+yawcam%22+%22Mime-Type%3A+text%2Fhtml%22)

```
"Server: yawcam" "Mime-Type: text/html"
```


### webcamXP/webcam7 [🔎 &#x2192;](https://www.shodan.io/search?query=%28%22webcam+7%22+OR+%22webcamXP%22%29+http.component%3A%22mootools%22+-401)

```
("webcam 7" OR "webcamXP") http.component:"mootools" -401
```


### Android IP Webcam サーバー [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+IP+Webcam+Server%22+%22200+OK%22)

```
"Server: IP Webcam Server" "200 OK"
```


### セキュリティ DVR [🔎 &#x2192;](https://www.shodan.io/search?query=html%3A%22DVR_H264+ActiveX%22)

```
html:"DVR_H264 ActiveX"
```


---


## プリンターとコピー機：


### HP プリンター [🔎 &#x2192;](https://www.shodan.io/search?query=%22Serial+Number%3A%22+%22Built%3A%22+%22Server%3A+HP+HTTP%22)

```
"Serial Number:" "Built:" "Server: HP HTTP"
```

<div align="center"><img src="screenshots/hp.png" alt="Example: HP Printers" width="650" /></div>


### Xerox コピー機／プリンター [🔎 &#x2192;](https://www.shodan.io/search?query=ssl%3A%22Xerox+Generic+Root%22)

```
ssl:"Xerox Generic Root"
```

<div align="center"><img src="screenshots/xerox.png" alt="Example: Xerox Copiers/Printers" width="550" /></div>


### Epson プリンター [🔎 &#x2192;](https://www.shodan.io/search?query=%22SERVER%3A+EPSON_Linux+UPnP%22+%22200+OK%22)

```
"SERVER: EPSON_Linux UPnP" "200 OK"
```

```
"Server: EPSON-HTTP" "200 OK"
```

<div align="center"><img src="screenshots/epson.png" alt="Example: Epson Printers" width="500" /></div>


### Canon プリンター [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+KS_HTTP%22+%22200+OK%22)

```
"Server: KS_HTTP" "200 OK"
```

```
"Server: CANON HTTP Server"
```

<div align="center"><img src="screenshots/canon.png" alt="Example: Canon Printers" width="500" /></div>


---


## 家庭用デバイス


### Yamaha ステレオ [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+AV_Receiver%22+%22HTTP%2F1.1+406%22)

```
"Server: AV_Receiver" "HTTP/1.1 406"
```

<div align="center"><img src="screenshots/yamaha.png" alt="Example: Yamaha Stereos" width="500" /></div>


### Apple AirPlay レシーバー [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5Cx08_airplay%22+port%3A5353)

Apple TV、HomePod など。

```
"\x08_airplay" port:5353
```


### Chromecast / スマート TV [🔎 &#x2192;](https://www.shodan.io/search?query=%22Chromecast%3A%22+port%3A8008)

```
"Chromecast:" port:8008
```


### [Crestron Smart Home](https://www.crestron.com/Products/Market-Solutions/Residential-Solutions) コントローラー [🔎 &#x2192;](https://www.shodan.io/search?query=%22Model%3A+PYNG-HUB%22)

```
"Model: PYNG-HUB"
```

---


## その他


### OctoPrint 3D プリンターコントローラー [🔎 &#x2192;](https://www.shodan.io/search?query=title%3A%22OctoPrint%22+-title%3A%22Login%22+http.favicon.hash%3A1307375944)

```
title:"OctoPrint" -title:"Login" http.favicon.hash:1307375944
```

<div align="center"><img src="screenshots/octoprint.png" alt="Example: OctoPrint 3D Printers" width="740" /></div>


### イーサリアムマイナー [🔎 &#x2192;](https://www.shodan.io/search?query=%22ETH+-+Total+speed%22)

```
"ETH - Total speed"
```

<div align="center"><img src="screenshots/eth.png" alt="Example: Etherium Miners" /></div>


### Apache ディレクトリリスト [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22Index+of+%2F%22+http.html%3A%22.pem%22)

`.pem` を `phpinfo.php` のような任意の拡張子やファイル名に置き換えてください。

```
http.title:"Index of /" http.html:".pem"
```


### 設定ミスのある WordPress [🔎 &#x2192;](https://www.shodan.io/search?query=http.html%3A%22*+The+wp-config.php+creation+script+uses+this+file%22)

データベースの認証情報を含む [`wp-config.php`](https://github.com/WordPress/WordPress/blob/master/wp-config-sample.php) ファイルが公開されています。

```
http.html:"* The wp-config.php creation script uses this file"
```


### 多すぎる Minecraft サーバー [🔎 &#x2192;](https://www.shodan.io/search?query=%22Minecraft+Server%22+%22protocol+340%22+port%3A25565)

```
"Minecraft Server" "protocol 340" port:25565
```


### 北朝鮮 🇰🇵 の[すべて](https://www.vox.com/2014/12/22/7435625/north-korea-internet) [🔎 &#x2192;](https://www.shodan.io/search?query=net%3A175.45.176.0%2F22%2C210.52.109.0%2F24)

```
net:175.45.176.0/22,210.52.109.0/24,77.94.35.0/24
```


### TCP 今日の一言 [🔎 &#x2192;](https://www.shodan.io/search?query=port%3A17+product%3A%22Windows+qotd%22)

ポート 17（[RFC 865](https://tools.ietf.org/html/rfc865)）には[奇妙な歴史](https://en.wikipedia.org/wiki/QOTD)があります……

```
port:17 product:"Windows qotd"
```


### これで稼ぐ仕事を見つけよう！👩‍💼 [🔎 &#x2192;](https://www.shodan.io/search?query=%22X-Recruiting%3A%22)

```
"X-Recruiting:"
```


---


他にも面白い Shodan の宝物（検索クエリでも具体的な例でも）を見つけたら、ぜひブログに[コメント](https://jarv.is/notes/shodan-search-queries/#commento)を残すか、GitHub で[issue／PR を開いて](https://github.com/jakejarvis/awesome-shodan-queries)ください。

良い旅を、仲間の侵入者たち！😉


## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲において、[Jake Jarvis](https://jarv.is/) は本作品に関するすべての著作権および関連または隣接する権利を放棄しています。

https://jarv.is/notes/shodan-search-queries/ のブログ記事からミラー。
