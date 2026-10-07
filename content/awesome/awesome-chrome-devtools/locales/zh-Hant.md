# Awesome Chrome DevTools [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Chrome DevTools 生態系中出色的工具與資源

圍繞 Chrome DevTools 以及 Chrome DevTools 協定（CDP）建構的工具、協定驅動、追蹤檢視器以及獨立前端。遵循 [Awesome Manifesto](https://github.com/sindresorhus/awesome/blob/main/awesome.md)，我們讓這份清單專注於真正有用的內容，而不是把該領域所有東西都收錄進來。

## 目錄

- [學習](#學習)
- [追蹤與效能分析](#追蹤與效能分析)
- [Chrome DevTools 協定](#chrome-devtools-協定)
- [在其他平台上使用 DevTools 前端](#在其他平台上使用-devtools-前端)
- [DevTools 擴充功能](#devtools-擴充功能)
- [退役專案](#退役專案)

---

## 學習
- [Dev Tips](https://umaar.com/dev-tips/) - 以動畫 gif 形式呈現的大量技巧合集。
- [DevTools Tips](https://devtoolstips.org/) - 以迷你教學形式呈現的圖文技巧合集。
- [Web cheatcodes](https://codepo8.github.io/web-cheatcodes/) - 面向非開發者的瀏覽器開發者工具。
- [Dear Console](https://codepo8.github.io/dearconsole) - 在瀏覽器控制台中使用的程式碼片段合集。
- [Chrome Secret Menus](https://github.com/sparkyrider/chrome-secret-menus) - 關於 Chrome 內部 `chrome://` 頁面和診斷工具的指南。
- [Front-end Debugging Tools Handbook](https://github.com/lala-hakobyan/front-end-debugging-handbook) - 橫跨 DevTools、框架擴充功能與 IDE 的前端除錯實用指南。

---

## 追蹤與效能分析

DevTools 的 Performance 追蹤記錄以及 V8 的 `.cpuprofile` 日誌本質上都是純 JSON，一些獨立的檢視器能很好地發揮它們的作用：

- [trace.cafe](https://trace.cafe/) - 直接在 DevTools Performance 面板中分享和檢視 Web 效能追蹤（[原始碼](https://github.com/paulirish/trace.cafe)）。
- [speedscope](https://github.com/jlfwong/speedscope) - 快速、可互動的火焰圖檢視器，可匯入 Chrome 的 `.cpuprofile` 和時間軸追蹤。
- [cpupro](https://github.com/discoveryjs/cpupro) - 深度 V8/Chrome `.cpuprofile` 分析器，提供火焰圖、呼叫樹和熱點診斷。
- [Perfetto](https://github.com/google/perfetto) - 系統效能分析與追蹤分析套件（[ui.perfetto.dev](https://ui.perfetto.dev/)），支援 Chromium 追蹤與 SQL 追蹤查詢。

---

## Chrome DevTools 協定

專業提示：開啟 Chrome 內建的 [Protocol Monitor](https://developer.chrome.com/docs/devtools/protocol-monitor)（`More tools > Protocol monitor`），即可在瀏覽器中即時觀察 CDP 流量並發出原始命令。

- [ChromeDevTools/devtools-protocol](https://github.com/chromedevtools/devtools-protocol) - **協定的權威位置**，包含 TypeScript 型別，也是協定缺陷的問題追蹤器。
- [DevTools Protocol API Docs](https://chromedevtools.github.io/devtools-protocol/) - 用於瀏覽協定各域、方法和事件的可互動介面。

### 使用協定進行開發
- [chrome-remote-interface Wiki](https://github.com/cyrus-and/chrome-remote-interface/wiki) - 常見原始 CDP 任務的實用配方。
- [Chrome Protocol Proxy](https://github.com/wendigo/chrome-protocol-proxy) - 用於檢查和除錯 CDP 用戶端流量的代理。

### 兩大自動化函式庫
- [Puppeteer](https://github.com/puppeteer/puppeteer) - 透過 CDP 和 WebDriver BiDi 控制 Chrome 的高階 Node.js API。另見 [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer)。
- [Playwright](https://github.com/microsoft/playwright) - 面向 Chromium、Firefox 和 WebKit 的跨瀏覽器自動化，支援 Node.js、Python、.NET 和 Java。另見 [awesome-playwright](https://github.com/mxschmitt/awesome-playwright)。

### 用於驅動協定（或其上層）的函式庫

- JavaScript/Node.js: [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface) - 底層 CDP 用戶端
- Rust: [chromiumoxide](https://github.com/mattsse/chromiumoxide) - 帶有生成型別的非同步/tokio 函式庫
- Rust: [Rust Headless Chrome](https://github.com/rust-headless-chrome/rust-headless-chrome) - 高階無頭 Chrome 用戶端
- Java: [chrome-devtools-java-client](https://github.com/kklisura/chrome-devtools-java-client) - 底層協定用戶端
- Java: [jvppeteer](https://github.com/fanyong920/jvppeteer) - 面向 Java 的無頭 Chrome
- Python: [Zendriver](https://github.com/cdpdriver/zendriver) - 非同步 CDP 瀏覽器自動化
- Python: [PyCDP](https://github.com/hyperiongray/python-chrome-devtools-protocol) - 無 IO 封裝（另見 [Trio driver](https://github.com/hyperiongray/trio-chrome-devtools-protocol)）
- Python: [ChromeController](https://github.com/fake-name/ChromeController) - 高階瀏覽器管理
- Go: [chromedp](https://github.com/chromedp/chromedp) - 高階操作與任務
- Go: [Rod](https://github.com/go-rod/rod) - 高階自動化與爬取
- Go: [cdp](https://github.com/mafredri/cdp) - CDP 的型別安全綁定
- C#/.NET: [Puppeteer Sharp](https://github.com/hardkoded/puppeteer-sharp) - Puppeteer 移植版
- C#/.NET: [dotnet-chrome-protocol](https://github.com/seclerp/dotnet-chrome-protocol) - 執行期函式庫與結構描述程式碼生成
- Ruby: [Ferrum](https://github.com/rubycdp/ferrum) - 控制 Chrome 的高階 API
- Ruby: [Cuprite](https://github.com/rubycdp/cuprite) - Capybara 驅動
- Kotlin: [chrome-devtools-kotlin](https://github.com/joffrey-bion/chrome-devtools-kotlin) - 基於協程的用戶端函式庫
- Kotlin: [kdriver](https://github.com/cdpdriver/kdriver) - 基於協程的高階自動化
- Clojure: [clj-chrome-devtools](https://github.com/tatut/clj-chrome-devtools) - 自動生成的 CDP 封裝
- Clojure: [cuic](https://github.com/milankinen/cuic) - 高階 UI 測試自動化
- PHP: [chrome-devtools-protocol](https://github.com/jakubkulhan/chrome-devtools-protocol) - 用戶端函式庫

### 代理式瀏覽器自動化

> 我們對這一節 *極其* 挑剔。現在所有人都在為代理封裝瀏覽器——任何新增另一個 MCP 伺服器或代理 CLI 的 PR 都將被關閉，除非它真正有影響力，並且在底層對 CDP 做了新穎的事情。

- [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) - Chrome DevTools 官方 MCP 伺服器，其中還包含一個 [CLI](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/skills/chrome-devtools-cli/SKILL.md)。
- [Webcmd](https://github.com/agentrhq/webcmd) - 將網站導覽編譯為面向 AI 代理的、確定性的按網站 CLI 命令。
- [Lumen](https://github.com/omxyz/lumen) - 以視覺為先的瀏覽器代理，透過 CDP 實現自愈式確定性回放。
- [bdg](https://github.com/szymdzum/browser-debugger-cli) - 持久化的背景 CDP 工作階段，將 DOM、網路、主控台以及原始協定方法作為 shell 命令暴露出來。

### 瀏覽器轉接器
- [devtools-remote-debugger](https://github.com/Nice-PLQ/devtools-remote-debugger) - 透過用用戶端 JS 實作的 CDP 代理遠端除錯網頁。
- [Inspect](https://inspect.dev/) - 針對 iOS 與 Android 瀏覽器以及 WebView 使用 DevTools。**（閉源）**

## 在其他平台上使用 DevTools 前端

DevTools 的 UI 是一個透過 WebSocket 使用 CDP 的 Web 應用，因此你可以將其嵌入，或指向 Node、Ruby、行動端 WebView 或自訂執行環境（內建目標見 `chrome://inspect`）。

- [ChromeDevTools/devtools-frontend](https://github.com/ChromeDevTools/devtools-frontend) - Chrome DevTools UI 的權威原始碼倉庫（以 [chrome-devtools-frontend](https://www.npmjs.com/package/chrome-devtools-frontend) 形式發布在 npm 上）。
- [Chii](https://github.com/liriliri/chii) 與 [Eruda](https://github.com/liriliri/eruda) - 使用真實 `devtools-frontend` UI 的遠端除錯伺服器（`Chii`，現代 Weinre 替代品）以及頁內行動端 DevTools 主控台（`Eruda`）。
- [vscode-js-debug](https://github.com/microsoft/vscode-js-debug) - 為 VS Code 提供支援的官方 DAP 相容 JavaScript 與 Chrome CDP 除錯器。
- [VS Code - Elements for Microsoft Edge](https://github.com/microsoft/vscode-edge-devtools) - 嵌入在 VS Code 內部的 Elements 與 Network 面板。
- [Debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27) - 使用 `node --inspect` 除錯和效能分析 Node.js 的指南。
- [ruby/debug](https://github.com/ruby/debug) - Ruby 官方除錯器，支援透過 CDP 連接 Chrome DevTools（`rdbg --open=chrome`）。

---

## DevTools 擴充功能

- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - 檢查 React 元件層級、props 以及分析器火焰圖。
- [Vue.js Developer Tools](https://github.com/vuejs/devtools) - 檢查 Vue.js 元件、狀態與路由。
- [Angular DevTools](https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh) - 面向 Angular 的元件樹檢查與變更偵測效能分析。
- [Redux Devtools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) - 面向 Redux 的時間旅行除錯與動作歷史。
- [Ember.js Inspector](https://chromewebstore.google.com/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi) - 檢查 Ember.js 物件、路由與資料。
- [Web Component DevTools](https://chromewebstore.google.com/detail/web-component-devtools/gdniinfdlmmmjpnhgnkmfpffipenjljo) - 檢查、修改並觀察頁面上的自訂元素與影子 DOM。
- [Clockwork](https://chromewebstore.google.com/detail/clockwork/dmggabnehkmmfmdffgajcflpdjlnoemp?hl=en) - 在 DevTools 中進行的 PHP 應用效能分析與請求檢查。
- [RailsPanel](https://chromewebstore.google.com/detail/railspanel/gjpfobpafnhjhbajcjgccbbdofdckggg?hl=en-US) - Ruby on Rails 請求與 SQL 效能分析面板。

## 退役專案
一些舊專案，很可能已不再維護……但依然很酷。

- [ndb](https://github.com/GoogleChromeLabs/ndb) - 基於 DevTools 前端打造的增強型 Node.js 除錯體驗。
- [thetool](https://github.com/sfninja/thetool) - 面向 Node.js 的 CPU、記憶體、覆蓋率與型別效能分析。
- [Facebook Stetho](https://github.com/facebook/stetho) - 使用 Chrome DevTools 進行的原生 Android 除錯。
- [PonyDebugger](https://github.com/square/PonyDebugger) - 透過 Chrome DevTools 針對 iOS 應用進行的遠端網路與 Core Data 除錯。
- [betwixt](https://github.com/kdzwinel/betwixt) - 透過獨立 DevTools Network 面板檢查的系統級網路代理。
- [Dirac](https://github.com/binaryage/dirac) - 使用客製 DevTools 分支進行的 ClojureScript 除錯。
- [VS Code - Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug/) - VS Code 最初的 Chrome 除錯器（已被內建的 [vscode-js-debug](https://github.com/microsoft/vscode-js-debug) 取代，後者擁有豐富的 CDP/DAP 實作）。
- [noice-json-rpc](https://github.com/nojvek/noice-json-rpc) - 基於代理的 TypeScript/JS 函式庫，將 CDP 域直接作為 API 暴露。
- [PuPHPeteer](https://github.com/rialto-php/puphpeteer) - 到 Node Puppeteer 的 PHP 橋接。
- [Insight](https://github.com/3Dparallax/insight/) - 面向 Chrome DevTools 的 WebGL 除錯工具包。
- [Remote Debug Gateway](https://github.com/RemoteDebug/remotedebug-gateway) - 將除錯用戶端一次性連接到多個瀏覽器。
  - 多人 DevTools：[DevTools Remote](https://github.com/auchenberg/devtools-remote) - 遠端除錯他人的瀏覽器。
- [DevTools Backend](https://github.com/christian-bromann/devtools-backend) - 用於除錯任意 Web 環境的 Chrome DevTools 後端獨立實作。
- Python CDP 驅動：[pychrome](https://github.com/fate0/pychrome) - 底層 CDP 傳輸處理程式。
- [ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy) - 透過 CDP 暴露 Mobile Safari 與 UIWebView 執行個體。
  - [Remote Debug iOS WebKit adapter](https://github.com/RemoteDebug/remotedebug-ios-webkit-adapter) - 基於 `ios-webkit-debug-proxy` 建構，並將 WebKit 的遠端除錯協定轉換為 CDP。
- [IE Diagnostics Adapter](https://github.com/Microsoft/IEDiagnosticsAdapter) - 將 IE 11 轉換為 CDP 的協定轉接器。
