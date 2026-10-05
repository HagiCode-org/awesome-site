# 好棒的決哥 [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> 和Django有關的超級名單 由 [Will Vincent](https://github.com/wsvincent) 和 [Jeff Triplett](https://github.com/jefftriplett).

<br>

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/django-logo-negative.svg">
  <img alt="Dark and Light mode version of the Django logo" src="./assets/django-logo-positive.svg">
</picture>
</div>

<br>

請考慮支援決哥, <a rel="sponsored" href="https://www.djangoproject.com/fundraising/">Django 軟體基金會</a>,
通过 <a rel="sponsored" href="https://github.com/sponsors/django">GitHub 贊助者</a>,
或買入 <a rel="sponsored" href="https://django.threadless.com/">官方商品</a>.

## 附 件

<!--lint disable awesome-toc-->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [第三方包件](#third-party-packages)
  - [管理](#admin)
  - [管理主題](#admin-themes)
  - [API( API )](#apis)
  - [同步](#async)
  - [](#caching)
  - [命令](#commands)
  - [配置](#configuration)
  - [內容管理系统](#content-management-systems)
  - [數據庫連接器](#database-connectors)
  - [依赖性注射](#dependency-injection)
  - [电子商务](#ecommerce)
  - [編輯器](#editors)
  - [文件/影像](#filesimages)
  - [表單](#forms)
  - [完整的框架](#full-stack-frameworks)
  - [一般](#general)
  - [(i18n)](#internationalisation-i18n)
  - [日志](#logging)
  - [監控](#monitoring)
  - [信件](#mailing)
  - [模型字段](#model-fields)
  - [模型](#models)
  - [性能](#performance)
  - [權限](#permissions)
  - [搜尋](#search)
  - [搜索引擎优化](#search-engine-optimisation)
  - [安全](#security)
  - [靜态資產](#static-assets)
  - [工作序列](#task-queues)
  - [模板](#templates)
  - [測試](#testing)
  - [網址](#urls)
  - [使用者](#users)
  - [檢視](#views)
- [發展者工具](#developer-tools)
  - [模板](#templates-1)
  - [靜態分析](#static-analysis)
- [Python 套件](#python-packages)
- [資源](#resources)
  - [官方资源](#official-resources)
  - [教育](#educational)
  - [社區](#community)
  - [会议](#conferences)
  - [工作板](#job-boards)
  - [通讯](#newsletters)
  - [播客](#podcasts)
  - [影片](#videos)
  - [书籍](#books)
- [主機](#hosting)
  - [PaaS( 格式- 伺服)](#paas-platforms-as-a-service)
  - [基础设施-服务)](#iaas-infrastructure-as-a-service)
  - [部署](#deployment-services)
  - [自行部署](#self-hosted-deployment)
- [專案](#projects)
  - [沸腾](#boilerplate)
  - [開啟源碼專案](#open-source-projects)
- [決哥雷斯特 框架](#django-rest-framework)
  - [DRF 资源](#drf-resources)
  - [DRF 教程](#drf-tutorials)
- [尾巴](#wagtail)
  - [尾巴資源](#wagtail-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!--lint enable awesome-toc-->

## 第三方包件

_所有可用的套件的完整清單,参见 [Django Packages](https://djangopackages.org/)_

### 管理
- [django-hijack](https://github.com/django-hijack/django-hijack) - 行政官可以登入並代表其他使用者工作,
- [django-import-export](https://github.com/django-import-export/django-import-export) - Django 應用程式與資訊庫, 用管理整合來匯入與匯出資料 。
- [django-admin-inline-paginator-plus](https://github.com/DmytroLitvinov/django-admin-inline-paginator-plus) - 在Django admin 中插上你內線的簡單方法
- [django-loginas](https://github.com/skorokithakis/django-loginas) - "Log in as user"的Django admin。
- [impostor](https://github.com/avallbona/Impostor) - Imppostor是一個Django應用程式,
- [django-impersonate](https://pypi.org/project/django-impersonate/) - 允許超使用者「假冒」其他非超使用者帳戶。
- [django-admin-env-notice](https://github.com/dizballanze/django-admin-env-notice) - 例如, `development`, `staging`, `production`.
- [django-related-admin](https://github.com/PetrDlouhy/django-related-admin) - 供您寫入清單的助手文庫_顯示外國金鑰關係。
- [django-admin-sortable2](https://github.com/jrief/django-admin-sortable2) - Django 管理介面中的物件一般拖放命令 。
- [django-admin-collaborator](https://github.com/brktrlw/django-admin-collaborator) - 加入实时使用者存在, 編輯鎖, 並與 Channels 與 Redis 聊天 。
- [dj-control-room](https://github.com/django-control-room/dj-control-room) - 在 Django admin( Redis、 缓存、 Celery、 URL 等) 內建一組操作工具的控制平面。
- [django-admin-mcp](https://github.com/7tg/django-admin-mcp) - 向 MCP 客戶端( 像 Claude 的 AI 助手) 展現行政登記模型: CRUD、 行政動作、 經過您的 ModelAdmin 課程的歷史,

### 管理主題
- [django-grappelli](https://github.com/sehmaschine/django-grappelli) - 一個爵士樂的皮膚給管理者。
- [django-jazzmin](https://github.com/farridav/django-jazzmin) - django 管理主題, 使用 AdminLTE 3 & Bootstrap 4 讓 Yo' 管理看起來很爵士。
- [django-admin-interface](https://github.com/fabiocaccamo/django-admin-interface) - 由管理員自訂管理員本身( 顏色, 頭部 ) 。 標題,logo)和彈出視窗被模式取代。
- [django-semantic-admin](https://github.com/globophobe/django-semantic-admin) - Django Semantic UI 管理主題 。
- [django-jet-reboot](https://github.com/assem-ch/django-jet-reboot) - Django Jet是Django admin介面的現代樣本,
- [django-baton](https://github.com/otto-torino/django-baton) - 一個很酷、現代和有反應的 Django 管理程式,基于靴子5。
- [django-unfold](https://github.com/unfoldadmin/django-unfold) - 無缝介面發展的現代 Django 管理主題 。
- [django-daisy](https://github.com/hypy13/django-daisy) - 一個現代的django儀表板 用菊花建造而成
- [django-smartbase-admin](https://github.com/SmartBase-SK/django-smartbase-admin) - Django SmartBase Admin 性能調整 最终用户 准备好美麗的Admin面板

### API( API )
<!--lint disable double-link-->
- [django-rest-framework](https://github.com/encode/django-rest-framework) - 网易APIs for Django.
- [django-cors-headers](https://github.com/adamchainz/django-cors-headers) - 如果你的後端和前端在不同的伺服器上 你需要這個
- [dj-rest-auth](https://github.com/iMerica/dj-rest-auth) - Django休息框架的認證
- [django-rest-knox](https://github.com/jazzband/django-rest-knox) - django-rest-auth 的認證模組 。
- [djoser](https://github.com/sunscrapers/djoser) - REST的Django Auth實施。
- [djaq](https://github.com/paul-wolf/djaq) - 用強力查詢語言的Django模型的即時遠端API。
- [django-rest-framework-simplejwt](https://github.com/jazzband/djangorestframework-simplejwt) - JSON網上DRF的代碼。
- [django-webpack-loader](https://github.com/django-webpack/django-webpack-loader) - 透明地使用與Django的網包。
- [drf-yasg](https://github.com/axnsan12/drf-yasg) - 由 Django REST 框架碼自動產生真正的 Swagger/ OpenAPI 2.0 方案 。
- [graphene-django](https://github.com/graphql-python/graphene-django) - 強哥的圖QL
- [graphene-django-filter](https://github.com/devind-team/graphene-django-filter) - 在 GraphQL 中為 Django 執行和( 或) 不執行的高级過程器 。
- [django-modern-rest](https://github.com/wemake-services/django-modern-rest) - 具有速度、類型、星系 `msgspec`, `pydantic` 其他的好!
- [django-ninja](https://django-ninja.rest-framework.com/) - 決哥忍者 - 基于類型註解的 Fast Django REST 框架 。
- [django-tastypie](https://github.com/django-tastypie/django-tastypie) - 自2010年起,
- [drf-spectacular](https://github.com/tfranzel/drf-spectacular) - Sane and liberent OpenAPI 3 schema 生成 Django REST 框架。
- [django-webhook](https://github.com/danihodovic/django-webhook) - 一個插件與遊戲 Django 應用程式,
- [strawberry-django](https://github.com/strawberry-graphql/strawberry-django) - Django與草莓整合,
<!--lint enable double-link-->

### 同步
- [channels](https://github.com/django/channels/) - 阿辛克支持決哥

### 
- [django-cachalot](https://github.com/noripyt/django-cachalot) - 切斷您的 Django ORM 查詢並自動取消它們 。
- [django-cacheops](https://github.com/Suor/django-cacheops) - 浮點數的 ORM 缓存, 自動旋轉事件驅動失效 。

### 命令
- [django-extensions](https://github.com/django-extensions/django-extensions/) - 自訂管理延伸, 特別是 `runserver_plus` 和 `shell_plus`.
- [django-click](https://github.com/django-commons/django-click) - 使用 Django 管理命令寫入 [click CLI library](https://click.palletsprojects.com).
- [django-dbbackup](https://github.com/Archmonger/django-dbbackup) - 管理命令來幫助備份並恢復您的專案資料庫與媒體檔案 。
- [django-liquidb](https://github.com/Gusakovskiy/django-liquidb) - Django應用程式,
- [django-migration-zero](https://github.com/ambient-innovation/django-migration-zero/) - Django全面實施「移民零」模式,
- [django-typer](https://github.com/django-commons/django-typer) - 使用 Django 管理命令寫入 [Typer CLI library](https://typer.tiangolo.com).

### 配置
<!--lint disable double-link-->
- [confidential](https://github.com/candidco/confidential) - 管理設定與秘密( 由 CLI 支援 ) 。
- [django-environ](https://github.com/joke2k/django-environ) - 環境變數
- [django-split-settings](https://github.com/wemake-services/django-split-settings) - 組織多個設定檔 。
- [django-constance](https://github.com/jazzband/django-constance) - Django應用程式與Django admin應用程式集成,
- [django-configurations](https://github.com/jazzband/django-configurations) - 依據 Python 課程的可容性及遵循 [the twelve-factor app](https://12factor.net/config).
- [dynaconf](https://www.dynaconf.com/django/) - Dynaconf 從多來源載入 django 設定值( 多檔案格式、 env vars 、 redis 、 金庫等) , 管理秘密, 并允許不同的合并策略 。 [the twelve-factor app](https://12factor.net/config).
- [django-extra-settings](https://github.com/fabiocaccamo/django-extra-settings) - 使用 django 管理程式來設定和管理已輸入的额外設定 。
- [django-removals](https://github.com/ambient-innovation/django-removals/) - 透過方便的系統檢查, 偵測已贬值的設定變數
- [environs](https://github.com/sloria/environs) - 簡單的環境變數解析 [Django helper](https://github.com/sloria/environs#usage-with-django) 以安裝附加的套件。
<!--lint enable double-link-->
- [django-classy-settings](https://github.com/funkybob/django-classy-settings) - 群組設定以保持您的環境秩序, 容易存取輸入的環境變數 。
- [django-content-settings](https://github.com/occipital/django-content-settings) - 從 Django admin 面板直接建立並管理可編輯的變數 。

### 內容管理系统
<!--lint disable double-link-->
- [wagtail](https://github.com/wagtail/wagtail) - 流行的Django內容管理系统(CMS). 看 [awesome-wagtail](https://github.com/wagtail/awesome-wagtail) 我也是
- [mezzanine](https://github.com/stephenmcd/mezzanine) - CMS框架.
- [django-cms](https://github.com/django-cms/django-cms) - 決哥的CMS
- [feincms](https://github.com/feincms/feincms) - 以Django為基地的CMS
- [puput](https://github.com/APSL/puput) - 部落格應用程式,
<!--lint enable double-link-->

### 數據庫連接器
- [djongo](https://github.com/doableware/djongo) - Django和MongoDB數據庫連結器

### 依赖性注射
- [Wireup](https://github.com/maldoinc/wireup) - Django的依赖性注射

### 电子商务
- [saleor](https://github.com/saleor/saleor) - 以 GraphQL 为基础的 Django 电子商务平台。
- [django-oscar](https://github.com/django-oscar/django-oscar) - Django的網域推動電商。

### 編輯器
<!--lint ignore awesome-list-item-->
- [django-markdownx](https://github.com/neutronX/django-markdownx) - 為 Django 建立全面的Markdown 插件 。
- [django-markdown-editor](https://github.com/agusmakmun/django-markdown-editor) - 偉大的 Django Markdown 編輯器, 支援 Bootstrap & Semantic-UI 。
- [django-business-logic](https://github.com/dgk/django-business-logic) - Django的視覺 DSL 框架
- [django-summernote](https://github.com/lqez/django-summernote) - Summernote是一個簡單的WYSIWYG編輯器.
- [django-tinymce](https://github.com/jazzband/django-tinymce) - TinyMCE整合Django。
- [django-prose](https://github.com/withlogicco/django-prose) - 建立內容的輕量級編輯器 。
- [django-ace](https://github.com/django-ace/django-ace) - ACE集成Django。

### 文件/影像
- [django-cleanup](https://github.com/un1t/django-cleanup) - 本地和遠端檔案的零設定檔/ 影像移除 。
- [django-imagekit](https://github.com/matthewwithanm/django-imagekit) - Django應用程式, 處理圖片的縮圖、黑白和大小。
- [django-pictures](https://github.com/codingjoe/django-pictures) - 使用 AVIF & WebP 等現代代代碼的回應交叉瀏覽器影像庫 。
- [sorl-thumbnail](https://github.com/jazzband/sorl-thumbnail) - Django的拇指

### 表單
- [django-crispy-forms](https://github.com/django-crispy-forms/django-crispy-forms/) - 德瑞·詹戈表格
- [django-floppyforms](https://github.com/jazzband/django-floppyforms) - 完全控制形态渲染
- [django-formtools](https://github.com/jazzband/django-formtools) - 在形式上是前一步和多步的形式,以前是決哥的一部分,直到1.8。
- [django-widget-tweaks](https://github.com/jazzband/django-widget-tweaks) - Tweak 在樣本中形成字段渲染 。
- [django-autocomplete-light](https://github.com/yourlabs/django-autocomplete-light) - 加入自動填充到表單中 。

### 完整的框架
- [Django LiveView](https://github.com/Django-LiveView/liveview) - 用 Django 樣本建立动态、反應性介面伺服器的框架 。 透過 WebSocket 以裝飾器为基础的處理器实时更新 。
- [Django-Bridge](https://github.com/kaedroho/django-bridge) - 建立 Django 應用程式的 React 前端的簡單方式 。
- [ReactPy](https://github.com/reactive-python/reactpy) - 是反射,但是在Python 用 Python 插入到 Django 樣本 [ReactPy-Django module](https://github.com/reactive-python/reactpy-django).
- [Reactor](https://github.com/edelvalle/reactor/) - 菲尼克斯LiveView, 但為決哥。
- [Sockpuppet](https://sockpuppet.argpar.se/) - 利用Django工具建立反應應用程式,
- [Unicorn](https://www.django-unicorn.com/) - 讓AJAX在背景中呼喚, 並动态更新DOM。

### 一般
- [django-data-browser](https://github.com/tolomea/django-data-browser) - 互動性, 方便使用者的數據庫探險器 。
- [django-filter](https://github.com/carltongibson/django-filter) - 根據Django QuerySets的強烈滤波器。
- [django-sql-explorer](https://github.com/explorerhq/sql-explorer) - 透過 SQL 查詢分享資料 。
- [django-tables2](https://github.com/jieter/django-tables2) - HTML 表格中包含 pagination/ 排序 。
- [django-maintenance-mode](https://github.com/fabiocaccamo/django-maintenance-mode) - 使用維護模版時顯示一個 503 的錯誤頁面 。
- [django-freeze](https://github.com/fabiocaccamo/django-freeze) - 將您的动态 django 站點轉換成一行碼的靜態站點 。
- [django-nh3](https://github.com/marksweb/django-nh3) - Django與nh3融合,
- [Weblate](https://github.com/WeblateOrg/weblate) - Weblate 是一個复制的 libre 軟體,
- [Django-Classy-Doc](https://github.com/nanuxbe/django-classy-doc) - 以 CCBV 和 CDRF 的樣式記錄你自己的密碼 。
- [iommi](https://github.com/iommirocks/iommi) - 不寫入 HTML 或 JavaScript 的 CRUD 應用程式發展工具箱 。

### (i18n)
- [django-localflavor](https://github.com/django/django-localflavor) - 一個對特定國家或文化有用的功能集。 以前是Django核心的一部分
- [django-modeltrans](https://github.com/zostera/django-modeltrans) - 翻譯JSON球場的Django模型
- [django-modeltranslations](https://github.com/deschler/django-modeltranslation) -  用登記法翻譯Django模型
- [django-rosetta](https://github.com/mbi/django-rosetta) - 羅塞塔提供UI 在Django行政區內讀寫你的專案的文字目錄

### 日志
- [django-guid](https://github.com/snok/django-guid) - 將 GUID (校對- ID) 插入到 Django 要求中的每個日志信件中 。
- [DRF-API-Logger](https://github.com/vishalanandl177/DRF-API-Logger) - API Logger 供您的 Django 休息框架項目之用 。
- [django-structlog](https://github.com/jrobichaud/django-structlog) - django-structlog 是使用 Django 專案的結構式伐木集成檔, [structlog](https://www.structlog.org)

### 監控
- [django-prometheus](https://github.com/django-commons/django-prometheus) - 將Django監控測量表匯出至普羅米修斯
- [django-mixin](https://github.com/adinhodovic/django-mixin) - 監控混血兒給Django Prometheus 一套Grafana儀表板和普羅米修斯的規矩

### 信件
- [django-pony-express](https://github.com/ambient-innovation/django-pony-express) - 包括Django的測試套件。
- [django-anymail](https://github.com/anymail/django-anymail) - Django 電子郵件後端與網路呼應, 包括Amazon SES、Brevo(Sendinblue)、MallerSend、Mailgun、Mailjet、Postmark、Postmark、Resend、SendGrid、SparkPost、Unisender Go等。

### 模型字段
- [django-colorfield](https://github.com/fabiocaccamo/django-colorfield) - django 模型的顏色字段, 具有很好的選色元件 。
- [django-model-utils](https://github.com/jazzband/django-model-utils) - Django模型混合和公用事业。
- [django-phonenumber-field](https://github.com/django-phonenumber-field/django-phonenumber-field) - 普通號碼的模型/格式字段 。
- [django-streamfield](https://github.com/raagin/django-streamfield) - Plain Django admin(基于 Wagtail CMS Stream Field 想法)的簡易流網。

### 模型
- [django-lifecycle](https://github.com/rsinger86/django-lifecycle) - 宣傳型號的生命周期钩,是信號的替代物.
- [django-mptt](https://github.com/django-mptt/django-mptt) - 修改過的預序樹狀; 和模擬例的樹狀一起工作 。
- [django-taggit](https://github.com/jazzband/django-taggit/) - 簡單的模型標籤 。
- [django-reversion](https://github.com/etianen/django-reversion) - 模擬實體的版本控制 。
- [django-simple-history](https://github.com/django-commons/django-simple-history) - 儲存模式歷史和檢視/反轉從管理員中變更 。
- [django-polymorphic](https://github.com/django-commons/django-polymorphic) - Django-polymorphic在Django計畫中,
- [django-recurrence](https://github.com/jazzband/django-recurrence) - 在Django,
- [django-treenode](https://github.com/fabiocaccamo/django-treenode) - 依樹制的東西的抽象模型/管理者 。
- [django-auto-prefetch](https://github.com/adamchainz/django-auto-prefetch) - 需要時自動預置外國金鑰數值 。

### 性能
- [django-perf-rec](https://cur.at/GHUO6cn?m=web) - 详细記錄你Django密碼的性能
- [New Relic](https://newrelic.com/python/django) - 時空介面、 檢視和 SQL 查詢 。
- [Scout](https://scoutapm.com/docs/python/django) - 具有自動 N+1 檢測的時空中間軟件、樣本渲染和 SQL 查詢 。
- [django-silk](https://github.com/jazzband/django-silk) - HTTP 要求和數據庫查詢的實際剖面與檢查 。
- [py-spy](https://github.com/benfred/py-spy) - Python 程式的樣本描述器 。
- [pyinstrument](https://github.com/joerick/pyinstrument) - 呼叫堆裝分析器 呼叫Python, Django, Flask, FastAPI 。
- [django-zeal](https://github.com/taobojlen/django-zeal) - 用易用錯誤訊息偵測 N+1 查詢

### 權限
- [django-role-permissions](https://github.com/vintasoftware/django-role-permissions) - Django應用程式,
- [django-guardian](https://github.com/django-guardian/django-guardian) - 根戈的物件權限
- [django-rules](https://github.com/dfunckt/django-rules) - 一個微小但強大的應用程式 提供物件等級的權限, 從地上建起來的 Django。

### 搜尋
- [django-haystack](https://github.com/django-haystack/django-haystack) - 模式搜索決哥。
- [django-watson](https://github.com/etianen/django-watson) - 全文搜索插件 。
- [django-admin-search](https://github.com/shinneider/django-admin-search) - django 管理員的 Modal 滤波器 。
- [django-elasticsearch-dsl](https://github.com/django-es/django-elasticsearch-dsl) - 用于 Django 的 Elasticsearch DSL 整合 。

### 搜索引擎优化
- [django-check-seo](https://github.com/kapt-labs/django-check-seo) - 查查各頁的SEO

### 安全
- [django-csp](https://github.com/mozilla/django-csp) - 添加 [Content-Security-Policy](http://www.w3.org/TR/CSP/) 帶頭到決哥
- [django-feature-policy](https://github.com/adamchainz/django-permissions-policy) - 設定安全 HTTP 信頭草稿 `Feature-Policy` 在Django的應用程式上
- [django-protected-media](https://github.com/cobusc/django-protected-media) - 管理被保護的敏感媒體 。
- [DJ Checkup](https://djcheckup.com) - 在您部署的 Django 網站上進行數次檢查, 以檢查常见的安全錯誤 。

### 靜态資產
- [django-storages](https://github.com/jschneier/django-storages) - 一個支持 Django 多個自訂儲存後端的函式庫 。
- [django-compressor](https://github.com/django-compressor/django-compressor/) - 將 JavaScript/ CSS 壓縮成一個已儲存的檔案 。
- [easy-thumbnails](https://github.com/SmileyChris/easy-thumbnails) - Django的影像縮圖 。
- [whitenoise](https://github.com/evansd/whitenoise) - Python 網站的簡化靜態檔案 。

### 工作序列
- [django-q2](https://github.com/django-q2/django-q2) - Django 的多處理分配工作排隊 。
- [django-rq](https://github.com/rq/django-rq) - Redis queue 集成 。
- [django-redis](https://github.com/jazzband/django-redis) - Redis的Django的全功能快取後端
- [celery](https://github.com/celery/celery) - 強大與介紹的任務排隊,
- [flower](https://github.com/mher/flower) - Flower是監控和管理Celery群組的網路工具。
- [django-celery-beat](https://github.com/celery/django-celery-beat) - 由 Django 行政專案組設定的定期工作排程器 。
- [celery-exporter](https://github.com/danihodovic/celery-exporter) - Prometheus & Grafana 監控 Celery 工作。
- [django-dramatiq](https://github.com/Bogdanp/django_dramatiq) - 工作處理文庫, 重點是簡便、 可靠與性能 。
- [django-celery-results](https://github.com/celery/django-celery-results) - Celery和Django的後端
- [django-tasks](https://github.com/realOrangeOne/django-tasks) - 根據 [DEP 14](https://www.djangoproject.com/weblog/2024/may/29/django-enhancement-proposal-14-background-workers/).
- [huey](https://github.com/coleifer/huey) - Python 的小工作排隊, 包括新的 Django 支援 `django.tasks` API.
- [django-ox](https://github.com/oxpull/django-ox) - 數據庫支持Django工作框架的工人,
- [django-absurd](https://github.com/lincolnloop/django-absurd) - Django集成於Absurd, 一個Postgres-native持久工作流程系統。

### 模板
- [django-components](https://github.com/django-components/django-components/) - 在 Django 建立簡單可重用樣本元件的方法 。
- [django-template-partials](https://github.com/carltongibson/django-template-partials/) - 重用 Django 樣本語言的內含部分 。
- [slippers](https://mitchel.me/slippers/) - 在 Django 建立可重用元件, 不寫單行 Python 。
- [JinjaX](https://jinjax.scaletti.dev/) - 你的金佳樣本的超能力
- [django-cotton](https://django-cotton.com/) - 拜拜 `{% raw %}{%{% endraw %} extends, block, include {% raw %}%}{% endraw %}`你好 `<c-component />`把現代的UI成分帶到Django身上
- [htpy](https://htpy.dev/) - htpy 是一款讓 HTML 用 Python 寫作有趣且高效的文庫, 沒有樣本語言 。
- [django-suspense](https://github.com/paqstd-dev/django-suspense) - 很容易在樣本中顯示回落, 直到孩子完成載入( 如 React) 。

### 測試
- [django-debug-toolbar](https://github.com/django-commons/django-debug-toolbar/) - 配置面板以調试要求/ 應答 。
- [pytest-django](https://github.com/pytest-dev/pytest-django) - 在Django使用 pytest 特性 。
- [django-test-migrations](https://github.com/wemake-services/django-test-migrations) - 測試django的計劃和數據移動,包括移動的秩序。
- [django-test-plus](https://github.com/revsys/django-test-plus/) - Django 預設的 TestCase 的有益新增。
- [factory-boy](https://github.com/FactoryBoy/factory_boy) - 測試固定器取代 。
- [django-waffle](https://github.com/django-waffle/django-waffle) - 跳跳虎的特技
- [model-bakery](https://github.com/model-bakers/model_bakery) - Django的物件工廠(
- [django-fakery](https://github.com/fcurella/django-fakery) - 在Faker的支持下,
- [django-pattern-library](https://github.com/torchbox/django-pattern-library) - 用于 Django 樣本的樣式庫產生器, 幫助測試 UI 元件 。
- [storybook-django](https://github.com/torchbox/storybook-django) - 孤立地發展 Django UI 元件, 以及故事本 。

### 網址
- [dj-database-url](https://github.com/jazzband/dj-database-url) - 數據庫網址 。
- [urlman](https://github.com/andrewgodwin/urlman) - 更適合為Django模型做網址
- [django-robots](https://github.com/jazzband/django-robots) - 這是管理機器人的基本Django應用程式。 txt 檔案遵循了機器人排除协议, 以補充 Django Schiteap contrib app 。
- [django-redirects](https://github.com/fabiocaccamo/django-redirects) - 完全控制方向

### 使用者
- [django-allauth](https://github.com/pennersr/django-allauth/) - 改善使用者登記, 包括社會認證 。
- [django-allauth-ui](https://github.com/danihodovic/django-allauth-ui/) - Django -allauth的樣本更好看
- [django-improved-user](https://github.com/jambonrose/django-improved-user) - 自訂的 Django 用電子郵件驗證 遵循身份和認證最佳做法。
- [django-organizations](https://github.com/bennylope/django-organizations/) - 多用戶為Django計畫提供帳號。
- [django-cas-ng](https://github.com/django-cas-ng/django-cas-ng) - Django-cas-ng是Django CAS(中央認證服務)1.0/2.0/3.0客戶端文庫,用以支援SSO(Single Sign On)和單個登記(SLO).
- [django-guest-user](https://github.com/julianwachholz/django-guest-user) - 允許訪客像普通使用者一樣使用您的網站,

### 檢視
- [django-braces](https://github.com/brack3t/django-braces) - 复用,通用混音.
- [django-easy-audit](https://github.com/soynatan/django-easy-audit) - 追蹤使用者的動作 。
- [django-extra-views](https://github.com/AndrewIngram/django-extra-views) - 超級通用檢視 。
- [django-stronghold](https://github.com/mgrouchy/django-stronghold) - 讓您所有的 Django 檢視預設登入_要求。
- [neapolitan](https://github.com/carltongibson/neapolitan) - 快速 CRUD 檢視 Django 。

## 發展者工具

獨立的工具幫助發展Django計畫。

### 模板
- [curlylint](https://www.curlylint.org/) - 實驗 HTML 樣本 林定 Jinja, Nunjucks, Django 樣本, Twig, Liquid 。
- [djhtml](https://github.com/rtts/djhtml) - Django/Jinja模板入口。
- [djlint](https://www.djlint.com/) - Lint 格式化 HTML 樣本。

### 靜態分析
- [django-orm-lens](https://github.com/FROWNINGdev/django-orm-lens) - 模擬相關靜態分析:ER圖,N+1測試,計程漂移,爆炸半徑在CI,沒有數據庫或Django靴子。

## Python 套件

_和Django合作的 Python 套件清單_

- [black](https://github.com/psf/black) - 毫不妥协的 Python 代碼
- [coveragepy](https://github.com/coveragepy/coveragepy) - 代碼覆蓋度量
- [faker](https://github.com/joke2k/faker) - Faker 是 Python 套件, 為您產生假數據 。
- [pillow](https://github.com/python-pillow/Pillow) - Python 圖像庫。
- [pytest](https://github.com/pytest-dev/pytest/) - 測試框架 。
- [python-decouple](https://github.com/HBNetwork/python-decouple) - 严格區分設定值與代碼 。
- [python-slugify](https://github.com/un33k/python-slugify) - 傳回 Unicode 彈片 。
- [sentry-python](https://github.com/getsentry/sentry-python) - SDK 報告錯誤 。
- [python-socketio](https://github.com/miguelgrinberg/python-socketio) - Python 實施套接字 偶爾_ 即時客戶端和伺服器。 [(create Socket.io Django server instance)](https://python-socketio.readthedocs.io/en/latest/server.html?highlight=django#creating-a-server-instance)
- [Ruff](https://github.com/astral-sh/ruff) - 用Rust寫成的 極快的 Python 密碼和密碼

## 資源

### 官方资源
<!--lint ignore double-link-->
- [Project Website](https://www.djangoproject.com/) - 贾果官方网站.
- [Documentation](https://docs.djangoproject.com/en/dev/) - 所有Django版本的全面文件。
- [Polls Tutorial](https://docs.djangoproject.com/en/dev/intro/tutorial01/) - 在學習Django內幕時,
- [Source Code](https://github.com/django/django/) - 主持于GitHub.

### 教育
- [Django Girls Tutorial](https://tutorial.djangogirls.org/en/) - 使用基于函數的檢視建立部落格應用程式 。
- [LearnDjango](https://learndjango.com/) - Django和Django REST框架的教訓和獎金课程。
- [Adam Johnson](https://adamj.eu/tech/) - 亞當是Django技術委員會的成員 經常寫教訓
- [Photon Designer - Django tutorials](https://photondesigner.com/articles) - Tom Dekan的Django教訓, - 從如何與Django建立即時信使, 定期更新。
- [TestDriven](https://testdriven.io/blog/) - 多個Django的教訓,
- [Classy Class-Based Views](https://ccbv.co.uk/) - 按類別查看的方法/屬性的详细描述。
- [Classy Django REST Framework](http://www.cdrf.co) - 包含基于 DRF 的類別檢視和序列器的方法/屬性的详细描述 。
- [Simple is Better than Complex](https://simpleisbetterthancomplex.com/) - 定期更新網站,
- [Full Stack Python's Django Page](https://www.fullstackpython.com/django.html) - 解釋Django哲學,
- [RealPython](https://realpython.com/tutorials/django/) - 在Django上很多高质量的教學。
- [Mozilla Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django) - 建立借書室應用程式 。
- [Matt Layman](https://www.mattlayman.com) - 關於Django議題的定期教學和深度跳槽。
- [Django Styleguide](https://github.com/HackSoftware/Django-Styleguide) - Django的樣式指南,包含最佳做法和例子。
- [Django Template Tags and Filters](https://www.djangotemplatetagsandfilters.com/) - Django的57個內置樣本滤波器和27個樣本標籤的附加文件。
- [Django for Everybody](https://www.dj4e.com/) - 網路初学者的完整課程,
- [CS50W](https://cs50.harvard.edu/web/2020/) - 哈佛大學的網路發展入門課程,
- [Better Simple](https://www.better-simple.com/blog/django/) - 來自Tim Schilling的文章,

### 社區
<!--lint disable double-link-->
- [Django Forum](https://forum.djangoproject.com/) - 官方宣佈板.
- [Community Page](https://www.djangoproject.com/community/) - 提供社群部落格文章,
- [Local Django Communities Page](https://www.djangoproject.com/community/local/) - 世界各地都有當地活動
- [Django Users Google Group](https://groups.google.com/forum/#!forum/django-users/) - 對於問題與答覆,
- [Developers Google Group](https://groups.google.com/forum/#!forum/django-developers/) - 只為了對Django本身的贡献
- [Mastodon](https://fosstodon.org/@django) - 關於更新的官方通知, 安全修正等 。
- [X (formerly Twitter)](https://x.com/djangoproject/) - 關於更新的官方通知, 安全修正等 。
- [Discord Server](https://discord.com/invite/xcRH6mN4fa) - 干戈迪斯科德社區.
- IRC 頻道 - 在irc://irc.freenode.net/django與其他Django使用者聊天。
- [Djangonaut Space](https://djangonaut.space) - 由Django社群推出自由對等感應程式,
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

### 工作板

- [Django Job Board](https://djangojobboard.com/) - 一個Django工作委員會, 前身是Django News Jobs
- [Django Jobs](https://djangojobs.net) - Django 工作,
- [Python.org Job Boards](https://www.python.org/jobs/) - 這個工作委員會由Python官方網站主持,

### 通讯

- [Django News](https://django-news.com) - 關於公告、文章、計畫和談話的周刊。

### 播客

- [Django Chat](https://djangochat.com/) - 由威廉·文森特和Django Fellow Carlton Gibson主播,
- [Django Brew](https://djangobrew.com/) - 由亞當·希爾(Adam Hill)和Sangeeta Jadoonanan(Sangeeta Jadoonan)主演,
- [TalkPython](https://talkpython.fm/) - 在Django上主演的Python播客
- [Running in Production](https://runninginproduction.com/tags/django) - 已經不再有活動了,

### 影片

- [DjangoTV](https://djangotv.com) - 你的Django會議錄像和教學的來源
- [PyVideo](https://pyvideo.org) - PyVideo是Python相關媒體的索引.

### 书籍
要完整列出印書簿,請查看 [DjangoBook.com](https://djangobook.com/).

_決戈 5_
- [Django for APIs, Fifth Edition](https://learndjango.com/courses/django-for-apis/)
- [Boost Your Django DX](https://adamchainz.gumroad.com/l/byddx)
- [Django 5 By Example](https://www.packtpub.com/en-us/product/django-5-by-example-9781805125457)
- [Django in Action](https://www.manning.com/books/django-in-action)
- [Django for Beginners, Fifth Edition](https://learndjango.com/courses/django-for-beginners/)

## 主機

### PaaS( 格式- 伺服)
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

### 基础设施-服务)
- [Digital Ocean](https://www.digitalocean.com)
- [Linode](https://www.linode.com)
- [Amazon Lightsail](https://aws.amazon.com/lightsail/)
- [Hetzner](https://www.hetzner.com)

### 部署
_使用您的應用程式的服務主機 。_
- [Appliku](https://appliku.com) - DigitalOcean、Hetzner、AWS和Linode等伺服器的焦點部署服務。
- [DeployHQ](https://www.deployhq.com) - 從 Git 部署在 SSH 、 SFTP 或 S3 的伺服器上, 上面有建築階梯和回滚 。

### 自行部署
_將您的應用程式部署到您的伺服器的開源工具 。_
- [Coolify](https://coolify.io) - 自辦的 PaaS , 上面有多克應用程式和數據庫的網絡UI, 上面有可選擇的付費雲控制平面 。
- [Dokploy](https://dokploy.com) - 自辦的「 PaaS」,
- [CapRover](https://caprover.com) - 自辦的「 PaaS」,
- [Kamal](https://kamal-deploy.org) - 從Basecamp 向 SSH 上方的伺服器部署容器 。
- [Dokku](https://dokku.com) - 多克力的PaaS 配有赫羅庫式的Git推力
- [Piku](https://github.com/piku/piku) - Tiny Heroku 式的 PaaS 供 git 推動到單一伺服器 。

## 專案

### 沸腾
- [cookiecutter-django](https://github.com/cookiecutter/cookiecutter-django/) - 一個完全正常的開發項目, 高度定制。
- [django-base-site](https://github.com/epicserve/django-base-site/) - 一個Django網站,
- [djangox](https://github.com/wsvincent/lithium/) - 電池包括Pip、Pipenv或Docker的啟動器專案。
- [django-docker-template](https://github.com/amerkurev/django-docker-template) - Dockered Django with Postgres, Gunicorn, and Traefik (使用自动更新的 Let's Encrypt) 。
- [django-startproject](https://github.com/jefftriplett/django-startproject) - Django用電池啟動專案樣本。
- [wemake-django-template](https://github.com/wemake-services/wemake-django-template/) - 血源尖端的Django樣本專注於密碼的質量和安全性。
- [cookiecutter-vue-django](https://github.com/ilikerobots/cookiecutter-vue-django) - 決哥+ Vue 啟動專案 引信 Vue SFCs & Django 樣本 。
- [sidewinder](https://github.com/stribny/sidewinder/) - Django 啟動套件,
- [Falco](https://github.com/falcopackages/falco-cli) - 提升您的 Django 開發者經驗: CLI 和 Modern Django 開發者指南 。
- [BH2](https://codeberg.org/trey/bh2) - 在Djiffy開始新的Django網站
- [django-react-boilerplate](https://github.com/vintasoftware/django-react-boilerplate) - A Django, React, Tailwind, Webpack 專案锅爐板

### 開啟源碼專案
- [Blog app with users and forms](https://github.com/wsvincent/djangoforbeginners/tree/master/ch7-blog-app-with-users/)
- [Newspaper app with custom user model, full user auth](https://github.com/wsvincent/djangoforbeginners/tree/master/ch15-comments)
- [Behavior-Driven Development with Aloe](https://github.com/testdrivenio/django-aloe-bdd/)
- [Image Sharing Blog](https://github.com/MeNsaaH/soMedia)
- [Bootcamp: An enterprise social network](https://github.com/vitorfs/bootcamp)
- [Zulip](https://github.com/zulip/zulip/) - 開源团队聊天.
- [django-job-portal](https://github.com/manjurulhoque/django-job-portal) - 使用 Django 的工作入口應用程式 。
- [Built with Django](https://builtwithdjango.com) - 出色的Django計劃的破解清單
- [PostHog](https://github.com/PostHog/posthog) - 開源產品分析.
- [HyperKitty](https://gitlab.com/mailman/hyperkitty) - 存取 GNU Mailman v3 檔案的網頁介面 。
- [Healthchecks](https://github.com/healthchecks/healthchecks) - 用 Python & Django 寫成的 Cron 監控工具 。
- [Flagsmith](https://github.com/Flagsmith/flagsmith) - 開源功能標籤, 遠端配置, 以及AB 測試 。
- [OpenContracts](https://github.com/Open-Source-Legal/OpenContracts) - 企業階級文件分析平台,
- [Baserow](https://github.com/baserow/baserow) - 使用 Django 與 Vue.
- [Django CRM Admin](https://github.com/DjangoCRM/django-crm) - 開源的 Python CMM 完全建在 Django 管理網站上。
- [linkding](https://github.com/sissbruecker/linkding) - 自辦的書签管理員, 設計為最小, 快速,
- [pythonic-news](https://github.com/sebst/pythonic-news) - 哈克新聞克隆人
- [Revel](https://github.com/letsrevel/revel-backend) - 自行接待活動管理及售票平台,
- [venueless](https://github.com/venueless/venueless) - 提供網路及混合活動平台,
- [pretix](https://github.com/pretix/pretix) - 會議、節日、音樂會及其他活動的票房申請。
- [pretalx](https://github.com/pretalx/pretalx) - 發表論文、排程、發言人管理。
- [ioe](https://github.com/zhtyyx/ioe) - 自辦的零售店管理 和库存,銷售查單,和成員帳戶。

## 決哥雷斯特 框架

_最流行的與Django建立網路API的方法._

### DRF 资源

<!--lint disable double-link-->
- [Official Documentation](https://www.django-rest-framework.org/)
- [DRF Source Code](https://github.com/encode/django-rest-framework)
- [awesome-django-rest-framework](https://github.com/nioperas06/awesome-django-rest-framework)
<!--lint enable double-link-->

### DRF 教程

<!--lint ignore double-link-->
- [Official REST Framework - A Beginner's Guide](https://learndjango.com/tutorials/official-django-rest-framework-tutorial-beginners)
- [Building APIs with Django and DRF](https://books.agiliq.com/projects/django-api-polls-tutorial/en/latest/)
- [DRF with React](https://www.valentinog.com/blog/drf/)
- [Making React and Django play well together](https://fractalideas.com/blog/making-react-and-django-play-well-together/)

## 尾巴

_對於現代網站而言,_

### 尾巴資源
<!--lint disable double-link-->
- [Official website](https://wagtail.org/)
- [Developer documentation](https://docs.wagtail.org/en/stable/)
- [User documentation](https://guide.wagtail.org/en-latest/)
- [Wagtail Source Code](https://github.com/wagtail/wagtail/)
- [awesome-wagtail](https://github.com/wagtail/awesome-wagtail)
- [This week in Wagtail](https://wagtail.org/this-week-in-wagtail/) - 每周發一份電子郵件,
- [Wagtail Space](https://www.wagtail.space/) - 世界各地都舉辦了尾巴會議
- [Wagtail events](https://wagtail.org/events/) - 網上和當面的Wagtail事件。
<!--lint enable double-link-->

從此清單瀏覽和搜尋寄存器的方便方式, 可在 [awesome.lvtd.dev/lists/awesome-django](https://awesome.lvtd.dev/lists/awesome-django/).
