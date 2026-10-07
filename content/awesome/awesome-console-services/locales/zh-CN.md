# 控制台服务

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

这是一个精选的命令行（控制台）服务列表（可通过 HTTP、HTTPS 及其他网络协议访问）。
列表的结构化数据（保持同步）位于 [structured.yaml](structured.yaml)。

  - [IP 地址](#IP-Address "IP 地址")
  - [地理位置](#Geolocation "地理位置")
  - [文本分享](#Text-Sharing "文本分享")
  - [URL 缩短器](#URL-Shortener "URL 缩短器")
  - [文件传输](#File-Transfer "文件传输")
  - [浏览器](#Browser "浏览器")
  - [工具](#Tools "工具")
  - [监控](#Monitoring "监控")
  - [天气](#Weather "天气")
  - [新闻](#News "新闻")
  - [信息板](#Information-boards "信息板")
  - [地图](#Map "地图")
  - [货币](#Money "汇率与金融信息")
  - [文档](#Documentation "手册、速查表与常见问题")
  - [词典与翻译](#Dictionaries-and-translators "词典与翻译")
  - [生成器](#Generators "消息/文本/笑话/姓名生成器")
  - [娱乐与游戏](#Entertainment-and-games "聊天、游戏与趣味")
  - [脚本](#Scripts "脚本")
  - [客户端](#Clients "客户端")

## IP 地址

### 单行

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
* `curl 'api.hackertarget.com/zonetransfer/?q=zonetransfer.me'` - DNS 区域传送

### 仅 JSON

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

## 文本分享

* :no_entry_sign: `echo "Hello world!" | curl -F 'f:1=<-' ix.io`
* `echo "Hello world!" | curl -F file=@- 0x0.st`
* `echo "Hello world!" | curl -F 'clbin=<-' https://clbin.com`
* `echo "Hello world!" | nc termbin.com 9999`
* `echo "Hello world!" | curl -F 'sprunge=<-' sprunge.us`
* `echo "Hello world!" | curl -H "content-type: text/plain" -d @- https://textdb.dev/api/data/unique-id-for-my-text`
* `curl https://patchbay.pub/your-custom-path -d "Hello world!"` and `curl -s https://patchbay.pub/your-custom-path`

## URL 缩短器

* `curl -s tinyurl.com/api-create.php?url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://ttm.sh`
* `curl https://is.gd/create.php?format=simple&url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://0x0.st`
* `curl -F url=<link> https://shorta.link`

## 文件传输

* `curl --upload-file <file> transfer.sh/<filename>`
* `curl -F file=@<file> https://ttm.sh`
* `curl https://patchbay.pub/your-custom-filepath.exe --data-binary @<file>` and `curl -LO https://patchbay.pub/your-custom-filepath.exe`
* `nc oshi.at 7777 < <file>` or `curl https://oshi.at -F f=@<file>`
* `curl -F file=@<file> https://0x0.st`
* `curl -F file=@<file> https://api.anonfile.com/upload`
* `curl -T <file> https://pixeldrain.com/api/file/`

## 浏览器

*  :no_entry_sign: `ssh brow.sh`

## 工具

* `curl qrenco.de/STRING` or `echo STRING | curl -F-=\<- qrenco.de` — 为字符串生成二维码 ([chubin/qrenco.de](https://github.com/chubin/qrenco.de))
* `curl "http://c.docverter.com/convert" -F from=html -F to=pdf -F "input_files[]=@your-file-name.html" -o "output-file-name.pdf"` - 转换文档 ([source](https://github.com/docverter/docverter))
* `curl -s "https://decapi.me/youtube/latest_video?user=NPR"` - 指定 YouTube 频道最新上传的标题/URL
* `curl -s "https://decapi.me/twitter/latest?name=NPR"` - 指定账号的最新推文
* `curl -s "https://decapi.me/twitch/uptime?channel=IGN"` - 检查指定 Twitch 频道是否在线
* `curl -s "https://httpbin.org/delay/4"` - HTTP 请求与响应服务（例如 4 秒后返回响应）
* `curl -s "https://urlecho.appspot.com/echo?body=Hello+World"` - 在请求参数中定义的 HTTP 响应
* `curl -s "https://urlreq.appspot.com/req?method=GET&url=https://l2.io/ip"` - HTTP 代理根据输入参数发起新请求
* `curl -s "https://api.hackertarget.com/nmap/?q=93.184.216.34"` - 使用 NMAP 进行 TCP 端口扫描
* `curl -s "https://api.hackertarget.com/pagelinks/?q=msn.com"` - 提取页面中的所有链接
* `curl -s "https://api.hackertarget.com/whois/?q=google.com"` - Whois 查询
* `curl -s "https://jsonplaceholder.typicode.com/users"` - 用于获取假 API 数据的实用工具
* `ssh unix50@unix50.org - password is unix50` - 创建并使用历史 UNIX 系统的实例
* `ssh new@sdf.org` - 创建免费的 UNIX shell 账户，用于 SDF 公共访问 UNIX 系统
* `dig help @dns.toys` - 列出 dns.toys 提供的众多可用服务 ([dns.toys](https://www.dns.toys/))

## 密码学

* `curl https://ja3er.com/search/535886c8d0a1b14f02298967bb990171` - SSL 指纹搜索

## 监控

* `curl ping.gl`
* `curl https://status.plaintext.sh/t` - 查看常见服务的状态页

## 天气

* `curl wttr.in` or `curl wttr.in/Berlin` — 查看天气的正确方式
* `finger oslo@graph.no`
* `nc rainmaker.wunderground.com 3000` (also works with telnet)
* `curl https://tgftp.nws.noaa.gov/data/observations/metar/stations/KAAO.TXT` - 指定 ICAO 的 METAR 气象报告

## 新闻

* `curl getnews.tech/world+cup` — 获取最新新闻
* `curl hkkr.in` - [Hacker News 推送](github.com/NalinPlad/hkkr.in)
* `curl rate.sx` - 用于查看（加密）货币汇率
* `gopher://gopher.leveck.us:70` - 新闻聚合器
* `gopher://gopherddit.com:70`  - reddit
* `ssh teletekst.nl` - 在终端查看荷兰公共广播基金会 (NOS) 的图文电视
* `ssh redditbox.us` — 在终端中浏览 reddit（ssh + 文本浏览器）
* `gopher://hngopher.com:70` - hacker news

* :no_entry_sign: `curl wrk.ist` — 获取 IT 市场最新的远程工作/兼职

## 信息板

* :no_entry_sign: `curl http://frcl.de/gulasch` — Gulaschprogrammiernacht 2019 Fahrplan
* `gopher://gopherpedia.com:70` - 维基百科

### COVID-19

* `curl https://corona-stats.online`
* `curl -L covid19.trackercli.com`
* `curl snf-878293.vm.okeanos.grnet.gr` - 您所在国家/地区的 Covid-19 统计数据

## 地图

* `telnet mapscii.me` — 显示可缩放的世界地图

## 货币

* `curl rate.sx` — 获取加密货币汇率
* `curl crrcy.sh` - 获取法币与加密货币汇率及历史数据
* :no_entry_sign: `curl moneroj.org` — 获取门罗币汇率
* :no_entry_sign: `curl cmc.rjldev.com` — 获取 CoinMarketCap 前 100 名加密货币
* `nc ticker.bitcointicker.co 10080` — 获取 BTC/USD 汇率（亦支持 telnet）
* `curl https://stonks.icu/amd/msft` 获取股票可视化工具与追踪器
* `curl terminal-stocks.shashi.dev/:ticker` - 获取所提供雅虎代码对应的股票价格与信息
* `ssh cointop.sh` - 加密货币追踪 TUI ([source](https://github.com/miguelmota/cointop))

## 文档

* `curl cheat.sh` — 使用 curl 获取 UNIX/Linux 命令速查表 ([chubin/cheat.sh](https://github.com/chubin/cheat.sh))
* `curl 'https://api.hackertarget.com/subnetcalc/?q=192.168.1.0/24'` 子网计算器
* `gopher://telcodata.us:70` - NPA/NXX 查询
* `gopher://gopher.floodgap.com/1/world` - 所有已知的 gopher 服务器

## 词典与翻译

* `curl 'dict.org/d:command line'`

## 生成器

* `git commit -m "$(curl -sk whatthecommit.com/index.txt)"` —  生成随机提交信息
* curl `"https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"` - 生成随机数
* `curl -H 'Accept: text/plain' https://foaas.com/cool/:from` — 以服务形式送客（FOAAS）
* `curl pseudorandom.name` — 生成伪随机（美式？）姓名 ([treyhunner/pseudorandom.name](https://github.com/treyhunner/pseudorandom.name))
* :no_entry_sign: `curl -s https://uinames.com/api/?region=france\&amount=25 | jq '.[] | .name +" " + .surname'` — 生成 25 个随机法文姓名
* `curl https://icanhazdadjoke.com` — 随机笑话
* `curl givemeguid.com` - GUID
* `nc towel.blinkenlights.nl 666` - IT 借口（亦支持 telnet）
* `curl -s 'https://api-inference.huggingface.co/models/distilgpt2' --data-raw '"what is the meaning of life?"' | jq '.[].generated_text'` - 根据种子字符串使用 GPT2 AI 模型生成文本

## 电子商务

* `ssh stickr.shop` — 特立独行的纯 CLI 贴纸商店。通过 ssh 购买贴纸。
* `ssh terminal.shop` — 通过 ssh 购买咖啡。

## 娱乐与游戏

* `ssh -o StrictHostKeyChecking=no watch.ascii.theater` - 在终端中播放免费的文本电影
* `curl https://asciitv.fr` — 通过 curl 在终端观看《星球大战》 ([source](https://github.com/martinraison/ascii-tv))
* `nc towel.blinkenlights.nl 23` — 通过 netcat 在终端观看《星球大战》（亦支持 telnet）
* `ssh movie.gabe565.com` - 通过 ssh 在终端观看带播放控制的《星球大战》
* `ssh chat.shazow.net` — 通过 SSH 聊天 ([shazow/ssh-chat](https://github.com/shazow/ssh-chat))
* `ssh chat@ascii.town` — SSH 聊天客户端 ([source](https://git.causal.agency/catgirl))
* `curl parrot.live` — 显示动画派对鹦鹉 ([hugomd/parrot.live](https://github.com/hugomd/parrot.live))
* `curl byemck.atulr.com` — 为同事显示动画告别信息 ([master-atul/byemck](https://github.com/master-atul/byemck))
* `nc rya.nc 1987` — 被 Rick Roll（亦支持 telnet）
* `curl node-web-console.glitch.me` — 观看表情符号竞速 ([source](https://glitch.com/edit/#!/node-web-console))
* `curl ascii.live/forrest` - 跑吧，福雷斯特，跑！
* `curl ascii.live/nyan` - 观看 Nyan Cat
* `curl https://poptart.spinda.net` — 全屏彩色 Nyan Cat
* `gopher://fld.gp:70` - gopher 资源 / 新闻 / 天气 / 娱乐
* `gopher://mozz.us:70` - 游戏、饮品配方等
* `gopher://port70.net/1board/b` - 4chan
* :no_entry_sign: `ssh torus@ascii.town` - 协作式 ASCII 艺术项目 ([source](https://git.causal.agency/torus))
* `telnet 1984.ws 23` — BBS（BBS 列表 [见此处](https://www.telnetbbsguide.com/bbs/)）
* `ssh vtm@netxs.online` - 演示 "Monotty" 文本桌面环境 ([source](https://github.com/netxs-group/VTM))
* `curl gif.xyzzy.run` — 在终端中搜索并显示 GIF
* `curl -sL https://raw.githubusercontent.com/gsobell/duckpond/home/duckpond.sh | bash` - 观看一只鸭子游过你的终端
* `cat mario.nes | nc play-nes.org 4444` - 通过 netcat 模拟 ROM（需提供本地 ROM 文件） ([source](https://github.com/henrikpersson/potatis))
* `finger @happynetbox.com` - 参与一场实验性的互联网社交体验

基于 Telnet/SSH 的游戏：

* `ssh sshtron.zachlatta.com` ~> 贪吃蛇游戏；使用 AWSD 键操作
* `ssh netris.rocketnine.space` —  多人对战俄罗斯方块
* `ssh play@ascii.town` —  2048、贪吃蛇和空当接龙 ([source](https://git.causal.agency/play))
* `ssh gameroom@bitreich.org` - 11 款街机游戏
* `ssh play@anonymine-demo.oskog97.com -p 2222` — 猜雷免费扫雷；密码：play
* `ssh twenex@sdf.org` —  玩包括跳棋在内的多种游戏
* `ssh intricacy@sshgames.thegonz.net` - 竞技解谜；密码：intricacy
* `ssh simulchess@sshgames.thegonz.net` - 多人国际象棋；密码：simulchess
* `ssh pacman:pacman@antimirov.net` - 吃豆人；密码：pacman
* `ssh lagrogue@sshgames.thegonz.net` - Roguelike；密码：lag
* `ssh ckhet@sshgames.thegonz.net` - Khet；密码：ckhet
* `ssh slashem@slashem.me` - nethack 及其他
* `ssh rodney@rlgallery.org` - rogue；密码：yendor
* `ssh pong.brk.st` - 单人乒乓球
* `ssh tty.sdf.org` - 需要先 [注册账户](https://sdf.org)
* `ssh -p 8080 -l magnetic magneticscrolls.net` - 由 Magnetic Scrolls 开发的互动小说文字冒险游戏
* `nc aardmud.org 23` — MUD（MUD 列表 [见此处](http://www.mudconnect.com/cgi-bin/search.cgi?mode=tmc_biglist)，亦支持 telnet）
* `nc freechess.org 23` — 国际象棋游戏（亦支持 telnet）
* `nc igs.joyjoy.net 6969` - 游玩/观看围棋（亦支持 telnet）
* `nc fibs.com 4321` - 多人西洋双陆棋（亦支持 telnet）
* `telnet dungeon.name 20028` - 无限洞穴冒险
* `telnet milek7.gq` — 游戏：乒乓球、打砖块、俄罗斯方块
* `telnet mtrek.com 1701` — 《星际迷航》
* `telnet decwars.com 1701` — 多人《星际迷航》
* `telnet telehack.com`
* `telnet multizork.icculus.org` — 多人 Zork


## 脚本

只需一行代码即可运行，但仍需在本地执行的实用脚本。

* `curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -`
* `curl -sL https://raw.githubusercontent.com/dylanaraps/neofetch/master/neofetch | bash`
* `curl -sL https://raw.githubusercontent.com/keroserene/rickrollrc/master/roll.sh | bash`

## 客户端

几乎每个 UNIX/Linux 系统都至少安装了以下用于访问这些服务的客户端之一。

* [aria2](https://aria2.github.io/)
* [bitsadmin](https://docs.microsoft.com/windows/win32/bits/)
* [curl](https://curl.haxx.se/)
* [httpie](https://httpie.org/)
* [httrack](https://www.httrack.com/)
* [powershell](https://microsoft.com/powershell/)
* [rclone](https://rclone.org/)
* [wget](https://www.gnu.org/software/wget/)
* [wget2](https://gitlab.com/gnuwget/wget2)
