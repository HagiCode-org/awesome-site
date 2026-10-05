# Удивительный Джанго [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> Список удивительных вещей, связанных с Джанго. Поддерживаемый [Will Vincent](https://github.com/wsvincent) и [Jeff Triplett](https://github.com/jefftriplett).

<br>

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/django-logo-negative.svg">
  <img alt="Dark and Light mode version of the Django logo" src="./assets/django-logo-positive.svg">
</picture>
</div>

<br>

Пожалуйста, поддержите Django, сделав пожертвование в пользу компании. <a rel="sponsored" href="https://www.djangoproject.com/fundraising/">Фонд программного обеспечения Джанго</a>,
Спонсировать через <a rel="sponsored" href="https://github.com/sponsors/django">Спонсоры GitHub</a>,
или купить <a rel="sponsored" href="https://django.threadless.com/">официальный товар</a>.

## Содержание

<!--lint disable awesome-toc-->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Сторонние пакеты](#third-party-packages)
  - [администратор](#admin)
  - [Админ темы](#admin-themes)
  - [API](#apis)
  - [асинхронный](#async)
  - [кеширование](#caching)
  - [командование](#commands)
  - [конфигурация](#configuration)
  - [Системы управления контентом](#content-management-systems)
  - [Коннекторы базы данных](#database-connectors)
  - [Инъекция зависимостей](#dependency-injection)
  - [Торговля](#ecommerce)
  - [Редакторы](#editors)
  - [Файлы/изображения](#filesimages)
  - [формы](#forms)
  - [Полнотекстовые фреймворки](#full-stack-frameworks)
  - [Генерал](#general)
  - [Интернационализация (i18n)](#internationalisation-i18n)
  - [лесозаготовка](#logging)
  - [Мониторинг](#monitoring)
  - [рассылка](#mailing)
  - [Модельные поля](#model-fields)
  - [Модели](#models)
  - [Выступление](#performance)
  - [Разрешения](#permissions)
  - [Поиск](#search)
  - [Поисковая оптимизация](#search-engine-optimisation)
  - [Безопасность](#security)
  - [Статические активы](#static-assets)
  - [Очередь задач](#task-queues)
  - [Шаблоны](#templates)
  - [Испытание](#testing)
  - [URL](#urls)
  - [Пользователи](#users)
  - [Посмотреть](#views)
- [Инструменты для разработчиков](#developer-tools)
  - [Шаблоны](#templates-1)
  - [Статический анализ](#static-analysis)
- [Пакеты Python](#python-packages)
- [ресурсы](#resources)
  - [Официальные ресурсы](#official-resources)
  - [образовательный](#educational)
  - [сообщество](#community)
  - [Конференции](#conferences)
  - [Советы по работе](#job-boards)
  - [Бюллетени](#newsletters)
  - [Подкасты](#podcasts)
  - [Видео](#videos)
  - [Книги](#books)
- [Хостинг](#hosting)
  - [PaaS (платформы как услуга)](#paas-platforms-as-a-service)
  - [IaaS (инфраструктура как услуга)](#iaas-infrastructure-as-a-service)
  - [Услуги по развертыванию](#deployment-services)
  - [Самостоятельное развертывание](#self-hosted-deployment)
- [Проекты](#projects)
  - [Бойлерплант](#boilerplate)
  - [Open Source проекты](#open-source-projects)
- [Джанго Рест Рамочная основа](#django-rest-framework)
  - [Ресурсы DRF](#drf-resources)
  - [Учебники DRF](#drf-tutorials)
- [Вагтейл](#wagtail)
  - [Ресурсы Wagtail](#wagtail-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!--lint enable awesome-toc-->

## Сторонние пакеты

_Полный список всех доступных пакетов см. [Django Packages](https://djangopackages.org/)_

### администратор
- [django-hijack](https://github.com/django-hijack/django-hijack) - Администраторы могут входить в систему и работать от имени других пользователей, не зная их учетных данных.
- [django-import-export](https://github.com/django-import-export/django-import-export) - Приложение Django и библиотека для импорта и экспорта данных с админ-интеграцией.
- [django-admin-inline-paginator-plus](https://github.com/DmytroLitvinov/django-admin-inline-paginator-plus) - Простой способ начать свой inline в Django admin
- [django-loginas](https://github.com/skorokithakis/django-loginas) - "Входите как пользователь" для администратора Django.
- [impostor](https://github.com/avallbona/Impostor) - Impostor - это приложение Django, которое позволяет сотрудникам входить в систему в качестве другого пользователя, используя свое собственное имя пользователя и пароль.
- [django-impersonate](https://pypi.org/project/django-impersonate/) - Позволить суперпользователям «олицетворять» другие учетные записи не суперпользователей.
- [django-admin-env-notice](https://github.com/dizballanze/django-admin-env-notice) - Визуально различать среды в Django Admin, например: `development`, `staging`, `production`.
- [django-related-admin](https://github.com/PetrDlouhy/django-related-admin) - Библиотека помощников, которая позволяет писать список_Взаимоотношения иностранных ключей.
- [django-admin-sortable2](https://github.com/jrief/django-admin-sortable2) - Общий порядок перетаскивания для объектов в интерфейсе администратора Django.
- [django-admin-collaborator](https://github.com/brktrlw/django-admin-collaborator) - Добавьте присутствие пользователя в режиме реального времени, отредактируйте замки и пообщайтесь с администратором Django с Channels и Redis.
- [dj-control-room](https://github.com/django-control-room/dj-control-room) - Постройте плоскость управления с набором операционных инструментов внутри администратора Django (Redis, кэш, Celery, URL-адреса и многое другое).
- [django-admin-mcp](https://github.com/7tg/django-admin-mcp) - Выставляйте модели, зарегистрированные администратором, клиентам MCP (ассистентам ИИ, таким как Клод): CRUD, действия администратора и история через классы ModelAdmin, ограниченные разрешениями Django.

### Админ темы
- [django-grappelli](https://github.com/sehmaschine/django-grappelli) - Джазовая кожа для администратора.
- [django-jazzmin](https://github.com/farridav/django-jazzmin) - Тема для django admin, которая использует AdminLTE 3 и Bootstrap 4, чтобы сделать yo' admin джазовым.
- [django-admin-interface](https://github.com/fabiocaccamo/django-admin-interface) - Настройка администратора самим администратором (цвет, заголовок). title,logo) и всплывающие окна заменены модальными.
- [django-semantic-admin](https://github.com/globophobe/django-semantic-admin) - Тема администратора Django Semantic UI.
- [django-jet-reboot](https://github.com/assem-ch/django-jet-reboot) - Django Jet - это современный шаблон для интерфейса администратора Django с улучшенной функциональностью.
- [django-baton](https://github.com/otto-torino/django-baton) - Прохладное, современное и отзывчивое приложение администратора django на основе бутстрапа 5.
- [django-unfold](https://github.com/unfoldadmin/django-unfold) - Современная тема администратора Django для бесшовной разработки интерфейса.
- [django-daisy](https://github.com/hypy13/django-daisy) - Современная приборная панель django полностью отзывчива, построенная с использованием daisyui.
- [django-smartbase-admin](https://github.com/SmartBase-SK/django-smartbase-admin) - Django SmartBase Admin - performance-tuned - end-user ready beautiful admin panel

### API
<!--lint disable double-link-->
- [django-rest-framework](https://github.com/encode/django-rest-framework) - Web API для Django.
- [django-cors-headers](https://github.com/adamchainz/django-cors-headers) - Если ваш бэкэнд и фронтенд находятся на разных серверах, вам это нужно.
- [dj-rest-auth](https://github.com/iMerica/dj-rest-auth) - Аутентификация для Django Rest Framework
- [django-rest-knox](https://github.com/jazzband/django-rest-knox) - Модуль аутентификации для django-rest-auth
- [djoser](https://github.com/sunscrapers/djoser) - Реализация Django auth.
- [djaq](https://github.com/paul-wolf/djaq) - Мгновенный удаленный API для моделей Django с мощным языком запросов.
- [django-rest-framework-simplejwt](https://github.com/jazzband/djangorestframework-simplejwt) - Токены JSON для DRF.
- [django-webpack-loader](https://github.com/django-webpack/django-webpack-loader) - Прозрачно используйте webpack с Django.
- [drf-yasg](https://github.com/axnsan12/drf-yasg) - Автоматизированная генерация реальных схем Swagger/OpenAPI 2.0 из кода Django REST Framework.
- [graphene-django](https://github.com/graphql-python/graphene-django) - GraphQL для Django.
- [graphene-django-filter](https://github.com/devind-team/graphene-django-filter) - Продвинутые фильтры, реализующие и/или не использующие операторы в GraphQL для Django.
- [django-modern-rest](https://github.com/wemake-services/django-modern-rest) - Современный REST со скоростью, типами, асинком, `msgspec`, `pydantic` и других благ!
- [django-ninja](https://django-ninja.rest-framework.com/) - Джанго Ниндзя - Быстрая структура Django REST, основанная на аннотациях типов.
- [django-tastypie](https://github.com/django-tastypie/django-tastypie) - Создание вкусных API для приложений Django с 2010 года.
- [drf-spectacular](https://github.com/tfranzel/drf-spectacular) - Безопасное и гибкое поколение схем OpenAPI 3 для Django REST Framework
- [django-webhook](https://github.com/danihodovic/django-webhook) - Plug-and-play приложение Django для отправки исходящих веб-хуков по изменениям модели.
- [strawberry-django](https://github.com/strawberry-graphql/strawberry-django) - Интеграция Django со Strawberry, библиотекой GraphQL, предназначенной для современного развития
<!--lint enable double-link-->

### асинхронный
- [channels](https://github.com/django/channels/) - Поддержка Async для Django

### кеширование
- [django-cachalot](https://github.com/noripyt/django-cachalot) - Кэшируйте ваши запросы Django ORM и автоматически аннулируйте их.
- [django-cacheops](https://github.com/Suor/django-cacheops) - Гладкий кэш ORM с автоматической гранулированной событийной инвалидизацией.

### командование
- [django-extensions](https://github.com/django-extensions/django-extensions/) - Расширения пользовательского управления, в частности `runserver_plus` и `shell_plus`.
- [django-click](https://github.com/django-commons/django-click) - Напишите команды управления Django, используя [click CLI library](https://click.palletsprojects.com).
- [django-dbbackup](https://github.com/Archmonger/django-dbbackup) - Управление командами для резервного копирования и восстановления базы данных проекта и медиафайлов.
- [django-liquidb](https://github.com/Gusakovskiy/django-liquidb) - Приложение Django для упрощения управления миграцией и изменения состояния схемы db.
- [django-migration-zero](https://github.com/ambient-innovation/django-migration-zero/) - Целостное внедрение шаблона «миграция ноль» для Django, охватывающего локальные изменения и корректировки базы данных в производстве.
- [django-typer](https://github.com/django-commons/django-typer) - Напишите команды управления Django, используя [Typer CLI library](https://typer.tiangolo.com).

### конфигурация
<!--lint disable double-link-->
- [confidential](https://github.com/candidco/confidential) - Управление конфигурациями и секретами (с поддержкой CLI).
- [django-environ](https://github.com/joke2k/django-environ) - переменных окружающей среды.
- [django-split-settings](https://github.com/wemake-services/django-split-settings) - Организуйте несколько файлов настроек.
- [django-constance](https://github.com/jazzband/django-constance) - Приложение Django для хранения динамических настроек в подключаемых бэкэндах (встроенный бэкэнд модели Redis и Django) с интеграцией с приложением администратора Django.
- [django-configurations](https://github.com/jazzband/django-configurations) - Упрощает конфигурацию проекта Django, опираясь на композитность классов Python и следующие принципы: [the twelve-factor app](https://12factor.net/config).
- [dynaconf](https://www.dynaconf.com/django/) - Dynaconf загружает настройки django из нескольких источников (множественные форматы файлов, env vars, redis, vault и т. Д.), Управляет секретами и позволяет использовать различные стратегии слияния. [the twelve-factor app](https://12factor.net/config).
- [django-extra-settings](https://github.com/fabiocaccamo/django-extra-settings) - Конфигурируйте и управляйте введенными дополнительными настройками, используя только админ django.
- [django-removals](https://github.com/ambient-innovation/django-removals/) - Обнаружение устаревших переменных настроек с помощью удобной проверки системы
- [environs](https://github.com/sloria/environs) - Упрощенная переменная среды, которая поставляется с [Django helper](https://github.com/sloria/environs#usage-with-django) Он устанавливает дополнительные пакеты.
<!--lint enable double-link-->
- [django-classy-settings](https://github.com/funkybob/django-classy-settings) - Настройки на основе класса, чтобы поддерживать ваши среды в порядке, с легким доступом к типизированным переменным среды.
- [django-content-settings](https://github.com/occipital/django-content-settings) - Легко создавать и управлять редактируемыми набранными переменными непосредственно с панели администратора Django.

### Системы управления контентом
<!--lint disable double-link-->
- [wagtail](https://github.com/wagtail/wagtail) - Популярная система управления контентом Django (CMS). Видишь? [awesome-wagtail](https://github.com/wagtail/awesome-wagtail) Тоже.
- [mezzanine](https://github.com/stephenmcd/mezzanine) - CMS фреймворк.
- [django-cms](https://github.com/django-cms/django-cms) - CMS для Django.
- [feincms](https://github.com/feincms/feincms) - Расширяемая CMS на основе Django.
- [puput](https://github.com/APSL/puput) - Приложение для блога с Wagtail.
<!--lint enable double-link-->

### Коннекторы базы данных
- [djongo](https://github.com/doableware/djongo) - Разъем базы данных Django и MongoDB.

### Инъекция зависимостей
- [Wireup](https://github.com/maldoinc/wireup) - Инъекция зависимостей для Django

### Торговля
- [saleor](https://github.com/saleor/saleor) - Платформа электронной коммерции Django на основе GraphQL.
- [django-oscar](https://github.com/django-oscar/django-oscar) - Доменная электронная коммерция для Django.

### Редакторы
<!--lint ignore awesome-list-item-->
- [django-markdownx](https://github.com/neutronX/django-markdownx) - Комплексный плагин Markdown, созданный для Django.
- [django-markdown-editor](https://github.com/agusmakmun/django-markdown-editor) - Awesome Django Markdown Editor поддерживает Bootstrap & Semantic-UI.
- [django-business-logic](https://github.com/dgk/django-business-logic) - Visual DSL фреймворк для Django.
- [django-summernote](https://github.com/lqez/django-summernote) - Summernote — простой редактор WYSIWYG.
- [django-tinymce](https://github.com/jazzband/django-tinymce) - Интеграция TinyMCE для Django
- [django-prose](https://github.com/withlogicco/django-prose) - Легкий редактор для создания контента.
- [django-ace](https://github.com/django-ace/django-ace) - Интеграция с Django.

### Файлы/изображения
- [django-cleanup](https://github.com/un1t/django-cleanup) - Удаление файла/изображения нулевой конфигурации для локальных и удаленных файлов.
- [django-imagekit](https://github.com/matthewwithanm/django-imagekit) - Приложение Django для обработки изображений для миниатюр, черно-белых и размеров.
- [django-pictures](https://github.com/codingjoe/django-pictures) - Отзывчивая библиотека изображений с использованием современных кодов, таких как AVIF и WebP.
- [sorl-thumbnail](https://github.com/jazzband/sorl-thumbnail) - Минусы для Джанго.

### формы
- [django-crispy-forms](https://github.com/django-crispy-forms/django-crispy-forms/) - Форма Драй Джанго.
- [django-floppyforms](https://github.com/jazzband/django-floppyforms) - Полный контроль рендеринга формы.
- [django-formtools](https://github.com/jazzband/django-formtools) - Для формы предыдущих и многоступенчатых форм, ранее входивших в состав Django до 1,8.
- [django-widget-tweaks](https://github.com/jazzband/django-widget-tweaks) - Tweak Форма рендеринга поля в шаблонах.
- [django-autocomplete-light](https://github.com/yourlabs/django-autocomplete-light) - Добавьте автозаполнение в формы.

### Полнотекстовые фреймворки
- [Django LiveView](https://github.com/Django-LiveView/liveview) - Рамки для создания динамических, реактивных интерфейсов на стороне сервера с шаблонами Django. Обновления в реальном времени через WebSocket с помощью обработчиков на основе декоратора.
- [Django-Bridge](https://github.com/kaedroho/django-bridge) - Простой способ создания интерфейсов React для приложений Django.
- [ReactPy](https://github.com/reactive-python/reactpy) - Это React, но в Python. Вставьте динамически визуализируемый Python в шаблоны Django [ReactPy-Django module](https://github.com/reactive-python/reactpy-django).
- [Reactor](https://github.com/edelvalle/reactor/) - Phoenix LiveView, но для Джанго.
- [Sockpuppet](https://sockpuppet.argpar.se/) - Создавайте реактивные приложения с помощью инструмента Django, который вы уже знаете и любите.
- [Unicorn](https://www.django-unicorn.com/) - Структура реактивных компонентов, которая постепенно улучшает нормальное представление Django, делает вызовы AJAX в фоновом режиме и динамически обновляет DOM.

### Генерал
- [django-data-browser](https://github.com/tolomea/django-data-browser) - Интерактивный, удобный для пользователя исследователь баз данных.
- [django-filter](https://github.com/carltongibson/django-filter) - Мощные фильтры на основе Django QuerySets.
- [django-sql-explorer](https://github.com/explorerhq/sql-explorer) - Обмен данными через SQL-запросы.
- [django-tables2](https://github.com/jieter/django-tables2) - HTML таблицы с пагинацией/сортировкой.
- [django-maintenance-mode](https://github.com/fabiocaccamo/django-maintenance-mode) - Показывает страницу ошибки 503, когда включен режим обслуживания.
- [django-freeze](https://github.com/fabiocaccamo/django-freeze) - Преобразуйте динамический сайт django в статический с одной строкой кода.
- [django-nh3](https://github.com/marksweb/django-nh3) - Интеграция Django с nh3 является альтернативой Django-bleach.
- [Weblate](https://github.com/WeblateOrg/weblate) - Weblate - это веб-система непрерывной локализации, используемая более чем 2500 проектами и компаниями в более чем 165 странах.
- [Django-Classy-Doc](https://github.com/nanuxbe/django-classy-doc) - Документируйте свой собственный код в стиле CCBV и CDRF.
- [iommi](https://github.com/iommirocks/iommi) - Инструментарий для разработки приложений CRUD без написания HTML или JavaScript.

### Интернационализация (i18n)
- [django-localflavor](https://github.com/django/django-localflavor) - Коллекция функций, полезных для конкретных стран или культур. Ранее он был частью ядра Django.
- [django-modeltrans](https://github.com/zostera/django-modeltrans) - Переведите поля моделей Django в JSONField.
- [django-modeltranslations](https://github.com/deschler/django-modeltranslation) -  Переводит модели Django с помощью регистрационного подхода.
- [django-rosetta](https://github.com/mbi/django-rosetta) - Rosetta предоставляет пользовательский интерфейс для чтения и написания каталогов текста вашего проекта в Django Admin.

### лесозаготовка
- [django-guid](https://github.com/snok/django-guid) - Введите GUID (Correlation-ID) в каждое сообщение журнала в запросе Django.
- [DRF-API-Logger](https://github.com/vishalanandl177/DRF-API-Logger) - API Logger для вашего проекта Django Rest Framework.
- [django-structlog](https://github.com/jrobichaud/django-structlog) - django-structlog - это структурированная интеграция для проекта Django. [structlog](https://www.structlog.org)

### Мониторинг
- [django-prometheus](https://github.com/django-commons/django-prometheus) - Экспорт метрики мониторинга Django в Прометей.
- [django-mixin](https://github.com/adinhodovic/django-mixin) - Мониторинг смеси для Джанго-прометея. Набор приборных панелей Grafana и правила Prometheus для Django.

### рассылка
- [django-pony-express](https://github.com/ambient-innovation/django-pony-express) - Классовые электронные письма, включая набор тестов для Django.
- [django-anymail](https://github.com/anymail/django-anymail) - Django email backends и webhooks для Amazon SES, Brevo (Sendinblue), MailerSend, Mailgun, Mailjet, Postmark, Postal, Resend, SendGrid, SparkPost, Unisender Go и многое другое.

### Модельные поля
- [django-colorfield](https://github.com/fabiocaccamo/django-colorfield) - Цветовое поле для моделей django с приятным виджетом цветного пикера.
- [django-model-utils](https://github.com/jazzband/django-model-utils) - Модели Django и утилиты.
- [django-phonenumber-field](https://github.com/django-phonenumber-field/django-phonenumber-field) - Поле модели/формы для нормированных телефонных номеров.
- [django-streamfield](https://github.com/raagin/django-streamfield) - Simple StreamField для простого администратора Django (на основе идеи Wagtail CMS StreamField).

### Модели
- [django-lifecycle](https://github.com/rsinger86/django-lifecycle) - Декларативная модель крючков жизненного цикла, альтернатива Сигналам.
- [django-mptt](https://github.com/django-mptt/django-mptt) - Модифицированный предзаказ поперечного дерева; работа с деревьями образцов.
- [django-taggit](https://github.com/jazzband/django-taggit/) - Простые модели.
- [django-reversion](https://github.com/etianen/django-reversion) - Контроль версий для экземпляров моделей.
- [django-simple-history](https://github.com/django-commons/django-simple-history) - Храните историю модели и просматривайте / возвращайте изменения от администратора.
- [django-polymorphic](https://github.com/django-commons/django-polymorphic) - Django-полиморфный упрощает использование унаследованных моделей в проектах Django.
- [django-recurrence](https://github.com/jazzband/django-recurrence) - Полезно для работы с повторяющимися датами в Джанго.
- [django-treenode](https://github.com/fabiocaccamo/django-treenode) - Абстрактная модель / админ для древесных материалов.
- [django-auto-prefetch](https://github.com/adamchainz/django-auto-prefetch) - Автоматически префектируйте иностранные ключевые значения по мере необходимости.

### Выступление
- [django-perf-rec](https://cur.at/GHUO6cn?m=web) - Держите подробные записи о производительности вашего кода Django.
- [New Relic](https://newrelic.com/python/django) - Промежуточное ПО времени, просмотры и SQL-запросы.
- [Scout](https://scoutapm.com/docs/python/django) - Промежуточное ПО времени, рендеринг шаблонов и SQL-запросы с автоматическим обнаружением N+1.
- [django-silk](https://github.com/jazzband/django-silk) - Профилирование и проверка HTTP-запросов и запросов к базе данных.
- [py-spy](https://github.com/benfred/py-spy) - Профилировщик для программ Python.
- [pyinstrument](https://github.com/joerick/pyinstrument) - Вызовите профайлер стека для Python, Django, Flask, FastAPI.
- [django-zeal](https://github.com/taobojlen/django-zeal) - Обнаружение запросов N+1 с помощью удобных сообщений об ошибках

### Разрешения
- [django-role-permissions](https://github.com/vintasoftware/django-role-permissions) - Приложение Django для управления ролевыми разрешениями.
- [django-guardian](https://github.com/django-guardian/django-guardian) - Разрешение на объект в Джанго.
- [django-rules](https://github.com/dfunckt/django-rules) - Крошечное, но мощное приложение, предоставляющее разрешения на уровне объектов, созданное с нуля для Django.

### Поиск
- [django-haystack](https://github.com/django-haystack/django-haystack) - Модульный поиск Джанго.
- [django-watson](https://github.com/etianen/django-watson) - Плагин полнотекстового поиска.
- [django-admin-search](https://github.com/shinneider/django-admin-search) - Модальный фильтр для администратора django.
- [django-elasticsearch-dsl](https://github.com/django-es/django-elasticsearch-dsl) - Интеграция DSL для Django.

### Поисковая оптимизация
- [django-check-seo](https://github.com/kapt-labs/django-check-seo) - Проверьте SEO страниц.

### Безопасность
- [django-csp](https://github.com/mozilla/django-csp) - Добавить [Content-Security-Policy](http://www.w3.org/TR/CSP/) Направляется в Джанго.
- [django-feature-policy](https://github.com/adamchainz/django-permissions-policy) - Установите проект заголовка безопасности HTTP `Feature-Policy` В приложении Django.
- [django-protected-media](https://github.com/cobusc/django-protected-media) - Управляет средствами массовой информации, которые считаются чувствительными в защищенном режиме.
- [DJ Checkup](https://djcheckup.com) - Проводите несколько проверок на развернутом сайте Django, чтобы проверить общие ошибки безопасности.

### Статические активы
- [django-storages](https://github.com/jschneier/django-storages) - Одна библиотека для поддержки нескольких пользовательских серверов хранения для Django.
- [django-compressor](https://github.com/django-compressor/django-compressor/) - Сжимайте JavaScript/CSS в один кэшированный файл.
- [easy-thumbnails](https://github.com/SmileyChris/easy-thumbnails) - Фотографии для Django.
- [whitenoise](https://github.com/evansd/whitenoise) - Упрощенный статический файл для веб-сайтов Python.

### Очередь задач
- [django-q2](https://github.com/django-q2/django-q2) - Многопроцессорная распределенная очередь задач для Django
- [django-rq](https://github.com/rq/django-rq) - Интеграция для Redis Queue.
- [django-redis](https://github.com/jazzband/django-redis) - Полнофункциональный бэкэнд Redis для Django.
- [celery](https://github.com/celery/celery) - Надежные и брокерско-агностические очереди задач для более крупных, ориентированных на производительность проектов.
- [flower](https://github.com/mher/flower) - Flower - это веб-инструмент для мониторинга и администрирования кластеров сельдерея.
- [django-celery-beat](https://github.com/celery/django-celery-beat) - Периодический планировщик задач с базой данных, настроенной панелью администратора Django.
- [celery-exporter](https://github.com/danihodovic/celery-exporter) - Прометей и Графана мониторинг задач сельдерея.
- [django-dramatiq](https://github.com/Bogdanp/django_dramatiq) - Библиотека обработки задач с акцентом на простоту, надежность и производительность.
- [django-celery-results](https://github.com/celery/django-celery-results) - Результат сельдерея бэкэнд с Джанго.
- [django-tasks](https://github.com/realOrangeOne/django-tasks) - Справочная реализация и репортаж фоновых работников и задач в Джанго, основанный на [DEP 14](https://www.djangoproject.com/weblog/2024/may/29/django-enhancement-proposal-14-background-workers/).
- [huey](https://github.com/coleifer/huey) - Небольшая очередь задач для Python с поддержкой Django `django.tasks` API.
- [django-ox](https://github.com/oxpull/django-ox) - Работник, поддерживаемый базой данных для структуры задач Django, с транзакционной очередью, повторными запросами, повторяющимися задачами и без брокера для запуска.
- [django-absurd](https://github.com/lincolnloop/django-absurd) - Интеграция Django для Absurd, устойчивой системы рабочего процесса Postgres.

### Шаблоны
- [django-components](https://github.com/django-components/django-components/) - Способ создания простых многоразовых компонентов шаблона в Django.
- [django-template-partials](https://github.com/carltongibson/django-template-partials/) - Многоразовые именуемые inline части для языка шаблонов Django.
- [slippers](https://mitchel.me/slippers/) - Создавайте многоразовые компоненты в Django без написания одной строки Python.
- [JinjaX](https://jinjax.scaletti.dev/) - Суперкомпоненты для ваших шаблонов Jinja.
- [django-cotton](https://django-cotton.com/) - До свидания. `{% raw %}{%{% endraw %} extends, block, include {% raw %}%}{% endraw %}`Привет. `<c-component />`Привлечение современной композиции пользовательского интерфейса в Django.
- [htpy](https://htpy.dev/) - htpy - это библиотека, которая делает написание HTML на простом Python веселым и эффективным без языка шаблонов.
- [django-suspense](https://github.com/paqstd-dev/django-suspense) - Простой способ отображения резервного копирования в шаблонах до тех пор, пока дети не закончат загрузку (например, React).

### Испытание
- [django-debug-toolbar](https://github.com/django-commons/django-debug-toolbar/) - Конфигурируемые панели для отладки запросов / ответов.
- [pytest-django](https://github.com/pytest-dev/pytest-django) - Используйте функции pytest в Django.
- [django-test-migrations](https://github.com/wemake-services/django-test-migrations) - Тестирование схемы Джанго и миграции данных, включая порядок миграции.
- [django-test-plus](https://github.com/revsys/django-test-plus/) - Полезные дополнения к Django TestCase по умолчанию.
- [factory-boy](https://github.com/FactoryBoy/factory_boy) - Замена испытательных приборов.
- [django-waffle](https://github.com/django-waffle/django-waffle) - Флиппер для Django.
- [model-bakery](https://github.com/model-bakers/model_bakery) - Объектный завод для Django (переименование унаследованного проекта Model Mommy).
- [django-fakery](https://github.com/fcurella/django-fakery) - Простая в использовании реализация методов создания Django, поддерживаемая Faker.
- [django-pattern-library](https://github.com/torchbox/django-pattern-library) - Генератор библиотеки шаблонов для шаблонов Django, чтобы помочь тестировать компоненты пользовательского интерфейса.
- [storybook-django](https://github.com/torchbox/storybook-django) - Разработайте компоненты пользовательского интерфейса Django в изоляции с помощью Storybook.

### URL
- [dj-database-url](https://github.com/jazzband/dj-database-url) - URL базы данных.
- [urlman](https://github.com/andrewgodwin/urlman) - Отличный способ сделать URL для моделей Django.
- [django-robots](https://github.com/jazzband/django-robots) - Это базовое приложение Django для управления роботами. Файлы txt следуют протоколу исключения роботов, дополняя приложение Django Sitemap contrib.
- [django-redirects](https://github.com/fabiocaccamo/django-redirects) - Перенаправляет, как должно быть, с полным контролем.

### Пользователи
- [django-allauth](https://github.com/pennersr/django-allauth/) - Улучшенная регистрация пользователей, включая социальную защиту.
- [django-allauth-ui](https://github.com/danihodovic/django-allauth-ui/) - Более красивые шаблоны для django-allauth.
- [django-improved-user](https://github.com/jambonrose/django-improved-user) - Пользователь Django, который проверяет подлинность по электронной почте. Следует лучшим практикам идентификации и аутентификации.
- [django-organizations](https://github.com/bennylope/django-organizations/) - Многопользовательский учет проектов Django.
- [django-cas-ng](https://github.com/django-cas-ng/django-cas-ng) - Django-cas-ng - это клиентская библиотека Django CAS (Central Authentication Service) 1.0/2.0/3.0 для поддержки SSO (Single Sign On) и Single Logout (SLO).
- [django-guest-user](https://github.com/julianwachholz/django-guest-user) - Позвольте посетителям использовать ваш сайт как обычного пользователя и зарегистрироваться позже.

### Посмотреть
- [django-braces](https://github.com/brack3t/django-braces) - Многоразовые, непатентованные смеси.
- [django-easy-audit](https://github.com/soynatan/django-easy-audit) - Следите за действиями пользователей.
- [django-extra-views](https://github.com/AndrewIngram/django-extra-views) - Дополнительные классовые общие взгляды.
- [django-stronghold](https://github.com/mgrouchy/django-stronghold) - Делает все ваши просмотры Django по умолчанию_требуется.
- [neapolitan](https://github.com/carltongibson/neapolitan) - Быстрый просмотр CRUD для Django.

## Инструменты для разработчиков

Отдельные инструменты, которые помогают в разработке проектов Django.

### Шаблоны
- [curlylint](https://www.curlylint.org/) - Экспериментальные шаблоны HTML для Jinja, Nunjucks, Django, Twig, Liquid.
- [djhtml](https://github.com/rtts/djhtml) - Шаблон Django/Jinja.
- [djlint](https://www.djlint.com/) - Lint & Format HTML Шаблоны.

### Статический анализ
- [django-orm-lens](https://github.com/FROWNINGdev/django-orm-lens) - Статический анализ на уровне модели: диаграммы ER, обнаружение N+1, дрейф схемы и радиус взрыва в CI без базы данных или загрузки Django.

## Пакеты Python

_Краткий список пакетов Python, которые хорошо работают с Django._

- [black](https://github.com/psf/black) - Бескомпромиссный формататор кода Python.
- [coveragepy](https://github.com/coveragepy/coveragepy) - Измерение охвата кодом.
- [faker](https://github.com/joke2k/faker) - Faker - это пакет Python, который генерирует поддельные данные для вас.
- [pillow](https://github.com/python-pillow/Pillow) - Библиотека изображений Python.
- [pytest](https://github.com/pytest-dev/pytest/) - Основы тестирования.
- [python-decouple](https://github.com/HBNetwork/python-decouple) - Строгое отделение настроек от кода.
- [python-slugify](https://github.com/un33k/python-slugify) - Возвращает слизняков.
- [sentry-python](https://github.com/getsentry/sentry-python) - Ошибка SDK.
- [python-socketio](https://github.com/miguelgrinberg/python-socketio) - Реализация Python Socket. Ио_ Клиент и сервер в реальном времени. [(create Socket.io Django server instance)](https://python-socketio.readthedocs.io/en/latest/server.html?highlight=django#creating-a-server-instance)
- [Ruff](https://github.com/astral-sh/ruff) - Чрезвычайно быстрый скрипт Python и форматировщик кода, написанный на Rust.

## ресурсы

### Официальные ресурсы
<!--lint ignore double-link-->
- [Project Website](https://www.djangoproject.com/) - Официальный сайт Django.
- [Documentation](https://docs.djangoproject.com/en/dev/) - Документация для всех версий Django.
- [Polls Tutorial](https://docs.djangoproject.com/en/dev/intro/tutorial01/) - Создайте учебник по опросам, изучая внутренние данные Django.
- [Source Code](https://github.com/django/django/) - Размещено на GitHub.

### образовательный
- [Django Girls Tutorial](https://tutorial.djangogirls.org/en/) - Используйте представления на основе функций для создания приложения для блога.
- [LearnDjango](https://learndjango.com/) - Премиальные курсы по Django и Django REST Framework.
- [Adam Johnson](https://adamj.eu/tech/) - Адам входит в технический совет Django и регулярно пишет учебники.
- [Photon Designer - Django tutorials](https://photondesigner.com/articles) - Инструкции Тома Декана о том, как создавать приложения Django - Как создать мессенджер с помощью Django, добавьте мгновенный поиск, используя Google Drive в качестве базы данных. Регулярно обновляется.
- [TestDriven](https://testdriven.io/blog/) - Несколько учебных пособий по Django по таким темам, как Docker, платежи и многое другое.
- [Classy Class-Based Views](https://ccbv.co.uk/) - Подробное описание методов/свойств/атрибутов для каждого общего классового представления.
- [Classy Django REST Framework](http://www.cdrf.co) - Подробные описания с методами/атрибутами для просмотра на основе классов DRF и сериализаторов.
- [Simple is Better than Complex](https://simpleisbetterthancomplex.com/) - Регулярно обновляемый сайт со множеством учебных пособий и советов по Django.
- [Full Stack Python's Django Page](https://www.fullstackpython.com/django.html) - Объяснение философии Django и ссылки на другие ресурсы и учебные пособия.
- [RealPython](https://realpython.com/tutorials/django/) - Многие высококачественные учебники по Джанго.
- [Mozilla Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django) - Создайте приложение для библиотеки кредитования.
- [Matt Layman](https://www.mattlayman.com) - Регулярные учебники и глубокие дайвы по темам Джанго.
- [Django Styleguide](https://github.com/HackSoftware/Django-Styleguide) - Styleguide для Django с лучшими практиками и примерами.
- [Django Template Tags and Filters](https://www.djangotemplatetagsandfilters.com/) - Дополнительные документы на 57 встроенных шаблонных фильтров Django и 27 шаблонных тегов.
- [Django for Everybody](https://www.dj4e.com/) - Полный курс для начинающих вебдевов, ориентированных на Django.
- [CS50W](https://cs50.harvard.edu/web/2020/) - Вводный курс Гарвардского университета по веб-разработке объясняет Django как бэкэнд-фреймворк.
- [Better Simple](https://www.better-simple.com/blog/django/) - Статьи Тима Шиллинга о разработке Django, лучших практиках и экосистеме Django.

### сообщество
<!--lint disable double-link-->
- [Django Forum](https://forum.djangoproject.com/) - Официальный совет по дискурсу.
- [Community Page](https://www.djangoproject.com/community/) - Ссылки на сообщения в блогах сообщества, рабочие места и многое другое.
- [Local Django Communities Page](https://www.djangoproject.com/community/local/) - С местными событиями по всему миру.
- [Django Users Google Group](https://groups.google.com/forum/#!forum/django-users/) - Очень активный дискуссионный форум по вопросам/ответам.
- [Developers Google Group](https://groups.google.com/forum/#!forum/django-developers/) - Только за вклад в сам Django.
- [Mastodon](https://fosstodon.org/@django) - Для официальных объявлений об обновлениях, исправлениях безопасности и т.д.
- [X (formerly Twitter)](https://x.com/djangoproject/) - Для официальных объявлений об обновлениях, исправлениях безопасности и т.д.
- [Discord Server](https://discord.com/invite/xcRH6mN4fa) - Django Discord Community.
- Канал IRC - Чат с другими пользователями Django по адресу irc://irc.freenode.net/django.
- [Djangonaut Space](https://djangonaut.space) - Бесплатная программа наставничества для сообщества Django для запуска людей во вселенную вкладов с открытым исходным кодом.
<!--lint enable double-link-->

### Конференции

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

### Советы по работе

- [Django Job Board](https://djangojobboard.com/) - Совет по работе Django, который также объединяет другие советы по работе. Ранее работал в Django News.
- [Django Jobs](https://djangojobs.net) - Django нанимает разработчиков Django Python.
- [Python.org Job Boards](https://www.python.org/jobs/) - Хотя эта доска объявлений не предназначена исключительно для Django, она размещена на официальном веб-сайте Python и имеет ряд возможностей для работы на Python и Django.

### Бюллетени

- [Django News](https://django-news.com) - Еженедельный информационный бюллетень о объявлениях, статьях, проектах и переговорах.

### Подкасты

- [Django Chat](https://djangochat.com/) - Еженедельный подкаст от William Vincent и Django Fellow Carlton Gibson с обсуждением основных концепций Django и постоянными гостями.
- [Django Brew](https://djangobrew.com/) - Веселый подкаст с кофеином о веб-фреймворке Django от Adam Hill и Sangeeta Jadoonanan.
- [TalkPython](https://talkpython.fm/) - Ведущий подкаст на Python с эпизодами на Django.
- [Running in Production](https://runninginproduction.com/tags/django) - Больше не активен, но большое количество эпизодов на Django.

### Видео

- [DjangoTV](https://djangotv.com) - Ваш источник для видео конференции Django и учебных пособий.
- [PyVideo](https://pyvideo.org) - PyVideo - это индекс медиа, связанных с Python.

### Книги
Для полного списка печатных книг, проверьте [DjangoBook.com](https://djangobook.com/).

_Джанго 5_
- [Django for APIs, Fifth Edition](https://learndjango.com/courses/django-for-apis/)
- [Boost Your Django DX](https://adamchainz.gumroad.com/l/byddx)
- [Django 5 By Example](https://www.packtpub.com/en-us/product/django-5-by-example-9781805125457)
- [Django in Action](https://www.manning.com/books/django-in-action)
- [Django for Beginners, Fifth Edition](https://learndjango.com/courses/django-for-beginners/)

## Хостинг

### PaaS (платформы как услуга)
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

### IaaS (инфраструктура как услуга)
- [Digital Ocean](https://www.digitalocean.com)
- [Linode](https://www.linode.com)
- [Amazon Lightsail](https://aws.amazon.com/lightsail/)
- [Hetzner](https://www.hetzner.com)

### Услуги по развертыванию
_Хостинговые сервисы, которые развертывают ваше приложение на серверах, которые вы арендуете в другом месте._
- [Appliku](https://appliku.com) - Сервис развертывания Django для серверов на DigitalOcean, Hetzner, AWS и Linode.
- [DeployHQ](https://www.deployhq.com) - Развертывается от Git до ваших серверов через SSH, SFTP или S3 с шагами сборки и откатами.

### Самостоятельное развертывание
_Инструменты с открытым исходным кодом, которые развертывают ваше приложение на собственных серверах._
- [Coolify](https://coolify.io) - Самостоятельно размещенная PaaS с веб-интерфейсом для приложений и баз данных Docker, с дополнительной платной плоскостью управления облаком.
- [Dokploy](https://dokploy.com) - Самостоятельный PaaS с веб-интерфейсом, построенный на Docker и Traefik, с дополнительной платной плоскостью управления облаком.
- [CapRover](https://caprover.com) - Самостоятельный PaaS с веб-интерфейсом и приложениями с одним щелчком мыши, построенными на Docker Swarm.
- [Kamal](https://kamal-deploy.org) - Развернуть контейнеры на любой сервер через SSH с нулевым временем простоя, от Basecamp.
- [Dokku](https://dokku.com) - Docker-powered PaaS с развертыванием git push в стиле Heroku.
- [Piku](https://github.com/piku/piku) - Крошечный PaaS в стиле Heroku для git push развертывается на одном сервере.

## Проекты

### Бойлерплант
- [cookiecutter-django](https://github.com/cookiecutter/cookiecutter-django/) - Полнофункциональный стартовый проект, очень настраиваемый.
- [django-base-site](https://github.com/epicserve/django-base-site/) - Сайт Django со многими распространенными сторонними пакетами, предварительно установленными.
- [djangox](https://github.com/wsvincent/lithium/) - Аккумуляторы включали стартовый проект для Pip, Pipenv или Docker.
- [django-docker-template](https://github.com/amerkurev/django-docker-template) - Dockerized Django с Postgres, Gunicorn и Traefik (с автообновлением Let’s Encrypt)
- [django-startproject](https://github.com/jefftriplett/django-startproject) - Django запускает шаблон проекта с помощью батарей.
- [wemake-django-template](https://github.com/wemake-services/wemake-django-template/) - Шаблон Bleeding-edge Django ориентирован на качество и безопасность кода.
- [cookiecutter-vue-django](https://github.com/ilikerobots/cookiecutter-vue-django) - Джанго + Проект Vue Starter объединяет Vue SFC и Django Templates.
- [sidewinder](https://github.com/stribny/sidewinder/) - Стартовый комплект Django, который фокусируется на хороших по умолчанию, опыте разработчиков и развертывании.
- [Falco](https://github.com/falcopackages/falco-cli) - Расширьте свой опыт разработчиков Django: CLI и руководства для современного разработчика Django.
- [BH2](https://codeberg.org/trey/bh2) - Запуск нового сайта Django в Djiffy
- [django-react-boilerplate](https://github.com/vintasoftware/django-react-boilerplate) - A Django, React, Tailwind, проект Webpack

### Open Source проекты
- [Blog app with users and forms](https://github.com/wsvincent/djangoforbeginners/tree/master/ch7-blog-app-with-users/)
- [Newspaper app with custom user model, full user auth](https://github.com/wsvincent/djangoforbeginners/tree/master/ch15-comments)
- [Behavior-Driven Development with Aloe](https://github.com/testdrivenio/django-aloe-bdd/)
- [Image Sharing Blog](https://github.com/MeNsaaH/soMedia)
- [Bootcamp: An enterprise social network](https://github.com/vitorfs/bootcamp)
- [Zulip](https://github.com/zulip/zulip/) - Чат с открытым исходным кодом.
- [django-job-portal](https://github.com/manjurulhoque/django-job-portal) - Портал вакансий с использованием Django.
- [Built with Django](https://builtwithdjango.com) - Список удивительных проектов Django.
- [PostHog](https://github.com/PostHog/posthog) - Аналитика продуктов с открытым исходным кодом.
- [HyperKitty](https://gitlab.com/mailman/hyperkitty) - Веб-интерфейс для доступа к архивам GNU Mailman v3.
- [Healthchecks](https://github.com/healthchecks/healthchecks) - Инструмент мониторинга Cron, написанный на Python и Django.
- [Flagsmith](https://github.com/Flagsmith/flagsmith) - Флагирование функций с открытым исходным кодом, удаленная конфигурация и тестирование AB.
- [OpenContracts](https://github.com/Open-Source-Legal/OpenContracts) - Аналитическая платформа корпоративного уровня, которая сочетает в себе автоматизированный анализ PDF, векторные встраивания и интеграцию LLM.
- [Baserow](https://github.com/baserow/baserow) - Открытая база данных без кода и альтернатива Airtable, созданная с помощью Django и Vue.js.
- [Django CRM Admin](https://github.com/DjangoCRM/django-crm) - Python CRM с открытым исходным кодом полностью построен на Django Admin Site.
- [linkding](https://github.com/sissbruecker/linkding) - Автономный менеджер закладок, который предназначен для минимальной, быстрой и простой настройки с помощью Docker.
- [pythonic-news](https://github.com/sebst/pythonic-news) - Клон Hacker News.
- [Revel](https://github.com/letsrevel/revel-backend) - Самостоятельное управление событиями и билетная платформа с организациями, скрининг участников на основе анкет, регистрация QR и платежи Stripe.
- [venueless](https://github.com/venueless/venueless) - Платформа для онлайн и гибридных событий с живыми трансляциями, чатом и видеозалами от команды Pretix.
- [pretix](https://github.com/pretix/pretix) - Приложение магазина билетов для конференций, фестивалей, концертов и других мероприятий.
- [pretalx](https://github.com/pretalx/pretalx) - Инструмент планирования конференций для призыва к представлению документов, составлению расписания и организации выступлений ораторов.
- [ioe](https://github.com/zhtyyx/ioe) - Самостоятельное управление розничным магазином с инвентарем, кассой продаж и учетными записями участников.

## Джанго Рест Рамочная основа

_Самый популярный способ создания веб-API с помощью Django._

### Ресурсы DRF

<!--lint disable double-link-->
- [Official Documentation](https://www.django-rest-framework.org/)
- [DRF Source Code](https://github.com/encode/django-rest-framework)
- [awesome-django-rest-framework](https://github.com/nioperas06/awesome-django-rest-framework)
<!--lint enable double-link-->

### Учебники DRF

<!--lint ignore double-link-->
- [Official REST Framework - A Beginner's Guide](https://learndjango.com/tutorials/official-django-rest-framework-tutorial-beginners)
- [Building APIs with Django and DRF](https://books.agiliq.com/projects/django-api-polls-tutorial/en/latest/)
- [DRF with React](https://www.valentinog.com/blog/drf/)
- [Making React and Django play well together](https://fractalideas.com/blog/making-react-and-django-play-well-together/)

## Вагтейл

_Wagtail - мощная CMS для современных веб-сайтов._

### Ресурсы Wagtail
<!--lint disable double-link-->
- [Official website](https://wagtail.org/)
- [Developer documentation](https://docs.wagtail.org/en/stable/)
- [User documentation](https://guide.wagtail.org/en-latest/)
- [Wagtail Source Code](https://github.com/wagtail/wagtail/)
- [awesome-wagtail](https://github.com/wagtail/awesome-wagtail)
- [This week in Wagtail](https://wagtail.org/this-week-in-wagtail/) - (Большинство) еженедельных писем с обновлениями от основной команды Wagtail.
- [Wagtail Space](https://www.wagtail.space/) - Вагтейл конференции по всему миру.
- [Wagtail events](https://wagtail.org/events/) - Онлайн и личные мероприятия Wagtail.
<!--lint enable double-link-->

Удобный способ просмотра и поиска репозиториев из этого списка доступен по адресу: [awesome.lvtd.dev/lists/awesome-django](https://awesome.lvtd.dev/lists/awesome-django/).
