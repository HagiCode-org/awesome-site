# Awesome TypeScript

## 🗄️ 封存說明

<details>
  <summary><strong>摘要（2026）</strong> - 為何封存此清單</summary>
<hr/>
我在 11 年前創立 awesome-typescript，當時 TypeScript 還在發展中，遠未成為今天的預設選擇。那時，蒐集並整理資源很重要。這能幫助早期採用者找到可靠的資料、分享得來不易的經驗，並圍繞著這項許多開發者低估的工具建立社群。

多年來，我曾多次討論 TypeScript 的未來（尤其是在 2016 至 2018 年間）。我相信它會成為現代開發的基石。如今，很難不承認這個預測已成真。TypeScript 現在是前端開發的實質標準語言，幾乎無所不在：各種應用程式、SDK、範例，甚至關聯不大的專案也都會採用 TypeScript。

這項成功也為這份清單帶來新的問題。當幾乎每個專案都使用 TypeScript，接受所有可能的新增項目就不再是整理，而會變成無止盡的維護工作。社群貢獻已減少，訊噪比也有所變化，繼續擴充清單已不再符合最初的目的。

與其繼續維護一份無法反映當前生態中有意義且經過精選的最佳資源清單，我決定封存 awesome-typescript，並保留它作為歷史參考。

感謝所有曾經貢獻的人，無論是提交 pull request、推薦資源，或分享意見。你們的協助讓這份清單在最需要它時發揮作用，也凝聚了早期的 TypeScript 社群。
<br/><hr />

</details>

<hr />

#### -= Awesome TypeScript =- [Awesome Elasticsearch](https://github.com/dzharii/awesome-elasticsearch) →

