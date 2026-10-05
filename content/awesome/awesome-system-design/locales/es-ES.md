<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/logo.png" align="center" width="850">
<p align="center">
  <a href="https://github.com/sindresorhus/awesome">
    <img alt="Awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" />
  </a>
</p>
Si te gusta el contenido 📖, ayuda a dar visibilidad al proyecto con 👍| ⭐| 👏

Selección de artículos, libros, vídeos y herramientas sobre sistemas distribuidos y big data.

Tanto si preparas una entrevista como si quieres diseñar una aplicación distribuida o basada en microservicios, esta lista te ayudará.

Atención: las estrellas de GitHub no reflejan el uso ni la popularidad de todos los elementos enumerados.

Inspirado en [Awesome-BigData](https://GitHub.com/onurakpolat/awesome-bigdata/blob/master/README.md)

Creado por Gabriel Leon de Mattos

## Contenido

[Artículos](#articles)

[Libros](#books)

[Vídeos](#videos)

[Herramientas](#tools)

- [Relational Database](#Relational-Database-Management-System)
- [NoSQL](#NoSQL)
- [Sistemas de archivos distribuidos](#Distributed-File-Systems)
- [Gestión de recursos](#Resource-Management)
- [Procesamiento de flujos](#Stream-Processing)
- [Agente de mensajes](#Message-Broker)
- [Balanceadores de carga](#Load-Balancers)
- [Ecosistema Hadoop](#Hadoop-Ecosystem)
- [Framework REST](#REST-Framework)

[Extra](#bonus)

# Artículos

## Introducción / entrevistas

- [System Design Primer](https://GitHub.com/donnemartin/system-design-primer) - [109k ⭐] - Impresionante recopilación de recursos, incluidos mazos de tarjetas didácticas de Anki.

- [System Design Interview Questions - Concepts you should know](https://www.freecodecamp.org/news/systems-design-for-interviews/) - Una lista seleccionada de temas para presentarle el diseño de sistemas.

- [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview) - [Paid 💵] - La preparación para el diseño de sistemas Grokking es uno de los cursos de los que más se habla. Lo mejor es el diseño de aplicaciones que sugiere en lugar de explicaciones de lo que se supone que debe hacer cada herramienta.

- [System Design in Software Development](https://medium.com/the-andela-way/system-design-in-software-development-f360ce6fcbb9) - Artículo básico sobre los temas de diseño y arquitectura de sistemas.

- [System Design](https://www.interviewbit.com/courses/system-design/) - Recursos introductorios para la preparación de entrevistas.

- [Design Pattern for Distributed Systems](https://www.codemag.com/Article/1909071/Design-Patterns-for-Distributed-Systems) - Artículo que habla sobre algunos patrones y algunas tecnologías a considerar.

- [Practice system design problems using AI on Codemia.io](https://codemia.io) - Una herramienta que le permite practicar problemas de diseño de sistemas de forma interactiva como una entrevista con IA. Hay retroalimentación iterativa y evaluación final que califica su desempeño.

## Avanzado

- [Distributed Computing](https://en.wikipedia.org/wiki/Distributed_computing) - Artículo de Wikipedia que amplía la visión del diseño de sistemas distribuidos.

- [Fallacies of Distributed Computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing) - Artículo de Wikipedia que presenta el tema de las falacias de la computación distribuida y sus efectos.

- [Fallacies of Distributed Computing Explained](http://www.rgoarchitects.com/Files/fallacies.pdf) - Explicación en profundidad de las falacias mencionadas anteriormente.

- [CAP Theorem](https://www.ibm.com/cloud/learn/cap-theorem) - Artículo de IBM sobre el teorema CAP, microservicios y bases de datos NoSQL.

- [Pattern: Microservice Architecture](https://microservices.io/patterns/microservices.html) - Buen artículo que habla sobre la arquitectura de microservicios y sus inconvenientes.

- [Taxonomy of Distributed Systems](https://www.cs.rutgers.edu/~pxk/rutgers/notes/content/01-intro.pdf) - Conferencia de 11 páginas que clasifica los sistemas distribuidos y específicamente por qué los necesitamos.

- [Top 10 Secure Coding Practices](https://wiki.sei.cmu.edu/confluence/display/seccode/Top+10+Secure+Coding+Practices) - Breve artículo hablando de buenas prácticas para valores de código.

- [Scalable Web Architecture and Distributed Systems](http://www.aosabook.org/en/distsys.html) - Buen artículo sobre sistemas distribuidos, así como algunas de las herramientas potenciales.

---

# Libros

- [Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Services](https://www.amazon.com/Designing-Distributed-Systems-Patterns-Paradigms/dp/1491983647) - [Paid 💵] - Libro que habla sobre sistemas distribuidos y también muestra ligeramente un código de su apariencia.

- [Designing Data Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=pd_lpo_14_t_0/140-0179130-4076567?_encoding=UTF8&pd_rd_i=1449373321&pd_rd_r=e1f26397-6b89-4ffe-923f-21ad2d124b7a&pd_rd_w=7kW0U&pd_rd_wg=HYohZ&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=FC1XXD2Q6DDAJ4Z1RN2K&psc=1&refRID=FC1XXD2Q6DDAJ4Z1RN2K) - [Paid 💵] - Profundiza para explicar varios recursos que utilizamos cuando trabajamos con sistemas distribuidos, así como cómo surgió y qué problemas pretende resolver.

- [The System Design Manual](https://systemdesignmanual.com/) - [Paid 💵] - Cubre los aspectos centrales de los sistemas distribuidos, como: fundamentos de la red, la teoría que sustenta los sistemas distribuidos, patrones arquitectónicos de sistemas escalables, patrones de estabilidad que fortalecen los sistemas contra fallas y mejores prácticas operativas sobre cómo mantener sistemas a gran escala con un equipo pequeño.

- [Building Microservices](http://ce.sharif.edu/courses/96-97/1/ce924-1/resources/root/Books/building-microservices-designing-fine-grained-systems.pdf) - [Free 👍] - Impresionante libro que habla en profundidad sobre el diseño de arquitectura de sistemas con microservicios, incluye los temas más relevantes al respecto.

- [Monolith to Microservices](https://www.nginx.com/resources/library/monolith-to-microservices/) - [Free 👍] - Escrito por el mismo autor que el anterior, este libro cubrirá la migración de Monolith a Microservicios; se recomienda comenzar con el libro anterior.

- [Distributed Systems (3rd Edition)](https://www.distributed-systems.net/index.php/books/ds3/) - [Free 👍] - Excelente descripción general y una introducción en profundidad a los sistemas distribuidos. Recomendado para lectores de nivel intermedio.

- [Safe by Design](https://github.com/SanQri/safe-by-design/) - [Free 👍] - Gran libro sobre cómo hacer cumplir la corrección del código mediante el diseño.

---

# Vídeos

Una colección de vídeos sobre sistemas distribuidos.

## Introducción / entrevistas

- [Gaurav Sen - System Design Series](https://www.youtube.com/watch?v=xpDnVSmNFX0&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX) - Buen recurso para las personas que desean aprender más sobre el diseño de sistemas, presenta el tema de una manera muy fácil de entender.

- [Tech Dummies - System Design Series](https://www.youtube.com/watch?v=mhUQe4BKZXs&list=PLkQkbY7JNJuBoTemzQfjym0sqbOHt5fnV) - Otra introducción al diseño de sistemas.

- [Mock System Design Interview at Google](https://www.youtube.com/watch?v=q0KGYwNbf-0) - Descripción general de cómo sería una entrevista sobre el diseño de sistemas desde la perspectiva de un cumplimiento deficiente pero estricto de los requisitos. La clave aquí es cómo se desarrolla la interacción con el entrevistador.

- [Google Preparation Guide](https://www.youtube.com/watch?v=Gg318hR5JY0) - Un vídeo rápido que explica cómo se entrevistan.

- [System Design Interview](https://www.youtube.com/c/SystemDesignInterview/) - El canal de YouTube se centró en contenido específico de entrevistas de diseño de sistemas, con explicaciones detalladas de una variedad de problemas.

- [Intro to Architecture and System Design Interviews](https://www.youtube.com/watch?v=ZgdS0EUmn70) - Un vídeo de YouTube con Jackson Gabbard con buena información sobre entrevistas de diseño de sistemas.

- [System Design Introduction for Interview](https://www.youtube.com/watch?v=UzLMhqg3_Wc) - Introducción de Tushar al diseño de sistemas.

- [Distributed Systems](https://www.youtube.com/playlist?list=PLOE1GTZ5ouRPbpTnrZ3Wqjamfwn_Q5Y9A) - Este es un curso de introducción a Sistemas Distribuidos realizado por Chris Colohan. Obtuvo un doctorado en Carnegie Mellon y luego pasó 10 años trabajando en Google construyendo sistemas distribuidos.

- [The Easy Way](https://www.youtube.com/channel/UCVZfU1sp66H9d4sdYx4iNkQ) - Canal emergente con videos fáciles de entender sobre sistemas distribuidos.

- [System Design by SDE Skills](https://www.youtube.com/playlist?list=PLBtMh4xfa9FHSMKKgPZcPfoPbZmND5PC-) - Buen recurso para las personas que se están preparando para entrevistas de diseño de sistemas, hay múltiples entrevistas simuladas de diseño de sistemas y análisis profundos.

- [System Design by CodeKarle](https://www.youtube.com/watch?v=EpASu_1dUdE&list=PLhgw50vUymyckXl3D1IlXoVl94wknJfUC) - Otro gran recurso gratuito, una lista de preguntas frecuentes en las entrevistas.

## Avanzado

- [The evolution of Reddit Architecture](https://www.youtube.com/watch?v=nUcO7n4hek4) - Descripción general de cómo se amplió el diseño del sistema Reddit.
- [6.824 Distributed Systems by MIT](https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB) - Curso de nivel posgrado en sistemas distribuidos del MIT (2020).
- [CSE138 Distributed Systems by UCSC](https://www.youtube.com/playlist?list=PLNPUF5QyWU8O0Wd8QDh9KaM1ggsxspJ31) - Curso de pregrado en sistemas distribuidos de la UCSC (2020).

# Herramientas

- Una colección de las herramientas más utilizadas para sistemas distribuidos

## Sistema de gestión de bases de datos relacionales

- [MariaDB](https://mariadb.org/) - MariaDB es una bifurcación del servidor MySQL.

- [MySQL](https://dev.mysql.com/) - Base de datos relacional ampliamente utilizada.

- [PostgresSQL](https://www.postgresql.org/) - Base de datos relacional que ha ido ganando popularidad.

- [SQLite](https://www.sqlite.org/index.html) - Otra base de datos ampliamente utilizada que está integrada en todos los teléfonos móviles y en la mayoría de las computadoras.

- [Sql Server](https://www.microsoft.com/en-us/sql-server) - Base de datos relacional ampliamente utilizada.

## NoSQL

### Caché (clave-valor)

- [Apache Ignite](https://GitHub.com/apache/ignite) - [3.3k ⭐] - Almacenamiento en memoria caché con propiedades ACID.

- [Couchbase](https://developer.couchbase.com/open-source-projects) - Inspirado en Memcached, agregando características como replicación y persistencia.

- [Oracle Coherence](https://GitHub.com/oracle/coherence) - [126 ⭐] - Almacenamiento en caché en memoria de alta escala y baja latencia.

- [Memcached](https://GitHub.com/memcached/memcached) - [10.2k ⭐] - Una de las primeras bases de datos de almacenamiento en caché en memoria, de alto rendimiento y multiproceso.

- [Redis](https://GitHub.com/redis/redis) - [44k ⭐] - Base de datos de almacenamiento en caché en memoria ampliamente utilizada con muchas características adicionales, como almacenamiento persistente y soporte para cadenas, listas, conjuntos, hashs, secuencias, mapas de bits, etc.

### Almacenamiento (clave-valor)

- [Apple FoundationDB](https://GitHub.com/apple/foundationdb) - [10k ⭐] - Multimodelo (muchos tipos de datos en una sola base de datos), almacén de valores clave ACID. Fácilmente escalable y tolerante a fallos.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - El servicio de base de datos multimodelo distribuido globalmente de Microsoft. Escale el rendimiento y el almacenamiento de forma oriental e independiente. API SQL, MongoDB, Cassandra, Tables, Gremlin y Spark.

### Almacenamiento de documentos

- [CouchDB](https://GitHub.com/apache/couchdb) - [4.6k ⭐] - La base de datos de almacén de documentos NoSQL compatible con ACID proporciona una API HTTP RESTful para leer y actualizar documentos de bases de datos.

- [MongoDB](https://www.mongodb.com/) - Una de las bases de datos 'NoSQL' más populares para uso general.

- [RethinkDB](https://GitHub.com/rethinkdb/rethinkdb) - [23.8k ⭐] - BD de almacén de documentos.

- [ElasticSearch](https://GitHub.com/elastic/elasticsearch) - [49.9k ⭐] - Base de datos 'NoSQL' muy popular para motores de búsqueda rápidos y escalables.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - El servicio de base de datos multimodelo distribuido globalmente de Microsoft. Escale el rendimiento y el almacenamiento de forma oriental e independiente. API SQL, MongoDB, Cassandra, Tables, Gremlin y Spark.

### Almacenamiento de columnas anchas

- [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) - Base de datos de documentos y valores clave, de alto rendimiento, escalable y segura.

- [Google Bigtable](https://cloud.google.com/bigtable) - Base de datos 'NoSQL' escalable y de alto rendimiento para grandes cargas de trabajo analíticas y operativas.

- [Cassandra](https://cassandra.apache.org/) - Proyecto nacido en Facebook muy rápido, fácilmente escalable, con opción de incluir coherencia en cada operación.

- [Scylla](https://GitHub.com/scylladb/scylla) - [4.9k ⭐] - Almacén de datos 'NoSQL' que utiliza el marco seastar, compatible con Cassandra.

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - Modelado a partir de Bigtable de Google y escrito en Java. Desarrollado como parte del proyecto Apache Hadoop y se ejecuta sobre HDFS o Alluxio. (Ver [Hadoop Related](##hadoop-related))

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - El servicio de base de datos multimodelo distribuido globalmente de Microsoft. Escale el rendimiento y el almacenamiento de forma oriental e independiente. API SQL, MongoDB, Cassandra, Tables, Gremlin y Spark.

### Grafos

- [Amazon Neptune](https://aws.amazon.com/neptune/) - Servicio de base de datos de gráficos rápido, confiable y totalmente administrado.

- [ArangoDB](https://GitHub.com/arangodb/arangodb) - [10k ⭐] - Base de datos flexible para documentos, valores-clave, gráficos. Utiliza su propio lenguaje de consulta, AQL.

- [Neo4j](https://GitHub.com/neo4j/neo4j) - [7.9k ⭐] - Buen soporte para una base de datos gráfica, compatible con ACID y flexible.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - El servicio de base de datos multimodelo distribuido globalmente de Microsoft. Escale el rendimiento y el almacenamiento de forma oriental e independiente. API SQL, MongoDB, Cassandra, Tables, Gremlin y Spark.

## Sistemas de archivos distribuidos

- [HDFS](https://hadoop.apache.org/) - Hadoop File System es una opción muy popular entre sus competidores de big data, ya que proporciona acceso de alto rendimiento.

- [Lustre](http://lustre.org/) - Sistema de archivos para clusters de computadoras.

- [CephFS](https://ceph.io/) - Sistema de almacenamiento unificado y distribuido.

- [GlusterFS](https://www.gluster.org/) - Sistema de archivos NAS escalable.

- [MooseFS](https://moosefs.com/) - Sistema de archivos distribuido compatible con POSIX.

- [XtreemFS](http://www.xtreemfs.org/) - Sistema de archivos tolerante a fallos.

## Gestión de recursos

- [Kubernetes](https://kubernetes.io/) - Una forma muy popular de implementar, administrar y escalar automáticamente un grupo de contenedores en servidores virtuales o sin sistema operativo.

## Procesamiento de flujos

- [Apache Samza](http://samza.apache.org/) - Cree aplicaciones con estado que procesen datos en tiempo real desde múltiples fuentes, incluido Kafka. Modelo de múltiples suscriptores sencillo y económico, que puede eliminar la contrapresión y tiene una persistencia confiable con baja latencia.

- [Apache Flink](https://flink.apache.org/) - Basado en el concepto de corrientes y transformaciones. Utiliza maven, maneja tareas por lotes como flujos de datos con límites finitos. Baja latencia, alto rendimiento.

- [Amazon Kinesis Streams](https://aws.amazon.com/kinesis/data-streams/) - Servicio duradero, escalable y en tiempo real. Recopila gigabytes de datos por segundo de cientos de miles de fuentes, incluidos flujos de eventos de bases de datos, flujos de clics en sitios web, transacciones financieras, etc.

- [Azure Stream Analytics](https://azure.microsoft.com/en-us/services/stream-analytics/) - Servicio de análisis en tiempo real diseñado para cargas de trabajo de misión crítica.

## Agente de mensajes

- [Amazon MQ](https://aws.amazon.com/amazon-mq/) - Agente de mensajes de código abierto de Amazon.

- [Apache ActiveMQ](https://activemq.apache.org/) - Es un servidor de mensajería multiprotocolo basado en Java.

- [Apache Kafka](https://kafka.apache.org/) - Agente de mensajes muy popular con baja latencia para transmisión de datos.

- [RabbitMQ](https://www.rabbitmq.com/) - Peso ligero muy popular
  corredor de mensajes escrito en erlang que también admite múltiples protocolos de mensajería.

- [IronMQ](https://www.iron.io/mq) - Broker de mensajería muy rápido y altamente escalable. (no de código abierto)

- [Apache Pulsar](https://pulsar.apache.org/) - Creado por Google, también altamente escalable, de baja latencia, replicación geográfica y multitenencia.

- [Kestrel](https://github.com/twitter-archive/kestrel) - Escrito en Scala y habla el protocolo memcached. Funciona de manera muy parecida a Kafka.

- [Azure Service Bus](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) - Un intermediario de mensajes de integración empresarial totalmente gestionado.

## Balanceadores de carga

### Software de código abierto

- [SeeSaw](https://GitHub.com/google/seesaw) - [5.1k ⭐] - Utilizado por Google, desarrollado en Go, servidor de equilibrio de carga virtual basado en Linux.

- [HAProxy](https://www.haproxy.org/) - Opción muy popular que proporciona alta disponibilidad, proxy y equilibrio de carga TCP/HTTP. Utilizado por Reddit, Imgur, MaxCDN, GitHub, AirBNB.

- [Zevenet](https://www.zevenet.com/products/community/#repository) - Soporta L3, L4 y L7. Fácil instalación con un repositorio de Docker. Admite monitoreo avanzado de control de salud.

- [Neutrino](https://neutrinoslb.GitHub.io/) - Utilizado por eBay, construido con Scala y Netty. Admite algoritmos de operación por turnos y de conexión mínima.

- [Nginx](https://www.nginx.com/) - Espera, ¿no es Nginx un servidor web? Sí, el código abierto admite un nivel básico de cambio de contenido y enrutamiento de solicitudes. La edición Plus admite equilibrio de carga, WAF, monitoreo, etc.

- [Openresty](https://github.com/openresty/openresty) - Nginx + Lua, combinación perfecta.

### Hardware

- [F5](https://www.f5.com/services/resources/glossary/load-balancer) - Opción robusta de equilibrador de carga de hardware que admite múltiples protocolos (IP, TCP, FTP, UDP, HTTP).

- [TP-Link](https://www.tp-link.com/) - Alternativa más económica que funciona como equilibrador de carga.

- [Barracuda](https://www.barracuda.com/products/loadbalancer) - Una de las mejores opciones para el equilibrio de carga cuando se trata de servidores internos. Máximas medidas de seguridad integradas, informes completos y monitoreo del tráfico saliente para prevenir la pérdida de datos.

### Nube

- [Amazon Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - Opción popular para los clientes de Amazon, admite funciones lambda y es altamente escalable.

- [Google Load Balancing](https://cloud.google.com/load-balancing) - Opción popular para los clientes de Google, viene con función de escalado automático, muy rápido y tiene CDN integrado.

- [Cloudflare Load Balancing](https://www.cloudflare.com/load-balancing/) - Equilibrio de carga escalable de Cloudflare, función de conmutación por error rápida y un panel de control.

- [DigitalOcean Load Balancing](https://www.digitalocean.com/docs/networking/load-balancers/) - Si es cliente de digitalocean, esta es una buena opción, muy económica, con disponibilidad regional, escalable y fácil de implementar entre sus otras gotas.

- [Azure Load Balancing](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview) - Opción popular para los clientes de Azure de Microsoft. Admite tráfico interno y externo, ipv6, monitoreo y el conjunto de funciones de equilibrio de carga estándar.

## Ecosistema Hadoop

<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/hadoop-ecosystem.png" align="center" width="330">

### Panel

- [Ambari](https://ambari.apache.org/) - Panel de control que integra la mayoría de las tecnologías relacionadas con Hadoop para una fácil gestión y ejecución.

### Ingesta de datos

- [Sqoop](https://sqoop.apache.org/) - Transfiera datos de manera eficiente entre Hadoop y almacenes de datos estructurados, como bases de datos relacionales.

- [Flume](https://flume.apache.org/) - Distribuido, altamente disponible y eficiente en la recopilación, agregación y movimiento de grandes cantidades de datos de registro.

- [Apache Kafka](https://kafka.apache.org/) - Agente de mensajes muy popular con baja latencia para transmisión de datos.

### Planificador de flujos de trabajo

- [Oozie](https://oozie.apache.org/) - Cree flujos de trabajo en xml para ejecutar trabajos (de otras aplicaciones del ecosistema hadoop) en pasos, lo que también permite la ejecución paralela.

### Consultas

- [Hive](https://hive.apache.org/) - Consultar datos almacenados en hadoop en SQL.
- [Pig](https://pig.apache.org/) - Lenguaje de scripting que se parece a SQL para consultar datos de hadoop.

### Procesamiento

- [Tez](https://tez.apache.org/) - Resuelve un problema similar a Spark y MapReduce, es más eficiente que MapReduce porque calcula la forma más eficiente de hacerlo.
- [Map Reduce](https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) - MapReduce, como su nombre lo indica, mapea datos y reduce los resultados.
- [Spark](https://spark.apache.org/) - Potente procesamiento de datos no solo para procesar datos como Tez (y MapReduce), sino que también puede procesar flujos de datos en tiempo real, aplicar algoritmos de análisis de regresión en ML y mucho más.
- [Apex](https://apex.apache.org/) - \*Proyecto retirado, es una plataforma nativa de YARN que unifica el procesamiento por secuencias y por lotes.

### Base de datos

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - Modelado a partir de Bigtable de Google y escrito en Java. Desarrollado como parte del proyecto Apache Hadoop.

### Gestión de recursos

- [YARN](https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html) - 'Yet Another Resource Negotiator' funciona como un núcleo para administrar los recursos informáticos en todos los clústeres.
- [MESOS](http://mesos.apache.org/) - Funciona como un kernel de Linux al administrar la CPU, la memoria, el almacenamiento y otros recursos en todo el clúster.

## Framework REST

- [Gin](https://github.com/gin-gonic/gin) - [40.6k ⭐] - Marco de microservicio increíblemente rápido que utiliza Golang y alta capacidad de rendimiento.

- [Phoenix](https://github.com/phoenixframework/phoenix) - [15.5k ⭐] - Procesamiento distribuido, fácilmente escalable, soporte para canales y chat en vivo. Este marco, escrito en Elixir, utiliza BEAM y Erlang, muy eficiente para sistemas a gran escala y admite un alto rendimiento.

- [Express.js](https://github.com/expressjs/express) - [49.6k ⭐] - API de descanso rápida de node.js que puede funcionar bien en muchos escenarios.

- [Rails](https://github.com/rails/rails) - [46.2k ⭐] - Escrito en Ruby, Rails ofrece API rápidas desde el prototipo hasta la producción de manera eficiente.

- [Play Framework](https://github.com/playframework/playframework) - [11.6k ⭐] - Marco muy rápido y de alto rendimiento escrito en Scala/Java que es RESTful de forma predeterminada.

- [Flask](https://github.com/pallets/flask) - [51.6k ⭐] - Un microframework Python liviano para creación y producción rápidas de prototipos.

- [FastAPI](https://github.com/tiangolo/fastapi) - [22.7k ⭐] - Un microframework de Python liviano inspirado en Flask pero más moderno, que utiliza Python async.

- [Django REST](https://github.com/encode/django-rest-framework) - [18.4k ⭐] - Escrita en Python, Django Rest es una API REST potente y flexible. La eficiencia y el tiempo de comercialización se parecen a Rails.

- [ASP.NET Core MVC](https://docs.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-3.1) - Un marco completo para crear aplicaciones web y API utilizando el patrón de diseño Modelo-Vista-Controlador en C# o F#. Número 6 en [TechEmpower Composite Benchmarks](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite) para frameworks web.

- [Fastify](https://github.com/fastify/fastify) - [15.4k ⭐] - Un marco web Node.js altamente enfocado en brindar la mejor experiencia al desarrollador con la menor sobrecarga y una potente arquitectura de complementos.
