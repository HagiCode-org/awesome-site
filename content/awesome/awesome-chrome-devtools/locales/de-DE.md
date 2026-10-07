# Awesome Chrome DevTools [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Hervorragende Werkzeuge und Ressourcen im Chrome-DevTools-Ökosystem

Werkzeuge, Protokoll-Treiber, Trace-Viewer und eigenständige Frontends, die rund um Chrome DevTools und das Chrome DevTools Protocol (CDP) entstanden sind. Gemäß dem [Awesome Manifesto](https://github.com/sindresorhus/awesome/blob/main/awesome.md) halten wir diese Liste auf das wirklich Nützliche fokussiert, anstatt alles im Bereich zu indexieren.

## Inhaltsverzeichnis

- [Lernen](#lernen)
- [Tracing & Profiling](#tracing--profiling)
- [Chrome DevTools Protocol](#chrome-devtools-protocol)
- [DevTools-Frontend mit anderen Plattformen nutzen](#devtools-frontend-mit-anderen-plattformen-nutzen)
- [DevTools-Erweiterungen](#devtools-erweiterungen)
- [Ehemalige Projekte](#ehemalige-projekte)

---

## Lernen
- [Dev Tips](https://umaar.com/dev-tips/) - Große Sammlung von Tipps als animierte Gifs.
- [DevTools Tips](https://devtoolstips.org/) - Sammlung illustrierter Tipps als Mini-Tutorials.
- [Web cheatcodes](https://codepo8.github.io/web-cheatcodes/) - Browser-Entwicklerwerkzeuge für Nicht-Entwickler.
- [Dear Console](https://codepo8.github.io/dearconsole) - Eine Sammlung von Snippets für die Browser-Konsole.
- [Chrome Secret Menus](https://github.com/sparkyrider/chrome-secret-menus) - Leitfaden zu Chromes internen `chrome://`-Seiten und Diagnosewerkzeugen.
- [Front-end Debugging Tools Handbook](https://github.com/lala-hakobyan/front-end-debugging-handbook) - Praktischer Leitfaden zum Front-End-Debugging über DevTools, Framework-Erweiterungen und IDEs hinweg.

---

## Tracing & Profiling

DevTools-Performance-Traces und V8-`.cpuprofile`-Protokolle sind im Kern einfaches JSON, und einige eigenständige Viewer bewältigen damit Großartiges:

- [trace.cafe](https://trace.cafe/) - Web-Performance-Traces direkt im DevTools-Performance-Panel teilen und ansehen ([Quelle](https://github.com/paulirish/trace.cafe)).
- [speedscope](https://github.com/jlfwong/speedscope) - Schneller, interaktiver Flamegraph-Viewer, der Chrome-`.cpuprofile` und Timeline-Traces importiert.
- [cpupro](https://github.com/discoveryjs/cpupro) - Tiefer V8/Chrome-`.cpuprofile`-Analysator mit Flamegraphs, Aufrufbäumen und Hotspot-Diagnose.
- [Perfetto](https://github.com/google/perfetto) - Suite zur Systemprofilerung und Trace-Analyse ([ui.perfetto.dev](https://ui.perfetto.dev/)) mit Chromium-Trace-Unterstützung und SQL-Trace-Abfragen.

---

## Chrome DevTools Protocol

Profi-Tipp: Schalten Sie Chromes eingebauten [Protocol Monitor](https://developer.chrome.com/docs/devtools/protocol-monitor) (`More tools > Protocol monitor`) ein, um live CDP-Verkehr zu beobachten und direkt im Browser rohe Befehle abzusetzen.

- [ChromeDevTools/devtools-protocol](https://github.com/chromedevtools/devtools-protocol) - **Kanonischer Ort des Protokoll-JSON**, der TypeScript-Typen und den Issue-Tracker für Protokollfehler enthält.
- [DevTools Protocol API Docs](https://chromedevtools.github.io/devtools-protocol/) - Durchsuchbare Oberfläche zum Erkunden der Domänen, Methoden und Ereignisse des Protokolls.

### Entwicklung mit dem Protokoll
- [chrome-remote-interface Wiki](https://github.com/cyrus-and/chrome-remote-interface/wiki) - Praktische Rezepte für häufige Roh-CDP-Aufgaben.
- [Chrome Protocol Proxy](https://github.com/wendigo/chrome-protocol-proxy) - Proxy zum Untersuchen und Debuggen von CDP-Client-Verkehr.

### Die zwei großen Automatisierungsbibliotheken
- [Puppeteer](https://github.com/puppeteer/puppeteer) - High-Level-Node.js-API zur Steuerung von Chrome über CDP und WebDriver BiDi. Siehe auch [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer).
- [Playwright](https://github.com/microsoft/playwright) - Plattformübergreifende Browser-Automatisierung für Chromium, Firefox und WebKit unter Node.js, Python, .NET und Java. Siehe auch [awesome-playwright](https://github.com/mxschmitt/awesome-playwright).

### Bibliotheken zur Steuerung des Protokolls (oder einer Schicht darüber)

- JavaScript/Node.js: [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface) - CDP-Client auf niedriger Ebene
- Rust: [chromiumoxide](https://github.com/mattsse/chromiumoxide) - Async/tokio-Bibliothek mit generierten Typen
- Rust: [Rust Headless Chrome](https://github.com/rust-headless-chrome/rust-headless-chrome) - High-Level-Headless-Chrome-Client
- Java: [chrome-devtools-java-client](https://github.com/kklisura/chrome-devtools-java-client) - Client auf Protokollebene
- Java: [jvppeteer](https://github.com/fanyong920/jvppeteer) - Headless Chrome für Java
- Python: [Zendriver](https://github.com/cdpdriver/zendriver) - Async-CDP-Browser-Automatisierung
- Python: [PyCDP](https://github.com/hyperiongray/python-chrome-devtools-protocol) - Sans-IO-Wrapper (siehe auch [Trio driver](https://github.com/hyperiongray/trio-chrome-devtools-protocol))
- Python: [ChromeController](https://github.com/fake-name/ChromeController) - Browser-Verwaltung auf hohem Niveau
- Go: [chromedp](https://github.com/chromedp/chromedp) - High-Level-Aktionen und -Aufgaben
- Go: [Rod](https://github.com/go-rod/rod) - High-Level-Automatisierung und Scraping
- Go: [cdp](https://github.com/mafredri/cdp) - Typsichere Bindings für CDP
- C#/.NET: [Puppeteer Sharp](https://github.com/hardkoded/puppeteer-sharp) - Puppeteer-Portierung
- C#/.NET: [dotnet-chrome-protocol](https://github.com/seclerp/dotnet-chrome-protocol) - Laufzeitbibliothek und Schema-Codegenerierung
- Ruby: [Ferrum](https://github.com/rubycdp/ferrum) - High-Level-API zur Steuerung von Chrome
- Ruby: [Cuprite](https://github.com/rubycdp/cuprite) - Capybara-Treiber
- Kotlin: [chrome-devtools-kotlin](https://github.com/joffrey-bion/chrome-devtools-kotlin) - Coroutine-basierte Client-Bibliothek
- Kotlin: [kdriver](https://github.com/cdpdriver/kdriver) - High-Level-Coroutine-Automatisierung
- Clojure: [clj-chrome-devtools](https://github.com/tatut/clj-chrome-devtools) - Autogenerierter CDP-Wrapper
- Clojure: [cuic](https://github.com/milankinen/cuic) - High-Level-UI-Testautomatisierung
- PHP: [chrome-devtools-protocol](https://github.com/jakubkulhan/chrome-devtools-protocol) - Client-Bibliothek

### Agentische Browser-Automatisierung

> Wir sind mit diesem Abschnitt *extrem* wählerisch. Gerade kapselt jeder einen Browser für Agenten ein — erwarten Sie, dass jede PR, die einen weiteren MCP-Server oder Agenten-CLI hinzufügt, geschlossen wird, es sei denn, sie hat echten Zuspruch und tut mit CDP unter der Haube etwas Neues.

- [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) - Offizieller MCP-Server für Chrome DevTools, der auch eine [CLI](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/skills/chrome-devtools-cli/SKILL.md) enthält.
- [Webcmd](https://github.com/agentrhq/webcmd) - Übersetzt Seitennavigation in deterministische, seitenweise CLI-Befehle für KI-Agenten.
- [Lumen](https://github.com/omxyz/lumen) - Visuell führender Browser-Agent mit selbstheilender deterministischer Wiedergabe über CDP.
- [bdg](https://github.com/szymdzum/browser-debugger-cli) - Persistente Hintergrund-CDP-Sitzung, die DOM, Netzwerk, Konsole und rohe Protokollmethoden als Shell-Befehle bereitstellt.

### Browser-Adapter
- [devtools-remote-debugger](https://github.com/Nice-PLQ/devtools-remote-debugger) - Debuggen Sie eine Webseite per Remote über einen in clientseitigem JS implementierten CDP-Agenten.
- [Inspect](https://inspect.dev/) - Nutzen Sie DevTools für iOS- und Android-Browser sowie WebViews. **(Closed Source)**

## DevTools-Frontend mit anderen Plattformen nutzen

Die DevTools-UI ist eine Web-App, die über ein WebSocket CDP spricht, daher können Sie sie einbetten oder auf Node, Ruby, mobile Webviews oder eigene Runtimes richten (eingebaute Ziele siehe `chrome://inspect`).

- [ChromeDevTools/devtools-frontend](https://github.com/ChromeDevTools/devtools-frontend) - Kanonisches Quell-Repository für die Chrome-DevTools-UI (auf npm als [chrome-devtools-frontend](https://www.npmjs.com/package/chrome-devtools-frontend) veröffentlicht).
- [Chii](https://github.com/liriliri/chii) und [Eruda](https://github.com/liriliri/eruda) - Remote-Debugging-Server, der die echte `devtools-frontend`-UI (`Chii`, ein moderner Weinre-Ersatz) und die mobile DevTools-Konsole in der Seite (`Eruda`) nutzt.
- [vscode-js-debug](https://github.com/microsoft/vscode-js-debug) - Offizieller, DAP-konformer JavaScript- und Chrome-CDP-Debugger, der VS Code antreibt.
- [VS Code - Elements for Microsoft Edge](https://github.com/microsoft/vscode-edge-devtools) - Elements- und Network-Panels eingebettet in VS Code.
- [Debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27) - Leitfaden zum Debuggen und Profilen von Node.js mit `node --inspect`.
- [ruby/debug](https://github.com/ruby/debug) - Rubys offizieller Debugger, der die Verbindung zu Chrome DevTools über CDP unterstützt (`rdbg --open=chrome`).

---

## DevTools-Erweiterungen

- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - Untersuchen Sie React-Komponentenhierarchien, Props und Profiler-Flamegraphs.
- [Vue.js Developer Tools](https://github.com/vuejs/devtools) - Untersuchen Sie Vue.js-Komponenten, -Zustand und -Routing.
- [Angular DevTools](https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh) - Komponentenbaum-Inspektion und Change-Detection-Profiling für Angular.
- [Redux Devtools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) - Time-Travel-Debugging und Aktionsverlauf für Redux.
- [Ember.js Inspector](https://chromewebstore.google.com/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi) - Untersuchen Sie Ember.js-Objekte, -Routen und -Daten.
- [Web Component DevTools](https://chromewebstore.google.com/detail/web-component-devtools/gdniinfdlmmmjpnhgnkmfpffipenjljo) - Untersuchen, ändern und beobachten Sie benutzerdefinierte Elemente und Shadow DOM auf der Seite.
- [Clockwork](https://chromewebstore.google.com/detail/clockwork/dmggabnehkmmfmdffgajcflpdjlnoemp?hl=en) - PHP-Anwendungsprofilierung und Anfrage-Inspektion in DevTools.
- [RailsPanel](https://chromewebstore.google.com/detail/railspanel/gjpfobpafnhjhbajcjgccbbdofdckggg?hl=en-US) - Ruby-on-Rails-Anfragen- und SQL-Profilierungspanel.

## Ehemalige Projekte
Alte Projekte, vermutlich nicht mehr gepflegt … Aber immer noch cool.

- [ndb](https://github.com/GoogleChromeLabs/ndb) - Verbesserte Node.js-Debugging-Erfahrung auf Basis des DevTools-Frontends.
- [thetool](https://github.com/sfninja/thetool) - CPU-, Speicher-, Coverage- und Typenprofilierung für Node.js.
- [Facebook Stetho](https://github.com/facebook/stetho) - Nativ-Android-Debugging mit Chrome DevTools.
- [PonyDebugger](https://github.com/square/PonyDebugger) - Remote-Netzwerk- und Core-Data-Debugging für iOS-Apps über Chrome DevTools.
- [betwixt](https://github.com/kdzwinel/betwixt) - Systemweiter Netzwerk-Proxy, der über ein eigenständiges DevTools-Network-Panel inspiziert wird.
- [Dirac](https://github.com/binaryage/dirac) - ClojureScript-Debugging mit einem angepassten DevTools-Fork.
- [VS Code - Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug/) - Ursprünglicher Chrome-Debugger für VS Code (abgelöst vom eingebauten [vscode-js-debug](https://github.com/microsoft/vscode-js-debug), das eine umfangreiche CDP/DAP-Implementierung besitzt).
- [noice-json-rpc](https://github.com/nojvek/noice-json-rpc) - Proxy-basierte TypeScript/JS-Bibliothek, die CDP-Domänen direkt als API bereitstellt.
- [PuPHPeteer](https://github.com/rialto-php/puphpeteer) - PHP-Brücke zu Node Puppeteer.
- [Insight](https://github.com/3Dparallax/insight/) - WebGL-Debugging-Toolkit für Chrome DevTools.
- [Remote Debug Gateway](https://github.com/RemoteDebug/remotedebug-gateway) - Verbinden Sie einen Debugging-Client gleichzeitig mit mehreren Browsern.
  - Multiuser DevTools: [DevTools Remote](https://github.com/auchenberg/devtools-remote) - Debuggen Sie den Browser einer anderen Person per Remote.
- [DevTools Backend](https://github.com/christian-bromann/devtools-backend) - Eigenständige Implementierung des Chrome-DevTools-Backends zum Debuggen beliebiger Web-Umgebungen.
- Python-CDP-Treiber: [pychrome](https://github.com/fate0/pychrome) - Low-Level-CDP-Transport-Handler.
- [ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy) - Stellt Mobile-Safari- und UIWebView-Instanzen über CDP bereit.
  - [Remote Debug iOS WebKit adapter](https://github.com/RemoteDebug/remotedebug-ios-webkit-adapter) - Baut auf `ios-webkit-debug-proxy` auf und übersetzt WebKits Remote-Debugging-Protokoll in CDP.
- [IE Diagnostics Adapter](https://github.com/Microsoft/IEDiagnosticsAdapter) - Protokoll-Adapter, der IE 11 in CDP übersetzt.
