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
				<a href="https://github.com/sponsors/sindresorhus">我的开源工作得到社区的支持</a>
			</sup>
		</p>
		<sup>特别感谢：</sup>
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
			<b>快速的远程容器构建和 GitHub Actions 运行器。</b>
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
		<sub>只需输入 <a href="https://node.cool"><code>node.cool</code></a> 即可访问此页面。欢迎在 <a href="https://twitter.com/sindresorhus">Twitter</a> 上关注我。</sub>
	</p>
	<br>
	<p>
		<a href="https://en.wikipedia.org/wiki/Node.js">Node.js</a> 是一个开源、跨平台的 JavaScript 运行时，可用于编写服务器和命令行工具。
	</p>
	<br>
</div>

## 目录

- [官方资源](#official)
- [软件包](#packages)
	- [疯狂实验](#mad-science)
	- [命令行应用](#command-line-apps)
	- [函数式编程](#functional-programming)
	- [HTTP](#http)
	- [调试 / 性能分析](#debugging--profiling)
	- [日志记录](#logging)
	- [命令行工具](#command-line-utilities)
	- [构建工具](#build-tools)
	- [硬件](#hardware)
	- [模板引擎](#templating)
	- [Web 框架](#web-frameworks)
	- [文档](#documentation)
	- [文件系统](#filesystem)
	- [控制流](#control-flow)
	- [流](#streams)
	- [实时通信](#real-time)
	- [图像](#image)
	- [文本](#text)
	- [数字](#number)
	- [数学](#math)
	- [日期](#date)
	- [URL](#url)
	- [数据验证](#data-validation)
	- [解析](#parsing)
	- [易读格式化](#humanize)
	- [压缩](#compression)
	- [网络](#network)
	- [数据库](#database)
	- [测试](#testing)
	- [安全](#security)
	- [基准测试](#benchmarking)
	- [压缩器](#minifiers)
	- [身份验证](#authentication)
	- [授权](#authorization)
	- [电子邮件](#email)
	- [任务队列](#job-queues)
	- [Node.js 管理](#nodejs-management)
	- [跨平台集成](#cross-platform-integration)
	- [自然语言处理](#natural-language-processing)
	- [进程管理](#process-management)
	- [自动化](#automation)
	- [AST](#ast)
	- [静态站点生成器](#static-site-generators)
	- [内容管理系统](#content-management-systems)
	- [论坛](#forum)
	- [博客](#blogging)
	- [奇妙项目](#weird)
	- [序列化](#serialization)
	- [杂项](#miscellaneous)
- [包管理器](#package-manager)
- [资源](#resources)
	- [教程](#tutorials)
	- [发现](#discovery)
	- [文章](#articles)
	- [新闻邮件](#newsletters)
	- [视频](#videos)
	- [书籍](#books)
	- [博客](#blogs)
	- [课程](#courses)
	- [速查表](#cheatsheets)
	- [工具](#tools)
	- [社区](#community)
	- [杂项](#miscellaneous-1)
- [相关列表](#related-lists)

## 官方资源

- [网站](https://nodejs.org)
- [文档](https://nodejs.org/dist/latest/docs/api/)
- [仓库](https://github.com/nodejs/node)

## 软件包

### 疯狂实验

- [webtorrent](https://github.com/webtorrent/webtorrent) - 适用于 Node.js 和浏览器的种子流式传输客户端。
- [peerflix](https://github.com/mafintosh/peerflix) - 种子流式传输客户端。
- [ipfs](https://github.com/ipfs/helia) - 分布式文件系统，旨在让所有计算设备连接到同一文件系统。
- [stackgl](https://github.com/stackgl) - 基于 browserify 和 npm 构建的开放式 WebGL 软件生态系统。
- [peerwiki](https://github.com/mafintosh/peerwiki) - 通过 BitTorrent 获取完整的维基百科。
- [peercast](https://github.com/mafintosh/peercast) - 将种子视频流式传输到 Chromecast。
- [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib) - 简洁、易读且经过验证的 Bitcoin 库。
- [Bitcore](https://github.com/bitpay/bitcore) - 纯粹而强大的 Bitcoin 库。
- [PDFKit](https://github.com/foliojs/pdfkit) - PDF 生成库。
- [turf](https://github.com/Turfjs/turf) - 模块化的地理空间处理与分析引擎。
- [webcat](https://github.com/mafintosh/webcat) - 通过 WebRTC 在网络上建立点对点管道，并使用你的 GitHub 公钥/私钥进行身份验证。
- [NodeOS](https://github.com/NodeOS/NodeOS) - 首个由 npm 驱动的操作系统。
- [YodaOS](https://github.com/yodaos-project/yodaos) - AI 操作系统。
- [Brain.js](https://github.com/BrainJS/brain.js) - 机器学习框架。
- [Pipcook](https://github.com/alibaba/pipcook) - 用于创建机器学习流水线的前端算法框架。
- [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) - 图论（又称网络）的建模与分析。
- [js-git](https://github.com/creationix/js-git) - Git 的 JavaScript 实现。
- [xlsx](https://github.com/SheetJS/sheetjs) - 纯 JavaScript Excel 电子表格读写器。
- [isomorphic-git](https://github.com/isomorphic-git/isomorphic-git) - 纯 JavaScript 实现的 Git。

### 命令行应用

- [np](https://github.com/sindresorhus/np) - 更好用的 `npm publish`。
- [npm-name](https://github.com/sindresorhus/npm-name) - 检查 npm 上的软件包名称是否可用。
- [gh-home](https://github.com/sindresorhus/gh-home) - 打开当前目录所对应仓库的 GitHub 页面。
- [npm-home](https://github.com/sindresorhus/npm-home) - 打开软件包的 npm 页面。
- [trash](https://github.com/sindresorhus/trash) - `rm` 的更安全替代方案。
- [speed-test](https://github.com/sindresorhus/speed-test) - 测试你的互联网连接速度和延迟。
- [pageres](https://github.com/sindresorhus/pageres) - 截取网站屏幕截图。
- [cpy](https://github.com/sindresorhus/cpy) - 复制文件。
- [vtop](https://github.com/MrRio/vtop) - 更好用的 top，带有直观的图表。
- [empty-trash](https://github.com/sindresorhus/empty-trash) - 清空废纸篓。
- [is-up](https://github.com/sindresorhus/is-up) - 检查网站是否在线。
- [is-online](https://github.com/sindresorhus/is-online) - 检查互联网连接是否可用。
- [public-ip](https://github.com/sindresorhus/public-ip) - 获取你的公网 IP 地址。
- [clipboard-cli](https://github.com/sindresorhus/clipboard-cli) - 在终端中复制和粘贴。
- [XO](https://github.com/xojs/xo) - 使用 JavaScript happiness 风格强制执行严格的代码风格。
- [ESLint](https://github.com/eslint/eslint) - 适用于 JavaScript 的可插拔代码检查工具。
- [David](https://github.com/alanshaw/david) - 告知你的软件包 npm 依赖项是否已过时。
- [http-server](https://github.com/http-party/http-server) - 简单、零配置的命令行 HTTP 服务器。
- [Live Server](https://github.com/tapio/live-server) - 具备实时重载功能的开发用 HTTP 服务器。
- [bcat](https://github.com/kessler/node-bcat) - 将命令输出通过管道传送到网页浏览器。
- [normit](https://github.com/pawurb/normit) - 在终端中使用 Google 翻译并进行语音合成。
- [fkill](https://github.com/sindresorhus/fkill-cli) - 出色地终止进程，且支持跨平台。
- [pjs](https://github.com/danielstjules/pjs) - 可通过管道使用的 JavaScript。在终端中快速筛选、映射和归约数据。
- [license-checker](https://github.com/davglass/license-checker) - 检查应用依赖项的许可证。
- [browser-run](https://github.com/juliangruber/browser-run) - 轻松在浏览器环境中运行代码。
- [tmpin](https://github.com/sindresorhus/tmpin) - 为任何接受文件输入的 CLI 应用添加标准输入支持。
- [wallpaper](https://github.com/sindresorhus/wallpaper) - 更改桌面壁纸。
- [pen](https://github.com/hatashiro/pen) - 在浏览器中实时预览 Markdown，可直接从你喜爱的编辑器启动。
- [dark-mode](https://github.com/sindresorhus/dark-mode) - 切换 macOS 深色模式。
- [Jsome](https://github.com/Javascipt/Jsome) - 以可配置的颜色和缩进美观地打印 JSON。
- [mobicon](https://github.com/samverschueren/mobicon-cli) - 移动应用图标生成器。
- [mobisplash](https://github.com/samverschueren/mobisplash-cli) - 移动应用启动画面生成器。
- [diff2html-cli](https://github.com/rtfpessoa/diff2html-cli) - 将 Git diff 美化并转换为 HTML。
- [trymodule](https://github.com/victorb/trymodule) - 在终端中试用 npm 软件包。
- [jscpd](https://github.com/kucherenko/jscpd) - 源代码复制/粘贴检测器。
- [atmo](https://github.com/Raathigesh/Atmo) - 服务端 API 模拟工具。
- [auto-install](https://github.com/siddharthkp/auto-install) - 在编写代码时自动安装依赖项。
- [cost-of-modules](https://github.com/siddharthkp/cost-of-modules) - 找出哪些依赖项拖慢了你的速度。
- [localtunnel](https://github.com/localtunnel/localtunnel) - 将本地主机暴露到互联网。
- [svg-term-cli](https://github.com/marionebl/svg-term-cli) - 通过 SVG 分享终端会话。
- [gtop](https://github.com/aksakalli/gtop) - 适用于终端的系统监控仪表板。
- [themer](https://github.com/themerdev/themer) - 为编辑器、终端、壁纸、Slack 等生成主题。
- [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - 直接在终端中为你的代码生成精美图片。
- [cash-cli](https://github.com/xxczaki/cash-cli) - 在 170 种货币之间进行换算。
- [taskbook](https://github.com/klaussinani/taskbook) - 适用于命令行工作环境的任务、看板和笔记。
- [discharge](https://github.com/brandonweiss/discharge) - 轻松将静态网站部署到 Amazon S3。
- [npkill](https://github.com/voidcosmos/npkill) - 轻松查找并删除陈旧、占用空间大的 node_modules 文件夹。

### 函数式编程

- [lodash](https://github.com/lodash/lodash) - 功能一致、可定制、高性能且提供额外功能的实用工具库。比 Underscore.js 更好、更快。
- [immutable](https://github.com/immutable-js/immutable-js) - 不可变数据集合。
- [Ramda](https://github.com/ramda/ramda) - 注重灵活函数组合的实用工具库，通过自动柯里化和反转参数顺序实现组合；不会修改数据。
- [Mout](https://github.com/mout/mout) - 实用工具库。与其他现有方案最大的不同是，你可以只加载所需的模块/函数，没有额外开销。
- [RxJS](https://github.com/reactivex/rxjs) - 用于转换、组合和查询各种类型数据的函数式响应式库。
- [Kefir.js](https://github.com/kefirjs/kefir) - 专注于高性能和低内存占用的响应式库。

### HTTP

- [got](https://github.com/sindresorhus/got) - 内置 `http` 模块更好用的接口。
- [undici](https://github.com/nodejs/undici) - 从头编写、零依赖的高性能 HTTP 客户端。
- [ky-universal](https://github.com/sindresorhus/ky-universal) - 基于 Fetch 的通用 HTTP 客户端。
- [node-fetch](https://github.com/node-fetch/node-fetch) - 适用于 Node.js 的 `window.fetch`。
- [axios](https://github.com/axios/axios) - 基于 Promise 的 HTTP 客户端（也适用于浏览器）。
- [superagent](https://github.com/visionmedia/superagent) - HTTP 请求库。
- [http-fake-backend](https://github.com/micromata/http-fake-backend) - 通过可配置的路由提供 JSON 文件或 JavaScript 对象的内容，构建虚拟后端。
- [cacheable-request](https://github.com/lukechilds/cacheable-request) - 为原生 HTTP 请求封装符合 RFC 标准的缓存支持。
- [gotql](https://github.com/khaosdoctor/gotql) - 基于 [got](https://github.com/sindresorhus/got) 构建的 GraphQL 请求库。
- [global-agent](https://github.com/gajus/global-agent) - 可通过环境变量配置的全局 HTTP/HTTPS 代理代理器。
- [smoke](https://github.com/sinedied/smoke) - 基于文件的 HTTP 模拟服务器，支持录制功能。
- [purest](https://github.com/simov/purest) - REST 客户端。

### 调试 / 性能分析

- [debug](https://github.com/debug-js/debug) - 轻量级调试工具。
- [why-is-node-running](https://github.com/mafintosh/why-is-node-running) - Node.js 正在运行，但你不知道原因？
- [njsTrace](https://github.com/valyouw/njstrace) - 为代码插桩并跟踪执行过程，查看所有函数调用、参数、返回值，以及每个函数耗费的时间。
- [vstream](https://github.com/joyent/node-vstream) - 可插桩的流混入工具，用于检查流组成的流水线。
- [stackman](https://github.com/watson/stackman) - 通过代码片段和其他实用信息增强错误堆栈跟踪。
- [locus](https://github.com/alidavut/locus) - 在运行时启动 REPL，并可访问所有变量。
- [0x](https://github.com/davidmarkclements/0x) - 火焰图性能分析工具。
- [ctrace](https://github.com/automation-stack/ctrace) - 格式清晰、经过改进的系统调用和信号跟踪工具。
- [leakage](https://github.com/andywer/leakage) - 编写内存泄漏测试。
- [llnode](https://github.com/nodejs/llnode) - 事后分析工具，可检查对象并从崩溃的 Node.js 进程中获取信息。
- [thetool](https://github.com/sfninja/thetool) - 以兼容 Chrome DevTools 的格式捕获应用的 CPU、内存及其他性能分析数据。
- [swagger-stats](https://github.com/slanatech/swagger-stats) - 跟踪 API 调用，并监控 API 性能、运行状况和使用情况指标。
- [NiM](https://github.com/june07/nim) - 管理 DevTools 调试工作流。
- [dats](https://github.com/immobiliare/dats) - 极简、零依赖的 [StatsD](https://github.com/statsd/statsd) 客户端。

### 日志记录

- [pino](https://github.com/pinojs/pino) - 受 Bunyan 启发的超高速日志记录器。
- [winston](https://github.com/winstonjs/winston) - 支持多种传输方式的异步日志库。
- [console-log-level](https://github.com/watson/console-log-level) - 极其简单的日志记录器，支持日志级别和自定义前缀。
- [storyboard](https://github.com/guigrpa/storyboard) - 端到端、分层、实时且丰富多彩的日志和事件记录。
- [consola](https://github.com/unjs/consola) - 控制台日志记录器。

### 命令行工具

- [chalk](https://github.com/chalk/chalk) - 让终端字符串样式设置变得得心应手。
- [meow](https://github.com/sindresorhus/meow) - CLI 应用辅助工具。
- [yargs](https://github.com/yargs/yargs) - 命令行解析器，可自动生成优雅的用户界面。
- [ora](https://github.com/sindresorhus/ora) - 优雅的终端加载指示器。
- [get-stdin](https://github.com/sindresorhus/get-stdin) - 更轻松地读取标准输入。
- [log-update](https://github.com/sindresorhus/log-update) - 通过覆盖终端中的先前输出内容来记录信息，适用于渲染进度条、动画等。
- [Ink](https://github.com/vadimdemedes/ink) - 用于构建交互式命令行应用的 React。
- [listr2](https://github.com/listr2/listr2) - 终端任务列表。
- [conf](https://github.com/sindresorhus/conf) - 简单的应用或模块配置管理。
- [ansi-escapes](https://github.com/sindresorhus/ansi-escapes) - 用于操作终端的 ANSI 转义码。
- [log-symbols](https://github.com/sindresorhus/log-symbols) - 适用于各种日志级别的彩色符号。
- [figures](https://github.com/sindresorhus/figures) - 带有 Windows CMD 回退方案的 Unicode 符号。
- [boxen](https://github.com/sindresorhus/boxen) - 在终端中创建边框框。
- [terminal-link](https://github.com/sindresorhus/terminal-link) - 在终端中创建可点击链接。
- [terminal-image](https://github.com/sindresorhus/terminal-image) - 在终端中显示图像。
- [string-width](https://github.com/sindresorhus/string-width) - 获取字符串的视觉宽度，即显示该字符串所需的列数。
- [cli-truncate](https://github.com/sindresorhus/cli-truncate) - 将字符串截断到终端中的指定宽度。
- [blessed](https://github.com/chjj/blessed) - 类似 Curses 的库。
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - 交互式命令行提示工具。
- [yn](https://github.com/sindresorhus/yn) - 解析 yes/no 类型的值。
- [cli-table3](https://github.com/cli-table/cli-table3) - 美观的 Unicode 表格。
- [drawille](https://github.com/madbence/node-drawille) - 使用 Unicode 盲文字符在终端中绘图。
- [ascii-charts](https://github.com/jstrace/chart) - 终端中的 ASCII 条形图。
- [progress](https://github.com/visionmedia/node-progress) - 灵活的 ASCII 进度条。
- [insight](https://github.com/yeoman/insight) - 通过匿名向 Google Analytics 报告使用指标，帮助你了解工具的使用情况。
- [cli-cursor](https://github.com/sindresorhus/cli-cursor) - 切换 CLI 光标的显示状态。
- [cli-columns](https://github.com/shannonmoeller/cli-columns) - 按列排列的 Unicode 和兼容 ANSI 的文本列表。
- [cfonts](https://github.com/dominikwilkowski/cfonts) - 适用于控制台的炫酷 ASCII 字体。
- [multispinner](https://github.com/codekirei/node-multispinner) - 可同时运行并单独控制多个 CLI 加载指示器。
- [omelette](https://github.com/f/omelette) - Shell 自动补全辅助工具。
- [cross-env](https://github.com/kentcdodds/cross-env) - 跨平台设置环境变量。
- [shelljs](https://github.com/shelljs/shelljs) - 可移植的 Unix shell 命令。
- [sudo-block](https://github.com/sindresorhus/sudo-block) - 阻止用户以 root 权限运行你的应用。
- [sparkly](https://github.com/sindresorhus/sparkly) - 生成迷你图：`▁▂▃▅▂▇`。
- [Bit](https://github.com/teambit/bit) - 在多个代码仓库之间创建、维护、查找和使用小型模块与组件。
- [gradient-string](https://github.com/bokub/gradient-string) - 为终端输出添加精美的颜色渐变。
- [oclif](https://github.com/oclif/oclif) - 功能齐全的 CLI 框架，包含解析器、自动生成文档、测试和插件。
- [terminal-size](https://github.com/sindresorhus/terminal-size) - 可靠地获取终端窗口尺寸。
- [Cliffy](https://github.com/drew-y/cliffy) - 用于构建交互式 CLI 的框架。
- [zx](https://github.com/google/zx) - 用 JavaScript 编写 Shell 脚本。

### 构建工具

- [parcel](https://github.com/parcel-bundler/parcel) - 极速、零配置的 Web 应用打包工具。
- [webpack](https://github.com/webpack/webpack) - 为浏览器打包模块和资源。
- [rollup](https://github.com/rollup/rollup) - 新一代 ES2015 模块打包工具。
- [gulp](https://github.com/gulpjs/gulp) - 基于流、速度快且偏好代码而非配置的构建系统。
- [Broccoli](https://github.com/broccolijs/broccoli) - 快速可靠的资源流水线，支持恒定时间重建和精简的构建定义。
- [Brunch](https://github.com/brunch/brunch) - 前端 Web 应用构建工具，提供简单的声明式配置、快速增量编译和约定鲜明的工作流。
- [FuseBox](https://github.com/fuse-box/fuse-box) - 快速构建系统，融合 webpack、JSPM 和 SystemJS 的优势，并一流支持 TypeScript。
- [pkg](https://github.com/vercel/pkg) - 将 Node.js 项目打包成可执行文件。
- [Vite](https://github.com/vitejs/vite) - 支持热模块替换和静态资源打包的前端构建工具。

### 硬件

- [johnny-five](https://github.com/rwaldron/johnny-five) - 基于 Firmata 的 Arduino 框架。
- [serialport](https://github.com/serialport/node-serialport) - 访问串行端口以进行读写。
- [usb](https://github.com/node-usb/node-usb) - USB 库。
- [i2c-bus](https://github.com/fivdi/i2c-bus) - 访问 I2C 串行总线。
- [onoff](https://github.com/fivdi/onoff) - 访问 GPIO 并检测中断。
- [spi-device](https://github.com/fivdi/spi-device) - 访问 SPI 串行总线。
- [pigpio](https://github.com/fivdi/pigpio) - 在 Raspberry Pi 上实现高速 GPIO、PWM、伺服控制、状态变化通知和中断处理。
- [gps](https://github.com/infusion/GPS.js) - 用于处理 GPS 接收器的 NMEA 解析器。
- [modbus-serial](https://github.com/yaacov/node-modbus-serial) - 纯 JavaScript 实现的 MODBUS-RTU（串行和 TCP）。

### 模板引擎

- [marko](https://github.com/marko-js/marko) - 基于 HTML 的模板引擎，可将模板编译为 CommonJS 模块，并支持流式传输、异步渲染和自定义标签。
- [nunjucks](https://github.com/mozilla/nunjucks) - 支持继承、异步控制等功能的模板引擎，灵感来自 Jinja2。
- [handlebars.js](https://github.com/handlebars-lang/handlebars.js) - Mustache 模板的超集，增加了帮助器和更高级的区块等强大功能。
- [EJS](https://github.com/mde/ejs) - 简单且不强加特定风格的模板语言。
- [Pug](https://github.com/pugjs/pug) - 深受 Haml 影响的高性能模板引擎。

### Web 框架

- [Fastify](https://github.com/fastify/fastify) - 快速且开销低的 Web 框架。
- [Next.js](https://github.com/vercel/next.js) - 用于服务端渲染通用 JavaScript Web 应用的极简框架。
- [Nuxt.js](https://github.com/nuxt/nuxt.js) - 用于服务端渲染 Vue.js 应用的极简框架。
- [Hapi](https://github.com/hapijs/hapi) - 用于构建应用和服务的框架。
- [Micro](https://github.com/vercel/micro) - 采用异步方式的极简微服务框架。
- [Koa](https://github.com/koajs/koa) - 由 Express 团队打造的框架，目标是为 Web 应用和 API 提供更小巧、更具表现力且更稳健的基础。
- [Express](https://github.com/expressjs/express) - Web 应用框架，提供一套强大功能，用于构建单页、多页和混合式 Web 应用。
- [Feathers](https://github.com/feathersjs/feathers) - 秉承 Express 理念构建的微服务框架。
- [LoopBack](https://github.com/loopbackio/loopback-next) - 用于创建 REST API 并轻松连接后端数据源的强大框架。
- [Meteor](https://github.com/meteor/meteor) - 极简、数据库无处不在、数据在线传输的纯 JavaScript Web 框架。*(你可能也会喜欢 [awesome-meteor](https://github.com/Urigo/awesome-meteor))*
- [Restify](https://github.com/restify/node-restify) - 帮助你构建规范 REST Web 服务。
- [ThinkJS](https://github.com/thinkjs/thinkjs) - 支持 ES2015+、WebSockets 和 REST API 的框架。
- [ActionHero](https://github.com/actionhero/actionhero) - 用于构建可复用、可扩展 API 的框架，支持 TCP 套接字、WebSockets 和 HTTP 客户端。
- [seneca](https://github.com/senecajs/seneca) - 用于编写微服务的工具集。
- [AdonisJs](https://github.com/adonisjs/core) - 真正的 Node.js MVC 框架，建立在可靠的依赖注入和 IoC 容器基础之上。
- [Moleculer](https://github.com/moleculerjs/moleculer) - 快速而强大的微服务框架。
- [Nest](https://github.com/nestjs/nest) - 受 Angular 启发、用于构建高效且可扩展服务端应用的框架。
- [TypeGraphQL](https://github.com/MichalLytek/type-graphql) - 使用类和装饰器，通过 TypeScript 创建 GraphQL API 的现代框架。
- [Tinyhttp](https://github.com/tinyhttp/tinyhttp) - 现代且快速、类似 Express 的 Web 框架。
- [Marble.js](https://github.com/marblejs/marble) - 基于 TypeScript 和 RxJS、用于构建服务端应用的函数式响应式框架。
- [Lad](https://github.com/ladjs/lad) - 由前 Express 技术委员会成员和 Koa 成员创建的框架，集成 Web、API、任务和代理服务器。
- [Ts.ED](https://github.com/tsedio/tsed) - 直观的 TypeScript 框架，可基于 Express.js 或 Koa.js 构建服务端应用。
- [Hono](https://github.com/honojs/hono) - 小巧而快速的 Web 框架。

### 文档

- [documentation.js](https://github.com/documentationjs/documentation) - 支持 ES2015+ 和 Flow 注解的 API 文档生成器。
- [Docco](https://github.com/jashkenas/docco) - 文档生成器，可生成 HTML 文档，将注释与代码交错展示。
- [JSDoc](https://github.com/jsdoc/jsdoc) - 类似 JavaDoc 或 PHPDoc 的 API 文档生成器。
- [Docusaurus](https://github.com/facebook/docusaurus) - 利用 React 和 Markdown 的文档网站生成器，并内置翻译和版本管理功能。

### 文件系统

- [del](https://github.com/sindresorhus/del) - 使用 glob 模式删除文件/文件夹。
- [globby](https://github.com/sindresorhus/globby) - 支持多个模式的 glob 文件匹配工具。
- [chokidar](https://github.com/paulmillr/chokidar) - 文件系统监视器，可稳定处理 `fs.watch` 和 `fs.watchFile` 的事件，并在 macOS 上使用原生 `fsevents`。
- [find-up](https://github.com/sindresorhus/find-up) - 沿父目录向上查找文件。
- [proper-lockfile](https://github.com/moxystudio/node-proper-lockfile) - 跨进程、跨机器的锁文件工具。
- [load-json-file](https://github.com/sindresorhus/load-json-file) - 读取并解析 JSON 文件。
- [write-json-file](https://github.com/sindresorhus/write-json-file) - 将 JSON 序列化并以原子方式写入文件。
- [fs-write-stream-atomic](https://github.com/npm/fs-write-stream-atomic) - 类似 `fs.createWriteStream()`，但具备原子性。
- [filenamify](https://github.com/sindresorhus/filenamify) - 将字符串转换为有效的文件名。
- [istextorbinary](https://github.com/bevry/istextorbinary) - 检查文件是文本还是二进制。
- [fs-jetpack](https://github.com/szwacz/fs-jetpack) - 为日常使用彻底重新设计的便捷文件系统 API。
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - 为 `fs` 模块提供额外方法。
- [package-directory](https://github.com/sindresorhus/package-directory) - 查找 npm 软件包的根目录。
- [filehound](https://github.com/nspragg/filehound) - 用于搜索文件系统的灵活、流畅接口。
- [move-file](https://github.com/sindresorhus/move-file) - 移动文件，也支持跨设备移动。
- [tempy](https://github.com/sindresorhus/tempy) - 获取随机的临时文件或目录路径。

### 控制流

- Promise
	- [pify](https://github.com/sindresorhus/pify) - 将回调风格的函数转换为返回 Promise 的函数。
	- [delay](https://github.com/sindresorhus/delay) - 将 Promise 延迟指定时长。
	- [promise-memoize](https://github.com/nodeca/promise-memoize) - 对返回 Promise 的函数进行记忆化，并支持过期和预取。
	- [valvelet](https://github.com/lpinca/valvelet) - 限制返回 Promise 的函数的执行速率。
	- [p-map](https://github.com/sindresorhus/p-map) - 并发地映射处理多个 Promise。
	- [More…](https://github.com/sindresorhus/promise-fun)
- Observable
	- [RxJS](https://github.com/ReactiveX/RxJS) - 响应式编程。
	- [observable-to-promise](https://github.com/sindresorhus/observable-to-promise) - 将 Observable 转换为 Promise。
	- [More…](https://github.com/sindresorhus/awesome-observables)
- 流
	- [Highland.js](https://github.com/caolan/highland) - 只使用标准 JavaScript 和类似 Node.js 的流，即可轻松管理同步与异步代码。

### 流

- [get-stream](https://github.com/sindresorhus/get-stream) - 将流读取为字符串或缓冲区。
- [from2](https://github.com/hughsk/from2) - 受 `through2` 启发的 ReadableStream 便捷封装。
- [into-stream](https://github.com/sindresorhus/into-stream) - 将缓冲区、字符串、数组或对象转换为流。
- [duplexify](https://github.com/mafintosh/duplexify) - 将可写流和可读流转换为单个 Streams2 双工流。
- [pumpify](https://github.com/mafintosh/pumpify) - 将多个流组成的数组合并为单个双工流。
- [peek-stream](https://github.com/mafintosh/peek-stream) - 转换流，可先查看第一行，再决定如何解析。
- [binary-split](https://github.com/maxogden/binary-split) - 按换行符（或任意分隔符）拆分内容的流。
- [byline](https://github.com/jahewson/node-byline) - 极其简单的逐行流读取器。
- [first-chunk-stream](https://github.com/sindresorhus/first-chunk-stream) - 转换流中的第一个数据块。
- [pad-stream](https://github.com/sindresorhus/pad-stream) - 为流中的每一行添加缩进。
- [multistream](https://github.com/feross/multistream) - 将多个流合并为一个流。
- [readable-stream](https://github.com/nodejs/readable-stream) - 核心模块中 Streams2 和 Streams3 实现的镜像。
- [through2-concurrent](https://github.com/almost/through2-concurrent) - 并发转换对象流。

### 实时通信

- [µWebSockets](https://github.com/uNetworking/uWebSockets) - 高度可扩展的 WebSocket 服务器和客户端库。
- [Socket.io](https://github.com/socketio/socket.io) - 实现实时的双向、基于事件的通信。
- [Faye](https://github.com/faye/faye) - 基于 Bayeux 协议的实时客户端-服务器消息总线。
- [SocketCluster](https://github.com/SocketCluster/socketcluster) - 可在多个 CPU 核心上运行的可扩展 HTTP + WebSocket 引擎。
- [Primus](https://github.com/primus/primus) - 实时框架的抽象层，避免被特定模块锁定。
- [deepstream.io](https://github.com/deepstreamIO/deepstream.io-client-js) - 可扩展的实时微服务框架。
- [Kalm](https://github.com/kalm/kalm.js) - 低级套接字路由器和中间件框架。
- [MQTT.js](https://github.com/mqttjs/MQTT.js) - MQTT 客户端。MQTT 是基于发布/订阅、运行于 TCP/IP 之上的消息协议。
- [rpc-websockets](https://github.com/elpheria/rpc-websockets) - 基于 WebSockets 的 JSON-RPC 2.0 实现。
- [Aedes](https://github.com/moscajs/aedes) - 可在任何流服务器上运行的精简 MQTT 服务器。

### 图像

- [sharp](https://github.com/lovell/sharp) - 用于调整 JPEG、PNG、WebP 和 TIFF 图像尺寸的最快模块。
- [image-type](https://github.com/sindresorhus/image-type) - 检测图像类型。
- [image-dimensions](https://github.com/sindresorhus/image-dimensions) - 获取图像尺寸。
- [lwip](https://github.com/EyalAr/lwip) - 无需 ImageMagick 的轻量图像处理器。
- [pica](https://github.com/nodeca/pica) - 纯 JavaScript 实现的高质量快速（lanczos3）缩放工具。在不允许出现像素化时，可替代 canvas 的 drawImage()。
- [jimp](https://github.com/oliver-moran/jimp) - 纯 JavaScript 图像处理。
- [qrcode](https://github.com/soldair/node-qrcode) - 二维码和条形码生成器。
- [ImageScript](https://github.com/matmen/ImageScript) - 使用 WebAssembly 提升性能的 JavaScript 图像处理工具。

### 文本

- [iconv-lite](https://github.com/ashtuchkin/iconv-lite) - 转换字符编码。
- [string-length](https://github.com/sindresorhus/string-length) - 获取字符串的实际长度：正确计算增补字符，并忽略 ANSI 转义码。
- [camelcase](https://github.com/sindresorhus/camelcase) - 将由连字符、点、下划线或空格分隔的字符串转换为 camelCase：foo-bar → fooBar。
- [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp) - 转义 RegExp 特殊字符。
- [splice-string](https://github.com/sindresorhus/splice-string) - 像 `Array#splice` 一样删除或替换字符串的一部分。
- [indent-string](https://github.com/sindresorhus/indent-string) - 为字符串的每一行添加缩进。
- [strip-indent](https://github.com/sindresorhus/strip-indent) - 移除字符串每一行开头的空白字符。
- [detect-indent](https://github.com/sindresorhus/detect-indent) - 检测代码的缩进方式。
- [he](https://github.com/mathiasbynens/he) - HTML 实体编码器/解码器。
- [i18n-node](https://github.com/mashpie/i18n-node) - 使用动态 JSON 存储的简单翻译模块。
- [babelfish](https://github.com/nodeca/babelfish) - 提供极简复数语法的国际化工具。
- [matcher](https://github.com/sindresorhus/matcher) - 简单的通配符匹配。
- [unhomoglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觉上相似的 Unicode 字符。
- [i18next](https://github.com/i18next/i18next) - 国际化框架。
- [nanoid](https://github.com/ai/nanoid) - 小巧、安全、适用于 URL 的唯一字符串 ID 生成器。
- [StegCloak](https://github.com/kurolabs/stegcloak) - 将秘密信息隐藏在字符串中，让它们看起来毫不起眼。

### 数字

- [random-int](https://github.com/sindresorhus/random-int) - 生成随机整数。
- [random-float](https://github.com/sindresorhus/random-float) - 生成随机浮点数。
- [unique-random](https://github.com/sindresorhus/unique-random) - 生成连续取值互不重复的随机数。
- [round-to](https://github.com/sindresorhus/round-to) - 将数字舍入到指定的小数位数：`1.234` → `1.2`。

### 数学

- [ndarray](https://github.com/scijs/ndarray) - 多维数组。
- [mathjs](https://github.com/josdejong/mathjs) - 功能全面的数学库。
- [math-clamp](https://github.com/sindresorhus/math-clamp) - 限制数字的范围。
- [algebra](https://github.com/fibo/algebra) - 代数结构。
- [multimath](https://github.com/nodeca/multimath) - 用于在 WebAssembly 和 JS 中实现快速图像数学运算的核心工具。

### 日期

- [Luxon](https://github.com/moment/luxon) - 用于处理日期和时间的库。
- [date-fns](https://github.com/date-fns/date-fns) - 现代日期实用工具。
- [Day.js](https://github.com/iamkun/dayjs) - 不可变日期库，可替代 Moment.js。
- [dateformat](https://github.com/felixge/node-dateformat) - 日期格式化。
- [tz-format](https://github.com/samverschueren/tz-format) - 使用时区格式化日期：`2015-11-30T10:40:35+01:00`。
- [cctz](https://github.com/floatdrop/node-cctz) - 快速解析、格式化日期并进行时区转换。

### URL

- [normalize-url](https://github.com/sindresorhus/normalize-url) - 规范化 URL。
- [humanize-url](https://github.com/sindresorhus/humanize-url) - 将 URL 转换为易读形式：https://sindresorhus.com → sindresorhus.com。
- [url-unshort](https://github.com/nodeca/url-unshort) - 展开缩短后的 URL。
- [speakingurl](https://github.com/pid/speakingurl) - 通过音译从字符串生成 slug。
- [linkify-it](https://github.com/markdown-it/linkify-it) - 支持完整 Unicode 的链接模式检测器。
- [url-pattern](https://github.com/snd/url-pattern) - 比正则表达式更简单的 URL 及其他字符串模式匹配工具。
- [embedza](https://github.com/nodeca/embedza) - 根据 URL 和 oEmbed、Open Graph、元标签中的信息创建 HTML 片段/嵌入内容。

### 数据验证

- [joi](https://github.com/sideway/joi) - 用于描述对象模式并验证 JavaScript 对象的语言。
- [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) - 使用代码生成实现极快速度的 JSON Schema 验证器。
- [property-validator](https://github.com/nettofarah/property-validator) - 适用于 Express 的简易属性验证。
- [schema-inspector](https://github.com/schema-inspector/schema-inspector) - JSON API 清理与验证。
- [ajv](https://github.com/ajv-validator/ajv) - 速度最快的 JSON Schema 验证器，支持 v5、v6 和 v7 提案。
- [Superstruct](https://github.com/ianstormtaylor/superstruct) - 在 JavaScript（和 TypeScript）中验证数据的简单、可组合方式。
- [yup](https://github.com/jquense/yup) - 对象模式验证。
- [zod](https://github.com/colinhacks/zod) - 以 TypeScript 为先、支持静态类型推导的模式验证。

### 解析

- [remark](https://github.com/remarkjs/remark) - 由插件驱动的 Markdown 处理器。
- [markdown-it](https://github.com/markdown-it/markdown-it) - 完全支持 CommonMark，并提供扩展和语法插件的 Markdown 解析器。
- [parse5](https://github.com/inikulin/parse5) - 快速、功能全面且符合规范的 HTML 解析器。
- [@parcel/css](https://github.com/parcel-bundler/parcel-css) - 使用 Rust 编写的 CSS 解析器、转换器和压缩器。
- [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) - 移除 JSON 中的注释。
- [strip-css-comments](https://github.com/sindresorhus/strip-css-comments) - 移除 CSS 中的注释。
- [parse-json](https://github.com/sindresorhus/parse-json) - 解析 JSON，并提供更有帮助的错误信息。
- [URI.js](https://github.com/medialize/URI.js) - 修改 URL。
- [JSONStream](https://github.com/dominictarr/JSONStream) - 流式解析和序列化 JSON。
- [neat-csv](https://github.com/sindresorhus/neat-csv) - 快速 CSV 解析器，并为上述解析器提供回调接口。
- [csv-parser](https://github.com/mafintosh/csv-parser) - 旨在超越所有其他工具的流式 CSV 解析器。
- [PEG.js](https://github.com/pegjs/pegjs) - 简单的解析器生成器，可生成快速解析器并提供出色的错误报告。
- [x-ray](https://github.com/matthewmueller/x-ray) - 网页抓取工具。
- [nearley](https://github.com/kach/nearley) - 用于 JavaScript 的简单、快速、强大的解析工具。
- [binary-extract](https://github.com/juliangruber/binary-extract) - 无需解析整个 JSON，即可从 JSON 缓冲区中提取值。
- [Stylecow](https://github.com/stylecow/stylecow) - 解析、操作并转换现代 CSS，使其兼容所有浏览器；可通过插件扩展。
- [js-yaml](https://github.com/nodeca/js-yaml) - 速度极快的 YAML 解析器。
- [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - 将 XML 转换为 JavaScript 对象。
- [Jison](https://github.com/zaach/jison) - 易于使用的 JavaScript 解析器生成器，与 Bison、Yacc 及其同类工具有共同渊源。
- [google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber) - 解析、格式化、存储和验证电话号码。
- [ref](https://github.com/TooTallNate/ref) - 在 Buffer 中读写结构化二进制数据。
- [xlsx-populate](https://github.com/dtjohnson/xlsx-populate) - 读写 Excel XLSX 文件。
- [Chevrotain](https://github.com/Chevrotain/chevrotain) - 用于构建 JavaScript 解析器的超快速、功能丰富工具包。
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) - 验证并解析 XML。

### 易读格式化

- [pretty-bytes](https://github.com/sindresorhus/pretty-bytes) - 将字节数转换为易读字符串：`1337` → `1.34 kB`。
- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - 将毫秒转换为易读字符串：`1337000000` → `15d 11h 23m 20s`。
- [ms](https://github.com/vercel/ms) - 小巧的毫秒换算工具。
- [pretty-error](https://github.com/AriaMinaei/pretty-error) - 让错误信息更简洁易读。
- [read-art](https://github.com/Tjatse/node-readability) - 从任意网页提取易读内容。

### 压缩

- [yazl](https://github.com/thejoshwolfe/yazl) - ZIP 压缩。
- [yauzl](https://github.com/thejoshwolfe/yauzl) - ZIP 解压。
- [Archiver](https://github.com/archiverjs/node-archiver) - 支持 ZIP 和 TAR 的流式归档生成接口。
- [pako](https://github.com/nodeca/pako) - 高速 zlib 纯 JS 移植版（deflate、inflate、gzip）。
- [tar-stream](https://github.com/mafintosh/tar-stream) - 流式 TAR 解析器和生成器。另请参阅 [tar-fs](https://github.com/mafintosh/tar-fs)。

### 网络

- [get-port](https://github.com/sindresorhus/get-port) - 获取一个可用端口。
- [ipify](https://github.com/sindresorhus/ipify) - 获取你的公网 IP 地址。
- [getmac](https://github.com/bevry/getmac) - 获取计算机的 MAC 地址。
- [DHCP](https://github.com/infusion/node-dhcp) - DHCP 客户端和服务器。
- [netcat](https://github.com/roccomuso/netcat) - 纯 JS 实现的 Netcat。

### 数据库

- 驱动程序
	- [PostgreSQL](https://github.com/brianc/node-postgres) - PostgreSQL 客户端，纯 JavaScript 实现并支持原生 libpq 绑定。
	- [Redis](https://github.com/luin/ioredis) - Redis 客户端。
	- [LevelUP](https://github.com/Level/levelup) - LevelDB。
	- [MySQL](https://github.com/mysqljs/mysql) - MySQL 客户端。
	- [couchdb-nano](https://github.com/apache/couchdb-nano) - CouchDB 客户端。
	- [Aerospike](https://github.com/aerospike/aerospike-client-nodejs) - Aerospike 客户端。
	- [Couchbase](https://github.com/couchbase/couchnode) - Couchbase 客户端。
	- [MongoDB](https://github.com/mongodb/node-mongodb-native) - MongoDB 驱动程序。
- ODM / ORM
	- [Sequelize](https://github.com/sequelize/sequelize) - 支持多种方言的 ORM，支持 PostgreSQL、SQLite、MySQL 等。
	- [Bookshelf](https://github.com/bookshelf/bookshelf) - 采用 Backbone.js 风格、适用于 PostgreSQL、MySQL 和 SQLite3 的 ORM。
	- [Mongoose](https://github.com/Automattic/mongoose) - 优雅的 MongoDB 对象建模工具。
	- [Waterline](https://github.com/balderdashy/waterline) - 与数据存储无关的工具，可大幅简化与一个或多个数据库的交互。
	- [OpenRecord](https://github.com/PhilWaldmann/openrecord) - 适用于 PostgreSQL、MySQL、SQLite3 和 RESTful 数据存储的 ORM，类似 ActiveRecord。
	- [pg-promise](https://github.com/vitaly-t/pg-promise) - 使用 Promise 执行原生 SQL 的 PostgreSQL 框架。
	- [slonik](https://github.com/gajus/slonik) - 具有严格类型、详细日志和断言的 PostgreSQL 客户端。
	- [Objection.js](https://github.com/Vincit/objection.js) - 基于 SQL 查询构建器 Knex 构建的轻量 ORM。
	- [TypeORM](https://github.com/typeorm/typeorm) - 适用于 PostgreSQL、MariaDB、MySQL、SQLite 等的 ORM。
	- [MikroORM](https://github.com/mikro-orm/mikro-orm) - 基于 Data Mapper、Unit of Work 和 Identity Map 模式的 TypeScript ORM，支持 MongoDB、PostgreSQL、MySQL 和 SQLite。
	- [Prisma](https://github.com/prisma/prisma) - 现代数据库访问工具（ORM 替代方案）。自动生成、类型安全的 TypeScript 查询构建器，支持 PostgreSQL、MySQL 和 SQLite。
 	- [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) - 支持多种数据库（如 PostgreSQL）的 TypeScript ORM。
- 查询构建器
	- [Knex](https://github.com/knex/knex) - 适用于 PostgreSQL、MySQL 和 SQLite3 的查询构建器，设计灵活、可移植且易于使用。
- 其他
	- [NeDB](https://github.com/louischatriot/nedb) - 使用 JavaScript 编写的嵌入式持久化数据库。
	- [Lowdb](https://github.com/typicode/lowdb) - 由 Lodash 驱动的小型 JavaScript 数据库。
	- [Keyv](https://github.com/jaredwray/keyv) - 简单的键值存储，支持多个后端。
	- [Finale](https://github.com/tommybananas/finale) - 为 Sequelize 模型生成 RESTful 端点。
	- [database-js](https://github.com/mlaanderson/database-js) - 支持多个数据库并提供类似 JDBC 连接的封装。
	- [Mongo Seeding](https://github.com/pkosiec/mongo-seeding) - 使用 JavaScript 和 JSON 文件填充 MongoDB 数据库。
	- [@databases](https://github.com/ForbesLindesay/atdatabases) - 使用纯 SQL 查询 PostgreSQL、MySQL 和 SQLite3，同时避免 SQL 注入风险。
	- [pg-mem](https://github.com/oguimbal/pg-mem) - 供测试使用的内存 PostgreSQL 实例。

### 测试

- [AVA](https://github.com/avajs/ava) - 面向未来的测试运行器。
- [Mocha](https://github.com/mochajs/mocha) - 功能丰富的测试框架，让异步测试变得简单有趣。
- [nyc](https://github.com/istanbuljs/nyc) - 基于 istanbul 构建、支持子进程的代码覆盖率工具。
- [tap](https://github.com/tapjs/node-tap) - TAP 测试框架。
- [tape](https://github.com/substack/tape) - 生成 TAP 的测试工具。
- [power-assert](https://github.com/power-assert-js/power-assert) - 通过标准 assert 接口提供描述性断言消息。
- [Mochify](https://github.com/mantoni/mochify.js) - 使用 Browserify、Mocha、PhantomJS 和 WebDriver 进行 TDD。
- [trevor](https://github.com/vadimdemedes/trevor) - 无需手动切换版本或推送到 Travis CI，即可针对多个 Node.js 版本运行测试。
- [loadtest](https://github.com/alexfernandez/loadtest) - 为 Web 应用运行负载测试，并提供自动化 API。
- [Sinon.JS](https://github.com/sinonjs/sinon) - 测试间谍、存根和模拟工具。
- [navit](https://github.com/nodeca/navit) - PhantomJS / SlimerJS 封装工具，简化浏览器测试脚本编写。
- [Nock](https://github.com/nock/nock) - HTTP 模拟和预期值断言。
- [intern](https://github.com/theintern/intern) - 代码测试工具栈。
- [toxy](https://github.com/h2non/toxy) - 可编程的 HTTP 代理，用于模拟故障场景和网络状况。
- [hook-std](https://github.com/sindresorhus/hook-std) - 拦截并修改 stdout/stderr。
- [testen](https://github.com/egoist/testen) - 使用 NVM 在本地针对多个 Node.js 版本运行测试。
- [Nightwatch](https://github.com/nightwatchjs/nightwatch) - 基于 Selenium WebDriver 的自动化 UI 测试框架。
- [WebdriverIO](https://github.com/webdriverio/webdriverio) - 基于 WebDriver 协议的自动化测试。
- [Jest](https://github.com/facebook/jest) - 让 JavaScript 测试轻松无忧。
- [Vitest](https://github.com/vitest-dev/vitest) - 由 Vite 驱动的快速单元测试框架。
- [TestCafe](https://github.com/DevExpress/testcafe) - 自动化浏览器测试。
- [abstruse](https://github.com/bleenco/abstruse) - 持续集成服务器。
- [CodeceptJS](https://github.com/codeceptjs/CodeceptJS) - 端到端测试。
- [Puppeteer](https://github.com/puppeteer/puppeteer) - 无头 Chrome。
- [Playwright](https://github.com/microsoft/playwright) - 通过单一 API 使用无头 Chromium、WebKit 和 Firefox。
- [nve](https://github.com/ehmicky/nve) - 在本地使用任意多个 Node.js 版本运行命令。
- [axe-core](https://github.com/dequelabs/axe-core) - 用于自动化 Web UI 测试的无障碍检测引擎。
- [testcontainers-node](https://github.com/testcontainers/testcontainers-node) - 提供轻量、一次性运行的常用数据库、Selenium 浏览器或其他可在 Docker 容器中运行的实例。

### 安全

- [upash](https://github.com/simonepri/upash) - 适用于所有密码哈希算法的统一 API。
- [themis](https://github.com/cossacklabs/themis) - 支持多种语言的框架，让常见加密方案易于使用：静态数据加密、经身份验证的数据交换、传输保护、身份验证等。
- [GuardRails](https://github.com/apps/guardrails) - 可在拉取请求中提供安全反馈的 GitHub 应用。
- [rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible) - 防范暴力破解和 DDoS 攻击。
- [crypto-hash](https://github.com/sindresorhus/crypto-hash) - 异步、非阻塞哈希。
- [jose-simple](https://github.com/davesag/jose-simple) - 使用 JOSE（JSON 对象签名和加密）标准加密和解密数据。

### 基准测试

- [Benchmark.js](https://github.com/bestiejs/benchmark.js) - 支持高精度计时器并能返回统计显著结果的基准测试库。

### 压缩器

- [babel-minify](https://github.com/babel/minify) - 基于 Babel 工具链、理解 ES2015+ 的压缩器。
- [UglifyJS2](https://github.com/mishoo/UglifyJS) - JavaScript 压缩器。
- [clean-css](https://github.com/clean-css/clean-css) - CSS 压缩器。
- [minimize](https://github.com/Swaagie/minimize) - HTML 压缩器。
- [imagemin](https://github.com/imagemin/imagemin) - 图像压缩器。

### 身份验证

- [Passport](https://github.com/jaredhanson/passport) - 简单、低侵入性的身份验证。
- [Grant](https://github.com/simov/grant) - 适用于 Express、Koa、Hapi、Fastify、AWS Lambda、Azure、Google Cloud、Vercel 等平台的 OAuth 提供方。

### 授权

- [CASL](https://github.com/stalniy/casl) - 适用于 UI 和 API 的同构授权工具。
- [node-casbin](https://github.com/casbin/node-casbin) - 支持 ACL、RBAC 和 ABAC 等访问控制模型的授权库。

### 电子邮件

- [Nodemailer](https://github.com/nodemailer/nodemailer) - 处理电子邮件的最快方式。
- [emailjs](https://github.com/eleith/emailjs) - 向任意 SMTP 服务器发送带附件的纯文本/HTML 邮件。
- [email-templates](https://github.com/forwardemail/email-templates) - 创建、预览并发送自定义邮件模板。
- [MJML](https://github.com/mjmlio/mjml) - 旨在减轻创建响应式电子邮件痛苦的标记语言。
- [Forward Email](https://github.com/forwardemail/forwardemail.net) - 开源且可自行托管的电子邮件服务。

### 任务队列

- [bull](https://github.com/OptimalBits/bull) - 持久化任务和消息队列。
- [agenda](https://github.com/agenda/agenda) - 由 MongoDB 支持的任务调度。
- [idoit](https://github.com/nodeca/idoit) - 由 Redis 支持、具备高级任务控制功能的任务队列引擎。
- [node-resque](https://github.com/actionhero/node-resque) - 由 Redis 支持的任务队列。
- [rsmq](https://github.com/smrchy/rsmq) - 由 Redis 支持的消息队列。
- [bee-queue](https://github.com/bee-queue/bee-queue) - 高性能 Redis 任务队列。
- [RedisSMQ](https://github.com/weyoss/redis-smq) - 简单、高性能且带实时监控的 Redis 消息队列。
- [sqs-consumer](https://github.com/bbc/sqs-consumer) - 无需编写样板代码，即可构建基于 Amazon Simple Queue Service (SQS) 的应用。
- [better-queue](https://github.com/diamondio/better-queue) - 无法使用 Redis 时的简单高效任务队列。
- [bullmq](https://github.com/taskforcesh/bullmq) - 持久化任务和消息队列。
- [bree](https://github.com/breejs/bree) - 任务调度器，支持工作线程、cron、日期和自然语言语法。
- [graphile-worker](https://github.com/graphile/worker) - 高性能 PostgreSQL 任务队列。

### Node.js 管理

- [n](https://github.com/tj/n) - Node.js 版本管理。
- [nave](https://github.com/isaacs/nave) - Node.js 虚拟环境。
- [nodeenv](https://github.com/ekalinin/nodeenv) - 兼容 Python virtualenv 的 Node.js 虚拟环境。
- [nvm for Windows](https://github.com/coreybutler/nvm-windows) - 适用于 Windows 的版本管理工具。
- [nodenv](https://github.com/nodenv/nodenv) - 类似 Ruby rbenv 的版本管理器，支持自动切换版本。
- [fnm](https://github.com/Schniz/fnm) - 使用 Rust 构建的跨平台 Node.js 版本管理器。

### 跨平台集成

- [napi-rs](https://github.com/napi-rs/napi-rs) - 通过 Node-API 使用 Rust 构建编译型 Node.js 插件的框架。
- [Neon](https://github.com/neon-bindings/neon) - 用于编写安全、高速原生 Node.js 模块的 Rust 绑定。
- [Edge.js](https://github.com/agracio/edge-js) - 在 Windows、macOS 和 Linux 上的同一进程中运行 .NET 和 Node.js 代码。
- [DotNetJS](https://github.com/Elringus/DotNetJS) - 通过此 .NET 互操作层在 Node.js 中使用 .NET 库。

### 自然语言处理

- [retext](https://github.com/retextjs/retext) - 可扩展的自然语言处理系统。
- [franc](https://github.com/wooorm/franc) - 检测文本所使用的语言。
- [leven](https://github.com/sindresorhus/leven) - 使用 Levenshtein 距离算法衡量两个字符串之间的差异。
- [natural](https://github.com/NaturalNode/natural) - 自然语言处理工具。
- [nlp.js](https://github.com/axa-group/nlp.js) - 用于构建机器人，支持实体提取、情感分析、自动语言识别等。

### 进程管理

- [PM2](https://github.com/Unitech/pm2) - 高级进程管理器。
- [nodemon](https://github.com/remy/nodemon) - 监视应用变更并自动重启服务器。
- [node-mac](https://github.com/coreybutler/node-mac) - 将脚本作为原生 Mac 守护进程运行，并将日志写入“控制台”应用。
- [node-linux](https://github.com/coreybutler/node-linux) - 将脚本作为原生系统服务运行，并将日志写入 syslog。
- [node-windows](https://github.com/coreybutler/node-windows) - 将脚本作为原生 Windows 服务运行，并将日志写入事件查看器。
- [supervisor](https://github.com/petruisfan/node-supervisor) - 在脚本崩溃时重启，或在 `*.js` 文件发生变化时重新启动脚本。
- [Phusion Passenger](https://github.com/phusion/passenger) - 可直接集成到 Nginx 的易用进程管理器。

### 自动化

- [robotjs](https://github.com/octalmage/robotjs) - 桌面自动化：控制鼠标和键盘并读取屏幕内容。
- [nut.js](https://github.com/nut-tree/nut.js) - 跨平台原生 GUI 自动化/测试框架，支持图像匹配并可与 Jest 集成。

### AST

- [Acorn](https://github.com/acornjs/acorn) - 小巧快速的 JavaScript 解析器。
- [babel-parser](https://github.com/babel/babel/tree/master/packages/babel-parser) - Babel 使用的 JavaScript 解析器。

### 静态站点生成器

- [DocPad](https://github.com/docpad/docpad) - 具备动态功能和庞大插件生态系统的静态站点生成器。
- [docsify](https://github.com/docsifyjs/docsify) - Markdown 文档站点生成器，无需静态生成 HTML 文件。
- [Charge](https://github.com/brandonweiss/charge) - 采用 JSX 和 MDX 的约定鲜明、零配置静态站点生成器。

### 内容管理系统

- [KeystoneJS](https://github.com/keystonejs/keystone) - 基于 Express 和 MongoDB 构建的 CMS 与 Web 应用平台。
- [ApostropheCMS](https://github.com/apostrophecms/apostrophe) - 基于 Express 和 MongoDB 构建的内容管理系统，着重提供直观的前端内容编辑与管理体验。
- [Strapi](https://github.com/strapi/strapi) - 用于构建强大 API 的内容管理框架（无头 CMS）。
- [Factor](https://github.com/FactorJS/factor) - Vue.js 仪表板框架和无头 CMS。
- [AdminBro](https://github.com/SoftwareBrothers/adminjs) - 自动生成的管理面板，为所有资源提供 CRUD 操作。
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - CMS 和无头 GraphQL API。

### 论坛

- [nodeBB](https://github.com/NodeBB/NodeBB) - 面向现代 Web 的论坛平台。

### 博客

- [Ghost](https://github.com/TryGhost/Ghost) - 简单而强大的内容发布平台。
- [Hexo](https://github.com/hexojs/hexo) - 快速、简单且强大的博客框架。

### 奇妙项目

- [cows](https://github.com/sindresorhus/cows) - ASCII 奶牛图案。
- [superb](https://github.com/sindresorhus/superb) - 获取表示“极佳”的同义词。
- [cat-names](https://github.com/sindresorhus/cat-names) - 获取常见猫咪名字。
- [dog-names](https://github.com/sindresorhus/dog-names) - 获取常见狗狗名字。
- [superheroes](https://github.com/sindresorhus/superheroes) - 获取超级英雄名字。
- [supervillains](https://github.com/sindresorhus/supervillains) - 获取超级反派名字。
- [cool-ascii-faces](https://github.com/maxogden/cool-ascii-faces) - 获取一些酷炫的 ASCII 表情。
- [cat-ascii-faces](https://github.com/melaniecebula/cat-ascii-faces) - `₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛ (=ↀωↀ=)✧ (^･o･^)ﾉ”`.
- [nerds](https://github.com/SkyHacks/nerds) - 获取《哈利·波特》《星球大战》和《宝可梦》等极客主题的数据。

### 序列化

- [snappy](https://github.com/kesla/node-snappy) - Google Snappy 压缩库的原生绑定。
- [protobuf](https://github.com/protobufjs/protobuf.js) - Protocol Buffers 的实现。
- [compactr](https://github.com/compactr/compactr.js) - Compactr 协议的实现。

### 杂项

- [execa](https://github.com/sindresorhus/execa) - 更好用的 `child_process`。
- [cheerio](https://github.com/cheeriojs/cheerio) - 专为服务器设计的核心 jQuery 功能实现，快速、灵活且精简。
- [open](https://github.com/sindresorhus/open) - 打开网站、文件、可执行文件等。
- [hasha](https://github.com/sindresorhus/hasha) - 哈希计算变简单了。获取缓冲区、字符串、流或文件的哈希值。
- [dot-prop](https://github.com/sindresorhus/dot-prop) - 使用点分路径从嵌套对象中获取属性。
- [onetime](https://github.com/sindresorhus/onetime) - 仅运行函数一次。
- [mem](https://github.com/sindresorhus/mem) - 对函数进行记忆化——通过缓存输入相同的调用结果，加快连续函数调用的优化技术。
- [strip-bom](https://github.com/sindresorhus/strip-bom) - 从字符串、缓冲区或流中移除 UTF-8 字节顺序标记（BOM）。
- [os-locale](https://github.com/sindresorhus/os-locale) - 获取系统区域设置。
- [ssh2](https://github.com/mscdex/ssh2) - SSH2 客户端和服务器模块。
- [adit](https://github.com/markelog/adit) - 轻松建立 SSH 隧道。
- [file-type](https://github.com/sindresorhus/file-type) - 检测 Buffer 的文件类型。
- [Bottleneck](https://github.com/SGrondin/bottleneck) - 让速率限制变得简单的限流器。
- [webworker-threads](https://github.com/audreyt/node-webworker-threads) - 使用原生线程的轻量级 Web Worker API 实现。
- [clipboardy](https://github.com/sindresorhus/clipboardy) - 访问系统剪贴板（复制/粘贴）。
- [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) - 轻松地从二进制文件发布和安装 Node.js C++ 插件。
- [opencv](https://github.com/peterbraden/node-opencv) - OpenCV 的绑定。OpenCV 是事实上的计算机视觉标准库。
- [dotenv](https://github.com/motdotla/dotenv) - 从 .env 文件加载环境变量。
- [semver](https://github.com/npm/node-semver) - 语义化版本解析器。
- [nodegit](https://github.com/nodegit/nodegit) - Git 的原生绑定。
- [json-strictify](https://github.com/pigulla/json-strictify) - 安全地将值序列化为 JSON，避免数据丢失或进入无限循环。
- [jsdom](https://github.com/jsdom/jsdom) - HTML 和 DOM 的 JavaScript 实现。
- [@sindresorhus/is](https://github.com/sindresorhus/is) - 类型检查工具。
- [env-dot-prop](https://github.com/simonepri/env-dot-prop) - 使用点分路径获取、设置或删除 process.env 中的嵌套属性。
- [node-video-lib](https://github.com/gkozlenko/node-video-lib) - 用于处理 MP4 和 FLV 视频文件并创建 HLS 流式传输所需 MPEG-TS 数据块的纯 JavaScript 库。
- [basic-ftp](https://github.com/patrickjuchli/basic-ftp) - FTP/FTPS 客户端。
- [cashify](https://github.com/xxczaki/cashify) - 货币换算。
- [genepi](https://github.com/Geode-solutions/genepi) - 从 C++ 代码自动生成原生 Node.js 插件。
- [husky](https://github.com/typicode/husky) - 创建 Git 钩子脚本。
- [patch-package](https://github.com/ds300/patch-package) - 创建并保留对 npm 依赖项的修复。
- [editly](https://github.com/mifi/editly) - 声明式视频编辑 API。
- [wild-wild-path](https://github.com/ehmicky/wild-wild-path) - 支持通配符和正则表达式的对象属性路径。
- [uint8array-extras](https://github.com/sindresorhus/uint8array-extras) - 用于处理 Uint8Array 和 Buffer 的实用工具。

## 包管理器

- [npm](https://docs.npmjs.com/about-npm) - 默认包管理器。
- [pnpm](https://pnpm.io) - 节省磁盘空间的包管理器。
- [yarn](https://yarnpkg.com) - 替代包管理器。
- [bun](https://bun.sh) - 适用于 JavaScript 和 TypeScript 应用的一体化工具包。

## 资源

### 教程

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) - 总结并精选排名靠前的 Node.js 最佳实践内容，并提供多种语言版本。
- [Nodeschool](https://github.com/nodeschool) - 通过交互式课程学习 Node.js。
- [The Art of Node](https://github.com/maxogden/art-of-node/#the-art-of-node) - Node.js 入门介绍。
- [module-best-practices](https://github.com/mattdesl/module-best-practices) - 编写新的 npm 模块时的一些实用做法。
- [The Node Way](https://github.com/FredKSchott/the-node-way) - 一套关于 Node.js 最佳实践和指导原则的完整理念，旨在帮助编写易于维护的模块、可扩展的应用，以及真正值得阅读的代码。
- [You Don't Know Node.js](https://github.com/azat-co/you-dont-know-node) - Node.js 核心功能和异步 JavaScript 入门介绍。
- [Portable Node.js guide](https://github.com/ehmicky/cross-platform-node-guide) - 关于如何编写可移植、跨平台 Node.js 代码的实用指南。
- [Build a real web app with no frameworks](https://frameworkless.js.org/course) - 一系列视频教程/直播，帮助你使用少量简单库和 Node.js 核心模块构建并部署真正上线运行的 Web 应用。

### 发现

- [npms](https://npms.io) - 出色的软件包搜索服务，通过[大量指标](https://npms.io/about)深入分析软件包质量。
- [npm addict](https://npmaddict.com) - 每天为你带来 npm 软件包。

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

### 新闻邮件

- [Node Weekly](https://nodeweekly.com) - 每周汇总 Node.js 新闻和文章的电子邮件简报。

### 视频

- [Introduction to Node.js with Ryan Dahl](https://www.youtube.com/watch?v=jo_B4LTHi3I)
- [Hands on with Node.js](https://learn.bevry.me/hands-on-with-node.js/preface)
- [V8 Garbage Collector](https://v8.dev/blog/trash-talk) - 关于 V8 垃圾回收器的趣谈。
- [10 Things I Regret About Node.js by Ryan Dahl](https://www.youtube.com/watch?v=M3BM9TB-8yA) - Node.js 创始人探讨 Node.js 的若干局限，内容发人深省。
- [Mastering REST APIs in Node.js: Zero-To-Hero](https://www.manning.com/livevideo/mastering-rest-apis-in-nodejs) - 讲解如何使用 Node.js 构建 REST API 的视频课程。
- [Make a vanilla Node.js REST API](https://www.youtube.com/watch?v=_1xa8Bsho6A) - 不借助 Express 等框架来构建 REST API。
- [Google I/O 2009 - V8: High Performance JavaScript Engine](https://www.youtube.com/watch?v=FrufJFBSoQY) - 介绍 V8 架构基础及其优化 JavaScript 执行的方式。
- [Google I/O 2012 - Breaking the JavaScript Speed Limit with V8](https://www.youtube.com/watch?v=UJPdhx5zTaw) - V8 如何优化 JavaScript 执行。
- [Google I/O 2013 - Accelerating Oz with V8: Follow the Yellow Brick Road to JavaScript Performance](https://www.youtube.com/watch?v=VhpdsjBUS3g) - 介绍如何借助 V8 知识发现应用瓶颈并优化性能。
- [Node.js Internal Architecture | Ignition, Turbofan, Libuv](https://www.youtube.com/watch?v=OCjvhCFFPTw) - 讲解 Node.js 的内部工作原理，重点介绍 V8 和 libuv。
- [Introduction to libuv: What's a Unicorn Velociraptor?](https://www.youtube.com/watch?v=_c51fcXRLGw) - 介绍 `libuv` 架构、线程池和事件循环，并结合其源代码讲解。
- [libuv Cross platform asynchronous i/o](https://www.youtube.com/watch?v=kCJ3PFU8Ke8) - 详细介绍 `libuv` 架构，例如它实际使用线程的场景。
- [You Don't Know Node - ForwardJS San Francisco](https://www.youtube.com/watch?v=oPo4EQmkjvY) - 通过关于 V8、libuv、事件循环、模块、流和集群的问答讲解 Node.js 内部机制。

### 书籍

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

### 博客

- [Node.js blog](https://nodejs.org/en/blog/)
- [webapplog.com](https://webapplog.com/tag/node-js/) - Practical Node.js 和 Pro Express.js 作者 Azat Mardan 撰写的 Node.js 与 JavaScript 博文。

### 课程

- [Learn to build apps and APIs with Node.js](https://learnnode.com/friend/AWESOME) - Wes Bos 主讲的视频课程。
- [Real Time Web with Node.js](https://www.pluralsight.com/courses/code-school-real-time-web-with-nodejs)
- [Learn and Understand Node.js](https://www.udemy.com/course/understand-nodejs/)
- [Node.js Full Stack Developer Course](https://kinsta.com/academy/course/node-js-full-stack-developer/)

### 速查表

- [Express.js](https://github.com/azat-co/cheatsheets/tree/master/express4)
- [Stream FAQs](https://github.com/stephenplusplus/stream-faqs) - 回答有关流的常见问题，涵盖分页、事件等内容。
- [Strong Node.js](https://github.com/jesusprubio/strong-node) - 用于对 Node.js Web 服务源代码进行安全分析的检查清单。

### 工具

- [OctoLinker](https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp) - Chrome 扩展，可将 GitHub 上 package.json、.js、.jsx、.coffee 和 .md 文件中的依赖项转换为链接。
- [npm-hub](https://chrome.google.com/webstore/detail/npmhub/kbbbjimdjbjclaebffknlabpogocablj) - Chrome 扩展，可在代码仓库 README 底部显示 npm 依赖项。
- [RunKit](https://runkit.com) - 在任意网站中嵌入 Node.js 环境。
- [github-npm-stats](https://chrome.google.com/webstore/detail/github-npm-stats/oomfflokggoffaiagenekchfnpighcef) - Chrome 扩展，可在 GitHub 上显示 npm 下载统计数据。
- [npm semver calculator](https://semver.npmjs.com) - 以可视化方式查看某个 semver 范围匹配的软件包版本。
- [CodeSandbox](https://codesandbox.io/templates/node-http-server) - 在线 IDE 和原型设计工具。
- [Amplication](https://github.com/amplication/amplication) - 自动生成功能完备的应用。
- [RunJS](https://runjs.app) - 桌面版 JavaScript 试验场。

### 社区

- [Stack Overflow](https://stackoverflow.com/questions/tagged/node.js)
- [Reddit](https://www.reddit.com/r/node)
- [Twitter](https://twitter.com/nodejs)
- [Hashnode](https://hashnode.com/n/nodejs)
- [Discord](https://discord.com/invite/96WGtJt)

### 杂项

- [nodebots](https://nodebots.io) - 由 JavaScript 驱动的机器人。
- [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) - 用于快速启动并创建 Node 模块的样板代码。
- [modern-node](https://github.com/sheerun/modern-node) - 用于创建 Node 模块的工具包，集成 Jest、Prettier、ESLint 和 Standard。
- [generator-nm](https://github.com/sindresorhus/generator-nm) - 搭建 Node 模块项目的脚手架。
- [Microsoft Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines) - 在 Microsoft 平台上使用 Node.js 的技巧、窍门和资源。
- [Module Requests & Ideas](https://github.com/sindresorhus/project-ideas) - 请求创建你希望存在的 JavaScript 模块，或获取模块创意。
- [v8-perf](https://github.com/thlorenz/v8-perf) - 与 V8 以及 Node.js 性能相关的笔记和资源。

## 相关列表

- [awesome-npm](https://github.com/sindresorhus/awesome-npm) - 使用 npm 的资源和技巧。
- [awesome-cross-platform-nodejs](https://github.com/bcoe/awesome-cross-platform-nodejs) - 编写和测试跨平台代码的资源。
