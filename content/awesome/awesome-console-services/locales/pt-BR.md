# Serviços de console

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Uma lista selecionada de serviços de console incríveis (acessíveis via HTTP, HTTPS e outros protocolos de rede).
Os dados estruturados da lista (mantidos em sincronia) estão em [structured.yaml](structured.yaml).

  - [Endereço IP](#IP-Address "Endereço IP")
  - [Geolocalização](#Geolocation "Geolocalização")
  - [Compartilhamento de texto](#Text-Sharing "Compartilhamento de texto")
  - [Encurtador de URL](#URL-Shortener "Encurtador de URL")
  - [Transferência de arquivos](#File-Transfer "Transferência de arquivos")
  - [Navegador](#Browser "Navegador")
  - [Ferramentas](#Tools "Ferramentas")
  - [Monitoramento](#Monitoring "Monitoramento")
  - [Clima](#Weather "Clima")
  - [Notícias](#News "Notícias")
  - [Quadros de informação](#Information-boards "Quadros de informação")
  - [Mapa](#Map "Mapa")
  - [Dinheiro](#Money "Taxas de câmbio e informações financeiras")
  - [Documentação](#Documentation "Manuais, cheatsheets e FAQs")
  - [Dicionários e tradutores](#Dictionaries-and-translators "Dicionários e tradutores")
  - [Geradores](#Generators "Geradores de mensagens/textos/piadas/fortunas/nomes")
  - [Entretenimento e jogos](#Entertainment-and-games "Bate-papos, jogos e diversão")
  - [Scripts](#Scripts "Scripts")
  - [Clientes](#Clients "Clientes")

## Endereço IP

### Em linha

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

### Nova linha

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
* `curl 'api.hackertarget.com/zonetransfer/?q=zonetransfer.me'` - Transferência de zona DNS

### Somente JSON

* `curl httpbin.org/ip`
* `curl wtfismyip.com/json`
* `curl -L iphorse.com/json`
* `curl geoplugin.net/json.gp`
* `curl https://ipapi.co/json`
* `curl -L jsonip.com`
* `curl gd.geobytes.com/GetCityDetails`
* `curl ip.jsontest.com`

## Geolocalização

* `curl api.ip2location.io` or `curl api.ip2location.io?ip=8.8.8.8`
* `curl ipinfo.io/8.8.8.8` or `curl ipinfo.io/8.8.8.8/loc`
* `curl ip-api.com` or `curl ip-api.com/8.8.8.8`
* `curl ifconfig.co/country` or `curl ifconfig.co/city` or `curl ifconfig.co/country-iso` or `http ifconfig.co/json`
* `curl ifconfig.es/geo` or `curl ifconfig.es/json` or `curl ifconfig.es/country` or `curl ifconfig.es/code` or `curl ifconfig.es/city` or `curl ifconfig.es/latitude` or `curl ifconfig.es/longitude`

## Compartilhamento de texto

* :no_entry_sign: `echo "Hello world!" | curl -F 'f:1=<-' ix.io`
* `echo "Hello world!" | curl -F file=@- 0x0.st`
* `echo "Hello world!" | curl -F 'clbin=<-' https://clbin.com`
* `echo "Hello world!" | nc termbin.com 9999`
* `echo "Hello world!" | curl -F 'sprunge=<-' sprunge.us`
* `echo "Hello world!" | curl -H "content-type: text/plain" -d @- https://textdb.dev/api/data/unique-id-for-my-text`
* `curl https://patchbay.pub/your-custom-path -d "Hello world!"` and `curl -s https://patchbay.pub/your-custom-path`

## Encurtador de URL

* `curl -s tinyurl.com/api-create.php?url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://ttm.sh`
* `curl https://is.gd/create.php?format=simple&url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://0x0.st`
* `curl -F url=<link> https://shorta.link`

## Transferência de arquivos

* `curl --upload-file <file> transfer.sh/<filename>`
* `curl -F file=@<file> https://ttm.sh`
* `curl https://patchbay.pub/your-custom-filepath.exe --data-binary @<file>` and `curl -LO https://patchbay.pub/your-custom-filepath.exe`
* `nc oshi.at 7777 < <file>` or `curl https://oshi.at -F f=@<file>`
* `curl -F file=@<file> https://0x0.st`
* `curl -F file=@<file> https://api.anonfile.com/upload`
* `curl -T <file> https://pixeldrain.com/api/file/`

## Navegador

*  :no_entry_sign: `ssh brow.sh`

## Ferramentas

* `curl qrenco.de/STRING` or `echo STRING | curl -F-=\<- qrenco.de` — criar um QR-code para uma string ([chubin/qrenco.de](https://github.com/chubin/qrenco.de))
* `curl "http://c.docverter.com/convert" -F from=html -F to=pdf -F "input_files[]=@your-file-name.html" -o "output-file-name.pdf"` - converter um documento ([source](https://github.com/docverter/docverter))
* `curl -s "https://decapi.me/youtube/latest_video?user=NPR"` - título/URL do último envio do canal do YouTube indicado
* `curl -s "https://decapi.me/twitter/latest?name=NPR"` - último tweet da conta indicada
* `curl -s "https://decapi.me/twitch/uptime?channel=IGN"` - verificar se o canal do Twitch indicado está online
* `curl -s "https://httpbin.org/delay/4"` - serviço de requisição e resposta HTTP (ex.: enviar resposta após 4 segundos)
* `curl -s "https://urlecho.appspot.com/echo?body=Hello+World"` - resposta HTTP definida nos parâmetros da requisição
* `curl -s "https://urlreq.appspot.com/req?method=GET&url=https://l2.io/ip"` - proxy HTTP que faz novas requisições com base nos parâmetros de entrada
* `curl -s "https://api.hackertarget.com/nmap/?q=93.184.216.34"` - varredura de portas TCP usando NMAP
* `curl -s "https://api.hackertarget.com/pagelinks/?q=msn.com"` - extrair todos os links de uma página
* `curl -s "https://api.hackertarget.com/whois/?q=google.com"` - consulta Whois
* `curl -s "https://jsonplaceholder.typicode.com/users"` - ferramenta útil para obter dados falsos de API
* `ssh unix50@unix50.org - password is unix50` - criar e usar instâncias de sistemas UNIX históricos
* `ssh new@sdf.org` - criar uma conta shell UNIX gratuita para usar com o SDF Public Access UNIX System
* `dig help @dns.toys` - lista uma infinidade de serviços disponíveis em [dns.toys](https://www.dns.toys/)

## Criptografia

* `curl https://ja3er.com/search/535886c8d0a1b14f02298967bb990171` - busca de impressão digital SSL

## Monitoramento

* `curl ping.gl`
* `curl https://status.plaintext.sh/t` - verificar páginas de status de serviços comuns

## Clima

* `curl wttr.in` or `curl wttr.in/Berlin` — a forma correta de verificar o clima
* `finger oslo@graph.no`
* `nc rainmaker.wunderground.com 3000` (also works with telnet)
* `curl https://tgftp.nws.noaa.gov/data/observations/metar/stations/KAAO.TXT` - METAR do ICAO especificado

## Notícias

* `curl getnews.tech/world+cup` — obter as últimas notícias
* `curl hkkr.in` - [Feed do Hacker News](github.com/NalinPlad/hkkr.in)
* `curl rate.sx` - para explorar taxas de câmbio de moedas (cripto)
* `gopher://gopher.leveck.us:70` - agregador de notícias
* `gopher://gopherddit.com:70`  - reddit
* `ssh teletekst.nl` - teletexto da fundação de radiodifusão pública dos Países Baixos (NOS) no terminal
* `ssh redditbox.us` — reddit no terminal (ssh + navegador de texto)
* `gopher://hngopher.com:70` - hacker news

* :no_entry_sign: `curl wrk.ist` — obter os últimos trabalhos remotos/gigs no mercado de TI

## Quadros de informação

* :no_entry_sign: `curl http://frcl.de/gulasch` — Gulaschprogrammiernacht 2019 Fahrplan
* `gopher://gopherpedia.com:70` - wikipédia

### COVID-19

* `curl https://corona-stats.online`
* `curl -L covid19.trackercli.com`
* `curl snf-878293.vm.okeanos.grnet.gr` - estatísticas de Covid-19 do seu país

## Mapa

* `telnet mapscii.me` — exibir um mapa-múndi ampliável

## Dinheiro

* `curl rate.sx` — obter taxas de câmbio de criptomoedas
* `curl crrcy.sh` - obter taxas de câmbio e dados históricos de moedas fiat e cripto
* :no_entry_sign: `curl moneroj.org` — obter a taxa de câmbio Monero
* :no_entry_sign: `curl cmc.rjldev.com` — obter o top 100 de criptomoedas do coinmarketcap
* `nc ticker.bitcointicker.co 10080` — obter a taxa de câmbio BTC/USD (também funciona com telnet)
* `curl https://stonks.icu/amd/msft` obter visualizador e rastreador de ações
* `curl terminal-stocks.shashi.dev/:ticker` - obter preços e informações de ações do ticker yahoo fornecido
* `ssh cointop.sh` - rastreamento de criptomoedas em TUI ([source](https://github.com/miguelmota/cointop))

## Documentação

* `curl cheat.sh` — cheatsheets de comandos UNIX/Linux usando curl ([chubin/cheat.sh](https://github.com/chubin/cheat.sh))
* `curl 'https://api.hackertarget.com/subnetcalc/?q=192.168.1.0/24'` Calculadora de sub-rede
* `gopher://telcodata.us:70` - pesquisa NPA/NXX
* `gopher://gopher.floodgap.com/1/world` - todos os servidores gopher conhecidos

## Dicionários e tradutores

* `curl 'dict.org/d:command line'`

## Geradores

* `git commit -m "$(curl -sk whatthecommit.com/index.txt)"` —  gerar mensagem de commit aleatória
* curl `"https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"` - gerar número aleatório
* `curl -H 'Accept: text/plain' https://foaas.com/cool/:from` — "vá se lascar" como serviço
* `curl pseudorandom.name` — gerar um nome pseudoaleatório (americano?) ([treyhunner/pseudorandom.name](https://github.com/treyhunner/pseudorandom.name))
* :no_entry_sign: `curl -s https://uinames.com/api/?region=france\&amount=25 | jq '.[] | .name +" " + .surname'` — gerar 25 nomes franceses aleatórios
* `curl https://icanhazdadjoke.com` — piadas aleatórias
* `curl givemeguid.com` - GUID
* `nc towel.blinkenlights.nl 666` - desculpas de TI (também funciona com telnet)
* `curl -s 'https://api-inference.huggingface.co/models/distilgpt2' --data-raw '"what is the meaning of life?"' | jq '.[].generated_text'` - gerar texto usando o modelo de IA GPT2 a partir de uma string semente

## Comércio eletrônico

* `ssh stickr.shop` — a rebelde loja de adesivos somente CLI. Compre adesivos via ssh.
* `ssh terminal.shop` — compre café via ssh.

## Entretenimento e jogos

* `ssh -o StrictHostKeyChecking=no watch.ascii.theater` - transmitir filmes baseados em texto gratuitos no seu terminal
* `curl https://asciitv.fr` — assistir Star Wars no terminal via curl ([source](https://github.com/martinraison/ascii-tv))
* `nc towel.blinkenlights.nl 23` — assistir Star Wars no terminal via netcat (também funciona com telnet)
* `ssh movie.gabe565.com` - assistir Star Wars com controles de reprodução no terminal via ssh
* `ssh chat.shazow.net` — conversar via SSH ([shazow/ssh-chat](https://github.com/shazow/ssh-chat))
* `ssh chat@ascii.town` — cliente de chat SSH ([source](https://git.causal.agency/catgirl))
* `curl parrot.live` — exibir um papagaio de festa animado ([hugomd/parrot.live](https://github.com/hugomd/parrot.live))
* `curl byemck.atulr.com` — exibir mensagem de despedida animada para colegas ([master-atul/byemck](https://github.com/master-atul/byemck))
* `nc rya.nc 1987` — ser Rick Rolled (também funciona com telnet)
* `curl node-web-console.glitch.me` — assistir a uma corrida de emojis ([source](https://glitch.com/edit/#!/node-web-console))
* `curl ascii.live/forrest` - corra, Forrest, corra!
* `curl ascii.live/nyan` - assistir Nyan Cat
* `curl https://poptart.spinda.net` — Nyan Cat colorido em tela cheia
* `gopher://fld.gp:70` - recursos gopher / notícias / clima / entretenimento
* `gopher://mozz.us:70` - jogos, receitas de drinks e outros
* `gopher://port70.net/1board/b` - 4chan
* :no_entry_sign: `ssh torus@ascii.town` - projeto colaborativo de arte ASCII ([source](https://git.causal.agency/torus))
* `telnet 1984.ws 23` — BBS (lista de BBS [aqui](https://www.telnetbbsguide.com/bbs/))
* `ssh vtm@netxs.online` - demonstrar o ambiente de desktop baseado em texto "Monotty" ([source](https://github.com/netxs-group/VTM))
* `curl gif.xyzzy.run` — pesquisar e exibir gifs no seu terminal
* `curl -sL https://raw.githubusercontent.com/gsobell/duckpond/home/duckpond.sh | bash` - ver um pato nadar pelo seu terminal
* `cat mario.nes | nc play-nes.org 4444` - emular roms via netcat (requer fornecer um arquivo rom local) ([source](https://github.com/henrikpersson/potatis))
* `finger @happynetbox.com` - participar de uma experiência social experimental na internet

Jogos baseados em Telnet/SSH:

* `ssh sshtron.zachlatta.com` ~> jogo da cobra; jogue com as teclas AWSD
* `ssh netris.rocketnine.space` —  tetris multijogador
* `ssh play@ascii.town` —  2048, cobra e freecell ([source](https://git.causal.agency/play))
* `ssh gameroom@bitreich.org` - 11 jogos de arcade
* `ssh play@anonymine-demo.oskog97.com -p 2222` — adivinhar minesweeper grátis; Senha: play
* `ssh twenex@sdf.org` —  jogar vários jogos incluindo damas
* `ssh intricacy@sshgames.thegonz.net` - quebra-cabeça competitivo; senha: intricacy
* `ssh simulchess@sshgames.thegonz.net` - xadrez multijogador; senha: simulchess
* `ssh pacman:pacman@antimirov.net` - Pacman; senha: pacman
* `ssh lagrogue@sshgames.thegonz.net` - Roguelike; senha: lag
* `ssh ckhet@sshgames.thegonz.net` - Khet; senha: ckhet
* `ssh slashem@slashem.me` - nethack e outros
* `ssh rodney@rlgallery.org` - rogue; senha: yendor
* `ssh pong.brk.st` - pong para um jogador
* `ssh tty.sdf.org` - requer [criar uma conta](https://sdf.org) primeiro
* `ssh -p 8080 -l magnetic magneticscrolls.net` - jogos de aventura textual de ficção interativa desenvolvidos pela Magnetic Scrolls
* `nc aardmud.org 23` — MUD (lista de MUDs [aqui](http://www.mudconnect.com/cgi-bin/search.cgi?mode=tmc_biglist), também funciona com telnet)
* `nc freechess.org 23` — jogo de xadrez (também funciona com telnet)
* `nc igs.joyjoy.net 6969` - jogar/assistir o jogo de Go (também funciona com telnet)
* `nc fibs.com 4321` - gamão multijogador (também funciona com telnet)
* `telnet dungeon.name 20028` - aventura de caverna infinita
* `telnet milek7.gq` — jogos: Pong, Break out, Tetris
* `telnet mtrek.com 1701` — Star Trek
* `telnet decwars.com 1701` — Star Trek multijogador
* `telnet telehack.com`
* `telnet multizork.icculus.org` — Zork multijogador


## Scripts

Scripts úteis que podem ser executados com apenas uma linha de código, mas nos quais ainda é necessária execução local.

* `curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -`
* `curl -sL https://raw.githubusercontent.com/dylanaraps/neofetch/master/neofetch | bash`
* `curl -sL https://raw.githubusercontent.com/keroserene/rickrollrc/master/roll.sh | bash`

## Clientes

Pelo menos um desses clientes, que você precisa para acessar esses serviços, está instalado em quase todo sistema UNIX/Linux.

* [aria2](https://aria2.github.io/)
* [bitsadmin](https://docs.microsoft.com/windows/win32/bits/)
* [curl](https://curl.haxx.se/)
* [httpie](https://httpie.org/)
* [httrack](https://www.httrack.com/)
* [powershell](https://microsoft.com/powershell/)
* [rclone](https://rclone.org/)
* [wget](https://www.gnu.org/software/wget/)
* [wget2](https://gitlab.com/gnuwget/wget2)
