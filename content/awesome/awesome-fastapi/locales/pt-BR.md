<!--lint disable double-link-->

# Awesome FastAPI | [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> Uma lista de coisas incríveis relacionadas com FastAPI.

[FastAPI](https://fastapi.tiangolo.com/) é um framework web Python moderno, de alto desempenho, com baterias que é perfeito para construir APIs RESTful.

## Conteúdo

- [Extensões de terceiros](#third-party-extensions)
  - [Administração](#admin)
  - [Autenticação](#auth)
  - [Cibersegurança](#cybersecurity)
  - [Bases de dados](#databases)
  - [Injecção de dependência](#dependency-injection)
  - [Ferramentas de Desenvolvimento](#developer-tools)
  - [E- mail](#email)
  - [Utilitários](#utils)
- [Recursos](#resources)
  - [Recursos oficiais](#official-resources)
  - [Recursos externos](#external-resources)
  - [Podcasts](#podcasts)
  - [Artigos](#articles)
  - [Tutoriais](#tutorials)
  - [Conversas](#talks)
  - [Vídeos](#videos)
  - [Cursos](#courses)
  - [Melhores Práticas](#best-practices)
- [Hospedagem](#hosting)
  - [PaaS](#paas)
  - [IaaS](#iaas)
  - [Servidores](#serverless)
- [Projetos](#projects)
  - [Modelo inicial](#boilerplate)
  - [Acoplagem de Imagens](#docker-images)
  - [Projetos de código aberto](#open-source-projects)
- [Patrocinadores](#sponsors)

## Extensões de terceiros

### Administração

- [FastAdmin](https://github.com/vsdudakov/fastadmin) - Painel de administração fácil de usar para FastAPI (também Flask e Django), inspirado pelo Django Admin.
- [FastAPI Admin](https://github.com/fastapi-admin/fastapi-admin) - Painel de administração funcional que fornece uma interface de usuário para executar operações CRUD em seus dados. Atualmente só trabalha com o ORM Tortoise.
- [FastAPI Amis Admin](https://github.com/amisadmin/fastapi-amis-admin) - Um framework de administração FastAPI de alto desempenho, eficiente e facilmente extensível.
- [Piccolo Admin](https://github.com/piccolo-orm/piccolo_admin) - Uma GUI de administrador poderoso e moderno, usando o Piccolo ORM.
- [SQLAlchemy Admin](https://github.com/smithyhq/sqladmin) - Painel de administração para FastAPI/Starlette que funciona com modelos SQLAlchemy.
- [Starlette Admin](https://github.com/jowilf/starlette-admin) - Estrutura de administração para FastAPI/Starlette, suportando SQLAlchemy, SQLModel, MongoDB e ODMantic.


### Autenticação

- [AuthX](https://github.com/yezz123/AuthX) - Autenticação personalizável e gerenciamento de Oauth2 para FastAPI.
- [FastAPI Auth](https://github.com/dmontagu/fastapi-auth) - Autenticação pluggable que suporta o fluxo de senha OAuth2 com acesso JWT e atualizar tokens.
- [FastAPI Azure Auth](https://github.com/Intility/fastapi-azure-auth) - Autenticação do Azure AD para suas APIs com suporte único e multilocatário.
- [FastAPI Casbin Auth](https://github.com/apache/casbin-python-fastapi-casbin-auth) - Autorização que suporta vários modelos de controle de acesso como RBAC, ReBAC e ABAC através de Casbin.
- [FastAPI Cloud Auth](https://github.com/tokusumi/fastapi-cloudauth) - Integração simples entre FastAPI e serviços de autenticação em nuvem (AWS Cognito, Auth0, Firebase Authentication).
- [FastAPI Login](https://github.com/maxrdu/fastapi_login) - Gestão de contas e autenticação (baseada em [Flask-Login](https://github.com/maxcountryman/flask-login)).
- [FastAPI JWT Auth](https://github.com/IndominusByte/fastapi-jwt-auth) - Autorização JWT (baseada em [Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended)).
- [FastAPI Permissions](https://github.com/holgi/fastapi-permissions) - Permissões de nível de linha.
- [FastAPI Security](https://github.com/jacobsvante/fastapi-security) - Implementa autenticação e autorização como dependências no FastAPI.
- [FastAPI Simple Security](https://github.com/mrtolkien/fastapi_simple_security) - Segurança de chave fora da caixa API gerenciável através de operações de caminho.
- [FastAPI Users](https://github.com/fastapi-users/fastapi-users) - Gestão de contas, autenticação, autorização.
- [FastAPI Zitadel Auth](https://github.com/cleanenergyexchange/fastapi-zitadel-auth) - OAuth2 usando a plataforma IAM [Zitadel](https://github.com/zitadel/zitadel).

### Cibersegurança

- [FastAPI Guard](https://github.com/rennf93/fastapi-guard) - Limitação de Taxa, Banir Automaticamente IPs, Detecção de Ataque de Penetração, Lista Branca/lista negra (países, IPs, Provedores de Nuvem), Filtragem de Agente de Usuário, Geolocalização, Integração de Redes para persistência e muito mais.
- [secure](https://github.com/TypeError/secure) - Defina e aplique cabeçalhos de segurança HTTP de forma consistente em aplicativos FastAPI usando o middleware ASGI e um único objeto de configuração.

### Bases de dados

#### ORMs

- [Edgy ORM](https://github.com/dymmond/edgy) - Bancos de dados complexos simples.
- [FastAPI SQLAlchemy](https://github.com/mfreeborn/fastapi-sqlalchemy) - Integração simples entre FastAPI e [SQLAlchemy](https://www.sqlalchemy.org/).
- [Fastapi-SQLA](https://github.com/dialoguemd/fastapi-sqla) - Extensão SQLAlchemy para FastAPI com suporte para paginação, assíncio e pytest.
- [FastAPIwee](https://github.com/Ignisor/FastAPIwee) - Uma maneira simples de criar API REST baseada em [PeeWee](https://github.com/coleifer/peewee) modelos.
- [FastSQLA](https://github.com/hadrien/FastSQLA) - Extensão Async SQLAlchemy 2.0+ para FastAPI com suporte ao SQLModel, paginação integrada e muito mais.
- [GINO](https://github.com/python-gino/gino) - Um ORM assíncrono leve construído em cima do núcleo SQLAlchemy para Python assíncio.
  - [FastAPI Example](https://github.com/leosussan/fastapi-gino-arq-uvicorn)
- [ORM](https://github.com/encode/orm) - Uma ORM sincronizada.
- [ormar](https://collerek.github.io/ormar/) - Ormar é um ORM assync que usa a validação Pydantic e pode ser usado diretamente em solicitações e respostas FastAPI para que você fique com apenas um conjunto de modelos para manter. Migrações alembicas incluídas.
  - [FastAPI Example](https://collerek.github.io/ormar/latest/fastapi/) - Utilizar FastAPI com ormar.
- [Piccolo](https://github.com/piccolo-orm/piccolo) - Um ORM assync e construtor de consultas, suportando Postgres e SQLite, com baterias (migrações, segurança, etc).
  - [FastAPI Examples](https://github.com/piccolo-orm/piccolo_examples) - Usando FastAPI com Piccolo.
- [Tortoise ORM](https://tortoise.github.io) - Um fácil de usar assíncio ORM (Object Relational Mapper) inspirado em Django.
  - [FastAPI Example](https://tortoise.github.io/examples/fastapi.html) - Exemplo da integração Tortoise-ORM FastAPI.
  - [Tutorial: Setting up Tortoise ORM with FastAPI](https://web.archive.org/web/20200523174158/https://robwagner.dev/tortoise-fastapi-setup/)
  - [Aerich](https://github.com/tortoise/aerich) - Ferramentas de migração de ORM de tartaruga.
- [Saffier ORM](https://github.com/tarsil/saffier) - O único Python ORM que você vai precisar.
- [SQLModel](https://sqlmodel.tiangolo.com/) - SQLModel (que é alimentado por Pydantic e SQLAlchemy) é uma biblioteca para interagir com bases de dados SQL de código Python, com objetos Python.

#### Construtores de Consultas

- [asyncpgsa](https://github.com/CanopyTax/asyncpgsa) - Uma embalagem ao redor [asyncpg](https://github.com/MagicStack/asyncpg) para utilização com [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/).
- [Databases](https://github.com/encode/databases) - Construtor de consultas SQL Assync que funciona em cima do [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/) linguagem de expressão.
- [PyPika](https://github.com/kayak/pypika) - Um construtor de consultas SQL que expõe toda a riqueza da linguagem SQL.

#### ODMs

- [Beanie](https://github.com/BeanieODM/beanie) - ODM Python Assíncrono para o MongoDB, baseado em [Motor](https://motor.readthedocs.io/en/stable/) e [Pydantic](https://pydantic.dev/docs/), que suporta dados e migrações esquema fora da caixa.
- [MongoEngine](https://github.com/MongoEngine/mongoengine) - A Document-Object Mapper (think ORM, mas para bases de dados de documentos) para trabalhar com MongoDB de Python.
- [Motor](https://motor.readthedocs.io/) - Controlador Python Assíncrono para o MongoDB.
- [ODMantic](https://art049.github.io/odmantic/) - Assincio MongoDB ODM integrado com [Pydantic](https://pydantic.dev/docs/).
- [PynamoDB](https://github.com/pynamodb/PynamoDB) - Uma interface pitônica para o DynamoDB da Amazon.

#### Outras Ferramentas

- [Pydantic-SQLAlchemy](https://github.com/tiangolo/pydantic-sqlalchemy) - Converter modelos SQLAlchemy para [Pydantic](https://pydantic.dev/docs/) modelos.
- [FastAPI-CamelCase](https://nf1s.github.io/fastapi-camelcase/) - Suporte CamelCase JSON para FastAPI utilizando [Pydantic](https://pydantic.dev/docs/).
  - [CamelCase Models with FastAPI and Pydantic](https://medium.com/analytics-vidhya/camel-case-models-with-fast-api-and-pydantic-5a8acb6c0eee) - Acompanhando post do blog do autor da extensão.
 
### Injecção de dependência

- [modern-di](https://github.com/modern-python/modern-di) - Quadro de injeção de dependência com recipiente de IoC e [FastAPI integration](https://github.com/modern-python/modern-di-fastapi).
- [Wireup](https://github.com/maldoinc/wireup) - Injete dependências com zero sobrecarga de tempo de execução no FastAPI; Compartilhe dependências através da web, cli ou outras interfaces.

### Ferramentas de Desenvolvimento

- [FastAPI Code Generator](https://github.com/koxudaxi/fastapi-code-generator) - Crie um aplicativo FastAPI a partir de um arquivo OpenAPI, permitindo o desenvolvimento baseado em esquemas.
- [FastAPI Client Generator](https://github.com/dmontagu/fastapi_client) - Gere um cliente de API amigável ao mypy e IDE a partir de uma especificação OpenAPI.
- [FastAPI Cruddy Framework](https://github.com/mdconaway/fastapi-cruddy-framework) - Uma biblioteca companheira para FastAPI projetado para trazer a produtividade de desenvolvimento de Ruby on Rails, Ember.js ou Sails.js para o ecossistema FastAPI.
- [FastAPI MVC](https://github.com/fastapi-mvc/fastapi-mvc) - Ferramenta de produtividade de desenvolvedores para fazer APIs de alta qualidade prontas para produção FastAPI.
- [FastAPI Profiler](https://github.com/sunhailin-Leo/fastapi_profiler) - A FastAPI Middleware de joerick/pyinstrument para verificar o seu desempenho de serviço.
- [FastAPI Versioning](https://github.com/DeanWay/fastapi-versioning) - Versão da API.
- [Jupyter Notebook REST API](https://github.com/Invictify/Jupter-Notebook-REST-API) - Execute seus notebooks Jupyter como terminais de API RESTful.
- [Manage FastAPI](https://github.com/ycd/manage-fastapi) - Ferramenta CLI para gerar e gerenciar projetos FastAPI.
- [msgpack-asgi](https://github.com/florimondmanca/msgpack-asgi) - Automático [MessagePack](https://msgpack.org/) Negociação de conteúdo.
- [python-cqrs](https://github.com/pypatterns/python-cqrs) - Framework de Arquitetura conduzido por eventos com CQRS, Transaction Outbox, orquestração Saga, integração FastAPI/FastStream perfeita.

### E- mail

- [FastAPI Mail](https://github.com/sabuhish/fastapi-mail) - Sistema de correio leve para enviar e-mails e anexos (individual e a granel).

### Utilitários

- [Apitally](https://github.com/apitally/apitally-py) - Análise de API, monitoramento e solicitação de registro para FastAPI.
- [ASGI Correlation ID](https://github.com/snok/asgi-correlation-id) - Pedir ID loging middleware.
- [FastAPI Cache](https://github.com/comeuplater/fastapi_cache) - Um simples sistema de cache leve.
- [FastAPI Cache](https://github.com/long2ice/fastapi-cache) - Uma ferramenta para cache FastAPI resposta e resultados de função, com suporte para Redis, Memcached, DynamoDB, e backends em memória.
- [FastAPI Chameleon](https://github.com/mikeckennedy/fastapi-chameleon) - Adiciona a integração da linguagem do modelo Camaleão ao FastAPI.
- [FastAPI CloudEvents](https://github.com/sasha-tkachev/fastapi-cloudevents) - [CloudEvents](https://cloudevents.io/) integração para FastAPI.
- [FastAPI Contrib](https://github.com/identixone/fastapi_contrib) - Conjunto opinado de utilitários: paginação, middleware de autenticação, permissões, manipuladores de exceção personalizados, suporte ao MongoDB e middleware Opentracing.
- [FastAPI FastCRUD](https://github.com/benavlabs/fastcrud)) - Robust assync CRUD operations and flexible endpoint creation utilities.
- [FastAPI Events](https://github.com/melvinkcx/fastapi-events) - Biblioteca de envio/manejo de eventos assíncronos para FastAPI e Starlette.
- [FastAPI FeatureFlags](https://github.com/Pytlicek/fastapi-featureflags) - Simples implementação de sinalizadores de recursos para FastAPI.
- [FastAPI Injectable](https://github.com/JasperSui/fastapi-injectable) - Use a injeção de dependência do FastAPI fora dos manipuladores de rota em ferramentas CLI, tarefas de fundo, trabalhadores e muito mais.
- [FastAPI Jinja](https://github.com/AGeekInside/fastapi-jinja) - Adiciona integração da linguagem de modelo Jinja ao FastAPI.
- [FastAPI Lazy](https://github.com/yezz123/fastango) - Pacote preguiçoso para iniciar seu projeto usando FastAPI.
- [FastAPI Limiter](https://github.com/long2ice/fastapi-limiter) - Um limitador de taxa de solicitação para FastAPI.
- [FastAPI Listing](https://github.com/danielhasan1/fastapi-listing) - Uma biblioteca para projetar/construir APIs de listagem usando arquitetura baseada em componentes, paginador de consulta embutido, classificador, django-admin como filtros e muito mais.
- [FastAPI MQTT](https://github.com/sabuhish/fastapi-mqtt) - Uma extensão para o protocolo MQTT.
- [FastAPI Opentracing](https://github.com/wesdu/fastapi-opentracing) - Suporte de middleware Opentracing e rastreamento de banco de dados para FastAPI.
- [FastAPI Pagination](https://github.com/uriyyo/fastapi-pagination) - Paginação para FastAPI.
- [FastAPI Plugins](https://github.com/madkote/fastapi-plugins) - Plug-ins Redis e Scheduler.
- [FastAPI ServiceUtils](https://github.com/skallfass/fastapi_serviceutils) - Gerador para criar serviços de API.
- [FastAPI Shield](https://github.com/jymchng/fastapi-shield) - Biblioteca General FastAPI para escrever quaisquer decoradores genéricos capazes de injeção de dependências preguiçosas.
- [FastAPI SocketIO](https://github.com/pyropy/fastapi-socketio) - Fácil integração para FastAPI e SocketIO.
- [FastAPI Utilities](https://github.com/fastapiutils/fastapi-utils) - Utilitários reutilizáveis: visualizações baseadas em classe, resposta inferindo roteador, tarefas periódicas, tempo middleware, sessão SQLAlchemy, simplificação de especificações OpenAPI.
- [FastAPI Viewsets](https://github.com/svalench/fastapi_viewsets) - Django REST Visualização inspirada em frameworkSets para FastAPI, habilitando a organização de endpoint CRUD baseada em classe com registro automático de rota.
- [FastAPI Websocket Pub/Sub](https://github.com/authorizon/fastapi_websocket_pubsub) - O padrão clássico de pub/sub tornou-se facilmente acessível e escalável através da web e através da sua nuvem em tempo real.
- [FastAPI Websocket RPC](https://github.com/authorizon/fastapi_websocket_rpc) - RPC (bidirecional JSON RPC) sobre Websockets tornou fácil, robusto e pronto para a produção.
- [OpenTelemetry FastAPI Instrumentation](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/instrumentation/opentelemetry-instrumentation-fastapi) - A biblioteca fornece instrumentação automática e manual de frameworks web FastAPI, instrumentando solicitações http atendidas por aplicativos que utilizam o framework.
- [Prerender Python Starlette](https://github.com/BeeMyDesk/prerender-python-starlette) - Starlette middleware para Prerender.
- [Prometheus FastAPI Instrumentator](https://github.com/trallnag/prometheus-fastapi-instrumentator) - Um Instrumento Prometheus configurável e modular para sua aplicação FastAPI.
- [SlowApi](https://github.com/laurents/slowapi) - Limitador de taxa (baseado em [Flask-Limiter](https://flask-limiter.readthedocs.io)).
- [Starlette Context](https://github.com/tomwojcik/starlette-context) - Permite armazenar e acessar os dados de solicitação em qualquer lugar do seu projeto, útil para registro.
- [Starlette Exporter](https://github.com/stephenhillier/starlette_exporter) - Mais uma integração prometheus para FastAPI e Starlette.
- [Starlette OpenTracing](https://github.com/acidjunk/starlette-opentracing) - Suporte Opentracing para Starlette e FastAPI.
- [Starlette Prometheus](https://github.com/perdy/starlette-prometheus) - Integração Prometheus para FastAPI e Starlette.
- [Strawberry GraphQL](https://github.com/strawberry-graphql/strawberry) - Biblioteca Python GraphQL baseada em classes de dados.
- [Pydantic Resolve](https://github.com/KLR-Pattern/pydantic-resolve) -  Transforma a classe pidântica em um poderoso recipiente de computação composível, introduzindo ganchos de resolução e pós-processo.

## Recursos

### Recursos oficiais

- [Documentation](https://fastapi.tiangolo.com/) - Documentação abrangente.
- [Tutorial](https://fastapi.tiangolo.com/tutorial/) - Tutorial oficial mostrando como usar FastAPI com a maioria de suas características, passo a passo.
- [Source Code](https://github.com/fastapi/fastapi) - Hospedado no GitHub.
- [Discord](https://discord.com/invite/VQjSZaeJmf) - Converse com outros usuários do FastAPI.

### Recursos externos

- [TestDriven.io FastAPI](https://testdriven.io/blog/topics/fastapi/) - Vários artigos específicos do FastAPI que se concentram no desenvolvimento e teste de APIs RESTful prontas para produção, servindo modelos de aprendizado de máquina e muito mais.

### Podcasts

- [Build The Next Generation Of Python Web Applications With FastAPI](https://www.pythonpodcast.com/fastapi-web-application-framework-episode-259/) - Neste episódio de [Podcast Init](https://www.pythonpodcast.com/), o criador da FastAPI,[Sebastián Ramirez](https://tiangolo.com/), compartilha suas motivações para construir FastAPI e como funciona sob o capô.
- [FastAPI on PythonBytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) - Boa visão geral do projeto.

### Artigos

- [FastAPI has Ruined Flask Forever for Me](https://medium.com/data-science/fastapi-has-ruined-flask-forever-for-me-73916127da)
- [Why we switched from Flask to FastAPI for production machine learning](https://medium.com/@calebkaiser/why-we-switched-from-flask-to-fastapi-for-production-machine-learning-765aab9b3679) - Veja em profundidade por que você pode querer se mudar de Flask para FastAPI.

### Tutoriais

- [Async SQLAlchemy with FastAPI](https://stribny.name/posts/fastapi-asyncalchemy/) - Saiba como usar SQLAlchemy de forma assíncrona.
- [Deploy Machine Learning Models with Keras, FastAPI, Redis and Docker](https://medium.com/analytics-vidhya/deploy-machine-learning-models-with-keras-fastapi-redis-and-docker-4940df614ece)
- [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/) - Desenvolva e teste uma API assíncrona com FastAPI, Postgres, Pytest e Docker usando Test-Driven Development.
- [FastAPI for Flask Users](https://amitness.com/posts/fastapi-vs-flask) - Aprenda FastAPI com uma comparação de código lado a lado com Flask.
- [FastAPI Session Leak Detection](https://www.logiclooptech.dev/fastapi-session-leak-detection-sqlalchemy-long-running/) - Diagnose e corrigir sessões SQLAlchemy de longa duração e exaustão de piscina de conexão na produção.
- [Implementing FastAPI Services – Abstraction and Separation of Concerns](https://camillovisini.com/coding/abstracting-fastapi-services) - FastAPI aplicação e estrutura de serviço para uma base de código mais mantemível.
- [Introducing FARM Stack - FastAPI, React, and MongoDB](https://www.mongodb.com/docs/languages/python/pymongo-driver/current/integrations/fastapi-integration/) - Começando com uma pilha completa de aplicativos FastAPI.
- [Multitenancy with FastAPI, SQLAlchemy and PostgreSQL](https://mergeboard.com/blog/6-multitenancy-fastapi-sqlalchemy-postgresql/) - Saiba como preparar aplicativos FastAPI multi-tenant.
- [Real-time data streaming using FastAPI and WebSockets](https://stribny.name/posts/real-time-data-streaming-using-fastapi-and-websockets/) - Saiba como transmitir dados do FastAPI diretamente em um gráfico em tempo real.
- [Running FastAPI applications in production](https://stribny.name/posts/fastapi-production/) - Use Gunicorn com sistema para implantações de produção.
- [Serving Machine Learning Models with FastAPI in Python](https://medium.com/@8B_EC/tutorial-serving-machine-learning-models-with-fastapi-in-python-c1a27319c459) - Use FastAPI para implantar e servir modelos de aprendizado de máquina de forma rápida e fácil em Python como API RESTful.
- [Streaming video with FastAPI](https://stribny.name/posts/fastapi-video/) - Saiba como servir streams de vídeo.
- [Using Hypothesis and Schemathesis to Test FastAPI](https://testdriven.io/blog/fastapi-hypothesis/) - Aplicar testes baseados em propriedades no FastAPI.

### Conversas

- [PyConBY 2020: Serve ML models easily with FastAPI](https://www.youtube.com/watch?v=z9K5pwb0rt8) - A partir da palestra de Sebastian Ramirez você aprenderá a construir facilmente uma API web pronta para produção (JSON) para seus modelos ML com FastAPI, incluindo as melhores práticas por padrão.
- [PyCon UK 2019: FastAPI from the ground up](https://www.youtube.com/watch?v=3DLwPcrE5mA) - Este talk mostra como construir uma API REST simples para um banco de dados do zero usando FastAPI.

### Vídeos

- [Building a Stock Screener with FastAPI](https://www.youtube.com/watch?v=5GorMC2lPpk) - Se você construir um rastreador de estoque baseado na web com FastAPI, você será introduzido em muitas das funcionalidades do FastAPI, incluindo modelos Pydantic, injeção de dependência, tarefas de fundo e integração SQLAlchemy.
- [Building Web APIs Using FastAPI](https://www.youtube.com/watch?v=Pe66M8mn-wA) - Use FastAPI para construir uma interface de programação de aplicativos web (A API RESTful).
- [FastAPI - A Web Framework for Python](https://www.youtube.com/watch?v=PUhio8CprhI&list=PL5gdMNl42qynpY-o43Jk3evfxEKSts3HS) - Veja como fazer validações numéricas com FastAPI.
- [FastAPI vs. Django vs. Flask](https://www.youtube.com/watch?v=9YBAOYQOzWs) - Qual é o melhor framework para Python em 2020? Quem usa o assync/await o melhor? Qual é o mais rápido?
- [Serving Machine Learning Models As API with FastAPI](https://www.youtube.com/watch?v=mkDxuRvKUL8) - Crie uma API de aprendizado de máquina com FastAPI.

### Cursos

- [Test-Driven Development with FastAPI and Docker](https://testdriven.io/courses/tdd-fastapi/) - Saiba como construir, testar e implantar um microserviço de resumo de texto com Python, FastAPI e Docker.
- [Modern APIs with FastAPI and Python](https://training.talkpython.fm/courses/modern-fastapi-apis) - Um curso projetado para você criar novas APIs rodando na nuvem com FastAPI rapidamente.
- [Full Web Apps with FastAPI Course](https://training.talkpython.fm/courses/full-html-web-applications-with-fastapi) - Você aprenderá a construir aplicativos web completos com FastAPI, equivalente ao que você pode fazer com Flask ou Django.
- [The Definitive Guide to Celery and FastAPI](https://testdriven.io/courses/fastapi-celery/) - Saiba como adicionar a Celery a uma aplicação FastAPI para fornecer processamento assíncrono de tarefas.

### Melhores Práticas

- [FastAPI Best Practices](https://github.com/zhanymkanov/fastapi-best-practices) - Coleta de melhores práticas em um repositório GitHub.
- [FastAPI-Dishka-FastStream](https://github.com/faststream-community/fastapi-dishka-faststream) - Combina FastAPI, dispka, faststream, sqlalchemy, pydantic.
- [FastAPI Clean Example](https://github.com/ivan-borovets/fastapi-clean-example) - Exemplo de infraestrutura de arquitetura limpa construído com FastAPI.

## Hospedagem

### PaaS

(Plataformas como serviço)

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [Fly](https://fly.io)([tutorial](https://fly.io/docs/python/frameworks/fastapi/),[Deploy from a Git repo](https://github.com/fly-apps/hello-fastapi))
- [Google App Engine](https://cloud.google.com/appengine)
- [Heroku](https://www.heroku.com/)([Step-by-step tutorial](https://tutlinks.com/create-and-deploy-fastapi-app-to-heroku/),[ML model on Heroku tutorial](https://testdriven.io/blog/fastapi-machine-learning/))
- [Microsoft Azure App Service](https://azure.microsoft.com/en-us/products/app-service/)

### IaaS

(Infraestrutura como serviço)

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Google Compute Engine](https://cloud.google.com/compute)
- [Digital Ocean](https://www.digitalocean.com/)
- [Linode](https://www.linode.com/)

### Servidores

Estruturas:

- [Chalice](https://github.com/aws/chalice)
- [Mangum](https://mangum.io/) - Adaptador para executar aplicativos ASGI com AWS Lambda e API Gateway.
- [Vercel](https://vercel.com/) - (anteriormente Zeit) ([example](https://github.com/Snailedlt/Markdown-Videos)).

Computação:

- [AWS Lambda](https://aws.amazon.com/lambda/)([example](https://github.com/iwpnd/fastapi-aws-lambda-example))
- [Google Cloud Functions](https://cloud.google.com/functions)
- [Azure Functions](https://azure.microsoft.com/en-us/products/functions/)
- [Google Cloud Run](https://cloud.google.com/run)([example](https://github.com/anthonycorletti/cloudrun-fastapi))

## Projetos

### Modelo inicial

- [Full Stack FastAPI and PostgreSQL - Base Project Generator](https://github.com/fastapi/full-stack-fastapi-template) - Modelo FastAPI de pilha completa
, que inclui FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub Actions, HTTPS automático, e muito mais (desenvolvido pelo criador do FastAPI,[Sebastián Ramírez](https://github.com/tiangolo)).
- [FastAPI and Tortoise ORM](https://github.com/prostomarkeloff/fastapi-tortoise) - Modelo poderoso mas simples para APIs web w/ FastAPI (como framework web) e Tortoise-ORM (para trabalhar através do banco de dados sem dor de cabeça).
- [FastAPI + SQLAlchemy 2 + PostgreSQL Template](https://github.com/modern-python/fastapi-sqlalchemy-template) - Iniciador dockerizado com injeção de dependência (modern-di), migrações alembic, e um fluxo de trabalho justfile.
- [FastAPI Model Server Skeleton](https://github.com/eightBEC/fastapi-ml-skeleton) - Aplicativo esquelético para servir modelos de aprendizado de máquina prontos para produção.
- [cookiecutter-spacy-fastapi](https://github.com/microsoft/cookiecutter-spacy-fastapi) - Implementações rápidas de modelos spaCy com FastAPI.
- [cookiecutter-fastapi](https://github.com/arthurhenrique/cookiecutter-fastapi) - Modelo Cookiecutter para projetos FastAPI usando: Aprendizagem de máquina, Poesia, Pipelines Azure e pitest.
- [openapi-python-client](https://github.com/openapi-generators/openapi-python-client) - Gere clientes modernos do FastAPI Python (via FastAPI) do OpenAPI.
- [Pywork](https://github.com/vutran1710/YeomanPywork) - [Yeoman](https://yeoman.io/) gerador para andaimes um aplicativo FastAPI.
- [fastapi-gino-arq-uvicorn](https://github.com/leosussan/fastapi-gino-arq-uvicorn) - Modelo para uma API async REST de alto desempenho, em Python. FastAPI + GINO + Arq + Uvicorn (w/ Redis e PostgreSQL).
- [FastAPI and React Template](https://github.com/Buuntu/fastapi-react) - Placa de caldeira de cookie de pilha completa usando FastAPI, TypeScript, Docker, PostgreSQL e React.
- [FastAPI Nano](https://github.com/rednafi/fastapi-nano) - Modelo FastAPI simples com arquitetura padrão de fábrica.
- [FastAPI template](https://github.com/s3rius/FastAPI-template) - Gerador de projeto FastAPI flexível e leve. Ele inclui suporte para SQLAlchemy, várias bases de dados, CI/CD, Docker e Kubernetes.
- [FastAPI on Google Cloud Run](https://github.com/anthonycorletti/cloudrun-fastapi) - Caldeira para construção de APIs com FastAPI, SQLModel e Google Cloud Run.
- [FastAPI with Firestore](https://github.com/anthonycorletti/firestore-fastapi) - Caldeira para construção de API com FastAPI e Google Cloud Firestore.
- [fastapi-alembic-sqlmodel-async](https://github.com/vargasjona/fastapi-alembic-sqlmodel-async) - Este é um modelo de projeto que usa FastAPI, Alembic e async SQLModel como ORM.
- [fastapi-starter-project](https://github.com/mirzadelic/fastapi-starter-project) - Um modelo de projeto que usa FastAPI, SQLModel, Alembic, Pytest, Docker, GitHub Actions CI.
- [Full Stack FastAPI and MongoDB - Base Project Generator](https://github.com/mongodb-labs/full-stack-fastapi-mongodb) - Full stack, moderno gerador de aplicativos web, que inclui FastAPI, MongoDB, Docker, Acelery, React frontend, HTTPS automático e muito mais.
- [Uvicorn Poetry FastAPI Project Template](https://github.com/max-pfeiffer/uvicorn-poetry-fastapi-project-template) - Modelo de projeto Cookiecutter para iniciar uma aplicação FastAPI. Funciona em um recipiente Docker com servidor ASGI Uvicorn em Kubernetes. Suporta arquiteturas de CPU AMD64 e ARM64.
- [FastAPI Agent Blueprint](https://github.com/Mr-DooSun/fastapi-agent-blueprint) - Modelo em camadas de DDD onde classes de base genéricas dão async CRUD sem placa de caldeira, domínios auto-registro na descoberta e ganchos pré-comprometidos bloqueiam as importações de camadas cruzadas no momento do commit.

### Acoplagem de Imagens

- [inboard](https://github.com/br3ndonland/inboard) - Imagens do Docker para ligar seus aplicativos FastAPI e ajudá-lo a enviar mais rápido.
- [uvicorn-gunicorn-fastapi-docker](https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker) - Imagem Docker com Uvicorn gerenciada por Gunicorn para aplicações web FastAPI de alto desempenho em Python 3.7 e 3.6 com ajuste automático de desempenho.
- [uvicorn-gunicorn-poetry](https://github.com/max-pfeiffer/uvicorn-gunicorn-poetry) - Imagem docker com Gunicorn usando trabalhadores Uvicorn para executar aplicativos web Python. Utiliza poesia para gerenciar dependências e configurar um ambiente virtual. Suporta arquiteturas de CPU AMD64 e ARM64.
- [uvicorn-poetry](https://github.com/max-pfeiffer/uvicorn-poetry) - Docker image with Uvicorn ASGI server for executing Python web applications on Kubernetes. Utiliza poesia para gerenciar dependências e configurar um ambiente virtual. Suporta arquiteturas de CPU AMD64 e ARM64.

### Projetos de código aberto

- [Astrobase](https://github.com/anthonycorletti/astrobase) - Implementações simples, rápidas e seguras em qualquer lugar.
- [Awesome FastAPI Projects](https://github.com/Kludex/awesome-fastapi-projects) - Lista organizada de projetos que usam FastAPI.
- [Bitcart](https://github.com/bitcart/bitcart) - Plataforma para comerciantes, usuários e desenvolvedores que oferece fácil configuração e uso.
- [Bali](https://github.com/bali-framework/bali) - Simplifique a base de desenvolvimento de Microservices nativos na nuvem em FastAPI e gRPC.
- [Bunnybook](https://github.com/pietrobassi/bunnybook) - Uma pequena rede social construída com FastAPI, React+RxJs, Neo4j, PostgreSQL e Redis.
- [Coronavirus-tg-api](https://github.com/egbakou/coronavirus-tg-api) - API para rastrear o surto de coronavírus global (COVID-19, SARS-CoV-2).
- [Dispatch](https://github.com/Netflix/dispatch) - Gerencie incidentes de segurança.
- Exemplo do CRUD FastAPI:
  - [Async flavor](https://github.com/testdrivenio/fastapi-crud-async)
  - [Sync Flavor](https://github.com/testdrivenio/fastapi-crud-sync)
- [FastAPI with Observability](https://github.com/Blueswen/fastapi-observability) - Observe o aplicativo FastAPI com três pilares de observação: Traces (Tempo), Metrics (Prometheus), Logs (Loki) no Grafana através de OpenTelemetry e OpenMetrics.
- [FastAPI Websocket Broadcast](https://github.com/kthwaite/fastapi-websocket-broadcast) - Websocket 'broadcast' demo.
- [FastAPI with Celery, RabbitMQ, and Redis](https://github.com/GregaVrbancic/fastapi-celery) - Exemplo mínimo utilizando FastAPI e Aipo com RabbitMQ para a fila de tarefas, Redis para a infraestrutura de Aipo e Flower para monitorar as tarefas de Aipo.
- [FuturamaAPI](https://github.com/koldakov/futuramaapi) - Um playground REST e GraphQL construído com as melhores práticas, fornecendo WebSockets, SSE, callbacks, mensagens secretas e muito mais.
- [JeffQL](https://github.com/yezz123/JeffQL/) - API de autenticação simples e login usando GraphQL e JWT.
- [JSON-RPC Server](https://github.com/smagafurov/fastapi-jsonrpc) - Servidor JSON-RPC baseado no FastAPI.
- [Mailer](https://github.com/rclement/mailer) - Micro-serviço de correio simples para sites estáticos.
- [Markdown-Videos](https://github.com/Snailedlt/Markdown-Videos) - API para gerar miniaturas para incorporar em seu conteúdo de marcação.
- [Nemo](https://github.com/harshitsinghai77/nemo-backend) - Seja produtivo com Nemo.
- [OPAL (Open Policy Administration Layer)](https://github.com/authorizon/opal) - Atualizações de autorização em tempo real em cima do Open-Policy; construído com FastAPI, Typer e FastAPI WebSocket pub/sub.
- [OSBot-Fast-API](https://github.com/owasp-sbot/OSBot-Fast-API) - Embalagem FastAPI tipo seguro que fornece middleware, rastreamento de eventos HTTP, integração AWS Lambda, utilitários de teste e conversão automática entre Type Safe, Pydantic e dataclasses.
- [Polar](https://github.com/polarsource/polar) - Uma plataforma de financiamento e monetização para desenvolvedores, construída com FastAPI, SQLAlchemy, Alembic e Arq.
- [RealWorld Example App - mongo](https://github.com/markqiu/fastapi-mongodb-realworld-example-app)
- [RealWorld Example App - postgres](https://github.com/nsidnev/fastapi-realworld-example-app)
- [redis-streams-fastapi-chat](https://github.com/leonh/redis-streams-fastapi-chat) - Um simples aplicativo de chat com suporte Redis Streams usando Websockets, Assynio e FastAPI/Starlette.
- [Sprites as a service](https://github.com/ljvmiranda921/sprites-as-a-service) - Gere seus avatares pessoais de 8 bits usando Cellular Automata.
- [Slackers](https://github.com/uhavin/slackers) - Abra a API dos Webhooks.
- [TermPair](https://github.com/cs01/termpair) - Visualize e controle terminais do seu navegador com criptografia de ponta a ponta.
- [Universities](https://github.com/ycd/universities) - Serviço API para obter informações sobre +9600 universidades em todo o mundo.

## Patrocinadores

Por favor, apoie este projeto de código aberto verificando nossos patrocinadores:

<a href="https://testdriven.io/courses/tdd-fastapi/?ref=awesome-fastapi" target="_blank" title="Learn to build high-quality web apps with best practices"><img src="images/testdriven.svg"></a>
