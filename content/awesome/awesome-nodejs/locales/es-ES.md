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
				<a href="https://github.com/sponsors/sindresorhus">La comunidad apoya mi trabajo de código abierto</a>
			</sup>
		</p>
		<sup>Agradecimientos especiales a:</sup>
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
			<b>Compilaciones remotas rápidas de contenedores y ejecutores de GitHub Actions.</b>
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
		<sub>Escribe <a href="https://node.cool"><code>node.cool</code></a> para llegar aquí. Sígueme en <a href="https://twitter.com/sindresorhus">Twitter</a>.</sub>
	</p>
	<br>
	<p>
		<a href="https://en.wikipedia.org/wiki/Node.js">Node.js</a> es un entorno de ejecución de JavaScript de código abierto y multiplataforma para crear servidores y herramientas de línea de comandos.
	</p>
	<br>
</div>

## Contenido

- [Oficial](#official)
- [Paquetes](#packages)
	- [Ciencia loca](#mad-science)
	- [Aplicaciones de línea de comandos](#command-line-apps)
	- [Programación funcional](#functional-programming)
	- [HTTP](#http)
	- [Depuración / perfilado](#debugging--profiling)
	- [Registro](#logging)
	- [Utilidades de línea de comandos](#command-line-utilities)
	- [Herramientas de compilación](#build-tools)
	- [Hardware](#hardware)
	- [Plantillas](#templating)
	- [Frameworks web](#web-frameworks)
	- [Documentación](#documentation)
	- [Sistema de archivos](#filesystem)
	- [Flujo de control](#control-flow)
	- [Flujos](#streams)
	- [Tiempo real](#real-time)
	- [Imagen](#image)
	- [Texto](#text)
	- [Números](#number)
	- [Matemáticas](#math)
	- [Fechas](#date)
	- [URL](#url)
	- [Validación de datos](#data-validation)
	- [Análisis sintáctico](#parsing)
	- [Humanización](#humanize)
	- [Compresión](#compression)
	- [Red](#network)
	- [Bases de datos](#database)
	- [Pruebas](#testing)
	- [Seguridad](#security)
	- [Pruebas de rendimiento](#benchmarking)
	- [Minificadores](#minifiers)
	- [Autenticación](#authentication)
	- [Autorización](#authorization)
	- [Correo electrónico](#email)
	- [Colas de tareas](#job-queues)
	- [Gestión de Node.js](#nodejs-management)
	- [Integración multiplataforma](#cross-platform-integration)
	- [Procesamiento del lenguaje natural](#natural-language-processing)
	- [Gestión de procesos](#process-management)
	- [Automatización](#automation)
	- [AST](#ast)
	- [Generadores de sitios estáticos](#static-site-generators)
	- [Sistemas de gestión de contenidos](#content-management-systems)
	- [Foro](#forum)
	- [Blogs](#blogging)
	- [Curiosidades](#weird)
	- [Serialización](#serialization)
	- [Varios](#miscellaneous)
- [Gestor de paquetes](#package-manager)
- [Recursos](#resources)
	- [Tutoriales](#tutorials)
	- [Descubrimiento](#discovery)
	- [Artículos](#articles)
	- [Boletines](#newsletters)
	- [Vídeos](#videos)
	- [Libros](#books)
	- [Blogs](#blogs)
	- [Cursos](#courses)
	- [Chuletas](#cheatsheets)
	- [Herramientas](#tools)
	- [Comunidad](#community)
	- [Varios](#miscellaneous-1)
- [Listas relacionadas](#related-lists)

## Oficial

- [Sitio web](https://nodejs.org)
- [Documentación](https://nodejs.org/dist/latest/docs/api/)
- [Repositorio](https://github.com/nodejs/node)

## Paquetes

### Ciencia loca

- [webtorrent](https://github.com/webtorrent/webtorrent) - Cliente de torrents en streaming para Node.js y el navegador.
- [peerflix](https://github.com/mafintosh/peerflix) - Cliente de torrents en streaming.
- [ipfs](https://github.com/ipfs/helia) - Sistema de archivos distribuido cuyo objetivo es conectar todos los dispositivos informáticos mediante un mismo sistema de archivos.
- [stackgl](https://github.com/stackgl) - Ecosistema de software abierto para WebGL, construido sobre browserify y npm.
- [peerwiki](https://github.com/mafintosh/peerwiki) - Toda la Wikipedia en BitTorrent.
- [peercast](https://github.com/mafintosh/peercast) - Envía por streaming un vídeo torrent a Chromecast.
- [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib) - Biblioteca de Bitcoin limpia, legible y probada.
- [Bitcore](https://github.com/bitpay/bitcore) - Biblioteca de Bitcoin pura y potente.
- [PDFKit](https://github.com/foliojs/pdfkit) - Biblioteca para generar archivos PDF.
- [turf](https://github.com/Turfjs/turf) - Motor modular de procesamiento y análisis geoespacial.
- [webcat](https://github.com/mafintosh/webcat) - Canal P2P a través de la web mediante WebRTC que utiliza tu clave pública o privada de GitHub para la autenticación.
- [NodeOS](https://github.com/NodeOS/NodeOS) - El primer sistema operativo impulsado por npm.
- [YodaOS](https://github.com/yodaos-project/yodaos) - Sistema operativo con inteligencia artificial.
- [Brain.js](https://github.com/BrainJS/brain.js) - Framework de aprendizaje automático.
- [Pipcook](https://github.com/alibaba/pipcook) - Framework de algoritmos de frontend para crear flujos de trabajo de aprendizaje automático.
- [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) - Modelado y análisis de teoría de grafos (también llamada teoría de redes).
- [js-git](https://github.com/creationix/js-git) - Implementación de Git en JavaScript.
- [xlsx](https://github.com/SheetJS/sheetjs) - Lector y escritor de hojas de cálculo de Excel, completamente en JS.
- [isomorphic-git](https://github.com/isomorphic-git/isomorphic-git) - Implementación de Git en JavaScript puro.

### Aplicaciones de línea de comandos

- [np](https://github.com/sindresorhus/np) - Una mejor forma de ejecutar `npm publish`.
- [npm-name](https://github.com/sindresorhus/npm-name) - Comprueba si un nombre de paquete está disponible en npm.
- [gh-home](https://github.com/sindresorhus/gh-home) - Abre la página de GitHub del repositorio del directorio actual.
- [npm-home](https://github.com/sindresorhus/npm-home) - Abre la página de npm de un paquete.
- [trash](https://github.com/sindresorhus/trash) - Alternativa más segura a `rm`.
- [speed-test](https://github.com/sindresorhus/speed-test) - Comprueba la velocidad y la latencia de tu conexión a Internet.
- [pageres](https://github.com/sindresorhus/pageres) - Captura pantallas de sitios web.
- [cpy](https://github.com/sindresorhus/cpy) - Copia archivos.
- [vtop](https://github.com/MrRio/vtop) - Una versión mejorada de top, con gráficos atractivos.
- [empty-trash](https://github.com/sindresorhus/empty-trash) - Vacía la papelera.
- [is-up](https://github.com/sindresorhus/is-up) - Comprueba si un sitio web está disponible.
- [is-online](https://github.com/sindresorhus/is-online) - Comprueba si hay conexión a Internet.
- [public-ip](https://github.com/sindresorhus/public-ip) - Obtiene tu dirección IP pública.
- [clipboard-cli](https://github.com/sindresorhus/clipboard-cli) - Copia y pega desde la terminal.
- [XO](https://github.com/xojs/xo) - Impone un estilo de código estricto mediante el estilo JavaScript Happiness.
- [ESLint](https://github.com/eslint/eslint) - Herramienta de análisis estático extensible para JavaScript.
- [David](https://github.com/alanshaw/david) - Te avisa cuando las dependencias npm de tu paquete están desactualizadas.
- [http-server](https://github.com/http-party/http-server) - Servidor HTTP sencillo para la línea de comandos, sin configuración.
- [Live Server](https://github.com/tapio/live-server) - Servidor HTTP de desarrollo con recarga en vivo.
- [bcat](https://github.com/kessler/node-bcat) - Redirige la salida de comandos a navegadores web.
- [normit](https://github.com/pawurb/normit) - Google Translate con síntesis de voz en la terminal.
- [fkill](https://github.com/sindresorhus/fkill-cli) - Termina procesos de forma sencilla y multiplataforma.
- [pjs](https://github.com/danielstjules/pjs) - JavaScript canalizable. Filtra, transforma y reduce datos rápidamente desde la terminal.
- [license-checker](https://github.com/davglass/license-checker) - Comprueba las licencias de las dependencias de tu aplicación.
- [browser-run](https://github.com/juliangruber/browser-run) - Ejecuta código fácilmente en un entorno de navegador.
- [tmpin](https://github.com/sindresorhus/tmpin) - Añade compatibilidad con stdin a cualquier aplicación CLI que acepte archivos como entrada.
- [wallpaper](https://github.com/sindresorhus/wallpaper) - Cambia el fondo de escritorio.
- [pen](https://github.com/hatashiro/pen) - Vista previa en vivo de Markdown en el navegador desde tu editor favorito.
- [dark-mode](https://github.com/sindresorhus/dark-mode) - Activa o desactiva el modo oscuro de macOS.
- [Jsome](https://github.com/Javascipt/Jsome) - Imprime JSON con formato, colores e indentación configurables.
- [mobicon](https://github.com/samverschueren/mobicon-cli) - Generador de iconos para aplicaciones móviles.
- [mobisplash](https://github.com/samverschueren/mobisplash-cli) - Generador de pantallas de inicio para aplicaciones móviles.
- [diff2html-cli](https://github.com/rtfpessoa/diff2html-cli) - Generador de HTML a partir de diferencias de Git con formato atractivo.
- [trymodule](https://github.com/victorb/trymodule) - Prueba paquetes npm desde la terminal.
- [jscpd](https://github.com/kucherenko/jscpd) - Detector de código duplicado por copiar y pegar.
- [atmo](https://github.com/Raathigesh/Atmo) - Simulación de API en el servidor.
- [auto-install](https://github.com/siddharthkp/auto-install) - Instala dependencias automáticamente mientras programas.
- [cost-of-modules](https://github.com/siddharthkp/cost-of-modules) - Descubre qué dependencias ralentizan tu aplicación.
- [localtunnel](https://github.com/localtunnel/localtunnel) - Expone tu localhost a Internet.
- [svg-term-cli](https://github.com/marionebl/svg-term-cli) - Comparte sesiones de terminal mediante SVG.
- [gtop](https://github.com/aksakalli/gtop) - Panel de monitorización del sistema para la terminal.
- [themer](https://github.com/themerdev/themer) - Genera temas para tu editor, terminal, fondo de pantalla, Slack y más.
- [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - Crea imágenes atractivas de tu código directamente desde la terminal.
- [cash-cli](https://github.com/xxczaki/cash-cli) - Convierte entre 170 monedas.
- [taskbook](https://github.com/klaussinani/taskbook) - Tareas, tableros y notas para la línea de comandos.
- [discharge](https://github.com/brandonweiss/discharge) - Implementa fácilmente sitios web estáticos en Amazon S3.
- [npkill](https://github.com/voidcosmos/npkill) - Encuentra y elimina fácilmente directorios node_modules antiguos y pesados.

### Programación funcional

- [lodash](https://github.com/lodash/lodash) - Biblioteca de utilidades que ofrece coherencia, personalización, rendimiento y mucho más. Una alternativa mejor y más rápida a Underscore.js.
- [immutable](https://github.com/immutable-js/immutable-js) - Colecciones de datos inmutables.
- [Ramda](https://github.com/ramda/ramda) - Biblioteca de utilidades centrada en la composición funcional flexible, habilitada por el curry automático y el orden inverso de argumentos. Evita mutar los datos.
- [Mout](https://github.com/mout/mout) - Biblioteca de utilidades cuya principal diferencia con otras soluciones es que permite cargar solo los módulos o funciones necesarios, sin sobrecarga adicional.
- [RxJS](https://github.com/reactivex/rxjs) - Biblioteca de programación reactiva funcional para transformar, componer y consultar distintos tipos de datos.
- [Kefir.js](https://github.com/kefirjs/kefir) - Biblioteca reactiva centrada en el alto rendimiento y el bajo consumo de memoria.

### HTTP

- [got](https://github.com/sindresorhus/got) - Interfaz más cómoda para el módulo `http` integrado.
- [undici](https://github.com/nodejs/undici) - Cliente HTTP de alto rendimiento, escrito desde cero y sin dependencias.
- [ky-universal](https://github.com/sindresorhus/ky-universal) - Cliente HTTP universal basado en Fetch.
- [node-fetch](https://github.com/node-fetch/node-fetch) - `window.fetch` para Node.js.
- [axios](https://github.com/axios/axios) - Cliente HTTP basado en promesas (también funciona en el navegador).
- [superagent](https://github.com/visionmedia/superagent) - Biblioteca para realizar solicitudes HTTP.
- [http-fake-backend](https://github.com/micromata/http-fake-backend) - Crea un backend simulado proporcionando el contenido de archivos JSON u objetos JavaScript mediante rutas configurables.
- [cacheable-request](https://github.com/lukechilds/cacheable-request) - Envuelve las solicitudes HTTP nativas con compatibilidad de caché conforme a RFC.
- [gotql](https://github.com/khaosdoctor/gotql) - Biblioteca para realizar solicitudes GraphQL basada en [got](https://github.com/sindresorhus/got).
- [global-agent](https://github.com/gajus/global-agent) - Agente proxy HTTP/HTTPS global configurable mediante variables de entorno.
- [smoke](https://github.com/sinedied/smoke) - Servidor HTTP simulado basado en archivos, con capacidad para grabar solicitudes.
- [purest](https://github.com/simov/purest) - Cliente REST.

### Depuración / perfilado

- [debug](https://github.com/debug-js/debug) - Herramienta de depuración pequeña.
- [why-is-node-running](https://github.com/mafintosh/why-is-node-running) - ¿Node.js sigue ejecutándose y no sabes por qué?
- [njsTrace](https://github.com/valyouw/njstrace) - Instrumenta y traza tu código para ver todas las llamadas a funciones, sus argumentos y valores de retorno, así como el tiempo empleado en cada función.
- [vstream](https://github.com/joyent/node-vstream) - Complementos instrumentables para inspeccionar una canalización de flujos.
- [stackman](https://github.com/watson/stackman) - Enriquece la traza de pila de un error con fragmentos de código y otras funciones útiles.
- [locus](https://github.com/alidavut/locus) - Inicia un REPL durante la ejecución con acceso a todas las variables.
- [0x](https://github.com/davidmarkclements/0x) - Análisis de rendimiento con gráficos de llama.
- [ctrace](https://github.com/automation-stack/ctrace) - Sistema mejorado de llamadas al sistema y señales, con trazas bien formateadas.
- [leakage](https://github.com/andywer/leakage) - Escribe pruebas para detectar fugas de memoria.
- [llnode](https://github.com/nodejs/llnode) - Herramienta de análisis post mortem que permite inspeccionar objetos y obtener información de un proceso de Node.js bloqueado.
- [thetool](https://github.com/sfninja/thetool) - Captura perfiles de CPU, memoria y otros aspectos de tu aplicación en un formato compatible con Chrome DevTools.
- [swagger-stats](https://github.com/slanatech/swagger-stats) - Traza llamadas a la API y supervisa su rendimiento, estado y métricas de uso.
- [NiM](https://github.com/june07/nim) - Gestiona el flujo de trabajo de depuración con DevTools.
- [dats](https://github.com/immobiliare/dats) - Cliente [StatsD](https://github.com/statsd/statsd) minimalista y sin dependencias.

### Registro

- [pino](https://github.com/pinojs/pino) - Registrador extremadamente rápido, inspirado en Bunyan.
- [winston](https://github.com/winstonjs/winston) - Biblioteca asíncrona de registro con múltiples transportes.
- [console-log-level](https://github.com/watson/console-log-level) - El registrador más sencillo que puedas imaginar, con niveles de registro y prefijos personalizados.
- [storyboard](https://github.com/guigrpa/storyboard) - Registros e historias completos, jerárquicos, en tiempo real y a todo color.
- [consola](https://github.com/unjs/consola) - Registrador para la consola.

### Utilidades de línea de comandos

- [chalk](https://github.com/chalk/chalk) - Estiliza correctamente las cadenas de texto de la terminal.
- [meow](https://github.com/sindresorhus/meow) - Ayudante para aplicaciones CLI.
- [yargs](https://github.com/yargs/yargs) - Analizador de argumentos de línea de comandos que genera automáticamente una interfaz de usuario elegante.
- [ora](https://github.com/sindresorhus/ora) - Indicador de carga elegante para la terminal.
- [get-stdin](https://github.com/sindresorhus/get-stdin) - Una forma más sencilla de leer stdin.
- [log-update](https://github.com/sindresorhus/log-update) - Registra sobrescribiendo la salida anterior en la terminal. Útil para mostrar barras de progreso, animaciones, etc.
- [Ink](https://github.com/vadimdemedes/ink) - React para aplicaciones interactivas de línea de comandos.
- [listr2](https://github.com/listr2/listr2) - Lista de tareas para la terminal.
- [conf](https://github.com/sindresorhus/conf) - Gestión sencilla de la configuración de tu aplicación o módulo.
- [ansi-escapes](https://github.com/sindresorhus/ansi-escapes) - Códigos de escape ANSI para manipular la terminal.
- [log-symbols](https://github.com/sindresorhus/log-symbols) - Símbolos de colores para distintos niveles de registro.
- [figures](https://github.com/sindresorhus/figures) - Símbolos Unicode con alternativas compatibles con Windows CMD.
- [boxen](https://github.com/sindresorhus/boxen) - Crea recuadros en la terminal.
- [terminal-link](https://github.com/sindresorhus/terminal-link) - Crea enlaces en los que se puede hacer clic en la terminal.
- [terminal-image](https://github.com/sindresorhus/terminal-image) - Muestra imágenes en la terminal.
- [string-width](https://github.com/sindresorhus/string-width) - Obtiene el ancho visual de una cadena: el número de columnas necesarias para mostrarla.
- [cli-truncate](https://github.com/sindresorhus/cli-truncate) - Trunca una cadena para que tenga un ancho específico en la terminal.
- [blessed](https://github.com/chjj/blessed) - Biblioteca similar a curses.
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - Indicador interactivo para la línea de comandos.
- [yn](https://github.com/sindresorhus/yn) - Analiza valores similares a respuestas afirmativas o negativas.
- [cli-table3](https://github.com/cli-table/cli-table3) - Tablas Unicode con formato atractivo.
- [drawille](https://github.com/madbence/node-drawille) - Dibuja en la terminal con caracteres braille Unicode.
- [ascii-charts](https://github.com/jstrace/chart) - Gráfico de barras ASCII para la terminal.
- [progress](https://github.com/visionmedia/node-progress) - Barra de progreso ASCII flexible.
- [insight](https://github.com/yeoman/insight) - Te ayuda a entender cómo se usa tu herramienta al enviar anónimamente métricas de uso a Google Analytics.
- [cli-cursor](https://github.com/sindresorhus/cli-cursor) - Activa o desactiva el cursor de la CLI.
- [cli-columns](https://github.com/shannonmoeller/cli-columns) - Listas de texto en columnas con Unicode y ANSI seguro.
- [cfonts](https://github.com/dominikwilkowski/cfonts) - Fuentes ASCII geniales para la consola.
- [multispinner](https://github.com/codekirei/node-multispinner) - Varios indicadores de carga simultáneos para la CLI, controlables de forma independiente.
- [omelette](https://github.com/f/omelette) - Ayudante para el autocompletado del shell.
- [cross-env](https://github.com/kentcdodds/cross-env) - Configura variables de entorno de forma multiplataforma.
- [shelljs](https://github.com/shelljs/shelljs) - Comandos de shell Unix portables.
- [sudo-block](https://github.com/sindresorhus/sudo-block) - Impide que los usuarios ejecuten tu aplicación con permisos de superusuario.
- [sparkly](https://github.com/sindresorhus/sparkly) - Genera minigráficos `▁▂▃▅▂▇`.
- [Bit](https://github.com/teambit/bit) - Crea, mantiene, encuentra y utiliza pequeños módulos y componentes en distintos repositorios.
- [gradient-string](https://github.com/bokub/gradient-string) - Degradados de color atractivos para la salida de la terminal.
- [oclif](https://github.com/oclif/oclif) - Framework CLI completo con analizador, documentación automática, pruebas y complementos.
- [terminal-size](https://github.com/sindresorhus/terminal-size) - Obtiene de forma fiable el tamaño de la ventana de la terminal.
- [Cliffy](https://github.com/drew-y/cliffy) - Framework para crear CLI interactivas.
- [zx](https://github.com/google/zx) - Escribe scripts de shell en JavaScript.

### Herramientas de compilación

- [parcel](https://github.com/parcel-bundler/parcel) - Empaquetador de aplicaciones web rapidísimo y sin configuración.
- [webpack](https://github.com/webpack/webpack) - Empaqueta módulos y recursos para el navegador.
- [rollup](https://github.com/rollup/rollup) - Empaquetador de módulos ES2015 de última generación.
- [gulp](https://github.com/gulpjs/gulp) - Sistema de compilación rápido basado en flujos que prioriza el código sobre la configuración.
- [Broccoli](https://github.com/broccolijs/broccoli) - Canalización de recursos rápida y fiable, compatible con reconstrucciones de tiempo constante y definiciones de compilación compactas.
- [Brunch](https://github.com/brunch/brunch) - Herramienta de compilación de aplicaciones web de frontend con configuración declarativa sencilla, compilación incremental rápida y un flujo de trabajo definido.
- [FuseBox](https://github.com/fuse-box/fuse-box) - Sistema de compilación rápido que combina la potencia de webpack, JSPM y SystemJS, con compatibilidad de primera clase con TypeScript.
- [pkg](https://github.com/vercel/pkg) - Empaqueta tu proyecto de Node.js como un ejecutable.
- [Vite](https://github.com/vitejs/vite) - Herramienta de compilación de frontend con reemplazo de módulos en caliente y empaquetado de recursos estáticos.

### Hardware

- [johnny-five](https://github.com/rwaldron/johnny-five) - Framework de Arduino basado en Firmata.
- [serialport](https://github.com/serialport/node-serialport) - Accede a puertos serie para leer y escribir.
- [usb](https://github.com/node-usb/node-usb) - Biblioteca USB.
- [i2c-bus](https://github.com/fivdi/i2c-bus) - Acceso al bus serie I2C.
- [onoff](https://github.com/fivdi/onoff) - Acceso a GPIO y detección de interrupciones.
- [spi-device](https://github.com/fivdi/spi-device) - Acceso al bus serie SPI.
- [pigpio](https://github.com/fivdi/pigpio) - GPIO de alta velocidad, PWM, control de servos, notificaciones de cambios de estado y gestión de interrupciones en Raspberry Pi.
- [gps](https://github.com/infusion/GPS.js) - Analizador NMEA para gestionar receptores GPS.
- [modbus-serial](https://github.com/yaacov/node-modbus-serial) - Implementación pura de JavaScript de MODBUS-RTU (serie y TCP).

### Plantillas

- [marko](https://github.com/marko-js/marko) - Motor de plantillas basado en HTML que las compila en módulos CommonJS y admite transmisión, renderizado asíncrono y etiquetas personalizadas.
- [nunjucks](https://github.com/mozilla/nunjucks) - Motor de plantillas con herencia, control asíncrono y más, inspirado en Jinja2.
- [handlebars.js](https://github.com/handlebars-lang/handlebars.js) - Superconjunto de las plantillas Mustache que añade funciones potentes, como ayudantes y bloques más avanzados.
- [EJS](https://github.com/mde/ejs) - Lenguaje de plantillas sencillo y sin opiniones.
- [Pug](https://github.com/pugjs/pug) - Motor de plantillas de alto rendimiento, muy influido por Haml.

### Frameworks web

- [Fastify](https://github.com/fastify/fastify) - Framework web rápido y de baja sobrecarga.
- [Next.js](https://github.com/vercel/next.js) - Framework minimalista para aplicaciones web universales de JavaScript renderizadas en el servidor.
- [Nuxt.js](https://github.com/nuxt/nuxt.js) - Framework minimalista para aplicaciones Vue.js renderizadas en el servidor.
- [Hapi](https://github.com/hapijs/hapi) - Framework para crear aplicaciones y servicios.
- [Micro](https://github.com/vercel/micro) - Framework minimalista para microservicios con un enfoque asíncrono.
- [Koa](https://github.com/koajs/koa) - Framework creado por el equipo detrás de Express, cuyo objetivo es ofrecer una base más pequeña, expresiva y robusta para aplicaciones web y API.
- [Express](https://github.com/expressjs/express) - Framework de aplicaciones web con un conjunto sólido de funciones para crear aplicaciones web de una o varias páginas e híbridas.
- [Feathers](https://github.com/feathersjs/feathers) - Framework de microservicios inspirado en Express.
- [LoopBack](https://github.com/loopbackio/loopback-next) - Framework potente para crear API REST y conectar fácilmente con fuentes de datos de backend.
- [Meteor](https://github.com/meteor/meteor) - Framework web de JavaScript puro, ultrasencillo, con bases de datos en todas partes y datos transmitidos por la red. *(Quizá te interese [awesome-meteor](https://github.com/Urigo/awesome-meteor))*
- [Restify](https://github.com/restify/node-restify) - Te permite crear servicios web REST correctos.
- [ThinkJS](https://github.com/thinkjs/thinkjs) - Framework compatible con ES2015+, WebSockets y API REST.
- [ActionHero](https://github.com/actionhero/actionhero) - Framework para crear API reutilizables y escalables para sockets TCP, WebSockets y clientes HTTP.
- [seneca](https://github.com/senecajs/seneca) - Conjunto de herramientas para escribir microservicios.
- [AdonisJs](https://github.com/adonisjs/core) - Framework MVC integral para Node.js, construido sobre bases sólidas de inyección de dependencias y un contenedor IoC.
- [Moleculer](https://github.com/moleculerjs/moleculer) - Framework de microservicios rápido y potente.
- [Nest](https://github.com/nestjs/nest) - Framework inspirado en Angular para crear aplicaciones eficientes y escalables del lado del servidor.
- [TypeGraphQL](https://github.com/MichalLytek/type-graphql) - Framework moderno para crear API GraphQL con TypeScript mediante clases y decoradores.
- [Tinyhttp](https://github.com/tinyhttp/tinyhttp) - Framework web moderno y rápido, similar a Express.
- [Marble.js](https://github.com/marblejs/marble) - Framework reactivo funcional para crear aplicaciones del lado del servidor, basado en TypeScript y RxJS.
- [Lad](https://github.com/ladjs/lad) - Framework creado por un antiguo miembro del comité técnico de Express y del equipo de Koa, que integra servidores web, de API, de tareas y proxy.
- [Ts.ED](https://github.com/tsedio/tsed) - Framework intuitivo de TypeScript para crear aplicaciones del lado del servidor sobre Express.js o Koa.js.
- [Hono](https://github.com/honojs/hono) - Framework web pequeño y rápido.

### Documentación

- [documentation.js](https://github.com/documentationjs/documentation) - Generador de documentación de API compatible con ES2015+ y anotaciones de Flow.
- [Docco](https://github.com/jashkenas/docco) - Generador de documentación que crea un documento HTML donde los comentarios aparecen intercalados con el código.
- [JSDoc](https://github.com/jsdoc/jsdoc) - Generador de documentación de API similar a JavaDoc o PHPDoc.
- [Docusaurus](https://github.com/facebook/docusaurus) - Generador de sitios de documentación que aprovecha React y Markdown e incluye funciones de traducción y control de versiones.

### Sistema de archivos

- [del](https://github.com/sindresorhus/del) - Elimina archivos y carpetas mediante patrones glob.
- [globby](https://github.com/sindresorhus/globby) - Busca archivos mediante patrones glob con compatibilidad para varios patrones.
- [chokidar](https://github.com/paulmillr/chokidar) - Vigilante del sistema de archivos que estabiliza los eventos de `fs.watch` y `fs.watchFile`, y también utiliza `fsevents` nativo en macOS.
- [find-up](https://github.com/sindresorhus/find-up) - Busca un archivo recorriendo los directorios superiores.
- [proper-lockfile](https://github.com/moxystudio/node-proper-lockfile) - Utilidad de bloqueo de archivos entre procesos y máquinas.
- [load-json-file](https://github.com/sindresorhus/load-json-file) - Lee y analiza un archivo JSON.
- [write-json-file](https://github.com/sindresorhus/write-json-file) - Convierte a JSON y escribe un archivo de forma atómica.
- [fs-write-stream-atomic](https://github.com/npm/fs-write-stream-atomic) - Como `fs.createWriteStream()`, pero con operaciones atómicas.
- [filenamify](https://github.com/sindresorhus/filenamify) - Convierte una cadena en un nombre de archivo válido.
- [istextorbinary](https://github.com/bevry/istextorbinary) - Comprueba si un archivo es de texto o binario.
- [fs-jetpack](https://github.com/szwacz/fs-jetpack) - API del sistema de archivos completamente rediseñada para facilitar las tareas cotidianas.
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - Métodos adicionales para el módulo `fs`.
- [package-directory](https://github.com/sindresorhus/package-directory) - Encuentra el directorio raíz de un paquete npm.
- [filehound](https://github.com/nspragg/filehound) - Interfaz flexible y fluida para buscar en el sistema de archivos.
- [move-file](https://github.com/sindresorhus/move-file) - Mueve un archivo; también funciona entre dispositivos.
- [tempy](https://github.com/sindresorhus/tempy) - Obtiene una ruta aleatoria de archivo o directorio temporal.

### Flujo de control

- Promesas
	- [pify](https://github.com/sindresorhus/pify) - Convierte una función basada en callbacks para que devuelva promesas.
	- [delay](https://github.com/sindresorhus/delay) - Retrasa una promesa durante un tiempo determinado.
	- [promise-memoize](https://github.com/nodeca/promise-memoize) - Memoriza funciones que devuelven promesas, con caducidad y precarga.
	- [valvelet](https://github.com/lpinca/valvelet) - Limita la frecuencia de ejecución de una función que devuelve una promesa.
	- [p-map](https://github.com/sindresorhus/p-map) - Aplica un mapeo concurrente a varias promesas.
	- [More…](https://github.com/sindresorhus/promise-fun)
- Observables
	- [RxJS](https://github.com/ReactiveX/RxJS) - Programación reactiva.
	- [observable-to-promise](https://github.com/sindresorhus/observable-to-promise) - Convierte un Observable en una Promesa.
	- [More…](https://github.com/sindresorhus/awesome-observables)
- Streams
	- [Highland.js](https://github.com/caolan/highland) - Gestiona fácilmente código síncrono y asíncrono utilizando únicamente JavaScript estándar y flujos similares a los de Node.

### Flujos

- [get-stream](https://github.com/sindresorhus/get-stream) - Obtiene un flujo como cadena o búfer.
- [from2](https://github.com/hughsk/from2) - Wrapper práctico para ReadableStream, inspirado en `through2`.
- [into-stream](https://github.com/sindresorhus/into-stream) - Convierte un búfer, una cadena, una matriz o un objeto en un flujo.
- [duplexify](https://github.com/mafintosh/duplexify) - Convierte un flujo de escritura y otro de lectura en un único flujo dúplex de Streams2.
- [pumpify](https://github.com/mafintosh/pumpify) - Combina una matriz de flujos en un único flujo dúplex.
- [peek-stream](https://github.com/mafintosh/peek-stream) - Flujo transformador que permite inspeccionar la primera línea antes de decidir cómo analizarla.
- [binary-split](https://github.com/maxogden/binary-split) - Flujo que separa líneas (o cualquier delimitador).
- [byline](https://github.com/jahewson/node-byline) - Lector de flujos muy sencillo que procesa línea por línea.
- [first-chunk-stream](https://github.com/sindresorhus/first-chunk-stream) - Transforma el primer fragmento de un flujo.
- [pad-stream](https://github.com/sindresorhus/pad-stream) - Añade relleno a cada línea de un flujo.
- [multistream](https://github.com/feross/multistream) - Combina varios flujos en uno solo.
- [readable-stream](https://github.com/nodejs/readable-stream) - Réplicas de las implementaciones de Streams2 y Streams3 del núcleo.
- [through2-concurrent](https://github.com/almost/through2-concurrent) - Transforma flujos de objetos de forma concurrente.

### Tiempo real

- [µWebSockets](https://github.com/uNetworking/uWebSockets) - Biblioteca de servidor y cliente WebSocket altamente escalable.
- [Socket.io](https://github.com/socketio/socket.io) - Permite la comunicación bidireccional en tiempo real basada en eventos.
- [Faye](https://github.com/faye/faye) - Bus de mensajes cliente-servidor en tiempo real, basado en el protocolo Bayeux.
- [SocketCluster](https://github.com/SocketCluster/socketcluster) - Motor escalable de HTTP y WebSocket que puede ejecutarse en varios núcleos de CPU.
- [Primus](https://github.com/primus/primus) - Capa de abstracción para frameworks en tiempo real que evita quedar atado a un módulo.
- [deepstream.io](https://github.com/deepstreamIO/deepstream.io-client-js) - Framework escalable de microservicios en tiempo real.
- [Kalm](https://github.com/kalm/kalm.js) - Enrutador de sockets de bajo nivel y framework de middleware.
- [MQTT.js](https://github.com/mqttjs/MQTT.js) - Cliente MQTT: protocolo de mensajería basado en publicación-suscripción que funciona sobre TCP/IP.
- [rpc-websockets](https://github.com/elpheria/rpc-websockets) - Implementación de JSON-RPC 2.0 sobre WebSockets.
- [Aedes](https://github.com/moscajs/aedes) - Servidor MQTT básico que puede ejecutarse en cualquier servidor de flujos.

### Imagen

- [sharp](https://github.com/lovell/sharp) - El módulo más rápido para cambiar el tamaño de imágenes JPEG, PNG, WebP y TIFF.
- [image-type](https://github.com/sindresorhus/image-type) - Detecta el tipo de una imagen.
- [image-dimensions](https://github.com/sindresorhus/image-dimensions) - Obtiene las dimensiones de una imagen.
- [lwip](https://github.com/EyalAr/lwip) - Procesador de imágenes ligero que no requiere ImageMagick.
- [pica](https://github.com/nodeca/pica) - Redimensionamiento rápido y de alta calidad (lanczos3) en JavaScript puro. Alternativa a `canvas.drawImage()` cuando no se permite pixelación.
- [jimp](https://github.com/oliver-moran/jimp) - Procesamiento de imágenes en JavaScript puro.
- [qrcode](https://github.com/soldair/node-qrcode) - Generador de códigos QR y de barras.
- [ImageScript](https://github.com/matmen/ImageScript) - Procesamiento de imágenes en JavaScript mediante WebAssembly para obtener un alto rendimiento.

### Texto

- [iconv-lite](https://github.com/ashtuchkin/iconv-lite) - Convierte codificaciones de caracteres.
- [string-length](https://github.com/sindresorhus/string-length) - Obtiene la longitud real de una cadena contando correctamente los símbolos astrales e ignorando los códigos de escape ANSI.
- [camelcase](https://github.com/sindresorhus/camelcase) - Convierte una cadena separada por guiones, puntos, guiones bajos o espacios a camelCase: foo-bar → fooBar.
- [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp) - Escapa los caracteres especiales de RegExp.
- [splice-string](https://github.com/sindresorhus/splice-string) - Elimina o reemplaza parte de una cadena, como `Array#splice`.
- [indent-string](https://github.com/sindresorhus/indent-string) - Aplica sangría a cada línea de una cadena.
- [strip-indent](https://github.com/sindresorhus/strip-indent) - Elimina los espacios iniciales de cada línea de una cadena.
- [detect-indent](https://github.com/sindresorhus/detect-indent) - Detecta la sangría del código.
- [he](https://github.com/mathiasbynens/he) - Codificador y decodificador de entidades HTML.
- [i18n-node](https://github.com/mashpie/i18n-node) - Módulo de traducción sencillo con almacenamiento JSON dinámico.
- [babelfish](https://github.com/nodeca/babelfish) - i18n con una sintaxis muy sencilla para plurales.
- [matcher](https://github.com/sindresorhus/matcher) - Coincidencia sencilla con patrones comodín.
- [unhomoglyph](https://github.com/nodeca/unhomoglyph) - Normaliza caracteres Unicode visualmente similares.
- [i18next](https://github.com/i18next/i18next) - Framework de internacionalización.
- [nanoid](https://github.com/ai/nanoid) - Generador diminuto y seguro de identificadores únicos y aptos para URL.
- [StegCloak](https://github.com/kurolabs/stegcloak) - Oculta secretos a plena vista dentro de cadenas.

### Números

- [random-int](https://github.com/sindresorhus/random-int) - Genera un entero aleatorio.
- [random-float](https://github.com/sindresorhus/random-float) - Genera un número de coma flotante aleatorio.
- [unique-random](https://github.com/sindresorhus/unique-random) - Genera números aleatorios consecutivos sin repetir.
- [round-to](https://github.com/sindresorhus/round-to) - Redondea un número a una cantidad específica de decimales: `1.234` → `1.2`.

### Matemáticas

- [ndarray](https://github.com/scijs/ndarray) - Matrices multidimensionales.
- [mathjs](https://github.com/josdejong/mathjs) - Biblioteca matemática completa.
- [math-clamp](https://github.com/sindresorhus/math-clamp) - Limita un número a un intervalo.
- [algebra](https://github.com/fibo/algebra) - Estructuras algebraicas.
- [multimath](https://github.com/nodeca/multimath) - Núcleo para crear operaciones matemáticas rápidas con imágenes en WebAssembly y JS.

### Fechas

- [Luxon](https://github.com/moment/luxon) - Biblioteca para trabajar con fechas y horas.
- [date-fns](https://github.com/date-fns/date-fns) - Utilidad moderna para fechas.
- [Day.js](https://github.com/iamkun/dayjs) - Biblioteca inmutable de fechas, alternativa a Moment.js.
- [dateformat](https://github.com/felixge/node-dateformat) - Formato de fechas.
- [tz-format](https://github.com/samverschueren/tz-format) - Da formato a una fecha con zona horaria: `2015-11-30T10:40:35+01:00`.
- [cctz](https://github.com/floatdrop/node-cctz) - Análisis, formato y conversión rápida de zonas horarias para fechas.

### URL

- [normalize-url](https://github.com/sindresorhus/normalize-url) - Normaliza una URL.
- [humanize-url](https://github.com/sindresorhus/humanize-url) - Humaniza una URL: https://sindresorhus.com → sindresorhus.com.
- [url-unshort](https://github.com/nodeca/url-unshort) - Expande URL acortadas.
- [speakingurl](https://github.com/pid/speakingurl) - Genera un slug a partir de una cadena mediante transliteración.
- [linkify-it](https://github.com/markdown-it/linkify-it) - Detector de patrones de enlaces con compatibilidad completa con Unicode.
- [url-pattern](https://github.com/snd/url-pattern) - Coincidencia de patrones de cadenas para URL y otras cadenas, más sencilla que con expresiones regulares.
- [embedza](https://github.com/nodeca/embedza) - Crea fragmentos o inserciones HTML a partir de URL usando información de oEmbed, Open Graph y etiquetas meta.

### Validación de datos

- [joi](https://github.com/sideway/joi) - Lenguaje para describir esquemas de objetos y validador de objetos JavaScript.
- [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) - Validador de JSON Schema que utiliza generación de código para alcanzar una gran velocidad.
- [property-validator](https://github.com/nettofarah/property-validator) - Validación sencilla de propiedades para Express.
- [schema-inspector](https://github.com/schema-inspector/schema-inspector) - Sanitización y validación de API JSON.
- [ajv](https://github.com/ajv-validator/ajv) - El validador de JSON Schema más rápido. Admite las propuestas v5, v6 y v7.
- [Superstruct](https://github.com/ianstormtaylor/superstruct) - Forma sencilla y componible de validar datos en JavaScript (y TypeScript).
- [yup](https://github.com/jquense/yup) - Validación de esquemas de objetos.
- [zod](https://github.com/colinhacks/zod) - Validación de esquemas con TypeScript como prioridad e inferencia de tipos estática.

### Análisis sintáctico

- [remark](https://github.com/remarkjs/remark) - Procesador de Markdown basado en complementos.
- [markdown-it](https://github.com/markdown-it/markdown-it) - Analizador de Markdown con compatibilidad completa con CommonMark, extensiones y complementos de sintaxis.
- [parse5](https://github.com/inikulin/parse5) - Analizador HTML rápido, completo y conforme a las especificaciones.
- [@parcel/css](https://github.com/parcel-bundler/parcel-css) - Analizador, transformador y minificador de CSS escrito en Rust.
- [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) - Elimina comentarios de JSON.
- [strip-css-comments](https://github.com/sindresorhus/strip-css-comments) - Elimina comentarios de CSS.
- [parse-json](https://github.com/sindresorhus/parse-json) - Analiza JSON con mensajes de error más útiles.
- [URI.js](https://github.com/medialize/URI.js) - Modificación de URL.
- [JSONStream](https://github.com/dominictarr/JSONStream) - Análisis y serialización de JSON mediante flujos.
- [neat-csv](https://github.com/sindresorhus/neat-csv) - Analizador CSV rápido, con una interfaz basada en callbacks para el anterior.
- [csv-parser](https://github.com/mafintosh/csv-parser) - Analizador CSV en flujo que aspira a superar a todos en velocidad.
- [PEG.js](https://github.com/pegjs/pegjs) - Generador de analizadores sencillo que crea analizadores rápidos con excelentes mensajes de error.
- [x-ray](https://github.com/matthewmueller/x-ray) - Utilidad para extraer datos de sitios web.
- [nearley](https://github.com/kach/nearley) - Análisis rápido, sencillo y potente para JavaScript.
- [binary-extract](https://github.com/juliangruber/binary-extract) - Extrae un valor de un búfer JSON sin analizarlo entero.
- [Stylecow](https://github.com/stylecow/stylecow) - Analiza, manipula y convierte CSS moderno para hacerlo compatible con todos los navegadores. Ampliable mediante complementos.
- [js-yaml](https://github.com/nodeca/js-yaml) - Analizador YAML muy rápido.
- [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - Convierte XML en objetos JavaScript.
- [Jison](https://github.com/zaach/jison) - Generador de analizadores JavaScript fácil de usar, emparentado con Bison, Yacc y sus derivados.
- [google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber) - Analiza, da formato, almacena y valida números de teléfono.
- [ref](https://github.com/TooTallNate/ref) - Lee y escribe datos binarios estructurados en búferes.
- [xlsx-populate](https://github.com/dtjohnson/xlsx-populate) - Lee y escribe archivos Excel XLSX.
- [Chevrotain](https://github.com/Chevrotain/chevrotain) - Conjunto de herramientas muy rápido y completo para crear analizadores de JavaScript.
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) - Valida y analiza XML.

### Humanización

- [pretty-bytes](https://github.com/sindresorhus/pretty-bytes) - Convierte bytes en una cadena legible: `1337` → `1.34 kB`.
- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - Convierte milisegundos en una cadena legible: `1337000000` → `15d 11h 23m 20s`.
- [ms](https://github.com/vercel/ms) - Utilidad diminuta para convertir milisegundos.
- [pretty-error](https://github.com/AriaMinaei/pretty-error) - Errores con menos ruido.
- [read-art](https://github.com/Tjatse/node-readability) - Extrae contenido legible de cualquier página.

### Compresión

- [yazl](https://github.com/thejoshwolfe/yazl) - Comprime en ZIP.
- [yauzl](https://github.com/thejoshwolfe/yauzl) - Descomprime archivos ZIP.
- [Archiver](https://github.com/archiverjs/node-archiver) - Interfaz de flujo para generar archivos ZIP y TAR.
- [pako](https://github.com/nodeca/pako) - Puerto de zlib de alta velocidad a JavaScript puro (deflate, inflate, gzip).
- [tar-stream](https://github.com/mafintosh/tar-stream) - Analizador y generador de archivos tar en flujo. También consulta [tar-fs](https://github.com/mafintosh/tar-fs).

### Redes

- [get-port](https://github.com/sindresorhus/get-port) - Obtiene un puerto disponible.
- [ipify](https://github.com/sindresorhus/ipify) - Obtiene tu dirección IP pública.
- [getmac](https://github.com/bevry/getmac) - Obtiene la dirección MAC del ordenador.
- [DHCP](https://github.com/infusion/node-dhcp) - Cliente y servidor DHCP.
- [netcat](https://github.com/roccomuso/netcat) - Implementación de netcat en JavaScript puro.

### Bases de datos

- Controladores
	- [PostgreSQL](https://github.com/brianc/node-postgres) - Cliente PostgreSQL. JavaScript puro y enlaces nativos a libpq.
	- [Redis](https://github.com/luin/ioredis) - Cliente Redis.
	- [LevelUP](https://github.com/Level/levelup) - LevelDB.
	- [MySQL](https://github.com/mysqljs/mysql) - Cliente MySQL.
	- [couchdb-nano](https://github.com/apache/couchdb-nano) - Cliente CouchDB.
	- [Aerospike](https://github.com/aerospike/aerospike-client-nodejs) - Cliente Aerospike.
	- [Couchbase](https://github.com/couchbase/couchnode) - Cliente Couchbase.
	- [MongoDB](https://github.com/mongodb/node-mongodb-native) - Controlador de MongoDB.
- ODM / ORM
	- [Sequelize](https://github.com/sequelize/sequelize) - ORM multidialecto. Compatible con PostgreSQL, SQLite, MySQL y otros.
	- [Bookshelf](https://github.com/bookshelf/bookshelf) - ORM para PostgreSQL, MySQL y SQLite3 al estilo de Backbone.js.
	- [Mongoose](https://github.com/Automattic/mongoose) - Modelado de objetos MongoDB elegante.
	- [Waterline](https://github.com/balderdashy/waterline) - Herramienta independiente del almacén de datos que simplifica enormemente la interacción con una o varias bases de datos.
	- [OpenRecord](https://github.com/PhilWaldmann/openrecord) - ORM para PostgreSQL, MySQL, SQLite3 y almacenes de datos RESTful. Similar a ActiveRecord.
	- [pg-promise](https://github.com/vitaly-t/pg-promise) - Framework de PostgreSQL para SQL nativo mediante promesas.
	- [slonik](https://github.com/gajus/slonik) - Cliente PostgreSQL con tipos estrictos, registro detallado y aserciones.
	- [Objection.js](https://github.com/Vincit/objection.js) - ORM ligero basado en el constructor de consultas SQL Knex.
	- [TypeORM](https://github.com/typeorm/typeorm) - ORM para PostgreSQL, MariaDB, MySQL, SQLite y otros.
	- [MikroORM](https://github.com/mikro-orm/mikro-orm) - ORM de TypeScript basado en los patrones Data Mapper, Unit of Work e Identity Map. Compatible con MongoDB, PostgreSQL, MySQL y SQLite.
	- [Prisma](https://github.com/prisma/prisma) - Acceso moderno a bases de datos (alternativa a ORM). Constructor de consultas de TypeScript autogenerado y seguro en cuanto a tipos. Compatible con PostgreSQL, MySQL y SQLite.
 	- [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) - ORM de TypeScript compatible con varias bases de datos, como PostgreSQL.
- Constructor de consultas
	- [Knex](https://github.com/knex/knex) - Constructor de consultas para PostgreSQL, MySQL y SQLite3, diseñado para ser flexible, portable y fácil de usar.
- Otros
	- [NeDB](https://github.com/louischatriot/nedb) - Base de datos persistente integrada, escrita en JavaScript.
	- [Lowdb](https://github.com/typicode/lowdb) - Base de datos JavaScript pequeña impulsada por Lodash.
	- [Keyv](https://github.com/jaredwray/keyv) - Almacenamiento sencillo de clave-valor compatible con varios backends.
	- [Finale](https://github.com/tommybananas/finale) - Generador de endpoints RESTful para tus modelos de Sequelize.
	- [database-js](https://github.com/mlaanderson/database-js) - Wrapper para varias bases de datos con una conexión similar a JDBC.
	- [Mongo Seeding](https://github.com/pkosiec/mongo-seeding) - Carga datos en bases de datos MongoDB mediante archivos JavaScript y JSON.
	- [@databases](https://github.com/ForbesLindesay/atdatabases) - Consulta PostgreSQL, MySQL y SQLite3 con SQL simple sin riesgo de inyección SQL.
	- [pg-mem](https://github.com/oguimbal/pg-mem) - Instancia de PostgreSQL en memoria para tus pruebas.

### Pruebas

- [AVA](https://github.com/avajs/ava) - Ejecutor de pruebas futurista.
- [Mocha](https://github.com/mochajs/mocha) - Framework de pruebas con abundantes funciones que hace que las pruebas asíncronas sean sencillas y amenas.
- [nyc](https://github.com/istanbuljs/nyc) - Herramienta de cobertura de código basada en Istanbul y compatible con subprocesos.
- [tap](https://github.com/tapjs/node-tap) - Framework de pruebas TAP.
- [tape](https://github.com/substack/tape) - Arnés de pruebas que genera TAP.
- [power-assert](https://github.com/power-assert-js/power-assert) - Proporciona mensajes de aserción descriptivos mediante la interfaz estándar de assert.
- [Mochify](https://github.com/mantoni/mochify.js) - Pruebas TDD con Browserify, Mocha, PhantomJS y WebDriver.
- [trevor](https://github.com/vadimdemedes/trevor) - Ejecuta pruebas con varias versiones de Node.js sin cambiar de versión manualmente ni enviarlas a Travis CI.
- [loadtest](https://github.com/alexfernandez/loadtest) - Ejecuta pruebas de carga para tu aplicación web, con una API para automatizarlas.
- [Sinon.JS](https://github.com/sinonjs/sinon) - Espías, stubs y simulaciones para pruebas.
- [navit](https://github.com/nodeca/navit) - Wrapper de PhantomJS / SlimerJS que simplifica la automatización de pruebas en el navegador.
- [Nock](https://github.com/nock/nock) - Simulación de HTTP y expectativas.
- [intern](https://github.com/theintern/intern) - Conjunto de herramientas para probar código.
- [toxy](https://github.com/h2non/toxy) - Proxy HTTP modificable para simular escenarios de error y condiciones de red.
- [hook-std](https://github.com/sindresorhus/hook-std) - Intercepta y modifica stdout/stderr.
- [testen](https://github.com/egoist/testen) - Ejecuta localmente pruebas con varias versiones de Node.js mediante NVM.
- [Nightwatch](https://github.com/nightwatchjs/nightwatch) - Framework de pruebas automatizadas de interfaz basado en Selenium WebDriver.
- [WebdriverIO](https://github.com/webdriverio/webdriverio) - Pruebas automatizadas basadas en el protocolo WebDriver.
- [Jest](https://github.com/facebook/jest) - Pruebas de JavaScript sin complicaciones.
- [Vitest](https://github.com/vitest-dev/vitest) - Framework de pruebas unitarias rápido, impulsado por Vite.
- [TestCafe](https://github.com/DevExpress/testcafe) - Pruebas automatizadas en el navegador.
- [abstruse](https://github.com/bleenco/abstruse) - Servidor de integración continua.
- [CodeceptJS](https://github.com/codeceptjs/CodeceptJS) - Pruebas de extremo a extremo.
- [Puppeteer](https://github.com/puppeteer/puppeteer) - Chrome sin interfaz gráfica.
- [Playwright](https://github.com/microsoft/playwright) - Chromium, WebKit y Firefox sin interfaz gráfica, con una sola API.
- [nve](https://github.com/ehmicky/nve) - Ejecuta cualquier comando localmente en varias versiones de Node.js.
- [axe-core](https://github.com/dequelabs/axe-core) - Motor de accesibilidad para pruebas automatizadas de interfaces web.
- [testcontainers-node](https://github.com/testcontainers/testcontainers-node) - Proporciona instancias ligeras y desechables de bases de datos comunes, navegadores Selenium o cualquier otro servicio que pueda ejecutarse en un contenedor Docker.

### Seguridad

- [upash](https://github.com/simonepri/upash) - API unificada para todos los algoritmos de hash de contraseñas.
- [themis](https://github.com/cossacklabs/themis) - Framework multilingüe que facilita el uso de esquemas de cifrado habituales: datos en reposo, intercambio autenticado de datos, protección del transporte, autenticación, etc.
- [GuardRails](https://github.com/apps/guardrails) - Aplicación de GitHub que ofrece comentarios de seguridad en las solicitudes de incorporación de cambios.
- [rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible) - Protección contra ataques de fuerza bruta y DDoS.
- [crypto-hash](https://github.com/sindresorhus/crypto-hash) - Cálculo asíncrono y no bloqueante de hashes.
- [jose-simple](https://github.com/davesag/jose-simple) - Cifrado y descifrado de datos mediante el estándar JOSE (JSON Object Signing and Encryption).

### Pruebas de rendimiento

- [Benchmark.js](https://github.com/bestiejs/benchmark.js) - Biblioteca de pruebas de rendimiento compatible con temporizadores de alta resolución y que ofrece resultados estadísticamente significativos.

### Minificadores

- [babel-minify](https://github.com/babel/minify) - Minificador compatible con ES2015+, basado en la cadena de herramientas de Babel.
- [UglifyJS2](https://github.com/mishoo/UglifyJS) - Minificador de JavaScript.
- [clean-css](https://github.com/clean-css/clean-css) - Minificador de CSS.
- [minimize](https://github.com/Swaagie/minimize) - Minificador de HTML.
- [imagemin](https://github.com/imagemin/imagemin) - Minificador de imágenes.

### Autenticación

- [Passport](https://github.com/jaredhanson/passport) - Autenticación sencilla y discreta.
- [Grant](https://github.com/simov/grant) - Proveedores OAuth para Express, Koa, Hapi, Fastify, AWS Lambda, Azure, Google Cloud, Vercel y muchos más.

### Autorización

- [CASL](https://github.com/stalniy/casl) - Autorización isomórfica para interfaces y API.
- [node-casbin](https://github.com/casbin/node-casbin) - Biblioteca de autorización compatible con modelos de control de acceso como ACL, RBAC y ABAC.

### Correo electrónico

- [Nodemailer](https://github.com/nodemailer/nodemailer) - La forma más rápida de gestionar el correo electrónico.
- [emailjs](https://github.com/eleith/emailjs) - Envía correos electrónicos de texto o HTML con archivos adjuntos a cualquier servidor SMTP.
- [email-templates](https://github.com/forwardemail/email-templates) - Crea, previsualiza y envía plantillas de correo electrónico personalizadas.
- [MJML](https://github.com/mjmlio/mjml) - Lenguaje de marcado diseñado para reducir las dificultades de crear correos electrónicos adaptables.
- [Forward Email](https://github.com/forwardemail/forwardemail.net) - Servicio de correo electrónico de código abierto y autoalojable.

### Colas de tareas

- [bull](https://github.com/OptimalBits/bull) - Cola persistente de tareas y mensajes.
- [agenda](https://github.com/agenda/agenda) - Programación de tareas respaldada por MongoDB.
- [idoit](https://github.com/nodeca/idoit) - Motor de cola de tareas respaldado por Redis, con control avanzado de tareas.
- [node-resque](https://github.com/actionhero/node-resque) - Cola de tareas respaldada por Redis.
- [rsmq](https://github.com/smrchy/rsmq) - Cola de mensajes respaldada por Redis.
- [bee-queue](https://github.com/bee-queue/bee-queue) - Cola de tareas de alto rendimiento respaldada por Redis.
- [RedisSMQ](https://github.com/weyoss/redis-smq) - Cola de mensajes Redis sencilla y de alto rendimiento, con monitorización en tiempo real.
- [sqs-consumer](https://github.com/bbc/sqs-consumer) - Crea aplicaciones basadas en Amazon Simple Queue Service (SQS) sin código repetitivo.
- [better-queue](https://github.com/diamondio/better-queue) - Cola de tareas sencilla y eficiente para cuando no puedes usar Redis.
- [bullmq](https://github.com/taskforcesh/bullmq) - Cola persistente de tareas y mensajes.
- [bree](https://github.com/breejs/bree) - Planificador de tareas con compatibilidad con hilos de trabajo, cron, fechas y expresiones naturales.
- [graphile-worker](https://github.com/graphile/worker) - Cola de tareas de PostgreSQL de alto rendimiento.

### Gestión de Node.js

- [n](https://github.com/tj/n) - Gestión de versiones de Node.js.
- [nave](https://github.com/isaacs/nave) - Entornos virtuales para Node.js.
- [nodeenv](https://github.com/ekalinin/nodeenv) - Entorno virtual de Node.js compatible con virtualenv de Python.
- [nvm for Windows](https://github.com/coreybutler/nvm-windows) - Gestión de versiones para Windows.
- [nodenv](https://github.com/nodenv/nodenv) - Gestor de versiones similar a rbenv de Ruby. Admite el cambio automático de versión.
- [fnm](https://github.com/Schniz/fnm) - Gestor multiplataforma de versiones de Node.js, escrito en Rust.

### Integración multiplataforma

- [napi-rs](https://github.com/napi-rs/napi-rs) - Framework para crear complementos compilados de Node.js en Rust mediante Node-API.
- [Neon](https://github.com/neon-bindings/neon) - Enlaces de Rust para escribir módulos nativos de Node.js seguros y rápidos.
- [Edge.js](https://github.com/agracio/edge-js) - Ejecuta código .NET y Node.js en el mismo proceso en Windows, macOS y Linux.
- [DotNetJS](https://github.com/Elringus/DotNetJS) - Utiliza bibliotecas .NET en Node.js mediante esta capa de interoperabilidad con .NET.

### Procesamiento del lenguaje natural

- [retext](https://github.com/retextjs/retext) - Sistema extensible de procesamiento del lenguaje natural.
- [franc](https://github.com/wooorm/franc) - Detecta el idioma de un texto.
- [leven](https://github.com/sindresorhus/leven) - Mide la diferencia entre dos cadenas mediante el algoritmo de distancia de Levenshtein.
- [natural](https://github.com/NaturalNode/natural) - Herramientas de procesamiento del lenguaje natural.
- [nlp.js](https://github.com/axa-group/nlp.js) - Crea bots con extracción de entidades, análisis de sentimientos, identificación automática del idioma y mucho más.

### Gestión de procesos

- [PM2](https://github.com/Unitech/pm2) - Gestor avanzado de procesos.
- [nodemon](https://github.com/remy/nodemon) - Supervisa los cambios en tu aplicación y reinicia automáticamente el servidor.
- [node-mac](https://github.com/coreybutler/node-mac) - Ejecuta scripts como un servicio nativo de Mac y registra los mensajes en la aplicación Consola.
- [node-linux](https://github.com/coreybutler/node-linux) - Ejecuta scripts como un servicio nativo del sistema y registra los mensajes en syslog.
- [node-windows](https://github.com/coreybutler/node-windows) - Ejecuta scripts como un servicio nativo de Windows y registra los mensajes en el Visor de eventos.
- [supervisor](https://github.com/petruisfan/node-supervisor) - Reinicia los scripts si fallan o cuando cambia un archivo `*.js`.
- [Phusion Passenger](https://github.com/phusion/passenger) - Gestor de procesos sencillo que se integra directamente con Nginx.

### Automatización

- [robotjs](https://github.com/octalmage/robotjs) - Automatización de escritorio: controla el ratón y el teclado, y lee la pantalla.
- [nut.js](https://github.com/nut-tree/nut.js) - Framework multiplataforma de automatización y pruebas de interfaces gráficas nativas, con reconocimiento de imágenes e integración con Jest.

### AST

- [Acorn](https://github.com/acornjs/acorn) - Analizador de JavaScript pequeño y rápido.
- [babel-parser](https://github.com/babel/babel/tree/master/packages/babel-parser) - Analizador de JavaScript utilizado por Babel.

### Generadores de sitios estáticos

- [DocPad](https://github.com/docpad/docpad) - Generador de sitios estáticos con capacidades dinámicas y un enorme ecosistema de complementos.
- [docsify](https://github.com/docsifyjs/docsify) - Generador de sitios de documentación en Markdown que no requiere archivos HTML generados estáticamente.
- [Charge](https://github.com/brandonweiss/charge) - Generador de sitios estáticos sin configuración y con una estructura definida, basado en JSX y MDX.

### Sistemas de gestión de contenidos

- [KeystoneJS](https://github.com/keystonejs/keystone) - CMS y plataforma de aplicaciones web basados en Express y MongoDB.
- [ApostropheCMS](https://github.com/apostrophecms/apostrophe) - Sistema de gestión de contenidos centrado en la edición y administración intuitivas del contenido en el frontend, construido sobre Express y MongoDB.
- [Strapi](https://github.com/strapi/strapi) - Framework de gestión de contenidos (CMS headless) para crear API potentes.
- [Factor](https://github.com/FactorJS/factor) - Framework de paneles de control y CMS headless para Vue.js.
- [AdminBro](https://github.com/SoftwareBrothers/adminjs) - Panel de administración autogenerado con operaciones CRUD para todos tus recursos.
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - CMS y API GraphQL headless.

### Foros

- [nodeBB](https://github.com/NodeBB/NodeBB) - Plataforma de foros para la web moderna.

### Blogs

- [Ghost](https://github.com/TryGhost/Ghost) - Plataforma de publicación sencilla y potente.
- [Hexo](https://github.com/hexojs/hexo) - Framework para blogs rápido, sencillo y potente.

### Curiosidades

- [cows](https://github.com/sindresorhus/cows) - Vacas en ASCII.
- [superb](https://github.com/sindresorhus/superb) - Obtiene palabras geniales.
- [cat-names](https://github.com/sindresorhus/cat-names) - Obtiene nombres populares para gatos.
- [dog-names](https://github.com/sindresorhus/dog-names) - Obtiene nombres populares para perros.
- [superheroes](https://github.com/sindresorhus/superheroes) - Obtiene nombres de superhéroes.
- [supervillains](https://github.com/sindresorhus/supervillains) - Obtiene nombres de supervillanos.
- [cool-ascii-faces](https://github.com/maxogden/cool-ascii-faces) - Obtiene caras ASCII divertidas.
- [cat-ascii-faces](https://github.com/melaniecebula/cat-ascii-faces) - `₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛ (=ↀωↀ=)✧ (^･o･^)ﾉ”`.
- [nerds](https://github.com/SkyHacks/nerds) - Obtiene datos sobre temas frikis como Harry Potter, Star Wars y Pokémon.

### Serialización

- [snappy](https://github.com/kesla/node-snappy) - Enlaces nativos a la biblioteca de compresión Snappy de Google.
- [protobuf](https://github.com/protobufjs/protobuf.js) - Implementación de Protocol Buffers.
- [compactr](https://github.com/compactr/compactr.js) - Implementación del protocolo Compactr.

### Varios

- [execa](https://github.com/sindresorhus/execa) - Una alternativa mejor a `child_process`.
- [cheerio](https://github.com/cheeriojs/cheerio) - Implementación básica de jQuery rápida, flexible y ligera, diseñada específicamente para el servidor.
- [open](https://github.com/sindresorhus/open) - Abre elementos como sitios web, archivos y ejecutables.
- [hasha](https://github.com/sindresorhus/hasha) - Simplifica el cálculo de hashes. Obtiene el hash de un búfer, cadena, flujo o archivo.
- [dot-prop](https://github.com/sindresorhus/dot-prop) - Obtiene una propiedad de un objeto anidado mediante una ruta con puntos.
- [onetime](https://github.com/sindresorhus/onetime) - Ejecuta una función una sola vez.
- [mem](https://github.com/sindresorhus/mem) - Memoriza funciones, una técnica de optimización que acelera llamadas consecutivas almacenando en caché los resultados de entradas idénticas.
- [strip-bom](https://github.com/sindresorhus/strip-bom) - Elimina la marca de orden de bytes UTF-8 (BOM) de una cadena, búfer o flujo.
- [os-locale](https://github.com/sindresorhus/os-locale) - Obtiene la configuración regional del sistema.
- [ssh2](https://github.com/mscdex/ssh2) - Módulo cliente y servidor SSH2.
- [adit](https://github.com/markelog/adit) - Simplifica la creación de túneles SSH.
- [file-type](https://github.com/sindresorhus/file-type) - Detecta el tipo de archivo de un búfer.
- [Bottleneck](https://github.com/SGrondin/bottleneck) - Limitador de frecuencia que facilita la limitación de solicitudes.
- [webworker-threads](https://github.com/audreyt/node-webworker-threads) - Implementación ligera de la API Web Worker mediante hilos nativos.
- [clipboardy](https://github.com/sindresorhus/clipboardy) - Accede al portapapeles del sistema (copiar y pegar).
- [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) - Facilita la publicación e instalación de complementos C++ de Node.js desde archivos binarios.
- [opencv](https://github.com/peterbraden/node-opencv) - Enlaces para OpenCV, la biblioteca de visión artificial de referencia.
- [dotenv](https://github.com/motdotla/dotenv) - Carga variables de entorno desde un archivo .env.
- [semver](https://github.com/npm/node-semver) - Analizador de versiones semánticas.
- [nodegit](https://github.com/nodegit/nodegit) - Enlaces nativos a Git.
- [json-strictify](https://github.com/pigulla/json-strictify) - Serializa valores a JSON de forma segura, sin pérdida de datos ni bucles infinitos.
- [jsdom](https://github.com/jsdom/jsdom) - Implementación de JavaScript de HTML y del DOM.
- [@sindresorhus/is](https://github.com/sindresorhus/is) - Comprueba el tipo de los valores.
- [env-dot-prop](https://github.com/simonepri/env-dot-prop) - Obtiene, establece o elimina propiedades anidadas de process.env mediante una ruta con puntos.
- [node-video-lib](https://github.com/gkozlenko/node-video-lib) - Biblioteca de JavaScript puro para trabajar con archivos de vídeo MP4 y FLV y crear fragmentos MPEG-TS para transmisiones HLS.
- [basic-ftp](https://github.com/patrickjuchli/basic-ftp) - Cliente FTP/FTPS.
- [cashify](https://github.com/xxczaki/cashify) - Conversión de monedas.
- [genepi](https://github.com/Geode-solutions/genepi) - Genera automáticamente un complemento nativo de Node.js a partir de código C++.
- [husky](https://github.com/typicode/husky) - Crea scripts de hooks de Git.
- [patch-package](https://github.com/ds300/patch-package) - Crea y conserva correcciones para dependencias npm.
- [editly](https://github.com/mifi/editly) - API declarativa para editar vídeos.
- [wild-wild-path](https://github.com/ehmicky/wild-wild-path) - Rutas de propiedades de objetos con comodines y expresiones regulares.
- [uint8array-extras](https://github.com/sindresorhus/uint8array-extras) - Utilidades prácticas para trabajar con Uint8Array y Buffer.

## Gestor de paquetes

- [npm](https://docs.npmjs.com/about-npm) - El gestor de paquetes predeterminado.
- [pnpm](https://pnpm.io) - Gestor de paquetes que ahorra espacio en disco.
- [yarn](https://yarnpkg.com) - Gestor de paquetes alternativo.
- [bun](https://bun.sh) - Kit de herramientas todo en uno para aplicaciones JavaScript y TypeScript.

## Recursos

### Tutoriales

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) - Resumen y recopilación de los contenidos mejor valorados sobre buenas prácticas de Node.js, disponibles en varios idiomas.
- [Nodeschool](https://github.com/nodeschool) - Aprende Node.js con lecciones interactivas.
- [The Art of Node](https://github.com/maxogden/art-of-node/#the-art-of-node) - Introducción a Node.js.
- [module-best-practices](https://github.com/mattdesl/module-best-practices) - Buenas prácticas para escribir nuevos módulos npm.
- [The Node Way](https://github.com/FredKSchott/the-node-way) - Toda una filosofía de buenas prácticas y principios de Node.js para escribir módulos mantenibles, aplicaciones escalables y código realmente agradable de leer.
- [You Don't Know Node.js](https://github.com/azat-co/you-dont-know-node) - Introducción a las funciones principales de Node.js y a JavaScript asíncrono.
- [Portable Node.js guide](https://github.com/ehmicky/cross-platform-node-guide) - Guía práctica para escribir código portable y multiplataforma en Node.js.
- [Build a real web app with no frameworks](https://frameworkless.js.org/course) - Serie de videotutoriales y transmisiones en directo para crear e implementar una aplicación web real utilizando unas cuantas bibliotecas sencillas y los módulos principales de Node.js.

### Descubrimiento

- [npms](https://npms.io) - Excelente buscador de paquetes con análisis exhaustivo de su calidad mediante [una gran variedad de métricas](https://npms.io/about).
- [npm addict](https://npmaddict.com) - Tu dosis diaria de paquetes npm.

### Artículos

- [Error Handling in Node.js](https://sematext.com/blog/node-js-error-handling/)
- [Teach Yourself Node.js in 10 Steps](https://ponyfoo.com/articles/teach-yourself-nodejs-in-10-steps)
- [Mastering the filesystem in Node.js](https://medium.com/@yoshuawuyts/mastering-the-filesystem-in-node-js-4706b7cb0801)
- [Semver: A Primer](https://nodesource.com/blog/semver-a-primer/)
- [Semver: Tilde and Caret](https://nodesource.com/blog/semver-tilde-and-caret/)
- [Why Asynchronous?](https://nodesource.com/blog/why-asynchronous/)
- [Understanding the Node.js Event Loop](https://nodesource.com/blog/understanding-the-nodejs-event-loop/)
- [Understanding Object Streams](https://nodesource.com/blog/understanding-object-streams/)
- [Using Express to Quickly Build a GraphQL Server](https://snipcart.com/blog/graphql-nodejs-express-tutorial)

### Boletines

- [Node Weekly](https://nodeweekly.com) - Recopilación semanal de noticias y artículos sobre Node.js por correo electrónico.

### Vídeos

- [Introduction to Node.js with Ryan Dahl](https://www.youtube.com/watch?v=jo_B4LTHi3I)
- [Hands on with Node.js](https://learn.bevry.me/hands-on-with-node.js/preface)
- [V8 Garbage Collector](https://v8.dev/blog/trash-talk) - Charla sobre el recolector de basura de V8.
- [10 Things I Regret About Node.js by Ryan Dahl](https://www.youtube.com/watch?v=M3BM9TB-8yA) - Charla reveladora del creador de Node.js sobre algunas de sus limitaciones.
- [Mastering REST APIs in Node.js: Zero-To-Hero](https://www.manning.com/livevideo/mastering-rest-apis-in-nodejs) - Curso en vídeo sobre cómo crear API REST con Node.js.
- [Make a vanilla Node.js REST API](https://www.youtube.com/watch?v=_1xa8Bsho6A) - Cómo crear una API REST sin usar un framework como Express.
- [Google I/O 2009 - V8: High Performance JavaScript Engine](https://www.youtube.com/watch?v=FrufJFBSoQY) - Conceptos básicos de la arquitectura de V8 y cómo optimiza la ejecución de JavaScript.
- [Google I/O 2012 - Breaking the JavaScript Speed Limit with V8](https://www.youtube.com/watch?v=UJPdhx5zTaw) - Cómo optimiza V8 la ejecución de JavaScript.
- [Google I/O 2013 - Accelerating Oz with V8: Follow the Yellow Brick Road to JavaScript Performance](https://www.youtube.com/watch?v=VhpdsjBUS3g) - Cómo detectar cuellos de botella en una aplicación y optimizar el rendimiento con los conocimientos de V8.
- [Node.js Internal Architecture | Ignition, Turbofan, Libuv](https://www.youtube.com/watch?v=OCjvhCFFPTw) - Funcionamiento interno de Node.js, con énfasis en V8 y libuv.
- [Introduction to libuv: What's a Unicorn Velociraptor?](https://www.youtube.com/watch?v=_c51fcXRLGw) - Arquitectura de `libuv`, su grupo de hilos y el bucle de eventos, junto con su código fuente.
- [libuv Cross platform asynchronous i/o](https://www.youtube.com/watch?v=kCJ3PFU8Ke8) - Arquitectura de `libuv` en detalle, incluido el uso real de hilos.
- [You Don't Know Node - ForwardJS San Francisco](https://www.youtube.com/watch?v=oPo4EQmkjvY) - Explicación de los componentes internos de Node.js con cuestionarios sobre V8, libuv, el bucle de eventos, los módulos, los flujos y los clústeres.

### Libros

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
- [webapplog.com](https://webapplog.com/tag/node-js/) - Artículos de blog sobre Node.js y JavaScript escritos por Azat Mardan, autor de Practical Node.js y Pro Express.js.

### Cursos

- [Learn to build apps and APIs with Node.js](https://learnnode.com/friend/AWESOME) - Curso en vídeo de Wes Bos.
- [Real Time Web with Node.js](https://www.pluralsight.com/courses/code-school-real-time-web-with-nodejs)
- [Learn and Understand Node.js](https://www.udemy.com/course/understand-nodejs/)
- [Node.js Full Stack Developer Course](https://kinsta.com/academy/course/node-js-full-stack-developer/)

### Chuletas

- [Express.js](https://github.com/azat-co/cheatsheets/tree/master/express4)
- [Stream FAQs](https://github.com/stephenplusplus/stream-faqs) - Respuestas a preguntas frecuentes sobre flujos, con temas como paginación, eventos y otros.
- [Strong Node.js](https://github.com/jesusprubio/strong-node) - Lista de comprobación para analizar la seguridad del código fuente de un servicio web Node.js.

### Herramientas

- [OctoLinker](https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp) - Extensión de Chrome que convierte en enlaces las dependencias en archivos package.json, .js, .jsx, .coffee y .md de GitHub.
- [npm-hub](https://chrome.google.com/webstore/detail/npmhub/kbbbjimdjbjclaebffknlabpogocablj) - Extensión de Chrome que muestra las dependencias npm al pie del README de un repositorio.
- [RunKit](https://runkit.com) - Incrusta un entorno de Node.js en cualquier sitio web.
- [github-npm-stats](https://chrome.google.com/webstore/detail/github-npm-stats/oomfflokggoffaiagenekchfnpighcef) - Extensión de Chrome que muestra las estadísticas de descargas npm en GitHub.
- [npm semver calculator](https://semver.npmjs.com) - Explora visualmente qué versiones de un paquete satisface un rango semver.
- [CodeSandbox](https://codesandbox.io/templates/node-http-server) - IDE en línea y herramienta para crear prototipos.
- [Amplication](https://github.com/amplication/amplication) - Genera automáticamente aplicaciones completamente funcionales.
- [RunJS](https://runjs.app) - Entorno de pruebas de JavaScript para escritorio.

### Comunidad

- [Stack Overflow](https://stackoverflow.com/questions/tagged/node.js)
- [Reddit](https://www.reddit.com/r/node)
- [Twitter](https://twitter.com/nodejs)
- [Hashnode](https://hashnode.com/n/nodejs)
- [Discord](https://discord.com/invite/96WGtJt)

### Varios

- [nodebots](https://nodebots.io) - Robots impulsados por JavaScript.
- [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) - Plantilla inicial para empezar a crear un módulo de Node.js.
- [modern-node](https://github.com/sheerun/modern-node) - Kit de herramientas para crear módulos de Node.js con Jest, Prettier, ESLint y Standard.
- [generator-nm](https://github.com/sindresorhus/generator-nm) - Genera el esqueleto de un módulo de Node.js.
- [Microsoft Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines) - Consejos, trucos y recursos para trabajar con Node.js en plataformas Microsoft.
- [Module Requests & Ideas](https://github.com/sindresorhus/project-ideas) - Solicita un módulo JavaScript que te gustaría que existiera o encuentra ideas para crear módulos.
- [v8-perf](https://github.com/thlorenz/v8-perf) - Notas y recursos sobre el rendimiento de V8 y, por extensión, de Node.js.

## Listas relacionadas

- [awesome-npm](https://github.com/sindresorhus/awesome-npm) - Recursos y consejos para usar npm.
- [awesome-cross-platform-nodejs](https://github.com/bcoe/awesome-cross-platform-nodejs) - Recursos para escribir y probar código multiplataforma.
