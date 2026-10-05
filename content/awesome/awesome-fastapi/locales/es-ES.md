<!--lint disable double-link-->

# Awesome FastAPI | [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> Una lista curada de cosas increíbles relacionadas con FastAPI.

[FastAPI](https://fastapi.tiangolo.com/) es un marco web moderno, de alto rendimiento, integrado por baterías Python que es perfecto para construir APIs RESTful.

## Contenido

- [Extensiones de terceros](#third-party-extensions)
  - [Administración](#admin)
  - [Autenticación](#auth)
  - [Ciberseguridad](#cybersecurity)
  - [Base de datos](#databases)
  - [Inyección de dependencia](#dependency-injection)
  - [Herramientas para desarrolladores](#developer-tools)
  - [Email](#email)
  - [Utilidades](#utils)
- [Recursos](#resources)
  - [Recursos oficiales](#official-resources)
  - [Recursos externos](#external-resources)
  - [Podcasts](#podcasts)
  - [Artículos](#articles)
  - [Tutoriales](#tutorials)
  - [Charlas](#talks)
  - [Videos](#videos)
  - [Cursos](#courses)
  - [Buenas Prácticas](#best-practices)
- [Alojamiento](#hosting)
  - [PaaS](#paas)
  - [IaaS](#iaas)
  - [Servidor](#serverless)
- [Proyectos](#projects)
  - [Plantilla inicial](#boilerplate)
  - [Docker Imágenes](#docker-images)
  - [Proyectos de código abierto](#open-source-projects)
- [Patrocinadores](#sponsors)

## Extensiones de terceros

### Administración

- [FastAdmin](https://github.com/vsdudakov/fastadmin) - Dashboard de administración fácil de usar para FastAPI (también Flask y Django), inspirado en Django Admin.
- [FastAPI Admin](https://github.com/fastapi-admin/fastapi-admin) - Panel de administración funcional que proporciona una interfaz de usuario para realizar operaciones de CRUD en sus datos. Actualmente sólo trabaja con el ORM Tortoise.
- [FastAPI Amis Admin](https://github.com/amisadmin/fastapi-amis-admin) - Un marco de administración FastAPI de alto rendimiento, eficiente y fácilmente extensible.
- [Piccolo Admin](https://github.com/piccolo-orm/piccolo_admin) - Un poderoso y moderno GUI administrador, usando el ORM Piccolo.
- [SQLAlchemy Admin](https://github.com/smithyhq/sqladmin) - Panel de Admin para FastAPI/Starlette que funciona con los modelos SQLAlchemy.
- [Starlette Admin](https://github.com/jowilf/starlette-admin) - Marco de Admin para FastAPI/Starlette, soportando SQLAlchemy, SQLModel, MongoDB y ODMantic.


### Autenticación

- [AuthX](https://github.com/yezz123/AuthX) - Autenticaciones personalizables y gestión Oauth2 para FastAPI.
- [FastAPI Auth](https://github.com/dmontagu/fastapi-auth) - Auth ajustable que soporta el flujo de contraseña OAuth2 con acceso JWT y tokens refrescantes.
- [FastAPI Azure Auth](https://github.com/Intility/fastapi-azure-auth) - autenticación Azure AD para sus API con soporte único y multi inquilino.
- [FastAPI Casbin Auth](https://github.com/apache/casbin-python-fastapi-casbin-auth) - Autorización que admite varios modelos de control de acceso como RBAC, ReBAC y ABAC a través de Casbin.
- [FastAPI Cloud Auth](https://github.com/tokusumi/fastapi-cloudauth) - Integración simple entre FastAPI y servicios de autenticación en la nube (AWS Cognito, Auth0, Firebase Authentication).
- [FastAPI Login](https://github.com/maxrdu/fastapi_login) - Gestión y autenticación de la cuenta (basada en [Flask-Login](https://github.com/maxcountryman/flask-login)).
- [FastAPI JWT Auth](https://github.com/IndominusByte/fastapi-jwt-auth) - JWT auth (basado en [Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended)).
- [FastAPI Permissions](https://github.com/holgi/fastapi-permissions) - permisos de nivel de fila.
- [FastAPI Security](https://github.com/jacobsvante/fastapi-security) - Implementa autenticación y autorización como dependencias en FastAPI.
- [FastAPI Simple Security](https://github.com/mrtolkien/fastapi_simple_security) - Seguridad de clave de API fuera de la caja manejable a través de las operaciones de ruta.
- [FastAPI Users](https://github.com/fastapi-users/fastapi-users) - Gestión de cuentas, autenticación, autorización.
- [FastAPI Zitadel Auth](https://github.com/cleanenergyexchange/fastapi-zitadel-auth) - OAuth2 usando la plataforma IAM [Zitadel](https://github.com/zitadel/zitadel).

### Ciberseguridad

- [FastAPI Guard](https://github.com/rennf93/fastapi-guard) - Limitación de tarifas, Prohibición automática de IPs, detección de ataques de penetración, lista blanca / lista negra (contables, IPs, proveedores de nube), Filtro de agente de usuario, geolocalización, integración de redis para la persistencia, y más.
- [secure](https://github.com/TypeError/secure) - Define y aplica encabezados de seguridad HTTP consistentemente en aplicaciones FastAPI usando ASGI middleware y un único objeto de configuración.

### Base de datos

#### ORMs

- [Edgy ORM](https://github.com/dymmond/edgy) - Las bases de datos complejas son simples.
- [FastAPI SQLAlchemy](https://github.com/mfreeborn/fastapi-sqlalchemy) - Integración simple entre FastAPI y [SQLAlchemy](https://www.sqlalchemy.org/).
- [Fastapi-SQLA](https://github.com/dialoguemd/fastapi-sqla) - SQLAlchemy extensión para FastAPI con soporte para paginación, asincio y pytest.
- [FastAPIwee](https://github.com/Ignisor/FastAPIwee) - Una manera sencilla de crear REST API basado en [PeeWee](https://github.com/coleifer/peewee) modelos.
- [FastSQLA](https://github.com/hadrien/FastSQLA) - Extensión Async SQLAlchemy 2.0+ para FastAPI con soporte SQLModel, paginación incorporada &amp; más.
- [GINO](https://github.com/python-gino/gino) - Un ORM asincrónico ligero construido sobre el núcleo SQLAlchemy para Python asyncio.
  - [FastAPI Example](https://github.com/leosussan/fastapi-gino-arq-uvicorn)
- [ORM](https://github.com/encode/orm) - Un ORM asinc.
- [ormar](https://collerek.github.io/ormar/) - Ormar es un ORM asinc que utiliza validación Pydantic y se puede utilizar directamente en solicitudes y respuestas FastAPI para que se quede con sólo un conjunto de modelos para mantener. Se incluyeron migraciones alambique.
  - [FastAPI Example](https://collerek.github.io/ormar/latest/fastapi/) - Usando FastAPI con ormar.
- [Piccolo](https://github.com/piccolo-orm/piccolo) - Un ORM asinc y constructor de consultas, apoyando Postgres y SQLite, con baterías (migración, seguridad, etc).
  - [FastAPI Examples](https://github.com/piccolo-orm/piccolo_examples) - Usando FastAPI con Piccolo.
- [Tortoise ORM](https://tortoise.github.io) - Un asincio fácil de usar ORM (Object Relational Mapper) inspirado en Django.
  - [FastAPI Example](https://tortoise.github.io/examples/fastapi.html) - Un ejemplo de la integración Tortoise-ORM FastAPI.
  - [Tutorial: Setting up Tortoise ORM with FastAPI](https://web.archive.org/web/20200523174158/https://robwagner.dev/tortoise-fastapi-setup/)
  - [Aerich](https://github.com/tortoise/aerich) - Herramientas de migración de ORM Tortoise.
- [Saffier ORM](https://github.com/tarsil/saffier) - El único Python ORM que necesitarás.
- [SQLModel](https://sqlmodel.tiangolo.com/) - SQLModel (que está alimentado por Pydantic y SQLAlchemy) es una biblioteca para interactuar con bases de datos SQL del código Python, con objetos Python.

#### Query Builders

- [asyncpgsa](https://github.com/CanopyTax/asyncpgsa) - Un envoltorio alrededor [asyncpg](https://github.com/MagicStack/asyncpg) para uso con [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/).
- [Databases](https://github.com/encode/databases) - Async SQL query builder que funciona en la parte superior del [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/) lenguaje de expresión.
- [PyPika](https://github.com/kayak/pypika) - Un constructor de consultas SQL que expone toda la riqueza del lenguaje SQL.

#### ODM

- [Beanie](https://github.com/BeanieODM/beanie) - Asynchronous Python ODM para MongoDB, basado en [Motor](https://motor.readthedocs.io/en/stable/) y [Pydantic](https://pydantic.dev/docs/), que soporta las migraciones de datos y esquema fuera de la caja.
- [MongoEngine](https://github.com/MongoEngine/mongoengine) - A Document-Object Mapper (pensar ORM, pero para bases de datos de documentos) para trabajar con MongoDB de Python.
- [Motor](https://motor.readthedocs.io/) - Conductor de pitón asincrónico para MongoDB.
- [ODMantic](https://art049.github.io/odmantic/) - AsyncIO MongoDB ODM integrado con [Pydantic](https://pydantic.dev/docs/).
- [PynamoDB](https://github.com/pynamodb/PynamoDB) - Una interfaz pitónica al DynamoDB de Amazon.

#### Otras herramientas

- [Pydantic-SQLAlchemy](https://github.com/tiangolo/pydantic-sqlalchemy) - Convertir SQLAlchemy modelos en [Pydantic](https://pydantic.dev/docs/) modelos.
- [FastAPI-CamelCase](https://nf1s.github.io/fastapi-camelcase/) - Soporte CamelCase JSON para FastAPI utilizando [Pydantic](https://pydantic.dev/docs/).
  - [CamelCase Models with FastAPI and Pydantic](https://medium.com/analytics-vidhya/camel-case-models-with-fast-api-and-pydantic-5a8acb6c0eee) - Acompañando el blog del autor de la extensión.
 
### Inyección de dependencia

- [modern-di](https://github.com/modern-python/modern-di) - Marco de inyección de dependencia con contenedores y alcances IoC, con un [FastAPI integration](https://github.com/modern-python/modern-di-fastapi).
- [Wireup](https://github.com/maldoinc/wireup) - Inyecte dependencias con una sobrecarga de tiempo de ejecución cero en FastAPI; Compartir dependencias a través de web, cli u otras interfaces.

### Herramientas para desarrolladores

- [FastAPI Code Generator](https://github.com/koxudaxi/fastapi-code-generator) - Cree una aplicación FastAPI desde un archivo OpenAPI, permitiendo el desarrollo impulsado por esquemas.
- [FastAPI Client Generator](https://github.com/dmontagu/fastapi_client) - Generar un cliente API amigable con mypy e IDE de una especie OpenAPI.
- [FastAPI Cruddy Framework](https://github.com/mdconaway/fastapi-cruddy-framework) - Una biblioteca compañera de FastAPI diseñada para traer la productividad de desarrollo de Ruby en Rails, Ember.js o Sails.js al ecosistema FastAPI.
- [FastAPI MVC](https://github.com/fastapi-mvc/fastapi-mvc) - Herramienta de productividad para desarrolladores para hacer APIs de alta calidad para la producción de FastAPI.
- [FastAPI Profiler](https://github.com/sunhailin-Leo/fastapi_profiler) - Un FastAPI Middleware de joerick/pyinstrument para comprobar su rendimiento de servicio.
- [FastAPI Versioning](https://github.com/DeanWay/fastapi-versioning) - Versión de API.
- [Jupyter Notebook REST API](https://github.com/Invictify/Jupter-Notebook-REST-API) - Ejecute sus cuadernos Jupyter como puntos finales RESTful API.
- [Manage FastAPI](https://github.com/ycd/manage-fastapi) - Herramienta CLI para generar y gestionar proyectos FastAPI.
- [msgpack-asgi](https://github.com/florimondmanca/msgpack-asgi) - Automático [MessagePack](https://msgpack.org/) negociación de contenidos.
- [python-cqrs](https://github.com/pypatterns/python-cqrs) - Marco de arquitectura organizado por eventos con CQRS, Transaction Outbox, orquestación Saga, integración FastAPI/FastStream inigualable.

### Email

- [FastAPI Mail](https://github.com/sabuhish/fastapi-mail) - Sistema de correo ligero para enviar correos electrónicos y archivos adjuntos (individual y a granel).

### Utilidades

- [Apitally](https://github.com/apitally/apitally-py) - Análisis de API, monitoreo y solicitud de registro para FastAPI.
- [ASGI Correlation ID](https://github.com/snok/asgi-correlation-id) - Solicito un middleware de identificación.
- [FastAPI Cache](https://github.com/comeuplater/fastapi_cache) - Un simple sistema de caché ligero.
- [FastAPI Cache](https://github.com/long2ice/fastapi-cache) - Una herramienta para cache FastAPI respuesta y resultados de función, con soporte para Redis, Memcached, DynamoDB y backends in-memory.
- [FastAPI Chameleon](https://github.com/mikeckennedy/fastapi-chameleon) - Añade la integración del lenguaje de plantilla de Chameleon a FastAPI.
- [FastAPI CloudEvents](https://github.com/sasha-tkachev/fastapi-cloudevents) - [CloudEvents](https://cloudevents.io/) integración para FastAPI.
- [FastAPI Contrib](https://github.com/identixone/fastapi_contrib) - Conjunto de utilidades: paginación, auth middleware, permisos, manejadores de excepción personalizados, soporte MongoDB y middleware Opentracing.
- [FastAPI FastCRUD](https://github.com/benavlabs/fastcrud)) - Robust async CRUD operaciones y utilidades de creación flexibles endpoint.
- [FastAPI Events](https://github.com/melvinkcx/fastapi-events) - Asynchronous event dispatching/handling library for FastAPI and Starlette.
- [FastAPI FeatureFlags](https://github.com/Pytlicek/fastapi-featureflags) - Implementación sencilla de banderas de características para FastAPI.
- [FastAPI Injectable](https://github.com/JasperSui/fastapi-injectable) - Utilice la inyección de dependencia de FastAPI fuera de los controladores de ruta en herramientas CLI, tareas de fondo, trabajadores, y más.
- [FastAPI Jinja](https://github.com/AGeekInside/fastapi-jinja) - Añade la integración del lenguaje de plantilla Jinja a FastAPI.
- [FastAPI Lazy](https://github.com/yezz123/fastango) - Paquete perezoso para iniciar su proyecto utilizando FastAPI.
- [FastAPI Limiter](https://github.com/long2ice/fastapi-limiter) - Limitador de tarifas de solicitud para FastAPI.
- [FastAPI Listing](https://github.com/danielhasan1/fastapi-listing) - Una biblioteca para diseñar/compilar listas APIs usando arquitectura basada en componentes, paginador de consultas incorporado, clasificador, django-admin como filtros &amp; mucho más.
- [FastAPI MQTT](https://github.com/sabuhish/fastapi-mqtt) - Una extensión para el protocolo MQTT.
- [FastAPI Opentracing](https://github.com/wesdu/fastapi-opentracing) - Opentracing middleware and database tracing support for FastAPI.
- [FastAPI Pagination](https://github.com/uriyyo/fastapi-pagination) - Pagination for FastAPI.
- [FastAPI Plugins](https://github.com/madkote/fastapi-plugins) - Redis y plugins de Scheduler.
- [FastAPI ServiceUtils](https://github.com/skallfass/fastapi_serviceutils) - Generador para crear servicios de API.
- [FastAPI Shield](https://github.com/jymchng/fastapi-shield) - Biblioteca general FastAPI para escribir cualquier decorador genérico de endpoint capaz de la inyección de dependencias perezosas.
- [FastAPI SocketIO](https://github.com/pyropy/fastapi-socketio) - Fácil integración para FastAPI y SocketIO.
- [FastAPI Utilities](https://github.com/fastapiutils/fastapi-utils) - Servicios reutilizables: opiniones basadas en clases, respuesta que infiere el router, tareas periódicas, tiempo intermedio, sesión SQLAlchemy, simplificación de las especificaciones OpenAPI.
- [FastAPI Viewsets](https://github.com/svalench/fastapi_viewsets) - Django REST Visualizaciones de inspiración marco para FastAPI, organización de punta CRUD basada en clases con registro automático de rutas.
- [FastAPI Websocket Pub/Sub](https://github.com/authorizon/fastapi_websocket_pubsub) - El clásico patrón pub/sub hecho fácilmente accesible y escalable en la web y a través de su nube en tiempo real.
- [FastAPI Websocket RPC](https://github.com/authorizon/fastapi_websocket_rpc) - RPC (bidirectional JSON RPC) sobre Websockets hecho fácil, robusto y la producción listo.
- [OpenTelemetry FastAPI Instrumentation](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/instrumentation/opentelemetry-instrumentation-fastapi) - La biblioteca proporciona una instrumentación automática y manual de los marcos web FastAPI, instrumentando las solicitudes http cumplidas mediante aplicaciones utilizando el marco.
- [Prerender Python Starlette](https://github.com/BeeMyDesk/prerender-python-starlette) - Starlette middleware para Prerender.
- [Prometheus FastAPI Instrumentator](https://github.com/trallnag/prometheus-fastapi-instrumentator) - Un Instrumentador Prometheus configurable y modular para su aplicación FastAPI.
- [SlowApi](https://github.com/laurents/slowapi) - Limitador de tarifas (basado en [Flask-Limiter](https://flask-limiter.readthedocs.io)).
- [Starlette Context](https://github.com/tomwojcik/starlette-context) - Le permite almacenar y acceder a los datos de solicitud en cualquier lugar de su proyecto, útil para registrar.
- [Starlette Exporter](https://github.com/stephenhillier/starlette_exporter) - Una integración más prometeo para FastAPI y Starlette.
- [Starlette OpenTracing](https://github.com/acidjunk/starlette-opentracing) - Soporte de apertura para Starlette y FastAPI.
- [Starlette Prometheus](https://github.com/perdy/starlette-prometheus) - Integración Prometheus para FastAPI y Starlette.
- [Strawberry GraphQL](https://github.com/strawberry-graphql/strawberry) - Biblioteca Python GraphQL basado en clases de datos.
- [Pydantic Resolve](https://github.com/KLR-Pattern/pydantic-resolve) -  Convierte la clase pidántica en un potente contenedor composable introduciendo ganchos de resolución y post-proceso.

## Recursos

### Recursos oficiales

- [Documentation](https://fastapi.tiangolo.com/) - Documentación completa.
- [Tutorial](https://fastapi.tiangolo.com/tutorial/) - Tutorial oficial que le muestra cómo utilizar FastAPI con la mayoría de sus características, paso a paso.
- [Source Code](https://github.com/fastapi/fastapi) - Alojado en GitHub.
- [Discord](https://discord.com/invite/VQjSZaeJmf) - Chat con otros usuarios de FastAPI.

### Recursos externos

- [TestDriven.io FastAPI](https://testdriven.io/blog/topics/fastapi/) - Múltiples artículos específicos de FastAPI que se centran en desarrollar y probar APIs RESTful para producción, sirviendo modelos de aprendizaje automático, y más.

### Podcasts

- [Build The Next Generation Of Python Web Applications With FastAPI](https://www.pythonpodcast.com/fastapi-web-application-framework-episode-259/) - En este episodio de [Podcast Init](https://www.pythonpodcast.com/), el creador de FastAPI,[Sebastián Ramirez](https://tiangolo.com/), comparte sus motivaciones para construir FastAPI y cómo funciona bajo la capucha.
- [FastAPI on PythonBytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) - Bonita visión general del proyecto.

### Artículos

- [FastAPI has Ruined Flask Forever for Me](https://medium.com/data-science/fastapi-has-ruined-flask-forever-for-me-73916127da)
- [Why we switched from Flask to FastAPI for production machine learning](https://medium.com/@calebkaiser/why-we-switched-from-flask-to-fastapi-for-production-machine-learning-765aab9b3679) - Mira a fondo por qué puedes querer pasar de Flask a FastAPI.

### Tutoriales

- [Async SQLAlchemy with FastAPI](https://stribny.name/posts/fastapi-asyncalchemy/) - Aprende a usar SQLAlchemy de forma asincrónica.
- [Deploy Machine Learning Models with Keras, FastAPI, Redis and Docker](https://medium.com/analytics-vidhya/deploy-machine-learning-models-with-keras-fastapi-redis-and-docker-4940df614ece)
- [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/) - Desarrollar y probar una API asincrónica con FastAPI, Postgres, Pytest y Docker utilizando el desarrollo de Test-Driven.
- [FastAPI for Flask Users](https://amitness.com/posts/fastapi-vs-flask) - Aprende FastAPI con una comparación de códigos lado a lado a Flask.
- [FastAPI Session Leak Detection](https://www.logiclooptech.dev/fastapi-session-leak-detection-sqlalchemy-long-running/) - Diagnosticar y arreglar sesiones SQLAlchemy de largo plazo y el agotamiento de la piscina de conexión en producción.
- [Implementing FastAPI Services – Abstraction and Separation of Concerns](https://camillovisini.com/coding/abstracting-fastapi-services) - FastAPI aplicación y estructura de servicio para una base de código más sostenible.
- [Introducing FARM Stack - FastAPI, React, and MongoDB](https://www.mongodb.com/docs/languages/python/pymongo-driver/current/integrations/fastapi-integration/) - Comenzar con una completa pila de aplicaciones web FastAPI.
- [Multitenancy with FastAPI, SQLAlchemy and PostgreSQL](https://mergeboard.com/blog/6-multitenancy-fastapi-sqlalchemy-postgresql/) - Aprende cómo hacer las aplicaciones FastAPI multi-tenant listas.
- [Real-time data streaming using FastAPI and WebSockets](https://stribny.name/posts/real-time-data-streaming-using-fastapi-and-websockets/) - Aprende cómo transmitir datos desde FastAPI directamente en un gráfico en tiempo real.
- [Running FastAPI applications in production](https://stribny.name/posts/fastapi-production/) - Utilice Gunicorn con sistema para despliegues de producción.
- [Serving Machine Learning Models with FastAPI in Python](https://medium.com/@8B_EC/tutorial-serving-machine-learning-models-with-fastapi-in-python-c1a27319c459) - Utilice FastAPI para desplegar rápidamente y fácilmente y servir modelos de aprendizaje automático en Python como API RESTful.
- [Streaming video with FastAPI](https://stribny.name/posts/fastapi-video/) - Aprende a servir secuencias de vídeo.
- [Using Hypothesis and Schemathesis to Test FastAPI](https://testdriven.io/blog/fastapi-hypothesis/) - Aplicar pruebas basadas en la propiedad a FastAPI.

### Charlas

- [PyConBY 2020: Serve ML models easily with FastAPI](https://www.youtube.com/watch?v=z9K5pwb0rt8) - Desde la charla de Sebastian Ramirez aprenderás a construir fácilmente una API de producción (JSON) para tus modelos ML con FastAPI, incluyendo las mejores prácticas por defecto.
- [PyCon UK 2019: FastAPI from the ground up](https://www.youtube.com/watch?v=3DLwPcrE5mA) - Esta charla muestra cómo construir una sencilla API REST para una base de datos desde el suelo usando FastAPI.

### Videos

- [Building a Stock Screener with FastAPI](https://www.youtube.com/watch?v=5GorMC2lPpk) - A usted construye una pantalla de stock basada en web con FastAPI, se introducirá en muchas de las características de FastAPI, incluyendo modelos Pydantic, inyección de dependencia, tareas de fondo, e integración SQLAlchemy.
- [Building Web APIs Using FastAPI](https://www.youtube.com/watch?v=Pe66M8mn-wA) - Utilice FastAPI para crear una interfaz de programación de aplicaciones web (RESTful API).
- [FastAPI - A Web Framework for Python](https://www.youtube.com/watch?v=PUhio8CprhI&list=PL5gdMNl42qynpY-o43Jk3evfxEKSts3HS) - Vea cómo hacer validaciones numéricas con FastAPI.
- [FastAPI vs. Django vs. Flask](https://www.youtube.com/watch?v=9YBAOYQOzWs) - ¿Qué marco es mejor para Python en 2020? ¿Qué utiliza async/await el mejor? ¿Cuál es el más rápido?
- [Serving Machine Learning Models As API with FastAPI](https://www.youtube.com/watch?v=mkDxuRvKUL8) - Construye una API de aprendizaje automático con FastAPI.

### Cursos

- [Test-Driven Development with FastAPI and Docker](https://testdriven.io/courses/tdd-fastapi/) - Aprende cómo construir, probar e implementar un microservicio de resumen de texto con Python, FastAPI y Docker.
- [Modern APIs with FastAPI and Python](https://training.talkpython.fm/courses/modern-fastapi-apis) - Un curso diseñado para crear nuevas APIs funcionando en la nube con FastAPI rápidamente.
- [Full Web Apps with FastAPI Course](https://training.talkpython.fm/courses/full-html-web-applications-with-fastapi) - Aprenderás a crear aplicaciones web completas con FastAPI, equivalentes a lo que puedes hacer con Flask o Django.
- [The Definitive Guide to Celery and FastAPI](https://testdriven.io/courses/fastapi-celery/) - Aprenda a agregar Celery a una aplicación FastAPI para proporcionar procesamiento de tareas asincrónico.

### Buenas Prácticas

- [FastAPI Best Practices](https://github.com/zhanymkanov/fastapi-best-practices) - Recopilación de mejores prácticas en un GitHub repo.
- [FastAPI-Dishka-FastStream](https://github.com/faststream-community/fastapi-dishka-faststream) - Combina FastAPI, platina, flujo rápido, sqlalchemy, pydantic.
- [FastAPI Clean Example](https://github.com/ivan-borovets/fastapi-clean-example) - Clean Architecture backend ejemplo construido con FastAPI.

## Alojamiento

### PaaS

(Plataformas como servicio)

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [Fly](https://fly.io)(G)[tutorial](https://fly.io/docs/python/frameworks/fastapi/),[Deploy from a Git repo](https://github.com/fly-apps/hello-fastapi))
- [Google App Engine](https://cloud.google.com/appengine)
- [Heroku](https://www.heroku.com/)(G)[Step-by-step tutorial](https://tutlinks.com/create-and-deploy-fastapi-app-to-heroku/),[ML model on Heroku tutorial](https://testdriven.io/blog/fastapi-machine-learning/))
- [Microsoft Azure App Service](https://azure.microsoft.com/en-us/products/app-service/)

### IaaS

(Infraestructura como servicio)

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Google Compute Engine](https://cloud.google.com/compute)
- [Digital Ocean](https://www.digitalocean.com/)
- [Linode](https://www.linode.com/)

### Servidor

Marcos:

- [Chalice](https://github.com/aws/chalice)
- [Mangum](https://mangum.io/) - Adaptador para ejecutar aplicaciones ASGI con AWS Lambda y API Gateway.
- [Vercel](https://vercel.com/) - (antes Zeit) ([example](https://github.com/Snailedlt/Markdown-Videos)).

Cómputo:

- [AWS Lambda](https://aws.amazon.com/lambda/)(G)[example](https://github.com/iwpnd/fastapi-aws-lambda-example))
- [Google Cloud Functions](https://cloud.google.com/functions)
- [Azure Functions](https://azure.microsoft.com/en-us/products/functions/)
- [Google Cloud Run](https://cloud.google.com/run)(G)[example](https://github.com/anthonycorletti/cloudrun-fastapi))

## Proyectos

### Plantilla inicial

- [Full Stack FastAPI and PostgreSQL - Base Project Generator](https://github.com/fastapi/full-stack-fastapi-template) - Plantilla Full Stack FastAPI
, que incluye FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub Actions, HTTPS automático y más (desarrollado por el creador de FastAPI,[Sebastián Ramírez](https://github.com/tiangolo)).
- [FastAPI and Tortoise ORM](https://github.com/prostomarkeloff/fastapi-tortoise) - Potente pero simple plantilla para API web w/ FastAPI (como marco web) y Tortoise-ORM (para trabajar a través de la base de datos sin dolor de cabeza).
- [FastAPI + SQLAlchemy 2 + PostgreSQL Template](https://github.com/modern-python/fastapi-sqlalchemy-template) - Inicio Dockerized con inyección de dependencia (modern-di), migraciones alambique y un flujo de trabajo de archivo justo.
- [FastAPI Model Server Skeleton](https://github.com/eightBEC/fastapi-ml-skeleton) - Aplicación de esqueleto para servir modelos de aprendizaje automático listos para la producción.
- [cookiecutter-spacy-fastapi](https://github.com/microsoft/cookiecutter-spacy-fastapi) - Implementaciones rápidas de modelos spaCy con FastAPI.
- [cookiecutter-fastapi](https://github.com/arthurhenrique/cookiecutter-fastapi) - Plantilla de cookies para proyectos FastAPI usando: Machine Learning, Poetry, Azure Pipelines y pytest.
- [openapi-python-client](https://github.com/openapi-generators/openapi-python-client) - Genera clientes modernos FastAPI Python (via FastAPI) de OpenAPI.
- [Pywork](https://github.com/vutran1710/YeomanPywork) - [Yeoman](https://yeoman.io/) Generador para escalar una aplicación FastAPI.
- [fastapi-gino-arq-uvicorn](https://github.com/leosussan/fastapi-gino-arq-uvicorn) - Plantilla para una API REST de alto rendimiento, en Python. FastAPI + GINO + Arq + Uvicorn (w/ Redis y PostgreSQL).
- [FastAPI and React Template](https://github.com/Buuntu/fastapi-react) - Placa de caldera de galletas de pila completa con FastAPI, TypeScript, Docker, PostgreSQL y React.
- [FastAPI Nano](https://github.com/rednafi/fastapi-nano) - Simple FastAPI plantilla con estructura de patrón de fábrica.
- [FastAPI template](https://github.com/s3rius/FastAPI-template) - Generador de proyecto flexible y ligero FastAPI. Incluye soporte para SQLAlchemy, múltiples bases de datos, CI/CD, Docker y Kubernetes.
- [FastAPI on Google Cloud Run](https://github.com/anthonycorletti/cloudrun-fastapi) - Boilerplate para el edificio API con FastAPI, SQLModel y Google Cloud Run.
- [FastAPI with Firestore](https://github.com/anthonycorletti/firestore-fastapi) - Boilerplate para el edificio API con FastAPI y Google Cloud Firestore.
- [fastapi-alembic-sqlmodel-async](https://github.com/vargasjona/fastapi-alembic-sqlmodel-async) - Esta es una plantilla de proyecto que utiliza FastAPI, Alembic y SQLModel async como ORM.
- [fastapi-starter-project](https://github.com/mirzadelic/fastapi-starter-project) - Una plantilla de proyecto que utiliza FastAPI, SQLModel, Alembic, Pytest, Docker, GitHub Actions CI.
- [Full Stack FastAPI and MongoDB - Base Project Generator](https://github.com/mongodb-labs/full-stack-fastapi-mongodb) - Apilación completa, generador de aplicación web moderno, que incluye FastAPI, MongoDB, Docker, Celery, React frontend, HTTPS automático y más.
- [Uvicorn Poetry FastAPI Project Template](https://github.com/max-pfeiffer/uvicorn-poetry-fastapi-project-template) - Plantilla de proyecto Cookiecutter para iniciar una aplicación FastAPI. Corre en un contenedor Docker con servidor Uvicorn ASGI en Kubernetes. Admite arquitecturas AMD64 y ARM64 CPU.
- [FastAPI Agent Blueprint](https://github.com/Mr-DooSun/fastapi-agent-blueprint) - Plantilla de capa DDD donde las clases de base genéricas dan CRUD asinc sin placa de caldera, dominios auto-registrado en el descubrimiento, y ganchos pre-compromisos bloquean las importaciones de capas cruzadas en tiempo de compromiso.

### Docker Imágenes

- [inboard](https://github.com/br3ndonland/inboard) - Imágenes Docker para alimentar tus aplicaciones FastAPI y ayudarte a enviar más rápido.
- [uvicorn-gunicorn-fastapi-docker](https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker) - Imagen Docker con Uvicorn gestionado por Gunicorn para aplicaciones web FastAPI de alto rendimiento en Python 3.7 y 3.6 con auto-ajuste de rendimiento.
- [uvicorn-gunicorn-poetry](https://github.com/max-pfeiffer/uvicorn-gunicorn-poetry) - Imagen Docker con Gunicorn utilizando trabajadores Uvicorn para ejecutar aplicaciones web Python. Usa poesía para gestionar las dependencias y establecer un entorno virtual. Admite arquitecturas AMD64 y ARM64 CPU.
- [uvicorn-poetry](https://github.com/max-pfeiffer/uvicorn-poetry) - Imagen Docker con servidor Uvicorn ASGI para ejecutar aplicaciones web Python en Kubernetes. Usa poesía para gestionar las dependencias y establecer un entorno virtual. Admite arquitecturas AMD64 y ARM64 CPU.

### Proyectos de código abierto

- [Astrobase](https://github.com/anthonycorletti/astrobase) - Implementaciones sencillas, rápidas y seguras en cualquier lugar.
- [Awesome FastAPI Projects](https://github.com/Kludex/awesome-fastapi-projects) - Lista organizada de proyectos que utilizan FastAPI.
- [Bitcart](https://github.com/bitcart/bitcart) - Plataforma para comerciantes, usuarios y desarrolladores que ofrece fácil configuración y uso.
- [Bali](https://github.com/bali-framework/bali) - Simplifique la base de desarrollo de microservicios nativos en la nube en FastAPI y gRPC.
- [Bunnybook](https://github.com/pietrobassi/bunnybook) - Una pequeña red social construida con FastAPI, React+RxJs, Neo4j, PostgreSQL y Redis.
- [Coronavirus-tg-api](https://github.com/egbakou/coronavirus-tg-api) - API para rastrear el brote coronavirus global (COVID-19, SARS-CoV-2).
- [Dispatch](https://github.com/Netflix/dispatch) - Gestionar incidentes de seguridad.
- FastAPI CRUD Ejemplo:
  - [Async flavor](https://github.com/testdrivenio/fastapi-crud-async)
  - [Sync Flavor](https://github.com/testdrivenio/fastapi-crud-sync)
- [FastAPI with Observability](https://github.com/Blueswen/fastapi-observability) - Observe la aplicación FastAPI con tres pilares de observabilidad: Traces (Tempo), Metrics (Prometeo), Logs (Loki) en Grafana a través de OpenTelemetry y OpenMetrics.
- [FastAPI Websocket Broadcast](https://github.com/kthwaite/fastapi-websocket-broadcast) - Websocket 'broadcast' demo.
- [FastAPI with Celery, RabbitMQ, and Redis](https://github.com/GregaVrbancic/fastapi-celery) - Ejemplo mínimo utilizando FastAPI y Celery con RabbitMQ para cola de tarea, Redis para Celery backend y Flower para monitorear las tareas Celery.
- [FuturamaAPI](https://github.com/koldakov/futuramaapi) - Un parque infantil REST y GraphQL construido con mejores prácticas, proporcionando WebSockets, SSE, callbacks, mensajes secretos y más.
- [JeffQL](https://github.com/yezz123/JeffQL/) - Sencilla autenticación y login API usando GraphQL y JWT.
- [JSON-RPC Server](https://github.com/smagafurov/fastapi-jsonrpc) - Servidor JSON-RPC basado en FastAPI.
- [Mailer](https://github.com/rclement/mailer) - Microservicio de correo de serie muerta para sitios web estáticos.
- [Markdown-Videos](https://github.com/Snailedlt/Markdown-Videos) - API para generar miniaturas para incrustar en tu contenido de marcado.
- [Nemo](https://github.com/harshitsinghai77/nemo-backend) - Sé productivo con Nemo.
- [OPAL (Open Policy Administration Layer)](https://github.com/authorizon/opal) - Actualizaciones de autorización en tiempo real sobre la política abierta; construidas con FastAPI, Typer y FastAPI WebSocket pub/sub.
- [OSBot-Fast-API](https://github.com/owasp-sbot/OSBot-Fast-API) - Envoltorio FastAPI tipo seguro que proporciona middleware, seguimiento de eventos HTTP, integración AWS Lambda, utilidades de prueba y conversión automática entre Type Safe, Pydantic y clases de datos.
- [Polar](https://github.com/polarsource/polar) - Una plataforma de financiación y monetización para desarrolladores, construida con FastAPI, SQLAlchemy, Alembic y Arq.
- [RealWorld Example App - mongo](https://github.com/markqiu/fastapi-mongodb-realworld-example-app)
- [RealWorld Example App - postgres](https://github.com/nsidnev/fastapi-realworld-example-app)
- [redis-streams-fastapi-chat](https://github.com/leonh/redis-streams-fastapi-chat) - Una sencilla aplicación de chat respaldada por Redis Streams usando Websockets, Asyncio y FastAPI/Starlette.
- [Sprites as a service](https://github.com/ljvmiranda921/sprites-as-a-service) - Genera tus avatares personales de 8 bits usando Automata Celular.
- [Slackers](https://github.com/uhavin/slackers) - Slack webhooks API.
- [TermPair](https://github.com/cs01/termpair) - Ver y controlar terminales desde su navegador con cifrado de extremo a extremo.
- [Universities](https://github.com/ycd/universities) - Servicio de API para obtener información sobre +9600 universidades en todo el mundo.

## Patrocinadores

Por favor, apoye este proyecto de código abierto revisando a nuestros patrocinadores:

<a href="https://testdriven.io/courses/tdd-fastapi/?ref=awesome-fastapi" target="_blank" title="Learn to build high-quality web apps with best practices"><img src="images/testdriven.svg"></a>
