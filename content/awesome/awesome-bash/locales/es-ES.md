# Awesome Bash [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) <!-- omit in toc -->

> Una lista seleccionada de fantásticos guiones y recursos Bash.

Además de esta lista, debes leer la lista [awesome-shell](https://github.com/alebcay/awesome-shell). Es una lista seleccionada de increíbles marcos de trabajo, kits de herramientas, guías y artilugios de línea de comandos. Es posible que también desee comprobar [awesome-zsh](https://github.com/unixorn/awesome-zsh-plugins) o [awesome-fish](https://github.com/bucaran/awesome-fish). Si está buscando más listas, consulte [sindresorhus/awesome](https://github.com/sindresorhus/awesome).

## Contenido <!-- omit in toc -->

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

## Libros y recursos

- [The Bash-Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/): documentación legible por humanos de cualquier tipo sobre GNU Bash.
- [Bash beginner's mistakes](https://web.archive.org/web/20230330234404/https://wiki.bash-hackers.org/scripting/newbie_traps) - Lista de errores de principiante Bash (según Bash-Hackers Wiki).
- [Bash Guide](http://mywiki.wooledge.org/BashGuide): una guía bash para principiantes (por Lhunath).
- [Bash FAQ](http://mywiki.wooledge.org/BashFAQ): responde a la mayoría de sus preguntas (por Lhunath).
- [Bash Pitfalls](http://mywiki.wooledge.org/BashPitfalls): enumera los errores comunes en los que caen los principiantes y cómo evitarlos.
- [Bash manual](http://www.gnu.org/software/bash/manual/) - Manual de Bourne-Again Shell.
- [Bash FAQ](http://tiswww.case.edu/php/chet/bash/FAQ) (por [Chet Ramey](http://tiswww.case.edu/php/chet/))
- [Advanced Bash-Scripting Guide](http://tldp.org/LDP/abs/html/): una exploración en profundidad del arte de las secuencias de comandos shell.
- [Bash Guide for Beginners](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/) - Bash guía para principiantes (por Machtelt Garrels).
- [Bash Programming - Intro/How-to](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc)
- [bash-handbook](https://github.com/denysdovhan/bash-handbook): un manual para aquellos que quieren aprender Bash sin profundizar demasiado.
- [Google's Shell Style Guide](https://google.github.io/styleguide/shellguide.html): consejos razonables sobre el estilo del código.
- [Sobell's Book](http://www.sobell.com/CR3/index.html): una guía práctica de comandos, editores y programación shell.
- [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
- [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
- [Defensive BASH Programming](https://web.archive.org/web/20180917174959/http://www.kfirlavi.com/blog/2012/11/14/defensive-bash-programming): métodos para defender sus programas contra fallas y mantener el código limpio y ordenado.
- [Pure Bash Bible](https://github.com/dylanaraps/pure-bash-bible): una colección de alternativas bash puras a procesos externos.
- [explainshell](https://explainshell.com): un sitio web que desglosa y explica los comandos shell (Bash) (incluidas sus banderas y opciones).
- [Safe ways to do things in bash](https://github.com/anordal/shellharden/blob/master/how_to_do_things_safely_in_bash.md) - Cómo hacer las cosas de forma segura en Bash.

## Productividad de línea de comandos

*Búsqueda, marcadores, multiplexación y otras herramientas que hacen que su experiencia con el terminal sea más productiva.*

- [aliases](https://github.com/sebglazebrook/aliases): alias contextuales, dinámicos y organizados para bash shell.
- [bashhub-server](https://github.com/nicksherron/bashhub-server): servidor bashhub de código abierto alojado de forma privada.
- [bashhub](https://github.com/rcaloras/bashhub-client) - Historial de Bash en la nube. Indexado y con capacidad de búsqueda :cloud:.
- [bashmarks](https://github.com/huyng/bashmarks): marcadores del directorio para shell.
- [bashmount](https://github.com/jamielinux/bashmount): administre fácilmente medios extraíbles.
- [ble.sh](https://github.com/akinomyoga/ble.sh): reemplazo de línea de lectura rico en funciones y fácil de usar, con resaltado de sintaxis, mejor finalización de comandos y edición multilínea mejorada.
- [commacd](https://github.com/shyiko/commacd): una forma más rápida de moverse en Bash.
- [forkrun](https://github.com/jkool702/forkrun): una herramienta pura bash para ejecutar código en paralelo. Similar en sintaxis y velocidad a `xargs -P`, pero con más funciones y compatibilidad nativa con la función Bash.
- [has](https://github.com/kdabir/has): `has` le ayuda a comprobar la presencia de varias herramientas de línea de comandos y sus versiones en la ruta.
- [hstr](https://github.com/dvorka/hstr) - Bash Cuadro de sugerencias de historial.
- [sshrc](https://github.com/cdown/sshrc): lleve consigo su .bashrc, .vimrc, etc. cuando utilice SSH.
- [utility-bash-scripts](https://github.com/aviaryan/utility-bash-scripts): scripts bash útiles para realizar tareas automatizables con un solo comando.
- [zoxide](https://github.com/ajeetdsouza/zoxide): una mejor manera de navegar por su sistema de archivos. Escrito en Rust, cross-shell y mucho más rápido que otros autojumpers.

## Personalización

*Mensajes personalizados, temas de color, etc.*

- [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) - Tema minimalista (mensaje) para terminales atractivos.
- [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt): un mensaje Bash informativo y elegante para los usuarios de Git.
- [bash-powerline](https://github.com/riobard/bash-powerline) - Mensaje Bash de estilo Powerline en script puro Bash.
- [bashstrap](https://github.com/barryclark/bashstrap): una forma rápida de mejorar el terminal macOS.
- [git-prompt](https://github.com/lvv/git-prompt) - Mensaje Bash con los módulos Git, SVN y HG.
- [gittify](https://github.com/momeni/gittify): un mensaje Bash colorido + alias Git personalizados.
- [liquidprompt](https://github.com/nojhan/liquidprompt): un mensaje adaptativo cuidadosamente diseñado y con todas las funciones para Bash y Zsh.
- [LS_COLORS](https://github.com/trapd00r/LS_COLORS): una colección de definiciones de LS_COLORS.
- [oh-my-git](https://github.com/arialdomartini/oh-my-git): mensaje obstinado git para bash y zsh.
- [oh-my-bash](https://github.com/ohmybash/oh-my-bash): un excelente marco impulsado por la comunidad para administrar su configuración bash.
- [progress-bar.sh](https://github.com/edouard-lopez/progress-bar.sh): barra de progreso simple y atractiva para `bash`, dale una duración y ella hará el resto.
- [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt): mensaje Bash con colores, estados Git y ramas Git.
- [bash-sensible](https://github.com/mrzool/bash-sensible): un intento de valores predeterminados más sensatos de Bash.

## Para desarrolladores

*Desarrollo de línea de comandos, control de versiones e implementación.*

- [bocker](https://github.com/p8952/bocker) - Docker implementado en 100 líneas de bash.
- [git-sh](https://github.com/rtomayko/git-sh): un entorno Bash personalizado adecuado para el trabajo Git.
- [mkdkr](https://github.com/rosineygp/mkdkr) - Crear + Docker + Shell = Tubería CI.

## Descargar y servir

*Servidores livianos y autohospedados y herramientas de red escritas en scripts shell.*

- [Bash-web-server](https://github.com/dzove855/Bash-web-server): un servidor web puramente bash, sin socat, netcat, etc.
- [Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader) - Dropbox Uploader es un script Bash que se puede utilizar para cargar, descargar, enumerar o eliminar archivos de Dropbox.
- [balls](https://github.com/jneen/balls) - Bash en Bolas.
- [bashbro](https://github.com/victrixsoft/bashbro/): un explorador de archivos web basado en Bash, que le permite explorar, transmitir, ver documentos y guardar archivos de forma remota a través de su navegador web.
- [bash-stack](https://github.com/cgsdev0/bash-stack): marco web moderno en bash.
- [bashttpd](https://github.com/avleen/bashttpd): un servidor web escrito en Bash.
- [httpd.sh](https://github.com/cemeyer/httpd.sh): un servidor web trivial en bash, que utiliza ctypes.sh.
- [ngincat](https://github.com/jaburns/ngincat) - Pequeño servidor Bash HTTP que utiliza netcat.
- [sherver](https://github.com/remileduc/sherver): servidor web ligero puro Bash.
- [xiringuito](https://github.com/ivanilves/xiringuito): VPN basado en SSH para pobres.

## Aplicaciones

*Aplicaciones basadas en línea de comandos o acceso por línea de comandos a servicios existentes.*

- [bashblog](https://github.com/cfenollosa/bashblog): un script Bash que maneja la publicación de blogs.
- [pushbullet-bash](https://github.com/Red5d/pushbullet-bash): interfaz Bash para la API PushBullet.
- [todo.sh](https://github.com/todotxt/todo.txt-cli): un script shell simple y extensible para administrar su archivo todo.txt.
- [cheapci](https://github.com/ianmiell/cheapci): un marco de integración continua implementado en bash.

## Juegos

*Todo trabajo y nada de juego es una mala manera de pasar el día.*

- [bash2048](https://github.com/mydzor/bash2048) - Bash implementación del juego 2048.
- [minesweeper](https://github.com/feherke/Bash-script/tree/master/minesweeper) - Bash implementación del buscaminas.
- [wordle](https://gist.github.com/huytd/6a1a6a7b34a0d0abcac00b47e3d01513) - Wordle en menos de 50 líneas de Bash.

## Sitio web

- [Bash One-Liners](http://www.bashoneliners.com/): una colección de frases ingeniosas prácticas o simplemente puras de awesome bash ([repos](https://github.com/janosgyerik/bashoneliners) de @[janosgyerik](https://github.com/janosgyerik)).
- [commandlinefu](http://www.commandlinefu.com/): un repositorio para los comandos UNIX más elegantes y útiles.

## Shell Gestión de paquetes

*Herramientas para gestionar múltiples configuraciones shell.*

- [bash-it](https://github.com/Bash-it/bash-it): un marco comunitario Bash.
- [basher](https://github.com/basherpm/basher): un administrador de paquetes para scripts shell.
- [bpkg](https://github.com/bpkg/bpkg): un administrador de paquetes liviano bash.
- [homeshick](https://github.com/andsens/homeshick) - Sincronizador de archivos de puntos Git escrito en Bash.

## Shell Desarrollo de guiones

*Herramientas para escribir, mejorar u organizar Bash u otros scripts shell*

- [alinex bashlib](https://gitlab.com/alinex/bash-lib): biblioteca modular bash para administración de servidores, procesamiento de datos y secuencias de comandos remotas.
- [ansi](https://github.com/fidian/ansi) - ANSI códigos de escape en bash puro: cambia el color del texto, posiciona el cursor y mucho más.
- [argbash](https://github.com/matejak/argbash) - Bash generador de código de análisis de argumentos.
- [assert.sh](https://github.com/lehmannro/assert.sh) - Bash marco de pruebas unitarias.
- [async-bash](https://github.com/zombieleet/async-bash): implementación de funciones asíncronas en bash.
- [bats](https://github.com/bats-core/bats-core) - Bash Sistema de prueba automatizado.
- [bash3boilerplate](https://github.com/kvz/bash3boilerplate): plantillas para escribir mejores scripts Bash.
- [bashful](https://github.com/jmcantrell/bashful): una colección de bibliotecas para simplificar la escritura de scripts Bash.
- [bashify](https://github.com/zombieleet/bashify): pocas funciones auxiliares en bash (especialmente funciones de manipulación de cadenas).
- [bashing](https://github.com/xsc/bashing) - Destrozando Bash en pedazos - Marco Bash para crear herramientas de línea de comandos.
- [bashly](https://github.com/DannyBen/bashly) - Bash marco de línea de comandos y generador CLI.
- [bashmanager](https://github.com/lingtalfi/bashmanager): mini marco bash para crear herramientas de línea de comandos.
- [Bashmatic](https://github.com/kigster/bashmatic): una biblioteca DSL fácil de usar para crear herramientas e instaladores basados ​​en BASH (más de 900 funciones).
- [bunit](https://github.com/rafritts/bunit): un marco de prueba unitaria para scripts Bash.
- [Bash Infinity](https://github.com/niieani/bash-oo-framework): una moderna biblioteca repetitiva/marco/estándar para bash.
- [bash-modules](https://github.com/vlisivka/bash-modules): una colección de módulos para el modo estricto no oficial.
- [bash_unit](https://github.com/pgrange/bash_unit) - Bash marco de edición empresarial de pruebas unitarias para profesionales.
- [bashunit](https://github.com/TypedDevs/bashunit): una biblioteca de prueba sencilla para scripts bash.
- [lobash](https://github.com/adoyle-h/lobash): una utilidad/biblioteca moderna, segura y potente para el desarrollo de scripts Bash.
- [mo](https://github.com/tests-always-included/mo) - Plantillas de bigote en bash puro.
- [semver_bash](https://github.com/cloudflare/semver_bash) - Versionado semántico en Bash.
- [shellcheck](https://github.com/koalaman/shellcheck): una herramienta de análisis estático para scripts shell.
- [shellharden](https://github.com/anordal/shellharden): resaltador de sintaxis correctivo bash.
- [shfmt](https://github.com/mvdan/sh) - Formatear programas bash.
- [shunit2](https://github.com/kward/shunit2): un marco de prueba unitaria para scripts Bash con una versión de JUnit/PyUnit.
- [DevOps-Bash-tools](https://github.com/HariSekhon/DevOps-Bash-tools) - 750+ DevOps Shell Scripts y entorno avanzado Bash.
- [modernish](https://github.com/modernish/modernish): biblioteca con varias funciones para secuencias de comandos shell.
- [json.bash](https://github.com/h4l/json.bash): biblioteca Bash y herramienta de línea de comandos que crea JSON.
- [timep](https://github.com/jkool702/timep): un generador de perfiles y FlameGraph de próxima generación para el código bash.

## Sólo para travesura

- [Bash Screensavers](https://github.com/attogram/bash-screensavers?): una colección de protectores de pantalla escritos íntegramente en bash.
- [pokeget](https://github.com/talwat/pokeget): muestra sprites de Pokémon en la terminal.

## Comunidad

- [Stack Overflow](http://stackoverflow.com/questions/tagged/bash) - Etiqueta Bash en Stack Overflow.
- [/r/bash](https://www.reddit.com/r/bash): un subreddit dedicado a las secuencias de comandos bash.
- [/r/commandline](https://www.reddit.com/r/commandline) - Para todo lo relacionado con la línea de comando, en cualquier sistema operativo.
- [#bash](https://web.libera.chat/?nick=Guest&#bash) - Canal IRC en Libera.Chat. Los principales contribuyentes de BashGuide, BashFAQ, BashPitfalls y ShellCheck andan por allí.

## Otras listas impresionantes

Se pueden encontrar otras listas increíblemente impresionantes en [awesome-awesome](https://github.com/emijrp/awesome-awesome) y [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness).

## Contribuir

¡Bienvenidos aportes! Lea primero el [contribution guidelines](contributing.md).

## Licencia

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

En la medida de lo posible según la ley, aloisdg ha renunciado a todos los derechos de autor y derechos relacionados o conexos de este trabajo.
