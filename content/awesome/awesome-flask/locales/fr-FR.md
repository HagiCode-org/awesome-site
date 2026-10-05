# Awesome Flask [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Un micro-cadre web pour Python et l'écosystème d'extension autour.

Tutoriels, conférences et vidéos sur cette liste sont gratuits. Les cours payés ne sont pas acceptés.

<p align="right">
  <a href="https://flask.palletsprojects.com/">
    <img src="flask-icon.svg" width="72" alt="Flask">
  </a>
</p>

## Sommaire

- [Ressources officielles](#official-resources)
- [Extensions](#extensions)
  - [Administration](#admin)
  - [API](#apis)
  - [Authentification](#auth)
  - [Cache](#cache)
  - [Bases de données](#databases)
  - [Outils de développement](#developer-tools)
  - [Courriel](#email)
  - [Formulaires et validation](#forms-and-validation)
  - [Recherche en texte intégral](#full-text-search)
  - [Sécurité](#security)
  - [Demandes de tâches](#task-queues)
  - [Utilitaires](#utils)
- [Ressources](#resources)
  - [Communauté](#community)
  - [Tutoriels](#tutorials)
  - [Livres](#books)
  - [Conférences](#talks)
  - [Vidéos](#videos)
- [Projets](#projects)
  - [Modèles de démarrage](#boilerplates)
  - [Projets open source](#open-source-projects)
- [Hébergement](#hosting)

## Ressources officielles

- [Flask](https://flask.palletsprojects.com/) - Documentation officielle pour les versions actuelles et passées.
- [Flaskr Tutorial](https://flask.palletsprojects.com/tutorial/) - Tutoriel officiel qui construit un petit blog.
- [Source Code](https://github.com/pallets/flask) - Flacon lui-même, hébergé par Palettes.
- [Pallets-Eco](https://github.com/pallets-eco) - Les extensions communautaires sont maintenues à côté des projets de base.
- [Quart](https://github.com/pallets/quart) - homologue ASGI officiel de Flask, avec une API compatible.

## Extensions

### Administration

- [Flask-Admin](https://github.com/pallets-eco/flask-admin) - Interface administrative extensible pour la gestion des données d'application.

### API

- [APIFlask](https://github.com/apiflask/apiflask) - Cadre d'API web avec validation de guimauve et génération OpenAPI.
- [Connexion](https://github.com/spec-first/connexion) - Spec-first OpenAPI framework qui peut fonctionner sur Flask.
- [Eve](https://github.com/pyeve/eve) - Cadre API REST alimenté par Flask et MongoDB.
- [Flasgger](https://github.com/flasgger/flasgger) - OpenAPI et Swagger UI pour les vues Flask.
- [Flask-Rebar](https://github.com/plangrid/flask-rebar) - Flacon, guimauve et OpenAPI combinés pour les services REST.
- [Flask-RESTful](https://github.com/flask-restful/flask-restful) - Aides légères pour la construction des API REST.
- [Flask-RESTX](https://github.com/python-restx/flask-restx) - Fourche communautaire de Flask-RESTPlus avec documentation Swagger.
- [flask-smorest](https://github.com/marshmallow-code/flask-smorest) - Cadre Marshmallow-premier REST avec OpenAPI automatique.

### Authentification

- [Authlib](https://github.com/authlib/authlib) - OAuth 1, OAuth 2, et OpenID Connect clients et serveurs.
- [Authomatic](https://github.com/authomatic/authomatic) - OAuth et client OpenID.
- [Flask-Dance](https://github.com/singingwolfboy/flask-dance) - OAuth consommateur avec des fournisseurs intégrés tels que GitHub et Google.
- [Flask-HTTPAuth](https://github.com/miguelgrinberg/Flask-HTTPAuth) - Authentification de base, digérer et jeton pour les routes.
- [Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended) - Authentification JWT avec jetons rafraîchissants et revendications à grain fin.
- [Flask-Login](https://github.com/maxcountryman/flask-login) - Gestion des connexions utilisateur basée sur la session.
- [Flask-Praetorian](https://github.com/dusktreader/flask-praetorian) - Authentification JWT et autorisation basée sur le rôle pour les API.
- [Flask-Pundit](https://github.com/anurag90x/flask-pundit) - Autorisation fondée sur des politiques inspirée de Rails Pundit.
- [Flask-Security](https://github.com/pallets-eco/flask-security) - Gestion des comptes, authentification et autorisation. Continue Flask-Sécurité-Trop.
- [Flask-Session](https://github.com/pallets-eco/flask-session) - Sessions côté serveur pour Flask.
- [Flask-User](https://github.com/lingthio/Flask-User) - Enregistrement utilisateur personnalisable, connexion et gestion de compte.

### Cache

- [Flask-Caching](https://github.com/pallets-eco/flask-caching) - Prise en charge avec plusieurs moteurs.

### Bases de données

- [Flask-Alembic](https://github.com/pallets-eco/flask-alembic) - Des migrations alembiques ont été connectées à une base de données Flask-SQLAlchemy.
- [Flask-Migrate](https://github.com/miguelgrinberg/Flask-Migrate) - Migrations de bases de données pour Flask-SQLAlchemy via Alambic.
- [Flask-MongoEngine](https://github.com/MongoEngine/flask-mongoengine) - Intégration de MongoEngine avec support WTForms.
- [Flask-PyMongo](https://github.com/mongodb-labs/flask-pymongo) - Intégration de PyMongo pour MongoDB.
- [Flask-SQLAlchemy](https://github.com/pallets-eco/flask-sqlalchemy) - Intégration SQLAlchemy pour Flask.
- [Advanced Alchemy](https://github.com/litestar-org/advanced-alchemy) - SQLAlchemy compagnon avec des dépôts, des aides alembiques, et une extension Flask de première partie.

### Outils de développement

- [Elastic APM](https://github.com/elastic/apm-agent-python) - Surveillance du rendement de l'application pour Flask.
- [Flask-DebugToolbar](https://github.com/pallets-eco/flask-debugtoolbar) - Barre d'outils In-browser debug, portée depuis Django.
- [Flask-MonitoringDashboard](https://github.com/flask-dashboard/Flask-MonitoringDashboard) - Surveillance automatique des performances pour les services Flask.
- [Flask-Testing](https://github.com/jarus/flask-testing) - Aides de test unitaire pour les applications Flask.
- [Mixer](https://github.com/klen/mixer) - Usine d'objets pour modèles SQLAlchemy et Django.
- [nplusone](https://github.com/jmcarp/nplusone) - Détecte les requêtes N+1 lorsque vous utilisez Flask-SQLAlchemy.
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-python-contrib) - Instruments de traçage et de mesure, y compris Flask.
- [pytest-flask](https://github.com/pytest-dev/pytest-flask) - Accessoires Pytest pour applications Flask.
- [Sentry](https://github.com/getsentry/sentry-python) - Erreur de suivi SDK avec une intégration Flask.

### Courriel

- [Flask-Mail](https://github.com/pallets-eco/flask-mail) - SMTP envoi d'email pour Flask.
- [Flask-Mailman](https://github.com/waynerv/flask-mailman) - Port du système de courrier de Django vers Flask.

### Formulaires et validation

- [Flask-Marshmallow](https://github.com/marshmallow-code/flask-marshmallow) - Intégration de Marshmallow pour la sérialisation et la validation.
- [Flask-Pydantic](https://github.com/pallets-eco/flask-pydantic) - Validation pydantique pour les vues de Flask.
- [Flask-WTF](https://github.com/pallets-eco/flask-wtf) - Intégration WTForms avec CSRF, téléchargement de fichiers et reCAPTCHA.

### Recherche en texte intégral

- [flask-msearch](https://github.com/honmaple/flask-msearch) - Recherche en texte intégral pour Flask, avec support Whoosh.
- [SQLAlchemy-Searchable](https://github.com/falcony-io/sqlalchemy-searchable) - Recherche en texte intégral de modèles SQLAlchemy sur PostgreSQLTM.

### Sécurité

- [Flask-Bcrypt](https://github.com/maxcountryman/flask-bcrypt) - Cryptez le hachage du mot de passe.
- [Flask-CORS](https://github.com/corydolphin/flask-cors) - Soutien au partage des ressources entre les pays d'origine.
- [Flask-Limiter](https://github.com/alisaifee/flask-limiter) - Limiter le taux pour les routes de Flask.
- [Flask-SeaSurf](https://github.com/maxcountryman/flask-seasurf) - Protection CSRF pour Flask.
- [Flask-Talisman](https://github.com/wntrblm/flask-talisman) - Exécution HTTPS et en-têtes de sécurité.

### Demandes de tâches

- [Celery](https://github.com/celery/celery) - Tâches distribuées en file d'attente couramment utilisée avec Flask.
- [Dramatiq](https://github.com/Bogdanp/dramatiq) - Une alternative rapide à Celery, avec [Flask-Dramatiq](https://flask-dramatiq.readthedocs.io/) disponible.
- [Flask-RQ](https://github.com/pallets-eco/flask-rq) - Intégration Redis Queue (RQ) pour Flask et Quart.
- [Huey](https://github.com/coleifer/huey) - Petite file d'attente de tâches redis-backed.

### Utilitaires

- [Flask-Assets](https://github.com/miracle2k/flask-assets) - Intégration de Webassets pour regrouper et miner les fichiers statiques.
- [Flask-Babel](https://github.com/python-babel/flask-babel) - Internationalisation et localisation via Babel.
- [Flask-GoogleMaps](https://github.com/flask-extensions/Flask-GoogleMaps) - Intégrer Google Maps dans les modèles Flask.
- [flask-graphql](https://github.com/graphql-python/flask-graphql) - Prise en charge de GraphQL pour Flask.
- [Flask-HTMLmin](https://github.com/hamidfzm/Flask-HTMLmin) - Miniification HTML pour les réponses de Flask.
- [flask-jsonrpc](https://github.com/cenobites/flask-jsonrpc) - Soutien JSON-RPC pour Flask.
- [Flask-Moment](https://github.com/miguelgrinberg/Flask-Moment) - Moment.js aide pour les dates dans les modèles Jinja.
- [Flask-Paginate](https://github.com/lixxu/flask-paginate) - Aides à la pagination pour Flask.
- [flask-s3](https://github.com/e-dard/flask-s3) - Servir les actifs statiques de Flask d'Amazon S3.
- [Flask-SocketIO](https://github.com/miguelgrinberg/Flask-SocketIO) - Socket. Intégration IO pour Flask.
- [Frozen-Flask](https://github.com/Frozen-Flask/Frozen-Flask) - Congele une application Flask dans un site statique.

## Ressources

### Communauté

- [Discord](https://discord.gg/pallets) - Serveur communautaire de palettes. Utilisez les canaux d'aide Flask.
- [Reddit](https://www.reddit.com/r/flask/) - Du flocon sous-rouge.
- [Stack Overflow](https://stackoverflow.com/questions/tagged/flask) - Questions étiquetées`flask`.

### Tutoriels

- [The Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) - Série longue forme couvrant une application flasque complète.
- [Discover Flask](https://github.com/realpython/discover-flask) - Série de flasques pleine pile de Real Python.
- [Flaskr TDD](https://github.com/mjhea0/flaskr-tdd) - Introduction à Flask, développement axé sur les essais et JavaScript.

### Livres

- [Explore Flask](https://explore-flask.readthedocs.io/en/latest/) - Livre gratuit sur les motifs de Flask et la structure du projet.
- [Flask Web Development](https://www.oreilly.com/library/view/flask-web-development/9781491991725/) - O'Reilly livre de Miguel Grinberg qui construit une véritable application.

### Conférences

- [Advanced Flask Patterns](https://speakerdeck.com/mitsuhiko/advanced-flask-patterns) - Des motifs d'Armin Ronacher.
- [Flasky Goodness](https://speakerdeck.com/kennethreitz/flasky-goodness) - Parler par Kenneth Reitz.
- [Domain Driven Design with Flask](https://speakerdeck.com/mikedebo/domain-driven-design-dot-dot-dot-with-flask) - Appliquer les idées DDD dans Flask.

### Vidéos

- [PyVideo](https://pyvideo.org/search.html?q=flask) - Conférences avec le tag Flask.
- [Python Flask Tutorial](https://www.youtube.com/playlist?list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH) - Série complète d'applications web par Corey Schafer.

## Projets

### Modèles de démarrage

- [cookiecutter-flask](https://github.com/cookiecutter-flask/cookiecutter-flask) - Modèle de cookiecutter avec Bootstrap, Webpack et authentification.
- [fbone](https://github.com/imwilsonxu/fbone) - Squelette Flasque Classique avec une mise en page d'application structurée.
- [Flask-AppBuilder](https://github.com/dpgaspar/Flask-AppBuilder) - Constructeur d'applications rapides avec sécurité, auto CRUD, et graphiques.
- [Flask-Foundation](https://github.com/JackStouffer/Flask-Foundation) - Application de démarrage des meilleures pratiques.
- [uwsgi-nginx-flask-docker](https://github.com/tiangolo/uwsgi-nginx-flask-docker) - Image en plus avec uWSGI, Nginx et Flask.

### Projets open source

- [Apache Airflow](https://github.com/apache/airflow) - Plateforme à l'auteur, programmer et surveiller les flux de travail.
- [Apache Superset](https://github.com/apache/superset) - Plateforme d'exploration et de visualisation des données.
- [FlaskBB](https://github.com/flaskbb/flaskbb) - Logiciel de forum classique construit avec Flask.
- [Indico](https://github.com/indico/indico) - Système de gestion des événements développé au CERN.
- [PythonBuddy](https://github.com/ethanchewy/PythonBuddy) - Éditeur Python en ligne avec vérification de syntaxe en direct.
- [Redash](https://github.com/getredash/redash) - Interroger et visualiser les données provenant de nombreuses sources.
- [SecureDrop](https://github.com/freedomofpress/securedrop) - Système de soumission pour les salles de presse.
- [SimpleLogin](https://github.com/simple-login/app) - Email alias service qui protège les boîtes de réception personnelles.
- [SkyLines](https://github.com/skylines-project/skylines) - Base de données de suivi et de vol en direct pour planer.
- [Timesketch](https://github.com/google/timesketch) - Analyse scientifique concertée.

## Hébergement

- [Flask Deployment Options](https://flask.palletsprojects.com/en/stable/deploying/) - Notes officielles sur les serveurs et plateformes WSGI.
- [Fly.io](https://fly.io/docs/python/frameworks/flask/) - Déployez Flask près des utilisateurs sur Fly Machines.
- [Google Cloud Run](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service) - Hébergement de conteneurs qui fonctionne bien avec Flask.
- [PythonAnywhere](https://help.pythonanywhere.com/pages/Flask/) - Environnement Python hébergé avec un support Flask de première classe.
- [Render](https://render.com/docs/deploy-flask) - Services Web et travailleurs de fond pour Flask.
- [Zappa](https://github.com/zappa/Zappa) - Déployez des applications WSGI vers AWS Lambda et API Gateway.

## Contribution

Les suggestions sont les bienvenues. Veuillez lire [CONTRIBUTING.md](CONTRIBUTING.md) D'abord. Entrées historiques et non maintenues [archived.md](archived.md).
