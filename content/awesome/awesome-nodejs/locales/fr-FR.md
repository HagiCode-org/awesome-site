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
				<a href="https://github.com/sponsors/sindresorhus">La communauté soutient mes projets de logiciels libres</a>
			</sup>
		</p>
		<sup>Remerciements particuliers à :</sup>
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
			<b>Compilation rapide de conteneurs à distance et exécuteurs GitHub Actions.</b>
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
		<sub>Saisissez simplement <a href="https://node.cool"><code>node.cool</code></a> pour venir ici. Suivez-moi sur <a href="https://twitter.com/sindresorhus">Twitter</a>.</sub>
	</p>
	<br>
	<p>
		<a href="https://en.wikipedia.org/wiki/Node.js">Node.js</a> est un environnement d’exécution JavaScript libre et multiplateforme pour créer des serveurs et des outils en ligne de commande.
	</p>
	<br>
</div>

## Sommaire

- [Officiel](#official)
- [Paquets](#packages)
	- [Science folle](#mad-science)
	- [Applications en ligne de commande](#command-line-apps)
	- [Programmation fonctionnelle](#functional-programming)
	- [HTTP](#http)
	- [Débogage / Profilage](#debugging--profiling)
	- [Journalisation](#logging)
	- [Utilitaires en ligne de commande](#command-line-utilities)
	- [Outils de compilation](#build-tools)
	- [Matériel](#hardware)
	- [Modèles](#templating)
	- [Cadriciels Web](#web-frameworks)
	- [Documentation](#documentation)
	- [Système de fichiers](#filesystem)
	- [Flux de contrôle](#control-flow)
	- [Flux](#streams)
	- [Temps réel](#real-time)
	- [Image](#image)
	- [Texte](#text)
	- [Nombre](#number)
	- [Mathématiques](#math)
	- [Date](#date)
	- [URL](#url)
	- [Validation des données](#data-validation)
	- [Analyse syntaxique](#parsing)
	- [Mise en forme lisible](#humanize)
	- [Compression](#compression)
	- [Réseau](#network)
	- [Base de données](#database)
	- [Tests](#testing)
	- [Sécurité](#security)
	- [Mesure des performances](#benchmarking)
	- [Minificateurs](#minifiers)
	- [Authentification](#authentication)
	- [Autorisation](#authorization)
	- [E-mail](#email)
	- [Files de tâches](#job-queues)
	- [Gestion de Node.js](#nodejs-management)
	- [Intégration multiplateforme](#cross-platform-integration)
	- [Traitement du langage naturel](#natural-language-processing)
	- [Gestion des processus](#process-management)
	- [Automatisation](#automation)
	- [AST](#ast)
	- [Générateurs de sites statiques](#static-site-generators)
	- [Systèmes de gestion de contenu](#content-management-systems)
	- [Forum](#forum)
	- [Blogues](#blogging)
	- [Étrange](#weird)
	- [Sérialisation](#serialization)
	- [Divers](#miscellaneous)
- [Gestionnaire de paquets](#package-manager)
- [Ressources](#resources)
	- [Tutoriels](#tutorials)
	- [Découverte](#discovery)
	- [Articles](#articles)
	- [Infolettres](#newsletters)
	- [Vidéos](#videos)
	- [Livres](#books)
	- [Blogues](#blogs)
	- [Cours](#courses)
	- [Aide-mémoire](#cheatsheets)
	- [Outils](#tools)
	- [Communauté](#community)
	- [Divers](#miscellaneous-1)
- [Listes associées](#related-lists)

## Officiel

- [Site web](https://nodejs.org)
- [Documentation](https://nodejs.org/dist/latest/docs/api/)
- [Dépôt](https://github.com/nodejs/node)

## Paquets

### Science folle

- [webtorrent](https://github.com/webtorrent/webtorrent) - Client de torrent en streaming pour Node.js et le navigateur.
- [peerflix](https://github.com/mafintosh/peerflix) - Client de torrent en streaming.
- [ipfs](https://github.com/ipfs/helia) - Système de fichiers distribué qui cherche à connecter tous les appareils informatiques au moyen d’un système de fichiers commun.
- [stackgl](https://github.com/stackgl) - Écosystème de logiciels libres pour WebGL, construit au-dessus de browserify et npm.
- [peerwiki](https://github.com/mafintosh/peerwiki) - Toute Wikipédia sur BitTorrent.
- [peercast](https://github.com/mafintosh/peercast) - Diffuse une vidéo torrent vers Chromecast.
- [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib) - Bibliothèque Bitcoin propre, lisible et éprouvée.
- [Bitcore](https://github.com/bitpay/bitcore) - Bibliothèque Bitcoin pure et puissante.
- [PDFKit](https://github.com/foliojs/pdfkit) - Bibliothèque de génération de PDF.
- [turf](https://github.com/Turfjs/turf) - Moteur modulaire de traitement et d’analyse géospatiaux.
- [webcat](https://github.com/mafintosh/webcat) - Canal pair à pair sur le Web utilisant WebRTC et votre clé GitHub privée/publique pour l’authentification.
- [NodeOS](https://github.com/NodeOS/NodeOS) - Premier système d’exploitation propulsé par npm.
- [YodaOS](https://github.com/yodaos-project/yodaos) - Système d’exploitation fondé sur l’IA.
- [Brain.js](https://github.com/BrainJS/brain.js) - Cadriciel d’apprentissage automatique.
- [Pipcook](https://github.com/alibaba/pipcook) - Cadriciel d’algorithmes pour l’interface utilisateur, destiné à créer des pipelines d’apprentissage automatique.
- [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) - Modélisation et analyse de la théorie des graphes (autrement dit, des réseaux).
- [js-git](https://github.com/creationix/js-git) - Implémentation de Git en JavaScript.
- [xlsx](https://github.com/SheetJS/sheetjs) - Lecteur et générateur de feuilles de calcul Excel en JavaScript pur.
- [isomorphic-git](https://github.com/isomorphic-git/isomorphic-git) - Implémentation de Git en JavaScript pur.

### Applications en ligne de commande

- [np](https://github.com/sindresorhus/np) - Une meilleure commande `npm publish`.
- [npm-name](https://github.com/sindresorhus/npm-name) - Vérifie si un nom de package est disponible sur npm.
- [gh-home](https://github.com/sindresorhus/gh-home) - Ouvre la page GitHub du dépôt situé dans le répertoire courant.
- [npm-home](https://github.com/sindresorhus/npm-home) - Ouvre la page npm d’un package.
- [trash](https://github.com/sindresorhus/trash) - Alternative plus sûre à `rm`.
- [speed-test](https://github.com/sindresorhus/speed-test) - Teste la vitesse et la latence de votre connexion Internet.
- [pageres](https://github.com/sindresorhus/pageres) - Capture des captures d’écran de sites Web.
- [cpy](https://github.com/sindresorhus/cpy) - Copie des fichiers.
- [vtop](https://github.com/MrRio/vtop) - Une version améliorée de top, avec de beaux graphiques.
- [empty-trash](https://github.com/sindresorhus/empty-trash) - Vide la corbeille.
- [is-up](https://github.com/sindresorhus/is-up) - Vérifie si un site Web est accessible ou non.
- [is-online](https://github.com/sindresorhus/is-online) - Vérifie si la connexion Internet est disponible.
- [public-ip](https://github.com/sindresorhus/public-ip) - Récupère votre adresse IP publique.
- [clipboard-cli](https://github.com/sindresorhus/clipboard-cli) - Copie et colle dans le terminal.
- [XO](https://github.com/xojs/xo) - Impose un style de code strict grâce au style « JavaScript happiness ».
- [ESLint](https://github.com/eslint/eslint) - Outil extensible d’analyse statique pour JavaScript.
- [David](https://github.com/alanshaw/david) - Vous avertit lorsque les dépendances npm de votre package sont obsolètes.
- [http-server](https://github.com/http-party/http-server) - Serveur HTTP en ligne de commande simple et sans configuration.
- [Live Server](https://github.com/tapio/live-server) - Serveur HTTP de développement avec rechargement à chaud.
- [bcat](https://github.com/kessler/node-bcat) - Envoie la sortie d’une commande vers des navigateurs Web.
- [normit](https://github.com/pawurb/normit) - Google Traduction avec synthèse vocale dans votre terminal.
- [fkill](https://github.com/sindresorhus/fkill-cli) - Tue facilement des processus. Multiplateforme.
- [pjs](https://github.com/danielstjules/pjs) - JavaScript utilisable dans des pipelines. Filtre, mappe et réduit rapidement depuis le terminal.
- [license-checker](https://github.com/davglass/license-checker) - Vérifie les licences des dépendances de votre application.
- [browser-run](https://github.com/juliangruber/browser-run) - Exécute facilement du code dans un navigateur.
- [tmpin](https://github.com/sindresorhus/tmpin) - Ajoute la prise en charge de stdin à toute application CLI acceptant des fichiers en entrée.
- [wallpaper](https://github.com/sindresorhus/wallpaper) - Change le fond d’écran.
- [pen](https://github.com/hatashiro/pen) - Prévisualise Markdown dans le navigateur depuis votre éditeur préféré.
- [dark-mode](https://github.com/sindresorhus/dark-mode) - Active ou désactive le mode sombre de macOS.
- [Jsome](https://github.com/Javascipt/Jsome) - Affiche joliment du JSON avec des couleurs et une indentation configurables.
- [mobicon](https://github.com/samverschueren/mobicon-cli) - Générateur d’icônes pour applications mobiles.
- [mobisplash](https://github.com/samverschueren/mobisplash-cli) - Générateur d’écrans de lancement pour applications mobiles.
- [diff2html-cli](https://github.com/rtfpessoa/diff2html-cli) - Générateur de diff Git au format HTML.
- [trymodule](https://github.com/victorb/trymodule) - Essaie des packages npm dans le terminal.
- [jscpd](https://github.com/kucherenko/jscpd) - Détecteur de copier-coller dans le code source.
- [atmo](https://github.com/Raathigesh/Atmo) - Simulation d’API côté serveur.
- [auto-install](https://github.com/siddharthkp/auto-install) - Installe automatiquement les dépendances pendant que vous codez.
- [cost-of-modules](https://github.com/siddharthkp/cost-of-modules) - Identifie les dépendances qui ralentissent votre application.
- [localtunnel](https://github.com/localtunnel/localtunnel) - Expose votre hôte local sur Internet.
- [svg-term-cli](https://github.com/marionebl/svg-term-cli) - Partage des sessions de terminal au format SVG.
- [gtop](https://github.com/aksakalli/gtop) - Tableau de bord de supervision système pour le terminal.
- [themer](https://github.com/themerdev/themer) - Génère des thèmes pour votre éditeur, terminal, fond d’écran, Slack et bien plus.
- [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - Crée de belles images de votre code, directement depuis le terminal.
- [cash-cli](https://github.com/xxczaki/cash-cli) - Convertit entre 170 devises.
- [taskbook](https://github.com/klaussinani/taskbook) - Tâches, tableaux et notes pour votre environnement en ligne de commande.
- [discharge](https://github.com/brandonweiss/discharge) - Déploie facilement des sites statiques sur Amazon S3.
- [npkill](https://github.com/voidcosmos/npkill) - Trouve et supprime facilement les anciens dossiers node_modules volumineux.

### Programmation fonctionnelle

- [lodash](https://github.com/lodash/lodash) - Bibliothèque utilitaire alliant cohérence, personnalisation, performances et fonctionnalités supplémentaires : une version améliorée et plus rapide d’Underscore.js.
- [immutable](https://github.com/immutable-js/immutable-js) - Collections de données immuables.
- [Ramda](https://github.com/ramda/ramda) - Bibliothèque utilitaire axée sur la composition fonctionnelle flexible, rendue possible par le curry automatique et l’inversion de l’ordre des arguments. Évite de modifier les données.
- [Mout](https://github.com/mout/mout) - Bibliothèque utilitaire qui se distingue des solutions existantes en vous permettant de ne charger que les modules et fonctions nécessaires, sans surcharge supplémentaire.
- [RxJS](https://github.com/reactivex/rxjs) - Bibliothèque réactive fonctionnelle permettant de transformer, composer et interroger différents types de données.
- [Kefir.js](https://github.com/kefirjs/kefir) - Bibliothèque réactive axée sur les hautes performances et la faible consommation mémoire.

### HTTP

- [got](https://github.com/sindresorhus/got) - Interface améliorée pour le module `http` intégré.
- [undici](https://github.com/nodejs/undici) - Client HTTP très performant, écrit de zéro et sans dépendances.
- [ky-universal](https://github.com/sindresorhus/ky-universal) - Client HTTP universel fondé sur Fetch.
- [node-fetch](https://github.com/node-fetch/node-fetch) - `window.fetch` pour Node.js.
- [axios](https://github.com/axios/axios) - Client HTTP fondé sur les promesses (fonctionne aussi dans le navigateur).
- [superagent](https://github.com/visionmedia/superagent) - Bibliothèque de requêtes HTTP.
- [http-fake-backend](https://github.com/micromata/http-fake-backend) - Crée un faux backend à partir de fichiers JSON ou d’objets JavaScript accessibles par des routes configurables.
- [cacheable-request](https://github.com/lukechilds/cacheable-request) - Ajoute une prise en charge du cache conforme aux RFC aux requêtes HTTP natives.
- [gotql](https://github.com/khaosdoctor/gotql) - Bibliothèque de requêtes GraphQL construite sur [got](https://github.com/sindresorhus/got).
- [global-agent](https://github.com/gajus/global-agent) - Agent proxy HTTP/HTTPS global configurable à l’aide de variables d’environnement.
- [smoke](https://github.com/sinedied/smoke) - Serveur factice HTTP basé sur des fichiers, avec enregistrement des requêtes.
- [purest](https://github.com/simov/purest) - Client REST.

### Débogage / Profilage

- [debug](https://github.com/debug-js/debug) - Petit utilitaire de débogage.
- [why-is-node-running](https://github.com/mafintosh/why-is-node-running) - Node.js est en cours d’exécution, mais vous ne savez pas pourquoi ?
- [njsTrace](https://github.com/valyouw/njstrace) - Instrumente et trace votre code : affiche les appels de fonctions, leurs arguments et valeurs de retour, ainsi que le temps passé dans chaque fonction.
- [vstream](https://github.com/joyent/node-vstream) - Modules complémentaires instrumentables pour inspecter un pipeline de flux.
- [stackman](https://github.com/watson/stackman) - Enrichit une trace de pile d’erreur avec des extraits de code et d’autres informations utiles.
- [locus](https://github.com/alidavut/locus) - Démarre un REPL à l’exécution qui a accès à toutes les variables.
- [0x](https://github.com/davidmarkclements/0x) - Profilage par graphes en flammes.
- [ctrace](https://github.com/automation-stack/ctrace) - Traces des appels système et des signaux, présentées dans un format amélioré.
- [leakage](https://github.com/andywer/leakage) - Écrit des tests de fuites mémoire.
- [llnode](https://github.com/nodejs/llnode) - Outil d’analyse post-mortem permettant d’inspecter des objets et d’analyser un processus Node.js qui a planté.
- [thetool](https://github.com/sfninja/thetool) - Capture différents profils CPU, mémoire et autres pour votre application, dans un format adapté à Chrome DevTools.
- [swagger-stats](https://github.com/slanatech/swagger-stats) - Trace les appels API et surveille les performances, l’état et les métriques d’utilisation des API.
- [NiM](https://github.com/june07/nim) - Gère le workflow de débogage DevTools.
- [dats](https://github.com/immobiliare/dats) - Client [StatsD](https://github.com/statsd/statsd) minimaliste et sans dépendances.

### Journalisation

- [pino](https://github.com/pinojs/pino) - Journaliseur extrêmement rapide inspiré de Bunyan.
- [winston](https://github.com/winstonjs/winston) - Bibliothèque de journalisation asynchrone avec plusieurs transports.
- [console-log-level](https://github.com/watson/console-log-level) - Journaliseur d’une grande simplicité, avec prise en charge des niveaux de journalisation et des préfixes personnalisés.
- [storyboard](https://github.com/guigrpa/storyboard) - Journaux et récits colorés, hiérarchiques et en temps réel, de bout en bout.
- [consola](https://github.com/unjs/consola) - Journaliseur pour la console.

### Utilitaires en ligne de commande

- [chalk](https://github.com/chalk/chalk) - Mise en forme de chaînes dans le terminal, comme il se doit.
- [meow](https://github.com/sindresorhus/meow) - Assistant pour applications CLI.
- [yargs](https://github.com/yargs/yargs) - Analyseur de ligne de commande qui génère automatiquement une interface utilisateur élégante.
- [ora](https://github.com/sindresorhus/ora) - Indicateur de progression élégant pour le terminal.
- [get-stdin](https://github.com/sindresorhus/get-stdin) - Lecture simplifiée de stdin.
- [log-update](https://github.com/sindresorhus/log-update) - Affiche un journal en écrasant la sortie précédente dans le terminal. Utile pour afficher des barres de progression, des animations, etc.
- [Ink](https://github.com/vadimdemedes/ink) - React pour les applications interactives en ligne de commande.
- [listr2](https://github.com/listr2/listr2) - Liste de tâches pour le terminal.
- [conf](https://github.com/sindresorhus/conf) - Gestion simple de la configuration de votre application ou module.
- [ansi-escapes](https://github.com/sindresorhus/ansi-escapes) - Codes d’échappement ANSI pour manipuler le terminal.
- [log-symbols](https://github.com/sindresorhus/log-symbols) - Symboles colorés pour les différents niveaux de journalisation.
- [figures](https://github.com/sindresorhus/figures) - Symboles Unicode avec solutions de repli pour Windows CMD.
- [boxen](https://github.com/sindresorhus/boxen) - Crée des encadrés dans le terminal.
- [terminal-link](https://github.com/sindresorhus/terminal-link) - Crée des liens cliquables dans le terminal.
- [terminal-image](https://github.com/sindresorhus/terminal-image) - Affiche des images dans le terminal.
- [string-width](https://github.com/sindresorhus/string-width) - Renvoie la largeur visuelle d’une chaîne, c’est-à-dire le nombre de colonnes nécessaires à son affichage.
- [cli-truncate](https://github.com/sindresorhus/cli-truncate) - Tronque une chaîne à une largeur donnée dans le terminal.
- [blessed](https://github.com/chjj/blessed) - Bibliothèque de type curses.
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - Invite interactive en ligne de commande.
- [yn](https://github.com/sindresorhus/yn) - Analyse les valeurs de type oui/non.
- [cli-table3](https://github.com/cli-table/cli-table3) - Jolis tableaux Unicode.
- [drawille](https://github.com/madbence/node-drawille) - Dessine dans le terminal avec les caractères braille Unicode.
- [ascii-charts](https://github.com/jstrace/chart) - Graphique à barres ASCII pour le terminal.
- [progress](https://github.com/visionmedia/node-progress) - Barre de progression ASCII flexible.
- [insight](https://github.com/yeoman/insight) - Vous aide à comprendre l’utilisation de votre outil en envoyant anonymement des métriques d’usage à Google Analytics.
- [cli-cursor](https://github.com/sindresorhus/cli-cursor) - Active ou désactive le curseur de la CLI.
- [cli-columns](https://github.com/shannonmoeller/cli-columns) - Listes de texte en colonnes, compatibles Unicode et ANSI.
- [cfonts](https://github.com/dominikwilkowski/cfonts) - Polices ASCII originales pour la console.
- [multispinner](https://github.com/codekirei/node-multispinner) - Plusieurs indicateurs de progression simultanés et contrôlables individuellement pour la CLI.
- [omelette](https://github.com/f/omelette) - Utilitaire d’auto-complétion pour le shell.
- [cross-env](https://github.com/kentcdodds/cross-env) - Définit des variables d’environnement de façon multiplateforme.
- [shelljs](https://github.com/shelljs/shelljs) - Commandes shell Unix portables.
- [sudo-block](https://github.com/sindresorhus/sudo-block) - Empêche l’exécution de votre application avec les privilèges root.
- [sparkly](https://github.com/sindresorhus/sparkly) - Génère des sparklines `▁▂▃▅▂▇`.
- [Bit](https://github.com/teambit/bit) - Crée, gère, trouve et utilise de petits modules et composants entre dépôts.
- [gradient-string](https://github.com/bokub/gradient-string) - Dégradés de couleurs élégants dans la sortie du terminal.
- [oclif](https://github.com/oclif/oclif) - Cadriciel CLI complet avec analyseur, documentation automatique, tests et extensions.
- [terminal-size](https://github.com/sindresorhus/terminal-size) - Récupère de façon fiable la taille de la fenêtre du terminal.
- [Cliffy](https://github.com/drew-y/cliffy) - Cadriciel pour les interfaces CLI interactives.
- [zx](https://github.com/google/zx) - Écrit des scripts shell en JavaScript.

### Outils de compilation

- [parcel](https://github.com/parcel-bundler/parcel) - Regroupeur d’applications Web ultrarapide, sans configuration.
- [webpack](https://github.com/webpack/webpack) - Regroupe les modules et les ressources pour le navigateur.
- [rollup](https://github.com/rollup/rollup) - Regroupeur de modules ES2015 de nouvelle génération.
- [gulp](https://github.com/gulpjs/gulp) - Système de compilation rapide fondé sur les flux, qui privilégie le code à la configuration.
- [Broccoli](https://github.com/broccolijs/broccoli) - Pipeline de ressources rapide et fiable, prenant en charge les reconstructions à temps constant et les définitions de compilation compactes.
- [Brunch](https://github.com/brunch/brunch) - Outil de compilation front-end pour applications Web, avec une configuration déclarative simple, une compilation incrémentale rapide et un flux de travail prescriptif.
- [FuseBox](https://github.com/fuse-box/fuse-box) - Système de compilation rapide réunissant les atouts de webpack, JSPM et SystemJS, avec une prise en charge native de TypeScript.
- [pkg](https://github.com/vercel/pkg) - Transforme votre projet Node.js en exécutable.
- [Vite](https://github.com/vitejs/vite) - Outil de compilation front-end avec remplacement à chaud des modules et regroupement des ressources statiques.

### Matériel

- [johnny-five](https://github.com/rwaldron/johnny-five) - Cadriciel Arduino fondé sur Firmata.
- [serialport](https://github.com/serialport/node-serialport) - Accède aux ports série en lecture et en écriture.
- [usb](https://github.com/node-usb/node-usb) - Bibliothèque USB.
- [i2c-bus](https://github.com/fivdi/i2c-bus) - Accès au bus série I2C.
- [onoff](https://github.com/fivdi/onoff) - Accès GPIO et détection des interruptions.
- [spi-device](https://github.com/fivdi/spi-device) - Accès au bus série SPI.
- [pigpio](https://github.com/fivdi/pigpio) - GPIO rapide, PWM, contrôle de servomoteurs, notification des changements d’état et gestion des interruptions sur Raspberry Pi.
- [gps](https://github.com/infusion/GPS.js) - Analyseur NMEA pour gérer des récepteurs GPS.
- [modbus-serial](https://github.com/yaacov/node-modbus-serial) - Implémentation purement JavaScript de MODBUS-RTU (série et TCP).

### Modèles

- [marko](https://github.com/marko-js/marko) - Moteur de templates HTML qui compile les modèles en modules CommonJS et prend en charge les flux, le rendu asynchrone et les balises personnalisées.
- [nunjucks](https://github.com/mozilla/nunjucks) - Moteur de templates avec héritage, contrôle asynchrone et bien plus (inspiré de Jinja2).
- [handlebars.js](https://github.com/handlebars-lang/handlebars.js) - Surensemble des templates Mustache ajoutant des fonctionnalités puissantes, comme les assistants et des blocs plus avancés.
- [EJS](https://github.com/mde/ejs) - Langage de templates simple et sans parti pris.
- [Pug](https://github.com/pugjs/pug) - Moteur de templates haute performance fortement inspiré de Haml.

### Cadriciels Web

- [Fastify](https://github.com/fastify/fastify) - Cadriciel Web rapide et léger.
- [Next.js](https://github.com/vercel/next.js) - Cadriciel minimaliste pour applications Web universelles JavaScript rendues côté serveur.
- [Nuxt.js](https://github.com/nuxt/nuxt.js) - Cadriciel minimaliste pour applications Vue.js rendues côté serveur.
- [Hapi](https://github.com/hapijs/hapi) - Cadriciel pour créer des applications et des services.
- [Micro](https://github.com/vercel/micro) - Cadriciel minimaliste de microservices reposant sur une approche asynchrone.
- [Koa](https://github.com/koajs/koa) - Cadriciel conçu par l’équipe à l’origine d’Express, visant à offrir une base plus petite, expressive et robuste pour les applications Web et les API.
- [Express](https://github.com/expressjs/express) - Cadriciel d’applications Web offrant de nombreuses fonctionnalités pour créer des applications Web monopages, multipages et hybrides.
- [Feathers](https://github.com/feathersjs/feathers) - Cadriciel de microservices conçu dans l’esprit d’Express.
- [LoopBack](https://github.com/loopbackio/loopback-next) - Cadriciel puissant pour créer des API REST et se connecter facilement aux sources de données du backend.
- [Meteor](https://github.com/meteor/meteor) - Cadriciel Web JavaScript pur et ultra-simple, où la base de données est partout et les données circulent sur le réseau. *(Vous aimerez peut-être [awesome-meteor](https://github.com/Urigo/awesome-meteor))*
- [Restify](https://github.com/restify/node-restify) - Permet de créer des services Web REST conformes.
- [ThinkJS](https://github.com/thinkjs/thinkjs) - Cadriciel prenant en charge ES2015+, WebSockets et les API REST.
- [ActionHero](https://github.com/actionhero/actionhero) - Cadriciel pour créer des API réutilisables et évolutives pour les sockets TCP, WebSockets et clients HTTP.
- [seneca](https://github.com/senecajs/seneca) - Boîte à outils pour écrire des microservices.
- [AdonisJs](https://github.com/adonisjs/core) - Véritable cadriciel MVC pour Node.js, bâti sur des bases solides d’injection de dépendances et de conteneur IoC.
- [Moleculer](https://github.com/moleculerjs/moleculer) - Cadriciel de microservices rapide et puissant.
- [Nest](https://github.com/nestjs/nest) - Cadriciel inspiré d’Angular pour créer des applications côté serveur efficaces et évolutives.
- [TypeGraphQL](https://github.com/MichalLytek/type-graphql) - Cadriciel moderne pour créer des API GraphQL avec TypeScript, à l’aide de classes et de décorateurs.
- [Tinyhttp](https://github.com/tinyhttp/tinyhttp) - Cadriciel Web moderne et rapide, similaire à Express.
- [Marble.js](https://github.com/marblejs/marble) - Cadriciel réactif fonctionnel pour créer des applications côté serveur, fondé sur TypeScript et RxJS.
- [Lad](https://github.com/ladjs/lad) - Cadriciel créé par un ancien membre des équipes d’Express et de Koa, regroupant des serveurs Web, API, de tâches et proxy.
- [Ts.ED](https://github.com/tsedio/tsed) - Cadriciel TypeScript intuitif pour créer des applications côté serveur sur Express.js ou Koa.js.
- [Hono](https://github.com/honojs/hono) - Cadriciel Web petit et rapide.

### Documentation

- [documentation.js](https://github.com/documentationjs/documentation) - Générateur de documentation d’API prenant en charge ES2015+ et les annotations Flow.
- [Docco](https://github.com/jashkenas/docco) - Générateur de documentation qui produit un document HTML mêlant vos commentaires et votre code.
- [JSDoc](https://github.com/jsdoc/jsdoc) - Générateur de documentation d’API similaire à JavaDoc ou PHPDoc.
- [Docusaurus](https://github.com/facebook/docusaurus) - Générateur de sites de documentation utilisant React et Markdown, avec des fonctionnalités de traduction et de gestion des versions.

### Système de fichiers

- [del](https://github.com/sindresorhus/del) - Supprime des fichiers et dossiers à l’aide de motifs glob.
- [globby](https://github.com/sindresorhus/globby) - Recherche des fichiers avec plusieurs motifs glob.
- [chokidar](https://github.com/paulmillr/chokidar) - Surveille le système de fichiers et stabilise les événements de `fs.watch` et `fs.watchFile`, ainsi que ceux de `fsevents` sur macOS.
- [find-up](https://github.com/sindresorhus/find-up) - Recherche un fichier en remontant les répertoires parents.
- [proper-lockfile](https://github.com/moxystudio/node-proper-lockfile) - Utilitaire de verrouillage entre processus et entre machines.
- [load-json-file](https://github.com/sindresorhus/load-json-file) - Lit et analyse un fichier JSON.
- [write-json-file](https://github.com/sindresorhus/write-json-file) - Sérialise et écrit un fichier JSON de façon atomique.
- [fs-write-stream-atomic](https://github.com/npm/fs-write-stream-atomic) - Comme `fs.createWriteStream()`, mais de façon atomique.
- [filenamify](https://github.com/sindresorhus/filenamify) - Convertit une chaîne en nom de fichier valide.
- [istextorbinary](https://github.com/bevry/istextorbinary) - Détermine si un fichier est du texte ou un fichier binaire.
- [fs-jetpack](https://github.com/szwacz/fs-jetpack) - API de système de fichiers entièrement repensée pour simplifier l’usage quotidien.
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - Méthodes supplémentaires pour le module `fs`.
- [package-directory](https://github.com/sindresorhus/package-directory) - Recherche le répertoire racine d’un package npm.
- [filehound](https://github.com/nspragg/filehound) - Interface flexible et fluide pour rechercher dans le système de fichiers.
- [move-file](https://github.com/sindresorhus/move-file) - Déplace un fichier, même entre différents appareils.
- [tempy](https://github.com/sindresorhus/tempy) - Renvoie le chemin d’un fichier ou répertoire temporaire aléatoire.

### Flux de contrôle

- Promesses
	- [pify](https://github.com/sindresorhus/pify) - Convertit une fonction à rappels en fonction renvoyant une promesse.
	- [delay](https://github.com/sindresorhus/delay) - Diffère une promesse pendant une durée donnée.
	- [promise-memoize](https://github.com/nodeca/promise-memoize) - Mémorise les résultats de fonctions renvoyant des promesses, avec expiration et préchargement.
	- [valvelet](https://github.com/lpinca/valvelet) - Limite la fréquence d’exécution d’une fonction renvoyant une promesse.
	- [p-map](https://github.com/sindresorhus/p-map) - Applique une fonction aux promesses en parallèle.
	- [More…](https://github.com/sindresorhus/promise-fun)
- Observables
	- [RxJS](https://github.com/ReactiveX/RxJS) - Programmation réactive.
	- [observable-to-promise](https://github.com/sindresorhus/observable-to-promise) - Convertit un Observable en promesse.
	- [More…](https://github.com/sindresorhus/awesome-observables)
- Flux
	- [Highland.js](https://github.com/caolan/highland) - Gère facilement le code synchrone et asynchrone, uniquement avec JavaScript standard et des flux de type Node.

### Flux

- [get-stream](https://github.com/sindresorhus/get-stream) - Récupère un flux sous forme de chaîne ou de tampon.
- [from2](https://github.com/hughsk/from2) - Enveloppe pratique de ReadableStream, inspirée de `through2`.
- [into-stream](https://github.com/sindresorhus/into-stream) - Convertit un tampon, une chaîne, un tableau ou un objet en flux.
- [duplexify](https://github.com/mafintosh/duplexify) - Réunit un flux inscriptible et un flux lisible en un seul flux duplex streams2.
- [pumpify](https://github.com/mafintosh/pumpify) - Combine un tableau de flux en un seul flux duplex.
- [peek-stream](https://github.com/mafintosh/peek-stream) - Flux de transformation permettant d’examiner la première ligne avant de choisir comment l’analyser.
- [binary-split](https://github.com/maxogden/binary-split) - Flux qui sépare les lignes (ou tout autre délimiteur).
- [byline](https://github.com/jahewson/node-byline) - Lecteur de flux très simple, ligne par ligne.
- [first-chunk-stream](https://github.com/sindresorhus/first-chunk-stream) - Transforme le premier bloc d’un flux.
- [pad-stream](https://github.com/sindresorhus/pad-stream) - Complète chaque ligne d’un flux.
- [multistream](https://github.com/feross/multistream) - Combine plusieurs flux en un seul.
- [readable-stream](https://github.com/nodejs/readable-stream) - Réplique des implémentations Streams2 et Streams3 du cœur de Node.js.
- [through2-concurrent](https://github.com/almost/through2-concurrent) - Transforme des flux d’objets de façon concurrente.

### Temps réel

- [µWebSockets](https://github.com/uNetworking/uWebSockets) - Bibliothèque serveur et client WebSocket hautement évolutive.
- [Socket.io](https://github.com/socketio/socket.io) - Permet une communication bidirectionnelle événementielle en temps réel.
- [Faye](https://github.com/faye/faye) - Bus de messages client-serveur en temps réel fondé sur le protocole Bayeux.
- [SocketCluster](https://github.com/SocketCluster/socketcluster) - Moteur HTTP et WebSocket évolutif pouvant s’exécuter sur plusieurs cœurs CPU.
- [Primus](https://github.com/primus/primus) - Couche d’abstraction pour les cadriciels temps réel, qui évite l’enfermement dans un module.
- [deepstream.io](https://github.com/deepstreamIO/deepstream.io-client-js) - Cadriciel de microservices évolutif en temps réel.
- [Kalm](https://github.com/kalm/kalm.js) - Routeur de sockets bas niveau et cadriciel de middleware.
- [MQTT.js](https://github.com/mqttjs/MQTT.js) - Client MQTT : protocole de messagerie publication-abonnement sur TCP/IP.
- [rpc-websockets](https://github.com/elpheria/rpc-websockets) - Implémentation de JSON-RPC 2.0 sur WebSockets.
- [Aedes](https://github.com/moscajs/aedes) - Serveur MQTT minimal pouvant s’exécuter sur tout serveur de flux.

### Image

- [sharp](https://github.com/lovell/sharp) - Module le plus rapide pour redimensionner des images JPEG, PNG, WebP et TIFF.
- [image-type](https://github.com/sindresorhus/image-type) - Détecte le type d’une image.
- [image-dimensions](https://github.com/sindresorhus/image-dimensions) - Récupère les dimensions d’une image.
- [lwip](https://github.com/EyalAr/lwip) - Traitement d’images léger ne nécessitant pas ImageMagick.
- [pica](https://github.com/nodeca/pica) - Redimensionnement rapide et de haute qualité (lanczos3) en JavaScript pur. Alternative à canvas drawImage() lorsque la pixellisation est inacceptable.
- [jimp](https://github.com/oliver-moran/jimp) - Traitement d’images en JavaScript pur.
- [qrcode](https://github.com/soldair/node-qrcode) - Générateur de codes QR et de codes-barres.
- [ImageScript](https://github.com/matmen/ImageScript) - Traitement d’images en JavaScript, avec WebAssembly pour les performances.

### Texte

- [iconv-lite](https://github.com/ashtuchkin/iconv-lite) - Convertit les encodages de caractères.
- [string-length](https://github.com/sindresorhus/string-length) - Renvoie la longueur réelle d’une chaîne en comptant correctement les symboles astrals et en ignorant les codes d’échappement ANSI.
- [camelcase](https://github.com/sindresorhus/camelcase) - Convertit une chaîne séparée par des tirets, points, traits de soulignement ou espaces en camelCase : foo-bar → fooBar.
- [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp) - Échappe les caractères spéciaux des expressions régulières.
- [splice-string](https://github.com/sindresorhus/splice-string) - Supprime ou remplace une partie d’une chaîne, comme `Array#splice`.
- [indent-string](https://github.com/sindresorhus/indent-string) - Indente chaque ligne d’une chaîne.
- [strip-indent](https://github.com/sindresorhus/strip-indent) - Supprime les espaces initiaux de chaque ligne d’une chaîne.
- [detect-indent](https://github.com/sindresorhus/detect-indent) - Détecte l’indentation du code.
- [he](https://github.com/mathiasbynens/he) - Encodeur/décodeur d’entités HTML.
- [i18n-node](https://github.com/mashpie/i18n-node) - Module de traduction simple avec stockage JSON dynamique.
- [babelfish](https://github.com/nodeca/babelfish) - Internationalisation avec une syntaxe très simple pour les pluriels.
- [matcher](https://github.com/sindresorhus/matcher) - Correspondance simple avec des caractères génériques.
- [unhomoglyph](https://github.com/nodeca/unhomoglyph) - Normalise les caractères Unicode visuellement similaires.
- [i18next](https://github.com/i18next/i18next) - Cadriciel d’internationalisation.
- [nanoid](https://github.com/ai/nanoid) - Générateur d’identifiants uniques minuscule, sécurisé et adapté aux URL.
- [StegCloak](https://github.com/kurolabs/stegcloak) - Dissimule des secrets dans des chaînes, à la vue de tous.

### Nombre

- [random-int](https://github.com/sindresorhus/random-int) - Génère un entier aléatoire.
- [random-float](https://github.com/sindresorhus/random-float) - Génère un nombre à virgule flottante aléatoire.
- [unique-random](https://github.com/sindresorhus/unique-random) - Génère des nombres aléatoires uniques consécutifs.
- [round-to](https://github.com/sindresorhus/round-to) - Arrondit un nombre à un nombre donné de décimales : `1.234` → `1.2`.

### Mathématiques

- [ndarray](https://github.com/scijs/ndarray) - Tableaux multidimensionnels.
- [mathjs](https://github.com/josdejong/mathjs) - Bibliothèque mathématique complète.
- [math-clamp](https://github.com/sindresorhus/math-clamp) - Borne un nombre.
- [algebra](https://github.com/fibo/algebra) - Structures algébriques.
- [multimath](https://github.com/nodeca/multimath) - Base pour créer rapidement des opérations mathématiques sur les images en WebAssembly et JavaScript.

### Date

- [Luxon](https://github.com/moment/luxon) - Bibliothèque de manipulation des dates et des heures.
- [date-fns](https://github.com/date-fns/date-fns) - Utilitaire moderne pour les dates.
- [Day.js](https://github.com/iamkun/dayjs) - Bibliothèque de dates immuable, alternative à Moment.js.
- [dateformat](https://github.com/felixge/node-dateformat) - Mise en forme des dates.
- [tz-format](https://github.com/samverschueren/tz-format) - Met une date en forme avec son fuseau horaire : `2015-11-30T10:40:35+01:00`.
- [cctz](https://github.com/floatdrop/node-cctz) - Analyse, mise en forme et conversion rapide de fuseaux horaires pour les dates.

### URL

- [normalize-url](https://github.com/sindresorhus/normalize-url) - Normalise une URL.
- [humanize-url](https://github.com/sindresorhus/humanize-url) - Rend une URL plus lisible : https://sindresorhus.com → sindresorhus.com.
- [url-unshort](https://github.com/nodeca/url-unshort) - Développe les URL raccourcies.
- [speakingurl](https://github.com/pid/speakingurl) - Génère un slug à partir d’une chaîne avec translittération.
- [linkify-it](https://github.com/markdown-it/linkify-it) - Détecteur de motifs de liens avec prise en charge complète d’Unicode.
- [url-pattern](https://github.com/snd/url-pattern) - Recherche des motifs dans les URL et autres chaînes plus simplement qu’avec les expressions régulières.
- [embedza](https://github.com/nodeca/embedza) - Crée des extraits et intégrations HTML à partir d’URL et des informations oEmbed, Open Graph et des balises meta.

### Validation des données

- [joi](https://github.com/sideway/joi) - Langage de description de schémas d’objets et validateur pour les objets JavaScript.
- [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) - Validateur JSON Schema très rapide utilisant la génération de code.
- [property-validator](https://github.com/nettofarah/property-validator) - Validation simple de propriétés pour Express.
- [schema-inspector](https://github.com/schema-inspector/schema-inspector) - Assainissement et validation d’API JSON.
- [ajv](https://github.com/ajv-validator/ajv) - Validateur JSON Schema le plus rapide. Prend en charge les propositions v5, v6 et v7.
- [Superstruct](https://github.com/ianstormtaylor/superstruct) - Méthode simple et composable pour valider des données en JavaScript et TypeScript.
- [yup](https://github.com/jquense/yup) - Validation de schémas d’objets.
- [zod](https://github.com/colinhacks/zod) - Validation de schémas TypeScript d’abord, avec inférence de types statique.

### Analyse syntaxique

- [remark](https://github.com/remarkjs/remark) - Processeur Markdown alimenté par des extensions.
- [markdown-it](https://github.com/markdown-it/markdown-it) - Analyseur Markdown prenant en charge à 100 % CommonMark, les extensions et les modules de syntaxe.
- [parse5](https://github.com/inikulin/parse5) - Analyseur HTML rapide, complet et conforme aux spécifications.
- [@parcel/css](https://github.com/parcel-bundler/parcel-css) - Analyseur, transformateur et minificateur CSS écrit en Rust.
- [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) - Supprime les commentaires du JSON.
- [strip-css-comments](https://github.com/sindresorhus/strip-css-comments) - Supprime les commentaires du CSS.
- [parse-json](https://github.com/sindresorhus/parse-json) - Analyse le JSON avec des erreurs plus explicites.
- [URI.js](https://github.com/medialize/URI.js) - Modification d’URL.
- [JSONStream](https://github.com/dominictarr/JSONStream) - Analyse et sérialise du JSON en flux.
- [neat-csv](https://github.com/sindresorhus/neat-csv) - Analyseur CSV rapide. Interface à rappels pour l’outil précédent.
- [csv-parser](https://github.com/mafintosh/csv-parser) - Analyseur CSV en flux visant à être plus rapide que tous les autres.
- [PEG.js](https://github.com/pegjs/pegjs) - Générateur d’analyseurs simple qui produit des analyseurs rapides avec d’excellents rapports d’erreur.
- [x-ray](https://github.com/matthewmueller/x-ray) - Utilitaire d’extraction de données du Web.
- [nearley](https://github.com/kach/nearley) - Analyse syntaxique JavaScript simple, rapide et puissante.
- [binary-extract](https://github.com/juliangruber/binary-extract) - Extrait une valeur d’un tampon JSON sans analyser l’ensemble du contenu.
- [Stylecow](https://github.com/stylecow/stylecow) - Analyse, manipule et convertit le CSS moderne pour le rendre compatible avec tous les navigateurs. Extensible avec des extensions.
- [js-yaml](https://github.com/nodeca/js-yaml) - Analyseur YAML très rapide.
- [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - Convertit XML en objet JavaScript.
- [Jison](https://github.com/zaach/jison) - Générateur d’analyseurs JavaScript convivial, apparenté à Bison, Yacc et leurs dérivés.
- [google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber) - Analyse, met en forme, stocke et valide des numéros de téléphone.
- [ref](https://github.com/TooTallNate/ref) - Lit et écrit des données binaires structurées dans des tampons.
- [xlsx-populate](https://github.com/dtjohnson/xlsx-populate) - Lit et écrit des fichiers Excel XLSX.
- [Chevrotain](https://github.com/Chevrotain/chevrotain) - Boîte à outils JavaScript très rapide et complète pour créer des analyseurs.
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) - Valide et analyse le XML.

### Mise en forme lisible

- [pretty-bytes](https://github.com/sindresorhus/pretty-bytes) - Convertit les octets en chaîne lisible : `1337` → `1.34 kB`.
- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - Convertit les millisecondes en chaîne lisible : `1337000000` → `15d 11h 23m 20s`.
- [ms](https://github.com/vercel/ms) - Petit utilitaire de conversion des millisecondes.
- [pretty-error](https://github.com/AriaMinaei/pretty-error) - Rend les erreurs plus lisibles.
- [read-art](https://github.com/Tjatse/node-readability) - Extrait le contenu lisible de n’importe quelle page.

### Compression

- [yazl](https://github.com/thejoshwolfe/yazl) - Compression ZIP.
- [yauzl](https://github.com/thejoshwolfe/yauzl) - Décompresse les fichiers ZIP.
- [Archiver](https://github.com/archiverjs/node-archiver) - Interface de génération d’archives en flux, prenant en charge ZIP et TAR.
- [pako](https://github.com/nodeca/pako) - Portage zlib haute vitesse en JavaScript pur (deflate, inflate, gzip).
- [tar-stream](https://github.com/mafintosh/tar-stream) - Analyse et génère des archives tar en flux. Voir aussi [tar-fs](https://github.com/mafintosh/tar-fs).

### Réseau

- [get-port](https://github.com/sindresorhus/get-port) - Trouve un port disponible.
- [ipify](https://github.com/sindresorhus/ipify) - Récupère votre adresse IP publique.
- [getmac](https://github.com/bevry/getmac) - Récupère l’adresse MAC de l’ordinateur.
- [DHCP](https://github.com/infusion/node-dhcp) - Client et serveur DHCP.
- [netcat](https://github.com/roccomuso/netcat) - Netcat port dans pur JS.

### Base de données

- Pilotes
	- [PostgreSQL](https://github.com/brianc/node-postgres) - Client PostgreSQL en JavaScript pur avec liaisons natives libpq.
	- [Redis](https://github.com/luin/ioredis) - Client Redis.
	- [LevelUP](https://github.com/Level/levelup) - LevelDB.
	- [MySQL](https://github.com/mysqljs/mysql) - Client MySQL.
	- [couchdb-nano](https://github.com/apache/couchdb-nano) - Client CouchDB.
	- [Aerospike](https://github.com/aerospike/aerospike-client-nodejs) - Client Aerospike.
	- [Couchbase](https://github.com/couchbase/couchnode) - Client Couchbase.
	- [MongoDB](https://github.com/mongodb/node-mongodb-native) - Pilote MongoDB.
- ODM / ORM
	- [Sequelize](https://github.com/sequelize/sequelize) - ORM multi-dialecte prenant en charge PostgreSQL, SQLite, MySQL et d’autres bases.
	- [Bookshelf](https://github.com/bookshelf/bookshelf) - ORM pour PostgreSQL, MySQL et SQLite3, dans le style de Backbone.js.
	- [Mongoose](https://github.com/Automattic/mongoose) - Modélisation élégante d’objets MongoDB.
	- [Waterline](https://github.com/balderdashy/waterline) - Outil indépendant du magasin de données qui simplifie considérablement l’interaction avec une ou plusieurs bases de données.
	- [OpenRecord](https://github.com/PhilWaldmann/openrecord) - ORM pour PostgreSQL, MySQL, SQLite3 et magasins RESTful, similaire à ActiveRecord.
	- [pg-promise](https://github.com/vitaly-t/pg-promise) - Cadriciel PostgreSQL pour SQL natif utilisant des promesses.
	- [slonik](https://github.com/gajus/slonik) - Client PostgreSQL avec typage strict, journalisation détaillée et assertions.
	- [Objection.js](https://github.com/Vincit/objection.js) - ORM léger construit sur le générateur de requêtes SQL Knex.
	- [TypeORM](https://github.com/typeorm/typeorm) - ORM pour PostgreSQL, MariaDB, MySQL, SQLite et d’autres bases.
	- [MikroORM](https://github.com/mikro-orm/mikro-orm) - ORM TypeScript fondé sur les modèles Data Mapper, Unit of Work et Identity Map. Prend en charge MongoDB, PostgreSQL, MySQL et SQLite.
	- [Prisma](https://github.com/prisma/prisma) - Accès moderne aux bases de données (alternative à un ORM). Générateur de requêtes TypeScript généré automatiquement et à typage sûr. Prend en charge PostgreSQL, MySQL et SQLite.
 	- [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) - ORM TypeScript prenant en charge diverses bases de données, notamment PostgreSQL.
- Constructeur de requêtes
	- [Knex](https://github.com/knex/knex) - Générateur de requêtes pour PostgreSQL, MySQL et SQLite3, conçu pour être flexible, portable et agréable à utiliser.
- Autres
	- [NeDB](https://github.com/louischatriot/nedb) - Base de données persistante intégrée, écrite en JavaScript.
	- [Lowdb](https://github.com/typicode/lowdb) - Petite base de données JavaScript propulsée par Lodash.
	- [Keyv](https://github.com/jaredwray/keyv) - Stockage clé-valeur simple prenant en charge plusieurs backends.
	- [Finale](https://github.com/tommybananas/finale) - Générateur de points de terminaison RESTful pour vos modèles Sequelize.
	- [database-js](https://github.com/mlaanderson/database-js) - Enveloppe pour plusieurs bases de données avec une connexion de type JDBC.
	- [Mongo Seeding](https://github.com/pkosiec/mongo-seeding) - Alimente des bases MongoDB à partir de fichiers JavaScript et JSON.
	- [@databases](https://github.com/ForbesLindesay/atdatabases) - Interroge PostgreSQL, MySQL et SQLite3 en SQL brut sans risque d’injection SQL.
	- [pg-mem](https://github.com/oguimbal/pg-mem) - Instance PostgreSQL en mémoire pour vos tests.

### Tests

- [AVA](https://github.com/avajs/ava) - Exécuteur de tests futuriste.
- [Mocha](https://github.com/mochajs/mocha) - Cadriciel de test complet qui rend les tests asynchrones simples et agréables.
- [nyc](https://github.com/istanbuljs/nyc) - Outil de couverture de code fondé sur istanbul et compatible avec les sous-processus.
- [tap](https://github.com/tapjs/node-tap) - Cadriciel de test TAP.
- [tape](https://github.com/substack/tape) - Outil de test qui produit du TAP.
- [power-assert](https://github.com/power-assert-js/power-assert) - Fournit des messages d’assertion détaillés via l’interface standard assert.
- [Mochify](https://github.com/mantoni/mochify.js) - Développement piloté par les tests (TDD) avec Browserify, Mocha, PhantomJS et WebDriver.
- [trevor](https://github.com/vadimdemedes/trevor) - Exécute des tests avec plusieurs versions de Node.js sans changer manuellement de version ni envoyer le code à Travis CI.
- [loadtest](https://github.com/alexfernandez/loadtest) - Exécute des tests de charge de votre application Web à l’aide d’une API d’automatisation.
- [Sinon.JS](https://github.com/sinonjs/sinon) - Espions, bouchons et simulations pour les tests.
- [navit](https://github.com/nodeca/navit) - Enveloppe PhantomJS / SlimerJS simplifiant l’écriture de scripts de test pour navigateurs.
- [Nock](https://github.com/nock/nock) - Simulation et attentes pour HTTP.
- [intern](https://github.com/theintern/intern) - Environnement complet de test de code.
- [toxy](https://github.com/h2non/toxy) - Proxy HTTP modifiable pour simuler des défaillances et des conditions réseau.
- [hook-std](https://github.com/sindresorhus/hook-std) - Intercepte et modifie stdout/stderr.
- [testen](https://github.com/egoist/testen) - Exécute localement des tests pour plusieurs versions de Node.js avec NVM.
- [Nightwatch](https://github.com/nightwatchjs/nightwatch) - Cadriciel de tests automatisés d’interface utilisateur fondé sur Selenium WebDriver.
- [WebdriverIO](https://github.com/webdriverio/webdriverio) - Tests automatisés fondés sur le protocole WebDriver.
- [Jest](https://github.com/facebook/jest) - Tests JavaScript sans prise de tête.
- [Vitest](https://github.com/vitest-dev/vitest) - Cadriciel de tests unitaires rapide propulsé par Vite.
- [TestCafe](https://github.com/DevExpress/testcafe) - Tests automatisés de navigateur.
- [abstruse](https://github.com/bleenco/abstruse) - Serveur d’intégration continue.
- [CodeceptJS](https://github.com/codeceptjs/CodeceptJS) - Tests de bout en bout.
- [Puppeteer](https://github.com/puppeteer/puppeteer) - Chrome sans interface graphique.
- [Playwright](https://github.com/microsoft/playwright) - Chromium, WebKit et Firefox sans interface graphique via une API unique.
- [nve](https://github.com/ehmicky/nve) - Exécute n’importe quelle commande localement avec plusieurs versions de Node.js.
- [axe-core](https://github.com/dequelabs/axe-core) - Moteur d’accessibilité pour les tests automatisés d’interfaces Web.
- [testcontainers-node](https://github.com/testcontainers/testcontainers-node) - Fournit des instances temporaires et légères de bases de données courantes, de navigateurs Web Selenium ou de tout autre logiciel exécutable dans un conteneur Docker.

### Sécurité

- [upash](https://github.com/simonepri/upash) - API unifiée pour tous les algorithmes de hachage de mots de passe.
- [themis](https://github.com/cossacklabs/themis) - Cadriciel multilingue facilitant les schémas de chiffrement courants : données au repos, échange de données authentifié, protection du transport, authentification, etc.
- [GuardRails](https://github.com/apps/guardrails) - Application GitHub qui fournit des commentaires de sécurité sur les demandes de tirage.
- [rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible) - Protection contre les attaques par force brute et DDoS.
- [crypto-hash](https://github.com/sindresorhus/crypto-hash) - Hachage asynchrone et non bloquant.
- [jose-simple](https://github.com/davesag/jose-simple) - Chiffrement et déchiffrement de données selon la norme JOSE (JSON Object Signing and Encryption).

### Mesure des performances

- [Benchmark.js](https://github.com/bestiejs/benchmark.js) - Bibliothèque de mesure des performances prenant en charge les minuteries haute résolution et produisant des résultats statistiquement significatifs.

### Minificateurs

- [babel-minify](https://github.com/babel/minify) - Minificateur compatible avec ES2015+, fondé sur l’ensemble d’outils Babel.
- [UglifyJS2](https://github.com/mishoo/UglifyJS) - Minificateur JavaScript.
- [clean-css](https://github.com/clean-css/clean-css) - Minificateur CSS.
- [minimize](https://github.com/Swaagie/minimize) - Minificateur HTML.
- [imagemin](https://github.com/imagemin/imagemin) - Minificateur d’images.

### Authentification

- [Passport](https://github.com/jaredhanson/passport) - Authentification simple et discrète.
- [Grant](https://github.com/simov/grant) - Fournisseurs OAuth pour Express, Koa, Hapi, Fastify, AWS Lambda, Azure, Google Cloud, Vercel et bien d’autres.

### Autorisation

- [CASL](https://github.com/stalniy/casl) - Autorisation isomorphe pour interfaces utilisateur et API.
- [node-casbin](https://github.com/casbin/node-casbin) - Bibliothèque d’autorisation prenant en charge des modèles de contrôle d’accès tels qu’ACL, RBAC et ABAC.

### E-mail

- [Nodemailer](https://github.com/nodemailer/nodemailer) - La façon la plus rapide de gérer les e-mails.
- [emailjs](https://github.com/eleith/emailjs) - Envoie des e-mails texte/HTML avec pièces jointes vers tout serveur SMTP.
- [email-templates](https://github.com/forwardemail/email-templates) - Crée, prévisualise et envoie des modèles d’e-mail personnalisés.
- [MJML](https://github.com/mjmlio/mjml) - Langage de balisage conçu pour simplifier la création d’e-mails adaptatifs.
- [Forward Email](https://github.com/forwardemail/forwardemail.net) - Service de messagerie libre et auto-hébergeable.

### Files de tâches

- [bull](https://github.com/OptimalBits/bull) - File persistante de tâches et de messages.
- [agenda](https://github.com/agenda/agenda) - Planification des tâches adossée à MongoDB.
- [idoit](https://github.com/nodeca/idoit) - Moteur de file de tâches adossé à Redis, avec contrôle avancé des tâches.
- [node-resque](https://github.com/actionhero/node-resque) - File de tâches adossée à Redis.
- [rsmq](https://github.com/smrchy/rsmq) - File de messages adossée à Redis.
- [bee-queue](https://github.com/bee-queue/bee-queue) - File de tâches performante adossée à Redis.
- [RedisSMQ](https://github.com/weyoss/redis-smq) - File de messages Redis simple et performante, avec supervision en temps réel.
- [sqs-consumer](https://github.com/bbc/sqs-consumer) - Crée des applications fondées sur Amazon Simple Queue Service (SQS) sans code répétitif.
- [better-queue](https://github.com/diamondio/better-queue) - File de tâches simple et efficace lorsque Redis n’est pas disponible.
- [bullmq](https://github.com/taskforcesh/bullmq) - File persistante de tâches et de messages.
- [bree](https://github.com/breejs/bree) - Planificateur de tâches prenant en charge les threads de travail, cron, les dates et une syntaxe naturelle.
- [graphile-worker](https://github.com/graphile/worker) - File de tâches PostgreSQL hautes performances.

### Gestion de Node.js

- [n](https://github.com/tj/n) - Gestion des versions de Node.js.
- [nave](https://github.com/isaacs/nave) - Environnements virtuels pour Node.js.
- [nodeenv](https://github.com/ekalinin/nodeenv) - Environnement virtuel Node.js compatible avec virtualenv de Python.
- [nvm for Windows](https://github.com/coreybutler/nvm-windows) - Gestion des versions pour Windows.
- [nodenv](https://github.com/nodenv/nodenv) - Gestionnaire de versions similaire à rbenv de Ruby. Prend en charge le changement automatique de version.
- [fnm](https://github.com/Schniz/fnm) - Gestionnaire de versions Node.js multiplateforme écrit en Rust.

### Intégration multiplateforme

- [napi-rs](https://github.com/napi-rs/napi-rs) - Cadriciel pour créer des modules complémentaires Node.js compilés en Rust via Node-API.
- [Neon](https://github.com/neon-bindings/neon) - Liaisons Rust pour écrire des modules Node.js natifs rapides et sûrs.
- [Edge.js](https://github.com/agracio/edge-js) - Exécute le code .NET et Node.js dans le même processus sous Windows, macOS et Linux.
- [DotNetJS](https://github.com/Elringus/DotNetJS) - Utilise des bibliothèques .NET dans Node.js grâce à cette couche d’interopérabilité .NET.

### Traitement du langage naturel

- [retext](https://github.com/retextjs/retext) - Système extensible de traitement du langage naturel.
- [franc](https://github.com/wooorm/franc) - Détecte la langue d’un texte.
- [leven](https://github.com/sindresorhus/leven) - Mesure la différence entre deux chaînes avec l’algorithme de distance de Levenshtein.
- [natural](https://github.com/NaturalNode/natural) - Outils de traitement du langage naturel.
- [nlp.js](https://github.com/axa-group/nlp.js) - Crée des robots avec extraction d’entités, analyse des sentiments, identification automatique de la langue et bien plus.

### Gestion des processus

- [PM2](https://github.com/Unitech/pm2) - Gestionnaire de processus avancé.
- [nodemon](https://github.com/remy/nodemon) - Surveille les changements dans votre application et redémarre automatiquement le serveur.
- [node-mac](https://github.com/coreybutler/node-mac) - Exécute des scripts comme service natif macOS et les journalise dans l’application Console.
- [node-linux](https://github.com/coreybutler/node-linux) - Exécute des scripts comme service système natif et les journalise dans syslog.
- [node-windows](https://github.com/coreybutler/node-windows) - Exécute des scripts comme service natif Windows et les journalise dans l’Observateur d’événements.
- [supervisor](https://github.com/petruisfan/node-supervisor) - Redémarre les scripts en cas de plantage ou lorsqu’un fichier `*.js` change.
- [Phusion Passenger](https://github.com/phusion/passenger) - Gestionnaire de processus convivial qui s’intègre directement à Nginx.

### Automatisation

- [robotjs](https://github.com/octalmage/robotjs) - Automatisation de bureau : contrôle la souris et le clavier, et lit l’écran.
- [nut.js](https://github.com/nut-tree/nut.js) - Cadriciel multiplateforme natif d’automatisation et de test d’interfaces graphiques, avec correspondance d’images et intégration à Jest.

### AST

- [Acorn](https://github.com/acornjs/acorn) - Analyseur JavaScript minuscule et rapide.
- [babel-parser](https://github.com/babel/babel/tree/master/packages/babel-parser) - Analyseur JavaScript utilisé par Babel.

### Générateurs de sites statiques

- [DocPad](https://github.com/docpad/docpad) - Générateur de sites statiques doté de fonctionnalités dynamiques et d’un vaste écosystème d’extensions.
- [docsify](https://github.com/docsifyjs/docsify) - Générateur de sites de documentation Markdown sans fichiers HTML préalablement générés.
- [Charge](https://github.com/brandonweiss/charge) - Générateur de sites statiques prescriptif, sans configuration, utilisant JSX et MDX.

### Systèmes de gestion de contenu

- [KeystoneJS](https://github.com/keystonejs/keystone) - CMS et plateforme d’applications Web construits sur Express et MongoDB.
- [ApostropheCMS](https://github.com/apostrophecms/apostrophe) - Système de gestion de contenu axé sur l’édition et l’administration intuitives du contenu front-end, construit sur Express et MongoDB.
- [Strapi](https://github.com/strapi/strapi) - Cadriciel de gestion de contenu (CMS headless) pour créer des API puissantes.
- [Factor](https://github.com/FactorJS/factor) - Cadriciel de tableaux de bord Vue.js et CMS headless.
- [AdminBro](https://github.com/SoftwareBrothers/adminjs) - Panneau d’administration généré automatiquement avec opérations CRUD pour toutes vos ressources.
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - CMS et API GraphQL headless.

### Forum

- [nodeBB](https://github.com/NodeBB/NodeBB) - Plateforme de forum pour le Web moderne.

### Blogues

- [Ghost](https://github.com/TryGhost/Ghost) - Plateforme de publication simple et puissante.
- [Hexo](https://github.com/hexojs/hexo) - Cadriciel de blogue rapide, simple et puissant.

### Étrange

- [cows](https://github.com/sindresorhus/cows) - Vaches en ASCII.
- [superb](https://github.com/sindresorhus/superb) - Génère des mots impressionnants.
- [cat-names](https://github.com/sindresorhus/cat-names) - Génère des noms de chats populaires.
- [dog-names](https://github.com/sindresorhus/dog-names) - Génère des noms de chiens populaires.
- [superheroes](https://github.com/sindresorhus/superheroes) - Génère des noms de super-héros.
- [supervillains](https://github.com/sindresorhus/supervillains) - Génère des noms de super-vilains.
- [cool-ascii-faces](https://github.com/maxogden/cool-ascii-faces) - Génère des visages ASCII amusants.
- [cat-ascii-faces](https://github.com/melaniecebula/cat-ascii-faces) - `₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛ (=ↀωↀ=)✧ (^･o･^)ﾉ”`.
- [nerds](https://github.com/SkyHacks/nerds) - Récupère des données sur des sujets de passionnés comme Harry Potter, Star Wars et Pokémon.

### Sérialisation

- [snappy](https://github.com/kesla/node-snappy) - Liaisons natives pour la bibliothèque de compression Snappy de Google.
- [protobuf](https://github.com/protobufjs/protobuf.js) - Implémentation de Protocol Buffers.
- [compactr](https://github.com/compactr/compactr.js) - Implémentation du protocole Compactr.

### Divers

- [execa](https://github.com/sindresorhus/execa) - Une meilleure alternative à `child_process`.
- [cheerio](https://github.com/cheeriojs/cheerio) - Implémentation rapide, flexible et légère du cœur de jQuery, conçue spécialement pour le serveur.
- [open](https://github.com/sindresorhus/open) - Ouvre divers éléments comme des sites Web, des fichiers et des exécutables.
- [hasha](https://github.com/sindresorhus/hasha) - Simplifie le hachage. Calcule le hachage d’un tampon, d’une chaîne, d’un flux ou d’un fichier.
- [dot-prop](https://github.com/sindresorhus/dot-prop) - Récupère une propriété d’un objet imbriqué à l’aide d’un chemin à points.
- [onetime](https://github.com/sindresorhus/onetime) - N’exécute une fonction qu’une seule fois.
- [mem](https://github.com/sindresorhus/mem) - Mémorise des fonctions, une technique d’optimisation qui accélère les appels successifs en mettant en cache les résultats pour des entrées identiques.
- [strip-bom](https://github.com/sindresorhus/strip-bom) - Supprime la marque d’ordre des octets UTF-8 (BOM) d’une chaîne, d’un tampon ou d’un flux.
- [os-locale](https://github.com/sindresorhus/os-locale) - Récupère la locale du système.
- [ssh2](https://github.com/mscdex/ssh2) - Module client et serveur SSH2.
- [adit](https://github.com/markelog/adit) - Simplifie le tunneling SSH.
- [file-type](https://github.com/sindresorhus/file-type) - Détecte le type de fichier d’un tampon.
- [Bottleneck](https://github.com/SGrondin/bottleneck) - Limiteur de débit qui simplifie la limitation de fréquence.
- [webworker-threads](https://github.com/audreyt/node-webworker-threads) - Implémentation légère de l’API Web Worker avec des threads natifs.
- [clipboardy](https://github.com/sindresorhus/clipboardy) - Accède au presse-papiers du système (copier/coller).
- [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) - Simplifie la publication et l’installation de modules complémentaires Node.js C++ précompilés.
- [opencv](https://github.com/peterbraden/node-opencv) - Liaisons pour OpenCV, la bibliothèque de vision par ordinateur de référence.
- [dotenv](https://github.com/motdotla/dotenv) - Charge les variables d’environnement depuis un fichier .env.
- [semver](https://github.com/npm/node-semver) - Analyseur de versions sémantiques.
- [nodegit](https://github.com/nodegit/nodegit) - Liaisons natives pour Git.
- [json-strictify](https://github.com/pigulla/json-strictify) - Sérialise une valeur en JSON sans perte de données ni boucle infinie.
- [jsdom](https://github.com/jsdom/jsdom) - Implémentation JavaScript de HTML et du DOM.
- [@sindresorhus/is](https://github.com/sindresorhus/is) - Vérifie le type des valeurs.
- [env-dot-prop](https://github.com/simonepri/env-dot-prop) - Récupère, définit ou supprime des propriétés imbriquées de process.env avec un chemin à points.
- [node-video-lib](https://github.com/gkozlenko/node-video-lib) - Bibliothèque JavaScript pure pour manipuler des vidéos MP4 et FLV et créer des segments MPEG-TS pour le streaming HLS.
- [basic-ftp](https://github.com/patrickjuchli/basic-ftp) - Client FTP/FTPS.
- [cashify](https://github.com/xxczaki/cashify) - Conversion de devises.
- [genepi](https://github.com/Geode-solutions/genepi) - Génère automatiquement un module complémentaire Node.js natif à partir de code C++.
- [husky](https://github.com/typicode/husky) - Crée des scripts de hooks Git.
- [patch-package](https://github.com/ds300/patch-package) - Crée et conserve des correctifs pour les dépendances npm.
- [editly](https://github.com/mifi/editly) - API déclarative de montage vidéo.
- [wild-wild-path](https://github.com/ehmicky/wild-wild-path) - Chemins de propriétés d’objets avec caractères génériques et expressions régulières.
- [uint8array-extras](https://github.com/sindresorhus/uint8array-extras) - Utilitaires pratiques pour manipuler Uint8Array et Buffer.

## Gestionnaire de paquets

- [npm](https://docs.npmjs.com/about-npm) - Gestionnaire de paquets par défaut.
- [pnpm](https://pnpm.io) - Gestionnaire de paquets économe en espace disque.
- [yarn](https://yarnpkg.com) - Gestionnaire de paquets alternatif.
- [bun](https://bun.sh) - Boîte à outils tout-en-un pour les applications JavaScript et TypeScript.

## Ressources

### Tutoriels

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) - Synthèse et sélection des contenus les mieux classés sur les bonnes pratiques Node.js, disponibles en plusieurs langues.
- [Nodeschool](https://github.com/nodeschool) - Apprenez Node.js avec des leçons interactives.
- [The Art of Node](https://github.com/maxogden/art-of-node/#the-art-of-node) - Introduction à Node.js.
- [module-best-practices](https://github.com/mattdesl/module-best-practices) - Bonnes pratiques pour écrire de nouveaux modules npm.
- [The Node Way](https://github.com/FredKSchott/the-node-way) - Philosophie et principes directeurs des bonnes pratiques Node.js pour écrire des modules maintenables, des applications évolutives et du code agréable à lire.
- [You Don't Know Node.js](https://github.com/azat-co/you-dont-know-node) - Présentation des fonctionnalités principales de Node.js et de JavaScript asynchrone.
- [Portable Node.js guide](https://github.com/ehmicky/cross-platform-node-guide) - Guide pratique pour écrire du code Node.js portable et multiplateforme.
- [Build a real web app with no frameworks](https://frameworkless.js.org/course) - Série de tutoriels vidéo et diffusions en direct pour créer et déployer une véritable application Web avec quelques bibliothèques simples et les modules principaux de Node.js.

### Découverte

- [npms](https://npms.io) - Moteur de recherche de packages remarquable, avec analyse approfondie de leur qualité à l’aide d’une [multitude de métriques](https://npms.io/about).
- [npm addict](https://npmaddict.com) - Votre dose quotidienne de packages npm.

### Articles

- [Error Handling in Node.js](https://sematext.com/blog/node-js-error-handling/)
- [Teach Yourself Node.js in 10 Steps](https://ponyfoo.com/articles/teach-yourself-nodejs-in-10-steps)
- [Mastering the filesystem in Node.js](https://medium.com/@yoshuawuyts/mastering-the-filesystem-in-node-js-4706b7cb0801)
- [Semver: A Primer](https://nodesource.com/blog/semver-a-primer/)
- [Semver: Tilde and Caret](https://nodesource.com/blog/semver-tilde-and-caret/)
- [Why Asynchronous?](https://nodesource.com/blog/why-asynchronous/)
- [Understanding the Node.js Event Loop](https://nodesource.com/blog/understanding-the-nodejs-event-loop/)
- [Understanding Object Streams](https://nodesource.com/blog/understanding-object-streams/)
- [Using Express to Quickly Build a GraphQL Server](https://snipcart.com/blog/graphql-nodejs-express-tutorial)

### Infolettres

- [Node Weekly](https://nodeweekly.com) - Récapitulatif hebdomadaire par e-mail des actualités et articles Node.js.

### Vidéos

- [Introduction to Node.js with Ryan Dahl](https://www.youtube.com/watch?v=jo_B4LTHi3I)
- [Hands on with Node.js](https://learn.bevry.me/hands-on-with-node.js/preface)
- [V8 Garbage Collector](https://v8.dev/blog/trash-talk) - Présentation du ramasse-miettes V8.
- [10 Things I Regret About Node.js by Ryan Dahl](https://www.youtube.com/watch?v=M3BM9TB-8yA) - Présentation éclairante du créateur de Node.js sur certaines de ses limites.
- [Mastering REST APIs in Node.js: Zero-To-Hero](https://www.manning.com/livevideo/mastering-rest-apis-in-nodejs) - Formation vidéo sur la création d’API REST avec Node.js.
- [Make a vanilla Node.js REST API](https://www.youtube.com/watch?v=_1xa8Bsho6A) - Création d’une API REST sans utiliser de cadriciel comme Express.
- [Google I/O 2009 - V8: High Performance JavaScript Engine](https://www.youtube.com/watch?v=FrufJFBSoQY) - Bases de l’architecture V8 et de l’optimisation de l’exécution JavaScript.
- [Google I/O 2012 - Breaking the JavaScript Speed Limit with V8](https://www.youtube.com/watch?v=UJPdhx5zTaw) - Comment V8 optimise l’exécution JavaScript.
- [Google I/O 2013 - Accelerating Oz with V8: Follow the Yellow Brick Road to JavaScript Performance](https://www.youtube.com/watch?v=VhpdsjBUS3g) - Détecter les goulots d’étranglement et optimiser les performances à l’aide de V8.
- [Node.js Internal Architecture | Ignition, Turbofan, Libuv](https://www.youtube.com/watch?v=OCjvhCFFPTw) - Fonctionnement interne de Node.js, notamment V8 et libuv.
- [Introduction to libuv: What's a Unicorn Velociraptor?](https://www.youtube.com/watch?v=_c51fcXRLGw) - Architecture `libuv`, pool de threads et boucle d’événements, avec le code source.
- [libuv Cross platform asynchronous i/o](https://www.youtube.com/watch?v=kCJ3PFU8Ke8) - Architecture `libuv` en détail, notamment les endroits où des threads sont réellement utilisés.
- [You Don't Know Node - ForwardJS San Francisco](https://www.youtube.com/watch?v=oPo4EQmkjvY) - Explication des rouages de Node.js avec des quiz sur V8, libuv, la boucle d’événements, les modules, les flux et les clusters.

### Livres

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

### Blogues

- [Node.js blog](https://nodejs.org/en/blog/)
- [webapplog.com](https://webapplog.com/tag/node-js/) - Articles sur Node.js et JavaScript par Azat Mardan, auteur de Practical Node.js et Pro Express.js.

### Cours

- [Learn to build apps and APIs with Node.js](https://learnnode.com/friend/AWESOME) - Formation vidéo par Wes Bos.
- [Real Time Web with Node.js](https://www.pluralsight.com/courses/code-school-real-time-web-with-nodejs)
- [Learn and Understand Node.js](https://www.udemy.com/course/understand-nodejs/)
- [Node.js Full Stack Developer Course](https://kinsta.com/academy/course/node-js-full-stack-developer/)

### Aide-mémoire

- [Express.js](https://github.com/azat-co/cheatsheets/tree/master/express4)
- [Stream FAQs](https://github.com/stephenplusplus/stream-faqs) - Réponses aux questions courantes sur les flux, notamment la pagination, les événements et plus encore.
- [Strong Node.js](https://github.com/jesusprubio/strong-node) - Liste de contrôle pour l’analyse de sécurité du code source d’un service Web Node.js.

### Outils

- [OctoLinker](https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp) - Extension Chrome qui transforme en liens les dépendances des fichiers package.json, .js, .jsx, .coffee et .md sur GitHub.
- [npm-hub](https://chrome.google.com/webstore/detail/npmhub/kbbbjimdjbjclaebffknlabpogocablj) - Extension Chrome qui affiche les dépendances npm au bas du fichier README d’un dépôt.
- [RunKit](https://runkit.com) - Intègre un environnement Node.js à n’importe quel site Web.
- [github-npm-stats](https://chrome.google.com/webstore/detail/github-npm-stats/oomfflokggoffaiagenekchfnpighcef) - Extension Chrome qui affiche les statistiques de téléchargements npm sur GitHub.
- [npm semver calculator](https://semver.npmjs.com) - Explore visuellement les versions d’un package correspondant à une plage semver.
- [CodeSandbox](https://codesandbox.io/templates/node-http-server) - IDE et environnement de prototypage en ligne.
- [Amplication](https://github.com/amplication/amplication) - Génère automatiquement des applications entièrement fonctionnelles.
- [RunJS](https://runjs.app) - Environnement de test JavaScript pour ordinateur.

### Communauté

- [Stack Overflow](https://stackoverflow.com/questions/tagged/node.js)
- [Reddit](https://www.reddit.com/r/node)
- [Twitter](https://twitter.com/nodejs)
- [Hashnode](https://hashnode.com/n/nodejs)
- [Discord](https://discord.com/invite/96WGtJt)

### Divers

- [nodebots](https://nodebots.io) - Robots propulsés par JavaScript.
- [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) - Modèle de départ pour créer rapidement un module Node.js.
- [modern-node](https://github.com/sheerun/modern-node) - Boîte à outils pour créer des modules Node.js avec Jest, Prettier, ESLint et Standard.
- [generator-nm](https://github.com/sindresorhus/generator-nm) - Génère la structure initiale d’un module Node.js.
- [Microsoft Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines) - Conseils et ressources pour utiliser Node.js sur les plateformes Microsoft.
- [Module Requests & Ideas](https://github.com/sindresorhus/project-ideas) - Demandez un module JavaScript que vous aimeriez voir ou trouvez des idées de modules.
- [v8-perf](https://github.com/thlorenz/v8-perf) - Notes et ressources sur V8 et, par conséquent, sur les performances de Node.js.

## Listes associées

- [awesome-npm](https://github.com/sindresorhus/awesome-npm) - Ressources et conseils sur npm.
- [awesome-cross-platform-nodejs](https://github.com/bcoe/awesome-cross-platform-nodejs) - Ressources pour écrire et tester du code multiplateforme.
