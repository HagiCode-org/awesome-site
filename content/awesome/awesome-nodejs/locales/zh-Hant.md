<div align="center">
	<div>
		<img width="500" src="media/logo.svg" alt="Awesome Node.js">
		<br>
	</div>
	<br>
	<br>
	<br>
	<br>
	<hr>
	<p>
		<p>
			<sup>
				<a href="https://github.com/sponsors/sindresorhus">我的開源工作獲得社群支持</a>
			</sup>
		</p>
		<sup>特別感謝：</sup>
		<br>
		<br>
		<br>
		<a href="https://depot.dev?utm_source=github&utm_medium=sindresorhus">
			<div>
				<picture>
					<source width="180" media="(prefers-color-scheme: dark)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-dark.svg">
					<source width="180" media="(prefers-color-scheme: light)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-light.svg">
					<img width="180" src="https://sindresorhus.com/assets/thanks/depot-logo-light.svg" alt="Depot logo">
				</picture>
			</div>
			<b>快速的遠端容器建置與 GitHub Actions 執行器。</b>
		</a>
		<br>
		<br>
		<br>
	</p>
	<hr>
	<br>
	<br>
	<br>
	<br>
	<br>
	<a href="https://awesome.re">
		<img src="https://awesome.re/badge-flat2.svg" alt="Awesome">
	</a>
	<p>
		<sub>只要輸入 <a href="https://node.cool"><code>node.cool</code></a> 即可前往此處。歡迎在 <a href="https://twitter.com/sindresorhus">Twitter</a>.</sub>
	</p>
	<br>
	<p>
		<a href="https://en.wikipedia.org/wiki/Node.js">Node.js</a> 是一個開放原始碼、跨平台的 JavaScript 執行環境，可用來撰寫伺服器與命令列工具。
	</p>
	<br>
</div>

## 目錄

