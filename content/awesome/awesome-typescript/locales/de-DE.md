# TypeScript-Ressourcensammlung

## 🗄️ Archivierungshinweis

<details>
  <summary><strong>Zusammenfassung (2026)</strong> – Warum diese Liste archiviert ist</summary>
<hr/>
Ich habe awesome-typescript vor 11 Jahren gestartet, als TypeScript noch Gestalt annahm und längst nicht die heutige Standardwahl war. Damals war es wichtig, Ressourcen zu sammeln und auszuwählen: So fanden frühe Anwender zuverlässige Materialien, konnten ihre Erfahrungen teilen und eine Community rund um ein Werkzeug aufbauen, das viele Entwickler unterschätzten.

Im Laufe der Jahre habe ich oft über die Zukunft von TypeScript diskutiert (besonders zwischen 2016 und 2018). Ich war überzeugt, dass es zu einem Grundpfeiler moderner Entwicklung werden würde. Heute ist dieses Ergebnis kaum zu übersehen. TypeScript ist inzwischen die De-facto-Sprache für Frontend-Entwicklung und überall zu finden: in Anwendungen, SDKs, Beispielen und sogar Projekten mit nur losem Bezug dazu.

Dieser Erfolg stellt die Liste vor ein neues Problem. Wenn fast jedes Projekt TypeScript nutzt, ist die Annahme jeder möglichen Ergänzung keine Kuration mehr, sondern unbegrenzter Wartungsaufwand. Die Beiträge aus der Community sind zurückgegangen, das Signal-Rausch-Verhältnis hat sich verschoben und eine weitere Erweiterung erfüllt den ursprünglichen Zweck nicht mehr.

Statt etwas weiter zu pflegen, das keine sinnvolle, kuratierte Auswahl der besten Ressourcen im heutigen Umfeld mehr darstellen kann, archiviere ich awesome-typescript als historische Referenz.

Vielen Dank an alle, die mit Pull Requests, Ressourcenvorschlägen oder Feedback beigetragen haben. Eure Hilfe machte diese Liste dann nützlich, als es am wichtigsten war, und brachte die frühe TypeScript-Community zusammen.
<br/><hr />

</details>

<hr />

#### -= Awesome TypeScript =- [Awesome Elasticsearch](https://github.com/dzharii/awesome-elasticsearch) →

