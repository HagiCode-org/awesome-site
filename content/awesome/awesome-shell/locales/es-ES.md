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

# Selección de recursos de Shell [![Awesome][awesome-badge]][awesome-link]

Una lista curada de impresionantes marcos de línea de comandos, toolkits, guías y gizmos. Inspirado por el genial-php. Esta impresionante colección también está disponible [Unix-Shell.ZEEF.com](https://unix-shell.zeef.com/caleb.xu).
- [Shells](#shells)
- [Productividad de Command-Line](#command-line-productivity)
  - [Directorio Navegación](#directory-navigation)
- [Personalización](#customization)
- [Para desarrolladores](#for-developers)
- [Usos del sistema](#system-utilities)
- [Descarga y servicio](#downloading-and-serving)
- [Formatos multimedia y archivos](#multimedia-and-file-formats)
- [Aplicaciones](#applications)
- [Juegos](#games)
- [Shell Package Management](#shell-package-management)
- [Shell Script Development](#shell-script-development)
- [Guías](#guides)
- [**Awesome Zsh**][awesome-zsh]&nbsp; [![Awesome][awesome-badge]][awesome-zsh]
- [**Awesome Fish**][awesome-fish] [![Awesome][awesome-badge]][awesome-fish]
- [**Awesome Bash**][awesome-bash] [![Awesome][awesome-badge]][awesome-bash]
- [Otras listas impresionantes](#other-awesome-lists)

## Shells

*Elige tu cáscara base.*

* [bash](https://www.gnu.org/software/bash/) - La cáscara del Proyecto GNU (Bourne Again SHell)
* [elvish](https://elv.sh/) - Características de shell amistosas y expresivas como funciones anónimas y estructuras de datos
* [es](https://wryun.github.io/es-shell/) - La cáscara extensible, basada en el Plan 9 [rc](https://github.com/rakitzis/rc) shell
* [fish](https://fishshell.com) - Concha de línea de comando inteligente y fácil de usar
* [ion](https://github.com/redox-os/ion) - Una cáscara de sistema moderno que cuenta con una sintaxis simple, pero potente. Está escrito enteramente en Rust.
* [ksh93](https://github.com/att/ast) - Korn Shell
* [mksh](https://github.com/MirBSD/mksh) - MirBSD Korn Shell
* [murex](https://github.com/lmorg/murex) - Un entorno más inteligente de shell y scripting con características avanzadas diseñadas para la usabilidad, seguridad y productividad (por ejemplo, herramientas DevOps más inteligentes)
* [ngs](https://github.com/ngs-lang/ngs) - Lenguaje completo de scripting creado específicamente para Ops. REPL está siendo desarrollado.
* [nushell](https://github.com/nushell/nushell) - Un casco moderno escrito en Rust
* [oksh](https://github.com/ibara/oksh) - Portable OpenBSD ksh
* [osh](https://www.oilshell.org) - compatible con Bash, con el nuevo y moderno lenguaje de shell Unix llamado Oil
* [pdksh](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/bin/ksh/) - Dominio público Korn shell
* [powershell](https://docs.microsoft.com/en-us/powershell/scripting/overview) un marco de automatización de tareas y gestión de la configuración multiplataforma, que consiste en un shell de línea de comandos y un lenguaje de scripting
* [shell++](https://github.com/alexst07/shell-plus-plus) - Lenguaje de script de shell funcional y moderno y orientado al objeto
* [shenv](https://github.com/shenv/shenv) - Gestión sencilla de la versión de shell
* [tcsh](https://www.tcsh.org/) - C shell con terminación del nombre de archivo y edición de línea de comandos
* [xonsh](https://xon.sh) - Python-ish, BASHwards-mirando lenguaje de cáscara y comando prompt
* [yash](https://github.com/magicant/yash) - Una concha de línea de comandos compatible con POSIX con soporte incorporado para la terminación y predicción basado en la historia del comando
* [zsh](https://www.zsh.org) - Concha potente con lenguaje de scripting

## Productividad en la línea de comandos

*Buscar, marcadores, multiplexación y otras herramientas que hacen que su experiencia terminal sea más productiva.*

* [AdvancedNewFile](https://github.com/tanrax/terminal-AdvancedNewFile) - Creación rápida de archivos y directorios de forma recurrente. Inspirado por el plugin Vim.
* [ag](https://github.com/ggreer/the_silver_searcher) - Búsqueda de cadenas súper rápidas a través de una jerarquía de directorios
* [aliases](https://github.com/sebglazebrook/aliases) - Contextual, dinámico, organizado alias para bash
* [arttime](https://github.com/reportaman/arttime) - La belleza del arte del texto cumple con la funcionalidad del reloj, temporizador, pomodoro+++
* [autoenv](https://github.com/hyperupcall/autoenv) - Medios basados en directorios.
* [await](https://github.com/slavaGanzin/await) - único binario que ejecuta la lista de comandos en paralelo y espera su terminación
* [bartib](https://github.com/nikolassv/bartib) - Un simple timetracker para la línea de comandos. Guarda un registro de todas las actividades rastreadas como archivo de texto y le permite crear informes flexibles.
* [bashhub](https://github.com/rcaloras/bashhub-client) - :cloud: Bash historia en la nube. Indización y búsqueda.
* [boilr](https://github.com/tmrts/boilr) - Una herramienta CLI muy rápida para crear proyectos de plantillas de caldera.
* [boom](https://github.com/holman/boom) - Guardar enlaces y fragmentos en la línea de comandos
* [borg](https://github.com/ok-borg/borg) - Un motor de búsqueda basado en terminal para comandos bash
* [broot](https://github.com/Canop/broot) - Una mejor manera de navegar por los directorios
* [browsh](https://github.com/browsh-org/browsh) - El moderno navegador basado en texto
* [Buku](https://github.com/jarun/Buku) - Poderoso gestor de marcadores de línea de comandos
* [byobu](https://www.byobu.org) - Gestor de ventana basado en texto y terminal multiplexer
* [cod](https://github.com/dim-an/cod) — Un daemon de terminación para la concha que aprende cuando usted invoca `--help` comandos
* [CloudClip](https://github.com/skywind3000/CloudClip) - Tu propio portapapeles en la nube, copiar y pegar texto con gist entre diferentes sistemas
* [ddgr](https://github.com/jarun/ddgr) - DuckDuckIr desde la terminal
* [desk](https://github.com/jamesob/desk) - Un gestor de espacio de trabajo ligero para la concha
* [direnv](https://github.com/direnv/direnv) - Un interruptor de entorno para la concha, comparar con autoenv
* [dnote](https://github.com/dnote/dnote) - Un simple cuaderno de línea de comandos con sincronización multidispositivo e interfaz web
* [eureka](https://github.com/simeg/eureka/) - :bulbo: herramienta CLI para introducir y almacenar sus ideas sin salir de la terminal
* [fasd](https://github.com/clvv/fasd) - Propulsor de productividad de línea de comandos, ofrece acceso rápido a archivos y directorios
* [fd](https://github.com/sharkdp/fd) - Una alternativa sencilla, rápida y fácil de encontrar.
* [foxy](https://github.com/s-p-k/foxy) - Marcas de texto simple para Firefox y navegadores de surf.
* [fselect](https://github.com/jhspetersson/fselect) - Busca archivos con preguntas similares a SQL.
* [funky](https://github.com/bbugyi200/funky) - Extiende la funcionalidad de las funciones de shell haciendo que sean más potentes y flexibles.
* [fz](https://github.com/changyuheng/fz) - Conclusión de pestañas sin costura para z
* [fzf](https://github.com/junegunn/fzf) - Un buscador borroso de línea de comandos
* [gitmux](https://github.com/arl/gitmux) - Mostrar Git status en Tmux status bar
* [googler](https://github.com/jarun/googler) - Google Search, Google Site Search, Google News de la terminal
* [googlr](https://github.com/Astranno/googlr) - Herramientas de línea de comandos que le permite buscar Google desde su terminal.
* [has](https://github.com/kdabir/has) - `has` ayuda a comprobar la presencia de varias herramientas de línea de comandos y sus versiones en el camino
* [how2](https://github.com/santinic/how2) - `how2` encuentra la manera más simple de hacer algo en una concha unix. Es como `man`, pero puedes consultarlo en lenguaje natural.
* [navi](https://github.com/denisidoro/navi) - Una herramienta interactiva para la línea de comandos
* [hhighlighter](https://github.com/paoloantinori/hhighlighter) - Colorizar palabras en una salida de comandos
* [hr](https://github.com/LuRsT/hr) - `<hr />` para su terminal
* [hss](https://github.com/six-ddc/hss) - Un cliente paralelo interactivo con ejecución autocompleta y asincrónica
* [hstr](https://github.com/dvorka/hstr) - Bash Historia Sugerir caja
* [k](https://github.com/supercrabtree/k) - k es un script Zsh para hacer los listados de directorios más legibles, añadiendo el estado de Git, colores de archivo y fechas de pudrición
* [k alias](https://github.com/lingtalfi/k) - conseguir kool alias (y más) trabajar con una simple línea
* [lf](https://github.com/gokcehan/lf) - Director de archivos terminal escrito en Go, inspirado en ranger
* [lf.sh](https://github.com/suewonjp/lf.sh) - Búsqueda rápida de archivos con menos tipografías y hacer muchos más (golpear, copiar camino a portapapeles, etc)
* [lowcharts](https://github.com/juan-leon/lowcharts) - Dibujar gráficos de baja resolución en terminal
* [Lmod](https://lmod.readthedocs.io/en/latest/) - Módulos de medio ambiente basados en Lua que mejora los módulos basados en Tcl y que son compatibles atrasados (compare con los módulos)
* [loop](https://github.com/Miserlou/Loop) - Escribir y controlar bucles complejos con una sola línea
* [marker](https://github.com/pindexis/marker) - Marca tus comandos de shell
* [mackup](https://github.com/lra/mackup/) - Mantenga la configuración de su aplicación en sincronización (OS X/Linux)
* [mcfly](https://github.com/cantino/mcfly) - Vuela a través de tu historia. ¡Gran Scot!
* [modules](http://modules.sourceforge.net/) - Módulos Clásicos de Medio Ambiente basados en Tcl gestionando el entorno de shell (compare a Lmod, direnv y autoenv)
* [nnn](https://github.com/jarun/nnn) - Navegador de archivos y analizador de uso de disco con excelente integración de escritorio
* [ok-sh](https://github.com/secretGeek/ok-bash) - ¿Trabaja en muchos proyectos diferentes? Y en cada proyecto, ¿hay comandos que uses que son específicos para ese proyecto? Necesitas un archivo .ok.
* [parallel](https://www.gnu.org/software/parallel/) - Construir y ejecutar líneas de comando de shell de entrada estándar en paralelo
* [pass](https://www.passwordstore.org/) - Gestionar contraseñas desde la línea de comandos con encriptación GPG e integración git opcional.
* [pathpicker](https://github.com/facebook/PathPicker) - Acepta entradas como grep, búsquedas, git etc; permite seleccionar archivos del resultado de la entrada, que puede abrir o proporcionar como argumento a un comando.
* [pdd](https://github.com/jarun/pdd) - Tiny date, time diff calculator with timers
* [percol](https://github.com/mooz/percol) - Agrega el sabor del filtrado interactivo al concepto tradicional de tubería de UNIX shell
* [q](https://github.com/cal2195/q) - Vim como registros macro para su Bash y Zsh Shell
* [qfc](https://github.com/pindexis/qfc) - Fichero completo para Bash y Zsh
* [resh](https://github.com/curusarn/resh) - Historial contextual para Zsh y Bash
* [rg](https://github.com/BurntSushi/ripgrep) - ripgrep es una herramienta de búsqueda orientada hacia la línea que combina la usabilidad de The Silver Searcher con la velocidad cruda de GNU grep
* [screen](https://www.gnu.org/software/screen/) - GNU terminal multiplexer
* [shell-history](https://github.com/pawamoy/shell-history) - Visualice su uso de cáscara con Highcharts
* [SHML](https://github.com/odb/shml) - Marco de estilo para el terminal (Shell Markup Language)
* [slugify](https://github.com/benlinton/slugify) - Comando que convierte nombres de archivo y directorios a un formato web amigable
* [sman](https://github.com/tokozedg/sman) - :bug: Un gestor de snippet de línea de comandos
* [spark](https://github.com/holman/spark) - En tu cáscara
* [spark.fish](https://github.com/jorgebucaran/spark.fish) - Generador Sparkline
* [sheet](https://github.com/oscardelben/sheet) - Snippets de texto para la línea de comandos
* [spot](https://github.com/rauchg/spot) - Pequeña utilidad de búsqueda de archivos
- [snips](https://github.com/srijanshetty/snips) - Herramienta de línea de comandos para gestionar fragmentos de código.
* [sqlline](https://github.com/julianhyde/sqlline) - Shell for issuing SQL to relational databases via JDBC (multiline, completion, highlighting, dialect support)
* [sshfs](https://github.com/osxfuse/sshfs) - Una herramienta para montar sistemas de archivos remotos sobre SSH
* [sudocabulary](https://github.com/badarsh2/Sudocabulary) - Aprender vocabulario inglés desde su terminal
* [surfraw](https://gitlab.com/surfraw/Surfraw) - Buscar sitio específico y buscar la web desde su terminal sin navegador.
* [task-manager](https://github.com/lingtalfi/task-manager) - Ejecute todos tus scripts con solo dos o tres pulsaciones.
* [td-cli](https://github.com/darrikonn/td-cli) - Un gerente de línea de comandos para organizar y gestionar todos a través de múltiples proyectos.
* [tere](https://github.com/mgunyho/tere) - Una alternativa más rápida a cd + ls
* [thefuck](https://github.com/nvbn/thefuck) - Arreglar errores comunes de shell usando un comando fácil de recordar
* [tldr](https://github.com/raylee/tldr-sh-client) - Un cliente bash totalmente funcional para las páginas de tldr, simplificado y basado en la comunidad
* [tmux](https://tmux.github.io/) - Increíble terminal multiplexer
* [undollar](https://github.com/xtyrrell/undollar) - Undollar pica el signo del dólar de la punta del comando que acaba de pegar en su terminal
* [usql](https://github.com/xo/usql) - Interfaz universal de línea de comandos para bases de datos SQL.
* [v](https://github.com/rupa/v) - z for vim.
* [wemux](https://github.com/zolrath/wemux) - Multi-User Tmux Made Easy
* [xiki](https://github.com/trogdoro/xiki) - Hace que la consola de shell sea más amigable y poderosa
* [xplr](https://github.com/sayanarijit/xplr) - Un explorador de archivos TUI hackable, mínimo, rápido
* [xsv](https://github.com/BurntSushi/xsv) - un kit rápido de línea de comandos CSV escrito en Rust
* [xxh](https://github.com/xxh/xxh) - Trae tu concha favorita donde vayas por el SSH.

### Navegación por directorios

* [aliasme](https://github.com/Jintin/aliasme) - alias helper para cambiar el directorio rápidamente
* [autojump](https://github.com/wting/autojump) - Un comando cd que aprende - fácilmente navegar directorios de la línea de comandos
* [bashmarks](https://github.com/huyng/bashmarks) - Marcadores de directorio para la concha
* [bd](https://github.com/vigneshwaranr/bd) - Volver rápidamente a un directorio padre
* [commacd](https://github.com/shyiko/commacd) - Una manera más rápida de moverse en Bash
* [enhancd](https://github.com/b4b4r07/enhancd) - :rocket: Un comando cd de próxima generación con un filtro interactivo
* [goto](https://github.com/iridakos/goto) - Una utilidad de shell para la navegación a los directorios alias que apoyan la autocompleción
* [jump](https://github.com/gsamokovarov/jump) - Jump le ayuda a navegar su sistema de archivos más rápido aprendiendo sus hábitos.
* [lazy-cd](https://github.com/pedramamini/lazy-cd) - comandos bash simples para la navegación reservada del sistema de archivos, completo con bash-completion.
* [up](https://github.com/shannonmoeller/up) - Ascend directorios por nombre o cuenta; por bash, zsh y pescado.
* [z](https://github.com/rupa/z) - z es el nuevo j, yo
* [z.lua](https://github.com/skywind3000/z.lua) - Un nuevo comando cd que te ayuda a navegar más rápido aprendiendo tus hábitos
* [zoxide](https://github.com/ajeetdsouza/zoxide) - Una manera más rápida de navegar por su sistema de archivos, escrito en Rust
* [zpyi](https://github.com/sakshamsharma/zpyi) - Python en Zsh - Python fácil scripting en shell

## Personalización

*Motivos personalizados, temas de color, etc.*

* [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) — Minimalistic Aphrodite theme (prompt) para terminales sexy que trabaja en bash, pescado y zsh
* [base16-builder](https://github.com/base16-builder/base16-builder) - Base16-Builder
* [bash-full-of-colors](https://github.com/slomkowski/bash-full-of-colors) - Potente impulso con pantalla, tmux, soporte de git y muchos más
* [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) - Un aviso informativo y elegante para los usuarios de Git
* [bash-powerline](https://github.com/riobard/bash-powerline) - Powerline-style Bash prompt in pure Bash script
* [bashstrap](https://github.com/barryclark/bashstrap) - Una manera rápida de subir la terminal OSX
* [bullet-train-oh-my-zsh-theme](https://github.com/caiogondim/bullet-train.zsh) - :bullettrain side: Un tema de shell oh-my-zsh basado en el plugin Powerline Vim
* [emojify](https://github.com/mrowa44/emojify) Emoji on the command line :scream:
* [flatui-terminal-theme](https://dribbble.com/shots/1021755-Flat-UI-Terminal-Theme) - Colores más bonitos para la terminal
* [geometry](https://github.com/geometry-zsh/geometry) - Un tema mínimo de ZSH donde cualquier función puede ser agregada al impulso izquierdo o (async) de la derecha en la mosca.
* [git-prompt](https://github.com/lvv/git-prompt) - Impulsión Bash con módulos Git, SVN y HG
* [gittify](https://github.com/momeni/gittify) - Un colorido impulso Bash + alias Git personalizado
* [Gogh - Color Scheme](https://github.com/Mayccoll/Gogh) - Esquema de color para la terminal Gnome
* [liquidprompt](https://github.com/nojhan/liquidprompt) - Un completo &adaptador cuidadosamente diseñado para Bash &Zsh
* [mysql-colorize](https://github.com/zpm-zsh/mysql-colorize) - Colorización para cliente mysql comand-line
* [oh-my-git](https://github.com/arialdomartini/oh-my-git) - Un aviso de git para bash y zsh
* [oh-my-posh](https://ohmyposh.dev) - Prompt motor de tema para cualquier concha y plataforma escrito en marcha.
* [polyglot](https://github.com/agkozak/polyglot) - Un aviso informativo de Git que funciona en bash, zsh, ksh, mksh, pdksh, oksh, dash, yash, apretado shbox, y osh
* [powerlevel10k](https://github.com/romkatv/powerlevel10k) - Super flexible impresionante Powerline ZSH tema
* [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt) - Presion de bash con colores, estado de Git, y ramas de Git
* [starship](https://starship.rs/) - Rápida, personalizable, tragamonedas escritas en óxido
* [synth-shell](https://github.com/andresgongora/synth-shell) - Greeter con un informe de estado personalizable y un aviso de bajo lujoso

## Para desarrolladores

*Desarrollo de línea de comandos, control de versiones y despliegue.*

* [1Password SSH Agent](https://developer.1password.com/docs/ssh/) - Autenticate Git y SSH flujos de trabajo con desbloqueo biométrico utilizando 1Password
* [ack](https://beyondgrep.com/) - Una herramienta de búsqueda similar a grep optimizada para código fuente.
* [add-gitignore](https://github.com/TejasQ/add-gitignore) - CLI interactivo que genera un .gitignore para su proyecto basado en sus necesidades.
* [bcal](https://github.com/jarun/bcal) - CALculador Byte para conversiones de almacenamiento y cálculos
* [bitwise](https://github.com/mellowcandle/bitwise) - Manipulador interactivo con base terminal en maldiciones.
* [bocker](https://github.com/p8952/bocker) - Docker implementado en 100 líneas de bash
* [cloc](https://github.com/AlDanial/cloc) - Conde Lines of Code
* [doclt](https://github.com/omgimanerd/doclt) - Una interfaz de línea de comandos al Océano Digital
* [dokku](https://github.com/dokku/dokku) - Docker propulsaba mini-Heroku. La implementación más pequeña de PaaS que has visto.
* [forgit](https://github.com/wfxr/forgit) - Herramienta Utilidad `git` aprovechando el fuzzy Finder Fzf.
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - Muchas utilidades extra Git. Churn, corte-branch, mejor combinación y muchos más.
* [git-extras](https://github.com/tj/git-extras) - Git utilities - resumir, repl, changelog population, author commit percentages and more
* [git-open](https://github.com/paulirish/git-open) - Tipo `git open` abrir la página GitHub o sitio web para un repositorio en su navegador
* [git-quick-stats](https://github.com/arzzen/git-quick-stats) - Las estadísticas rápidas son una manera sencilla y eficiente de acceder a varias estadísticas en el repositorio git.
* [git-semver](https://github.com/markchalloner/git-semver) - plugin de Git para facilitar la versión semántica y validación de cambios
* [git-sh](https://github.com/rtomayko/git-sh) - Un ambiente Bash personalizado adecuado para Git trabajo
* [gita](https://github.com/nosarthur/gita) - Una herramienta de línea de comandos para administrar múltiples repos git.
* [hub](https://github.com/github/hub) - El centro te ayuda a ganar en git.
* [just](https://github.com/casey/just) - Corredor de tareas para guardar y ejecutar comandos específicos del proyecto.
* [licins](https://github.com/dogoncouch/licins) - Insertar licencias de software comentadas en código fuente.
* [mkdkr](https://github.com/rosineygp/mkdkr) - Makefile + Docker = CI Pipeline
* [mr](https://myrepos.branchable.com) - Herramienta de gestión de depósitos múltiples
* [nve](https://github.com/ehmicky/nve) - Ejecute cualquier comando en versiones específicas de Node.js.
* [overcommit](https://github.com/sds/overcommit) - Un gestor de gancho Git totalmente configurable y extensible
* [pre-commit](https://pre-commit.com) - Un marco para la gestión y el mantenimiento de ganchos precommitados multilingües
* [rebound](https://github.com/shobrook/rebound) - Busque instantáneamente los resultados de Stack Overflow en su terminal cuando obtenga un error de compilador
* [repren](https://github.com/jlevy/repren) - Mando en línea de búsqueda y sustitución y arma de archivos cuchillo del ejército
* [slap](https://github.com/slap-editor/slap) - Sublime-like terminal-based text editor that runs on Node.js
* [shipit](https://github.com/sapegin/shipit) - Implementación mínima de SSH
* [starring](https://github.com/ritz078/starring) - Protagoniza automáticamente los npm-paquetes que usas en GitHub.
* [tag](https://github.com/aykamko/tag) - Saltar al instante a tus fósforos.
* [trunk](https://www.npmjs.com/package/@trunkio/launcher) - Comprobador de códigos y formatter rápido
* [vmn](https://github.com/final-israel/vmn) - versión automática basada en git y solución de recuperación del estado agnostic a lenguaje o arquitectura
* [wipe-modules](https://github.com/bntzio/wipe-modules) - Un pequeño agente que elimina la carpeta node modules de proyectos no activos

## Utilidades del sistema

*Herramientas relacionadas con el sistema operativo, incluida la administración del sistema, la depuración del sistema y la gestión de archivos y procesos*.

* [atop](https://www.atoptool.nl) - Monitor de rendimiento de pantalla completa ASCII capaz de informar sobre la actividad de todos los procesos
* [bat](https://github.com/sharkdp/bat) - A `cat` clon con alas
* [bmon](https://github.com/tgraf/bmon) - Monitor de ancho de banda en tiempo real y estimador de tarifas con salida visual amigable con el ser humano
* [btop](https://github.com/aristocratos/btop) - Monitor de recursos Linux/OSX/FreeBSD
* [catcli](https://github.com/deadc0de6/catcli) - La herramienta de catálogo de línea de comandos para sus datos offline
* [ccat](https://github.com/owenthereal/ccat) - El gato colorante. Funciona similar al gato pero muestra contenido con resaltado de sintaxis.
* [exa](https://github.com/ogham/exa) - Una versión moderna `ls`.
* [progress](https://github.com/Xfennec/progress) - herramienta Linux para mostrar progreso `cp`, `rm`, `dd`Y más...
* [stronghold](https://github.com/alichtman/stronghold) - Configurar fácilmente configuraciones de seguridad MacOS desde el terminal.
* [glances](https://github.com/nicolargo/glances) - Un ojo en tu sistema
* [goaccess](https://github.com/allinurl/goaccess) - GoAccess es un analizador de registros web en tiempo real y un visor interactivo que funciona en un terminal en sistemas \*nix.
* [hblock](https://github.com/hectorm/hblock) - Adblocker basado en Hosts-file
* [histstat](https://github.com/vesche/histstat) - Historia para netstat
* [htop](https://github.com/hishamhm/htop) - Un espectador interactivo basado en ncurses que pretende ser mejor `top`
* [lnav](https://lnav.org) - Un visor avanzado de archivos de registro para la pequeña escala
* [logdissect](https://github.com/dogoncouch/logdissect) - Utilidad CLI y API Python para analizar archivos de registro y otros datos.
* [ls++](https://github.com/trapd00r/ls--) - Colorizado en esteroides
* [lsd](https://github.com/Peltoche/lsd) - LSDeluxe, reescribir de GNU ls con muchas características adicionales como colores, iconos, vista a los árboles y opciones de formato.
* [lsp](https://github.com/dborzov/lsp) - Una mejora `ls`, con descripciones de archivos en lenguaje plano y agrupación de archivos inteligentes
* [maza](https://github.com/tanrax/maza-ad-blocking) - Bloqueador de anuncios local. Como Pi-hole pero local y usando su sistema operativo.
* [mtr](https://github.com/traviscross/mtr) - La funcionalidad de los programas de 'traceroute' y 'ping' en una sola herramienta de diagnóstico de red.
* [ncdu](https://dev.yorhel.nl/ncdu) - NCurses Disk Usage
* [nmtui](https://github.com/NetworkManager/NetworkManager) - Interfaz de usuario de texto para controlar NetworkManager
* [powertop](https://github.com/fenrus75/powertop) - Uso de baterías y estadísticas de dispositivo monitoreando la herramienta línea de comandos, con opciones de ajuste.
* [prettyping](https://github.com/denilsonsa/prettyping) - Haciendo la salida `ping` más bonito, más colorido, más compacto y más fácil de leer.
* [procdog](https://github.com/jlevy/procdog) - Control de línea de comandos ligeros de procesos de larga duración como servidores
* [quick-secure](https://github.com/marshyski/quick-secure) - Sistemas UNIX/Linux de seguridad rápida
* [rng](https://github.com/nickolasburr/rng) - Copia rango de líneas de archivo o stdin a stdout.
* [tiptop](https://github.com/nschloe/tiptop) - Monitor gráfico del sistema de línea de comandos.
* [wifi-wand](https://github.com/keithrbennett/wifiwand) - una aplicación de línea de comandos Ruby para gestionar WiFi en MacOS (instalar por `gem install wifi-wand`)
* [xiringuito](https://github.com/ivanilves/xiringuito) - "VPN para pobres"

## Descarga y publicación

*Servidores auto hospedados, ligeros y herramientas de redes escritas en scripts de shell.*

* [aria2](https://github.com/aria2/aria2) - aria2 es un multiprotocolo ligero &multifuente, utilidad de descarga de plataforma cruzada operada en línea de comandos. Soporta HTTP/HTTPS, FTP, BitTorrent y Metalink
* [balls](https://github.com/jneen/balls) - Bash on Balls
* [bashttpd](https://github.com/avleen/bashttpd) - Un servidor web escrito en Bash
* [bashhub-server](https://github.com/nicksherron/bashhub-server) - Historia de la nube privada. Servidor de código abierto para bashhub
* [bitpocket](https://github.com/sickill/bitpocket) - "DIY Dropbox" o "Director de 2 vías (r)sincron con la eliminación adecuada"
* [Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader) - Dropbox Uploader es un script Bash que se puede utilizar para cargar, descargar, listar o eliminar archivos de Dropbox
* [httpie](https://github.com/httpie/httpie) - HTTPie es un cliente de línea de comandos HTTP, un reemplazo cURL fácil de usar
* [HTTPLab](https://github.com/gchaincl/httplab) - El servidor web interactivo, le permite inspeccionar las solicitudes de HTTP y forjar respuestas.
* [Kapow!](https://github.com/BBVA/kapow) - Si puedes escribirlo, puedes HTTP.
* [ngincat](https://github.com/jaburns/ngincat) - Servidor pequeño Bash HTTP usando netcat
* [resty](https://github.com/micha/resty) - Pequeña línea de comandos cliente REST que puede utilizar en tuberías
* [shell2http](https://github.com/msoap/shell2http) - Servidor HTTP para ejecutar comandos de shell. Diseñado para el desarrollo, prototipado o control remoto
* [tshare](https://github.com/trikko/tshare) - Compartir archivos desde línea de comandos.
* [vesper](https://github.com/chris-rock/vesper) - ØVesper es un marco HTTP para Bash/Unix Shell
* [xh](https://github.com/ducaale/xh) - Herramienta amigable y rápida para enviar solicitudes HTTP
* [yt-dlp](https://github.com/yt-dlp/yt-dlp) - Programa de línea de comandos para descargar vídeos de YouTube.com y otros sitios de vídeo

## Multimedia y formatos de archivo

*Herramientas para el manejo de archivos de vídeo y audio.*

* [adb-export](https://github.com/sromku/adb-export) - Exportar proveedores de contenido Android a formato CSV
* [Android-Kitchen](https://github.com/dsixda/Android-Kitchen) - Una cocina basada en texto para Android ROM personalización. Utiliza scripts de shell y trabaja con Cygwin/OS X/Linux
* [Beets](https://github.com/beetbox/beets) - Gestor de la biblioteca musical y etiquetador MusicBrainz
* [cmus](https://github.com/cmus/cmus) - Reproductor de audio cli multiplataforma.
* [dasel](https://github.com/tomwright/dasel) - Consultar y actualizar las estructuras de datos usando selectores de la línea de comandos. Comparable con [jq](https://github.com/stedolan/jq) / [Yq](https://github.com/kislyuk/yq) pero soporta JSON, YAML, TOML y XML con dependencias de tiempo de ejecución cero.
* [dzr](https://github.com/yne/dzr) - Interplataforma Deezer.com reproductor de audio.
* [fx](https://github.com/antonmedv/fx) - Herramienta de procesamiento JSON de línea de comando por anononymus JavaScript funciones
* [gifgen](https://github.com/lukechilds/gifgen) - Codificación GIF de alta calidad
* [image-scraper](https://github.com/sananth12/ImageScraper) - Un raspador de imagen de línea de comando fresco con muchas características.
* [imgp](https://github.com/jarun/imgp) - Revestimiento de imagen de lote rápido y rotador
* [jc](https://github.com/kellyjonbrazil/jc) - Convertir salida de comandos, tipos de archivo y cadenas comunes en JSON o YAML para un uso más fácil en scripts.
* [jo](https://github.com/jpmens/jo) - Una pequeña utilidad para crear objetos JSON de argumentos de línea de comandos.
* [jq](https://github.com/stedolan/jq) - Sed for json data. Puede utilizarlo para cortar, filtrar y mapear y transformar datos estructurados
* [korkut](https://github.com/oguzhaninan/korkut) - Procesamiento rápido y sencillo de imágenes en la línea de comandos.
* [library](https://github.com/chapmanjacobd/library) - Crear bases de datos SQLITE para carpetas de música, vídeo, imágenes o medios en línea. Juega y rastrea los medios como Plex pero una interfaz solo CLI con muchas opciones de clasificación.
* [mpv](https://mpv.io/) - Le permite reproducir la mayoría de los formatos de audio y vídeo (utilizando caracteres ASCII) en la cáscara así como en un GUI.
* [nehm](https://github.com/bogem/nehm) - Herramienta de consola, que descarga, establece etiquetas IDv3 y agrega a su iTunes (si lo usas) su SoundCloud le gusta de manera conveniente
* [PiCAST](https://github.com/lanceseidman/PiCAST) - PiCAST convierte su $35 Raspberry Pi en un Chromecast como dispositivo
* [sejda](https://github.com/torakiki/sejda/) - Manipulación de la línea de comandos de documentos PDF (split, fusionar, rotar, convertir a jpg, extraer texto, etc)
* [visidata](https://github.com/saulpw/visidata) - Un multiherramienta terminal para explorar y organizar datos (csv/json/xml/xls/yaml/etc)
* [xidel](https://github.com/benibela/xidel/) - Herramienta Cli para filtrar, mapear y crear datos HTML/XML/JSON con XPath y XQuery (Turing-complete).
* [xmlstarlet](http://xmlstar.sourceforge.net/) - Herramienta antigua pero potente para el formato XML de línea de comandos, filtración y manipulación.
* [yq](https://github.com/mikefarah/yq) - Yq es un procesador de YAML portátil

## Aplicaciones

*Aplicaciones basadas en la línea de comandos o acceso de línea de comandos a los servicios existentes*.

* [ansiweather](https://github.com/fcambus/ansiweather) - El tiempo en su terminal, con colores ANSI y símbolos Unicode
* [awless](https://github.com/wallix/awless) - Una potente, innovadora y pequeña superficie CLI para manejar AWS.
* [bashblog](https://github.com/cfenollosa/bashblog) - Un script Bash que maneja la publicación del blog
* [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - Hermosas imágenes de su código, desde el interior de su terminal.
* [choosealicense-cli](https://github.com/lord63/choosealicense-cli) - Elija una licencia OSS desde la comodidad de su terminal
* [cointop](https://github.com/miguelmota/cointop) - La aplicación UI más rápida e interactiva para rastrear criptomonedas
* [dstask](https://github.com/naggie/dstask) - Administrador de TODO basado en terminales único con notas de sincronización basadas en git + marcador por tarea
* [editly](https://github.com/mifi/editly) - Editor de video de la línea de comandos
* [facebook-cli](https://github.com/specious/facebook-cli) - Herramientas de línea de comandos de Facebook
* [fanyi](https://github.com/afc163/fanyi) - Traducir inglés a chino en terminal
* [gcalcli](https://github.com/insanum/gcalcli) - Interfaz de línea de comandos Google Calendar
* [geeknote](https://github.com/VitaliyRodnenko/geeknote) - Comando del cliente Evernote
* [haxor-news](https://github.com/donnemartin/haxor-news) - Hojee Hacker News como un haxor
* [hn-cli](https://github.com/rafaelrinaldi/hn-cli) - Hojee Hacker News desde la comodidad de su Terminal
* [iponmap](https://github.com/nogizhopaboroda/iponmap) - Dibujo punto en el mapa mundial con dirección ip
* [isitup](https://github.com/lord63/isitup) - Compruebe si un sitio web está arriba o abajo
* [jrnl](https://github.com/jrnl-org/jrnl) - Una simple aplicación de la línea de comandos que almacena su diario en un archivo de texto
* [kanban.bash](https://github.com/coderofsalvation/kanban.bash) - tablero de comando asciii kanban para hackers de bajo de productividad minimalista (con base en csv)
* [ledger](https://github.com/ledger/ledger) - Contabilidad de la línea de mando
* [licen](https://github.com/lord63/licen) - Genera tu licencia. Otro piojos, pero implementa con Jinja2 y docopt
* [md2png](https://github.com/weaming/md2png) - Convertir marcador en imagen PNG
* [moviemon](https://github.com/iCHAIT/moviemon) - Todo sobre tus películas dentro de la línea de comandos.
* [nomino](https://github.com/yaa110/nomino) - Batch renombrar utilidad usando regex, clasificar y map opciones de archivo.
* [pcalc](https://github.com/alt-romes/programmer-calculator) - Calculadora hecha para programadores que trabajan con múltiples representaciones, tamaños y en general cerca de los bits.
* [pockyt](https://github.com/achembarpu/pockyt) - Lee, administra y automatiza tu [Pocket](https://getpocket.com) colección.
* [pushblast](https://github.com/alebcay/pushblast) - Obtenga notificaciones de PushBullet cuando sale un programa de shell
* [pushbullet-bash](https://github.com/Red5d/pushbullet-bash) - Interfaz Bash con la API de PushBullet
* [ranger](https://github.com/ranger/ranger) - Un gestor de archivos de consola con VI llaveros.
* [Reddit Terminal Viewer](https://github.com/michael-lazar/rtv) - Busque Reddit desde su terminal
* [SAWS](https://github.com/donnemartin/saws) - AWS CLI
* [taskbook](https://github.com/klaussinani/taskbook) - Tareas, juntas &notas para el hábitat de línea de comandos
* [taskwarrior](https://taskwarrior.org/) - Un administrador de la lista de comandos TODO
* [terjira](https://github.com/keepcosmos/terjira) - Herramienta de energía de línea de mando para Jira
* [ticker](https://github.com/achannarasappa/ticker) — Ticker terminal con actualizaciones en vivo y seguimiento de posición
* [vl](https://github.com/ellisonleao/vl) - Verificación de enlaces URL en documentos de texto
* [wego](https://github.com/schachmat/wego) - Aplicación meteorológica para la terminal
* [whales](https://github.com/Gueils/whales) - Una herramienta para dockerizar automáticamente sus aplicaciones
* [whereami](https://github.com/rafaelrinaldi/whereami) - Obtener información de geolocalización del CLI
* [wttr.in](https://github.com/chubin/wttr.in) - :partly sunny: La manera correcta de comprobar el tiempo (curl wttr.in)

## Juegos

*Todo el trabajo y ninguna obra es una forma cruda de pasar tu día.*

* [bash2048](https://github.com/mydzor/bash2048) - Bash aplicación de 2048 juego
* [minesweeper](https://github.com/feherke/Bash-script/tree/master/minesweeper) - Aplicación básica de las minas
* [nudoku](https://github.com/jubalh/nudoku) - ncurses basado sudoku juego escrito en C
* [piu-piu](https://github.com/vaniacer/piu-piu-SH) - Juegos de desplazamiento horizontal en bash con modo multijugador!
* [sedtris](https://github.com/uuner/sedtris) - Tetris en sed
* [sed-scripts](https://github.com/aureliojargas/sed-scripts) - Arkanoid y Sokoban escritos usando sed
* [SHTAP](https://notimetoplay.org/engines/shtap/) - Motor de aventura de texto reutilizable para Bash 4
* [tty-solitaire](https://github.com/mpereira/tty-solitaire) - ¡Juega solitario en tu terminal!

## Gestión de paquetes de Shell

*Herramientas para gestionar múltiples configuraciones de shell. Para herramientas específicas para zsh, vea la sección Zsh.*

* [bash-it](https://github.com/Bash-it/bash-it) - Un marco comunitario Bash
* [basher](https://github.com/basherpm/basher) - Un administrador de paquetes para scripts de shell
* [bashing](https://github.com/xsc/bashing) - Smashing Bash en piezas
* [bpkg](https://www.bpkg.sh/) - JavaScript tiene npm, Ruby tiene gemas, Python tiene pip y ahora Shell tiene bpkg
* [dotdrop](https://github.com/deadc0de6/dotdrop) - Guarda tus fichas una vez, desplegándolos por todas partes.
* [dotfiler](https://github.com/svetlyak40wt/dotfiler) – Shell agnostic git based dotfiles package manager, escrito en Python.
* [fresh](https://github.com/freshshell/fresh) - Mantenga sus fichas frescas
* [homeshick](https://github.com/andsens/homeshick) - Sincronizador Git Dotfile escrito en Bash
* [shallow-backup](https://github.com/alichtman/shallow-backup) - Crear fácilmente documentación ligera de paquetes instalados, fichas y más
* [shundle](https://github.com/javier-lopez/shundle) - Gestor de plugin para scripts de shell
* [vcsh](https://github.com/RichiH/vcsh) - Gerente de Config basado en Git
* [yadm](https://yadm.io/) - Gestor de fichas con base en Git, que soporta encriptación, alterna y arranque

## Desarrollo de scripts de Shell

*Herramientas para escribir, mejorar o organizar Bash u otros scripts de shell*

* [ansi](https://github.com/fidian/ansi) - Códigos de escape ANSI en bash puro - cambiar el color del texto, colocar el cursor, mucho más
* [assert.sh](https://github.com/lehmannro/assert.sh) - Marco de pruebas de la unidad Bash
* [bashew](https://github.com/pforret/bashew) - bash script Creator - desde pequeño script independiente a proyectos complejos con CI/CD y pruebas
* [bashful](https://github.com/jmcantrell/bashful) - Una colección de bibliotecas para simplificar la escritura de scripts Bash
* [Bashlets](https://github.com/reale/bashlets) - Una caja de herramientas extensible modular para Bash
* [bashly](https://bashly.dannyb.co/) - Marco de línea de comandos Bash y generador CLI
* [bashmanager](https://github.com/lingtalfi/bashmanager) - mini bash framework for creating command line tools
* [bashwithnails](https://github.com/mindaugasbarysas/bashwithnails) - un marco Bash escrito sólo para divertirse con pruebas, gestión de dependencia &embalaje
* [bash-language-server](https://github.com/bash-lsp/bash-language-server) - [LSP](https://microsoft.github.io/language-server-protocol/)- servidor de idiomas Bash
* [bash-modules](https://github.com/vlisivka/bash-modules) - funciones para desarrollar con [modo estricto no oficial](http://redsymbol.net/articles/unofficial-bash-strict-mode/) habilitado.
* [bats](https://github.com/bats-core/bats-core) - Sistema de Prueba Automatizada Bash
* [composure](https://github.com/erichs/composure) - Componga, documente, versión y organice sus funciones de shell
* [crash](https://github.com/molovo/crash) - Manejo adecuado de errores, excepciones y prueba/coge para ZSH
* [critic.sh](https://github.com/Checksum/critic.sh) - Marco de pruebas simples muerto para Bash con informes de cobertura
* [dispatch](https://github.com/Mosai/workshop/blob/master/doc/dispatch.md) - Un parser de argumento de línea de comandos en 50 líneas de script de shell portátil.
* [esh](https://github.com/jirutka/esh) - Un motor de templanza simple basado en shell, implementado en ~290 líneas de POSIX shell y awk.
* [Fishtape](https://github.com/jorgebucaran/fishtape) - Productor TAP y arnés de prueba para peces
* [getoptions](https://github.com/ko1nksm/getoptions) - Un elegante parser de opciones para scripts de shell (sh, bash y todos los shells POSIX)
* [getopts.fish](https://github.com/jorgebucaran/getopts.fish) - Parser CLI para peces
* [is.sh](https://github.com/qzb/is.sh) - Una alternativa para el comando de prueba incorporado, hará sus declaraciones "si" bonitas
* [lumberjack](https://github.com/molovo/lumberjack) - Una interfaz de registro para scripts de shell
* [mo](https://github.com/tests-always-included/mo) - plantillas de bigote en bash puro
* [optparse](https://github.com/nk412/optparse) - Un envoltorio de BASH para getopts, para simples argumentos de línea de comandos.
* [rerun](https://github.com/rerun/rerun) - Un marco modular de automatización de conchas para organizar sus scripts de guarda
* [revolver](https://github.com/molovo/revolver) - Un spinner de progreso reutilizable para scripts de shell
* [phases](https://github.com/sorokine/phases) - Preprocesador de bash mínimamente invasivo, seleccione secciones de su script para ejecutar
* [powscript](https://github.com/coderofsalvation/powscript) - bash transpiler escrito en bash (coffeescript para bash)
* [semver_bash](https://github.com/cloudflare/semver_bash) - Versión semántica en Bash
* [sh-semver](https://github.com/qzb/sh-semver) - Herramienta Semver para bash - encuentra versiones que se corresponden con reglas especificadas
* [shellcheck](https://github.com/koalaman/shellcheck) - Herramienta de análisis estadístico para scripts de shell
* [shellfire](https://github.com/shellfire-dev/shellfire) - Un repositorio de bibliotecas de la función namespaced, composable shell (bash, sh y dash)
* [shellspec](https://github.com/shellspec/shellspec) - Un marco de prueba de unidad BDD completo para dash, bash, ksh, zsh y todos los shells POSIX
* [shfmt](https://github.com/mvdan/sh) - Un analizador de conchas, formador e intérprete con soporte bash; incluye shfmt
* [shpec](https://github.com/rylnd/shpec) - Un marco de pruebas de conchas
* [shutit](https://ianmiell.github.io/shutit/) - Marco de automatización basado en bash y pexpect
* [sub](https://github.com/basecamp/sub) - Una forma deliciosa de organizar programas
* [ts](https://github.com/thinkerbot/ts) - Un guión de prueba de shell
* [urchin](https://github.com/tlevine/urchin) - Un marco de pruebas de shell idiomáticas que solo utiliza comandos de shell
* [shunit2](https://github.com/kward/shunit2) - Un marco de prueba unitario para scripts Bash con un sabor de JUnit/PyUnit.
* [rebash](https://github.com/jandob/rebash) - Biblioteca de scripts/framework. Características: importaciones, excepciones, pruebas de doc ...
* [zunit](https://github.com/zunit-zsh/zunit) - Un poderoso marco de pruebas unitarias para ZSH

# Guías

* [Bash Official Reference Manual](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html)
* [Bash Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/)
* [Greg Wooledge's (aka "greycat") wiki](https://mywiki.wooledge.org).
  Específicamente [Bash Guide](https://mywiki.wooledge.org/BashGuide), [Bash FAQ](https://mywiki.wooledge.org/BashFAQ) y [Bash Pitfalls](https://mywiki.wooledge.org/BashPitfalls)
* [Google's Shell Style Guide](https://google.github.io/styleguide/shell.xml)
* [The Linux Documentation Project: Bash Programming - Intro/How-to](https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)
* [The Linux Documentation Project: Advanced Bash Scripting Guide](https://tldp.org/LDP/abs/html/)
* [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
* [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
* [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)
* [Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial/basics)
* [A guide to learn bash](https://github.com/Idnan/bash-guide)
* [Shell Field Guide](https://raimonster.com/scripting-field-guide/)

# Otras listas Awesome

Otras listas increíblemente impresionantes se pueden encontrar en [asombroso](https://github.com/emijrp/awesome-awesome) y [asombroso](https://github.com/bayandin/awesome-awesomeness).

### Véase también

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
