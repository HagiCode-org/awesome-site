# Консольные сервисы

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Подборка отличных консольных сервисов (доступных по HTTP, HTTPS и другим сетевым протоколам).
Структурированные данные списка (синхронизируются) находятся в [structured.yaml](structured.yaml).

  - [IP-адрес](#IP-Address "IP-адрес")
  - [Геолокация](#Geolocation "Геолокация")
  - [Обмен текстом](#Text-Sharing "Обмен текстом")
  - [Сокращатель URL](#URL-Shortener "Сокращатель URL")
  - [Передача файлов](#File-Transfer "Передача файлов")
  - [Браузер](#Browser "Браузер")
  - [Инструменты](#Tools "Инструменты")
  - [Мониторинг](#Monitoring "Мониторинг")
  - [Погода](#Weather "Погода")
  - [Новости](#News "Новости")
  - [Информационные доски](#Information-boards "Информационные доски")
  - [Карта](#Map "Карта")
  - [Деньги](#Money "Курсы валют и финансовая информация")
  - [Документация](#Documentation "Руководства, шпаргалки и FAQ")
  - [Словари и переводчики](#Dictionaries-and-translators "Словари и переводчики")
  - [Генераторы](#Generators "Генераторы сообщений/текстов/шуток/цитат/имён")
  - [Развлечения и игры](#Entertainment-and-games "Чаты, игры и развлечения")
  - [Скрипты](#Scripts "Скрипты")
  - [Клиенты](#Clients "Клиенты")

## IP-адрес

### В одну строку

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

### Новая строка

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
* `curl 'api.hackertarget.com/zonetransfer/?q=zonetransfer.me'` - Трансфер DNS-зоны

### Только JSON

* `curl httpbin.org/ip`
* `curl wtfismyip.com/json`
* `curl -L iphorse.com/json`
* `curl geoplugin.net/json.gp`
* `curl https://ipapi.co/json`
* `curl -L jsonip.com`
* `curl gd.geobytes.com/GetCityDetails`
* `curl ip.jsontest.com`

## Геолокация

* `curl api.ip2location.io` or `curl api.ip2location.io?ip=8.8.8.8`
* `curl ipinfo.io/8.8.8.8` or `curl ipinfo.io/8.8.8.8/loc`
* `curl ip-api.com` or `curl ip-api.com/8.8.8.8`
* `curl ifconfig.co/country` or `curl ifconfig.co/city` or `curl ifconfig.co/country-iso` or `http ifconfig.co/json`
* `curl ifconfig.es/geo` or `curl ifconfig.es/json` or `curl ifconfig.es/country` or `curl ifconfig.es/code` or `curl ifconfig.es/city` or `curl ifconfig.es/latitude` or `curl ifconfig.es/longitude`

## Обмен текстом

* :no_entry_sign: `echo "Hello world!" | curl -F 'f:1=<-' ix.io`
* `echo "Hello world!" | curl -F file=@- 0x0.st`
* `echo "Hello world!" | curl -F 'clbin=<-' https://clbin.com`
* `echo "Hello world!" | nc termbin.com 9999`
* `echo "Hello world!" | curl -F 'sprunge=<-' sprunge.us`
* `echo "Hello world!" | curl -H "content-type: text/plain" -d @- https://textdb.dev/api/data/unique-id-for-my-text`
* `curl https://patchbay.pub/your-custom-path -d "Hello world!"` and `curl -s https://patchbay.pub/your-custom-path`

## Сокращатель URL

* `curl -s tinyurl.com/api-create.php?url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://ttm.sh`
* `curl https://is.gd/create.php?format=simple&url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://0x0.st`
* `curl -F url=<link> https://shorta.link`

## Передача файлов

* `curl --upload-file <file> transfer.sh/<filename>`
* `curl -F file=@<file> https://ttm.sh`
* `curl https://patchbay.pub/your-custom-filepath.exe --data-binary @<file>` and `curl -LO https://patchbay.pub/your-custom-filepath.exe`
* `nc oshi.at 7777 < <file>` or `curl https://oshi.at -F f=@<file>`
* `curl -F file=@<file> https://0x0.st`
* `curl -F file=@<file> https://api.anonfile.com/upload`
* `curl -T <file> https://pixeldrain.com/api/file/`

## Браузер

*  :no_entry_sign: `ssh brow.sh`

## Инструменты

* `curl qrenco.de/STRING` or `echo STRING | curl -F-=\<- qrenco.de` — создать QR-код для строки ([chubin/qrenco.de](https://github.com/chubin/qrenco.de))
* `curl "http://c.docverter.com/convert" -F from=html -F to=pdf -F "input_files[]=@your-file-name.html" -o "output-file-name.pdf"` - конвертировать документ ([source](https://github.com/docverter/docverter))
* `curl -s "https://decapi.me/youtube/latest_video?user=NPR"` - заголовок/URL последней загрузки указанного канала YouTube
* `curl -s "https://decapi.me/twitter/latest?name=NPR"` - последний твит указанного аккаунта
* `curl -s "https://decapi.me/twitch/uptime?channel=IGN"` - проверить, онлайн ли указанный канал Twitch
* `curl -s "https://httpbin.org/delay/4"` - сервис HTTP-запросов и ответов (например, ответ через 4 секунды)
* `curl -s "https://urlecho.appspot.com/echo?body=Hello+World"` - HTTP-ответ, заданный в параметрах запроса
* `curl -s "https://urlreq.appspot.com/req?method=GET&url=https://l2.io/ip"` - HTTP-прокси, выполняющий новые запросы на основе входных параметров
* `curl -s "https://api.hackertarget.com/nmap/?q=93.184.216.34"` - TCP-сканирование портов с помощью NMAP
* `curl -s "https://api.hackertarget.com/pagelinks/?q=msn.com"` - извлечь все ссылки со страницы
* `curl -s "https://api.hackertarget.com/whois/?q=google.com"` - Whois-запрос
* `curl -s "https://jsonplaceholder.typicode.com/users"` - полезный инструмент для получения фейковых API-данных
* `ssh unix50@unix50.org - password is unix50` - создавать и использовать экземпляры исторических систем UNIX
* `ssh new@sdf.org` - создать бесплатный UNIX shell-аккаунт для использования с SDF Public Access UNIX System
* `dig help @dns.toys` - выводит множество доступных сервисов от [dns.toys](https://www.dns.toys/)

## Криптография

* `curl https://ja3er.com/search/535886c8d0a1b14f02298967bb990171` - поиск по SSL-отпечатку

## Мониторинг

* `curl ping.gl`
* `curl https://status.plaintext.sh/t` - проверить страницы статуса распространённых сервисов

## Погода

* `curl wttr.in` or `curl wttr.in/Berlin` — правильный способ узнать погоду
* `finger oslo@graph.no`
* `nc rainmaker.wunderground.com 3000` (also works with telnet)
* `curl https://tgftp.nws.noaa.gov/data/observations/metar/stations/KAAO.TXT` - METAR для указанного ICAO

## Новости

* `curl getnews.tech/world+cup` — получить свежие новости
* `curl hkkr.in` - [Лента Hacker News](github.com/NalinPlad/hkkr.in)
* `curl rate.sx` - для просмотра курсов (крипто)валют
* `gopher://gopher.leveck.us:70` - агрегатор новостей
* `gopher://gopherddit.com:70`  - reddit
* `ssh teletekst.nl` - телетекст нидерландского общественного вещательного фонда (NOS) в терминале
* `ssh redditbox.us` — reddit в терминале (ssh + текстовый браузер)
* `gopher://hngopher.com:70` - hacker news

* :no_entry_sign: `curl wrk.ist` — получить свежие удалённые вакансии/подработки на IT-рынке

## Информационные доски

* :no_entry_sign: `curl http://frcl.de/gulasch` — Gulaschprogrammiernacht 2019 Fahrplan
* `gopher://gopherpedia.com:70` - википедия

### COVID-19

* `curl https://corona-stats.online`
* `curl -L covid19.trackercli.com`
* `curl snf-878293.vm.okeanos.grnet.gr` - статистика Covid-19 для вашей страны

## Карта

* `telnet mapscii.me` — показать масштабируемую карту мира

## Деньги

* `curl rate.sx` — получить курсы криптовалют
* `curl crrcy.sh` - получить курсы и исторические данные фиатных и криптовалют
* :no_entry_sign: `curl moneroj.org` — получить курс Monero
* :no_entry_sign: `curl cmc.rjldev.com` — получить топ-100 криптовалют с coinmarketcap
* `nc ticker.bitcointicker.co 10080` — получить курс BTC/USD (также работает с telnet)
* `curl https://stonks.icu/amd/msft` получить визуализатор и трекер акций
* `curl terminal-stocks.shashi.dev/:ticker` - получить цены и информацию по акциям для указанного тикера yahoo
* `ssh cointop.sh` - отслеживание криптовалют в TUI ([source](https://github.com/miguelmota/cointop))

## Документация

* `curl cheat.sh` — шпаргалки по командам UNIX/Linux через curl ([chubin/cheat.sh](https://github.com/chubin/cheat.sh))
* `curl 'https://api.hackertarget.com/subnetcalc/?q=192.168.1.0/24'` Калькулятор подсетей
* `gopher://telcodata.us:70` - поиск NPA/NXX
* `gopher://gopher.floodgap.com/1/world` - все известные gopher-серверы

## Словари и переводчики

* `curl 'dict.org/d:command line'`

## Генераторы

* `git commit -m "$(curl -sk whatthecommit.com/index.txt)"` —  сгенерировать случайное сообщение коммита
* curl `"https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"` - сгенерировать случайное число
* `curl -H 'Accept: text/plain' https://foaas.com/cool/:from` — «иди к черту» как сервис
* `curl pseudorandom.name` — сгенерировать псевдослучайное (американское?) имя ([treyhunner/pseudorandom.name](https://github.com/treyhunner/pseudorandom.name))
* :no_entry_sign: `curl -s https://uinames.com/api/?region=france\&amount=25 | jq '.[] | .name +" " + .surname'` — сгенерировать 25 случайных французских имён
* `curl https://icanhazdadjoke.com` — случайные шутки
* `curl givemeguid.com` - GUID
* `nc towel.blinkenlights.nl 666` - отговорки IT (также работает с telnet)
* `curl -s 'https://api-inference.huggingface.co/models/distilgpt2' --data-raw '"what is the meaning of life?"' | jq '.[].generated_text'` - генерировать текст с помощью модели ИИ GPT2 из начальной строки

## Электронная коммерция

* `ssh stickr.shop` — бунтарский стикер-магазин только для CLI. Покупайте стикеры по ssh.
* `ssh terminal.shop` — покупайте кофе по ssh.

## Развлечения и игры

* `ssh -o StrictHostKeyChecking=no watch.ascii.theater` - стримить бесплатные текстовые фильмы в вашем терминале
* `curl https://asciitv.fr` — смотреть Звёздные войны в терминале через curl ([source](https://github.com/martinraison/ascii-tv))
* `nc towel.blinkenlights.nl 23` — смотреть Звёздные войны в терминале через netcat (также работает с telnet)
* `ssh movie.gabe565.com` - смотреть Звёздные войны с управлением воспроизведением в терминале через ssh
* `ssh chat.shazow.net` — общение через SSH ([shazow/ssh-chat](https://github.com/shazow/ssh-chat))
* `ssh chat@ascii.town` — SSH-клиент чата ([source](https://git.causal.agency/catgirl))
* `curl parrot.live` — показать анимированного праздничного попугая ([hugomd/parrot.live](https://github.com/hugomd/parrot.live))
* `curl byemck.atulr.com` — показать анимированное прощальное сообщение для коллег ([master-atul/byemck](https://github.com/master-atul/byemck))
* `nc rya.nc 1987` — попасть на Rick Roll (также работает с telnet)
* `curl node-web-console.glitch.me` — смотреть гонку эмодзи ([source](https://glitch.com/edit/#!/node-web-console))
* `curl ascii.live/forrest` - беги, Форрест, беги!
* `curl ascii.live/nyan` - смотреть Nyan Cat
* `curl https://poptart.spinda.net` — Nyan Cat в полноэкранном цвете
* `gopher://fld.gp:70` - ресурсы gopher / новости / погода / развлечения
* `gopher://mozz.us:70` - игры, рецепты напитков и прочее
* `gopher://port70.net/1board/b` - 4chan
* :no_entry_sign: `ssh torus@ascii.town` - совместный проект ASCII-искусства ([source](https://git.causal.agency/torus))
* `telnet 1984.ws 23` — BBS (список BBS [здесь](https://www.telnetbbsguide.com/bbs/))
* `ssh vtm@netxs.online` - демонстрация текстовой среды рабочего стола «Monotty» ([source](https://github.com/netxs-group/VTM))
* `curl gif.xyzzy.run` — искать и показывать gif в вашем терминале
* `curl -sL https://raw.githubusercontent.com/gsobell/duckpond/home/duckpond.sh | bash` - смотреть, как утка плывёт по вашему терминалу
* `cat mario.nes | nc play-nes.org 4444` - эмулировать ROM через netcat (требуется локальный ROM-файл) ([source](https://github.com/henrikpersson/potatis))
* `finger @happynetbox.com` - принять участие в экспериментальном интернет-социальном опыте

Игры на базе Telnet/SSH:

* `ssh sshtron.zachlatta.com` ~> игра «змейка»; управляйте клавишами AWSD
* `ssh netris.rocketnine.space` —  многопользовательский тетрис
* `ssh play@ascii.town` —  2048, змейка и freecell ([source](https://git.causal.agency/play))
* `ssh gameroom@bitreich.org` - 11 аркадных игр
* `ssh play@anonymine-demo.oskog97.com -p 2222` — угадать бесплатный сапёр; Пароль: play
* `ssh twenex@sdf.org` —  играть в разные игры, включая шашки
* `ssh intricacy@sshgames.thegonz.net` - соревновательная головоломка; пароль: intricacy
* `ssh simulchess@sshgames.thegonz.net` - шахматы для нескольких игроков; пароль: simulchess
* `ssh pacman:pacman@antimirov.net` - Pacman; пароль: pacman
* `ssh lagrogue@sshgames.thegonz.net` - Roguelike; пароль: lag
* `ssh ckhet@sshgames.thegonz.net` - Khet; пароль: ckhet
* `ssh slashem@slashem.me` - nethack и другие
* `ssh rodney@rlgallery.org` - rogue; пароль: yendor
* `ssh pong.brk.st` - одиночный понг
* `ssh tty.sdf.org` - требуется [создать аккаунт](https://sdf.org) заранее
* `ssh -p 8080 -l magnetic magneticscrolls.net` - интерактивные текстовые приключения в жанре интерактивной литературы от Magnetic Scrolls
* `nc aardmud.org 23` — MUD (список MUD [здесь](http://www.mudconnect.com/cgi-bin/search.cgi?mode=tmc_biglist), также работает с telnet)
* `nc freechess.org 23` — шахматная игра (также работает с telnet)
* `nc igs.joyjoy.net 6969` - играть/смотреть игру го (также работает с telnet)
* `nc fibs.com 4321` - многопользовательские нарды (также работает с telnet)
* `telnet dungeon.name 20028` - бесконечное пещерное приключение
* `telnet milek7.gq` — игры: Pong, Break out, Tetris
* `telnet mtrek.com 1701` — Star Trek
* `telnet decwars.com 1701` — Star Trek для нескольких игроков
* `telnet telehack.com`
* `telnet multizork.icculus.org` — многопользовательский Zork


## Скрипты

Полезные скрипты, которые можно запустить одной строкой кода, но для которых всё ещё требуется локальное выполнение.

* `curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -`
* `curl -sL https://raw.githubusercontent.com/dylanaraps/neofetch/master/neofetch | bash`
* `curl -sL https://raw.githubusercontent.com/keroserene/rickrollrc/master/roll.sh | bash`

## Клиенты

По крайней мере один из этих клиентов, необходимых для доступа к сервисам, установлен почти на каждой системе UNIX/Linux.

* [aria2](https://aria2.github.io/)
* [bitsadmin](https://docs.microsoft.com/windows/win32/bits/)
* [curl](https://curl.haxx.se/)
* [httpie](https://httpie.org/)
* [httrack](https://www.httrack.com/)
* [powershell](https://microsoft.com/powershell/)
* [rclone](https://rclone.org/)
* [wget](https://www.gnu.org/software/wget/)
* [wget2](https://gitlab.com/gnuwget/wget2)
