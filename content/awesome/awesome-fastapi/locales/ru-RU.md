<!--lint disable double-link-->

# Awesome FastAPI | [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> Список удивительных вещей, связанных с FastAPI.

[FastAPI](https://fastapi.tiangolo.com/) Это современная, высокопроизводительная, включённая в батареи веб-фреймворк Python, который идеально подходит для создания RESTful API.

## Содержание

- [Сторонние расширения](#third-party-extensions)
  - [Администрирование](#admin)
  - [Аутентификация](#auth)
  - [Кибербезопасность](#cybersecurity)
  - [Базы данных](#databases)
  - [Инъекция зависимостей](#dependency-injection)
  - [Инструменты для разработчиков](#developer-tools)
  - [Электронная почта](#email)
  - [Утилиты](#utils)
- [Ресурсы](#resources)
  - [Официальные ресурсы](#official-resources)
  - [Внешние ресурсы](#external-resources)
  - [Подкасты](#podcasts)
  - [Статьи](#articles)
  - [учебники](#tutorials)
  - [Разговоры](#talks)
  - [Видео](#videos)
  - [Курсы](#courses)
  - [Лучшие практики](#best-practices)
- [Хостинг](#hosting)
  - [PaaS](#paas)
  - [IaaS](#iaas)
  - [без сервера](#serverless)
- [Проекты](#projects)
  - [Шаблон проекта](#boilerplate)
  - [Изображения Docker](#docker-images)
  - [Проекты с открытым исходным кодом](#open-source-projects)
- [Спонсоры](#sponsors)

## Сторонние расширения

### Администрирование

- [FastAdmin](https://github.com/vsdudakov/fastadmin) - Простая в использовании панель управления для FastAPI (также Flask и Django), вдохновленная Django Admin.
- [FastAPI Admin](https://github.com/fastapi-admin/fastapi-admin) - Функциональная панель администратора, которая предоставляет пользовательский интерфейс для выполнения операций CRUD на ваших данных. В настоящее время работает только с Tortoise ORM.
- [FastAPI Amis Admin](https://github.com/amisadmin/fastapi-amis-admin) - Высокопроизводительная, эффективная и легко расширяемая структура администратора FastAPI.
- [Piccolo Admin](https://github.com/piccolo-orm/piccolo_admin) - Мощный и современный графический интерфейс, использующий Piccolo ORM.
- [SQLAlchemy Admin](https://github.com/smithyhq/sqladmin) - Панель администратора для FastAPI/Starlette, которая работает с моделями SQLAlchemy.
- [Starlette Admin](https://github.com/jowilf/starlette-admin) - Админ фреймворк для FastAPI/Starlette, поддерживающий SQLAlchemy, SQLModel, MongoDB и ODMantic.


### Аутентификация

- [AuthX](https://github.com/yezz123/AuthX) - Настраиваемая аутентификация и управление Oauth2 для FastAPI.
- [FastAPI Auth](https://github.com/dmontagu/fastapi-auth) - Pluggable auth, который поддерживает поток паролей OAuth2 с JWT-доступом и токенами обновления.
- [FastAPI Azure Auth](https://github.com/Intility/fastapi-azure-auth) - Аутентификация Azure AD для API с поддержкой одного и нескольких арендаторов.
- [FastAPI Casbin Auth](https://github.com/apache/casbin-python-fastapi-casbin-auth) - Авторизация поддерживает различные модели управления доступом, такие как RBAC, ReBAC и ABAC через Casbin.
- [FastAPI Cloud Auth](https://github.com/tokusumi/fastapi-cloudauth) - Простая интеграция между сервисами FastAPI и облачной аутентификации (AWS Cognito, Auth0, Firebase Authentication).
- [FastAPI Login](https://github.com/maxrdu/fastapi_login) - Управление учетной записью и аутентификация (на основе)[Flask-Login](https://github.com/maxcountryman/flask-login)).
- [FastAPI JWT Auth](https://github.com/IndominusByte/fastapi-jwt-auth) - JWT auth (на основе [Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended)).
- [FastAPI Permissions](https://github.com/holgi/fastapi-permissions) - Разрешения низкого уровня.
- [FastAPI Security](https://github.com/jacobsvante/fastapi-security) - Реализует аутентификацию и авторизацию как зависимости в FastAPI.
- [FastAPI Simple Security](https://github.com/mrtolkien/fastapi_simple_security) - Вне коробки API ключ безопасности, управляемый через операции пути.
- [FastAPI Users](https://github.com/fastapi-users/fastapi-users) - Управление счетами, аутентификация, авторизация.
- [FastAPI Zitadel Auth](https://github.com/cleanenergyexchange/fastapi-zitadel-auth) - OAuth2 использует платформу IAM [Zitadel](https://github.com/zitadel/zitadel).

### Кибербезопасность

- [FastAPI Guard](https://github.com/rennf93/fastapi-guard) - Ограничение ставок, автоматическое запрещение IP-адресов, обнаружение атак проникновения, белый список / черный список (страны, IP-адреса, облачные провайдеры), фильтрация пользовательских агентов, геолокация, интеграция Redis для сохранения и многое другое.
- [secure](https://github.com/TypeError/secure) - Определение и последовательное применение заголовков безопасности HTTP в приложениях FastAPI с использованием промежуточного ПО ASGI и одного объекта конфигурации.

### Базы данных

#### ОРМ

- [Edgy ORM](https://github.com/dymmond/edgy) - Сложные базы данных сделаны простыми.
- [FastAPI SQLAlchemy](https://github.com/mfreeborn/fastapi-sqlalchemy) - Простая интеграция между FastAPI [SQLAlchemy](https://www.sqlalchemy.org/).
- [Fastapi-SQLA](https://github.com/dialoguemd/fastapi-sqla) - Расширение SQLAlchemy для FastAPI с поддержкой pagination, asyncio и pytest.
- [FastAPIwee](https://github.com/Ignisor/FastAPIwee) - Простой способ создания REST API на основе [PeeWee](https://github.com/coleifer/peewee) Модели.
- [FastSQLA](https://github.com/hadrien/FastSQLA) - Расширение Async SQLAlchemy 2.0+ для FastAPI с поддержкой SQLModel, встроенная пагинация и многое другое.
- [GINO](https://github.com/python-gino/gino) - Легкий асинхронный ORM, построенный поверх ядра SQLAlchemy для Python asyncio.
  - [FastAPI Example](https://github.com/leosussan/fastapi-gino-arq-uvicorn)
- [ORM](https://github.com/encode/orm) - Асинхронный ОРМ.
- [ormar](https://collerek.github.io/ormar/) - Ormar - это асинхронный ORM, который использует валидацию Pydantic и может использоваться непосредственно в запросах и ответах FastAPI, поэтому у вас остается только один набор моделей для обслуживания. Алембические миграции.
  - [FastAPI Example](https://collerek.github.io/ormar/latest/fastapi/) - Использование FastAPI с Ormar.
- [Piccolo](https://github.com/piccolo-orm/piccolo) - Async ORM и конструктор запросов, поддерживающий Postgres и SQLite, с батареями (миграциями, безопасностью и т. д.).
  - [FastAPI Examples](https://github.com/piccolo-orm/piccolo_examples) - Использование FastAPI с Piccolo.
- [Tortoise ORM](https://tortoise.github.io) - Простой в использовании Asyncio ORM (Object Relational Mapper), вдохновленный Джанго.
  - [FastAPI Example](https://tortoise.github.io/examples/fastapi.html) - Пример интеграции Tortoise-ORM FastAPI.
  - [Tutorial: Setting up Tortoise ORM with FastAPI](https://web.archive.org/web/20200523174158/https://robwagner.dev/tortoise-fastapi-setup/)
  - [Aerich](https://github.com/tortoise/aerich) - Инструменты миграции черепах ORM.
- [Saffier ORM](https://github.com/tarsil/saffier) - Единственный Python ORM, который вам понадобится.
- [SQLModel](https://sqlmodel.tiangolo.com/) - SQLModel (на базе Pydantic и SQLAlchemy) — это библиотека для взаимодействия с базами данных SQL из кода Python, с объектами Python.

#### Запрос строителей

- [asyncpgsa](https://github.com/CanopyTax/asyncpgsa) - Обертка вокруг [asyncpg](https://github.com/MagicStack/asyncpg) для использования с [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/).
- [Databases](https://github.com/encode/databases) - Async SQL конструктор запросов, который работает поверх [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/) Язык выражения.
- [PyPika](https://github.com/kayak/pypika) - Создатель запросов SQL, который раскрывает все богатство языка SQL.

#### ОДМ

- [Beanie](https://github.com/BeanieODM/beanie) - Asynchronous Python ODM для MongoDB [Motor](https://motor.readthedocs.io/en/stable/) и [Pydantic](https://pydantic.dev/docs/) Поддерживает миграцию данных и схем из коробки.
- [MongoEngine](https://github.com/MongoEngine/mongoengine) - Document-Object Mapper (подумайте об ORM, но для баз данных документов) для работы с MongoDB от Python.
- [Motor](https://motor.readthedocs.io/) - Асинхронный драйвер Python для MongoDB
- [ODMantic](https://art049.github.io/odmantic/) - AsyncIO MongoDB ODM интегрируется [Pydantic](https://pydantic.dev/docs/).
- [PynamoDB](https://github.com/pynamodb/PynamoDB) - Питонический интерфейс для Amazon DynamoDB.

#### Другие инструменты

- [Pydantic-SQLAlchemy](https://github.com/tiangolo/pydantic-sqlalchemy) - Преобразование моделей SQLAlchemy в [Pydantic](https://pydantic.dev/docs/) Модели.
- [FastAPI-CamelCase](https://nf1s.github.io/fastapi-camelcase/) - Поддержка CamelCase JSON для использования FastAPI [Pydantic](https://pydantic.dev/docs/).
  - [CamelCase Models with FastAPI and Pydantic](https://medium.com/analytics-vidhya/camel-case-models-with-fast-api-and-pydantic-5a8acb6c0eee) - Сопровождающий пост в блоге от автора расширения.
 
### Инъекция зависимостей

- [modern-di](https://github.com/modern-python/modern-di) - Структура впрыска зависимости с контейнером IoC и прицелами, с [FastAPI integration](https://github.com/modern-python/modern-di-fastapi).
- [Wireup](https://github.com/maldoinc/wireup) - Инъекционные зависимости с нулевыми накладными расходами на время выполнения в FastAPI; Зависимости совместного использования через веб-сайты, кли или другие интерфейсы.

### Инструменты для разработчиков

- [FastAPI Code Generator](https://github.com/koxudaxi/fastapi-code-generator) - Создайте приложение FastAPI из файла OpenAPI, позволяющее разрабатывать схемы.
- [FastAPI Client Generator](https://github.com/dmontagu/fastapi_client) - Создайте мипи- и IDE-дружественный API-клиент из спецификации OpenAPI.
- [FastAPI Cruddy Framework](https://github.com/mdconaway/fastapi-cruddy-framework) - Библиотека-компаньон FastAPI предназначена для повышения производительности разработки Ruby on Rails, Ember.js или Sails.js в экосистеме FastAPI.
- [FastAPI MVC](https://github.com/fastapi-mvc/fastapi-mvc) - Инструмент производительности разработчика для создания высококачественных готовых к производству API FastAPI.
- [FastAPI Profiler](https://github.com/sunhailin-Leo/fastapi_profiler) - Промежуточное ПО FastAPI от joerick/pyinstrument для проверки производительности вашего сервиса.
- [FastAPI Versioning](https://github.com/DeanWay/fastapi-versioning) - Версия API.
- [Jupyter Notebook REST API](https://github.com/Invictify/Jupter-Notebook-REST-API) - Запустите свои ноутбуки Jupyter в качестве конечных точек RESTful API.
- [Manage FastAPI](https://github.com/ycd/manage-fastapi) - CLI инструмент для создания и управления проектами FastAPI.
- [msgpack-asgi](https://github.com/florimondmanca/msgpack-asgi) - автоматический [MessagePack](https://msgpack.org/) Содержание переговоров.
- [python-cqrs](https://github.com/pypatterns/python-cqrs) - Event-Driven Architecture Framework с CQRS, Transaction Outbox, Saga Orchestration, бесшовной интеграцией FastAPI/FastStream.

### Электронная почта

- [FastAPI Mail](https://github.com/sabuhish/fastapi-mail) - Легкая почтовая система для отправки электронных писем и вложений (индивидуальных и массовых).

### Утилиты

- [Apitally](https://github.com/apitally/apitally-py) - API-аналитика, мониторинг и регистрация запросов для FastAPI.
- [ASGI Correlation ID](https://github.com/snok/asgi-correlation-id) - Запросить промежуточное ПО для регистрации ID.
- [FastAPI Cache](https://github.com/comeuplater/fastapi_cache) - Простая легкая кэш-система.
- [FastAPI Cache](https://github.com/long2ice/fastapi-cache) - Инструмент для кэширования ответа FastAPI и результатов функционирования с поддержкой Redis, Memcached, DynamoDB и бэкэндов в памяти.
- [FastAPI Chameleon](https://github.com/mikeckennedy/fastapi-chameleon) - Добавляет интеграцию языка шаблонов Chameleon в FastAPI.
- [FastAPI CloudEvents](https://github.com/sasha-tkachev/fastapi-cloudevents) - [CloudEvents](https://cloudevents.io/) Интеграция для FastAPI.
- [FastAPI Contrib](https://github.com/identixone/fastapi_contrib) - Опциональный набор утилит: pagination, auth middleware, разрешений, пользовательских обработчиков исключений, поддержки MongoDB и Opentracing middleware.
- [FastAPI FastCRUD](https://github.com/benavlabs/fastcrud)) - Надежные асинхронные операции CRUD и гибкие утилиты для создания конечных точек.
- [FastAPI Events](https://github.com/melvinkcx/fastapi-events) - Асинхронная библиотека для отправки / обработки событий для FastAPI и Starlette.
- [FastAPI FeatureFlags](https://github.com/Pytlicek/fastapi-featureflags) - Простая реализация флагов функций для FastAPI.
- [FastAPI Injectable](https://github.com/JasperSui/fastapi-injectable) - Используйте инъекцию зависимости FastAPI вне обработчиков маршрутов в инструментах CLI, фоновых задачах, работниках и многом другом.
- [FastAPI Jinja](https://github.com/AGeekInside/fastapi-jinja) - Добавляет интеграцию языка шаблонов Jinja в FastAPI.
- [FastAPI Lazy](https://github.com/yezz123/fastango) - Ленивый пакет для запуска проекта с помощью FastAPI.
- [FastAPI Limiter](https://github.com/long2ice/fastapi-limiter) - Ограничитель скорости запроса для FastAPI.
- [FastAPI Listing](https://github.com/danielhasan1/fastapi-listing) - Библиотека для проектирования / создания API-интерфейсов с использованием компонентной архитектуры, встроенного пагинатора запросов, сортировщика, django-admin, таких как фильтры и многое другое.
- [FastAPI MQTT](https://github.com/sabuhish/fastapi-mqtt) - Расширение для протокола MQTT.
- [FastAPI Opentracing](https://github.com/wesdu/fastapi-opentracing) - Поддержка промежуточного программного обеспечения и отслеживания баз данных для FastAPI.
- [FastAPI Pagination](https://github.com/uriyyo/fastapi-pagination) - Начало для FastAPI.
- [FastAPI Plugins](https://github.com/madkote/fastapi-plugins) - Плагины Redis и Scheduler.
- [FastAPI ServiceUtils](https://github.com/skallfass/fastapi_serviceutils) - Генератор для создания API сервисов.
- [FastAPI Shield](https://github.com/jymchng/fastapi-shield) - Общая библиотека FastAPI для написания любых общих декораторов конечных точек, способных вводить ленивые зависимости.
- [FastAPI SocketIO](https://github.com/pyropy/fastapi-socketio) - Простая интеграция для FastAPI и SocketIO.
- [FastAPI Utilities](https://github.com/fastapiutils/fastapi-utils) - Многоразовые утилиты: просмотры на основе классов, вывод ответа маршрутизатора, периодические задачи, промежуточное программное обеспечение синхронизации, сессия SQLAlchemy, упрощение спецификаций OpenAPI.
- [FastAPI Viewsets](https://github.com/svalench/fastapi_viewsets) - Джанго Рест Вдохновленные фреймворком ViewSets для FastAPI, позволяющие организации конечных точек CRUD на основе классов с автоматической регистрацией маршрута.
- [FastAPI Websocket Pub/Sub](https://github.com/authorizon/fastapi_websocket_pubsub) - Классический шаблон pub/sub легко доступен и масштабируется через Интернет и облако в режиме реального времени.
- [FastAPI Websocket RPC](https://github.com/authorizon/fastapi_websocket_rpc) - RPC (двунаправленный JSON RPC) через Websockets сделал простой, надежный и готовый к производству.
- [OpenTelemetry FastAPI Instrumentation](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/instrumentation/opentelemetry-instrumentation-fastapi) - Библиотека предоставляет автоматические и ручные инструменты веб-фреймворков FastAPI, инструментальные запросы http, обслуживаемые приложениями, использующими фреймворк.
- [Prerender Python Starlette](https://github.com/BeeMyDesk/prerender-python-starlette) - Промежуточное ПО Starlette для Prerender.
- [Prometheus FastAPI Instrumentator](https://github.com/trallnag/prometheus-fastapi-instrumentator) - Настраиваемый модульный прибор Prometheus для вашего приложения FastAPI.
- [SlowApi](https://github.com/laurents/slowapi) - Ограничитель ставок (на основе [Flask-Limiter](https://flask-limiter.readthedocs.io)).
- [Starlette Context](https://github.com/tomwojcik/starlette-context) - Позволяет хранить и получать доступ к данным запроса в любом месте вашего проекта, полезном для регистрации.
- [Starlette Exporter](https://github.com/stephenhillier/starlette_exporter) - Еще одна интеграция прометея для FastAPI и Starlette.
- [Starlette OpenTracing](https://github.com/acidjunk/starlette-opentracing) - Поддержка Opentracing для Starlette и FastAPI.
- [Starlette Prometheus](https://github.com/perdy/starlette-prometheus) - Интеграция Prometheus для FastAPI и Starlette.
- [Strawberry GraphQL](https://github.com/strawberry-graphql/strawberry) - Библиотека Python GraphQL на основе классов данных.
- [Pydantic Resolve](https://github.com/KLR-Pattern/pydantic-resolve) -  Превращает класс pydantic в мощный композитный вычислительный контейнер, вводя крючки разрешения и постпроцесса.

## Ресурсы

### Официальные ресурсы

- [Documentation](https://fastapi.tiangolo.com/) - Комплексная документация.
- [Tutorial](https://fastapi.tiangolo.com/tutorial/) - Официальный учебник, показывающий, как использовать FastAPI с большинством его функций, шаг за шагом.
- [Source Code](https://github.com/fastapi/fastapi) - Размещено на GitHub.
- [Discord](https://discord.com/invite/VQjSZaeJmf) - Общайтесь с другими пользователями FastAPI.

### Внешние ресурсы

- [TestDriven.io FastAPI](https://testdriven.io/blog/topics/fastapi/) - Несколько статей, посвященных FastAPI, которые сосредоточены на разработке и тестировании готовых к производству RESTful API, обслуживании моделей машинного обучения и многом другом.

### Подкасты

- [Build The Next Generation Of Python Web Applications With FastAPI](https://www.pythonpodcast.com/fastapi-web-application-framework-episode-259/) - В этом эпизоде [Podcast Init](https://www.pythonpodcast.com/) Создатель FastAPI [Sebastián Ramirez](https://tiangolo.com/) Делится своими мотивами для создания FastAPI и тем, как он работает под капотом.
- [FastAPI on PythonBytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) - Отличный обзор проекта.

### Статьи

- [FastAPI has Ruined Flask Forever for Me](https://medium.com/data-science/fastapi-has-ruined-flask-forever-for-me-73916127da)
- [Why we switched from Flask to FastAPI for production machine learning](https://medium.com/@calebkaiser/why-we-switched-from-flask-to-fastapi-for-production-machine-learning-765aab9b3679) - Глубокий взгляд на то, почему вы хотите перейти от Flask к FastAPI.

### учебники

- [Async SQLAlchemy with FastAPI](https://stribny.name/posts/fastapi-asyncalchemy/) - Узнайте, как использовать SQLAlchemy асинхронно.
- [Deploy Machine Learning Models with Keras, FastAPI, Redis and Docker](https://medium.com/analytics-vidhya/deploy-machine-learning-models-with-keras-fastapi-redis-and-docker-4940df614ece)
- [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/) - Разработка и тестирование асинхронного API с FastAPI, Postgres, Pytest и Docker с использованием Test-Driven Development.
- [FastAPI for Flask Users](https://amitness.com/posts/fastapi-vs-flask) - Узнайте FastAPI с помощью бокового сравнения кода с Flask.
- [FastAPI Session Leak Detection](https://www.logiclooptech.dev/fastapi-session-leak-detection-sqlalchemy-long-running/) - Диагностика и исправление длительных сеансов SQLAlchemy и истощение пула соединений в производстве.
- [Implementing FastAPI Services – Abstraction and Separation of Concerns](https://camillovisini.com/coding/abstracting-fastapi-services) - Структура приложений и сервисов FastAPI для более удобной кодовой базы.
- [Introducing FARM Stack - FastAPI, React, and MongoDB](https://www.mongodb.com/docs/languages/python/pymongo-driver/current/integrations/fastapi-integration/) - Начнем с полного стека веб-приложений FastAPI.
- [Multitenancy with FastAPI, SQLAlchemy and PostgreSQL](https://mergeboard.com/blog/6-multitenancy-fastapi-sqlalchemy-postgresql/) - Узнайте, как подготовить многопользовательские приложения FastAPI.
- [Real-time data streaming using FastAPI and WebSockets](https://stribny.name/posts/real-time-data-streaming-using-fastapi-and-websockets/) - Узнайте, как передавать данные из FastAPI непосредственно в график в режиме реального времени.
- [Running FastAPI applications in production](https://stribny.name/posts/fastapi-production/) - Используйте Gunicorn с системой для развертывания производства.
- [Serving Machine Learning Models with FastAPI in Python](https://medium.com/@8B_EC/tutorial-serving-machine-learning-models-with-fastapi-in-python-c1a27319c459) - Используйте FastAPI для быстрого и простого развертывания и обслуживания моделей машинного обучения на Python в качестве RESTful API.
- [Streaming video with FastAPI](https://stribny.name/posts/fastapi-video/) - Узнайте, как обслуживать видеопотоки.
- [Using Hypothesis and Schemathesis to Test FastAPI](https://testdriven.io/blog/fastapi-hypothesis/) - Применить имущественное тестирование к FastAPI.

### Разговоры

- [PyConBY 2020: Serve ML models easily with FastAPI](https://www.youtube.com/watch?v=z9K5pwb0rt8) - Из выступления Себастьяна Рамиреса вы узнаете, как легко создать готовый к производству веб-интерфейс (JSON) API для ваших моделей ML с помощью FastAPI, включая лучшие практики по умолчанию.
- [PyCon UK 2019: FastAPI from the ground up](https://www.youtube.com/watch?v=3DLwPcrE5mA) - Это выступление показывает, как создать простой REST API для базы данных с нуля с помощью FastAPI.

### Видео

- [Building a Stock Screener with FastAPI](https://www.youtube.com/watch?v=5GorMC2lPpk) - Если вы создадите веб-скринер с FastAPI, вы будете ознакомлены со многими функциями FastAPI, включая модели Pydantic, впрыск зависимостей, фоновые задачи и интеграцию SQLAlchemy.
- [Building Web APIs Using FastAPI](https://www.youtube.com/watch?v=Pe66M8mn-wA) - Используйте FastAPI для создания интерфейса программирования веб-приложений (RESTful API).
- [FastAPI - A Web Framework for Python](https://www.youtube.com/watch?v=PUhio8CprhI&list=PL5gdMNl42qynpY-o43Jk3evfxEKSts3HS) - Узнайте, как делать числовые проверки с помощью FastAPI.
- [FastAPI vs. Django vs. Flask](https://www.youtube.com/watch?v=9YBAOYQOzWs) - Какой фреймворк лучше для Python в 2020 году? Что лучше для асинхронизации / ожидания? Какой самый быстрый?
- [Serving Machine Learning Models As API with FastAPI](https://www.youtube.com/watch?v=mkDxuRvKUL8) - Создайте API машинного обучения с помощью FastAPI.

### Курсы

- [Test-Driven Development with FastAPI and Docker](https://testdriven.io/courses/tdd-fastapi/) - Узнайте, как создать, протестировать и развернуть микросервис резюме текста с помощью Python, FastAPI и Docker.
- [Modern APIs with FastAPI and Python](https://training.talkpython.fm/courses/modern-fastapi-apis) - Курс, предназначенный для быстрого создания новых API в облаке с помощью FastAPI.
- [Full Web Apps with FastAPI Course](https://training.talkpython.fm/courses/full-html-web-applications-with-fastapi) - Вы научитесь создавать полноценные веб-приложения с помощью FastAPI, что эквивалентно тому, что вы можете сделать с Flask или Django.
- [The Definitive Guide to Celery and FastAPI](https://testdriven.io/courses/fastapi-celery/) - Узнайте, как добавить сельдерей в приложение FastAPI для обеспечения асинхронной обработки задач.

### Лучшие практики

- [FastAPI Best Practices](https://github.com/zhanymkanov/fastapi-best-practices) - Сборник лучших практик в репо GitHub.
- [FastAPI-Dishka-FastStream](https://github.com/faststream-community/fastapi-dishka-faststream) - Сочетает FastAPI, тачка, Faststream, квлалхимию, пидантичность.
- [FastAPI Clean Example](https://github.com/ivan-borovets/fastapi-clean-example) - Экранный пример чистой архитектуры, построенный с помощью FastAPI.

## Хостинг

### PaaS

(Платформа как услуга)

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [Fly](https://fly.io)()[tutorial](https://fly.io/docs/python/frameworks/fastapi/),[Deploy from a Git repo](https://github.com/fly-apps/hello-fastapi))
- [Google App Engine](https://cloud.google.com/appengine)
- [Heroku](https://www.heroku.com/)()[Step-by-step tutorial](https://tutlinks.com/create-and-deploy-fastapi-app-to-heroku/),[ML model on Heroku tutorial](https://testdriven.io/blog/fastapi-machine-learning/))
- [Microsoft Azure App Service](https://azure.microsoft.com/en-us/products/app-service/)

### IaaS

(Инфраструктура как услуга)

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Google Compute Engine](https://cloud.google.com/compute)
- [Digital Ocean](https://www.digitalocean.com/)
- [Linode](https://www.linode.com/)

### без сервера

Фреймворки:

- [Chalice](https://github.com/aws/chalice)
- [Mangum](https://mangum.io/) - Адаптер для работы приложений ASGI с AWS Lambda и API Gateway.
- [Vercel](https://vercel.com/) - (ранее Зейт)[example](https://github.com/Snailedlt/Markdown-Videos)).

Вычисления:

- [AWS Lambda](https://aws.amazon.com/lambda/)()[example](https://github.com/iwpnd/fastapi-aws-lambda-example))
- [Google Cloud Functions](https://cloud.google.com/functions)
- [Azure Functions](https://azure.microsoft.com/en-us/products/functions/)
- [Google Cloud Run](https://cloud.google.com/run)()[example](https://github.com/anthonycorletti/cloudrun-fastapi))

## Проекты

### Шаблон проекта

- [Full Stack FastAPI and PostgreSQL - Base Project Generator](https://github.com/fastapi/full-stack-fastapi-template) - Полный шаблон FastAPI
, который включает в себя FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub Actions, автоматический HTTPS и многое другое (разработанный создателем FastAPI,[Sebastián Ramírez](https://github.com/tiangolo)).
- [FastAPI and Tortoise ORM](https://github.com/prostomarkeloff/fastapi-tortoise) - Мощный, но простой шаблон для веб-API (как веб-фреймворк) и Tortoise-ORM (для работы через базу данных без головной боли).
- [FastAPI + SQLAlchemy 2 + PostgreSQL Template](https://github.com/modern-python/fastapi-sqlalchemy-template) - Докеризованный стартер с инъекцией зависимости (модерн-ди), алембическими миграциями и рабочим процессом Justfile.
- [FastAPI Model Server Skeleton](https://github.com/eightBEC/fastapi-ml-skeleton) - Приложение Skeleton для обслуживания моделей машинного обучения готово к производству.
- [cookiecutter-spacy-fastapi](https://github.com/microsoft/cookiecutter-spacy-fastapi) - Быстрое развертывание моделей spaCy с помощью FastAPI.
- [cookiecutter-fastapi](https://github.com/arthurhenrique/cookiecutter-fastapi) - Шаблон Cookiecutter для проектов FastAPI с использованием: машинного обучения, поэзии, трубопроводов Azure и pytest.
- [openapi-python-client](https://github.com/openapi-generators/openapi-python-client) - Создание современных клиентов FastAPI Python (через FastAPI) из OpenAPI.
- [Pywork](https://github.com/vutran1710/YeomanPywork) - [Yeoman](https://yeoman.io/) Генератор для создания приложения FastAPI.
- [fastapi-gino-arq-uvicorn](https://github.com/leosussan/fastapi-gino-arq-uvicorn) - Шаблон для высокопроизводительного асинхронного REST API в Python. FastAPI + GINO + Arq + Uvicorn (w/ Redis и PostgreSQL).
- [FastAPI and React Template](https://github.com/Buuntu/fastapi-react) - Full stack cookiecutter boilerplate с использованием FastAPI, TypeScript, Docker, PostgreSQL и React.
- [FastAPI Nano](https://github.com/rednafi/fastapi-nano) - Простой шаблон FastAPI с архитектурой заводских шаблонов.
- [FastAPI template](https://github.com/s3rius/FastAPI-template) - Гибкий, легкий проектный генератор FastAPI. Он включает поддержку SQLAlchemy, нескольких баз данных, CI/CD, Docker и Kubernetes.
- [FastAPI on Google Cloud Run](https://github.com/anthonycorletti/cloudrun-fastapi) - Boilerplate для создания API с помощью FastAPI, SQLModel и Google Cloud Run.
- [FastAPI with Firestore](https://github.com/anthonycorletti/firestore-fastapi) - Boilerplate для создания API с помощью FastAPI и Google Cloud Firestore.
- [fastapi-alembic-sqlmodel-async](https://github.com/vargasjona/fastapi-alembic-sqlmodel-async) - Это шаблон проекта, который использует FastAPI, Alembic и async SQLModel в качестве ORM.
- [fastapi-starter-project](https://github.com/mirzadelic/fastapi-starter-project) - Шаблон проекта, который использует FastAPI, SQLModel, Alembic, Pytest, Docker, GitHub Actions CI.
- [Full Stack FastAPI and MongoDB - Base Project Generator](https://github.com/mongodb-labs/full-stack-fastapi-mongodb) - Полный стек, современный генератор веб-приложений, который включает в себя FastAPI, MongoDB, Docker, Celery, React frontend, автоматический HTTPS и многое другое.
- [Uvicorn Poetry FastAPI Project Template](https://github.com/max-pfeiffer/uvicorn-poetry-fastapi-project-template) - шаблон проекта Cookiecutter для запуска приложения FastAPI. Работает в контейнере Docker с сервером Uvicorn ASGI на Kubernetes. Поддерживает архитектуры AMD64 и ARM64.
- [FastAPI Agent Blueprint](https://github.com/Mr-DooSun/fastapi-agent-blueprint) - DDD слоистый шаблон, где генерические базовые классы дают асинхронный CRUD без бойлерплейта, домены саморегистрируются при обнаружении, а крючки перед выполнением блокируют кросс-слойный импорт в определенное время.

### Изображения Docker

- [inboard](https://github.com/br3ndonland/inboard) - Изображения Docker для питания ваших приложений FastAPI и помогают вам быстрее отправлять.
- [uvicorn-gunicorn-fastapi-docker](https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker) - Изображение Docker с Uvicorn под управлением Gunicorn для высокопроизводительных веб-приложений FastAPI на Python 3.7 и 3.6 с автоматической настройкой производительности.
- [uvicorn-gunicorn-poetry](https://github.com/max-pfeiffer/uvicorn-gunicorn-poetry) - Изображение Docker с помощью Gunicorn с помощью Uvicorn для запуска веб-приложений Python. Поэзия используется для управления зависимостями и создания виртуальной среды. Поддерживает архитектуры AMD64 и ARM64.
- [uvicorn-poetry](https://github.com/max-pfeiffer/uvicorn-poetry) - Изображение Docker с сервером Uvicorn ASGI для запуска веб-приложений Python на Kubernetes. Поэзия используется для управления зависимостями и создания виртуальной среды. Поддерживает архитектуры AMD64 и ARM64.

### Проекты с открытым исходным кодом

- [Astrobase](https://github.com/anthonycorletti/astrobase) - Простое, быстрое и безопасное развертывание в любом месте.
- [Awesome FastAPI Projects](https://github.com/Kludex/awesome-fastapi-projects) - Список проектов, использующих FastAPI.
- [Bitcart](https://github.com/bitcart/bitcart) - Платформа для продавцов, пользователей и разработчиков, которая предлагает простую настройку и использование.
- [Bali](https://github.com/bali-framework/bali) - Упрощение базы разработки облачных нативных микросервисов на FastAPI и gRPC.
- [Bunnybook](https://github.com/pietrobassi/bunnybook) - Крошечная социальная сеть, построенная с помощью FastAPI, React+RxJs, Neo4j, PostgreSQL и Redis.
- [Coronavirus-tg-api](https://github.com/egbakou/coronavirus-tg-api) - API для отслеживания глобальной вспышки коронавируса (COVID-19, SARS-CoV-2).
- [Dispatch](https://github.com/Netflix/dispatch) - Управление инцидентами безопасности.
- Пример FastAPI CRUD:
  - [Async flavor](https://github.com/testdrivenio/fastapi-crud-async)
  - [Sync Flavor](https://github.com/testdrivenio/fastapi-crud-sync)
- [FastAPI with Observability](https://github.com/Blueswen/fastapi-observability) - Наблюдайте за приложением FastAPI с тремя столпами наблюдаемости: Traces (Tempo), Metrics (Prometheus), Logs (Loki) на Grafana через OpenTelemetry и OpenMetrics.
- [FastAPI Websocket Broadcast](https://github.com/kthwaite/fastapi-websocket-broadcast) - Демо-версия Websocket "broadcast".
- [FastAPI with Celery, RabbitMQ, and Redis](https://github.com/GregaVrbancic/fastapi-celery) - Минимальный пример использования FastAPI и Celery с RabbitMQ для очереди задач, Redis для бэкэнда Celery и Flower для мониторинга задач Celery.
- [FuturamaAPI](https://github.com/koldakov/futuramaapi) - Игровая площадка REST и GraphQL построена с лучшими практиками, предоставляя WebSockets, SSE, обратные вызовы, секретные сообщения и многое другое.
- [JeffQL](https://github.com/yezz123/JeffQL/) - Простая аутентификация и логин API с использованием GraphQL и JWT.
- [JSON-RPC Server](https://github.com/smagafurov/fastapi-jsonrpc) - JSON-RPC сервер на базе FastAPI.
- [Mailer](https://github.com/rclement/mailer) - Микросервис Dead-simple для статических веб-сайтов.
- [Markdown-Videos](https://github.com/Snailedlt/Markdown-Videos) - API для создания миниатюр для встраивания в ваш контент разметки.
- [Nemo](https://github.com/harshitsinghai77/nemo-backend) - Будьте продуктивны с Немо.
- [OPAL (Open Policy Administration Layer)](https://github.com/authorizon/opal) - Обновления авторизации в режиме реального времени поверх Open-Policy; построен с помощью FastAPI, Typer и FastAPI WebSocket pub/sub.
- [OSBot-Fast-API](https://github.com/owasp-sbot/OSBot-Fast-API) - Безопасная обертка FastAPI, которая обеспечивает промежуточное ПО, отслеживание событий HTTP, интеграцию AWS Lambda, тестовые утилиты и автоконверсию между Type Safe, Pydantic и классами данных.
- [Polar](https://github.com/polarsource/polar) - Платформа финансирования и монетизации для разработчиков, построенная с помощью FastAPI, SQLAlchemy, Alembic и Arq.
- [RealWorld Example App - mongo](https://github.com/markqiu/fastapi-mongodb-realworld-example-app)
- [RealWorld Example App - postgres](https://github.com/nsidnev/fastapi-realworld-example-app)
- [redis-streams-fastapi-chat](https://github.com/leonh/redis-streams-fastapi-chat) - Простое приложение для чата с поддержкой Redis Streams с использованием Websockets, Asyncio и FastAPI / Starlette.
- [Sprites as a service](https://github.com/ljvmiranda921/sprites-as-a-service) - Создайте свои 8-битные аватары с помощью Cellular Automata.
- [Slackers](https://github.com/uhavin/slackers) - Slack Webhooks API.
- [TermPair](https://github.com/cs01/termpair) - Просмотр и управление терминалами из вашего браузера с сквозным шифрованием.
- [Universities](https://github.com/ycd/universities) - API-сервис для получения информации о +9600 университетах мира.

## Спонсоры

Пожалуйста, поддержите этот проект с открытым исходным кодом, проверив наших спонсоров:

<a href="https://testdriven.io/courses/tdd-fastapi/?ref=awesome-fastapi" target="_blank" title="Learn to build high-quality web apps with best practices"><img src="images/testdriven.svg"></a>
