# Services de console

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Une liste sélectionnée de services console exceptionnels (accessibles via HTTP, HTTPS et d'autres protocoles réseau).
Les données structurées de la liste (tenues à jour) se trouvent dans [structured.yaml](structured.yaml).

  - [Adresse IP](#IP-Address "Adresse IP")
  - [Géolocalisation](#Geolocation "Géolocalisation")
  - [Partage de texte](#Text-Sharing "Partage de texte")
  - [Raccourcisseur d'URL](#URL-Shortener "Raccourcisseur d'URL")
  - [Transfert de fichiers](#File-Transfer "Transfert de fichiers")
  - [Navigateur](#Browser "Navigateur")
  - [Outils](#Tools "Outils")
  - [Surveillance](#Monitoring "Surveillance")
  - [Météo](#Weather "Météo")
  - [Actualités](#News "Actualités")
  - [Tableaux d'information](#Information-boards "Tableaux d'information")
  - [Carte](#Map "Carte")
  - [Argent](#Money "Taux de change et informations financières")
  - [Documentation](#Documentation "Manuels, aide-mémoire et FAQ")
  - [Dictionnaires et traducteurs](#Dictionaries-and-translators "Dictionnaires et traducteurs")
  - [Générateurs](#Generators "Générateurs de messages/textes/blagues/fortunes/noms")
  - [Divertissement et jeux](#Entertainment-and-games "Chats, jeux et divertissement")
  - [Scripts](#Scripts "Scripts")
  - [Clients](#Clients "Clients")

## Adresse IP

### En ligne

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

### Nouvelle ligne

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
* `curl 'api.hackertarget.com/zonetransfer/?q=zonetransfer.me'` - Transfert de zone DNS

### JSON uniquement

* `curl httpbin.org/ip`
* `curl wtfismyip.com/json`
* `curl -L iphorse.com/json`
* `curl geoplugin.net/json.gp`
* `curl https://ipapi.co/json`
* `curl -L jsonip.com`
* `curl gd.geobytes.com/GetCityDetails`
* `curl ip.jsontest.com`

## Géolocalisation

* `curl api.ip2location.io` or `curl api.ip2location.io?ip=8.8.8.8`
* `curl ipinfo.io/8.8.8.8` or `curl ipinfo.io/8.8.8.8/loc`
* `curl ip-api.com` or `curl ip-api.com/8.8.8.8`
* `curl ifconfig.co/country` or `curl ifconfig.co/city` or `curl ifconfig.co/country-iso` or `http ifconfig.co/json`
* `curl ifconfig.es/geo` or `curl ifconfig.es/json` or `curl ifconfig.es/country` or `curl ifconfig.es/code` or `curl ifconfig.es/city` or `curl ifconfig.es/latitude` or `curl ifconfig.es/longitude`

## Partage de texte

* :no_entry_sign: `echo "Hello world!" | curl -F 'f:1=<-' ix.io`
* `echo "Hello world!" | curl -F file=@- 0x0.st`
* `echo "Hello world!" | curl -F 'clbin=<-' https://clbin.com`
* `echo "Hello world!" | nc termbin.com 9999`
* `echo "Hello world!" | curl -F 'sprunge=<-' sprunge.us`
* `echo "Hello world!" | curl -H "content-type: text/plain" -d @- https://textdb.dev/api/data/unique-id-for-my-text`
* `curl https://patchbay.pub/your-custom-path -d "Hello world!"` and `curl -s https://patchbay.pub/your-custom-path`

## Raccourcisseur d'URL

* `curl -s tinyurl.com/api-create.php?url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://ttm.sh`
* `curl https://is.gd/create.php?format=simple&url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://0x0.st`
* `curl -F url=<link> https://shorta.link`

## Transfert de fichiers

* `curl --upload-file <file> transfer.sh/<filename>`
* `curl -F file=@<file> https://ttm.sh`
* `curl https://patchbay.pub/your-custom-filepath.exe --data-binary @<file>` and `curl -LO https://patchbay.pub/your-custom-filepath.exe`
* `nc oshi.at 7777 < <file>` or `curl https://oshi.at -F f=@<file>`
* `curl -F file=@<file> https://0x0.st`
* `curl -F file=@<file> https://api.anonfile.com/upload`
* `curl -T <file> https://pixeldrain.com/api/file/`

## Navigateur

*  :no_entry_sign: `ssh brow.sh`

## Outils

* `curl qrenco.de/STRING` or `echo STRING | curl -F-=\<- qrenco.de` — créer un QR-code pour une chaîne ([chubin/qrenco.de](https://github.com/chubin/qrenco.de))
* `curl "http://c.docverter.com/convert" -F from=html -F to=pdf -F "input_files[]=@your-file-name.html" -o "output-file-name.pdf"` - convertir un document ([source](https://github.com/docverter/docverter))
* `curl -s "https://decapi.me/youtube/latest_video?user=NPR"` - titre/URL du dernier upload de la chaîne YouTube indiquée
* `curl -s "https://decapi.me/twitter/latest?name=NPR"` - dernier tweet du compte indiqué
* `curl -s "https://decapi.me/twitch/uptime?channel=IGN"` - vérifier si la chaîne Twitch indiquée est en ligne
* `curl -s "https://httpbin.org/delay/4"` - service de requête et réponse HTTP (par exemple répondre après 4 secondes)
* `curl -s "https://urlecho.appspot.com/echo?body=Hello+World"` - réponse HTTP définie dans les paramètres de la requête
* `curl -s "https://urlreq.appspot.com/req?method=GET&url=https://l2.io/ip"` - proxy HTTP effectuant de nouvelles requêtes selon les paramètres d'entrée
* `curl -s "https://api.hackertarget.com/nmap/?q=93.184.216.34"` - scan de ports TCP via NMAP
* `curl -s "https://api.hackertarget.com/pagelinks/?q=msn.com"` - extraire tous les liens d'une page
* `curl -s "https://api.hackertarget.com/whois/?q=google.com"` - recherche Whois
* `curl -s "https://jsonplaceholder.typicode.com/users"` - outil utile pour récupérer de fausses données d'API
* `ssh unix50@unix50.org - password is unix50` - créer et utiliser des instances de systèmes UNIX historiques
* `ssh new@sdf.org` - créer un compte shell UNIX gratuit pour le système UNIX d'accès public SDF
* `dig help @dns.toys` - liste une pléthore de services disponibles sur [dns.toys](https://www.dns.toys/)

## Cryptographie

* `curl https://ja3er.com/search/535886c8d0a1b14f02298967bb990171` - recherche d'empreinte SSL

## Surveillance

* `curl ping.gl`
* `curl https://status.plaintext.sh/t` - vérifier les pages de statut des services courants

## Météo

* `curl wttr.in` or `curl wttr.in/Berlin` — la bonne façon de consulter la météo
* `finger oslo@graph.no`
* `nc rainmaker.wunderground.com 3000` (also works with telnet)
* `curl https://tgftp.nws.noaa.gov/data/observations/metar/stations/KAAO.TXT` - METAR de l'ICAO spécifié

## Actualités

* `curl getnews.tech/world+cup` — récupérer les dernières nouvelles
* `curl hkkr.in` - [Flux Hacker News](github.com/NalinPlad/hkkr.in)
* `curl rate.sx` - pour explorer les taux de change des devises (crypto)
* `gopher://gopher.leveck.us:70` - agrégateur de nouvelles
* `gopher://gopherddit.com:70`  - reddit
* `ssh teletekst.nl` - télétexte de la fondation de radiodiffusion publique néerlandaise (NOS) dans le terminal
* `ssh redditbox.us` — reddit dans le terminal (ssh + navigateur texte)
* `gopher://hngopher.com:70` - hacker news

* :no_entry_sign: `curl wrk.ist` — récupérer les derniers emplois/distants sur le marché de l'IT

## Tableaux d'information

* :no_entry_sign: `curl http://frcl.de/gulasch` — Gulaschprogrammiernacht 2019 Fahrplan
* `gopher://gopherpedia.com:70` - wikipédia

### COVID-19

* `curl https://corona-stats.online`
* `curl -L covid19.trackercli.com`
* `curl snf-878293.vm.okeanos.grnet.gr` - statistiques Covid-19 pour votre pays

## Carte

* `telnet mapscii.me` — afficher une carte du monde zoomable

## Argent

* `curl rate.sx` — obtenir les taux de change des cryptomonnaies
* `curl crrcy.sh` - obtenir les taux de change et les données historiques des devises fiat et crypto
* :no_entry_sign: `curl moneroj.org` — obtenir le taux de change Monero
* :no_entry_sign: `curl cmc.rjldev.com` — obtenir le top 100 des cryptomonnaies de coinmarketcap
* `nc ticker.bitcointicker.co 10080` — obtenir le taux de change BTC/USD (fonctionne aussi avec telnet)
* `curl https://stonks.icu/amd/msft` obtenir un visualiseur et suivi d'actions
* `curl terminal-stocks.shashi.dev/:ticker` - obtenir les prix et infos boursières du ticker yahoo fourni
* `ssh cointop.sh` - suivi des cryptomonnaies en TUI ([source](https://github.com/miguelmota/cointop))

## Documentation

* `curl cheat.sh` — aide-mémoire des commandes UNIX/Linux via curl ([chubin/cheat.sh](https://github.com/chubin/cheat.sh))
* `curl 'https://api.hackertarget.com/subnetcalc/?q=192.168.1.0/24'` Calculateur de sous-réseau
* `gopher://telcodata.us:70` - recherche NPA/NXX
* `gopher://gopher.floodgap.com/1/world` - tous les serveurs gopher connus

## Dictionnaires et traducteurs

* `curl 'dict.org/d:command line'`

## Générateurs

* `git commit -m "$(curl -sk whatthecommit.com/index.txt)"` —  générer un message de commit aléatoire
* curl `"https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"` - générer un nombre aléatoire
* `curl -H 'Accept: text/plain' https://foaas.com/cool/:from` — « va te faire foutre » en tant que service
* `curl pseudorandom.name` — générer un nom pseudo-aléatoire (américain ?) ([treyhunner/pseudorandom.name](https://github.com/treyhunner/pseudorandom.name))
* :no_entry_sign: `curl -s https://uinames.com/api/?region=france\&amount=25 | jq '.[] | .name +" " + .surname'` — générer 25 noms français aléatoires
* `curl https://icanhazdadjoke.com` — blagues aléatoires
* `curl givemeguid.com` - guid
* `nc towel.blinkenlights.nl 666` - excuses informatiques (fonctionne aussi avec telnet)
* `curl -s 'https://api-inference.huggingface.co/models/distilgpt2' --data-raw '"what is the meaning of life?"' | jq '.[].generated_text'` - générer du texte avec le modèle IA GPT2 à partir d'une chaîne seed

## Commerce électronique

* `ssh stickr.shop` — le magasin de stickers rebelle, en CLI uniquement. Achetez des stickers via ssh.
* `ssh terminal.shop` — achetez du café via ssh.

## Divertissement et jeux

* `ssh -o StrictHostKeyChecking=no watch.ascii.theater` - diffuser des films textuels gratuits dans votre terminal
* `curl https://asciitv.fr` — regarder Star Wars dans le terminal via curl ([source](https://github.com/martinraison/ascii-tv))
* `nc towel.blinkenlights.nl 23` — regarder Star Wars dans le terminal via netcat (fonctionne aussi avec telnet)
* `ssh movie.gabe565.com` - regarder Star Wars avec contrôles de lecture dans le terminal via ssh
* `ssh chat.shazow.net` — discuter via SSH ([shazow/ssh-chat](https://github.com/shazow/ssh-chat))
* `ssh chat@ascii.town` — client de chat SSH ([source](https://git.causal.agency/catgirl))
* `curl parrot.live` — afficher un perroquet de fête animé ([hugomd/parrot.live](https://github.com/hugomd/parrot.live))
* `curl byemck.atulr.com` — afficher un message d'au revoir animé pour les collègues ([master-atul/byemck](https://github.com/master-atul/byemck))
* `nc rya.nc 1987` — se faire Rick Roller (fonctionne aussi avec telnet)
* `curl node-web-console.glitch.me` — regarder une course d'emojis ([source](https://glitch.com/edit/#!/node-web-console))
* `curl ascii.live/forrest` - cours, Forrest, cours !
* `curl ascii.live/nyan` - regarder Nyan Cat
* `curl https://poptart.spinda.net` — Nyan Cat plein écran coloré
* `gopher://fld.gp:70` - ressources gopher / actualités / météo / divertissement
* `gopher://mozz.us:70` - jeux, recettes de boissons et autres
* `gopher://port70.net/1board/b` - 4chan
* :no_entry_sign: `ssh torus@ascii.town` - projet collaboratif d'art ASCII ([source](https://git.causal.agency/torus))
* `telnet 1984.ws 23` — BBS (liste BBS [ici](https://www.telnetbbsguide.com/bbs/))
* `ssh vtm@netxs.online` - démo de l'environnement de bureau textuel « Monotty » ([source](https://github.com/netxs-group/VTM))
* `curl gif.xyzzy.run` — rechercher et afficher des gifs dans votre terminal
* `curl -sL https://raw.githubusercontent.com/gsobell/duckpond/home/duckpond.sh | bash` - regarder un canard nager dans votre terminal
* `cat mario.nes | nc play-nes.org 4444` - émuler des roms via netcat (nécessite de fournir un fichier rom local) ([source](https://github.com/henrikpersson/potatis))
* `finger @happynetbox.com` - participer à une expérience sociale internet expérimentale

Jeux basés sur Telnet/SSH :

* `ssh sshtron.zachlatta.com` ~> jeu du serpent ; jouez avec les touches AWSD
* `ssh netris.rocketnine.space` —  tetris multijoueur
* `ssh play@ascii.town` —  2048, serpent et freecell ([source](https://git.causal.agency/play))
* `ssh gameroom@bitreich.org` - 11 jeux d'arcade
* `ssh play@anonymine-demo.oskog97.com -p 2222` — démineur gratuit à deviner ; mot de passe : play
* `ssh twenex@sdf.org` —  jouer à divers jeux dont les dames
* `ssh intricacy@sshgames.thegonz.net` - puzzle compétitif ; mot de passe : intricacy
* `ssh simulchess@sshgames.thegonz.net` - échecs multijoueur ; mot de passe : simulchess
* `ssh pacman:pacman@antimirov.net` - Pacman ; mot de passe : pacman
* `ssh lagrogue@sshgames.thegonz.net` - Roguelike ; mot de passe : lag
* `ssh ckhet@sshgames.thegonz.net` - Khet ; mot de passe : ckhet
* `ssh slashem@slashem.me` - nethack et autres
* `ssh rodney@rlgallery.org` - rogue ; mot de passe : yendor
* `ssh pong.brk.st` - pong solo
* `ssh tty.sdf.org` - nécessite de [créer un compte](https://sdf.org) d'abord
* `ssh -p 8080 -l magnetic magneticscrolls.net` - jeux d'aventure textuels de fiction interactive développés par Magnetic Scrolls
* `nc aardmud.org 23` — MUD (liste MUD [ici](http://www.mudconnect.com/cgi-bin/search.cgi?mode=tmc_biglist), fonctionne aussi avec telnet)
* `nc freechess.org 23` — jeu d'échecs (fonctionne aussi avec telnet)
* `nc igs.joyjoy.net 6969` - jouer/regarder le jeu de Go (fonctionne aussi avec telnet)
* `nc fibs.com 4321` - backgammon multijoueur (fonctionne aussi avec telnet)
* `telnet dungeon.name 20028` - aventure de grotte infinie
* `telnet milek7.gq` — jeux : Pong, Casse-briques, Tetris
* `telnet mtrek.com 1701` — Star Trek
* `telnet decwars.com 1701` — Star Trek multijoueur
* `telnet telehack.com`
* `telnet multizork.icculus.org` — Zork multijoueur


## Scripts

Scripts utiles, exécutables en une seule ligne de code, mais nécessitant toujours une exécution locale.

* `curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -`
* `curl -sL https://raw.githubusercontent.com/dylanaraps/neofetch/master/neofetch | bash`
* `curl -sL https://raw.githubusercontent.com/keroserene/rickrollrc/master/roll.sh | bash`

## Clients

Au moins l'un de ces clients, nécessaires pour accéder à ces services, est installé sur presque tous les systèmes UNIX/Linux.

* [aria2](https://aria2.github.io/)
* [bitsadmin](https://docs.microsoft.com/windows/win32/bits/)
* [curl](https://curl.haxx.se/)
* [httpie](https://httpie.org/)
* [httrack](https://www.httrack.com/)
* [powershell](https://microsoft.com/powershell/)
* [rclone](https://rclone.org/)
* [wget](https://www.gnu.org/software/wget/)
* [wget2](https://gitlab.com/gnuwget/wget2)
