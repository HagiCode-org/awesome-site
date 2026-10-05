# Impressionante Django [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> Uma lista de coisas incríveis relacionadas com Django. Mantido por [Will Vincent](https://github.com/wsvincent) e [Jeff Triplett](https://github.com/jefftriplett).

<br>

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/django-logo-negative.svg">
  <img alt="Dark and Light mode version of the Django logo" src="./assets/django-logo-positive.svg">
</picture>
</div>

<br>

Por favor, considere apoiar Django fazendo uma doação para o <a rel="sponsored" href="https://www.djangoproject.com/fundraising/">Django Software Foundation</a>,
patrocínio via <a rel="sponsored" href="https://github.com/sponsors/django">Patrocinadores GitHub</a>,
ou comprar <a rel="sponsored" href="https://django.threadless.com/">Mercadorias oficiais</a>.

## Índice

<!--lint disable awesome-toc-->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Pacotes de Terceiros](#third-party-packages)
  - [Administrador](#admin)
  - [Temas de Administração](#admin-themes)
  - [APIs](#apis)
  - [Async](#async)
  - [Cache](#caching)
  - [Comandos](#commands)
  - [Configuração](#configuration)
  - [Sistemas de Gestão de Conteúdo](#content-management-systems)
  - [Conectores de Banco de Dados](#database-connectors)
  - [Injecção de dependência](#dependency-injection)
  - [ECOmmerce](#ecommerce)
  - [Editores](#editors)
  - [Ficheiros/Imagens](#filesimages)
  - [Formas](#forms)
  - [Frameworks completos](#full-stack-frameworks)
  - [Geral](#general)
  - [Internacionalização (i18n)](#internationalisation-i18n)
  - [Registo](#logging)
  - [Acompanhamento](#monitoring)
  - [Correio](#mailing)
  - [Campos de Modelo](#model-fields)
  - [Modelos](#models)
  - [Desempenho](#performance)
  - [Permissões](#permissions)
  - [Procurar](#search)
  - [Otimização do motor de busca](#search-engine-optimisation)
  - [Segurança](#security)
  - [Activos Estáticos](#static-assets)
  - [Filas de Tarefa](#task-queues)
  - [Modelos](#templates)
  - [Teste](#testing)
  - [URLs](#urls)
  - [Utilizadores](#users)
  - [Vistas](#views)
- [Ferramentas de Desenvolvimento](#developer-tools)
  - [Modelos](#templates-1)
  - [Análise estática](#static-analysis)
- [Pacotes Python](#python-packages)
- [Recursos](#resources)
  - [Recursos oficiais](#official-resources)
  - [Educação](#educational)
  - [Comunidade](#community)
  - [Conferências](#conferences)
  - [Conselhos de Trabalho](#job-boards)
  - [Boletims informativos](#newsletters)
  - [Podcasts](#podcasts)
  - [Vídeos](#videos)
  - [Livros](#books)
- [Hospedagem](#hosting)
  - [PaaS (Plataformas-as-a-Service)](#paas-platforms-as-a-service)
  - [IaaS (Infraestrutura-como-Serviço)](#iaas-infrastructure-as-a-service)
  - [Serviços de implantação](#deployment-services)
  - [Implementação Auto-Hosted](#self-hosted-deployment)
- [Projectos](#projects)
  - [Caldeira](#boilerplate)
  - [Projectos de Código Aberto](#open-source-projects)
- [Django REST Quadro](#django-rest-framework)
  - [Recursos do DRF](#drf-resources)
  - [Tutoriais DRF](#drf-tutorials)
- [Bacalhau](#wagtail)
  - [Recursos Wagtail](#wagtail-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!--lint enable awesome-toc-->

## Pacotes de Terceiros

_Para uma lista completa de todos os pacotes disponíveis, consulte [Django Packages](https://djangopackages.org/)_

### Administrador
- [django-hijack](https://github.com/django-hijack/django-hijack) - Os administradores podem fazer login e trabalhar em nome de outros usuários sem ter que saber suas credenciais.
- [django-import-export](https://github.com/django-import-export/django-import-export) - Aplicação Django e biblioteca para importação e exportação de dados com integração de administrador.
- [django-admin-inline-paginator-plus](https://github.com/DmytroLitvinov/django-admin-inline-paginator-plus) - Uma maneira simples de paginar seu inline em Django admin
- [django-loginas](https://github.com/skorokithakis/django-loginas) - "Fazer login como usuário" para o administrador Django.
- [impostor](https://github.com/avallbona/Impostor) - Impostor é uma aplicação Django que permite que os membros da equipe entrem como um usuário diferente usando seu próprio nome de usuário e senha.
- [django-impersonate](https://pypi.org/project/django-impersonate/) - Permitir que superusuários “personem” outras contas não superusuárias.
- [django-admin-env-notice](https://github.com/dizballanze/django-admin-env-notice) - Distingue visualmente ambientes no Django Admin, por exemplo: `development`, `staging`, `production`.
- [django-related-admin](https://github.com/PetrDlouhy/django-related-admin) - Uma biblioteca auxiliar que lhe permite escrever a lista_mostra através de relações chave estrangeiras.
- [django-admin-sortable2](https://github.com/jrief/django-admin-sortable2) - Ordem genérica de arrastar e soltar para objetos na interface de administração Django.
- [django-admin-collaborator](https://github.com/brktrlw/django-admin-collaborator) - Adicione presença do usuário em tempo real, edite bloqueios e converse com Django admin com Canais e Redis.
- [dj-control-room](https://github.com/django-control-room/dj-control-room) - Construa um plano de controle com um conjunto de ferramentas operacionais dentro do administrador Django (Redis, cache, Celery, URLs e muito mais).
- [django-admin-mcp](https://github.com/7tg/django-admin-mcp) - Expor modelos de administrador registrados para clientes MCP (assistentes de IA como Claude): CRUD, ações de administrador e histórico através de suas classes ModelAdmin, capotadas por permissões Django.

### Temas de Administração
- [django-grappelli](https://github.com/sehmaschine/django-grappelli) - Uma pele jazz para o administrador.
- [django-jazzmin](https://github.com/farridav/django-jazzmin) - Drop-in tema para administrador django, que utiliza AdminLTE 3 & Bootstrap 4 para fazer seu 'administr olhar jazzy.
- [django-admin-interface](https://github.com/fabiocaccamo/django-admin-interface) - Personalize o administrador pelo próprio administrador (cor, cabeçalho. title,logo) e janelas popup substituídas por modais.
- [django-semantic-admin](https://github.com/globophobe/django-semantic-admin) - Django Semantic UI tema de administrador.
- [django-jet-reboot](https://github.com/assem-ch/django-jet-reboot) - Django Jet é modelo moderno para a interface de administração Django com funcionalidade melhorada.
- [django-baton](https://github.com/otto-torino/django-baton) - Um aplicativo de administração django legal, moderno e responsivo baseado no bootstrap 5.
- [django-unfold](https://github.com/unfoldadmin/django-unfold) - Moderno tema de administração Django para o desenvolvimento de interface sem costura.
- [django-daisy](https://github.com/hypy13/django-daisy) - Um moderno painel django totalmente responsivo construído com daisyui.
- [django-smartbase-admin](https://github.com/SmartBase-SK/django-smartbase-admin) - Django SmartBase Admin !"Ajudada de desempenho do usuário final pronto belo painel de administração

### APIs
<!--lint disable double-link-->
- [django-rest-framework](https://github.com/encode/django-rest-framework) - APIs Web para Django.
- [django-cors-headers](https://github.com/adamchainz/django-cors-headers) - Se sua back-end e front-end estão em servidores diferentes, você precisa disso.
- [dj-rest-auth](https://github.com/iMerica/dj-rest-auth) - Autenticação para Django Rest Framework.
- [django-rest-knox](https://github.com/jazzband/django-rest-knox) - Módulo de autenticação para django-rest-auth.
- [djoser](https://github.com/sunscrapers/djoser) - Implementação REST de Django auth.
- [djaq](https://github.com/paul-wolf/djaq) - Uma API remota instantânea para modelos Django com uma linguagem de consulta poderosa.
- [django-rest-framework-simplejwt](https://github.com/jazzband/djangorestframework-simplejwt) - Tokens JSON para DRF.
- [django-webpack-loader](https://github.com/django-webpack/django-webpack-loader) - Use transparentemente o webpack com Django.
- [drf-yasg](https://github.com/axnsan12/drf-yasg) - Geração automatizada de esquemas reais Swagger/OpenAPI 2.0 do código Django REST Framework.
- [graphene-django](https://github.com/graphql-python/graphene-django) - GraphQL para Django.
- [graphene-django-filter](https://github.com/devind-team/graphene-django-filter) - Filtros avançados implementando e/ou/não operadores no GraphQL para Django.
- [django-modern-rest](https://github.com/wemake-services/django-modern-rest) - REST moderno com velocidade, tipos, async, `msgspec`, `pydantic` e outras guloseimas!
- [django-ninja](https://django-ninja.rest-framework.com/) - Django Ninja - Framework rápido Django REST baseado em anotações tipo.
- [django-tastypie](https://github.com/django-tastypie/django-tastypie) - Criando deliciosas APIs para aplicativos Django desde 2010.
- [drf-spectacular](https://github.com/tfranzel/drf-spectacular) - Geração de esquema OpenAPI 3 sã e flexível para o framework Django REST.
- [django-webhook](https://github.com/danihodovic/django-webhook) - Um aplicativo Django plug-and-play para enviar webhooks de saída em alterações de modelo.
- [strawberry-django](https://github.com/strawberry-graphql/strawberry-django) - Integração Django com Strawberry, uma biblioteca GraphQL projetada para o desenvolvimento moderno
<!--lint enable double-link-->

### Async
- [channels](https://github.com/django/channels/) - Suporte de sincronização para Django.

### Cache
- [django-cachalot](https://github.com/noripyt/django-cachalot) - Cache seu Django ORM consultas e automaticamente invalida-los.
- [django-cacheops](https://github.com/Suor/django-cacheops) - Um cache ORM liso com invalidação automática por eventos granulares.

### Comandos
- [django-extensions](https://github.com/django-extensions/django-extensions/) - Extensões de gestão personalizadas, nomeadamente `runserver_plus` e `shell_plus`.
- [django-click](https://github.com/django-commons/django-click) - Escreva os comandos de gerenciamento Django usando o [click CLI library](https://click.palletsprojects.com).
- [django-dbbackup](https://github.com/Archmonger/django-dbbackup) - Comandos de gerenciamento para ajudar a fazer backup e restaurar seu banco de dados do projeto e arquivos de mídia.
- [django-liquidb](https://github.com/Gusakovskiy/django-liquidb) - Aplicação Django para simplificar o gerenciamento de migração e mudanças nos estados do esquema db.
- [django-migration-zero](https://github.com/ambient-innovation/django-migration-zero/) - Implementação holística de padrão "migração zero" para Django cobrindo mudanças locais e ajustes de banco de dados em produção.
- [django-typer](https://github.com/django-commons/django-typer) - Escreva os comandos de gerenciamento Django usando o [Typer CLI library](https://typer.tiangolo.com).

### Configuração
<!--lint disable double-link-->
- [confidential](https://github.com/candidco/confidential) - Gerenciar configurações e segredos (com suporte a CLI).
- [django-environ](https://github.com/joke2k/django-environ) - Variáveis ambientais.
- [django-split-settings](https://github.com/wemake-services/django-split-settings) - Organize vários arquivos de configurações.
- [django-constance](https://github.com/jazzband/django-constance) - Um aplicativo Django para armazenar configurações dinâmicas em backends plugáveis (redis e backend de modelo Django incorporados) com uma integração com o aplicativo de administrador Django.
- [django-configurations](https://github.com/jazzband/django-configurations) - facilita a configuração do projeto Django confiando na composibilidade das classes Python e seguindo os princípios de [the twelve-factor app](https://12factor.net/config).
- [dynaconf](https://www.dynaconf.com/django/) - Dynaconf carrega configurações django de várias fontes (formatos de arquivos múltiplos, env vars, redis, vault, etcd), gerencia segredos, e permite diferentes estratégias de fusão todos seguindo [the twelve-factor app](https://12factor.net/config).
- [django-extra-settings](https://github.com/fabiocaccamo/django-extra-settings) - Config e gerenciar configurações extras digitadas usando apenas o administrador django.
- [django-removals](https://github.com/ambient-innovation/django-removals/) - Detectar variáveis de configuração desactualizadas através de verificações convenientes do sistema
- [environs](https://github.com/sloria/environs) - Processamento de variáveis de ambiente simplificado que vem com um [Django helper](https://github.com/sloria/environs#usage-with-django) que instala pacotes adicionais.
<!--lint enable double-link-->
- [django-classy-settings](https://github.com/funkybob/django-classy-settings) - Configurações baseadas em classes para manter seus ambientes em ordem, com fácil acesso a variáveis de ambiente digitadas.
- [django-content-settings](https://github.com/occipital/django-content-settings) - Crie e gerencie facilmente variáveis editáveis digitadas diretamente do painel de administração Django.

### Sistemas de Gestão de Conteúdo
<!--lint disable double-link-->
- [wagtail](https://github.com/wagtail/wagtail) - Popular sistema de gestão de conteúdo Django (CMS). Ver [awesome-wagtail](https://github.com/wagtail/awesome-wagtail) Também.
- [mezzanine](https://github.com/stephenmcd/mezzanine) - Quadro CMS.
- [django-cms](https://github.com/django-cms/django-cms) - CMS para Django.
- [feincms](https://github.com/feincms/feincms) - Um CMS extensível baseado em Django.
- [puput](https://github.com/APSL/puput) - Recursos do aplicativo do Blog com Wagtail.
<!--lint enable double-link-->

### Conectores de Banco de Dados
- [djongo](https://github.com/doableware/djongo) - Conector de banco de dados Django e MongoDB.

### Injecção de dependência
- [Wireup](https://github.com/maldoinc/wireup) - Injecção de dependência para Django

### ECOmmerce
- [saleor](https://github.com/saleor/saleor) - Plataforma de Comércio E Django baseada no GraphQL.
- [django-oscar](https://github.com/django-oscar/django-oscar) - Comércio electrónico orientado por domínios para Django.

### Editores
<!--lint ignore awesome-list-item-->
- [django-markdownx](https://github.com/neutronX/django-markdownx) - Plug-in abrangente Markdown construído para Django.
- [django-markdown-editor](https://github.com/agusmakmun/django-markdown-editor) - Impressionante Django Markdown Editor, suportado para Bootstrap & Semântico-UI.
- [django-business-logic](https://github.com/dgk/django-business-logic) - Estrutura visual DSL para Django.
- [django-summernote](https://github.com/lqez/django-summernote) - Summernote é um editor WYSIWYG simples.
- [django-tinymce](https://github.com/jazzband/django-tinymce) - Integração TinyMCE para Django.
- [django-prose](https://github.com/withlogicco/django-prose) - Um editor leve para criação de conteúdo.
- [django-ace](https://github.com/django-ace/django-ace) - Integração ACE para Django.

### Ficheiros/Imagens
- [django-cleanup](https://github.com/un1t/django-cleanup) - Remoção de arquivo/imagem de configuração zero para arquivos locais e remotos.
- [django-imagekit](https://github.com/matthewwithanm/django-imagekit) - Aplicativo Django para processamento de imagens para miniaturas, preto e branco e tamanhos.
- [django-pictures](https://github.com/codingjoe/django-pictures) - Biblioteca de imagens cross-browser responsivo usando códigos modernos como AVIF & WebP.
- [sorl-thumbnail](https://github.com/jazzband/sorl-thumbnail) - Miniaturas para Django.

### Formas
- [django-crispy-forms](https://github.com/django-crispy-forms/django-crispy-forms/) - Django DRY forma.
- [django-floppyforms](https://github.com/jazzband/django-floppyforms) - Controle total da renderização de formulários.
- [django-formtools](https://github.com/jazzband/django-formtools) - Para formar formulários anteriores e multistep, anteriormente parte de Django até 1.8.
- [django-widget-tweaks](https://github.com/jazzband/django-widget-tweaks) - Ajustar a renderização do campo de formulário em modelos.
- [django-autocomplete-light](https://github.com/yourlabs/django-autocomplete-light) - Adicionar completamento automático aos formulários.

### Frameworks completos
- [Django LiveView](https://github.com/Django-LiveView/liveview) - Framework para criar interfaces dinâmicas e reativas do lado do servidor com modelos Django. Atualizações em tempo real via WebSocket com manipuladores baseados em decoradores.
- [Django-Bridge](https://github.com/kaedroho/django-bridge) - A maneira simples de construir frontends React para aplicações Django.
- [ReactPy](https://github.com/reactive-python/reactpy) - É React, mas em Python. Inserir Python renderizado dinamicamente em modelos Django usando o [ReactPy-Django module](https://github.com/reactive-python/reactpy-django).
- [Reactor](https://github.com/edelvalle/reactor/) - Phoenix LiveView, mas para Django.
- [Sockpuppet](https://sockpuppet.argpar.se/) - Crie aplicações reativas com a ferramenta Django que você já conhece e ama.
- [Unicorn](https://www.django-unicorn.com/) - Um framework de componentes reativos que melhora progressivamente uma visão Django normal, faz chamadas AJAX em segundo plano e atualiza dinamicamente o DOM.

### Geral
- [django-data-browser](https://github.com/tolomea/django-data-browser) - Explorador de bases de dados interativo e amigável.
- [django-filter](https://github.com/carltongibson/django-filter) - Filtros poderosos baseados em Django QuerySets.
- [django-sql-explorer](https://github.com/explorerhq/sql-explorer) - Compartilhar dados através de consultas SQL.
- [django-tables2](https://github.com/jieter/django-tables2) - Tabelas HTML com paginação/sorção.
- [django-maintenance-mode](https://github.com/fabiocaccamo/django-maintenance-mode) - Mostra uma página de erro 503 quando o modo de manutenção está ligado.
- [django-freeze](https://github.com/fabiocaccamo/django-freeze) - Converta seu site django dinâmico para um estático com uma linha de código.
- [django-nh3](https://github.com/marksweb/django-nh3) - Django integração com para nh3 e é uma alternativa para django-bleach.
- [Weblate](https://github.com/WeblateOrg/weblate) - Weblate é um sistema de localização contínua baseado em software libre, usado por mais de 2500 projetos e empresas em mais de 165 países.
- [Django-Classy-Doc](https://github.com/nanuxbe/django-classy-doc) - Documente seu próprio código no estilo de CCBV e CDRF.
- [iommi](https://github.com/iommirocks/iommi) - Toolkit para o desenvolvimento de aplicativos CRUD sem escrever HTML ou JavaScript.

### Internacionalização (i18n)
- [django-localflavor](https://github.com/django/django-localflavor) - Uma coleção de funcionalidades que é útil para determinados países ou culturas. Anteriormente parte do núcleo Django.
- [django-modeltrans](https://github.com/zostera/django-modeltrans) - Traduzir campos de modelo Django em um JSONField.
- [django-modeltranslations](https://github.com/deschler/django-modeltranslation) -  Traduz modelos Django usando uma abordagem de registro.
- [django-rosetta](https://github.com/mbi/django-rosetta) - Rosetta fornece uma UI para ler e escrever os catálogos de gettext do seu projeto dentro do Django Admin.

### Registo
- [django-guid](https://github.com/snok/django-guid) - Injete um GUID (Correlation-ID) em cada mensagem de log em uma solicitação Django.
- [DRF-API-Logger](https://github.com/vishalanandl177/DRF-API-Logger) - Um Registrador de APIs para o seu projeto Django Rest Framework.
- [django-structlog](https://github.com/jrobichaud/django-structlog) - django-structlog é uma integração de registro estruturado para o projeto Django usando [structlog](https://www.structlog.org)

### Acompanhamento
- [django-prometheus](https://github.com/django-commons/django-prometheus) - Exportar métricas de monitoramento Django para Prometeu.
- [django-mixin](https://github.com/adinhodovic/django-mixin) - Monitorando mixin para Django-prometheus. Um conjunto de painéis Grafana e regras Prometheus para Django.

### Correio
- [django-pony-express](https://github.com/ambient-innovation/django-pony-express) - E-mails de classe, incluindo um conjunto de testes para Django.
- [django-anymail](https://github.com/anymail/django-anymail) - Infraestruturas de e-mail Django e webhooks para Amazon SES, Brevo (Sendinblue), MailerSend, Mailgun, Mailjet, Postmark, Postal, Reenviar, SendGrid, SparkPost, Unisender Go e muito mais.

### Campos de Modelo
- [django-colorfield](https://github.com/fabiocaccamo/django-colorfield) - Campo de cor para modelos de django com um widget de seleção de cores agradável.
- [django-model-utils](https://github.com/jazzband/django-model-utils) - Modelo Django mixins e utilitários.
- [django-phonenumber-field](https://github.com/django-phonenumber-field/django-phonenumber-field) - Campo modelo/formulário para números de telefone normalizados.
- [django-streamfield](https://github.com/raagin/django-streamfield) - Simple StreamField para simples administrador Django (baseado na ideia Wagtail CMS StreamField).

### Modelos
- [django-lifecycle](https://github.com/rsinger86/django-lifecycle) - Modelo declarativo ganchos de ciclo de vida, uma alternativa para sinais.
- [django-mptt](https://github.com/django-mptt/django-mptt) - Traversal de Árvore de Pré- Ordem Modificada; trabalhando com árvores de instâncias de Modelo.
- [django-taggit](https://github.com/jazzband/django-taggit/) - Marcas de modelos simples.
- [django-reversion](https://github.com/etianen/django-reversion) - Controle de versão para instâncias de modelo.
- [django-simple-history](https://github.com/django-commons/django-simple-history) - Armazene o histórico do modelo e visualize/reverta alterações do administrador.
- [django-polymorphic](https://github.com/django-commons/django-polymorphic) - Django-polimórfico simplifica usando modelos herdados em projetos Django.
- [django-recurrence](https://github.com/jazzband/django-recurrence) - Utilitário para trabalhar com datas recorrentes em Django.
- [django-treenode](https://github.com/fabiocaccamo/django-treenode) - Modelo/admin abstrato para material baseado em árvores.
- [django-auto-prefetch](https://github.com/adamchainz/django-auto-prefetch) - Preencha automaticamente os valores da chave estrangeira conforme necessário.

### Desempenho
- [django-perf-rec](https://cur.at/GHUO6cn?m=web) - Mantenha registros detalhados do desempenho do seu código Django.
- [New Relic](https://newrelic.com/python/django) - Tempo middleware, visualizações e consultas SQL.
- [Scout](https://scoutapm.com/docs/python/django) - Tempo middleware, renderização de modelos e consultas SQL com detecção automática N+1.
- [django-silk](https://github.com/jazzband/django-silk) - Perfil ao vivo e inspeção de solicitações HTTP e consultas de banco de dados.
- [py-spy](https://github.com/benfred/py-spy) - Perfilador de amostragem para programas Python.
- [pyinstrument](https://github.com/joerick/pyinstrument) - Profiler de pilha de chamadas para Python, Django, Flask, FastAPI.
- [django-zeal](https://github.com/taobojlen/django-zeal) - Detectar consultas N+1 com mensagens de erro fáceis de usar

### Permissões
- [django-role-permissions](https://github.com/vintasoftware/django-role-permissions) - Aplicativo Django para gerenciamento de permissões baseadas em funções.
- [django-guardian](https://github.com/django-guardian/django-guardian) - Permissões por objeto em Django.
- [django-rules](https://github.com/dfunckt/django-rules) - Um aplicativo minúsculo, mas poderoso, que fornece permissões de nível de objeto, construído do zero para Django.

### Procurar
- [django-haystack](https://github.com/django-haystack/django-haystack) - Procura modular por Django.
- [django-watson](https://github.com/etianen/django-watson) - Plug- in de pesquisa de texto completo.
- [django-admin-search](https://github.com/shinneider/django-admin-search) - Filtro modal para o administrador django.
- [django-elasticsearch-dsl](https://github.com/django-es/django-elasticsearch-dsl) - Integração de DSL para Django.

### Otimização do motor de busca
- [django-check-seo](https://github.com/kapt-labs/django-check-seo) - Verifique SEO de páginas.

### Segurança
- [django-csp](https://github.com/mozilla/django-csp) - Adiciona [Content-Security-Policy](http://www.w3.org/TR/CSP/) Cabeçalhos para Django.
- [django-feature-policy](https://github.com/adamchainz/django-permissions-policy) - Definir o cabeçalho HTTP de segurança do rascunho `Feature-Policy` numa aplicação Django.
- [django-protected-media](https://github.com/cobusc/django-protected-media) - Gerencia mídia que são considerados sensíveis de forma protegida.
- [DJ Checkup](https://djcheckup.com) - Executa várias verificações no seu site Django implantado para verificar erros de segurança comuns.

### Activos Estáticos
- [django-storages](https://github.com/jschneier/django-storages) - Uma única biblioteca para suportar várias infra- estruturas de armazenamento personalizadas para Django.
- [django-compressor](https://github.com/django-compressor/django-compressor/) - Comprimir JavaScript/CSS em um único arquivo em cache.
- [easy-thumbnails](https://github.com/SmileyChris/easy-thumbnails) - miniaturas de imagem para Django.
- [whitenoise](https://github.com/evansd/whitenoise) - Arquivo estático simplificado que serve para sites Python.

### Filas de Tarefa
- [django-q2](https://github.com/django-q2/django-q2) - Uma fila de tarefas distribuída por multiprocessamento para Django.
- [django-rq](https://github.com/rq/django-rq) - Integração para Redes Fila.
- [django-redis](https://github.com/jazzband/django-redis) - Infraestrutura de cache Redis completa para Django.
- [celery](https://github.com/celery/celery) - Filas de tarefas robustas e diagnósticas para projetos maiores e focados no desempenho.
- [flower](https://github.com/mher/flower) - Flower é uma ferramenta baseada na web para monitorar e administrar aglomerados de Aipos.
- [django-celery-beat](https://github.com/celery/django-celery-beat) - Um agendador de tarefas periódicas com banco de dados configurado pelo Painel de Administração de Django.
- [celery-exporter](https://github.com/danihodovic/celery-exporter) - Prometheus & Grafana monitoramento de tarefas de Aipo.
- [django-dramatiq](https://github.com/Bogdanp/django_dramatiq) - Biblioteca de processamento de tarefas com foco na simplicidade, confiabilidade e desempenho.
- [django-celery-results](https://github.com/celery/django-celery-results) - O backend do resultado do aipo com Django.
- [django-tasks](https://github.com/realOrangeOne/django-tasks) - Uma implementação de referência e backport de trabalhadores de fundo e tarefas em Django, com base em [DEP 14](https://www.djangoproject.com/weblog/2024/may/29/django-enhancement-proposal-14-background-workers/).
- [huey](https://github.com/coleifer/huey) - Uma pequena fila de tarefas para Python, com suporte Django incluindo o novo `django.tasks` API.
- [django-ox](https://github.com/oxpull/django-ox) - Trabalhador apoiado pelo banco de dados para o framework de tarefas de Django, com enqueue transacional, repetições, tarefas recorrentes e nenhum corretor para executar.
- [django-absurd](https://github.com/lincolnloop/django-absurd) - Integração Django para Absurd, um sistema de fluxo de trabalho durável Postgres-native.

### Modelos
- [django-components](https://github.com/django-components/django-components/) - Uma maneira de criar componentes de modelo reutilizáveis simples em Django.
- [django-template-partials](https://github.com/carltongibson/django-template-partials/) - Reutilizável chamado inline parciais para o Django Template Language.
- [slippers](https://mitchel.me/slippers/) - Construir componentes reutilizáveis em Django sem escrever uma única linha de Python.
- [JinjaX](https://jinjax.scaletti.dev/) - Super componentes poderes para seus modelos Jinja.
- [django-cotton](https://django-cotton.com/) - Adeus. `{% raw %}{%{% endraw %} extends, block, include {% raw %}%}{% endraw %}`Olá. `<c-component />`. Trazendo composição moderna de IU para Django.
- [htpy](https://htpy.dev/) - htpy é uma biblioteca que torna a escrita HTML em Python simples divertido e eficiente, sem uma linguagem de modelo.
- [django-suspense](https://github.com/paqstd-dev/django-suspense) - Fácil maneira de exibir um backback em modelos até que as crianças tenham terminado o carregamento (como React).

### Teste
- [django-debug-toolbar](https://github.com/django-commons/django-debug-toolbar/) - Painéis configuráveis para depurar solicitações/respostas.
- [pytest-django](https://github.com/pytest-dev/pytest-django) - Use recursos pitest em Django.
- [django-test-migrations](https://github.com/wemake-services/django-test-migrations) - Teste esquema django e migrações de dados, incluindo ordem de migrações.
- [django-test-plus](https://github.com/revsys/django-test-plus/) - Adições úteis ao TestCase padrão de Django.
- [factory-boy](https://github.com/FactoryBoy/factory_boy) - Substituição de acessórios de teste.
- [django-waffle](https://github.com/django-waffle/django-waffle) - Uma nadadeira para Django.
- [model-bakery](https://github.com/model-bakers/model_bakery) - Fábrica de objetos para Django (renomeie o legado projeto modelo mamãe).
- [django-fakery](https://github.com/fcurella/django-fakery) - Uma implementação fácil de usar dos Métodos de Criação para Django, apoiada por Faker.
- [django-pattern-library](https://github.com/torchbox/django-pattern-library) - Gerador de biblioteca padrão para modelos Django, para ajudar a testar componentes de UI.
- [storybook-django](https://github.com/torchbox/storybook-django) - Desenvolva componentes de interface Django em isolamento, com o Storybook.

### URLs
- [dj-database-url](https://github.com/jazzband/dj-database-url) - URLs de banco de dados.
- [urlman](https://github.com/andrewgodwin/urlman) - Uma maneira mais agradável de fazer URLs para modelos Django.
- [django-robots](https://github.com/jazzband/django-robots) - Este é um aplicativo Django básico para gerenciar robôs. arquivos txt seguindo o protocolo de exclusão de robôs, complementando o aplicativo Django Sitemap contrib.
- [django-redirects](https://github.com/fabiocaccamo/django-redirects) - Redireciona como deveriam ser, com controle total.

### Utilizadores
- [django-allauth](https://github.com/pennersr/django-allauth/) - Registro de usuário melhorado, incluindo auth social.
- [django-allauth-ui](https://github.com/danihodovic/django-allauth-ui/) - Modelos mais bonitos para django-allauth.
- [django-improved-user](https://github.com/jambonrose/django-improved-user) - Um usuário Django personalizado que autentica por e-mail. Segue as melhores práticas de identidade e autenticação.
- [django-organizations](https://github.com/bennylope/django-organizations/) - Contas multiusuários para projetos Django.
- [django-cas-ng](https://github.com/django-cas-ng/django-cas-ng) - Django-cas-ng é Django CAS (Central Authentication Service) 1.0/2.0/3.0 biblioteca cliente para suportar SSO (Single Sign On) e Single Logout (SLO).
- [django-guest-user](https://github.com/julianwachholz/django-guest-user) - Permitir que os visitantes usem seu site como um usuário regular e se cadastre mais tarde.

### Vistas
- [django-braces](https://github.com/brack3t/django-braces) - Misturas genéricas reutilizáveis.
- [django-easy-audit](https://github.com/soynatan/django-easy-audit) - Acompanhe as ações do usuário.
- [django-extra-views](https://github.com/AndrewIngram/django-extra-views) - Vistas genéricas extra de classe.
- [django-stronghold](https://github.com/mgrouchy/django-stronghold) - Faz com que todas as suas vistas Django façam login padrão_requerido.
- [neapolitan](https://github.com/carltongibson/neapolitan) - Vistas CRUD rápidas para Django.

## Ferramentas de Desenvolvimento

Ferramentas independentes que ajudam no desenvolvimento de projetos Django.

### Modelos
- [curlylint](https://www.curlylint.org/) - Templates HTML experimentais para Jinja, Nunjucks, Django templates, Twig, Liquid.
- [djhtml](https://github.com/rtts/djhtml) - Django/Jinja template indenter.
- [djlint](https://www.djlint.com/) - Lint & Formatar Modelos HTML.

### Análise estática
- [django-orm-lens](https://github.com/FROWNINGdev/django-orm-lens) - Análise estática de nível de modelo: diagramas ER, detecção N+1, desvio de esquema e raio de explosão em CI, sem um banco de dados ou Django boot.

## Pacotes Python

_Uma pequena lista de pacotes Python que funcionam bem com Django._

- [black](https://github.com/psf/black) - Formatação de código Python descomprometida.
- [coveragepy](https://github.com/coveragepy/coveragepy) - Medição de cobertura de código.
- [faker](https://github.com/joke2k/faker) - Faker é um pacote Python que gera dados falsos para você.
- [pillow](https://github.com/python-pillow/Pillow) - Biblioteca de Imagens Python.
- [pytest](https://github.com/pytest-dev/pytest/) - Estrutura de testes.
- [python-decouple](https://github.com/HBNetwork/python-decouple) - Separação estrita das configurações do código.
- [python-slugify](https://github.com/un33k/python-slugify) - Devolve lesmas unicode.
- [sentry-python](https://github.com/getsentry/sentry-python) - Erro ao reportar o SDK.
- [python-socketio](https://github.com/miguelgrinberg/python-socketio) - Implementação em Python do Socket. IO_ cliente em tempo real e servidor. [(create Socket.io Django server instance)](https://python-socketio.readthedocs.io/en/latest/server.html?highlight=django#creating-a-server-instance)
- [Ruff](https://github.com/astral-sh/ruff) - Uma linter Python extremamente rápida e formatadora de código, escrita em Rust.

## Recursos

### Recursos oficiais
<!--lint ignore double-link-->
- [Project Website](https://www.djangoproject.com/) - Site oficial Django.
- [Documentation](https://docs.djangoproject.com/en/dev/) - Documentação abrangente para todas as versões do Django.
- [Polls Tutorial](https://docs.djangoproject.com/en/dev/intro/tutorial01/) - Construa um tutorial de pesquisas enquanto aprende os internos de Django.
- [Source Code](https://github.com/django/django/) - Hospedado no GitHub.

### Educação
- [Django Girls Tutorial](https://tutorial.djangogirls.org/en/) - Use visualizações baseadas em funções para criar um aplicativo de blog.
- [LearnDjango](https://learndjango.com/) - Tutoriais e cursos premium sobre Django e Django REST Framework.
- [Adam Johnson](https://adamj.eu/tech/) - Adam está no Conselho Técnico de Django e escreve tutoriais regularmente.
- [Photon Designer - Django tutorials](https://photondesigner.com/articles) - Tutoriais Django de Tom Dekan sobre como construir aplicativos Django simplesmente - de como construir um mensageiro instantâneo com Django, adicionar busca instantânea, para usar o Google Drive como um banco de dados. Actualizado regularmente.
- [TestDriven](https://testdriven.io/blog/) - Vários tutoriais específicos do Django sobre temas como Docker, pagamentos e muito mais.
- [Classy Class-Based Views](https://ccbv.co.uk/) - Descrições detalhadas de métodos/propriedades/atributos para cada visualização genérica baseada em classes.
- [Classy Django REST Framework](http://www.cdrf.co) - Descrições detalhadas com métodos/atributos para visualizações baseadas em classes DRF e serializadores.
- [Simple is Better than Complex](https://simpleisbetterthancomplex.com/) - Site regularmente atualizado com muitos tutoriais e dicas sobre Django.
- [Full Stack Python's Django Page](https://www.fullstackpython.com/django.html) - Explicação da filosofia Django e links para outros recursos e tutoriais.
- [RealPython](https://realpython.com/tutorials/django/) - Muitos tutoriais de alta qualidade sobre Django.
- [Mozilla Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django) - Criar uma aplicação de biblioteca de empréstimos.
- [Matt Layman](https://www.mattlayman.com) - Tutoriais regulares e mergulhos profundos sobre tópicos Django.
- [Django Styleguide](https://github.com/HackSoftware/Django-Styleguide) - Guia de estilo para Django com melhores práticas e exemplos.
- [Django Template Tags and Filters](https://www.djangotemplatetagsandfilters.com/) - Documentos adicionais nos 57 filtros de modelo embutidos da Django e 27 tags de modelo.
- [Django for Everybody](https://www.dj4e.com/) - Um curso completo para iniciantes webdev focado em Django.
- [CS50W](https://cs50.harvard.edu/web/2020/) - Curso introdutório da Universidade de Harvard para desenvolvimento web, explica Django como backend framework.
- [Better Simple](https://www.better-simple.com/blog/django/) - Artigos de Tim Schilling sobre o desenvolvimento de Django, as melhores práticas e o ecossistema Django.

### Comunidade
<!--lint disable double-link-->
- [Django Forum](https://forum.djangoproject.com/) - Conselho Oficial do Discurso.
- [Community Page](https://www.djangoproject.com/community/) - Apresentando feeds de Community Blog Posts, Jobs e muito mais.
- [Local Django Communities Page](https://www.djangoproject.com/community/local/) - Com eventos locais em todo o mundo.
- [Django Users Google Group](https://groups.google.com/forum/#!forum/django-users/) - Conselho de discussão muito ativo para perguntas / respostas.
- [Developers Google Group](https://groups.google.com/forum/#!forum/django-developers/) - Apenas para contribuições para Django.
- [Mastodon](https://fosstodon.org/@django) - Para anúncios oficiais sobre atualizações, correções de segurança, etc.
- [X (formerly Twitter)](https://x.com/djangoproject/) - Para anúncios oficiais sobre atualizações, correções de segurança, etc.
- [Discord Server](https://discord.com/invite/xcRH6mN4fa) - Django Discord Community.
- Canal de IRC - Converse com outros usuários de Django em irc://irc.freenode.net/django.
- [Djangonaut Space](https://djangonaut.space) - Programa gratuito de peer-mentoring para a comunidade Django para lançar pessoas no universo de contribuições de código aberto.
<!--lint enable double-link-->

### Conferências

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

### Conselhos de Trabalho

- [Django Job Board](https://djangojobboard.com/) - Um conselho de trabalho Django que também agrega outros conselhos de trabalho. Anteriormente Django News Jobs.
- [Django Jobs](https://djangojobs.net) - Trabalhos de Django postando para contratar desenvolvedores de Django Python.
- [Python.org Job Boards](https://www.python.org/jobs/) - Embora não exclusivamente para Django, este conselho de trabalho é hospedado pelo site oficial Python e apresenta uma variedade de oportunidades de trabalho relacionadas com Python e Django.

### Boletims informativos

- [Django News](https://django-news.com) - Boletim semanal sobre anúncios, artigos, projetos e palestras.

### Podcasts

- [Django Chat](https://djangochat.com/) - Um podcast semanal de William Vincent e Django Fellow Carlton Gibson com discussões dos principais conceitos de Django e convidados regulares.
- [Django Brew](https://djangobrew.com/) - Um divertido podcast movido a cafeína sobre o framework web Django de Adam Hill e Sangeeta Jadoonanan.
- [TalkPython](https://talkpython.fm/) - O principal podcast Python com episódios ocasionais em Django.
- [Running in Production](https://runninginproduction.com/tags/django) - Não mais ativo, mas um grande backlog de episódios em pilhas de tecnologia Django.

### Vídeos

- [DjangoTV](https://djangotv.com) - Sua fonte para vídeos e tutoriais de conferência Django.
- [PyVideo](https://pyvideo.org) - PyVideo é um índice de mídias relacionadas com Python.

### Livros
Para uma lista completa de livros impressos, confira [DjangoBook.com](https://djangobook.com/).

_Django 5_
- [Django for APIs, Fifth Edition](https://learndjango.com/courses/django-for-apis/)
- [Boost Your Django DX](https://adamchainz.gumroad.com/l/byddx)
- [Django 5 By Example](https://www.packtpub.com/en-us/product/django-5-by-example-9781805125457)
- [Django in Action](https://www.manning.com/books/django-in-action)
- [Django for Beginners, Fifth Edition](https://learndjango.com/courses/django-for-beginners/)

## Hospedagem

### PaaS (Plataformas-as-a-Service)
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

### IaaS (Infraestrutura-como-Serviço)
- [Digital Ocean](https://www.digitalocean.com)
- [Linode](https://www.linode.com)
- [Amazon Lightsail](https://aws.amazon.com/lightsail/)
- [Hetzner](https://www.hetzner.com)

### Serviços de implantação
_Serviços hospedados que implementam seu aplicativo para servidores que você aluga em outro lugar._
- [Appliku](https://appliku.com) - Serviço de implantação focado em Django para servidores no DigitalOcean, Hetzner, AWS e Linode.
- [DeployHQ](https://www.deployhq.com) - Envia do Git para seus servidores em SSH, SFTP ou S3, com etapas de compilação e rollbacks.

### Implementação Auto-Hosted
_Ferramentas de código aberto que implementam seu aplicativo em servidores que você possui._
- [Coolify](https://coolify.io) - Self-hosted PaaS com uma interface web para aplicativos e bancos de dados Docker, com um plano de controle de nuvem pago opcional.
- [Dokploy](https://dokploy.com) - Self-hosted PaaS com uma interface web, construído em Docker e Traefik, com um plano de controle de nuvem pago opcional.
- [CapRover](https://caprover.com) - Self-hosted PaaS com uma interface web e aplicativos de um clique, construído em Docker Swarm.
- [Kamal](https://kamal-deploy.org) - Envie contêineres para qualquer servidor sobre SSH com tempo de inatividade zero, de Basecamp.
- [Dokku](https://dokku.com) - PaaS alimentado por Docker com git implantes estilo Heroku.
- [Piku](https://github.com/piku/piku) - Tiny Heroku-estilo PaaS para git push implementa para um único servidor.

## Projectos

### Caldeira
- [cookiecutter-django](https://github.com/cookiecutter/cookiecutter-django/) - Um projeto de arranque encorpado, altamente personalizável.
- [django-base-site](https://github.com/epicserve/django-base-site/) - Um site Django com muitos pacotes de terceiros comuns pré-instalados.
- [djangox](https://github.com/wsvincent/lithium/) - As baterias incluíram o projeto inicial para Pip, Pipenv ou Docker.
- [django-docker-template](https://github.com/amerkurev/django-docker-template) - Dockerized Django com Postgres, Gunicorn e Traefik (com auto-renovação Let's Encriptar).
- [django-startproject](https://github.com/jefftriplett/django-startproject) - Django iniciar modelo de projeto com baterias.
- [wemake-django-template](https://github.com/wemake-services/wemake-django-template/) - Modelo Django de borda de sangramento focado na qualidade do código e segurança.
- [cookiecutter-vue-django](https://github.com/ilikerobots/cookiecutter-vue-django) - Django + Projeto Vue starter fundindo modelos Vue SFCs & Django.
- [sidewinder](https://github.com/stribny/sidewinder/) - Um kit Django starter que se concentra em bons padrões, experiência de desenvolvedor e implantação.
- [Falco](https://github.com/falcopackages/falco-cli) - Melhore sua experiência de desenvolvedor Django: CLI e Guias para o Desenvolvedor Django Moderno.
- [BH2](https://codeberg.org/trey/bh2) - Obter um novo Django site iniciado em um Djiffy
- [django-react-boilerplate](https://github.com/vintasoftware/django-react-boilerplate) - A Django, React, Tailwind, Webpack projeto caldeiraplate

### Projectos de Código Aberto
- [Blog app with users and forms](https://github.com/wsvincent/djangoforbeginners/tree/master/ch7-blog-app-with-users/)
- [Newspaper app with custom user model, full user auth](https://github.com/wsvincent/djangoforbeginners/tree/master/ch15-comments)
- [Behavior-Driven Development with Aloe](https://github.com/testdrivenio/django-aloe-bdd/)
- [Image Sharing Blog](https://github.com/MeNsaaH/soMedia)
- [Bootcamp: An enterprise social network](https://github.com/vitorfs/bootcamp)
- [Zulip](https://github.com/zulip/zulip/) - Conversa de equipa de código aberto.
- [django-job-portal](https://github.com/manjurulhoque/django-job-portal) - Aplicação de portal de trabalho usando Django.
- [Built with Django](https://builtwithdjango.com) - Lista de projetos Django incríveis.
- [PostHog](https://github.com/PostHog/posthog) - Análise de produtos de código aberto.
- [HyperKitty](https://gitlab.com/mailman/hyperkitty) - Uma interface web para acessar arquivos GNU Mailman v3.
- [Healthchecks](https://github.com/healthchecks/healthchecks) - Uma ferramenta de monitoramento de Cron escrita em Python & Django.
- [Flagsmith](https://github.com/Flagsmith/flagsmith) - Recursos de código aberto Flagging, Configuração Remota e testes AB.
- [OpenContracts](https://github.com/Open-Source-Legal/OpenContracts) - Plataforma de análise de documentos de nível empresarial que combina processamento automatizado de PDF, incorporação de vetores e integração LLM.
- [Baserow](https://github.com/baserow/baserow) - Base de dados sem código aberto e alternativa Airtable construída com Django e Vue.js.
- [Django CRM Admin](https://github.com/DjangoCRM/django-crm) - Código aberto Python CRM construído inteiramente no Django Admin Site.
- [linkding](https://github.com/sissbruecker/linkding) - Gerenciador de favoritos self-hosted que é projetado para ser mínimo, rápido e fácil de configurar usando Docker.
- [pythonic-news](https://github.com/sebst/pythonic-news) - Clone do Hacker News.
- [Revel](https://github.com/letsrevel/revel-backend) - Gestão de eventos e plataforma de tickets com organizações, triagem de participantes com base em questionários, check-in QR e pagamentos Stripe.
- [venueless](https://github.com/venueless/venueless) - Plataforma para eventos online e híbridos com streams ao vivo, chat e salas de vídeo, da equipe pretix.
- [pretix](https://github.com/pretix/pretix) - Inscrição para conferências, festivais, concertos e outros eventos.
- [pretalx](https://github.com/pretalx/pretalx) - Ferramenta de planejamento de conferências para a chamada de trabalhos, agendamento e gerenciamento de palestrantes.
- [ioe](https://github.com/zhtyyx/ioe) - Gestão de lojas de varejo auto-hospedadas com inventário, checkout de vendas e contas de membros.

## Django REST Quadro

_A maneira mais popular de construir APIs web com Django._

### Recursos do DRF

<!--lint disable double-link-->
- [Official Documentation](https://www.django-rest-framework.org/)
- [DRF Source Code](https://github.com/encode/django-rest-framework)
- [awesome-django-rest-framework](https://github.com/nioperas06/awesome-django-rest-framework)
<!--lint enable double-link-->

### Tutoriais DRF

<!--lint ignore double-link-->
- [Official REST Framework - A Beginner's Guide](https://learndjango.com/tutorials/official-django-rest-framework-tutorial-beginners)
- [Building APIs with Django and DRF](https://books.agiliq.com/projects/django-api-polls-tutorial/en/latest/)
- [DRF with React](https://www.valentinog.com/blog/drf/)
- [Making React and Django play well together](https://fractalideas.com/blog/making-react-and-django-play-well-together/)

## Bacalhau

_Wagtail, o poderoso CMS para sites modernos._

### Recursos Wagtail
<!--lint disable double-link-->
- [Official website](https://wagtail.org/)
- [Developer documentation](https://docs.wagtail.org/en/stable/)
- [User documentation](https://guide.wagtail.org/en-latest/)
- [Wagtail Source Code](https://github.com/wagtail/wagtail/)
- [awesome-wagtail](https://github.com/wagtail/awesome-wagtail)
- [This week in Wagtail](https://wagtail.org/this-week-in-wagtail/) - Um e-mail (a maioria) semanal com atualizações da equipe central Wagtail.
- [Wagtail Space](https://www.wagtail.space/) - Conferências de Wagtail ao redor do mundo.
- [Wagtail events](https://wagtail.org/events/) - Eventos online e presenciais Wagtail.
<!--lint enable double-link-->

Uma maneira conveniente de navegar e pesquisar repositórios a partir desta lista está disponível em [awesome.lvtd.dev/lists/awesome-django](https://awesome.lvtd.dev/lists/awesome-django/).
