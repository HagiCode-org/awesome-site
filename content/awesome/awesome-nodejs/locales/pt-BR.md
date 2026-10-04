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
				<a href="https://github.com/sponsors/sindresorhus">A comunidade apoia meu trabalho de código aberto</a>
			</sup>
		</p>
		<sup>Agradecimentos especiais a:</sup>
		<br>
		<br>
		<br>
		<a href="https://depot.dev?utm_source=github&utm_medium=sindresorhus">
			<div>
				<picture>
					<source width="180" media="(prefers-color-scheme: dark)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-dark.svg">
					<source width="180" media="(prefers-color-scheme: light)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-light.svg">
					<img width="180" src="https://sindresorhus.com/assets/thanks/depot-logo-light.svg" alt="Depot logo">
				</picture>
			</div>
			<b>Builds remotos rápidos de contêineres e runners do GitHub Actions.</b>
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
		<sub>Basta digitar <a href="https://node.cool"><code>node.cool</code></a> para acessar esta página. Siga-me no <a href="https://twitter.com/sindresorhus">Twitter</a>.</sub>
	</p>
	<br>
	<p>
		<a href="https://en.wikipedia.org/wiki/Node.js">Node.js</a> é um ambiente de execução JavaScript de código aberto e multiplataforma para criar servidores e ferramentas de linha de comando.
	</p>
	<br>
</div>

## Conteúdo