> 收錄適用於用戶端與伺服器端開發的優質 TypeScript 資源。用 TypeScript 撰寫出色的 JavaScript。靈感來自 [awesome](https://github.com/sindresorhus/awesome) 清單。

## 更多 awesome 資源

> [semlinker/awesome-typescript](https://github.com/semlinker/awesome-typescript) 感謝 @semlinker 精心整理這份清單！

## 貢獻方式

請先快速閱讀[貢獻指南](/contributing.md)。如果你發現此處的套件或專案已停止維護，或不適合收錄，請提交 pull request 來改善本檔案。

## 目錄

- [Awesome TypeScript 必備資源](#awesome-typescript-essential-resources)
- [TypeScript 專案起始範本](#typescript-project-starters)
- [書籍](#books)
- [參考清單](#reference-lists)
- [部落格](#blogs)
- [CLI 與 REPL](#cli-and-repl)
- [IDE（整合式開發環境）](#ide)
- [建置系統](#build-systems)
- [雲端資料倉儲](#cloud-data-warehousing)
- [模組打包工具](#module-bundlers)
- [內容管理系統（CMS）](#cms)
- [工具](#tools)
- [CSS-in-JS 型別支援](#css-in-js-with-types)
- [型別](#types)
- [執行階段](#runtime)
- [以 TypeScript 打造：行動應用程式、網頁、後端 API、獨立應用程式、函式庫](#built-with-typescript)
- [大型語言模型（LLM）](#llm)
- [影片課程](#video-courses)
- [教學](#tutorials)
- [路線圖](#roadmap)
- [致謝](#acknowledgements)

## 從（Awesome）TypeScript 開始

### Awesome TypeScript 必備資源
* :books: [Handbook - Welcome to TypeScript](http://www.typescriptlang.org/Handbook) TypeScript 官方學習資源
* :books: [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/) 作者：[Basarat Ali Syed](https://twitter.com/basarat)
* :octocat: [Microsoft/TypeScript on Github](https://github.com/Microsoft/TypeScript) 在 Github 上查看 TypeScript 的原始碼！或者……直接閱讀程式碼
* :octocat:[The official TypeScript Roadmap](https://github.com/Microsoft/TypeScript/wiki/Roadmap)
* :books: [TypeScript Team Blog](http://blogs.msdn.com/b/typescript/) 提供公告與近期更新
* :octocat: [DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) 高品質 TypeScript 型別定義的儲存庫，由 Boris Yankov 與數千位貢獻者維護
* :octocat: [Type search](https://aka.ms/typings)，在 npm 上搜尋型別定義
* :books: [Community Curated Resources](https://hackr.io/tutorials/learn-typescript)
* :octocat: [Clean Code concepts adapted for TypeScript](https://github.com/labs42io/clean-code-typescript)
* :computer: [Should You Learn TypeScript? (Benefits & Resources)](https://snipcart.com/blog/learn-typescript-why-use-ts)
* :computer: [Learn how to unleash the full potential of the Turing Complete type system of TypeScript!](https://type-level-typescript.com)，💵 線上課程，前 5 章免費，作者為 [Gabriel Vergnaud](https://twitter.com/GabrielVergnaud)
* :computer: [Codington](https://codington.io) 互動式 TypeScript 練習，提供即時回饋，專為學習與教學設計。
* :octocat: [Codebook](https://github.com/gvanastasov/codebook-typescript) 閱讀並執行小型程式碼片段，循序學習 TypeScript，從基礎概念到進階內容。
* :octocat: [Type Challenges](https://github.com/type-challenges/type-challenges) TypeScript 型別挑戰集，附有線上評測系統。
- :books: [TypeScript Style Guide](https://mkosir.github.io/typescript-style-guide) 簡明列出慣例與最佳實務，協助撰寫一致且易於維護的程式碼。
- :art: [Visual Types](https://types.kitlangton.com/) 以互動視覺化方式呈現 TypeScript 概念。欣賞這些漂亮的色彩吧。

### TypeScript 專案起始範本
* [React Starter Kit](https://github.com/kriasoft/react-starter-kit) – 使用 Bun、TypeScript、React、tRPC、Drizzle ORM 與 Cloudflare Workers 建置現代網頁應用程式的全端樣板。
* [typescript-starter](https://github.com/bitjson/typescript-starter) – 快速產生並設定新函式庫與 Node.js 專案的 CLI
* [next-smrt](https://github.com/csprance/next-smrt) – 採用 Redux、Styled Components、Material UI 與 TypeSafe Actions 的 TypeScript/NextJs 樣板
* :octocat: [Next-Postgres-With-Typescript](https://github.com/brandontle/next-postgres-with-typescript) - 類似論壇的全端網頁應用程式樣板，使用 Next.js 7.0.2、Sequelize 4/Postgres、Typescript、Redux、Passport Local Auth 與 Emotion
* [MicroTS](https://www.npmjs.com/package/microts) 採用介面優先方法的微服務程式碼產生器：從 OpenAPI (Swagger) REST API 規格產生完整專案，包含 TypeScript 程式碼、輸入驗證器、UI、測試與 Docker 設定。
* [pankod/next-boilerplate](https://github.com/pankod/next-boilerplate) 結構完善、可供正式環境使用的 Next.js 樣板，包含 Typescript、Redux、Jest、Enzyme、Express.js、Sass、Css、EnvConfig、反向 Proxy、Bundle Analyzer 與內建 CLI
* [jsynowiec/node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate) 新近更新、方便開發者使用且功能完整，同時保持精簡的範本。適用於大多數 Node.js 專案，開箱即用。包含並設定好所有基本工具，支援最新 Node.js LTS 與 TypeScript 版本。
* [typescript-express-starter](https://github.com/ljlm0402/typescript-express-starter) - 快速易用的 TypeScript Express 起始範本。
* [The Knests Stack](https://github.com/tudorconstantin/knests/) - 全端樣板（黑客松起始專案），包含 PostgreSQL、Knex.js、NestJS、Next.js、GraphQL、React（使用 hooks 與 typescript）、Material-UI、Docker 多階段映像、Docker compose 與完整設定的 Gitlab CI/CD 管線。
* [tRPC + Next.js](https://trpc.io/docs/nextjs/introduction) - 支援端對端型別安全 React 開發的全端起始專案
* [nd.ts](https://github.com/heyayushh/nd.ts/) - 迅速建立最精簡的 Node.ts 專案
* :octocat: [samchon/backend](https://github.com/samchon/backend) - 使用 [NestJS](https://nestjs.com)（[nestia](https://github.com/samchon/nestia)）與 [TypeORM](https://typeorm.io)（[safe-typeorm](https://github.com/samchon/safe-typeorm)）的 TypeScript 後端範本專案。透過衍生範例專案協助後端新手。此外，也能透過 [pm2](https://pm2.keymetrics.io/) 在程序層級支援不中斷更新系統。
* :ok_man: [ts-express-boilerplate](https://github.com/d4rkstar/ts-express-boilerplate) - 適合啟動後端專案的 ExpressJS / Typescript 範本，著重簡潔與精簡功能 :P，並預先設定記錄與測試。資料存取採用 Typeorm。
* [create-typescript-app](https://github.com/hein-htut-aung/create-typescript-app) - 提供 TypeScript 網頁應用程式的起始架構，包含 pnpm、Rollup、Jest，以及搭配 SCSS 的 CSS Modules。
* [ts-vite-npm-template](https://github.com/kaandesu/ts-vite-npm-template) - 製作 TypeScript NPM 套件的一站式方案，採用 Vite，內建 GitHub Pages 線上示範部署、自動化測試與建置工作流程、Vite 單元測試設定（含涵蓋率分析），以及套件 README.md 範本。

### 書籍
* :books: [TypeScript in 50 Lessons](https://typescript-book.com/) 作者：Stefan Baumgartner
* :books: :fire: [TypeScript Quickly](https://www.manning.com/books/typescript-quickly) 學習現代 TypeScript 並打造自己的區塊鏈；範例程式碼：[yfain/getts](https://github.com/yfain/getts)
* :books: [Angular Development with Typescript, Second Edition (MEAP October 2017)](https://www.manning.com/books/angular-development-with-typescript-second-edition) 《Angular Development with Typescript, Second Edition》是一本中階教學書，為熟悉使用其他框架與工具建置網頁應用程式的開發者介紹 Angular 與 TypeScript。（作者：Yakov Fain 與 Anton Moiseev；Manning）
* :books: [Angular 2 Development with TypeScript (2016)](https://www.manning.com/books/angular-2-development-with-typescript) 作者：Yakov Fain 與 Anton Moiseev；Manning
* :books: [Learning TypeScript 2.x 2nd Ed.](https://www.learningtypescript.com) 作者：Remo H. Jansen
* :books: [Mastering TypeScript 2nd Ed.](https://www.packtpub.com/application-development/mastering-typescript-second-edition) 作者：Nathan Rozentals
* :books: [Beginning Angular 4 with TypeScript](https://www.amazon.com/Beginning-Angular-Typescript-Greg-Lim/dp/1542916674) 作者：Greg Lim
* :books: [Programming with Types](https://www.manning.com/books/programming-with-types) - 利用型別系統的力量，設計安全、可靠、正確且易於維護和理解的軟體。（作者：Vlad Riscutia）
* :books: [Essential TypeScript 5](https://www.manning.com/books/essential-typescript-5) - 暢銷指南的第三版，完整介紹 TypeScript。（作者：Adam Freeman）
* :books: [Effective TypeScript](https://www.oreilly.com/library/view/effective-typescript/9781492053736/) 作者：Dan Vanderkam
* :books: [Advanced TypeScript 3 Programming Projects](https://www.packtpub.com/product/advanced-typescript-3-programming-projects/9781789133042) 作者：Peter O'Hanlon
* :books: [The Concise TypeScript Book (Free and Open Source)](https://github.com/gibbok/typescript-book) 作者：Simone Poggiali
* :books: [Acing the Frontend Interview (Early Access)](https://www.manning.com/books/acing-the-frontend-interview) 作者：Jennifer Fu (Manning)

### 參考清單
* [TypeScript Reference for JS developers](https://welldan97.github.io/typescript-reference/) - 關鍵字、運算子、陳述式與指示詞詞彙表

### 部落格
* [@captain-yossarian's blog](https://catchts.com/) - 專門探討 TypeScript 靜態型別

### CLI 與 REPL
* [Taze](https://github.com/antfu/taze) 現代 CLI 工具，讓你的相依套件保持最新
* 使用 [ts-node](https://github.com/TypeStrong/ts-node) 執行指令碼或 REPL
* 如何建立可執行的 TypeScript 指令碼：
  1. 確認已安裝 `npx`（隨 `npm >= 5.2` 提供）與 `typescript` 套件
  1. 將此 [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) 加在指令碼第一行：`#!npx ts-node`
  1. 將指令碼設為可執行：`chmod +x script.ts`
  1. 直接執行：`./script.ts` :)

### IDE（整合式開發環境）
#### 離線
##### Visual Studio
* [ Visual Studio Community Edition 2015](https://www.visualstudio.com/products/visual-studio-community-vs) - 免費（有條件）的 IDE，內建 TypeScript 支援
  * [VS Addon - TypescriptSyntaxPaste](https://visualstudiogallery.msdn.microsoft.com/eb0887f8-3ac1-434a-b50b-f0112f1572f7) - 可複製 C# 原始碼，再貼上為 Typescript 語法，協助轉換 DTO 或介面
* [NodeJS Tools for Visual Studio](https://github.com/Microsoft/nodejstools)

##### 其他（外掛 || 跨平台 || 開源 || 免費）
* [Visual Studio Code](https://www.visualstudio.com/en-us/products/code-vs.aspx)
* [PhpStorm](https://www.jetbrains.com/phpstorm/download/)
* [WebStorm](https://www.jetbrains.com/webstorm/download/)
* [CATS](http://jbaron.github.io/cats/) 是供 TypeScript 與 Web 開發者使用的 IDE，作者為 @jbaron
* [TypeScript Sublime Plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin) 作者：@Microsoft
* [Atom TypeScript](https://github.com/TypeStrong/atom-typescript) 作者：@TypeStrong
* [TypeScript Interactive Development Environment for Emacs](https://github.com/ananthakumaran/tide) 作者：@ananthakumaran
* [TypeScript Syntax for VIM](https://github.com/leafgarland/typescript-vim)
* :octocat: [Typescript addin for](https://github.com/mrward/typescript-addin) MonoDevelop、SharpDevelop 與 Xamarin Studio；另有一篇簡短的[評論文章](http://lastexitcode.com/blog/2015/04/01/TypeScriptSupportInXamarinStudio/)
* [Typescript tooling for Neovim](https://github.com/mhartington/nvim-typescript) 是適用於 Neovim 的 TypeScript 語言服務外掛。
* [Coc](https://github.com/neoclide/coc.nvim) 讓你的 Vim/Neovim 變得和 VSCode 一樣智慧。

#### 線上

##### Playground 互動環境
* [TypeScript playground](https://agentcooper.github.io/typescript-play/) 作者：@agentcooper，支援多個 TS 版本與編譯器目標
* [TypeScript playground-on-ace](https://github.com/hi104/typescript-playground-on-ace) 作者：@hi104，[已更新至 TypeScript 1.5](https://github.com/basarat/TypeScriptEditor)
* [TypeScript official Playground](http://www.typescriptlang.org/Playground/)
* [JS Bin](http://jsbin.com/?js)（選擇 TypeScript）
* [Codepen](http://codepen.io/)（選擇 TypeScript）
* [TypeScript Interpret - Terminal Emulator](http://niutech.github.io/typescript-interpret/) 作者：@niutech
* [TypeScript Editor](http://drake7707.github.io/Typescript-Editor/) 作者：@drake7707

## 建置系統
* [Grunt](http://gruntjs.com/) 工作：
  - [grunt-ts](https://www.npmjs.com/package/grunt-ts) - 可在 GruntJS 建置指令碼中處理 TypeScript 編譯工作的 npm 套件
* [Zwitterion](https://github.com/lastmjs/zwitterion) - 極簡開發伺服器，內建 TypeScript 檔案支援。
* [Nx](https://github.com/nrwl/nx) - 智慧、快速且可擴充的建置系統

## 雲端資料倉儲
* :sparkles: [Crisp BigQuery](https://github.com/winwiz1/crisp-bigquery) 起始專案，可將 Google BigQuery 資料傳送至終端使用者的瀏覽器，並控制成本。提供豐富的資料呈現方式。
* [DDB-Table](https://github.com/neuledge/ddb-table) 為 AWS DynamoDB 提供強型別查詢與資料表
* [DynamoDB-Toolbox](https://github.com/dynamodb-toolbox/dynamodb-toolbox) 輕量且具型別安全的 AWS DynamoDB 查詢建構器

## 模組打包工具
* [Farm](https://farm-fe.github.io/) - 以 Rust 撰寫、與 Vite 相容且速度極快的網頁建置工具
* [Rspack](https://www.rspack.dev/) - 以 Rust 為基礎的高速網頁打包工具 🦀️
* [Vite](https://vitejs.dev/) - 新一代前端工具
* [Webpack](http://webpack.github.io/) - 支援 CommonJS 與 AMD 模組打包
* [Browserify](http://browserify.org/) - CommonJS 模組打包工具。並未「開箱即用」支援 TypeScript，但可搭配 * [Grunt](http://gruntjs.com/) 工作使用：[grunt-ts](https://www.npmjs.com/package/grunt-ts)、[grunt-browserify](https://www.npmjs.com/package/grunt-browserify)、[grunt-contrib-uglify](https://www.npmjs.com/package/grunt-contrib-uglify)
* [fuse-box](https://github.com/fuse-box/fuse-box) | [http://fuse-box.org/](http://fuse-box.org/) - TypeScript 範例：[fuse-box-ts-react-reflux-seed](https://github.com/fuse-box/fuse-box-ts-react-reflux-seed)

## 內容管理系統（CMS）
* [Factor](https://factor.dev) - JavaScript CMS（原生支援 TypeScript）
* [Graphweaver](https://github.com/exogee-technology/graphweaver) - 將多個資料來源整合為單一 GraphQL Headless CMS。

## 工具
* [sqlx-ts](https://github.com/JasonShin/sqlx-ts) - SQLx-ts 是 CLI 應用程式，提供無需 DSL 的編譯期查詢檢查，並根據 SQL 產生型別，讓程式碼具備型別安全
* [bun](https://bun.sh/) - Bun 是快速的 JavaScript 執行環境、套件管理器、打包工具與測試執行器
* [deno](https://deno.land/) - 安全的 JavaScript 與 TypeScript 執行環境
* [OXC](https://github.com/web-infra-dev/oxc) - 一套以 Rust 撰寫、用於 JavaScript 與 TypeScript 的高效能工具
* [biome](https://github.com/biomejs/biome) - Biome 能在極短時間內格式化並檢查你的程式碼
* [SweetIQ/schemats](https://github.com/SweetIQ/schemats) 從 SQL 資料庫結構產生 TypeScript 介面定義
* [TypeDoc](http://typedoc.org/) - TypeScript 專案文件產生器
* [TypeScript Standard](https://github.com/e2tox/typescript-standard) - 無需設定的 TypeScript 2 Standard 驗證
* [typed-install](https://github.com/xavdid/typed-install) - 無論相依套件位於何處，都能輕鬆安裝套件與其型別定義
* [type-config](https://github.com/Saul-Mirone/type-config) - tsconfig 產生器。
* [Zapatos](https://jawj.github.io/zapatos/) - TypeScript 的零抽象 Postgres
* [dep-tree](https://github.com/gabotechs/dep-tree) - 繪製專案的檔案相依樹，並／或依照自訂規則驗證。
* [itertools-ts](https://github.com/Smoren/itertools-ts) - 將擴充版 itertools 移植至 TypeScript 與 JavaScript。提供大量處理可迭代集合（包括非同步集合）的函式。
* [ParaglideJS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) - 產生完整型別安全翻譯的 i18n 編譯器
* [pg](https://github.com/datawan-labs/pg) - 瀏覽器中的 PostgreSQL Playground，無需伺服器，僅使用用戶端與 pglite（postgresql wasm）
* [nocodb](https://github.com/nocodb/nocodb) - 🔥 🔥 🔥 開源 Airtable 替代方案
* [jqlite](https://github.com/Jay-Karia/jqlite) - ⚡ JSON 查詢語言
* [pompelmi](https://github.com/pompelmi/pompelmi) - Node.js 檔案上傳惡意程式掃描，協助防範遠端檔案包含（RFI），並支援 Express、Koa 與 Next.js 配接器
* [codables](https://codableslib.com/) - 以裝飾器為基礎、宣告式且型別豐富的 JSON 序列化／反序列化工具，可處理幾乎任何資料型別
* [Rev-dep](https://github.com/jayu/rev-dep) - 追蹤匯入、找出循環相依、搜尋未使用程式碼並清理 node modules，全都透過極速 CLI 完成。

## 型別
* [jsonup](https://github.com/tani/jsonup) - 編譯期 JSON 剖析器
* [type-o-rama](https://github.com/stereobooster/type-o-rama) - JS 型別系統互通性
* [utility-types](https://github.com/piotrwitek/utility-types) - TypeScript 工具型別（相容於 Flow 的工具型別）
* [elm-ts](https://github.com/gcanti/elm-ts) - 將 Elm 架構移植至 TypeScript，採用 fp-ts、io-ts、rxjs5 與 React
* [ts-essentials](https://github.com/krzkaczor/ts-essentials) - 集合所有必備 TypeScript 型別
* [typescript-conditional-types](https://github.com/LeDDGroup/typescript-conditional-types) - TypeScript 泛型型別輔助工具
* [ts-types-utils](https://github.com/LeDDGroup/ts-types-utils) - TypeScript 型別工具
* [typesync](https://github.com/jeffijoe/typesync) - 為 package.json 中的相依套件安裝缺少的 TypeScript 型別定義。
* [type-fest](https://github.com/sindresorhus/type-fest) - 必備 TypeScript 型別集
* [typetype](https://github.com/mistlog/typetype) - 專為產生 TypeScript 型別而設計的程式語言
* [nominal](https://github.com/Coder-Spirit/nominal) - 名義型別與相依型別，適用於 Typescript。
* [@tool-belt/type-predicates](https://github.com/tool-belt/type-predicates) - 型別述詞、斷言函式與工具。
* [getmytypes](https://github.com/halchester/getmytypes) - 將 @types 檔案安裝至 devDependencies。
* [ts-toolbelt](https://github.com/millsp/ts-toolbelt) - 大型 TypeScript 型別工具集
* [string-ts](https://github.com/gustavoguichard/string-ts) - 適用於各種用途的強型別字串函式
* [lib-result](https://github.com/AhmedOsman101/lib-result) - 輕量、受 Rust 啟發的 `Result` 型別，供 TypeScript 與 JavaScript 進行型別安全的錯誤處理。
* [iso-locale](https://github.com/reacture-io/iso-locale) - 完整的 TypeScript 函式庫，提供處理國家、語言、方言與貨幣的 ISO 標準。

## CSS-in-JS 型別支援
* [PandaCSS](https://panda-css.com/) - CSS-in-JS，於建置時產生樣式，支援 RSC、多變體與一流的開發者體驗
* [Vanilla-Extract](https://vanilla-extract.style/) - 使用 TypeScript 作為前處理器。撰寫具型別安全、區域限定的類別、變數與佈景主題，再於建置時產生靜態 CSS 檔案
* [StyleX](https://stylexjs.com/) - 用於定義最佳化使用者介面樣式的 JavaScript 函式庫

### 執行階段
* [json-decoder](https://github.com/venil7/json-decoder) - 型別安全的 JSON 解碼器與執行階段檢查器
* [typescript-is](https://github.com/woutervh-/typescript-is) - 可產生執行階段型別檢查的 TypeScript 轉換器。
* [type-plus](https://github.com/unional/type-plus) - 額外的型別與型別調整工具
* [Agent Framework](https://github.com/agentframework/agentframework) 使用裝飾器為類別與方法建立攔截器
* [SunTori](https://github.com/LancerComet/SunTori) - JSON 序列化／反序列化工具，確保執行階段的安全性。
* [config](https://github.com/mrspartak/config) - 執行階段設定解析器

## 驗證
* [@core/match](https://github.com/tani/ts-match) - 具型別安全的解構指派與模式比對驗證
* [io-ts](https://github.com/gcanti/io-ts) - 用於 IO 解碼／編碼的執行階段型別系統
* [zod](https://github.com/vriad/zod) - 以 TypeScript 為優先，並可靜態推斷型別的結構描述驗證工具
* [valibot](https://github.com/fabian-hiller/valibot) - Valibot 是一個可靜態推斷型別的 Typescript 結構描述函式庫，與 Zod 相比格外輕量，且沒有相依套件。
* [runtypes](https://github.com/pelotom/runtypes) - 為靜態型別提供執行階段驗證
* [ts-codec](https://github.com/julienvincent/ts-codec) - 用於編碼、解碼與驗證資料的 TypeScript Codec
* [ow](https://github.com/sindresorhus/ow) - 讓人輕鬆使用的函式引數驗證
* [superstruct](https://github.com/ianstormtaylor/superstruct) - 簡單且可組合的資料驗證方式
* [computed-types](https://github.com/neuledge/computed-types) - 🦩 類似 Joi 的 TypeScript 驗證工具
* [json-schema-to-ts](https://github.com/thomasaribart/json-schema-to-ts) - 從 JSON 結構描述動態推斷型別
* [Yunomix](https://github.com/LancerComet/MyWebLibs/tree/master/Yunomix) - 以 AOP 形式設計的表單驗證工具組。
* [typia](https://github.com/samchon/typia) - 使用純 TypeScript 型別、速度快 20,000 倍的執行階段驗證器。只需一行，例如 `typia.assert<T>(input)`。也支援快 200 倍的 JSON 序列化與 Protocol Buffer 功能。🚀 (另請參閱 https://typia.io/docs)
* [fta](https://github.com/sgb-io/fta) - 以 Rust 為基礎的靜態分析工具，用於監控程式碼品質
* [dto-classes](https://github.com/rsinger86/dto-classes) - 對開發者友善的剖析、驗證與序列化工具。預設採用靜態型別，以屬性而非裝飾器定義欄位結構描述。
* [iso-locale](https://github.com/reacture-io/iso-locale) - 完整的 TypeScript 函式庫，提供處理國家、語言、方言與貨幣的 ISO 標準。
## 以 TypeScript 打造
### 行動應用程式
* :octocat: [ReactNative](https://reactnative.dev/) - 使用 React 建立 Android、iOS 等平台的原生應用程式
* :octocat: [NativeScript](https://github.com/NativeScript/NativeScript) - 開源框架，使用 JavaScript 建置跨平台、真正原生的 iOS、Android 與 Windows 行動應用程式
* [Monaco Editor](https://microsoft.github.io/monaco-editor/)

### 網頁
* :octocat: [Angular](https://github.com/angular/angular) - 用於建置行動與桌面網頁應用程式的開發平台
* :octocat: [It-Tools](https://it-tools.tech/) - 為開發者提供的實用線上工具集，具備優異的使用者體驗
* :octocat: [Fedify](https://github.com/fedify-dev/fedify) - 使用 ActivityPub 與聯邦宇宙打造聯邦式伺服器應用程式的 TypeScript 框架
* :octocat: [feednext.io](https://github.com/feednext/feednext) - 用 Typescript 建置用戶端與伺服器端的開源社群媒體應用程式。
* :octocat: [ionic](https://github.com/ionic-team/ionic) - 以 TypeScript 建置的開源行動應用程式開發框架
* :octocat: [React-UWP](https://github.com/myxvisual/react-uwp) - 實作 Microsoft UWP Design 與 Fluent Design 的 React 元件。
* :octocat: [palantir/plottable](https://github.com/palantir/plottable) - 建構於 `D3` 之上的模組化圖表元件函式庫 (另請參閱: http://plottablejs.org)
* :octocat: [APIs-guru/graphql-voyager](https://github.com/APIs-guru/graphql-voyager) - 將任何 GraphQL API 呈現為互動式圖表 🛰️
* :octocat: [Rebilly/ReDoc](https://github.com/Rebilly/Redoc) - 從 OpenAPI/Swagger 產生的 API 參考文件
* :octocat: [excaliburjs/Excalibur](https://github.com/excaliburjs/Excalibur) - 免費的開源 JavaScript 遊戲引擎
* :octocat: [Bobril](https://github.com/Bobris/Bobril) - 受 Mithril 與 ReactJs 啟發、以元件為核心的框架 (另請參閱: http://bobril.com/)
* :octocat: [Stencil](https://github.com/ionic-team/stencil) - 建置現代 Web Components 的工具
* :octocat: [Langfuse](https://github.com/langfuse/langfuse) - 開源 LLM 工程平台 🪢 - 追蹤、提示管理、評估與分析
* :octocat: [redux-zero](https://github.com/concretesolutions/redux-zero) - 以 Redux 為基礎的輕量狀態容器
* :octocat: [wretch](https://github.com/elbywan/wretch) - 建構於 fetch 之上的小巧（gzip 後小於 2.2Kb）包裝函式，語法直覺易用。
* :octocat: [Cycle.js](https://github.com/cyclejs/cyclejs) - 提供可預測程式碼的函數式反應式 JavaScript 框架。
* :octocat: [Tridactyl](https://github.com/tridactyl/tridactyl) - Firefox 瀏覽器擴充套件，以真正編輯器 Vim 為模型取代瀏覽器的控制方式。
* :octocat: [armour/vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) - vue-cli 3.0 與 typescript 精簡管理介面範本，也是可供正式環境使用的前端管理介面解決方案（[示範](https://armour.github.io/vue-typescript-admin-template/#/dashboard)）
* :octocat: [n8n.io](https://github.com/n8n-io/n8n) - 開源工作流程自動化工具
* :octocat: [Dnote](https://github.com/dnote/dnote) - 支援多裝置同步與網頁介面的命令列筆記本。
* :octocat: [Thin Backend](https://github.com/digitallyinduced/thin-backend) - 適用於單頁應用程式的即時後端，透過從 Postgres 結構描述衍生型別，實現端對端型別安全
* :octocat: [Flowbite](https://github.com/themesberg/flowbite) - 建構於 Tailwind CSS 之上的開源元件函式庫，提供以 TypeScript 撰寫的互動式 UI 元件
* :octocat: [ILLA Cloud](https://www.illacloud.com/) - 開源低程式碼平台，是 Retool 與 Appsmith 的替代方案，讓開發者可在幾分鐘內打造內部工具。
* :octocat: [Treehouse](https://github.com/treehousedev/treehouse) - 用於打造自有筆記工具的輕量開源函式庫。
* :octocat: [GOUI](https://github.com/intermesh/goui) - 提供大量元件、用於建置網頁應用程式的開源使用者介面函式庫
* :octocat: [InDom](https://github.com/constcallid/indom) - 小於 4KB、與技術堆疊無關的現代 DOM 函式庫，具備自動清理功能，並以 TypeScript 撰寫且提供型別定義。
* :octocat: [Bubble Lab](https://github.com/bubblelabai/BubbleLab) - 開源、以 TypeScript 為原生語言的工作流程自動化平台，具備 AI 輔助產生、完整可觀測性與可匯出程式碼。

### 網頁／ReactJS
* :octocat: [facebook/create-react-app](https://facebook.github.io/create-react-app/docs/adding-typescript) 不需建置設定即可使用 typescript 建立 React 應用程式
* :octocat: [Microsoft/TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter) TypeScript 與 React 起始範本，附有說明如何搭配使用兩者的詳細 README；以 `create-react-app` 為基礎
* :scroll: [typescript-cheatsheets/react-typescript-cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) 為開始使用 TypeScript 的資深 React 開發者準備的速查表
* :octocat: [jsxtyper](https://github.com/fuselabs/jsxtyper) 從 .jsx 檔案產生 TypeScript 介面
* :octocat: [TodoMVC • TypeScript + React Example](https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react)
* :octocat: [Veritas Kanban](https://github.com/BradGroux/veritas-kanban) - 自架式 Kanban 看板，整合 AI 代理，使用 React 19、TypeScript strict mode 與 Vite 6 建置，並包含 1,255 項測試。
* :scroll: [Working with React and TypeScript](http://blog.wolksoftware.com/working-with-react-and-typescript)
* :guardsman: [**vortigern** - A universal boilerplate for building web applications w/ TypeScript, React, Redux and more.](https://github.com/barbar/vortigern)
* :robot: [Convert React code to TypeScript automatically](https://github.com/lyft/react-javascript-to-typescript-transform)
* :octocat: [React Server Example TSX](https://github.com/styfle/react-server-example-tsx) 使用 TypeScript 與 React 伺服器端轉譯的同構網頁應用程式樣板
* :octocat: [React & Redux in TypeScript - Static Typing Guide](https://github.com/piotrwitek/react-redux-typescript-guide) 使用 TypeScript 為「React & Redux」加上靜態型別的完整指南
* :octocat: [Typescript Monorepo CRA Example](https://github.com/deptno/typescript-monorepo-cra-example) - 精簡的 CRA + typescript 單一儲存庫範例。
* :octocat: [Typescript Monorepo Next Example](https://github.com/deptno/typescript-monorepo-next-example) - 精簡的 next.js + typescript 單一儲存庫範例。
* :stars: [Crisp React](https://github.com/winwiz1/crisp-react) React 用戶端與 Express 後端的樣板。提供效能與擴充功能，協助避免常見的 React-Express 問題。
* :book: [React by Example](https://reactbyexample.github.io/) 為程式設計師提供以程式碼為核心的 React 教學
* :octocat: [Materio Free MUI React NextJS Typescript Admin Template](https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free) - 功能強大且完整的免費 MUI React NextJS 管理儀表板範本，專為開發者打造。使用 Typecript 與 JavaScript 製作。
* :octocat: [Flowbite React](https://github.com/themesberg/flowbite-react) - 以 React、TypeScript 與 Tailwind CSS 為基礎的開源元件函式庫
* :octocat: [react-feedback-surveys](https://github.com/feedback-tools-platform/react-feedback-surveys) - 輕量、零相依的問卷元件，可在 React 應用程式中收集使用者意見（NPS、CSAT、CES），並完整支援 TypeScript

### 平台工程與 DevOps
* :octocat: [CDK8s](https://cdk8s.io/) - 使用 TypeScript 定義 Kubernetes 應用程式與可重複使用的抽象
* :octocat: [AWS CDK](https://github.com/aws/aws-cdk) - 使用 TypeScript 定義雲端基礎架構的 Cloud Development Kit
* :octocat: [Pulumi](https://github.com/pulumi/pulumi) - 使用 TypeScript、JavaScript、Python、Go 與 .NET 實作基礎架構即程式碼
* :octocat: [Backstage](https://github.com/backstage/backstage) - 使用 TypeScript 撰寫、用於建置開發者入口網站的平台

### 後端 API
* :octocat: [Actio](https://github.com/crufters/actio/) - 用於單體應用程式與微服務的 Node.js 框架。
* :octocat: [design-first](https://adam-hanna.github.io/design-first-docs/) - 用於 Typescript 的 REST API 樣板引擎
* :octocat: [Fastify](https://github.com/fastify/fastify) - 快速且低負擔的 Node.js 網頁框架
* :octocat: [Hono](https://hono.dev/) - 小巧、簡單且極速的邊緣網頁框架，可在任何 JavaScript 執行環境運作
* :octocat: [Nest](https://github.com/nestjs/nest) - 漸進式 Node.js 框架，以 TypeScript 為基礎打造高效、可擴充且企業級的伺服器端應用程式 🚀 (另請參閱: https://nestjs.com/)
  * :octocat: [nestia](https://github.com/samchon/nestia) - 使用 `typia` 裝飾器，驗證速度快 20,000 倍、JSON 序列化速度快 200 倍。可直接將純 TypeScript 介面型別用作 DTO，整體伺服器效能提升約 30 倍。也支援 SDK（含型別定義的 `fetch` 函式集合）與 Mockup Simulator（內嵌於 SDK 的後端伺服器模擬器）產生，甚至只需 `swagger.json` 檔案即可遷移 NestJS 專案。🚀 (另請參閱: https://nestia.io/docs)
* :octocat: [LoopBack 4](https://github.com/strongloop/loopback-next) - 高度可擴充的 Node.js 與 TypeScript 框架，用於建置 API 與微服務。:rocket: (另請參閱: https://loopback.io/)
* :octocat: [FoalTS](https://github.com/FoalTS/foal) - 簡單、直覺且完整的框架，適合建置企業級 Node.JS 應用程式 :boom: :rocket: (另請參閱: https://foalts.org)
* :octocat: [Enso](http://ensojs.netlify.com) - TypeScript 優先的 Node.JS 框架，受領域驅動設計原則啟發，著重組合能力與開發者體驗
* :octocat: [Libstack](https://libstack.io) - 各種模組的集合，可輕鬆建立並部署至 Docker 的 Typescript 伺服器。
* :octocat: [tinyhttp](https://github.com/talentlessguy/tinyhttp) - 以 TypeScript 撰寫並編譯為原生 ESM 的現代 Express 風格 Node.js 網頁框架。
* :octocat: [ZenTS](https://github.com/sahachide/ZenTS) - 以 Node.js 與 TypeScript 為優先、用於建置豐富網頁應用程式的現代框架
* :octocat: [Booster Framework](https://github.com/boostercloud/booster) - 事件驅動、雲端原生的 GraphQL 開源框架，屬於 Booster Cloud 生態系。運用高階抽象與慣例 (另請參閱: https://booster.cloud)

### 人工智慧（AI）

* :octocat: [MastraAI](https://github.com/mastra-ai/mastra) - 採用特定設計理念的 TypeScript 框架，協助你快速建置 AI 應用程式與功能。
* :octocat: [VoltAgent](https://github.com/voltagent/voltagent) - 用於建置與執行 AI 代理的 TypeScript 框架，支援工具、記憶與可視性。
* :octocat: [Tambo](https://github.com/tambo-ai/tambo) - 用於建置支援 MCP 生成式 UI 的 React SDK。
* :octocat: [Maxim AI](https://github.com/maximhq/maxim-js) - 啟用 Maxim 可觀測性的 JS/TS SDK。Maxim 是企業級評估與可觀測性平台 (另請參閱: https://getmaxim.ai)
* :octocat: [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - 零信任 SDK，在傳送提示至 LLM 前於本機將個人識別資訊匿名化，並可無縫還原回應。

### 獨立應用程式
* :octocat: [Visual Studio Code](https://github.com/Microsoft/vscode) - 跨平台 IDE。
* :octocat: [alm](https://github.com/alm-tools/alm) - 以 TypeScript 與 React 撰寫、專為 TypeScript 打造的新一代 IDE
* :octocat: [App Outlet](https://github.com/app-outlet/app-outlet) - 以 TypeScript 與 Angular 撰寫、適用於 AppImages/Flatpaks/Snaps 的通用 Linux 應用程式商店
* :octocat: [SnowFS](https://github.com/snowtrack/snowfs) - 用於圖形檔案的快速、可擴充版本控制儲存系統
* :octocat: [MemFree](https://github.com/memfreeme/memfree) - 開源混合式 AI 搜尋引擎，可即時從網際網路、書籤、筆記與文件取得精確解答，支援一鍵部署。
* :octocat: [Nostream](https://github.com/cameri/nostream) - 以 TypeScript 撰寫的 Nostr Relay
* :octocat: [Peekaping](https://github.com/0xfurai/peekaping) - 正常運作時間監控解決方案，可監控網站、API 與服務，並提供即時通知、精美狀態頁面及完整分析

##### Chrome 擴充功能
* [OctoLinker](https://github.com/OctoLinker/browser-extension)
* [lc-mate](https://github.com/cglotr/lc-mate) - 在 LC 使用者名稱旁顯示競賽評分的擴充功能

### 設計模式
* :octocat: [Design Patterns implementation](https://github.com/torokmark/design_patterns_in_typescript) - 實作 GoF 廣為人知的 23 種模式
* :octocat: [Real World Design Patterns](https://github.com/vahidvdn/realworld-design-patterns) - 附有測試的真實世界設計模式

### 裝飾器
- :octocat: [Performance Decorators](https://github.com/RyanMyrvold/Performance-Decorators) - TypeScript 效能最佳化裝飾器集，包含執行時間記錄、記憶體使用量監控等功能。

### 函式庫
* :octocat: [SuperJSON](https://github.com/blitz-js/superjson) - 安全地將 JavaScript 運算式序列化為 JSON 的超集，包含 Dates、BigInts 等
* :octocat: [Procedurem](https://github.com/ImVexed/Procedurem) - 小巧（2kb）且高效能的雙向 RPC 函式庫，使用 WebSockets。
* :octocat: [RxJS](https://github.com/ReactiveX/RxJS) - JavaScript 反應式程式設計函式庫。
* :octocat: [xstream](https://github.com/staltz/xstream) - 極易上手、小巧且快速的 JavaScript 函數式反應式串流函式庫。
* :octocat: [mockt](https://github.com/nbottarini/mockt) - 讓人愉快的 Typescript 與 Javascript 模擬函式庫
* :octocat: [substitute.js](https://github.com/ffMathy/FluffySpoon.JavaScript.Testing) - 從 NSubstitute 移植而來、採用流暢介面的 TypeScript 模擬函式庫。
* :octocat: [TypeMoq](https://github.com/florinn/typemoq) - 簡單的 TypeScript 模擬函式庫。
* :octocat: [fast-check](https://github.com/dubzzz/fast-check) - TypeScript 屬性式測試框架。
* :octocat: [Suites](https://github.com/suites-dev/suites) - 適用於 TypeScript 後端的單元測試框架，支援控制反轉（IoC）與相依注入框架。
* :octocat: [InversifyJS](https://github.com/inversify/InversifyJS/) - 強大且輕量的控制反轉容器與相依注入工具，適用於由 TypeScript 驅動的 JavaScript 與 Node.js 應用程式。
* :octocat: [TypeORM](https://github.com/typeorm/typeorm) - TypeScript 與 JavaScript（ES7、ES6、ES5）的 ORM。支援 MySQL、PostgreSQL、MariaDB、SQLite、MS SQL Server、Oracle、WebSQL 資料庫，可在 NodeJS、Browser、Ionic、Cordova 與 Electron 平台使用。
  * :octocat: [Safe-TypeORM](https://github.com/samchon/safe-typeorm) - 在編譯層級強化 `TypeORM`，並透過應用程式層級的 join 支援自動效能調校工具。此外，透過型別中繼程式設計確保原始 SQL 查詢的安全性。
* :octocat: [MikroORM](https://github.com/mikro-orm/mikro-orm) - 以 Data Mapper、Unit of Work 與 Identity Map 模式為基礎的 Node.js TypeScript ORM。支援 MongoDB、PostgreSQL、MySQL 與 SQLite。
* :octocat: [DrizzleORM](https://orm.drizzle.team/) - 輕量 TypeScript ORM，採用類 SQL 函式庫，提供彈性資料存取、適用於無伺服器環境且零相依。
* :octocat: [Prisma](https://github.com/prisma/prisma) - 現代化資料庫存取工具（ORM 替代方案），適用於 Node.js 與 TypeScript | PostgreSQL、MySQL 與 SQLite
  * :octocat: [prisma-markdown](https://github.com/samchon/prisma-markdown): 產生包含 ERD 圖表與說明的 Markdown 文件。
* :octocat: [Corgi](https://github.com/cardog-ai/corgi) - TypeScript VIN 解碼器，採用最佳化 SQLite 資料庫。完全離線、解碼時間小於 1 毫秒，完整 NHTSA 資料集僅 21MB。
* :octocat: [Neuledge](https://github.com/neuledge/engine-js) - Neuledge 是通用資料庫語言，提供最先進的資料建模、商業邏輯表示與結構描述驗證工具。
* :octocat: [Typetta](https://github.com/twinlogix/typetta) - 使用 GraphQL 作為結構描述定義語言的 Node.js Typescript ORM | 支援所有主要 SQL 資料庫與 MongoDB。
* :octocat: [TypeGQL](https://github.com/prismake/typegql) - 一組可直接從具型別的 TypeScript 類別建立 GraphQL 結構描述的工具。
* :octocat: [TSTL](https://github.com/samchon/tstl) - 以 TypeScript 實作 C++ STL（Standard Template Library）。提供容器、迭代器、演算法與函子模組。
  * :octocat: [ECol](https://github.com/samchon/ecol) - 擴充 TSTL 容器；可派送元素 I/O 事件的集合。
  * :octocat: [TGrid](https://github.com/samchon/tgrid) - Grid Computing Framework，是 TSTL 的網路與執行緒擴充，支援 RFC（Remote Function Call）。
  * :octocat: [Mutex-Server](https://github.com/samchon/mutex-server) - 在網路層級控制臨界區，類似 mutex 與 semaphore。
* :octocat: [Kalimdor.js](https://github.com/JasonShin/kalimdorjs) - 適用於 Web、Node 與開發者的機器學習函式庫！
* :octocat: [prelude.ts](https://github.com/emmanueltouzery/prelude.ts) - 函數式程式設計：不可變持久集合、Option 與 Either 等結構，以及組合子。
* :octocat: [ee-ts](https://github.com/aleclarson/ee-ts) - 具型別的事件發射器
* :octocat: [io-ts](https://github.com/gcanti/io-ts) - 執行階段型別驗證
* :octocat: [mokia](https://github.com/varHarrie/mokia) - 整合資料模擬與 HTTP 服務的模擬伺服器。
* :octocat: [sub-events](https://github.com/vitaly-t/sub-events) - 強型別事件。
* :octocat: [ts-audio](https://github.com/EvandroLG/ts-audio) - 與框架無關且易於使用的 `AudioContext` API 函式庫
* :octocat: [tslog](https://github.com/fullstack-build/tslog) - 強大的記錄函式庫，原生支援 TypeScript：提供美觀的插值、原生 V8 堆疊追蹤、機密遮罩，以及以 AsyncLocalStorage 為基礎的 requestId 支援
* :octocat: [tsParticles](https://github.com/matteobruni/tsparticles) - 輕量函式庫，輕鬆為網站建立粒子動畫（也支援 ReactJS、VueJS、Angular、Svelte 等）
* :octocat: [statek](https://github.com/pie6k/statek) - 反應式狀態管理函式庫
* :octocat: [Injex](https://www.injex.dev/) - 簡單、具裝飾器且可插拔的 TypeScript 應用程式相依注入框架
* :octocat: [tRPC](https://www.trpc.io/) - 用於建置端對端型別安全 API 的 TypeScript 工具組
* :octocat: [vard](https://github.com/andersmyrmel/vard) - 以模式為基礎的 TypeScript 提示注入偵測。為 LLM 應用程式提供受 Zod 啟發的 API，驗證時間小於 0.5 毫秒。
* :octocat: [interface-forge](https://www.npmjs.com/package/interface-forge) - 使用 TypeScript 型別與介面建立測試資料工廠
* :octocat: [iter-ops](https://github.com/vitaly-t/iter-ops) - 可迭代物件的操作
* :octocat: [Remult](https://github.com/remult/remult) - 為全端 TypeScript 應用程式提供端對端型別安全 CRUD 與前後端模型程式碼共用。
* :octocat: [Jest](https://github.com/facebook/jest) - 完整的 JavaScript 測試解決方案，大多數 JavaScript 專案皆可開箱即用。
* :octocat: [diod](https://github.com/artberri/diod) - 立場鮮明且輕量的控制反轉容器與相依注入工具，適用於 Node.js 或瀏覽器應用程式。
* :octocat: [@deliberative/crypto](https://github.com/deliberative/crypto) - TypeScript/WebAssembly 函式庫，提供公開金鑰密碼學、AEAD 機密盒、Shamir 秘密分享與隨機洗牌。可在 Nodejs、ESM、CommonJS 與瀏覽器執行。
* :octocat: [castore](https://github.com/castore-dev/castore) - 輕鬆在應用程式中實作 Event Sourcing 的 Typescript 函式庫
* :octocat: [sweet-monads](https://github.com/JSMonk/sweet-monads) - 提供常見 monad（例如 `Maybe` 或 `Either`）與高效能迭代器的 Typescript 函式庫。
* :octocat: [simple-mask-money](https://github.com/codermarcos/simple-mask-money) - 💰 簡潔、安全且具型別的金額格式化套件！
* :octocat: [Color-Core](https://github.com/iamlite/color-core) - `color-core` 是功能強大且具型別安全的 TypeScript 與 JavaScript 色彩處理函式庫。提供跨多個色彩空間的完整工具組，是需要進階色彩處理的開發者不可或缺的工具。
* :octocat: [PigmentTS](https://github.com/Jay-Karia/pigment-ts) - 輕量色彩處理與轉換工具。
* :octocat: [file-graph](https://github.com/DIY0R/file-graph) - 用於在檔案中儲存圖形並對其查詢的函式庫。
* :octocat: [@diy0r/nestjs-rabbitmq](https://github.com/DIY0R/nestjs-rabbitmq) - 用於建置 NestJS 微服務與 RabbitMQ 的函式庫。
* :octocat: [Onion.JS](https://github.com/ThomasAribart/onion.js) - 設計並套用包裝函式（即高階函式），同時不破壞型別！以 [HotScript](https://github.com/gvergnaud/hotscript) 高階型別為基礎。
* :octocat: [text-smart-trimmer](https://github.com/vaidehimani/text-smart-trimmer) - 輕量 TypeScript 工具，可修剪文字並選擇保留字詞邊界、標點符號與自訂後綴。
* :octocat: [nano-string-utils](https://github.com/Zheruel/nano-string-utils) - 超輕量、零相依的字串工具。可進行 tree-shaking、具備完整型別，並針對現代 JavaScript 最佳化。
* :octocat: [safe-fetch](https://github.com/asouei/safe-fetch) - 零相依 fetch 包裝函式，提供安全結果、雙重逾時、智慧重試與標準化 TypeScript 錯誤。
* :octocat: [stunk](https://github.com/I-am-abdulazeez/stunk) - 輕量且與框架無關的狀態管理函式庫，透過原子區塊實現細粒度反應性，適用於各種 Typescript 應用程式。
* :octocat: [blastore](https://github.com/sergey-shablenko/blastore) - 精簡、高效能的儲存包裝函式，適用於 localStorage、AsyncStorage、記憶體或任何同步／非同步後端，並具備完整 TypeScript 型別安全。
* :octocat: [FilterQL](https://github.com/adamhl8/filterql) - 用於篩選結構化資料的小型查詢語言
* :octocat: [ffetch](https://github.com/fetch-kit/ffetch) – TypeScript 優先的 `fetch` 包裝函式，提供重試、逾時、斷路器與生命週期掛鉤。執行階段零相依，凡支援 `fetch` 的環境皆可使用
* :octocat: [iterflow](https://github.com/gv-sh/iterflow) - 強大的迭代器工具，提供統計操作、視窗處理與延遲求值
* :octocat: [Nano Queries](https://github.com/vitonsky/nano-queries) - 與資料庫無關的查詢建構器，查詢可組合、巢狀與變更。已在正式環境搭配 Postgres、SQLite、PGLite、DuckDB 等使用。

# 大型語言模型（LLM）
* [duckduckgo-ai-chat](https://github.com/mumu-lhl/duckduckgo-ai-chat) - 提供 Duckduckgo AI Chat API，可免費使用 gpt-4o-mini。
* [Neurolink](https://github.com/juspay/neurolink) - 通用 AI 開發平台，整合 12 種以上 AI 服務供應商（OpenAI、Anthropic、Google、Bedrock、Azure），支援 MCP、多供應商故障切換及可供正式環境使用的企業級功能。提供 TypeScript SDK 與 CLI。
* [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - 零信任 SDK，在傳送提示至 LLM 前於本機將個人識別資訊匿名化，並可無縫還原回應。

# 影片課程
## :free: 免費課程
* [Angular Applications with TypeScript](https://mva.microsoft.com/en-US/training-courses/angular-applications-with-typescript-14330)（Microsoft Virtual Academy）
* [AngularJS with TypeScript made easy](https://www.youtube.com/watch?v=OZxnFB0yQHs)（SSW TV）
* [Full Stack React GraphQL TypeScript Tutorial - 14 hour course](https://www.youtube.com/watch?v=I6ypD7qv3Z8)（YouTube）
* [Evolving JavaScript with TypeScript](https://www.youtube.com/watch?v=Ut694dsIa8w) 詳細介紹 TypeScript
* [Why program in TypeScript?](https://www.youtube.com/watch?v=1TW9SdHIiXI) 概述主要語法結構，並聚焦說明使用 TypeScript 而非 JavaScript 撰寫程式的優點
* [Functional Programming with TypeScript](https://www.youtube.com/playlist?list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo) - 與 Sahand Javid 一起透過這個適合初學者的 YouTube 播放清單探索函數式程式設計，並以 fp-ts 為例建立函式庫。
* [Building CRM from scratch with Typescript and Bun](https://www.youtube.com/watch?v=l4QjeBEkNLc) - 不使用大型框架，從頭建置真實世界的 CRM 系統。採用 Bun、Typescript 與 Tailwind。

## :dollar: 付費課程
* [TypeScript Fundamentals](https://www.pluralsight.com/courses/typescript)（Pluralsight）
* [Practical TypeScript Migration](https://www.pluralsight.com/courses/typescript-practical-migration)（Pluralsight）
* [Angular with TypeScript](http://www.pluralsight.com/courses/angular-typescript)（Pluralsight）
* [Using TypeScript for Large AngularJS Applications](https://www.pluralsight.com/courses/using-typescript-large-angularjs-apps)（Pluralsight）
* [Introduction to TypeScript](https://www.packtpub.com/application-development/introduction-typescript-video)（Packt）
* [Mastering TypeScript](https://www.packtpub.com/web-development/mastering-typescript-video)（Packt）
* [TypeScript: The Complete Developer's Guide](https://www.udemy.com/typescript-the-complete-developers-guide/)（Udemy）
* [Angular with TypeScript](https://www.manning.com/livevideo/angular-for-java-developers-typescript/)（Manning）
* [Mastering TypeScript - 2022 Edition](https://www.udemy.com/course/learn-typescript/)（Udemy）

# 教學

* [Converting your vanilla JavaScript app to TypeScript](https://www.useanvil.com/blog/engineering/converting-vanilla-javascript-to-typescript)
* [Difference Between TypeScript and JavaScript](https://www.scaler.com/topics/typescript-vs-javascript/)

# 路線圖

* [TypeScript Roadmap](https://roadmap.sh/typescript)
* [TypeScript Origins: The Documentary - YouTube](https://www.youtube.com/watch?v=U6s2pdxebSo) 作者：OfferZen Origins
  > 紀錄片邀請核心貢獻者與社群成員參與，包括 Anders Hejlsberg、Steve Lucco、Luke Hoban、Daniel Rosenwasser、Ryan Cavanaugh、Amanda Silver、Matt Pocock、Josh Goldberg 等人！

### 徽章
* [TypeScript Badges](https://github.com/ellerbrock/typescript-badges/)
[![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/awesome/typescript125x28.png)](https://github.com/ellerbrock/typescript-badges/) [![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/code/typescript-125x28.png)](https://github.com/ellerbrock/typescript-badges/) [![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/love/typescript-125x28.png)](https://github.com/ellerbrock/typescript-badges/)

### 社群帳號
 * [@typescriptlang](https://twitter.com/typescriptlang) - TypeScript 官方 Twitter 帳號
 * [@angularjs](https://twitter.com/angularjs) - 自 2.0 起使用 Typescript 的 Angularjs 官方 Twitter 帳號
 * [@jntrnr](https://twitter.com/jntrnr) - Microsoft 的 Typescript 專案經理
 * [@ahejlsberg](https://twitter.com/ahejlsberg) - 參與 Typescript 專案的 Microsoft 技術院士

### 致謝
>（新增於：2023）新增此區段，感謝大家的貢獻。

 - 2023 - ⚒ 感謝 Hamza ( @Hamza12700 https://github.com/Hamza12700 ) 提交[超過 15 個已合併的 pull request](https://github.com/dzharii/awesome-typescript/pulls?q=is%3Apr+author%3AHamza12700+is%3Aclosed)。為讓這份清單跟上現代 TypeScript 專案，做出了卓越貢獻。**2023 年度貢獻者**。
