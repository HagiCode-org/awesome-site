# 精选 TypeScript 资源

## 🗄️ 归档说明

<details>
  <summary><strong>摘要（2026）</strong> - 此列表归档的原因</summary>
<hr/>
我在 11 年前创建了 awesome-typescript，那时 TypeScript 仍在发展，远未成为如今的默认选择。当时，收集和整理资源很重要：它帮助早期采用者找到可靠的资料、分享来之不易的经验，并围绕一种常被开发者低估的工具建立社区。

这些年来，我多次讨论 TypeScript 的未来（尤其是在 2016 至 2018 年间）。我当时相信它会成为现代开发的基石。如今，这一判断显然已经成为现实。TypeScript 现在是前端开发事实上的标准语言，几乎无处不在：应用、SDK、示例，甚至关联不大的项目都会提供 TypeScript 代码。

这种成功也给本列表带来了新问题。当几乎每个项目都使用 TypeScript 时，接受所有可能的新增内容就不再是策展，而会变成没有边界的维护工作。社区贡献逐渐减少，信息与噪声的比例也发生了变化，继续扩展列表已无法实现最初的目标。

与其继续维护一个无法反映当今环境中有意义且经过精选的优质资源集合，不如将 awesome-typescript 归档并保留为历史参考。

感谢每一位贡献者，无论是提交拉取请求、推荐资源，还是分享反馈。正是大家的帮助让这份列表在最需要的时候发挥了作用，也汇聚了早期的 TypeScript 社区。
<br/><hr />

</details>

<hr />

#### -= Awesome TypeScript =- [Awesome Elasticsearch](https://github.com/dzharii/awesome-elasticsearch) →

