<p align="center">
  <br>
    <img src="awesome-actions.png" width="150"/>
  <br>
</p>

# Awesome Actions [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [<!--lint ignore no-dead-urls-->![GitHub Actions status | sdras/awesome-actions](https://github.com/sdras/awesome-actions/workflows/Lint%20Awesome%20List/badge.svg)](https://github.com/sdras/awesome-actions/actions?workflow=Lint+Awesome+List)

> Una lista seleccionada de recursos excelentes relacionados con GitHub Actions.

Las acciones se activan a partir de eventos de la plataforma GitHub directamente en un repositorio y, en respuesta, ejecutan flujos de trabajo bajo demanda en máquinas virtuales con Linux, Windows o macOS, o dentro de un contenedor. Con GitHub Actions puedes automatizar tu flujo de trabajo desde la idea hasta la producción.

## Contenido

- [Recursos oficiales](#official-resources)
  - [Ejemplos de flujos de trabajo](#workflow-examples)
  - [Acciones oficiales](#official-actions)
  - [Crea tus acciones](#create-your-actions)
- [Recursos de la comunidad](#community-resources)
  - [Herramientas y administración de GitHub](#github-tools-and-management)
  - [Colección de acciones](#collection-of-actions)
  - [Utilidades](#utility)
  - [Análisis estático](#static-analysis)
  - [Análisis dinámico](#dynamic-analysis)
  - [Monitorización](#monitoring)
  - [Pull requests](#pull-requests)
  - [GitHub Pages](#github-pages)
  - [Notificaciones y mensajes](#notifications-and-messages)
  - [Despliegue](#deployment)
  - [Servicios externos](#external-services)
  - [Herramientas de frontend](#frontend-tools)
  - [Operaciones de aprendizaje automático](#machine-learning-ops)
  - [Compilación](#build)
  - [Base de datos](#database)
  - [Redes](#networking)
  - [Localización](#localization)
  - [Diversión](#fun)
  - [Guía de referencia](#cheat-sheet)
- [Tutoriales](#tutorials)

## Recursos oficiales

- [Sitio oficial](https://github.com/features/actions)
- [Documentación oficial](https://help.github.com/en/actions)
- [Organización oficial de Actions](https://github.com/actions)
  - [actions/virtual-environments](https://github.com/actions/virtual-environments) - Entornos virtuales de GitHub Actions.
  - [actions/runner](https://github.com/actions/runner) - El ejecutor de GitHub Actions.
- [Anuncio en el blog de GitHub](https://github.blog/2018-10-17-action-demos/)

### Ejemplos de flujos de trabajo

- [actions/starter-workflows](https://github.com/actions/starter-workflows) - Administración de flujos de trabajo iniciales.
- [actions/example-services](https://github.com/actions/example-services) - Ejemplos de flujos de trabajo que usan contenedores de servicio.

### Acciones oficiales

<!--lint disable no-dead-urls-->

#### Acciones para herramientas de flujos de trabajo

Acciones de herramientas para tu flujo de trabajo.

<!--lint ignore awesome-spell-check-->

- [actions/checkout](https://github.com/actions/checkout) - Configura tu repositorio en el flujo de trabajo.
- [actions/upload-artifact](https://github.com/actions/upload-artifact) - Sube artefactos desde tu flujo de trabajo.
- [actions/download-artifact](https://github.com/actions/download-artifact) - Descarga artefactos de tu compilación.
- [actions/cache](https://github.com/actions/cache) - Almacena en caché dependencias y resultados de compilación en GitHub Actions.
- [actions/github-script](https://github.com/actions/github-script) - Escribe un script para la API de GitHub y los contextos del flujo de trabajo.

#### Acciones para automatizar GitHub

Automatiza la administración de incidencias, pull requests y versiones.

- [actions/create-release](https://github.com/actions/create-release) - Una acción para crear versiones mediante la API de GitHub Release.
- [actions/upload-release-asset](https://github.com/actions/upload-release-asset) - Una acción para subir un recurso de versión mediante la API de GitHub Release.
- [actions/first-interaction](https://github.com/actions/first-interaction) - Una acción para filtrar pull requests e incidencias de colaboradores que participan por primera vez.
- [actions/stale](https://github.com/actions/stale) - Marca las incidencias y los pull requests que no han tenido actividad reciente.
- [actions/labeler](https://github.com/actions/labeler) - Una acción para etiquetar pull requests automáticamente.
- [actions/delete-package-versions](https://github.com/actions/delete-package-versions) - Elimina versiones de un paquete de GitHub Packages.

#### Acciones de configuración

Configura tu flujo de trabajo de GitHub Actions con una versión específica de tus lenguajes de programación.

- [actions/setup-node: Node.js](https://github.com/actions/setup-node)
- [actions/setup-python: Python](https://github.com/actions/setup-python)
- [actions/setup-go: Go](https://github.com/actions/setup-go)
- [actions/setup-dotnet: SDK de .NET Core](https://github.com/actions/setup-dotnet)
- [actions/setup-haskell: Haskell (GHC y Cabal)](https://github.com/actions/setup-haskell)
- [actions/setup-java: Java](https://github.com/actions/setup-java)
- [actions/setup-ruby: Ruby](https://github.com/actions/setup-ruby)
- [actions/setup-elixir: Elixir](https://github.com/actions/setup-elixir)
- [actions/setup-julia: Julia](https://github.com/julia-actions/setup-julia)

### Crea tus acciones

#### Acciones de JavaScript y TypeScript

- [actions/toolkit](https://github.com/actions/toolkit) - El kit de herramientas de GitHub para desarrollar GitHub Actions.
- [actions/hello-world-javascript-action](https://github.com/actions/hello-world-javascript-action) - Una plantilla que muestra cómo crear una acción de JavaScript.
- [actions/javascript-action](https://github.com/actions/javascript-action) - Crea una acción de JavaScript.
- [actions/typescript-action](https://github.com/actions/typescript-action) - Crea una acción de TypeScript.
- [actions/http-client](https://github.com/actions/http-client) - Un cliente HTTP ligero optimizado para usarse con acciones, escrito en TypeScript y compatible con genéricos y async/await.

#### Acciones de contenedor Docker

- [actions/hello-world-docker-action](https://github.com/actions/hello-world-docker-action) - Una plantilla que muestra cómo crear una acción de Docker.
- [actions/container-toolkit-action](https://github.com/actions/container-toolkit-action) - Repositorio de plantilla para crear acciones de contenedor con actions/toolkit.

## Recursos de la comunidad

### Herramientas y administración de GitHub

- [Configura etiquetas de GitHub de forma declarativa](https://github.com/lannonbr/issue-label-manager-action)
- [Acción para sincronizar etiquetas de GitHub de forma declarativa](https://github.com/micnncim/action-label-syncer)
- [Añade versiones a GitHub](https://github.com/elgohr/Github-Release-Action)
- [Publica una imagen de Docker en Docker Hub](https://github.com/elgohr/Publish-Docker-Github-Action)
- [Crea una incidencia a partir del contenido de un archivo](https://github.com/peter-evans/create-issue-from-file)
- [Publica versiones de GitHub con recursos](https://github.com/softprops/action-gh-release)
- [Automatización de GitHub Projects+](https://github.com/alex-page/github-project-automation-plus) - Automatiza las tarjetas de GitHub Projects con cualquier evento de webhook.
- [Ejecuta GitHub Actions localmente con una interfaz web](https://github.com/phishy/wflow)
- [Ejecuta GitHub Actions localmente en la terminal](https://github.com/nektos/act)
- [Compila y publica un APK de depuración de Android](https://github.com/ShaunLWM/action-release-debugapk)
- [Genera números de compilación secuenciales para GitHub Actions](https://github.com/einaregilsson/build-number)
- [Envía cambios de Git al repositorio de GitHub sin complicaciones de autenticación](https://github.com/ad-m/github-push-action)
- [Genera notas de versión a partir de tus eventos](https://github.com/Decathlon/release-notes-generator-action)
- [Crea una página de GitHub Wiki a partir del archivo Markdown proporcionado](https://github.com/Decathlon/wiki-page-creator-action)
- [Etiqueta automáticamente tus pull requests (usando archivos confirmados)](https://github.com/Decathlon/pull-request-labeler-action)
- [Añade etiquetas a tus pull requests según el nombre del equipo del autor](https://github.com/JulienKode/team-labeler-action)
- [Obtén una lista de los archivos modificados en un PR o push](https://github.com/trilom/file-changes-action)
- [Usa acciones privadas en cualquier flujo de trabajo](https://github.com/InVisionApp/private-action-loader)
- [Etiqueta tus incidencias según su contenido](https://github.com/damccorm/tag-ur-it)
- [Revierte una versión de GitHub](https://github.com/author/action-rollback)
- [Bloquea las incidencias y los pull requests cerrados tras un período de inactividad](https://github.com/dessant/lock-threads)
- [Obtén el número de commits de diferencia entre dos ramas](https://github.com/jessicalostinspace/commit-difference-action)
- [Genera notas de versión a partir de referencias de Git](https://github.com/metcalfc/changelog-generator)
- [Aplica políticas a repositorios y commits de GitHub](https://github.com/talos-systems/conform)
- [Etiqueta automáticamente una incidencia según su descripción](https://github.com/Renato66/auto-label)
- [Actualiza las GitHub Actions configuradas a sus versiones más recientes](https://github.com/fabasoad/ghacu)
- [Crea una rama para una incidencia](https://github.com/robvanderleek/create-issue-branch)
- [Elimina artefactos antiguos](https://github.com/c-hive/gha-remove-artifacts)
- [Expone los datos de commits de Git como variables de entorno](https://github.com/rlespinasse/git-commit-data-action)
- [Sincroniza archivos/binarios especificados con una Wiki o repositorios externos](https://github.com/kai-tub/external-repo-sync-action)
- [Crea, actualiza o elimina una página de GitHub Wiki a partir de cualquier archivo](https://github.com/Andrew-Chen-Wang/github-wiki-action)
- [Prow GitHub Actions](https://github.com/jpmcb/prow-github-actions) - Automatización de la aplicación de políticas, chat-ops y fusión automática de PR.
- [Comprueba el estado de GitHub en tu flujo de trabajo](https://github.com/crazy-max/ghaction-github-status)
- [Administra las etiquetas de GitHub (crear, renombrar, actualizar y eliminar) como código](https://github.com/crazy-max/ghaction-github-labeler)
- [Distribución continua de fondos a los colaboradores y dependencias de tu proyecto](https://github.com/protontypes/libreselery)
- [Reglas de Herald para GitHub: añade suscriptores, asignados, etiquetas y más a tu PR](https://github.com/gagoar/use-herald-action)
- [Validador de CODEOWNERS de GitHub](https://github.com/mszostok/codeowners-validator) - Comprueba que el archivo CODEOWNERS de GitHub sea correcto. Admite repositorios públicos y privados de GitHub, así como instalaciones de GitHub Enterprise.
- [Acción de Copybara](https://github.com/olivr/copybara-action) - Mueve y transforma código entre repositorios (ideal para mantener varios repositorios a partir de un monorepo).

### Colección de acciones

- [Usa Terraform de HashiCorp](https://github.com/hashicorp/setup-terraform)
- [GitHub Actions para Yarn 1](https://github.com/Borales/actions-yarn)
- [GitHub Actions para Yarn 2](https://github.com/sergioramos/yarn-actions)
- [GitHub Actions para Go](https://github.com/cedrickring/golang-action)
- [GitHub Actions para R y el paquete #rstats asociado](http://maxheld.de/ghactions/)
- [GitHub Actions para WordPress](https://github.com/10up/actions-wordpress/)
- [GitHub Actions para Composer](https://github.com/MilesChou/composer-action)
- [GitHub Actions para Flutter](https://github.com/subosito/flutter-action)
- [GitHub Actions para PHP](https://github.com/shivammathur/setup-php)
- [GitHub Actions para Rust](https://github.com/actions-rs)
- [GitHub Actions para Android](https://github.com/Malinskiy/action-android)
- [GitHub Actions para Logtalk y Prolog](https://github.com/logtalk-actions)
- [GitHub Actions para Deno](https://github.com/denolib/setup-deno)
- [GitHub Actions para Unity](https://github.com/webbertakken/unity-actions)
- [Octions: GitHub Actions para la API REST de GitHub](https://github.com/maxkomarychev/octions)
- [GitHub Actions para Docker](https://github.com/docker/github-actions)
- [GitHub Actions para AWS](https://github.com/clowdhaus/aws-github-actions)
- [Actions Hub](https://github.com/actionshub)

### Utilidades

- [Configura `ssh-agent`](https://github.com/webfactory/ssh-agent) - Ejecuta `ssh-agent` con claves SSH adicionales para acceder a repositorios privados.
- [Insignias de GitHub Actions para tu README](https://github.com/atrox/github-actions-badge)
- [GitHub Actions para proyectos Python con Poetry](https://github.com/abatilo/actions-poetry)
- [GitHub Actions para proyectos Python con pyenv](https://github.com/gabrielfalcao/pyenv-action)
- [GitHub Actions para compilar documentos LaTeX](https://github.com/xu-cheng/latex-action)
- [Actualiza las bases de datos de MaxMind](https://github.com/meetup/maxmind-updater)
- [Depura mediante SSH con tmate](https://github.com/mxschmitt/action-tmate) - Depura la acción directamente proporcionando una conexión SSH.
- [Desbloquea archivos de git-crypt](https://github.com/sliteteam/github-action-git-crypt-unlock)
- [Compilador cruzado de CGO para Go](https://github.com/crazy-max/ghaction-xgo)
- [Ejecuta tu tarea en otra arquitectura: arm32, aarch64 y otras](https://github.com/uraimo/run-on-arch-action)
- [Genera una tabla de contenidos](https://github.com/technote-space/toc-generator)
- [Añade automáticamente una etiqueta o un asignado a una incidencia](https://github.com/Naturalclar/issue-action)
- [Acción que envía una reacción LGTM como imagen o GIF cuando decimos «lgtm»](https://github.com/micnncim/action-lgtm-reaction)
- [Genera números de compilación en varios ámbitos](https://github.com/zyborg/gh-action-buildnum)
- [Publica artefactos de versiones de GitHub](https://github.com/skx/github-action-publish-binaries)
- [Acción de diferencias de Jekyll](https://github.com/David-Byrne/jekyll-diff-action) - Compara el sitio Jekyll compilado después de un cambio y publica el resultado como comentario en GitHub.
- [Bot de protección de ramas](https://github.com/benjefferies/branch-protection-bot) - Desactiva y vuelve a activar temporalmente la opción «Incluir administradores» en la protección de ramas.
- [Espera a los estados de los commits](https://github.com/WyriHaximus/github-action-wait-for-status) - Espera hasta que todos los estados y comprobaciones sean correctos o alguno falle, y establece la salida de estado correspondiente.
- [Obtén la etiqueta más reciente](https://github.com/WyriHaximus/github-action-get-previous-tag) - Obtén la etiqueta anterior de Git.
- [Crea un hito](https://github.com/WyriHaximus/github-action-create-milestone) - Crea un nuevo hito abierto con el título y la descripción indicados.
- [Cierra un hito](https://github.com/WyriHaximus/github-action-close-milestone) - Cierra el hito indicado.
- [Acción para aplicar reglas de nomenclatura de ramas](https://github.com/deepakputhraya/action-branch-name)
- [Expone el slug de algunas variables de GitHub](https://github.com/marketplace/actions/github-slug)
- [awesome-lint como GitHub Action](https://github.com/max/awesome-lint)
- [Edita un archivo JSON](https://github.com/deef0000dragon1/json-edit-action)
- [Compila la documentación de Slate](https://github.com/Decathlon/slate-builder-action)
- [Lee propiedades](https://github.com/christian-draeger/read-properties) - Lee valores de archivos `.properties`.
- [Escribe propiedades](https://github.com/christian-draeger/write-properties) - Escribe valores en archivos `.properties`.
- [Etiquetado automático](https://github.com/butlerlogic/action-autotag) - Genera automáticamente una etiqueta nueva cuando cambia la versión del archivo de manifiesto (p. ej., `package.json`).
- [Aplica plantillas con Jinja2](https://github.com/cuchi/jinja2-action) - Usa el motor de plantillas Jinja2 para generar archivos a partir de plantillas.
- [Detecta cambios](https://github.com/UnicornGlobal/has-changes-action) - Comprueba si hay cambios de código respecto a pasos anteriores.
- [Acción Mind Your Language](https://github.com/tailaiw/mind-your-language-action) - Detecta comentarios ofensivos en incidencias y pull requests, y avisa a sus autores.
- [Conversor YAML/JSON/XML](https://github.com/fabasoad/yaml-json-xml-converter-action) - Convierte archivos entre los formatos YAML, JSON y XML.
- [Detección de contenido NSFW](https://github.com/fabasoad/nsfw-detection-action) - Detecta contenido NSFW en archivos confirmados.
- [Detecta rutas modificadas](https://github.com/MarceloPrado/has-changed-path) - Ejecuta acciones de forma condicional según las rutas modificadas.
- [Linguist](https://github.com/fabasoad/linguist-action) - Analiza un repositorio y muestra información sobre los lenguajes utilizados.
- [Llamada de voz de Twilio](https://github.com/fabasoad/twilio-voice-call-action/) - Realiza una llamada de voz de Twilio con el texto especificado.
- [Configura Xcode](https://github.com/maxim-lobanov/setup-xcode) - Cambia entre las versiones preinstaladas de Xcode para las imágenes de macOS.
- [Configura Xamarin](https://github.com/maxim-lobanov/setup-xamarin) - Cambia entre las versiones preinstaladas de Xamarin y Mono para las imágenes de macOS.
- [Acción de Memer](https://github.com/Bhupesh-V/memer-action) - Una GitHub Action para memes de programación xD.
- [Configura CocoaPods](https://github.com/maxim-lobanov/setup-cocoapods) - Configura una versión específica de CocoaPods.
- [IP pública](https://github.com/haythem/public-ip) - Consulta la dirección IP pública del ejecutor de GitHub Actions.
- [GitHub Actions para Lazarus/FPC](https://github.com/gcarreno/setup-lazarus)
- [Fax de Twilio](https://github.com/fabasoad/twilio-fax-action/) - Envía un documento por fax usando tu cuenta de Twilio.
- [Configura herramientas de Kubernetes](https://github.com/yokawasa/action-setup-kube-tools) - Instala herramientas de Kubernetes (kubectl, kustomize, helm, kubeval, conftest e yq) en el ejecutor.
- [Configura Elastic Cloud Control Tool](https://github.com/yokawasa/action-setup-ecctl) - Instala una versión específica de ecctl en el ejecutor.
- [Script de PowerShell](https://github.com/Amadevus/pwsh-script) - Ejecuta scripts de PowerShell con contextos del flujo de trabajo (p. ej., `$github.token`) y cmdlets; el valor devuelto se convierte en la salida de la acción.
- [Sube y analiza archivos con VirusTotal](https://github.com/crazy-max/ghaction-virustotal)
- [Importa una clave GPG](https://github.com/crazy-max/ghaction-import-gpg)
- [Comprime con UPX](https://github.com/crazy-max/ghaction-upx) - El empaquetador definitivo de ejecutables.
- [Incorpora la nueva versión del módulo Go a la caché del proxy](https://github.com/andrewslotin/go-proxy-pull-action) - Garantiza que la versión más reciente de tu módulo Go esté en la caché del proxy. También actualiza la documentación de pkg.go.dev al publicar una versión.
- [Elimina los artefactos de una ejecución](https://github.com/marketplace/actions/delete-run-artifacts) - Elimina todos los artefactos al final de una ejecución del flujo de trabajo.
- [Acción de variables de entorno de GitHub](https://github.com/FranzDiebold/github-env-vars-action) - Expone variables de entorno como el nombre de la rama/etiqueta, el slug del repositorio y el slug de la referencia.
- [Bloqueos de GitHub Actions](https://github.com/abatilo/github-action-locks/blob/master/README.md) - Garantiza la ejecución atómica de tus flujos de trabajo de GitHub Actions.
- [Filtro de rutas](https://github.com/dorny/paths-filter) - Ejecuta acciones de forma condicional según los archivos modificados por un PR, una rama de funcionalidad o commits enviados.
- [Minisauras](https://github.com/TeamTigers/minisauras) -  Obtiene todos los archivos JavaScript y CSS de tu rama base, los minimiza y crea un pull request en una rama nueva.
- [Sitio web a GIF](https://github.com/PabloLec/website-to-gif) - Convierte cualquier página web en un GIF para mostrarlo en tu README, documentación, etc.
- [Entradas interactivas: entradas del flujo de trabajo en tiempo de ejecución](https://github.com/boasiHQ/interactive-inputs) - Añade entradas dinámicas en tiempo de ejecución a tus flujos de trabajo de GitHub Actions

#### Entornos

- [Crea un archivo de entorno](https://github.com/SpicyPizza/create-envfile)
- [Exporta variables de entorno globales para los siguientes pasos de compilación](https://github.com/zweitag/github-actions)
- [Establece mediante programación variables de entorno para usarlas en pasos posteriores](https://github.com/allenevans/set-env)
- [Instala entornos Conda para Python](https://github.com/goanpeca/setup-miniconda)
- [Configura NativeScript](https://github.com/hrueger/setup-nativescript)
- [Crea un archivo de entorno JSON](https://github.com/schdck/create-env-json)

#### Dependencias

- [Instala dependencias de NPM con almacenamiento en caché](https://github.com/bahmutov/npm-install)
- [Resalta las nuevas dependencias de NPM](https://github.com/hiwelo/new-dependencies-action) - Comenta en los pull requests información sobre las dependencias de NPM recién añadidas.
- [Almacena en caché dependencias de NPM](https://github.com/c-hive/gha-npm-cache)
- [Almacena en caché dependencias de Yarn](https://github.com/c-hive/gha-yarn-cache)

#### Versionado semántico

- [Próximas versiones semánticas](https://github.com/WyriHaximus/github-action-next-semvers) - Proporciona la siguiente versión mayor, menor y de parche a partir de la versión semver indicada.
- [Obtén la última versión SemVer y el nombre de rama a partir de una cadena de búsqueda](https://github.com/jessicalostinspace/github-action-get-regex-branch)
- [Crea una rama de versión](https://github.com/jessicalostinspace/cut-release-action) - Crea una rama de versión a partir de un prefijo de rama y una versión semántica opcional.
- [Incrementa la versión semántica](https://github.com/christian-draeger/increment-semantic-version) - Incrementa la versión semántica (SemVer) indicada según el tipo de versión especificado.

### Análisis estático

- [Acción del analizador estático de código PHPStan](https://github.com/OskarStark/phpstan-ga)
- [Acción de GraphQL Inspector](https://github.com/kamilkisiela/graphql-inspector)
- [Análisis estático de PowerShell con PSScriptAnalyzer](https://github.com/devblackops/github-action-psscriptanalyzer)
- [Ejecuta tfsec y muestra los resultados de reviewdog en el PR](https://github.com/reviewdog/action-tfsec)

#### Pruebas

- [Ejecuta pruebas con Puppeteer, la API de Node para Chrome sin interfaz](https://github.com/ianwalter/puppeteer)
- [Informes de xUnit para Slack: envía un resumen de las pruebas de los informes xUnit a un canal de Slack](https://github.com/ivanklee86/xunit-slack-reporter)
- [Ejecuta pruebas de Codeception](https://github.com/joelwmale/codeception-action)
- [Ejecuta pruebas de TestCafe](https://github.com/DevExpress/testcafe-action)
- [Ejecuta pruebas de Unity](https://github.com/webbertakken/unity-test-runner)
- [Ejecuta pruebas E2E de Cypress](https://github.com/cypress-io/github-action)
- [Prueba roles de Ansible con Molecule](https://github.com/robertdebock/molecule-action)
- [Ejecuta pruebas de rendimiento con artillery.io](https://github.com/kenju/github-actions-artillery)
- [Detecta pruebas inestables con BuildPulse](https://github.com/Workshop64/buildpulse-action)
- [Muestra anotaciones de código en línea para pruebas de Jest](https://github.com/IgnusG/jest-report-action)
- [Ejecuta pruebas de Julia](https://github.com/julia-actions/julia-runtest)

#### Análisis de estilo

- [Acción para corregir estándares de código PHP](https://github.com/OskarStark/php-cs-fixer-ga)
- [Ejecuta Hadolint en un Dockerfile del repositorio](https://github.com/burdzwastaken/hadolint-action)
- [Ejecuta ESLint y muestra los resultados de reviewdog en el PR](https://github.com/reviewdog/action-eslint)
- [Linter basado en JavaScript para archivos \*.workflow](https://github.com/OmarTawfik/github-actions-js)
- [Analiza archivos de Terraform con tflint y muestra los resultados de reviewdog en el PR](https://github.com/reviewdog/action-tflint)
- [autopep8: da formato automáticamente al código Python según la guía de estilo PEP 8](https://github.com/peter-evans/autopep8)
- [Ejecuta `ergebnis/composer-normalize` para garantizar que el `composer.json` de tu proyecto PHP esté normalizado](https://github.com/ergebnis/composer-normalize-action)
- [Ejecuta `stolt/lean-package-validator` para garantizar que tu paquete solo contenga los artefactos `runtime` necesarios](https://github.com/raphaelstolt/lean-package-validator-action)
- [Ejecuta comprobaciones de lint de Go cuando se crea un PR](https://github.com/ArangoGutierrez/GoLinty-Action)
- [Node.js: ejecuta automáticamente el script `format` o `lint` (o ambos) del paquete](https://github.com/MarvinJWendt/run-node-formatter)
- [Stylelinter: GitHub Action que ejecuta stylelint](https://github.com/exelban/stylelint)
- [Ejecuta stylelint y muestra los resultados de reviewdog en el PR](https://github.com/reviewdog/action-stylelint)
- [Acción PyCodeStyle: GitHub Action que comenta en tu PR los resultados de pycodestyle (autopep8)](https://github.com/ankitvgupta/pycodestyle-action)
- [wemake-python-styleguide: el linter de Python más estricto y riguroso, con resultados opcionales de reviewdog en el PR](https://github.com/wemake-services/wemake-python-styleguide)
- [Ejecuta TSLint con comprobaciones de estado y anotaciones de diferencias de archivos](https://github.com/mooyoul/tslint-actions)
- [Analiza los commits de un pull request con commitlint](https://github.com/wagoid/commitlint-github-action)
- [Ejecuta vint y muestra los resultados de reviewdog en el PR](https://github.com/reviewdog/action-vint)
- [Ejecuta misspell y muestra los resultados de reviewdog en el PR](https://github.com/reviewdog/action-misspell)
- [Ejecuta golangci-lint y muestra los resultados de reviewdog en el PR](https://github.com/reviewdog/action-golangci-lint)
- [Ejecuta shellcheck y muestra los resultados de reviewdog en el PR](https://github.com/reviewdog/action-shellcheck)
- [Detecta expresiones insensibles o poco consideradas en tus documentos Markdown](https://github.com/theashraf/alex-action)
- [Ejecuta dotenv-linter para analizar tus archivos .env, con resultados opcionales de reviewdog en el PR](https://github.com/wemake-services/dotenv-linter)
- [Ejecuta dotenv-linter y muestra los resultados de reviewdog en el PR](https://github.com/mgrachev/action-dotenv-linter)
- [Muestra y corrige automáticamente errores de análisis estático en numerosos lenguajes de programación](https://github.com/samuelmeuli/lint-action)
- [PHP_CodeSniffer con anotaciones](https://github.com/chekalsky/phpcs-action)
- [Linter para Markdown (con ajustes preestablecidos)](https://github.com/avto-dev/markdown-lint)
- [Emparejador de problemas de Stylelint para crear anotaciones](https://github.com/xt0rted/stylelint-problem-matcher)
- [Ejecuta sqlcheck en el PR para identificar antipatrones en las consultas SQL](https://github.com/yokawasa/action-sqlcheck)
- [Valida los metadatos de Fastlane Supply según las directrices de Play Store](https://github.com/ashutoshgngwr/validate-fastlane-supply-metadata)
- [Ejecuta Golint para analizar tu código Go](https://github.com/Jerome1337/golint-action)

#### Seguridad

- [Analizador de vulnerabilidades para tus imágenes de Docker](https://github.com/phonito/phonito-scanner-action)
- [Aprueba y fusiona automáticamente las actualizaciones de Dependabot](https://github.com/ridedott/dependabot-auto-merge-action)
- [Ejecuta el linter de seguridad dlint en tu código Python](https://github.com/xen0l/dlint-check)
- [Acciones de AWS Secrets Manager](https://github.com/say8425/aws-secrets-manager-actions) - Asigna secretos de AWS Secrets Manager a variables de entorno.
- [Analiza los documentos de políticas de AWS IAM para comprobar su corrección y detectar problemas de seguridad](https://github.com/xen0l/iam-lint)
- [Secret Spreader](https://github.com/webfactory/secret-spreader) - No es exactamente una acción, sino una herramienta para administrar secretos de Actions en una lista de repositorios.
- [Acción de sincronización de secretos](https://github.com/google/secrets-sync-action) - Acción que sincroniza secretos entre varios repositorios.
- [Acción de pruebas de Snyk](https://github.com/snyk/actions)
- [Administra tus secretos de GitHub Actions con una sencilla CLI](https://github.com/unfor19/githubsecrets)
- [SecretHub](https://github.com/secrethub/actions) - Mantén una única fuente de verdad para tus secretos y cárgalos en GitHub Actions cuando los necesites.

#### Cobertura de código

- [Analiza código con SonarCloud](https://github.com/sonarsource/sonarcloud-github-action)
- [Envía la cobertura de tu código a codecov.io](https://github.com/codecov/codecov-action)
- [Publica la cobertura de código en CodeClimate](https://github.com/paambaati/codeclimate-action)
- [Actualiza la tarjeta Go Report del repositorio](https://github.com/creekorful/goreportcard-action)

### Análisis dinámico

- [Ejecuta Gofmt para comprobar el formato del código Go](https://github.com/Jerome1337/gofmt-action)
- [Ejecuta Goimports para comprobar el orden de las importaciones de Go](https://github.com/Jerome1337/goimports-action)

### Monitorización

- [Audita una página web con las pruebas Lighthouse de Google Chrome](https://github.com/jakejarvis/lighthouse-action)
- [Ejecuta Lighthouse y publica los resultados en los PR y Slack](https://github.com/foo-software/lighthouse-check-action)
- [Ejecuta Lighthouse en CI con GitHub Actions](https://github.com/treosh/lighthouse-ci-action)
- [Evaluación comparativa continua y visualización de benchmarks para Go](https://github.com/bobheadxi/gobenchdata)
- [Acción Size Limit](https://github.com/andresz1/size-limit-action) - Comenta en los PR una comparación del tamaño de tu JavaScript y los rechaza si se supera el límite.
- [Comprueba bundlephobia](https://github.com/carlesnunez/check-my-bundlephobia) - Comenta el tamaño de los paquetes nuevos y modificados según bundlephobia.io, y rechaza el PR si se supera el umbral.

### Pull requests

- [Asigna revisores a un PR según sus asignados](https://github.com/pullreminders/assignee-to-reviewer-action)
- [Abre o actualiza un PR al enviar cambios a una rama (con selección de rama)](https://github.com/vsoch/pull-request-action)
- [Reaplica automáticamente la base de un PR](https://github.com/cirrus-actions/rebase)
- [Etiqueta un PR cuando alcanza un número determinado de aprobaciones](https://github.com/pullreminders/label-when-approved-action)
- [Añade etiquetas a un PR según los patrones de archivos coincidentes](https://github.com/banyan/auto-label)
- [Aprueba PR automáticamente](https://github.com/hmarr/auto-approve-action)
- [Añade revisores automáticamente a un PR según el archivo de configuración](https://github.com/kentaro-m/auto-assign-action)
- [Añade etiquetas a un PR según los patrones del nombre de rama](https://github.com/TimonVS/pr-labeler-action)
- [Añade etiquetas a un PR según el tamaño total de las diferencias](https://github.com/pascalgn/size-label-action)
- [Fusiona automáticamente los PR que estén listos](https://github.com/pascalgn/automerge-action)
- [Comprueba que los PR incluyan una referencia a un ticket](https://github.com/vijaykramesh/pr-lint-action)
- [Crea un PR con los cambios del repositorio realizados en el espacio de trabajo de Actions](https://github.com/peter-evans/create-pull-request)
- [Analiza un PR](https://github.com/seferov/pr-lint-action)
- [ChatOps para PR](https://github.com/machine-learning-apps/actions-chatops)
- [Añade un prefijo al título y al cuerpo de un PR usando texto extraído del nombre de la rama](https://github.com/tzkhan/pr-update-action)
- [Bloquea commits de autosquash](https://github.com/xt0rted/block-autosquash-commits-action)
- [Incrementa la versión y crea una etiqueta automáticamente al fusionar](https://github.com/anothrNick/github-tag-action)
- [Actualiza automáticamente los PR con comprobaciones obsoletas y combina mediante squash y fusiona los que cumplen todas las protecciones de rama](https://github.com/tibdex/autosquash)
- [Merge Pal: actualiza y fusiona PR automáticamente](https://github.com/maxkomarychev/merge-pal-action)
- [Aplica una convención de nombres al título del pull request](https://github.com/deepakputhraya/action-pr-title)
- [Notificador de pull requests bloqueados](https://github.com/jrylan/github-action-stuck-pr-notifier)
- [Analiza el nombre del pull request con commitlint (¡ideal si fusionas con squash!)](https://github.com/JulienKode/pull-request-name-linter-action)
- [Bloquea la fusión de PR cuando fallan las comprobaciones de las ramas de destino](https://github.com/cirrus-actions/branch-guard)
- [Obtén capturas de pantalla actualizadas del sitio estático generado por un pull request](https://github.com/ssowonny/diff-pages-action)
- [Añade etiquetas según si el pull request sigue en curso](https://github.com/AlbertHernandez/working-label-action)
- [Acción de comprobación de tickets](https://github.com/neofinancial/ticket-check-action) - Añade automáticamente un número de ticket o incidencia al principio de todos los títulos de pull request.
- [Analiza pull requests con expresiones regulares](https://github.com/MorrisonCole/pr-lint-action)
- [Trampas para pull requests](https://github.com/tylermurry/github-pr-landmine)
- [Anota un pull request de GitHub a partir de un informe XML de Checkstyle](https://github.com/staabm/annotate-pull-request-from-checkstyle)
- [Estadísticas de pull requests](https://github.com/flowwer-dev/pull-request-stats) -  Muestra estadísticas relevantes sobre los revisores.
- [Validador de descripciones de pull requests](https://github.com/derkinderfietsen/pr-description-enforcer) - Exige una descripción en los pull requests.

### GitHub Pages

- [Despliega un sitio Zola en GitHub Pages](https://github.com/shalzz/zola-deploy-action)
- [Compila un sitio estático Hugo y publícalo en la rama gh-pages](https://github.com/khanhicetea/gh-actions-hugo-deploy-gh-pages)
- [Compila un sitio Jekyll (con complementos y scripts de compilación personalizados) y vuelve a desplegarlo en la rama gh-pages](https://github.com/BryanSchuetz/jekyll-deploy-gh-pages)
- [Metadatos de Google Dataset Search](https://www.github.com/openschemas/extractors/) - Y otros extractores de schema.org para que los conjuntos de datos se puedan descubrir desde GitHub Pages.
- [GitHub Actions para desplegar en GitHub Pages con generadores de sitios estáticos](https://github.com/peaceiris/actions-gh-pages)
- [GitHub Action para Hexo](https://github.com/heowc/action-hexo)
- [Despliega estadísticas de Google Analytics en GitHub Pages](https://github.com/cristianpb/analytics-google)
- [Plataforma de blogs con Jupyter Notebook basada en GitHub Actions, Pages y Jekyll](https://github.com/fastai/fastpages)
- [Despliega un sitio estático en GitHub Pages](https://github.com/appleboy/gh-pages-action) - Despliega en un directorio personalizado e ignora una carpeta o archivo.
- [Despliega en GitHub Pages con opciones avanzadas](https://github.com/crazy-max/ghaction-github-pages)

### Notificaciones y mensajes

- [Envía una notificación a Discord](https://github.com/Ilshidur/action-discord)
- [Publica un mensaje en Slack como bot](https://github.com/pullreminders/slack-action)
- [Envía un SMS desde GitHub Actions con Nexmo](https://github.com/nexmo-community/nexmo-sms-action)
- [Envía un SMS desde GitHub Actions con Clockworksms](https://github.com/bharathvaj1995/clockwork-sms-action)
- [Envía un mensaje de Telegram](https://github.com/appleboy/telegram-action)
- [Envía un archivo o mensaje de texto a Discord (personaliza el color, nombre de usuario o avatar)](https://github.com/appleboy/discord-action)
- [Colabora en tuits mediante pull requests](https://github.com/gr2m/twitter-together)
- [Envía una notificación push mediante Push de Techulus](https://github.com/techulus/push-github-action)
- [Envía correo electrónico con SendGrid](https://github.com/peter-evans/sendgrid-action)
- [Envía una notificación push mediante Join](https://github.com/ShaunLWM/action-join)
- [Comprobador de nuevas versiones de paquetes npm](https://github.com/MeilCli/npm-update-check-action)
- [Comprobador de nuevas versiones de paquetes NuGet](https://github.com/MeilCli/nuget-update-check-action)
- [Comprobador de nuevas versiones de paquetes Gradle](https://github.com/MeilCli/gradle-update-check-action)
- [Envía una notificación push mediante Pushbullet](https://github.com/ShaunLWM/action-pushbullet)
- [Crea un evento del calendario de Outlook con Microsoft Graph](https://github.com/anoopt/ms-graph-create-event)
- [Detecta cambios en páginas de GitHub Wiki y los publica en Slack](https://github.com/benmatselby/gollum-page-watcher-action)
- [Envía un SMS con MessageBird](https://github.com/nikitasavinov/messagebird-sms-action)
- [Responde a bots inactivos](https://github.com/c-hive/fresh-bot)
- [Envía un mensaje incrustado a Discord](https://github.com/sarisia/actions-status-discord)
- [Mantén tus PR sincronizados con las tareas de Teamwork](https://github.com/Teamwork/github-sync)
- [Envía una notificación a Microsoft Teams](https://github.com/opsless/ms-teams-github-actions)

### Despliegue

- [Despliega en Netlify](https://github.com/netlify/actions)
- [Despliega una aplicación Probot con Actions](https://probot.github.io/docs/deployment/#github-actions)
- [Publica una lista de reproducción en Spotify](https://github.com/swinton/SpotHub)
- [Publica extensiones de VS Code con vsce](https://github.com/lannonbr/vsce-action)
- [Vacía la caché de Cloudflare después de actualizar un sitio web](https://github.com/jakejarvis/cloudflare-purge-action)
- [Despliega tu configuración DNS con DNS Control](https://github.com/koenrh/dnscontrol-action)
- [Despliega un tema en Shopify](https://github.com/pgrimaud/action-shopify)
- [Activa varias canalizaciones de GitLab CI](https://github.com/appleboy/gitlab-ci-action)
- [Activa varios trabajos de Jenkins](https://github.com/appleboy/jenkins-action)
- [GitHub Action para Homebrew Tap](https://github.com/izumin5210/action-homebrew-tap)
- [Copia archivos y artefactos mediante SSH](https://github.com/appleboy/scp-action)
- [Ejecuta comandos SSH remotos](https://github.com/appleboy/ssh-action)
- [Publica un paquete de distribución de Python en PyPI](https://github.com/pypa/gh-action-pypi-publish)
- [Despliega un sitio web estático en Azure Storage](https://github.com/feeloor/azure-static-website-deploy)
- [CLI multiplataforma de Chocolatey para compilar y publicar paquetes](https://github.com/crazy-max/ghaction-chocolatey)
- [Publica una biblioteca Pod de iOS en CocoaPods](https://github.com/michaelhenry/deploy-to-cocoapods-github-action)
- [GitHub Action para Tencent Cloud Serverless](https://github.com/Juliiii/action-scf)
- [Publica versiones (preliminares) de npm](https://github.com/epeli/npm-release/)
- [Despliega un sitio estático en Surge.sh](https://github.com/yavisht/deploy-via-surge.sh-github-action-template)
- [GitHub Action para GoReleaser, una herramienta de automatización de versiones para proyectos Go](https://github.com/goreleaser/goreleaser-action)
- [Acción de despliegue por FTP: despliega un proyecto de GitHub en un servidor FTP con GitHub Actions](https://github.com/SamKirkland/FTP-Deploy-Action)
- [Publica un artículo en Dev.to](https://github.com/tylerauerbeck/publish-to-dev.to-action)
- [Acción para Semantic Release](https://github.com/cycjimmy/semantic-release-action)
- [Despliega una colección en Ansible Galaxy](https://github.com/artis3n/ansible_galaxy_collection)
- [Publica un módulo en Puppet Forge](https://github.com/barnumbirr/action-forge-publish)
- [Compila y publica aplicaciones Electron](https://github.com/samuelmeuli/action-electron-builder)
- [Publica un paquete Maven](https://github.com/samuelmeuli/action-maven-publish)
- [Compila y despliega un tema en Ghost CMS](https://github.com/TryGhost/action-deploy-theme)
- [Despliega un rol de Ansible en Ansible Galaxy](https://github.com/robertdebock/galaxy-action)
- [Publica uno o varios módulos JS en un registro](https://github.com/author/action-publish)
- [Publica un paquete con autenticación de dos factores mediante Slack](https://github.com/erezrokah/2fa-with-slack-action)
- [Serializa ejecuciones de flujos de trabajo en canalizaciones de despliegue continuo](https://github.com/softprops/turnstyle)
- [GitHub Action para desplegar en Netlify en cada commit](https://github.com/nwtgck/actions-netlify)
- [Ejecuta playbooks de Ansible](https://github.com/arillso/action.playbook)
- [Publica un paquete de distribución de Python en Anaconda Cloud](https://github.com/fcakyon/conda-publish-action)
- [Publica una extensión de VS Code en Visual Studio Marketplace o en el registro Open VSX](https://github.com/HaaLeo/publish-vscode-extension)
- [Publica un vídeo de YouTube en el pódcast de Anchor.fm](https://github.com/Schrodinger-Hat/youtube-to-anchorfm)
- [Despliega con AWS CodeDeploy](https://github.com/webfactory/create-aws-codedeploy-deployment)

#### Docker

- [Actualiza la descripción de un repositorio de Docker Hub a partir de README.md](https://github.com/peter-evans/dockerhub-description)
- [Publica imágenes de Docker en GitHub Package Registry (GPR)](https://github.com/machine-learning-apps/gpr-docker-publish)
- [Actualiza la «descripción completa» de un repositorio en Docker Hub](https://github.com/mpepping/github-actions/tree/master/docker-hub-metadata)
- [Compila y publica imágenes de Docker en cualquier registro con Kaniko](https://github.com/outillage/kaniko-action)
- [Supervisa y limita el tamaño de tu imagen de Docker](https://github.com/wemake-services/docker-image-size-limit)
- [Publica imágenes de Docker en Amazon Elastic Container Registry (ECR)](https://github.com/appleboy/docker-ecr-action)
- [Compila y envía tus imágenes de Docker almacenando en caché cada etapa para reducir el tiempo de compilación](https://github.com/whoan/docker-build-with-cache-action)
- [Configura Docker Buildx](https://github.com/crazy-max/ghaction-docker-buildx)
- [Convierte el nombre de una rama o etiqueta en una etiqueta de imagen compatible con Docker](https://github.com/ankitvgupta/ref-to-tag-action/)
- [Actualiza la descripción de un repositorio de contenedores a partir de README.md](https://github.com/marketplace/actions/update-container-description-action) - Registros compatibles: Docker Hub, Quay y Harbor.

#### Kubernetes

- [Despliega en cualquier nube o en Kubernetes con Pulumi](https://github.com/pulumi/actions)
- [Despliega en Kubernetes con kubectl](https://github.com/steebchen/kubectl)
- [Obtén el archivo Kubeconfig de Google Kubernetes Engine (GKE)](https://github.com/machine-learning-apps/gke-kubeconfig)
- [Personaliza archivos YAML de configuración de Kubernetes con Kustomize](https://github.com/karancode/kustomize-github-action)
- [Crea un clúster de Kubernetes para pruebas con Krucible](https://github.com/Krucible/krucible-github-action)

#### AWS

- [Sincroniza o sube un directorio a un bucket de AWS S3](https://github.com/jakejarvis/s3-sync-action)
- [Despliega código Lambda en una función existente](https://github.com/appleboy/lambda-action)

#### Terraform

- [Genera documentación de Terraform](https://github.com/Dirrk/terraform-docs) - Usa terraform-docs para generar documentación de módulos de Terraform.
- [Ejemplo del uso de Terraform para validar y aplicar la administración de GitHub](https://github.com/asgharlabs/github-terraform/tree/master/.github/workflows)

### Servicios externos

- [Usa un Jenkinsfile](https://github.com/jonico/jenkinsfile-runner-github-actions)
- [GitHub Action para Firebase](https://github.com/w9jds/firebase-action)
- [GitHub Action para Contentful Migration CLI](https://github.com/Shy/contentful-action)
- [GitHub Actions para Pixela (a-know/pi)](https://github.com/peaceiris/actions-pixela)
- [GitHub Action para Google Cloud Platform (GCP)](https://github.com/exelban/gcloud)
- [Sube archivos a cualquier proveedor de servicios OpenStack Swift](https://github.com/iksaku/openstack-swift-action)
- [GitHub Action para enviar publicaciones de Stack Overflow a Slack](https://github.com/logankilpatrick/StackOverflowBot)
- [Asume un rol de AWS](https://github.com/nordcloud/aws-assume-role/)
- [Genera una respuesta personalizada con JSONbin](https://github.com/fabasoad/jsonbin-action)

### Herramientas de frontend

- [Ejecuta una tarea de Gradle](https://github.com/MrRamych/gradle-actions)
- [Acciones de compilación de JS](https://github.com/elstudio/actions-js-build) - Ejecuta tareas de compilación de Grunt o Gulp y confirma los cambios en los archivos.
- [GitHub Action para Gatsby CLI](https://github.com/jzweifel/gatsby-cli-github-action)
- [Ejecuta una auditoría de WebPageTest y publica los resultados como comentario del commit](https://github.com/JCofman/webPagetestAction)
- [GitHub Actions para Hugo Extended](https://github.com/peaceiris/actions-hugo)
- [Genera una imagen OG](https://github.com/BoyWithSilverWings/generate-og-image) - Genera imágenes Open Graph personalizables a partir de archivos Markdown.
- [GitHub Actions para mdBook](https://github.com/peaceiris/actions-mdbook)
- [Configura Mint](https://github.com/fabasoad/setup-mint-action) - Configura Mint (lenguaje de programación para crear aplicaciones de página única).
- [Despliegue de Gatsby en AWS S3](https://github.com/jonelantha/gatsby-s3-action) - Despliega Gatsby en S3 (compatible con CloudFront).

### Operaciones de aprendizaje automático

- [Envía flujos de trabajo de Argo (independientes de la nube)](https://github.com/machine-learning-apps/actions-argo)
- [Envía flujos de trabajo de Argo a GKE](https://github.com/machine-learning-apps/gke-argo)
- [Consulta resultados de seguimiento de experimentos en Weights & Biases](https://github.com/machine-learning-apps/wandb-action)
- [Ejecuta cuadernos de Jupyter parametrizados](https://github.com/yaananth/run-notebook)
- [Compila, despliega y ejecuta una canalización de Kubeflow](https://github.com/NikeNano/kubeflow-github-action)
- [Convierte automáticamente un repositorio de ciencia de datos en una imagen Docker como servidor Jupyter](https://github.com/jupyterhub/repo2docker-action)
- [Azure Machine Learning con GitHub Actions](https://github.com/machine-learning-apps/ml-template-azure)

### Compilación

- [run-cmake](https://github.com/lukka/run-cmake) - Acción multiplataforma para compilar software C/C++ con [CMake](https://cmake.org) y [Ninja](https://ninja-build.org/).
- [run-vcpkg](https://github.com/lukka/run-vcpkg) - Acción multiplataforma para compilar e instalar dependencias C/C++ con [vcpkg](https://github.com/microsoft/vcpkg).
- [Compila aplicaciones Go para varias plataformas](https://github.com/izumin5210/action-go-crossbuild)
- [Genera ~/.m2/settings.xml para compilaciones Maven](https://github.com/whelk-io/maven-settings-xml-action)
- [Ejecuta un script de Pascal](https://github.com/fabasoad/pascal-action)
- [Configura Brainfuck](https://github.com/fabasoad/setup-brainfuck-action) - Configura un intérprete de Brainfuck.
- [Publica binarios de Go como recursos de versiones de GitHub](https://github.com/wangyoucao577/go-release-action)
- [Configura COBOL](https://github.com/fabasoad/setup-cobol-action)
- [Comprueba la versión de Gradle](https://github.com/madhead/check-gradle-version) - Mantén Gradle actualizado.

### Base de datos

- [Configura el esquema de Cassandra](https://github.com/fabasoad/setup-cassandra-action) - Ejecuta scripts de la carpeta proporcionada en el clúster de Cassandra.

### Redes

- [Configura ZeroTier](https://github.com/zerotier/github-action) - Conecta tu ejecutor a una red de ZeroTier.

### Localización

- [Encuentra y corrige automáticamente errores tipográficos y gramaticales en tu código](https://github.com/sobolevn/misspell-fixer-action)
- [Traducción](https://github.com/fabasoad/translation-action) - Traduce texto de cualquier idioma a cualquier otro idioma.

### Diversión

- [Añade un equivalente al botón «me gusta» a tu README](https://github.com/ariary/Readme-Like-Button) - Visualiza la aprobación de la comunidad sobre una parte de tu README (se puede usar como encuesta).

### Guía de referencia

- [Guía de referencia de marca de GitHub Actions](https://haya14busa.github.io/github-action-brandings/)

## Tutoriales

- [Despliegue continuo de una aplicación Next.js con Up](https://medium.com/@romanenko/simple-ci-for-next-js-projects-with-apex-up-github-actions-6f0b1b9a5400)
- [Conversión de acciones basadas en Docker a JavaScript/TypeScript](https://httgp.com/converting-github-actions-from-docker-to-javascript/)
- [CI de GitHub Actions para proyectos Swift/iOS](https://medium.com/rosberryapps/github-actions-ci-for-swift-projects-c129baceed1a)
- [Trabajar con GitHub Actions](https://jeffrafter.com/working-with-github-actions)
- [GitHub Actions para desarrolladores de Rails](https://www.youtube.com/watch?v=gGUXydw22zw)
- [Calendario de Adviento de GitHub Actions](https://www.edwardthomson.com/blog/github_actions_advent_calendar.html)
- [Despliegues de Laravel sin tiempo de inactividad con GitHub Actions](https://atymic.dev/blog/github-actions-laravel-ci-cd/)
- [Curso de Pluralsight sobre la creación de GitHub Actions personalizadas](https://www.pluralsight.com/courses/building-custom-github-actions/)
- [Despliegue continuo de Django en DigitalOcean con Docker y GitHub Actions](https://testdriven.io/blog/deploying-django-to-digitalocean-with-docker-and-github-actions/)
- [Despliegue de ejecutores autohospedados de GitHub Actions con Docker](https://testdriven.io/blog/github-actions-docker/) - Despliega ejecutores autohospedados de GitHub Actions con Docker y Docker Swarm en DigitalOcean.
- [Configura ejecutores autohospedados de GitHub Actions con escalado automático en instancias Spot de AWS](https://040code.github.io/2020/05/25/scaling-selfhosted-action-runners)
- [Una introducción práctica a GitHub Actions](https://gist.github.com/br3ndonland/f9c753eb27381f97336aa21b8d932be6)

> No dudes en crear un PR si tienes más recursos que compartir. Consulta [contributing.md](contributing.md) para obtener más información.
