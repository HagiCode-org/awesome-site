# Seleção de ferramentas para bancos de dados [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Lista comunitária dos instrumentos de base de dados

Aqui coletaremos informações sobre ferramentas experimentais incríveis e úteis que simplificam o trabalho com bancos de dados para DBA, DevOps, Desenvolvedores e meros mortais.

Sinta-se livre para adicionar informações sobre seus próprios db-tools ou seus db-tools favoritos de terceiros.

Para atualizações em `awesome-db-tools` e pensamentos/news sobre bases de dados/ferramentas/SQL siga-me em [@GraminMaksim](https://twitter.com/GraminMaksim)

## Índice
- [IDE](#ide)
- [GUI](#gui)
- [CLI](#cli)
- [Esquema](#schema)
  - [Alterações](#changes)
  - [Geração de código](#code-generation)
  - [Figuras](#diagrams)
  - [Documentação](#documentations)
  - [Desenho](#design)
  - [Amostras](#samples)
- [API](#api)
- [Plataformas de aplicações](#application-platforms)
- [Cópia de Segurança](#backup)
- [Clonagem](#cloning)
- [Monitorização/Estatísticas/Performance](#monitoringstatisticsperformance)
  - [Prometheus](#prometheus)
  - [Zabbix](#zabbix)
- [Teste](#testing)
- [HA/Failover/Sharding](#hafailoversharding)
- [Kubernetes](#kubernetes)
- [Ajuste de Configuração](#configuration-tuning)
- [DevOps](#devops)
- [Relatórios](#reporting)
- [Distribuição](#distributions)
- [Segurança](#security)
- [SQL](#sql)
  - [Analisadores](#analyzers)
  - [Geradores de código](#code-generators)
  - [Extensões](#extensions)
  - [Quadros](#frameworks)
  - [Formadores](#formatters)
  - [Jogos](#games)
  - [Analisadores](#parsers)
  - [Über SQL](#über-sql)
  - [Protocolo do servidor de idiomas](#language-server-protocol)
  - [Aprendizagem](#learning)
  - [Plano](#plan)
  - [Programas](#scripts)
- [Dados](#data)
  - [Catálogo](#catalog)
  - [Linhagem](#lineage) 
  - [Geração/Masking/Subsetting](#generationmaskingsubsetting)
  - [Perfis de dados](#data-profilers)
  - [Replicação](#replication) 
  - [Comparar](#compare) 
- [Papel](#papers)
- [Aprendizagem de máquina](#machine-learning)

## IDE
- [AnySQL Maestro](https://www.sqlmaestro.com/products/anysql/maestro) - Primeira ferramenta de administração multi-uso para gerenciamento, controle e desenvolvimento de banco de dados.
- [Aqua Data Studio](https://www.aquafold.com/aquadatastudio) - Software de produtividade para Desenvolvedores de Banco de Dados, DBAs e Analisadores
- [Coginiti Pro](https://www.coginiti.co/products/coginiti-pro/) - Moderno IDE para analistas e engenheiros de análise com poderosa funcionalidade de script e grades.
- [Database .net](http://fishcodelib.com/Database.htm) - Múltipla ferramenta de gerenciamento de banco de dados com suporte para mais de 20 bancos de dados.
- [Database Workbench](https://www.upscene.com/database_workbench/) - IDE completo para o projeto, desenvolvimento e testes de banco de dados para Oracle, SQL Server, PostgreSQL, MySQL, MariaDB, Firebird, InterBase, SQLite e NexusDB.
- [DataGrip](https://www.jetbrains.com/datagrip) - IDE Cross-Platform para bancos de dados e SQL por JetBrains
- [DataStation](https://github.com/multiprocessio/datastation) - Consultar, script e visualizar facilmente dados de cada banco de dados, arquivo e API.
- [DBeaver](https://github.com/dbeaver/dbeaver) - Gerente de banco de dados universal gratuito e cliente SQL.
- [dbForge Edge](https://www.devart.com/dbforge/edge/) - Solução multidatabase para desenvolvimento, design, gerenciamento e administração de bancos de dados MySQL, MariaDB, SQL Server, Oracle, PostgreSQL e vários serviços em nuvem .
- [dbForge Studio for MySQL](https://www.devart.com/dbforge/mysql/studio) - Universal IDE for MySQL e MariaDB desenvolvimento de banco de dados, gestão e administração .
- [dbForge Studio for Oracle](https://www.devart.com/dbforge/oracle/studio) - IDE poderoso para o gerenciamento, administração e desenvolvimento da Oracle
- [dbForge Studio for PostgreSQL](https://www.devart.com/dbforge/postgresql/studio) - Ferramenta de GUI para gerenciar e desenvolver bancos de dados e objetos.
- [dbForge Studio for SQL Server](https://www.devart.com/dbforge/sql/studio) - Poderoso ambiente de desenvolvimento integrado para o desenvolvimento, gestão, administração, análise de dados e relatórios do SQL Server.
- [DBHawk](https://www.datasparc.com/) - Datasparc oferece segurança de banco de dados, gerenciamento de banco de dados, governança de banco de dados e análise de dados - tudo em uma solução.
- [dbKoda](https://github.com/SouthbankSoftware/dbkoda) - Moderno (JavaScript/Electron framework), IDE de código aberto para MongoDB. Ele tem recursos para apoiar o desenvolvimento, administração e ajuste de desempenho em bases de dados MongoDB.
- [IBExpert](http://www.ibexpert.net/ibe) - Ferramenta GUI abrangente para Firebird e InterBase.
- [HeidiSQL](https://github.com/HeidiSQL/HeidiSQL) - Um cliente leve para gerenciar MySQL, MSSQL e PostgreSQL, escrito em Delphi.
- [Kangaroo](https://github.com/dbkangaroo/kangaroo) - Uma ferramenta de administração e cliente SQL alimentado por IA para bancos de dados populares (SQLite / MySQL / PostgreSQL / etc) no Windows / macOS / Linux, design de mesa de suporte, consulta, modelo, sincronização, exportação / importação etc, foco em conforto, diversão e desenvolvimento amigável.
- [KeepTool](https://keeptool.com) - Um conjunto profissional de ferramentas para desenvolvedores de banco de dados Oracle, administradores e usuários avançados de aplicativos .
- [MySQL Workbench](https://www.mysql.com/products/workbench) - Ferramenta visual unificada para arquitetos de banco de dados, desenvolvedores e DBAs.
- [Navicat](https://www.navicat.com/en/products#navicat) - Uma ferramenta de desenvolvimento de banco de dados que permite que você se conecte simultaneamente aos bancos de dados MySQL, MariaDB, SQL Server, Oracle, PostgreSQL e SQLite a partir de uma única aplicação.
- [Oracle SQL Developer](http://www.oracle.com/technetwork/developer-tools/sql-developer) - Ambiente de desenvolvimento livre e integrado que simplifica o desenvolvimento e o gerenciamento do Banco de Dados Oracle em implantações tradicionais e em nuvem.
- [pgAdmin](https://www.pgadmin.org) - A mais popular e característica rica Open Source administração e plataforma de desenvolvimento para PostgreSQL, o banco de dados Open Source mais avançado do mundo.
- [pgAdmin3](https://www.bigsql.org/pgadmin3) - Suporte de longo prazo para pgAdmin3.
- [PL/SQL Developer](https://www.allroundautomations.com/products/pl-sql-developer) - IDE que é especificamente direcionado para o desenvolvimento de unidades de programa armazenadas para Bancos de Dados Oracle
- [PostgreSQL Maestro](https://www.sqlmaestro.com/products/postgresql/maestro) - Gestão completa e poderosa de banco de dados, administrador e ferramenta de desenvolvimento para PostgreSQL .
- [Querybook](https://github.com/pinterest/querybook) - Pinterest open-source Big Data Consultar UI, combinando metadados de tabela com uma interface IDE simples notebook.
- [Slashbase](https://github.com/slashbaseide/slashbase) - O IDE colaborativo de código aberto para seus bancos de dados. Conecte-se ao seu banco de dados, navegue por dados, execute vários comandos SQL ou compartilhe consultas SQL com sua equipe, diretamente do seu navegador.
- [Sql Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms) - Ambiente integrado para gerenciar qualquer infra-estrutura SQL, para SQL Server e Azure SQL Databases.
- [Toad](https://www.quest.com/toad/) - Solução de banco de dados Premier para desenvolvedores, administradores e analistas de dados. Gerencie alterações complexas no banco de dados com uma única ferramenta de gerenciamento de banco de dados .
- [Toad Edge](https://www.toadworld.com/products/toad-edge) - Ferramenta de desenvolvimento de bases de dados simplificadas para MySQL e PostgreSQL
- [TOra](https://github.com/tora-tool/tora) - Open source SQL IDE for Oracle, MySQL e PostgreSQL dbs.
- [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - Crie, administre, consulte e explore as bases de dados Valentina DB, MySQL, MariaDB, PostgreSQL e SQLite para FREE.
- [WebDB](https://webdb.app) - Free Efficient Database IDE. Com Discovery Server, ERD, Gerador de Dados, IA, Gerenciador de Estrutura NoSQL, Versionamento de Banco de Dados e muitos mais.


## GUI
- [Adminer](https://github.com/vrana/adminer) - Gerenciamento de banco de dados em um único arquivo PHP.
- [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager) - Free Open Source Redis Manager. Disponível em Mac, Linux, Windows, Homebrew, Snap, Winget e muito mais.
- [Antares SQL](https://github.com/antares-sql/antares) - Um cliente SQL moderno, rápido e de produtividade com foco em UX. Disponível para Mac, Linux e Windows.
- [Azure Data Studio](https://github.com/microsoft/azuredatastudio) - Uma ferramenta de gerenciamento de dados que permite trabalhar com SQL Server, PostgreSQL, Azure SQL DB e SQL DW a partir de Windows, macOS e Linux.
- [Beekeeper Studio](https://github.com/beekeeper-studio/beekeeper-studio) - Open Source SQL Editor e Gerenciador de Banco de Dados com um compromisso de privacidade em sua declaração de missão.
- [Clidey WhoDB](https://github.com/clidey/whodb) - Um explorador de banco de dados leve com UX de próxima geração para todos SQL, NoSQL, Caches e Filas.
- [DbGate](https://github.com/dbgate/dbgate) - Gerenciador de banco de dados para MySQL, PostgreSQL, SQL Server, MongoDB, SQLite e outros. Executa em Windows, Linux, Mac ou como aplicativo web.
- [DB Lens](https://github.com/dblens/app) - Open Source PostgreSQL GUI - Diagramas automáticos de ER, Insights internos de DB, Utilização de disco, Métricas de Desempenho, Utilização de Índice, Contagens de varredura sequencial e muito mais.
- [DbVisualizer](https://www.dbvis.com) - Ferramenta de banco de dados universal para desenvolvedores, DBAs e analistas.
- [JackDB](https://www.jackdb.com) - Acesso SQL direto a todos os seus dados, não importa onde ele viva.
- [Jailer](https://github.com/Wisser/Jailer) - Subsetting de banco de dados e ferramenta de navegação de dados/cliente.
- [Malewicz](https://github.com/mgramin/malewicz) - No entanto, outro cliente WEB para o esquema DB explorando e análise de desempenho, mas originalmente criado especificamente para hackear e estender.
- [MissionKontrol](https://www.missionkontrol.io) - Modern drag & drop painel de administração/cliente com permissões de usuário completas para usuários não técnicos.
- [ocelotgui](https://github.com/ocelot-inc/ocelotgui) - Para MySQL, MariaDB e Tarantool. Desenvolvido para Linux, mas pode ser executado no Windows.
- [OmniDB](https://github.com/OmniDB/OmniDB) - Ferramenta Web para gestão de bases de dados.
- [Pgweb](https://github.com/sosedoff/pgweb) - Navegador de banco de dados baseado na Web para PostgreSQL, escrito em Go e trabalha em máquinas MacOS, Linux e Windows.
- [phpLiteAdmin](https://www.phpliteadmin.org) - Ferramenta de administração de banco de dados SQLite baseado na Web escrita em PHP com suporte para SQLite3 e SQLite2.
- [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - Uma interface web para MySQL e MariaDB.
- [psequel](http://www.psequel.com) - Fornece uma interface limpa e simples para você executar tarefas comuns PostgreSQL rapidamente.
- [PopSQL](https://popsql.com) - Editor SQL moderno e colaborativo para sua equipe.
- [Postico](https://eggerapps.at/postico) - Um cliente PostgreSQL moderno para o Mac.
- [Robo 3T](https://github.com/Studio3T/robomongo) - Ferramenta de gestão MongoDB multi-plataforma centrada em shell.
- [Sequel Ace](https://github.com/Sequel-Ace/Sequel-Ace) - Gerenciamento de banco de dados MySQL/MariaDB para macOS.
- [Sequel Pro](https://github.com/sequelpro/sequelpro) - Aplicativo de gerenciamento de banco de dados Mac rápido e fácil de usar para trabalhar com bancos de dados MySQL & MariaDB.
- [SQLite Expert](http://www.sqliteexpert.com/index.html) - Interface gráfica suporta todos os recursos SQLite.
- [sqlite-tui](https://github.com/mathaou/sqlite-tui) - Um TUI para visualização de bases de dados SQLite, escrito em Go.
- [sqlpad](https://github.com/rickbergfalk/sqlpad) - Editor SQL baseado na Web executado em sua própria nuvem privada.
- [SQLPro](https://www.macpostgresclient.com) - Um simples e poderoso gestor PostgreSQL para macOS.
- [SQuirreL](https://sourceforge.net/projects/squirrel-sql) - Cliente gráfico SQL escrito em Java que lhe permitirá visualizar a estrutura de um banco de dados compatível com JDBC, navegar os dados em tabelas, comandos SQL problema etc.
- [SQLTools](https://github.com/mtxr/vscode-sqltools) - Gestão de banco de dados para VSCOde.
- [SQLyog](https://www.webyog.com/product/sqlyog) - A GUI MySQL mais completa e fácil de usar.
- [Tabix](https://github.com/tabixio/tabix) - SQL Editor & Open source inteligência de negócios simples para Clickhouse.
- [TablePlus](https://github.com/TablePlus/TablePlus) - Ferramenta GUI moderna, nativa e amigável para bancos de dados relacionais: MySQL, PostgreSQL, SQLite & more.
- [TeamPostgreSQL](http://www.teampostgresql.com) - PostgreSQL Web Administration GUI - use seus bancos de dados PostgreSQL de qualquer lugar, com interface web rica e rápida AJAX.
- [Query.me](https://query.me) - Editor colaborativo SQL no formato Notebook. Vamos referenciar os resultados da consulta usando o JINJA, visualizar dados e agendar as execuções e exportações.


## CLI
- [ipython-sql](https://github.com/catherinedevlin/ipython-sql) - Conecte-se a um banco de dados para comandos SQL de problema dentro IPython ou IPython Notebook.
- [iredis](https://github.com/laixintao/iredis) - Um Cli para Redis com AutoCompleção e Destaque de Sintaxe.
- [pgcenter](https://github.com/lesovsky/pgcenter) - Ferramenta de administração top-like para PostgreSQL.
- [pg_activity](https://github.com/julmon/pg_activity) - Aplicação de topo para monitoramento de atividade do servidor PostgreSQL.
- [pg_top](https://github.com/markwkm/pg_top) - Topo para PostgreSQL.
- [pspg](https://github.com/okbob/pspg) - PostgreSQL Pager.
- [diesel-guard](https://github.com/ayarotsky/diesel-guard) - Linter para padrões perigosos de migração PostgreSQL. Ele funciona perfeitamente com arquivos SQL PostgreSQL e integra-se nativamente com projetos usando Diesel e SQLx.
- [SQLcl](http://www.oracle.com/technetwork/developer-tools/sqlcl/overview/index.html) - Oracle SQL Developer Command Line (SQLcl) é uma interface de linha de comando gratuita para Oracle Database.
- [sqlite-utils](https://github.com/simonw/sqlite-utils) - Ferramentas CLI para manipular arquivos de banco de dados SQLite - inserir dados, executar consultas, criar índices, configurar a pesquisa de texto completo e muito mais.
- [SQLLine](https://github.com/julianhyde/sqlline) - linha de comando shell para emitir SQL para bases de dados relacionais via JDBC.
- [usql](https://github.com/xo/usql) - Uma interface de linha de comando universal para PostgreSQL, MySQL, Oracle Database, SQLite3, Microsoft SQL Server e muitas outras bases de dados, incluindo NoSQL e bases de dados não relacionais!

### dbcli
- [athenacli](https://github.com/dbcli/athenacli) - Ferramenta CLI para AWS Athena serviço que pode fazer auto-completar e realce de sintaxe.
- [litecli](https://github.com/dbcli/litecli) - CLI para bancos de dados SQLite com auto-completar e realce de sintaxe.
- [mssql-cli](https://github.com/dbcli/mssql-cli) - Um cliente de linha de comando para SQL Server com auto-completar e realce de sintaxe.
- [mycli](https://github.com/dbcli/mycli) - Um Cliente Terminal para MySQL com AutoCompleção e Destaque de Sintaxe.
- [pgcli](https://github.com/dbcli/pgcli) - PostgreSQL CLI com preenchimento automático e realce de sintaxe.
- [vcli](https://github.com/dbcli/vcli) - Vertica CLI com auto-completamento e realce de sintaxe.


## Esquema

### Alterações
- [2bass](https://github.com/CourseOrchestra/2bass) - Ferramenta de configuração de banco de dados como código que utiliza o conceito de scripts DDL idempotent.
- [Atlas](https://github.com/ariga/atlas) - Inspecione e aplique alterações no seu esquema de banco de dados.
- [Bytebase](https://github.com/bytebase/bytebase) - Web-based, zero-config, banco de dados livre de dependência mudança de esquema e ferramenta de controle de versão para equipes.
- [flyway](https://github.com/flyway/flyway) - Ferramenta de migração de bases de dados.
- [gh-ost](https://github.com/github/gh-ost) - Esquema de migração online para MySQL.
- [liquibase](https://github.com/liquibase/liquibase) - Biblioteca independente de banco de dados para rastrear, gerenciar e aplicar mudanças de esquema de banco de dados.
- [migra](https://github.com/djrobstep/migra) - Diff, mas para esquemas PostgreSQL.
- [node-pg-migrate](https://github.com/salsita/node-pg-migrate) - Gerenciamento de migração de banco de dados Node.js construído exclusivamente para PostgreSQL. (Mas também pode ser usado para outros DBs em conformidade com o padrão SQL - por exemplo, BarataDB.)
- [pg-osc](https://github.com/shayonj/pg-osc) - Ferramenta CLI fácil para fazer mudanças de esquema de tempo zero e backfills no PostgreSQL.
- [Prisma Migrate](https://github.com/prisma/migrate) - Ferramenta declarativa de migração de esquema de banco de dados que usa uma sintaxe declarativa de modelagem de dados para descrever seu esquema de banco de dados.
- [Pyrseas](https://github.com/perseas/Pyrseas) - Fornece utilitários para descrever um esquema de banco de dados PostgreSQL como YAML.
- [Reshape](https://github.com/fabianlindfors/reshape) - Uma ferramenta de migração de esquema fácil de usar, zero-downtime para Postgres.
- [SchemaHero](https://github.com/schemahero/schemahero) - Um operador Kubernetes para o gerenciamento de esquema de banco de dados declarativo (gitops para esquemas de banco de dados).
- [Skeema](https://github.com/skeema/skeema) - Sistema de gestão de esquema puro declarativo SQL para MySQL e MariaDB, com suporte para ferramentas de scarding e mudanças de esquema online externas.
- [Sqitch](https://github.com/sqitchers/sqitch) - Gestão de alterações nativas de bases de dados sensíveis para desenvolvimento sem framework e implantação confiável.
- [sqldef](https://github.com/k0kubun/sqldef) - Gestão de esquemas idempotentes para MySQL, PostgreSQL e muito mais.
- [yuniql](https://github.com/rdagumampan/yuniql) - Mais uma ferramenta de versão e migração de esquema feita com .NET Core 3.0+ nativo e espero que melhor.

### Geração de código
- [ddl-generator](https://github.com/catherinedevlin/ddl-generator) - Inferes SQL DDL (Data Definition Language) a partir de dados da tabela.
- [scheme2ddl](https://github.com/qwazer/scheme2ddl) - Linha de comando util para exportar esquema Oracle para o conjunto de scripts ddl init com capacidade de filtrar informações indesejáveis, DDL separado em arquivos diferentes, saída de formato bonito.

### Figuras
- [Azimutt](https://github.com/azimuttapp/azimutt) - Uma ferramenta de visualização de diagrama de relacionamento de entidade (ERD), com vários filtros e entradas para ajudar a entender seu esquema de banco de dados.
- [ChartDB](https://github.com/chartdb/chartdb) - Editor de diagramas de banco de dados livre e Open-source, visualize e desenhe seu DB com uma única consulta.
- [DrawDB](https://github.com/drawdb-io/drawdb) - Ferramenta de design de banco de dados online gratuita, simples e intuitiva e gerador SQL. 
- [DrawSQL](https://drawsql.app) - Editor de diagramas de banco de dados online com importação SQL, geração de IA e colaboração em equipe em tempo real.
- [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - Ferramenta de geração de Diagramas de Relação de Entidade.
- [ERD Lab](https://www.erdlab.io/) - Free cloud based entity relationation diagram (ERD) ferramenta feita para desenvolvedores.
- [Liam ERD](https://github.com/liam-hq/liam) - Ferramenta de código aberto que gera Diagramas de Relacionamento de Entidade bonitos e fáceis de ler a partir do seu banco de dados e ORMs.
- [QuickDBD](https://www.quickdatabasediagrams.com/) - Ferramenta online simples para desenhar rapidamente diagramas de banco de dados.

### Documentação
- [dbdocs](https://dbdocs.io/) - Criar documentação de banco de dados baseado na web usando código DSL.
- [DBML](https://github.com/holistics/dbml) - linguagem de marcação de banco de dados, projetado para definir e documentar estruturas de banco de dados.
- [SchemaCrawler](https://github.com/schemacrawler/SchemaCrawler) - Uma ferramenta gratuita de descoberta e compreensão de esquemas de banco de dados.
- [Schema Spy](https://github.com/schemaspy/schemaspy) - Gerando seu banco de dados para documentação HTML, incluindo diagramas de relacionamento de entidade.
- [tbls](https://github.com/k1LoW/tbls) - Ferramenta CI-Friendly para documentar uma base de dados, escrita em Go.

### Desenho
- [Database Design](https://github.com/alextanhongpin/database-design) - Dicas úteis para projetar um esquema robusto de banco de dados.
- [DBDiagram](https://dbdiagram.io) - Uma ferramenta gratuita e simples para desenhar diagramas ER apenas escrevendo código.
- [DbSchema](https://dbschema.com/) - Design de banco de dados universal para gerenciamento de esquemas fora da caixa, documentação de esquema, design em uma equipe e implantação em várias bases de dados. DbSchema possui ferramentas para escrever e executar consultas, explorar os dados, gerar dados e construir relatórios.
- [ERBuilder Data Modeler](https://soft-builder.com/erbuilder-data-modeler) - Software de modelagem de banco de dados fácil de usar para modelos de dados de alta qualidade. É uma solução completa de modelagem de dados para modeladores de dados e arquitetos de dados.
- [Moon Modeler](https://www.datensen.com) - Ferramenta de modelagem de dados para bases de dados noSQL e relacionais. Disponível para Windows, Linux e macOS.
- [Navicat Data Modeler](https://www.navicat.com/en/products/navicat-data-modeler) - Uma ferramenta de design de banco de dados poderosa e econômica que ajuda você a construir modelos de dados conceituais, lógicos e físicos de alta qualidade.
- [Oracle SQL Developer Data Modeler](http://www.oracle.com/technetwork/developer-tools/datamodeler/overview/index.html) - Ferramenta gráfica gratuita que aumenta a produtividade e simplifica as tarefas de modelagem de dados.
- [pgmodeler](https://github.com/pgmodeler/pgmodeler) - Ferramenta de modelagem de dados projetada para PostgreSQL.
- [WWW SQL Designer](https://github.com/ondras/wwwsqldesigner) - Ferramenta de diagramação SQL online.

### Amostras
- [Oracle Database Sample Schemas](https://github.com/oracle/db-sample-schemas) - Esquemas de amostras para a Base de Dados Oracle.


## API
Construindo API para seus dados
- [Datasette](https://github.com/simonw/datasette) - Uma ferramenta para explorar e publicar dados.
- [DreamFactory](https://github.com/dreamfactorysoftware/dreamfactory) - Uma infraestrutura de API REST de código aberto para aplicativos móveis, web e IoT.
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - Transforme várias fontes de dados em uma única API GraphQL.
- [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - Lançando rápidas APIs GraphQL instantâneas em tempo real no PostgreSQL com controle de acesso de grãos finos, também ativam webhooks em eventos de banco de dados.
- [JdbcREST](https://github.com/synthesized-io/jdbcrest/) - API REST para qualquer banco de dados apoiado por JDBC, um clone PostgREST escrito em Java.
- [Oracle REST Data Services](http://www.oracle.com/technetwork/developer-tools/rest-data-services) - Uma aplicação Java de nível médio, ORDS mapeia verbos HTTP(S) (GET, POST, PUT, DELETE, etc.) para transações de banco de dados e retorna quaisquer resultados formatados usando JSON.
- [Prisma](https://github.com/prismagraphql/prisma) - Transforma a sua base de dados numa API GraphQL em tempo real.
- [PostGraphile](https://github.com/graphile/postgraphile) - Rode instantaneamente um servidor de API GraphQL apontando PostGraphile para o seu banco de dados PostgreSQL existente.
- [PostgREST](https://github.com/PostgREST/postgrest) - API REST para qualquer banco de dados PostgreSQL.
- [prest](https://github.com/prest/prest) - É uma maneira de servir uma API RESTful de qualquer banco de dados escrito em Go.
- [Remult](https://github.com/remult/remult) - CRUD tipo-a-fim seguro via API REST para o seu banco de dados, com controle de acesso fino.
- [restSQL](https://github.com/restsql/restsql) - Gerador SQL com APIs Java e HTTP, usa uma API HTTP simples RESTful com serialização XML ou JSON.
- [resquel](https://github.com/formio/resquel) - Converta facilmente seu banco de dados SQL em uma API REST.
- [sandman2](https://github.com/jeffknupp/sandman2) - Gere automaticamente um serviço de API RESTful para o seu banco de dados legado.
- [soul](https://github.com/thevahidal/soul) - Servidor automático de API SQLite RESTful e em tempo real.
- [VulcanSQL](https://github.com/Canner/vulcan-sql) - Escreva SQL modelado para expor automaticamente APIs RESTful de seu banco de dados / data warehouse / data lake.

## Plataformas de aplicações
Plataformas de código baixo e sem código para a construção de aplicações
- [Appsmith](https://github.com/appsmithorg/appsmith) - Framework de código baixo de código aberto poderoso para construir aplicações internas muito rapidamente.
- [Budibase](https://github.com/Budibase/budibase) - Plataforma de baixo código para criar aplicativos internos em minutos.
- [ILLA Cloud](https://github.com/illacloud/illa-builder) - Plataforma de construção de ferramentas interna de baixo código.
- [Nhost](https://github.com/nhost/nhost) - A Alternativa Firebase Open Source com GraphQL.
- [Saltcorn](https://github.com/saltcorn/saltcorn) - Construtor de código livre para aplicações de banco de dados web. Servidor e arrastar e soltar UI builder, dados armazenados em PostgreSQL ou SQLite.
- [SQLPage](https://github.com/sqlpage/SQLPage) - Construtor rápido de aplicação de dados somente SQL. Construa automaticamente uma interface de usuário em cima das consultas SQL.
- [Tooljet](https://github.com/ToolJet/ToolJet) - Plataforma de código baixo para criar ferramentas internas.


## Cópia de Segurança
- [BaRMan](https://github.com/2ndquadrant-it/barman) - Gerenciador de backup e recuperação para PostgreSQL.
- [Databasus](https://github.com/databasus/databasus) - Ferramenta para backups PostgreSQL programados via interface web com armazenamentos externos (local, S3, FTP, Google Drive, etc.), notificações (webhook, Discord, Slack, etc.) e gerenciamento de equipe.
- [pgbackrest](https://github.com/pgbackrest/pgbackrest) - Backup e restauração confiável PostgreSQL.
- [pgcopydb](https://github.com/dimitri/pgcopydb) - Copie uma base de dados PostgreSQL para um servidor PostgreSQL (pg)_dump | pg_restauração com esteróides).
- [pg_probackup](https://github.com/postgrespro/pg_probackup) - Um gestor de backup e recuperação para PostgreSQL.
- [Portabase](https://github.com/Portabase/portabase) - Plataforma baseada em agentes para backups e restaurações PostgreSQL com execução descentralizada e orquestração centralizada. 

## Clonagem
- [Database Lab Engine](https://gitlab.com/postgres-ai/database-lab) - Clonagem instantânea fina para PostgreSQL para escalar o processo de desenvolvimento.
- [clone_schema](https://github.com/denishpatel/pg-clone-schema) - PostgreSQL clone schema utilitário sem necessidade de sair do banco de dados.
- [Spawn](https://spawn.cc/) - Serviço de nuvem para criar cópias instantâneas de banco de dados para desenvolvimento e CI. Não mais instala db local, recuperação instantânea para pontos de salvamento arbitrários, cópias isoladas para cada ramo de recurso ou teste. Provisionamento instantâneo, independentemente do tamanho do banco de dados.


## Monitorização/Estatísticas/Performance
- [ASH Viewer](https://github.com/akardapolov/ASH-Viewer) - Fornece uma visão gráfica de dados de histórico de sessão ativa dentro do Oracle e PostgreSQL DB.
- [Metis](https://www.metisdata.io/product/troubleshooting) - Fornece observação e ajuste de desempenho para bancos de dados SQL.
- [Monyog](https://www.webyog.com/product/monyog) - Ferramenta de Monitoramento MySQL sem agente e econômica.
- [mssql-monitoring](https://github.com/microsoft/mssql-monitoring) - Monitore seu SQL Server no desempenho Linux usando colecionado, InfluxDB e Grafana.
- [Navicat Monitor](https://www.navicat.com/en/products/navicat-monitor) - Uma ferramenta de monitoramento de servidor remoto segura, simples e sem agentes que é embalada com recursos poderosos para tornar seu monitoramento eficaz quanto possível.
- [Percona Monitoring and Management](https://github.com/percona/pmm) - Plataforma de código aberto para gerenciamento e monitoramento de desempenho MySQL e MongoDB.
- [pganalyze collector](https://github.com/pganalyze/collector) - Coletor de estatísticas Pganalyze para coleta de métricas PostgreSQL e dados de log.
- [pgbadger](https://github.com/dalibo/pgbadger) - Um rápido analisador de log PostgreSQL.
- [pgDash](https://pgdash.io) - Medir e rastrear todos os aspectos de seus bancos de dados PostgreSQL.
- [PgHero](https://github.com/ankane/pghero) - Um painel de desempenho para PostgreSQL - verificações de saúde, índices sugeridos, e muito mais.
- [pgmetrics](https://github.com/rapidloop/pgmetrics) - Colete e mostre informações e estatísticas de um servidor PostgreSQL em execução.
- [pgMonitor](https://github.com/CrunchyData/pgmonitor) - Tudo-em-um ferramenta para criar facilmente um ambiente para visualizar a saúde e desempenho do seu cluster PostgreSQL.
- [pgMustard](https://www.pgmustard.com) - Uma interface de usuário para PostgreSQL explica planos, além de dicas para melhorar o desempenho.
- [pgstats](https://github.com/gleu/pgstats) - Coleta estatísticas PostgreSQL, e salva-los em arquivos CSV ou imprimi-los no stdout.
- [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - Solução flexível auto-suficiente de monitoramento/dashboarding de métricas PostgreSQL.
- [PostgreSQL Metrics](https://github.com/spotify/postgresql-metrics) - Serviço para extrair e fornecer métricas em seu banco de dados PostgreSQL.
- [PostgreSQL Monitor](https://postgresmonitor.com) - Um serviço de monitoramento fácil de usar para PostgreSQL fornecendo alertas, painéis, estatísticas de consulta e recomendações dinâmicas.
- [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - Ferramenta de diagnóstico de nova geração que permite aos usuários fazer uma análise profunda da saúde das bases de dados PostgreSQL.
- [Promscale](https://github.com/timescale/promscale) - A infraestrutura de observação de código aberto para métricas e traços alimentados por SQL.
- [Releem](https://releem.com) - Ferramenta de monitoramento e otimização de desempenho para MySQL & MariaDB que oferece insights acionáveis e automação segura para configurações incorretas, consultas lentas, problemas de esquema e impasses, reduzindo o trabalho manual em escala.
- [Telegraf PostgreSQL plugin](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/postgresql) - Fornece métricas para o seu banco de dados PostgreSQL.

### Prometheus
- [pgSCV](https://github.com/weaponry/pgscv) - Exportador de Metrics para serviços relacionados com PostgreSQL e PostgreSQL.
- [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - Exportador de Prometheus para métricas de servidor PostgreSQL.
- [pg_exporter](https://github.com/Vonng/pg_exporter) - Exportador Prometheus totalmente personalizável para PostgreSQL & Pgbouncer com controle de execução de grãos finos.

### Zabbix
- [Mamonsu](https://github.com/postgrespro/mamonsu) - Agente de monitorização do PostgreSQL.
- [Orabbix](http://www.smartmarmot.com/wiki/index.php?title=Orabbix) - Plugin projetado para trabalhar com o Zabbix Enterprise Monitor para fornecer relatórios de monitoramento, desempenho e disponibilidade multicamadas e medição para Bancos de Dados Oracle, juntamente com métricas de desempenho do servidor.
- [pg_monz](https://github.com/pg-monz/pg_monz) - Este é o modelo de monitoramento Zabbix para o banco de dados PostgreSQL.
- [Pyora](https://github.com/bicofino/Pyora) - Um programa em Python para monitorizar bases de dados Oracle.
- [ZabbixDBA](https://github.com/anetrusov/ZabbixDBA) - Plug-in rápido, flexível e em desenvolvimento contínuo para monitorar seu RDBMS.


## Teste
- [DbFit](https://github.com/dbfit/dbfit) - Um framework de teste de banco de dados que suporta fácil desenvolvimento baseado em testes do seu código de banco de dados.
- [pgTAP](https://github.com/theory/pgtap) - Teste de unidade para PostgreSQL.
- [RegreSQL](https://github.com/dimitri/regresql) - Regressão Testando suas consultas SQL.
- [SQLancer](https://github.com/sqlancer/sqlancer) - Teste automaticamente o DBMS para encontrar erros lógicos em sua implementação.


## HA/Failover/Sharding
- [Citus](https://github.com/citusdata/citus) - Extensão PostgreSQL que distribui seus dados e suas consultas em vários nós.
- [patroni](https://github.com/zalando/patroni) - Um modelo para PostgreSQL Alta Disponibilidade com ZooKeeper, etcd, ou Cônsul.
- [Percona XtraDB Cluster](https://github.com/percona/percona-xtradb-cluster) - Uma solução de alta escalabilidade para clustering MySQL e alta disponibilidade.
- [ShardingSphere](https://github.com/apache/shardingsphere) - Distribuído SQL transaction & query engine for data sharding, escalonamento, criptografia e muito mais - em qualquer banco de dados.
- [stolon](https://github.com/sorintlab/stolon) - Gerenciador nativo de PostgreSQL para PostgreSQL de alta disponibilidade.
- [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - Extensão e serviço PostgreSQL para failover automatizado e alta disponibilidade.
- [pglookout](https://github.com/aiven/pglookout) - Monitoramento de replicação PostgreSQL e daemon failover.
- [pgslice](https://github.com/ankane/pgslice) - Particionamento PostgreSQL tão fácil quanto torta.
- [PostgreSQL Automatic Failover](https://github.com/ClusterLabs/PAF) - Alta Disponibilidade para PostgreSQL, baseado em referências da indústria Pacemaker e Corosync.
- [autobase](https://github.com/vitabaks/autobase) - DBaaS de código aberto que automatiza a implantação e gerenciamento de clusters PostgreSQL altamente disponíveis.
- [Vitess](https://github.com/vitessio/vitess) - Sistema de agrupamento de banco de dados para escala horizontal do MySQL através de fragmentos generalizados.


## Kubernetes
- [KubeDB](https://kubedb.com) - Tornar as bases de dados de produção fáceis em Kubernetes.
- [PostgreSQL operator](https://github.com/zalando/postgres-operator) - O Operador PostgreSQL permite clusters PostgreSQL altamente disponíveis em Kubernetes (Kubernetes) alimentados por Patroni.
- [Spilo](https://github.com/zalando/spilo) - Agrupamentos HA PostgreSQL com Docker.
- [StackGres](https://gitlab.com/ongresinc/stackgres) - Classe Enterprise, Full Stack PostgreSQL em Kubernetes.


## Ajuste de Configuração
- [MySQLTuner-perl](https://github.com/major/MySQLTuner-perl) - Script escrito em Perl que permite revisar uma instalação MySQL rapidamente e fazer ajustes para aumentar o desempenho e estabilidade.
- [PGConfigurator](https://pgconfigurator.cybertec-postgresql.com) - Ferramenta online gratuita para gerar um otimizado `postgresql.conf`.
- [pgtune](https://github.com/gregs1104/pgtune) - Assistente de configuração PostgreSQL.
- [postgresqltuner.pl](https://github.com/jfcoz/postgresqltuner) - script simples para analisar a configuração do banco de dados PostgreSQL e dar conselhos de ajuste.


## DevOps
- [DBmaestro](https://www.dbmaestro.com) - Acelera ciclos de lançamento e suporta agilidade em todo o ecossistema de TI.
- [Toad DevOps Toolkit](https://www.quest.com/products/toad-devops-toolkit/) - Executa as principais funções de desenvolvimento de banco de dados dentro do seu fluxo de trabalho DevOps —sem comprometer a qualidade, desempenho ou confiabilidade.


## Relatórios
- [Chartbrew](https://chartbrew.com) - Crie painéis ao vivo, gráficos e relatórios de clientes de várias bases de dados e serviços.
- [Poli](https://github.com/shzlw/poli) - Um aplicativo de relatórios SQL fácil de usar construído para amantes SQL.


## Distribuição
- [DBdeployer](https://github.com/datacharmer/dbdeployer) - Ferramenta que implementa servidores de banco de dados MySQL facilmente.
- [dbatools](https://github.com/sqlcollaborative/dbatools) - PowerShell módulo que você pode pensar como uma linha de comando SQL Server Management Studio.
- [Postgres.app](https://github.com/PostgresApp/PostgresApp) - Instalação PostgreSQL completa embalada como uma aplicação Mac padrão.
- [BigSQL](https://www.bigsql.org) - Uma distribuição amigável de PostgreSQL.
- [Elephant Shed](https://github.com/credativ/elephant-shed) - Web-based PostgreSQL gestão front-end que agrupa vários utilitários e aplicações para uso com PostgreSQL.
- [Pigsty](https://github.com/Vonng/pigsty) - Distribuição Open-Source Incluída em Bateria para PostgreSQL com a máxima observábilidade e banco de dados como caixa de ferramentas para desenvolvedores.


## Segurança
- [Acra](https://github.com/cossacklabs/acra) - Sala de segurança da base de dados. Proxy de banco de dados com criptografia em nível de campo, pesquisa através de dados criptografados, prevenção de injeções SQL, detecção de intrusão, honeypots. Suporta criptografia do lado do cliente e do proxy ("transparente"). SQL, NoSQL.
- [Databunker](https://github.com/securitybunker/databunker) - Cofre seguro RGPD especial compatível para registros de clientes construídos em cima de DB regular.
- [Inspektor](https://github.com/poonai/inspektor) - Acesse a camada de controle para bases de dados. O Inspektor aproveita o agente de política aberto para tomar decisões políticas.


## SQL

### Analisadores
- [Holistic.dev](https://holistic.dev) - Serviço de detecção automática para problemas de desempenho, segurança e arquitetura do banco de dados.
- [SQLCheck](https://github.com/jarulraj/sqlcheck) - Detecta automaticamente anti- padrões SQL comuns.
- [SQLFluff](https://github.com/sqlfluff/sqlfluff) - Disquete flexível e configurável SQL linter.
- [SQLLineage](https://github.com/reata/sqllineage) - Ferramenta de Análise de Linhagem SQL alimentada por Python.
- [TSQLLint](https://github.com/tsqllint/tsqllint) - Uma ferramenta para descrever, identificar e relatar a presença de anti-padrão em scripts TSQL.

### Geradores de código
- [sqlc](https://sqlc.dev) - Gerador de código SQL-first produzindo type-safe bindings para vários idiomas e várias bases de dados.
- [SQLDelight](https://sqldelight.github.io/sqldelight) - Gerador de código SQL-primeiro produzindo type-safe bindings para Kotlin e vários bancos de dados.
- [pGenie](https://pgenie.io) - Gerador de código SQL-first produzindo type-safe bindings para várias línguas e especializada no banco de dados PostgreSQL.

### Extensões
- [PartiQL](https://partiql.org) - Acesso compatível com SQL aos dados relacionais, semiestruturados e aninhados.

### Quadros
- [Apache Calcite](https://calcite.apache.org) - Framework dinâmico de gerenciamento de dados com recursos SQL avançados.
- [ZetaSQL](https://github.com/google/zetasql) - Analisador Framework para SQL.

### Formadores
- [CodeBuff](https://github.com/antlr/codebuff) - Linguagem-agnóstico bonita-impressão através de aprendizagem de máquina.
- [JSQLFormatter](https://github.com/manticore-projects/jsqlformatter) - Código aberto Java SQL Formatador para muitos RDBMS baseado em JSqlParser.
- [SQL Online](https://sqlonline.in) - Uma ferramenta gratuita para formatar suas Consultas SQL seguida de conteúdo para analistas.
- [pgFormatter](https://github.com/darold/pgFormatter) - Um embelezador de sintaxe PostgreSQL SQL.
- [Poor SQL](https://poorsql.com) - Formatação T-SQL livre e de código aberto. 
- [SQL Formatter](https://github.com/zeroturnaround/sql-formatter) - Biblioteca JavaScript para pretty-printing consultas SQL.

### Jogos
- [Lost at SQL](https://lost-at-sql.therobinlord.com) - Um jogo de aprendizagem SQL para ajudá-lo a pegar habilidades SQL básicas - para que você possa usar consultas para obter informações.
- [Querymon](https://codepip.com/games/querymon/) - Aprenda a usar consultas SQL no Querydex, um banco de dados de monstros de comum a lendário.
- [Schemaverse](https://datalemur.com/blog/games-to-learn-sql#schemaverse) - Um jogo de estratégia baseado em espaço implementado inteiramente dentro de uma base de dados PostgreSQL.
- [SQL Island](https://sql-island.informatik.uni-kl.de) - Depois da queda do avião, ficarás preso em SQL Island por enquanto. Ao fazer progressos no jogo, você vai encontrar uma maneira de escapar desta ilha.
- [SQL Murder Mystery](https://mystery.knightlab.com) - Projetado para ser uma lição auto-dirigida para aprender conceitos e comandos SQL e um jogo divertido para usuários SQL experientes para resolver um crime intrigante.
- [SQL Police Department](https://sqlpd.com) - No SQLPD, você pode resolver crimes enquanto aprende SQL ao mesmo tempo.

### Analisadores
- [General SQL Parser](https://www.sqlparser.com) - Processamento, formatação, modificação e análise para SQL.
- [jOOQ](https://github.com/jOOQ/jOOQ) - Analisar SQL, traduzi-lo para outros dialetos, e permite transformações de árvore de expressão.
- [JSqlParser](https://github.com/JSQLParser/JSqlParser) - Analisa uma instrução SQL e traduzi-la em uma hierarquia de classes Java.
- [libpg_query](https://github.com/pganalyze/libpg_query) - Biblioteca C para acessar o analisador PostgreSQL fora do ambiente de servidor.
- [More SQL Parsing!](https://github.com/klahnakoski/mo-sql-parsing) - Processar SQL para JSON.
- [sqlparse](https://github.com/andialbrecht/sqlparse) - Parser SQL não validado para Python.
- [SQLGlot](https://github.com/tobymao/sqlglot) - Puro analisador Python SQL, transpiler e construtor.

### Über SQL
Executar consultas SQL contra qualquer coisa
- [CloudQuery](https://github.com/cloudquery/cloudquery) - Extrai, transforma e carrega seus ativos na nuvem em tabelas PostgreSQL normalizadas.
- [csvq](https://github.com/mithrandie/csvq) - linguagem de consulta tipo SQL para CSV.
- [dsq](https://github.com/multiprocessio/dsq) - Ferramenta de linha de comando para executar consultas SQL contra JSON, CSV, Excel, Parquet e muito mais.
- [MAT Calcite plugin](https://github.com/vlsi/mat-calcite-plugin) - Este plugin para o Eclipse Memory Analyzer permite consultar o dump heap via SQL.
- [OctoSQL](https://github.com/cube2222/octosql) - Ferramenta de consulta que lhe permite juntar, analisar e transformar dados de várias bases de dados e formatos de ficheiros usando SQL.
- [osquery](https://github.com/osquery/osquery) - Instrumentação, monitoramento e análise do sistema operacional alimentado por SQL.
- [Resmo](https://www.resmo.com) - Auditoria e avaliação de recursos usando SQL.
- [sq](https://github.com/neilotoole/sq) - Ferramenta de linha de comando que fornece acesso ao estilo jq a fontes de dados estruturadas: bancos de dados SQL, ou formatos de documentos como CSV ou Excel. É o filho do amor de sql+jq.
- [Steampipe](https://github.com/turbot/steampipe) - Use SQL para consultar instantaneamente seus serviços em nuvem (AWS, Azure, GCP e muito mais).
- [TextQL](https://github.com/dinedal/textql) - Execute SQL contra texto estruturado como CSV ou TSV.
- [trdsql](https://github.com/noborus/trdsql) - Ferramenta CLI que pode executar consultas SQL em CSV, LTSV, JSON e TBLN.
- [Trino](https://github.com/trinodb/trino) - Distribuído motor de consulta SQL projetado para consultar grandes conjuntos de dados distribuídos por uma ou mais fontes de dados heterogêneas.

### Protocolo do servidor de idiomas
- [SQLLanguageServer](https://github.com/joe-re/sql-language-server) - SQL Language Server.
- [sqls](https://github.com/lighttiger2505/sqls) - SQL Language Server escrito em Go.

### Aprendizagem
Aprendizagem e quebra- cabeça para SQL
- [Advanced SQL Puzzles](https://github.com/smpetersgithub/AdvancedSQLPuzzles) - Quebra-cabeças SQL baseados em conjuntos difíceis.
- [Hackerrank](https://www.hackerrank.com/domains/sql) - Pratique codificação, prepare-se para entrevistas e seja contratado.
- [Learn SQL in a Month of Lunches](https://www.manning.com/books/learn-sql-in-a-month-of-lunches) - Um livro sobre como usar SQL para recuperar, filtrar e analisar dados.
- [LeetCode](https://leetcode.com/problemset/database) - Melhore suas habilidades, amplie seus conhecimentos e prepare-se para entrevistas técnicas.
- [Select Star SQL](https://selectstarsql.com) - Livro interativo gratuito que visa ser o melhor lugar na internet para aprender SQL.
- [StrataScratch](https://www.stratascratch.com/blog/categories/sql) - Recursos educacionais de ciência de dados.
- [SQL Murder Mystery](https://github.com/NUKnightLab/sql-mysteries) - Lição auto-dirigida para aprender conceitos e comandos SQL e um jogo divertido para usuários SQL experientes para resolver um crime intrigante.

### Plano
- [pev2](https://github.com/dalibo/pev2) - Um componente Vue.js para mostrar uma visualização gráfica de um plano de execução PostgreSQL.
- [pg_flame](https://github.com/mgartner/pg_flame) - Um gerador de flamegraph para PostgreSQL `EXPLAIN ANALYZE` saída.

### Programas
SQL- scripts úteis para vários fins
- [DBA MultiTool](https://github.com/LowlyDBA/dba-multitool) - scripts T-SQL para o longo prazo: otimização do armazenamento, documentação on-the-fly e necessidades administrativas gerais para o SQL Server.
- [pgx_scripts](https://github.com/pgexperts/pgx_scripts) - Uma coleção de pequenos scripts úteis para análise e administração de bases de dados, criados por nossa equipe no PostgreSQL Especialistas.
- [pgsql-bloat-estimation](https://github.com/ioguix/pgsql-bloat-estimation) - Consultas para medir o inchaço estatístico em índices e tabelas para PostgreSQL.
- [pgWikiDont](https://gitlab.com/depesz/pgWikiDont) - Teste SQL que verifica se o seu banco de dados segue regras de <https://wiki.postgresql.org/wiki/Don't_Do_This>.
- [pg-utils](https://github.com/dataegret/pg-utils) - Utilitários PostgreSQL úteis.
- [PostgreSQL cheat sheet](https://postgrescheatsheet.com) - Useful SQL-scripts e comandos por <timescale.com>.
- [postgres_dba](https://github.com/NikolayS/postgres_dba) - O conjunto faltando de ferramentas úteis para PostgreSQL DBAs e todos os engenheiros.
- [postgres_queries_and_commands.sql](https://gist.github.com/rgreenjr/3637525) - Consultas e Comandos PostgreSQL úteis.
- [TPT](https://github.com/tanelpoder/tpt-oracle) - Estes scripts sqlplus são para o Oracle Database otimização de desempenho e solução de problemas.


## Dados
- [dbt](https://github.com/dbt-labs/dbt-core) - Transforme seus dados simplesmente escrevendo instruções selecionadas, enquanto o dbt lida transformando essas declarações em tabelas e visualizações em um data warehouse.
- [QuickTable](https://quicktable.io) - Capacita todos a acessar, limpar, analisar, transformar e modelar dados sem código.

### Catálogo
- [Amundsen](https://github.com/amundsen-io/amundsen) - Aplicação orientada por metadados para melhorar a produtividade de analistas de dados, cientistas de dados e engenheiros ao interagir com dados.
- [DataHub](https://github.com/datahub-project/datahub) - A Plataforma de Metadados da Modern Data Stack.
- [Marquez](https://github.com/MarquezProject/marquez) - Coletar, agregar e visualizar os metadados de um ecossistema de dados.

### Linhagem
- [Dwh.dev](https://dwh.dev) - Linha de dados Nexgen para Snowflake.

### Geração/Masking/Subsetting
- [Benerator](https://github.com/rapiddweller/rapiddweller-benerator-ce) - Gerar, ofuscar (anonimizar / pseudônimo) e migrar dados para fins de desenvolvimento, teste e treinamento.
- [dbForge Data Generator for MySQL](https://www.devart.com/dbforge/mysql/data-generator) - Ferramenta GUI poderosa para criar volumes maciços de dados de teste realistas.
- [dbForge Data Generator for Oracle](https://www.devart.com/dbforge/oracle/data-generator) - Ferramenta GUI pequena mas poderosa para povoar esquemas Oracle com toneladas de dados de teste realistas.
- [dbForge Data Generator for SQL Server](https://www.devart.com/dbforge/sql/data-generator) - Ferramenta GUI poderosa para uma geração rápida de dados de teste significativos para bancos de dados.
- [Faker](https://github.com/faker-js/faker) - Gerar grandes quantidades de dados falsos no navegador e Node.js.
- [Greenmask](https://github.com/GreenmaskIO/greenmask) - Ferramenta de anonimização de banco de dados e geração de dados sintéticos para MySQL e PostgreSQL.
- [myanon](https://github.com/ppomes/myanon) - A transmitir o anonimizador para ficheiros de descarga MySQL. Lê mysqldump de stdin, escreve versão anônima para stdout. Suporta hashing determinístico, valores fixos, anonimização de campo JSON e extensões Python.
- [Noisia](https://github.com/lesovsky/noisia) - Gerador de carga de trabalho prejudicial para PostgreSQL.
- [quick-seed](https://github.com/miit-daga/quick-seed) - Ferramenta de semeamento diagnóstico de banco de dados para gerar dados de teste realistas com suporte para PostgreSQL, MySQL, SQLite, Prisma e Drizzle ORM.
- [SB Data Generator](https://soft-builder.com/sb-data-generator) - Ferramenta simples e poderosa para gerar e preencher tabelas selecionadas ou bancos de dados inteiros com dados de teste realistas para suas aplicações. Gerar dados de teste para: Oracle, MS SQL Server, MySQL, PostgreSQL, Firebird, SQLite, Azure SQL Database, Amazon Redshift e Amazon RDS.
- [SQLable](https://sqlable.com/generator/) - Gera dados falsos no navegador.
- [Synthesized TDK](https://docs.synthesized.io/tdk/latest) - O melhor amigo do DevOps para mascaramento e geração.

### Perfis de dados
- [Data Profiler](https://github.com/capitalone/dataprofiler) - O DataProfiler é uma biblioteca Python projetada para facilitar a análise, monitoramento e detecção de dados sensíveis.
- [Desbordante](https://github.com/desbordante/desbordante-core) - Um perfilador de dados de código aberto especificamente focado na descoberta e validação de padrões complexos em dados.
- [YData Profiling](https://github.com/ydataai/ydata-profiling) - Um perfilador geral de dados de código aberto para análise de alto nível de um conjunto de dados.

### Replicação
- [dtle](https://github.com/actiontech/dtle) - Serviço de Transferência de Dados Distribuídos para MySQL.
- [Litestream](https://github.com/benbjohnson/litestream) - Replicação de transmissão para SQLite.
- [pgsync](https://github.com/ankane/pgsync) - Sincronizar dados PostgreSQL entre bases de dados.
- [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - MySQL para PostgreSQL sistema de réplica escrito em Python 3. O sistema usa a biblioteca mysql-replication para puxar as imagens de linha do MySQL que são armazenadas no PostgreSQL como JSONB.
- [PGDeltaStream](https://github.com/hasura/pgdeltastream) - Um servidor web Golang para transmitir PostgreSQL muda pelo menos uma vez sobre websockets, usando o recurso de decodificação lógica PostgreSQL.
- [repmgr](https://github.com/2ndQuadrant/repmgr) - O Gerente de Replicação Mais Popular para PostgreSQL.

### Comparar
- [data-diff](https://github.com/datafold/data-diff) - Ferramenta de linha de comando e biblioteca Python para eficientemente diff linhas em dois bancos de dados diferentes.
- [KS DB Merge Tools](https://ksdbmerge.tools) - GUI para comparar e sincronizar esquema e dados DB. Para Banco de Dados Oracle, MySQL, MariaDB, SQL Server, PostgreSQL, SQLite, MS Access e Cross-DBMS.

## Papel
Documentos, artigos, manifestos e outros materiais teóricos sobre ferramentas de base de dados
- [The "Database as Code" Manifesto](https://github.com/mgramin/database-as-code) - Trata a tua base de dados como código.
- [Grokking Relational Database Design](https://www.manning.com/books/grokking-relational-database-design) - Um guia amigável ilustrado para projetar e implementar sua primeira base de dados.

## Aprendizagem de máquina
- [MindsDB](https://github.com/mindsdb/mindsdb) - Aprendizado de máquina na base de dados.
- [SQLFlow](https://github.com/sql-machine-learning/sqlflow) - Junta o SQL e a IA.

## Contribuir
- Suas contribuições são sempre bem-vindas! Por favor, leia o [contribution guidelines](contributing.md) Primeiro.
