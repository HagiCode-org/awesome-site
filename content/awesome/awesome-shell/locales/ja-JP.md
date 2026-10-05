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

# Shell リソース集 [![Awesome][awesome-badge]][awesome-link]

素晴らしいコマンドラインフレームワーク、ツールキット、ガイド、ギズモのキュレーションリスト。 素晴らしさのPHP この素晴らしいコレクションもご用意しています [Unix-Shell.ZEEF.com   株式会社ドリテック](https://unix-shell.zeef.com/caleb.xu).
- [シェルズ](#shells)
- [コマンドライン生産性](#command-line-productivity)
  - [ディレクトリナビゲーション](#directory-navigation)
- [カスタマイズ](#customization)
- [開発者向け](#for-developers)
- [システムユーティリティ](#system-utilities)
- [ダウンロードとサービス](#downloading-and-serving)
- [マルチメディアおよびファイル形式](#multimedia-and-file-formats)
- [アプリケーション](#applications)
- [ゲーム](#games)
- [シェルパッケージ管理](#shell-package-management)
- [シェルスクリプト開発](#shell-script-development)
- [ガイド](#guides)
- [**Awesome Zsh**][awesome-zsh]&nbsp; [![Awesome][awesome-badge]][awesome-zsh]
- [**Awesome Fish**][awesome-fish] [![Awesome][awesome-badge]][awesome-fish]
- [**Awesome Bash**][awesome-bash] [![Awesome][awesome-badge]][awesome-bash]
- [その他の恐ろしいリスト](#other-awesome-lists)

## シェル

*ベースシェルを選択します。*

* [bash](https://www.gnu.org/software/bash/) - GNUプロジェクトのシェル(ボーン・エーゲ・シェル)
* [elvish](https://elv.sh/) - 匿名機能やデータ構造などのフレンドリーで表現力のあるシェル機能
* [es](https://wryun.github.io/es-shell/) - 計画9に基づく拡張可能なシェル [ログイン](https://github.com/rakitzis/rc) シェル
* [fish](https://fishshell.com) - スマートでユーザーフレンドリーなコマンドラインシェル
* [ion](https://github.com/redox-os/ion) - シンプルでパワフルな構文を特徴とする近代的なシステムシェル。 Rust で書かれています。
* [ksh93](https://github.com/att/ast) - コーンシェル
* [mksh](https://github.com/MirBSD/mksh) - ミルBSD コーンシェル
* [murex](https://github.com/lmorg/murex) - 使いやすさ、安全、生産性のために設計された高度な機能を備えたスマートなシェルとスクリプト環境(例えば、よりスマートな DevOps ツーリング)
* [ngs](https://github.com/ngs-lang/ngs) - 特にOpsのために作成された十分に特色にされたスクリプト言語。 REPLは開発されています。
* [nushell](https://github.com/nushell/nushell) - Rustで書かれたモダンなシェル
* [oksh](https://github.com/ibara/oksh) - ポータブルOpenBSD ksh
* [osh](https://www.oilshell.org) - 油と呼ばれる新しい/現代Unixの貝の言語と互換性があるバッシュ
* [pdksh](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/bin/ksh/) - パブリックドメインKornシェル
* [powershell](https://docs.microsoft.com/en-us/powershell/scripting/overview) コマンドラインシェルとスクリプト言語で構成されるクロスプラットフォームタスクの自動化と構成管理フレームワーク
* [shell++](https://github.com/alexst07/shell-plus-plus) - フレンドリーでモダンな機能とオブジェクト指向シェルスクリプト言語
* [shenv](https://github.com/shenv/shenv) - シンプルなシェルバージョン管理
* [tcsh](https://www.tcsh.org/) - ファイル名補完とコマンドライン編集によるCシェル
* [xonsh](https://xon.sh) - Python-ish、BASHwards-looking シェル言語とコマンドプロンプト
* [yash](https://github.com/magicant/yash) - コマンド履歴に基づく完了と予測のための組み込みサポートを備えたPOSIX準拠コマンドラインシェル
* [zsh](https://www.zsh.org) - スクリプト言語の強力なシェル

## コマンドラインの生産性向上

*端末をより生産性向上させる検索、ブックマーク、マルチプレックス、その他のツール。*

* [AdvancedNewFile](https://github.com/tanrax/terminal-AdvancedNewFile) - 再帰的な方法でファイルやディレクトリの迅速な作成。 Vim のプラグインに触発される。
* [ag](https://github.com/ggreer/the_silver_searcher) - ディレクトリ階層を介した超高速文字列検索
* [aliases](https://github.com/sebglazebrook/aliases) - bashのコンテキスト、動的、組織されたエイリアス
* [arttime](https://github.com/reportaman/arttime) - テキストアートの美しさは、時計、タイマー、pomodoro ++タイムマネージャの機能性を満たします
* [autoenv](https://github.com/hyperupcall/autoenv) - ディレクトリベースの環境。
* [await](https://github.com/slavaGanzin/await) - コマンドの一覧を並列で実行し、終了を待ち出す単一のバイナリ
* [bartib](https://github.com/nikolassv/bartib) - コマンドラインの簡単なタイムトラッカー。 すべての追跡されたアクティビティのログをプレーンテキストファイルに保存し、柔軟なレポートを作成できます。
* [bashhub](https://github.com/rcaloras/bashhub-client) - :cloud:クラウドでのバッシュ履歴。 インデックス化および検索可能。
* [boilr](https://github.com/tmrts/boilr) - ボイラープレートテンプレートからプロジェクトを作成するための非常に高速なCLIツール。
* [boom](https://github.com/holman/boom) - コマンドラインでリンクとスニペットを保存
* [borg](https://github.com/ok-borg/borg) - bashコマンドのターミナルベースの検索エンジン
* [broot](https://github.com/Canop/broot) - ディレクトリを移動するためのより良い方法
* [browsh](https://github.com/browsh-org/browsh) - 現代のテキストベースのブラウザ
* [Buku](https://github.com/jarun/Buku) - 強力なコマンドラインブックマークマネージャ
* [byobu](https://www.byobu.org) - テキストベースのウィンドウマネージャとターミナルマルチプレクサ
* [cod](https://github.com/dim-an/cod) — あなたが呼び出したときに学ぶシェルのための補完デーモン `--help` コマンド
* [CloudClip](https://github.com/skywind3000/CloudClip) - 雲のあなた自身のクリップボード、別のシステム間の霧が付いているコピーおよびりのテキスト
* [ddgr](https://github.com/jarun/ddgr) - ターミナルからDuckDuckGo
* [desk](https://github.com/jamesob/desk) - シェル用の軽量ワークスペースマネージャー
* [direnv](https://github.com/direnv/direnv) - 貝のための環境のスイッチャーは、autoenvと比較します
* [dnote](https://github.com/dnote/dnote) - マルチデバイス同期とWebインターフェイスを備えたシンプルなコマンドラインノート
* [eureka](https://github.com/simeg/eureka/) - :bulb:端末を離れずにアイデアを入力・保存するためのCLIツール
* [fasd](https://github.com/clvv/fasd) - コマンドラインの生産性ブースター、ファイルとディレクトリへの迅速なアクセス
* [fd](https://github.com/sharkdp/fd) - シンプルで高速でユーザーフレンドリーな選択肢を見つける。
* [foxy](https://github.com/s-p-k/foxy) - Firefoxとサーフィンブラウザ用のテキストブックマークをプレーンします。
* [fselect](https://github.com/jhspetersson/fselect) - SQL のようなクエリでファイルを見つけます。
* [funky](https://github.com/bbugyi200/funky) - より強力で柔軟なシェル機能の拡張
* [fz](https://github.com/changyuheng/fz) - z 用のシームレスなタブ補完
* [fzf](https://github.com/junegunn/fzf) - コマンドラインfuzzyファインダー
* [gitmux](https://github.com/arl/gitmux) - TmuxステータスバーのGitステータスを表示
* [googler](https://github.com/jarun/googler) - Google検索、Googleサイト検索、ターミナルからGoogleニュース
* [googlr](https://github.com/Astranno/googlr) - 端末からGoogleを検索できるコマンドラインツール。
* [has](https://github.com/kdabir/has) - `has` さまざまなコマンドラインツールとそのバージョンのパスの存在を確認するのに役立ちます
* [how2](https://github.com/santinic/how2) - `how2` unix シェルで何かを行う最も簡単な方法を見つけます。 こんな感じです `man`自然言語で問い合わせることができます。
* [navi](https://github.com/denisidoro/navi) - コマンドライン用のインタラクティブなチートシートツール
* [hhighlighter](https://github.com/paoloantinori/hhighlighter) - コマンド出力で単語を着色
* [hr](https://github.com/LuRsT/hr) - `<hr />` ターミナル
* [hss](https://github.com/six-ddc/hss) - オートコンプリートと非同期の実行を特徴とするインタラクティブなスッシュクライアント
* [hstr](https://github.com/dvorka/hstr) - バッシュ歴史の提案箱
* [k](https://github.com/supercrabtree/k) - k は Zsh スクリプトで、より読みやすく、Git のステータス、ファイルウェイト色、Rotting の日付を追加
* [k alias](https://github.com/lingtalfi/k) - シンプルなワンライナーで作業するkoolエイリアス(そしてもっと)を取得する
* [lf](https://github.com/gokcehan/lf) - レンジャーに触発されたGoで書かれたターミナルファイルマネージャ
* [lf.sh](https://github.com/suewonjp/lf.sh) - 少数のタイピングでファイルをすばやく検索し、より多くの(クリップボードへのコピーパスなど)を行う
* [lowcharts](https://github.com/juan-leon/lowcharts) - ターミナルの低解像度のグラフを描画する
* [Lmod](https://lmod.readthedocs.io/en/latest/) - Tclベースのモジュールを強化する Lua ベースの環境モジュールを後方互換(モジュールへの準拠)
* [loop](https://github.com/Miserlou/Loop) - 複雑なループをワンライナーとして書き、制御
* [marker](https://github.com/pindexis/marker) - シェルコマンドのブックマーク
* [mackup](https://github.com/lra/mackup/) - アプリケーションの設定を同期 (OS X/Linux) で保存します。
* [mcfly](https://github.com/cantino/mcfly) - あなたのシェルの歴史を飛ぶ。 素晴らしいスコット!
* [modules](http://modules.sourceforge.net/) - シェル環境を管理する古典的なTclベースの環境モジュール(Lmod、direnv、およびautoenvへの準拠)
* [nnn](https://github.com/jarun/nnn) - ファイル ブラウザとディスクの使い方のアナライザと優れたデスクトップの統合
* [ok-sh](https://github.com/secretGeek/ok-bash) - 多くの異なるプロジェクトで仕事をしていますか? 各プロジェクトでは、そのプロジェクトに固有のコマンドはありますか? .okファイルが必要です。
* [parallel](https://www.gnu.org/software/parallel/) -標準入力からシェルコマンドラインを並列でビルドして実行する
* [pass](https://www.passwordstore.org/) - コマンドラインからGPG暗号化とオプションのgit統合でパスワードを管理します。
* [pathpicker](https://github.com/facebook/PathPicker) - grep、searches、gitなどのような入力を受け付けます。入力の結果からファイルを選択して、コマンドに引数として開くか、または提供することができます。
* [pdd](https://github.com/jarun/pdd) - 小さな日付、タイマー付きの時間差分計算機
* [percol](https://github.com/mooz/percol) - UNIX の貝の従来の管の概念に相互ろ過の味を加えて下さい
* [q](https://github.com/cal2195/q) - BashとZsh ShellのマクロレジスタのようなVim
* [qfc](https://github.com/pindexis/qfc) - BashとZshのファイル補完ウィジェット
* [resh](https://github.com/curusarn/resh) - ZshとBashのコンテキストシェル履歴
* [rg](https://github.com/BurntSushi/ripgrep) - ripgrepはGNU grepの未加工速度と銀のSearcherの有用性を結合するライン指向の調査用具です
* [screen](https://www.gnu.org/software/screen/) - GNUターミナルマルチプレクサ
* [shell-history](https://github.com/pawamoy/shell-history) - Highchartsでシェルの使用状況を視覚化
* [SHML](https://github.com/odb/shml) - 端末のスタイルフレームワーク(Shell Markup Language)
* [slugify](https://github.com/benlinton/slugify) - ファイル名とディレクトリをWebフレンドリーな形式に変換するコマンド
* [sman](https://github.com/tokozedg/sman) - :bug:コマンドラインスニペットマネージャ
* [spark](https://github.com/holman/spark) - あなたの貝の ▂▃▅▂▇
* [spark.fish](https://github.com/jorgebucaran/spark.fish) - ▂▃▅スパークラインジェネレーター
* [sheet](https://github.com/oscardelben/sheet) - コマンドライン用のテキストスニペット
* [spot](https://github.com/rauchg/spot) - 小さなファイル検索ユーティリティ
- [snips](https://github.com/srijanshetty/snips) - コードのスニペットを管理するためのコマンドラインツール。
* [sqlline](https://github.com/julianhyde/sqlline) - JDBC(マルチライン、完了、強調、ダイアレクトサポート)を介してリレーショナルデータベースにSQLを発行するシェル
* [sshfs](https://github.com/osxfuse/sshfs) - SSH上のリモートファイルシステムをマウントするためのツール
* [sudocabulary](https://github.com/badarsh2/Sudocabulary) - ターミナルから英語の語彙を学ぶ
* [surfraw](https://gitlab.com/surfraw/Surfraw) - 特定のサイトを参照し、ブラウザなしで端末からWebを検索します。
* [task-manager](https://github.com/lingtalfi/task-manager) - 2つまたは3つのキーストロークですべてのスクリプトを実行します。
* [td-cli](https://github.com/darrikonn/td-cli) - Todo コマンドラインマネージャーが、複数のプロジェクトを横断してトードを整理および管理します。
* [tere](https://github.com/mgunyho/tere) - cd + ls のより速い代わり
* [thefuck](https://github.com/nvbn/thefuck) - コマンドを覚えやすくすることで、一般的なシェルミスを修正
* [tldr](https://github.com/raylee/tldr-sh-client) - tldr、簡素化、コミュニティ主導のマンページのための機能的なバッシュクライアント
* [tmux](https://tmux.github.io/) - 驚くべきターミナル多重交換装置
* [undollar](https://github.com/xtyrrell/undollar) - undollarは、あなたのターミナルに貼り付けたコマンドの先端を離れてドルが署名します
* [usql](https://github.com/xo/usql) - SQL データベースのUniversal コマンドラインインターフェイス。
* [v](https://github.com/rupa/v) - z のための vim.
* [wemux](https://github.com/zolrath/wemux) - 使いやすい複数のユーザーTmux
* [xiki](https://github.com/trogdoro/xiki) - シェルコンソールをよりフレンドリーかつ強力に
* [xplr](https://github.com/sayanarijit/xplr) - ハック可能な、最小限、高速TUIファイルエクスプローラ
* [xsv](https://github.com/BurntSushi/xsv) - Rustで書かれた高速CSVコマンドラインツールキット
* [xxh](https://github.com/xxh/xxh) - SSHを通るたびにお気に入りのシェルを持参してください。

### ディレクトリ移動

* [aliasme](https://github.com/Jintin/aliasme) - エイリアスヘルパーが素早くディレクトリを変更する
* [autojump](https://github.com/wting/autojump) - コマンドラインからディレクトリを簡単にナビゲートできるcdコマンド
* [bashmarks](https://github.com/huyng/bashmarks) - シェルのディレクトリブックマーク
* [bd](https://github.com/vigneshwaranr/bd) - 親ディレクトリに戻る
* [commacd](https://github.com/shyiko/commacd) - バッシュで移動する高速な方法
* [enhancd](https://github.com/b4b4r07/enhancd) - :rocket: インタラクティブフィルタ付き次世代cdコマンド
* [goto](https://github.com/iridakos/goto) - 自動補完をサポートするエイリアスされたディレクトリへのナビゲーションのためのシェルユーティリティ
* [jump](https://github.com/gsamokovarov/jump) - ジャンプは、あなたの習慣を学ぶことによって、あなたのファイルシステムをより速くナビゲートするのに役立ちます。
* [lazy-cd](https://github.com/pedramamini/lazy-cd) - ファイルシステムのブックマークされたナビゲーションのためのシンプルなバッシュコマンド、bash-completionで完了します。
* [up](https://github.com/shannonmoeller/up) - 名前やカウントでディレクトリを昇格させる。バッシュ、マッシュ、魚。
* [z](https://github.com/rupa/z) - zは新しいj、yoです
* [z.lua](https://github.com/skywind3000/z.lua) - 習慣を学ぶことでより速くナビゲートするのに役立つ新しいcdコマンド
* [zoxide](https://github.com/ajeetdsouza/zoxide) - Rustで書かれているファイルシステムをナビゲートするより速い方法
* [zpyi](https://github.com/sakshamsharma/zpyi) - ZshのPython - シェルでの簡単なPythonスクリプト

## カスタマイズ

*カスタムプロンプト、カラーテーマなど*

* [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) — バッシュ、魚、zsh で動作するセクシーなターミナルのための最小限の Aphrodite テーマ (prompt)
* [base16-builder](https://github.com/base16-builder/base16-builder) - Base16 ビルダー
* [bash-full-of-colors](https://github.com/slomkowski/bash-full-of-colors) - スクリーン、tmux、git サポートおよび多くが付いている強力なプロンプト
* [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) - Gitユーザー向けの有益なBashプロンプト
* [bash-powerline](https://github.com/riobard/bash-powerline) - 純粋なバッシュスクリプトのPowerlineスタイルのバッシュプロンプト
* [bashstrap](https://github.com/barryclark/bashstrap) - OSX端末をスプルースするための簡単な方法
* [bullet-train-oh-my-zsh-theme](https://github.com/caiogondim/bullet-train.zsh) - :bullettrain side:Powerline Vimプラグインに基づくoh-my-zshシェルテーマ
* [emojify](https://github.com/mrowa44/emojify) コマンドラインの絵文字 :scream:
* [flatui-terminal-theme](https://dribbble.com/shots/1021755-Flat-UI-Terminal-Theme) - ターミナルのためのニーザー色
* [geometry](https://github.com/geometry-zsh/geometry) - 任意の関数が左のプロンプトまたは(非同期)の右プロンプトに追加することができる最小限のZSHテーマ。
* [git-prompt](https://github.com/lvv/git-prompt) - Git、SVN、HGモジュールによるBashプロンプト
* [gittify](https://github.com/momeni/gittify) - 多彩なバッシュのプロンプト+カスタマイズされたGitのaliases
* [Gogh - Color Scheme](https://github.com/Mayccoll/Gogh) - Gnomeターミナルのカラースキーム
* [liquidprompt](https://github.com/nojhan/liquidprompt) - フル機能 &バッシュのための慎重に設計された適応プロンプト &ログイン
* [mysql-colorize](https://github.com/zpm-zsh/mysql-colorize) - mysql comand-line クライアントのカラー化
* [oh-my-git](https://github.com/arialdomartini/oh-my-git) - bashとzshのための意見付きのgitプロンプト
* [oh-my-posh](https://ohmyposh.dev) - 任意のシェルとプラットフォームのためのプロンプトテーマエンジンは、行きます。
* [polyglot](https://github.com/agkozak/polyglot) - bash、zsh、ksh、mksh、pdksh、oksh、dash、yash、bsh、およびoshで動作する有益なGitプロンプト
* [powerlevel10k](https://github.com/romkatv/powerlevel10k) - 超柔軟な素晴らしいパワーラインZSHテーマ
* [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt) - 色のバッシュプロンプト、Gitステータス、およびGitブランチ
* [starship](https://starship.rs/) - 速く、customisable、錆で書かれる十字貝のプロンプト
* [synth-shell](https://github.com/andresgongora/synth-shell) - カスタマイズ可能なステータスレポートと豪華なバッシュプロンプトでグレター

## 開発者向け

*コマンドラインの開発、バージョン管理、展開。*

* [1Password SSH Agent](https://developer.1password.com/docs/ssh/) - Git と SSH ワークフローを 1Password を使用して生体認証ロックで認証する
* [ack](https://beyondgrep.com/) - ソースコード用に最適化された grep のような検索ツール。
* [add-gitignore](https://github.com/TejasQ/add-gitignore) - あなたのニーズに基づいてプロジェクトのために .gitignore を生成するインタラクティブな CLI。
* [bcal](https://github.com/jarun/bcal) - ストレージ変換と計算のためのバイトのCALculator
* [bitwise](https://github.com/mellowcandle/bitwise) - 末端はカールスの相互ビット マニピュレーターを基づかせていました。
* [bocker](https://github.com/p8952/bocker) - 100行のbashで実装されたDocker
* [cloc](https://github.com/AlDanial/cloc) - コードの行数
* [doclt](https://github.com/omgimanerd/doclt) - デジタルオーシャンへのコマンドラインインターフェイス
* [dokku](https://github.com/dokku/dokku) - ドッカー駆動ミニエロク。 今まで見てきた最小のPaaS実装。
* [forgit](https://github.com/wfxr/forgit) - 実用的なツール `git` fuzzyファインダーfzfを利用しています。
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - 多くのGitの余分なユーティリティ。 チューン、カットブランチ、改良型マージなど
* [git-extras](https://github.com/tj/git-extras) - Gitユーティリティ - 要約、リポジトリ、変更ログの人口、著者のコミット割合など
* [git-open](https://github.com/paulirish/git-open) - タイプ `git open` GitHub ページまたはウェブサイトをブラウザーのリポジトリに開く
* [git-quick-stats](https://github.com/arzzen/git-quick-stats) - Gitクイック統計は、gitリポジトリ内のさまざまな統計にアクセスするためのシンプルで効率的な方法です。
* [git-semver](https://github.com/markchalloner/git-semver) - Gitプラグインは、セマンティックバージョンアップと変更ログ検証を緩和
* [git-sh](https://github.com/rtomayko/git-sh) - Gitの仕事に適したカスタマイズされたバッシュ環境
* [gita](https://github.com/nosarthur/gita) - 複数のgitリポジトリを管理するためのコマンドラインツール。
* [hub](https://github.com/github/hub) - ハブはgitで勝つのを助けます。
* [just](https://github.com/casey/just) - プロジェクト固有のコマンドを保存および実行するためのタスクランナー。
* [licins](https://github.com/dogoncouch/licins) - Insertはソフトウェアライセンスをソースコードにコメントしました。
* [mkdkr](https://github.com/rosineygp/mkdkr) - Makefile + Docker = CI パイプライン
* [mr](https://myrepos.branchable.com) - 複数のリポジトリ管理ツール
* [nve](https://github.com/ehmicky/nve) - 特定のNode.jsバージョンで任意のコマンドを実行します。
* [overcommit](https://github.com/sds/overcommit) - 完全に構成可能で拡張可能なGitのホックのマネージャー
* [pre-commit](https://pre-commit.com) - 複数の言語の事前コミットのホックの管理と維持のためのフレームワーク
* [rebound](https://github.com/shobrook/rebound) - コンパイルエラーを取得するときに、Stackのオーバーフロー結果をターミナルに瞬時にブラウズする
* [repren](https://github.com/jlevy/repren) - コマンドライン検索と置換とファイルレンタムス軍ナイフ
* [slap](https://github.com/slap-editor/slap) - Node.js上で実行されるSublime-likeターミナルベースのテキストエディタ
* [shipit](https://github.com/sapegin/shipit) - 最小限のSSH展開
* [starring](https://github.com/ritz078/starring) - GitHubで使用しているnpm-packagesを自動的に起動します。
* [tag](https://github.com/aykamko/tag) - すぐにあなたのagマッチにジャンプします。
* [trunk](https://www.npmjs.com/package/@trunkio/launcher) - 超高速メタコードチェッカーとフォーマッタ
* [vmn](https://github.com/final-israel/vmn) - gitベースの自動バージョンアップと状態の回復ソリューションは、言語やアーキテクチャに浸透します
* [wipe-modules](https://github.com/bntzio/wipe-modules) - 非活動的なプロジェクトのnode modulesフォルダを削除した小さなエージェント

## システムユーティリティ

*システム管理、システムデバッグ、ファイル管理、プロセス管理などのOS関連ツール*

* [atop](https://www.atoptool.nl) - あらゆるプロセスの活動を報告することができるASCIIフルスクリーンのパフォーマンス・モニター
* [bat](https://github.com/sharkdp/bat) - A `cat` 羽根とクローン
* [bmon](https://github.com/tgraf/bmon) - リアルタイムのネットワークの帯域幅のモニターおよび人間に優しい視覚出力が付いている率の推定器
* [btop](https://github.com/aristocratos/btop) - Linux/OSX/FreeBSD リソースモニター
* [catcli](https://github.com/deadc0de6/catcli) - オフラインデータのコマンドラインカタログツール
* [ccat](https://github.com/owenthereal/ccat) - ccatは着色猫です。 猫と似ていますが、構文の強調表示でコンテンツを表示します。
* [exa](https://github.com/ogham/exa) - 現代版の `ls`.
* [progress](https://github.com/Xfennec/progress) - Linux ツールで進行状況を表示 `cp`, `rm`, `dd`・・・
* [stronghold](https://github.com/alichtman/stronghold) - 端末からMacOSのセキュリティ設定を簡単に設定できます。
* [glances](https://github.com/nicolargo/glances) - あなたのシステムで目を引く
* [goaccess](https://github.com/allinurl/goaccess) - GoAccessは、\*nixシステム内の端末で動作するリアルタイムのWebログアナライザおよびインタラクティブビューアです。
* [hblock](https://github.com/hectorm/hblock) - ホストファイルベースのアドブロッカー
* [histstat](https://github.com/vesche/histstat) - ネットスタットの歴史
* [htop](https://github.com/hishamhm/htop) - ncurses ベースのインタラクティブなプロセスビューアにより、より良いものを目指します `top`
* [lnav](https://lnav.org) - 小規模向けの高度なログファイルビューア
* [logdissect](https://github.com/dogoncouch/logdissect) - ログファイルやその他のデータを分析するためのCLIユーティリティとPython API。
* [ls++](https://github.com/trapd00r/ls--) - ステロイドのカラーls
* [lsd](https://github.com/Peltoche/lsd) - LSDeluxe、色、アイコン、ツリービューなどの多くの追加機能を備えたGNU lsの書き換え、よりフォーマットオプション。
* [lsp](https://github.com/dborzov/lsp) - 改善される `ls`、明白な言語および理性的なファイル グループでファイル記述を使って
* [maza](https://github.com/tanrax/maza-ad-blocking) - ローカル広告ブロッカー。 Pi-hole と同様、ローカルで、お使いのオペレーティングシステムを使用します。
* [mtr](https://github.com/traviscross/mtr) - 単一のネットワークの診断用具の 'traceroute' および 'ping' プログラムの機能。
* [ncdu](https://dev.yorhel.nl/ncdu) - NCursesディスク使用量
* [nmtui](https://github.com/NetworkManager/NetworkManager) - NetworkManagerを制御するためのテキストユーザーインターフェイス
* [powertop](https://github.com/fenrus75/powertop) - バッテリー/電力使用状況とデバイス統計は、コマンドラインツールを監視し、チューンアップオプションを使用します。
* [prettyping](https://github.com/denilsonsa/prettyping) - 出力を作る `ping` よりカラフルで、よりコンパクトで読みやすくなります。
* [procdog](https://github.com/jlevy/procdog) - サーバーのような長寿命プロセスの軽量なコマンドライン制御
* [quick-secure](https://github.com/marshyski/quick-secure) - UNIX/Linux システムを素早く保護・強化
* [rng](https://github.com/nickolasburr/rng) - ファイルまたはstdinからstdoutへの行の範囲をコピーします。
* [tiptop](https://github.com/nschloe/tiptop) - グラフィカルなコマンドラインシステムモニター。
* [wifi-wand](https://github.com/keithrbennett/wifiwand) - MacOSでWiFiを管理するためのRubyコマンドラインアプリケーション(インストール) `gem install wifi-wand`)
* [xiringuito](https://github.com/ivanilves/xiringuito) - SSHベースの「貧しいVPN」

## ダウンロードと配信

*シェルスクリプトで記述された自己ホスト、軽量サーバー、ネットワークツール。*

* [aria2](https://github.com/aria2/aria2) - aria2は軽量マルチプロトコルです &マルチソース、クロスプラットフォームはコマンドラインで動作するユーティリティをダウンロードします。 HTTP/HTTPS、FTP、BitTorrent、Metalink に対応しています。
* [balls](https://github.com/jneen/balls) - ボールのバッシュ
* [bashttpd](https://github.com/avleen/bashttpd) - Bashで書かれたWebサーバー
* [bashhub-server](https://github.com/nicksherron/bashhub-server) - プライベートクラウドシェル履歴。 bashhubのオープンソースサーバー
* [bitpocket](https://github.com/sickill/bitpocket) - "DIY Dropbox" または "2-way ディレクトリ (r) 適切な削除と同期"
* [Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader) - Dropbox Uploaderは、Dropboxからファイルをアップロード、ダウンロード、リスト、または削除するために使用できるBashスクリプトです
* [httpie](https://github.com/httpie/httpie) - HTTPie はコマンドライン HTTP クライアント、ユーザーフレンドリーな cURL 置換です。
* [HTTPLab](https://github.com/gchaincl/httplab) - インタラクティブなWebサーバーで、HTTPリクエストを調べ、応答を強制します。
* [Kapow!](https://github.com/BBVA/kapow) - スクリプトを行なうことができれば、HTTP が使えます。
* [ngincat](https://github.com/jaburns/ngincat) - netcat を使用した Tiny Bash HTTP サーバ
* [resty](https://github.com/micha/resty) - パイプラインで使用できるリトルコマンドラインRESTクライアント
* [shell2http](https://github.com/msoap/shell2http) - HTTP-server はシェルコマンドを実行します。 開発、試作、リモート・コントロールのために設計されている
* [tshare](https://github.com/trikko/tshare) - コマンドラインからファイル共有。
* [vesper](https://github.com/chris-rock/vesper) - Bash/Unix Shell の HTTP フレームワーク
* [xh](https://github.com/ducaale/xh) - HTTPリクエストを送信するためのフレンドリーで高速なツール
* [yt-dlp](https://github.com/yt-dlp/yt-dlp) - YouTube.comや他のビデオサイトから動画をダウンロードするためのコマンドラインプログラム

## マルチメディアとファイル形式

*ビデオとオーディオファイルを処理するためのツール。*

* [adb-export](https://github.com/sromku/adb-export) - AndroidコンテンツプロバイダをCSV形式にエクスポートする
* [Android-Kitchen](https://github.com/dsixda/Android-Kitchen) - Android ROMのカスタマイズのためのテキストベースのキッチン。 シェルスクリプトを使用して、Cygwin/OS X/Linux で動作します。
* [Beets](https://github.com/beetbox/beets) - 音楽ライブラリマネージャーとMusicBrainzタグガー
* [cmus](https://github.com/cmus/cmus) - クロスプラットフォームクライオーディオプレーヤー。
* [dasel](https://github.com/tomwright/dasel) - コマンドラインからセレクターを使用してデータ構造の照会と更新。 比較可能 [ログイン](https://github.com/stedolan/jq) / [ログイン](https://github.com/kislyuk/yq) しかし、JSON、YAML、TOML、XML をゼロランタイム依存関係でサポートします。
* [dzr](https://github.com/yne/dzr) - クロスプラットフォームDeezer.comオーディオプレーヤー。
* [fx](https://github.com/antonmedv/fx) - anononymus JavaScript関数によるコマンドラインJSON処理ツール
* [gifgen](https://github.com/lukechilds/gifgen) - シンプルな高品質のGIFエンコーディング
* [image-scraper](https://github.com/sananth12/ImageScraper) - 多くの機能を備えたクールなコマンドラインイメージスクレーパー。
* [imgp](https://github.com/jarun/imgp) - 速いバッチ イメージのresizerおよび回転子をろう付けして下さい
* [jc](https://github.com/kellyjonbrazil/jc) - コマンド出力、ファイルタイプ、一般的な文字列を JSON や YAML に変換し、スクリプトで簡単に使用できます。
* [jo](https://github.com/jpmens/jo) - コマンドライン引数からJSONオブジェクトを作成する小さなユーティリティ。
* [jq](https://github.com/stedolan/jq) - jsonデータにSed。 構造化されたデータをスライスし、フィルタリングし、マップし、変換するために使用できる
* [korkut](https://github.com/oguzhaninan/korkut) - コマンドラインで素早く簡単な画像処理。
* [library](https://github.com/chapmanjacobd/library) - 音楽、ビデオ、画像、またはオンラインメディアのフォルダ用のSQLITEデータベースを作成します。 Plex のようなメディアを再生し、追跡しますが、CLI だけインターフェイス 多くのソートオプション.
* [mpv](https://mpv.io/) - シェルだけでなく、GUIで、ほとんどのオーディオとビデオフォーマット(ASCII文字を使用)を再生してみましょう。
* [nehm](https://github.com/bogem/nehm) - コンソールツールは、ダウンロード、IDv3タグを設定し、iTunesに追加します(使用すると)便利な方法でSoundCloudのいいね
* [PiCAST](https://github.com/lanceseidman/PiCAST) - PiCASTは、デバイスのようなChromecastに$ 35 Raspberry Piをオンにします
* [sejda](https://github.com/torakiki/sejda/) - PDF文書のコマンドライン操作(分割、マージ、回転、jpgに変換、テキスト抽出など)
* [visidata](https://github.com/saulpw/visidata) - データ(csv/json/xml/xls/yaml/etc)を探索および配置するためのターミナルスプレッドシートマルチツール
* [xidel](https://github.com/benibela/xidel/) - フィルタリング、マップ、HTML/XML/JSONデータを(Turing-complete) XPathとXQueryで作成するCliツール。
* [xmlstarlet](http://xmlstar.sourceforge.net/) - コマンドラインXMLフォーマット、フィルタリング、操作のための古いが、強力なツール。
* [yq](https://github.com/mikefarah/yq) - yqはポータブルコマンドラインYAMLプロセッサです

## アプリケーション

*コマンドラインベースのアプリケーションまたはコマンドラインが既存のサービスにアクセスするコマンド。*

* [ansiweather](https://github.com/fcambus/ansiweather) - ANSI色とUnicode記号で端末の天気
* [awless](https://github.com/wallix/awless) - AWSを管理するための強力で、革新的で小さな表面CLI。
* [bashblog](https://github.com/cfenollosa/bashblog) - ブログ投稿を扱うバッシュスクリプト
* [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - 端末の右側から、コードの美しい画像を読み込みます。
* [choosealicense-cli](https://github.com/lord63/choosealicense-cli) - 端末の快適さからOSSライセンスを選択します
* [cointop](https://github.com/miguelmota/cointop) - 暗号通貨を追跡するための最速かつ最もインタラクティブなターミナルベースのUIアプリケーション
* [dstask](https://github.com/naggie/dstask) - タスクごとのgitベースのsync +マークダウンノートを持つ単一のバイナリターミナルベースのTODOマネージャー
* [editly](https://github.com/mifi/editly) - コマンドラインビデオエディタ
* [facebook-cli](https://github.com/specious/facebook-cli) - Facebookのコマンドラインツール
* [fanyi](https://github.com/afc163/fanyi) - ターミナルで英語を中国語に翻訳する
* [gcalcli](https://github.com/insanum/gcalcli) - Googleカレンダーコマンドラインインターフェイス
* [geeknote](https://github.com/VitaliyRodnenko/geeknote) - コマンド ライン evernote クライアント
* [haxor-news](https://github.com/donnemartin/haxor-news) - ハクソールのようなハッカーニュース
* [hn-cli](https://github.com/rafaelrinaldi/hn-cli) - あなたのターミナルの快適さからハッカーニュースをブラウザー
* [iponmap](https://github.com/nogizhopaboroda/iponmap) - ipアドレスを使用して世界地図上の点を描画する
* [isitup](https://github.com/lord63/isitup) - ウェブサイトが上下しているかどうかを確認します
* [jrnl](https://github.com/jrnl-org/jrnl) - ジャーナルをプレーンテキストファイルに保存する簡単なコマンドラインジャーナルアプリケーション
* [kanban.bash](https://github.com/coderofsalvation/kanban.bash) - 最小限の生産性バッシュハッカー(csvベース)のためのコマンドラインasciiiカンバボード
* [ledger](https://github.com/ledger/ledger) - コマンドライン会計
* [licen](https://github.com/lord63/licen) - ライセンスを生成します。 しかし、別のシミは、しかし、Jinja2とdocoptで実装
* [md2png](https://github.com/weaming/md2png) - マークダウンをPNG画像に変換
* [moviemon](https://github.com/iCHAIT/moviemon) - コマンドライン内のムービーのすべて。
* [nomino](https://github.com/yaa110/nomino) - バッチはregex、ソート、マップファイルオプションを使用してユーティリティの名前を変更します。
* [pcalc](https://github.com/alt-romes/programmer-calculator) - ビットに近い複数の数の表現、サイズ、および全体的に動作するプログラマのために作られた計算機。
* [pockyt](https://github.com/achembarpu/pockyt) - 読み取り、管理、および自動化 [ポケット](https://getpocket.com) コレクション。
* [pushblast](https://github.com/alebcay/pushblast) - シェルプログラムが終了したときにPushBullet通知を取得する
* [pushbullet-bash](https://github.com/Red5d/pushbullet-bash) - PushBullet API への Bash インターフェイス
* [ranger](https://github.com/ranger/ranger) - VIキーバインディングを備えたコンソールファイルマネージャ。
* [Reddit Terminal Viewer](https://github.com/michael-lazar/rtv) - 端末からRedditをブラウズ
* [SAWS](https://github.com/donnemartin/saws) - 超高速AWS CLI
* [taskbook](https://github.com/klaussinani/taskbook) - タスク、ボード &コマンドライン生息地のメモ
* [taskwarrior](https://taskwarrior.org/) - コマンドラインTODOリストマネージャ
* [terjira](https://github.com/keepcosmos/terjira) - Jiraのコマンドライン電源ツール
* [ticker](https://github.com/achannarasappa/ticker) — ライブアップデートと位置追跡を備えたターミナルストックティッカー
* [vl](https://github.com/ellisonleao/vl) - テキスト文書のURLリンクチェッカー
* [wego](https://github.com/schachmat/wego) - 端末用の気象アプリ
* [whales](https://github.com/Gueils/whales) - アプリケーションを自動的にドッカー化するためのツール
* [whereami](https://github.com/rafaelrinaldi/whereami) - CLIからジオロケーション情報を取得する
* [wttr.in](https://github.com/chubin/wttr.in) - :partly sunny:天気をチェックする正しい方法(curl wttr.in)

## ゲーム

*すべての作品と遊びは、あなたの一日を過ごすための残酷な方法です。*

* [bash2048](https://github.com/mydzor/bash2048) - 2048ゲームのBash実装
* [minesweeper](https://github.com/feherke/Bash-script/tree/master/minesweeper) - MinesweeperのBash実装
* [nudoku](https://github.com/jubalh/nudoku) - Cで書かれたncursesベースのsudokuゲーム
* [piu-piu](https://github.com/vaniacer/piu-piu-SH) - マルチプレイヤーモードでバッシュで水平スクロールゲーム!
* [sedtris](https://github.com/uuner/sedtris) - sedのテトリス
* [sed-scripts](https://github.com/aureliojargas/sed-scripts) - Arkanoid と Sokoban による sed
* [SHTAP](https://notimetoplay.org/engines/shtap/) - Bash 4の再利用可能なテキストアドベンチャーエンジン
* [tty-solitaire](https://github.com/mpereira/tty-solitaire) - 端末でソリティアをプレイ!

## Shell パッケージ管理

*複数のシェル構成を管理するためのツール。 zsh 固有のツールについては、Zsh セクションを参照してください。*

* [bash-it](https://github.com/Bash-it/bash-it) - コミュニティバッシュフレームワーク
* [basher](https://github.com/basherpm/basher) - シェルスクリプト用のパッケージマネージャ
* [bashing](https://github.com/xsc/bashing) - バッシュをピースにつぶす
* [bpkg](https://www.bpkg.sh/) - JavaScriptはnpm、Rubyにはgems、Pythonはpipを持ち、Shellはbpkgを持っています
* [dotdrop](https://github.com/deadc0de6/dotdrop) - 一度にドットファイルを保存し、どこにでも展開
* [dotfiler](https://github.com/svetlyak40wt/dotfiler) – Pythonで書かれているShellのagnostic gitベースのdotfilesパッケージマネージャ。
* [fresh](https://github.com/freshshell/fresh) - ドットファイルを新鮮に保つ
* [homeshick](https://github.com/andsens/homeshick) - Bashで書かれたGit dotfileシンクロナイザー
* [shallow-backup](https://github.com/alichtman/shallow-backup) - インストールされたパッケージ、ドットファイルなどの軽量なドキュメントを簡単に作成
* [shundle](https://github.com/javier-lopez/shundle) - シェルスクリプト用のプラグインマネージャ
* [vcsh](https://github.com/RichiH/vcsh) - Gitに基づく管理者の設定
* [yadm](https://yadm.io/) - 暗号化、代替、およびブートストラップをサポートするGitベースのドットファイルマネージャ

## Shell スクリプト開発

*バッシュや他のシェルスクリプトを作成、改善、または整理するためのツール*

* [ansi](https://github.com/fidian/ansi) - ANSI は純粋なバッシュのエスケープ コードをエスケープします - テキスト色を変更し、カーソルを置きます、多く
* [assert.sh](https://github.com/lehmannro/assert.sh) - バッシュユニットのテストフレームワーク
* [bashew](https://github.com/pforret/bashew) - bashスクリプト作成者 - 小規模なスタンドアローンスクリプトから、CI / CDおよびテストで複雑なプロジェクトへ
* [bashful](https://github.com/jmcantrell/bashful) - Bashスクリプトを書くのを簡素化するライブラリのコレクション
* [Bashlets](https://github.com/reale/bashlets) - Bashのためのモジュラー拡張可能なツールボックス
* [bashly](https://bashly.dannyb.co/) - BashコマンドラインフレームワークとCLIジェネレーター
* [bashmanager](https://github.com/lingtalfi/bashmanager) - コマンドラインツールを作成するためのミニバッシュフレームワーク
* [bashwithnails](https://github.com/mindaugasbarysas/bashwithnails) - テスト、依存性管理と楽しみのために書かれたバッシュフレームワーク &パッケージ
* [bash-language-server](https://github.com/bash-lsp/bash-language-server) - [LSPについて](https://microsoft.github.io/language-server-protocol/)-ベースのBash言語サーバー
* [bash-modules](https://github.com/vlisivka/bash-modules) - 開発のための機能 [非公式の厳密なモード](http://redsymbol.net/articles/unofficial-bash-strict-mode/) 有効にします。
* [bats](https://github.com/bats-core/bats-core) - バッシュ自動テストシステム
* [composure](https://github.com/erichs/composure) - シェル関数のコンパイル、ドキュメント、バージョン、および整理
* [crash](https://github.com/molovo/crash) - ZSH の適切なエラー処理、例外および試み/捕獲
* [critic.sh](https://github.com/Checksum/critic.sh) - 報道報告とバッシュのためのデッドシンプルなテストフレームワーク
* [dispatch](https://github.com/Mosai/workshop/blob/master/doc/dispatch.md) - ポータブルシェルスクリプトの50行のコマンドライン引数パーサ。
* [esh](https://github.com/jirutka/esh) - シェルをベースとしたシンプルなテンプレートエンジンで、POSIXシェルとawkの約290ラインで実装。
* [Fishtape](https://github.com/jorgebucaran/fishtape) - TAPの生産および魚のためのテスト馬具
* [getoptions](https://github.com/ko1nksm/getoptions) - シェルスクリプト(sh、bash、全てのPOSIXシェル)のエレガントなオプションパーサ
* [getopts.fish](https://github.com/jorgebucaran/getopts.fish) - 魚のためのCLIのパサー
* [is.sh](https://github.com/qzb/is.sh) - ビルトインテストコマンドの代わりに、 "if" ステートメントをかなり作成します
* [lumberjack](https://github.com/molovo/lumberjack) - シェルスクリプトのロギングインターフェイス
* [mo](https://github.com/tests-always-included/mo) - 純粋なバッシュのマスタッシュテンプレート
* [optparse](https://github.com/nk412/optparse) - 単純なコマンドライン引数の getopts 用の BASH ラッパー。
* [rerun](https://github.com/rerun/rerun) - モジュラーシェル自動化フレームワークで、キーパースクリプトを整理
* [revolver](https://github.com/molovo/revolver) - シェルスクリプトの再利用可能な進行スピナー
* [phases](https://github.com/sorokine/phases) - 最小侵襲的バッシュプリプロセッサー、実行するスクリプトのセクションを選択します
* [powscript](https://github.com/coderofsalvation/powscript) - bashで書かれたバッシュトランスパイラー(bashのcoffeescript)
* [semver_bash](https://github.com/cloudflare/semver_bash) - バッシュのセマンティックバージョン
* [sh-semver](https://github.com/qzb/sh-semver) - bash用のSemverツール - 指定されたルールに一致するバージョンを見つける
* [shellcheck](https://github.com/koalaman/shellcheck) - シェルスクリプト用の静的解析ツール
* [shellfire](https://github.com/shellfire-dev/shellfire) - 名前空間のリポジトリ, 複合シェル (bash, sh, dash) 関数ライブラリ
* [shellspec](https://github.com/shellspec/shellspec) - dash、bash、ksh、zsh、およびすべてのPOSIXシェル用のフル機能のBDDユニットテストフレームワーク
* [shfmt](https://github.com/mvdan/sh) - bashサポート付きのシェルパーサ、フォーマッタ、およびインタプリタ。 shfmtを含む
* [shpec](https://github.com/rylnd/shpec) - シェルのテストフレームワーク
* [shutit](https://ianmiell.github.io/shutit/) - bashとpexpectに基づく自動化フレームワーク
* [sub](https://github.com/basecamp/sub) - プログラムを整理するおいしい方法
* [ts](https://github.com/thinkerbot/ts) - シェルテストスクリプト
* [urchin](https://github.com/tlevine/urchin) - シェルコマンドのみを使用する慣用シェルテストフレームワーク
* [shunit2](https://github.com/kward/shunit2) - JUnit/PyUnit の風味を持つバッシュスクリプトのユニットテストフレームワーク。
* [rebash](https://github.com/jandob/rebash) - スクリプトライブラリ/フレームワーク。 特徴:インポート、例外、docテスト...
* [zunit](https://github.com/zunit-zsh/zunit) - ZSHの強力なユニットテストフレームワーク

# ガイド

* [Bash Official Reference Manual](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html)
* [Bash Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/)
* [Greg Wooledge's (aka "greycat") wiki](https://mywiki.wooledge.org).
  具体的に [バッシュガイド](https://mywiki.wooledge.org/BashGuide), [バッシュのFAQ](https://mywiki.wooledge.org/BashFAQ) そして、 [バッシュ・ピットフォールズ](https://mywiki.wooledge.org/BashPitfalls)
* [Google's Shell Style Guide](https://google.github.io/styleguide/shell.xml)
* [The Linux Documentation Project: Bash Programming - Intro/How-to](https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)
* [The Linux Documentation Project: Advanced Bash Scripting Guide](https://tldp.org/LDP/abs/html/)
* [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
* [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
* [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)
* [Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial/basics)
* [A guide to learn bash](https://github.com/Idnan/bash-guide)
* [Shell Field Guide](https://raimonster.com/scripting-field-guide/)

# その他の Awesome リスト

他の驚くほど素晴らしいリストは見つけることができます [素晴らしい-素晴らしい](https://github.com/emijrp/awesome-awesome) そして、 [素晴らしさ](https://github.com/bayandin/awesome-awesomeness).

### こちらも参照

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
