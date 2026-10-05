# Awesome Flask [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Ein Micro Web Framework für Python und das Erweiterungs-Ökosystem um es herum.

Tutorials, Gespräche und Videos auf dieser Liste sind kostenlos. Bezahlte Kurse werden nicht akzeptiert.

<p align="right">
  <a href="https://flask.palletsprojects.com/">
    <img src="flask-icon.svg" width="72" alt="Flask">
  </a>
</p>

## Inhalt

- [Offizielle Ressourcen](#official-resources)
- [Erweiterungen](#extensions)
  - [Administration](#admin)
  - [APIs](#apis)
  - [Authentifizierung](#auth)
  - [Cache](#cache)
  - [Datenbanken](#databases)
  - [Entwickler-Tools](#developer-tools)
  - [E-Mail](#email)
  - [Formulare und Validierung](#forms-and-validation)
  - [Volltextsuche](#full-text-search)
  - [Sicherheit](#security)
  - [Aufgabenwarteschlangen](#task-queues)
  - [Hilfsprogramme](#utils)
- [Ressourcen](#resources)
  - [Gemeinschaft](#community)
  - [Tutorials](#tutorials)
  - [Bücher](#books)
  - [Gespräche](#talks)
  - [Videos](#videos)
- [Projekte](#projects)
  - [Projektvorlagen](#boilerplates)
  - [Open-Source-Projekte](#open-source-projects)
- [Hosting](#hosting)

## Offizielle Ressourcen

- [Flask](https://flask.palletsprojects.com/) - Offizielle Dokumentation für aktuelle und vergangene Releases.
- [Flaskr Tutorial](https://flask.palletsprojects.com/tutorial/) - Offizielles Tutorial, das einen kleinen Blog erstellt.
- [Source Code](https://github.com/pallets/flask) - Flask selbst, gehostet von Paletten.
- [Pallets-Eco](https://github.com/pallets-eco) - Erweiterungen der Gemeinschaft neben den Kernprojekten beibehalten.
- [Quart](https://github.com/pallets/quart) - Offizielles ASGI-Gegenstück von Flask mit kompatibler API.

## Erweiterungen

### Administration

- [Flask-Admin](https://github.com/pallets-eco/flask-admin) - Erweiterbare Admin-Schnittstelle zur Verwaltung von Anwendungsdaten.

### APIs

- [APIFlask](https://github.com/apiflask/apiflask) - Flask Web API Framework mit Marshmallow-Validierung und OpenAPI-Generierung.
- [Connexion](https://github.com/spec-first/connexion) - Spec-first OpenAPI Framework, das auf Flask laufen kann.
- [Eve](https://github.com/pyeve/eve) - REST API Framework mit Flask und MongoDB.
- [Flasgger](https://github.com/flasgger/flasgger) - OpenAPI und Swagger UI für Flask-Ansichten.
- [Flask-Rebar](https://github.com/plangrid/flask-rebar) - Flask, Marshmallow und OpenAPI kombiniert für REST-Dienste.
- [Flask-RESTful](https://github.com/flask-restful/flask-restful) - Leichte Helfer zum Aufbau von REST APIs.
- [Flask-RESTX](https://github.com/python-restx/flask-restx) - Community Fork von Flask-RESTPlus mit Swagger Dokumentation.
- [flask-smorest](https://github.com/marshmallow-code/flask-smorest) - Marshmallow-first REST Framework mit automatischer OpenAPI.

### Authentifizierung

- [Authlib](https://github.com/authlib/authlib) - OAuth 1, OAuth 2 und OpenID Connect Clients und Server.
- [Authomatic](https://github.com/authomatic/authomatic) - Framework-agnostische OAuth und OpenID-Client.
- [Flask-Dance](https://github.com/singingwolfboy/flask-dance) - OAuth Verbraucher mit eingebauten Anbietern wie GitHub und Google.
- [Flask-HTTPAuth](https://github.com/miguelgrinberg/Flask-HTTPAuth) - Basic, Digest und Token-Authentifizierung für Routen.
- [Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended) - JWT-Authentifizierung mit Refresh-Token und feinkörnigen Claims.
- [Flask-Login](https://github.com/maxcountryman/flask-login) - Sitzungsbasiertes Benutzer-Login-Management.
- [Flask-Praetorian](https://github.com/dusktreader/flask-praetorian) - JWT-Authentifizierung und rollenbasierte Autorisierung für APIs.
- [Flask-Pundit](https://github.com/anurag90x/flask-pundit) - Richtlinienbasierte Autorisierung inspiriert von Rails Pundit.
- [Flask-Security](https://github.com/pallets-eco/flask-security) - Account Management, Authentifizierung und Autorisierung. Fortsetzung von Flask-Security-Too.
- [Flask-Session](https://github.com/pallets-eco/flask-session) - Serverseitige Sitzungen für Flask.
- [Flask-User](https://github.com/lingthio/Flask-User) - Anpassbare Benutzerregistrierung, Login und Kontoverwaltung.

### Cache

- [Flask-Caching](https://github.com/pallets-eco/flask-caching) - Caching-Unterstützung mit mehreren Backends.

### Datenbanken

- [Flask-Alembic](https://github.com/pallets-eco/flask-alembic) - Alembische Migrationen mit einer Flask-SQLAlchemy-Datenbank.
- [Flask-Migrate](https://github.com/miguelgrinberg/Flask-Migrate) - Datenbankmigrationen für Flask-SQLAlchemy über Alembic.
- [Flask-MongoEngine](https://github.com/MongoEngine/flask-mongoengine) - MongoEngine Integration mit WTForms Unterstützung.
- [Flask-PyMongo](https://github.com/mongodb-labs/flask-pymongo) - PyMongo Integration für MongoDB.
- [Flask-SQLAlchemy](https://github.com/pallets-eco/flask-sqlalchemy) - SQLAlchemy Integration für Flask.
- [Advanced Alchemy](https://github.com/litestar-org/advanced-alchemy) - SQLAlchemy begleitet Repositories, Alembic-Helfer und eine First-Party-Flask-Erweiterung.

### Entwickler-Tools

- [Elastic APM](https://github.com/elastic/apm-agent-python) - Application Performance Monitoring für Flask.
- [Flask-DebugToolbar](https://github.com/pallets-eco/flask-debugtoolbar) - In-Browser-Debug-Toolbar, portiert von Django.
- [Flask-MonitoringDashboard](https://github.com/flask-dashboard/Flask-MonitoringDashboard) - Automatische Leistungsüberwachung für Flask Services.
- [Flask-Testing](https://github.com/jarus/flask-testing) - Unittest Helfer für Flask Anwendungen.
- [Mixer](https://github.com/klen/mixer) - Objektfabrik für SQLAlchemy und Django Modelle.
- [nplusone](https://github.com/jmcarp/nplusone) - Erkennt N+1 Abfragen bei Verwendung von Flask-SQLAlchemy.
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-python-contrib) - Tracing und Metriken Instrumentierung, einschließlich Flask.
- [pytest-flask](https://github.com/pytest-dev/pytest-flask) - Pytest Armaturen für Flask Anwendungen.
- [Sentry](https://github.com/getsentry/sentry-python) - Fehlerverfolgung SDK mit einer Flask-Integration.

### E-Mail

- [Flask-Mail](https://github.com/pallets-eco/flask-mail) - SMTP-E-Mail für Flask.
- [Flask-Mailman](https://github.com/waynerv/flask-mailman) - Hafen von Djangos Postsystem nach Flask.

### Formulare und Validierung

- [Flask-Marshmallow](https://github.com/marshmallow-code/flask-marshmallow) - Marshmallow Integration für Serialisierung und Validierung.
- [Flask-Pydantic](https://github.com/pallets-eco/flask-pydantic) - Pydantische Validierung für Flask-Ansichten.
- [Flask-WTF](https://github.com/pallets-eco/flask-wtf) - WTForms Integration mit CSRF, File Upload und reCAPTCHA.

### Volltextsuche

- [flask-msearch](https://github.com/honmaple/flask-msearch) - Volltextsuche nach Flask, mit Whoosh-Unterstützung.
- [SQLAlchemy-Searchable](https://github.com/falcony-io/sqlalchemy-searchable) - Volltextsuche nach SQLAlchemy-Modellen auf PostgreSQL.

### Sicherheit

- [Flask-Bcrypt](https://github.com/maxcountryman/flask-bcrypt) - Bcrypt Passwort Hashing.
- [Flask-CORS](https://github.com/corydolphin/flask-cors) - Cross-Origin Resource Sharing (CORS) Unterstützung.
- [Flask-Limiter](https://github.com/alisaifee/flask-limiter) - Preisbegrenzung für Flask-Routen.
- [Flask-SeaSurf](https://github.com/maxcountryman/flask-seasurf) - CSRF-Schutz für Flask.
- [Flask-Talisman](https://github.com/wntrblm/flask-talisman) - HTTPS-Erzwingungs- und Sicherheits-Header.

### Aufgabenwarteschlangen

- [Celery](https://github.com/celery/celery) - Verteilte Aufgabenwarteschlange, die üblicherweise mit Flask verwendet wird.
- [Dramatiq](https://github.com/Bogdanp/dramatiq) - Schnelle Alternative zu Sellerie, mit [Flask-Dramatiq](https://flask-dramatiq.readthedocs.io/) verfügbar.
- [Flask-RQ](https://github.com/pallets-eco/flask-rq) - Redis Queue (RQ) Integration für Flask und Quart.
- [Huey](https://github.com/coleifer/huey) - Kleine Redis-unterstützte Aufgabenwarteschlange.

### Hilfsprogramme

- [Flask-Assets](https://github.com/miracle2k/flask-assets) - Webassets-Integration zum Bündeln und Minifizieren statischer Dateien.
- [Flask-Babel](https://github.com/python-babel/flask-babel) - Internationalisierung und Lokalisierung über Babel.
- [Flask-GoogleMaps](https://github.com/flask-extensions/Flask-GoogleMaps) - Einbetten von Google Maps in Flask-Vorlagen.
- [flask-graphql](https://github.com/graphql-python/flask-graphql) - GraphQL-Unterstützung für Flask.
- [Flask-HTMLmin](https://github.com/hamidfzm/Flask-HTMLmin) - HTML-Minifizierung für Flask-Antworten.
- [flask-jsonrpc](https://github.com/cenobites/flask-jsonrpc) - JSON-RPC Unterstützung für Flask.
- [Flask-Moment](https://github.com/miguelgrinberg/Flask-Moment) - Moment.js Helfer für Daten in Jinja Vorlagen.
- [Flask-Paginate](https://github.com/lixxu/flask-paginate) - Pagination Helfer für Flask.
- [flask-s3](https://github.com/e-dard/flask-s3) - Servieren Sie Flask statische Assets von Amazon S3.
- [Flask-SocketIO](https://github.com/miguelgrinberg/Flask-SocketIO) - Socket. IO-Integration für Flask.
- [Frozen-Flask](https://github.com/Frozen-Flask/Frozen-Flask) - Einfriert eine Flask-App in eine statische Site.

## Ressourcen

### Gemeinschaft

- [Discord](https://discord.gg/pallets) - Pallets Community Server. Verwenden Sie die Flask Hilfekanäle.
- [Reddit](https://www.reddit.com/r/flask/) - Flask subreddit.
- [Stack Overflow](https://stackoverflow.com/questions/tagged/flask) - Fragen tagged`flask`.

### Tutorials

- [The Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) - Langform-Serie, die eine vollständige Flask-Anwendung abdeckt.
- [Discover Flask](https://github.com/realpython/discover-flask) - Full-Stack Flask Serie von Real Python.
- [Flaskr TDD](https://github.com/mjhea0/flaskr-tdd) - Einführung in Flask, testgesteuerte Entwicklung und JavaScript.

### Bücher

- [Explore Flask](https://explore-flask.readthedocs.io/en/latest/) - Kostenloses Buch über Flask-Muster und Projektstruktur.
- [Flask Web Development](https://www.oreilly.com/library/view/flask-web-development/9781491991725/) - O ' reilly buch von miguel grinberg, das eine echte anwendung baut.

### Gespräche

- [Advanced Flask Patterns](https://speakerdeck.com/mitsuhiko/advanced-flask-patterns) - Muster von Armin Ronacher.
- [Flasky Goodness](https://speakerdeck.com/kennethreitz/flasky-goodness) - Vortrag von Kenneth Reitz.
- [Domain Driven Design with Flask](https://speakerdeck.com/mikedebo/domain-driven-design-dot-dot-dot-with-flask) - Anwendung von DDD Ideen in Flask.

### Videos

- [PyVideo](https://pyvideo.org/search.html?q=flask) - Konferenzgespräche tagged Flask.
- [Python Flask Tutorial](https://www.youtube.com/playlist?list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH) - Voll funktionsfähige Web-App-Serie von Corey Schafer.

## Projekte

### Projektvorlagen

- [cookiecutter-flask](https://github.com/cookiecutter-flask/cookiecutter-flask) - Cookiecutter Vorlage mit Bootstrap, Webpack und Authentifizierung.
- [fbone](https://github.com/imwilsonxu/fbone) - Klassisches Flask-Skelett mit einem strukturierten Anwendungslayout.
- [Flask-AppBuilder](https://github.com/dpgaspar/Flask-AppBuilder) - Rapid app builder mit sicherheit, auto crud und charts.
- [Flask-Foundation](https://github.com/JackStouffer/Flask-Foundation) - Best-Practice Starter-Anwendung.
- [uwsgi-nginx-flask-docker](https://github.com/tiangolo/uwsgi-nginx-flask-docker) - Docker-Bild mit uWSGI, Nginx und Flask.

### Open-Source-Projekte

- [Apache Airflow](https://github.com/apache/airflow) - Plattform zum Autor, Planen und Überwachen von Workflows.
- [Apache Superset](https://github.com/apache/superset) - Datenexplorations- und Visualisierungsplattform.
- [FlaskBB](https://github.com/flaskbb/flaskbb) - Klassische Forum-Software mit Flask gebaut.
- [Indico](https://github.com/indico/indico) - Event Management System wurde am CERN entwickelt.
- [PythonBuddy](https://github.com/ethanchewy/PythonBuddy) - Online Python Editor mit Live-Syntaxprüfung.
- [Redash](https://github.com/getredash/redash) - Abfrage und Visualisierung von Daten aus vielen Quellen.
- [SecureDrop](https://github.com/freedomofpress/securedrop) - Whistleblower-Einreichungssystem für Newsrooms.
- [SimpleLogin](https://github.com/simple-login/app) - E-Mail-Alias-Service, der persönliche Posteingänge schützt.
- [SkyLines](https://github.com/skylines-project/skylines) - Live-Tracking und Flugdatenbank für das Gleiten.
- [Timesketch](https://github.com/google/timesketch) - Kollaborative forensische Zeitlinienanalyse.

## Hosting

- [Flask Deployment Options](https://flask.palletsprojects.com/en/stable/deploying/) - Offizielle Hinweise auf WSGI Servern und Plattformen.
- [Fly.io](https://fly.io/docs/python/frameworks/flask/) - Stellen Sie Flask in der Nähe von Benutzern auf Fly Machines bereit.
- [Google Cloud Run](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service) - Container-Hosting, das gut mit Flask funktioniert.
- [PythonAnywhere](https://help.pythonanywhere.com/pages/Flask/) - Hosted Python-Umgebung mit erstklassiger Flask-Unterstützung.
- [Render](https://render.com/docs/deploy-flask) - Webdienste und Hintergrundarbeiter für Flask.
- [Zappa](https://github.com/zappa/Zappa) - Bereitstellen von WSGI-Apps für AWS Lambda und API Gateway.

## Beitrag

Vorschläge sind willkommen. Bitte lesen [CONTRIBUTING.md](CONTRIBUTING.md) zuerst. Historische und nicht gepflegte Einträge leben in [archived.md](archived.md).
