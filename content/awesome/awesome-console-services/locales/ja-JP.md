# コンソールサービス

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

HTTP、HTTPS、その他のネットワークプロトコルでアクセスできる、優れたコンソールサービスの厳選リストです。
リストの構造化データ（同期されています）は [structured.yaml](structured.yaml) にあります。

  - [IP アドレス](#IP-Address "IP アドレス")
  - [地理位置情報](#Geolocation "地理位置情報")
  - [テキスト共有](#Text-Sharing "テキスト共有")
  - [URL 短縮サービス](#URL-Shortener "URL 短縮サービス")
  - [ファイル転送](#File-Transfer "ファイル転送")
  - [ブラウザ](#Browser "ブラウザ")
  - [ツール](#Tools "ツール")
  - [監視](#Monitoring "監視")
  - [天気](#Weather "天気")
  - [ニュース](#News "ニュース")
  - [情報掲示板](#Information-boards "情報掲示板")
  - [地図](#Map "地図")
  - [通貨](#Money "為替レートと金融情報")
  - [ドキュメント](#Documentation "マニュアル、チートシート、FAQ")
  - [辞書と翻訳](#Dictionaries-and-translators "辞書と翻訳")
  - [ジェネレーター](#Generators "メッセージ/テキスト/ジョーク/名言/名前の生成")
  - [エンターテインメントとゲーム](#Entertainment-and-games "チャット、ゲーム、楽しみ")
  - [スクリプト](#Scripts "スクリプト")
  - [クライアント](#Clients "クライアント")

## IP アドレス

### インライン

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

### 新しい行

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
* `curl 'api.hackertarget.com/zonetransfer/?q=zonetransfer.me'` - DNS ゾーン転送

### JSON のみ

* `curl httpbin.org/ip`
* `curl wtfismyip.com/json`
* `curl -L iphorse.com/json`
* `curl geoplugin.net/json.gp`
* `curl https://ipapi.co/json`
* `curl -L jsonip.com`
* `curl gd.geobytes.com/GetCityDetails`
* `curl ip.jsontest.com`

## 地理位置情報

* `curl api.ip2location.io` or `curl api.ip2location.io?ip=8.8.8.8`
* `curl ipinfo.io/8.8.8.8` or `curl ipinfo.io/8.8.8.8/loc`
* `curl ip-api.com` or `curl ip-api.com/8.8.8.8`
* `curl ifconfig.co/country` or `curl ifconfig.co/city` or `curl ifconfig.co/country-iso` or `http ifconfig.co/json`
* `curl ifconfig.es/geo` or `curl ifconfig.es/json` or `curl ifconfig.es/country` or `curl ifconfig.es/code` or `curl ifconfig.es/city` or `curl ifconfig.es/latitude` or `curl ifconfig.es/longitude`

## テキスト共有

* :no_entry_sign: `echo "Hello world!" | curl -F 'f:1=<-' ix.io`
* `echo "Hello world!" | curl -F file=@- 0x0.st`
* `echo "Hello world!" | curl -F 'clbin=<-' https://clbin.com`
* `echo "Hello world!" | nc termbin.com 9999`
* `echo "Hello world!" | curl -F 'sprunge=<-' sprunge.us`
* `echo "Hello world!" | curl -H "content-type: text/plain" -d @- https://textdb.dev/api/data/unique-id-for-my-text`
* `curl https://patchbay.pub/your-custom-path -d "Hello world!"` and `curl -s https://patchbay.pub/your-custom-path`

## URL 短縮サービス

* `curl -s tinyurl.com/api-create.php?url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://ttm.sh`
* `curl https://is.gd/create.php?format=simple&url=<link>`
* :no_entry_sign: `curl -F shorten=<link> https://0x0.st`
* `curl -F url=<link> https://shorta.link`

## ファイル転送

* `curl --upload-file <file> transfer.sh/<filename>`
* `curl -F file=@<file> https://ttm.sh`
* `curl https://patchbay.pub/your-custom-filepath.exe --data-binary @<file>` and `curl -LO https://patchbay.pub/your-custom-filepath.exe`
* `nc oshi.at 7777 < <file>` or `curl https://oshi.at -F f=@<file>`
* `curl -F file=@<file> https://0x0.st`
* `curl -F file=@<file> https://api.anonfile.com/upload`
* `curl -T <file> https://pixeldrain.com/api/file/`

## ブラウザ

*  :no_entry_sign: `ssh brow.sh`

## ツール

* `curl qrenco.de/STRING` or `echo STRING | curl -F-=\<- qrenco.de` — 文字列の QR コードを作成 ([chubin/qrenco.de](https://github.com/chubin/qrenco.de))
* `curl "http://c.docverter.com/convert" -F from=html -F to=pdf -F "input_files[]=@your-file-name.html" -o "output-file-name.pdf"` - ドキュメントを変換 ([source](https://github.com/docverter/docverter))
* `curl -s "https://decapi.me/youtube/latest_video?user=NPR"` - 指定した YouTube チャンネルの最新アップロードのタイトル/URL
* `curl -s "https://decapi.me/twitter/latest?name=NPR"` - 指定したアカウントの最新ツイート
* `curl -s "https://decapi.me/twitch/uptime?channel=IGN"` - 指定した Twitch チャンネルがオンラインか確認
* `curl -s "https://httpbin.org/delay/4"` - HTTP リクエスト/レスポンスサービス（例：4 秒後にレスポンスを送信）
* `curl -s "https://urlecho.appspot.com/echo?body=Hello+World"` - リクエストパラメータで定義された HTTP レスポンス
* `curl -s "https://urlreq.appspot.com/req?method=GET&url=https://l2.io/ip"` - 入力パラメータに基づいて新しいリクエストを行う HTTP プロキシ
* `curl -s "https://api.hackertarget.com/nmap/?q=93.184.216.34"` - NMAP を使用した TCP ポートスキャン
* `curl -s "https://api.hackertarget.com/pagelinks/?q=msn.com"` - ページからすべてのリンクを抽出
* `curl -s "https://api.hackertarget.com/whois/?q=google.com"` - Whois 検索
* `curl -s "https://jsonplaceholder.typicode.com/users"` - 偽の API データを取得するための便利なツール
* `ssh unix50@unix50.org - password is unix50` - 歴史的な UNIX システムのインスタンスを作成して使用
* `ssh new@sdf.org` - SDF Public Access UNIX System で使う無料の UNIX シェルアカウントを作成
* `dig help @dns.toys` - [dns.toys](https://www.dns.toys/) が提供する多数の利用可能なサービスを一覧表示

## 暗号学

* `curl https://ja3er.com/search/535886c8d0a1b14f02298967bb990171` - SSL フィンガープリント検索

## 監視

* `curl ping.gl`
* `curl https://status.plaintext.sh/t` - 一般的なサービスのステータスページを確認

## 天気

* `curl wttr.in` or `curl wttr.in/Berlin` — 天気を確認する正しい方法
* `finger oslo@graph.no`
* `nc rainmaker.wunderground.com 3000` (also works with telnet)
* `curl https://tgftp.nws.noaa.gov/data/observations/metar/stations/KAAO.TXT` - 指定した ICAO の METAR

## ニュース

* `curl getnews.tech/world+cup` — 最新ニュースを取得
* `curl hkkr.in` - [Hacker News フィード](github.com/NalinPlad/hkkr.in)
* `curl rate.sx` - （暗号）通貨の為替レートを調べる
* `gopher://gopher.leveck.us:70` - ニュースアグリゲーター
* `gopher://gopherddit.com:70`  - reddit
* `ssh teletekst.nl` - ターミナルでオランダ公共放送財団 (NOS) のテレテキストを表示
* `ssh redditbox.us` — ターミナルで reddit を表示（ssh + テキストブラウザ）
* `gopher://hngopher.com:70` - hacker news

* :no_entry_sign: `curl wrk.ist` — IT 市場の最新のリモート求人/ギグを取得

## 情報掲示板

* :no_entry_sign: `curl http://frcl.de/gulasch` — Gulaschprogrammiernacht 2019 Fahrplan
* `gopher://gopherpedia.com:70` - ウィキペディア

### COVID-19

* `curl https://corona-stats.online`
* `curl -L covid19.trackercli.com`
* `curl snf-878293.vm.okeanos.grnet.gr` - あなたの国の Covid-19 統計

## 地図

* `telnet mapscii.me` — ズーム可能な世界地図を表示

## 通貨

* `curl rate.sx` — 暗号通貨の為替レートを取得
* `curl crrcy.sh` - 法定通貨と暗号通貨の為替レートと履歴データを取得
* :no_entry_sign: `curl moneroj.org` — Monero の為替レートを取得
* :no_entry_sign: `curl cmc.rjldev.com` — coinmarketcap の上位 100 暗号通貨を取得
* `nc ticker.bitcointicker.co 10080` — BTC/USD の為替レートを取得（telnet でも動作）
* `curl https://stonks.icu/amd/msft` 株価の可視化ツールとトラッカーを取得
* `curl terminal-stocks.shashi.dev/:ticker` - 指定した yahoo ティッカーの株価と情報を取得
* `ssh cointop.sh` - 暗号通貨を追跡する TUI ([source](https://github.com/miguelmota/cointop))

## ドキュメント

* `curl cheat.sh` — curl で UNIX/Linux コマンドのチートシートを取得 ([chubin/cheat.sh](https://github.com/chubin/cheat.sh))
* `curl 'https://api.hackertarget.com/subnetcalc/?q=192.168.1.0/24'` サブネット計算機
* `gopher://telcodata.us:70` - NPA/NXX 検索
* `gopher://gopher.floodgap.com/1/world` - 既知のすべての gopher サーバー

## 辞書と翻訳

* `curl 'dict.org/d:command line'`

## ジェネレーター

* `git commit -m "$(curl -sk whatthecommit.com/index.txt)"` —  ランダムなコミットメッセージを生成
* curl `"https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"` - 乱数を生成
* `curl -H 'Accept: text/plain' https://foaas.com/cool/:from` — サービスとしての「さっさと失せろ」
* `curl pseudorandom.name` — 擬似ランダムな（アメリカ風？）名前を生成 ([treyhunner/pseudorandom.name](https://github.com/treyhunner/pseudorandom.name))
* :no_entry_sign: `curl -s https://uinames.com/api/?region=france\&amount=25 | jq '.[] | .name +" " + .surname'` — 25 個のランダムなフランス人の名前を生成
* `curl https://icanhazdadjoke.com` — ランダムなジョーク
* `curl givemeguid.com` - GUID
* `nc towel.blinkenlights.nl 666` - IT の言い訳（telnet でも動作）
* `curl -s 'https://api-inference.huggingface.co/models/distilgpt2' --data-raw '"what is the meaning of life?"' | jq '.[].generated_text'` - シード文字列から GPT2 AI モデルを使ってテキストを生成

## 電子商取引

* `ssh stickr.shop` — 反逆者のような、CLI のみのステッカーショップ。ssh 経由でステッカーを購入。
* `ssh terminal.shop` — ssh 経由でコーヒーを購入。

## エンターテインメントとゲーム

* `ssh -o StrictHostKeyChecking=no watch.ascii.theater` - ターミナルで無料のテキスト映画をストリーミング
* `curl https://asciitv.fr` — curl 経由でターミナルで Star Wars を視聴 ([source](https://github.com/martinraison/ascii-tv))
* `nc towel.blinkenlights.nl 23` — netcat 経由でターミナルで Star Wars を視聴（telnet でも動作）
* `ssh movie.gabe565.com` - ssh 経由で再生コントロール付きにターミナルで Star Wars を視聴
* `ssh chat.shazow.net` — SSH 経由でチャット ([shazow/ssh-chat](https://github.com/shazow/ssh-chat))
* `ssh chat@ascii.town` — SSH チャットクライアント ([source](https://git.causal.agency/catgirl))
* `curl parrot.live` — アニメーションのパーティーパロットを表示 ([hugomd/parrot.live](https://github.com/hugomd/parrot.live))
* `curl byemck.atulr.com` — 同僚へのアニメーションの別れのメッセージを表示 ([master-atul/byemck](https://github.com/master-atul/byemck))
* `nc rya.nc 1987` — Rick Rolled になる（telnet でも動作）
* `curl node-web-console.glitch.me` — 絵文字レースを視聴 ([source](https://glitch.com/edit/#!/node-web-console))
* `curl ascii.live/forrest` - 走れ、フォレスト、走れ！
* `curl ascii.live/nyan` - Nyan Cat を視聴
* `curl https://poptart.spinda.net` — フルスクリーンのカラー Nyan Cat
* `gopher://fld.gp:70` - gopher リソース / ニュース / 天気 / エンターテインメント
* `gopher://mozz.us:70` - ゲーム、ドリンクレシピなど
* `gopher://port70.net/1board/b` - 4chan
* :no_entry_sign: `ssh torus@ascii.town` - 共同 ASCII アートプロジェクト ([source](https://git.causal.agency/torus))
* `telnet 1984.ws 23` — BBS（BBS リスト [こちら](https://www.telnetbbsguide.com/bbs/)）
* `ssh vtm@netxs.online` - テキストベースのデスクトップ環境「Monotty」をデモ ([source](https://github.com/netxs-group/VTM))
* `curl gif.xyzzy.run` — ターミナルで GIF を検索して表示
* `curl -sL https://raw.githubusercontent.com/gsobell/duckpond/home/duckpond.sh | bash` - ターミナルで泳ぐアヒルを視聴
* `cat mario.nes | nc play-nes.org 4444` - netcat 経由で ROM をエミュレート（ローカルの ROM ファイルの指定が必要） ([source](https://github.com/henrikpersson/potatis))
* `finger @happynetbox.com` - 実験的なインターネットの社会的体験に参加

Telnet/SSH ベースのゲーム：

* `ssh sshtron.zachlatta.com` ~> ヘビゲーム；AWSD キーで操作
* `ssh netris.rocketnine.space` —  マルチプレイヤー・テトリス
* `ssh play@ascii.town` —  2048、ヘビ、フリーセル ([source](https://git.causal.agency/play))
* `ssh gameroom@bitreich.org` - 11 のアーケードゲーム
* `ssh play@anonymine-demo.oskog97.com -p 2222` — 無料マインスイーパーを当てる；パスワード: play
* `ssh twenex@sdf.org` —  チェッカーを含むさまざまなゲームをプレイ
* `ssh intricacy@sshgames.thegonz.net` - 競技パズル；パスワード: intricacy
* `ssh simulchess@sshgames.thegonz.net` - マルチプレイヤー・チェス；パスワード: simulchess
* `ssh pacman:pacman@antimirov.net` - パックマン；パスワード: pacman
* `ssh lagrogue@sshgames.thegonz.net` - Roguelike；パスワード: lag
* `ssh ckhet@sshgames.thegonz.net` - Khet；パスワード: ckhet
* `ssh slashem@slashem.me` - nethack など
* `ssh rodney@rlgallery.org` - rogue；パスワード: yendor
* `ssh pong.brk.st` - シングルプレイヤーのポン
* `ssh tty.sdf.org` - まず [アカウント作成](https://sdf.org) が必要
* `ssh -p 8080 -l magnetic magneticscrolls.net` - Magnetic Scrolls が開発したインタラクティブフィクションのテキスト冒険ゲーム
* `nc aardmud.org 23` — MUD（MUD リスト [こちら](http://www.mudconnect.com/cgi-bin/search.cgi?mode=tmc_biglist)、telnet でも動作）
* `nc freechess.org 23` — チェスゲーム（telnet でも動作）
* `nc igs.joyjoy.net 6969` - 囲碁のプレイ/観戦（telnet でも動作）
* `nc fibs.com 4321` - マルチプレイヤー・バックギャモン（telnet でも動作）
* `telnet dungeon.name 20028` - 無限の洞窟冒険
* `telnet milek7.gq` — ゲーム：ポン、ブロック崩し、テトリス
* `telnet mtrek.com 1701` — Star Trek
* `telnet decwars.com 1701` — マルチプレイヤー・Star Trek
* `telnet telehack.com`
* `telnet multizork.icculus.org` — マルチプレイヤー・Zork


## スクリプト

1 行のコードで実行できるが、それでもローカルでの実行が必要な便利なスクリプト。

* `curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -`
* `curl -sL https://raw.githubusercontent.com/dylanaraps/neofetch/master/neofetch | bash`
* `curl -sL https://raw.githubusercontent.com/keroserene/rickrollrc/master/roll.sh | bash`

## クライアント

これらのサービスにアクセスするために必要なクライアントのうち、少なくとも 1 つはほぼすべての UNIX/Linux システムにインストールされています。

* [aria2](https://aria2.github.io/)
* [bitsadmin](https://docs.microsoft.com/windows/win32/bits/)
* [curl](https://curl.haxx.se/)
* [httpie](https://httpie.org/)
* [httrack](https://www.httrack.com/)
* [powershell](https://microsoft.com/powershell/)
* [rclone](https://rclone.org/)
* [wget](https://www.gnu.org/software/wget/)
* [wget2](https://gitlab.com/gnuwget/wget2)
