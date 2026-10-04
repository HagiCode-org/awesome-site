<div align="center">
	<div>
		<img width="500" src="media/logo.svg" alt="Awesome Node.js">
		<br>
	</div>
	<br>
	<br>
	<br>
	<br>
	<hr>
	<p>
		<p>
			<sup>
				<a href="https://github.com/sponsors/sindresorhus">Meine Open-Source-Arbeit wird von der Community unterstützt</a>
			</sup>
		</p>
		<sup>Ein besonderer Dank geht an:</sup>
		<br>
		<br>
		<br>
		<a href="https://depot.dev?utm_source=github&utm_medium=sindresorhus">
			<div>
				<picture>
					<source width="180" media="(prefers-color-scheme: dark)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-dark.svg">
					<source width="180" media="(prefers-color-scheme: light)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-light.svg">
					<img width="180" src="https://sindresorhus.com/assets/thanks/depot-logo-light.svg" alt="Depot-Logo">
				</picture>
			</div>
			<b>Schnelle Remote-Container-Builds und GitHub-Actions-Runner.</b>
		</a>
		<br>
		<br>
		<br>
	</p>
	<hr>
	<br>
	<br>
	<br>
	<br>
	<br>
	<a href="https://awesome.re">
		<img src="https://awesome.re/badge-flat2.svg" alt="Awesome">
	</a>
	<p>
		<sub>Gib einfach <a href="https://node.cool"><code>node.cool</code></a> ein, um hierher zu gelangen. Folge mir auf <a href="https://twitter.com/sindresorhus">Twitter</a>.</sub>
	</p>
	<br>
	<p>
		<a href="https://en.wikipedia.org/wiki/Node.js">Node.js</a> ist eine quelloffene, plattformübergreifende JavaScript-Laufzeitumgebung zum Erstellen von Servern und Kommandozeilen-Tools.
	</p>
	<br>
</div>

## Inhalt

