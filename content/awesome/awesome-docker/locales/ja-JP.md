# Awesome Docker [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)][sindresorhus] [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/veggiemonk/awesome-docker/)[![Last Commit](https://img.shields.io/github/last-commit/veggiemonk/awesome-docker)](https://github.com/veggiemonk/awesome-docker/commits/main)<!-- omit in toc -->

> Docker向けプロジェクトを厳選した一覧です。

貢献したい場合は、まず[CONTRIBUTING.md](https://github.com/veggiemonk/awesome-docker/blob/master/.github/CONTRIBUTING.md)をお読みください。
この一覧に不足があれば、ぜひ追加にご協力ください。
掲載されているリンクが現在の内容に合わなくなっている場合は、[プルリクエスト][editreadme]を送ってこのファイルを改善できます。ありがとうございます！

**プロジェクトはDocker向けである必要があり、単にDockerを使っているだけでは不十分です。**

> 目安：Dockerとの連携を取り除いてもプロジェクトの価値提案が損なわれないなら、この一覧には含めません。

この一覧の作成者とメンテナーは、コントリビューターによる変更を受け入れる対価を一切受け取っていません。
このページはいかなる意味でもDockerの公式製品ではありません。
これはプロジェクトへのリンク集であり、ボランティアによって管理されています。
誰でも自由に貢献できます。
このリポジトリの目的はオープンソースプロジェクトをまとめることであり、営利目的の宣伝ではありません。

> Dockerは、開発者やシステム管理者が分散アプリケーションを構築、配布、実行するためのオープンプラットフォームです。ポータブルで軽量なランタイム兼パッケージングツールであるDocker Engineと、アプリケーションの共有やワークフローの自動化を行うクラウドサービスであるDocker Hubで構成されています。Dockerを使うと、コンポーネントからアプリケーションをすばやく組み立てられ、開発、QA、本番環境の間にある摩擦をなくせます。その結果、IT部門はより迅速にリリースでき、ノートPC、データセンターのVM、あらゆるクラウド上で、同じアプリケーションを変更せずに実行できます。

_出典：_ [Dockerとは](https://www.docker.com/why-docker/)

# 目次 <!-- omit in toc -->

<!-- TOC -->

- [プロジェクト](#projects)
    - [エンジンとランタイム](#engine--runtime)
    - [イメージのビルド](#building-images)
        - [ビルダー](#builder)
        - [ベースイメージ](#base-images)
        - [Dockerfile](#dockerfile)
        - [リンター](#linter)
    - [イメージのライフサイクル](#image-lifecycle)
        - [レジストリ](#registry)
        - [レジストリCLI](#registry-cli)
        - [イメージスキャンとSBOM](#image-scanning--sbom)
        - [サプライチェーン](#supply-chain)
    - [コンテナの実行](#running-containers)
        - [構成](#composition)
        - [オーケストレーション](#orchestration)
        - [デプロイとプラットフォーム](#deployment--platforms)
        - [ガベージコレクション](#garbage-collection)
    - [ネットワークとプロキシ](#networking--proxies)
        - [ネットワーク](#networking)
        - [リバースプロキシ](#reverse-proxy)
    - [ストレージとデータ](#storage--data)
    - [可観測性](#observability)
    - [セキュリティ](#security)
    - [ユーザーインターフェース](#user-interfaces)
        - [デスクトップ](#desktop)
        - [ターミナル](#terminal)
        - [Web](#web)
        - [IDE連携](#ide-integrations)
    - [開発ワークフロー](#developer-workflow)
        - [APIクライアント](#api-client)
        - [CI/CD](#cicd)
        - [開発環境](#development-environment)
        - [サーバーレス](#serverless)
        - [テスト](#testing)
        - [ラッパー](#wrappers)
    - [コンテナ内ツール](#in-container-tooling)
- [学習リソース](#learning-resources)
    - [まずはこちら](#where-to-start)
    - [まずはこちら（Windows）](#where-to-start-windows)
    - [書籍とチュートリアル](#books--tutorials)
    - [Awesomeリスト](#awesome-lists)
    - [デモとサンプル](#demos-and-examples)
    - [役立つヒント](#good-tips)
    - [Raspberry PiとARM](#raspberry-pi--arm)
    - [セキュリティ記事](#security-articles)
    - [動画](#videos)
    - [コミュニティとミートアップ](#communities-and-meetups)
        - [ブラジル語](#brazilian)
        - [英語](#english)
        - [ロシア語](#russian)
        - [スペイン語](#spanish)
- [スター数の推移](#stargazers-over-time)

<!-- /TOC -->

# プロジェクト

## 公式プロジェクト

- [Moby](https://github.com/moby/moby)
- [Docker Hub](https://hub.docker.com)
- [Docker Compose](https://github.com/docker/compose/) - Dockerでマルチコンテナアプリを定義・実行。
- [Docker Registry][distribution] - コンテンツをパッケージ化、配布、保存、提供するDockerツールセット。

## エンジンとランタイム

- [colima](https://github.com/abiosoft/colima) - 最小限の設定でmacOS（およびLinux）のコンテナランタイムを提供。
- [containerd](https://github.com/containerd/containerd) - オープンで信頼性の高いコンテナランタイム。
- [cri-o](https://github.com/cri-o/cri-o) - Kubernetes Container Runtime InterfaceのOCI準拠実装。
- [gVisor](https://github.com/google/gvisor) - コンテナ向けアプリケーションカーネル。
- [lxc](https://github.com/lxc/lxc) - LXC - Linux Containers。
- [Mocker](https://github.com/us/mocker) - AppleのContainerizationフレームワークを基盤としたmacOS向けDocker互換コンテナCLI。
- [podman](https://github.com/containers/libpod) - Libpodはコンテナポッド作成用ライブラリ。Podmanのホーム。
- [runc](https://github.com/opencontainers/runc) - OCI仕様に従いコンテナを生成・実行するCLIツール。
- [runtime-tools](https://github.com/opencontainers/runtime-tools) - OCIランタイム仕様を扱うツール集。
- [youki](https://github.com/youki-dev/youki) - OCIランタイム仕様を実装するRust製コンテナランタイム。

## イメージのビルド

### ビルダー

新しいイメージのビルドを支援または簡素化するためのアプリケーション。

- [ansible-bender](https://github.com/ansible-community/ansible-bender) - `ansible` と `buildah` を活用するツール。
- [apko](https://github.com/chainguard-dev/apko) - apkパッケージから宣言的にOCIイメージを構築。設計上、再現可能。
- [buildah](https://github.com/containers/buildah) - OCIイメージのビルドを支援するツール。
- [BuildKit](https://github.com/moby/buildkit) - 並列処理、効率的なキャッシュ、Dockerfile非依存を備えたビルダーツールキット。
- [buildx](https://github.com/docker/buildx) - BuildKitを基盤にしたマルチプラットフォームビルド用の公式Docker CLIプラグイン。
- [cekit](https://github.com/cekit/cekit) - 異なるビルドエンジンでベースイメージを構築するOpenShift向けツール。
- [dlayer](https://github.com/orisano/dlayer) - Dockerレイヤーアナライザー。
- [docker-companion](https://github.com/mudler/docker-companion) - Dockerイメージのsquashと展開を行うGolang製CLI。
- [docker-repack](https://github.com/orf/docker-repack) - Dockerイメージを小型・高効率に再パッケージ化し、pullを大幅に高速化。
- [DockerSlim](https://github.com/docker-slim/docker-slim) 肥大化したDockerイメージを縮小して最小イメージを作成。
- [earthly](https://github.com/earthly/earthly) - DockerfileとMakefileを組み合わせた構文によるコンテナビルド自動化。
- [essex](https://github.com/utensils/essex) - Dockerベースのプロジェクト用ひな形。bash製CLIで、Makefile駆動の一貫したクリーンなプロジェクトを素早くセットアップ。
- [HPC Container Maker](https://github.com/NVIDIA/hpc-container-maker) - HPCコンポーネントのビルディングブロックを含む、高水準PythonレシピからのDockerfile生成。
- [img](https://github.com/genuinetools/img) - スタンドアロン、デーモンレス、非特権のDockerfile／OCI互換イメージビルダー。
- [ko](https://github.com/ko-build/ko) - DockerfileなしでGoアプリをコンテナイメージとしてビルド・デプロイ。
- [nix2container](https://github.com/nlewo/nix2container) - `docker load` の往復なしにNixでOCIイメージをビルド。
- [packer](https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/builder/docker) - Chef、Puppet、Ansibleなどの構成管理と連携し、Dockerイメージを含むマシンイメージをビルドするHashiCorp製ツール。
- [Production-Ready Python Containers](https://pythonspeed.com/products/pythoncontainer/) - :yen: Pythonアプリ向けの本番環境対応Dockerイメージ作成テンプレート。
- [RAUDI](https://github.com/cybersecsi/RAUDI) - サードパーティソフトのリリース、更新、コミット時にDockerイメージを自動更新し、任意でDocker Hubにpush。
- [runlike](https://github.com/lavie/runlike) - 実行中コンテナから `docker run` コマンドとオプションを生成。
- [Whaler](https://github.com/P3GLEG/Whaler) - DockerイメージをDockerfileに逆変換するプログラム。


### ベースイメージ

最小構成、堅牢化済み、または特定用途向けのコンテナベースイメージ。

- [Chainguard Images](https://github.com/chainguard-images/images) - Wolfiベースの最小構成で、署名済み・SBOM証明付きコンテナイメージ。
- [distroless](https://github.com/GoogleContainerTools/distroless) - OSを含まない、言語に特化したDockerイメージ。
- [melange](https://github.com/chainguard-dev/melange) - apko向けapkパッケージを宣言的YAMLからビルド。
- [pglayers](https://github.com/pglayers/pglayers) - 合成可能なDockerレイヤーとして提供するビルド済みPostgreSQL拡張。50種以上とすぐ使える統合イメージ（フル版、Azure互換版）を提供。
- [Wolfi](https://github.com/wolfi-dev/os) - コンテナ向けUndistro Linux。glibcベース、署名済み、日次SBOM。


### Dockerfile

- [Dockerfile Generator](https://github.com/ozankasikci/dockerfile-generator) `dfg` はGoライブラリ兼実行ファイルで、多様な入力から有効なDockerfileを生成。
- [Dockershelf](https://github.com/Dockershelf/dockershelf) - 汎用的で効率的・スリムなDockerレシピ集。Travis cronでイメージを毎日更新・テスト・公開。
- [Dofigen](https://github.com/lenra-io/dofigen) - 簡略化されたYAMLまたはJSON記述からDockerfileを生成。
- [Trsuted Builds](https://dockerfile.github.io/) - 信頼できる自動Dockerビルド。Dockerfile ProjectがDockerコンテナで実行可能な人気オープンソースサービス向けDockerfileの中央リポジトリを管理。

### リンター

- [Dockadvisor](https://github.com/deckrun/dockadvisor) - 60以上のルール、品質スコア、セキュリティ検査を備えた軽量Dockerfileリンター。
- [docker-image-size-limit](https://github.com/wemake-services/docker-image-size-limit) - Dockerイメージのサイズを監視するツール。
- [Hadolint](https://github.com/hadolint/hadolint) - ベストプラクティスやよくあるミスを確認し、`RUN` 内のbashも検査するDockerfileリンター。

## イメージのライフサイクル

### レジストリ

Dockerイメージを安全に保存するサービス。

- [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/) - :yen: 完全マネージド型Dockerコンテナレジストリ。Dockerイメージを簡単に保存、管理、デプロイ。
- [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/#overview) - :yen: DockerプライベートレジストリをAzureの第一級リソースとして管理。
- [Cloudsmith](https://cloudsmith.com/product/formats/docker-registry) - :yen: パッケージ管理のフルマネージドSaaS。Dockerの公開・非公開レジストリやKubernetes向けHelmチャートなどを標準サポート。充実した無料枠があり、オープンソース向けは完全無料。
- [Container Registry Service](https://container-registry.com/) - :yen: Harborベースのチーム・組織向けコンテナ管理SaaS。無料枠でプライベートリポジトリ用1 GBを提供。
- [Cycle.io](https://cycle.io/) - :yen: ベアメタルのコンテナホスティング。
- [DigitalOcean](https://www.digitalocean.com/products/container-registry) - :yen: DigitalOcean Container Registry。
- [Docker Hub](https://hub.docker.com/) Docker Inc.が提供。
- [Docker Registry v2][distribution] - コンテンツをパッケージ化、配布、保存、提供するDockerツールセット。
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - P2P技術で効率的・安定・安全なファイル配布とイメージ高速化を実現。
- [GCP Artifact Registry](https://docs.cloud.google.com/artifact-registry/docs) - :yen: Google Cloud Platform上の高速なプライベートDockerイメージストレージ。
- [Gitea Container Registry](https://docs.gitea.com/usage/packages/container) - Gitea統合Dockerレジストリ。小規模なプライベートイメージホスティングに最適。
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - Dockerイメージを保存・管理するGitHubのソリューション。GitHub Actionsと緊密に統合。
- [GitLab Container Registry](https://docs.gitlab.com/user/packages/container_registry/) - GitLab CIでのイメージ利用に特化したレジストリ。
- [Granite Registry](https://granite.so/products/docker-registry) - :yen: プライベートDockerイメージを利用ワークロードと同じ場所に保管。範囲指定の読み取り専用・読み書きキーに対応。
- [Harbor](https://github.com/goharbor/harbor) コンテンツを保存、署名、スキャンする信頼できるオープンソースのクラウドネイティブレジストリ。複製、ユーザー管理、アクセス制御、操作監査をサポート。
- [JFrog Artifactory](https://jfrog.com/artifactory/) - :yen: アーティファクトリポジトリマネージャー。プライベートDockerレジストリとしても利用可能。
- [kontain.me](https://github.com/imjasonh/kontain.me) - イメージがpullされた時点でオンデマンドにビルド・配信するレジストリ。
- [Kraken](https://github.com/uber/kraken) - Uberの高スケーラブルなP2P Dockerレジストリ。数秒でTB単位のデータを配布。
- [NORA](https://github.com/getnora-io/nora) - Docker、Maven、npm、Cargo、PyPI対応の軽量マルチプロトコルレジストリ。32 MBの単一バイナリでpull-throughキャッシュ、Web UI、Prometheusメトリクス、RBAC認証を提供。
- [nscr](https://github.com/jhstatewide/nscr) - 実行・保守が簡単な軽量の自己完結型コンテナレジストリ。
- [Quay.io](https://quay.io/) - :yen: プライベートDockerリポジトリ向け安全なホスティング。
- [Registryo](https://github.com/inmagik/registryo) - オンプレミスDockerレジストリ向けUIとトークン認証サーバー。
- [RepoFlow](https://www.repoflow.io) - Docker、PyPI、Maven、npm、Helmなどをサポートする使いやすいパッケージ管理基盤。スマート検索、組み込みイメージスキャン、セルフホストとクラウド向けの優れた無料枠を備える。
- [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) - ソフトウェアサプライチェーン全体のバイナリとビルド成果物を管理。

### レジストリCLI

OCI/Dockerレジストリ内のイメージを検査、コピー、操作するためのデーモンレスなコマンドラインツール。

- [crane](https://github.com/google/go-containerregistry/tree/main/cmd/crane) - `go-containerregistry` の軽量CLI。レジストリイメージを操作。
- [go-containerregistry](https://github.com/google/go-containerregistry) - レジストリ操作用GoライブラリとCLI（`crane`、`gcrane`、`registry`）。
- [oras](https://github.com/oras-project/oras) - 任意のOCIレジストリとの間であらゆるOCIアーティファクトをpush/pull。
- [regctl](https://github.com/regclient/regclient) - デーモンレスのレジストリクライアント。OCIイメージのコピー、検査、変更、署名が可能。
- [skopeo](https://github.com/containers/skopeo) - リモートイメージレジストリの情報取得、イメージのコピー、コンテンツへの署名。

### イメージスキャンとSBOM

イメージの脆弱性スキャナー、SBOM生成ツール、ダイジェスト固定ツール。商用サービスには `:yen:` を付記しています。

- [Anchor](https://github.com/SongStitch/anchor/) - Dockerfile内の依存関係を固定して再現可能なビルドを実現。
- [Anchor Enterprise](https://anchore.com/) - :yen: イメージをCVE脆弱性や独自セキュリティポリシーに照らして分析。
- [BomLens](https://github.com/sktelecom/bomlens) - コンテナイメージ（ソース、バイナリ、ファームウェアも対象）をスキャンしてCycloneDX SBOMを作成し、脆弱性、ライセンス、通知を報告。Web UI付き単一Dockerイメージ。
- [Clair](https://github.com/quay/clair) - appcおよびDockerコンテナの脆弱性を静的解析するオープンソースプロジェクト。
- [Docker Scout](https://github.com/docker/scout-cli) - SBOM生成、脆弱性分析、ポリシー評価を行うDocker公式CLI。
- [Grype](https://github.com/anchore/grype) - コンテナイメージ、ファイルシステム、SBOM向け脆弱性スキャナー。
- [oscap-docker](https://github.com/OpenSCAP/openscap) - OpenSCAPのoscap-dockerツールでDockerコンテナとイメージをスキャン。
- [pindock](https://github.com/deadnews/pindock) - DockerfileとComposeファイル内のイメージダイジェストを固定・更新。
- [Syft](https://github.com/anchore/syft) - コンテナイメージとファイルシステムからSBOMを生成するCLI兼ライブラリ。
- [Trivy](https://github.com/aquasecurity/trivy) - Aqua Securityのシンプルで包括的なオープンソースコンテナ脆弱性スキャナー（CI向け）。

### サプライチェーン

コンテナイメージの署名、アテステーション、来歴情報。

- [cosign](https://github.com/sigstore/cosign) - OCIアーティファクトのコンテナ署名、検証、透明性ログ。
- [in-toto](https://github.com/in-toto/in-toto) - サプライチェーン証明のフレームワーク。SLSAとcosignの来歴情報を支える。
- [policy-controller](https://github.com/sigstore/policy-controller) - コンテナイメージのcosign署名を強制するKubernetesアドミッションコントローラー。
- [witness](https://github.com/in-toto/witness) - ビルドパイプライン全体でin-toto証明を生成・検証。

## コンテナの実行

### 構成

- [Composerize](https://github.com/magicmark/composerize) - docker runコマンドをdocker-composeファイルに変換。
- [ctk](https://github.com/ctk-hq/ctk) - コンテナベースのワークロード向けビジュアルコンポーザー。
- [kompose](https://github.com/kubernetes/kompose) - Docker ComposeからKubernetesへ変換。
- [plash](https://github.com/ihucos/plash) - Docker内で動くコンテナ実行・ビルドエンジン。
- [podman-compose](https://github.com/containers/podman-compose) - podmanでdocker-compose.ymlを実行するスクリプト。
- [Smalte](https://github.com/roquie/smalte) – Dockerコンテナで静的設定が必要なアプリを動的に構成。

### オーケストレーション

- [CloudSlang](https://github.com/CloudSlang/cloud-slang) - Dockerプロセス自動化を作成するワークフローエンジン。
- [docker rollout](https://github.com/Wowu/docker-rollout) - Docker Composeサービスをダウンタイムなしでデプロイ。
- [Kubernetes](https://github.com/kubernetes/kubernetes) - GoogleによるDockerコンテナ向けオープンソースオーケストレーションシステム。
- [Mesos](https://github.com/apache/mesos) - コンテナ、VM、物理ホスト向けリソース／ジョブスケジューラー。
- [Nebula](https://github.com/nebula-orchestrator) - 大規模分散クラスター管理用に設計されたDockerオーケストレーションツール。
- [Nomad](https://github.com/hashicorp/nomad) - あらゆる規模でアプリを簡単にデプロイする、分散型・高可用性・データセンター対応スケジューラー。
- [Rancher](https://github.com/rancher/rancher) - 本番環境でDockerを運用するための完全なプラットフォームを提供するオープンソースプロジェクト。
- [Swarm-cronjob](https://github.com/crazy-max/swarm-cronjob) - Swarmで時刻指定のジョブを作成。

### デプロイとプラットフォーム

セルフホスト型およびマネージドクラウドのプラットフォーム（PaaS/CaaS、デプロイ自動化）。商用サービスには `:yen:` を付記しています。

- [Amazon ECS](https://aws.amazon.com/ecs/) - :yen: DockerコンテナをサポートするEC2上の管理サービス。
- [Appfleet](https://appfleet.com/) - :yen: コンテナ化サービスを世界各地にデプロイ・管理するエッジ基盤。低レイテンシー向けに最寄りの場所へトラフィックを振り分け。
- [Azure AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/) - :yen: フルマネージドKubernetesコンテナオーケストレーションサービス。
- [blackfish](https://gitlab.com/blackfish/blackfish) - 開発・本番用Swarmクラスター構築のためのCoreOS VM。
- [BosnD](https://gitlab.com/n0r1sk/bosnd) - BosnD（boatswain daemon）は、コンテナ環境の動的変更に対応する構成ファイルライター兼サービスリローダー。
- [caprover](https://github.com/caprover/caprover) - [以前はCaptainDuckDuckとして知られていました] 自動化されたスケーラブルなWebサーバーパッケージ（自動Docker+nginx）。強化版Heroku。
- [Cloud 66](https://www.cloud66.com) - :yen: フルスタックのホステッド・コンテナ管理サービス。
- [Cloud Run Compose](https://docs.cloud.google.com/run/docs/deploy-run-compose) - :yen: `docker-compose.yaml` をGoogle Cloud Runへマネージドサービスとして直接デプロイ。
- [Convox Rack](https://github.com/convox/rack) - 熟練したインフラ自動化とDevOpsのベストプラクティスを基盤にしたオープンソースPaaS。
- [docker-to-iac](https://github.com/deploystackio/docker-to-iac) - docker runとcommitをAWS、Render.com、DigitalOcean向けIaCテンプレートに変換。
- [doco-cd](https://github.com/kimdre/doco-cd) - pollingとwebhookでDocker ComposeプロジェクトとSwarmスタックをデプロイする軽量GitOps／継続的デプロイツール。
- [Dokku](https://github.com/dokku/dokku) - アプリの構築とライフサイクル管理を支援するDocker駆動のミニHeroku。
- [Exoframe](https://github.com/exoframejs/exoframe) - Dockerによるワンコマンドの簡単なデプロイを可能にするセルフホスト型ツール。
- [Giant Swarm](https://www.giantswarm.io/) - :yen: シンプルなマイクロサービス基盤。コンテナを数秒でデプロイ。
- [Google Container Engine](https://docs.cloud.google.com/kubernetes-engine/docs) - :yen: [Kubernetes][kubernetes]を基盤とするGoogle Cloud上のDockerコンテナ。
- [Grafeas](https://github.com/grafeas/grafeas) - イメージやビルドの詳細からセキュリティ脆弱性まで、コンテナメタデータを扱う共通API。
- [Mesosphere DC/OS Platform](https://d2iq.com/products/dcos) - :yen: Apache Mesosを基盤としたデータ・コンテナ向け統合プラットフォーム。
- [OpenRun](https://github.com/openrundev/openrun) - DockerまたはKubernetesを使ってWebアプリをビルド、デプロイ、プロキシ、認証し、自動一時停止。
- [OpenShift][openshift] - [Kubernetes][kubernetes]を基盤とし、Docker化アプリの開発・デプロイ向けに[Red Hat](https://www.redhat.com/en)が最適化したオープンソースPaaS。
- [Red Hat OpenShift Dedicated](https://www.redhat.com/en/technologies/cloud-computing/openshift/dedicated) - :yen: Amazon Web ServicesとGoogle Cloud上のフルマネージドRed Hat® OpenShift®サービス。
- [swarm-ansible](https://github.com/LombardiDaniel/swarm-ansible?tab=readme-ov-file) - Ansibleで本番対応Swarmクラスターを構築。CI自動化、監視支援、SSL証明書・簡易認証を事前設定したTraefik、プライベートレジストリなどを同梱。
- [SwarmManagement](https://github.com/hansehe/SwarmManagement) - pipでインストールするPythonアプリ。デプロイするスタックと作成するネットワーク、設定、シークレットを単一yamlファイルに記述してDocker Swarmを簡単に管理。
- [Triton](https://www.joyent.com/) - :yen: 弾力性のあるコンテナネイティブインフラストラクチャ。
- [Tsuru](https://github.com/tsuru/tsuru) - 拡張可能なオープンソースPaaSソフトウェア。
- [werf](https://github.com/werf/werf) - GitOpsでDockerイメージを効率的にビルドしKubernetesへデプロイするCI/CDツール。

### ガベージコレクション

- [docker-custodian](https://github.com/Yelp/docker-custodian) - Dockerホストをきれいに保つ。
- [Docuum](https://github.com/stepchowfun/docuum) - 最も長く使われていない（LRU）Dockerイメージを削除。

## ネットワークとプロキシ

### ネットワーク

コンテナネットワーク、オーバーレイネットワーク、DNS/サービスディスカバリーのブリッジ。

- [Calico][calico] - 複数のDockerホストにまたがるコンテナ間通信を可能にする純粋なレイヤー3仮想ネットワーク。
- [docker-dns](https://github.com/bytesharky/docker-dns) - Dockerコンテナ向け軽量DNSフォワーダー。ホスト上でコンテナ名を独自サフィックス（例：`.docker`）付きで解決し、サービス検出を簡素化。
- [Flannel](https://github.com/coreos/flannel/) - コンテナランタイム用のサブネットを各ホストに割り当てる仮想ネットワーク。
- [netshoot](https://github.com/nicolaka/netshoot) - Dockerネットワークのトラブルシューティング用ツール一式を備えたコンテナ。
- [Pipework](https://github.com/jpetazzo/pipework) - Linuxコンテナ向けSoftware-Defined Networking。通常のLXCコンテナとDockerの両方で動作。
- [registrator](https://github.com/gliderlabs/registrator) - Docker向けサービスレジストリブリッジ。

### リバースプロキシ

コンテナを認識するリバースプロキシ、Ingress、自動検出機能を備えたTLS終端フロントエンド。

- [BunkerWeb](https://github.com/bunkerity/bunkerweb) - オープンソースの次世代Webアプリケーションファイアウォール（WAF）。
- [caddy-docker-proxy](https://github.com/lucaslorentz/caddy-docker-proxy) - サービスまたはコンテナラベルで設定するCaddyベースのリバースプロキシ。
- [caddy-docker-upstreams](https://github.com/invzhi/caddy-docker-upstreams) - コンテナラベルで設定するCaddy向けDocker upstreamsモジュール。
- [Docker Dnsmasq Updater](https://github.com/moonbuggy/docker-dnsmasq-updater) - リモートdnsmasqサーバーをDockerコンテナのホスト名で更新。
- [docker-flow-proxy](https://github.com/docker-flow/docker-flow-proxy) - サービスの新規デプロイまたはスケール時にプロキシを再構成。
- [Let's Encrypt Nginx-proxy Companion](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) - nginx-proxy向け軽量コンパニオンコンテナ。Let’s Encrypt証明書を自動作成・更新。
- [mesh-router](https://github.com/Yundera/mesh-router) - Dockerコンテナ向け無料ドメイン（nsl.sh）プロバイダー。自動HTTPSルーティングを提供。Wireguard VPNでネットワーク間のサブドメイン要求を安全に転送。セルフホストNASやクラウドに最適。
- [Nginx Proxy Manager](https://github.com/jc21/nginx-proxy-manager) - SSL対応Webサービスをプロキシする美しいWebインターフェース。
- [nginx-proxy][nginxproxy] - docker-genを使うDockerコンテナ向け自動nginxプロキシ。
- [OpenResty Manager](https://github.com/Safe3/openresty-manager) - 使いやすく強力で美しいOpenResty Manager（Nginx拡張版）。OpenResty Edgeのオープンソース代替。
- [Swarm Router](https://github.com/flavioaiello/swarm-router) - Docker Swarmモード向け、サービス名ベースでゼロ設定のルーター。新しくより安全な方式を採用。
- [Træfɪk](https://github.com/containous/traefik) - Docker、Mesos、Consul、Etcd向け自動リバースプロキシ兼ロードバランサー。

## ストレージとデータ

- [Docker Volume Backup](https://github.com/offen/docker-volume-backup) Dockerボリュームをローカルまたは任意のS3互換ストレージにバックアップ。
- [Label Backup](https://github.com/resulgg/label-backup) - DockerラベルからPostgreSQL、MySQL、MongoDB、RedisなどのコンテナDBを自動検出・バックアップするDocker対応軽量エージェント。cron式の柔軟なスケジュールでローカルとS3互換ストレージに対応。
- [Netshare](https://github.com/ContainX/docker-volume-netshare) Docker NFS、AWS EFS、Ceph、Samba/CIFS向けボリュームプラグイン。
- [portworx](https://portworx.com) - :yen: 永続・共有・複製ボリューム向け分散ストレージソリューション。
- [quobyte](https://www.quobyte.com/) - :yen: Dockerボリュームドライバーを備えた完全耐障害型分散ファイルシステム。
- [resq](https://github.com/mashb1t/resq) - Resticを使ったDockerバックアップ。コンテナを停止する場合もしない場合も、ボリューム、DB、.envファイルを保存。ローカル、SSH、S3互換ストレージに対応。
- [REX-Ray](https://github.com/rexray/rexray) ベンダー非依存のストレージオーケストレーションエンジン。Docker、Kubernetes、Mesosへの永続ストレージ提供を主な設計目標とする。

## 可観測性

Dockerホスト、コンテナ、およびその内部で動くサービスを監視します。セルフホスト型とSaaS型を併記し、商用サービスには `:yen:` を付記しています。

- [ADRG](https://github.com/jaldertech/adrg) - cgroups v2でシステム負荷を管理する動的Dockerリソースガバナー。
- [AppDynamics](https://github.com/Appdynamics/docker-monitoring-extension) - :yen: Docker Remote APIからUnix SocketまたはTCP経由でメトリクスを収集する監視拡張。
- [Autoheal](https://github.com/willfarrell/docker-autoheal) - Dockerコンテナの異常を監視し、自動再起動。
- [Better Stack](https://betterstack.com/community/guides/scaling-docker/) - :yen: コンテナ化アプリ向けログ集約と稼働監視を提供するDocker互換可観測性スタック。
- [cAdvisor](https://github.com/google/cadvisor) - 実行中コンテナのリソース使用量と性能特性を分析。
- [Datadog](https://www.datadoghq.com/) - :yen: Docker、Kubernetes、Mesosを第一級でサポートするフルスタック監視サービス。
- [DLIA](https://github.com/zorak1103/dlia) - 大規模言語モデル（LLM）でコンテナログを分析し、異常検知と経時的な文脈情報を提供するAI搭載Dockerログ監視エージェント。
- [docker-exporter](https://github.com/dlepaux/docker-exporter) - Rust製軽量Prometheus exporter。Dockerコンテナのメトリクス収集に対応。ARM64（Raspberry Pi 5）で正確なcgroup v2メモリワーキングセットを提供。root不要、読み取り専用ソケットで動作し、アイドルRAMは約7 MiB。
- [Docker-Sentinel](https://github.com/Will-Luck/Docker-Sentinel) - コンテナ別ポリシー、ロールバック保護、リアルタイムWebダッシュボードを備えた自動コンテナ更新。
- [DockProbe](https://github.com/deep-on/dockprobe) - 単一コンテナで動く軽量Docker監視ダッシュボード。リアルタイムメトリクス、6つの異常検知ルール、Telegram通知、自動セキュリティスキャン16種を提供。設定不要、RAM約50 MB。
- [DockProc](https://gitlab.com/n0r1sk/dockproc) - コンテナのプロセスレベルI/O監視。
- [dockprom](https://github.com/stefanprodan/dockprom) - Prometheus、Grafana、cAdvisor、NodeExporter、AlertManagerによるDockerホスト・コンテナ監視。
- [Doku](https://github.com/amerkurev/doku) - Dockerのディスク使用量を監視するシンプルなWebアプリ。
- [Dozzle](dozzle) - ブラウザーまたはモバイル端末でコンテナログをリアルタイム監視。
- [Drydock](https://github.com/CodesWhat/drydock) - Webダッシュボード、23のレジストリプロバイダー、20の通知トリガー、分散エージェント方式を備えたコンテナ更新監視。
- [Dynatrace](https://docs.dynatrace.com/docs/observe/infrastructure-observability/container-platform-monitoring) - :yen: エージェントのインストールやRunコマンドの変更なしでコンテナアプリを監視。
- [Grafana Docker Dashboard Template](https://grafana.com/grafana/dashboards/179-docker-prometheus-monitoring/) - Docker、Grafana、Prometheusスタック用テンプレート。
- [InfraCanvas](https://github.com/bytestrix/InfraCanvas) - Linuxサーバー上のコンテナ、Pod、ボリューム、ネットワークをライブ可視化。単一バイナリ、WebSocketによるリアルタイム更新。
- [Maintenant](https://github.com/kolapsis/maintenant) - DockerとKubernetes向け自己検出型インフラ監視。ラベルからコンテナを自動検出し、エンドポイント、ハートビート、TLS証明書、リソース、更新情報、組み込みステータスページを監視。SPA組み込みの単一バイナリ。
- [Middleware](https://middleware.io/) - :yen: 統合可観測性基盤でDockerホスト、コンテナ、ログ、アプリ性能を監視。
- [Site24x7](https://www.site24x7.com/docker-monitoring.html) - :yen: DevOpsとIT向けDocker監視。ホスト単位の従量課金SaaS。
- [Sysdig Monitor](https://www.sysdig.com/products/monitor) - :yen: システムコールでコンテナを監視、通知、調査するソフトウェア／SaaS。DockerとKubernetes固有の機能を備える。
- [Wiremap](https://github.com/codeofmario/wiremap) - ライブログ、統計、埋め込みターミナル、コンテナ検査を備えたセルフホスト型Dockerネットワークトポロジー可視化ツール。

## セキュリティ

コンテナの堅牢化、ランタイムセキュリティ、ポリシー、コンプライアンス、フォレンジック。セルフホスト型と商用サービスを併記し、商用サービスには `:yen:` を付記しています。

- [Aqua Security](https://www.aquasec.com) - :yen: あらゆるプラットフォームで開発から本番までコンテナアプリを保護。
- [buildcage](https://github.com/dash14/buildcage) - Docker Buildx向けBuildKitリモートドライバーとしてDockerビルド中の外向き通信を制限し、サプライチェーン攻撃を防止。GitHub Actionsも提供。
- [CetusGuard](https://github.com/hectorm/cetusguard) - APIエンドポイント呼び出しをフィルタリングしてDockerデーモンソケットを保護。
- [Checkov](https://github.com/bridgecrewio/checkov) - Terraform、Kubernetes、CloudFormation、Helm、Dockerfile、KustomizeなどのIaCマニフェストを静的解析し、セキュリティ設定ミスを検出・修正。
- [compose-lint](https://github.com/tmatens/compose-lint) - Composeファイル内のセキュリティ設定ミス（特権コンテナ、未固定イメージ、Dockerソケットマウント、平文認証情報など）をOWASPとCIS Docker Benchmarkに基づき検査。
- [container-explorer](https://github.com/google/container-explorer) - マウントしたディスクイメージからDockerとcontainerdのコンテナ詳細を調べるフォレンジックツール。
- [Deepfence Threat Mapper](https://github.com/deepfence/ThreatMapper) - Kubernetes、VM、サーバーレス向けランタイム脆弱性スキャナー。
- [Den](https://github.com/us/den) - Dockerコンテナ、セキュリティ強化、REST API、WebSocket対応のAIエージェント向けセルフホスト型サンドボックスランタイム。
- [docker-bench-security](https://github.com/docker/docker-bench-security) - 本番環境でのDockerコンテナ展開に関する多数の一般的ベストプラクティスを検査するスクリプト。
- [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy) - Docker APIソケット向けHAProxyベースのきめ細かなフィルター。リバースプロキシやホームラボで制限ソケット公開に広く利用。
- [KICS](https://github.com/checkmarx/kics) - 開発初期にセキュリティ脆弱性、コンプライアンス問題、インフラ設定ミスを検出するIaCスキャナー。ポリシー拡張可能。
- [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) - :yen: （旧Twistlock Security Suite）脆弱性を検出し、コンテナイメージを強化し、アプリのライフサイクル全体にセキュリティポリシーを適用。
- [segspec](https://github.com/dormstern/segspec) - Docker Compose、Kubernetesマニフェスト、Helmチャートなどからネットワーク依存関係を抽出し、根拠追跡可能なKubernetes NetworkPolicyを生成。
- [Sysdig Falco](https://github.com/falcosecurity/falco) - オープンソースのコンテナセキュリティ監視ツール。アプリ、コンテナ、ホスト、ネットワークの動作を監視し、不正活動を通知。
- [Sysdig Secure](https://www.sysdig.com/solutions/cloud-detection-and-response-cdr) - :yen: オープンソースSysdigを基盤とした詳細なインシデント調査と、振る舞い監視・防御によるランタイムセキュリティ。
- [Trend Micro DeepSecurity](https://www.trendmicro.com/en_us/business/products/hybrid-cloud/deep-security.html) - :yen: コンテナワークロードとホストの実行時保護に加え、実行前イメージスキャンで脆弱性、マルウェア、ハードコードされたシークレットなどを検出。

## ユーザーインターフェース

### デスクトップ

Dockerホストやクラスターを管理・監視するネイティブデスクトップアプリケーション。

- [Docker DB Manager](https://github.com/AbianS/docker-db-manager) - Dockerデータベースコンテナを視覚的UIとワンクリック操作で管理するデスクトップアプリ。
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - 公式ネイティブアプリ。WindowsとmacOSのみ対応。
- [Gantry (Desktop)](https://github.com/getgantry/gantry) - DockerホストをローカルおよびSSH経由で管理・監視するネイティブmacOSアプリ（SwiftUI、Electron不使用）。フリート画面、ライブログ・統計、execターミナル、ファイルブラウザー、AIエージェント向けMCPサーバーを内蔵。
- [Simple Docker UI](https://github.com/felixgborrego/simple-docker-ui) - Electronを基盤に構築。
- [Stevedore](https://github.com/slonopotamus/stevedore) - Windows向けの優れたDocker Desktop代替製品。LinuxとWindowsの両コンテナに対応。[slonopotamus](https://github.com/slonopotamus)。

### ターミナル

Docker向けのTUI、CLIツール、シェル連携。

- [bosun](https://github.com/psychedelicdevx/bosun) - Composeプロジェクトの分類、ライブログ、統計、シェルアクセスを備えたキーボード操作型DockerターミナルUI。
- [d4s](https://github.com/jr-k/d4s) - K9sの操作性を備えたDockerコンテナ、Composeスタック、Swarmサービス管理用の高速キーボード操作型ターミナルUI。
- [dcinja](https://github.com/Falldog/dcinja) - Docker CLI環境向けの強力で極小バイナリのテンプレートエンジン。
- [dctl](https://github.com/FabienD/docker-stack) - ターミナルのどこからでも全てのdocker composeコマンドなどを実行できるCLIツール。
- [decompose](https://github.com/s0rg/decompose) - Docker環境のリバースエンジニアリングツール。
- [dive](https://github.com/wagoodman/dive) - Dockerイメージの各レイヤーを調べるツール。
- [docker pushrm](https://github.com/christian-korneck/docker-pushrm) - カレントディレクトリのREADME.mdをDocker HubへpushするDocker CLIプラグイン。QuayとHarborにも対応。
- [docker-captain](https://github.com/lucabello/docker-captain) - Typer、Rich、questionary、shを活用し、複数のDocker Composeデプロイをスタイリッシュに管理するCLI。
- [dockerfile-mode](https://github.com/spotify/dockerfile-mode) - Dockerfile向けEmacsモード。
- [dockerfilegraph](https://github.com/patrickhoefler/dockerfilegraph) - マルチステージDockerfileを可視化。
- [dockly](https://github.com/lirantal/dockly) - Dockerコンテナ管理用の対話型シェルUI。
- [DockMate](https://github.com/shubh-io/dockmate) - テキストUIを備えた軽量ターミナル型Docker／Podmanマネージャー。
- [DockSTARTer](https://github.com/GhostWriters/DockSTARTer) - Dockerで動くホームサーバーアプリを簡単に始められる。
- [DockTUI](https://github.com/strmax195-hue/docktui) - DockerとCompose向けの高速で依存関係不要のターミナルダッシュボード。
- [dockup](https://github.com/paulo-amaral/dockup) - Docker Engine + Compose v2、NVIDIA Container Toolkit、Podman、Apple containerのインストール、強化、保守を行うTUI。CIS準拠を意識したセキュリティ監査も搭載。
- [dprs](https://github.com/durableprogramming/dprs) - リアルタイムログとコンテナ管理を備えた開発者向けTUI。
- [dry](https://github.com/moncho/dry) - Dockerコンテナ用の対話型CLI。
- [easydocker](https://github.com/joao-zanutto/easydocker) - 美しいBubbleTeaグラフィックを活用し、k9sに強く着想を得たターミナルUI。
- [goManageDocker](https://github.com/ajayd-san/gomanagedocker) - Dockerオブジェクトを常識的なキーバインドで高速に表示・管理するTUI。VIMナビゲーションも標準対応。
- [layerx](https://github.com/deveshctl/layerx) - TUIでイメージレイヤーを検査。ファイル差分と内容の表示、サイズ順ソート、ファイル抽出、効率しきい値によるCIゲートに対応。Docker、Podman、OCIアーカイブをサポート。
- [lazydocker](https://github.com/jesseduffield/lazydocker) - Dockerの操作をもっと手軽に。Goとgocuiで書かれたDockerとdocker-compose用のシンプルなターミナルUI。
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - [Dozzle](dozzle)のようにDocker／Podmanコンテナのログを閲覧・絞り込みするターミナルUI。あいまい検索、正規表現、出力の色分けに対応。
- [oxker](https://github.com/mrjackwills/oxker) - Dockerコンテナを表示・操作するシンプルなTUI。
- [proco](https://github.com/shiwaforce/poco) - シンプルなYAML設定でDocker、Docker Compose、Kubernetesプロジェクトを管理。プロジェクトの発見からローカル環境への初期化を迅速化。
- [scuba](https://github.com/JonathonReinhart/scuba) - Dockerコンテナを透過的に利用してソフトウェアのビルド環境をカプセル化。
- [supdock](https://github.com/segersniels/supdock) - 対話型プロンプトでDockerをより視覚的に操作。
- [swarmcli](https://github.com/Eldara-Tech/swarmcli) - リアルタイムログ、即時シェルアクセス、ポート転送、必要時のシークレット表示で、作業を中断せずDocker Swarmを管理。
- [tdocker](https://github.com/pivovarit/tdocker) - 日常のコンテナ操作向け `docker ps` 代替ツール。
- [wharf](https://github.com/idesyatov/wharf) - vim風操作、リアルタイムCPU／メモリ監視と点字チャート、コンテナファイルブラウザー、SSHリモートホスト、コマンドモードを備えたDocker Compose用TUI。

### Web

- [Arcane](https://github.com/getarcaneapp/arcane) - 誰もが使いやすいように作られた、簡単でモダンなDocker管理基盤。
- [CASA](https://github.com/knrdl/casa) - 少数のコンテナ管理を同僚に任せられる。
- [Container Web TTY](https://github.com/wrfly/container-web-tty) - Web-ttyでコンテナに接続。
- [Docker Commander](https://github.com/koduj-dev/docker-commander) - マルチホスト、Compose管理、ログ集約、アラート、RBAC、脆弱性スキャン、MCP連携対応のセルフホスト型Docker管理・監視UI。
- [Docker Registry Browser](https://github.com/klausmeyer/docker-registry-browser) - Docker Registry HTTP API v2向けWebインターフェース。
- [docker-swarm-visualizer](https://github.com/dockersamples/docker-swarm-visualizer) - Docker Swarm上のDockerサービスを可視化（デモ実行用）。
- [dockge](https://github.com/louislam/dockge) - docker compose.yamlスタックを簡単に管理するリアクティブなセルフホスト型マネージャー。
- [DockScope](https://github.com/ManuelR-T/dockscope) - ライブ指標、ログ、ブラウザー内ターミナルを備えた3D依存関係グラフでDockerコンテナを可視化。
- [Komodo](https://github.com/mbecker20/komodo) - 多数のサーバーでソフトウェアをビルド・デプロイするツール。
- [Portainer](https://github.com/portainer/portainer) - DockerホストまたはSwarmクラスター管理用の軽量UI。
- [Swarmpit](https://github.com/swarmpit/swarmpit) - Docker Swarm向けのシンプルで使いやすいUI。スタック、サービス、シークレット、ボリューム、ネットワークなどを管理。
- [usulnet](https://github.com/fr4nsys/usulnet) - sysadminとDevOps向けの最新Docker管理基盤。エンタープライズ級ツール、CVEスキャナー、Web SSH／RDPなどを搭載。

### IDE連携

- JetBrains IDE（IntelliJ IDEA、GoLand、WebStorm、CLionなど）には[Dockerプラグインが組み込まれています](https://www.jetbrains.com/help/idea/docker.html#managing-images)。
- Eclipseの[Docker Tooling plugin](https://www.eclipse.org/community/eclipse_newsletter/2016/july/article2.php)
- [docker.el](https://github.com/Silex/docker.el) EmacsからDockerを管理。

## 開発ワークフロー

### APIクライアント

- [contajners](https://github.com/lispyclouds/contajners) - OCIコンテナエンジン向けの慣用的でデータ駆動、REPL対応のClojureクライアント。
- [Docker Client for JVM](https://github.com/gesellix/docker-client) - Groovy製JVM向けDocker Remote APIクライアントライブラリ。
- [Docker Client TypeScript](https://gitlab.com/masaeedu/docker-client) - mobyリポジトリのSwagger API定義から自動生成するJavaScript向けDocker APIクライアント。
- [docker-controller-bot](https://github.com/dgongut/docker-controller-bot) - Dockerコンテナ操作用Telegramボット。
- [docker-maven-plugin](https://github.com/fabric8io/docker-maven-plugin) - Dockerイメージを実行・作成するMavenプラグイン。
- [Docker.DotNet](https://github.com/Microsoft/Docker.DotNet) - Docker Remote API向けC#/.NET HTTPクライアント。
- [Docker.Registry.DotNet](https://github.com/ChangemakerStudios/Docker.Registry.DotNet) - Docker Registry API v2連携用.NET（C#）クライアントライブラリ。
- [dockerode](https://github.com/apocas/dockerode) - Docker Remote API用node.jsモジュール。
- [go-dockerclient](https://github.com/fsouza/go-dockerclient/) - Docker Remote API用Go HTTPクライアント。
- [Gradle Docker plugin](https://github.com/gesellix/gradle-docker-plugin) - Gradle向けDocker Remote APIプラグイン。
- [Portainer stack utils](https://github.com/greenled/portainer-stack-utils) - docker-compose yamlからPortainerインスタンス上のDockerスタックをデプロイ、更新、解除するbashスクリプト。
- [sbt-docker](https://github.com/marcuslonnberg/sbt-docker) - sbtから直接Dockerイメージを作成。

### CI/CD

セルフホスト型CIエンジン、ビルド高速化ツール、Dockerワークフロー向けのホステッドサービス。商用サービスには `:yen:` を付記しています。

- [Buddy](https://buddy.works) - :yen: Git、ビルド、デプロイツールの長所をまとめ、開発を加速する強力なツール。
- [Captain](https://github.com/harbur/captain) - Gitワークフローを継続的デリバリー対応のDockerコンテナに変換。
- [CircleCI](https://circleci.com/) - :yen: ビルド環境からDockerイメージをpush/pullし、CircleCI上でコンテナをビルド・実行。
- [CodeFresh](https://octopus.com/codefresh) - :yen: Dockerアプリ向けのエンドツーエンドなビルド、テスト、共有と自動テスト。
- [ConcourseCI](https://concourse-ci.org) - :yen: DevOpsチーム向けパイプライン中心のCI SaaS基盤。
- [Defang](https://github.com/DefangLabs/defang) - Docker Composeを好みのクラウドへ数分でデプロイ。
- [Depot](https://depot.dev) - :yen: クラウド上でDockerイメージを高速ビルド。高速計算、自動インテリジェントキャッシュ、設定不要。
- [Diun](https://github.com/crazy-max/diun) - Dockerレジストリのイメージやリポジトリ更新時に通知。
- [dockcheck](https://github.com/mag37/dockcheck) - pullせずにDockerイメージの更新を確認し、選択または全コンテナを自動更新するスクリプト。通知、pruneなどに対応。
- [Docker plugin for Jenkins](https://github.com/jenkinsci/docker-plugin/) - Dockerホストでスレーブを動的に準備し、単一ビルド実行後に破棄するプラグイン。
- [Drone](https://github.com/drone/drone) - Docker上に構築され、YAMLで設定する継続的インテグレーションサーバー。
- [Gantry](https://github.com/shizunge/gantry) - 選択したDocker Swarmサービスを自動更新。
- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) - GitLab Runnerを使ってコードをテスト、ビルド、デプロイする統合CI。
- [Jaypore CI](https://github.com/theSage21/jaypore_ci) - Pythonで設定する、柔軟で強力なCI/CD・自動化システム。オフライン対応でローカル優先。
- [Kraken CI](https://github.com/Kraken-CI/kraken) - テスト重視の最新オープンソース・オンプレミスCI/CD。高スケーラブルで、実行器の一つにDockerを採用。開発元。
- [Screwdriver](https://screwdriver.cd/) - :yen: 継続的デリバリー向けに設計されたYahooのオープンソースビルド基盤。
- [Self Hosted Runner](https://github.com/youssefbrr/self-hosted-runner) - Linux、macOS、Windows対応のセルフホストGitHub Actions Runnerを構築するDocker化ソリューション。
- [Semaphore CI](https://semaphore.io/) - :yen: コンテナをビルド、テストし、本番へリリースする高性能クラウドCI。
- [Skipper](https://github.com/Stratoscale/skipper) - Gitリポジトリを簡単にDocker化。
- [Tekton CD](https://tekton.dev/) - クラウドネイティブなパイプラインリソース。
- [TravisCI](https://www.travis-ci.com/) - :yen: Docker対応のGitHubプロジェクト向けホステッドCI。

### 開発環境

- [coder](https://github.com/coder/coder) - TerraformまたはDockerを基盤とするリモート開発マシン。
- [dde](https://github.com/whatwedo/dde) - Dockerベースのローカル開発環境ツールセット。
- [DIP](https://github.com/bibendi/dip) - docker-composeで構成するアプリのプロビジョニングと操作を簡単にするCLI。
- [EnvCLI](https://github.com/EnvCLI/EnvCLI) - Node、Goなどのローカル環境をプロジェクト専用Dockerコンテナに置き換え。
- [Gebug](https://github.com/moshebe/gebug) - デバッガーとホットリロードを簡単に有効化し、Docker化Goアプリのデバッグを容易にするツール。
- [HarborPilot](https://github.com/potterwhite/HarborPilot) - 組み込みLinux（RK3588、RV1126、RK3568）開発向け自動マルチプラットフォームイメージビルダー。3層設定継承、PORT_SLOTによるポート割り当て、Ubuntu 20.04/22.04/24.04対応。
- [Lando](https://github.com/lando/lando) - プロジェクト開発に必要なサービスやツールを手早く指定し、簡単に起動したい開発者向け。
- [Laradock](https://github.com/laradock/laradock) - DockerベースのPHP開発環境。Nginx/Apache、PHP、MySQL、Redisなどを交換可能なComposeサービスとして実行。
- [uniget](https://github.com/uniget-org/cli) - コンテナツールなどをインストール・更新するUni(versal)get（旧docker-setup）。
- [Zsh-in-Docker](https://github.com/deluan/zsh-in-docker) - Dockerコンテナ内にZsh、Oh-My-Zsh、プラグインを1行でインストール。

### サーバーレス

- [Apache OpenWhisk](https://github.com/apache/openwhisk) - イベントに応じてあらゆる規模で関数を実行するサーバーレスのオープンソースクラウド基盤。
- [Koyeb](https://www.koyeb.com/) - :yen: アプリをグローバルにデプロイする開発者向けサーバーレス基盤。Gitベースのデプロイ、自動スケーリング、グローバルエッジ網、組み込みサービスメッシュと検出機能でDockerコンテナ、Webアプリ、APIを実行。
- [OpenFaaS](https://github.com/openfaas/faas) - DockerおよびKubernetes向けの完全なサーバーレス関数フレームワーク。

### テスト

- [Container Structure Test](https://github.com/GoogleContainerTools/container-structure-test) - コマンド出力やファイル内容を確認してイメージ構造を検証するフレームワーク。
- [dgoss](https://github.com/goss-org/goss/tree/master/extras/dgoss) - Dockerコンテナを検証する高速なYAMLベースツール。
- [Kurtosis](https://github.com/kurtosis-tech/kurtosis) - 複数コンテナのテスト環境向けビルドシステム。Python風SDK、動作・設定を確認するコンパイル時検証、環境の実行・監視・デバッグ機能を備えたランタイムを提供。
- [Pumba](https://github.com/alexei-led/pumba) - Docker向けカオステストツール。KubernetesやCoreOSクラスターに展開可能。

### ラッパー

- [Hokusai](https://github.com/artsy/hokusai) - アプリ開発者向けDocker + Kubernetes CLI。アプリのコンテナ化と開発・テスト・リリースを通じたライフサイクル管理に利用。[artsy](https://github.com/artsy)製。
- [Preevy](https://github.com/livecycle/preevy) - Docker／Compose向けプレビュー環境。CIでプルリクエストをクラウドに展開し、開発者とプロダクト／デザイン担当からフィードバックを得られる。
- [subuser](https://github.com/subuser-security/subuser) - DockerでGUIアプリを安全かつポータブルに実行。
- [udocker](https://github.com/indigo-dc/udocker) - root権限なしでバッチ／対話型環境のDockerコンテナを実行するツール。
- [Vagrant - Docker provider](https://developer.hashicorp.com/vagrant/docs/providers/docker/basics) - まずは[vagrant-docker-example](https://github.com/bubenkoff/vagrant-docker-example)がおすすめ。

## コンテナ内ツール

コンテナ内にインストールするツールやアプリケーション、および[サイドカー](https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar)として実行するよう設計されたツールやアプリケーション。

- [cdebug](https://github.com/iximiuz/cdebug) - 一時的なサイドカー経由で実行中コンテナをデバッグする万能ツール。Docker、containerd、Kubernetes対応。
- [ckron](https://github.com/nicomt/ckron) - Docker向けcron形式ジョブスケジューラー。
- [CoreOS][coreos] - 大規模サーバーデプロイ向けLinux。
- [docker-gen](https://github.com/jwilder/docker-gen) - Dockerコンテナのメタデータからファイルを生成。
- [dockerize](https://github.com/powerman/dockerize) - Dockerコンテナ内でアプリを簡単に実行するユーティリティ。
- [GoSu](https://github.com/tianon/gosu) - 指定ユーザーとしてアプリを実行するentrypointスクリプト用ツール。
- [is-docker](https://github.com/sindresorhus/is-docker) - プロセスがDockerコンテナ内で実行中か確認。
- [microcheck](https://github.com/tarampampam/microcheck) - Dockerコンテナ向け軽量ヘルスチェック。純粋なC製で75 KB（httpcheckは9.3 MB、cURL比）。http(s)、ポート確認、並列実行を含む。
- [Ofelia](https://github.com/mcuadros/ofelia/) - Go製のモダンで軽量なDocker環境向けジョブスケジューラー。旧式cronの代替を目指し、コンテナラベルや設定ファイルで構成可能。
- [su-exec](https://github.com/ncopa/su-exec) - 異なる権限でプログラムを直接実行するシンプルなツール。su／sudoと異なり子プロセスにしないためTTY・シグナル問題を回避。gosuを再発明する必要はありません。同等機能でサイズは1.8 MBでなく10 KB。
- [supercronic](https://github.com/aptible/supercronic) - コンテナ実行に特化して設計されたcrontab互換ジョブランナー。

# 学習リソース

## まずはこちら

- [Benefits of using Docker](https://semaphore.io/blog/docker-benefits) 開発とデリバリーでDockerを使う利点と、導入のための実践的なロードマップ。
- [Bootstrapping Microservices](https://www.manning.com/books/bootstrapping-microservices-with-docker-kubernetes-and-terraform) - マイクロサービスでアプリを構築する実践的なプロジェクトベースのガイド。単一サービスのDockerイメージを作り、プライベートレジストリに公開するところから始め、本番Kubernetesクラスターへの完全なアプリデプロイまでを扱う。
- [Docker Curriculum](https://github.com/prakhar1989/docker-curriculum)Docker入門の包括的チュートリアル。Dockerの使い方とElastic Beanstalk／Elastic Container Serviceを使ったAWSへのアプリ展開を学ぶ。
- [Docker Documentation](https://docs.docker.com/)公式ドキュメント。
- [Docker for beginners](https://github.com/groda/big_data/blob/master/docker_for_beginners.md)Dockerの基礎を学ぶ初心者向けチュートリアル。「Hello world!」からコンテナの基本操作まで、概念をわかりやすく解説。
- [Docker for novices](https://www.youtube.com/watch?v=xsjSadjKXns) Docker未経験の開発者やテスター向け入門（動画1時間40分、Linux.conf.au 2019、ニュージーランド・クライストチャーチで収録）。
- [Docker katas](https://github.com/eficode-academy/docker-katas) 「Hello Docker」からコンテナ化Webアプリのサーバー展開まで学ぶ一連のラボ。
- [Docker simplified in 55 seconds](https://www.youtube.com/watch?v=vP_4DlOH1G4)Dockerをアニメーションで概説。複雑な教材に進むための視覚的な超要約。
- [Docker Training](https://training.mirantis.com) - :yen:
- [Dockerlings](https://github.com/furkan/dockerlings)モダンなTUIと短い演習でターミナルからDockerを学習。
- [Introduction à Docker](https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/) DevSecOpsを扱うフランス語サイトのDocker専門セクション。基礎からベストプラクティス、コンテナの最適化・保護まで習得。
- [Learn Docker](https://github.com/dwyl/learn-docker)ステップごとのチュートリアルと追加リソース（動画、記事、チートシート）。
- [Learn Docker (Visually)](https://pagertree.com/learn/docker/overview) - Dockerの主要コンポーネントと相互関係を解説する初心者向け概説。高品質な画像、例、リソースを多数掲載。
- [Play With Docker](https://training.play-with-docker.com/)初心者から上級者までDockerを始めるのに最適。ブラウザー内でDockerを直接実行。
- [Practical Guide about Docker Commands in Spanish](https://github.com/brunocascio/docker-espanol) スペイン語のガイド。実例を使って基本的なDockerコマンドを解説。
- [Setting Python Development Environment with VScode and Docker](https://github.com/RamiKrispin/vscode-python)VScode、Docker、Dev Container拡張機能でDocker化Python開発環境を設定する手順。
- [The Docker Handbook](https://docker-handbook.farhan.dev/) Dockerの基礎、ベストプラクティス、中級機能を教えるオープンソース書籍。書籍は[fhsinchy/the-docker-handbook](https://github.com/fhsinchy/the-docker-handbook)、プロジェクトは[fhsinchy/docker-handbook-projects](https://github.com/fhsinchy/docker-handbook-projects)で公開。

**チートシート**

- [eon01](https://github.com/eon01/DockerCheatSheet)
- [dimonomid](https://github.com/dimonomid/docker-quick-ref) (PDF)
- [JensPiegsa](https://github.com/JensPiegsa/docker-cheat-sheet)
- [wsargent](https://github.com/wsargent/docker-cheat-sheet) （最も人気）

## まずはこちら（Windows）

- [Docker on Windows behind a firewall](https://toedter.com/2015/05/11/docker-on-windows-behind-a-firewall/)
- [Docker Reference Architecture: Modernizing Traditional .NET Framework Applications](https://docs.mirantis.com/containers/v3.0/dockeree-ref-arch/app-dev/modernize-dotnet-apps.html) - .NET Frameworkアプリのうちコンテナ化に適した種類と「リフト＆シフト」方式を学習。
- [Docker with Microsoft SQL 2016 + ASP.NET](https://blog.alexellis.io/docker-does-sql2016-aspnet/) Docker上でASP.NETとSQL Serverのワークロードを実行するデモ。
- [Exploring ASP.NET Core with Docker in both Linux and Windows Containers](https://www.hanselman.com/blog/exploring-aspnet-core-with-docker-in-both-linux-and-windows-containers) [Docker for Windows][docker-for-windows]を使って、LinuxとWindowsの両コンテナでASP.NET Coreアプリを実行。
- [Running a Legacy ASP.NET App in a Windows Container](https://blog.sixeyed.com/dockerizing-nerd-dinner-part-1-running-a-legacy-asp-net-app-in-a-windows-container/) レガシーASP.NETアプリをDocker化し、Windowsコンテナで実行する手順。
- [Windows Containers and Docker: The 101](https://www.youtube.com/watch?v=N7SG2wEyQtM) - DockerでPowerShell、ASP.NET Core、ASP.NETアプリを実行する20分の概要。
- [Windows Containers Quick Start](https://learn.microsoft.com/en-us/virtualization/windowscontainers/about/) Windowsコンテナの概要。Windows 10とWindows Server 2016向けクイックスタートを紹介。

---

## 書籍とチュートリアル

- [Cloud Native Landscape](https://github.com/cncf/landscape)
- [Docker Blog](https://www.docker.com/blog/) - Docker、コミュニティ、ツールに関する定期的な最新情報。
- [Docker Certification](https://intellipaat.com/docker-training-course/?US) - :yen: 実践プロジェクトと事例を通じ、Dockerコンテナ化、コンテナ実行、イメージ作成、Dockerfile、オーケストレーション、セキュリティのベストプラクティスなどを学び、Docker Certified Associate取得を目指す。
- [Docker dev bookmarks](https://www.codever.dev/search?q=docker) - タグ[docker](https://www.codever.dev/bookmarks/t/docker)を利用。
- [Docker in Action, Second Edition](https://www.manning.com/books/docker-in-action-second-edition)
- [Docker in Practice, Second Edition](https://www.manning.com/books/docker-in-practice-second-edition)
- [Docker packaging guide for Python](https://pythonspeed.com/docker/) - Python向けDockerパッケージングの詳細を扱う一連の記事。
- [Learn Docker in a Month of Lunches](https://www.manning.com/books/learn-docker-in-a-month-of-lunches)
- [Learn Docker](https://coursesity.com/blog/best-docker-tutorials/) - Docker学習向けの厳選オンラインチュートリアルとコース一覧。
- [Programming Community Curated Resources for learning Docker](https://hackr.io/tutorials/learn-docker)

## Awesomeリスト

- [Awesome Compose](https://github.com/docker/awesome-compose) - Docker Composeのサンプル。
- [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes)
- [Awesome Linux Container](https://github.com/Friz-zy/awesome-linux-containers) このリポジトリよりコンテナ全般を幅広く扱う。
- [Awesome Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) 従来の方法（ローカルWebサーバーを設定しそこで実行）またはDockerコンテナでローカルホストできる、自由ソフトウェアのネットワークサービスとWebアプリ一覧。
- [Awesome Sysadmin](https://github.com/n1trux/awesome-sysadmin)
- [ToolsOfTheTrade](https://github.com/cjbarber/ToolsOfTheTrade) SaaSとオンプレミスアプリケーションの一覧。

## デモとサンプル

- [An Annotated Docker Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-docker-config-for-frontend-web-development) Dockerのローカル開発環境では、プロジェクトに必要なDevOps構成を設定としてまとめ、オンボーディングの手間をなくせる。
- [Local Docker DB](https://github.com/alexmacarthur/local-docker-db) 多数のデータベース向けdocker-composeサンプル一覧。
- [Webstack-micro](https://github.com/ferbs/webstack-micro) Docker ComposeでAPI Gateway、集中認証、バックグラウンドワーカー、WebSocketをコンテナサービスとして構成するデモWebアプリ。

## 役立つヒント

- [Docker Caveats](https://docker-saigon.github.io/post/Docker-Caveats/) 本番環境でDockerを実行する際に知っておくべきこと（2016年4月11日執筆）。
- [Docker Containers on the Desktop](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
- [Docker vs. VMs? Combining Both for Cloud Portability Nirvana](https://www.flexera.com/blog/finops/)
- [Don't Repeat Yourself with Anchors, Aliases and Extensions in Docker Compose Files](https://medium.com/@kinghuang/docker-compose-anchors-aliases-extensions-a1e4105d70bd)
- [GUI Apps with Docker](https://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/)

## Raspberry PiとARM

- [Docker Pirates ARMed with explosive stuff](https://blog.hypriot.com/) クラスター、Swarm、Docker、Raspberry Pi用SDカードのプリインストールイメージに関する豊富な情報。
- [Get Docker up and running on the RaspberryPi in three steps](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)
- [git push docker containers to linux devices](https://www.balena.io) GitとDockerを活用したIoT向けモダンDevOps。
- [Installing, running, using Docker on armhf (ARMv7) devices](https://github.com/umiddelb/armhf/wiki/Installing,-running,-using-docker-on-armhf-%28ARMv7%29-devices)

## セキュリティ記事

- [Bringing new security features to Docker](https://opensource.com/business/14/9/security-for-docker)Dockerに新しいセキュリティ機能を導入する。
- [CVE Scanning Alpine images with Multi-stage builds in Docker 17.05](https://github.com/tomwillfixit/alpine-cvecheck)
- [Docker Secure Deployment Guidelines](https://github.com/AonCyberLabs/Docker-Secure-Deployment-Guidelines)
- [Docker Security - Quick Reference](https://binarymist.io/publication/docker-security/)
- [Docker Security: Are Your Containers Tightly Secured to the Ship? SlideShare](https://www.slideshare.net/slideshow/docker-security-are-your-containers-tightly-secured-to-the-ship/43834790)
- [How CVE's are handled on Offical Docker Images](https://github.com/docker-library/official-images/issues/1448)
- [Lynis is an open source security auditing tool including Docker auditing](https://cisofy.com/lynis/)Docker監査機能も備えるオープンソースのセキュリティ監査ツール。
- [Security Best Practices for Building Docker Images](https://linux-audit.com/tags/docker/)
- [Software Engineering Radio interview of Docker Security Team Lead (Diogo Mónica)](https://www.se-radio.net/2017/05/se-radio-episode-290-diogo-monica-on-docker-security/)DockerセキュリティチームリーダーDiogo MónicaへのSoftware Engineering Radioインタビュー。
- [Ten Docker Image Security Best Practices Cheat Sheet](https://snyk.io/blog/10-docker-image-security-best-practices/)
- [Top ten most popular docker images each contain at least 30 vulnerabilities](https://snyk.io/blog/top-ten-most-popular-docker-images-each-contain-at-least-30-vulnerabilities/)
- [Tuning Docker with the newest security enhancements](https://opensource.com/business/15/3/docker-security-tuning)
- [10 best practices to containerize Node.js web applications with Docker](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)

## 動画

- [Deploying and scaling applications with Docker, Swarm, and a tiny bit of Python magic](https://www.youtube.com/watch?v=GpHMTR7P2Ms) (3:11:06)
- [Docker Course](https://www.youtube.com/watch?v=UZpyvK6UGFo) （スペイン語）
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
- [Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615) 無料のUdacityコース。
- [State of containers: a debate with CoreOS, VMware and Google](https://www.youtube.com/watch?v=IiITP3yIRd8) (27:38)

## コミュニティとミートアップ

### ブラジル語

- [Docker BR on Telegram](https://telegram.me/dockerbr)

### 英語

- [Docker Community](https://www.docker.com/community/)
- [Docker Events](https://www.docker.com/events/)
- [Docker Online Meetup](https://www.meetup.com/en-AU/Docker-Online-Meetup/)
- [Docker Reddit Community](https://www.reddit.com/r/docker/)

### ロシア語

- [Docker Russian-speaking Community](https://t.me/docker_ru)

### スペイン語

- [Docker Tips](https://dockertips.com/)

## スター数の推移

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

