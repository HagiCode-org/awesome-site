# Awesome Flask [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Un marco micro web para Python y el ecosistema de extensión alrededor.

Tutoriales, charlas y videos en esta lista son gratuitos. No se aceptan cursos de pago.

<p align="right">
  <a href="https://flask.palletsprojects.com/">
    <img src="flask-icon.svg" width="72" alt="Flask">
  </a>
</p>

## Contenido

- [Recursos oficiales](#official-resources)
- [Extensiones](#extensions)
  - [Administración](#admin)
  - [API](#apis)
  - [Autenticación](#auth)
  - [Cache](#cache)
  - [Base de datos](#databases)
  - [Herramientas para desarrolladores](#developer-tools)
  - [Email](#email)
  - [Formas y validación](#forms-and-validation)
  - [Búsqueda de texto completo](#full-text-search)
  - [Seguridad](#security)
  - [Task Queues](#task-queues)
  - [Utilidades](#utils)
- [Recursos](#resources)
  - [Comunidad](#community)
  - [Tutoriales](#tutorials)
  - [Libros](#books)
  - [Charlas](#talks)
  - [Videos](#videos)
- [Proyectos](#projects)
  - [Plantillas iniciales](#boilerplates)
  - [Proyectos de código abierto](#open-source-projects)
- [Alojamiento](#hosting)

## Recursos oficiales

- [Flask](https://flask.palletsprojects.com/) - Documentación oficial para versiones actuales y anteriores.
- [Flaskr Tutorial](https://flask.palletsprojects.com/tutorial/) - Tutorial oficial que construye un pequeño blog.
- [Source Code](https://github.com/pallets/flask) - Flask mismo, hospedado por Pallets.
- [Pallets-Eco](https://github.com/pallets-eco) - Las extensiones comunitarias se mantienen junto a los proyectos básicos.
- [Quart](https://github.com/pallets/quart) - Contraparte oficial ASGI de Flask, con una API compatible.

## Extensiones

### Administración

- [Flask-Admin](https://github.com/pallets-eco/flask-admin) - Interfaz de administración extensible para gestionar los datos de aplicaciones.

### API

- [APIFlask](https://github.com/apiflask/apiflask) - Marco web API de Flask con validación de malvaviscos y generación de OpenAPI.
- [Connexion](https://github.com/spec-first/connexion) - Primer marco OpenAPI que puede funcionar en Flask.
- [Eve](https://github.com/pyeve/eve) - Marco REST API alimentado por Flask y MongoDB.
- [Flasgger](https://github.com/flasgger/flasgger) - OpenAPI y Swagger UI para vistas a Flask.
- [Flask-Rebar](https://github.com/plangrid/flask-rebar) - Flask, malvavisco y OpenAPI combinados para servicios REST.
- [Flask-RESTful](https://github.com/flask-restful/flask-restful) - Ayudadores ligeros para construir APIs REST.
- [Flask-RESTX](https://github.com/python-restx/flask-restx) - Tinta comunitaria de Flask-RESTPlus con documentación de Swagger.
- [flask-smorest](https://github.com/marshmallow-code/flask-smorest) - Marshmallow-first REST framework with automatic OpenAPI.

### Autenticación

- [Authlib](https://github.com/authlib/authlib) - OAuth 1, OAuth 2, y OpenID Connect clientes y servidores.
- [Authomatic](https://github.com/authomatic/authomatic) - Cliente OAuth y OpenID.
- [Flask-Dance](https://github.com/singingwolfboy/flask-dance) - OAuth consumidor con proveedores incorporados como GitHub y Google.
- [Flask-HTTPAuth](https://github.com/miguelgrinberg/Flask-HTTPAuth) - autenticación básica, digestiva y token para rutas.
- [Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended) - autenticación JWT con tokens refrescante y reclamaciones finas.
- [Flask-Login](https://github.com/maxcountryman/flask-login) - Gestión de login de usuario basada en sesión.
- [Flask-Praetorian](https://github.com/dusktreader/flask-praetorian) - autenticación JWT y autorización basada en roles para APIs.
- [Flask-Pundit](https://github.com/anurag90x/flask-pundit) - Autorización basada en políticas inspirada en Rails Pundit.
- [Flask-Security](https://github.com/pallets-eco/flask-security) - Gestión de cuentas, autenticación y autorización. Continúa Flask-Security-Too.
- [Flask-Session](https://github.com/pallets-eco/flask-session) - Sesiones del lado del servidor para Flask.
- [Flask-User](https://github.com/lingthio/Flask-User) - Registro de usuario personalizable, login y gestión de cuentas.

### Cache

- [Flask-Caching](https://github.com/pallets-eco/flask-caching) - Soporte de caché con múltiples backends.

### Base de datos

- [Flask-Alembic](https://github.com/pallets-eco/flask-alembic) - Migraciones alambiques conectadas a una base de datos de Flask-SQLAlchemy.
- [Flask-Migrate](https://github.com/miguelgrinberg/Flask-Migrate) - Migración de bases de datos para Flask-SQLAlchemy a través de Alembic.
- [Flask-MongoEngine](https://github.com/MongoEngine/flask-mongoengine) - Integración MongoEngine con soporte WTForms.
- [Flask-PyMongo](https://github.com/mongodb-labs/flask-pymongo) - Integración de PyMongo para MongoDB.
- [Flask-SQLAlchemy](https://github.com/pallets-eco/flask-sqlalchemy) - Integración SQLAlchemy para Flask.
- [Advanced Alchemy](https://github.com/litestar-org/advanced-alchemy) - SQLAlchemy compañero con repositorios, ayudantes Alembic y una extensión Flask de primera parte.

### Herramientas para desarrolladores

- [Elastic APM](https://github.com/elastic/apm-agent-python) - Seguimiento de la aplicación para Flask.
- [Flask-DebugToolbar](https://github.com/pallets-eco/flask-debugtoolbar) - In-browser debug toolbar, portado de Django.
- [Flask-MonitoringDashboard](https://github.com/flask-dashboard/Flask-MonitoringDashboard) - Monitoreo automático de rendimiento para los servicios de Flask.
- [Flask-Testing](https://github.com/jarus/flask-testing) - Ayudadores más unitarios para aplicaciones de Flask.
- [Mixer](https://github.com/klen/mixer) - Fabricación de objetos para los modelos SQLAlchemy y Django.
- [nplusone](https://github.com/jmcarp/nplusone) - Detecta consultas N+1 cuando usa Flask-SQLAlchemy.
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-python-contrib) - Instrumentación de localización y métrica, incluyendo Flask.
- [pytest-flask](https://github.com/pytest-dev/pytest-flask) - Accesorios para aplicaciones de Flask.
- [Sentry](https://github.com/getsentry/sentry-python) - Seguimiento de errores SDK con una integración de Flask.

### Email

- [Flask-Mail](https://github.com/pallets-eco/flask-mail) - SMTP enviar correo electrónico para Flask.
- [Flask-Mailman](https://github.com/waynerv/flask-mailman) - El sistema de correo de Django a Flask.

### Formas y validación

- [Flask-Marshmallow](https://github.com/marshmallow-code/flask-marshmallow) - Integración de malvaviscos para serialización y validación.
- [Flask-Pydantic](https://github.com/pallets-eco/flask-pydantic) - Validación pidántica para vistas a Flask.
- [Flask-WTF](https://github.com/pallets-eco/flask-wtf) - WTForms integra con CSRF, carga de archivos y reCAPTCHA.

### Búsqueda de texto completo

- [flask-msearch](https://github.com/honmaple/flask-msearch) - Búsqueda de texto completo para Flask, con soporte Whoosh.
- [SQLAlchemy-Searchable](https://github.com/falcony-io/sqlalchemy-searchable) - Búsqueda de texto completo para los modelos SQLAlchemy en PostgreSQL.

### Seguridad

- [Flask-Bcrypt](https://github.com/maxcountryman/flask-bcrypt) - Bcrypt password hashing.
- [Flask-CORS](https://github.com/corydolphin/flask-cors) - Apoyo de intercambio de recursos entre plataformas (CORS).
- [Flask-Limiter](https://github.com/alisaifee/flask-limiter) - Tarifa límite para las rutas de Flask.
- [Flask-SeaSurf](https://github.com/maxcountryman/flask-seasurf) - Protección del CSRF para Flask.
- [Flask-Talisman](https://github.com/wntrblm/flask-talisman) - HTTPS enforcement and security headers.

### Task Queues

- [Celery](https://github.com/celery/celery) - cola de tarea distribuida comúnmente utilizada con Flask.
- [Dramatiq](https://github.com/Bogdanp/dramatiq) - alternativa rápida a Celery, con [Flask-Dramatiq](https://flask-dramatiq.readthedocs.io/) disponible.
- [Flask-RQ](https://github.com/pallets-eco/flask-rq) - Redis Queue (RQ) integración para Flask y Quart.
- [Huey](https://github.com/coleifer/huey) - Pequeña cola de tareas respaldada por Redis.

### Utilidades

- [Flask-Assets](https://github.com/miracle2k/flask-assets) - Integración Webassets para la agrupación y la minificación de archivos estáticos.
- [Flask-Babel](https://github.com/python-babel/flask-babel) - Internacionalización y localización a través de Babel.
- [Flask-GoogleMaps](https://github.com/flask-extensions/Flask-GoogleMaps) - Insertar Google Maps en plantillas de Flask.
- [flask-graphql](https://github.com/graphql-python/flask-graphql) - Soporte de grafQL para Flask.
- [Flask-HTMLmin](https://github.com/hamidfzm/Flask-HTMLmin) - Minificación HTML para las respuestas de Flask.
- [flask-jsonrpc](https://github.com/cenobites/flask-jsonrpc) - Apoyo JSON-RPC para Flask.
- [Flask-Moment](https://github.com/miguelgrinberg/Flask-Moment) - Moment.js helpers for dates in Jinja templates.
- [Flask-Paginate](https://github.com/lixxu/flask-paginate) - Ayudadores de pagination para Flask.
- [flask-s3](https://github.com/e-dard/flask-s3) - Servir activos estáticos de Flask de Amazon S3.
- [Flask-SocketIO](https://github.com/miguelgrinberg/Flask-SocketIO) - Socket. Integración IO para Flask.
- [Frozen-Flask](https://github.com/Frozen-Flask/Frozen-Flask) - Congela una aplicación Flask en un sitio estático.

## Recursos

### Comunidad

- [Discord](https://discord.gg/pallets) - Pallets servidor comunitario. Usa los canales de ayuda de Flask.
- [Reddit](https://www.reddit.com/r/flask/) - Flask subreddit.
- [Stack Overflow](https://stackoverflow.com/questions/tagged/flask) - Preguntas etiquetadas`flask`.

### Tutoriales

- [The Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) - Serie de larga duración que cubre una aplicación completa de Flask.
- [Discover Flask](https://github.com/realpython/discover-flask) - Serie Flask de Full-stack de Real Python.
- [Flaskr TDD](https://github.com/mjhea0/flaskr-tdd) - Introducción a Flask, desarrollo impulsado por pruebas y JavaScript.

### Libros

- [Explore Flask](https://explore-flask.readthedocs.io/en/latest/) - Libro libre sobre patrones de Flask y estructura de proyecto.
- [Flask Web Development](https://www.oreilly.com/library/view/flask-web-development/9781491991725/) - O'Reilly libro de Miguel Grinberg que construye una aplicación real.

### Charlas

- [Advanced Flask Patterns](https://speakerdeck.com/mitsuhiko/advanced-flask-patterns) - Patrones de Armin Ronacher.
- [Flasky Goodness](https://speakerdeck.com/kennethreitz/flasky-goodness) - Habla de Kenneth Reitz.
- [Domain Driven Design with Flask](https://speakerdeck.com/mikedebo/domain-driven-design-dot-dot-dot-with-flask) - Aplicando ideas DDD en Flask.

### Videos

- [PyVideo](https://pyvideo.org/search.html?q=flask) - Charlas de conferencias etiquetadas con Flask.
- [Python Flask Tutorial](https://www.youtube.com/playlist?list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH) - Serie completa de aplicaciones web de Corey Schafer.

## Proyectos

### Plantillas iniciales

- [cookiecutter-flask](https://github.com/cookiecutter-flask/cookiecutter-flask) - Plantilla de cookiecutter con Bootstrap, Webpack y autenticación.
- [fbone](https://github.com/imwilsonxu/fbone) - Esqueleto clásico Flask con un diseño de aplicación estructurado.
- [Flask-AppBuilder](https://github.com/dpgaspar/Flask-AppBuilder) - Construcción rápida de aplicaciones con seguridad, auto CRUD y gráficos.
- [Flask-Foundation](https://github.com/JackStouffer/Flask-Foundation) - Aplicación de arranque de la mejor práctica.
- [uwsgi-nginx-flask-docker](https://github.com/tiangolo/uwsgi-nginx-flask-docker) - Imagen Docker con uWSGI, Nginx y Flask.

### Proyectos de código abierto

- [Apache Airflow](https://github.com/apache/airflow) - Plataforma a autor, programar y monitorear flujos de trabajo.
- [Apache Superset](https://github.com/apache/superset) - Plataforma de exploración y visualización de datos.
- [FlaskBB](https://github.com/flaskbb/flaskbb) - Software de foro clásico construido con Flask.
- [Indico](https://github.com/indico/indico) - Sistema de gestión de eventos desarrollado en el CERN.
- [PythonBuddy](https://github.com/ethanchewy/PythonBuddy) - Editor Python en línea con comprobación de sintaxis en vivo.
- [Redash](https://github.com/getredash/redash) - Consultar y visualizar datos de muchas fuentes.
- [SecureDrop](https://github.com/freedomofpress/securedrop) - Sistema de presentación de denunciantes para las salas de prensa.
- [SimpleLogin](https://github.com/simple-login/app) - Servicio de alias de correo electrónico que protege buzones personales.
- [SkyLines](https://github.com/skylines-project/skylines) - Base de datos de seguimiento y vuelo en vivo para deslizarse.
- [Timesketch](https://github.com/google/timesketch) - Análisis del cronograma forense colaborativo.

## Alojamiento

- [Flask Deployment Options](https://flask.palletsprojects.com/en/stable/deploying/) - Notas oficiales sobre servidores y plataformas WSGI.
- [Fly.io](https://fly.io/docs/python/frameworks/flask/) - Despliegue Flask cerca de los usuarios de Fly Machines.
- [Google Cloud Run](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service) - Alojamiento de contenedores que funciona bien con Flask.
- [PythonAnywhere](https://help.pythonanywhere.com/pages/Flask/) - Ambiente de Python con soporte de Flask de primera clase.
- [Render](https://render.com/docs/deploy-flask) - Servicios web y trabajadores de fondo para Flask.
- [Zappa](https://github.com/zappa/Zappa) - Implemente aplicaciones WSGI a AWS Lambda y API Gateway.

## Contribución

Las sugerencias son bienvenidas. Por favor lea [CONTRIBUTING.md](CONTRIBUTING.md) primero. Entradas históricas e inmantenidas viven en [archived.md](archived.md).