- [Offiziell](#official)
- [Pakete](#packages)
	- [Verrückte Experimente](#mad-science)
	- [Kommandozeilen-Apps](#command-line-apps)
	- [Funktionale Programmierung](#functional-programming)
	- [HTTP](#http)
	- [Debugging / Profiling](#debugging--profiling)
	- [Protokollierung](#logging)
	- [Kommandozeilen-Utilities](#command-line-utilities)
	- [Build-Tools](#build-tools)
	- [Hardware](#hardware)
	- [Templating](#templating)
	- [Webframeworks](#web-frameworks)
	- [Dokumentation](#documentation)
	- [Dateisystem](#filesystem)
	- [Kontrollfluss](#control-flow)
	- [Streams](#streams)
	- [Echtzeit](#real-time)
	- [Bild](#image)
	- [Text](#text)
	- [Zahl](#number)
	- [Mathematik](#math)
	- [Datum](#date)
	- [URL](#url)
	- [Datenvalidierung](#data-validation)
	- [Parsing](#parsing)
	- [Lesbare Darstellung](#humanize)
	- [Komprimierung](#compression)
	- [Netzwerk](#network)
	- [Datenbank](#database)
	- [Testen](#testing)
	- [Sicherheit](#security)
	- [Benchmarking](#benchmarking)
	- [Minifizierer](#minifiers)
	- [Authentifizierung](#authentication)
	- [Autorisierung](#authorization)
	- [E-Mail](#email)
	- [Job-Warteschlangen](#job-queues)
	- [Node.js-Verwaltung](#nodejs-management)
	- [Plattformübergreifende Integration](#cross-platform-integration)
	- [Verarbeitung natürlicher Sprache](#natural-language-processing)
	- [Prozessverwaltung](#process-management)
	- [Automatisierung](#automation)
	- [AST](#ast)
	- [Generatoren für statische Websites](#static-site-generators)
	- [Content-Management-Systeme](#content-management-systems)
	- [Forum](#forum)
	- [Bloggen](#blogging)
	- [Seltsam](#weird)
	- [Serialisierung](#serialization)
	- [Verschiedenes](#miscellaneous)
- [Paketmanager](#package-manager)
- [Ressourcen](#resources)
	- [Tutorials](#tutorials)
	- [Entdeckung](#discovery)
	- [Artikel](#articles)
	- [Newsletter](#newsletters)
	- [Videos](#videos)
	- [Bücher](#books)
	- [Blogs](#blogs)
	- [Kurse](#courses)
	- [Spickzettel](#cheatsheets)
	- [Tools](#tools)
	- [Community](#community)
	- [Verschiedenes](#miscellaneous-1)
- [Ähnliche Listen](#related-lists)

## Offiziell

- [Website](https://nodejs.org)
- [Dokumentation](https://nodejs.org/dist/latest/docs/api/)
- [Repository](https://github.com/nodejs/node)

## Pakete

### Verrückte Experimente

- [webtorrent](https://github.com/webtorrent/webtorrent) - Streaming-Torrent-Client für Node.js und den Browser.
- [peerflix](https://github.com/mafintosh/peerflix) - Streaming-Torrent-Client.
- [ipfs](https://github.com/ipfs/helia) - Verteiltes Dateisystem, das alle Computergeräte über ein gemeinsames Dateisystem miteinander verbinden soll.
- [stackgl](https://github.com/stackgl) - Offenes Software-Ökosystem für WebGL, aufgebaut auf browserify und npm.
- [peerwiki](https://github.com/mafintosh/peerwiki) - Die gesamte Wikipedia über BitTorrent.
- [peercast](https://github.com/mafintosh/peercast) - Streamt Torrent-Videos auf einen Chromecast.
- [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib) - Saubere, gut lesbare und bewährte Bitcoin-Bibliothek.
- [Bitcore](https://github.com/bitpay/bitcore) - Schlanke und leistungsstarke Bitcoin-Bibliothek.
- [PDFKit](https://github.com/foliojs/pdfkit) - Bibliothek zur PDF-Erstellung.
- [turf](https://github.com/Turfjs/turf) - Modulare Engine zur Verarbeitung und Analyse raumbezogener Daten.
- [webcat](https://github.com/mafintosh/webcat) - P2P-Pipe durchs Web über WebRTC, die zur Authentifizierung deinen privaten oder öffentlichen GitHub-Schlüssel verwendet.
- [NodeOS](https://github.com/NodeOS/NodeOS) - Das erste von npm betriebene Betriebssystem.
- [YodaOS](https://github.com/yodaos-project/yodaos) - KI-Betriebssystem.
- [Brain.js](https://github.com/BrainJS/brain.js) - Framework für maschinelles Lernen.
- [Pipcook](https://github.com/alibaba/pipcook) - Frontend-Framework für Algorithmen zum Erstellen von Pipelines für maschinelles Lernen.
- [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) - Modellierung und Analyse der Graphentheorie (auch Netzwerktheorie genannt).
- [js-git](https://github.com/creationix/js-git) - JavaScript-Implementierung von Git.
- [xlsx](https://github.com/SheetJS/sheetjs) - Reiner JavaScript-Reader und -Writer für Excel-Tabellen.
- [isomorphic-git](https://github.com/isomorphic-git/isomorphic-git) - Reine JavaScript-Implementierung von Git.

### Kommandozeilen-Apps

- [np](https://github.com/sindresorhus/np) - Die bessere Variante von `npm publish`.
- [npm-name](https://github.com/sindresorhus/npm-name) - Prüft, ob ein Paketname auf npm verfügbar ist.
- [gh-home](https://github.com/sindresorhus/gh-home) - Öffnet die GitHub-Seite des Repositorys im aktuellen Verzeichnis.
- [npm-home](https://github.com/sindresorhus/npm-home) - Öffnet die npm-Seite eines Pakets.
- [trash](https://github.com/sindresorhus/trash) - Sicherere Alternative zu `rm`.
- [speed-test](https://github.com/sindresorhus/speed-test) - Testet Geschwindigkeit und Ping deiner Internetverbindung.
- [pageres](https://github.com/sindresorhus/pageres) - Erstellt Screenshots von Websites.
- [cpy](https://github.com/sindresorhus/cpy) - Kopiert Dateien.
- [vtop](https://github.com/MrRio/vtop) - Ein verbessertes `top` mit übersichtlichen Diagrammen.
- [empty-trash](https://github.com/sindresorhus/empty-trash) - Leert den Papierkorb.
- [is-up](https://github.com/sindresorhus/is-up) - Prüft, ob eine Website erreichbar ist.
- [is-online](https://github.com/sindresorhus/is-online) - Prüft, ob eine Internetverbindung besteht.
- [public-ip](https://github.com/sindresorhus/public-ip) - Ruft deine öffentliche IP-Adresse ab.
- [clipboard-cli](https://github.com/sindresorhus/clipboard-cli) - Kopiert Inhalte ins Terminal und fügt sie von dort ein.
- [XO](https://github.com/xojs/xo) - Setzt einen strengen Codestil mit dem JavaScript-Happiness-Stil durch.
- [ESLint](https://github.com/eslint/eslint) - Erweiterbares Linting-Werkzeug für JavaScript.
- [David](https://github.com/alanshaw/david) - Informiert dich, wenn die npm-Abhängigkeiten deines Pakets veraltet sind.
- [http-server](https://github.com/http-party/http-server) - Ein einfacher HTTP-Kommandozeilenserver ohne Konfiguration.
- [Live Server](https://github.com/tapio/live-server) - HTTP-Entwicklungsserver mit Live-Reload-Funktion.
- [bcat](https://github.com/kessler/node-bcat) - Leitet die Kommandozeilenausgabe an Webbrowser weiter.
- [normit](https://github.com/pawurb/normit) - Google Übersetzer mit Sprachsynthese im Terminal.
- [fkill](https://github.com/sindresorhus/fkill-cli) - Beendet Prozesse auf besonders einfache Weise. Plattformübergreifend.
- [pjs](https://github.com/danielstjules/pjs) - Weiterleitbares JavaScript: filtert, mappt und reduziert schnell direkt im Terminal.
- [license-checker](https://github.com/davglass/license-checker) - Prüft die Lizenzen der Abhängigkeiten deiner Anwendung.
- [browser-run](https://github.com/juliangruber/browser-run) - Führt Code unkompliziert in einer Browserumgebung aus.
- [tmpin](https://github.com/sindresorhus/tmpin) - Ergänzt jede CLI-Anwendung, die Datei-Input akzeptiert, um Unterstützung für stdin.
- [wallpaper](https://github.com/sindresorhus/wallpaper) - Ändert den Desktop-Hintergrund.
- [pen](https://github.com/hatashiro/pen) - Live-Vorschau für Markdown im Browser – direkt aus deinem bevorzugten Editor.
- [dark-mode](https://github.com/sindresorhus/dark-mode) - Schaltet den Dunkelmodus von macOS um.
- [Jsome](https://github.com/Javascipt/Jsome) - Gibt JSON mit konfigurierbaren Farben und Einrückungen formatiert aus.
- [mobicon](https://github.com/samverschueren/mobicon-cli) - Generator für Symbole mobiler Apps.
- [mobisplash](https://github.com/samverschueren/mobisplash-cli) - Generator für Startbildschirme mobiler Apps.
- [diff2html-cli](https://github.com/rtfpessoa/diff2html-cli) - Generator, der einen Git-Diff ansprechend in HTML umwandelt.
- [trymodule](https://github.com/victorb/trymodule) - Probiert npm-Pakete direkt im Terminal aus.
- [jscpd](https://github.com/kucherenko/jscpd) - Erkennt Copy-and-paste-Duplikate im Quellcode.
- [atmo](https://github.com/Raathigesh/Atmo) - Mockt serverseitige APIs.
- [auto-install](https://github.com/siddharthkp/auto-install) - Installiert Abhängigkeiten automatisch während der Code geschrieben wird.
- [cost-of-modules](https://github.com/siddharthkp/cost-of-modules) - Ermittelt, welche Abhängigkeiten dich ausbremsen.
- [localtunnel](https://github.com/localtunnel/localtunnel) - Macht deinen lokalen Server im Internet erreichbar.
- [svg-term-cli](https://github.com/marionebl/svg-term-cli) - Teilt Terminalsitzungen als SVG.
- [gtop](https://github.com/aksakalli/gtop) - Systemüberwachungs-Dashboard für das Terminal.
- [themer](https://github.com/themerdev/themer) - Erstellt Themes für Editor, Terminal, Hintergrundbild, Slack und mehr.
- [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - Erstellt wunderschöne Bilder deines Codes – direkt im Terminal.
- [cash-cli](https://github.com/xxczaki/cash-cli) - Rechnet zwischen 170 Währungen um.
- [taskbook](https://github.com/klaussinani/taskbook) - Aufgaben, Boards und Notizen für die Kommandozeile.
- [discharge](https://github.com/brandonweiss/discharge) - Stellt statische Websites ganz einfach auf Amazon S3 bereit.
- [npkill](https://github.com/voidcosmos/npkill) - Findet und entfernt alte, speicherintensive `node_modules`-Verzeichnisse.

### Funktionale Programmierung

- [lodash](https://github.com/lodash/lodash) - Hilfsbibliothek mit konsistenten, anpassbaren und leistungsstarken Funktionen und Extras – besser und schneller als Underscore.js.
- [immutable](https://github.com/immutable-js/immutable-js) - Unveränderliche Datensammlungen.
- [Ramda](https://github.com/ramda/ramda) - Hilfsbibliothek mit Fokus auf flexibler funktionaler Komposition, ermöglicht durch automatisches Currying und umgekehrte Argumentreihenfolge. Vermeidet die Veränderung von Daten.
- [Mout](https://github.com/mout/mout) - Hilfsbibliothek, deren größter Unterschied zu anderen Lösungen darin besteht, dass nur benötigte Module oder Funktionen geladen werden – ohne zusätzlichen Overhead.
- [RxJS](https://github.com/reactivex/rxjs) - Funktional-reaktive Bibliothek zum Transformieren, Komponieren und Abfragen verschiedener Datenarten.
- [Kefir.js](https://github.com/kefirjs/kefir) - Reaktive Bibliothek mit Fokus auf hohe Leistung und geringen Speicherverbrauch.

### HTTP

- [got](https://github.com/sindresorhus/got) - Komfortablere Schnittstelle für das integrierte `http`-Modul.
- [undici](https://github.com/nodejs/undici) - Leistungsstarker HTTP-Client, von Grund auf und ohne Abhängigkeiten geschrieben.
- [ky-universal](https://github.com/sindresorhus/ky-universal) - Universeller HTTP-Client auf Basis von Fetch.
- [node-fetch](https://github.com/node-fetch/node-fetch) - `window.fetch` für Node.js.
- [axios](https://github.com/axios/axios) - Promise-basierter HTTP-Client (funktioniert auch im Browser).
- [superagent](https://github.com/visionmedia/superagent) - HTTP-Anfragebibliothek.
- [http-fake-backend](https://github.com/micromata/http-fake-backend) - Erstellt ein Fake-Backend, indem JSON-Dateien oder JavaScript-Objekte über konfigurierbare Routen bereitgestellt werden.
- [cacheable-request](https://github.com/lukechilds/cacheable-request) - Ergänzt native HTTP-Anfragen um RFC-konforme Cache-Unterstützung.
- [gotql](https://github.com/khaosdoctor/gotql) - GraphQL-Anfragebibliothek auf Basis von [got](https://github.com/sindresorhus/got).
- [global-agent](https://github.com/gajus/global-agent) - Globaler HTTP-/HTTPS-Proxy-Agent, der sich über Umgebungsvariablen konfigurieren lässt.
- [smoke](https://github.com/sinedied/smoke) - Dateibasiertes HTTP-Mock-Server mit Aufzeichnungsfunktion.
- [purest](https://github.com/simov/purest) - REST-Client.

### Debugging / Profiling

- [debug](https://github.com/debug-js/debug) - Kleines Debugging-Hilfsprogramm.
- [why-is-node-running](https://github.com/mafintosh/why-is-node-running) - Node.js läuft, aber du weißt nicht warum?
- [njsTrace](https://github.com/valyouw/njstrace) - Instrumentiert und verfolgt deinen Code: zeigt alle Funktionsaufrufe, Argumente und Rückgabewerte sowie die Laufzeit jeder Funktion an.
- [vstream](https://github.com/joyent/node-vstream) - Instrumentierbare Stream-Mixins zum Untersuchen einer Stream-Pipeline.
- [stackman](https://github.com/watson/stackman) - Ergänzt Stacktraces von Fehlern um Codeausschnitte und weitere nützliche Informationen.
- [locus](https://github.com/alidavut/locus) - Startet zur Laufzeit eine REPL mit Zugriff auf alle Variablen.
- [0x](https://github.com/davidmarkclements/0x) - Flamegraph-Profiling.
- [ctrace](https://github.com/automation-stack/ctrace) - Gut lesbare, verbesserte Traces von Systemaufrufen und Signalen.
- [leakage](https://github.com/andywer/leakage) - Schreibt Tests zum Aufspüren von Speicherlecks.
- [llnode](https://github.com/nodejs/llnode) - Post-mortem-Analysetool, mit dem sich Objekte untersuchen und Erkenntnisse aus einem abgestürzten Node.js-Prozess gewinnen lassen.
- [thetool](https://github.com/sfninja/thetool) - Erfasst CPU-, Speicher- und weitere Profile deiner Anwendung in einem für Chrome DevTools geeigneten Format.
- [swagger-stats](https://github.com/slanatech/swagger-stats) - Verfolgt API-Aufrufe und überwacht API-Leistung, Zustand und Nutzungsmetriken.
- [NiM](https://github.com/june07/nim) - Verwaltet den Debugging-Workflow in den DevTools.
- [dats](https://github.com/immobiliare/dats) - Minimalistischer, abhängigkeitsfreier [StatsD](https://github.com/statsd/statsd)-Client.

### Protokollierung

- [pino](https://github.com/pinojs/pino) - Extrem schneller, von Bunyan inspirierter Logger.
- [winston](https://github.com/winstonjs/winston) - Asynchrone Logging-Bibliothek mit mehreren Transportwegen.
- [console-log-level](https://github.com/watson/console-log-level) - Der denkbar einfachste Logger mit Unterstützung für Log-Level und benutzerdefinierte Präfixe.
- [storyboard](https://github.com/guigrpa/storyboard) - Durchgängige, hierarchische, echtzeitfähige und farbige Logs und Abläufe.
- [consola](https://github.com/unjs/consola) - Logger für die Konsole.

### Kommandozeilen-Utilities

- [chalk](https://github.com/chalk/chalk) - Terminal-Textformatierung, wie sie sein sollte.
- [meow](https://github.com/sindresorhus/meow) - Hilfsprogramm für CLI-Anwendungen.
- [yargs](https://github.com/yargs/yargs) - Kommandozeilen-Parser, der automatisch eine elegante Benutzerschnittstelle erzeugt.
- [ora](https://github.com/sindresorhus/ora) - Eleganter Terminal-Spinner.
- [get-stdin](https://github.com/sindresorhus/get-stdin) - Einfachere Verarbeitung von stdin.
- [log-update](https://github.com/sindresorhus/log-update) - Protokolliert, indem die vorherige Ausgabe im Terminal überschrieben wird. Nützlich für Fortschrittsbalken, Animationen usw.
- [Ink](https://github.com/vadimdemedes/ink) - React für interaktive Kommandozeilen-Apps.
- [listr2](https://github.com/listr2/listr2) - Aufgabenliste fürs Terminal.
- [conf](https://github.com/sindresorhus/conf) - Einfache Konfigurationsverwaltung für deine Anwendung oder dein Modul.
- [ansi-escapes](https://github.com/sindresorhus/ansi-escapes) - ANSI-Escape-Codes zur Steuerung des Terminals.
- [log-symbols](https://github.com/sindresorhus/log-symbols) - Farbige Symbole für verschiedene Log-Level.
- [figures](https://github.com/sindresorhus/figures) - Unicode-Symbole mit Ausweichdarstellungen für die Windows-Eingabeaufforderung.
- [boxen](https://github.com/sindresorhus/boxen) - Erstellt Boxen im Terminal.
- [terminal-link](https://github.com/sindresorhus/terminal-link) - Erstellt anklickbare Links im Terminal.
- [terminal-image](https://github.com/sindresorhus/terminal-image) - Zeigt Bilder im Terminal an.
- [string-width](https://github.com/sindresorhus/string-width) - Ermittelt die sichtbare Breite einer Zeichenfolge, also die Anzahl der Spalten, die zu ihrer Anzeige erforderlich sind.
- [cli-truncate](https://github.com/sindresorhus/cli-truncate) - Kürzt eine Zeichenfolge im Terminal auf eine bestimmte Breite.
- [blessed](https://github.com/chjj/blessed) - Bibliothek im Stil von Curses.
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - Interaktive Eingabeaufforderung für die Kommandozeile.
- [yn](https://github.com/sindresorhus/yn) - Parst Werte wie Ja/Nein.
- [cli-table3](https://github.com/cli-table/cli-table3) - Ansprechende Unicode-Tabellen.
- [drawille](https://github.com/madbence/node-drawille) - Zeichnet mithilfe von Unicode-Braille-Zeichen im Terminal.
- [ascii-charts](https://github.com/jstrace/chart) - ASCII-Balkendiagramm im Terminal.
- [progress](https://github.com/visionmedia/node-progress) - Flexibler Fortschrittsbalken in ASCII.
- [insight](https://github.com/yeoman/insight) - Hilft dir zu verstehen, wie dein Tool verwendet wird, indem Nutzungsmetriken anonym an Google Analytics übermittelt werden.
- [cli-cursor](https://github.com/sindresorhus/cli-cursor) - Schaltet den CLI-Cursor ein oder aus.
- [cli-columns](https://github.com/shannonmoeller/cli-columns) - Spaltenbasierte Unicode- und ANSI-sichere Textlisten.
- [cfonts](https://github.com/dominikwilkowski/cfonts) - Coole ASCII-Schriftarten für die Konsole.
- [multispinner](https://github.com/codekirei/node-multispinner) - Mehrere gleichzeitig laufende, einzeln steuerbare CLI-Spinner.
- [omelette](https://github.com/f/omelette) - Hilfsprogramm für die Shell-Autovervollständigung.
- [cross-env](https://github.com/kentcdodds/cross-env) - Setzt plattformübergreifend Umgebungsvariablen.
- [shelljs](https://github.com/shelljs/shelljs) - Plattformunabhängige Unix-Shell-Befehle.
- [sudo-block](https://github.com/sindresorhus/sudo-block) - Verhindert, dass Benutzer deine Anwendung mit Root-Rechten ausführen.
- [sparkly](https://github.com/sindresorhus/sparkly) - Erzeugt Sparklines `▁▂▃▅▂▇`.
- [Bit](https://github.com/teambit/bit) - Erstellt, pflegt, findet und verwendet kleine Module und Komponenten über mehrere Repositorys hinweg.
- [gradient-string](https://github.com/bokub/gradient-string) - Wunderschöne Farbverläufe in der Terminalausgabe.
- [oclif](https://github.com/oclif/oclif) - CLI-Framework mit Parser, automatischer Dokumentation, Tests und Plugins.
- [terminal-size](https://github.com/sindresorhus/terminal-size) - Ermittelt zuverlässig die Größe des Terminalfensters.
- [Cliffy](https://github.com/drew-y/cliffy) - Framework für interaktive CLIs.
- [zx](https://github.com/google/zx) - Schreibt Shell-Skripte in JavaScript.

### Build-Tools

- [parcel](https://github.com/parcel-bundler/parcel) - Blitzschneller Web-App-Bundler ohne Konfiguration.
- [webpack](https://github.com/webpack/webpack) - Bündelt Module und Assets für den Browser.
- [rollup](https://github.com/rollup/rollup) - Modul-Bundler der nächsten Generation für ES2015.
- [gulp](https://github.com/gulpjs/gulp) - Streaming-basiertes, schnelles Build-System, das Code statt Konfiguration bevorzugt.
- [Broccoli](https://github.com/broccolijs/broccoli) - Schnelle, zuverlässige Asset-Pipeline mit Neuaufbau in konstanter Zeit und kompakten Build-Definitionen.
- [Brunch](https://github.com/brunch/brunch) - Build-Tool für Frontend-Web-Apps mit einfacher deklarativer Konfiguration, schneller inkrementeller Kompilierung und klar vorgegebenem Workflow.
- [FuseBox](https://github.com/fuse-box/fuse-box) - Schnelles Build-System, das die Stärken von webpack, JSPM und SystemJS verbindet und TypeScript erstklassig unterstützt.
- [pkg](https://github.com/vercel/pkg) - Verpackt dein Node.js-Projekt als ausführbare Datei.
- [Vite](https://github.com/vitejs/vite) - Build-Tool fürs Frontend mit Hot Module Replacement und Bündelung statischer Assets.

### Hardware

- [johnny-five](https://github.com/rwaldron/johnny-five) - Arduino-Framework auf Firmata-Basis.
- [serialport](https://github.com/serialport/node-serialport) - Ermöglicht das Lesen und Schreiben über serielle Schnittstellen.
- [usb](https://github.com/node-usb/node-usb) - USB-Bibliothek.
- [i2c-bus](https://github.com/fivdi/i2c-bus) - Zugriff auf den seriellen I²C-Bus.
- [onoff](https://github.com/fivdi/onoff) - Zugriff auf GPIO und Erkennung von Interrupts.
- [spi-device](https://github.com/fivdi/spi-device) - Zugriff auf den seriellen SPI-Bus.
- [pigpio](https://github.com/fivdi/pigpio) - Schneller GPIO-Zugriff, PWM- und Servosteuerung, Benachrichtigungen bei Zustandsänderungen sowie Interrupt-Verarbeitung auf dem Raspberry Pi.
- [gps](https://github.com/infusion/GPS.js) - NMEA-Parser zur Ansteuerung von GPS-Empfängern.
- [modbus-serial](https://github.com/yaacov/node-modbus-serial) - Reine JavaScript-Implementierung von MODBUS-RTU über serielle Verbindungen und TCP.

### Templating

- [marko](https://github.com/marko-js/marko) - HTML-basierte Templating-Engine, die Vorlagen in CommonJS-Module kompiliert und Streaming, asynchrones Rendering und benutzerdefinierte Tags unterstützt.
- [nunjucks](https://github.com/mozilla/nunjucks) - Templating-Engine mit Vererbung, asynchroner Ablaufsteuerung und mehr, inspiriert von Jinja2.
- [handlebars.js](https://github.com/handlebars-lang/handlebars.js) - Erweiterung von Mustache-Vorlagen um leistungsstarke Funktionen wie Helper und komplexere Blöcke.
- [EJS](https://github.com/mde/ejs) - Einfache, bewusst unvoreingenommene Templating-Sprache.
- [Pug](https://github.com/pugjs/pug) - Leistungsstarke Template-Engine, stark von Haml beeinflusst.

### Webframeworks

- [Fastify](https://github.com/fastify/fastify) - Schnelles Webframework mit geringem Overhead.
- [Next.js](https://github.com/vercel/next.js) - Minimalistisches Framework für serverseitig gerenderte, universelle JavaScript-Webanwendungen.
- [Nuxt.js](https://github.com/nuxt/nuxt.js) - Minimalistisches Framework für serverseitig gerenderte Vue.js-Anwendungen.
- [Hapi](https://github.com/hapijs/hapi) - Framework zum Erstellen von Anwendungen und Diensten.
- [Micro](https://github.com/vercel/micro) - Minimalistisches Microservice-Framework mit asynchronem Ansatz.
- [Koa](https://github.com/koajs/koa) - Von dem Team hinter Express entwickeltes Framework, das eine kleinere, ausdrucksstärkere und robustere Grundlage für Webanwendungen und APIs bieten soll.
- [Express](https://github.com/expressjs/express) - Webanwendungs-Framework mit einem robusten Funktionsumfang zum Erstellen ein- und mehrseitiger sowie hybrider Webanwendungen.
- [Feathers](https://github.com/feathersjs/feathers) - Microservice-Framework im Geiste von Express.
- [LoopBack](https://github.com/loopbackio/loopback-next) - Leistungsstarkes Framework zum Erstellen von REST-APIs und zum einfachen Anbinden von Backend-Datenquellen.
- [Meteor](https://github.com/meteor/meteor) - Ein überaus einfaches, datenbankübergreifendes, datenübertragendes Webframework in reinem JavaScript. *(Vielleicht gefällt dir auch [awesome-meteor](https://github.com/Urigo/awesome-meteor).)*
- [Restify](https://github.com/restify/node-restify) - Ermöglicht den Aufbau korrekter REST-Webdienste.
- [ThinkJS](https://github.com/thinkjs/thinkjs) - Framework mit Unterstützung für ES2015+, WebSockets und REST-APIs.
- [ActionHero](https://github.com/actionhero/actionhero) - Framework für wiederverwendbare und skalierbare APIs über TCP-Sockets, WebSockets und HTTP-Clients.
- [seneca](https://github.com/senecajs/seneca) - Toolkit zum Schreiben von Microservices.
- [AdonisJs](https://github.com/adonisjs/core) - Vollwertiges MVC-Framework für Node.js auf Basis solider Dependency-Injection- und IoC-Container-Grundlagen.
- [Moleculer](https://github.com/moleculerjs/moleculer) - Schnelles und leistungsstarkes Microservices-Framework.
- [Nest](https://github.com/nestjs/nest) - Von Angular inspiriertes Framework für effiziente und skalierbare serverseitige Anwendungen.
- [TypeGraphQL](https://github.com/MichalLytek/type-graphql) - Modernes Framework zum Erstellen von GraphQL-APIs mit TypeScript, Klassen und Decorators.
- [Tinyhttp](https://github.com/tinyhttp/tinyhttp) - Modernes, schnelles Webframework im Stil von Express.
- [Marble.js](https://github.com/marblejs/marble) - Funktional-reaktives Framework für serverseitige Anwendungen auf Basis von TypeScript und RxJS.
- [Lad](https://github.com/ladjs/lad) - Framework eines ehemaligen Mitglieds der Express-TC und des Koa-Teams, das Web-, API-, Job- und Proxyserver bündelt.
- [Ts.ED](https://github.com/tsedio/tsed) - Intuitives TypeScript-Framework zum Erstellen serverseitiger Anwendungen auf Basis von Express.js oder Koa.js.
- [Hono](https://github.com/honojs/hono) - Kleines und schnelles Webframework.

### Dokumentation

- [documentation.js](https://github.com/documentationjs/documentation) - Generator für API-Dokumentation mit Unterstützung für ES2015+ und Flow-Annotationen.
- [Docco](https://github.com/jashkenas/docco) - Dokumentationsgenerator, der HTML-Dokumente erstellt, in denen Kommentare mit dem zugehörigen Code verwoben dargestellt werden.
- [JSDoc](https://github.com/jsdoc/jsdoc) - Generator für API-Dokumentation, ähnlich wie JavaDoc oder PHPDoc.
- [Docusaurus](https://github.com/facebook/docusaurus) - Generator für Dokumentations-Websites auf Basis von React und Markdown, mit Übersetzungs- und Versionsverwaltungsfunktionen.

### Dateisystem

- [del](https://github.com/sindresorhus/del) - Löscht Dateien und Ordner mithilfe von Globs.
- [globby](https://github.com/sindresorhus/globby) - Sucht Dateien anhand von Glob-Mustern und unterstützt mehrere Muster.
- [chokidar](https://github.com/paulmillr/chokidar) - Dateisystem-Überwachung, die Ereignisse von `fs.watch` und `fs.watchFile` stabilisiert und unter macOS auch das native `fsevents` verwendet.
- [find-up](https://github.com/sindresorhus/find-up) - Sucht eine Datei, indem die übergeordneten Verzeichnisse durchlaufen werden.
- [proper-lockfile](https://github.com/moxystudio/node-proper-lockfile) - Hilfsprogramm für Sperrdateien zwischen Prozessen und Rechnern.
- [load-json-file](https://github.com/sindresorhus/load-json-file) - Liest und parst eine JSON-Datei.
- [write-json-file](https://github.com/sindresorhus/write-json-file) - Wandelt JSON in Zeichenfolgen um und schreibt es atomar in eine Datei.
- [fs-write-stream-atomic](https://github.com/npm/fs-write-stream-atomic) - Wie `fs.createWriteStream()`, jedoch atomar.
- [filenamify](https://github.com/sindresorhus/filenamify) - Wandelt eine Zeichenfolge in einen gültigen Dateinamen um.
- [istextorbinary](https://github.com/bevry/istextorbinary) - Prüft, ob eine Datei Text oder Binärdaten enthält.
- [fs-jetpack](https://github.com/szwacz/fs-jetpack) - Vollständig neu gestaltete Dateisystem-API für den praktischen Alltag.
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - Zusätzliche Methoden für das `fs`-Modul.
- [package-directory](https://github.com/sindresorhus/package-directory) - Findet das Stammverzeichnis eines npm-Pakets.
- [filehound](https://github.com/nspragg/filehound) - Flexible, flüssig nutzbare Schnittstelle zum Durchsuchen des Dateisystems.
- [move-file](https://github.com/sindresorhus/move-file) - Verschiebt Dateien, auch geräteübergreifend.
- [tempy](https://github.com/sindresorhus/tempy) - Liefert einen zufälligen Pfad für eine temporäre Datei oder ein Verzeichnis.

### Kontrollfluss

- Promises
	- [pify](https://github.com/sindresorhus/pify) - Wandelt eine Funktion mit Callback-Stil in eine Promise-basierte Funktion um.
	- [delay](https://github.com/sindresorhus/delay) - Verzögert eine Promise um eine festgelegte Zeitspanne.
	- [promise-memoize](https://github.com/nodeca/promise-memoize) - Speichert Ergebnisse von Funktionen, die Promises zurückgeben, zwischen – mit Ablaufzeit und Vorabruf.
	- [valvelet](https://github.com/lpinca/valvelet) - Begrenzt die Ausführungsrate einer Funktion, die Promises zurückgibt.
	- [p-map](https://github.com/sindresorhus/p-map) - Wendet eine Abbildung parallel auf Promises an.
	- [Mehr…](https://github.com/sindresorhus/promise-fun)
- Observables
	- [RxJS](https://github.com/ReactiveX/RxJS) - Reaktive Programmierung.
	- [observable-to-promise](https://github.com/sindresorhus/observable-to-promise) - Wandelt ein Observable in eine Promise um.
	- [Mehr…](https://github.com/sindresorhus/awesome-observables)
- Streams
	- [Highland.js](https://github.com/caolan/highland) - Verwaltet synchronen und asynchronen Code mühelos – ausschließlich mit Standard-JavaScript und Node-ähnlichen Streams.

### Streams

- [get-stream](https://github.com/sindresorhus/get-stream) - Liest einen Stream als Zeichenfolge oder Puffer aus.
- [from2](https://github.com/hughsk/from2) - Komfortabler Wrapper für ReadableStream, inspiriert von `through2`.
- [into-stream](https://github.com/sindresorhus/into-stream) - Wandelt einen Puffer, eine Zeichenfolge, ein Array oder ein Objekt in einen Stream um.
- [duplexify](https://github.com/mafintosh/duplexify) - Führt einen beschreibbaren und einen lesbaren Stream zu einem Duplex-Stream der Streams2-API zusammen.
- [pumpify](https://github.com/mafintosh/pumpify) - Kombiniert ein Array von Streams zu einem einzelnen Duplex-Stream.
- [peek-stream](https://github.com/mafintosh/peek-stream) - Transformationsstream, mit dem sich die erste Zeile ansehen lässt, bevor entschieden wird, wie sie geparst wird.
- [binary-split](https://github.com/maxogden/binary-split) - Stream zum Aufteilen an Zeilenumbrüchen oder anderen Trennzeichen.
- [byline](https://github.com/jahewson/node-byline) - Sehr einfacher Stream-Reader, der Zeile für Zeile liest.
- [first-chunk-stream](https://github.com/sindresorhus/first-chunk-stream) - Transformiert den ersten Datenblock eines Streams.
- [pad-stream](https://github.com/sindresorhus/pad-stream) - Rückt jede Zeile eines Streams ein.
- [multistream](https://github.com/feross/multistream) - Kombiniert mehrere Streams zu einem einzelnen Stream.
- [readable-stream](https://github.com/nodejs/readable-stream) - Spiegelung der Streams2- und Streams3-Implementierungen aus dem Kern.
- [through2-concurrent](https://github.com/almost/through2-concurrent) - Transformiert Objektstreams parallel.

### Echtzeit

- [µWebSockets](https://github.com/uNetworking/uWebSockets) - Hoch skalierbare WebSocket-Server- und -Client-Bibliothek.
- [Socket.io](https://github.com/socketio/socket.io) - Ermöglicht bidirektionale Echtzeitkommunikation auf Ereignisbasis.
- [Faye](https://github.com/faye/faye) - Echtzeit-Nachrichtenbus zwischen Client und Server auf Grundlage des Bayeux-Protokolls.
- [SocketCluster](https://github.com/SocketCluster/socketcluster) - Skalierbare HTTP- und WebSocket-Engine, die auf mehreren CPU-Kernen laufen kann.
- [Primus](https://github.com/primus/primus) - Abstraktionsschicht für Echtzeit-Frameworks, die eine Bindung an ein bestimmtes Modul verhindert.
- [deepstream.io](https://github.com/deepstreamIO/deepstream.io-client-js) - Skalierbares Echtzeit-Microservice-Framework.
- [Kalm](https://github.com/kalm/kalm.js) - Socket-Router und Middleware-Framework auf niedriger Ebene.
- [MQTT.js](https://github.com/mqttjs/MQTT.js) - Client für MQTT, ein Pub/Sub-Nachrichtenprotokoll über TCP/IP.
- [rpc-websockets](https://github.com/elpheria/rpc-websockets) - Implementierung von JSON-RPC 2.0 über WebSockets.
- [Aedes](https://github.com/moscajs/aedes) - Schlanker MQTT-Server, der auf jedem Stream-Server ausgeführt werden kann.

### Bild

- [sharp](https://github.com/lovell/sharp) - Das schnellste Modul zum Verkleinern von JPEG-, PNG-, WebP- und TIFF-Bildern.
- [image-type](https://github.com/sindresorhus/image-type) - Erkennt den Bildtyp.
- [image-dimensions](https://github.com/sindresorhus/image-dimensions) - Ermittelt die Abmessungen eines Bildes.
- [lwip](https://github.com/EyalAr/lwip) - Leichtgewichtige Bildverarbeitung ohne ImageMagick.
- [pica](https://github.com/nodeca/pica) - Hochwertige und schnelle Größenanpassung (Lanczos3) in reinem JavaScript. Alternative zu `canvas.drawImage()`, wenn keine Pixelbildung zulässig ist.
- [jimp](https://github.com/oliver-moran/jimp) - Bildverarbeitung in reinem JavaScript.
- [qrcode](https://github.com/soldair/node-qrcode) - Generator für QR- und Strichcodes.
- [ImageScript](https://github.com/matmen/ImageScript) - Bildverarbeitung in JavaScript mit WebAssembly für hohe Leistung.

### Text

- [iconv-lite](https://github.com/ashtuchkin/iconv-lite) - Konvertiert Zeichenkodierungen.
- [string-length](https://github.com/sindresorhus/string-length) - Ermittelt die tatsächliche Länge einer Zeichenfolge, indem Unicode-Zeichen außerhalb der BMP korrekt gezählt und ANSI-Escape-Codes ignoriert werden.
- [camelcase](https://github.com/sindresorhus/camelcase) - Wandelt Zeichenfolgen mit Bindestrichen, Punkten, Unterstrichen oder Leerzeichen in camelCase um: `foo-bar` → `fooBar`.
- [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp) - Maskiert Sonderzeichen für reguläre Ausdrücke.
- [splice-string](https://github.com/sindresorhus/splice-string) - Entfernt oder ersetzt einen Teil einer Zeichenfolge wie `Array#splice`.
- [indent-string](https://github.com/sindresorhus/indent-string) - Rückt jede Zeile einer Zeichenfolge ein.
- [strip-indent](https://github.com/sindresorhus/strip-indent) - Entfernt führende Leerzeichen aus allen Zeilen einer Zeichenfolge.
- [detect-indent](https://github.com/sindresorhus/detect-indent) - Erkennt die Einrückung von Code.
- [he](https://github.com/mathiasbynens/he) - Kodiert und dekodiert HTML-Entitäten.
- [i18n-node](https://github.com/mashpie/i18n-node) - Einfaches Übersetzungsmodul mit dynamischer JSON-Speicherung.
- [babelfish](https://github.com/nodeca/babelfish) - Internationalisierung mit besonders einfacher Plural-Syntax.
- [matcher](https://github.com/sindresorhus/matcher) - Einfache Wildcard-Suche.
- [unhomoglyph](https://github.com/nodeca/unhomoglyph) - Normalisiert visuell ähnliche Unicode-Zeichen.
- [i18next](https://github.com/i18next/i18next) - Framework für Internationalisierung.
- [nanoid](https://github.com/ai/nanoid) - Kleiner, sicherer und URL-tauglicher Generator eindeutiger Zeichenfolgen-IDs.
- [StegCloak](https://github.com/kurolabs/stegcloak) - Verbirgt Geheimnisse unauffällig in Zeichenfolgen.

### Zahl

- [random-int](https://github.com/sindresorhus/random-int) - Erzeugt eine zufällige Ganzzahl.
- [random-float](https://github.com/sindresorhus/random-float) - Erzeugt eine zufällige Fließkommazahl.
- [unique-random](https://github.com/sindresorhus/unique-random) - Erzeugt zufällige Zahlen, die in Folge eindeutig sind.
- [round-to](https://github.com/sindresorhus/round-to) - Rundet eine Zahl auf eine bestimmte Anzahl von Nachkommastellen: `1.234` → `1.2`.

### Mathematik

- [ndarray](https://github.com/scijs/ndarray) - Mehrdimensionale Arrays.
- [mathjs](https://github.com/josdejong/mathjs) - Umfangreiche Mathematikbibliothek.
- [math-clamp](https://github.com/sindresorhus/math-clamp) - Begrenzt eine Zahl auf einen Wertebereich.
- [algebra](https://github.com/fibo/algebra) - Algebraische Strukturen.
- [multimath](https://github.com/nodeca/multimath) - Grundlage für schnelle Bildberechnungen in WebAssembly und JavaScript.

### Datum

- [Luxon](https://github.com/moment/luxon) - Bibliothek zur Arbeit mit Datum und Uhrzeit.
- [date-fns](https://github.com/date-fns/date-fns) - Moderne Hilfsbibliothek für Datumsangaben.
- [Day.js](https://github.com/iamkun/dayjs) - Unveränderliche Datumsbibliothek als Alternative zu Moment.js.
- [dateformat](https://github.com/felixge/node-dateformat) - Formatiert Datumsangaben.
- [tz-format](https://github.com/samverschueren/tz-format) - Formatiert ein Datum mit Zeitzone: `2015-11-30T10:40:35+01:00`.
- [cctz](https://github.com/floatdrop/node-cctz) - Schnelles Parsen, Formatieren und Umrechnen von Zeitzonen für Datumsangaben.

### URL

- [normalize-url](https://github.com/sindresorhus/normalize-url) - Normalisiert eine URL.
- [humanize-url](https://github.com/sindresorhus/humanize-url) - Bereitet eine URL lesbar auf: https://sindresorhus.com → sindresorhus.com.
- [url-unshort](https://github.com/nodeca/url-unshort) - Löst verkürzte URLs auf.
- [speakingurl](https://github.com/pid/speakingurl) - Erzeugt mit Transliteration einen Slug aus einer Zeichenfolge.
- [linkify-it](https://github.com/markdown-it/linkify-it) - Erkennt Linkmuster mit vollständiger Unicode-Unterstützung.
- [url-pattern](https://github.com/snd/url-pattern) - Einfachere Zeichenfolgenmuster für URLs und andere Texte als mit regulären Ausdrücken.
- [embedza](https://github.com/nodeca/embedza) - Erstellt aus URLs HTML-Snippets und Einbettungen anhand von oEmbed-, Open-Graph- und Meta-Tag-Informationen.

### Datenvalidierung

- [joi](https://github.com/sideway/joi) - Beschreibungssprache für Objektschemas und Validator für JavaScript-Objekte.
- [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) - JSON-Schema-Validator, der mithilfe von Codegenerierung besonders schnell ist.
- [property-validator](https://github.com/nettofarah/property-validator) - Einfache Eigenschaftsvalidierung für Express.
- [schema-inspector](https://github.com/schema-inspector/schema-inspector) - Bereinigt und validiert JSON-APIs.
- [ajv](https://github.com/ajv-validator/ajv) - Der schnellste JSON-Schema-Validator. Unterstützt die Vorschläge V5, V6 und V7.
- [Superstruct](https://github.com/ianstormtaylor/superstruct) - Einfache und kombinierbare Datenvalidierung in JavaScript und TypeScript.
- [yup](https://github.com/jquense/yup) - Validierung von Objektschemas.
- [zod](https://github.com/colinhacks/zod) - TypeScript-orientierte Schema-Validierung mit statischer Typinferenz.

### Parsing

- [remark](https://github.com/remarkjs/remark) - Plugin-basierter Markdown-Prozessor.
- [markdown-it](https://github.com/markdown-it/markdown-it) - Markdown-Parser mit vollständiger CommonMark-Unterstützung, Erweiterungen und Syntax-Plugins.
- [parse5](https://github.com/inikulin/parse5) - Schneller, umfassender und spezifikationskonformer HTML-Parser.
- [@parcel/css](https://github.com/parcel-bundler/parcel-css) - In Rust geschriebener CSS-Parser, -Transformer und -Minifizierer.
- [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) - Entfernt Kommentare aus JSON.
- [strip-css-comments](https://github.com/sindresorhus/strip-css-comments) - Entfernt Kommentare aus CSS.
- [parse-json](https://github.com/sindresorhus/parse-json) - Parst JSON und liefert dabei hilfreichere Fehlermeldungen.
- [URI.js](https://github.com/medialize/URI.js) - Ermöglicht das Ändern von URLs.
- [JSONStream](https://github.com/dominictarr/JSONStream) - Parst und serialisiert JSON im Streaming-Verfahren.
- [neat-csv](https://github.com/sindresorhus/neat-csv) - Schneller CSV-Parser mit Callback-Schnittstelle für den oben genannten Parser.
- [csv-parser](https://github.com/mafintosh/csv-parser) - Streaming-CSV-Parser mit dem Anspruch, schneller als alle anderen zu sein.
- [PEG.js](https://github.com/pegjs/pegjs) - Einfacher Parser-Generator, der schnelle Parser mit hervorragender Fehlerberichterstattung erzeugt.
- [x-ray](https://github.com/matthewmueller/x-ray) - Hilfsprogramm zum Extrahieren von Webinhalten.
- [nearley](https://github.com/kach/nearley) - Einfaches, schnelles und leistungsstarkes Parsing für JavaScript.
- [binary-extract](https://github.com/juliangruber/binary-extract) - Extrahiert einen Wert aus einem JSON-Puffer, ohne das gesamte Dokument zu parsen.
- [Stylecow](https://github.com/stylecow/stylecow) - Parst, bearbeitet und konvertiert modernes CSS für Kompatibilität mit allen Browsern. Durch Plugins erweiterbar.
- [js-yaml](https://github.com/nodeca/js-yaml) - Sehr schneller YAML-Parser.
- [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - Konvertiert XML in JavaScript-Objekte.
- [Jison](https://github.com/zaach/jison) - Benutzerfreundlicher JavaScript-Parser-Generator, verwandt mit Bison, Yacc und ähnlichen Werkzeugen.
- [google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber) - Parst, formatiert, speichert und validiert Telefonnummern.
- [ref](https://github.com/TooTallNate/ref) - Liest und schreibt strukturierte Binärdaten in Puffern.
- [xlsx-populate](https://github.com/dtjohnson/xlsx-populate) - Liest und schreibt Excel-XLSX-Dateien.
- [Chevrotain](https://github.com/Chevrotain/chevrotain) - Sehr schnelles, funktionsreiches Toolkit zum Erstellen von Parsern für JavaScript.
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) - Validiert und parst XML.

### Lesbare Darstellung

- [pretty-bytes](https://github.com/sindresorhus/pretty-bytes) - Wandelt Bytes in eine gut lesbare Zeichenfolge um: `1337` → `1.34 kB`.
- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - Wandelt Millisekunden in eine gut lesbare Zeichenfolge um: `1337000000` → `15d 11h 23m 20s`.
- [ms](https://github.com/vercel/ms) - Kleines Hilfsprogramm zur Umrechnung von Millisekunden.
- [pretty-error](https://github.com/AriaMinaei/pretty-error) - Fehlermeldungen mit weniger Ballast.
- [read-art](https://github.com/Tjatse/node-readability) - Extrahiert lesbare Inhalte aus beliebigen Webseiten.

### Komprimierung

- [yazl](https://github.com/thejoshwolfe/yazl) - ZIP-Archive erstellen.
- [yauzl](https://github.com/thejoshwolfe/yauzl) - ZIP-Archive entpacken.
- [Archiver](https://github.com/archiverjs/node-archiver) - Streaming-Schnittstelle zur Erstellung von Archiven mit ZIP- und TAR-Unterstützung.
- [pako](https://github.com/nodeca/pako) - Hochleistungsfähige Portierung von zlib nach reinem JavaScript (deflate, inflate, gzip).
- [tar-stream](https://github.com/mafintosh/tar-stream) - Streaming-Parser und -Generator für TAR-Archive. Siehe auch [tar-fs](https://github.com/mafintosh/tar-fs).

### Netzwerk

- [get-port](https://github.com/sindresorhus/get-port) - Ermittelt einen verfügbaren Port.
- [ipify](https://github.com/sindresorhus/ipify) - Ruft deine öffentliche IP-Adresse ab.
- [getmac](https://github.com/bevry/getmac) - Ermittelt die MAC-Adresse des Computers.
- [DHCP](https://github.com/infusion/node-dhcp) - DHCP-Client und -Server.
- [netcat](https://github.com/roccomuso/netcat) - Netcat in reinem JavaScript.

### Datenbank

- Treiber
	- [PostgreSQL](https://github.com/brianc/node-postgres) - PostgreSQL-Client mit reinen JavaScript- und nativen libpq-Bindings.
	- [Redis](https://github.com/luin/ioredis) - Redis-Client.
	- [LevelUP](https://github.com/Level/levelup) - LevelDB.
	- [MySQL](https://github.com/mysqljs/mysql) - MySQL-Client.
	- [couchdb-nano](https://github.com/apache/couchdb-nano) - CouchDB-Client.
	- [Aerospike](https://github.com/aerospike/aerospike-client-nodejs) - Aerospike-Client.
	- [Couchbase](https://github.com/couchbase/couchnode) - Couchbase-Client.
	- [MongoDB](https://github.com/mongodb/node-mongodb-native) - MongoDB-Treiber.
- ODM / ORM
	- [Sequelize](https://github.com/sequelize/sequelize) - ORM mit Unterstützung mehrerer SQL-Dialekte, darunter PostgreSQL, SQLite und MySQL.
	- [Bookshelf](https://github.com/bookshelf/bookshelf) - ORM für PostgreSQL, MySQL und SQLite3 im Stil von Backbone.js.
	- [Mongoose](https://github.com/Automattic/mongoose) - Elegante Objektmodellierung für MongoDB.
	- [Waterline](https://github.com/balderdashy/waterline) - Datenspeicherunabhängiges Werkzeug, das die Arbeit mit einer oder mehreren Datenbanken erheblich vereinfacht.
	- [OpenRecord](https://github.com/PhilWaldmann/openrecord) - ORM für PostgreSQL, MySQL, SQLite3 und REST-Datenspeicher, ähnlich wie ActiveRecord.
	- [pg-promise](https://github.com/vitaly-t/pg-promise) - PostgreSQL-Framework für natives SQL mit Promises.
	- [slonik](https://github.com/gajus/slonik) - PostgreSQL-Client mit strikten Typen, detaillierter Protokollierung und Assertions.
	- [Objection.js](https://github.com/Vincit/objection.js) - Leichtgewichtiges ORM auf Basis des SQL-Query-Builders Knex.
	- [TypeORM](https://github.com/typeorm/typeorm) - ORM für PostgreSQL, MariaDB, MySQL, SQLite und weitere Datenbanken.
	- [MikroORM](https://github.com/mikro-orm/mikro-orm) - TypeScript-ORM auf Basis der Muster Data Mapper, Unit of Work und Identity Map. Unterstützt MongoDB, PostgreSQL, MySQL und SQLite.
	- [Prisma](https://github.com/prisma/prisma) - Moderner Datenbankzugriff als ORM-Alternative: automatisch generierter, typsicherer Query-Builder für TypeScript. Unterstützt PostgreSQL, MySQL und SQLite.
 	- [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) - TypeScript-ORM für verschiedene Datenbanken, darunter PostgreSQL.
- Query-Builder
	- [Knex](https://github.com/knex/knex) - Query-Builder für PostgreSQL, MySQL und SQLite3, flexibel, portabel und angenehm in der Verwendung.
- Sonstiges
	- [NeDB](https://github.com/louischatriot/nedb) - Eingebettete, persistente Datenbank in JavaScript.
	- [Lowdb](https://github.com/typicode/lowdb) - Kleine JavaScript-Datenbank auf Basis von Lodash.
	- [Keyv](https://github.com/jaredwray/keyv) - Einfache Schlüssel-Wert-Speicherung mit Unterstützung mehrerer Backends.
	- [Finale](https://github.com/tommybananas/finale) - Erzeugt RESTful-Endpunkte für Sequelize-Modelle.
	- [database-js](https://github.com/mlaanderson/database-js) - Wrapper für mehrere Datenbanken mit JDBC-ähnlicher Verbindungsschnittstelle.
	- [Mongo Seeding](https://github.com/pkosiec/mongo-seeding) - Befüllt MongoDB-Datenbanken mit JavaScript- und JSON-Dateien.
	- [@databases](https://github.com/ForbesLindesay/atdatabases) - Führt einfache SQL-Abfragen gegen PostgreSQL, MySQL und SQLite3 aus, ohne SQL-Injection zu riskieren.
	- [pg-mem](https://github.com/oguimbal/pg-mem) - PostgreSQL-Instanz im Arbeitsspeicher für Tests.

### Testen

- [AVA](https://github.com/avajs/ava) - Test-Runner der Zukunft.
- [Mocha](https://github.com/mochajs/mocha) - Funktionsreiches Test-Framework, das asynchrones Testen einfach und angenehm macht.
- [nyc](https://github.com/istanbuljs/nyc) - Code-Coverage-Werkzeug auf Basis von Istanbul, das mit Unterprozessen funktioniert.
- [tap](https://github.com/tapjs/node-tap) - TAP-Testframework.
- [tape](https://github.com/substack/tape) - Test-Harness, das TAP-Ausgaben erzeugt.
- [power-assert](https://github.com/power-assert-js/power-assert) - Liefert über die standardisierte `assert`-Schnittstelle aussagekräftige Assertion-Meldungen.
- [Mochify](https://github.com/mantoni/mochify.js) - TDD mit Browserify, Mocha, PhantomJS und WebDriver.
- [trevor](https://github.com/vadimdemedes/trevor) - Führt Tests mit mehreren Node.js-Versionen aus, ohne manuell zwischen ihnen zu wechseln oder sie an Travis CI zu übertragen.
- [loadtest](https://github.com/alexfernandez/loadtest) - Führt Lasttests für Webanwendungen aus und bietet eine API zur Automatisierung.
- [Sinon.JS](https://github.com/sinonjs/sinon) - Test-Spies, Stubs und Mocks.
- [navit](https://github.com/nodeca/navit) - PhantomJS-/SlimerJS-Wrapper zur Vereinfachung von Browser-Testskripten.
- [Nock](https://github.com/nock/nock) - HTTP-Mocking und Erwartungen.
- [intern](https://github.com/theintern/intern) - Stack für Code-Tests.
- [toxy](https://github.com/h2non/toxy) - Manipulierbarer HTTP-Proxy zur Simulation von Ausfällen und Netzwerkbedingungen.
- [hook-std](https://github.com/sindresorhus/hook-std) - Fängt stdout/stderr ab und ändert die Ausgaben.
- [testen](https://github.com/egoist/testen) - Führt lokal mit NVM Tests für mehrere Node.js-Versionen aus.
- [Nightwatch](https://github.com/nightwatchjs/nightwatch) - Framework für automatisierte UI-Tests auf Basis von Selenium WebDriver.
- [WebdriverIO](https://github.com/webdriverio/webdriverio) - Automatisierte Tests auf Basis des WebDriver-Protokolls.
- [Jest](https://github.com/facebook/jest) - JavaScript-Tests ohne Aufwand.
- [Vitest](https://github.com/vitest-dev/vitest) - Schnelles Unit-Test-Framework auf Basis von Vite.
- [TestCafe](https://github.com/DevExpress/testcafe) - Automatisierte Browser-Tests.
- [abstruse](https://github.com/bleenco/abstruse) - Continuous-Integration-Server.
- [CodeceptJS](https://github.com/codeceptjs/CodeceptJS) - End-to-End-Tests.
- [Puppeteer](https://github.com/puppeteer/puppeteer) - Headless Chrome.
- [Playwright](https://github.com/microsoft/playwright) - Headless Chromium, WebKit und Firefox über eine einheitliche API.
- [nve](https://github.com/ehmicky/nve) - Führt beliebige Befehle lokal mit mehreren Node.js-Versionen aus.
- [axe-core](https://github.com/dequelabs/axe-core) - Barrierefreiheits-Engine für automatisierte Web-UI-Tests.
- [testcontainers-node](https://github.com/testcontainers/testcontainers-node) - Stellt leichtgewichtige, kurzlebige Instanzen gängiger Datenbanken, Selenium-Webbrowser und anderer in Docker-Containern ausführbarer Dienste bereit.

### Sicherheit

- [upash](https://github.com/simonepri/upash) - Einheitliche API für alle Algorithmen zur Passwort-Hashbildung.
- [themis](https://github.com/cossacklabs/themis) - Mehrsprachiges Framework, das typische Verschlüsselungsverfahren einfach nutzbar macht: ruhende Daten, authentifizierter Datenaustausch, Transportschutz, Authentifizierung und mehr.
- [GuardRails](https://github.com/apps/guardrails) - GitHub-App, die Sicherheitsfeedback zu Pull Requests liefert.
- [rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible) - Schutz vor Brute-Force- und DDoS-Angriffen.
- [crypto-hash](https://github.com/sindresorhus/crypto-hash) - Asynchrone, nicht blockierende Hash-Berechnung.
- [jose-simple](https://github.com/davesag/jose-simple) - Verschlüsselt und entschlüsselt Daten nach dem JOSE-Standard (JSON Object Signing and Encryption).

### Benchmarking

- [Benchmark.js](https://github.com/bestiejs/benchmark.js) - Benchmarking-Bibliothek mit hochauflösenden Timern und statistisch aussagekräftigen Ergebnissen.

### Minifizierer

- [babel-minify](https://github.com/babel/minify) - Minifizierer mit ES2015+-Unterstützung auf Basis der Babel-Toolchain.
- [UglifyJS2](https://github.com/mishoo/UglifyJS) - Minifizierer für JavaScript.
- [clean-css](https://github.com/clean-css/clean-css) - Minifizierer für CSS.
- [minimize](https://github.com/Swaagie/minimize) - Minifizierer für HTML.
- [imagemin](https://github.com/imagemin/imagemin) - Minifizierer für Bilder.

### Authentifizierung

- [Passport](https://github.com/jaredhanson/passport) - Einfache, unaufdringliche Authentifizierung.
- [Grant](https://github.com/simov/grant) - OAuth-Anbieter für Express, Koa, Hapi, Fastify, AWS Lambda, Azure, Google Cloud, Vercel und viele weitere.

### Autorisierung

- [CASL](https://github.com/stalniy/casl) - Isomorphe Autorisierung für Benutzeroberfläche und API.
- [node-casbin](https://github.com/casbin/node-casbin) - Autorisierungsbibliothek mit Unterstützung für Zugriffskontrollmodelle wie ACL, RBAC und ABAC.

### E-Mail

- [Nodemailer](https://github.com/nodemailer/nodemailer) - Der schnellste Weg zur Verarbeitung von E-Mails.
- [emailjs](https://github.com/eleith/emailjs) - Versendet Text- und HTML-E-Mails mit Anhängen an beliebige SMTP-Server.
- [email-templates](https://github.com/forwardemail/email-templates) - Erstellt, zeigt in der Vorschau an und versendet benutzerdefinierte E-Mail-Vorlagen.
- [MJML](https://github.com/mjmlio/mjml) - Markup-Sprache, die das Erstellen responsiver E-Mails erleichtern soll.
- [Forward Email](https://github.com/forwardemail/forwardemail.net) - Open-Source-E-Mail-Dienst zum Selbsthosten.

### Job-Warteschlangen

- [bull](https://github.com/OptimalBits/bull) - Persistente Job- und Nachrichtenwarteschlange.
- [agenda](https://github.com/agenda/agenda) - Auf MongoDB basierende Jobplanung.
- [idoit](https://github.com/nodeca/idoit) - Auf Redis basierende Jobwarteschlange mit erweiterter Auftragssteuerung.
- [node-resque](https://github.com/actionhero/node-resque) - Auf Redis basierende Jobwarteschlange.
- [rsmq](https://github.com/smrchy/rsmq) - Auf Redis basierende Nachrichtenwarteschlange.
- [bee-queue](https://github.com/bee-queue/bee-queue) - Leistungsstarke, auf Redis basierende Jobwarteschlange.
- [RedisSMQ](https://github.com/weyoss/redis-smq) - Einfache, leistungsstarke Redis-Nachrichtenwarteschlange mit Echtzeitüberwachung.
- [sqs-consumer](https://github.com/bbc/sqs-consumer) - Erstellt Anwendungen auf Basis von Amazon Simple Queue Service (SQS) ohne überflüssigen Boilerplate-Code.
- [better-queue](https://github.com/diamondio/better-queue) - Einfache und effiziente Jobwarteschlange, wenn Redis nicht verwendet werden kann.
- [bullmq](https://github.com/taskforcesh/bullmq) - Persistente Job- und Nachrichtenwarteschlange.
- [bree](https://github.com/breejs/bree) - Jobplaner mit Unterstützung für Worker-Threads, Cron, Datumsangaben und natürlichsprachliche Zeitangaben.
- [graphile-worker](https://github.com/graphile/worker) - Leistungsstarke PostgreSQL-Jobwarteschlange.

### Node.js-Verwaltung

- [n](https://github.com/tj/n) - Verwaltet Node.js-Versionen.
- [nave](https://github.com/isaacs/nave) - Virtuelle Umgebungen für Node.js.
- [nodeenv](https://github.com/ekalinin/nodeenv) - Virtuelle Node.js-Umgebung, kompatibel mit Pythons virtualenv.
- [nvm for Windows](https://github.com/coreybutler/nvm-windows) - Verwaltet Versionen unter Windows.
- [nodenv](https://github.com/nodenv/nodenv) - Versionsmanager ähnlich wie Rubys rbenv, mit automatischem Versionswechsel.
- [fnm](https://github.com/Schniz/fnm) - Plattformübergreifender, in Rust entwickelter Node.js-Versionsmanager.

### Plattformübergreifende Integration

- [napi-rs](https://github.com/napi-rs/napi-rs) - Framework zum Erstellen kompilierter Node.js-Add-ons in Rust über Node-API.
- [Neon](https://github.com/neon-bindings/neon) - Rust-Bindings zum Schreiben sicherer und schneller nativer Node.js-Module.
- [Edge.js](https://github.com/agracio/edge-js) - Führt .NET- und Node.js-Code im selben Prozess unter Windows, macOS und Linux aus.
- [DotNetJS](https://github.com/Elringus/DotNetJS) - Ermöglicht über diese .NET-Interoperabilitätsschicht die Verwendung von .NET-Bibliotheken in Node.js.

### Verarbeitung natürlicher Sprache

- [retext](https://github.com/retextjs/retext) - Erweiterbares System zur Verarbeitung natürlicher Sprache.
- [franc](https://github.com/wooorm/franc) - Erkennt die Sprache eines Textes.
- [leven](https://github.com/sindresorhus/leven) - Misst mithilfe des Levenshtein-Abstands den Unterschied zwischen zwei Zeichenfolgen.
- [natural](https://github.com/NaturalNode/natural) - Werkzeugkasten für natürliche Sprache.
- [nlp.js](https://github.com/axa-group/nlp.js) - Erstellt Bots mit Extraktion von Entitäten, Sentimentanalyse, automatischer Spracherkennung und mehr.

### Prozessverwaltung

- [PM2](https://github.com/Unitech/pm2) - Erweiterter Prozessmanager.
- [nodemon](https://github.com/remy/nodemon) - Überwacht Änderungen an deiner Anwendung und startet den Server automatisch neu.
- [node-mac](https://github.com/coreybutler/node-mac) - Führt Skripte als nativen Mac-Daemon aus und protokolliert Ausgaben in der Konsolen-App.
- [node-linux](https://github.com/coreybutler/node-linux) - Führt Skripte als nativen Systemdienst aus und schreibt Protokolle in syslog.
- [node-windows](https://github.com/coreybutler/node-windows) - Führt Skripte als nativen Windows-Dienst aus und schreibt Protokolle in die Ereignisanzeige.
- [supervisor](https://github.com/petruisfan/node-supervisor) - Startet Skripte nach einem Absturz oder nach Änderungen an einer `*.js`-Datei neu.
- [Phusion Passenger](https://github.com/phusion/passenger) - Benutzerfreundlicher Prozessmanager mit direkter Integration in Nginx.

### Automatisierung

- [robotjs](https://github.com/octalmage/robotjs) - Desktop-Automatisierung: steuert Maus und Tastatur und liest Bildschirminhalte aus.
- [nut.js](https://github.com/nut-tree/nut.js) - Plattformübergreifendes natives Framework zur GUI-Automatisierung und zum Testen mit Bilderkennung und Jest-Integration.

### AST

- [Acorn](https://github.com/acornjs/acorn) - Kleiner, schneller JavaScript-Parser.
- [babel-parser](https://github.com/babel/babel/tree/master/packages/babel-parser) - Der in Babel verwendete JavaScript-Parser.

### Generatoren für statische Websites

- [DocPad](https://github.com/docpad/docpad) - Generator für statische Websites mit dynamischen Funktionen und einem riesigen Plugin-Ökosystem.
- [docsify](https://github.com/docsifyjs/docsify) - Generator für Markdown-Dokumentationsseiten ohne statisch erzeugte HTML-Dateien.
- [Charge](https://github.com/brandonweiss/charge) - Meinungsstarker Generator für statische Websites ohne Konfiguration, der JSX und MDX verwendet.

### Content-Management-Systeme

- [KeystoneJS](https://github.com/keystonejs/keystone) - CMS und Webanwendungsplattform auf Basis von Express und MongoDB.
- [ApostropheCMS](https://github.com/apostrophecms/apostrophe) - Content-Management-System mit Schwerpunkt auf intuitiver Bearbeitung und Verwaltung von Inhalten im Frontend, aufgebaut auf Express und MongoDB.
- [Strapi](https://github.com/strapi/strapi) - Content-Management-Framework (Headless-CMS) zum Erstellen leistungsstarker APIs.
- [Factor](https://github.com/FactorJS/factor) - Vue.js-Dashboard-Framework und Headless-CMS.
- [AdminBro](https://github.com/SoftwareBrothers/adminjs) - Automatisch generiertes Admin-Panel mit CRUD-Funktionen für alle Ressourcen.
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - CMS und Headless-GraphQL-API.

### Forum

- [nodeBB](https://github.com/NodeBB/NodeBB) - Forenplattform für das moderne Web.

### Bloggen

- [Ghost](https://github.com/TryGhost/Ghost) - Einfache, leistungsstarke Veröffentlichungsplattform.
- [Hexo](https://github.com/hexojs/hexo) - Schnelles, einfaches und leistungsstarkes Blogging-Framework.

### Seltsam

- [cows](https://github.com/sindresorhus/cows) - ASCII-Kühe.
- [superb](https://github.com/sindresorhus/superb) - Liefert Wörter für „super“ und „großartig“.
- [cat-names](https://github.com/sindresorhus/cat-names) - Liefert beliebte Katzennamen.
- [dog-names](https://github.com/sindresorhus/dog-names) - Liefert beliebte Hundenamen.
- [superheroes](https://github.com/sindresorhus/superheroes) - Liefert Namen von Superhelden.
- [supervillains](https://github.com/sindresorhus/supervillains) - Liefert Namen von Superschurken.
- [cool-ascii-faces](https://github.com/maxogden/cool-ascii-faces) - Liefert coole ASCII-Gesichter.
- [cat-ascii-faces](https://github.com/melaniecebula/cat-ascii-faces) - `₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛ (=ↀωↀ=)✧ (^･o･^)ﾉ”`.
- [nerds](https://github.com/SkyHacks/nerds) - Liefert Daten zu Nerd-Themen wie Harry Potter, Star Wars und Pokémon.

### Serialisierung

- [snappy](https://github.com/kesla/node-snappy) - Native Bindings für Googles Snappy-Komprimierungsbibliothek.
- [protobuf](https://github.com/protobufjs/protobuf.js) - Implementierung von Protocol Buffers.
- [compactr](https://github.com/compactr/compactr.js) - Implementierung des Compactr-Protokolls.

### Verschiedenes

- [execa](https://github.com/sindresorhus/execa) - Die bessere Variante von `child_process`.
- [cheerio](https://github.com/cheeriojs/cheerio) - Schnelle, flexible und schlanke Implementierung des jQuery-Kerns, speziell für den Server entwickelt.
- [open](https://github.com/sindresorhus/open) - Öffnet Websites, Dateien, ausführbare Programme und mehr.
- [hasha](https://github.com/sindresorhus/hasha) - Vereinfacht Hashing und ermittelt den Hash eines Puffers, einer Zeichenfolge, eines Streams oder einer Datei.
- [dot-prop](https://github.com/sindresorhus/dot-prop) - Liest über einen Punktpfad eine Eigenschaft aus einem verschachtelten Objekt aus.
- [onetime](https://github.com/sindresorhus/onetime) - Führt eine Funktion nur einmal aus.
- [mem](https://github.com/sindresorhus/mem) - Speichert Funktionsaufrufe zwischen, um wiederholte Aufrufe durch Zwischenspeicherung identischer Eingaben zu beschleunigen.
- [strip-bom](https://github.com/sindresorhus/strip-bom) - Entfernt die UTF-8-Byte-Reihenfolge-Markierung (BOM) aus einer Zeichenfolge, einem Puffer oder Stream.
- [os-locale](https://github.com/sindresorhus/os-locale) - Ermittelt das Gebietsschema des Systems.
- [ssh2](https://github.com/mscdex/ssh2) - SSH2-Client- und -Servermodul.
- [adit](https://github.com/markelog/adit) - Vereinfacht SSH-Tunneling.
- [file-type](https://github.com/sindresorhus/file-type) - Erkennt den Dateityp eines Puffers.
- [Bottleneck](https://github.com/SGrondin/bottleneck) - Ratenbegrenzung, die Drosselung vereinfacht.
- [webworker-threads](https://github.com/audreyt/node-webworker-threads) - Leichtgewichtige Web-Worker-API-Implementierung mit nativen Threads.
- [clipboardy](https://github.com/sindresorhus/clipboardy) - Ermöglicht den Zugriff auf die Systemzwischenablage zum Kopieren und Einfügen.
- [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) - Vereinfacht das Veröffentlichen und Installieren von Node.js-C++-Add-ons als Binärdateien.
- [opencv](https://github.com/peterbraden/node-opencv) - Bindings für OpenCV, die maßgebliche Bibliothek für Computer Vision.
- [dotenv](https://github.com/motdotla/dotenv) - Lädt Umgebungsvariablen aus einer `.env`-Datei.
- [semver](https://github.com/npm/node-semver) - Parser für semantische Versionen.
- [nodegit](https://github.com/nodegit/nodegit) - Native Bindings für Git.
- [json-strictify](https://github.com/pigulla/json-strictify) - Serialisiert Werte sicher als JSON, ohne Datenverlust oder Endlosschleifen.
- [jsdom](https://github.com/jsdom/jsdom) - JavaScript-Implementierung von HTML und dem DOM.
- [@sindresorhus/is](https://github.com/sindresorhus/is) - Prüft den Typ von Werten.
- [env-dot-prop](https://github.com/simonepri/env-dot-prop) - Liest, setzt oder löscht über einen Punktpfad verschachtelte Eigenschaften von `process.env`.
- [node-video-lib](https://github.com/gkozlenko/node-video-lib) - Reine JavaScript-Bibliothek zur Arbeit mit MP4- und FLV-Videodateien und zum Erstellen von MPEG-TS-Chunks für HLS-Streaming.
- [basic-ftp](https://github.com/patrickjuchli/basic-ftp) - FTP-/FTPS-Client.
- [cashify](https://github.com/xxczaki/cashify) - Währungsumrechnung.
- [genepi](https://github.com/Geode-solutions/genepi) - Erzeugt automatisch ein natives Node.js-Add-on aus C++-Code.
- [husky](https://github.com/typicode/husky) - Erstellt Git-Hook-Skripte.
- [patch-package](https://github.com/ds300/patch-package) - Erstellt Korrekturen für npm-Abhängigkeiten und erhält sie dauerhaft.
- [editly](https://github.com/mifi/editly) - Deklarative API zur Videobearbeitung.
- [wild-wild-path](https://github.com/ehmicky/wild-wild-path) - Objektpfade mit Platzhaltern und regulären Ausdrücken.
- [uint8array-extras](https://github.com/sindresorhus/uint8array-extras) - Nützliche Hilfsfunktionen für Uint8Array und Buffer.

## Paketmanager

- [npm](https://docs.npmjs.com/about-npm) - Der standardmäßige Paketmanager.
- [pnpm](https://pnpm.io) - Speicherplatzsparender Paketmanager.
- [yarn](https://yarnpkg.com) - Alternativer Paketmanager.
- [bun](https://bun.sh) - All-in-one-Toolkit für JavaScript- und TypeScript-Anwendungen.

## Ressourcen

### Tutorials

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) - Zusammenfassung und Auswahl der am besten bewerteten Inhalte zu bewährten Node.js-Verfahren, in mehreren Sprachen verfügbar.
- [Nodeschool](https://github.com/nodeschool) - Lerne Node.js mit interaktiven Lektionen.
- [The Art of Node](https://github.com/maxogden/art-of-node/#the-art-of-node) - Einführung in Node.js.
- [module-best-practices](https://github.com/mattdesl/module-best-practices) - Bewährte Vorgehensweisen für das Schreiben neuer npm-Module.
- [The Node Way](https://github.com/FredKSchott/the-node-way) - Eine umfassende Philosophie bewährter Node.js-Verfahren und Leitprinzipien zum Schreiben wartbarer Module, skalierbarer Anwendungen und angenehm lesbaren Codes.
- [You Don't Know Node.js](https://github.com/azat-co/you-dont-know-node) - Einführung in die Kernfunktionen von Node.js und asynchrones JavaScript.
- [Portable Node.js guide](https://github.com/ehmicky/cross-platform-node-guide) - Praktischer Leitfaden zum Schreiben portabler und plattformübergreifender Node.js-Anwendungen.
- [Build a real web app with no frameworks](https://frameworkless.js.org/course) - Eine Reihe von Video-Tutorials und Livestreams zum Erstellen und Bereitstellen einer echten Webanwendung mit einigen einfachen Bibliotheken und den Node.js-Kernmodulen.

### Entdeckung

- [npms](https://npms.io) - Hervorragende Paketsuche mit tiefgreifender Analyse der Paketqualität anhand einer [Vielzahl von Metriken](https://npms.io/about).
- [npm addict](https://npmaddict.com) - Deine tägliche Dosis npm-Pakete.

### Artikel

- [Error Handling in Node.js](https://sematext.com/blog/node-js-error-handling/)
- [Teach Yourself Node.js in 10 Steps](https://ponyfoo.com/articles/teach-yourself-nodejs-in-10-steps)
- [Mastering the filesystem in Node.js](https://medium.com/@yoshuawuyts/mastering-the-filesystem-in-node-js-4706b7cb0801)
- [Semver: A Primer](https://nodesource.com/blog/semver-a-primer/)
- [Semver: Tilde and Caret](https://nodesource.com/blog/semver-tilde-and-caret/)
- [Why Asynchronous?](https://nodesource.com/blog/why-asynchronous/)
- [Understanding the Node.js Event Loop](https://nodesource.com/blog/understanding-the-nodejs-event-loop/)
- [Understanding Object Streams](https://nodesource.com/blog/understanding-object-streams/)
- [Using Express to Quickly Build a GraphQL Server](https://snipcart.com/blog/graphql-nodejs-express-tutorial)

### Newsletter

- [Node Weekly](https://nodeweekly.com) - Wöchentlicher Überblick über Nachrichten und Artikel zu Node.js per E-Mail.

### Videos

- [Introduction to Node.js with Ryan Dahl](https://www.youtube.com/watch?v=jo_B4LTHi3I)
- [Hands on with Node.js](https://learn.bevry.me/hands-on-with-node.js/preface)
- [V8 Garbage Collector](https://v8.dev/blog/trash-talk) - Ein kritischer Blick auf den V8-Garbage-Collector.
- [10 Things I Regret About Node.js by Ryan Dahl](https://www.youtube.com/watch?v=M3BM9TB-8yA) - Aufschlussreicher Vortrag des Node.js-Erfinders über einige Einschränkungen der Plattform.
- [Mastering REST APIs in Node.js: Zero-To-Hero](https://www.manning.com/livevideo/mastering-rest-apis-in-nodejs) - Videokurs zum Erstellen von REST-APIs mit Node.js.
- [Make a vanilla Node.js REST API](https://www.youtube.com/watch?v=_1xa8Bsho6A) - Erstellen einer REST-API ohne Framework wie Express.
- [Google I/O 2009 - V8: High Performance JavaScript Engine](https://www.youtube.com/watch?v=FrufJFBSoQY) - Grundlagen der V8-Architektur und ihrer Optimierung der JavaScript-Ausführung.
- [Google I/O 2012 - Breaking the JavaScript Speed Limit with V8](https://www.youtube.com/watch?v=UJPdhx5zTaw) - Wie V8 die Ausführung von JavaScript optimiert.
- [Google I/O 2013 - Accelerating Oz with V8: Follow the Yellow Brick Road to JavaScript Performance](https://www.youtube.com/watch?v=VhpdsjBUS3g) - So lassen sich mit V8-Wissen Anwendungsengpässe erkennen und die Leistung optimieren.
- [Node.js Internal Architecture | Ignition, Turbofan, Libuv](https://www.youtube.com/watch?v=OCjvhCFFPTw) - Einblick in die interne Funktionsweise von Node.js, insbesondere V8 und libuv.
- [Introduction to libuv: What's a Unicorn Velociraptor?](https://www.youtube.com/watch?v=_c51fcXRLGw) - Architektur von `libuv`, Thread-Pool und Ereignisschleife anhand des Quellcodes.
- [libuv Cross platform asynchronous i/o](https://www.youtube.com/watch?v=kCJ3PFU8Ke8) - Detaillierter Einblick in die Architektur von `libuv`, etwa in den tatsächlichen Einsatz von Threads.
- [You Don't Know Node - ForwardJS San Francisco](https://www.youtube.com/watch?v=oPo4EQmkjvY) - Erklärt die Interna von Node.js anhand von Quizfragen zu V8, libuv, Ereignisschleife, Modulen, Streams und Clustern.

### Bücher

- [Node.js in Action](https://www.manning.com/books/node-js-in-action-second-edition)
- [Node.js in Practice](https://www.amazon.com/Node-js-Practice-Alex-R-Young/dp/1617290939)
- [Mastering Node](https://visionmedia.github.io/masteringnode/)
- [Node.js 8 the Right Way](https://pragprog.com/book/jwnode2/node-js-8-the-right-way/)
- [Professional Node.js: Building JavaScript Based Scalable Software](https://www.amazon.com/Professional-Node-js-Building-JavaScript-Scalable-ebook/dp/B009L7QETY/)
- [Secure Your Node.js Web Application](https://www.amazon.com/Secure-Your-Node-js-Web-Application/dp/1680500856)
- [Express in Action](https://www.manning.com/books/express-in-action)
- [Practical Modern JavaScript](https://www.amazon.com/Practical-Modern-JavaScript-Dive-Future/dp/149194353X)
- [Mastering Modular JavaScript](https://www.amazon.com/Mastering-Modular-JavaScript-Nicolas-Bevacqua/dp/1491955686/)
- [Get Programming with Node.js](https://www.manning.com/books/get-programming-with-node-js)
- [Node.js Cookbook](https://www.amazon.com/dp/1838558756)
- [Node.js Design Patterns](https://www.nodejsdesignpatterns.com)

### Blogs

- [Node.js blog](https://nodejs.org/en/blog/)
- [webapplog.com](https://webapplog.com/tag/node-js/) - Blogbeiträge über Node.js und JavaScript von Azat Mardan, dem Autor von Practical Node.js und Pro Express.js.

### Kurse

- [Learn to build apps and APIs with Node.js](https://learnnode.com/friend/AWESOME) - Videokurs von Wes Bos.
- [Real Time Web with Node.js](https://www.pluralsight.com/courses/code-school-real-time-web-with-nodejs)
- [Learn and Understand Node.js](https://www.udemy.com/course/understand-nodejs/)
- [Node.js Full Stack Developer Course](https://kinsta.com/academy/course/node-js-full-stack-developer/)

### Spickzettel

- [Express.js](https://github.com/azat-co/cheatsheets/tree/master/express4)
- [Stream FAQs](https://github.com/stephenplusplus/stream-faqs) - Beantwortet häufige Fragen zu Streams, darunter Paginierung, Ereignisse und mehr.
- [Strong Node.js](https://github.com/jesusprubio/strong-node) - Checkliste zur Sicherheitsanalyse des Quellcodes eines Node.js-Webdienstes.

### Tools

- [OctoLinker](https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp) - Chrome-Erweiterung, die Abhängigkeiten in `package.json` sowie `.js`-, `.jsx`-, `.coffee`- und `.md`-Dateien auf GitHub verlinkt.
- [npm-hub](https://chrome.google.com/webstore/detail/npmhub/kbbbjimdjbjclaebffknlabpogocablj) - Chrome-Erweiterung, die npm-Abhängigkeiten am Ende der README eines Repositorys anzeigt.
- [RunKit](https://runkit.com) - Bettet eine Node.js-Umgebung in beliebige Websites ein.
- [github-npm-stats](https://chrome.google.com/webstore/detail/github-npm-stats/oomfflokggoffaiagenekchfnpighcef) - Chrome-Erweiterung, die npm-Downloadstatistiken auf GitHub anzeigt.
- [npm semver calculator](https://semver.npmjs.com) - Erkundet visuell, welche Paketversionen von einem semantischen Versionsbereich abgedeckt werden.
- [CodeSandbox](https://codesandbox.io/templates/node-http-server) - Online-IDE und Prototyping-Umgebung.
- [Amplication](https://github.com/amplication/amplication) - Erstellt automatisch voll funktionsfähige Anwendungen.
- [RunJS](https://runjs.app) - JavaScript-Spielwiese für den Desktop.

### Community

- [Stack Overflow](https://stackoverflow.com/questions/tagged/node.js)
- [Reddit](https://www.reddit.com/r/node)
- [Twitter](https://twitter.com/nodejs)
- [Hashnode](https://hashnode.com/n/nodejs)
- [Discord](https://discord.com/invite/96WGtJt)

### Verschiedenes

- [nodebots](https://nodebots.io) - Roboter auf JavaScript-Basis.
- [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) - Vorlage für den schnellen Einstieg in die Erstellung eines Node-Moduls.
- [modern-node](https://github.com/sheerun/modern-node) - Toolkit zum Erstellen von Node-Modulen mit Jest, Prettier, ESLint und Standard.
- [generator-nm](https://github.com/sindresorhus/generator-nm) - Erstellt das Grundgerüst eines Node-Moduls.
- [Microsoft Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines) - Tipps, Tricks und Ressourcen zur Arbeit mit Node.js auf Microsoft-Plattformen.
- [Module Requests & Ideas](https://github.com/sindresorhus/project-ideas) - Fordere ein gewünschtes JavaScript-Modul an oder lass dich zu neuen Modulen inspirieren.
- [v8-perf](https://github.com/thlorenz/v8-perf) - Notizen und Ressourcen zu V8 und damit zur Leistung von Node.js.

## Ähnliche Listen

- [awesome-npm](https://github.com/sindresorhus/awesome-npm) - Ressourcen und Tipps zur Verwendung von npm.
- [awesome-cross-platform-nodejs](https://github.com/bcoe/awesome-cross-platform-nodejs) - Ressourcen zum Schreiben und Testen plattformübergreifenden Codes.
