# Awesome Docker [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)][sindresorhus] [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/veggiemonk/awesome-docker/)[![Last Commit](https://img.shields.io/github/last-commit/veggiemonk/awesome-docker)](https://github.com/veggiemonk/awesome-docker/commits/main)<!-- omit in toc -->

> Docker를 위한 프로젝트를 엄선한 목록입니다.

기여하려면 먼저 [CONTRIBUTING.md](https://github.com/veggiemonk/awesome-docker/blob/master/.github/CONTRIBUTING.md)를 읽어 주세요.
이 목록에 빠진 항목이 있다면 완성할 수 있도록 기여해 주세요.
여기에 있는 링크가 더 이상 적절하지 않다고 생각되면 [pull request][editreadme]를 제출해 이 파일을 개선할 수 있습니다. 감사합니다!

**프로젝트는 Docker를 위한 것이어야 하며, 단순히 Docker를 사용하는 것만으로는 부족합니다.**

> 판단 기준: Docker 통합을 제거해도 프로젝트의 가치 제안이 훼손되지 않는다면 이 목록에 포함될 대상이 아닙니다.

이 목록의 작성자와 유지관리자는 어떤 기여자의 변경 사항을 수락하더라도 어떠한 대가도 받지 않습니다.
이 페이지는 어떤 방식으로도 공식 Docker 제품이 아닙니다.
이 페이지는 프로젝트 링크 목록이며 자원봉사자들이 관리합니다.
누구나 기여할 수 있습니다.
이 저장소의 목표는 오픈 소스 프로젝트를 색인하는 것이며, 영리 목적의 광고가 아닙니다.

> Docker는 개발자와 시스템 관리자가 분산 애플리케이션을 빌드하고, 배포하고, 실행할 수 있게 해 주는 개방형 플랫폼입니다. 이 플랫폼은 이식 가능하고 가벼운 런타임 및 패키징 도구인 Docker Engine과 앱 공유 및 워크플로 자동화를 위한 클라우드 서비스인 Docker Hub로 구성됩니다. Docker를 사용하면 구성 요소로부터 앱을 빠르게 조립할 수 있고 개발, QA, 프로덕션 환경 간의 마찰을 없앨 수 있습니다. 따라서 IT 팀은 더 빠르게 배포하고, 노트북이나 데이터 센터 VM, 어떤 클라우드에서도 변경 없이 동일한 앱을 실행할 수 있습니다.

_출처:_ [What is Docker](https://www.docker.com/why-docker/)

# 목차 <!-- omit in toc -->

<!-- TOC -->

- [프로젝트](#projects)
    - [엔진 및 런타임](#engine--runtime)
    - [이미지 빌드](#building-images)
        - [빌더](#builder)
        - [기반 이미지](#base-images)
        - [Dockerfile](#dockerfile)
        - [린터](#linter)
    - [이미지 수명 주기](#image-lifecycle)
        - [레지스트리](#registry)
        - [레지스트리 CLI](#registry-cli)
        - [이미지 스캔 및 SBOM](#image-scanning--sbom)
        - [공급망](#supply-chain)
    - [컨테이너 실행](#running-containers)
        - [구성](#composition)
        - [오케스트레이션](#orchestration)
        - [배포 및 플랫폼](#deployment--platforms)
        - [가비지 컬렉션](#garbage-collection)
    - [네트워킹 및 프록시](#networking--proxies)
        - [네트워킹](#networking)
        - [리버스 프록시](#reverse-proxy)
    - [스토리지 및 데이터](#storage--data)
    - [관측 가능성](#observability)
    - [보안](#security)
    - [사용자 인터페이스](#user-interfaces)
        - [데스크톱](#desktop)
        - [터미널](#terminal)
        - [웹](#web)
        - [IDE 통합](#ide-integrations)
    - [개발자 워크플로](#developer-workflow)
        - [API 클라이언트](#api-client)
        - [CI/CD](#cicd)
        - [개발 환경](#development-environment)
        - [서버리스](#serverless)
        - [테스트](#testing)
        - [래퍼](#wrappers)
    - [컨테이너 내부 도구](#in-container-tooling)
- [학습 자료](#learning-resources)
    - [시작하기](#where-to-start)
    - [시작하기 (Windows)](#where-to-start-windows)
    - [도서 및 튜토리얼](#books--tutorials)
    - [Awesome 목록](#awesome-lists)
    - [데모 및 예제](#demos-and-examples)
    - [유용한 팁](#good-tips)
    - [Raspberry Pi 및 ARM](#raspberry-pi--arm)
    - [보안 관련 글](#security-articles)
    - [동영상](#videos)
    - [커뮤니티 및 모임](#communities-and-meetups)
        - [브라질](#brazilian)
        - [영어](#english)
        - [러시아어](#russian)
        - [스페인어](#spanish)
- [시간에 따른 스타 수](#stargazers-over-time)

<!-- /TOC -->

# 프로젝트

## 공식 프로젝트

- [Moby](https://github.com/moby/moby)
- [Docker Hub](https://hub.docker.com)
- [Docker Compose](https://github.com/docker/compose/) - Docker로 다중 컨테이너 애플리케이션을 정의하고 실행합니다.
- [Docker Registry][distribution] - 콘텐츠를 패키징, 배포, 저장 및 전달하기 위한 Docker 도구 모음

## 엔진 및 런타임

- [colima](https://github.com/abiosoft/colima) - 최소한의 설정으로 macOS(및 Linux)에서 컨테이너 런타임을 제공합니다.
- [containerd](https://github.com/containerd/containerd) - 개방적이고 신뢰할 수 있는 컨테이너 런타임.
- [cri-o](https://github.com/cri-o/cri-o) - Kubernetes 컨테이너 런타임 인터페이스를 구현한 Open Container Initiative 기반 구현체.
- [gVisor](https://github.com/google/gvisor) - 컨테이너용 애플리케이션 커널.
- [lxc](https://github.com/lxc/lxc) - LXC - Linux Containers.
- [Mocker](https://github.com/us/mocker) - Apple의 Containerization 프레임워크를 기반으로 구축된 macOS용 Docker 호환 컨테이너 CLI.
- [podman](https://github.com/containers/libpod) - Libpod은 컨테이너 파드를 만드는 데 사용되는 라이브러리입니다. Podman의 본거지입니다.
- [runc](https://github.com/opencontainers/runc) - OCI 사양에 따라 컨테이너를 생성하고 실행하는 CLI 도구.
- [runtime-tools](https://github.com/opencontainers/runtime-tools) - OCI 런타임 사양 작업을 위한 도구 모음인 Oci-runtime-tool입니다.
- [youki](https://github.com/youki-dev/youki) - OCI 런타임 사양을 구현한 Rust 기반 컨테이너 런타임.

## 이미지 빌드

### 빌더

새 이미지를 빌드하는 데 도움을 주거나 빌드를 간소화하도록 설계된 애플리케이션

- [ansible-bender](https://github.com/ansible-community/ansible-bender) - `ansible`과 `buildah`를 활용하는 도구.
- [apko](https://github.com/chainguard-dev/apko) - apk 패키지로 OCI 이미지를 선언형으로 빌드하는 도구로, 재현성을 고려해 설계되었습니다.
- [buildah](https://github.com/containers/buildah) - OCI 이미지 빌드를 지원하는 도구.
- [BuildKit](https://github.com/moby/buildkit) - 동시성, 효율적인 캐시, Dockerfile 비종속성을 갖춘 빌더 도구 모음.
- [buildx](https://github.com/docker/buildx) - BuildKit 기반 다중 플랫폼 빌드용 공식 Docker CLI 플러그인.
- [cekit](https://github.com/cekit/cekit) - 여러 빌드 엔진을 사용해 기반 이미지를 빌드하는 openshift 도구.
- [dlayer](https://github.com/orisano/dlayer) - Docker 레이어 분석기.
- [docker-companion](https://github.com/mudler/docker-companion) - docker 이미지를 스쿼시하고 압축 해제하는 Golang 기반 명령줄 도구.
- [docker-repack](https://github.com/orf/docker-repack) - Docker 이미지를 더 작고 효율적인 버전으로 다시 패키징하여 풀 속도를 크게 높입니다.
- [DockerSlim](https://github.com/docker-slim/docker-slim) 가능한 가장 작은 이미지를 만들어 용량이 큰 Docker 이미지를 축소합니다.
- [earthly](https://github.com/earthly/earthly) - Dockerfile과 Makefile 문법을 결합한 컨테이너 기반 빌드 자동화 도구.
- [essex](https://github.com/utensils/essex) - Docker 기반 프로젝트용 보일러플레이트. Essex는 Makefile 중심 워크플로로 깔끔하고 일관된 Docker 프로젝트를 빠르게 설정하는 bash 기반 CLI 유틸리티입니다.
- [HPC Container Maker](https://github.com/NVIDIA/hpc-container-maker) - 고성능 컴퓨팅 구성 요소용 빌딩 블록을 포함해 상위 수준 Python 레시피에서 Dockerfile을 생성합니다.
- [img](https://github.com/genuinetools/img) - 독립 실행형, 데몬리스, 비특권 Dockerfile 및 OCI 호환 컨테이너 이미지 빌더.
- [ko](https://github.com/ko-build/ko) - Dockerfile 없이 Go 애플리케이션을 컨테이너 이미지로 빌드하고 배포합니다.
- [nix2container](https://github.com/nlewo/nix2container) - `docker load` 왕복 과정 없이 Nix로 OCI 이미지를 빌드합니다.
- [packer](https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/builder/docker) - Chef, Puppet, Ansible 등의 구성 관리 도구와 통합해 Docker 이미지 등 머신 이미지를 빌드하는 Hashicorp 도구.
- [Production-Ready Python Containers](https://pythonspeed.com/products/pythoncontainer/) - :yen: Python 앱용 프로덕션 준비 Docker 이미지를 만드는 템플릿.
- [RAUDI](https://github.com/cybersecsi/RAUDI) - 타사 소프트웨어의 새 릴리스/업데이트/커밋 때 Docker 이미지를 자동 업데이트하고(선택 시 Docker Hub에 푸시)하는 도구.
- [runlike](https://github.com/lavie/runlike) - 실행 중인 컨테이너에서 `docker run` 명령과 옵션을 생성합니다.
- [Whaler](https://github.com/P3GLEG/Whaler) - Docker 이미지를 역으로 분석해 Dockerfile을 만드는 프로그램.


### 기반 이미지

최소 구성, 보안 강화 또는 특정 목적에 맞게 제작된 컨테이너 기반 이미지.

- [Chainguard Images](https://github.com/chainguard-images/images) - Wolfi 기반으로 빌드된 최소 구성의 서명 및 SBOM 증명 컨테이너 이미지.
- [distroless](https://github.com/GoogleContainerTools/distroless) - 운영 체제를 제외하고 언어에 초점을 맞춘 docker 이미지.
- [melange](https://github.com/chainguard-dev/melange) - apko에서 사용할 선언형 YAML로 apk 패키지를 빌드합니다.
- [pglayers](https://github.com/pglayers/pglayers) - 조합 가능한 Docker 레이어 형태의 사전 빌드 PostgreSQL 확장 기능. 50개 이상의 확장 기능과 바로 사용할 수 있는 결합 이미지(full, Azure 호환)를 제공합니다.
- [Wolfi](https://github.com/wolfi-dev/os) - 컨테이너용으로 설계된 Undistro Linux. glibc 기반이며 서명된 일일 SBOM을 제공합니다.


### Dockerfile

- [Dockerfile Generator](https://github.com/ozankasikci/dockerfile-generator) `dfg`는 다양한 입력 방식을 사용해 유효한 Dockerfile을 생성하는 Go 라이브러리이자 실행 파일입니다.
- [Dockershelf](https://github.com/Dockershelf/dockershelf) - 범용적이고 효율적이며 슬림한 docker 레시피를 수집하는 저장소입니다. Travis cron 작업으로 이미지를 매일 업데이트, 테스트 및 게시합니다.
- [Dofigen](https://github.com/lenra-io/dofigen) - 간소화된 YAML 또는 JSON 형식의 설명을 사용해 Dockerfile을 생성합니다.
- [Trsuted Builds](https://dockerfile.github.io/) - 신뢰할 수 있는 자동화 Docker 빌드. Dockerfile 프로젝트는 Docker 컨테이너에서 실행 가능한 인기 오픈 소스 소프트웨어 서비스용 Dockerfile 중앙 저장소를 관리합니다.

### 린터

- [Dockadvisor](https://github.com/deckrun/dockadvisor) - 60개 이상의 규칙, 품질 점수 및 보안 검사를 제공하는 경량 Dockerfile 린터.
- [docker-image-size-limit](https://github.com/wemake-services/docker-image-size-limit) - docker 이미지 크기를 확인하는 도구.
- [Hadolint](https://github.com/hadolint/hadolint) - 모범 사례와 흔한 실수를 검사하고 `RUN` 명령에 작성된 bash도 린트할 수 있는 Dockerfile 린터.

## 이미지 수명 주기

### 레지스트리

Docker 이미지를 안전하게 저장하는 서비스.

- [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/) - :yen: 개발자가 Docker 컨테이너 이미지를 쉽게 저장, 관리 및 배포할 수 있는 완전 관리형 레지스트리인 Amazon Elastic Container Registry(ECR).
- [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/#overview) - :yen: Docker 프라이빗 레지스트리를 Azure의 일급 리소스로 관리합니다.
- [Cloudsmith](https://cloudsmith.com/product/formats/docker-registry) - :yen: 공개·비공개 Docker 레지스트리와 Kubernetes용 Helm 차트 등 다양한 형식을 지원하는 완전 관리형 패키지 관리 SaaS. 넉넉한 무료 티어를 제공하고 오픈 소스는 무료입니다.
- [Container Registry Service](https://container-registry.com/) - :yen: 팀과 조직을 위한 Harbor 기반 컨테이너 관리 서비스. 무료 티어는 비공개 저장소에 1GB를 제공합니다.
- [Cycle.io](https://cycle.io/) - :yen: 베어메탈 컨테이너 호스팅.
- [DigitalOcean](https://www.digitalocean.com/products/container-registry) - :yen: DigitalOcean Container Registry.
- [Docker Hub](https://hub.docker.com/) Docker Inc.가 제공합니다.
- [Docker Registry v2][distribution] - 콘텐츠를 패키징, 배포, 저장 및 전달하기 위한 Docker 도구 모음
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - P2P 기술 기반으로 효율적이고 안정적이며 안전한 파일 배포와 이미지 가속을 제공합니다.
- [GCP Artifact Registry](https://docs.cloud.google.com/artifact-registry/docs) - :yen: Google Cloud Platform에서 빠르고 비공개로 Docker 이미지를 저장합니다.
- [Gitea Container Registry](https://docs.gitea.com/usage/packages/container) - Gitea에 통합된 Docker 레지스트리로, 비공개 소규모 이미지 호스팅에 적합합니다.
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - Docker 이미지를 저장하고 관리하는 GitHub 솔루션으로 GitHub Actions와 긴밀하게 통합됩니다.
- [GitLab Container Registry](https://docs.gitlab.com/user/packages/container_registry/) - GitLab CI에서 이미지를 사용하는 데 초점을 둔 레지스트리.
- [Granite Registry](https://granite.so/products/docker-registry) - :yen: 비공개 Docker 이미지를 해당 워크로드와 함께 저장하며, 범위가 지정된 읽기 전용 및 읽기/쓰기 키를 제공합니다.
- [Harbor](https://github.com/goharbor/harbor) 오픈 소스 신뢰 기반 클라우드 네이티브 레지스트리 프로젝트로 콘텐츠 저장, 서명 및 스캔을 지원합니다. 복제, 사용자 관리, 액세스 제어 및 활동 감사를 지원합니다.
- [JFrog Artifactory](https://jfrog.com/artifactory/) - :yen: 아티팩트 저장소 관리자이며 비공개 Docker 레지스트리로도 사용할 수 있습니다.
- [kontain.me](https://github.com/imjasonh/kontain.me) - 가져올 때 이미지를 빌드하고 제공하는 온디맨드 컨테이너 이미지 레지스트리.
- [Kraken](https://github.com/uber/kraken) - Uber의 확장성이 뛰어난 P2P docker 레지스트리로 초당 TB 단위의 데이터를 배포할 수 있습니다.
- [NORA](https://github.com/getnora-io/nora) - Docker, Maven, npm, Cargo, PyPI를 하나의 32MB 바이너리로 지원하는 경량 다중 프로토콜 아티팩트 레지스트리. 풀스루 캐시, 웹 UI, Prometheus 메트릭, RBAC 인증을 제공합니다.
- [nscr](https://github.com/jhstatewide/nscr) - 실행과 유지 관리가 간편한 경량 독립형 컨테이너 레지스트리.
- [Quay.io](https://quay.io/) - :yen: 비공개 Docker 저장소를 위한 보안 호스팅.
- [Registryo](https://github.com/inmagik/registryo) - 온프레미스 docker 레지스트리용 UI 및 토큰 기반 인증 서버.
- [RepoFlow](https://www.repoflow.io) - PyPI, Maven, npm, Helm 등과 Docker를 지원하는 간단한 패키지 관리 플랫폼. 스마트 검색, 내장 Docker 이미지 스캔, 셀프 호스팅 및 클라우드용 무료 옵션을 제공합니다.
- [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) - 소프트웨어 공급망 전반의 바이너리와 빌드 아티팩트를 관리합니다.

### 레지스트리 CLI

OCI/Docker 레지스트리의 이미지를 검사, 복사, 조작하기 위한 데몬리스 명령줄 도구.

- [crane](https://github.com/google/go-containerregistry/tree/main/cmd/crane) - `go-containerregistry`의 경량 CLI로 레지스트리 이미지를 조작합니다.
- [go-containerregistry](https://github.com/google/go-containerregistry) - 컨테이너 레지스트리 작업용 Go 라이브러리 및 CLI 도구(`crane`, `gcrane`, `registry`).
- [oras](https://github.com/oras-project/oras) - 임의의 OCI 아티팩트를 OCI 레지스트리로 푸시하고 가져옵니다.
- [regctl](https://github.com/regclient/regclient) - 데몬리스 레지스트리 클라이언트로 OCI 이미지를 복사, 검사, 수정 및 서명합니다.
- [skopeo](https://github.com/containers/skopeo) - 원격 이미지 레지스트리에서 정보를 얻고, 이미지를 복사하고, 콘텐츠에 서명합니다.

### 이미지 스캔 및 SBOM

이미지 취약점 스캐너, SBOM 생성기 및 다이제스트 고정 도구. 상용 항목에는 `:yen:` 표시가 있습니다.

- [Anchor](https://github.com/SongStitch/anchor/) - Dockerfile 내부 종속성을 고정해 재현 가능한 빌드를 보장하는 도구.
- [Anchor Enterprise](https://anchore.com/) - :yen: 이미지의 CVE 취약점을 분석하고 사용자 지정 보안 정책에 따라 검사합니다.
- [BomLens](https://github.com/sktelecom/bomlens) - 컨테이너 이미지(및 소스, 바이너리, 펌웨어)를 스캔해 취약점, 라이선스, 고지 보고서가 포함된 CycloneDX SBOM을 생성합니다. 웹 UI가 포함된 단일 Docker 이미지로 제공됩니다.
- [Clair](https://github.com/quay/clair) - appc 및 docker 컨테이너의 취약점을 정적 분석하는 오픈 소스 프로젝트.
- [Docker Scout](https://github.com/docker/scout-cli) - SBOM 생성, 취약점 분석 및 정책 평가용 공식 Docker CLI.
- [Grype](https://github.com/anchore/grype) - 컨테이너 이미지, 파일 시스템 및 SBOM용 취약점 스캐너.
- [oscap-docker](https://github.com/OpenSCAP/openscap) - OpenSCAP은 Docker 컨테이너와 이미지를 스캔하는 oscap-docker 도구를 제공합니다.
- [pindock](https://github.com/deadnews/pindock) - Dockerfile 및 compose 파일의 Docker 이미지 다이제스트를 고정하고 업데이트합니다.
- [Syft](https://github.com/anchore/syft) - 컨테이너 이미지와 파일 시스템에서 소프트웨어 자재 명세서(SBOM)를 생성하는 CLI 도구 및 라이브러리.
- [Trivy](https://github.com/aquasecurity/trivy) - 컨테이너용 간단하고 포괄적인 Aqua Security 오픈 소스 취약점 스캐너(CI에 적합).

### 공급망

컨테이너 이미지 서명, 증명 및 출처 정보 도구.

- [cosign](https://github.com/sigstore/cosign) - OCI 아티팩트용 컨테이너 서명, 검증 및 투명성 로그.
- [in-toto](https://github.com/in-toto/in-toto) - 공급망 증명 프레임워크로 SLSA 및 cosign provenance의 기반이 됩니다.
- [policy-controller](https://github.com/sigstore/policy-controller) - 컨테이너 이미지의 cosign 서명을 강제하는 Kubernetes 승인 컨트롤러.
- [witness](https://github.com/in-toto/witness) - 빌드 파이프라인 전반에서 in-toto 증명을 생성하고 검증합니다.

## 컨테이너 실행

### 구성

- [Composerize](https://github.com/magicmark/composerize) - docker run 명령을 docker-compose 파일로 변환합니다.
- [ctk](https://github.com/ctk-hq/ctk) - 컨테이너 기반 워크로드를 위한 시각적 구성 도구.
- [kompose](https://github.com/kubernetes/kompose) - Docker Compose에서 Kubernetes로 전환합니다.
- [plash](https://github.com/ihucos/plash) - docker 내부에서 실행되는 컨테이너 실행 및 빌드 엔진.
- [podman-compose](https://github.com/containers/podman-compose) - podman으로 docker-compose.yml을 실행하는 스크립트.
- [Smalte](https://github.com/roquie/smalte) – docker 컨테이너에서 정적 구성이 필요한 앱을 동적으로 구성합니다.

### 오케스트레이션

- [CloudSlang](https://github.com/CloudSlang/cloud-slang) - Docker 프로세스 자동화를 위한 워크플로 엔진.
- [docker rollout](https://github.com/Wowu/docker-rollout) - Docker Compose 서비스를 위한 무중단 배포.
- [Kubernetes](https://github.com/kubernetes/kubernetes) - Google의 Docker 컨테이너용 오픈 소스 오케스트레이션 시스템.
- [Mesos](https://github.com/apache/mesos) - 컨테이너, VM 및 물리 호스트용 리소스/작업 스케줄러.
- [Nebula](https://github.com/nebula-orchestrator) - 대규모 분산 클러스터 관리용 Docker 오케스트레이션 도구.
- [Nomad](https://github.com/hashicorp/nomad) - 모든 규모에서 애플리케이션을 쉽게 배포할 수 있는 분산형·고가용성·데이터센터 인식형 스케줄러.
- [Rancher](https://github.com/rancher/rancher) - 프로덕션 환경에서 Docker 운영에 필요한 완전한 플랫폼을 제공하는 오픈 소스 프로젝트.
- [Swarm-cronjob](https://github.com/crazy-max/swarm-cronjob) - Swarm에서 시간 기반 일정에 따라 작업을 생성합니다.

### 배포 및 플랫폼

셀프 호스팅 및 관리형 클라우드 플랫폼(PaaS/CaaS, 배포 자동화). 상용 항목에는 `:yen:` 표시가 있습니다.

- [Amazon ECS](https://aws.amazon.com/ecs/) - :yen: Docker 컨테이너를 지원하는 EC2 관리 서비스.
- [Appfleet](https://appfleet.com/) - :yen: 컨테이너화된 서비스를 전 세계에 배포·관리하며, 지연 시간을 줄이기 위해 가장 가까운 위치로 트래픽을 전달합니다.
- [Azure AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/) - :yen: 완전 관리형 Kubernetes 컨테이너 오케스트레이션 서비스.
- [blackfish](https://gitlab.com/blackfish/blackfish) - 개발 및 프로덕션용 Swarm 클러스터를 구축하는 CoreOS VM.
- [BosnD](https://gitlab.com/n0r1sk/bosnd) - 동적으로 변화하는 컨테이너 환경을 위한 구성 파일 작성기 및 서비스 리로더인 BosnD(boatswain daemon).
- [caprover](https://github.com/caprover/caprover) - [이전 이름 CaptainDuckDuck] 자동화된 확장형 웹 서버 패키지(자동화 Docker+nginx) - 스테로이드를 맞은 Heroku.
- [Cloud 66](https://www.cloud66.com) - :yen: 풀스택 호스팅 컨테이너 관리 서비스.
- [Cloud Run Compose](https://docs.cloud.google.com/run/docs/deploy-run-compose) - :yen: `docker-compose.yaml` 파일을 관리형 서비스인 Google Cloud Run에 직접 배포합니다.
- [Convox Rack](https://github.com/convox/rack) - 인프라 자동화 및 DevOps 모범 사례를 기반으로 구축된 오픈 소스 PaaS.
- [docker-to-iac](https://github.com/deploystackio/docker-to-iac) - docker run 및 commit을 AWS, Render.com, DigitalOcean용 Infrastructure as Code 템플릿으로 변환합니다.
- [doco-cd](https://github.com/kimdre/doco-cd) - 폴링과 웹훅으로 Docker Compose 프로젝트와 Swarm 스택을 배포하는 경량 GitOps 및 지속적 배포 도구.
- [Dokku](https://github.com/dokku/dokku) - 애플리케이션 빌드와 수명 주기 관리를 돕는 Docker 기반 미니-Heroku.
- [Exoframe](https://github.com/exoframejs/exoframe) - Docker를 사용해 단일 명령으로 간단히 배포하는 셀프 호스팅 도구.
- [Giant Swarm](https://www.giantswarm.io/) - :yen: 간단한 마이크로서비스 인프라. 컨테이너를 몇 초 만에 배포합니다.
- [Google Container Engine](https://docs.cloud.google.com/kubernetes-engine/docs) - :yen: [Kubernetes][kubernetes] 기반의 Google Cloud Computing에서 Docker 컨테이너를 실행합니다.
- [Grafeas](https://github.com/grafeas/grafeas) - 이미지 및 빌드 세부 정보부터 보안 취약점까지 컨테이너 메타데이터를 위한 공통 API.
- [Mesosphere DC/OS Platform](https://d2iq.com/products/dcos) - :yen: Apache Mesos 기반 데이터 및 컨테이너 통합 플랫폼.
- [OpenRun](https://github.com/openrundev/openrun) - Docker 또는 Kubernetes로 웹 앱을 빌드·배포·프록시·인증하고 자동 일시 중지합니다.
- [OpenShift][openshift] - [Kubernetes][kubernetes] 기반 오픈 소스 PaaS로, [Red Hat](https://www.redhat.com/en)이 Docker화된 앱 개발 및 배포에 최적화했습니다.
- [Red Hat OpenShift Dedicated](https://www.redhat.com/en/technologies/cloud-computing/openshift/dedicated) - :yen: Amazon Web Services 및 Google Cloud의 완전 관리형 Red Hat® OpenShift® 서비스.
- [swarm-ansible](https://github.com/LombardiDaniel/swarm-ansible?tab=readme-ov-file) - Ansible을 사용해 프로덕션용 Swarm 클러스터를 구성합니다. CI 자동화, 모니터링, SSL 인증서 및 간단한 인증이 사전 구성된 traefik, 비공개 레지스트리 등을 제공합니다.
- [SwarmManagement](https://github.com/hansehe/SwarmManagement) - pip로 설치하는 Python 앱입니다. 배포할 스택과 생성할 네트워크·구성·시크릿을 설명하는 단일 yaml 파일로 Docker Swarm을 쉽게 관리합니다.
- [Triton](https://www.joyent.com/) - :yen: 탄력적인 컨테이너 네이티브 인프라.
- [Tsuru](https://github.com/tsuru/tsuru) - 확장 가능하고 오픈 소스인 서비스형 플랫폼 소프트웨어.
- [werf](https://github.com/werf/werf) - GitOps를 사용해 Docker 이미지를 효율적으로 빌드하고 Kubernetes에 배포하는 CI/CD 도구.

### 가비지 컬렉션

- [docker-custodian](https://github.com/Yelp/docker-custodian) - docker 호스트를 깔끔하게 유지합니다.
- [Docuum](https://github.com/stepchowfun/docuum) - 가장 오랫동안 사용되지 않은(LRU) Docker 이미지를 제거합니다.

## 네트워킹 및 프록시

### 네트워킹

컨테이너 네트워킹, 오버레이 네트워크, DNS/서비스 검색 브리지.

- [Calico][calico] - 여러 docker 호스트에 있는 컨테이너가 서로 통신할 수 있게 하는 순수한 3계층 가상 네트워크입니다.
- [docker-dns](https://github.com/bytesharky/docker-dns) - Docker 컨테이너용 경량 DNS 전달자로, 사용자 지정 접미사(예: `.docker`)로 호스트에서 컨테이너 이름을 확인해 서비스 검색을 간소화합니다.
- [Flannel](https://github.com/coreos/flannel/) - 컨테이너 런타임에서 사용할 수 있도록 각 호스트에 서브넷을 제공하는 가상 네트워크.
- [netshoot](https://github.com/nicolaka/netshoot) - Docker 네트워킹 문제 해결을 돕는 강력한 네트워킹 도구 모음이 포함된 컨테이너.
- [Pipework](https://github.com/jpetazzo/pipework) - Linux 컨테이너용 소프트웨어 정의 네트워킹. 일반 LXC 컨테이너와 Docker에서 작동합니다.
- [registrator](https://github.com/gliderlabs/registrator) - Docker용 서비스 레지스트리 브리지.

### 리버스 프록시

컨테이너 인식 리버스 프록시, 인그레스, 자동 검색 기능을 갖춘 TLS 종료 프런트엔드.

- [BunkerWeb](https://github.com/bunkerity/bunkerweb) - 오픈 소스 차세대 웹 애플리케이션 방화벽(WAF).
- [caddy-docker-proxy](https://github.com/lucaslorentz/caddy-docker-proxy) - 서비스 또는 컨테이너 레이블로 구성하는 Caddy 기반 리버스 프록시.
- [caddy-docker-upstreams](https://github.com/invzhi/caddy-docker-upstreams) - 컨테이너 레이블로 구성하는 Caddy용 Docker 업스트림 모듈.
- [Docker Dnsmasq Updater](https://github.com/moonbuggy/docker-dnsmasq-updater) - 원격 dnsmasq 서버의 Docker 컨테이너 호스트 이름을 업데이트합니다.
- [docker-flow-proxy](https://github.com/docker-flow/docker-flow-proxy) - 새 서비스 배포 또는 서비스 규모 변경 때마다 프록시를 재구성합니다.
- [Let's Encrypt Nginx-proxy Companion](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) - nginx-proxy용 경량 보조 컨테이너로 Let's Encrypt 인증서를 자동 생성·갱신합니다.
- [mesh-router](https://github.com/Yundera/mesh-router) - Docker 컨테이너용 무료 도메인(nsl.sh) 제공업체이며 자동 HTTPS 라우팅을 지원합니다. Wireguard VPN으로 네트워크 간 서브도메인 요청을 안전하게 라우팅합니다. 셀프 호스팅 NAS 및 클라우드 배포에 적합합니다.
- [Nginx Proxy Manager](https://github.com/jc21/nginx-proxy-manager) - SSL을 사용해 웹 기반 서비스를 프록시하는 세련된 웹 인터페이스.
- [nginx-proxy][nginxproxy] - docker-gen으로 Docker 컨테이너용 nginx 프록시를 자동화합니다.
- [OpenResty Manager](https://github.com/Safe3/openresty-manager) - 사용하기 쉽고 강력하며 아름다운 OpenResty 관리자(Nginx 강화 버전), OpenResty Edge의 오픈 소스 대안.
- [Swarm Router](https://github.com/flavioaiello/swarm-router) - 새롭고 더 안전한 접근 방식을 적용한 Docker Swarm 모드용 제로 구성 서비스 이름 기반 라우터.
- [Træfɪk](https://github.com/containous/traefik) - Docker, Mesos, Consul, Etcd용 자동화 리버스 프록시 및 로드 밸런서.

## 스토리지 및 데이터

- [Docker Volume Backup](https://github.com/offen/docker-volume-backup) Docker 볼륨을 로컬 또는 S3 호환 스토리지에 백업합니다.
- [Label Backup](https://github.com/resulgg/label-backup) - Docker 레이블로 PostgreSQL, MySQL, MongoDB, Redis 등의 컨테이너 데이터베이스를 자동 검색하고 백업하는 에이전트. 로컬 및 S3 호환 저장소와 cron 기반 예약을 지원합니다.
- [Netshare](https://github.com/ContainX/docker-volume-netshare) Docker NFS, AWS EFS, Ceph 및 Samba/CIFS 볼륨 플러그인.
- [portworx](https://portworx.com) - :yen: 영구 공유 복제 볼륨용 분산 스토리지 솔루션.
- [quobyte](https://www.quobyte.com/) - :yen: Docker 볼륨 드라이버를 포함한 완전한 내결함성 분산 파일 시스템.
- [resq](https://github.com/mashb1t/resq) - 컨테이너 중지 여부와 관계없이 볼륨, 데이터베이스 및 .env 파일을 Restic으로 백업합니다. 로컬, SSH 및 S3 호환 스토리지를 지원합니다.
- [REX-Ray](https://github.com/rexray/rexray) 벤더에 종속되지 않는 스토리지 오케스트레이션 엔진을 제공합니다. Docker, Kubernetes 및 Mesos에 영구 스토리지를 제공하도록 설계되었습니다.

## 관측 가능성

Docker 호스트와 컨테이너 및 그 안에서 실행되는 서비스를 모니터링합니다. 셀프 호스팅과 SaaS를 함께 다루며 상용 항목에는 `:yen:` 표시가 있습니다.

- [ADRG](https://github.com/jaldertech/adrg) - cgroups v2로 시스템 부하를 관리하는 동적 Docker 리소스 관리자.
- [AppDynamics](https://github.com/Appdynamics/docker-monitoring-extension) - :yen: Unix Socket 또는 TCP를 통해 Docker Remote API에서 메트릭을 수집하는 모니터링 확장 기능.
- [Autoheal](https://github.com/willfarrell/docker-autoheal) - 비정상 Docker 컨테이너를 모니터링하고 자동으로 다시 시작합니다.
- [Better Stack](https://betterstack.com/community/guides/scaling-docker/) - :yen: 컨테이너 앱을 위한 로그 집계 및 가동 시간 모니터링을 제공하는 Docker 호환 관측 스택.
- [cAdvisor](https://github.com/google/cadvisor) - 실행 중 컨테이너의 리소스 사용량과 성능 특성을 분석합니다.
- [Datadog](https://www.datadoghq.com/) - :yen: Docker, Kubernetes, Mesos를 우선 지원하는 풀스택 모니터링 서비스.
- [DLIA](https://github.com/zorak1103/dlia) - 대규모 언어 모델(LLM)로 컨테이너 로그를 분석하고 이상을 감지하며 시간에 따른 맥락 정보를 제공하는 AI 기반 Docker 로그 모니터링 에이전트.
- [docker-exporter](https://github.com/dlepaux/docker-exporter) - Rust 기반 Docker 메트릭용 경량 Prometheus 익스포터. ARM64(Raspberry Pi 5)에서 cgroup v2 메모리 working set을 정확히 지원하고, 읽기 전용 소켓으로 비루트 실행되며 유휴 RAM은 약 7 MiB입니다.
- [Docker-Sentinel](https://github.com/Will-Luck/Docker-Sentinel) - 컨테이너별 정책, 안전한 롤백 및 실시간 웹 대시보드를 갖춘 자동 컨테이너 업데이트.
- [DockProbe](https://github.com/deep-on/dockprobe) - 단일 컨테이너로 실행되는 경량 Docker 모니터링 대시보드. 실시간 메트릭, 6가지 이상 감지 규칙, Telegram 알림 및 16가지 자동 보안 검사를 제공합니다. 설정 없이 약 50MB RAM을 사용합니다.
- [DockProc](https://gitlab.com/n0r1sk/dockproc) - 프로세스 수준 컨테이너 I/O 모니터링.
- [dockprom](https://github.com/stefanprodan/dockprom) - Prometheus, Grafana, cAdvisor, NodeExporter, AlertManager를 사용해 Docker 호스트와 컨테이너를 모니터링합니다.
- [Doku](https://github.com/amerkurev/doku) - Docker 디스크 사용량을 모니터링하는 간단한 웹 애플리케이션.
- [Dozzle](dozzle) - 브라우저나 모바일 기기에서 컨테이너 로그를 실시간 모니터링합니다.
- [Drydock](https://github.com/CodesWhat/drydock) - 웹 대시보드, 23개 레지스트리 제공업체, 20개 알림 트리거 및 분산 에이전트 아키텍처를 갖춘 컨테이너 업데이트 모니터링.
- [Dynatrace](https://docs.dynatrace.com/docs/observe/infrastructure-observability/container-platform-monitoring) - :yen: 에이전트를 설치하거나 Run 명령을 수정하지 않고 컨테이너 앱을 모니터링합니다.
- [Grafana Docker Dashboard Template](https://grafana.com/grafana/dashboards/179-docker-prometheus-monitoring/) - Docker, Grafana, Prometheus 스택용 템플릿.
- [InfraCanvas](https://github.com/bytestrix/InfraCanvas) - 모든 Linux 서버의 컨테이너, 파드, 볼륨, 네트워크를 실시간 시각화합니다. 단일 바이너리이며 WebSocket으로 실시간 업데이트를 제공합니다.
- [Maintenant](https://github.com/kolapsis/maintenant) - Docker와 Kubernetes용 자동 검색 인프라 모니터링. 레이블 기반 컨테이너 감지, 엔드포인트 모니터링, 하트비트, TLS 인증서, 리소스 메트릭, 업데이트 정보 및 내장 상태 페이지를 제공합니다. SPA가 포함된 단일 바이너리입니다.
- [Middleware](https://middleware.io/) - :yen: 통합 관측 플랫폼에서 Docker 호스트, 컨테이너, 로그 및 앱 성능을 모니터링합니다.
- [Site24x7](https://www.site24x7.com/docker-monitoring.html) - :yen: DevOps 및 IT용 Docker 모니터링 SaaS, 호스트당 과금 모델.
- [Sysdig Monitor](https://www.sysdig.com/products/monitor) - :yen: 시스템 호출을 사용해 컨테이너를 모니터링하고 경고하며 문제를 해결하는 소프트웨어 또는 SaaS. Docker 및 Kubernetes용 기능을 제공합니다.
- [Wiremap](https://github.com/codeofmario/wiremap) - 실시간 로그, 통계, 내장 터미널 및 컨테이너 검사를 지원하는 셀프 호스팅 시각적 Docker 네트워크 토폴로지 탐색기.

## 보안

컨테이너 강화, 런타임 보안, 정책, 규정 준수 및 포렌식. 셀프 호스팅과 상용 항목을 함께 다루며 상용 항목에는 `:yen:` 표시가 있습니다.

- [Aqua Security](https://www.aquasec.com) - :yen: 어떤 플랫폼에서든 개발부터 프로덕션까지 컨테이너 기반 앱을 보호합니다.
- [buildcage](https://github.com/dash14/buildcage) - 공급망 공격 방지를 위해 Docker 빌드 중 아웃바운드 네트워크 액세스를 제한합니다. Buildx용 BuildKit 원격 드라이버로 작동하며 GitHub Actions를 제공합니다.
- [CetusGuard](https://github.com/hectorm/cetusguard) - Docker 데몬 소켓의 API 호출을 필터링해 소켓을 보호하는 도구.
- [Checkov](https://github.com/bridgecrewio/checkov) - Terraform, Kubernetes, Cloudformation, Helm, Dockerfile, Kustomize 등의 인프라 코드 매니페스트를 정적 분석해 보안 설정 오류를 찾고 수정합니다.
- [compose-lint](https://github.com/tmatens/compose-lint) - 권한 과다 컨테이너, 고정되지 않은 이미지, Docker 소켓 마운트, 평문 자격 증명 등 Compose 파일의 보안 오류를 OWASP 및 CIS Docker Benchmark 기준으로 검사합니다.
- [container-explorer](https://github.com/google/container-explorer) - 마운트된 디스크 이미지에서 Docker 및 containerd 컨테이너 정보를 탐색하는 포렌식 유틸리티.
- [Deepfence Threat Mapper](https://github.com/deepfence/ThreatMapper) - Kubernetes, 가상 머신 및 서버리스용 런타임 취약점 스캐너.
- [Den](https://github.com/us/den) - Docker 컨테이너, 보안 강화, REST API 및 WebSocket을 지원하는 AI 에이전트용 셀프 호스팅 샌드박스 런타임.
- [docker-bench-security](https://github.com/docker/docker-bench-security) - 프로덕션 Docker 컨테이너 배포 시 일반 모범 사례 수십 가지를 점검하는 스크립트.
- [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy) - Docker API 소켓용 HAProxy 기반 세밀한 필터. 리버스 프록시 및 홈랩 스택에 제한된 소켓을 노출할 때 널리 사용됩니다.
- [KICS](https://github.com/checkmarx/kics) - 개발 초기에 보안 취약점, 규정 준수 문제 및 인프라 설정 오류를 찾는 IaC 스캐너. 추가 정책으로 확장할 수 있습니다.
- [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) - :yen: (이전 Twistlock Security Suite) 앱 수명 주기 전반에서 취약점을 탐지하고 이미지를 강화하며 보안 정책을 적용합니다.
- [segspec](https://github.com/dormstern/segspec) - Compose, Kubernetes 매니페스트, Helm 차트 및 다른 구성에서 네트워크 종속성을 추출해 근거 추적이 가능한 Kubernetes NetworkPolicies를 생성합니다.
- [Sysdig Falco](https://github.com/falcosecurity/falco) - 오픈 소스 컨테이너 보안 모니터입니다. 앱, 컨테이너, 호스트, 네트워크 활동을 모니터링하고 무단 활동을 경고합니다.
- [Sysdig Secure](https://www.sysdig.com/solutions/cloud-detection-and-response-cdr) - :yen: 동작 모니터링과 방어로 런타임 보안을 제공하고, 사고 대응을 위한 오픈 소스 Sysdig 기반 심층 포렌식을 지원합니다.
- [Trend Micro DeepSecurity](https://www.trendmicro.com/en_us/business/products/hybrid-cloud/deep-security.html) - :yen: 컨테이너 워크로드와 호스트에 런타임 보호를 제공하고, 이미지 사전 스캔으로 취약점, 악성코드 및 하드코딩된 시크릿을 식별합니다.

## 사용자 인터페이스

### 데스크톱

Docker 호스트와 클러스터를 관리하고 모니터링하는 네이티브 데스크톱 애플리케이션

- [Docker DB Manager](https://github.com/AbianS/docker-db-manager) - 시각적 인터페이스와 원클릭 작업으로 Docker 데이터베이스 컨테이너를 관리하는 데스크톱 앱.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - 공식 네이티브 앱. Windows 및 MacOS 전용.
- [Gantry (Desktop)](https://github.com/getgantry/gantry) - Docker 호스트를 로컬 또는 SSH를 통해 관리·모니터링하는 네이티브 macOS 앱(SwiftUI, Electron 미사용). 플릿 대시보드, 실시간 로그와 통계, exec 터미널, 파일 브라우저, AI 에이전트용 내장 MCP 서버를 제공합니다.
- [Simple Docker UI](https://github.com/felixgborrego/simple-docker-ui) - Electron 기반.
- [Stevedore](https://github.com/slonopotamus/stevedore) - Windows용 Docker Desktop 대체 프로그램. Linux 및 Windows 컨테이너를 모두 지원합니다. [slonopotamus](https://github.com/slonopotamus).

### 터미널

Docker용 TUI, CLI 도구 및 셸 통합.

- [bosun](https://github.com/psychedelicdevx/bosun) - Compose 프로젝트 그룹화, 실시간 로그, 통계 및 셸 액세스를 제공하는 키보드 중심 Docker 터미널 UI.
- [d4s](https://github.com/jr-k/d4s) - K9s와 같은 사용성을 갖춘 빠른 키보드 중심 TUI로 Docker 컨테이너, Compose 스택 및 Swarm 서비스를 관리합니다.
- [dcinja](https://github.com/Falldog/dcinja) - docker 명령줄 환경용 강력하고 바이너리 크기가 작은 템플릿 엔진.
- [dctl](https://github.com/FabienD/docker-stack) - Dctl은 개발자가 터미널 어디서나 모든 docker compose 명령 등을 실행하도록 돕는 CLI 도구입니다.
- [decompose](https://github.com/s0rg/decompose) - docker 환경을 역공학하는 도구.
- [dive](https://github.com/wagoodman/dive) - docker 이미지의 각 레이어를 탐색하는 도구.
- [docker pushrm](https://github.com/christian-korneck/docker-pushrm) - 현재 디렉터리의 README.md를 Docker Hub로 푸시하는 Docker CLI 플러그인. Quay와 Harbor도 지원합니다.
- [docker-captain](https://github.com/lucabello/docker-captain) - Typer, Rich, questionary 및 sh로 구동되는 여러 Docker Compose 배포 관리용 친근한 CLI.
- [dockerfile-mode](https://github.com/spotify/dockerfile-mode) - Dockerfile 처리를 위한 Emacs 모드.
- [dockerfilegraph](https://github.com/patrickhoefler/dockerfilegraph) - 다중 단계 Dockerfile을 시각화합니다.
- [dockly](https://github.com/lirantal/dockly) - Docker 컨테이너 관리용 대화형 셸 UI.
- [DockMate](https://github.com/shubh-io/dockmate) - 텍스트 UI를 갖춘 경량 터미널 기반 Docker 및 Podman 관리자.
- [DockSTARTer](https://github.com/GhostWriters/DockSTARTer) - DockSTARTer는 Docker로 실행되는 홈 서버 앱을 시작하도록 도와줍니다.
- [DockTUI](https://github.com/strmax195-hue/docktui) - 빠르고 종속성 없는 Docker 및 Compose 터미널 대시보드.
- [dockup](https://github.com/paulo-amaral/dockup) - Docker Engine + Compose v2, NVIDIA Container Toolkit, Podman, Apple container 등을 설치·강화·유지 관리하는 TUI. CIS 기반 보안 감사를 제공합니다.
- [dprs](https://github.com/durableprogramming/dprs) - 실시간 로그 스트리밍과 컨테이너 관리를 제공하는 개발자 중심 TUI.
- [dry](https://github.com/moncho/dry) - Docker 컨테이너용 대화형 CLI.
- [easydocker](https://github.com/joao-zanutto/easydocker) - k9s에서 영감을 받은 터미널 UI로 아름다운 BubbleTea 그래픽을 제공합니다.
- [goManageDocker](https://github.com/ajayd-san/gomanagedocker) - 감각적인 키 바인딩과 VIM 탐색을 지원하며 docker 객체를 빠르게 확인·관리하는 TUI 도구.
- [layerx](https://github.com/deveshctl/layerx) - TUI에서 컨테이너 이미지 레이어를 검사합니다. 파일 시스템 차이 탐색, 파일 내용 인라인 확인, 크기순 정렬, 파일 추출 및 효율성 임계값 기반 CI 차단을 지원합니다. Docker, Podman, OCI 아카이브를 지원합니다.
- [lazydocker](https://github.com/jesseduffield/lazydocker) - docker의 모든 것을 쉽게 관리하는 방법. gocui 라이브러리로 Go에서 작성된 docker 및 docker-compose용 간단한 터미널 UI.
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - [Dozzle](dozzle)처럼 Docker 및 Podman 컨테이너 로그를 읽고 필터링하는 터미널 인터페이스로 퍼지 검색, 정규식 및 출력 색상 지정을 지원합니다.
- [oxker](https://github.com/mrjackwills/oxker) - docker 컨테이너를 확인하고 제어하는 간단한 TUI.
- [proco](https://github.com/shiwaforce/poco) - 간단한 YAML 구성으로 복잡한 Docker, Docker-Compose, Kubernetes 프로젝트를 구성·관리해 로컬 환경에서 초기화하기까지의 과정을 단축합니다.
- [scuba](https://github.com/JonathonReinhart/scuba) - 소프트웨어 빌드 환경을 캡슐화하도록 Docker 컨테이너를 투명하게 사용합니다.
- [supdock](https://github.com/segersniels/supdock) - 대화형 프롬프트를 통해 Docker를 좀 더 시각적으로 사용할 수 있습니다.
- [swarmcli](https://github.com/Eldara-Tech/swarmcli) - 실시간 로그, 즉각적인 컨테이너 셸 액세스, 포트 포워딩, 필요 시 시크릿 공개 기능으로 Docker Swarm을 제어합니다.
- [tdocker](https://github.com/pivovarit/tdocker) - 일상적인 컨테이너 작업용 `docker ps` 대체 도구.
- [wharf](https://github.com/idesyatov/wharf) - Docker Compose용 k9s 스타일 TUI. vim 탐색, 점자 차트 기반 CPU/MEM 모니터링, 파일 브라우저, SSH 원격 호스트 및 명령 모드를 제공합니다.

### 웹

- [Arcane](https://github.com/getarcaneapp/arcane) - 누구나 쉽게 사용할 수 있도록 만든 현대적인 Docker 관리 플랫폼.
- [CASA](https://github.com/knrdl/casa) - 소수의 컨테이너 관리 업무를 동료에게 맡깁니다.
- [Container Web TTY](https://github.com/wrfly/container-web-tty) - 웹 터미널을 통해 컨테이너에 연결합니다.
- [Docker Commander](https://github.com/koduj-dev/docker-commander) - 다중 호스트, Compose 관리, 통합 로그, 경고, RBAC, 취약점 스캔 및 MCP 통합을 갖춘 셀프 호스팅 Docker 관리·모니터링 UI.
- [Docker Registry Browser](https://github.com/klausmeyer/docker-registry-browser) - Docker Registry HTTP API v2용 웹 인터페이스.
- [docker-swarm-visualizer](https://github.com/dockersamples/docker-swarm-visualizer) - Docker Swarm의 Docker 서비스를 시각화합니다(데모 실행용).
- [dockge](https://github.com/louislam/dockge) - 사용하기 쉽고 반응성이 뛰어난 셀프 호스팅 docker compose.yaml 스택 관리자.
- [DockScope](https://github.com/ManuelR-T/dockscope) - 실시간 메트릭, 로그 및 브라우저 내 터미널을 포함한 3D 종속성 그래프로 Docker 컨테이너를 시각화합니다.
- [Komodo](https://github.com/mbecker20/komodo) - 여러 서버에 소프트웨어를 빌드하고 배포하는 도구.
- [Portainer](https://github.com/portainer/portainer) - Docker 호스트 또는 Docker Swarm 클러스터용 경량 관리 UI.
- [Swarmpit](https://github.com/swarmpit/swarmpit) - Docker Swarm 클러스터용 간단하고 사용하기 쉬운 인터페이스. 스택, 서비스, 시크릿, 볼륨, 네트워크 등을 관리할 수 있습니다.
- [usulnet](https://github.com/fr4nsys/usulnet) - 시스템 관리자와 DevOps를 위한 완전하고 현대적인 Docker 관리 플랫폼. 엔터프라이즈급 도구, CVE 스캐너, 웹 SSH/RDP 등을 제공합니다.

### IDE 통합

- JetBrains IDE(IntelliJ IDEA, GoLand, WebStorm, CLion 등)에는 [기본 제공 Docker 플러그인](https://www.jetbrains.com/help/idea/docker.html#managing-images)이 있습니다.
- Eclipse의 [Docker Tooling 플러그인](https://www.eclipse.org/community/eclipse_newsletter/2016/july/article2.php)
- [docker.el](https://github.com/Silex/docker.el) Emacs에서 docker를 관리합니다.

## 개발자 워크플로

### API 클라이언트

- [contajners](https://github.com/lispyclouds/contajners) - OCI 컨테이너 엔진용 관용적이고 데이터 중심이며 REPL 친화적인 Clojure 클라이언트.
- [Docker Client for JVM](https://github.com/gesellix/docker-client) - Groovy로 작성된 JVM용 Docker 원격 API 클라이언트 라이브러리.
- [Docker Client TypeScript](https://gitlab.com/masaeedu/docker-client) - moby 저장소의 Swagger API 정의에서 자동 생성된 JavaScript용 Docker API 클라이언트.
- [docker-controller-bot](https://github.com/dgongut/docker-controller-bot) - Docker 컨테이너 제어용 Telegram 봇.
- [docker-maven-plugin](https://github.com/fabric8io/docker-maven-plugin) - Docker 이미지를 실행하고 생성하는 Maven 플러그인.
- [Docker.DotNet](https://github.com/Microsoft/Docker.DotNet) - Docker 원격 API용 C#/.NET HTTP 클라이언트.
- [Docker.Registry.DotNet](https://github.com/ChangemakerStudios/Docker.Registry.DotNet) - Docker Registry API(v2)와 상호작용하는 .NET(C#) 클라이언트 라이브러리.
- [dockerode](https://github.com/apocas/dockerode) - Docker Remote API용 node.js 모듈.
- [go-dockerclient](https://github.com/fsouza/go-dockerclient/) - Docker 원격 API용 Go HTTP 클라이언트.
- [Gradle Docker plugin](https://github.com/gesellix/gradle-docker-plugin) - Gradle용 Docker 원격 API 플러그인.
- [Portainer stack utils](https://github.com/greenled/portainer-stack-utils) - docker-compose yaml 파일을 이용해 Portainer 인스턴스의 Docker 스택을 배포·업데이트·삭제하는 Bash 스크립트.
- [sbt-docker](https://github.com/marcuslonnberg/sbt-docker) - sbt에서 직접 Docker 이미지를 생성합니다.

### CI/CD

Docker 워크플로를 대상으로 하는 셀프 호스팅 CI 엔진, 빌드 가속기 및 호스팅 서비스. 상용 항목에는 `:yen:` 표시가 있습니다.

- [Buddy](https://buddy.works) - :yen: Git, 빌드 및 배포 도구를 하나로 결합해 개발을 가속하는 강력한 도구.
- [Captain](https://github.com/harbur/captain) - Git 워크플로를 지속적 배포용 Docker 컨테이너로 변환합니다.
- [CircleCI](https://circleci.com/) - :yen: 빌드 환경에서 Docker 이미지를 푸시·풀하거나 CircleCI에서 컨테이너를 직접 빌드·실행합니다.
- [CodeFresh](https://octopus.com/codefresh) - :yen: 자동화된 테스트와 함께 Docker 앱의 빌드, 테스트 및 공유를 처음부터 끝까지 지원합니다.
- [ConcourseCI](https://concourse-ci.org) - :yen: DevOps 팀용 파이프라인 중심 CI SaaS 플랫폼.
- [Defang](https://github.com/DefangLabs/defang) - Docker Compose를 원하는 클라우드에 몇 분 만에 배포합니다.
- [Depot](https://depot.dev) - :yen: 클라우드에서 Docker 이미지를 빠르게 빌드합니다. 초고속 컴퓨팅, 자동 지능형 캐싱, 무구성을 제공합니다.
- [Diun](https://github.com/crazy-max/diun) - Docker 레지스트리의 이미지 또는 저장소가 업데이트될 때 알림을 받습니다.
- [dockcheck](https://github.com/mag37/dockcheck) - 이미지를 풀지 않고 업데이트를 확인해 선택한 컨테이너 또는 전체 컨테이너를 자동 업데이트하는 스크립트. 알림, 정리 등을 지원합니다.
- [Docker plugin for Jenkins](https://github.com/jenkinsci/docker-plugin/) - Docker 호스트를 이용해 슬레이브를 동적으로 프로비저닝하고 단일 빌드를 실행한 뒤 제거합니다.
- [Drone](https://github.com/drone/drone) - YAML 파일로 구성하는 Docker 기반 지속적 통합 서버.
- [Gantry](https://github.com/shizunge/gantry) - 선택한 Docker swarm 서비스를 자동 업데이트합니다.
- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) - GitLab Runner를 사용해 코드를 테스트, 빌드 및 배포하는 CI를 통합했습니다.
- [Jaypore CI](https://github.com/theSage21/jaypore_ci) - Python으로 구성하는 단순하고 유연하며 강력한 CI/CD/자동화 시스템. 오프라인 및 로컬 우선입니다.
- [Kraken CI](https://github.com/Kraken-CI/kraken) - 확장성이 뛰어나고 테스트에 초점을 둔 현대적인 오픈 소스 온프레미스 CI/CD 시스템. 실행기 중 하나로 Docker를 사용합니다. 개발 중.
- [Screwdriver](https://screwdriver.cd/) - :yen: Yahoo의 오픈 소스 빌드 플랫폼으로 지속적 배포용입니다.
- [Self Hosted Runner](https://github.com/youssefbrr/self-hosted-runner) - Linux, macOS, Windows를 지원하는 셀프 호스팅 GitHub Actions Runner 설정용 Docker 솔루션.
- [Semaphore CI](https://semaphore.io/) - :yen: 컨테이너를 빌드·테스트하고 프로덕션에 배포하는 고성능 클라우드 CI.
- [Skipper](https://github.com/Stratoscale/skipper) - Git 저장소를 쉽게 Docker화합니다.
- [Tekton CD](https://tekton.dev/) - 클라우드 네이티브 파이프라인 리소스.
- [TravisCI](https://www.travis-ci.com/) - :yen: Docker 지원 GitHub 프로젝트용 호스팅 CI.

### 개발 환경

- [coder](https://github.com/coder/coder) - Terraform 또는 Docker 기반 원격 개발 머신.
- [dde](https://github.com/whatwedo/dde) - Docker 기반 로컬 개발 환경 도구 모음.
- [DIP](https://github.com/bibendi/dip) - docker-compose로 구성된 앱을 손쉽게 프로비저닝하고 상호작용하기 위한 CLI 유틸리티.
- [EnvCLI](https://github.com/EnvCLI/EnvCLI) - Node, Go 등의 로컬 설치를 프로젝트별 Docker 컨테이너로 대체합니다.
- [Gebug](https://github.com/moshebe/gebug) - 디버거 및 핫 리로드 기능으로 Docker화된 Go 앱 디버깅을 쉽게 하는 도구.
- [HarborPilot](https://github.com/potterwhite/HarborPilot) - 임베디드 Linux 개발(RK3588, RV1126, RK3568)을 위한 자동 다중 플랫폼 Docker 이미지 빌더. 3계층 구성 상속, PORT_SLOT 기반 포트 할당 및 Ubuntu 버전 호환성을 지원합니다.
- [Lando](https://github.com/lando/lando) - 프로젝트 개발에 필요한 서비스와 도구를 빠르게 지정하고 손쉽게 실행하려는 개발자를 위한 도구입니다.
- [Laradock](https://github.com/laradock/laradock) - Docker 기반 완전한 PHP 개발 환경. Nginx/Apache, PHP, MySQL, Redis 등을 교체 가능한 Compose 서비스로 실행합니다.
- [uniget](https://github.com/uniget-org/cli) - Uni(versal)get, 컨테이너 도구 등의 설치·업데이트 프로그램(이전 이름 docker-setup).
- [Zsh-in-Docker](https://github.com/deluan/zsh-in-docker) - 한 줄로 Docker 컨테이너 안에 Zsh, Oh-My-Zsh 및 플러그인을 설치합니다.

### 서버리스

- [Apache OpenWhisk](https://github.com/apache/openwhisk) - 모든 규모에서 이벤트에 응답해 함수를 실행하는 서버리스 오픈 소스 클라우드 플랫폼.
- [Koyeb](https://www.koyeb.com/) - :yen: 전 세계 앱 배포를 위한 개발자 친화적 서버리스 플랫폼. Git 기반 배포, 자동 확장, 글로벌 엣지 네트워크, 서비스 메시 및 검색 기능으로 Docker 컨테이너, 웹 앱, API를 실행합니다.
- [OpenFaaS](https://github.com/openfaas/faas) - Docker 및 Kubernetes용 완전한 서버리스 함수 프레임워크.

### 테스트

- [Container Structure Test](https://github.com/GoogleContainerTools/container-structure-test) - 명령 출력이나 파일 시스템 내용을 확인해 이미지 구조를 검증하는 프레임워크.
- [dgoss](https://github.com/goss-org/goss/tree/master/extras/dgoss) - docker 컨테이너 검증용 빠른 YAML 기반 도구.
- [Kurtosis](https://github.com/kurtosis-tech/kurtosis) - 다중 컨테이너 테스트 환경용 조합 가능한 빌드 시스템. 환경 설정 SDK, 동작 검증기, 실행·모니터링·디버깅 런타임을 제공합니다.
- [Pumba](https://github.com/alexei-led/pumba) - Docker용 카오스 테스트 도구. kubernetes 및 CoreOS 클러스터에 배포할 수 있습니다.

### 래퍼

- [Hokusai](https://github.com/artsy/hokusai) - 앱 개발자를 위한 Docker + Kubernetes CLI. 앱을 컨테이너화하고 개발·테스트·릴리스 전반에서 수명 주기를 관리합니다. [artsy](https://github.com/artsy)에서 제공.
- [Preevy](https://github.com/livecycle/preevy) - Docker 및 Docker Compose 프로젝트용 프리뷰 환경. CI에서 풀 리퀘스트를 클라우드에 배포해 변경 사항을 테스트하고 개발자와 제품·디자인 담당자의 피드백을 받습니다.
- [subuser](https://github.com/subuser-security/subuser) - Docker에서 그래픽 데스크톱 앱을 안전하고 이식성 있게 실행합니다.
- [udocker](https://github.com/indigo-dc/udocker) - 루트 권한 없이 배치 또는 대화형 시스템에서 간단한 docker 컨테이너를 실행하는 도구.
- [Vagrant - Docker provider](https://developer.hashicorp.com/vagrant/docs/providers/docker/basics) - 좋은 출발점은 [vagrant-docker-example](https://github.com/bubenkoff/vagrant-docker-example)입니다.

## 컨테이너 내부 도구

컨테이너 내부에 설치되거나 [사이드카](https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar)로 실행되도록 설계된 도구와 애플리케이션

- [cdebug](https://github.com/iximiuz/cdebug) - 임시 사이드카를 통해 실행 중인 컨테이너를 디버깅하는 만능 도구. Docker, containerd, Kubernetes에서 작동합니다.
- [ckron](https://github.com/nicomt/ckron) - docker용 cron 스타일 작업 스케줄러.
- [CoreOS][coreos] - 대규모 서버 배포용 Linux
- [docker-gen](https://github.com/jwilder/docker-gen) - docker 컨테이너 메타데이터에서 파일을 생성합니다.
- [dockerize](https://github.com/powerman/dockerize) - docker 컨테이너에서 앱 실행을 간소화하는 유틸리티.
- [GoSu](https://github.com/tianon/gosu) - 지정한 앱을 지정한 사용자로 실행하고 파이프라인을 종료하는 entrypoint 스크립트 도구.
- [is-docker](https://github.com/sindresorhus/is-docker) - 프로세스가 Docker 컨테이너 내부에서 실행 중인지 확인합니다.
- [microcheck](https://github.com/tarampampam/microcheck) - Docker 컨테이너용 경량 상태 확인 도구. httpcheck 대비 9.3MB가 아닌 75KB이며, 순수 C로 http(s), 포트 검사 및 병렬 실행을 지원합니다.
- [Ofelia](https://github.com/mcuadros/ofelia/) - Go로 만든 Docker 환경용 현대적인 경량 작업 스케줄러. 기존 cron 대체를 목표로 하며 컨테이너 레이블 및 구성 파일을 지원합니다.
- [su-exec](https://github.com/ncopa/su-exec) - 다른 권한으로 프로그램을 직접 실행하는 간단한 도구입니다. 자식 프로세스로 실행하는 su/sudo와 달리 TTY 및 신호 문제를 피합니다. gosu와 거의 같은 기능이지만 1.8MB가 아닌 10kb입니다.
- [supercronic](https://github.com/aptible/supercronic) - 컨테이너 실행용으로 설계된 Crontab 호환 작업 실행기.

# 학습 자료

## 시작하기

- [Benefits of using Docker](https://semaphore.io/blog/docker-benefits) 개발 및 배포에서 Docker를 사용할 때의 이점과 실용적인 도입 로드맵.
- [Bootstrapping Microservices](https://www.manning.com/books/bootstrapping-microservices-with-docker-kubernetes-and-terraform) - 마이크로서비스 앱 구축을 위한 실용적인 프로젝트 기반 가이드. 단일 서비스의 Docker 이미지 빌드 및 비공개 레지스트리 게시부터 프로덕션 Kubernetes 클러스터에 전체 앱 배포까지 다룹니다.
- [Docker Curriculum](https://github.com/prakhar1989/docker-curriculum): Docker 시작을 위한 종합 튜토리얼. Docker 사용법과 Elastic Beanstalk 및 Elastic Container Service를 이용해 AWS에 앱을 배포하는 법을 배웁니다.
- [Docker Documentation](https://docs.docker.com/): 공식 문서.
- [Docker for beginners](https://github.com/groda/big_data/blob/master/docker_for_beginners.md): Docker 기초를 배워야 하는 초보자용 튜토리얼. "Hello world!"부터 컨테이너 기본 조작까지 기반 개념을 쉽게 설명합니다.
- [Docker for novices](https://www.youtube.com/watch?v=xsjSadjKXns) Docker를 사용한 적 없는 개발자와 테스터를 위한 입문 자료. (동영상 1시간 40분, 2019년 뉴질랜드 크라이스트처치 linux.conf.au에서 녹화)
- [Docker katas](https://github.com/eficode-academy/docker-katas) "Hello Docker"부터 컨테이너화된 웹 앱을 서버에 배포하는 단계까지 안내하는 실습 모음.
- [Docker simplified in 55 seconds](https://www.youtube.com/watch?v=vP_4DlOH1G4): Docker를 애니메이션으로 간략히 소개합니다. 복잡한 학습 자료를 이해하기 쉽게 돕는 시각적 요약입니다.
- [Docker Training](https://training.mirantis.com) - :yen:
- [Dockerlings](https://github.com/furkan/dockerlings): 현대적인 TUI와 짧은 실습으로 터미널에서 docker를 배웁니다.
- [Introduction à Docker](https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/) DevSecOps 프랑스어 사이트의 Docker 전용 섹션. 기초부터 모범 사례, 컨테이너 최적화와 보안까지 다룹니다...
- [Learn Docker](https://github.com/dwyl/learn-docker): 단계별 튜토리얼과 추가 자료(동영상, 글, 요약표).
- [Learn Docker (Visually)](https://pagertree.com/learn/docker/overview) - Docker 주요 구성 요소와 관계를 설명하는 초보자용 개요. 고품질 이미지, 예제 및 자료를 다수 제공합니다.
- [Play With Docker](https://training.play-with-docker.com/): 초보자부터 고급 사용자까지 Docker를 시작하기 좋은 방법입니다. Docker가 브라우저에서 실행됩니다.
- [Practical Guide about Docker Commands in Spanish](https://github.com/brunocascio/docker-espanol) 기본 docker 명령을 실제 예제로 설명하는 스페인어 안내서.
- [Setting Python Development Environment with VScode and Docker](https://github.com/RamiKrispin/vscode-python): VScode, Docker 및 Dev Container 확장으로 Docker화 Python 개발 환경을 설정하는 단계별 튜토리얼.
- [The Docker Handbook](https://docker-handbook.farhan.dev/) 기본 사항, 모범 사례 및 중급 Docker 기능을 다루는 오픈 소스 도서. [fhsinchy/the-docker-handbook](https://github.com/fhsinchy/the-docker-handbook)에 책이, [fhsinchy/docker-handbook-projects](https://github.com/fhsinchy/docker-handbook-projects)에 프로젝트가 있습니다.

**요약표**

- [eon01](https://github.com/eon01/DockerCheatSheet)
- [dimonomid](https://github.com/dimonomid/docker-quick-ref) (PDF)
- [JensPiegsa](https://github.com/JensPiegsa/docker-cheat-sheet)
- [wsargent](https://github.com/wsargent/docker-cheat-sheet) (가장 인기 있음)

## 시작하기 (Windows)

- [Docker on Windows behind a firewall](https://toedter.com/2015/05/11/docker-on-windows-behind-a-firewall/)
- [Docker Reference Architecture: Modernizing Traditional .NET Framework Applications](https://docs.mirantis.com/containers/v3.0/dockeree-ref-arch/app-dev/modernize-dotnet-apps.html) - 컨테이너화에 적합한 .NET Framework 앱 유형과 "리프트 앤 시프트" 방식을 알아봅니다.
- [Docker with Microsoft SQL 2016 + ASP.NET](https://blog.alexellis.io/docker-does-sql2016-aspnet/) Docker에서 ASP.NET 및 SQL Server 워크로드를 실행하는 데모
- [Exploring ASP.NET Core with Docker in both Linux and Windows Containers](https://www.hanselman.com/blog/exploring-aspnet-core-with-docker-in-both-linux-and-windows-containers) Linux 및 Windows 컨테이너에서 [Docker for Windows][docker-for-windows]로 ASP.NET Core 앱을 실행합니다.
- [Running a Legacy ASP.NET App in a Windows Container](https://blog.sixeyed.com/dockerizing-nerd-dinner-part-1-running-a-legacy-asp-net-app-in-a-windows-container/) 기존 ASP.NET 앱을 Docker화해 Windows 컨테이너로 실행하는 단계
- [Windows Containers and Docker: The 101](https://www.youtube.com/watch?v=N7SG2wEyQtM) - Docker로 PowerShell, ASP.NET Core 및 ASP.NET 앱을 실행하는 20분 개요.
- [Windows Containers Quick Start](https://learn.microsoft.com/en-us/virtualization/windowscontainers/about/) Windows 컨테이너 개요와 Windows 10 및 Windows Server 2016용 빠른 시작 안내

---

## 도서 및 튜토리얼

- [Cloud Native Landscape](https://github.com/cncf/landscape)
- [Docker Blog](https://www.docker.com/blog/) - Docker, 커뮤니티 및 도구에 관한 정기 업데이트.
- [Docker Certification](https://intellipaat.com/docker-training-course/?US) - :yen: 실습 프로젝트와 사례 연구를 통해 Docker 컨테이너화, 컨테이너 실행, 이미지 생성, Dockerfile, 오케스트레이션 및 보안 모범 사례를 배우고 Docker Certified Associate 취득을 준비합니다.
- [Docker dev bookmarks](https://www.codever.dev/search?q=docker) - [docker](https://www.codever.dev/bookmarks/t/docker) 태그를 사용합니다.
- [Docker in Action, Second Edition](https://www.manning.com/books/docker-in-action-second-edition)
- [Docker in Practice, Second Edition](https://www.manning.com/books/docker-in-practice-second-edition)
- [Docker packaging guide for Python](https://pythonspeed.com/docker/) - Python용 Docker 패키징의 세부 사항을 설명하는 상세한 글 모음.
- [Learn Docker in a Month of Lunches](https://www.manning.com/books/learn-docker-in-a-month-of-lunches)
- [Learn Docker](https://coursesity.com/blog/best-docker-tutorials/) - 최고의 온라인 docker 튜토리얼과 강의를 엄선한 목록.
- [Programming Community Curated Resources for learning Docker](https://hackr.io/tutorials/learn-docker)Docker 학습을 위한 프로그래밍 커뮤니티 엄선 자료

## Awesome 목록

- [Awesome Compose](https://github.com/docker/awesome-compose) - Docker Compose 예제.
- [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes)
- [Awesome Linux Container](https://github.com/Friz-zy/awesome-linux-containers) 이 저장소보다 컨테이너 전반을 폭넓게 다룹니다.
- [Awesome Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) 전통적인 방식(로컬 웹 서버를 설정해 앱 실행) 또는 Docker 컨테이너로 로컬 호스팅할 수 있는 무료 소프트웨어 네트워크 서비스 및 웹 앱 목록.
- [Awesome Sysadmin](https://github.com/n1trux/awesome-sysadmin)
- [ToolsOfTheTrade](https://github.com/cjbarber/ToolsOfTheTrade) SaaS 및 온프레미스 앱 목록

## 데모 및 예제

- [An Annotated Docker Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-docker-config-for-frontend-web-development) Docker 로컬 개발 환경은 프로젝트에 필요한 DevOps 구성을 설정 파일로 패키징해 온보딩의 마찰을 줄입니다.
- [Local Docker DB](https://github.com/alexmacarthur/local-docker-db) 다양한 데이터베이스를 위한 docker-compose 예제 목록
- [Webstack-micro](https://github.com/ferbs/webstack-micro) Docker Compose로 API Gateway, 중앙 인증, 백그라운드 워커 및 WebSocket을 컨테이너 서비스로 설정하는 방법을 보여 주는 데모 웹 앱.

## 유용한 팁

- [Docker Caveats](https://docker-saigon.github.io/post/Docker-Caveats/) 프로덕션에서 Docker를 실행할 때 알아야 할 사항(2016년 4월 11일 작성).
- [Docker Containers on the Desktop](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
- [Docker vs. VMs? Combining Both for Cloud Portability Nirvana](https://www.flexera.com/blog/finops/)
- [Don't Repeat Yourself with Anchors, Aliases and Extensions in Docker Compose Files](https://medium.com/@kinghuang/docker-compose-anchors-aliases-extensions-a1e4105d70bd)
- [GUI Apps with Docker](https://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/)

## Raspberry Pi 및 ARM

- [Docker Pirates ARMed with explosive stuff](https://blog.hypriot.com/) 클러스터링, Swarm, Docker 및 Raspberry Pi용 SD 카드 사전 설치 이미지에 관한 방대한 자료.
- [Get Docker up and running on the RaspberryPi in three steps](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)
- [git push docker containers to linux devices](https://www.balena.io) Git과 Docker를 활용한 IoT용 현대적 DevOps.
- [Installing, running, using Docker on armhf (ARMv7) devices](https://github.com/umiddelb/armhf/wiki/Installing,-running,-using-docker-on-armhf-%28ARMv7%29-devices)

## 보안 관련 글

- [Bringing new security features to Docker](https://opensource.com/business/14/9/security-for-docker)Docker에 새로운 보안 기능을 도입하기.
- [CVE Scanning Alpine images with Multi-stage builds in Docker 17.05](https://github.com/tomwillfixit/alpine-cvecheck)
- [Docker Secure Deployment Guidelines](https://github.com/AonCyberLabs/Docker-Secure-Deployment-Guidelines)
- [Docker Security - Quick Reference](https://binarymist.io/publication/docker-security/)
- [Docker Security: Are Your Containers Tightly Secured to the Ship? SlideShare](https://www.slideshare.net/slideshow/docker-security-are-your-containers-tightly-secured-to-the-ship/43834790)
- [How CVE's are handled on Offical Docker Images](https://github.com/docker-library/official-images/issues/1448)
- [Lynis is an open source security auditing tool including Docker auditing](https://cisofy.com/lynis/)Docker 감사를 포함하는 오픈 소스 보안 감사 도구.
- [Security Best Practices for Building Docker Images](https://linux-audit.com/tags/docker/)
- [Software Engineering Radio interview of Docker Security Team Lead (Diogo Mónica)](https://www.se-radio.net/2017/05/se-radio-episode-290-diogo-monica-on-docker-security/)Docker 보안팀 리드 Diogo Mónica와의 Software Engineering Radio 인터뷰.
- [Ten Docker Image Security Best Practices Cheat Sheet](https://snyk.io/blog/10-docker-image-security-best-practices/)
- [Top ten most popular docker images each contain at least 30 vulnerabilities](https://snyk.io/blog/top-ten-most-popular-docker-images-each-contain-at-least-30-vulnerabilities/)
- [Tuning Docker with the newest security enhancements](https://opensource.com/business/15/3/docker-security-tuning)
- [10 best practices to containerize Node.js web applications with Docker](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)

## 동영상

- [Deploying and scaling applications with Docker, Swarm, and a tiny bit of Python magic](https://www.youtube.com/watch?v=GpHMTR7P2Ms) (3:11:06)
- [Docker Course](https://www.youtube.com/watch?v=UZpyvK6UGFo) (스페인어)
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
- [Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615) 무료 Udacity 강좌
- [State of containers: a debate with CoreOS, VMware and Google](https://www.youtube.com/watch?v=IiITP3yIRd8) (27:38)

## 커뮤니티 및 모임

### 브라질

- [Docker BR on Telegram](https://telegram.me/dockerbr)

### 영어

- [Docker Community](https://www.docker.com/community/)
- [Docker Events](https://www.docker.com/events/)
- [Docker Online Meetup](https://www.meetup.com/en-AU/Docker-Online-Meetup/)
- [Docker Reddit Community](https://www.reddit.com/r/docker/)

### 러시아어

- [Docker Russian-speaking Community](https://t.me/docker_ru)

### 스페인어

- [Docker Tips](https://dockertips.com/)

## 시간에 따른 스타 수

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

