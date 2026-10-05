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

# Shell 리소스 모음 [![Awesome][awesome-badge]][awesome-link]

멋진 명령 줄 프레임 워크, 툴킷, 가이드 및 gizmos의 큐레이터 목록. 멋진 PHP에 영감을. 이 멋진 컬렉션도 있습니다. [유닉스-Shell.ZEEF.com](https://unix-shell.zeef.com/caleb.xu).
- [쉘](#shells)
- [명령 선 생산력](#command-line-productivity)
  - [관련 기사](#directory-navigation)
- [주문화](#customization)
- [개발자](#for-developers)
- [시스템 유틸리티](#system-utilities)
- [다운로드 및 서빙](#downloading-and-serving)
- [멀티미디어 및 파일 형식](#multimedia-and-file-formats)
- [이름 *](#applications)
- [(주)](#games)
- [Shell 패키지 관리](#shell-package-management)
- [Shell Script 개발](#shell-script-development)
- [제품정보](#guides)
- [**Awesome Zsh**][awesome-zsh]&nbsp; [![Awesome][awesome-badge]][awesome-zsh]
- [**Awesome Fish**][awesome-fish] [![Awesome][awesome-badge]][awesome-fish]
- [**Awesome Bash**][awesome-bash] [![Awesome][awesome-badge]][awesome-bash]
- [기타 멋진 목록](#other-awesome-lists)

## 셸

*기본 쉘을 선택하십시오.*

* [bash](https://www.gnu.org/software/bash/) - GNU 프로젝트의 쉘 (SHell에 대한 맥주)
* [elvish](https://elv.sh/) - 익명 기능 및 데이터 구조와 같은 친절한, 표현식 쉘 기능
* [es](https://wryun.github.io/es-shell/) - 계획 9's에 근거를 둔 확장 가능한 포탄 [사이트맵](https://github.com/rakitzis/rc) 사이트맵
* [fish](https://fishshell.com) - 스마트 및 사용자 친화적 인 명령 줄 쉘
* [ion](https://github.com/redox-os/ion) - 단순하지만 강력하고 구문을 특징으로하는 현대 시스템 쉘. Rust에서 완전히 쓰입니다.
* [ksh93](https://github.com/att/ast) - Korn 쉘
* [mksh](https://github.com/MirBSD/mksh) - MirBSD Korn 쉘
* [murex](https://github.com/lmorg/murex) - 사용성, 안전 및 생산성을 위해 설계된 고급 기능을 갖춘 스마트 쉘 및 스크립트 환경 (예 : smarter DevOps 툴링)
* [ngs](https://github.com/ngs-lang/ngs) - Ops를 위해 특별히 창조된 완전하게 특색짓는 언어. REPL는 개발되고 있습니다.
* [nushell](https://github.com/nushell/nushell) - Rust에서 쓴 현대 쉘
* [oksh](https://github.com/ibara/oksh) - 휴대용 OpenBSD ksh
* [osh](https://www.oilshell.org) - Bash 호환, 새/현대 유닉스 쉘 언어는 오일
* [pdksh](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/bin/ksh/) - 공공 도메인 Korn Shell
* [powershell](https://docs.microsoft.com/en-us/powershell/scripting/overview) 크로스 플랫폼 작업 자동화 및 구성 관리 프레임 워크, 명령 줄 쉘 및 스크립트 언어로 구성된
* [shell++](https://github.com/alexst07/shell-plus-plus) - 친절하고 현대적인 기능 및 객체 중심의 쉘 스크립트 언어
* [shenv](https://github.com/shenv/shenv) - 간단한 쉘 버전 관리
* [tcsh](https://www.tcsh.org/) - C 쉘 파일 이름 완료 및 명령 줄 편집
* [xonsh](https://xon.sh) - Python-ish, BASHwards-looking 쉘 언어 및 명령 프롬프트
* [yash](https://github.com/magicant/yash) - POSIX-compliant 명령줄 포탄은 명령 역사에 근거하여 완료 및 예측을 위한 내장 지원으로
* [zsh](https://www.zsh.org) - 스크립팅 언어의 강력한 쉘

## 명령줄 생산성

*검색, 북마크, 다중화, 그리고 다른 도구는 터미널을 더 생산할 수 있습니다.*

* [AdvancedNewFile](https://github.com/tanrax/terminal-AdvancedNewFile) - recursive 방식으로 파일 및 디렉토리의 빠른 생성. Vim 플러그인에 영감을 주었습니다.
* [ag](https://github.com/ggreer/the_silver_searcher) - 디렉토리 hierarchy를 통해 슈퍼 빠른 문자열 검색
* [aliases](https://github.com/sebglazebrook/aliases) - Contextual, 동적인, bash를 위한 조직적인 별명으로
* [arttime](https://github.com/reportaman/arttime) - 텍스트 아트의 아름다움은 시계, 타이머, pomodoro++ 시간 관리자의 기능을 충족
* [autoenv](https://github.com/hyperupcall/autoenv) - 디렉토리 기반 환경.
* [await](https://github.com/slavaGanzin/await) - 병렬의 명령을 실행하는 단일 바이너리와 그들의 종료를 기다립니다
* [bartib](https://github.com/nikolassv/bartib) - 명령줄을 위한 간단한 timetracker. 일반 텍스트 파일로 모든 트랙 된 활동의 로그를 저장하고 유연한 보고서를 만들 수 있습니다.
* [bashhub](https://github.com/rcaloras/bashhub-client) - :cloud: 클라우드의 Bash 역사. 색인 및 검색.
* [boilr](https://github.com/tmrts/boilr) - 보일러판 템플릿에서 프로젝트를 만들기 위한 blazingly 빠른 CLI 도구.
* [boom](https://github.com/holman/boom) - 명령줄에 있는 상점 연결과 스니펫
* [borg](https://github.com/ok-borg/borg) - bash 명령에 대한 터미널 기반 검색 엔진
* [broot](https://github.com/Canop/broot) - 이사를 탐색하는 더 나은 방법
* [browsh](https://github.com/browsh-org/browsh) - 현대 텍스트 기반 브라우저
* [Buku](https://github.com/jarun/Buku) - 강력한 command-line bookmark 관리자
* [byobu](https://www.byobu.org) - 텍스트 기반 창 관리자 및 단자 다중화기
* [cod](https://github.com/dim-an/cod) — 당신이 invoke 때 배우는 포탄을 위한 완료 daemon `--help` 이름 *
* [CloudClip](https://github.com/skywind3000/CloudClip) - 클라우드, 복사 및 붙여넣기 텍스트의 자체 클립보드는 다른 시스템간에 유의합니다.
* [ddgr](https://github.com/jarun/ddgr) - 터미널에서 DuckDuckGo
* [desk](https://github.com/jamesob/desk) - 포탄을 위한 경량 작업 공간 매니저
* [direnv](https://github.com/direnv/direnv) - 포탄을 위한 환경 스위처, autoenv와 비교하십시오
* [dnote](https://github.com/dnote/dnote) - 다중 장치 동기화 및 웹 인터페이스가있는 간단한 명령 줄 노트북
* [eureka](https://github.com/simeg/eureka/) - :bulb : CLI 도구를 입력하고 터미널을 떠나지 않고 아이디어를 저장
* [fasd](https://github.com/clvv/fasd) - Command-line Productivity booster, 파일 및 디렉토리에 빠른 액세스를 제공합니다.
* [fd](https://github.com/sharkdp/fd) - 간단하고 빠르고 사용자 친화적 인 대안.
* [foxy](https://github.com/s-p-k/foxy) - Firefox 및 서핑 브라우저의 일반 텍스트 북마크.
* [fselect](https://github.com/jhspetersson/fselect) - SQL-like queries 파일 찾기.
* [funky](https://github.com/bbugyi200/funky) - 더 강력하고 유연한 쉘 기능의 기능을 확장합니다.
* [fz](https://github.com/changyuheng/fz) - z를 위한 이음새가 없는 fuzzy 탭 완료
* [fzf](https://github.com/junegunn/fzf) - 명령행 fuzzy 찾기
* [gitmux](https://github.com/arl/gitmux) - Tmux 상태 표시 줄의 Git 상태 표시
* [googler](https://github.com/jarun/googler) - Google Search, Google 사이트 검색, 터미널에서 Google 뉴스
* [googlr](https://github.com/Astranno/googlr) - 터미널에서 Google을 검색 할 수있는 명령 줄 도구.
* [has](https://github.com/kdabir/has) - `has` 다양한 명령 줄 도구와 경로의 존재를 확인하는 데 도움이
* [how2](https://github.com/santinic/how2) - `how2` unix 포탄에서 무언가를 하는 가장 간단한 방법을 찾아내십시오. 그것은 좋아 `man`,하지만 당신은 자연 언어로 그것을 쿼리 할 수 있습니다.
* [navi](https://github.com/denisidoro/navi) - 명령줄에 대한 대화식 속임수 도구
* [hhighlighter](https://github.com/paoloantinori/hhighlighter) - 명령 출력의 단어를 색상화
* [hr](https://github.com/LuRsT/hr) - `<hr />` 당신의 맨끝을 위해
* [hss](https://github.com/six-ddc/hss) - 자동 완성 및 비동기 실행을 특징으로하는 대화형 병렬 ssh 클라이언트
* [hstr](https://github.com/dvorka/hstr) - Bash History 제안 상자
* [k](https://github.com/supercrabtree/k) - k는 더 읽기 쉬운 디렉토리 목록을 만들기 위해 Zsh 스크립트, Git 상태 추가, fileweight 색상 및 rotting 날짜
* [k alias](https://github.com/lingtalfi/k) - kool aliases (그리고 더 많은) 간단한 one-liner 작업
* [lf](https://github.com/gokcehan/lf) - Ranger에서 영감을 받은 Go에서 작성된 터미널 파일 관리자
* [lf.sh](https://github.com/suewonjp/lf.sh) - 몇 번 입력하여 파일을 빠르게 검색하고 더 많은 작업을 수행 (그립, 클립 보드에 경로 복사, 등)
* [lowcharts](https://github.com/juan-leon/lowcharts) - 맨끝에 있는 낮은 해결책 도표를 끌기
* [Lmod](https://lmod.readthedocs.io/en/latest/) - Tcl 기반 모듈을 강화하는 Lua 기반 환경 모듈 (모듈과 비교)
* [loop](https://github.com/Miserlou/Loop) - 한 라이너와 복잡한 루프를 쓰기 및 제어
* [marker](https://github.com/pindexis/marker) - 쉘 명령의 책갈피
* [mackup](https://github.com/lra/mackup/) - 동기화에서 애플리케이션 설정 유지 (OS X/Linux)
* [mcfly](https://github.com/cantino/mcfly) - 당신의 포탄 역사를 통해 비행. 큰 스크로!
* [modules](http://modules.sourceforge.net/) - 쉘 환경을 관리하는 Classical Tcl 기반 환경 모듈 (Lmod, direnv 및 autoenv와 비교)
* [nnn](https://github.com/jarun/nnn) - 파일 브라우저 및 디스크 사용 분석기 우수한 데스크톱 통합
* [ok-sh](https://github.com/secretGeek/ok-bash) - 당신은 많은 다른 프로젝트에 작동합니까? 각 프로젝트에서 해당 프로젝트에 특정한 명령어가 있습니까? .ok 파일이 필요합니다.
* [parallel](https://www.gnu.org/software/parallel/) - 표준 입력을 병렬로 설정하고 실행
* [pass](https://www.passwordstore.org/) - GPG 암호화 및 옵션 git 통합 명령줄에서 암호 관리.
* [pathpicker](https://github.com/facebook/PathPicker) - grep, searches, git 등과 같은 입력을 수락합니다. 입력의 결과로 파일을 선택 할 수 있으므로 명령에 인수로 열거나 제공 할 수 있습니다.
* [pdd](https://github.com/jarun/pdd) - 작은 날짜, 타이머를 가진 시간 diff 계산기
* [percol](https://github.com/mooz/percol) - UNIX 포탄의 전통적인 관 개념에 상호 작용하는 거르기의 풍미를 추가하십시오
* [q](https://github.com/cal2195/q) - Bash 및 Zsh Shell의 매크로 등록과 같은 Vim
* [qfc](https://github.com/pindexis/qfc) - Bash 및 Zsh 용 파일 컴파일 위젯
* [resh](https://github.com/curusarn/resh) - Zsh 및 Bash의 컨텍스트 쉘 역사
* [rg](https://github.com/BurntSushi/ripgrep) - ripgrep은 GNU grep의 원료 속도를 가진 은 수색기의 가용성을 결합하는 선 동쪽으로 향하게 한 수색 공구입니다
* [screen](https://www.gnu.org/software/screen/) - GNU 터미널 다중화기
* [shell-history](https://github.com/pawamoy/shell-history) - Highcharts와 쉘 사용 시각화
* [SHML](https://github.com/odb/shml) - 터미널의 스타일 프레임워크 (Shell Markup Language)
* [slugify](https://github.com/benlinton/slugify) - 파일명과 디렉토리를 웹 친화적 형식으로 변환하는 명령
* [sman](https://github.com/tokozedg/sman) - :bug: 명령행 스니펫 관리자
* [spark](https://github.com/holman/spark) - 당신의 포탄에  
* [spark.fish](https://github.com/jorgebucaran/spark.fish) -  - Sparkline 발전기
* [sheet](https://github.com/oscardelben/sheet) - 명령줄의 텍스트 스니펫
* [spot](https://github.com/rauchg/spot) - Tiny 파일 검색 유틸리티
- [snips](https://github.com/srijanshetty/snips) - 코드의 스니펫을 관리하는 명령줄 도구.
* [sqlline](https://github.com/julianhyde/sqlline) - JDBC (다중, 완료, 강조, 방언 지원)를 통해 관련 데이터베이스에 SQL을 발급하는 Shell
* [sshfs](https://github.com/osxfuse/sshfs) - SSH에 원격 파일 시스템을 장착하기위한 도구
* [sudocabulary](https://github.com/badarsh2/Sudocabulary) - 당신의 맨끝에서 영어 어휘를 배우십시오
* [surfraw](https://gitlab.com/surfraw/Surfraw) - 특정 사이트를 검색하고 브라우저없이 터미널에서 웹을 검색하십시오.
* [task-manager](https://github.com/lingtalfi/task-manager) - 단지 2 개 또는 3 개의 키 입력으로 모든 스크립트를 실행합니다.
* [td-cli](https://github.com/darrikonn/td-cli) - 여러 프로젝트를 통해 todo 명령행 관리자를 구성하고 관리합니다.
* [tere](https://github.com/mgunyho/tere) - cd + ls에 더 빠른 대안
* [thefuck](https://github.com/nvbn/thefuck) - 명령을 기억하기 쉬운 쉘 실수를 수정
* [tldr](https://github.com/raylee/tldr-sh-client) - tldr, simplified 및 커뮤니티 중심의 맨 페이지에 대한 완벽한 기능의 bash 클라이언트
* [tmux](https://tmux.github.io/) - 놀라운 터미널 다중화기
* [undollar](https://github.com/xtyrrell/undollar) - undollar는 단말에 붙여넣는 명령의 끝을 끄는 달러 기호를
* [usql](https://github.com/xo/usql) - SQL 데이터베이스용 Universal command-line 인터페이스.
* [v](https://github.com/rupa/v) - vim 용 z.
* [wemux](https://github.com/zolrath/wemux) - Multi-User Tmux는 쉬운 만들었습니다
* [xiki](https://github.com/trogdoro/xiki) - 쉘 콘솔을 더 친절하고 강력한
* [xplr](https://github.com/sayanarijit/xplr) - 해킹 가능, 최소, 빠른 TUI 파일 탐험가
* [xsv](https://github.com/BurntSushi/xsv) - Rust에서 작성된 빠른 CSV 명령 줄 툴킷
* [xxh](https://github.com/xxh/xxh) - 당신이 SSH를 통해 갈 수있는 좋아하는 쉘을 가져옵니다.

### 디렉터리 탐색

* [aliasme](https://github.com/Jintin/aliasme) - 디렉토리를 신속하게 변경할 수 있는 alias helper
* [autojump](https://github.com/wting/autojump) - 학습하는 cd 명령 - 명령줄에서 쉽게 디렉터리를 탐색
* [bashmarks](https://github.com/huyng/bashmarks) - 쉘 디렉토리 북마크
* [bd](https://github.com/vigneshwaranr/bd) - 빠른 부모 디렉토리로 돌아가기
* [commacd](https://github.com/shyiko/commacd) - Bash에서 이동하는 빠른 방법
* [enhancd](https://github.com/b4b4r07/enhancd) -:rocket: 상호 작용하는 여과기를 가진 차세대 CD 명령
* [goto](https://github.com/iridakos/goto) - 자동 completion을 지원하는 aliased Directories에 항법을 위한 포탄 실용
* [jump](https://github.com/gsamokovarov/jump) - Jump는 당신의 습관을 학습하여 파일 시스템을 빠르게 탐색하는 데 도움이됩니다.
* [lazy-cd](https://github.com/pedramamini/lazy-cd) - 파일 시스템의 책갈피 항법을 위한 간단한 bash 명령, bash-completion 완료.
* [up](https://github.com/shannonmoeller/up) - 이름이나 수로에 의해 지명 된 감독; bash, zsh 및 물고기에 대한.
* [z](https://github.com/rupa/z) - z는 새로운 j, 요
* [z.lua](https://github.com/skywind3000/z.lua) - 당신의 습관을 학습하여 더 빠르게 탐색하는 데 도움이되는 새로운 CD 명령
* [zoxide](https://github.com/ajeetdsouza/zoxide) - 파일시스템을 탐색하는 빠른 방법, Rust로 작성
* [zpyi](https://github.com/sakshamsharma/zpyi) - Zsh의 Python - 쉘에서 쉽게 python 스크립트

## 사용자 지정

*사용자 정의 프롬프트, 색상 테마, 기타. *

* [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) - 미니멀리즘 Aphrodite 테마 (prompt) , 생선 및 zsh에서 작동 섹시한 터미널에 대 한
* [base16-builder](https://github.com/base16-builder/base16-builder) - Base16-빌더
* [bash-full-of-colors](https://github.com/slomkowski/bash-full-of-colors) - 스크린, tmux, git 지원 및 더 많은 것을 가진 강력한 신속한
* [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) - Git 사용자를 위한 비공식적이고 공상 비쉬 프롬프트
* [bash-powerline](https://github.com/riobard/bash-powerline) - Pure Bash 스크립트에서 Powerline-style Bash 프롬프트
* [bashstrap](https://github.com/barryclark/bashstrap) - OSX 터미널을 spruce하는 빠른 방법
* [bullet-train-oh-my-zsh-theme](https://github.com/caiogondim/bullet-train.zsh) - :bullettrain side : Powerline Vim 플러그인을 기반으로 한 oh-my-zsh 쉘 테마
* [emojify](https://github.com/mrowa44/emojify) 명령줄의 Emoji :scream :
* [flatui-terminal-theme](https://dribbble.com/shots/1021755-Flat-UI-Terminal-Theme) - 맨끝을 위한 Nicer 색깔
* [geometry](https://github.com/geometry-zsh/geometry) - 일부 기능이 왼쪽 프롬프트 또는 (async) 오른쪽 프롬프트에 추가 될 수있는 최소 ZSH 테마.
* [git-prompt](https://github.com/lvv/git-prompt) - Git, SVN 및 HG 모듈로 Bash 프롬프트
* [gittify](https://github.com/momeni/gittify) - 다채로운 Bash 신속한 + 맞춤형 Git aliases
* [Gogh - Color Scheme](https://github.com/Mayccoll/Gogh) - Gnome Terminal의 색상 계획
* [liquidprompt](https://github.com/nojhan/liquidprompt) - 전체 기능 &Bash를 위한 주의깊은 디자인한 적응 신속한 &사이트맵
* [mysql-colorize](https://github.com/zpm-zsh/mysql-colorize) - mysql comand-line 클라이언트를 위한 색화
* [oh-my-git](https://github.com/arialdomartini/oh-my-git) - bash 및 zsh에 대한 의견 git 프롬프트
* [oh-my-posh](https://ohmyposh.dev) - 모든 쉘 및 플랫폼에 대한 Prompt 테마 엔진 이동.
* [polyglot](https://github.com/agkozak/polyglot) - bash, zsh, ksh, mksh, pdksh, oksh, dash, yash, busybox sh 및 osh에서 작동하는 비공식적인 Git 프롬프트
* [powerlevel10k](https://github.com/romkatv/powerlevel10k) - 슈퍼 유연한 멋진 동력선 ZSH 테마
* [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt) - 색상, Git 상태 및 Git 지점으로 Bash 프롬프트
* [starship](https://starship.rs/) - 빠른, customisable, 녹에서 쓴 교차 포탄 신속한
* [synth-shell](https://github.com/andresgongora/synth-shell) - 사용자 정의 상태 보고서와 멋진 배쉬 프롬프트를 가진 Greeter

## 개발자용

*명령행 개발, 버전 제어 및 배포.*

* [1Password SSH Agent](https://developer.1password.com/docs/ssh/) - Git 및 SSH 워크플로우를 1Password를 사용하여 생체 인식 잠금 해제
* [ack](https://beyondgrep.com/) - 소스 코드에 최적화 된 grep-like 검색 도구.
* [add-gitignore](https://github.com/TejasQ/add-gitignore) - .gitignore 를 생성하는 대화 형 CLI는 당신의 필요에 따라 프로젝트.
* [bcal](https://github.com/jarun/bcal) - 스토리지 변환 및 계산을위한 Byte CALculator
* [bitwise](https://github.com/mellowcandle/bitwise) - 터미널 기반 대화식 비트 조작기.
* [bocker](https://github.com/p8952/bocker) - Bash의 100 라인에서 구현된 Docker
* [cloc](https://github.com/AlDanial/cloc) - 코드의 개수
* [doclt](https://github.com/omgimanerd/doclt) - Digital Ocean의 명령행 인터페이스
* [dokku](https://github.com/dokku/dokku) - 도커 전원 미니 - 호쿠. 지금까지 본 가장 작은 PaaS 구현.
* [forgit](https://github.com/wfxr/forgit) - 유틸리티 도구 `git` fuzzy finder fzf를 활용하십시오.
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - 많은 Git 여분 유틸리티. Churn, 컷 브레이크, 향상된 merge 및 더 많은.
* [git-extras](https://github.com/tj/git-extras) - Git 유틸리티 -- 재포 요약, repl, changelog 인구, 저자는 비율을 커밋하고 더 많은
* [git-open](https://github.com/paulirish/git-open) - 유형 `git open` GitHub 페이지 또는 웹 사이트를 열고 브라우저에 저장소
* [git-quick-stats](https://github.com/arzzen/git-quick-stats) - Git 빠른 통계는 git 저장소의 다양한 통계에 접근하는 간단하고 효율적인 방법입니다.
* [git-semver](https://github.com/markchalloner/git-semver) - semantic versioning 및 changelog 검증을 위한 Git 플러그인
* [git-sh](https://github.com/rtomayko/git-sh) - Git 작업에 적합한 맞춤형 Bash 환경
* [gita](https://github.com/nosarthur/gita) - 여러 git 저장소를 관리하는 명령행 도구.
* [hub](https://github.com/github/hub) - 허브는 git에서 승리 도움이됩니다.
* [just](https://github.com/casey/just) - Project-specific 명령어를 저장하고 실행하는 Task runner.
* [licins](https://github.com/dogoncouch/licins) - 소스 코드로 주석 소프트웨어 라이센스를 삽입합니다.
* [mkdkr](https://github.com/rosineygp/mkdkr) - Makefile + Docker = CI 파이프 라인
* [mr](https://myrepos.branchable.com) - 다중 저장소 관리 도구
* [nve](https://github.com/ehmicky/nve) - 특정 Node.js 버전의 명령을 실행합니다.
* [overcommit](https://github.com/sds/overcommit) - 완전 구성 및 확장 가능한 Git Hook Manager
* [pre-commit](https://pre-commit.com) - Multi-language pre-commit Hooks 관리 및 유지를위한 프레임 워크
* [rebound](https://github.com/shobrook/rebound) - 즉시 컴파일러 오류를 얻을 때 터미널에서 Stack Overflow 결과를 찾습니다.
* [repren](https://github.com/jlevy/repren) - Command-line search-and-replace 및 파일 이름 군대 칼
* [slap](https://github.com/slap-editor/slap) - Node.js에서 실행되는 단말 기반 텍스트 편집기
* [shipit](https://github.com/sapegin/shipit) - Minimalistic SSH 배포
* [starring](https://github.com/ritz078/starring) - GitHub에서 사용하는 npm-packages의 자동 별입니다.
* [tag](https://github.com/aykamko/tag) - 즉시 당신의 ag 경기에 점프.
* [trunk](https://www.npmjs.com/package/@trunkio/launcher) - Blazingly 빠른 메타 코드 검사기 및 formatter
* [vmn](https://github.com/final-israel/vmn) - git-based 자동적인 versioning 및 국가 회복 해결책은 언어 또는 건축술에 임신합니다
* [wipe-modules](https://github.com/bntzio/wipe-modules) - 비활동적인 프로젝트의 node modules 폴더를 제거하는 작은 대리인

## 시스템 유틸리티

*시스템 관리, 시스템 디버깅 및 파일 및 프로세스 관리를 포함한 OS 관련 도구.*

* [atop](https://www.atoptool.nl) - 모든 프로세스의 활동을 보고할 수 있는 ASCII 풀스크린 성능 모니터
* [bat](https://github.com/sharkdp/bat) - 아 `cat` 날개가있는 클론
* [bmon](https://github.com/tgraf/bmon) - 실시간 네트워크 대역폭 모니터 및 비율 estimator
* [btop](https://github.com/aristocratos/btop) - Linux/OSX/FreeBSD 리소스 모니터
* [catcli](https://github.com/deadc0de6/catcli) - 오프라인 데이터의 명령 줄 카탈로그 도구
* [ccat](https://github.com/owenthereal/ccat) - ccat는 색화 고양이입니다. 그것은 고양이와 유사하지만 syntax 강조와 콘텐츠를 표시합니다.
* [exa](https://github.com/ogham/exa) - 현대 버전의 `ls`.
* [progress](https://github.com/Xfennec/progress) - Linux 도구가 진행 상황을 보여줍니다. `cp`, `rm`, `dd`, 그리고 더...
* [stronghold](https://github.com/alichtman/stronghold) - 쉽게 터미널에서 MacOS 보안 설정을 구성합니다.
* [glances](https://github.com/nicolargo/glances) - 당신의 체계에 눈
* [goaccess](https://github.com/allinurl/goaccess) - GoAccess는 \*nix 시스템의 터미널에서 실행되는 실시간 웹 로그 분석기 및 대화형 뷰어입니다.
* [hblock](https://github.com/hectorm/hblock) - Hosts-file 기반 광고 차단제
* [histstat](https://github.com/vesche/histstat) - netstat의 역사
* [htop](https://github.com/hishamhm/htop) - 더 나은 것을 목표로하는 ncurses 기반 대화 형 프로세스 뷰어 `top`
* [lnav](https://lnav.org) - 소규모의 고급 로그 파일 뷰어
* [logdissect](https://github.com/dogoncouch/logdissect) - 로그 파일 및 기타 데이터를 분석하기위한 CLI 유틸리티 및 Python API.
* [ls++](https://github.com/trapd00r/ls--) - 스테로이드에 착색된 ls
* [lsd](https://github.com/Peltoche/lsd) - LSDeluxe, 색상, 아이콘, 트리뷰 및 더 많은 포맷 옵션과 같은 추가 기능의 많은 GNU ls를 다시 작성합니다.
* [lsp](https://github.com/dborzov/lsp) - 개선 `ls`, 일반 언어 및 지능형 파일 그룹에 파일 설명과
* [maza](https://github.com/tanrax/maza-ad-blocking) - 지역 광고 차단제. Pi-hole와 같은 지역 및 운영 체제를 사용.
* [mtr](https://github.com/traviscross/mtr) - 단일 네트워크 진단 도구에서 'traceroute' 및 'ping' 프로그램의 기능.
* [ncdu](https://dev.yorhel.nl/ncdu) - NCurses 디스크 사용
* [nmtui](https://github.com/NetworkManager/NetworkManager) - NetworkManager 제어를 위한 텍스트 사용자 인터페이스
* [powertop](https://github.com/fenrus75/powertop) - 배터리 / 전원 사용 및 장치 통계 모니터링 명령 줄 도구, 튜닝 옵션.
* [prettyping](https://github.com/denilsonsa/prettyping) - 산출을 만들기 `ping` prettier, 더 다채로운, 더 조밀하고, 더 읽기 쉬운.
* [procdog](https://github.com/jlevy/procdog) - 서버와 같은 장기적인 프로세스의 경량 명령행 제어
* [quick-secure](https://github.com/marshyski/quick-secure) - 빠른 보안 및 하드 UNIX / Linux 시스템
* [rng](https://github.com/nickolasburr/rng) - 파일 또는 stdin에서 stdout에 선의 사본 범위.
* [tiptop](https://github.com/nschloe/tiptop) - 그래픽 명령행 시스템 모니터.
* [wifi-wand](https://github.com/keithrbennett/wifiwand) - MacOS에서 WiFi 관리를위한 Ruby 명령 줄 응용 프로그램 (설치 `gem install wifi-wand`)
* [xiringuito](https://github.com/ivanilves/xiringuito) - SSH 기반 "난방을위한 VPN"

## 다운로드 및 제공

*쉘 스크립트에서 작성된 자체 호스팅, 경량 서버 및 네트워킹 도구.*

* [aria2](https://github.com/aria2/aria2) - aria2는 경량 다 protocol입니다 &다중 소스, 크로스 플랫폼 다운로드 유틸리티는 command-line에서 작동합니다. HTTP/HTTPS, FTP, BitTorrent 및 Metalink를 지원합니다.
* [balls](https://github.com/jneen/balls) - 공에 Bash
* [bashttpd](https://github.com/avleen/bashttpd) - Bash에서 작성된 웹 서버
* [bashhub-server](https://github.com/nicksherron/bashhub-server) - 개인 클라우드 쉘 역사. bashhub에 대한 오픈 소스 서버
* [bitpocket](https://github.com/sickill/bitpocket) - "DIY Dropbox" 또는 "2way 디렉토리 (r) 적절한 삭제와 동기화"
* [Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader) - Dropbox Uploader는 Dropbox에서 업로드, 다운로드, 목록 또는 삭제 파일에 사용될 수있는 Bash 스크립트입니다.
* [httpie](https://github.com/httpie/httpie) - HTTPie는 사용자 친화적 인 cURL 교체 명령줄 HTTP 클라이언트입니다.
* [HTTPLab](https://github.com/gchaincl/httplab) - 대화형 웹 서버는 HTTP 요청과 forge 응답을 검사합니다.
* [Kapow!](https://github.com/BBVA/kapow) - 스크립트를 할 수 있다면 HTTP를 할 수 있습니다.
* [ngincat](https://github.com/jaburns/ngincat) - netcat을 사용하여 Tiny Bash HTTP 서버
* [resty](https://github.com/micha/resty) - 파이프라인에서 사용할 수 있는 Little command line REST 클라이언트
* [shell2http](https://github.com/msoap/shell2http) - HTTP-server는 쉘 명령을 실행합니다. 개발, prototyping 또는 원격 제어를 위해 디자인하는
* [tshare](https://github.com/trikko/tshare) - commandline에서 파일 공유.
* [vesper](https://github.com/chris-rock/vesper) -  Vesper는 Bash/유닉스 포탄을 위한 HTTP 기구입니다
* [xh](https://github.com/ducaale/xh) - HTTP 요청을 보내기 위한 친절하고 빠른 도구
* [yt-dlp](https://github.com/yt-dlp/yt-dlp) - YouTube.com 및 기타 비디오 사이트에서 비디오를 다운로드하는 명령줄 프로그램

## 멀티미디어 및 파일 형식

*비디오 및 오디오 파일을 처리하기위한 도구.*

* [adb-export](https://github.com/sromku/adb-export) - CSV 형식으로 Android 콘텐츠 제공업체 수출
* [Android-Kitchen](https://github.com/dsixda/Android-Kitchen) - Android ROM 사용자 정의에 대한 텍스트 기반 주방. 쉘 스크립트를 사용 하 고 Cygwin/OS X/Linux와 함께 작동
* [Beets](https://github.com/beetbox/beets) - 음악 라이브러리 관리자 및 MusicBrainz tagger
* [cmus](https://github.com/cmus/cmus) - 크로스 플랫폼 cli 오디오 플레이어.
* [dasel](https://github.com/tomwright/dasel) - 명령줄에서 selectors를 사용하여 Query 및 업데이트 데이터 구조. 연결하기 [₢ 킹](https://github.com/stedolan/jq) / [₢ 킹](https://github.com/kislyuk/yq) 하지만 JSON, YAML, TOML 및 XML을 지원하며, 0개의 런타임 의존성.
* [dzr](https://github.com/yne/dzr) - Cross-platform Deezer.com 오디오 플레이어.
* [fx](https://github.com/antonmedv/fx) - anononymus JavaScript 기능에 의해 명령 줄 JSON 처리 도구
* [gifgen](https://github.com/lukechilds/gifgen) - 간단한 고품질 GIF 인코딩
* [image-scraper](https://github.com/sananth12/ImageScraper) - 많은 기능을 가진 멋진 명령 줄 이미지 스크레이퍼.
* [imgp](https://github.com/jarun/imgp) - 빠른 배치 이미지 resizer 및 회전 장치 Blazing
* [jc](https://github.com/kellyjonbrazil/jc) - 명령 출력, 파일 유형 및 스크립트에서 JSON 또는 YAML에 공통 문자열을 변환합니다.
* [jo](https://github.com/jpmens/jo) - 명령줄 인수에서 JSON 객체를 생성하는 작은 유틸리티.
* [jq](https://github.com/stedolan/jq) - json 데이터에 대한 Sed. 슬라이딩 및 필터 및 맵을 사용하여 구조화 된 데이터를 변환 할 수 있습니다.
* [korkut](https://github.com/oguzhaninan/korkut) - 명령줄에서 빠르고 간단한 이미지 처리.
* [library](https://github.com/chapmanjacobd/library) - 음악, 비디오, 이미지, 온라인 미디어 폴더에 SQLITE 데이터베이스를 만듭니다. Plex와 같은 미디어를 재생하고 추적하지만 많은 정렬 옵션과 CLI 전용 인터페이스.
* [mpv](https://mpv.io/) - 쉘에서 가장 오디오 및 비디오 형식 (ASCII 문자 사용)뿐만 아니라 GUI에서 재생할 수 있습니다.
* [nehm](https://github.com/bogem/nehm) - 콘솔 도구, 다운로드, IDv3 태그를 설정하고 iTunes에 추가 (당신이 그것을 사용하는 경우) 편리한 방법으로 SoundCloud 좋아하는
* [PiCAST](https://github.com/lanceseidman/PiCAST) - PiCAST는 장치처럼 Chromecast에 $ 35 라즈베리 파이를 회전
* [sejda](https://github.com/torakiki/sejda/) - PDF 문서의 명령 줄 조작 (분쇄, 병합, 회전, JPG로 변환, 텍스트 추출 등)
* [visidata](https://github.com/saulpw/visidata) - 탐구하고 배열하는 자료 (csv/json/xml/xls/yaml/etc)를 위한 끝 스프레드 시트 멀티툴
* [xidel](https://github.com/benibela/xidel/) - 필터, 지도 및 HTML/XML/JSON 데이터를 (Turing-complete) XPath 및 XQuery로 만듭니다.
* [xmlstarlet](http://xmlstar.sourceforge.net/) - 명령행 XML 포맷, 필터링 및 조작을 위한 오래된 강력한 도구.
* [yq](https://github.com/mikefarah/yq) - yq는 휴대용 명령행 YAML 가공업자입니다

## 애플리케이션

*명령행 기반 애플리케이션 또는 기존 서비스에 대한 명령행 접근.*

* [ansiweather](https://github.com/fcambus/ansiweather) - ANSI 색깔과 Unicode 상징과 더불어 맨끝에 있는 날씨
* [awless](https://github.com/wallix/awless) - AWS를 관리하기 위한 강력하고 혁신적인 작은 표면 CLI.
* [bashblog](https://github.com/cfenollosa/bashblog) - 블로그 게시물을 처리하는 Bash 스크립트
* [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - 당신의 코드의 아름다운 이미지 - 오른쪽에서 맨끝.
* [choosealicense-cli](https://github.com/lord63/choosealicense-cli) - 당신의 맨끝의 안락에서 OSS 면허를 선택하십시오
* [cointop](https://github.com/miguelmota/cointop) - cryptocurrencies 추적을위한 가장 빠르고 가장 상호 작용하는 터미널 기반 UI 응용 프로그램
* [dstask](https://github.com/naggie/dstask) - 작업 당 git-based sync + markdown 메모를 가진 단일 바이너리 터미널 기반 TODO 관리자
* [editly](https://github.com/mifi/editly) - 명령줄 비디오 편집기
* [facebook-cli](https://github.com/specious/facebook-cli) - Facebook 명령줄 도구
* [fanyi](https://github.com/afc163/fanyi) - 중국어로 번역
* [gcalcli](https://github.com/insanum/gcalcli) - Google 캘린더 명령 줄 인터페이스
* [geeknote](https://github.com/VitaliyRodnenko/geeknote) - 커맨드 라인 evernote 클라이언트
* [haxor-news](https://github.com/donnemartin/haxor-news) - 해커 같은 해커 뉴스
* [hn-cli](https://github.com/rafaelrinaldi/hn-cli) - 당신의 맨끝의 안락에서 Hacker News를 찾아보십시오
* [iponmap](https://github.com/nogizhopaboroda/iponmap) - IP 주소를 사용하여 세계지도에 그리기
* [isitup](https://github.com/lord63/isitup) - 웹 사이트가 위로 또는 아래로 있는지 확인하십시오.
* [jrnl](https://github.com/jrnl-org/jrnl) - 일반 텍스트 파일에 저널을 저장하는 간단한 명령 줄 저널 응용
* [kanban.bash](https://github.com/coderofsalvation/kanban.bash) - 최소한의 생산성 배쉬 해커(csv-based)의 commandline asciii kanban board
* [ledger](https://github.com/ledger/ledger) - 명령줄 회계
* [licen](https://github.com/lord63/licen) - 라이센스를 생성. Yet another lice, 그러나 Jinja2와 docopt로 구현
* [md2png](https://github.com/weaming/md2png) - PNG 이미지로 Markdown 변환
* [moviemon](https://github.com/iCHAIT/moviemon) - 명령줄 내의 영화에 관한 모든 것.
* [nomino](https://github.com/yaa110/nomino) - regex, 정렬 및 맵 파일 옵션을 사용하여 Batch rename 유틸리티.
* [pcalc](https://github.com/alt-romes/programmer-calculator) - 여러 숫자 표현, 크기 및 비트에 전체 닫는 프로그래머를 위해 만든 계산기.
* [pockyt](https://github.com/achembarpu/pockyt) - 읽기, 관리, 자동화 [포켓 포켓](https://getpocket.com) 회사 소개
* [pushblast](https://github.com/alebcay/pushblast) - Shell 프로그램 종료시 PushBullet 알림 받기
* [pushbullet-bash](https://github.com/Red5d/pushbullet-bash) - PushBullet API에 Bash 인터페이스
* [ranger](https://github.com/ranger/ranger) - VI 키 바인딩이있는 콘솔 파일 관리자.
* [Reddit Terminal Viewer](https://github.com/michael-lazar/rtv) - 터미널에서 Reddit 검색
* [SAWS](https://github.com/donnemartin/saws) - 슈퍼 충전 AWS CLI
* [taskbook](https://github.com/klaussinani/taskbook) - 작업, 보드 &명령줄 서식지의 메모
* [taskwarrior](https://taskwarrior.org/) - 명령행 TODO 목록 관리자
* [terjira](https://github.com/keepcosmos/terjira) - Jira를 위한 명령 선 힘 공구
* [ticker](https://github.com/achannarasappa/ticker) - 실시간 업데이트 및 위치 추적을 통한 Terminal Stock ticker
* [vl](https://github.com/ellisonleao/vl) - 텍스트 문서의 URL 링크 검사기
* [wego](https://github.com/schachmat/wego) - 터미널의 날씨 앱
* [whales](https://github.com/Gueils/whales) - 당신의 신청을 자동적으로 도포하는 공구
* [whereami](https://github.com/rafaelrinaldi/whereami) - CLI에서 위치 정보를 얻으십시오.
* [wttr.in](https://github.com/chubin/wttr.in) - :partly sunny : 날씨를 확인하는 올바른 방법 (curl wttr.in)

## 게임

*모든 일과 놀이는 당신의 하루를 보내는 친구 방법입니다.*

* [bash2048](https://github.com/mydzor/bash2048) - 2048 게임의 Bash 구현
* [minesweeper](https://github.com/feherke/Bash-script/tree/master/minesweeper) - 광산의 Bash 구현
* [nudoku](https://github.com/jubalh/nudoku) - C에서 작성된 ncurses 기반 sudoku 게임
* [piu-piu](https://github.com/vaniacer/piu-piu-SH) - 멀티플레이어 모드로 bash의 수평 스크롤 게임!
* [sedtris](https://github.com/uuner/sedtris) - 테트리스
* [sed-scripts](https://github.com/aureliojargas/sed-scripts) - Arkanoid 및 Sokoban sed를 사용하여 작성
* [SHTAP](https://notimetoplay.org/engines/shtap/) - Bash 4를위한 재사용 가능한 텍스트 모험 엔진
* [tty-solitaire](https://github.com/mpereira/tty-solitaire) - 당신의 맨끝에 있는 solitaire!

## Shell 패키지 관리

*여러 쉘 구성을 관리하기위한 도구. zsh-specific 도구의 경우 Zsh 섹션을 참조하십시오.*

* [bash-it](https://github.com/Bash-it/bash-it) - 커뮤니티 Bash 프레임 워크
* [basher](https://github.com/basherpm/basher) - 쉘 스크립트에 대한 패키지 관리자
* [bashing](https://github.com/xsc/bashing) - 조각으로 스매싱 배쉬
* [bpkg](https://www.bpkg.sh/) - JavaScript는 npm, Ruby에는 Gems, Python이 pip을 가지고 있으며 이제 Shell은 bpkg을 가지고 있습니다.
* [dotdrop](https://github.com/deadc0de6/dotdrop) - 한 번 dotfiles를 저장하고, 모든 곳에서 배포하십시오.
* [dotfiler](https://github.com/svetlyak40wt/dotfiler) – Shell agnostic git based dotfiles 패키지 관리자, Python에서 작성.
* [fresh](https://github.com/freshshell/fresh) - 신선한 dotfiles 유지
* [homeshick](https://github.com/andsens/homeshick) - Bash에서 쓴 Git dotfile 동기화기
* [shallow-backup](https://github.com/alichtman/shallow-backup) - 설치 패키지, dotfiles 등의 경량 문서화
* [shundle](https://github.com/javier-lopez/shundle) - 쉘 스크립트의 플러그인 관리자
* [vcsh](https://github.com/RichiH/vcsh) - Git에 기반한 Config Manager
* [yadm](https://yadm.io/) - Git-based dotfiles manager 지원 암호화, 교체, 및 부트 스트랩

## Shell 스크립트 개발

*쓰기, 개선, 또는 Bash 또는 다른 쉘 스크립트를 구성하는 도구 *

* [ansi](https://github.com/fidian/ansi) - 순수한 bash의 ANSI 탈출 코드 - 텍스트 색상 변경, 커서 위치, 훨씬 더
* [assert.sh](https://github.com/lehmannro/assert.sh) - Bash 단위 테스트 프레임
* [bashew](https://github.com/pforret/bashew) - bash 스크립트 제작자 - 작은 독립 스크립트에서 복잡한 프로젝트로 CI/CD 및 테스트
* [bashful](https://github.com/jmcantrell/bashful) - Bash 스크립트를 간단하게 하는 라이브러리 모음
* [Bashlets](https://github.com/reale/bashlets) - Bash의 모듈식 확장 도구 상자
* [bashly](https://bashly.dannyb.co/) - Bash 명령 줄 프레임 워크 및 CLI 생성기
* [bashmanager](https://github.com/lingtalfi/bashmanager) - 명령 줄 도구를 만들기위한 미니 bash 프레임 워크
* [bashwithnails](https://github.com/mindaugasbarysas/bashwithnails) - Bash Framework는 테스트, 의존성 관리와 재미를 위해 작성되었습니다. &포장 세부 사항
* [bash-language-server](https://github.com/bash-lsp/bash-language-server) - [사이트맵](https://microsoft.github.io/language-server-protocol/)- 기반의 Bash 언어 서버
* [bash-modules](https://github.com/vlisivka/bash-modules) - 개발 기능 [unofficial 엄격한 형태](http://redsymbol.net/articles/unofficial-bash-strict-mode/) 지원하다
* [bats](https://github.com/bats-core/bats-core) - Bash 자동화 테스트 시스템
* [composure](https://github.com/erichs/composure) - Compose, 문서, 버전 및 쉘 기능을 구성
* [crash](https://github.com/molovo/crash) - Proper 오류 처리, 예외 및 ZSH에 대한 시도 / 캐치
* [critic.sh](https://github.com/Checksum/critic.sh) - Bash에 대한 간단한 테스트 프레임워크를 적용 보고
* [dispatch](https://github.com/Mosai/workshop/blob/master/doc/dispatch.md) - 휴대용 쉘 스크립트의 50 라인의 명령 줄 인수 파서.
* [esh](https://github.com/jirutka/esh) - POSIX 쉘의 ~290 라인에서 구현되는 쉘을 기반으로 한 간단한 온도 조절 엔진.
* [Fishtape](https://github.com/jorgebucaran/fishtape) - TAP 프로듀서 및 테스트 하네스
* [getoptions](https://github.com/ko1nksm/getoptions) - 쉘 스크립트에 대한 우아한 옵션 파서 (sh, bash 및 모든 POSIX 쉘)
* [getopts.fish](https://github.com/jorgebucaran/getopts.fish) - 물고기를 위한 CLI 파서
* [is.sh](https://github.com/qzb/is.sh) - 내장 테스트 명령에 대한 대안, 그것은 당신의 "if"문서를 꽤 만들 것입니다
* [lumberjack](https://github.com/molovo/lumberjack) - 쉘 스크립트에 대한 로깅 인터페이스
* [mo](https://github.com/tests-always-included/mo) - 순수한 bash 템플릿
* [optparse](https://github.com/nk412/optparse) - getopts에 대한 BASH 래퍼, 간단한 명령 줄 인수.
* [rerun](https://github.com/rerun/rerun) - 모듈형 쉘 자동화 프레임워크를 사용하여 키키 스크립트를 구성합니다.
* [revolver](https://github.com/molovo/revolver) - 포탄 스크립트를 위한 재사용 가능한 진전 회전자
* [phases](https://github.com/sorokine/phases) - Minimally invasive bash preprocessor, 실행할 스크립트의 섹션을 선택합니다.
* [powscript](https://github.com/coderofsalvation/powscript) - bash transpiler는 bash (Bash의 커피 쓰기)
* [semver_bash](https://github.com/cloudflare/semver_bash) - Bash의 Semantic Versioning
* [sh-semver](https://github.com/qzb/sh-semver) - bash의 Semver 도구 - 지정된 규칙과 일치하는 버전 찾기
* [shellcheck](https://github.com/koalaman/shellcheck) - Shell 스크립트에 대한 정적 분석 도구
* [shellfire](https://github.com/shellfire-dev/shellfire) - namespaced, composable shell (bash, sh 및 dash) 함수 라이브러리의 저장소
* [shellspec](https://github.com/shellspec/shellspec) - dash, bash, ksh, zsh 및 모든 POSIX 쉘에 대한 전체 기능 BDD 단위 테스트 프레임 워크
* [shfmt](https://github.com/mvdan/sh) - 쉘 파서, 포터, 버쉬 지원으로 해석기; shfmt 포함
* [shpec](https://github.com/rylnd/shpec) - 쉘 테스트 프레임
* [shutit](https://ianmiell.github.io/shutit/) - bash 및 pexpect를 기반으로 자동화 프레임워크
* [sub](https://github.com/basecamp/sub) - 프로그램을 구성하는 맛있는 방법
* [ts](https://github.com/thinkerbot/ts) - 쉘 테스트 스크립트
* [urchin](https://github.com/tlevine/urchin) - 포탄만 사용하는 관성 포탄 테스트 기구
* [shunit2](https://github.com/kward/shunit2) - JUnit/PyUnit의 풍미를 가진 Bash 스크립트를 위한 단위 시험 기구.
* [rebash](https://github.com/jandob/rebash) - Scripting 라이브러리/프레임웍. 특징 : 수입, 예외, doc-tests ...
* [zunit](https://github.com/zunit-zsh/zunit) - ZSH를 위한 강력한 단위 테스트 기구

# 가이드

* [Bash Official Reference Manual](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html)
* [Bash Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/)
* [Greg Wooledge's (aka "greycat") wiki](https://mywiki.wooledge.org).
  기타 제품 [Bash 가이드](https://mywiki.wooledge.org/BashGuide), [배쉬 FAQ](https://mywiki.wooledge.org/BashFAQ) · [배쉬 Pitfalls](https://mywiki.wooledge.org/BashPitfalls)
* [Google's Shell Style Guide](https://google.github.io/styleguide/shell.xml)
* [The Linux Documentation Project: Bash Programming - Intro/How-to](https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)
* [The Linux Documentation Project: Advanced Bash Scripting Guide](https://tldp.org/LDP/abs/html/)
* [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
* [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
* [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)
* [Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial/basics)
* [A guide to learn bash](https://github.com/Idnan/bash-guide)
* [Shell Field Guide](https://raimonster.com/scripting-field-guide/)

# 기타 Awesome 목록

다른 놀라운 멋진 목록에서 찾을 수 있습니다 [멋진 awesome](https://github.com/emijrp/awesome-awesome) · [멋진 awesomeness](https://github.com/bayandin/awesome-awesomeness).

### 함께 보기

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
