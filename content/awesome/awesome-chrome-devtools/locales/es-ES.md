# Awesome Chrome DevTools [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Herramientas y recursos excepcionales en el ecosistema de Chrome DevTools

Herramientas, controladores de protocolo, visualizadores de trazas y frontends independientes construidos en torno a Chrome DevTools y el Chrome DevTools Protocol (CDP). Siguiendo el [Awesome Manifesto](https://github.com/sindresorhus/awesome/blob/main/awesome.md), mantenemos esta lista centrada en lo que es realmente útil en lugar de indexar todo lo que hay en el ámbito.

## Contenido

- [Aprendizaje](#learning)
- [Trazado y perfilado](#tracing--profiling)
- [Chrome DevTools Protocol](#chrome-devtools-protocol)
- [Usar el frontend de DevTools con otras plataformas](#using-devtools-frontend-with-other-platforms)
- [Extensiones de DevTools](#devtools-extensions)
- [Proyectos antiguos](#alumni)

---

## Aprendizaje
- [Dev Tips](https://umaar.com/dev-tips/) - Gran colección de trucos como gifs animados.
- [DevTools Tips](https://devtoolstips.org/) - Colección de trucos ilustrados como mini tutoriales.
- [Web cheatcodes](https://codepo8.github.io/web-cheatcodes/) - Herramientas de desarrollo del navegador para no desarrolladores.
- [Dear Console](https://codepo8.github.io/dearconsole) - Una colección de fragmentos para usar en la consola del navegador.
- [Chrome Secret Menus](https://github.com/sparkyrider/chrome-secret-menus) - Guía de las páginas internas `chrome://` de Chrome y las herramientas de diagnóstico.
- [Front-end Debugging Tools Handbook](https://github.com/lala-hakobyan/front-end-debugging-handbook) - Guía práctica de depuración front-end entre DevTools, extensiones de frameworks e IDEs.

---

## Trazado y perfilado

Las trazas de DevTools Performance y los registros V8 `.cpuprofile` son JSON puro por debajo, y algunos visualizadores independientes hacen maravillas con ellos:

- [trace.cafe](https://trace.cafe/) - Comparte y visualiza trazas de rendimiento web directamente en el panel Performance de DevTools ([fuente](https://github.com/paulirish/trace.cafe)).
- [speedscope](https://github.com/jlfwong/speedscope) - Visualizador de flamegraphs rápido e interactivo que importa `.cpuprofile` y trazas de línea de tiempo de Chrome.
- [cpupro](https://github.com/discoveryjs/cpupro) - Analizador V8/Chrome `.cpuprofile` profundo con flamegraphs, árboles de llamadas y diagnóstico de puntos calientes.
- [Perfetto](https://github.com/google/perfetto) - Suite de perfilado de sistema y análisis de trazas ([ui.perfetto.dev](https://ui.perfetto.dev/)) con soporte de trazas Chromium y consultas SQL de trazas.

---

## Chrome DevTools Protocol

Sugerencia pro: activa el [Protocol Monitor](https://developer.chrome.com/docs/devtools/protocol-monitor) integrado de Chrome (`More tools > Protocol monitor`) para ver el tráfico CDP en vivo y lanzar comandos en bruto directamente en el navegador.

- [ChromeDevTools/devtools-protocol](https://github.com/chromedevtools/devtools-protocol) - **Ubicación canónica del JSON del protocolo**, los tipos de TypeScript y el rastreador de incidencias para errores del protocolo.
- [DevTools Protocol API Docs](https://chromedevtools.github.io/devtools-protocol/) - Interfaz navegable para explorar los dominios, métodos y eventos del protocolo.

### Desarrollar con el protocolo
- [chrome-remote-interface Wiki](https://github.com/cyrus-and/chrome-remote-interface/wiki) - Recetas útiles para tareas CDP en bruto comunes.
- [Chrome Protocol Proxy](https://github.com/wendigo/chrome-protocol-proxy) - Proxy para inspeccionar y depurar el tráfico de cliente CDP.

### Las dos grandes bibliotecas de automatización
- [Puppeteer](https://github.com/puppeteer/puppeteer) - API de alto nivel de Node.js para controlar Chrome mediante CDP y WebDriver BiDi. Ver también [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer).
- [Playwright](https://github.com/microsoft/playwright) - Automatización multi-navegador para Chromium, Firefox y WebKit en Node.js, Python, .NET y Java. Ver también [awesome-playwright](https://github.com/mxschmitt/awesome-playwright).

### Bibliotecas para controlar el protocolo (o una capa superior)

- JavaScript/Node.js: [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface) - Cliente CDP de bajo nivel
- Rust: [chromiumoxide](https://github.com/mattsse/chromiumoxide) - Biblioteca async/tokio con tipos generados
- Rust: [Rust Headless Chrome](https://github.com/rust-headless-chrome/rust-headless-chrome) - Cliente Chrome headless de alto nivel
- Java: [chrome-devtools-java-client](https://github.com/kklisura/chrome-devtools-java-client) - Cliente de protocolo de bajo nivel
- Java: [jvppeteer](https://github.com/fanyong920/jvppeteer) - Chrome headless para Java
- Python: [Zendriver](https://github.com/cdpdriver/zendriver) - Automatización de navegador CDP asíncrona
- Python: [PyCDP](https://github.com/hyperiongray/python-chrome-devtools-protocol) - Wrappers sin E/S (ver también [Trio driver](https://github.com/hyperiongray/trio-chrome-devtools-protocol))
- Python: [ChromeController](https://github.com/fake-name/ChromeController) - Gestión de navegador de alto nivel
- Go: [chromedp](https://github.com/chromedp/chromedp) - Acciones y tareas de alto nivel
- Go: [Rod](https://github.com/go-rod/rod) - Automatización y scraping de alto nivel
- Go: [cdp](https://github.com/mafredri/cdp) - Bindings con seguridad de tipos para CDP
- C#/.NET: [Puppeteer Sharp](https://github.com/hardkoded/puppeteer-sharp) - Port de Puppeteer
- C#/.NET: [dotnet-chrome-protocol](https://github.com/seclerp/dotnet-chrome-protocol) - Biblioteca de runtime y generación de código de esquema
- Ruby: [Ferrum](https://github.com/rubycdp/ferrum) - API de alto nivel para controlar Chrome
- Ruby: [Cuprite](https://github.com/rubycdp/cuprite) - Controlador Capybara
- Kotlin: [chrome-devtools-kotlin](https://github.com/joffrey-bion/chrome-devtools-kotlin) - Biblioteca cliente basada en corrutinas
- Kotlin: [kdriver](https://github.com/cdpdriver/kdriver) - Automatización de alto nivel basada en corrutinas
- Clojure: [clj-chrome-devtools](https://github.com/tatut/clj-chrome-devtools) - Wrapper CDP autogenerado
- Clojure: [cuic](https://github.com/milankinen/cuic) - Automatización de pruebas UI de alto nivel
- PHP: [chrome-devtools-protocol](https://github.com/jakubkulhan/chrome-devtools-protocol) - Biblioteca cliente

### Automatización de navegador con agentes

> Somos *extremadamente* exigentes con esta sección. Ahora mismo todo el mundo está encapsulando un navegador para agentes — espera que cualquier PR que añada otro servidor MCP o CLI de agente se cierre salvo que tenga tracción real y haga algo novedoso con CDP por debajo.

- [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) - Servidor MCP oficial para Chrome DevTools, que también incluye una [CLI](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/skills/chrome-devtools-cli/SKILL.md).
- [Webcmd](https://github.com/agentrhq/webcmd) - Compila la navegación del sitio en comandos CLI deterministas por sitio para agentes de IA.
- [Lumen](https://github.com/omxyz/lumen) - Agente de navegador centrado en la visión con reproducción determinista autocurativa sobre CDP.
- [bdg](https://github.com/szymdzum/browser-debugger-cli) - Sesión CDP de fondo persistente que expone el DOM, la red, la consola y los métodos de protocolo en bruto como comandos de shell.

### Adaptadores de navegador
- [devtools-remote-debugger](https://github.com/Nice-PLQ/devtools-remote-debugger) - Depura una página web de forma remota mediante un agente CDP implementado en JS del lado del cliente.
- [Inspect](https://inspect.dev/) - Usa DevTools con navegadores y WebViews de iOS y Android. **(código cerrado)**

## Usar el frontend de DevTools con otras plataformas

La UI de DevTools es una aplicación web que habla CDP sobre un WebSocket, así que puedes incrustarla o apuntarla a Node, Ruby, webviews móviles o runtimes personalizados (consulta `chrome://inspect` para las targets integradas).

- [ChromeDevTools/devtools-frontend](https://github.com/ChromeDevTools/devtools-frontend) - Repositorio fuente canónico de la UI de Chrome DevTools (publicado en npm como [chrome-devtools-frontend](https://www.npmjs.com/package/chrome-devtools-frontend)).
- [Chii](https://github.com/liriliri/chii) y [Eruda](https://github.com/liriliri/eruda) - Servidor de depuración remota que usa la verdadera UI `devtools-frontend` (`Chii`, un reemplazo moderno de Weinre) y la consola DevTools móvil dentro de la página (`Eruda`).
- [vscode-js-debug](https://github.com/microsoft/vscode-js-debug) - Depurador oficial de JavaScript y Chrome CDP compatible con DAP que alimenta VS Code.
- [VS Code - Elements for Microsoft Edge](https://github.com/microsoft/vscode-edge-devtools) - Paneles Elements y Network integrados dentro de VS Code.
- [Debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27) - Guía sobre depurar y perfilar Node.js con `node --inspect`.
- [ruby/debug](https://github.com/ruby/debug) - Depurador oficial de Ruby, que admite conectar Chrome DevTools mediante CDP (`rdbg --open=chrome`).

---

## Extensiones de DevTools

- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - Inspecciona jerarquías de componentes React, props y flamegraphs del profiler.
- [Vue.js Developer Tools](https://github.com/vuejs/devtools) - Inspecciona componentes, estado y enrutado de Vue.js.
- [Angular DevTools](https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh) - Inspección del árbol de componentes y perfilado de detección de cambios para Angular.
- [Redux Devtools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) - Depuración de viaje en el tiempo e historial de acciones para Redux.
- [Ember.js Inspector](https://chromewebstore.google.com/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi) - Inspecciona objetos, rutas y datos de Ember.js.
- [Web Component DevTools](https://chromewebstore.google.com/detail/web-component-devtools/gdniinfdlmmmjpnhgnkmfpffipenjljo) - Inspecciona, modifica y observa elementos personalizados y shadow DOM en la página.
- [Clockwork](https://chromewebstore.google.com/detail/clockwork/dmggabnehkmmfmdffgajcflpdjlnoemp?hl=en) - Perfilado de aplicaciones PHP e inspección de peticiones en DevTools.
- [RailsPanel](https://chromewebstore.google.com/detail/railspanel/gjpfobpafnhjhbajcjgccbbdofdckggg?hl=en-US) - Panel de perfilado de peticiones y SQL de Ruby on Rails.

## Proyectos antiguos
Proyectos viejos, probablemente ya no mantenidos… Pero aún geniales.

- [ndb](https://github.com/GoogleChromeLabs/ndb) - Experiencia de depuración de Node.js mejorada basada en el frontend DevTools.
- [thetool](https://github.com/sfninja/thetool) - Perfilado de CPU, memoria, cobertura y tipos para Node.js.
- [Facebook Stetho](https://github.com/facebook/stetho) - Depuración nativa de Android con Chrome DevTools.
- [PonyDebugger](https://github.com/square/PonyDebugger) - Depuración remota de red y Core Data para apps iOS vía Chrome DevTools.
- [betwixt](https://github.com/kdzwinel/betwixt) - Proxy de red a nivel de sistema inspeccionado mediante un panel Network de DevTools independiente.
- [Dirac](https://github.com/binaryage/dirac) - Depuración de ClojureScript con un fork personalizado de DevTools.
- [VS Code - Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug/) - Depurador original de Chrome para VS Code (sustituido por el [vscode-js-debug](https://github.com/microsoft/vscode-js-debug) integrado, que tiene una rica implementación CDP/DAP).
- [noice-json-rpc](https://github.com/nojvek/noice-json-rpc) - Biblioteca TypeScript/JS basada en proxy que expone los dominios CDP directamente como una API.
- [PuPHPeteer](https://github.com/rialto-php/puphpeteer) - Puente PHP a Node Puppeteer.
- [Insight](https://github.com/3Dparallax/insight/) - Kit de herramientas de depuración WebGL para Chrome DevTools.
- [Remote Debug Gateway](https://github.com/RemoteDebug/remotedebug-gateway) - Conecta un cliente de depuración a varios navegadores a la vez.
  - DevTools multiusuario: [DevTools Remote](https://github.com/auchenberg/devtools-remote) - Depura de forma remota el navegador de otra persona.
- [DevTools Backend](https://github.com/christian-bromann/devtools-backend) - Implementación independiente del backend de Chrome DevTools para depurar cualquier entorno web.
- Controlador Python CDP: [pychrome](https://github.com/fate0/pychrome) - Manejador de transporte CDP de bajo nivel.
- [ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy) - Expone instancias de Mobile Safari y UIWebView vía CDP.
  - [Remote Debug iOS WebKit adapter](https://github.com/RemoteDebug/remotedebug-ios-webkit-adapter) - Se basa en `ios-webkit-debug-proxy` y traduce el Protocolo de Depuración Remota de WebKit a CDP.
- [IE Diagnostics Adapter](https://github.com/Microsoft/IEDiagnosticsAdapter) - Adaptador de protocolo que traduce IE 11 a CDP.
