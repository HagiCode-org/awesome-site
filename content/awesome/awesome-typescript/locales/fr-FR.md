# Awesome TypeScript

## 🗄️ Note d’archivage

<details>
  <summary><strong>Résumé (2026)</strong> - Pourquoi cette liste est archivée</summary>
<hr/>
J’ai lancé awesome-typescript il y a 11 ans, alors que TypeScript prenait encore forme et était loin d’être le choix par défaut qu’il est aujourd’hui. À l’époque, rassembler et sélectionner des ressources avait de l’importance : cela aidait les premiers utilisateurs à trouver des contenus fiables, à partager leur expérience et à créer une communauté autour d’un outil que beaucoup de développeurs sous-estimaient.

Au fil des ans, j’ai souvent débattu de l’avenir de TypeScript (notamment entre 2016 et 2018). Je pensais qu’il deviendrait un pilier du développement moderne. Aujourd’hui, ce résultat est indéniable. TypeScript est désormais le langage de fait du développement front-end et se retrouve partout : dans les applications, les SDK, les exemples et même des projets sans lien étroit avec lui.

Ce succès pose un nouveau problème pour cette liste. Lorsque presque tous les projets utilisent TypeScript, accepter toutes les contributions possibles ne relève plus de la sélection, mais d’une maintenance sans limites. Les contributions de la communauté ont ralenti, le rapport signal/bruit a évolué et continuer à étoffer la liste ne sert plus son objectif initial.

Plutôt que de continuer à maintenir une liste qui ne peut plus représenter un ensemble pertinent et sélectionné des meilleures ressources actuelles, j’archive awesome-typescript et le conserve comme référence historique.

Merci à toutes les personnes qui ont contribué, en envoyant des pull requests, en proposant des ressources ou en partageant leurs commentaires. Votre aide a rendu cette liste utile au moment où elle comptait le plus et a rassemblé les premiers membres de la communauté TypeScript.
<br/><hr />

</details>

<hr />

#### -= Awesome TypeScript =- [Awesome Elasticsearch](https://github.com/dzharii/awesome-elasticsearch) →

