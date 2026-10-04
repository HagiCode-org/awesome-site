# Awesome Docker [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)][sindresorhus] [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/veggiemonk/awesome-docker/)[![Last Commit](https://img.shields.io/github/last-commit/veggiemonk/awesome-docker)](https://github.com/veggiemonk/awesome-docker/commits/main)<!-- omit in toc -->

> Una lista seleccionada de proyectos para Docker.

Si quieres contribuir, lee primero [CONTRIBUTING.md](https://github.com/veggiemonk/awesome-docker/blob/master/.github/CONTRIBUTING.md).
Si esta lista no está completa, puedes contribuir para completarla.
Si ves aquí un enlace que ya no encaja, puedes corregirlo enviando una [solicitud de incorporación de cambios][editreadme] para mejorar este archivo. ¡Gracias!

**El proyecto debe ser para Docker, no solo usar Docker.**

> Regla general: si eliminar la integración con Docker no destruyera la propuesta de valor del proyecto, no debería estar en esta lista.

Los creadores y mantenedores de esta lista no reciben ningún tipo de pago por aceptar cambios realizados por colaboradores.
Esta página no es, de ninguna manera, un producto oficial de Docker.
Es una lista de enlaces a proyectos y la mantienen personas voluntarias.
Todo el mundo puede contribuir.
El objetivo de este repositorio es catalogar proyectos de código abierto, no hacer publicidad con fines lucrativos.

> Docker es una plataforma abierta para que desarrolladores y administradores de sistemas creen, distribuyan y ejecuten aplicaciones distribuidas. Docker consta de Docker Engine, un entorno de ejecución y una herramienta de empaquetado portátiles y ligeros, y Docker Hub, un servicio en la nube para compartir aplicaciones y automatizar flujos de trabajo. Docker permite ensamblar rápidamente aplicaciones a partir de componentes y elimina la fricción entre los entornos de desarrollo, control de calidad y producción. Como resultado, TI puede distribuir más rápido y ejecutar la misma aplicación, sin cambios, en portátiles, máquinas virtuales de centros de datos y cualquier nube.

_Fuente:_ [What is Docker](https://www.docker.com/why-docker/)

# Contenido <!-- omit in toc -->

<!-- TOC -->

- [Proyectos](#projects)
    - [Motor y entorno de ejecución](#engine--runtime)
    - [Creación de imágenes](#building-images)
        - [Constructor](#builder)
        - [Imágenes base](#base-images)
        - [Dockerfile](#dockerfile)
        - [Análisis estático](#linter)
    - [Ciclo de vida de las imágenes](#image-lifecycle)
        - [Registro](#registry)
        - [CLI de registros](#registry-cli)
        - [Análisis de imágenes y SBOM](#image-scanning--sbom)
        - [Cadena de suministro](#supply-chain)
    - [Ejecución de contenedores](#running-containers)
        - [Composición](#composition)
        - [Orquestación](#orchestration)
        - [Implementación y plataformas](#deployment--platforms)
        - [Recolección de basura](#garbage-collection)
    - [Redes y proxies](#networking--proxies)
        - [Redes](#networking)
        - [Proxy inverso](#reverse-proxy)
    - [Almacenamiento y datos](#storage--data)
    - [Observabilidad](#observability)
    - [Seguridad](#security)
    - [Interfaces de usuario](#user-interfaces)
        - [Escritorio](#desktop)
        - [Terminal](#terminal)
        - [Web](#web)
        - [Integraciones con IDE](#ide-integrations)
    - [Flujo de trabajo de desarrollo](#developer-workflow)
        - [Cliente de API](#api-client)
        - [CI/CD](#cicd)
        - [Entorno de desarrollo](#development-environment)
        - [Sin servidor](#serverless)
        - [Pruebas](#testing)
        - [Herramientas envolventes](#wrappers)
    - [Herramientas dentro del contenedor](#in-container-tooling)
- [Recursos de aprendizaje](#learning-resources)
    - [Por dónde empezar](#where-to-start)
    - [Por dónde empezar (Windows)](#where-to-start-windows)
    - [Libros y tutoriales](#books--tutorials)
    - [Listas Awesome](#awesome-lists)
    - [Demostraciones y ejemplos](#demos-and-examples)
    - [Buenos consejos](#good-tips)
    - [Raspberry Pi y ARM](#raspberry-pi--arm)
    - [Artículos sobre seguridad](#security-articles)
    - [Vídeos](#videos)
    - [Comunidades y encuentros](#communities-and-meetups)
        - [Brasileña](#brazilian)
        - [Inglesa](#english)
        - [Rusa](#russian)
        - [Española](#spanish)
- [Estrellas a lo largo del tiempo](#stargazers-over-time)

<!-- /TOC -->

# Proyectos

## Proyectos oficiales

- [Moby](https://github.com/moby/moby)
- [Docker Hub](https://hub.docker.com)
- [Docker Compose](https://github.com/docker/compose/) - Define y ejecuta aplicaciones con varios contenedores mediante Docker.
- [Docker Registry][distribution] - El conjunto de herramientas de Docker para empaquetar, distribuir, almacenar y entregar contenido

## Motor y entorno de ejecución

- [colima](https://github.com/abiosoft/colima) - Entornos de ejecución de contenedores en macOS (y Linux) con una configuración mínima.
- [containerd](https://github.com/containerd/containerd) - Un entorno de ejecución de contenedores abierto y fiable.
- [cri-o](https://github.com/cri-o/cri-o) - Implementación de la interfaz de entorno de ejecución de contenedores de Kubernetes basada en la Open Container Initiative.
- [gVisor](https://github.com/google/gvisor) - Kernel de aplicaciones para contenedores.
- [lxc](https://github.com/lxc/lxc) - LXC: contenedores Linux.
- [Mocker](https://github.com/us/mocker) - CLI de contenedores compatible con Docker para macOS, basada en el framework Containerization de Apple.
- [podman](https://github.com/containers/libpod) - Libpod es una biblioteca para crear pods de contenedores. Es la base de Podman.
- [runc](https://github.com/opencontainers/runc) - Herramienta CLI para crear e iniciar contenedores según la especificación OCI.
- [runtime-tools](https://github.com/opencontainers/runtime-tools) - Oci-runtime-tool es un conjunto de herramientas para trabajar con la especificación de entorno de ejecución OCI.
- [youki](https://github.com/youki-dev/youki) - Entorno de ejecución de contenedores escrito en Rust que implementa la especificación de entorno de ejecución OCI.

## Creación de imágenes

### Constructor

Aplicaciones diseñadas para ayudar a crear imágenes **nuevas** o simplificar su creación.

- [ansible-bender](https://github.com/ansible-community/ansible-bender) - Una herramienta que utiliza `ansible` y `buildah`.
- [apko](https://github.com/chainguard-dev/apko) - Constructor declarativo de imágenes OCI a partir de paquetes apk; reproducible por diseño.
- [buildah](https://github.com/containers/buildah) - Una herramienta que facilita la creación de imágenes OCI.
- [BuildKit](https://github.com/moby/buildkit) - Conjunto de herramientas de construcción concurrente, eficiente en caché e independiente de Dockerfile.
- [buildx](https://github.com/docker/buildx) - Complemento oficial de la CLI de Docker para compilaciones multiplataforma respaldadas por BuildKit.
- [cekit](https://github.com/cekit/cekit) - Herramienta utilizada por OpenShift para crear imágenes base con distintos motores de compilación.
- [dlayer](https://github.com/orisano/dlayer) - Analizador de capas de Docker.
- [docker-companion](https://github.com/mudler/docker-companion) - Herramienta de línea de comandos escrita en Golang para compactar y desempaquetar imágenes de Docker.
- [docker-repack](https://github.com/orf/docker-repack) - Vuelve a empaquetar una imagen de Docker en una versión más pequeña y eficiente que se descarga mucho más rápido.
- [DockerSlim](https://github.com/docker-slim/docker-slim) reduce las imágenes de Docker voluminosas para crear las imágenes más pequeñas posibles.
- [earthly](https://github.com/earthly/earthly) - Automatización de compilaciones en contenedores con una sintaxis que combina Dockerfile y Makefile.
- [essex](https://github.com/utensils/essex) - Plantilla para proyectos basados en Docker: Essex es una utilidad CLI escrita en bash para configurar rápidamente proyectos Docker limpios y coherentes con flujos de trabajo basados en Makefile.
- [HPC Container Maker](https://github.com/NVIDIA/hpc-container-maker) - Genera Dockerfiles a partir de recetas Python de alto nivel, con bloques de construcción para componentes de computación de alto rendimiento.
- [img](https://github.com/genuinetools/img) - Constructor independiente y sin daemon ni privilegios de imágenes de contenedores compatibles con Dockerfile y OCI.
- [ko](https://github.com/ko-build/ko) - Compila e implementa aplicaciones Go como imágenes de contenedor sin Dockerfile.
- [nix2container](https://github.com/nlewo/nix2container) - Crea imágenes OCI con Nix sin tener que cargar y descargar repetidamente con `docker load`.
- [packer](https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/builder/docker) - Herramienta de Hashicorp para crear imágenes de máquinas, incluidas imágenes de Docker, integrada con herramientas de gestión de configuración como chef, puppet y ansible.
- [Production-Ready Python Containers](https://pythonspeed.com/products/pythoncontainer/) - :yen: Plantilla para crear imágenes Docker listas para producción para aplicaciones Python.
- [RAUDI](https://github.com/cybersecsi/RAUDI) - Herramienta que actualiza automáticamente (y, opcionalmente, publica en Docker Hub) imágenes Docker de software de terceros cuando hay una nueva versión, actualización o confirmación.
- [runlike](https://github.com/lavie/runlike) - Genera comandos `docker run` y sus opciones a partir de contenedores en ejecución.
- [Whaler](https://github.com/P3GLEG/Whaler) - Programa para convertir imágenes Docker en Dockerfiles mediante ingeniería inversa.


### Imágenes base

Imágenes base de contenedor mínimas, reforzadas o creadas para un propósito específico.

- [Chainguard Images](https://github.com/chainguard-images/images) - Imágenes de contenedor mínimas, firmadas y con SBOM verificado, creadas sobre Wolfi.
- [distroless](https://github.com/GoogleContainerTools/distroless) - Imágenes Docker centradas en lenguajes de programación, sin el sistema operativo.
- [melange](https://github.com/chainguard-dev/melange) - Compila paquetes apk a partir de YAML declarativo para usarlos con apko.
- [pglayers](https://github.com/pglayers/pglayers) - Extensiones de PostgreSQL precompiladas como capas Docker combinables. Más de 50 extensiones e imágenes combinadas listas para usar (completas y compatibles con Azure).
- [Wolfi](https://github.com/wolfi-dev/os) - Distribución Linux sin distribución tradicional, diseñada para contenedores; basada en glibc, firmada y con SBOM diarios.


### Dockerfile

- [Dockerfile Generator](https://github.com/ozankasikci/dockerfile-generator) `dfg` es tanto una biblioteca de Go como un ejecutable que genera Dockerfiles válidos a partir de distintos canales de entrada.
- [Dockershelf](https://github.com/Dockershelf/dockershelf) - Repositorio que recopila recetas Docker universales, eficientes y compactas. Las imágenes se actualizan, prueban y publican a diario mediante una tarea cron de Travis.
- [Dofigen](https://github.com/lenra-io/dofigen) - Generador de Dockerfiles que utiliza una descripción simplificada en formato YAML o JSON.
- [Trsuted Builds](https://dockerfile.github.io/) - Compilaciones automatizadas de Docker de confianza. Dockerfile Project mantiene un repositorio centralizado de Dockerfiles para distintos servicios populares de código abierto ejecutables en contenedores Docker.

### Análisis estático

- [Dockadvisor](https://github.com/deckrun/dockadvisor) - Linter ligero para Dockerfile con más de 60 reglas, puntuación de calidad y comprobaciones de seguridad.
- [docker-image-size-limit](https://github.com/wemake-services/docker-image-size-limit) - Herramienta para vigilar el tamaño de las imágenes Docker.
- [Hadolint](https://github.com/hadolint/hadolint) - Linter para Dockerfile que comprueba las prácticas recomendadas y los errores habituales; también puede analizar cualquier código bash escrito en instrucciones `RUN`.

## Ciclo de vida de las imágenes

### Registro

Servicios para almacenar de forma segura tus imágenes Docker.

- [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/) - :yen: Amazon Elastic Container Registry (ECR) es un registro de contenedores Docker totalmente gestionado que facilita a los desarrolladores almacenar, administrar e implementar imágenes de contenedor Docker.
- [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/#overview) - :yen: Administra un registro privado de Docker como un recurso Azure de primera clase.
- [Cloudsmith](https://cloudsmith.com/product/formats/docker-registry) - :yen: SaaS de gestión de paquetes totalmente administrado, con compatibilidad de primera clase con registros Docker públicos y privados (además de muchos otros formatos, incluidos gráficos Helm para el ecosistema Kubernetes). Ofrece un generoso nivel gratuito y también es completamente gratuito para el código abierto.
- [Container Registry Service](https://container-registry.com/) - :yen: Solución de gestión de contenedores basada en Harbor como servicio para equipos y organizaciones. El nivel gratuito ofrece 1 GB de almacenamiento para repositorios privados.
- [Cycle.io](https://cycle.io/) - :yen: Alojamiento de contenedores en servidores físicos.
- [DigitalOcean](https://www.digitalocean.com/products/container-registry) - :yen: Registro de contenedores de DigitalOcean.
- [Docker Hub](https://hub.docker.com/) proporcionado por Docker Inc.
- [Docker Registry v2][distribution] - El conjunto de herramientas de Docker para empaquetar, distribuir, almacenar y entregar contenido
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - Ofrece una distribución de archivos e imágenes eficiente, estable y segura basada en tecnología P2P.
- [GCP Artifact Registry](https://docs.cloud.google.com/artifact-registry/docs) - :yen: Almacenamiento rápido y privado de imágenes Docker en Google Cloud Platform.
- [Gitea Container Registry](https://docs.gitea.com/usage/packages/container) - Registro Docker integrado en Gitea, ideal para alojar imágenes privadas a pequeña escala.
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - Solución de GitHub para almacenar y administrar imágenes Docker, estrechamente integrada con GitHub Actions.
- [GitLab Container Registry](https://docs.gitlab.com/user/packages/container_registry/) - Registro pensado para usar sus imágenes en GitLab CI.
- [Granite Registry](https://granite.so/products/docker-registry) - :yen: Almacena imágenes Docker privadas junto a las cargas de trabajo que las descargan, con claves de solo lectura y de lectura y escritura con permisos delimitados.
- [Harbor](https://github.com/goharbor/harbor) Proyecto de registro nativo de la nube, de código abierto y de confianza, que almacena, firma y analiza contenido. Admite replicación, gestión de usuarios, control de acceso y auditoría de actividad.
- [JFrog Artifactory](https://jfrog.com/artifactory/) - :yen: Gestor de repositorios de artefactos que también puede usarse como registro Docker privado.
- [kontain.me](https://github.com/imjasonh/kontain.me) - Registro de imágenes de contenedor bajo demanda que compila y sirve imágenes cuando se descargan.
- [Kraken](https://github.com/uber/kraken) - Registro Docker P2P de Uber, altamente escalable y capaz de distribuir terabytes de datos en segundos.
- [NORA](https://github.com/getnora-io/nora) - Registro de artefactos ligero y multiprotocolo que admite Docker, Maven, npm, Cargo y PyPI en un único binario de 32 MB. Caché de paso, interfaz web, métricas de Prometheus y autenticación RBAC.
- [nscr](https://github.com/jhstatewide/nscr) - Registro de contenedores ligero y autónomo, fácil de ejecutar y mantener.
- [Quay.io](https://quay.io/) - :yen: Alojamiento seguro para repositorios Docker privados.
- [Registryo](https://github.com/inmagik/registryo) - Interfaz de usuario y servidor de autenticación basado en tokens para registros Docker locales.
- [RepoFlow](https://www.repoflow.io) - Plataforma de gestión de paquetes sencilla y fácil de usar, con compatibilidad con Docker y otros formatos como PyPI, Maven, npm y Helm. Incluye búsqueda inteligente, análisis integrado de imágenes Docker y una excelente opción gratuita para uso autogestionado o en la nube.
- [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) - Administra binarios y artefactos de compilación en toda tu cadena de suministro de software.

### CLI de registros

Herramientas de línea de comandos sin daemon para inspeccionar, copiar y manipular imágenes en registros OCI/Docker.

- [crane](https://github.com/google/go-containerregistry/tree/main/cmd/crane) - CLI ligera para manipular imágenes de registros, de `go-containerregistry`.
- [go-containerregistry](https://github.com/google/go-containerregistry) - Biblioteca de Go y herramientas CLI (`crane`, `gcrane`, `registry`) para trabajar con registros de contenedores.
- [oras](https://github.com/oras-project/oras) - Publica y descarga artefactos OCI arbitrarios desde cualquier registro OCI.
- [regctl](https://github.com/regclient/regclient) - Cliente de registro sin daemon para copiar, inspeccionar, modificar y firmar imágenes OCI.
- [skopeo](https://github.com/containers/skopeo) - Trabaja con registros de imágenes remotos: obtiene información, copia imágenes y firma contenido.

### Análisis de imágenes y SBOM

Analizadores de vulnerabilidades de imágenes, generadores de SBOM y herramientas para fijar digests. Las opciones comerciales se marcan con `:yen:`.

- [Anchor](https://github.com/SongStitch/anchor/) - Herramienta para garantizar compilaciones reproducibles fijando dependencias dentro de tus Dockerfiles.
- [Anchor Enterprise](https://anchore.com/) - :yen: Analiza imágenes para detectar vulnerabilidades CVE y comprobarlas frente a políticas de seguridad personalizadas.
- [BomLens](https://github.com/sktelecom/bomlens) - Analiza imágenes de contenedor (además del código fuente, binarios y firmware) para generar SBOM CycloneDX con informes de vulnerabilidades, licencias y avisos. Se distribuye como una única imagen Docker con interfaz web.
- [Clair](https://github.com/quay/clair) - Proyecto de código abierto para el análisis estático de vulnerabilidades en contenedores appc y Docker.
- [Docker Scout](https://github.com/docker/scout-cli) - CLI oficial de Docker para generar SBOM, analizar vulnerabilidades y evaluar políticas.
- [Grype](https://github.com/anchore/grype) - Analizador de vulnerabilidades para imágenes de contenedor, sistemas de archivos y SBOM.
- [oscap-docker](https://github.com/OpenSCAP/openscap) - OpenSCAP proporciona la herramienta oscap-docker, que se utiliza para analizar contenedores e imágenes Docker.
- [pindock](https://github.com/deadnews/pindock) - Fija y actualiza los digests de imágenes Docker en archivos Dockerfile y Compose.
- [Syft](https://github.com/anchore/syft) - Herramienta CLI y biblioteca para generar una lista de materiales de software (SBOM) a partir de imágenes de contenedor y sistemas de archivos.
- [Trivy](https://github.com/aquasecurity/trivy) - Analizador de vulnerabilidades de código abierto de Aqua Security, sencillo y completo, para contenedores (adecuado para CI).

### Cadena de suministro

Firma, atestación y procedencia de imágenes de contenedor.

- [cosign](https://github.com/sigstore/cosign) - Firma de contenedores, verificación y registro de transparencia para artefactos OCI.
- [in-toto](https://github.com/in-toto/in-toto) - Framework para atestaciones de la cadena de suministro; sustenta la procedencia de SLSA y cosign.
- [policy-controller](https://github.com/sigstore/policy-controller) - Controlador de admisión de Kubernetes que exige firmas cosign en imágenes de contenedor.
- [witness](https://github.com/in-toto/witness) - Genera y verifica atestaciones in-toto en toda la canalización de compilación.

## Ejecución de contenedores

### Composición

- [Composerize](https://github.com/magicmark/composerize) - Convierte comandos docker run en archivos docker-compose.
- [ctk](https://github.com/ctk-hq/ctk) - Compositor visual para cargas de trabajo basadas en contenedores.
- [kompose](https://github.com/kubernetes/kompose) - Pasa de Docker Compose a Kubernetes.
- [plash](https://github.com/ihucos/plash) - Motor para ejecutar y compilar contenedores que se ejecuta dentro de Docker.
- [podman-compose](https://github.com/containers/podman-compose) - Script para ejecutar docker-compose.yml con podman.
- [Smalte](https://github.com/roquie/smalte) – Configura dinámicamente aplicaciones que requieren configuración estática en un contenedor Docker.

### Orquestación

- [CloudSlang](https://github.com/CloudSlang/cloud-slang) - Motor de flujos de trabajo para crear automatización de procesos Docker.
- [docker rollout](https://github.com/Wowu/docker-rollout) - Implementación sin tiempo de inactividad para servicios Docker Compose.
- [Kubernetes](https://github.com/kubernetes/kubernetes) - Sistema de orquestación de código abierto para contenedores Docker de Google.
- [Mesos](https://github.com/apache/mesos) - Planificador de recursos y trabajos para contenedores, máquinas virtuales y equipos físicos.
- [Nebula](https://github.com/nebula-orchestrator) - Herramienta de orquestación Docker diseñada para gestionar clústeres distribuidos a gran escala.
- [Nomad](https://github.com/hashicorp/nomad) - Implementa aplicaciones fácilmente a cualquier escala. Planificador distribuido, de alta disponibilidad y consciente de los centros de datos.
- [Rancher](https://github.com/rancher/rancher) - Proyecto de código abierto que proporciona una plataforma completa para ejecutar Docker en producción.
- [Swarm-cronjob](https://github.com/crazy-max/swarm-cronjob) - Crea trabajos en Swarm según una programación temporal.

### Implementación y plataformas

Plataformas autogestionadas y en la nube administradas (PaaS/CaaS, automatización de implementaciones). Las opciones comerciales se marcan con `:yen:`.

- [Amazon ECS](https://aws.amazon.com/ecs/) - :yen: Servicio de gestión en EC2 compatible con contenedores Docker.
- [Appfleet](https://appfleet.com/) - :yen: Plataforma perimetral para implementar y gestionar servicios en contenedores en todo el mundo; dirige el tráfico a la ubicación más cercana para reducir la latencia.
- [Azure AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/) - :yen: Servicio de orquestación de contenedores Kubernetes totalmente administrado.
- [blackfish](https://gitlab.com/blackfish/blackfish) - Máquina virtual CoreOS para crear clústeres Swarm para desarrollo y producción.
- [BosnD](https://gitlab.com/n0r1sk/bosnd) - BosnD, el daemon del contramaestre: escritor dinámico de archivos de configuración y recargador de servicios para entornos de contenedores que cambian dinámicamente.
- [caprover](https://github.com/caprover/caprover) - [Antes conocido como CaptainDuckDuck] Paquete automatizado y escalable de servidor web (Docker + nginx automatizados): Heroku con esteroides.
- [Cloud 66](https://www.cloud66.com) - :yen: Gestión de contenedores de pila completa alojada como servicio.
- [Cloud Run Compose](https://docs.cloud.google.com/run/docs/deploy-run-compose) - :yen: Implementa archivos `docker-compose.yaml` directamente en Google Cloud Run como servicio administrado.
- [Convox Rack](https://github.com/convox/rack) - PaaS de código abierto basado en automatización experta de infraestructura y prácticas recomendadas de DevOps.
- [docker-to-iac](https://github.com/deploystackio/docker-to-iac) - Traduce docker run y commit a plantillas de infraestructura como código para AWS, Render.com y DigitalOcean.
- [doco-cd](https://github.com/kimdre/doco-cd) - Herramienta ligera de GitOps e implementación continua para implementar proyectos Docker Compose y pilas Swarm mediante sondeo y webhooks.
- [Dokku](https://github.com/dokku/dokku) - Mini-Heroku basado en Docker que ayuda a crear aplicaciones y gestionar su ciclo de vida.
- [Exoframe](https://github.com/exoframejs/exoframe) - Herramienta autogestionada que permite realizar implementaciones sencillas con un solo comando mediante Docker.
- [Giant Swarm](https://www.giantswarm.io/) - :yen: Infraestructura sencilla de microservicios. Implementa tus contenedores en segundos.
- [Google Container Engine](https://docs.cloud.google.com/kubernetes-engine/docs) - :yen: Contenedores Docker en Google Cloud Computing, con tecnología de [Kubernetes][kubernetes].
- [Grafeas](https://github.com/grafeas/grafeas) - API común para metadatos sobre contenedores, desde detalles de imágenes y compilaciones hasta vulnerabilidades de seguridad.
- [Mesosphere DC/OS Platform](https://d2iq.com/products/dcos) - :yen: Plataforma integrada para datos y contenedores basada en Apache Mesos.
- [OpenRun](https://github.com/openrundev/openrun) - Compila, implementa, hace de proxy, autentica y pausa automáticamente aplicaciones web con Docker o Kubernetes.
- [OpenShift][openshift] - PaaS de código abierto basado en [Kubernetes][kubernetes] y optimizado por [Red Hat](https://www.redhat.com/en) para el desarrollo e implementación de aplicaciones en contenedores Docker.
- [Red Hat OpenShift Dedicated](https://www.redhat.com/en/technologies/cloud-computing/openshift/dedicated) - :yen: Servicio Red Hat® OpenShift® totalmente administrado en Amazon Web Services y Google Cloud.
- [swarm-ansible](https://github.com/LombardiDaniel/swarm-ansible?tab=readme-ov-file) - Swarm-Ansible inicializa un clúster Swarm listo para producción mediante ansible. Incluye herramientas para automatizar CI, facilitar la supervisión y configurar previamente traefik con certificados SSL y autenticación sencilla. También incluye un registro privado y mucho más.
- [SwarmManagement](https://github.com/hansehe/SwarmManagement) - Aplicación Python que se instala con pip. Facilita la gestión de Docker Swarm mediante un único archivo yaml que describe las pilas que se implementarán y las redes, configuraciones o secretos que se crearán.
- [Triton](https://www.joyent.com/) - :yen: Infraestructura elástica nativa de contenedores.
- [Tsuru](https://github.com/tsuru/tsuru) - Software de plataforma como servicio extensible y de código abierto.
- [werf](https://github.com/werf/werf) - Herramienta de CI/CD para crear imágenes Docker eficientemente e implementarlas en Kubernetes mediante GitOps.

### Recolección de basura

- [docker-custodian](https://github.com/Yelp/docker-custodian) - Mantén ordenados los hosts Docker.
- [Docuum](https://github.com/stepchowfun/docuum) - Expulsión de imágenes Docker según el criterio de menos usadas recientemente (LRU).

## Redes y proxies

### Redes

Redes de contenedores, redes superpuestas y puentes de DNS/detección de servicios.

- [Calico][calico] - Red virtual pura de capa 3 que permite que los contenedores de varios hosts Docker se comuniquen entre sí.
- [docker-dns](https://github.com/bytesharky/docker-dns) - Reenviador DNS ligero para contenedores Docker que resuelve en el host los nombres de contenedores con sufijos personalizados (p. ej., `.docker`) para simplificar la detección de servicios.
- [Flannel](https://github.com/coreos/flannel/) - Red virtual que asigna una subred a cada host para su uso con entornos de ejecución de contenedores.
- [netshoot](https://github.com/nicolaka/netshoot) - El contenedor netshoot incluye un potente conjunto de herramientas de red para solucionar problemas de redes Docker.
- [Pipework](https://github.com/jpetazzo/pipework) - Redes definidas por software para contenedores Linux. Pipework funciona con contenedores LXC «normales» y con el fantástico Docker.
- [registrator](https://github.com/gliderlabs/registrator) - Puente de registro de servicios para Docker.

### Proxy inverso

Proxies inversos, entrada de tráfico y frontales que terminan TLS, compatibles con contenedores y con detección automática.

- [BunkerWeb](https://github.com/bunkerity/bunkerweb) - Firewall de aplicaciones web (WAF) de código abierto y de nueva generación.
- [caddy-docker-proxy](https://github.com/lucaslorentz/caddy-docker-proxy) - Proxy inverso basado en Caddy, configurado con etiquetas de servicio o contenedor.
- [caddy-docker-upstreams](https://github.com/invzhi/caddy-docker-upstreams) - Módulo de upstreams Docker para Caddy, configurado con etiquetas de contenedor.
- [Docker Dnsmasq Updater](https://github.com/moonbuggy/docker-dnsmasq-updater) - Actualiza un servidor dnsmasq remoto con los nombres de host de los contenedores Docker.
- [docker-flow-proxy](https://github.com/docker-flow/docker-flow-proxy) - Reconfigura el proxy cada vez que se implementa un servicio nuevo o se escala uno existente.
- [Let's Encrypt Nginx-proxy Companion](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) - Contenedor auxiliar ligero para nginx-proxy. Permite crear y renovar automáticamente certificados de Let's Encrypt.
- [mesh-router](https://github.com/Yundera/mesh-router) - Proveedor de dominios gratuitos (nsl.sh) para contenedores Docker con enrutamiento HTTPS automático. Utiliza una VPN Wireguard para enrutar de forma segura solicitudes de subdominios entre redes. Ideal para NAS autogestionados e implementaciones en la nube.
- [Nginx Proxy Manager](https://github.com/jc21/nginx-proxy-manager) - Interfaz web atractiva para crear proxies de servicios web con SSL.
- [nginx-proxy][nginxproxy] - Proxy nginx automatizado para contenedores Docker mediante docker-gen.
- [OpenResty Manager](https://github.com/Safe3/openresty-manager) - El gestor OpenResty (versión mejorada de Nginx) más fácil de usar, potente y atractivo; alternativa de código abierto a OpenResty Edge.
- [Swarm Router](https://github.com/flavioaiello/swarm-router) - Enrutador sin configuración basado en nombres de servicio para el modo Docker Swarm, con un enfoque novedoso y más seguro.
- [Træfɪk](https://github.com/containous/traefik) - Proxy inverso y equilibrador de carga automatizado para Docker, Mesos, Consul y Etcd.

## Almacenamiento y datos

- [Docker Volume Backup](https://github.com/offen/docker-volume-backup) Hace copias de seguridad de volúmenes Docker localmente o en cualquier almacenamiento compatible con S3.
- [Label Backup](https://github.com/resulgg/label-backup) - Agente de copias de seguridad ligero y compatible con Docker que detecta y respalda automáticamente bases de datos en contenedores (PostgreSQL, MySQL, MongoDB, Redis) según las etiquetas Docker. Admite almacenamiento local y destinos compatibles con S3, con programación flexible mediante expresiones cron.
- [Netshare](https://github.com/ContainX/docker-volume-netshare) Complemento de volúmenes Docker para NFS, AWS EFS, Ceph y Samba/CIFS.
- [portworx](https://portworx.com) - :yen: Solución de almacenamiento descentralizado para volúmenes persistentes, compartidos y replicados.
- [quobyte](https://www.quobyte.com/) - :yen: Sistema de archivos distribuido, completamente tolerante a fallos, con controlador de volúmenes Docker.
- [resq](https://github.com/mashb1t/resq) - Copias de seguridad Docker con Restic para volúmenes, bases de datos y archivos .env, con o sin detener los contenedores. Funciona con almacenamiento local, SSH o cualquier almacenamiento compatible con S3.
- [REX-Ray](https://github.com/rexray/rexray) proporciona un motor de orquestación de almacenamiento independiente del proveedor. Su objetivo principal es proporcionar almacenamiento persistente para Docker, Kubernetes y Mesos.

## Observabilidad

Supervisa hosts Docker, contenedores y los servicios que se ejecutan en ellos. Se incluyen soluciones autogestionadas y SaaS; las opciones comerciales se marcan con `:yen:`.

- [ADRG](https://github.com/jaldertech/adrg) - Gobernador dinámico de recursos Docker que utiliza cgroups v2 para gestionar la carga del sistema.
- [AppDynamics](https://github.com/Appdynamics/docker-monitoring-extension) - :yen: La extensión de supervisión de Docker recopila métricas de la API remota de Docker, mediante socket Unix o TCP.
- [Autoheal](https://github.com/willfarrell/docker-autoheal) - Supervisa y reinicia automáticamente contenedores Docker en mal estado.
- [Better Stack](https://betterstack.com/community/guides/scaling-docker/) - :yen: Conjunto de herramientas de observabilidad compatible con Docker que proporciona agregación de registros y supervisión de disponibilidad para aplicaciones en contenedores.
- [cAdvisor](https://github.com/google/cadvisor) - Analiza el uso de recursos y las características de rendimiento de los contenedores en ejecución.
- [Datadog](https://www.datadoghq.com/) - :yen: Servicio de supervisión de pila completa con compatibilidad de primera clase con Docker, Kubernetes y Mesos.
- [DLIA](https://github.com/zorak1103/dlia) - Agente de supervisión de registros Docker con IA que utiliza modelos de lenguaje grandes (LLM) para analizar inteligentemente registros de contenedores, detectar anomalías y ofrecer información contextual a lo largo del tiempo.
- [docker-exporter](https://github.com/dlepaux/docker-exporter) - Exportador Prometheus ligero de métricas de contenedores Docker, escrito en Rust. Calcula correctamente el conjunto de trabajo de memoria cgroup v2 en ARM64 (Raspberry Pi 5), se ejecuta sin privilegios con un socket de solo lectura y utiliza unos 7 MiB de RAM en reposo.
- [Docker-Sentinel](https://github.com/Will-Luck/Docker-Sentinel) - Actualizaciones automatizadas de contenedores con políticas por contenedor, protección frente a retrocesos y panel web en tiempo real.
- [DockProbe](https://github.com/deep-on/dockprobe) - Panel ligero de supervisión Docker en un único contenedor. Métricas en tiempo real, 6 reglas de detección de anomalías, alertas de Telegram y 16 análisis de seguridad automatizados. Sin configuración y con unos 50 MB de RAM.
- [DockProc](https://gitlab.com/n0r1sk/dockproc) - Supervisión de E/S de contenedores a nivel de proceso.
- [dockprom](https://github.com/stefanprodan/dockprom) - Supervisión de hosts y contenedores Docker con Prometheus, Grafana, cAdvisor, NodeExporter y AlertManager.
- [Doku](https://github.com/amerkurev/doku) - Aplicación web sencilla para supervisar el uso del disco de Docker.
- [Dozzle](dozzle) - Supervisa los registros de contenedores en tiempo real desde un navegador o dispositivo móvil.
- [Drydock](https://github.com/CodesWhat/drydock) - Supervisión de actualizaciones de contenedores con panel web, 23 proveedores de registros, 20 activadores de notificaciones y arquitectura de agentes distribuidos.
- [Dynatrace](https://docs.dynatrace.com/docs/observe/infrastructure-observability/container-platform-monitoring) - :yen: Supervisa aplicaciones en contenedores sin instalar agentes ni modificar los comandos Run.
- [Grafana Docker Dashboard Template](https://grafana.com/grafana/dashboards/179-docker-prometheus-monitoring/) - Plantilla para tu pila Docker, Grafana y Prometheus.
- [InfraCanvas](https://github.com/bytestrix/InfraCanvas) - Mapa visual en directo de contenedores, pods, volúmenes y redes en cualquier servidor Linux. Binario único y actualizaciones en directo mediante WebSocket.
- [Maintenant](https://github.com/kolapsis/maintenant) - Supervisión de infraestructura autodetectable para Docker y Kubernetes. Detecta contenedores automáticamente mediante etiquetas e incluye supervisión de endpoints, latidos, certificados TLS, métricas de recursos, información sobre actualizaciones y una página de estado integrada. Binario único con SPA integrada.
- [Middleware](https://middleware.io/) - :yen: Supervisa hosts Docker, contenedores, registros y rendimiento de aplicaciones desde una plataforma de observabilidad unificada.
- [Site24x7](https://www.site24x7.com/docker-monitoring.html) - :yen: Supervisión de Docker para DevOps y TI, modelo SaaS de pago por host.
- [Sysdig Monitor](https://www.sysdig.com/products/monitor) - :yen: Software o servicio SaaS que supervisa, alerta y diagnostica problemas de contenedores mediante llamadas al sistema; incluye funciones específicas para Docker y Kubernetes.
- [Wiremap](https://github.com/codeofmario/wiremap) - Explorador visual autogestionado de topología de redes Docker con transmisión de registros en tiempo real, estadísticas en directo, terminal integrada e inspección de contenedores.

## Seguridad

Refuerzo de contenedores, seguridad en tiempo de ejecución, políticas, cumplimiento y análisis forense. Se incluyen soluciones autogestionadas y comerciales; las comerciales se marcan con `:yen:`.

- [Aqua Security](https://www.aquasec.com) - :yen: Protege aplicaciones basadas en contenedores desde el desarrollo hasta la producción en cualquier plataforma.
- [buildcage](https://github.com/dash14/buildcage) - Restringe el acceso saliente a la red durante las compilaciones Docker para evitar ataques a la cadena de suministro. Funciona como controlador remoto de BuildKit integrado directamente con Docker Buildx e incluye acciones de GitHub listas para usar.
- [CetusGuard](https://github.com/hectorm/cetusguard) - Herramienta que protege el socket del daemon Docker filtrando las llamadas a sus endpoints de API.
- [Checkov](https://github.com/bridgecrewio/checkov) - Análisis estático de manifiestos de infraestructura como código (Terraform, Kubernetes, Cloudformation, Helm, Dockerfile, Kustomize) para encontrar y corregir configuraciones de seguridad incorrectas.
- [compose-lint](https://github.com/tmatens/compose-lint) - Analiza archivos Docker Compose en busca de configuraciones de seguridad incorrectas —contenedores privilegiados, imágenes sin versión fijada, montajes del socket Docker y credenciales en texto sin cifrar—, conforme a OWASP y CIS Docker Benchmark.
- [container-explorer](https://github.com/google/container-explorer) - Utilidad forense para explorar detalles de contenedores Docker y containerd a partir de imágenes de disco montadas.
- [Deepfence Threat Mapper](https://github.com/deepfence/ThreatMapper) - Potente analizador de vulnerabilidades en tiempo de ejecución para Kubernetes, máquinas virtuales y arquitecturas sin servidor.
- [Den](https://github.com/us/den) - Entorno de ejecución de sandbox autogestionado para agentes de IA, con contenedores Docker, refuerzo de seguridad, API REST y compatibilidad con WebSocket.
- [docker-bench-security](https://github.com/docker/docker-bench-security) - Script que comprueba decenas de prácticas recomendadas habituales para implementar contenedores Docker en producción.
- [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy) - Filtro detallado basado en HAProxy para el socket de la API Docker; se usa ampliamente para exponer un socket restringido a proxies inversos y pilas de homelab.
- [KICS](https://github.com/checkmarx/kics) - Herramienta de análisis de infraestructura como código que detecta vulnerabilidades de seguridad, problemas de cumplimiento y configuraciones incorrectas de infraestructura al inicio del ciclo de desarrollo. Se puede ampliar con políticas adicionales.
- [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) - :yen: (Antes, Twistlock Security Suite) detecta vulnerabilidades, refuerza imágenes de contenedor y aplica políticas de seguridad durante todo el ciclo de vida de las aplicaciones.
- [segspec](https://github.com/dormstern/segspec) - Extrae dependencias de red de Docker Compose, manifiestos Kubernetes, gráficos Helm y otros archivos de configuración para generar NetworkPolicies de Kubernetes con trazabilidad de evidencias.
- [Sysdig Falco](https://github.com/falcosecurity/falco) - Monitor de seguridad de contenedores de código abierto. Puede supervisar la actividad de aplicaciones, contenedores, hosts y redes, y alertar sobre actividades no autorizadas.
- [Sysdig Secure](https://www.sysdig.com/solutions/cloud-detection-and-response-cdr) - :yen: Sysdig Secure aborda la seguridad en tiempo de ejecución mediante supervisión y defensa basadas en el comportamiento, y proporciona análisis forense detallado basado en Sysdig de código abierto para responder a incidentes.
- [Trend Micro DeepSecurity](https://www.trendmicro.com/en_us/business/products/hybrid-cloud/deep-security.html) - :yen: Trend Micro DeepSecurity ofrece protección en tiempo de ejecución para cargas de trabajo y hosts de contenedores, además de análisis previo a la ejecución de imágenes para identificar vulnerabilidades, malware y contenido como secretos codificados directamente.

## Interfaces de usuario

### Escritorio

Aplicaciones de escritorio nativas para administrar y supervisar hosts y clústeres Docker.

- [Docker DB Manager](https://github.com/AbianS/docker-db-manager) - Aplicación de escritorio para administrar contenedores de bases de datos Docker con una interfaz visual y operaciones con un solo clic.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - Aplicación nativa oficial. Solo para Windows y macOS.
- [Gantry (Desktop)](https://github.com/getgantry/gantry) - Aplicación nativa para macOS (SwiftUI, sin Electron) para administrar y supervisar hosts Docker, locales y mediante SSH: panel de flota, registros y estadísticas en directo, terminal exec, explorador de archivos y servidor MCP integrado para agentes de IA.
- [Simple Docker UI](https://github.com/felixgborrego/simple-docker-ui) - Basado en Electron.
- [Stevedore](https://github.com/slonopotamus/stevedore) - Buen sustituto de Docker Desktop para Windows. Admite contenedores de Linux y Windows. [slonopotamus](https://github.com/slonopotamus).

### Terminal

Interfaces de terminal, herramientas CLI e integraciones de shell para Docker.

- [bosun](https://github.com/psychedelicdevx/bosun) - Interfaz de terminal controlada por teclado para Docker, con agrupación de proyectos Compose, registros en directo, estadísticas y acceso al shell.
- [d4s](https://github.com/jr-k/d4s) - Interfaz de terminal rápida y controlada por teclado para gestionar contenedores Docker, pilas Compose y servicios Swarm con la ergonomía de K9s.
- [dcinja](https://github.com/Falldog/dcinja) - Potente motor de plantillas con el menor tamaño de binario para el entorno de línea de comandos Docker.
- [dctl](https://github.com/FabienD/docker-stack) - Dctl es una herramienta CLI que ayuda a los desarrolladores a ejecutar todos los comandos de Docker Compose desde cualquier lugar del terminal, y más.
- [decompose](https://github.com/s0rg/decompose) - Herramienta de ingeniería inversa para entornos Docker.
- [dive](https://github.com/wagoodman/dive) - Herramienta para explorar cada capa de una imagen Docker.
- [docker pushrm](https://github.com/christian-korneck/docker-pushrm) - Complemento de la CLI Docker que permite publicar en Docker Hub el archivo README.md del directorio actual. También es compatible con Quay y Harbor.
- [docker-captain](https://github.com/lucabello/docker-captain) - CLI fácil de usar para gestionar con estilo varias implementaciones Docker Compose; funciona con Typer, Rich, questionary y sh.
- [dockerfile-mode](https://github.com/spotify/dockerfile-mode) - Modo de Emacs para trabajar con Dockerfiles.
- [dockerfilegraph](https://github.com/patrickhoefler/dockerfilegraph) - Visualiza Dockerfiles de varias etapas.
- [dockly](https://github.com/lirantal/dockly) - Interfaz de shell interactiva para gestionar contenedores Docker.
- [DockMate](https://github.com/shubh-io/dockmate) - Gestor ligero de Docker y Podman basado en terminal, con interfaz de texto.
- [DockSTARTer](https://github.com/GhostWriters/DockSTARTer) - DockSTARTer te ayuda a empezar a usar aplicaciones de servidor doméstico que se ejecutan en Docker.
- [DockTUI](https://github.com/strmax195-hue/docktui) - Panel de terminal rápido y sin dependencias para Docker y Compose.
- [dockup](https://github.com/paulo-amaral/dockup) - Interfaz de terminal para instalar, reforzar y mantener entornos de ejecución de contenedores: Docker Engine + Compose v2, NVIDIA Container Toolkit, Podman y Apple container; incluye una auditoría de seguridad inspirada en CIS.
- [dprs](https://github.com/durableprogramming/dprs) - Interfaz de terminal orientada a desarrolladores para gestionar contenedores Docker, con transmisión de registros en tiempo real y gestión de contenedores.
- [dry](https://github.com/moncho/dry) - CLI interactiva para contenedores Docker.
- [easydocker](https://github.com/joao-zanutto/easydocker) - Interfaz de terminal muy inspirada en k9s, que aprovecha los hermosos gráficos de BubbleTea.
- [goManageDocker](https://github.com/ajayd-san/gomanagedocker) - Herramienta de interfaz de terminal para ver y gestionar objetos Docker a gran velocidad con combinaciones de teclas intuitivas; también admite navegación estilo VIM de forma predeterminada.
- [layerx](https://github.com/deveshctl/layerx) - Inspecciona capas de imágenes de contenedor en una interfaz de terminal: explora diferencias del sistema de archivos, muestra el contenido de archivos, ordena por tamaño, extrae archivos individuales y aplica umbrales de eficiencia en CI. Admite Docker, Podman y archivos OCI.
- [lazydocker](https://github.com/jesseduffield/lazydocker) - La forma más sencilla de gestionar todo Docker. Interfaz de terminal simple para Docker y docker-compose, escrita en Go con la biblioteca gocui.
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - Interfaz para leer y filtrar los registros de contenedores Docker y Podman, como [Dozzle](dozzle), pero en el terminal y con búsqueda difusa, expresiones regulares y coloreado de la salida.
- [oxker](https://github.com/mrjackwills/oxker) - Interfaz de terminal sencilla para ver y controlar contenedores Docker.
- [proco](https://github.com/shiwaforce/poco) - Proco te ayuda a organizar y gestionar proyectos Docker, Docker-Compose y Kubernetes de cualquier complejidad mediante archivos de configuración YAML sencillos, para acortar el camino desde encontrar un proyecto hasta inicializarlo en tu entorno local.
- [scuba](https://github.com/JonathonReinhart/scuba) - Usa contenedores Docker de forma transparente para encapsular entornos de compilación de software.
- [supdock](https://github.com/segersniels/supdock) - Permite usar Docker de forma algo más visual mediante un indicador interactivo.
- [swarmcli](https://github.com/Eldara-Tech/swarmcli) - Gestiona Swarm a la velocidad del pensamiento: transmite registros en tiempo real, accede al shell de los contenedores al instante, reenvía puertos sin complicaciones y revela secretos bajo demanda, para controlar por completo Docker Swarm sin interrumpir tu flujo de trabajo.
- [tdocker](https://github.com/pivovarit/tdocker) - Sustituto de `docker ps` para las operaciones cotidianas con contenedores.
- [wharf](https://github.com/idesyatov/wharf) - Interfaz de terminal para Docker Compose inspirada en k9s, con navegación estilo vim, supervisión de CPU/MEM en tiempo real con gráficos braille, explorador de archivos de contenedor, compatibilidad con hosts SSH remotos y modo de comandos.

### Web

- [Arcane](https://github.com/getarcaneapp/arcane) - Plataforma de gestión Docker sencilla y moderna, diseñada para todo el mundo.
- [CASA](https://github.com/knrdl/casa) - Delega en tus compañeros la administración de un conjunto reducido de contenedores.
- [Container Web TTY](https://github.com/wrfly/container-web-tty) - Conecta tus contenedores mediante un terminal web.
- [Docker Commander](https://github.com/koduj-dev/docker-commander) - Interfaz autogestionada de gestión y supervisión Docker con compatibilidad con varios hosts, gestión de Compose, registros agregados, alertas, RBAC, análisis de vulnerabilidades e integración MCP.
- [Docker Registry Browser](https://github.com/klausmeyer/docker-registry-browser) - Interfaz web para la API HTTP v2 de Docker Registry.
- [docker-swarm-visualizer](https://github.com/dockersamples/docker-swarm-visualizer) - Visualiza servicios Docker en un Docker Swarm (para ejecutar demostraciones).
- [dockge](https://github.com/louislam/dockge) - Gestor sencillo y reactivo, autogestionado y orientado a pilas docker compose.yaml.
- [DockScope](https://github.com/ManuelR-T/dockscope) - Visualiza contenedores Docker en un grafo de dependencias 3D con métricas y registros en directo, además de terminal en el navegador.
- [Komodo](https://github.com/mbecker20/komodo) - Herramienta para compilar e implementar software en muchos servidores.
- [Portainer](https://github.com/portainer/portainer) - Interfaz de gestión ligera para administrar hosts Docker o clústeres Docker Swarm.
- [Swarmpit](https://github.com/swarmpit/swarmpit) - Swarmpit proporciona una interfaz sencilla y fácil de usar para tu clúster Docker Swarm. Puedes gestionar pilas, servicios, secretos, volúmenes, redes, etc.
- [usulnet](https://github.com/fr4nsys/usulnet) - Plataforma de gestión Docker completa y moderna, diseñada para administradores de sistemas y DevOps, con herramientas de nivel empresarial, analizador CVE, SSH, RDP en la web y mucho más.

### Integraciones con IDE

- Los IDE de JetBrains (IntelliJ IDEA, GoLand, WebStorm, CLion, etc.) tienen un [complemento Docker integrado](https://www.jetbrains.com/help/idea/docker.html#managing-images)
- Eclipse [complemento Docker Tooling](https://www.eclipse.org/community/eclipse_newsletter/2016/july/article2.php)
- [docker.el](https://github.com/Silex/docker.el) Gestiona Docker desde Emacs.

## Flujo de trabajo de desarrollo

### Cliente de API

- [contajners](https://github.com/lispyclouds/contajners) - Cliente Clojure idiomático, basado en datos y compatible con REPL para motores de contenedores OCI.
- [Docker Client for JVM](https://github.com/gesellix/docker-client) - Biblioteca cliente de la API remota de Docker para la JVM, escrita en Groovy.
- [Docker Client TypeScript](https://gitlab.com/masaeedu/docker-client) - Cliente de la API Docker para JavaScript, generado automáticamente a partir de la definición de la API Swagger del repositorio moby.
- [docker-controller-bot](https://github.com/dgongut/docker-controller-bot) - Bot de Telegram para controlar contenedores Docker.
- [docker-maven-plugin](https://github.com/fabric8io/docker-maven-plugin) - Complemento Maven para ejecutar y crear imágenes Docker.
- [Docker.DotNet](https://github.com/Microsoft/Docker.DotNet) - Cliente HTTP de C#/.NET para la API remota de Docker.
- [Docker.Registry.DotNet](https://github.com/ChangemakerStudios/Docker.Registry.DotNet) - Biblioteca cliente .NET (C#) para interactuar con la API Docker Registry (v2).
- [dockerode](https://github.com/apocas/dockerode) - Módulo node.js para la API remota de Docker.
- [go-dockerclient](https://github.com/fsouza/go-dockerclient/) - Cliente HTTP de Go para la API remota de Docker.
- [Gradle Docker plugin](https://github.com/gesellix/gradle-docker-plugin) - Complemento de Gradle para la API remota de Docker.
- [Portainer stack utils](https://github.com/greenled/portainer-stack-utils) - Script bash para implementar, actualizar o retirar pilas Docker en una instancia de Portainer a partir de un archivo yaml de docker-compose.
- [sbt-docker](https://github.com/marcuslonnberg/sbt-docker) - Crea imágenes Docker directamente desde sbt.

### CI/CD

Motores CI autogestionados, aceleradores de compilación y servicios alojados para flujos de trabajo Docker. Las opciones comerciales se marcan con `:yen:`.

- [Buddy](https://buddy.works) - :yen: Lo mejor de Git, compilación e implementación, combinado en una potente herramienta que aceleró nuestro desarrollo.
- [Captain](https://github.com/harbur/captain) - Convierte tu flujo de trabajo de Git en contenedores Docker listos para la entrega continua.
- [CircleCI](https://circleci.com/) - :yen: Publica o descarga imágenes Docker desde tu entorno de compilación, o compila y ejecuta contenedores directamente en CircleCI.
- [CodeFresh](https://octopus.com/codefresh) - :yen: Compilación, pruebas y uso compartido de extremo a extremo para aplicaciones Docker, con pruebas automatizadas.
- [ConcourseCI](https://concourse-ci.org) - :yen: Plataforma SaaS de CI orientada a canalizaciones para equipos DevOps.
- [Defang](https://github.com/DefangLabs/defang) - Implementa Docker Compose en tu proveedor de nube favorito en minutos.
- [Depot](https://depot.dev) - :yen: Compila imágenes Docker rápidamente en la nube. Cómputo ultrarrápido, caché inteligente automatizada y configuración cero.
- [Diun](https://github.com/crazy-max/diun) - Recibe notificaciones cuando se actualice una imagen o un repositorio en un registro Docker.
- [dockcheck](https://github.com/mag37/dockcheck) - Script que comprueba si hay actualizaciones de imágenes Docker sin descargarlas y luego actualiza automáticamente los contenedores seleccionados o todos. Incluye notificaciones, limpieza y más.
- [Docker plugin for Jenkins](https://github.com/jenkinsci/docker-plugin/) - El objetivo del complemento Docker es usar un host Docker para aprovisionar dinámicamente un agente, ejecutar una compilación y luego eliminar ese agente.
- [Drone](https://github.com/drone/drone) - Servidor de integración continua basado en Docker y configurado mediante archivos YAML.
- [Gantry](https://github.com/shizunge/gantry) - Actualiza automáticamente servicios Docker Swarm seleccionados.
- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) - GitLab integra CI para probar, compilar e implementar tu código mediante GitLab runners.
- [Jaypore CI](https://github.com/theSage21/jaypore_ci) - Sistema sencillo, muy flexible y potente de CI/CD y automatización, configurado en Python. Primero local y sin conexión.
- [Kraken CI](https://github.com/Kraken-CI/kraken) - Sistema moderno de CI/CD de código abierto y local, altamente escalable y centrado en las pruebas. Uno de sus ejecutores es Docker. En desarrollo.
- [Screwdriver](https://screwdriver.cd/) - :yen: Plataforma de compilación de código abierto de Yahoo diseñada para la entrega continua.
- [Self Hosted Runner](https://github.com/youssefbrr/self-hosted-runner) - Solución en contenedor Docker para configurar un ejecutor autogestionado de GitHub Actions compatible con Linux, macOS y Windows.
- [Semaphore CI](https://semaphore.io/) - :yen: CI en la nube de alto rendimiento que compila, prueba y distribuye contenedores a producción.
- [Skipper](https://github.com/Stratoscale/skipper) - Convierte fácilmente tu repositorio Git en una imagen Docker.
- [Tekton CD](https://tekton.dev/) - Recurso de canalizaciones nativo de la nube.
- [TravisCI](https://www.travis-ci.com/) - :yen: CI alojada para proyectos de GitHub con compatibilidad con Docker.

### Entorno de desarrollo

- [coder](https://github.com/coder/coder) - Máquinas de desarrollo remotas basadas en Terraform o Docker.
- [dde](https://github.com/whatwedo/dde) - Conjunto de herramientas de entorno de desarrollo local basado en Docker.
- [DIP](https://github.com/bibendi/dip) - Utilidad CLI para aprovisionar fácilmente e interactuar con una aplicación configurada mediante docker-compose.
- [EnvCLI](https://github.com/EnvCLI/EnvCLI) - Sustituye tus instalaciones locales de Node, Go, etc., por contenedores Docker específicos del proyecto.
- [Gebug](https://github.com/moshebe/gebug) - Herramienta que facilita enormemente la depuración de aplicaciones Go en Docker al habilitar funciones de depuración y recarga en caliente.
- [HarborPilot](https://github.com/potterwhite/HarborPilot) - Constructor automatizado de imágenes Docker multiplataforma para desarrollo de Linux integrado (RK3588, RV1126, RK3568). Incluye herencia de configuración de tres capas, asignación de puertos basada en PORT_SLOT y compatibilidad con distintas versiones de Ubuntu (20.04/22.04/24.04).
- [Lando](https://github.com/lando/lando) - Lando está pensado para desarrolladores que quieren especificar rápidamente y poner en marcha sin complicaciones los servicios y herramientas necesarios para desarrollar sus proyectos.
- [Laradock](https://github.com/laradock/laradock) - Entorno de desarrollo PHP completo basado en Docker, con Nginx/Apache, PHP, MySQL, Redis y más como servicios Compose intercambiables.
- [uniget](https://github.com/uniget-org/cli) - Uni(versal)get, instalador y actualizador de herramientas de contenedor y más (antes docker-setup).
- [Zsh-in-Docker](https://github.com/deluan/zsh-in-docker) - Instala Zsh, Oh-My-Zsh y complementos dentro de un contenedor Docker con una sola línea.

### Sin servidor

- [Apache OpenWhisk](https://github.com/apache/openwhisk) - Plataforma de nube sin servidor y de código abierto que ejecuta funciones en respuesta a eventos a cualquier escala.
- [Koyeb](https://www.koyeb.com/) - :yen: Plataforma sin servidor, fácil de usar para desarrolladores, para implementar aplicaciones en todo el mundo. Ejecuta sin complicaciones contenedores Docker, aplicaciones web y API con implementaciones basadas en Git, escalado automático nativo, red perimetral global y malla de servicios y detección integradas.
- [OpenFaaS](https://github.com/openfaas/faas) - Framework completo de funciones sin servidor para Docker y Kubernetes.

### Pruebas

- [Container Structure Test](https://github.com/GoogleContainerTools/container-structure-test) - Framework para validar la estructura de una imagen comprobando la salida de comandos o el contenido del sistema de archivos.
- [dgoss](https://github.com/goss-org/goss/tree/master/extras/dgoss) - Herramienta rápida basada en YAML para validar contenedores Docker.
- [Kurtosis](https://github.com/kurtosis-tech/kurtosis) - Sistema de compilación componible para entornos de prueba con varios contenedores que ofrece a los desarrolladores un SDK potente, similar a Python, para configurar el entorno; un validador en tiempo de compilación para verificar su comportamiento y configuración; y un entorno de ejecución para ejecutarlo, supervisarlo y depurarlo.
- [Pumba](https://github.com/alexei-led/pumba) - Herramienta de pruebas de caos para Docker. Se puede implementar en clústeres Kubernetes y CoreOS.

### Herramientas envolventes

- [Hokusai](https://github.com/artsy/hokusai) - CLI de Docker + Kubernetes para desarrolladores de aplicaciones; se usa para contenerizar una aplicación y gestionar su ciclo de vida durante los ciclos de desarrollo, pruebas y publicación. De [artsy](https://github.com/artsy).
- [Preevy](https://github.com/livecycle/preevy) - Entornos de vista previa para proyectos Docker y Docker Compose. Prueba tus cambios y recibe comentarios de desarrolladores y personas no técnicas (producto/diseño) implementando solicitudes de incorporación de cambios en tu proveedor de nube como parte de la canalización CI.
- [subuser](https://github.com/subuser-security/subuser) - Facilita la ejecución segura y portátil de aplicaciones gráficas de escritorio en Docker.
- [udocker](https://github.com/indigo-dc/udocker) - Herramienta para ejecutar contenedores Docker sencillos en sistemas por lotes o interactivos sin privilegios de root.
- [Vagrant - Docker provider](https://developer.hashicorp.com/vagrant/docs/providers/docker/basics) - Un buen punto de partida es [vagrant-docker-example](https://github.com/bubenkoff/vagrant-docker-example).

## Herramientas dentro del contenedor

Herramientas y aplicaciones instaladas dentro de contenedores o diseñadas para ejecutarse como [sidecar](https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar).

- [cdebug](https://github.com/iximiuz/cdebug) - Herramienta multiuso para depurar contenedores en ejecución mediante sidecars efímeros; funciona con Docker, containerd y Kubernetes.
- [ckron](https://github.com/nicomt/ckron) - Planificador de tareas para Docker al estilo cron.
- [CoreOS][coreos] - Linux para implementaciones de servidores a gran escala
- [docker-gen](https://github.com/jwilder/docker-gen) - Genera archivos a partir de metadatos de contenedores Docker.
- [dockerize](https://github.com/powerman/dockerize) - Utilidad para simplificar la ejecución de aplicaciones en contenedores Docker.
- [GoSu](https://github.com/tianon/gosu) - Ejecuta esta aplicación específica como este usuario específico y sale de la canalización (herramienta para scripts entrypoint).
- [is-docker](https://github.com/sindresorhus/is-docker) - Comprueba si el proceso se ejecuta dentro de un contenedor Docker.
- [microcheck](https://github.com/tarampampam/microcheck) - Utilidades ligeras de comprobación de estado para contenedores Docker (75 KB en lugar de 9,3 MB para httpcheck frente a cURL), escritas en C puro; incluye comprobaciones http(s), de puertos y ejecución en paralelo.
- [Ofelia](https://github.com/mcuadros/ofelia/) - Ofelia es un planificador de tareas moderno y de bajo consumo para entornos Docker, escrito en Go. Su objetivo es sustituir al antiguo cron. Admite configuración mediante etiquetas de contenedor o archivos de configuración.
- [su-exec](https://github.com/ncopa/su-exec) - Herramienta sencilla que ejecuta un programa con distintos privilegios. El programa se ejecuta directamente y no como proceso hijo, a diferencia de su y sudo, lo que evita problemas con TTY y señales. ¿Por qué reinventar gosu? Hace prácticamente lo mismo que gosu, pero ocupa solo 10 KB en lugar de 1,8 MB.
- [supercronic](https://github.com/aptible/supercronic) - Ejecutor de tareas compatible con crontab, diseñado específicamente para ejecutarse en contenedores.

# Recursos de aprendizaje

## Por dónde empezar

- [Benefits of using Docker](https://semaphore.io/blog/docker-benefits) para el desarrollo y la entrega, con una hoja de ruta práctica de adopción.
- [Bootstrapping Microservices](https://www.manning.com/books/bootstrapping-microservices-with-docker-kubernetes-and-terraform) - Guía práctica y basada en proyectos para crear aplicaciones con microservicios: comienza creando una imagen Docker para un único microservicio y publicándola en un registro privado de contenedores, y termina implementando una aplicación completa de microservicios en un clúster Kubernetes de producción.
- [Docker Curriculum](https://github.com/prakhar1989/docker-curriculum): Tutorial completo para empezar con Docker. Enseña a usar Docker e implementar aplicaciones en contenedores en AWS con Elastic Beanstalk y Elastic Container Service.
- [Docker Documentation](https://docs.docker.com/): documentación oficial.
- [Docker for beginners](https://github.com/groda/big_data/blob/master/docker_for_beginners.md): Tutorial para principiantes que necesitan aprender los conceptos básicos de Docker, desde «¡Hola, mundo!» hasta interacciones básicas con contenedores, con explicaciones sencillas de los conceptos subyacentes.
- [Docker for novices](https://www.youtube.com/watch?v=xsjSadjKXns) Introducción a Docker para desarrolladores y probadores que nunca lo han usado. (Vídeo de 1 h 40 min, grabado en linux.conf.au 2019 — Christchurch, Nueva Zelanda)
- [Docker katas](https://github.com/eficode-academy/docker-katas) Serie de laboratorios que te lleva desde «Hola, Docker» hasta implementar una aplicación web en contenedores en un servidor.
- [Docker simplified in 55 seconds](https://www.youtube.com/watch?v=vP_4DlOH1G4): Introducción animada y general a Docker. Considérala un resumen visual que facilita profundizar en materiales de aprendizaje más complejos.
- [Docker Training](https://training.mirantis.com) - :yen:
- [Dockerlings](https://github.com/furkan/dockerlings): Aprende Docker desde el terminal con una interfaz moderna y ejercicios breves.
- [Introduction à Docker](https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/) Sección dedicada a dominar Docker en un sitio francés sobre DevSecOps: desde los conceptos básicos hasta las prácticas recomendadas, incluida la optimización y la protección de contenedores...
- [Learn Docker](https://github.com/dwyl/learn-docker): tutorial paso a paso y más recursos (vídeos, artículos y hojas de referencia).
- [Learn Docker (Visually)](https://pagertree.com/learn/docker/overview) - Descripción general, de alto nivel y orientada a principiantes, de los principales componentes de Docker y cómo encajan entre sí. Incluye muchas imágenes, ejemplos y recursos de gran calidad.
- [Play With Docker](https://training.play-with-docker.com/): PWD es una excelente forma de empezar a usar Docker, desde nivel principiante hasta avanzado. Docker se ejecuta directamente en el navegador.
- [Practical Guide about Docker Commands in Spanish](https://github.com/brunocascio/docker-espanol) Esta guía en español explica los comandos básicos de Docker con ejemplos de la vida real.
- [Setting Python Development Environment with VScode and Docker](https://github.com/RamiKrispin/vscode-python): Tutorial paso a paso para configurar un entorno de desarrollo Python en contenedores con VScode, Docker y la extensión Dev Container.
- [The Docker Handbook](https://docker-handbook.farhan.dev/) Libro de código abierto que enseña los fundamentos, las prácticas recomendadas y algunas funciones intermedias de Docker. El libro está alojado en el repositorio [fhsinchy/the-docker-handbook](https://github.com/fhsinchy/the-docker-handbook) y los proyectos, en el repositorio [fhsinchy/docker-handbook-projects](https://github.com/fhsinchy/docker-handbook-projects).

**Hojas de referencia**

- [eon01](https://github.com/eon01/DockerCheatSheet)
- [dimonomid](https://github.com/dimonomid/docker-quick-ref) (PDF)
- [JensPiegsa](https://github.com/JensPiegsa/docker-cheat-sheet)
- [wsargent](https://github.com/wsargent/docker-cheat-sheet) (La más popular)

## Por dónde empezar (Windows)

- [Docker on Windows behind a firewall](https://toedter.com/2015/05/11/docker-on-windows-behind-a-firewall/)
- [Docker Reference Architecture: Modernizing Traditional .NET Framework Applications](https://docs.mirantis.com/containers/v3.0/dockeree-ref-arch/app-dev/modernize-dotnet-apps.html) - Aprenderás a identificar qué tipos de aplicaciones .NET Framework son buenas candidatas para la contenerización y conocerás el enfoque de «migrar y trasladar» (lift-and-shift).
- [Docker with Microsoft SQL 2016 + ASP.NET](https://blog.alexellis.io/docker-does-sql2016-aspnet/) Demostración de la ejecución de cargas de trabajo ASP.NET y SQL Server en Docker.
- [Exploring ASP.NET Core with Docker in both Linux and Windows Containers](https://www.hanselman.com/blog/exploring-aspnet-core-with-docker-in-both-linux-and-windows-containers) Ejecución de aplicaciones ASP.NET Core en contenedores Linux y Windows mediante [Docker for Windows][docker-for-windows].
- [Running a Legacy ASP.NET App in a Windows Container](https://blog.sixeyed.com/dockerizing-nerd-dinner-part-1-running-a-legacy-asp-net-app-in-a-windows-container/) Pasos para contenerizar una aplicación ASP.NET heredada y ejecutarla como contenedor Windows.
- [Windows Containers and Docker: The 101](https://www.youtube.com/watch?v=N7SG2wEyQtM) - Introducción de 20 minutos al uso de Docker para ejecutar PowerShell, ASP.NET Core y aplicaciones ASP.NET.
- [Windows Containers Quick Start](https://learn.microsoft.com/en-us/virtualization/windowscontainers/about/) Descripción general de los contenedores Windows, con enlaces a guías de inicio rápido para Windows 10 y Windows Server 2016.

---

## Libros y tutoriales

- [Cloud Native Landscape](https://github.com/cncf/landscape)
- [Docker Blog](https://www.docker.com/blog/) - Novedades periódicas sobre Docker, la comunidad y las herramientas.
- [Docker Certification](https://intellipaat.com/docker-training-course/?US) - :yen: Te ayudará a aprender la contenerización con Docker, la ejecución de contenedores, la creación de imágenes, Dockerfile, la orquestación de Docker, las prácticas recomendadas de seguridad y más mediante proyectos prácticos y estudios de caso, y a obtener la certificación Docker Certified Associate.
- [Docker dev bookmarks](https://www.codever.dev/search?q=docker) - Usa la etiqueta [docker](https://www.codever.dev/bookmarks/t/docker).
- [Docker in Action, Second Edition](https://www.manning.com/books/docker-in-action-second-edition)
- [Docker in Practice, Second Edition](https://www.manning.com/books/docker-in-practice-second-edition)
- [Docker packaging guide for Python](https://pythonspeed.com/docker/) - Serie de artículos detallados sobre los aspectos específicos del empaquetado Docker para Python.
- [Learn Docker in a Month of Lunches](https://www.manning.com/books/learn-docker-in-a-month-of-lunches)
- [Learn Docker](https://coursesity.com/blog/best-docker-tutorials/) - Aprende Docker: lista seleccionada de los mejores tutoriales y cursos de Docker en línea.
- [Programming Community Curated Resources for learning Docker](https://hackr.io/tutorials/learn-docker)

## Listas Awesome

- [Awesome Compose](https://github.com/docker/awesome-compose) - Ejemplos de Docker Compose.
- [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes)
- [Awesome Linux Container](https://github.com/Friz-zy/awesome-linux-containers) lista más general sobre contenedores que este repositorio.
- [Awesome Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) lista de servicios de red y aplicaciones web de software libre que se pueden alojar localmente, ya sea de forma tradicional (configurando un servidor web local y ejecutando aplicaciones allí) o en un contenedor Docker.
- [Awesome Sysadmin](https://github.com/n1trux/awesome-sysadmin)
- [ToolsOfTheTrade](https://github.com/cjbarber/ToolsOfTheTrade) lista de aplicaciones SaaS y locales.

## Demostraciones y ejemplos

- [An Annotated Docker Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-docker-config-for-frontend-web-development) Un entorno de desarrollo local con Docker permite empaquetar como configuración las operaciones y herramientas que necesita tu proyecto, y facilita la incorporación de nuevos integrantes.
- [Local Docker DB](https://github.com/alexmacarthur/local-docker-db) lista de ejemplos docker-compose para muchas bases de datos.
- [Webstack-micro](https://github.com/ferbs/webstack-micro) Aplicación web de demostración que muestra cómo usar Docker Compose para configurar una puerta de enlace de API, autenticación centralizada, trabajadores en segundo plano y WebSockets como servicios en contenedores.

## Buenos consejos

- [Docker Caveats](https://docker-saigon.github.io/post/Docker-Caveats/) Lo que debes saber sobre ejecutar Docker en producción (escrito el 11 de abril de 2016).
- [Docker Containers on the Desktop](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
- [Docker vs. VMs? Combining Both for Cloud Portability Nirvana](https://www.flexera.com/blog/finops/)
- [Don't Repeat Yourself with Anchors, Aliases and Extensions in Docker Compose Files](https://medium.com/@kinghuang/docker-compose-anchors-aliases-extensions-a1e4105d70bd)
- [GUI Apps with Docker](https://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/)

## Raspberry Pi y ARM

- [Docker Pirates ARMed with explosive stuff](https://blog.hypriot.com/) Gran recurso sobre clústeres, Swarm y Docker, con imagen preinstalada para tarjetas SD de Raspberry Pi.
- [Get Docker up and running on the RaspberryPi in three steps](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)
- [git push docker containers to linux devices](https://www.balena.io) DevOps moderno para IoT que aprovecha Git y Docker.
- [Installing, running, using Docker on armhf (ARMv7) devices](https://github.com/umiddelb/armhf/wiki/Installing,-running,-using-docker-on-armhf-%28ARMv7%29-devices)

## Artículos sobre seguridad

- [Bringing new security features to Docker](https://opensource.com/business/14/9/security-for-docker)
- [CVE Scanning Alpine images with Multi-stage builds in Docker 17.05](https://github.com/tomwillfixit/alpine-cvecheck)
- [Docker Secure Deployment Guidelines](https://github.com/AonCyberLabs/Docker-Secure-Deployment-Guidelines)
- [Docker Security - Quick Reference](https://binarymist.io/publication/docker-security/)
- [Docker Security: Are Your Containers Tightly Secured to the Ship? SlideShare](https://www.slideshare.net/slideshow/docker-security-are-your-containers-tightly-secured-to-the-ship/43834790)
- [How CVE's are handled on Offical Docker Images](https://github.com/docker-library/official-images/issues/1448)
- [Lynis is an open source security auditing tool including Docker auditing](https://cisofy.com/lynis/)
- [Security Best Practices for Building Docker Images](https://linux-audit.com/tags/docker/)
- [Software Engineering Radio interview of Docker Security Team Lead (Diogo Mónica)](https://www.se-radio.net/2017/05/se-radio-episode-290-diogo-monica-on-docker-security/)
- [Ten Docker Image Security Best Practices Cheat Sheet](https://snyk.io/blog/10-docker-image-security-best-practices/)
- [Top ten most popular docker images each contain at least 30 vulnerabilities](https://snyk.io/blog/top-ten-most-popular-docker-images-each-contain-at-least-30-vulnerabilities/)
- [Tuning Docker with the newest security enhancements](https://opensource.com/business/15/3/docker-security-tuning)
- [10 best practices to containerize Node.js web applications with Docker](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)

## Vídeos

- [Deploying and scaling applications with Docker, Swarm, and a tiny bit of Python magic](https://www.youtube.com/watch?v=GpHMTR7P2Ms) (3:11:06)
- [Docker Course](https://www.youtube.com/watch?v=UZpyvK6UGFo) (En español)
- [Docker for Developers](https://www.youtube.com/watch?v=FdkNAjjO5yQ) (54:26)
- [Docker from scratch](https://www.youtube.com/playlist?list=PLLhEJK7fQIxD-btrjrqdEfQHbkZnQrmqE) (1:22:01)
- [Docker: How to Use Your Own Private Registry](https://www.youtube.com/watch?v=CAewZCBT4PI) (15:01)
- [Docker in Production](https://www.youtube.com/watch?v=Glk5d5WP6MI) (36:05)
- [Docker Primer to Docker Compose](https://www.youtube.com/watch?v=G-s2GXGAjTk) (1:56:45)
- [Docker Registry from scratch](https://www.youtube.com/playlist?list=PLLhEJK7fQIxAz3d4Fj3edq7UcxEhdTCBm) (44:40)
- [Docker Swarm from scratch](https://www.youtube.com/playlist?list=PLLhEJK7fQIxAY4gZd1Wl-GsLvg-e9Ap1e) (1:41:28)
- [Extending Docker with Plugins](https://vimeo.com/110835013) (15:21)
- [From Local Docker Development to Production Deployments](https://www.youtube.com/watch?v=7CZFpHUPqXw)
- [Introduction to Docker and containers](https://www.youtube.com/watch?v=ZVaRK10HBjo) (3:09:00)
- [Logging on Docker: What You Need to Know](https://vimeo.com/123341629) (51:27)
- [Performance Analysis of Docker - Jeremy Eder](https://www.youtube.com/watch?v=6f2E6PKYb0w) (1:36:58)
- [Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615) Curso gratuito de Udacity.
- [State of containers: a debate with CoreOS, VMware and Google](https://www.youtube.com/watch?v=IiITP3yIRd8) (27:38)

## Comunidades y encuentros

### Brasileña

- [Docker BR on Telegram](https://telegram.me/dockerbr)

### Inglesa

- [Docker Community](https://www.docker.com/community/)
- [Docker Events](https://www.docker.com/events/)
- [Docker Online Meetup](https://www.meetup.com/en-AU/Docker-Online-Meetup/)
- [Docker Reddit Community](https://www.reddit.com/r/docker/)

### Rusa

- [Docker Russian-speaking Community](https://t.me/docker_ru)

### Española

- [Docker Tips](https://dockertips.com/)

## Estrellas a lo largo del tiempo

[![Stargazers over time](https://starchart.cc/veggiemonk/awesome-docker.svg?variant=adaptive)](https://starchart.cc/veggiemonk/awesome-docker)

[calico]: https://github.com/projectcalico/calico
[coreos]: https://github.com/coreos
[distribution]: https://github.com/docker/distribution
[docker-for-windows]: https://docs.docker.com/desktop/setup/install/windows-install/
[editreadme]: https://github.com/veggiemonk/awesome-docker/edit/master/README.md
[kubernetes]: https://kubernetes.io
[nginxproxy]: https://github.com/nginx-proxy/nginx-proxy
[openshift]: https://okd.io/
[sindresorhus]: https://github.com/sindresorhus/awesome

