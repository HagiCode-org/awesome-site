# Fantastische Django [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> Eine kuratierte liste von tollen dingen im zusammenhang mit django. gepflegt durch [Will Vincent](https://github.com/wsvincent) und [Jeff Triplett](https://github.com/jefftriplett).

<br>

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/django-logo-negative.svg">
  <img alt="Dark and Light mode version of the Django logo" src="./assets/django-logo-positive.svg">
</picture>
</div>

<br>

Bitte erwägen Sie, Django zu unterstützen, indem Sie eine Spende an die <a rel="sponsored" href="https://www.djangoproject.com/fundraising/">Django Software Foundation</a>,
Sponsoring über <a rel="sponsored" href="https://github.com/sponsors/django">GitHub Sponsoren</a>,
oder Kauf <a rel="sponsored" href="https://django.threadless.com/">offizielle Waren</a>.

## Inhalt

<!--lint disable awesome-toc-->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Drittpakete](#third-party-packages)
  - [Admin](#admin)
  - [Admin-Themen](#admin-themes)
  - [APIs](#apis)
  - [Async](#async)
  - [Caching](#caching)
  - [Befehle](#commands)
  - [Konfiguration](#configuration)
  - [Content Management Systeme](#content-management-systems)
  - [Datenbankverbinder](#database-connectors)
  - [Abhängigkeitseinspritzung](#dependency-injection)
  - [E-Commerce](#ecommerce)
  - [Herausgeber](#editors)
  - [Dateien/Bilder](#filesimages)
  - [Formblätter](#forms)
  - [Full-Stack Frameworks](#full-stack-frameworks)
  - [Generalgeneral](#general)
  - [Internationalisierung (i18n)](#internationalisation-i18n)
  - [Protokollierung](#logging)
  - [Überwachung](#monitoring)
  - [Versand](#mailing)
  - [Modellfelder](#model-fields)
  - [Modelle](#models)
  - [Leistung](#performance)
  - [Genehmigungen](#permissions)
  - [Suche](#search)
  - [Suchmaschinenoptimierung](#search-engine-optimisation)
  - [Sicherheit](#security)
  - [Statische Vermögenswerte](#static-assets)
  - [Aufgabenwarteschlangen](#task-queues)
  - [Meldebögen](#templates)
  - [Prüfung](#testing)
  - [URLs](#urls)
  - [Nutzer](#users)
  - [Ansichten](#views)
- [Entwickler-Tools](#developer-tools)
  - [Meldebögen](#templates-1)
  - [Statische Analyse](#static-analysis)
- [Python-Pakete](#python-packages)
- [Ressourcen](#resources)
  - [Offizielle Mittel](#official-resources)
  - [Bildungswesen](#educational)
  - [Gemeinschaft](#community)
  - [Konferenzen](#conferences)
  - [Job Boards](#job-boards)
  - [Newsletter](#newsletters)
  - [Podcasts](#podcasts)
  - [Videos](#videos)
  - [Bücher](#books)
- [Hosting](#hosting)
  - [PaaS (Platforms-as-a-Service)](#paas-platforms-as-a-service)
  - [IaaS (Infrastructure-as-a-Service)](#iaas-infrastructure-as-a-service)
  - [Bereitstellungsdienste](#deployment-services)
  - [Self-Hosted Deployment](#self-hosted-deployment)
- [Projekte](#projects)
  - [Boilerplate](#boilerplate)
  - [Open Source Projekte](#open-source-projects)
- [Django REST Rahmen](#django-rest-framework)
  - [DRF Ressourcen](#drf-resources)
  - [DRF Tutorials](#drf-tutorials)
- [Wadenschwanz](#wagtail)
  - [Wagtail Ressourcen](#wagtail-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!--lint enable awesome-toc-->

## Drittpakete

_Für eine vollständige Auflistung aller verfügbaren Pakete, siehe [Django Packages](https://djangopackages.org/)_

### Admin
- [django-hijack](https://github.com/django-hijack/django-hijack) - Administratoren können sich anmelden und im Namen anderer Benutzer arbeiten, ohne ihre Anmeldeinformationen kennen zu müssen.
- [django-import-export](https://github.com/django-import-export/django-import-export) - Django-Anwendung und Bibliothek zum Importieren und Exportieren von Daten mit Admin-Integration.
- [django-admin-inline-paginator-plus](https://github.com/DmytroLitvinov/django-admin-inline-paginator-plus) - Eine einfache Möglichkeit, Ihre Inline im Django-Admin zu paginieren
- [django-loginas](https://github.com/skorokithakis/django-loginas) - "Anmelden als Benutzer" für den Django-Admin.
- [impostor](https://github.com/avallbona/Impostor) - Impostor ist eine Django-Anwendung, mit der sich Mitarbeiter mit ihrem eigenen Benutzernamen und Passwort als anderer Benutzer anmelden können.
- [django-impersonate](https://pypi.org/project/django-impersonate/) - Erlauben Sie Superusern, andere Nicht-Superuser-Konten zu "verkörpern".
- [django-admin-env-notice](https://github.com/dizballanze/django-admin-env-notice) - Visuell unterscheiden Umgebungen in Django Admin, zum Beispiel: `development`, `staging`, `production`.
- [django-related-admin](https://github.com/PetrDlouhy/django-related-admin) - Eine Helferbibliothek, mit der Sie eine Liste schreiben können_Displays über ausländische Schlüsselbeziehungen hinweg.
- [django-admin-sortable2](https://github.com/jrief/django-admin-sortable2) - Generische Drag-and-Drop-Ordering für Objekte in der Django-Admin-Schnittstelle.
- [django-admin-collaborator](https://github.com/brktrlw/django-admin-collaborator) - Fügen Sie Echtzeit-Benutzerpräsenz hinzu, bearbeiten Sie Sperren und chatten Sie mit Channels und Redis zum Django-Administrator.
- [dj-control-room](https://github.com/django-control-room/dj-control-room) - Erstellen Sie eine Steuerungsebene mit einer Reihe von Betriebstools im Django-Admin (Redis, Cache, Sellerie, URLs und mehr).
- [django-admin-mcp](https://github.com/7tg/django-admin-mcp) - Expose admin-registrierte Modelle an MCP-Clients (KI-Assistenten wie Claude): CRUD, Admin-Aktionen und Historie durch Ihre ModelAdmin-Klassen, begrenzt durch Django-Berechtigungen.

### Admin-Themen
- [django-grappelli](https://github.com/sehmaschine/django-grappelli) - Ein jazziger Skin für den Admin.
- [django-jazzmin](https://github.com/farridav/django-jazzmin) - Drop-in-Theme für Django-Admin, das AdminLTE 3 & Bootstrap 4 verwendet, um Ihren Admin jazzig aussehen zu lassen.
- [django-admin-interface](https://github.com/fabiocaccamo/django-admin-interface) - Passen Sie Admin durch den Admin selbst an (Farbe, Header). title,logo) und Popup-Fenster durch Modals ersetzt.
- [django-semantic-admin](https://github.com/globophobe/django-semantic-admin) - Django Semantic UI Admin Thema.
- [django-jet-reboot](https://github.com/assem-ch/django-jet-reboot) - Django Jet ist eine moderne Vorlage für die Django-Admin-Schnittstelle mit verbesserter Funktionalität.
- [django-baton](https://github.com/otto-torino/django-baton) - Eine coole, moderne und responsive Django-Admin-Anwendung basierend auf Bootstrap 5.
- [django-unfold](https://github.com/unfoldadmin/django-unfold) - Modernes Django-Admin-Theme für nahtlose Schnittstellenentwicklung.
- [django-daisy](https://github.com/hypy13/django-daisy) - Ein modernes Django-Dashboard, das vollständig reaktionsschnell mit Daisyui ausgestattet ist.
- [django-smartbase-admin](https://github.com/SmartBase-SK/django-smartbase-admin) - Django SmartBase Admin 🚀 performance-tuned 👥 Endbenutzer bereit schönes Admin-Panel

### APIs
<!--lint disable double-link-->
- [django-rest-framework](https://github.com/encode/django-rest-framework) - Web APIs für Django.
- [django-cors-headers](https://github.com/adamchainz/django-cors-headers) - Wenn sich Ihr Backend und Ihr Frontend auf verschiedenen Servern befinden, benötigen Sie dies.
- [dj-rest-auth](https://github.com/iMerica/dj-rest-auth) - Authentifizierung für Django Rest Framework.
- [django-rest-knox](https://github.com/jazzband/django-rest-knox) - Authentifizierungsmodul für django-rest-auth.
- [djoser](https://github.com/sunscrapers/djoser) - REST Umsetzung von Django auth.
- [djaq](https://github.com/paul-wolf/djaq) - Eine sofortige Remote-API zu Django-Modellen mit einer leistungsstarken Abfragesprache.
- [django-rest-framework-simplejwt](https://github.com/jazzband/djangorestframework-simplejwt) - JSON Webtoken für DRF.
- [django-webpack-loader](https://github.com/django-webpack/django-webpack-loader) - Verwenden Sie Webpack transparent mit Django.
- [drf-yasg](https://github.com/axnsan12/drf-yasg) - Automatisierte Generierung von echten Swagger/OpenAPI 2.0 Schemata aus dem Django REST Framework Code.
- [graphene-django](https://github.com/graphql-python/graphene-django) - GraphQL für Django.
- [graphene-django-filter](https://github.com/devind-team/graphene-django-filter) - Erweiterte Filter implementieren und / oder nicht Operatoren in GraphQL für Django.
- [django-modern-rest](https://github.com/wemake-services/django-modern-rest) - Moderne REST mit Geschwindigkeit, Typen, async, `msgspec`, `pydantic` Und andere Goodies!
- [django-ninja](https://django-ninja.rest-framework.com/) - Django Ninja - Schnelles Django REST Framework basierend auf Typ-Annotationen.
- [django-tastypie](https://github.com/django-tastypie/django-tastypie) - Erstellen von köstlichen APIs für Django-Apps seit 2010.
- [drf-spectacular](https://github.com/tfranzel/drf-spectacular) - Sane und flexible OpenAPI 3-Schema-Generierung für Django REST Framework.
- [django-webhook](https://github.com/danihodovic/django-webhook) - Eine Plug-and-Play-Django-App zum Senden ausgehender Webhooks bei Modelländerungen.
- [strawberry-django](https://github.com/strawberry-graphql/strawberry-django) - Django-Integration mit Strawberry, einer GraphQL-Bibliothek für moderne Entwicklung
<!--lint enable double-link-->

### Async
- [channels](https://github.com/django/channels/) - Async-Unterstützung für Django.

### Caching
- [django-cachalot](https://github.com/noripyt/django-cachalot) - Caches Ihre Django ORM-Abfragen und entwertet sie automatisch.
- [django-cacheops](https://github.com/Suor/django-cacheops) - Ein glatter ORM-Cache mit automatischer granularer ereignisgesteuerter Invalidierung.

### Befehle
- [django-extensions](https://github.com/django-extensions/django-extensions/) - Erweiterungen des Zollmanagements, insbesondere `runserver_plus` und `shell_plus`.
- [django-click](https://github.com/django-commons/django-click) - Schreiben Sie Django-Verwaltungsbefehle mit dem [click CLI library](https://click.palletsprojects.com).
- [django-dbbackup](https://github.com/Archmonger/django-dbbackup) - Management-Befehle zum Sichern und Wiederherstellen Ihrer Projektdatenbank und Mediendateien.
- [django-liquidb](https://github.com/Gusakovskiy/django-liquidb) - Django-Anwendung zur Vereinfachung des Migrationsmanagements und Änderungen der Zustände des DB-Schemas.
- [django-migration-zero](https://github.com/ambient-innovation/django-migration-zero/) - Ganzheitliche Implementierung des "Migration Zero"-Musters für Django, das lokale Änderungen und In-Produktionsdatenbankanpassungen abdeckt.
- [django-typer](https://github.com/django-commons/django-typer) - Schreiben Sie Django-Verwaltungsbefehle mit dem [Typer CLI library](https://typer.tiangolo.com).

### Konfiguration
<!--lint disable double-link-->
- [confidential](https://github.com/candidco/confidential) - Verwalten Sie Konfigurationen und Geheimnisse (mit CLI-Unterstützung).
- [django-environ](https://github.com/joke2k/django-environ) - Umweltvariablen.
- [django-split-settings](https://github.com/wemake-services/django-split-settings) - Organisieren Sie mehrere Einstellungen Dateien.
- [django-constance](https://github.com/jazzband/django-constance) - Eine Django-App zum Speichern dynamischer Einstellungen in steckbaren Backends (Redis und Django-Modell-Backend eingebaut) mit einer Integration in die Django-Admin-App.
- [django-configurations](https://github.com/jazzband/django-configurations) - erleichtert die Django-Projektkonfiguration, indem sie sich auf die Zusammensetzbarkeit von Python-Klassen und die Einhaltung der Prinzipien von [the twelve-factor app](https://12factor.net/config).
- [dynaconf](https://www.dynaconf.com/django/) - Dynaconf lädt django-einstellungen aus mehreren quellen (mehrere dateiformate, env vars, redis, vault, etcd), verwaltet geheimnisse und ermöglicht verschiedene zusammenführungsstrategien. [the twelve-factor app](https://12factor.net/config).
- [django-extra-settings](https://github.com/fabiocaccamo/django-extra-settings) - Konfigurieren und verwalten Sie eingegebene zusätzliche Einstellungen nur mit dem Django-Administrator.
- [django-removals](https://github.com/ambient-innovation/django-removals/) - Detektieren veralteter Einstellvariablen über bequeme Systemprüfungen
- [environs](https://github.com/sloria/environs) - Vereinfachtes Paring von Umgebungsvariablen, das mit einer [Django helper](https://github.com/sloria/environs#usage-with-django) Das installiert zusätzliche Pakete.
<!--lint enable double-link-->
- [django-classy-settings](https://github.com/funkybob/django-classy-settings) - Klassenbasierte Einstellungen, um Ihre Umgebungen in Ordnung zu halten, mit einfachem Zugriff auf typisierte Umgebungsvariablen.
- [django-content-settings](https://github.com/occipital/django-content-settings) - Erstellen und Verwalten von editierbaren typisierten Variablen direkt aus dem Django-Admin-Panel.

### Content Management Systeme
<!--lint disable double-link-->
- [wagtail](https://github.com/wagtail/wagtail) - Beliebtes Django Content Management System (CMS). Siehe [awesome-wagtail](https://github.com/wagtail/awesome-wagtail) auch.
- [mezzanine](https://github.com/stephenmcd/mezzanine) - CMS-Rahmen.
- [django-cms](https://github.com/django-cms/django-cms) - CMS für Django.
- [feincms](https://github.com/feincms/feincms) - Ein erweiterbares Django-basiertes CMS.
- [puput](https://github.com/APSL/puput) - Blog-App-Funktionen mit Wagtail.
<!--lint enable double-link-->

### Datenbankverbinder
- [djongo](https://github.com/doableware/djongo) - Django und MongoDB Datenbank Connector.

### Abhängigkeitseinspritzung
- [Wireup](https://github.com/maldoinc/wireup) - Dependency Injection für Django

### E-Commerce
- [saleor](https://github.com/saleor/saleor) - GraphQL-basierte Django E-Commerce-Plattform.
- [django-oscar](https://github.com/django-oscar/django-oscar) - Domaingesteuerter E-Commerce für Django.

### Herausgeber
<!--lint ignore awesome-list-item-->
- [django-markdownx](https://github.com/neutronX/django-markdownx) - Umfassendes Markdown-Plugin für Django.
- [django-markdown-editor](https://github.com/agusmakmun/django-markdown-editor) - Awesome Django Markdown Editor, unterstützt für Bootstrap & Semantic-UI.
- [django-business-logic](https://github.com/dgk/django-business-logic) - Visual DSL Framework für Django.
- [django-summernote](https://github.com/lqez/django-summernote) - Summernote ist ein einfacher WYSIWYG-Editor.
- [django-tinymce](https://github.com/jazzband/django-tinymce) - TinyMCE Integration für Django.
- [django-prose](https://github.com/withlogicco/django-prose) - Ein leichter Editor für die Erstellung von Inhalten.
- [django-ace](https://github.com/django-ace/django-ace) - ACE Integration für Django.

### Dateien/Bilder
- [django-cleanup](https://github.com/un1t/django-cleanup) - Null-Konfigurationsdatei/Bildentfernung für lokale und entfernte Dateien.
- [django-imagekit](https://github.com/matthewwithanm/django-imagekit) - Django App für die Verarbeitung von Bildern für Thumbnail, Schwarz-Weiß und Größen.
- [django-pictures](https://github.com/codingjoe/django-pictures) - Responsive Cross-Browser-Bildbibliothek mit modernen Codes wie AVIF & WebP.
- [sorl-thumbnail](https://github.com/jazzband/sorl-thumbnail) - Thumbnails für Django.

### Formblätter
- [django-crispy-forms](https://github.com/django-crispy-forms/django-crispy-forms/) - DRY Django Formen.
- [django-floppyforms](https://github.com/jazzband/django-floppyforms) - Volle Kontrolle über Form Rendering.
- [django-formtools](https://github.com/jazzband/django-formtools) - Für frühere und mehrstufige Formulare, die zuvor Teil von Django bis 1.8 waren.
- [django-widget-tweaks](https://github.com/jazzband/django-widget-tweaks) - Tweak Form Field Rendering in Templates.
- [django-autocomplete-light](https://github.com/yourlabs/django-autocomplete-light) - Fügen Sie Autovervollständigung zu Formularen hinzu.

### Full-Stack Frameworks
- [Django LiveView](https://github.com/Django-LiveView/liveview) - Framework zum Erstellen dynamischer, reaktiver Schnittstellen serverseitig mit Django-Vorlagen. Echtzeit-Updates über WebSocket mit dekoratorbasierten Handlern.
- [Django-Bridge](https://github.com/kaedroho/django-bridge) - Die einfache Möglichkeit, React-Frontends für Django-Anwendungen zu erstellen.
- [ReactPy](https://github.com/reactive-python/reactpy) - Es ist React, aber in Python. Setzen Sie dynamisch gerenderte Python in Django-Vorlagen ein [ReactPy-Django module](https://github.com/reactive-python/reactpy-django).
- [Reactor](https://github.com/edelvalle/reactor/) - Phoenix LiveView, aber für Django.
- [Sockpuppet](https://sockpuppet.argpar.se/) - Erstellen Sie reaktive Anwendungen mit dem Django-Tooling, das Sie bereits kennen und lieben.
- [Unicorn](https://www.django-unicorn.com/) - Ein reaktives Komponenten-Framework, das eine normale Django-Ansicht schrittweise verbessert, AJAX-Aufrufe im Hintergrund durchführt und das DOM dynamisch aktualisiert.

### Generalgeneral
- [django-data-browser](https://github.com/tolomea/django-data-browser) - Interaktiver, benutzerfreundlicher Datenbank-Explorer.
- [django-filter](https://github.com/carltongibson/django-filter) - Leistungsstarke Filter basierend auf Django QuerySets.
- [django-sql-explorer](https://github.com/explorerhq/sql-explorer) - Teilen Sie Daten über SQL-Abfragen.
- [django-tables2](https://github.com/jieter/django-tables2) - HTML-Tabellen mit Paginierung / Sortierung.
- [django-maintenance-mode](https://github.com/fabiocaccamo/django-maintenance-mode) - Zeigt eine 503-Fehlerseite an, wenn der Wartungsmodus aktiviert ist.
- [django-freeze](https://github.com/fabiocaccamo/django-freeze) - Konvertieren Sie Ihre dynamische Django-Site in eine statische mit einer Zeile Code.
- [django-nh3](https://github.com/marksweb/django-nh3) - Django Integration mit für nh3 und ist eine Alternative für django-bleach.
- [Weblate](https://github.com/WeblateOrg/weblate) - Weblate ist ein Copylefted-Libre-Software-Web-basiertes kontinuierliches Lokalisierungssystem, das von über 2500 Libre-Projekten und Unternehmen in mehr als 165 Ländern verwendet wird.
- [Django-Classy-Doc](https://github.com/nanuxbe/django-classy-doc) - Dokumentieren Sie Ihren eigenen Code im Stil von CCBV und CDRF.
- [iommi](https://github.com/iommirocks/iommi) - Toolkit für die Entwicklung von CRUD-Anwendungen ohne HTML oder JavaScript zu schreiben.

### Internationalisierung (i18n)
- [django-localflavor](https://github.com/django/django-localflavor) - Eine Sammlung von Funktionen, die für bestimmte Länder oder Kulturen nützlich sind. Früher ein Teil des Django-Kerns.
- [django-modeltrans](https://github.com/zostera/django-modeltrans) - Übersetzen Sie Django-Modellfelder in ein JSONField.
- [django-modeltranslations](https://github.com/deschler/django-modeltranslation) -  Übersetzt Django-Modelle mit einem Registrierungsansatz.
- [django-rosetta](https://github.com/mbi/django-rosetta) - Rosetta bietet eine Benutzeroberfläche zum Lesen und Schreiben der Gettext-Kataloge Ihres Projekts im Django-Admin.

### Protokollierung
- [django-guid](https://github.com/snok/django-guid) - Injizieren Sie eine GUID (Correlation-ID) in jede Protokollnachricht in einer Django-Anfrage.
- [DRF-API-Logger](https://github.com/vishalanandl177/DRF-API-Logger) - Ein API Logger für Ihr Django Rest Framework Projekt.
- [django-structlog](https://github.com/jrobichaud/django-structlog) - django-structlog ist eine strukturierte Logging-Integration für Django-Projekt mit [structlog](https://www.structlog.org)

### Überwachung
- [django-prometheus](https://github.com/django-commons/django-prometheus) - Exportieren Sie Django-Überwachungsmetriken nach Prometheus.
- [django-mixin](https://github.com/adinhodovic/django-mixin) - Monitoring Mixin für Django-Prometheus. Eine Reihe von Grafana Dashboards und Prometheus Regeln für Django.

### Versand
- [django-pony-express](https://github.com/ambient-innovation/django-pony-express) - Klassenbasierte E-Mails einschließlich einer Testsuite für Django.
- [django-anymail](https://github.com/anymail/django-anymail) - Django E-Mail-Backends und Webhooks für Amazon SES, Brevo (Sendinblue), MailerSend, Mailgun, Mailjet, Postmark, Postal, Resend, SendGrid, SparkPost, Unisender Go und mehr.

### Modellfelder
- [django-colorfield](https://github.com/fabiocaccamo/django-colorfield) - Farbfeld für django-modelle mit einem schönen color-picker-widget.
- [django-model-utils](https://github.com/jazzband/django-model-utils) - Django Modell Mixins und Utilities.
- [django-phonenumber-field](https://github.com/django-phonenumber-field/django-phonenumber-field) - Modell/Formularfeld für normalisierte Telefonnummern.
- [django-streamfield](https://github.com/raagin/django-streamfield) - Simple StreamField für einfachen Django-Admin (basierend auf der Idee von Wagtail CMS StreamField).

### Modelle
- [django-lifecycle](https://github.com/rsinger86/django-lifecycle) - Deklarative Modell Lifecycle Hooks, eine Alternative zu Signals.
- [django-mptt](https://github.com/django-mptt/django-mptt) - Modified Preorder Tree Traversal; Arbeiten mit Bäumen von Modellinstanzen.
- [django-taggit](https://github.com/jazzband/django-taggit/) - Einfache Model Tags.
- [django-reversion](https://github.com/etianen/django-reversion) - Versionskontrolle für Modellinstanzen.
- [django-simple-history](https://github.com/django-commons/django-simple-history) - Speichern Sie die Modellhistorie und Ansicht/Revert-Änderungen aus dem Administrator.
- [django-polymorphic](https://github.com/django-commons/django-polymorphic) - Django-polymorph vereinfacht die Verwendung geerbter Modelle in Django-Projekten.
- [django-recurrence](https://github.com/jazzband/django-recurrence) - Dienstprogramm für die arbeit mit wiederkehrenden daten in django.
- [django-treenode](https://github.com/fabiocaccamo/django-treenode) - Abstraktes Modell / Administrator für baumbasiertes Material.
- [django-auto-prefetch](https://github.com/adamchainz/django-auto-prefetch) - Fremde Schlüsselwerte automatisch nach Bedarf vorab abrufen.

### Leistung
- [django-perf-rec](https://cur.at/GHUO6cn?m=web) - Führen Sie detaillierte Aufzeichnungen über die Leistung Ihres Django-Codes.
- [New Relic](https://newrelic.com/python/django) - Time Middleware, Views und SQL-Abfragen.
- [Scout](https://scoutapm.com/docs/python/django) - Time Middleware, Template Rendering und SQL-Abfragen mit automatischer N+1-Erkennung.
- [django-silk](https://github.com/jazzband/django-silk) - Live-Profiling und Inspektion von HTTP-Anfragen und Datenbankanfragen.
- [py-spy](https://github.com/benfred/py-spy) - Sampling Profiler für Python-Programme.
- [pyinstrument](https://github.com/joerick/pyinstrument) - Call Stack Profiler für Python, Django, Flask, FastAPI.
- [django-zeal](https://github.com/taobojlen/django-zeal) - N+1 Abfragen mit benutzerfreundlichen Fehlermeldungen erkennen

### Genehmigungen
- [django-role-permissions](https://github.com/vintasoftware/django-role-permissions) - Django App für rollenbasiertes Berechtigungsmanagement.
- [django-guardian](https://github.com/django-guardian/django-guardian) - Pro Objektberechtigungen in Django.
- [django-rules](https://github.com/dfunckt/django-rules) - Eine winzige, aber leistungsstarke App mit Berechtigungen auf Objektebene, die von Grund auf für Django entwickelt wurde.

### Suche
- [django-haystack](https://github.com/django-haystack/django-haystack) - Modulare Suche nach Django.
- [django-watson](https://github.com/etianen/django-watson) - Volltext-Such-Plugin.
- [django-admin-search](https://github.com/shinneider/django-admin-search) - Modalfilter für django admin.
- [django-elasticsearch-dsl](https://github.com/django-es/django-elasticsearch-dsl) - Elasticsearch DSL Integration für Django.

### Suchmaschinenoptimierung
- [django-check-seo](https://github.com/kapt-labs/django-check-seo) - Überprüfen Sie SEO der Seiten.

### Sicherheit
- [django-csp](https://github.com/mozilla/django-csp) - Zusätze [Content-Security-Policy](http://www.w3.org/TR/CSP/) Header zu Django.
- [django-feature-policy](https://github.com/adamchainz/django-permissions-policy) - Setzen Sie den Sicherheitsentwurf HTTP-Header `Feature-Policy` In einer Django App.
- [django-protected-media](https://github.com/cobusc/django-protected-media) - Verwaltet Medien, die als sensibel gelten, auf geschützte Weise.
- [DJ Checkup](https://djcheckup.com) - Führt mehrere Überprüfungen auf Ihrer bereitgestellten Django-Website aus, um nach allgemeinen Sicherheitsfehlern zu suchen.

### Statische Vermögenswerte
- [django-storages](https://github.com/jschneier/django-storages) - Eine einzelne Bibliothek zur Unterstützung mehrerer benutzerdefinierter Storage-Backends für Django.
- [django-compressor](https://github.com/django-compressor/django-compressor/) - Komprimieren Sie JavaScript/CSS in eine einzelne zwischengespeicherte Datei.
- [easy-thumbnails](https://github.com/SmileyChris/easy-thumbnails) - Bild Miniaturansichten für Django.
- [whitenoise](https://github.com/evansd/whitenoise) - Vereinfachte statische Datei für Python-Websites.

### Aufgabenwarteschlangen
- [django-q2](https://github.com/django-q2/django-q2) - Eine verteilte Aufgabenwarteschlange für Django.
- [django-rq](https://github.com/rq/django-rq) - Integration für Redis Queue.
- [django-redis](https://github.com/jazzband/django-redis) - Voll funktionsfähiges Redis Cache Backend für Django.
- [celery](https://github.com/celery/celery) - Robuste und Broker-agnostische Task-Warteschlangen für größere, leistungsorientierte Projekte.
- [flower](https://github.com/mher/flower) - Flower ist ein webbasiertes Tool zur Überwachung und Verwaltung von Sellerie-Clustern.
- [django-celery-beat](https://github.com/celery/django-celery-beat) - Ein periodischer Taskplaner mit Datenbank, der vom Django-Admin-Panel konfiguriert wurde.
- [celery-exporter](https://github.com/danihodovic/celery-exporter) - Prometheus & Grafana Überwachung von Sellerie Aufgaben.
- [django-dramatiq](https://github.com/Bogdanp/django_dramatiq) - Aufgabenverarbeitungsbibliothek mit Fokus auf Einfachheit, Zuverlässigkeit und Leistung.
- [django-celery-results](https://github.com/celery/django-celery-results) - Sellerie Ergebnis Backend mit Django.
- [django-tasks](https://github.com/realOrangeOne/django-tasks) - Eine Referenzimplementierung und Backport von Hintergrundarbeitern und Aufgaben in Django, basierend auf [DEP 14](https://www.djangoproject.com/weblog/2024/may/29/django-enhancement-proposal-14-background-workers/).
- [huey](https://github.com/coleifer/huey) - Eine kleine Aufgabenwarteschlange für Python, mit Django-Unterstützung einschließlich der neuen `django.tasks` API.
- [django-ox](https://github.com/oxpull/django-ox) - Datenbankgestützter Worker für Djangos Tasks-Framework, mit Transaktionswarteschlange, Wiederholungen, wiederkehrenden Aufgaben und keinem Broker.
- [django-absurd](https://github.com/lincolnloop/django-absurd) - Django-Integration für Absurd, ein Postgres-natives dauerhaftes Workflow-System.

### Meldebögen
- [django-components](https://github.com/django-components/django-components/) - Eine Möglichkeit, einfache wiederverwendbare Vorlagenkomponenten in Django zu erstellen.
- [django-template-partials](https://github.com/carltongibson/django-template-partials/) - Wiederverwendbare benannte Inline-Teile für die Django Template Language.
- [slippers](https://mitchel.me/slippers/) - Bauen Sie wiederverwendbare Komponenten in Django, ohne eine einzelne Zeile Python zu schreiben.
- [JinjaX](https://jinjax.scaletti.dev/) - Superkomponenten-Leistungen für Ihre Jinja-Vorlagen.
- [django-cotton](https://django-cotton.com/) - Abschied `{% raw %}{%{% endraw %} extends, block, include {% raw %}%}{% endraw %}`, Hallo `<c-component />`moderne UI-Zusammensetzung zu Django bringen.
- [htpy](https://htpy.dev/) - htpy ist eine Bibliothek, die das Schreiben von HTML in einfachen Python unterhaltsam und effizient macht, ohne Vorlagensprache.
- [django-suspense](https://github.com/paqstd-dev/django-suspense) - Einfache Möglichkeit, einen Fallback in Vorlagen anzuzeigen, bis Kinder das Laden beendet haben (wie React).

### Prüfung
- [django-debug-toolbar](https://github.com/django-commons/django-debug-toolbar/) - Konfigurierbare Panels zum Debugen von Anfragen/Antworten.
- [pytest-django](https://github.com/pytest-dev/pytest-django) - Verwenden sie pytest-funktionen in django.
- [django-test-migrations](https://github.com/wemake-services/django-test-migrations) - Testen Sie das Django-Schema und Datenmigrationen, einschließlich der Reihenfolge der Migrationen.
- [django-test-plus](https://github.com/revsys/django-test-plus/) - Nützliche Ergänzungen zu Djangos Standard TestCase.
- [factory-boy](https://github.com/FactoryBoy/factory_boy) - Austausch von Prüfvorrichtungen.
- [django-waffle](https://github.com/django-waffle/django-waffle) - Ein Feature-Flipper für Django.
- [model-bakery](https://github.com/model-bakers/model_bakery) - Objektfabrik für Django (Umbenennung des Legacy Model Mommy Projekts).
- [django-fakery](https://github.com/fcurella/django-fakery) - Eine einfach zu bedienende Implementierung von Creation Methods für Django, unterstützt von Faker.
- [django-pattern-library](https://github.com/torchbox/django-pattern-library) - Pattern Library Generator für Django-Vorlagen, um das Testen von UI-Komponenten zu unterstützen.
- [storybook-django](https://github.com/torchbox/storybook-django) - Entwickeln Sie Django UI-Komponenten isoliert mit Storybook.

### URLs
- [dj-database-url](https://github.com/jazzband/dj-database-url) - Datenbank-URLs
- [urlman](https://github.com/andrewgodwin/urlman) - Eine schönere Möglichkeit, URLs für Django-Modelle zu erstellen.
- [django-robots](https://github.com/jazzband/django-robots) - Dies ist eine grundlegende Django-Anwendung zum Verwalten von Robotern. txt-Dateien folgen dem Roboterausschlussprotokoll und ergänzen die Django Sitemap Contrib-App.
- [django-redirects](https://github.com/fabiocaccamo/django-redirects) - Redirects, wie sie sein sollten, mit voller Kontrolle.

### Nutzer
- [django-allauth](https://github.com/pennersr/django-allauth/) - Verbesserte Benutzerregistrierung einschließlich Social Auth.
- [django-allauth-ui](https://github.com/danihodovic/django-allauth-ui/) - Besser aussehende Vorlagen für Django-Allauth.
- [django-improved-user](https://github.com/jambonrose/django-improved-user) - Ein benutzerdefinierter Django-Benutzer, der sich per E-Mail authentifiziert. Befolgt die Best Practices für Identität und Authentifizierung.
- [django-organizations](https://github.com/bennylope/django-organizations/) - Mehrbenutzerkonten für Django-Projekte.
- [django-cas-ng](https://github.com/django-cas-ng/django-cas-ng) - Django-cas-ng ist Django CAS (Central Authentication Service) 1.0/2.0/3.0 Clientbibliothek zur Unterstützung von SSO (Single Sign On) und Single Logout (SLO).
- [django-guest-user](https://github.com/julianwachholz/django-guest-user) - Ermöglichen Sie den Besuchern, Ihre Website wie einen normalen Benutzer zu nutzen und sich später zu registrieren.

### Ansichten
- [django-braces](https://github.com/brack3t/django-braces) - Wiederverwendbare, generische Mixins.
- [django-easy-audit](https://github.com/soynatan/django-easy-audit) - Verfolgen Sie die Benutzeraktionen.
- [django-extra-views](https://github.com/AndrewIngram/django-extra-views) - Extra klassenbasierte generische Ansichten.
- [django-stronghold](https://github.com/mgrouchy/django-stronghold) - Führt alle Django-Ansichten zum Standard-Login_erforderlich.
- [neapolitan](https://github.com/carltongibson/neapolitan) - Schnelle CRUD Ansichten für Django.

## Entwickler-Tools

Standalone-Tools, die bei der Entwicklung von Django-Projekten helfen.

### Meldebögen
- [curlylint](https://www.curlylint.org/) - Experimentelle HTML-Vorlagen für Jinja, Nunjucks, Django-Vorlagen, Twig, Liquid.
- [djhtml](https://github.com/rtts/djhtml) - Meldebogen Django/Jinja.
- [djlint](https://www.djlint.com/) - Lint & Format HTML Templates.

### Statische Analyse
- [django-orm-lens](https://github.com/FROWNINGdev/django-orm-lens) - Statische Analyse auf Modellebene: ER-Diagramme, N+1-Erkennung, Schemadrift und Explosionsradius in CI, ohne Datenbank oder Django-Boot.

## Python-Pakete

_Eine kurze Liste von Python-Paketen, die gut mit Django funktionieren._

- [black](https://github.com/psf/black) - Kompromissloser Python-Code-Formatierer.
- [coveragepy](https://github.com/coveragepy/coveragepy) - Messung der Codeabdeckung.
- [faker](https://github.com/joke2k/faker) - Faker ist ein Python-Paket, das gefälschte Daten für Sie generiert.
- [pillow](https://github.com/python-pillow/Pillow) - Python Imaging Library.
- [pytest](https://github.com/pytest-dev/pytest/) - Testrahmen.
- [python-decouple](https://github.com/HBNetwork/python-decouple) - Strenge Trennung der Einstellungen vom Code.
- [python-slugify](https://github.com/un33k/python-slugify) - Gibt Unicode Slugs zurück.
- [sentry-python](https://github.com/getsentry/sentry-python) - Fehlermeldung SDK.
- [python-socketio](https://github.com/miguelgrinberg/python-socketio) - Python-Implementierung des Socket. IO_ Echtzeit-Client und Server. [(create Socket.io Django server instance)](https://python-socketio.readthedocs.io/en/latest/server.html?highlight=django#creating-a-server-instance)
- [Ruff](https://github.com/astral-sh/ruff) - Ein extrem schneller Python-Linter und Code-Formatierer, geschrieben in Rust.

## Ressourcen

### Offizielle Mittel
<!--lint ignore double-link-->
- [Project Website](https://www.djangoproject.com/) - Offizielle Django Website.
- [Documentation](https://docs.djangoproject.com/en/dev/) - Umfassende Dokumentation für alle Django Versionen.
- [Polls Tutorial](https://docs.djangoproject.com/en/dev/intro/tutorial01/) - Erstellen Sie ein Umfrage-Tutorial, während Sie Django-Interna lernen.
- [Source Code](https://github.com/django/django/) - Hostet auf GitHub.

### Bildungswesen
- [Django Girls Tutorial](https://tutorial.djangogirls.org/en/) - Verwenden Sie funktionsbasierte Ansichten, um eine Blog-App zu erstellen.
- [LearnDjango](https://learndjango.com/) - Tutorials und Premium-Kurse zu Django und Django REST Framework.
- [Adam Johnson](https://adamj.eu/tech/) - Adam ist im Technical Board von Django und schreibt regelmäßig Tutorials.
- [Photon Designer - Django tutorials](https://photondesigner.com/articles) - Django-Tutorials von Tom Dekan zum einfachen Erstellen von Django-Apps - So erstellen sie einen instant messenger mit django, fügen sie sofortsuche hinzu und verwenden sie google drive als datenbank. Regelmäßig aktualisiert.
- [TestDriven](https://testdriven.io/blog/) - Mehrere Django-spezifische Tutorials zu Themen wie Docker, Zahlungen und mehr.
- [Classy Class-Based Views](https://ccbv.co.uk/) - Detaillierte Beschreibungen der Methoden/Eigenschaften/Attribute für jede generische klassenbasierte Ansicht.
- [Classy Django REST Framework](http://www.cdrf.co) - Detaillierte Beschreibungen mit Methoden/Attributen für DRF-Klassen-basierte Ansichten und Serialisierer.
- [Simple is Better than Complex](https://simpleisbetterthancomplex.com/) - Regelmäßig aktualisierte Website mit vielen Tutorials und Tipps zu Django.
- [Full Stack Python's Django Page](https://www.fullstackpython.com/django.html) - Erklärung der Django Philosophie und Links zu anderen Ressourcen und Tutorials.
- [RealPython](https://realpython.com/tutorials/django/) - Viele hochwertige Tutorials zu Django.
- [Mozilla Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django) - Erstellen Sie eine Leihbibliothek App.
- [Matt Layman](https://www.mattlayman.com) - Regelmäßige Tutorials und Deep-Dives zu Django Themen.
- [Django Styleguide](https://github.com/HackSoftware/Django-Styleguide) - Styleguide für Django mit Best Practices und Beispielen.
- [Django Template Tags and Filters](https://www.djangotemplatetagsandfilters.com/) - Zusätzliche Dokumente zu Djangos 57 integrierten Template-Filtern und 27 Template-Tags.
- [Django for Everybody](https://www.dj4e.com/) - Ein kompletter Kurs für Webdev-Anfänger, der sich auf Django konzentriert.
- [CS50W](https://cs50.harvard.edu/web/2020/) - Harvards Einführungskurs zur Webentwicklung erklärt Django als Backend-Framework.
- [Better Simple](https://www.better-simple.com/blog/django/) - Artikel von Tim Schilling über Django-Entwicklung, Best Practices und das Django-Ökosystem.

### Gemeinschaft
<!--lint disable double-link-->
- [Django Forum](https://forum.djangoproject.com/) - Offizielles Discourse Board.
- [Community Page](https://www.djangoproject.com/community/) - Mit Feeds von Community Blog Posts, Jobs und mehr.
- [Local Django Communities Page](https://www.djangoproject.com/community/local/) - Mit lokalen Veranstaltungen auf der ganzen Welt.
- [Django Users Google Group](https://groups.google.com/forum/#!forum/django-users/) - Sehr aktives Diskussionsforum für Fragen/Antworten.
- [Developers Google Group](https://groups.google.com/forum/#!forum/django-developers/) - Für Beiträge zu Django selbst nur.
- [Mastodon](https://fosstodon.org/@django) - Für offizielle Ankündigungen zu Updates, Sicherheitskorrekturen usw.
- [X (formerly Twitter)](https://x.com/djangoproject/) - Für offizielle Ankündigungen zu Updates, Sicherheitskorrekturen usw.
- [Discord Server](https://discord.com/invite/xcRH6mN4fa) - Django Discord Gemeinschaft.
- IRC-Kanal - Chatten Sie mit anderen Django-Benutzern unter irc://irc.freenode.net/django.
- [Djangonaut Space](https://djangonaut.space) - Kostenloses Peer-Mentoring-Programm für die Django-Community, um Menschen in das Universum der Open-Source-Beiträge zu bringen.
<!--lint enable double-link-->

### Konferenzen

- [DjangoCon US](https://djangocon.us/) ([YouTube Channel](https://www.youtube.com/channel/UC0yY6a79pPY9J0ShIHRf6yw))
- [DjangoCon Europe](https://djangocon.eu/) ([YouTube Channel](https://www.youtube.com/user/djangoconeurope))
- [DjangoCon AU](https://djangocon.com.au/)
- [DjangoCon Africa](https://djangocon.africa/)
- [Django Day Copenhagen](https://djangoday.dk/) ([YouTube Channel](https://www.youtube.com/@djangodanmark))
- [PyCon US](https://us.pycon.org/) ([YouTube Channel](https://www.youtube.com/channel/UCsX05-2sVSH7Nx3zuk3NYuQ))
- [PyCon Australia](https://pycon-au.org/) ([YouTube Channel](https://www.youtube.com/user/PyConAU))
- [Euro Python](https://europython.eu/) ([YouTube Channel](https://www.youtube.com/user/PythonItalia))
- [Django Under the Hood](https://www.youtube.com/channel/UC9T1dhIlL_8Va9DxvKRowBw/videos)
- [DjangoCongress JP](https://djangocongress.jp/) ([YouTube Channel](https://www.youtube.com/@djangocongressjp3623))
- [Complete listing of all PyCons globally](https://pycon.org)

### Job Boards

- [Django Job Board](https://djangojobboard.com/) - Eine Django Jobbörse, die auch andere Jobbörsen zusammenfasst. Früher Django News Jobs.
- [Django Jobs](https://djangojobs.net) - Django-Jobs für die Einstellung von Django Python-Entwicklern.
- [Python.org Job Boards](https://www.python.org/jobs/) - Obwohl diese Jobbörse nicht ausschließlich für Django gedacht ist, wird sie von der offiziellen Python-Website gehostet und bietet eine Reihe von Python- und Django-bezogenen Stellenangeboten.

### Newsletter

- [Django News](https://django-news.com) - Wöchentlicher Newsletter zu Ankündigungen, Artikeln, Projekten und Vorträgen.

### Podcasts

- [Django Chat](https://djangochat.com/) - Ein wöchentlicher Podcast von William Vincent und Django Fellow Carlton Gibson mit Diskussionen über die wichtigsten Django-Konzepte und Stammgäste.
- [Django Brew](https://djangobrew.com/) - Ein lustiger, Koffein-powered Podcast über das Django Web Framework von Adam Hill und Sangeeta Jadoonanan.
- [TalkPython](https://talkpython.fm/) - Der führende Python Podcast mit gelegentlichen Episoden auf Django.
- [Running in Production](https://runninginproduction.com/tags/django) - Nicht mehr aktiv, aber ein großer rückstau von episoden auf django tech stacks.

### Videos

- [DjangoTV](https://djangotv.com) - Ihre Quelle für Django Konferenzvideos und Tutorials.
- [PyVideo](https://pyvideo.org) - PyVideo ist ein Index von Python-bezogenen Medien.

### Bücher
Für eine vollständige Liste der gedruckten Bücher, check out [DjangoBook.com](https://djangobook.com/).

_Django 5_
- [Django for APIs, Fifth Edition](https://learndjango.com/courses/django-for-apis/)
- [Boost Your Django DX](https://adamchainz.gumroad.com/l/byddx)
- [Django 5 By Example](https://www.packtpub.com/en-us/product/django-5-by-example-9781805125457)
- [Django in Action](https://www.manning.com/books/django-in-action)
- [Django for Beginners, Fifth Edition](https://learndjango.com/courses/django-for-beginners/)

## Hosting

### PaaS (Platforms-as-a-Service)
- [Divio](https://www.divio.com)
- [Fly](https://fly.io)
- [Google Cloud](https://cloud.google.com/python/django/)
- [Heroku](https://www.heroku.com)
- [Microsoft Azure](https://azure.microsoft.com/en-us/develop/python/)
- [Upsun](https://upsun.com)
- [PythonAnywhere](https://www.pythonanywhere.com)
- [Railway](https://railway.app)
- [Render](https://render.com)
- [Vercel](https://vercel.com/home)

### IaaS (Infrastructure-as-a-Service)
- [Digital Ocean](https://www.digitalocean.com)
- [Linode](https://www.linode.com)
- [Amazon Lightsail](https://aws.amazon.com/lightsail/)
- [Hetzner](https://www.hetzner.com)

### Bereitstellungsdienste
_Hostete Dienste, die Ihre App auf Servern bereitstellen, die Sie anderswo mieten._
- [Appliku](https://appliku.com) - Django-fokussierter Bereitstellungsservice für Server auf DigitalOcean, Hetzner, AWS und Linode.
- [DeployHQ](https://www.deployhq.com) - Wird von Git auf Ihren Servern über SSH, SFTP oder S3 bereitgestellt, mit Build-Schritten und Rollbacks.

### Self-Hosted Deployment
_Open-Source-Tools, die Ihre App auf Servern bereitstellen, die Sie besitzen._
- [Coolify](https://coolify.io) - Selbst gehostetes PaaS mit einer Web-Benutzeroberfläche für Docker-Apps und Datenbanken, mit einer optionalen kostenpflichtigen Cloud-Steuerung.
- [Dokploy](https://dokploy.com) - Selbst gehostetes PaaS mit einer Web-Benutzeroberfläche, basierend auf Docker und Traefik, mit einem optionalen kostenpflichtigen Cloud-Control-Flugzeug.
- [CapRover](https://caprover.com) - Selbst gehostetes PaaS mit einer Web-Benutzeroberfläche und One-Click-Apps, die auf Docker Swarm basieren.
- [Kamal](https://kamal-deploy.org) - Bereitstellen von Containern auf jeden Server über SSH mit null Ausfallzeiten von Basecamp aus.
- [Dokku](https://dokku.com) - Docker-basiertes PaaS mit Git-Push-Deployments im Heroku-Stil.
- [Piku](https://github.com/piku/piku) - Tiny Heroku-style PaaS für Git-Push-Bereitstellungen auf einem einzigen Server.

## Projekte

### Boilerplate
- [cookiecutter-django](https://github.com/cookiecutter/cookiecutter-django/) - Ein vollmundiges Starterprojekt, sehr anpassbar.
- [django-base-site](https://github.com/epicserve/django-base-site/) - Eine Django-Website mit vielen gängigen Drittanbieter-Paketen vorinstalliert.
- [djangox](https://github.com/wsvincent/lithium/) - Batterien enthalten Starter-Projekt für Pip, Pipenv oder Docker.
- [django-docker-template](https://github.com/amerkurev/django-docker-template) - Dockerized Django mit Postgres, Gunicorn und Traefik (mit automatischer Erneuerung Let's Encrypt).
- [django-startproject](https://github.com/jefftriplett/django-startproject) - Django startet Projektvorlage mit Batterien.
- [wemake-django-template](https://github.com/wemake-services/wemake-django-template/) - Die blutende Django-Vorlage konzentrierte sich auf Codequalität und -sicherheit.
- [cookiecutter-vue-django](https://github.com/ilikerobots/cookiecutter-vue-django) - Django + Vue Starter Projekt Fusing Vue SFCs & Django Templates.
- [sidewinder](https://github.com/stribny/sidewinder/) - Ein Django-Starter-Kit, das sich auf gute Standardwerte, Entwicklererfahrung und Bereitstellung konzentriert.
- [Falco](https://github.com/falcopackages/falco-cli) - Verbessern Sie Ihre Django-Entwicklererfahrung: CLI und Guides für den modernen Django-Entwickler.
- [BH2](https://codeberg.org/trey/bh2) - Erhalten Sie eine neue Django-Site, die in einem Djiffy gestartet wurde
- [django-react-boilerplate](https://github.com/vintasoftware/django-react-boilerplate) - Ein Django, React, Tailwind, Webpack Projekt Boilerplate

### Open Source Projekte
- [Blog app with users and forms](https://github.com/wsvincent/djangoforbeginners/tree/master/ch7-blog-app-with-users/)
- [Newspaper app with custom user model, full user auth](https://github.com/wsvincent/djangoforbeginners/tree/master/ch15-comments)
- [Behavior-Driven Development with Aloe](https://github.com/testdrivenio/django-aloe-bdd/)
- [Image Sharing Blog](https://github.com/MeNsaaH/soMedia)
- [Bootcamp: An enterprise social network](https://github.com/vitorfs/bootcamp)
- [Zulip](https://github.com/zulip/zulip/) - Open-source-team-chat.
- [django-job-portal](https://github.com/manjurulhoque/django-job-portal) - Jobportal-Anwendung mit Django.
- [Built with Django](https://builtwithdjango.com) - Kuratierte Liste der fantastischen Django-Projekte.
- [PostHog](https://github.com/PostHog/posthog) - Open-Source Produktanalytik.
- [HyperKitty](https://gitlab.com/mailman/hyperkitty) - Eine Web-Schnittstelle zum Zugriff auf GNU Mailman v3-Archive.
- [Healthchecks](https://github.com/healthchecks/healthchecks) - Ein Cron Monitoring Tool in Python & Django geschrieben.
- [Flagsmith](https://github.com/Flagsmith/flagsmith) - Open-Source Feature Flagging, Remote Config und AB-Tests.
- [OpenContracts](https://github.com/Open-Source-Legal/OpenContracts) - Enterprise-Grade-Dokumentanalyseplattform, die automatisiertes PDF-Parsing, Vektoreinbettungen und LLM-Integration kombiniert.
- [Baserow](https://github.com/baserow/baserow) - Open Source No-Code Datenbank und Airtable Alternative mit Django und Vue.js gebaut.
- [Django CRM Admin](https://github.com/DjangoCRM/django-crm) - Open Source Python CRM basiert vollständig auf der Django Admin Site.
- [linkding](https://github.com/sissbruecker/linkding) - Selbst gehosteter Bookmark-Manager, der minimal, schnell und einfach mit Docker einzurichten ist.
- [pythonic-news](https://github.com/sebst/pythonic-news) - Hacker News Klon.
- [Revel](https://github.com/letsrevel/revel-backend) - Self-Hostable Event Management und Ticketing Plattform mit Organisationen, Fragebogen-basierte Teilnehmer-Screening, QR Check-in und Stripe-Zahlungen.
- [venueless](https://github.com/venueless/venueless) - Plattform für Online- und Hybrid-Events mit Live-Streams, Chat- und Videoräumen des pretix-Teams.
- [pretix](https://github.com/pretix/pretix) - Ticketshop-Anwendung für Konferenzen, Festivals, Konzerte und andere Veranstaltungen.
- [pretalx](https://github.com/pretalx/pretalx) - Konferenzplanungstool für den Call for Papers, die Terminplanung und das Sprechermanagement.
- [ioe](https://github.com/zhtyyx/ioe) - Selbst gehostete Einzelhandelsgeschäftsverwaltung mit Inventar, Verkaufskasse und Mitgliedskonten.

## Django REST Rahmen

_Der beliebteste Weg, Web-APIs mit Django zu erstellen._

### DRF Ressourcen

<!--lint disable double-link-->
- [Official Documentation](https://www.django-rest-framework.org/)
- [DRF Source Code](https://github.com/encode/django-rest-framework)
- [awesome-django-rest-framework](https://github.com/nioperas06/awesome-django-rest-framework)
<!--lint enable double-link-->

### DRF Tutorials

<!--lint ignore double-link-->
- [Official REST Framework - A Beginner's Guide](https://learndjango.com/tutorials/official-django-rest-framework-tutorial-beginners)
- [Building APIs with Django and DRF](https://books.agiliq.com/projects/django-api-polls-tutorial/en/latest/)
- [DRF with React](https://www.valentinog.com/blog/drf/)
- [Making React and Django play well together](https://fractalideas.com/blog/making-react-and-django-play-well-together/)

## Wadenschwanz

_Wagtail, das leistungsstarke CMS für moderne Websites._

### Wagtail Ressourcen
<!--lint disable double-link-->
- [Official website](https://wagtail.org/)
- [Developer documentation](https://docs.wagtail.org/en/stable/)
- [User documentation](https://guide.wagtail.org/en-latest/)
- [Wagtail Source Code](https://github.com/wagtail/wagtail/)
- [awesome-wagtail](https://github.com/wagtail/awesome-wagtail)
- [This week in Wagtail](https://wagtail.org/this-week-in-wagtail/) - Eine (meistens) wöchentliche E-Mail mit Updates vom Wagtail-Kernteam.
- [Wagtail Space](https://www.wagtail.space/) - Wagtail Konferenzen auf der ganzen Welt.
- [Wagtail events](https://wagtail.org/events/) - Online- und persönliche Wagtail-Events.
<!--lint enable double-link-->

Eine bequeme Möglichkeit zum Durchsuchen und Durchsuchen von Repositorien aus dieser Liste ist verfügbar unter [awesome.lvtd.dev/lists/awesome-django](https://awesome.lvtd.dev/lists/awesome-django/).
