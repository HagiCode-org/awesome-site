# Awesome Bash [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) <!-- omit in toc -->

> 楽しい Bash スクリプトとリソースの厳選されたリスト。

このリストに加えて、リスト [awesome-shell](https://github.com/alebcay/awesome-shell) も読む必要があります。これは、優れたコマンドライン フレームワーク、ツールキット、ガイド、ギズモの厳選されたリストです。 [awesome-zsh](https://github.com/unixorn/awesome-zsh-plugins) または [awesome-fish](https://github.com/bucaran/awesome-fish) も確認してください。さらにリストを探している場合は、[sindresorhus/awesome](https://github.com/sindresorhus/awesome) を確認してください。

## コンテンツ <!-- omit in toc -->

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

## 書籍とリソース

- [The Bash-Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/) - GNU Bash に関するあらゆる種類の人が読めるドキュメント。
- [Bash beginner's mistakes](https://web.archive.org/web/20230330234404/https://wiki.bash-hackers.org/scripting/newbie_traps) - Bash の初心者の間違いのリスト (Bash-Hackers Wiki による)。
- [Bash Guide](http://mywiki.wooledge.org/BashGuide) - 初心者向けの bash ガイド (Lhunath 著)。
- [Bash FAQ](http://mywiki.wooledge.org/BashFAQ) - ほとんどの質問に答えます (Lhunath による)。
- [Bash Pitfalls](http://mywiki.wooledge.org/BashPitfalls) - 初心者が陥りやすい落とし穴とその回避方法をリストします。
- [Bash manual](http://www.gnu.org/software/bash/manual/) - ボーン・アゲイン Shell マニュアル。
- [Bash FAQ](http://tiswww.case.edu/php/chet/bash/FAQ) ([Chet Ramey](http://tiswww.case.edu/php/chet/) による)
- [Advanced Bash-Scripting Guide](http://tldp.org/LDP/abs/html/) - shell スクリプトの技術を徹底的に探求します。
- [Bash Guide for Beginners](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/) - Bash 初心者向けガイド (Machtelt Garrels 著)。
- [Bash Programming - Intro/How-to](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc)
- [bash-handbook](https://github.com/denysdovhan/bash-handbook) - Bash を深く掘り下げずに学習したい人のためのハンドブック。
- [Google's Shell Style Guide](https://google.github.io/styleguide/shellguide.html) - コード スタイルに関する適切なアドバイス。
- [Sobell's Book](http://www.sobell.com/CR3/index.html) - コマンド、エディター、および shell プログラミングに関する実践的なガイド。
- [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
- [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
- [Defensive BASH Programming](https://web.archive.org/web/20180917174959/http://www.kfirlavi.com/blog/2012/11/14/defensive-bash-programming) - プログラムを破損から守り、コードを整理整頓してクリーンに保つ方法。
- [Pure Bash Bible](https://github.com/dylanaraps/pure-bash-bible) - 外部プロセスに代わる純粋な bash のコレクション。
- [explainshell](https://explainshell.com) - shell (Bash) コマンド (フラグとオプションを含む) を詳しく説明する Web サイト。
- [Safe ways to do things in bash](https://github.com/anordal/shellharden/blob/master/how_to_do_things_safely_in_bash.md) - Bash で安全に作業を行う方法。

## コマンドラインの生産性

*端末のエクスペリエンスをより生産的にする検索、ブックマーク、多重化、その他のツール。*

- [aliases](https://github.com/sebglazebrook/aliases) - bash shell のコンテキストに応じて動的に整理された別名。
- [bashhub-server](https://github.com/nicksherron/bashhub-server) - プライベートでホストされるオープンソースの bashhub サーバー。
- [bashhub](https://github.com/rcaloras/bashhub-client) - クラウド内の Bash 履歴。インデックス付きで検索可能な :cloud:。
- [bashmarks](https://github.com/huyng/bashmarks) - shell のディレクトリ ブックマーク。
- [bashmount](https://github.com/jamielinux/bashmount) - リムーバブル メディアを簡単に管理します。
- [ble.sh](https://github.com/akinomyoga/ble.sh) - 構文の強調表示、より優れたコマンド補完、改善された複数行編集を備えた、ユーザーフレンドリーで機能が豊富な readline の置き換え。
- [commacd](https://github.com/shyiko/commacd) - Bash でより速く移動する方法。
- [forkrun](https://github.com/jkool702/forkrun) - コードを並列実行するための純粋な bash ツール。構文と速度は `xargs -P` と似ていますが、より多くの機能とネイティブ Bash 関数のサポートが付いています。
- [has](https://github.com/kdabir/has) - `has` は、パス上のさまざまなコマンド ライン ツールの存在とそのバージョンを確認するのに役立ちます。
- [hstr](https://github.com/dvorka/hstr) - Bash 履歴提案ボックス。
- [sshrc](https://github.com/cdown/sshrc) - SSH を実行するときに、.bashrc、.vimrc などを持参します。
- [utility-bash-scripts](https://github.com/aviaryan/utility-bash-scripts) - 単一のコマンドで自動化可能なタスクを実行するための便利な bash スクリプト。
- [zoxide](https://github.com/ajeetdsouza/zoxide) - フ​​ァイルシステムをナビゲートするためのより良い方法。 Rust で書かれており、クロス shell で、他の自動ジャンパーよりもはるかに高速です。

## カスタマイズ

*カスタム プロンプト、カラー テーマなど。*

- [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) - セクシーな端末用のミニマルなテーマ (プロンプト)。
- [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) - Git ユーザー向けの有益で派手な Bash プロンプト。
- [bash-powerline](https://github.com/riobard/bash-powerline) - 純粋な Bash スクリプト内の Powerline スタイルの Bash プロンプト。
- [bashstrap](https://github.com/barryclark/bashstrap) - macOS 端末を簡単に整える方法。
- [git-prompt](https://github.com/lvv/git-prompt) - Git、SVN、および HG モジュールを使用した Bash プロンプト。
- [gittify](https://github.com/momeni/gittify) - カラフルな Bash プロンプト + カスタマイズされた Git エイリアス。
- [liquidprompt](https://github.com/nojhan/liquidprompt) - Bash および Zsh 用のフル機能で慎重に設計されたアダプティブ プロンプト。
- [LS_COLORS](https://github.com/trapd00r/LS_COLORS) - LS_COLORS 定義のコレクション。
- [oh-my-git](https://github.com/arialdomartini/oh-my-git) - bash および zsh 用の独自の git プロンプト。
- [oh-my-bash](https://github.com/ohmybash/oh-my-bash) - bash 構成を管理するための、コミュニティ主導の素晴らしいフレームワークです。
- [progress-bar.sh](https://github.com/edouard-lopez/progress-bar.sh) - `bash` のシンプルでセクシーなプログレスバー。期間を指定すると、残りの作業は自動的に行われます。
- [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt) - 色、Git ステータス、および Git 分岐を含む Bash プロンプト。
- [bash-sensible](https://github.com/mrzool/bash-sensible) - より健全な Bash のデフォルトを試みます。

## 開発者向け

*コマンドライン開発、バージョン管理、および展開。*

- [bocker](https://github.com/p8952/bocker) - Docker は bash の 100 行に実装されています。
- [git-sh](https://github.com/rtomayko/git-sh) - Git の作業に適した、カスタマイズされた Bash 環境。
- [mkdkr](https://github.com/rosineygp/mkdkr) - 作成 + Docker + Shell = CI パイプライン。

## ダウンロードと提供

*shell スクリプトで記述された自己ホスト型の軽量サーバーおよびネットワーキング ツール。*

- [Bash-web-server](https://github.com/dzove855/Bash-web-server) - socat、netcat などを含まない、純粋な bash Web サーバー。
- [Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader) - Dropbox アップローダーは、Dropbox からファイルをアップロード、ダウンロード、一覧表示、または削除するために使用できる Bash スクリプトです。
- ボールの [balls](https://github.com/jneen/balls) - Bash。
- [bashbro](https://github.com/victrixsoft/bashbro/) - Bash ベースの Web ファイル ブラウザ - Web ブラウザ経由でリモートでドキュメントの参照、ストリーミング、表示、ファイルの保存を行うことができます。
- [bash-stack](https://github.com/cgsdev0/bash-stack) - bash の最新の Web フレームワーク。
- [bashttpd](https://github.com/avleen/bashttpd) - Bash で記述された Web サーバー。
- [httpd.sh](https://github.com/cemeyer/httpd.sh) - ctypes.sh を使用する、bash の簡単な Web サーバー。
- [ngincat](https://github.com/jaburns/ngincat) - netcat を使用する小型 Bash HTTP サーバー。
- [sherver](https://github.com/remileduc/sherver) - 純粋な Bash 軽量 Web サーバー。
- [xiringuito](https://github.com/ivanilves/xiringuito) - 貧困層向けの SSH ベースの VPN。

## アプリケーション

*コマンド ライン ベースのアプリケーション、または既存のサービスへのコマンド ライン アクセス。*

- [bashblog](https://github.com/cfenollosa/bashblog) - ブログ投稿を処理する Bash スクリプト。
- [pushbullet-bash](https://github.com/Red5d/pushbullet-bash) - Bash は PushBullet API へのインターフェイスです。
- [todo.sh](https://github.com/todotxt/todo.txt-cli) - todo.txt ファイルを管理するためのシンプルで拡張可能な shell スクリプト。
- [cheapci](https://github.com/ianmiell/cheapci) - bash に実装された継続的統合フレームワーク。

## ゲーム

*仕事ばかりで遊びもしないのは、一日の過ごし方としては最悪です。*

- [bash2048](https://github.com/mydzor/bash2048) - Bash 2048 ゲームの実装。
- [minesweeper](https://github.com/feherke/Bash-script/tree/master/minesweeper) - Bash マインスイーパの実装。
- Bash の 50 行未満の [wordle](https://gist.github.com/huytd/6a1a6a7b34a0d0abcac00b47e3d01513) - Wordle。

## Webサイト

- [Bash One-Liners](http://www.bashoneliners.com/) - 実用的な、または純粋な awesome bash ワンライナーのコレクション ([repos](https://github.com/janosgyerik/bashoneliners) by @[janosgyerik](https://github.com/janosgyerik))。
- [commandlinefu](http://www.commandlinefu.com/) - 最もエレガントで便利な UNIX コマンドのリポジトリ。

## Shell パッケージ管理

*複数の shell 構成を管理するためのツール。*

- [bash-it](https://github.com/Bash-it/bash-it) - コミュニティ Bash フレームワーク。
- [basher](https://github.com/basherpm/basher) - shell スクリプトのパッケージ マネージャー。
- [bpkg](https://github.com/bpkg/bpkg) - 軽量の bash パッケージ マネージャー。
- [homeshick](https://github.com/andsens/homeshick) - Git Bash で記述されたドットファイル シンクロナイザー。

## Shell スクリプト開発

*Bash またはその他の shell スクリプトを作成、改善、または整理するためのツール*

- [alinex bashlib](https://gitlab.com/alinex/bash-lib) - サーバー管理、データ処理、リモート スクリプト用のモジュラー bash ライブラリ。
- [ansi](https://github.com/fidian/ansi) - 純粋な bash の ANSI エスケープ コード - テキストの色の変更、カーソルの位置など。
- [argbash](https://github.com/matejak/argbash) - Bash 引数解析コード ジェネレーター。
- [assert.sh](https://github.com/lehmannro/assert.sh) - Bash 単体テスト フレームワーク。
- [async-bash](https://github.com/zombieleet/async-bash) - bash での非同期関数の実装。
- [bats](https://github.com/bats-core/bats-core) - Bash 自動テスト システム。
- [bash3boilerplate](https://github.com/kvz/bash3boilerplate) - より優れた Bash スクリプトを作成するためのテンプレート。
- [bashful](https://github.com/jmcantrell/bashful) - Bash スクリプトの作成を簡素化するライブラリのコレクション。
- [bashify](https://github.com/zombieleet/bashify) - bash のいくつかのヘルパー関数 (特に文字列操作関数)。
- [bashing](https://github.com/xsc/bashing) - Bash を粉砕する - コマンド ライン ツールを作成するための Bash フレームワーク。
- [bashly](https://github.com/DannyBen/bashly) - Bash コマンド ライン フレームワークおよび CLI ジェネレーター。
- [bashmanager](https://github.com/lingtalfi/bashmanager) - コマンド ライン ツールを作成するためのミニ bash フレームワーク。
- [Bashmatic](https://github.com/kigster/bashmatic) - BASH ベースのツールとインストーラー (900 以上の機能) を構築するための使いやすい DSL ライブラリ。
- [bunit](https://github.com/rafritts/bunit) - Bash スクリプトの単体テスト フレームワーク。
- [Bash Infinity](https://github.com/niieani/bash-oo-framework) - bash の最新のボイラープレート/フレームワーク/標準ライブラリ。
- [bash-modules](https://github.com/vlisivka/bash-modules) - 非公式の厳密モード用のモジュールのコレクション。
- [bash_unit](https://github.com/pgrange/bash_unit) - Bash 専門家向けの単体テスト エンタープライズ エディション フレームワーク。
- [bashunit](https://github.com/TypedDevs/bashunit) - bash スクリプト用の単純なテスト ライブラリ。
- [lobash](https://github.com/adoyle-h/lobash) - Bash スクリプト開発用の最新、安全、強力なユーティリティ/ライブラリ。
- [mo](https://github.com/tests-always-included/mo) - 純粋な bash の口ひげテンプレート。
- [semver_bash](https://github.com/cloudflare/semver_bash) - Bash のセマンティック バージョニング。
- [shellcheck](https://github.com/koalaman/shellcheck) - shell スクリプト用の静的分析ツール。
- [shellharden](https://github.com/anordal/shellharden) - 修正用 bash 構文ハイライター。
- [shfmt](https://github.com/mvdan/sh) - bash プログラムをフォーマットします。
- [shunit2](https://github.com/kward/shunit2) - JUnit/PyUnit のフレーバーを持つ Bash スクリプト用の単体テスト フレームワーク。
- [DevOps-Bash-tools](https://github.com/HariSekhon/DevOps-Bash-tools) - 750+ DevOps Shell スクリプトおよび高度な Bash 環境。
- [modernish](https://github.com/modernish/modernish) - shell スクリプト用のさまざまな機能を備えたライブラリ。
- [json.bash](https://github.com/h4l/json.bash) - Bash ライブラリおよび JSON を作成するコマンドライン ツール。
- [timep](https://github.com/jkool702/timep) - bash コード用の次世代プロファイラーおよび FlameGraph ジェネレーター。

## ただの楽しみのために

- [Bash Screensavers](https://github.com/attogram/bash-screensavers?) - A collection of screensavers written entirely in bash.
- [pokeget](https://github.com/talwat/pokeget) - Displays sprites of pokemon in the terminal.

## Community

- [Stack Overflow](http://stackoverflow.com/questions/tagged/bash) - Bash tag on Stack Overflow.
- [/r/bash](https://www.reddit.com/r/bash) - A subreddit dedicated to bash scripting.
- [/r/commandline](https://www.reddit.com/r/commandline) - For anything regarding the command line, in any operating system.
- [#bash](https://web.libera.chat/?nick=Guest&#bash) - IRC channel on Libera.​Chat. The main contributors of the BashGuide, BashFAQ, BashPitfalls and ShellCheck hang around there.

## Other Awesome Lists

Other amazingly awesome lists can be found in [awesome-awesome](https://github.com/emijrp/awesome-awesome) and [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness).

## Contribute

Contributions welcome! Read the [contribution guidelines](contributing.md) first.

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, aloisdg has waived all copyright and related or neighboring rights to this work.
