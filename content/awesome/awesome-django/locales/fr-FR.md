# Impressionnant Django [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> Une liste de choses géniales liées à Django. Maintien par [Will Vincent](https://github.com/wsvincent) et [Jeff Triplett](https://github.com/jefftriplett).

<br>

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/django-logo-negative.svg">
  <img alt="Dark and Light mode version of the Django logo" src="./assets/django-logo-positive.svg">
</picture>
</div>

<br>

Veuillez envisager de soutenir Django en faisant un don au <a rel="sponsored" href="https://www.djangoproject.com/fundraising/">Fondation du logiciel Django</a>,
parrainage via <a rel="sponsored" href="https://github.com/sponsors/django">Sponsors GitHub</a>,
ou d'achat <a rel="sponsored" href="https://django.threadless.com/">marchandises officielles</a>.

## Sommaire

<!--lint disable awesome-toc-->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Paquets tiers](#third-party-packages)
  - [Administrateur](#admin)
  - [Thèmes administratifs](#admin-themes)
  - [API](#apis)
  - [Async](#async)
  - [Cache](#caching)
  - [Commandes](#commands)
  - [Configuration](#configuration)
  - [Systèmes de gestion du contenu](#content-management-systems)
  - [Connecteurs de base de données](#database-connectors)
  - [Injection de la dépendance](#dependency-injection)
  - [Commerce électronique](#ecommerce)
  - [Éditeurs](#editors)
  - [Fichiers/Images](#filesimages)
  - [Formulaires](#forms)
  - [Cadres complets](#full-stack-frameworks)
  - [Généralités](#general)
  - [Internationalisation (i18n)](#internationalisation-i18n)
  - [Exploitation forestière](#logging)
  - [Surveillance](#monitoring)
  - [Envoi](#mailing)
  - [Champs modèles](#model-fields)
  - [Modèles](#models)
  - [Rendement](#performance)
  - [Autorisations](#permissions)
  - [Recherche](#search)
  - [Optimisation du moteur de recherche](#search-engine-optimisation)
  - [Sécurité](#security)
  - [Actifs statiques](#static-assets)
  - [Demandes de tâches](#task-queues)
  - [Modèles](#templates)
  - [Essais](#testing)
  - [URLs](#urls)
  - [Utilisateur](#users)
  - [Vues](#views)
- [Outils de développement](#developer-tools)
  - [Modèles](#templates-1)
  - [Analyse statique](#static-analysis)
- [Python Packages](#python-packages)
- [Ressources](#resources)
  - [Ressources officielles](#official-resources)
  - [Éducation](#educational)
  - [Communauté](#community)
  - [Conférences](#conferences)
  - [Conseils d'emploi](#job-boards)
  - [Bulletins](#newsletters)
  - [Podcasts](#podcasts)
  - [Vidéos](#videos)
  - [Livres](#books)
- [Hébergement](#hosting)
  - [PaaS (Platforms-as-a-Service)](#paas-platforms-as-a-service)
  - [IaaS (Infrastructure en tant que service)](#iaas-infrastructure-as-a-service)
  - [Services de déploiement](#deployment-services)
  - [Déploiement autonome](#self-hosted-deployment)
- [Projets](#projects)
  - [Chaudière](#boilerplate)
  - [Projets ouverts](#open-source-projects)
- [Jango REST Cadre](#django-rest-framework)
  - [Ressources du DRF](#drf-resources)
  - [Tutoriels DRF](#drf-tutorials)
- [Cravate](#wagtail)
  - [Ressources de Wagtail](#wagtail-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!--lint enable awesome-toc-->

## Paquets tiers

_Pour une liste complète de tous les paquets disponibles, voir [Django Packages](https://djangopackages.org/)_

### Administrateur
- [django-hijack](https://github.com/django-hijack/django-hijack) - Les administrateurs peuvent se connecter et travailler pour le compte d'autres utilisateurs sans avoir à connaître leurs identifiants.
- [django-import-export](https://github.com/django-import-export/django-import-export) - Application Django et bibliothèque pour importer et exporter des données avec intégration admin.
- [django-admin-inline-paginator-plus](https://github.com/DmytroLitvinov/django-admin-inline-paginator-plus) - Une façon simple de paginer votre inline dans Django admin
- [django-loginas](https://github.com/skorokithakis/django-loginas) - "Se connecter en tant qu'utilisateur" pour l'administrateur Django.
- [impostor](https://github.com/avallbona/Impostor) - Impostor est une application Django qui permet aux membres du personnel de se connecter en tant qu'utilisateur différent en utilisant leur propre nom d'utilisateur et mot de passe.
- [django-impersonate](https://pypi.org/project/django-impersonate/) - Autoriser les superutilisateurs à personnifier les autres comptes non-superutilisateur.
- [django-admin-env-notice](https://github.com/dizballanze/django-admin-env-notice) - Distinction visuelle des environnements dans Django Admin, par exemple: `development`, `staging`, `production`.
- [django-related-admin](https://github.com/PetrDlouhy/django-related-admin) - Une bibliothèque d'aide qui vous permet d'écrire une liste_affiche à travers les relations clés étrangères.
- [django-admin-sortable2](https://github.com/jrief/django-admin-sortable2) - Commande de glisser-déposer générique pour les objets dans l'interface admin Django.
- [django-admin-collaborator](https://github.com/brktrlw/django-admin-collaborator) - Ajoutez une présence utilisateur en temps réel, modifiez les serrures et chattez à Django admin avec Channels et Redis.
- [dj-control-room](https://github.com/django-control-room/dj-control-room) - Construisez un plan de contrôle avec une suite d'outils opérationnels à l'intérieur de l'administrateur Django (Redis, cache, Celery, URLs, etc.).
- [django-admin-mcp](https://github.com/7tg/django-admin-mcp) - Exposez des modèles d'administration enregistrés aux clients MCP (assistants AI comme Claude): CRUD, actions d'administration et historique à travers vos classes ModelAdmin, captées par les permissions Django.

### Thèmes administratifs
- [django-grappelli](https://github.com/sehmaschine/django-grappelli) - Une peau jazzy pour l'administrateur.
- [django-jazzmin](https://github.com/farridav/django-jazzmin) - Thème drop-in pour django admin, qui utilise AdminLTE 3 & Bootstrap 4 pour faire votre look admin jazzy.
- [django-admin-interface](https://github.com/fabiocaccamo/django-admin-interface) - Personnaliser Admin par l'administrateur lui-même (couleur, en-tête. titre, logo) et fenêtres popup remplacées par des modales.
- [django-semantic-admin](https://github.com/globophobe/django-semantic-admin) - Django Thème d'administration de l'interface utilisateur sémantique.
- [django-jet-reboot](https://github.com/assem-ch/django-jet-reboot) - Django Jet est un modèle moderne pour l'interface admin Django avec une fonctionnalité améliorée.
- [django-baton](https://github.com/otto-torino/django-baton) - Une application d'administration django cool, moderne et réactive basée sur bootstrap 5.
- [django-unfold](https://github.com/unfoldadmin/django-unfold) - Thème d'administration moderne Django pour un développement d'interface sans faille.
- [django-daisy](https://github.com/hypy13/django-daisy) - Un tableau de bord django moderne entièrement réactif construit avec daisyui.
- [django-smartbase-admin](https://github.com/SmartBase-SK/django-smartbase-admin) - Django SmartBase Admin .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

### API
<!--lint disable double-link-->
- [django-rest-framework](https://github.com/encode/django-rest-framework) - API Web pour Django.
- [django-cors-headers](https://github.com/adamchainz/django-cors-headers) - Si votre back-end et front-end sont sur différents serveurs, vous en avez besoin.
- [dj-rest-auth](https://github.com/iMerica/dj-rest-auth) - Authentification pour le cadre de repos Django.
- [django-rest-knox](https://github.com/jazzband/django-rest-knox) - Module d'authentification pour django-rest-auth.
- [djoser](https://github.com/sunscrapers/djoser) - Mise en œuvre REST de Django auth.
- [djaq](https://github.com/paul-wolf/djaq) - Une API à distance instantanée aux modèles Django avec un langage de requête puissant.
- [django-rest-framework-simplejwt](https://github.com/jazzband/djangorestframework-simplejwt) - JSON jetons web pour DRF.
- [django-webpack-loader](https://github.com/django-webpack/django-webpack-loader) - Utilisation transparente du webpack avec Django.
- [drf-yasg](https://github.com/axnsan12/drf-yasg) - Génération automatisée de vrais schémas Swagger/OpenAPI 2.0 à partir du code-cadre Django REST.
- [graphene-django](https://github.com/graphql-python/graphene-django) - GraphQL pour Django.
- [graphene-django-filter](https://github.com/devind-team/graphene-django-filter) - Filtres avancés implémentant et/ou/ou pas opérateurs dans GraphQL pour Django.
- [django-modern-rest](https://github.com/wemake-services/django-modern-rest) - Modern REST avec vitesse, types, async, `msgspec`, `pydantic` et autres goodies !
- [django-ninja](https://django-ninja.rest-framework.com/) - Django Ninja - Cadre rapide Django REST basé sur les annotations de type.
- [django-tastypie](https://github.com/django-tastypie/django-tastypie) - Création de délicieuses API pour les applications Django depuis 2010.
- [drf-spectacular](https://github.com/tfranzel/drf-spectacular) - Génération de schéma flexible OpenAPI 3 pour le cadre Django REST.
- [django-webhook](https://github.com/danihodovic/django-webhook) - Une application Django plug-and-play pour envoyer des webhooks sortants sur les changements de modèle.
- [strawberry-django](https://github.com/strawberry-graphql/strawberry-django) - Intégration Django avec Strawberry, une bibliothèque GraphQL conçue pour le développement moderne
<!--lint enable double-link-->

### Async
- [channels](https://github.com/django/channels/) - Soutien Async à Django.

### Cache
- [django-cachalot](https://github.com/noripyt/django-cachalot) - Cache vos requêtes Django ORM et les invalide automatiquement.
- [django-cacheops](https://github.com/Suor/django-cacheops) - Un cache ORM slick avec invalidation automatique par événement granulaire.

### Commandes
- [django-extensions](https://github.com/django-extensions/django-extensions/) - Extensions de gestion personnalisées, notamment `runserver_plus` et `shell_plus`.
- [django-click](https://github.com/django-commons/django-click) - Écrire les commandes de gestion Django en utilisant la [click CLI library](https://click.palletsprojects.com).
- [django-dbbackup](https://github.com/Archmonger/django-dbbackup) - Commandes de gestion pour aider à sauvegarder et restaurer votre base de données de projet et les fichiers multimédias.
- [django-liquidb](https://github.com/Gusakovskiy/django-liquidb) - Application Django pour simplifier la gestion des migrations et les changements dans les états du système db.
- [django-migration-zero](https://github.com/ambient-innovation/django-migration-zero/) - Mise en œuvre globale du modèle « migration zéro » pour Django couvrant les changements locaux et les ajustements de base de données en production.
- [django-typer](https://github.com/django-commons/django-typer) - Écrire les commandes de gestion Django en utilisant la [Typer CLI library](https://typer.tiangolo.com).

### Configuration
<!--lint disable double-link-->
- [confidential](https://github.com/candidco/confidential) - Gérer les configs et les secrets (avec le support CLI).
- [django-environ](https://github.com/joke2k/django-environ) - Variables environnementales.
- [django-split-settings](https://github.com/wemake-services/django-split-settings) - Organisez plusieurs fichiers de paramètres.
- [django-constance](https://github.com/jazzband/django-constance) - Une application Django pour stocker les paramètres dynamiques dans les moteurs rechargeables (Redis et Django) avec intégration avec l'application admin Django.
- [django-configurations](https://github.com/jazzband/django-configurations) - facilite la configuration du projet Django en s'appuyant sur la composabilité des classes Python et en suivant les principes de [the twelve-factor app](https://12factor.net/config).
- [dynaconf](https://www.dynaconf.com/django/) - Dynaconf charge les paramètres django à partir de plusieurs sources (formats de fichiers multiples, env vars, redis, voute, etcd), gère les secrets, et permet différentes stratégies de fusion tout en suivant [the twelve-factor app](https://12factor.net/config).
- [django-extra-settings](https://github.com/fabiocaccamo/django-extra-settings) - Configurez et gérez les paramètres supplémentaires dactylographiés en utilisant simplement l'administrateur django.
- [django-removals](https://github.com/ambient-innovation/django-removals/) - Détecter les variables de paramètres obsolètes au moyen de vérifications pratiques du système
- [environs](https://github.com/sloria/environs) - Analyse simplifiée de la variable d'environnement qui vient avec un [Django helper](https://github.com/sloria/environs#usage-with-django) qui installe des paquets supplémentaires.
<!--lint enable double-link-->
- [django-classy-settings](https://github.com/funkybob/django-classy-settings) - Paramètres basés sur la classe pour maintenir l'ordre de vos environnements, avec un accès facile aux variables d'environnement dactylographiées.
- [django-content-settings](https://github.com/occipital/django-content-settings) - Créez et gérez facilement les variables dactylographiées modifiables directement à partir du panneau d'administration Django.

### Systèmes de gestion du contenu
<!--lint disable double-link-->
- [wagtail](https://github.com/wagtail/wagtail) - Système populaire de gestion de contenu Django (CMS). Voir [awesome-wagtail](https://github.com/wagtail/awesome-wagtail) aussi.
- [mezzanine](https://github.com/stephenmcd/mezzanine) - Cadre de la CMS.
- [django-cms](https://github.com/django-cms/django-cms) - CMS pour Django.
- [feincms](https://github.com/feincms/feincms) - Un CMS extensible basé sur Django.
- [puput](https://github.com/APSL/puput) - Caractéristiques de l'application Blog avec Wagtail.
<!--lint enable double-link-->

### Connecteurs de base de données
- [djongo](https://github.com/doableware/djongo) - Connecteur de base de données Django et MongoDB.

### Injection de la dépendance
- [Wireup](https://github.com/maldoinc/wireup) - Injection de dépendance pour Django

### Commerce électronique
- [saleor](https://github.com/saleor/saleor) - Plateforme de commerce électronique Django basée sur GraphQL.
- [django-oscar](https://github.com/django-oscar/django-oscar) - Commerce électronique par domaine pour Django.

### Éditeurs
<!--lint ignore awesome-list-item-->
- [django-markdownx](https://github.com/neutronX/django-markdownx) - Greffon de marquage complet construit pour Django.
- [django-markdown-editor](https://github.com/agusmakmun/django-markdown-editor) - Impressionnant éditeur de Markdown Django, pris en charge pour Bootstrap & Semantic-UI.
- [django-business-logic](https://github.com/dgk/django-business-logic) - Cadre DSL visuel pour Django.
- [django-summernote](https://github.com/lqez/django-summernote) - Summernote est un éditeur simple de WYSIWYG.
- [django-tinymce](https://github.com/jazzband/django-tinymce) - Intégration TinyMCE pour Django.
- [django-prose](https://github.com/withlogicco/django-prose) - Un éditeur léger pour la création de contenu.
- [django-ace](https://github.com/django-ace/django-ace) - Intégration ACE pour Django.

### Fichiers/Images
- [django-cleanup](https://github.com/un1t/django-cleanup) - Zéro suppression de fichier de configuration/image pour les fichiers locaux et distants.
- [django-imagekit](https://github.com/matthewwithanm/django-imagekit) - Application Django pour le traitement des images pour vignettes, noir et blanc et tailles.
- [django-pictures](https://github.com/codingjoe/django-pictures) - Bibliothèque d'images multi-navigateurs réactives utilisant des codes modernes comme AVIF & WebP.
- [sorl-thumbnail](https://github.com/jazzband/sorl-thumbnail) - Des vignettes pour Django.

### Formulaires
- [django-crispy-forms](https://github.com/django-crispy-forms/django-crispy-forms/) - Les formulaires DRY Django.
- [django-floppyforms](https://github.com/jazzband/django-floppyforms) - Contrôle complet du rendu des formes.
- [django-formtools](https://github.com/jazzband/django-formtools) - Pour les formes précédentes et multiétapes, précédemment partie de Django jusqu'à 1.8.
- [django-widget-tweaks](https://github.com/jazzband/django-widget-tweaks) - Tweak formulaire champ rendu dans les modèles.
- [django-autocomplete-light](https://github.com/yourlabs/django-autocomplete-light) - Ajouter l'autocomplétion aux formulaires.

### Cadres complets
- [Django LiveView](https://github.com/Django-LiveView/liveview) - Cadre pour créer des interfaces dynamiques et réactives côté serveur avec des modèles Django. Mises à jour en temps réel via WebSocket avec gestionnaires de décorateurs.
- [Django-Bridge](https://github.com/kaedroho/django-bridge) - La façon simple de construire React frontends pour les applications Django.
- [ReactPy](https://github.com/reactive-python/reactpy) - C'est React, mais en Python. Insérer le Python rendu dynamiquement dans les modèles Django en utilisant le [ReactPy-Django module](https://github.com/reactive-python/reactpy-django).
- [Reactor](https://github.com/edelvalle/reactor/) - Phoenix LiveView, mais pour Django.
- [Sockpuppet](https://sockpuppet.argpar.se/) - Construisez des applications réactives avec l'outil Django que vous connaissez et aimez déjà.
- [Unicorn](https://www.django-unicorn.com/) - Un cadre réactif qui améliore progressivement une vue Django normale, fait des appels AJAX en arrière-plan et met à jour dynamiquement le DOM.

### Généralités
- [django-data-browser](https://github.com/tolomea/django-data-browser) - Explorateur de bases de données interactif et convivial.
- [django-filter](https://github.com/carltongibson/django-filter) - Des filtres puissants basés sur Django QuerySets.
- [django-sql-explorer](https://github.com/explorerhq/sql-explorer) - Partagez des données via des requêtes SQL.
- [django-tables2](https://github.com/jieter/django-tables2) - Tableaux HTML avec pagination/triage.
- [django-maintenance-mode](https://github.com/fabiocaccamo/django-maintenance-mode) - Affiche une page d'erreur 503 lorsque le mode maintenance est activé.
- [django-freeze](https://github.com/fabiocaccamo/django-freeze) - Convertissez votre site django dynamique en un site statique avec une ligne de code.
- [django-nh3](https://github.com/marksweb/django-nh3) - L'intégration Django avec pour nh3 et est une alternative pour django-bleach.
- [Weblate](https://github.com/WeblateOrg/weblate) - Weblate est un système de localisation continue basé sur le logiciel libre, utilisé par plus de 2500 entreprises et projets libres dans plus de 165 pays.
- [Django-Classy-Doc](https://github.com/nanuxbe/django-classy-doc) - Documentez votre propre code dans le style de CCBV et CDRF.
- [iommi](https://github.com/iommirocks/iommi) - Boîte à outils pour le développement d'applications CRUD sans écrire HTML ou JavaScript.

### Internationalisation (i18n)
- [django-localflavor](https://github.com/django/django-localflavor) - Une collection de fonctionnalités qui est utile pour certains pays ou cultures. Auparavant une partie du noyau Django.
- [django-modeltrans](https://github.com/zostera/django-modeltrans) - Traduire les champs modèles Django dans un champ JSONField.
- [django-modeltranslations](https://github.com/deschler/django-modeltranslation) -  Traduit les modèles Django en utilisant une approche d'enregistrement.
- [django-rosetta](https://github.com/mbi/django-rosetta) - Rosetta fournit un UI pour lire et écrire les catalogues gettext de votre projet dans l'Admin Django.

### Exploitation forestière
- [django-guid](https://github.com/snok/django-guid) - Injectez un GUID (Correlation-ID) dans chaque message de connexion dans une requête Django.
- [DRF-API-Logger](https://github.com/vishalanandl177/DRF-API-Logger) - Un enregistreur d'API pour votre projet Django Rest Framework.
- [django-structlog](https://github.com/jrobichaud/django-structlog) - django-structlog est une intégration structurée pour le projet Django en utilisant [structlog](https://www.structlog.org)

### Surveillance
- [django-prometheus](https://github.com/django-commons/django-prometheus) - Exporter les mesures de surveillance Django vers Prométhée.
- [django-mixin](https://github.com/adinhodovic/django-mixin) - Surveillance mixin pour Django-prométhée. Un ensemble de tableaux de bord Grafana et de règles Prométhée pour Django.

### Envoi
- [django-pony-express](https://github.com/ambient-innovation/django-pony-express) - E-mails basés sur les classes, y compris une suite de test pour Django.
- [django-anymail](https://github.com/anymail/django-anymail) - Django e-mail backends et webhooks pour Amazon SES, Brevo (Sendinblue), MailerSend, Mailgun, Mailjet, Postmark, Postal, Resend, SendGrid, SparkPost, Unisender Go et plus encore.

### Champs modèles
- [django-colorfield](https://github.com/fabiocaccamo/django-colorfield) - Champ couleur pour les modèles django avec un joli widget color-picker.
- [django-model-utils](https://github.com/jazzband/django-model-utils) - Mélanges et utilitaires de modèle Django.
- [django-phonenumber-field](https://github.com/django-phonenumber-field/django-phonenumber-field) - Champ modèle/formulaire pour les numéros de téléphone normalisés.
- [django-streamfield](https://github.com/raagin/django-streamfield) - Simple StreamField pour simple admin Django (fondé sur l'idée de Wagtail CMS StreamField).

### Modèles
- [django-lifecycle](https://github.com/rsinger86/django-lifecycle) - Crochets de cycle de vie de modèle déclaratif, une alternative aux signaux.
- [django-mptt](https://github.com/django-mptt/django-mptt) - Précommander l'arbre modifié Traversal; travailler avec les arbres des instances du modèle.
- [django-taggit](https://github.com/jazzband/django-taggit/) - Des étiquettes de modèle simples.
- [django-reversion](https://github.com/etianen/django-reversion) - Contrôle de version pour les instances modèles.
- [django-simple-history](https://github.com/django-commons/django-simple-history) - Stocker l'historique du modèle et afficher/réduire les changements depuis l'administrateur.
- [django-polymorphic](https://github.com/django-commons/django-polymorphic) - Django-polymorphe simplifie l'utilisation de modèles hérités dans les projets Django.
- [django-recurrence](https://github.com/jazzband/django-recurrence) - Utilitaire pour travailler avec des dates récurrentes dans Django.
- [django-treenode](https://github.com/fabiocaccamo/django-treenode) - Modèle abstrait/admin pour les objets à base d'arbres.
- [django-auto-prefetch](https://github.com/adamchainz/django-auto-prefetch) - Préférez automatiquement les valeurs de clé étrangères au besoin.

### Rendement
- [django-perf-rec](https://cur.at/GHUO6cn?m=web) - Conservez des enregistrements détaillés des performances de votre code Django.
- [New Relic](https://newrelic.com/python/django) - Intergiciel temporel, vues et requêtes SQL.
- [Scout](https://scoutapm.com/docs/python/django) - Intergiciel de temps, rendu de gabarit et requêtes SQL avec détection automatique N+1.
- [django-silk](https://github.com/jazzband/django-silk) - Profilage et inspection en direct des requêtes HTTP et des requêtes de base de données.
- [py-spy](https://github.com/benfred/py-spy) - Profileur d'échantillonnage pour les programmes Python.
- [pyinstrument](https://github.com/joerick/pyinstrument) - Profileur de pile d'appel pour Python, Django, Flask, FastAPI.
- [django-zeal](https://github.com/taobojlen/django-zeal) - Détecter les requêtes N+1 avec des messages d'erreur convivial

### Autorisations
- [django-role-permissions](https://github.com/vintasoftware/django-role-permissions) - Application Django pour la gestion des autorisations basées sur le rôle.
- [django-guardian](https://github.com/django-guardian/django-guardian) - Par objet permissions dans Django.
- [django-rules](https://github.com/dfunckt/django-rules) - Une petite mais puissante application fournissant des permissions de niveau objet, construit à partir du sol pour Django.

### Recherche
- [django-haystack](https://github.com/django-haystack/django-haystack) - Recherche modulaire pour Django.
- [django-watson](https://github.com/etianen/django-watson) - Module de recherche en texte intégral.
- [django-admin-search](https://github.com/shinneider/django-admin-search) - Filtre modal pour admin django.
- [django-elasticsearch-dsl](https://github.com/django-es/django-elasticsearch-dsl) - Intégration Elasticsearch DSL pour Django.

### Optimisation du moteur de recherche
- [django-check-seo](https://github.com/kapt-labs/django-check-seo) - Vérifiez le référencement des pages.

### Sécurité
- [django-csp](https://github.com/mozilla/django-csp) - Ajoute [Content-Security-Policy](http://www.w3.org/TR/CSP/) les en-têtes de Django.
- [django-feature-policy](https://github.com/adamchainz/django-permissions-policy) - Définir le projet d'en-tête HTTP de sécurité `Feature-Policy` sur une application Django.
- [django-protected-media](https://github.com/cobusc/django-protected-media) - Gère les médias considérés comme sensibles de manière protégée.
- [DJ Checkup](https://djcheckup.com) - Exécute plusieurs vérifications sur votre site Django déployé pour vérifier les erreurs de sécurité communes.

### Actifs statiques
- [django-storages](https://github.com/jschneier/django-storages) - Une bibliothèque unique pour prendre en charge plusieurs backends de stockage personnalisés pour Django.
- [django-compressor](https://github.com/django-compressor/django-compressor/) - Compresser JavaScript/CSS dans un seul fichier en cache.
- [easy-thumbnails](https://github.com/SmileyChris/easy-thumbnails) - vignettes pour Django.
- [whitenoise](https://github.com/evansd/whitenoise) - Fichier statique simplifié servant pour les sites Web de Python.

### Demandes de tâches
- [django-q2](https://github.com/django-q2/django-q2) - Une file d'attente multiprocessus distribuée pour Django.
- [django-rq](https://github.com/rq/django-rq) - Intégration pour Redis Queue.
- [django-redis](https://github.com/jazzband/django-redis) - Le cache redis complet pour Django.
- [celery](https://github.com/celery/celery) - Des files d'attente robustes et agnostiques pour des projets de plus grande envergure axés sur la performance.
- [flower](https://github.com/mher/flower) - Flower est un outil web pour surveiller et administrer les grappes Celery.
- [django-celery-beat](https://github.com/celery/django-celery-beat) - Un planificateur de tâches périodique avec base de données configurée par le panneau Admin de Django.
- [celery-exporter](https://github.com/danihodovic/celery-exporter) - Prométhée & Grafana surveillance des tâches Celery.
- [django-dramatiq](https://github.com/Bogdanp/django_dramatiq) - Bibliothèque de traitement des tâches avec un accent sur la simplicité, la fiabilité et la performance.
- [django-celery-results](https://github.com/celery/django-celery-results) - Celery result backend avec Django.
- [django-tasks](https://github.com/realOrangeOne/django-tasks) - Une mise en œuvre de référence et backport des travailleurs de fond et des tâches à Django, basée sur [DEP 14](https://www.djangoproject.com/weblog/2024/may/29/django-enhancement-proposal-14-background-workers/).
- [huey](https://github.com/coleifer/huey) - Une petite file d'attente pour Python, avec le support Django incluant la nouvelle `django.tasks` API.
- [django-ox](https://github.com/oxpull/django-ox) - Worker adossé à une base de données pour le framework Tâches de Django, avec une enquête transactionnelle, des relevés, des tâches récurrentes et aucun courtier à exécuter.
- [django-absurd](https://github.com/lincolnloop/django-absurd) - Intégration Django pour Absurd, un système de workflow durable postgres-natif.

### Modèles
- [django-components](https://github.com/django-components/django-components/) - Une façon de créer des composants de gabarit réutilisables simples dans Django.
- [django-template-partials](https://github.com/carltongibson/django-template-partials/) - Réutilisable nommé partiels en ligne pour le langage de modèle Django.
- [slippers](https://mitchel.me/slippers/) - Construire des composants réutilisables dans Django sans écrire une seule ligne de Python.
- [JinjaX](https://jinjax.scaletti.dev/) - Pouvoirs super composants pour vos modèles Jinja.
- [django-cotton](https://django-cotton.com/) - Au revoir. `{% raw %}{%{% endraw %} extends, block, include {% raw %}%}{% endraw %}`Bonjour. `<c-component />`. Apporter la composition moderne de l'interface utilisateur à Django.
- [htpy](https://htpy.dev/) - htpy est une bibliothèque qui rend l'écriture HTML en Python simple amusant et efficace, sans langage de modèle.
- [django-suspense](https://github.com/paqstd-dev/django-suspense) - Facile à afficher dans les modèles jusqu'à ce que les enfants aient terminé le chargement (comme React).

### Essais
- [django-debug-toolbar](https://github.com/django-commons/django-debug-toolbar/) - Panneaux configurables pour déboguer les requêtes/réponses.
- [pytest-django](https://github.com/pytest-dev/pytest-django) - Utilisez les fonctionnalités pytest dans Django.
- [django-test-migrations](https://github.com/wemake-services/django-test-migrations) - Tester le schéma de django et les migrations de données, y compris l'ordre des migrations.
- [django-test-plus](https://github.com/revsys/django-test-plus/) - Ajouts utiles au TestCase par défaut de Django.
- [factory-boy](https://github.com/FactoryBoy/factory_boy) - Remplacement des appareils d'essai.
- [django-waffle](https://github.com/django-waffle/django-waffle) - Une tondeuse pour Django.
- [model-bakery](https://github.com/model-bakers/model_bakery) - Usine d'objets pour Django (renom du projet Model Mommy).
- [django-fakery](https://github.com/fcurella/django-fakery) - Une implémentation facile à utiliser des méthodes de création pour Django, soutenue par Faker.
- [django-pattern-library](https://github.com/torchbox/django-pattern-library) - Générateur de bibliothèque modèle pour modèles Django, pour aider à tester les composants d'interface utilisateur.
- [storybook-django](https://github.com/torchbox/storybook-django) - Développez les composants d'interface utilisateur Django isolément, avec Storybook.

### URLs
- [dj-database-url](https://github.com/jazzband/dj-database-url) - URL de la base de données.
- [urlman](https://github.com/andrewgodwin/urlman) - Une meilleure façon de faire des URL pour les modèles Django.
- [django-robots](https://github.com/jazzband/django-robots) - C'est une application Django de base pour gérer les robots. fichiers txt suivant le protocole d'exclusion des robots, complétant l'application Django Plan du site contrib.
- [django-redirects](https://github.com/fabiocaccamo/django-redirects) - Redirige comme ils devraient l'être, avec un contrôle total.

### Utilisateur
- [django-allauth](https://github.com/pennersr/django-allauth/) - Amélioration de l'enregistrement des utilisateurs, y compris l'authentification sociale.
- [django-allauth-ui](https://github.com/danihodovic/django-allauth-ui/) - Des modèles plus beaux pour django-allauth.
- [django-improved-user](https://github.com/jambonrose/django-improved-user) - Un utilisateur Django personnalisé qui authentifie par e-mail. Suivre les meilleures pratiques en matière d'identité et d'authentification.
- [django-organizations](https://github.com/bennylope/django-organizations/) - Les comptes multi-utilisateurs pour les projets Django.
- [django-cas-ng](https://github.com/django-cas-ng/django-cas-ng) - Django-cas-ng est Django CAS (Service central d'authentification) 1.0/2.0/3.0 bibliothèque client pour soutenir SSO (Single Sign On) et Single Logout (SLO).
- [django-guest-user](https://github.com/julianwachholz/django-guest-user) - Permettre aux visiteurs d'utiliser votre site comme un utilisateur régulier et de s'enregistrer plus tard.

### Vues
- [django-braces](https://github.com/brack3t/django-braces) - Mélanges réutilisables et génériques.
- [django-easy-audit](https://github.com/soynatan/django-easy-audit) - Suivre les actions de l'utilisateur.
- [django-extra-views](https://github.com/AndrewIngram/django-extra-views) - Vues génériques extra-classées.
- [django-stronghold](https://github.com/mgrouchy/django-stronghold) - Fait toutes vos vues Django login par défaut_nécessaire.
- [neapolitan](https://github.com/carltongibson/neapolitan) - Vue rapide CRUD pour Django.

## Outils de développement

Outils autonomes qui aident à développer des projets Django.

### Modèles
- [curlylint](https://www.curlylint.org/) - Modèles HTML expérimentaux pour Jinja, Nunjucks, modèles Django, Twig, Liquid.
- [djhtml](https://github.com/rtts/djhtml) - Django/Jinja modèle indenter.
- [djlint](https://www.djlint.com/) - Modèles Lint & Format HTML.

### Analyse statique
- [django-orm-lens](https://github.com/FROWNINGdev/django-orm-lens) - Analyse statique au niveau du modèle : diagrammes ER, détection N+1, dérive schématique et rayon de souffle en CI, sans base de données ou démarrage Django.

## Python Packages

_Une courte liste de paquets Python qui fonctionnent bien avec Django._

- [black](https://github.com/psf/black) - Code Python sans compromis pour la matière.
- [coveragepy](https://github.com/coveragepy/coveragepy) - Mesure de la couverture du code.
- [faker](https://github.com/joke2k/faker) - Faker est un paquet Python qui génère de fausses données pour vous.
- [pillow](https://github.com/python-pillow/Pillow) - Python Imaging Library.
- [pytest](https://github.com/pytest-dev/pytest/) - Cadre d'essai.
- [python-decouple](https://github.com/HBNetwork/python-decouple) - Séparation stricte des paramètres du code.
- [python-slugify](https://github.com/un33k/python-slugify) - Retourne les limaces unicode.
- [sentry-python](https://github.com/getsentry/sentry-python) - Erreur lors de la déclaration de SDK.
- [python-socketio](https://github.com/miguelgrinberg/python-socketio) - Implémentation Python de la Socket. Autres_ client et serveur en temps réel. [(create Socket.io Django server instance)](https://python-socketio.readthedocs.io/en/latest/server.html?highlight=django#creating-a-server-instance)
- [Ruff](https://github.com/astral-sh/ruff) - Un linter Python extrêmement rapide et un code de matière, écrit en Rust.

## Ressources

### Ressources officielles
<!--lint ignore double-link-->
- [Project Website](https://www.djangoproject.com/) - Site officiel de Django.
- [Documentation](https://docs.djangoproject.com/en/dev/) - Documentation complète pour toutes les versions de Django.
- [Polls Tutorial](https://docs.djangoproject.com/en/dev/intro/tutorial01/) - Construire un tutoriel de sondages tout en apprenant Django internes.
- [Source Code](https://github.com/django/django/) - Il était sur GitHub.

### Éducation
- [Django Girls Tutorial](https://tutorial.djangogirls.org/en/) - Utilisez des vues basées sur la fonction pour construire une application de blog.
- [LearnDjango](https://learndjango.com/) - Tutoriels et cours premium sur Django et Django REST Framework.
- [Adam Johnson](https://adamj.eu/tech/) - Adam est au Conseil technique de Django et écrit régulièrement des tutoriels.
- [Photon Designer - Django tutorials](https://photondesigner.com/articles) - tutoriels Django de Tom Dekan sur la façon de construire simplement des applications Django - de la façon de construire un messager instantané avec Django, ajouter une recherche instantanée, à utiliser Google Drive comme une base de données. Mise à jour régulière.
- [TestDriven](https://testdriven.io/blog/) - Plusieurs tutoriels spécifiques à Django sur des sujets comme Docker, les paiements, et plus encore.
- [Classy Class-Based Views](https://ccbv.co.uk/) - Description détaillée des méthodes/propriétés/attributs pour chaque vue générique fondée sur la classe.
- [Classy Django REST Framework](http://www.cdrf.co) - Descriptions détaillées avec des méthodes/attributs pour les vues et les sérialisateurs basés sur les classes DRF.
- [Simple is Better than Complex](https://simpleisbetterthancomplex.com/) - Site Web régulièrement mis à jour avec de nombreux tutoriels et conseils sur Django.
- [Full Stack Python's Django Page](https://www.fullstackpython.com/django.html) - Explication de la philosophie de Django et liens vers d'autres ressources et tutoriels.
- [RealPython](https://realpython.com/tutorials/django/) - De nombreux tutoriels de haute qualité sur Django.
- [Mozilla Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django) - Créez une application de bibliothèque de prêt.
- [Matt Layman](https://www.mattlayman.com) - Didacticiels réguliers et plongées profondes sur des sujets Django.
- [Django Styleguide](https://github.com/HackSoftware/Django-Styleguide) - Guide de style pour Django avec les meilleures pratiques et exemples.
- [Django Template Tags and Filters](https://www.djangotemplatetagsandfilters.com/) - Docs supplémentaires sur les 57 filtres de gabarit intégrés de Django et 27 balises de gabarit.
- [Django for Everybody](https://www.dj4e.com/) - Un cours complet pour les débutants de webdev axé sur Django.
- [CS50W](https://cs50.harvard.edu/web/2020/) - Le cours d'introduction au développement web de l'Université Harvard explique Django comme cadre de référence.
- [Better Simple](https://www.better-simple.com/blog/django/) - Articles de Tim Schilling sur le développement de Django, les meilleures pratiques, et l'écosystème de Django.

### Communauté
<!--lint disable double-link-->
- [Django Forum](https://forum.djangoproject.com/) - Conseil officiel du Discours.
- [Community Page](https://www.djangoproject.com/community/) - Avec des fils de blogs communautaires, des emplois, et plus encore.
- [Local Django Communities Page](https://www.djangoproject.com/community/local/) - Avec des événements locaux partout dans le monde.
- [Django Users Google Group](https://groups.google.com/forum/#!forum/django-users/) - Comité de discussion très actif pour les questions/réponses.
- [Developers Google Group](https://groups.google.com/forum/#!forum/django-developers/) - Pour des contributions à Django.
- [Mastodon](https://fosstodon.org/@django) - Pour les annonces officielles sur les mises à jour, les corrections de sécurité, etc.
- [X (formerly Twitter)](https://x.com/djangoproject/) - Pour les annonces officielles sur les mises à jour, les corrections de sécurité, etc.
- [Discord Server](https://discord.com/invite/xcRH6mN4fa) - Communauté Django Discord.
- Chaîne IRC - Dialoguez avec d'autres utilisateurs de Django à irc://irc.freenode.net/django.
- [Djangonaut Space](https://djangonaut.space) - Programme gratuit de mentorat par les pairs pour la communauté Django afin de lancer les gens dans l'univers des contributions open source.
<!--lint enable double-link-->

### Conférences

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

### Conseils d'emploi

- [Django Job Board](https://djangojobboard.com/) - Un conseil d'emploi Django qui regroupe également d'autres conseils d'emploi. Anciennement Django News Jobs.
- [Django Jobs](https://djangojobs.net) - Offres d'emploi Django pour embaucher des développeurs Django Python.
- [Python.org Job Boards](https://www.python.org/jobs/) - Bien que non exclusivement pour Django, ce conseil d'emploi est hébergé par le site officiel de Python et propose une gamme de possibilités d'emploi liées à Python et Django.

### Bulletins

- [Django News](https://django-news.com) - Bulletin hebdomadaire sur les annonces, articles, projets et conférences.

### Podcasts

- [Django Chat](https://djangochat.com/) - Un podcast hebdomadaire de William Vincent et Django Fellow Carlton Gibson avec des discussions sur les concepts de base de Django et des invités réguliers.
- [Django Brew](https://djangobrew.com/) - Un podcast amusant à la caféine sur le cadre web de Django par Adam Hill et Sangeeta Jadoonanan.
- [TalkPython](https://talkpython.fm/) - Le podcast Python leader avec des épisodes occasionnels sur Django.
- [Running in Production](https://runninginproduction.com/tags/django) - Plus actif, mais un grand arriéré d'épisodes sur les piles de Django tech.

### Vidéos

- [DjangoTV](https://djangotv.com) - Votre source pour les vidéos et tutoriels de la conférence Django.
- [PyVideo](https://pyvideo.org) - PyVideo est un index des médias liés à Python.

### Livres
Pour une liste complète des livres imprimés, consultez [DjangoBook.com](https://djangobook.com/).

_M. Django 5_
- [Django for APIs, Fifth Edition](https://learndjango.com/courses/django-for-apis/)
- [Boost Your Django DX](https://adamchainz.gumroad.com/l/byddx)
- [Django 5 By Example](https://www.packtpub.com/en-us/product/django-5-by-example-9781805125457)
- [Django in Action](https://www.manning.com/books/django-in-action)
- [Django for Beginners, Fifth Edition](https://learndjango.com/courses/django-for-beginners/)

## Hébergement

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

### IaaS (Infrastructure en tant que service)
- [Digital Ocean](https://www.digitalocean.com)
- [Linode](https://www.linode.com)
- [Amazon Lightsail](https://aws.amazon.com/lightsail/)
- [Hetzner](https://www.hetzner.com)

### Services de déploiement
_Services hébergés qui déploient votre application sur des serveurs que vous louez ailleurs._
- [Appliku](https://appliku.com) - Service de déploiement Django pour serveurs sur DigitalOcean, Hetzner, AWS et Linode.
- [DeployHQ](https://www.deployhq.com) - Déployez de Git à vos serveurs sur SSH, SFTP ou S3, avec build steps and runbacks.

### Déploiement autonome
_Outils open source qui déploient votre application sur les serveurs que vous possédez._
- [Coolify](https://coolify.io) - Self-hosted PaaS avec une interface utilisateur web pour les applications et bases de données Docker, avec un plan de contrôle cloud payant optionnel.
- [Dokploy](https://dokploy.com) - PaaS auto-installé avec une interface web, construite sur Docker et Traefik, avec un plan de contrôle du cloud payant en option.
- [CapRover](https://caprover.com) - Self-hosted PaaS avec une interface utilisateur web et des applications en un clic, construit sur Docker Swarm.
- [Kamal](https://kamal-deploy.org) - Déployer des conteneurs sur n'importe quel serveur sur SSH avec aucun temps d'arrêt, de Basecamp.
- [Dokku](https://dokku.com) - PaaS alimentée par Docker avec un style Heroku git push se déploie.
- [Piku](https://github.com/piku/piku) - Le PaaS de style Heroku pour la poussée git se déploie sur un seul serveur.

## Projets

### Chaudière
- [cookiecutter-django](https://github.com/cookiecutter/cookiecutter-django/) - Un projet de démarrage corsé, hautement personnalisable.
- [django-base-site](https://github.com/epicserve/django-base-site/) - Un site Django avec de nombreux paquets tiers communs préinstallés.
- [djangox](https://github.com/wsvincent/lithium/) - Les batteries comprenaient le projet de démarrage pour Pip, Pipenv ou Docker.
- [django-docker-template](https://github.com/amerkurev/django-docker-template) - Dockerized Django avec Postgres, Gunicorn, et Traefik (avec le renouvellement automatique Let's Encrypt).
- [django-startproject](https://github.com/jefftriplett/django-startproject) - Modèle de projet de démarrage Django avec piles.
- [wemake-django-template](https://github.com/wemake-services/wemake-django-template/) - Modèle Django de saignée axé sur la qualité et la sécurité du code.
- [cookiecutter-vue-django](https://github.com/ilikerobots/cookiecutter-vue-django) - Django + Projet de démarrage Vue fusionnant les modèles SFC et Django Vue.
- [sidewinder](https://github.com/stribny/sidewinder/) - Un kit de démarrage Django qui se concentre sur les bonnes par défaut, l'expérience du développeur et le déploiement.
- [Falco](https://github.com/falcopackages/falco-cli) - Améliorez votre expérience de développeur Django : CLI et Guides pour le développeur Django moderne.
- [BH2](https://codeberg.org/trey/bh2) - Obtenir un nouveau site Django commencé dans un Djiffy
- [django-react-boilerplate](https://github.com/vintasoftware/django-react-boilerplate) - A Django, React, Tailwind, Webpack projet chaufferie plaque

### Projets ouverts
- [Blog app with users and forms](https://github.com/wsvincent/djangoforbeginners/tree/master/ch7-blog-app-with-users/)
- [Newspaper app with custom user model, full user auth](https://github.com/wsvincent/djangoforbeginners/tree/master/ch15-comments)
- [Behavior-Driven Development with Aloe](https://github.com/testdrivenio/django-aloe-bdd/)
- [Image Sharing Blog](https://github.com/MeNsaaH/soMedia)
- [Bootcamp: An enterprise social network](https://github.com/vitorfs/bootcamp)
- [Zulip](https://github.com/zulip/zulip/) - Chat d'équipe open-source.
- [django-job-portal](https://github.com/manjurulhoque/django-job-portal) - Application de portail de travail en utilisant Django.
- [Built with Django](https://builtwithdjango.com) - Liste des projets de Django.
- [PostHog](https://github.com/PostHog/posthog) - Analyse de produits open-source.
- [HyperKitty](https://gitlab.com/mailman/hyperkitty) - Une interface web pour accéder aux archives GNU Mailman v3.
- [Healthchecks](https://github.com/healthchecks/healthchecks) - Un outil de surveillance Cron écrit dans Python & Django.
- [Flagsmith](https://github.com/Flagsmith/flagsmith) - Caractéristiques open-source Flagging, Remote Config et AB testing.
- [OpenContracts](https://github.com/Open-Source-Legal/OpenContracts) - Plateforme d'analyse de documents de qualité Enterprise qui combine l'analyse automatisée PDF, l'intégration vectorielle et l'intégration LLM.
- [Baserow](https://github.com/baserow/baserow) - Open source base de données sans code et Airtable alternative construit avec Django et Vue.js.
- [Django CRM Admin](https://github.com/DjangoCRM/django-crm) - Open source Python CRM construit entièrement sur Django Admin Site.
- [linkding](https://github.com/sissbruecker/linkding) - Gestionnaire de signets auto-organisé qui est conçu pour être minimal, rapide et facile à configurer en utilisant Docker.
- [pythonic-news](https://github.com/sebst/pythonic-news) - Un clone de Hacker News.
- [Revel](https://github.com/letsrevel/revel-backend) - Gestion d'événements auto-organisés et plate-forme de billetterie avec les organisations, contrôle des participants par questionnaire, enregistrement des QR et paiements à bande.
- [venueless](https://github.com/venueless/venueless) - Plateforme pour les événements en ligne et hybrides avec flux live, chat, et salles vidéo, de l'équipe de Pretix.
- [pretix](https://github.com/pretix/pretix) - Demande de billetterie pour des conférences, festivals, concerts et autres événements.
- [pretalx](https://github.com/pretalx/pretalx) - Outil de planification des conférences pour l'appel à communications, l'horaire et la gestion des conférenciers.
- [ioe](https://github.com/zhtyyx/ioe) - Gestion des magasins de détail avec inventaire, caisse de vente et comptes membres.

## Jango REST Cadre

_La façon la plus populaire de construire des API web avec Django._

### Ressources du DRF

<!--lint disable double-link-->
- [Official Documentation](https://www.django-rest-framework.org/)
- [DRF Source Code](https://github.com/encode/django-rest-framework)
- [awesome-django-rest-framework](https://github.com/nioperas06/awesome-django-rest-framework)
<!--lint enable double-link-->

### Tutoriels DRF

<!--lint ignore double-link-->
- [Official REST Framework - A Beginner's Guide](https://learndjango.com/tutorials/official-django-rest-framework-tutorial-beginners)
- [Building APIs with Django and DRF](https://books.agiliq.com/projects/django-api-polls-tutorial/en/latest/)
- [DRF with React](https://www.valentinog.com/blog/drf/)
- [Making React and Django play well together](https://fractalideas.com/blog/making-react-and-django-play-well-together/)

## Cravate

_Wagtail, le puissant CMS pour les sites modernes._

### Ressources de Wagtail
<!--lint disable double-link-->
- [Official website](https://wagtail.org/)
- [Developer documentation](https://docs.wagtail.org/en/stable/)
- [User documentation](https://guide.wagtail.org/en-latest/)
- [Wagtail Source Code](https://github.com/wagtail/wagtail/)
- [awesome-wagtail](https://github.com/wagtail/awesome-wagtail)
- [This week in Wagtail](https://wagtail.org/this-week-in-wagtail/) - Un (la plupart) email hebdomadaire avec les mises à jour de l'équipe de base de Wagtail.
- [Wagtail Space](https://www.wagtail.space/) - Conférences Wagtail dans le monde entier.
- [Wagtail events](https://wagtail.org/events/) - Événements Wagtail en ligne et en personne.
<!--lint enable double-link-->

Un moyen pratique de parcourir et de rechercher les dépôts de cette liste est disponible à [awesome.lvtd.dev/lists/awesome-django](https://awesome.lvtd.dev/lists/awesome-django/).
