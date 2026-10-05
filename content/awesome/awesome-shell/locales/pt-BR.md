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

# Seleção de recursos de Shell [![Awesome][awesome-badge]][awesome-link]

Uma lista de frameworks de linha de comando incrível, kits de ferramentas, guias e aparelhos. Inspirado por incrível-php. Esta coleção incrível também está disponível em [Unix-Shell.ZEEF.com](https://unix-shell.zeef.com/caleb.xu).
- [Conchas](#shells)
- [Produtividade da linha de comando](#command-line-productivity)
  - [Navegação de Pastas](#directory-navigation)
- [Personalização](#customization)
- [Para desenvolvedores](#for-developers)
- [Utilitários de Sistema](#system-utilities)
- [Baixando e Servindo](#downloading-and-serving)
- [Formatos Multimídia e de Ficheiros](#multimedia-and-file-formats)
- [Aplicações](#applications)
- [Jogos](#games)
- [Gestão de pacotes de shell](#shell-package-management)
- [Desenvolvimento de script de shell](#shell-script-development)
- [Guias](#guides)
- [**Awesome Zsh**][awesome-zsh]&nbsp; [![Awesome][awesome-badge]][awesome-zsh]
- [**Awesome Fish**][awesome-fish] [![Awesome][awesome-badge]][awesome-fish]
- [**Awesome Bash**][awesome-bash] [![Awesome][awesome-badge]][awesome-bash]
- [Outras listas impressionantes](#other-awesome-lists)

## Shells

*Escolha o seu shell base.*

* [bash](https://www.gnu.org/software/bash/) - Concha do Projeto GNU (Bourne Again SHell)
* [elvish](https://elv.sh/) - Característica amigável e expressiva, como funções anônimas e estruturas de dados
* [es](https://wryun.github.io/es-shell/) - A concha extensível, baseada no Plano 9 [rc](https://github.com/rakitzis/rc) shell
* [fish](https://fishshell.com) - Shell inteligente e amigável linha de comando
* [ion](https://github.com/redox-os/ion) - Um shell moderno que apresenta uma sintaxe simples, mas poderosa. Está escrito inteiramente em Rust.
* [ksh93](https://github.com/att/ast) - Korn Shell
* [mksh](https://github.com/MirBSD/mksh) - MirBSD Korn Shell
* [murex](https://github.com/lmorg/murex) - Um ambiente mais inteligente de shell e scripting com recursos avançados projetados para usabilidade, segurança e produtividade (por exemplo, ferramenta DevOps mais inteligente)
* [ngs](https://github.com/ngs-lang/ngs) - Linguagem de script totalmente apresentada criada especificamente para Ops. REPL está sendo desenvolvido.
* [nushell](https://github.com/nushell/nushell) - Uma concha moderna escrita em Rust
* [oksh](https://github.com/ibara/oksh) - OpenBSD portátil ksh
* [osh](https://www.oilshell.org) - Bash compatível, com linguagem nova/moderna Unix shell chamada Óleo
* [pdksh](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/bin/ksh/) - Domínio público Korn shell
* [powershell](https://docs.microsoft.com/en-us/powershell/scripting/overview) um framework de gerenciamento de tarefas multiplataforma, composto por uma linguagem de shell e script de linha de comando
* [shell++](https://github.com/alexst07/shell-plus-plus) - Linguagem de script amigável e moderna funcional e orientada para objetos
* [shenv](https://github.com/shenv/shenv) - Gestão simples de versões shell
* [tcsh](https://www.tcsh.org/) - Consola C com preenchimento de nome de arquivo e edição de linha de comando
* [xonsh](https://xon.sh) - Python-ish, BASH-looking linguagem shell e prompt de comando
* [yash](https://github.com/magicant/yash) - Uma linha de comando compatível com POSIX shell com suporte embutido para conclusão e previsão baseada no histórico de comandos
* [zsh](https://www.zsh.org) - Shell poderoso com linguagem de script

## Produtividade na linha de comando

*Pesquisa, favoritos, multiplexamento e outras ferramentas que tornam sua experiência terminal mais produtiva.*

* [AdvancedNewFile](https://github.com/tanrax/terminal-AdvancedNewFile) - Criação rápida de arquivos e diretórios de forma recursiva. Inspirado pelo plugin Vim.
* [ag](https://github.com/ggreer/the_silver_searcher) - Pesquisa de strings super rápida através de uma hierarquia de diretórios
* [aliases](https://github.com/sebglazebrook/aliases) - Aliases contextuais, dinâmicos, organizados para bash
* [arttime](https://github.com/reportaman/arttime) - Beleza da arte de texto atende funcionalidade de relógio, timer, gerenciador de tempo pomodoro++
* [autoenv](https://github.com/hyperupcall/autoenv) - Ambientes baseados em directórios.
* [await](https://github.com/slavaGanzin/await) - binário único que executa a lista de comandos em paralelo e espera pela sua terminação
* [bartib](https://github.com/nikolassv/bartib) - Um simples cronómetro para a linha de comando. Ele salva um registro de todas as atividades rastreadas como um arquivo de texto simples e permite que você crie relatórios flexíveis.
* [bashhub](https://github.com/rcaloras/bashhub-client) - ...nuvem: história de Bash na nuvem. Indexado e pesquisável.
* [boilr](https://github.com/tmrts/boilr) - Uma ferramenta CLI muito rápida para criar projetos a partir de modelos de caldeira.
* [boom](https://github.com/holman/boom) - Armazenar links e trechos na linha de comando
* [borg](https://github.com/ok-borg/borg) - Um motor de busca baseado em terminal para comandos bash
* [broot](https://github.com/Canop/broot) - Uma maneira melhor de navegar diretórios
* [browsh](https://github.com/browsh-org/browsh) - O navegador moderno baseado em texto
* [Buku](https://github.com/jarun/Buku) - Gerenciador poderoso de favoritos de linha de comando
* [byobu](https://www.byobu.org) - Gerenciador de janelas baseado em texto e multiplexador de terminal
* [cod](https://github.com/dim-an/cod) — Um daemon de conclusão para shell que aprende quando você invoca `--help` comandos
* [CloudClip](https://github.com/skywind3000/CloudClip) - Sua própria área de transferência na nuvem, copiar e colar texto com gist entre diferentes sistemas
* [ddgr](https://github.com/jarun/ddgr) - A partir do terminal
* [desk](https://github.com/jamesob/desk) - Um gestor de espaço de trabalho leve para o shell
* [direnv](https://github.com/direnv/direnv) - Um comutador de ambiente para a shell, comparar com autoenv
* [dnote](https://github.com/dnote/dnote) - Um notebook de linha de comando simples com sincronização multidispositivo e interface web
* [eureka](https://github.com/simeg/eureka/) - :bulb: ferramenta CLI para inserir e armazenar suas ideias sem sair do terminal
* [fasd](https://github.com/clvv/fasd) - Booster de produtividade de linha de comando, oferece acesso rápido a arquivos e diretórios
* [fd](https://github.com/sharkdp/fd) - Uma alternativa simples, rápida e fácil de encontrar.
* [foxy](https://github.com/s-p-k/foxy) - Favoritos de texto simples para Firefox e navegadores de surf.
* [fselect](https://github.com/jhspetersson/fselect) - Encontrar arquivos com consultas tipo SQL.
* [funky](https://github.com/bbugyi200/funky) - Estende a funcionalidade de funções shell tornando-os mais poderosos e flexíveis.
* [fz](https://github.com/changyuheng/fz) - Completação de aba fuzzy sem costura para z
* [fzf](https://github.com/junegunn/fzf) - Um localizador de linha de comando fuzzy
* [gitmux](https://github.com/arl/gitmux) - Mostrar o estado do Git na barra de estado do Tmux
* [googler](https://github.com/jarun/googler) - Google Search, Google Site Search, Google News do terminal
* [googlr](https://github.com/Astranno/googlr) - Ferramenta de linha de comando que permite pesquisar o Google a partir do seu terminal.
* [has](https://github.com/kdabir/has) - `has` ajuda você a verificar a presença de várias ferramentas de linha de comando e suas versões no caminho
* [how2](https://github.com/santinic/how2) - `how2` encontra a maneira mais simples de fazer algo em uma concha unix. É como... `man`, mas você pode questioná-lo em linguagem natural.
* [navi](https://github.com/denisidoro/navi) - Uma ferramenta de trapaça interativa para a linha de comando
* [hhighlighter](https://github.com/paoloantinori/hhighlighter) - Colorir palavras em uma saída de comando
* [hr](https://github.com/LuRsT/hr) - `<hr />` para o seu terminal
* [hss](https://github.com/six-ddc/hss) - Um cliente ssh interativo paralelo com execução autocompleta e assíncrona
* [hstr](https://github.com/dvorka/hstr) - Bash History Suggest Box
* [k](https://github.com/supercrabtree/k) - k é um script Zsh para tornar as listas de pastas mais legíveis, adicionando status Git, cores do peso do arquivo e datas de rotting
* [k alias](https://github.com/lingtalfi/k) - obter cool aliases (e mais) trabalhando com um simples um-liner
* [lf](https://github.com/gokcehan/lf) - Gerenciador de arquivos de terminal escrito em Go, inspirado no ranger
* [lf.sh](https://github.com/suewonjp/lf.sh) - Pesquise rapidamente arquivos com menos digitações e faça muito mais (grepping, copiar caminho para a área de transferência, etc)
* [lowcharts](https://github.com/juan-leon/lowcharts) - Desenhar gráficos de baixa resolução no terminal
* [Lmod](https://lmod.readthedocs.io/en/latest/) - Módulos de ambiente baseados em Lua que aprimoram módulos baseados em Tcl enquanto são compatíveis para trás (compare com módulos)
* [loop](https://github.com/Miserlou/Loop) - Gravar e controlar loops complexos com uma linha
* [marker](https://github.com/pindexis/marker) - Marque seus comandos de shell
* [mackup](https://github.com/lra/mackup/) - Mantenha suas configurações de aplicativo em sincronia (OS X/Linux)
* [mcfly](https://github.com/cantino/mcfly) - Passa pelo teu histórico. Grande escocês!
* [modules](http://modules.sourceforge.net/) - Módulos de Ambiente Clássicos Tcl gerenciando o ambiente de shell (compare com Lmod, direnv e autoenv)
* [nnn](https://github.com/jarun/nnn) - Navegador de arquivos e analisador de uso de disco com excelente integração de desktop
* [ok-sh](https://github.com/secretGeek/ok-bash) - Trabalhas em vários projectos? E em cada projeto, existem comandos que você usa que são específicos para esse projeto? Precisas de um ficheiro .ok.
* [parallel](https://www.gnu.org/software/parallel/) - Compilar e executar linhas de comando shell a partir de entrada padrão em paralelo
* [pass](https://www.passwordstore.org/) - Gerencie senhas da linha de comando com criptografia GPG e integração git opcional.
* [pathpicker](https://github.com/facebook/PathPicker) - Aceita entradas como grep, buscas, git etc; permite selecionar arquivos do resultado da entrada, que você pode então abrir ou fornecer como argumento para um comando.
* [pdd](https://github.com/jarun/pdd) - Data minúscula, calculadora de diferenças de tempo com temporizadores
* [percol](https://github.com/mooz/percol) - Adiciona sabor de filtragem interativa ao conceito de tubo tradicional de concha UNIX
* [q](https://github.com/cal2195/q) - Vim como macro-registros para o seu Bash e Zsh Shell
* [qfc](https://github.com/pindexis/qfc) - widget de completamento de arquivos para Bash e Zsh
* [resh](https://github.com/curusarn/resh) - História contextual para Zsh e Bash
* [rg](https://github.com/BurntSushi/ripgrep) - ripgrep é uma ferramenta de pesquisa orientada para linhas que combina a usabilidade do The Silver Seacher com a velocidade bruta do GNU grep
* [screen](https://www.gnu.org/software/screen/) - Multiplexador de terminal GNU
* [shell-history](https://github.com/pawamoy/shell-history) - Visualize seu uso de shell com Highcharts
* [SHML](https://github.com/odb/shml) - Estrutura de estilo para o terminal (Shell Markup Language)
* [slugify](https://github.com/benlinton/slugify) - Comando que converte nomes de arquivos e diretórios para um formato amigável da web
* [sman](https://github.com/tokozedg/sman) -:bug: Um gerenciador de trechos de linha de comando
* [spark](https://github.com/holman/spark) - na sua concha
* [spark.fish](https://github.com/jorgebucaran/spark.fish) - Gerador Sparkline
* [sheet](https://github.com/oscardelben/sheet) - Excertos de texto para a linha de comando
* [spot](https://github.com/rauchg/spot) - Pequeno utilitário de pesquisa de arquivos
- [snips](https://github.com/srijanshetty/snips) - Ferramenta de linha de comando para gerenciar trechos de código.
* [sqlline](https://github.com/julianhyde/sqlline) - Shell para emissão de SQL para bases de dados relacionais via JDBC (multilinha, conclusão, destaque, suporte dialeto)
* [sshfs](https://github.com/osxfuse/sshfs) - Uma ferramenta para montagem de sistemas de arquivos remotos sobre SSH
* [sudocabulary](https://github.com/badarsh2/Sudocabulary) - Aprenda vocabulário inglês no seu terminal
* [surfraw](https://gitlab.com/surfraw/Surfraw) - navegue pelo site específico e pesquise na web a partir do seu terminal sem navegador.
* [task-manager](https://github.com/lingtalfi/task-manager) - Execute todos os seus scripts com apenas duas ou três teclas.
* [td-cli](https://github.com/darrikonn/td-cli) - Um gerenciador de linha de comando a-fazer para organizar e gerenciar suas tarefas em vários projetos.
* [tere](https://github.com/mgunyho/tere) - Uma alternativa mais rápida para cd + ls
* [thefuck](https://github.com/nvbn/thefuck) - Corrigir erros comuns usando um comando fácil de lembrar
* [tldr](https://github.com/raylee/tldr-sh-client) - Um cliente bash totalmente funcional para tldr, páginas man simplificadas e orientadas para a comunidade
* [tmux](https://tmux.github.io/) - Multiplexador terminal incrível
* [undollar](https://github.com/xtyrrell/undollar) - um dólar morde o dólar assina a ponta do comando que acabou de colar no seu terminal
* [usql](https://github.com/xo/usql) - Interface de linha de comando universal para bancos de dados SQL.
* [v](https://github.com/rupa/v) - z de Vim.
* [wemux](https://github.com/zolrath/wemux) - Multi-User Tmux feito fácil
* [xiki](https://github.com/trogdoro/xiki) - Torna o console shell mais amigável e poderoso
* [xplr](https://github.com/sayanarijit/xplr) - Um explorador de arquivos TUI acessível, mínimo e rápido
* [xsv](https://github.com/BurntSushi/xsv) - um kit de ferramentas de linha de comando CSV rápido escrito em Rust
* [xxh](https://github.com/xxh/xxh) - Traz a tua concha favorita onde quer que passes pela SSH.

### Navegação por diretórios

* [aliasme](https://github.com/Jintin/aliasme) - alias helper para alterar rapidamente o diretório
* [autojump](https://github.com/wting/autojump) - Um comando cd que aprende - navegar facilmente diretórios da linha de comando
* [bashmarks](https://github.com/huyng/bashmarks) - Favoritos de diretório para a shell
* [bd](https://github.com/vigneshwaranr/bd) - Rápido, volte para um diretório pai
* [commacd](https://github.com/shyiko/commacd) - Uma maneira mais rápida de andar em Bash
* [enhancd](https://github.com/b4b4r07/enhancd) -:rocket: Um comando cd de próxima geração com um filtro interativo
* [goto](https://github.com/iridakos/goto) - Um utilitário shell para navegação para diretórios aliased que suportam auto-completar
* [jump](https://github.com/gsamokovarov/jump) - O salto ajuda você a navegar mais rápido no seu sistema de arquivos aprendendo seus hábitos.
* [lazy-cd](https://github.com/pedramamini/lazy-cd) - Simples bash comandos para navegação com favoritos do sistema de arquivos, completa com bash-completion.
* [up](https://github.com/shannonmoeller/up) - Ascendir diretórios por nome ou contagem; para bash, zsh, e peixe.
* [z](https://github.com/rupa/z) - Z é o novo j, yo
* [z.lua](https://github.com/skywind3000/z.lua) - Um novo comando cd que ajuda você a navegar mais rápido aprendendo seus hábitos
* [zoxide](https://github.com/ajeetdsouza/zoxide) - Uma maneira mais rápida de navegar no seu sistema de arquivos, escrito em Rust
* [zpyi](https://github.com/sakshamsharma/zpyi) - Python em Zsh - Programa fácil de python em shell

## Personalização

*Perguntas personalizadas, temas de cores, etc.*

* [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) — Minimalista tema Afrodite (prompt) para terminais sexy que trabalha em bash, peixe e zsh
* [base16-builder](https://github.com/base16-builder/base16-builder) - Construtor de Base16
* [bash-full-of-colors](https://github.com/slomkowski/bash-full-of-colors) - Prompt poderoso com tela, tmux, suporte git e muitos mais
* [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) - Uma dica informativa e chique Bash para usuários Git
* [bash-powerline](https://github.com/riobard/bash-powerline) - Powerline-estilo Bash prompt em script Bash puro
* [bashstrap](https://github.com/barryclark/bashstrap) - Uma maneira rápida de melhorar o terminal OSX
* [bullet-train-oh-my-zsh-theme](https://github.com/caiogondim/bullet-train.zsh) - :bullettrain side: Um tema de shell oh-my-zsh baseado no plugin Powerline Vim
* [emojify](https://github.com/mrowa44/emojify) Emoji na linha de comando :scream:
* [flatui-terminal-theme](https://dribbble.com/shots/1021755-Flat-UI-Terminal-Theme) - Cores mais bonitas para o terminal
* [geometry](https://github.com/geometry-zsh/geometry) - Um tema ZSH mínimo onde qualquer função pode ser adicionada ao prompt à esquerda ou (assync) prompt à direita na mosca.
* [git-prompt](https://github.com/lvv/git-prompt) - Bash prompt com módulos Git, SVN e HG
* [gittify](https://github.com/momeni/gittify) - Um alerta Bash colorido + apelidos Git personalizados
* [Gogh - Color Scheme](https://github.com/Mayccoll/Gogh) - Esquema de cores para o Terminal Gnome
* [liquidprompt](https://github.com/nojhan/liquidprompt) - Uma completa &Prompt adaptativo cuidadosamente projetado para Bash &Zsh
* [mysql-colorize](https://github.com/zpm-zsh/mysql-colorize) - Coloração para o cliente mysql comand-line
* [oh-my-git](https://github.com/arialdomartini/oh-my-git) - Um prompt de opinião para bash e zsh
* [oh-my-posh](https://ohmyposh.dev) - Motor de tema pronto para qualquer shell e plataforma escrita em andamento.
* [polyglot](https://github.com/agkozak/polyglot) - Um prompt Git informativo que funciona em bash, zsh, ksh, mksh, pdksh, oksh, dash, yash, busybox sh, e osh
* [powerlevel10k](https://github.com/romkatv/powerlevel10k) - Super flexível incrível linha de força ZSH tema
* [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt) - Bash prompt com cores, status Git, e ramos Git
* [starship](https://starship.rs/) - Rápido, personalizável, linha cruzada escrita em ferrugem
* [synth-shell](https://github.com/andresgongora/synth-shell) - Greeter com um relatório de estado personalizável e um prompt bash extravagante

## Para desenvolvedores

*Desenvolvimento de linha de comando, controle de versão e implantação.*

* [1Password SSH Agent](https://developer.1password.com/docs/ssh/) - Autentique fluxos de trabalho Git e SSH com desbloqueio biométrico usando 1Password
* [ack](https://beyondgrep.com/) - Uma ferramenta de pesquisa tipo grep otimizada para código fonte.
* [add-gitignore](https://github.com/TejasQ/add-gitignore) - CLI Interativo que gera um .gitignore para o seu projeto com base em suas necessidades.
* [bcal](https://github.com/jarun/bcal) - CALculador Byte para conversões de armazenamento e cálculos
* [bitwise](https://github.com/mellowcandle/bitwise) - Manipulador de bits interativo baseado em terminais em maldições.
* [bocker](https://github.com/p8952/bocker) - Docker implementado em 100 linhas de bash
* [cloc](https://github.com/AlDanial/cloc) - Count Lines of Code
* [doclt](https://github.com/omgimanerd/doclt) - Uma interface de linha de comando para Digital Ocean
* [dokku](https://github.com/dokku/dokku) - Um mini-Heroku alimentado por Docker. A menor implementação PaaS que você já viu.
* [forgit](https://github.com/wfxr/forgit) - Ferramenta de utilidade para `git` aproveitando-se do localizador fuzzy fzf.
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - Muitos utilitários extra Git. Churn, corte-branch, melhoria-fusão e muitos mais.
* [git-extras](https://github.com/tj/git-extras) - Git utilities -- repo summary, repl, changelog population, autor commit porcentagens e muito mais
* [git-open](https://github.com/paulirish/git-open) - Tipo `git open` para abrir a página ou site do GitHub para um repositório em seu navegador
* [git-quick-stats](https://github.com/arzzen/git-quick-stats) - Git estatísticas rápidas é uma maneira simples e eficiente de acessar várias estatísticas no repositório git.
* [git-semver](https://github.com/markchalloner/git-semver) - 'Plugin' Git para facilitar a versão semântica e validação do Changelog
* [git-sh](https://github.com/rtomayko/git-sh) - Um ambiente Bash personalizado adequado para Git trabalho
* [gita](https://github.com/nosarthur/gita) - Uma ferramenta de linha de comando para gerenciar múltiplos git repos.
* [hub](https://github.com/github/hub) - O Hub ajuda-te a ganhar.
* [just](https://github.com/casey/just) - Corredor de tarefas para salvar e executar comandos específicos do projeto.
* [licins](https://github.com/dogoncouch/licins) - Inserir licenças de software comentadas em código fonte.
* [mkdkr](https://github.com/rosineygp/mkdkr) - Makefile + Docker = CI Pipeline
* [mr](https://myrepos.branchable.com) - Ferramenta de gerenciamento de múltiplos repositórios
* [nve](https://github.com/ehmicky/nve) - Execute qualquer comando em versões específicas do Node.js.
* [overcommit](https://github.com/sds/overcommit) - Um gerenciador de gancho Git totalmente configurável e extensível
* [pre-commit](https://pre-commit.com) - Um framework para a gestão e manutenção de ganchos pré-compromisso multi-linguagem
* [rebound](https://github.com/shobrook/rebound) - Navegue instantaneamente pelos resultados do Stack Overflow em seu terminal quando você tiver um erro no compilador
* [repren](https://github.com/jlevy/repren) - Linha de comando de busca-e-substituir e arquivo renomeando faca do exército suíço
* [slap](https://github.com/slap-editor/slap) - Editor de texto sublime baseado em terminal que é executado no Node.js
* [shipit](https://github.com/sapegin/shipit) - Implementação minimalista de SSH
* [starring](https://github.com/ritz078/starring) - Estrelar automaticamente os pacotes npm que você está usando no GitHub.
* [tag](https://github.com/aykamko/tag) - Salta para os teus fósforos.
* [trunk](https://www.npmjs.com/package/@trunkio/launcher) - Verificador de meta código e formatador rapidamente
* [vmn](https://github.com/final-israel/vmn) - solução automática baseada em git versioning e recuperação de estado agnóstico para linguagem ou arquitetura
* [wipe-modules](https://github.com/bntzio/wipe-modules) - Um pequeno agente que remove a pasta nó  módulos de projetos não ativos

## Utilitários do sistema

*Ferramentas relacionadas ao sistema operacional, incluindo administração de sistema, depuração de sistema e gerenciamento de arquivos e processos.*

* [atop](https://www.atoptool.nl) - Monitor de desempenho de tela cheia ASCII capaz de relatar a atividade de todos os processos
* [bat](https://github.com/sharkdp/bat) - A `cat` clone com asas
* [bmon](https://github.com/tgraf/bmon) - Monitor de largura de banda em tempo real e estimador de taxa com saída visual amigável ao homem
* [btop](https://github.com/aristocratos/btop) - Monitor de recursos Linux/OSX/FreeBSD
* [catcli](https://github.com/deadc0de6/catcli) - A ferramenta de catálogo de linha de comando para seus dados offline
* [ccat](https://github.com/owenthereal/ccat) - Ccat é o gato colorido. Funciona de forma semelhante ao cat, mas exibe conteúdo com realce de sintaxe.
* [exa](https://github.com/ogham/exa) - Uma versão moderna de `ls`.
* [progress](https://github.com/Xfennec/progress) - Ferramenta Linux para mostrar o progresso para `cp`, `rm`, `dd`E mais...
* [stronghold](https://github.com/alichtman/stronghold) - Configure facilmente as configurações de segurança do MacOS do terminal.
* [glances](https://github.com/nicolargo/glances) - Olho no teu sistema
* [goaccess](https://github.com/allinurl/goaccess) - GoAccess é um analisador de log web em tempo real e visualizador interativo que roda em um terminal em sistemas \*nix.
* [hblock](https://github.com/hectorm/hblock) - Adbloqueador baseado em ficheiros de máquinas
* [histstat](https://github.com/vesche/histstat) - Histórico do netstat
* [htop](https://github.com/hishamhm/htop) - Um visualizador de processos interativos baseado em ncurses que visa ser um melhor `top`
* [lnav](https://lnav.org) - Um visualizador de arquivos de log avançado para a pequena escala
* [logdissect](https://github.com/dogoncouch/logdissect) - Utilitário CLI e API Python para análise de arquivos de log e outros dados.
* [ls++](https://github.com/trapd00r/ls--) - Colorido é sobre esteróides
* [lsd](https://github.com/Peltoche/lsd) - LSDeluxe, reescrever o GNU com muitas funcionalidades adicionadas, como cores, ícones, árvore-visão e mais opções de formatação.
* [lsp](https://github.com/dborzov/lsp) - Melhorou. `ls`, com descrições de arquivos em linguagem simples e agrupamento de arquivos inteligentes
* [maza](https://github.com/tanrax/maza-ad-blocking) - Bloqueador de publicidade local. Como Pi-hole mas local e usando seu sistema operacional.
* [mtr](https://github.com/traviscross/mtr) - A funcionalidade dos programas 'traceroute' e 'ping' em uma única ferramenta de diagnóstico de rede.
* [ncdu](https://dev.yorhel.nl/ncdu) - Uso de Disco NCurses
* [nmtui](https://github.com/NetworkManager/NetworkManager) - Interface de usuário de texto para controlar NetworkManager
* [powertop](https://github.com/fenrus75/powertop) - Utilização da bateria/potência e estatísticas do dispositivo monitorando a ferramenta de linha de comando, com opções de ajuste.
* [prettyping](https://github.com/denilsonsa/prettyping) - Fazendo a saída de `ping` Mais bonito, mais colorido, mais compacto e mais fácil de ler.
* [procdog](https://github.com/jlevy/procdog) - Controle leve da linha de comando de processos de longa duração, como servidores
* [quick-secure](https://github.com/marshyski/quick-secure) - Proteja e endureça rapidamente sistemas UNIX/Linux
* [rng](https://github.com/nickolasburr/rng) - Copiar gama de linhas de arquivo ou stdin para stdout.
* [tiptop](https://github.com/nschloe/tiptop) - Monitor gráfico de linha de comando.
* [wifi-wand](https://github.com/keithrbennett/wifiwand) - um aplicativo de linha de comando Ruby para gerenciar WiFi no MacOS (install by `gem install wifi-wand`)
* [xiringuito](https://github.com/ivanilves/xiringuito) - "VPN para pobres" baseado em SSH

## Download e disponibilização

*Servidores e ferramentas de rede self-hosted, leve escritas em scripts shell.*

* [aria2](https://github.com/aria2/aria2) - aria2 é um multiprotocolo leve &utilitário de download multi-fonte, plataforma transversal operado em linha de comando. Ele suporta HTTP/HTTPS, FTP, BitTorrent e Metalink
* [balls](https://github.com/jneen/balls) - Bash on Balls
* [bashttpd](https://github.com/avleen/bashttpd) - Um servidor web escrito em Bash
* [bashhub-server](https://github.com/nicksherron/bashhub-server) - História da nuvem privada. Servidor de código aberto para bashhub
* [bitpocket](https://github.com/sickill/bitpocket) - "DIY Dropbox" ou "2-way directory (r)sync com exclusão adequada"
* [Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader) - Dropbox Uploader é um script Bash que pode ser usado para enviar, baixar, listar ou excluir arquivos do Dropbox
* [httpie](https://github.com/httpie/httpie) - HTTPie é uma linha de comando HTTP cliente, uma substituição cURL amigável
* [HTTPLab](https://github.com/gchaincl/httplab) - O servidor web interativo, deixe-o inspecionar solicitações HTTP e forjar respostas.
* [Kapow!](https://github.com/BBVA/kapow) - Se conseguires escrever, podes HTTP.
* [ngincat](https://github.com/jaburns/ngincat) - Pequeno servidor HTTP Bash usando netcat
* [resty](https://github.com/micha/resty) - Pequeno cliente de linha de comando REST que você pode usar em tubulações
* [shell2http](https://github.com/msoap/shell2http) - Servidor HTTP para executar comandos shell. Projetado para desenvolvimento, prototipagem ou controle remoto
* [tshare](https://github.com/trikko/tshare) - Partilha de ficheiros da linha de comando.
* [vesper](https://github.com/chris-rock/vesper) - Vesper é um framework HTTP para Bash/Unix Shell
* [xh](https://github.com/ducaale/xh) - Ferramenta amigável e rápida para enviar solicitações HTTP
* [yt-dlp](https://github.com/yt-dlp/yt-dlp) - Programa de linha de comando para download de vídeos do YouTube.com e outros sites de vídeo

## Multimídia e formatos de arquivo

*Ferramentas para lidar com arquivos de vídeo e áudio.*

* [adb-export](https://github.com/sromku/adb-export) - Exportar fornecedores de conteúdo Android para o formato CSV
* [Android-Kitchen](https://github.com/dsixda/Android-Kitchen) - Uma cozinha baseada em texto para personalização Android ROM. Usa scripts de shell e trabalha com Cygwin/OS X/Linux
* [Beets](https://github.com/beetbox/beets) - Gerenciador de biblioteca de música e tagger MusicBrainz
* [cmus](https://github.com/cmus/cmus) - Reprodutor de áudio multiplataforma.
* [dasel](https://github.com/tomwright/dasel) - Consultar e atualizar estruturas de dados usando seletores da linha de comando. Comparado com [jq](https://github.com/stedolan/jq) / [yq](https://github.com/kislyuk/yq) mas suporta JSON, YAML, TOML e XML com dependências de tempo de execução zero.
* [dzr](https://github.com/yne/dzr) - Leitor de áudio Deezer.com multiplataforma.
* [fx](https://github.com/antonmedv/fx) - Ferramenta de processamento JSON de linha de comando por funções JavaScript anonymus
* [gifgen](https://github.com/lukechilds/gifgen) - Codificação GIF de alta qualidade simples
* [image-scraper](https://github.com/sananth12/ImageScraper) - Um raspador de imagens de linha de comando com muitas funcionalidades.
* [imgp](https://github.com/jarun/imgp) - Redimensionador de imagem em lote rápido chama e rotador
* [jc](https://github.com/kellyjonbrazil/jc) - Converta a saída de comando, tipos de arquivos e strings comuns para JSON ou YAML para uso mais fácil em scripts.
* [jo](https://github.com/jpmens/jo) - Um pequeno utilitário para criar objetos JSON a partir de argumentos de linha de comando.
* [jq](https://github.com/stedolan/jq) - Sed para dados do Json. Você pode usá-lo para cortar e filtrar e mapear e transformar dados estruturados
* [korkut](https://github.com/oguzhaninan/korkut) - Processamento rápido e simples de imagens na linha de comando.
* [library](https://github.com/chapmanjacobd/library) - Criar bancos de dados SQLITE para pastas de música, vídeo, imagens ou mídia online. Reproduza e rastreie mídias como o Plex, mas uma interface somente CLI com muitas opções de classificação.
* [mpv](https://mpv.io/) - Permite reproduzir a maioria dos formatos de áudio e vídeo (usando caracteres ASCII) na shell, bem como em uma GUI.
* [nehm](https://github.com/bogem/nehm) - Ferramenta de console, que baixa, define tags IDv3 e adiciona ao seu iTunes (se você usá-lo) seu SoundCloud gosta de forma conveniente
* [PiCAST](https://github.com/lanceseidman/PiCAST) - PiCAST transforma seu Pi de framboesa $35 em um Chromecast como dispositivo
* [sejda](https://github.com/torakiki/sejda/) - Manipulação de linha de comando de documentos PDF (split, mesclar, girar, converter para jpg, extrair texto, etc)
* [visidata](https://github.com/saulpw/visidata) - Uma planilha de terminal multitool para explorar e organizar dados (csv/json/xml/xls/yaml/etc)
* [xidel](https://github.com/benibela/xidel/) - Ferramenta Cli para filtrar, mapear e criar dados HTML/XML/JSON com (Turing-complete) XPath e XQuery.
* [xmlstarlet](http://xmlstar.sourceforge.net/) - Ferramenta antiga mas poderosa para formatação, filtragem e manipulação XML de linha de comando.
* [yq](https://github.com/mikefarah/yq) - yq é um processador YAML de linha de comando portátil

## Aplicativos

*Aplicações baseadas em linha de comando ou acesso de linha de comando a serviços existentes.*

* [ansiweather](https://github.com/fcambus/ansiweather) - Tempo em seu terminal, com cores ANSI e símbolos Unicode
* [awless](https://github.com/wallix/awless) - Um poderoso, inovador e pequeno CLI de superfície para gerenciar AWS.
* [bashblog](https://github.com/cfenollosa/bashblog) - Um script Bash que lida com postagem no blog
* [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - □ Imagens bonitas do seu código — de dentro do seu terminal.
* [choosealicense-cli](https://github.com/lord63/choosealicense-cli) - Escolha uma licença OSS do conforto do seu terminal
* [cointop](https://github.com/miguelmota/cointop) - A aplicação de interface de terminal mais rápida e interativa para rastrear criptomoedas
* [dstask](https://github.com/naggie/dstask) - Gerenciador de TODO baseado em terminal binário único com git-based sync + notas de marcação por tarefa
* [editly](https://github.com/mifi/editly) - Editor de vídeo de linha de comando
* [facebook-cli](https://github.com/specious/facebook-cli) - Ferramenta de linha de comando Facebook
* [fanyi](https://github.com/afc163/fanyi) - Traduzir Inglês para Chinês em terminal
* [gcalcli](https://github.com/insanum/gcalcli) - Interface de linha de comando Google Calendar
* [geeknote](https://github.com/VitaliyRodnenko/geeknote) - Linha de comando evernote cliente
* [haxor-news](https://github.com/donnemartin/haxor-news) - Navegue no Hacker News como um haxor
* [hn-cli](https://github.com/rafaelrinaldi/hn-cli) - Navegue no Hacker Notícias do conforto do seu Terminal
* [iponmap](https://github.com/nogizhopaboroda/iponmap) - Desenhar ponto no mapa mundial usando o endereço ip
* [isitup](https://github.com/lord63/isitup) - Verifique se um site está para cima ou para baixo
* [jrnl](https://github.com/jrnl-org/jrnl) - Um simples aplicativo de linha de comando diário que armazena seu diário em um arquivo de texto simples
* [kanban.bash](https://github.com/coderofsalvation/kanban.bash) - comando asciii kanban placa para minimalista produtividade bash hackers (baseado em csv)
* [ledger](https://github.com/ledger/ledger) - Contabilidade de linha de comando
* [licen](https://github.com/lord63/licen) - Gera a sua carta. Mais um piolho, mas implementar com Jinja2 e docopt
* [md2png](https://github.com/weaming/md2png) - Converter marcação para baixo em imagem PNG
* [moviemon](https://github.com/iCHAIT/moviemon) - Tudo sobre os seus filmes dentro da linha de comando.
* [nomino](https://github.com/yaa110/nomino) - Renomear utilitário em lote usando opções de arquivos regex, sort e map.
* [pcalc](https://github.com/alt-romes/programmer-calculator) - Calculadora feita para programadores que trabalham com múltiplas representações numéricas, tamanhos e globalmente perto dos bits.
* [pockyt](https://github.com/achembarpu/pockyt) - Ler, Gerenciar e Automatizar [Bolso](https://getpocket.com) coleção.
* [pushblast](https://github.com/alebcay/pushblast) - Obter notificações PushBullet quando um programa shell sai
* [pushbullet-bash](https://github.com/Red5d/pushbullet-bash) - Interface Bash para a API PushBullet
* [ranger](https://github.com/ranger/ranger) - Um gerenciador de arquivos de console com ligações de chaves VI.
* [Reddit Terminal Viewer](https://github.com/michael-lazar/rtv) - Navegue pelo Reddit do seu terminal
* [SAWS](https://github.com/donnemartin/saws) - Um AWS supercarregado CLI
* [taskbook](https://github.com/klaussinani/taskbook) - Tarefas, conselhos &notas para o habitat de linha de comando
* [taskwarrior](https://taskwarrior.org/) - Um gerenciador de lista TODO de linha de comando
* [terjira](https://github.com/keepcosmos/terjira) - Ferramenta de alimentação de linha de comando para Jira
* [ticker](https://github.com/achannarasappa/ticker) — Terminal de contagem de stocks com actualizações ao vivo e localização
* [vl](https://github.com/ellisonleao/vl) - Verificador de links de URL em documentos de texto
* [wego](https://github.com/schachmat/wego) - Aplicativo meteorológico para o terminal
* [whales](https://github.com/Gueils/whales) - Uma ferramenta para dockerize automaticamente seus aplicativos
* [whereami](https://github.com/rafaelrinaldi/whereami) - Obtenha informações de geolocalização do CLI
* [wttr.in](https://github.com/chubin/wttr.in) - :parcialmente sunny: A maneira certa de verificar o tempo (curl wttr.in)

## Jogos

*Todo o trabalho e nenhuma diversão é uma maneira cruddy de passar o seu dia.*

* [bash2048](https://github.com/mydzor/bash2048) - Implementação Bash de 2048 jogo
* [minesweeper](https://github.com/feherke/Bash-script/tree/master/minesweeper) - Implementação Bash de caça às minas
* [nudoku](https://github.com/jubalh/nudoku) - jogo sudoku baseado ncurses escrito em C
* [piu-piu](https://github.com/vaniacer/piu-piu-SH) - Jogo de roller horizontal em bash com modo multiplayer!
* [sedtris](https://github.com/uuner/sedtris) - Tetris em sed
* [sed-scripts](https://github.com/aureliojargas/sed-scripts) - Arkanoid e Sokoban escritos usando sed
* [SHTAP](https://notimetoplay.org/engines/shtap/) - Motor de aventura texto reutilizável para Bash 4
* [tty-solitaire](https://github.com/mpereira/tty-solitaire) - Jogue paciência no seu terminal!

## Gerenciamento de pacotes Shell

*Ferramentas para gerenciar várias configurações de shell. Para ferramentas específicas de zsh, consulte a seção Zsh.*

* [bash-it](https://github.com/Bash-it/bash-it) - Um quadro comunitário Bash
* [basher](https://github.com/basherpm/basher) - Um gerenciador de pacotes para scripts shell
* [bashing](https://github.com/xsc/bashing) - Esmagar o Bash em Peças
* [bpkg](https://www.bpkg.sh/) - JavaScript tem npm, Ruby tem Gems, Python tem pip e agora Shell tem bpkg
* [dotdrop](https://github.com/deadc0de6/dotdrop) - Salve seus arquivos uma vez, implante-os em todos os lugares
* [dotfiler](https://github.com/svetlyak40wt/dotfiler) – Shell gerenciador de pacotes agnóstico git baseado em dotfiles, escrito em Python.
* [fresh](https://github.com/freshshell/fresh) - Mantém os teus pontos frescos.
* [homeshick](https://github.com/andsens/homeshick) - Sincronizador Git dotfile escrito em Bash
* [shallow-backup](https://github.com/alichtman/shallow-backup) - Crie facilmente documentação leve de pacotes instalados, dotfiles e mais
* [shundle](https://github.com/javier-lopez/shundle) - Gerenciador de plug-ins para scripts de shell
* [vcsh](https://github.com/RichiH/vcsh) - Gestor de configuração baseado no Git
* [yadm](https://yadm.io/) - Gerenciador de dotfiles baseado em Git suportando criptografia, alterna e bootstrapping

## Desenvolvimento de scripts Shell

*Ferramentas para escrever, melhorar ou organizar scripts Bash ou outros shell*

* [ansi](https://github.com/fidian/ansi) - ANSI códigos de fuga em puro bash - alterar a cor do texto, posicionar o cursor, muito mais
* [assert.sh](https://github.com/lehmannro/assert.sh) - Estrutura de teste da unidade Bash
* [bashew](https://github.com/pforret/bashew) - criador de script bash - de pequeno script autônomo para projetos complexos com CI/CD e testes
* [bashful](https://github.com/jmcantrell/bashful) - Uma coleção de bibliotecas para simplificar a escrita de scripts Bash
* [Bashlets](https://github.com/reale/bashlets) - Uma caixa de ferramentas extensível modular para Bash
* [bashly](https://bashly.dannyb.co/) - Framework de linha de comando Bash e gerador CLI
* [bashmanager](https://github.com/lingtalfi/bashmanager) - mini bash framework para criar ferramentas de linha de comando
* [bashwithnails](https://github.com/mindaugasbarysas/bashwithnails) - um framework Bash escrito apenas para se divertir com testes, gestão de dependência &embalagem
* [bash-language-server](https://github.com/bash-lsp/bash-language-server) - [LSP](https://microsoft.github.io/language-server-protocol/)servidor de idioma Bash baseado
* [bash-modules](https://github.com/vlisivka/bash-modules) - funções para desenvolver com [modo estrito não oficial](http://redsymbol.net/articles/unofficial-bash-strict-mode/) habilitado.
* [bats](https://github.com/bats-core/bats-core) - Sistema de teste automatizado Bash
* [composure](https://github.com/erichs/composure) - Compor, documento, versão e organizar suas funções shell
* [crash](https://github.com/molovo/crash) - Tratamento de erro adequado, exceções e tentativa / captura para ZSH
* [critic.sh](https://github.com/Checksum/critic.sh) - Framework de teste simples morto para Bash com relatórios de cobertura
* [dispatch](https://github.com/Mosai/workshop/blob/master/doc/dispatch.md) - Um analisador de argumento de linha de comando em 50 linhas de script shell portátil.
* [esh](https://github.com/jirutka/esh) - Um motor templating simples baseado em shell, implementado em ~290 linhas de shell POSIX e awk.
* [Fishtape](https://github.com/jorgebucaran/fishtape) - Produtor da TAP e arnês de teste para peixes
* [getoptions](https://github.com/ko1nksm/getoptions) - Um elegante analisador de opções para scripts shell (sh, bash e todas as shells POSIX)
* [getopts.fish](https://github.com/jorgebucaran/getopts.fish) - Analisador CLI para peixes
* [is.sh](https://github.com/qzb/is.sh) - Uma alternativa para o comando de teste builtin, vai tornar as suas declarações "se" bonitas
* [lumberjack](https://github.com/molovo/lumberjack) - Uma interface de registro para scripts shell
* [mo](https://github.com/tests-always-included/mo) - Modelos de bigode em puro bash
* [optparse](https://github.com/nk412/optparse) - Uma embalagem BASH para getopts, para argumentos de linha de comando simples.
* [rerun](https://github.com/rerun/rerun) - Uma estrutura modular de automação shell para organizar seus scripts de guarda
* [revolver](https://github.com/molovo/revolver) - Um girador de progresso reutilizável para scripts shell
* [phases](https://github.com/sorokine/phases) - Pré-processador bash minimamente invasivo, selecione seções do seu script para executar
* [powscript](https://github.com/coderofsalvation/powscript) - bash transpiler escrito em bash (café para bash)
* [semver_bash](https://github.com/cloudflare/semver_bash) - Versão semântica em Bash
* [sh-semver](https://github.com/qzb/sh-semver) - Ferramenta Semver para bash - encontra versões correspondentes às regras especificadas
* [shellcheck](https://github.com/koalaman/shellcheck) - Ferramenta de análise estática para scripts shell
* [shellfire](https://github.com/shellfire-dev/shellfire) - Um repositório de bibliotecas de funções namespaced, composable shell (bash, sh e traço)
* [shellspec](https://github.com/shellspec/shellspec) - Um framework de teste de unidade BDD completo para traço, bash, ksh, zsh e todas as shells POSIX
* [shfmt](https://github.com/mvdan/sh) - Um analisador de shell, formatador e intérprete com suporte bash; inclui shfmt
* [shpec](https://github.com/rylnd/shpec) - Uma estrutura de testes shell
* [shutit](https://ianmiell.github.io/shutit/) - Framework de automação baseado em bash e pexpect
* [sub](https://github.com/basecamp/sub) - Uma maneira deliciosa de organizar programas
* [ts](https://github.com/thinkerbot/ts) - Um script de teste shell
* [urchin](https://github.com/tlevine/urchin) - Um framework de teste de shell idiomático que usa apenas comandos shell
* [shunit2](https://github.com/kward/shunit2) - Estrutura de teste unitário para scripts Bash com sabor de JUnit/PyUnit.
* [rebash](https://github.com/jandob/rebash) - Biblioteca de programação/framework. Características: importações, exceções, ...
* [zunit](https://github.com/zunit-zsh/zunit) - Uma poderosa estrutura de teste de unidade para ZSH

# Guias

* [Bash Official Reference Manual](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html)
* [Bash Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/)
* [Greg Wooledge's (aka "greycat") wiki](https://mywiki.wooledge.org).
  Especificamente [Guia de Bash](https://mywiki.wooledge.org/BashGuide), [FAQ Bash](https://mywiki.wooledge.org/BashFAQ) e [Bash Pitchfalls](https://mywiki.wooledge.org/BashPitfalls)
* [Google's Shell Style Guide](https://google.github.io/styleguide/shell.xml)
* [The Linux Documentation Project: Bash Programming - Intro/How-to](https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)
* [The Linux Documentation Project: Advanced Bash Scripting Guide](https://tldp.org/LDP/abs/html/)
* [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
* [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
* [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)
* [Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial/basics)
* [A guide to learn bash](https://github.com/Idnan/bash-guide)
* [Shell Field Guide](https://raimonster.com/scripting-field-guide/)

# Outras listas Awesome

Outras listas surpreendentemente impressionantes podem ser encontradas em [incrível-amazing](https://github.com/emijrp/awesome-awesome) e [incrível-awesomeness](https://github.com/bayandin/awesome-awesomeness).

### Veja também

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
