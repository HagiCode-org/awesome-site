# Awesome Bash [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) <!-- omit in toc -->

> 令人愉快的 Bash 腳本和資源的精選清單。

除了此列表之外，您還應該閱讀清單 [awesome-shell](https://github.com/alebcay/awesome-shell)。它是一個很棒的命令列框架、工具包、指南和小發明的精選清單。您可能還想檢查 [awesome-zsh](https://github.com/unixorn/awesome-zsh-plugins) 或 [awesome-fish](https://github.com/bucaran/awesome-fish)。如果您正在尋找更多列表，請查看 [sindresorhus/awesome](https://github.com/sindresorhus/awesome)。

## 內容 <!-- omit in toc -->

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

## 書籍和資源

- [The Bash-Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/) - 關於 GNU Bash 的任何類型的人類可讀文件。
- [Bash beginner's mistakes](https://web.archive.org/web/20230330234404/https://wiki.bash-hackers.org/scripting/newbie_traps) - Bash 初學者錯誤清單（由 Bash-Hackers Wiki 提供）。
- [Bash Guide](http://mywiki.wooledge.org/BashGuide) - 初學者的 bash 指南（由 Lhunath 編寫）。
- [Bash FAQ](http://mywiki.wooledge.org/BashFAQ) - 回答您的大部分問題（由 Lhunath）。
- [Bash Pitfalls](http://mywiki.wooledge.org/BashPitfalls) - 列出了初學者容易陷入的陷阱，以及如何避免它們。
- [Bash manual](http://www.gnu.org/software/bash/manual/) - Bourne-Again Shell 手冊。
- [Bash FAQ](http://tiswww.case.edu/php/chet/bash/FAQ)（作者：[Chet Ramey](http://tiswww.case.edu/php/chet/)）
- [Advanced Bash-Scripting Guide](http://tldp.org/LDP/abs/html/) - 對 shell 腳本藝術的深入探索。
- [Bash Guide for Beginners](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/) - Bash 初學者指南（作者：Machtelt Garrels）。
- [Bash Programming - Intro/How-to](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc)
- [bash-handbook](https://github.com/denysdovhan/bash-handbook) - 一本為那些想要學習 Bash 而又不想太深入的人提供的手冊。
- [Google's Shell Style Guide](https://google.github.io/styleguide/shellguide.html) - 關於程式碼風格的合理建議。
- [Sobell's Book](http://www.sobell.com/CR3/index.html) - 命令、編輯器和 shell 程式設計的實用指南。
- [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
- [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
- [Defensive BASH Programming](https://web.archive.org/web/20180917174959/http://www.kfirlavi.com/blog/2012/11/14/defensive-bash-programming) - 保護程式免於破壞並保持程式碼整潔的方法。
- [Pure Bash Bible](https://github.com/dylanaraps/pure-bash-bible) - 外部流程的純 bash 替代方案的集合。
- [explainshell](https://explainshell.com) - 分解並解釋 shell (Bash) 命令（包括其標誌和選項）的網站。
- [Safe ways to do things in bash](https://github.com/anordal/shellharden/blob/master/how_to_do_things_safely_in_bash.md) - 如何在 Bash 中安全地做事。

## 命令列生產力

*搜尋、書籤、多路復用和其他工具，讓您的終端體驗更有效率。*

- [aliases](https://github.com/sebglazebrook/aliases) - bash shell 的上下文、動態、有組織的別名。
- [bashhub-server](https://github.com/nicksherron/bashhub-server) - 私人託管的開源 bashhub 伺服器。
- [bashhub](https://github.com/rcaloras/bashhub-client) - Bash 雲中的歷史記錄。已索引且可搜尋：cloud:。
- [bashmarks](https://github.com/huyng/bashmarks) - shell 的目錄書籤。
- [bashmount](https://github.com/jamielinux/bashmount) - 輕鬆管理可移動媒體。
- [ble.sh](https://github.com/akinomyoga/ble.sh) - 使用者友好且功能豐富的閱讀行替換，具有語法突出顯示、更好的命令完成和改進的多行編輯。
- [commacd](https://github.com/shyiko/commacd) - 在 Bash 中移動的更快方式。
- [forkrun](https://github.com/jkool702/forkrun) - 用於平行運行程式碼的純 bash 工具。語法和速度與 `xargs -P` 類似，但具有更多功能和本機 Bash 函數支援。
- [has](https://github.com/kdabir/has) - `has` 可協助您檢查路徑上各種命令列工具及其版本的存在。
- [hstr](https://github.com/dvorka/hstr) - Bash 歷史建議框。
- [sshrc](https://github.com/cdown/sshrc) - 當您進行 SSH 時，請攜帶您的 .bashrc、.vimrc 等。
- [utility-bash-scripts](https://github.com/aviaryan/utility-bash-scripts) - 有用的 bash 腳本可使用單一指令執行自動化任務。
- [zoxide](https://github.com/ajeetdsouza/zoxide) - 導航檔案系統的更好方法。用 Rust 編寫，跨 shell，並且比其他自動跳線器快得多。

## 客製化

*自訂提示、顏色主題等*

- [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) - 性感終端的簡約主題（提示）。
- [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) - 為 Git 用戶提供資訊豐富且精美的 Bash 提示。
- [bash-powerline](https://github.com/riobard/bash-powerline) - 純 Bash 腳本中的 Powerline 風格的 Bash 提示.
- [bashstrap](https://github.com/barryclark/bashstrap) - 修飾 macOS 終端機的快速方法。
- [git-prompt](https://github.com/lvv/git-prompt) - Bash 提示 Git、SVN 和 HG 模組。
- [gittify](https://github.com/momeni/gittify) - 彩色 Bash 提示 + 自訂 Git 別名。
- [liquidprompt](https://github.com/nojhan/liquidprompt) - Bash 和 Zsh 的全功能且精心設計的自適應提示。
- [LS_COLORS](https://github.com/trapd00r/LS_COLORS) - LS_COLORS 定義的集合。
- [oh-my-git](https://github.com/arialdomartini/oh-my-git) - bash 和 zsh 的固執己見的 git 提示.
- [oh-my-bash](https://github.com/ohmybash/oh-my-bash) - 一個令人愉悅的社群驅動框架，用於管理您的 bash 配置。
- [progress-bar.sh](https://github.com/edouard-lopez/progress-bar.sh) - `bash` 的簡單而性感的進度條，給它一個持續時間，它會完成剩下的工作。
- [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt) - Bash 帶有顏色提示、Git 狀態和 Git 分支。
- [bash-sensible](https://github.com/mrzool/bash-sensible) - 嘗試使用更理智的 Bash 預設值。

## 對於開發人員

*命令列開發、版本控制和部署。*

- [bocker](https://github.com/p8952/bocker) - Docker 在 bash 的 100 行中實作。
- [git-sh](https://github.com/rtomayko/git-sh) - 適合 Git 工作的客製化 Bash 環境。
- [mkdkr](https://github.com/rosineygp/mkdkr) - 建立 + Docker + Shell = CI 管道。

## 下載和服務

*以 shell 腳本編寫的自架輕量級伺服器和網路工具。*

- [Bash-web-server](https://github.com/dzove855/Bash-web-server) - 純粹的 bash Web 伺服器，沒有 socat、netcat 等。
- [Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader) - Dropbox Uploader 是一個 Bash 腳本，可用於上傳、下載、列出或刪除 Dropbox 中的檔案。
- [balls](https://github.com/jneen/balls) - Bash 在球上。
- [bashbro](https://github.com/victrixsoft/bashbro/) - 基於 Bash 的 Web 檔案瀏覽器 - 讓您透過 Web 瀏覽器遠端瀏覽、串流、檢視文件和儲存檔案。
- [bash-stack](https://github.com/cgsdev0/bash-stack) - bash 中的現代 Web 框架.
- [bashttpd](https://github.com/avleen/bashttpd) - 用 Bash 編寫的 Web 伺服器.
- [httpd.sh](https://github.com/cemeyer/httpd.sh) - bash 中的一個簡單的 Web 伺服器，使用 ctypes.sh.
- [ngincat](https://github.com/jaburns/ngincat) - 使用 netcat 的小型 Bash HTTP 伺服器.
- [sherver](https://github.com/remileduc/sherver) - 純 Bash 輕量級 Web 伺服器。
- [xiringuito](https://github.com/ivanilves/xiringuito) - 面向窮人的基於 SSH 的 VPN。

## 應用領域

*基于命令行的应用程序或通过命令行访问现有服务。*

- [bashblog](https://github.com/cfenollosa/bashblog) - 處理部落格發佈的 Bash 腳本。
- [pushbullet-bash](https://github.com/Red5d/pushbullet-bash) - Bash 與 PushBullet API 的介面。
- [todo.sh](https://github.com/todotxt/todo.txt-cli) - 一個簡單且可擴充的 shell 腳本，用於管理 todo.txt 檔案。
- [cheapci](https://github.com/ianmiell/cheapci) - 在 bash 中實現的持續整合框架.

## 遊戲

*只工作不玩耍是度过一天的粗俗方式。*

- [bash2048](https://github.com/mydzor/bash2048) - Bash 2048 遊戲的實現.
- [minesweeper](https://github.com/feherke/Bash-script/tree/master/minesweeper) - Bash 掃雷的實作。
- [wordle](https://gist.github.com/huytd/6a1a6a7b34a0d0abcac00b47e3d01513) - Wordle，少於 50 行 Bash。

## 網站

- [Bash One-Liners](http://www.bashoneliners.com/) - 一系列實用或純的 awesome bash 單行（[repos](https://github.com/janosgyerik/bashoneliners) by @[janosgyerik](https://github.com/janosgyerik)）。
- [commandlinefu](http://www.commandlinefu.com/) - 最優雅、最有用的 UNIX 指令的儲存庫。

## Shell 套件管理

*用于管理多个 shell 配置的工具。*

- [bash-it](https://github.com/Bash-it/bash-it) - 社群 Bash 框架。
- [basher](https://github.com/basherpm/basher) - shell 腳本的套件管理器。
- [bpkg](https://github.com/bpkg/bpkg) - 輕量級 bash 套件管理器。
- [homeshick](https://github.com/andsens/homeshick) - 用 Bash 編寫的 Git 點檔案同步器.

## Shell 腳本開發

*用於編寫、改進或組織 Bash 或其他 shell 腳本的工具*

- [alinex bashlib](https://gitlab.com/alinex/bash-lib) - 用於伺服器管理、資料處理和遠端腳本編寫的模組化 bash 庫。
- [ansi](https://github.com/fidian/ansi) - 純 bash 中的 ANSI 轉義碼 - 更改文字顏色、定位遊標等等。
- [argbash](https://github.com/matejak/argbash) - Bash 參數解析程式碼產生器。
- [assert.sh](https://github.com/lehmannro/assert.sh) - Bash 單元測試框架。
- [async-bash](https://github.com/zombieleet/async-bash) - bash 中非同步函數的實作。
- [bats](https://github.com/bats-core/bats-core) - Bash 自動化測試系統。
- [bash3boilerplate](https://github.com/kvz/bash3boilerplate) - 用於編寫更好的 Bash 腳本的模板。
- [bashful](https://github.com/jmcantrell/bashful) - 用於簡化 Bash 腳本編寫的函式庫集合。
- [bashify](https://github.com/zombieleet/bashify) - bash 中很少有輔助函數（尤其是字串操作函數）。
- [bashing](https://github.com/xsc/bashing) - 將 Bash 粉碎 - Bash 用於建立命令列工具的框架。
- [bashly](https://github.com/DannyBen/bashly) - Bash 命令列框架與 CLI 產生器.
- [bashmanager](https://github.com/lingtalfi/bashmanager) - 用於建立命令列工具的迷你 bash 框架.
- [Bashmatic](https://github.com/kigster/bashmatic) - 一個易於使用的 DSL 函式庫，用於建立基於 BASH 的工具和安裝程式（900 多個功能）。
- [bunit](https://github.com/rafritts/bunit) - Bash 腳本的單元測試框架.
- [Bash Infinity](https://github.com/niieani/bash-oo-framework) - bash 的現代樣板/框架/標準庫。
- [bash-modules](https://github.com/vlisivka/bash-modules) - 非官方嚴格模式的模組集合。
- [bash_unit](https://github.com/pgrange/bash_unit) - Bash 適合專業人員的單元測試企業版框架。
- [bashunit](https://github.com/TypedDevs/bashunit) - bash 腳本的簡單測試庫。
- [lobash](https://github.com/adoyle-h/lobash) - 用於 Bash 腳本開發的現代、安全、強大的實用程式/函式庫。
- [mo](https://github.com/tests-always-included/mo) - 純 bash 中的鬍子模板.
- [semver_bash](https://github.com/cloudflare/semver_bash) - Bash 中的語意版本控制。
- [shellcheck](https://github.com/koalaman/shellcheck) - shell 腳本的靜態分析工具。
- [shellharden](https://github.com/anordal/shellharden) - 修正 bash 語法螢光筆。
- [shfmt](https://github.com/mvdan/sh) - 格式化 bash 程式。
- [shunit2](https://github.com/kward/shunit2) - Bash 腳本的單元測試框架，具有 JUnit/PyUnit 的風格.
- [DevOps-Bash-tools](https://github.com/HariSekhon/DevOps-Bash-tools) - 750+ DevOps Shell 腳本和高級 Bash 環境。
- [modernish](https://github.com/modernish/modernish) - 具有 shell 腳本各種功能的函式庫。
- [json.bash](https://github.com/h4l/json.bash) - Bash 函式庫和建立 JSON 的命令列工具.
- [timep](https://github.com/jkool702/timep) - bash 程式碼的下一代分析器和 FlameGraph 產生器。

## 只是為了好玩

- [Bash Screensavers](https://github.com/attogram/bash-screensavers?) - 完全用 bash 編寫的螢幕保護程式集合.
- [pokeget](https://github.com/talwat/pokeget) - 在終端機中顯示寶可夢的精靈。

## 社群

- [Stack Overflow](http://stackoverflow.com/questions/tagged/bash) - Stack Overflow 上的 Bash 標籤。
- [/r/bash](https://www.reddit.com/r/bash) - 專用於 bash 腳本編寫的 Reddit 子版塊。
- [/r/commandline](https://www.reddit.com/r/commandline) - 任何作業系統中有關命令列的任何內容。
- [#bash](https://web.libera.chat/?nick=Guest&#bash) - Libera 上的 IRC 頻道。聊天。 BashGuide、BashFAQ、BashPitfalls 和 ShellCheck 的主要貢獻者都在那裡。

## 其他很棒的清單

其他令人驚嘆的清單可以在 [awesome-awesome](https://github.com/emijrp/awesome-awesome) 和 [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) 中找到。

## 貢獻

歡迎投稿！首先读取 [contribution guidelines](contributing.md)。

## 執照

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

在法律允許的範圍內，aloisdg 已放棄本作品的所有版權以及相關或鄰接權。
