# Impresionante Django [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> Una lista curada de cosas increíbles relacionadas con Django. Mantenido por [Will Vincent](https://github.com/wsvincent) y [Jeff Triplett](https://github.com/jefftriplett).

<br>

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/django-logo-negative.svg">
  <img alt="Dark and Light mode version of the Django logo" src="./assets/django-logo-positive.svg">
</picture>
</div>

<br>

Por favor considere apoyar a Django haciendo una donación al <a rel="sponsored" href="https://www.djangoproject.com/fundraising/">Django Software Foundation</a>,
patrocinando <a rel="sponsored" href="https://github.com/sponsors/django">Patrocinadores GitHub</a>,
o compra <a rel="sponsored" href="https://django.threadless.com/">mercancías oficiales</a>.

## Índice

<!--lint disable awesome-toc-->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Paquetes de terceros](#third-party-packages)
  - [Admin](#admin)
  - [Temas de Admin](#admin-themes)
  - [API](#apis)
  - [Async](#async)
  - [Caching](#caching)
  - [Comandos](#commands)
  - [Configuración](#configuration)
  - [Sistemas de Gestión de Contenidos](#content-management-systems)
  - [Conectadores de bases de datos](#database-connectors)
  - [Inyección de dependencia](#dependency-injection)
  - [ECommerce](#ecommerce)
  - [Editores](#editors)
  - [Archivos / Imágenes](#filesimages)
  - [Formas](#forms)
  - [Marcos de personal completo](#full-stack-frameworks)
  - [General](#general)
  - [Internacionalización (i18n)](#internationalisation-i18n)
  - [Registro](#logging)
  - [Supervisión](#monitoring)
  - [Correo](#mailing)
  - [Model Fields](#model-fields)
  - [Modelos](#models)
  - [Ejecución](#performance)
  - [Permisos](#permissions)
  - [Búsqueda](#search)
  - [Optimización del motor de búsqueda](#search-engine-optimisation)
  - [Seguridad](#security)
  - [Activos estaticos](#static-assets)
  - [Task Queues](#task-queues)
  - [Plantillas](#templates)
  - [Pruebas](#testing)
  - [URLs](#urls)
  - [Usuarios](#users)
  - [Vistas](#views)
- [Herramientas para desarrolladores](#developer-tools)
  - [Plantillas](#templates-1)
  - [Análisis estadístico](#static-analysis)
- [Paquetes Python](#python-packages)
- [Recursos](#resources)
  - [Recursos oficiales](#official-resources)
  - [Educación](#educational)
  - [Comunidad](#community)
  - [Conferencias](#conferences)
  - [Juntas de empleo](#job-boards)
  - [Newsletters](#newsletters)
  - [Podcasts](#podcasts)
  - [Videos](#videos)
  - [Libros](#books)
- [Hosting](#hosting)
  - [PaaS (Platforms-as-a-Service)](#paas-platforms-as-a-service)
  - [IaaaS (Infraestructura como servicio)](#iaas-infrastructure-as-a-service)
  - [Servicios de despliegue](#deployment-services)
  - [Despliegue autónomo](#self-hosted-deployment)
- [Proyectos](#projects)
  - [Boilerplate](#boilerplate)
  - [Proyectos de código abierto](#open-source-projects)
- [Django REST Marco](#django-rest-framework)
  - [DRF Resources](#drf-resources)
  - [Tutoriales DRF](#drf-tutorials)
- [Punto de venta](#wagtail)
  - [Recursos de venta libre](#wagtail-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!--lint enable awesome-toc-->

## Paquetes de terceros

_Para una lista completa de todos los paquetes disponibles, vea [Django Packages](https://djangopackages.org/)_

### Admin
- [django-hijack](https://github.com/django-hijack/django-hijack) - Los administradores pueden iniciar sesión y trabajar en nombre de otros usuarios sin tener que conocer sus credenciales.
- [django-import-export](https://github.com/django-import-export/django-import-export) - Aplicación y biblioteca de Django para importar y exportar datos con integración de administración.
- [django-admin-inline-paginator-plus](https://github.com/DmytroLitvinov/django-admin-inline-paginator-plus) - Una manera sencilla de paginar su línea en Django admin
- [django-loginas](https://github.com/skorokithakis/django-loginas) - "Log in as user" for the Django admin.
- [impostor](https://github.com/avallbona/Impostor) - Impostor es una aplicación Django que permite a los miembros del personal iniciar sesión como usuario diferente utilizando su propio nombre de usuario y contraseña.
- [django-impersonate](https://pypi.org/project/django-impersonate/) - Permitir a los superusuarios “impersonar” otras cuentas no superusuarias.
- [django-admin-env-notice](https://github.com/dizballanze/django-admin-env-notice) - Distinguir visualmente entornos en Django Admin, por ejemplo: `development`, `staging`, `production`.
- [django-related-admin](https://github.com/PetrDlouhy/django-related-admin) - Una biblioteca de ayuda que le permite escribir la lista_se muestra a través de relaciones clave extranjeras.
- [django-admin-sortable2](https://github.com/jrief/django-admin-sortable2) - Ordenación genérica de arrastrar y soltar para objetos en la interfaz de administración de Django.
- [django-admin-collaborator](https://github.com/brktrlw/django-admin-collaborator) - Añade presencia de usuario en tiempo real, edita cerraduras y chat a Django admin con Channels y Redis.
- [dj-control-room](https://github.com/django-control-room/dj-control-room) - Construye un plano de control con un conjunto de herramientas operativas dentro del administrador de Django (Redis, cache, celery, URLs y más).
- [django-admin-mcp](https://github.com/7tg/django-admin-mcp) - Examinar modelos registrados por los clientes de MCP (auxiliares de IA como Claude): CRUD, acciones de administración e historia a través de sus clases de ModelAdmin, capped por permisos de Django.

### Temas de Admin
- [django-grappelli](https://github.com/sehmaschine/django-grappelli) - Una piel de jazz para el administrador.
- [django-jazzmin](https://github.com/farridav/django-jazzmin) - Tema desplegable para django admin, que utiliza AdminLTE 3 &amp; Bootstrap 4 para hacer que yo' admin parezca jazzy.
- [django-admin-interface](https://github.com/fabiocaccamo/django-admin-interface) - Personalizar Admin por el administrador mismo (color, cabecera. Título,logo) y ventanas emergentes reemplazadas por modals.
- [django-semantic-admin](https://github.com/globophobe/django-semantic-admin) - Django Semantic UI admin tema.
- [django-jet-reboot](https://github.com/assem-ch/django-jet-reboot) - Django Jet es una plantilla moderna para interfaz de administración de Django con una mejor funcionalidad.
- [django-baton](https://github.com/otto-torino/django-baton) - Una aplicación django admin fresca, moderna y receptiva basada en bootstrap 5.
- [django-unfold](https://github.com/unfoldadmin/django-unfold) - Tema moderno de Django admin para el desarrollo de interfaces sin costuras.
- [django-daisy](https://github.com/hypy13/django-daisy) - Un moderno django dashboard totalmente receptivo construido con daisyui.
- [django-smartbase-admin](https://github.com/SmartBase-SK/django-smartbase-admin) - Django SmartBase Admin 🚀 rendimiento-tuned final-user listo hermoso panel de administración

### API
<!--lint disable double-link-->
- [django-rest-framework](https://github.com/encode/django-rest-framework) - APIs web para Django.
- [django-cors-headers](https://github.com/adamchainz/django-cors-headers) - Si tu back-end y front-end están en diferentes servidores, necesitas esto.
- [dj-rest-auth](https://github.com/iMerica/dj-rest-auth) - Authentication for Django Rest Framework.
- [django-rest-knox](https://github.com/jazzband/django-rest-knox) - Módulo de autenticación para django-rest-auth.
- [djoser](https://github.com/sunscrapers/djoser) - REST implementation of Django auth.
- [djaq](https://github.com/paul-wolf/djaq) - Una API remota instantánea a los modelos Django con un lenguaje de consulta potente.
- [django-rest-framework-simplejwt](https://github.com/jazzband/djangorestframework-simplejwt) - JSON fichas web para DRF.
- [django-webpack-loader](https://github.com/django-webpack/django-webpack-loader) - Uso transparente de webpack con Django.
- [drf-yasg](https://github.com/axnsan12/drf-yasg) - Generación automatizada de esquemas reales Swagger/OpenAPI 2.0 de Django REST Código Marco.
- [graphene-django](https://github.com/graphql-python/graphene-django) - GraphQL para Django.
- [graphene-django-filter](https://github.com/devind-team/graphene-django-filter) - Filtros avanzados implementando y/o/no operadores en GraphQL para Django.
- [django-modern-rest](https://github.com/wemake-services/django-modern-rest) - REST moderno con velocidad, tipos, asinc, `msgspec`, `pydantic` ¡y otros buenos!
- [django-ninja](https://django-ninja.rest-framework.com/) - Django Ninja - Marco rápido Django REST basado en anotaciones tipo.
- [django-tastypie](https://github.com/django-tastypie/django-tastypie) - Creando deliciosas API para aplicaciones de Django desde 2010.
- [drf-spectacular](https://github.com/tfranzel/drf-spectacular) - Generación de esquemas OpenAPI 3 para el marco Django REST.
- [django-webhook](https://github.com/danihodovic/django-webhook) - Una aplicación plug-and-play Django para enviar webhooks salientes en cambios de modelo.
- [strawberry-django](https://github.com/strawberry-graphql/strawberry-django) - Integración de Django con Fresa, una biblioteca de GraphQL diseñada para el desarrollo moderno
<!--lint enable double-link-->

### Async
- [channels](https://github.com/django/channels/) - Async support for Django.

### Caching
- [django-cachalot](https://github.com/noripyt/django-cachalot) - Cierra tus consultas de Django ORM y automáticamente las invalida.
- [django-cacheops](https://github.com/Suor/django-cacheops) - Un caché de ORM deslizante con la invalidación de eventos granulares automáticos.

### Comandos
- [django-extensions](https://github.com/django-extensions/django-extensions/) - Extensiones de gestión personalizadas, en particular `runserver_plus` y `shell_plus`.
- [django-click](https://github.com/django-commons/django-click) - Escribe comandos de gestión de Django usando los [click CLI library](https://click.palletsprojects.com).
- [django-dbbackup](https://github.com/Archmonger/django-dbbackup) - Manejo comandos para ayudar a copia de seguridad y restaurar su base de datos de proyecto y archivos multimedia.
- [django-liquidb](https://github.com/Gusakovskiy/django-liquidb) - Aplicación de Django para simplificar la gestión migratoria y los cambios en los estados de esquema db.
- [django-migration-zero](https://github.com/ambient-innovation/django-migration-zero/) - Implementación holística del patrón "migración cero" para Django cubriendo cambios locales y ajustes de bases de datos en producción.
- [django-typer](https://github.com/django-commons/django-typer) - Escribe comandos de gestión de Django usando los [Typer CLI library](https://typer.tiangolo.com).

### Configuración
<!--lint disable double-link-->
- [confidential](https://github.com/candidco/confidential) - Gestiona los configs y secretos (con soporte CLI).
- [django-environ](https://github.com/joke2k/django-environ) - Variables ambientales.
- [django-split-settings](https://github.com/wemake-services/django-split-settings) - Organizar múltiples archivos de configuración.
- [django-constance](https://github.com/jazzband/django-constance) - Una aplicación Django para almacenar configuraciones dinámicas en backends pluggable (Redis y Django modelo backend incorporado) con una integración con la aplicación Django admin.
- [django-configurations](https://github.com/jazzband/django-configurations) - facilita la configuración del proyecto Django apoyándose en la composibilidad de las clases de Python y siguiendo principios [the twelve-factor app](https://12factor.net/config).
- [dynaconf](https://www.dynaconf.com/django/) - Dynaconf carga la configuración de django de múltiples fuentes (multiple formatos de archivo, env vars, redis, bóveda, etcd), gestiona secretos y permite diferentes estrategias de fusión todos los siguientes [the twelve-factor app](https://12factor.net/config).
- [django-extra-settings](https://github.com/fabiocaccamo/django-extra-settings) - Config y gestionar ajustes extras de tipo tipo utilizando sólo el administrador django.
- [django-removals](https://github.com/ambient-innovation/django-removals/) - Detectar variables de configuración precatadas mediante controles de sistema convenientes
- [environs](https://github.com/sloria/environs) - Medición variable de entorno simplificado que viene con un [Django helper](https://github.com/sloria/environs#usage-with-django) que instala paquetes adicionales.
<!--lint enable double-link-->
- [django-classy-settings](https://github.com/funkybob/django-classy-settings) - Ajustes basados en clases para mantener sus entornos en orden, con fácil acceso a variables de entorno tipo.
- [django-content-settings](https://github.com/occipital/django-content-settings) - Cree y administre fácilmente variables editables directamente desde el panel de administración de Django.

### Sistemas de Gestión de Contenidos
<!--lint disable double-link-->
- [wagtail](https://github.com/wagtail/wagtail) - Sistema popular de gestión de contenidos de Django (CMS). See [awesome-wagtail](https://github.com/wagtail/awesome-wagtail) también.
- [mezzanine](https://github.com/stephenmcd/mezzanine) - Marco CMS.
- [django-cms](https://github.com/django-cms/django-cms) - CMS para Django.
- [feincms](https://github.com/feincms/feincms) - Un CMS extensible basado en Django.
- [puput](https://github.com/APSL/puput) - Características de la aplicación Blog con Wagtail.
<!--lint enable double-link-->

### Conectadores de bases de datos
- [djongo](https://github.com/doableware/djongo) - Conector de bases de datos Django y MongoDB.

### Inyección de dependencia
- [Wireup](https://github.com/maldoinc/wireup) - Inyección de dependencia para Django

### ECommerce
- [saleor](https://github.com/saleor/saleor) - Plataforma de comercio electrónico con base en GraphQL.
- [django-oscar](https://github.com/django-oscar/django-oscar) - Comercio electrónico impulsado por dominio para Django.

### Editores
<!--lint ignore awesome-list-item-->
- [django-markdownx](https://github.com/neutronX/django-markdownx) - Plugin de Markdown completo construido para Django.
- [django-markdown-editor](https://github.com/agusmakmun/django-markdown-editor) - Awesome Django Markdown Editor, compatible con Bootstrap &amp; Semantic-UI.
- [django-business-logic](https://github.com/dgk/django-business-logic) - Marco DSL visual para Django.
- [django-summernote](https://github.com/lqez/django-summernote) - Summernote es un simple editor WYSIWYG.
- [django-tinymce](https://github.com/jazzband/django-tinymce) - Integración TinyMCE para Django.
- [django-prose](https://github.com/withlogicco/django-prose) - Un editor ligero para la creación de contenidos.
- [django-ace](https://github.com/django-ace/django-ace) - Integración ACE para Django.

### Archivos / Imágenes
- [django-cleanup](https://github.com/un1t/django-cleanup) - Eliminación de archivos de configuración cero para archivos locales y remotos.
- [django-imagekit](https://github.com/matthewwithanm/django-imagekit) - Aplicación Django para procesar imágenes para miniaturas, blanco y negro y tamaños.
- [django-pictures](https://github.com/codingjoe/django-pictures) - Responsive cross-browser image library using modern codes like AVIF & WebP.
- [sorl-thumbnail](https://github.com/jazzband/sorl-thumbnail) - Tumbnails para Django.

### Formas
- [django-crispy-forms](https://github.com/django-crispy-forms/django-crispy-forms/) - Formularios DRY Django.
- [django-floppyforms](https://github.com/jazzband/django-floppyforms) - Control completo de la renderización de forma.
- [django-formtools](https://github.com/jazzband/django-formtools) - For form previous and multistep forms, previously part of Django until 1.8.
- [django-widget-tweaks](https://github.com/jazzband/django-widget-tweaks) - Rendición de campo de formularios en plantillas.
- [django-autocomplete-light](https://github.com/yourlabs/django-autocomplete-light) - Agregue la autocompleción a las formas.

### Marcos de personal completo
- [Django LiveView](https://github.com/Django-LiveView/liveview) - Marco para crear interfaces dinámicas y reactivas lado del servidor con plantillas Django. Actualizaciones en tiempo real a través de WebSocket con manipuladores basados en decoradores.
- [Django-Bridge](https://github.com/kaedroho/django-bridge) - La forma sencilla de construir React frontends para aplicaciones Django.
- [ReactPy](https://github.com/reactive-python/reactpy) - Es React, pero en Python. Insertar Python dinamizado en las plantillas de Django utilizando las [ReactPy-Django module](https://github.com/reactive-python/reactpy-django).
- [Reactor](https://github.com/edelvalle/reactor/) - Phoenix LiveView, pero para Django.
- [Sockpuppet](https://sockpuppet.argpar.se/) - Construir aplicaciones reactivas con la herramienta Django que ya conoce y ama.
- [Unicorn](https://www.django-unicorn.com/) - Un marco de componente reactivo que mejora progresivamente una visión normal de Django, hace llamadas AJAX en el fondo, y actualiza dinámicamente el DOM.

### General
- [django-data-browser](https://github.com/tolomea/django-data-browser) - Explorador de bases de datos interactivo y fácil de usar.
- [django-filter](https://github.com/carltongibson/django-filter) - Filtros potentes basados en Django QuerySets.
- [django-sql-explorer](https://github.com/explorerhq/sql-explorer) - Compartir datos a través de consultas SQL.
- [django-tables2](https://github.com/jieter/django-tables2) - Tablas HTML con paginación / surtido.
- [django-maintenance-mode](https://github.com/fabiocaccamo/django-maintenance-mode) - Muestra una página de error 503 cuando se encuentra en movimiento de mantenimiento.
- [django-freeze](https://github.com/fabiocaccamo/django-freeze) - Convertir su sitio dinámico django en uno estático con una línea de código.
- [django-nh3](https://github.com/marksweb/django-nh3) - Integración de Django con para nh3 y es una alternativa para django-bleach.
- [Weblate](https://github.com/WeblateOrg/weblate) - Weblate es un sistema de localización continua basado en web de software libre, utilizado por más de 2500 proyectos y empresas libres en más de 165 países.
- [Django-Classy-Doc](https://github.com/nanuxbe/django-classy-doc) - Documente su propio código al estilo de CCBV y CDRF.
- [iommi](https://github.com/iommirocks/iommi) - Herramienta para el desarrollo de aplicaciones CRUD sin escribir HTML o JavaScript.

### Internacionalización (i18n)
- [django-localflavor](https://github.com/django/django-localflavor) - Una colección de funcionalidad que es útil para determinados países o culturas. Anteriormente una parte del núcleo de Django.
- [django-modeltrans](https://github.com/zostera/django-modeltrans) - Traducir campos modelo Django en un JSONField.
- [django-modeltranslations](https://github.com/deschler/django-modeltranslation) -  Traduce los modelos Django usando un enfoque de registro.
- [django-rosetta](https://github.com/mbi/django-rosetta) - Rosetta proporciona una interfaz de usuario para leer y escribir los catálogos de texto de su proyecto dentro del Django Admin.

### Registro
- [django-guid](https://github.com/snok/django-guid) - Inyecte un GUID (Correlation-ID) en cada mensaje de registro en una solicitud de Django.
- [DRF-API-Logger](https://github.com/vishalanandl177/DRF-API-Logger) - Un Logger API para su proyecto Django Rest Framework.
- [django-structlog](https://github.com/jrobichaud/django-structlog) - django-structlog es una integración estructurada de registro para el proyecto Django utilizando [structlog](https://www.structlog.org)

### Supervisión
- [django-prometheus](https://github.com/django-commons/django-prometheus) - Exportar métricas de monitoreo de Django a Prometheus.
- [django-mixin](https://github.com/adinhodovic/django-mixin) - Mezcla de monitoreo para Django-prometeo. Un juego de pizarras Grafana y reglas Prometheus para Django.

### Correo
- [django-pony-express](https://github.com/ambient-innovation/django-pony-express) - Correos electrónicos basados en clases, incluyendo una suite de prueba para Django.
- [django-anymail](https://github.com/anymail/django-anymail) - Django email backends and webhooks for Amazon SES, Brevo (Sendinblue), MailerSend, Mailgun, Mailjet, Postmark, Postal, Resend, SendGrid, SparkPost, Unisender Go y más.

### Model Fields
- [django-colorfield](https://github.com/fabiocaccamo/django-colorfield) - Campo de color para los modelos django con un buen widget de color.
- [django-model-utils](https://github.com/jazzband/django-model-utils) - Mezclas y utilidades modelo Django.
- [django-phonenumber-field](https://github.com/django-phonenumber-field/django-phonenumber-field) - Campo modelo/form para números de teléfono normalizados.
- [django-streamfield](https://github.com/raagin/django-streamfield) - Sencillo StreamField para simple Django admin (basado en Wagtail CMS StreamField idea).

### Modelos
- [django-lifecycle](https://github.com/rsinger86/django-lifecycle) - Ganchos de ciclo de vida modelo declarativo, una alternativa a las señales.
- [django-mptt](https://github.com/django-mptt/django-mptt) - Traversal de árbol preordenado modificado; trabajando con árboles de instancias modelo.
- [django-taggit](https://github.com/jazzband/django-taggit/) - Etiquetas modelo simple.
- [django-reversion](https://github.com/etianen/django-reversion) - Control de versiones para casos modelo.
- [django-simple-history](https://github.com/django-commons/django-simple-history) - Almacene la historia del modelo y ver/revertir cambios del administrador.
- [django-polymorphic](https://github.com/django-commons/django-polymorphic) - Django-polymorphic simplifica el uso de modelos heredados en proyectos de Django.
- [django-recurrence](https://github.com/jazzband/django-recurrence) - Utilidad para trabajar con fechas recurrentes en Django.
- [django-treenode](https://github.com/fabiocaccamo/django-treenode) - Modelo/admin abstracto para las cosas basadas en árboles.
- [django-auto-prefetch](https://github.com/adamchainz/django-auto-prefetch) - Preveer automáticamente los valores clave extranjeros según sea necesario.

### Ejecución
- [django-perf-rec](https://cur.at/GHUO6cn?m=web) - Mantenga registros detallados del desempeño de su código Django.
- [New Relic](https://newrelic.com/python/django) - Time middleware, vistas y consultas SQL.
- [Scout](https://scoutapm.com/docs/python/django) - Midware de tiempo, renderización de plantillas y consultas SQL con detección automática N+1.
- [django-silk](https://github.com/jazzband/django-silk) - Profilación e inspección en vivo de solicitudes de HTTP y consultas de bases de datos.
- [py-spy](https://github.com/benfred/py-spy) - Perfilador de muestreo para programas Python.
- [pyinstrument](https://github.com/joerick/pyinstrument) - Perfil de pila de llamadas para Python, Django, Flask, FastAPI.
- [django-zeal](https://github.com/taobojlen/django-zeal) - Detectar consultas N+1 con mensajes de error fáciles de usar

### Permisos
- [django-role-permissions](https://github.com/vintasoftware/django-role-permissions) - Aplicación Django para la gestión de permisos basados en funciones.
- [django-guardian](https://github.com/django-guardian/django-guardian) - Per objeto permissions in Django.
- [django-rules](https://github.com/dfunckt/django-rules) - Una aplicación diminuta pero potente que ofrece permisos a nivel de objeto, construido desde el suelo para Django.

### Búsqueda
- [django-haystack](https://github.com/django-haystack/django-haystack) - Búsqueda modular para Django.
- [django-watson](https://github.com/etianen/django-watson) - plugin de búsqueda de texto completo.
- [django-admin-search](https://github.com/shinneider/django-admin-search) - Filtro modal para django admin.
- [django-elasticsearch-dsl](https://github.com/django-es/django-elasticsearch-dsl) - Elasticsearch DSL integration for Django.

### Optimización del motor de búsqueda
- [django-check-seo](https://github.com/kapt-labs/django-check-seo) - Revise SEO de páginas.

### Seguridad
- [django-csp](https://github.com/mozilla/django-csp) - Adds [Content-Security-Policy](http://www.w3.org/TR/CSP/) encabezados a Django.
- [django-feature-policy](https://github.com/adamchainz/django-permissions-policy) - Establecer el proyecto de seguridad HTTP header `Feature-Policy` en una aplicación de Django.
- [django-protected-media](https://github.com/cobusc/django-protected-media) - Gestiona los medios que se consideran sensibles de una manera protegida.
- [DJ Checkup](https://djcheckup.com) - Ejecute varios cheques en su sitio de Django desplegado para comprobar errores comunes de seguridad.

### Activos estaticos
- [django-storages](https://github.com/jschneier/django-storages) - Una sola biblioteca para soportar múltiples backends de almacenamiento personalizado para Django.
- [django-compressor](https://github.com/django-compressor/django-compressor/) - Comprime JavaScript/CSS en un solo archivo de caché.
- [easy-thumbnails](https://github.com/SmileyChris/easy-thumbnails) - miniaturas de imagen para Django.
- [whitenoise](https://github.com/evansd/whitenoise) - Archivo estático simplificado que sirve para sitios web de Python.

### Task Queues
- [django-q2](https://github.com/django-q2/django-q2) - Una cola de tareas distribuida multiprocesamiento para Django.
- [django-rq](https://github.com/rq/django-rq) - Integración para Redis Queue.
- [django-redis](https://github.com/jazzband/django-redis) - Full-featured Redis cache backend for Django.
- [celery](https://github.com/celery/celery) - Realizaciones de tareas Robust y broker-agnostic para proyectos más grandes y centrados en el rendimiento.
- [flower](https://github.com/mher/flower) - La flor es una herramienta basada en la web para monitorear y administrar los clusters Celery.
- [django-celery-beat](https://github.com/celery/django-celery-beat) - Un programador de tareas periódicos con base de datos configurado por el Panel de Admin de Django.
- [celery-exporter](https://github.com/danihodovic/celery-exporter) - Prometheus &quot; Grafana monitoring of Celery tasks.
- [django-dramatiq](https://github.com/Bogdanp/django_dramatiq) - Biblioteca de procesamiento de tareas centrada en la simplicidad, fiabilidad y rendimiento.
- [django-celery-results](https://github.com/celery/django-celery-results) - Celery resultado backend con Django.
- [django-tasks](https://github.com/realOrangeOne/django-tasks) - Implementación de referencia y backport de trabajadores de formación y tareas en Django, basado en [DEP 14](https://www.djangoproject.com/weblog/2024/may/29/django-enhancement-proposal-14-background-workers/).
- [huey](https://github.com/coleifer/huey) - Una pequeña cola de tarea para Python, con el apoyo de Django incluyendo el nuevo `django.tasks` API.
- [django-ox](https://github.com/oxpull/django-ox) - Trabajador respaldado por bases de datos para el marco de tareas de Django, con acceso transaccional, retries, tareas recurrentes, y ningún corredor a ejecutar.
- [django-absurd](https://github.com/lincolnloop/django-absurd) - Django integration for Absurd, a Postgres-native durable workflow system.

### Plantillas
- [django-components](https://github.com/django-components/django-components/) - Una manera de crear componentes simples de plantilla reutilizables en Django.
- [django-template-partials](https://github.com/carltongibson/django-template-partials/) - Reutilizable llamado parciales en línea para la Plantilla de Django.
- [slippers](https://mitchel.me/slippers/) - Construir componentes reutilizables en Django sin escribir una sola línea de Python.
- [JinjaX](https://jinjax.scaletti.dev/) - Super componentes poderes para tus plantillas Jinja.
- [django-cotton](https://django-cotton.com/) - Adiós. `{% raw %}{%{% endraw %} extends, block, include {% raw %}%}{% endraw %}`, Hola `<c-component />`. Traer la composición moderna de la UI a Django.
- [htpy](https://htpy.dev/) - htpy es una biblioteca que hace escribir HTML en Python simple divertido y eficiente, sin un lenguaje de plantilla.
- [django-suspense](https://github.com/paqstd-dev/django-suspense) - Fácil manera de mostrar un retroceso en plantillas hasta que los niños hayan terminado de cargar (como React).

### Pruebas
- [django-debug-toolbar](https://github.com/django-commons/django-debug-toolbar/) - Paneles configurables para depurar solicitudes/respuestas.
- [pytest-django](https://github.com/pytest-dev/pytest-django) - Use características de pytest en Django.
- [django-test-migrations](https://github.com/wemake-services/django-test-migrations) - Prueba el esquema django y las migraciones de datos, incluyendo el orden de las migraciones.
- [django-test-plus](https://github.com/revsys/django-test-plus/) - Adiciones útiles al TestCase predeterminado de Django.
- [factory-boy](https://github.com/FactoryBoy/factory_boy) - Reemplazo de accesorios de prueba.
- [django-waffle](https://github.com/django-waffle/django-waffle) - Un cargador de características para Django.
- [model-bakery](https://github.com/model-bakers/model_bakery) - Fabricación de objetos para Django (renombre del proyecto modelo mami legado).
- [django-fakery](https://github.com/fcurella/django-fakery) - Una implementación fácil de usar de Métodos de Creación para Django, respaldada por Faker.
- [django-pattern-library](https://github.com/torchbox/django-pattern-library) - Generador de biblioteca de patrones para plantillas de Django, para ayudar a probar componentes de interfaz de usuario.
- [storybook-django](https://github.com/torchbox/storybook-django) - Desarrollar componentes de Django UI en aislamiento, con Storybook.

### URLs
- [dj-database-url](https://github.com/jazzband/dj-database-url) - URLs de bases de datos.
- [urlman](https://github.com/andrewgodwin/urlman) - Una manera más agradable de hacer URLs para los modelos Django.
- [django-robots](https://github.com/jazzband/django-robots) - Esta es una aplicación básica de Django para administrar robots. txt archivos siguiendo el protocolo de exclusión de robots, complementando la aplicación Django Sitemap contrib.
- [django-redirects](https://github.com/fabiocaccamo/django-redirects) - redirige como debe ser, con pleno control.

### Usuarios
- [django-allauth](https://github.com/pennersr/django-allauth/) - Mejoramiento del registro de usuarios, incluyendo la austeridad social.
- [django-allauth-ui](https://github.com/danihodovic/django-allauth-ui/) - Plantillas de mejor apariencia para django-allauth.
- [django-improved-user](https://github.com/jambonrose/django-improved-user) - Un usuario de Django personalizado que autentica por correo electrónico. Sigue las mejores prácticas de identidad y autenticación.
- [django-organizations](https://github.com/bennylope/django-organizations/) - Cuentas multiusuarios para proyectos de Django.
- [django-cas-ng](https://github.com/django-cas-ng/django-cas-ng) - Django-cas-ng es Django CAS (Servicio Central de Autenticación) 1.0/2.0/3.0 biblioteca cliente para apoyar SSO (Single Sign On) y Single Logout (SLO).
- [django-guest-user](https://github.com/julianwachholz/django-guest-user) - Permitir a los visitantes utilizar su sitio como usuario regular y registrarse más tarde.

### Vistas
- [django-braces](https://github.com/brack3t/django-braces) - Mezclas reutilizables y genéricos.
- [django-easy-audit](https://github.com/soynatan/django-easy-audit) - Realice un seguimiento de las acciones del usuario.
- [django-extra-views](https://github.com/AndrewIngram/django-extra-views) - Vistas genéricas extra basadas en clases.
- [django-stronghold](https://github.com/mgrouchy/django-stronghold) - Hace todas tus vistas de Django predeterminado login_requerido.
- [neapolitan](https://github.com/carltongibson/neapolitan) - Vistas rápidas del CRUD para Django.

## Herramientas para desarrolladores

Herramientas independientes que ayudan a desarrollar proyectos de Django.

### Plantillas
- [curlylint](https://www.curlylint.org/) - Plantillas HTML experimentales forro para Jinja, Nunjucks, plantillas Django, Twig, Liquid.
- [djhtml](https://github.com/rtts/djhtml) - Django/Jinja plantilla indenter.
- [djlint](https://www.djlint.com/) - Plantillas HTML de formato Lint.

### Análisis estadístico
- [django-orm-lens](https://github.com/FROWNINGdev/django-orm-lens) - Análisis estático de nivel modelo: diagramas ER, detección N+1, deriva del esquema y radio de explosión en CI, sin una base de datos o bota de Django.

## Paquetes Python

_Una lista corta de paquetes de Python que funcionan bien con Django._

- [black](https://github.com/psf/black) - Uncompromising Python code formatter.
- [coveragepy](https://github.com/coveragepy/coveragepy) - Medición de cobertura de código.
- [faker](https://github.com/joke2k/faker) - Faker es un paquete Python que genera datos falsos para usted.
- [pillow](https://github.com/python-pillow/Pillow) - Python Imaging Library.
- [pytest](https://github.com/pytest-dev/pytest/) - Marco de prueba.
- [python-decouple](https://github.com/HBNetwork/python-decouple) - Separación estricta de los ajustes del código.
- [python-slugify](https://github.com/un33k/python-slugify) - Devuelve las balas de unicodo.
- [sentry-python](https://github.com/getsentry/sentry-python) - Informe de error SDK.
- [python-socketio](https://github.com/miguelgrinberg/python-socketio) - Python implement of the Socket. IO_ cliente y servidor en tiempo real. [(create Socket.io Django server instance)](https://python-socketio.readthedocs.io/en/latest/server.html?highlight=django#creating-a-server-instance)
- [Ruff](https://github.com/astral-sh/ruff) - Un Python linter extremadamente rápido y formatter de código, escrito en Rust.

## Recursos

### Recursos oficiales
<!--lint ignore double-link-->
- [Project Website](https://www.djangoproject.com/) - Web oficial de Django.
- [Documentation](https://docs.djangoproject.com/en/dev/) - Documentación completa para todas las versiones de Django.
- [Polls Tutorial](https://docs.djangoproject.com/en/dev/intro/tutorial01/) - Construye un tutorial de encuestas mientras aprende los internos de Django.
- [Source Code](https://github.com/django/django/) - Alojado en GitHub.

### Educación
- [Django Girls Tutorial](https://tutorial.djangogirls.org/en/) - Utilice vistas basadas en funciones para construir una aplicación de blog.
- [LearnDjango](https://learndjango.com/) - Tutoriales y cursos premium sobre Django y Django REST Framework.
- [Adam Johnson](https://adamj.eu/tech/) - Adam está en la Junta Técnica de Django y escribe regularmente tutoriales.
- [Photon Designer - Django tutorials](https://photondesigner.com/articles) - Django tutoriales de Tom Dekan sobre cómo construir aplicaciones de Django simplemente - desde cómo construir un mensajero instantáneo con Django, añadir búsqueda instantánea, utilizar Google Drive como base de datos. Actualizado regularmente.
- [TestDriven](https://testdriven.io/blog/) - Múltiples tutoriales sobre temas como Docker, pagos y más.
- [Classy Class-Based Views](https://ccbv.co.uk/) - Descripciones detalladas de métodos/propiedades/atributos para cada visión genérica basada en la clase.
- [Classy Django REST Framework](http://www.cdrf.co) - Descripción detallada con métodos/atributos para vistas y serializadores basados en DRF.
- [Simple is Better than Complex](https://simpleisbetterthancomplex.com/) - Sitio web regularmente actualizado con muchos tutoriales y consejos en Django.
- [Full Stack Python's Django Page](https://www.fullstackpython.com/django.html) - Explicación de la filosofía de Django y enlaces a otros recursos y tutoriales.
- [RealPython](https://realpython.com/tutorials/django/) - Muchos tutoriales de alta calidad sobre Django.
- [Mozilla Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django) - Cree una aplicación de biblioteca de préstamos.
- [Matt Layman](https://www.mattlayman.com) - Tutoriales regulares y paracaidistas en temas de Django.
- [Django Styleguide](https://github.com/HackSoftware/Django-Styleguide) - Styleguide para Django con mejores prácticas y ejemplos.
- [Django Template Tags and Filters](https://www.djangotemplatetagsandfilters.com/) - Docs adicionales en los 57 filtros de plantilla incorporados de Django y 27 etiquetas de plantilla.
- [Django for Everybody](https://www.dj4e.com/) - Un curso completo para principiantes webdev centrado en Django.
- [CS50W](https://cs50.harvard.edu/web/2020/) - Curso introductorio de la Universidad de Harvard al desarrollo web, explica Django como marco de backend.
- [Better Simple](https://www.better-simple.com/blog/django/) - Artículos de Tim Schilling sobre desarrollo de Django, mejores prácticas y el ecosistema de Django.

### Comunidad
<!--lint disable double-link-->
- [Django Forum](https://forum.djangoproject.com/) - Mesa oficial del discurso.
- [Community Page](https://www.djangoproject.com/community/) - Presentando feeds de Community Blog Posts, Jobs y más.
- [Local Django Communities Page](https://www.djangoproject.com/community/local/) - Con eventos locales en todo el mundo.
- [Django Users Google Group](https://groups.google.com/forum/#!forum/django-users/) - Junta de discusión muy activa para preguntas y respuestas.
- [Developers Google Group](https://groups.google.com/forum/#!forum/django-developers/) - Para contribuciones a Django solo.
- [Mastodon](https://fosstodon.org/@django) - Para anuncios oficiales sobre actualizaciones, correcciones de seguridad, etc.
- [X (formerly Twitter)](https://x.com/djangoproject/) - Para anuncios oficiales sobre actualizaciones, correcciones de seguridad, etc.
- [Discord Server](https://discord.com/invite/xcRH6mN4fa) - Django Discord Community.
- Canal IRC - Chat con otros usuarios de Django en irc://irc.freenode.net/django.
- [Djangonaut Space](https://djangonaut.space) - Programa gratuito para la comunidad Django para lanzar gente al universo de contribuciones de código abierto.
<!--lint enable double-link-->

### Conferencias

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

### Juntas de empleo

- [Django Job Board](https://djangojobboard.com/) - Una junta de trabajo de Django que también agrega otras juntas de trabajo. Anteriormente en Django News Jobs.
- [Django Jobs](https://djangojobs.net) - Trabajos de Django para contratar desarrolladores de Django Python.
- [Python.org Job Boards](https://www.python.org/jobs/) - Aunque no exclusivamente para Django, esta junta de trabajo está alojada por el sitio web oficial de Python y cuenta con una serie de oportunidades laborales relacionadas con Python y Django.

### Newsletters

- [Django News](https://django-news.com) - Boletín semanal sobre anuncios, artículos, proyectos y charlas.

### Podcasts

- [Django Chat](https://djangochat.com/) - Un podcast semanal de William Vincent y Django Fellow Carlton Gibson con discusiones sobre conceptos básicos de Django e invitados regulares.
- [Django Brew](https://djangobrew.com/) - Un podcast divertido y alimentado con cafeína sobre el marco web de Django por Adam Hill y Sangeeta Jadoonanan.
- [TalkPython](https://talkpython.fm/) - El podcast Python líder con episodios ocasionales en Django.
- [Running in Production](https://runninginproduction.com/tags/django) - Ya no activo, pero un gran atraso de episodios en las pilas de tecnología de Django.

### Videos

- [DjangoTV](https://djangotv.com) - Su fuente de vídeos de conferencia de Django y tutoriales.
- [PyVideo](https://pyvideo.org) - PyVideo es un índice de los medios relacionados con Python.

### Libros
Para una lista completa de libros impresos, echa un vistazo [DjangoBook.com](https://djangobook.com/).

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

### IaaaS (Infraestructura como servicio)
- [Digital Ocean](https://www.digitalocean.com)
- [Linode](https://www.linode.com)
- [Amazon Lightsail](https://aws.amazon.com/lightsail/)
- [Hetzner](https://www.hetzner.com)

### Servicios de despliegue
_Servicios hospedados que implementan su aplicación a servidores que alquila en otro lugar._
- [Appliku](https://appliku.com) - Servicio de despliegue centrado en Django para servidores en DigitalOcean, Hetzner, AWS y Linode.
- [DeployHQ](https://www.deployhq.com) - Deplora desde Git a sus servidores sobre SSH, SFTP, o S3, con pasos de construcción y rollbacks.

### Despliegue autónomo
_Herramientas de código abierto que implementan su aplicación a servidores que posee._
- [Coolify](https://coolify.io) - PaaS auto hospedado con una interfaz de usuario web para aplicaciones y bases de datos Docker, con un plano de control de nubes pagado opcional.
- [Dokploy](https://dokploy.com) - PaaS auto hospedado con una interfaz de usuario web, construida en Docker y Traefik, con un avión de control de nubes pagado opcional.
- [CapRover](https://caprover.com) - PaaS auto hospedado con una interfaz de usuario web y aplicaciones de un clic, construidas en Docker Swarm.
- [Kamal](https://kamal-deploy.org) - Implementar contenedores a cualquier servidor sobre SSH con cero tiempo de inactividad, desde Basecamp.
- [Dokku](https://dokku.com) - PaaS docker con empuje de git estilo Heroku se despliega.
- [Piku](https://github.com/piku/piku) - Tiny Heroku-style PaaS para empuje git implementa a un solo servidor.

## Proyectos

### Boilerplate
- [cookiecutter-django](https://github.com/cookiecutter/cookiecutter-django/) - Un proyecto de arranque completo, altamente personalizable.
- [django-base-site](https://github.com/epicserve/django-base-site/) - Un sitio de Django con muchos paquetes comunes de terceros preinstalados.
- [djangox](https://github.com/wsvincent/lithium/) - Las baterías incluyeron proyecto de arranque para Pip, Pipenv o Docker.
- [django-docker-template](https://github.com/amerkurev/django-docker-template) - Dockerized Django con Postgres, Gunicorn, y Traefik (con auto-renovación Let's Encrypt).
- [django-startproject](https://github.com/jefftriplett/django-startproject) - Plantilla de inicio de Django con baterías.
- [wemake-django-template](https://github.com/wemake-services/wemake-django-template/) - Plantilla Django de linaje enfocada en calidad de código y seguridad.
- [cookiecutter-vue-django](https://github.com/ilikerobots/cookiecutter-vue-django) - Django + Vue starter project fusing Vue SFCs & Django Templates.
- [sidewinder](https://github.com/stribny/sidewinder/) - Un kit de arranque de Django que se centra en buenos defectos, experiencia de desarrollador y despliegue.
- [Falco](https://github.com/falcopackages/falco-cli) - Mejora tu experiencia de desarrollador de Django: CLI y Guías para el desarrollador moderno de Django.
- [BH2](https://codeberg.org/trey/bh2) - Consigue un nuevo sitio de Django en un Djiffy
- [django-react-boilerplate](https://github.com/vintasoftware/django-react-boilerplate) - A Django, React, Tailwind, Webpack proyecto caldera

### Proyectos de código abierto
- [Blog app with users and forms](https://github.com/wsvincent/djangoforbeginners/tree/master/ch7-blog-app-with-users/)
- [Newspaper app with custom user model, full user auth](https://github.com/wsvincent/djangoforbeginners/tree/master/ch15-comments)
- [Behavior-Driven Development with Aloe](https://github.com/testdrivenio/django-aloe-bdd/)
- [Image Sharing Blog](https://github.com/MeNsaaH/soMedia)
- [Bootcamp: An enterprise social network](https://github.com/vitorfs/bootcamp)
- [Zulip](https://github.com/zulip/zulip/) - Chat de equipo de código abierto.
- [django-job-portal](https://github.com/manjurulhoque/django-job-portal) - Aplicación del portal de empleo usando Django.
- [Built with Django](https://builtwithdjango.com) - Lista curada de increíbles proyectos de Django.
- [PostHog](https://github.com/PostHog/posthog) - Análisis de productos de código abierto.
- [HyperKitty](https://gitlab.com/mailman/hyperkitty) - Una interfaz web para acceder a archivos GNU Mailman v3.
- [Healthchecks](https://github.com/healthchecks/healthchecks) - Un instrumento de monitoreo de cron escrito en Python &amp; Django.
- [Flagsmith](https://github.com/Flagsmith/flagsmith) - Pruebas Open-source Feature Flagging, Remote Config y AB.
- [OpenContracts](https://github.com/Open-Source-Legal/OpenContracts) - Plataforma de análisis de documentos de grado empresarial que combina el análisis automático de PDF, las incrustaciones vectoriales y la integración de LLM.
- [Baserow](https://github.com/baserow/baserow) - Base de datos de código abierto y alternativa Airtable construida con Django y Vue.js.
- [Django CRM Admin](https://github.com/DjangoCRM/django-crm) - Fuente abierta Python CRM construido enteramente en Django Admin Site.
- [linkding](https://github.com/sissbruecker/linkding) - Administrador de marcadores auto hospedados que está diseñado para ser mínimo, rápido y fácil de configurar usando Docker.
- [pythonic-news](https://github.com/sebst/pythonic-news) - Hacker News clon.
- [Revel](https://github.com/letsrevel/revel-backend) - Auto-hostable plataforma de gestión de eventos y ticketing con organizaciones, selección de asistentes basada en cuestionarios, check-in QR y pagos Stripe.
- [venueless](https://github.com/venueless/venueless) - Plataforma para eventos en línea e híbridos con streams en vivo, chat y salas de video, del equipo de pretix.
- [pretix](https://github.com/pretix/pretix) - Ticket shop aplicación para conferencias, festivales, conciertos y otros eventos.
- [pretalx](https://github.com/pretalx/pretalx) - Instrumento de planificación de conferencias para la convocatoria de documentos, programación y gestión de oradores.
- [ioe](https://github.com/zhtyyx/ioe) - Gestión de tiendas auto hospedadas con inventario, checkout de ventas y cuentas de miembros.

## Django REST Marco

_La forma más popular de construir APIs web con Django._

### DRF Resources

<!--lint disable double-link-->
- [Official Documentation](https://www.django-rest-framework.org/)
- [DRF Source Code](https://github.com/encode/django-rest-framework)
- [awesome-django-rest-framework](https://github.com/nioperas06/awesome-django-rest-framework)
<!--lint enable double-link-->

### Tutoriales DRF

<!--lint ignore double-link-->
- [Official REST Framework - A Beginner's Guide](https://learndjango.com/tutorials/official-django-rest-framework-tutorial-beginners)
- [Building APIs with Django and DRF](https://books.agiliq.com/projects/django-api-polls-tutorial/en/latest/)
- [DRF with React](https://www.valentinog.com/blog/drf/)
- [Making React and Django play well together](https://fractalideas.com/blog/making-react-and-django-play-well-together/)

## Punto de venta

_Wagtail, el poderoso CMS para sitios web modernos._

### Recursos de venta libre
<!--lint disable double-link-->
- [Official website](https://wagtail.org/)
- [Developer documentation](https://docs.wagtail.org/en/stable/)
- [User documentation](https://guide.wagtail.org/en-latest/)
- [Wagtail Source Code](https://github.com/wagtail/wagtail/)
- [awesome-wagtail](https://github.com/wagtail/awesome-wagtail)
- [This week in Wagtail](https://wagtail.org/this-week-in-wagtail/) - Un correo electrónico semanal con actualizaciones del equipo central de Wagtail.
- [Wagtail Space](https://www.wagtail.space/) - Conferencias de cócteles en todo el mundo.
- [Wagtail events](https://wagtail.org/events/) - Eventos en línea y en persona Wagtail.
<!--lint enable double-link-->

Una manera conveniente de navegar y buscar los repositorios de esta lista está disponible en [awesome.lvtd.dev/lists/awesome-django](https://awesome.lvtd.dev/lists/awesome-django/).
