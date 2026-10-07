# Awesome Chrome DevTools [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Chrome DevTools 生态中出色的工具与资源

围绕 Chrome DevTools 以及 Chrome DevTools 协议（CDP）构建的工具、协议驱动、追踪查看器以及独立前端。遵循 [Awesome Manifesto](https://github.com/sindresorhus/awesome/blob/main/awesome.md)，我们让这份列表专注于真正有用的内容，而不是把该领域所有东西都收录进来。

## 目录

- [学习](#学习)
- [追踪与性能分析](#追踪与性能分析)
- [Chrome DevTools 协议](#chrome-devtools-协议)
- [在其他平台上使用 DevTools 前端](#在其他平台上使用-devtools-前端)
- [DevTools 扩展](#devtools-扩展)
- [退役项目](#退役项目)

---

## 学习
- [Dev Tips](https://umaar.com/dev-tips/) - 以动画 gif 形式呈现的大量技巧合集。
- [DevTools Tips](https://devtoolstips.org/) - 以迷你教程形式呈现的图文技巧合集。
- [Web cheatcodes](https://codepo8.github.io/web-cheatcodes/) - 面向非开发者的浏览器开发者工具。
- [Dear Console](https://codepo8.github.io/dearconsole) - 在浏览器控制台中使用的代码片段合集。
- [Chrome Secret Menus](https://github.com/sparkyrider/chrome-secret-menus) - 关于 Chrome 内部 `chrome://` 页面和诊断工具的指南。
- [Front-end Debugging Tools Handbook](https://github.com/lala-hakobyan/front-end-debugging-handbook) - 横跨 DevTools、框架扩展与 IDE 的前端调试实用指南。

---

## 追踪与性能分析

DevTools 的 Performance 追踪记录以及 V8 的 `.cpuprofile` 日志本质上都是纯 JSON，一些独立的查看器能很好地发挥它们的作用：

- [trace.cafe](https://trace.cafe/) - 直接在 DevTools Performance 面板中分享和查看 Web 性能追踪（[源码](https://github.com/paulirish/trace.cafe)）。
- [speedscope](https://github.com/jlfwong/speedscope) - 快速、可交互的火焰图查看器，可导入 Chrome 的 `.cpuprofile` 和时间线追踪。
- [cpupro](https://github.com/discoveryjs/cpupro) - 深度 V8/Chrome `.cpuprofile` 分析器，提供火焰图、调用树和热点诊断。
- [Perfetto](https://github.com/google/perfetto) - 系统性能分析与追踪分析套件（[ui.perfetto.dev](https://ui.perfetto.dev/)），支持 Chromium 追踪与 SQL 追踪查询。

---

## Chrome DevTools 协议

专业提示：打开 Chrome 内置的 [Protocol Monitor](https://developer.chrome.com/docs/devtools/protocol-monitor)（`More tools > Protocol monitor`），即可在浏览器中实时观察 CDP 流量并发出原始命令。

- [ChromeDevTools/devtools-protocol](https://github.com/chromedevtools/devtools-protocol) - **协议的权威位置**，包含 TypeScript 类型，也是协议缺陷的问题追踪器。
- [DevTools Protocol API Docs](https://chromedevtools.github.io/devtools-protocol/) - 用于浏览协议各域、方法和事件的可交互界面。

### 使用协议进行开发
- [chrome-remote-interface Wiki](https://github.com/cyrus-and/chrome-remote-interface/wiki) - 常见原始 CDP 任务的实用配方。
- [Chrome Protocol Proxy](https://github.com/wendigo/chrome-protocol-proxy) - 用于检查和调试 CDP 客户端流量的代理。

### 两大自动化库
- [Puppeteer](https://github.com/puppeteer/puppeteer) - 通过 CDP 和 WebDriver BiDi 控制 Chrome 的高级 Node.js API。另见 [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer)。
- [Playwright](https://github.com/microsoft/playwright) - 面向 Chromium、Firefox 和 WebKit 的跨浏览器自动化，支持 Node.js、Python、.NET 和 Java。另见 [awesome-playwright](https://github.com/mxschmitt/awesome-playwright)。

### 用于驱动协议（或其上层）的库

- JavaScript/Node.js: [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface) - 底层 CDP 客户端
- Rust: [chromiumoxide](https://github.com/mattsse/chromiumoxide) - 带有生成类型的异步/tokio 库
- Rust: [Rust Headless Chrome](https://github.com/rust-headless-chrome/rust-headless-chrome) - 高级无头 Chrome 客户端
- Java: [chrome-devtools-java-client](https://github.com/kklisura/chrome-devtools-java-client) - 底层协议客户端
- Java: [jvppeteer](https://github.com/fanyong920/jvppeteer) - 面向 Java 的无头 Chrome
- Python: [Zendriver](https://github.com/cdpdriver/zendriver) - 异步 CDP 浏览器自动化
- Python: [PyCDP](https://github.com/hyperiongray/python-chrome-devtools-protocol) - 无 IO 封装（另见 [Trio driver](https://github.com/hyperiongray/trio-chrome-devtools-protocol)）
- Python: [ChromeController](https://github.com/fake-name/ChromeController) - 高级浏览器管理
- Go: [chromedp](https://github.com/chromedp/chromedp) - 高级操作与任务
- Go: [Rod](https://github.com/go-rod/rod) - 高级自动化与抓取
- Go: [cdp](https://github.com/mafredri/cdp) - CDP 的类型安全绑定
- C#/.NET: [Puppeteer Sharp](https://github.com/hardkoded/puppeteer-sharp) - Puppeteer 移植版
- C#/.NET: [dotnet-chrome-protocol](https://github.com/seclerp/dotnet-chrome-protocol) - 运行时库与模式代码生成
- Ruby: [Ferrum](https://github.com/rubycdp/ferrum) - 控制 Chrome 的高级 API
- Ruby: [Cuprite](https://github.com/rubycdp/cuprite) - Capybara 驱动
- Kotlin: [chrome-devtools-kotlin](https://github.com/joffrey-bion/chrome-devtools-kotlin) - 基于协程的客户端库
- Kotlin: [kdriver](https://github.com/cdpdriver/kdriver) - 基于协程的高级自动化
- Clojure: [clj-chrome-devtools](https://github.com/tatut/clj-chrome-devtools) - 自动生成的 CDP 封装
- Clojure: [cuic](https://github.com/milankinen/cuic) - 高级 UI 测试自动化
- PHP: [chrome-devtools-protocol](https://github.com/jakubkulhan/chrome-devtools-protocol) - 客户端库

### 智能体浏览器自动化

> 我们对这一节 *极其* 挑剔。现在所有人都在为智能体封装浏览器——任何新增另一个 MCP 服务器或智能体 CLI 的 PR 都将被关闭，除非它真正有影响力，并且在底层对 CDP 做了新颖的事情。

- [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) - Chrome DevTools 官方 MCP 服务器，其中还包含一个 [CLI](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/skills/chrome-devtools-cli/SKILL.md)。
- [Webcmd](https://github.com/agentrhq/webcmd) - 将站点导航编译为面向 AI 智能体的、确定性的按站点 CLI 命令。
- [Lumen](https://github.com/omxyz/lumen) - 以视觉为先的浏览器智能体，通过 CDP 实现自愈式确定性回放。
- [bdg](https://github.com/szymdzum/browser-debugger-cli) - 持久化的后台 CDP 会话，将 DOM、网络、控制台以及原始协议方法作为 shell 命令暴露出来。

### 浏览器适配器
- [devtools-remote-debugger](https://github.com/Nice-PLQ/devtools-remote-debugger) - 通过用客户端 JS 实现的 CDP 代理远程调试网页。
- [Inspect](https://inspect.dev/) - 针对 iOS 与 Android 浏览器以及 WebView 使用 DevTools。**（闭源）**

## 在其他平台上使用 DevTools 前端

DevTools 的 UI 是一个通过 WebSocket 使用 CDP 的 Web 应用，因此你可以将其嵌入，或指向 Node、Ruby、移动端 WebView 或自定义运行时（内置目标见 `chrome://inspect`）。

- [ChromeDevTools/devtools-frontend](https://github.com/ChromeDevTools/devtools-frontend) - Chrome DevTools UI 的权威源码仓库（以 [chrome-devtools-frontend](https://www.npmjs.com/package/chrome-devtools-frontend) 形式发布在 npm 上）。
- [Chii](https://github.com/liriliri/chii) 与 [Eruda](https://github.com/liriliri/eruda) - 使用真实 `devtools-frontend` UI 的远程调试服务器（`Chii`，现代 Weinre 替代品）以及页内移动端 DevTools 控制台（`Eruda`）。
- [vscode-js-debug](https://github.com/microsoft/vscode-js-debug) - 为 VS Code 提供支持的官方 DAP 兼容 JavaScript 与 Chrome CDP 调试器。
- [VS Code - Elements for Microsoft Edge](https://github.com/microsoft/vscode-edge-devtools) - 嵌入在 VS Code 内部的 Elements 与 Network 面板。
- [Debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27) - 使用 `node --inspect` 调试和性能分析 Node.js 的指南。
- [ruby/debug](https://github.com/ruby/debug) - Ruby 官方调试器，支持通过 CDP 连接 Chrome DevTools（`rdbg --open=chrome`）。

---

## DevTools 扩展

- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - 检查 React 组件层级、props 以及分析器火焰图。
- [Vue.js Developer Tools](https://github.com/vuejs/devtools) - 检查 Vue.js 组件、状态与路由。
- [Angular DevTools](https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh) - 面向 Angular 的组件树检查与变更检测性能分析。
- [Redux Devtools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) - 面向 Redux 的时间旅行调试与动作历史。
- [Ember.js Inspector](https://chromewebstore.google.com/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi) - 检查 Ember.js 对象、路由与数据。
- [Web Component DevTools](https://chromewebstore.google.com/detail/web-component-devtools/gdniinfdlmmmjpnhgnkmfpffipenjljo) - 检查、修改并观察页面上的自定义元素与影子 DOM。
- [Clockwork](https://chromewebstore.google.com/detail/clockwork/dmggabnehkmmfmdffgajcflpdjlnoemp?hl=en) - 在 DevTools 中进行的 PHP 应用性能分析与请求检查。
- [RailsPanel](https://chromewebstore.google.com/detail/railspanel/gjpfobpafnhjhbajcjgccbbdofdckggg?hl=en-US) - Ruby on Rails 请求与 SQL 性能分析面板。

## 退役项目
一些旧项目，很可能已不再维护……但依然很酷。

- [ndb](https://github.com/GoogleChromeLabs/ndb) - 基于 DevTools 前端打造的增强型 Node.js 调试体验。
- [thetool](https://github.com/sfninja/thetool) - 面向 Node.js 的 CPU、内存、覆盖率与类型性能分析。
- [Facebook Stetho](https://github.com/facebook/stetho) - 使用 Chrome DevTools 进行的原生 Android 调试。
- [PonyDebugger](https://github.com/square/PonyDebugger) - 通过 Chrome DevTools 针对 iOS 应用进行的远程网络与 Core Data 调试。
- [betwixt](https://github.com/kdzwinel/betwixt) - 通过独立 DevTools Network 面板检查的系统级网络代理。
- [Dirac](https://github.com/binaryage/dirac) - 使用定制 DevTools 分支进行的 ClojureScript 调试。
- [VS Code - Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug/) - VS Code 最初的 Chrome 调试器（已被内置的 [vscode-js-debug](https://github.com/microsoft/vscode-js-debug) 取代，后者拥有丰富的 CDP/DAP 实现）。
- [noice-json-rpc](https://github.com/nojvek/noice-json-rpc) - 基于代理的 TypeScript/JS 库，将 CDP 域直接作为 API 暴露。
- [PuPHPeteer](https://github.com/rialto-php/puphpeteer) - 到 Node Puppeteer 的 PHP 桥接。
- [Insight](https://github.com/3Dparallax/insight/) - 面向 Chrome DevTools 的 WebGL 调试工具包。
- [Remote Debug Gateway](https://github.com/RemoteDebug/remotedebug-gateway) - 将调试客户端一次性连接到多个浏览器。
  - 多人 DevTools：[DevTools Remote](https://github.com/auchenberg/devtools-remote) - 远程调试他人的浏览器。
- [DevTools Backend](https://github.com/christian-bromann/devtools-backend) - 用于调试任意 Web 环境的 Chrome DevTools 后端独立实现。
- Python CDP 驱动：[pychrome](https://github.com/fate0/pychrome) - 底层 CDP 传输处理程序。
- [ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy) - 通过 CDP 暴露 Mobile Safari 与 UIWebView 实例。
  - [Remote Debug iOS WebKit adapter](https://github.com/RemoteDebug/remotedebug-ios-webkit-adapter) - 基于 `ios-webkit-debug-proxy` 构建，并将 WebKit 的远程调试协议转换为 CDP。
- [IE Diagnostics Adapter](https://github.com/Microsoft/IEDiagnosticsAdapter) - 将 IE 11 转换为 CDP 的协议适配器。