- [Oficial](#official)
- [Pacotes](#packages)
	- [Ciência maluca](#mad-science)
	- [Aplicativos de linha de comando](#command-line-apps)
	- [Programação funcional](#functional-programming)
	- [HTTP](#http)
	- [Depuração / criação de perfil](#debugging--profiling)
	- [Registro](#logging)
	- [Utilitários de linha de comando](#command-line-utilities)
	- [Ferramentas de build](#build-tools)
	- [Hardware](#hardware)
	- [Templates](#templating)
	- [Frameworks web](#web-frameworks)
	- [Documentação](#documentation)
	- [Sistema de arquivos](#filesystem)
	- [Fluxo de controle](#control-flow)
	- [Streams](#streams)
	- [Tempo real](#real-time)
	- [Imagem](#image)
	- [Texto](#text)
	- [Número](#number)
	- [Matemática](#math)
	- [Data](#date)
	- [URL](#url)
	- [Validação de dados](#data-validation)
	- [Análise sintática](#parsing)
	- [Humanização](#humanize)
	- [Compactação](#compression)
	- [Rede](#network)
	- [Banco de dados](#database)
	- [Testes](#testing)
	- [Segurança](#security)
	- [Benchmarking](#benchmarking)
	- [Minificadores](#minifiers)
	- [Autenticação](#authentication)
	- [Autorização](#authorization)
	- [E-mail](#email)
	- [Filas de tarefas](#job-queues)
	- [Gerenciamento do Node.js](#nodejs-management)
	- [Integração multiplataforma](#cross-platform-integration)
	- [Processamento de linguagem natural](#natural-language-processing)
	- [Gerenciamento de processos](#process-management)
	- [Automação](#automation)
	- [AST](#ast)
	- [Geradores de sites estáticos](#static-site-generators)
	- [Sistemas de gerenciamento de conteúdo](#content-management-systems)
	- [Fórum](#forum)
	- [Blog](#blogging)
	- [Estranho](#weird)
	- [Serialização](#serialization)
	- [Diversos](#miscellaneous)
- [Gerenciador de pacotes](#package-manager)
- [Recursos](#resources)
	- [Tutoriais](#tutorials)
	- [Descoberta](#discovery)
	- [Artigos](#articles)
	- [Boletins informativos](#newsletters)
	- [Vídeos](#videos)
	- [Livros](#books)
	- [Blogs](#blogs)
	- [Cursos](#courses)
	- [Guias rápidos](#cheatsheets)
	- [Ferramentas](#tools)
	- [Comunidade](#community)
	- [Diversos](#miscellaneous-1)
- [Listas relacionadas](#related-lists)

## Oficial

- [Site](https://nodejs.org)
- [Documentação](https://nodejs.org/dist/latest/docs/api/)
- [Repositório](https://github.com/nodejs/node)

## Pacotes

### Ciência maluca

- [webtorrent](https://github.com/webtorrent/webtorrent) - Cliente de torrents em streaming para Node.js e o navegador.
- [peerflix](https://github.com/mafintosh/peerflix) - Cliente de torrents em streaming.
- [ipfs](https://github.com/ipfs/helia) - Sistema de arquivos distribuído que busca conectar todos os dispositivos de computação por meio do mesmo sistema de arquivos.
- [stackgl](https://github.com/stackgl) - Ecossistema de software aberto para WebGL, construído sobre browserify e npm.
- [peerwiki](https://github.com/mafintosh/peerwiki) - Toda a Wikipédia via BitTorrent.
- [peercast](https://github.com/mafintosh/peercast) - Transmita um vídeo torrent para o Chromecast.
- [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib) - Biblioteca Bitcoin limpa, legível e comprovada.
- [Bitcore](https://github.com/bitpay/bitcore) - Biblioteca Bitcoin pura e poderosa.
- [PDFKit](https://github.com/foliojs/pdfkit) - Biblioteca para geração de PDFs.
- [turf](https://github.com/Turfjs/turf) - Mecanismo modular de processamento e análise geoespacial.
- [webcat](https://github.com/mafintosh/webcat) - Canal P2P pela web usando WebRTC, que utiliza sua chave pública/privada do GitHub para autenticação.
- [NodeOS](https://github.com/NodeOS/NodeOS) - O primeiro sistema operacional desenvolvido com npm.
- [YodaOS](https://github.com/yodaos-project/yodaos) - Sistema operacional de inteligência artificial.
- [Brain.js](https://github.com/BrainJS/brain.js) - Framework de aprendizado de máquina.
- [Pipcook](https://github.com/alibaba/pipcook) - Framework de algoritmos de front-end para criar pipelines de aprendizado de máquina.
- [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) - Modelagem e análise da teoria dos grafos (também conhecida como redes).
- [js-git](https://github.com/creationix/js-git) - Implementação de Git em JavaScript.
- [xlsx](https://github.com/SheetJS/sheetjs) - Leitor e gravador de planilhas Excel em JavaScript puro.
- [isomorphic-git](https://github.com/isomorphic-git/isomorphic-git) - Implementação de Git em JavaScript puro.

### Aplicativos de linha de comando

- [np](https://github.com/sindresorhus/np) - Uma alternativa melhor a `npm publish`.
- [npm-name](https://github.com/sindresorhus/npm-name) - Verifica se o nome de um pacote está disponível no npm.
- [gh-home](https://github.com/sindresorhus/gh-home) - Abre a página do GitHub do repositório no diretório atual.
- [npm-home](https://github.com/sindresorhus/npm-home) - Abre a página do npm de um pacote.
- [trash](https://github.com/sindresorhus/trash) - Alternativa mais segura ao `rm`.
- [speed-test](https://github.com/sindresorhus/speed-test) - Testa a velocidade e o ping da sua conexão com a internet.
- [pageres](https://github.com/sindresorhus/pageres) - Captura imagens de sites.
- [cpy](https://github.com/sindresorhus/cpy) - Copia arquivos.
- [vtop](https://github.com/MrRio/vtop) - Uma versão melhor do top, com gráficos atraentes.
- [empty-trash](https://github.com/sindresorhus/empty-trash) - Esvazia a lixeira.
- [is-up](https://github.com/sindresorhus/is-up) - Verifica se um site está no ar ou fora do ar.
- [is-online](https://github.com/sindresorhus/is-online) - Verifica se a conexão com a internet está ativa.
- [public-ip](https://github.com/sindresorhus/public-ip) - Obtém seu endereço IP público.
- [clipboard-cli](https://github.com/sindresorhus/clipboard-cli) - Copia e cola pelo terminal.
- [XO](https://github.com/xojs/xo) - Impõe um estilo de código rigoroso usando o estilo JavaScript Happiness.
- [ESLint](https://github.com/eslint/eslint) - Utilitário de lint extensível para JavaScript.
- [David](https://github.com/alanshaw/david) - Avisa quando as dependências npm do seu pacote estão desatualizadas.
- [http-server](https://github.com/http-party/http-server) - Servidor HTTP simples de linha de comando, sem configuração.
- [Live Server](https://github.com/tapio/live-server) - Servidor HTTP de desenvolvimento com recarregamento automático.
- [bcat](https://github.com/kessler/node-bcat) - Envia a saída de um comando para navegadores web.
- [normit](https://github.com/pawurb/normit) - Google Tradutor com síntese de fala no terminal.
- [fkill](https://github.com/sindresorhus/fkill-cli) - Encerra processos com facilidade. Multiplataforma.
- [pjs](https://github.com/danielstjules/pjs) - JavaScript encadeável. Filtre, mapeie e reduza dados rapidamente pelo terminal.
- [license-checker](https://github.com/davglass/license-checker) - Verifica as licenças das dependências do seu aplicativo.
- [browser-run](https://github.com/juliangruber/browser-run) - Executa código facilmente em um ambiente de navegador.
- [tmpin](https://github.com/sindresorhus/tmpin) - Adiciona suporte a stdin a qualquer aplicativo CLI que aceite arquivos como entrada.
- [wallpaper](https://github.com/sindresorhus/wallpaper) - Altera o papel de parede da área de trabalho.
- [pen](https://github.com/hatashiro/pen) - Visualiza Markdown ao vivo no navegador, a partir do seu editor favorito.
- [dark-mode](https://github.com/sindresorhus/dark-mode) - Alterna o modo escuro do macOS.
- [Jsome](https://github.com/Javascipt/Jsome) - Exibe JSON com cores e recuo configuráveis.
- [mobicon](https://github.com/samverschueren/mobicon-cli) - Gerador de ícones para aplicativos móveis.
- [mobisplash](https://github.com/samverschueren/mobisplash-cli) - Gerador de telas de abertura para aplicativos móveis.
- [diff2html-cli](https://github.com/rtfpessoa/diff2html-cli) - Gera HTML a partir de um diff do Git.
- [trymodule](https://github.com/victorb/trymodule) - Experimenta pacotes npm no terminal.
- [jscpd](https://github.com/kucherenko/jscpd) - Detector de código duplicado por copiar e colar.
- [atmo](https://github.com/Raathigesh/Atmo) - Simulação de API no lado do servidor.
- [auto-install](https://github.com/siddharthkp/auto-install) - Instala dependências automaticamente enquanto você programa.
- [cost-of-modules](https://github.com/siddharthkp/cost-of-modules) - Descubra quais dependências estão deixando você mais lento.
- [localtunnel](https://github.com/localtunnel/localtunnel) - Expõe seu localhost para o mundo.
- [svg-term-cli](https://github.com/marionebl/svg-term-cli) - Compartilha sessões do terminal em SVG.
- [gtop](https://github.com/aksakalli/gtop) - Painel de monitoramento do sistema para o terminal.
- [themer](https://github.com/themerdev/themer) - Gera temas para seu editor, terminal, papel de parede, Slack e muito mais.
- [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - Imagens incríveis do seu código, direto do terminal.
- [cash-cli](https://github.com/xxczaki/cash-cli) - Converte entre 170 moedas.
- [taskbook](https://github.com/klaussinani/taskbook) - Tarefas, quadros e notas para o ambiente de linha de comando.
- [discharge](https://github.com/brandonweiss/discharge) - Implante sites estáticos no Amazon S3 com facilidade.
- [npkill](https://github.com/voidcosmos/npkill) - Encontre e remova facilmente pastas node_modules antigas e grandes.

### Programação funcional

- [lodash](https://github.com/lodash/lodash) - Biblioteca de utilitários consistente, personalizável e de alto desempenho, com recursos extras. Uma alternativa melhor e mais rápida ao Underscore.js.
- [immutable](https://github.com/immutable-js/immutable-js) - Coleções de dados imutáveis.
- [Ramda](https://github.com/ramda/ramda) - Biblioteca de utilitários focada na composição funcional flexível, viabilizada por currying automático e ordem de argumentos invertida. Evita mutar dados.
- [Mout](https://github.com/mout/mout) - Biblioteca de utilitários cuja principal diferença em relação às demais é permitir carregar apenas os módulos e funções necessários, sem sobrecarga extra.
- [RxJS](https://github.com/reactivex/rxjs) - Biblioteca de programação reativa funcional para transformar, compor e consultar vários tipos de dados.
- [Kefir.js](https://github.com/kefirjs/kefir) - Biblioteca reativa focada em alto desempenho e baixo consumo de memória.

### HTTP

- [got](https://github.com/sindresorhus/got) - Interface mais agradável para o módulo `http` integrado.
- [undici](https://github.com/nodejs/undici) - Cliente HTTP de alto desempenho, escrito do zero e sem dependências.
- [ky-universal](https://github.com/sindresorhus/ky-universal) - Cliente HTTP universal baseado em Fetch.
- [node-fetch](https://github.com/node-fetch/node-fetch) - `window.fetch` para Node.js.
- [axios](https://github.com/axios/axios) - Cliente HTTP baseado em Promises (também funciona no navegador).
- [superagent](https://github.com/visionmedia/superagent) - Biblioteca de requisições HTTP.
- [http-fake-backend](https://github.com/micromata/http-fake-backend) - Crie um backend falso fornecendo o conteúdo de arquivos JSON ou objetos JavaScript por meio de rotas configuráveis.
- [cacheable-request](https://github.com/lukechilds/cacheable-request) - Envolva requisições HTTP nativas com suporte a cache compatível com RFC.
- [gotql](https://github.com/khaosdoctor/gotql) - Biblioteca de requisições GraphQL construída sobre [got](https://github.com/sindresorhus/got).
- [global-agent](https://github.com/gajus/global-agent) - Agente de proxy HTTP/HTTPS global configurável por variáveis de ambiente.
- [smoke](https://github.com/sinedied/smoke) - Servidor HTTP simulado baseado em arquivos, com capacidade de gravação.
- [purest](https://github.com/simov/purest) - Cliente REST.

### Depuração / criação de perfil

- [debug](https://github.com/debug-js/debug) - Utilitário minúsculo de depuração.
- [why-is-node-running](https://github.com/mafintosh/why-is-node-running) - O Node.js está em execução, mas você não sabe por quê?
- [njsTrace](https://github.com/valyouw/njstrace) - Instrumente e rastreie seu código: veja todas as chamadas de função, argumentos, valores retornados e o tempo gasto em cada função.
- [vstream](https://github.com/joyent/node-vstream) - Mixins instrumentáveis para inspecionar um pipeline de streams.
- [stackman](https://github.com/watson/stackman) - Enriquece o stack trace de um erro com trechos de código e outros recursos.
- [locus](https://github.com/alidavut/locus) - Inicia um REPL durante a execução, com acesso a todas as variáveis.
- [0x](https://github.com/davidmarkclements/0x) - Criação de flame graphs para análise de desempenho.
- [ctrace](https://github.com/automation-stack/ctrace) - Sistema aprimorado e bem formatado para rastrear chamadas de sistema e sinais.
- [leakage](https://github.com/andywer/leakage) - Escreva testes para detectar vazamentos de memória.
- [llnode](https://github.com/nodejs/llnode) - Ferramenta de análise pós-morte que permite inspecionar objetos e obter informações de um processo Node.js que travou.
- [thetool](https://github.com/sfninja/thetool) - Captura perfis de CPU, memória e outros da sua aplicação em formato compatível com o Chrome DevTools.
- [swagger-stats](https://github.com/slanatech/swagger-stats) - Rastreia chamadas de API e monitora o desempenho, a integridade e as métricas de uso da API.
- [NiM](https://github.com/june07/nim) - Gerencia o fluxo de trabalho de depuração do DevTools.
- [dats](https://github.com/immobiliare/dats) - Cliente [StatsD](https://github.com/statsd/statsd) minimalista e sem dependências.

### Registro

- [pino](https://github.com/pinojs/pino) - Logger extremamente rápido, inspirado no Bunyan.
- [winston](https://github.com/winstonjs/winston) - Biblioteca assíncrona de logging com múltiplos transportes.
- [console-log-level](https://github.com/watson/console-log-level) - O logger mais simples que se possa imaginar, com suporte a níveis de log e prefixos personalizados.
- [storyboard](https://github.com/guigrpa/storyboard) - Logs e narrativas coloridos, hierárquicos, em tempo real e de ponta a ponta.
- [consola](https://github.com/unjs/consola) - Logger para o console.

### Utilitários de linha de comando

- [chalk](https://github.com/chalk/chalk) - Estilização de strings no terminal feita do jeito certo.
- [meow](https://github.com/sindresorhus/meow) - Auxiliar para aplicativos CLI.
- [yargs](https://github.com/yargs/yargs) - Analisador de linha de comando que gera automaticamente uma interface elegante.
- [ora](https://github.com/sindresorhus/ora) - Indicador de carregamento elegante para o terminal.
- [get-stdin](https://github.com/sindresorhus/get-stdin) - Uma maneira mais fácil de ler stdin.
- [log-update](https://github.com/sindresorhus/log-update) - Registra atualizações sobrescrevendo a saída anterior no terminal. Útil para exibir barras de progresso, animações etc.
- [Ink](https://github.com/vadimdemedes/ink) - React para aplicativos interativos de linha de comando.
- [listr2](https://github.com/listr2/listr2) - Lista de tarefas para o terminal.
- [conf](https://github.com/sindresorhus/conf) - Gerenciamento simples de configurações para seu aplicativo ou módulo.
- [ansi-escapes](https://github.com/sindresorhus/ansi-escapes) - Códigos de escape ANSI para manipular o terminal.
- [log-symbols](https://github.com/sindresorhus/log-symbols) - Símbolos coloridos para vários níveis de log.
- [figures](https://github.com/sindresorhus/figures) - Símbolos Unicode com alternativas para o Windows CMD.
- [boxen](https://github.com/sindresorhus/boxen) - Cria caixas no terminal.
- [terminal-link](https://github.com/sindresorhus/terminal-link) - Cria links clicáveis no terminal.
- [terminal-image](https://github.com/sindresorhus/terminal-image) - Exibe imagens no terminal.
- [string-width](https://github.com/sindresorhus/string-width) - Obtém a largura visual de uma string: o número de colunas necessário para exibi-la.
- [cli-truncate](https://github.com/sindresorhus/cli-truncate) - Trunca uma string para uma largura específica no terminal.
- [blessed](https://github.com/chjj/blessed) - Biblioteca semelhante a Curses.
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - Prompt interativo de linha de comando.
- [yn](https://github.com/sindresorhus/yn) - Analisa valores no formato sim/não.
- [cli-table3](https://github.com/cli-table/cli-table3) - Tabelas Unicode bem formatadas.
- [drawille](https://github.com/madbence/node-drawille) - Desenha no terminal usando caracteres braille Unicode.
- [ascii-charts](https://github.com/jstrace/chart) - Gráfico de barras ASCII no terminal.
- [progress](https://github.com/visionmedia/node-progress) - Barra de progresso ASCII flexível.
- [insight](https://github.com/yeoman/insight) - Ajuda você a entender como sua ferramenta é usada, enviando anonimamente métricas de uso ao Google Analytics.
- [cli-cursor](https://github.com/sindresorhus/cli-cursor) - Alterna a visibilidade do cursor da CLI.
- [cli-columns](https://github.com/shannonmoeller/cli-columns) - Listas de texto organizadas em colunas, com Unicode e ANSI seguros.
- [cfonts](https://github.com/dominikwilkowski/cfonts) - Fontes ASCII incríveis para o console.
- [multispinner](https://github.com/codekirei/node-multispinner) - Vários indicadores de carregamento simultâneos, controláveis individualmente pela CLI.
- [omelette](https://github.com/f/omelette) - Auxiliar para autocompletar comandos no shell.
- [cross-env](https://github.com/kentcdodds/cross-env) - Define variáveis de ambiente de forma multiplataforma.
- [shelljs](https://github.com/shelljs/shelljs) - Comandos de shell Unix portáteis.
- [sudo-block](https://github.com/sindresorhus/sudo-block) - Impede que usuários executem seu aplicativo com permissões de root.
- [sparkly](https://github.com/sindresorhus/sparkly) - Gera minigráficos `▁▂▃▅▂▇`.
- [Bit](https://github.com/teambit/bit) - Crie, mantenha, encontre e use pequenos módulos e componentes entre repositórios.
- [gradient-string](https://github.com/bokub/gradient-string) - Gradientes de cores incríveis na saída do terminal.
- [oclif](https://github.com/oclif/oclif) - Framework completo para CLI, com analisador, documentação automática, testes e plugins.
- [terminal-size](https://github.com/sindresorhus/terminal-size) - Obtém com confiabilidade as dimensões da janela do terminal.
- [Cliffy](https://github.com/drew-y/cliffy) - Framework para CLIs interativas.
- [zx](https://github.com/google/zx) - Escreva scripts de shell em JavaScript.

### Ferramentas de build

- [parcel](https://github.com/parcel-bundler/parcel) - Empacotador de aplicativos web extremamente rápido e sem configuração.
- [webpack](https://github.com/webpack/webpack) - Empacota módulos e recursos para o navegador.
- [rollup](https://github.com/rollup/rollup) - Empacotador de módulos ES2015 de próxima geração.
- [gulp](https://github.com/gulpjs/gulp) - Sistema de compilação rápido baseado em streams que prioriza código em vez de configuração.
- [Broccoli](https://github.com/broccolijs/broccoli) - Fluxo de recursos rápido e confiável, com suporte a recompilações em tempo constante e definições de compilação compactas.
- [Brunch](https://github.com/brunch/brunch) - Ferramenta de compilação para aplicativos web de front-end, com configuração declarativa simples, compilação incremental rápida e fluxo de trabalho prescritivo.
- [FuseBox](https://github.com/fuse-box/fuse-box) - Sistema de compilação rápido que combina o poder do webpack, JSPM e SystemJS, com suporte de primeira classe a TypeScript.
- [pkg](https://github.com/vercel/pkg) - Empacota seu projeto Node.js em um executável.
- [Vite](https://github.com/vitejs/vite) - Ferramenta de compilação de front-end com substituição a quente de módulos e empacotamento de recursos estáticos.

### Hardware

- [johnny-five](https://github.com/rwaldron/johnny-five) - Framework Arduino baseado em Firmata.
- [serialport](https://github.com/serialport/node-serialport) - Acessa portas seriais para leitura e gravação.
- [usb](https://github.com/node-usb/node-usb) - Biblioteca USB.
- [i2c-bus](https://github.com/fivdi/i2c-bus) - Acesso ao barramento serial I2C.
- [onoff](https://github.com/fivdi/onoff) - Acesso a GPIO e detecção de interrupções.
- [spi-device](https://github.com/fivdi/spi-device) - Acesso ao barramento serial SPI.
- [pigpio](https://github.com/fivdi/pigpio) - GPIO de alta velocidade, PWM, controle de servos, notificações de mudança de estado e tratamento de interrupções no Raspberry Pi.
- [gps](https://github.com/infusion/GPS.js) - Analisador NMEA para lidar com receptores GPS.
- [modbus-serial](https://github.com/yaacov/node-modbus-serial) - Implementação pura em JavaScript do MODBUS-RTU (serial e TCP).

### Templates

- [marko](https://github.com/marko-js/marko) - Mecanismo de templates baseado em HTML que compila templates em módulos CommonJS e oferece suporte a streams, renderização assíncrona e tags personalizadas.
- [nunjucks](https://github.com/mozilla/nunjucks) - Mecanismo de templates com herança, controle assíncrono e muito mais, inspirado no Jinja2.
- [handlebars.js](https://github.com/handlebars-lang/handlebars.js) - Superset de templates Mustache que adiciona recursos avançados, como helpers e blocos mais sofisticados.
- [EJS](https://github.com/mde/ejs) - Linguagem de templates simples e sem opiniões rígidas.
- [Pug](https://github.com/pugjs/pug) - Mecanismo de templates de alto desempenho, fortemente influenciado pelo Haml.

### Frameworks web

- [Fastify](https://github.com/fastify/fastify) - Framework web rápido e com baixa sobrecarga.
- [Next.js](https://github.com/vercel/next.js) - Framework minimalista para aplicativos web universais em JavaScript renderizados no servidor.
- [Nuxt.js](https://github.com/nuxt/nuxt.js) - Framework minimalista para aplicativos Vue.js renderizados no servidor.
- [Hapi](https://github.com/hapijs/hapi) - Framework para criar aplicativos e serviços.
- [Micro](https://github.com/vercel/micro) - Framework minimalista de microsserviços com abordagem assíncrona.
- [Koa](https://github.com/koajs/koa) - Framework criado pela equipe por trás do Express, com o objetivo de oferecer uma base menor, mais expressiva e robusta para aplicativos web e APIs.
- [Express](https://github.com/expressjs/express) - Framework de aplicativos web com um conjunto robusto de recursos para criar aplicativos web de página única, multipágina e híbridos.
- [Feathers](https://github.com/feathersjs/feathers) - Framework de microsserviços inspirado no Express.
- [LoopBack](https://github.com/loopbackio/loopback-next) - Framework poderoso para criar APIs REST e conectar facilmente a fontes de dados de back-end.
- [Meteor](https://github.com/meteor/meteor) - Framework web em JavaScript puro, ultrassimples, com banco de dados em toda parte e dados transmitidos pela rede. *(Você também pode gostar de [awesome-meteor](https://github.com/Urigo/awesome-meteor))*
- [Restify](https://github.com/restify/node-restify) - Permite criar serviços web REST corretos.
- [ThinkJS](https://github.com/thinkjs/thinkjs) - Framework com suporte a ES2015+, WebSockets e API REST.
- [ActionHero](https://github.com/actionhero/actionhero) - Framework para criar APIs reutilizáveis e escaláveis para sockets TCP, WebSockets e clientes HTTP.
- [seneca](https://github.com/senecajs/seneca) - Kit de ferramentas para escrever microsserviços.
- [AdonisJs](https://github.com/adonisjs/core) - Framework MVC completo para Node.js, construído sobre fundamentos sólidos de injeção de dependências e contêiner IoC.
- [Moleculer](https://github.com/moleculerjs/moleculer) - Framework de microsserviços rápido e poderoso.
- [Nest](https://github.com/nestjs/nest) - Framework inspirado no Angular para criar aplicativos eficientes e escaláveis no servidor.
- [TypeGraphQL](https://github.com/MichalLytek/type-graphql) - Framework moderno para criar APIs GraphQL com TypeScript usando classes e decorators.
- [Tinyhttp](https://github.com/tinyhttp/tinyhttp) - Framework web moderno, rápido e semelhante ao Express.
- [Marble.js](https://github.com/marblejs/marble) - Framework reativo funcional para criar aplicativos no servidor, baseado em TypeScript e RxJS.
- [Lad](https://github.com/ladjs/lad) - Framework criado por um ex-integrante dos comitês técnicos do Express e do Koa, que reúne servidores web, API, tarefas e proxy.
- [Ts.ED](https://github.com/tsedio/tsed) - Framework TypeScript intuitivo para criar aplicativos no servidor sobre Express.js ou Koa.js.
- [Hono](https://github.com/honojs/hono) - Framework web pequeno e rápido.

### Documentação

- [documentation.js](https://github.com/documentationjs/documentation) - Gerador de documentação de API com suporte a ES2015+ e anotações de Flow.
- [Docco](https://github.com/jashkenas/docco) - Gerador de documentação que produz um documento HTML com comentários intercalados ao código.
- [JSDoc](https://github.com/jsdoc/jsdoc) - Gerador de documentação de API semelhante ao JavaDoc ou PHPDoc.
- [Docusaurus](https://github.com/facebook/docusaurus) - Gerador de sites de documentação que usa React e Markdown e inclui recursos de tradução e controle de versões.

### Sistema de arquivos

- [del](https://github.com/sindresorhus/del) - Exclui arquivos e pastas usando padrões glob.
- [globby](https://github.com/sindresorhus/globby) - Localiza arquivos com glob e oferece suporte a vários padrões.
- [chokidar](https://github.com/paulmillr/chokidar) - Observador de sistema de arquivos que estabiliza eventos de `fs.watch` e `fs.watchFile` e também usa o `fsevents` nativo no macOS.
- [find-up](https://github.com/sindresorhus/find-up) - Encontra um arquivo percorrendo os diretórios pais.
- [proper-lockfile](https://github.com/moxystudio/node-proper-lockfile) - Utilitário de bloqueio entre processos e máquinas.
- [load-json-file](https://github.com/sindresorhus/load-json-file) - Lê e analisa um arquivo JSON.
- [write-json-file](https://github.com/sindresorhus/write-json-file) - Serializa e grava um arquivo JSON de forma atômica.
- [fs-write-stream-atomic](https://github.com/npm/fs-write-stream-atomic) - Como `fs.createWriteStream()`, mas com gravação atômica.
- [filenamify](https://github.com/sindresorhus/filenamify) - Converte uma string em um nome de arquivo válido.
- [istextorbinary](https://github.com/bevry/istextorbinary) - Verifica se um arquivo é texto ou binário.
- [fs-jetpack](https://github.com/szwacz/fs-jetpack) - API de sistema de arquivos totalmente redesenhada para facilitar as tarefas do dia a dia.
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - Métodos adicionais para o módulo `fs`.
- [package-directory](https://github.com/sindresorhus/package-directory) - Encontra o diretório raiz de um pacote npm.
- [filehound](https://github.com/nspragg/filehound) - Interface flexível e encadeável para pesquisar o sistema de arquivos.
- [move-file](https://github.com/sindresorhus/move-file) - Move um arquivo, inclusive entre dispositivos.
- [tempy](https://github.com/sindresorhus/tempy) - Obtém o caminho de um arquivo ou diretório temporário aleatório.

### Fluxo de controle

- Promessas
	- [pify](https://github.com/sindresorhus/pify) - Converte uma função baseada em callback para usar Promises.
	- [delay](https://github.com/sindresorhus/delay) - Atrasa uma Promise pelo tempo especificado.
	- [promise-memoize](https://github.com/nodeca/promise-memoize) - Armazena em cache os resultados de funções que retornam Promises, com expiração e pré-busca.
	- [valvelet](https://github.com/lpinca/valvelet) - Limita a frequência de execução de uma função que retorna uma Promise.
	- [p-map](https://github.com/sindresorhus/p-map) - Mapeia Promises simultaneamente.
	- [Mais…](https://github.com/sindresorhus/promise-fun)
- Observáveis
	- [RxJS](https://github.com/ReactiveX/RxJS) - Programação reativa.
	- [observable-to-promise](https://github.com/sindresorhus/observable-to-promise) - Converte um Observable em uma Promise.
	- [Mais…](https://github.com/sindresorhus/awesome-observables)
- Fluxos
	- [Highland.js](https://github.com/caolan/highland) - Gerencia facilmente código síncrono e assíncrono usando apenas JavaScript padrão e streams no estilo do Node.

### Fluxos

- [get-stream](https://github.com/sindresorhus/get-stream) - Obtém um stream como string ou buffer.
- [from2](https://github.com/hughsk/from2) - Wrapper prático para ReadableStream, inspirado em `through2`.
- [into-stream](https://github.com/sindresorhus/into-stream) - Converte um buffer, string, array ou objeto em um stream.
- [duplexify](https://github.com/mafintosh/duplexify) - Transforma um stream gravável e um legível em um único stream duplex do Streams2.
- [pumpify](https://github.com/mafintosh/pumpify) - Combina um array de streams em um único stream duplex.
- [peek-stream](https://github.com/mafintosh/peek-stream) - Stream de transformação que permite espiar a primeira linha antes de decidir como analisá-la.
- [binary-split](https://github.com/maxogden/binary-split) - Stream que divide dados por quebras de linha (ou qualquer outro delimitador).
- [byline](https://github.com/jahewson/node-byline) - Leitor de streams extremamente simples, linha por linha.
- [first-chunk-stream](https://github.com/sindresorhus/first-chunk-stream) - Transforma o primeiro bloco de dados de um stream.
- [pad-stream](https://github.com/sindresorhus/pad-stream) - Adiciona preenchimento a cada linha de um stream.
- [multistream](https://github.com/feross/multistream) - Combina vários streams em um único stream.
- [readable-stream](https://github.com/nodejs/readable-stream) - Espelho das implementações Streams2 e Streams3 do núcleo.
- [through2-concurrent](https://github.com/almost/through2-concurrent) - Transforma streams de objetos simultaneamente.

### Tempo real

- [µWebSockets](https://github.com/uNetworking/uWebSockets) - Biblioteca de servidor e cliente WebSocket altamente escalável.
- [Socket.io](https://github.com/socketio/socket.io) - Habilita comunicação bidirecional em tempo real, baseada em eventos.
- [Faye](https://github.com/faye/faye) - Barramento de mensagens cliente-servidor em tempo real, baseado no protocolo Bayeux.
- [SocketCluster](https://github.com/SocketCluster/socketcluster) - Mecanismo escalável de HTTP + WebSocket que pode ser executado em vários núcleos de CPU.
- [Primus](https://github.com/primus/primus) - Camada de abstração para frameworks em tempo real, que evita dependência de um único módulo.
- [deepstream.io](https://github.com/deepstreamIO/deepstream.io-client-js) - Framework escalável de microsserviços em tempo real.
- [Kalm](https://github.com/kalm/kalm.js) - Framework de roteamento de sockets e middleware de baixo nível.
- [MQTT.js](https://github.com/mqttjs/MQTT.js) - Cliente MQTT: protocolo de mensagens baseado em publicação/assinatura para uso sobre TCP/IP.
- [rpc-websockets](https://github.com/elpheria/rpc-websockets) - Implementação de JSON-RPC 2.0 sobre WebSockets.
- [Aedes](https://github.com/moscajs/aedes) - Servidor MQTT básico que pode ser executado em qualquer servidor de streams.

### Imagem

- [sharp](https://github.com/lovell/sharp) - O módulo mais rápido para redimensionar imagens JPEG, PNG, WebP e TIFF.
- [image-type](https://github.com/sindresorhus/image-type) - Detecta o tipo de uma imagem.
- [image-dimensions](https://github.com/sindresorhus/image-dimensions) - Obtém as dimensões de uma imagem.
- [lwip](https://github.com/EyalAr/lwip) - Processador de imagens leve que não exige o ImageMagick.
- [pica](https://github.com/nodeca/pica) - Redimensionamento rápido e de alta qualidade (lanczos3) em JavaScript puro. Alternativa a canvas drawImage() quando não se pode permitir pixelização.
- [jimp](https://github.com/oliver-moran/jimp) - Processamento de imagens em JavaScript puro.
- [qrcode](https://github.com/soldair/node-qrcode) - Gerador de códigos QR e de barras.
- [ImageScript](https://github.com/matmen/ImageScript) - Processamento de imagens em JavaScript, usando WebAssembly para obter desempenho.

### Texto

- [iconv-lite](https://github.com/ashtuchkin/iconv-lite) - Converte codificações de caracteres.
- [string-length](https://github.com/sindresorhus/string-length) - Obtém o comprimento real de uma string, contando corretamente símbolos suplementares e ignorando códigos de escape ANSI.
- [camelcase](https://github.com/sindresorhus/camelcase) - Converte uma string separada por hífens, barras, sublinhados ou espaços para camelCase: foo-bar → fooBar.
- [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp) - Escapa os caracteres especiais de RegExp.
- [splice-string](https://github.com/sindresorhus/splice-string) - Remove ou substitui parte de uma string como `Array#splice`.
- [indent-string](https://github.com/sindresorhus/indent-string) - Indenta cada linha de uma string.
- [strip-indent](https://github.com/sindresorhus/strip-indent) - Remove os espaços em branco iniciais de todas as linhas de uma string.
- [detect-indent](https://github.com/sindresorhus/detect-indent) - Detecta a indentação do código.
- [he](https://github.com/mathiasbynens/he) - Codificador/decodificador de entidades HTML.
- [i18n-node](https://github.com/mashpie/i18n-node) - Módulo simples de tradução com armazenamento JSON dinâmico.
- [babelfish](https://github.com/nodeca/babelfish) - i18n com sintaxe muito simples para plurais.
- [matcher](https://github.com/sindresorhus/matcher) - Correspondência simples de padrões curinga.
- [unhomoglyph](https://github.com/nodeca/unhomoglyph) - Normaliza caracteres Unicode visualmente semelhantes.
- [i18next](https://github.com/i18next/i18next) - Framework de internacionalização.
- [nanoid](https://github.com/ai/nanoid) - Gerador minúsculo e seguro de IDs únicos em string, compatíveis com URLs.
- [StegCloak](https://github.com/kurolabs/stegcloak) - Oculta segredos em strings, à vista de todos.

### Número

- [random-int](https://github.com/sindresorhus/random-int) - Gera um número inteiro aleatório.
- [random-float](https://github.com/sindresorhus/random-float) - Gera um número de ponto flutuante aleatório.
- [unique-random](https://github.com/sindresorhus/unique-random) - Gera números aleatórios consecutivos e únicos.
- [round-to](https://github.com/sindresorhus/round-to) - Arredonda um número para uma quantidade específica de casas decimais: `1.234` → `1.2`.

### Matemática

- [ndarray](https://github.com/scijs/ndarray) - Arrays multidimensionais.
- [mathjs](https://github.com/josdejong/mathjs) - Biblioteca matemática abrangente.
- [math-clamp](https://github.com/sindresorhus/math-clamp) - Limita um número a um intervalo.
- [algebra](https://github.com/fibo/algebra) - Estruturas algébricas.
- [multimath](https://github.com/nodeca/multimath) - Base para criar cálculos rápidos de imagens em WebAssembly e JavaScript.

### Data

- [Luxon](https://github.com/moment/luxon) - Biblioteca para trabalhar com datas e horários.
- [date-fns](https://github.com/date-fns/date-fns) - Utilitários modernos para datas.
- [Day.js](https://github.com/iamkun/dayjs) - Biblioteca imutável para datas, alternativa ao Moment.js.
- [dateformat](https://github.com/felixge/node-dateformat) - Formatação de datas.
- [tz-format](https://github.com/samverschueren/tz-format) - Formata uma data com fuso horário: `2015-11-30T10:40:35+01:00`.
- [cctz](https://github.com/floatdrop/node-cctz) - Análise, formatação e conversão rápida de fuso horário para datas.

### URL

- [normalize-url](https://github.com/sindresorhus/normalize-url) - Normaliza uma URL.
- [humanize-url](https://github.com/sindresorhus/humanize-url) - Humaniza uma URL: https://sindresorhus.com → sindresorhus.com.
- [url-unshort](https://github.com/nodeca/url-unshort) - Expande URLs encurtadas.
- [speakingurl](https://github.com/pid/speakingurl) - Gera um slug a partir de uma string com transliteração.
- [linkify-it](https://github.com/markdown-it/linkify-it) - Detector de padrões de links com suporte completo a Unicode.
- [url-pattern](https://github.com/snd/url-pattern) - Correspondência de padrões de strings para URLs e outras strings, mais simples que expressões regulares.
- [embedza](https://github.com/nodeca/embedza) - Cria trechos/incorporações HTML a partir de URLs usando informações de oEmbed, Open Graph e metatags.

### Validação de dados

- [joi](https://github.com/sideway/joi) - Linguagem para descrever esquemas de objetos e validador de objetos JavaScript.
- [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) - Validador de JSON Schema que usa geração de código para obter alto desempenho.
- [property-validator](https://github.com/nettofarah/property-validator) - Validação simples de propriedades para Express.
- [schema-inspector](https://github.com/schema-inspector/schema-inspector) - Sanitização e validação de APIs JSON.
- [ajv](https://github.com/ajv-validator/ajv) - O validador de JSON Schema mais rápido. Oferece suporte às propostas v5, v6 e v7.
- [Superstruct](https://github.com/ianstormtaylor/superstruct) - Maneira simples e composável de validar dados em JavaScript e TypeScript.
- [yup](https://github.com/jquense/yup) - Validação de esquemas de objetos.
- [zod](https://github.com/colinhacks/zod) - Validação de esquemas com TypeScript em primeiro lugar e inferência de tipos estática.

### Análise sintática

- [remark](https://github.com/remarkjs/remark) - Processador de Markdown baseado em plugins.
- [markdown-it](https://github.com/markdown-it/markdown-it) - Analisador de Markdown com suporte total ao CommonMark, extensões e plugins de sintaxe.
- [parse5](https://github.com/inikulin/parse5) - Analisador de HTML rápido, completo e compatível com a especificação.
- [@parcel/css](https://github.com/parcel-bundler/parcel-css) - Analisador, transformador e minificador de CSS escrito em Rust.
- [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) - Remove comentários de JSON.
- [strip-css-comments](https://github.com/sindresorhus/strip-css-comments) - Remove comentários de CSS.
- [parse-json](https://github.com/sindresorhus/parse-json) - Analisa JSON e fornece mensagens de erro mais úteis.
- [URI.js](https://github.com/medialize/URI.js) - Modificação de URLs.
- [JSONStream](https://github.com/dominictarr/JSONStream) - Análise e serialização de JSON em streams.
- [neat-csv](https://github.com/sindresorhus/neat-csv) - Analisador rápido de CSV, com interface de callback para o anterior.
- [csv-parser](https://github.com/mafintosh/csv-parser) - Analisador de CSV em streaming que busca superar todos os outros em velocidade.
- [PEG.js](https://github.com/pegjs/pegjs) - Gerador de analisadores simples que produz analisadores rápidos com excelentes mensagens de erro.
- [x-ray](https://github.com/matthewmueller/x-ray) - Utilitário para extração de dados da web.
- [nearley](https://github.com/kach/nearley) - Analisador simples, rápido e poderoso para JavaScript.
- [binary-extract](https://github.com/juliangruber/binary-extract) - Extrai um valor de um buffer JSON sem analisar o documento inteiro.
- [Stylecow](https://github.com/stylecow/stylecow) - Analisa, manipula e converte CSS moderno para compatibilidade com todos os navegadores. Extensível com plugins.
- [js-yaml](https://github.com/nodeca/js-yaml) - Analisador YAML muito rápido.
- [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - Conversor de XML para objetos JavaScript.
- [Jison](https://github.com/zaach/jison) - Gerador de analisadores JavaScript amigável, com a mesma origem que Bison, Yacc e projetos semelhantes.
- [google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber) - Analisa, formata, armazena e valida números de telefone.
- [ref](https://github.com/TooTallNate/ref) - Lê e grava dados binários estruturados em Buffers.
- [xlsx-populate](https://github.com/dtjohnson/xlsx-populate) - Lê e grava arquivos Excel XLSX.
- [Chevrotain](https://github.com/Chevrotain/chevrotain) - Kit de ferramentas muito rápido e completo para criar analisadores JavaScript.
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) - Valida e analisa XML.

### Humanização

- [pretty-bytes](https://github.com/sindresorhus/pretty-bytes) - Converte bytes em uma string legível por humanos: `1337` → `1.34 kB`.
- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - Converte milissegundos em uma string legível por humanos: `1337000000` → `15d 11h 23m 20s`.
- [ms](https://github.com/vercel/ms) - Utilitário minúsculo de conversão de milissegundos.
- [pretty-error](https://github.com/AriaMinaei/pretty-error) - Erros com menos poluição visual.
- [read-art](https://github.com/Tjatse/node-readability) - Extrai conteúdo legível de qualquer página.

### Compactação

- [yazl](https://github.com/thejoshwolfe/yazl) - Compactação ZIP.
- [yauzl](https://github.com/thejoshwolfe/yauzl) - Descompactação ZIP.
- [Archiver](https://github.com/archiverjs/node-archiver) - Interface de streaming para gerar arquivos compactados, com suporte a ZIP e TAR.
- [pako](https://github.com/nodeca/pako) - Port de alta velocidade do zlib para JavaScript puro (deflate, inflate, gzip).
- [tar-stream](https://github.com/mafintosh/tar-stream) - Analisador e gerador de TAR em streaming. Veja também [tar-fs](https://github.com/mafintosh/tar-fs).

### Rede

- [get-port](https://github.com/sindresorhus/get-port) - Obtém uma porta disponível.
- [ipify](https://github.com/sindresorhus/ipify) - Obtém seu endereço IP público.
- [getmac](https://github.com/bevry/getmac) - Obtém o endereço MAC do computador.
- [DHCP](https://github.com/infusion/node-dhcp) - Cliente e servidor DHCP.
- [netcat](https://github.com/roccomuso/netcat) - Implementação do Netcat em JavaScript puro.

### Banco de dados

- Conectores de banco de dados
	- [PostgreSQL](https://github.com/brianc/node-postgres) - Cliente PostgreSQL em JavaScript puro e com bindings nativos para libpq.
	- [Redis](https://github.com/luin/ioredis) - Cliente Redis.
	- [LevelUP](https://github.com/Level/levelup) - Banco de dados LevelDB.
	- [MySQL](https://github.com/mysqljs/mysql) - Cliente MySQL.
	- [couchdb-nano](https://github.com/apache/couchdb-nano) - Cliente CouchDB.
	- [Aerospike](https://github.com/aerospike/aerospike-client-nodejs) - Cliente Aerospike.
	- [Couchbase](https://github.com/couchbase/couchnode) - Cliente Couchbase.
	- [MongoDB](https://github.com/mongodb/node-mongodb-native) - Driver MongoDB.
- ODM / ORM
	- [Sequelize](https://github.com/sequelize/sequelize) - ORM multidialeto, com suporte a PostgreSQL, SQLite, MySQL e outros.
	- [Bookshelf](https://github.com/bookshelf/bookshelf) - ORM para PostgreSQL, MySQL e SQLite3 no estilo do Backbone.js.
	- [Mongoose](https://github.com/Automattic/mongoose) - Modelagem elegante de objetos MongoDB.
	- [Waterline](https://github.com/balderdashy/waterline) - Ferramenta independente do armazenamento de dados que simplifica drasticamente a interação com um ou mais bancos de dados.
	- [OpenRecord](https://github.com/PhilWaldmann/openrecord) - ORM para PostgreSQL, MySQL, SQLite3 e armazenamentos RESTful. Semelhante ao ActiveRecord.
	- [pg-promise](https://github.com/vitaly-t/pg-promise) - Framework PostgreSQL para SQL nativo com Promises.
	- [slonik](https://github.com/gajus/slonik) - Cliente PostgreSQL com tipos rigorosos, logs detalhados e asserções.
	- [Objection.js](https://github.com/Vincit/objection.js) - ORM leve construído sobre o construtor de consultas SQL Knex.
	- [TypeORM](https://github.com/typeorm/typeorm) - ORM para PostgreSQL, MariaDB, MySQL, SQLite e outros.
	- [MikroORM](https://github.com/mikro-orm/mikro-orm) - ORM para TypeScript baseado nos padrões Data Mapper, Unit of Work e Identity Map. Compatível com MongoDB, PostgreSQL, MySQL e SQLite.
	- [Prisma](https://github.com/prisma/prisma) - Acesso moderno a bancos de dados (alternativa a ORM). Construtor de consultas TypeScript, seguro em relação a tipos e gerado automaticamente. Compatível com PostgreSQL, MySQL e SQLite.
 	- [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) - ORM para TypeScript compatível com vários bancos de dados, como PostgreSQL.
- Construtores de consultas
	- [Knex](https://github.com/knex/knex) - Construtor de consultas para PostgreSQL, MySQL e SQLite3, projetado para ser flexível, portátil e agradável de usar.
- Outros
	- [NeDB](https://github.com/louischatriot/nedb) - Banco de dados persistente embarcado, escrito em JavaScript.
	- [Lowdb](https://github.com/typicode/lowdb) - Pequeno banco de dados JavaScript baseado no Lodash.
	- [Keyv](https://github.com/jaredwray/keyv) - Armazenamento simples de chave-valor com suporte a vários back-ends.
	- [Finale](https://github.com/tommybananas/finale) - Gerador de endpoints RESTful para seus modelos Sequelize.
	- [database-js](https://github.com/mlaanderson/database-js) - Wrapper para vários bancos de dados com uma conexão semelhante à do JDBC.
	- [Mongo Seeding](https://github.com/pkosiec/mongo-seeding) - Popula bancos MongoDB com JavaScript e arquivos JSON.
	- [@databases](https://github.com/ForbesLindesay/atdatabases) - Consulta PostgreSQL, MySQL e SQLite3 com SQL puro, sem risco de injeção de SQL.
	- [pg-mem](https://github.com/oguimbal/pg-mem) - Instância PostgreSQL em memória para seus testes.

### Testes

- [AVA](https://github.com/avajs/ava) - Executor de testes futurista.
- [Mocha](https://github.com/mochajs/mocha) - Framework de testes completo que torna os testes assíncronos simples e divertidos.
- [nyc](https://github.com/istanbuljs/nyc) - Ferramenta de cobertura de código baseada no istanbul, compatível com subprocessos.
- [tap](https://github.com/tapjs/node-tap) - Framework de testes TAP.
- [tape](https://github.com/substack/tape) - Harness de testes que produz TAP.
- [power-assert](https://github.com/power-assert-js/power-assert) - Fornece mensagens descritivas para asserções por meio da interface assert padrão.
- [Mochify](https://github.com/mantoni/mochify.js) - TDD com Browserify, Mocha, PhantomJS e WebDriver.
- [trevor](https://github.com/vadimdemedes/trevor) - Executa testes em várias versões do Node.js sem precisar alternar versões manualmente nem enviar código ao Travis CI.
- [loadtest](https://github.com/alexfernandez/loadtest) - Executa testes de carga para seu aplicativo web, com uma API para automação.
- [Sinon.JS](https://github.com/sinonjs/sinon) - Spies, stubs e mocks para testes.
- [navit](https://github.com/nodeca/navit) - Wrapper para PhantomJS / SlimerJS que simplifica scripts de testes em navegadores.
- [Nock](https://github.com/nock/nock) - Simulação de HTTP e verificações de expectativas.
- [intern](https://github.com/theintern/intern) - Pilha de ferramentas para testes de código.
- [toxy](https://github.com/h2non/toxy) - Proxy HTTP modificável para simular cenários de falha e condições de rede.
- [hook-std](https://github.com/sindresorhus/hook-std) - Intercepta e modifica stdout/stderr.
- [testen](https://github.com/egoist/testen) - Executa localmente testes em várias versões do Node.js usando NVM.
- [Nightwatch](https://github.com/nightwatchjs/nightwatch) - Framework de testes automatizados de interface baseado no Selenium WebDriver.
- [WebdriverIO](https://github.com/webdriverio/webdriverio) - Testes automatizados baseados no protocolo WebDriver.
- [Jest](https://github.com/facebook/jest) - Testes JavaScript sem complicações.
- [Vitest](https://github.com/vitest-dev/vitest) - Framework rápido para testes unitários, baseado no Vite.
- [TestCafe](https://github.com/DevExpress/testcafe) - Testes automatizados em navegadores.
- [abstruse](https://github.com/bleenco/abstruse) - Servidor de integração contínua.
- [CodeceptJS](https://github.com/codeceptjs/CodeceptJS) - Testes de ponta a ponta.
- [Puppeteer](https://github.com/puppeteer/puppeteer) - Chrome sem interface gráfica.
- [Playwright](https://github.com/microsoft/playwright) - Chromium, WebKit e Firefox sem interface gráfica, por meio de uma única API.
- [nve](https://github.com/ehmicky/nve) - Executa qualquer comando localmente em várias versões do Node.js.
- [axe-core](https://github.com/dequelabs/axe-core) - Mecanismo de acessibilidade para testes automatizados de interfaces web.
- [testcontainers-node](https://github.com/testcontainers/testcontainers-node) - Fornece instâncias descartáveis e leves de bancos de dados comuns, navegadores Selenium ou qualquer outro serviço executável em um contêiner Docker.

### Segurança

- [upash](https://github.com/simonepri/upash) - API unificada para todos os algoritmos de hash de senhas.
- [themis](https://github.com/cossacklabs/themis) - Framework multilíngue que facilita o uso de esquemas de criptografia comuns: dados em repouso, troca autenticada de dados, proteção de transporte, autenticação e outros.
- [GuardRails](https://github.com/apps/guardrails) - Aplicativo do GitHub que fornece feedback de segurança em pull requests.
- [rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible) - Proteção contra ataques de força bruta e DDoS.
- [crypto-hash](https://github.com/sindresorhus/crypto-hash) - Hash assíncrono e não bloqueante.
- [jose-simple](https://github.com/davesag/jose-simple) - Criptografa e descriptografa dados usando o padrão JOSE (JSON Object Signing and Encryption).

### Benchmarking

- [Benchmark.js](https://github.com/bestiejs/benchmark.js) - Biblioteca de benchmarking compatível com temporizadores de alta resolução e que produz resultados estatisticamente significativos.

### Minificadores

- [babel-minify](https://github.com/babel/minify) - Minificador compatível com ES2015+, baseado na cadeia de ferramentas do Babel.
- [UglifyJS2](https://github.com/mishoo/UglifyJS) - Minificador de JavaScript.
- [clean-css](https://github.com/clean-css/clean-css) - Minificador de CSS.
- [minimize](https://github.com/Swaagie/minimize) - Minificador de HTML.
- [imagemin](https://github.com/imagemin/imagemin) - Minificador de imagens.

### Autenticação

- [Passport](https://github.com/jaredhanson/passport) - Autenticação simples e discreta.
- [Grant](https://github.com/simov/grant) - Provedores OAuth para Express, Koa, Hapi, Fastify, AWS Lambda, Azure, Google Cloud, Vercel e muitos outros.

### Autorização

- [CASL](https://github.com/stalniy/casl) - Autorização isomórfica para interfaces e APIs.
- [node-casbin](https://github.com/casbin/node-casbin) - Biblioteca de autorização compatível com modelos de controle de acesso como ACL, RBAC e ABAC.

### E-mail

- [Nodemailer](https://github.com/nodemailer/nodemailer) - A maneira mais rápida de lidar com e-mails.
- [emailjs](https://github.com/eleith/emailjs) - Envia e-mails de texto/HTML com anexos para qualquer servidor SMTP.
- [email-templates](https://github.com/forwardemail/email-templates) - Cria, visualiza e envia modelos de e-mail personalizados.
- [MJML](https://github.com/mjmlio/mjml) - Linguagem de marcação criada para reduzir as dificuldades de criar e-mails responsivos.
- [Forward Email](https://github.com/forwardemail/forwardemail.net) - Serviço de e-mail de código aberto e auto-hospedável.

### Filas de tarefas

- [bull](https://github.com/OptimalBits/bull) - Fila persistente de tarefas e mensagens.
- [agenda](https://github.com/agenda/agenda) - Agendamento de tarefas com tecnologia MongoDB.
- [idoit](https://github.com/nodeca/idoit) - Mecanismo de filas de tarefas baseado em Redis, com controle avançado de tarefas.
- [node-resque](https://github.com/actionhero/node-resque) - Fila de tarefas baseada em Redis.
- [rsmq](https://github.com/smrchy/rsmq) - Fila de mensagens baseada em Redis.
- [bee-queue](https://github.com/bee-queue/bee-queue) - Fila de tarefas baseada em Redis e de alto desempenho.
- [RedisSMQ](https://github.com/weyoss/redis-smq) - Fila de mensagens Redis simples e de alto desempenho, com monitoramento em tempo real.
- [sqs-consumer](https://github.com/bbc/sqs-consumer) - Crie aplicativos baseados no Amazon Simple Queue Service (SQS) sem código repetitivo.
- [better-queue](https://github.com/diamondio/better-queue) - Fila de tarefas simples e eficiente para quando não é possível usar Redis.
- [bullmq](https://github.com/taskforcesh/bullmq) - Fila persistente de tarefas e mensagens.
- [bree](https://github.com/breejs/bree) - Agendador de tarefas com suporte a worker threads, cron, datas e sintaxe natural.
- [graphile-worker](https://github.com/graphile/worker) - Fila de tarefas de alto desempenho para PostgreSQL.

### Gerenciamento do Node.js

- [n](https://github.com/tj/n) - Gerenciamento de versões do Node.js.
- [nave](https://github.com/isaacs/nave) - Ambientes virtuais para Node.js.
- [nodeenv](https://github.com/ekalinin/nodeenv) - Ambiente virtual para Node.js compatível com o virtualenv do Python.
- [nvm for Windows](https://github.com/coreybutler/nvm-windows) - Gerenciamento de versões para Windows.
- [nodenv](https://github.com/nodenv/nodenv) - Gerenciador de versões semelhante ao rbenv do Ruby. Oferece troca automática de versões.
- [fnm](https://github.com/Schniz/fnm) - Gerenciador multiplataforma de versões do Node.js, escrito em Rust.

### Integração multiplataforma

- [napi-rs](https://github.com/napi-rs/napi-rs) - Framework para criar add-ons compilados do Node.js em Rust por meio da Node-API.
- [Neon](https://github.com/neon-bindings/neon) - Bindings Rust para escrever módulos nativos do Node.js seguros e rápidos.
- [Edge.js](https://github.com/agracio/edge-js) - Executa código .NET e Node.js no mesmo processo em Windows, macOS e Linux.
- [DotNetJS](https://github.com/Elringus/DotNetJS) - Consuma bibliotecas .NET no Node.js usando esta camada de interoperabilidade com .NET.

### Processamento de linguagem natural

- [retext](https://github.com/retextjs/retext) - Sistema extensível de processamento de linguagem natural.
- [franc](https://github.com/wooorm/franc) - Detecta o idioma de um texto.
- [leven](https://github.com/sindresorhus/leven) - Mede a diferença entre duas strings usando o algoritmo de distância de Levenshtein.
- [natural](https://github.com/NaturalNode/natural) - Recursos de processamento de linguagem natural.
- [nlp.js](https://github.com/axa-group/nlp.js) - Criação de bots com extração de entidades, análise de sentimentos, identificação automática de idiomas e muito mais.

### Gerenciamento de processos

- [PM2](https://github.com/Unitech/pm2) - Gerenciador avançado de processos.
- [nodemon](https://github.com/remy/nodemon) - Monitora alterações no seu aplicativo e reinicia o servidor automaticamente.
- [node-mac](https://github.com/coreybutler/node-mac) - Executa scripts como daemon nativo do Mac e registra as mensagens no aplicativo Console.
- [node-linux](https://github.com/coreybutler/node-linux) - Executa scripts como serviço nativo do sistema e registra as mensagens no syslog.
- [node-windows](https://github.com/coreybutler/node-windows) - Executa scripts como serviço nativo do Windows e registra as mensagens no Visualizador de Eventos.
- [supervisor](https://github.com/petruisfan/node-supervisor) - Reinicia scripts quando travam ou quando um arquivo `*.js` é alterado.
- [Phusion Passenger](https://github.com/phusion/passenger) - Gerenciador de processos amigável que se integra diretamente ao Nginx.

### Automação

- [robotjs](https://github.com/octalmage/robotjs) - Automação de desktop: controla o mouse e o teclado e lê a tela.
- [nut.js](https://github.com/nut-tree/nut.js) - Framework multiplataforma de automação e testes de interfaces gráficas nativas, com correspondência de imagens e integração com Jest.

### AST

- [Acorn](https://github.com/acornjs/acorn) - Analisador de JavaScript pequeno e rápido.
- [babel-parser](https://github.com/babel/babel/tree/master/packages/babel-parser) - Analisador de JavaScript usado no Babel.

### Geradores de sites estáticos

- [DocPad](https://github.com/docpad/docpad) - Gerador de sites estáticos com recursos dinâmicos e um enorme ecossistema de plugins.
- [docsify](https://github.com/docsifyjs/docsify) - Gerador de sites de documentação em Markdown que não precisa gerar arquivos HTML estáticos.
- [Charge](https://github.com/brandonweiss/charge) - Gerador de sites estáticos opinativo e sem configuração, que usa JSX e MDX.

### Sistemas de gerenciamento de conteúdo

- [KeystoneJS](https://github.com/keystonejs/keystone) - CMS e plataforma de aplicativos web construídos com Express e MongoDB.
- [ApostropheCMS](https://github.com/apostrophecms/apostrophe) - Sistema de gerenciamento de conteúdo com foco na edição e administração intuitivas de conteúdo no front-end, construído com Express e MongoDB.
- [Strapi](https://github.com/strapi/strapi) - Framework de gerenciamento de conteúdo (CMS headless) para criar APIs poderosas.
- [Factor](https://github.com/FactorJS/factor) - Framework de painéis administrativos em Vue.js e CMS headless.
- [AdminBro](https://github.com/SoftwareBrothers/adminjs) - Painel administrativo gerado automaticamente, com operações CRUD para todos os seus recursos.
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - CMS e API GraphQL headless.

### Fórum

- [nodeBB](https://github.com/NodeBB/NodeBB) - Plataforma de fóruns para a web moderna.

### Blog

- [Ghost](https://github.com/TryGhost/Ghost) - Plataforma de publicação simples e poderosa.
- [Hexo](https://github.com/hexojs/hexo) - Framework de blogs rápido, simples e poderoso.

### Estranho

- [cows](https://github.com/sindresorhus/cows) - Vacas em ASCII.
- [superb](https://github.com/sindresorhus/superb) - Obtém palavras que significam incrível.
- [cat-names](https://github.com/sindresorhus/cat-names) - Obtém nomes populares para gatos.
- [dog-names](https://github.com/sindresorhus/dog-names) - Obtém nomes populares para cães.
- [superheroes](https://github.com/sindresorhus/superheroes) - Obtém nomes de super-heróis.
- [supervillains](https://github.com/sindresorhus/supervillains) - Obtém nomes de supervilões.
- [cool-ascii-faces](https://github.com/maxogden/cool-ascii-faces) - Obtém rostos ASCII legais.
- [cat-ascii-faces](https://github.com/melaniecebula/cat-ascii-faces) - `₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛ (=ↀωↀ=)✧ (^･o･^)ﾉ”`.
- [nerds](https://github.com/SkyHacks/nerds) - Obtém dados de temas nerds como Harry Potter, Star Wars e Pokémon.

### Serialização

- [snappy](https://github.com/kesla/node-snappy) - Bindings nativos para a biblioteca de compressão Snappy do Google.
- [protobuf](https://github.com/protobufjs/protobuf.js) - Implementação de Protocol Buffers.
- [compactr](https://github.com/compactr/compactr.js) - Implementação do protocolo Compactr.

### Diversos

- [execa](https://github.com/sindresorhus/execa) - Uma alternativa melhor a `child_process`.
- [cheerio](https://github.com/cheeriojs/cheerio) - Implementação rápida, flexível e enxuta do núcleo do jQuery, criada especificamente para o servidor.
- [open](https://github.com/sindresorhus/open) - Abre itens como sites, arquivos e executáveis.
- [hasha](https://github.com/sindresorhus/hasha) - Simplifica a geração de hashes. Obtém o hash de um buffer, string, stream ou arquivo.
- [dot-prop](https://github.com/sindresorhus/dot-prop) - Obtém uma propriedade de um objeto aninhado usando um caminho com pontos.
- [onetime](https://github.com/sindresorhus/onetime) - Executa uma função apenas uma vez.
- [mem](https://github.com/sindresorhus/mem) - Armazena funções em cache, uma técnica de otimização que acelera chamadas consecutivas ao reutilizar resultados para entradas idênticas.
- [strip-bom](https://github.com/sindresorhus/strip-bom) - Remove a marca de ordem de bytes (BOM) UTF-8 de uma string, buffer ou stream.
- [os-locale](https://github.com/sindresorhus/os-locale) - Obtém a localidade do sistema.
- [ssh2](https://github.com/mscdex/ssh2) - Módulo cliente e servidor SSH2.
- [adit](https://github.com/markelog/adit) - Túneis SSH sem complicação.
- [file-type](https://github.com/sindresorhus/file-type) - Detecta o tipo de arquivo de um Buffer.
- [Bottleneck](https://github.com/SGrondin/bottleneck) - Limitador de taxa que facilita o controle de frequência.
- [webworker-threads](https://github.com/audreyt/node-webworker-threads) - Implementação leve da API Web Worker com threads nativas.
- [clipboardy](https://github.com/sindresorhus/clipboardy) - Acessa a área de transferência do sistema (copiar/colar).
- [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) - Facilita a publicação e a instalação de add-ons C++ do Node.js a partir de binários.
- [opencv](https://github.com/peterbraden/node-opencv) - Bindings para OpenCV, a biblioteca de visão computacional de fato.
- [dotenv](https://github.com/motdotla/dotenv) - Carrega variáveis de ambiente de um arquivo .env.
- [semver](https://github.com/npm/node-semver) - Analisador de versões semânticas.
- [nodegit](https://github.com/nodegit/nodegit) - Bindings nativos para Git.
- [json-strictify](https://github.com/pigulla/json-strictify) - Serializa valores em JSON com segurança, sem perda de dados nem risco de loop infinito.
- [jsdom](https://github.com/jsdom/jsdom) - Implementação de HTML e do DOM em JavaScript.
- [@sindresorhus/is](https://github.com/sindresorhus/is) - Verifica os tipos de valores.
- [env-dot-prop](https://github.com/simonepri/env-dot-prop) - Obtém, define ou exclui propriedades aninhadas de process.env usando um caminho com pontos.
- [node-video-lib](https://github.com/gkozlenko/node-video-lib) - Biblioteca JavaScript pura para trabalhar com arquivos de vídeo MP4 e FLV e criar fragmentos MPEG-TS para streaming HLS.
- [basic-ftp](https://github.com/patrickjuchli/basic-ftp) - Cliente FTP/FTPS.
- [cashify](https://github.com/xxczaki/cashify) - Conversão de moedas.
- [genepi](https://github.com/Geode-solutions/genepi) - Gera automaticamente um add-on nativo do Node.js a partir de código C++.
- [husky](https://github.com/typicode/husky) - Cria scripts de hooks do Git.
- [patch-package](https://github.com/ds300/patch-package) - Cria e preserva correções para dependências npm.
- [editly](https://github.com/mifi/editly) - API declarativa para edição de vídeos.
- [wild-wild-path](https://github.com/ehmicky/wild-wild-path) - Caminhos de propriedades de objetos com curingas e expressões regulares.
- [uint8array-extras](https://github.com/sindresorhus/uint8array-extras) - Utilitários úteis para trabalhar com Uint8Array e Buffer.

## Gerenciador de pacotes

- [npm](https://docs.npmjs.com/about-npm) - O gerenciador de pacotes padrão.
- [pnpm](https://pnpm.io) - Gerenciador de pacotes que economiza espaço em disco.
- [yarn](https://yarnpkg.com) - Gerenciador de pacotes alternativo.
- [bun](https://bun.sh) - Kit de ferramentas completo para aplicativos JavaScript e TypeScript.

## Recursos

### Tutoriais

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) - Resumo e seleção dos conteúdos mais bem avaliados sobre as melhores práticas de Node.js, disponíveis em vários idiomas.
- [Nodeschool](https://github.com/nodeschool) - Aprenda Node.js com lições interativas.
- [The Art of Node](https://github.com/maxogden/art-of-node/#the-art-of-node) - Uma introdução ao Node.js.
- [module-best-practices](https://github.com/mattdesl/module-best-practices) - Boas práticas para escrever novos módulos npm.
- [The Node Way](https://github.com/FredKSchott/the-node-way) - Existe toda uma filosofia de boas práticas e princípios orientadores para Node.js, voltada à criação de módulos fáceis de manter, aplicativos escaláveis e código realmente agradável de ler.
- [You Don't Know Node.js](https://github.com/azat-co/you-dont-know-node) - Introdução aos recursos essenciais do Node.js e ao JavaScript assíncrono.
- [Portable Node.js guide](https://github.com/ehmicky/cross-platform-node-guide) - Guia prático sobre como escrever código Node.js portátil e multiplataforma.
- [Build a real web app with no frameworks](https://frameworkless.js.org/course) - Série de tutoriais em vídeo e transmissões ao vivo para ajudar você a criar e implantar um aplicativo web real usando algumas bibliotecas simples e os módulos essenciais do Node.js.

### Descoberta

- [npms](https://npms.io) - Excelente mecanismo de busca de pacotes, com análise aprofundada da qualidade por meio de uma [infinidade de métricas](https://npms.io/about).
- [npm addict](https://npmaddict.com) - Sua dose diária de pacotes npm.

### Artigos

- [Error Handling in Node.js](https://sematext.com/blog/node-js-error-handling/)
- [Teach Yourself Node.js in 10 Steps](https://ponyfoo.com/articles/teach-yourself-nodejs-in-10-steps)
- [Mastering the filesystem in Node.js](https://medium.com/@yoshuawuyts/mastering-the-filesystem-in-node-js-4706b7cb0801)
- [Semver: A Primer](https://nodesource.com/blog/semver-a-primer/)
- [Semver: Tilde and Caret](https://nodesource.com/blog/semver-tilde-and-caret/)
- [Why Asynchronous?](https://nodesource.com/blog/why-asynchronous/)
- [Understanding the Node.js Event Loop](https://nodesource.com/blog/understanding-the-nodejs-event-loop/)
- [Understanding Object Streams](https://nodesource.com/blog/understanding-object-streams/)
- [Using Express to Quickly Build a GraphQL Server](https://snipcart.com/blog/graphql-nodejs-express-tutorial)

### Boletins informativos

- [Node Weekly](https://nodeweekly.com) - Compilado semanal de notícias e artigos sobre Node.js por e-mail.

### Vídeos

- [Introduction to Node.js with Ryan Dahl](https://www.youtube.com/watch?v=jo_B4LTHi3I)
- [Hands on with Node.js](https://learn.bevry.me/hands-on-with-node.js/preface)
- [V8 Garbage Collector](https://v8.dev/blog/trash-talk) - Conversa sobre o coletor de lixo do V8.
- [10 Things I Regret About Node.js by Ryan Dahl](https://www.youtube.com/watch?v=M3BM9TB-8yA) - Palestra esclarecedora do criador do Node.js sobre algumas de suas limitações.
- [Mastering REST APIs in Node.js: Zero-To-Hero](https://www.manning.com/livevideo/mastering-rest-apis-in-nodejs) - Curso em vídeo sobre como criar APIs REST usando Node.js.
- [Make a vanilla Node.js REST API](https://www.youtube.com/watch?v=_1xa8Bsho6A) - Criação de uma API REST sem usar um framework como o Express.
- [Google I/O 2009 - V8: High Performance JavaScript Engine](https://www.youtube.com/watch?v=FrufJFBSoQY) - Noções básicas da arquitetura do V8 e de como ela otimiza a execução de JavaScript.
- [Google I/O 2012 - Breaking the JavaScript Speed Limit with V8](https://www.youtube.com/watch?v=UJPdhx5zTaw) - Como o V8 otimiza a execução de JavaScript.
- [Google I/O 2013 - Accelerating Oz with V8: Follow the Yellow Brick Road to JavaScript Performance](https://www.youtube.com/watch?v=VhpdsjBUS3g) - Como detectar gargalos em aplicativos e otimizar o desempenho com os conhecimentos sobre o V8.
- [Node.js Internal Architecture | Ignition, Turbofan, Libuv](https://www.youtube.com/watch?v=OCjvhCFFPTw) - Como o Node.js funciona internamente, com foco no V8 e no libuv.
- [Introduction to libuv: What's a Unicorn Velociraptor?](https://www.youtube.com/watch?v=_c51fcXRLGw) - Arquitetura do `libuv`, pool de threads e loop de eventos, com análise do código-fonte.
- [libuv Cross platform asynchronous i/o](https://www.youtube.com/watch?v=kCJ3PFU8Ke8) - Arquitetura do `libuv` em detalhes, incluindo onde ele realmente usa threads.
- [You Don't Know Node - ForwardJS San Francisco](https://www.youtube.com/watch?v=oPo4EQmkjvY) - Explicação dos componentes internos do Node.js, com perguntas sobre V8, libuv, loop de eventos, módulos, streams e clusters.

### Livros

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
- [webapplog.com](https://webapplog.com/tag/node-js/) - Publicações sobre Node.js e JavaScript do autor de Practical Node.js e Pro Express.js, Azat Mardan.

### Cursos

- [Learn to build apps and APIs with Node.js](https://learnnode.com/friend/AWESOME) - Curso em vídeo de Wes Bos.
- [Real Time Web with Node.js](https://www.pluralsight.com/courses/code-school-real-time-web-with-nodejs)
- [Learn and Understand Node.js](https://www.udemy.com/course/understand-nodejs/)
- [Node.js Full Stack Developer Course](https://kinsta.com/academy/course/node-js-full-stack-developer/)

### Guias rápidos

- [Express.js](https://github.com/azat-co/cheatsheets/tree/master/express4)
- [Stream FAQs](https://github.com/stephenplusplus/stream-faqs) - Respostas a perguntas frequentes sobre streams, incluindo paginação, eventos e muito mais.
- [Strong Node.js](https://github.com/jesusprubio/strong-node) - Lista de verificação para análise de segurança do código-fonte de um serviço web Node.js.

### Ferramentas

- [OctoLinker](https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp) - Extensão do Chrome que transforma em links as dependências em arquivos package.json, .js, .jsx, .coffee e .md no GitHub.
- [npm-hub](https://chrome.google.com/webstore/detail/npmhub/kbbbjimdjbjclaebffknlabpogocablj) - Extensão do Chrome que exibe as dependências npm no fim do README de um repositório.
- [RunKit](https://runkit.com) - Incorpora um ambiente Node.js em qualquer site.
- [github-npm-stats](https://chrome.google.com/webstore/detail/github-npm-stats/oomfflokggoffaiagenekchfnpighcef) - Extensão do Chrome que exibe estatísticas de downloads npm no GitHub.
- [npm semver calculator](https://semver.npmjs.com) - Explore visualmente quais versões de um pacote correspondem a um intervalo semver.
- [CodeSandbox](https://codesandbox.io/templates/node-http-server) - IDE online e ferramenta de prototipagem.
- [Amplication](https://github.com/amplication/amplication) - Gera automaticamente aplicativos totalmente funcionais.
- [RunJS](https://runjs.app) - Ambiente de experimentação JavaScript para desktop.

### Comunidade

- [Stack Overflow](https://stackoverflow.com/questions/tagged/node.js)
- [Reddit](https://www.reddit.com/r/node)
- [Twitter](https://twitter.com/nodejs)
- [Hashnode](https://hashnode.com/n/nodejs)
- [Discord](https://discord.com/invite/96WGtJt)

### Diversos

- [nodebots](https://nodebots.io) - Robôs controlados por JavaScript.
- [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) - Modelo inicial para começar a criar um módulo Node.js.
- [modern-node](https://github.com/sheerun/modern-node) - Kit de ferramentas para criar módulos Node.js com Jest, Prettier, ESLint e Standard.
- [generator-nm](https://github.com/sindresorhus/generator-nm) - Cria a estrutura inicial de um módulo Node.js.
- [Microsoft Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines) - Dicas, truques e recursos para trabalhar com Node.js em plataformas Microsoft.
- [Module Requests & Ideas](https://github.com/sindresorhus/project-ideas) - Peça o módulo JavaScript que você gostaria que existisse ou encontre ideias para módulos.
- [v8-perf](https://github.com/thlorenz/v8-perf) - Notas e recursos relacionados ao desempenho do V8 e, consequentemente, do Node.js.

## Listas relacionadas

- [awesome-npm](https://github.com/sindresorhus/awesome-npm) - Recursos e dicas para usar npm.
- [awesome-cross-platform-nodejs](https://github.com/bcoe/awesome-cross-platform-nodejs) - Recursos para escrever e testar código multiplataforma.
