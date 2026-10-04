# Selección de TypeScript

## 🗄️ Nota de archivo

<details>
  <summary><strong>Resumen (2026)</strong> - Por qué se archiva esta lista</summary>
<hr/>
Empecé awesome-typescript hace 11 años, cuando TypeScript aún estaba tomando forma y distaba mucho de ser la opción predeterminada que es hoy. Entonces era importante recopilar y seleccionar recursos: ayudaba a los primeros usuarios a encontrar material fiable, compartir lo aprendido y crear una comunidad en torno a una herramienta que muchos desarrolladores subestimaban.

A lo largo de los años debatí muchas veces sobre el futuro de TypeScript (especialmente entre 2016 y 2018). Creía que se convertiría en un pilar del desarrollo moderno. Hoy es difícil no ver que así ha sido. TypeScript es ahora el lenguaje de facto para el desarrollo front-end y aparece en todas partes: aplicaciones, SDK, ejemplos e incluso proyectos con poca relación con él.

Ese éxito plantea un nuevo problema para esta lista. Cuando casi todos los proyectos usan TypeScript, aceptar cualquier posible incorporación deja de ser una selección cuidada y se convierte en un mantenimiento ilimitado. Las contribuciones de la comunidad han disminuido, la relación entre señal y ruido ha cambiado y seguir ampliando la lista ya no cumple su propósito original.

En lugar de seguir manteniendo algo que ya no puede reflejar una selección significativa de los mejores recursos actuales, archivo awesome-typescript y lo conservo como referencia histórica.

Gracias a todas las personas que contribuyeron, ya fuera enviando pull requests, proponiendo recursos o compartiendo comentarios. Vuestra ayuda hizo útil esta lista cuando más importaba y reunió a la comunidad inicial de TypeScript.
<br/><hr />

</details>

<hr />

#### -= Awesome TypeScript =- [Awesome Elasticsearch](https://github.com/dzharii/awesome-elasticsearch) →