> 精选的客户端与服务端 TypeScript 资源。用 TypeScript 编写出色的 JavaScript。灵感来自 [awesome](https://github.com/sindresorhus/awesome) 列表。

## 更多 awesome 资源

> [semlinker/awesome-typescript](https://github.com/semlinker/awesome-typescript) 感谢 @semlinker 精心整理这份列表！

## 参与贡献

请先快速阅读[贡献指南](/contributing.md)。如果你发现此处的某个包或项目已停止维护或不适合收录，请提交拉取请求来改进此文件。

## 目录

- [Awesome TypeScript 核心资源](#awesome-typescript-essential-resources)
- [TypeScript 项目启动模板](#typescript-project-starters)
- [书籍](#books)
- [参考列表](#reference-lists)
- [博客](#blogs)
- [CLI 与 REPL](#cli-and-repl)
- [IDE](#ide)
- [构建系统](#build-systems)
- [云数据仓库](#cloud-data-warehousing)
- [模块打包器](#module-bundlers)
- [内容管理系统（CMS）](#cms)
- [工具](#tools)
- [带类型的 CSS-in-JS](#css-in-js-with-types)
- [类型](#types)
- [运行时](#runtime)
- [使用 TypeScript 构建：移动端、Web、后端 API、独立应用、库](#built-with-typescript)
- [大语言模型（LLM）](#llm)
- [视频课程](#video-courses)
- [教程](#tutorials)
- [路线图](#roadmap)
- [致谢](#acknowledgements)

## 开始使用（Awesome）TypeScript

### Awesome TypeScript 核心资源
* :books: [Handbook - Welcome to TypeScript](http://www.typescriptlang.org/Handbook) 学习 TypeScript 的官方资料
* :books: [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/) 作者：[Basarat Ali Syed](https://twitter.com/basarat)
* :octocat: [Microsoft/TypeScript on Github](https://github.com/Microsoft/TypeScript) 在 GitHub 上 fork TypeScript！或者……直接阅读代码
* :octocat:[The official TypeScript Roadmap](https://github.com/Microsoft/TypeScript/wiki/Roadmap)
* :books: [TypeScript Team Blog](http://blogs.msdn.com/b/typescript/) 发布公告和近期更新
* :octocat: [DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) 高质量 TypeScript 类型定义仓库，由 Boris Yankov 和数千名贡献者维护
* :octocat: [Type search](https://aka.ms/typings)，在 npm 上搜索类型定义
* :books: [Community Curated Resources](https://hackr.io/tutorials/learn-typescript)
* :octocat: [Clean Code concepts adapted for TypeScript](https://github.com/labs42io/clean-code-typescript)
* :computer: [Should You Learn TypeScript? (Benefits & Resources)](https://snipcart.com/blog/learn-typescript-why-use-ts)
* :computer: [Learn how to unleash the full potential of the Turing Complete type system of TypeScript!](https://type-level-typescript.com)，由 [Gabriel Vergnaud](https://twitter.com/GabrielVergnaud) 开设的付费在线课程，前 5 章免费
* :computer: [Codington](https://codington.io) 交互式 TypeScript 练习，提供即时反馈，适用于学习和教学。
* :octocat: [Codebook](https://github.com/gvanastasov/codebook-typescript) 阅读并运行小段代码，循序渐进地学习 TypeScript，从基础概念到高级内容。
* :octocat: [Type Challenges](https://github.com/type-challenges/type-challenges) TypeScript 类型挑战集，附带在线评测。
- :books: [TypeScript Style Guide](https://mkosir.github.io/typescript-style-guide) 简明的约定与最佳实践，帮助编写一致且易于维护的代码。
- :art: [Visual Types](https://types.kitlangton.com/) 以交互方式可视化 TypeScript 概念，尽情欣赏绚丽色彩。

### TypeScript 项目启动模板
* [React Starter Kit](https://github.com/kriasoft/react-starter-kit) – 使用 Bun、TypeScript、React、tRPC、Drizzle ORM 和 Cloudflare Workers 构建现代 Web 应用的全栈样板项目。
* [typescript-starter](https://github.com/bitjson/typescript-starter) – 用于快速生成并配置新库和 Node.js 项目的 CLI
* [next-smrt](https://github.com/csprance/next-smrt) – 集成 Redux、Styled Components、Material UI 和 TypeSafe Actions 的 TypeScript/Next.js 样板项目。
* :octocat: [Next-Postgres-With-Typescript](https://github.com/brandontle/next-postgres-with-typescript) - 类论坛全栈 Web 应用样板，使用 Next.js 7.0.2、Sequelize 4/Postgres、TypeScript、Redux、Passport Local Auth 和 Emotion
* [MicroTS](https://www.npmjs.com/package/microts) 采用接口优先方式的微服务代码生成器：根据 OpenAPI（Swagger）REST API 规范生成完整项目，包括 TypeScript 代码、输入验证器、UI、测试和 Docker 配置。
* [pankod/next-boilerplate](https://github.com/pankod/next-boilerplate) 结构完善、可用于生产环境的 Next.js 样板项目，包含 TypeScript、Redux、Jest、Enzyme、Express.js、Sass、CSS、EnvConfig、反向代理、Bundle Analyzer 和内置 CLI
* [jsynowiec/node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate) 及时更新、开箱即用、功能全面且保持精简的模板。适用于大多数 Node.js 项目，已包含并配置所有基础工具，面向最新的 Node.js LTS 与 TypeScript 版本。
* [typescript-express-starter](https://github.com/ljlm0402/typescript-express-starter) - 快速、简单的 TypeScript Express 入门模板。
* [The Knests Stack](https://github.com/tudorconstantin/knests/) - 全栈样板项目（黑客松启动模板），包含 PostgreSQL、Knex.js、NestJS、Next.js、GraphQL、React（含 hooks 和 TypeScript）、Material-UI、Docker 多阶段镜像、Docker Compose，以及已完整配置的 GitLab CI/CD 流水线。
* [tRPC + Next.js](https://trpc.io/docs/nextjs/introduction) - 用于借助 React 进行端到端类型安全开发的全栈启动项目
* [nd.ts](https://github.com/heyayushh/nd.ts/) - 尽快搭建最精简的 Node.ts 项目
* :octocat: [samchon/backend](https://github.com/samchon/backend) - 使用 [NestJS](https://nestjs.com)（[nestia](https://github.com/samchon/nestia)）和 [TypeORM](https://typeorm.io)（[safe-typeorm](https://github.com/samchon/safe-typeorm)）的 TypeScript 后端模板项目。通过衍生示例项目帮助新手后端开发者；还借助 [pm2](https://pm2.keymetrics.io/) 支持进程级无中断更新。
* :ok_man: [ts-express-boilerplate](https://github.com/d4rkstar/ts-express-boilerplate) - 适合作为后端项目起点的 ExpressJS/TypeScript 模板，注重简单和精简 :P，开箱即配置好日志与测试，并使用 TypeORM 访问数据。
* [create-typescript-app](https://github.com/hein-htut-aung/create-typescript-app) - 为 TypeScript Web 应用提供起点，包含 pnpm、Rollup、Jest 和带 SCSS 的 CSS Modules。
* [ts-vite-npm-template](https://github.com/kaandesu/ts-vite-npm-template) - 使用 Vite 构建 TypeScript NPM 包的一站式方案，内置 GitHub Pages 在线演示部署、自动化测试与构建流程、Vite 单元测试配置（含覆盖率分析），以及供软件包使用的 README.md 模板。

### 书籍
* :books: [TypeScript in 50 Lessons](https://typescript-book.com/) by Stefan Baumgartner
* :books: :fire: [TypeScript Quickly](https://www.manning.com/books/typescript-quickly) 学习现代 TypeScript 并构建自己的区块链；配套代码示例见 :octocat:[yfain/getts](https://github.com/yfain/getts)
* :books: [Angular Development with Typescript, Second Edition (MEAP October 2017)](https://www.manning.com/books/angular-development-with-typescript-second-edition) 《Angular Development with Typescript, Second Edition》是一本中级教程，面向熟悉使用其他框架和工具构建 Web 应用的开发者，介绍 Angular 与 TypeScript。（作者：Yakov Fain、Anton Moiseev；Manning）
* :books: [Angular 2 Development with TypeScript (2016)](https://www.manning.com/books/angular-2-development-with-typescript) 作者：Yakov Fain、Anton Moiseev；Manning
* :books: [Learning TypeScript 2.x 2nd Ed.](https://www.learningtypescript.com) by Remo H. Jansen
* :books: [Mastering TypeScript 2nd Ed.](https://www.packtpub.com/application-development/mastering-typescript-second-edition) by Nathan Rozentals
* :books: [Beginning Angular 4 with TypeScript](https://www.amazon.com/Beginning-Angular-Typescript-Greg-Lim/dp/1542916674) by Greg Lim
* :books: [Programming with Types](https://www.manning.com/books/programming-with-types) - 介绍如何利用类型系统的力量，设计安全、稳健、正确且易于维护和理解的软件。（作者：Vlad Riscutia）
* :books: [Essential TypeScript 5](https://www.manning.com/books/essential-typescript-5) - 畅销 TypeScript 指南的第三版。（作者：Adam Freeman）
* :books: [Effective TypeScript](https://www.oreilly.com/library/view/effective-typescript/9781492053736/) by Dan Vanderkam
* :books: [Advanced TypeScript 3 Programming Projects](https://www.packtpub.com/product/advanced-typescript-3-programming-projects/9781789133042) by Peter O'Hanlon
* :books: [The Concise TypeScript Book (Free and Open Source)](https://github.com/gibbok/typescript-book) by Simone Poggiali
* :books: [Acing the Frontend Interview (Early Access)](https://www.manning.com/books/acing-the-frontend-interview) by Jennifer Fu (Manning)

### 参考列表
* [TypeScript Reference for JS developers](https://welldan97.github.io/typescript-reference/) - 关键字、运算符、语句和指令的词汇表

### 博客
* [@captain-yossarian's blog](https://catchts.com/) - 专门介绍 TypeScript 静态类型

### CLI 与 REPL
* [Taze](https://github.com/antfu/taze) 一款现代 CLI 工具，可让依赖保持更新
* 使用 [ts-node](https://github.com/TypeStrong/ts-node) 运行脚本或 REPL
* 如何创建可执行的 TypeScript 脚本：
  1. 确保已安装 `npx`（随 `npm >= 5.2` 提供）和 `typescript` 软件包
  1. 将此 [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) 添加为脚本的第一行：`#!npx ts-node`
  1. 使脚本可执行：`chmod +x script.ts`
  1. 直接运行：`./script.ts` :)

### IDE
#### 离线
##### Visual Studio
* [ Visual Studio Community Edition 2015](https://www.visualstudio.com/products/visual-studio-community-vs) - （有条件）免费 IDE，内置 TypeScript 支持
  * [VS Addon - TypescriptSyntaxPaste](https://visualstudiogallery.msdn.microsoft.com/eb0887f8-3ac1-434a-b50b-f0112f1572f7) - 可复制 C# 源代码并粘贴为 TypeScript 语法，帮助转换 DTO 或接口
* [NodeJS Tools for Visual Studio](https://github.com/Microsoft/nodejstools)

##### 其他（插件 || 跨平台 || 开源 || 免费）
* [Visual Studio Code](https://www.visualstudio.com/en-us/products/code-vs.aspx)
* [PhpStorm](https://www.jetbrains.com/phpstorm/download/)
* [WebStorm](https://www.jetbrains.com/webstorm/download/)
* [CATS](http://jbaron.github.io/cats/) 是面向 TypeScript 和 Web 开发者的 IDE，由 @jbaron 制作
* [TypeScript Sublime Plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin) 作者：@Microsoft
* [Atom TypeScript](https://github.com/TypeStrong/atom-typescript) 作者：@TypeStrong
* [TypeScript Interactive Development Environment for Emacs](https://github.com/ananthakumaran/tide) 作者：@ananthakumaran
* [TypeScript Syntax for VIM](https://github.com/leafgarland/typescript-vim)
* :octocat: [Typescript addin for](https://github.com/mrward/typescript-addin) MonoDevelop、SharpDevelop 和 Xamarin Studio；另有一篇简短的[评测文章](http://lastexitcode.com/blog/2015/04/01/TypeScriptSupportInXamarinStudio/)
* [Typescript tooling for Neovim](https://github.com/mhartington/nvim-typescript) 是面向 Neovim 的 TypeScript 语言服务插件。
* [Coc](https://github.com/neoclide/coc.nvim) 让 Vim/Neovim 像 VSCode 一样智能。

#### 在线

##### 在线体验场
* [TypeScript playground](https://agentcooper.github.io/typescript-play/) 由 @agentcooper 制作，支持多个 TS 版本和编译目标
* [TypeScript playground-on-ace](https://github.com/hi104/typescript-playground-on-ace) 由 @hi104 制作，[已更新至 TypeScript 1.5](https://github.com/basarat/TypeScriptEditor)
* [TypeScript official Playground](http://www.typescriptlang.org/Playground/)
* [JS Bin](http://jsbin.com/?js) (Select TypeScript)
* [Codepen](http://codepen.io/) (Select TypeScript)
* [TypeScript Interpret - Terminal Emulator](http://niutech.github.io/typescript-interpret/) by @niutech
* [TypeScript Editor](http://drake7707.github.io/Typescript-Editor/) by @drake7707

## 构建系统
* [Grunt](http://gruntjs.com/) tasks:
  - [grunt-ts](https://www.npmjs.com/package/grunt-ts) - 在 GruntJS 构建脚本中处理 TypeScript 编译任务的 npm 软件包
* [Zwitterion](https://github.com/lastmjs/zwitterion) - 极简开发服务器，内置 TypeScript 文件支持。
* [Nx](https://github.com/nrwl/nx) - 智能、快速且可扩展的构建系统

## 云数据仓库
* :sparkles: [Crisp BigQuery](https://github.com/winwiz1/crisp-bigquery) 启动项目，可将 Google BigQuery 数据交付到最终用户的浏览器并控制成本，还支持实现丰富的数据展示方式。
* [DDB-Table](https://github.com/neuledge/ddb-table) 为 AWS DynamoDB 提供强类型查询和表
* [DynamoDB-Toolbox](https://github.com/dynamodb-toolbox/dynamodb-toolbox) 轻量、类型安全的 AWS DynamoDB 查询构建器

## 模块打包器
* [Farm](https://farm-fe.github.io/) - 使用 Rust 编写、兼容 Vite 的超高速 Web 构建工具
* [Rspack](https://www.rspack.dev/) - 基于 Rust 的快速 Web 打包器 🦀️
* [Vite](https://vitejs.dev/) - 下一代前端工具链
* [Webpack](http://webpack.github.io/) - 支持 CommonJS 和 AMD 模块打包
* [Browserify](http://browserify.org/) - CommonJS 模块打包器。开箱即不支持 TypeScript，但可配合 * [Grunt](http://gruntjs.com/) 任务使用：[grunt-ts](https://www.npmjs.com/package/grunt-ts)、[grunt-browserify](https://www.npmjs.com/package/grunt-browserify)、[grunt-contrib-uglify](https://www.npmjs.com/package/grunt-contrib-uglify)
* [fuse-box](https://github.com/fuse-box/fuse-box) | [http://fuse-box.org/](http://fuse-box.org/) - TypeScript 示例：[fuse-box-ts-react-reflux-seed](https://github.com/fuse-box/fuse-box-ts-react-reflux-seed)

## 内容管理系统（CMS）
* [Factor](https://factor.dev) - JavaScript 内容管理系统（原生支持 TypeScript）
* [Graphweaver](https://github.com/exogee-technology/graphweaver) - 将多个数据源整合为单一的 GraphQL 无头 CMS。

## 工具
* [sqlx-ts](https://github.com/JasonShin/sqlx-ts) - 一款 CLI 应用，可在编译时检查查询，无需 DSL，并根据 SQL 生成类型以确保代码类型安全
* [bun](https://bun.sh/) - 快速的 JavaScript 运行时、包管理器、打包器和测试运行器
* [deno](https://deno.land/) - 安全的 JavaScript 与 TypeScript 运行时
* [OXC](https://github.com/web-infra-dev/oxc) - 使用 Rust 编写的一套高性能 JavaScript 和 TypeScript 工具
* [biome](https://github.com/biomejs/biome) - Biome 可在极短时间内格式化并检查代码
* [SweetIQ/schemats](https://github.com/SweetIQ/schemats) 根据 SQL 数据库架构生成 TypeScript 接口定义
* [TypeDoc](http://typedoc.org/) - TypeScript 项目文档生成器
* [TypeScript Standard](https://github.com/e2tox/typescript-standard) - 零配置的 TypeScript 2 标准验证
* [typed-install](https://github.com/xavdid/typed-install) - 轻松安装新依赖及其类型定义，无论它们位于何处
* [type-config](https://github.com/Saul-Mirone/type-config) - tsconfig 生成器。
* [Zapatos](https://jawj.github.io/zapatos/) - 面向 TypeScript 的零抽象 Postgres
* [dep-tree](https://github.com/gabotechs/dep-tree) - 展示项目文件依赖树，和/或根据自定义规则进行验证。
* [itertools-ts](https://github.com/Smoren/itertools-ts) - 为 TypeScript 和 JavaScript 扩展移植的 itertools，提供大量用于处理可迭代集合（包括异步集合）的函数。
* [ParaglideJS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) - i18n 编译器，可生成完全类型安全的翻译
* [pg](https://github.com/datawan-labs/pg) - 浏览器中的 PostgreSQL Playground，无需服务器，仅使用客户端和 pglite（PostgreSQL WASM）
* [nocodb](https://github.com/nocodb/nocodb) - 🔥 🔥 🔥 开源 Airtable 替代品
* [jqlite](https://github.com/Jay-Karia/jqlite) - ⚡ JSON 查询语言
* [pompelmi](https://github.com/pompelmi/pompelmi) - Node.js 文件上传恶意软件扫描，帮助防止远程文件包含（RFI），并提供 Express、Koa 和 Next.js 适配器
* [codables](https://codableslib.com/) - 基于装饰器、声明式且类型丰富的 JSON 序列化/反序列化工具，可处理几乎任何数据类型
* [Rev-dep](https://github.com/jayu/rev-dep) - 使用极速 CLI 跟踪导入、识别循环依赖、查找未使用代码并清理 node_modules。

## 类型
* [jsonup](https://github.com/tani/jsonup) - 编译时 JSON 解析器
* [type-o-rama](https://github.com/stereobooster/type-o-rama) - JS 类型系统互操作
* [utility-types](https://github.com/piotrwitek/utility-types) - TypeScript 工具类型（兼容 Flow 的工具类型）
* [elm-ts](https://github.com/gcanti/elm-ts) - 将 Elm 架构移植到 TypeScript，包含 fp-ts、io-ts、rxjs5 和 React
* [ts-essentials](https://github.com/krzkaczor/ts-essentials) - 汇集所有必备 TypeScript 类型
* [typescript-conditional-types](https://github.com/LeDDGroup/typescript-conditional-types) - TypeScript 泛型类型辅助工具
* [ts-types-utils](https://github.com/LeDDGroup/ts-types-utils) - TypeScript 类型工具
* [typesync](https://github.com/jeffijoe/typesync) - 为 package.json 中的依赖安装缺失的 TypeScript 类型定义。
* [type-fest](https://github.com/sindresorhus/type-fest) - 一组必备的 TypeScript 类型
* [typetype](https://github.com/mistlog/typetype) - 为 TypeScript 类型生成而设计的编程语言
* [nominal](https://github.com/Coder-Spirit/nominal) - 名义类型与依赖类型（TypeScript）。
* [@tool-belt/type-predicates](https://github.com/tool-belt/type-predicates) - 类型谓词、断言函数和工具。
* [getmytypes](https://github.com/halchester/getmytypes) - 将 @types 文件安装到 devDependencies 中。
* [ts-toolbelt](https://github.com/millsp/ts-toolbelt) - 大型 TypeScript 类型工具集合
* [string-ts](https://github.com/gustavoguichard/string-ts) - 面向各种用途的强类型字符串函数
* [lib-result](https://github.com/AhmedOsman101/lib-result) - 轻量、受 Rust 启发的 `Result` 类型，用于 TypeScript 和 JavaScript 中的类型安全错误处理。
* [iso-locale](https://github.com/reacture-io/iso-locale) - 全面的 TypeScript 库，提供处理国家、语言、方言和货币的 ISO 标准。

## 带类型的 CSS-in-JS
* [PandaCSS](https://panda-css.com/) - CSS-in-JS，在构建时生成样式，兼容 RSC，支持多变体，并提供一流的开发体验
* [Vanilla-Extract](https://vanilla-extract.style/) - 将 TypeScript 用作预处理器。编写类型安全、局部作用域的类、变量和主题，并在构建时生成静态 CSS 文件
* [StyleX](https://stylexjs.com/) - 用于定义优化用户界面样式的 JavaScript 库

### 运行时
* [json-decoder](https://github.com/venil7/json-decoder) - 类型安全的 JSON 解码器和运行时检查器
* [typescript-is](https://github.com/woutervh-/typescript-is) - 生成运行时类型检查的 TypeScript 转换器。
* [type-plus](https://github.com/unional/type-plus) - 附加类型和经过类型调整的工具
* [Agent Framework](https://github.com/agentframework/agentframework) 使用装饰器为类和方法创建拦截器
* [SunTori](https://github.com/LancerComet/SunTori) - JSON 序列化/反序列化工具，确保运行时数据安全。
* [config](https://github.com/mrspartak/config) - 运行时配置解析器

## 验证
* [@core/match](https://github.com/tani/ts-match) - 类型安全的解构赋值和模式匹配验证
* [io-ts](https://github.com/gcanti/io-ts) - 用于 IO 解码/编码的运行时类型系统
* [zod](https://github.com/vriad/zod) - TypeScript 优先的架构验证，支持静态类型推断
* [valibot](https://github.com/fabian-hiller/valibot) - 支持静态类型推断的 TypeScript 架构库；相比 Zod 极其轻量且无依赖。
* [runtypes](https://github.com/pelotom/runtypes) - 静态类型的运行时验证
* [ts-codec](https://github.com/julienvincent/ts-codec) - 用于编码、解码和验证数据的 TypeScript Codec
* [ow](https://github.com/sindresorhus/ow) - 面向开发者的函数参数验证
* [superstruct](https://github.com/ianstormtaylor/superstruct) - 简单且可组合的数据验证方式
* [computed-types](https://github.com/neuledge/computed-types) - 🦩 类似 Joi 的 TypeScript 验证
* [json-schema-to-ts](https://github.com/thomasaribart/json-schema-to-ts) - 根据 JSON 架构动态推断类型
* [Yunomix](https://github.com/LancerComet/MyWebLibs/tree/master/Yunomix) - 采用 AOP 形式设计的表单验证工具包。
* [typia](https://github.com/samchon/typia) - 使用纯 TypeScript 类型实现快 20,000 倍的运行时验证器，只需一行代码，例如 `typia.assert<T>(input)`。还支持快 200 倍的 JSON 序列化和 Protocol Buffer 功能。🚀 (另见 https://typia.io/docs)
* [fta](https://github.com/sgb-io/fta) - 基于 Rust 的静态分析工具，用于监控代码质量
* [dto-classes](https://github.com/rsinger86/dto-classes) - 便于开发者使用的解析、验证与序列化工具，默认提供静态类型；使用属性定义字段架构，而非装饰器。
* [iso-locale](https://github.com/reacture-io/iso-locale) - 全面的 TypeScript 库，提供处理国家、语言、方言和货币的 ISO 标准。
## 使用 TypeScript 构建
### 移动端
* :octocat: [ReactNative](https://reactnative.dev/) - 使用 React 构建 Android、iOS 等平台的原生应用
* :octocat: [NativeScript](https://github.com/NativeScript/NativeScript) - 使用 JavaScript 构建跨平台、真正原生的 iOS、Android 和 Windows 移动应用的开源框架
* [Monaco Editor](https://microsoft.github.io/monaco-editor/)

### 网页
* :octocat: [Angular](https://github.com/angular/angular) - 用于构建移动端和桌面端 Web 应用的开发平台
* :octocat: [It-Tools](https://it-tools.tech/) - 面向开发者的实用在线工具集，用户体验出色
* :octocat: [Fedify](https://github.com/fedify-dev/fedify) - 基于 ActivityPub 和联邦宇宙构建联邦服务器应用的 TypeScript 框架
* :octocat: [feednext.io](https://github.com/feednext/feednext) - 客户端和服务器端均以 TypeScript 构建的开源社交媒体应用。
* :octocat: [ionic](https://github.com/ionic-team/ionic) - 使用 TypeScript 构建的开源移动应用开发框架
* :octocat: [React-UWP](https://github.com/myxvisual/react-uwp) - 实现 Microsoft UWP 设计与 Fluent Design 的 React 组件。
* :octocat: [palantir/plottable](https://github.com/palantir/plottable) - 基于 `D3` 构建的模块化图表组件库 (另见：http://plottablejs.org)
* :octocat: [APIs-guru/graphql-voyager](https://github.com/APIs-guru/graphql-voyager) - 将任意 GraphQL API 展示为交互式图形 🛰️
* :octocat: [Rebilly/ReDoc](https://github.com/Rebilly/Redoc) - 由 OpenAPI/Swagger 生成的 API 参考文档
* :octocat: [excaliburjs/Excalibur](https://github.com/excaliburjs/Excalibur) - 免费开源的 JavaScript 游戏引擎
* :octocat: [Bobril](https://github.com/Bobris/Bobril) - 受 Mithril 和 ReactJs 启发、以组件为核心的框架。 (另见：http://bobril.com/)
* :octocat: [Stencil](https://github.com/ionic-team/stencil) - 用于构建现代 Web Components 的工具
* :octocat: [Langfuse](https://github.com/langfuse/langfuse) - 开源 LLM 工程平台 🪢 - 跟踪、提示词管理、评估、分析
* :octocat: [redux-zero](https://github.com/concretesolutions/redux-zero) - 基于 Redux 的轻量级状态容器
* :octocat: [wretch](https://github.com/elbywan/wretch) - 围绕 fetch 构建的微型（gzip 后小于 2.2 KB）封装，语法直观。
* :octocat: [Cycle.js](https://github.com/cyclejs/cyclejs) - 函数式、响应式 JavaScript 框架，助力编写可预测的代码。
* :octocat: [Tridactyl](https://github.com/tridactyl/tridactyl) - Firefox 浏览器扩展，以被奉为正统编辑器的 Vim 为模型，取代浏览器的控制方式。
* :octocat: [armour/vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) - vue-cli 3.0 和 TypeScript 极简管理后台模板，也是可用于生产环境的前端管理界面方案（[演示](https://armour.github.io/vue-typescript-admin-template/#/dashboard)）
* :octocat: [n8n.io](https://github.com/n8n-io/n8n) - 开源工作流自动化工具
* :octocat: [Dnote](https://github.com/dnote/dnote) - 命令行笔记本，支持多设备同步和 Web 界面。
* :octocat: [Thin Backend](https://github.com/digitallyinduced/thin-backend) - 单页应用的实时后端，通过从 Postgres 架构派生类型实现端到端类型安全
* :octocat: [Flowbite](https://github.com/themesberg/flowbite) - 基于 Tailwind CSS 构建的开源组件库，包含以 TypeScript 编写的交互式 UI 组件
* :octocat: [ILLA Cloud](https://www.illacloud.com/) - 开源低代码平台，可替代 Retool 和 Appsmith，让开发者在几分钟内构建内部工具。
* :octocat: [Treehouse](https://github.com/treehousedev/treehouse) - 用于构建自有笔记工具的轻量开源库。
* :octocat: [GOUI](https://github.com/intermesh/goui) - 开源用户界面库，提供大量用于构建 Web 应用的组件
* :octocat: [InDom](https://github.com/constcallid/indom) - 小于 4 KB、与技术栈无关的现代 DOM 库，支持自动清理，提供 TypeScript 源码和类型定义。
* :octocat: [Bubble Lab](https://github.com/bubblelabai/BubbleLab) - 开源、原生 TypeScript 工作流自动化平台，支持 AI 生成、全面可观测性和代码导出。

### 网页/ReactJS
* :octocat: [facebook/create-react-app](https://facebook.github.io/create-react-app/docs/adding-typescript) 无需构建配置即可创建 TypeScript React 应用
* :octocat: [Microsoft/TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter) TypeScript 与 React 入门模板，附有详细 README 说明二者如何配合使用；基于 `create-react-app`
* :scroll: [typescript-cheatsheets/react-typescript-cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) 面向开始使用 TypeScript 的资深 React 开发者的速查表
* :octocat: [jsxtyper](https://github.com/fuselabs/jsxtyper) 从 .jsx 文件生成 TypeScript 接口
* :octocat: [TodoMVC • TypeScript + React Example](https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react)
* :octocat: [Veritas Kanban](https://github.com/BradGroux/veritas-kanban) - 可自行托管并集成 AI 代理的看板，使用 React 19、TypeScript 严格模式和 Vite 6 构建，拥有 1,255 项测试。
* :scroll: [Working with React and TypeScript](http://blog.wolksoftware.com/working-with-react-and-typescript)
* :guardsman: [**vortigern** - A universal boilerplate for building web applications w/ TypeScript, React, Redux and more.](https://github.com/barbar/vortigern)
* :robot: [Convert React code to TypeScript automatically](https://github.com/lyft/react-javascript-to-typescript-transform)
* :octocat: [React Server Example TSX](https://github.com/styfle/react-server-example-tsx) 使用 TypeScript 和 React 服务端渲染构建的同构 Web 应用样板项目
* :octocat: [React & Redux in TypeScript - Static Typing Guide](https://github.com/piotrwitek/react-redux-typescript-guide) 使用 TypeScript 为「React 与 Redux」实现静态类型的完整指南
* :octocat: [Typescript Monorepo CRA Example](https://github.com/deptno/typescript-monorepo-cra-example) - 极简 CRA + TypeScript 单体仓库示例。
* :octocat: [Typescript Monorepo Next Example](https://github.com/deptno/typescript-monorepo-next-example) - 极简 Next.js + TypeScript 单体仓库示例。
* :stars: [Crisp React](https://github.com/winwiz1/crisp-react) React 客户端与 Express 后端样板项目，提供性能和扩展功能，帮助避免常见的 React-Express 问题。
* :book: [React by Example](https://reactbyexample.github.io/) 面向程序员、以代码为导向的 React 教程
* :octocat: [Materio Free MUI React NextJS Typescript Admin Template](https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free) - 为开发者打造的强大且全面的免费 MUI React NextJS TypeScript 管理后台模板，使用 TypeScript 和 JavaScript 构建。
* :octocat: [Flowbite React](https://github.com/themesberg/flowbite-react) - 基于 React、TypeScript 和 Tailwind CSS 的开源组件库
* :octocat: [react-feedback-surveys](https://github.com/feedback-tools-platform/react-feedback-surveys) - 轻量、零依赖的调查组件，可在 React 应用中收集用户反馈（NPS、CSAT、CES），并全面支持 TypeScript

### 平台工程与 DevOps
* :octocat: [CDK8s](https://cdk8s.io/) - 使用 TypeScript 定义 Kubernetes 应用和可复用抽象
* :octocat: [AWS CDK](https://github.com/aws/aws-cdk) - 用于使用 TypeScript 定义云基础设施的 Cloud Development Kit
* :octocat: [Pulumi](https://github.com/pulumi/pulumi) - 使用 TypeScript、JavaScript、Python、Go 和 .NET 实现基础设施即代码
* :octocat: [Backstage](https://github.com/backstage/backstage) - 使用 TypeScript 编写的开发者门户构建平台

### 后端 API
* :octocat: [Actio](https://github.com/crufters/actio/) - 面向单体应用和微服务的 Node.js 框架。
* :octocat: [design-first](https://adam-hanna.github.io/design-first-docs/) - TypeScript REST API 模板引擎
* :octocat: [Fastify](https://github.com/fastify/fastify) - 快速、低开销的 Node.js Web 框架
* :octocat: [Hono](https://hono.dev/) - 小巧、简单且超高速的边缘 Web 框架，可运行于任何 JavaScript 运行时
* :octocat: [Nest](https://github.com/nestjs/nest) - 渐进式 Node.js 框架，基于 TypeScript 构建高效、可扩展、企业级服务端应用 🚀 (另见：https://nestjs.com/)
  * :octocat: [nestia](https://github.com/samchon/nestia) - 使用 `typia` 装饰器实现快 20,000 倍的验证和快 200 倍的 JSON 序列化。支持直接将纯 TypeScript 接口类型用作 DTO，整体服务器性能可提升约 30 倍。还支持生成 SDK（带类型定义的 `fetch` 函数集合）和 Mockup Simulator（嵌入 SDK 的后端服务器模拟器），甚至只需 `swagger.json` 文件即可迁移 NestJS 项目。🚀 (另见：https://nestia.io/docs)
* :octocat: [LoopBack 4](https://github.com/strongloop/loopback-next) - 高度可扩展的 Node.js 与 TypeScript 框架，用于构建 API 和微服务。:rocket: (另见：https://loopback.io/)
* :octocat: [FoalTS](https://github.com/FoalTS/foal) - 简单、直观且完整的框架，用于构建企业级 Node.JS 应用 :boom: :rocket: (另见：https://foalts.org)
* :octocat: [Enso](http://ensojs.netlify.com) - TypeScript 优先的 Node.JS 框架，受领域驱动设计原则启发，专注于组合能力和开发者体验
* :octocat: [Libstack](https://libstack.io) - 一组模块，可轻松创建 TypeScript 服务器并部署到 Docker。
* :octocat: [tinyhttp](https://github.com/talentlessguy/tinyhttp) - 现代 Express 风格的 Node.js Web 框架，使用 TypeScript 编写并编译为原生 ESM。
* :octocat: [ZenTS](https://github.com/sahachide/ZenTS) - 现代化、Node.js 和 TypeScript 优先的框架，用于构建功能丰富的 Web 应用
* :octocat: [Booster Framework](https://github.com/boostercloud/booster) - 事件驱动、云原生的 GraphQL 开源框架，属于 Booster Cloud 生态系统。采用高级抽象和约定。 (另见：https://booster.cloud)

### 人工智能

* :octocat: [MastraAI](https://github.com/mastra-ai/mastra) - 一款有明确设计主张的 TypeScript 框架，帮助你快速构建 AI 应用和功能。
* :octocat: [VoltAgent](https://github.com/voltagent/voltagent) - 用于构建和运行 AI 代理的 TypeScript 框架，支持工具、记忆和可观测性。
* :octocat: [Tambo](https://github.com/tambo-ai/tambo) - 用于构建生成式 UI、支持 MCP 的 React SDK。
* :octocat: [Maxim AI](https://github.com/maximhq/maxim-js) - 用于启用 Maxim 可观测性的 JS/TS SDK。Maxim 是企业级评估与可观测性平台。 (另见：https://getmaxim.ai)
* :octocat: [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - 零信任 SDK，可在本地匿名化个人身份信息后再向 LLM 发送提示词，并无缝还原响应中的信息。

### 独立应用
* :octocat: [Visual Studio Code](https://github.com/Microsoft/vscode) - 跨平台 IDE。
* :octocat: [alm](https://github.com/alm-tools/alm) - 新一代 IDE，专为 TypeScript 打造，使用 TypeScript 和 React 编写
* :octocat: [App Outlet](https://github.com/app-outlet/app-outlet) - 使用 TypeScript 和 Angular 编写的通用 Linux 应用商店，支持 AppImages/Flatpaks/Snaps
* :octocat: [SnowFS](https://github.com/snowtrack/snowfs) - 快速且可扩展的图形文件版本控制存储
* :octocat: [MemFree](https://github.com/memfreeme/memfree) - 开源混合 AI 搜索引擎，可即时从互联网、书签、笔记和文档中获取准确答案。支持一键部署。
* :octocat: [Nostream](https://github.com/cameri/nostream) - 使用 TypeScript 编写的 Nostr 中继
* :octocat: [Peekaping](https://github.com/0xfurai/peekaping) - 正常运行时间监控解决方案，可监控网站、API 和服务，提供实时通知、精美状态页和全面分析

##### Chrome 扩展
* [OctoLinker](https://github.com/OctoLinker/browser-extension)
* [lc-mate](https://github.com/cglotr/lc-mate) - 为 LC 用户名添加竞赛评级的扩展

### 设计模式
* :octocat: [Design Patterns implementation](https://github.com/torokmark/design_patterns_in_typescript) - 实现 GoF 广为人知的 23 种设计模式
* :octocat: [Real World Design Patterns](https://github.com/vahidvdn/realworld-design-patterns) - 带测试的实用设计模式

### 装饰器
- :octocat: [Performance Decorators](https://github.com/RyanMyrvold/Performance-Decorators) - 一组用于性能优化的 TypeScript 装饰器，包括执行时间日志、内存使用监控等。

### 库
* :octocat: [SuperJSON](https://github.com/blitz-js/superjson) - 安全地将 JavaScript 表达式序列化为 JSON 的超集，支持 Date、BigInt 等
* :octocat: [Procedurem](https://github.com/ImVexed/Procedurem) - 小巧（2 KB）、高性能、基于 WebSockets 的双向 RPC 库。
* :octocat: [RxJS](https://github.com/ReactiveX/RxJS) - JavaScript 响应式编程库。
* :octocat: [xstream](https://github.com/staltz/xstream) - 极其直观、小巧且快速的 JavaScript 函数式响应式流库。
* :octocat: [mockt](https://github.com/nbottarini/mockt) - 令人愉悦的 TypeScript 和 JavaScript 模拟库
* :octocat: [substitute.js](https://github.com/ffMathy/FluffySpoon.JavaScript.Testing) - 从 NSubstitute 移植而来的流畅 TypeScript 模拟库。
* :octocat: [TypeMoq](https://github.com/florinn/typemoq) - 简单的 TypeScript 模拟库。
* :octocat: [fast-check](https://github.com/dubzzz/fast-check) - TypeScript 基于属性的测试框架。
* :octocat: [Suites](https://github.com/suites-dev/suites) - 面向 TypeScript 后端的单元测试框架，可与控制反转（IoC）和依赖注入框架配合使用。
* :octocat: [InversifyJS](https://github.com/inversify/InversifyJS/) - 功能强大且轻量的控制反转容器，为 JavaScript 和 Node.js 应用提供 TypeScript 支持。
* :octocat: [TypeORM](https://github.com/typeorm/typeorm) - TypeScript 和 JavaScript（ES7、ES6、ES5）的 ORM。支持 MySQL、PostgreSQL、MariaDB、SQLite、MS SQL Server、Oracle、WebSQL 数据库，可运行于 NodeJS、浏览器、Ionic、Cordova 和 Electron 平台。
  * :octocat: [Safe-TypeORM](https://github.com/samchon/safe-typeorm) - 在编译层增强 `TypeORM`，并通过应用层联接支持自动性能调优工具。此外，借助类型元编程确保原始 SQL 查询的安全性。
* :octocat: [MikroORM](https://github.com/mikro-orm/mikro-orm) - 基于 Data Mapper、Unit of Work 和 Identity Map 模式的 Node.js TypeScript ORM。支持 MongoDB、PostgreSQL、MySQL 和 SQLite。
* :octocat: [DrizzleORM](https://orm.drizzle.team/) - 轻量 TypeScript ORM，采用类 SQL 库的灵活数据访问方式，适用于无服务器环境且零依赖。
* :octocat: [Prisma](https://github.com/prisma/prisma) - 面向 Node.js 和 TypeScript 的现代数据库访问方案（ORM 替代品），支持 PostgreSQL、MySQL 和 SQLite
  * :octocat: [prisma-markdown](https://github.com/samchon/prisma-markdown)：生成由 ERD 图表及其说明组成的 Markdown 文档。
* :octocat: [Corgi](https://github.com/cardog-ai/corgi) - 使用优化 SQLite 数据库的 TypeScript VIN 解码器。完全离线，解码耗时小于 1 毫秒，21 MB 内含完整 NHTSA 数据集。
* :octocat: [Neuledge](https://github.com/neuledge/engine-js) - Neuledge 是一种通用数据库语言，提供先进的数据建模、业务逻辑表达和架构验证工具。
* :octocat: [Typetta](https://github.com/twinlogix/typetta) - 使用 GraphQL 作为架构定义语言的 Node.js TypeScript ORM，支持所有主流 SQL 数据库和 MongoDB。
* :octocat: [TypeGQL](https://github.com/prismake/typegql) - 一组工具，可直接从带类型的 TypeScript 类创建 GraphQL 架构。
* :octocat: [TSTL](https://github.com/samchon/tstl) - 使用 TypeScript 实现的 C++ STL（标准模板库），提供容器、迭代器、算法和函数对象等模块。
  * :octocat: [ECol](https://github.com/samchon/ecol) - TSTL 容器扩展；集合会派发元素 I/O 事件。
  * :octocat: [TGrid](https://github.com/samchon/tgrid) - 网格计算框架，是 TSTL 的网络与线程扩展，支持 RFC（远程函数调用）。
  * :octocat: [Mutex-Server](https://github.com/samchon/mutex-server) - 网络层的临界区控制器，提供互斥锁和信号量等功能。
* :octocat: [Kalimdor.js](https://github.com/JasonShin/kalimdorjs) - 面向 Web、Node 和开发者的机器学习库！
* :octocat: [prelude.ts](https://github.com/emmanueltouzery/prelude.ts) - 函数式编程工具：不可变持久化集合、Option 和 Either 等结构，以及组合子。
* :octocat: [ee-ts](https://github.com/aleclarson/ee-ts) - 带类型的事件发射器
* :octocat: [io-ts](https://github.com/gcanti/io-ts) - 运行时类型验证
* :octocat: [mokia](https://github.com/varHarrie/mokia) - 集成数据模拟和 HTTP 服务的模拟服务器。
* :octocat: [sub-events](https://github.com/vitaly-t/sub-events) - 强类型事件。
* :octocat: [ts-audio](https://github.com/EvandroLG/ts-audio) - 与技术栈无关、易于使用的 `AudioContext` API 操作库
* :octocat: [tslog](https://github.com/fullstack-build/tslog) - 强大的日志库，原生支持 TypeScript：提供精美插值、原生 V8 堆栈跟踪、机密信息遮蔽，以及基于 AsyncLocalStorage 的 requestId 支持
* :octocat: [tsParticles](https://github.com/matteobruni/tsparticles) - 轻量库，可轻松为网站创建粒子动画（也支持 ReactJS、VueJS、Angular、Svelte 等）
* :octocat: [statek](https://github.com/pie6k/statek) - 响应式状态管理库
* :octocat: [Injex](https://www.injex.dev/) - 简单、基于装饰器且可插拔的 TypeScript 应用依赖注入框架
* :octocat: [tRPC](https://www.trpc.io/) - 用于构建端到端类型安全 API 的 TypeScript 工具包
* :octocat: [vard](https://github.com/andersmyrmel/vard) - 基于模式的 TypeScript 提示词注入检测。采用受 Zod 启发的 API，为 LLM 应用提供小于 0.5 毫秒的验证。
* :octocat: [interface-forge](https://www.npmjs.com/package/interface-forge) - 使用 TypeScript 类型和接口创建测试数据工厂
* :octocat: [iter-ops](https://github.com/vitaly-t/iter-ops) - 可迭代对象操作
* :octocat: [Remult](https://github.com/remult/remult) - 在全栈 TypeScript 应用中实现端到端类型安全的 CRUD，以及前后端模型代码共享。
* :octocat: [Jest](https://github.com/facebook/jest) - 全面的 JavaScript 测试解决方案，适用于大多数 JavaScript 项目且开箱即用。
* :octocat: [diod](https://github.com/artberri/diod) - 立场鲜明且轻量的控制反转容器和依赖注入器，适用于 Node.js 或浏览器应用。
* :octocat: [@deliberative/crypto](https://github.com/deliberative/crypto) - 用于公钥密码学、AEAD 密封箱、Shamir 秘密共享和随机洗牌的 TypeScript/WebAssembly 库。可运行于 Node.js、ESM、CommonJS 和浏览器。
* :octocat: [castore](https://github.com/castore-dev/castore) - 帮助你在应用中轻松实现事件溯源的 TypeScript 库
* :octocat: [sweet-monads](https://github.com/JSMonk/sweet-monads) - 提供常见单子（如 `Maybe` 或 `Either`）和高性能迭代器的 TypeScript 库。
* :octocat: [simple-mask-money](https://github.com/codermarcos/simple-mask-money) - 💰 简单的金额格式化软件包，轻量、安全且带有类型！
* :octocat: [Color-Core](https://github.com/iamlite/color-core) - `color-core` 是适用于 TypeScript 和 JavaScript 应用的强大、类型安全的颜色处理库。它提供全面的工具集，可在多种颜色空间中处理颜色，是需要高级颜色处理项目的开发者不可或缺的工具。
* :octocat: [PigmentTS](https://github.com/Jay-Karia/pigment-ts) - 轻量级颜色处理与转换工具。
* :octocat: [file-graph](https://github.com/DIY0R/file-graph) - 用于将图存储在文件中并对其查询的库。
* :octocat: [@diy0r/nestjs-rabbitmq](https://github.com/DIY0R/nestjs-rabbitmq) - 使用 RabbitMQ 构建 NestJS 微服务的库。
* :octocat: [Onion.JS](https://github.com/ThomasAribart/onion.js) - 设计并应用封装器（即高阶函数），同时不破坏类型！基于 [HotScript](https://github.com/gvergnaud/hotscript) 高阶类型。
* :octocat: [text-smart-trimmer](https://github.com/vaidehimani/text-smart-trimmer) - 轻量 TypeScript 文本截断工具，可选择保留词边界、标点符号和自定义后缀。
* :octocat: [nano-string-utils](https://github.com/Zheruel/nano-string-utils) - 超轻量、零依赖字符串工具。支持 Tree Shaking、类型完整，并针对现代 JavaScript 优化。
* :octocat: [safe-fetch](https://github.com/asouei/safe-fetch) - 零依赖 fetch 封装，提供安全结果、双重超时、智能重试和规范化的 TypeScript 错误。
* :octocat: [stunk](https://github.com/I-am-abdulazeez/stunk) - 轻量、与框架无关的状态管理库，通过原子块实现细粒度响应性；简单易用，适用于各种 TypeScript 应用。
* :octocat: [blastore](https://github.com/sergey-shablenko/blastore) - 极简、高性能的存储封装，支持 localStorage、AsyncStorage、内存及任意同步/异步后端，并提供完整 TypeScript 类型安全。
* :octocat: [FilterQL](https://github.com/adamhl8/filterql) - 用于筛选结构化数据的微型查询语言
* :octocat: [ffetch](https://github.com/fetch-kit/ffetch) – TypeScript 优先的 `fetch` 封装，支持重试、超时、断路器和生命周期钩子。零运行时依赖，可在任何支持 `fetch` 的环境中运行
* :octocat: [iterflow](https://github.com/gv-sh/iterflow) - 强大的迭代器工具，支持统计运算、窗口处理和惰性求值
* :octocat: [Nano Queries](https://github.com/vitonsky/nano-queries) - 与数据库无关的查询构建器，支持可组合、可嵌套和可变查询。已用于 Postgres、SQLite、PGLite、DuckDB 等生产环境。

# 大语言模型（LLM）
* [duckduckgo-ai-chat](https://github.com/mumu-lhl/duckduckgo-ai-chat) - 提供 DuckDuckGo AI Chat API，可免费使用 gpt-4o-mini。
* [Neurolink](https://github.com/juspay/neurolink) - 通用 AI 开发平台，整合 12 个以上 AI 服务提供商（OpenAI、Anthropic、Google、Bedrock、Azure），支持 MCP、多提供商故障切换和可用于生产环境的企业级功能。提供 TypeScript SDK + CLI。
* [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - 零信任 SDK，可在本地匿名化个人身份信息后再向 LLM 发送提示词，并无缝还原响应中的信息。

# 视频课程
## :free: 免费课程
* [Angular Applications with TypeScript](https://mva.microsoft.com/en-US/training-courses/angular-applications-with-typescript-14330) (Microsoft Virtual Academy)
* [AngularJS with TypeScript made easy](https://www.youtube.com/watch?v=OZxnFB0yQHs) (SSW TV)
* [Full Stack React GraphQL TypeScript Tutorial - 14 hour course](https://www.youtube.com/watch?v=I6ypD7qv3Z8) (YouTube)
* [Evolving JavaScript with TypeScript](https://www.youtube.com/watch?v=Ut694dsIa8w) 详细介绍 TypeScript
* [Why program in TypeScript?](https://www.youtube.com/watch?v=1TW9SdHIiXI) 概述主要语法结构，重点介绍使用 TypeScript 而非 JavaScript 编程的优势
* [Functional Programming with TypeScript](https://www.youtube.com/playlist?list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo) - 在这组适合初学者的 YouTube 播放列表中，跟随 Sahand Javid 探索函数式编程，并创建类似 fp-ts 的库。
* [Building CRM from scratch with Typescript and Bun](https://www.youtube.com/watch?v=l4QjeBEkNLc) - 不依赖大型框架，从头构建真实可用的 CRM 系统：使用 Bun、TypeScript 和 Tailwind。

## :dollar: 付费课程
* [TypeScript Fundamentals](https://www.pluralsight.com/courses/typescript) (Pluralsight)
* [Practical TypeScript Migration](https://www.pluralsight.com/courses/typescript-practical-migration) (Pluralsight)
* [Angular with TypeScript](http://www.pluralsight.com/courses/angular-typescript) (Pluralsight)
* [Using TypeScript for Large AngularJS Applications](https://www.pluralsight.com/courses/using-typescript-large-angularjs-apps) (Pluralsight)
* [Introduction to TypeScript](https://www.packtpub.com/application-development/introduction-typescript-video) (Packt)
* [Mastering TypeScript](https://www.packtpub.com/web-development/mastering-typescript-video) (Packt)
* [TypeScript: The Complete Developer's Guide](https://www.udemy.com/typescript-the-complete-developers-guide/) (Udemy)
* [Angular with TypeScript](https://www.manning.com/livevideo/angular-for-java-developers-typescript/) (Manning)
* [Mastering TypeScript - 2022 Edition](https://www.udemy.com/course/learn-typescript/) (Udemy)

# 教程

* [Converting your vanilla JavaScript app to TypeScript](https://www.useanvil.com/blog/engineering/converting-vanilla-javascript-to-typescript)
* [Difference Between TypeScript and JavaScript](https://www.scaler.com/topics/typescript-vs-javascript/)

# 路线图

* [TypeScript Roadmap](https://roadmap.sh/typescript)
* [TypeScript Origins: The Documentary - YouTube](https://www.youtube.com/watch?v=U6s2pdxebSo) 出品方：OfferZen Origins
  > 这部纪录片邀请了核心贡献者和社区成员参与，包括 Anders Hejlsberg、Steve Lucco、Luke Hoban、Daniel Rosenwasser、Ryan Cavanaugh、Amanda Silver、Matt Pocock、Josh Goldberg 等！

### 徽章
* [TypeScript Badges](https://github.com/ellerbrock/typescript-badges/)
[![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/awesome/typescript125x28.png)](https://github.com/ellerbrock/typescript-badges/) [![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/code/typescript-125x28.png)](https://github.com/ellerbrock/typescript-badges/) [![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/love/typescript-125x28.png)](https://github.com/ellerbrock/typescript-badges/)

### 社交媒体
 * [@typescriptlang](https://twitter.com/typescriptlang) - TypeScript 官方 Twitter 账号
 * [@angularjs](https://twitter.com/angularjs) - AngularJS 官方 Twitter 账号；自 2.0 版起使用 TypeScript
 * [@jntrnr](https://twitter.com/jntrnr) - Microsoft 的 TypeScript 项目经理
 * [@ahejlsberg](https://twitter.com/ahejlsberg) - 参与 TypeScript 项目的 Microsoft 技术院士

### 致谢
> （新增于 2023 年）新增此部分以感谢大家的贡献。

 - 2023 - ⚒ 感谢 Hamza (@Hamza12700 https://github.com/Hamza12700 ) 提交了[超过 15 个已合并的拉取请求](https://github.com/dzharii/awesome-typescript/pulls?q=is%3Apr+author%3AHamza12700+is%3Aclosed)，为让此列表持续收录现代 TypeScript 项目作出了巨大贡献。**2023 年度贡献者**。
