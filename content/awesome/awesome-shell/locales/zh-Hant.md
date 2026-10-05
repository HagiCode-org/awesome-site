```
 █████╗ ██╗    ██╗███████╗███████╗ ██████╗ ███╗   ███╗███████╗
██╔══██╗██║    ██║██╔════╝██╔════╝██╔═══██╗████╗ ████║██╔════╝
███████║██║ █╗ ██║█████╗  ███████╗██║   ██║██╔████╔██║█████╗
██╔══██║██║███╗██║██╔══╝  ╚════██║██║   ██║██║╚██╔╝██║██╔══╝
██║  ██║╚███╔███╔╝███████╗███████║╚██████╔╝██║ ╚═╝ ██║███████╗
╚═╝  ╚═╝ ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
███████╗██╗  ██╗███████╗██╗     ██╗
██╔════╝██║  ██║██╔════╝██║     ██║
███████╗███████║█████╗  ██║     ██║
╚════██║██╔══██║██╔══╝  ██║     ██║
███████║██║  ██║███████╗███████╗███████╗
╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝
```

# Shell 精選資源 [![Awesome][awesome-badge]][awesome-link]

包括出色的指令線框架、工具箱、指南和圖示。 被棒极了 這本很棒的收藏也可以在 [unix-Sell.ZEEF.com 維基共享資源中相关的數據: 維基百科中的相关条目: 維基百科](https://unix-shell.zeef.com/caleb.xu).
- [貝殼](#shells)
- [命令列生产力](#command-line-productivity)
  - [目錄導覽](#directory-navigation)
- [自訂](#customization)
- [對發展者而言](#for-developers)
- [系統工具](#system-utilities)
- [下載及服務](#downloading-and-serving)
- [多媒体和檔案格式](#multimedia-and-file-formats)
- [應用程式](#applications)
- [遊戲](#games)
- [Shell 套件管理](#shell-package-management)
- [Shell 文稿發展](#shell-script-development)
- [指南](#guides)
- [**Awesome Zsh**][awesome-zsh]&nbsp; [![Awesome][awesome-badge]][awesome-zsh]
- [**Awesome Fish**][awesome-fish] [![Awesome][awesome-badge]][awesome-fish]
- [**Awesome Bash**][awesome-bash] [![Awesome][awesome-badge]][awesome-bash]
- [其他优秀列表](#other-awesome-lists)

## Shell 類型

*選擇您的底殼。 *

* [bash](https://www.gnu.org/software/bash/) - GNU 專案的 shell (Bourne Again SHell)
* [elvish](https://elv.sh/) - 友好的、表達性的 shell 功能,如匿名函數和資料結構
* [es](https://wryun.github.io/es-shell/) - 根据9號計劃 展開的彈殼 [弧形](https://github.com/rakitzis/rc) 外壳
* [fish](https://fishshell.com) - 智能和易用的命令行 shell
* [ion](https://github.com/redox-os/ion) - 一個現代系統外殼 具有簡單而有力的語法 完全用Rust寫的
* [ksh93](https://github.com/att/ast) - 科恩·謝爾
* [mksh](https://github.com/MirBSD/mksh) - MirBSD Korn Shell - 美食
* [murex](https://github.com/lmorg/murex) - 更聰明的外殼和文稿環境, 具有先进的功能,
* [ngs](https://github.com/ngs-lang/ngs) - 專為 Ops. REPL 創立的完整功能的文稿語言正在發展中。
* [nushell](https://github.com/nushell/nushell) - 用Rust寫的現代外殼
* [oksh](https://github.com/ibara/oksh) - 便携式 OpenBSD ksh
* [osh](https://www.oilshell.org) - 巴什兼容,与新/现代Unix shell語言叫做石油
* [pdksh](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/bin/ksh/) - 公有领域 Korn shell
* [powershell](https://docs.microsoft.com/en-us/powershell/scripting/overview) 跨平台的工作自动化和設定管理框架,包括命令行 shell 和文字語言
* [shell++](https://github.com/alexst07/shell-plus-plus) - 友好的現代功能和面向物件的 shell 文稿
* [shenv](https://github.com/shenv/shenv) - 簡單的 shell 版本管理
* [tcsh](https://www.tcsh.org/) - C shell 有檔案名稱完成與命令行編輯
* [xonsh](https://xon.sh) - Python -ish, BASHwards 外觀的 shell 語言與命令即時
* [yash](https://github.com/magicant/yash) - POSIX 符合命令行 shell, 內置支援, 以命令歷史为基础完成和預測
* [zsh](https://www.zsh.org) - 有語言的強大 shell

## 命令列效率工具

*搜尋、書签、多功能和其他工具,

* [AdvancedNewFile](https://github.com/tanrax/terminal-AdvancedNewFile) 以遞迴方式快速建立檔案與目錄 。 受到Vim插件的啟示。
* [ag](https://github.com/ggreer/the_silver_searcher) - 超快的字串搜索
* [aliases](https://github.com/sebglazebrook/aliases) - 拍拍的背景、动态、有组织化名
* [arttime](https://github.com/reportaman/arttime) - 精美的文字藝術符合時鐘、定時器、 pomodoro++ 時間管理器的功能
* [autoenv](https://github.com/hyperupcall/autoenv) - 基于目錄的環境。
* [await](https://github.com/slavaGanzin/await) - 單一二進位, 平行執行指令清單, 等待命令結束
* [bartib](https://github.com/nikolassv/bartib) - 命令行的簡單時間追蹤器 它將所有追蹤活動的紀錄儲存為純文本檔案, 並且允許您建立灵活的報告 。
* [bashhub](https://github.com/rcaloras/bashhub-client) -?),云:巴什史于云. 已索引和可搜尋 。
* [boilr](https://github.com/tmrts/boilr) - 一個快速的CLI工具 用锅爐板樣本創造工程
* [boom](https://github.com/holman/boom) - 在命令行中儲存連結和片段
* [borg](https://github.com/ok-borg/borg) - 以终端为基础的Bash命令搜索引擎
* [broot](https://github.com/Canop/broot) - 更好的路徑
* [browsh](https://github.com/browsh-org/browsh) - 現代文字瀏覽器
* [Buku](https://github.com/jarun/Buku) - 強大的指令行書签管理員
* [byobu](https://www.byobu.org) - 基于文字的視窗管理器和终端多路器
* [cod](https://github.com/dim-an/cod) 當你引用時學會的 shell 完成守护进程 `--help` 命令
* [CloudClip](https://github.com/skywind3000/CloudClip) - 您自己的剪貼板在云中, 复制和貼上不同系統之间的文字
* [ddgr](https://github.com/jarun/ddgr) - DuckDuck 從終端站走
* [desk](https://github.com/jamesob/desk) - 外殼的輕量级工作區管理員
* [direnv](https://github.com/direnv/direnv) - 外壳的環境切換器,與自動互動
* [dnote](https://github.com/dnote/dnote) - 有多裝置同步和網頁介面的簡單指令行筆記本
* [eureka](https://github.com/simeg/eureka/) - : bulb: CLI 工具以輸入和儲存您的想法而不離開终端
* [fasd](https://github.com/clvv/fasd) - 命令行生产力增強器,提供快速存取檔案和目錄
* [fd](https://github.com/sharkdp/fd) - 一個簡單、快速和易用的方法
* [foxy](https://github.com/s-p-k/foxy) - Firefox和衝浪瀏覽器的普通文字印記
* [fselect](https://github.com/jhspetersson/fselect) - 用類似 SQL 的查詢尋找檔案 。
* [funky](https://github.com/bbugyi200/funky) - 延伸 shell 函數的功能,使其更強大更灵活。
* [fz](https://github.com/changyuheng/fz) - Z的無缝模糊分頁完成
* [fzf](https://github.com/junegunn/fzf) - 命令線模糊的尋找者
* [gitmux](https://github.com/arl/gitmux) - 在 Tmux 狀態列顯示 Git 狀態
* [googler](https://github.com/jarun/googler) - Google搜索,Google网站搜索,Google News from the 终端
* [googlr](https://github.com/Astranno/googlr) - 命令行工具,讓你從终端搜索Google。
* [has](https://github.com/kdabir/has) - `has` 幫助您檢查各种命令行工具的存在及其在路徑上的版本
* [how2](https://github.com/santinic/how2) - `how2` 找到最簡單的方法 在unix shell做一些事情。 就像 `man`但您可以用自然語言查詢它。
* [navi](https://github.com/denisidoro/navi) - 命令行的交互式作弊表工具
* [hhighlighter](https://github.com/paoloantinori/hhighlighter) - 命令輸出中的單字顏色化
* [hr](https://github.com/LuRsT/hr) - `<hr />` 您的終端
* [hss](https://github.com/six-ddc/hss) - 交互式并行 ssh 客戶端, 以自動完成和同步執行為主
* [hstr](https://github.com/dvorka/hstr) - 巴什歷史建議盒
* [k](https://github.com/supercrabtree/k) - k 是 Zsh 文稿, 使目錄清單更可讀化, 新增 Git 狀態、 檔案重度顏色與腐爛日期
* [k alias](https://github.com/lingtalfi/k) - 得到 kool 化名( 和更多) 工作與簡單的單行線
* [lf](https://github.com/gokcehan/lf) - 以 Go 寫作的終端檔案管理員, 啟示於游標
* [lf.sh](https://github.com/suewonjp/lf.sh) - 以更少的打字方式快速搜尋檔案並做更多( 复制、 复制剪貼簿路徑等) 。
* [lowcharts](https://github.com/juan-leon/lowcharts) - 在终端畫出低分辨率圖
* [Lmod](https://lmod.readthedocs.io/en/latest/) - 基于 Lua 的環境模組, 在向後兼容( 參考模組) 時增强 TCl 模組
* [loop](https://github.com/Miserlou/Loop) - 寫作與控制複雜的環路
* [marker](https://github.com/pindexis/marker) - 書签您的 shell 命令
* [mackup](https://github.com/lra/mackup/) - 保持您的應用程式設定同步 (OS X/ Linux)
* [mcfly](https://github.com/cantino/mcfly) - 飛過你的貝殼歷史 斯考特!
* [modules](http://modules.sourceforge.net/) - 古典 TCl 管理 shell 環境的環境模組(比對 Lmod、 prinv 和 autolenv)
* [nnn](https://github.com/jarun/nnn) - 具有出色桌面集成的檔案瀏覽器和磁碟使用分析器
* [ok-sh](https://github.com/secretGeek/ok-bash) - 你做過很多不同的計劃嗎? 在每個專案中 你是否使用過專為專案的指令? 你需要... OK文件
* [parallel](https://www.gnu.org/software/parallel/) - 從標準輸入建立並執行 shell 命令行
* [pass](https://www.passwordstore.org/) - 用 GPG 加密和可選擇的 git 集成管理指令行的密碼 。
* [pathpicker](https://github.com/facebook/PathPicker) - 接受 grep, 搜尋, git 等輸入; 允許從輸入的結果中選擇檔案, 然後您可以開啟或以參數提供給命令 。
* [pdd](https://github.com/jarun/pdd) - 微小日期,有定時器的時間 diff 計算器
* [percol](https://github.com/mooz/percol) - 在 UNIX shell 的傳統管子概念中加入互動滤波的味道
* [q](https://github.com/cal2195/q) - 維姆就像你的Bash和Zsh Shell的宏登記器
* [qfc](https://github.com/pindexis/qfc) - Bash 和 Zsh 的檔案補全元件
* [resh](https://github.com/curusarn/resh) - Zsh和Bash的背景 shell歷史
* [rg](https://github.com/BurntSushi/ripgrep) - riggrep是一款面向線的搜尋工具,它把銀色搜尋器的可用性与GNU grep的原始速度结合起来
* [screen](https://www.gnu.org/software/screen/) - GNU 终端多路器
* [shell-history](https://github.com/pawamoy/shell-history) - 想像一下你的外殼用法
* [SHML](https://github.com/odb/shml) - 终端的樣式框架( Sell Markup Language )
* [slugify](https://github.com/benlinton/slugify) - 將檔案名稱和目錄轉換成網路友好格式的命令
* [sman](https://github.com/tokozedg/sman) - : bug: 命令行片段管理員
* [spark](https://github.com/holman/spark) -在你的包里
* [spark.fish](https://github.com/jorgebucaran/spark.fish) - ▂▃▅火線產生器
* [sheet](https://github.com/oscardelben/sheet) - 命令行的文字片段
* [spot](https://github.com/rauchg/spot) - 小文件搜索工具
- [snips](https://github.com/srijanshetty/snips) - 指令行工具 管理指令片段
* [sqlline](https://github.com/julianhyde/sqlline) - 通过 JDBC 發行 SQL 到關聯數據庫( 多線、 完成、 突顯、 方言支持) 的 shell
* [sshfs](https://github.com/osxfuse/sshfs) - 在 SSH 上架設遠端檔案系統的工具
* [sudocabulary](https://github.com/badarsh2/Sudocabulary) - 從您的终端學英語词汇
* [surfraw](https://gitlab.com/surfraw/Surfraw) - 瀏覽特定網站, 從您的终端搜尋網頁, 沒有瀏覽器 。
* [task-manager](https://github.com/lingtalfi/task-manager) - 用兩三個按鍵來執行你的劇本
* [td-cli](https://github.com/darrikonn/td-cli) - 一個待辦事項命令行管理員來組織和管理您跨過多項專案的待辦事項。
* [tere](https://github.com/mgunyho/tere) - 更快速的cd + 是
* [thefuck](https://github.com/nvbn/thefuck) - 使用易記指令來修正常见的 shell 錯誤
* [tldr](https://github.com/raylee/tldr-sh-client) - 一個全功能的bash用戶端,用于 rdr 、 簡化和 community man 頁面
* [tmux](https://tmux.github.io/) - 惊人的終端多路器
* [undollar](https://github.com/xtyrrell/undollar) - 不美元咬掉你剛貼進终端的命令尖端的美元簽章
* [usql](https://github.com/xo/usql) - SQL 數據庫的通用指令行介面。
* [v](https://github.com/rupa/v) - z的Vim。
* [wemux](https://github.com/zolrath/wemux) - 多用途推進器
* [xiki](https://github.com/trogdoro/xiki) - 讓貝殼控制台更加友好有力
* [xplr](https://github.com/sayanarijit/xplr) - 黑客化,最小,快速的TUI檔案探險者
* [xsv](https://github.com/BurntSushi/xsv) - 用 Rust 寫成的快速 CSV 命令行工具箱
* [xxh](https://github.com/xxh/xxh) - 帶上你最喜歡的貝殼 無論你通過SSH

### 目錄導覽

* [aliasme](https://github.com/Jintin/aliasme) - 別名快速變更目錄的助手
* [autojump](https://github.com/wting/autojump) - 學習的 CD 指令 - 很容易從命令行導引目錄
* [bashmarks](https://github.com/huyng/bashmarks) -  shell 的目錄書签
* [bd](https://github.com/vigneshwaranr/bd) - 快回到父目錄
* [commacd](https://github.com/shyiko/commacd) - 在巴什走得更快
* [enhancd](https://github.com/b4b4r07/enhancd) - :rocket: 下一代的 CD 命令,有互動過程
* [goto](https://github.com/iridakos/goto) - 用于導覽的 shell 工具, 以取代支援自動完成的目錄
* [jump](https://github.com/gsamokovarov/jump) - 跳下去能幫助你更快地瀏覽你的檔案系統 學習你的習慣
* [lazy-cd](https://github.com/pedramamini/lazy-cd) - 簡單的 shop 命令, 用于對檔案系統的書签導覽, 完成 shop- finishment 。
* [up](https://github.com/shannonmoeller/up) - 按名字或數數來整理目錄;
* [z](https://github.com/rupa/z) -Z是新的J,Yo
* [z.lua](https://github.com/skywind3000/z.lua) - 新的CD命令 幫助你學習習你的習慣
* [zoxide](https://github.com/ajeetdsouza/zoxide) 用 Rust 寫成的更快速的檔案系統
* [zpyi](https://github.com/sakshamsharma/zpyi) - Zsh中的 Python - 簡單的 python 文稿

## 自訂

*自訂提示、 顏色主題等*

* [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) - 最小化的 Aphrodite 主題( 即時) 性感的终端,
* [base16-builder](https://github.com/base16-builder/base16-builder) - 基地16型
* [bash-full-of-colors](https://github.com/slomkowski/bash-full-of-colors) - 有屏幕、tmux、git支持和更多
* [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) - Git 使用者的資訊充沛和花哨的 Bash 提示
* [bash-powerline](https://github.com/riobard/bash-powerline) - 純Bash文稿的電線式Bash提示
* [bashstrap](https://github.com/barryclark/bashstrap) - 一個快速發泡OSX終站的方法
* [bullet-train-oh-my-zsh-theme](https://github.com/caiogondim/bullet-train.zsh) - : bullettrain  side: 一個基于 Powerline Vim 插件的 oh-my- zsh shell 主題
* [emojify](https://github.com/mrowa44/emojify) Emoji在命令行:尖叫:
* [flatui-terminal-theme](https://dribbble.com/shots/1021755-Flat-UI-Terminal-Theme) - 末端的顏色更好
* [geometry](https://github.com/geometry-zsh/geometry) - 一個最小的 ZSH 佈景主題, 任何函數都可以被加入到左速率或右速率上 。
* [git-prompt](https://github.com/lvv/git-prompt) - 带有 Git、 SVN 和 HG 模組的 Bash 提示
* [gittify](https://github.com/momeni/gittify) - 彩色 Bash 提示 + 定制的 Git 化名
* [Gogh - Color Scheme](https://github.com/Mayccoll/Gogh) - Gnome 终端的顏色方案
* [liquidprompt](https://github.com/nojhan/liquidprompt) - 丰滿的 &Bash 精心設計的適應捷徑 &日
* [mysql-colorize](https://github.com/zpm-zsh/mysql-colorize) - Mysql 昏迷線客戶端的顏色化
* [oh-my-git](https://github.com/arialdomartini/oh-my-git) - 有觀點的刺激 拍打和zsh
* [oh-my-posh](https://ohmyposh.dev) - 啟動主題引擎,供任何 shell 和平台使用。
* [polyglot](https://github.com/agkozak/polyglot) - 一個有資訊的Git提示,在bash,zsh, ksh, mksh, pdksh, oksh, dust, yash, busybox sh, 和 osh 工作。
* [powerlevel10k](https://github.com/romkatv/powerlevel10k) - 超柔軟的ZSH主題
* [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt) - 有顏色、基特狀態和基特分枝的巴什提示
* [starship](https://starship.rs/) - 快速的,定制的,交叉的貝殼即時寫成生锈
* [synth-shell](https://github.com/andresgongora/synth-shell) - Greeter有定制的狀態報告 和高級的狂歡

## 開發者工具

*命令行發展、版本控制和部署。 *

* [1Password SSH Agent](https://developer.1password.com/docs/ssh/) - 驗證 Git 和 SSH 工作流程,使用 1Password 的生物學解鎖
* [ack](https://beyondgrep.com/) - 類似grep的搜尋工具 优化了源碼。
* [add-gitignore](https://github.com/TejasQ/add-gitignore) - 互動性CLI,
* [bcal](https://github.com/jarun/bcal) - 儲存轉換和計算的位元 CALCator
* [bitwise](https://github.com/mellowcandle/bitwise) - 以終點為主的互動比特操控器在詛咒中。
* [bocker](https://github.com/p8952/bocker) - 在100行的鞭打中實現了Docker
* [cloc](https://github.com/AlDanial/cloc) - 數行代碼
* [doclt](https://github.com/omgimanerd/doclt) - 數位海洋的指令行介面
* [dokku](https://github.com/dokku/dokku) - 杜克電動迷你赫庫 這是你見過的最小的 PaaS 實施
* [forgit](https://github.com/wfxr/forgit) - 工具 `git` 利用模糊的 fzf。
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) -很多吉特公司 中,切,切,增,增.
* [git-extras](https://github.com/tj/git-extras) - Git 公用设施 -- -- repo 摘要、 repl、 changelog 人口、作者承诺百分比及更多
* [git-open](https://github.com/paulirish/git-open) - 型態 `git open` 在您的瀏覽器中開啟 GitHub 頁面或網站
* [git-quick-stats](https://github.com/arzzen/git-quick-stats) Git快速數據是使用 Git 寄存器存取各种數據的簡單而有效的方法。
* [git-semver](https://github.com/markchalloner/git-semver) - 輕鬆語法版本與變更log 驗證的 Git 插件
* [git-sh](https://github.com/rtomayko/git-sh) - 适合Git工作的定制Bash環境
* [gita](https://github.com/nosarthur/gita) - 管理多重重置的指令行工具。
* [hub](https://github.com/github/hub) - 枢机能幫你贏
* [just](https://github.com/casey/just) - 儲存和執行專案指令的執行者 。
* [licins](https://github.com/dogoncouch/licins) - 在源碼中插入註解的軟體授權
* [mkdkr](https://github.com/rosineygp/mkdkr) - Makefile + Docker = CI 管道
* [mr](https://myrepos.branchable.com) - 多目錄管理工具
* [nve](https://github.com/ehmicky/nve) 執行特定節點的指令 。
* [overcommit](https://github.com/sds/overcommit) - 完全可配置且可延伸的 Git 钩管理器
* [pre-commit](https://pre-commit.com) - 管理和维持多种語言的先入制钩子的框架
* [rebound](https://github.com/shobrook/rebound) - 即時瀏覽 Stack 過量流結果在您的终端中, 當你得到編譯器錯誤時
* [repren](https://github.com/jlevy/repren) - 命令線搜索、取代和重命名瑞士軍刀
* [slap](https://github.com/slap-editor/slap) - 在Node.js上運行的 类似终端的文字編輯器
* [shipit](https://github.com/sapegin/shipit) - 最小化SSH部署
* [starring](https://github.com/ritz078/starring) 自動顯示您在 GitHub 上的 npm- packages 。
* [tag](https://github.com/aykamko/tag) - 立刻跳到你的Ag火柴。
* [trunk](https://www.npmjs.com/package/@trunkio/launcher) - 快速的元碼檢查器和物件
* [vmn](https://github.com/final-israel/vmn) - 基於 git 的自動版本與狀態恢復解析
* [wipe-modules](https://github.com/bntzio/wipe-modules) - 移除非作用中專案的節點模組的小代理

## 系統工具

*OS 相關工具,包括系統管理、系統調试以及檔案和流程管理。

* [atop](https://www.atoptool.nl) - ASCII 全屏性能監控器,能報告所有流程的活動
* [bat](https://github.com/sharkdp/bat) - A `cat` 有翅膀的克隆
* [bmon](https://github.com/tgraf/bmon) - 实时網路帶宽監控器,
* [btop](https://github.com/aristocratos/btop) - Linux/ OSX/ FreeBSD 資源顯示器
* [catcli](https://github.com/deadc0de6/catcli) - 您离線資料的命令行目錄工具
* [ccat](https://github.com/owenthereal/ccat) - 貓就是有色的貓 它的工作與貓類似,但以語法突出顯示內容.
* [exa](https://github.com/ogham/exa) - 現代版本 `ls`.
* [progress](https://github.com/Xfennec/progress) - 顯示進度的 Linux 工具 `cp`, `rm`, `dd`還有...
* [stronghold](https://github.com/alichtman/stronghold) - 很容易地設定 MacOS 端口的安全設定 。
* [glances](https://github.com/nicolargo/glances) - 用眼睛照著你的系統
* [goaccess](https://github.com/allinurl/goaccess) GoAccess 是一款实时網頁日志分析器與互動檢視器,
* [hblock](https://github.com/hectorm/hblock) - 以主機檔案为基础的阻塞器
* [histstat](https://github.com/vesche/histstat) - 网信的歷史
* [htop](https://github.com/hishamhm/htop) - 基于 ncurses 的互動處理檢視器, 目的是更好 `top`
* [lnav](https://lnav.org) - 小尺度的高级日志檔案檢視器
* [logdissect](https://github.com/dogoncouch/logdissect) - CLI 工具與 Python API 分析日志檔案和其他資料 。
* [ls++](https://github.com/trapd00r/ls--) - 彩色在類固醇上
* [lsd](https://github.com/Peltoche/lsd) - LSDeluxe, 重寫 GNU 是很多新增的功能, 如顏色、 圖示、 樹狀圖景以及更多格式化的選項 。
* [lsp](https://github.com/dborzov/lsp) - 改进了 `ls`, 使用純語言的檔案描述和智慧檔案群組
* [maza](https://github.com/tanrax/maza-ad-blocking) - 本地廣告封鎖者 就像Pi-hole,但本地化 以及使用你的操作系統。
* [mtr](https://github.com/traviscross/mtr) - 單一網路分析工具中的“ traceroute” 和“ ping” 程式的功能 。
* [ncdu](https://dev.yorhel.nl/ncdu) - 磁碟使用
* [nmtui](https://github.com/NetworkManager/NetworkManager) - 控制網路管理器的文字使用者介面
* [powertop](https://github.com/fenrus75/powertop) - 電池/電力使用量和裝置 STATs 監控指令行工具,有調整選項。
* [prettyping](https://github.com/denilsonsa/prettyping) - 輸出 `ping` 更漂亮、更彩色、更緊凑、更易讀
* [procdog](https://github.com/jlevy/procdog) - 輕量级指令線控制像伺服器一樣的長寿行程
* [quick-secure](https://github.com/marshyski/quick-secure) - 快速安全和硬化UNIX/Linux系統
* [rng](https://github.com/nickolasburr/rng) 复制檔案或 stdin 至 stdout 的行範圍 。
* [tiptop](https://github.com/nschloe/tiptop) - 圖形命令線系統監控器
* [wifi-wand](https://github.com/keithrbennett/wifiwand) - 管理 MacOS 上的 WiFi 的 Ruby 命令行應用程式( 由 `gem install wifi-wand`)
* [xiringuito](https://github.com/ivanilves/xiringuito) -基于SSH的"VPN for poors"

## 下載與服務

*自設的輕量级伺服器和以 shell 文稿寫成的網路工具。 *

* [aria2](https://github.com/aria2/aria2) - aria2是輕量级的多核素 &多源, 跨平台下載工具在命令行中操作 。 它支持 HTTP/ HTTPS、 FTP、 BitTorrent 和 Metalink
* [balls](https://github.com/jneen/balls) - 巴什球
* [bashttpd](https://github.com/avleen/bashttpd) - 用 Bash 寫成的網頁伺服器
* [bashhub-server](https://github.com/nicksherron/bashhub-server) - 私人云殼歷史 bashhub 的開源伺服器
* [bitpocket](https://github.com/sickill/bitpocket) - "DIY Dropbox" 或 "2 路目錄 (r) 同步, 并正确刪除"
* [Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader) - Dropbox 上傳器是 Bash 文稿,可用于上傳、下載、列出或刪除 Dropbox 的檔案
* [httpie](https://github.com/httpie/httpie) - HTTPie 是命令行 HTTP 用戶端, 方便使用者的 cURL 取代
* [HTTPLab](https://github.com/gchaincl/httplab) - 互動性網路伺服器, 讓您檢查 HTTP 要求並建立回應 。
* [Kapow!](https://github.com/BBVA/kapow) - 如果你能寫出它,你可以HTTP它。
* [ngincat](https://github.com/jaburns/ngincat) - 小Bash HTTP伺服器
* [resty](https://github.com/micha/resty) - 小命令行 REST 客戶端, 您可以在管道中使用
* [shell2http](https://github.com/msoap/shell2http) - HTTP 伺服器來執行 shell 指令 。 用于發展、原型或遙控
* [tshare](https://github.com/trikko/tshare) -從指令線分享檔案
* [vesper](https://github.com/chris-rock/vesper) - Vesper是巴什/Unix Shell的 HTTP 框架
* [xh](https://github.com/ducaale/xh) - 傳送 HTTP 要求的友好快速工具
* [yt-dlp](https://github.com/yt-dlp/yt-dlp) - 命令線程序,

## 多媒體與檔案格式

*處理影像與音效檔案的工具。 *

* [adb-export](https://github.com/sromku/adb-export) - 匯出 Android 內容提供者到 CSV 格式
* [Android-Kitchen](https://github.com/dsixda/Android-Kitchen) -Android ROM定制的文字廚房 使用 shell 文稿並與 Cygwin/ OS X/ Linux 合作
* [Beets](https://github.com/beetbox/beets) - 音樂文庫管理員和MusicBrainz標籤
* [cmus](https://github.com/cmus/cmus) -跨平台cli音效播放器
* [dasel](https://github.com/tomwright/dasel) - 使用命令行的選擇器來查詢和更新資料結構。 可比于 [q](https://github.com/stedolan/jq) / [是的](https://github.com/kislyuk/yq) 但支援 JSON, YAML, TOML 和 XML , 且不依賴 。
* [dzr](https://github.com/yne/dzr) -跨平台的Deezer.com音效播放器。
* [fx](https://github.com/antonmedv/fx) - 命令線 JSON 處理工具, 由 anononymus JavaScript 函式
* [gifgen](https://github.com/lukechilds/gifgen) - 簡單的高质量GIF編碼
* [image-scraper](https://github.com/sananth12/ImageScraper) - 一個很酷的指令行影像刮刮器,有很多功能。
* [imgp](https://github.com/jarun/imgp) - 爆破快速批次影像增殖器和旋轉器
* [jc](https://github.com/kellyjonbrazil/jc) - 轉換命令輸出, 檔案類型, 以及常用的字串到 JSON 或 YAML , 以方便在文稿中使用 。
* [jo](https://github.com/jpmens/jo) - 從命令行參數建立 JSON 物件的小型工具 。
* [jq](https://github.com/stedolan/jq) -塞德要Json的資料 您可以用它來切片、滤波、映射和轉換結構的資料
* [korkut](https://github.com/oguzhaninan/korkut) - 在命令行快速而簡單的影像處理。
* [library](https://github.com/chapmanjacobd/library) 建立SQLITE數據庫, 播放與追蹤 Plex 等媒體, 但只使用 CLI 的介面, 有許多排序選項 。
* [mpv](https://mpv.io/) - 讓您在 shell 和 GUI 中播放大部分的音效和影像格式( 使用 ASCII 字元) 。
* [nehm](https://github.com/bogem/nehm) - 控制台工具,它下載、設定 IDv3 標籤并加入您的 iTunes (如果你使用它) 您的 SoundCloud 喜歡方便的方式
* [PiCAST](https://github.com/lanceseidman/PiCAST) - PICAST把你的35美元Raspberry Pi轉到像裝置一樣的Chromecast
* [sejda](https://github.com/torakiki/sejda/) - 命令行操控 PDF 文件(分割、合并、旋轉、轉換到jpg、提取文本等)
* [visidata](https://github.com/saulpw/visidata) - 探索和安排數據的終端工作表多工具(csv/json/xml/xls/yaml/etc)
* [xidel](https://github.com/benibela/xidel/) - Cli 工具, 用 XPath 和 XQuery 过滤、映射和建立 HTML/ XML/ JSON 資料 。
* [xmlstarlet](http://xmlstar.sourceforge.net/) - 用于命令行 XML 格式化、滤波和操控的舊而有力的工具。
* [yq](https://github.com/mikefarah/yq) - Yq 是手提式命令行YAML 處理器

## 應用程式

*命令行應用程式或命令行存取已有服務。 *

* [ansiweather](https://github.com/fcambus/ansiweather) - 終點的天气,有ANSI顏色和Unicode符號
* [awless](https://github.com/wallix/awless) - 管理AWS的強大、有創意和小表面CLI。
* [bashblog](https://github.com/cfenollosa/bashblog) - 處理部落格發布的巴什文稿
* [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - 你的代碼的美麗影像 - 從你的終端。
* [choosealicense-cli](https://github.com/lord63/choosealicense-cli) - 選擇一個OSS的駕照 從你的終點的舒适度
* [cointop](https://github.com/miguelmota/cointop) - 基于UI的追蹤加密的快速且最交互式的终端應用程式
* [dstask](https://github.com/naggie/dstask) - 單次二進制终端 TODO 管理員, 以 git 为基础同步 + 每項工作下標注
* [editly](https://github.com/mifi/editly) - 命令線影像編輯器
* [facebook-cli](https://github.com/specious/facebook-cli) - Facebook 命令行工具
* [fanyi](https://github.com/afc163/fanyi) - 將英文翻譯為中文
* [gcalcli](https://github.com/insanum/gcalcli) - Google 行事曆命令行介面
* [geeknote](https://github.com/VitaliyRodnenko/geeknote) - 命令行 evernote 用戶端
* [haxor-news](https://github.com/donnemartin/haxor-news) - 瀏覽 Hacker News 如 半島
* [hn-cli](https://github.com/rafaelrinaldi/hn-cli) - 瀏覽 Hacker 新聞從您的終站的舒适度
* [iponmap](https://github.com/nogizhopaboroda/iponmap) - 使用 ip 地址在世界地圖上畫出點
* [isitup](https://github.com/lord63/isitup) - 看看網站是上還是下
* [jrnl](https://github.com/jrnl-org/jrnl) - 一個簡單的命令行日記程式,將您的日記儲存在純文本檔案中
* [kanban.bash](https://github.com/coderofsalvation/kanban.bash) - 命令線 ascii kanban 板, 用于最小化的生产率( 基于 csv) 黑客 。
* [ledger](https://github.com/ledger/ledger) - 命令行核算
* [licen](https://github.com/lord63/licen) - 產生你的駕照。 又是一隻虱子,但跟金佳2一起實施 和 docopt
* [md2png](https://github.com/weaming/md2png) - 轉換壓縮成 PNG 影像
* [moviemon](https://github.com/iCHAIT/moviemon) - 你的所有電影都在命令線內
* [nomino](https://github.com/yaa110/nomino) - 用 regex、 排序和地圖檔案選項批次重命名工具 。
* [pcalc](https://github.com/alt-romes/programmer-calculator) - 計算器,供程序員使用多數的表示、大小和整体接近比特。
* [pockyt](https://github.com/achembarpu/pockyt) - 讀、管理、自動操作 [口袋](https://getpocket.com) 收藏。
* [pushblast](https://github.com/alebcay/pushblast) - 在 shell 程式退出時取得 PushBullet 通知
* [pushbullet-bash](https://github.com/Red5d/pushbullet-bash) - PushBullet API 的巴什介面
* [ranger](https://github.com/ranger/ranger) - 控制台檔案管理器,有 VI 金鑰捆綁 。
* [Reddit Terminal Viewer](https://github.com/michael-lazar/rtv) - 從终端瀏覽 Reddit
* [SAWS](https://github.com/donnemartin/saws) - 超充電AWS CLI
* [taskbook](https://github.com/klaussinani/taskbook) - 工作、板子 &命令行栖息地的附注
* [taskwarrior](https://taskwarrior.org/) - 命令行 TODO 清單管理員
* [terjira](https://github.com/keepcosmos/terjira) - Jira的指令行功率工具
* [ticker](https://github.com/achannarasappa/ticker) - 末端存量計算器,有实时更新和位置追蹤
* [vl](https://github.com/ellisonleao/vl) - 文字文件的 URL 連結檢查器
* [wego](https://github.com/schachmat/wego) - 终端的天氣應用程式
* [whales](https://github.com/Gueils/whales) - 自動嵌入您的應用程式的工具
* [whereami](https://github.com/rafaelrinaldi/whereami) - 從CLI得到你的地理位置信息
* [wttr.in](https://github.com/chubin/wttr.in) - 部分 Sunny:檢查天氣的正确方法(curl wttr.in)

## 遊戲

*所有的工作和沒有玩耍都是你過日子的

* [bash2048](https://github.com/mydzor/bash2048) - 2048遊戲的巴什實施
* [minesweeper](https://github.com/feherke/Bash-script/tree/master/minesweeper) - 清除地雷的巴什
* [nudoku](https://github.com/jubalh/nudoku) - 以 C 寫作的以 ncurses 为基础的 sudoku 遊戲
* [piu-piu](https://github.com/vaniacer/piu-piu-SH) - 水平卷轴遊戲,多玩家模式
* [sedtris](https://github.com/uuner/sedtris) - 雪地中的俄羅斯
* [sed-scripts](https://github.com/aureliojargas/sed-scripts) - 阿卡諾德和索科班寫的
* [SHTAP](https://notimetoplay.org/engines/shtap/) - Bash 4 可重新使用的文字冒險引擎
* [tty-solitaire](https://github.com/mpereira/tty-solitaire) - 在你的終端打牌!

## Shell 套件管理

*管理多重 shell 設定的工具 。 zsh特定工具,参见Zsh段。 *

* [bash-it](https://github.com/Bash-it/bash-it) - 社区框架
* [basher](https://github.com/basherpm/basher) - shell 文稿的套件管理員
* [bashing](https://github.com/xsc/bashing) - 把巴什打成碎片
* [bpkg](https://www.bpkg.sh/) - JavaScript有npm, Ruby有宝石, Python有pip, 現在 shell有bpkg
* [dotdrop](https://github.com/deadc0de6/dotdrop) - 保存你的點檔案一次,部署在任何地方。
* [dotfiler](https://github.com/svetlyak40wt/dotfiler) ─ Shell anostic git 基于 dotfiles 套件管理員, 用 Python 寫成 。
* [fresh](https://github.com/freshshell/fresh) - 保持你的點文件新鮮
* [homeshick](https://github.com/andsens/homeshick) - 用 Bash 寫的 Git dot 文件同步器
* [shallow-backup](https://github.com/alichtman/shallow-backup) - 容易建立安裝的套件、點文件及更多輕量級文件
* [shundle](https://github.com/javier-lopez/shundle) - shell 文稿的插件管理員
* [vcsh](https://github.com/RichiH/vcsh) - 基于 Git 的配置管理器
* [yadm](https://yadm.io/) - 基于 Git 的點檔案管理員, 支持加密、 替代和拖曳

## Shell 指令碼開發

*寫作、改善或整理 Bash 或其他 shell 文稿的工具*

* [ansi](https://github.com/fidian/ansi) - ANSI 逃離代碼在純 bash 中 - 變更文字顏色, 定位游標, 更多
* [assert.sh](https://github.com/lehmannro/assert.sh) - 巴什單位測試框架
* [bashew](https://github.com/pforret/bashew) - bash 脚本創作者 - 從小的獨立腳本到複雜的專案與 CI/ CD 與測試
* [bashful](https://github.com/jmcantrell/bashful) - 文庫集,以简化寫作巴什文稿
* [Bashlets](https://github.com/reale/bashlets) - 巴什的模块化延伸工具箱
* [bashly](https://bashly.dannyb.co/) - 巴什指令行框架和CLI產生器
* [bashmanager](https://github.com/lingtalfi/bashmanager) - 建立命令行工具的小型 bash 框架
* [bashwithnails](https://github.com/mindaugasbarysas/bashwithnails) - Bash 框架, &容器
* [bash-language-server](https://github.com/bash-lsp/bash-language-server) - [LSP 語言](https://microsoft.github.io/language-server-protocol/)- 基於 Bash 語言伺服器
* [bash-modules](https://github.com/vlisivka/bash-modules) - 与 [非官方嚴格模式](http://redsymbol.net/articles/unofficial-bash-strict-mode/) 啟動 。
* [bats](https://github.com/bats-core/bats-core) - 巴什自動測試系統
* [composure](https://github.com/erichs/composure) - 編譯、文件、版本和整理您的 shell 函數
* [crash](https://github.com/molovo/crash) - ZSH的正确錯誤處理、例外和嘗試/捕捉
* [critic.sh](https://github.com/Checksum/critic.sh) - Bash 的致命的簡單測試框架
* [dispatch](https://github.com/Mosai/workshop/blob/master/doc/dispatch.md) 命令行參數解析器 :
* [esh](https://github.com/jirutka/esh) - 一個基于 shell 的簡單的旋轉引擎, 由 POSIX  shell 和 awk 的 ~ 290 行實施 。
* [Fishtape](https://github.com/jorgebucaran/fishtape) - TAP 制作人和魚的試帶
* [getoptions](https://github.com/ko1nksm/getoptions) - 用于 shell 文稿的優雅選項解析器( sh, bash and all POSIX shells)
* [getopts.fish](https://github.com/jorgebucaran/getopts.fish) - 魚的CLI分析器
* [is.sh](https://github.com/qzb/is.sh) - 內建測試指令的替代方案 會讓你的"如果"說得漂亮
* [lumberjack](https://github.com/molovo/lumberjack) - shell 文稿的登入介面
* [mo](https://github.com/tests-always-included/mo) - 胡子樣本在純粹的bash
* [optparse](https://github.com/nk412/optparse) - BASH 包裝器,用于 foopts, 簡單的命令行參數。
* [rerun](https://github.com/rerun/rerun) - 模块化 shell 自动化框架,以整理您的保存者文稿
* [revolver](https://github.com/molovo/revolver) - shell 文稿的可重用進度旋轉器
* [phases](https://github.com/sorokine/phases) - 最小的入侵性 bash 預處理器, 選擇您的文稿的區段以執行
* [powscript](https://github.com/coderofsalvation/powscript) - 拍拍手寫的拍拍手
* [semver_bash](https://github.com/cloudflare/semver_bash) - 巴什語語言版本
* [sh-semver](https://github.com/qzb/sh-semver) 找到符合指定規則的版本
* [shellcheck](https://github.com/koalaman/shellcheck) - shell 文稿的靜态分析工具
* [shellfire](https://github.com/shellfire-dev/shellfire) - 命名空間、 可堆肥 shell( bash、 sh 和 dust) 函數庫的寄存器
* [shellspec](https://github.com/shellspec/shellspec) - BDD 單位測試框架,用于破折、撞、ksh、zsh和所有 POSIX 彈殼
* [shfmt](https://github.com/mvdan/sh) - 外殼剖析器, 預覽器, 以及有 shfmt 支援的翻譯器
* [shpec](https://github.com/rylnd/shpec) - 彈殼測試框架
* [shutit](https://ianmiell.github.io/shutit/) - 基于bash和pexpect的自动化框架
* [sub](https://github.com/basecamp/sub) - 安排節目的好方法
* [ts](https://github.com/thinkerbot/ts) - 外殼測試文稿
* [urchin](https://github.com/tlevine/urchin) - 平庸的 shell 測試框架,只使用 shell 指令
* [shunit2](https://github.com/kward/shunit2) - Bash文稿的單位測試框架,具有JUnit/PyUnit的味道。
* [rebash](https://github.com/jandob/rebash) - 文稿室/框架。 功能: 进口,例外, doc -tests...
* [zunit](https://github.com/zunit-zsh/zunit) - ZSH 的強大單位測試框架

# 指南

* [Bash Official Reference Manual](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html)
* [Bash Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/)
* [Greg Wooledge's (aka "greycat") wiki](https://mywiki.wooledge.org).
  具体 [巴什指南](https://mywiki.wooledge.org/BashGuide), [巴什FAQ](https://mywiki.wooledge.org/BashFAQ) 和 [巴什陷阱](https://mywiki.wooledge.org/BashPitfalls)
* [Google's Shell Style Guide](https://google.github.io/styleguide/shell.xml)
* [The Linux Documentation Project: Bash Programming - Intro/How-to](https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)
* [The Linux Documentation Project: Advanced Bash Scripting Guide](https://tldp.org/LDP/abs/html/)
* [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
* [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
* [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)
* [Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial/basics)
* [A guide to learn bash](https://github.com/Idnan/bash-guide)
* [Shell Field Guide](https://raimonster.com/scripting-field-guide/)

# 其他精選清單

其他令人驚訝的名單可以在 [太棒了](https://github.com/emijrp/awesome-awesome) 和 [真棒,真棒](https://github.com/bayandin/awesome-awesomeness).

### 另請參閱

* [awesome-cli-apps](https://github.com/agarrharr/awesome-cli-apps)
* [awesome-fish][awesome-fish]
* [awesome-zsh][awesome-zsh]
* [awesome-bash][awesome-bash]
* [terminals-are-sexy](https://github.com/k4m4/terminals-are-sexy)

[awesome-badge]: https://raw.githubusercontent.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg
[awesome-fish]: https://github.com/jorgebucaran/awsm.fish
[awesome-link]: https://github.com/sindresorhus/awesome
[awesome-zsh]: https://github.com/unixorn/awesome-zsh-plugins
[awesome-bash]: https://github.com/awesome-lists/awesome-bash
