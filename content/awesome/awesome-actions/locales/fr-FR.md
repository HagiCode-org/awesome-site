<p align="center">
  <br>
    <img src="awesome-actions.png" width="150"/>
  <br>
</p>

# Awesome Actions [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [<!--lint ignore no-dead-urls-->![GitHub Actions status | sdras/awesome-actions](https://github.com/sdras/awesome-actions/workflows/Lint%20Awesome%20List/badge.svg)](https://github.com/sdras/awesome-actions/actions?workflow=Lint+Awesome+List)

> Une sélection de ressources remarquables liées à GitHub Actions.

Les actions sont déclenchées directement dans un dépôt par des événements de la plateforme GitHub et exécutent, à la demande, des workflows sur des machines virtuelles Linux, Windows ou macOS, ou dans un conteneur, en réponse à ces événements. Avec GitHub Actions, vous pouvez automatiser votre workflow, de l’idée à la mise en production.

## Sommaire

- [Ressources officielles](#official-resources)
  - [Exemples de workflows](#workflow-examples)
  - [Actions officielles](#official-actions)
  - [Créer vos actions](#create-your-actions)
- [Ressources de la communauté](#community-resources)
  - [Outils et gestion de GitHub](#github-tools-and-management)
  - [Collection d’actions](#collection-of-actions)
  - [Utilitaires](#utility)
  - [Analyse statique](#static-analysis)
  - [Analyse dynamique](#dynamic-analysis)
  - [Surveillance](#monitoring)
  - [Pull requests](#pull-requests)
  - [GitHub Pages](#github-pages)
  - [Notifications et messages](#notifications-and-messages)
  - [Déploiement](#deployment)
  - [Services externes](#external-services)
  - [Outils frontend](#frontend-tools)
  - [Opérations de machine learning](#machine-learning-ops)
  - [Compilation](#build)
  - [Base de données](#database)
  - [Réseau](#networking)
  - [Localisation](#localization)
  - [Divertissement](#fun)
  - [Aide-mémoire](#cheat-sheet)
- [Tutoriels](#tutorials)

## Ressources officielles

- [Official Site](https://github.com/features/actions)
- [Official Documentation](https://help.github.com/en/actions)
- [Official Actions organization](https://github.com/actions)
  - [actions/virtual-environments](https://github.com/actions/virtual-environments) - Environnements virtuels GitHub Actions.
  - [actions/runner](https://github.com/actions/runner) - L’exécuteur de GitHub Actions.
- [GitHub Blog Announcement](https://github.blog/2018-10-17-action-demos/)

### Exemples de workflows

- [actions/starter-workflows](https://github.com/actions/starter-workflows) - Gestion des workflows de démarrage.
- [actions/example-services](https://github.com/actions/example-services) - Exemples de workflows utilisant des conteneurs de services.

### Actions officielles

<!--lint disable no-dead-urls-->

#### Actions d’outils pour les workflows

Actions d’outils pour vos workflows.

<!--lint ignore awesome-spell-check-->

- [actions/checkout](https://github.com/actions/checkout) - Configure votre dépôt dans votre workflow.
- [actions/upload-artifact](https://github.com/actions/upload-artifact) - Envoie des artefacts depuis votre workflow.
- [actions/download-artifact](https://github.com/actions/download-artifact) - Télécharge des artefacts issus de votre compilation.
- [actions/cache](https://github.com/actions/cache) - Met en cache les dépendances et les résultats de compilation dans GitHub Actions.
- [actions/github-script](https://github.com/actions/github-script) - Écrivez un script pour l’API GitHub et les contextes du workflow.

#### Actions pour automatiser GitHub

Automatisez la gestion des issues, des pull requests et des publications.

- [actions/create-release](https://github.com/actions/create-release) - Une action pour créer des publications via l’API GitHub Release.
- [actions/upload-release-asset](https://github.com/actions/upload-release-asset) - Une action pour téléverser un fichier de publication via l’API GitHub Release.
- [actions/first-interaction](https://github.com/actions/first-interaction) - Une action qui filtre les pull requests et les issues provenant de nouveaux contributeurs.
- [actions/stale](https://github.com/actions/stale) - Marque les issues et les pull requests qui n’ont fait l’objet d’aucune activité récente.
- [actions/labeler](https://github.com/actions/labeler) - Une action qui attribue automatiquement des étiquettes aux pull requests.
- [actions/delete-package-versions](https://github.com/actions/delete-package-versions) - Supprime des versions d’un paquet de GitHub Packages.

#### Actions de configuration

Configurez votre workflow GitHub Actions avec une version précise de vos langages de programmation.

- [actions/setup-node: Node.js](https://github.com/actions/setup-node)
- [actions/setup-python: Python](https://github.com/actions/setup-python)
- [actions/setup-go: Go](https://github.com/actions/setup-go)
- [actions/setup-dotnet: .NET core sdk](https://github.com/actions/setup-dotnet)
- [actions/setup-haskell: Haskell (GHC and Cabal)](https://github.com/actions/setup-haskell)
- [actions/setup-java: Java](https://github.com/actions/setup-java)
- [actions/setup-ruby: Ruby](https://github.com/actions/setup-ruby)
- [actions/setup-elixir: Elixir](https://github.com/actions/setup-elixir)
- [actions/setup-julia: Julia](https://github.com/julia-actions/setup-julia)

### Créer vos actions

#### Actions JavaScript et TypeScript

- [actions/toolkit](https://github.com/actions/toolkit) - La boîte à outils GitHub pour développer des actions GitHub.
- [actions/hello-world-javascript-action](https://github.com/actions/hello-world-javascript-action) - Un modèle qui montre comment créer une action JavaScript.
- [actions/javascript-action](https://github.com/actions/javascript-action) - Créez une action JavaScript.
- [actions/typescript-action](https://github.com/actions/typescript-action) - Créez une action TypeScript.
- [actions/http-client](https://github.com/actions/http-client) - Un client HTTP léger optimisé pour les actions, écrit en TypeScript avec les génériques et async/await.

#### Actions en conteneur Docker

- [actions/hello-world-docker-action](https://github.com/actions/hello-world-docker-action) - Un modèle qui montre comment créer une action Docker.
- [actions/container-toolkit-action](https://github.com/actions/container-toolkit-action) - Dépôt modèle pour créer des actions en conteneur avec actions/toolkit.

## Ressources de la communauté

### Outils et gestion de GitHub

- [Declaratively setup GitHub Labels](https://github.com/lannonbr/issue-label-manager-action)
- [Action to sync GitHub labels in the declarative way](https://github.com/micnncim/action-label-syncer)
- [Add releases to GitHub](https://github.com/elgohr/Github-Release-Action)
- [Publish a docker image to Dockerhub](https://github.com/elgohr/Publish-Docker-Github-Action)
- [Create an issue using content from a file](https://github.com/peter-evans/create-issue-from-file)
- [Publish GitHub Releases with Assets](https://github.com/softprops/action-gh-release)
- [GitHub Project Automation+](https://github.com/alex-page/github-project-automation-plus) - Automatisez les cartes GitHub Project à partir de n’importe quel événement webhook.
- [Run GitHub Actions Locally with a web interface](https://github.com/phishy/wflow)
- [Run GitHub Actions Locally in Terminal](https://github.com/nektos/act)
- [Build and Publish Android debug APK](https://github.com/ShaunLWM/action-release-debugapk)
- [Generate sequential build numbers for GitHub Actions](https://github.com/einaregilsson/build-number)
- [Push Git changes to GitHub repository without authentication difficulties](https://github.com/ad-m/github-push-action)
- [Generate release notes based on your events](https://github.com/Decathlon/release-notes-generator-action)
- [Create a GitHub wiki page based on the provided markdown file](https://github.com/Decathlon/wiki-page-creator-action)
- [Label your Pull Requests auto-magically (using committed files)](https://github.com/Decathlon/pull-request-labeler-action)
- [Add Label to your Pull Requests based on the author team name](https://github.com/JulienKode/team-labeler-action)
- [Get a list of file changes with PR/Push](https://github.com/trilom/file-changes-action)
- [Use private actions in any workflow](https://github.com/InVisionApp/private-action-loader)
- [Label Your Issues Using the Issue's Contents](https://github.com/damccorm/tag-ur-it)
- [Rollback a GitHub Release](https://github.com/author/action-rollback)
- [Lock Closed Issues and Pull Requests after a Period of Inactivity](https://github.com/dessant/lock-threads)
- [Get Commit Difference Count Between Two Branches](https://github.com/jessicalostinspace/commit-difference-action)
- [Generate Release Notes Based on Git References](https://github.com/metcalfc/changelog-generator)
- [Enforce Policies on GitHub Repositories and Commits](https://github.com/talos-systems/conform)
- [Auto Label Issue Based on Issue Description](https://github.com/Renato66/auto-label)
- [Update Configured GitHub Actions to the Latest Versions](https://github.com/fabasoad/ghacu)
- [Create Issue Branch](https://github.com/robvanderleek/create-issue-branch)
- [Remove Old Artifacts](https://github.com/c-hive/gha-remove-artifacts)
- [Expose Git Commit Data As Environment Variables](https://github.com/rlespinasse/git-commit-data-action)
- [Sync Defined Files/Binaries to Wiki or External Repositories](https://github.com/kai-tub/external-repo-sync-action)
- [Create/Update/Delete a GitHub Wiki Page Based on Any File](https://github.com/Andrew-Chen-Wang/github-wiki-action)
- [Prow GitHub Actions](https://github.com/jpmcb/prow-github-actions) - Automatise l’application des règles, les opérations via le chat et la fusion automatique des pull requests.
- [Check GitHub Status in your Workflow](https://github.com/crazy-max/ghaction-github-status)
- [Manage Labels on GitHub (create/rename/update/delete) as Code](https://github.com/crazy-max/ghaction-github-labeler)
- [Continuous Distribution of Funding to your Project Contributors and Dependencies](https://github.com/protontypes/libreselery)
- [Herald Rules for GitHub: Add Subscribers, Assignees, Labels, and More to Your PR](https://github.com/gagoar/use-herald-action)
- [GitHub Codeowners Validator](https://github.com/mszostok/codeowners-validator) - Vérifie la validité de votre fichier CODEOWNERS GitHub. Prend en charge les dépôts GitHub publics et privés ainsi que les installations GitHub Enterprise.
- [Copybara Action](https://github.com/olivr/copybara-action) - Déplace et transforme du code entre des dépôts (idéal pour gérer plusieurs dépôts à partir d’un monorepo).

### Collection d’actions

- [Use HashiCorp's Terraform](https://github.com/hashicorp/setup-terraform)
- [GitHub Actions for Yarn 1](https://github.com/Borales/actions-yarn)
- [GitHub Actions for Yarn 2](https://github.com/sergioramos/yarn-actions)
- [GitHub Actions for Golang](https://github.com/cedrickring/golang-action)
- [GitHub Actions for R and accompanying #rstats package](http://maxheld.de/ghactions/)
- [GitHub Actions for WordPress](https://github.com/10up/actions-wordpress/)
- [GitHub Actions for Composer](https://github.com/MilesChou/composer-action)
- [GitHub Actions for Flutter](https://github.com/subosito/flutter-action)
- [GitHub Actions for PHP](https://github.com/shivammathur/setup-php)
- [GitHub Actions for Rust](https://github.com/actions-rs)
- [GitHub Actions for Android](https://github.com/Malinskiy/action-android)
- [GitHub Actions for Logtalk and Prolog](https://github.com/logtalk-actions)
- [GitHub Actions for Deno](https://github.com/denolib/setup-deno)
- [GitHub Actions for Unity](https://github.com/webbertakken/unity-actions)
- [Octions - GitHub Actions for GitHub REST API](https://github.com/maxkomarychev/octions)
- [GitHub Actions for Docker](https://github.com/docker/github-actions)
- [GitHub Actions for AWS](https://github.com/clowdhaus/aws-github-actions)
- [Actions Hub](https://github.com/actionshub)

### Utilitaires

- [Setup `ssh-agent`](https://github.com/webfactory/ssh-agent) - Exécute `ssh-agent` avec des clés SSH supplémentaires pour accéder à des dépôts privés.
- [GitHub Actions Badges for your README](https://github.com/atrox/github-actions-badge)
- [GitHub Actions for Python project with poetry](https://github.com/abatilo/actions-poetry)
- [GitHub Actions for Python project with pyenv](https://github.com/gabrielfalcao/pyenv-action)
- [GitHub Actions to compile LaTeX documents](https://github.com/xu-cheng/latex-action)
- [Update Maxmind Databases](https://github.com/meetup/maxmind-updater)
- [Debug with SSH over tmate](https://github.com/mxschmitt/action-tmate) - Déboguez directement l’action en fournissant une connexion SSH.
- [Unlock git-crypt files](https://github.com/sliteteam/github-action-git-crypt-unlock)
- [Golang CGO cross compiler](https://github.com/crazy-max/ghaction-xgo)
- [Run your job on another architecture: arm32, aarch64 and others](https://github.com/uraimo/run-on-arch-action)
- [Generate a table of contents](https://github.com/technote-space/toc-generator)
- [Automatically add Label or Assignee to an Issue](https://github.com/Naturalclar/issue-action)
- [Action to send LGTM reaction as image or GIF when we say lgtm](https://github.com/micnncim/action-lgtm-reaction)
- [Generate build numbers across multiple scopes](https://github.com/zyborg/gh-action-buildnum)
- [Publish GitHub release artifacts](https://github.com/skx/github-action-publish-binaries)
- [Jekyll Diff Action](https://github.com/David-Byrne/jekyll-diff-action) - Compare le site Jekyll généré après une modification et publie le résultat sous forme de commentaire sur GitHub.
- [Branch Protection Bot](https://github.com/benjefferies/branch-protection-bot) - Désactive temporairement puis réactive l’option « Inclure les administrateurs » de la protection des branches.
- [Wait for commit statuses](https://github.com/WyriHaximus/github-action-wait-for-status) - Attend que tous les statuts et contrôles réussissent, ou que l’un d’eux échoue, puis définit la sortie de statut en conséquence.
- [Get Latest Tag](https://github.com/WyriHaximus/github-action-get-previous-tag) - Récupère la balise précédente depuis Git.
- [Create Milestone](https://github.com/WyriHaximus/github-action-create-milestone) - Crée un jalon ouvert à partir de son titre et de sa description.
- [Close Milestone](https://github.com/WyriHaximus/github-action-close-milestone) - Ferme le jalon indiqué.
- [Action to enforce branch naming rules](https://github.com/deepakputhraya/action-branch-name)
- [Expose slug of some GitHub variables](https://github.com/marketplace/actions/github-slug)
- [awesome-lint as a GitHub Action](https://github.com/max/awesome-lint)
- [Edit JSON File](https://github.com/deef0000dragon1/json-edit-action)
- [Build Slate documentation](https://github.com/Decathlon/slate-builder-action)
- [Read Properties](https://github.com/christian-draeger/read-properties) - Lit les valeurs des fichiers `.properties`.
- [Write Properties](https://github.com/christian-draeger/write-properties) - Écrit des valeurs dans des fichiers `.properties`.
- [Autotag](https://github.com/butlerlogic/action-autotag) - Génère automatiquement une nouvelle balise lorsque la version du fichier manifeste (par exemple `package.json`) change.
- [Apply templates with Jinja2](https://github.com/cuchi/jinja2-action) - Utilise le moteur de modèles Jinja2 pour générer des fichiers à partir de modèles.
- [Has Changes](https://github.com/UnicornGlobal/has-changes-action) - Vérifie si des étapes précédentes ont apporté des modifications au code.
- [Mind Your Language Action](https://github.com/tailaiw/mind-your-language-action) - Détecte les commentaires offensants dans les issues et les pull requests, puis avertit leurs auteurs.
- [YAML/JSON/XML Converter](https://github.com/fabasoad/yaml-json-xml-converter-action) - Convertit les fichiers entre les formats YAML, JSON et XML.
- [NSFW Detection](https://github.com/fabasoad/nsfw-detection-action) - Détecte les contenus NSFW dans les fichiers commités.
- [Has Changed Path](https://github.com/MarceloPrado/has-changed-path) - Exécute des actions sous condition en fonction des chemins modifiés.
- [Linguist](https://github.com/fabasoad/linguist-action) - Analyse un dépôt et fournit en sortie des informations sur les langages utilisés.
- [Twilio Voice Call](https://github.com/fabasoad/twilio-voice-call-action/) - Passe un appel vocal Twilio avec le texte indiqué.
- [Setup Xcode](https://github.com/maxim-lobanov/setup-xcode) - Bascule entre les versions de Xcode préinstallées sur les images macOS.
- [Setup Xamarin](https://github.com/maxim-lobanov/setup-xamarin) - Bascule entre les versions de Xamarin et Mono préinstallées sur les images macOS.
- [Memer Action](https://github.com/Bhupesh-V/memer-action) - Une action GitHub pour les mèmes de programmation xD.
- [Setup Cocoapods](https://github.com/maxim-lobanov/setup-cocoapods) - Configure une version précise de Cocoapods.
- [Public IP](https://github.com/haythem/public-ip) - Récupère l’adresse IP publique de l’exécuteur GitHub Actions.
- [GitHub Actions for Lazarus/FPC](https://github.com/gcarreno/setup-lazarus)
- [Twilio Fax](https://github.com/fabasoad/twilio-fax-action/) - Envoie un document par fax à l’aide de votre compte Twilio.
- [Setup Kubernetes tools](https://github.com/yokawasa/action-setup-kube-tools) - Installe les outils Kubernetes (kubectl, kustomize, helm, kubeval, conftest et yq) sur l’exécuteur.
- [Setup Elastic Cloud Control Tool](https://github.com/yokawasa/action-setup-ecctl) - Installe une version précise d’ecctl sur l’exécuteur.
- [PowerShell Script](https://github.com/Amadevus/pwsh-script) - Exécute des scripts PowerShell avec les contextes du workflow (par ex. `$github.token`) et les applets de commande ; la valeur de retour devient la sortie de l’action.
- [Upload and Scan Files with VirusTotal](https://github.com/crazy-max/ghaction-virustotal)
- [Import a GPG Key](https://github.com/crazy-max/ghaction-import-gpg)
- [Compress with UPX](https://github.com/crazy-max/ghaction-upx) - Le compresseur ultime d’exécutables.
- [Pull the New Go Module Version Into the Proxy Cache](https://github.com/andrewslotin/go-proxy-pull-action) - Vérifie que la dernière version de votre module Go se trouve dans le cache du proxy. Met également à jour la documentation pkg.go.dev lors de la publication.
- [Delete Run Artifacts](https://github.com/marketplace/actions/delete-run-artifacts) - Supprime tous les artefacts à la fin d’une exécution de workflow.
- [GitHub Environment Variables Action](https://github.com/FranzDiebold/github-env-vars-action) - Expose des variables d’environnement telles que le nom de branche ou de balise, le slug du dépôt et le slug de référence.
- [GitHub Action Locks](https://github.com/abatilo/github-action-locks/blob/master/README.md) - Garantit l’exécution atomique de vos workflows GitHub Actions.
- [Paths Filter](https://github.com/dorny/paths-filter) - Exécute des actions sous condition selon les fichiers modifiés par une pull request, une branche de fonctionnalité ou des commits poussés.
- [Minisauras](https://github.com/TeamTigers/minisauras) -  Récupère tous les fichiers JavaScript et CSS de votre branche de base, les minifie et crée une pull request sur une nouvelle branche.
- [Website to GIF](https://github.com/PabloLec/website-to-gif) - Transforme n’importe quelle page web en GIF à afficher dans votre README, votre documentation, etc.
- [Interactive Inputs - Runtime workflow inputs](https://github.com/boasiHQ/interactive-inputs) - Ajoute des entrées dynamiques à l’exécution pour vos workflows GitHub Actions.

#### Environnements

- [Create an envfile](https://github.com/SpicyPizza/create-envfile)
- [Export global environment variables for succeeding build steps](https://github.com/zweitag/github-actions)
- [Programmatically set environment variables for use in subsequent steps](https://github.com/allenevans/set-env)
- [Install Conda environments for Python](https://github.com/goanpeca/setup-miniconda)
- [Setup NativeScript](https://github.com/hrueger/setup-nativescript)
- [Create a JSON Environment File](https://github.com/schdck/create-env-json)

#### Dépendances

- [Install NPM Dependencies with Caching](https://github.com/bahmutov/npm-install)
- [Highlight New NPM Dependencies](https://github.com/hiwelo/new-dependencies-action) - Commente les pull requests pour signaler les nouvelles dépendances NPM ajoutées.
- [Cache NPM Dependencies](https://github.com/c-hive/gha-npm-cache)
- [Cache Yarn Dependencies](https://github.com/c-hive/gha-yarn-cache)

#### Versionnage sémantique

- [Next SemVers](https://github.com/WyriHaximus/github-action-next-semvers) - Génère la version suivante (majeure, mineure et corrective) à partir de la version semver indiquée.
- [Get latest SemVer and branch name given a search string](https://github.com/jessicalostinspace/github-action-get-regex-branch)
- [Cut Release Branch](https://github.com/jessicalostinspace/cut-release-action) - Crée une branche de publication à partir d’un préfixe de branche et, éventuellement, d’une version sémantique.
- [Increment Semantic Version](https://github.com/christian-draeger/increment-semantic-version) - Incrémente une version sémantique (SemVer) selon le type de publication indiqué.

### Analyse statique

- [PHPStan Static code analyzer Action](https://github.com/OskarStark/phpstan-ga)
- [GraphQL Inspector Action](https://github.com/kamilkisiela/graphql-inspector)
- [PowerShell static analysis with PSScriptAnalyzer](https://github.com/devblackops/github-action-psscriptanalyzer)
- [Run tfsec, with reviewdog output on the PR](https://github.com/reviewdog/action-tfsec)

#### Tests

- [Run Tests through Puppeteer, the Headless Chrome Node API](https://github.com/ianwalter/puppeteer)
- [xUnit Slack Reporter: Sends summary of tests from xUnit reports to a Slack channel](https://github.com/ivanklee86/xunit-slack-reporter)
- [Run codeception tests](https://github.com/joelwmale/codeception-action)
- [Run TestCafe tests](https://github.com/DevExpress/testcafe-action)
- [Run Unity tests](https://github.com/webbertakken/unity-test-runner)
- [Run Cypress E2E tests](https://github.com/cypress-io/github-action)
- [Test Ansible roles with Molecule](https://github.com/robertdebock/molecule-action)
- [Run performance testing with artillery.io](https://github.com/kenju/github-actions-artillery)
- [Detect Flaky Tests with BuildPulse](https://github.com/Workshop64/buildpulse-action)
- [Display Inline Code Annotations for Jest Tests](https://github.com/IgnusG/jest-report-action)
- [Run Julia tests](https://github.com/julia-actions/julia-runtest)

#### Analyse statique du code

- [PHP Coding Standards Fixer Action](https://github.com/OskarStark/php-cs-fixer-ga)
- [Runs Hadolint against a Dockerfile within a repository](https://github.com/burdzwastaken/hadolint-action)
- [Run ESLint, with reviewdog output on the PR](https://github.com/reviewdog/action-eslint)
- [JavaScript-based linter for \*.workflow files](https://github.com/OmarTawfik/github-actions-js)
- [Lint terraform files using tflint, with reviewdog output on the PR](https://github.com/reviewdog/action-tflint)
- [autopep8: Automatically formats Python code to conform to the PEP 8 style guide](https://github.com/peter-evans/autopep8)
- [Run `ergebnis/composer-normalize` to ensure your PHP project has a normalized `composer.json`](https://github.com/ergebnis/composer-normalize-action)
- [Run `stolt/lean-package-validator` to ensure your package has only the required `runtime` artifacts](https://github.com/raphaelstolt/lean-package-validator-action)
- [Run Go lint checks on PR event](https://github.com/ArangoGutierrez/GoLinty-Action)
- [Node.js - Automatically run the `format` and/or `lint` script used by the package](https://github.com/MarvinJWendt/run-node-formatter)
- [Stylelinter - GitHub Action that runs stylelint](https://github.com/exelban/stylelint)
- [Run stylelint, with reviewdog output on the PR](https://github.com/reviewdog/action-stylelint)
- [PyCodeStyle Action - A GitHub Action that leaves a comment on your PR with pycodestyle (autopep8) feedback](https://github.com/ankitvgupta/pycodestyle-action)
- [wemake-python-styleguide - The strictest and most opinionated python linter ever, with optional reviewdog output on the PR](https://github.com/wemake-services/wemake-python-styleguide)
- [Run TSLint with status checks and file diff annotations](https://github.com/mooyoul/tslint-actions)
- [Lint Pull Request commits with commitlint](https://github.com/wagoid/commitlint-github-action)
- [Run vint, with reviewdog output on the PR](https://github.com/reviewdog/action-vint)
- [Run mispell, with reviewdog output on the PR](https://github.com/reviewdog/action-misspell)
- [Run golangci-lint, with reviewdog output on the PR](https://github.com/reviewdog/action-golangci-lint)
- [Run shellcheck, with reviewdog output on the PR](https://github.com/reviewdog/action-shellcheck)
- [Catch insensitive, inconsiderate writing in your markdown docs](https://github.com/theashraf/alex-action)
- [Run dotenv-linter - Lints your .env files like a charm, with optional reviewdog output on the PR](https://github.com/wemake-services/dotenv-linter)
- [Run dotenv-linter, with reviewdog output on the PR](https://github.com/mgrachev/action-dotenv-linter)
- [Show and auto-fix linting errors for many programming languages](https://github.com/samuelmeuli/lint-action)
- [PHP_CodeSniffer With Annotations](https://github.com/chekalsky/phpcs-action)
- [Linter for markdown (with presets)](https://github.com/avto-dev/markdown-lint)
- [Stylelint problem matcher to create annotations](https://github.com/xt0rted/stylelint-problem-matcher)
- [Run sqlcheck on the PR to identifies anti-patterns in SQL queries](https://github.com/yokawasa/action-sqlcheck)
- [Validate Fastlane Supply Metadata Against the Play Store Guidelines](https://github.com/ashutoshgngwr/validate-fastlane-supply-metadata)
- [Run Golint to lint your Golang code](https://github.com/Jerome1337/golint-action)

#### Sécurité

- [A vulnerability scanner for your docker images](https://github.com/phonito/phonito-scanner-action)
- [Automatically approve and merge Dependabot updates](https://github.com/ridedott/dependabot-auto-merge-action)
- [Run dlint security linter on your Python code](https://github.com/xen0l/dlint-check)
- [AWS Secrets Manager Actions](https://github.com/say8425/aws-secrets-manager-actions) - Définit les secrets AWS Secrets Manager comme variables d’environnement.
- [Linting your AWS IAM policy documents for correctness and security issues](https://github.com/xen0l/iam-lint)
- [Secret Spreader](https://github.com/webfactory/secret-spreader) - À proprement parler, ce n’est pas une action, mais un outil pour gérer les secrets Actions dans une liste de dépôts.
- [Secrets Sync Action](https://github.com/google/secrets-sync-action) - Synchronise les secrets entre plusieurs dépôts.
- [Snyk Test Action](https://github.com/snyk/actions)
- [Manage Your GitHub Actions Secrets With A Simple CLI](https://github.com/unfor19/githubsecrets)
- [SecretHub](https://github.com/secrethub/actions) - Fournit une source unique de vérité pour vos secrets et les charge à la demande dans GitHub Actions.

#### Couverture de code

- [Scan code with SonarCloud](https://github.com/sonarsource/sonarcloud-github-action)
- [Send your code coverage to codecov.io](https://github.com/codecov/codecov-action)
- [Publishing code coverage to CodeClimate](https://github.com/paambaati/codeclimate-action)
- [Update repository go report card](https://github.com/creekorful/goreportcard-action)

### Analyse dynamique

- [Run Gofmt to check Golang code formatting](https://github.com/Jerome1337/gofmt-action)
- [Run Goimports to check Golang imports order](https://github.com/Jerome1337/goimports-action)

### Surveillance

- [Audit a webpage with Google Chrome's Lighthouse tests](https://github.com/jakejarvis/lighthouse-action)
- [Runs Lighthouse and posts results to PRs and Slack](https://github.com/foo-software/lighthouse-check-action)
- [Run Lighthouse in CI using GitHub Actions](https://github.com/treosh/lighthouse-ci-action)
- [Continuous Benchmarking and Benchmark Visualization for Go](https://github.com/bobheadxi/gobenchdata)
- [Size Limit Action](https://github.com/andresz1/size-limit-action) - Commente le coût comparatif de votre JavaScript dans les pull requests et les rejette si la limite est dépassée.
- [Check bundlephobia](https://github.com/carlesnunez/check-my-bundlephobia) - Commente la taille des paquets nouveaux ou modifiés selon bundlephobia.io et rejette la pull request si le seuil est dépassé.

### Pull requests

- [Set PR Reviewers Based on Assignees](https://github.com/pullreminders/assignee-to-reviewer-action)
- [Open or Update PR on Branch Push (with Branch Selection)](https://github.com/vsoch/pull-request-action)
- [Automatically Rebase a PR](https://github.com/cirrus-actions/rebase)
- [Label PR once it has a Specified Number of Approvals](https://github.com/pullreminders/label-when-approved-action)
- [Add Labels to a PR based on Matched File Patterns](https://github.com/banyan/auto-label)
- [Auto-Approve PRs](https://github.com/hmarr/auto-approve-action)
- [Automatically add Reviewers to PR based on the Configuration File](https://github.com/kentaro-m/auto-assign-action)
- [Add Labels to a PR based on Branch Name Patterns](https://github.com/TimonVS/pr-labeler-action)
- [Add Labels to a PR based on Total Size of the Diff](https://github.com/pascalgn/size-label-action)
- [Automatically merge PRs That Are Ready](https://github.com/pascalgn/automerge-action)
- [Verify That PRs Contain a Ticket Reference](https://github.com/vijaykramesh/pr-lint-action)
- [Create a PR for Changes to your Repository in the Actions Workspace](https://github.com/peter-evans/create-pull-request)
- [Lint a PR](https://github.com/seferov/pr-lint-action)
- [ChatOps for PRs](https://github.com/machine-learning-apps/actions-chatops)
- [Prefix Title and Body of a PR Based on Text Extracted from Branch Name](https://github.com/tzkhan/pr-update-action)
- [Block Autosquash Commits](https://github.com/xt0rted/block-autosquash-commits-action)
- [Automatically Bump and Tag on Merge](https://github.com/anothrNick/github-tag-action)
- [Automatically Update PRs with Outdated Checks and Squash and Merge the Ones Matching All Branch Protections](https://github.com/tibdex/autosquash)
- [Merge Pal - Automatically Update and Merge PRs](https://github.com/maxkomarychev/merge-pal-action)
- [Enforce naming convention on pull request title](https://github.com/deepakputhraya/action-pr-title)
- [Pull Request Stuck Notifier](https://github.com/jrylan/github-action-stuck-pr-notifier)
- [Lint pull request name with commitlint (Awesome if you squash merge !)](https://github.com/JulienKode/pull-request-name-linter-action)
- [Block PR merges when Checks for target branches are failing](https://github.com/cirrus-actions/branch-guard)
- [Get generated static site screenshots updated by Pull Request](https://github.com/ssowonny/diff-pages-action)
- [Add Labels Depending if the Pull Request Still in Progress](https://github.com/AlbertHernandez/working-label-action)
- [Ticket Check Action](https://github.com/neofinancial/ticket-check-action) - Ajoute automatiquement un numéro de ticket ou d’issue au début du titre de chaque pull request.
- [Pull Request Lint With Regex](https://github.com/MorrisonCole/pr-lint-action)
- [Pull Request Landmines](https://github.com/tylermurry/github-pr-landmine)
- [Annotate a GitHub Pull Request Based on a Checkstyle XML-Report](https://github.com/staabm/annotate-pull-request-from-checkstyle)
- [Pull Request Stats](https://github.com/flowwer-dev/pull-request-stats) -  Affiche des statistiques pertinentes sur les évaluateurs.
- [Pull Request Description Enforcer](https://github.com/derkinderfietsen/pr-description-enforcer) - Impose une description aux pull requests.

### GitHub Pages

- [Deploy a Zola site to GitHub Pages](https://github.com/shalzz/zola-deploy-action)
- [Build Hugo static content site and publish it to gh-pages branch](https://github.com/khanhicetea/gh-actions-hugo-deploy-gh-pages)
- [Build a Jekyll site—with Custom Jekyll Plugins & Build Scripts—and deploy it back to the Gh-Pages Branch](https://github.com/BryanSchuetz/jekyll-deploy-gh-pages)
- [Google Dataset Search Metadata](https://www.github.com/openschemas/extractors/) - Ainsi que d’autres extracteurs schema.org pour rendre les jeux de données découvrables depuis les pages GitHub.
- [GitHub Actions for deploying to GitHub Pages with Static Site Generators](https://github.com/peaceiris/actions-gh-pages)
- [GitHub Action for Hexo](https://github.com/heowc/action-hexo)
- [Deploy Google Analytics stats to GitHub Pages](https://github.com/cristianpb/analytics-google)
- [A Jupyter Notebook Blogging Platform Powered by GitHub Actions, Pages and Jekyll](https://github.com/fastai/fastpages)
- [Deploy A Static Site to GitHub Pages](https://github.com/appleboy/gh-pages-action) - Déploie dans un répertoire personnalisé et ignore un dossier ou un fichier.
- [Deploy to GitHub Pages with Advanced Settings](https://github.com/crazy-max/ghaction-github-pages)

### Notifications et messages

- [Send a Discord notification](https://github.com/Ilshidur/action-discord)
- [Post a Slack message as a bot](https://github.com/pullreminders/slack-action)
- [Send an SMS from GitHub Actions using Nexmo](https://github.com/nexmo-community/nexmo-sms-action)
- [Send an SMS from GitHub Actions using Clockworksms](https://github.com/bharathvaj1995/clockwork-sms-action)
- [Send a Telegram Message](https://github.com/appleboy/telegram-action)
- [Send a File or Text Message to Discord (custom define color, username or avatar)](https://github.com/appleboy/discord-action)
- [Collaborate on tweets using pull requests](https://github.com/gr2m/twitter-together)
- [Send a Push Notification via Push by Techulus](https://github.com/techulus/push-github-action)
- [Send email with SendGrid](https://github.com/peter-evans/sendgrid-action)
- [Send a Push Notification via Join](https://github.com/ShaunLWM/action-join)
- [New package version checker for npm](https://github.com/MeilCli/npm-update-check-action)
- [New package version checker for NuGet](https://github.com/MeilCli/nuget-update-check-action)
- [New package version checker for Gradle](https://github.com/MeilCli/gradle-update-check-action)
- [Send a Push Notification via Pushbullet](https://github.com/ShaunLWM/action-pushbullet)
- [Create an Outlook Calendar Event using Microsoft Graph](https://github.com/anoopt/ms-graph-create-event)
- [Watch for GitHub Wiki page changes and post to Slack](https://github.com/benmatselby/gollum-page-watcher-action)
- [Send an SMS using MessageBird](https://github.com/nikitasavinov/messagebird-sms-action)
- [Reply to Stale Bots](https://github.com/c-hive/fresh-bot)
- [Send an Embed Message to Discord](https://github.com/sarisia/actions-status-discord)
- [Keep Your PRs in Sync With Teamwork Tasks](https://github.com/Teamwork/github-sync)
- [Send Microsoft Teams Notification](https://github.com/opsless/ms-teams-github-actions)

### Déploiement

- [Deploy to Netlify](https://github.com/netlify/actions)
- [Deploy a Probot App using Actions](https://probot.github.io/docs/deployment/#github-actions)
- [Deploy a playlist to Spotify](https://github.com/swinton/SpotHub)
- [Deploy VS Code extensions with vsce](https://github.com/lannonbr/vsce-action)
- [Purge Cloudflare cache after updating a website](https://github.com/jakejarvis/cloudflare-purge-action)
- [Deploy your DNS configuration using DNS Control](https://github.com/koenrh/dnscontrol-action)
- [Deploy a Theme to Shopify](https://github.com/pgrimaud/action-shopify)
- [Trigger multiple GitLab CI Pipeline](https://github.com/appleboy/gitlab-ci-action)
- [Trigger multiple Jenkins Jobs](https://github.com/appleboy/jenkins-action)
- [GitHub Action for Homebrew Tap](https://github.com/izumin5210/action-homebrew-tap)
- [Copy files and artifacts via SSH](https://github.com/appleboy/scp-action)
- [Executing remote ssh commands](https://github.com/appleboy/ssh-action)
- [Publish a Python distribution package to PyPI](https://github.com/pypa/gh-action-pypi-publish)
- [Deploy Static Website to Azure Storage](https://github.com/feeloor/azure-static-website-deploy)
- [Cross platform Chocolatey CLI to build and publish packages](https://github.com/crazy-max/ghaction-chocolatey)
- [Deploy iOS Pod Library to Cocoapods](https://github.com/michaelhenry/deploy-to-cocoapods-github-action)
- [GitHub Action for TencentCloud Serverless](https://github.com/Juliiii/action-scf)
- [Publish npm (pre)releases](https://github.com/epeli/npm-release/)
- [Deploy a static site to Surge.sh](https://github.com/yavisht/deploy-via-surge.sh-github-action-template)
- [GitHub Action for GoReleaser, a release automation tool for Go projects](https://github.com/goreleaser/goreleaser-action)
- [FTP Deploy Action, Deploys a GitHub project to a FTP server using GitHub actions](https://github.com/SamKirkland/FTP-Deploy-Action)
- [Publish Article to Dev.to](https://github.com/tylerauerbeck/publish-to-dev.to-action)
- [Action For Semantic Release](https://github.com/cycjimmy/semantic-release-action)
- [Deploy a Collection to Ansible Galaxy](https://github.com/artis3n/ansible_galaxy_collection)
- [Publish module to Puppet Forge](https://github.com/barnumbirr/action-forge-publish)
- [Build and publish Electron apps](https://github.com/samuelmeuli/action-electron-builder)
- [Publish a Maven package](https://github.com/samuelmeuli/action-maven-publish)
- [Build and deploy a theme to Ghost CMS](https://github.com/TryGhost/action-deploy-theme)
- [Deploy an Ansible role to Ansible Galaxy](https://github.com/robertdebock/galaxy-action)
- [Publish one or more JS modules to a registry](https://github.com/author/action-publish)
- [Publish a package with 2FA using Slack](https://github.com/erezrokah/2fa-with-slack-action)
- [Serialize Workflow Runs in Continuous Deployment Pipelines](https://github.com/softprops/turnstyle)
- [Netlify Deploy GitHub Action for each commit](https://github.com/nwtgck/actions-netlify)
- [Run Ansible Playbooks](https://github.com/arillso/action.playbook)
- [Publish a Python Distribution Package to Anaconda Cloud](https://github.com/fcakyon/conda-publish-action)
- [Deploy VS Code Extension to Visual Studio Marketplace or the Open VSX Registry](https://github.com/HaaLeo/publish-vscode-extension)
- [Deploy a YouTube Video to Anchor.fm Podcast](https://github.com/Schrodinger-Hat/youtube-to-anchorfm)
- [Deploy with AWS CodeDeploy](https://github.com/webfactory/create-aws-codedeploy-deployment)

#### Docker

- [Update a Docker Hub repository description from README.md](https://github.com/peter-evans/dockerhub-description)
- [Publish Docker Images to the GitHub Package Registry (GPR)](https://github.com/machine-learning-apps/gpr-docker-publish)
- [Update a repository's "Full description" on Docker Hub](https://github.com/mpepping/github-actions/tree/master/docker-hub-metadata)
- [Build and publish docker images to any registry using Kaniko](https://github.com/outillage/kaniko-action)
- [Monitor and limit your docker image size](https://github.com/wemake-services/docker-image-size-limit)
- [Publish Docker Images to the Amazon Elastic Container Registry (ECR)](https://github.com/appleboy/docker-ecr-action)
- [Build And Push Your Docker Images Caching Each Stage To Reduce Build Time](https://github.com/whoan/docker-build-with-cache-action)
- [Set up Docker Buildx](https://github.com/crazy-max/ghaction-docker-buildx)
- [Convert Branch or Tag Name Into Docker-Compatible Image Tag](https://github.com/ankitvgupta/ref-to-tag-action/)
- [Update a Container Repository Description From README.md](https://github.com/marketplace/actions/update-container-description-action) - Registres pris en charge : Docker Hub, Quay et Harbor.

#### Kubernetes

- [Deploy to any Cloud or Kubernetes Using Pulumi](https://github.com/pulumi/actions)
- [Deploy to Kubernetes with kubectl](https://github.com/steebchen/kubectl)
- [Get Kubeconfig File From Google Kubernetes Engine (GKE)](https://github.com/machine-learning-apps/gke-kubeconfig)
- [Kustomize Kubernetes Config YAMLs](https://github.com/karancode/kustomize-github-action)
- [Create a Kubernetes Cluster for Testing Using Krucible](https://github.com/Krucible/krucible-github-action)

#### AWS

- [Sync/upload a directory to an AWS S3 bucket](https://github.com/jakejarvis/s3-sync-action)
- [Deploy Lambda code to an existing function](https://github.com/appleboy/lambda-action)

#### Terraform

- [Generate terraform documentation](https://github.com/Dirrk/terraform-docs) - Utilise terraform-docs pour générer la documentation des modules Terraform.
- [An example of using Terraform to validate and apply GitHub administration](https://github.com/asgharlabs/github-terraform/tree/master/.github/workflows)

### Services externes

- [Use a Jenkinsfile](https://github.com/jonico/jenkinsfile-runner-github-actions)
- [GitHub Action for Firebase](https://github.com/w9jds/firebase-action)
- [GitHub Action for Contentful Migration CLI](https://github.com/Shy/contentful-action)
- [GitHub Actions for Pixela (a-know/pi)](https://github.com/peaceiris/actions-pixela)
- [GitHub Action for Google Cloud Platform (GCP)](https://github.com/exelban/gcloud)
- [Upload files to any OpenStack Swift service provider](https://github.com/iksaku/openstack-swift-action)
- [GitHub Action for sending Stack Overflow posts to Slack](https://github.com/logankilpatrick/StackOverflowBot)
- [Assume AWS role](https://github.com/nordcloud/aws-assume-role/)
- [Generate Custom Response using JSONbin](https://github.com/fabasoad/jsonbin-action)

### Outils frontend

- [Execute Gradle task](https://github.com/MrRamych/gradle-actions)
- [JS Build Actions](https://github.com/elstudio/actions-js-build) - Exécute les tâches de compilation Grunt ou Gulp et commit les modifications de fichiers.
- [GitHub Action for Gatsby CLI](https://github.com/jzweifel/gatsby-cli-github-action)
- [Runs a WebPageTest audit and prints the results as commit comment](https://github.com/JCofman/webPagetestAction)
- [GitHub Actions for Hugo extended](https://github.com/peaceiris/actions-hugo)
- [Generate OG Image](https://github.com/BoyWithSilverWings/generate-og-image) - Génère des images Open Graph personnalisables à partir de fichiers Markdown.
- [GitHub Actions for mdBook](https://github.com/peaceiris/actions-mdbook)
- [Setup Mint](https://github.com/fabasoad/setup-mint-action) - Configure Mint (langage de programmation destiné à créer des applications monopages).
- [Gatsby AWS S3 Deployment](https://github.com/jonelantha/gatsby-s3-action) - Déploie Gatsby sur S3 (compatible avec CloudFront).

### Opérations de machine learning

- [Submitting Argo Workflows (Cloud Agnostic)](https://github.com/machine-learning-apps/actions-argo)
- [Submitting Argo Workflows to GKE](https://github.com/machine-learning-apps/gke-argo)
- [Query Experiment Tracking Results From Weights & Biases](https://github.com/machine-learning-apps/wandb-action)
- [Run Parameterized Jupyter Notebooks](https://github.com/yaananth/run-notebook)
- [Compile, Deploy and Run Kubeflow Pipeline](https://github.com/NikeNano/kubeflow-github-action)
- [Automatically Dockerize A Data-Science Repo As A Jupyter Server](https://github.com/jupyterhub/repo2docker-action)
- [Azure Machine Learning With GitHub Actions](https://github.com/machine-learning-apps/ml-template-azure)

### Compilation

- [run-cmake](https://github.com/lukka/run-cmake) - Action multiplateforme pour compiler des logiciels C/C++ avec [CMake](https://cmake.org) et [Ninja](https://ninja-build.org/).
- [run-vcpkg](https://github.com/lukka/run-vcpkg) - Action multiplateforme pour compiler et installer des dépendances C/C++ avec [vcpkg](https://github.com/microsoft/vcpkg).
- [Build Go applications for multiplatform](https://github.com/izumin5210/action-go-crossbuild)
- [Generate ~/.m2/settings.xml for Maven builds](https://github.com/whelk-io/maven-settings-xml-action)
- [Run Pascal Script](https://github.com/fabasoad/pascal-action)
- [Setup Brainfuck](https://github.com/fabasoad/setup-brainfuck-action) - Configure un interpréteur Brainfuck.
- [Publish Go Binaries to GitHub Release Assets](https://github.com/wangyoucao577/go-release-action)
- [Setup COBOL](https://github.com/fabasoad/setup-cobol-action)
- [Check Gradle version](https://github.com/madhead/check-gradle-version) - Maintient votre version de Gradle à jour.

### Base de données

- [Setup Cassandra Schema](https://github.com/fabasoad/setup-cassandra-action) - Exécute des scripts du dossier fourni sur un cluster Cassandra.

### Réseau

- [Setup ZeroTier](https://github.com/zerotier/github-action) - Connecte votre exécuteur à un réseau ZeroTier.

### Localisation

- [Find and automatically fix typos and grammar issues in your code](https://github.com/sobolevn/misspell-fixer-action)
- [Translation](https://github.com/fabasoad/translation-action) - Traduit du texte d’une langue quelconque vers une autre.

### Divertissement

- [Add equivalent of a like button in your README](https://github.com/ariary/Readme-Like-Button) - Visualise l’approbation de la communauté sur une partie de votre README (peut servir de sondage).

### Aide-mémoire

- [GitHub Actions Branding Cheat Sheet](https://haya14busa.github.io/github-action-brandings/)

## Tutoriels

- [Continuous deployment of Next.js app with Up](https://medium.com/@romanenko/simple-ci-for-next-js-projects-with-apex-up-github-actions-6f0b1b9a5400)
- [Converting Docker-based Actions to JavaScript/TypeScript](https://httgp.com/converting-github-actions-from-docker-to-javascript/)
- [GitHub Actions CI for Swift/iOS Projects](https://medium.com/rosberryapps/github-actions-ci-for-swift-projects-c129baceed1a)
- [Working with GitHub Actions](https://jeffrafter.com/working-with-github-actions)
- [GitHub Actions for Rails Developers](https://www.youtube.com/watch?v=gGUXydw22zw)
- [GitHub Actions Advent Calendar](https://www.edwardthomson.com/blog/github_actions_advent_calendar.html)
- [Zero Downtime Laravel Deployments with GitHub Actions](https://atymic.dev/blog/github-actions-laravel-ci-cd/)
- [Building Custom GitHub Actions Pluralsight Course](https://www.pluralsight.com/courses/building-custom-github-actions/)
- [Continuously Deploying Django to DigitalOcean with Docker and GitHub Actions](https://testdriven.io/blog/deploying-django-to-digitalocean-with-docker-and-github-actions/)
- [Deploying Self-Hosted GitHub Actions Runners with Docker](https://testdriven.io/blog/github-actions-docker/) - Déploie des exécuteurs GitHub Actions auto-hébergés avec Docker et Docker Swarm sur DigitalOcean.
- [Setup Auto-scaled self-hosted GitHub Actions Runners on AWS Spot-instances](https://040code.github.io/2020/05/25/scaling-selfhosted-action-runners)
- [Getting the Gist of GitHub Actions](https://gist.github.com/br3ndonland/f9c753eb27381f97336aa21b8d932be6)

> N’hésitez pas à proposer une pull request si vous avez d’autres ressources à partager. Consultez [contributing.md](contributing.md) pour en savoir plus.
