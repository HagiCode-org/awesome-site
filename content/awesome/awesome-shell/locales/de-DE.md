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

# Ausgewählte Shell-Ressourcen [![Awesome][awesome-badge]][awesome-link]

Eine kuratierte Liste von fantastischen Kommandozeilen-Frameworks, Toolkits, Guides und Gizmos. Inspiriert von awesome-php. Diese tolle Sammlung ist auch erhältlich auf [Unix-Shell.ZEEF.com](https://unix-shell.zeef.com/caleb.xu).
- [Schalen](#shells)
- [Command-Line Produktivität](#command-line-productivity)
  - [Verzeichnisnavigation](#directory-navigation)
- [Customization](#customization)
- [Für Entwickler](#for-developers)
- [Systemversorgung](#system-utilities)
- [Download und Serving](#downloading-and-serving)
- [Multimedia und Dateiformate](#multimedia-and-file-formats)
- [Anträge](#applications)
- [Spiele](#games)
- [Shell Package Management](#shell-package-management)
- [Shell Script Entwicklung](#shell-script-development)
- [Leitfäden](#guides)
- [**Awesome Zsh**][awesome-zsh]&nbsp; [![Awesome][awesome-badge]][awesome-zsh]
- [**Awesome Fish**][awesome-fish] [![Awesome][awesome-badge]][awesome-fish]
- [**Awesome Bash**][awesome-bash] [![Awesome][awesome-badge]][awesome-bash]
- [Weitere tolle Listen](#other-awesome-lists)

## Shells

*Wählen Sie Ihre Basisschale.*

* [bash](https://www.gnu.org/software/bash/) - GNU Project's Shell (Bourne Again SHell)
* [elvish](https://elv.sh/) Freundliche, ausdrucksstarke Shell-Features wie anonyme Funktionen und Datenstrukturen
* [es](https://wryun.github.io/es-shell/) - Die erweiterbare Shell, basierend auf Plan 9's [rc](https://github.com/rakitzis/rc) Schale
* [fish](https://fishshell.com) - Intelligente und benutzerfreundliche Kommandozeilen-Shell
* [ion](https://github.com/redox-os/ion) - Eine moderne System-Shell mit einer einfachen, aber leistungsstarken Syntax. Es ist komplett in Rust geschrieben.
* [ksh93](https://github.com/att/ast) Korn Shell
* [mksh](https://github.com/MirBSD/mksh) MirBSD Korn Shell
* [murex](https://github.com/lmorg/murex) - Eine intelligentere Shell- und Skriptumgebung mit fortschrittlichen Funktionen, die auf Benutzerfreundlichkeit, Sicherheit und Produktivität ausgelegt sind (z. B. intelligentere DevOps-Tools)
* [ngs](https://github.com/ngs-lang/ngs) - Voll ausgestattete Skriptsprache, die speziell für Ops erstellt wurde. REPL wird entwickelt.
* [nushell](https://github.com/nushell/nushell) - Eine moderne Shell in Rust geschrieben
* [oksh](https://github.com/ibara/oksh) Portable OpenBSD ksh
* [osh](https://www.oilshell.org) - Bash kompatibel, mit neuer/moderner Unix-Shell-Sprache namens Oil
* [pdksh](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/bin/ksh/) Public Domain Korn Shell
* [powershell](https://docs.microsoft.com/en-us/powershell/scripting/overview) ein plattformübergreifendes Task-Automatisierungs- und Konfigurationsmanagement-Framework, bestehend aus einer Kommandozeilen-Shell und einer Skriptsprache
* [shell++](https://github.com/alexst07/shell-plus-plus) - Freundliche und moderne funktionale und objektorientierte Shell-Skriptsprache
* [shenv](https://github.com/shenv/shenv) Einfaches Shell Versionsmanagement
* [tcsh](https://www.tcsh.org/) - C-Shell mit Dateiname Vervollständigung und Befehlszeilenbearbeitung
* [xonsh](https://xon.sh) Python-ish, BASHwards aussehende Shell-Sprache und Befehlsaufforderung
* [yash](https://github.com/magicant/yash) - Eine POSIX-kompatible Kommandozeilen-Shell mit eingebauter Unterstützung für die Vervollständigung und Vorhersage basierend auf der Kommandohistorie
* [zsh](https://www.zsh.org) - Leistungsstarke Shell mit Skriptsprache

## Produktivität auf der Kommandozeile

*Suche, Lesezeichen, Multiplexing und andere Tools, die Ihr Terminalerlebnis produktiver machen.*

* [AdvancedNewFile](https://github.com/tanrax/terminal-AdvancedNewFile) - Schnelles Erstellen von Dateien und Verzeichnissen auf rekursive Weise. Inspiriert vom Vim Plugin.
* [ag](https://github.com/ggreer/the_silver_searcher) - Super schnelle String-Suche durch eine Verzeichnishierarchie
* [aliases](https://github.com/sebglazebrook/aliases) - Kontextuelle, dynamische, organisierte Aliase für bash
* [arttime](https://github.com/reportaman/arttime) - Schönheit der Textkunst trifft auf Funktionalität von Uhr, Timer, pomodoro++ Zeitmanager
* [autoenv](https://github.com/hyperupcall/autoenv) Verzeichnisbasierte Umgebungen.
* [await](https://github.com/slavaGanzin/await) - einzelne Binärdatei, die eine Liste von Befehlen parallel ausführt und auf ihre Beendigung wartet
* [bartib](https://github.com/nikolassv/bartib) - Ein einfacher Timetracker für die Kommandozeile. Es speichert ein Protokoll aller verfolgten Aktivitäten als Klartextdatei und ermöglicht es Ihnen, flexible Berichte zu erstellen.
* [bashhub](https://github.com/rcaloras/bashhub-client) - :cloud: Bash Geschichte in der Cloud. Indexiert und durchsuchbar.
* [boilr](https://github.com/tmrts/boilr) - Ein blitzschnelles CLI-Tool zum Erstellen von Projekten aus Boilerplate-Vorlagen.
* [boom](https://github.com/holman/boom) - Speichern von Links und Snippets in der Kommandozeile
* [borg](https://github.com/ok-borg/borg) - Eine terminalbasierte Suchmaschine für Bash-Befehle
* [broot](https://github.com/Canop/broot) - Ein besserer Weg, um Verzeichnisse zu navigieren
* [browsh](https://github.com/browsh-org/browsh) - Der moderne textbasierte Browser
* [Buku](https://github.com/jarun/Buku) - Leistungsstarker Befehlszeilen-Bookmark-Manager
* [byobu](https://www.byobu.org) Textbasierter Fenstermanager und Terminal-Multiplexer
* [cod](https://github.com/dim-an/cod) — Ein Vervollständigungs-Daemon für Shell, der beim Aufrufen lernt `--help` Befehle
* [CloudClip](https://github.com/skywind3000/CloudClip) - Ihre eigene Zwischenablage in der Cloud, Kopieren und Einfügen von Text mit Gist zwischen verschiedenen Systemen
* [ddgr](https://github.com/jarun/ddgr) - DuckDuckGo vom Terminal
* [desk](https://github.com/jamesob/desk) - Ein leichter Workspace Manager für die Shell
* [direnv](https://github.com/direnv/direnv) - Ein Umgebungsschalter für die Shell, im Vergleich zu Autoenv
* [dnote](https://github.com/dnote/dnote) - Ein einfaches Kommandozeilen-Notebook mit Multi-Device-Sync und Web-Schnittstelle
* [eureka](https://github.com/simeg/eureka/) - :bulb: CLI-Tool zum Eingeben und Speichern Ihrer Ideen, ohne das Terminal zu verlassen
* [fasd](https://github.com/clvv/fasd) Befehlszeilen-Produktivitätsverstärker, bietet schnellen Zugriff auf Dateien und Verzeichnisse
* [fd](https://github.com/sharkdp/fd) - Eine einfache, schnelle und benutzerfreundliche Alternative zu finden.
* [foxy](https://github.com/s-p-k/foxy) - Einfache Text-Lesezeichen für Firefox und Surf-Browser.
* [fselect](https://github.com/jhspetersson/fselect) Finden Sie Dateien mit SQL-ähnlichen Abfragen.
* [funky](https://github.com/bbugyi200/funky) Erweitert die Funktionalität von Shell-Funktionen und macht sie leistungsfähiger und flexibler.
* [fz](https://github.com/changyuheng/fz) - Nahtlose Fuzzy Tab Fertigstellung für z
* [fzf](https://github.com/junegunn/fzf) - Ein Kommandozeile Fuzzy Finder
* [gitmux](https://github.com/arl/gitmux) Git-Status in der Tmux-Statusleiste anzeigen
* [googler](https://github.com/jarun/googler) - Google Search, Google Site Search, Google News vom Terminal
* [googlr](https://github.com/Astranno/googlr) Befehlszeilen-Tool, mit dem Sie Google von Ihrem Terminal aus durchsuchen können.
* [has](https://github.com/kdabir/has) - `has` hilft Ihnen, das Vorhandensein verschiedener Befehlszeilentools und ihrer Versionen auf dem Pfad zu überprüfen
* [how2](https://github.com/santinic/how2) - `how2` findet den einfachsten Weg, etwas in einer Unix-Shell zu tun. Es ist wie `man`Aber Sie können es in natürlicher Sprache abfragen.
* [navi](https://github.com/denisidoro/navi) - Ein interaktives Cheatsheet-Tool für die Kommandozeile
* [hhighlighter](https://github.com/paoloantinori/hhighlighter) - Färben von Wörtern in einer Befehlsausgabe
* [hr](https://github.com/LuRsT/hr) - `<hr />` für Ihr Terminal
* [hss](https://github.com/six-ddc/hss) - Ein interaktiver paralleler SSH-Client mit automatischer und asynchroner Ausführung
* [hstr](https://github.com/dvorka/hstr) - Bash History Suggest Box
* [k](https://github.com/supercrabtree/k) -k ist ein Zsh-Script, um Verzeichnislisten lesbarer zu machen, indem Git-Status, Fileweight-Farben und verrottende Daten hinzugefügt werden
* [k alias](https://github.com/lingtalfi/k) - Holen Sie sich Kool Aliase (und mehr) mit einem einfachen One-Liner
* [lf](https://github.com/gokcehan/lf) - Terminal File Manager geschrieben in Go, inspiriert von Ranger
* [lf.sh](https://github.com/suewonjp/lf.sh) - Suchen Sie schnell Dateien mit weniger Eingaben und machen Sie viele mehr (Grippen, Kopieren des Pfades zur Zwischenablage usw.)
* [lowcharts](https://github.com/juan-leon/lowcharts) Zeichnen Sie Graphen mit niedriger Auflösung im Terminal
* [Lmod](https://lmod.readthedocs.io/en/latest/) Lua-basierte Umgebungsmodule, die Tcl-basierte Module verbessern und gleichzeitig rückwärtskompatibel sind (im Vergleich zu Modulen)
* [loop](https://github.com/Miserlou/Loop) - Schreiben und Steuern komplexer Schleifen mit als Einzeiler
* [marker](https://github.com/pindexis/marker) - Bookmarken Sie Ihre Shell-Befehle
* [mackup](https://github.com/lra/mackup/) Behalten Sie Ihre Anwendungseinstellungen synchron (OS X/Linux)
* [mcfly](https://github.com/cantino/mcfly) Fliegen Sie durch Ihre Shell-Geschichte. Großer Schotte!
* [modules](http://modules.sourceforge.net/) - Klassische Tcl-basierte Umgebungsmodule zur Verwaltung der Shell-Umgebung (im Vergleich zu Lmod, Direnv und Autoenv)
* [nnn](https://github.com/jarun/nnn) Dateibrowser und Disk-Nutzungsanalysator mit ausgezeichneter Desktop-Integration
* [ok-sh](https://github.com/secretGeek/ok-bash) - Arbeiten Sie an vielen verschiedenen Projekten? Und gibt es in jedem Projekt Befehle, die Sie verwenden, die für dieses Projekt spezifisch sind? Sie benötigen eine .ok-Datei.
* [parallel](https://www.gnu.org/software/parallel/) Erstellen und Ausführen von Shell-Befehlszeilen von Standardeingaben parallel
* [pass](https://www.passwordstore.org/) Verwalten Sie Passwörter von der Befehlszeile mit GPG-Verschlüsselung und optionaler Git-Integration.
* [pathpicker](https://github.com/facebook/PathPicker) Akzeptiert Eingaben wie grep, Suche, Git usw.; ermöglicht das Auswählen von Dateien aus dem Ergebnis der Eingabe, die Sie dann öffnen oder als Argument für einen Befehl bereitstellen können.
* [pdd](https://github.com/jarun/pdd) - Tiny Datum, Zeit Diff Rechner mit Timern
* [percol](https://github.com/mooz/percol) - Fügt den Geschmack der interaktiven Filterung zum traditionellen Rohrkonzept der UNIX-Shell hinzu
* [q](https://github.com/cal2195/q) Vim wie Makroregister für Ihre Bash und Zsh Shell
* [qfc](https://github.com/pindexis/qfc) File-Completion Widget für Bash und Zsh
* [resh](https://github.com/curusarn/resh) Kontext-Shell-Historie für Zsh und Bash
* [rg](https://github.com/BurntSushi/ripgrep) ripgrep ist ein linienorientiertes Suchwerkzeug, das die Benutzerfreundlichkeit von The Silver Searcher mit der rohen Geschwindigkeit von GNU grep kombiniert.
* [screen](https://www.gnu.org/software/screen/) GNU Terminal Multiplexer
* [shell-history](https://github.com/pawamoy/shell-history) Visualisieren Sie Ihre Shell-Nutzung mit Highcharts
* [SHML](https://github.com/odb/shml) - Style Framework für das Terminal (Shell Markup Language)
* [slugify](https://github.com/benlinton/slugify) Befehl, der Dateinamen und Verzeichnisse in ein webfreundliches Format konvertiert
* [sman](https://github.com/tokozedg/sman) - :bug: Ein Kommandozeilen-Snippet-Manager
* [spark](https://github.com/holman/spark) - ▂▃▅▂▇ in deiner Shell
* [spark.fish](https://github.com/jorgebucaran/spark.fish) Sparkline Generator
* [sheet](https://github.com/oscardelben/sheet) - Text-Snippets für die Kommandozeile
* [spot](https://github.com/rauchg/spot) - Tiny File Search Utility
- [snips](https://github.com/srijanshetty/snips) Befehlszeilen-Tool zum Verwalten von Codeausschnitten.
* [sqlline](https://github.com/julianhyde/sqlline) Shell für die Ausgabe von SQL an relationale Datenbanken über JDBC (Multiline, Vervollständigung, Hervorhebung, Dialektunterstützung)
* [sshfs](https://github.com/osxfuse/sshfs) - Ein Tool zum Montieren von Remote-Dateisystemen über SSH
* [sudocabulary](https://github.com/badarsh2/Sudocabulary) - Lernen Sie Englisch Vokabular von Ihrem Terminal
* [surfraw](https://gitlab.com/surfraw/Surfraw) - Durchsuchen Sie eine bestimmte Website und durchsuchen Sie das Web von Ihrem Terminal aus ohne Browser.
* [task-manager](https://github.com/lingtalfi/task-manager) Führen Sie alle Ihre Skripte mit nur zwei oder drei Tastenanschlägen aus.
* [td-cli](https://github.com/darrikonn/td-cli) - Ein Befehlszeilenmanager von todo, um Ihre todos über mehrere Projekte hinweg zu organisieren und zu verwalten.
* [tere](https://github.com/mgunyho/tere) - Eine schnellere Alternative zu cd + ls
* [thefuck](https://github.com/nvbn/thefuck) Beheben von Common Shell Fehlern mit einem leicht zu merkenden Befehl
* [tldr](https://github.com/raylee/tldr-sh-client) - Ein voll funktionsfähiger Bash-Client für tldr, vereinfachte und Community-gesteuerte Manpages
* [tmux](https://tmux.github.io/) Erstaunlicher Terminal-Multiplexer
* [undollar](https://github.com/xtyrrell/undollar) Undollar beißt das Dollarzeichen von der Spitze des Befehls, den Sie gerade in Ihr Terminal eingefügt haben
* [usql](https://github.com/xo/usql) Universelle Kommandozeilenschnittstelle für SQL-Datenbanken.
* [v](https://github.com/rupa/v) Z für vim.
* [wemux](https://github.com/zolrath/wemux) Mehrbenutzer Tmux Made Easy
* [xiki](https://github.com/trogdoro/xiki) - Macht die Shell-Konsole freundlicher und leistungsfähiger
* [xplr](https://github.com/sayanarijit/xplr) - Ein hackbarer, minimaler, schneller TUI File Explorer
* [xsv](https://github.com/BurntSushi/xsv) - ein schnelles CSV Kommandozeilen-Toolkit in Rust geschrieben
* [xxh](https://github.com/xxh/xxh) Bringen Sie Ihre Lieblings-Shell, wo immer Sie durch die SSH gehen.

### Navigation in Verzeichnissen

* [aliasme](https://github.com/Jintin/aliasme) - alias Helfer, um das Verzeichnis schnell zu ändern
* [autojump](https://github.com/wting/autojump) - Ein CD-Befehl, der lernt - leicht durch Verzeichnisse aus der Befehlszeile navigieren
* [bashmarks](https://github.com/huyng/bashmarks) - Verzeichnis-Lesezeichen für die Shell
* [bd](https://github.com/vigneshwaranr/bd) - Gehen Sie schnell zurück zu einem Elternverzeichnis
* [commacd](https://github.com/shyiko/commacd) - Eine schnellere Möglichkeit, sich in Bash zu bewegen
* [enhancd](https://github.com/b4b4r07/enhancd) - :rocket: Ein CD-Befehl der nächsten Generation mit einem interaktiven Filter
* [goto](https://github.com/iridakos/goto) - Ein Shell-Dienstprogramm für die Navigation zu Alias-Verzeichnissen, das die automatische Vervollständigung unterstützt
* [jump](https://github.com/gsamokovarov/jump) Jump hilft Ihnen, Ihr Dateisystem schneller zu navigieren, indem Sie Ihre Gewohnheiten lernen.
* [lazy-cd](https://github.com/pedramamini/lazy-cd) - Einfache Bash-Befehle für Lesezeichen-Navigation des Dateisystems, komplett mit Bash-Vervollständigung.
* [up](https://github.com/shannonmoeller/up) Ascend Verzeichnisse nach Name oder Anzahl; für bash, zsh und Fisch.
* [z](https://github.com/rupa/z) -z ist das neue j, yo
* [z.lua](https://github.com/skywind3000/z.lua) - Ein neuer CD-Befehl, der Ihnen hilft, schneller zu navigieren, indem Sie Ihre Gewohnheiten lernen
* [zoxide](https://github.com/ajeetdsouza/zoxide) - Ein schneller Weg, um Ihr Dateisystem zu navigieren, geschrieben in Rust
* [zpyi](https://github.com/sakshamsharma/zpyi) - Python in Zsh - Einfaches Python-Scripting in Shell

## Anpassung

*Benutzerdefinierte Eingabeaufforderungen, Farbthemen usw.*

* [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) Minimalistisches aphrodite-thema (aufforderung) für sexy terminals, die in bash, fish und zsh funktionieren.
* [base16-builder](https://github.com/base16-builder/base16-builder) Base16-Builder
* [bash-full-of-colors](https://github.com/slomkowski/bash-full-of-colors) - Leistungsstarke Prompt mit Bildschirm, tmux, Git-Unterstützung und vielem mehr
* [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) - Eine informative und ausgefallene Bash-Prompt für Git-Nutzer
* [bash-powerline](https://github.com/riobard/bash-powerline) - Powerline-Stil Bash prompt in reinem Bash-Skript
* [bashstrap](https://github.com/barryclark/bashstrap) - Eine schnelle Möglichkeit, das OSX-Terminal aufzupeppen
* [bullet-train-oh-my-zsh-theme](https://github.com/caiogondim/bullet-train.zsh) - :bullettrain side: Ein oh-my-zsh Shell Theme basierend auf dem Powerline Vim Plugin
* [emojify](https://github.com/mrowa44/emojify) Emoji auf der Kommandozeile :scream:
* [flatui-terminal-theme](https://dribbble.com/shots/1021755-Flat-UI-Terminal-Theme) - Schönere Farben für Terminal
* [geometry](https://github.com/geometry-zsh/geometry) - Ein minimales ZSH-Thema, bei dem jede Funktion der linken Eingabeaufforderung oder (async) rechten Eingabeaufforderung im laufenden Betrieb hinzugefügt werden kann.
* [git-prompt](https://github.com/lvv/git-prompt) - Bash prompt mit Git, SVN und HG Modulen
* [gittify](https://github.com/momeni/gittify) - Eine bunte Bash prompt + angepasste Git Aliase
* [Gogh - Color Scheme](https://github.com/Mayccoll/Gogh) Farbschema für Gnome Terminal
* [liquidprompt](https://github.com/nojhan/liquidprompt) - Ein Full-Featured &sorgfältig gestaltete adaptive Aufforderung für Bash &Zsh
* [mysql-colorize](https://github.com/zpm-zsh/mysql-colorize) - Colorisierung für mysql comand-line Client
* [oh-my-git](https://github.com/arialdomartini/oh-my-git) - Eine meinungsvolle Git-Prompt für bash und zsh
* [oh-my-posh](https://ohmyposh.dev) Prompt Theme Engine für jede Shell und Plattform, die in Go geschrieben wurde.
* [polyglot](https://github.com/agkozak/polyglot) - Eine informative Git-Prompt, die in bash, zsh, ksh, mksh, pdksh, oksh, dash, yash, busybox sh und osh funktioniert
* [powerlevel10k](https://github.com/romkatv/powerlevel10k) Super flexibles, fantastisches Powerline ZSH-Thema
* [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt) - Bash prompt mit Farben, Git-Status und Git-Zweigen
* [starship](https://starship.rs/) - Schnell, anpassbar, Cross-Shell prompt in Rost geschrieben
* [synth-shell](https://github.com/andresgongora/synth-shell) - Greeter mit einem anpassbaren Statusbericht und einer ausgefallenen Bash-Prompt

## Für Entwickler

*Befehlszeilenentwicklung, Versionskontrolle und Bereitstellung.*

* [1Password SSH Agent](https://developer.1password.com/docs/ssh/) - Authentifizierung von Git- und SSH-Workflows mit biometrischer Entsperrung mit 1Password
* [ack](https://beyondgrep.com/) Ein grep-ähnliches suchwerkzeug, das für quellcode optimiert ist.
* [add-gitignore](https://github.com/TejasQ/add-gitignore) - Interaktive CLI, die eine .gitignore für Ihr Projekt basierend auf Ihren Bedürfnissen generiert.
* [bcal](https://github.com/jarun/bcal) - Byte CALculator für Storage Conversions und Berechnungen
* [bitwise](https://github.com/mellowcandle/bitwise) Terminalbasierter interaktiver Bit-Manipulator in Flüchen.
* [bocker](https://github.com/p8952/bocker) - Docker implementiert in 100 Linien von bash
* [cloc](https://github.com/AlDanial/cloc) - Count Lines of Code
* [doclt](https://github.com/omgimanerd/doclt) Eine Kommandozeilenschnittstelle zu Digital Ocean
* [dokku](https://github.com/dokku/dokku) - Docker powered Mini-Heroku. Die kleinste PaaS-Implementierung, die Sie je gesehen haben.
* [forgit](https://github.com/wfxr/forgit) Utility Tool für `git` Nutzung des Fuzzy Finders fzf.
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - Viele Git Extra Utilities. Churn, cut-branch, improved-merge und viele mehr.
* [git-extras](https://github.com/tj/git-extras) - Git-Dienstprogramme - Repo-Zusammenfassung, Repl, Changelog-Population, Autoren-Commit-Prozentsätze und mehr
* [git-open](https://github.com/paulirish/git-open) - Typ `git open` So öffnen Sie die GitHub-Seite oder Website für ein Repository in Ihrem Browser
* [git-quick-stats](https://github.com/arzzen/git-quick-stats) Git Quick Statistics ist eine einfache und effiziente Möglichkeit, auf verschiedene Statistiken im Git-Repository zuzugreifen.
* [git-semver](https://github.com/markchalloner/git-semver) Git-Plugin zur Lockerung der semantischen Versionierung und Changelog-Validierung
* [git-sh](https://github.com/rtomayko/git-sh) - Eine angepasste Bash-Umgebung, die für Git-Arbeit geeignet ist
* [gita](https://github.com/nosarthur/gita) Ein Befehlszeilen-Tool zum Verwalten mehrerer Git-Repos.
* [hub](https://github.com/github/hub) - Hub hilft Ihnen bei Git zu gewinnen.
* [just](https://github.com/casey/just) Task Runner zum Speichern und Ausführen projektspezifischer Befehle.
* [licins](https://github.com/dogoncouch/licins) Fügen Sie kommentierte Softwarelizenzen in den Quellcode ein.
* [mkdkr](https://github.com/rosineygp/mkdkr) - Makefile + Docker = CI Pipeline
* [mr](https://myrepos.branchable.com) Mehrere Repository Management Tools
* [nve](https://github.com/ehmicky/nve) Führen Sie einen beliebigen Befehl für bestimmte Node.js-Versionen aus.
* [overcommit](https://github.com/sds/overcommit) - Ein vollständig konfigurierbarer und erweiterbarer Git Hook Manager
* [pre-commit](https://pre-commit.com) - Ein Framework zur Verwaltung und Pflege von mehrsprachigen Pre-Commit-Hooks
* [rebound](https://github.com/shobrook/rebound) - Sofortiges Durchsuchen der Stack Overflow-Ergebnisse in Ihrem Terminal, wenn Sie einen Compilerfehler erhalten
* [repren](https://github.com/jlevy/repren) Kommandozeile Such-und-Ersetzen und Datei-Umbenennung Schweizer Armee Messer
* [slap](https://github.com/slap-editor/slap) Sublime-ähnlicher terminalbasierter Texteditor, der auf Node.js läuft
* [shipit](https://github.com/sapegin/shipit) Minimalistischer SSH-Einsatz
* [starring](https://github.com/ritz078/starring) - Starten Sie automatisch die npm-Pakete, die Sie auf GitHub verwenden.
* [tag](https://github.com/aykamko/tag) - Springen Sie sofort zu Ihren Ag Matches.
* [trunk](https://www.npmjs.com/package/@trunkio/launcher) Blazingly schnelle Meta-Code-Checker und Formatierer
* [vmn](https://github.com/final-israel/vmn) - git-basierte automatische Versionierung und Zustandswiederherstellungslösung, die sprach- oder architekturunabhängig ist
* [wipe-modules](https://github.com/bntzio/wipe-modules) - Ein kleiner Agent, der den Ordner node modules von nicht aktiven Projekten entfernt

## Systemwerkzeuge

*OS-bezogene Tools, einschließlich Systemadministration, System-Debugging sowie Datei- und Prozessmanagement.*

* [atop](https://www.atoptool.nl) - ASCII Vollbild-Leistungsmonitor, der in der Lage ist, die Aktivität aller Prozesse zu melden
* [bat](https://github.com/sharkdp/bat) - A `cat` Klon mit Flügeln
* [bmon](https://github.com/tgraf/bmon) Echtzeit-Netzwerkbandbreitenmonitor und Ratenschätzer mit menschenfreundlicher visueller Ausgabe
* [btop](https://github.com/aristocratos/btop) Linux/OSX/FreeBSD Ressourcenmonitor
* [catcli](https://github.com/deadc0de6/catcli) - Das Kommandozeilenkatalog-Tool für Ihre Offline-Daten
* [ccat](https://github.com/owenthereal/ccat) - ccat ist die färbende Katze. Es funktioniert ähnlich wie Katze, zeigt aber Inhalte mit Syntax-Hervorhebung an.
* [exa](https://github.com/ogham/exa) Eine moderne Version von `ls`.
* [progress](https://github.com/Xfennec/progress) - Linux-Tool, um Fortschritte für `cp`, `rm`, `dd`, und mehr...
* [stronghold](https://github.com/alichtman/stronghold) - Einfache Konfiguration der MacOS-Sicherheitseinstellungen vom Terminal aus.
* [glances](https://github.com/nicolargo/glances) - Blick auf Ihr System
* [goaccess](https://github.com/allinurl/goaccess) GoAccess ist ein Echtzeit-Web-Log-Analysator und interaktiver Viewer, der in einem Terminal in \*nix-Systemen läuft.
* [hblock](https://github.com/hectorm/hblock) - Hosts-Datei-basierter Adblocker
* [histstat](https://github.com/vesche/histstat) - Geschichte für netstat
* [htop](https://github.com/hishamhm/htop) - Ein ncurses-basierter interaktiver Prozessbetrachter, der darauf abzielt, ein besserer zu sein `top`
* [lnav](https://lnav.org) - Ein fortschrittlicher Logfile Viewer für den kleinen Maßstab
* [logdissect](https://github.com/dogoncouch/logdissect) - CLI-Dienstprogramm und Python-API zur Analyse von Protokolldateien und anderen Daten.
* [ls++](https://github.com/trapd00r/ls--) - Colorized ls auf Steroiden
* [lsd](https://github.com/Peltoche/lsd) - LSDeluxe, Umschreiben von GNU ls mit vielen zusätzlichen Funktionen wie Farben, Icons, Baumansicht und mehr Formatierungsoptionen.
* [lsp](https://github.com/dborzov/lsp) - Eine verbesserte `ls`, mit Dateibeschreibungen in einfacher Sprache und intelligenter Dateigruppierung
* [maza](https://github.com/tanrax/maza-ad-blocking) - Lokaler Werbeblocker. Wie Pi-hole, aber lokal und mit Ihrem Betriebssystem.
* [mtr](https://github.com/traviscross/mtr) - Die Funktionalität der "Traceroute"- und "Ping"-Programme in einem einzigen Netzwerkdiagnose-Tool.
* [ncdu](https://dev.yorhel.nl/ncdu) NCurses Disk Nutzung
* [nmtui](https://github.com/NetworkManager/NetworkManager) - Text User Interface zur Steuerung von NetworkManager
* [powertop](https://github.com/fenrus75/powertop) - Batterie / Stromverbrauch und Gerätestatistiken zur Überwachung des Kommandozeilen-Tools mit Tune-up-Optionen.
* [prettyping](https://github.com/denilsonsa/prettyping) - Machen Sie den Output von `ping` hübscher, bunter, kompakter und leichter zu lesen.
* [procdog](https://github.com/jlevy/procdog) Leichte Kommandozeilensteuerung von langlebigen Prozessen wie Servern
* [quick-secure](https://github.com/marshyski/quick-secure) - Schnell sichern und härten UNIX/Linux Systeme
* [rng](https://github.com/nickolasburr/rng) Kopieren Sie den Zeilenbereich von Datei oder Stdin bis Stdout.
* [tiptop](https://github.com/nschloe/tiptop) - Grafischer Kommandozeilensystemmonitor.
* [wifi-wand](https://github.com/keithrbennett/wifiwand) - eine Ruby-Befehlszeilenanwendung zur Verwaltung von WiFi auf MacOS (installiert von) `gem install wifi-wand`)
* [xiringuito](https://github.com/ivanilves/xiringuito) - SSH-basierte "VPN für Arme"

## Herunterladen und Bereitstellen

*Selbst gehostete, leichte Server und Netzwerk-Tools in Shell-Skripten geschrieben.*

* [aria2](https://github.com/aria2/aria2) - aria2 ist ein leichtes Multiprotokoll &Multi-Source-, Cross-Plattform-Download-Dienstprogramm in Kommandozeile betrieben. Es unterstützt HTTP/HTTPS, FTP, BitTorrent und Metalink
* [balls](https://github.com/jneen/balls) - Bash auf Bällen
* [bashttpd](https://github.com/avleen/bashttpd) - Ein Webserver in Bash geschrieben
* [bashhub-server](https://github.com/nicksherron/bashhub-server) - Private Cloud Shell Geschichte. Open Source Server für bashhub
* [bitpocket](https://github.com/sickill/bitpocket) - "DIY Dropbox" oder "2-Wege-Verzeichnis (r)sync mit korrekter Löschung"
* [Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader) - Dropbox Uploader ist ein Bash-Script, mit dem Dateien aus Dropbox hochgeladen, heruntergeladen, aufgelistet oder gelöscht werden können
* [httpie](https://github.com/httpie/httpie) - HTTPie ist ein Befehlszeile HTTP-Client, ein benutzerfreundlicher cURL-Ersatz
* [HTTPLab](https://github.com/gchaincl/httplab) - Mit dem interaktiven Webserver können Sie HTTP-Anfragen prüfen und Antworten fälschen.
* [Kapow!](https://github.com/BBVA/kapow) - Wenn Sie es schreiben können, können Sie es HTTP.
* [ngincat](https://github.com/jaburns/ngincat) Tiny Bash HTTP-Server mit netcat
* [resty](https://github.com/micha/resty) - Kleiner Befehlszeilen-REST-Client, den Sie in Pipelines verwenden können
* [shell2http](https://github.com/msoap/shell2http) HTTP-Server zum Ausführen von Shell-Befehlen. Entwickelt für Entwicklung, Prototyping oder Fernsteuerung
* [tshare](https://github.com/trikko/tshare) File Sharing von der Kommandozeile.
* [vesper](https://github.com/chris-rock/vesper) Vesper ist ein HTTP-Framework für Bash/Unix Shell
* [xh](https://github.com/ducaale/xh) - Freundliches und schnelles Tool zum Senden von HTTP-Anfragen
* [yt-dlp](https://github.com/yt-dlp/yt-dlp) Befehlszeilenprogramm zum Herunterladen von Videos von YouTube.com und anderen Videoseiten

## Multimedia und Dateiformate

*Tools zum Umgang mit Video- und Audiodateien.*

* [adb-export](https://github.com/sromku/adb-export) Android Content Provider ins CSV Format exportieren
* [Android-Kitchen](https://github.com/dsixda/Android-Kitchen) - Eine textbasierte Küche für Android ROM Anpassung. Verwendet Shell-Scripts und funktioniert mit Cygwin/OS X/Linux
* [Beets](https://github.com/beetbox/beets) - Musikbibliotheksmanager und MusicBrainz Tagger
* [cmus](https://github.com/cmus/cmus) - Cross-Plattform Cli Audio Player.
* [dasel](https://github.com/tomwright/dasel) Abfrage und Aktualisierung von Datenstrukturen mithilfe von Selektoren aus der Kommandozeile. Vergleichbar mit [jq](https://github.com/stedolan/jq) / [yq](https://github.com/kislyuk/yq) unterstützt aber JSON, YAML, TOML und XML mit null Laufzeitabhängigkeiten.
* [dzr](https://github.com/yne/dzr) - Plattformübergreifender Deezer.com Audio Player.
* [fx](https://github.com/antonmedv/fx) Befehlszeile JSON Verarbeitungstool von anononymus JavaScript Funktionen
* [gifgen](https://github.com/lukechilds/gifgen) Einfache hochwertige GIF-Codierung
* [image-scraper](https://github.com/sananth12/ImageScraper) - Ein cooler Command Line Image Scraper mit vielen Funktionen.
* [imgp](https://github.com/jarun/imgp) Blazing Fast Batch Image Resizer und Rotator
* [jc](https://github.com/kellyjonbrazil/jc) Konvertieren Sie Befehlsausgabe, Dateitypen und gemeinsame Zeichenfolgen in JSON oder YAML für eine einfachere Verwendung in Skripten.
* [jo](https://github.com/jpmens/jo) - Ein kleines Dienstprogramm zum Erstellen von JSON-Objekten aus Kommandozeilenargumenten.
* [jq](https://github.com/stedolan/jq) Sed für json data. Sie können es verwenden, um strukturierte Daten zu schneiden und zu filtern und abzubilden und zu transformieren
* [korkut](https://github.com/oguzhaninan/korkut) - Schnelle und einfache Bildverarbeitung an der Kommandozeile.
* [library](https://github.com/chapmanjacobd/library) Erstellen Sie SQLITE-Datenbanken für Ordner von Musik, Videos, Bildern oder Online-Medien. Wiedergeben und verfolgen Sie Medien wie Plex, aber eine CLI-only-Schnittstelle mit vielen Sortieroptionen.
* [mpv](https://mpv.io/) - Ermöglicht die Wiedergabe der meisten Audio- und Videoformate (mit ASCII-Zeichen) in der Shell sowie in einer GUI.
* [nehm](https://github.com/bogem/nehm) - Konsolentool, das IDv3-Tags herunterlädt, setzt und Ihrem iTunes (wenn Sie es verwenden) Ihre SoundCloud auf bequeme Weise hinzufügt
* [PiCAST](https://github.com/lanceseidman/PiCAST) PiCAST verwandelt Ihren $ 35 Raspberry Pi in ein Chromecast-ähnliches Gerät
* [sejda](https://github.com/torakiki/sejda/) - Befehlszeilenmanipulation von PDF-Dokumenten (Split, Merge, Rotation, Konvertierung in jpg, Text extrahieren, etc.)
* [visidata](https://github.com/saulpw/visidata) - Ein Terminal Spreadsheet Multitool zum Erkunden und Arrangieren von Daten (csv/json/xml/xls/yaml/etc)
* [xidel](https://github.com/benibela/xidel/) - Cli-Tool zum Filtern, Abbilden und Erstellen von HTML/XML/JSON-Daten mit (Turing-complete) XPath und XQuery.
* [xmlstarlet](http://xmlstar.sourceforge.net/) Altes, aber leistungsstarkes Tool für Befehlszeilen-XML-Formatierung, Filterung und Manipulation.
* [yq](https://github.com/mikefarah/yq) - yq ist ein tragbarer Befehlszeilen-YAML-Prozessor

## Anwendungen

*Befehlszeilenbasierte Anwendungen oder Befehlszeilenzugriff auf bestehende Dienste.*

* [ansiweather](https://github.com/fcambus/ansiweather) - Wetter in Ihrem Terminal, mit ANSI-Farben und Unicode-Symbole
* [awless](https://github.com/wallix/awless) Eine leistungsstarke, innovative und kleine Oberflächen-CLI zur Verwaltung von AWS.
* [bashblog](https://github.com/cfenollosa/bashblog) - Ein Bash-Skript, das Blog-Posting behandelt
* [carbon-now-cli](https://github.com/mixn/carbon-now-cli) Schöne Bilder Ihres Codes - von rechts in Ihrem Terminal.
* [choosealicense-cli](https://github.com/lord63/choosealicense-cli) - Wählen Sie eine OSS-Lizenz aus dem Komfort Ihres Terminals
* [cointop](https://github.com/miguelmota/cointop) - Die schnellste und interaktivste terminalbasierte UI-Anwendung zum Tracking von Kryptowährungen
* [dstask](https://github.com/naggie/dstask) - Single binary terminal-based TODO manager with git based sync + markdown notes per task
* [editly](https://github.com/mifi/editly) Befehlszeile Video Editor
* [facebook-cli](https://github.com/specious/facebook-cli) Facebook Kommandozeilen-Tool
* [fanyi](https://github.com/afc163/fanyi) - Englisch ins Chinesische im Terminal übersetzen
* [gcalcli](https://github.com/insanum/gcalcli) Google Kalender Befehlszeilenschnittstelle
* [geeknote](https://github.com/VitaliyRodnenko/geeknote) Befehlszeile Evernote Client
* [haxor-news](https://github.com/donnemartin/haxor-news) Browse Hacker News wie ein Haxor
* [hn-cli](https://github.com/rafaelrinaldi/hn-cli) - Durchsuchen Sie Hacker News bequem von Ihrem Terminal aus
* [iponmap](https://github.com/nogizhopaboroda/iponmap) Zeichnen Sie Punkt auf der Weltkarte mit IP-Adresse
* [isitup](https://github.com/lord63/isitup) - Überprüfen Sie, ob eine Website oben oder unten ist
* [jrnl](https://github.com/jrnl-org/jrnl) - Eine einfache Befehlszeilen-Journalanwendung, die Ihr Journal in einer Klartextdatei speichert
* [kanban.bash](https://github.com/coderofsalvation/kanban.bash) - Commandline asciii Kanban Board für minimalistische Produktivitäts-Bash-Hacker (csv-basiert)
* [ledger](https://github.com/ledger/ledger) Command Line Accounting
* [licen](https://github.com/lord63/licen) Generieren Sie Ihre Lizenz. Noch eine weitere Läuse, aber implementieren mit Jinja2 und docopt
* [md2png](https://github.com/weaming/md2png) Markdown in PNG-Bild konvertieren
* [moviemon](https://github.com/iCHAIT/moviemon) - Alles über Ihre Filme innerhalb der Kommandozeile.
* [nomino](https://github.com/yaa110/nomino) Batch-Umbenennungsdienstprogramm mit Regex, Sortier- und Kartendateioptionen.
* [pcalc](https://github.com/alt-romes/programmer-calculator) Rechner für Programmierer, die mit mehreren Zahlendarstellungen, Größen und insgesamt in der Nähe der Bits arbeiten.
* [pockyt](https://github.com/achembarpu/pockyt) Lesen, Verwalten und Automatisieren Ihrer [Taschen](https://getpocket.com) Sammlung.
* [pushblast](https://github.com/alebcay/pushblast) Erhalten Sie PushBullet-Benachrichtigungen, wenn ein Shell-Programm beendet wird
* [pushbullet-bash](https://github.com/Red5d/pushbullet-bash) - Bash-Schnittstelle zur PushBullet API
* [ranger](https://github.com/ranger/ranger) - Ein Konsolendateimanager mit VI-Schlüsselbindungen.
* [Reddit Terminal Viewer](https://github.com/michael-lazar/rtv) - Durchsuchen Sie Reddit von Ihrem Terminal
* [SAWS](https://github.com/donnemartin/saws) - Eine aufgeladene AWS CLI
* [taskbook](https://github.com/klaussinani/taskbook) - Aufgaben, Boards &Notizen für den Kommandozeilen-Habitat
* [taskwarrior](https://taskwarrior.org/) - Ein Befehlszeile TODO Listenmanager
* [terjira](https://github.com/keepcosmos/terjira) Kommandozeile Power Tool für Jira
* [ticker](https://github.com/achannarasappa/ticker) Terminal Stock Ticker mit Live-Updates und Positionsverfolgung
* [vl](https://github.com/ellisonleao/vl) URL Link Checker für Textdokumente
* [wego](https://github.com/schachmat/wego) - Wetter-App für das Terminal
* [whales](https://github.com/Gueils/whales) - Ein Tool zur automatischen Dockerisierung Ihrer Anwendungen
* [whereami](https://github.com/rafaelrinaldi/whereami) - Holen Sie sich Ihre Geolokalisierungsinformationen von der CLI
* [wttr.in](https://github.com/chubin/wttr.in) - :partly sunny: Der richtige Weg, um das Wetter zu überprüfen (curl wttr.in)

## Spiele

*Alle Arbeit und kein Spiel ist eine cruddy Art, Ihren Tag zu verbringen. *

* [bash2048](https://github.com/mydzor/bash2048) - Bash Implementierung von 2048 Spiel
* [minesweeper](https://github.com/feherke/Bash-script/tree/master/minesweeper) - Bash Implementierung von Minesweeper
* [nudoku](https://github.com/jubalh/nudoku) - ncurses basiertes Sudoku-Spiel geschrieben in C
* [piu-piu](https://github.com/vaniacer/piu-piu-SH) - Horizontal Scroller Spiel in bash mit Multiplayer-Modus!
* [sedtris](https://github.com/uuner/sedtris) - Tetris in sed
* [sed-scripts](https://github.com/aureliojargas/sed-scripts) - Arkanoid und Sokoban geschrieben mit sed
* [SHTAP](https://notimetoplay.org/engines/shtap/) - Wiederverwendbare Text-Adventure-Engine für Bash 4
* [tty-solitaire](https://github.com/mpereira/tty-solitaire) - Spielen Sie Solitaire in Ihrem Terminal!

## Shell-Paketverwaltung

*Tools zum Verwalten mehrerer Shell-Konfigurationen. Für zsh-spezifische Tools siehe Abschnitt Zsh.*

* [bash-it](https://github.com/Bash-it/bash-it) Ein Community Bash Framework
* [basher](https://github.com/basherpm/basher) - Ein Paketmanager für Shell-Skripte
* [bashing](https://github.com/xsc/bashing) Smashing Bash in Stücke
* [bpkg](https://www.bpkg.sh/) - JavaScript hat npm, Ruby hat Gems, Python hat Pip und jetzt Shell hat bpkg
* [dotdrop](https://github.com/deadc0de6/dotdrop) Speichern Sie Ihre Dotfiles einmal, stellen Sie sie überall bereit
* [dotfiler](https://github.com/svetlyak40wt/dotfiler) - Shell agnostic git-basierter Dotfiles-Paketmanager, geschrieben in Python.
* [fresh](https://github.com/freshshell/fresh) Halten Sie Ihre Dotfiles frisch
* [homeshick](https://github.com/andsens/homeshick) Git Dotfile Synchronizer geschrieben in Bash
* [shallow-backup](https://github.com/alichtman/shallow-backup) - Einfache Erstellung einer leichtgewichtigen Dokumentation von installierten Paketen, Dotfiles und mehr
* [shundle](https://github.com/javier-lopez/shundle) - Plugin-Manager für Shell-Skripte
* [vcsh](https://github.com/RichiH/vcsh) - Config Manager basierend auf Git
* [yadm](https://yadm.io/) Git-basierter Dotfiles-Manager unterstützt Verschlüsselung, Alternatives und Bootstrapping

## Shell-Skriptentwicklung

*Tools zum Schreiben, Verbessern oder Organisieren von Bash- oder anderen Shell-Skripten*

* [ansi](https://github.com/fidian/ansi) - ANSI Escape Codes in pure bash - Textfarbe ändern, Cursor positionieren, viel mehr
* [assert.sh](https://github.com/lehmannro/assert.sh) Bash Unit Testing Framework
* [bashew](https://github.com/pforret/bashew) - bash script creator - vom kleinen Standalone-Script bis hin zu komplexen Projekten mit CI/CD und Testing
* [bashful](https://github.com/jmcantrell/bashful) Eine Sammlung von Bibliotheken, um das Schreiben von Bash-Skripten zu vereinfachen
* [Bashlets](https://github.com/reale/bashlets) - Eine modulare erweiterbare Toolbox für Bash
* [bashly](https://bashly.dannyb.co/) - Bash Kommandozeilen-Framework und CLI Generator
* [bashmanager](https://github.com/lingtalfi/bashmanager) - Mini Bash Framework zum Erstellen von Kommandozeilen-Tools
* [bashwithnails](https://github.com/mindaugasbarysas/bashwithnails) - ein Bash-Framework, das nur zum Spaß mit Testen, Abhängigkeitsmanagement geschrieben wurde &Verpackung
* [bash-language-server](https://github.com/bash-lsp/bash-language-server) - [LSP](https://microsoft.github.io/language-server-protocol/)Bash Sprachserver
* [bash-modules](https://github.com/vlisivka/bash-modules) Funktionen zur Entwicklung mit [inoffizieller strenger Modus](http://redsymbol.net/articles/unofficial-bash-strict-mode/) aktiviert.
* [bats](https://github.com/bats-core/bats-core) - Bash Automatisches Testsystem
* [composure](https://github.com/erichs/composure) - Verfassen, Dokumentieren, Versionieren und Organisieren Ihrer Shell-Funktionen
* [crash](https://github.com/molovo/crash) - Richtige Fehlerbehandlung, Ausnahmen und Try/Catch für ZSH
* [critic.sh](https://github.com/Checksum/critic.sh) - Dead Simple Testing Framework für Bash mit Coverage Reporting
* [dispatch](https://github.com/Mosai/workshop/blob/master/doc/dispatch.md) Ein Befehlszeilenargumentparser in 50 Zeilen tragbarem Shell-Skript.
* [esh](https://github.com/jirutka/esh) - Eine einfache Templating-Engine basierend auf Shell, implementiert in ~290 Linien von POSIX Shell und awk.
* [Fishtape](https://github.com/jorgebucaran/fishtape) - TAP Produzent und Testgeschirr für Fisch
* [getoptions](https://github.com/ko1nksm/getoptions) - Eine elegante Option Parser für Shell-Skripte (sh, bash und alle POSIX-Shells)
* [getopts.fish](https://github.com/jorgebucaran/getopts.fish) CLI Parser für Fisch
* [is.sh](https://github.com/qzb/is.sh) - Eine Alternative zum eingebauten Testbefehl, es wird Ihre "wenn" -Anweisungen hübsch machen
* [lumberjack](https://github.com/molovo/lumberjack) - Eine Logging-Schnittstelle für Shell-Skripte
* [mo](https://github.com/tests-always-included/mo) Schnurrbart-Vorlagen in purem Bash
* [optparse](https://github.com/nk412/optparse) - Ein BASH-Wrapper für getopts, für einfache Kommandozeilenargumente.
* [rerun](https://github.com/rerun/rerun) - Ein modulares Shell-Automatisierungs-Framework zur Organisation Ihrer Keeper-Skripte
* [revolver](https://github.com/molovo/revolver) - Ein wiederverwendbarer Progress Spinner für Shell-Skripte
* [phases](https://github.com/sorokine/phases) - Minimal invasiver Bash-Preprozessor, wählen Sie Abschnitte Ihres Skripts aus
* [powscript](https://github.com/coderofsalvation/powscript) - bash Transpiler geschrieben in bash (Coffeescript für bash)
* [semver_bash](https://github.com/cloudflare/semver_bash) Semantische Versionierung in Bash
* [sh-semver](https://github.com/qzb/sh-semver) - Semver Tool für bash - findet Versionen, die mit spezifizierten Regeln übereinstimmen
* [shellcheck](https://github.com/koalaman/shellcheck) Statisches Analyse-Tool für Shell-Skripte
* [shellfire](https://github.com/shellfire-dev/shellfire) - Ein Repository von namespaced, Composable Shell (Bash, Sh und Dash) Funktionsbibliotheken
* [shellspec](https://github.com/shellspec/shellspec) - Ein voll ausgestattetes BDD Unit Testing Framework für Dash, Bash, ksh, zsh und alle POSIX Shells
* [shfmt](https://github.com/mvdan/sh) - Ein Shell-Parser, Formater und Interpreter mit Bash-Unterstützung; enthält shfmt
* [shpec](https://github.com/rylnd/shpec) - Ein Shell Test Framework
* [shutit](https://ianmiell.github.io/shutit/) - Automatisierungs-Framework basierend auf bash und pexpect
* [sub](https://github.com/basecamp/sub) - Eine köstliche Art, Programme zu organisieren
* [ts](https://github.com/thinkerbot/ts) - Ein Shell Test Skript
* [urchin](https://github.com/tlevine/urchin) Ein idiomatisches Shell-Test-Framework, das nur Shell-Befehle verwendet
* [shunit2](https://github.com/kward/shunit2) - Ein Unit Test Framework für Bash Skripte mit einem Geschmack von JUnit / PyUnit.
* [rebash](https://github.com/jandob/rebash) - Scripting Bibliothek / Framework. Merkmale: Importe, Ausnahmen, Doc-Tests ...
* [zunit](https://github.com/zunit-zsh/zunit) - Ein leistungsfähiges Unit Testing Framework für ZSH

# Anleitungen

* [Bash Official Reference Manual](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html)
* [Bash Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/)
* [Greg Wooledge's (aka "greycat") wiki](https://mywiki.wooledge.org).
  Speziell [Bash Guide](https://mywiki.wooledge.org/BashGuide), [Bash FAQ](https://mywiki.wooledge.org/BashFAQ) und [Bash Pitfalls](https://mywiki.wooledge.org/BashPitfalls)
* [Google's Shell Style Guide](https://google.github.io/styleguide/shell.xml)
* [The Linux Documentation Project: Bash Programming - Intro/How-to](https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)
* [The Linux Documentation Project: Advanced Bash Scripting Guide](https://tldp.org/LDP/abs/html/)
* [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
* [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
* [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)
* [Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial/basics)
* [A guide to learn bash](https://github.com/Idnan/bash-guide)
* [Shell Field Guide](https://raimonster.com/scripting-field-guide/)

# Weitere Awesome-Listen

Andere erstaunlich tolle Listen finden Sie in [genial-awesome](https://github.com/emijrp/awesome-awesome) und [genial-awesomeness](https://github.com/bayandin/awesome-awesomeness).

### Siehe auch

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
