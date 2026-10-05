# Awesome Flask [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Микро веб-фреймворк для Python и экосистема расширения вокруг него.

Учебники, лекции и видео в этом списке бесплатны. Платные курсы не принимаются.

<p align="right">
  <a href="https://flask.palletsprojects.com/">
    <img src="flask-icon.svg" width="72" alt="Flask">
  </a>
</p>

## Содержание

- [Официальные ресурсы](#official-resources)
- [Расширения](#extensions)
  - [Администрирование](#admin)
  - [API](#apis)
  - [Аутентификация](#auth)
  - [Кэш](#cache)
  - [Базы данных](#databases)
  - [Инструменты для разработчиков](#developer-tools)
  - [Электронная почта](#email)
  - [Формы и валидация](#forms-and-validation)
  - [Полнотекстовый поиск](#full-text-search)
  - [Безопасность](#security)
  - [Очередь задач](#task-queues)
  - [Утилиты](#utils)
- [Ресурсы](#resources)
  - [сообщество](#community)
  - [учебники](#tutorials)
  - [Книги](#books)
  - [Разговоры](#talks)
  - [Видео](#videos)
- [Проекты](#projects)
  - [Шаблоны проектов](#boilerplates)
  - [Проекты с открытым исходным кодом](#open-source-projects)
- [Хостинг](#hosting)

## Официальные ресурсы

- [Flask](https://flask.palletsprojects.com/) - Официальная документация для текущих и прошлых выпусков.
- [Flaskr Tutorial](https://flask.palletsprojects.com/tutorial/) - Официальный учебник, который создает небольшой блог.
- [Source Code](https://github.com/pallets/flask) - Сам фласк, устроенный Паллетами.
- [Pallets-Eco](https://github.com/pallets-eco) - Расширения сообщества поддерживаются рядом с основными проектами.
- [Quart](https://github.com/pallets/quart) - Официальный аналог ASGI Flask с совместимым API.

## Расширения

### Администрирование

- [Flask-Admin](https://github.com/pallets-eco/flask-admin) - Расширяемый интерфейс администратора для управления данными приложения.

### API

- [APIFlask](https://github.com/apiflask/apiflask) - Flask web API фреймворк с валидацией marshmallow и генерацией OpenAPI.
- [Connexion](https://github.com/spec-first/connexion) - Spec-first OpenAPI фреймворк, который может работать на Flask
- [Eve](https://github.com/pyeve/eve) - REST API фреймворк на базе Flask и MongoDB.
- [Flasgger](https://github.com/flasgger/flasgger) - OpenAPI и Swagger UI для просмотра Flask.
- [Flask-Rebar](https://github.com/plangrid/flask-rebar) - Фласк, зефир и OpenAPI объединились для услуг REST.
- [Flask-RESTful](https://github.com/flask-restful/flask-restful) - Легкие помощники для создания REST API.
- [Flask-RESTX](https://github.com/python-restx/flask-restx) - Форк сообщества Flask-RESTPlus с документацией Swagger.
- [flask-smorest](https://github.com/marshmallow-code/flask-smorest) - Marshmallow-first REST фреймворк с автоматическим OpenAPI.

### Аутентификация

- [Authlib](https://github.com/authlib/authlib) - OAuth 1, OAuth 2 и OpenID Connect клиенты и серверы.
- [Authomatic](https://github.com/authomatic/authomatic) - Фреймворк-агностик OAuth и OpenID клиент.
- [Flask-Dance](https://github.com/singingwolfboy/flask-dance) - Потребитель OAuth со встроенными провайдерами, такими как GitHub и Google.
- [Flask-HTTPAuth](https://github.com/miguelgrinberg/Flask-HTTPAuth) - Базовая аутентификация, дайджест и токен для маршрутов.
- [Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended) - Аутентификация JWT с токенами обновления и мелкозернистыми претензиями.
- [Flask-Login](https://github.com/maxcountryman/flask-login) - Управление входом пользователя на основе сеанса.
- [Flask-Praetorian](https://github.com/dusktreader/flask-praetorian) - JWT аутентификация и ролевая авторизация для API.
- [Flask-Pundit](https://github.com/anurag90x/flask-pundit) - Авторизация, основанная на политике, вдохновленная Rails Pundit.
- [Flask-Security](https://github.com/pallets-eco/flask-security) - Управление учетной записью, аутентификация и авторизация. Продолжение Flask-Security-Too.
- [Flask-Session](https://github.com/pallets-eco/flask-session) - Серверные сессии для Flask.
- [Flask-User](https://github.com/lingthio/Flask-User) - Настраиваемая регистрация пользователей, логин и управление учетной записью.

### Кэш

- [Flask-Caching](https://github.com/pallets-eco/flask-caching) - Поддержка кэширования с несколькими бэкэндами.

### Базы данных

- [Flask-Alembic](https://github.com/pallets-eco/flask-alembic) - Алембические миграции подключены к базе данных Flask-SQLAlchemy.
- [Flask-Migrate](https://github.com/miguelgrinberg/Flask-Migrate) - Миграция баз данных для Flask-SQLAlchemy через Alembic.
- [Flask-MongoEngine](https://github.com/MongoEngine/flask-mongoengine) - Интеграция MongoEngine с поддержкой WTForms
- [Flask-PyMongo](https://github.com/mongodb-labs/flask-pymongo) - Интеграция PyMongo для MongoDB.
- [Flask-SQLAlchemy](https://github.com/pallets-eco/flask-sqlalchemy) - Интеграция SQLAlchemy для Flask.
- [Advanced Alchemy](https://github.com/litestar-org/advanced-alchemy) - SQLAlchemy компаньон с репозиториями, помощниками Alembic и сторонним расширением Flask.

### Инструменты для разработчиков

- [Elastic APM](https://github.com/elastic/apm-agent-python) - Контроль производительности приложений для Flask.
- [Flask-DebugToolbar](https://github.com/pallets-eco/flask-debugtoolbar) - Панель инструментов для отладки браузера, портированная из Django.
- [Flask-MonitoringDashboard](https://github.com/flask-dashboard/Flask-MonitoringDashboard) - Автоматический мониторинг производительности для сервисов Flask.
- [Flask-Testing](https://github.com/jarus/flask-testing) - Помощники Unittest для приложений Flask.
- [Mixer](https://github.com/klen/mixer) - Объектный завод для моделей SQLAlchemy и Django.
- [nplusone](https://github.com/jmcarp/nplusone) - Обнаруживает запросы N+1 при использовании Flask-SQLAlchemy.
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-python-contrib) - Инструменты отслеживания и метрики, включая Flask.
- [pytest-flask](https://github.com/pytest-dev/pytest-flask) - Пробные светильники для приложений Flask.
- [Sentry](https://github.com/getsentry/sentry-python) - Отслеживание ошибок SDK с интеграцией Flask.

### Электронная почта

- [Flask-Mail](https://github.com/pallets-eco/flask-mail) - SMTP электронная почта для Flask.
- [Flask-Mailman](https://github.com/waynerv/flask-mailman) - Порт почтовой системы Джанго в Фласк.

### Формы и валидация

- [Flask-Marshmallow](https://github.com/marshmallow-code/flask-marshmallow) - Интеграция Marshmallow для сериализации и проверки.
- [Flask-Pydantic](https://github.com/pallets-eco/flask-pydantic) - Пидантическая валидация для Flask Views.
- [Flask-WTF](https://github.com/pallets-eco/flask-wtf) - Интеграция WTForms с CSRF, загрузка файлов и reCAPTCHA.

### Полнотекстовый поиск

- [flask-msearch](https://github.com/honmaple/flask-msearch) - Полнотекстовый поиск по Flask с поддержкой Whoosh.
- [SQLAlchemy-Searchable](https://github.com/falcony-io/sqlalchemy-searchable) - Полнотекстовый поиск моделей SQLAlchemy на PostgreSQL.

### Безопасность

- [Flask-Bcrypt](https://github.com/maxcountryman/flask-bcrypt) - Bcrypt пароль хеширование.
- [Flask-CORS](https://github.com/corydolphin/flask-cors) - Поддержка совместного использования ресурсов (CORS).
- [Flask-Limiter](https://github.com/alisaifee/flask-limiter) - Ограничение тарифов для маршрутов Flask.
- [Flask-SeaSurf](https://github.com/maxcountryman/flask-seasurf) - CSRF защита для Flask.
- [Flask-Talisman](https://github.com/wntrblm/flask-talisman) - HTTPS правоприменение и заголовки безопасности.

### Очередь задач

- [Celery](https://github.com/celery/celery) - Распределенная очередь задач, обычно используемая с Flask.
- [Dramatiq](https://github.com/Bogdanp/dramatiq) - Быстрая альтернатива сельдерея, с [Flask-Dramatiq](https://flask-dramatiq.readthedocs.io/) Доступно.
- [Flask-RQ](https://github.com/pallets-eco/flask-rq) - Интеграция Redis Queue (RQ) для Flask и Quart.
- [Huey](https://github.com/coleifer/huey) - Небольшая очередь задач, поддерживаемая Redis.

### Утилиты

- [Flask-Assets](https://github.com/miracle2k/flask-assets) - Интеграция Webassets для объединения и минимизации статических файлов.
- [Flask-Babel](https://github.com/python-babel/flask-babel) - Интернационализация и локализация через Вавилон.
- [Flask-GoogleMaps](https://github.com/flask-extensions/Flask-GoogleMaps) - Вставьте Google Maps в шаблоны Flask.
- [flask-graphql](https://github.com/graphql-python/flask-graphql) - Поддержка GraphQL для Flask.
- [Flask-HTMLmin](https://github.com/hamidfzm/Flask-HTMLmin) - Минификация HTML для Flask-ответов.
- [flask-jsonrpc](https://github.com/cenobites/flask-jsonrpc) - Поддержка JSON-RPC для Flask
- [Flask-Moment](https://github.com/miguelgrinberg/Flask-Moment) - Помощники Moment.js для дат в шаблонах Jinja.
- [Flask-Paginate](https://github.com/lixxu/flask-paginate) - Помощники для фласка.
- [flask-s3](https://github.com/e-dard/flask-s3) - Обслуживание статических активов Flask от Amazon S3.
- [Flask-SocketIO](https://github.com/miguelgrinberg/Flask-SocketIO) - Сокет. Интеграция с Flask.
- [Frozen-Flask](https://github.com/Frozen-Flask/Frozen-Flask) - Замораживает приложение Flask в статический сайт.

## Ресурсы

### сообщество

- [Discord](https://discord.gg/pallets) - Общий сервер Pallets. Используйте каналы помощи Flask.
- [Reddit](https://www.reddit.com/r/flask/) - Flask subreddit.
- [Stack Overflow](https://stackoverflow.com/questions/tagged/flask) - Вопросы помечены`flask`.

### учебники

- [The Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) - Длинная серия, охватывающая полное приложение Flask.
- [Discover Flask](https://github.com/realpython/discover-flask) - Полный стек Flask от Real Python.
- [Flaskr TDD](https://github.com/mjhea0/flaskr-tdd) - Введение в Flask, тестовую разработку и JavaScript.

### Книги

- [Explore Flask](https://explore-flask.readthedocs.io/en/latest/) - Бесплатная книга о шаблонах и структуре проекта.
- [Flask Web Development](https://www.oreilly.com/library/view/flask-web-development/9781491991725/) - Книга О'Рейли Мигеля Гринберга, которая создает реальное приложение.

### Разговоры

- [Advanced Flask Patterns](https://speakerdeck.com/mitsuhiko/advanced-flask-patterns) - Образцы от Армина Ронахера.
- [Flasky Goodness](https://speakerdeck.com/kennethreitz/flasky-goodness) - Речь Кеннета Рейца.
- [Domain Driven Design with Flask](https://speakerdeck.com/mikedebo/domain-driven-design-dot-dot-dot-with-flask) - Использование идей DDD во Flask.

### Видео

- [PyVideo](https://pyvideo.org/search.html?q=flask) - Конференционные переговоры Flask.
- [Python Flask Tutorial](https://www.youtube.com/playlist?list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH) - Полнофункциональная серия веб-приложений Кори Шафера.

## Проекты

### Шаблоны проектов

- [cookiecutter-flask](https://github.com/cookiecutter-flask/cookiecutter-flask) - Шаблон cookiecutter с Bootstrap, Webpack и аутентификацией.
- [fbone](https://github.com/imwilsonxu/fbone) - Классический плоский скелет со структурированным макетом приложения.
- [Flask-AppBuilder](https://github.com/dpgaspar/Flask-AppBuilder) - Быстрый конструктор приложений с безопасностью, авто CRUD и графиками.
- [Flask-Foundation](https://github.com/JackStouffer/Flask-Foundation) - Лучшее практическое стартовое приложение.
- [uwsgi-nginx-flask-docker](https://github.com/tiangolo/uwsgi-nginx-flask-docker) - Изображение Docker с помощью uWSGI, Nginx и Flask.

### Проекты с открытым исходным кодом

- [Apache Airflow](https://github.com/apache/airflow) - Платформа для авторства, планирования и мониторинга рабочих процессов.
- [Apache Superset](https://github.com/apache/superset) - Платформа для исследования и визуализации данных.
- [FlaskBB](https://github.com/flaskbb/flaskbb) - Классическое программное обеспечение для форума, созданное с помощью Flask.
- [Indico](https://github.com/indico/indico) - Система управления событиями, разработанная в ЦЕРНе.
- [PythonBuddy](https://github.com/ethanchewy/PythonBuddy) - Онлайн редактор Python с живой проверкой синтаксиса.
- [Redash](https://github.com/getredash/redash) - Запрос и визуализация данных из многих источников.
- [SecureDrop](https://github.com/freedomofpress/securedrop) - Система подачи сообщений для редакций новостей.
- [SimpleLogin](https://github.com/simple-login/app) - Служба псевдонимов электронной почты, которая защищает личные почтовые ящики.
- [SkyLines](https://github.com/skylines-project/skylines) - База данных отслеживания и полета для планировки.
- [Timesketch](https://github.com/google/timesketch) - Совместный криминалистический анализ временных рамок.

## Хостинг

- [Flask Deployment Options](https://flask.palletsprojects.com/en/stable/deploying/) - Официальные заметки на серверах и платформах WSGI.
- [Fly.io](https://fly.io/docs/python/frameworks/flask/) - Развернуть Flask рядом с пользователями на Fly Machines.
- [Google Cloud Run](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service) - Контейнерный хостинг, который хорошо работает с Flask.
- [PythonAnywhere](https://help.pythonanywhere.com/pages/Flask/) - Хостинг среды Python с первоклассной поддержкой Flask.
- [Render](https://render.com/docs/deploy-flask) - Веб-сервисы и фоновые работники для Flask.
- [Zappa](https://github.com/zappa/Zappa) - Разверните приложения WSGI в AWS Lambda и API Gateway.

## Вклад

Предложения приветствуются. Читать далее [CONTRIBUTING.md](CONTRIBUTING.md) Сначала. Исторические и несохраненные записи живут в [archived.md](archived.md).
