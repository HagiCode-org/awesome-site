# Awesome Docker [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)][sindresorhus] [![Acompanhe a lista Awesome](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/veggiemonk/awesome-docker/)[![Último commit](https://img.shields.io/github/last-commit/veggiemonk/awesome-docker)](https://github.com/veggiemonk/awesome-docker/commits/main)<!-- omit in toc -->

> Uma lista selecionada de projetos para Docker.

Se quiser contribuir, leia [CONTRIBUTING.md](https://github.com/veggiemonk/awesome-docker/blob/master/.github/CONTRIBUTING.md) primeiro.
Se esta lista estiver incompleta, você pode contribuir para completá-la.
Se encontrar aqui um link que já não seja adequado, você pode corrigir isso enviando uma [pull request][editreadme] para melhorar este arquivo. Obrigado!

**O projeto precisa ser voltado ao Docker, não apenas usar Docker.**

> Regra geral: se remover a integração com Docker não eliminar a proposta de valor do projeto, ele não pertence a esta lista.

Os criadores e mantenedores desta lista não recebem qualquer pagamento para aceitar alterações feitas por colaboradores.
Esta página não é, de forma alguma, um produto oficial do Docker.
É uma lista de links para projetos mantida por voluntários.
Todas as pessoas são bem-vindas para contribuir.
O objetivo deste repositório é catalogar projetos de código aberto, não fazer publicidade com fins lucrativos.

> Docker é uma plataforma aberta para desenvolvedores e administradores de sistemas criarem, distribuírem e executarem aplicações distribuídas. Composto pelo Docker Engine, um runtime e ferramenta de empacotamento portátil e leve, e pelo Docker Hub, um serviço de nuvem para compartilhar aplicações e automatizar fluxos de trabalho, o Docker permite montar rapidamente aplicativos a partir de componentes e elimina o atrito entre os ambientes de desenvolvimento, controle de qualidade e produção. Com isso, a equipe de TI pode distribuir mais rapidamente e executar o mesmo aplicativo, sem alterações, em laptops, máquinas virtuais de data centers e qualquer nuvem.

_Fonte:_ [What is Docker](https://www.docker.com/why-docker/)

# Conteúdo <!-- omit in toc -->

<!-- TOC -->

- [Projetos](#projects)
    - [Mecanismo \& ambiente de execução](#engine--runtime)
    - [Criação de imagens](#building-images)
        - [Compilador de imagens](#builder)
        - [Imagens-base](#base-images)
        - [Dockerfile](#dockerfile)
        - [Analisador estático](#linter)
    - [Ciclo de vida das imagens](#image-lifecycle)
        - [Registro](#registry)
        - [CLI de registros](#registry-cli)
        - [Análise de imagens \& SBOM](#image-scanning--sbom)
        - [Cadeia de suprimentos](#supply-chain)
    - [Execução de contêineres](#running-containers)
        - [Composição](#composition)
        - [Orquestração](#orchestration)
        - [Implantação \& plataformas](#deployment--platforms)
        - [Coleta de lixo](#garbage-collection)
    - [Rede \& proxies](#networking--proxies)
        - [Rede](#networking)
        - [Proxy reverso](#reverse-proxy)
    - [Armazenamento \& dados](#storage--data)
    - [Observabilidade](#observability)
    - [Segurança](#security)
    - [Interfaces de usuário](#user-interfaces)
        - [Aplicativos desktop](#desktop)
        - [Terminal](#terminal)
        - [Aplicações Web](#web)
        - [Integrações com IDEs](#ide-integrations)
    - [Fluxo de trabalho do desenvolvedor](#developer-workflow)
        - [Cliente de API](#api-client)
        - [CI/CD](#cicd)
        - [Ambiente de desenvolvimento](#development-environment)
        - [Sem servidor](#serverless)
        - [Testes](#testing)
        - [Adaptadores](#wrappers)
    - [Ferramentas dentro do contêiner](#in-container-tooling)
- [Recursos de aprendizado](#learning-resources)
    - [Por onde começar](#where-to-start)
    - [Por onde começar (Windows)](#where-to-start-windows)
    - [Livros \& tutoriais](#books--tutorials)
    - [Listas incríveis](#awesome-lists)
    - [Demonstrações e exemplos](#demos-and-examples)
    - [Boas dicas](#good-tips)
    - [Raspberry Pi \& ARM](#raspberry-pi--arm)
    - [Artigos sobre segurança](#security-articles)
    - [Vídeos](#videos)
    - [Comunidades e encontros](#communities-and-meetups)
        - [Brasileira](#brazilian)
        - [Inglesa](#english)
        - [Russa](#russian)
        - [Espanhola](#spanish)
- [Estrelas ao longo do tempo](#stargazers-over-time)

<!-- /TOC -->

# Projetos

## Projetos oficiais

- [Moby](https://github.com/moby/moby)
- [Docker Hub](https://hub.docker.com)
- [Docker Compose](https://github.com/docker/compose/) - Defina e execute aplicações com vários contêineres usando Docker.
- [Docker Registry][distribution] - Conjunto de ferramentas Docker para empacotar, enviar, armazenar e entregar conteúdo

## Mecanismo & ambiente de execução

- [colima](https://github.com/abiosoft/colima) - Runtimes de contêineres no macOS (e Linux) com configuração mínima.
- [containerd](https://github.com/containerd/containerd) - Um runtime de contêineres aberto e confiável.
- [cri-o](https://github.com/cri-o/cri-o) - Implementação da Container Runtime Interface do Kubernetes baseada na Open Container Initiative.
- [gVisor](https://github.com/google/gvisor) - Kernel de aplicações para contêineres.
- [lxc](https://github.com/lxc/lxc) - LXC — Contêineres Linux.
- [Mocker](https://github.com/us/mocker) - CLI de contêineres compatível com Docker para macOS, criada sobre o framework Containerization da Apple.
- [podman](https://github.com/containers/libpod) - Libpod é uma biblioteca usada para criar pods de contêineres. É a base do Podman.
- [runc](https://github.com/opencontainers/runc) - Ferramenta de CLI para criar e executar contêineres de acordo com a especificação OCI.
- [runtime-tools](https://github.com/opencontainers/runtime-tools) - Oci-runtime-tool é um conjunto de ferramentas para trabalhar com a especificação de runtime OCI.
- [youki](https://github.com/youki-dev/youki) - Runtime de contêineres escrito em Rust, que implementa a especificação de runtime OCI.

## Criação de imagens

### Compilador de imagens

Aplicações criadas para ajudar ou simplificar a criação de imagens **novas**

- [ansible-bender](https://github.com/ansible-community/ansible-bender) - Uma ferramenta que utiliza `ansible` e `buildah`.
- [apko](https://github.com/chainguard-dev/apko) - Compilador declarativo de imagens OCI a partir de pacotes apk; reproduzível por projeto.
- [buildah](https://github.com/containers/buildah) - Uma ferramenta que facilita a criação de imagens OCI.
- [BuildKit](https://github.com/moby/buildkit) - Conjunto de ferramentas de compilação concorrente, eficiente em cache e independente de Dockerfile.
- [buildx](https://github.com/docker/buildx) - Plugin oficial da CLI do Docker para compilações multiplataforma com tecnologia BuildKit.
- [cekit](https://github.com/cekit/cekit) - Uma ferramenta usada pelo OpenShift para criar imagens-base com diferentes mecanismos de compilação.
- [dlayer](https://github.com/orisano/dlayer) - Analisador de camadas do Docker.
- [docker-companion](https://github.com/mudler/docker-companion) - Uma ferramenta de linha de comando escrita em Go para compactar e descompactar imagens Docker.
- [docker-repack](https://github.com/orf/docker-repack) - Reempacota uma imagem Docker em uma versão menor e mais eficiente, tornando seu download significativamente mais rápido.
- [DockerSlim](https://github.com/docker-slim/docker-slim) reduz imagens Docker grandes, criando imagens tão pequenas quanto possível.
- [earthly](https://github.com/earthly/earthly) - Automação de compilações em contêineres com uma sintaxe que combina Dockerfile e Makefile.
- [essex](https://github.com/utensils/essex) - Estrutura inicial para projetos baseados em Docker: Essex é um utilitário de CLI escrito em Bash para configurar rapidamente projetos Docker limpos e consistentes, com fluxos de trabalho orientados por Makefile.
- [HPC Container Maker](https://github.com/NVIDIA/hpc-container-maker) - Gera Dockerfiles a partir de uma receita Python de alto nível, incluindo blocos de construção para componentes de computação de alto desempenho.
- [img](https://github.com/genuinetools/img) - Compilador independente e sem daemon de imagens de contêiner compatíveis com Dockerfile e OCI, sem privilégios.
- [ko](https://github.com/ko-build/ko) - Crie e implante aplicações Go como imagens de contêiner sem um Dockerfile.
- [nix2container](https://github.com/nlewo/nix2container) - Crie imagens OCI com Nix sem precisar fazer idas e voltas com `docker load`.
- [packer](https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/builder/docker) - Ferramenta da HashiCorp para criar imagens de máquinas, incluindo imagens Docker, integrada a ferramentas de gerenciamento de configuração como Chef, Puppet e Ansible.
- [Production-Ready Python Containers](https://pythonspeed.com/products/pythoncontainer/) - :yen: Um modelo para criar imagens Docker prontas para produção para aplicações Python.
- [RAUDI](https://github.com/cybersecsi/RAUDI) - Uma ferramenta para atualizar automaticamente imagens Docker de softwares de terceiros (e, opcionalmente, enviá-las ao Docker Hub) sempre que houver uma nova versão, atualização ou commit.
- [runlike](https://github.com/lavie/runlike) - Gera o comando `docker run` e suas opções a partir de contêineres em execução.
- [Whaler](https://github.com/P3GLEG/Whaler) - Programa que converte imagens Docker de volta em Dockerfiles.


### Imagens-base

Imagens-base de contêiner mínimas, reforçadas ou criadas para fins específicos.

- [Chainguard Images](https://github.com/chainguard-images/images) - Imagens de contêiner mínimas e assinadas, com atestados SBOM, criadas com Wolfi.
- [distroless](https://github.com/GoogleContainerTools/distroless) - Imagens Docker focadas em linguagens, sem o sistema operacional.
- [melange](https://github.com/chainguard-dev/melange) - Cria pacotes apk a partir de YAML declarativo para uso com apko.
- [pglayers](https://github.com/pglayers/pglayers) - Extensões PostgreSQL pré-compiladas como camadas Docker combináveis. Mais de 50 extensões e imagens combinadas prontas para uso (completas e compatíveis com Azure).
- [Wolfi](https://github.com/wolfi-dev/os) - Distribuição Linux projetada para contêineres; baseada em glibc, assinada e com SBOMs diários.


### Dockerfile

- [Dockerfile Generator](https://github.com/ozankasikci/dockerfile-generator) `dfg` é uma biblioteca Go e também um executável que gera Dockerfiles válidos usando vários canais de entrada.
- [Dockershelf](https://github.com/Dockershelf/dockershelf) - Um repositório que reúne receitas Docker universais, eficientes e enxutas. As imagens são atualizadas, testadas e publicadas diariamente por meio de uma tarefa cron do Travis.
- [Dofigen](https://github.com/lenra-io/dofigen) - Um gerador de Dockerfiles que usa uma descrição simplificada em formato YAML ou JSON.
- [Trsuted Builds](https://dockerfile.github.io/) - Compilações Docker automatizadas e confiáveis. O projeto Dockerfile mantém um repositório central de Dockerfiles para diversos serviços populares de software de código aberto executáveis em contêineres Docker.

### Analisador estático

- [Dockadvisor](https://github.com/deckrun/dockadvisor) - Analisador estático leve de Dockerfiles, com mais de 60 regras, pontuação de qualidade e verificações de segurança.
- [docker-image-size-limit](https://github.com/wemake-services/docker-image-size-limit) - Uma ferramenta para acompanhar o tamanho das suas imagens Docker.
- [Hadolint](https://github.com/hadolint/hadolint) - Um analisador estático de Dockerfiles que verifica boas práticas e erros comuns, além de analisar comandos Bash escritos em instruções `RUN`.

## Ciclo de vida das imagens

### Registro

Serviços para armazenar suas imagens Docker com segurança.

- [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/) - :yen: O Amazon Elastic Container Registry (ECR) é um registro de contêineres Docker totalmente gerenciado que facilita o armazenamento, o gerenciamento e a implantação de imagens Docker para desenvolvedores.
- [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/#overview) - :yen: Gerencie um registro privado do Docker como um recurso de primeira classe do Azure.
- [Cloudsmith](https://cloudsmith.com/product/formats/docker-registry) - :yen: Um SaaS de gerenciamento de pacotes totalmente gerenciado, com suporte de primeira classe a registros Docker públicos e privados (e muitos outros, incluindo charts Helm para o ecossistema Kubernetes). Oferece um plano gratuito generoso e é totalmente gratuito para projetos de código aberto.
- [Container Registry Service](https://container-registry.com/) - :yen: Solução de gerenciamento de contêineres como serviço, baseada em Harbor, para equipes e organizações. O plano gratuito oferece 1 GB de armazenamento para repositórios privados.
- [Cycle.io](https://cycle.io/) - :yen: Hospedagem de contêineres em bare metal.
- [DigitalOcean](https://www.digitalocean.com/products/container-registry) - :yen: Registro de contêineres da DigitalOcean.
- [Docker Hub](https://hub.docker.com/) fornecido pela Docker Inc.
- [Docker Registry v2][distribution] - Conjunto de ferramentas Docker para empacotar, enviar, armazenar e entregar conteúdo
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - Oferece distribuição de arquivos eficiente, estável e segura, além de aceleração de imagens baseada em tecnologia P2P.
- [GCP Artifact Registry](https://docs.cloud.google.com/artifact-registry/docs) - :yen: Armazenamento rápido e privado de imagens Docker no Google Cloud Platform.
- [Gitea Container Registry](https://docs.gitea.com/usage/packages/container) - Registro Docker integrado ao Gitea, ideal para hospedar imagens privadas em pequena escala.
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - Solução do GitHub para armazenar e gerenciar imagens Docker, com integração estreita ao GitHub Actions.
- [GitLab Container Registry](https://docs.gitlab.com/user/packages/container_registry/) - Registro focado no uso de suas imagens no GitLab CI.
- [Granite Registry](https://granite.so/products/docker-registry) - :yen: Armazene imagens Docker privadas junto às cargas de trabalho que as baixam, usando chaves de leitura e gravação com escopo definido.
- [Harbor](https://github.com/goharbor/harbor) Um projeto de registro confiável, nativo da nuvem e de código aberto, que armazena, assina e analisa conteúdo. Oferece replicação, gerenciamento de usuários, controle de acesso e auditoria de atividades.
- [JFrog Artifactory](https://jfrog.com/artifactory/) - :yen: Gerenciador de repositórios de artefatos que também pode ser usado como registro privado do Docker.
- [kontain.me](https://github.com/imjasonh/kontain.me) - Registro de imagens de contêiner sob demanda que compila e fornece imagens quando são baixadas.
- [Kraken](https://github.com/uber/kraken) - Registro Docker P2P altamente escalável da Uber, capaz de distribuir terabytes de dados em segundos.
- [NORA](https://github.com/getnora-io/nora) - Registro leve de artefatos multiprotocolo, compatível com Docker, Maven, npm, Cargo e PyPI, em um único binário de 32 MB. Inclui cache pull-through, interface Web, métricas do Prometheus e autenticação RBAC.
- [nscr](https://github.com/jhstatewide/nscr) - Um registro de contêineres leve e autocontido, fácil de executar e manter.
- [Quay.io](https://quay.io/) - :yen: Hospedagem segura para repositórios Docker privados.
- [Registryo](https://github.com/inmagik/registryo) - Interface e servidor de autenticação por token para registros Docker locais.
- [RepoFlow](https://www.repoflow.io) - Uma plataforma de gerenciamento de pacotes simples e fácil de usar, com suporte a Docker e a outros formatos, como PyPI, Maven, npm e Helm. Inclui busca inteligente, análise integrada de imagens Docker e uma ótima opção gratuita para uso local ou na nuvem.
- [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) - Gerencie binários e artefatos de compilação em toda a sua cadeia de suprimentos de software.

### CLI de registros

Ferramentas de linha de comando sem daemon para inspecionar, copiar e manipular imagens em registros OCI/Docker.

- [crane](https://github.com/google/go-containerregistry/tree/main/cmd/crane) - CLI leve para manipular imagens em registros, do `go-containerregistry`.
- [go-containerregistry](https://github.com/google/go-containerregistry) - Biblioteca Go e ferramentas de CLI (`crane`, `gcrane`, `registry`) para trabalhar com registros de contêineres.
- [oras](https://github.com/oras-project/oras) - Envie e baixe artefatos OCI arbitrários de qualquer registro OCI.
- [regctl](https://github.com/regclient/regclient) - Cliente de registro sem daemon; copie, inspecione, modifique e assine imagens OCI.
- [skopeo](https://github.com/containers/skopeo) - Trabalhe com registros remotos de imagens: obtenha informações, copie imagens e assine conteúdo.

### Análise de imagens & SBOM

Analisadores de vulnerabilidades de imagens, geradores de SBOM e ferramentas para fixar digests. Os itens comerciais estão marcados com `:yen:`.

- [Anchor](https://github.com/SongStitch/anchor/) - Uma ferramenta para garantir compilações reproduzíveis fixando dependências nos Dockerfiles.
- [Anchor Enterprise](https://anchore.com/) - :yen: Analisa imagens em busca de vulnerabilidades CVE e verifica políticas de segurança personalizadas.
- [BomLens](https://github.com/sktelecom/bomlens) - Analisa imagens de contêineres (além de código-fonte, binários e firmware) e gera SBOMs CycloneDX com relatórios de vulnerabilidades, licenças e avisos. Distribuído como uma única imagem Docker com interface Web.
- [Clair](https://github.com/quay/clair) - Clair é um projeto de código aberto para análise estática de vulnerabilidades em contêineres appc e Docker.
- [Docker Scout](https://github.com/docker/scout-cli) - CLI oficial do Docker para gerar SBOMs, analisar vulnerabilidades e avaliar políticas.
- [Grype](https://github.com/anchore/grype) - Um analisador de vulnerabilidades para imagens de contêineres, sistemas de arquivos e SBOMs.
- [oscap-docker](https://github.com/OpenSCAP/openscap) - O OpenSCAP oferece a ferramenta oscap-docker, usada para analisar contêineres e imagens Docker.
- [pindock](https://github.com/deadnews/pindock) - Fixe e atualize digests de imagens Docker em Dockerfiles e arquivos Compose.
- [Syft](https://github.com/anchore/syft) - Ferramenta de CLI e biblioteca para gerar uma lista de materiais de software (SBOM) a partir de imagens de contêineres e sistemas de arquivos.
- [Trivy](https://github.com/aquasecurity/trivy) - Analisador de vulnerabilidades simples, abrangente e de código aberto da Aqua Security para contêineres (adequado para CI).

### Cadeia de suprimentos

Assinatura, atestação e proveniência de imagens de contêineres.

- [cosign](https://github.com/sigstore/cosign) - Assinatura e verificação de contêineres e registro de transparência para artefatos OCI.
- [in-toto](https://github.com/in-toto/in-toto) - Framework para atestações da cadeia de suprimentos; serve de base para SLSA e para a proveniência do cosign.
- [policy-controller](https://github.com/sigstore/policy-controller) - Controlador de admissão do Kubernetes que exige assinaturas cosign nas imagens de contêineres.
- [witness](https://github.com/in-toto/witness) - Gere e verifique atestações in-toto ao longo do pipeline de compilação.

## Execução de contêineres

### Composição

- [Composerize](https://github.com/magicmark/composerize) - Converte comandos docker run em arquivos docker-compose.
- [ctk](https://github.com/ctk-hq/ctk) - Compositor visual para cargas de trabalho baseadas em contêineres.
- [kompose](https://github.com/kubernetes/kompose) - Migre do Docker Compose para o Kubernetes.
- [plash](https://github.com/ihucos/plash) - Um mecanismo para executar e criar contêineres — executado dentro do Docker.
- [podman-compose](https://github.com/containers/podman-compose) - Um script para executar docker-compose.yml usando podman.
- [Smalte](https://github.com/roquie/smalte) – Configura dinamicamente aplicações que exigem configuração estática em contêineres Docker.

### Orquestração

- [CloudSlang](https://github.com/CloudSlang/cloud-slang) - CloudSlang é um mecanismo de fluxo de trabalho para criar automações de processos Docker.
- [docker rollout](https://github.com/Wowu/docker-rollout) - Implantação sem interrupção dos serviços do Docker Compose.
- [Kubernetes](https://github.com/kubernetes/kubernetes) - Sistema de orquestração de código aberto do Google para contêineres Docker.
- [Mesos](https://github.com/apache/mesos) - Agendador de recursos e tarefas para contêineres, máquinas virtuais e hosts físicos.
- [Nebula](https://github.com/nebula-orchestrator) - Uma ferramenta de orquestração Docker projetada para gerenciar clusters distribuídos de grande escala.
- [Nomad](https://github.com/hashicorp/nomad) - Implante aplicações facilmente em qualquer escala. Um agendador distribuído, altamente disponível e ciente de data centers.
- [Rancher](https://github.com/rancher/rancher) - Um projeto de código aberto que oferece uma plataforma completa para operar o Docker em produção.
- [Swarm-cronjob](https://github.com/crazy-max/swarm-cronjob) - Cria tarefas agendadas no Swarm.

### Implantação & plataformas

Plataformas de nuvem autogerenciadas e gerenciadas (PaaS/CaaS, automação de implantação). Os itens comerciais estão marcados com `:yen:`.

- [Amazon ECS](https://aws.amazon.com/ecs/) - :yen: Um serviço de gerenciamento no EC2 compatível com contêineres Docker.
- [Appfleet](https://appfleet.com/) - :yen: Plataforma de borda para implantar e gerenciar serviços em contêineres globalmente; encaminha o tráfego para o local mais próximo para reduzir a latência.
- [Azure AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/) - :yen: Serviço de orquestração de contêineres Kubernetes totalmente gerenciado.
- [blackfish](https://gitlab.com/blackfish/blackfish) - Uma máquina virtual CoreOS para criar clusters Swarm para desenvolvimento e produção.
- [BosnD](https://gitlab.com/n0r1sk/bosnd) - BosnD, o daemon do contramestre — grava arquivos de configuração dinamicamente e recarrega serviços em ambientes de contêineres dinâmicos.
- [caprover](https://github.com/caprover/caprover) - [Anteriormente conhecido como CaptainDuckDuck] Pacote automatizado e escalável de servidor Web (Docker+nginx automatizados) — Heroku turbinado.
- [Cloud 66](https://www.cloud66.com) - :yen: Gerenciamento hospedado de contêineres full-stack como serviço.
- [Cloud Run Compose](https://docs.cloud.google.com/run/docs/deploy-run-compose) - :yen: Implante arquivos `docker-compose.yaml` diretamente no Google Cloud Run como serviço gerenciado.
- [Convox Rack](https://github.com/convox/rack) - Convox Rack é uma PaaS de código aberto construída sobre automação especializada de infraestrutura e boas práticas de DevOps.
- [docker-to-iac](https://github.com/deploystackio/docker-to-iac) - Converte comandos docker run e commit em modelos de Infraestrutura como Código para AWS, Render.com e DigitalOcean.
- [doco-cd](https://github.com/kimdre/doco-cd) - Ferramenta leve de GitOps e implantação contínua para implantar projetos Docker Compose e stacks Swarm usando sondagem periódica e webhooks.
- [Dokku](https://github.com/dokku/dokku) - Mini-Heroku com tecnologia Docker que ajuda a criar aplicações e gerenciar seu ciclo de vida.
- [Exoframe](https://github.com/exoframejs/exoframe) - Uma ferramenta autogerenciada que permite implantações simples com um único comando usando Docker.
- [Giant Swarm](https://www.giantswarm.io/) - :yen: Infraestrutura simples de microsserviços. Implante seus contêineres em segundos.
- [Google Container Engine](https://docs.cloud.google.com/kubernetes-engine/docs) - :yen: Contêineres Docker no Google Cloud, com tecnologia de [Kubernetes][kubernetes].
- [Grafeas](https://github.com/grafeas/grafeas) - Uma API comum para metadados sobre contêineres, desde detalhes de imagens e compilações até vulnerabilidades de segurança.
- [Mesosphere DC/OS Platform](https://d2iq.com/products/dcos) - :yen: Plataforma integrada para dados e contêineres, construída sobre o Apache Mesos.
- [OpenRun](https://github.com/openrundev/openrun) - Cria, implanta, atua como proxy, autentica e pausa automaticamente aplicações Web com Docker ou Kubernetes.
- [OpenShift][openshift] - Uma PaaS de código aberto baseada em [Kubernetes][kubernetes] e otimizada pela [Red Hat](https://www.redhat.com/en) para desenvolvimento e implantação de aplicações em contêineres Docker.
- [Red Hat OpenShift Dedicated](https://www.redhat.com/en/technologies/cloud-computing/openshift/dedicated) - :yen: Serviço Red Hat® OpenShift® totalmente gerenciado na Amazon Web Services e no Google Cloud.
- [swarm-ansible](https://github.com/LombardiDaniel/swarm-ansible?tab=readme-ov-file) - O Swarm-Ansible inicializa um cluster Swarm pronto para produção usando Ansible. Inclui ferramentas para automatizar CI, auxiliar no monitoramento e configurar previamente o Traefik para certificados SSL e autenticação simples. Também inclui um registro privado e muito mais!
- [SwarmManagement](https://github.com/hansehe/SwarmManagement) - Swarm Management é uma aplicação Python instalada com pip. Ela facilita o gerenciamento de um Docker Swarm por meio da configuração de um único arquivo YAML que descreve quais stacks implantar e quais redes, configurações ou segredos criar.
- [Triton](https://www.joyent.com/) - :yen: Infraestrutura elástica nativa de contêineres.
- [Tsuru](https://github.com/tsuru/tsuru) - Tsuru é um software extensível e de código aberto de plataforma como serviço.
- [werf](https://github.com/werf/werf) - Werf é uma ferramenta de CI/CD para criar imagens Docker de forma eficiente e implantá-las no Kubernetes usando GitOps.

### Coleta de lixo

- [docker-custodian](https://github.com/Yelp/docker-custodian) - Mantenha os hosts Docker organizados.
- [Docuum](https://github.com/stepchowfun/docuum) - Remoção de imagens Docker usadas há mais tempo (LRU).

## Rede & proxies

### Rede

Rede de contêineres, redes overlay e pontes de DNS/descoberta de serviços.

- [Calico][calico] - Calico é uma rede virtual puramente de camada 3 que permite a comunicação entre contêineres em vários hosts Docker.
- [docker-dns](https://github.com/bytesharky/docker-dns) - Encaminhador DNS leve para contêineres Docker; resolve nomes de contêineres com sufixos personalizados (por exemplo, `.docker`) no host para simplificar a descoberta de serviços.
- [Flannel](https://github.com/coreos/flannel/) - Flannel é uma rede virtual que atribui uma sub-rede a cada host para uso com runtimes de contêineres.
- [netshoot](https://github.com/nicolaka/netshoot) - O contêiner netshoot inclui um conjunto poderoso de ferramentas de rede para ajudar a diagnosticar problemas de rede do Docker.
- [Pipework](https://github.com/jpetazzo/pipework) - Rede definida por software para contêineres Linux. Pipework funciona com contêineres LXC "simples" e com o incrível Docker.
- [registrator](https://github.com/gliderlabs/registrator) - Ponte de registro de serviços para Docker.

### Proxy reverso

Proxies reversos e ingress com reconhecimento de contêineres, além de front-ends que encerram TLS com descoberta automática.

- [BunkerWeb](https://github.com/bunkerity/bunkerweb) - Firewall de aplicações Web (WAF) de código aberto e de nova geração.
- [caddy-docker-proxy](https://github.com/lucaslorentz/caddy-docker-proxy) - Proxy reverso baseado em Caddy, configurado com rótulos de serviços ou contêineres.
- [caddy-docker-upstreams](https://github.com/invzhi/caddy-docker-upstreams) - Módulo de upstreams Docker para Caddy, configurado com rótulos de contêineres.
- [Docker Dnsmasq Updater](https://github.com/moonbuggy/docker-dnsmasq-updater) - Atualiza um servidor dnsmasq remoto com os nomes de host dos contêineres Docker.
- [docker-flow-proxy](https://github.com/docker-flow/docker-flow-proxy) - Reconfigura o proxy sempre que um novo serviço é implantado ou quando um serviço é escalado.
- [Let's Encrypt Nginx-proxy Companion](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) - Um contêiner auxiliar leve para o nginx-proxy. Permite criar e renovar certificados do Let's Encrypt automaticamente.
- [mesh-router](https://github.com/Yundera/mesh-router) - Provedor de domínios gratuitos (nsl.sh) para contêineres Docker, com roteamento HTTPS automático. Usa VPN WireGuard para encaminhar com segurança solicitações de subdomínios entre redes. Ideal para implantações em NAS autogerenciados e na nuvem.
- [Nginx Proxy Manager](https://github.com/jc21/nginx-proxy-manager) - Uma interface Web elegante para encaminhar serviços Web usando SSL.
- [nginx-proxy][nginxproxy] - Proxy nginx automatizado para contêineres Docker usando docker-gen.
- [OpenResty Manager](https://github.com/Safe3/openresty-manager) - Um gerenciador OpenResty (versão aprimorada do Nginx) poderoso, elegante e muito fácil de usar; alternativa de código aberto ao OpenResty Edge.
- [Swarm Router](https://github.com/flavioaiello/swarm-router) - Um roteador baseado em nomes de serviços, sem configuração, para o modo Docker Swarm, com uma abordagem moderna e mais segura.
- [Træfɪk](https://github.com/containous/traefik) - Proxy reverso e balanceador de carga automatizados para Docker, Mesos, Consul e Etcd.

## Armazenamento & dados

- [Docker Volume Backup](https://github.com/offen/docker-volume-backup) Faz backup de volumes Docker localmente ou em qualquer armazenamento compatível com S3.
- [Label Backup](https://github.com/resulgg/label-backup) - Agente leve de backup com reconhecimento do Docker, que detecta e salva automaticamente bancos de dados em contêineres (PostgreSQL, MySQL, MongoDB, Redis) com base nos rótulos Docker. É compatível com armazenamento local e destinos compatíveis com S3, com agendamento flexível por expressões cron.
- [Netshare](https://github.com/ContainX/docker-volume-netshare) Plugin de volume para Docker NFS, AWS EFS, Ceph e Samba/CIFS.
- [portworx](https://portworx.com) - :yen: Solução descentralizada de armazenamento para volumes persistentes, compartilhados e replicados.
- [quobyte](https://www.quobyte.com/) - :yen: Sistema de arquivos distribuído totalmente tolerante a falhas, com driver de volume Docker.
- [resq](https://github.com/mashb1t/resq) - Backups Docker com tecnologia Restic para volumes, bancos de dados e arquivos .env, com ou sem parar os contêineres. Funciona com armazenamento local, SSH ou qualquer armazenamento compatível com S3.
- [REX-Ray](https://github.com/rexray/rexray) oferece um mecanismo de orquestração de armazenamento independente de fornecedor. Seu principal objetivo é fornecer armazenamento persistente para Docker, Kubernetes e Mesos.

## Observabilidade

Monitore hosts Docker, contêineres e os serviços executados neles. Opções autogerenciadas e SaaS juntas; os itens comerciais estão marcados com `:yen:`.

- [ADRG](https://github.com/jaldertech/adrg) - Controlador dinâmico de recursos do Docker que usa cgroups v2 para gerenciar a carga do sistema.
- [AppDynamics](https://github.com/Appdynamics/docker-monitoring-extension) - :yen: A extensão de monitoramento do Docker coleta métricas da API remota do Docker, usando Unix Socket ou TCP.
- [Autoheal](https://github.com/willfarrell/docker-autoheal) - Monitora e reinicia automaticamente contêineres Docker com problemas.
- [Better Stack](https://betterstack.com/community/guides/scaling-docker/) - :yen: Uma stack de observabilidade compatível com Docker que agrega logs e monitora a disponibilidade de aplicativos em contêineres.
- [cAdvisor](https://github.com/google/cadvisor) - Analisa o uso de recursos e as características de desempenho dos contêineres em execução.
- [Datadog](https://www.datadoghq.com/) - :yen: Serviço de monitoramento full-stack com suporte de primeira classe a Docker, Kubernetes e Mesos.
- [DLIA](https://github.com/zorak1103/dlia) - DLIA é um agente de monitoramento de logs Docker com inteligência artificial que usa modelos de linguagem de grande escala (LLMs) para analisar logs de contêineres de forma inteligente, detectar anomalias e fornecer informações contextuais ao longo do tempo.
- [docker-exporter](https://github.com/dlepaux/docker-exporter) - Exportador Prometheus leve, escrito em Rust, para métricas de contêineres Docker. Mede corretamente o conjunto de trabalho de memória do cgroup v2 em ARM64 (Raspberry Pi 5), executa sem privilégios com um socket somente leitura e usa cerca de 7 MiB de RAM em repouso.
- [Docker-Sentinel](https://github.com/Will-Luck/Docker-Sentinel) - Atualizações automatizadas de contêineres com políticas por contêiner, segurança para reversões e painel Web em tempo real.
- [DockProbe](https://github.com/deep-on/dockprobe) - Painel leve de monitoramento Docker em um único contêiner. Métricas em tempo real, 6 regras de detecção de anomalias, alertas pelo Telegram e 16 análises de segurança automatizadas. Sem configuração, cerca de 50 MB de RAM.
- [DockProc](https://gitlab.com/n0r1sk/dockproc) - Monitoramento de E/S de contêineres no nível de processo.
- [dockprom](https://github.com/stefanprodan/dockprom) - Monitoramento de hosts e contêineres Docker com Prometheus, Grafana, cAdvisor, NodeExporter e AlertManager.
- [Doku](https://github.com/amerkurev/doku) - Doku é uma aplicação Web simples que permite monitorar o uso de disco do Docker.
- [Dozzle](dozzle) - Monitore os logs dos contêineres em tempo real com um navegador ou dispositivo móvel.
- [Drydock](https://github.com/CodesWhat/drydock) - Monitoramento de atualizações de contêineres com painel Web, 23 provedores de registro, 20 gatilhos de notificação e arquitetura de agentes distribuídos.
- [Dynatrace](https://docs.dynatrace.com/docs/observe/infrastructure-observability/container-platform-monitoring) - :yen: Monitore aplicações em contêineres sem instalar agentes nem modificar seus comandos Run.
- [Grafana Docker Dashboard Template](https://grafana.com/grafana/dashboards/179-docker-prometheus-monitoring/) - Um modelo para sua stack Docker, Grafana e Prometheus.
- [InfraCanvas](https://github.com/bytestrix/InfraCanvas) - Mapa visual em tempo real de contêineres, pods, volumes e redes em qualquer servidor Linux. Binário único, com atualizações ao vivo via WebSocket.
- [Maintenant](https://github.com/kolapsis/maintenant) - Monitoramento de infraestrutura com descoberta automática para Docker e Kubernetes. Detecta contêineres por meio de rótulos e oferece monitoramento de endpoints, sinais de atividade, certificados TLS, métricas de recursos, inteligência de atualizações e página de status integrada. Binário único com SPA incorporada.
- [Middleware](https://middleware.io/) - :yen: Monitore hosts Docker, contêineres, logs e o desempenho das aplicações em uma plataforma unificada de observabilidade.
- [Site24x7](https://www.site24x7.com/docker-monitoring.html) - :yen: Monitoramento Docker para DevOps e TI, no modelo SaaS com cobrança por host.
- [Sysdig Monitor](https://www.sysdig.com/products/monitor) - :yen: Software ou serviço SaaS que monitora, envia alertas e diagnostica problemas em contêineres usando chamadas de sistema; inclui recursos específicos para Docker e Kubernetes.
- [Wiremap](https://github.com/codeofmario/wiremap) - Explorador visual autogerenciado da topologia de redes Docker, com transmissão de logs em tempo real, estatísticas ao vivo, terminal integrado e inspeção de contêineres.

## Segurança

Proteção de contêineres, segurança em runtime, políticas, conformidade e perícia forense. Opções autogerenciadas e comerciais juntas; os itens comerciais estão marcados com `:yen:`.

- [Aqua Security](https://www.aquasec.com) - :yen: Protege aplicações em contêineres desde o desenvolvimento até a produção, em qualquer plataforma.
- [buildcage](https://github.com/dash14/buildcage) - Restringe o acesso de saída à rede durante compilações Docker para evitar ataques à cadeia de suprimentos. Funciona como driver remoto substituto do BuildKit para Docker Buildx e oferece GitHub Actions prontas para uso.
- [CetusGuard](https://github.com/hectorm/cetusguard) - CetusGuard é uma ferramenta que protege o socket do daemon Docker filtrando chamadas aos endpoints de sua API.
- [Checkov](https://github.com/bridgecrewio/checkov) - Análise estática de manifestos de infraestrutura como código (Terraform, Kubernetes, CloudFormation, Helm, Dockerfile, Kustomize) para encontrar e corrigir configurações incorretas de segurança.
- [compose-lint](https://github.com/tmatens/compose-lint) - Analisa arquivos Docker Compose em busca de configurações incorretas de segurança — contêineres privilegiados, imagens sem digest fixado, montagens do socket Docker e credenciais em texto simples — com base no OWASP e no CIS Docker Benchmark.
- [container-explorer](https://github.com/google/container-explorer) - Utilitário forense para explorar detalhes de contêineres Docker e containerd a partir de imagens de disco montadas.
- [Deepfence Threat Mapper](https://github.com/deepfence/ThreatMapper) - Poderoso analisador de vulnerabilidades em runtime para Kubernetes, máquinas virtuais e ambientes sem servidor.
- [Den](https://github.com/us/den) - Runtime de sandbox autogerenciado para agentes de IA, com contêineres Docker, reforço de segurança, API REST e suporte a WebSocket.
- [docker-bench-security](https://github.com/docker/docker-bench-security) - Script que verifica dezenas de boas práticas comuns para implantar contêineres Docker em produção.
- [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy) - Filtro granular baseado em HAProxy para o socket da API Docker; amplamente usado para expor um socket restrito a proxies reversos e stacks de homelab.
- [KICS](https://github.com/checkmarx/kics) - Ferramenta de análise de infraestrutura como código que encontra vulnerabilidades de segurança, problemas de conformidade e configurações incorretas de infraestrutura no início do ciclo de desenvolvimento. Pode ser estendida com políticas adicionais.
- [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) - :yen: (Anteriormente Twistlock Security Suite) detecta vulnerabilidades, reforça a segurança de imagens de contêineres e aplica políticas de segurança durante todo o ciclo de vida das aplicações.
- [segspec](https://github.com/dormstern/segspec) - Extrai dependências de rede de Docker Compose, manifestos Kubernetes, charts Helm e outros arquivos de configuração para gerar NetworkPolicies do Kubernetes com rastreamento de evidências.
- [Sysdig Falco](https://github.com/falcosecurity/falco) - Sysdig Falco é um monitor de segurança de contêineres de código aberto. Ele monitora atividades de aplicações, contêineres, hosts e redes, e alerta sobre atividades não autorizadas.
- [Sysdig Secure](https://www.sysdig.com/solutions/cloud-detection-and-response-cdr) - :yen: Sysdig Secure oferece segurança em runtime por meio de monitoramento e defesa comportamentais, além de perícia aprofundada baseada no Sysdig de código aberto para resposta a incidentes.
- [Trend Micro DeepSecurity](https://www.trendmicro.com/en_us/business/products/hybrid-cloud/deep-security.html) - :yen: Trend Micro DeepSecurity oferece proteção em runtime para cargas de trabalho em contêineres e hosts, além de análise de imagens antes da execução para identificar vulnerabilidades, malware e conteúdos como segredos embutidos no código.

## Interfaces de usuário

### Aplicativos desktop

Aplicações nativas para desktop para gerenciar e monitorar hosts e clusters Docker.

- [Docker DB Manager](https://github.com/AbianS/docker-db-manager) - Aplicativo desktop para gerenciar contêineres de bancos de dados Docker com interface visual e operações com um clique.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - Aplicativo nativo oficial. Disponível apenas para Windows e macOS.
- [Gantry (Desktop)](https://github.com/getgantry/gantry) - Aplicativo nativo para macOS (SwiftUI, sem Electron) para gerenciar e monitorar hosts Docker, localmente ou via SSH: painel da frota, logs e estatísticas ao vivo, terminal exec, navegador de arquivos e servidor MCP integrado para agentes de IA.
- [Simple Docker UI](https://github.com/felixgborrego/simple-docker-ui) - Construído com Electron.
- [Stevedore](https://github.com/slonopotamus/stevedore) - Boa alternativa ao Docker Desktop para Windows. Compatível com contêineres Linux e Windows. [slonopotamus](https://github.com/slonopotamus).

### Terminal

Interfaces de terminal (TUI), ferramentas de CLI e integrações de shell para Docker.

- [bosun](https://github.com/psychedelicdevx/bosun) - Interface de terminal para Docker controlada pelo teclado, com agrupamento de projetos Compose, logs ao vivo, estatísticas e acesso ao shell.
- [d4s](https://github.com/jr-k/d4s) - Interface de terminal rápida e controlada pelo teclado para gerenciar contêineres Docker, stacks Compose e serviços Swarm com a ergonomia do K9s.
- [dcinja](https://github.com/Falldog/dcinja) - Mecanismo de modelos poderoso e com o menor tamanho de binário para o ambiente de linha de comando do Docker.
- [dctl](https://github.com/FabienD/docker-stack) - Dctl é uma ferramenta de CLI que permite aos desenvolvedores executar qualquer comando docker compose em qualquer lugar do terminal, e muito mais.
- [decompose](https://github.com/s0rg/decompose) - Ferramenta de engenharia reversa para ambientes Docker.
- [dive](https://github.com/wagoodman/dive) - Uma ferramenta para explorar cada camada de uma imagem Docker.
- [docker pushrm](https://github.com/christian-korneck/docker-pushrm) - Plugin da CLI do Docker que permite enviar o arquivo README.md do diretório atual para o Docker Hub. Também oferece suporte a Quay e Harbor.
- [docker-captain](https://github.com/lucabello/docker-captain) - Uma CLI amigável para gerenciar várias implantações do Docker Compose com estilo — desenvolvida com Typer, Rich, questionary e sh.
- [dockerfile-mode](https://github.com/spotify/dockerfile-mode) - Um modo do Emacs para trabalhar com Dockerfiles.
- [dockerfilegraph](https://github.com/patrickhoefler/dockerfilegraph) - Visualize seus Dockerfiles com múltiplas etapas.
- [dockly](https://github.com/lirantal/dockly) - Uma interface interativa de shell para gerenciar contêineres Docker.
- [DockMate](https://github.com/shubh-io/dockmate) - Gerenciador leve de Docker e Podman baseado em terminal, com interface de texto.
- [DockSTARTer](https://github.com/GhostWriters/DockSTARTer) - DockSTARTer ajuda você a começar a usar aplicações de servidor doméstico executadas no Docker.
- [DockTUI](https://github.com/strmax195-hue/docktui) - Painel de terminal rápido e sem dependências para Docker e Compose.
- [dockup](https://github.com/paulo-amaral/dockup) - Interface de terminal para instalar, reforçar a segurança e manter runtimes de contêineres: Docker Engine + Compose v2, NVIDIA Container Toolkit, Podman e Apple container, com auditoria de segurança inspirada no CIS.
- [dprs](https://github.com/durableprogramming/dprs) - Interface de terminal voltada a desenvolvedores para gerenciar contêineres Docker, com transmissão de logs em tempo real e gerenciamento de contêineres.
- [dry](https://github.com/moncho/dry) - Uma CLI interativa para contêineres Docker.
- [easydocker](https://github.com/joao-zanutto/easydocker) - Interface de terminal fortemente inspirada no k9s, aproveitando os belos gráficos do BubbleTea.
- [goManageDocker](https://github.com/ajayd-san/gomanagedocker) - Ferramenta de interface de terminal para visualizar e gerenciar objetos Docker com extrema rapidez e atalhos de teclado intuitivos; também oferece navegação no estilo VIM desde o início.
- [layerx](https://github.com/deveshctl/layerx) - Inspecione camadas de imagens de contêineres em uma interface de terminal — navegue pelas diferenças do sistema de arquivos, veja o conteúdo dos arquivos em linha, ordene por tamanho, extraia arquivos individuais e bloqueie CI com base em limites de eficiência. Compatível com Docker, Podman e arquivos OCI.
- [lazydocker](https://github.com/jesseduffield/lazydocker) - A maneira mais preguiçosa de gerenciar tudo no Docker. Uma interface de terminal simples para docker e docker-compose, escrita em Go com a biblioteca gocui.
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - Uma interface para ler e filtrar os logs de contêineres Docker e Podman, como o [Dozzle](dozzle), mas no terminal, com suporte a busca aproximada, expressões regulares e colorização da saída.
- [oxker](https://github.com/mrjackwills/oxker) - Uma interface de terminal simples para visualizar e controlar contêineres Docker.
- [proco](https://github.com/shiwaforce/poco) - Proco ajuda a organizar e gerenciar projetos Docker, Docker Compose e Kubernetes de qualquer complexidade usando arquivos YAML de configuração simples, encurtando o caminho entre encontrar um projeto e inicializá-lo no ambiente local.
- [scuba](https://github.com/JonathonReinhart/scuba) - Use contêineres Docker de forma transparente para encapsular ambientes de compilação de software.
- [supdock](https://github.com/segersniels/supdock) - Permite usar o Docker de forma um pouco mais visual, por meio de um prompt interativo.
- [swarmcli](https://github.com/Eldara-Tech/swarmcli) - Gerenciamento de Swarm na velocidade do pensamento — com transmissão de logs em tempo real, acesso imediato ao shell dos contêineres, encaminhamento de portas integrado e exibição de segredos sob demanda, dando a você controle total do Docker Swarm sem interromper seu fluxo de trabalho.
- [tdocker](https://github.com/pivovarit/tdocker) - Uma alternativa ao `docker ps` para operações cotidianas com contêineres.
- [wharf](https://github.com/idesyatov/wharf) - Interface de terminal inspirada no k9s para Docker Compose, com navegação no estilo vim, monitoramento de CPU/memória em tempo real com gráficos em braille, navegador de arquivos dos contêineres, suporte a hosts remotos via SSH e modo de comandos.

### Aplicações Web

- [Arcane](https://github.com/getarcaneapp/arcane) - Uma plataforma de gerenciamento Docker moderna e fácil de usar, projetada para todos.
- [CASA](https://github.com/knrdl/casa) - Delegue a administração de alguns contêineres aos seus colegas.
- [Container Web TTY](https://github.com/wrfly/container-web-tty) - Conecte-se aos seus contêineres por meio de um terminal Web.
- [Docker Commander](https://github.com/koduj-dev/docker-commander) - Interface autogerenciada de gerenciamento e monitoramento Docker, com suporte a vários hosts, gerenciamento Compose, logs agregados, alertas, RBAC, análise de vulnerabilidades e integração com MCP.
- [Docker Registry Browser](https://github.com/klausmeyer/docker-registry-browser) - Interface Web para a API HTTP v2 do Docker Registry.
- [docker-swarm-visualizer](https://github.com/dockersamples/docker-swarm-visualizer) - Visualiza serviços Docker em um Docker Swarm (para executar demonstrações).
- [dockge](https://github.com/louislam/dockge) - Gerenciador autogerenciado, reativo e fácil de usar, organizado em stacks docker compose.yaml.
- [DockScope](https://github.com/ManuelR-T/dockscope) - Visualiza contêineres Docker em um grafo de dependências 3D com métricas ao vivo, logs e terminal no navegador.
- [Komodo](https://github.com/mbecker20/komodo) - Uma ferramenta para compilar e implantar software em muitos servidores.
- [Portainer](https://github.com/portainer/portainer) - Interface leve para gerenciar seus hosts Docker ou clusters Docker Swarm.
- [Swarmpit](https://github.com/swarmpit/swarmpit) - Swarmpit oferece uma interface simples e fácil de usar para seu cluster Docker Swarm. Você pode gerenciar stacks, serviços, segredos, volumes, redes etc.
- [usulnet](https://github.com/fr4nsys/usulnet) - Plataforma completa e moderna de gerenciamento Docker para administração de sistemas e DevOps, com ferramentas de nível empresarial, analisador de CVEs, SSH, RDP pela Web e muito mais.

### Integrações com IDEs

- As IDEs da JetBrains (IntelliJ IDEA, GoLand, WebStorm, CLion etc.) têm um [plugin Docker integrado](https://www.jetbrains.com/help/idea/docker.html#managing-images)
- Eclipse [Docker Tooling plugin](https://www.eclipse.org/community/eclipse_newsletter/2016/july/article2.php)
- [docker.el](https://github.com/Silex/docker.el) Gerencie o Docker pelo Emacs.

## Fluxo de trabalho do desenvolvedor

### Cliente de API

- [contajners](https://github.com/lispyclouds/contajners) - Cliente Clojure idiomático, orientado a dados e compatível com REPL para mecanismos de contêineres OCI.
- [Docker Client for JVM](https://github.com/gesellix/docker-client) - Biblioteca cliente da API remota do Docker para a JVM, escrita em Groovy.
- [Docker Client TypeScript](https://gitlab.com/masaeedu/docker-client) - Cliente da API Docker para JavaScript, gerado automaticamente a partir da definição Swagger da API no repositório moby.
- [docker-controller-bot](https://github.com/dgongut/docker-controller-bot) - Bot do Telegram para controlar contêineres Docker.
- [docker-maven-plugin](https://github.com/fabric8io/docker-maven-plugin) - Plugin Maven para executar e criar imagens Docker.
- [Docker.DotNet](https://github.com/Microsoft/Docker.DotNet) - Cliente HTTP C#/.NET para a API remota do Docker.
- [Docker.Registry.DotNet](https://github.com/ChangemakerStudios/Docker.Registry.DotNet) - Biblioteca cliente .NET (C#) para interagir com a API do Docker Registry (v2).
- [dockerode](https://github.com/apocas/dockerode) - Módulo Node.js da API remota do Docker.
- [go-dockerclient](https://github.com/fsouza/go-dockerclient/) - Cliente HTTP Go para a API remota do Docker.
- [Gradle Docker plugin](https://github.com/gesellix/gradle-docker-plugin) - Plugin da API remota do Docker para Gradle.
- [Portainer stack utils](https://github.com/greenled/portainer-stack-utils) - Script Bash para implantar, atualizar e remover stacks Docker em uma instância do Portainer a partir de um arquivo YAML docker-compose.
- [sbt-docker](https://github.com/marcuslonnberg/sbt-docker) - Crie imagens Docker diretamente do sbt.

### CI/CD

Mecanismos de CI autogerenciados, aceleradores de compilação e serviços hospedados voltados a fluxos de trabalho Docker. Os itens comerciais estão marcados com `:yen:`.

- [Buddy](https://buddy.works) - :yen: O melhor do Git e de ferramentas de compilação e implantação combinados em uma ferramenta poderosa que turbinou nosso desenvolvimento.
- [Captain](https://github.com/harbur/captain) - Converta seu fluxo de trabalho Git em contêineres Docker prontos para entrega contínua.
- [CircleCI](https://circleci.com/) - :yen: Envie ou baixe imagens Docker do seu ambiente de compilação, ou crie e execute contêineres diretamente no CircleCI.
- [CodeFresh](https://octopus.com/codefresh) - :yen: Compilação, teste e compartilhamento de ponta a ponta para aplicações Docker, com testes automatizados.
- [ConcourseCI](https://concourse-ci.org) - :yen: Plataforma SaaS de CI orientada a pipelines para equipes de DevOps.
- [Defang](https://github.com/DefangLabs/defang) - Implante Docker Compose na sua nuvem favorita em minutos.
- [Depot](https://depot.dev) - :yen: Crie imagens Docker rapidamente na nuvem. Computação ultrarrápida, cache inteligente automático e nenhuma configuração.
- [Diun](https://github.com/crazy-max/diun) - Receba notificações quando uma imagem ou repositório for atualizado em um registro Docker.
- [dockcheck](https://github.com/mag37/dockcheck) - Script que verifica atualizações de imagens Docker sem baixá-las e, em seguida, atualiza automaticamente os contêineres selecionados ou todos. Inclui notificações, limpeza e muito mais.
- [Docker plugin for Jenkins](https://github.com/jenkinsci/docker-plugin/) - O objetivo do plugin Docker é permitir usar um host Docker para provisionar dinamicamente um agente, executar uma única compilação e depois removê-lo.
- [Drone](https://github.com/drone/drone) - Servidor de integração contínua construído sobre Docker e configurado com arquivos YAML.
- [Gantry](https://github.com/shizunge/gantry) - Atualiza automaticamente serviços Docker Swarm selecionados.
- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) - O GitLab tem CI integrada para testar, compilar e implantar seu código usando os runners do GitLab.
- [Jaypore CI](https://github.com/theSage21/jaypore_ci) - Sistema simples, muito flexível e poderoso de CI/CD e automação, configurado em Python. Funciona offline e prioriza o uso local.
- [Kraken CI](https://github.com/Kraken-CI/kraken) - Sistema moderno de CI/CD, de código aberto, local e altamente escalável, com foco em testes. Um de seus executores é o Docker. Em desenvolvimento.
- [Screwdriver](https://screwdriver.cd/) - :yen: Plataforma de compilação de código aberto do Yahoo, projetada para entrega contínua.
- [Self Hosted Runner](https://github.com/youssefbrr/self-hosted-runner) - Solução em contêiner Docker para configurar um runner autogerenciado do GitHub Actions, compatível com Linux, macOS e Windows.
- [Semaphore CI](https://semaphore.io/) - :yen: CI em nuvem de alto desempenho que compila, testa e envia contêineres para produção.
- [Skipper](https://github.com/Stratoscale/skipper) - Transforme facilmente seu repositório Git em uma imagem Docker.
- [Tekton CD](https://tekton.dev/) - Recurso de pipeline nativo da nuvem.
- [TravisCI](https://www.travis-ci.com/) - :yen: CI hospedada para projetos do GitHub, com suporte a Docker.

### Ambiente de desenvolvimento

- [coder](https://github.com/coder/coder) - Máquinas de desenvolvimento remotas com tecnologia Terraform ou Docker.
- [dde](https://github.com/whatwedo/dde) - Conjunto de ferramentas de ambiente de desenvolvimento local baseado em Docker.
- [DIP](https://github.com/bibendi/dip) - Utilitário de CLI para provisionar e interagir facilmente com uma aplicação configurada com docker-compose.
- [EnvCLI](https://github.com/EnvCLI/EnvCLI) - Substitua instalações locais de Node, Go, ... por contêineres Docker específicos do projeto.
- [Gebug](https://github.com/moshebe/gebug) - Uma ferramenta que facilita muito a depuração de aplicações Go em contêineres Docker, habilitando recursos de depuração e recarga a quente de forma integrada.
- [HarborPilot](https://github.com/potterwhite/HarborPilot) - Compilador automatizado de imagens Docker multiplataforma para desenvolvimento de Linux embarcado (RK3588, RV1126, RK3568). Oferece herança de configuração em três camadas, alocação de portas baseada em PORT_SLOT e compatibilidade entre versões do Ubuntu (20.04/22.04/24.04).
- [Lando](https://github.com/lando/lando) - Lando é para desenvolvedores que desejam especificar rapidamente e iniciar sem complicações os serviços e as ferramentas necessários para desenvolver seus projetos.
- [Laradock](https://github.com/laradock/laradock) - Ambiente completo de desenvolvimento PHP baseado em Docker, executando Nginx/Apache, PHP, MySQL, Redis e outros como serviços Compose intercambiáveis.
- [uniget](https://github.com/uniget-org/cli) - Uni(versal)get, instalador e atualizador de ferramentas de contêineres e muito mais (anteriormente docker-setup).
- [Zsh-in-Docker](https://github.com/deluan/zsh-in-docker) - Instale Zsh, Oh-My-Zsh e plugins em um contêiner Docker com uma única linha!

### Sem servidor

- [Apache OpenWhisk](https://github.com/apache/openwhisk) - Plataforma de nuvem sem servidor e de código aberto que executa funções em resposta a eventos em qualquer escala.
- [Koyeb](https://www.koyeb.com/) - :yen: Koyeb é uma plataforma sem servidor, amigável para desenvolvedores, para implantar aplicativos globalmente. Execute contêineres Docker, aplicativos Web e APIs com implantação baseada em Git, escalabilidade automática nativa, rede global de borda e malha e descoberta de serviços integradas.
- [OpenFaaS](https://github.com/openfaas/faas) - Framework completo de funções sem servidor para Docker e Kubernetes.

### Testes

- [Container Structure Test](https://github.com/GoogleContainerTools/container-structure-test) - Framework para validar a estrutura de uma imagem verificando as saídas de comandos ou o conteúdo do sistema de arquivos.
- [dgoss](https://github.com/goss-org/goss/tree/master/extras/dgoss) - Ferramenta rápida baseada em YAML para validar contêineres Docker.
- [Kurtosis](https://github.com/kurtosis-tech/kurtosis) - Sistema de compilação componível para ambientes de teste com vários contêineres, que oferece aos desenvolvedores: um SDK poderoso, semelhante a Python, para configurar ambientes; um validador em tempo de compilação para verificar o comportamento e a configuração do ambiente; e um runtime para executar, monitorar e depurar o ambiente.
- [Pumba](https://github.com/alexei-led/pumba) - Ferramenta de testes de caos para Docker. Pode ser implantada em clusters Kubernetes e CoreOS.

### Adaptadores

- [Hokusai](https://github.com/artsy/hokusai) - CLI de Docker + Kubernetes para desenvolvedores de aplicações; usada para colocar uma aplicação em contêiner e gerenciar seu ciclo de vida durante o desenvolvimento, os testes e os ciclos de lançamento. De [artsy](https://github.com/artsy).
- [Preevy](https://github.com/livecycle/preevy) - Ambientes de pré-visualização para projetos Docker e Docker Compose. Teste suas alterações e receba comentários de desenvolvedores e não desenvolvedores (Produto/Design), implantando pull requests no seu provedor de nuvem como parte do pipeline de CI.
- [subuser](https://github.com/subuser-security/subuser) - Facilita a execução segura e portátil de aplicações gráficas de desktop no Docker.
- [udocker](https://github.com/indigo-dc/udocker) - Uma ferramenta para executar contêineres Docker simples em sistemas de processamento em lote ou interativos, sem privilégios de root.
- [Vagrant - Docker provider](https://developer.hashicorp.com/vagrant/docs/providers/docker/basics) - Um bom ponto de partida é [vagrant-docker-example](https://github.com/bubenkoff/vagrant-docker-example).

## Ferramentas dentro do contêiner

Ferramentas e aplicações instaladas dentro de contêineres ou projetadas para serem executadas como [sidecar](https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar)

- [cdebug](https://github.com/iximiuz/cdebug) - Canivete suíço para depurar contêineres em execução por meio de sidecars efêmeros; funciona com Docker, containerd e Kubernetes.
- [ckron](https://github.com/nicomt/ckron) - Agendador de tarefas para Docker no estilo cron.
- [CoreOS][coreos] - Linux para implantações de servidores em grande escala
- [docker-gen](https://github.com/jwilder/docker-gen) - Gera arquivos a partir dos metadados de contêineres Docker.
- [dockerize](https://github.com/powerman/dockerize) - Utilitário para simplificar a execução de aplicações em contêineres Docker.
- [GoSu](https://github.com/tianon/gosu) - Execute esta aplicação específica como este usuário específico e saia do pipeline (ferramenta para scripts entrypoint).
- [is-docker](https://github.com/sindresorhus/is-docker) - Verifica se o processo está sendo executado dentro de um contêiner Docker.
- [microcheck](https://github.com/tarampampam/microcheck) - Utilitários leves de verificação de integridade para contêineres Docker (75 KB em vez de 9,3 MB do httpcheck comparado ao cURL), escritos em C puro — incluem verificações HTTP(S) e de portas, além de execução paralela.
- [Ofelia](https://github.com/mcuadros/ofelia/) - Ofelia é um agendador de tarefas moderno e de baixo consumo para ambientes Docker, criado em Go. Seu objetivo é substituir o cron tradicional. Aceita configurações em rótulos de contêineres e/ou arquivos de configuração.
- [su-exec](https://github.com/ncopa/su-exec) - Esta é uma ferramenta simples que executa um programa com privilégios diferentes. O programa é executado diretamente, sem ser iniciado como processo filho, como acontece com su e sudo, evitando problemas com TTY e sinais. Por que reinventar o gosu? Ela faz praticamente o mesmo que o gosu, mas ocupa apenas 10 KB em vez de 1,8 MB.
- [supercronic](https://github.com/aptible/supercronic) - Executor de tarefas compatível com crontab, projetado especificamente para contêineres.

# Recursos de aprendizado

## Por onde começar

- [Benefits of using Docker](https://semaphore.io/blog/docker-benefits) para desenvolvimento e entrega, com um roteiro prático de adoção.
- [Bootstrapping Microservices](https://www.manning.com/books/bootstrapping-microservices-with-docker-kubernetes-and-terraform) - Um guia prático, baseado em projetos, para criar aplicações com microsserviços. Começa criando uma imagem Docker para um único microsserviço e publicando-a em um registro privado de contêineres; termina implantando uma aplicação completa de microsserviços em um cluster Kubernetes de produção.
- [Docker Curriculum](https://github.com/prakhar1989/docker-curriculum): Tutorial abrangente para começar a usar Docker. Ensina a usar Docker e implantar aplicações em contêineres na AWS com Elastic Beanstalk e Elastic Container Service.
- [Docker Documentation](https://docs.docker.com/): a documentação oficial.
- [Docker for beginners](https://github.com/groda/big_data/blob/master/docker_for_beginners.md): Tutorial para iniciantes que precisam aprender os fundamentos do Docker — de "Hello world!" às interações básicas com contêineres — com explicações simples dos conceitos subjacentes.
- [Docker for novices](https://www.youtube.com/watch?v=xsjSadjKXns) Uma introdução ao Docker para desenvolvedores e testadores que nunca o usaram. (Vídeo de 1h40, gravado na linux.conf.au 2019 — Christchurch, Nova Zelândia)
- [Docker katas](https://github.com/eficode-academy/docker-katas) Uma série de laboratórios que leva você de "Hello Docker" à implantação de uma aplicação Web em contêiner em um servidor.
- [Docker simplified in 55 seconds](https://www.youtube.com/watch?v=vP_4DlOH1G4): Uma introdução animada e de alto nível ao Docker. Pense nela como um resumo visual que facilita a exploração de materiais de aprendizagem mais complexos.
- [Docker Training](https://training.mirantis.com) - :yen:
- [Dockerlings](https://github.com/furkan/dockerlings): Aprenda Docker no terminal, com uma interface de terminal moderna e exercícios curtos.
- [Introduction à Docker](https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/) Seção dedicada ao domínio do Docker em um site francês sobre DevSecOps: dos fundamentos às boas práticas, incluindo otimização e proteção dos seus contêineres...
- [Learn Docker](https://github.com/dwyl/learn-docker): tutorial passo a passo e mais recursos (vídeos, artigos e folhas de consulta rápida)
- [Learn Docker (Visually)](https://pagertree.com/learn/docker/overview) - Visão geral de alto nível, voltada a iniciantes, dos principais componentes do Docker e de como eles se integram. Inclui muitas imagens de alta qualidade, exemplos e recursos.
- [Play With Docker](https://training.play-with-docker.com/): O PWD é uma ótima maneira de começar a usar Docker, para iniciantes e usuários avançados. O Docker é executado diretamente no navegador.
- [Practical Guide about Docker Commands in Spanish](https://github.com/brunocascio/docker-espanol) Este guia em espanhol ensina comandos básicos do Docker com exemplos reais.
- [Setting Python Development Environment with VScode and Docker](https://github.com/RamiKrispin/vscode-python): Tutorial passo a passo para configurar um ambiente de desenvolvimento Python em contêineres com VScode, Docker e a extensão Dev Container.
- [The Docker Handbook](https://docker-handbook.farhan.dev/) Livro de código aberto que ensina os fundamentos, as boas práticas e algumas funcionalidades intermediárias do Docker. O livro está hospedado em [fhsinchy/the-docker-handbook](https://github.com/fhsinchy/the-docker-handbook) e os projetos estão hospedados no repositório [fhsinchy/docker-handbook-projects](https://github.com/fhsinchy/docker-handbook-projects).

**Folhas de consulta rápida**

- [eon01](https://github.com/eon01/DockerCheatSheet)
- [dimonomid](https://github.com/dimonomid/docker-quick-ref) (PDF)
- [JensPiegsa](https://github.com/JensPiegsa/docker-cheat-sheet)
- [wsargent](https://github.com/wsargent/docker-cheat-sheet) (Mais popular)

## Por onde começar (Windows)

- [Docker on Windows behind a firewall](https://toedter.com/2015/05/11/docker-on-windows-behind-a-firewall/)
- [Docker Reference Architecture: Modernizing Traditional .NET Framework Applications](https://docs.mirantis.com/containers/v3.0/dockeree-ref-arch/app-dev/modernize-dotnet-apps.html) - Você aprenderá a identificar os tipos de aplicações .NET Framework adequados à conteinerização e conhecerá a abordagem "lift-and-shift".
- [Docker with Microsoft SQL 2016 + ASP.NET](https://blog.alexellis.io/docker-does-sql2016-aspnet/) Demonstração da execução de cargas de trabalho ASP.NET e SQL Server no Docker
- [Exploring ASP.NET Core with Docker in both Linux and Windows Containers](https://www.hanselman.com/blog/exploring-aspnet-core-with-docker-in-both-linux-and-windows-containers) Executa aplicações ASP.NET Core em contêineres Linux e Windows, usando [Docker for Windows][docker-for-windows]
- [Running a Legacy ASP.NET App in a Windows Container](https://blog.sixeyed.com/dockerizing-nerd-dinner-part-1-running-a-legacy-asp-net-app-in-a-windows-container/) Etapas para conteinerizar uma aplicação ASP.NET legada e executá-la como contêiner Windows
- [Windows Containers and Docker: The 101](https://www.youtube.com/watch?v=N7SG2wEyQtM) - Visão geral de 20 minutos que usa Docker para executar aplicações PowerShell, ASP.NET Core e ASP.NET.
- [Windows Containers Quick Start](https://learn.microsoft.com/en-us/virtualization/windowscontainers/about/) Visão geral dos contêineres Windows, com detalhes dos guias de início rápido para Windows 10 e Windows Server 2016

---

## Livros & tutoriais

- [Cloud Native Landscape](https://github.com/cncf/landscape)
- [Docker Blog](https://www.docker.com/blog/) - Atualizações regulares sobre Docker, a comunidade e as ferramentas.
- [Docker Certification](https://intellipaat.com/docker-training-course/?US) - :yen: Ajuda você a aprender conteinerização com Docker, execução de contêineres, criação de imagens, Dockerfile, orquestração Docker, boas práticas de segurança e muito mais, por meio de projetos práticos e estudos de caso, além de preparar para a certificação Docker Certified Associate.
- [Docker dev bookmarks](https://www.codever.dev/search?q=docker) - Use a tag [docker](https://www.codever.dev/bookmarks/t/docker).
- [Docker in Action, Second Edition](https://www.manning.com/books/docker-in-action-second-edition)
- [Docker in Practice, Second Edition](https://www.manning.com/books/docker-in-practice-second-edition)
- [Docker packaging guide for Python](https://pythonspeed.com/docker/) - Série de artigos detalhados sobre as particularidades do empacotamento de Python com Docker.
- [Learn Docker in a Month of Lunches](https://www.manning.com/books/learn-docker-in-a-month-of-lunches)
- [Learn Docker](https://coursesity.com/blog/best-docker-tutorials/) - Aprenda Docker: lista selecionada dos melhores tutoriais e cursos online de Docker.
- [Programming Community Curated Resources for learning Docker](https://hackr.io/tutorials/learn-docker)

## Listas incríveis

- [Awesome Compose](https://github.com/docker/awesome-compose) - Exemplos de Docker Compose.
- [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes)
- [Awesome Linux Container](https://github.com/Friz-zy/awesome-linux-containers) mais abrangente sobre contêineres do que este repositório.
- [Awesome Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) lista de serviços de rede e aplicações Web de Software Livre que podem ser hospedados localmente, seja da forma tradicional (configurando um servidor Web local e executando as aplicações nele), seja em um contêiner Docker.
- [Awesome Sysadmin](https://github.com/n1trux/awesome-sysadmin)
- [ToolsOfTheTrade](https://github.com/cjbarber/ToolsOfTheTrade) uma lista de aplicações SaaS e locais

## Demonstrações e exemplos

- [An Annotated Docker Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-docker-config-for-frontend-web-development) Um ambiente de desenvolvimento local com Docker permite empacotar como configuração as necessidades de DevOps do projeto, tornando a integração de novos colaboradores simples.
- [Local Docker DB](https://github.com/alexmacarthur/local-docker-db) uma lista de exemplos de docker-compose para diversos bancos de dados
- [Webstack-micro](https://github.com/ferbs/webstack-micro) Aplicação Web de demonstração que mostra como usar Docker Compose para configurar um gateway de API, autenticação centralizada, workers em segundo plano e WebSockets como serviços em contêineres.

## Boas dicas

- [Docker Caveats](https://docker-saigon.github.io/post/Docker-Caveats/) O que você deve saber sobre executar Docker em produção (escrito em 11 de abril de 2016).
- [Docker Containers on the Desktop](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
- [Docker vs. VMs? Combining Both for Cloud Portability Nirvana](https://www.flexera.com/blog/finops/)
- [Don't Repeat Yourself with Anchors, Aliases and Extensions in Docker Compose Files](https://medium.com/@kinghuang/docker-compose-anchors-aliases-extensions-a1e4105d70bd)
- [GUI Apps with Docker](https://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/)

## Raspberry Pi & ARM

- [Docker Pirates ARMed with explosive stuff](https://blog.hypriot.com/) Amplo recurso sobre clustering, Swarm e Docker, além de uma imagem pré-instalada para cartão SD no Raspberry Pi.
- [Get Docker up and running on the RaspberryPi in three steps](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)
- [git push docker containers to linux devices](https://www.balena.io) DevOps moderno para IoT, aproveitando Git e Docker.
- [Installing, running, using Docker on armhf (ARMv7) devices](https://github.com/umiddelb/armhf/wiki/Installing,-running,-using-docker-on-armhf-%28ARMv7%29-devices)

## Artigos sobre segurança

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
- [Docker Course](https://www.youtube.com/watch?v=UZpyvK6UGFo) (em espanhol)
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
- [Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615) Curso gratuito da Udacity
- [State of containers: a debate with CoreOS, VMware and Google](https://www.youtube.com/watch?v=IiITP3yIRd8) (27:38)

## Comunidades e encontros

### Brasileira

- [Docker BR on Telegram](https://telegram.me/dockerbr)

### Inglesa

- [Docker Community](https://www.docker.com/community/)
- [Docker Events](https://www.docker.com/events/)
- [Docker Online Meetup](https://www.meetup.com/en-AU/Docker-Online-Meetup/)
- [Docker Reddit Community](https://www.reddit.com/r/docker/)

### Russa

- [Docker Russian-speaking Community](https://t.me/docker_ru)

### Espanhola

- [Docker Tips](https://dockertips.com/)

## Estrelas ao longo do tempo

[![Estrelas ao longo do tempo](https://starchart.cc/veggiemonk/awesome-docker.svg?variant=adaptive)](https://starchart.cc/veggiemonk/awesome-docker)

[calico]: https://github.com/projectcalico/calico
[coreos]: https://github.com/coreos
[distribution]: https://github.com/docker/distribution
[docker-for-windows]: https://docs.docker.com/desktop/setup/install/windows-install/
[editreadme]: https://github.com/veggiemonk/awesome-docker/edit/master/README.md
[kubernetes]: https://kubernetes.io
[nginxproxy]: https://github.com/nginx-proxy/nginx-proxy
[openshift]: https://okd.io/
[sindresorhus]: https://github.com/sindresorhus/awesome

