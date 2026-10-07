# Awesome Chrome DevTools [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Outils et ressources exceptionnels dans l'écosystème Chrome DevTools

Outils, pilotes de protocole, visualiseurs de traces et interfaces autonomes construits autour de Chrome DevTools et du Chrome DevTools Protocol (CDP). Conformément au [Awesome Manifesto](https://github.com/sindresorhus/awesome/blob/main/awesome.md), nous gardons cette liste axée sur ce qui est réellement utile plutôt que d'indexer tout ce qui existe dans le domaine.

## Sommaire

- [Apprentissage](#apprentissage)
- [Tracing et profilage](#tracing-et-profilage)
- [Chrome DevTools Protocol](#chrome-devtools-protocol)
- [Utiliser le frontend DevTools avec d'autres plateformes](#utiliser-le-frontend-devtools-avec-dautres-plateformes)
- [Extensions DevTools](#extensions-devtools)
- [Anciens projets](#anciens-projets)

---

## Apprentissage
- [Dev Tips](https://umaar.com/dev-tips/) - Grande collection d'astuces sous forme de gifs animés.
- [DevTools Tips](https://devtoolstips.org/) - Collection d'astuces illustrées sous forme de mini-tutoriels.
- [Web cheatcodes](https://codepo8.github.io/web-cheatcodes/) - Outils de développement navigateur pour les non-développeurs.
- [Dear Console](https://codepo8.github.io/dearconsole) - Une collection de snippets à utiliser dans la console du navigateur.
- [Chrome Secret Menus](https://github.com/sparkyrider/chrome-secret-menus) - Guide des pages internes `chrome://` de Chrome et des outils de diagnostic.
- [Front-end Debugging Tools Handbook](https://github.com/lala-hakobyan/front-end-debugging-handbook) - Guide pratique du débogage front-end à travers DevTools, les extensions de frameworks et les IDE.

---

## Tracing et profilage

Les traces DevTools Performance et les journaux V8 `.cpuprofile` sont en réalité de simples JSON, et quelques visualiseurs autonomes font des merveilles avec eux :

- [trace.cafe](https://trace.cafe/) - Partagez et visualisez des traces de performance web directement dans le panneau Performance de DevTools ([source](https://github.com/paulirish/trace.cafe)).
- [speedscope](https://github.com/jlfwong/speedscope) - Visualiseur de flamegraphs rapide et interactif qui importe les `.cpuprofile` et les traces chronologiques de Chrome.
- [cpupro](https://github.com/discoveryjs/cpupro) - Analyseur V8/Chrome `.cpuprofile` approfondi avec flamegraphs, arbres d'appels et diagnostics des points chauds.
- [Perfetto](https://github.com/google/perfetto) - Suite de profilage système et d'analyse de traces ([ui.perfetto.dev](https://ui.perfetto.dev/)) avec prise en charge des traces Chromium et interrogation SQL des traces.

---

## Chrome DevTools Protocol

Astuce pro : activez le [Protocol Monitor](https://developer.chrome.com/docs/devtools/protocol-monitor) intégré de Chrome (`More tools > Protocol monitor`) pour observer le trafic CDP en direct et envoyer des commandes brutes directement dans le navigateur.

- [ChromeDevTools/devtools-protocol](https://github.com/chromedevtools/devtools-protocol) - **Emplacement canonique du JSON du protocole**, des types TypeScript et le suivi des bogues du protocole.
- [DevTools Protocol API Docs](https://chromedevtools.github.io/devtools-protocol/) - Interface navigable pour explorer les domaines, méthodes et événements du protocole.

### Développer avec le protocole
- [chrome-remote-interface Wiki](https://github.com/cyrus-and/chrome-remote-interface/wiki) - Recettes pratiques pour les tâches CDP brutes courantes.
- [Chrome Protocol Proxy](https://github.com/wendigo/chrome-protocol-proxy) - Proxy pour inspecter et déboguer le trafic client CDP.

### Les deux grandes bibliothèques d'automatisation
- [Puppeteer](https://github.com/puppeteer/puppeteer) - API Node.js de haut niveau pour contrôler Chrome via CDP et WebDriver BiDi. Voir aussi [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer).
- [Playwright](https://github.com/microsoft/playwright) - Automatisation multi-navigateurs pour Chromium, Firefox et WebKit sur Node.js, Python, .NET et Java. Voir aussi [awesome-playwright](https://github.com/mxschmitt/awesome-playwright).

### Bibliothèques pour piloter le protocole (ou une couche au-dessus)

- JavaScript/Node.js : [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface) - Client CDP bas niveau
- Rust : [chromiumoxide](https://github.com/mattsse/chromiumoxide) - Bibliothèque async/tokio avec types générés
- Rust : [Rust Headless Chrome](https://github.com/rust-headless-chrome/rust-headless-chrome) - Client Chrome headless de haut niveau
- Java : [chrome-devtools-java-client](https://github.com/kklisura/chrome-devtools-java-client) - Client de protocole bas niveau
- Java : [jvppeteer](https://github.com/fanyong920/jvppeteer) - Chrome headless pour Java
- Python : [Zendriver](https://github.com/cdpdriver/zendriver) - Automatisation navigateur CDP asynchrone
- Python : [PyCDP](https://github.com/hyperiongray/python-chrome-devtools-protocol) - Wrappers sans E/S (voir aussi [Trio driver](https://github.com/hyperiongray/trio-chrome-devtools-protocol))
- Python : [ChromeController](https://github.com/fake-name/ChromeController) - Gestion de navigateur de haut niveau
- Go : [chromedp](https://github.com/chromedp/chromedp) - Actions et tâches de haut niveau
- Go : [Rod](https://github.com/go-rod/rod) - Automatisation et scraping de haut niveau
- Go : [cdp](https://github.com/mafredri/cdp) - Liaisons CDP sûres au niveau du type
- C#/.NET : [Puppeteer Sharp](https://github.com/hardkoded/puppeteer-sharp) - Portage de Puppeteer
- C#/.NET : [dotnet-chrome-protocol](https://github.com/seclerp/dotnet-chrome-protocol) - Bibliothèque d'exécution et génération de code de schéma
- Ruby : [Ferrum](https://github.com/rubycdp/ferrum) - API de haut niveau pour contrôler Chrome
- Ruby : [Cuprite](https://github.com/rubycdp/cuprite) - Pilote Capybara
- Kotlin : [chrome-devtools-kotlin](https://github.com/joffrey-bion/chrome-devtools-kotlin) - Bibliothèque cliente basée sur les coroutines
- Kotlin : [kdriver](https://github.com/cdpdriver/kdriver) - Automatisation de haut niveau basée sur les coroutines
- Clojure : [clj-chrome-devtools](https://github.com/tatut/clj-chrome-devtools) - Wrapper CDP autogénéré
- Clojure : [cuic](https://github.com/milankinen/cuic) - Automatisation de tests UI de haut niveau
- PHP : [chrome-devtools-protocol](https://github.com/jakubkulhan/chrome-devtools-protocol) - Bibliothèque cliente

### Automatisation de navigateur agentique

> Nous sommes *extrêmement* exigeants sur cette section. Tout le monde encapsule un navigateur pour les agents en ce moment — attendez-vous à ce que toute PR ajoutant un autre serveur MCP ou un CLI agent soit fermée, sauf s'il a une véritable traction et fait quelque chose de nouveau avec CDP sous le capot.

- [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) - Serveur MCP officiel pour Chrome DevTools, qui inclut également un [CLI](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/skills/chrome-devtools-cli/SKILL.md).
- [Webcmd](https://github.com/agentrhq/webcmd) - Compile la navigation sur un site en commandes CLI déterministes par site pour les agents IA.
- [Lumen](https://github.com/omxyz/lumen) - Agent navigateur axé sur la vision avec relecture déterministe auto-réparatrice via CDP.
- [bdg](https://github.com/szymdzum/browser-debugger-cli) - Session CDP d'arrière-plan persistante exposant le DOM, le réseau, la console et les méthodes de protocole brut comme commandes shell.

### Adaptateurs de navigateur
- [devtools-remote-debugger](https://github.com/Nice-PLQ/devtools-remote-debugger) - Déboguez une page web à distance via un agent CDP implémenté en JS côté client.
- [Inspect](https://inspect.dev/) - Utilisez DevTools sur les navigateurs et WebViews iOS et Android. **(code fermé)**

## Utiliser le frontend DevTools avec d'autres plateformes

L'interface DevTools est une application web parlant CDP via un WebSocket, vous pouvez donc l'intégrer ou la pointer vers Node, Ruby, les webviews mobiles ou des runtimes personnalisés (voir `chrome://inspect` pour les cibles intégrées).

- [ChromeDevTools/devtools-frontend](https://github.com/ChromeDevTools/devtools-frontend) - Dépôt source canonique de l'interface Chrome DevTools (publié sur npm sous [chrome-devtools-frontend](https://www.npmjs.com/package/chrome-devtools-frontend)).
- [Chii](https://github.com/liriliri/chii) et [Eruda](https://github.com/liriliri/eruda) - Serveur de débogage distant utilisant la vraie interface `devtools-frontend` (`Chii`, un remplaçant moderne de Weinre) et la console DevTools mobile dans la page (`Eruda`).
- [vscode-js-debug](https://github.com/microsoft/vscode-js-debug) - Débogueur JavaScript et Chrome CDP officiel compatible DAP alimentant VS Code.
- [VS Code - Elements for Microsoft Edge](https://github.com/microsoft/vscode-edge-devtools) - Panneaux Elements et Network intégrés dans VS Code.
- [Debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27) - Guide sur le débogage et le profilage de Node.js avec `node --inspect`.
- [ruby/debug](https://github.com/ruby/debug) - Débogueur officiel de Ruby, qui prend en charge la connexion à Chrome DevTools via CDP (`rdbg --open=chrome`).

---

## Extensions DevTools

- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - Inspectez les hiérarchies de composants React, les props et les flamegraphs du profileur.
- [Vue.js Developer Tools](https://github.com/vuejs/devtools) - Inspectez les composants, l'état et le routage Vue.js.
- [Angular DevTools](https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh) - Inspection de l'arbre de composants et profilage de la détection de changements pour Angular.
- [Redux Devtools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) - Débogage par voyage dans le temps et historique des actions pour Redux.
- [Ember.js Inspector](https://chromewebstore.google.com/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi) - Inspectez les objets, routes et données Ember.js.
- [Web Component DevTools](https://chromewebstore.google.com/detail/web-component-devtools/gdniinfdlmmmjpnhgnkmfpffipenjljo) - Inspectez, modifiez et observez les éléments personnalisés et le shadow DOM de la page.
- [Clockwork](https://chromewebstore.google.com/detail/clockwork/dmggabnehkmmfmdffgajcflpdjlnoemp?hl=en) - Profilage d'applications PHP et inspection des requêtes dans DevTools.
- [RailsPanel](https://chromewebstore.google.com/detail/railspanel/gjpfobpafnhjhbajcjgccbbdofdckggg?hl=en-US) - Panneau de profilage des requêtes et SQL Ruby on Rails.

## Anciens projets
Anciens projets, probablement plus maintenus… Mais toujours cool.

- [ndb](https://github.com/GoogleChromeLabs/ndb) - Expérience de débogage Node.js améliorée basée sur le frontend DevTools.
- [thetool](https://github.com/sfninja/thetool) - Profilage CPU, mémoire, couverture et types pour Node.js.
- [Facebook Stetho](https://github.com/facebook/stetho) - Débogage Android natif avec Chrome DevTools.
- [PonyDebugger](https://github.com/square/PonyDebugger) - Débogage réseau et Core Data à distance pour les apps iOS via Chrome DevTools.
- [betwixt](https://github.com/kdzwinel/betwixt) - Proxy réseau au niveau système inspecté via un panneau Network DevTools autonome.
- [Dirac](https://github.com/binaryage/dirac) - Débogage ClojureScript avec un fork DevTools personnalisé.
- [VS Code - Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug/) - Débogueur Chrome original pour VS Code (remplacé par le [vscode-js-debug](https://github.com/microsoft/vscode-js-debug) intégré, qui possède une riche implémentation CDP/DAP).
- [noice-json-rpc](https://github.com/nojvek/noice-json-rpc) - Bibliothèque TypeScript/JS basée sur un proxy exposant les domaines CDP directement comme une API.
- [PuPHPeteer](https://github.com/rialto-php/puphpeteer) - Pont PHP vers Node Puppeteer.
- [Insight](https://github.com/3Dparallax/insight/) - Boîte à outils de débogage WebGL pour Chrome DevTools.
- [Remote Debug Gateway](https://github.com/RemoteDebug/remotedebug-gateway) - Connectez un client de débogage à plusieurs navigateurs à la fois.
  - DevTools multiutilisateur : [DevTools Remote](https://github.com/auchenberg/devtools-remote) - Déboguez à distance le navigateur de quelqu'un d'autre.
- [DevTools Backend](https://github.com/christian-bromann/devtools-backend) - Implémentation autonome du backend Chrome DevTools pour déboguer n'importe quel environnement web.
- Pilote Python CDP : [pychrome](https://github.com/fate0/pychrome) - Gestionnaire de transport CDP bas niveau.
- [ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy) - Expose les instances Mobile Safari et UIWebView via CDP.
  - [Remote Debug iOS WebKit adapter](https://github.com/RemoteDebug/remotedebug-ios-webkit-adapter) - S'appuie sur `ios-webkit-debug-proxy` et traduit le protocole de débogage distant de WebKit en CDP.
- [IE Diagnostics Adapter](https://github.com/Microsoft/IEDiagnosticsAdapter) - Adaptateur de protocole traduisant IE 11 en CDP.