> Eine Auswahl großartiger TypeScript-Ressourcen für die Client- und Serverentwicklung. Schreibe großartiges JavaScript mit TypeScript. Inspiriert von den [awesome](https://github.com/sindresorhus/awesome)-Listen.

## Weitere awesome-Ressourcen

> [semlinker/awesome-typescript](https://github.com/semlinker/awesome-typescript) Danke an @semlinker für die Zusammenstellung!

## Mitwirken

Bitte lies zuerst kurz die [Beitragsrichtlinien](/contributing.md). Wenn ein Paket oder Projekt hier nicht mehr gepflegt wird oder nicht passt, reiche bitte einen Pull Request ein, um diese Datei zu verbessern.

## Inhalt

- [Wichtige TypeScript-Ressourcen](#awesome-typescript-essential-resources)
- [TypeScript-Projektvorlagen](#typescript-project-starters)
- [Bücher](#books)
- [Referenzlisten](#reference-lists)
- [Blogbeiträge](#blogs)
- [CLI und REPL](#cli-and-repl)
- [IDE](#ide)
- [Build-Systeme](#build-systems)
- [Cloud-Datenlagerung](#cloud-data-warehousing)
- [Modul-Bundler](#module-bundlers)
- [CMS](#cms)
- [Werkzeuge](#tools)
- [CSS-in-JS mit Typen](#css-in-js-with-types)
- [Typen](#types)
- [Laufzeit](#runtime)
- [Mit TypeScript entwickelt: Mobil, Web, Backend-API, eigenständige Anwendungen, Bibliotheken](#built-with-typescript)
- [Große Sprachmodelle (LLM)](#llm)
- [Videokurse](#video-courses)
- [Anleitungen](#tutorials)
- [Fahrplan](#roadmap)
- [Danksagungen](#acknowledgements)

## Erste Schritte mit (Awesome) TypeScript

### Wichtige TypeScript-Ressourcen
* :books: [Handbook - Welcome to TypeScript](http://www.typescriptlang.org/Handbook) Die offizielle Ressource zum Erlernen von TypeScript
* :books: [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/) von [Basarat Ali Syed](https://twitter.com/basarat)
* :octocat: [Microsoft/TypeScript auf GitHub](https://github.com/Microsoft/TypeScript) Forke TypeScript auf GitHub! Oder lies einfach den Code.
* :octocat:[Die offizielle TypeScript-Roadmap](https://github.com/Microsoft/TypeScript/wiki/Roadmap)
* :books: [TypeScript Team Blog](http://blogs.msdn.com/b/typescript/) mit Ankündigungen und aktuellen Neuigkeiten
* :octocat: [DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) Das Repository für hochwertige TypeScript-Typdefinitionen, gepflegt von Boris Yankov und Tausenden von Mitwirkenden
* :octocat: [Type search](https://aka.ms/typings), suche nach Typdefinitionen auf npm
* :books: [Von der Community kuratierte Ressourcen](https://hackr.io/tutorials/learn-typescript)
* :octocat: [Clean-Code-Konzepte für TypeScript](https://github.com/labs42io/clean-code-typescript)
* :computer: [Solltest du TypeScript lernen? (Vorteile und Ressourcen)](https://snipcart.com/blog/learn-typescript-why-use-ts)
* :computer: [Entdecke das volle Potenzial des Turing-vollständigen Typsystems von TypeScript!](https://type-level-typescript.com), 💵 Onlinekurs mit den ersten fünf Kapiteln kostenlos, von [Gabriel Vergnaud](https://twitter.com/GabrielVergnaud)
* :computer: [Codington](https://codington.io) Interaktive TypeScript-Übungen mit direktem Feedback, entwickelt zum Lernen und Lehren.
* :octocat: [Codebook](https://github.com/gvanastasov/codebook-typescript) Lies und führe kleine Codebeispiele aus, um TypeScript schrittweise von den Grundlagen bis zu fortgeschrittenen Konzepten zu erlernen.
* :octocat: [Type Challenges](https://github.com/type-challenges/type-challenges) Sammlung von TypeScript-Typaufgaben mit Online-Bewertung.
- :books: [TypeScript Style Guide](https://mkosir.github.io/typescript-style-guide) Eine kompakte Sammlung von Konventionen und bewährten Vorgehensweisen für einheitlichen, wartbaren Code.
- :art: [Visual Types](https://types.kitlangton.com/) Interaktive Visualisierungen von TypeScript-Konzepten. Freu dich an den hübschen Farben.

### TypeScript-Projektvorlagen
* [React Starter Kit](https://github.com/kriasoft/react-starter-kit) – Ein Full-Stack-Grundgerüst für moderne Webanwendungen mit Bun, TypeScript, React, tRPC, Drizzle ORM und Cloudflare Workers.
* [typescript-starter](https://github.com/bitjson/typescript-starter) – Ein CLI-Werkzeug zum schnellen Erzeugen und Konfigurieren neuer Bibliotheken und Node.js-Projekte
* [next-smrt](https://github.com/csprance/next-smrt) – Ein TypeScript-/Next.js-Grundgerüst mit Redux, Styled Components, Material UI und TypeSafe Actions.
* :octocat: [Next-Postgres-With-Typescript](https://github.com/brandontle/next-postgres-with-typescript) – Ein forumartiges Full-Stack-Web-App-Grundgerüst mit Next.js 7.0.2, Sequelize 4/Postgres, TypeScript, Redux, Passport Local Auth und Emotion
* [MicroTS](https://www.npmjs.com/package/microts) Ein Microservice-Codegenerator mit einem „Interface-first“-Ansatz: Aus einer OpenAPI-(Swagger-)REST-API-Spezifikation wird ein vollständiges Projekt mit TypeScript-Code, Eingabevalidierung, Benutzeroberfläche, Tests und Docker-Konfiguration erzeugt.
* [pankod/next-boilerplate](https://github.com/pankod/next-boilerplate) Ein gut strukturiertes, produktionsreifes Next.js-Grundgerüst mit TypeScript, Redux, Jest, Enzyme, Express.js, Sass, CSS, EnvConfig, Reverse Proxy, Bundle Analyzer und integriertem CLI
* [jsynowiec/node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate) Eine aktuelle, entwicklerfertige und umfassende, dennoch minimalistische Vorlage. Funktioniert bei den meisten Node.js-Projekten sofort. Alle grundlegenden Werkzeuge sind enthalten und konfiguriert. Ausgelegt auf die neuesten Node.js-LTS- und TypeScript-Versionen.
* [typescript-express-starter](https://github.com/ljlm0402/typescript-express-starter) – Ein schneller und einfacher TypeScript-Express-Einstieg.
* [The Knests Stack](https://github.com/tudorconstantin/knests/) – Full-Stack-Grundgerüst (Hackathon-Starter) mit PostgreSQL, Knex.js, NestJS, Next.js, GraphQL, React (mit Hooks und TypeScript), Material-UI, mehrstufigen Docker-Images, Docker Compose und einer vollständig konfigurierten GitLab-CI/CD-Pipeline.
* [tRPC + Next.js](https://trpc.io/docs/nextjs/introduction) – Full-Stack-Starterprojekte für durchgehend typsichere Entwicklung mit React
* [nd.ts](https://github.com/heyayushh/nd.ts/) – Richte so schnell wie möglich ein minimales Node.ts-Projekt ein
* :octocat: [samchon/backend](https://github.com/samchon/backend) – TypeScript-Backend-Vorlagenprojekt mit [NestJS](https://nestjs.com) ([nestia](https://github.com/samchon/nestia)) und [TypeORM](https://typeorm.io) ([safe-typeorm](https://github.com/samchon/safe-typeorm)). Es unterstützt Backend-Einsteiger mit daraus abgeleiteten Beispielprojekten. Außerdem ermöglicht es unterbrechungsfreie Aktualisierungen auf Prozessebene mit [pm2](https://pm2.keymetrics.io/).
* :ok_man: [ts-express-boilerplate](https://github.com/d4rkstar/ts-express-boilerplate) – Eine TypeScript-/ExpressJS-Vorlage für den Einstieg in Backend-Projekte mit Schwerpunkt auf Einfachheit und wenigen Funktionen :P Protokollierung und Tests sind sofort konfiguriert. Für den Datenzugriff kommt TypeORM zum Einsatz.
* [create-typescript-app](https://github.com/hein-htut-aung/create-typescript-app) – Bietet einen Ausgangspunkt für TypeScript-Webanwendungen mit pnpm, Rollup, Jest und CSS Modules mit SCSS.
* [ts-vite-npm-template](https://github.com/kaandesu/ts-vite-npm-template) – Eine Komplettlösung zur Erstellung TypeScript-basierter NPM-Pakete mit Vite, inklusive integrierter Bereitstellung von Live-Demos auf GitHub Pages, automatisierter Test- und Build-Workflows sowie Vite-basierter Unit-Test-Konfiguration mit Coverage-Analyse und README.md-Vorlage für dein Paket.

### Bücher
* :books: [TypeScript in 50 Lessons](https://typescript-book.com/) von Stefan Baumgartner
* :books: :fire: [TypeScript Quickly](https://www.manning.com/books/typescript-quickly) Lerne modernes TypeScript und entwickle deine eigene Blockchain; begleitende Codebeispiele :octocat:[yfain/getts](https://github.com/yfain/getts)
* :books: [Angular Development with Typescript, Second Edition (MEAP October 2017)](https://www.manning.com/books/angular-development-with-typescript-second-edition) Ein Tutorial auf mittlerem Niveau, das Angular und TypeScript Entwicklerinnen und Entwicklern vorstellt, die mit anderen Frameworks und Werkzeugen bereits Webanwendungen erstellen. (von Yakov Fain und Anton Moiseev; Manning)
* :books: [Angular 2 Development with TypeScript (2016)](https://www.manning.com/books/angular-2-development-with-typescript) von Yakov Fain und Anton Moiseev; Manning
* :books: [Learning TypeScript 2.x 2nd Ed.](https://www.learningtypescript.com) von Remo H. Jansen
* :books: [Mastering TypeScript 2nd Ed.](https://www.packtpub.com/application-development/mastering-typescript-second-edition) von Nathan Rozentals
* :books: [Beginning Angular 4 with TypeScript](https://www.amazon.com/Beginning-Angular-Typescript-Greg-Lim/dp/1542916674) von Greg Lim
* :books: [Programming with Types](https://www.manning.com/books/programming-with-types) – Ein Buch darüber, wie du mithilfe der Leistungsfähigkeit von Typsystemen sichere, robuste und korrekte Software entwirfst, die leicht zu warten und zu verstehen ist. (von Vlad Riscutia)
* :books: [Essential TypeScript 5](https://www.manning.com/books/essential-typescript-5) – Die dritte Auflage des Bestsellers zu TypeScript. (von Adam Freeman)
* :books: [Effective TypeScript](https://www.oreilly.com/library/view/effective-typescript/9781492053736/) von Dan Vanderkam
* :books: [Advanced TypeScript 3 Programming Projects](https://www.packtpub.com/product/advanced-typescript-3-programming-projects/9781789133042) von Peter O'Hanlon
* :books: [The Concise TypeScript Book (Free and Open Source)](https://github.com/gibbok/typescript-book) von Simone Poggiali
* :books: [Acing the Frontend Interview (Early Access)](https://www.manning.com/books/acing-the-frontend-interview) von Jennifer Fu (Manning)

### Referenzlisten
* [TypeScript-Referenz für JS-Entwickler](https://welldan97.github.io/typescript-reference/) – Glossar mit Schlüsselwörtern, Operatoren, Anweisungen und Direktiven

### Blogbeiträge
* [@captain-yossarian's blog](https://catchts.com/) – Ganz den statischen Typen in TypeScript gewidmet

### CLI und REPL
* [Taze](https://github.com/antfu/taze) Ein modernes CLI-Werkzeug, das deine Abhängigkeiten aktuell hält
* Verwende [ts-node](https://github.com/TypeStrong/ts-node), um Skripte oder eine REPL auszuführen
* So erstellst du ausführbare TypeScript-Skripte:
  1. Stelle sicher, dass `npx` (enthalten in `npm >= 5.2`) und das Paket `typescript` installiert sind
  1. Füge diese [Shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) als erste Zeile in dein Skript ein: `#!npx ts-node`
  1. Mache das Skript ausführbar: `chmod +x script.ts`
  1. Führe es direkt aus: `./script.ts` :)

### Entwicklungsumgebungen (IDE)
#### Offline
##### Visual Studio
* [ Visual Studio Community Edition 2015](https://www.visualstudio.com/products/visual-studio-community-vs) – Kostenlose (mit Einschränkungen) IDE mit integrierter TypeScript-Unterstützung
  * [VS Addon - TypescriptSyntaxPaste](https://visualstudiogallery.msdn.microsoft.com/eb0887f8-3ac1-434a-b50b-f0112f1572f7) – Ermöglicht, C#-Quellcode zu kopieren und als TypeScript-Syntax einzufügen, um DTOs oder Schnittstellen umzuwandeln
* [NodeJS Tools for Visual Studio](https://github.com/Microsoft/nodejstools)

##### Weitere (Plugins || plattformübergreifend || quelloffen || kostenlos)
* [Visual Studio Code](https://www.visualstudio.com/en-us/products/code-vs.aspx)
* [PhpStorm](https://www.jetbrains.com/phpstorm/download/)
* [WebStorm](https://www.jetbrains.com/webstorm/download/)
* [CATS](http://jbaron.github.io/cats/) ist eine IDE für TypeScript- und Webentwickler von @jbaron
* [TypeScript Sublime Plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin) von @Microsoft
* [Atom TypeScript](https://github.com/TypeStrong/atom-typescript) von @TypeStrong
* [TypeScript-Entwicklungsumgebung für Emacs](https://github.com/ananthakumaran/tide) von @ananthakumaran
* [TypeScript Syntax for VIM](https://github.com/leafgarland/typescript-vim)
* :octocat: [TypeScript-Add-in für](https://github.com/mrward/typescript-addin) MonoDevelop, SharpDevelop und Xamarin Studio; dazu ein kurzer [Übersichtsartikel](http://lastexitcode.com/blog/2015/04/01/TypeScriptSupportInXamarinStudio/)
* [TypeScript-Werkzeuge für Neovim](https://github.com/mhartington/nvim-typescript) sind ein Language-Service-Plugin für TypeScript in Neovim.
* [Coc](https://github.com/neoclide/coc.nvim) Macht Vim/Neovim so leistungsfähig wie VS Code.

#### Online

##### Spielwiese
* [TypeScript playground](https://agentcooper.github.io/typescript-play/) von @agentcooper; unterstützt mehrere TypeScript-Versionen und Compilerziele
* [TypeScript playground-on-ace](https://github.com/hi104/typescript-playground-on-ace) von @hi104 [auf TypeScript 1.5 aktualisiert](https://github.com/basarat/TypeScriptEditor)
* [TypeScript official Playground](http://www.typescriptlang.org/Playground/)
* [JS Bin](http://jsbin.com/?js) (TypeScript auswählen)
* [Codepen](http://codepen.io/) (TypeScript auswählen)
* [TypeScript Interpret - Terminal Emulator](http://niutech.github.io/typescript-interpret/) von @niutech
* [TypeScript Editor](http://drake7707.github.io/Typescript-Editor/) von @drake7707

## Build-Systeme
* [Grunt](http://gruntjs.com/) Aufgaben:
  - [grunt-ts](https://www.npmjs.com/package/grunt-ts) – Ein npm-Paket, das die TypeScript-Kompilierung in GruntJS-Buildskripten übernimmt
* [Zwitterion](https://github.com/lastmjs/zwitterion) – Ein besonders einfacher Entwicklungsserver mit integrierter Unterstützung für TypeScript-Dateien.
* [Nx](https://github.com/nrwl/nx) – Ein intelligentes, schnelles und erweiterbares Build-System

## Cloud-Datenlagerung
* :sparkles: [Crisp BigQuery](https://github.com/winwiz1/crisp-bigquery) Starterprojekt, das Google-BigQuery-Daten kostengesteuert an Browser der Endnutzer liefert. Es ermöglicht vielseitige Optionen zur Datendarstellung.
* [DDB-Table](https://github.com/neuledge/ddb-table) Typsichere Abfragen und Tabellen für AWS DynamoDB
* [DynamoDB-Toolbox](https://github.com/dynamodb-toolbox/dynamodb-toolbox) Leichtgewichtiger und typsicherer Abfragegenerator für AWS DynamoDB

## Modul-Bundler
* [Farm](https://farm-fe.github.io/) – Extrem schnelles, Vite-kompatibles Web-Build-Werkzeug in Rust
* [Rspack](https://www.rspack.dev/) – Ein schneller, Rust-basierter Web-Bundler 🦀️
* [Vite](https://vitejs.dev/) – Werkzeuge der nächsten Frontend-Generation
* [Webpack](http://webpack.github.io/) – Unterstützt das Bündeln von CommonJS- und AMD-Modulen
* [Browserify](http://browserify.org/) – CommonJS-Modul-Bundler. TypeScript wird nicht „direkt mitgeliefert“ unterstützt, lässt sich aber mit * [Grunt](http://gruntjs.com/)-Aufgaben einsetzen: [grunt-ts](https://www.npmjs.com/package/grunt-ts), [grunt-browserify](https://www.npmjs.com/package/grunt-browserify), [grunt-contrib-uglify](https://www.npmjs.com/package/grunt-contrib-uglify)
* [fuse-box](https://github.com/fuse-box/fuse-box) | [http://fuse-box.org/](http://fuse-box.org/) – TypeScript-Beispiel: [fuse-box-ts-react-reflux-seed](https://github.com/fuse-box/fuse-box-ts-react-reflux-seed)

## Content-Management-Systeme (CMS)
* [Factor](https://factor.dev) – Das JavaScript-CMS (mit nativer TypeScript-Unterstützung)
* [Graphweaver](https://github.com/exogee-technology/graphweaver) – Führt mehrere Datenquellen in einem einzigen Headless-CMS auf GraphQL-Basis zusammen.

## Werkzeuge
* [sqlx-ts](https://github.com/JasonShin/sqlx-ts) – Eine CLI-Anwendung mit zur Kompilierzeit geprüften Abfragen ohne DSL; erzeugt Typen aus SQL-Abfragen und hält deinen Code dadurch typsicher
* [bun](https://bun.sh/) – Bun ist eine schnelle JavaScript-Laufzeitumgebung, ein Paketmanager, Bundler und Test-Runner
* [deno](https://deno.land/) – Eine sichere Laufzeitumgebung für JavaScript und TypeScript
* [OXC](https://github.com/web-infra-dev/oxc) – Eine Sammlung leistungsstarker, in Rust geschriebener Werkzeuge für JavaScript und TypeScript
* [biome](https://github.com/biomejs/biome) – Biome formatiert und prüft deinen Code in Sekundenbruchteilen
* [SweetIQ/schemats](https://github.com/SweetIQ/schemats) Erzeugt TypeScript-Schnittstellendefinitionen aus dem Schema einer SQL-Datenbank
* [TypeDoc](http://typedoc.org/) – Ein Dokumentationsgenerator für TypeScript-Projekte
* [TypeScript Standard](https://github.com/e2tox/typescript-standard) – TypeScript-2-Standardprüfung ohne Konfiguration
* [typed-install](https://github.com/xavdid/typed-install) – Installiert einfach neue Abhängigkeiten und die zugehörigen Typdefinitionen – unabhängig davon, wo sie liegen
* [type-config](https://github.com/Saul-Mirone/type-config) – Ein Generator für tsconfig.
* [Zapatos](https://jawj.github.io/zapatos/) – Postgres ohne Abstraktionsschicht für TypeScript
* [dep-tree](https://github.com/gabotechs/dep-tree) – Stellt den Datei-Abhängigkeitsbaum deines Projekts dar und/oder prüft ihn anhand deiner eigenen Regeln.
* [itertools-ts](https://github.com/Smoren/itertools-ts) – Erweiterte Übertragung von itertools für TypeScript und JavaScript. Bietet zahlreiche Funktionen zur Arbeit mit iterierbaren Sammlungen, auch asynchronen.
* [ParaglideJS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) – Ein i18n-Compiler, der vollständig typsichere Übersetzungen erzeugt
* [pg](https://github.com/datawan-labs/pg) – PostgreSQL-Spielwiese im Browser, ohne Server und nur mit Client und PGlite (PostgreSQL-WASM)
* [nocodb](https://github.com/nocodb/nocodb) – 🔥 🔥 🔥 Eine Open-Source-Alternative zu Airtable
* [jqlite](https://github.com/Jay-Karia/jqlite) – ⚡ Die Abfragesprache für JSON
* [pompelmi](https://github.com/pompelmi/pompelmi) – Prüft Datei-Uploads auf Malware, um Remote File Inclusion (RFI) in Node.js zu verhindern; mit Adaptern für Express, Koa und Next.js
* [codables](https://codableslib.com/) – Deklarativer, auf Dekoratoren basierender und typreicher JSON-(De-)Serialisierer, der nahezu jeden Datentyp verarbeiten kann
* [Rev-dep](https://github.com/jayu/rev-dep) – Verfolgt Imports, erkennt zirkuläre Abhängigkeiten, findet ungenutzten Code und bereinigt Node-Module – alles über ein blitzschnelles CLI.

## Typen
* [jsonup](https://github.com/tani/jsonup) – JSON-Parser zur Kompilierzeit
* [type-o-rama](https://github.com/stereobooster/type-o-rama) – Interoperabilität von JS-Typsystemen
* [utility-types](https://github.com/piotrwitek/utility-types) – Hilfstypen für TypeScript (kompatibel mit den Hilfstypen von Flow)
* [elm-ts](https://github.com/gcanti/elm-ts) – Übertragung der Elm-Architektur auf TypeScript mit fp-ts, io-ts, rxjs5 und React
* [ts-essentials](https://github.com/krzkaczor/ts-essentials) – Alle wichtigen TypeScript-Typen an einem Ort
* [typescript-conditional-types](https://github.com/LeDDGroup/typescript-conditional-types) – Hilfsfunktionen für generische TypeScript-Typen
* [ts-types-utils](https://github.com/LeDDGroup/ts-types-utils) – Typwerkzeuge für TypeScript
* [typesync](https://github.com/jeffijoe/typesync) – Installiert fehlende TypeScript-Typdefinitionen für Abhängigkeiten in deiner package.json.
* [type-fest](https://github.com/sindresorhus/type-fest) – Eine Sammlung grundlegender TypeScript-Typen
* [typetype](https://github.com/mistlog/typetype) – Eine Programmiersprache zur Erzeugung von TypeScript-Typen
* [nominal](https://github.com/Coder-Spirit/nominal) – Nominale und abhängige Typen für TypeScript.
* [@tool-belt/type-predicates](https://github.com/tool-belt/type-predicates) – Typprädikate, Assertionsfunktionen und Hilfsfunktionen.
* [getmytypes](https://github.com/halchester/getmytypes) – Installiert @types-Dateien in deinen Entwicklungsabhängigkeiten.
* [ts-toolbelt](https://github.com/millsp/ts-toolbelt) – Umfangreiche Sammlung von Typwerkzeugen für TypeScript
* [string-ts](https://github.com/gustavoguichard/string-ts) – Typsichere Zeichenkettenfunktionen für alle
* [lib-result](https://github.com/AhmedOsman101/lib-result) – Ein leichtgewichtiger, von Rust inspirierter `Result`-Typ zur typsicheren Fehlerbehandlung in TypeScript und JavaScript.
* [iso-locale](https://github.com/reacture-io/iso-locale) – Eine umfassende TypeScript-Bibliothek mit ISO-Standards für den Umgang mit Ländern, Sprachen, Dialekten und Währungen.

## CSS-in-JS mit Typen
* [PandaCSS](https://panda-css.com/) – CSS-in-JS mit beim Build erzeugten Styles, RSC-Kompatibilität, Unterstützung mehrerer Varianten und erstklassiger Developer Experience
* [Vanilla-Extract](https://vanilla-extract.style/) – Verwende TypeScript als Präprozessor. Schreibe typsichere, lokal begrenzte Klassen, Variablen und Themes und erzeuge beim Build statische CSS-Dateien.
* [StyleX](https://stylexjs.com/) – StyleX ist eine JavaScript-Bibliothek zum Definieren von Styles für optimierte Benutzeroberflächen

### Laufzeit
* [json-decoder](https://github.com/venil7/json-decoder) – Typsicherer JSON-Decoder und Laufzeitprüfer
* [typescript-is](https://github.com/woutervh-/typescript-is) – Ein TypeScript-Transformer, der Typprüfungen zur Laufzeit erzeugt.
* [type-plus](https://github.com/unional/type-plus) – Zusätzliche Typen und an Typen angepasste Hilfsfunktionen
* [Agent Framework](https://github.com/agentframework/agentframework) Erstellt mithilfe von Dekoratoren Interceptors für Klassen und Methoden
* [SunTori](https://github.com/LancerComet/SunTori) – Ein JSON- (De-)Serialisierer, der die Sicherheit sämtlicher Daten zur Laufzeit gewährleistet.
* [config](https://github.com/mrspartak/config) – Resolver für Laufzeitkonfigurationen

## Validierung
* [@core/match](https://github.com/tani/ts-match) – Typsichere Destrukturierungszuweisung mit Musterabgleich und Validierung
* [io-ts](https://github.com/gcanti/io-ts) – Laufzeit-Typsystem zur IO-Dekodierung und -Kodierung
* [zod](https://github.com/vriad/zod) – Schema-Validierung mit statischer Typinferenz, speziell für TypeScript
* [valibot](https://github.com/fabian-hiller/valibot) – Valibot ist eine TypeScript-Schema-Bibliothek mit statischer Typinferenz. Im Vergleich zu Zod ist sie außergewöhnlich leichtgewichtig und kommt ohne Abhängigkeiten aus.
* [runtypes](https://github.com/pelotom/runtypes) – Laufzeitvalidierung für statische Typen
* [ts-codec](https://github.com/julienvincent/ts-codec) – TypeScript-Codecs zum Kodieren, Dekodieren und Validieren von Daten
* [ow](https://github.com/sindresorhus/ow) – Funktionsargumente validieren – einfach gemacht
* [superstruct](https://github.com/ianstormtaylor/superstruct) – Eine einfache und kombinierbare Möglichkeit, Daten zu validieren
* [computed-types](https://github.com/neuledge/computed-types) – 🦩 Joi-ähnliche Validierungen für TypeScript
* [json-schema-to-ts](https://github.com/thomasaribart/json-schema-to-ts) – Dynamische Typinferenz aus JSON-Schemas
* [Yunomix](https://github.com/LancerComet/MyWebLibs/tree/master/Yunomix) – Ein Toolkit zur Formularvalidierung im AOP-Stil.
* [typia](https://github.com/samchon/typia) – Ein bis zu 20.000-mal schnellerer Laufzeitvalidator, der reine TypeScript-Typen verwendet. Es genügt eine einzige Zeile wie `typia.assert<T>(input)`. Unterstützt außerdem eine bis zu 200-mal schnellere JSON-Serialisierung sowie Protocol-Buffer-Funktionen. 🚀 (siehe auch https://typia.io/docs)
* [fta](https://github.com/sgb-io/fta) – Rust-basierte statische Analyse zur Überwachung der Codequalität
* [dto-classes](https://github.com/rsinger86/dto-classes) – Entwicklerfreundliches Parsen, Validieren und Serialisieren. Statische Typen sind standardmäßig aktiviert. Für Feldschemata werden Properties statt Dekoratoren verwendet.
* [iso-locale](https://github.com/reacture-io/iso-locale) – Eine umfassende TypeScript-Bibliothek mit ISO-Standards für den Umgang mit Ländern, Sprachen, Dialekten und Währungen.
## Mit TypeScript entwickelt
### Mobil
* :octocat: [ReactNative](https://reactnative.dev/) – Entwickle mit React native Apps für Android, iOS und weitere Plattformen
* :octocat: [NativeScript](https://github.com/NativeScript/NativeScript) – Open-Source-Framework zur Entwicklung plattformübergreifender, nativer Mobil-Apps für iOS, Android und Windows mit JavaScript
* [Monaco Editor](https://microsoft.github.io/monaco-editor/)

### Web
* :octocat: [Angular](https://github.com/angular/angular) – Entwicklungsplattform zum Erstellen mobiler und Desktop-Webanwendungen
* :octocat: [It-Tools](https://it-tools.tech/) – Sammlung praktischer Online-Werkzeuge für Entwickler mit hervorragender UX
* :octocat: [Fedify](https://github.com/fedify-dev/fedify) – TypeScript-Framework zum Erstellen föderierter Serveranwendungen auf Basis von ActivityPub und dem Fediverse
* :octocat: [feednext.io](https://github.com/feednext/feednext) – Eine Open-Source-Social-Media-Anwendung, die sowohl client- als auch serverseitig mit TypeScript entwickelt wurde.
* :octocat: [ionic](https://github.com/ionic-team/ionic) – Ein Open-Source-Framework zur Entwicklung mobiler Apps in TypeScript
* :octocat: [React-UWP](https://github.com/myxvisual/react-uwp) – React-Komponenten zur Umsetzung von Microsofts UWP- und Fluent-Design.
* :octocat: [palantir/plottable](https://github.com/palantir/plottable) – Eine Bibliothek modularer Diagrammkomponenten auf Basis von `D3` (siehe auch: http://plottablejs.org)
* :octocat: [APIs-guru/graphql-voyager](https://github.com/APIs-guru/graphql-voyager) – Stellt jede GraphQL-API als interaktives Diagramm dar 🛰️
* :octocat: [Rebilly/ReDoc](https://github.com/Rebilly/Redoc) – Mit OpenAPI/Swagger generierte API-Referenzdokumentation
* :octocat: [excaliburjs/Excalibur](https://github.com/excaliburjs/Excalibur) – Kostenlose Open-Source-JavaScript-Game-Engine
* :octocat: [Bobril](https://github.com/Bobris/Bobril) – Komponentenorientiertes Framework, inspiriert von Mithril und ReactJs. (siehe auch: http://bobril.com/)
* :octocat: [Stencil](https://github.com/ionic-team/stencil) – Ein Werkzeug zum Erstellen moderner Web Components
* :octocat: [Langfuse](https://github.com/langfuse/langfuse) – Open-Source-Plattform für LLM-Entwicklung 🪢 – Tracing, Prompt-Verwaltung, Evaluationen und Analysen
* :octocat: [redux-zero](https://github.com/concretesolutions/redux-zero) – Ein leichtgewichtiger, auf Redux basierender State-Container
* :octocat: [wretch](https://github.com/elbywan/wretch) – Ein winziger (< 2,2 KB gzip-komprimiert) Wrapper um fetch mit intuitiver Syntax.
* :octocat: [Cycle.js](https://github.com/cyclejs/cyclejs) – Ein funktionales und reaktives JavaScript-Framework für vorhersagbaren Code.
* :octocat: [Tridactyl](https://github.com/tridactyl/tridactyl) – Ein Firefox-Add-on, das die Browsersteuerung durch ein Modell nach dem einzig wahren Editor Vim ersetzt.
* :octocat: [armour/vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) – Eine minimale Admin-Vorlage mit vue-cli 3.0 und TypeScript sowie eine produktionsreife Frontend-Lösung für Administrationsoberflächen ([Demo](https://armour.github.io/vue-typescript-admin-template/#/dashboard))
* :octocat: [n8n.io](https://github.com/n8n-io/n8n) – Open-Source-Werkzeug zur Workflow-Automatisierung
* :octocat: [Dnote](https://github.com/dnote/dnote) – Ein Notizbuch für die Kommandozeile mit Synchronisierung über mehrere Geräte und einer Weboberfläche.
* :octocat: [Thin Backend](https://github.com/digitallyinduced/thin-backend) – Echtzeit-Backend für deine Single-Page-Apps mit durchgängiger Typsicherheit dank aus dem Postgres-Schema abgeleiteter Typen
* :octocat: [Flowbite](https://github.com/themesberg/flowbite) – Open-Source-Komponentenbibliothek auf Basis von Tailwind CSS mit interaktiven, in TypeScript entwickelten UI-Komponenten
* :octocat: [ILLA Cloud](https://www.illacloud.com/) – Open-Source-Low-Code-Plattform als Alternative zu Retool und Appsmith, mit der Entwickler in wenigen Minuten interne Werkzeuge erstellen können.
* :octocat: [Treehouse](https://github.com/treehousedev/treehouse) – Eine leichtgewichtige Open-Source-Bibliothek zum Erstellen eines eigenen Notizwerkzeugs.
* :octocat: [GOUI](https://github.com/intermesh/goui) – Open-Source-Benutzeroberflächenbibliothek mit zahlreichen Komponenten zum Erstellen von Webanwendungen
* :octocat: [InDom](https://github.com/constcallid/indom) – Eine moderne, frameworkunabhängige DOM-Bibliothek mit automatischer Bereinigung, TypeScript-Quellcode und Typdefinitionen, kleiner als 4 KB.
* :octocat: [Bubble Lab](https://github.com/bubblelabai/BubbleLab) – Open-Source-Plattform zur Workflow-Automatisierung, nativ in TypeScript, mit KI-gestützter Generierung, vollständiger Beobachtbarkeit und exportierbarem Code.

### Web/ReactJS
* :octocat: [facebook/create-react-app](https://facebook.github.io/create-react-app/docs/adding-typescript) Erstellt React-Apps mit TypeScript ohne Build-Konfiguration
* :octocat: [Microsoft/TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter) Eine Startervorlage für TypeScript und React mit ausführlicher README zur gemeinsamen Verwendung; basiert auf `create-react-app`
* :scroll: [typescript-cheatsheets/react-typescript-cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) Spickzettel für erfahrene React-Entwickler, die mit TypeScript beginnen
* :octocat: [jsxtyper](https://github.com/fuselabs/jsxtyper) Erzeugt TypeScript-Schnittstellen aus .jsx-Dateien
* :octocat: [TodoMVC • TypeScript + React Example](https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react)
* :octocat: [Veritas Kanban](https://github.com/BradGroux/veritas-kanban) – Selbst gehostetes Kanban-Board mit KI-Agent-Integration, erstellt mit React 19, TypeScript im Strict-Modus, Vite 6 und 1.255 Tests.
* :scroll: [Working with React and TypeScript](http://blog.wolksoftware.com/working-with-react-and-typescript)
* :guardsman: [**vortigern** – Ein universelles Grundgerüst zum Erstellen von Webanwendungen mit TypeScript, React, Redux und mehr.](https://github.com/barbar/vortigern)
* :robot: [React-Code automatisch in TypeScript umwandeln](https://github.com/lyft/react-javascript-to-typescript-transform)
* :octocat: [React Server Example TSX](https://github.com/styfle/react-server-example-tsx) Grundgerüst für eine isomorphe Web-App mit serverseitigem React-Rendering in TypeScript
* :octocat: [React & Redux in TypeScript - Static Typing Guide](https://github.com/piotrwitek/react-redux-typescript-guide) Der vollständige Leitfaden zur statischen Typisierung von „React & Redux“ mit TypeScript
* :octocat: [Typescript Monorepo CRA Example](https://github.com/deptno/typescript-monorepo-cra-example) – Ein minimalistisches Monorepo mit CRA und TypeScript.
* :octocat: [Typescript Monorepo Next Example](https://github.com/deptno/typescript-monorepo-next-example) – Ein minimalistisches Monorepo mit Next.js und TypeScript.
* :stars: [Crisp React](https://github.com/winwiz1/crisp-react) Grundgerüst mit React-Client und Express-Backend. Bietet hohe Leistung und erweiterte Funktionen und hilft, häufige Probleme bei React und Express zu vermeiden.
* :book: [React by Example](https://reactbyexample.github.io/) Codeorientiertes React-Tutorial für Programmierer
* :octocat: [Materio Free MUI React NextJS Typescript Admin Template](https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free) – Eine besonders leistungsstarke und umfassende kostenlose MUI-React-NextJS-Admin-Dashboard-Vorlage für Entwickler. Erstellt mit TypeScript und JavaScript.
* :octocat: [Flowbite React](https://github.com/themesberg/flowbite-react) – Open-Source-Komponentenbibliothek auf Basis von React, TypeScript und Tailwind CSS
* :octocat: [react-feedback-surveys](https://github.com/feedback-tools-platform/react-feedback-surveys) – Leichtgewichtige, abhängigkeitenfreie Umfrage-Widgets zum Erfassen von Nutzerfeedback (NPS, CSAT, CES) in React-Apps mit umfassender TypeScript-Unterstützung

### Plattformtechnik & DevOps
* :octocat: [CDK8s](https://cdk8s.io/) – Definiere Kubernetes-Anwendungen und wiederverwendbare Abstraktionen mit TypeScript
* :octocat: [AWS CDK](https://github.com/aws/aws-cdk) – Cloud Development Kit zum Definieren von Cloud-Infrastruktur in TypeScript
* :octocat: [Pulumi](https://github.com/pulumi/pulumi) – Infrastructure as Code mit TypeScript, JavaScript, Python, Go und .NET
* :octocat: [Backstage](https://github.com/backstage/backstage) – Plattform zum Erstellen von Entwicklerportalen, geschrieben in TypeScript

### Backend-API
* :octocat: [Actio](https://github.com/crufters/actio/) – Das Node.js-Framework für Monolithen und Microservices.
* :octocat: [design-first](https://adam-hanna.github.io/design-first-docs/) – Eine REST-API-Vorlagen-Engine für TypeScript
* :octocat: [Fastify](https://github.com/fastify/fastify) – Schnelles Web-Framework mit geringem Overhead für Node.js
* :octocat: [Hono](https://hono.dev/) – Hono ist ein kleines, einfaches und ultraschnelles Web-Framework für Edge-Umgebungen. Es läuft auf jeder JavaScript-Laufzeitumgebung.
* :octocat: [Nest](https://github.com/nestjs/nest) – Ein fortschrittliches Node.js-Framework zum Erstellen effizienter, skalierbarer und unternehmenstauglicher serverseitiger Anwendungen auf TypeScript-Basis 🚀 (siehe auch: https://nestjs.com/)
  * :octocat: [nestia](https://github.com/samchon/nestia) – Mit `typia` bis zu 20.000-mal schnellere Validierung und 200-mal schnellere JSON-Serialisierung durch Dekoratoren. Ermöglicht die direkte Nutzung reiner TypeScript-Schnittstellentypen als DTOs und steigert die Gesamtleistung des Servers um etwa das 30-Fache. Unterstützt außerdem die Generierung von SDKs (Sammlung von `fetch`-Funktionen mit Typdefinitionen) und Mockup-Simulatoren (im SDK eingebetteter Backend-Serversimulator); NestJS-Projekte lassen sich sogar allein mit einer `swagger.json`-Datei migrieren. 🚀 (siehe auch: https://nestia.io/docs)
* :octocat: [LoopBack 4](https://github.com/strongloop/loopback-next) – Ein hochgradig erweiterbares Node.js- und TypeScript-Framework zum Erstellen von APIs und Microservices. :rocket: (siehe auch: https://loopback.io/)
* :octocat: [FoalTS](https://github.com/FoalTS/foal) – Ein einfaches, intuitives und vollständiges Framework zum Erstellen unternehmenstauglicher Node.JS-Anwendungen :boom: :rocket: (siehe auch: https://foalts.org)
* :octocat: [Enso](http://ensojs.netlify.com) – Ein auf TypeScript ausgerichtetes Node.JS-Framework, inspiriert von den Prinzipien des Domain-Driven Design und mit Fokus auf Komposition und Developer Experience
* :octocat: [Libstack](https://libstack.io) – Eine Sammlung verschiedener Module, mit denen sich einfach TypeScript-Server erstellen und für Docker bereitstellen lassen.
* :octocat: [tinyhttp](https://github.com/talentlessguy/tinyhttp) – Ein modernes Express-ähnliches Web-Framework für Node.js, geschrieben in TypeScript und zu nativem ESM kompiliert.
* :octocat: [ZenTS](https://github.com/sahachide/ZenTS) – Ein modernes, auf Node.js und TypeScript ausgerichtetes Framework zum Erstellen umfangreicher Webanwendungen
* :octocat: [Booster Framework](https://github.com/boostercloud/booster) – Ein ereignisgesteuertes, cloudnatives Open-Source-GraphQL-Framework aus dem Booster-Cloud-Ökosystem. Es nutzt hochrangige Abstraktionen und Konventionen. (siehe auch: https://booster.cloud)

### KI

* :octocat: [MastraAI](https://github.com/mastra-ai/mastra) – Mastra ist ein meinungsstarkes TypeScript-Framework, mit dem sich KI-Anwendungen und -Funktionen schnell erstellen lassen.
* :octocat: [VoltAgent](https://github.com/voltagent/voltagent) – Ein TypeScript-Framework zum Entwickeln und Ausführen von KI-Agenten mit Werkzeugen, Speicher und Beobachtbarkeit.
* :octocat: [Tambo](https://github.com/tambo-ai/tambo) – React-SDK zum Erstellen generativer Benutzeroberflächen mit MCP-Unterstützung.
* :octocat: [Maxim AI](https://github.com/maximhq/maxim-js) – JS-/TS-SDK zur Aktivierung der Beobachtbarkeit von Maxim. Maxim ist eine unternehmenstaugliche Evaluierungs- und Beobachtungsplattform. (siehe auch: https://getmaxim.ai)
* :octocat: [rehydra](https://github.com/rehydra-ai/rehydra-sdk) – Ein Zero-Trust-SDK, das personenbezogene Daten lokal anonymisiert, bevor Prompts an LLMs gesendet werden, und die Antwort nahtlos wiederherstellt.

### Eigenständige Anwendungen
* :octocat: [Visual Studio Code](https://github.com/Microsoft/vscode) – Plattformübergreifende IDE.
* :octocat: [alm](https://github.com/alm-tools/alm) – Eine IDE der nächsten Generation ausschließlich für TypeScript, geschrieben in TypeScript und React
* :octocat: [App Outlet](https://github.com/app-outlet/app-outlet) – Ein universeller Linux-App-Store für AppImages, Flatpaks und Snaps, geschrieben in TypeScript und Angular
* :octocat: [SnowFS](https://github.com/snowtrack/snowfs) – Ein schneller, skalierbarer Versionsverwaltungs-Dateispeicher für Grafikdateien
* :octocat: [MemFree](https://github.com/memfreeme/memfree) – Hybride Open-Source-KI-Suchmaschine für sofortige, präzise Antworten aus dem Internet, Lesezeichen, Notizen und Dokumenten. Unterstützt die Bereitstellung mit einem Klick.
* :octocat: [Nostream](https://github.com/cameri/nostream) – Ein in TypeScript geschriebener Nostr-Relay
* :octocat: [Peekaping](https://github.com/0xfurai/peekaping) – Lösung zur Verfügbarkeitsüberwachung: überwacht Websites, APIs und Dienste mit Echtzeitbenachrichtigungen, ansprechenden Statusseiten und umfassenden Analysen

##### Chrome-Erweiterungen
* [OctoLinker](https://github.com/OctoLinker/browser-extension)
* [lc-mate](https://github.com/cglotr/lc-mate) – Eine Erweiterung, die Nutzernamen in LC um die Wettbewerbswertung ergänzt

### Entwurfsmuster
* :octocat: [Design Patterns implementation](https://github.com/torokmark/design_patterns_in_typescript) – Implementierung der bekannten 23 GoF-Muster
* :octocat: [Real World Design Patterns](https://github.com/vahidvdn/realworld-design-patterns) – Entwurfsmuster aus der Praxis mit Tests

### Dekoratoren
- :octocat: [Performance Decorators](https://github.com/RyanMyrvold/Performance-Decorators) – Eine Sammlung von TypeScript-Dekoratoren zur Leistungsoptimierung, darunter Protokollierung der Ausführungszeit, Überwachung des Speicherverbrauchs und mehr.

### Bibliotheken
* :octocat: [SuperJSON](https://github.com/blitz-js/superjson) – Serialisiert JavaScript-Ausdrücke sicher in eine JSON-Erweiterung, die Datumswerte, BigInts und mehr umfasst
* :octocat: [Procedurem](https://github.com/ImVexed/Procedurem) – Eine kleine (2 KB) und leistungsfähige bidirektionale RPC-Bibliothek auf WebSocket-Basis.
* :octocat: [RxJS](https://github.com/ReactiveX/RxJS) – Eine Bibliothek für reaktive Programmierung mit JavaScript.
* :octocat: [xstream](https://github.com/staltz/xstream) – Eine äußerst intuitive, kleine und schnelle Bibliothek für funktionale reaktive Datenströme in JavaScript.
* :octocat: [mockt](https://github.com/nbottarini/mockt) – Eine unterhaltsame Mocking-Bibliothek für TypeScript und JavaScript
* :octocat: [substitute.js](https://github.com/ffMathy/FluffySpoon.JavaScript.Testing) – Eine fluide Mocking-Bibliothek für TypeScript, portiert von NSubstitute.
* :octocat: [TypeMoq](https://github.com/florinn/typemoq) – Eine einfache Mocking-Bibliothek für TypeScript.
* :octocat: [fast-check](https://github.com/dubzzz/fast-check) – Ein Property-based-Testing-Framework für TypeScript.
* :octocat: [Suites](https://github.com/suites-dev/suites) – Unit-Test-Framework für TypeScript-Backends mit Inversion of Control (IoC) und Dependency-Injection-Frameworks.
* :octocat: [InversifyJS](https://github.com/inversify/InversifyJS/) – Ein leistungsstarker und leichtgewichtiger Inversion-of-Control-Container für JavaScript- und Node.js-Apps, ermöglicht durch TypeScript.
* :octocat: [TypeORM](https://github.com/typeorm/typeorm) – ORM für TypeScript und JavaScript (ES7, ES6, ES5). Unterstützt MySQL-, PostgreSQL-, MariaDB-, SQLite-, MS-SQL-Server-, Oracle- und WebSQL-Datenbanken. Funktioniert mit NodeJS, im Browser sowie auf Ionic-, Cordova- und Electron-Plattformen.
  * :octocat: [Safe-TypeORM](https://github.com/samchon/safe-typeorm) – Erweitert `TypeORM` auf Kompilierungsebene und unterstützt automatisierte Werkzeuge zur Leistungsoptimierung durch Joins auf Anwendungsebene. Außerdem werden rohe SQL-Abfragen mithilfe von Typ-Metaprogrammierung abgesichert.
* :octocat: [MikroORM](https://github.com/mikro-orm/mikro-orm) – TypeScript-ORM für Node.js auf Basis der Data-Mapper-, Unit-of-Work- und Identity-Map-Muster. Unterstützt MongoDB, PostgreSQL, MySQL und SQLite.
* :octocat: [DrizzleORM](https://orm.drizzle.team/) – Leichtgewichtiges TypeScript-ORM und SQL-ähnliche Bibliothek für flexiblen Datenzugriff, serverless-tauglich und ohne Abhängigkeiten.
* :octocat: [Prisma](https://github.com/prisma/prisma) – Moderner Datenbankzugriff (ORM-Alternative) für Node.js und TypeScript | PostgreSQL, MySQL und SQLite
  * :octocat: [prisma-markdown](https://github.com/samchon/prisma-markdown): Erzeugt Markdown-Dokumente mit ERD-Diagrammen und den dazugehörigen Beschreibungen.
* :octocat: [Corgi](https://github.com/cardog-ai/corgi) – TypeScript-VIN-Decoder mit optimierter SQLite-Datenbank. Vollständig offline, Dekodierung in <1 ms und kompletter NHTSA-Datensatz in 21 MB.
* :octocat: [Neuledge](https://github.com/neuledge/engine-js) – Neuledge ist eine universelle Sprache für Datenbanken mit hochmodernen Werkzeugen zur Datenmodellierung, Darstellung der Geschäftslogik und Schema-Validierung.
* :octocat: [Typetta](https://github.com/twinlogix/typetta) – TypeScript-ORM für Node.js, das GraphQL als Schemasprache verwendet | Unterstützt alle wichtigen SQL-Datenbanken und MongoDB.
* :octocat: [TypeGQL](https://github.com/prismake/typegql) – Werkzeugsammlung zum direkten Erstellen von GraphQL-Schemas aus typisierten TypeScript-Klassen.
* :octocat: [TSTL](https://github.com/samchon/tstl) – Implementierung der C++-STL (Standard Template Library) in TypeScript. Die bereitgestellten Module umfassen Container, Iteratoren, Algorithmen und Funktoren.
  * :octocat: [ECol](https://github.com/samchon/ecol) – Erweiterung der TSTL-Container; Sammlungen lösen E/A-Ereignisse für Elemente aus.
  * :octocat: [TGrid](https://github.com/samchon/tgrid) – Grid-Computing-Framework und Netzwerk- sowie Thread-Erweiterung für TSTL mit Unterstützung für RFC (Remote Function Call).
  * :octocat: [Mutex-Server](https://github.com/samchon/mutex-server) – Netzwerkbasierte Steuerung kritischer Abschnitte, etwa mit Mutexen und Semaphoren.
* :octocat: [Kalimdor.js](https://github.com/JasonShin/kalimdorjs) – Machine-Learning-Bibliothek für Web, Node und Entwickler!
* :octocat: [prelude.ts](https://github.com/emmanueltouzery/prelude.ts) – Funktionale Programmierung: unveränderliche persistente Sammlungen, Konstrukte wie Option und Either sowie Kombinatoren.
* :octocat: [ee-ts](https://github.com/aleclarson/ee-ts) – Typisierte Event-Emitter
* :octocat: [io-ts](https://github.com/gcanti/io-ts) – Typvalidierung zur Laufzeit
* :octocat: [mokia](https://github.com/varHarrie/mokia) – Mock-Server mit integrierter Datensimulation und HTTP-Dienst.
* :octocat: [sub-events](https://github.com/vitaly-t/sub-events) – Streng typisierte Ereignisse.
* :octocat: [ts-audio](https://github.com/EvandroLG/ts-audio) – Eine herstellerunabhängige, einfach zu verwendende Bibliothek für die `AudioContext`-API
* :octocat: [tslog](https://github.com/fullstack-build/tslog) – Leistungsstarke Logging-Bibliothek mit nativer TypeScript-Unterstützung: übersichtliche Interpolation, nativer V8-Stacktrace, Geheimnis-Maskierung und Unterstützung für requestIds auf Basis von AsyncLocalStorage
* :octocat: [tsParticles](https://github.com/matteobruni/tsparticles) – Eine leichtgewichtige Bibliothek zum einfachen Erstellen von Partikelanimationen für Websites (unterstützt auch ReactJS, VueJS, Angular, Svelte und weitere)
* :octocat: [statek](https://github.com/pie6k/statek) – Reaktive Bibliothek zur Zustandsverwaltung
* :octocat: [Injex](https://www.injex.dev/) – Einfaches, dekoratorbasiertes und erweiterbares Dependency-Injection-Framework für TypeScript-Anwendungen
* :octocat: [tRPC](https://www.trpc.io/) – TypeScript-Werkzeugsammlung zum Erstellen durchgehend typsicherer APIs
* :octocat: [vard](https://github.com/andersmyrmel/vard) – Musterbasierte Erkennung von Prompt-Injection für TypeScript. Validierung in <0,5 ms mit einer von Zod inspirierten API für LLM-Anwendungen.
* :octocat: [interface-forge](https://www.npmjs.com/package/interface-forge) – Testdatenfabriken auf Basis von TypeScript-Typen und -Schnittstellen
* :octocat: [iter-ops](https://github.com/vitaly-t/iter-ops) – Operationen mit iterierbaren Objekten
* :octocat: [Remult](https://github.com/remult/remult) – Durchgehend typsicheres CRUD und gemeinsame Nutzung von Frontend- und Backend-Modellen in Full-Stack-TypeScript-Anwendungen.
* :octocat: [Jest](https://github.com/facebook/jest) – Eine umfassende JavaScript-Testlösung. Funktioniert bei den meisten JavaScript-Projekten ohne weitere Einrichtung.
* :octocat: [diod](https://github.com/artberri/diod) – Ein sehr meinungsstarker und leichtgewichtiger Inversion-of-Control-Container und Dependency Injector für Node.js- oder Browser-Apps.
* :octocat: [@deliberative/crypto](https://github.com/deliberative/crypto) – Eine TypeScript-/WebAssembly-Bibliothek für Public-Key-Kryptografie, AEAD-Geheimniscontainer, Shamir Secret Sharing und zufälliges Mischen. Läuft unter Node.js, ESM, CommonJS und im Browser.
* :octocat: [castore](https://github.com/castore-dev/castore) – TypeScript-Bibliothek zur einfachen Implementierung von Event Sourcing in deiner Anwendung
* :octocat: [sweet-monads](https://github.com/JSMonk/sweet-monads) – TypeScript-Bibliothek für verbreitete Monaden (etwa `Maybe` oder `Either`) und leistungsfähige Iteratoren.
* :octocat: [simple-mask-money](https://github.com/codermarcos/simple-mask-money) – 💰 Simple mask money ist ein leichtgewichtiges, sicheres und typisiertes Paket zur Formatierung von Geldbeträgen!
* :octocat: [Color-Core](https://github.com/iamlite/color-core) – `color-core` ist eine leistungsstarke, typsichere Bibliothek zur Farbbearbeitung für TypeScript- und JavaScript-Anwendungen. Sie bietet ein umfassendes Werkzeugset für Farben in verschiedenen Farbräumen und ist damit unverzichtbar für Projekte mit anspruchsvoller Farbverarbeitung.
* :octocat: [PigmentTS](https://github.com/Jay-Karia/pigment-ts) – Ein leichtgewichtiges Werkzeug zur Farbbearbeitung und -konvertierung.
* :octocat: [file-graph](https://github.com/DIY0R/file-graph) – Bibliothek zum Speichern von Graphen in Dateien und zum Ausführen von Abfragen darauf.
* :octocat: [@diy0r/nestjs-rabbitmq](https://github.com/DIY0R/nestjs-rabbitmq) – Bibliothek zum Erstellen von NestJS-Microservices mit RabbitMQ.
* :octocat: [Onion.JS](https://github.com/ThomasAribart/onion.js) – Entwirf und wende Wrapper (also höherwertige Funktionen) an, ohne Typen zu beschädigen! Basiert auf den höherwertigen Typen von [HotScript](https://github.com/gvergnaud/hotscript).
* :octocat: [text-smart-trimmer](https://github.com/vaidehimani/text-smart-trimmer) – Ein leichtgewichtiges TypeScript-Werkzeug zum Kürzen von Text mit der Wahl, Wortgrenzen, Satzzeichen und benutzerdefinierte Endungen beizubehalten.
* :octocat: [nano-string-utils](https://github.com/Zheruel/nano-string-utils) – Ultraleichte Zeichenketten-Hilfsfunktionen ohne Abhängigkeiten. Tree-shakable, vollständig typisiert und für modernes JavaScript optimiert.
* :octocat: [safe-fetch](https://github.com/asouei/safe-fetch) – fetch-Wrapper ohne Abhängigkeiten mit sicheren Ergebnissen, zwei Timeouts, intelligenten Wiederholungsversuchen und vereinheitlichten TypeScript-Fehlern.
* :octocat: [stunk](https://github.com/I-am-abdulazeez/stunk) – Leichtgewichtige, frameworkunabhängige Bibliothek zur Zustandsverwaltung mit atomaren Einheiten für feingranulare Reaktivität, einfach und für beliebige TypeScript-Anwendungen geeignet.
* :octocat: [blastore](https://github.com/sergey-shablenko/blastore) – Minimalistischer, leistungsstarker Speicher-Wrapper für localStorage, AsyncStorage, Arbeitsspeicher oder beliebige synchrone/asynchrone Backends – mit vollständiger TypeScript-Typsicherheit.
* :octocat: [FilterQL](https://github.com/adamhl8/filterql) – Eine winzige Abfragesprache zum Filtern strukturierter Daten
* :octocat: [ffetch](https://github.com/fetch-kit/ffetch) – TypeScript-orientierter `fetch`-Wrapper mit Wiederholungsversuchen, Timeouts, Circuit Breaker und Lifecycle-Hooks. Ohne Laufzeitabhängigkeiten, funktioniert überall dort, wo `fetch` verfügbar ist
* :octocat: [iterflow](https://github.com/gv-sh/iterflow) – Leistungsstarke Iterator-Hilfsfunktionen mit statistischen Operationen, Fensterfunktionen und verzögerter Auswertung
* :octocat: [Nano Queries](https://github.com/vitonsky/nano-queries) – Datenbankunabhängiger Abfragegenerator mit kombinierbaren, verschachtelbaren und veränderbaren Abfragen. Im Produktivbetrieb mit Postgres, SQLite, PGLite, DuckDB und weiteren Datenbanken im Einsatz.

# Große Sprachmodelle (LLM)
* [duckduckgo-ai-chat](https://github.com/mumu-lhl/duckduckgo-ai-chat) – Stellt eine DuckDuckGo-AI-Chat-API bereit, über die gpt-4o-mini kostenlos genutzt werden kann.
* [Neurolink](https://github.com/juspay/neurolink) – Universelle KI-Entwicklungsplattform, die mehr als zwölf KI-Anbieter (OpenAI, Anthropic, Google, Bedrock, Azure) mit MCP-Unterstützung, Failover zwischen mehreren Anbietern und produktionsreifen Unternehmensfunktionen vereint. TypeScript-SDK und CLI.
* [rehydra](https://github.com/rehydra-ai/rehydra-sdk) – Ein Zero-Trust-SDK, das personenbezogene Daten lokal anonymisiert, bevor Prompts an LLMs gesendet werden, und die Antwort nahtlos wiederherstellt.

# Videokurse
## :free: Kostenlose Kurse
* [Angular Applications with TypeScript](https://mva.microsoft.com/en-US/training-courses/angular-applications-with-typescript-14330) (Microsoft Virtual Academy)
* [AngularJS with TypeScript made easy](https://www.youtube.com/watch?v=OZxnFB0yQHs) (SSW TV)
* [Full Stack React GraphQL TypeScript Tutorial - 14 hour course](https://www.youtube.com/watch?v=I6ypD7qv3Z8) (YouTube)
* [Evolving JavaScript with TypeScript](https://www.youtube.com/watch?v=Ut694dsIa8w) Eine ausführliche Einführung in TypeScript
* [Why program in TypeScript?](https://www.youtube.com/watch?v=1TW9SdHIiXI) Ein Überblick über die wichtigsten Syntaxelemente mit Fokus auf die Vorteile von TypeScript gegenüber JavaScript
* [Functional Programming with TypeScript](https://www.youtube.com/playlist?list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo) – Entdecke funktionale Programmierung mit TypeScript und entwickle gemeinsam mit Sahand Javid in dieser einsteigerfreundlichen YouTube-Playlist eine Bibliothek wie fp-ts.
* [Building CRM from scratch with Typescript and Bun](https://www.youtube.com/watch?v=l4QjeBEkNLc) – Entwickle von Grund auf ein praxisnahes CRM-System ohne große Frameworks – mit Bun, TypeScript und Tailwind.

## :dollar: Kostenpflichtige Kurse
* [TypeScript Fundamentals](https://www.pluralsight.com/courses/typescript) (Pluralsight)
* [Practical TypeScript Migration](https://www.pluralsight.com/courses/typescript-practical-migration) (Pluralsight)
* [Angular with TypeScript](http://www.pluralsight.com/courses/angular-typescript) (Pluralsight)
* [Using TypeScript for Large AngularJS Applications](https://www.pluralsight.com/courses/using-typescript-large-angularjs-apps) (Pluralsight)
* [Introduction to TypeScript](https://www.packtpub.com/application-development/introduction-typescript-video) (Packt)
* [Mastering TypeScript](https://www.packtpub.com/web-development/mastering-typescript-video) (Packt)
* [TypeScript: The Complete Developer's Guide](https://www.udemy.com/typescript-the-complete-developers-guide/) (Udemy)
* [Angular with TypeScript](https://www.manning.com/livevideo/angular-for-java-developers-typescript/) (Manning)
* [Mastering TypeScript - 2022 Edition](https://www.udemy.com/course/learn-typescript/) (Udemy)

# Anleitungen

* [Converting your vanilla JavaScript app to TypeScript](https://www.useanvil.com/blog/engineering/converting-vanilla-javascript-to-typescript)
* [Difference Between TypeScript and JavaScript](https://www.scaler.com/topics/typescript-vs-javascript/)

# Fahrplan

* [TypeScript Roadmap](https://roadmap.sh/typescript)
* [TypeScript Origins: The Documentary - YouTube](https://www.youtube.com/watch?v=U6s2pdxebSo) von OfferZen Origins
  > In der Dokumentation kommen wichtige Mitwirkende und Community-Mitglieder wie Anders Hejlsberg, Steve Lucco, Luke Hoban, Daniel Rosenwasser, Ryan Cavanaugh, Amanda Silver, Matt Pocock, Josh Goldberg und viele weitere zu Wort!

### Abzeichen
* [TypeScript Badges](https://github.com/ellerbrock/typescript-badges/)
[![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/awesome/typescript125x28.png)](https://github.com/ellerbrock/typescript-badges/) [![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/code/typescript-125x28.png)](https://github.com/ellerbrock/typescript-badges/) [![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/love/typescript-125x28.png)](https://github.com/ellerbrock/typescript-badges/)

### Soziale Netzwerke
 * [@typescriptlang](https://twitter.com/typescriptlang) – Offizieller TypeScript-Twitter-Account
 * [@angularjs](https://twitter.com/angularjs) – Offizieller AngularJS-Twitter-Account; verwendet TypeScript seit Version 2.0
 * [@jntrnr](https://twitter.com/jntrnr) – TypeScript-Programmmanager bei Microsoft
 * [@ahejlsberg](https://twitter.com/ahejlsberg) – Technical Fellow bei Microsoft und am TypeScript-Projekt beteiligt

### Danksagungen
> (hinzugefügt: 2023) Ein neuer Abschnitt, um den Mitwirkenden zu danken.

 - 2023 - ⚒ Danke an Hamza ( @Hamza12700 https://github.com/Hamza12700 ) für [mehr als 15 zusammengeführte Pull Requests](https://github.com/dzharii/awesome-typescript/pulls?q=is%3Apr+author%3AHamza12700+is%3Aclosed). Ein großartiger Beitrag dazu, diese Liste mit modernen TypeScript-Projekten aktuell zu halten. **Mitwirkender des Jahres 2023**.
