<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/logo.png" align="center" width="850">
<p align="center">
  <a href="https://github.com/sindresorhus/awesome">
    <img alt="Awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" />
  </a>
</p>
Se você gostou do conteúdo 📖, ajude a dar visibilidade ao projeto com 👍| ⭐| 👏

Seleção de artigos, livros, vídeos e ferramentas sobre sistemas distribuídos e big data.

Seja para se preparar para uma entrevista ou projetar um aplicativo distribuído/orientado a microsserviços, esta lista ajudará você.

Atenção: o número de estrelas no GitHub não reflete o uso nem a popularidade de todos os itens listados.

Inspirado em [Awesome-BigData](https://GitHub.com/onurakpolat/awesome-bigdata/blob/master/README.md)

Iniciado por Gabriel Leon de Mattos

## Conteúdo

[Artigos](#articles)

[Livros](#books)

[Vídeos](#videos)

[Ferramentas](#tools)

- [Relational Database](#Relational-Database-Management-System)
- [NoSQL](#NoSQL)
- [Sistemas de arquivos distribuídos](#Distributed-File-Systems)
- [Gerenciamento de recursos](#Resource-Management)
- [Processamento de fluxos](#Stream-Processing)
- [Broker de mensagens](#Message-Broker)
- [Balanceadores de carga](#Load-Balancers)
- [Ecossistema Hadoop](#Hadoop-Ecosystem)
- [Framework REST](#REST-Framework)

[Bônus](#bonus)

# Artigos

## Introdução / entrevistas

- [System Design Primer](https://GitHub.com/donnemartin/system-design-primer) - [109k ⭐] - Compilação incrível de recursos, incluindo baralhos de flashcards Anki.

- [System Design Interview Questions - Concepts you should know](https://www.freecodecamp.org/news/systems-design-for-interviews/) - Uma lista selecionada de tópicos para apresentar o design do sistema.

- [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview) - [Paid 💵] - A preparação para Grokking System Design é um dos cursos mais comentados. A melhor coisa é o design dos aplicativos que ele sugere, em vez de explicações sobre o que cada ferramenta deve fazer.

- [System Design in Software Development](https://medium.com/the-andela-way/system-design-in-software-development-f360ce6fcbb9) - Artigo básico sobre os tópicos de design e arquitetura de sistemas.

- [System Design](https://www.interviewbit.com/courses/system-design/) - Recursos introdutórios de preparação para entrevistas.

- [Design Pattern for Distributed Systems](https://www.codemag.com/Article/1909071/Design-Patterns-for-Distributed-Systems) - Artigo falando sobre alguns padrões, bem como algumas tecnologias a serem consideradas.

- [Practice system design problems using AI on Codemia.io](https://codemia.io) - Uma ferramenta que permite praticar problemas de design de sistema de forma interativa, como uma entrevista com IA. Há feedback iterativo e avaliação final que avalia seu desempenho

## Avançado

- [Distributed Computing](https://en.wikipedia.org/wiki/Distributed_computing) - Artigo da Wikipedia ampliando a visão do design de sistemas distribuídos.

- [Fallacies of Distributed Computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing) - Artigo da Wikipédia apresentando o tópico das falácias da computação distribuída e seus efeitos.

- [Fallacies of Distributed Computing Explained](http://www.rgoarchitects.com/Files/fallacies.pdf) - Explicação detalhada das falácias mencionadas acima.

- [CAP Theorem](https://www.ibm.com/cloud/learn/cap-theorem) - Artigo IBM sobre Teorema CAP, Microsserviços e Bancos de Dados NoSQL.

- [Pattern: Microservice Architecture](https://microservices.io/patterns/microservices.html) - Bom artigo falando sobre arquitetura de microsserviços e também suas desvantagens.

- [Taxonomy of Distributed Systems](https://www.cs.rutgers.edu/~pxk/rutgers/notes/content/01-intro.pdf) - Palestra de 11 páginas classificando sistemas distribuídos e especificamente por que precisamos deles.

- [Top 10 Secure Coding Practices](https://wiki.sei.cmu.edu/confluence/display/seccode/Top+10+Secure+Coding+Practices) - Breve artigo falando sobre boas práticas para títulos de código.

- [Scalable Web Architecture and Distributed Systems](http://www.aosabook.org/en/distsys.html) - Bom artigo sobre sistemas distribuídos, bem como algumas das ferramentas potenciais.

---

# Livros

- [Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Services](https://www.amazon.com/Designing-Distributed-Systems-Patterns-Paradigms/dp/1491983647) - [Paid 💵] - Livro que fala sobre sistemas distribuídos e também demonstra levemente alguns códigos de sua aparência.

- [Designing Data Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=pd_lpo_14_t_0/140-0179130-4076567?_encoding=UTF8&pd_rd_i=1449373321&pd_rd_r=e1f26397-6b89-4ffe-923f-21ad2d124b7a&pd_rd_w=7kW0U&pd_rd_wg=HYohZ&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=FC1XXD2Q6DDAJ4Z1RN2K&psc=1&refRID=FC1XXD2Q6DDAJ4Z1RN2K) - [Paid 💵] - Aprofunda-se ao explicar diversos recursos que utilizamos ao trabalhar com sistemas distribuídos, bem como como surgiu e quais problemas pretende resolver.

- [The System Design Manual](https://systemdesignmanual.com/) - [Paid 💵] - Abrange os principais aspectos dos sistemas distribuídos, como: fundamentos de rede, a teoria que sustenta os sistemas distribuídos, padrões arquitetônicos de sistemas escaláveis, padrões de estabilidade que protegem os sistemas contra falhas e melhores práticas operacionais sobre como manter sistemas de grande escala com uma equipe pequena.

- [Building Microservices](http://ce.sharif.edu/courses/96-97/1/ce924-1/resources/root/Books/building-microservices-designing-fine-grained-systems.pdf) - [Free 👍] - Livro incrível que fala detalhadamente sobre como projetar arquitetura de sistema com microsserviços e inclui os tópicos mais relevantes a esse respeito.

- [Monolith to Microservices](https://www.nginx.com/resources/library/monolith-to-microservices/) - [Free 👍] - Escrito pelo mesmo autor do livro acima, este livro abordará a migração do Monolith para Microservices, é recomendável começar pelo livro anterior.

- [Distributed Systems (3rd Edition)](https://www.distributed-systems.net/index.php/books/ds3/) - [Free 👍] - Ótima visão geral e introdução detalhada aos sistemas distribuídos. Recomendado para leitores de nível intermediário.

- [Safe by Design](https://github.com/SanQri/safe-by-design/) - [Free 👍] - Ótimo livro sobre como impor a correção do código desde o design.

---

# Vídeos

Uma coleção de vídeos sobre sistemas distribuídos.

## Introdução / entrevistas

- [Gaurav Sen - System Design Series](https://www.youtube.com/watch?v=xpDnVSmNFX0&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX) - Bom recurso para quem deseja aprender mais sobre design de sistemas, apresenta o tema de uma forma muito fácil de entender.

- [Tech Dummies - System Design Series](https://www.youtube.com/watch?v=mhUQe4BKZXs&list=PLkQkbY7JNJuBoTemzQfjym0sqbOHt5fnV) - Outra introdução ao design de sistemas.

- [Mock System Design Interview at Google](https://www.youtube.com/watch?v=q0KGYwNbf-0) - Visão geral de como seria uma entrevista sobre design de sistema do ponto de vista de um cumprimento falho, mas rigoroso, dos requisitos. O principal aqui é como ocorre a interação com o entrevistador.

- [Google Preparation Guide](https://www.youtube.com/watch?v=Gg318hR5JY0) - Um vídeo rápido explicando como eles entrevistam.

- [System Design Interview](https://www.youtube.com/c/SystemDesignInterview/) - Canal no YouTube focado em conteúdo específico para entrevistas de design de sistemas, com explicações detalhadas de diversos problemas.

- [Intro to Architecture and System Design Interviews](https://www.youtube.com/watch?v=ZgdS0EUmn70) - Um vídeo do YouTube com Jackson Gabbard com boas informações sobre entrevistas de design de sistemas.

- [System Design Introduction for Interview](https://www.youtube.com/watch?v=UzLMhqg3_Wc) - Introdução de Tushar ao System Design.

- [Distributed Systems](https://www.youtube.com/playlist?list=PLOE1GTZ5ouRPbpTnrZ3Wqjamfwn_Q5Y9A) - Este é um curso introdutório a Sistemas Distribuídos feito por Chris Colohan. Ele obteve doutorado pela Carnegie Mellon e depois passou 10 anos trabalhando no Google construindo sistemas distribuídos.

- [The Easy Way](https://www.youtube.com/channel/UCVZfU1sp66H9d4sdYx4iNkQ) - Canal emergente com vídeos fáceis de entender sobre Sistemas Distribuídos.

- [System Design by SDE Skills](https://www.youtube.com/playlist?list=PLBtMh4xfa9FHSMKKgPZcPfoPbZmND5PC-) - Bom recurso para pessoas que estão se preparando para entrevistas de design de sistema, há várias entrevistas simuladas de design de sistema e aprofundamentos.

- [System Design by CodeKarle](https://www.youtube.com/watch?v=EpASu_1dUdE&list=PLhgw50vUymyckXl3D1IlXoVl94wknJfUC) - Outro ótimo recurso gratuito, uma lista de perguntas mais frequentes em entrevistas.

## Avançado

- [The evolution of Reddit Architecture](https://www.youtube.com/watch?v=nUcO7n4hek4) - Visão geral de como o design do sistema Reddit foi dimensionado.
- [6.824 Distributed Systems by MIT](https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB) - Curso de pós-graduação em sistemas distribuídos pelo MIT (2020).
- [CSE138 Distributed Systems by UCSC](https://www.youtube.com/playlist?list=PLNPUF5QyWU8O0Wd8QDh9KaM1ggsxspJ31) - Curso de graduação em sistemas distribuídos pela UCSC (2020).

# Ferramentas

- Uma coleção das ferramentas mais usadas em sistemas distribuídos

## Sistema de gerenciamento de banco de dados relacional

- [MariaDB](https://mariadb.org/) - MariaDB é um fork do servidor MySQL.

- [MySQL](https://dev.mysql.com/) - Banco de dados relacional amplamente utilizado.

- [PostgresSQL](https://www.postgresql.org/) - Banco de dados relacional que vem ganhando popularidade.

- [SQLite](https://www.sqlite.org/index.html) - Outro banco de dados amplamente utilizado, integrado a todos os telefones celulares e à maioria dos computadores.

- [Sql Server](https://www.microsoft.com/en-us/sql-server) - Banco de dados relacional amplamente utilizado.

## NoSQL

### Cache (chave-valor)

- [Apache Ignite](https://GitHub.com/apache/ignite) - [3.3k ⭐] - Cache de memória com propriedades ACID.

- [Couchbase](https://developer.couchbase.com/open-source-projects) - Inspirado no memcached, adicionando recursos como replicação e persistência.

- [Oracle Coherence](https://GitHub.com/oracle/coherence) - [126 ⭐] - Cache na memória de alta escalabilidade e baixa latência.

- [Memcached](https://GitHub.com/memcached/memcached) - [10.2k ⭐] - Um dos primeiros bancos de dados com cache na memória, de alto desempenho e multithread.

- [Redis](https://GitHub.com/redis/redis) - [44k ⭐] - Banco de dados de cache na memória amplamente utilizado com muitos recursos adicionais, como armazenamento persistente e suporte a strings, listas, conjuntos, hashses, fluxos, bitmaps, etc.

### Armazenamento (chave-valor)

- [Apple FoundationDB](https://GitHub.com/apple/foundationdb) - [10k ⭐] - Multimodelo (muitos tipos de dados em um único banco de dados), armazenamento de chave-valor ACID. Facilmente escalável e tolerante a falhas.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Serviço de banco de dados multimodelo distribuído globalmente da Microsoft. Dimensione a taxa de transferência e o armazenamento de maneira oriental e independente. APIs SQL, MongoDB, Cassandra, Tabelas, Gremlin e Spark.

### Armazenamento de documentos

- [CouchDB](https://GitHub.com/apache/couchdb) - [4.6k ⭐] - Banco de dados de armazenamento de documentos NoSQL compatível com ACID, fornece uma API RESTful HTTP para leitura e atualização de documentos de banco de dados.

- [MongoDB](https://www.mongodb.com/) - Um dos bancos de dados 'NoSQL' mais populares para uso geral.

- [RethinkDB](https://GitHub.com/rethinkdb/rethinkdb) - [23.8k ⭐] - Banco de dados de armazenamento de documentos.

- [ElasticSearch](https://GitHub.com/elastic/elasticsearch) - [49.9k ⭐] - Banco de dados 'NoSQL' amplamente popular para mecanismos de pesquisa rápidos e escalonáveis.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Serviço de banco de dados multimodelo distribuído globalmente da Microsoft. Dimensione a taxa de transferência e o armazenamento de maneira oriental e independente. APIs SQL, MongoDB, Cassandra, Tabelas, Gremlin e Spark.

### Armazenamento de colunas largas

- [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) - Banco de dados de valores-chave e documentos, de alto desempenho, escalável e seguro.

- [Google Bigtable](https://cloud.google.com/bigtable) - Banco de dados 'NoSQL' escalável e de alto desempenho para grandes cargas de trabalho analíticas e operacionais.

- [Cassandra](https://cassandra.apache.org/) - Projeto nascido no Facebook muito rápido, facilmente escalável, com opção de incluir consistência em cada operação.

- [Scylla](https://GitHub.com/scylladb/scylla) - [4.9k ⭐] - Armazenamento de dados 'NoSQL' usando framework seastar, compatível com Cassandra.

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - Modelado a partir do Bigtable do Google e escrito em Java. Desenvolvido como parte do projeto Apache Hadoop e executado em HDFS ou Alluxio. (Ver [Hadoop Related](##hadoop-related))

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Serviço de banco de dados multimodelo distribuído globalmente da Microsoft. Dimensione a taxa de transferência e o armazenamento de maneira oriental e independente. APIs SQL, MongoDB, Cassandra, Tabelas, Gremlin e Spark.

### Grafos

- [Amazon Neptune](https://aws.amazon.com/neptune/) - Serviço de banco de dados gráfico rápido, confiável e totalmente gerenciado.

- [ArangoDB](https://GitHub.com/arangodb/arangodb) - [10k ⭐] - Banco de dados flexível para documentos, valores-chave, gráficos. Usa sua própria linguagem de consulta, AQL.

- [Neo4j](https://GitHub.com/neo4j/neo4j) - [7.9k ⭐] - Bom suporte para um banco de dados gráfico, compatível com ACID e flexível.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Serviço de banco de dados multimodelo distribuído globalmente da Microsoft. Dimensione a taxa de transferência e o armazenamento de maneira oriental e independente. APIs SQL, MongoDB, Cassandra, Tabelas, Gremlin e Spark.

## Sistemas de arquivos distribuídos

- [HDFS](https://hadoop.apache.org/) - O Hadoop File System é uma escolha amplamente popular entre seus concorrentes de big data, fornecendo acesso de alto rendimento.

- [Lustre](http://lustre.org/) - Sistema de arquivos para clusters de computadores.

- [CephFS](https://ceph.io/) - Sistema de armazenamento unificado e distribuído.

- [GlusterFS](https://www.gluster.org/) - Sistema de arquivos NAS expansível.

- [MooseFS](https://moosefs.com/) - Sistema de arquivos distribuído compatível com POSIX.

- [XtreemFS](http://www.xtreemfs.org/) - Sistema de arquivos tolerante a falhas.

## Gerenciamento de recursos

- [Kubernetes](https://kubernetes.io/) - Maneira altamente popular de implantar, gerenciar e dimensionar automaticamente um cluster de contêineres em servidores bare-metal ou virtuais.

## Processamento de fluxos

- [Apache Samza](http://samza.apache.org/) - Crie aplicativos com estado que processam dados em tempo real de diversas fontes, incluindo Kafka. Modelo multiassinante fácil e barato, pode eliminar contrapressão e tem persistência confiável com baixa latência.

- [Apache Flink](https://flink.apache.org/) - Baseado no conceito de fluxos e transformações. Usa maven, lida com tarefas em lote como fluxos de dados com limites finitos. Baixa latência, alto rendimento.

- [Amazon Kinesis Streams](https://aws.amazon.com/kinesis/data-streams/) - Serviço durável, escalável e em tempo real. Coleta gigabytes de dados por segundo de centenas de milhares de fontes, incluindo fluxos de eventos de banco de dados, fluxos de cliques de sites, transações financeiras, etc.

- [Azure Stream Analytics](https://azure.microsoft.com/en-us/services/stream-analytics/) - Serviço de análise em tempo real projetado para cargas de trabalho de missão crítica.

## Broker de mensagens

- [Amazon MQ](https://aws.amazon.com/amazon-mq/) - Corretor de mensagens de código aberto da Amazon.

- [Apache ActiveMQ](https://activemq.apache.org/) - É um servidor de mensagens multiprotocolo baseado em Java.

- [Apache Kafka](https://kafka.apache.org/) - Corretor de mensagens amplamente popular com baixa latência para streaming de dados.

- [RabbitMQ](https://www.rabbitmq.com/) - Leve amplamente popular
  corretor de mensagens escrito em erlang que também oferece suporte a vários protocolos de mensagens.

- [IronMQ](https://www.iron.io/mq) - Corretor de mensagens muito rápido e altamente escalável. (não é de código aberto)

- [Apache Pulsar](https://pulsar.apache.org/) - Criado pelo Google, também altamente escalonável, baixa latência, replicação geográfica e multitenacidade.

- [Kestrel](https://github.com/twitter-archive/kestrel) - Escrito em Scala e fala o protocolo memcached. Funciona como Kafka.

- [Azure Service Bus](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) - Um corretor de mensagens de integração empresarial totalmente gerenciado.

## Balanceadores de carga

### Software de código aberto

- [SeeSaw](https://GitHub.com/google/seesaw) - [5.1k ⭐] - Utilizado pelo Google, desenvolvido em Go, servidor balanceador de carga virtual baseado em Linux.

- [HAProxy](https://www.haproxy.org/) - Opção amplamente popular, fornece alta disponibilidade, proxy e balanceamento de carga TCP/HTTP. Usado por Reddit, Imgur, MaxCDN, GitHub, AirBNB.

- [Zevenet](https://www.zevenet.com/products/community/#repository) - Suporta L3, L4 e L7. Fácil instalação com um repositório docker. Suporta monitoramento avançado de verificação de integridade.

- [Neutrino](https://neutrinoslb.GitHub.io/) - Usado pelo eBay, desenvolvido com Scala e Netty. Suporta algoritmos round-robin e de menor conexão.

- [Nginx](https://www.nginx.com/) - Espere, o Nginx não é um servidor web? Sim, o código aberto oferece suporte ao nível básico de troca de conteúdo e roteamento de solicitações. A edição Plus suporta balanceamento de carga, WAF, monitoramento, etc.

- [Openresty](https://github.com/openresty/openresty) - Nginx + Lua, combinação perfeita.

### Hardware

- [F5](https://www.f5.com/services/resources/glossary/load-balancer) - Opção robusta de balanceador de carga de hardware, com suporte a vários protocolos (IP, TCP, FTP, UDP, HTTP).

- [TP-Link](https://www.tp-link.com/) - Alternativa mais barata que funciona como balanceador de carga.

- [Barracuda](https://www.barracuda.com/products/loadbalancer) - Uma das principais opções para balanceamento de carga quando se trata de servidores internos. Principais medidas de segurança integradas, relatórios abrangentes e monitoramento do tráfego de saída para prevenção de perda de dados.

### Nuvem

- [Amazon Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - Escolha popular para clientes Amazon, suporta funções lambda, altamente escaláveis.

- [Google Load Balancing](https://cloud.google.com/load-balancing) - Escolha popular para clientes do Google, vem com recurso de escalonamento automático, muito rápido e possui CDN integrado.

- [Cloudflare Load Balancing](https://www.cloudflare.com/load-balancing/) - Balanceamento de carga escalonável da Cloudflare, recurso de failover rápido e um painel.

- [DigitalOcean Load Balancing](https://www.digitalocean.com/docs/networking/load-balancers/) - Se você é cliente digitalocean, esta é uma boa opção, muito barata, disponibilidade regional, escalável, fácil de implantar entre seus outros droplets.

- [Azure Load Balancing](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview) - Escolha popular para clientes do Azure da Microsoft. Suporta tráfego interno e externo, ipv6, monitoramento e o conjunto padrão de recursos de balanceamento de carga.

## Ecossistema Hadoop

<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/hadoop-ecosystem.png" align="center" width="330">

### Painel

- [Ambari](https://ambari.apache.org/) - Painel que integra a maioria das tecnologias relacionadas ao hadoop para fácil gerenciamento e execuções.

### Ingestão de dados

- [Sqoop](https://sqoop.apache.org/) - Transfira dados com eficiência entre o Hadoop e armazenamentos de dados estruturados, como bancos de dados relacionais.

- [Flume](https://flume.apache.org/) - Distribuído, altamente disponível e eficiente na coleta, agregação e movimentação de grandes quantidades de dados de log.

- [Apache Kafka](https://kafka.apache.org/) - Corretor de mensagens amplamente popular com baixa latência para streaming de dados.

### Agendador de workflows

- [Oozie](https://oozie.apache.org/) - Criar fluxos de trabalho em xml para executar trabalhos (de outros aplicativos do ecossistema hadoop) em etapas, também permite a execução paralela.

### Consultas

- [Hive](https://hive.apache.org/) - Consulte dados armazenados no hadoop em SQL.
- [Pig](https://pig.apache.org/) - Linguagem de script semelhante a SQL para consultar dados hadoop.

### Processamento

- [Tez](https://tez.apache.org/) - Resolve um problema semelhante ao Spark e MapReduce, é mais eficiente que MapReduce porque calcula a maneira mais eficiente de fazer isso.
- [Map Reduce](https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) - MapReduce, como o nome indica, mapeia dados e reduz os resultados.
- [Spark](https://spark.apache.org/) - Processamento de dados poderoso não apenas para processar dados como Tez (e MapReduce), mas também para processar fluxos de dados em tempo real, aplicar algoritmos de análise de regressão em ML e muito mais.
- [Apex](https://apex.apache.org/) - \*Projeto descontinuado, é uma plataforma nativa do YARN que unifica o processamento em fluxo e em lote.

### Banco de dados

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - Modelado a partir do Bigtable do Google e escrito em Java. Desenvolvido como parte do projeto Apache Hadoop.

### Gerenciamento de recursos

- [YARN](https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html) - 'Yet Another Resource Negotiator' funciona como um kernel para gerenciar recursos do computador nos clusters.
- [MESOS](http://mesos.apache.org/) - Funciona como um kernel Linux gerenciando CPU, memória, armazenamento e outros recursos em todo o cluster.

## Framework REST

- [Gin](https://github.com/gin-gonic/gin) - [40.6k ⭐] - Estrutura de microsserviço extremamente rápida usando Golang e alta capacidade de rendimento.

- [Phoenix](https://github.com/phoenixframework/phoenix) - [15.5k ⭐] - Processamento distribuído, facilmente escalável, suporte para canais e chat ao vivo. Este framework - escrito em Elixir, utiliza BEAM e Erlang, muito eficiente para sistemas de grande escala e suporta alto rendimento.

- [Express.js](https://github.com/expressjs/express) - [49.6k ⭐] - API de descanso node.js rápida que pode funcionar bem em muitos cenários.

- [Rails](https://github.com/rails/rails) - [46.2k ⭐] - Escrito em Ruby, Rails oferece APIs rápidas do protótipo à produção de maneira eficiente.

- [Play Framework](https://github.com/playframework/playframework) - [11.6k ⭐] - Estrutura muito rápida e de alto rendimento escrita em Scala/Java que é RESTful por padrão.

- [Flask](https://github.com/pallets/flask) - [51.6k ⭐] - Um microframework Python leve para prototipagem e produção rápidas.

- [FastAPI](https://github.com/tiangolo/fastapi) - [22.7k ⭐] - Um microframework Python leve inspirado no Flask, mas mais moderno, usando Python assíncrono.

- [Django REST](https://github.com/encode/django-rest-framework) - [18.4k ⭐] - Escrito em Python, Django Rest é uma API REST poderosa e flexível. A eficiência e o tempo de lançamento no mercado se assemelham ao Rails.

- [ASP.NET Core MVC](https://docs.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-3.1) - Uma estrutura avançada para criar aplicativos Web e APIs usando o padrão de design Model-View-Controller em C# ou F#. Número 6 em [TechEmpower Composite Benchmarks](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite) para estruturas web.

- [Fastify](https://github.com/fastify/fastify) - [15.4k ⭐] - Uma estrutura web Node.js altamente focada em fornecer a melhor experiência do desenvolvedor com o mínimo de sobrecarga e uma arquitetura de plugin poderosa.
