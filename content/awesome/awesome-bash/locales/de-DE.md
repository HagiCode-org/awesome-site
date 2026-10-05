# Awesome Bash [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) <!-- omit in toc -->

> Eine kuratierte Liste entzückender Bash-Skripte und Ressourcen.

Zusätzlich zu dieser Liste sollten Sie die Liste [awesome-shell](https://github.com/alebcay/awesome-shell) lesen. Es handelt sich um eine kuratierte Liste fantastischer Befehlszeilen-Frameworks, Toolkits, Anleitungen und Spielereien. Möglicherweise möchten Sie auch [awesome-zsh](https://github.com/unixorn/awesome-zsh-plugins) oder [awesome-fish](https://github.com/bucaran/awesome-fish) überprüfen. Wenn Sie nach weiteren Listen suchen, sehen Sie sich [sindresorhus/awesome](https://github.com/sindresorhus/awesome) an.

## Inhalt <!-- omit in toc -->

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

## Bücher und Ressourcen

- [The Bash-Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/) – Menschenlesbare Dokumentation jeglicher Art über GNU Bash.
- [Bash beginner's mistakes](https://web.archive.org/web/20230330234404/https://wiki.bash-hackers.org/scripting/newbie_traps) – Liste der Bash-Anfängerfehler (vom Bash-Hackers-Wiki).
- [Bash Guide](http://mywiki.wooledge.org/BashGuide) – Ein bash-Leitfaden für Anfänger (von Lhunath).
- [Bash FAQ](http://mywiki.wooledge.org/BashFAQ) – Beantwortet die meisten Ihrer Fragen (von Lhunath).
- [Bash Pitfalls](http://mywiki.wooledge.org/BashPitfalls) – Listet die häufigsten Fallstricke auf, in die Anfänger geraten, und wie man sie vermeidet.
- [Bash manual](http://www.gnu.org/software/bash/manual/) – Bourne-Again Shell Handbuch.
- [Bash FAQ](http://tiswww.case.edu/php/chet/bash/FAQ) (von [Chet Ramey](http://tiswww.case.edu/php/chet/))
- [Advanced Bash-Scripting Guide](http://tldp.org/LDP/abs/html/) – Eine ausführliche Erkundung der Kunst des shell-Skriptings.
- [Bash Guide for Beginners](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/) – Bash Leitfaden für Anfänger (von Machtelt Garrels).
- [Bash Programming - Intro/How-to](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc)
- [bash-handbook](https://github.com/denysdovhan/bash-handbook) – Ein Handbuch für diejenigen, die Bash lernen möchten, ohne zu tief einzutauchen.
- [Google's Shell Style Guide](https://google.github.io/styleguide/shellguide.html) – Vernünftige Ratschläge zum Codestil.
- [Sobell's Book](http://www.sobell.com/CR3/index.html) – Eine praktische Anleitung zu Befehlen, Editoren und shell-Programmierung.
- [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
- [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
- [Defensive BASH Programming](https://web.archive.org/web/20180917174959/http://www.kfirlavi.com/blog/2012/11/14/defensive-bash-programming) – Methoden, um Ihre Programme vor Beschädigungen zu schützen und den Code aufgeräumt und sauber zu halten.
- [Pure Bash Bible](https://github.com/dylanaraps/pure-bash-bible) – Eine Sammlung reiner bash-Alternativen zu externen Prozessen.
- [explainshell](https://explainshell.com) – Eine Website, die die Befehle shell (Bash) (einschließlich ihrer Flags und Optionen) aufschlüsselt und erklärt.
- [Safe ways to do things in bash](https://github.com/anordal/shellharden/blob/master/how_to_do_things_safely_in_bash.md) – So erledigen Sie Dinge sicher in Bash.

## Produktivität über die Befehlszeile

*Suche, Lesezeichen, Multiplexing und andere Tools, die Ihr Terminalerlebnis produktiver machen.*

- [aliases](https://github.com/sebglazebrook/aliases) – Kontextbezogene, dynamische, organisierte Aliase für bash shell.
- [bashhub-server](https://github.com/nicksherron/bashhub-server) – Privat gehosteter Open-Source-Bashhub-Server.
- [bashhub](https://github.com/rcaloras/bashhub-client) - Bash-Verlauf in der Cloud. Indiziert und durchsuchbar :cloud:.
- [bashmarks](https://github.com/huyng/bashmarks) – Verzeichnislesezeichen für shell.
- [bashmount](https://github.com/jamielinux/bashmount) – Einfache Verwaltung von Wechselmedien.
- [ble.sh](https://github.com/akinomyoga/ble.sh) – Benutzerfreundlicher und funktionsreicher Readline-Ersatz mit Syntaxhervorhebung, besserer Befehlsvervollständigung und verbesserter mehrzeiliger Bearbeitung.
- [commacd](https://github.com/shyiko/commacd) – Eine schnellere Möglichkeit, sich in Bash zu bewegen.
- [forkrun](https://github.com/jkool702/forkrun) – Ein reines bash-Tool zum parallelen Ausführen von Code. Ähnlich in Syntax und Geschwindigkeit wie `xargs -P`, aber mit mehr Funktionen und nativer Bash-Funktionsunterstützung.
- [has](https://github.com/kdabir/has) – `has` hilft Ihnen, das Vorhandensein verschiedener Befehlszeilentools und ihrer Versionen im Pfad zu überprüfen.
- [hstr](https://github.com/dvorka/hstr) - Bash Verlaufsvorschlagsfeld.
- [sshrc](https://github.com/cdown/sshrc) – Bringen Sie Ihre .bashrc, .vimrc usw. mit, wenn Sie SSH verwenden.
- [utility-bash-scripts](https://github.com/aviaryan/utility-bash-scripts) – Nützliche bash-Skripte, um automatisierbare Aufgaben mit einem einzigen Befehl auszuführen.
- [zoxide](https://github.com/ajeetdsouza/zoxide) – Eine bessere Möglichkeit, in Ihrem Dateisystem zu navigieren. Geschrieben in Rust, cross-shell, und viel schneller als andere Autojumper.

## Anpassung

*Benutzerdefinierte Eingabeaufforderungen, Farbthemen usw.*

- [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) – Minimalistisches Theme (Prompt) für sexy Terminals.
- [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) – Eine informative und ausgefallene Bash-Eingabeaufforderung für Git-Benutzer.
- [bash-powerline](https://github.com/riobard/bash-powerline) – Powerline-Eingabeaufforderung im Bash-Stil im reinen Bash-Skript.
- [bashstrap](https://github.com/barryclark/bashstrap) – Eine schnelle Möglichkeit, das macOS-Terminal aufzupeppen.
- [git-prompt](https://github.com/lvv/git-prompt) – Bash-Eingabeaufforderung mit Git-, SVN- und HG-Modulen.
- [gittify](https://github.com/momeni/gittify) – Eine farbenfrohe Bash-Eingabeaufforderung + angepasste Git-Aliase.
- [liquidprompt](https://github.com/nojhan/liquidprompt) – Eine voll ausgestattete und sorgfältig gestaltete adaptive Eingabeaufforderung für Bash und Zsh.
- [LS_COLORS](https://github.com/trapd00r/LS_COLORS) – Eine Sammlung von LS_COLORS-Definitionen.
- [oh-my-git](https://github.com/arialdomartini/oh-my-git) – Eine eigensinnige git-Eingabeaufforderung für bash und zsh.
- [oh-my-bash](https://github.com/ohmybash/oh-my-bash) – Ein wunderbares, von der Community betriebenes Framework zur Verwaltung Ihrer bash-Konfiguration.
- [progress-bar.sh](https://github.com/edouard-lopez/progress-bar.sh) – Einfacher und sexy Fortschrittsbalken für `bash`, geben Sie ihm eine Dauer und es erledigt den Rest.
- [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt) – Bash-Eingabeaufforderung mit Farben, Git-Status und Git-Zweigen.
- [bash-sensible](https://github.com/mrzool/bash-sensible) – Ein Versuch vernünftigerer Bash-Standardeinstellungen.

## Für Entwickler

*Befehlszeilenentwicklung, Versionskontrolle und Bereitstellung.*

- [bocker](https://github.com/p8952/bocker) – Docker implementiert in 100 Zeilen von bash.
- [git-sh](https://github.com/rtomayko/git-sh) – Eine angepasste Bash-Umgebung, die für Git-Arbeiten geeignet ist.
- [mkdkr](https://github.com/rosineygp/mkdkr) – Erstellen Sie + Docker + Shell = CI-Pipeline.

## Herunterladen und Bereitstellen

*Selbstgehostete, schlanke Server und Netzwerktools, geschrieben in shell-Skripten.*

- [Bash-web-server](https://github.com/dzove855/Bash-web-server) – Ein reiner bash-Webserver, kein Socat, Netcat usw.
- [Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader) - Dropbox Uploader ist ein Bash-Skript, das zum Hochladen, Herunterladen, Auflisten oder Löschen von Dateien aus Dropbox verwendet werden kann.
- [balls](https://github.com/jneen/balls) - Bash auf Bällen.
- [bashbro](https://github.com/victrixsoft/bashbro/) – Ein auf Bash basierender Web-Dateibrowser, der Ihnen das Remote-Durchsuchen, Streamen, Anzeigen von Dokumenten und Speichern von Dateien über Ihren Webbrowser ermöglicht.
- [bash-stack](https://github.com/cgsdev0/bash-stack) – Modernes Web-Framework in bash.
- [bashttpd](https://github.com/avleen/bashttpd) – Ein in Bash geschriebener Webserver.
- [httpd.sh](https://github.com/cemeyer/httpd.sh) – Ein trivialer Webserver in bash, der ctypes.sh verwendet.
- [ngincat](https://github.com/jaburns/ngincat) – Kleiner Bash HTTP-Server mit Netcat.
- [sherver](https://github.com/remileduc/sherver) – Reiner, leichter Webserver Bash.
- [xiringuito](https://github.com/ivanilves/xiringuito) – SSH-basiertes VPN für Arme.

## Anwendungen

*Befehlszeilenbasierte Anwendungen oder Befehlszeilenzugriff auf vorhandene Dienste.*

- [bashblog](https://github.com/cfenollosa/bashblog) – Ein Bash-Skript, das Blog-Posts verwaltet.
- [pushbullet-bash](https://github.com/Red5d/pushbullet-bash) – Bash-Schnittstelle zur PushBullet-API.
- [todo.sh](https://github.com/todotxt/todo.txt-cli) – Ein einfaches und erweiterbares shell-Skript zum Verwalten Ihrer todo.txt-Datei.
- [cheapci](https://github.com/ianmiell/cheapci) – Ein kontinuierliches Integrationsframework, das in bash implementiert ist.

## Spiele

*Nur Arbeit und kein Vergnügen ist eine schäbige Art, den Tag zu verbringen.*

- [bash2048](https://github.com/mydzor/bash2048) – Bash Implementierung des Spiels 2048.
- [minesweeper](https://github.com/feherke/Bash-script/tree/master/minesweeper) – Bash Implementierung von Minesweeper.
- [wordle](https://gist.github.com/huytd/6a1a6a7b34a0d0abcac00b47e3d01513) - Wordle in weniger als 50 Zeilen von Bash.

## Webseite

- [Bash One-Liners](http://www.bashoneliners.com/) – Eine Sammlung praktischer oder einfach nur reiner awesome bash-Einzeiler ([repos](https://github.com/janosgyerik/bashoneliners) von @[janosgyerik](https://github.com/janosgyerik)).
- [commandlinefu](http://www.commandlinefu.com/) – Ein Repository für die elegantesten und nützlichsten UNIX-Befehle.

## Shell Paketverwaltung

*Tools zum Verwalten mehrerer shell-Konfigurationen.*

- [bash-it](https://github.com/Bash-it/bash-it) – Ein Community-Framework Bash.
- [basher](https://github.com/basherpm/basher) – Ein Paketmanager für shell-Skripte.
- [bpkg](https://github.com/bpkg/bpkg) – Ein leichter bash-Paketmanager.
- [homeshick](https://github.com/andsens/homeshick) – Git Dotfile-Synchronisierer geschrieben in Bash.

## Shell Skriptentwicklung

*Tools zum Schreiben, Verbessern oder Organisieren von Bash oder anderen shell-Skripten*

- [alinex bashlib](https://gitlab.com/alinex/bash-lib) – Modulare bash-Bibliothek für Serververwaltung, Datenverarbeitung und Remote-Scripting.
- [ansi](https://github.com/fidian/ansi) – ANSI Escape-Codes in reinem bash – Textfarbe ändern, Cursor positionieren, vieles mehr.
- [argbash](https://github.com/matejak/argbash) – Bash Argument-Parsing-Codegenerator.
- [assert.sh](https://github.com/lehmannro/assert.sh) – Bash Unit-Test-Framework.
- [async-bash](https://github.com/zombieleet/async-bash) – Implementierung asynchroner Funktionen in bash.
- [bats](https://github.com/bats-core/bats-core) - Bash Automatisiertes Testsystem.
- [bash3boilerplate](https://github.com/kvz/bash3boilerplate) – Vorlagen zum Schreiben besserer Bash-Skripte.
- [bashful](https://github.com/jmcantrell/bashful) – Eine Sammlung von Bibliotheken zur Vereinfachung des Schreibens von Bash-Skripten.
- [bashify](https://github.com/zombieleet/bashify) – Wenige Hilfsfunktionen in bash (insbesondere String-Manipulationsfunktionen).
- [bashing](https://github.com/xsc/bashing) – Bash in Stücke zerschlagen – Bash-Framework zum Erstellen von Befehlszeilentools.
- [bashly](https://github.com/DannyBen/bashly) – Bash Befehlszeilen-Framework und CLI-Generator.
- [bashmanager](https://github.com/lingtalfi/bashmanager) – Mini-bash-Framework zum Erstellen von Befehlszeilentools.
- [Bashmatic](https://github.com/kigster/bashmatic) – Eine benutzerfreundliche DSL-Bibliothek zum Erstellen von BASH-basierten Tools und Installationsprogrammen (über 900 Funktionen).
- [bunit](https://github.com/rafritts/bunit) – Ein Unit-Test-Framework für Bash-Skripte.
- [Bash Infinity](https://github.com/niieani/bash-oo-framework) – Eine moderne Boilerplate/Framework/Standardbibliothek für bash.
- [bash-modules](https://github.com/vlisivka/bash-modules) – Eine Sammlung von Modulen für den inoffiziellen strengen Modus.
- [bash_unit](https://github.com/pgrange/bash_unit) – Bash Unit-Testing-Enterprise-Edition-Framework für Profis.
- [bashunit](https://github.com/TypedDevs/bashunit) – Eine einfache Testbibliothek für bash-Skripte.
- [lobash](https://github.com/adoyle-h/lobash) – Ein modernes, sicheres und leistungsstarkes Dienstprogramm/Bibliothek für die Skriptentwicklung Bash.
- [mo](https://github.com/tests-always-included/mo) – Schnurrbart-Vorlagen in reinem bash.
- [semver_bash](https://github.com/cloudflare/semver_bash) – Semantische Versionierung in Bash.
- [shellcheck](https://github.com/koalaman/shellcheck) – Ein statisches Analysetool für shell-Skripte.
- [shellharden](https://github.com/anordal/shellharden) – Der korrigierende Syntax-Highlighter bash.
- [shfmt](https://github.com/mvdan/sh) – bash-Programme formatieren.
- [shunit2](https://github.com/kward/shunit2) – Ein Unit-Test-Framework für Bash-Skripte mit einer Variante von JUnit/PyUnit.
- [DevOps-Bash-tools](https://github.com/HariSekhon/DevOps-Bash-tools) – 750+ DevOps Shell Skripte und erweiterte Bash-Umgebung.
- [modernish](https://github.com/modernish/modernish) – Bibliothek mit verschiedenen Funktionen für shell-Skripting.
- [json.bash](https://github.com/h4l/json.bash) – Bash-Bibliothek und Befehlszeilentool, das JSON erstellt.
- [timep](https://github.com/jkool702/timep) – Ein Profiler und FlameGraph-Generator der nächsten Generation für den Code bash.

## Nur zum Spaß

- [Bash Screensavers](https://github.com/attogram/bash-screensavers?) – Eine Sammlung von Bildschirmschonern, die vollständig in bash geschrieben sind.
- [pokeget](https://github.com/talwat/pokeget) – Zeigt Sprites von Pokémon im Terminal an.

## Gemeinschaft

- [Stack Overflow](http://stackoverflow.com/questions/tagged/bash) – Bash-Tag auf Stack Overflow.
- [/r/bash](https://www.reddit.com/r/bash) – Ein Subreddit, der sich der Skripterstellung bash widmet.
- [/r/commandline](https://www.reddit.com/r/commandline) – Für alles, was die Befehlszeile betrifft, in jedem Betriebssystem.
- [#bash](https://web.libera.chat/?nick=Guest&#bash) - IRC Kanal auf Libera.​Chat. Die Hauptautoren von BashGuide, BashFAQ, BashPitfalls und ShellCheck hängen dort herum.

## Andere tolle Listen

Weitere erstaunlich tolle Listen finden Sie in [awesome-awesome](https://github.com/emijrp/awesome-awesome) und [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness).

## Beitragen

Beiträge willkommen! Lesen Sie zuerst [contribution guidelines](contributing.md).

## Lizenz

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

Soweit gesetzlich möglich, hat aloisdg auf alle Urheberrechte und verwandten oder benachbarten Rechte an diesem Werk verzichtet.
