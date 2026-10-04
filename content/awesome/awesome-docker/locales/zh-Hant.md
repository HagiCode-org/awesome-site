# Awesome Docker [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)][sindresorhus] [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/veggiemonk/awesome-docker/)[![Last Commit](https://img.shields.io/github/last-commit/veggiemonk/awesome-docker)](https://github.com/veggiemonk/awesome-docker/commits/main)<!-- omit in toc -->

> 精選的 Docker 專案清單。

如果您想貢獻，請先閱讀 [CONTRIBUTING.md](https://github.com/veggiemonk/awesome-docker/blob/master/.github/CONTRIBUTING.md)。
如果這份清單不夠完整，歡迎貢獻補充。
如果您發現其中某個連結已不再適合，可以提交 [pull request][editreadme] 改進這個檔案。謝謝！

**專案必須是為 Docker 打造，而不只是使用 Docker。**

> 經驗法則：如果移除 Docker 整合並不會破壞專案的價值主張，那它就不應該列在這份清單中。

這份清單的建立者與維護者不會因接受任何貢獻者的變更而收取任何形式的報酬。
本頁並非任何形式的官方 Docker 產品。
這是一份專案連結清單，由志工維護。
歡迎所有人參與貢獻。
這個儲存庫的目標是索引開源專案，而非營利廣告。

> Docker 是一個開放平台，供開發人員和系統管理員建置、交付及執行分散式應用程式。Docker 由 Docker Engine（可攜、輕量的執行階段與封裝工具）和 Docker Hub（用於分享應用程式及自動化工作流程的雲端服務）組成，可讓應用程式快速由各個元件組合而成，並消除開發、品質保證與正式環境之間的摩擦。因此，IT 團隊能更快交付，並在筆記型電腦、資料中心 VM 及任何雲端上執行完全相同、無須修改的應用程式。

_來源：_ [What is Docker](https://www.docker.com/why-docker/)

# 目錄 <!-- omit in toc -->

<!-- TOC -->

- [專案](#projects)
    - [引擎與執行階段](#engine--runtime)
    - [建置映像](#building-images)
        - [建置工具](#builder)
        - [基礎映像](#base-images)
        - [Dockerfile](#dockerfile)
        - [Linter](#linter)
    - [映像生命週期](#image-lifecycle)
        - [Registry](#registry)
        - [Registry 命令列工具](#registry-cli)
        - [映像掃描與 SBOM](#image-scanning--sbom)
        - [供應鏈](#supply-chain)
    - [執行容器](#running-containers)
        - [組合](#composition)
        - [協調](#orchestration)
        - [部署與平台](#deployment--platforms)
        - [垃圾回收](#garbage-collection)
    - [網路與 Proxy](#networking--proxies)
        - [網路](#networking)
        - [反向 Proxy](#reverse-proxy)
    - [儲存與資料](#storage--data)
    - [可觀測性](#observability)
    - [安全性](#security)
    - [使用者介面](#user-interfaces)
        - [桌面](#desktop)
        - [終端機](#terminal)
        - [Web](#web)
        - [IDE 整合](#ide-integrations)
    - [開發者工作流程](#developer-workflow)
        - [API 用戶端](#api-client)
        - [CI/CD](#cicd)
        - [開發環境](#development-environment)
        - [無伺服器](#serverless)
        - [測試](#testing)
        - [包裝工具](#wrappers)
    - [容器內工具](#in-container-tooling)
- [學習資源](#learning-resources)
    - [從哪裡開始](#where-to-start)
    - [從哪裡開始（Windows）](#where-to-start-windows)
    - [書籍與教學](#books--tutorials)
    - [Awesome 清單](#awesome-lists)
    - [示範與範例](#demos-and-examples)
    - [實用技巧](#good-tips)
    - [Raspberry Pi 與 ARM](#raspberry-pi--arm)
    - [安全性文章](#security-articles)
    - [影片](#videos)
    - [社群與聚會](#communities-and-meetups)
        - [巴西語](#brazilian)
        - [英語](#english)
        - [俄語](#russian)
        - [西班牙語](#spanish)
- [星標數隨時間變化](#stargazers-over-time)

<!-- /TOC -->

# 專案

## 官方專案

- [Moby](https://github.com/moby/moby)
- [Docker Hub](https://hub.docker.com)
- [Docker Compose](https://github.com/docker/compose/) - 使用 Docker 定義並執行多容器應用程式。
- [Docker Registry][distribution] - 用於封裝、傳送、儲存及交付內容的 Docker 工具組

## 引擎與執行階段

- [colima](https://github.com/abiosoft/colima) - 在 macOS（及 Linux）上以最少設定執行容器執行階段。
- [containerd](https://github.com/containerd/containerd) - 開放且可靠的容器執行階段。
- [cri-o](https://github.com/cri-o/cri-o) - 以 Open Container Initiative 為基礎實作 Kubernetes Container Runtime Interface。
- [gVisor](https://github.com/google/gvisor) - 容器的應用程式核心。
- [lxc](https://github.com/lxc/lxc) - LXC - Linux Containers。
- [Mocker](https://github.com/us/mocker) - 與 Docker 相容的 macOS 容器 CLI，使用 Apple 的 Containerization framework 建置。
- [podman](https://github.com/containers/libpod) - Libpod 是用於建立容器 Pod 的程式庫，也是 Podman 的家。
- [runc](https://github.com/opencontainers/runc) - 依照 OCI 規格產生並執行容器的 CLI 工具。
- [runtime-tools](https://github.com/opencontainers/runtime-tools) - Oci-runtime-tool 是一組用於處理 OCI 執行階段規格的工具。
- [youki](https://github.com/youki-dev/youki) - 以 Rust 撰寫並實作 OCI 執行階段規格的容器執行階段。

## 建置映像

### 建置工具

旨在協助或簡化建置**新**映像的應用程式

- [ansible-bender](https://github.com/ansible-community/ansible-bender) - 使用 `ansible` 和 `buildah` 的工具。
- [apko](https://github.com/chainguard-dev/apko) - 從 apk 套件宣告式建置 OCI 映像；設計上可重現。
- [buildah](https://github.com/containers/buildah) - 協助建置 OCI 映像的工具。
- [BuildKit](https://github.com/moby/buildkit) - 可並行、有效利用快取且不依賴 Dockerfile 的建置工具組。
- [buildx](https://github.com/docker/buildx) - 由 BuildKit 支援多平台建置的官方 Docker CLI 外掛程式。
- [cekit](https://github.com/cekit/cekit) - openshift 使用的工具，可透過不同建置引擎建置基礎映像。
- [dlayer](https://github.com/orisano/dlayer) - Docker 層分析工具。
- [docker-companion](https://github.com/mudler/docker-companion) - 使用 Golang 撰寫、用於合併及解開 docker 映像的命令列工具。
- [docker-repack](https://github.com/orf/docker-repack) - 將 Docker 映像重新封裝成更小、更有效率的版本，大幅加快映像拉取速度。
- [DockerSlim](https://github.com/docker-slim/docker-slim) 可縮減臃腫的 Docker 映像，建立盡可能小的映像。
- [earthly](https://github.com/earthly/earthly) - 採用 Dockerfile 結合 Makefile 語法的容器化建置自動化工具。
- [essex](https://github.com/utensils/essex) - Docker 專案樣板：Essex 是以 bash 撰寫的 CLI 工具，可快速設定乾淨、一致且由 Makefile 驅動工作流程的 Docker 專案。
- [HPC Container Maker](https://github.com/NVIDIA/hpc-container-maker) - 根據高階 Python 配方產生 Dockerfile，其中包含高效能運算元件的建置區塊。
- [img](https://github.com/genuinetools/img) - 獨立、無 daemon、非特權且相容 Dockerfile 與 OCI 的容器映像建置工具。
- [ko](https://github.com/ko-build/ko) - 不需 Dockerfile 即可將 Go 應用程式建置並部署為容器映像。
- [nix2container](https://github.com/nlewo/nix2container) - 使用 Nix 建置 OCI 映像，不必經過 `docker load` 往返。
- [packer](https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/builder/docker) - Hashicorp 工具，可建置機器映像（包含 Docker 映像），並整合 chef、puppet、ansible 等組態管理工具。
- [Production-Ready Python Containers](https://pythonspeed.com/products/pythoncontainer/) - :yen: 用於建立可供正式環境使用之 Python 應用程式 Docker 映像的範本。
- [RAUDI](https://github.com/cybersecsi/RAUDI) - 當第三方軟體有新版本／更新／提交時，自動更新 Docker 映像（並可選擇推送至 Docker Hub）的工具。
- [runlike](https://github.com/lavie/runlike) - 從執行中的容器產生 `docker run` 命令與選項。
- [Whaler](https://github.com/P3GLEG/Whaler) - 將 Docker 映像反向轉換成 Dockerfile 的程式。


### 基礎映像

精簡、強化或為特定用途打造的容器基礎映像。

- [Chainguard Images](https://github.com/chainguard-images/images) - 以 Wolfi 為基礎建置的精簡、簽署且附有 SBOM 證明的容器映像。
- [distroless](https://github.com/GoogleContainerTools/distroless) - 專注於程式語言、不含作業系統的 docker 映像。
- [melange](https://github.com/chainguard-dev/melange) - 從宣告式 YAML 建置 apk 套件，以供 apko 使用。
- [pglayers](https://github.com/pglayers/pglayers) - 預先建置、可組合為 Docker 層的 PostgreSQL 擴充功能。提供 50 多種擴充功能，以及可直接使用的組合映像（完整版本、相容 Azure）。
- [Wolfi](https://github.com/wolfi-dev/os) - 專為容器設計的 Undistro Linux；以 glibc 為基礎、經過簽署，並每日提供 SBOM。


### Dockerfile

- [Dockerfile Generator](https://github.com/ozankasikci/dockerfile-generator) `dfg` 同時是 Go 程式庫與可執行檔，能透過各種輸入管道產生有效的 Dockerfile。
- [Dockershelf](https://github.com/Dockershelf/dockershelf) - 收集通用、高效率且精簡之 docker 配方的儲存庫。透過 Travis cron 工作每天更新、測試並發布映像。
- [Dofigen](https://github.com/lenra-io/dofigen) - 使用簡化的 YAML 或 JSON 格式描述來產生 Dockerfile。
- [Trsuted Builds](https://dockerfile.github.io/) - 受信任的自動化 Docker 建置。Dockerfile Project 維護各種熱門開源軟體服務 Dockerfile 的中央儲存庫，可在 Docker 容器上執行。

### Linter

- [Dockadvisor](https://github.com/deckrun/dockadvisor) - 輕量級 Dockerfile linter，提供 60 多條規則、品質評分與安全性檢查。
- [docker-image-size-limit](https://github.com/wemake-services/docker-image-size-limit) - 用於監控 docker 映像大小的工具。
- [Hadolint](https://github.com/hadolint/hadolint) - Dockerfile linter，可檢查最佳實務與常見錯誤，也能檢查 `RUN` 指令中撰寫的 bash；。

## 映像生命週期

### Registry

安全儲存 Docker 映像的服務。

- [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/) - :yen: Amazon Elastic Container Registry (ECR) 是全代管的 Docker 容器 registry，讓開發人員輕鬆儲存、管理及部署 Docker 容器映像。
- [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/#overview) - :yen: 將 Docker 私有 registry 作為 Azure 的一級資源來管理。
- [Cloudsmith](https://cloudsmith.com/product/formats/docker-registry) - :yen: 全代管套件管理 SaaS，原生支援公開與私有 Docker registry（以及許多其他格式，包括 Kubernetes 生態系統的 Helm charts）。提供寬裕的免費方案，開源專案也可完全免費使用。
- [Container Registry Service](https://container-registry.com/) - :yen: 以 Harbor 為基礎、提供給團隊與組織使用的容器管理服務。免費方案提供 1 GB 私有儲存空間。
- [Cycle.io](https://cycle.io/) - :yen: 裸機容器代管。
- [DigitalOcean](https://www.digitalocean.com/products/container-registry) - :yen: DigitalOcean Container Registry。
- [Docker Hub](https://hub.docker.com/) 由 Docker Inc. 提供。
- [Docker Registry v2][distribution] - 用於封裝、傳送、儲存及交付內容的 Docker 工具組
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - 以 P2P 技術提供高效率、穩定且安全的檔案散佈與映像加速。
- [GCP Artifact Registry](https://docs.cloud.google.com/artifact-registry/docs) - :yen: 在 Google Cloud Platform 上快速、私密地儲存 Docker 映像。
- [Gitea Container Registry](https://docs.gitea.com/usage/packages/container) - 整合於 Gitea 的 Docker registry，適合私有、小規模的映像代管。
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - GitHub 的 Docker 映像儲存與管理方案，並與 GitHub Actions 緊密整合。
- [GitLab Container Registry](https://docs.gitlab.com/user/packages/container_registry/) - 專注於在 GitLab CI 中使用映像的 Registry。
- [Granite Registry](https://granite.so/products/docker-registry) - :yen: 將私有 Docker 映像與拉取映像的工作負載放在一起儲存，並提供具範圍限制的唯讀與讀寫金鑰。
- [Harbor](https://github.com/goharbor/harbor) 開源、可信賴的雲原生 registry 專案，可儲存、簽署及掃描內容。支援複寫、使用者管理、存取控制與活動稽核。
- [JFrog Artifactory](https://jfrog.com/artifactory/) - :yen: 成品儲存庫管理工具，也可作為私有 Docker Registry。
- [kontain.me](https://github.com/imjasonh/kontain.me) - 依需求建置並提供映像的容器映像 registry。
- [Kraken](https://github.com/uber/kraken) - Uber 的高可擴充 P2P docker registry，能在數秒內散佈數 TB 資料。
- [NORA](https://github.com/getnora-io/nora) - 輕量級多協定成品 registry，支援 Docker、Maven、npm、Cargo 與 PyPI，並以單一 32MB 執行檔提供。具備拉取快取、Web UI、Prometheus 指標與 RBAC 驗證。
- [nscr](https://github.com/jhstatewide/nscr) - 輕量、自成一體且容易執行與維護的容器 registry。
- [Quay.io](https://quay.io/) - :yen: 私有 Docker 儲存庫的安全代管服務。
- [Registryo](https://github.com/inmagik/registryo) - 用於本地部署 docker registry 的 UI 與 token 驗證伺服器。
- [RepoFlow](https://www.repoflow.io) - 簡單易用的套件管理平台，除 Docker 外也支援 PyPI、Maven、npm 與 Helm 等格式。包含智慧搜尋、內建 Docker 映像掃描，並提供適用於自我代管與雲端使用的優質免費方案。
- [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) - 管理軟體供應鏈中的二進位檔與建置成品。

### Registry 命令列工具

用於檢查、複製及操作 OCI／Docker registry 中映像的無 daemon 命令列工具。

- [crane](https://github.com/google/go-containerregistry/tree/main/cmd/crane) - 用於操作 registry 映像的輕量級 CLI，來自 `go-containerregistry`。
- [go-containerregistry](https://github.com/google/go-containerregistry) - 用於處理容器 registry 的 Go 程式庫與 CLI 工具（`crane`、`gcrane`、`registry`）。
- [oras](https://github.com/oras-project/oras) - 將任意 OCI 成品推送至任何 OCI registry，並從中拉取。
- [regctl](https://github.com/regclient/regclient) - 無 daemon 的 registry 用戶端；可複製、檢查、修改及簽署 OCI 映像。
- [skopeo](https://github.com/containers/skopeo) - 操作遠端映像 registry：取得資訊、複製映像及簽署內容。

### 映像掃描與 SBOM

映像弱點掃描器、SBOM 產生器及摘要固定工具。商業項目以 `:yen:` 標示。

- [Anchor](https://github.com/SongStitch/anchor/) - 將 Dockerfile 中的相依項目固定版本，以確保建置可重現。
- [Anchor Enterprise](https://anchore.com/) - :yen: 分析映像中的 CVE 弱點，並依據自訂安全性原則進行檢查。
- [BomLens](https://github.com/sktelecom/bomlens) - 將容器映像（以及原始碼、二進位檔與韌體）掃描為 CycloneDX SBOM，並產生弱點、授權與聲明報告。以單一 Docker 映像提供，並內含 Web UI。
- [Clair](https://github.com/quay/clair) - 開源專案，用於對 appc 與 docker 容器進行靜態弱點分析。
- [Docker Scout](https://github.com/docker/scout-cli) - 用於 SBOM 產生、弱點分析及原則評估的官方 Docker CLI。
- [Grype](https://github.com/anchore/grype) - 容器映像、檔案系統及 SBOM 的弱點掃描器。
- [oscap-docker](https://github.com/OpenSCAP/openscap) - OpenSCAP 提供 oscap-docker 工具，用來掃描 Docker 容器與映像。
- [pindock](https://github.com/deadnews/pindock) - 在 Dockerfile 與 compose 檔案中固定並更新 Docker 映像摘要。
- [Syft](https://github.com/anchore/syft) - CLI 工具與程式庫，可從容器映像及檔案系統產生軟體物料清單（SBOM）。
- [Trivy](https://github.com/aquasecurity/trivy) - Aqua Security 提供的開源、簡單且全面的容器弱點掃描器（適用於 CI）。

### 供應鏈

容器映像的簽署、證明與來源資訊。

- [cosign](https://github.com/sigstore/cosign) - OCI 成品的容器簽署、驗證及透明日誌。
- [in-toto](https://github.com/in-toto/in-toto) - 供應鏈證明框架；是 SLSA 與 cosign provenance 的基礎。
- [policy-controller](https://github.com/sigstore/policy-controller) - Kubernetes admission controller，強制要求容器映像具有 cosign 簽章。
- [witness](https://github.com/in-toto/witness) - 在建置管線中產生並驗證 in-toto 證明。

## 執行容器

### 組合

- [Composerize](https://github.com/magicmark/composerize) - 將 docker run 命令轉換為 docker-compose 檔案。
- [ctk](https://github.com/ctk-hq/ctk) - 容器型工作負載的視覺化組合工具。
- [kompose](https://github.com/kubernetes/kompose) - 從 Docker Compose 移轉至 Kubernetes。
- [plash](https://github.com/ihucos/plash) - 容器執行與建置引擎，可在 docker 內部執行。
- [podman-compose](https://github.com/containers/podman-compose) - 使用 podman 執行 docker-compose.yml 的指令碼。
- [Smalte](https://github.com/roquie/smalte) – 動態設定需要在 docker 容器中使用靜態設定的應用程式。

### 協調

- [CloudSlang](https://github.com/CloudSlang/cloud-slang) - 用於建立 Docker 流程自動化的工作流程引擎。
- [docker rollout](https://github.com/Wowu/docker-rollout) - Docker Compose 服務的零停機部署。
- [Kubernetes](https://github.com/kubernetes/kubernetes) - Google 提供的 Docker 容器開源協調系統。
- [Mesos](https://github.com/apache/mesos) - 容器、VM 與實體主機的資源／工作排程器。
- [Nebula](https://github.com/nebula-orchestrator) - 專為管理大規模分散式叢集而設計的 Docker 協調工具。
- [Nomad](https://github.com/hashicorp/nomad) - 輕鬆部署任何規模的應用程式。具備分散式、高可用性並了解資料中心的排程器。
- [Rancher](https://github.com/rancher/rancher) - 提供完整平台、用於在正式環境中操作 Docker 的開源專案。
- [Swarm-cronjob](https://github.com/crazy-max/swarm-cronjob) - 在 Swarm 上依時間排程建立工作。

### 部署與平台

自我代管及代管雲端平台（PaaS/CaaS、部署自動化）。商業項目以 `:yen:` 標示。

- [Amazon ECS](https://aws.amazon.com/ecs/) - :yen: EC2 上支援 Docker 容器的管理服務。
- [Appfleet](https://appfleet.com/) - :yen: 用於全球部署與管理容器化服務的邊緣平台；將流量導向最近的位置以降低延遲。
- [Azure AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/) - :yen: 全代管 Kubernetes 容器協調服務。
- [blackfish](https://gitlab.com/blackfish/blackfish) - 用於建置開發與正式環境 Swarm 叢集的 CoreOS VM。
- [BosnD](https://gitlab.com/n0r1sk/bosnd) - BosnD（boatswain daemon）- 可動態變更容器環境的設定檔寫入器與服務重新載入工具。
- [caprover](https://github.com/caprover/caprover) - [先前稱為 CaptainDuckDuck] 自動化、可擴充的 Web 伺服器套件（自動化 Docker+nginx）- 強化版 Heroku。
- [Cloud 66](https://www.cloud66.com) - :yen: 全端代管容器管理服務。
- [Cloud Run Compose](https://docs.cloud.google.com/run/docs/deploy-run-compose) - :yen: 以代管服務形式，直接將 `docker-compose.yaml` 檔案部署至 Google Cloud Run。
- [Convox Rack](https://github.com/convox/rack) - Convox Rack 是建構於專業基礎架構自動化及 DevOps 最佳實務之上的開源 PaaS。
- [docker-to-iac](https://github.com/deploystackio/docker-to-iac) - 將 docker run 與 commit 轉換為適用於 AWS、Render.com 及 DigitalOcean 的 Infrastructure as Code 範本。
- [doco-cd](https://github.com/kimdre/doco-cd) - 輕量級 GitOps 與持續部署工具，透過輪詢與 webhook 部署 Docker Compose 專案及 Swarm 堆疊。
- [Dokku](https://github.com/dokku/dokku) - 由 Docker 驅動的迷你 Heroku，協助建置應用程式並管理其生命週期。
- [Exoframe](https://github.com/exoframejs/exoframe) - 自我代管工具，可使用 Docker 透過單一命令簡單部署。
- [Giant Swarm](https://www.giantswarm.io/) - :yen: 簡易的微服務基礎架構。數秒內即可部署容器。
- [Google Container Engine](https://docs.cloud.google.com/kubernetes-engine/docs) - :yen: 由 [Kubernetes][kubernetes] 驅動、在 Google Cloud Computing 上執行 Docker 容器。
- [Grafeas](https://github.com/grafeas/grafeas) - 用於容器中繼資料的通用 API，涵蓋映像與建置詳細資料到安全性弱點等資訊。
- [Mesosphere DC/OS Platform](https://d2iq.com/products/dcos) - :yen: 以 Apache Mesos 為基礎、整合資料與容器的平台。
- [OpenRun](https://github.com/openrundev/openrun) - 使用 Docker 或 Kubernetes 建置、部署、代理、驗證及自動暫停 Web 應用程式。
- [OpenShift][openshift] - 由 [Red Hat](https://www.redhat.com/en) 建置於 [Kubernetes][kubernetes] 之上、針對 Docker 化應用程式開發與部署最佳化的開源 PaaS。
- [Red Hat OpenShift Dedicated](https://www.redhat.com/en/technologies/cloud-computing/openshift/dedicated) - :yen: 在 Amazon Web Services 與 Google Cloud 上全代管的 Red Hat® OpenShift® 服務。
- [swarm-ansible](https://github.com/LombardiDaniel/swarm-ansible?tab=readme-ov-file) - Swarm-Ansible 使用 ansible 啟動可供正式環境使用的 swarm 叢集。內含 CI 自動化工具、監控輔助工具，以及預先設定 SSL 憑證和簡易驗證的 traefik。還包含私有 registry 等功能！
- [SwarmManagement](https://github.com/hansehe/SwarmManagement) - Swarm Management 是使用 pip 安裝的 Python 應用程式。只要設定一個 YAML 檔描述要部署的堆疊，以及要建立的網路、設定或密鑰，就能輕鬆管理 Docker Swarm。
- [Triton](https://www.joyent.com/) - :yen: 彈性的容器原生基礎架構。
- [Tsuru](https://github.com/tsuru/tsuru) - Tsuru 是可擴充的開源 Platform as a Service 軟體。
- [werf](https://github.com/werf/werf) - Werf 是 CI/CD 工具，可高效率地建置 Docker 映像，並透過 GitOps 將其部署至 Kubernetes。

### 垃圾回收

- [docker-custodian](https://github.com/Yelp/docker-custodian) - 保持 docker 主機整潔。
- [Docuum](https://github.com/stepchowfun/docuum) - 依最近最少使用（LRU）原則淘汰 Docker 映像。

## 網路與 Proxy

### 網路

容器網路、Overlay 網路、DNS／服務探索橋接工具。

- [Calico][calico] - Calico 是純 Layer 3 虛擬網路，可讓分布在多個 docker 主機上的容器彼此通訊。
- [docker-dns](https://github.com/bytesharky/docker-dns) - 輕量級 Docker 容器 DNS 轉送器，可在主機上使用自訂後綴（例如 `.docker`）解析容器名稱，簡化服務探索。
- [Flannel](https://github.com/coreos/flannel/) - Flannel 是一種虛擬網路，為每個主機提供子網路，以供容器執行階段使用。
- [netshoot](https://github.com/nicolaka/netshoot) - netshoot 容器提供強大的網路工具組，協助排解 Docker 網路問題。
- [Pipework](https://github.com/jpetazzo/pipework) - Linux 容器的軟體定義網路；Pipework 支援「純」LXC 容器，也支援出色的 Docker。
- [registrator](https://github.com/gliderlabs/registrator) - Docker 的服務 registry 橋接工具。

### 反向 Proxy

可識別容器的反向 Proxy、Ingress 與終止 TLS 的前端，並支援自動探索。

- [BunkerWeb](https://github.com/bunkerity/bunkerweb) - 開源的新一代 Web Application Firewall (WAF)。
- [caddy-docker-proxy](https://github.com/lucaslorentz/caddy-docker-proxy) - 以 Caddy 為基礎的反向 Proxy，可透過服務或容器標籤設定。
- [caddy-docker-upstreams](https://github.com/invzhi/caddy-docker-upstreams) - Caddy 的 Docker upstreams 模組，可透過容器標籤設定。
- [Docker Dnsmasq Updater](https://github.com/moonbuggy/docker-dnsmasq-updater) - 使用 Docker 容器主機名稱更新遠端 dnsmasq 伺服器。
- [docker-flow-proxy](https://github.com/docker-flow/docker-flow-proxy) - 每次部署新服務或調整服務規模時，重新設定 Proxy。
- [Let's Encrypt Nginx-proxy Companion](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) - nginx-proxy 的輕量級輔助容器，可自動建立／續期 Let's Encrypt 憑證。
- [mesh-router](https://github.com/Yundera/mesh-router) - 為 Docker 容器提供免費網域（nsl.sh），並自動透過 HTTPS 路由。使用 Wireguard VPN 安全地跨網路路由子網域要求。適合自我代管 NAS 與雲端部署。
- [Nginx Proxy Manager](https://github.com/jc21/nginx-proxy-manager) - 用於透過 SSL 代理 Web 服務的精美 Web 介面。
- [nginx-proxy][nginxproxy] - 使用 docker-gen 為 Docker 容器自動設定 nginx Proxy。
- [OpenResty Manager](https://github.com/Safe3/openresty-manager) - 最易使用、功能強大且美觀的 OpenResty Manager（Nginx 強化版），也是 OpenResty Edge 的開源替代方案。
- [Swarm Router](https://github.com/flavioaiello/swarm-router) - 具備全新且更安全設計、零設定並依服務名稱路由的 docker swarm mode 路由器。
- [Træfɪk](https://github.com/containous/traefik) - 適用於 Docker、Mesos、Consul、Etcd 的自動化反向 Proxy 與負載平衡器。

## 儲存與資料

- [Docker Volume Backup](https://github.com/offen/docker-volume-backup) 在本機或任何相容 S3 的儲存空間備份 Docker volumes。
- [Label Backup](https://github.com/resulgg/label-backup) - 輕量、了解 Docker 的備份代理程式，依據 Docker 標籤自動探索並備份容器化資料庫（PostgreSQL、MySQL、MongoDB、Redis）。支援本機與相容 S3 的目的地，並可透過 cron 運算式彈性排程。
- [Netshare](https://github.com/ContainX/docker-volume-netshare) Docker NFS、AWS EFS、Ceph 與 Samba/CIFS Volume 外掛程式。
- [portworx](https://portworx.com) - :yen: 用於持續性、共享與複寫磁碟區的去中心化儲存方案。
- [quobyte](https://www.quobyte.com/) - :yen: 具備完整容錯能力、並提供 docker volume 驅動程式的分散式檔案系統。
- [resq](https://github.com/mashb1t/resq) - 由 Restic 驅動的 Docker 備份工具，可備份磁碟區、資料庫與 .env 檔案，並可選擇是否停止容器。支援本機、SSH 或任何相容 S3 的儲存空間。
- [REX-Ray](https://github.com/rexray/rexray) 提供不依賴特定廠商的儲存協調引擎。主要設計目標是為 Docker、Kubernetes 與 Mesos 提供持續性儲存空間。

## 可觀測性

監控 Docker 主機、容器及其中執行的服務。涵蓋自我代管與 SaaS；商業項目以 `:yen:` 標示。

- [ADRG](https://github.com/jaldertech/adrg) - 使用 cgroups v2 管理系統負載的動態 Docker 資源調節器。
- [AppDynamics](https://github.com/Appdynamics/docker-monitoring-extension) - :yen: Docker Monitoring 擴充功能透過 Unix Socket 或 TCP 從 Docker Remote API 擷取指標。
- [Autoheal](https://github.com/willfarrell/docker-autoheal) - 自動監控並重新啟動狀態不健康的 docker 容器。
- [Better Stack](https://betterstack.com/community/guides/scaling-docker/) - :yen: 相容 Docker 的可觀測性堆疊，為容器化應用程式提供日誌彙整與運作時間監控。
- [cAdvisor](https://github.com/google/cadvisor) - 分析執行中容器的資源使用量與效能特性。
- [Datadog](https://www.datadoghq.com/) - :yen: 全端監控服務，原生支援 Docker、Kubernetes 與 Mesos。
- [DLIA](https://github.com/zorak1103/dlia) - DLIA 是 AI 驅動的 Docker 日誌監控代理程式，使用大型語言模型（LLM）智慧分析容器日誌、偵測異常，並隨時間提供脈絡化洞察。
- [docker-exporter](https://github.com/dlepaux/docker-exporter) - 使用 Rust 撰寫的輕量級 Prometheus Docker 容器指標 exporter。在 ARM64（Raspberry Pi 5）上能正確計算 cgroup v2 記憶體工作集；以非 root 身分搭配唯讀 socket 執行，閒置 RAM 約 7 MiB。
- [Docker-Sentinel](https://github.com/Will-Luck/Docker-Sentinel) - 自動更新容器，提供各容器原則、回復保護與即時 Web 儀表板。
- [DockProbe](https://github.com/deep-on/dockprobe) - 單一容器中的輕量級 Docker 監控儀表板。提供即時指標、6 條異常偵測規則、Telegram 警示及 16 項自動化安全掃描。零設定，約使用 50MB RAM。
- [DockProc](https://gitlab.com/n0r1sk/dockproc) - 容器的程序層級 I/O 監控。
- [dockprom](https://github.com/stefanprodan/dockprom) - 使用 Prometheus、Grafana、cAdvisor、NodeExporter 與 AlertManager 監控 Docker 主機與容器。
- [Doku](https://github.com/amerkurev/doku) - Doku 是簡單的 Web 應用程式，可監控 Docker 磁碟使用量。
- [Dozzle](dozzle) - 透過瀏覽器或行動裝置即時監控容器日誌。
- [Drydock](https://github.com/CodesWhat/drydock) - 容器更新監控工具，提供 Web 儀表板、23 個 registry 供應商、20 種通知觸發條件及分散式代理程式架構。
- [Dynatrace](https://docs.dynatrace.com/docs/observe/infrastructure-observability/container-platform-monitoring) - :yen: 無須安裝代理程式或修改 Run 命令，即可監控容器化應用程式。
- [Grafana Docker Dashboard Template](https://grafana.com/grafana/dashboards/179-docker-prometheus-monitoring/) - 適用於 Docker、Grafana 與 Prometheus 堆疊的範本。
- [InfraCanvas](https://github.com/bytestrix/InfraCanvas) - 在任何 Linux 伺服器上即時視覺化容器、Pod、磁碟區與網路。單一執行檔，透過 WebSocket 即時更新。
- [Maintenant](https://github.com/kolapsis/maintenant) - 為 Docker 與 Kubernetes 提供自動探索基礎架構的監控功能。可透過標籤自動偵測容器，並提供端點監控、心跳、TLS 憑證、資源指標、更新情報及內建狀態頁面。單一執行檔，內嵌 SPA。
- [Middleware](https://middleware.io/) - :yen: 透過統一的可觀測性平台監控 Docker 主機、容器、日誌與應用程式效能。
- [Site24x7](https://www.site24x7.com/docker-monitoring.html) - :yen: 適用於 DevOps 與 IT 的 Docker 監控服務，採 SaaS 按主機計費模式。
- [Sysdig Monitor](https://www.sysdig.com/products/monitor) - :yen: 透過系統呼叫監控、警示及疑難排解容器的軟體或 SaaS 服務；提供 Docker 與 Kubernetes 專用功能。
- [Wiremap](https://github.com/codeofmario/wiremap) - 自我代管的 Docker 網路拓撲視覺化探索工具，具備即時日誌串流、即時統計資料、內嵌終端機及容器檢查功能。

## 安全性

容器強化、執行階段安全性、原則、合規性與鑑識。涵蓋自我代管與商業方案；商業項目以 `:yen:` 標示。

- [Aqua Security](https://www.aquasec.com) - :yen: 在任何平台上保護從開發到正式環境的容器型應用程式。
- [buildcage](https://github.com/dash14/buildcage) - 限制 Docker 建置期間的對外網路存取，以防止供應鏈攻擊；可作為 Docker Buildx 的 BuildKit 遠端驅動程式直接替換使用，並提供可立即使用的 GitHub Actions。
- [CetusGuard](https://github.com/hectorm/cetusguard) - CetusGuard 是透過篩選 Docker daemon socket API 端點呼叫來保護該 socket 的工具。
- [Checkov](https://github.com/bridgecrewio/checkov) - 對基礎架構即程式碼資訊清單（Terraform、Kubernetes、Cloudformation、Helm、Dockerfile、Kustomize）進行靜態分析，找出並修正安全性設定錯誤。
- [compose-lint](https://github.com/tmatens/compose-lint) - 檢查 Docker Compose 檔案中的安全性設定錯誤，包括特權容器、未固定版本的映像、Docker socket 掛載及明文認證資料；依據 OWASP 與 CIS Docker Benchmark。
- [container-explorer](https://github.com/google/container-explorer) - 從掛載的磁碟映像探索 Docker 與 containerd 容器詳細資料的鑑識工具。
- [Deepfence Threat Mapper](https://github.com/deepfence/ThreatMapper) - 功能強大的執行階段弱點掃描器，適用於 kubernetes、虛擬機器與無伺服器環境。
- [Den](https://github.com/us/den) - 自我代管的 AI 代理程式沙箱執行階段，支援 Docker 容器、安全性強化、REST API 與 WebSocket。
- [docker-bench-security](https://github.com/docker/docker-bench-security) - 檢查正式環境部署 Docker 容器時數十項常見最佳實務的指令碼。
- [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy) - 以 HAProxy 為基礎、能精細篩選 Docker API socket 的工具；常用於向反向 Proxy 與 homelab 堆疊提供受限的 socket 存取。
- [KICS](https://github.com/checkmarx/kics) - 基礎架構即程式碼掃描工具，可在開發週期早期找出安全性弱點、合規性問題與基礎架構設定錯誤。可擴充以支援其他原則。
- [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) - :yen: （先前稱為 Twistlock Security Suite）可偵測弱點、強化容器映像，並在應用程式生命週期中強制執行安全性原則。
- [segspec](https://github.com/dormstern/segspec) - 從 Docker Compose、Kubernetes 資訊清單、Helm charts 及其他設定檔擷取網路相依關係，以產生附有證據追蹤的 Kubernetes NetworkPolicies。
- [Sysdig Falco](https://github.com/falcosecurity/falco) - Sysdig Falco 是開源容器安全性監控工具。可監控應用程式、容器、主機與網路活動，並對未授權活動發出警示。
- [Sysdig Secure](https://www.sysdig.com/solutions/cloud-detection-and-response-cdr) - :yen: Sysdig Secure 透過行為監控與防禦處理執行階段安全性，並以開源 Sysdig 為基礎提供深入鑑識，協助事件回應。
- [Trend Micro DeepSecurity](https://www.trendmicro.com/en_us/business/products/hybrid-cloud/deep-security.html) - :yen: Trend Micro DeepSecurity 為容器工作負載與主機提供執行階段防護，也可在執行前掃描映像，以識別弱點、惡意軟體及硬編碼密鑰等內容。

## 使用者介面

### 桌面

用於管理與監控 docker 主機和叢集的原生桌面應用程式

- [Docker DB Manager](https://github.com/AbianS/docker-db-manager) - 以視覺化介面與一鍵操作管理 Docker 資料庫容器的桌面應用程式。
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - 官方原生應用程式。僅支援 Windows 和 MacOS。
- [Gantry (Desktop)](https://github.com/getgantry/gantry) - 原生 macOS 應用程式（SwiftUI，非 Electron），可管理與監控本機及透過 SSH 連線的 Docker 主機：包含機群儀表板、即時日誌與統計資料、exec 終端機、檔案瀏覽器，以及供 AI 代理程式使用的內建 MCP 伺服器。
- [Simple Docker UI](https://github.com/felixgborrego/simple-docker-ui) - 以 Electron 建置。
- [Stevedore](https://github.com/slonopotamus/stevedore) - 適用於 Windows 的優秀 Docker Desktop 替代方案。支援 Linux 與 Windows 容器。[slonopotamus](https://github.com/slonopotamus)。

### 終端機

Docker 的 TUI、CLI 工具與 Shell 整合。

- [bosun](https://github.com/psychedelicdevx/bosun) - 以鍵盤操作的 Docker 終端機 UI，支援 compose 專案分組、即時日誌、統計資料與 Shell 存取。
- [d4s](https://github.com/jr-k/d4s) - 快速、以鍵盤操作的終端機 UI，能以 K9s 的便利性管理 Docker 容器、Compose 堆疊與 Swarm 服務。
- [dcinja](https://github.com/Falldog/dcinja) - 適用於 docker 命令列環境、功能強大且二進位檔最小的範本引擎。
- [dctl](https://github.com/FabienD/docker-stack) - Dctl 是 CLI 工具，協助開發人員在終端機任何位置執行所有 docker compose 命令，以及更多功能。
- [decompose](https://github.com/s0rg/decompose) - docker 環境的逆向工程工具。
- [dive](https://github.com/wagoodman/dive) - 用於探索 docker 映像中各層的工具。
- [docker pushrm](https://github.com/christian-korneck/docker-pushrm) - Docker CLI 外掛程式，可將目前目錄中的 README.md 檔案推送至 Docker Hub。也支援 Quay 與 Harbor。
- [docker-captain](https://github.com/lucabello/docker-captain) - 友善的 CLI，可用有型的方式管理多個 Docker Compose 部署 — 由 Typer、Rich、questionary 與 sh 驅動。
- [dockerfile-mode](https://github.com/spotify/dockerfile-mode) - 用於處理 Dockerfile 的 Emacs mode。
- [dockerfilegraph](https://github.com/patrickhoefler/dockerfilegraph) - 將多階段 Dockerfile 視覺化。
- [dockly](https://github.com/lirantal/dockly) - 用於管理 Docker 容器的互動式 Shell UI。
- [DockMate](https://github.com/shubh-io/dockmate) - 輕量級終端機 Docker 與 Podman 管理工具，提供文字介面，。
- [DockSTARTer](https://github.com/GhostWriters/DockSTARTer) - DockSTARTer 協助您開始使用在 Docker 上執行的家用伺服器應用程式。
- [DockTUI](https://github.com/strmax195-hue/docktui) - 快速、零相依性的 Docker 與 Compose 終端機儀表板。
- [dockup](https://github.com/paulo-amaral/dockup) - 用於安裝、強化與維護容器執行階段的 TUI：Docker Engine + Compose v2、NVIDIA Container Toolkit、Podman 與 Apple container，並具備受 CIS 啟發的安全性稽核。
- [dprs](https://github.com/durableprogramming/dprs) - 以開發人員為中心的 TUI，可即時串流日誌並管理 Docker 容器。
- [dry](https://github.com/moncho/dry) - Docker 容器的互動式 CLI。
- [easydocker](https://github.com/joao-zanutto/easydocker) - 深受 k9s 啟發、採用精美 BubbleTea 圖形的終端機 UI。
- [goManageDocker](https://github.com/ajayd-san/gomanagedocker) - 可快速檢視與管理 docker 物件的 TUI 工具，提供直覺的按鍵對應，並內建 VIM 導覽支援。
- [layerx](https://github.com/deveshctl/layerx) - 在 TUI 中檢查容器映像層 — 瀏覽檔案系統差異、直接檢視檔案內容、依大小排序、擷取個別檔案，並依效率門檻設定 CI 閘控。支援 Docker、Podman 與 OCI 封存檔。
- [lazydocker](https://github.com/jesseduffield/lazydocker) - 管理所有 docker 事務的更懶人方式。以 Go 和 gocui 程式庫撰寫、同時適用於 docker 與 docker-compose 的簡易終端機 UI。
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - 用於讀取與篩選 Docker、Podman 容器輸出日誌的介面，類似 [Dozzle](dozzle)，但在終端機中使用，並支援模糊搜尋、正規表示式與輸出上色。
- [oxker](https://github.com/mrjackwills/oxker) - 用於檢視與控制 docker 容器的簡易 tui。
- [proco](https://github.com/shiwaforce/poco) - Proco 使用簡單的 YAML 設定檔協助您組織並管理任何複雜度的 Docker、Docker-Compose 與 Kubernetes 專案，縮短從找到專案到在本機環境初始化的流程。
- [scuba](https://github.com/JonathonReinhart/scuba) - 透明地使用 Docker 容器封裝軟體建置環境，。
- [supdock](https://github.com/segersniels/supdock) - 透過互動式提示，讓 Docker 的使用方式更視覺化。
- [swarmcli](https://github.com/Eldara-Tech/swarmcli) - 以思緒般的速度管理 Swarm — 即時日誌串流、立即進入容器 Shell、無縫連接埠轉送，以及隨選揭露密鑰，讓您完全掌控 Docker Swarm 而不打斷工作流程。
- [tdocker](https://github.com/pivovarit/tdocker) - 日常容器操作的 `docker ps` 替代工具。
- [wharf](https://github.com/idesyatov/wharf) - 受 k9s 啟發的 Docker Compose TUI，支援 vim 風格導覽、附 braille 圖表的即時 CPU／MEM 監控、容器檔案瀏覽器、SSH 遠端主機支援與命令模式。

### Web

- [Arcane](https://github.com/getarcaneapp/arcane) - 簡易、現代且以所有人為對象打造的 Docker 管理平台。
- [CASA](https://github.com/knrdl/casa) - 將少數容器的管理工作交由同事處理，。
- [Container Web TTY](https://github.com/wrfly/container-web-tty) - 透過 Web TTY 連線至您的容器。
- [Docker Commander](https://github.com/koduj-dev/docker-commander) - 自我代管的 Docker 管理與監控 UI，支援多主機、Compose 管理、彙整日誌、警示、RBAC、弱點掃描及 MCP 整合。
- [Docker Registry Browser](https://github.com/klausmeyer/docker-registry-browser) - Docker Registry HTTP API v2 的 Web 介面。
- [docker-swarm-visualizer](https://github.com/dockersamples/docker-swarm-visualizer) - 將 Docker Swarm 上的 Docker 服務視覺化（用於執行示範）。
- [dockge](https://github.com/louislam/dockge) - 易用且反應迅速、以 docker compose.yaml 堆疊為中心的自我代管管理工具。
- [DockScope](https://github.com/ManuelR-T/dockscope) - 以 3D 相依性圖呈現 Docker 容器，提供即時指標、日誌與瀏覽器內終端機。
- [Komodo](https://github.com/mbecker20/komodo) - 用於在多台伺服器上建置與部署軟體的工具。
- [Portainer](https://github.com/portainer/portainer) - 用於管理 Docker 主機或 Docker Swarm 叢集的輕量級管理 UI。
- [Swarmpit](https://github.com/swarmpit/swarmpit) - Swarmpit 為 Docker Swarm 叢集提供簡單易用的介面。您可以管理堆疊、服務、密鑰、磁碟區、網路等。
- [usulnet](https://github.com/fr4nsys/usulnet) - 為系統管理員與 DevOps 設計的完整現代 Docker 管理平台，提供企業級工具、CVE 掃描器、SSH、Web RDP 等更多功能。

### IDE 整合

- JetBrains IDE（IntelliJ IDEA、GoLand、WebStorm、CLion 等）內建 [Docker 外掛程式](https://www.jetbrains.com/help/idea/docker.html#managing-images)
- Eclipse [Docker Tooling 外掛程式](https://www.eclipse.org/community/eclipse_newsletter/2016/july/article2.php)
- [docker.el](https://github.com/Silex/docker.el) 從 Emacs 管理 docker。

## 開發者工作流程

### API 用戶端

- [contajners](https://github.com/lispyclouds/contajners) - 符合 Clojure 慣例、以資料為導向且適合 REPL 的 OCI 容器引擎用戶端。
- [Docker Client for JVM](https://github.com/gesellix/docker-client) - 使用 Groovy 撰寫的 JVM Docker remote api 用戶端程式庫。
- [Docker Client TypeScript](https://gitlab.com/masaeedu/docker-client) - 從 moby 儲存庫中的 Swagger API 定義自動產生的 JavaScript Docker API 用戶端。
- [docker-controller-bot](https://github.com/dgongut/docker-controller-bot) - 用於控制 docker 容器的 Telegram 機器人。
- [docker-maven-plugin](https://github.com/fabric8io/docker-maven-plugin) - 用於執行及建立 Docker 映像的 Maven 外掛程式。
- [Docker.DotNet](https://github.com/Microsoft/Docker.DotNet) - Docker remote API 的 C#/.NET HTTP 用戶端。
- [Docker.Registry.DotNet](https://github.com/ChangemakerStudios/Docker.Registry.DotNet) - 用於與 Docker Registry API (v2) 互動的 .NET (C#) 用戶端程式庫。
- [dockerode](https://github.com/apocas/dockerode) - Docker Remote API 的 node.js 模組。
- [go-dockerclient](https://github.com/fsouza/go-dockerclient/) - Docker remote API 的 Go HTTP 用戶端。
- [Gradle Docker plugin](https://github.com/gesellix/gradle-docker-plugin) - Gradle 的 Docker remote api 外掛程式。
- [Portainer stack utils](https://github.com/greenled/portainer-stack-utils) - 從 docker-compose yaml 檔案在 Portainer 執行個體上部署／更新／取消部署 Docker 堆疊的 Bash 指令碼。
- [sbt-docker](https://github.com/marcuslonnberg/sbt-docker) - 直接從 sbt 建立 Docker 映像。

### CI/CD

自我代管的 CI 引擎、建置加速工具，以及支援 Docker 工作流程的代管服務。商業項目以 `:yen:` 標示。

- [Buddy](https://buddy.works) - :yen: 集 Git、建置與部署工具於一身的強大工具，為我們的開發流程注入動力。
- [Captain](https://github.com/harbur/captain) - 將您的 Git 工作流程轉換為可供持續交付的 Docker 容器。
- [CircleCI](https://circleci.com/) - :yen: 從建置環境推送或拉取 Docker 映像，或直接在 CircleCI 上建置並執行容器。
- [CodeFresh](https://octopus.com/codefresh) - :yen: 為 Docker 應用程式提供端對端建置、測試與分享，並包含自動化測試。
- [ConcourseCI](https://concourse-ci.org) - :yen: 以管線為核心、供 DevOps 團隊使用的 CI SaaS 平台。
- [Defang](https://github.com/DefangLabs/defang) - 幾分鐘內即可將 Docker Compose 部署至您偏好的雲端。
- [Depot](https://depot.dev) - :yen: 在雲端快速建置 Docker 映像。提供高速運算、自動智慧快取與零設定。
- [Diun](https://github.com/crazy-max/diun) - 當 Docker registry 上的映像或儲存庫更新時接收通知。
- [dockcheck](https://github.com/mag37/dockcheck) - 檢查 docker 映像更新的指令碼，無須先拉取即可自動更新所選／所有容器。支援通知、清除等功能。
- [Docker plugin for Jenkins](https://github.com/jenkinsci/docker-plugin/) - 此 docker 外掛程式旨在使用 docker 主機動態佈建從屬節點、執行單一建置，然後拆除該節點。
- [Drone](https://github.com/drone/drone) - 以 Docker 為基礎建置，並使用 YAML 檔案設定的持續整合伺服器。
- [Gantry](https://github.com/shizunge/gantry) - 自動更新所選 Docker swarm 服務。
- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) - GitLab 整合了 CI，可透過 GitLab runners 測試、建置及部署您的程式碼。
- [Jaypore CI](https://github.com/theSage21/jaypore_ci) - 使用 Python 設定的簡易、高度彈性且功能強大的 CI / CD / 自動化系統。以離線、本機優先為設計。
- [Kraken CI](https://github.com/Kraken-CI/kraken) - 現代化、開源且可在內部部署的高可擴充 CI/CD 系統，專注於測試。Docker 是其執行器之一。由社群開發。
- [Screwdriver](https://screwdriver.cd/) - :yen: Yahoo 的開源建置平台，專為持續交付打造。
- [Self Hosted Runner](https://github.com/youssefbrr/self-hosted-runner) - Docker 化方案，可設定支援 Linux、macOS 與 Windows 的自我代管 GitHub Actions runner。
- [Semaphore CI](https://semaphore.io/) - :yen: 高效能雲端 CI，可建置、測試並將容器交付至正式環境。
- [Skipper](https://github.com/Stratoscale/skipper) - 輕鬆將 Git 儲存庫 Docker 化。
- [Tekton CD](https://tekton.dev/) - 雲原生管線資源。
- [TravisCI](https://www.travis-ci.com/) - :yen: 支援 Docker 的 GitHub 專案代管 CI。

### 開發環境

- [coder](https://github.com/coder/coder) - 由 Terraform 或 Docker 驅動的遠端開發機器。
- [dde](https://github.com/whatwedo/dde) - 以 Docker 為基礎的本機開發環境工具組。
- [DIP](https://github.com/bibendi/dip) - CLI 工具，可輕鬆佈建並操作由 docker-compose 設定的應用程式。
- [EnvCLI](https://github.com/EnvCLI/EnvCLI) - 以專案專用的 docker 容器取代本機安裝的 Node、Go 等工具。
- [Gebug](https://github.com/moshebe/gebug) - 透過無縫啟用偵錯工具與 Hot-Reload 功能，讓 Docker 化 Go 應用程式的偵錯變得非常簡單。
- [HarborPilot](https://github.com/potterwhite/HarborPilot) - 適用於嵌入式 Linux 開發（RK3588、RV1126、RK3568）的自動化多平台 Docker 映像建置工具。具備三層組態繼承、依 PORT_SLOT 配置連接埠，以及跨版本 Ubuntu 支援（20.04/22.04/24.04）。
- [Lando](https://github.com/lando/lando) - Lando 適合想快速指定並輕鬆啟動開發專案所需服務與工具的開發人員。
- [Laradock](https://github.com/laradock/laradock) - 以 Docker 為基礎的完整 PHP 開發環境，透過可替換的 Compose 服務執行 Nginx/Apache、PHP、MySQL、Redis 等。
- [uniget](https://github.com/uniget-org/cli) - Uni(versal)get，容器工具及其他工具的安裝與更新程式（先前稱為 docker-setup）。
- [Zsh-in-Docker](https://github.com/deluan/zsh-in-docker) - 只需一行指令，即可在 Docker 容器中安裝 Zsh、Oh-My-Zsh 與外掛程式！

### 無伺服器

- [Apache OpenWhisk](https://github.com/apache/openwhisk) - 開源無伺服器雲端平台，可依事件以任何規模執行函式。
- [Koyeb](https://www.koyeb.com/) - :yen: Koyeb 是方便開發人員使用的無伺服器平台，可在全球部署應用程式。透過以 Git 為基礎的部署、原生自動擴充、全球邊緣網路及內建服務網格與探索功能，無縫執行 Docker 容器、Web 應用程式與 API。
- [OpenFaaS](https://github.com/openfaas/faas) - 適用於 Docker 與 Kubernetes 的完整無伺服器函式架構。

### 測試

- [Container Structure Test](https://github.com/GoogleContainerTools/container-structure-test) - 透過檢查命令輸出或檔案系統內容，驗證映像結構的架構。
- [dgoss](https://github.com/goss-org/goss/tree/master/extras/dgoss) - 以 YAML 為基礎、用於驗證 docker 容器的快速工具。
- [Kurtosis](https://github.com/kurtosis-tech/kurtosis) - 可組合的多容器測試環境建置系統，提供強大的類 Python SDK 以設定環境、編譯時驗證器以確認環境行為與設定，以及可執行、監控與偵錯環境的執行階段。
- [Pumba](https://github.com/alexei-led/pumba) - Docker 混沌測試工具。可部署於 kubernetes 與 CoreOS 叢集。

### 包裝工具

- [Hokusai](https://github.com/artsy/hokusai) - 供應用程式開發人員使用的 Docker + Kubernetes CLI；用於將應用程式容器化，並在開發、測試及發布週期中管理其生命週期。來自 [artsy](https://github.com/artsy)。
- [Preevy](https://github.com/livecycle/preevy) - Docker 與 Docker Compose 專案的預覽環境。可在 CI 管線中將提取要求部署到您的雲端供應商，讓開發人員及非開發人員（產品／設計）測試變更並提供意見。
- [subuser](https://github.com/subuser-security/subuser) - 輕鬆、安全且可攜地在 Docker 中執行圖形桌面應用程式。
- [udocker](https://github.com/indigo-dc/udocker) - 無須 root 權限，即可在批次或互動式系統中執行簡單 docker 容器的工具。
- [Vagrant - Docker provider](https://developer.hashicorp.com/vagrant/docs/providers/docker/basics) - 建議從 [vagrant-docker-example](https://github.com/bubenkoff/vagrant-docker-example) 開始。

## 容器內工具

安裝在容器內或設計為以 [sidecar](https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar) 方式執行的工具與應用程式

- [cdebug](https://github.com/iximiuz/cdebug) - 透過臨時 sidecar 偵錯執行中容器的瑞士刀；支援 Docker、containerd 與 Kubernetes。
- [ckron](https://github.com/nicomt/ckron) - docker 的 cron 風格工作排程器，。
- [CoreOS][coreos] - 適用於大規模伺服器部署的 Linux
- [docker-gen](https://github.com/jwilder/docker-gen) - 從 docker 容器中繼資料產生檔案。
- [dockerize](https://github.com/powerman/dockerize) - 簡化在 docker 容器中執行應用程式的工具。
- [GoSu](https://github.com/tianon/gosu) - 以指定使用者執行指定應用程式，然後結束管線（entrypoint 指令碼工具）。
- [is-docker](https://github.com/sindresorhus/is-docker) - 檢查程序是否在 Docker 容器內執行。
- [microcheck](https://github.com/tarampampam/microcheck) - 輕量級 Docker 容器健康檢查工具（httpcheck 對比 cURL 僅 75 KB，而非 9.3 MB），以純 C 撰寫 - 包含 http(s)、連接埠檢查與平行執行。
- [Ofelia](https://github.com/mcuadros/ofelia/) - Ofelia 是以 Go 建置、現代化且低負載的 docker 環境工作排程器。Ofelia 旨在取代老式 cron。支援從容器標籤及／或設定檔讀取設定。
- [su-exec](https://github.com/ncopa/su-exec) - 簡單的工具，可使用不同權限執行程式。程式會直接執行而非作為子程序執行（如同 su 與 sudo），因此可避免 TTY 與訊號問題。為何要重新發明 gosu？它的功能大致與 gosu 完全相同，但大小僅 10kb，而非 1.8MB。
- [supercronic](https://github.com/aptible/supercronic) - 與 Crontab 相容、專為在容器中執行而設計的工作執行器。

# 學習資源

## 從哪裡開始

- [Benefits of using Docker](https://semaphore.io/blog/docker-benefits) 介紹 Docker 在開發與交付上的好處，並提供實際的採用路線圖。
- [Bootstrapping Microservices](https://www.manning.com/books/bootstrapping-microservices-with-docker-kubernetes-and-terraform) - 以實作專案為主的指南，介紹如何建置微服務應用程式：從為單一微服務建置 Docker 映像並發布到私有容器 registry 開始，到將完整微服務應用程式部署至正式環境 Kubernetes 叢集為止。
- [Docker Curriculum](https://github.com/prakhar1989/docker-curriculum): 全面的 Docker 入門教學。介紹如何使用 Docker，並透過 Elastic Beanstalk 與 Elastic Container Service 在 AWS 上部署 Docker 化應用程式。
- [Docker Documentation](https://docs.docker.com/): 官方文件。
- [Docker for beginners](https://github.com/groda/big_data/blob/master/docker_for_beginners.md): 提供初學者學習 Docker 基礎知識的教學 — 從「Hello world!」到容器基本操作，並以簡單說明介紹背後概念。
- [Docker for novices](https://www.youtube.com/watch?v=xsjSadjKXns) 為從未使用過 Docker 的開發人員與測試人員介紹 Docker。（影片 1 小時 40 分，於 2019 年 Linux.conf.au 在紐西蘭基督城錄製）
- [Docker katas](https://github.com/eficode-academy/docker-katas) 一系列實作課程，帶您從「Hello Docker」一路學到將容器化 Web 應用程式部署至伺服器。
- [Docker simplified in 55 seconds](https://www.youtube.com/watch?v=vP_4DlOH1G4): 以動畫高階介紹 Docker。可將它視為視覺化的 tl;dr，讓您更容易深入閱讀較複雜的學習資料。
- [Docker Training](https://training.mirantis.com) - :yen:
- [Dockerlings](https://github.com/furkan/dockerlings): 在終端機中學習 docker，透過現代化 TUI 與簡短練習逐步上手。
- [Introduction à Docker](https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/) 法文 DevSecOps 網站中專門介紹 Docker 的章節：從基礎到最佳實務，包括最佳化及保護容器等內容……
- [Learn Docker](https://github.com/dwyl/learn-docker): 逐步教學及更多資源（影片、文章、速查表）
- [Learn Docker (Visually)](https://pagertree.com/learn/docker/overview) - 以初學者為對象的高階概覽，介紹 Docker 的所有主要元件及其相互關係。包含許多高品質圖片、範例與資源。
- [Play With Docker](https://training.play-with-docker.com/): PWD 是從初學者到進階使用者開始學習 Docker 的絕佳方式。Docker 可直接在瀏覽器中執行。
- [Practical Guide about Docker Commands in Spanish](https://github.com/brunocascio/docker-espanol) 這份西班牙文指南透過真實生活範例介紹基本 docker 命令的使用方式。
- [Setting Python Development Environment with VScode and Docker](https://github.com/RamiKrispin/vscode-python): 逐步教學如何使用 VScode、Docker 與 Dev Container 擴充功能設定 Docker 化 Python 開發環境。
- [The Docker Handbook](https://docker-handbook.farhan.dev/) 一本開源書籍，介紹 Docker 基礎、最佳實務及部分中階功能。書籍託管於 [fhsinchy/the-docker-handbook](https://github.com/fhsinchy/the-docker-handbook)，專案則託管於 [fhsinchy/docker-handbook-projects](https://github.com/fhsinchy/docker-handbook-projects) 儲存庫。

**速查表**

- [eon01](https://github.com/eon01/DockerCheatSheet)
- [dimonomid](https://github.com/dimonomid/docker-quick-ref) (PDF)
- [JensPiegsa](https://github.com/JensPiegsa/docker-cheat-sheet)
- [wsargent](https://github.com/wsargent/docker-cheat-sheet) (最受歡迎)

## 從哪裡開始（Windows）

- [Docker on Windows behind a firewall](https://toedter.com/2015/05/11/docker-on-windows-behind-a-firewall/)
- [Docker Reference Architecture: Modernizing Traditional .NET Framework Applications](https://docs.mirantis.com/containers/v3.0/dockeree-ref-arch/app-dev/modernize-dotnet-apps.html) - 您將學會辨識適合容器化的 .NET Framework 應用程式類型，以及容器化的「直接搬遷」方式。
- [Docker with Microsoft SQL 2016 + ASP.NET](https://blog.alexellis.io/docker-does-sql2016-aspnet/) 示範如何在 Docker 中執行 ASP.NET 與 SQL Server 工作負載
- [Exploring ASP.NET Core with Docker in both Linux and Windows Containers](https://www.hanselman.com/blog/exploring-aspnet-core-with-docker-in-both-linux-and-windows-containers) 使用 [Docker for Windows][docker-for-windows] 在 Linux 與 Windows 容器中執行 ASP.NET Core 應用程式
- [Running a Legacy ASP.NET App in a Windows Container](https://blog.sixeyed.com/dockerizing-nerd-dinner-part-1-running-a-legacy-asp-net-app-in-a-windows-container/) 將舊版 ASP.NET 應用程式 Docker 化並以 Windows 容器執行的步驟
- [Windows Containers and Docker: The 101](https://www.youtube.com/watch?v=N7SG2wEyQtM) - 20 分鐘概覽，示範使用 Docker 執行 PowerShell、ASP.NET Core 與 ASP.NET 應用程式。
- [Windows Containers Quick Start](https://learn.microsoft.com/en-us/virtualization/windowscontainers/about/) Windows 容器概覽，並深入介紹 Windows 10 與 Windows Server 2016 的快速入門

---

## 書籍與教學

- [Cloud Native Landscape](https://github.com/cncf/landscape)
- [Docker Blog](https://www.docker.com/blog/) - 定期提供 Docker、社群與工具的最新消息。
- [Docker Certification](https://intellipaat.com/docker-training-course/?US) - :yen: 透過實作專案與案例研究，協助您學習 Docker 容器化、執行 Docker 容器、建立映像、Dockerfile、Docker 協調、安全性最佳實務等內容，並協助您通過 Docker Certified Associate 認證。
- [Docker dev bookmarks](https://www.codever.dev/search?q=docker) - 使用 [docker](https://www.codever.dev/bookmarks/t/docker) 標籤。
- [Docker in Action, Second Edition](https://www.manning.com/books/docker-in-action-second-edition)
- [Docker in Practice, Second Edition](https://www.manning.com/books/docker-in-practice-second-edition)
- [Docker packaging guide for Python](https://pythonspeed.com/docker/) - 一系列詳盡文章，介紹 Python 的 Docker 封裝細節。
- [Learn Docker in a Month of Lunches](https://www.manning.com/books/learn-docker-in-a-month-of-lunches)
- [Learn Docker](https://coursesity.com/blog/best-docker-tutorials/) - 學習 Docker - 精選的熱門線上 docker 教學與課程清單。
- [Programming Community Curated Resources for learning Docker](https://hackr.io/tutorials/learn-docker)

## Awesome 清單

- [Awesome Compose](https://github.com/docker/awesome-compose) - Docker Compose 範例。
- [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes)
- [Awesome Linux Container](https://github.com/Friz-zy/awesome-linux-containers) 涵蓋的容器範圍比本儲存庫更廣。
- [Awesome Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) 免費軟體網路服務與 Web 應用程式清單，可透過傳統方式（設定本機 Web 伺服器並從中執行應用程式）或在 Docker 容器中於本機代管。
- [Awesome Sysadmin](https://github.com/n1trux/awesome-sysadmin)
- [ToolsOfTheTrade](https://github.com/cjbarber/ToolsOfTheTrade) SaaS 與地端部署應用程式清單

## 示範與範例

- [An Annotated Docker Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-docker-config-for-frontend-web-development) 使用 Docker 的本機開發環境，可將專案所需的 DevOps 設定打包，讓新成員上手毫無阻礙。
- [Local Docker DB](https://github.com/alexmacarthur/local-docker-db) 包含許多資料庫的 docker-compose 範例清單
- [Webstack-micro](https://github.com/ferbs/webstack-micro) 示範 Web 應用程式，展示如何使用 Docker Compose 設定 API Gateway、集中式驗證、背景工作者與 WebSockets 等容器化服務。

## 實用技巧

- [Docker Caveats](https://docker-saigon.github.io/post/Docker-Caveats/) 在正式環境執行 Docker 時應該知道的事項（撰於 2016 年 4 月 11 日）。
- [Docker Containers on the Desktop](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
- [Docker vs. VMs? Combining Both for Cloud Portability Nirvana](https://www.flexera.com/blog/finops/)
- [Don't Repeat Yourself with Anchors, Aliases and Extensions in Docker Compose Files](https://medium.com/@kinghuang/docker-compose-anchors-aliases-extensions-a1e4105d70bd)
- [GUI Apps with Docker](https://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/)

## Raspberry Pi 與 ARM

- [Docker Pirates ARMed with explosive stuff](https://blog.hypriot.com/) 關於叢集、swarm、docker 及 Raspberry Pi SD 卡預先安裝映像的大量資源
- [Get Docker up and running on the RaspberryPi in three steps](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)
- [git push docker containers to linux devices](https://www.balena.io) 利用 git 與 Docker 實現現代化 IoT DevOps。
- [Installing, running, using Docker on armhf (ARMv7) devices](https://github.com/umiddelb/armhf/wiki/Installing,-running,-using-docker-on-armhf-%28ARMv7%29-devices)

## 安全性文章

- [Bringing new security features to Docker](https://opensource.com/business/14/9/security-for-docker)
- [CVE Scanning Alpine images with Multi-stage builds in Docker 17.05](https://github.com/tomwillfixit/alpine-cvecheck)
- [Docker Secure Deployment Guidelines](https://github.com/AonCyberLabs/Docker-Secure-Deployment-Guidelines)
- [Docker Security - Quick Reference](https://binarymist.io/publication/docker-security/)
- [Docker Security: Are Your Containers Tightly Secured to the Ship? SlideShare](https://www.slideshare.net/slideshow/docker-security-are-your-containers-tightly-secured-to-the-ship/43834790)
- [How CVE's are handled on Offical Docker Images](https://github.com/docker-library/official-images/issues/1448)
- [Lynis 是開源安全性稽核工具，亦包含 Docker 稽核功能](https://cisofy.com/lynis/)
- [Security Best Practices for Building Docker Images](https://linux-audit.com/tags/docker/)
- [Software Engineering Radio interview of Docker Security Team Lead (Diogo Mónica)](https://www.se-radio.net/2017/05/se-radio-episode-290-diogo-monica-on-docker-security/)
- [Ten Docker Image Security Best Practices Cheat Sheet](https://snyk.io/blog/10-docker-image-security-best-practices/)
- [Top ten most popular docker images each contain at least 30 vulnerabilities](https://snyk.io/blog/top-ten-most-popular-docker-images-each-contain-at-least-30-vulnerabilities/)
- [Tuning Docker with the newest security enhancements](https://opensource.com/business/15/3/docker-security-tuning)
- [10 best practices to containerize Node.js web applications with Docker](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)

## 影片

- [Deploying and scaling applications with Docker, Swarm, and a tiny bit of Python magic](https://www.youtube.com/watch?v=GpHMTR7P2Ms) (3:11:06)
- [Docker Course](https://www.youtube.com/watch?v=UZpyvK6UGFo) (西班牙語)
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
- [Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615) Udacity 免費課程
- [State of containers: a debate with CoreOS, VMware and Google](https://www.youtube.com/watch?v=IiITP3yIRd8) (27:38)

## 社群與聚會

### 巴西語

- [Docker BR on Telegram](https://telegram.me/dockerbr)

### 英語

- [Docker Community](https://www.docker.com/community/)
- [Docker Events](https://www.docker.com/events/)
- [Docker Online Meetup](https://www.meetup.com/en-AU/Docker-Online-Meetup/)
- [Docker Reddit Community](https://www.reddit.com/r/docker/)

### 俄語

- [Docker Russian-speaking Community](https://t.me/docker_ru)

### 西班牙語

- [Docker Tips](https://dockertips.com/)

## 星標數隨時間變化

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

