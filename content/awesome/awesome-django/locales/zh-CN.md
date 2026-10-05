# 厉害的强哥 [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> 和Django有关的东西 维护者 [Will Vincent](https://github.com/wsvincent) 和 [Jeff Triplett](https://github.com/jefftriplett).

<br>

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/django-logo-negative.svg">
  <img alt="Dark and Light mode version of the Django logo" src="./assets/django-logo-positive.svg">
</picture>
</div>

<br>

请考虑通过向Django提供捐款支持他。 <a rel="sponsored" href="https://www.djangoproject.com/fundraising/">Django软件基金会</a>,
通过 <a rel="sponsored" href="https://github.com/sponsors/django">GitHub 赞助商</a>,
或购买 <a rel="sponsored" href="https://django.threadless.com/">官方商品</a>.

## 目录

<!--lint disable awesome-toc-->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [第三方一揽子计划](#third-party-packages)
  - [管理员](#admin)
  - [管理主题](#admin-themes)
  - [APIs 图像](#apis)
  - [自动同步](#async)
  - [缓存](#caching)
  - [图标](#commands)
  - [配置](#configuration)
  - [内容管理系统](#content-management-systems)
  - [数据库连接器](#database-connectors)
  - [依赖性注射](#dependency-injection)
  - [电子商务](#ecommerce)
  - [编辑器](#editors)
  - [文件/图像](#filesimages)
  - [表单](#forms)
  - [全面框架](#full-stack-frameworks)
  - [常规](#general)
  - [国际化(i18n)](#internationalisation-i18n)
  - [日志](#logging)
  - [监测](#monitoring)
  - [邮寄](#mailing)
  - [模型字段](#model-fields)
  - [模型](#models)
  - [业绩](#performance)
  - [权限](#permissions)
  - [搜索](#search)
  - [搜索引擎优化](#search-engine-optimisation)
  - [警卫](#security)
  - [静态资产](#static-assets)
  - [任务队列](#task-queues)
  - [模板](#templates)
  - [测试](#testing)
  - [URL( URL)](#urls)
  - [用户](#users)
  - [视图](#views)
- [开发者工具](#developer-tools)
  - [模板](#templates-1)
  - [静态分析](#static-analysis)
- [Python 软件包](#python-packages)
- [资源](#resources)
  - [官方资源](#official-resources)
  - [学历](#educational)
  - [社区](#community)
  - [会议](#conferences)
  - [工作委员会](#job-boards)
  - [通讯](#newsletters)
  - [播音员](#podcasts)
  - [视频](#videos)
  - [书籍](#books)
- [托管](#hosting)
  - [PaaS(服务格式)](#paas-platforms-as-a-service)
  - [IaaS(基础设施服务)](#iaas-infrastructure-as-a-service)
  - [部署事务](#deployment-services)
  - [自行部署](#self-hosted-deployment)
- [项目](#projects)
  - [沸腾](#boilerplate)
  - [开源项目](#open-source-projects)
- [贾戈·雷斯特 框架](#django-rest-framework)
  - [资源](#drf-resources)
  - [DRF 教学](#drf-tutorials)
- [长尾](#wagtail)
  - [瓦格尾矿资源](#wagtail-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!--lint enable awesome-toc-->

## 第三方一揽子计划

_所有可用软件包的完整清单见 [Django Packages](https://djangopackages.org/)_

### 管理员
- [django-hijack](https://github.com/django-hijack/django-hijack) - 管理员可以登录并代表其他用户工作,而无需了解其全权证书.
- [django-import-export](https://github.com/django-import-export/django-import-export) - Django应用程序和库,用于与管理员整合导入和输出数据。
- [django-admin-inline-paginator-plus](https://github.com/DmytroLitvinov/django-admin-inline-paginator-plus) - 简而言之,在Django admin将你的内线化
- [django-loginas](https://github.com/skorokithakis/django-loginas) - "Log in as user"为强哥行政官.
- [impostor](https://github.com/avallbona/Impostor) - Impostor是一个Django应用程序,允许工作人员使用自己的用户名和密码作为不同的用户登录。
- [django-impersonate](https://pypi.org/project/django-impersonate/) - 允许超级用户“冒充”其他非超级用户账户。
- [django-admin-env-notice](https://github.com/dizballanze/django-admin-env-notice) - 在Django Admin可视地区分环境,例如: `development`, `staging`, `production`.
- [django-related-admin](https://github.com/PetrDlouhy/django-related-admin) - 允许您撰写列表的助手库_显示跨外国关键关系。
- [django-admin-sortable2](https://github.com/jrief/django-admin-sortable2) - Django 管理界面中对象的普通拖放命令 。
- [django-admin-collaborator](https://github.com/brktrlw/django-admin-collaborator) - 添加实时用户存在,编辑锁定,并与Channels和Redis聊天给Django admin.
- [dj-control-room](https://github.com/django-control-room/dj-control-room) - 在Django admin(Redis,缓存, Celery, URLs, 以及更多)内部构建一个带有一套操作工具的控制平面.
- [django-admin-mcp](https://github.com/7tg/django-admin-mcp) - 向 MCP 客户端( 类似 Claude 的AI 助手) 公开管理员注册的模型: CRUD,管理员动作, 和历史通过您的 ModelAdmin 类, 由 Django 权限封顶 。

### 管理主题
- [django-grappelli](https://github.com/sehmaschine/django-grappelli) - 一个爵士的皮肤给管理员。
- [django-jazzmin](https://github.com/farridav/django-jazzmin) - django 管理员的 Django 主题, 即使用 AdminLTE 3 & Bootstrap 4 来让 Yo' 管理员看起来充满爵士气 。
- [django-admin-interface](https://github.com/fabiocaccamo/django-admin-interface) - 由管理员自定义管理员( 颜色, 页眉) 。 标题,logo)和弹出窗口替换为模式。
- [django-semantic-admin](https://github.com/globophobe/django-semantic-admin) - Django语义类UI管理主题
- [django-jet-reboot](https://github.com/assem-ch/django-jet-reboot) - Django Jet是Django admin接口的现代模板,功能得到改进.
- [django-baton](https://github.com/otto-torino/django-baton) - 一个基于靴子5的很酷、现代和反应灵敏的Django管理应用程序。
- [django-unfold](https://github.com/unfoldadmin/django-unfold) - 现代Django admin主题 无缝接口开发.
- [django-daisy](https://github.com/hypy13/django-daisy) - 一个现代的django仪表板 完全响应 与菊树。
- [django-smartbase-admin](https://github.com/SmartBase-SK/django-smartbase-admin) - Django SmartBase Admin 性能调试 最终用户准备好美丽的Admin面板

### APIs 图像
<!--lint disable double-link-->
- [django-rest-framework](https://github.com/encode/django-rest-framework) - 央广网API.
- [django-cors-headers](https://github.com/adamchainz/django-cors-headers) - 如果你的后端和前端在不同的服务器上,你需要这个.
- [dj-rest-auth](https://github.com/iMerica/dj-rest-auth) - Django休息框架认证。
- [django-rest-knox](https://github.com/jazzband/django-rest-knox) - django-rest-auth 认证模块 。
- [djoser](https://github.com/sunscrapers/djoser) - REST 实施Django aut。
- [djaq](https://github.com/paul-wolf/djaq) - 具有强大查询语言的即时远程API到Django模型.
- [django-rest-framework-simplejwt](https://github.com/jazzband/djangorestframework-simplejwt) - JSON网络代号为DRF.
- [django-webpack-loader](https://github.com/django-webpack/django-webpack-loader) - 透明地使用与强哥的网络包装.
- [drf-yasg](https://github.com/axnsan12/drf-yasg) - 从Django REST框架代码自动生成真正的Swagger/OpenAPI 2.0 schemas.
- [graphene-django](https://github.com/graphql-python/graphene-django) - 强哥的图QL
- [graphene-django-filter](https://github.com/devind-team/graphene-django-filter) - 在 GraphQL 为 Django 执行和(或)不执行操作的高级过滤器。
- [django-modern-rest](https://github.com/wemake-services/django-modern-rest) - 具有速度、类型、合成、 `msgspec`, `pydantic` 还有别的好东西!
- [django-ninja](https://django-ninja.rest-framework.com/) - 强哥忍者 - Fast Django REST框架基于类型说明.
- [django-tastypie](https://github.com/django-tastypie/django-tastypie) - 2010年起为Django应用程序创建美味的API.
- [drf-spectacular](https://github.com/tfranzel/drf-spectacular) - 为Django REST框架提供Sane和灵活的OpenAPI 3计划生成.
- [django-webhook](https://github.com/danihodovic/django-webhook) - 一个插件和游戏 Django 应用程序,用于发送输出的关于模型变化的 Webhooks.
- [strawberry-django](https://github.com/strawberry-graphql/strawberry-django) - Django与Strawberry的融合,一个为现代发展设计的GraphQL图书馆
<!--lint enable double-link-->

### 自动同步
- [channels](https://github.com/django/channels/) - 阿辛克支持强哥.

### 缓存
- [django-cachalot](https://github.com/noripyt/django-cachalot) - 检查您的 Django ORM 查询并自动失效 。
- [django-cacheops](https://github.com/Suor/django-cacheops) - 一个带有自动颗粒事件驱动的浮选 ORM 缓存无效 。

### 图标
- [django-extensions](https://github.com/django-extensions/django-extensions/) - 自定义管理扩展, 特别是 `runserver_plus` 和 `shell_plus`.
- [django-click](https://github.com/django-commons/django-click) - 使用 [click CLI library](https://click.palletsprojects.com).
- [django-dbbackup](https://github.com/Archmonger/django-dbbackup) - 管理命令可以帮助备份和恢复您的项目数据库和媒体文件.
- [django-liquidb](https://github.com/Gusakovskiy/django-liquidb) - Django应用简化移民管理和db计划状态的变化.
- [django-migration-zero](https://github.com/ambient-innovation/django-migration-zero/) - 全面实施Django的"移民零"模式,覆盖本地变化和生产内部数据库调整.
- [django-typer](https://github.com/django-commons/django-typer) - 使用 [Typer CLI library](https://typer.tiangolo.com).

### 配置
<!--lint disable double-link-->
- [confidential](https://github.com/candidco/confidential) - 管理配置和秘密(有CLI支持).
- [django-environ](https://github.com/joke2k/django-environ) - 环境变量。
- [django-split-settings](https://github.com/wemake-services/django-split-settings) - 组织多个设置文件.
- [django-constance](https://github.com/jazzband/django-constance) - 一个用于在可插件后端存储动态设置的Django应用程序(Redis和Django模型后端构建),并与Django admin应用程序集成.
- [django-configurations](https://github.com/jazzband/django-configurations) - 依靠 Python 类的可调和性和遵循 [the twelve-factor app](https://12factor.net/config).
- [dynaconf](https://www.dynaconf.com/django/) - Dynaconf 从多个来源( 多重文件格式、 env vars、 redis、 保险库等) 装入 django 设置, 管理机密, 并允许以下所有不同的合并策略 [the twelve-factor app](https://12factor.net/config).
- [django-extra-settings](https://github.com/fabiocaccamo/django-extra-settings) - 使用 django 管理员配置并管理已输入的额外设置 。
- [django-removals](https://github.com/ambient-innovation/django-removals/) - 通过方便的系统检查检测已贬值的设置变量
- [environs](https://github.com/sloria/environs) - 附带一个 [Django helper](https://github.com/sloria/environs#usage-with-django) 安装额外的软件包。
<!--lint enable double-link-->
- [django-classy-settings](https://github.com/funkybob/django-classy-settings) - 基于类的设置可以保持环境的秩序,并且可以方便地访问输入的环境变量.
- [django-content-settings](https://github.com/occipital/django-content-settings) - 从Django admin 面板直接创建和管理可编辑的变量。

### 内容管理系统
<!--lint disable double-link-->
- [wagtail](https://github.com/wagtail/wagtail) - 大众Django内容管理系统(CMS). 见 [awesome-wagtail](https://github.com/wagtail/awesome-wagtail) 我也一样。
- [mezzanine](https://github.com/stephenmcd/mezzanine) - CMS框架.
- [django-cms](https://github.com/django-cms/django-cms) - (原始内容存档于2017-09-26). CMS for Django.
- [feincms](https://github.com/feincms/feincms) - 一个可扩展的DjangoCMS。
- [puput](https://github.com/APSL/puput) - 博客应用功能与Wagtail.
<!--lint enable double-link-->

### 数据库连接器
- [djongo](https://github.com/doableware/djongo) - Django和MongoDB数据库连接器。

### 依赖性注射
- [Wireup](https://github.com/maldoinc/wireup) - Django的依赖性注射

### 电子商务
- [saleor](https://github.com/saleor/saleor) - 基于GraphQL的Django电子商务平台.
- [django-oscar](https://github.com/django-oscar/django-oscar) - Django的域驱动电子商务.

### 编辑器
<!--lint ignore awesome-list-item-->
- [django-markdownx](https://github.com/neutronX/django-markdownx) - 为Django建造的综合Markdown插件.
- [django-markdown-editor](https://github.com/agusmakmun/django-markdown-editor) - 真棒 Django Markdown 编辑器, 支持 Bootstrap & Semantic-UI 。
- [django-business-logic](https://github.com/dgk/django-business-logic) - Django的视觉DSL框架.
- [django-summernote](https://github.com/lqez/django-summernote) - Summernote是一个简单的WYSIWYG编辑器.
- [django-tinymce](https://github.com/jazzband/django-tinymce) - TinyMCE为Django整合.
- [django-prose](https://github.com/withlogicco/django-prose) - 用于内容创建的轻量级编辑器.
- [django-ace](https://github.com/django-ace/django-ace) - ACE为Django整合.

### 文件/图像
- [django-cleanup](https://github.com/un1t/django-cleanup) - 0配置文件/图像删除本地和远程文件.
- [django-imagekit](https://github.com/matthewwithanm/django-imagekit) - Django应用用于处理缩略图,黑白和大小图像.
- [django-pictures](https://github.com/codingjoe/django-pictures) - 使用AVIF和WebP等现代代码的响应交叉浏览器图像库.
- [sorl-thumbnail](https://github.com/jazzband/sorl-thumbnail) - 指甲为强哥.

### 表单
- [django-crispy-forms](https://github.com/django-crispy-forms/django-crispy-forms/) - DRY DJAGO的形态。
- [django-floppyforms](https://github.com/jazzband/django-floppyforms) - 完全控制形态渲染.
- [django-formtools](https://github.com/jazzband/django-formtools) - 就形式而言,以前和多步骤的形式,以前是Django的一部分,直到1.8。
- [django-widget-tweaks](https://github.com/jazzband/django-widget-tweaks) - Tweak 在模板中形成字段渲染.
- [django-autocomplete-light](https://github.com/yourlabs/django-autocomplete-light) - 在窗体中添加自动补全 。

### 全面框架
- [Django LiveView](https://github.com/Django-LiveView/liveview) - 与 Django 模板创建动态、被动界面的框架。 通过基于装饰器的WebSocket实时更新.
- [Django-Bridge](https://github.com/kaedroho/django-bridge) - 为Django应用程序构建 React 前端的简单方法.
- [ReactPy](https://github.com/reactive-python/reactpy) - 复作是念但于彼菩萨. 使用 [ReactPy-Django module](https://github.com/reactive-python/reactpy-django).
- [Reactor](https://github.com/edelvalle/reactor/) - 凤凰直播View,但为Django.
- [Sockpuppet](https://sockpuppet.argpar.se/) - 用你已经知道和爱的Django工具构建反应性应用程序.
- [Unicorn](https://www.django-unicorn.com/) - 反应性组件框架逐步增强Django的正常观点,使AJAX在背景中调用,并动态更新DOM.

### 常规
- [django-data-browser](https://github.com/tolomea/django-data-browser) - 交互式,方便用户的数据库探索者.
- [django-filter](https://github.com/carltongibson/django-filter) - 基于Django QuerySets的强大过滤器.
- [django-sql-explorer](https://github.com/explorerhq/sql-explorer) - 通过 SQL 查询共享数据 。
- [django-tables2](https://github.com/jieter/django-tables2) - HTML 表格带有页码/排序。
- [django-maintenance-mode](https://github.com/fabiocaccamo/django-maintenance-mode) - 打开维护模式时显示一个 503 错误页 。
- [django-freeze](https://github.com/fabiocaccamo/django-freeze) - 将您的动态 django 站点转换为带有一行代码的静态站点 。
- [django-nh3](https://github.com/marksweb/django-nh3) - Django与nh3融合,是django-bleach的替代品.
- [Weblate](https://github.com/WeblateOrg/weblate) - Weblate是一个复制左翼自由软件网络连续本地化系统,超过165个国家的2500个自由项目和公司使用.
- [Django-Classy-Doc](https://github.com/nanuxbe/django-classy-doc) - 以 CCBV 和 CDRF 的风格记录自己的代码 。
- [iommi](https://github.com/iommirocks/iommi) - 用于开发CRUD应用程序的工具包,不写HTML或JavaScript.

### 国际化(i18n)
- [django-localflavor](https://github.com/django/django-localflavor) - 一套对特定国家或文化有用的功能。 以前是强哥核心的一部分
- [django-modeltrans](https://github.com/zostera/django-modeltrans) - 在JSON场翻译 Django模型场。
- [django-modeltranslations](https://github.com/deschler/django-modeltranslation) -  采用登记办法翻译Django模型。
- [django-rosetta](https://github.com/mbi/django-rosetta) - 罗塞塔提供UI来读写你的项目的Getext目录 在Django Admin。

### 日志
- [django-guid](https://github.com/snok/django-guid) - 在 Django 请求中将 GUID( 校对- ID) 输入到每个日志消息中 。
- [DRF-API-Logger](https://github.com/vishalanandl177/DRF-API-Logger) - 一个API Logger 为您的 Django 休息框架项目。
- [django-structlog](https://github.com/jrobichaud/django-structlog) - django-structlog是Django项目的一个结构化伐木集成,使用 [structlog](https://www.structlog.org)

### 监测
- [django-prometheus](https://github.com/django-commons/django-prometheus) - 向普罗米修斯出口Django监测指标。
- [django-mixin](https://github.com/adinhodovic/django-mixin) - 监测混血儿 强哥 -普罗米修斯 一套Grafana仪表板和普罗米修斯规则为Django.

### 邮寄
- [django-pony-express](https://github.com/ambient-innovation/django-pony-express) - 基于阶级的电子邮件,包括Django的测试套件.
- [django-anymail](https://github.com/anymail/django-anymail) - Django为亚马逊SES,Brevo(Sendinblue),MailerSend,Mailgun,Mailjet,Postmark,邮政,Resend,SendGrid,SparkPost,Unisender Go等提供电子邮件后端和webhooks.

### 模型字段
- [django-colorfield](https://github.com/fabiocaccamo/django-colorfield) - django 模型的颜色字段, 带有漂亮的选色器部件 。
- [django-model-utils](https://github.com/jazzband/django-model-utils) - Django模式混合和公用事业。
- [django-phonenumber-field](https://github.com/django-phonenumber-field/django-phonenumber-field) - 普通电话号码的模型/格式字段。
- [django-streamfield](https://github.com/raagin/django-streamfield) - 简单Sream Field for plain Django admin(基于 Wagtail CMS Stream Field 想法).

### 模型
- [django-lifecycle](https://github.com/rsinger86/django-lifecycle) - 宣化模型生命周期钩,是信号的替代品.
- [django-mptt](https://github.com/django-mptt/django-mptt) - 修改前序树 Traversal; 与模型实例的树合作 。
- [django-taggit](https://github.com/jazzband/django-taggit/) - 简单的型号标签。
- [django-reversion](https://github.com/etianen/django-reversion) - 模型实例的版本控制 。
- [django-simple-history](https://github.com/django-commons/django-simple-history) - 从管理员存储模型历史和视图/反转更改 。
- [django-polymorphic](https://github.com/django-commons/django-polymorphic) - Django-polymorphic在Django项目中采用继承模型简化。
- [django-recurrence](https://github.com/jazzband/django-recurrence) - 利用在Django反复出现的日期开展工作。
- [django-treenode](https://github.com/fabiocaccamo/django-treenode) - 基于树的东西的抽象模型/admin.
- [django-auto-prefetch](https://github.com/adamchainz/django-auto-prefetch) - 根据需要自动预选外国密钥值 。

### 业绩
- [django-perf-rec](https://cur.at/GHUO6cn?m=web) - 详细记录你Django密码的性能
- [New Relic](https://newrelic.com/python/django) - 时间中间软件,视图,以及SQL查询.
- [Scout](https://scoutapm.com/docs/python/django) - 时间中间软件,模板渲染,以及带有自动N+1检测功能的SQL查询.
- [django-silk](https://github.com/jazzband/django-silk) - 实时剖析和检查HTTP请求和数据库查询.
- [py-spy](https://github.com/benfred/py-spy) - Python 程序的抽样剖析器。
- [pyinstrument](https://github.com/joerick/pyinstrument) - 为Python,Django,Flask,FastAPI调用堆栈剖面仪.
- [django-zeal](https://github.com/taobojlen/django-zeal) - 用方便用户的错误信息检测 N+1 查询

### 权限
- [django-role-permissions](https://github.com/vintasoftware/django-role-permissions) - Django应用 角色权限管理.
- [django-guardian](https://github.com/django-guardian/django-guardian) - 在Django的每个对象权限。
- [django-rules](https://github.com/dfunckt/django-rules) - 一个微小但强大的应用程序提供对象级别权限,从地面上为Django建立.

### 搜索
- [django-haystack](https://github.com/django-haystack/django-haystack) - 模式搜索强哥.
- [django-watson](https://github.com/etianen/django-watson) - 全文搜索插件 。
- [django-admin-search](https://github.com/shinneider/django-admin-search) - django 管理员的 Modal 过滤器 。
- [django-elasticsearch-dsl](https://github.com/django-es/django-elasticsearch-dsl) - 为Django进行弹性搜索DSL集成.

### 搜索引擎优化
- [django-check-seo](https://github.com/kapt-labs/django-check-seo) - 检查网页的SEO。

### 警卫
- [django-csp](https://github.com/mozilla/django-csp) - 添加数 [Content-Security-Policy](http://www.w3.org/TR/CSP/) 头头到强哥.
- [django-feature-policy](https://github.com/adamchainz/django-permissions-policy) - 设置安全 HTTP 信头草稿 `Feature-Policy` 在Django的应用程序。
- [django-protected-media](https://github.com/cobusc/django-protected-media) - 以受保护的方式管理被认为敏感的媒体。
- [DJ Checkup](https://djcheckup.com) - 对您部署的Django网站进行多次检查,以检查常见的安全错误。

### 静态资产
- [django-storages](https://github.com/jschneier/django-storages) - 支持Django的多个自定义存储后端的单一库.
- [django-compressor](https://github.com/django-compressor/django-compressor/) - 将 JavaScript/CSS 压缩为单个缓存文件.
- [easy-thumbnails](https://github.com/SmileyChris/easy-thumbnails) - Django的图像缩略图。
- [whitenoise](https://github.com/evansd/whitenoise) - 为 Python 网站提供简化的静态文件 。

### 任务队列
- [django-q2](https://github.com/django-q2/django-q2) - Django 的多处理分布任务队列 。
- [django-rq](https://github.com/rq/django-rq) - Redis Queee 的整合 。
- [django-redis](https://github.com/jazzband/django-redis) - 全功能的Redis缓存Django的后端.
- [celery](https://github.com/celery/celery) - 强力和经纪人-不可知的任务队列,用于更大的,注重表现的项目.
- [flower](https://github.com/mher/flower) - Flower是用于监测和管理Celery集群的网络工具.
- [django-celery-beat](https://github.com/celery/django-celery-beat) - 一个定期任务调度器,数据库由Django行政小组配置.
- [celery-exporter](https://github.com/danihodovic/celery-exporter) - Prometheus & Grafana 监控 Celery 任务.
- [django-dramatiq](https://github.com/Bogdanp/django_dramatiq) - 任务处理库,注重简单,可靠,性能.
- [django-celery-results](https://github.com/celery/django-celery-results) - Celery与Django一起产生后端.
- [django-tasks](https://github.com/realOrangeOne/django-tasks) - 在Django开展背景工作者和任务的参考执行和背港工作,基于 [DEP 14](https://www.djangoproject.com/weblog/2024/may/29/django-enhancement-proposal-14-background-workers/).
- [huey](https://github.com/coleifer/huey) - Python 的小任务队列, 包括新的 Django 支持 `django.tasks` API. (英语).
- [django-ox](https://github.com/oxpull/django-ox) - 数据库支持的Django任务框架工人,有交易顺序,重复,重复的任务,没有经纪人可以运行.
- [django-absurd](https://github.com/lincolnloop/django-absurd) - Django Infor Absurd,一个Postgres-inative持久工作流程系统。

### 模板
- [django-components](https://github.com/django-components/django-components/) - 在Django创建简单可重复使用的模板组件的方法.
- [django-template-partials](https://github.com/carltongibson/django-template-partials/) - Django Template Language 的可重用命名内置部分 。
- [slippers](https://mitchel.me/slippers/) - 在 Django 中构建可重复使用的组件,而不写入单行的 Python 。
- [JinjaX](https://jinjax.scaletti.dev/) - 超强组件 用于你的真佳模板。
- [django-cotton](https://django-cotton.com/) - 再见 `{% raw %}{%{% endraw %} extends, block, include {% raw %}%}{% endraw %}`哈罗 `<c-component />`将现代的UI组成带给Django。
- [htpy](https://htpy.dev/) - htpy是一个使HTML在平原Python中写作有趣而高效的库,没有模板语言.
- [django-suspense](https://github.com/paqstd-dev/django-suspense) - 简单的方式在模板中显示倒计时,直到儿童完成加载(如React).

### 测试
- [django-debug-toolbar](https://github.com/django-commons/django-debug-toolbar/) - 可配置调试请求/响应的面板 。
- [pytest-django](https://github.com/pytest-dev/pytest-django) - 在Django使用 pytest 特性.
- [django-test-migrations](https://github.com/wemake-services/django-test-migrations) - 测试django schema和数据迁移,包括迁移顺序.
- [django-test-plus](https://github.com/revsys/django-test-plus/) - 对Django默认的TestCase有用的添加.
- [factory-boy](https://github.com/FactoryBoy/factory_boy) - 测试固定装置替换。
- [django-waffle](https://github.com/django-waffle/django-waffle) - 给Django的功能翻版
- [model-bakery](https://github.com/model-bakers/model_bakery) - Django的物件工厂(旧名Model Mommy项目).
- [django-fakery](https://github.com/fcurella/django-fakery) - 在Faker的支持下,易用地实施Django创建方法。
- [django-pattern-library](https://github.com/torchbox/django-pattern-library) - Django模板的图案库生成器,用于帮助测试UI组件.
- [storybook-django](https://github.com/torchbox/storybook-django) - 单独开发Django UI组件,配有故事本.

### URL( URL)
- [dj-database-url](https://github.com/jazzband/dj-database-url) - 数据库URL.
- [urlman](https://github.com/andrewgodwin/urlman) - 为Django模型做URL的更好方法.
- [django-robots](https://github.com/jazzband/django-robots) - 这是管理机器人的基本Django应用程序. txt文件遵循机器人排除协议,补充Django Sitemat contrib app.
- [django-redirects](https://github.com/fabiocaccamo/django-redirects) - 调整方向,完全控制。

### 用户
- [django-allauth](https://github.com/pennersr/django-allauth/) - 改进用户登记,包括社会认证。
- [django-allauth-ui](https://github.com/danihodovic/django-allauth-ui/) - Django-allauth的更漂亮的模板.
- [django-improved-user](https://github.com/jambonrose/django-improved-user) - 一个定制的 Django 用户通过电子邮件认证 。 遵循身份认证最佳做法。
- [django-organizations](https://github.com/bennylope/django-organizations/) - 多用户账户用于Django项目。
- [django-cas-ng](https://github.com/django-cas-ng/django-cas-ng) - Django-cas-ng是Django CAS(中央认证服务)1.0/2.0/3.0客户端库,用于支持SSO(Single Sign On)和单日志(SLO).
- [django-guest-user](https://github.com/julianwachholz/django-guest-user) - 允许访客像普通用户一样使用您的网站,并在稍后注册.

### 视图
- [django-braces](https://github.com/brack3t/django-braces) - 复用,通用混音.
- [django-easy-audit](https://github.com/soynatan/django-easy-audit) - 跟踪用户动作.
- [django-extra-views](https://github.com/AndrewIngram/django-extra-views) - 课外通用视图.
- [django-stronghold](https://github.com/mgrouchy/django-stronghold) - 让您的 Django 查看默认登录_所需经费。
- [neapolitan](https://github.com/carltongibson/neapolitan) - 快速 CRUD 视图 Django.

## 开发者工具

帮助开发Django项目的独立工具。

### 模板
- [curlylint](https://www.curlylint.org/) - 实验HTML模板为Jinja,Nunjucks,Django模板,Twig,Liquid.
- [djhtml](https://github.com/rtts/djhtml) - Django/Jinja模板输入器。
- [djlint](https://www.djlint.com/) - Lint & Format HTML 模板.

### 静态分析
- [django-orm-lens](https://github.com/FROWNINGdev/django-orm-lens) - 模型级静态分析:ER图,N+1检测,计划漂移,以及CI的爆炸半径,没有数据库或Django靴子.

## Python 软件包

_与Django合作良好的Python套件简表._

- [black](https://github.com/psf/black) - 不妥协的 Python 代码对物质。
- [coveragepy](https://github.com/coveragepy/coveragepy) - 代码覆盖度测量。
- [faker](https://github.com/joke2k/faker) - Faker是一个为您生成假数据的Python软件包.
- [pillow](https://github.com/python-pillow/Pillow) - Python 成像库.
- [pytest](https://github.com/pytest-dev/pytest/) - 测试框架。
- [python-decouple](https://github.com/HBNetwork/python-decouple) - 严格从代码中分离设置 。
- [python-slugify](https://github.com/un33k/python-slugify) - 返回 Unicode 弹片。
- [sentry-python](https://github.com/getsentry/sentry-python) - 报告 SDK 错误 。
- [python-socketio](https://github.com/miguelgrinberg/python-socketio) - Python 执行套装. 木卫一_ 实时客户端和服务器。 [(create Socket.io Django server instance)](https://python-socketio.readthedocs.io/en/latest/server.html?highlight=django#creating-a-server-instance)
- [Ruff](https://github.com/astral-sh/ruff) - 一个极快的Python linter和代码用于物质,用Rust书写.

## 资源

### 官方资源
<!--lint ignore double-link-->
- [Project Website](https://www.djangoproject.com/) - 强哥官方网站.
- [Documentation](https://docs.djangoproject.com/en/dev/) - 所有Django版本的综合文件。
- [Polls Tutorial](https://docs.djangoproject.com/en/dev/intro/tutorial01/) - 在学习Django内部知识的同时建立民意测验辅导系统。
- [Source Code](https://github.com/django/django/) - 主办于GitHub.

### 学历
- [Django Girls Tutorial](https://tutorial.djangogirls.org/en/) - 使用基于函数的视图来构建博客应用.
- [LearnDjango](https://learndjango.com/) - 关于Django和Django REST框架的教学和奖励课程。
- [Adam Johnson](https://adamj.eu/tech/) - 亚当是Django技术委员会的成员,并经常写教程。
- [Photon Designer - Django tutorials](https://photondesigner.com/articles) - Tom Dekan的Django教程, - 从如何与Django建立即时信使,加入即时搜索,到使用Google Drive作为数据库. 定期更新。
- [TestDriven](https://testdriven.io/blog/) - 多个针对Docker,支付等话题的Django特有教程.
- [Classy Class-Based Views](https://ccbv.co.uk/) - 每个通用类视图的方法/财产/属性的详细说明。
- [Classy Django REST Framework](http://www.cdrf.co) - 详细描述DRF类视图和序列器的方法/属性.
- [Simple is Better than Complex](https://simpleisbetterthancomplex.com/) - 经常更新网站,提供许多关于Django的辅导和提示。
- [Full Stack Python's Django Page](https://www.fullstackpython.com/django.html) - 对Django哲学的解释以及与其他资源和教程的联系。
- [RealPython](https://realpython.com/tutorials/django/) - 许多关于强哥的优质辅导.
- [Mozilla Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django) - 创建借阅库应用.
- [Matt Layman](https://www.mattlayman.com) - 定期举办有关Django专题的辅导和深潜课程。
- [Django Styleguide](https://github.com/HackSoftware/Django-Styleguide) - Django的样式指南,介绍最佳做法和实例。
- [Django Template Tags and Filters](https://www.djangotemplatetagsandfilters.com/) - 在Django的57个内置模板过滤器和27个模板标签上添加了docs.
- [Django for Everybody](https://www.dj4e.com/) - 为Webdev初学者开设的完整课程侧重于Django。
- [CS50W](https://cs50.harvard.edu/web/2020/) - 哈佛大学的网络开发入门课程,它将Django解释为后端框架.
- [Better Simple](https://www.better-simple.com/blog/django/) - Tim Schilling的文章讲述了Django的发展、最佳做法和Django生态系统。

### 社区
<!--lint disable double-link-->
- [Django Forum](https://forum.djangoproject.com/) - 官方演讲板.
- [Community Page](https://www.djangoproject.com/community/) - 提供社区博客文章、工作等资讯。
- [Local Django Communities Page](https://www.djangoproject.com/community/local/) - 在世界各地举办地方活动。
- [Django Users Google Group](https://groups.google.com/forum/#!forum/django-users/) - 非常积极的问答讨论板。
- [Developers Google Group](https://groups.google.com/forum/#!forum/django-developers/) - 只供捐给强哥本身
- [Mastodon](https://fosstodon.org/@django) - 用于发布更新,安全修复等正式公告.
- [X (formerly Twitter)](https://x.com/djangoproject/) - 用于发布更新,安全修复等正式公告.
- [Discord Server](https://discord.com/invite/xcRH6mN4fa) - 强哥迪斯科德社区.
- IRC 频道 - 在irc://irc.freenode.net/django与其他Django用户聊天.
- [Djangonaut Space](https://djangonaut.space) - 为Django社区推出免费同伴辅导方案,将人们推出开放源码贡献的宇宙.
<!--lint enable double-link-->

### 会议

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

### 工作委员会

- [Django Job Board](https://djangojobboard.com/) - 一个Django职业委员会,它也汇集其他职业委员会。 前身为Django News Jobs.
- [Django Jobs](https://djangojobs.net) - Django 招聘 Django Python 开发者的工作。
- [Python.org Job Boards](https://www.python.org/jobs/) - 这个工作委员会虽然并非专为Django,但由Python官方网站主持,并具有与Python和Django相关的一系列工作机会。

### 通讯

- [Django News](https://django-news.com) - 关于公告、文章、项目和会谈的每周通讯。

### 播音员

- [Django Chat](https://djangochat.com/) - 由威廉·文森特和贾戈研究员卡尔顿·吉布森(英语:Carlton Gibson)组成的每周播客,讨论核心贾戈概念和定期嘉宾.
- [Django Brew](https://djangobrew.com/) - 由亚当·希尔(Adam Hill)和桑吉塔·贾多南(Sangeeta Jadoonanan)共同制作的关于Django网络框架的趣味咖啡因动力播客.
- [TalkPython](https://talkpython.fm/) - 著名的Python播客,在Django上播放杂耍节目。
- [Running in Production](https://runninginproduction.com/tags/django) - 不再活跃,而是在强哥科技堆上大量积压的剧集.

### 视频

- [DjangoTV](https://djangotv.com) - 你的Django会议视频和教程的来源
- [PyVideo](https://pyvideo.org) - PyVideo是Python相关媒体的索引.

### 书籍
要完整列出印书簿,请检查 [DjangoBook.com](https://djangobook.com/).

_强哥 5_
- [Django for APIs, Fifth Edition](https://learndjango.com/courses/django-for-apis/)
- [Boost Your Django DX](https://adamchainz.gumroad.com/l/byddx)
- [Django 5 By Example](https://www.packtpub.com/en-us/product/django-5-by-example-9781805125457)
- [Django in Action](https://www.manning.com/books/django-in-action)
- [Django for Beginners, Fifth Edition](https://learndjango.com/courses/django-for-beginners/)

## 托管

### PaaS(服务格式)
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

### IaaS(基础设施服务)
- [Digital Ocean](https://www.digitalocean.com)
- [Linode](https://www.linode.com)
- [Amazon Lightsail](https://aws.amazon.com/lightsail/)
- [Hetzner](https://www.hetzner.com)

### 部署事务
_主机服务,将您的应用程序部署在您租赁的服务器上。_
- [Appliku](https://appliku.com) - Django针对DigitalOcean,Hetzner,AWS和Linode服务器的焦点部署服务.
- [DeployHQ](https://www.deployhq.com) - 从 Git 向您的服务器部署 SSH, SFTP, 或 S3 , 并有构建步骤和回滚 。

### 自行部署
_将您的应用程序部署到您拥有的服务器的开源工具 。_
- [Coolify](https://coolify.io) - 自办的PaaS配有多克应用软件和数据库的网络UI,可选付费云控制平面.
- [Dokploy](https://dokploy.com) - 自办的PaaS带有网络UI,以Docker和Traefik为基础,可选付费云控平面.
- [CapRover](https://caprover.com) - 自编自导的PaaS带有网络UI和一击应用程序,在Docker Swarm上构建.
- [Kamal](https://kamal-deploy.org) - 从Basecamp向SSH上空任何服务器部署零故障的容器.
- [Dokku](https://dokku.com) - 多克动力PaaS与赫鲁库风格的Git推力部署.
- [Piku](https://github.com/piku/piku) - Tiny Heroku 风格的 PaaS 用于 git push 部署到单个服务器.

## 项目

### 沸腾
- [cookiecutter-django](https://github.com/cookiecutter/cookiecutter-django/) - 一个完全健全的启动项目, 高度定制。
- [django-base-site](https://github.com/epicserve/django-base-site/) - 拥有许多常见的第三方包件的Django场地预先安装.
- [djangox](https://github.com/wsvincent/lithium/) - 电池包括Pip,Pipenv或Docker的启动器项目.
- [django-docker-template](https://github.com/amerkurev/django-docker-template) - Dockered Django with Postgres, Gunicorn, and Traefik (带有自动更新的让我们加密).
- [django-startproject](https://github.com/jefftriplett/django-startproject) - Django用电池启动项目模板.
- [wemake-django-template](https://github.com/wemake-services/wemake-django-template/) - 血缘Django模板侧重于代码质量和安全。
- [cookiecutter-vue-django](https://github.com/ilikerobots/cookiecutter-vue-django) - 强哥+ Vue启动器项目 引信 Vue SFCs & Django 模板 。
- [sidewinder](https://github.com/stribny/sidewinder/) - 一个Django启动器套件,专注于良好的默认,开发者的经验,和部署.
- [Falco](https://github.com/falcopackages/falco-cli) - 增强您的 Django 开发者经验: CLI 和 现代 Django 开发者指南 。
- [BH2](https://codeberg.org/trey/bh2) - 换个Djiffy的新地盘
- [django-react-boilerplate](https://github.com/vintasoftware/django-react-boilerplate) - A Django, React, Tailwind, Webpack 项目锅炉板

### 开源项目
- [Blog app with users and forms](https://github.com/wsvincent/djangoforbeginners/tree/master/ch7-blog-app-with-users/)
- [Newspaper app with custom user model, full user auth](https://github.com/wsvincent/djangoforbeginners/tree/master/ch15-comments)
- [Behavior-Driven Development with Aloe](https://github.com/testdrivenio/django-aloe-bdd/)
- [Image Sharing Blog](https://github.com/MeNsaaH/soMedia)
- [Bootcamp: An enterprise social network](https://github.com/vitorfs/bootcamp)
- [Zulip](https://github.com/zulip/zulip/) - 开源团队聊天.
- [django-job-portal](https://github.com/manjurulhoque/django-job-portal) - 工作门户应用使用Django.
- [Built with Django](https://builtwithdjango.com) - 令人惊叹的Django项目清单
- [PostHog](https://github.com/PostHog/posthog) - 开源产品分析.
- [HyperKitty](https://gitlab.com/mailman/hyperkitty) - 一个访问 GNU Mailman v3 档案的网络界面.
- [Healthchecks](https://github.com/healthchecks/healthchecks) - 用 Python & Django 写成的 Cron 监视工具 。
- [Flagsmith](https://github.com/Flagsmith/flagsmith) - 开源特性旗法,远程配置,和AB测试.
- [OpenContracts](https://github.com/Open-Source-Legal/OpenContracts) - 企业级文档分析平台,结合了自动化PDF解析,矢量嵌入,LLM集成.
- [Baserow](https://github.com/baserow/baserow) - 开源无码数据库和与Django和Vue.js一起建造的AirTable替代品.
- [Django CRM Admin](https://github.com/DjangoCRM/django-crm) - 开源Python CRM完全建在Django Admin网站.
- [linkding](https://github.com/sissbruecker/linkding) - 自行托管的书签管理器设计为最小,快捷,易于使用Docker设置.
- [pythonic-news](https://github.com/sebst/pythonic-news) - 黑客新闻克隆.
- [Revel](https://github.com/letsrevel/revel-backend) - 与组织自行举办活动管理和售票平台,基于问卷的出席者筛选,QR报到,以及花旗支付.
- [venueless](https://github.com/venueless/venueless) - 在线和混合活动平台,有直播流,聊天,视频室,来自豫剧组.
- [pretix](https://github.com/pretix/pretix) - 售票店申请参加会议,节日,音乐会等活动.
- [pretalx](https://github.com/pretalx/pretalx) - 征集论文、时间安排和演讲者管理的会议规划工具。
- [ioe](https://github.com/zhtyyx/ioe) - 自办零售店管理,设有库存,销售结账,会员账户.

## 贾戈·雷斯特 框架

_与Django一起建立网络API的最流行方式._

### 资源

<!--lint disable double-link-->
- [Official Documentation](https://www.django-rest-framework.org/)
- [DRF Source Code](https://github.com/encode/django-rest-framework)
- [awesome-django-rest-framework](https://github.com/nioperas06/awesome-django-rest-framework)
<!--lint enable double-link-->

### DRF 教学

<!--lint ignore double-link-->
- [Official REST Framework - A Beginner's Guide](https://learndjango.com/tutorials/official-django-rest-framework-tutorial-beginners)
- [Building APIs with Django and DRF](https://books.agiliq.com/projects/django-api-polls-tutorial/en/latest/)
- [DRF with React](https://www.valentinog.com/blog/drf/)
- [Making React and Django play well together](https://fractalideas.com/blog/making-react-and-django-play-well-together/)

## 长尾

_Wagtail),现代网站的强大CMS._

### 瓦格尾矿资源
<!--lint disable double-link-->
- [Official website](https://wagtail.org/)
- [Developer documentation](https://docs.wagtail.org/en/stable/)
- [User documentation](https://guide.wagtail.org/en-latest/)
- [Wagtail Source Code](https://github.com/wagtail/wagtail/)
- [awesome-wagtail](https://github.com/wagtail/awesome-wagtail)
- [This week in Wagtail](https://wagtail.org/this-week-in-wagtail/) - a(大多数)每周发电子邮件,其中包含Wagtail核心团队的更新.
- [Wagtail Space](https://www.wagtail.space/) - 世界各地华格尾会议.
- [Wagtail events](https://wagtail.org/events/) - 在线和当面Wagtail事件.
<!--lint enable double-link-->

从此列表浏览和搜索寄存器的方便方式可访问 [awesome.lvtd.dev/lists/awesome-django](https://awesome.lvtd.dev/lists/awesome-django/).
