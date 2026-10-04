
# Awesome Postgres [![awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg" align="right"  width="100">](https://www.postgresql.org/)

> Uma lista selecionada de softwares, bibliotecas, ferramentas e recursos para [PostgreSQL](https://www.postgresql.org/), inspirada por [awesome-mysql](http://shlomi-noach.github.io/awesome-mysql/).

[PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL), muitas vezes chamado simplesmente de Postgres, é um [banco de dados objeto-relacional](https://en.wikipedia.org/wiki/Object-relational_database) (ORDBMS). PostgreSQL é compatível com [ACID](https://en.wikipedia.org/wiki/ACID) e oferece [processamento transacional](https://en.wikipedia.org/wiki/Transaction_processing). (Saiba mais: [wikipedia:PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL), [PostgreSQL.org](https://www.postgresql.org))

 :elephant: Contribuições são bem-vindas. Adicione links por meio de [pull requests](https://github.com/dhamaniasad/awesome-postgres/pulls) ou crie uma [issue](https://github.com/dhamaniasad/awesome-postgres/issues) para iniciar uma discussão. Consulte as [diretrizes de contribuição](CONTRIBUTING.md).


<a id="contents"></a>

## Conteúdo

- [Awesome Postgres](#awesome-postgres-)
    - [Alta disponibilidade](#high-availability)
    - [Cópias de segurança](#backups)
    - [GUI](#gui)
    - [Distribuições](#distributions)
    - [CLI](#cli)
    - [Servidor](#server)
    - [Monitoramento](#monitoring)
    - [Extensões](#extensions)
    - [Plataformas](#platforms)
    - [Filas de trabalho](#work-queues)
    - [Otimização](#optimization)
    - [Utilitários](#utilities)
    - [Vínculos de linguagem](#language-bindings)
    - [PaaS (PostgreSQL como serviço)](#paas-postgresql-as-a-service)
    - [Imagens Docker](#docker-images)
    - [Kubernetes](#kubernetes)
- [Recursos](#resources)
    - [Tutoriais](#tutorials)
    - [Blogs](#blogs)
    - [Documentação](#documentation)
    - [Boletins informativos](#newsletters)
    - [Vídeos](#videos)
    - [Comunidade](#community)
    - [Roteiros](#roadmaps)
    - [Listas externas](#external-lists)


<a id="high-availability"></a>

### Alta disponibilidade
* [autobase](https://github.com/vitabaks/autobase) - O Autobase para PostgreSQL® é um DBaaS de código aberto que automatiza a implantação e o gerenciamento de clusters PostgreSQL de alta disponibilidade.
* [BDR](https://github.com/2ndQuadrant/bdr) - Replicação bidirecional — um sistema de replicação multimaster para PostgreSQL.
* [Patroni](https://github.com/zalando/patroni) - Modelo de alta disponibilidade para PostgreSQL com ZooKeeper ou etcd.
* [Spock](https://github.com/pgEdge/spock) - Replicação lógica PostgreSQL multimaster, 100% de código aberto.
* [Stolon](https://github.com/sorintlab/stolon) - Alta disponibilidade do PostgreSQL baseada em Consul ou etcd, com integração com Kubernetes.
* [pglookout](https://github.com/aiven/pglookout) - Monitoramento de replicação e daemon de failover.
* [repmgr](https://github.com/2ndQuadrant/repmgr) - Conjunto de ferramentas de código aberto para gerenciar replicação e failover em um cluster de servidores PostgreSQL.
* [Slony-I](https://slony.info/) - Sistema de replicação de “um mestre para várias réplicas”, com replicação em cascata e failover.
* [PAF](https://github.com/ClusterLabs/PAF) - PostgreSQL Automatic Failover: alta disponibilidade para Postgres, baseada em Pacemaker e Corosync.
* [SkyTools](https://github.com/pgq/skytools-legacy) - Ferramentas de replicação, incluindo PgQ, um sistema de filas, e Londiste, um sistema de replicação um pouco mais simples de gerenciar que o Slony.
* [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - Extensão e serviço do Postgres para failover automatizado e alta disponibilidade.
* [pgrwl](https://github.com/hashmap-kz/pgrwl) - Transmite logs de escrita antecipada (WAL) de um servidor PostgreSQL em tempo real. Uma alternativa substituta e compatível com contêineres ao pg_receivewal.
* [pg-status](https://github.com/krylosov-aa/pg-status) - Microsserviço que fornece endpoints HTTP para recuperar instantaneamente o host mestre atual ou uma réplica que atenda a vários critérios.


<a id="backups"></a>

### Cópias de segurança
* [Barman](https://www.pgbarman.org/index.html) - Gerenciador de backup e recuperação para PostgreSQL, da 2ndQuadrant.
* [Databasus](https://databasus.com) - Ferramenta para backups programados do PostgreSQL por meio de uma interface web, com armazenamento externo (local, S3, FTP, Google Drive etc.), notificações (webhook, Discord, Slack etc.) e gerenciamento de equipes.
* [OmniPITR](https://github.com/omniti-labs/omnipitr) - Ferramentas avançadas de gerenciamento de arquivos WAL para PostgreSQL.
* [pg\_probackup](https://github.com/postgrespro/pg_probackup) – Fork do pg\_arman, aprimorado pela @PostgresPro; oferece backups incrementais, backups a partir de réplicas, backup e restauração multithread e backup anônimo sem comando de arquivamento.
* [pgBackRest](https://pgbackrest.org/)  - Backup e restauração confiáveis do PostgreSQL.
* [pgbackweb](https://github.com/eduardolat/pgbackweb) - Ferramenta completa, baseada em Docker, para backup e manutenção do Postgres, com interface web.
* [pg\_back](https://github.com/orgrim/pg_back/) - O pg\_back é um script simples de backup.
* [pghoard](https://github.com/aiven/pghoard) - Ferramenta de backup e restauração para armazenamentos de objetos na nuvem (AWS S3, Azure, Google Cloud, OpenStack Swift).
* [postgres-backup-oss](https://github.com/isaced/postgres-backup-oss) - Um contêiner Docker prático para fazer backups periódicos do PostgreSQL no Alibaba Cloud Object Storage Service (OSS).
* [wal-e](https://github.com/wal-e/wal-e) (obsoleto) - Arquivamento contínuo simples para PostgreSQL no S3, Azure ou Swift, pela Heroku.
* [wal-g](https://github.com/wal-g/wal-g) - Sucessor do WAL-E, reescrito em Go. Atualmente oferece suporte a serviços de armazenamento de objetos na nuvem da AWS (S3), Google Cloud (GCS) e Azure, além de OpenStack Swift, MinIO e armazenamento em sistema de arquivos. Oferece backups incrementais em nível de bloco, transferência das tarefas de backup para um servidor em espera, paralelização e limitação de taxa. Além do Postgres, o WAL-G pode ser usado com bancos de dados MySQL e MongoDB.
* [pitrery](https://dalibo.github.io/pitrery/) - Conjunto de scripts Bash para gerenciar backups de recuperação pontual (PITR) do PostgreSQL.
* [pgbackup-sidecar](https://github.com/Musab520/pgbackup-sidecar) - Contêiner sidecar leve do Docker, projetado para automatizar backups regulares de um banco de dados PostgreSQL usando `pg_dump`, `cron` e scripts Bash, além de enviar a saída para um webhook.
* [pg-backups-to-s3](https://github.com/Saicheg/pg-backups-to-s3) - Solução priorizando Docker, baseada em pg_dump, com suporte a configuração por variáveis de ambiente para backups programados do PostgreSQL, compactação opcional, criptografia GPG, webhooks e envio automático para o Amazon S3.


<a id="gui"></a>

### GUI
* [1bench](https://1bench.dev/postgresql) - Interface gráfica nativa e multiplataforma com suporte de primeira classe a Postgres, Redis, Elasticsearch, ClickHouse, Qdrant e outros. (Software comercial)
* [Adminer](https://www.adminer.org/) - Ferramenta completa de gerenciamento de bancos de dados, escrita em PHP.
* [AI for Database](https://aifordatabase.com) - Converse com seu banco de dados PostgreSQL em linguagem natural. Não é preciso SQL: obtenha insights instantâneos, crie painéis com atualização automática e acione fluxos de trabalho automatizados com base nas alterações do banco de dados. (Software comercial)
* [Beekeeper Studio](https://www.beekeeperstudio.io) - Cliente SQL gratuito e de código aberto, com interface moderna e ótimo suporte ao Postgres. Multiplataforma.
* [Bytebase](https://www.bytebase.com) - Solução de DevSecOps para bancos de dados voltada a equipes de desenvolvimento, segurança, administração de bancos de dados e engenharia de plataformas.
* [Chartbrew](https://chartbrew.com) - Crie painéis, gráficos e relatórios para clientes em tempo real a partir de dados do PostgreSQL. Inclui uma ferramenta de consultas SQL.
* [Count](https://count.co/) - Plataforma de análise baseada na web, com interface de notebook que se conecta ao PostgreSQL. (Software comercial)
* [DataGrip](https://www.jetbrains.com/datagrip/) - IDE com conjunto avançado de ferramentas e ótima experiência multiplataforma. (Software comercial)
* [Dekart](https://github.com/dekart-xyz/dekart) - Plataforma de código aberto que transforma consultas PostGIS em mapas interativos que podem ser compartilhados.
* [Datazenit](https://datazenit.com/) - Interface gráfica do PostgreSQL baseada na web. (Software comercial)
* [DataRow](https://www.datarow.com/) - Cliente SQL multiplataforma para Amazon Redshift: simples, fácil de usar e extensível.
* [DBConvert Streams](https://streams.dbconvert.com/) - IDE para bancos de dados com migração, SQL federado e replicação CDC para PostgreSQL, MySQL, arquivos e armazenamento compatível com S3. (Software comercial)
* [DBeaver](https://dbeaver.io/) - Gerenciador universal de bancos de dados com excelente suporte ao PostgreSQL.
* [dbForge Edge](https://www.devart.com/dbforge/edge/) - Solução completa para vários bancos de dados, com suporte a PostgreSQL, MySQL, MariaDB, SQL Server, Oracle e uma ampla variedade de serviços de nuvem relacionados.
* [DbVisualizer](http://www.dbvis.com) - Cliente de banco de dados multiplataforma para desenvolvedores, administradores de banco de dados e analistas. (Software comercial)
* [Holistics](https://www.holistics.io/) - Ferramenta on-line e multiplataforma de gerenciamento de bancos de dados e interface gráfica para relatórios de consultas SQL, com forte suporte ao PostgreSQL. (Software comercial)
* [JackDB](https://www.jackdb.com/) - Interface web para consultas SQL. (Software comercial)
* [Luna Modeler](http://www.datensen.com) - Ferramenta desktop multiplataforma para modelagem de dados. (Software comercial)
* [Mathesar](https://mathesar.org/) - Aplicação web que oferece uma experiência intuitiva para trabalhar com bancos de dados.
* [Metabase](https://www.metabase.com/) - Painéis, gráficos e ferramenta de consultas simples para PostgreSQL.
* [Numeracy](https://numeracy.co/) - Editor SQL rápido, com gráficos e painéis para PostgreSQL. (Software comercial)
* [OrcaQ](https://github.com/cin12211/orca-q) - Editor moderno e de código aberto para PostgreSQL, MySQL, Redis e outros bancos de dados. Inclui assistente de IA, visualizador de diagramas ER, comparação de esquemas e gerenciamento visual de funções.
* [pgAdmin](https://www.pgadmin.org/) - Interface gráfica de administração e gerenciamento do PostgreSQL.
* [pgMagic🪄](https://pgmagic.app/?ref=awesomepostgres) - Converse com o Postgres em linguagem natural. (Software comercial)
* [PgManage](https://github.com/commandprompt/pgmanage) - Cliente e ferramenta de administração moderna, multiplataforma e centrada no Postgres.
* [pgModeler](https://pgmodeler.io/) - O pgModeler é uma ferramenta de modelagem de bancos de dados PostgreSQL de código aberto.
* [PgStudio](https://github.com/dev-asterix/PgStudio) - Extensão de código aberto para VS Code / Open VSX que gerencia PostgreSQL com notebooks SQL, assistente de IA, snippets fáceis de usar e um SGBD completo com painel de monitoramento em tempo real.
* [pgweb](https://github.com/sosedoff/pgweb) - Navegador de bancos de dados PostgreSQL baseado na web, escrito em Go.
* [phpPgAdmin](https://github.com/phppgadmin/phppgadmin) - A principal ferramenta de administração do PostgreSQL baseada na web.
* [Postbird](https://github.com/Paxa/postbird) - Cliente PostgreSQL para macOS.
* [PostgresCompare](https://www.postgrescompare.com) - Ferramenta multiplataforma para comparação e implantação de bancos de dados. (Software comercial)
* [Postico](https://eggerapps.at/postico/) - Cliente moderno de PostgreSQL para macOS. (Software comercial)
* [QueryGlow](https://queryglow.com/) - Interface gráfica de banco de dados auto-hospedada e baseada na web, com geração de SQL por IA, visualizador de EXPLAIN e preenchimento automático sensível ao esquema. (Software comercial)
* [PSequel](http://www.psequel.com/) - Interface limpa e simples para executar rapidamente tarefas comuns do PostgreSQL. (Software comercial)
* [Redash](https://github.com/getredash/redash) - Conecte-se a qualquer fonte de dados, visualize e compartilhe seus dados com facilidade.
* [SQL Tabs](http://www.sqltabs.com/) - Cliente desktop multiplataforma para PostgreSQL, escrito em JS.
* [SQLPro for Postgres](http://macpostgresclient.com/) - Gerenciador de PostgreSQL simples e poderoso para macOS. (Software comercial)
* [temBoard](https://github.com/dalibo/temboard) - Interface gráfica e monitoramento do PostgreSQL pela web.
* [Teable](https://github.com/teableio/teable) - Banco de dados sem código super-rápido, em tempo real, profissional e amigável para desenvolvedores.
* [TablePlus](https://tableplus.com/) - Aplicativo nativo que permite editar o banco de dados e sua estrutura. Oferece segurança de alto nível. (Software comercial)
* [TablePro](https://tablepro.app/) - Cliente PostgreSQL nativo para macOS, com visualização de EXPLAIN, diagramas ER e assistente de IA. Gratuito e de código aberto.
* [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - Ferramenta multiplataforma de administração de bancos de dados.
* [DbGate](https://dbgate.org) - O cliente de bancos de dados SQL e NoSQL mais inteligente.
* [WebDB](https://webdb.app) – IDE eficiente para bancos de dados.


<a id="distributions"></a>

### Distribuições
* [Postgres.app](https://postgresapp.com/) - A maneira mais fácil de começar a usar PostgreSQL no macOS.
* [Pigsty](https://github.com/Vonng/pigsty) - Distribuição de código aberto do PostgreSQL com tudo incluído, observabilidade avançada e conjunto de ferramentas Database-as-Code para desenvolvedores.


<a id="cli"></a>

### CLI
* [atlas](https://github.com/ariga/atlas) - Ferramenta para gerenciar e migrar esquemas de bancos de dados usando princípios modernos de DevOps.
* [pgcli](https://github.com/dbcli/pgcli) - CLI do Postgres com preenchimento automático e realce de sintaxe.
* [pgfence](https://pgfence.com) - Analisa migrações SQL do Postgres para identificar modos de bloqueio e DDL arriscado, com reescritas seguras de expansão/contração. Inclui CLI e LSP, além de extratores para Prisma, TypeORM e Knex.
* [pgxcli](https://github.com/Balaji01-4D/pgxcli) - CLI do Postgres com preenchimento automático e realce de sintaxe, escrita em Go.
* [pgplan](https://github.com/JacobArthurs/pgplan) - Compare e analise planos EXPLAIN do PostgreSQL pela CLI.
* [pgschema](https://www.pgschema.com) - Migração declarativa de esquemas do Postgres no estilo Terraform.
* [pg-schema-diff](https://github.com/stripe/pg-schema-diff) - CLI (e biblioteca Go) para comparar esquemas do Postgres e gerar migrações SQL com bloqueio mínimo.
* [MigrationPilot](https://github.com/mickelsamuel/migrationpilot) - CLI de segurança para migrações PostgreSQL que detecta DDL perigoso antes da produção — 80 regras, classificação de bloqueios, correção automática e GitHub Action.
* [pgsh](https://github.com/sastraxi/pgsh) - Crie ramificações do seu banco de dados PostgreSQL como no Git.
* [psql](https://www.postgresql.org/docs/current/static/app-psql.html) - Cliente CLI integrado do PostgreSQL.
* [psql2csv](https://github.com/fphilipe/psql2csv) - Execute uma consulta no psql e gere o resultado como CSV.
* [sabiql](https://github.com/riii111/sabiql) - TUI rápida, sem drivers, para navegar, consultar e editar bancos de dados PostgreSQL.
* [schemaspy](https://github.com/schemaspy/schemaspy) - O SchemaSpy é uma ferramenta compatível com JAVA JDBC para gerar documentação HTML do banco de dados, incluindo diagramas de entidade-relacionamento.
* [pdot](https://gitlab.com/dmfay/pdot) - Visualize e explore estruturas de bancos de dados no terminal, desde visões detalhadas do grafo de chaves estrangeiras até cascatas de gatilhos, herança de funções e permissões, entre muitos outros aspectos.
* [squix](https://github.com/eduardofuncao/squix) - Cliente SQL de linha de comando com gerenciamento de consultas e resultados interativos.


<a id="server"></a>

### Servidor
* [AgensGraph](https://bitnine.net/) - Banco de dados de grafos poderoso, baseado no PostgreSQL.
* [Apache Cloudberry](https://github.com/apache/cloudberry) - Fork MPP do PostgreSQL e alternativa de código aberto ao Greenplum Database.
* [FerretDB](https://www.ferretdb.io) - Uma alternativa verdadeiramente de código aberto ao MongoDB, construída sobre o PostgreSQL.
* [Postgres-XL](https://www.postgres-xl.org/) - Cluster escalável de bancos de dados de código aberto baseado no PostgreSQL.
* [YugabyteDB](https://yugabyte.com/) - SQL distribuído de código aberto que usa um fork do PostgreSQL sobre armazenamento distribuído e transações.


### Segurança
* [Acra](https://github.com/cossacklabs/acra) - Conjunto de ferramentas de segurança para bancos de dados SQL: proxy para proteção de dados com criptografia transparente em tempo real, firewall SQL (prevenção contra injeções SQL) e sistema de detecção de intrusões.
* [pgrls](https://github.com/pgrls/pgrls) - Analisador estático de políticas de segurança em nível de linha; contém 36 regras de segurança, desempenho e boas práticas, 10 das quais podem ser corrigidas mecanicamente; inclui um comando de comparação semântica de políticas para bloqueio no CI.


<a id="monitoring"></a>

### Monitoramento
* [check\_pgactivity](https://github.com/OPMDG/check_pgactivity) - O check\_pgactivity foi projetado para monitorar clusters PostgreSQL pelo Nagios. Oferece diversas opções para medir e monitorar métricas úteis de desempenho.
* [Check\_postgres](https://github.com/bucardo/check_postgres) - Plugin check\_postgres do Nagios para verificar o status de bancos de dados PostgreSQL.
* [coroot](https://github.com/coroot/coroot) - Ferramenta de APM e observabilidade de código aberto, alternativa ao DataDog e ao NewRelic. Usa eBPF para obter rapidamente insights sobre o desempenho do sistema.
* [Datadog](https://www.datadoghq.com/product/database-monitoring/) - Monitoramento SaaS que coleta e visualiza métricas, consultas e planos EXPLAIN, além de enviar alertas quando ocorrem problemas. (Software comercial)
* [Instrumental](https://github.com/Instrumental/instrumentald) - Monitoramento de desempenho em tempo real, incluindo [gráficos prontos](https://instrumentalapp.com/docs/instrumentald/postgresql#suggested-graphs) para facilitar a configuração. (Software comercial)
* [libzbxpgsql](https://github.com/cavaliercoder/libzbxpgsql) - Módulo abrangente de monitoramento do PostgreSQL para Zabbix.
* [myDBA](https://mydba.dev) - Monitoramento de desempenho do PostgreSQL com mais de 75 verificações automáticas de integridade, recomendação de índices com reconhecimento do cluster, análise de consultas e monitoramento de extensões para TimescaleDB, pgvector e PostGIS. (Software comercial)
* [PMM](https://github.com/percona/pmm) - Percona Monitoring and Management (PMM) é uma plataforma gratuita e de código aberto para monitorar e gerenciar PostgreSQL, MySQL e MongoDB.
* [Pome](https://github.com/rach/pome) - Pome significa PostgreSQL Metrics. É um painel de métricas do PostgreSQL para acompanhar a integridade do seu banco de dados.
* [pgmetrics](https://pgmetrics.io/) - Ferramenta de código aberto, sem dependências e distribuída como um único binário, que coleta diversas informações e estatísticas de um servidor PostgreSQL em execução e as exibe em texto fácil de ler ou as exporta como JSON e CSV para uso em scripts.
* [pg\_view](https://github.com/zalando/pg_view) - Ferramenta de linha de comando de código aberto que mostra estatísticas globais do sistema, informações por partição, estatísticas de memória e outros dados.
* [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - Monitor flexível de métricas do PostgreSQL, fácil de começar a usar e focado em painéis do Grafana.
* [pgwd](https://github.com/hrodrig/pgwd) - Monitora o uso de conexões PostgreSQL e sessões obsoletas, com alertas por limite, métricas Prometheus e vários canais de notificação.
* [pgbench](https://www.postgresql.org/docs/devel/static/pgbench.html) - Execute um teste de benchmark no PostgreSQL.
* [opm.io](http://opm.io) - Open PostgreSQL Monitoring é um conjunto gratuito de software para ajudar a gerenciar servidores PostgreSQL. Ele coleta estatísticas, exibe painéis e envia avisos quando algo dá errado.
* [okmeter.io](https://okmeter.io/pg) - Monitoramento comercial SaaS baseado em agente, com um plugin PostgreSQL detalhado. Coleta automaticamente centenas de estatísticas, exibe painéis sobre todos os aspectos e envia alertas quando algo dá errado. (Software comercial)
* [dexter](https://github.com/ankane/dexter) - Indexador automático para Postgres. Detecta consultas lentas e cria índices, se configurado para isso.
* [pg_ash](https://github.com/NikolayS/pg_ash) - Histórico de sessões ativas para PostgreSQL. Coleta amostras de pg_stat_activity a cada segundo via pg_cron, armazena snapshots codificados e oferece 32 funções SQL para analisar eventos de espera. Apenas SQL, sem extensões, funciona em provedores gerenciados (RDS, Cloud SQL, Supabase etc.).
* [pg_exporter](https://github.com/Vonng/pg_exporter) - Exportador Prometheus totalmente personalizável para PostgreSQL e Pgbouncer, com controle granular de execução.
* [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - Exportador Prometheus para métricas do servidor PostgreSQL.
* [StatsMgr](https://codeberg.org/data-bene/statsmgr) - Extensão PostgreSQL de código aberto, projetada para gerenciamento avançado de estatísticas de forma eficiente e organizada.
* [pgvitals](https://github.com/pgvitals/pgvitals) - Coleção de 40 consultas de diagnóstico somente leitura para identificar problemas comuns de desempenho (consultas lentas, inchaço, atraso do vacuum, contenção de bloqueios, atraso de replicação e risco de wraparound). Usa apenas o catálogo de sistema padrão, sem exigir extensões; inclui também uma CLI opcional que agrega os resultados em uma pontuação de saúde de 0 a 100.


<a id="extensions"></a>

### Extensões
* [pgxn](https://pgxn.org/) PostgreSQL Extension Network - Ponto central de distribuição de muitas extensões PostgreSQL de código aberto.
* [Extensions listing by joelonsql](https://gist.github.com/joelonsql/e5aa27f8cc9bd22b8999b7de8aee9d47) - Mais de 1.000 extensões PostgreSQL.
* [Pigsty extensions catalogue](https://ext.pigsty.io/list/) - Mais de 400 extensões PostgreSQL.
* [AGE](https://github.com/apache/age) - Adiciona suporte completo a banco de dados de grafos, incluindo consultas Cypher.
* [OrioleDB](https://www.orioledb.com/) - Mecanismo de armazenamento nativo da nuvem para PostgreSQL. O OrioleDB é uma extensão do PostgreSQL que combina as vantagens dos mecanismos em disco e em memória.
* [Citus](https://github.com/citusdata/citus) - Cluster PostgreSQL escalável para cargas de trabalho em tempo real.
* [cstore\_fdw](https://github.com/citusdata/cstore_fdw) - Armazenamento colunar para análises com PostgreSQL.
* [cyanaudit](https://pgxn.org/dist/cyanaudit/) - O Cyan Audit registra no próprio banco de dados toda a atividade DML, coluna por coluna.
* [pg_search](https://github.com/paradedb/paradedb) - Extensão PostgreSQL que permite pesquisar texto completo em tabelas SQL usando o algoritmo BM25, uma função de classificação de ponta para pesquisa de texto completo.
* [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s) - Extensão PostgreSQL para recuperação lexical da família BM25, com método nativo de acesso a índices e APIs SQL para consultas top-k.
* [pg_cron](https://github.com/citusdata/pg_cron) - Execute tarefas periódicas no PostgreSQL.
* [pglogical](https://github.com/2ndQuadrant/pglogical) - Extensão que fornece replicação lógica por streaming.
* [pgcat](https://github.com/kingluo/pgcat) - Replicação lógica aprimorada do PostgreSQL.
* [pg\_barcode](https://github.com/btouchard/pg_barcode/) - Gerador de QR codes SVG e códigos Data Matrix para PostgreSQL.
* [pg\_partman](https://github.com/pgpartman/pg_partman) - Extensão de gerenciamento de particionamento para PostgreSQL.
* [pg\_paxos](https://github.com/citusdata/pg_paxos/) - Implementação básica do Paxos e de replicação de tabelas baseada em Paxos para um cluster de nós PostgreSQL.
* [pg\_shard](https://github.com/citusdata/pg_shard) - Extensão para escalar horizontalmente leituras e gravações em tempo real.
* [pg\_stat\_monitor](https://github.com/percona/pg_stat_monitor) - Ferramenta de monitoramento do desempenho de consultas para PostgreSQL.
* [pg\_squeeze](https://github.com/cybertec-postgresql/pg_squeeze) - Extensão para limpeza automática de inchaço com bloqueio mínimo.
* [PGStrom](https://wiki.postgresql.org/wiki/PGStrom) - Extensão que transfere cargas de trabalho intensivas em CPU para a GPU.
* [PipelineDB](https://www.confluent.io/blog/pipelinedb-team-joins-confluent/) - Extensão PostgreSQL que executa continuamente consultas SQL sobre fluxos de dados, armazenando resultados incrementais em tabelas.
* [plpgsql\_check](https://github.com/okbob/plpgsql_check) - Extensão que permite verificar o código-fonte PL/pgSQL.
* [PostGIS](http://postgis.net/) - Objetos espaciais e geográficos para PostgreSQL.
* [PG\_Themis](https://github.com/cossacklabs/pg_themis) - Vínculo do Postgres, como extensão, para a biblioteca criptográfica Themis, que fornece vários serviços de segurança no PgSQL.
* [zomboDB](https://github.com/zombodb/zombodb) - Extensão que permite pesquisa eficiente de texto completo usando índices apoiados pelo Elasticsearch.
* [pgMemento](https://github.com/pgMemento/pgMemento) - Fornece uma trilha de auditoria dos dados em um banco de dados PostgreSQL por meio de gatilhos e funções do servidor escritas em PL/pgSQL.
* [TimescaleDB](https://www.timescale.com/) - Banco de dados de séries temporais de código aberto, totalmente compatível com Postgres e distribuído como extensão.
* [pgTAP](https://pgtap.org/) - Framework de testes de banco de dados para Postgres.
* [HypoPG](https://github.com/HypoPG/hypopg) - O HypoPG oferece o recurso de índices hipotéticos/virtuais.
* [pgRouting](https://github.com/pgRouting/pgrouting) - O pgRouting estende o banco de dados geoespacial PostGIS/PostgreSQL para fornecer roteamento geoespacial e outras funcionalidades de análise de redes.
* [PGroonga](https://pgroonga.github.io/) - O PGroonga fornece um novo método de acesso a índices que usa Groonga, permitindo pesquisa de texto completo extremamente rápida em todos os idiomas.
* [PGAudit](https://www.pgaudit.org/) - A extensão de auditoria do PostgreSQL (pgaudit) fornece registros detalhados de auditoria de sessões e/ou objetos usando o recurso de registro padrão do PostgreSQL.
* [PostgresML](https://postgresml.org/) - Aprendizado de máquina e IA dentro do banco de dados, incluindo vetores, LLMs e aprendizado de máquina clássico. Treine, faça previsões e gerencie todo o ciclo de vida de modelos de aprendizado de máquina usando apenas SQL.
* [ParadeDB](https://github.com/paradedb/paradedb) - Postgres para pesquisa e análise.
* [PostgreSQL Anonymizer](https://postgresql-anonymizer.readthedocs.io/en/stable/) - Extensão para mascarar ou substituir informações de identificação pessoal (PII) ou dados comercialmente sensíveis em um banco de dados Postgres, por meio de rótulos de segurança PG.


<a id="platforms"></a>

### Plataformas
* [Atlas4D](https://github.com/crisbez/atlas4d-base) - Plataforma espaço-temporal 4D de código aberto que combina PostGIS, TimescaleDB, pgvector e H3 para oferecer inteligência geoespacial e de séries temporais unificada.
* [neond](https://github.com/matisiekpl/neond) - Plano de controle para Postgres focado na experiência do desenvolvedor (DX), com ramificações, PITR e durabilidade no S3. Distribuído como um único contêiner Docker com painel web; apresenta-se como substituto de `postgres:latest` para cargas de trabalho não críticas.


<a id="work-queues"></a>

### Filas de trabalho
* [BeanQueue](https://github.com/LaunchPlatform/bq) - Framework Python de filas de trabalho baseado em SKIP LOCKED, LISTEN e NOTIFY.
* [pgmq](https://github.com/pgmq/pgmq) - Fila de mensagens leve. Semelhante ao AWS SQS e ao RSMQ, mas sobre Postgres.
* [river](https://github.com/riverqueue/river) - Sistema de processamento de tarefas de alto desempenho para Go e Postgres.
* [pgBoss](https://github.com/timgit/pg-boss) - Enfileiramento de tarefas no Postgres a partir do Node.js, com estilo.
* [dbos](https://www.dbos.dev/) - Fluxos de trabalho duráveis em TypeScript e Python.
* [Graphile Worker](https://worker.graphile.org) - Fila de tarefas de alto desempenho para PostgreSQL, escrita em Node.js.
* [@andyrmitchell/pg-queue](https://www.npmjs.com/package/@andyrmitchell/pg-queue) - A fila Postgres para Node.js que não exige manutenção.


<a id="optimization"></a>

### Otimização
* [EverSQL](https://www.eversql.com/) - Ferramenta automatizada de otimização, monitoramento e análise de consultas, além de recomendação de índices. (Software comercial)
* [PEV2](https://github.com/dalibo/pev2) - Visualizador on-line de EXPLAIN do Postgres.
* [pg_flame](https://github.com/mgartner/pg_flame) - Gerador de flame graphs para planos de consulta.
* [PgHero](https://github.com/ankane/pghero) - Insights de PostgreSQL de forma simples.
* [pgMustard](https://www.pgmustard.com/) - Interface moderna
para `EXPLAIN`, que também oferece dicas de desempenho.
* [pgtune](https://github.com/gregs1104/pgtune/) - Assistente de configuração do PostgreSQL.
* [pgtune](https://github.com/le0pard/pgtune) - Versão on-line do assistente de configuração do PostgreSQL.
* [pgconfig.org](https://github.com/sebastianwebber/pgconfig) - Ferramenta on-line de configuração do PostgreSQL (também baseada em pgtune).
* [PoWA](https://powa.readthedocs.io/en/latest/) - O PostgreSQL Workload Analyzer coleta estatísticas de desempenho e fornece gráficos em tempo real para ajudar a monitorar e ajustar seus servidores PostgreSQL.
* [pg_web_stats](https://github.com/kirs/pg_web_stats) - Interface web para visualizar pg_stat_statements.
* [TimescaleDB Tune](https://github.com/timescale/timescaledb-tune) - Programa para ajustar um banco de dados TimescaleDB e obter o melhor desempenho com base nos recursos do host, como memória e número de CPUs.
* [Metis](https://www.metisdata.io/product/troubleshooting) - O Metis oferece observabilidade e ajuste de desempenho para bancos de dados SQL, incluindo PostgreSQL. (Software comercial)
* [aqo](https://github.com/postgrespro/aqo) - Otimização adaptativa de consultas para PostgreSQL.
* [pgassistant](https://github.com/beh74/pgassistant-community) - Ferramenta PostgreSQL para ajudar desenvolvedores a compreender e otimizar bancos de dados com LLM e integração com pgTune.


<a id="utilities"></a>

### Utilitários
* [apgdiff](https://www.apgdiff.com/) - Compara dois arquivos de dump de banco de dados e gera instruções DDL que podem atualizar um esquema antigo para um novo.
* [bemi](https://github.com/BemiHQ/bemi) - Rastreamento automático de alterações de dados para PostgreSQL.
* [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - O ERAlchemy gera diagramas de entidade-relacionamento (ER) a partir de bancos de dados.
* [flyway](https://flywaydb.org/) - Ferramenta de migração de esquemas para Postgres e outros bancos de dados.
* [GatewayD](https://github.com/gatewayd-io/gatewayd) - Gateway de banco de dados nativo da nuvem e framework para criar aplicações orientadas a dados. Assim como gateways de API, mas para bancos de dados.
* [Greenmask](https://github.com/GreenmaskIO/greenmask) - Ferramenta de anonimização de bancos de dados e geração de dados sintéticos para MySQL e PostgreSQL.
* [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - APIs GraphQL instantâneas e extremamente rápidas em tempo real sobre Postgres, com controle de acesso granular; também aciona webhooks em eventos do banco de dados.
* [ldap2pg](https://github.com/dalibo/ldap2pg) - Sincronize funções e privilégios a partir de YML e LDAP.
* [migra](https://github.com/djrobstep/migra) - Como diff, mas para esquemas Postgres.
* [mysql-postgresql-converter](https://github.com/lanyrd/mysql-postgresql-converter) - Script da Lanyrd para conversão de MySQL para PostgreSQL.
* [NServiceBus.Transport.PostgreSql](https://github.com/Particular/NServiceBus.SqlServer) - A biblioteca NServiceBus.Transport.PostgreSql permite que desenvolvedores .NET [usem um banco de dados PostgreSQL como intermediário de mensagens](https://docs.particular.net/transports/postgresql). (Software comercial)
* [ora2pg](http://ora2pg.darold.net) - Módulo Perl para exportar um esquema de banco de dados Oracle para um esquema compatível com PostgreSQL.
* [pg\_activity](https://github.com/dalibo/pg_activity) - Aplicação semelhante ao top para monitorar a atividade do servidor PostgreSQL.
* [pg-formatter](https://github.com/gajus/pg-formatter) - Formatador de sintaxe SQL para PostgreSQL (Node.js).
* [pg-safe-migrate](https://github.com/defnotwig/pg-safe-migrate) - Mecanismo de migração Node.js que prioriza a segurança, com bloqueios consultivos, detecção de divergências por SHA-256 e 10 regras de lint integradas para PostgreSQL.
* [pganalyze](https://pganalyze.com) - Monitoramento de desempenho do PostgreSQL. (Software comercial)
* [pgbadger](https://github.com/darold/pgbadger) - Analisador rápido de logs do PostgreSQL.
* [PgBouncer](http://www.pgbouncer.org/) - Pool de conexões leve para PostgreSQL.
* [pgCenter](https://github.com/lesovsky/pgcenter) - Oferece uma interface prática para várias estatísticas e tarefas de gerenciamento, recarregar serviços, visualizar arquivos de log e cancelar ou encerrar processos de backend do banco de dados.
* [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - Réplica em tempo real de MySQL para PostgreSQL, com migração opcional de substituição de tipos e recursos de migração.
* [pgclimb](https://github.com/lukasmartinelli/pgclimb) - Exporte dados do PostgreSQL para diferentes formatos.
* [pg_docs_bot](https://github.com/mchristofides/pg_docs_bot/) - Extensão de navegador que redireciona links da documentação do PostgreSQL para a versão atual.
* [pgfutter](https://github.com/lukasmartinelli/pgfutter) - Importe CSV e JSON para PostgreSQL com facilidade.
* [pgFirstAid](https://github.com/randoneering/pgFirstAid) - Função PostgreSQL de código aberto, fácil de implantar, que fornece uma lista priorizada de ações para melhorar a estabilidade e o desempenho do banco de dados. Inspirada diretamente no FirstResponderKit de Brent Ozar para SQL Server.
* [PGInsight](http://pginsight.io/) - Ferramenta CLI para explorar facilmente os detalhes do seu banco de dados PostgreSQL.
* [pg_insights](https://github.com/lob/pg_insights) - SQL prático para monitorar a integridade de bancos de dados Postgres.
* [pgloader](https://github.com/dimitri/pgloader) - Carrega dados no PostgreSQL usando o protocolo de streaming COPY e usa threads separados para leitura e gravação.
* [pgMonitor](https://github.com/CrunchyData/pgmonitor) - Coleta e visualização de métricas do Postgres, implantável em servidores físicos, máquinas virtuais ou Kubernetes.
* [pgpool-II](https://www.pgpool.net/mediawiki/index.php/Main_Page) - Middleware que oferece pool de conexões, replicação, balanceamento de carga e limitação de conexões excedentes.
* [pgspot](https://github.com/timescale/pgspot) - Identifique vulnerabilidades em scripts de extensões PostgreSQL.
* [pg-spot-operator](https://github.com/pg-spot-ops/pg-spot-operator) - Daemon para executar Postgres com estado em VMs AWS Spot de baixo custo.
* [pgsync](https://github.com/ankane/pgsync) - Ferramenta para sincronizar dados do PostgreSQL com sua máquina local.
* [PGXN client](https://github.com/pgxn/pgxnclient) - Ferramenta de linha de comando para interagir com a PostgreSQL Extension Network.
* [postgresql-metrics](https://github.com/spotify/postgresql-metrics) - Ferramenta que extrai e fornece métricas do seu banco de dados PostgreSQL.
* [PostgREST](https://github.com/PostgREST/postgrest) - Fornece uma API totalmente RESTful a partir de qualquer banco de dados PostgreSQL existente.
* [pREST](https://github.com/prest/prest) - Forneça uma API RESTful a partir de qualquer banco de dados PostgreSQL (Golang).
* [PostGraphile](https://github.com/graphile/postgraphile) - API GraphQL instantânea ou esquema GraphQL para seu banco de dados PostgreSQL.
* [yoke](https://github.com/nanopack/yoke) - Cluster PostgreSQL de alta disponibilidade, com failover automático e recuperação automatizada do cluster.
* [pglistend](https://github.com/kabirbaidhya/pglistend) - Daemon leve PostgreSQL `LISTEN`/`NOTIFY`, construído sobre `node-postgres`.
* [ZSON](https://github.com/postgrespro/zson) - Extensão PostgreSQL para compactação transparente de JSONB.
* [pg_bulkload](http://ossc-db.github.io/pg_bulkload/index.html) - Utilitário de carregamento de dados de alta velocidade para PostgreSQL.
* [pg_migrate](https://github.com/jwdeitch/pg_migrate) - Gerencie bases de código PostgreSQL e simplifique o controle de versões (VCS).
* [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - Agendador avançado de tarefas para PostgreSQL.
* [sqitch](https://github.com/sqitchers/sqitch) - Ferramenta para gerenciar a implantação de esquemas com controle de versões.
* [pgmigrate](https://github.com/yandex/pgmigrate) - Ferramenta CLI para evoluir migrações de esquema, desenvolvida pela Yandex.
* [pgcmp](https://github.com/cbbrowne/pgcmp) - Ferramenta para comparar esquemas de bancos de dados, com capacidade de aceitar algumas diferenças persistentes.
* [pg-differ](https://github.com/multum/pg-differ) - Ferramenta para inicializar/atualizar facilmente a estrutura de tabelas PostgreSQL, como alternativa a migrações (Node.js).
* [Qail](https://github.com/qail-io/qail) - Pipeline AST tipado, com prioridade para Rust, para PostgreSQL, com verificações de consultas em tempo de compilação e escopo de locatário integrado.
* [sqlcheck](https://github.com/jarulraj/sqlcheck) - Detecta automaticamente antipadrões SQL comuns. Esses antipadrões costumam deixar as consultas mais lentas; corrigi-los ajuda a acelerá-las.
* [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - Ferramenta de diagnóstico de nova geração que permite coletar análises aprofundadas sobre a integridade de um banco de dados Postgres.
* [Pyrseas](https://github.com/perseas/Pyrseas) - Controle de versões de esquemas de bancos de dados Postgres.
* [ScaffoldHub.io](https://scaffoldhub.io) - Gere aplicações PostgreSQL full-stack com Angular, Vue ou React. (Software comercial)
* [planter](https://github.com/achiku/planter) - Gere descrições textuais de diagramas ER em PlantUML a partir de tabelas PostgreSQL.
* [pgroll](https://github.com/xataio/pgroll) - Migrações de esquema reversíveis e sem interrupção para Postgres.
* [RegreSQL](https://github.com/dimitri/regresql) - Ferramenta para criar, manter e executar um conjunto de testes de regressão para consultas SQL.
* [diesel-guard](https://github.com/ayarotsky/diesel-guard) - Linter para padrões perigosos de migração do Postgres no Diesel e no SQLx.


<a id="language-bindings"></a>

### Vínculos de linguagem
* Common Lisp: [Postmodern](https://github.com/marijnh/Postmodern)
* Clojure: [clj-postgresql](https://github.com/remodoy/clj-postgresql)
* Elixir: [postgrex](https://github.com/elixir-ecto/postgrex)
* Go: [pq](https://github.com/lib/pq), [pgx](https://github.com/jackc/pgx), [go-pg](https://github.com/go-pg/pg)
* Haskell: [postgresql-simple](http://hackage.haskell.org/package/postgresql-simple)
* Java: [PostgreSQL JDBC Driver](https://jdbc.postgresql.org/), [Vert.x PostgreSQL Client](https://vertx.io/docs/vertx-pg-client/java/)
* Lua: [luapgsql](https://github.com/arcapos/luapgsql)
* .Net/.Net Core: [Npgsql](https://github.com/npgsql/npgsql)
* Node: [node-postgres](https://github.com/brianc/node-postgres), [pg-promise](https://github.com/vitaly-t/pg-promise), [pogi](https://github.com/holdfenytolvaj/pogi), [slonik](https://github.com/gajus/slonik), [postgres](https://github.com/porsager/postgres)
* Perl: [DBD-Pg](https://metacpan.org/pod/distribution/DBD-Pg/Pg.pm)
* PHP: [Pomm](http://www.pomm-project.org), [pecl/pq](https://github.com/m6w6/ext-pq)
* Python: [psycopg2](https://pypi.org/project/psycopg2/), [asyncpg](https://pypi.org/project/asyncpg/), [pg8000](https://pypi.org/project/pg8000/)
* R: [RPostgres](https://github.com/r-dbi/RPostgres), [RPostgreSQL](https://github.com/tomoakin/RPostgreSQL)
* Ruby: [pg](https://github.com/ged/ruby-pg)
* Rust: [rust-postgresql](https://github.com/sfackler/rust-postgres), [pgx](https://github.com/tcdi/pgx), [wtx](https://github.com/c410-f3r/wtx)
* TypeScript: [zapatos](https://github.com/jawj/zapatos)
* Zig: [pg.zig](https://github.com/karlseguin/pg.zig), [qail-zig](https://github.com/qail-io/qail-zig)


<a id="paas-postgresql-as-a-service"></a>

### PaaS (PostgreSQL como serviço)
* [Aiven PostgreSQL](https://aiven.io/postgresql) - PostgreSQL como serviço na AWS, Azure, DigitalOcean, Google Cloud e UpCloud; os planos vão de instâncias de nó único por US$ 19/mês a grandes configurações de alta disponibilidade; inclui teste gratuito por duas semanas.
* [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql/) - Amazon Relational Database Service (RDS) para PostgreSQL.
* [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/) - O Azure Database for PostgreSQL oferece banco de dados PostgreSQL comunitário totalmente gerenciado, pronto para empresas. Inclui alta disponibilidade integrada, escalabilidade elástica e integração nativa com o ecossistema Azure.
* [Crunchy Bridge](https://www.crunchydata.com/products/crunchy-bridge/) - Postgres totalmente gerenciado pelos especialistas em Postgres. Disponível em todos os principais provedores de nuvem: Amazon AWS, Google GCP e Microsoft Azure. Sem dependência de fornecedor e com suporte completo a superusuário.
* [Database Labs](https://www.databaselabs.io) - Obtenha em minutos um servidor PostgreSQL na nuvem pronto para produção, a partir de US$ 20 por mês. Inclui backups, monitoramento, atualizações e suporte técnico 24/7.
* [DigitalOcean Managed Databases](https://www.digitalocean.com/products/managed-databases/) - Bancos de dados PostgreSQL totalmente gerenciados. Sem plano gratuito. A partir de US$ 15/mês. Backups diários com recuperação pontual. Nós em espera com failover automático.
* [Google Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres/) - Serviço de banco de dados totalmente gerenciado que facilita configurar, manter, gerenciar e administrar seus bancos de dados relacionais PostgreSQL na Google Cloud Platform.
* [Heroku Postgres](https://elements.heroku.com/addons/heroku-postgresql) - Planos que vão do gratuito a grandes configurações, operados por especialistas em PostgreSQL. Não é necessário executar sua aplicação na Heroku. O plano gratuito inclui 10.000 linhas, 20 conexões, até dois backups e suporte ao PostGIS.
* [OVHcloud Cloud Databases](https://www.ovhcloud.com/en/public-cloud/databases/) - PostgreSQL altamente disponível, escalável e seguro. Backups diários com recuperação pontual, sem dependência de fornecedor e tráfego de entrada e saída gratuito.
* [Render Managed PostgreSQL](https://render.com/docs/databases) - PostgreSQL gerenciado, seguro, confiável e totalmente descomplicado. Todos os planos incluem criptografia em repouso, backups automatizados e armazenamento SSD expansível. Os planos começam em US$ 7 por mês para 256 MB de RAM e 1 GB de armazenamento (gratuito nos primeiros 90 dias).
* [Rivestack](https://rivestack.io) - PostgreSQL gerenciado com pgvector pré-instalado e ajustado com HNSW para pesquisa vetorial. Nível gratuito (2 GB, sem cartão de crédito), instâncias dedicadas com preço fixo a partir de US$ 15/mês, em regiões da UE e dos EUA.
* [ScaleGrid PostgreSQL DBaaS](https://scalegrid.io/postgresql.html) - Hospedagem PostgreSQL totalmente gerenciada, com alta disponibilidade, servidores dedicados e controle de superusuário, como alternativa número 1 ao Amazon RDS em várias nuvens.
* [Scaleway Managed Database](https://www.scaleway.com/en/database/) - Bancos de dados PostgreSQL totalmente gerenciados, com alta disponibilidade, escalabilidade e backups automatizados, hospedados na UE. A partir de € 10 por mês.
* [Supabase](https://www.supabase.com) - Postgres totalmente gerenciado com réplicas de leitura, recuperação pontual, pacotes de suporte, interface gráfica no navegador e um generoso nível gratuito.
* [Neon](https://neon.tech) - PostgreSQL serverless totalmente gerenciado. O Neon separa armazenamento e computação para oferecer recursos modernos para desenvolvedores, como serverless, ramificações, armazenamento ilimitado e muito mais.
* [Nile](https://www.thenile.dev/) - PostgreSQL totalmente gerenciado. O Nile desacopla armazenamento e computação e virtualiza locatários para entregar aplicações de IA multi-inquilino com rapidez, segurança e escala ilimitada. O nível gratuito oferece bancos de dados ilimitados.
* [PlanetScale](https://planetscale.com/postgres) - O PlanetScale for Postgres oferece clusters de bancos de dados PostgreSQL totalmente gerenciados e de alta disponibilidade, construídos sobre infraestrutura moderna de nuvem.
* [Vela](https://vela.run) - Backend como serviço baseado em Postgres, criado para aplicações modernas de IA. Oferece ramificações e clones instantâneos de bancos de dados, ambientes de teste semelhantes à produção e escalabilidade serverless.
* [Thalassa Cloud DBaaS](https://thalassa.cloud/products/databases/postgresql/) - Banco de dados PostgreSQL totalmente gerenciado, multizona de disponibilidade, com backups automatizados e hospedado nos Países Baixos.


<a id="docker-images"></a>

### Imagens Docker
* [citusdata/citus](https://hub.docker.com/r/citusdata/citus/) - Imagens oficiais do Citus com extensões citus. Baseadas no contêiner oficial do Postgres.
* [mdillon/postgis](https://hub.docker.com/r/mdillon/postgis/) - PostGIS 2.3 no Postgres 9. Baseada no contêiner oficial do Postgres.
* [paradedb/paradedb](https://hub.docker.com/r/paradedb/paradedb/) - ParadeDB é Postgres para pesquisa e análise. Baseada no contêiner oficial do Postgres com a extensão pg_search.
* [pglayers](https://github.com/pglayers/pglayers) - Extensões PostgreSQL pré-compiladas como camadas Docker combináveis. Mais de 50 extensões e imagens combinadas prontas para uso (completas e compatíveis com Azure).
* [postgres](https://hub.docker.com/_/postgres/) - Contêiner oficial do Postgres (do Docker).


<a id="kubernetes"></a>

### Kubernetes
* [Crunchy Operator](https://github.com/CrunchyData/postgres-operator) - PostgreSQL para produção no Kubernetes, de clusters Postgres de alta disponibilidade a serviços de banco de dados em grande escala.
* [Fujitsu Enterprise Postgres for Kubernetes](https://www.postgresql.fastware.com/) - PostgreSQL de nível empresarial na OpenShift Container Platform. (Software comercial)
* [Kubegres Operator](https://github.com/reactive-tech/kubegres) - Operador Kubernetes que permite implantar um ou vários clusters de instâncias PostgreSql e gerenciar a replicação, o failover e o backup de bancos de dados.
* [StackGres Operator](https://github.com/ongres/stackgres/) - Stack PostgreSQL completo no Kubernetes.
* [Zalando Operator](https://github.com/zalando/postgres-operator) - Cria e gerencia clusters PostgreSQL em execução no Kubernetes.
* [CloudNativePG operator](https://github.com/cloudnative-pg/cloudnative-pg) - Plataforma abrangente, projetada para gerenciar perfeitamente bancos de dados PostgreSQL em ambientes Kubernetes.
* [KubeDB operator](https://kubedb.com/) - Execute bancos de dados de nível de produção no Kubernetes. (Software comercial)
* [Percona PostgreSQL Operator](https://github.com/percona/percona-postgresql-operator) - Operador Percona para PostgreSQL baseado no operador da Crunchy Data.
* [Percona Everest Operator](https://github.com/percona/everest-operator) - Operador Kubernetes responsável por gerenciar o ciclo de vida de bancos de dados MySQL, MongoDB e PostgreSQL. Usa internamente os operadores Kubernetes da Percona para MySQL, MongoDB e PostgreSQL, mas oferece uma API unificada e um painel único para gerenciar os três tipos de banco de dados.


<a id="resources"></a>

## Recursos


<a id="tutorials"></a>

### Tutoriais
* [Backup and recover a PostgreSQL DB using wal-e](https://coderwall.com/p/cwe2_a/backup-and-recover-a-postgres-db-using-wal-e) - Tutorial sobre como configurar o arquivamento contínuo no PostgreSQL usando wal-e.
* [Operations cheat sheet](https://wiki.postgresql.org/wiki/Operations_cheat_sheet) - Resumo de operações da Wiki do PostgreSQL.
* [PG Casts](https://www.pgcasts.com) - Screencasts semanais gratuitos sobre PostgreSQL, da Hashrocket.
* [Postgres Guide](http://postgresguide.com/) - Guia criado para ajudar iniciantes e usuários experientes a encontrar dicas específicas e explorar as ferramentas disponíveis no PostgreSQL.
* [PostgreSQL Access Control](https://andersnasell.gumroad.com/l/postgresql-access-control) - O modelo mental completo: funções, concessões, propriedade, associação, políticas e privilégios padrão como um sistema integrado. PDF e vídeo, cerca de 60 min.
* [PostgreSQL Exercises](https://pgexercises.com/) - Site que facilita aprender PostgreSQL por meio de exercícios.
* [tutorialspoint PostgreSQL tutorial](http://www.tutorialspoint.com/postgresql/) - Coleção muito abrangente de tutoriais sobre PostgreSQL.
* [postgresDBSamples](https://github.com/morenoh149/postgresDBSamples) - Coleção de esquemas de exemplo do Postgres.
* [PostgreSQL Primer for Busy People](https://zaiste.net/posts/postgresql-primer-for-busy-people/) - Coleção dos comandos mais comuns usados no PostgreSQL.
* [pg-utils](https://github.com/dataegret/pg-utils) - Ferramentas úteis para administradores de banco de dados, da Data Egret.
* [pagila](https://github.com/xzilla/pagila) - Banco de dados de exemplo Pagila para Postgres.
* [SQL Syntax Cheat Sheet](https://github.com/mergisi/sql-syntax-cheat-sheet) - Referência abrangente de sintaxe SQL, que abrange funções de janela, CTEs e sintaxe específica do PostgreSQL (UPSERT, consultas JSON e operações com arrays).


<a id="blogs"></a>

### Blogs
* [Planet PostgreSQL](https://planet.postgresql.org/) - Serviço agregador de blogs sobre PostgreSQL.
* [Andrew Dunstan's PostgreSQL and Technical blog](http://adpgtech.blogspot.com/search/label/PostgreSQL/)
* [Bruce Momjian's PostgreSQL blog](https://momjian.us/main/blogs/pgblog.html)
* [Craig Kerstiens PostgreSQL posts](http://www.craigkerstiens.com/categories/postgres/) - Conjunto de publicações sobre recursos interessantes, dicas e truques do PostgreSQL.
* [Database Soup](http://www.databasesoup.com/search/label/postgresql/) - Blog de Josh Berkus.
* [Michael Paquier's blog](https://paquier.xyz/)
* [Percona's PostgreSQL blog posts](https://www.percona.com/blog/category/postgresql/)
* [Robert Haas' blog](http://rhaas.blogspot.com/search/label/postgresql/)
* [select * from depesz;](https://www.depesz.com/tag/postgresql/) - Blog de Hubert Lubaczewski.
* [Metis Blog](https://www.metisdata.io/blog) - Conjunto de publicações sobre PostgreSQL, bancos de dados SQL, desempenho e otimização.
* [Digoal's PostgreSQL and Technical blog(Chinese Language)](https://github.com/digoal/blog/blob/master/README.md) 
* [Pigsty blog / PostgreSQL](https://pigsty.io/blog/pg/) - Blog do autor do PIGSTY, com artigos interessantes sobre PostgreSQL, além de bancos de dados e infraestrutura de nuvem.
* [BigData Boutique Blog / PostgreSQL](https://bigdataboutique.com/blog/tagged/postgresql) - Blog da equipe BigData Boutique, principalmente com foco em análise de dados.


### Livros
* [PostgreSQL Mistakes and How to Avoid Them](https://www.manning.com/books/postgresql-mistakes-and-how-to-avoid-them)
* [The Internals of PostgreSQL](https://www.interdb.jp/pg/index.html) - E-book gratuito de Hironobu Suzuki.
* [PostgreSQL 14 Internals](https://postgrespro.com/community/books/internals) - E-book gratuito de Egor Rogov.
* [Lift the Elephant](https://leanpub.com/lift-the-elephant) - Guia prático para escalar Postgres em produção, abordando ajuste, pool de conexões, particionamento e alta disponibilidade.



<a id="documentation"></a>

### Documentação
* [Wiki](https://wiki.postgresql.org/wiki/Main_Page) - Documentação para usuários, guias práticos e dicas e truques.
* [pgPedia](https://pgpedia.info/) - Enciclopédia de assuntos relacionados ao PostgreSQL.
* [create_pg_super_document](https://ryogrid.github.io/create_pg_super_document/index.html) - Projeto que busca gerar documentação para todos os símbolos da base de código PostgreSQL usando agentes de IA.


<a id="newsletters"></a>

### Boletins informativos

* [Postgres Weekly](https://postgresweekly.com/) - Newsletter semanal com artigos, notícias e repositórios relevantes para PostgreSQL.
* [pgMustard newsletter](https://www.pgmustard.com/newsletter) - Newsletter mensal com artigos e vídeos sobre o desempenho do Postgres.
* [pgsql-hackers Weekly Digest](https://ryogrid.net/pgsql-hackers-digest/) - Resumo semanal da lista de discussão pgsql-hackers, com uma relação de tópicos ativos, resumos de discussões e muito mais.


### Podcasts
* [PostgresFM](https://postgres.fm/) - Discussões semanais sobre tópicos relacionados ao Postgres.
* [Scaling Postgres](https://www.scalingpostgres.com/) - Série de vídeos e blog sobre Postgres, de Creston Jamison.
* [Path to Citus Con](https://www.citusdata.com/podcast/path-to-citus-con/) - Entrevistas mensais com pessoas do universo Postgres.

<a id="videos"></a>

### Vídeos
* [Citus Data Youtube channel](https://www.youtube.com/channel/UC8jpoK1BqQhDh6HDGFnM_DA/videos) - Vídeos relacionados ao Citus.
* [EnterpriseDB Youtube channel](https://www.youtube.com/channel/UCkIPoYyNr1OHgTo0KwE9HJw) - Vídeos relacionados à EnterpriseDB.
* [Postgres Conference Youtube channel](https://www.youtube.com/channel/UCsJkVvxwoM7R9oRbzvUhbPQ/videos) - Vídeos de conferências.
* [Scaling Postgres](https://www.scalingpostgres.com/) - Seleções semanais de conteúdo relacionado ao PostgreSQL.
* [PostgresTV Youtube channel](https://www.youtube.com/@PostgresTV) - Palestras, sessões de desenvolvimento, entrevistas e episódios de podcast sobre Postgres.

<a id="community"></a>

### Comunidade
* [Mailing lists](https://www.postgresql.org/list/) - Listas de discussão oficiais do Postgres para suporte, divulgação e outros assuntos. Um dos principais canais de comunicação da comunidade Postgres.
* [Reddit](https://www.reddit.com/r/PostgreSQL/) - Comunidade do Reddit para usuários do PostgreSQL, com mais de 12.000 pessoas.
* [Slack](https://pgtreats.info/slack-invite) - Espaço de trabalho do Slack para Postgres, com mais de 20 mil membros.
* Telegram - Vários grupos de PostgreSQL em diferentes idiomas: [russo](https://t.me/pgsql), mais de 4.200 pessoas; [português brasileiro](https://t.me/postgresqlbr), mais de 2.300 pessoas; [indonésio](https://t.me/postgresql_id), cerca de 1.000 pessoas; [inglês](https://t.me/postgreschat), mais de 750 pessoas.
* [#postgresql on Freenode](https://webchat.freenode.net/#postgresql) - O canal IRC mais popular sobre Postgres no Freenode, com mais de 1.000 usuários.
* [Discord](https://discord.gg/bW2hsax8We) - Servidor Discord para Postgres, com mais de 6 mil membros.

<a id="roadmaps"></a>

### Roteiros
* [PostgreSQL Roadmap](https://roadmap.sh/postgresql-dba) - Roteiro com um guia passo a passo para PostgreSQL.

<a id="external-lists"></a>

### Listas externas
* [Wikipedia admin tools list](https://en.wikipedia.org/wiki/Comparison_of_database_tools) - Comparação de ferramentas de administração de bancos de dados na Wikipédia.
* [PostgreSQL Wiki GUI tools list](https://wiki.postgresql.org/wiki/Community_Guide_to_PostgreSQL_GUI_Tools) - Guia comunitário de ferramentas gráficas para PostgreSQL.
* [PostgreSQL Wiki Foreign Data Wrappers list](https://wiki.postgresql.org/wiki/Foreign_data_wrappers) - Foreign data wrappers.
