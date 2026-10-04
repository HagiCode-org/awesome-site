<p align="center">
  <br>
    <img src="awesome-actions.png" width="150"/>
  <br>
</p>

# Awesome Actions [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [<!--lint ignore no-dead-urls-->![GitHub Actions status | sdras/awesome-actions](https://github.com/sdras/awesome-actions/workflows/Lint%20Awesome%20List/badge.svg)](https://github.com/sdras/awesome-actions/actions?workflow=Lint+Awesome+List)

> Eine kuratierte Liste großartiger Dinge rund um GitHub Actions.

Actions werden durch GitHub-Plattformereignisse direkt in einem Repository ausgelöst und führen bei Bedarf Workflows auf virtuellen Linux-, Windows- oder macOS-Maschinen oder in einem Container aus. Mit GitHub Actions kannst du deinen Workflow von der Idee bis zur Produktion automatisieren.

## Inhalt

- [Offizielle Ressourcen](#official-resources)
  - [Workflow-Beispiele](#workflow-examples)
  - [Offizielle Actions](#official-actions)
  - [Eigene Actions erstellen](#create-your-actions)
- [Community-Ressourcen](#community-resources)
  - [GitHub-Tools und -Verwaltung](#github-tools-and-management)
  - [Actions-Sammlungen](#collection-of-actions)
  - [Dienstprogramme](#utility)
  - [Statische Analyse](#static-analysis)
  - [Dynamische Analyse](#dynamic-analysis)
  - [Überwachung](#monitoring)
  - [Pull Requests](#pull-requests)
  - [GitHub Pages](#github-pages)
  - [Benachrichtigungen und Nachrichten](#notifications-and-messages)
  - [Bereitstellung](#deployment)
  - [Externe Dienste](#external-services)
  - [Frontend-Tools](#frontend-tools)
  - [Machine-Learning-Betrieb](#machine-learning-ops)
  - [Erstellen](#build)
  - [Datenbank](#database)
  - [Netzwerk](#networking)
  - [Lokalisierung](#localization)
  - [Spaß](#fun)
  - [Spickzettel](#cheat-sheet)
- [Anleitungen](#tutorials)

## Offizielle Ressourcen

- [Offizielle Website](https://github.com/features/actions)
- [Offizielle Dokumentation](https://help.github.com/en/actions)
- [Offizielle Actions-Organisation](https://github.com/actions)
  - [actions/virtual-environments](https://github.com/actions/virtual-environments) - Virtuelle Umgebungen für GitHub Actions.
  - [actions/runner](https://github.com/actions/runner) - Der Runner für GitHub Actions.
- [Ankündigung im GitHub-Blog](https://github.blog/2018-10-17-action-demos/)

### Workflow-Beispiele

- [actions/starter-workflows](https://github.com/actions/starter-workflows) - Vorlagenverwaltung für Workflows.
- [actions/example-services](https://github.com/actions/example-services) - Beispiel-Workflows mit Service-Containern.

### Offizielle Actions

<!--lint disable no-dead-urls-->

#### Workflow-Tool-Actions

Tool-Actions für deinen Workflow.

<!--lint ignore awesome-spell-check-->

- [actions/checkout](https://github.com/actions/checkout) - Richte dein Repository in deinem Workflow ein.
- [actions/upload-artifact](https://github.com/actions/upload-artifact) - Lade Artefakte aus deinem Workflow hoch.
- [actions/download-artifact](https://github.com/actions/download-artifact) - Lade Artefakte aus deinem Build herunter.
- [actions/cache](https://github.com/actions/cache) - Cacht Abhängigkeiten und Build-Ausgaben in GitHub Actions.
- [actions/github-script](https://github.com/actions/github-script) - Schreibe Skripte für die GitHub-API und Workflow-Kontexte.

#### Actions für die GitHub-Automatisierung

Automatisiere die Verwaltung von Issues, Pull Requests und Releases.

- [actions/create-release](https://github.com/actions/create-release) - Eine Action zum Erstellen von Releases über die GitHub-Release-API.
- [actions/upload-release-asset](https://github.com/actions/upload-release-asset) - Eine Action zum Hochladen von Release-Assets über die GitHub-Release-API.
- [actions/first-interaction](https://github.com/actions/first-interaction) - Eine Action zum Filtern von Pull Requests und Issues von Erstbeitragenden.
- [actions/stale](https://github.com/actions/stale) - Markiert Issues und Pull Requests, bei denen es seit einiger Zeit keine Aktivität gab.
- [actions/labeler](https://github.com/actions/labeler) - Eine Action zum automatischen Labeln von Pull Requests.
- [actions/delete-package-versions](https://github.com/actions/delete-package-versions) - Paketversionen aus GitHub Packages löschen.

#### Setup-Actions

Richte deinen GitHub-Actions-Workflow mit einer bestimmten Version deiner Programmiersprachen ein.

- [actions/setup-node: Node.js](https://github.com/actions/setup-node)
- [actions/setup-python: Python](https://github.com/actions/setup-python)
- [actions/setup-go: Go](https://github.com/actions/setup-go)
- [actions/setup-dotnet: .NET Core SDK](https://github.com/actions/setup-dotnet)
- [actions/setup-haskell: Haskell (GHC und Cabal)](https://github.com/actions/setup-haskell)
- [actions/setup-java: Java](https://github.com/actions/setup-java)
- [actions/setup-ruby: Ruby](https://github.com/actions/setup-ruby)
- [actions/setup-elixir: Elixir](https://github.com/actions/setup-elixir)
- [actions/setup-julia: Julia](https://github.com/julia-actions/setup-julia)

### Eigene Actions erstellen

#### JavaScript- und TypeScript-Actions

- [actions/toolkit](https://github.com/actions/toolkit) - Das GitHub-Toolkit zur Entwicklung von GitHub Actions.
- [actions/hello-world-javascript-action](https://github.com/actions/hello-world-javascript-action) - Eine Vorlage zur Veranschaulichung, wie eine JavaScript-Action erstellt wird.
- [actions/javascript-action](https://github.com/actions/javascript-action) - Eine JavaScript-Action erstellen.
- [actions/typescript-action](https://github.com/actions/typescript-action) - Eine TypeScript-Action erstellen.
- [actions/http-client](https://github.com/actions/http-client) - Ein leichtgewichtiger HTTP-Client, für Actions optimiert, mit TypeScript-Generics und async/await.

#### Docker-Container-Actions

- [actions/hello-world-docker-action](https://github.com/actions/hello-world-docker-action) - Eine Vorlage zur Veranschaulichung, wie eine Docker-Action erstellt wird.
- [actions/container-toolkit-action](https://github.com/actions/container-toolkit-action) - Vorlagen-Repository zum Erstellen von Container-Actions mit actions/toolkit.

## Community-Ressourcen

### GitHub-Tools und -Verwaltung

- [GitHub-Labels deklarativ einrichten](https://github.com/lannonbr/issue-label-manager-action)
- [GitHub-Labels deklarativ synchronisieren](https://github.com/micnncim/action-label-syncer)
- [Releases zu GitHub hinzufügen](https://github.com/elgohr/Github-Release-Action)
- [Ein Docker-Image auf Docker Hub veröffentlichen](https://github.com/elgohr/Publish-Docker-Github-Action)
- [Ein Issue mithilfe des Inhalts einer Datei erstellen](https://github.com/peter-evans/create-issue-from-file)
- [GitHub-Releases mit Assets veröffentlichen](https://github.com/softprops/action-gh-release)
- [Automatisierung für GitHub-Projekte+](https://github.com/alex-page/github-project-automation-plus) - Automatisiere GitHub-Project-Karten mit beliebigen Webhook-Ereignissen.
- [GitHub Actions lokal mit einer Weboberfläche ausführen](https://github.com/phishy/wflow)
- [GitHub Actions lokal im Terminal ausführen](https://github.com/nektos/act)
- [Android-Debug-APK erstellen und veröffentlichen](https://github.com/ShaunLWM/action-release-debugapk)
- [Fortlaufende Build-Nummern für GitHub Actions generieren](https://github.com/einaregilsson/build-number)
- [Git-Änderungen ohne Authentifizierungsprobleme in ein GitHub-Repository übertragen](https://github.com/ad-m/github-push-action)
- [Release Notes anhand deiner Ereignisse generieren](https://github.com/Decathlon/release-notes-generator-action)
- [Eine GitHub-Wiki-Seite aus einer bereitgestellten Markdown-Datei erstellen](https://github.com/Decathlon/wiki-page-creator-action)
- [Pull Requests anhand committeter Dateien automatisch labeln](https://github.com/Decathlon/pull-request-labeler-action)
- [Pull Requests anhand des Teamnamens des Autors labeln](https://github.com/JulienKode/team-labeler-action)
- [Dateiänderungen bei Pull Requests und Pushes ermitteln](https://github.com/trilom/file-changes-action)
- [Private Actions in jedem Workflow verwenden](https://github.com/InVisionApp/private-action-loader)
- [Deine Issues anhand ihres Inhalts labeln](https://github.com/damccorm/tag-ur-it)
- [Ein GitHub-Release zurücksetzen](https://github.com/author/action-rollback)
- [Geschlossene Issues und Pull Requests nach einer Zeit der Inaktivität sperren](https://github.com/dessant/lock-threads)
- [Die Anzahl der Commit-Unterschiede zwischen zwei Branches ermitteln](https://github.com/jessicalostinspace/commit-difference-action)
- [Release Notes anhand von Git-Referenzen generieren](https://github.com/metcalfc/changelog-generator)
- [Richtlinien für GitHub-Repositories und Commits durchsetzen](https://github.com/talos-systems/conform)
- [Issues anhand ihrer Beschreibung automatisch labeln](https://github.com/Renato66/auto-label)
- [Konfigurierte GitHub Actions auf die neuesten Versionen aktualisieren](https://github.com/fabasoad/ghacu)
- [Einen Issue-Branch erstellen](https://github.com/robvanderleek/create-issue-branch)
- [Alte Artefakte entfernen](https://github.com/c-hive/gha-remove-artifacts)
- [Git-Commit-Daten als Umgebungsvariablen bereitstellen](https://github.com/rlespinasse/git-commit-data-action)
- [Festgelegte Dateien/Binärdateien mit Wikis oder externen Repositories synchronisieren](https://github.com/kai-tub/external-repo-sync-action)
- [Eine GitHub-Wiki-Seite anhand einer beliebigen Datei erstellen, aktualisieren oder löschen](https://github.com/Andrew-Chen-Wang/github-wiki-action)
- [Prow GitHub Actions](https://github.com/jpmcb/prow-github-actions) - Automatisierung der Richtliniendurchsetzung, ChatOps und automatischen PR-Zusammenführung.
- [Den GitHub-Status in deinem Workflow prüfen](https://github.com/crazy-max/ghaction-github-status)
- [GitHub-Labels als Code verwalten (erstellen/umbenennen/aktualisieren/löschen)](https://github.com/crazy-max/ghaction-github-labeler)
- [Kontinuierliche Ausschüttung von Fördermitteln an Projektmitwirkende und Abhängigkeiten](https://github.com/protontypes/libreselery)
- [Herald-Regeln für GitHub: Abonnenten, Zuständige, Labels und mehr zu deinem PR hinzufügen](https://github.com/gagoar/use-herald-action)
- [GitHub-Codeowners-Datei validieren](https://github.com/mszostok/codeowners-validator) - Stellt die Korrektheit deiner GitHub-CODEOWNERS-Datei sicher. Unterstützt öffentliche und private GitHub-Repositories sowie GitHub-Enterprise-Installationen.
- [Copybara Action](https://github.com/olivr/copybara-action) - Verschiebt und transformiert Code zwischen Repositories (ideal, um mehrere Repositories aus einem Monorepo zu pflegen).

### Actions-Sammlungen

- [HashiCorps Terraform verwenden](https://github.com/hashicorp/setup-terraform)
- [GitHub Actions für Yarn 1](https://github.com/Borales/actions-yarn)
- [GitHub Actions für Yarn 2](https://github.com/sergioramos/yarn-actions)
- [GitHub Actions für Golang](https://github.com/cedrickring/golang-action)
- [GitHub Actions für R und das zugehörige #rstats-Paket](http://maxheld.de/ghactions/)
- [GitHub Actions für WordPress](https://github.com/10up/actions-wordpress/)
- [GitHub Actions für Composer](https://github.com/MilesChou/composer-action)
- [GitHub Actions für Flutter](https://github.com/subosito/flutter-action)
- [GitHub Actions für PHP](https://github.com/shivammathur/setup-php)
- [GitHub Actions für Rust](https://github.com/actions-rs)
- [GitHub Actions für Android](https://github.com/Malinskiy/action-android)
- [GitHub Actions für Logtalk und Prolog](https://github.com/logtalk-actions)
- [GitHub Actions für Deno](https://github.com/denolib/setup-deno)
- [GitHub Actions für Unity](https://github.com/webbertakken/unity-actions)
- [Octions – GitHub Actions für die GitHub-REST-API](https://github.com/maxkomarychev/octions)
- [GitHub Actions für Docker](https://github.com/docker/github-actions)
- [GitHub Actions für AWS](https://github.com/clowdhaus/aws-github-actions)
- [Actions Hub](https://github.com/actionshub)

### Dienstprogramme

- [`ssh-agent` einrichten](https://github.com/webfactory/ssh-agent) - Führe `ssh-agent` mit zusätzlichen SSH-Schlüsseln aus, um auf private Repositories zuzugreifen.
- [GitHub-Actions-Badges für deine README](https://github.com/atrox/github-actions-badge)
- [GitHub Actions für Python-Projekte mit Poetry](https://github.com/abatilo/actions-poetry)
- [GitHub Actions für Python-Projekte mit pyenv](https://github.com/gabrielfalcao/pyenv-action)
- [GitHub Actions zum Kompilieren von LaTeX-Dokumenten](https://github.com/xu-cheng/latex-action)
- [MaxMind-Datenbanken aktualisieren](https://github.com/meetup/maxmind-updater)
- [Mit SSH über tmate debuggen](https://github.com/mxschmitt/action-tmate) - Debugge die Action direkt über eine bereitgestellte SSH-Verbindung.
- [git-crypt-Dateien entsperren](https://github.com/sliteteam/github-action-git-crypt-unlock)
- [Golang-CGO-Cross-Compiler](https://github.com/crazy-max/ghaction-xgo)
- [Deinen Job auf einer anderen Architektur ausführen: arm32, aarch64 und weitere](https://github.com/uraimo/run-on-arch-action)
- [Ein Inhaltsverzeichnis generieren](https://github.com/technote-space/toc-generator)
- [Einem Issue automatisch ein Label oder einen Zuständigen hinzufügen](https://github.com/Naturalclar/issue-action)
- [Eine LGTM-Reaktion als Bild oder GIF senden, wenn wir „lgtm“ sagen](https://github.com/micnncim/action-lgtm-reaction)
- [Build-Nummern über mehrere Geltungsbereiche hinweg generieren](https://github.com/zyborg/gh-action-buildnum)
- [GitHub-Release-Artefakte veröffentlichen](https://github.com/skx/github-action-publish-binaries)
- [Jekyll-Diff-Action](https://github.com/David-Byrne/jekyll-diff-action) - Vergleicht die erstellte Jekyll-Website nach einer Änderung und veröffentlicht das Ergebnis als Kommentar auf GitHub.
- [Branch-Protection-Bot](https://github.com/benjefferies/branch-protection-bot) - Deaktiviert und reaktiviert vorübergehend die Option „Include administrators“ beim Branch-Schutz.
- [Auf Commit-Statusmeldungen warten](https://github.com/WyriHaximus/github-action-wait-for-status) - Wartet, bis alle Statusmeldungen und Prüfungen erfolgreich sind oder eine davon fehlschlägt, und setzt die Statusausgabe entsprechend.
- [Neuesten Tag abrufen](https://github.com/WyriHaximus/github-action-get-previous-tag) - Ruft den vorherigen Tag aus Git ab.
- [Meilenstein erstellen](https://github.com/WyriHaximus/github-action-create-milestone) - Erstellt anhand von Titel und Beschreibung einen neuen offenen Meilenstein.
- [Meilenstein schließen](https://github.com/WyriHaximus/github-action-close-milestone) - Schließt den angegebenen Meilenstein.
- [Branch-Namensregeln durchsetzen](https://github.com/deepakputhraya/action-branch-name)
- [Slug ausgewählter GitHub-Variablen bereitstellen](https://github.com/marketplace/actions/github-slug)
- [awesome-lint als GitHub Action](https://github.com/max/awesome-lint)
- [JSON-Datei bearbeiten](https://github.com/deef0000dragon1/json-edit-action)
- [Slate-Dokumentation erstellen](https://github.com/Decathlon/slate-builder-action)
- [Properties lesen](https://github.com/christian-draeger/read-properties) - Liest Werte aus `.properties`-Dateien.
- [Properties schreiben](https://github.com/christian-draeger/write-properties) - Schreibt Werte in `.properties`-Dateien.
- [Autotag](https://github.com/butlerlogic/action-autotag) - Erzeugt automatisch ein neues Tag, wenn sich die Version in der Manifestdatei (z. B. `package.json`) ändert.
- [Vorlagen mit Jinja2 anwenden](https://github.com/cuchi/jinja2-action) - Verwendet die Jinja2-Template-Engine, um Dateien aus Vorlagen zu generieren.
- [Änderungen vorhanden](https://github.com/UnicornGlobal/has-changes-action) - Prüft, ob sich der Code gegenüber vorherigen Schritten geändert hat.
- [Mind Your Language Action](https://github.com/tailaiw/mind-your-language-action) - Erkennt anstößige Kommentare in Issues und Pull Requests und warnt die Absendenden.
- [YAML/JSON/XML-Konverter](https://github.com/fabasoad/yaml-json-xml-converter-action) - Wandelt YAML-, JSON- und XML-Dateiformate ineinander um.
- [NSFW-Erkennung](https://github.com/fabasoad/nsfw-detection-action) - Erkennt NSFW-Inhalte in committeten Dateien.
- [Geänderte Pfade erkennen](https://github.com/MarceloPrado/has-changed-path) - Führt Actions abhängig von geänderten Pfaden bedingt aus.
- [Linguist](https://github.com/fabasoad/linguist-action) - Prüft ein Repository und gibt Informationen über die verwendeten Sprachen aus.
- [Twilio-Sprachanruf](https://github.com/fabasoad/twilio-voice-call-action/) - Führt einen Twilio-Sprachanruf mit einem festgelegten Text aus.
- [Xcode einrichten](https://github.com/maxim-lobanov/setup-xcode) - Wechselt zwischen vorinstallierten Xcode-Versionen für macOS-Images.
- [Xamarin einrichten](https://github.com/maxim-lobanov/setup-xamarin) - Wechselt zwischen vorinstallierten Xamarin- und Mono-Versionen für macOS-Images.
- [Memer Action](https://github.com/Bhupesh-V/memer-action) - Eine GitHub Action für Programmierer-Memes xD.
- [CocoaPods einrichten](https://github.com/maxim-lobanov/setup-cocoapods) - Richtet eine bestimmte Version von CocoaPods ein.
- [Öffentliche IP-Adresse](https://github.com/haythem/public-ip) - Fragt die öffentliche IP-Adresse des GitHub-Actions-Runners ab.
- [GitHub Actions für Lazarus/FPC](https://github.com/gcarreno/setup-lazarus)
- [Twilio-Fax](https://github.com/fabasoad/twilio-fax-action/) - Sendet ein Dokument per Fax über dein Twilio-Konto.
- [Kubernetes-Tools einrichten](https://github.com/yokawasa/action-setup-kube-tools) - Installiert Kubernetes-Tools (kubectl, kustomize, helm, kubeval, conftest und yq) auf dem Runner.
- [Elastic Cloud Control Tool einrichten](https://github.com/yokawasa/action-setup-ecctl) - Installiert eine bestimmte ecctl-Version auf dem Runner.
- [PowerShell-Skript](https://github.com/Amadevus/pwsh-script) - Führt PowerShell-Skripte mit Workflow-Kontexten (z. B. `$github.token`) und Cmdlets aus und gibt den Rückgabewert als Action-Ausgabe zurück.
- [Dateien mit VirusTotal hochladen und scannen](https://github.com/crazy-max/ghaction-virustotal)
- [Einen GPG-Schlüssel importieren](https://github.com/crazy-max/ghaction-import-gpg)
- [Mit UPX komprimieren](https://github.com/crazy-max/ghaction-upx) - Der „Ultimate Packer for eXecutables“.
- [Die neue Go-Modulversion in den Proxy-Cache laden](https://github.com/andrewslotin/go-proxy-pull-action) - Stellt sicher, dass die neueste Version deines Go-Moduls im Proxy-Cache liegt. Aktualisiert bei einer Veröffentlichung außerdem die Dokumentation auf pkg.go.dev.
- [Laufzeitartefakte löschen](https://github.com/marketplace/actions/delete-run-artifacts) - Löscht alle Artefakte am Ende eines Workflow-Laufs.
- [GitHub-Umgebungsvariablen-Action](https://github.com/FranzDiebold/github-env-vars-action) - Stellt Umgebungsvariablen wie Branch-/Tag-Namen, Repository-Slug und Ref-Slug bereit.
- [GitHub-Action-Sperren](https://github.com/abatilo/github-action-locks/blob/master/README.md) - Garantiert eine atomare Ausführung deiner GitHub-Actions-Workflows.
- [Pfade filtern](https://github.com/dorny/paths-filter) - Führt Actions bedingt anhand der durch PRs, Feature-Branches oder gepushte Commits geänderten Dateien aus.
- [Minisauras](https://github.com/TeamTigers/minisauras) - Ruft alle JavaScript- und CSS-Dateien aus deinem Basis-Branch ab, minimiert sie und erstellt mit einem neuen Branch einen Pull Request.
- [Website in GIF umwandeln](https://github.com/PabloLec/website-to-gif) - Wandelt jede Webseite in ein GIF um, das du in deiner README, Dokumentation usw. anzeigen kannst.
- [Interaktive Eingaben – Workflow-Laufzeiteingaben](https://github.com/boasiHQ/interactive-inputs) - Fügt deinen GitHub-Actions-Workflows dynamische Eingaben zur Laufzeit hinzu.

#### Umgebungen

- [Eine envfile-Datei erstellen](https://github.com/SpicyPizza/create-envfile)
- [Globale Umgebungsvariablen für nachfolgende Build-Schritte exportieren](https://github.com/zweitag/github-actions)
- [Umgebungsvariablen programmatisch für nachfolgende Schritte festlegen](https://github.com/allenevans/set-env)
- [Conda-Umgebungen für Python installieren](https://github.com/goanpeca/setup-miniconda)
- [NativeScript einrichten](https://github.com/hrueger/setup-nativescript)
- [Eine JSON-Umgebungsdatei erstellen](https://github.com/schdck/create-env-json)

#### Abhängigkeiten

- [NPM-Abhängigkeiten mit Caching installieren](https://github.com/bahmutov/npm-install)
- [Neue NPM-Abhängigkeiten hervorheben](https://github.com/hiwelo/new-dependencies-action) - Kommentiert neu hinzugefügte NPM-Abhängigkeiten in Pull Requests.
- [NPM-Abhängigkeiten cachen](https://github.com/c-hive/gha-npm-cache)
- [Yarn-Abhängigkeiten cachen](https://github.com/c-hive/gha-yarn-cache)

#### Semantische Versionierung

- [Nächste SemVers](https://github.com/WyriHaximus/github-action-next-semvers) - Gibt anhand der angegebenen SemVer-Version die nächste Version für Major, Minor und Patch aus.
- [Neueste SemVer-Version und Branch-Namen anhand einer Suchzeichenfolge abrufen](https://github.com/jessicalostinspace/github-action-get-regex-branch)
- [Release-Branch erstellen](https://github.com/jessicalostinspace/cut-release-action) - Erstellt anhand eines Branch-Präfixes und einer optionalen semantischen Version einen Release-Branch.
- [Semantische Version erhöhen](https://github.com/christian-draeger/increment-semantic-version) - Erhöht eine angegebene semantische Version (SemVer) abhängig vom angegebenen Release-Typ.

### Statische Analyse

- [PHPStan-Action zur statischen Codeanalyse](https://github.com/OskarStark/phpstan-ga)
- [GraphQL-Inspector-Action](https://github.com/kamilkisiela/graphql-inspector)
- [PowerShell-Statikanalyse mit PSScriptAnalyzer](https://github.com/devblackops/github-action-psscriptanalyzer)
- [tfsec mit reviewdog-Ausgabe im PR ausführen](https://github.com/reviewdog/action-tfsec)

#### Tests

- [Tests mit Puppeteer, der Headless-Chrome-Node-API, ausführen](https://github.com/ianwalter/puppeteer)
- [xUnit-Slack-Reporter: Testzusammenfassungen aus xUnit-Berichten an einen Slack-Kanal senden](https://github.com/ivanklee86/xunit-slack-reporter)
- [Codeception-Tests ausführen](https://github.com/joelwmale/codeception-action)
- [TestCafe-Tests ausführen](https://github.com/DevExpress/testcafe-action)
- [Unity-Tests ausführen](https://github.com/webbertakken/unity-test-runner)
- [Cypress-E2E-Tests ausführen](https://github.com/cypress-io/github-action)
- [Ansible-Rollen mit Molecule testen](https://github.com/robertdebock/molecule-action)
- [Performancetests mit artillery.io ausführen](https://github.com/kenju/github-actions-artillery)
- [Flaky Tests mit BuildPulse erkennen](https://github.com/Workshop64/buildpulse-action)
- [Inline-Codeannotationen für Jest-Tests anzeigen](https://github.com/IgnusG/jest-report-action)
- [Julia-Tests ausführen](https://github.com/julia-actions/julia-runtest)

#### Linting

- [PHP-Coding-Standards-Fixer-Action](https://github.com/OskarStark/php-cs-fixer-ga)
- [Hadolint für eine Dockerfile in einem Repository ausführen](https://github.com/burdzwastaken/hadolint-action)
- [ESLint mit reviewdog-Ausgabe im PR ausführen](https://github.com/reviewdog/action-eslint)
- [JavaScript-basierter Linter für `*.workflow`-Dateien](https://github.com/OmarTawfik/github-actions-js)
- [Terraform-Dateien mit tflint und reviewdog-Ausgabe im PR linten](https://github.com/reviewdog/action-tflint)
- [autopep8: Python-Code automatisch gemäß dem PEP-8-Styleguide formatieren](https://github.com/peter-evans/autopep8)
- [`ergebnis/composer-normalize` ausführen, um ein normalisiertes `composer.json` im PHP-Projekt sicherzustellen](https://github.com/ergebnis/composer-normalize-action)
- [`stolt/lean-package-validator` ausführen, damit dein Paket nur erforderliche `runtime`-Artefakte enthält](https://github.com/raphaelstolt/lean-package-validator-action)
- [Go-Lint-Prüfungen bei PR-Ereignissen ausführen](https://github.com/ArangoGutierrez/GoLinty-Action)
- [Node.js – automatisch das vom Paket verwendete `format`- und/oder `lint`-Skript ausführen](https://github.com/MarvinJWendt/run-node-formatter)
- [Stylelinter – GitHub Action, die stylelint ausführt](https://github.com/exelban/stylelint)
- [stylelint mit reviewdog-Ausgabe im PR ausführen](https://github.com/reviewdog/action-stylelint)
- [PyCodeStyle Action – GitHub Action, die mit pycodestyle (autopep8) Feedback als Kommentar zu deinem PR hinterlässt](https://github.com/ankitvgupta/pycodestyle-action)
- [wemake-python-styleguide – der strengste und eigenwilligste Python-Linter überhaupt, optional mit reviewdog-Ausgabe im PR](https://github.com/wemake-services/wemake-python-styleguide)
- [TSLint mit Statusprüfungen und Dateidiff-Annotationen ausführen](https://github.com/mooyoul/tslint-actions)
- [Commits in Pull Requests mit commitlint linten](https://github.com/wagoid/commitlint-github-action)
- [vint mit reviewdog-Ausgabe im PR ausführen](https://github.com/reviewdog/action-vint)
- [mispell mit reviewdog-Ausgabe im PR ausführen](https://github.com/reviewdog/action-misspell)
- [golangci-lint mit reviewdog-Ausgabe im PR ausführen](https://github.com/reviewdog/action-golangci-lint)
- [shellcheck ausführen und reviewdog-Ausgabe im PR veröffentlichen](https://github.com/reviewdog/action-shellcheck)
- [Unempfindliche, rücksichtslose Formulierungen in deinen Markdown-Dokumenten erkennen](https://github.com/theashraf/alex-action)
- [dotenv-linter ausführen – lintet deine `.env`-Dateien, optional mit reviewdog-Ausgabe im PR](https://github.com/wemake-services/dotenv-linter)
- [dotenv-linter ausführen und reviewdog-Ausgabe im PR veröffentlichen](https://github.com/mgrachev/action-dotenv-linter)
- [Lint-Fehler für viele Programmiersprachen anzeigen und automatisch beheben](https://github.com/samuelmeuli/lint-action)
- [PHP_CodeSniffer mit Annotationen](https://github.com/chekalsky/phpcs-action)
- [Markdown-Linter (mit Presets)](https://github.com/avto-dev/markdown-lint)
- [Stylelint-Problem-Matcher zum Erstellen von Annotationen](https://github.com/xt0rted/stylelint-problem-matcher)
- [sqlcheck im PR ausführen, um Anti-Patterns in SQL-Abfragen zu erkennen](https://github.com/yokawasa/action-sqlcheck)
- [Fastlane-Supply-Metadaten anhand der Play-Store-Richtlinien validieren](https://github.com/ashutoshgngwr/validate-fastlane-supply-metadata)
- [Golint zum Linten deines Golang-Codes ausführen](https://github.com/Jerome1337/golint-action)

#### Sicherheit

- [Ein Schwachstellenscanner für deine Docker-Images](https://github.com/phonito/phonito-scanner-action)
- [Dependabot-Updates automatisch genehmigen und zusammenführen](https://github.com/ridedott/dependabot-auto-merge-action)
- [Den dlint-Sicherheitslinter für deinen Python-Code ausführen](https://github.com/xen0l/dlint-check)
- [AWS-Secrets-Manager-Actions](https://github.com/say8425/aws-secrets-manager-actions) - Definiert Secrets aus AWS Secrets Manager als Umgebungsvariablen.
- [AWS-IAM-Richtliniendokumente auf Korrektheit und Sicherheitsprobleme linten](https://github.com/xen0l/iam-lint)
- [Secret Spreader](https://github.com/webfactory/secret-spreader) - Keine Action im engeren Sinne, sondern ein Tool zur Verwaltung von Actions-Secrets über mehrere Repositories hinweg.
- [Secrets-Sync-Action](https://github.com/google/secrets-sync-action) - Synchronisiert Secrets über mehrere Repositories hinweg.
- [Snyk-Test-Action](https://github.com/snyk/actions)
- [Deine GitHub-Actions-Secrets mit einer einfachen CLI verwalten](https://github.com/unfor19/githubsecrets)
- [SecretHub](https://github.com/secrethub/actions) - Bietet eine zentrale Quelle der Wahrheit für deine Secrets und lädt sie bei Bedarf in GitHub Actions.

#### Codeabdeckung

- [Code mit SonarCloud scannen](https://github.com/sonarsource/sonarcloud-github-action)
- [Deine Codeabdeckung an codecov.io senden](https://github.com/codecov/codecov-action)
- [Codeabdeckung in CodeClimate veröffentlichen](https://github.com/paambaati/codeclimate-action)
- [Repository-Go-Report-Card aktualisieren](https://github.com/creekorful/goreportcard-action)

### Dynamische Analyse

- [Gofmt ausführen, um die Formatierung von Golang-Code zu prüfen](https://github.com/Jerome1337/gofmt-action)
- [Goimports ausführen, um die Reihenfolge der Golang-Imports zu prüfen](https://github.com/Jerome1337/goimports-action)

### Überwachung

- [Eine Webseite mit den Lighthouse-Tests von Google Chrome prüfen](https://github.com/jakejarvis/lighthouse-action)
- [Führt Lighthouse aus und veröffentlicht Ergebnisse in PRs und Slack](https://github.com/foo-software/lighthouse-check-action)
- [Lighthouse mit GitHub Actions in CI ausführen](https://github.com/treosh/lighthouse-ci-action)
- [Kontinuierliches Benchmarking und Benchmark-Visualisierung für Go](https://github.com/bobheadxi/gobenchdata)
- [Size-Limit-Action](https://github.com/andresz1/size-limit-action) - Kommentiert den Kostenvergleich deines JS in PRs und weist sie zurück, wenn das Limit überschritten wird.
- [bundlephobia prüfen](https://github.com/carlesnunez/check-my-bundlephobia) - Kommentiert die Größe neuer und geänderter Pakete gemäß der Website bundlephobia.io und weist PRs bei Überschreiten des Schwellenwerts zurück.

### Pull Requests

- [PR-Reviewer anhand der Zuständigen festlegen](https://github.com/pullreminders/assignee-to-reviewer-action)
- [PR bei Branch-Push öffnen oder aktualisieren (mit Branch-Auswahl)](https://github.com/vsoch/pull-request-action)
- [Einen PR automatisch rebasen](https://github.com/cirrus-actions/rebase)
- [PR labeln, sobald eine festgelegte Anzahl von Genehmigungen erreicht ist](https://github.com/pullreminders/label-when-approved-action)
- [Einem PR anhand passender Dateimuster Labels hinzufügen](https://github.com/banyan/auto-label)
- [PRs automatisch genehmigen](https://github.com/hmarr/auto-approve-action)
- [PRs anhand der Konfigurationsdatei automatisch Reviewer hinzufügen](https://github.com/kentaro-m/auto-assign-action)
- [Einem PR anhand von Branch-Namensmustern Labels hinzufügen](https://github.com/TimonVS/pr-labeler-action)
- [Einem PR anhand der Gesamtgröße des Diffs Labels hinzufügen](https://github.com/pascalgn/size-label-action)
- [Bereite PRs automatisch zusammenführen](https://github.com/pascalgn/automerge-action)
- [Prüfen, ob PRs einen Ticketverweis enthalten](https://github.com/vijaykramesh/pr-lint-action)
- [Einen PR für Änderungen im Actions-Arbeitsbereich deines Repositorys erstellen](https://github.com/peter-evans/create-pull-request)
- [Einen PR linten](https://github.com/seferov/pr-lint-action)
- [ChatOps für PRs](https://github.com/machine-learning-apps/actions-chatops)
- [Titel und Text eines PRs anhand des aus dem Branch-Namen extrahierten Texts voranstellen](https://github.com/tzkhan/pr-update-action)
- [Autosquash-Commits blockieren](https://github.com/xt0rted/block-autosquash-commits-action)
- [Beim Zusammenführen automatisch eine Version erhöhen und taggen](https://github.com/anothrNick/github-tag-action)
- [PRs mit veralteten Prüfungen automatisch aktualisieren und solche zusammenführen, die alle Branch-Schutzregeln erfüllen](https://github.com/tibdex/autosquash)
- [Merge Pal – PRs automatisch aktualisieren und zusammenführen](https://github.com/maxkomarychev/merge-pal-action)
- [Namenskonvention für Pull-Request-Titel durchsetzen](https://github.com/deepakputhraya/action-pr-title)
- [Benachrichtigung bei festhängendem Pull Request](https://github.com/jrylan/github-action-stuck-pr-notifier)
- [Pull-Request-Namen mit commitlint linten (ideal bei Squash-Merges!)](https://github.com/JulienKode/pull-request-name-linter-action)
- [PR-Zusammenführungen blockieren, wenn Prüfungen für Ziel-Branches fehlschlagen](https://github.com/cirrus-actions/branch-guard)
- [Von Pull Requests generierte Screenshots statischer Websites aktualisieren lassen](https://github.com/ssowonny/diff-pages-action)
- [Labels hinzufügen, wenn der Pull Request noch in Bearbeitung ist](https://github.com/AlbertHernandez/working-label-action)
- [Ticket-Check-Action](https://github.com/neofinancial/ticket-check-action) - Fügt automatisch eine Ticket- oder Issue-Nummer am Anfang aller Pull-Request-Titel hinzu.
- [Pull-Request-Linting mit Regex](https://github.com/MorrisonCole/pr-lint-action)
- [Pull-Request-Landminen](https://github.com/tylermurry/github-pr-landmine)
- [Einen GitHub-Pull-Request anhand eines Checkstyle-XML-Berichts annotieren](https://github.com/staabm/annotate-pull-request-from-checkstyle)
- [Pull-Request-Statistiken](https://github.com/flowwer-dev/pull-request-stats) - Gibt relevante Statistiken zu Reviewern aus.
- [Durchsetzung von Pull-Request-Beschreibungen](https://github.com/derkinderfietsen/pr-description-enforcer) - Erzwingt Beschreibungen für Pull Requests.

### GitHub Pages

- [Eine Zola-Website auf GitHub Pages bereitstellen](https://github.com/shalzz/zola-deploy-action)
- [Eine statische Hugo-Website erstellen und im gh-pages-Branch veröffentlichen](https://github.com/khanhicetea/gh-actions-hugo-deploy-gh-pages)
- [Eine Jekyll-Website mit benutzerdefinierten Jekyll-Plugins und Build-Skripten erstellen und im Gh-Pages-Branch bereitstellen](https://github.com/BryanSchuetz/jekyll-deploy-gh-pages)
- [Metadaten für die Google Dataset Search](https://www.github.com/openschemas/extractors/) - Sowie weitere schema.org-Extraktoren, damit Datensätze über GitHub Pages auffindbar werden.
- [GitHub Actions zur Bereitstellung mit Static-Site-Generatoren auf GitHub Pages](https://github.com/peaceiris/actions-gh-pages)
- [GitHub Action für Hexo](https://github.com/heowc/action-hexo)
- [Google-Analytics-Statistiken auf GitHub Pages bereitstellen](https://github.com/cristianpb/analytics-google)
- [Eine von GitHub Actions, Pages und Jekyll unterstützte Blogging-Plattform für Jupyter Notebooks](https://github.com/fastai/fastpages)
- [Eine statische Website auf GitHub Pages bereitstellen](https://github.com/appleboy/gh-pages-action) - Bereitstellung in einem benutzerdefinierten Verzeichnis mit Ignorieren von Ordnern/Dateien.
- [Mit erweiterten Einstellungen auf GitHub Pages bereitstellen](https://github.com/crazy-max/ghaction-github-pages)

### Benachrichtigungen und Nachrichten

- [Eine Discord-Benachrichtigung senden](https://github.com/Ilshidur/action-discord)
- [Eine Slack-Nachricht als Bot posten](https://github.com/pullreminders/slack-action)
- [Eine SMS von GitHub Actions mit Nexmo senden](https://github.com/nexmo-community/nexmo-sms-action)
- [Eine SMS von GitHub Actions mit Clockworksms senden](https://github.com/bharathvaj1995/clockwork-sms-action)
- [Eine Telegram-Nachricht senden](https://github.com/appleboy/telegram-action)
- [Eine Datei oder Textnachricht an Discord senden (Farbe, Benutzername und Avatar benutzerdefiniert festlegen)](https://github.com/appleboy/discord-action)
- [Gemeinsam per Pull Request an Tweets arbeiten](https://github.com/gr2m/twitter-together)
- [Eine Push-Benachrichtigung über Push by Techulus senden](https://github.com/techulus/push-github-action)
- [E-Mail mit SendGrid senden](https://github.com/peter-evans/sendgrid-action)
- [Eine Push-Benachrichtigung über Join senden](https://github.com/ShaunLWM/action-join)
- [Neue Paketversion für npm prüfen](https://github.com/MeilCli/npm-update-check-action)
- [Neue Paketversion für NuGet prüfen](https://github.com/MeilCli/nuget-update-check-action)
- [Neue Paketversion für Gradle prüfen](https://github.com/MeilCli/gradle-update-check-action)
- [Eine Push-Benachrichtigung über Pushbullet senden](https://github.com/ShaunLWM/action-pushbullet)
- [Mit Microsoft Graph ein Outlook-Kalenderereignis erstellen](https://github.com/anoopt/ms-graph-create-event)
- [Änderungen an GitHub-Wiki-Seiten beobachten und in Slack posten](https://github.com/benmatselby/gollum-page-watcher-action)
- [Eine SMS mit MessageBird senden](https://github.com/nikitasavinov/messagebird-sms-action)
- [Auf veraltete Bots antworten](https://github.com/c-hive/fresh-bot)
- [Eine Discord-Einbettungsnachricht senden](https://github.com/sarisia/actions-status-discord)
- [Deine PRs mit Teamwork-Aufgaben synchron halten](https://github.com/Teamwork/github-sync)
- [Microsoft-Teams-Benachrichtigung senden](https://github.com/opsless/ms-teams-github-actions)

### Bereitstellung

- [Auf Netlify bereitstellen](https://github.com/netlify/actions)
- [Eine Probot-App mit Actions bereitstellen](https://probot.github.io/docs/deployment/#github-actions)
- [Eine Playlist auf Spotify bereitstellen](https://github.com/swinton/SpotHub)
- [VS-Code-Erweiterungen mit vsce bereitstellen](https://github.com/lannonbr/vsce-action)
- [Cloudflare-Cache nach der Aktualisierung einer Website leeren](https://github.com/jakejarvis/cloudflare-purge-action)
- [Deine DNS-Konfiguration mit DNS Control bereitstellen](https://github.com/koenrh/dnscontrol-action)
- [Ein Theme auf Shopify bereitstellen](https://github.com/pgrimaud/action-shopify)
- [Mehrere GitLab-CI-Pipelines auslösen](https://github.com/appleboy/gitlab-ci-action)
- [Mehrere Jenkins-Jobs auslösen](https://github.com/appleboy/jenkins-action)
- [GitHub Action für Homebrew Tap](https://github.com/izumin5210/action-homebrew-tap)
- [Dateien und Artefakte per SSH kopieren](https://github.com/appleboy/scp-action)
- [Remote-SSH-Befehle ausführen](https://github.com/appleboy/ssh-action)
- [Ein Python-Distributionspaket auf PyPI veröffentlichen](https://github.com/pypa/gh-action-pypi-publish)
- [Eine statische Website auf Azure Storage bereitstellen](https://github.com/feeloor/azure-static-website-deploy)
- [Plattformübergreifende Chocolatey-CLI zum Erstellen und Veröffentlichen von Paketen](https://github.com/crazy-max/ghaction-chocolatey)
- [Eine iOS-Pod-Bibliothek auf CocoaPods bereitstellen](https://github.com/michaelhenry/deploy-to-cocoapods-github-action)
- [GitHub Action für TencentCloud Serverless](https://github.com/Juliiii/action-scf)
- [npm-(Pre-)Releases veröffentlichen](https://github.com/epeli/npm-release/)
- [Eine statische Website auf Surge.sh bereitstellen](https://github.com/yavisht/deploy-via-surge.sh-github-action-template)
- [GitHub Action für GoReleaser, ein Release-Automatisierungstool für Go-Projekte](https://github.com/goreleaser/goreleaser-action)
- [FTP-Deploy-Action: Stellt ein GitHub-Projekt mit GitHub Actions auf einem FTP-Server bereit](https://github.com/SamKirkland/FTP-Deploy-Action)
- [Einen Artikel auf Dev.to veröffentlichen](https://github.com/tylerauerbeck/publish-to-dev.to-action)
- [Action für Semantic Release](https://github.com/cycjimmy/semantic-release-action)
- [Eine Collection auf Ansible Galaxy bereitstellen](https://github.com/artis3n/ansible_galaxy_collection)
- [Ein Modul auf Puppet Forge veröffentlichen](https://github.com/barnumbirr/action-forge-publish)
- [Electron-Apps erstellen und veröffentlichen](https://github.com/samuelmeuli/action-electron-builder)
- [Ein Maven-Paket veröffentlichen](https://github.com/samuelmeuli/action-maven-publish)
- [Ein Theme für Ghost CMS erstellen und bereitstellen](https://github.com/TryGhost/action-deploy-theme)
- [Eine Ansible-Rolle auf Ansible Galaxy bereitstellen](https://github.com/robertdebock/galaxy-action)
- [Ein oder mehrere JS-Module in einer Registry veröffentlichen](https://github.com/author/action-publish)
- [Ein Paket mit 2FA über Slack veröffentlichen](https://github.com/erezrokah/2fa-with-slack-action)
- [Workflow-Läufe in Continuous-Deployment-Pipelines serialisieren](https://github.com/softprops/turnstyle)
- [Netlify-Deploy-GitHub-Action für jeden Commit](https://github.com/nwtgck/actions-netlify)
- [Ansible-Playbooks ausführen](https://github.com/arillso/action.playbook)
- [Ein Python-Distributionspaket auf Anaconda Cloud veröffentlichen](https://github.com/fcakyon/conda-publish-action)
- [Eine VS-Code-Erweiterung auf dem Visual Studio Marketplace oder in der Open-VSX-Registry bereitstellen](https://github.com/HaaLeo/publish-vscode-extension)
- [Ein YouTube-Video als Podcast auf Anchor.fm bereitstellen](https://github.com/Schrodinger-Hat/youtube-to-anchorfm)
- [Mit AWS CodeDeploy bereitstellen](https://github.com/webfactory/create-aws-codedeploy-deployment)

#### Docker

- [Eine Docker-Hub-Repository-Beschreibung aus README.md aktualisieren](https://github.com/peter-evans/dockerhub-description)
- [Docker-Images in der GitHub-Package-Registry (GPR) veröffentlichen](https://github.com/machine-learning-apps/gpr-docker-publish)
- [Die „Full description“ eines Repositorys auf Docker Hub aktualisieren](https://github.com/mpepping/github-actions/tree/master/docker-hub-metadata)
- [Docker-Images mit Kaniko erstellen und in beliebiger Registry veröffentlichen](https://github.com/outillage/kaniko-action)
- [Größe deines Docker-Images überwachen und begrenzen](https://github.com/wemake-services/docker-image-size-limit)
- [Docker-Images in der Amazon Elastic Container Registry (ECR) veröffentlichen](https://github.com/appleboy/docker-ecr-action)
- [Docker-Images erstellen und übertragen, wobei jede Stufe zur Verkürzung der Build-Zeit zwischengespeichert wird](https://github.com/whoan/docker-build-with-cache-action)
- [Docker Buildx einrichten](https://github.com/crazy-max/ghaction-docker-buildx)
- [Branch- oder Tag-Namen in Docker-kompatible Image-Tags umwandeln](https://github.com/ankitvgupta/ref-to-tag-action/)
- [Beschreibung eines Container-Repositorys aus README.md aktualisieren](https://github.com/marketplace/actions/update-container-description-action) - Unterstützte Registries: Docker Hub, Quay, Harbor.

#### Kubernetes

- [Mit Pulumi in beliebigen Clouds oder auf Kubernetes bereitstellen](https://github.com/pulumi/actions)
- [Mit kubectl auf Kubernetes bereitstellen](https://github.com/steebchen/kubectl)
- [Kubeconfig-Datei von Google Kubernetes Engine (GKE) abrufen](https://github.com/machine-learning-apps/gke-kubeconfig)
- [Kubernetes-Konfigurations-YAMLs mit Kustomize bearbeiten](https://github.com/karancode/kustomize-github-action)
- [Mit Krucible einen Kubernetes-Cluster zum Testen erstellen](https://github.com/Krucible/krucible-github-action)

#### AWS

- [Ein Verzeichnis mit einem AWS-S3-Bucket synchronisieren/hochladen](https://github.com/jakejarvis/s3-sync-action)
- [Lambda-Code in einer vorhandenen Funktion bereitstellen](https://github.com/appleboy/lambda-action)

#### Terraform

- [Terraform-Dokumentation generieren](https://github.com/Dirrk/terraform-docs) - Verwendet terraform-docs, um Dokumentation für Terraform-Module zu generieren.
- [Beispiel für die Verwendung von Terraform zur Validierung und Anwendung der GitHub-Administration](https://github.com/asgharlabs/github-terraform/tree/master/.github/workflows)

### Externe Dienste

- [Eine Jenkinsfile verwenden](https://github.com/jonico/jenkinsfile-runner-github-actions)
- [GitHub Action für Firebase](https://github.com/w9jds/firebase-action)
- [GitHub Action für die Contentful-Migration-CLI](https://github.com/Shy/contentful-action)
- [GitHub Actions für Pixela (a-know/pi)](https://github.com/peaceiris/actions-pixela)
- [GitHub Action für Google Cloud Platform (GCP)](https://github.com/exelban/gcloud)
- [Dateien bei einem beliebigen OpenStack-Swift-Dienstanbieter hochladen](https://github.com/iksaku/openstack-swift-action)
- [GitHub Action zum Senden von Stack-Overflow-Beiträgen an Slack](https://github.com/logankilpatrick/StackOverflowBot)
- [AWS-Rolle annehmen](https://github.com/nordcloud/aws-assume-role/)
- [Eine benutzerdefinierte Antwort mit JSONbin generieren](https://github.com/fabasoad/jsonbin-action)

### Frontend-Tools

- [Gradle-Task ausführen](https://github.com/MrRamych/gradle-actions)
- [JS-Build-Actions](https://github.com/elstudio/actions-js-build) - Grunt- oder Gulp-Build-Tasks ausführen und Dateiänderungen committen.
- [GitHub Action für die Gatsby-CLI](https://github.com/jzweifel/gatsby-cli-github-action)
- [WebPageTest-Prüfung ausführen und Ergebnisse als Commit-Kommentar ausgeben](https://github.com/JCofman/webPagetestAction)
- [GitHub Actions für Hugo Extended](https://github.com/peaceiris/actions-hugo)
- [OG-Bild generieren](https://github.com/BoyWithSilverWings/generate-og-image) - Anpassbare Open-Graph-Bilder aus Markdown-Dateien generieren.
- [GitHub Actions für mdBook](https://github.com/peaceiris/actions-mdbook)
- [Mint einrichten](https://github.com/fabasoad/setup-mint-action) - Mint einrichten (Programmiersprache zur Erstellung von Single-Page-Anwendungen).
- [Gatsby-Bereitstellung auf AWS S3](https://github.com/jonelantha/gatsby-s3-action) - Gatsby auf S3 bereitstellen (unterstützt CloudFront).

### Machine-Learning-Betrieb

- [Argo-Workflows übermitteln (cloudunabhängig)](https://github.com/machine-learning-apps/actions-argo)
- [Argo-Workflows an GKE übermitteln](https://github.com/machine-learning-apps/gke-argo)
- [Experiment-Tracking-Ergebnisse von Weights & Biases abfragen](https://github.com/machine-learning-apps/wandb-action)
- [Parametrisierte Jupyter Notebooks ausführen](https://github.com/yaananth/run-notebook)
- [Kubeflow-Pipeline kompilieren, bereitstellen und ausführen](https://github.com/NikeNano/kubeflow-github-action)
- [Ein Data-Science-Repository automatisch als Jupyter-Server in Docker-Container verpacken](https://github.com/jupyterhub/repo2docker-action)
- [Azure Machine Learning mit GitHub Actions](https://github.com/machine-learning-apps/ml-template-azure)

### Erstellen

- [run-cmake](https://github.com/lukka/run-cmake) - Plattformübergreifende Action zum Erstellen von C/C++-Software mit [CMake](https://cmake.org) und [Ninja](https://ninja-build.org/).
- [run-vcpkg](https://github.com/lukka/run-vcpkg) - Plattformübergreifende Action zum Erstellen und Installieren von C/C++-Abhängigkeiten mit [vcpkg](https://github.com/microsoft/vcpkg).
- [Go-Anwendungen plattformübergreifend erstellen](https://github.com/izumin5210/action-go-crossbuild)
- [`~/.m2/settings.xml` für Maven-Builds generieren](https://github.com/whelk-io/maven-settings-xml-action)
- [Pascal-Skript ausführen](https://github.com/fabasoad/pascal-action)
- [Brainfuck einrichten](https://github.com/fabasoad/setup-brainfuck-action) - Einen Brainfuck-Interpreter einrichten.
- [Go-Binärdateien als GitHub-Release-Assets veröffentlichen](https://github.com/wangyoucao577/go-release-action)
- [COBOL einrichten](https://github.com/fabasoad/setup-cobol-action)
- [Gradle-Version prüfen](https://github.com/madhead/check-gradle-version) - Halte deine Gradle-Version auf dem neuesten Stand.

### Datenbank

- [Cassandra-Schema einrichten](https://github.com/fabasoad/setup-cassandra-action) - Führt Skripte aus dem bereitgestellten Ordner auf einem Cassandra-Cluster aus.

### Netzwerk

- [ZeroTier einrichten](https://github.com/zerotier/github-action) - Verbindet deinen Runner mit einem ZeroTier-Netzwerk.

### Lokalisierung

- [Tippfehler und Grammatikfehler im Code finden und automatisch beheben](https://github.com/sobolevn/misspell-fixer-action)
- [Übersetzung](https://github.com/fabasoad/translation-action) - Übersetzt Text aus jeder Sprache in jede andere Sprache.

### Spaß

- [Eine Like-Schaltfläche in deiner README ergänzen](https://github.com/ariary/Readme-Like-Button) - Visualisiert die Zustimmung der Community zu einem Teil deiner README (kann als Umfrage verwendet werden).

### Spickzettel

- [Spickzettel zum Branding von GitHub Actions](https://haya14busa.github.io/github-action-brandings/)

## Anleitungen

- [Kontinuierliche Bereitstellung einer Next.js-App mit Up](https://medium.com/@romanenko/simple-ci-for-next-js-projects-with-apex-up-github-actions-6f0b1b9a5400)
- [Docker-basierte Actions in JavaScript/TypeScript umwandeln](https://httgp.com/converting-github-actions-from-docker-to-javascript/)
- [GitHub-Actions-CI für Swift-/iOS-Projekte](https://medium.com/rosberryapps/github-actions-ci-for-swift-projects-c129baceed1a)
- [Mit GitHub Actions arbeiten](https://jeffrafter.com/working-with-github-actions)
- [GitHub Actions für Rails-Entwickler](https://www.youtube.com/watch?v=gGUXydw22zw)
- [GitHub-Actions-Adventskalender](https://www.edwardthomson.com/blog/github_actions_advent_calendar.html)
- [Laravel ohne Ausfallzeiten mit GitHub Actions bereitstellen](https://atymic.dev/blog/github-actions-laravel-ci-cd/)
- [Pluralsight-Kurs zum Erstellen benutzerdefinierter GitHub Actions](https://www.pluralsight.com/courses/building-custom-github-actions/)
- [Django mit Docker und GitHub Actions kontinuierlich auf DigitalOcean bereitstellen](https://testdriven.io/blog/deploying-django-to-digitalocean-with-docker-and-github-actions/)
- [Selbst gehostete GitHub-Actions-Runner mit Docker bereitstellen](https://testdriven.io/blog/github-actions-docker/) - Stellt selbst gehostete GitHub-Actions-Runner mit Docker und Docker Swarm auf DigitalOcean bereit.
- [Automatisch skalierte, selbst gehostete GitHub-Actions-Runner auf AWS-Spot-Instances einrichten](https://040code.github.io/2020/05/25/scaling-selfhosted-action-runners)
- [GitHub Actions im Überblick](https://gist.github.com/br3ndonland/f9c753eb27381f97336aa21b8d932be6)

> Zögere nicht, einen PR mit weiteren Ressourcen beizusteuern. Weitere Informationen findest du unter [contributing.md](contributing.md).
