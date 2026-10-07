# Servicios de consola

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Una lista curada de servicios de consola increíbles (accesibles vía HTTP, HTTPS y otros protocolos de red).
Los datos estructurados de la lista (mantenidos sincronizados) están en [structured.yaml](structured.yaml).

  - [Dirección IP](#IP-Address "Dirección IP")
  - [Geolocalización](#Geolocation "Geolocalización")
  - [Compartir texto](#Text-Sharing "Compartir texto")
  - [Acortador de URL](#URL-Shortener "Acortador de URL")
  - [Transferencia de archivos](#File-Transfer "Transferencia de archivos")
  - [Navegador](#Browser "Navegador")
  - [Herramientas](#Tools "Herramientas")
  - [Monitorización](#Monitoring "Monitorización")
  - [Clima](#Weather "Clima")
  - [Noticias](#News "Noticias")
  - [Tablones de información](#Information-boards "Tablones de información")
  - [Mapa](#Map "Mapa")
  - [Dinero](#Money "Tipos de cambio e información financiera")
  - [Documentación](#Documentation "Manuales, chuletas y preguntas frecuentes")
  - [Diccionarios y traductores](#Dictionaries-and-translators "Diccionarios y traductores")
  - [Generadores](#Generators "Generadores de mensajes/textos/chistes/fortunas/nombres")
  - [Entretenimiento y juegos](#Entertainment-and-games "Chats, juegos y diversión")
  - [Scripts](#Scripts "Scripts")
  - [Clientes](#Clients "Clientes")

## Dirección IP

### En línea

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

### Nueva línea

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
* `curl 'api.hackertarget.com/zonetransfer/?q=zonetransfer.me'` - Transferencia de zona DNS

### Solo JSON

* `curl httpbin.org/ip`
* `curl wtfismyip.com/json`
* `curl -L iphorse.com/json`
* `curl geoplugin.net/json.gp`
* `curl https://ipapi.co/json`
* `curl -L jsonip.com`
* `curl gd.geobytes.com/GetCityDetails`
* `curl ip.jsontest.com`

## Geolocalización

* `curl api.ip2location.io` or `curl api.ip2location.io?ip=8.8.8.8`
* `curl ipinfo.io/8.8.8.8` or `curl ipinfo.io/8.8.8.8/loc`
* `curl ip-api.com` or `curl ip-api.com/8.8.8.8`
* `curl ifconfig.co/country` or `curl ifconfig.co/city` or `curl ifconfig.co/country-iso` or `http ifconfig.co/json`
* `curl ifconfig.es/geo` or `curl ifconfig.es/json` or `curl ifconfig.es/country` or `curl ifconfig.es/code` or `curl ifconfig.es/city` or `curl ifconfig.es/latitude` or `curl ifconfig.es/longitude`

## Compartir texto

* :no_entry_sign: `echo "Hello world!" | curl -F 'f:1=<-' ix.io`
* `echo "Hello world!" | curl -F file=@- 0x0.st`
* `echo "Hello world!" | curl -F 'clbin=<-' https://clbin.com`
* `echo "Hello world!" | nc termbin.com 9999`
* `echo "Hello world!" | curl -F 'sprunge=<-' sprunge.us`
* `echo "Hello world!" | curl -H "content-type: text/plain" -d @- https://textdb.dev/api/data/unique-id-for-my-text`
* `curl https://patchbay.pub/your-custom-path -d "Hello world!"` and `curl -s https://patchbay.pub/your-custom-path`

## Acortador de URL

* `curl -s tinyurl.com/api-create.php?url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://ttm.sh`
* `curl https://is.gd/create.php?format=simple&url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://0x0.st`
* `curl -F url=<link> https://shorta.link`

## Transferencia de archivos

* `curl --upload-file <file> transfer.sh/<filename>`
* `curl -F file=@<file> https://ttm.sh`
* `curl https://patchbay.pub/your-custom-filepath.exe --data-binary @<file>` and `curl -LO https://patchbay.pub/your-custom-filepath.exe`
* `nc oshi.at 7777 < <file>` or `curl https://oshi.at -F f=@<file>`
* `curl -F file=@<file> https://0x0.st`
* `curl -F file=@<file> https://api.anonfile.com/upload`
* `curl -T <file> https://pixeldrain.com/api/file/`

## Navegador

*  :no_entry_sign: `ssh brow.sh`

## Herramientas

* `curl qrenco.de/STRING` or `echo STRING | curl -F-=\<- qrenco.de` — crear un código QR para una cadena ([chubin/qrenco.de](https://github.com/chubin/qrenco.de))
* `curl "http://c.docverter.com/convert" -F from=html -F to=pdf -F "input_files[]=@your-file-name.html" -o "output-file-name.pdf"` - convertir un documento ([source](https://github.com/docverter/docverter))
* `curl -s "https://decapi.me/youtube/latest_video?user=NPR"` - título/URL del último envío del canal de YouTube indicado
* `curl -s "https://decapi.me/twitter/latest?name=NPR"` - último tuit de la cuenta indicada
* `curl -s "https://decapi.me/twitch/uptime?channel=IGN"` - comprobar si el canal de Twitch indicado está en línea
* `curl -s "https://httpbin.org/delay/4"` - servicio de solicitud y respuesta HTTP (por ejemplo, responder tras 4 segundos)
* `curl -s "https://urlecho.appspot.com/echo?body=Hello+World"` - respuesta HTTP definida en los parámetros de la solicitud
* `curl -s "https://urlreq.appspot.com/req?method=GET&url=https://l2.io/ip"` - proxy HTTP que realiza nuevas solicitudes según los parámetros de entrada
* `curl -s "https://api.hackertarget.com/nmap/?q=93.184.216.34"` - escaneo de puertos TCP con NMAP
* `curl -s "https://api.hackertarget.com/pagelinks/?q=msn.com"` - extraer todos los enlaces de una página
* `curl -s "https://api.hackertarget.com/whois/?q=google.com"` - búsqueda Whois
* `curl -s "https://jsonplaceholder.typicode.com/users"` - herramienta útil para obtener datos falsos de API
* `ssh unix50@unix50.org - password is unix50` - crear y usar instancias de sistemas UNIX históricos
* `ssh new@sdf.org` - crear una cuenta shell UNIX gratuita para usar con el SDF Public Access UNIX System
* `dig help @dns.toys` - lista una gran cantidad de servicios disponibles de [dns.toys](https://www.dns.toys/)

## Criptografía

* `curl https://ja3er.com/search/535886c8d0a1b14f02298967bb990171` - búsqueda de huella SSL

## Monitorización

* `curl ping.gl`
* `curl https://status.plaintext.sh/t` - comprobar páginas de estado de servicios comunes

## Clima

* `curl wttr.in` or `curl wttr.in/Berlin` — la forma correcta de consultar el clima
* `finger oslo@graph.no`
* `nc rainmaker.wunderground.com 3000` (also works with telnet)
* `curl https://tgftp.nws.noaa.gov/data/observations/metar/stations/KAAO.TXT` - METAR del ICAO especificado

## Noticias

* `curl getnews.tech/world+cup` — obtener las últimas noticias
* `curl hkkr.in` - [Feed de Hacker News](github.com/NalinPlad/hkkr.in)
* `curl rate.sx` - para explorar tipos de cambio de divisas (cripto)
* `gopher://gopher.leveck.us:70` - agregador de noticias
* `gopher://gopherddit.com:70`  - reddit
* `ssh teletekst.nl` - teletexto de la fundación de radiodifusión pública neerlandesa (NOS) en la terminal
* `ssh redditbox.us` — reddit en la terminal (ssh + navegador de texto)
* `gopher://hngopher.com:70` - hacker news

* :no_entry_sign: `curl wrk.ist` — obtener los últimos trabajos remotos/gigs en el mercado de TI

## Tablones de información

* :no_entry_sign: `curl http://frcl.de/gulasch` — Gulaschprogrammiernacht 2019 Fahrplan
* `gopher://gopherpedia.com:70` - wikipedia

### COVID-19

* `curl https://corona-stats.online`
* `curl -L covid19.trackercli.com`
* `curl snf-878293.vm.okeanos.grnet.gr` - estadísticas de Covid-19 para tu país

## Mapa

* `telnet mapscii.me` — mostrar un mapa del mundo ampliable

## Dinero

* `curl rate.sx` — obtener tipos de cambio de criptomonedas
* `curl crrcy.sh` - obtener tipos de cambio e históricos de divisas fiat y cripto
* :no_entry_sign: `curl moneroj.org` — obtener el tipo de cambio de Monero
* :no_entry_sign: `curl cmc.rjldev.com` — obtener el top 100 de criptomonedas de coinmarketcap
* `nc ticker.bitcointicker.co 10080` — obtener el tipo de cambio BTC/USD (también funciona con telnet)
* `curl https://stonks.icu/amd/msft` obtener visualizador y rastreador de acciones
* `curl terminal-stocks.shashi.dev/:ticker` - obtener precios e información de acciones del ticker de yahoo proporcionado
* `ssh cointop.sh` - seguimiento de criptomonedas en TUI ([source](https://github.com/miguelmota/cointop))

## Documentación

* `curl cheat.sh` — chuletas de comandos UNIX/Linux con curl ([chubin/cheat.sh](https://github.com/chubin/cheat.sh))
* `curl 'https://api.hackertarget.com/subnetcalc/?q=192.168.1.0/24'` Calculadora de subredes
* `gopher://telcodata.us:70` - búsqueda NPA/NXX
* `gopher://gopher.floodgap.com/1/world` - todos los servidores gopher conocidos

## Diccionarios y traductores

* `curl 'dict.org/d:command line'`

## Generadores

* `git commit -m "$(curl -sk whatthecommit.com/index.txt)"` —  generar un mensaje de commit aleatorio
* curl `"https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"` - generar un número aleatorio
* `curl -H 'Accept: text/plain' https://foaas.com/cool/:from` — «vete al diablo» como servicio
* `curl pseudorandom.name` — generar un nombre pseudoaleatorio (¿americano?) ([treyhunner/pseudorandom.name](https://github.com/treyhunner/pseudorandom.name))
* :no_entry_sign: `curl -s https://uinames.com/api/?region=france\&amount=25 | jq '.[] | .name +" " + .surname'` — generar 25 nombres franceses aleatorios
* `curl https://icanhazdadjoke.com` — chistes aleatorios
* `curl givemeguid.com` - GUID
* `nc towel.blinkenlights.nl 666` - excusas de TI (también funciona con telnet)
* `curl -s 'https://api-inference.huggingface.co/models/distilgpt2' --data-raw '"what is the meaning of life?"' | jq '.[].generated_text'` - generar texto con el modelo de IA GPT2 a partir de una cadena semilla

## Comercio electrónico

* `ssh stickr.shop` — la rebelde tienda de stickers solo CLI. Compra stickers vía ssh.
* `ssh terminal.shop` — compra café vía ssh.

## Entretenimiento y juegos

* `ssh -o StrictHostKeyChecking=no watch.ascii.theater` - transmitir películas basadas en texto gratis en tu terminal
* `curl https://asciitv.fr` — ver Star Wars en la terminal vía curl ([source](https://github.com/martinraison/ascii-tv))
* `nc towel.blinkenlights.nl 23` — ver Star Wars en la terminal vía netcat (también funciona con telnet)
* `ssh movie.gabe565.com` - ver Star Wars con controles de reproducción en la terminal vía ssh
* `ssh chat.shazow.net` — chatear vía SSH ([shazow/ssh-chat](https://github.com/shazow/ssh-chat))
* `ssh chat@ascii.town` — cliente de chat SSH ([source](https://git.causal.agency/catgirl))
* `curl parrot.live` — mostrar un loro de fiesta animado ([hugomd/parrot.live](https://github.com/hugomd/parrot.live))
* `curl byemck.atulr.com` — mostrar un mensaje de despedida animado para colegas ([master-atul/byemck](https://github.com/master-atul/byemck))
* `nc rya.nc 1987` — ser Rick Rolled (también funciona con telnet)
* `curl node-web-console.glitch.me` — ver una carrera de emojis ([source](https://glitch.com/edit/#!/node-web-console))
* `curl ascii.live/forrest` - ¡corre, Forrest, corre!
* `curl ascii.live/nyan` - ver Nyan Cat
* `curl https://poptart.spinda.net` — Nyan Cat a pantalla completa y con color
* `gopher://fld.gp:70` - recursos gopher / noticias / clima / entretenimiento
* `gopher://mozz.us:70` - juegos, recetas de bebidas y más
* `gopher://port70.net/1board/b` - 4chan
* :no_entry_sign: `ssh torus@ascii.town` - proyecto colaborativo de arte ASCII ([source](https://git.causal.agency/torus))
* `telnet 1984.ws 23` — BBS (lista BBS [aquí](https://www.telnetbbsguide.com/bbs/))
* `ssh vtm@netxs.online` - demostrar el entorno de escritorio basado en texto «Monotty» ([source](https://github.com/netxs-group/VTM))
* `curl gif.xyzzy.run` — buscar y mostrar gifs en tu terminal
* `curl -sL https://raw.githubusercontent.com/gsobell/duckpond/home/duckpond.sh | bash` - ver un pato nadar por tu terminal
* `cat mario.nes | nc play-nes.org 4444` - emular roms vía netcat (requiere pasar un archivo rom local) ([source](https://github.com/henrikpersson/potatis))
* `finger @happynetbox.com` - participar en una experiencia social de internet experimental

Juegos basados en Telnet/SSH:

* `ssh sshtron.zachlatta.com` ~> juego de serpiente; juega con las teclas AWSD
* `ssh netris.rocketnine.space` —  tetris multijugador
* `ssh play@ascii.town` —  2048, serpiente y freecell ([source](https://git.causal.agency/play))
* `ssh gameroom@bitreich.org` - 11 juegos de arcade
* `ssh play@anonymine-demo.oskog97.com -p 2222` — buscar minesweeper gratis; contraseña: play
* `ssh twenex@sdf.org` —  jugar a varios juegos incluyendo las damas
* `ssh intricacy@sshgames.thegonz.net` - puzzle competitivo; contraseña: intricacy
* `ssh simulchess@sshgames.thegonz.net` - ajedrez multijugador; contraseña: simulchess
* `ssh pacman:pacman@antimirov.net` - Pacman; contraseña: pacman
* `ssh lagrogue@sshgames.thegonz.net` - Roguelike; contraseña: lag
* `ssh ckhet@sshgames.thegonz.net` - Khet; contraseña: ckhet
* `ssh slashem@slashem.me` - nethack y otros
* `ssh rodney@rlgallery.org` - rogue; contraseña: yendor
* `ssh pong.brk.st` - pong de un jugador
* `ssh tty.sdf.org` - requiere [crear una cuenta](https://sdf.org) primero
* `ssh -p 8080 -l magnetic magneticscrolls.net` - juegos de aventura textual de ficción interactiva desarrollados por Magnetic Scrolls
* `nc aardmud.org 23` — MUD (lista MUD [aquí](http://www.mudconnect.com/cgi-bin/search.cgi?mode=tmc_biglist), también funciona con telnet)
* `nc freechess.org 23` — juego de ajedrez (también funciona con telnet)
* `nc igs.joyjoy.net 6969` - jugar/ver el juego de Go (también funciona con telnet)
* `nc fibs.com 4321` - backgammon multijugador (también funciona con telnet)
* `telnet dungeon.name 20028` - aventura de cueva infinita
* `telnet milek7.gq` — juegos: Pong, Break out, Tetris
* `telnet mtrek.com 1701` — Star Trek
* `telnet decwars.com 1701` — Star Trek multijugador
* `telnet telehack.com`
* `telnet multizork.icculus.org` — Zork multijugador


## Scripts

Scripts útiles que se pueden ejecutar con una sola línea de código, pero donde aún es necesaria la ejecución local.

* `curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -`
* `curl -sL https://raw.githubusercontent.com/dylanaraps/neofetch/master/neofetch | bash`
* `curl -sL https://raw.githubusercontent.com/keroserene/rickrollrc/master/roll.sh | bash`

## Clientes

Al menos uno de estos clientes, que necesitas para acceder a estos servicios, está instalado en casi todos los sistemas UNIX/Linux.

* [aria2](https://aria2.github.io/)
* [bitsadmin](https://docs.microsoft.com/windows/win32/bits/)
* [curl](https://curl.haxx.se/)
* [httpie](https://httpie.org/)
* [httrack](https://www.httrack.com/)
* [powershell](https://microsoft.com/powershell/)
* [rclone](https://rclone.org/)
* [wget](https://www.gnu.org/software/wget/)
* [wget2](https://gitlab.com/gnuwget/wget2)