- [官方資源](#official)
- [套件](#packages)
	- [瘋狂實驗](#mad-science)
	- [命令列應用程式](#command-line-apps)
	- [函數式程式設計](#functional-programming)
	- [HTTP](#http)
	- [偵錯 / 效能分析](#debugging--profiling)
	- [記錄](#logging)
	- [命令列工具](#command-line-utilities)
	- [建置工具](#build-tools)
	- [硬體](#hardware)
	- [範本引擎](#templating)
	- [網頁框架](#web-frameworks)
	- [文件](#documentation)
	- [檔案系統](#filesystem)
	- [控制流程](#control-flow)
	- [串流](#streams)
	- [即時通訊](#real-time)
	- [影像](#image)
	- [文字](#text)
	- [數字](#number)
	- [數學](#math)
	- [日期](#date)
	- [URL](#url)
	- [資料驗證](#data-validation)
	- [解析](#parsing)
	- [易讀格式化](#humanize)
	- [壓縮](#compression)
	- [網路](#network)
	- [資料庫](#database)
	- [測試](#testing)
	- [安全性](#security)
	- [基準測試](#benchmarking)
	- [壓縮器](#minifiers)
	- [驗證](#authentication)
	- [授權](#authorization)
	- [電子郵件](#email)
	- [工作佇列](#job-queues)
	- [Node.js 管理](#nodejs-management)
	- [跨平台整合](#cross-platform-integration)
	- [自然語言處理](#natural-language-processing)
	- [程序管理](#process-management)
	- [自動化](#automation)
	- [AST](#ast)
	- [靜態網站產生器](#static-site-generators)
	- [內容管理系統](#content-management-systems)
	- [論壇](#forum)
	- [部落格](#blogging)
	- [奇妙專案](#weird)
	- [序列化](#serialization)
	- [雜項](#miscellaneous)
- [套件管理員](#package-manager)
- [資源](#resources)
	- [教學](#tutorials)
	- [探索](#discovery)
	- [文章](#articles)
	- [電子報](#newsletters)
	- [影片](#videos)
	- [書籍](#books)
	- [部落格](#blogs)
	- [課程](#courses)
	- [速查表](#cheatsheets)
	- [工具](#tools)
	- [社群](#community)
	- [雜項](#miscellaneous-1)
- [相關清單](#related-lists)

## 官方資源

- [網站](https://nodejs.org)
- [文件](https://nodejs.org/dist/latest/docs/api/)
- [儲存庫](https://github.com/nodejs/node)

## 套件

### 瘋狂實驗

- [webtorrent](https://github.com/webtorrent/webtorrent) - 適用於 Node.js 與瀏覽器的 BitTorrent 串流用戶端。
- [peerflix](https://github.com/mafintosh/peerflix) - BitTorrent 串流用戶端。
- [ipfs](https://github.com/ipfs/helia) - 分散式檔案系統，旨在讓所有運算裝置連結至同一個檔案系統。
- [stackgl](https://github.com/stackgl) - 以 browserify 與 npm 為基礎打造的開放原始碼 WebGL 生態系。
- [peerwiki](https://github.com/mafintosh/peerwiki) - 透過 BitTorrent 分享整個維基百科。
- [peercast](https://github.com/mafintosh/peercast) - 將 BitTorrent 影片串流至 Chromecast。
- [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib) - 簡潔、易讀且經過驗證的 Bitcoin 程式庫。
- [Bitcore](https://github.com/bitpay/bitcore) - 純粹且功能強大的 Bitcoin 程式庫。
- [PDFKit](https://github.com/foliojs/pdfkit) - PDF 產生程式庫。
- [turf](https://github.com/Turfjs/turf) - 模組化的地理空間處理與分析引擎。
- [webcat](https://github.com/mafintosh/webcat) - 透過 WebRTC 跨網路建立 P2P 管道，並以你的 GitHub 公開／私密金鑰進行驗證。
- [NodeOS](https://github.com/NodeOS/NodeOS) - 第一個以 npm 為動力的作業系統。
- [YodaOS](https://github.com/yodaos-project/yodaos) - AI 作業系統。
- [Brain.js](https://github.com/BrainJS/brain.js) - 機器學習框架。
- [Pipcook](https://github.com/alibaba/pipcook) - 用來建立機器學習管線的前端演算法框架。
- [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) - 圖論（又稱網路）的建模與分析工具。
- [js-git](https://github.com/creationix/js-git) - Git 的 JavaScript 實作。
- [xlsx](https://github.com/SheetJS/sheetjs) - 純 JavaScript 的 Excel 試算表讀取與寫入工具。
- [isomorphic-git](https://github.com/isomorphic-git/isomorphic-git) - Git 的純 JavaScript 實作。

### 命令列應用程式

- [np](https://github.com/sindresorhus/np) - 更好用的 `npm publish`。
- [npm-name](https://github.com/sindresorhus/npm-name) - 檢查 npm 上是否還有可用的套件名稱。
- [gh-home](https://github.com/sindresorhus/gh-home) - 開啟目前目錄中儲存庫的 GitHub 頁面。
- [npm-home](https://github.com/sindresorhus/npm-home) - 開啟套件的 npm 頁面。
- [trash](https://github.com/sindresorhus/trash) - 比 `rm` 更安全的替代工具。
- [speed-test](https://github.com/sindresorhus/speed-test) - 測試網際網路連線速度與 ping 值。
- [pageres](https://github.com/sindresorhus/pageres) - 擷取網站畫面截圖。
- [cpy](https://github.com/sindresorhus/cpy) - 複製檔案。
- [vtop](https://github.com/MrRio/vtop) - 更好看的 top，並附有精美圖表。
- [empty-trash](https://github.com/sindresorhus/empty-trash) - 清空垃圾桶。
- [is-up](https://github.com/sindresorhus/is-up) - 檢查網站是否正常運作。
- [is-online](https://github.com/sindresorhus/is-online) - 檢查網際網路連線是否正常。
- [public-ip](https://github.com/sindresorhus/public-ip) - 取得你的公開 IP 位址。
- [clipboard-cli](https://github.com/sindresorhus/clipboard-cli) - 在終端機中複製與貼上。
- [XO](https://github.com/xojs/xo) - 使用 JavaScript happiness style 強制套用嚴格的程式碼風格。
- [ESLint](https://github.com/eslint/eslint) - 可外掛擴充的 JavaScript 程式碼檢查工具。
- [David](https://github.com/alanshaw/david) - 通知你 npm 套件相依性是否已過期。
- [http-server](https://github.com/http-party/http-server) - 簡單、免設定的命令列 HTTP 伺服器。
- [Live Server](https://github.com/tapio/live-server) - 支援 livereload 的開發用 HTTP 伺服器。
- [bcat](https://github.com/kessler/node-bcat) - 將命令輸出管線傳送至網頁瀏覽器。
- [normit](https://github.com/pawurb/normit) - 在終端機中使用 Google 翻譯與語音合成。
- [fkill](https://github.com/sindresorhus/fkill-cli) - 輕鬆終止程序，且支援跨平台。
- [pjs](https://github.com/danielstjules/pjs) - 可透過管線使用的 JavaScript；在終端機中快速篩選、對應與歸約資料。
- [license-checker](https://github.com/davglass/license-checker) - 檢查應用程式相依套件的授權條款。
- [browser-run](https://github.com/juliangruber/browser-run) - 在瀏覽器環境中輕鬆執行程式碼。
- [tmpin](https://github.com/sindresorhus/tmpin) - 為任何接受檔案輸入的 CLI 應用程式加入 stdin 支援。
- [wallpaper](https://github.com/sindresorhus/wallpaper) - 更換桌布。
- [pen](https://github.com/hatashiro/pen) - 在瀏覽器中即時預覽最愛編輯器內的 Markdown。
- [dark-mode](https://github.com/sindresorhus/dark-mode) - 切換 macOS 深色模式。
- [Jsome](https://github.com/Javascipt/Jsome) - 以可設定的色彩與縮排美化輸出 JSON。
- [mobicon](https://github.com/samverschueren/mobicon-cli) - 行動應用程式圖示產生器。
- [mobisplash](https://github.com/samverschueren/mobisplash-cli) - 行動應用程式啟動畫面產生器。
- [diff2html-cli](https://github.com/rtfpessoa/diff2html-cli) - 將 Git 差異轉換成美觀的 HTML。
- [trymodule](https://github.com/victorb/trymodule) - 在終端機中試用 npm 套件。
- [jscpd](https://github.com/kucherenko/jscpd) - 原始碼複製貼上偵測工具。
- [atmo](https://github.com/Raathigesh/Atmo) - 伺服器端 API 模擬工具。
- [auto-install](https://github.com/siddharthkp/auto-install) - 隨著你編寫程式碼自動安裝相依套件。
- [cost-of-modules](https://github.com/siddharthkp/cost-of-modules) - 找出哪些相依套件拖慢了你的程式。
- [localtunnel](https://github.com/localtunnel/localtunnel) - 將本機 localhost 暴露給全世界。
- [svg-term-cli](https://github.com/marionebl/svg-term-cli) - 以 SVG 分享終端機工作階段。
- [gtop](https://github.com/aksakalli/gtop) - 終端機用的系統監控儀表板。
- [themer](https://github.com/themerdev/themer) - 為編輯器、終端機、桌布、Slack 等產生佈景主題。
- [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - 直接在終端機中將程式碼轉成精美圖片。
- [cash-cli](https://github.com/xxczaki/cash-cli) - 在 170 種貨幣之間進行換算。
- [taskbook](https://github.com/klaussinani/taskbook) - 適用於命令列環境的任務、看板與筆記工具。
- [discharge](https://github.com/brandonweiss/discharge) - 輕鬆將靜態網站部署至 Amazon S3。
- [npkill](https://github.com/voidcosmos/npkill) - 輕鬆找出並移除舊版及佔用空間大的 node_modules 資料夾。

### 函數式程式設計

- [lodash](https://github.com/lodash/lodash) - 提供一致性、自訂能力、效能等功能的工具程式庫；比 Underscore.js 更出色、更快速。
- [immutable](https://github.com/immutable-js/immutable-js) - 不可變的資料集合。
- [Ramda](https://github.com/ramda/ramda) - 著重彈性函數組合的工具程式庫，透過自動柯里化與反向引數順序實現；不會修改資料。
- [Mout](https://github.com/mout/mout) - 工具程式庫；與其他既有方案最大的不同是，可只載入需要的模組或函式，不會帶來額外負擔。
- [RxJS](https://github.com/reactivex/rxjs) - 用於轉換、組合及查詢各種資料的函數式反應式程式庫。
- [Kefir.js](https://github.com/kefirjs/kefir) - 著重高效能與低記憶體用量的反應式程式庫。

### HTTP

- [got](https://github.com/sindresorhus/got) - 內建 `http` 模組更好用的介面。
- [undici](https://github.com/nodejs/undici) - 從頭打造、零相依性的高效能 HTTP 用戶端。
- [ky-universal](https://github.com/sindresorhus/ky-universal) - 以 Fetch 為基礎的通用 HTTP 用戶端。
- [node-fetch](https://github.com/node-fetch/node-fetch) - Node.js 版本的 `window.fetch`。
- [axios](https://github.com/axios/axios) - 以 Promise 為基礎的 HTTP 用戶端（瀏覽器也能使用）。
- [superagent](https://github.com/visionmedia/superagent) - HTTP 請求程式庫。
- [http-fake-backend](https://github.com/micromata/http-fake-backend) - 透過可設定的路由提供 JSON 檔案或 JavaScript 物件內容，建置模擬後端。
- [cacheable-request](https://github.com/lukechilds/cacheable-request) - 為原生 HTTP 請求包裝符合 RFC 的快取支援。
- [gotql](https://github.com/khaosdoctor/gotql) - 以 [got](https://github.com/sindresorhus/got) 建置的 GraphQL 請求程式庫。
- [global-agent](https://github.com/gajus/global-agent) - 可透過環境變數設定的全域 HTTP/HTTPS 代理程式。
- [smoke](https://github.com/sinedied/smoke) - 可記錄請求的檔案式 HTTP 模擬伺服器。
- [purest](https://github.com/simov/purest) - REST 用戶端。

### 偵錯 / 效能分析

- [debug](https://github.com/debug-js/debug) - 輕量級偵錯工具。
- [why-is-node-running](https://github.com/mafintosh/why-is-node-running) - Node.js 正在執行，但你不知道原因嗎？
- [njsTrace](https://github.com/valyouw/njstrace) - 為程式碼加上檢測與追蹤，檢視函式呼叫、引數、回傳值，以及各函式耗時。
- [vstream](https://github.com/joyent/node-vstream) - 可插入檢測功能的串流混入模組，用來檢查串流管線。
- [stackman](https://github.com/watson/stackman) - 在錯誤堆疊追蹤中加入程式碼片段等實用資訊。
- [locus](https://github.com/alidavut/locus) - 在執行階段啟動可存取所有變數的 REPL。
- [0x](https://github.com/davidmarkclements/0x) - 火焰圖效能分析工具。
- [ctrace](https://github.com/automation-stack/ctrace) - 格式更清晰、功能更完善的系統呼叫與訊號追蹤工具。
- [leakage](https://github.com/andywer/leakage) - 撰寫記憶體洩漏測試。
- [llnode](https://github.com/nodejs/llnode) - 事後分析工具，可檢查物件並深入了解已當機的 Node.js 程序。
- [thetool](https://github.com/sfninja/thetool) - 擷取應用程式的 CPU、記憶體及其他效能分析資料，並輸出成適用於 Chrome DevTools 的格式。
- [swagger-stats](https://github.com/slanatech/swagger-stats) - 追蹤 API 呼叫，監控 API 效能、健康狀態與使用指標。
- [NiM](https://github.com/june07/nim) - 管理 DevTools 偵錯工作流程。
- [dats](https://github.com/immobiliare/dats) - 精簡、零相依性的 [StatsD](https://github.com/statsd/statsd) 用戶端。

### 記錄

- [pino](https://github.com/pinojs/pino) - 受 Bunyan 啟發的極高速記錄器。
- [winston](https://github.com/winstonjs/winston) - 支援多種傳輸方式的非同步記錄程式庫。
- [console-log-level](https://github.com/watson/console-log-level) - 極簡易用的記錄器，支援記錄層級與自訂前綴。
- [storyboard](https://github.com/guigrpa/storyboard) - 端對端、階層式、即時且色彩豐富的記錄與故事追蹤工具。
- [consola](https://github.com/unjs/consola) - 主控台記錄器。

### 命令列工具

- [chalk](https://github.com/chalk/chalk) - 妥善處理終端機字串樣式的工具。
- [meow](https://github.com/sindresorhus/meow) - CLI 應用程式輔助工具。
- [yargs](https://github.com/yargs/yargs) - 命令列解析器，可自動產生精美的使用者介面。
- [ora](https://github.com/sindresorhus/ora) - 優雅的終端機載入動畫。
- [get-stdin](https://github.com/sindresorhus/get-stdin) - 更方便地讀取 stdin。
- [log-update](https://github.com/sindresorhus/log-update) - 在終端機覆寫先前輸出以更新記錄，適合呈現進度列、動畫等。
- [Ink](https://github.com/vadimdemedes/ink) - 用於互動式命令列應用程式的 React。
- [listr2](https://github.com/listr2/listr2) - 終端機工作清單。
- [conf](https://github.com/sindresorhus/conf) - 簡單的應用程式或模組設定管理。
- [ansi-escapes](https://github.com/sindresorhus/ansi-escapes) - 用來操作終端機的 ANSI 跳脫碼。
- [log-symbols](https://github.com/sindresorhus/log-symbols) - 各種記錄層級的彩色符號。
- [figures](https://github.com/sindresorhus/figures) - Unicode 符號，並提供 Windows CMD 替代字元。
- [boxen](https://github.com/sindresorhus/boxen) - 在終端機中建立方框。
- [terminal-link](https://github.com/sindresorhus/terminal-link) - 在終端機中建立可點擊連結。
- [terminal-image](https://github.com/sindresorhus/terminal-image) - 在終端機中顯示圖片。
- [string-width](https://github.com/sindresorhus/string-width) - 取得字串的視覺寬度，也就是顯示所需的欄數。
- [cli-truncate](https://github.com/sindresorhus/cli-truncate) - 將字串截斷至終端機中的指定寬度。
- [blessed](https://github.com/chjj/blessed) - 類似 curses 的程式庫。
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - 互動式命令列提示工具。
- [yn](https://github.com/sindresorhus/yn) - 解析類似 yes/no 的值。
- [cli-table3](https://github.com/cli-table/cli-table3) - 美觀的 Unicode 表格。
- [drawille](https://github.com/madbence/node-drawille) - 使用 Unicode 點字字元在終端機繪圖。
- [ascii-charts](https://github.com/jstrace/chart) - 終端機中的 ASCII 長條圖。
- [progress](https://github.com/visionmedia/node-progress) - 彈性的 ASCII 進度列。
- [insight](https://github.com/yeoman/insight) - 透過匿名回報使用指標至 Google Analytics，協助你了解工具的使用情況。
- [cli-cursor](https://github.com/sindresorhus/cli-cursor) - 切換 CLI 游標。
- [cli-columns](https://github.com/shannonmoeller/cli-columns) - 將文字清單排成欄位，並安全支援 Unicode 與 ANSI。
- [cfonts](https://github.com/dominikwilkowski/cfonts) - 炫酷的主控台 ASCII 字型。
- [multispinner](https://github.com/codekirei/node-multispinner) - 多個可同時執行且可個別控制的 CLI 載入動畫。
- [omelette](https://github.com/f/omelette) - Shell 自動補全輔助工具。
- [cross-env](https://github.com/kentcdodds/cross-env) - 跨平台設定環境變數。
- [shelljs](https://github.com/shelljs/shelljs) - 可攜式 Unix shell 命令。
- [sudo-block](https://github.com/sindresorhus/sudo-block) - 禁止使用者以 root 權限執行你的應用程式。
- [sparkly](https://github.com/sindresorhus/sparkly) - 產生迷你趨勢圖 `▁▂▃▅▂▇`。
- [Bit](https://github.com/teambit/bit) - 在不同儲存庫間建立、維護、尋找及使用小型模組與元件。
- [gradient-string](https://github.com/bokub/gradient-string) - 為終端機輸出加入精美色彩漸層。
- [oclif](https://github.com/oclif/oclif) - CLI 框架，內建解析器、自動文件產生、測試與外掛。
- [terminal-size](https://github.com/sindresorhus/terminal-size) - 可靠地取得終端機視窗大小。
- [Cliffy](https://github.com/drew-y/cliffy) - 互動式 CLI 框架。
- [zx](https://github.com/google/zx) - 使用 JavaScript 撰寫 shell 指令碼。

### 建置工具

- [parcel](https://github.com/parcel-bundler/parcel) - 極速、免設定的網頁應用程式打包工具。
- [webpack](https://github.com/webpack/webpack) - 為瀏覽器打包模組與資產。
- [rollup](https://github.com/rollup/rollup) - 新一代 ES2015 模組打包工具。
- [gulp](https://github.com/gulpjs/gulp) - 以程式碼而非設定為主的串流式快速建置系統。
- [Broccoli](https://github.com/broccolijs/broccoli) - 快速可靠的資產管線，支援固定時間重建與精簡的建置定義。
- [Brunch](https://github.com/brunch/brunch) - 前端網頁應用程式建置工具，具備簡潔的宣告式設定、快速增量編譯及具主見的工作流程。
- [FuseBox](https://github.com/fuse-box/fuse-box) - 快速建置系統，結合 webpack、JSPM 與 SystemJS 的優點，並原生支援 TypeScript。
- [pkg](https://github.com/vercel/pkg) - 將 Node.js 專案封裝成可執行檔。
- [Vite](https://github.com/vitejs/vite) - 前端建置工具，提供熱模組替換與靜態資產打包。

### 硬體

- [johnny-five](https://github.com/rwaldron/johnny-five) - 以 Firmata 為基礎的 Arduino 框架。
- [serialport](https://github.com/serialport/node-serialport) - 存取序列埠以讀寫資料。
- [usb](https://github.com/node-usb/node-usb) - USB 程式庫。
- [i2c-bus](https://github.com/fivdi/i2c-bus) - 存取 I2C 序列匯流排。
- [onoff](https://github.com/fivdi/onoff) - GPIO 存取與中斷偵測。
- [spi-device](https://github.com/fivdi/spi-device) - 存取 SPI 序列匯流排。
- [pigpio](https://github.com/fivdi/pigpio) - 在 Raspberry Pi 上快速控制 GPIO、PWM 與伺服機，並提供狀態變更通知及中斷處理。
- [gps](https://github.com/infusion/GPS.js) - 處理 GPS 接收器的 NMEA 解析器。
- [modbus-serial](https://github.com/yaacov/node-modbus-serial) - 純 JavaScript 實作的 MODBUS-RTU（序列埠與 TCP）。

### 範本引擎

- [marko](https://github.com/marko-js/marko) - 以 HTML 為基礎的範本引擎，可將範本編譯為 CommonJS 模組，並支援串流、非同步呈現與自訂標籤。
- [nunjucks](https://github.com/mozilla/nunjucks) - 範本引擎，支援繼承、非同步控制等功能（受 Jinja2 啟發）。
- [handlebars.js](https://github.com/handlebars-lang/handlebars.js) - Mustache 範本的超集，加入輔助函式等強大功能及更進階的區塊。
- [EJS](https://github.com/mde/ejs) - 簡單、沒有特定立場的範本語言。
- [Pug](https://github.com/pugjs/pug) - 深受 Haml 影響的高效能範本引擎。

### 網頁框架

- [Fastify](https://github.com/fastify/fastify) - 快速且額外負擔低的網頁框架。
- [Next.js](https://github.com/vercel/next.js) - 精簡的框架，用於伺服器端呈現的通用 JavaScript 網頁應用程式。
- [Nuxt.js](https://github.com/nuxt/nuxt.js) - 精簡的框架，用於伺服器端呈現的 Vue.js 應用程式。
- [Hapi](https://github.com/hapijs/hapi) - 用於建置應用程式與服務的框架。
- [Micro](https://github.com/vercel/micro) - 採用非同步方式的精簡微服務框架。
- [Koa](https://github.com/koajs/koa) - 由 Express 團隊打造，旨在為網頁應用程式與 API 提供更小巧、具表達力且穩健的基礎框架。
- [Express](https://github.com/expressjs/express) - 網頁應用程式框架，提供豐富功能以建置單頁、多頁及混合式網頁應用程式。
- [Feathers](https://github.com/feathersjs/feathers) - 秉持 Express 精神打造的微服務框架。
- [LoopBack](https://github.com/loopbackio/loopback-next) - 強大的框架，可建立 REST API，並輕鬆連接後端資料來源。
- [Meteor](https://github.com/meteor/meteor) - 極簡的資料庫無所不在、資料在線傳輸的純 JavaScript 網頁框架。*(你或許也會喜歡 [awesome-meteor](https://github.com/Urigo/awesome-meteor))*
- [Restify](https://github.com/restify/node-restify) - 讓你能建置正確的 REST 網頁服務。
- [ThinkJS](https://github.com/thinkjs/thinkjs) - 支援 ES2015+、WebSockets 與 REST API 的框架。
- [ActionHero](https://github.com/actionhero/actionhero) - 用於建立可重複使用且可擴充 API 的框架，支援 TCP socket、WebSockets 與 HTTP 用戶端。
- [seneca](https://github.com/senecajs/seneca) - 撰寫微服務的工具組。
- [AdonisJs](https://github.com/adonisjs/core) - 以穩固的相依性注入與 IoC 容器為基礎建置的真正 MVC 框架。
- [Moleculer](https://github.com/moleculerjs/moleculer) - 快速且功能強大的微服務框架。
- [Nest](https://github.com/nestjs/nest) - 受 Angular 啟發，用於建置高效且可擴充伺服器端應用程式的框架。
- [TypeGraphQL](https://github.com/MichalLytek/type-graphql) - 現代化框架，使用類別與裝飾器以 TypeScript 建置 GraphQL API。
- [Tinyhttp](https://github.com/tinyhttp/tinyhttp) - 現代且快速、類似 Express 的網頁框架。
- [Marble.js](https://github.com/marblejs/marble) - 以 TypeScript 與 RxJS 為基礎建置伺服器端應用程式的函數式反應式框架。
- [Lad](https://github.com/ladjs/lad) - 由曾任 Express 技術委員會與 Koa 成員的人員打造，整合網頁、API、工作與代理伺服器的框架。
- [Ts.ED](https://github.com/tsedio/tsed) - 直覺易用的 TypeScript 框架，以 Express.js 或 Koa.js 為基礎建置伺服器端應用程式。
- [Hono](https://github.com/honojs/hono) - 小巧快速的網頁框架。

### 文件

- [documentation.js](https://github.com/documentationjs/documentation) - 支援 ES2015+ 與 Flow 註解的 API 文件產生器。
- [Docco](https://github.com/jashkenas/docco) - 文件產生器，可產生 HTML 文件，將註解與程式碼交錯呈現。
- [JSDoc](https://github.com/jsdoc/jsdoc) - 類似 JavaDoc 或 PHPDoc 的 API 文件產生器。
- [Docusaurus](https://github.com/facebook/docusaurus) - 運用 React 與 Markdown 的文件網站產生器，並內建翻譯與版本管理功能。

### 檔案系統

- [del](https://github.com/sindresorhus/del) - 使用 glob 刪除檔案與資料夾。
- [globby](https://github.com/sindresorhus/globby) - 支援多種模式的 glob 檔案搜尋工具。
- [chokidar](https://github.com/paulmillr/chokidar) - 檔案系統監看工具，可穩定 `fs.watch` 與 `fs.watchFile` 的事件，並在 macOS 使用原生 `fsevents`。
- [find-up](https://github.com/sindresorhus/find-up) - 逐層向上搜尋父目錄中的檔案。
- [proper-lockfile](https://github.com/moxystudio/node-proper-lockfile) - 跨程序與跨機器的鎖定檔工具。
- [load-json-file](https://github.com/sindresorhus/load-json-file) - 讀取並解析 JSON 檔案。
- [write-json-file](https://github.com/sindresorhus/write-json-file) - 將 JSON 字串化並以原子方式寫入檔案。
- [fs-write-stream-atomic](https://github.com/npm/fs-write-stream-atomic) - 類似 `fs.createWriteStream()`，但具備原子性。
- [filenamify](https://github.com/sindresorhus/filenamify) - 將字串轉換成有效的檔名。
- [istextorbinary](https://github.com/bevry/istextorbinary) - 檢查檔案是文字檔還是二進位檔。
- [fs-jetpack](https://github.com/szwacz/fs-jetpack) - 徹底重新設計的檔案系統 API，方便日常使用。
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - `fs` 模組的額外方法。
- [package-directory](https://github.com/sindresorhus/package-directory) - 尋找 npm 套件的根目錄。
- [filehound](https://github.com/nspragg/filehound) - 彈性且流暢的檔案系統搜尋介面。
- [move-file](https://github.com/sindresorhus/move-file) - 移動檔案，甚至可跨裝置移動。
- [tempy](https://github.com/sindresorhus/tempy) - 取得隨機的暫存檔案或目錄路徑。

### 控制流程

- Promise
	- [pify](https://github.com/sindresorhus/pify) - 將回呼風格函式轉換成 Promise。
	- [delay](https://github.com/sindresorhus/delay) - 依指定時間延遲 Promise。
	- [promise-memoize](https://github.com/nodeca/promise-memoize) - 快取回傳 Promise 的函式，並支援到期與預先擷取。
	- [valvelet](https://github.com/lpinca/valvelet) - 限制回傳 Promise 函式的執行速率。
	- [p-map](https://github.com/sindresorhus/p-map) - 以並行方式對 Promise 集合套用 map。
	- [More…](https://github.com/sindresorhus/promise-fun)
- Observable
	- [RxJS](https://github.com/ReactiveX/RxJS) - 用於轉換、組合及查詢各種資料的函數式反應式程式庫。
	- [observable-to-promise](https://github.com/sindresorhus/observable-to-promise) - 將 Observable 轉換成 Promise。
	- [More…](https://github.com/sindresorhus/awesome-observables)
- 串流
	- [Highland.js](https://github.com/caolan/highland) - 只運用標準 JavaScript 與類似 Node.js 的串流，就能輕鬆管理同步與非同步程式碼。

### 串流

- [get-stream](https://github.com/sindresorhus/get-stream) - 將串流讀取為字串或緩衝區。
- [from2](https://github.com/hughsk/from2) - ReadableStream 的便利包裝器，靈感來自 `through2`。
- [into-stream](https://github.com/sindresorhus/into-stream) - 將緩衝區、字串、陣列或物件轉換成串流。
- [duplexify](https://github.com/mafintosh/duplexify) - 將可寫入與可讀取串流組合成單一 streams2 雙工串流。
- [pumpify](https://github.com/mafintosh/pumpify) - 將串流陣列組合成單一雙工串流。
- [peek-stream](https://github.com/mafintosh/peek-stream) - 轉換串流，可先查看第一行再決定如何解析。
- [binary-split](https://github.com/maxogden/binary-split) - 依換行符號或其他分隔符切分串流。
- [byline](https://github.com/jahewson/node-byline) - 極簡易用的逐行串流讀取器。
- [first-chunk-stream](https://github.com/sindresorhus/first-chunk-stream) - 轉換串流中的第一個區塊。
- [pad-stream](https://github.com/sindresorhus/pad-stream) - 填補串流中的每一行。
- [multistream](https://github.com/feross/multistream) - 將多個串流組合成單一串流。
- [readable-stream](https://github.com/nodejs/readable-stream) - 核心中 Streams2 與 Streams3 實作的鏡像版本。
- [through2-concurrent](https://github.com/almost/through2-concurrent) - 並行轉換物件串流。

### 即時通訊

- [µWebSockets](https://github.com/uNetworking/uWebSockets) - 高度可擴充的 WebSocket 伺服器與用戶端程式庫。
- [Socket.io](https://github.com/socketio/socket.io) - 實現即時、雙向且以事件為基礎的通訊。
- [Faye](https://github.com/faye/faye) - 以 Bayeux 通訊協定為基礎的即時用戶端－伺服器訊息匯流排。
- [SocketCluster](https://github.com/SocketCluster/socketcluster) - 可在多個 CPU 核心上執行的可擴充 HTTP 與 WebSocket 引擎。
- [Primus](https://github.com/primus/primus) - 即時框架的抽象層，可避免被特定模組綁定。
- [deepstream.io](https://github.com/deepstreamIO/deepstream.io-client-js) - 可擴充的即時微服務框架。
- [Kalm](https://github.com/kalm/kalm.js) - 低階 socket 路由器與中介軟體框架。
- [MQTT.js](https://github.com/mqttjs/MQTT.js) - MQTT 用戶端；這是一種建構於 TCP/IP 之上的發布／訂閱訊息通訊協定。
- [rpc-websockets](https://github.com/elpheria/rpc-websockets) - 透過 WebSockets 實作 JSON-RPC 2.0。
- [Aedes](https://github.com/moscajs/aedes) - 精簡的 MQTT 伺服器，可在任何串流伺服器上執行。

### 影像

- [sharp](https://github.com/lovell/sharp) - 最快速的 JPEG、PNG、WebP 與 TIFF 圖片縮放模組。
- [image-type](https://github.com/sindresorhus/image-type) - 偵測圖片類型。
- [image-dimensions](https://github.com/sindresorhus/image-dimensions) - 取得圖片尺寸。
- [lwip](https://github.com/EyalAr/lwip) - 不需 ImageMagick 的輕量級圖片處理器。
- [pica](https://github.com/nodeca/pica) - 以純 JavaScript 高品質快速縮放圖片（lanczos3）；不允許像素化時，可替代 canvas drawImage()。
- [jimp](https://github.com/oliver-moran/jimp) - 以純 JavaScript 進行圖片處理。
- [qrcode](https://github.com/soldair/node-qrcode) - QR Code 與條碼產生器。
- [ImageScript](https://github.com/matmen/ImageScript) - 使用 JavaScript 處理圖片，並運用 WebAssembly 提升效能。

### 文字

- [iconv-lite](https://github.com/ashtuchkin/iconv-lite) - 轉換字元編碼。
- [string-length](https://github.com/sindresorhus/string-length) - 取得字串的實際長度，正確計算補充平面符號並忽略 ANSI 跳脫碼。
- [camelcase](https://github.com/sindresorhus/camelcase) - 將以連字號、句點、底線或空格分隔的字串轉成 camelCase：foo-bar → fooBar。
- [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp) - 跳脫 RegExp 特殊字元。
- [splice-string](https://github.com/sindresorhus/splice-string) - 像 `Array#splice` 一樣移除或取代字串的一部分。
- [indent-string](https://github.com/sindresorhus/indent-string) - 縮排字串中的每一行。
- [strip-indent](https://github.com/sindresorhus/strip-indent) - 移除字串每一行開頭的空白。
- [detect-indent](https://github.com/sindresorhus/detect-indent) - 偵測程式碼的縮排方式。
- [he](https://github.com/mathiasbynens/he) - HTML 實體編碼與解碼器。
- [i18n-node](https://github.com/mashpie/i18n-node) - 使用動態 JSON 儲存資料的簡易翻譯模組。
- [babelfish](https://github.com/nodeca/babelfish) - 語法非常簡單的多元複數 i18n 工具。
- [matcher](https://github.com/sindresorhus/matcher) - 簡易萬用字元比對工具。
- [unhomoglyph](https://github.com/nodeca/unhomoglyph) - 正規化外觀相似的 Unicode 字元。
- [i18next](https://github.com/i18next/i18next) - 國際化框架。
- [nanoid](https://github.com/ai/nanoid) - 小巧、安全且適用於 URL 的唯一字串 ID 產生器。
- [StegCloak](https://github.com/kurolabs/stegcloak) - 將祕密資訊隱藏在字串中，且不易察覺。

### 數字

- [random-int](https://github.com/sindresorhus/random-int) - 產生隨機整數。
- [random-float](https://github.com/sindresorhus/random-float) - 產生隨機浮點數。
- [unique-random](https://github.com/sindresorhus/unique-random) - 產生連續不重複的隨機數。
- [round-to](https://github.com/sindresorhus/round-to) - 將數字四捨五入至指定小數位數：`1.234` → `1.2`。

### 數學

- [ndarray](https://github.com/scijs/ndarray) - 多維陣列。
- [mathjs](https://github.com/josdejong/mathjs) - 功能完整的數學程式庫。
- [math-clamp](https://github.com/sindresorhus/math-clamp) - 將數值限制在指定範圍內。
- [algebra](https://github.com/fibo/algebra) - 代數結構。
- [multimath](https://github.com/nodeca/multimath) - 以 WebAssembly 與 JavaScript 快速進行圖片數學運算的核心工具。

### 日期

- [Luxon](https://github.com/moment/luxon) - 處理日期與時間的程式庫。
- [date-fns](https://github.com/date-fns/date-fns) - 現代化日期工具。
- [Day.js](https://github.com/iamkun/dayjs) - 不可變日期程式庫，可替代 Moment.js。
- [dateformat](https://github.com/felixge/node-dateformat) - 日期格式化工具。
- [tz-format](https://github.com/samverschueren/tz-format) - 依時區格式化日期：`2015-11-30T10:40:35+01:00`。
- [cctz](https://github.com/floatdrop/node-cctz) - 快速解析、格式化及轉換日期時區。

### URL

- [normalize-url](https://github.com/sindresorhus/normalize-url) - 正規化 URL。
- [humanize-url](https://github.com/sindresorhus/humanize-url) - 將 URL 轉成易讀格式，例如 https://sindresorhus.com → sindresorhus.com。
- [url-unshort](https://github.com/nodeca/url-unshort) - 展開縮網址。
- [speakingurl](https://github.com/pid/speakingurl) - 將字串轉換成經轉寫的 slug。
- [linkify-it](https://github.com/markdown-it/linkify-it) - 可完整支援 Unicode 的連結模式偵測器。
- [url-pattern](https://github.com/snd/url-pattern) - 比使用正規表示式更簡單的 URL 與其他字串模式比對方式。
- [embedza](https://github.com/nodeca/embedza) - 使用 oEmbed、Open Graph 與中繼標籤資訊，從 URL 建立 HTML 片段／嵌入內容。

### 資料驗證

- [joi](https://github.com/sideway/joi) - JavaScript 物件的物件結構描述語言與驗證器。
- [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) - 使用程式碼產生以達到極速的 JSON Schema 驗證器。
- [property-validator](https://github.com/nettofarah/property-validator) - 適用於 Express 的簡易屬性驗證工具。
- [schema-inspector](https://github.com/schema-inspector/schema-inspector) - JSON API 清理與驗證工具。
- [ajv](https://github.com/ajv-validator/ajv) - 最快速的 JSON Schema 驗證器，支援 v5、v6 與 v7 提案。
- [Superstruct](https://github.com/ianstormtaylor/superstruct) - 在 JavaScript（及 TypeScript）中驗證資料的簡單、可組合方式。
- [yup](https://github.com/jquense/yup) - 物件結構描述驗證。
- [zod](https://github.com/colinhacks/zod) - 以 TypeScript 為優先，並能靜態推斷型別的結構描述驗證。

### 解析

- [remark](https://github.com/remarkjs/remark) - 以外掛驅動的 Markdown 處理器。
- [markdown-it](https://github.com/markdown-it/markdown-it) - 完全支援 CommonMark、擴充功能與語法外掛的 Markdown 解析器。
- [parse5](https://github.com/inikulin/parse5) - 快速且功能完整、符合規格的 HTML 解析器。
- [@parcel/css](https://github.com/parcel-bundler/parcel-css) - 以 Rust 撰寫的 CSS 解析器、轉換器與壓縮器。
- [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) - 移除 JSON 中的註解。
- [strip-css-comments](https://github.com/sindresorhus/strip-css-comments) - 移除 CSS 中的註解。
- [parse-json](https://github.com/sindresorhus/parse-json) - 解析 JSON，並提供更實用的錯誤訊息。
- [URI.js](https://github.com/medialize/URI.js) - URL 修改工具。
- [JSONStream](https://github.com/dominictarr/JSONStream) - 串流式 JSON.parse 與字串化工具。
- [neat-csv](https://github.com/sindresorhus/neat-csv) - 快速 CSV 解析器，提供上述工具的回呼介面。
- [csv-parser](https://github.com/mafintosh/csv-parser) - 旨在超越所有同類工具的串流式 CSV 解析器。
- [PEG.js](https://github.com/pegjs/pegjs) - 簡易解析器產生器，可產生快速解析器並提供出色的錯誤回報。
- [x-ray](https://github.com/matthewmueller/x-ray) - 網頁資料擷取工具。
- [nearley](https://github.com/kach/nearley) - 適用於 JavaScript 的簡單、快速且強大的解析工具。
- [binary-extract](https://github.com/juliangruber/binary-extract) - 無須解析整份 JSON，即可從緩衝區擷取值。
- [Stylecow](https://github.com/stylecow/stylecow) - 解析、操作並轉換現代 CSS，使其相容於所有瀏覽器；並可透過外掛擴充。
- [js-yaml](https://github.com/nodeca/js-yaml) - 極快速的 YAML 解析器。
- [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - 將 XML 轉換成 JavaScript 物件。
- [Jison](https://github.com/zaach/jison) - 易於使用的 JavaScript 解析器產生器，與 Bison、Yacc 等工具同源。
- [google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber) - 解析、格式化、儲存及驗證電話號碼。
- [ref](https://github.com/TooTallNate/ref) - 讀寫 Buffer 中的結構化二進位資料。
- [xlsx-populate](https://github.com/dtjohnson/xlsx-populate) - 讀取與寫入 Excel XLSX 檔案。
- [Chevrotain](https://github.com/Chevrotain/chevrotain) - 快速且功能豐富的 JavaScript 解析器建置工具組。
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) - 驗證並解析 XML。

### 易讀格式化

- [pretty-bytes](https://github.com/sindresorhus/pretty-bytes) - 將位元組數轉換成易讀字串：`1337` → `1.34 kB`。
- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - 將毫秒數轉換成易讀字串：`1337000000` → `15d 11h 23m 20s`。
- [ms](https://github.com/vercel/ms) - 輕量級毫秒轉換工具。
- [pretty-error](https://github.com/AriaMinaei/pretty-error) - 讓錯誤訊息更簡潔易讀。
- [read-art](https://github.com/Tjatse/node-readability) - 從任意網頁擷取易讀內容。

### 壓縮

- [yazl](https://github.com/thejoshwolfe/yazl) - 建立 ZIP 壓縮檔。
- [yauzl](https://github.com/thejoshwolfe/yauzl) - 解壓縮 ZIP 檔。
- [Archiver](https://github.com/archiverjs/node-archiver) - 支援 ZIP 與 TAR 的串流式封存檔產生介面。
- [pako](https://github.com/nodeca/pako) - 高速純 JavaScript zlib 移植版本（deflate、inflate、gzip）。
- [tar-stream](https://github.com/mafintosh/tar-stream) - 串流式 tar 解析器與產生器。另請參閱 [tar-fs](https://github.com/mafintosh/tar-fs)。

### 網路

- [get-port](https://github.com/sindresorhus/get-port) - 取得可用連接埠。
- [ipify](https://github.com/sindresorhus/ipify) - 取得你的公開 IP 位址。
- [getmac](https://github.com/bevry/getmac) - 取得電腦的 MAC 位址。
- [DHCP](https://github.com/infusion/node-dhcp) - DHCP 用戶端與伺服器。
- [netcat](https://github.com/roccomuso/netcat) - 純 JavaScript 實作的 Netcat。

### 資料庫

- 驅動程式
	- [PostgreSQL](https://github.com/brianc/node-postgres) - PostgreSQL 用戶端，採純 JavaScript 並支援原生 libpq 綁定。
	- [Redis](https://github.com/luin/ioredis) - Redis 用戶端。
	- [LevelUP](https://github.com/Level/levelup) - LevelDB。
	- [MySQL](https://github.com/mysqljs/mysql) - MySQL 用戶端。
	- [couchdb-nano](https://github.com/apache/couchdb-nano) - CouchDB 用戶端。
	- [Aerospike](https://github.com/aerospike/aerospike-client-nodejs) - Aerospike 用戶端。
	- [Couchbase](https://github.com/couchbase/couchnode) - Couchbase 用戶端。
	- [MongoDB](https://github.com/mongodb/node-mongodb-native) - MongoDB 驅動程式。
- ODM / ORM
	- [Sequelize](https://github.com/sequelize/sequelize) - 支援多種方言的 ORM，包括 PostgreSQL、SQLite、MySQL 等。
	- [Bookshelf](https://github.com/bookshelf/bookshelf) - 採用 Backbone.js 風格，適用於 PostgreSQL、MySQL 與 SQLite3 的 ORM。
	- [Mongoose](https://github.com/Automattic/mongoose) - 優雅的 MongoDB 物件建模工具。
	- [Waterline](https://github.com/balderdashy/waterline) - 與資料儲存系統無關的工具，大幅簡化與一或多個資料庫的互動。
	- [OpenRecord](https://github.com/PhilWaldmann/openrecord) - 適用於 PostgreSQL、MySQL、SQLite3 與 RESTful 資料儲存區的 ORM，類似 ActiveRecord。
	- [pg-promise](https://github.com/vitaly-t/pg-promise) - 使用 Promise 操作原生 SQL 的 PostgreSQL 框架。
	- [slonik](https://github.com/gajus/slonik) - 具備嚴格型別、詳細記錄與斷言功能的 PostgreSQL 用戶端。
	- [Objection.js](https://github.com/Vincit/objection.js) - 以 Knex SQL 查詢建構器打造的輕量級 ORM。
	- [TypeORM](https://github.com/typeorm/typeorm) - 適用於 PostgreSQL、MariaDB、MySQL、SQLite 等的 ORM。
	- [MikroORM](https://github.com/mikro-orm/mikro-orm) - 以 Data Mapper、Unit of Work 與 Identity Map 模式為基礎的 TypeScript ORM，支援 MongoDB、PostgreSQL、MySQL 與 SQLite。
	- [Prisma](https://github.com/prisma/prisma) - 現代化資料庫存取工具（ORM 替代方案）；以 TypeScript 自動產生具型別安全的查詢建構器，支援 PostgreSQL、MySQL 與 SQLite。
 	- [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) - 支援 PostgreSQL 等多種資料庫的 TypeScript ORM。
- 查詢建構器
	- [Knex](https://github.com/knex/knex) - 適用於 PostgreSQL、MySQL 與 SQLite3 的查詢建構器，兼具彈性、可攜性與易用性。
- 其他
	- [NeDB](https://github.com/louischatriot/nedb) - 以 JavaScript 撰寫的嵌入式持久化資料庫。
	- [Lowdb](https://github.com/typicode/lowdb) - 由 Lodash 驅動的小型 JavaScript 資料庫。
	- [Keyv](https://github.com/jaredwray/keyv) - 簡易鍵值儲存工具，支援多種後端。
	- [Finale](https://github.com/tommybananas/finale) - 為 Sequelize 模型產生 RESTful 端點。
	- [database-js](https://github.com/mlaanderson/database-js) - 支援多種資料庫的包裝器，提供類似 JDBC 的連線介面。
	- [Mongo Seeding](https://github.com/pkosiec/mongo-seeding) - 使用 JavaScript 與 JSON 檔案填入 MongoDB 資料庫。
	- [@databases](https://github.com/ForbesLindesay/atdatabases) - 使用純 SQL 查詢 PostgreSQL、MySQL 與 SQLite3，同時避免 SQL 插入攻擊。
	- [pg-mem](https://github.com/oguimbal/pg-mem) - 供測試使用的記憶體內 PostgreSQL 執行個體。

### 測試

- [AVA](https://github.com/avajs/ava) - 新世代測試執行器。
- [Mocha](https://github.com/mochajs/mocha) - 功能豐富的測試框架，讓非同步測試簡單又有趣。
- [nyc](https://github.com/istanbuljs/nyc) - 以 istanbul 為基礎且支援子程序的程式碼涵蓋率工具。
- [tap](https://github.com/tapjs/node-tap) - TAP 測試框架。
- [tape](https://github.com/substack/tape) - 產生 TAP 的測試工具。
- [power-assert](https://github.com/power-assert-js/power-assert) - 透過標準 assert 介面提供清楚詳盡的斷言訊息。
- [Mochify](https://github.com/mantoni/mochify.js) - 使用 Browserify、Mocha、PhantomJS 與 WebDriver 進行 TDD。
- [trevor](https://github.com/vadimdemedes/trevor) - 無須手動切換版本或推送至 Travis CI，即可使用多個 Node.js 版本執行測試。
- [loadtest](https://github.com/alexfernandez/loadtest) - 執行網頁應用程式的負載測試，並提供自動化 API。
- [Sinon.JS](https://github.com/sinonjs/sinon) - 測試用的間諜、存根與模擬工具。
- [navit](https://github.com/nodeca/navit) - PhantomJS／SlimerJS 包裝器，簡化瀏覽器測試指令碼撰寫。
- [Nock](https://github.com/nock/nock) - HTTP 模擬與預期條件工具。
- [intern](https://github.com/theintern/intern) - 程式碼測試工具組。
- [toxy](https://github.com/h2non/toxy) - 可自訂的 HTTP 代理程式，用於模擬故障情境與網路狀況。
- [hook-std](https://github.com/sindresorhus/hook-std) - 攔截並修改 stdout／stderr。
- [testen](https://github.com/egoist/testen) - 使用 NVM 在本機以多個 Node.js 版本執行測試。
- [Nightwatch](https://github.com/nightwatchjs/nightwatch) - 以 Selenium WebDriver 為基礎的自動化 UI 測試框架。
- [WebdriverIO](https://github.com/webdriverio/webdriverio) - 以 WebDriver 通訊協定為基礎的自動化測試工具。
- [Jest](https://github.com/facebook/jest) - 輕鬆進行 JavaScript 測試。
- [Vitest](https://github.com/vitest-dev/vitest) - 由 Vite 驅動的快速單元測試框架。
- [TestCafe](https://github.com/DevExpress/testcafe) - 自動化瀏覽器測試工具。
- [abstruse](https://github.com/bleenco/abstruse) - 持續整合伺服器。
- [CodeceptJS](https://github.com/codeceptjs/CodeceptJS) - 端對端測試工具。
- [Puppeteer](https://github.com/puppeteer/puppeteer) - 無頭 Chrome。
- [Playwright](https://github.com/microsoft/playwright) - 透過單一 API 操作無頭 Chromium、WebKit 與 Firefox。
- [nve](https://github.com/ehmicky/nve) - 在本機使用多個 Node.js 版本執行任意命令。
- [axe-core](https://github.com/dequelabs/axe-core) - 用於自動化網頁 UI 測試的無障礙引擎。
- [testcontainers-node](https://github.com/testcontainers/testcontainers-node) - 提供輕量、可拋棄式的常見資料庫、Selenium 網頁瀏覽器或任何可在 Docker 容器中執行的服務。

### 安全性

- [upash](https://github.com/simonepri/upash) - 統一支援所有密碼雜湊演算法的 API。
- [themis](https://github.com/cossacklabs/themis) - 多語言框架，讓常見加密方案易於使用：靜態資料保護、經驗證的資料交換、傳輸保護、驗證等。
- [GuardRails](https://github.com/apps/guardrails) - 在提取要求中提供安全性意見回饋的 GitHub 應用程式。
- [rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible) - 防範暴力破解與 DDoS 攻擊。
- [crypto-hash](https://github.com/sindresorhus/crypto-hash) - 非同步、非阻塞的雜湊工具。
- [jose-simple](https://github.com/davesag/jose-simple) - 使用 JOSE（JSON 物件簽章與加密）標準加密及解密資料。

### 基準測試

- [Benchmark.js](https://github.com/bestiejs/benchmark.js) - 支援高解析度計時器並能產生統計上顯著結果的基準測試程式庫。

### 壓縮器

- [babel-minify](https://github.com/babel/minify) - 以 Babel 工具鏈為基礎、理解 ES2015+ 的壓縮器。
- [UglifyJS2](https://github.com/mishoo/UglifyJS) - JavaScript 壓縮器。
- [clean-css](https://github.com/clean-css/clean-css) - CSS 壓縮器。
- [minimize](https://github.com/Swaagie/minimize) - HTML 壓縮器。
- [imagemin](https://github.com/imagemin/imagemin) - 圖片壓縮器。

### 驗證

- [Passport](https://github.com/jaredhanson/passport) - 簡單且不干擾應用程式的驗證工具。
- [Grant](https://github.com/simov/grant) - 適用於 Express、Koa、Hapi、Fastify、AWS Lambda、Azure、Google Cloud、Vercel 等平台的 OAuth 供應商。

### 授權

- [CASL](https://github.com/stalniy/casl) - 適用於 UI 與 API 的同構授權工具。
- [node-casbin](https://github.com/casbin/node-casbin) - 支援 ACL、RBAC 與 ABAC 等存取控制模型的授權程式庫。

### 電子郵件

- [Nodemailer](https://github.com/nodemailer/nodemailer) - 處理電子郵件的最快方式。
- [emailjs](https://github.com/eleith/emailjs) - 向任何 SMTP 伺服器傳送含附件的純文字／HTML 電子郵件。
- [email-templates](https://github.com/forwardemail/email-templates) - 建立、預覽並傳送自訂電子郵件範本。
- [MJML](https://github.com/mjmlio/mjml) - 旨在簡化回應式電子郵件製作的標記語言。
- [Forward Email](https://github.com/forwardemail/forwardemail.net) - 開放原始碼且可自行託管的電子郵件服務。

### 工作佇列

- [bull](https://github.com/OptimalBits/bull) - 持久化工作與訊息佇列。
- [agenda](https://github.com/agenda/agenda) - 以 MongoDB 為後端的工作排程工具。
- [idoit](https://github.com/nodeca/idoit) - 以 Redis 為後端、具備進階工作控制功能的佇列引擎。
- [node-resque](https://github.com/actionhero/node-resque) - 以 Redis 為後端的工作佇列。
- [rsmq](https://github.com/smrchy/rsmq) - 以 Redis 為後端的訊息佇列。
- [bee-queue](https://github.com/bee-queue/bee-queue) - 高效能、以 Redis 為後端的工作佇列。
- [RedisSMQ](https://github.com/weyoss/redis-smq) - 簡單、高效能且具備即時監控功能的 Redis 訊息佇列。
- [sqs-consumer](https://github.com/bbc/sqs-consumer) - 無須撰寫樣板程式碼，即可建置以 Amazon Simple Queue Service (SQS) 為基礎的應用程式。
- [better-queue](https://github.com/diamondio/better-queue) - 無法使用 Redis 時的簡易高效工作佇列。
- [bullmq](https://github.com/taskforcesh/bullmq) - 持久化工作與訊息佇列。
- [bree](https://github.com/breejs/bree) - 工作排程器，支援 worker threads、cron、日期與易讀語法。
- [graphile-worker](https://github.com/graphile/worker) - 高效能 PostgreSQL 工作佇列。

### Node.js 管理

- [n](https://github.com/tj/n) - Node.js 版本管理工具。
- [nave](https://github.com/isaacs/nave) - Node.js 虛擬環境。
- [nodeenv](https://github.com/ekalinin/nodeenv) - 與 Python virtualenv 相容的 Node.js 虛擬環境。
- [nvm for Windows](https://github.com/coreybutler/nvm-windows) - Windows 版本管理工具。
- [nodenv](https://github.com/nodenv/nodenv) - 類似 Ruby rbenv 的版本管理工具，支援自動切換版本。
- [fnm](https://github.com/Schniz/fnm) - 以 Rust 建置的跨平台 Node.js 版本管理工具。

### 跨平台整合

- [napi-rs](https://github.com/napi-rs/napi-rs) - 透過 Node-API 使用 Rust 建置已編譯 Node.js 附加元件的框架。
- [Neon](https://github.com/neon-bindings/neon) - 用於撰寫安全且快速原生 Node.js 模組的 Rust 綁定。
- [Edge.js](https://github.com/agracio/edge-js) - 在 Windows、macOS 與 Linux 上，於同一程序中執行 .NET 與 Node.js 程式碼。
- [DotNetJS](https://github.com/Elringus/DotNetJS) - 透過此 .NET 互通層，在 Node.js 中使用 .NET 程式庫。

### 自然語言處理

- [retext](https://github.com/retextjs/retext) - 可擴充的自然語言系統。
- [franc](https://github.com/wooorm/franc) - 偵測文字所使用的語言。
- [leven](https://github.com/sindresorhus/leven) - 使用 Levenshtein 距離演算法計算兩個字串的差異。
- [natural](https://github.com/NaturalNode/natural) - 自然語言處理工具。
- [nlp.js](https://github.com/axa-group/nlp.js) - 建置機器人，支援實體擷取、情緒分析、自動語言識別等功能。

### 程序管理

- [PM2](https://github.com/Unitech/pm2) - 進階程序管理工具。
- [nodemon](https://github.com/remy/nodemon) - 監看應用程式變更並自動重新啟動伺服器。
- [node-mac](https://github.com/coreybutler/node-mac) - 以原生 Mac 背景服務執行指令碼，並將記錄寫入主控台應用程式。
- [node-linux](https://github.com/coreybutler/node-linux) - 以原生系統服務執行指令碼，並將記錄寫入 syslog。
- [node-windows](https://github.com/coreybutler/node-windows) - 以原生 Windows 服務執行指令碼，並將記錄寫入事件檢視器。
- [supervisor](https://github.com/petruisfan/node-supervisor) - 指令碼當機時重新啟動，或在 `*.js` 檔案變更時重新啟動。
- [Phusion Passenger](https://github.com/phusion/passenger) - 可直接與 Nginx 整合的易用程序管理工具。

### 自動化

- [robotjs](https://github.com/octalmage/robotjs) - 桌面自動化：控制滑鼠、鍵盤並讀取螢幕。
- [nut.js](https://github.com/nut-tree/nut.js) - 跨平台原生 GUI 自動化／測試框架，支援圖片比對並可與 Jest 整合。

### AST

- [Acorn](https://github.com/acornjs/acorn) - 小巧快速的 JavaScript 解析器。
- [babel-parser](https://github.com/babel/babel/tree/master/packages/babel-parser) - Babel 使用的 JavaScript 解析器。

### 靜態網站產生器

- [DocPad](https://github.com/docpad/docpad) - 具備動態功能與龐大外掛生態系的靜態網站產生器。
- [docsify](https://github.com/docsifyjs/docsify) - 無須預先產生靜態 HTML 檔案的 Markdown 文件網站產生器。
- [Charge](https://github.com/brandonweiss/charge) - 採用 JSX 與 MDX、具主見且免設定的靜態網站產生器。

### 內容管理系統

- [KeystoneJS](https://github.com/keystonejs/keystone) - 以 Express 與 MongoDB 為基礎的 CMS 與網頁應用程式平台。
- [ApostropheCMS](https://github.com/apostrophecms/apostrophe) - 著重直覺式前端內容編輯與管理、以 Express 與 MongoDB 為基礎的內容管理系統。
- [Strapi](https://github.com/strapi/strapi) - 用於建置強大 API 的內容管理框架（無頭 CMS）。
- [Factor](https://github.com/FactorJS/factor) - Vue.js 儀表板框架與無頭 CMS。
- [AdminBro](https://github.com/SoftwareBrothers/adminjs) - 自動產生管理面板，為所有資源提供 CRUD 功能。
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - CMS 與無頭 GraphQL API。

### 論壇

- [nodeBB](https://github.com/NodeBB/NodeBB) - 為現代網路打造的論壇平台。

### 部落格

- [Ghost](https://github.com/TryGhost/Ghost) - 簡單且強大的出版平台。
- [Hexo](https://github.com/hexojs/hexo) - 快速、簡單且強大的部落格框架。

### 奇妙專案

- [cows](https://github.com/sindresorhus/cows) - ASCII 牛圖。
- [superb](https://github.com/sindresorhus/superb) - 取得 superb 等級的形容詞。
- [cat-names](https://github.com/sindresorhus/cat-names) - 取得常見的貓咪名稱。
- [dog-names](https://github.com/sindresorhus/dog-names) - 取得常見的狗狗名稱。
- [superheroes](https://github.com/sindresorhus/superheroes) - 取得超級英雄名稱。
- [supervillains](https://github.com/sindresorhus/supervillains) - 取得超級反派名稱。
- [cool-ascii-faces](https://github.com/maxogden/cool-ascii-faces) - 取得一些酷炫的 ASCII 表情。
- [cat-ascii-faces](https://github.com/melaniecebula/cat-ascii-faces) - `₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛ (=ↀωↀ=)✧ (^･o･^)ﾉ”`。
- [nerds](https://github.com/SkyHacks/nerds) - 取得《哈利波特》、《星際大戰》與《寶可夢》等宅文化主題的資料。

### 序列化

- [snappy](https://github.com/kesla/node-snappy) - Google Snappy 壓縮程式庫的原生綁定。
- [protobuf](https://github.com/protobufjs/protobuf.js) - Protocol Buffers 的實作。
- [compactr](https://github.com/compactr/compactr.js) - Compactr 通訊協定的實作。

### 雜項

- [execa](https://github.com/sindresorhus/execa) - 更好用的 `child_process`。
- [cheerio](https://github.com/cheeriojs/cheerio) - 快速、彈性且精簡的核心 jQuery 實作，專為伺服器端設計。
- [open](https://github.com/sindresorhus/open) - 開啟網站、檔案、可執行檔等項目。
- [hasha](https://github.com/sindresorhus/hasha) - 簡化雜湊處理，取得緩衝區、字串、串流或檔案的雜湊值。
- [dot-prop](https://github.com/sindresorhus/dot-prop) - 使用點路徑取得巢狀物件中的屬性。
- [onetime](https://github.com/sindresorhus/onetime) - 讓函式只執行一次。
- [mem](https://github.com/sindresorhus/mem) - 快取函式結果以提升連續呼叫速度的最佳化技術。
- [strip-bom](https://github.com/sindresorhus/strip-bom) - 移除字串／緩衝區／串流中的 UTF-8 位元組順序標記（BOM）。
- [os-locale](https://github.com/sindresorhus/os-locale) - 取得系統地區設定。
- [ssh2](https://github.com/mscdex/ssh2) - SSH2 用戶端與伺服器模組。
- [adit](https://github.com/markelog/adit) - 簡化 SSH 通道轉送。
- [file-type](https://github.com/sindresorhus/file-type) - 偵測 Buffer 的檔案類型。
- [Bottleneck](https://github.com/SGrondin/bottleneck) - 讓節流更簡單的速率限制器。
- [webworker-threads](https://github.com/audreyt/node-webworker-threads) - 使用原生執行緒的輕量級 Web Worker API 實作。
- [clipboardy](https://github.com/sindresorhus/clipboardy) - 存取系統剪貼簿（複製／貼上）。
- [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) - 輕鬆發布與安裝以二進位檔提供的 Node.js C++ 附加元件。
- [opencv](https://github.com/peterbraden/node-opencv) - OpenCV 的綁定；這是業界標準的電腦視覺程式庫。
- [dotenv](https://github.com/motdotla/dotenv) - 從 .env 檔案載入環境變數。
- [semver](https://github.com/npm/node-semver) - 語意化版本解析器。
- [nodegit](https://github.com/nodegit/nodegit) - Git 的原生綁定。
- [json-strictify](https://github.com/pigulla/json-strictify) - 安全地將值序列化為 JSON，避免資料遺失或陷入無窮迴圈。
- [jsdom](https://github.com/jsdom/jsdom) - HTML 與 DOM 的 JavaScript 實作。
- [@sindresorhus/is](https://github.com/sindresorhus/is) - 值的型別檢查工具。
- [env-dot-prop](https://github.com/simonepri/env-dot-prop) - 透過點路徑取得、設定或刪除 process.env 的巢狀屬性。
- [node-video-lib](https://github.com/gkozlenko/node-video-lib) - 以純 JavaScript 處理 MP4 與 FLV 影片檔，並為 HLS 串流建立 MPEG-TS 區塊的程式庫。
- [basic-ftp](https://github.com/patrickjuchli/basic-ftp) - FTP／FTPS 用戶端。
- [cashify](https://github.com/xxczaki/cashify) - 貨幣換算工具。
- [genepi](https://github.com/Geode-solutions/genepi) - 從 C++ 程式碼自動產生原生 Node.js 附加元件。
- [husky](https://github.com/typicode/husky) - 建立 Git hook 指令碼。
- [patch-package](https://github.com/ds300/patch-package) - 建立並保留對 npm 相依套件所做的修正。
- [editly](https://github.com/mifi/editly) - 宣告式影片編輯 API。
- [wild-wild-path](https://github.com/ehmicky/wild-wild-path) - 支援萬用字元與正規表示式的物件屬性路徑。
- [uint8array-extras](https://github.com/sindresorhus/uint8array-extras) - 處理 Uint8Array 與 Buffer 的實用工具。

## 套件管理員

- [npm](https://docs.npmjs.com/about-npm) - 預設的套件管理員。
- [pnpm](https://pnpm.io) - 有效節省磁碟空間的套件管理員。
- [yarn](https://yarnpkg.com) - 替代套件管理員。
- [bun](https://bun.sh) - 適用於 JavaScript 與 TypeScript 應用程式的全方位工具組。

## 資源

### 教學

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) - 精選與整理多種語言的 Node.js 最佳實務優質內容。
- [Nodeschool](https://github.com/nodeschool) - 透過互動式課程學習 Node.js。
- [The Art of Node](https://github.com/maxogden/art-of-node/#the-art-of-node) - Node.js 入門介紹。
- [module-best-practices](https://github.com/mattdesl/module-best-practices) - 撰寫新 npm 模組時的一些良好實務。
- [The Node Way](https://github.com/FredKSchott/the-node-way) - 一套完整的 Node.js 最佳實務哲學與指導原則，協助撰寫易於維護的模組、可擴充的應用程式，以及真正易讀的程式碼。
- [You Don't Know Node.js](https://github.com/azat-co/you-dont-know-node) - Node.js 核心功能與非同步 JavaScript 入門。
- [Portable Node.js guide](https://github.com/ehmicky/cross-platform-node-guide) - 撰寫可攜式／跨平台 Node.js 程式碼的實用指南。
- [Build a real web app with no frameworks](https://frameworkless.js.org/course) - 一系列影片教學與直播，教你運用少量簡單程式庫與 Node.js 核心模組，建置並部署真正可運作的網頁應用程式。

### 探索

- [npms](https://npms.io) - 出色的套件搜尋服務，使用[多種指標](https://npms.io/about)深入分析套件品質。
- [npm addict](https://npmaddict.com) - 每日為你推薦 npm 套件。

### 文章

- [Error Handling in Node.js](https://sematext.com/blog/node-js-error-handling/)
- [Teach Yourself Node.js in 10 Steps](https://ponyfoo.com/articles/teach-yourself-nodejs-in-10-steps)
- [Mastering the filesystem in Node.js](https://medium.com/@yoshuawuyts/mastering-the-filesystem-in-node-js-4706b7cb0801)
- [Semver: A Primer](https://nodesource.com/blog/semver-a-primer/)
- [Semver: Tilde and Caret](https://nodesource.com/blog/semver-tilde-and-caret/)
- [Why Asynchronous?](https://nodesource.com/blog/why-asynchronous/)
- [Understanding the Node.js Event Loop](https://nodesource.com/blog/understanding-the-nodejs-event-loop/)
- [Understanding Object Streams](https://nodesource.com/blog/understanding-object-streams/)
- [Using Express to Quickly Build a GraphQL Server](https://snipcart.com/blog/graphql-nodejs-express-tutorial)

### 電子報

- [Node Weekly](https://nodeweekly.com) - 每週彙整 Node.js 新聞與文章的電子郵件。

### 影片

- [Introduction to Node.js with Ryan Dahl](https://www.youtube.com/watch?v=jo_B4LTHi3I)
- [Hands on with Node.js](https://learn.bevry.me/hands-on-with-node.js/preface)
- [V8 Garbage Collector](https://v8.dev/blog/trash-talk) - 深入介紹 V8 垃圾回收器。
- [10 Things I Regret About Node.js by Ryan Dahl](https://www.youtube.com/watch?v=M3BM9TB-8yA) - Node.js 創作者分享其部分限制的精闢演講。
- [Mastering REST APIs in Node.js: Zero-To-Hero](https://www.manning.com/livevideo/mastering-rest-apis-in-nodejs) - 教你如何使用 Node.js 建置 REST API 的影片課程。
- [Make a vanilla Node.js REST API](https://www.youtube.com/watch?v=_1xa8Bsho6A) - 不使用 Express 等框架來建置 REST API。
- [Google I/O 2009 - V8: High Performance JavaScript Engine](https://www.youtube.com/watch?v=FrufJFBSoQY) - V8 架構基礎，以及它如何最佳化 JavaScript 執行。
- [Google I/O 2012 - Breaking the JavaScript Speed Limit with V8](https://www.youtube.com/watch?v=UJPdhx5zTaw) - V8 如何最佳化 JavaScript 執行。
- [Google I/O 2013 - Accelerating Oz with V8: Follow the Yellow Brick Road to JavaScript Performance](https://www.youtube.com/watch?v=VhpdsjBUS3g) - 如何運用 V8 知識找出應用程式瓶頸並最佳化效能。
- [Node.js Internal Architecture | Ignition, Turbofan, Libuv](https://www.youtube.com/watch?v=OCjvhCFFPTw) - Node.js 內部運作方式，著重介紹 V8 與 libuv。
- [Introduction to libuv: What's a Unicorn Velociraptor?](https://www.youtube.com/watch?v=_c51fcXRLGw) - 介紹 `libuv` 架構、執行緒集區與事件迴圈，並搭配原始碼講解。
- [libuv Cross platform asynchronous i/o](https://www.youtube.com/watch?v=kCJ3PFU8Ke8) - 深入介紹 `libuv` 架構，例如實際使用執行緒的部分。
- [You Don't Know Node - ForwardJS San Francisco](https://www.youtube.com/watch?v=oPo4EQmkjvY) - 透過有關 V8、libuv、事件迴圈、模組、串流與叢集的問答，說明 Node.js 內部運作。

### 書籍

- [Node.js in Action](https://www.manning.com/books/node-js-in-action-second-edition)
- [Node.js in Practice](https://www.amazon.com/Node-js-Practice-Alex-R-Young/dp/1617290939)
- [Mastering Node](https://visionmedia.github.io/masteringnode/)
- [Node.js 8 the Right Way](https://pragprog.com/book/jwnode2/node-js-8-the-right-way/)
- [Professional Node.js: Building JavaScript Based Scalable Software](https://www.amazon.com/Professional-Node-js-Building-JavaScript-Scalable-ebook/dp/B009L7QETY/)
- [Secure Your Node.js Web Application](https://www.amazon.com/Secure-Your-Node-js-Web-Application/dp/1680500856)
- [Express in Action](https://www.manning.com/books/express-in-action)
- [Practical Modern JavaScript](https://www.amazon.com/Practical-Modern-JavaScript-Dive-Future/dp/149194353X)
- [Mastering Modular JavaScript](https://www.amazon.com/Mastering-Modular-JavaScript-Nicolas-Bevacqua/dp/1491955686/)
- [Get Programming with Node.js](https://www.manning.com/books/get-programming-with-node-js)
- [Node.js Cookbook](https://www.amazon.com/dp/1838558756)
- [Node.js Design Patterns](https://www.nodejsdesignpatterns.com)

### 部落格

- [Node.js blog](https://nodejs.org/en/blog/)
- [webapplog.com](https://webapplog.com/tag/node-js/) - 由《Practical Node.js》與《Pro Express.js》作者 Azat Mardan 撰寫的 Node.js 與 JavaScript 部落格文章。

### 課程

- [Learn to build apps and APIs with Node.js](https://learnnode.com/friend/AWESOME) - Wes Bos 主講的影片課程。
- [Real Time Web with Node.js](https://www.pluralsight.com/courses/code-school-real-time-web-with-nodejs)
- [Learn and Understand Node.js](https://www.udemy.com/course/understand-nodejs/)
- [Node.js Full Stack Developer Course](https://kinsta.com/academy/course/node-js-full-stack-developer/)

### 速查表

- [Express.js](https://github.com/azat-co/cheatsheets/tree/master/express4)
- [Stream FAQs](https://github.com/stephenplusplus/stream-faqs) - 回答常見串流問題，涵蓋分頁、事件等主題。
- [Strong Node.js](https://github.com/jesusprubio/strong-node) - Node.js 網頁服務原始碼安全分析檢查清單。

### 工具

- [OctoLinker](https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp) - Chrome 擴充功能，可在 GitHub 的 package.json、.js、.jsx、.coffee 與 .md 檔案中將相依套件名稱轉為連結。
- [npm-hub](https://chrome.google.com/webstore/detail/npmhub/kbbbjimdjbjclaebffknlabpogocablj) - Chrome 擴充功能，可在儲存庫 README 底部顯示 npm 相依套件。
- [RunKit](https://runkit.com) - 在任何網站嵌入 Node.js 執行環境。
- [github-npm-stats](https://chrome.google.com/webstore/detail/github-npm-stats/oomfflokggoffaiagenekchfnpighcef) - Chrome 擴充功能，可在 GitHub 顯示 npm 下載統計資料。
- [npm semver calculator](https://semver.npmjs.com) - 以視覺化方式探索 semver 範圍符合哪些套件版本。
- [CodeSandbox](https://codesandbox.io/templates/node-http-server) - 線上 IDE 與原型開發工具。
- [Amplication](https://github.com/amplication/amplication) - 自動產生完整可用的應用程式。
- [RunJS](https://runjs.app) - 桌面版 JavaScript 練習環境。

### 社群

- [Stack Overflow](https://stackoverflow.com/questions/tagged/node.js)
- [Reddit](https://www.reddit.com/r/node)
- [Twitter](https://twitter.com/nodejs)
- [Hashnode](https://hashnode.com/n/nodejs)
- [Discord](https://discord.com/invite/96WGtJt)

### 雜項

- [nodebots](https://nodebots.io) - 由 JavaScript 驅動的機器人。
- [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) - 用來快速開始建立 Node 模組的樣板。
- [modern-node](https://github.com/sheerun/modern-node) - 使用 Jest、Prettier、ESLint 與 Standard 建立 Node 模組的工具組。
- [generator-nm](https://github.com/sindresorhus/generator-nm) - 快速建立 Node 模組的樣板產生器。
- [Microsoft Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines) - 在 Microsoft 平台上使用 Node.js 的技巧、訣竅與資源。
- [Module Requests & Ideas](https://github.com/sindresorhus/project-ideas) - 提出你希望存在的 JavaScript 模組需求，或取得模組構想。
- [v8-perf](https://github.com/thlorenz/v8-perf) - V8 及其 Node.js 效能相關筆記與資源。

## 相關清單

- [awesome-npm](https://github.com/sindresorhus/awesome-npm) - 使用 npm 的資源與技巧。
- [awesome-cross-platform-nodejs](https://github.com/bcoe/awesome-cross-platform-nodejs) - 撰寫與測試跨平台程式碼的資源。
