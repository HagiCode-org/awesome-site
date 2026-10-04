# Awesome Docker [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)][sindresorhus] [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/veggiemonk/awesome-docker/)[![Last Commit](https://img.shields.io/github/last-commit/veggiemonk/awesome-docker)](https://github.com/veggiemonk/awesome-docker/commits/main)<!-- omit in toc -->

> 精选的 Docker 项目列表。

如果你想贡献内容，请先阅读 [CONTRIBUTING.md](https://github.com/veggiemonk/awesome-docker/blob/master/.github/CONTRIBUTING.md)。
如果此列表还不完整，欢迎贡献补充。
如果你发现此处的链接已不再合适，可以提交 [pull request][editreadme] 改进此文件。谢谢！

**项目必须是为 Docker 而开发，而不只是使用 Docker。**

> 一条经验法则：如果移除 Docker 集成不会损害项目的价值主张，那么它就不属于此列表。

此列表的创建者和维护者不会因接受任何贡献者的修改而获得任何形式的报酬。
本页面并非任何意义上的 Docker 官方产品。
这是一个项目链接列表，由志愿者维护。
欢迎所有人参与贡献。
此仓库旨在索引开源项目，而非为营利目的做广告。

> Docker 是一个开放平台，供开发者和系统管理员构建、交付和运行分布式应用程序。它由 Docker Engine（可移植、轻量级的运行时和打包工具）以及 Docker Hub（一项用于共享应用和自动化工作流的云服务）组成。Docker 使应用能够由各个组件快速组装而成，并消除开发、质量保证和生产环境之间的摩擦。因此，IT 团队可以更快地交付，并在笔记本电脑、数据中心虚拟机和任何云平台上运行完全相同、无需修改的应用。

_来源：_ [What is Docker](https://www.docker.com/why-docker/)

# 目录 <!-- omit in toc -->

<!-- TOC -->

- [项目](#projects)
    - [引擎与运行时](#engine--runtime)
    - [构建镜像](#building-images)
        - [构建器](#builder)
        - [基础镜像](#base-images)
        - [Dockerfile](#dockerfile)
        - [Lint 工具](#linter)
    - [镜像生命周期](#image-lifecycle)
        - [镜像仓库](#registry)
        - [镜像仓库 CLI](#registry-cli)
        - [镜像扫描与 SBOM](#image-scanning--sbom)
        - [供应链](#supply-chain)
    - [运行容器](#running-containers)
        - [组合](#composition)
        - [编排](#orchestration)
        - [部署与平台](#deployment--platforms)
        - [垃圾回收](#garbage-collection)
    - [网络与代理](#networking--proxies)
        - [网络](#networking)
        - [反向代理](#reverse-proxy)
    - [存储与数据](#storage--data)
    - [可观测性](#observability)
    - [安全](#security)
    - [用户界面](#user-interfaces)
        - [桌面端](#desktop)
        - [终端](#terminal)
        - [Web](#web)
        - [IDE 集成](#ide-integrations)
    - [开发者工作流](#developer-workflow)
        - [API 客户端](#api-client)
        - [CI/CD](#cicd)
        - [开发环境](#development-environment)
        - [无服务器](#serverless)
        - [测试](#testing)
        - [封装工具](#wrappers)
    - [容器内工具](#in-container-tooling)
- [学习资源](#learning-resources)
    - [入门指南](#where-to-start)
    - [入门指南（Windows）](#where-to-start-windows)
    - [书籍与教程](#books--tutorials)
    - [Awesome 列表](#awesome-lists)
    - [演示与示例](#demos-and-examples)
    - [实用技巧](#good-tips)
    - [Raspberry Pi 与 ARM](#raspberry-pi--arm)
    - [安全文章](#security-articles)
    - [视频](#videos)
    - [社区与聚会](#communities-and-meetups)
        - [巴西语](#brazilian)
        - [英语](#english)
        - [俄语](#russian)
        - [西班牙语](#spanish)
- [随时间变化的 Star 数](#stargazers-over-time)

<!-- /TOC -->

# 项目

## 官方项目

- [Moby](https://github.com/moby/moby)
- [Docker Hub](https://hub.docker.com)
- [Docker Compose](https://github.com/docker/compose/) - 使用 Docker 定义并运行多容器应用程序。
- [Docker Registry][distribution] - 用于打包、交付、存储和分发内容的 Docker 工具集

## 引擎与运行时

- [colima](https://github.com/abiosoft/colima) - 在 macOS（和 Linux）上以最少配置运行容器运行时。
- [containerd](https://github.com/containerd/containerd) - 开放且可靠的容器运行时。
- [cri-o](https://github.com/cri-o/cri-o) - 基于 Open Container Initiative 的 Kubernetes 容器运行时接口实现。
- [gVisor](https://github.com/google/gvisor) - 面向容器的应用内核。
- [lxc](https://github.com/lxc/lxc) - LXC - Linux Containers。
- [Mocker](https://github.com/us/mocker) - 兼容 Docker 的 macOS 容器 CLI，基于 Apple 的 Containerization 框架构建。
- [podman](https://github.com/containers/libpod) - Libpod 是用于创建容器 Pod 的库，也是 Podman 的所在地。
- [runc](https://github.com/opencontainers/runc) - 根据 OCI 规范创建并运行容器的 CLI 工具。
- [runtime-tools](https://github.com/opencontainers/runtime-tools) - Oci-runtime-tool 是一组用于处理 OCI 运行时规范的工具。
- [youki](https://github.com/youki-dev/youki) - 使用 Rust 编写、实现 OCI 运行时规范的容器运行时。

## 构建镜像

### 构建器

旨在帮助或简化**新**镜像构建的应用程序

- [ansible-bender](https://github.com/ansible-community/ansible-bender) - 使用 `ansible` 和 `buildah` 的工具。
- [apko](https://github.com/chainguard-dev/apko) - 基于 apk 软件包的声明式 OCI 镜像构建器；专为可重现构建而设计。
- [buildah](https://github.com/containers/buildah) - 用于构建 OCI 镜像的工具。
- [BuildKit](https://github.com/moby/buildkit) - 支持并发、缓存高效且不依赖 Dockerfile 的构建工具包。
- [buildx](https://github.com/docker/buildx) - 官方 Docker CLI 插件，基于 BuildKit 支持多平台构建。
- [cekit](https://github.com/cekit/cekit) - openshift 使用的工具，可通过不同的构建引擎构建基础镜像。
- [dlayer](https://github.com/orisano/dlayer) - Docker 层分析器。
- [docker-companion](https://github.com/mudler/docker-companion) - 使用 Golang 编写的命令行工具，用于压平和解包 docker 镜像。
- [docker-repack](https://github.com/orf/docker-repack) - 将 Docker 镜像重新打包为更小、更高效的版本，大幅缩短拉取时间。
- [DockerSlim](https://github.com/docker-slim/docker-slim) 可精简臃肿的 Docker 镜像，生成尽可能小的镜像。
- [earthly](https://github.com/earthly/earthly) - 容器化构建自动化工具，采用 Dockerfile 与 Makefile 相结合的语法。
- [essex](https://github.com/utensils/essex) - Docker 项目的样板：Essex 是一个使用 bash 编写的 CLI 工具，可快速建立整洁、一致的 Docker 项目，并通过 Makefile 驱动工作流。
- [HPC Container Maker](https://github.com/NVIDIA/hpc-container-maker) - 根据高级 Python 配方生成 Dockerfile，其中包括高性能计算组件的构建模块。
- [img](https://github.com/genuinetools/img) - 独立、无守护进程、无需特权且兼容 Dockerfile 和 OCI 的容器镜像构建器。
- [ko](https://github.com/ko-build/ko) - 无需 Dockerfile 即可将 Go 应用构建并部署为容器镜像。
- [nix2container](https://github.com/nlewo/nix2container) - 使用 Nix 构建 OCI 镜像，无需往返执行 `docker load`。
- [packer](https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/builder/docker) - Hashicorp 工具，可构建机器镜像，包括与 chef、puppet、ansible 等配置管理工具集成的 docker 镜像。
- [Production-Ready Python Containers](https://pythonspeed.com/products/pythoncontainer/) - :yen: 用于创建适用于生产环境的 Python 应用 Docker 镜像的模板。
- [RAUDI](https://github.com/cybersecsi/RAUDI) - 当第三方软件发布新版本、更新或提交时，自动更新 Docker 镜像（并可选择推送到 Docker Hub）的工具。
- [runlike](https://github.com/lavie/runlike) - 根据正在运行的容器生成 `docker run` 命令及其选项。
- [Whaler](https://github.com/P3GLEG/Whaler) - 将 Docker 镜像反向还原为 Dockerfile 的程序。


### 基础镜像

精简、强化或专门定制的容器基础镜像。

- [Chainguard Images](https://github.com/chainguard-images/images) - 基于 Wolfi 构建的精简、签名且附有 SBOM 证明的容器镜像。
- [distroless](https://github.com/GoogleContainerTools/distroless) - 面向特定语言的 docker 镜像，不包含操作系统。
- [melange](https://github.com/chainguard-dev/melange) - 根据声明式 YAML 构建 apk 软件包，供 apko 使用。
- [pglayers](https://github.com/pglayers/pglayers) - 预构建的 PostgreSQL 扩展，作为可组合的 Docker 层提供。包含 50 多个扩展，以及可直接使用的组合镜像（完整版本、兼容 Azure）。
- [Wolfi](https://github.com/wolfi-dev/os) - 专为容器设计的 Undistro Linux；基于 glibc、经过签名，并每日生成 SBOM。


### Dockerfile

- [Dockerfile Generator](https://github.com/ozankasikci/dockerfile-generator) `dfg` 既是 Go 库，也是一个可通过多种输入方式生成有效 Dockerfile 的可执行程序。
- [Dockershelf](https://github.com/Dockershelf/dockershelf) - 收集通用、高效、精简的 docker 配方的仓库。镜像通过 Travis cron 作业每天更新、测试并发布。
- [Dofigen](https://github.com/lenra-io/dofigen) - 使用简化的 YAML 或 JSON 描述生成 Dockerfile。
- [Trsuted Builds](https://dockerfile.github.io/) - 可信自动化 Docker 构建。Dockerfile Project 维护着一个中央仓库，其中包含各种可在 Docker 容器中运行的热门开源软件服务的 Dockerfile。

### Lint 工具

- [Dockadvisor](https://github.com/deckrun/dockadvisor) - 轻量级 Dockerfile lint 工具，提供 60 多条规则、质量评分和安全检查。
- [docker-image-size-limit](https://github.com/wemake-services/docker-image-size-limit) - 用于监控 docker 镜像大小的工具。
- [Hadolint](https://github.com/hadolint/hadolint) - Dockerfile lint 工具，可检查最佳实践和常见错误，也能检查 `RUN` 指令中编写的 bash 代码；。

## 镜像生命周期

### 镜像仓库

用于安全存储 Docker 镜像的服务。

- [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/) - :yen: Amazon Elastic Container Registry (ECR) 是一项全托管的 Docker 容器镜像仓库服务，让开发者能够轻松存储、管理和部署 Docker 容器镜像。
- [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/#overview) - :yen: 将 Docker 私有镜像仓库作为 Azure 的一等资源进行管理。
- [Cloudsmith](https://cloudsmith.com/product/formats/docker-registry) - :yen: 全托管的软件包管理 SaaS，原生支持公共和私有 Docker 镜像仓库（以及许多其他格式，包括 Kubernetes 生态系统的 Helm charts）。免费层额度充足，开源项目也可完全免费使用。
- [Container Registry Service](https://container-registry.com/) - :yen: 基于 Harbor、面向团队和组织提供的容器管理即服务解决方案。免费层为私有仓库提供 1 GB 存储空间。
- [Cycle.io](https://cycle.io/) - :yen: 裸机容器托管。
- [DigitalOcean](https://www.digitalocean.com/products/container-registry) - :yen: DigitalOcean Container Registry。
- [Docker Hub](https://hub.docker.com/) 由 Docker Inc. 提供。
- [Docker Registry v2][distribution] - 用于打包、交付、存储和分发内容的 Docker 工具集
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - 基于 P2P 技术实现高效、稳定、安全的文件分发和镜像加速。
- [GCP Artifact Registry](https://docs.cloud.google.com/artifact-registry/docs) - :yen: 在 Google Cloud Platform 上快速、私密地存储 Docker 镜像。
- [Gitea Container Registry](https://docs.gitea.com/usage/packages/container) - 集成在 Gitea 中的 Docker 镜像仓库，适合托管少量私有镜像。
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - GitHub 的 Docker 镜像存储与管理解决方案，与 GitHub Actions 紧密集成。
- [GitLab Container Registry](https://docs.gitlab.com/user/packages/container_registry/) - 专注于在 GitLab CI 中使用镜像的镜像仓库。
- [Granite Registry](https://granite.so/products/docker-registry) - :yen: 将私有 Docker 镜像与拉取它们的工作负载一同存储，并提供具备作用域的只读和读写密钥。
- [Harbor](https://github.com/goharbor/harbor) 一个开源的可信云原生镜像仓库项目，用于存储、签名和扫描内容。支持复制、用户管理、访问控制和活动审计。
- [JFrog Artifactory](https://jfrog.com/artifactory/) - :yen: 制品仓库管理器，也可用作私有 Docker 镜像仓库。
- [kontain.me](https://github.com/imjasonh/kontain.me) - 按需构建并提供镜像的容器镜像仓库。
- [Kraken](https://github.com/uber/kraken) - Uber 的高可扩展 P2P docker 镜像仓库，可在数秒内分发 TB 级数据。
- [NORA](https://github.com/getnora-io/nora) - 轻量级多协议制品镜像仓库，支持 Docker、Maven、npm、Cargo 和 PyPI，全部集成在一个 32MB 的二进制文件中。支持拉取缓存、Web UI、Prometheus 指标和 RBAC 身份验证。
- [nscr](https://github.com/jhstatewide/nscr) - 轻量、自包含且易于运行和维护的容器镜像仓库。
- [Quay.io](https://quay.io/) - :yen: 用于托管私有 Docker 仓库的安全服务。
- [Registryo](https://github.com/inmagik/registryo) - 面向本地部署 Docker 镜像仓库的 UI 和基于令牌的身份验证服务器。
- [RepoFlow](https://www.repoflow.io) - 简单易用的软件包管理平台，除 Docker 外还支持 PyPI、Maven、npm 和 Helm 等格式。提供智能搜索、内置 Docker 镜像扫描，并为自托管和云端使用都提供优质的免费选项。
- [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) - 管理整个软件供应链中的二进制文件和构建制品。

### 镜像仓库 CLI

用于检查、复制和操作 OCI/Docker 镜像仓库中镜像的无守护进程命令行工具。

- [crane](https://github.com/google/go-containerregistry/tree/main/cmd/crane) - 用于操作镜像仓库镜像的轻量级 CLI，来自 `go-containerregistry`。
- [go-containerregistry](https://github.com/google/go-containerregistry) - 用于处理容器镜像仓库的 Go 库和 CLI 工具（`crane`、`gcrane`、`registry`）。
- [oras](https://github.com/oras-project/oras) - 向任何 OCI 镜像仓库推送和拉取任意 OCI 制品。
- [regctl](https://github.com/regclient/regclient) - 无守护进程镜像仓库客户端；可复制、检查、修改和签名 OCI 镜像。
- [skopeo](https://github.com/containers/skopeo) - 处理远程镜像仓库：获取信息、复制镜像、签名内容。

### 镜像扫描与 SBOM

镜像漏洞扫描器、SBOM 生成器和摘要固定工具。商业条目以 `:yen:` 标记。

- [Anchor](https://github.com/SongStitch/anchor/) - 通过在 Dockerfile 中固定依赖项，确保构建可重现的工具。
- [Anchor Enterprise](https://anchore.com/) - :yen: 分析镜像中的 CVE 漏洞，并根据自定义安全策略进行检查。
- [BomLens](https://github.com/sktelecom/bomlens) - 将容器镜像（以及源代码、二进制文件和固件）扫描为 CycloneDX SBOM，并生成漏洞、许可证和声明报告。以单个 Docker 镜像形式提供，内含 Web UI。
- [Clair](https://github.com/quay/clair) - 用于静态分析 appc 和 docker 容器漏洞的开源项目。
- [Docker Scout](https://github.com/docker/scout-cli) - 官方 Docker CLI，用于生成 SBOM、分析漏洞和评估策略。
- [Grype](https://github.com/anchore/grype) - 容器镜像、文件系统和 SBOM 的漏洞扫描器。
- [oscap-docker](https://github.com/OpenSCAP/openscap) - OpenSCAP 提供 oscap-docker 工具，可用于扫描 Docker 容器和镜像。
- [pindock](https://github.com/deadnews/pindock) - 在 Dockerfile 和 compose 文件中固定并更新 Docker 镜像摘要。
- [Syft](https://github.com/anchore/syft) - CLI 工具和库，可从容器镜像和文件系统生成软件物料清单（SBOM）。
- [Trivy](https://github.com/aquasecurity/trivy) - Aqua Security 开发的开源、简单全面的容器漏洞扫描器（适用于 CI）。

### 供应链

容器镜像的签名、证明和来源信息。

- [cosign](https://github.com/sigstore/cosign) - OCI 制品的容器签名、验证和透明日志。
- [in-toto](https://github.com/in-toto/in-toto) - 供应链证明框架；是 SLSA 和 cosign 来源证明的基础。
- [policy-controller](https://github.com/sigstore/policy-controller) - Kubernetes 准入控制器，用于强制验证容器镜像的 cosign 签名。
- [witness](https://github.com/in-toto/witness) - 在整个构建流水线中生成并验证 in-toto 证明。

## 运行容器

### 组合

- [Composerize](https://github.com/magicmark/composerize) - 将 docker run 命令转换为 docker-compose 文件。
- [ctk](https://github.com/ctk-hq/ctk) - 面向容器工作负载的可视化组合工具。
- [kompose](https://github.com/kubernetes/kompose) - 将 Docker Compose 转换为 Kubernetes。
- [plash](https://github.com/ihucos/plash) - 容器运行和构建引擎，可在 docker 内部运行。
- [podman-compose](https://github.com/containers/podman-compose) - 使用 podman 运行 docker-compose.yml 的脚本。
- [Smalte](https://github.com/roquie/smalte) – 为需要静态配置的应用程序动态配置 docker 容器。

### 编排

- [CloudSlang](https://github.com/CloudSlang/cloud-slang) - CloudSlang 是用于创建 Docker 流程自动化的工作流引擎。
- [docker rollout](https://github.com/Wowu/docker-rollout) - 为 Docker Compose 服务提供零停机部署。
- [Kubernetes](https://github.com/kubernetes/kubernetes) - Google 开发的 Docker 容器开源编排系统。
- [Mesos](https://github.com/apache/mesos) - 面向容器、虚拟机和物理主机的资源/作业调度器。
- [Nebula](https://github.com/nebula-orchestrator) - 专为管理大规模分布式集群而设计的 Docker 编排工具。
- [Nomad](https://github.com/hashicorp/nomad) - 轻松部署任意规模的应用。分布式、高可用且具备数据中心感知能力的调度器。
- [Rancher](https://github.com/rancher/rancher) - 提供完整平台、用于在生产环境中运行 Docker 的开源项目。
- [Swarm-cronjob](https://github.com/crazy-max/swarm-cronjob) - 在 Swarm 上按计划创建作业。

### 部署与平台

自托管和托管云平台（PaaS/CaaS、部署自动化）。商业条目以 `:yen:` 标记。

- [Amazon ECS](https://aws.amazon.com/ecs/) - :yen: EC2 上支持 Docker 容器的管理服务。
- [Appfleet](https://appfleet.com/) - :yen: 用于在全球部署和管理容器化服务的边缘平台；可将流量路由到最近的位置以降低延迟。
- [Azure AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/) - :yen: 完全托管的 Kubernetes 容器编排服务。
- [blackfish](https://gitlab.com/blackfish/blackfish) - 用于构建开发和生产环境 Swarm 集群的 CoreOS 虚拟机。
- [BosnD](https://gitlab.com/n0r1sk/bosnd) - BosnD，即 boatswain 守护进程：用于动态变化的容器环境的动态配置文件编写器和服务重新加载器。
- [caprover](https://github.com/caprover/caprover) - [此前名为 CaptainDuckDuck] 自动化的可扩展 Web 服务器套件（自动化 Docker+nginx）——增强版 Heroku。
- [Cloud 66](https://www.cloud66.com) - :yen: 全栈托管容器管理即服务。
- [Cloud Run Compose](https://docs.cloud.google.com/run/docs/deploy-run-compose) - :yen: 将 `docker-compose.yaml` 文件直接部署到 Google Cloud Run，作为托管服务运行。
- [Convox Rack](https://github.com/convox/rack) - Convox Rack 是基于专业基础设施自动化和 DevOps 最佳实践构建的开源 PaaS。
- [docker-to-iac](https://github.com/deploystackio/docker-to-iac) - 将 docker run 和 commit 转换为适用于 AWS、Render.com 和 DigitalOcean 的基础设施即代码模板。
- [doco-cd](https://github.com/kimdre/doco-cd) - 轻量级 GitOps 和持续部署工具，通过轮询和 Webhook 部署 Docker Compose 项目和 Swarm 堆栈。
- [Dokku](https://github.com/dokku/dokku) - 由 Docker 驱动的迷你 Heroku，帮助你构建应用并管理其生命周期。
- [Exoframe](https://github.com/exoframejs/exoframe) - 自托管工具，可通过一条命令轻松使用 Docker 部署。
- [Giant Swarm](https://www.giantswarm.io/) - :yen: 简单的微服务基础设施。数秒内即可部署容器。
- [Google Container Engine](https://docs.cloud.google.com/kubernetes-engine/docs) - :yen: 由 [Kubernetes][kubernetes] 提供支持的 Google Cloud Computing Docker 容器服务。
- [Grafeas](https://github.com/grafeas/grafeas) - 用于容器元数据的通用 API，涵盖镜像和构建详情以及安全漏洞。
- [Mesosphere DC/OS Platform](https://d2iq.com/products/dcos) - :yen: 基于 Apache Mesos 构建的数据与容器集成平台。
- [OpenRun](https://github.com/openrundev/openrun) - 使用 Docker 或 Kubernetes 构建、部署、代理、验证身份并自动暂停 Web 应用。
- [OpenShift][openshift] - 基于 [Kubernetes][kubernetes] 构建、针对 Docker 化应用开发和部署优化的开源 PaaS，由 [Red Hat](https://www.redhat.com/en) 提供
- [Red Hat OpenShift Dedicated](https://www.redhat.com/en/technologies/cloud-computing/openshift/dedicated) - :yen: 在 Amazon Web Services 和 Google Cloud 上提供的全托管 Red Hat® OpenShift® 服务。
- [swarm-ansible](https://github.com/LombardiDaniel/swarm-ansible?tab=readme-ov-file) - Swarm-Ansible 使用 ansible 引导生产就绪的 swarm 集群。附带用于自动化 CI 的工具、监控支持，以及预配置 SSL 证书和简单身份验证的 traefik。还包含私有镜像仓库等功能！
- [SwarmManagement](https://github.com/hansehe/SwarmManagement) - Swarm Management 是一个通过 pip 安装的 Python 应用程序。它通过配置单个 YAML 文件，描述要部署的堆栈以及要创建的网络、配置或密钥，让 Docker Swarm 管理更加轻松。
- [Triton](https://www.joyent.com/) - :yen: 弹性、容器原生基础设施。
- [Tsuru](https://github.com/tsuru/tsuru) - Tsuru 是可扩展的开源平台即服务软件。
- [werf](https://github.com/werf/werf) - Werf 是一款 CI/CD 工具，可高效构建 Docker 镜像，并使用 GitOps 将其部署到 Kubernetes。

### 垃圾回收

- [docker-custodian](https://github.com/Yelp/docker-custodian) - 保持 docker 主机整洁。
- [Docuum](https://github.com/stepchowfun/docuum) - 按最近最少使用（LRU）策略淘汰 Docker 镜像。

## 网络与代理

### 网络

容器网络、覆盖网络、DNS/服务发现桥接工具。

- [Calico][calico] - Calico 是纯三层虚拟网络，可让多个 docker 主机上的容器相互通信。
- [docker-dns](https://github.com/bytesharky/docker-dns) - 轻量级 Docker 容器 DNS 转发器，可在主机上使用自定义后缀（例如 `.docker`）解析容器名称，简化服务发现。
- [Flannel](https://github.com/coreos/flannel/) - Flannel 是一种虚拟网络，为每台主机分配一个子网，供容器运行时使用。
- [netshoot](https://github.com/nicolaka/netshoot) - netshoot 容器提供强大的网络工具集，帮助排查 Docker 网络问题。
- [Pipework](https://github.com/jpetazzo/pipework) - 面向 Linux 容器的软件定义网络；Pipework 可与“原生”LXC 容器以及出色的 Docker 配合使用。
- [registrator](https://github.com/gliderlabs/registrator) - Docker 的服务注册桥接工具。

### 反向代理

支持容器感知的反向代理、入口以及可自动发现后端并终止 TLS 的前端。

- [BunkerWeb](https://github.com/bunkerity/bunkerweb) - 新一代开源 Web 应用防火墙（WAF）。
- [caddy-docker-proxy](https://github.com/lucaslorentz/caddy-docker-proxy) - 基于 Caddy 的反向代理，可通过服务或容器标签进行配置。
- [caddy-docker-upstreams](https://github.com/invzhi/caddy-docker-upstreams) - Caddy 的 Docker 上游模块，可通过容器标签进行配置。
- [Docker Dnsmasq Updater](https://github.com/moonbuggy/docker-dnsmasq-updater) - 使用 Docker 容器主机名更新远程 dnsmasq 服务器。
- [docker-flow-proxy](https://github.com/docker-flow/docker-flow-proxy) - 每次部署新服务或扩展服务时重新配置代理。
- [Let's Encrypt Nginx-proxy Companion](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) - nginx-proxy 的轻量级配套容器，可自动创建和续订 Let's Encrypt 证书。
- [mesh-router](https://github.com/Yundera/mesh-router) - 为 Docker 容器提供免费域名（nsl.sh）的服务，支持自动 HTTPS 路由。使用 Wireguard VPN 在网络之间安全地路由子域名请求。非常适合自托管 NAS 和云部署。
- [Nginx Proxy Manager](https://github.com/jc21/nginx-proxy-manager) - 用于通过代理提供 Web 服务并支持 SSL 的精美 Web 界面。
- [nginx-proxy][nginxproxy] - 使用 docker-gen 为 Docker 容器自动配置 nginx 代理。
- [OpenResty Manager](https://github.com/Safe3/openresty-manager) - 易于使用、功能强大且美观的 OpenResty Manager（Nginx 增强版），是 OpenResty Edge 的开源替代品。
- [Swarm Router](https://github.com/flavioaiello/swarm-router) - 面向 docker swarm 模式、基于服务名且零配置的路由器，采用全新且更安全的方案。
- [Træfɪk](https://github.com/containous/traefik) - 面向 Docker、Mesos、Consul 和 Etcd 的自动化反向代理与负载均衡器。

## 存储与数据

- [Docker Volume Backup](https://github.com/offen/docker-volume-backup) 在本地或任何兼容 S3 的存储中备份 Docker 卷。
- [Label Backup](https://github.com/resulgg/label-backup) - 轻量级、支持 Docker 的备份代理，可根据 Docker 标签自动发现并备份容器化数据库（PostgreSQL、MySQL、MongoDB、Redis）。支持本地存储和兼容 S3 的目标，并可通过 cron 表达式灵活安排计划。
- [Netshare](https://github.com/ContainX/docker-volume-netshare) Docker NFS、AWS EFS、Ceph 和 Samba/CIFS 卷插件。
- [portworx](https://portworx.com) - :yen: 用于持久化、共享和复制卷的去中心化存储解决方案。
- [quobyte](https://www.quobyte.com/) - :yen: 完全容错的分布式文件系统，带有 Docker 卷驱动程序。
- [resq](https://github.com/mashb1t/resq) - 基于 Restic 的 Docker 备份工具，可备份卷、数据库和 .env 文件，无论是否停止容器均可运行。支持本地、SSH 或任何兼容 S3 的存储。
- [REX-Ray](https://github.com/rexray/rexray) 提供与供应商无关的存储编排引擎。其主要设计目标是为 Docker、Kubernetes 和 Mesos 提供持久化存储。

## 可观测性

监控 Docker 主机、容器及其中运行的服务。涵盖自托管和 SaaS；商业条目以 `:yen:` 标记。

- [ADRG](https://github.com/jaldertech/adrg) - 使用 cgroups v2 管理系统负载的动态 Docker 资源调节器。
- [AppDynamics](https://github.com/Appdynamics/docker-monitoring-extension) - :yen: Docker 监控扩展通过 Unix Socket 或 TCP 从 Docker Remote API 收集指标。
- [Autoheal](https://github.com/willfarrell/docker-autoheal) - 自动监控并重启不健康的 docker 容器。
- [Better Stack](https://betterstack.com/community/guides/scaling-docker/) - :yen: 兼容 Docker 的可观测性技术栈，为容器化应用提供日志聚合和运行时间监控。
- [cAdvisor](https://github.com/google/cadvisor) - 分析正在运行的容器的资源使用情况和性能特征。
- [Datadog](https://www.datadoghq.com/) - :yen: 全栈监控服务，原生支持 Docker、Kubernetes 和 Mesos。
- [DLIA](https://github.com/zorak1103/dlia) - DLIA 是一款由 AI 驱动的 Docker 日志监控代理，使用大型语言模型（LLM）智能分析容器日志、检测异常并持续提供上下文见解。
- [docker-exporter](https://github.com/dlepaux/docker-exporter) - 使用 Rust 编写的轻量级 Prometheus Docker 容器指标导出器。在 ARM64（Raspberry Pi 5）上正确计算 cgroup v2 内存工作集；以非 root 身份运行，并使用只读套接字；空闲时内存约 7 MiB。
- [Docker-Sentinel](https://github.com/Will-Luck/Docker-Sentinel) - 自动更新容器，支持逐容器策略、回滚保护和实时 Web 仪表板。
- [DockProbe](https://github.com/deep-on/dockprobe) - 单容器即可运行的轻量级 Docker 监控仪表板。提供实时指标、6 条异常检测规则、Telegram 提醒和 16 项自动安全扫描。无需配置，内存约 50MB。
- [DockProc](https://gitlab.com/n0r1sk/dockproc) - 容器进程级 I/O 监控。
- [dockprom](https://github.com/stefanprodan/dockprom) - 使用 Prometheus、Grafana、cAdvisor、NodeExporter 和 AlertManager 监控 Docker 主机和容器。
- [Doku](https://github.com/amerkurev/doku) - Doku 是一款简单的 Web 应用，可监控 Docker 磁盘使用情况。
- [Dozzle](dozzle) - 使用浏览器或移动设备实时监控容器日志。
- [Drydock](https://github.com/CodesWhat/drydock) - 容器更新监控，提供 Web 仪表板、23 个镜像仓库提供商、20 种通知触发条件和分布式代理架构。
- [Dynatrace](https://docs.dynatrace.com/docs/observe/infrastructure-observability/container-platform-monitoring) - :yen: 无需安装代理或修改 Run 命令，即可监控容器化应用。
- [Grafana Docker Dashboard Template](https://grafana.com/grafana/dashboards/179-docker-prometheus-monitoring/) - 适用于 Docker、Grafana 和 Prometheus 技术栈的模板。
- [InfraCanvas](https://github.com/bytestrix/InfraCanvas) - 在任意 Linux 服务器上实时可视化容器、Pod、卷和网络拓扑。单个二进制文件，通过 WebSocket 实时更新。
- [Maintenant](https://github.com/kolapsis/maintenant) - 面向 Docker 和 Kubernetes 的自发现基础设施监控。通过标签自动检测容器，并提供端点监控、心跳、TLS 证书、资源指标、更新情报和内置状态页。单个二进制文件，内嵌 SPA。
- [Middleware](https://middleware.io/) - :yen: 通过统一的可观测性平台监控 Docker 主机、容器、日志和应用性能。
- [Site24x7](https://www.site24x7.com/docker-monitoring.html) - :yen: 面向 DevOps 和 IT 的 Docker 监控，采用 SaaS 按主机付费模式。
- [Sysdig Monitor](https://www.sysdig.com/products/monitor) - :yen: 软件或 SaaS 服务，使用系统调用监控、告警并排查容器问题；为 Docker 和 Kubernetes 提供容器专属功能。
- [Wiremap](https://github.com/codeofmario/wiremap) - 自托管的 Docker 网络拓扑可视化工具，支持实时日志流、实时统计、内嵌终端和容器检查。

## 安全

容器强化、运行时安全、策略、合规与取证。涵盖自托管和商业方案；商业条目以 `:yen:` 标记。

- [Aqua Security](https://www.aquasec.com) - :yen: 在任何平台上保护从开发到生产阶段的容器化应用。
- [buildcage](https://github.com/dash14/buildcage) - 限制 Docker 构建期间的出站网络访问以防止供应链攻击；可作为 Docker Buildx 的即插即用 BuildKit 远程驱动程序，并提供可直接使用的 GitHub Actions。
- [CetusGuard](https://github.com/hectorm/cetusguard) - 用于保护 Docker 守护进程套接字的工具，可过滤对其 API 端点的调用。
- [Checkov](https://github.com/bridgecrewio/checkov) - 对基础设施即代码清单（Terraform、Kubernetes、Cloudformation、Helm、Dockerfile、Kustomize）进行静态分析，查找并修复安全配置错误。
- [compose-lint](https://github.com/tmatens/compose-lint) - 检查 Docker Compose 文件中的安全配置错误，包括特权容器、未固定的镜像、Docker 套接字挂载和明文凭证；依据 OWASP 和 CIS Docker Benchmark。
- [container-explorer](https://github.com/google/container-explorer) - 用于从已挂载磁盘镜像中检查 Docker 和 containerd 容器详情的取证工具。
- [Deepfence Threat Mapper](https://github.com/deepfence/ThreatMapper) - 面向 Kubernetes、虚拟机和无服务器环境的强大运行时漏洞扫描器。
- [Den](https://github.com/us/den) - 面向 AI 代理的自托管沙箱运行时，支持 Docker 容器、安全强化、REST API 和 WebSocket。
- [docker-bench-security](https://github.com/docker/docker-bench-security) - 检查生产环境中部署 Docker 容器的数十项常见最佳实践的脚本。
- [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy) - 基于 HAProxy 的 Docker API 套接字精细过滤器；广泛用于向反向代理和家庭实验室技术栈暴露受限套接字。
- [KICS](https://github.com/checkmarx/kics) - 基础设施即代码扫描工具，可在开发周期早期发现安全漏洞、合规问题和基础设施配置错误。支持扩展以添加更多策略。
- [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) - :yen:（此前名为 Twistlock Security Suite）可检测漏洞、强化容器镜像，并在应用生命周期各阶段执行安全策略。
- [segspec](https://github.com/dormstern/segspec) - 从 Docker Compose、Kubernetes 清单、Helm charts 和其他配置文件中提取网络依赖关系，生成带有证据追踪的 Kubernetes NetworkPolicy。
- [Sysdig Falco](https://github.com/falcosecurity/falco) - Sysdig Falco 是开源容器安全监控器。它可以监控应用、容器、主机和网络活动，并针对未授权活动发出告警。
- [Sysdig Secure](https://www.sysdig.com/solutions/cloud-detection-and-response-cdr) - :yen: Sysdig Secure 通过行为监控和防御应对运行时安全，并基于开源 Sysdig 提供深入取证以支持事件响应。
- [Trend Micro DeepSecurity](https://www.trendmicro.com/en_us/business/products/hybrid-cloud/deep-security.html) - :yen: Trend Micro DeepSecurity 为容器工作负载和主机提供运行时保护，并在运行前扫描镜像以识别漏洞、恶意软件以及硬编码密钥等内容。

## 用户界面

### 桌面端

用于管理和监控 docker 主机与集群的原生桌面应用

- [Docker DB Manager](https://github.com/AbianS/docker-db-manager) - 用于管理 Docker 数据库容器的桌面应用，提供可视化界面和一键操作。
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - 官方原生应用。仅适用于 Windows 和 MacOS。
- [Gantry (Desktop)](https://github.com/getgantry/gantry) - 原生 macOS 应用（SwiftUI，无 Electron），可通过本地或 SSH 管理和监控 Docker 主机：提供集群仪表板、实时日志和统计、exec 终端、文件浏览器，以及供 AI 代理使用的内置 MCP 服务器。
- [Simple Docker UI](https://github.com/felixgborrego/simple-docker-ui) - 基于 Electron 构建。
- [Stevedore](https://github.com/slonopotamus/stevedore) - 适用于 Windows 的优秀 Docker Desktop 替代品。支持 Linux 和 Windows 容器。[slonopotamus](https://github.com/slonopotamus)。

### 终端

面向 Docker 的 TUI、CLI 工具和 Shell 集成。

- [bosun](https://github.com/psychedelicdevx/bosun) - 键盘驱动的 Docker 终端 UI，支持 Compose 项目分组、实时日志、统计和 Shell 访问。
- [d4s](https://github.com/jr-k/d4s) - 快速、键盘驱动的终端 UI，可管理 Docker 容器、Compose 堆栈和 Swarm 服务，具备 K9s 般的人体工学体验。
- [dcinja](https://github.com/Falldog/dcinja) - 面向 docker 命令行环境、功能强大且二进制体积最小的模板引擎。
- [dctl](https://github.com/FabienD/docker-stack) - Dctl 是一个 CLI 工具，让开发者可以在终端任意位置执行所有 docker compose 命令等操作。
- [decompose](https://github.com/s0rg/decompose) - 用于对 docker 环境进行逆向工程的工具。
- [dive](https://github.com/wagoodman/dive) - 用于探索 docker 镜像各层的工具。
- [docker pushrm](https://github.com/christian-korneck/docker-pushrm) - Docker CLI 插件，可将当前目录中的 README.md 文件推送到 Docker Hub。也支持 Quay 和 Harbor。
- [docker-captain](https://github.com/lucabello/docker-captain) - 友好的 CLI，可轻松管理多个 Docker Compose 部署——由 Typer、Rich、questionary 和 sh 驱动。
- [dockerfile-mode](https://github.com/spotify/dockerfile-mode) - 用于处理 Dockerfile 的 Emacs 模式。
- [dockerfilegraph](https://github.com/patrickhoefler/dockerfilegraph) - 将多阶段 Dockerfile 可视化。
- [dockly](https://github.com/lirantal/dockly) - 用于管理 Docker 容器的交互式 Shell UI。
- [DockMate](https://github.com/shubh-io/dockmate) - 轻量级、基于终端的 Docker 和 Podman 管理器，提供文本界面，。
- [DockSTARTer](https://github.com/GhostWriters/DockSTARTer) - DockSTARTer 帮助你开始使用 Docker 运行家庭服务器应用。
- [DockTUI](https://github.com/strmax195-hue/docktui) - 快速、零依赖的 Docker 和 Compose 终端仪表板。
- [dockup](https://github.com/paulo-amaral/dockup) - TUI 工具，用于安装、强化和维护容器运行时：Docker Engine + Compose v2、NVIDIA Container Toolkit、Podman 和 Apple container，并提供受 CIS 启发的安全审计。
- [dprs](https://github.com/durableprogramming/dprs) - 面向开发者的 TUI，用于管理 Docker 容器并实时流式查看日志。
- [dry](https://github.com/moncho/dry) - 用于 Docker 容器的交互式 CLI。
- [easydocker](https://github.com/joao-zanutto/easydocker) - 深受 k9s 启发的终端 UI，利用精美的 BubbleTea 图形界面。
- [goManageDocker](https://github.com/ajayd-san/gomanagedocker) - 用于高速查看和管理 docker 对象的 TUI 工具，提供合理的快捷键绑定，并开箱即支持 VIM 导航。
- [layerx](https://github.com/deveshctl/layerx) - 在 TUI 中检查容器镜像层：浏览文件系统差异、内联查看文件内容、按大小排序、提取单个文件，并依据效率阈值控制 CI。支持 Docker、Podman 和 OCI 归档。
- [lazydocker](https://github.com/jesseduffield/lazydocker) - 管理所有 docker 事务的懒人方式。使用 Go 和 gocui 库编写的简单终端 UI，同时支持 docker 和 docker-compose。
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - 用于读取和筛选 Docker、Podman 容器日志输出的界面，类似 [Dozzle](dozzle)，但面向终端，并支持模糊搜索、正则表达式和输出着色。
- [oxker](https://github.com/mrjackwills/oxker) - 用于查看和控制 docker 容器的简单 TUI。
- [proco](https://github.com/shiwaforce/poco) - Proco 可通过简单的 YAML 配置文件帮助你组织和管理任意复杂度的 Docker、Docker-Compose 和 Kubernetes 项目，缩短从找到项目到在本地环境中初始化项目的流程。
- [scuba](https://github.com/JonathonReinhart/scuba) - 透明地使用 Docker 容器封装软件构建环境，。
- [supdock](https://github.com/segersniels/supdock) - 通过交互式提示，让 Docker 的使用界面更加直观。
- [swarmcli](https://github.com/Eldara-Tech/swarmcli) - 以思维般的速度管理 Swarm——支持实时日志流、即时访问容器 Shell、无缝端口转发和按需查看密钥，让你全面掌控 Docker Swarm 而不中断工作流。
- [tdocker](https://github.com/pivovarit/tdocker) - 用于日常容器操作的 `docker ps` 替代工具。
- [wharf](https://github.com/idesyatov/wharf) - 受 k9s 启发的 Docker Compose TUI，支持 vim 风格导航、通过 braille 图表实时监控 CPU/内存、容器文件浏览器、SSH 远程主机支持和命令模式。

### Web

- [Arcane](https://github.com/getarcaneapp/arcane) - 简单现代、为所有人打造的 Docker 管理平台。
- [CASA](https://github.com/knrdl/casa) - 将少量容器的管理工作交给同事，。
- [Container Web TTY](https://github.com/wrfly/container-web-tty) - 通过 Web TTY 连接容器。
- [Docker Commander](https://github.com/koduj-dev/docker-commander) - 自托管的 Docker 管理和监控 UI，支持多主机、Compose 管理、日志聚合、告警、RBAC、漏洞扫描和 MCP 集成。
- [Docker Registry Browser](https://github.com/klausmeyer/docker-registry-browser) - Docker Registry HTTP API v2 的 Web 界面。
- [docker-swarm-visualizer](https://github.com/dockersamples/docker-swarm-visualizer) - 将 Docker Swarm 上的 Docker 服务可视化（用于运行演示）。
- [dockge](https://github.com/louislam/dockge) - 易于使用、响应迅速、以 docker compose.yaml 堆栈为核心的自托管管理器。
- [DockScope](https://github.com/ManuelR-T/dockscope) - 通过 3D 依赖关系图可视化 Docker 容器，支持实时指标、日志和浏览器内终端。
- [Komodo](https://github.com/mbecker20/komodo) - 用于在多台服务器上构建和部署软件的工具。
- [Portainer](https://github.com/portainer/portainer) - 用于管理 Docker 主机或 Docker Swarm 集群的轻量级管理 UI。
- [Swarmpit](https://github.com/swarmpit/swarmpit) - Swarmpit 为 Docker Swarm 集群提供简单易用的界面。你可以管理堆栈、服务、密钥、卷、网络等。
- [usulnet](https://github.com/fr4nsys/usulnet) - 面向系统管理员和 DevOps 的完整现代 Docker 管理平台，提供企业级工具、CVE 扫描器、Web 端 SSH、RDP 等功能。

### IDE 集成

- JetBrains IDE（IntelliJ IDEA、GoLand、WebStorm、CLion 等）内置了 [Docker 插件](https://www.jetbrains.com/help/idea/docker.html#managing-images)
- Eclipse [Docker Tooling 插件](https://www.eclipse.org/community/eclipse_newsletter/2016/july/article2.php)
- [docker.el](https://github.com/Silex/docker.el) 在 Emacs 中管理 docker。

## 开发者工作流

### API 客户端

- [contajners](https://github.com/lispyclouds/contajners) - 符合 Clojure 习惯用法、以数据为驱动且适合 REPL 的 OCI 容器引擎客户端。
- [Docker Client for JVM](https://github.com/gesellix/docker-client) - 使用 Groovy 编写的 JVM Docker 远程 API 客户端库。
- [Docker Client TypeScript](https://gitlab.com/masaeedu/docker-client) - JavaScript Docker API 客户端，根据 moby 仓库中的 Swagger API 定义自动生成。
- [docker-controller-bot](https://github.com/dgongut/docker-controller-bot) - 用于控制 docker 容器的 Telegram 机器人。
- [docker-maven-plugin](https://github.com/fabric8io/docker-maven-plugin) - 用于运行和创建 Docker 镜像的 Maven 插件。
- [Docker.DotNet](https://github.com/Microsoft/Docker.DotNet) - Docker 远程 API 的 C#/.NET HTTP 客户端。
- [Docker.Registry.DotNet](https://github.com/ChangemakerStudios/Docker.Registry.DotNet) - 用于与 Docker Registry API (v2) 交互的 .NET (C#) 客户端库。
- [dockerode](https://github.com/apocas/dockerode) - Docker 远程 API 的 node.js 模块。
- [go-dockerclient](https://github.com/fsouza/go-dockerclient/) - Docker 远程 API 的 Go HTTP 客户端。
- [Gradle Docker plugin](https://github.com/gesellix/gradle-docker-plugin) - Gradle 的 Docker 远程 API 插件。
- [Portainer stack utils](https://github.com/greenled/portainer-stack-utils) - Bash 脚本，可从 docker-compose yaml 文件在 Portainer 实例中部署、更新或移除 Docker 堆栈。
- [sbt-docker](https://github.com/marcuslonnberg/sbt-docker) - 直接从 sbt 创建 Docker 镜像。

### CI/CD

自托管 CI 引擎、构建加速器以及面向 Docker 工作流的托管服务。商业条目以 `:yen:` 标记。

- [Buddy](https://buddy.works) - :yen: 将 Git、构建和部署工具融为一体的强大工具，让我们的开发工作如虎添翼。
- [Captain](https://github.com/harbur/captain) - 将你的 Git 工作流转换为可用于持续交付的 Docker 容器。
- [CircleCI](https://circleci.com/) - :yen: 在构建环境中推送或拉取 Docker 镜像，或直接在 CircleCI 上构建并运行容器。
- [CodeFresh](https://octopus.com/codefresh) - :yen: 为 Docker 应用提供端到端的构建、测试和共享能力，并支持自动化测试。
- [ConcourseCI](https://concourse-ci.org) - :yen: 面向 DevOps 团队、以流水线为核心的 CI SaaS 平台。
- [Defang](https://github.com/DefangLabs/defang) - 几分钟内即可将 Docker Compose 部署到你喜爱的云平台。
- [Depot](https://depot.dev) - :yen: 在云端快速构建 Docker 镜像。提供高速计算、自动智能缓存和零配置体验。
- [Diun](https://github.com/crazy-max/diun) - 当 Docker 镜像仓库中的镜像或仓库更新时接收通知。
- [dockcheck](https://github.com/mag37/dockcheck) - 检查 docker 镜像更新而不拉取镜像，并自动更新所选或所有容器的脚本。还支持通知、清理等功能。
- [Docker plugin for Jenkins](https://github.com/jenkinsci/docker-plugin/) - 此 docker 插件旨在使用 docker 主机动态配置从节点、运行单次构建，然后拆除该从节点。
- [Drone](https://github.com/drone/drone) - 基于 Docker 构建并使用 YAML 文件配置的持续集成服务器。
- [Gantry](https://github.com/shizunge/gantry) - 自动更新选定的 Docker swarm 服务。
- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) - GitLab 集成了 CI，可使用 GitLab runner 测试、构建和部署代码。
- [Jaypore CI](https://github.com/theSage21/jaypore_ci) - 使用 Python 配置的简单、灵活且强大的 CI/CD/自动化系统。离线可用，本地优先。
- [Kraken CI](https://github.com/Kraken-CI/kraken) - 现代化、开源、自托管且高度可扩展的 CI/CD 系统，专注于测试。其中一个执行器是 Docker。已开发。
- [Screwdriver](https://screwdriver.cd/) - :yen: Yahoo 的开源构建平台，旨在实现持续交付。
- [Self Hosted Runner](https://github.com/youssefbrr/self-hosted-runner) - Docker 化解决方案，用于设置自托管 GitHub Actions runner，支持 Linux、macOS 和 Windows。
- [Semaphore CI](https://semaphore.io/) - :yen: 高性能云 CI，可构建、测试容器并将其交付到生产环境。
- [Skipper](https://github.com/Stratoscale/skipper) - 轻松将 Git 仓库 Docker 化。
- [Tekton CD](https://tekton.dev/) - 云原生流水线资源。
- [TravisCI](https://www.travis-ci.com/) - :yen: 支持 Docker 的 GitHub 项目托管 CI。

### 开发环境

- [coder](https://github.com/coder/coder) - 由 Terraform 或 Docker 驱动的远程开发机器。
- [dde](https://github.com/whatwedo/dde) - 基于 Docker 的本地开发环境工具集。
- [DIP](https://github.com/bibendi/dip) - CLI 工具，可轻松配置并交互使用由 docker-compose 配置的应用程序。
- [EnvCLI](https://github.com/EnvCLI/EnvCLI) - 使用项目专属的 docker 容器替代本地安装的 Node、Go 等。
- [Gebug](https://github.com/moshebe/gebug) - 通过无缝启用调试器和热重载功能，让 Docker 化 Go 应用程序的调试变得非常简单。
- [HarborPilot](https://github.com/potterwhite/HarborPilot) - 面向嵌入式 Linux 开发的自动化多平台 Docker 镜像构建器（RK3588、RV1126、RK3568）。支持三层配置继承、基于 PORT_SLOT 的端口分配，以及多个 Ubuntu 版本（20.04/22.04/24.04）。
- [Lando](https://github.com/lando/lando) - 面向希望快速定义并轻松启动项目开发所需服务和工具的开发者。
- [Laradock](https://github.com/laradock/laradock) - 基于 Docker 的完整 PHP 开发环境，以可替换的 Compose 服务运行 Nginx/Apache、PHP、MySQL、Redis 等。
- [uniget](https://github.com/uniget-org/cli) - Uni(versal)get，容器工具及更多内容的安装和更新程序（原名 docker-setup）。
- [Zsh-in-Docker](https://github.com/deluan/zsh-in-docker) - 在 Docker 容器中通过一行命令安装 Zsh、Oh-My-Zsh 和插件！

### 无服务器

- [Apache OpenWhisk](https://github.com/apache/openwhisk) - 无服务器开源云平台，可响应事件并以任意规模执行函数。
- [Koyeb](https://www.koyeb.com/) - :yen: 面向开发者的无服务器平台，可在全球部署应用。通过基于 git 的部署、原生自动扩缩容、全球边缘网络以及内置服务网格和服务发现，无缝运行 Docker 容器、Web 应用和 API。
- [OpenFaaS](https://github.com/openfaas/faas) - 面向 Docker 和 Kubernetes 的完整无服务器函数框架。

### 测试

- [Container Structure Test](https://github.com/GoogleContainerTools/container-structure-test) - 通过检查命令输出或文件系统内容来验证镜像结构的框架。
- [dgoss](https://github.com/goss-org/goss/tree/master/extras/dgoss) - 基于 YAML、用于验证 docker 容器的快速工具。
- [Kurtosis](https://github.com/kurtosis-tech/kurtosis) - 可组合的构建系统，用于多容器测试环境，为开发者提供强大的类 Python SDK 以配置环境、编译时验证器以确认环境行为和设置，以及用于执行、监控和调试环境的运行时。
- [Pumba](https://github.com/alexei-led/pumba) - Docker 混沌测试工具。可部署在 kubernetes 和 CoreOS 集群上。

### 封装工具

- [Hokusai](https://github.com/artsy/hokusai) - 面向应用开发者的 Docker + Kubernetes CLI；用于将应用容器化，并在开发、测试和发布周期中管理其生命周期。来自 [artsy](https://github.com/artsy)。
- [Preevy](https://github.com/livecycle/preevy) - 为 Docker 和 Docker Compose 项目提供预览环境。将拉取请求作为 CI 流水线的一部分部署到你的云服务提供商，让开发者和非开发者（产品/设计人员）测试更改并提供反馈。
- [subuser](https://github.com/subuser-security/subuser) - 让你能够轻松、安全且可移植地运行 Docker 中的图形桌面应用程序。
- [udocker](https://github.com/indigo-dc/udocker) - 无需 root 权限，即可在批处理或交互式系统中运行简单 docker 容器的工具。
- [Vagrant - Docker provider](https://developer.hashicorp.com/vagrant/docs/providers/docker/basics) - 入门时可参考 [vagrant-docker-example](https://github.com/bubenkoff/vagrant-docker-example)。

## 容器内工具

安装在容器内部或设计为以 [sidecar](https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar) 方式运行的工具和应用程序

- [cdebug](https://github.com/iximiuz/cdebug) - 用于通过临时 sidecar 调试运行中容器的瑞士军刀；支持 Docker、containerd 和 Kubernetes。
- [ckron](https://github.com/nicomt/ckron) - 面向 docker 的 cron 风格作业调度器，。
- [CoreOS][coreos] - 面向大规模服务器部署的 Linux
- [docker-gen](https://github.com/jwilder/docker-gen) - 根据 docker 容器元数据生成文件。
- [dockerize](https://github.com/powerman/dockerize) - 用于简化在 docker 容器中运行应用程序的工具。
- [GoSu](https://github.com/tianon/gosu) - 以指定用户运行特定应用程序，然后退出流水线（entrypoint 脚本工具）。
- [is-docker](https://github.com/sindresorhus/is-docker) - 检查进程是否正在 Docker 容器内运行。
- [microcheck](https://github.com/tarampampam/microcheck) - Docker 容器的轻量级健康检查工具（纯 C 实现，httpcheck 仅 75 KB，而 cURL 为 9.3 MB），包含 http(s)、端口检查和并行执行功能。
- [Ofelia](https://github.com/mcuadros/ofelia/) - Ofelia 是使用 Go 构建的现代轻量级 docker 环境作业调度器，旨在取代老式 cron。支持从容器标签和/或配置文件读取配置。
- [su-exec](https://github.com/ncopa/su-exec) - 这是一个简单的工具，可使用不同权限执行程序。程序会直接执行而非作为子进程运行（类似 su 和 sudo），从而避免 TTY 和信号问题。为什么要重新发明 gosu？它的功能大致与 gosu 完全相同，但体积只有 10kb，而不是 1.8MB。
- [supercronic](https://github.com/aptible/supercronic) - 兼容 Crontab 的作业运行器，专为在容器中运行而设计。

# 学习资源

## 入门指南

- [Benefits of using Docker](https://semaphore.io/blog/docker-benefits) 介绍 Docker 在开发和交付方面的优势，并提供实用的采用路线图。
- [Bootstrapping Microservices](https://www.manning.com/books/bootstrapping-microservices-with-docker-kubernetes-and-terraform) - 实用且以项目为导向的微服务应用构建指南：从为单个微服务构建 Docker 镜像并将其发布到私有容器镜像仓库开始，最终将完整的微服务应用部署到生产 Kubernetes 集群。
- [Docker Curriculum](https://github.com/prakhar1989/docker-curriculum)：全面的 Docker 入门教程。教你如何使用 Docker，以及如何借助 Elastic Beanstalk 和 Elastic Container Service 在 AWS 上部署 Docker 化应用。
- [Docker Documentation](https://docs.docker.com/)：官方文档。
- [Docker for beginners](https://github.com/groda/big_data/blob/master/docker_for_beginners.md)：适合需要学习 Docker 基础知识的初学者的教程——从“Hello world!”到容器的基本交互，并用简单的说明介绍底层概念。
- [Docker for novices](https://www.youtube.com/watch?v=xsjSadjKXns) 面向从未使用过 Docker 的开发者和测试人员的入门介绍。（视频时长 1 小时 40 分钟，录制于 2019 年 linux.conf.au——新西兰基督城）
- [Docker katas](https://github.com/eficode-academy/docker-katas) 一系列实验课程，将带你从“Hello Docker”一路学习到将容器化 Web 应用部署到服务器。
- [Docker simplified in 55 seconds](https://www.youtube.com/watch?v=vP_4DlOH1G4)：用动画快速介绍 Docker 的高层概念。可将其视为直观版 tl;dr，帮助你更轻松地深入学习更复杂的资料。
- [Docker Training](https://training.mirantis.com) - :yen:
- [Dockerlings](https://github.com/furkan/dockerlings)：在终端中学习 docker，提供现代化 TUI 和简短易懂的练习。
- [Introduction à Docker](https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/) 法语 DevSecOps 网站上专门用于精通 Docker 的章节：从基础到最佳实践，包括优化和保护容器等内容……
- [Learn Docker](https://github.com/dwyl/learn-docker)：循序渐进的教程及更多资源（视频、文章、速查表）
- [Learn Docker (Visually)](https://pagertree.com/learn/docker/overview) - 面向初学者的高层概览，介绍 Docker 的主要组件及其相互关系。包含大量高质量图片、示例和资源。
- [Play With Docker](https://training.play-with-docker.com/)：PWD 是从初学者到高级用户开始学习 Docker 的绝佳方式。Docker 可直接在浏览器中运行。
- [Practical Guide about Docker Commands in Spanish](https://github.com/brunocascio/docker-espanol) 本西班牙语指南介绍基本 docker 命令，并配有真实案例。
- [Setting Python Development Environment with VScode and Docker](https://github.com/RamiKrispin/vscode-python)：逐步讲解如何使用 VScode、Docker 和 Dev Container 扩展搭建 Docker 化 Python 开发环境。
- [The Docker Handbook](https://docker-handbook.farhan.dev/) 一部开源书籍，讲解 Docker 基础知识、最佳实践和一些中级功能。该书托管在 [fhsinchy/the-docker-handbook](https://github.com/fhsinchy/the-docker-handbook)，相关项目托管在 [fhsinchy/docker-handbook-projects](https://github.com/fhsinchy/docker-handbook-projects) 仓库中。

**速查表**

- [eon01](https://github.com/eon01/DockerCheatSheet)
- [dimonomid](https://github.com/dimonomid/docker-quick-ref) (PDF)
- [JensPiegsa](https://github.com/JensPiegsa/docker-cheat-sheet)
- [wsargent](https://github.com/wsargent/docker-cheat-sheet)（最受欢迎）

## 入门指南（Windows）

- [Docker on Windows behind a firewall](https://toedter.com/2015/05/11/docker-on-windows-behind-a-firewall/)
- [Docker Reference Architecture: Modernizing Traditional .NET Framework Applications](https://docs.mirantis.com/containers/v3.0/dockeree-ref-arch/app-dev/modernize-dotnet-apps.html) - 你将了解哪些类型的 .NET Framework 应用适合容器化，以及“直接迁移”（lift-and-shift）容器化方法。
- [Docker with Microsoft SQL 2016 + ASP.NET](https://blog.alexellis.io/docker-does-sql2016-aspnet/) 演示如何在 Docker 中运行 ASP.NET 和 SQL Server 工作负载
- [Exploring ASP.NET Core with Docker in both Linux and Windows Containers](https://www.hanselman.com/blog/exploring-aspnet-core-with-docker-in-both-linux-and-windows-containers) 使用 [Docker for Windows][docker-for-windows] 在 Linux 和 Windows 容器中运行 ASP.NET Core 应用
- [Running a Legacy ASP.NET App in a Windows Container](https://blog.sixeyed.com/dockerizing-nerd-dinner-part-1-running-a-legacy-asp-net-app-in-a-windows-container/) Docker 化旧版 ASP.NET 应用并将其作为 Windows 容器运行的步骤
- [Windows Containers and Docker: The 101](https://www.youtube.com/watch?v=N7SG2wEyQtM) - 时长 20 分钟的概览，介绍如何使用 Docker 运行 PowerShell、ASP.NET Core 和 ASP.NET 应用。
- [Windows Containers Quick Start](https://learn.microsoft.com/en-us/virtualization/windowscontainers/about/) Windows 容器概览，并深入介绍适用于 Windows 10 和 Windows Server 2016 的快速入门指南

---

## 书籍与教程

- [Cloud Native Landscape](https://github.com/cncf/landscape)
- [Docker Blog](https://www.docker.com/blog/) - 定期发布 Docker、社区和工具的最新消息。
- [Docker Certification](https://intellipaat.com/docker-training-course/?US) - :yen: 通过实践项目和案例研究，帮助你学习 Docker 容器化、运行 Docker 容器、镜像创建、Dockerfile、Docker 编排、安全最佳实践等内容，并助你通过 Docker Certified Associate 认证。
- [Docker dev bookmarks](https://www.codever.dev/search?q=docker) - 使用标签 [docker](https://www.codever.dev/bookmarks/t/docker)。
- [Docker in Action, Second Edition](https://www.manning.com/books/docker-in-action-second-edition)
- [Docker in Practice, Second Edition](https://www.manning.com/books/docker-in-practice-second-edition)
- [Docker packaging guide for Python](https://pythonspeed.com/docker/) - 一系列关于 Python Docker 打包细节的深入文章。
- [Learn Docker in a Month of Lunches](https://www.manning.com/books/learn-docker-in-a-month-of-lunches)
- [Learn Docker](https://coursesity.com/blog/best-docker-tutorials/) - Learn Docker - 精选的顶级在线 docker 教程和课程列表。
- [Programming Community Curated Resources for learning Docker](https://hackr.io/tutorials/learn-docker)

## Awesome 列表

- [Awesome Compose](https://github.com/docker/awesome-compose) - Docker Compose 示例。
- [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes)
- [Awesome Linux Container](https://github.com/Friz-zy/awesome-linux-containers) 内容比此仓库更侧重容器整体。
- [Awesome Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) 免费软件网络服务和 Web 应用列表，可通过传统方式（搭建本地 Web 服务器并从中运行应用）或在 Docker 容器中进行本地托管。
- [Awesome Sysadmin](https://github.com/n1trux/awesome-sysadmin)
- [ToolsOfTheTrade](https://github.com/cjbarber/ToolsOfTheTrade) SaaS 和本地部署应用程序列表

## 演示与示例

- [An Annotated Docker Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-docker-config-for-frontend-web-development) 使用 Docker 搭建本地开发环境，可将项目所需的 DevOps 配置完整封装，让新成员上手毫无阻碍。
- [Local Docker DB](https://github.com/alexmacarthur/local-docker-db) 包含许多数据库的 docker-compose 示例列表
- [Webstack-micro](https://github.com/ferbs/webstack-micro) 演示 Web 应用，展示如何使用 Docker Compose 设置 API 网关、集中式身份验证、后台工作器和 WebSocket 等容器化服务。

## 实用技巧

- [Docker Caveats](https://docker-saigon.github.io/post/Docker-Caveats/) 生产环境运行 Docker 时需要了解的事项（写于 2016 年 4 月 11 日）。
- [Docker Containers on the Desktop](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
- [Docker vs. VMs? Combining Both for Cloud Portability Nirvana](https://www.flexera.com/blog/finops/)
- [Don't Repeat Yourself with Anchors, Aliases and Extensions in Docker Compose Files](https://medium.com/@kinghuang/docker-compose-anchors-aliases-extensions-a1e4105d70bd)
- [GUI Apps with Docker](https://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/)

## Raspberry Pi 与 ARM

- [Docker Pirates ARMed with explosive stuff](https://blog.hypriot.com/) 关于集群、swarm、docker 以及 Raspberry Pi SD 卡预装镜像的大量资源
- [Get Docker up and running on the RaspberryPi in three steps](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)
- [git push docker containers to linux devices](https://www.balena.io) 利用 git 和 Docker 为 IoT 提供现代 DevOps。
- [Installing, running, using Docker on armhf (ARMv7) devices](https://github.com/umiddelb/armhf/wiki/Installing,-running,-using-docker-on-armhf-%28ARMv7%29-devices)

## 安全文章

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

## 视频

- [Deploying and scaling applications with Docker, Swarm, and a tiny bit of Python magic](https://www.youtube.com/watch?v=GpHMTR7P2Ms) (3:11:06)
- [Docker Course](https://www.youtube.com/watch?v=UZpyvK6UGFo)（西班牙语）
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
- [Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615) Udacity 免费课程
- [State of containers: a debate with CoreOS, VMware and Google](https://www.youtube.com/watch?v=IiITP3yIRd8) (27:38)

## 社区与聚会

### 巴西语

- [Docker BR on Telegram](https://telegram.me/dockerbr)

### 英语

- [Docker Community](https://www.docker.com/community/)
- [Docker Events](https://www.docker.com/events/)
- [Docker Online Meetup](https://www.meetup.com/en-AU/Docker-Online-Meetup/)
- [Docker Reddit Community](https://www.reddit.com/r/docker/)

### 俄语

- [Docker Russian-speaking Community](https://t.me/docker_ru)

### 西班牙语

- [Docker Tips](https://dockertips.com/)

## 随时间变化的 Star 数

[![随时间变化的 Star 数](https://starchart.cc/veggiemonk/awesome-docker.svg?variant=adaptive)](https://starchart.cc/veggiemonk/awesome-docker)

[calico]: https://github.com/projectcalico/calico
[coreos]: https://github.com/coreos
[distribution]: https://github.com/docker/distribution
[docker-for-windows]: https://docs.docker.com/desktop/setup/install/windows-install/
[editreadme]: https://github.com/veggiemonk/awesome-docker/edit/master/README.md
[kubernetes]: https://kubernetes.io
[nginxproxy]: https://github.com/nginx-proxy/nginx-proxy
[openshift]: https://okd.io/
[sindresorhus]: https://github.com/sindresorhus/awesome

