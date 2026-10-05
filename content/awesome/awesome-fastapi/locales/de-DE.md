<!--lint disable double-link-->

# Awesome FastAPI | [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> Eine kuratierte Liste von tollen Dingen im Zusammenhang mit FastAPI.

[FastAPI](https://fastapi.tiangolo.com/) ist ein modernes, leistungsstarkes Python-Web-Framework mit Batterien, das sich perfekt für die Erstellung von RESTful-APIs eignet.

## Inhalt

- [Erweiterungen von Drittanbietern](#third-party-extensions)
  - [Administration](#admin)
  - [Authentifizierung](#auth)
  - [Cybersicherheit](#cybersecurity)
  - [Datenbanken](#databases)
  - [Abhängigkeitseinspritzung](#dependency-injection)
  - [Entwickler-Tools](#developer-tools)
  - [E-Mail](#email)
  - [Hilfsprogramme](#utils)
- [Ressourcen](#resources)
  - [Offizielle Ressourcen](#official-resources)
  - [Außenmittel](#external-resources)
  - [Podcasts](#podcasts)
  - [Artikel](#articles)
  - [Tutorials](#tutorials)
  - [Gespräche](#talks)
  - [Videos](#videos)
  - [Kurse](#courses)
  - [Best Practices](#best-practices)
- [Hosting](#hosting)
  - [PaaS](#paas)
  - [IaaS](#iaas)
  - [Serverlos](#serverless)
- [Projekte](#projects)
  - [Projektvorlage](#boilerplate)
  - [Docker Images](#docker-images)
  - [Open-Source-Projekte](#open-source-projects)
- [Sponsoren](#sponsors)

## Erweiterungen von Drittanbietern

### Administration

- [FastAdmin](https://github.com/vsdudakov/fastadmin) - Einfach zu bedienendes Admin-Dashboard für FastAPI (auch Flask und Django), inspiriert von Django Admin.
- [FastAPI Admin](https://github.com/fastapi-admin/fastapi-admin) - Funktionales Admin-Panel, das eine Benutzeroberfläche für die Durchführung von CRUD-Operationen mit Ihren Daten bereitstellt. Funktioniert derzeit nur mit dem Tortoise ORM.
- [FastAPI Amis Admin](https://github.com/amisadmin/fastapi-amis-admin) - Ein leistungsstarkes, effizientes und leicht erweiterbares FastAPI Admin Framework.
- [Piccolo Admin](https://github.com/piccolo-orm/piccolo_admin) - Eine leistungsstarke und moderne Admin-GUI, die das Piccolo ORM verwendet.
- [SQLAlchemy Admin](https://github.com/smithyhq/sqladmin) - Admin Panel für FastAPI/Starlette, das mit SQLAlchemy-Modellen funktioniert.
- [Starlette Admin](https://github.com/jowilf/starlette-admin) - Admin Framework für FastAPI/Starlette, unterstützt SQLAlchemy, SQLModel, MongoDB und ODMantic.


### Authentifizierung

- [AuthX](https://github.com/yezz123/AuthX) - Anpassbare Authentifizierungen und Oauth2-Management für FastAPI.
- [FastAPI Auth](https://github.com/dmontagu/fastapi-auth) - Pluggable Auth unterstützt den OAuth2 Password Flow mit JWT-Zugriff und Refresh-Token.
- [FastAPI Azure Auth](https://github.com/Intility/fastapi-azure-auth) - Azure AD-Authentifizierung für Ihre APIs mit Single- und Multi-Mandant-Unterstützung.
- [FastAPI Casbin Auth](https://github.com/apache/casbin-python-fastapi-casbin-auth) - Autorisierung unterstützt verschiedene Zutrittskontrollmodelle wie RBAC, ReBAC und ABAC über Casbin.
- [FastAPI Cloud Auth](https://github.com/tokusumi/fastapi-cloudauth) - Einfache Integration zwischen FastAPI und Cloud-Authentifizierungsdiensten (AWS Cognito, Auth0, Firebase Authentication).
- [FastAPI Login](https://github.com/maxrdu/fastapi_login) - Account Management und Authentifizierung (basierend auf)[Flask-Login](https://github.com/maxcountryman/flask-login).
- [FastAPI JWT Auth](https://github.com/IndominusByte/fastapi-jwt-auth) - JWT auth (basierend auf)[Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended).
- [FastAPI Permissions](https://github.com/holgi/fastapi-permissions) - Berechtigungen auf Zeilenebene.
- [FastAPI Security](https://github.com/jacobsvante/fastapi-security) - Implementiert Authentifizierung und Autorisierung als Abhängigkeiten in FastAPI.
- [FastAPI Simple Security](https://github.com/mrtolkien/fastapi_simple_security) - Out-of-the-Box-API-Schlüsselsicherheit, die durch Pfadoperationen verwaltet werden kann.
- [FastAPI Users](https://github.com/fastapi-users/fastapi-users) - Account Management, Authentifizierung, Autorisierung.
- [FastAPI Zitadel Auth](https://github.com/cleanenergyexchange/fastapi-zitadel-auth) - OAuth2 mit der IAM-Plattform [Zitadel](https://github.com/zitadel/zitadel).

### Cybersicherheit

- [FastAPI Guard](https://github.com/rennf93/fastapi-guard) - Rate Limiting, automatisches Verbot von IPs, Penetration Attack Detection, Whitelist/Blacklist (Länder, IPs, Cloud Provider), User Agent Filtering, Geolocation, Redis Integration für Persistenz und mehr.
- [secure](https://github.com/TypeError/secure) - Definieren und wenden Sie HTTP-Sicherheitsheader in FastAPI-Apps mit ASGI-Middleware und einem einzigen Konfigurationsobjekt konsistent an.

### Datenbanken

#### ORMs

- [Edgy ORM](https://github.com/dymmond/edgy) - Komplexe Datenbanken einfach gemacht.
- [FastAPI SQLAlchemy](https://github.com/mfreeborn/fastapi-sqlalchemy) - Einfache Integration zwischen FastAPI und [SQLAlchemy](https://www.sqlalchemy.org/).
- [Fastapi-SQLA](https://github.com/dialoguemd/fastapi-sqla) - SQLAlchemy-Erweiterung für FastAPI mit Unterstützung für Paginierung, Asyncio und Pytest.
- [FastAPIwee](https://github.com/Ignisor/FastAPIwee) - Eine einfache Möglichkeit, REST API basierend auf [PeeWee](https://github.com/coleifer/peewee) Modelle.
- [FastSQLA](https://github.com/hadrien/FastSQLA) - Async SQLAlchemy 2.0+ Erweiterung für FastAPI mit SQLModel-Unterstützung, integrierter Paginierung und mehr.
- [GINO](https://github.com/python-gino/gino) - Ein leichtes asynchrones ORM, das auf dem SQLAlchemy-Core für Python asyncio basiert.
  - [FastAPI Example](https://github.com/leosussan/fastapi-gino-arq-uvicorn)
- [ORM](https://github.com/encode/orm) - Ein async ORM.
- [ormar](https://collerek.github.io/ormar/) - Ormar ist ein async ORM, das die Pydantic-Validierung verwendet und direkt in FastAPI-Anfragen und -Antworten verwendet werden kann, so dass nur noch ein Satz von Modellen zur Verfügung steht. Alembische Migrationen inklusive.
  - [FastAPI Example](https://collerek.github.io/ormar/latest/fastapi/) - Verwenden von FastAPI mit ormar.
- [Piccolo](https://github.com/piccolo-orm/piccolo) - Ein async ORM und Query Builder, der Postgres und SQLite mit Batterien (Migrationen, Sicherheit usw.) unterstützt.
  - [FastAPI Examples](https://github.com/piccolo-orm/piccolo_examples) - Verwenden von FastAPI mit Piccolo.
- [Tortoise ORM](https://tortoise.github.io) - Ein einfach zu bedienender asyncio ORM (Object Relational Mapper), inspiriert von Django.
  - [FastAPI Example](https://tortoise.github.io/examples/fastapi.html) - Ein Beispiel für die Tortoise-ORM FastAPI Integration.
  - [Tutorial: Setting up Tortoise ORM with FastAPI](https://web.archive.org/web/20200523174158/https://robwagner.dev/tortoise-fastapi-setup/)
  - [Aerich](https://github.com/tortoise/aerich) - ORM-Migrationstools für Schildkröten.
- [Saffier ORM](https://github.com/tarsil/saffier) - Das einzige Python ORM, das Sie jemals brauchen werden.
- [SQLModel](https://sqlmodel.tiangolo.com/) - SQLModel (das von Pydantic und SQLAlchemy unterstützt wird) ist eine Bibliothek für die Interaktion mit SQL-Datenbanken aus Python-Code mit Python-Objekten.

#### Query Builder

- [asyncpgsa](https://github.com/CanopyTax/asyncpgsa) - Ein Wrapper um [asyncpg](https://github.com/MagicStack/asyncpg) zur Verwendung mit [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/).
- [Databases](https://github.com/encode/databases) - Async SQL Query Builder, der auf dem [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/) Ausdruck Sprache.
- [PyPika](https://github.com/kayak/pypika) - Ein SQL-Abfrage-Builder, der den vollen Reichtum der SQL-Sprache ausstellt.

#### ODMs

- [Beanie](https://github.com/BeanieODM/beanie) - Asynchrones Python ODM für MongoDB, basierend auf [Motor](https://motor.readthedocs.io/en/stable/) und [Pydantic](https://pydantic.dev/docs/), die Daten- und Schemamigrationen aus der Box unterstützt.
- [MongoEngine](https://github.com/MongoEngine/mongoengine) - Ein Document-Object Mapper (denken Sie an ORM, aber für Dokumentdatenbanken) für die Arbeit mit MongoDB von Python.
- [Motor](https://motor.readthedocs.io/) - Asynchroner Python-Treiber für MongoDB
- [ODMantic](https://art049.github.io/odmantic/) - AsyncIO MongoDB ODM integriert mit [Pydantic](https://pydantic.dev/docs/).
- [PynamoDB](https://github.com/pynamodb/PynamoDB) - Eine pythonische Schnittstelle zu Amazons DynamoDB.

#### Weitere Instrumente

- [Pydantic-SQLAlchemy](https://github.com/tiangolo/pydantic-sqlalchemy) - SQLAlchemy-Modelle in [Pydantic](https://pydantic.dev/docs/) Modelle.
- [FastAPI-CamelCase](https://nf1s.github.io/fastapi-camelcase/) - CamelCase JSON Unterstützung für FastAPI [Pydantic](https://pydantic.dev/docs/).
  - [CamelCase Models with FastAPI and Pydantic](https://medium.com/analytics-vidhya/camel-case-models-with-fast-api-and-pydantic-5a8acb6c0eee) - Begleitender Blogbeitrag des Autors der Erweiterung.
 
### Abhängigkeitseinspritzung

- [modern-di](https://github.com/modern-python/modern-di) - Dependency Injection Framework mit IoC Container und Scopes, mit einem [FastAPI integration](https://github.com/modern-python/modern-di-fastapi).
- [Wireup](https://github.com/maldoinc/wireup) - Integrieren Sie Abhängigkeiten mit Null-Laufzeit-Overhead in FastAPI; Teilen Sie Abhängigkeiten über Web, Cli oder andere Schnittstellen.

### Entwickler-Tools

- [FastAPI Code Generator](https://github.com/koxudaxi/fastapi-code-generator) - Erstellen Sie eine FastAPI-App aus einer OpenAPI-Datei, die eine schemagesteuerte Entwicklung ermöglicht.
- [FastAPI Client Generator](https://github.com/dmontagu/fastapi_client) - Generieren Sie einen mypy- und IDE-freundlichen API-Client aus einer OpenAPI-Spezifikation.
- [FastAPI Cruddy Framework](https://github.com/mdconaway/fastapi-cruddy-framework) - Eine Begleitbibliothek zu FastAPI, die die Entwicklungsproduktivität von Ruby on Rails, Ember.js oder Sails.js in das FastAPI-Ökosystem bringen soll.
- [FastAPI MVC](https://github.com/fastapi-mvc/fastapi-mvc) - Entwickler-Produktivitäts-Tool für die Herstellung von hochwertigen FastAPI-Produktion-ready APIs.
- [FastAPI Profiler](https://github.com/sunhailin-Leo/fastapi_profiler) - Eine FastAPI Middleware von joerick/pyinstrument, um Ihre Serviceleistung zu überprüfen.
- [FastAPI Versioning](https://github.com/DeanWay/fastapi-versioning) - API Versionierung.
- [Jupyter Notebook REST API](https://github.com/Invictify/Jupter-Notebook-REST-API) - Führen Sie Ihre Jupyter-Notebooks als RESTful API-Endpunkte aus.
- [Manage FastAPI](https://github.com/ycd/manage-fastapi) - CLI-Tool zum Erstellen und Verwalten von FastAPI-Projekten.
- [msgpack-asgi](https://github.com/florimondmanca/msgpack-asgi) - Automatik [MessagePack](https://msgpack.org/) Inhaltsverhandlungen.
- [python-cqrs](https://github.com/pypatterns/python-cqrs) - Event-Driven Architecture Framework mit CQRS, Transaction Outbox, Saga Orchestrierung, nahtlose FastAPI/FastStream Integration.

### E-Mail

- [FastAPI Mail](https://github.com/sabuhish/fastapi-mail) - Leichtes Postsystem zum Versenden von E-Mails und Anhängen (Einzel- und Massensendungen).

### Hilfsprogramme

- [Apitally](https://github.com/apitally/apitally-py) - API-Analyse, Überwachung und Anforderungsprotokollierung für FastAPI.
- [ASGI Correlation ID](https://github.com/snok/asgi-correlation-id) - Fordern Sie die ID-Protokollierung von Middleware an.
- [FastAPI Cache](https://github.com/comeuplater/fastapi_cache) - Ein einfaches, leichtes Cache-System.
- [FastAPI Cache](https://github.com/long2ice/fastapi-cache) - Ein Tool zum Zwischenspeichern von FastAPI-Antwort- und Funktionsergebnissen mit Unterstützung für Redis, Memcached, DynamoDB und In-Memory-Backends.
- [FastAPI Chameleon](https://github.com/mikeckennedy/fastapi-chameleon) - Fügt Integration der Chameleon Template Language zu FastAPI hinzu.
- [FastAPI CloudEvents](https://github.com/sasha-tkachev/fastapi-cloudevents) - [CloudEvents](https://cloudevents.io/) Integration für FastAPI.
- [FastAPI Contrib](https://github.com/identixone/fastapi_contrib) - Opinionated Satz von Dienstprogrammen: Paginierung, Auth Middleware, Berechtigungen, benutzerdefinierte Ausnahme-Handler, MongoDB-Unterstützung und Opentracing Middleware.
- [FastAPI FastCRUD](https://github.com/benavlabs/fastcrud)) - Robuste async CRUD-Operationen und flexible Endpoint Creation Utilities.
- [FastAPI Events](https://github.com/melvinkcx/fastapi-events) - Asynchrone Event Dispatching/Handling Bibliothek für FastAPI und Starlette.
- [FastAPI FeatureFlags](https://github.com/Pytlicek/fastapi-featureflags) - Einfache Implementierung von Feature Flags für FastAPI.
- [FastAPI Injectable](https://github.com/JasperSui/fastapi-injectable) - Verwenden Sie FastAPIs Dependency Injection außerhalb von Route Handlern in CLI-Tools, Hintergrundaufgaben, Workern und mehr.
- [FastAPI Jinja](https://github.com/AGeekInside/fastapi-jinja) - Fügt Integration der Jinja Template Language zu FastAPI hinzu.
- [FastAPI Lazy](https://github.com/yezz123/fastango) - Lazy Paket, um Ihr Projekt mit FastAPI zu starten.
- [FastAPI Limiter](https://github.com/long2ice/fastapi-limiter) - Ein Request Rate Limiter für FastAPI.
- [FastAPI Listing](https://github.com/danielhasan1/fastapi-listing) - Eine Bibliothek zum Entwerfen / Erstellen von APIs mit komponentenbasierter Architektur, integriertem Abfrage-Paginator, Sorter, Django-Admin wie Filter und vielem mehr.
- [FastAPI MQTT](https://github.com/sabuhish/fastapi-mqtt) - Eine Erweiterung für das MQTT-Protokoll.
- [FastAPI Opentracing](https://github.com/wesdu/fastapi-opentracing) - Opentracing Middleware und Datenbank-Tracing-Unterstützung für FastAPI.
- [FastAPI Pagination](https://github.com/uriyyo/fastapi-pagination) - Pagination für FastAPI.
- [FastAPI Plugins](https://github.com/madkote/fastapi-plugins) - Redis und Scheduler Plugins.
- [FastAPI ServiceUtils](https://github.com/skallfass/fastapi_serviceutils) - Generator zum Erstellen von API-Diensten.
- [FastAPI Shield](https://github.com/jymchng/fastapi-shield) - Allgemeine FastAPI-Bibliothek zum Schreiben von generischen Endpunktdekoratoren, die in der Lage sind, faule Abhängigkeiten zu injizieren.
- [FastAPI SocketIO](https://github.com/pyropy/fastapi-socketio) - Einfache Integration für FastAPI und SocketIO.
- [FastAPI Utilities](https://github.com/fastapiutils/fastapi-utils) - Wiederverwendbare Utilities: klassenbasierte Ansichten, Response-Inferring-Router, periodische Aufgaben, Timing-Middleware, SQLAlchemy-Sitzung, OpenAPI-Spezifikationsvereinfachung.
- [FastAPI Viewsets](https://github.com/svalench/fastapi_viewsets) - Django REST Framework-inspirierte ViewSets für FastAPI, die eine klassenbasierte CRUD-Endpunktorganisation mit automatischer Routenregistrierung ermöglichen.
- [FastAPI Websocket Pub/Sub](https://github.com/authorizon/fastapi_websocket_pubsub) - Das klassische Pub / Sub-Muster ist leicht zugänglich und skalierbar über das Web und über Ihre Cloud in Echtzeit.
- [FastAPI Websocket RPC](https://github.com/authorizon/fastapi_websocket_rpc) - RPC (bidirektional JSON RPC) über Websockets einfach, robust und produktionsbereit gemacht.
- [OpenTelemetry FastAPI Instrumentation](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/instrumentation/opentelemetry-instrumentation-fastapi) - Die Bibliothek bietet die automatische und manuelle Instrumentierung von FastAPI-Web-Frameworks und die Instrumentierung von http-Anforderungen, die von Anwendungen bedient werden, die das Framework verwenden.
- [Prerender Python Starlette](https://github.com/BeeMyDesk/prerender-python-starlette) - Starlette Middleware für Prerender.
- [Prometheus FastAPI Instrumentator](https://github.com/trallnag/prometheus-fastapi-instrumentator) - Ein konfigurierbarer und modularer Prometheus Instrumentator für Ihre FastAPI-Anwendung.
- [SlowApi](https://github.com/laurents/slowapi) - Zinsbegrenzer (basierend auf)[Flask-Limiter](https://flask-limiter.readthedocs.io).
- [Starlette Context](https://github.com/tomwojcik/starlette-context) - Ermöglicht Ihnen, die Anforderungsdaten überall in Ihrem Projekt zu speichern und darauf zuzugreifen, was für die Protokollierung nützlich ist.
- [Starlette Exporter](https://github.com/stephenhillier/starlette_exporter) - Eine weitere prometheus Integration für FastAPI und Starlette.
- [Starlette OpenTracing](https://github.com/acidjunk/starlette-opentracing) - Opentracing-Unterstützung für Starlette und FastAPI.
- [Starlette Prometheus](https://github.com/perdy/starlette-prometheus) - Prometheus Integration für FastAPI und Starlette.
- [Strawberry GraphQL](https://github.com/strawberry-graphql/strawberry) - Python GraphQL Bibliothek basierend auf Datenklassen.
- [Pydantic Resolve](https://github.com/KLR-Pattern/pydantic-resolve) -  Verwandelt pydantische Klasse in einen leistungsstarken Composable-Computing-Container durch die Einführung von Resolv- und Post-Process-Hooks.

## Ressourcen

### Offizielle Ressourcen

- [Documentation](https://fastapi.tiangolo.com/) - Umfassende Dokumentation.
- [Tutorial](https://fastapi.tiangolo.com/tutorial/) - Offizielles Tutorial zeigt Ihnen, wie Sie FastAPI mit den meisten Funktionen Schritt für Schritt verwenden.
- [Source Code](https://github.com/fastapi/fastapi) - Hostet auf GitHub.
- [Discord](https://discord.com/invite/VQjSZaeJmf) - Chatten Sie mit anderen FastAPI-Benutzern.

### Außenmittel

- [TestDriven.io FastAPI](https://testdriven.io/blog/topics/fastapi/) - Mehrere FastAPI-spezifische Artikel, die sich auf die Entwicklung und das Testen von produktionsfertigen RESTful-APIs, die Bereitstellung maschineller Lernmodelle und mehr konzentrieren.

### Podcasts

- [Build The Next Generation Of Python Web Applications With FastAPI](https://www.pythonpodcast.com/fastapi-web-application-framework-episode-259/) - In dieser Episode von [Podcast Init](https://www.pythonpodcast.com/) Der Schöpfer von FastAPI,[Sebastián Ramirez](https://tiangolo.com/), teilt seine Motivationen für den Aufbau von FastAPI und wie es unter der Haube funktioniert.
- [FastAPI on PythonBytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) - Schöner Überblick über das Projekt.

### Artikel

- [FastAPI has Ruined Flask Forever for Me](https://medium.com/data-science/fastapi-has-ruined-flask-forever-for-me-73916127da)
- [Why we switched from Flask to FastAPI for production machine learning](https://medium.com/@calebkaiser/why-we-switched-from-flask-to-fastapi-for-production-machine-learning-765aab9b3679) - Ausführlicher Blick darauf, warum Sie von Flask zu FastAPI wechseln möchten.

### Tutorials

- [Async SQLAlchemy with FastAPI](https://stribny.name/posts/fastapi-asyncalchemy/) - Erfahren Sie, wie Sie SQLAlchemy asynchron verwenden.
- [Deploy Machine Learning Models with Keras, FastAPI, Redis and Docker](https://medium.com/analytics-vidhya/deploy-machine-learning-models-with-keras-fastapi-redis-and-docker-4940df614ece)
- [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/) - Entwickeln und testen Sie eine asynchrone API mit FastAPI, Postgres, Pytest und Docker mit Test-Driven Development.
- [FastAPI for Flask Users](https://amitness.com/posts/fastapi-vs-flask) - Lernen Sie FastAPI mit einem Side-by-Side-Code-Vergleich mit Flask.
- [FastAPI Session Leak Detection](https://www.logiclooptech.dev/fastapi-session-leak-detection-sqlalchemy-long-running/) - Diagnostizieren und beheben Sie lang laufende SQLAlchemy-Sitzungen und die Erschöpfung des Verbindungspools in der Produktion.
- [Implementing FastAPI Services – Abstraction and Separation of Concerns](https://camillovisini.com/coding/abstracting-fastapi-services) - FastAPI-Anwendungs- und Servicestruktur für eine besser wartbare Codebasis.
- [Introducing FARM Stack - FastAPI, React, and MongoDB](https://www.mongodb.com/docs/languages/python/pymongo-driver/current/integrations/fastapi-integration/) - Erste Schritte mit einem kompletten FastAPI Web Application Stack.
- [Multitenancy with FastAPI, SQLAlchemy and PostgreSQL](https://mergeboard.com/blog/6-multitenancy-fastapi-sqlalchemy-postgresql/) - Erfahren Sie, wie Sie FastAPI-Anwendungen Multi-Tenant-fähig machen.
- [Real-time data streaming using FastAPI and WebSockets](https://stribny.name/posts/real-time-data-streaming-using-fastapi-and-websockets/) - Erfahren Sie, wie Sie Daten von FastAPI direkt in ein Echtzeit-Chart streamen.
- [Running FastAPI applications in production](https://stribny.name/posts/fastapi-production/) - Verwenden Sie Gunicorn mit systemd für Produktionsbereitstellungen.
- [Serving Machine Learning Models with FastAPI in Python](https://medium.com/@8B_EC/tutorial-serving-machine-learning-models-with-fastapi-in-python-c1a27319c459) - Verwenden Sie FastAPI, um maschinelle Lernmodelle in Python als RESTful API schnell und einfach bereitzustellen und zu bedienen.
- [Streaming video with FastAPI](https://stribny.name/posts/fastapi-video/) - Erfahren Sie, wie Sie Videostreams bedienen.
- [Using Hypothesis and Schemathesis to Test FastAPI](https://testdriven.io/blog/fastapi-hypothesis/) - Apply Property-based Testing auf FastAPI.

### Gespräche

- [PyConBY 2020: Serve ML models easily with FastAPI](https://www.youtube.com/watch?v=z9K5pwb0rt8) - Aus dem Vortrag von Sebastian Ramirez erfahren Sie, wie Sie mit FastAPI einfach eine produktionsfähige Web-API (JSON) für Ihre ML-Modelle erstellen können, einschließlich Best Practices standardmäßig.
- [PyCon UK 2019: FastAPI from the ground up](https://www.youtube.com/watch?v=3DLwPcrE5mA) - Dieser Vortrag zeigt, wie man eine einfache REST-API für eine Datenbank von Grund auf mit FastAPI erstellt.

### Videos

- [Building a Stock Screener with FastAPI](https://www.youtube.com/watch?v=5GorMC2lPpk) - Wenn Sie einen webbasierten Stockscreener mit FastAPI erstellen, werden Sie mit vielen Funktionen von FastAPI vertraut gemacht, darunter Pydantic-Modelle, Abhängigkeitsinjektion, Hintergrundaufgaben und SQLAlchemy-Integration.
- [Building Web APIs Using FastAPI](https://www.youtube.com/watch?v=Pe66M8mn-wA) - Verwenden Sie FastAPI, um eine Web Application Programming Interface (RESTful API) zu erstellen.
- [FastAPI - A Web Framework for Python](https://www.youtube.com/watch?v=PUhio8CprhI&list=PL5gdMNl42qynpY-o43Jk3evfxEKSts3HS) - Sehen Sie, wie Sie numerische Validierungen mit FastAPI durchführen.
- [FastAPI vs. Django vs. Flask](https://www.youtube.com/watch?v=9YBAOYQOzWs) - Welches Framework ist 2020 für Python am besten? Welches nutzt async/await am besten? Was ist der Schnellste?
- [Serving Machine Learning Models As API with FastAPI](https://www.youtube.com/watch?v=mkDxuRvKUL8) - Erstellen Sie eine Machine Learning API mit FastAPI.

### Kurse

- [Test-Driven Development with FastAPI and Docker](https://testdriven.io/courses/tdd-fastapi/) - Erfahren Sie, wie Sie einen Textzusammenfassungs-Mikroservice mit Python, FastAPI und Docker erstellen, testen und bereitstellen.
- [Modern APIs with FastAPI and Python](https://training.talkpython.fm/courses/modern-fastapi-apis) - Ein Kurs, mit dem Sie schnell neue APIs erstellen können, die in der Cloud ausgeführt werden.
- [Full Web Apps with FastAPI Course](https://training.talkpython.fm/courses/full-html-web-applications-with-fastapi) - Sie lernen, vollständige Web-Apps mit FastAPI zu erstellen, was dem entspricht, was Sie mit Flask oder Django tun können.
- [The Definitive Guide to Celery and FastAPI](https://testdriven.io/courses/fastapi-celery/) - Erfahren Sie, wie Sie Celery zu einer FastAPI-Anwendung hinzufügen, um eine asynchrone Aufgabenverarbeitung bereitzustellen.

### Best Practices

- [FastAPI Best Practices](https://github.com/zhanymkanov/fastapi-best-practices) - Sammlung von Best Practices in einem GitHub-Repo.
- [FastAPI-Dishka-FastStream](https://github.com/faststream-community/fastapi-dishka-faststream) - Kombiniert FastAPI, Dishka, Faststream, Sqlalchemie, pydantisch.
- [FastAPI Clean Example](https://github.com/ivan-borovets/fastapi-clean-example) - Clean Architecture Backend Beispiel mit FastAPI gebaut.

## Hosting

### PaaS

(Plattformen als Dienst)

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [Fly](https://fly.io)()[tutorial](https://fly.io/docs/python/frameworks/fastapi/),[Deploy from a Git repo](https://github.com/fly-apps/hello-fastapi))
- [Google App Engine](https://cloud.google.com/appengine)
- [Heroku](https://www.heroku.com/)()[Step-by-step tutorial](https://tutlinks.com/create-and-deploy-fastapi-app-to-heroku/),[ML model on Heroku tutorial](https://testdriven.io/blog/fastapi-machine-learning/))
- [Microsoft Azure App Service](https://azure.microsoft.com/en-us/products/app-service/)

### IaaS

(Infrastruktur als Dienst)

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Google Compute Engine](https://cloud.google.com/compute)
- [Digital Ocean](https://www.digitalocean.com/)
- [Linode](https://www.linode.com/)

### Serverlos

Frameworks:

- [Chalice](https://github.com/aws/chalice)
- [Mangum](https://mangum.io/) - Adapter zum Ausführen von ASGI-Anwendungen mit AWS Lambda und API Gateway.
- [Vercel](https://vercel.com/) - (früher Zeit)[example](https://github.com/Snailedlt/Markdown-Videos).

Rechenressourcen:

- [AWS Lambda](https://aws.amazon.com/lambda/)()[example](https://github.com/iwpnd/fastapi-aws-lambda-example))
- [Google Cloud Functions](https://cloud.google.com/functions)
- [Azure Functions](https://azure.microsoft.com/en-us/products/functions/)
- [Google Cloud Run](https://cloud.google.com/run)()[example](https://github.com/anthonycorletti/cloudrun-fastapi))

## Projekte

### Projektvorlage

- [Full Stack FastAPI and PostgreSQL - Base Project Generator](https://github.com/fastapi/full-stack-fastapi-template) - Vollstapel FastAPI Template
, die FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub-Aktionen, automatische HTTPS und mehr enthält (entwickelt vom Schöpfer von FastAPI),[Sebastián Ramírez](https://github.com/tiangolo).
- [FastAPI and Tortoise ORM](https://github.com/prostomarkeloff/fastapi-tortoise) - Leistungsstarke, aber einfache Vorlage für Web-APIs mit FastAPI (als Web-Framework) und Tortoise-ORM (für das Arbeiten über Datenbank ohne Kopfschmerzen).
- [FastAPI + SQLAlchemy 2 + PostgreSQL Template](https://github.com/modern-python/fastapi-sqlalchemy-template) - Dockerized Starter mit Dependency Injection (modern-di), Alembic Migrationen und einem Justfile Workflow.
- [FastAPI Model Server Skeleton](https://github.com/eightBEC/fastapi-ml-skeleton) - Skeleton-App, um maschinelle Lernmodelle produktionsbereit zu bedienen.
- [cookiecutter-spacy-fastapi](https://github.com/microsoft/cookiecutter-spacy-fastapi) - Schnelle Bereitstellungen von spaCy Modellen mit FastAPI.
- [cookiecutter-fastapi](https://github.com/arthurhenrique/cookiecutter-fastapi) - Cookiecutter-Vorlage für FastAPI-Projekte mit: Machine Learning, Poetry, Azure Pipelines und Pytest.
- [openapi-python-client](https://github.com/openapi-generators/openapi-python-client) - Generieren Sie moderne FastAPI Python Clients (über FastAPI) aus OpenAPI.
- [Pywork](https://github.com/vutran1710/YeomanPywork) - [Yeoman](https://yeoman.io/) Generator zum Gerüst einer FastAPI-App.
- [fastapi-gino-arq-uvicorn](https://github.com/leosussan/fastapi-gino-arq-uvicorn) - Vorlage für eine leistungsstarke async REST API in Python. FastAPI + GINO + Arq + Uvicorn (w/ Redis und PostgreSQL).
- [FastAPI and React Template](https://github.com/Buuntu/fastapi-react) - Full Stack Cookiecutter Boilerplate mit FastAPI, TypeScript, Docker, PostgreSQL und React.
- [FastAPI Nano](https://github.com/rednafi/fastapi-nano) - Einfaches FastAPI Template mit Factory Pattern Architektur.
- [FastAPI template](https://github.com/s3rius/FastAPI-template) - Flexibler, leichter FastAPI-Projektgenerator. Es bietet Unterstützung für SQLAlchemy, mehrere Datenbanken, CI / CD, Docker und Kubernetes.
- [FastAPI on Google Cloud Run](https://github.com/anthonycorletti/cloudrun-fastapi) - Boilerplate für die API-Erstellung mit FastAPI, SQLModel und Google Cloud Run.
- [FastAPI with Firestore](https://github.com/anthonycorletti/firestore-fastapi) - Boilerplate für API-Building mit FastAPI und Google Cloud Firestore.
- [fastapi-alembic-sqlmodel-async](https://github.com/vargasjona/fastapi-alembic-sqlmodel-async) - Dies ist eine Projektvorlage, die FastAPI, Alembic und async SQLModel als ORM verwendet.
- [fastapi-starter-project](https://github.com/mirzadelic/fastapi-starter-project) - Eine Projektvorlage, die FastAPI, SQLModel, Alembic, Pytest, Docker, GitHub Actions CI verwendet.
- [Full Stack FastAPI and MongoDB - Base Project Generator](https://github.com/mongodb-labs/full-stack-fastapi-mongodb) - Full Stack, moderner Web Application Generator, der FastAPI, MongoDB, Docker, Celery, React Frontend, automatische HTTPS und mehr enthält.
- [Uvicorn Poetry FastAPI Project Template](https://github.com/max-pfeiffer/uvicorn-poetry-fastapi-project-template) - Cookiecutter-Projektvorlage zum Starten einer FastAPI-Anwendung. Läuft in einem Docker-Container mit Uvicorn ASGI Server auf Kubernetes. Unterstützt AMD64 und ARM64 CPU-Architekturen.
- [FastAPI Agent Blueprint](https://github.com/Mr-DooSun/fastapi-agent-blueprint) - DDD-Schichtvorlage, bei der generische Basisklassen async CRUD ohne Boilerplate, Domänen selbst registrieren bei Entdeckung und Pre-Commit-Hooks Cross-Layer-Importe zum Commit-Zeitpunkt blockieren.

### Docker Images

- [inboard](https://github.com/br3ndonland/inboard) - Docker-Bilder, um Ihre FastAPI-Apps zu versorgen und Ihnen zu helfen, schneller zu versenden.
- [uvicorn-gunicorn-fastapi-docker](https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker) - Docker-Image mit Uvicorn verwaltet von Gunicorn für leistungsstarke FastAPI-Webanwendungen in Python 3.7 und 3.6 mit Performance-Auto-Tuning.
- [uvicorn-gunicorn-poetry](https://github.com/max-pfeiffer/uvicorn-gunicorn-poetry) - Docker-Image mit Gunicorn mit Uvicorn-Workern zum Ausführen von Python-Webanwendungen. Verwendet Poesie zum Verwalten von Abhängigkeiten und zum Einrichten einer virtuellen Umgebung. Unterstützt AMD64 und ARM64 CPU-Architekturen.
- [uvicorn-poetry](https://github.com/max-pfeiffer/uvicorn-poetry) - Docker-Image mit Uvicorn ASGI Server zum Ausführen von Python-Webanwendungen auf Kubernetes. Verwendet Poesie zum Verwalten von Abhängigkeiten und zum Einrichten einer virtuellen Umgebung. Unterstützt AMD64 und ARM64 CPU-Architekturen.

### Open-Source-Projekte

- [Astrobase](https://github.com/anthonycorletti/astrobase) - Einfache, schnelle und sichere Bereitstellungen überall.
- [Awesome FastAPI Projects](https://github.com/Kludex/awesome-fastapi-projects) - Organisierte Liste der Projekte, die FastAPI verwenden.
- [Bitcart](https://github.com/bitcart/bitcart) - Plattform für Händler, Benutzer und Entwickler, die eine einfache Einrichtung und Nutzung bietet.
- [Bali](https://github.com/bali-framework/bali) - Vereinfachen Sie die Entwicklung von Cloud Native Microservices auf FastAPI und gRPC.
- [Bunnybook](https://github.com/pietrobassi/bunnybook) - Ein kleines soziales Netzwerk mit FastAPI, React + RxJs, Neo4j, PostgreSQL und Redis.
- [Coronavirus-tg-api](https://github.com/egbakou/coronavirus-tg-api) - API zur Verfolgung des globalen Coronavirus (COVID-19, SARS-CoV-2) Ausbruchs.
- [Dispatch](https://github.com/Netflix/dispatch) - Verwalten Sie Sicherheitsvorfälle.
- FastAPI CRUD Beispiel:
  - [Async flavor](https://github.com/testdrivenio/fastapi-crud-async)
  - [Sync Flavor](https://github.com/testdrivenio/fastapi-crud-sync)
- [FastAPI with Observability](https://github.com/Blueswen/fastapi-observability) - Beobachten Sie die FastAPI-App mit drei Säulen der Beobachtbarkeit: Traces (Tempo), Metrics (Prometheus), Logs (Loki) auf Grafana über OpenTelemetry und OpenMetrics.
- [FastAPI Websocket Broadcast](https://github.com/kthwaite/fastapi-websocket-broadcast) - Websocket 'Broadcast' Demo.
- [FastAPI with Celery, RabbitMQ, and Redis](https://github.com/GregaVrbancic/fastapi-celery) - Minimales Beispiel mit FastAPI und Sellerie mit RabbitMQ für Aufgabenwarteschlange, Redis für Sellerie-Backend und Flower für die Überwachung der Sellerie-Aufgaben.
- [FuturamaAPI](https://github.com/koldakov/futuramaapi) - Ein REST- und GraphQL-Spielplatz, der mit Best Practices ausgestattet ist und WebSockets, SSE, Rückrufe, geheime Nachrichten und mehr bietet.
- [JeffQL](https://github.com/yezz123/JeffQL/) - Einfache Authentifizierung und Anmelde-API mit GraphQL und JWT.
- [JSON-RPC Server](https://github.com/smagafurov/fastapi-jsonrpc) - JSON-RPC-Server basierend auf FastAPI.
- [Mailer](https://github.com/rclement/mailer) - Dead-simple Mailer Micro-Service für statische Websites.
- [Markdown-Videos](https://github.com/Snailedlt/Markdown-Videos) - API zum Generieren von Miniaturansichten zum Einbetten in Ihren Markdown-Inhalt.
- [Nemo](https://github.com/harshitsinghai77/nemo-backend) - Sei produktiv mit Nemo.
- [OPAL (Open Policy Administration Layer)](https://github.com/authorizon/opal) - Echtzeit-Autorisierungsupdates auf Open-Policy; erstellt mit FastAPI, Typer und FastAPI WebSocket Pub / Sub.
- [OSBot-Fast-API](https://github.com/owasp-sbot/OSBot-Fast-API) - Typsicherer FastAPI-Wrapper, der Middleware, HTTP-Ereignisverfolgung, AWS Lambda-Integration, Testprogramme und Autokonvertierung zwischen Type Safe, Pydantic und Datenklassen bietet.
- [Polar](https://github.com/polarsource/polar) - Eine Finanzierungs- und Monetarisierungsplattform für Entwickler, die mit FastAPI, SQLAlchemy, Alembic und Arq erstellt wurde.
- [RealWorld Example App - mongo](https://github.com/markqiu/fastapi-mongodb-realworld-example-app)
- [RealWorld Example App - postgres](https://github.com/nsidnev/fastapi-realworld-example-app)
- [redis-streams-fastapi-chat](https://github.com/leonh/redis-streams-fastapi-chat) - Eine einfache redis streams unterstützte chat-app mit websockets, asyncio und fastapi/starlette.
- [Sprites as a service](https://github.com/ljvmiranda921/sprites-as-a-service) - Generieren Sie Ihre persönlichen 8-Bit-Avatare mit Cellular Automata.
- [Slackers](https://github.com/uhavin/slackers) - Slack Webhooks API.
- [TermPair](https://github.com/cs01/termpair) - Anzeigen und Steuern von Terminals aus Ihrem Browser mit End-to-End-Verschlüsselung.
- [Universities](https://github.com/ycd/universities) - API-Service für die Beschaffung von Informationen über +9600 Universitäten weltweit.

## Sponsoren

Bitte unterstützen Sie dieses Open-Source-Projekt, indem Sie sich unsere Sponsoren ansehen:

<a href="https://testdriven.io/courses/tdd-fastapi/?ref=awesome-fastapi" target="_blank" title="Learn to build high-quality web apps with best practices"><img src="images/testdriven.svg"></a>
