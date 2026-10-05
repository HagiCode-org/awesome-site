# Awesome Bash [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) <!-- omit in toc -->

> 令人愉快的 Bash 脚本和资源的精选列表。

除了此列表之外，您还应该阅读列表 [awesome-shell](https://github.com/alebcay/awesome-shell)。它是一个很棒的命令行框架、工具包、指南和小发明的精选列表。您可能还想检查 [awesome-zsh](https://github.com/unixorn/awesome-zsh-plugins) 或 [awesome-fish](https://github.com/bucaran/awesome-fish)。如果您正在寻找更多列表，请查看 [sindresorhus/awesome](https://github.com/sindresorhus/awesome)。

## 内容 <!-- omit in toc -->

- [Books and Resources](#books-and-resources)
- [Command-Line Productivity](#command-line-productivity)
- [Customization](#customization)
- [For Developers](#for-developers)
- [Downloading and Serving](#downloading-and-serving)
- [Applications](#applications)
- [Games](#games)
- [Website](#website)
- [Shell Package Management](#shell-package-management)
- [Shell Script Development](#shell-script-development)
- [Just for fun](#just-for-fun)
- [Community](#community)
- [Other Awesome Lists](#other-awesome-lists)
- [Contribute](#contribute)
- [License](#license)

## 书籍和资源

- [The Bash-Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/) - 关于 GNU Bash 的任何类型的人类可读文档。
- [Bash beginner's mistakes](https://web.archive.org/web/20230330234404/https://wiki.bash-hackers.org/scripting/newbie_traps) - Bash 初学者错误列表（由 Bash-Hackers Wiki 提供）。
- [Bash Guide](http://mywiki.wooledge.org/BashGuide) - 初学者的 bash 指南（由 Lhunath 编写）。
- [Bash FAQ](http://mywiki.wooledge.org/BashFAQ) - 回答您的大部分问题（由 Lhunath）。
- [Bash Pitfalls](http://mywiki.wooledge.org/BashPitfalls) - 列出了初学者容易陷入的陷阱，以及如何避免它们。
- [Bash manual](http://www.gnu.org/software/bash/manual/) - Bourne-Again Shell 手册。
- [Bash FAQ](http://tiswww.case.edu/php/chet/bash/FAQ)（作者：[Chet Ramey](http://tiswww.case.edu/php/chet/)）
- [Advanced Bash-Scripting Guide](http://tldp.org/LDP/abs/html/) - 对 shell 脚本艺术的深入探索。
- [Bash Guide for Beginners](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/) - Bash 初学者指南（作者：Machtelt Garrels）。
- [Bash Programming - Intro/How-to](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc)
- [bash-handbook](https://github.com/denysdovhan/bash-handbook) - 一本为那些想要学习 Bash 而又不想太深入的人提供的手册。
- [Google's Shell Style Guide](https://google.github.io/styleguide/shellguide.html) - 关于代码风格的合理建议。
- [Sobell's Book](http://www.sobell.com/CR3/index.html) - 命令、编辑器和 shell 编程的实用指南。
- [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
- [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
- [Defensive BASH Programming](https://web.archive.org/web/20180917174959/http://www.kfirlavi.com/blog/2012/11/14/defensive-bash-programming) - 保护程序免遭破坏并保持代码整洁的方法。
- [Pure Bash Bible](https://github.com/dylanaraps/pure-bash-bible) - 外部进程的纯 bash 替代方案的集合。
- [explainshell](https://explainshell.com) - 分解并解释 shell (Bash) 命令（包括其标志和选项）的网站。
- [Safe ways to do things in bash](https://github.com/anordal/shellharden/blob/master/how_to_do_things_safely_in_bash.md) - 如何在 Bash 中安全地做事。

## 命令行生产力

*搜索、书签、多路复用和其他工具，使您的终端体验更加高效。*

- [aliases](https://github.com/sebglazebrook/aliases) - bash shell 的上下文、动态、有组织的别名。
- [bashhub-server](https://github.com/nicksherron/bashhub-server) - 私人托管的开源 bashhub 服务器。
- [bashhub](https://github.com/rcaloras/bashhub-client) - Bash 云中的历史记录。已索引且可搜索：cloud:。
- [bashmarks](https://github.com/huyng/bashmarks) - shell 的目录书签。
- [bashmount](https://github.com/jamielinux/bashmount) - 轻松管理可移动媒体。
- [ble.sh](https://github.com/akinomyoga/ble.sh) - 用户友好且功能丰富的阅读行替换，具有语法突出显示、更好的命令完成和改进的多行编辑。
- [commacd](https://github.com/shyiko/commacd) - 在 Bash 中移动的更快方式。
- [forkrun](https://github.com/jkool702/forkrun) - 用于并行运行代码的纯 bash 工具。语法和速度与 `xargs -P` 类似，但具有更多功能和本机 Bash 函数支持。
- [has](https://github.com/kdabir/has) - `has` 帮助您检查路径上各种命令行工具及其版本的存在。
- [hstr](https://github.com/dvorka/hstr) - Bash 历史建议框。
- [sshrc](https://github.com/cdown/sshrc) - 当您进行 SSH 时，请携带您的 .bashrc、.vimrc 等。
- [utility-bash-scripts](https://github.com/aviaryan/utility-bash-scripts) - 有用的 bash 脚本可使用单个命令执行自动化任务。
- [zoxide](https://github.com/ajeetdsouza/zoxide) - 导航文件系统的更好方法。用 Rust 编写，跨 shell，并且比其他自动跳线器快得多。

## 定制化

*自定义提示、颜色主题等*

- [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) - 性感终端的简约主题（提示）。
- [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) - 为 Git 用户提供信息丰富且精美的 Bash 提示。
- [bash-powerline](https://github.com/riobard/bash-powerline) - 纯 Bash 脚本中的 Powerline 风格的 Bash 提示.
- [bashstrap](https://github.com/barryclark/bashstrap) - 修饰 macOS 终端的快速方法。
- [git-prompt](https://github.com/lvv/git-prompt) - Bash 提示 Git、SVN 和 HG 模块。
- [gittify](https://github.com/momeni/gittify) - 彩色 Bash 提示 + 自定义 Git 别名。
- [liquidprompt](https://github.com/nojhan/liquidprompt) - Bash 和 Zsh 的全功能且精心设计的自适应提示。
- [LS_COLORS](https://github.com/trapd00r/LS_COLORS) - LS_COLORS 定义的集合。
- [oh-my-git](https://github.com/arialdomartini/oh-my-git) - bash 和 zsh 的固执己见的 git 提示.
- [oh-my-bash](https://github.com/ohmybash/oh-my-bash) - 一个令人愉快的社区驱动框架，用于管理您的 bash 配置。
- [progress-bar.sh](https://github.com/edouard-lopez/progress-bar.sh) - `bash` 的简单而性感的进度条，给它一个持续时间，它会完成剩下的工作。
- [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt) - Bash 带有颜色提示、Git 状态和 Git 分支。
- [bash-sensible](https://github.com/mrzool/bash-sensible) - 尝试使用更理智的 Bash 默认值。

## 对于开发人员

*命令行开发、版本控制和部署。*

- [bocker](https://github.com/p8952/bocker) - Docker 在 bash 的 100 行中实现。
- [git-sh](https://github.com/rtomayko/git-sh) - 适合 Git 工作的定制 Bash 环境。
- [mkdkr](https://github.com/rosineygp/mkdkr) - 创建 + Docker + Shell = CI 管道。

## 下载和服务

*用 shell 脚本编写的自托管轻量级服务器和网络工具。*

- [Bash-web-server](https://github.com/dzove855/Bash-web-server) - 纯粹的 bash Web 服务器，没有 socat、netcat 等。
- [Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader) - Dropbox Uploader 是一个 Bash 脚本，可用于上传、下载、列出或删除 Dropbox 中的文件。
- [balls](https://github.com/jneen/balls) - Bash 在球上。
- [bashbro](https://github.com/victrixsoft/bashbro/) - 基于 Bash 的 Web 文件浏览器 - 允许您通过 Web 浏览器远程浏览、流式传输、查看文档和保存文件。
- [bash-stack](https://github.com/cgsdev0/bash-stack) - bash 中的现代 Web 框架.
- [bashttpd](https://github.com/avleen/bashttpd) - 用 Bash 编写的 Web 服务器.
- [httpd.sh](https://github.com/cemeyer/httpd.sh) - bash 中的一个简单的 Web 服务器，使用 ctypes.sh.
- [ngincat](https://github.com/jaburns/ngincat) - 使用 netcat 的小型 Bash HTTP 服务器.
- [sherver](https://github.com/remileduc/sherver) - 纯 Bash 轻量级 Web 服务器。
- [xiringuito](https://github.com/ivanilves/xiringuito) - 面向穷人的基于 SSH 的 VPN。

## 应用领域

*基于命令行的应用程序或通过命令行访问现有服务。*

- [bashblog](https://github.com/cfenollosa/bashblog) - 处理博客发布的 Bash 脚本。
- [pushbullet-bash](https://github.com/Red5d/pushbullet-bash) - Bash 与 PushBullet API 的接口。
- [todo.sh](https://github.com/todotxt/todo.txt-cli) - 一个简单且可扩展的 shell 脚本，用于管理 todo.txt 文件。
- [cheapci](https://github.com/ianmiell/cheapci) - 在 bash 中实现的持续集成框架.

## 游戏

*只工作不玩耍是度过一天的粗俗方式。*

- [bash2048](https://github.com/mydzor/bash2048) - Bash 2048 游戏的实现.
- [minesweeper](https://github.com/feherke/Bash-script/tree/master/minesweeper) - Bash 扫雷的实现。
- [wordle](https://gist.github.com/huytd/6a1a6a7b34a0d0abcac00b47e3d01513) - Wordle，少于 50 行 Bash。

## 网站

- [Bash One-Liners](http://www.bashoneliners.com/) - 一系列实用或纯粹的 awesome bash 单行（[repos](https://github.com/janosgyerik/bashoneliners) by @[janosgyerik](https://github.com/janosgyerik)）。
- [commandlinefu](http://www.commandlinefu.com/) - 最优雅、最有用的 UNIX 命令的存储库。

## Shell 包管理

*用于管理多个 shell 配置的工具。*

- [bash-it](https://github.com/Bash-it/bash-it) - 社区 Bash 框架。
- [basher](https://github.com/basherpm/basher) - shell 脚本的包管理器。
- [bpkg](https://github.com/bpkg/bpkg) - 轻量级 bash 包管理器。
- [homeshick](https://github.com/andsens/homeshick) - 用 Bash 编写的 Git 点文件同步器.

## Shell 脚本开发

*用于编写、改进或组织 Bash 或其他 shell 脚本的工具*

- [alinex bashlib](https://gitlab.com/alinex/bash-lib) - 用于服务器管理、数据处理和远程脚本编写的模块化 bash 库。
- [ansi](https://github.com/fidian/ansi) - 纯 bash 中的 ANSI 转义码 - 更改文本颜色、定位光标等等。
- [argbash](https://github.com/matejak/argbash) - Bash 参数解析代码生成器。
- [assert.sh](https://github.com/lehmannro/assert.sh) - Bash 单元测试框架。
- [async-bash](https://github.com/zombieleet/async-bash) - bash 中异步函数的实现。
- [bats](https://github.com/bats-core/bats-core) - Bash 自动化测试系统。
- [bash3boilerplate](https://github.com/kvz/bash3boilerplate) - 用于编写更好的 Bash 脚本的模板。
- [bashful](https://github.com/jmcantrell/bashful) - 用于简化 Bash 脚本编写的库集合。
- [bashify](https://github.com/zombieleet/bashify) - bash 中很少有辅助函数（尤其是字符串操作函数）。
- [bashing](https://github.com/xsc/bashing) - 将 Bash 粉碎 - Bash 用于创建命令行工具的框架。
- [bashly](https://github.com/DannyBen/bashly) - Bash 命令行框架和 CLI 生成器.
- [bashmanager](https://github.com/lingtalfi/bashmanager) - 用于创建命令行工具的迷你 bash 框架.
- [Bashmatic](https://github.com/kigster/bashmatic) - 一个易于使用的 DSL 库，用于构建基于 BASH 的工具和安装程序（900 多个功能）。
- [bunit](https://github.com/rafritts/bunit) - Bash 脚本的单元测试框架.
- [Bash Infinity](https://github.com/niieani/bash-oo-framework) - bash 的现代样板/框架/标准库。
- [bash-modules](https://github.com/vlisivka/bash-modules) - 非官方严格模式的模块集合。
- [bash_unit](https://github.com/pgrange/bash_unit) - Bash 适合专业人员的单元测试企业版框架。
- [bashunit](https://github.com/TypedDevs/bashunit) - bash 脚本的简单测试库。
- [lobash](https://github.com/adoyle-h/lobash) - 用于 Bash 脚本开发的现代、安全、强大的实用程序/库。
- [mo](https://github.com/tests-always-included/mo) - 纯 bash 中的胡子模板.
- [semver_bash](https://github.com/cloudflare/semver_bash) - Bash 中的语义版本控制。
- [shellcheck](https://github.com/koalaman/shellcheck) - shell 脚本的静态分析工具。
- [shellharden](https://github.com/anordal/shellharden) - 纠正 bash 语法荧光笔。
- [shfmt](https://github.com/mvdan/sh) - 格式化 bash 程序。
- [shunit2](https://github.com/kward/shunit2) - Bash 脚本的单元测试框架，具有 JUnit/PyUnit 的风格.
- [DevOps-Bash-tools](https://github.com/HariSekhon/DevOps-Bash-tools) - 750+ DevOps Shell 脚本和高级 Bash 环境。
- [modernish](https://github.com/modernish/modernish) - 具有 shell 脚本各种功能的库。
- [json.bash](https://github.com/h4l/json.bash) - Bash 库和创建 JSON 的命令行工具.
- [timep](https://github.com/jkool702/timep) - bash 代码的下一代分析器和 FlameGraph 生成器。

## 只是为了好玩

- [Bash Screensavers](https://github.com/attogram/bash-screensavers?) - 完全用 bash 编写的屏幕保护程序集合.
- [pokeget](https://github.com/talwat/pokeget) - 在终端中显示口袋妖怪的精灵。

## 社区

- [Stack Overflow](http://stackoverflow.com/questions/tagged/bash) - Stack Overflow 上的 Bash 标签。
- [/r/bash](https://www.reddit.com/r/bash) - 专门用于 bash 脚本编写的 Reddit 子版块。
- [/r/commandline](https://www.reddit.com/r/commandline) - 对于任何操作系统中有关命令行的任何内容。
- [#bash](https://web.libera.chat/?nick=Guest&#bash) - Libera 上的 IRC 频道。​聊天。 BashGuide、BashFAQ、BashPitfalls 和 ShellCheck 的主要贡献者都在那里。

## 其他很棒的清单

其他令人惊叹的列表可以在 [awesome-awesome](https://github.com/emijrp/awesome-awesome) 和 [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) 中找到。

## 贡献

欢迎投稿！首先读取 [contribution guidelines](contributing.md)。

## 执照

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

在法律允许的范围内，aloisdg 已放弃本作品的所有版权以及相关或邻接权。
