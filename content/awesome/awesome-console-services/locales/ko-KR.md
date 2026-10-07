# 콘솔 서비스

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

HTTP, HTTPS 및 기타 네트워크 프로토콜로 접근할 수 있는 훌륭한 콘솔 서비스 모음입니다.
목록의 구조화된 데이터(동기화 유지)는 [structured.yaml](structured.yaml)에 있습니다.

  - [IP 주소](#IP-Address "IP 주소")
  - [지리 위치](#Geolocation "지리 위치")
  - [텍스트 공유](#Text-Sharing "텍스트 공유")
  - [URL 단축기](#URL-Shortener "URL 단축기")
  - [파일 전송](#File-Transfer "파일 전송")
  - [브라우저](#Browser "브라우저")
  - [도구](#Tools "도구")
  - [모니터링](#Monitoring "모니터링")
  - [날씨](#Weather "날씨")
  - [뉴스](#News "뉴스")
  - [정보 게시판](#Information-boards "정보 게시판")
  - [지도](#Map "지도")
  - [화폐](#Money "환율 및 금융 정보")
  - [문서](#Documentation "매뉴얼, 치트시트, FAQ")
  - [사전 및 번역기](#Dictionaries-and-translators "사전 및 번역기")
  - [생성기](#Generators "메시지/텍스트/농담/명언/이름 생성기")
  - [엔터테인먼트 및 게임](#Entertainment-and-games "채팅, 게임, 즐거움")
  - [스크립트](#Scripts "스크립트")
  - [클라이언트](#Clients "클라이언트")

## IP 주소

### 인라인

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

### 새 줄

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
* `curl 'api.hackertarget.com/zonetransfer/?q=zonetransfer.me'` - DNS 영역 전송

### JSON 전용

* `curl httpbin.org/ip`
* `curl wtfismyip.com/json`
* `curl -L iphorse.com/json`
* `curl geoplugin.net/json.gp`
* `curl https://ipapi.co/json`
* `curl -L jsonip.com`
* `curl gd.geobytes.com/GetCityDetails`
* `curl ip.jsontest.com`

## 지리 위치

* `curl api.ip2location.io` or `curl api.ip2location.io?ip=8.8.8.8`
* `curl ipinfo.io/8.8.8.8` or `curl ipinfo.io/8.8.8.8/loc`
* `curl ip-api.com` or `curl ip-api.com/8.8.8.8`
* `curl ifconfig.co/country` or `curl ifconfig.co/city` or `curl ifconfig.co/country-iso` or `http ifconfig.co/json`
* `curl ifconfig.es/geo` or `curl ifconfig.es/json` or `curl ifconfig.es/country` or `curl ifconfig.es/code` or `curl ifconfig.es/city` or `curl ifconfig.es/latitude` or `curl ifconfig.es/longitude`

## 텍스트 공유

* :no_entry_sign: `echo "Hello world!" | curl -F 'f:1=<-' ix.io`
* `echo "Hello world!" | curl -F file=@- 0x0.st`
* `echo "Hello world!" | curl -F 'clbin=<-' https://clbin.com`
* `echo "Hello world!" | nc termbin.com 9999`
* `echo "Hello world!" | curl -F 'sprunge=<-' sprunge.us`
* `echo "Hello world!" | curl -H "content-type: text/plain" -d @- https://textdb.dev/api/data/unique-id-for-my-text`
* `curl https://patchbay.pub/your-custom-path -d "Hello world!"` and `curl -s https://patchbay.pub/your-custom-path`

## URL 단축기

* `curl -s tinyurl.com/api-create.php?url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://ttm.sh`
* `curl https://is.gd/create.php?format=simple&url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://0x0.st`
* `curl -F url=<link> https://shorta.link`

## 파일 전송

* `curl --upload-file <file> transfer.sh/<filename>`
* `curl -F file=@<file> https://ttm.sh`
* `curl https://patchbay.pub/your-custom-filepath.exe --data-binary @<file>` and `curl -LO https://patchbay.pub/your-custom-filepath.exe`
* `nc oshi.at 7777 < <file>` or `curl https://oshi.at -F f=@<file>`
* `curl -F file=@<file> https://0x0.st`
* `curl -F file=@<file> https://api.anonfile.com/upload`
* `curl -T <file> https://pixeldrain.com/api/file/`

## 브라우저

*  :no_entry_sign: `ssh brow.sh`

## 도구

* `curl qrenco.de/STRING` or `echo STRING | curl -F-=\<- qrenco.de` — 문자열의 QR 코드 생성 ([chubin/qrenco.de](https://github.com/chubin/qrenco.de))
* `curl "http://c.docverter.com/convert" -F from=html -F to=pdf -F "input_files[]=@your-file-name.html" -o "output-file-name.pdf"` - 문서 변환 ([source](https://github.com/docverter/docverter))
* `curl -s "https://decapi.me/youtube/latest_video?user=NPR"` - 지정한 YouTube 채널의 최신 업로드 제목/URL
* `curl -s "https://decapi.me/twitter/latest?name=NPR"` - 지정한 계정의 최신 트윗
* `curl -s "https://decapi.me/twitch/uptime?channel=IGN"` - 지정한 Twitch 채널이 온라인인지 확인
* `curl -s "https://httpbin.org/delay/4"` - HTTP 요청 및 응답 서비스(예: 4초 후 응답 전송)
* `curl -s "https://urlecho.appspot.com/echo?body=Hello+World"` - 요청 매개변수에 정의된 HTTP 응답
* `curl -s "https://urlreq.appspot.com/req?method=GET&url=https://l2.io/ip"` - 입력 매개변수에 따라 새 요청을 수행하는 HTTP 프록시
* `curl -s "https://api.hackertarget.com/nmap/?q=93.184.216.34"` - NMAP을 사용한 TCP 포트 스캔
* `curl -s "https://api.hackertarget.com/pagelinks/?q=msn.com"` - 페이지의 모든 링크 추출
* `curl -s "https://api.hackertarget.com/whois/?q=google.com"` - Whois 조회
* `curl -s "https://jsonplaceholder.typicode.com/users"` - 가짜 API 데이터를 가져오는 유용한 도구
* `ssh unix50@unix50.org - password is unix50` - 역사적인 UNIX 시스템의 인스턴스 생성 및 사용
* `ssh new@sdf.org` - SDF Public Access UNIX System에서 사용할 무료 UNIX 셸 계정 생성
* `dig help @dns.toys` - [dns.toys](https://www.dns.toys/)가 제공하는 수많은 사용 가능한 서비스 나열

## 암호학

* `curl https://ja3er.com/search/535886c8d0a1b14f02298967bb990171` - SSL 지문 검색

## 모니터링

* `curl ping.gl`
* `curl https://status.plaintext.sh/t` - 일반적인 서비스의 상태 페이지 확인

## 날씨

* `curl wttr.in` or `curl wttr.in/Berlin` — 날씨를 확인하는 올바른 방법
* `finger oslo@graph.no`
* `nc rainmaker.wunderground.com 3000` (also works with telnet)
* `curl https://tgftp.nws.noaa.gov/data/observations/metar/stations/KAAO.TXT` - 지정한 ICAO의 METAR

## 뉴스

* `curl getnews.tech/world+cup` — 최신 뉴스 가져오기
* `curl hkkr.in` - [Hacker News 피드](github.com/NalinPlad/hkkr.in)
* `curl rate.sx` - (암호)화폐 환율 탐색
* `gopher://gopher.leveck.us:70` - 뉴스 aggregator
* `gopher://gopherddit.com:70`  - reddit
* `ssh teletekst.nl` - 터미널에서 네덜란드 공영 방송 재단(NOS)의 텔레텍스트 보기
* `ssh redditbox.us` — 터미널에서 reddit 보기(ssh + 텍스트 브라우저)
* `gopher://hngopher.com:70` - hacker news

* :no_entry_sign: `curl wrk.ist` — IT 시장의 최신 원격 채용/단기 일자리 가져오기

## 정보 게시판

* :no_entry_sign: `curl http://frcl.de/gulasch` — Gulaschprogrammiernacht 2019 Fahrplan
* `gopher://gopherpedia.com:70` - 위키백과

### COVID-19

* `curl https://corona-stats.online`
* `curl -L covid19.trackercli.com`
* `curl snf-878293.vm.okeanos.grnet.gr` - 국가의 Covid-19 통계

## 지도

* `telnet mapscii.me` — 확대 가능한 세계 지도 표시

## 화폐

* `curl rate.sx` — 암호화폐 환율 가져오기
* `curl crrcy.sh` - 법정 화폐 및 암호화폐 환율과 과거 데이터 가져오기
* :no_entry_sign: `curl moneroj.org` — Monero 환율 가져오기
* :no_entry_sign: `curl cmc.rjldev.com` — coinmarketcap 상위 100 암호화폐 가져오기
* `nc ticker.bitcointicker.co 10080` — BTC/USD 환율 가져오기(telnet에서도 동작)
* `curl https://stonks.icu/amd/msft` 주식 시각화 도구 및 추적기 가져오기
* `curl terminal-stocks.shashi.dev/:ticker` - 제공한 yahoo 티커의 주가 및 정보 가져오기
* `ssh cointop.sh` - 암호화폐 추적 TUI ([source](https://github.com/miguelmota/cointop))

## 문서

* `curl cheat.sh` — curl로 UNIX/Linux 명령 치트시트 가져오기 ([chubin/cheat.sh](https://github.com/chubin/cheat.sh))
* `curl 'https://api.hackertarget.com/subnetcalc/?q=192.168.1.0/24'` 서브넷 계산기
* `gopher://telcodata.us:70` - NPA/NXX 조회
* `gopher://gopher.floodgap.com/1/world` - 알려진 모든 gopher 서버

## 사전 및 번역기

* `curl 'dict.org/d:command line'`

## 생성기

* `git commit -m "$(curl -sk whatthecommit.com/index.txt)"` —  무작위 커밋 메시지 생성
* curl `"https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"` - 무작위 숫자 생성
* `curl -H 'Accept: text/plain' https://foaas.com/cool/:from` — 서비스로서의 "꺼져라"
* `curl pseudorandom.name` — 의사 무작위(미국식?) 이름 생성 ([treyhunner/pseudorandom.name](https://github.com/treyhunner/pseudorandom.name))
* :no_entry_sign: `curl -s https://uinames.com/api/?region=france\&amount=25 | jq '.[] | .name +" " + .surname'` — 무작위 프랑스 이름 25개 생성
* `curl https://icanhazdadjoke.com` — 무작위 농담
* `curl givemeguid.com` - GUID
* `nc towel.blinkenlights.nl 666` - IT 변명(telnet에서도 동작)
* `curl -s 'https://api-inference.huggingface.co/models/distilgpt2' --data-raw '"what is the meaning of life?"' | jq '.[].generated_text'` - 시드 문자열로 GPT2 AI 모델을 사용해 텍스트 생성

## 전자 상거래

* `ssh stickr.shop` — 반항적인, CLI 전용 스티커 샵. ssh로 스티커 구매.
* `ssh terminal.shop` — ssh로 커피 구매.

## 엔터테인먼트 및 게임

* `ssh -o StrictHostKeyChecking=no watch.ascii.theater` - 터미널에서 무료 텍스트 영화 스트리밍
* `curl https://asciitv.fr` — curl로 터미널에서 Star Wars 시청 ([source](https://github.com/martinraison/ascii-tv))
* `nc towel.blinkenlights.nl 23` — netcat으로 터미널에서 Star Wars 시청(telnet에서도 동작)
* `ssh movie.gabe565.com` - ssh로 재생 제어 기능과 함께 터미널에서 Star Wars 시청
* `ssh chat.shazow.net` — SSH를 통한 채팅 ([shazow/ssh-chat](https://github.com/shazow/ssh-chat))
* `ssh chat@ascii.town` — SSH 채팅 클라이언트 ([source](https://git.causal.agency/catgirl))
* `curl parrot.live` — 애니메이션 파티 앵무새 표시 ([hugomd/parrot.live](https://github.com/hugomd/parrot.live))
* `curl byemck.atulr.com` — 동료를 위한 애니메이션 작별 메시지 표시 ([master-atul/byemck](https://github.com/master-atul/byemck))
* `nc rya.nc 1987` — Rick Rolled 당하기(telnet에서도 동작)
* `curl node-web-console.glitch.me` — 이모지 경주 시청 ([source](https://glitch.com/edit/#!/node-web-console))
* `curl ascii.live/forrest` - 달려라, 포레스트, 달려!
* `curl ascii.live/nyan` - Nyan Cat 시청
* `curl https://poptart.spinda.net` — 전체 화면 컬러 Nyan Cat
* `gopher://fld.gp:70` - gopher 리소스 / 뉴스 / 날씨 / 엔터테인먼트
* `gopher://mozz.us:70` - 게임, 음료 레시피 등
* `gopher://port70.net/1board/b` - 4chan
* :no_entry_sign: `ssh torus@ascii.town` - 협업 ASCII 아트 프로젝트 ([source](https://git.causal.agency/torus))
* `telnet 1984.ws 23` — BBS(BBS 목록 [여기](https://www.telnetbbsguide.com/bbs/))
* `ssh vtm@netxs.online` - 텍스트 기반 데스크톱 환경 "Monotty" 데모 ([source](https://github.com/netxs-group/VTM))
* `curl gif.xyzzy.run` — 터미널에서 GIF 검색 및 표시
* `curl -sL https://raw.githubusercontent.com/gsobell/duckpond/home/duckpond.sh | bash` - 터미널을 지나가는 오리 보기
* `cat mario.nes | nc play-nes.org 4444` - netcat으로 ROM 에뮬레이션(로컬 ROM 파일 제공 필요) ([source](https://github.com/henrikpersson/potatis))
* `finger @happynetbox.com` - 실험적인 인터넷 소셜 경험에 참여

Telnet/SSH 기반 게임:

* `ssh sshtron.zachlatta.com` ~> 뱀 게임; AWSD 키로 플레이
* `ssh netris.rocketnine.space` —  멀티플레이어 테트리스
* `ssh play@ascii.town` —  2048, 뱀, freecell ([source](https://git.causal.agency/play))
* `ssh gameroom@bitreich.org` - 11개의 아케이드 게임
* `ssh play@anonymine-demo.oskog97.com -p 2222` — 무료 지뢰찾기 맞추기; 비밀번호: play
* `ssh twenex@sdf.org` —  체커를 포함한 다양한 게임 플레이
* `ssh intricacy@sshgames.thegonz.net` - 경쟁 퍼즐; 비밀번호: intricacy
* `ssh simulchess@sshgames.thegonz.net` - 멀티플레이어 체스; 비밀번호: simulchess
* `ssh pacman:pacman@antimirov.net` - 팩맨; 비밀번호: pacman
* `ssh lagrogue@sshgames.thegonz.net` - Roguelike; 비밀번호: lag
* `ssh ckhet@sshgames.thegonz.net` - Khet; 비밀번호: ckhet
* `ssh slashem@slashem.me` - nethack 등
* `ssh rodney@rlgallery.org` - rogue; 비밀번호: yendor
* `ssh pong.brk.st` - 싱글플레이어 퐁
* `ssh tty.sdf.org` - 먼저 [계정 생성](https://sdf.org) 필요
* `ssh -p 8080 -l magnetic magneticscrolls.net` - Magnetic Scrolls가 개발한 인터랙티브 픽션 텍스트 어드벤처 게임
* `nc aardmud.org 23` — MUD(MUD 목록 [여기](http://www.mudconnect.com/cgi-bin/search.cgi?mode=tmc_biglist), telnet에서도 동작)
* `nc freechess.org 23` — 체스 게임(telnet에서도 동작)
* `nc igs.joyjoy.net 6969` - 바둑 플레이/관전(telnet에서도 동작)
* `nc fibs.com 4321` - 멀티플레이어 백개먼(telnet에서도 동작)
* `telnet dungeon.name 20028` - 무한 동굴 모험
* `telnet milek7.gq` — 게임: 퐁, 브레이크아웃, 테트리스
* `telnet mtrek.com 1701` — Star Trek
* `telnet decwars.com 1701` — 멀티플레이어 Star Trek
* `telnet telehack.com`
* `telnet multizork.icculus.org` — 멀티플레이어 Zork


## 스크립트

한 줄의 코드로 실행할 수 있지만 여전히 로컬 실행이 필요한 유용한 스크립트.

* `curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -`
* `curl -sL https://raw.githubusercontent.com/dylanaraps/neofetch/master/neofetch | bash`
* `curl -sL https://raw.githubusercontent.com/keroserene/rickrollrc/master/roll.sh | bash`

## 클라이언트

이 서비스에 접근하는 데 필요한 클라이언트 중 적어도 하나는 거의 모든 UNIX/Linux 시스템에 설치되어 있습니다.

* [aria2](https://aria2.github.io/)
* [bitsadmin](https://docs.microsoft.com/windows/win32/bits/)
* [curl](https://curl.haxx.se/)
* [httpie](https://httpie.org/)
* [httrack](https://www.httrack.com/)
* [powershell](https://microsoft.com/powershell/)
* [rclone](https://rclone.org/)
* [wget](https://www.gnu.org/software/wget/)
* [wget2](https://gitlab.com/gnuwget/wget2)
