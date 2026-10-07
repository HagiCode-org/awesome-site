# Konsolendienste

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Eine kuratierte Liste großartiger Konsolendienste (erreichbar über HTTP, HTTPS und andere Netzwerkprotokolle).
Die strukturierten Daten der Liste (stets synchron gehalten) befinden sich in [structured.yaml](structured.yaml).

  - [IP-Adresse](#IP-Address "IP-Adresse")
  - [Geolokalisierung](#Geolocation "Geolokalisierung")
  - [Textfreigabe](#Text-Sharing "Textfreigabe")
  - [URL-Kürzungsdienst](#URL-Shortener "URL-Kürzungsdienst")
  - [Dateiübertragung](#File-Transfer "Dateiübertragung")
  - [Browser](#Browser "Browser")
  - [Werkzeuge](#Tools "Werkzeuge")
  - [Überwachung](#Monitoring "Überwachung")
  - [Wetter](#Weather "Wetter")
  - [Nachrichten](#News "Nachrichten")
  - [Informationsbretter](#Information-boards "Informationsbretter")
  - [Karte](#Map "Karte")
  - [Geld](#Money "Wechselkurse und Finanzinformationen")
  - [Dokumentation](#Documentation "Handbücher, Spickzettel und FAQs")
  - [Wörterbücher und Übersetzer](#Dictionaries-and-translators "Wörterbücher und Übersetzer")
  - [Generatoren](#Generators "Generatoren für Nachrichten/Texte/Witze/Fortunes/Namen")
  - [Unterhaltung und Spiele](#Entertainment-and-games "Chats, Spiele und Spaß")
  - [Skripte](#Scripts "Skripte")
  - [Clients](#Clients "Clients")

## IP-Adresse

### Inline

* `curl l2.io/ip`
* `curl https://echoip.de`
* `curl ifconfig.me`
* `curl ipecho.net/plain`
* `curl -L ident.me` #[API](http://api.ident.me)
* `curl -L canihazip.com/s`
* `curl -L tnx.nl/ip`
* `curl wgetip.com`
* `curl whatismyip.akamai.com`
* `curl ip.tyk.nu`
* `curl bot.whatismyipaddress.com`
* `curl curlmyip.net`
* `curl api.ipify.org`
* `curl ipv4bot.whatismyipaddress.com`
* `curl ipcalf.com`

### Neue Zeile

* `curl ipaddy.net`
* `curl eth0.me`
* `curl ipaddr.site`
* `curl ifconfig.co`
* `curl ifconfig.pro`
* `curl curlmyip.net`
* `curl ipinfo.io/ip`
* `curl icanhazip.com`
* `curl checkip.amazonaws.com`
* `curl smart-ip.net/myip`
* `curl ip-api.com/line?fields=query`
* `curl ifconfig.io/ip`
* `curl -s ip.liquidweb.com`
* `curl ifconfig.es`
* `curl ipaddress.sh`
* `curl 2ip.ru`

### DNS

* `dig @1.1.1.1 whoami.cloudflare ch txt +short` (IPv4)
* `dig @2606:4700:4700::1111 whoami.cloudflare ch txt -6 +short` (IPv6)
* `dig @ns1.google.com o-o.myaddr.l.google.com TXT -6 +short` (IPv6)
* `dig @ns1.google.com o-o.myaddr.l.google.com TXT -4 +short` (IPv4)
* `dig resolver.dnscrypt.info TXT +short`
* `curl https://dnsjson.com/resolver.dnscrypt.info/TXT.json`
* `curl -L https://edns.ip-api.com/json`
* `curl 'api.hackertarget.com/zonetransfer/?q=zonetransfer.me'` - DNS-Zonentransfer

### Nur JSON

* `curl httpbin.org/ip`
* `curl wtfismyip.com/json`
* `curl -L iphorse.com/json`
* `curl geoplugin.net/json.gp`
* `curl https://ipapi.co/json`
* `curl -L jsonip.com`
* `curl gd.geobytes.com/GetCityDetails`
* `curl ip.jsontest.com`

## Geolokalisierung

* `curl api.ip2location.io` or `curl api.ip2location.io?ip=8.8.8.8`
* `curl ipinfo.io/8.8.8.8` or `curl ipinfo.io/8.8.8.8/loc`
* `curl ip-api.com` or `curl ip-api.com/8.8.8.8`
* `curl ifconfig.co/country` or `curl ifconfig.co/city` or `curl ifconfig.co/country-iso` or `http ifconfig.co/json`
* `curl ifconfig.es/geo` or `curl ifconfig.es/json` or `curl ifconfig.es/country` or `curl ifconfig.es/code` or `curl ifconfig.es/city` or `curl ifconfig.es/latitude` or `curl ifconfig.es/longitude`

## Textfreigabe

* :no_entry_sign: `echo "Hello world!" | curl -F 'f:1=<-' ix.io`
* `echo "Hello world!" | curl -F file=@- 0x0.st`
* `echo "Hello world!" | curl -F 'clbin=<-' https://clbin.com`
* `echo "Hello world!" | nc termbin.com 9999`
* `echo "Hello world!" | curl -F 'sprunge=<-' sprunge.us`
* `echo "Hello world!" | curl -H "content-type: text/plain" -d @- https://textdb.dev/api/data/unique-id-for-my-text`
* `curl https://patchbay.pub/your-custom-path -d "Hello world!"` and `curl -s https://patchbay.pub/your-custom-path`

## URL-Kürzungsdienst

* `curl -s tinyurl.com/api-create.php?url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://ttm.sh`
* `curl https://is.gd/create.php?format=simple&url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://0x0.st`
* `curl -F url=<link> https://shorta.link`

## Dateiübertragung

* `curl --upload-file <file> transfer.sh/<filename>`
* `curl -F file=@<file> https://ttm.sh`
* `curl https://patchbay.pub/your-custom-filepath.exe --data-binary @<file>` and `curl -LO https://patchbay.pub/your-custom-filepath.exe`
* `nc oshi.at 7777 < <file>` or `curl https://oshi.at -F f=@<file>`
* `curl -F file=@<file> https://0x0.st`
* `curl -F file=@<file> https://api.anonfile.com/upload`
* `curl -T <file> https://pixeldrain.com/api/file/`

## Browser

*  :no_entry_sign: `ssh brow.sh`

## Werkzeuge

* `curl qrenco.de/STRING` or `echo STRING | curl -F-=\<- qrenco.de` — QR-Code für eine Zeichenkette erstellen ([chubin/qrenco.de](https://github.com/chubin/qrenco.de))
* `curl "http://c.docverter.com/convert" -F from=html -F to=pdf -F "input_files[]=@your-file-name.html" -o "output-file-name.pdf"` - ein Dokument konvertieren ([source](https://github.com/docverter/docverter))
* `curl -s "https://decapi.me/youtube/latest_video?user=NPR"` - Titel/URL des letzten Uploads des angegebenen YouTube-Kanals
* `curl -s "https://decapi.me/twitter/latest?name=NPR"` - letzter Tweet des angegebenen Kontos
* `curl -s "https://decapi.me/twitch/uptime?channel=IGN"` - prüfen, ob der angegebene Twitch-Kanal online ist
* `curl -s "https://httpbin.org/delay/4"` - HTTP-Anfrage- und -Antwort-Dienst (z. B. Antwort nach 4 Sekunden senden)
* `curl -s "https://urlecho.appspot.com/echo?body=Hello+World"` - in den Anfrageparametern definierte HTTP-Antwort
* `curl -s "https://urlreq.appspot.com/req?method=GET&url=https://l2.io/ip"` - HTTP-Proxy, der neue Anfragen anhand von Eingabeparametern stellt
* `curl -s "https://api.hackertarget.com/nmap/?q=93.184.216.34"` - TCP-Portscan mit NMAP
* `curl -s "https://api.hackertarget.com/pagelinks/?q=msn.com"` - alle Links einer Seite extrahieren
* `curl -s "https://api.hackertarget.com/whois/?q=google.com"` - Whois-Abfrage
* `curl -s "https://jsonplaceholder.typicode.com/users"` - nützliches Werkzeug zum Abrufen falscher API-Daten
* `ssh unix50@unix50.org - password is unix50` - Instanzen historischer UNIX-Systeme erstellen und nutzen
* `ssh new@sdf.org` - ein kostenloses UNIX-Shell-Konto für das SDF Public Access UNIX System erstellen
* `dig help @dns.toys` - listet zahlreiche verfügbare Dienste von [dns.toys](https://www.dns.toys/) auf

## Kryptografie

* `curl https://ja3er.com/search/535886c8d0a1b14f02298967bb990171` - SSL-Fingerabdruck-Suche

## Überwachung

* `curl ping.gl`
* `curl https://status.plaintext.sh/t` - Statusseiten gängiger Dienste prüfen

## Wetter

* `curl wttr.in` or `curl wttr.in/Berlin` — die richtige Art, das Wetter zu prüfen
* `finger oslo@graph.no`
* `nc rainmaker.wunderground.com 3000` (also works with telnet)
* `curl https://tgftp.nws.noaa.gov/data/observations/metar/stations/KAAO.TXT` - METAR des angegebenen ICAO

## Nachrichten

* `curl getnews.tech/world+cup` — die neuesten Nachrichten abrufen
* `curl hkkr.in` - [Hacker-News-Feed](github.com/NalinPlad/hkkr.in)
* `curl rate.sx` - zum Erkunden von (Krypto-)Währungskursen
* `gopher://gopher.leveck.us:70` - Nachrichten-Aggregator
* `gopher://gopherddit.com:70`  - reddit
* `ssh teletekst.nl` - Teletext der niederländischen öffentlichen Rundfunkanstalt (NOS) im Terminal
* `ssh redditbox.us` — reddit im Terminal (ssh + Textbrowser)
* `gopher://hngopher.com:70` - hacker news

* :no_entry_sign: `curl wrk.ist` — die neuesten Remote-Jobs/Gigs auf dem IT-Markt abrufen

## Informationsbretter

* :no_entry_sign: `curl http://frcl.de/gulasch` — Gulaschprogrammiernacht 2019 Fahrplan
* `gopher://gopherpedia.com:70` - Wikipedia

### COVID-19

* `curl https://corona-stats.online`
* `curl -L covid19.trackercli.com`
* `curl snf-878293.vm.okeanos.grnet.gr` - Covid-19-Statistiken für Ihr Land

## Karte

* `telnet mapscii.me` — eine zoombare Weltkarte anzeigen

## Geld

* `curl rate.sx` — Kryptowährungskurse abrufen
* `curl crrcy.sh` - Wechselkurse und historische Daten von Fiat- und Kryptowährungen abrufen
* :no_entry_sign: `curl moneroj.org` — Monero-Wechselkurs abrufen
* :no_entry_sign: `curl cmc.rjldev.com` — Top-100-Kryptowährungen von coinmarketcap abrufen
* `nc ticker.bitcointicker.co 10080` — BTC/USD-Kurs abrufen (funktioniert auch mit telnet)
* `curl https://stonks.icu/amd/msft` Aktien-Visualisierer und -Tracker abrufen
* `curl terminal-stocks.shashi.dev/:ticker` - Aktienkurse und Informationen für den angegebenen Yahoo-Ticker abrufen
* `ssh cointop.sh` - Kryptowährungs-Tracking-TUI ([source](https://github.com/miguelmota/cointop))

## Dokumentation

* `curl cheat.sh` — UNIX/Linux-Befehls-Spickzettel per curl ([chubin/cheat.sh](https://github.com/chubin/cheat.sh))
* `curl 'https://api.hackertarget.com/subnetcalc/?q=192.168.1.0/24'` Subnetz-Rechner
* `gopher://telcodata.us:70` - NPA/NXX-Suche
* `gopher://gopher.floodgap.com/1/world` - alle bekannten Gopher-Server

## Wörterbücher und Übersetzer

* `curl 'dict.org/d:command line'`

## Generatoren

* `git commit -m "$(curl -sk whatthecommit.com/index.txt)"` —  eine zufällige Commit-Nachricht erzeugen
* curl `"https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"` - eine Zufallszahl erzeugen
* `curl -H 'Accept: text/plain' https://foaas.com/cool/:from` — „Hau ab“ als Dienst
* `curl pseudorandom.name` — einen pseudo-zufälligen (amerikanischen?) Namen erzeugen ([treyhunner/pseudorandom.name](https://github.com/treyhunner/pseudorandom.name))
* :no_entry_sign: `curl -s https://uinames.com/api/?region=france\&amount=25 | jq '.[] | .name +" " + .surname'` — 25 zufällige französische Namen erzeugen
* `curl https://icanhazdadjoke.com` — zufällige Witze
* `curl givemeguid.com` - GUID
* `nc towel.blinkenlights.nl 666` - IT-Ausreden (funktioniert auch mit telnet)
* `curl -s 'https://api-inference.huggingface.co/models/distilgpt2' --data-raw '"what is the meaning of life?"' | jq '.[].generated_text'` - Text mit dem GPT2-KI-Modell aus einer Seed-Zeichenkette erzeugen

## E-Commerce

* `ssh stickr.shop` — der abtrünnige, rein CLI-basierte Sticker-Shop. Sticker per ssh kaufen.
* `ssh terminal.shop` — Kaffee per ssh kaufen.

## Unterhaltung und Spiele

* `ssh -o StrictHostKeyChecking=no watch.ascii.theater` - kostenlose textbasierte Filme im Terminal streamen
* `curl https://asciitv.fr` — Star Wars im Terminal per curl ansehen ([source](https://github.com/martinraison/ascii-tv))
* `nc towel.blinkenlights.nl 23` — Star Wars im Terminal per netcat ansehen (funktioniert auch mit telnet)
* `ssh movie.gabe565.com` - Star Wars mit Wiedergabesteuerung im Terminal per ssh ansehen
* `ssh chat.shazow.net` — Chat über SSH ([shazow/ssh-chat](https://github.com/shazow/ssh-chat))
* `ssh chat@ascii.town` — SSH-Chat-Client ([source](https://git.causal.agency/catgirl))
* `curl parrot.live` — einen animierten Party-Papagei anzeigen ([hugomd/parrot.live](https://github.com/hugomd/parrot.live))
* `curl byemck.atulr.com` — eine animierte Abschiedsnachricht für Kollegen anzeigen ([master-atul/byemck](https://github.com/master-atul/byemck))
* `nc rya.nc 1987` — Rick Rolled werden (funktioniert auch mit telnet)
* `curl node-web-console.glitch.me` — ein Emoji-Rennen ansehen ([source](https://glitch.com/edit/#!/node-web-console))
* `curl ascii.live/forrest` - Lauf, Forrest, lauf!
* `curl ascii.live/nyan` - Nyan Cat ansehen
* `curl https://poptart.spinda.net` — Nyan Cat im Vollbild, farbig
* `gopher://fld.gp:70` - Gopher-Ressourcen / Nachrichten / Wetter / Unterhaltung
* `gopher://mozz.us:70` - Spiele, Drink-Rezepte und mehr
* `gopher://port70.net/1board/b` - 4chan
* :no_entry_sign: `ssh torus@ascii.town` - kollaboratives ASCII-Kunst-Projekt ([source](https://git.causal.agency/torus))
* `telnet 1984.ws 23` — BBS (BBS-Liste [hier](https://www.telnetbbsguide.com/bbs/))
* `ssh vtm@netxs.online` - Demo der textbasierten Desktop-Umgebung „Monotty“ ([source](https://github.com/netxs-group/VTM))
* `curl gif.xyzzy.run` — GIFs im Terminal suchen und anzeigen
* `curl -sL https://raw.githubusercontent.com/gsobell/duckpond/home/duckpond.sh | bash` - eine Ente durch das Terminal schwimmen sehen
* `cat mario.nes | nc play-nes.org 4444` - ROMs per netcat emulieren (benötigt eine lokale ROM-Datei) ([source](https://github.com/henrikpersson/potatis))
* `finger @happynetbox.com` - an einer experimentellen Internet-Sozialerfahrung teilnehmen

Auf Telnet/SSH basierende Spiele:

* `ssh sshtron.zachlatta.com` ~> Snake-Spiel; mit AWSD-Tasten spielen
* `ssh netris.rocketnine.space` —  mehrspieler Tetris
* `ssh play@ascii.town` —  2048, Snake und Freecell ([source](https://git.causal.agency/play))
* `ssh gameroom@bitreich.org` - 11 Arcade-Spiele
* `ssh play@anonymine-demo.oskog97.com -p 2222` — kostenloses Minesweeper erraten; Passwort: play
* `ssh twenex@sdf.org` —  verschiedene Spiele darunter Damespiel spielen
* `ssh intricacy@sshgames.thegonz.net` - kompetitives Puzzle; Passwort: intricacy
* `ssh simulchess@sshgames.thegonz.net` - Mehrspieler-Schach; Passwort: simulchess
* `ssh pacman:pacman@antimirov.net` - Pacman; Passwort: pacman
* `ssh lagrogue@sshgames.thegonz.net` - Roguelike; Passwort: lag
* `ssh ckhet@sshgames.thegonz.net` - Khet; Passwort: ckhet
* `ssh slashem@slashem.me` - nethack und andere
* `ssh rodney@rlgallery.org` - rogue; Passwort: yendor
* `ssh pong.brk.st` - Einzelspieler-Pong
* `ssh tty.sdf.org` - erfordert zuerst das [Erstellen eines Kontos](https://sdf.org)
* `ssh -p 8080 -l magnetic magneticscrolls.net` - interaktive Text-Adventure-Spiele von Magnetic Scrolls
* `nc aardmud.org 23` — MUD (MUD-Liste [hier](http://www.mudconnect.com/cgi-bin/search.cgi?mode=tmc_biglist), funktioniert auch mit telnet)
* `nc freechess.org 23` — Schachspiel (funktioniert auch mit telnet)
* `nc igs.joyjoy.net 6969` - das Spiel Go spielen/ansehen (funktioniert auch mit telnet)
* `nc fibs.com 4321` - mehrspieler Backgammon (funktioniert auch mit telnet)
* `telnet dungeon.name 20028` - unendliches Höhlenabenteuer
* `telnet milek7.gq` — Spiele: Pong, Break out, Tetris
* `telnet mtrek.com 1701` — Star Trek
* `telnet decwars.com 1701` — Mehrspieler-Star Trek
* `telnet telehack.com`
* `telnet multizork.icculus.org` — Mehrspieler-Zork


## Skripte

Nützliche Skripte, die sich mit nur einer Codezeile ausführen lassen, bei denen jedoch weiterhin eine lokale Ausführung nötig ist.

* `curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -`
* `curl -sL https://raw.githubusercontent.com/dylanaraps/neofetch/master/neofetch | bash`
* `curl -sL https://raw.githubusercontent.com/keroserene/rickrollrc/master/roll.sh | bash`

## Clients

Mindestens einer dieser Clients, die Sie zum Zugriff auf diese Dienste benötigen, ist auf fast jedem UNIX/Linux-System installiert.

* [aria2](https://aria2.github.io/)
* [bitsadmin](https://docs.microsoft.com/windows/win32/bits/)
* [curl](https://curl.haxx.se/)
* [httpie](https://httpie.org/)
* [httrack](https://www.httrack.com/)
* [powershell](https://microsoft.com/powershell/)
* [rclone](https://rclone.org/)
* [wget](https://www.gnu.org/software/wget/)
* [wget2](https://gitlab.com/gnuwget/wget2)
