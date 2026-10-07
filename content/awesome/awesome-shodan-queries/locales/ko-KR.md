# Shodan 검색 쿼리 모음 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)


시간이 지나면서 저는 (말 그대로) 인터넷 검색 엔진인 [Shodan](https://www.shodan.io/)([말 그대로](https://www.vice.com/en_uk/article/9bvxmd/shodan-exposes-the-dark-side-of-the-net))에 넣어볼 흥미롭고, 우스꽝스럽고, 우울한 검색 쿼리들을 모아왔습니다. 어떤 것은 머리를 감싸쥐게 만드는 결과를 반환하고,另一些은 실제 환경에서 발견되는 심각한 그리고/또는 오래된 취약점을 반환합니다.

<p align="center">
  <img src="screenshots/shodan.png" /><br />
  <strong><a href="https://account.shodan.io/register">대부분의 검색 필터에는 Shodan 계정이 필요합니다.</a></strong>
</p>

가능한 경우, 이러한 쿼리는 보호되지 않은/개방된 인스턴스만 반환한다고 가정해도 됩니다. 법적인 이익을 위해, 그렇지 않다면 (기본 암호라도) 로그인을 시도하지 마세요! 끝에 `country:US`나 `org:"Harvard University"` 또는 `hostname:"nasa.gov"`와 같은 필터를 추가하여 결과를 좁히세요.

세계와 그 기기들은 반짝이는 새로운 [Internet of ~~Things~~ Sh*t](https://motherboard.vice.com/en_us/topic/internet-of-shit)를 통해 빠르게 연결되고 있으며, 그 결과로 기하급수적으로 [더 위험해지고](https://blog.malwarebytes.com/101/2017/12/internet-things-iot-security-never/) 있습니다. 이를 위해 저는 이 목록이 해악이 아닌 인식 확산(그리고, 솔직히 바지가 젖을 정도의 공포)을 가져오기를 바랍니다.

**그리고 늘 그렇듯, [책임감 있게 발견하고 공개하세요](https://www.bugcrowd.com/resource/what-is-responsible-disclosure/)! 🤓**


---


### **목차**

- [산업 제어 시스템](#industrial-control-systems)
- [원격 데스크톱](#remote-desktop)
- [네트워크 인프라](#network-infrastructure)
- [네트워크 연결 저장장치(NAS)](#network-attached-storage-nas)
- [웹캠](#webcams)
- [프린터 및 복사기](#printers--copiers)
- [가정용 기기](#home-devices)
- [기타](#random-stuff)


---


## 산업 제어 시스템


### Samsung 전자 게시판 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Prismview+Player%22)

```
"Server: Prismview Player"
```

<div align="center"><img src="screenshots/billboard3.png" alt="Example: Electronic Billboards" width="500" /></div>


### 주유소 펌프 제어기 [🔎 &#x2192;](https://www.shodan.io/search?query=%22in-tank+inventory%22+port%3A10001)

```
"in-tank inventory" port:10001
```

<div align="center"><img src="screenshots/7-11.png" alt="Example: Gas Station Pump Inventories" width="700" /></div>


### 자동 번호판 판독기 [🔎 &#x2192;](https://www.shodan.io/search?query=P372+%22ANPR+enabled%22)

```
P372 "ANPR enabled"
```

<div align="center"><img src="screenshots/plate-reader.png" alt="Example: Automatic License Plate Reader" /></div>


### 신호등 제어기 / 과속 단속 카메라 [🔎 &#x2192;](https://www.shodan.io/search?query=mikrotik+streetlight)

```
mikrotik streetlight
```


### 미국 투표기 [🔎 &#x2192;](https://www.shodan.io/search?query=%22voter+system+serial%22+country%3AUS)

```
"voter system serial" country:US
```


### [Cisco Lawful Intercept](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst6500/ios/12-2SX/lawful/intercept/book/65LIch1.html) 도청을 운영하는 통신사 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Cisco+IOS%22+%22ADVIPSERVICESK9_LI-M%22)

```
"Cisco IOS" "ADVIPSERVICESK9_LI-M"
```

Cisco가 [RFC 3924](https://tools.ietf.org/html/rfc3924)에 명시한 도청 메커니즘:

> 합법적 차단(lawful intercept)이란 차단 대상의 통신을 법적으로 허가받아 차단 및 감시하는 것이다. "차단 대상(intercept subject)"이라는 용어는 [...] 통신 및/또는 차단 관련 정보(IRI)를 어떤 기관에 차단하여 전달할 수 있도록 법적으로 허가받은 통신 서비스 가입자를 의미한다.


### 교도소 공중 전화 [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5B2J%5BH+Encartele+Confidential%22)

```
"[2J[H Encartele Confidential"
```


### [Tesla PowerPack](https://www.tesla.com/powerpack) 충전 상태 [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22Tesla+PowerPack+System%22+http.component%3A%22d3%22+-ga3ca4f2)

```
http.title:"Tesla PowerPack System" http.component:"d3" -ga3ca4f2
```

<div align="center"><img src="screenshots/tesla.png" alt="Example: Tesla PowerPack Charging Status" /></div>


### 전기차 충전기 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+gSOAP%2F2.8%22+%22Content-Length%3A+583%22)

```
"Server: gSOAP/2.8" "Content-Length: 583"
```


### 해상 위성 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Cobham+SATCOM%22+OR+%28%22Sailor%22+%22VSAT%22%29)

Shodan은 선박 위치를 실시간으로 지도에 표시하는 아주 멋진 [Ship Tracker](https://shiptracker.shodan.io/)도 만들었습니다!

```
"Cobham SATCOM" OR ("Sailor" "VSAT")
```

<div align="center"><img src="screenshots/sailor-vsat.png" alt="Example: Maritime Satellites" width="700" /></div>


### 잠수함 임무 제어 대시보드 [🔎 &#x2192;](https://www.shodan.io/search?query=title%3A%22Slocum+Fleet+Mission+Control%22)

```
title:"Slocum Fleet Mission Control"
```


### [CAREL PlantVisor](https://www.carel.com/product/plantvisor) 냉장 유닛 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+CarelDataServer%22+%22200+Document+follows%22)

```
"Server: CarelDataServer" "200 Document follows"
```

<div align="center"><img src="screenshots/refrigeration.png" alt="Example: CAREL PlantVisor Refrigeration Units" /></div>


### [Nordex Wind Turbine](http://www.nordex-online.com/en/products-services/wind-turbines.html) 풍력 발전 단지 [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22Nordex+Control%22+%22Windows+2000+5.0+x86%22+%22Jetty%2F3.1+%28JSP+1.1%3B+Servlet+2.2%3B+java+1.6.0_14%29%22)

```
http.title:"Nordex Control" "Windows 2000 5.0 x86" "Jetty/3.1 (JSP 1.1; Servlet 2.2; java 1.6.0_14)"
```


### [C4 Max](https://www.mobile-devices.com/our-products/c4-max/) 상용차 GPS 추적기 [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5B1m%5B35mWelcome+on+console%22)

```
"[1m[35mWelcome on console"
```

<div align="center"><img src="screenshots/c4max.png" alt="Example: C4 Max Vehicle GPS" width="780" /></div>


### [DICOM](https://www.dicomstandard.org/about/) 의료용 X선 장비 [🔎 &#x2192;](https://www.shodan.io/search?query=%22DICOM+Server+Response%22+port%3A104)

기본적으로 보호되어 다행이지만, 이 1,700대 이상의 장비는 인터넷에 [있어서는 안 될](https://documents.trendmicro.com/assets/rpt/rpt-securing-connected-hospitals.pdf) 것입니다.

```
"DICOM Server Response" port:104
```


### [GaugeTech](https://electroind.com/all-products/) 전력 계량기 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+EIG+Embedded+Web+Server%22+%22200+Document+follows%22)

```
"Server: EIG Embedded Web Server" "200 Document follows"
```

<div align="center"><img src="screenshots/power-gaugetech.png" alt="Example: GaugeTech Electricity Meters" width="650" /></div>


### Siemens 산업 자동화 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Siemens%2C+SIMATIC%22+port%3A161)

```
"Siemens, SIMATIC" port:161
```


### Siemens HVAC 제어기 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Microsoft-WinCE%22+%22Content-Length%3A+12581%22)

```
"Server: Microsoft-WinCE" "Content-Length: 12581"
```


### 도어 / 잠금 접근 제어기 [🔎 &#x2192;](https://www.shodan.io/search?query=%22HID+VertX%22+port%3A4070)

```
"HID VertX" port:4070
```


### 철도 관리 [🔎 &#x2192;](https://www.shodan.io/search?query=%22log+off%22+%22select+the+appropriate%22)

```
"log off" "select the appropriate"
```


---


## 원격 데스크톱


### 보호되지 않은 VNC [🔎 &#x2192;](https://www.shodan.io/search?query=%22authentication+disabled%22+%22RFB+003.008%22)

```
"authentication disabled" "RFB 003.008"
```

[Shodan Images](https://images.shodan.io/)는 스크린샷을 둘러보기에 아주 좋은 보조 도구입니다, 참고로! [🔎 &#x2192;](https://images.shodan.io/?query=%22authentication+disabled%22+%21screenshot.label%3Ablank)

<p align="center">
  <img src="screenshots/vnc.png" alt="Example: Unprotected VNC" /><br />
  <em>지금 첫 번째 결과. 😞</em>
</p>


### Windows RDP [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5Cx03%5Cx00%5Cx00%5Cx0b%5Cx06%5Cxd0%5Cx00%5Cx00%5Cx124%5Cx00%22)

99.99%는 2차 Windows 로그인 화면으로 보호됩니다.

```
"\x03\x00\x00\x0b\x06\xd0\x00\x00\x124\x00"
```


---


## 네트워크 인프라


### [Weave Scope](https://www.weave.works/oss/scope/) 대시보드 [🔎 &#x2192;](https://www.shodan.io/search?query=title%3A%22Weave+Scope%22+http.favicon.hash%3A567176827)

Kubernetes 팟과 Docker 컨테이너 내부에 명령줄 접근이 가능하며, 전체 인프라를 실시간으로 시각화/모니터링합니다.

```
title:"Weave Scope" http.favicon.hash:567176827
```

<div align="center"><img src="screenshots/weavescope.png" alt="Example: Weave Scope Dashboards" /></div>


### MongoDB [🔎 &#x2192;](https://www.shodan.io/search?query=product%3AMongoDB+-authentication)

이전 버전은 기본적으로 안전하지 않았습니다. [아주 무섭습니다.](https://krebsonsecurity.com/tag/mongodb/)

```
"MongoDB Server Information" port:27017 -authentication
```

<div align="center"><img src="screenshots/mongo.png" alt="Example: MongoDB" width="500" /></div>


### [Mongo Express](https://github.com/mongo-express/mongo-express) 웹 GUI [🔎 &#x2192;](https://www.shodan.io/search?query=%22Set-Cookie%3A+mongo-express%3D%22+%22200+OK%22)

유명한 [phpMyAdmin](https://www.cvedetails.com/vulnerability-list/vendor_id-784/Phpmyadmin.html)과 비슷하지만 MongoDB용입니다.

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


### Docker 비공개 레지스트리 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Docker-Distribution-Api-Version%3A+registry%22+%22200+OK%22+-gitlab)

```
"Docker-Distribution-Api-Version: registry" "200 OK" -gitlab
```


### [Pi-hole](https://pi-hole.net/) 개방형 DNS 서버 [🔎 &#x2192;](https://www.shodan.io/search?query=%22dnsmasq-pi-hole%22+%22Recursion%3A+enabled%22)

```
"dnsmasq-pi-hole" "Recursion: enabled"
```


### Telnet을 통해 이미 `root`로 로그인됨 [🔎 &#x2192;](https://www.shodan.io/search?query=%22root%40%22+port%3A23+-login+-password+-name+-Session)

```
"root@" port:23 -login -password -name -Session
```


### Android 루트 브리지 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Android+Debug+Bridge%22+%22Device%22+port%3A5555)

Google의 엉망이고 조각난 업데이트 방식의 부산물입니다. 🙄 [자세히 보기.](https://medium.com/p/root-bridge-how-thousands-of-internet-connected-android-devices-now-have-no-security-and-are-b46a68cb0f20)

```
"Android Debug Bridge" "Device" port:5555
```


### Lantronix 시리얼-이더넷 어댑터 [Telnet 비밀번호 유출](https://www.bleepingcomputer.com/news/security/thousands-of-serial-to-ethernet-devices-leak-telnet-passwords/) [🔎 &#x2192;](https://www.shodan.io/search?query=Lantronix+password+port%3A30718+-secured)

```
Lantronix password port:30718 -secured
```


### Citrix Virtual Apps [🔎 &#x2192;](https://www.shodan.io/search?query=%22Citrix+Applications%3A%22+port%3A1604)

```
"Citrix Applications:" port:1604
```

<div align="center"><img src="screenshots/citrix.png" alt="Example: Citrix Virtual Apps" width="700" /></div>


### Cisco Smart Install [🔎 &#x2192;](https://www.shodan.io/search?query=%22smart+install+client+active%22)

[취약](https://2016.zeronights.ru/wp-content/uploads/2016/12/CiscoSmartInstall.v3.pdf)함(어느 정도는 "설계상"이지만, 특히 노출되었을 때).

```
"smart install client active"
```


### PBX IP 전화 게이트웨이 [🔎 &#x2192;](https://www.shodan.io/search?query=PBX+%22gateway+console%22+-password+port%3A23)

```
PBX "gateway console" -password port:23
```


### [Polycom](https://www.polycom.com/hd-video-conferencing.html) 화상 회의 [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22-+Polycom%22+%22Server%3A+lighttpd%22)

```
http.title:"- Polycom" "Server: lighttpd"
```

Telnet 설정: [🔎 &#x2192;](https://www.shodan.io/search?query=%22Polycom+Command+Shell%22+-failed+port%3A23)

```
"Polycom Command Shell" -failed port:23
```

<div align="center"><img src="screenshots/polycom.png" alt="Example: Polycom Video Conferencing" /></div>


### [Bomgar Help Desk](https://www.beyondtrust.com/remote-support/integrations) 포털 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Bomgar%22+%22200+OK%22)

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


## 네트워크 연결 저장장치(NAS)


### SMB(Samba) 파일 공유 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Authentication%3A+disabled%22+port%3A445)

약 500,000개의 결과를 반환합니다... "Documents"나 "Videos" 등을 추가하여 범위를 좁히세요.

```
"Authentication: disabled" port:445
```

특히 도메인 컨트롤러: [🔎 &#x2192;](https://www.shodan.io/search?query=%22Authentication%3A+disabled%22+NETLOGON+SYSVOL+-unix+port%3A445)

```
"Authentication: disabled" NETLOGON SYSVOL -unix port:445
```

QuickBooks의 [기본 네트워크 공유](https://quickbooks.intuit.com/learn-support/en-us/help-articles/set-up-folder-and-windows-access-permissions-to-share-company/01/201880) 파일에 대해: [🔎 &#x2192;](https://www.shodan.io/search?query=%22Authentication%3A+disabled%22+%22Shared+this+folder+to+access+QuickBooks+files+OverNetwork%22+-unix+port%3A445)

```
"Authentication: disabled" "Shared this folder to access QuickBooks files OverNetwork" -unix port:445
```


### 익명 로그인이 가능한 FTP 서버 [🔎 &#x2192;](https://www.shodan.io/search?query=%22220%22+%22230+Login+successful.%22+port%3A21)

```
"220" "230 Login successful." port:21
```


### Iomega / LenovoEMC NAS 드라이브 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Set-Cookie%3A+iomega%3D%22+-%22manage%2Flogin.html%22+-http.title%3A%22Log+In%22)

```
"Set-Cookie: iomega=" -"manage/login.html" -http.title:"Log In"
```

<div align="center"><img src="screenshots/iomega.png" alt="Example: Iomega / LenovoEMC NAS Drives" width="600" /></div>


### Buffalo TeraStation NAS 드라이브 [🔎 &#x2192;](https://www.shodan.io/search?query=Redirecting+sencha+port%3A9000)

```
Redirecting sencha port:9000
```

<div align="center"><img src="screenshots/buffalo.png" alt="Example: Buffalo TeraStation NAS Drives" width="600" /></div>


### Logitech 미디어 서버 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Logitech+Media+Server%22+%22200+OK%22)

```
"Server: Logitech Media Server" "200 OK"
```

<div align="center"><img src="screenshots/logitech.png" alt="Example: Logitech Media Servers" width="500" /></div>


### [Plex](https://www.plex.tv/) 미디어 서버 [🔎 &#x2192;](https://www.shodan.io/search?query=%22X-Plex-Protocol%22+%22200+OK%22+port%3A32400)

```
"X-Plex-Protocol" "200 OK" port:32400
```


### [Tautulli / PlexPy](https://github.com/Tautulli/Tautulli) 대시보드 [🔎 &#x2192;](https://www.shodan.io/search?query=%22CherryPy%2F5.1.0%22+%22%2Fhome%22)

```
"CherryPy/5.1.0" "/home"
```

<div align="center"><img src="screenshots/plexpy.png" alt="Example: PlexPy / Tautulli Dashboards" width="570" /></div>


---


## 웹캠

예시 이미지는 필요 없습니다. 🤦

### Yawcams [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+yawcam%22+%22Mime-Type%3A+text%2Fhtml%22)

```
"Server: yawcam" "Mime-Type: text/html"
```


### webcamXP/webcam7 [🔎 &#x2192;](https://www.shodan.io/search?query=%28%22webcam+7%22+OR+%22webcamXP%22%29+http.component%3A%22mootools%22+-401)

```
("webcam 7" OR "webcamXP") http.component:"mootools" -401
```


### Android IP 웹캠 서버 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+IP+Webcam+Server%22+%22200+OK%22)

```
"Server: IP Webcam Server" "200 OK"
```


### 보안 DVR [🔎 &#x2192;](https://www.shodan.io/search?query=html%3A%22DVR_H264+ActiveX%22)

```
html:"DVR_H264 ActiveX"
```


---


## 프린터 및 복사기：


### HP 프린터 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Serial+Number%3A%22+%22Built%3A%22+%22Server%3A+HP+HTTP%22)

```
"Serial Number:" "Built:" "Server: HP HTTP"
```

<div align="center"><img src="screenshots/hp.png" alt="Example: HP Printers" width="650" /></div>


### Xerox 복사기/프린터 [🔎 &#x2192;](https://www.shodan.io/search?query=ssl%3A%22Xerox+Generic+Root%22)

```
ssl:"Xerox Generic Root"
```

<div align="center"><img src="screenshots/xerox.png" alt="Example: Xerox Copiers/Printers" width="550" /></div>


### Epson 프린터 [🔎 &#x2192;](https://www.shodan.io/search?query=%22SERVER%3A+EPSON_Linux+UPnP%22+%22200+OK%22)

```
"SERVER: EPSON_Linux UPnP" "200 OK"
```

```
"Server: EPSON-HTTP" "200 OK"
```

<div align="center"><img src="screenshots/epson.png" alt="Example: Epson Printers" width="500" /></div>


### Canon 프린터 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+KS_HTTP%22+%22200+OK%22)

```
"Server: KS_HTTP" "200 OK"
```

```
"Server: CANON HTTP Server"
```

<div align="center"><img src="screenshots/canon.png" alt="Example: Canon Printers" width="500" /></div>


---


## 가정용 기기


### Yamaha 스테레오 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+AV_Receiver%22+%22HTTP%2F1.1+406%22)

```
"Server: AV_Receiver" "HTTP/1.1 406"
```

<div align="center"><img src="screenshots/yamaha.png" alt="Example: Yamaha Stereos" width="500" /></div>


### Apple AirPlay 수신기 [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5Cx08_airplay%22+port%3A5353)

Apple TV, HomePod 등.

```
"\x08_airplay" port:5353
```


### Chromecast / 스마트 TV [🔎 &#x2192;](https://www.shodan.io/search?query=%22Chromecast%3A%22+port%3A8008)

```
"Chromecast:" port:8008
```


### [Crestron Smart Home](https://www.crestron.com/Products/Market-Solutions/Residential-Solutions) 제어기 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Model%3A+PYNG-HUB%22)

```
"Model: PYNG-HUB"
```

---


## 기타


### OctoPrint 3D 프린터 제어기 [🔎 &#x2192;](https://www.shodan.io/search?query=title%3A%22OctoPrint%22+-title%3A%22Login%22+http.favicon.hash%3A1307375944)

```
title:"OctoPrint" -title:"Login" http.favicon.hash:1307375944
```

<div align="center"><img src="screenshots/octoprint.png" alt="Example: OctoPrint 3D Printers" width="740" /></div>


### 이더리움 마이너 [🔎 &#x2192;](https://www.shodan.io/search?query=%22ETH+-+Total+speed%22)

```
"ETH - Total speed"
```

<div align="center"><img src="screenshots/eth.png" alt="Example: Etherium Miners" /></div>


### Apache 디렉터리 목록 [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22Index+of+%2F%22+http.html%3A%22.pem%22)

`.pem`을 `phpinfo.php`와 같은 확장자나 파일 이름으로 바꾸세요.

```
http.title:"Index of /" http.html:".pem"
```


### 잘못 구성된 WordPress [🔎 &#x2192;](https://www.shodan.io/search?query=http.html%3A%22*+The+wp-config.php+creation+script+uses+this+file%22)

데이터베이스 자격 증명이 포함된 [`wp-config.php`](https://github.com/WordPress/WordPress/blob/master/wp-config-sample.php) 파일이 노출되어 있습니다.

```
http.html:"* The wp-config.php creation script uses this file"
```


### 너무 많은 Minecraft 서버 [🔎 &#x2192;](https://www.shodan.io/search?query=%22Minecraft+Server%22+%22protocol+340%22+port%3A25565)

```
"Minecraft Server" "protocol 340" port:25565
```


### 북한 🇰🇵의 [모든 것](https://www.vox.com/2014/12/22/7435625/north-korea-internet) [🔎 &#x2192;](https://www.shodan.io/search?query=net%3A175.45.176.0%2F22%2C210.52.109.0%2F24)

```
net:175.45.176.0/22,210.52.109.0/24,77.94.35.0/24
```


### TCP 명언 [🔎 &#x2192;](https://www.shodan.io/search?query=port%3A17+product%3A%22Windows+qotd%22)

포트 17([RFC 865](https://tools.ietf.org/html/rfc865))은 [기이한 역사](https://en.wikipedia.org/wiki/QOTD)를 가지고 있습니다...

```
port:17 product:"Windows qotd"
```


### 이걸로 일자리를 찾으세요!👩‍💼 [🔎 &#x2192;](https://www.shodan.io/search?query=%22X-Recruiting%3A%22)

```
"X-Recruiting:"
```


---


다른 흥미로운 Shodan 보물(검색 쿼리든 구체적인 예시든)을 발견했다면, 블로그에 [댓글](https://jarv.is/notes/shodan-search-queries/#commento)을 남기거나 GitHub에서 [이슈/PR을 열어](https://github.com/jakejarvis/awesome-shodan-queries) 주세요.

안녕히 가세요, 동료 침투자 여러분! 😉


## 라이선스

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

법이 허용하는 한, [Jake Jarvis](https://jarv.is/)는 이 저작물에 대한 모든 저작권 및 관련 또는 인접 권리를 포기했습니다.

https://jarv.is/notes/shodan-search-queries/ 의 블로그 게시물에서 미러됨.
