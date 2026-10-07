# Awesome Chrome DevTools [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Ferramentas e recursos excepcionais no ecossistema do Chrome DevTools

Ferramentas, drivers de protocolo, visualizadores de trace e frontends independentes construídos em torno do Chrome DevTools e do Chrome DevTools Protocol (CDP). Seguindo o [Awesome Manifesto](https://github.com/sindresorhus/awesome/blob/main/awesome.md), mantemos esta lista focada no que é genuinamente útil em vez de indexar tudo no espaço.

## Conteúdo

- [Aprendizado](#aprendizado)
- [Tracing e Profiling](#tracing-e-profiling)
- [Chrome DevTools Protocol](#chrome-devtools-protocol)
- [Usando o frontend do DevTools com outras plataformas](#usando-o-frontend-do-devtools-com-outras-plataformas)
- [Extensões do DevTools](#extensões-do-devtools)
- [Projetos aposentados](#projetos-aposentados)

---

## Aprendizado
- [Dev Tips](https://umaar.com/dev-tips/) - Grande coleção de dicas como gifs animados.
- [DevTools Tips](https://devtoolstips.org/) - Coleção de dicas ilustradas como mini tutoriais.
- [Web cheatcodes](https://codepo8.github.io/web-cheatcodes/) - Ferramentas de desenvolvedor do navegador para não desenvolvedores.
- [Dear Console](https://codepo8.github.io/dearconsole) - Uma coleção de snippets para usar no console do navegador.
- [Chrome Secret Menus](https://github.com/sparkyrider/chrome-secret-menus) - Guia das páginas internas `chrome://` do Chrome e ferramentas de diagnóstico.
- [Front-end Debugging Tools Handbook](https://github.com/lala-hakobyan/front-end-debugging-handbook) - Guia prático de depuração front-end entre DevTools, extensões de frameworks e IDEs.

---

## Tracing e Profiling

Os traces do DevTools Performance e os logs `.cpuprofile` do V8 são JSON puro por baixo, e alguns visualizadores independentes fazem maravilhas com eles:

- [trace.cafe](https://trace.cafe/) - Compartilhe e veja traces de performance web diretamente no painel Performance do DevTools ([fonte](https://github.com/paulirish/trace.cafe)).
- [speedscope](https://github.com/jlfwong/speedscope) - Visualizador de flamegraph rápido e interativo que importa `.cpuprofile` e traces de linha do tempo do Chrome.
- [cpupro](https://github.com/discoveryjs/cpupro) - Analisador V8/Chrome `.cpuprofile` profundo com flamegraphs, árvores de chamadas e diagnóstico de pontos quentes.
- [Perfetto](https://github.com/google/perfetto) - Suíte de perfilagem de sistema e análise de trace ([ui.perfetto.dev](https://ui.perfetto.dev/)) com suporte a trace do Chromium e consulta SQL de trace.

---

## Chrome DevTools Protocol

Dica pro: ative o [Protocol Monitor](https://developer.chrome.com/docs/devtools/protocol-monitor) integrado do Chrome (`More tools > Protocol monitor`) para assistir ao tráfego CDP ao vivo e disparar comandos brutos direto no navegador.

- [ChromeDevTools/devtools-protocol](https://github.com/chromedevtools/devtools-protocol) - **Local canônico do JSON do protocolo**, tipos TypeScript e rastreador de issues para bugs do protocolo.
- [DevTools Protocol API Docs](https://chromedevtools.github.io/devtools-protocol/) - Interface navegável para explorar os domínios, métodos e eventos do protocolo.

### Desenvolvendo com o protocolo
- [chrome-remote-interface Wiki](https://github.com/cyrus-and/chrome-remote-interface/wiki) - Receitas práticas para tarefas CDP brutas comuns.
- [Chrome Protocol Proxy](https://github.com/wendigo/chrome-protocol-proxy) - Proxy para inspecionar e depurar o tráfego de cliente CDP.

### As duas grandes bibliotecas de automação
- [Puppeteer](https://github.com/puppeteer/puppeteer) - API Node.js de alto nível para controlar o Chrome via CDP e WebDriver BiDi. Veja também [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer).
- [Playwright](https://github.com/microsoft/playwright) - Automação multi-navegador para Chromium, Firefox e WebKit em Node.js, Python, .NET e Java. Veja também [awesome-playwright](https://github.com/mxschmitt/awesome-playwright).

### Bibliotecas para dirigir o protocolo (ou uma camada acima)

- JavaScript/Node.js: [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface) - Cliente CDP de baixo nível
- Rust: [chromiumoxide](https://github.com/mattsse/chromiumoxide) - Biblioteca async/tokio com tipos gerados
- Rust: [Rust Headless Chrome](https://github.com/rust-headless-chrome/rust-headless-chrome) - Cliente Chrome headless de alto nível
- Java: [chrome-devtools-java-client](https://github.com/kklisura/chrome-devtools-java-client) - Cliente de protocolo de baixo nível
- Java: [jvppeteer](https://github.com/fanyong920/jvppeteer) - Chrome headless para Java
- Python: [Zendriver](https://github.com/cdpdriver/zendriver) - Automação de navegador CDP assíncrona
- Python: [PyCDP](https://github.com/hyperiongray/python-chrome-devtools-protocol) - Wrappers sem E/S (veja também [Trio driver](https://github.com/hyperiongray/trio-chrome-devtools-protocol))
- Python: [ChromeController](https://github.com/fake-name/ChromeController) - Gerenciamento de navegador de alto nível
- Go: [chromedp](https://github.com/chromedp/chromedp) - Ações e tarefas de alto nível
- Go: [Rod](https://github.com/go-rod/rod) - Automação e scraping de alto nível
- Go: [cdp](https://github.com/mafredri/cdp) - Bindings type-safe para CDP
- C#/.NET: [Puppeteer Sharp](https://github.com/hardkoded/puppeteer-sharp) - Port do Puppeteer
- C#/.NET: [dotnet-chrome-protocol](https://github.com/seclerp/dotnet-chrome-protocol) - Biblioteca de runtime e geração de código de esquema
- Ruby: [Ferrum](https://github.com/rubycdp/ferrum) - API de alto nível para controlar o Chrome
- Ruby: [Cuprite](https://github.com/rubycdp/cuprite) - Driver Capybara
- Kotlin: [chrome-devtools-kotlin](https://github.com/joffrey-bion/chrome-devtools-kotlin) - Biblioteca cliente baseada em corrotinas
- Kotlin: [kdriver](https://github.com/cdpdriver/kdriver) - Automação de alto nível baseada em corrotinas
- Clojure: [clj-chrome-devtools](https://github.com/tatut/clj-chrome-devtools) - Wrapper CDP autogerado
- Clojure: [cuic](https://github.com/milankinen/cuic) - Automação de teste de UI de alto nível
- PHP: [chrome-devtools-protocol](https://github.com/jakubkulhan/chrome-devtools-protocol) - Biblioteca cliente

### Automação de Navegador Agentica

> Somos *extremamente* exigentes com esta seção. Todos estão encapsulando um navegador para agentes agora — espere que qualquer PR adicionando outro servidor MCP ou CLI de agente seja fechada, a menos que tenha tração real e faça algo novo com CDP por baixo.

- [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) - Servidor MCP oficial para o Chrome DevTools, que também inclui uma [CLI](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/skills/chrome-devtools-cli/SKILL.md).
- [Webcmd](https://github.com/agentrhq/webcmd) - Compila a navegação do site em comandos CLI determinísticos por site para agentes de IA.
- [Lumen](https://github.com/omxyz/lumen) - Agente de navegador voltado para visão com replay determinístico auto-curativo sobre CDP.
- [bdg](https://github.com/szymdzum/browser-debugger-cli) - Sessão CDP de segundo plano persistente expondo DOM, rede, console e métodos de protocolo brutos como comandos shell.

### Adaptadores de Navegador
- [devtools-remote-debugger](https://github.com/Nice-PLQ/devtools-remote-debugger) - Depure uma página web remotamente via um agente CDP implementado em JS do lado do cliente.
- [Inspect](https://inspect.dev/) - Use o DevTools contra navegadores e WebViews iOS e Android. **(código fechado)**

## Usando o frontend do DevTools com outras plataformas

A UI do DevTools é um app web que fala CDP sobre um WebSocket, então você pode incorporá-lo ou apontar para Node, Ruby, webviews móveis ou runtimes personalizados (veja `chrome://inspect` para alvos integrados).

- [ChromeDevTools/devtools-frontend](https://github.com/ChromeDevTools/devtools-frontend) - Repositório fonte canônico para a UI do Chrome DevTools (publicado no npm como [chrome-devtools-frontend](https://www.npmjs.com/package/chrome-devtools-frontend)).
- [Chii](https://github.com/liriliri/chii) e [Eruda](https://github.com/liriliri/eruda) - Servidor de depuração remota usando a UI real `devtools-frontend` (`Chii`, um substituto moderno do Weinre) e o console DevTools móvel na página (`Eruda`).
- [vscode-js-debug](https://github.com/microsoft/vscode-js-debug) - Depurador oficial JavaScript e Chrome CDP compatível com DAP que alimenta o VS Code.
- [VS Code - Elements for Microsoft Edge](https://github.com/microsoft/vscode-edge-devtools) - Painéis Elements e Network embutidos dentro do VS Code.
- [Debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27) - Guia sobre depurar e perfilar Node.js com `node --inspect`.
- [ruby/debug](https://github.com/ruby/debug) - Depurador oficial do Ruby, que suporta conectar o Chrome DevTools via CDP (`rdbg --open=chrome`).

---

## Extensões do DevTools

- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - Inspecione hierarquias de componentes React, props e flamegraphs do profiler.
- [Vue.js Developer Tools](https://github.com/vuejs/devtools) - Inspecione componentes, estado e roteamento do Vue.js.
- [Angular DevTools](https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh) - Inspeção de árvore de componentes e profiling de detecção de mudanças para Angular.
- [Redux Devtools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) - Depuração por volta no tempo e histórico de ações para Redux.
- [Ember.js Inspector](https://chromewebstore.google.com/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi) - Inspecione objetos, rotas e dados do Ember.js.
- [Web Component DevTools](https://chromewebstore.google.com/detail/web-component-devtools/gdniinfdlmmmjpnhgnkmfpffipenjljo) - Inspecione, modifique e observe elementos customizados e shadow DOM na página.
- [Clockwork](https://chromewebstore.google.com/detail/clockwork/dmggabnehkmmfmdffgajcflpdjlnoemp?hl=en) - Perfilagem de aplicações PHP e inspeção de requisições no DevTools.
- [RailsPanel](https://chromewebstore.google.com/detail/railspanel/gjpfobpafnhjhbajcjgccbbdofdckggg?hl=en-US) - Painel de perfilagem de requisições e SQL do Ruby on Rails.

## Projetos aposentados
Projetos antigos, provavelmente não mantidos mais… Mas ainda legais.

- [ndb](https://github.com/GoogleChromeLabs/ndb) - Experiência de depuração Node.js aprimorada construída sobre o frontend do DevTools.
- [thetool](https://github.com/sfninja/thetool) - Perfilagem de CPU, memória, cobertura e tipos para Node.js.
- [Facebook Stetho](https://github.com/facebook/stetho) - Depuração nativa Android com Chrome DevTools.
- [PonyDebugger](https://github.com/square/PonyDebugger) - Depuração remota de rede e Core Data para apps iOS via Chrome DevTools.
- [betwixt](https://github.com/kdzwinel/betwixt) - Proxy de rede em nível de sistema inspecionado através de um painel Network do DevTools independente.
- [Dirac](https://github.com/binaryage/dirac) - Depuração ClojureScript com um fork customizado do DevTools.
- [VS Code - Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug/) - Depurador original do Chrome para VS Code (substituído pelo [vscode-js-debug](https://github.com/microsoft/vscode-js-debug) integrado, que tem uma rica implementação CDP/DAP).
- [noice-json-rpc](https://github.com/nojvek/noice-json-rpc) - Biblioteca TypeScript/JS baseada em proxy expondo domínios CDP diretamente como uma API.
- [PuPHPeteer](https://github.com/rialto-php/puphpeteer) - Ponte PHP para o Node Puppeteer.
- [Insight](https://github.com/3Dparallax/insight/) - Kit de ferramentas de depuração WebGL para Chrome DevTools.
- [Remote Debug Gateway](https://github.com/RemoteDebug/remotedebug-gateway) - Conecte um cliente de depuração a múltiplos navegadores de uma vez.
  - DevTools multiusuário: [DevTools Remote](https://github.com/auchenberg/devtools-remote) - Depure remotamente o navegador de outra pessoa.
- [DevTools Backend](https://github.com/christian-bromann/devtools-backend) - Implementação independente do backend do Chrome DevTools para depurar ambientes web arbitrários.
- Driver Python CDP: [pychrome](https://github.com/fate0/pychrome) - Manipulador de transporte CDP de baixo nível.
- [ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy) - Expõe instâncias do Mobile Safari e UIWebView via CDP.
  - [Remote Debug iOS WebKit adapter](https://github.com/RemoteDebug/remotedebug-ios-webkit-adapter) - Baseia-se em `ios-webkit-debug-proxy` e traduz o Remote Debugging Protocol do WebKit para CDP.
- [IE Diagnostics Adapter](https://github.com/Microsoft/IEDiagnosticsAdapter) - Adaptador de protocolo que traduz IE 11 para CDP.