> Una selección de recursos de TypeScript para desarrollo en cliente y servidor. Escribe JavaScript extraordinario con TypeScript. Inspirado en las listas [awesome](https://github.com/sindresorhus/awesome).

## Más recursos awesome

> [semlinker/awesome-typescript](https://github.com/semlinker/awesome-typescript) ¡Gracias a @semlinker por seleccionar los recursos!

## Cómo contribuir

Echa primero un vistazo a las [directrices de contribución](/contributing.md). Si algún paquete o proyecto de aquí ya no se mantiene o no encaja, envía una pull request para mejorar este archivo.

## Contenido

- [Recursos esenciales de TypeScript](#awesome-typescript-essential-resources)
- [Plantillas iniciales de proyectos TypeScript](#typescript-project-starters)
- [Libros](#books)
- [Listas de referencia](#reference-lists)
- [Blogs](#blogs)
- [CLI y REPL](#cli-and-repl)
- [IDE](#ide)
- [Sistemas de compilación](#build-systems)
- [Almacenes de datos en la nube](#cloud-data-warehousing)
- [Empaquetadores de módulos](#module-bundlers)
- [CMS](#cms)
- [Herramientas](#tools)
- [CSS-in-JS con tipos](#css-in-js-with-types)
- [Tipos](#types)
- [Ejecución](#runtime)
- [Creado con TypeScript: móvil, web, API de back-end, aplicaciones independientes y bibliotecas](#built-with-typescript)
- [LLM](#llm)
- [Cursos en vídeo](#video-courses)
- [Tutoriales](#tutorials)
- [Hoja de ruta](#roadmap)
- [Agradecimientos](#acknowledgements)

## Primeros pasos con (Awesome) TypeScript

### Recursos esenciales de TypeScript
* :books: [Handbook - Welcome to TypeScript](http://www.typescriptlang.org/Handbook) recurso oficial para aprender TypeScript
* :books: [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/) de [Basarat Ali Syed](https://twitter.com/basarat)
* :octocat: [Microsoft/TypeScript on Github](https://github.com/Microsoft/TypeScript) ¡haz un fork de TypeScript en GitHub! O... simplemente lee el código
* :octocat:[The official TypeScript Roadmap](https://github.com/Microsoft/TypeScript/wiki/Roadmap)
* :books: [TypeScript Team Blog](http://blogs.msdn.com/b/typescript/) con anuncios y novedades recientes
* :octocat: [DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) repositorio de definiciones de tipos de TypeScript de alta calidad, mantenidas por Boris Yankov y miles de colaboradores
* :octocat: [Type search](https://aka.ms/typings), busca definiciones de tipos en npm
* :books: [Community Curated Resources](https://hackr.io/tutorials/learn-typescript)
* :octocat: [Clean Code concepts adapted for TypeScript](https://github.com/labs42io/clean-code-typescript)
* :computer: [Should You Learn TypeScript? (Benefits & Resources)](https://snipcart.com/blog/learn-typescript-why-use-ts)
* :computer: [Learn how to unleash the full potential of the Turing Complete type system of TypeScript!](https://type-level-typescript.com), 💵 curso en línea de [Gabriel Vergnaud](https://twitter.com/GabrielVergnaud), con los 5 primeros capítulos gratis
* :computer: [Codington](https://codington.io) Ejercicios interactivos de TypeScript con comentarios instantáneos, diseñados para aprender y enseñar.
* :octocat: [Codebook](https://github.com/gvanastasov/codebook-typescript) lee y ejecuta pequeños fragmentos de código para aprender TypeScript progresivamente, desde los conceptos básicos hasta los avanzados.
* :octocat: [Type Challenges](https://github.com/type-challenges/type-challenges) Colección de retos de tipos de TypeScript con un juez en línea.
- :books: [TypeScript Style Guide](https://mkosir.github.io/typescript-style-guide) Conjunto conciso de convenciones y buenas prácticas para crear código coherente y fácil de mantener.
- :art: [Visual Types](https://types.kitlangton.com/) Visualizaciones interactivas de conceptos de TypeScript. Contempla sus bonitos colores.

### Plantillas iniciales de proyectos TypeScript
* [React Starter Kit](https://github.com/kriasoft/react-starter-kit) – Plantilla full stack para crear aplicaciones web modernas con Bun, TypeScript, React, tRPC, Drizzle ORM y Cloudflare Workers.
* [typescript-starter](https://github.com/bitjson/typescript-starter) – CLI para generar y configurar rápidamente bibliotecas y proyectos Node.js
* [next-smrt](https://github.com/csprance/next-smrt) – Plantilla de TypeScript/Next.js con Redux, Styled Components, Material UI y TypeSafe Actions.
* :octocat: [Next-Postgres-With-Typescript](https://github.com/brandontle/next-postgres-with-typescript) - Plantilla de aplicación web full stack tipo foro con Next.js 7.0.2, Sequelize 4/Postgres, TypeScript, Redux, Passport Local Auth y Emotion
* [MicroTS](https://www.npmjs.com/package/microts) Generador de código para microservicios con un enfoque basado primero en interfaces: a partir de una especificación de API REST de OpenAPI (Swagger), genera un proyecto completo con código TypeScript, validador de entradas, interfaz de usuario, pruebas y configuración de Docker.
* [pankod/next-boilerplate](https://github.com/pankod/next-boilerplate) Plantilla bien estructurada y lista para producción de Next.js con TypeScript, Redux, Jest, Enzyme, Express.js, Sass, CSS, EnvConfig, proxy inverso, analizador de paquetes y CLI integrado
* [jsynowiec/node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate) Plantilla actualizada, lista para desarrolladores y completa, aunque minimalista. Funciona de inmediato en la mayoría de los proyectos Node.js. Incluye y configura todas las herramientas básicas. Compatible con las versiones LTS más recientes de Node.js y TypeScript.
* [typescript-express-starter](https://github.com/ljlm0402/typescript-express-starter) - Plantilla rápida y sencilla de TypeScript con Express.
* [The Knests Stack](https://github.com/tudorconstantin/knests/) - Plantilla full stack (para hackatones) con PostgreSQL, Knex.js, NestJS, Next.js, GraphQL, React (con hooks y TypeScript), Material-UI, imágenes multietapa de Docker, Docker Compose y una canalización de CI/CD de GitLab totalmente configurada.
* [tRPC + Next.js](https://trpc.io/docs/nextjs/introduction) - Proyectos iniciales full stack para desarrollar con seguridad de tipos integral en React
* [nd.ts](https://github.com/heyayushh/nd.ts/) - Configura cuanto antes un proyecto mínimo de Node.ts
* :octocat: [samchon/backend](https://github.com/samchon/backend) - Plantilla de backend TypeScript que usa [NestJS](https://nestjs.com) ([nestia](https://github.com/samchon/nestia)) y [TypeORM](https://typeorm.io) ([safe-typeorm](https://github.com/samchon/safe-typeorm)). Ayuda a quienes empiezan en el desarrollo de back-end mediante proyectos de ejemplo derivados. Además, admite actualizaciones no disruptivas a nivel de proceso mediante [pm2](https://pm2.keymetrics.io/).
* :ok_man: [ts-express-boilerplate](https://github.com/d4rkstar/ts-express-boilerplate) - Plantilla ExpressJS/TypeScript para iniciar proyectos de back-end, centrada en la sencillez y en ofrecer solo lo esencial :P Incluye registro y pruebas ya configurados. Usa TypeORM para acceder a los datos.
* [create-typescript-app](https://github.com/hein-htut-aung/create-typescript-app) - ofrece un punto de partida para aplicaciones web TypeScript. Incluye pnpm, Rollup, Jest y módulos CSS con SCSS.
* [ts-vite-npm-template](https://github.com/kaandesu/ts-vite-npm-template) - Solución integral para crear paquetes NPM basados en TypeScript con Vite, con implementación integrada de demostraciones en GitHub Pages, flujos automatizados de pruebas y compilación, configuración de pruebas unitarias con Vite (incluido el análisis de cobertura) y una plantilla README.md para tu paquete.

### Libros
* :books: [TypeScript in 50 Lessons](https://typescript-book.com/) de Stefan Baumgartner
* :books: :fire: [TypeScript Quickly](https://www.manning.com/books/typescript-quickly) Aprende TypeScript moderno y crea tu propia cadena de bloques; incluye ejemplos de código :octocat:[yfain/getts](https://github.com/yfain/getts)
* :books: [Angular Development with Typescript, Second Edition (MEAP October 2017)](https://www.manning.com/books/angular-development-with-typescript-second-edition) Tutorial de nivel intermedio que presenta Angular y TypeScript a desarrolladores con experiencia en crear aplicaciones web usando otros marcos y herramientas. (de Yakov Fain y Anton Moiseev; Manning)
* :books: [Angular 2 Development with TypeScript (2016)](https://www.manning.com/books/angular-2-development-with-typescript) de Yakov Fain y Anton Moiseev; Manning
* :books: [Learning TypeScript 2.x 2nd Ed.](https://www.learningtypescript.com) de Remo H. Jansen
* :books: [Mastering TypeScript 2nd Ed.](https://www.packtpub.com/application-development/mastering-typescript-second-edition) de Nathan Rozentals
* :books: [Beginning Angular 4 with TypeScript](https://www.amazon.com/Beginning-Angular-Typescript-Greg-Lim/dp/1542916674) de Greg Lim
* :books: [Programming with Types](https://www.manning.com/books/programming-with-types) - Libro sobre cómo diseñar software seguro, resiliente, correcto y fácil de mantener y entender aprovechando el poder de los sistemas de tipos. (de Vlad Riscutia)
* :books: [Essential TypeScript 5](https://www.manning.com/books/essential-typescript-5) - Tercera edición de la guía superventas de TypeScript. (de Adam Freeman)
* :books: [Effective TypeScript](https://www.oreilly.com/library/view/effective-typescript/9781492053736/) de Dan Vanderkam
* :books: [Advanced TypeScript 3 Programming Projects](https://www.packtpub.com/product/advanced-typescript-3-programming-projects/9781789133042) de Peter O'Hanlon
* :books: [The Concise TypeScript Book (Free and Open Source)](https://github.com/gibbok/typescript-book) de Simone Poggiali
* :books: [Acing the Frontend Interview (Early Access)](https://www.manning.com/books/acing-the-frontend-interview) de Jennifer Fu (Manning)

### Listas de referencia
* [TypeScript Reference for JS developers](https://welldan97.github.io/typescript-reference/) - Glosario de palabras clave, operadores, instrucciones y directivas

### Entradas de blog
* [@captain-yossarian's blog](https://catchts.com/) - dedicado por completo al tipado estático en TypeScript

### CLI y REPL
* [Taze](https://github.com/antfu/taze) Herramienta CLI moderna que mantiene actualizadas tus dependencias
* Usa [ts-node](https://github.com/TypeStrong/ts-node) para ejecutar scripts o un REPL
* Cómo crear scripts ejecutables de TypeScript:
  1. Asegúrate de tener `npx` (incluido con `npm >= 5.2`) y el paquete `typescript` instalado
  1. Añade este [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) como primera línea del script: `#!npx ts-node`
  1. Haz que el script sea ejecutable: `chmod +x script.ts`
  1. Ejecútalo directamente: `./script.ts` :)

### Entornos de desarrollo (IDE)
#### Sin conexión
##### Visual Studio
* [ Visual Studio Community Edition 2015](https://www.visualstudio.com/products/visual-studio-community-vs) - IDE gratuito (con ciertas condiciones) con compatibilidad integrada con TypeScript
  * [VS Addon - TypescriptSyntaxPaste](https://visualstudiogallery.msdn.microsoft.com/eb0887f8-3ac1-434a-b50b-f0112f1572f7) - Permite copiar código fuente C# y pegarlo con sintaxis TypeScript, lo que ayuda a convertir DTO o interfaces
* [NodeJS Tools for Visual Studio](https://github.com/Microsoft/nodejstools)

##### Otros (complementos || multiplataforma || código abierto || gratis)
* [Visual Studio Code](https://www.visualstudio.com/en-us/products/code-vs.aspx)
* [PhpStorm](https://www.jetbrains.com/phpstorm/download/)
* [WebStorm](https://www.jetbrains.com/webstorm/download/)
* [CATS](http://jbaron.github.io/cats/) es un IDE para desarrolladores de TypeScript y web, creado por @jbaron
* [TypeScript Sublime Plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin) de @Microsoft
* [Atom TypeScript](https://github.com/TypeStrong/atom-typescript) de @TypeStrong
* [TypeScript Interactive Development Environment for Emacs](https://github.com/ananthakumaran/tide) de @ananthakumaran
* [TypeScript Syntax for VIM](https://github.com/leafgarland/typescript-vim)
* :octocat: [Complemento de TypeScript para](https://github.com/mrward/typescript-addin) MonoDevelop, SharpDevelop y Xamarin Studio; breve [artículo de reseña](http://lastexitcode.com/blog/2015/04/01/TypeScriptSupportInXamarinStudio/)
* [Typescript tooling for Neovim](https://github.com/mhartington/nvim-typescript) es un complemento del servicio de lenguaje TypeScript para Neovim.
* [Coc](https://github.com/neoclide/coc.nvim) Haz que Vim/Neovim sea tan inteligente como VSCode.

#### En línea

##### Entorno de pruebas
* [TypeScript playground](https://agentcooper.github.io/typescript-play/) de @agentcooper; admite varias versiones de TS y objetivos del compilador
* [TypeScript playground-on-ace](https://github.com/hi104/typescript-playground-on-ace) de @hi104 [actualizado a TypeScript 1.5](https://github.com/basarat/TypeScriptEditor)
* [TypeScript official Playground](http://www.typescriptlang.org/Playground/)
* [JS Bin](http://jsbin.com/?js) (selecciona TypeScript)
* [Codepen](http://codepen.io/) (selecciona TypeScript)
* [TypeScript Interpret - Terminal Emulator](http://niutech.github.io/typescript-interpret/) de @niutech
* [TypeScript Editor](http://drake7707.github.io/Typescript-Editor/) de @drake7707

## Sistemas de compilación
* [Grunt](http://gruntjs.com/) tareas:
  - [grunt-ts](https://www.npmjs.com/package/grunt-ts) - Paquete npm que gestiona la compilación de TypeScript en los scripts de compilación de GruntJS
* [Zwitterion](https://github.com/lastmjs/zwitterion) - Servidor de desarrollo muy sencillo con compatibilidad integrada para archivos TypeScript.
* [Nx](https://github.com/nrwl/nx) - Sistema de compilación inteligente, rápido y extensible

## Almacenes de datos en la nube
* :sparkles: [Crisp BigQuery](https://github.com/winwiz1/crisp-bigquery) Proyecto inicial que entrega datos de Google BigQuery a los navegadores de los usuarios finales con control de costes. Permite implementar opciones completas de presentación de datos.
* [DDB-Table](https://github.com/neuledge/ddb-table) Consultas y tablas con tipado fuerte para AWS DynamoDB
* [DynamoDB-Toolbox](https://github.com/dynamodb-toolbox/dynamodb-toolbox) Constructor de consultas ligero y con seguridad de tipos para AWS DynamoDB

## Empaquetadores de módulos
* [Farm](https://farm-fe.github.io/) - Herramienta de compilación web extremadamente rápida, compatible con Vite y escrita en Rust
* [Rspack](https://www.rspack.dev/) - Empaquetador web rápido basado en Rust 🦀️
* [Vite](https://vitejs.dev/) - Herramientas de nueva generación para el desarrollo front-end
* [Webpack](http://webpack.github.io/) - admite el empaquetado de módulos CommonJS y AMD
* [Browserify](http://browserify.org/) - Empaquetador de módulos CommonJS. No admite TypeScript de forma nativa, pero puede usarse con las tareas de [Grunt](http://gruntjs.com/): [grunt-ts](https://www.npmjs.com/package/grunt-ts), [grunt-browserify](https://www.npmjs.com/package/grunt-browserify), [grunt-contrib-uglify](https://www.npmjs.com/package/grunt-contrib-uglify)
* [fuse-box](https://github.com/fuse-box/fuse-box) | [http://fuse-box.org/](http://fuse-box.org/) - ejemplo de TypeScript: [fuse-box-ts-react-reflux-seed](https://github.com/fuse-box/fuse-box-ts-react-reflux-seed)

## Sistemas de gestión de contenidos (CMS)
* [Factor](https://factor.dev) - El CMS de JavaScript (compatible con TypeScript de forma nativa)
* [Graphweaver](https://github.com/exogee-technology/graphweaver) - Convierte varias fuentes de datos en un único CMS headless de GraphQL.

## Herramientas
* [sqlx-ts](https://github.com/JasonShin/sqlx-ts) - Aplicación CLI que ofrece consultas verificadas en tiempo de compilación, sin DSL, y genera tipos a partir de SQL para mantener la seguridad de tipos del código
* [bun](https://bun.sh/) - Bun es un entorno de ejecución de JavaScript rápido, gestor de paquetes, empaquetador y ejecutor de pruebas
* [deno](https://deno.land/) - Entorno de ejecución seguro para JavaScript y TypeScript
* [OXC](https://github.com/web-infra-dev/oxc) - Conjunto de herramientas de alto rendimiento para JavaScript y TypeScript, escritas en Rust
* [biome](https://github.com/biomejs/biome) - Biome da formato y analiza tu código en una fracción de segundo
* [SweetIQ/schemats](https://github.com/SweetIQ/schemats) Genera definiciones de interfaces TypeScript a partir del esquema de una base de datos SQL
* [TypeDoc](http://typedoc.org/) - Generador de documentación para proyectos TypeScript
* [TypeScript Standard](https://github.com/e2tox/typescript-standard) - Validación estándar de TypeScript 2 sin configuración
* [typed-install](https://github.com/xavdid/typed-install) - Instala fácilmente nuevas dependencias y sus definiciones de tipos, estén donde estén
* [type-config](https://github.com/Saul-Mirone/type-config) - Generador de tsconfig.
* [Zapatos](https://jawj.github.io/zapatos/) - Postgres sin abstracciones para TypeScript
* [dep-tree](https://github.com/gabotechs/dep-tree) - Representa el árbol de dependencias de archivos de tu proyecto o valídalo según tus propias reglas.
* [itertools-ts](https://github.com/Smoren/itertools-ts) - Adaptación ampliada de itertools para TypeScript y JavaScript. Ofrece un gran conjunto de funciones para trabajar con colecciones iterables (también asíncronas).
* [ParaglideJS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) - Compilador de i18n que genera traducciones con seguridad de tipos completa
* [pg](https://github.com/datawan-labs/pg) - Entorno de pruebas de PostgreSQL en el navegador, sin servidor: solo cliente y pglite (PostgreSQL en WebAssembly)
* [nocodb](https://github.com/nocodb/nocodb) - 🔥 🔥 🔥 Alternativa de código abierto a Airtable
* [jqlite](https://github.com/Jay-Karia/jqlite) - ⚡ El lenguaje de consulta para JSON
* [pompelmi](https://github.com/pompelmi/pompelmi) - Análisis de malware en archivos subidos para Node.js que ayuda a prevenir la inclusión remota de archivos (RFI), con adaptadores para Express, Koa y Next.js
* [codables](https://codableslib.com/) - (Des)erializador JSON declarativo basado en decoradores, con tipos enriquecidos y capaz de gestionar casi cualquier tipo de dato
* [Rev-dep](https://github.com/jayu/rev-dep) - Rastrea importaciones, detecta dependencias circulares, encuentra código sin usar y limpia node_modules, todo desde una CLI rapidísima.

## Tipos
* [jsonup](https://github.com/tani/jsonup) - Analizador JSON en tiempo de compilación
* [type-o-rama](https://github.com/stereobooster/type-o-rama) - Interoperabilidad entre sistemas de tipos de JS
* [utility-types](https://github.com/piotrwitek/utility-types) - Tipos de utilidad para TypeScript (compatibles con los tipos de utilidad de Flow)
* [elm-ts](https://github.com/gcanti/elm-ts) - Adaptación de la arquitectura Elm a TypeScript, con fp-ts, io-ts, rxjs5 y React
* [ts-essentials](https://github.com/krzkaczor/ts-essentials) - Todos los tipos esenciales de TypeScript en un solo lugar
* [typescript-conditional-types](https://github.com/LeDDGroup/typescript-conditional-types) - Ayudantes para tipos genéricos de TypeScript
* [ts-types-utils](https://github.com/LeDDGroup/ts-types-utils) - Utilidades de tipos para TypeScript
* [typesync](https://github.com/jeffijoe/typesync) - Instala las definiciones de TypeScript que falten para las dependencias de tu package.json.
* [type-fest](https://github.com/sindresorhus/type-fest) - Colección de tipos esenciales de TypeScript
* [typetype](https://github.com/mistlog/typetype) - Lenguaje de programación diseñado para generar tipos de TypeScript
* [nominal](https://github.com/Coder-Spirit/nominal) - Tipos nominales y tipos dependientes para TypeScript.
* [@tool-belt/type-predicates](https://github.com/tool-belt/type-predicates) - Predicados de tipos, funciones de aserción y utilidades.
* [getmytypes](https://github.com/halchester/getmytypes) - Instala archivos @types en tus dependencias de desarrollo.
* [ts-toolbelt](https://github.com/millsp/ts-toolbelt) - Amplia colección de utilidades de tipos para TypeScript
* [string-ts](https://github.com/gustavoguichard/string-ts) - Funciones de cadenas con tipado fuerte para todos
* [lib-result](https://github.com/AhmedOsman101/lib-result) - Tipo `Result` ligero, inspirado en Rust, para gestionar errores con seguridad de tipos en TypeScript y JavaScript.
* [iso-locale](https://github.com/reacture-io/iso-locale) - Biblioteca completa de TypeScript que proporciona estándares ISO para gestionar países, idiomas, dialectos y monedas.

## CSS-in-JS con tipos
* [PandaCSS](https://panda-css.com/) - CSS-in-JS con estilos generados durante la compilación, compatible con RSC, soporte para múltiples variantes y una experiencia de desarrollo excepcional
* [Vanilla-Extract](https://vanilla-extract.style/) - Usa TypeScript como preprocesador. Escribe clases, variables y temas con seguridad de tipos y ámbito local; después genera archivos CSS estáticos durante la compilación
* [StyleX](https://stylexjs.com/) - Biblioteca de JavaScript para definir estilos destinados a interfaces de usuario optimizadas

### Ejecución
* [json-decoder](https://github.com/venil7/json-decoder) - Decodificador JSON con seguridad de tipos y comprobador en tiempo de ejecución
* [typescript-is](https://github.com/woutervh-/typescript-is) - Transformador de TypeScript que genera comprobaciones de tipos en tiempo de ejecución.
* [type-plus](https://github.com/unional/type-plus) - Tipos adicionales y utilidades con tipos ajustados
* [Agent Framework](https://github.com/agentframework/agentframework) Crea interceptores para tus clases y métodos mediante decoradores
* [SunTori](https://github.com/LancerComet/SunTori) - Serializador/deserializador JSON para garantizar la seguridad de los datos en tiempo de ejecución.
* [config](https://github.com/mrspartak/config) - Resolutor de configuración en tiempo de ejecución

## Validación
* [@core/match](https://github.com/tani/ts-match) - Asignación por desestructuración con seguridad de tipos y validación mediante coincidencia de patrones
* [io-ts](https://github.com/gcanti/io-ts) - Sistema de tipos en tiempo de ejecución para decodificar y codificar IO
* [zod](https://github.com/vriad/zod) - Validación de esquemas con prioridad en TypeScript e inferencia estática de tipos
* [valibot](https://github.com/fabian-hiller/valibot) - Biblioteca de esquemas TypeScript con inferencia estática de tipos; es excepcionalmente ligera frente a Zod y no tiene dependencias.
* [runtypes](https://github.com/pelotom/runtypes) - Validación en tiempo de ejecución para tipos estáticos
* [ts-codec](https://github.com/julienvincent/ts-codec) - Códecs de TypeScript para codificar, decodificar y validar datos
* [ow](https://github.com/sindresorhus/ow) - Validación de argumentos de funciones pensada para personas
* [superstruct](https://github.com/ianstormtaylor/superstruct) - Forma sencilla y componible de validar datos
* [computed-types](https://github.com/neuledge/computed-types) - 🦩 Validaciones para TypeScript similares a Joi
* [json-schema-to-ts](https://github.com/thomasaribart/json-schema-to-ts) - Inferencia dinámica de tipos a partir de esquemas JSON
* [Yunomix](https://github.com/LancerComet/MyWebLibs/tree/master/Yunomix) - Herramientas de validación de formularios diseñadas según el paradigma AOP.
* [typia](https://github.com/samchon/typia) - Validador en tiempo de ejecución 20.000 veces más rápido que usa tipos puros de TypeScript. Solo requiere una línea, como `typia.assert<T>(input)`. También admite serialización JSON 200 veces más rápida y funciones de Protocol Buffer. 🚀 (consulta también https://typia.io/docs)
* [fta](https://github.com/sgb-io/fta) - Análisis estático basado en Rust para supervisar la calidad del código
* [dto-classes](https://github.com/rsinger86/dto-classes) - Análisis, validación y serialización fáciles de usar para desarrolladores. Tipos estáticos de forma predeterminada. Usa propiedades para los esquemas de campos, no decoradores.
* [iso-locale](https://github.com/reacture-io/iso-locale) - Biblioteca completa de TypeScript que proporciona estándares ISO para gestionar países, idiomas, dialectos y monedas.
## Creado con TypeScript
### Móvil
* :octocat: [ReactNative](https://reactnative.dev/) - Crea aplicaciones nativas para Android, iOS y otras plataformas con React
* :octocat: [NativeScript](https://github.com/NativeScript/NativeScript) - Marco de código abierto para crear aplicaciones móviles realmente nativas y multiplataforma para iOS, Android y Windows con JavaScript
* [Monaco Editor](https://microsoft.github.io/monaco-editor/)

### Web
* :octocat: [Angular](https://github.com/angular/angular) - Plataforma de desarrollo para crear aplicaciones web móviles y de escritorio
* :octocat: [It-Tools](https://it-tools.tech/) - Colección de prácticas herramientas en línea para desarrolladores, con una excelente experiencia de usuario
* :octocat: [Fedify](https://github.com/fedify-dev/fedify) - Marco de TypeScript para crear aplicaciones de servidor federadas basadas en ActivityPub y el fediverso
* :octocat: [feednext.io](https://github.com/feednext/feednext) - Aplicación de redes sociales de código abierto creada con TypeScript tanto en el cliente como en el servidor.
* :octocat: [ionic](https://github.com/ionic-team/ionic) - Marco de código abierto para desarrollar aplicaciones móviles, creado con TypeScript
* :octocat: [React-UWP](https://github.com/myxvisual/react-uwp) - Componentes de React que implementan el diseño UWP y Fluent Design de Microsoft.
* :octocat: [palantir/plottable](https://github.com/palantir/plottable) - Biblioteca de componentes modulares para gráficos, basada en `D3` (consulta también: http://plottablejs.org)
* :octocat: [APIs-guru/graphql-voyager](https://github.com/APIs-guru/graphql-voyager) - Representa cualquier API de GraphQL como un gráfico interactivo 🛰️
* :octocat: [Rebilly/ReDoc](https://github.com/Rebilly/Redoc) - Documentación de referencia de API generada a partir de OpenAPI/Swagger
* :octocat: [excaliburjs/Excalibur](https://github.com/excaliburjs/Excalibur) - Motor de videojuegos JavaScript gratuito y de código abierto
* :octocat: [Bobril](https://github.com/Bobris/Bobril) - Marco basado en componentes, inspirado en Mithril y ReactJs. (consulta también: http://bobril.com/)
* :octocat: [Stencil](https://github.com/ionic-team/stencil) - Herramienta para crear Web Components modernos
* :octocat: [Langfuse](https://github.com/langfuse/langfuse) - Plataforma de ingeniería de LLM de código abierto 🪢: trazas, gestión de prompts, evaluaciones y análisis
* :octocat: [redux-zero](https://github.com/concretesolutions/redux-zero) - Contenedor de estado ligero basado en Redux
* :octocat: [wretch](https://github.com/elbywan/wretch) - Envoltorio diminuto (< 2,2 Kb comprimido con gzip) de fetch, con una sintaxis intuitiva.
* :octocat: [Cycle.js](https://github.com/cyclejs/cyclejs) - Marco funcional y reactivo de JavaScript para crear código predecible.
* :octocat: [Tridactyl](https://github.com/tridactyl/tridactyl) - Complemento para Firefox que sustituye el mecanismo de control del navegador por uno inspirado en el único editor verdadero: Vim.
* :octocat: [armour/vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) - Plantilla administrativa mínima de vue-cli 3.0 y TypeScript, además de una solución front-end lista para producción para interfaces de administración ([demostración](https://armour.github.io/vue-typescript-admin-template/#/dashboard))
* :octocat: [n8n.io](https://github.com/n8n-io/n8n) - Herramienta de automatización de flujos de trabajo de código abierto
* :octocat: [Dnote](https://github.com/dnote/dnote) - Cuaderno de línea de comandos con sincronización entre dispositivos e interfaz web.
* :octocat: [Thin Backend](https://github.com/digitallyinduced/thin-backend) - Backend en tiempo real para aplicaciones de página única, con seguridad de tipos integral gracias a tipos derivados del esquema de Postgres
* :octocat: [Flowbite](https://github.com/themesberg/flowbite) - Biblioteca de componentes de código abierto basada en Tailwind CSS, con componentes de interfaz interactivos creados con TypeScript
* :octocat: [ILLA Cloud](https://www.illacloud.com/) - Plataforma low-code de código abierto, alternativa a Retool y Appsmith, para que los desarrolladores creen herramientas internas en minutos.
* :octocat: [Treehouse](https://github.com/treehousedev/treehouse) - Biblioteca ligera de código abierto para crear tu propia herramienta de toma de notas.
* :octocat: [GOUI](https://github.com/intermesh/goui) - Biblioteca de interfaz de usuario de código abierto con numerosos componentes para crear aplicaciones web
* :octocat: [InDom](https://github.com/constcallid/indom) - Biblioteca DOM moderna e independiente de la pila (<4 KB), con limpieza automática, código fuente TypeScript y definiciones de tipos.
* :octocat: [Bubble Lab](https://github.com/bubblelabai/BubbleLab) - Plataforma de automatización de flujos de trabajo nativa de TypeScript y de código abierto, con generación basada en IA, observabilidad completa y código exportable.

### Web/ReactJS
* :octocat: [facebook/create-react-app](https://facebook.github.io/create-react-app/docs/adding-typescript) Crea aplicaciones React con TypeScript sin configurar la compilación
* :octocat: [Microsoft/TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter) Plantilla inicial para TypeScript y React con un README detallado sobre cómo usarlos conjuntamente; basada en `create-react-app`
* :scroll: [typescript-cheatsheets/react-typescript-cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) Guías de referencia para desarrolladores con experiencia en React que empiezan a usar TypeScript
* :octocat: [jsxtyper](https://github.com/fuselabs/jsxtyper) Genera interfaces TypeScript a partir de archivos .jsx
* :octocat: [TodoMVC • TypeScript + React Example](https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react)
* :octocat: [Veritas Kanban](https://github.com/BradGroux/veritas-kanban) - Tablero Kanban autoalojado con integración de agentes de IA, creado con React 19, modo estricto de TypeScript, Vite 6 y 1.255 pruebas.
* :scroll: [Working with React and TypeScript](http://blog.wolksoftware.com/working-with-react-and-typescript)
* :guardsman: [**vortigern** - A universal boilerplate for building web applications w/ TypeScript, React, Redux and more.](https://github.com/barbar/vortigern)
* :robot: [Convert React code to TypeScript automatically](https://github.com/lyft/react-javascript-to-typescript-transform)
* :octocat: [React Server Example TSX](https://github.com/styfle/react-server-example-tsx) Plantilla para una aplicación web isomórfica con renderizado de React en el servidor mediante TypeScript
* :octocat: [React & Redux in TypeScript - Static Typing Guide](https://github.com/piotrwitek/react-redux-typescript-guide) Guía completa de tipado estático con TypeScript para «React y Redux»
* :octocat: [Typescript Monorepo CRA Example](https://github.com/deptno/typescript-monorepo-cra-example) - Monorrepositorio minimalista de CRA y TypeScript.
* :octocat: [Typescript Monorepo Next Example](https://github.com/deptno/typescript-monorepo-next-example) - Monorrepositorio minimalista de Next.js y TypeScript.
* :stars: [Crisp React](https://github.com/winwiz1/crisp-react) Plantilla con cliente React y backend Express. Ofrece rendimiento y funcionalidad ampliada, y ayuda a evitar problemas habituales de React-Express.
* :book: [React by Example](https://reactbyexample.github.io/) Tutorial de React orientado al código para programadores
* :octocat: [Materio Free MUI React NextJS Typescript Admin Template](https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free) - Plantilla gratuita de panel de administración MUI, React y NextJS para desarrolladores: potente y completa. Creada con TypeScript y JavaScript.
* :octocat: [Flowbite React](https://github.com/themesberg/flowbite-react) - Biblioteca de componentes de código abierto basada en React, TypeScript y Tailwind CSS
* :octocat: [react-feedback-surveys](https://github.com/feedback-tools-platform/react-feedback-surveys) - Widgets de encuestas ligeros y sin dependencias para recopilar comentarios de usuarios (NPS, CSAT, CES) en aplicaciones React, con compatibilidad completa con TypeScript

### Ingeniería de plataformas y DevOps
* :octocat: [CDK8s](https://cdk8s.io/) - Define aplicaciones de Kubernetes y abstracciones reutilizables con TypeScript
* :octocat: [AWS CDK](https://github.com/aws/aws-cdk) - Kit de desarrollo en la nube para definir infraestructura cloud con TypeScript
* :octocat: [Pulumi](https://github.com/pulumi/pulumi) - Infraestructura como código con TypeScript, JavaScript, Python, Go y .NET
* :octocat: [Backstage](https://github.com/backstage/backstage) - Plataforma para crear portales de desarrollo, escrita en TypeScript

### API de back-end
* :octocat: [Actio](https://github.com/crufters/actio/) - El marco de Node.js para monolitos y microservicios.
* :octocat: [design-first](https://adam-hanna.github.io/design-first-docs/) - Motor de plantillas de API REST para TypeScript
* :octocat: [Fastify](https://github.com/fastify/fastify) - Marco web rápido y con poca sobrecarga para Node.js
* :octocat: [Hono](https://hono.dev/) - Marco web pequeño, sencillo y ultrarrápido para entornos edge. Funciona en cualquier entorno de ejecución de JavaScript
* :octocat: [Nest](https://github.com/nestjs/nest) - Marco progresivo de Node.js basado en TypeScript para crear aplicaciones de servidor eficientes, escalables y de nivel empresarial 🚀 (consulta también: https://nestjs.com/)
  * :octocat: [nestia](https://github.com/samchon/nestia) - Decoradores con `typia` para una validación 20.000 veces más rápida y una serialización JSON 200 veces más rápida. Permite usar interfaces TypeScript puras como DTO y mejora el rendimiento global del servidor hasta unas 30 veces. También admite la generación de SDK (colecciones de funciones `fetch` con definiciones de tipos) y simuladores (simulador de servidor back-end integrado en el SDK), e incluso permite migrar un proyecto NestJS usando solo el archivo `swagger.json`. 🚀 (consulta también: https://nestia.io/docs)
* :octocat: [LoopBack 4](https://github.com/strongloop/loopback-next) - Marco de Node.js y TypeScript altamente extensible para crear API y microservicios. :rocket: (consulta también: https://loopback.io/)
* :octocat: [FoalTS](https://github.com/FoalTS/foal) - Marco sencillo, intuitivo y completo para crear aplicaciones Node.JS de nivel empresarial :boom: :rocket: (consulta también: https://foalts.org)
* :octocat: [Enso](http://ensojs.netlify.com) - Marco de Node.JS que prioriza TypeScript, inspirado en los principios del diseño dirigido por el dominio y centrado en la composición y la experiencia del desarrollador
* :octocat: [Libstack](https://libstack.io) - Colección de diversos módulos para crear fácilmente servidores TypeScript listos para desplegar en Docker.
* :octocat: [tinyhttp](https://github.com/talentlessguy/tinyhttp) - Marco web moderno para Node.js, similar a Express, escrito en TypeScript y compilado a ESM nativo.
* :octocat: [ZenTS](https://github.com/sahachide/ZenTS) - Marco moderno de Node.js que prioriza TypeScript para crear aplicaciones web completas
* :octocat: [Booster Framework](https://github.com/boostercloud/booster) - Marco de código abierto de GraphQL nativo de la nube y basado en eventos, parte del ecosistema Booster Cloud. Utiliza abstracciones y convenciones de alto nivel. (consulta también: https://booster.cloud)

### IA

* :octocat: [MastraAI](https://github.com/mastra-ai/mastra) - Marco TypeScript con opiniones definidas que ayuda a crear rápidamente aplicaciones y funciones de IA.
* :octocat: [VoltAgent](https://github.com/voltagent/voltagent) - Marco TypeScript para crear y ejecutar agentes de IA con herramientas, memoria y visibilidad.
* :octocat: [Tambo](https://github.com/tambo-ai/tambo) - SDK de React para crear interfaces de usuario generativas con compatibilidad con MCP.
* :octocat: [Maxim AI](https://github.com/maximhq/maxim-js) - SDK de JS/TS para habilitar la observabilidad de Maxim. Maxim es una plataforma empresarial de evaluación y observabilidad. (consulta también: https://getmaxim.ai)
* :octocat: [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - SDK de confianza cero para anonimizar localmente la información de identificación personal antes de enviar prompts a LLM y restaurar después la respuesta sin fricciones.

### Aplicaciones independientes
* :octocat: [Visual Studio Code](https://github.com/Microsoft/vscode) - IDE multiplataforma.
* :octocat: [alm](https://github.com/alm-tools/alm) - IDE de nueva generación dedicada a TypeScript, escrita en TypeScript y React
* :octocat: [App Outlet](https://github.com/app-outlet/app-outlet) - Tienda universal de aplicaciones Linux para AppImages, Flatpaks y Snaps, escrita en TypeScript y Angular
* :octocat: [SnowFS](https://github.com/snowtrack/snowfs) - Almacenamiento de archivos de control de versiones rápido y escalable para archivos gráficos
* :octocat: [MemFree](https://github.com/memfreeme/memfree) - Motor de búsqueda híbrido de IA y código abierto que obtiene al instante respuestas precisas de Internet, marcadores, notas y documentos. Admite despliegue con un clic.
* :octocat: [Nostream](https://github.com/cameri/nostream) - Relay de Nostr escrito en TypeScript
* :octocat: [Peekaping](https://github.com/0xfurai/peekaping) - Solución de supervisión de disponibilidad: controla sitios web, API y servicios con notificaciones en tiempo real, elegantes páginas de estado y análisis exhaustivos

##### Extensiones de Chrome
* [OctoLinker](https://github.com/OctoLinker/browser-extension)
* [lc-mate](https://github.com/cglotr/lc-mate) - Extensión que añade la puntuación del concurso a los nombres de usuario en LC

### Patrones de diseño
* :octocat: [Design Patterns implementation](https://github.com/torokmark/design_patterns_in_typescript) - Implementación de los conocidos 23 patrones GoF
* :octocat: [Real World Design Patterns](https://github.com/vahidvdn/realworld-design-patterns) - Patrones de diseño del mundo real con pruebas

### Decoradores
- :octocat: [Performance Decorators](https://github.com/RyanMyrvold/Performance-Decorators) - Colección de decoradores TypeScript para optimizar el rendimiento, con registro del tiempo de ejecución, supervisión del uso de memoria y más.

### Bibliotecas
* :octocat: [SuperJSON](https://github.com/blitz-js/superjson) - Serializa de forma segura expresiones JavaScript en un superconjunto de JSON que incluye fechas, BigInt y más
* :octocat: [Procedurem](https://github.com/ImVexed/Procedurem) - Biblioteca RPC bidireccional pequeña (2 KB) y de alto rendimiento que usa WebSockets.
* :octocat: [RxJS](https://github.com/ReactiveX/RxJS) - Biblioteca de programación reactiva para JavaScript.
* :octocat: [xstream](https://github.com/staltz/xstream) - Biblioteca de flujos reactivos funcionales para JavaScript, extremadamente intuitiva, pequeña y rápida.
* :octocat: [mockt](https://github.com/nbottarini/mockt) - Divertida biblioteca de simulación para TypeScript y JavaScript
* :octocat: [substitute.js](https://github.com/ffMathy/FluffySpoon.JavaScript.Testing) - Biblioteca fluida de simulación para TypeScript, adaptada de NSubstitute.
* :octocat: [TypeMoq](https://github.com/florinn/typemoq) - Biblioteca sencilla de simulación para TypeScript.
* :octocat: [fast-check](https://github.com/dubzzz/fast-check) - Marco de pruebas basadas en propiedades para TypeScript.
* :octocat: [Suites](https://github.com/suites-dev/suites) - Marco de pruebas unitarias para backends TypeScript que funciona con marcos de inversión de control (IoC) e inyección de dependencias.
* :octocat: [InversifyJS](https://github.com/inversify/InversifyJS/) - Contenedor de inversión de control potente y ligero para aplicaciones JavaScript y Node.js, con TypeScript.
* :octocat: [TypeORM](https://github.com/typeorm/typeorm) - ORM para TypeScript y JavaScript (ES7, ES6, ES5). Admite bases de datos MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle y WebSQL. Funciona en NodeJS, navegadores, Ionic, Cordova y Electron.
  * :octocat: [Safe-TypeORM](https://github.com/samchon/safe-typeorm) - Amplía `TypeORM` durante la compilación y admite herramientas automatizadas de ajuste del rendimiento mediante combinaciones en la aplicación. Además, garantiza la seguridad de las consultas SQL sin procesar mediante metaprogramación de tipos.
* :octocat: [MikroORM](https://github.com/mikro-orm/mikro-orm) - ORM TypeScript para Node.js basado en los patrones Data Mapper, Unit of Work e Identity Map. Admite MongoDB, PostgreSQL, MySQL y SQLite.
* :octocat: [DrizzleORM](https://orm.drizzle.team/) - ORM ligero de TypeScript, biblioteca de estilo SQL para un acceso flexible a datos, preparado para serverless y sin dependencias.
* :octocat: [Prisma](https://github.com/prisma/prisma) - Acceso moderno a bases de datos (alternativa a ORM) para Node.js y TypeScript | PostgreSQL, MySQL y SQLite
  * :octocat: [prisma-markdown](https://github.com/samchon/prisma-markdown): Genera documentos Markdown con diagramas ERD y sus descripciones.
* :octocat: [Corgi](https://github.com/cardog-ai/corgi) - Decodificador VIN de TypeScript con base de datos SQLite optimizada. Totalmente sin conexión, decodifica en menos de 1 ms y contiene el conjunto completo de datos de NHTSA en 21 MB.
* :octocat: [Neuledge](https://github.com/neuledge/engine-js) - Lenguaje universal para bases de datos que ofrece herramientas de vanguardia para modelar datos, representar lógica empresarial y validar esquemas.
* :octocat: [Typetta](https://github.com/twinlogix/typetta) - ORM de TypeScript para Node.js que usa GraphQL como lenguaje de definición de esquemas | Compatible con las principales bases de datos SQL y MongoDB.
* :octocat: [TypeGQL](https://github.com/prismake/typegql) - Conjunto de herramientas para crear esquemas GraphQL directamente a partir de clases TypeScript tipadas.
* :octocat: [TSTL](https://github.com/samchon/tstl) - Implementación de la STL de C++ (biblioteca de plantillas estándar) en TypeScript. Incluye contenedores, iteradores, algoritmos y funciones.
  * :octocat: [ECol](https://github.com/samchon/ecol) - Extensión de los contenedores de TSTL; colecciones que distribuyen eventos de E/S de elementos.
  * :octocat: [TGrid](https://github.com/samchon/tgrid) - Marco de computación en cuadrícula y extensión de red e hilos de TSTL, compatible con RFC (llamadas a funciones remotas).
  * :octocat: [Mutex-Server](https://github.com/samchon/mutex-server) - Controlador de secciones críticas, como mutex y semáforos, a nivel de red.
* :octocat: [Kalimdor.js](https://github.com/JasonShin/kalimdorjs) - Biblioteca de aprendizaje automático para la web, Node y desarrolladores.
* :octocat: [prelude.ts](https://github.com/emmanueltouzery/prelude.ts) - Programación funcional: colecciones persistentes inmutables, construcciones como Option y Either, y combinadores.
* :octocat: [ee-ts](https://github.com/aleclarson/ee-ts) - Emisores de eventos tipados
* :octocat: [io-ts](https://github.com/gcanti/io-ts) - Validación de tipos en tiempo de ejecución
* :octocat: [mokia](https://github.com/varHarrie/mokia) - Servidor simulado con simulación de datos y servicio HTTP integrados.
* :octocat: [sub-events](https://github.com/vitaly-t/sub-events) - Eventos con tipado fuerte.
* :octocat: [ts-audio](https://github.com/EvandroLG/ts-audio) - Biblioteca independiente y fácil de usar para trabajar con la API `AudioContext`
* :octocat: [tslog](https://github.com/fullstack-build/tslog) - Potente biblioteca de registro con compatibilidad nativa con TypeScript: interpolación elegante, trazas de pila nativas de V8, ocultación de secretos y compatibilidad con requestIds mediante AsyncLocalStorage
* :octocat: [tsParticles](https://github.com/matteobruni/tsparticles) - Biblioteca ligera para crear fácilmente animaciones de partículas en sitios web (también compatible con ReactJS, VueJS, Angular, Svelte y otros)
* :octocat: [statek](https://github.com/pie6k/statek) - Biblioteca reactiva de gestión de estado
* :octocat: [Injex](https://www.injex.dev/) - Marco sencillo, decorado y conectable de inyección de dependencias para aplicaciones TypeScript
* :octocat: [tRPC](https://www.trpc.io/) - Conjunto de herramientas TypeScript para crear API con seguridad de tipos integral
* :octocat: [vard](https://github.com/andersmyrmel/vard) - Detección de inyección de prompts basada en patrones para TypeScript. Validación en menos de 0,5 ms con una API inspirada en Zod para aplicaciones LLM.
* :octocat: [interface-forge](https://www.npmjs.com/package/interface-forge) - Fábricas de datos de prueba basadas en tipos e interfaces TypeScript
* :octocat: [iter-ops](https://github.com/vitaly-t/iter-ops) - Operaciones con objetos iterables
* :octocat: [Remult](https://github.com/remult/remult) - CRUD con seguridad de tipos integral y uso compartido de código de modelos entre el front-end y el back-end en aplicaciones TypeScript full stack.
* :octocat: [Jest](https://github.com/facebook/jest) - Solución integral de pruebas para JavaScript. Funciona de inmediato en la mayoría de los proyectos JavaScript.
* :octocat: [diod](https://github.com/artberri/diod) - Contenedor de inversión de control y inyector de dependencias ligero y de opiniones marcadas para aplicaciones Node.js o de navegador.
* :octocat: [@deliberative/crypto](https://github.com/deliberative/crypto) - Biblioteca TypeScript/WebAssembly para criptografía de clave pública, cajas secretas AEAD, secreto compartido de Shamir y barajado aleatorio. Funciona en Nodejs, ESM, CommonJS y el navegador.
* :octocat: [castore](https://github.com/castore-dev/castore) - Biblioteca TypeScript para implementar fácilmente Event Sourcing en tu aplicación
* :octocat: [sweet-monads](https://github.com/JSMonk/sweet-monads) - Biblioteca TypeScript de mónadas populares (como `Maybe` o `Either`) e iteradores de alto rendimiento.
* :octocat: [simple-mask-money](https://github.com/codermarcos/simple-mask-money) - 💰 Paquete sencillo, seguro y tipado para dar formato a importes monetarios.
* :octocat: [Color-Core](https://github.com/iamlite/color-core) - `color-core` es una potente biblioteca con seguridad de tipos para manipular colores en aplicaciones TypeScript y JavaScript. Ofrece un conjunto completo de herramientas para trabajar con colores en varios espacios de color, por lo que resulta indispensable para desarrolladores que necesiten una gestión avanzada del color.
* :octocat: [PigmentTS](https://github.com/Jay-Karia/pigment-ts) - Utilidad ligera para manipular y convertir colores.
* :octocat: [file-graph](https://github.com/DIY0R/file-graph) - Biblioteca para almacenar grafos en archivos y consultarlos.
* :octocat: [@diy0r/nestjs-rabbitmq](https://github.com/DIY0R/nestjs-rabbitmq) - Biblioteca para crear microservicios NestJS con RabbitMQ.
* :octocat: [Onion.JS](https://github.com/ThomasAribart/onion.js) - Diseña y aplica envoltorios (es decir, funciones de orden superior) sin alterar los tipos. Basada en los tipos de orden superior de [HotScript](https://github.com/gvergnaud/hotscript).
* :octocat: [text-smart-trimmer](https://github.com/vaidehimani/text-smart-trimmer) - Utilidad TypeScript ligera para recortar texto conservando opcionalmente los límites entre palabras, la puntuación y los sufijos personalizados.
* :octocat: [nano-string-utils](https://github.com/Zheruel/nano-string-utils) - Utilidades de cadenas ultraligeras y sin dependencias. Eliminables mediante tree-shaking, completamente tipadas y optimizadas para JavaScript moderno.
* :octocat: [safe-fetch](https://github.com/asouei/safe-fetch) - Envoltorio de fetch sin dependencias, con resultados seguros, tiempos de espera dobles, reintentos inteligentes y errores TypeScript normalizados.
* :octocat: [stunk](https://github.com/I-am-abdulazeez/stunk) - Biblioteca ligera de gestión de estado independiente del marco, con fragmentos atómicos para una reactividad precisa; sencilla y válida para cualquier aplicación TypeScript.
* :octocat: [blastore](https://github.com/sergey-shablenko/blastore) - Envoltorio de almacenamiento minimalista y de alto rendimiento para localStorage, AsyncStorage, memoria o cualquier backend síncrono/asíncrono, con seguridad de tipos completa de TypeScript.
* :octocat: [FilterQL](https://github.com/adamhl8/filterql) - Lenguaje de consulta diminuto para filtrar datos estructurados
* :octocat: [ffetch](https://github.com/fetch-kit/ffetch) – Envoltorio de `fetch` que prioriza TypeScript, con reintentos, tiempos de espera, disyuntor y hooks del ciclo de vida. Sin dependencias en tiempo de ejecución; funciona dondequiera que funcione `fetch`
* :octocat: [iterflow](https://github.com/gv-sh/iterflow) - Potentes utilidades de iteradores con operaciones estadísticas, ventanas y evaluación diferida
* :octocat: [Nano Queries](https://github.com/vitonsky/nano-queries) - Constructor de consultas independiente de la base de datos, con consultas componibles, anidables y mutables. Se usa en producción con Postgres, SQLite, PGLite, DuckDB y otros.

# Modelos de lenguaje grandes (LLM)
* [duckduckgo-ai-chat](https://github.com/mumu-lhl/duckduckgo-ai-chat) - Proporciona la API de DuckDuckGo AI Chat, que permite usar gpt-4o-mini gratis.
* [Neurolink](https://github.com/juspay/neurolink) - Plataforma universal de desarrollo de IA que unifica más de 12 proveedores de IA (OpenAI, Anthropic, Google, Bedrock y Azure), con compatibilidad con MCP, conmutación por error entre proveedores y funciones empresariales listas para producción. SDK y CLI de TypeScript.
* [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - SDK de confianza cero para anonimizar localmente la información de identificación personal antes de enviar prompts a LLM y restaurar después la respuesta sin fricciones.

# Cursos en vídeo
## :free: Cursos gratuitos
* [Angular Applications with TypeScript](https://mva.microsoft.com/en-US/training-courses/angular-applications-with-typescript-14330) (Microsoft Virtual Academy)
* [AngularJS with TypeScript made easy](https://www.youtube.com/watch?v=OZxnFB0yQHs) (SSW TV)
* [Full Stack React GraphQL TypeScript Tutorial - 14 hour course](https://www.youtube.com/watch?v=I6ypD7qv3Z8) (YouTube)
* [Evolving JavaScript with TypeScript](https://www.youtube.com/watch?v=Ut694dsIa8w) introducción detallada a TypeScript
* [Why program in TypeScript?](https://www.youtube.com/watch?v=1TW9SdHIiXI) repaso de las principales construcciones sintácticas, centrado en las ventajas de usar TypeScript en lugar de programar en JavaScript
* [Functional Programming with TypeScript](https://www.youtube.com/playlist?list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo) - Descubre la programación funcional con TypeScript y crea una biblioteca como fp-ts junto a Sahand Javid en esta lista de reproducción de YouTube para principiantes.
* [Building CRM from scratch with Typescript and Bun](https://www.youtube.com/watch?v=l4QjeBEkNLc) - Crea desde cero un sistema CRM realista, sin grandes marcos. Bun, TypeScript y Tailwind.

## :dollar: Cursos de pago
* [TypeScript Fundamentals](https://www.pluralsight.com/courses/typescript) (Pluralsight)
* [Practical TypeScript Migration](https://www.pluralsight.com/courses/typescript-practical-migration) (Pluralsight)
* [Angular with TypeScript](http://www.pluralsight.com/courses/angular-typescript) (Pluralsight)
* [Using TypeScript for Large AngularJS Applications](https://www.pluralsight.com/courses/using-typescript-large-angularjs-apps) (Pluralsight)
* [Introduction to TypeScript](https://www.packtpub.com/application-development/introduction-typescript-video) (Packt)
* [Mastering TypeScript](https://www.packtpub.com/web-development/mastering-typescript-video) (Packt)
* [TypeScript: The Complete Developer's Guide](https://www.udemy.com/typescript-the-complete-developers-guide/) (Udemy)
* [Angular with TypeScript](https://www.manning.com/livevideo/angular-for-java-developers-typescript/) (Manning)
* [Mastering TypeScript - 2022 Edition](https://www.udemy.com/course/learn-typescript/) (Udemy)

# Tutoriales

* [Converting your vanilla JavaScript app to TypeScript](https://www.useanvil.com/blog/engineering/converting-vanilla-javascript-to-typescript)
* [Difference Between TypeScript and JavaScript](https://www.scaler.com/topics/typescript-vs-javascript/)

# Hoja de ruta

* [TypeScript Roadmap](https://roadmap.sh/typescript)
* [TypeScript Origins: The Documentary - YouTube](https://www.youtube.com/watch?v=U6s2pdxebSo) de OfferZen Origins
  > El documental cuenta con colaboradores principales y miembros de la comunidad como Anders Hejlsberg, Steve Lucco, Luke Hoban, Daniel Rosenwasser, Ryan Cavanaugh, Amanda Silver, Matt Pocock, Josh Goldberg y muchos más.

### Insignias
* [TypeScript Badges](https://github.com/ellerbrock/typescript-badges/)
[![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/awesome/typescript125x28.png)](https://github.com/ellerbrock/typescript-badges/) [![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/code/typescript-125x28.png)](https://github.com/ellerbrock/typescript-badges/) [![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/love/typescript-125x28.png)](https://github.com/ellerbrock/typescript-badges/)

### Redes sociales
 * [@typescriptlang](https://twitter.com/typescriptlang) - Cuenta oficial de TypeScript en Twitter
 * [@angularjs](https://twitter.com/angularjs) - Cuenta oficial de AngularJS en Twitter; usa TypeScript desde la versión 2.0
 * [@jntrnr](https://twitter.com/jntrnr) - Director de programa de TypeScript en Microsoft
 * [@ahejlsberg](https://twitter.com/ahejlsberg) - Miembro técnico distinguido de Microsoft que participa en el proyecto TypeScript

### Agradecimientos
> (añadido en 2023) Nueva sección para agradecer las contribuciones.

 - 2023 - ⚒ Gracias a Hamza ( @Hamza12700 https://github.com/Hamza12700 ) por [más de 15 pull requests fusionadas](https://github.com/dzharii/awesome-typescript/pulls?q=is%3Apr+author%3AHamza12700+is%3Aclosed). Gran contribución para mantener esta lista al día con proyectos modernos de TypeScript. **Colaborador del año 2023**.
