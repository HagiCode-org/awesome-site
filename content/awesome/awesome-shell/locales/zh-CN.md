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

# Shell 资源精选 [![Awesome][awesome-badge]][awesome-link]

一系列令人惊叹的指令性框架、工具包、指南和图表。 被棒极了的发作所启发 这部令人惊叹的藏品也可以在 [Unix-Shell.ZEEF.com (原始内容存档于2019-09-22).](https://unix-shell.zeef.com/caleb.xu).
- [贝壳](#shells)
- [指挥线生产力](#command-line-productivity)
  - [目录导航](#directory-navigation)
- [自定义](#customization)
- [开发者](#for-developers)
- [系统公用事业](#system-utilities)
- [下载和服务](#downloading-and-serving)
- [多媒体和文件格式](#multimedia-and-file-formats)
- [应用程序](#applications)
- [游戏](#games)
- [壳包管理](#shell-package-management)
- [壳牌脚本开发](#shell-script-development)
- [指南](#guides)
- [**Awesome Zsh**][awesome-zsh]&nbsp; [![Awesome][awesome-badge]][awesome-zsh]
- [**Awesome Fish**][awesome-fish] [![Awesome][awesome-badge]][awesome-fish]
- [**Awesome Bash**][awesome-bash] [![Awesome][awesome-badge]][awesome-bash]
- [其他优秀名单](#other-awesome-lists)

## Shell 类型

*选择你的底壳。 *

* [bash](https://www.gnu.org/software/bash/) - GNU 工程的外壳( Bourne Again SHell)
* [elvish](https://elv.sh/) - 匿名函数和数据结构等友好、表达式外壳特征
* [es](https://wryun.github.io/es-shell/) - 根据9号计划,可扩展的炮弹 [弧形](https://github.com/rakitzis/rc) 外壳
* [fish](https://fishshell.com) - 智能和方便用户的命令行壳
* [ion](https://github.com/redox-os/ion) - 一个现代的系统外壳,它具有一个简单而强大的语法。 它完全用Rust书写。
* [ksh93](https://github.com/att/ast) - 柯恩壳
* [mksh](https://github.com/MirBSD/mksh) -MirBSD 科恩壳牌
* [murex](https://github.com/lmorg/murex) - 更聪明的外壳和脚本环境,具有先进的可用性、安全和生产力特性(例如更聪明的DevOps工具)
* [ngs](https://github.com/ngs-lang/ngs) - 正在开发专门为Ops. REPL而创建的全功能脚本语言。
* [nushell](https://github.com/nushell/nushell) - 用Rust写的现代贝壳
* [oksh](https://github.com/ibara/oksh) - 可移植的 OpenBSD ksh
* [osh](https://www.oilshell.org) - Bash兼容,与新/现代Unix shell语言称为Oil
* [pdksh](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/bin/ksh/) - 公有领域 Korn shell
* [powershell](https://docs.microsoft.com/en-us/powershell/scripting/overview) 一个跨平台任务自动化和配置管理框架,由命令行 shell 和脚本语言组成
* [shell++](https://github.com/alexst07/shell-plus-plus) - 友好和现代的功能和面向对象的 shell 脚本语言
* [shenv](https://github.com/shenv/shenv) - 简单的 shell 版本管理
* [tcsh](https://www.tcsh.org/) - C shell, 文件名完成和命令行编辑
* [xonsh](https://xon.sh) - Python-ish, BASHwards 外观外壳语言和命令即时
* [yash](https://github.com/magicant/yash) - 符合POSIX的命令行外壳,内置支持,以便根据命令历史完成和预测
* [zsh](https://www.zsh.org) - 有脚本语言的强大贝壳

## 命令行效率

*搜索、书签、多功能和其他工具,使终端经验更有成效。

* [AdvancedNewFile](https://github.com/tanrax/terminal-AdvancedNewFile) - 以递归方式快速创建文件和目录。 受到Vim插件的启发.
* [ag](https://github.com/ggreer/the_silver_searcher) - 超级快速字符串搜索,通过目录等级
* [aliases](https://github.com/sebglazebrook/aliases) - 以背景、动态、有组织的别名进行敲击
* [arttime](https://github.com/reportaman/arttime) - 精美的文字艺术满足时钟、计时器、pomodoro++时间管理器的功能
* [autoenv](https://github.com/hyperupcall/autoenv) - 基于目录的环境。
* [await](https://github.com/slavaGanzin/await) - 单二进制,并行运行命令列表,等待命令终止
* [bartib](https://github.com/nikolassv/bartib) - 命令行的简单时间跟踪器 它将所有跟踪活动的日志保存为纯文本文件,并允许您创建灵活的报告.
* [bashhub](https://github.com/rcaloras/bashhub-client) -?),云:云中巴什史. 索引和可搜索。
* [boilr](https://github.com/tmrts/boilr) - 用锅炉板模板创建项目的快速CLI工具。
* [boom](https://github.com/holman/boom) - 在命令行中存储链接和片段
* [borg](https://github.com/ok-borg/borg) - 一个基于终端的搜索引擎,用于 bash 命令
* [broot](https://github.com/Canop/broot) - 导航目录的更好方式
* [browsh](https://github.com/browsh-org/browsh) - 现代文本浏览器
* [Buku](https://github.com/jarun/Buku) - 强大的命令行书签管理器
* [byobu](https://www.byobu.org) - 基于文本的窗口管理器和终端多路xer
* [cod](https://github.com/dim-an/cod) ——当您引用时学习的贝壳的完成守护进程 `--help` 命令
* [CloudClip](https://github.com/skywind3000/CloudClip) - 云中你自己的剪贴板,复制和粘贴不同系统之间的文字
* [ddgr](https://github.com/jarun/ddgr) - Duck Duck 从终点站走
* [desk](https://github.com/jamesob/desk) - 贝壳的轻量级工作空间管理器
* [direnv](https://github.com/direnv/direnv) - 外壳的环境切换器,与自定义比较
* [dnote](https://github.com/dnote/dnote) - 具有多设备同步和网络界面的简单命令行笔记本
* [eureka](https://github.com/simeg/eureka/) - bulb: CLI 工具,用于输入和存储您的想法而不离开终端
* [fasd](https://github.com/clvv/fasd) - 命令线生产力增强器,提供快速查阅文件和目录的途径
* [fd](https://github.com/sharkdp/fd) - 一个简单、快速和方便用户的替代物。
* [foxy](https://github.com/s-p-k/foxy) - Firefox和冲浪浏览器的普通文本书签。
* [fselect](https://github.com/jhspetersson/fselect) - 用类似SQL的查询查找文件。
* [funky](https://github.com/bbugyi200/funky) - 扩展 shell 函数的功能,使其更强大和更灵活。
* [fz](https://github.com/changyuheng/fz) - Z的无缝模糊标签完成
* [fzf](https://github.com/junegunn/fzf) - 一个命令线模糊的发现者
* [gitmux](https://github.com/arl/gitmux) - 在 Tmux 状态栏显示 Git 状态
* [googler](https://github.com/jarun/googler) - 谷歌搜索、谷歌网站搜索、终端新闻
* [googlr](https://github.com/Astranno/googlr) - 命令行工具,让你从终端搜索Google。
* [has](https://github.com/kdabir/has) - `has` 帮助您检查路径上各种命令行工具及其版本的存在
* [how2](https://github.com/santinic/how2) - `how2` 找到最简单的方法在unix shell中做一些事情. 这就像 `man`,但可以用自然语言查询。
* [navi](https://github.com/denisidoro/navi) - 命令行的交互式欺骗表工具
* [hhighlighter](https://github.com/paoloantinori/hhighlighter) - 在命令输出中将单词颜色化
* [hr](https://github.com/LuRsT/hr) - `<hr />` 您的终端
* [hss](https://github.com/six-ddc/hss) - 一个交互式并行ssh客户端,其特点是自动完成和同步执行
* [hstr](https://github.com/dvorka/hstr) - 巴什历史建议箱
* [k](https://github.com/supercrabtree/k) - k 是 Zsh 脚本, 使目录列表更可读, 添加 Git 状态、 文件重量颜色和腐烂日期
* [k alias](https://github.com/lingtalfi/k) - 获得 kool 化名(和更多) 与简单的单线工作
* [lf](https://github.com/gokcehan/lf) - 终端文件管理器用 Go 写成, 灵感来自测距器
* [lf.sh](https://github.com/suewonjp/lf.sh) - 以更少的打字方式快速搜索文件并做更多的工作(复制、复制路径到剪贴板等)
* [lowcharts](https://github.com/juan-leon/lowcharts) - 在终端绘制低分辨率图表
* [Lmod](https://lmod.readthedocs.io/en/latest/) - 基于Lua的环境模块,在向后兼容的同时增强基于TCl的模块(与模块相比较)
* [loop](https://github.com/Miserlou/Loop) - 书写和控制复杂的循环,作为单线
* [marker](https://github.com/pindexis/marker) - 书签你的贝壳命令
* [mackup](https://github.com/lra/mackup/) - 保持应用程序设置同步(OS X/Linux)
* [mcfly](https://github.com/cantino/mcfly) - 通过你的壳史。 伟大的苏格兰人!
* [modules](http://modules.sourceforge.net/) - 基于古典TCl的环境模块,管理外壳环境(比较Lmod、prenv和autoenv)
* [nnn](https://github.com/jarun/nnn) - 具有出色桌面集成的文件浏览器和磁盘使用分析器
* [ok-sh](https://github.com/secretGeek/ok-bash) - 你从事很多不同的项目? 在每一个项目中,你是否都使用过 具体针对该项目的命令? 你需要一个. ok文件。
* [parallel](https://www.gnu.org/software/parallel/) - 从标准输入平行建立并执行 shell 命令行
* [pass](https://www.passwordstore.org/) - 使用 GPG 加密和可选的 git 集成管理命令行的密码。
* [pathpicker](https://github.com/facebook/PathPicker) - 接受输入, 如grep, 搜索, git 等; 允许从输入结果中选择文件, 然后可以打开或作为参数提供给命令 。
* [pdd](https://github.com/jarun/pdd) - 微小的日期,带有计时器的时间diff计算器
* [percol](https://github.com/mooz/percol) - 在UNIX shell的传统管道概念中添加交互过滤的味道
* [q](https://github.com/cal2195/q) - 维姆像宏登记器 对于你的Bash和Zsh Shell
* [qfc](https://github.com/pindexis/qfc) - Bash 和 Zsh 的文件补全部件
* [resh](https://github.com/curusarn/resh) - Zsh和Bash的背景壳历史
* [rg](https://github.com/BurntSushi/ripgrep) - riggrep是一个面向行的搜索工具,将银色搜索器的可用性与GNU grep的原始速度结合起来
* [screen](https://www.gnu.org/software/screen/) - GNU 终端多路驱动器
* [shell-history](https://github.com/pawamoy/shell-history) - 想象你的壳用量与高图
* [SHML](https://github.com/odb/shml) - 终端的样式框架(壳标记语言)
* [slugify](https://github.com/benlinton/slugify) - 将文件名和目录转换为网络友好格式的命令
* [sman](https://github.com/tokozedg/sman) - :bug:命令行片段管理器
* [spark](https://github.com/holman/spark) - 在你的壳里
* [spark.fish](https://github.com/jorgebucaran/spark.fish) - 火花线发电机
* [sheet](https://github.com/oscardelben/sheet) - 命令行的文本片段
* [spot](https://github.com/rauchg/spot) - 小文件搜索工具
- [snips](https://github.com/srijanshetty/snips) - 管理代码片段的命令行工具。
* [sqlline](https://github.com/julianhyde/sqlline) - 通过JDBC向关系数据库发放SQL的壳牌(多线、完成、突出、方言支持)
* [sshfs](https://github.com/osxfuse/sshfs) - 在SSH上安装远程文件系统的工具
* [sudocabulary](https://github.com/badarsh2/Sudocabulary) - 从终端学习英语词汇
* [surfraw](https://gitlab.com/surfraw/Surfraw) - 浏览特定网站,并在没有浏览器的情况下从终端搜索网页。
* [task-manager](https://github.com/lingtalfi/task-manager) - 执行你所有的剧本 只需要两三个键盘。
* [td-cli](https://github.com/darrikonn/td-cli) - 一个待办事宜命令行管理器,负责组织和管理多个项目的待办事宜。
* [tere](https://github.com/mgunyho/tere) - 一个更快的Cd+的替代品
* [thefuck](https://github.com/nvbn/thefuck) - 使用易于记住的命令来修正常见的 shell 错误
* [tldr](https://github.com/raylee/tldr-sh-client) - 一个功能齐全的bash客户端,用于简化和由社区驱动的网页
* [tmux](https://tmux.github.io/) - 惊人的终端多路器
* [undollar](https://github.com/xtyrrell/undollar) - 不美元会咬掉你刚贴进终端的命令的尖端上的美元
* [usql](https://github.com/xo/usql) - SQL数据库的通用命令行接口。
* [v](https://github.com/rupa/v) - 为vim。
* [wemux](https://github.com/zolrath/wemux) - 多用户Tmux制造易
* [xiki](https://github.com/trogdoro/xiki) - 让罐头控制台更加友好有力
* [xplr](https://github.com/sayanarijit/xplr) - 一个黑客,最小,快速的TUI文件探索者
* [xsv](https://github.com/BurntSushi/xsv) - 快速CSV命令行工具包,用Rust写成
* [xxh](https://github.com/xxh/xxh) - 你最喜欢的贝壳,无论你通过SSH。

### 目录导航

* [aliasme](https://github.com/Jintin/aliasme) - 别名帮助快速更改目录
* [autojump](https://github.com/wting/autojump) - 学习的CD命令 - 从命令行轻松导航目录
* [bashmarks](https://github.com/huyng/bashmarks) - 贝壳目录书签
* [bd](https://github.com/vigneshwaranr/bd) - 快回到父目录
* [commacd](https://github.com/shyiko/commacd) - 在巴什走得更快一点
* [enhancd](https://github.com/b4b4r07/enhancd) - :rocket:带有交互式过滤器的下一代CD命令
* [goto](https://github.com/iridakos/goto) - 用于导航的外形目录辅助自动补全的 shell 工具
* [jump](https://github.com/gsamokovarov/jump) - 跳跃通过学习你的习惯来帮助你更快地导航文件系统.
* [lazy-cd](https://github.com/pedramamini/lazy-cd) - 为文件系统的书签导航提供简单的shop命令, 并用shap- complete完成。
* [up](https://github.com/shannonmoeller/up) - 按名称或数量排列目录;用于bash、zsh和鱼。
* [z](https://github.com/rupa/z) - Z是新的J,哟
* [z.lua](https://github.com/skywind3000/z.lua) - 一个新的CD命令,通过学习你的习惯,帮助你更快地导航
* [zoxide](https://github.com/ajeetdsouza/zoxide) - 一个更快的导航系统的方法,用Rust写
* [zpyi](https://github.com/sakshamsharma/zpyi) - Zsh中的 Python - 简便的 python 脚本在 shell

## 自定义

*自定义提示、 颜色主题等*

* [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) – 最小化的Aphrodite主题(即时),用于在bash,fish和zsh中工作的性感终端.
* [base16-builder](https://github.com/base16-builder/base16-builder) - 基地16 - 建筑
* [bash-full-of-colors](https://github.com/slomkowski/bash-full-of-colors) - 有屏幕、tmux、git支持和更多强大的提示
* [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) - 向Git用户提供信息和精致的Bash提示
* [bash-powerline](https://github.com/riobard/bash-powerline) - 纯Bash脚本的电线式Bash提示
* [bashstrap](https://github.com/barryclark/bashstrap) - 一种快速制造OSX终端的方法
* [bullet-train-oh-my-zsh-theme](https://github.com/caiogondim/bullet-train.zsh) - : bullettrain side:基于Powerline Vim插件的 oh-my-zsh shell 主题
* [emojify](https://github.com/mrowa44/emojify) 命令线上的Emoji:尖叫:
* [flatui-terminal-theme](https://dribbble.com/shots/1021755-Flat-UI-Terminal-Theme) - 终端颜色更好
* [geometry](https://github.com/geometry-zsh/geometry) - 一个最小的ZSH主题,其中任何函数都可以添加到左边的提示或(ASync)右边的提示上.
* [git-prompt](https://github.com/lvv/git-prompt) - 带Git、SVN和HG模块的Bash提示
* [gittify](https://github.com/momeni/gittify) - 彩色巴什提示+定制的吉特别名
* [Gogh - Color Scheme](https://github.com/Mayccoll/Gogh) - Gnome 终端的颜色方案
* [liquidprompt](https://github.com/nojhan/liquidprompt) - 一个全天候的 &为巴什精心设计的适应性提示 &日语
* [mysql-colorize](https://github.com/zpm-zsh/mysql-colorize) - Mysql 昏迷线客户端的色彩化
* [oh-my-git](https://github.com/arialdomartini/oh-my-git) - 一个有意见的快速击打和zsh
* [oh-my-posh](https://ohmyposh.dev) - 任何外壳和平台的快速主题引擎。
* [polyglot](https://github.com/agkozak/polyglot) - 一个信息化的 Git 提示,在bash,zsh, ksh, mksh, pdksh, oksh, dust, yash, busybox sh, 和 osh 工作
* [powerlevel10k](https://github.com/romkatv/powerlevel10k) -超级柔软的电力线ZSH主题
* [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt) - 带有颜色、吉特状态和吉特分支的巴什提示
* [starship](https://starship.rs/) - 快速,可定制, 交叉贝壳快速写成锈蚀
* [synth-shell](https://github.com/andresgongora/synth-shell) - Greeter有一份定制的状态报告 和高档的狂欢

## 开发者工具

*命令线开发、版本控制和部署。 *

* [1Password SSH Agent](https://developer.1password.com/docs/ssh/) - 认证Git和SSH工作流程,使用1Password进行生物识别解锁
* [ack](https://beyondgrep.com/) - 一个类似grep的搜索工具,优化了源代码.
* [add-gitignore](https://github.com/TejasQ/add-gitignore) - 互动的CLI,根据您的需要为您的项目生成一个.gitignore.
* [bcal](https://github.com/jarun/bcal) - 存储转换和计算字节计算器
* [bitwise](https://github.com/mellowcandle/bitwise) - 在诅咒中基于终端的交互式比特操纵器。
* [bocker](https://github.com/p8952/bocker) - 在100行鞭打中执行Docker
* [cloc](https://github.com/AlDanial/cloc) - 代码数行
* [doclt](https://github.com/omgimanerd/doclt) - 数字海洋的命令行接口
* [dokku](https://github.com/dokku/dokku) - 多克电动迷你车 你见过的最小的 PaaS 执行。
* [forgit](https://github.com/wfxr/forgit) - 用于 `git` 利用模糊的发现者fzf。
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - 很多吉特额外的公用事业。 楚恩,切支,增殖,以及更多.
* [git-extras](https://github.com/tj/git-extras) - Git公用事业 -- -- 汇总、重播、更改日志、作者承诺的百分比和更多
* [git-open](https://github.com/paulirish/git-open) - 类型 `git open` 在浏览器中打开 GitHub 页面或网站
* [git-quick-stats](https://github.com/arzzen/git-quick-stats) - Git快速统计是获取Git存储库中各种统计的简单而有效的方法。
* [git-semver](https://github.com/markchalloner/git-semver) - 放松语义版本和更改日志验证的 Git 插件
* [git-sh](https://github.com/rtomayko/git-sh) - 适合Git工作的定制巴什环境
* [gita](https://github.com/nosarthur/gita) - 管理多个 git repos 的命令行工具。
* [hub](https://github.com/github/hub) - 枢机能帮你赢得比赛
* [just](https://github.com/casey/just) - 保存和运行项目特定命令的任务执行者。
* [licins](https://github.com/dogoncouch/licins) - 在源代码中插入评论软件许可证。
* [mkdkr](https://github.com/rosineygp/mkdkr) - Makefile + Docker = CI 管道
* [mr](https://myrepos.branchable.com) - 多个仓库管理工具
* [nve](https://github.com/ehmicky/nve) - 运行特定节点/js版本的任何命令。
* [overcommit](https://github.com/sds/overcommit) - 完全可配置和可扩展的Git钩管理器
* [pre-commit](https://pre-commit.com) - 管理和维持多种语文承诺前钩的框架
* [rebound](https://github.com/shobrook/rebound) - 获取编译器错误后立即浏览 Stack Overflow结果到终端
* [repren](https://github.com/jlevy/repren) - 命令线搜索和替换和档案重命名瑞士军刀
* [slap](https://github.com/slap-editor/slap) - 在节点上运行的类似终端的文本编辑器
* [shipit](https://github.com/sapegin/shipit) - 最低限度SSH部署
* [starring](https://github.com/ritz078/starring) 自动显示您在 GitHub 上使用的 npm- packages 。
* [tag](https://github.com/aykamko/tag) - 立刻跳到你的枪上
* [trunk](https://www.npmjs.com/package/@trunkio/launcher) - 快速的元代码检查器和前题
* [vmn](https://github.com/final-israel/vmn) - 基于 git 的自动版本和状态恢复解决方案对语言或架构的不可知性
* [wipe-modules](https://github.com/bntzio/wipe-modules) - 一个删除非活动项目的节点模块文件夹的小代理

## 系统工具

*与OS有关的工具,包括系统管理、系统调试以及文件和流程管理。

* [atop](https://www.atoptool.nl) - ASCII全屏性能监测器,能够报告所有进程的活动
* [bat](https://github.com/sharkdp/bat) - 一个 `cat` 有翅膀的克隆
* [bmon](https://github.com/tgraf/bmon) - 实时网络带宽监测器和以方便人的视觉输出定级器
* [btop](https://github.com/aristocratos/btop) - Linux/OSX/FreeBSD 资源监视器
* [catcli](https://github.com/deadc0de6/catcli) - 您离线数据的命令行目录工具
* [ccat](https://github.com/owenthereal/ccat) - 猫是彩色的猫。 它的工作类似于猫,但以语法突出显示内容.
* [exa](https://github.com/ogham/exa) - 一个现代版本 `ls`.
* [progress](https://github.com/Xfennec/progress) - 显示进度的 Linux 工具 `cp`, `rm`, `dd`还有...
* [stronghold](https://github.com/alichtman/stronghold) - 从终端轻松配置MacOS安全设置。
* [glances](https://github.com/nicolargo/glances) - 用眼睛照你的系统
* [goaccess](https://github.com/allinurl/goaccess) - GoAccess是一个实时网页日志分析器和交互式查看器,在QQnix系统的终端中运行.
* [hblock](https://github.com/hectorm/hblock) - 以主机文件为基础的阻塞器
* [histstat](https://github.com/vesche/histstat) - 净统计的历史
* [htop](https://github.com/hishamhm/htop) - 一个基于ncurses的交互式进程查看器,目的是更好 `top`
* [lnav](https://lnav.org) - 小型日志文件高级查看器
* [logdissect](https://github.com/dogoncouch/logdissect) - 用于分析日志文件和其他数据的CLI工具及Python API。
* [ls++](https://github.com/trapd00r/ls--) - 彩色在类固醇上
* [lsd](https://github.com/Peltoche/lsd) - LSDeluxe,重写 GNU Is 有很多新增的功能,如颜色,图标,树视图和更多的格式化选项.
* [lsp](https://github.com/dborzov/lsp) - 改进了 `ls`,在简单语言和智能文件分组中进行文件描述
* [maza](https://github.com/tanrax/maza-ad-blocking) - 本地广告封锁者 就像Pi-hole,但局部 并使用你的操作系统。
* [mtr](https://github.com/traviscross/mtr) - 单一网络诊断工具中的“跟踪路径”和“平”程序的功能。
* [ncdu](https://dev.yorhel.nl/ncdu) - 使用NCurse磁盘
* [nmtui](https://github.com/NetworkManager/NetworkManager) - 用于控制网络管理器的文本用户界面
* [powertop](https://github.com/fenrus75/powertop) - 电池/电源使用和装置数据表监测命令行工具,并附有调制选项。
* [prettyping](https://github.com/denilsonsa/prettyping) - 产出 `ping` 更漂亮,更多彩,更紧凑,更容易阅读.
* [procdog](https://github.com/jlevy/procdog) - 对服务器等长寿过程的轻量级指令线控制
* [quick-secure](https://github.com/marshyski/quick-secure) - 迅速加强UNIX/Linux系统
* [rng](https://github.com/nickolasburr/rng) - 复制从文件或Stdin到stdout的行范围。
* [tiptop](https://github.com/nschloe/tiptop) - 图形命令行系统监视器。
* [wifi-wand](https://github.com/keithrbennett/wifiwand) - 用于管理MacOS上的WiFi的Ruby命令行应用程序(安装于 `gem install wifi-wand`)
* [xiringuito](https://github.com/ivanilves/xiringuito) - 基于SSH的"穷人VPN"

## 下载与服务

*自动托管、轻量级服务器和以 shell 脚本书写的网络工具。 *

* [aria2](https://github.com/aria2/aria2) - Aria2是一种轻量级的多核素 &多源,跨平台下载工具在命令行运行. 它支持 HTTP/ HTTPS, FTP, BitTorrent 和 Metalink
* [balls](https://github.com/jneen/balls) - Bash on Balls (英语) (英语).
* [bashttpd](https://github.com/avleen/bashttpd) - 以巴什语写的网络服务器
* [bashhub-server](https://github.com/nicksherron/bashhub-server) - 私人云壳历史. bashhub 的开源服务器
* [bitpocket](https://github.com/sickill/bitpocket) - “DiY Dropbox”或“2 way 目录(r)同步并适当删除”
* [Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader) - Dropbox 上传器是一个 Bash 脚本,可用于上传、下载、列表或删除 Dropbox 的文件
* [httpie](https://github.com/httpie/httpie) - HTTPie是一个命令行 HTTP 客户端,一个方便用户的 cURL 替换
* [HTTPLab](https://github.com/gchaincl/httplab) - 交互式网络服务器,让你检查 HTTP 请求并伪造答复。
* [Kapow!](https://github.com/BBVA/kapow) - 如果你可以脚本,你可以HTTP。
* [ngincat](https://github.com/jaburns/ngincat) - 小Bash HTTP服务器,使用网猫
* [resty](https://github.com/micha/resty) - 小命令行 REST 客户端,用于管道
* [shell2http](https://github.com/msoap/shell2http) - 执行 shell 命令的 HTTP 服务器。 设计用于开发、原型或遥控
* [tshare](https://github.com/trikko/tshare) - 从命令线分享文件。
* [vesper](https://github.com/chris-rock/vesper) - QQ Vesper 是巴什/Unix Shell的 HTTP 框架
* [xh](https://github.com/ducaale/xh) - 发送HTTP请求的友好快捷工具
* [yt-dlp](https://github.com/yt-dlp/yt-dlp) - 从YouTube.com和其他视频网站下载视频的命令线程序

## 多媒体与文件格式

*处理视频和音频文件的工具。 *

* [adb-export](https://github.com/sromku/adb-export) - 将Android内容提供者导出为 CSV 格式
* [Android-Kitchen](https://github.com/dsixda/Android-Kitchen) - 一个基于文字的厨房,为Android ROM定制。 使用 shell 脚本并与 Cygwin/ OS X/ Linux 合作
* [Beets](https://github.com/beetbox/beets) - 音乐图书馆管理员和MusicBrainz标签员
* [cmus](https://github.com/cmus/cmus) - 跨平台cli音频播放器。
* [dasel](https://github.com/tomwright/dasel) - 使用命令行中的选择器查询和更新数据结构。 与 [页:1](https://github.com/stedolan/jq) / [对](https://github.com/kislyuk/yq) 但支持JSON,YAML,TOML和XML的运行时间依赖性为零.
* [dzr](https://github.com/yne/dzr) -跨平台Deezer.com音频播放器.
* [fx](https://github.com/antonmedv/fx) - 命令线 JSON 处理工具,由 ononymus JavaScript 函数
* [gifgen](https://github.com/lukechilds/gifgen) - 简单的高质量GIF编码
* [image-scraper](https://github.com/sananth12/ImageScraper) - 一个具有许多特性的酷酷命令线图像刮刮机。
* [imgp](https://github.com/jarun/imgp) - 爆破快速批量图像增殖器和转子
* [jc](https://github.com/kellyjonbrazil/jc) - 将命令输出、文件类型和常见字符串转换为JSON或YAML,以便于脚本使用。
* [jo](https://github.com/jpmens/jo) - 从命令行参数创建 JSON 对象的小型工具。
* [jq](https://github.com/stedolan/jq) - 赛德为Json的数据。 您可以用它来切片和过滤、映射和转换结构化数据
* [korkut](https://github.com/oguzhaninan/korkut) - 在命令行进行快速简单的图像处理。
* [library](https://github.com/chapmanjacobd/library) - 为音乐、视频、图像或在线媒体的文件夹建立SQLITE数据库。 播放和跟踪媒体,如Plex,但是一个只有CLI的界面,有许多排序选项.
* [mpv](https://mpv.io/) - 让您在外壳和图形界面中播放大多数音频和视频格式(使用 ASCII 字符)。
* [nehm](https://github.com/bogem/nehm) - 控制台工具,用于下载、设置IDv3标签并添加到您的iTunes中(如果使用它的话) 您的 SoundCloud 喜欢方便的方式
* [PiCAST](https://github.com/lanceseidman/PiCAST) - PiCAST把你的35美元Raspberry Pi 变成像设备一样的Chromecast
* [sejda](https://github.com/torakiki/sejda/) - 命令行操作 PDF 文档(分割、合并、旋转、转换为jpg、提取文本等)
* [visidata](https://github.com/saulpw/visidata) - 用于探索和安排数据的终端电子表格多工具(csv/json/xml/xls/yaml/etc)
* [xidel](https://github.com/benibela/xidel/) 用于过滤、映射和创建 HTML/XML/JSON 数据的 Cli 工具,使用 (Turing-complete) XPath 和 XQUERY 。
* [xmlstarlet](http://xmlstar.sourceforge.net/) - 用于命令行XML格式化、过滤和操纵的古老而强大的工具。
* [yq](https://github.com/mikefarah/yq) - yq是一个便携式命令行YAML处理器

## 应用程序

*基于命令的应用程序或命令行访问现有服务。

* [ansiweather](https://github.com/fcambus/ansiweather) - 终端的天气,有ANSI颜色和Unicode符号
* [awless](https://github.com/wallix/awless) - 管理AWS的强大、创新和小型表面CLI。
* [bashblog](https://github.com/cfenollosa/bashblog) - 一个处理博客发布工作的巴什脚本
* [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - 你的代码的美丽图像 - 从你的终端里面。
* [choosealicense-cli](https://github.com/lord63/choosealicense-cli) - 从终点站的舒适度选择一个OSS许可
* [cointop](https://github.com/miguelmota/cointop) - 用于跟踪加密的基于UI的最快和最交互式终端应用程序
* [dstask](https://github.com/naggie/dstask) - 单一二进制终端 TODO 管理器,每个任务以 git 为基础的同步 + 标记下注
* [editly](https://github.com/mifi/editly) - 指挥线视频编辑器
* [facebook-cli](https://github.com/specious/facebook-cli) - Facebook命令行工具
* [fanyi](https://github.com/afc163/fanyi) - 在终端将英文翻译成中文
* [gcalcli](https://github.com/insanum/gcalcli) - 谷歌日历命令行界面
* [geeknote](https://github.com/VitaliyRodnenko/geeknote) - 命令行永注客户端
* [haxor-news](https://github.com/donnemartin/haxor-news) - 浏览 Hacker 新闻像 harxor
* [hn-cli](https://github.com/rafaelrinaldi/hn-cli) - 从终端的舒适度浏览黑客新闻
* [iponmap](https://github.com/nogizhopaboroda/iponmap) - 使用 ip 地址在世界地图上绘制点
* [isitup](https://github.com/lord63/isitup) - 检查一个网站是上还是下
* [jrnl](https://github.com/jrnl-org/jrnl) - 一个简单的命令行日记应用程序,将您的日记存储在纯文本文件中
* [kanban.bash](https://github.com/coderofsalvation/kanban.bash) - 命令线 ascii kanban 板,用于最小化的生产力打击黑客(基于csv)
* [ledger](https://github.com/ledger/ledger) - 指挥科目核算
* [licen](https://github.com/lord63/licen) - 产生你的执照。 又是一只虱子,但和金佳2一起执行
* [md2png](https://github.com/weaming/md2png) - 将缩写转换为 PNG 图像
* [moviemon](https://github.com/iCHAIT/moviemon) - 命令线内关于你电影的一切
* [nomino](https://github.com/yaa110/nomino) - 使用 regex、排序和映射文件选项批次重命名工具。
* [pcalc](https://github.com/alt-romes/programmer-calculator) - 计算器,供程序员使用多数字表示、大小和整体接近比特的工作。
* [pockyt](https://github.com/achembarpu/pockyt) - 读、管理、自动化 [纸袋](https://getpocket.com) 藏书。
* [pushblast](https://github.com/alebcay/pushblast) - 当 shell 程序退出时获得 PushBullet 通知
* [pushbullet-bash](https://github.com/Red5d/pushbullet-bash) - PushBullet API的巴什接口
* [ranger](https://github.com/ranger/ranger) - 一个控制台文件管理器,有VI密钥绑定。
* [Reddit Terminal Viewer](https://github.com/michael-lazar/rtv) - 从终端浏览 Reddit
* [SAWS](https://github.com/donnemartin/saws) - 超充电AWS CLI
* [taskbook](https://github.com/klaussinani/taskbook) - 任务、董事会 &命令行栖息地的说明
* [taskwarrior](https://taskwarrior.org/) - 一个命令行 TODO 列表管理器
* [terjira](https://github.com/keepcosmos/terjira) - 吉拉指挥线动力工具
* [ticker](https://github.com/achannarasappa/ticker) - 载有实时更新和位置跟踪的终端盘点器
* [vl](https://github.com/ellisonleao/vl) - 文本文档上的 URL 链接检查器
* [wego](https://github.com/schachmat/wego) - 终端的天气应用
* [whales](https://github.com/Gueils/whales) - 一个自动嵌入应用程序的工具
* [whereami](https://github.com/rafaelrinaldi/whereami) - 从CLI那里得到你的地理定位信息
* [wttr.in](https://github.com/chubin/wttr.in) -=YTET -伊甸园字幕组=- 翻译:

## 游戏

*所有的工作和没有玩耍 都是一种花你一天的时间。

* [bash2048](https://github.com/mydzor/bash2048) - 实施2048年游戏
* [minesweeper](https://github.com/feherke/Bash-script/tree/master/minesweeper) - 开展扫雷工作
* [nudoku](https://github.com/jubalh/nudoku) - 以 C 写的基于 ncurss 的 sudoku 游戏
* [piu-piu](https://github.com/vaniacer/piu-piu-SH) - 横向卷轴游戏,多人模式
* [sedtris](https://github.com/uuner/sedtris) - 银河中的俄罗斯方块
* [sed-scripts](https://github.com/aureliojargas/sed-scripts) - Arkanoid和Sokoban用雪橇写成
* [SHTAP](https://notimetoplay.org/engines/shtap/) - Bash 4 可重复使用的文本冒险引擎
* [tty-solitaire](https://github.com/mpereira/tty-solitaire) - 在你的终端里玩独奏!

## Shell 包管理

*管理多个 shell 配置的工具 。 zsh特定工具见Zsh部分。 *

* [bash-it](https://github.com/Bash-it/bash-it) - 社区框架
* [basher](https://github.com/basherpm/basher) - shell脚本的软件包管理器
* [bashing](https://github.com/xsc/bashing) - 把巴什打成碎片
* [bpkg](https://www.bpkg.sh/) - JavaScript有npm, Ruby有宝石, Python有pip, 现在壳牌有bpkg
* [dotdrop](https://github.com/deadc0de6/dotdrop) - 保存你的点文件一次,部署在任何地方
* [dotfiler](https://github.com/svetlyak40wt/dotfiler) – Shell anostic git 基于dotfiles 软件包管理器,用 Python 写成.
* [fresh](https://github.com/freshshell/fresh) - 保持你的点文件新鲜
* [homeshick](https://github.com/andsens/homeshick) - 用巴什语写的 Git dotfile 同步器
* [shallow-backup](https://github.com/alichtman/shallow-backup) - 方便地建立已安装的软件包、点文件和其他轻量级文件
* [shundle](https://github.com/javier-lopez/shundle) - shell 脚本插件管理器
* [vcsh](https://github.com/RichiH/vcsh) - 基于 Git 的配置管理器
* [yadm](https://yadm.io/) - 基于 Git 的点文件管理器, 支持加密、 替代和拖曳

## Shell 脚本开发

*用于编写、改进或组织巴什语或其他 shell 脚本的工具*

* [ansi](https://github.com/fidian/ansi) - ANSI 逃脱代码在纯bash中 - 更改文本颜色,定位光标, 更多
* [assert.sh](https://github.com/lehmannro/assert.sh) - 巴什单元测试框架
* [bashew](https://github.com/pforret/bashew) - 击打脚本创建者 -- -- 从小型的独立脚本到复杂的项目,包括CI/CD和测试
* [bashful](https://github.com/jmcantrell/bashful) - 收集图书馆,简化Bash脚本
* [Bashlets](https://github.com/reale/bashlets) - 巴什模块式可扩展工具箱
* [bashly](https://bashly.dannyb.co/) - 巴什指挥线框架和CLI生成器
* [bashmanager](https://github.com/lingtalfi/bashmanager) - 创建命令行工具的小型打击框架
* [bashwithnails](https://github.com/mindaugasbarysas/bashwithnails) - 以测试、依赖管理为目的的巴什框架 &包装
* [bash-language-server](https://github.com/bash-lsp/bash-language-server) - [LSP 软件](https://microsoft.github.io/language-server-protocol/)- 基于 Bash 语言服务器
* [bash-modules](https://github.com/vlisivka/bash-modules) - 用于开发的功能 [非官方严格模式](http://redsymbol.net/articles/unofficial-bash-strict-mode/) 已启用。
* [bats](https://github.com/bats-core/bats-core) - 巴什自动化测试系统
* [composure](https://github.com/erichs/composure) - 编写、文档、版本和组织您的 shell 函数
* [crash](https://github.com/molovo/crash) - ZSH的适当错误处理、例外和尝试/捕获
* [critic.sh](https://github.com/Checksum/critic.sh) - Bash的致命简易测试框架,并报告覆盖范围
* [dispatch](https://github.com/Mosai/workshop/blob/master/doc/dispatch.md) - 一个命令行参数解析器, 包含50行可移植 shell 脚本。
* [esh](https://github.com/jirutka/esh) - 一个基于壳体的简单调温发动机,在POSIX壳体和awk的~290行中实施.
* [Fishtape](https://github.com/jorgebucaran/fishtape) - 鱼的TAP生产商和试验装置
* [getoptions](https://github.com/ko1nksm/getoptions) - 用于贝壳脚本的优雅选项解析器(sh, bash and all POSIX shells)
* [getopts.fish](https://github.com/jorgebucaran/getopts.fish) - 鱼的CLI分析器
* [is.sh](https://github.com/qzb/is.sh) - 内置测试命令的替代品, 它会让你的"如果"声明变得漂亮
* [lumberjack](https://github.com/molovo/lumberjack) - shell 脚本的日志界面
* [mo](https://github.com/tests-always-included/mo) - 纯点的胡子模板
* [optparse](https://github.com/nk412/optparse) - 一个BASH包装器,用于获取, 简单的命令行参数。
* [rerun](https://github.com/rerun/rerun) - 模块化 shell 自动化框架,用于组织您的守护脚本
* [revolver](https://github.com/molovo/revolver) 用于 shell 脚本的可重复使用的进度旋转器
* [phases](https://github.com/sorokine/phases) - 最小侵入性点击预处理器,选择您的脚本部分运行
* [powscript](https://github.com/coderofsalvation/powscript) - 用纸条写成的纸条
* [semver_bash](https://github.com/cloudflare/semver_bash) - 巴什语语义版本
* [sh-semver](https://github.com/qzb/sh-semver) - semver 用于 bash 的工具 - 找到符合指定规则的版本
* [shellcheck](https://github.com/koalaman/shellcheck) - 贝壳脚本的静态分析工具
* [shellfire](https://github.com/shellfire-dev/shellfire) - 命名空间、可堆肥的外壳(bash、sh和dust)函数库库库
* [shellspec](https://github.com/shellspec/shellspec) - 用于破损、击打、ksh、zsh和所有POSIX弹壳的全尺寸BDD单元测试框架
* [shfmt](https://github.com/mvdan/sh) - 外壳解析器、材料和翻译,包括shfmt
* [shpec](https://github.com/rylnd/shpec) - 壳体测试框架
* [shutit](https://ianmiell.github.io/shutit/) - 基于打击和扑救的自动化框架
* [sub](https://github.com/basecamp/sub) - 组织节目的美味方式
* [ts](https://github.com/thinkerbot/ts) - 贝壳测试脚本
* [urchin](https://github.com/tlevine/urchin) - 一个仅使用贝壳命令的平面贝壳测试框架
* [shunit2](https://github.com/kward/shunit2) - 具有JUnit/PyUnit风味的Bash脚本单元测试框架。
* [rebash](https://github.com/jandob/rebash) - 文稿库/框架。 特征:进口,例外,医生检验.
* [zunit](https://github.com/zunit-zsh/zunit) - ZSH强大的单元测试框架

# 指南

* [Bash Official Reference Manual](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html)
* [Bash Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/)
* [Greg Wooledge's (aka "greycat") wiki](https://mywiki.wooledge.org).
  具体 [巴什指南](https://mywiki.wooledge.org/BashGuide), [Bash 财务问题](https://mywiki.wooledge.org/BashFAQ) 和 [巴什瀑布](https://mywiki.wooledge.org/BashPitfalls)
* [Google's Shell Style Guide](https://google.github.io/styleguide/shell.xml)
* [The Linux Documentation Project: Bash Programming - Intro/How-to](https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)
* [The Linux Documentation Project: Advanced Bash Scripting Guide](https://tldp.org/LDP/abs/html/)
* [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
* [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
* [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)
* [Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial/basics)
* [A guide to learn bash](https://github.com/Idnan/bash-guide)
* [Shell Field Guide](https://raimonster.com/scripting-field-guide/)

# 其他精选列表

其它令人惊叹的出色名单可见于 [好厉害](https://github.com/emijrp/awesome-awesome) 和 [真棒,帅呆了](https://github.com/bayandin/awesome-awesomeness).

### 另请参阅

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
