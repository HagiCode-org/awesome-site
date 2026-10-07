# Requêtes de recherche Shodan géniales [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)


Au fil du temps, j'ai rassemblé un assortiment de requêtes de recherche intéressantes, drôles et déprimantes à saisir dans [Shodan](https://www.shodan.io/), le ([littéralement](https://www.vice.com/en_uk/article/9bvxmd/shodan-exposes-the-dark-side-of-the-net)) moteur de recherche de l'internet. Certaines renvoient des résultats à se taper la tête contre les murs, d'autres renvoient de sérieuses vulnérabilités et/ou des failles anciennes en circulation dans la nature.

<p align="center">
  <img src="screenshots/shodan.png" /><br />
  <strong><a href="https://account.shodan.io/register">La plupart des filtres de recherche nécessitent un compte Shodan.</a></strong>
</p>

Vous pouvez supposer que ces requêtes ne renvoient que des instances non sécurisées/ouvertes lorsque c'est possible. Pour votre propre intérêt juridique, n'essayez pas de vous connecter (même avec des mots de passe par défaut) si ce n'est pas le cas ! Affinez les résultats en ajoutant des filtres comme `country:US` ou `org:"Harvard University"` ou `hostname:"nasa.gov"` à la fin.

Le monde et ses appareils deviennent rapidement plus connectés grâce à la toute nouvelle [Internet des ~~objets~~ merdes](https://motherboard.vice.com/en_us/topic/internet-of-shit) — et exponentiellement [plus dangereuse](https://blog.malwarebytes.com/101/2017/12/internet-things-iot-security-never/) par conséquent. À cette fin, j'espère que cette liste suscite la prise de conscience (et, pour être tout à fait franc, une peur bleue) plutôt que le préjudice.

**Et comme toujours, [découvrez et divulguez de manière responsable](https://www.bugcrowd.com/resource/what-is-responsible-disclosure/)! 🤓**


---


### **Table des matières**

- [Systèmes de contrôle industriels](#industrial-control-systems)
- [Bureau à distance](#remote-desktop)
- [Infrastructure réseau](#network-infrastructure)
- [Stockage en réseau (NAS)](#network-attached-storage-nas)
- [Webcams](#webcams)
- [Imprimantes et photocopieuses](#printers--copiers)
- [Appareils domestiques](#home-devices)
- [Divers](#random-stuff)


---


## Systèmes de contrôle industriels


### Panneaux d'affichage électroniques Samsung [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Prismview+Player%22)

```
"Server: Prismview Player"
```

<div align="center"><img src="screenshots/billboard3.png" alt="Example: Electronic Billboards" width="500" /></div>


### Contrôleurs de pompes de stations-service [🔎 &#x2192;](https://www.shodan.io/search?query=%22in-tank+inventory%22+port%3A10001)

```
"in-tank inventory" port:10001
```

<div align="center"><img src="screenshots/7-11.png" alt="Example: Gas Station Pump Inventories" width="700" /></div>


### Lecteurs automatiques de plaques d'immatriculation [🔎 &#x2192;](https://www.shodan.io/search?query=P372+%22ANPR+enabled%22)

```
P372 "ANPR enabled"
```

<div align="center"><img src="screenshots/plate-reader.png" alt="Example: Automatic License Plate Reader" /></div>


### Contrôleurs de feux de circulation / radars feu rouge [🔎 &#x2192;](https://www.shodan.io/search?query=mikrotik+streetlight)

```
mikrotik streetlight
```


### Machines à voter aux États-Unis [🔎 &#x2192;](https://www.shodan.io/search?query=%22voter+system+serial%22+country%3AUS)

```
"voter system serial" country:US
```


### Compagnies de télécom exécutant des interceptions téléphoniques [Cisco Lawful Intercept](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst6500/ios/12-2SX/lawful/intercept/book/65LIch1.html) [🔎 &#x2192;](https://www.shodan.io/search?query=%22Cisco+IOS%22+%22ADVIPSERVICESK9_LI-M%22)

```
"Cisco IOS" "ADVIPSERVICESK9_LI-M"
```

Mécanisme d'interception décrit par Cisco dans la [RFC 3924](https://tools.ietf.org/html/rfc3924) :

> L'interception légale est l'interception et la surveillance autorisées par la loi des communications d'un sujet intercepté. Le terme « sujet intercepté » [...] désigne l'abonné d'un service de télécommunication dont les communications et/ou les informations associées à l'interception (IRI) ont été légalement autorisées à être interceptées et livrées à un organisme.


### Téléphones payants de prison [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5B2J%5BH+Encartele+Confidential%22)

```
"[2J[H Encartele Confidential"
```


### État de charge de la [Tesla PowerPack](https://www.tesla.com/powerpack) [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22Tesla+PowerPack+System%22+http.component%3A%22d3%22+-ga3ca4f2)

```
http.title:"Tesla PowerPack System" http.component:"d3" -ga3ca4f2
```

<div align="center"><img src="screenshots/tesla.png" alt="Example: Tesla PowerPack Charging Status" /></div>


### Chargeurs de véhicules électriques [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+gSOAP%2F2.8%22+%22Content-Length%3A+583%22)

```
"Server: gSOAP/2.8" "Content-Length: 583"
```


### Satellites maritimes [🔎 &#x2192;](https://www.shodan.io/search?query=%22Cobham+SATCOM%22+OR+%28%22Sailor%22+%22VSAT%22%29)

Shodan a également créé un superbe [Ship Tracker](https://shiptracker.shodan.io/) qui cartographie la position des navires en temps réel !

```
"Cobham SATCOM" OR ("Sailor" "VSAT")
```

<div align="center"><img src="screenshots/sailor-vsat.png" alt="Example: Maritime Satellites" width="700" /></div>


### Tableaux de bord du contrôle de mission de sous-marins [🔎 &#x2192;](https://www.shodan.io/search?query=title%3A%22Slocum+Fleet+Mission+Control%22)

```
title:"Slocum Fleet Mission Control"
```


### Unités de réfrigération [CAREL PlantVisor](https://www.carel.com/product/plantvisor) [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+CarelDataServer%22+%22200+Document+follows%22)

```
"Server: CarelDataServer" "200 Document follows"
```

<div align="center"><img src="screenshots/refrigeration.png" alt="Example: CAREL PlantVisor Refrigeration Units" /></div>


### Parcs d'éoliennes [Nordex Wind Turbine](http://www.nordex-online.com/en/products-services/wind-turbines.html) [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22Nordex+Control%22+%22Windows+2000+5.0+x86%22+%22Jetty%2F3.1+%28JSP+1.1%3B+Servlet+2.2%3B+java+1.6.0_14%29%22)

```
http.title:"Nordex Control" "Windows 2000 5.0 x86" "Jetty/3.1 (JSP 1.1; Servlet 2.2; java 1.6.0_14)"
```


### Traceurs GPS de véhicules commerciaux [C4 Max](https://www.mobile-devices.com/our-products/c4-max/) [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5B1m%5B35mWelcome+on+console%22)

```
"[1m[35mWelcome on console"
```

<div align="center"><img src="screenshots/c4max.png" alt="Example: C4 Max Vehicle GPS" width="780" /></div>


### Machines à rayons X médicales [DICOM](https://www.dicomstandard.org/about/) [🔎 &#x2192;](https://www.shodan.io/search?query=%22DICOM+Server+Response%22+port%3A104)

Sécurisées par défaut, heureusement, mais ces plus de 1 700 machines n'[ont tout simplement pas leur place](https://documents.trendmicro.com/assets/rpt/rpt-securing-connected-hospitals.pdf) sur internet.

```
"DICOM Server Response" port:104
```


### Compteurs électriques [GaugeTech](https://electroind.com/all-products/) [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+EIG+Embedded+Web+Server%22+%22200+Document+follows%22)

```
"Server: EIG Embedded Web Server" "200 Document follows"
```

<div align="center"><img src="screenshots/power-gaugetech.png" alt="Example: GaugeTech Electricity Meters" width="650" /></div>


### Automatisation industrielle Siemens [🔎 &#x2192;](https://www.shodan.io/search?query=%22Siemens%2C+SIMATIC%22+port%3A161)

```
"Siemens, SIMATIC" port:161
```


### Contrôleurs HVAC Siemens [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Microsoft-WinCE%22+%22Content-Length%3A+12581%22)

```
"Server: Microsoft-WinCE" "Content-Length: 12581"
```


### Contrôleurs d'accès (portes / serrures) [🔎 &#x2192;](https://www.shodan.io/search?query=%22HID+VertX%22+port%3A4070)

```
"HID VertX" port:4070
```


### Gestion ferroviaire [🔎 &#x2192;](https://www.shodan.io/search?query=%22log+off%22+%22select+the+appropriate%22)

```
"log off" "select the appropriate"
```


---


## Bureau à distance


### VNC non protégé [🔎 &#x2192;](https://www.shodan.io/search?query=%22authentication+disabled%22+%22RFB+003.008%22)

```
"authentication disabled" "RFB 003.008"
```

[Shodan Images](https://images.shodan.io/) est un excellent outil complémentaire pour parcourir les captures d'écran, d'ailleurs ! [🔎 &#x2192;](https://images.shodan.io/?query=%22authentication+disabled%22+%21screenshot.label%3Ablank)

<p align="center">
  <img src="screenshots/vnc.png" alt="Example: Unprotected VNC" /><br />
  <em>Le premier résultat en ce moment même. 😞</em>
</p>


### Windows RDP [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5Cx03%5Cx00%5Cx00%5Cx0b%5Cx06%5Cxd0%5Cx00%5Cx00%5Cx124%5Cx00%22)

99,99 % sont sécurisés par un second écran de connexion Windows.

```
"\x03\x00\x00\x0b\x06\xd0\x00\x00\x124\x00"
```


---


## Infrastructure réseau


### Tableaux de bord [Weave Scope](https://www.weave.works/oss/scope/) [🔎 &#x2192;](https://www.shodan.io/search?query=title%3A%22Weave+Scope%22+http.favicon.hash%3A567176827)

Accès en ligne de commande à l'intérieur des pods Kubernetes et des conteneurs Docker, et visualisation/surveillance en temps réel de toute l'infrastructure.

```
title:"Weave Scope" http.favicon.hash:567176827
```

<div align="center"><img src="screenshots/weavescope.png" alt="Example: Weave Scope Dashboards" /></div>


### MongoDB [🔎 &#x2192;](https://www.shodan.io/search?query=product%3AMongoDB+-authentication)

Les anciennes versions étaient non sécurisées par défaut. [Vraiment effrayant.](https://krebsonsecurity.com/tag/mongodb/)

```
"MongoDB Server Information" port:27017 -authentication
```

<div align="center"><img src="screenshots/mongo.png" alt="Example: MongoDB" width="500" /></div>


### Interface Web [Mongo Express](https://github.com/mongo-express/mongo-express) [🔎 &#x2192;](https://www.shodan.io/search?query=%22Set-Cookie%3A+mongo-express%3D%22+%22200+OK%22)

Comme le [phpMyAdmin infamous](https://www.cvedetails.com/vulnerability-list/vendor_id-784/Phpmyadmin.html) mais pour MongoDB.

```
"Set-Cookie: mongo-express=" "200 OK"
```

<div align="center"><img src="screenshots/mongo-express.png" alt="Example: Mongo Express GUI" width="700" /></div>


### Jenkins CI [🔎 &#x2192;](https://www.shodan.io/search?query=%22X-Jenkins%22+%22Set-Cookie%3A+JSESSIONID%22+http.title%3A%22Dashboard%22)

```
"X-Jenkins" "Set-Cookie: JSESSIONID" http.title:"Dashboard"
```

<div align="center"><img src="screenshots/jenkins.png" alt="Example: Jenkins CI" width="700" /></div>


### API Docker [🔎 &#x2192;](https://www.shodan.io/search?query=%22Docker+Containers%3A%22+port%3A2375)

```
"Docker Containers:" port:2375
```


### Registres privés Docker [🔎 &#x2192;](https://www.shodan.io/search?query=%22Docker-Distribution-Api-Version%3A+registry%22+%22200+OK%22+-gitlab)

```
"Docker-Distribution-Api-Version: registry" "200 OK" -gitlab
```


### Serveurs DNS ouverts [Pi-hole](https://pi-hole.net/) [🔎 &#x2192;](https://www.shodan.io/search?query=%22dnsmasq-pi-hole%22+%22Recursion%3A+enabled%22)

```
"dnsmasq-pi-hole" "Recursion: enabled"
```


### Déjà connecté en tant que `root` via Telnet [🔎 &#x2192;](https://www.shodan.io/search?query=%22root%40%22+port%3A23+-login+-password+-name+-Session)

```
"root@" port:23 -login -password -name -Session
```


### Ponts root Android [🔎 &#x2192;](https://www.shodan.io/search?query=%22Android+Debug+Bridge%22+%22Device%22+port%3A5555)

Un résultat tangentiel de l'approche de mise à jour fragmentée et négligente de Google. 🙄 [Plus d'informations ici.](https://medium.com/p/root-bridge-how-thousands-of-internet-connected-android-devices-now-have-no-security-and-are-b46a68cb0f20)

```
"Android Debug Bridge" "Device" port:5555
```


### Adaptateur série-ethernet Lantronix [fuites de mots de passe Telnet](https://www.bleepingcomputer.com/news/security/thousands-of-serial-to-ethernet-devices-leak-telnet-passwords/) [🔎 &#x2192;](https://www.shodan.io/search?query=Lantronix+password+port%3A30718+-secured)

```
Lantronix password port:30718 -secured
```


### Citrix Virtual Apps [🔎 &#x2192;](https://www.shodan.io/search?query=%22Citrix+Applications%3A%22+port%3A1604)

```
"Citrix Applications:" port:1604
```

<div align="center"><img src="screenshots/citrix.png" alt="Example: Citrix Virtual Apps" width="700" /></div>


### Cisco Smart Install [🔎 &#x2192;](https://www.shodan.io/search?query=%22smart+install+client+active%22)

[Vulnérable](https://2016.zeronights.ru/wp-content/uploads/2016/12/CiscoSmartInstall.v3.pdf) (une sorte de « par conception », mais surtout lorsqu'exposé).

```
"smart install client active"
```


### Passerelles IP PBX [🔎 &#x2192;](https://www.shodan.io/search?query=PBX+%22gateway+console%22+-password+port%3A23)

```
PBX "gateway console" -password port:23
```


### Visioconférence [Polycom](https://www.polycom.com/hd-video-conferencing.html) [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22-+Polycom%22+%22Server%3A+lighttpd%22)

```
http.title:"- Polycom" "Server: lighttpd"
```

Configuration Telnet : [🔎 &#x2192;](https://www.shodan.io/search?query=%22Polycom+Command+Shell%22+-failed+port%3A23)

```
"Polycom Command Shell" -failed port:23
```

<div align="center"><img src="screenshots/polycom.png" alt="Example: Polycom Video Conferencing" /></div>


### Portail [Bomgar Help Desk](https://www.beyondtrust.com/remote-support/integrations) [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Bomgar%22+%22200+OK%22)

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


### Outlook Web Access :

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


## Stockage en réseau (NAS)


### Partages de fichiers SMB (Samba) [🔎 &#x2192;](https://www.shodan.io/search?query=%22Authentication%3A+disabled%22+port%3A445)

Produit ~500 000 résultats... affinez en ajoutant « Documents » ou « Videos », etc.

```
"Authentication: disabled" port:445
```

Plus précisément les contrôleurs de domaine : [🔎 &#x2192;](https://www.shodan.io/search?query=%22Authentication%3A+disabled%22+NETLOGON+SYSVOL+-unix+port%3A445)

```
"Authentication: disabled" NETLOGON SYSVOL -unix port:445
```

Concernant les [partages réseau par défaut de QuickBooks](https://quickbooks.intuit.com/learn-support/en-us/help-articles/set-up-folder-and-windows-access-permissions-to-share-company/01/201880) : [🔎 &#x2192;](https://www.shodan.io/search?query=%22Authentication%3A+disabled%22+%22Shared+this+folder+to+access+QuickBooks+files+OverNetwork%22+-unix+port%3A445)

```
"Authentication: disabled" "Shared this folder to access QuickBooks files OverNetwork" -unix port:445
```


### Serveurs FTP avec connexion anonyme [🔎 &#x2192;](https://www.shodan.io/search?query=%22220%22+%22230+Login+successful.%22+port%3A21)

```
"220" "230 Login successful." port:21
```


### Disques NAS Iomega / LenovoEMC [🔎 &#x2192;](https://www.shodan.io/search?query=%22Set-Cookie%3A+iomega%3D%22+-%22manage%2Flogin.html%22+-http.title%3A%22Log+In%22)

```
"Set-Cookie: iomega=" -"manage/login.html" -http.title:"Log In"
```

<div align="center"><img src="screenshots/iomega.png" alt="Example: Iomega / LenovoEMC NAS Drives" width="600" /></div>


### Disques NAS Buffalo TeraStation [🔎 &#x2192;](https://www.shodan.io/search?query=Redirecting+sencha+port%3A9000)

```
Redirecting sencha port:9000
```

<div align="center"><img src="screenshots/buffalo.png" alt="Example: Buffalo TeraStation NAS Drives" width="600" /></div>


### Serveurs multimédias Logitech [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+Logitech+Media+Server%22+%22200+OK%22)

```
"Server: Logitech Media Server" "200 OK"
```

<div align="center"><img src="screenshots/logitech.png" alt="Example: Logitech Media Servers" width="500" /></div>


### Serveurs multimédias [Plex](https://www.plex.tv/) [🔎 &#x2192;](https://www.shodan.io/search?query=%22X-Plex-Protocol%22+%22200+OK%22+port%3A32400)

```
"X-Plex-Protocol" "200 OK" port:32400
```


### Tableaux de bord [Tautulli / PlexPy](https://github.com/Tautulli/Tautulli) [🔎 &#x2192;](https://www.shodan.io/search?query=%22CherryPy%2F5.1.0%22+%22%2Fhome%22)

```
"CherryPy/5.1.0" "/home"
```

<div align="center"><img src="screenshots/plexpy.png" alt="Example: PlexPy / Tautulli Dashboards" width="570" /></div>


---


## Webcams

Les images d'exemple ne sont pas nécessaires. 🤦

### Yawcams [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+yawcam%22+%22Mime-Type%3A+text%2Fhtml%22)

```
"Server: yawcam" "Mime-Type: text/html"
```


### webcamXP/webcam7 [🔎 &#x2192;](https://www.shodan.io/search?query=%28%22webcam+7%22+OR+%22webcamXP%22%29+http.component%3A%22mootools%22+-401)

```
("webcam 7" OR "webcamXP") http.component:"mootools" -401
```


### Serveur de webcam IP Android [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+IP+Webcam+Server%22+%22200+OK%22)

```
"Server: IP Webcam Server" "200 OK"
```


### DVR de sécurité [🔎 &#x2192;](https://www.shodan.io/search?query=html%3A%22DVR_H264+ActiveX%22)

```
html:"DVR_H264 ActiveX"
```


---


## Imprimantes et photocopieuses :


### Imprimantes HP [🔎 &#x2192;](https://www.shodan.io/search?query=%22Serial+Number%3A%22+%22Built%3A%22+%22Server%3A+HP+HTTP%22)

```
"Serial Number:" "Built:" "Server: HP HTTP"
```

<div align="center"><img src="screenshots/hp.png" alt="Example: HP Printers" width="650" /></div>


### Photocopieuses/Imprimantes Xerox [🔎 &#x2192;](https://www.shodan.io/search?query=ssl%3A%22Xerox+Generic+Root%22)

```
ssl:"Xerox Generic Root"
```

<div align="center"><img src="screenshots/xerox.png" alt="Example: Xerox Copiers/Printers" width="550" /></div>


### Imprimantes Epson [🔎 &#x2192;](https://www.shodan.io/search?query=%22SERVER%3A+EPSON_Linux+UPnP%22+%22200+OK%22)

```
"SERVER: EPSON_Linux UPnP" "200 OK"
```

```
"Server: EPSON-HTTP" "200 OK"
```

<div align="center"><img src="screenshots/epson.png" alt="Example: Epson Printers" width="500" /></div>


### Imprimantes Canon [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+KS_HTTP%22+%22200+OK%22)

```
"Server: KS_HTTP" "200 OK"
```

```
"Server: CANON HTTP Server"
```

<div align="center"><img src="screenshots/canon.png" alt="Example: Canon Printers" width="500" /></div>


---


## Appareils domestiques


### Stéréos Yamaha [🔎 &#x2192;](https://www.shodan.io/search?query=%22Server%3A+AV_Receiver%22+%22HTTP%2F1.1+406%22)

```
"Server: AV_Receiver" "HTTP/1.1 406"
```

<div align="center"><img src="screenshots/yamaha.png" alt="Example: Yamaha Stereos" width="500" /></div>


### Récepteurs Apple AirPlay [🔎 &#x2192;](https://www.shodan.io/search?query=%22%5Cx08_airplay%22+port%3A5353)

Apple TV, HomePod, etc.

```
"\x08_airplay" port:5353
```


### Chromecasts / TV intelligentes [🔎 &#x2192;](https://www.shodan.io/search?query=%22Chromecast%3A%22+port%3A8008)

```
"Chromecast:" port:8008
```


### Contrôleurs [Crestron Smart Home](https://www.crestron.com/Products/Market-Solutions/Residential-Solutions) [🔎 &#x2192;](https://www.shodan.io/search?query=%22Model%3A+PYNG-HUB%22)

```
"Model: PYNG-HUB"
```

---


## Divers


### Contrôleurs d'imprimantes 3D OctoPrint [🔎 &#x2192;](https://www.shodan.io/search?query=title%3A%22OctoPrint%22+-title%3A%22Login%22+http.favicon.hash%3A1307375944)

```
title:"OctoPrint" -title:"Login" http.favicon.hash:1307375944
```

<div align="center"><img src="screenshots/octoprint.png" alt="Example: OctoPrint 3D Printers" width="740" /></div>


### Mineurs d'Ethereum [🔎 &#x2192;](https://www.shodan.io/search?query=%22ETH+-+Total+speed%22)

```
"ETH - Total speed"
```

<div align="center"><img src="screenshots/eth.png" alt="Example: Etherium Miners" /></div>


### Listes de répertoires Apache [🔎 &#x2192;](https://www.shodan.io/search?query=http.title%3A%22Index+of+%2F%22+http.html%3A%22.pem%22)

Remplacez `.pem` par n'importe quelle extension ou un nom de fichier comme `phpinfo.php`.

```
http.title:"Index of /" http.html:".pem"
```


### WordPress mal configuré [🔎 &#x2192;](https://www.shodan.io/search?query=http.html%3A%22*+The+wp-config.php+creation+script+uses+this+file%22)

Fichiers [`wp-config.php`](https://github.com/WordPress/WordPress/blob/master/wp-config-sample.php) exposés contenant des identifiants de base de données.

```
http.html:"* The wp-config.php creation script uses this file"
```


### Trop de serveurs Minecraft [🔎 &#x2192;](https://www.shodan.io/search?query=%22Minecraft+Server%22+%22protocol+340%22+port%3A25565)

```
"Minecraft Server" "protocol 340" port:25565
```


### Littéralement [tout](https://www.vox.com/2014/12/22/7435625/north-korea-internet) en Corée du Nord 🇰🇵 [🔎 &#x2192;](https://www.shodan.io/search?query=net%3A175.45.176.0%2F22%2C210.52.109.0%2F24)

```
net:175.45.176.0/22,210.52.109.0/24,77.94.35.0/24
```


### Citation du jour TCP [🔎 &#x2192;](https://www.shodan.io/search?query=port%3A17+product%3A%22Windows+qotd%22)

Le port 17 ([RFC 865](https://tools.ietf.org/html/rfc865)) a une [histoire bizarre](https://en.wikipedia.org/wiki/QOTD)...

```
port:17 product:"Windows qotd"
```


### Trouvez un emploi pour faire ça ! 👩‍💼 [🔎 &#x2192;](https://www.shodan.io/search?query=%22X-Recruiting%3A%22)

```
"X-Recruiting:"
```


---


Si vous avez trouvé d'autres perles Shodan, qu'il s'agisse d'une requête de recherche ou d'un exemple précis, n'hésitez pas à [laisser un commentaire](https://jarv.is/notes/shodan-search-queries/#commento) sur le blog ou à [ouvrir une issue/PR ici sur GitHub](https://github.com/jakejarvis/awesome-shodan-queries).

Bon voyage, cher(s) pénétrateur(s) ! 😉


## Licence

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

Dans la mesure permise par la loi, [Jake Jarvis](https://jarv.is/) a renoncé à tous les droits d'auteur et droits connexes ou voisins sur cette œuvre.

Miroir d'un article de blog disponible sur https://jarv.is/notes/shodan-search-queries/.
