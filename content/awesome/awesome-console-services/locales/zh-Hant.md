# 控制台服務

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

這是一份精選的 console 服務列表（可透過 HTTP、HTTPS 及其他網路協定存取）。
清單的結構化資料（保持同步）位於 [structured.yaml](structured.yaml)。

  - [IP 位址](#IP-Address "IP 位址")
  - [地理位置](#Geolocation "地理位置")
  - [文字分享](#Text-Sharing "文字分享")
  - [URL 縮短器](#URL-Shortener "URL 縮短器")
  - [檔案傳輸](#File-Transfer "檔案傳輸")
  - [瀏覽器](#Browser "瀏覽器")
  - [工具](#Tools "工具")
  - [監控](#Monitoring "監控")
  - [天氣](#Weather "天氣")
  - [新聞](#News "新聞")
  - [資訊看板](#Information-boards "資訊看板")
  - [地圖](#Map "地圖")
  - [貨幣](#Money "匯率與金融資訊")
  - [文件](#Documentation "手冊、速查表與常見問題")
  - [字典與翻譯](#Dictionaries-and-translators "字典與翻譯")
  - [產生器](#Generators "訊息/文字/笑話/姓名產生器")
  - [娛樂與遊戲](#Entertainment-and-games "聊天、遊戲與趣味")
  - [腳本](#Scripts "腳本")
  - [客戶端](#Clients "客戶端")

## IP 位址

### 單行

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

### 新行

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
* `curl 'api.hackertarget.com/zonetransfer/?q=zonetransfer.me'` - DNS 區域傳送

### 僅 JSON

* `curl httpbin.org/ip`
* `curl wtfismyip.com/json`
* `curl -L iphorse.com/json`
* `curl geoplugin.net/json.gp`
* `curl https://ipapi.co/json`
* `curl -L jsonip.com`
* `curl gd.geobytes.com/GetCityDetails`
* `curl ip.jsontest.com`

## 地理位置

* `curl api.ip2location.io` or `curl api.ip2location.io?ip=8.8.8.8`
* `curl ipinfo.io/8.8.8.8` or `curl ipinfo.io/8.8.8.8/loc`
* `curl ip-api.com` or `curl ip-api.com/8.8.8.8`
* `curl ifconfig.co/country` or `curl ifconfig.co/city` or `curl ifconfig.co/country-iso` or `http ifconfig.co/json`
* `curl ifconfig.es/geo` or `curl ifconfig.es/json` or `curl ifconfig.es/country` or `curl ifconfig.es/code` or `curl ifconfig.es/city` or `curl ifconfig.es/latitude` or `curl ifconfig.es/longitude`

## 文字分享

* :no_entry_sign: `echo "Hello world!" | curl -F 'f:1=<-' ix.io`
* `echo "Hello world!" | curl -F file=@- 0x0.st`
* `echo "Hello world!" | curl -F 'clbin=<-' https://clbin.com`
* `echo "Hello world!" | nc termbin.com 9999`
* `echo "Hello world!" | curl -F 'sprunge=<-' sprunge.us`
* `echo "Hello world!" | curl -H "content-type: text/plain" -d @- https://textdb.dev/api/data/unique-id-for-my-text`
* `curl https://patchbay.pub/your-custom-path -d "Hello world!"` and `curl -s https://patchbay.pub/your-custom-path`

## URL 縮短器

* `curl -s tinyurl.com/api-create.php?url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://ttm.sh`
* `curl https://is.gd/create.php?format=simple&url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://0x0.st`
* `curl -F url=<link> https://shorta.link`

## 檔案傳輸

* `curl --upload-file <file> transfer.sh/<filename>`
* `curl -F file=@<file> https://ttm.sh`
* `curl https://patchbay.pub/your-custom-filepath.exe --data-binary @<file>` and `curl -LO https://patchbay.pub/your-custom-filepath.exe`
* `nc oshi.at 7777 < <file>` or `curl https://oshi.at -F f=@<file>`
* `curl -F file=@<file> https://0x0.st`
* `curl -F file=@<file> https://api.anonfile.com/upload`
* `curl -T <file> https://pixeldrain.com/api/file/`

## 瀏覽器

*  :no_entry_sign: `ssh brow.sh`

## 工具

* `curl qrenco.de/STRING` or `echo STRING | curl -F-=\<- qrenco.de` — 為字串產生 QR code ([chubin/qrenco.de](https://github.com/chubin/qrenco.de))
* `curl "http://c.docverter.com/convert" -F from=html -F to=pdf -F "input_files[]=@your-file-name.html" -o "output-file-name.pdf"` - 轉換文件 ([source](https://github.com/docverter/docverter))
* `curl -s "https://decapi.me/youtube/latest_video?user=NPR"` - 指定 YouTube 頻道最新上傳的標題/URL
* `curl -s "https://decapi.me/twitter/latest?name=NPR"` - 指定帳號的最新推文
* `curl -s "https://decapi.me/twitch/uptime?channel=IGN"` - 檢查指定 Twitch 頻道是否上線
* `curl -s "https://httpbin.org/delay/4"` - HTTP 請求與回應服務（例如 4 秒後回傳回應）
* `curl -s "https://urlecho.appspot.com/echo?body=Hello+World"` - 在請求參數中定義的 HTTP 回應
* `curl -s "https://urlreq.appspot.com/req?method=GET&url=https://l2.io/ip"` - HTTP 代理根據輸入參數發起新請求
* `curl -s "https://api.hackertarget.com/nmap/?q=93.184.216.34"` - 使用 NMAP 進行 TCP 連接埠掃描
* `curl -s "https://api.hackertarget.com/pagelinks/?q=msn.com"` - 擷取頁面中的所有連結
* `curl -s "https://api.hackertarget.com/whois/?q=google.com"` - Whois 查詢
* `curl -s "https://jsonplaceholder.typicode.com/users"` - 用於取得假 API 資料的實用工具
* `ssh unix50@unix50.org - password is unix50` - 建立並使用歷史 UNIX 系統的實例
* `ssh new@sdf.org` - 建立免費的 UNIX shell 帳號，用於 SDF 公共存取 UNIX 系統
* `dig help @dns.toys` - 列出 dns.toys 提供的眾多可用服務 ([dns.toys](https://www.dns.toys/))

## 密碼學

* `curl https://ja3er.com/search/535886c8d0a1b14f02298967bb990171` - SSL 指紋搜尋

## 監控

* `curl ping.gl`
* `curl https://status.plaintext.sh/t` - 檢查常見服務的狀態頁

## 天氣

* `curl wttr.in` or `curl wttr.in/Berlin` — 查看天氣的正確方式
* `finger oslo@graph.no`
* `nc rainmaker.wunderground.com 3000` (also works with telnet)
* `curl https://tgftp.nws.noaa.gov/data/observations/metar/stations/KAAO.TXT` - 指定 ICAO 的 METAR 氣象報告

## 新聞

* `curl getnews.tech/world+cup` — 取得最新新聞
* `curl hkkr.in` - [Hacker News 推送](github.com/NalinPlad/hkkr.in)
* `curl rate.sx` - 用於查看（加密）貨幣匯率
* `gopher://gopher.leveck.us:70` - 新聞聚合器
* `gopher://gopherddit.com:70`  - reddit
* `ssh teletekst.nl` - 在終端機檢視荷蘭公共廣播基金會 (NOS) 的圖文電視
* `ssh redditbox.us` — 在終端機中瀏覽 reddit（ssh + 文字瀏覽器）
* `gopher://hngopher.com:70` - hacker news

* :no_entry_sign: `curl wrk.ist` — 取得 IT 市場最新的遠端工作/兼職

## 資訊看板

* :no_entry_sign: `curl http://frcl.de/gulasch` — Gulaschprogrammiernacht 2019 Fahrplan
* `gopher://gopherpedia.com:70` - 維基百科

### COVID-19

* `curl https://corona-stats.online`
* `curl -L covid19.trackercli.com`
* `curl snf-878293.vm.okeanos.grnet.gr` - 您所在國家/地區的 Covid-19 統計資料

## 地圖

* `telnet mapscii.me` — 顯示可縮放的世界地圖

## 貨幣

* `curl rate.sx` — 取得加密貨幣匯率
* `curl crrcy.sh` - 取得法幣與加密貨幣匯率及歷史資料
* :no_entry_sign: `curl moneroj.org` — 取得 Monero 匯率
* :no_entry_sign: `curl cmc.rjldev.com` — 取得 CoinMarketCap 前 100 名加密貨幣
* `nc ticker.bitcointicker.co 10080` — 取得 BTC/USD 匯率（亦支援 telnet）
* `curl https://stonks.icu/amd/msft` 取得股票視覺化工具與追蹤器
* `curl terminal-stocks.shashi.dev/:ticker` - 取得所提供雅虎代碼對應的股價與資訊
* `ssh cointop.sh` - 加密貨幣追蹤 TUI ([source](https://github.com/miguelmota/cointop))

## 文件

* `curl cheat.sh` — 使用 curl 取得 UNIX/Linux 指令速查表 ([chubin/cheat.sh](https://github.com/chubin/cheat.sh))
* `curl 'https://api.hackertarget.com/subnetcalc/?q=192.168.1.0/24'` 子網路計算器
* `gopher://telcodata.us:70` - NPA/NXX 查詢
* `gopher://gopher.floodgap.com/1/world` - 所有已知的 gopher 伺服器

## 字典與翻譯

* `curl 'dict.org/d:command line'`

## 產生器

* `git commit -m "$(curl -sk whatthecommit.com/index.txt)"` —  產生隨機提交訊息
* curl `"https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"` - 產生隨機數字
* `curl -H 'Accept: text/plain' https://foaas.com/cool/:from` — 以服務形式送客（FOAAS）
* `curl pseudorandom.name` — 產生偽隨機（美式？）姓名 ([treyhunner/pseudorandom.name](https://github.com/treyhunner/pseudorandom.name))
* :no_entry_sign: `curl -s https://uinames.com/api/?region=france\&amount=25 | jq '.[] | .name +" " + .surname'` — 產生 25 個隨機法文姓名
* `curl https://icanhazdadjoke.com` — 隨機笑話
* `curl givemeguid.com` - GUID
* `nc towel.blinkenlights.nl 666` - IT 藉口（亦支援 telnet）
* `curl -s 'https://api-inference.huggingface.co/models/distilgpt2' --data-raw '"what is the meaning of life?"' | jq '.[].generated_text'` - 根據種子字串使用 GPT2 AI 模型產生文字

## 電子商務

* `ssh stickr.shop` — 特立獨行的純 CLI 貼紙商店。透過 ssh 購買貼紙。
* `ssh terminal.shop` — 透過 ssh 購買咖啡。

## 娛樂與遊戲

* `ssh -o StrictHostKeyChecking=no watch.ascii.theater` - 在終端機中播放免費的文字電影
* `curl https://asciitv.fr` — 透過 curl 在終端機觀看《星際大戰》 ([source](https://github.com/martinraison/ascii-tv))
* `nc towel.blinkenlights.nl 23` — 透過 netcat 在終端機觀看《星際大戰》（亦支援 telnet）
* `ssh movie.gabe565.com` - 透過 ssh 在終端機觀看帶播放控制的《星際大戰》
* `ssh chat.shazow.net` — 透過 SSH 聊天 ([shazow/ssh-chat](https://github.com/shazow/ssh-chat))
* `ssh chat@ascii.town` — SSH 聊天客戶端 ([source](https://git.causal.agency/catgirl))
* `curl parrot.live` — 顯示動畫派對鸚鵡 ([hugomd/parrot.live](https://github.com/hugomd/parrot.live))
* `curl byemck.atulr.com` — 為同事顯示動畫告別訊息 ([master-atul/byemck](https://github.com/master-atul/byemck))
* `nc rya.nc 1987` — 被 Rick Roll（亦支援 telnet）
* `curl node-web-console.glitch.me` — 觀看表情符號競速 ([source](https://glitch.com/edit/#!/node-web-console))
* `curl ascii.live/forrest` - 跑吧，福雷斯特，跑！
* `curl ascii.live/nyan` - 觀看 Nyan Cat
* `curl https://poptart.spinda.net` — 全螢幕彩色 Nyan Cat
* `gopher://fld.gp:70` - gopher 資源 / 新聞 / 天氣 / 娛樂
* `gopher://mozz.us:70` - 遊戲、飲品配方等
* `gopher://port70.net/1board/b` - 4chan
* :no_entry_sign: `ssh torus@ascii.town` - 協作式 ASCII 藝術專案 ([source](https://git.causal.agency/torus))
* `telnet 1984.ws 23` — BBS（BBS 列表 [見此處](https://www.telnetbbsguide.com/bbs/)）
* `ssh vtm@netxs.online` - 示範 "Monotty" 文字桌面環境 ([source](https://github.com/netxs-group/VTM))
* `curl gif.xyzzy.run` — 在終端機中搜尋並顯示 GIF
* `curl -sL https://raw.githubusercontent.com/gsobell/duckpond/home/duckpond.sh | bash` - 觀看一隻鴨子游過你的終端機
* `cat mario.nes | nc play-nes.org 4444` - 透過 netcat 模擬 ROM（需提供本地 ROM 檔案） ([source](https://github.com/henrikpersson/potatis))
* `finger @happynetbox.com` - 參與一場實驗性的網際網路社交體驗

基於 Telnet/SSH 的遊戲：

* `ssh sshtron.zachlatta.com` ~> 貪吃蛇遊戲；使用 AWSD 鍵操作
* `ssh netris.rocketnine.space` —  多人對戰俄羅斯方塊
* `ssh play@ascii.town` —  2048、貪吃蛇和空當接龍 ([source](https://git.causal.agency/play))
* `ssh gameroom@bitreich.org` - 11 款街機遊戲
* `ssh play@anonymine-demo.oskog97.com -p 2222` — 猜雷免費踩地雷；密碼：play
* `ssh twenex@sdf.org` —  遊玩包括西洋棋在內的多種遊戲
* `ssh intricacy@sshgames.thegonz.net` - 競技解謎；密碼：intricacy
* `ssh simulchess@sshgames.thegonz.net` - 多人國際象棋；密碼：simulchess
* `ssh pacman:pacman@antimirov.net` - 吃豆人；密碼：pacman
* `ssh lagrogue@sshgames.thegonz.net` - Roguelike；密碼：lag
* `ssh ckhet@sshgames.thegonz.net` - Khet；密碼：ckhet
* `ssh slashem@slashem.me` - nethack 及其他
* `ssh rodney@rlgallery.org` - rogue；密碼：yendor
* `ssh pong.brk.st` - 單人乒乓球
* `ssh tty.sdf.org` - 需要先 [註冊帳號](https://sdf.org)
* `ssh -p 8080 -l magnetic magneticscrolls.net` - 由 Magnetic Scrolls 開發的互動小說文字冒險遊戲
* `nc aardmud.org 23` — MUD（MUD 列表 [見此處](http://www.mudconnect.com/cgi-bin/search.cgi?mode=tmc_biglist)，亦支援 telnet）
* `nc freechess.org 23` — 西洋棋遊戲（亦支援 telnet）
* `nc igs.joyjoy.net 6969` - 遊玩/觀看圍棋（亦支援 telnet）
* `nc fibs.com 4321` - 多人西洋雙陸棋（亦支援 telnet）
* `telnet dungeon.name 20028` - 無限洞穴冒險
* `telnet milek7.gq` — 遊戲：乒乓球、打磚塊、俄羅斯方塊
* `telnet mtrek.com 1701` — 《星際迷航》
* `telnet decwars.com 1701` — 多人《星際迷航》
* `telnet telehack.com`
* `telnet multizork.icculus.org` — 多人 Zork


## 腳本

只需一行程式碼即可執行，但仍需在本地執行的實用腳本。

* `curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -`
* `curl -sL https://raw.githubusercontent.com/dylanaraps/neofetch/master/neofetch | bash`
* `curl -sL https://raw.githubusercontent.com/keroserene/rickrollrc/master/roll.sh | bash`

## 客戶端

幾乎每個 UNIX/Linux 系統都至少安裝了以下用於存取這些服務的客戶端之一。

* [aria2](https://aria2.github.io/)
* [bitsadmin](https://docs.microsoft.com/windows/win32/bits/)
* [curl](https://curl.haxx.se/)
* [httpie](https://httpie.org/)
* [httrack](https://www.httrack.com/)
* [powershell](https://microsoft.com/powershell/)
* [rclone](https://rclone.org/)
* [wget](https://www.gnu.org/software/wget/)
* [wget2](https://gitlab.com/gnuwget/wget2)
