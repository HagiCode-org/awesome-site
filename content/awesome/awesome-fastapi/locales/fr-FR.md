<!--lint disable double-link-->

# Awesome FastAPI | [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> Une liste de choses géniales liées à FastAPI.

[FastAPI](https://fastapi.tiangolo.com/) est un cadre web Python moderne, haute performance, inclus dans les batteries qui est parfait pour construire des API RESTful.

## Sommaire

- [Extensions tierces](#third-party-extensions)
  - [Administration](#admin)
  - [Authentification](#auth)
  - [Cybersécurité](#cybersecurity)
  - [Bases de données](#databases)
  - [Injection de la dépendance](#dependency-injection)
  - [Outils de développement](#developer-tools)
  - [Courriel](#email)
  - [Utilitaires](#utils)
- [Ressources](#resources)
  - [Ressources officielles](#official-resources)
  - [Ressources extérieures](#external-resources)
  - [Podcasts](#podcasts)
  - [Articles](#articles)
  - [Tutoriels](#tutorials)
  - [Conférences](#talks)
  - [Vidéos](#videos)
  - [Cours](#courses)
  - [Meilleures pratiques](#best-practices)
- [Hébergement](#hosting)
  - [PaaS](#paas)
  - [IaaS](#iaas)
  - [Sans serveur](#serverless)
- [Projets](#projects)
  - [Modèle de démarrage](#boilerplate)
  - [Images Docker](#docker-images)
  - [Projets open source](#open-source-projects)
- [Partenaires](#sponsors)

## Extensions tierces

### Administration

- [FastAdmin](https://github.com/vsdudakov/fastadmin) - Tableau de bord admin facile à utiliser pour FastAPI (également Flask et Django), inspiré par Django Admin.
- [FastAPI Admin](https://github.com/fastapi-admin/fastapi-admin) - Panneau d'administration fonctionnel qui fournit une interface utilisateur pour effectuer des opérations CRUD sur vos données. Actuellement, il ne fonctionne qu'avec l'ORM Tortoise.
- [FastAPI Amis Admin](https://github.com/amisadmin/fastapi-amis-admin) - Un cadre d'administration FastAPI haute performance, efficace et facilement extensible.
- [Piccolo Admin](https://github.com/piccolo-orm/piccolo_admin) - Un GUI administratif puissant et moderne, utilisant le Piccolo ORM.
- [SQLAlchemy Admin](https://github.com/smithyhq/sqladmin) - Panneau d'administration pour FastAPI/Starlette qui fonctionne avec les modèles SQLAlchemy.
- [Starlette Admin](https://github.com/jowilf/starlette-admin) - Cadre Admin pour FastAPI/Starlette, supportant SQLAlchemy, SQLModel, MongoDB et ODMantic.


### Authentification

- [AuthX](https://github.com/yezz123/AuthX) - Authentifications personnalisables et gestion d'Oauth2 pour FastAPI.
- [FastAPI Auth](https://github.com/dmontagu/fastapi-auth) - Pluggable auth qui prend en charge le flux de mot de passe OAuth2 avec l'accès JWT et rafraîchir les jetons.
- [FastAPI Azure Auth](https://github.com/Intility/fastapi-azure-auth) - Authentification AD Azure pour vos API avec support de locataire unique et multi.
- [FastAPI Casbin Auth](https://github.com/apache/casbin-python-fastapi-casbin-auth) - Autorisation qui prend en charge divers modèles de contrôle d'accès comme RBAC, ReBAC et ABAC par Casbin.
- [FastAPI Cloud Auth](https://github.com/tokusumi/fastapi-cloudauth) - Intégration simple entre les services d'authentification FastAPI et Cloud (AWS Cognito, Auth0, Firebase Authentication).
- [FastAPI Login](https://github.com/maxrdu/fastapi_login) - Gestion et authentification des comptes [Flask-Login](https://github.com/maxcountryman/flask-login)) .
- [FastAPI JWT Auth](https://github.com/IndominusByte/fastapi-jwt-auth) - JWT auth (d'après [Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended)) .
- [FastAPI Permissions](https://github.com/holgi/fastapi-permissions) - Autorisations au niveau de la ligne.
- [FastAPI Security](https://github.com/jacobsvante/fastapi-security) - Implémente l'authentification et l'autorisation comme dépendances dans FastAPI.
- [FastAPI Simple Security](https://github.com/mrtolkien/fastapi_simple_security) - Sécurité hors-de-la-box API clé gérable grâce aux opérations de chemin.
- [FastAPI Users](https://github.com/fastapi-users/fastapi-users) - Gestion des comptes, authentification, autorisation.
- [FastAPI Zitadel Auth](https://github.com/cleanenergyexchange/fastapi-zitadel-auth) - OAuth2 utilisant la plate-forme IAM [Zitadel](https://github.com/zitadel/zitadel).

### Cybersécurité

- [FastAPI Guard](https://github.com/rennf93/fastapi-guard) - Limitation des taux, interdiction automatique des IP, détection d'attaque de pénétration, liste blanche/liste noire (pays, IPs, fournisseurs de cloud), filtrage d'agents utilisateurs, géolocalisation, intégration Redis pour la persistance, et plus encore.
- [secure](https://github.com/TypeError/secure) - Définir et appliquer les en-têtes de sécurité HTTP de manière cohérente dans les applications FastAPI en utilisant le middleware ASGI et un objet de configuration unique.

### Bases de données

#### ORM

- [Edgy ORM](https://github.com/dymmond/edgy) - Les bases de données complexes sont simples.
- [FastAPI SQLAlchemy](https://github.com/mfreeborn/fastapi-sqlalchemy) - Intégration simple entre FastAPI et [SQLAlchemy](https://www.sqlalchemy.org/).
- [Fastapi-SQLA](https://github.com/dialoguemd/fastapi-sqla) - Extension SQLAlchemy pour FastAPI avec support pour pagination, asyncio et pytest.
- [FastAPIwee](https://github.com/Ignisor/FastAPIwee) - Une façon simple de créer l'API REST basée sur [PeeWee](https://github.com/coleifer/peewee) modèles.
- [FastSQLA](https://github.com/hadrien/FastSQLA) - Extension Async SQLAlchemy 2.0+ pour FastAPI avec support SQLModel, pagination intégrée et plus encore.
- [GINO](https://github.com/python-gino/gino) - Un ORM asynchrone léger construit sur le noyau SQLAlchemy pour Python asyncio.
  - [FastAPI Example](https://github.com/leosussan/fastapi-gino-arq-uvicorn)
- [ORM](https://github.com/encode/orm) - Un ORG async.
- [ormar](https://collerek.github.io/ormar/) - Ormar est un ORM async qui utilise la validation pydantique et peut être utilisé directement dans les requêtes et réponses FastAPI donc vous êtes laissé avec un seul ensemble de modèles à maintenir. Les migrations alambiques sont incluses.
  - [FastAPI Example](https://collerek.github.io/ormar/latest/fastapi/) - Utiliser FastAPI avec ormar.
- [Piccolo](https://github.com/piccolo-orm/piccolo) - Un async ORM et un constructeur de requêtes, supportant Postgres et SQLite, avec des batteries (migrations, sécurité, etc.).
  - [FastAPI Examples](https://github.com/piccolo-orm/piccolo_examples) - Utiliser FastAPI avec Piccolo.
- [Tortoise ORM](https://tortoise.github.io) - Un asyncio ORM facile à utiliser (Object Relational Mapper) inspiré de Django.
  - [FastAPI Example](https://tortoise.github.io/examples/fastapi.html) - Un exemple de l'intégration Tortoise-ORM FastAPI.
  - [Tutorial: Setting up Tortoise ORM with FastAPI](https://web.archive.org/web/20200523174158/https://robwagner.dev/tortoise-fastapi-setup/)
  - [Aerich](https://github.com/tortoise/aerich) - Outils de migration Tortoise ORM.
- [Saffier ORM](https://github.com/tarsil/saffier) - Le seul ORM Python dont vous aurez jamais besoin.
- [SQLModel](https://sqlmodel.tiangolo.com/) - SQLModel (qui est alimenté par Pydantic et SQLAlchemy) est une bibliothèque pour interagir avec les bases de données SQL du code Python, avec les objets Python.

#### Constructeurs de requêtes

- [asyncpgsa](https://github.com/CanopyTax/asyncpgsa) - Un emballage autour [asyncpg](https://github.com/MagicStack/asyncpg) à utiliser avec [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/).
- [Databases](https://github.com/encode/databases) - Constructeur de requête SQL Async qui fonctionne sur le dessus de la [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/) langue d'expression.
- [PyPika](https://github.com/kayak/pypika) - Un constructeur de requêtes SQL qui expose toute la richesse du langage SQL.

#### ODMs

- [Beanie](https://github.com/BeanieODM/beanie) - Asynchrone Python ODM pour MongoDB, basé sur [Motor](https://motor.readthedocs.io/en/stable/) et [Pydantic](https://pydantic.dev/docs/), qui prend en charge les migrations de données et de schémas hors de la boîte.
- [MongoEngine](https://github.com/MongoEngine/mongoengine) - A Document-Object Mapper (penser ORM, mais pour les bases de données de documents) pour travailler avec MongoDB de Python.
- [Motor](https://motor.readthedocs.io/) - Pilote Python asynchrone pour MongoDB.
- [ODMantic](https://art049.github.io/odmantic/) - AsyncIO MongoDB ODM intégré avec [Pydantic](https://pydantic.dev/docs/).
- [PynamoDB](https://github.com/pynamodb/PynamoDB) - Une interface pythonique avec la DynamoDB d'Amazon.

#### Autres outils

- [Pydantic-SQLAlchemy](https://github.com/tiangolo/pydantic-sqlalchemy) - Convertir les modèles SQLAlchemy en [Pydantic](https://pydantic.dev/docs/) modèles.
- [FastAPI-CamelCase](https://nf1s.github.io/fastapi-camelcase/) - Support CamelCase JSON pour FastAPI utilisant [Pydantic](https://pydantic.dev/docs/).
  - [CamelCase Models with FastAPI and Pydantic](https://medium.com/analytics-vidhya/camel-case-models-with-fast-api-and-pydantic-5a8acb6c0eee) - Billet de blog accompagnant de l'auteur de l'extension.
 
### Injection de la dépendance

- [modern-di](https://github.com/modern-python/modern-di) - Cadre d'injection de dépendance avec récipient IoC [FastAPI integration](https://github.com/modern-python/modern-di-fastapi).
- [Wireup](https://github.com/maldoinc/wireup) - Dépendances d'injecter avec aucun temps d'exécution supérieur dans FastAPI; Dépendances de partage sur le web, cli ou d'autres interfaces.

### Outils de développement

- [FastAPI Code Generator](https://github.com/koxudaxi/fastapi-code-generator) - Créez une application FastAPI à partir d'un fichier OpenAPI, ce qui permet de développer un schéma.
- [FastAPI Client Generator](https://github.com/dmontagu/fastapi_client) - Générer un client API mypy- et IDE-friendly à partir d'une spécification OpenAPI.
- [FastAPI Cruddy Framework](https://github.com/mdconaway/fastapi-cruddy-framework) - Une bibliothèque d'accompagnement à FastAPI conçue pour apporter la productivité de développement de Ruby on Rails, Ember.js ou Sails.js à l'écosystème FastAPI.
- [FastAPI MVC](https://github.com/fastapi-mvc/fastapi-mvc) - Outil de productivité du développeur pour faire des API FastAPI de haute qualité prêtes à la production.
- [FastAPI Profiler](https://github.com/sunhailin-Leo/fastapi_profiler) - Un Middleware FastAPI de joerick/pyinstrument pour vérifier vos performances de service.
- [FastAPI Versioning](https://github.com/DeanWay/fastapi-versioning) - Version de l'API.
- [Jupyter Notebook REST API](https://github.com/Invictify/Jupter-Notebook-REST-API) - Exécutez vos carnets Jupyter comme des paramètres d'API RESTful.
- [Manage FastAPI](https://github.com/ycd/manage-fastapi) - Outil CLI pour générer et gérer des projets FastAPI.
- [msgpack-asgi](https://github.com/florimondmanca/msgpack-asgi) - Automatique [MessagePack](https://msgpack.org/) la négociation de contenu.
- [python-cqrs](https://github.com/pypatterns/python-cqrs) - Cadre d'architecture piloté par événement avec CQRS, Transaction Outbox, orchestration Saga, intégration transparente FastAPI/FastStream.

### Courriel

- [FastAPI Mail](https://github.com/sabuhish/fastapi-mail) - Système de courrier léger pour envoyer des courriels et des pièces jointes (individuel et en vrac).

### Utilitaires

- [Apitally](https://github.com/apitally/apitally-py) - Analyse API, surveillance et enregistrement des demandes pour FastAPI.
- [ASGI Correlation ID](https://github.com/snok/asgi-correlation-id) - Demander l'identification de l'intergiciel.
- [FastAPI Cache](https://github.com/comeuplater/fastapi_cache) - Un simple système de cache léger.
- [FastAPI Cache](https://github.com/long2ice/fastapi-cache) - Un outil pour mettre en cache les résultats de réponse et de fonction FastAPI, avec support pour les moteurs Redis, Memcached, DynamoDB et in-memory.
- [FastAPI Chameleon](https://github.com/mikeckennedy/fastapi-chameleon) - Ajoute l'intégration du langage modèle Chameleon à FastAPI.
- [FastAPI CloudEvents](https://github.com/sasha-tkachev/fastapi-cloudevents) - [CloudEvents](https://cloudevents.io/) intégration pour FastAPI.
- [FastAPI Contrib](https://github.com/identixone/fastapi_contrib) - Ensemble d'utilitaires opinionnés : pagination, intergiciels auth, permissions, handlers d'exception personnalisés, support MongoDB, et intergiciel Opentracing.
- [FastAPI FastCRUD](https://github.com/benavlabs/fastcrud)) - Opérations robustes d'async CRUD et utilitaires de création de terminaux flexibles.
- [FastAPI Events](https://github.com/melvinkcx/fastapi-events) - Librairie d'expédition/manipulation d'événements asynchrones pour FastAPI et Starlette.
- [FastAPI FeatureFlags](https://github.com/Pytlicek/fastapi-featureflags) - Implémentation simple des drapeaux de fonctionnalités pour FastAPI.
- [FastAPI Injectable](https://github.com/JasperSui/fastapi-injectable) - Utilisez l'injection de dépendance de FastAPI à l'extérieur des gestionnaires de route dans les outils CLI, les tâches de fond, les travailleurs, et plus encore.
- [FastAPI Jinja](https://github.com/AGeekInside/fastapi-jinja) - Ajoute l'intégration du langage modèle Jinja à FastAPI.
- [FastAPI Lazy](https://github.com/yezz123/fastango) - Package paresseux pour démarrer votre projet en utilisant FastAPI.
- [FastAPI Limiter](https://github.com/long2ice/fastapi-limiter) - Un limiteur de tarifs pour FastAPI.
- [FastAPI Listing](https://github.com/danielhasan1/fastapi-listing) - Une bibliothèque pour concevoir/construire des API listing en utilisant l'architecture basée sur les composants, paginateur de requête intégré, trieur, django-admin comme filtres & beaucoup plus.
- [FastAPI MQTT](https://github.com/sabuhish/fastapi-mqtt) - Une extension du protocole MQTT.
- [FastAPI Opentracing](https://github.com/wesdu/fastapi-opentracing) - Opentracing intergiciel et support de recherche de base de données pour FastAPI.
- [FastAPI Pagination](https://github.com/uriyyo/fastapi-pagination) - Pagination pour FastAPI.
- [FastAPI Plugins](https://github.com/madkote/fastapi-plugins) - Plugins Redis et Scheduler.
- [FastAPI ServiceUtils](https://github.com/skallfass/fastapi_serviceutils) - Générateur pour créer des services API.
- [FastAPI Shield](https://github.com/jymchng/fastapi-shield) - Librairie générale FastAPI pour l'écriture de tout décorateur générique d'extrémité capable d'injection paresseuse.
- [FastAPI SocketIO](https://github.com/pyropy/fastapi-socketio) - Intégration facile pour FastAPI et SocketIO.
- [FastAPI Utilities](https://github.com/fastapiutils/fastapi-utils) - Utilitaires réutilisables : vues basées sur la classe, réponse inferring router, tâches périodiques, middleware chronométrage, session SQLAlchemy, simplification des spécifications OpenAPI.
- [FastAPI Viewsets](https://github.com/svalench/fastapi_viewsets) - Jango REST ViewSets pour FastAPI inspiré du cadre, permettant l'organisation CRUD basée sur la classe avec enregistrement automatique de la route.
- [FastAPI Websocket Pub/Sub](https://github.com/authorizon/fastapi_websocket_pubsub) - Le modèle classique de pub/sub fait facilement accessible et évolutive sur le web et à travers votre cloud en temps réel.
- [FastAPI Websocket RPC](https://github.com/authorizon/fastapi_websocket_rpc) - RPC (RPC JSON bidirectionnel) sur Websockets rendu facile, robuste et prêt à la production.
- [OpenTelemetry FastAPI Instrumentation](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/instrumentation/opentelemetry-instrumentation-fastapi) - Bibliothèque fournit l'instrumentation automatique et manuelle des cadres Web FastAPI, instrumentant les demandes http servies par les applications utilisant le cadre.
- [Prerender Python Starlette](https://github.com/BeeMyDesk/prerender-python-starlette) - Un intergiciel Starlette pour Prerender.
- [Prometheus FastAPI Instrumentator](https://github.com/trallnag/prometheus-fastapi-instrumentator) - Un Instrumentateur Prométhée configurable et modulaire pour votre application FastAPI.
- [SlowApi](https://github.com/laurents/slowapi) - Limiteur de taux [Flask-Limiter](https://flask-limiter.readthedocs.io)) .
- [Starlette Context](https://github.com/tomwojcik/starlette-context) - Vous permet de stocker et d'accéder aux données de la requête n'importe où dans votre projet, utile pour l'enregistrement.
- [Starlette Exporter](https://github.com/stephenhillier/starlette_exporter) - Une intégration prométhée supplémentaire pour FastAPI et Starlette.
- [Starlette OpenTracing](https://github.com/acidjunk/starlette-opentracing) - Support d'ouverture pour Starlette et FastAPI.
- [Starlette Prometheus](https://github.com/perdy/starlette-prometheus) - Intégration Prométhée pour FastAPI et Starlette.
- [Strawberry GraphQL](https://github.com/strawberry-graphql/strawberry) - Bibliothèque Python GraphQL basée sur des classes de données.
- [Pydantic Resolve](https://github.com/KLR-Pattern/pydantic-resolve) -  Transforme la classe pyrantique en un puissant conteneur de calcul Composable en introduisant des crochets de résolution et post-processus.

## Ressources

### Ressources officielles

- [Documentation](https://fastapi.tiangolo.com/) - Documentation complète.
- [Tutorial](https://fastapi.tiangolo.com/tutorial/) - Tutoriel officiel vous montrant comment utiliser FastAPI avec la plupart de ses fonctionnalités, étape par étape.
- [Source Code](https://github.com/fastapi/fastapi) - Il était sur GitHub.
- [Discord](https://discord.com/invite/VQjSZaeJmf) - Dialoguez avec d'autres utilisateurs de FastAPI.

### Ressources extérieures

- [TestDriven.io FastAPI](https://testdriven.io/blog/topics/fastapi/) - Plusieurs articles spécifiques à FastAPI qui mettent l'accent sur le développement et la mise à l'essai d'APIs REST prêtes à la production, le service de modèles d'apprentissage automatique, et plus encore.

### Podcasts

- [Build The Next Generation Of Python Web Applications With FastAPI](https://www.pythonpodcast.com/fastapi-web-application-framework-episode-259/) - Dans cet épisode de [Podcast Init](https://www.pythonpodcast.com/), le créateur de FastAPI,[Sebastián Ramirez](https://tiangolo.com/), partage ses motivations pour construire FastAPI et comment cela fonctionne sous le capot.
- [FastAPI on PythonBytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) - Belle vue d'ensemble du projet.

### Articles

- [FastAPI has Ruined Flask Forever for Me](https://medium.com/data-science/fastapi-has-ruined-flask-forever-for-me-73916127da)
- [Why we switched from Flask to FastAPI for production machine learning](https://medium.com/@calebkaiser/why-we-switched-from-flask-to-fastapi-for-production-machine-learning-765aab9b3679) - Regardez en profondeur pourquoi vous pouvez vouloir passer de Flask à FastAPI.

### Tutoriels

- [Async SQLAlchemy with FastAPI](https://stribny.name/posts/fastapi-asyncalchemy/) - Apprenez à utiliser SQLAlchemy asynchronement.
- [Deploy Machine Learning Models with Keras, FastAPI, Redis and Docker](https://medium.com/analytics-vidhya/deploy-machine-learning-models-with-keras-fastapi-redis-and-docker-4940df614ece)
- [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/) - Développez et testez une API asynchrone avec FastAPI, Postgres, Pytest et Docker en utilisant Test-Driven Development.
- [FastAPI for Flask Users](https://amitness.com/posts/fastapi-vs-flask) - Apprenez FastAPI avec une comparaison de code côte à côte avec Flask.
- [FastAPI Session Leak Detection](https://www.logiclooptech.dev/fastapi-session-leak-detection-sqlalchemy-long-running/) - Diagnostiquez et fixez les sessions SQLAlchemy à long terme et l'épuisement du pool de connexion dans la production.
- [Implementing FastAPI Services – Abstraction and Separation of Concerns](https://camillovisini.com/coding/abstracting-fastapi-services) - L'application FastAPI et la structure de service pour une base de code plus durable.
- [Introducing FARM Stack - FastAPI, React, and MongoDB](https://www.mongodb.com/docs/languages/python/pymongo-driver/current/integrations/fastapi-integration/) - Commencer avec une pile d'application Web FastAPI complète.
- [Multitenancy with FastAPI, SQLAlchemy and PostgreSQL](https://mergeboard.com/blog/6-multitenancy-fastapi-sqlalchemy-postgresql/) - Apprenez comment faire des applications FastAPI multi-tenu prêt.
- [Real-time data streaming using FastAPI and WebSockets](https://stribny.name/posts/real-time-data-streaming-using-fastapi-and-websockets/) - Découvrez comment diffuser les données de FastAPI directement dans un graphique en temps réel.
- [Running FastAPI applications in production](https://stribny.name/posts/fastapi-production/) - Utilisez Gunicorne avec système pour les déploiements de production.
- [Serving Machine Learning Models with FastAPI in Python](https://medium.com/@8B_EC/tutorial-serving-machine-learning-models-with-fastapi-in-python-c1a27319c459) - Utilisez FastAPI pour déployer et servir rapidement et facilement des modèles d'apprentissage automatique en Python comme API RESTful.
- [Streaming video with FastAPI](https://stribny.name/posts/fastapi-video/) - Apprenez à servir les flux vidéo.
- [Using Hypothesis and Schemathesis to Test FastAPI](https://testdriven.io/blog/fastapi-hypothesis/) - Appliquer des tests basés sur la propriété à FastAPI.

### Conférences

- [PyConBY 2020: Serve ML models easily with FastAPI](https://www.youtube.com/watch?v=z9K5pwb0rt8) - De l'exposé de Sebastian Ramirez, vous apprendrez à construire facilement une API web (JSON) prête à la production pour vos modèles ML avec FastAPI, y compris les meilleures pratiques par défaut.
- [PyCon UK 2019: FastAPI from the ground up](https://www.youtube.com/watch?v=3DLwPcrE5mA) - Cette conférence montre comment construire une API REST simple pour une base de données à partir de la base de données en utilisant FastAPI.

### Vidéos

- [Building a Stock Screener with FastAPI](https://www.youtube.com/watch?v=5GorMC2lPpk) - Un screener stock basé sur le web avec FastAPI, vous serez présenté à de nombreuses fonctionnalités de FastAPI, y compris les modèles Pydantic, l'injection de dépendance, les tâches de fond, et l'intégration SQLAlchemy.
- [Building Web APIs Using FastAPI](https://www.youtube.com/watch?v=Pe66M8mn-wA) - Utilisez FastAPI pour créer une interface de programmation d'applications web (API RESTful).
- [FastAPI - A Web Framework for Python](https://www.youtube.com/watch?v=PUhio8CprhI&list=PL5gdMNl42qynpY-o43Jk3evfxEKSts3HS) - Voir comment faire des validations numériques avec FastAPI.
- [FastAPI vs. Django vs. Flask](https://www.youtube.com/watch?v=9YBAOYQOzWs) - Quel cadre est le meilleur pour Python en 2020 ? Qui utilise async/attend le meilleur? Lequel est le plus rapide ?
- [Serving Machine Learning Models As API with FastAPI](https://www.youtube.com/watch?v=mkDxuRvKUL8) - Construire une API d'apprentissage automatique avec FastAPI.

### Cours

- [Test-Driven Development with FastAPI and Docker](https://testdriven.io/courses/tdd-fastapi/) - Apprenez comment construire, tester et déployer un microservice de résumé de texte avec Python, FastAPI et Docker.
- [Modern APIs with FastAPI and Python](https://training.talkpython.fm/courses/modern-fastapi-apis) - Un cours conçu pour vous permettre de créer de nouvelles API fonctionnant dans le cloud avec FastAPI rapidement.
- [Full Web Apps with FastAPI Course](https://training.talkpython.fm/courses/full-html-web-applications-with-fastapi) - Vous apprendrez à construire des applications web complètes avec FastAPI, équivalent à ce que vous pouvez faire avec Flask ou Django.
- [The Definitive Guide to Celery and FastAPI](https://testdriven.io/courses/fastapi-celery/) - Découvrez comment ajouter Celery à une application FastAPI pour fournir un traitement asynchrone des tâches.

### Meilleures pratiques

- [FastAPI Best Practices](https://github.com/zhanymkanov/fastapi-best-practices) - Collecte des meilleures pratiques dans une repo GitHub.
- [FastAPI-Dishka-FastStream](https://github.com/faststream-community/fastapi-dishka-faststream) - Combine FastAPI, platka, faststream, sqlalchemy, pyrantic.
- [FastAPI Clean Example](https://github.com/ivan-borovets/fastapi-clean-example) - Exemple de moteur d'architecture propre construit avec FastAPI.

## Hébergement

### PaaS

(Plateformes en tant que service)

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [Fly](https://fly.io)([tutorial](https://fly.io/docs/python/frameworks/fastapi/),[Deploy from a Git repo](https://github.com/fly-apps/hello-fastapi))
- [Google App Engine](https://cloud.google.com/appengine)
- [Heroku](https://www.heroku.com/)([Step-by-step tutorial](https://tutlinks.com/create-and-deploy-fastapi-app-to-heroku/),[ML model on Heroku tutorial](https://testdriven.io/blog/fastapi-machine-learning/))
- [Microsoft Azure App Service](https://azure.microsoft.com/en-us/products/app-service/)

### IaaS

(Infrastructure en tant que service)

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Google Compute Engine](https://cloud.google.com/compute)
- [Digital Ocean](https://www.digitalocean.com/)
- [Linode](https://www.linode.com/)

### Sans serveur

Cadres :

- [Chalice](https://github.com/aws/chalice)
- [Mangum](https://mangum.io/) - Adaptateur pour exécuter des applications ASGI avec AWS Lambda et API Gateway.
- [Vercel](https://vercel.com/) - (anciennement Zeit) ([example](https://github.com/Snailedlt/Markdown-Videos)) .

Calcul :

- [AWS Lambda](https://aws.amazon.com/lambda/)([example](https://github.com/iwpnd/fastapi-aws-lambda-example))
- [Google Cloud Functions](https://cloud.google.com/functions)
- [Azure Functions](https://azure.microsoft.com/en-us/products/functions/)
- [Google Cloud Run](https://cloud.google.com/run)([example](https://github.com/anthonycorletti/cloudrun-fastapi))

## Projets

### Modèle de démarrage

- [Full Stack FastAPI and PostgreSQL - Base Project Generator](https://github.com/fastapi/full-stack-fastapi-template) - Modèle FastAPI Stack complet
, qui comprend FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub Actions, HTTPS automatique, et plus (développé par le créateur de FastAPI,[Sebastián Ramírez](https://github.com/tiangolo)) .
- [FastAPI and Tortoise ORM](https://github.com/prostomarkeloff/fastapi-tortoise) - Modèle puissant mais simple pour les API web avec FastAPI (sous forme de cadre web) et Tortoise-ORM (pour travailler via une base de données sans mal de tête).
- [FastAPI + SQLAlchemy 2 + PostgreSQL Template](https://github.com/modern-python/fastapi-sqlalchemy-template) - Démarrage dockerisé avec injection de dépendance (moderne-di), migrations alambiques, et un flux de travail de justfile.
- [FastAPI Model Server Skeleton](https://github.com/eightBEC/fastapi-ml-skeleton) - Skeleton app pour servir les modèles d'apprentissage machine prêts à la production.
- [cookiecutter-spacy-fastapi](https://github.com/microsoft/cookiecutter-spacy-fastapi) - Déploiement rapide de modèles spaCy avec FastAPI.
- [cookiecutter-fastapi](https://github.com/arthurhenrique/cookiecutter-fastapi) - Modèle de cookiecutter pour les projets FastAPI utilisant: Machine Learning, Poésie, Azure Pipelines et pytest.
- [openapi-python-client](https://github.com/openapi-generators/openapi-python-client) - Générer des clients FastAPI Python modernes (via FastAPI) depuis OpenAPI.
- [Pywork](https://github.com/vutran1710/YeomanPywork) - [Yeoman](https://yeoman.io/) générateur pour échafauder une application FastAPI.
- [fastapi-gino-arq-uvicorn](https://github.com/leosussan/fastapi-gino-arq-uvicorn) - Modèle pour une API REST async haute performance, en Python. FastAPI + GINO + Arq + Uvicorn (w/ Redis et PostgreSQL).
- [FastAPI and React Template](https://github.com/Buuntu/fastapi-react) - Plaque de chaudière à biscuits pleine pile utilisant FastAPI, TypeScript, Docker, PostgreSQL et React.
- [FastAPI Nano](https://github.com/rednafi/fastapi-nano) - Simple modèle FastAPI avec architecture de patron d'usine.
- [FastAPI template](https://github.com/s3rius/FastAPI-template) - Générateur de projet FastAPI flexible et léger. Il comprend le support de SQLAlchemy, plusieurs bases de données, CI/CD, Docker et Kubernetes.
- [FastAPI on Google Cloud Run](https://github.com/anthonycorletti/cloudrun-fastapi) - Chaudronne pour la construction d'API avec FastAPI, SQLModel et Google Cloud Run.
- [FastAPI with Firestore](https://github.com/anthonycorletti/firestore-fastapi) - Chaudière pour le bâtiment API avec FastAPI et Google Cloud Firestore.
- [fastapi-alembic-sqlmodel-async](https://github.com/vargasjona/fastapi-alembic-sqlmodel-async) - Il s'agit d'un modèle de projet qui utilise FastAPI, Alembic et async SQLModel comme ORM.
- [fastapi-starter-project](https://github.com/mirzadelic/fastapi-starter-project) - Un modèle de projet qui utilise FastAPI, SQLModel, Alembic, Pytest, Docker, GitHub Actions CI.
- [Full Stack FastAPI and MongoDB - Base Project Generator](https://github.com/mongodb-labs/full-stack-fastapi-mongodb) - Complet, générateur d'application web moderne, qui comprend FastAPI, MongoDB, Docker, Celery, React frontend, HTTPS automatique et plus encore.
- [Uvicorn Poetry FastAPI Project Template](https://github.com/max-pfeiffer/uvicorn-poetry-fastapi-project-template) - Modèle de projet Cookiecutter pour démarrer une application FastAPI. Exécute dans un conteneur Docker avec le serveur Uvicorn ASGI sur Kubernetes. Prend en charge les architectures CPU AMD64 et ARM64.
- [FastAPI Agent Blueprint](https://github.com/Mr-DooSun/fastapi-agent-blueprint) - Modèle en couches DDD où les classes de base génériques donnent async CRUD sans plaque de chaudière, les domaines auto-enregistrer sur la découverte, et pré-commander les hameçons bloquent les importations en couches transversales au moment du commit.

### Images Docker

- [inboard](https://github.com/br3ndonland/inboard) - Docker images pour alimenter vos applications FastAPI et vous aider à expédier plus rapidement.
- [uvicorn-gunicorn-fastapi-docker](https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker) - Image Docker avec Uvicorn gérée par Gunicorn pour les applications Web FastAPI haute performance en Python 3.7 et 3.6 avec réglage automatique des performances.
- [uvicorn-gunicorn-poetry](https://github.com/max-pfeiffer/uvicorn-gunicorn-poetry) - Image Docker avec Gunicorn en utilisant des travailleurs Uvicorn pour exécuter des applications web Python. Utilise la poésie pour gérer les dépendances et mettre en place un environnement virtuel. Prend en charge les architectures CPU AMD64 et ARM64.
- [uvicorn-poetry](https://github.com/max-pfeiffer/uvicorn-poetry) - Image Docker avec serveur Uvicorn ASGI pour exécuter des applications web Python sur Kubernetes. Utilise la poésie pour gérer les dépendances et mettre en place un environnement virtuel. Prend en charge les architectures CPU AMD64 et ARM64.

### Projets open source

- [Astrobase](https://github.com/anthonycorletti/astrobase) - Des déploiements simples, rapides et sécurisés partout.
- [Awesome FastAPI Projects](https://github.com/Kludex/awesome-fastapi-projects) - Liste organisée de projets utilisant FastAPI.
- [Bitcart](https://github.com/bitcart/bitcart) - Plateforme pour marchands, utilisateurs et développeurs qui offre une configuration et une utilisation faciles.
- [Bali](https://github.com/bali-framework/bali) - Simplifiez la base de développement des Microservices Natifs Cloud sur FastAPI et gRPC.
- [Bunnybook](https://github.com/pietrobassi/bunnybook) - Un petit réseau social construit avec FastAPI, React+RxJs, Neo4j, PostgreSQL et Redis.
- [Coronavirus-tg-api](https://github.com/egbakou/coronavirus-tg-api) - API pour le suivi de l'éclosion du coronavirus mondial (COVID-19, SRAS-CoV-2).
- [Dispatch](https://github.com/Netflix/dispatch) - Gérer les incidents de sécurité.
- Exemple de CRUD FastAPI :
  - [Async flavor](https://github.com/testdrivenio/fastapi-crud-async)
  - [Sync Flavor](https://github.com/testdrivenio/fastapi-crud-sync)
- [FastAPI with Observability](https://github.com/Blueswen/fastapi-observability) - Observez l'application FastAPI avec trois piliers d'observation : Traces (Tempo), Metrics (Prométhée), Logs (Loki) sur Grafana via OpenTelemetry et OpenMetrics.
- [FastAPI Websocket Broadcast](https://github.com/kthwaite/fastapi-websocket-broadcast) - Websocket 'diffusé' démo.
- [FastAPI with Celery, RabbitMQ, and Redis](https://github.com/GregaVrbancic/fastapi-celery) - Exemple minimal utilisant FastAPI et Celery avec RabbitMQ pour la file d'attente des tâches, Redis pour Celery backend, et Flower pour le suivi des tâches Celery.
- [FuturamaAPI](https://github.com/koldakov/futuramaapi) - Un terrain de jeu REST et GraphQL construit avec les meilleures pratiques, fournissant WebSockets, SSE, callbacks, messages secrets, et plus encore.
- [JeffQL](https://github.com/yezz123/JeffQL/) - API simple d'authentification et de connexion en utilisant GraphQL et JWT.
- [JSON-RPC Server](https://github.com/smagafurov/fastapi-jsonrpc) - Serveur JSON-RPC basé sur FastAPI.
- [Mailer](https://github.com/rclement/mailer) - Micro-service d'envoi d'argent pour les sites statiques.
- [Markdown-Videos](https://github.com/Snailedlt/Markdown-Videos) - API pour générer des aperçus à intégrer dans votre contenu de balisage.
- [Nemo](https://github.com/harshitsinghai77/nemo-backend) - Soyez productif avec Nemo.
- [OPAL (Open Policy Administration Layer)](https://github.com/authorizon/opal) - Mises à jour d'autorisation en temps réel en plus de la politique ouverte; construit avec FastAPI, Typer et FastAPI WebSocket pub/sub.
- [OSBot-Fast-API](https://github.com/owasp-sbot/OSBot-Fast-API) - Type-safe FastAPI wrapper qui fournit intergiciel, suivi des événements HTTP, intégration AWS Lambda, utilitaires de test, et auto-conversion entre Type Safe, Pydantic, et dataclasses.
- [Polar](https://github.com/polarsource/polar) - Une plateforme de financement et de monétisation pour les développeurs, construite avec FastAPI, SQLAlchemy, Alambic et Arq.
- [RealWorld Example App - mongo](https://github.com/markqiu/fastapi-mongodb-realworld-example-app)
- [RealWorld Example App - postgres](https://github.com/nsidnev/fastapi-realworld-example-app)
- [redis-streams-fastapi-chat](https://github.com/leonh/redis-streams-fastapi-chat) - Une simple application de chat soutenu Redis Streams en utilisant Websockets, Asyncio et FastAPI/Starlette.
- [Sprites as a service](https://github.com/ljvmiranda921/sprites-as-a-service) - Générez vos avatars personnels 8 bits en utilisant Cellular Automata.
- [Slackers](https://github.com/uhavin/slackers) - Slack webhooks API.
- [TermPair](https://github.com/cs01/termpair) - Visualisez et contrôlez les terminaux de votre navigateur avec un chiffrement de bout en bout.
- [Universities](https://github.com/ycd/universities) - Service API pour obtenir des informations sur +9600 universités dans le monde.

## Partenaires

Veuillez soutenir ce projet open source en consultant nos sponsors:

<a href="https://testdriven.io/courses/tdd-fastapi/?ref=awesome-fastapi" target="_blank" title="Learn to build high-quality web apps with best practices"><img src="images/testdriven.svg"></a>
