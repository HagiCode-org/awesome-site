# Awesome Flask [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Uma micro web framework para Python e o ecossistema de extensão ao seu redor.

Tutoriais, palestras e vídeos nesta lista são gratuitos. Cursos pagos não são aceitos.

<p align="right">
  <a href="https://flask.palletsprojects.com/">
    <img src="flask-icon.svg" width="72" alt="Flask">
  </a>
</p>

## Conteúdo

- [Recursos oficiais](#official-resources)
- [Extensões](#extensions)
  - [Administração](#admin)
  - [APIs](#apis)
  - [Autenticação](#auth)
  - [Cache](#cache)
  - [Bases de dados](#databases)
  - [Ferramentas de Desenvolvimento](#developer-tools)
  - [E- mail](#email)
  - [Formas e Validação](#forms-and-validation)
  - [Pesquisa de Texto Completo](#full-text-search)
  - [Segurança](#security)
  - [Filas de Tarefa](#task-queues)
  - [Utilitários](#utils)
- [Recursos](#resources)
  - [Comunidade](#community)
  - [Tutoriais](#tutorials)
  - [Livros](#books)
  - [Conversas](#talks)
  - [Vídeos](#videos)
- [Projetos](#projects)
  - [Modelos iniciais](#boilerplates)
  - [Projetos de código aberto](#open-source-projects)
- [Hospedagem](#hosting)

## Recursos oficiais

- [Flask](https://flask.palletsprojects.com/) - Documentação oficial para versões atuais e anteriores.
- [Flaskr Tutorial](https://flask.palletsprojects.com/tutorial/) - Tutorial oficial que constrói um pequeno blog.
- [Source Code](https://github.com/pallets/flask) - Flask em si, hospedado por Pallets.
- [Pallets-Eco](https://github.com/pallets-eco) - Extensões comunitárias mantidas ao lado dos projectos principais.
- [Quart](https://github.com/pallets/quart) - Contraparte oficial da ASGI da Flask, com uma API compatível.

## Extensões

### Administração

- [Flask-Admin](https://github.com/pallets-eco/flask-admin) - Interface de administração extensível para gerenciar dados da aplicação.

### APIs

- [APIFlask](https://github.com/apiflask/apiflask) - Framework de API web com validação de marshmallow e geração OpenAPI.
- [Connexion](https://github.com/spec-first/connexion) - Framework Spec-first OpenAPI que pode ser executado no Flask.
- [Eve](https://github.com/pyeve/eve) - Framework de API REST alimentado por Flask e MongoDB.
- [Flasgger](https://github.com/flasgger/flasgger) - OpenAPI e Swagger UI para vistas Flask.
- [Flask-Rebar](https://github.com/plangrid/flask-rebar) - Flask, marshmallow e OpenAPI combinados para serviços REST.
- [Flask-RESTful](https://github.com/flask-restful/flask-restful) - Ajudantes leves para construir APIs REST.
- [Flask-RESTX](https://github.com/python-restx/flask-restx) - Garfo comunitário de Flask-RESTPlus com documentação Swagger.
- [flask-smorest](https://github.com/marshmallow-code/flask-smorest) - Framework Marshmallow-primeiro REST com OpenAPI automático.

### Autenticação

- [Authlib](https://github.com/authlib/authlib) - OAuth 1, OAuth 2, e OpenID Connect clientes e servidores.
- [Authomatic](https://github.com/authomatic/authomatic) - Cliente OAuth e OpenID.
- [Flask-Dance](https://github.com/singingwolfboy/flask-dance) - OAuth consumidor com provedores embutidos, como GitHub e Google.
- [Flask-HTTPAuth](https://github.com/miguelgrinberg/Flask-HTTPAuth) - Autenticação básica, digest e token para rotas.
- [Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended) - Autenticação JWT com tokens de atualização e reivindicações de grãos finos.
- [Flask-Login](https://github.com/maxcountryman/flask-login) - Gerenciamento de login de usuário baseado em sessão.
- [Flask-Praetorian](https://github.com/dusktreader/flask-praetorian) - Autenticação JWT e autorização baseada em funções para APIs.
- [Flask-Pundit](https://github.com/anurag90x/flask-pundit) - Autorização baseada em políticas inspirada em Rails Pundit.
- [Flask-Security](https://github.com/pallets-eco/flask-security) - Gestão de contas, autenticação e autorização. Continua Flask-Security-Too.
- [Flask-Session](https://github.com/pallets-eco/flask-session) - Sessões de servidor para o Flask.
- [Flask-User](https://github.com/lingthio/Flask-User) - Registro de usuário personalizável, login e gerenciamento de conta.

### Cache

- [Flask-Caching](https://github.com/pallets-eco/flask-caching) - Suporte de cache com múltiplas infra- estruturas.

### Bases de dados

- [Flask-Alembic](https://github.com/pallets-eco/flask-alembic) - Migrações alembicas ligadas a uma base de dados Flask-SQLAlchemy.
- [Flask-Migrate](https://github.com/miguelgrinberg/Flask-Migrate) - Migrações de banco de dados para Flask-SQLAlchemy via Alembic.
- [Flask-MongoEngine](https://github.com/MongoEngine/flask-mongoengine) - Integração MongoEngine com suporte WTForms.
- [Flask-PyMongo](https://github.com/mongodb-labs/flask-pymongo) - Integração PyMongo para MongoDB.
- [Flask-SQLAlchemy](https://github.com/pallets-eco/flask-sqlalchemy) - Integração SQLAlchemy para Flask.
- [Advanced Alchemy](https://github.com/litestar-org/advanced-alchemy) - Acompanhante SQLAlchemy com repositórios, ajudantes Alembic e uma extensão Flask de primeira parte.

### Ferramentas de Desenvolvimento

- [Elastic APM](https://github.com/elastic/apm-agent-python) - Monitoramento de desempenho da aplicação para o Flask.
- [Flask-DebugToolbar](https://github.com/pallets-eco/flask-debugtoolbar) - Barra de depuração no navegador, enviada do Django.
- [Flask-MonitoringDashboard](https://github.com/flask-dashboard/Flask-MonitoringDashboard) - Monitoramento automático de desempenho para serviços Flask.
- [Flask-Testing](https://github.com/jarus/flask-testing) - Ajudantes Unitest para aplicações Flask.
- [Mixer](https://github.com/klen/mixer) - Fábrica de objetos para modelos SQLAlchemy e Django.
- [nplusone](https://github.com/jmcarp/nplusone) - Detecta consultas N+1 ao usar o Flask-SQLAlchemy.
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-python-contrib) - Traceamento e instrumentação de métricas, incluindo Flask.
- [pytest-flask](https://github.com/pytest-dev/pytest-flask) - Dispositivos Pytest para aplicações Flask.
- [Sentry](https://github.com/getsentry/sentry-python) - Erro ao rastrear o SDK com uma integração do Flask.

### E- mail

- [Flask-Mail](https://github.com/pallets-eco/flask-mail) - Enviar email SMTP para o Flask.
- [Flask-Mailman](https://github.com/waynerv/flask-mailman) - Porto do sistema de correio de Django para Flask.

### Formas e Validação

- [Flask-Marshmallow](https://github.com/marshmallow-code/flask-marshmallow) - Integração Marshmallow para serialização e validação.
- [Flask-Pydantic](https://github.com/pallets-eco/flask-pydantic) - Validação Pydantic para vistas Flask.
- [Flask-WTF](https://github.com/pallets-eco/flask-wtf) - Integração WTForms com CSRF, upload de arquivos e reCAPTCHA.

### Pesquisa de Texto Completo

- [flask-msearch](https://github.com/honmaple/flask-msearch) - Pesquisa de texto completo para Flask, com suporte Whoosh.
- [SQLAlchemy-Searchable](https://github.com/falcony-io/sqlalchemy-searchable) - Pesquisa de texto completo para modelos SQLAlchemy no PostgreSQL.

### Segurança

- [Flask-Bcrypt](https://github.com/maxcountryman/flask-bcrypt) - Bcriptografar a senha.
- [Flask-CORS](https://github.com/corydolphin/flask-cors) - Suporte ao Compartilhamento de Recursos Cross-Origin (CORS).
- [Flask-Limiter](https://github.com/alisaifee/flask-limiter) - Taxa limite para as rotas Flask.
- [Flask-SeaSurf](https://github.com/maxcountryman/flask-seasurf) - Proteção CSRF para Flask.
- [Flask-Talisman](https://github.com/wntrblm/flask-talisman) - Cabeçalhos de segurança e aplicação HTTPS.

### Filas de Tarefa

- [Celery](https://github.com/celery/celery) - Fila de tarefas distribuída comumente usada com o Flask.
- [Dramatiq](https://github.com/Bogdanp/dramatiq) - Alternativa rápida ao aipo, com [Flask-Dramatiq](https://flask-dramatiq.readthedocs.io/) disponível.
- [Flask-RQ](https://github.com/pallets-eco/flask-rq) - Integração da Rede Fila (RQ) para Flask e Quart.
- [Huey](https://github.com/coleifer/huey) - Pequena fila de tarefas com o Redis.

### Utilitários

- [Flask-Assets](https://github.com/miracle2k/flask-assets) - Integração Webassets para agrupar e minimizar arquivos estáticos.
- [Flask-Babel](https://github.com/python-babel/flask-babel) - Internacionalização e localização via Babel.
- [Flask-GoogleMaps](https://github.com/flask-extensions/Flask-GoogleMaps) - Adicionar Google Maps em modelos Flask.
- [flask-graphql](https://github.com/graphql-python/flask-graphql) - Suporte GraphQL para Flask.
- [Flask-HTMLmin](https://github.com/hamidfzm/Flask-HTMLmin) - Minificação HTML para respostas de Flask.
- [flask-jsonrpc](https://github.com/cenobites/flask-jsonrpc) - Suporte JSON-RPC para Flask.
- [Flask-Moment](https://github.com/miguelgrinberg/Flask-Moment) - Ajudantes moment.js para datas em modelos Jinja.
- [Flask-Paginate](https://github.com/lixxu/flask-paginate) - Ajudantes de paginação para o Flask.
- [flask-s3](https://github.com/e-dard/flask-s3) - Servir ativos estáticos da Amazon S3.
- [Flask-SocketIO](https://github.com/miguelgrinberg/Flask-SocketIO) - Socket. IO integração para Flask.
- [Frozen-Flask](https://github.com/Frozen-Flask/Frozen-Flask) - Congela um aplicativo Flask em um site estático.

## Recursos

### Comunidade

- [Discord](https://discord.gg/pallets) - Servidor comunitário Pallets. Use os canais de ajuda do Flask.
- [Reddit](https://www.reddit.com/r/flask/) - Flask subreddit.
- [Stack Overflow](https://stackoverflow.com/questions/tagged/flask) - Perguntas marcadas`flask`.

### Tutoriais

- [The Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) - Série longa cobrindo uma aplicação Flask completa.
- [Discover Flask](https://github.com/realpython/discover-flask) - Série Full-stack Flask da Real Python.
- [Flaskr TDD](https://github.com/mjhea0/flaskr-tdd) - Introdução ao Flask, desenvolvimento baseado em testes e JavaScript.

### Livros

- [Explore Flask](https://explore-flask.readthedocs.io/en/latest/) - Livro gratuito sobre padrões Flask e estrutura de projeto.
- [Flask Web Development](https://www.oreilly.com/library/view/flask-web-development/9781491991725/) - O'Reilly livro de Miguel Grinberg que constrói uma verdadeira aplicação.

### Conversas

- [Advanced Flask Patterns](https://speakerdeck.com/mitsuhiko/advanced-flask-patterns) - Padrões de Armin Ronacher.
- [Flasky Goodness](https://speakerdeck.com/kennethreitz/flasky-goodness) - Fala de Kenneth Reitz.
- [Domain Driven Design with Flask](https://speakerdeck.com/mikedebo/domain-driven-design-dot-dot-dot-with-flask) - Aplicando ideias DDD em Flask.

### Vídeos

- [PyVideo](https://pyvideo.org/search.html?q=flask) - Conferência marcou Flask.
- [Python Flask Tutorial](https://www.youtube.com/playlist?list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH) - Série completa de aplicativos da web por Corey Schafer.

## Projetos

### Modelos iniciais

- [cookiecutter-flask](https://github.com/cookiecutter-flask/cookiecutter-flask) - Cookiecutter template com Bootstrap, Webpack e autenticação.
- [fbone](https://github.com/imwilsonxu/fbone) - esqueleto clássico Flask com um layout de aplicação estruturado.
- [Flask-AppBuilder](https://github.com/dpgaspar/Flask-AppBuilder) - Construtor rápido de aplicativos com segurança, CRUD automático e gráficos.
- [Flask-Foundation](https://github.com/JackStouffer/Flask-Foundation) - Aplicação inicial de boas práticas.
- [uwsgi-nginx-flask-docker](https://github.com/tiangolo/uwsgi-nginx-flask-docker) - Imagem de Docker com uWSGI, Nginx e Flask.

### Projetos de código aberto

- [Apache Airflow](https://github.com/apache/airflow) - Plataforma para autor, agenda e monitorar fluxos de trabalho.
- [Apache Superset](https://github.com/apache/superset) - Plataforma de exploração e visualização de dados.
- [FlaskBB](https://github.com/flaskbb/flaskbb) - Software de fórum clássico construído com Flask.
- [Indico](https://github.com/indico/indico) - Sistema de gestão de eventos desenvolvido no CERN.
- [PythonBuddy](https://github.com/ethanchewy/PythonBuddy) - Editor Python online com verificação de sintaxe ao vivo.
- [Redash](https://github.com/getredash/redash) - Consulte e visualize dados de muitas fontes.
- [SecureDrop](https://github.com/freedomofpress/securedrop) - Sistema de submissão Whistleblower para redação.
- [SimpleLogin](https://github.com/simple-login/app) - Email serviço alias que protege caixas de entrada pessoais.
- [SkyLines](https://github.com/skylines-project/skylines) - Rastreamento ao vivo e base de dados de voo para planar.
- [Timesketch](https://github.com/google/timesketch) - Análise de tempo forense colaborativa.

## Hospedagem

- [Flask Deployment Options](https://flask.palletsprojects.com/en/stable/deploying/) - Notas oficiais sobre servidores e plataformas WSGI.
- [Fly.io](https://fly.io/docs/python/frameworks/flask/) - Coloque o Flask perto dos usuários em Fly Machines.
- [Google Cloud Run](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service) - Hospedagem de container que funciona bem com Flask.
- [PythonAnywhere](https://help.pythonanywhere.com/pages/Flask/) - Ambiente Python hospedado com suporte Flask de primeira classe.
- [Render](https://render.com/docs/deploy-flask) - Web services e background workers para Flask.
- [Zappa](https://github.com/zappa/Zappa) - Envie aplicativos WSGI para AWS Lambda e API Gateway.

## Contribuir

Sugestões são bem-vindas. Por favor leia [CONTRIBUTING.md](CONTRIBUTING.md) Primeiro. Entradas históricas e não mantidas [archived.md](archived.md).