> Une sélection de ressources TypeScript pour le développement côté client et serveur. Écrivez un JavaScript remarquable avec TypeScript. Inspiré des listes [awesome](https://github.com/sindresorhus/awesome).

## Autres ressources awesome

> [semlinker/awesome-typescript](https://github.com/semlinker/awesome-typescript) Merci à @semlinker d’avoir sélectionné ces ressources !

## Contribuer

Veuillez d’abord consulter rapidement les [consignes de contribution](/contributing.md). Si un paquet ou un projet de cette liste n’est plus maintenu ou ne convient pas, veuillez proposer une pull request pour améliorer ce fichier.

## Sommaire

- [Ressources essentielles TypeScript](#awesome-typescript-essential-resources)
- [Modèles de démarrage de projets TypeScript](#typescript-project-starters)
- [Livres](#books)
- [Listes de référence](#reference-lists)
- [Blogs](#blogs)
- [CLI et REPL](#cli-and-repl)
- [IDE](#ide)
- [Systèmes de compilation](#build-systems)
- [Entrepôts de données cloud](#cloud-data-warehousing)
- [Bundlers de modules](#module-bundlers)
- [CMS](#cms)
- [Outils](#tools)
- [CSS-in-JS avec types](#css-in-js-with-types)
- [Types](#types)
- [Exécution](#runtime)
- [Réalisé avec TypeScript : mobile, Web, API back-end, applications autonomes, bibliothèques](#built-with-typescript)
- [LLM](#llm)
- [Cours vidéo](#video-courses)
- [Tutoriels](#tutorials)
- [Feuille de route](#roadmap)
- [Remerciements](#acknowledgements)

## Bien démarrer avec (Awesome) TypeScript

### Ressources essentielles TypeScript
* :books: [Handbook - Welcome to TypeScript](http://www.typescriptlang.org/Handbook) la ressource officielle pour apprendre TypeScript
* :books: [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/) de [Basarat Ali Syed](https://twitter.com/basarat)
* :octocat: [Microsoft/TypeScript on Github](https://github.com/Microsoft/TypeScript) Créez un fork de TypeScript sur GitHub ! Ou… lisez simplement le code
* :octocat:[The official TypeScript Roadmap](https://github.com/Microsoft/TypeScript/wiki/Roadmap)
* :books: [TypeScript Team Blog](http://blogs.msdn.com/b/typescript/) avec les annonces et les dernières actualités
* :octocat: [DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) le dépôt de définitions de types TypeScript de grande qualité, maintenues par Boris Yankov et des milliers de contributeurs
* :octocat: [Type search](https://aka.ms/typings), recherchez des définitions de types sur npm
* :books: [Community Curated Resources](https://hackr.io/tutorials/learn-typescript)
* :octocat: [Clean Code concepts adapted for TypeScript](https://github.com/labs42io/clean-code-typescript)
* :computer: [Should You Learn TypeScript? (Benefits & Resources)](https://snipcart.com/blog/learn-typescript-why-use-ts)
* :computer: [Learn how to unleash the full potential of the Turing Complete type system of TypeScript!](https://type-level-typescript.com), 💵 cours en ligne dont les cinq premiers chapitres sont gratuits, par [Gabriel Vergnaud](https://twitter.com/GabrielVergnaud)
* :computer: [Codington](https://codington.io) Exercices interactifs de pratique de TypeScript avec retour immédiat, conçus pour apprendre et enseigner.
* :octocat: [Codebook](https://github.com/gvanastasov/codebook-typescript) lisez et exécutez de courts extraits de code pour apprendre progressivement TypeScript, des notions de base aux concepts avancés.
* :octocat: [Type Challenges](https://github.com/type-challenges/type-challenges) Collection de défis sur les types TypeScript avec évaluateur en ligne.
- :books: [TypeScript Style Guide](https://mkosir.github.io/typescript-style-guide) Un ensemble concis de conventions et de bonnes pratiques pour créer du code cohérent et facile à maintenir.
- :art: [Visual Types](https://types.kitlangton.com/) Visualisations interactives des concepts de TypeScript. Admirez ces jolies couleurs.

### Modèles de démarrage de projets TypeScript
* [React Starter Kit](https://github.com/kriasoft/react-starter-kit) – Un modèle de pile complète pour créer des applications Web modernes avec Bun, TypeScript, React, tRPC, Drizzle ORM et Cloudflare Workers.
* [typescript-starter](https://github.com/bitjson/typescript-starter) – Une interface en ligne de commande pour générer et configurer rapidement de nouvelles bibliothèques et de nouveaux projets Node.js
* [next-smrt](https://github.com/csprance/next-smrt) – Un modèle TypeScript/Next.js avec Redux, Styled Components, Material UI et TypeSafe Actions.
* :octocat: [Next-Postgres-With-Typescript](https://github.com/brandontle/next-postgres-with-typescript) - Modèle d’application Web complète de type forum avec Next.js 7.0.2, Sequelize 4/Postgres, TypeScript, Redux, Passport Local Auth et Emotion
* [MicroTS](https://www.npmjs.com/package/microts) Générateur de code de microservices privilégiant les interfaces : à partir d’une spécification d’API REST OpenAPI (Swagger), il génère un projet complet avec du code TypeScript, un validateur d’entrées, une interface utilisateur, des tests et une configuration Docker.
* [pankod/next-boilerplate](https://github.com/pankod/next-boilerplate) Un modèle Next.js bien structuré et prêt pour la production, avec TypeScript, Redux, Jest, Enzyme, Express.js, Sass, CSS, EnvConfig, un proxy inverse, un analyseur de paquets et une interface en ligne de commande intégrée
* [jsynowiec/node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate) Modèle complet, minimaliste, à jour et prêt à l’emploi pour les développeurs. Fonctionne immédiatement avec la plupart des projets Node.js. Tous les outils essentiels sont inclus et configurés. Cible les dernières versions LTS de Node.js et de TypeScript.
* [typescript-express-starter](https://github.com/ljlm0402/typescript-express-starter) - Un modèle de démarrage TypeScript et Express rapide et facile à utiliser.
* [The Knests Stack](https://github.com/tudorconstantin/knests/) - Modèle complet (pour démarrer un hackathon) comprenant PostgreSQL, Knex.js, NestJS, Next.js, GraphQL, React (avec hooks et TypeScript), Material-UI, des images Docker à plusieurs étapes, Docker Compose et un pipeline GitLab CI/CD entièrement configuré.
* [tRPC + Next.js](https://trpc.io/docs/nextjs/introduction) - Projets de démarrage complets pour un développement avec React entièrement sécurisé par les types
* [nd.ts](https://github.com/heyayushh/nd.ts/) - configurez au plus vite un projet Node.ts minimal
* :octocat: [samchon/backend](https://github.com/samchon/backend) - Modèle de projet back-end TypeScript utilisant [NestJS](https://nestjs.com) ([nestia](https://github.com/samchon/nestia)) et [TypeORM](https://typeorm.io) ([safe-typeorm](https://github.com/samchon/safe-typeorm)). Les projets d’exemple qui en découlent aident les développeurs back-end débutants. Il prend également en charge les mises à jour sans interruption au niveau des processus grâce à [pm2](https://pm2.keymetrics.io/).
* :ok_man: [ts-express-boilerplate](https://github.com/d4rkstar/ts-express-boilerplate) - Modèle ExpressJS/TypeScript idéal pour démarrer des projets back-end, axé sur la simplicité et un nombre réduit de fonctionnalités :P La journalisation et les tests sont préconfigurés. TypeORM est utilisé pour l’accès aux données.
* [create-typescript-app](https://github.com/hein-htut-aung/create-typescript-app) - fournit un point de départ pour les applications Web TypeScript : pnpm, Rollup, Jest et CSS Modules avec SCSS.
* [ts-vite-npm-template](https://github.com/kaandesu/ts-vite-npm-template) - Solution tout-en-un pour créer des paquets NPM en TypeScript avec Vite, comprenant le déploiement intégré de démonstrations en direct sur GitHub Pages, des processus automatisés de test et de compilation, une configuration de tests unitaires propulsée par Vite avec analyse de couverture, ainsi qu’un modèle README.md pour votre paquet.

### Livres
* :books: [TypeScript in 50 Lessons](https://typescript-book.com/) de Stefan Baumgartner
* :books: :fire: [TypeScript Quickly](https://www.manning.com/books/typescript-quickly) Apprenez le TypeScript moderne et créez votre propre blockchain ; exemples de code disponibles :octocat:[yfain/getts](https://github.com/yfain/getts)
* :books: [Angular Development with Typescript, Second Edition (MEAP October 2017)](https://www.manning.com/books/angular-development-with-typescript-second-edition) Angular Development with Typescript, Second Edition est un tutoriel de niveau intermédiaire qui présente Angular et TypeScript aux développeurs déjà à l’aise avec la création d’applications Web à l’aide d’autres frameworks et outils. (par Yakov Fain et Anton Moiseev ; Manning)
* :books: [Angular 2 Development with TypeScript (2016)](https://www.manning.com/books/angular-2-development-with-typescript) de Yakov Fain et Anton Moiseev ; Manning
* :books: [Learning TypeScript 2.x 2nd Ed.](https://www.learningtypescript.com) de Remo H. Jansen
* :books: [Mastering TypeScript 2nd Ed.](https://www.packtpub.com/application-development/mastering-typescript-second-edition) de Nathan Rozentals
* :books: [Beginning Angular 4 with TypeScript](https://www.amazon.com/Beginning-Angular-Typescript-Greg-Lim/dp/1542916674) de Greg Lim
* :books: [Programming with Types](https://www.manning.com/books/programming-with-types) - Un livre expliquant comment concevoir des logiciels sûrs, résilients, corrects et faciles à maintenir et à comprendre, en tirant parti de la puissance des systèmes de types. (par Vlad Riscutia)
* :books: [Essential TypeScript 5](https://www.manning.com/books/essential-typescript-5) - Troisième édition du guide de TypeScript à succès. (par Adam Freeman)
* :books: [Effective TypeScript](https://www.oreilly.com/library/view/effective-typescript/9781492053736/) de Dan Vanderkam
* :books: [Advanced TypeScript 3 Programming Projects](https://www.packtpub.com/product/advanced-typescript-3-programming-projects/9781789133042) de Peter O'Hanlon
* :books: [The Concise TypeScript Book (Free and Open Source)](https://github.com/gibbok/typescript-book) de Simone Poggiali
* :books: [Acing the Frontend Interview (Early Access)](https://www.manning.com/books/acing-the-frontend-interview) de Jennifer Fu (Manning)

### Listes de référence
* [TypeScript Reference for JS developers](https://welldan97.github.io/typescript-reference/) - Glossaire des mots-clés, opérateurs, instructions et directives

### Articles de blog
* [@captain-yossarian's blog](https://catchts.com/) - entièrement consacré au typage statique en TypeScript

### CLI et REPL
* [Taze](https://github.com/antfu/taze) Un outil CLI moderne qui maintient vos dépendances à jour
* Utilisez [ts-node](https://github.com/TypeStrong/ts-node) pour exécuter des scripts ou utiliser le REPL
* Comment créer des scripts TypeScript exécutables :
  1. Assurez-vous que `npx` (fourni avec `npm >= 5.2`) et le paquet `typescript` sont installés
  1. Ajoutez ce [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) comme première ligne de votre script : `#!npx ts-node`
  1. Rendez le script exécutable : `chmod +x script.ts`
  1. Exécutez-le directement : `./script.ts` :)

### Environnements de développement (IDE)
#### Hors ligne
##### Visual Studio
* [ Visual Studio Community Edition 2015](https://www.visualstudio.com/products/visual-studio-community-vs) - environnement de développement intégré gratuit (sous certaines conditions) avec prise en charge de TypeScript
  * [VS Addon - TypescriptSyntaxPaste](https://visualstudiogallery.msdn.microsoft.com/eb0887f8-3ac1-434a-b50b-f0112f1572f7) - Permet de copier du code source C#, puis de le coller sous forme de syntaxe TypeScript afin de faciliter sa conversion en DTO ou en interface
* [NodeJS Tools for Visual Studio](https://github.com/Microsoft/nodejstools)

##### Autres (extensions || multiplateforme || logiciels à code source ouvert || gratuits)
* [Visual Studio Code](https://www.visualstudio.com/en-us/products/code-vs.aspx)
* [PhpStorm](https://www.jetbrains.com/phpstorm/download/)
* [WebStorm](https://www.jetbrains.com/webstorm/download/)
* [CATS](http://jbaron.github.io/cats/) est un environnement de développement pour TypeScript et les développeurs Web, créé par @jbaron
* [TypeScript Sublime Plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin) par @Microsoft
* [Atom TypeScript](https://github.com/TypeStrong/atom-typescript) par @TypeStrong
* [TypeScript Interactive Development Environment for Emacs](https://github.com/ananthakumaran/tide) par @ananthakumaran
* [TypeScript Syntax for VIM](https://github.com/leafgarland/typescript-vim)
* :octocat: [Typescript addin for](https://github.com/mrward/typescript-addin) MonoDevelop, SharpDevelop et Xamarin Studio ; un court [article de présentation](http://lastexitcode.com/blog/2015/04/01/TypeScriptSupportInXamarinStudio/)
* [Typescript tooling for Neovim](https://github.com/mhartington/nvim-typescript) est un plug-in de service de langage TypeScript pour Neovim.
* [Coc](https://github.com/neoclide/coc.nvim) Rendez Vim/Neovim aussi intelligent que VS Code.

#### En ligne

##### Environnement de test
* [TypeScript playground](https://agentcooper.github.io/typescript-play/) par @agentcooper, prend en charge plusieurs versions de TS et cibles de compilation
* [TypeScript playground-on-ace](https://github.com/hi104/typescript-playground-on-ace) par @hi104 [mis à jour pour TypeScript 1.5](https://github.com/basarat/TypeScriptEditor)
* [TypeScript official Playground](http://www.typescriptlang.org/Playground/)
* [JS Bin](http://jsbin.com/?js) (Sélectionnez TypeScript)
* [Codepen](http://codepen.io/) (Sélectionnez TypeScript)
* [TypeScript Interpret - Terminal Emulator](http://niutech.github.io/typescript-interpret/) par @niutech
* [TypeScript Editor](http://drake7707.github.io/Typescript-Editor/) par @drake7707

## Systèmes de compilation
* [Grunt](http://gruntjs.com/) (tâches) :
  - [grunt-ts](https://www.npmjs.com/package/grunt-ts) - Grunt-ts est un package npm qui gère la compilation TypeScript dans les scripts de compilation GruntJS
* [Zwitterion](https://github.com/lastmjs/zwitterion) - Serveur de développement très simple avec prise en charge intégrée des fichiers TypeScript.
* [Nx](https://github.com/nrwl/nx) - Système de compilation intelligent, rapide et extensible

## Entrepôts de données cloud
* :sparkles: [Crisp BigQuery](https://github.com/winwiz1/crisp-bigquery) Projet de démarrage qui transmet les données Google BigQuery aux navigateurs des utilisateurs finaux tout en maîtrisant les coûts. Permet de mettre en œuvre des options riches de présentation des données.
* [DDB-Table](https://github.com/neuledge/ddb-table) Requêtes et tables fortement typées pour AWS DynamoDB
* [DynamoDB-Toolbox](https://github.com/dynamodb-toolbox/dynamodb-toolbox) Constructeur de requêtes léger et sécurisé par les types pour AWS DynamoDB

## Bundlers de modules
* [Farm](https://farm-fe.github.io/) - Outil de compilation Web extrêmement rapide et compatible avec Vite, écrit en Rust
* [Rspack](https://www.rspack.dev/) - Un bundler Web rapide basé sur Rust 🦀️
* [Vite](https://vitejs.dev/) - Outils de nouvelle génération pour le développement front-end
* [Webpack](http://webpack.github.io/) - prend en charge le regroupement de modules CommonJS et AMD
* [Browserify](http://browserify.org/) - Bundler de modules CommonJS. Ne prend pas en charge TypeScript « prêt à l’emploi », mais peut être utilisé avec les tâches suivantes : * [Grunt](http://gruntjs.com/) : [grunt-ts](https://www.npmjs.com/package/grunt-ts), [grunt-browserify](https://www.npmjs.com/package/grunt-browserify), [grunt-contrib-uglify](https://www.npmjs.com/package/grunt-contrib-uglify)
* [fuse-box](https://github.com/fuse-box/fuse-box) | [http://fuse-box.org/](http://fuse-box.org/) - exemple TypeScript : [fuse-box-ts-react-reflux-seed](https://github.com/fuse-box/fuse-box-ts-react-reflux-seed)

## Systèmes de gestion de contenu (CMS)
* [Factor](https://factor.dev) - Le CMS JavaScript (avec prise en charge native de TypeScript)
* [Graphweaver](https://github.com/exogee-technology/graphweaver) - Transforme plusieurs sources de données en un CMS headless GraphQL unique.

## Outils
* [sqlx-ts](https://github.com/JasonShin/sqlx-ts) - SQLx-ts est une application CLI qui vérifie les requêtes à la compilation sans DSL et génère des types à partir des requêtes SQL afin de garantir la sûreté des types dans votre code
* [bun](https://bun.sh/) - Bun est un environnement d’exécution JavaScript rapide, un gestionnaire de paquets, un bundler et un exécuteur de tests
* [deno](https://deno.land/) - Un environnement d’exécution sécurisé pour JavaScript et TypeScript
* [OXC](https://github.com/web-infra-dev/oxc) - Une suite d’outils hautes performances pour JavaScript et TypeScript, écrits en Rust
* [biome](https://github.com/biomejs/biome) - Biome formate et analyse votre code en une fraction de seconde
* [SweetIQ/schemats](https://github.com/SweetIQ/schemats) Génère des définitions d’interfaces TypeScript à partir d’un schéma de base de données SQL
* [TypeDoc](http://typedoc.org/) - Un générateur de documentation pour les projets TypeScript
* [TypeScript Standard](https://github.com/e2tox/typescript-standard) - Validation standard de TypeScript 2 sans configuration
* [typed-install](https://github.com/xavdid/typed-install) - Installez facilement de nouvelles dépendances et leurs définitions de types, où qu’elles se trouvent
* [type-config](https://github.com/Saul-Mirone/type-config) - Un générateur de tsconfig.
* [Zapatos](https://jawj.github.io/zapatos/) - Postgres sans abstraction pour TypeScript
* [dep-tree](https://github.com/gabotechs/dep-tree) - Affichez l’arborescence des dépendances de fichiers de votre projet et/ou validez-la selon vos propres règles.
* [itertools-ts](https://github.com/Smoren/itertools-ts) - Port étendu d’itertools pour TypeScript et JavaScript. Fournit un grand nombre de fonctions pour manipuler des collections itérables (y compris asynchrones).
* [ParaglideJS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) - Un compilateur i18n qui génère des traductions entièrement sécurisées par les types
* [pg](https://github.com/datawan-labs/pg) - Environnement de test PostgreSQL dans le navigateur, sans serveur : uniquement le client et pglite (PostgreSQL en WebAssembly)
* [nocodb](https://github.com/nocodb/nocodb) - Alternative open source à Airtable
* [jqlite](https://github.com/Jay-Karia/jqlite) - Le langage de requête pour JSON
* [pompelmi](https://github.com/pompelmi/pompelmi) - Analyse les fichiers téléversés pour détecter les logiciels malveillants dans Node.js et prévenir les inclusions de fichiers distants (RFI), avec des adaptateurs pour Express, Koa et Next.js
* [codables](https://codableslib.com/) - Sérialiseur/désérialiseur JSON déclaratif fondé sur des décorateurs et richement typé, capable de gérer presque tous les types de données
* [Rev-dep](https://github.com/jayu/rev-dep) - Suivez les imports, repérez les dépendances circulaires et le code inutilisé, nettoyez les modules Node — le tout depuis une CLI ultra-rapide.

## Types
* [jsonup](https://github.com/tani/jsonup) - Analyseur JSON à la compilation
* [type-o-rama](https://github.com/stereobooster/type-o-rama) - Interopérabilité des systèmes de types JavaScript
* [utility-types](https://github.com/piotrwitek/utility-types) - Types utilitaires pour TypeScript (compatibles avec les types utilitaires de Flow)
* [elm-ts](https://github.com/gcanti/elm-ts) - Portage de l’architecture Elm vers TypeScript, avec fp-ts, io-ts, rxjs5 et React
* [ts-essentials](https://github.com/krzkaczor/ts-essentials) - Tous les types TypeScript essentiels réunis au même endroit
* [typescript-conditional-types](https://github.com/LeDDGroup/typescript-conditional-types) - Fonctions utilitaires pour les types génériques TypeScript
* [ts-types-utils](https://github.com/LeDDGroup/ts-types-utils) - Utilitaires de types pour TypeScript
* [typesync](https://github.com/jeffijoe/typesync) - Installe les définitions de types TypeScript manquantes pour les dépendances de votre package.json.
* [type-fest](https://github.com/sindresorhus/type-fest) - Collection de types TypeScript essentiels
* [typetype](https://github.com/mistlog/typetype) - Langage de programmation conçu pour générer des types TypeScript
* [nominal](https://github.com/Coder-Spirit/nominal) - Types nominaux et types dépendants pour TypeScript.
* [@tool-belt/type-predicates](https://github.com/tool-belt/type-predicates) - Prédicats de type, fonctions d’assertion et utilitaires.
* [getmytypes](https://github.com/halchester/getmytypes) - Installe les fichiers @types dans vos dépendances de développement.
* [ts-toolbelt](https://github.com/millsp/ts-toolbelt) - Vaste collection d’utilitaires de types pour TypeScript
* [string-ts](https://github.com/gustavoguichard/string-ts) - Fonctions de chaînes fortement typées pour tous
* [lib-result](https://github.com/AhmedOsman101/lib-result) - Un type `Result` léger inspiré de Rust, pour gérer les erreurs de manière sûre en TypeScript et JavaScript.
* [iso-locale](https://github.com/reacture-io/iso-locale) - Bibliothèque TypeScript complète proposant les normes ISO pour gérer les pays, langues, dialectes et devises.

## CSS-in-JS avec types
* [PandaCSS](https://panda-css.com/) - CSS-in-JS avec styles générés au moment de la compilation, compatible RSC, prise en charge de variantes multiples et expérience développeur de premier ordre
* [Vanilla-Extract](https://vanilla-extract.style/) - Utilisez TypeScript comme préprocesseur. Écrivez des classes, variables et thèmes à portée locale sécurisés par les types, puis générez des fichiers CSS statiques au moment de la compilation
* [StyleX](https://stylexjs.com/) - StyleX est une bibliothèque JavaScript permettant de définir des styles pour des interfaces utilisateur optimisées

### Exécution
* [json-decoder](https://github.com/venil7/json-decoder) - Décodeur JSON sûr en types et vérificateur à l’exécution
* [typescript-is](https://github.com/woutervh-/typescript-is) - Transformateur TypeScript qui génère des vérifications de types à l’exécution.
* [type-plus](https://github.com/unional/type-plus) - Types supplémentaires et utilitaires adaptés aux types
* [Agent Framework](https://github.com/agentframework/agentframework) Créez des intercepteurs pour vos classes et méthodes à l’aide de décorateurs
* [SunTori](https://github.com/LancerComet/SunTori) - Un sérialiseur/désérialiseur JSON qui garantit la sûreté de toutes les données à l’exécution.
* [config](https://github.com/mrspartak/config) - Résolveur de configuration à l’exécution

## Validation
* [@core/match](https://github.com/tani/ts-match) - Affectation par décomposition sécurisée par les types, avec validation par correspondance de motifs
* [io-ts](https://github.com/gcanti/io-ts) - Système de types à l’exécution pour le décodage et l’encodage des E/S
* [zod](https://github.com/vriad/zod) - Validation de schéma conçue d’abord pour TypeScript, avec inférence statique des types
* [valibot](https://github.com/fabian-hiller/valibot) - Valibot est une bibliothèque de schémas TypeScript avec inférence statique des types. Elle est exceptionnellement légère par rapport à Zod et ne possède aucune dépendance.
* [runtypes](https://github.com/pelotom/runtypes) - Validation à l’exécution des types statiques
* [ts-codec](https://github.com/julienvincent/ts-codec) - Codecs TypeScript pour encoder, décoder et valider les données
* [ow](https://github.com/sindresorhus/ow) - Validation des arguments de fonction conçue pour les humains
* [superstruct](https://github.com/ianstormtaylor/superstruct) - Une méthode simple et composable pour valider les données
* [computed-types](https://github.com/neuledge/computed-types) - Validations de type Joi pour TypeScript
* [json-schema-to-ts](https://github.com/thomasaribart/json-schema-to-ts) - Inférence dynamique de types à partir de schémas JSON
* [Yunomix](https://github.com/LancerComet/MyWebLibs/tree/master/Yunomix) - Boîte à outils de validation de formulaires conçue selon les principes de la programmation orientée aspect (AOP).
* [typia](https://github.com/samchon/typia) - Validateur à l’exécution 20 000 fois plus rapide, utilisant uniquement les types TypeScript. Une seule ligne suffit, par exemple `typia.assert<T>(input)`. Prend également en charge la sérialisation JSON jusqu’à 200 fois plus rapide et les fonctionnalités Protocol Buffers. 🚀 (voir aussi https://typia.io/docs)
* [fta](https://github.com/sgb-io/fta) - Analyse statique basée sur Rust pour surveiller la qualité du code
* [dto-classes](https://github.com/rsinger86/dto-classes) - Analyse, validation et sérialisation faciles d’utilisation pour les développeurs. Types statiques par défaut. Utilise des propriétés pour les schémas de champs, et non des décorateurs.
* [iso-locale](https://github.com/reacture-io/iso-locale) - Bibliothèque TypeScript complète proposant les normes ISO pour gérer les pays, langues, dialectes et devises.
## Réalisé avec TypeScript
### Mobile
* :octocat: [ReactNative](https://reactnative.dev/) - Créez des applications natives pour Android, iOS et d’autres plateformes avec React
* :octocat: [NativeScript](https://github.com/NativeScript/NativeScript) - Framework à code source ouvert pour créer en JavaScript des applications mobiles véritablement natives et multiplateformes pour iOS, Android et Windows
* [Monaco Editor](https://microsoft.github.io/monaco-editor/)

### Web
* :octocat: [Angular](https://github.com/angular/angular) - Angular est une plateforme de développement permettant de créer des applications Web pour mobile et ordinateur
* :octocat: [It-Tools](https://it-tools.tech/) - Collection d’outils en ligne pratiques pour les développeurs, offrant une excellente expérience utilisateur
* :octocat: [Fedify](https://github.com/fedify-dev/fedify) - Framework TypeScript permettant de créer des applications serveur fédérées s’appuyant sur ActivityPub et le fédivers
* :octocat: [feednext.io](https://github.com/feednext/feednext) - Application de réseau social open source créée en TypeScript, côté client comme côté serveur.
* :octocat: [ionic](https://github.com/ionic-team/ionic) - Framework à code source ouvert de développement d’applications mobiles écrit en TypeScript
* :octocat: [React-UWP](https://github.com/myxvisual/react-uwp) - Composants React qui mettent en œuvre les styles UWP et Fluent Design de Microsoft.
* :octocat: [palantir/plottable](https://github.com/palantir/plottable) - Bibliothèque de composants de graphiques modulaires, construite avec `D3` (voir aussi : http://plottablejs.org)
* :octocat: [APIs-guru/graphql-voyager](https://github.com/APIs-guru/graphql-voyager) - Représentez n’importe quelle API GraphQL sous la forme d’un graphe interactif 🛰️
* :octocat: [Rebilly/ReDoc](https://github.com/Rebilly/Redoc) - Documentation de référence d’API générée à partir d’OpenAPI/Swagger
* :octocat: [excaliburjs/Excalibur](https://github.com/excaliburjs/Excalibur) - Moteur de jeu JavaScript gratuit et à code source ouvert
* :octocat: [Bobril](https://github.com/Bobris/Bobril) - Framework orienté composants inspiré de Mithril et ReactJs. (voir aussi : http://bobril.com/)
* :octocat: [Stencil](https://github.com/ionic-team/stencil) - un outil pour créer des composants Web modernes
* :octocat: [Langfuse](https://github.com/langfuse/langfuse) - Plateforme à code source ouvert d’ingénierie LLM 🪢 : traçage, gestion des prompts, évaluations et analyses
* :octocat: [redux-zero](https://github.com/concretesolutions/redux-zero) - Conteneur d’état léger basé sur Redux
* :octocat: [wretch](https://github.com/elbywan/wretch) - Petite surcouche (< 2,2 Ko compressé avec gzip) autour de fetch, doté d’une syntaxe intuitive.
* :octocat: [Cycle.js](https://github.com/cyclejs/cyclejs) - Framework JavaScript fonctionnel et réactif pour un code prévisible.
* :octocat: [Tridactyl](https://github.com/tridactyl/tridactyl) - Extension Firefox qui remplace le mécanisme de contrôle du navigateur par un système inspiré du seul véritable éditeur : Vim.
* :octocat: [armour/vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) - Modèle d’administration minimal avec vue-cli 3.0 et TypeScript, ainsi que solution front-end prête pour la production pour les interfaces d’administration ([démo](https://armour.github.io/vue-typescript-admin-template/#/dashboard))
* :octocat: [n8n.io](https://github.com/n8n-io/n8n) - Outil à code source ouvert d’automatisation des processus
* :octocat: [Dnote](https://github.com/dnote/dnote) - Carnet de notes en ligne de commande avec synchronisation entre plusieurs appareils et interface Web.
* :octocat: [Thin Backend](https://github.com/digitallyinduced/thin-backend) - Back-end en temps réel pour vos applications monopages, avec une sûreté des types de bout en bout grâce aux types dérivés du schéma Postgres
* :octocat: [Flowbite](https://github.com/themesberg/flowbite) - Bibliothèque de composants à code source ouvert reposant sur Tailwind CSS et proposant des composants d’interface interactifs écrits en TypeScript
* :octocat: [ILLA Cloud](https://www.illacloud.com/) - Plateforme à faible code et à code source ouvert, alternative à Retool et Appsmith, permettant aux développeurs de créer des outils internes en quelques minutes.
* :octocat: [Treehouse](https://github.com/treehousedev/treehouse) - Bibliothèque légère à code source ouvert pour créer votre propre outil de prise de notes.
* :octocat: [GOUI](https://github.com/intermesh/goui) - Bibliothèque d’interface utilisateur à code source ouvert proposant de nombreux composants pour créer des applications Web
* :octocat: [InDom](https://github.com/constcallid/indom) - Bibliothèque DOM moderne indépendante de toute pile technologique (<4 Ko), avec nettoyage automatique, code source TypeScript et définitions de types.
* :octocat: [Bubble Lab](https://github.com/bubblelabai/BubbleLab) - Plateforme à code source ouvert d’automatisation des flux de travail native TypeScript, avec génération assistée par l’IA, observabilité complète et code exportable.

### Web/ReactJS
* :octocat: [facebook/create-react-app](https://facebook.github.io/create-react-app/docs/adding-typescript) Créez des applications React en TypeScript sans configuration de compilation
* :octocat: [Microsoft/TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter) Modèle de démarrage pour TypeScript et React, avec un README détaillé expliquant comment les utiliser ensemble ; basé sur `create-react-app`
* :scroll: [typescript-cheatsheets/react-typescript-cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) Aide-mémoire pour les développeurs React expérimentés qui débutent avec TypeScript
* :octocat: [jsxtyper](https://github.com/fuselabs/jsxtyper) Génère des interfaces TypeScript à partir de fichiers .jsx
* :octocat: [TodoMVC • TypeScript + React Example](https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react)
* :octocat: [Veritas Kanban](https://github.com/BradGroux/veritas-kanban) - Tableau Kanban auto-hébergé intégrant des agents d’IA, créé avec React 19, le mode strict de TypeScript, Vite 6 et 1 255 tests.
* :scroll: [Working with React and TypeScript](http://blog.wolksoftware.com/working-with-react-and-typescript)
* :guardsman: [**vortigern** - A universal boilerplate for building web applications w/ TypeScript, React, Redux and more.](https://github.com/barbar/vortigern)
* :robot: [Convert React code to TypeScript automatically](https://github.com/lyft/react-javascript-to-typescript-transform)
* :octocat: [React Server Example TSX](https://github.com/styfle/react-server-example-tsx) Modèle de base pour une application Web isomorphe avec rendu côté serveur de React en TypeScript
* :octocat: [React & Redux in TypeScript - Static Typing Guide](https://github.com/piotrwitek/react-redux-typescript-guide) Guide complet du typage statique avec TypeScript dans « React & Redux »
* :octocat: [Typescript Monorepo CRA Example](https://github.com/deptno/typescript-monorepo-cra-example) - Monorepo minimaliste avec CRA et TypeScript.
* :octocat: [Typescript Monorepo Next Example](https://github.com/deptno/typescript-monorepo-next-example) - Monorepo minimaliste avec Next.js et TypeScript.
* :stars: [Crisp React](https://github.com/winwiz1/crisp-react) Modèle de base avec un client React et un back-end Express. Offre des performances et des fonctionnalités étendues, et aide à éviter les pièges courants de React et Express.
* :book: [React by Example](https://reactbyexample.github.io/) Tutoriel React axé sur le code, destiné aux programmeurs
* :octocat: [Materio Free MUI React NextJS Typescript Admin Template](https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free) - Modèle gratuit de tableau de bord d’administration MUI React NextJS extrêmement puissant et complet, conçu pour les développeurs. Réalisé avec TypeScript et JavaScript.
* :octocat: [Flowbite React](https://github.com/themesberg/flowbite-react) - Bibliothèque de composants à code source ouvert basée sur React, TypeScript et Tailwind CSS
* :octocat: [react-feedback-surveys](https://github.com/feedback-tools-platform/react-feedback-surveys) - Widgets d’enquête légers et sans dépendances pour recueillir les commentaires des utilisateurs (NPS, CSAT, CES) dans des applications React, avec prise en charge complète de TypeScript

### Ingénierie de plateforme et DevOps
* :octocat: [CDK8s](https://cdk8s.io/) - Définissez des applications Kubernetes et des abstractions réutilisables avec TypeScript
* :octocat: [AWS CDK](https://github.com/aws/aws-cdk) - Kit de développement cloud pour définir une infrastructure cloud en TypeScript
* :octocat: [Pulumi](https://github.com/pulumi/pulumi) - Infrastructure en tant que code avec TypeScript, JavaScript, Python, Go et .NET
* :octocat: [Backstage](https://github.com/backstage/backstage) - Plateforme écrite en TypeScript pour créer des portails destinés aux développeurs

### API back-end
* :octocat: [Actio](https://github.com/crufters/actio/) - Framework Node.js pour les monolithes et les microservices.
* :octocat: [design-first](https://adam-hanna.github.io/design-first-docs/) - Moteur de modèles d’API REST pour TypeScript
* :octocat: [Fastify](https://github.com/fastify/fastify) - Framework Web rapide et léger pour Node.js
* :octocat: [Hono](https://hono.dev/) - Hono est un framework Web petit, simple et ultrarapide pour les environnements périphériques. Il fonctionne avec tout environnement d’exécution JavaScript
* :octocat: [Nest](https://github.com/nestjs/nest) - Framework Node.js progressif et évolutif permettant de créer sur TypeScript des applications côté serveur efficaces, évolutives et de niveau entreprise 🚀 (voir aussi : https://nestjs.com/)
  * :octocat: [nestia](https://github.com/samchon/nestia) - Décorateurs de validation jusqu’à 20 000 fois plus rapides et de sérialisation JSON 200 fois plus rapide grâce à `typia`. Permet d’utiliser directement des types d’interface TypeScript comme DTO et d’améliorer les performances globales du serveur d’environ 30 fois. Prend également en charge la génération de SDK (ensemble de fonctions `fetch` avec définitions de types) et de simulateurs Mockup (simulateur de serveur back-end intégré au SDK), et permet même de migrer un projet NestJS à partir du seul fichier `swagger.json`. 🚀 (voir aussi : https://nestia.io/docs)
* :octocat: [LoopBack 4](https://github.com/strongloop/loopback-next) - Framework Node.js et TypeScript hautement extensible pour créer des API et des microservices. :rocket: (voir aussi : https://loopback.io/)
* :octocat: [FoalTS](https://github.com/FoalTS/foal) - Framework simple, intuitif et complet pour créer des applications Node.js de niveau entreprise :boom: :rocket: (voir aussi : https://foalts.org)
* :octocat: [Enso](http://ensojs.netlify.com) - Framework Node.js privilégiant TypeScript, inspiré des principes de conception pilotée par le domaine et axé sur la composition et l’expérience développeur
* :octocat: [Libstack](https://libstack.io) - Collection de modules variés pour créer facilement un serveur TypeScript prêt à être déployé sur Docker.
* :octocat: [tinyhttp](https://github.com/talentlessguy/tinyhttp) - Framework Web moderne pour Node.js, semblable à Express, écrit en TypeScript et compilé en ESM natif.
* :octocat: [ZenTS](https://github.com/sahachide/ZenTS) - Framework moderne pour Node.js privilégiant TypeScript, destiné à créer des applications Web riches
* :octocat: [Booster Framework](https://github.com/boostercloud/booster) - Framework GraphQL à code source ouvert natif du cloud et piloté par les événements, membre de l’écosystème Booster Cloud. Il s’appuie sur des abstractions et conventions de haut niveau. (voir aussi : https://booster.cloud)

### IA

* :octocat: [MastraAI](https://github.com/mastra-ai/mastra) - Mastra est un framework TypeScript prescriptif qui vous aide à créer rapidement des applications et fonctionnalités d’IA.
* :octocat: [VoltAgent](https://github.com/voltagent/voltagent) - Framework TypeScript pour créer et exécuter des agents d’IA dotés d’outils, d’une mémoire et d’une visibilité.
* :octocat: [Tambo](https://github.com/tambo-ai/tambo) - SDK React pour créer des interfaces génératives avec prise en charge de MCP.
* :octocat: [Maxim AI](https://github.com/maximhq/maxim-js) - SDK JS/TS permettant d’activer l’observabilité avec Maxim. Maxim est une plateforme d’évaluation et d’observabilité de niveau entreprise. (voir aussi : https://getmaxim.ai)
* :octocat: [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - SDK à confiance zéro qui anonymise localement les informations personnelles avant l’envoi des prompts aux LLM et reconstitue ensuite la réponse de manière transparente.

### Applications autonomes
* :octocat: [Visual Studio Code](https://github.com/Microsoft/vscode) - Environnement de développement multiplateforme.
* :octocat: [alm](https://github.com/alm-tools/alm) - Environnement de développement de nouvelle génération, dédié à TypeScript, écrit en TypeScript et React
* :octocat: [App Outlet](https://github.com/app-outlet/app-outlet) - Magasin universel d’applications Linux pour AppImage, Flatpak et Snap, écrit en TypeScript et Angular
* :octocat: [SnowFS](https://github.com/snowtrack/snowfs) - un stockage de fichiers graphiques sous contrôle de version, rapide et évolutif
* :octocat: [MemFree](https://github.com/memfreeme/memfree) - Moteur de recherche hybride d’IA à code source ouvert : obtenez instantanément des réponses précises depuis Internet, vos marque-pages, notes et documents. Prend en charge le déploiement en un clic.
* :octocat: [Nostream](https://github.com/cameri/nostream) - Relais Nostr écrit en TypeScript
* :octocat: [Peekaping](https://github.com/0xfurai/peekaping) - Solution de surveillance de disponibilité : surveillez les sites Web, API et services grâce aux notifications en temps réel, à de superbes pages d’état et à des analyses complètes

##### Extensions Chrome
* [OctoLinker](https://github.com/OctoLinker/browser-extension)
* [lc-mate](https://github.com/cglotr/lc-mate) - Extension qui ajoute le classement des concours aux noms d’utilisateur dans LC

### Patrons de conception
* :octocat: [Design Patterns implementation](https://github.com/torokmark/design_patterns_in_typescript) - Implémentation des 23 patrons de conception bien connus du GoF
* :octocat: [Real World Design Patterns](https://github.com/vahidvdn/realworld-design-patterns) - Patrons de conception du monde réel, avec tests

### Décorateurs
- :octocat: [Performance Decorators](https://github.com/RyanMyrvold/Performance-Decorators) - Collection de décorateurs TypeScript pour optimiser les performances, notamment par la journalisation du temps d’exécution, le suivi de l’utilisation de la mémoire, et plus encore.

### Bibliothèques
* :octocat: [SuperJSON](https://github.com/blitz-js/superjson) - Sérialise en toute sécurité des expressions JavaScript vers un sur-ensemble de JSON prenant en charge les dates, les BigInt et bien plus encore
* :octocat: [Procedurem](https://github.com/ImVexed/Procedurem) - Petite bibliothèque RPC bidirectionnelle performante (2 Ko) utilisant WebSockets.
* :octocat: [RxJS](https://github.com/ReactiveX/RxJS) - Bibliothèque de programmation réactive pour JavaScript.
* :octocat: [xstream](https://github.com/staltz/xstream) - Bibliothèque de flux réactifs fonctionnels pour JavaScript, extrêmement intuitive, petite et rapide.
* :octocat: [mockt](https://github.com/nbottarini/mockt) - Bibliothèque de simulation agréable à utiliser pour TypeScript et JavaScript
* :octocat: [substitute.js](https://github.com/ffMathy/FluffySpoon.JavaScript.Testing) - Bibliothèque de simulation à API fluide pour TypeScript, portée depuis NSubstitute.
* :octocat: [TypeMoq](https://github.com/florinn/typemoq) - Bibliothèque de simulation simple pour TypeScript.
* :octocat: [fast-check](https://github.com/dubzzz/fast-check) - Framework de tests basés sur les propriétés pour TypeScript.
* :octocat: [Suites](https://github.com/suites-dev/suites) - Framework de tests unitaires pour les back-ends TypeScript utilisant l’inversion de contrôle (IoC) et des frameworks d’injection de dépendances.
* :octocat: [InversifyJS](https://github.com/inversify/InversifyJS/) - Conteneur d’inversion de contrôle puissant et léger pour les applications JavaScript et Node.js propulsées par TypeScript.
* :octocat: [TypeORM](https://github.com/typeorm/typeorm) - ORM pour TypeScript et JavaScript (ES7, ES6, ES5). Prend en charge les bases de données MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle et WebSQL. Fonctionne dans Node.js, les navigateurs et les plateformes Ionic, Cordova et Electron.
  * :octocat: [Safe-TypeORM](https://github.com/samchon/safe-typeorm) - Améliore `TypeORM` au niveau de la compilation et prend en charge l’optimisation automatisée des performances par jointure au niveau de l’application. En outre, la métaprogrammation des types garantit la sûreté des requêtes SQL brutes.
* :octocat: [MikroORM](https://github.com/mikro-orm/mikro-orm) - ORM TypeScript pour Node.js basé sur les patrons Data Mapper, Unit of Work et Identity Map. Prend en charge MongoDB, PostgreSQL, MySQL et SQLite.
* :octocat: [DrizzleORM](https://orm.drizzle.team/) - ORM TypeScript léger, bibliothèque de type SQL pour un accès flexible aux données, prêt pour les environnements sans serveur et sans dépendances.
* :octocat: [Prisma](https://github.com/prisma/prisma) - Accès moderne aux bases de données (alternative à un ORM) pour Node.js et TypeScript | PostgreSQL, MySQL et SQLite
  * :octocat: [prisma-markdown](https://github.com/samchon/prisma-markdown) : Génère un document Markdown composé de diagrammes ERD et de leurs descriptions.
* :octocat: [Corgi](https://github.com/cardog-ai/corgi) - Décodeur de numéros VIN en TypeScript avec base de données SQLite optimisée. Entièrement hors ligne, décodage en moins de 1 ms, jeu de données NHTSA complet en 21 Mo.
* :octocat: [Neuledge](https://github.com/neuledge/engine-js) - Neuledge est un langage universel pour les bases de données, offrant des outils de pointe pour la modélisation des données, la représentation de la logique métier et la validation des schémas.
* :octocat: [Typetta](https://github.com/twinlogix/typetta) - ORM TypeScript pour Node.js qui utilise GraphQL comme langage de définition de schéma | Prend en charge les principales bases de données SQL et MongoDB.
* :octocat: [TypeGQL](https://github.com/prismake/typegql) - Ensemble d’outils permettant de créer un schéma GraphQL directement à partir d’une classe TypeScript typée.
* :octocat: [TSTL](https://github.com/samchon/tstl) - Implémentation de la STL C++ (Standard Template Library) en TypeScript. Les modules fournis comprennent des conteneurs, des itérateurs, des algorithmes et des foncteurs.
  * :octocat: [ECol](https://github.com/samchon/ecol) - Extension des conteneurs TSTL ; collections qui distribuent des événements d’E/S sur les éléments.
  * :octocat: [TGrid](https://github.com/samchon/tgrid) - Framework de calcul en grille, extension réseau et threads de TSTL, prenant en charge les appels de fonction distants (RFC).
  * :octocat: [Mutex-Server](https://github.com/samchon/mutex-server) - Contrôleur de sections critiques, comme les mutex et les sémaphores, au niveau réseau.
* :octocat: [Kalimdor.js](https://github.com/JasonShin/kalimdorjs) - Bibliothèque d’apprentissage automatique pour le Web, Node et les développeurs !
* :octocat: [prelude.ts](https://github.com/emmanueltouzery/prelude.ts) - Programmation fonctionnelle : collections persistantes immuables, constructions telles que Option et Either, et combinateurs.
* :octocat: [ee-ts](https://github.com/aleclarson/ee-ts) - Émetteurs d’événements typés
* :octocat: [io-ts](https://github.com/gcanti/io-ts) - Validation des types à l’exécution
* :octocat: [mokia](https://github.com/varHarrie/mokia) - Serveur simulé intégrant une simulation de données et un service HTTP.
* :octocat: [sub-events](https://github.com/vitaly-t/sub-events) - Événements fortement typés.
* :octocat: [ts-audio](https://github.com/EvandroLG/ts-audio) - bibliothèque agnostique et facile à utiliser pour travailler avec l’API `AudioContext`
* :octocat: [tslog](https://github.com/fullstack-build/tslog) - Bibliothèque de journalisation puissante avec prise en charge native de TypeScript : interpolation soignée, traces de pile V8 natives, masquage des secrets et prise en charge des identifiants de requête fondés sur AsyncLocalStorage
* :octocat: [tsParticles](https://github.com/matteobruni/tsparticles) - Bibliothèque légère pour créer facilement des animations de particules sur les sites Web (prend également en charge ReactJS, VueJS, Angular, Svelte et d’autres)
* :octocat: [statek](https://github.com/pie6k/statek) - Bibliothèque réactive de gestion d’état
* :octocat: [Injex](https://www.injex.dev/) - Framework d’injection de dépendances simple, décoré et extensible par plug-ins pour les applications TypeScript
* :octocat: [tRPC](https://www.trpc.io/) - Boîte à outils TypeScript pour créer des API dont les types sont sûrs de bout en bout
* :octocat: [vard](https://github.com/andersmyrmel/vard) - Détection des injections de prompts par motifs pour TypeScript. Validation en moins de 0,5 ms avec une API inspirée de Zod pour les applications LLM.
* :octocat: [interface-forge](https://www.npmjs.com/package/interface-forge) - Fabriques de données de test utilisant les types et interfaces TypeScript
* :octocat: [iter-ops](https://github.com/vitaly-t/iter-ops) - Opérations sur les objets itérables
* :octocat: [Remult](https://github.com/remult/remult) - CRUD sécurisé par les types de bout en bout et partage de code de modèles front-end/back-end dans des applications TypeScript à pile complète.
* :octocat: [Jest](https://github.com/facebook/jest) - Solution complète de tests JavaScript. Fonctionne immédiatement avec la plupart des projets JavaScript.
* :octocat: [diod](https://github.com/artberri/diod) - Conteneur d’inversion de contrôle et injecteur de dépendances très prescriptif et léger pour Node.js ou les applications de navigateur.
* :octocat: [@deliberative/crypto](https://github.com/deliberative/crypto) - Bibliothèque TypeScript/WebAssembly pour la cryptographie à clé publique, les boîtes secrètes AEAD, le partage de secrets de Shamir et le mélange aléatoire. Fonctionne avec Node.js, ESM, CommonJS et dans le navigateur.
* :octocat: [castore](https://github.com/castore-dev/castore) - Bibliothèque TypeScript pour implémenter facilement l’approvisionnement en événements (Event Sourcing) dans votre application
* :octocat: [sweet-monads](https://github.com/JSMonk/sweet-monads) - Bibliothèque TypeScript de monades populaires (telles que `Maybe` et `Either`) et d’itérateurs performants.
* :octocat: [simple-mask-money](https://github.com/codermarcos/simple-mask-money) - Simple mask money est un paquet léger, sûr et typé pour formater les montants !
* :octocat: [Color-Core](https://github.com/iamlite/color-core) - `color-core` est une puissante bibliothèque de manipulation des couleurs, sécurisée par les types, pour les applications TypeScript et JavaScript. Elle fournit une boîte à outils complète permettant de traiter les couleurs dans plusieurs espaces colorimétriques, ce qui en fait un outil indispensable pour les projets nécessitant une gestion avancée des couleurs.
* :octocat: [PigmentTS](https://github.com/Jay-Karia/pigment-ts) - Utilitaire léger de manipulation et de conversion des couleurs.
* :octocat: [file-graph](https://github.com/DIY0R/file-graph) - Bibliothèque permettant de stocker des graphes dans des fichiers et d’y effectuer des requêtes.
* :octocat: [@diy0r/nestjs-rabbitmq](https://github.com/DIY0R/nestjs-rabbitmq) - Bibliothèque permettant de créer des microservices NestJS avec RabbitMQ.
* :octocat: [Onion.JS](https://github.com/ThomasAribart/onion.js) - Concevez et appliquez des fonctions enveloppes (c’est-à-dire des fonctions d’ordre supérieur) sans perdre les types ! Basé sur les types d’ordre supérieur de [HotScript](https://github.com/gvergnaud/hotscript).
* :octocat: [text-smart-trimmer](https://github.com/vaidehimani/text-smart-trimmer) - Utilitaire TypeScript léger pour raccourcir du texte tout en choisissant de préserver les limites des mots, la ponctuation et les suffixes personnalisés.
* :octocat: [nano-string-utils](https://github.com/Zheruel/nano-string-utils) - Utilitaires de chaînes ultralégers et sans dépendance, compatibles avec l’élimination du code inutilisé (tree shaking), entièrement typés et optimisés pour JavaScript moderne.
* :octocat: [safe-fetch](https://github.com/asouei/safe-fetch) - Surcouche pour fetch sans dépendance, avec résultats sûrs, délais d’attente doubles, nouvelles tentatives intelligentes et erreurs TypeScript normalisées.
* :octocat: [stunk](https://github.com/I-am-abdulazeez/stunk) - Bibliothèque légère de gestion d’état indépendante des frameworks, avec des fragments atomiques pour une réactivité fine ; simple et utilisable dans toute application TypeScript.
* :octocat: [blastore](https://github.com/sergey-shablenko/blastore) - Surcouche de stockage minimal et performant pour localStorage, AsyncStorage, la mémoire ou tout back-end synchrone/asynchrone, avec une sûreté complète des types TypeScript.
* :octocat: [FilterQL](https://github.com/adamhl8/filterql) - Petit langage de requête pour filtrer des données structurées
* :octocat: [ffetch](https://github.com/fetch-kit/ffetch) – Surcouche pour `fetch` conçu d’abord pour TypeScript, avec nouvelles tentatives, délais d’attente, disjoncteur et hooks de cycle de vie. Aucune dépendance à l’exécution ; fonctionne partout où `fetch` est disponible
* :octocat: [iterflow](https://github.com/gv-sh/iterflow) - Puissants utilitaires d’itération avec opérations statistiques, fenêtrage et évaluation différée
* :octocat: [Nano Queries](https://github.com/vitonsky/nano-queries) - Constructeur de requêtes indépendant des bases de données, avec des requêtes composables, imbriquables et modifiables. Utilisé en production avec Postgres, SQLite, PGLite, DuckDB et d’autres.

# Grands modèles de langage (LLM)
* [duckduckgo-ai-chat](https://github.com/mumu-lhl/duckduckgo-ai-chat) - Fournit l’API DuckDuckGo AI Chat, qui permet d’utiliser gratuitement gpt-4o-mini.
* [Neurolink](https://github.com/juspay/neurolink) - Plateforme universelle de développement IA qui unifie plus de 12 fournisseurs d’IA (OpenAI, Anthropic, Google, Bedrock, Azure), avec prise en charge de MCP, basculement entre fournisseurs et fonctionnalités d’entreprise prêtes pour la production. SDK TypeScript et CLI.
* [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - SDK à confiance zéro qui anonymise localement les informations personnelles avant l’envoi des prompts aux LLM et reconstitue ensuite la réponse de manière transparente.

# Cours vidéo
## :free: Cours gratuits
* [Angular Applications with TypeScript](https://mva.microsoft.com/en-US/training-courses/angular-applications-with-typescript-14330) (Microsoft Virtual Academy)
* [AngularJS with TypeScript made easy](https://www.youtube.com/watch?v=OZxnFB0yQHs) (SSW TV)
* [Full Stack React GraphQL TypeScript Tutorial - 14 hour course](https://www.youtube.com/watch?v=I6ypD7qv3Z8) (YouTube)
* [Evolving JavaScript with TypeScript](https://www.youtube.com/watch?v=Ut694dsIa8w) une introduction détaillée à TypeScript
* [Why program in TypeScript?](https://www.youtube.com/watch?v=1TW9SdHIiXI) un aperçu des principales constructions syntaxiques, axé sur les avantages de TypeScript par rapport à la programmation en JavaScript
* [Functional Programming with TypeScript](https://www.youtube.com/playlist?list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo) - Découvrez la programmation fonctionnelle avec TypeScript et créez une bibliothèque comme fp-ts aux côtés de Sahand Javid dans cette liste de lecture YouTube adaptée aux débutants.
* [Building CRM from scratch with Typescript and Bun](https://www.youtube.com/watch?v=l4QjeBEkNLc) - Création d’un véritable système CRM de zéro, sans gros frameworks, avec Bun, TypeScript et Tailwind.

## :dollar: Cours payants
* [TypeScript Fundamentals](https://www.pluralsight.com/courses/typescript) (Pluralsight)
* [Practical TypeScript Migration](https://www.pluralsight.com/courses/typescript-practical-migration) (Pluralsight)
* [Angular with TypeScript](http://www.pluralsight.com/courses/angular-typescript) (Pluralsight)
* [Using TypeScript for Large AngularJS Applications](https://www.pluralsight.com/courses/using-typescript-large-angularjs-apps) (Pluralsight)
* [Introduction to TypeScript](https://www.packtpub.com/application-development/introduction-typescript-video) (Packt)
* [Mastering TypeScript](https://www.packtpub.com/web-development/mastering-typescript-video) (Packt)
* [TypeScript: The Complete Developer's Guide](https://www.udemy.com/typescript-the-complete-developers-guide/) (Udemy)
* [Angular with TypeScript](https://www.manning.com/livevideo/angular-for-java-developers-typescript/) (Manning)
* [Mastering TypeScript - 2022 Edition](https://www.udemy.com/course/learn-typescript/) (Udemy)

# Tutoriels

* [Converting your vanilla JavaScript app to TypeScript](https://www.useanvil.com/blog/engineering/converting-vanilla-javascript-to-typescript)
* [Difference Between TypeScript and JavaScript](https://www.scaler.com/topics/typescript-vs-javascript/)

# Feuille de route

* [TypeScript Roadmap](https://roadmap.sh/typescript)
* [TypeScript Origins: The Documentary - YouTube](https://www.youtube.com/watch?v=U6s2pdxebSo) par OfferZen Origins
  > Le documentaire présente des contributeurs principaux et des membres de la communauté tels qu’Anders Hejlsberg, Steve Lucco, Luke Hoban, Daniel Rosenwasser, Ryan Cavanaugh, Amanda Silver, Matt Pocock, Josh Goldberg et bien d’autres !

### Badges
* [TypeScript Badges](https://github.com/ellerbrock/typescript-badges/)
[![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/awesome/typescript125x28.png)](https://github.com/ellerbrock/typescript-badges/) [![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/code/typescript-125x28.png)](https://github.com/ellerbrock/typescript-badges/) [![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/love/typescript-125x28.png)](https://github.com/ellerbrock/typescript-badges/)

### Réseaux sociaux
  * [@typescriptlang](https://twitter.com/typescriptlang) - Compte Twitter officiel de TypeScript
  * [@angularjs](https://twitter.com/angularjs) - Compte Twitter officiel d’AngularJS, qui utilise TypeScript depuis la version 2.0
  * [@jntrnr](https://twitter.com/jntrnr) - Responsable du programme TypeScript chez Microsoft
  * [@ahejlsberg](https://twitter.com/ahejlsberg) - Fellow technique chez Microsoft, impliqué dans le projet TypeScript

### Remerciements
> (ajoutée en 2023) Nouvelle section destinée à remercier les personnes ayant contribué.

 - 2023 - ⚒ Merci à Hamza ( @Hamza12700 https://github.com/Hamza12700 ) pour [plus de 15 pull requests fusionnées](https://github.com/dzharii/awesome-typescript/pulls?q=is%3Apr+author%3AHamza12700+is%3Aclosed). Sa contribution a grandement aidé à maintenir cette liste à jour avec les projets TypeScript modernes. **Contributeur de l’année 2023**.
