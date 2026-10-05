# Kubernetes リソースの厳選集 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

素晴らしいキュレーションリスト Kubernetes ツールとリソース。

インスピレーション [awesome](https://github.com/sindresorhus/awesome) リストとリスト [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws)お問い合わせ

## 驚異のFieryメートル

* 0050+スターのリポジトリ: :fire:
* 0200+スターのリポジトリ: :fire::fire:
* 0500+スターのリポジトリ: :fire::fire::fire:
* 1000+スターのリポジトリ: :fire::fire::fire::fire:
* 2000+スターのリポジトリ: :fire::fire::fire::fire::fire:

から取られたアイデア [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws)お問い合わせ 


## コンテンツ
- [ツールとライブラリ](#tools-and-libraries)
  - [コマンドラインツール](#command-line-tools)
  - [クラスタのプロビジョニング](#cluster-provisioning)
  - [オートメーションおよびCI/CD](#automation-and-cicd)
  - [クラスタリソース管理](#cluster-resources-management)
  - [秘密管理](#secrets-management)
  - [ネットワーク](#networking)
  - [ストレージ](#storage)
  - [テストとトラブルシューティング](#testing-and-troubleshooting)
  - [監視、アラート、可視化](#monitoring-alerts-and-visualization)
  - [バックアップと復元](#backup-and-restore)
  - [セキュリティとコンプライアンス](#security-and-compliance)
  - [サービスメッシュ](#service-mesh)
  - [開発ツール](#development-tools)
  - [データ処理と機械学習](#data-processing-and-machine-learning)
  - [データ管理](#data-management)
  - [ツイート](#miscellaneous)
- [ガイド、ドキュメント、ブログ、学習](#guides-documentations-blogs-and-learnings)
  - [ガイド](#guides)
  - [ブログと動画](#blogs-and-videos)
  - [学習とドキュメント](#learnings-and-documentations)
  - [認定ガイド](#certification-guides)
- [貢献する](#contribute)
- [ライセンス](#license)


## ツールとライブラリ
取扱商品 :green_heart: オープンソースプロジェクトを示します。 

### コマンドラインツール
- :green_heart:[Helm](https://github.com/helm/helm)  :fire::fire::fire::fire::fire: - Helmはチャートを管理するためのツールです。 チャートはあらかじめ設定したパッケージです Kubernetes リソース。
- :green_heart:[Helmfile](https://github.com/helmfile/helmfile)  :fire::fire::fire::fire::fire: - Helmfile は Helm チャートをデプロイするための宣言的な仕様です。
- :green_heart:[Helmwave](https://github.com/helmwave/helmwave)  :fire::fire::fire: - Helmwave は Helm チャートをデプロイするための helm3 ネイティブツールです。 これは、Docker-Compose のようなものですが、Helm の場合です。
- :green_heart:[Infra](https://github.com/infrahq/infra)  :fire::fire::fire: - インフラの発見とアクセスが可能(例:Infra) Kubernetes, データベース Okta や Azure のアクティブディレクトリなどの ID プロバイダーを接続し、ユーザー/グループをインフラストラクチャに設定する権限でマップします。
- :green_heart:[K9s](https://github.com/derailed/k9s)  :fire::fire::fire::fire::fire: - K9s はターミナル UI をあなたの操作に提供します Kubernetes クラスター。
- :green_heart:[kapp](https://github.com/vmware-tanzu/carvel-kapp)  :fire::fire::fire: - kappは"の概念に焦点を当てたシンプルな展開ツールですKubernetes アプリケーション」 — 同じラベルを持つリソースのセット
- :green_heart:[kconnect](https://github.com/fidelity/kconnect)  :fire::fire: - kconnectはCLIユーティリティで、アクセスの発見と安全に使用できます。 Kubernetes 複数の動作環境を横断するクラスター。
- :green_heart:[kl](https://github.com/robinovitch61/kl)  :fire: - klは、多くのコンテナとクラスターを横断してログとやり取りするためのインタラクティブなターミナルアプリケーションです。
- :green_heart:[Ktunnel](https://github.com/omrikiei/ktunnel)  :fire::fire: - Ktunnelはkubernetesクラスターとローカルマシン間のリバーストンネルを確立するCLIツールです。
- :green_heart:[Kubebox](https://github.com/astefanutti/kubebox)  :fire::fire::fire::fire: -ターミナルとWebコンソール Kubernetes
- :green_heart:[Kubetail](https://github.com/johanhaleby/kubetail)  :fire::fire::fire::fire::fire: - 複数のポッドから1つのストリームに集計(tail/follow)ログを可能にするバッシュスクリプト。
- :green_heart:[kube-shell](https://github.com/cloudnativelabs/kube-shell)  :fire::fire::fire::fire: - Kube-shell: 作業のための統合されたシェル Kubernetes お問い合わせ
- お問い合わせ[kubecolor](https://github.com/kubecolor/kubecolor) グリル - kubectlの出力を着色して下さい
- :green_heart:[kubectl tree](https://github.com/ahmetb/kubectl-tree)  :fire::fire::fire::fire: - kubectlプラグインは、間の所有権関係を探求する Kubernetes 所有者によるオブジェクト。
- :green_heart:[kubectl-aliases](https://github.com/ahmetb/kubectl-aliases)  :fire::fire::fire::fire::fire: - このリポジトリには、kubectlの便利なシェルエイリアスを数百個生成するスクリプトが含まれています。
- :green_heart:[kubectx + kubens](https://github.com/ahmetb/kubectx)  :fire::fire::fire::fire::fire: - - - `kubectx` クラスターを前後に切り替えるのに役立ちます。 `kubens` 切り替えるのに役立ちます Kubernetes 名前空間を円滑に。
- :green_heart:[kube-ps1](https://github.com/jonmosco/kube-ps1)  :fire::fire::fire::fire::fire: - kube-ps1: 現行を追加できるスクリプト Kubernetes kubectl で Bash/Zsh プロンプト文字列 ($PS1) に設定されているコンテキストと名前空間。
- :green_heart:[kubediff](https://github.com/weaveworks/kubediff)  :fire::fire::fire: - Kubediffはのための用具です Kubernetes 実行中の構成とバージョン管理された設定の違いを示すため。
- :green_heart:[kubeprompt](https://github.com/jlesquembre/kubeprompt)  :fire: - 各シェルにKUBECONFIGを分離し、電流を表示します Kubernetes プロンプトのコンテキスト/名前空間
- :green_heart:[Kubevela](https://github.com/oam-dev/kubevela)  :fire::fire::fire::fire::fire: - KubeVelaは使いやすいけれども拡張可能なプラットホームで、それらを設計し、最低の努力のアプリケーションを出荷することを可能にします。
- :green_heart:[Move2Kube](https://github.com/konveyor/move2kube)  :fire::fire: - ユーザーがクラウドファウンドリのようなレガシープラットフォームからアプリを移行するのに役立つツール Kubernetes と Openshift. アプリケーションソースコードを分析し、生成する Kubernetes YAML、 Helm チャート、Tekton パイプラインなど 分析および生成はあなたが望む正確な出力を作り出すために重くカスタマイズすることができます。
- :green_heart:[nova](https://github.com/FairwindsOps/nova/)  :fire::fire: - ノバは、ヘムチャートをインストールするためのクラスターをスキャンし、すべての既知のヘムリポジトリに対してクロスチェックします。
- :green_heart:[Plural](https://github.com/pluralsh/plural)  :fire::fire: - Pluralは急速に展開し、管理し、そして監視するためのCLIツールと包括的なDevOps管理プラットフォームです Kubernetesお問い合わせ
- :green_heart:[RBAC Lookup](https://github.com/FairwindsOps/rbac-lookup)  :fire::fire::fire: - RBACルックアップは、簡単に見つけることができるCLIです Kubernetes 任意のユーザー、サービスアカウント、またはグループ名にバインドされたロールとクラスターの役割。
- :green_heart:[stern](https://github.com/stern/stern)  :fire::fire::fire::fire::fire: - Sternを使用すると、複数のポッドをオンにすることができます Kubernetes Pod内の複数のコンテナ。

### クラスタのプロビジョニング
- :green_heart:[Bootkube](https://github.com/kubernetes-sigs/bootkube)  :fire::fire::fire::fire: - Bootkubeは、自己ホストを起動するためのツールです Kubernetes クラスター。
- :green_heart:[Claudie](https://github.com/berops/claudie)  :fire: - 異なるクラウドプロバイダで各ノードプールを持つマルチクラウドクラスター。
- :green_heart:[Cluster API](https://github.com/kubernetes-sigs/cluster-api)  :fire::fire::fire::fire::fire: - クラスタ API は Kubernetes 宣言的な API とツールを提供することに焦点を当てたサブプロジェクトは、プロビジョニング、アップグレード、および複数の操作を簡素化 Kubernetes クラスター。
- :green_heart:[eksctl](https://github.com/weaveworks/eksctl)  :fire::fire::fire::fire::fire: - - - `eksctl` EKS でクラスターを作成する簡単な CLI ツール - Amazon の新しい管理 Kubernetes EC2のサービス
- :green_heart:[k0s](https://github.com/k0sproject/k0s)  :fire::fire::fire::fire::fire: - k0s - ゼロフリクション Kubernetes (シンプル、ソリッド、認定) Kubernetes 配信)
- :green_heart:[k3d](https://github.com/rancher/k3d)  :fire::fire::fire::fire::fire: - k3d および Windows。、destroy は、記憶を半減します、非常に利用できる、Docker のローカル k3s クラスターを動かすための用具です。 20MB程度のバイナリです。 ドッカーをインストールする必要があります。
- :green_heart:[k3s](https://github.com/rancher/k3s)  :fire::fire::fire::fire::fire: - 軽量 Kubernetes. 取付けること容易Kubernetes コマンドラインからのクラスター。
- :green_heart:[kind](https://github.com/kubernetes-sigs/kind)  :fire::fire::fire::fire::fire: -親切はローカルを動かすためのツールです Kubernetes Dockerコンテナ "nodes" を使用したクラスター。
- :green_heart:[kops](https://github.com/kubernetes/kops)  :fire::fire::fire::fire::fire: - - - `kops` あなたが作成するのに役立ちます, 種類のような, 生産グレードを維持し、
- :green_heart:[kube-aws](https://github.com/kubernetes-incubator/kube-aws)  :fire::fire::fire::fire: - - - `kube-aws` コマンド・ライン・ツールで作成/更新/destroy Kubernetes AWS上のクラスター。
- :green_heart:[kubespray](https://github.com/kubernetes-sigs/kubespray)  :fire::fire::fire::fire::fire: - 生産を準備する Kubernetes クラスター
- :green_heart:[microK8s](https://github.com/ubuntu/microk8s)  :fire::fire::fire::fire::fire: - 最も小さい、最も速く Kubernetes
- :green_heart:[Minikube](https://github.com/kubernetes/minikube)  :fire::fire::fire::fire::fire: - minikubeはローカルを実装 Kubernetes macOS、Linux、100MB未満のバイナリですべてのクラスター。
- :green_heart:[Talos Linux](https://github.com/siderolabs/talos)  :fire::fire::fire::fire::fire: - Talos Linuxはバニラをインストールする最小限、不変、安全なOSです Kubernetes - 生産のデータセンターのため、 K8s@ホーム、エッジ。
- :green_heart:[karpenter]([https://karpenter.sh](https://github.com/aws/karpenter-provider-aws))  :fire::fire::fire::fire::fire: - カルペンターは Kubernetes Node Autoscalerは、柔軟性、性能、シンプルさのために構築されました。
- :green_heart:[Kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/) - kubeadm は、最小限の生存可能なクラスターを稼働させ、実行するために必要なアクションを実行します。
- :green_heart:[vCluster](https://github.com/loft-sh/vcluster/) : : : :fire::fire::fire::fire::fire: - vClusterは完全に機能的な仮想を作成することを可能にします Kubernetes クラスター、大幅にコストを削減し、伝統的なものと比較してマルチテナントと分離を改善 Kubernetesお問い合わせ 
  
### オートメーションおよびCI/CD
- :green_heart:[Argo CD](https://github.com/argoproj/argo-cd)  :fire::fire::fire::fire::fire: - Argo CDは宣言的、GitOpsの連続的な配達用具のためのです Kubernetesお問い合わせ
- :green_heart:[Argo Events](https://github.com/argoproj/argo-events)  :fire::fire::fire::fire: - Argo Eventsはイベント主導のワークフロー自動化フレームワークです。 Kubernetes トリガーに役立つ K8s オブジェクト、Argoワークフロー、サーバレスワークロードなど
- :green_heart:[Argo Rollouts](https://github.com/argoproj/argo-rollouts)  :fire::fire::fire::fire: - Argo Rolloutsのコントローラーはロールアウトの注文の資源を使用して青い緑およびカナリアのような付加的な配置の作戦を提供します Kubernetesお問い合わせ
- :green_heart:[Argo Workflows](https://github.com/argoproj/argo)  :fire::fire::fire::fire::fire: - Argo Workflowsは、並列ジョブをオーケストするためのオープンソースコンテナネイティブワークフローエンジンです。 Kubernetesお問い合わせ
- :green_heart:[Argocd autopilot](https://github.com/argoproj-labs/argocd-autopilot)  :fire::fire::fire: - Argo-CD AutopilotはArgo-CDをインストールし、GitOpsのリポジトリを管理するための意見付きの方法を提供するツールです。
- :green_heart:[Flagger](https://github.com/weaveworks/flagger)  :fire::fire::fire::fire::fire: - フラッグガーは、実行中のアプリケーションのためのリリースプロセスを自動化する進歩的な配信ツールです Kubernetesお問い合わせ
- :green_heart:[Flux2](https://github.com/fluxcd/flux2)  :fire::fire::fire::fire::fire: - Fluxバージョン2は、地面から使用するために構築されています Kubernetes' API 拡張システム、および Prometheus および他のコアコンポーネントと統合するため Kubernetes エコシステム。
- :green_heart:[k8s-image-swapper](https://github.com/estahn/k8s-image-swapper/)  :fire::fire: - - - `k8s-image-swapper` 変異的な webhook のため Kubernetes, あなた自身のレジストリに画像をダウンロードし、その新しい場所に画像を指摘.
- :green_heart:[Kubero](https://github.com/kubero-dev/kubero)  :fire::fire::fire::fire::fire: - 自由で自発的なHeroku PaaSの代替 Kubernetes GitOps の実装
- :green_heart:[KubeSphere](https://github.com/kubesphere/kubesphere)  :fire::fire::fire::fire::fire: - KubeSphereは、クラウドネイティブスタックを提供する分散オペレーティングシステムです。 Kubernetes カーネルとして、サードパーティのアプリケーションをシームレスに統合し、エコシステムを強化するためのプラグアンドプレイアーキテクチャを目指しています。
- :green_heart:[Reloader](https://github.com/stakater/Reloader)  :fire::fire::fire::fire::fire: - リローダーは変更を見ることができます `ConfigMap` そして、 `Secret` Podのアップグレードを関連するPodに転がす `DeploymentConfigs`, `Deployments`, `Daemonsets` そして、 `Statefulsets`お問い合わせ
- :green_heart:[terranetes-controller](https://github.com/appvia/terranetes-controller)  :fire: - Terranetesのコントローラーはプラットホームのチームを可能にしま雲の資源のまわりでセルフサービス機能を提供します。
- :green_heart:[Skaffold](https://github.com/GoogleContainerTools/skaffold)  :fire::fire::fire::fire::fire: - Skaffoldはのための連続的な開発を促進するコマンドラインツールです Kubernetes アプリケーション。
- :green_heart:[Spinnaker](https://github.com/spinnaker/spinnaker)  :fire::fire::fire::fire::fire: - Spinnakerは高速および信任のソフトウェア変更を解放するためのオープンソースの連続的な配達プラットホームです。
- :green_heart:[TF-controller](https://github.com/weaveworks/tf-controller)  :fire: - TF-Controller は、Flux 用の実験コントローラーで、GitOps の Terraform リソースを再構成します。
- :green_heart:[werf](https://github.com/werf/werf)  :fire::fire::fire::fire::fire: - werf は Git、Docker、Helm を接着する CLI 用具です及び Kubernetes CI/CD および GitOps を実装する任意の CI システム。 
- :green_heart:[Weave GitOps](https://github.com/weaveworks/weave-gitops)  :fire::fire: - Weave GitOpsは、クラウドネイティブアプリケーションを必要としない人のためのシンプルなオープンソース開発者プラットフォームです。 Kubernetes 専門知識。
- :green_heart:[Otomi - Self-hosted PaaS for K8s](https://github.com/redkubes/otomi-core)  :fire::fire::fire::fire: - Otomiは開発者および操作中心の用具、オートメーションおよび開発者のセルフサービスを上に加えます Kubernetes あらゆるインフラまたはクラウドで、コード、ビルド、リリース、デプロイ、セキュリティ、運用、監視を行います。
:green_heart:[Cozystack - Self-hosted PaaS for K8s](https://github.com/cozystack/cozystack)  :fire::fire::fire::fire: - ターンキー、自動ホストされたPaaSは、強化されたタロスLinuxクラスターで実行するために構築され、セキュリティファーストをもたらす Kubernetes 独自の金属へのオートメーション。 雲か端否定的な積み重ねを sovereign 造れば完成して下さい。

### クラスタリソース管理
- :green_heart:[Clusterpedia](https://github.com/clusterpedia-io/clusterpedia)  :fire: - Clusterpedia は、複数のクラスターの複雑なリソース検索、単一のリソースの同時検索、複数のクラスターに存在する複数のリソースの複数の種類をサポートしています。
- :green_heart:[Grafana Tanka](https://github.com/grafana/tanka)  :fire::fire::fire::fire: - あなたのためにYAMLにきれいで簡潔で、極度の適用範囲が広い代わり Kubernetes クラスター。
- :green_heart:[KEDA](https://github.com/kedacore/keda)  :fire::fire::fire::fire::fire: - KEDAはでき事の運転のための良い穀物のオートスケーリング(ゼロからの/を含む)を可能にします Kubernetes ワークロード。
- :green_heart:[Kruise](https://github.com/openkruise/kruise)  :fire::fire::fire::fire::fire: - Kruise は複数のコントローラーで構成され、拡張し、補完します Kubernetes ワークロード管理用のコアコントローラ。
- :green_heart:[KubeDirector](https://github.com/bluek8s/kubedirector)  :fire::fire: - KubeDirectorは標準を使用します Kubernetes ( )K8s)カスタムリソースとAPI拡張機能の施設で、ステートフルなスケールアウトアプリケーションクラスターを実装します。
- :green_heart:[Kubenav](https://github.com/kubenav/kubenav)  :fire::fire::fire::fire: - kubenavはあなたののための操縦士です Kubernetes ポケットに入ったクラスター。
- :green_heart:[Liqo](https://github.com/liqotech/liqo)  :fire::fire: - Liqoは、異なる間で動的リソース共有を実装 Kubernetes クラスター(例えば、Podとサービスのオフロード)、分散型ガバナンスをサポートする。
- :green_heart:  [Meshery](https://github.com/meshery/meshery)  :fire::fire::fire::fire::fire: - Mesheryはオープンソースのクラウドネイティブマネージャーで、すべてのデザインと管理を可能にします Kubernetes-ベースインフラとアプリケーション。
- :green_heart:[Pluto](https://github.com/FairwindsOps/pluto)  :fire::fire::fire::fire: - Plutoはユーザーが非推奨を見つけるのに役立つユーティリティです Kubernetes 彼らのコードリポジトリとそのヘルムリリースのapiVersions。
- :green_heart:[Polaris](https://github.com/FairwindsOps/polaris)  :fire::fire::fire::fire::fire: - Polarisは、オープンソースポリシーエンジンです。 Kubernetes リソースの設定を検証し、修正します。
- :green_heart:[Projectsveltos](https://github.com/projectsveltos/addon-manager)  :fire: プロジェクトベルトスは Kubernetes アドオンコントローラは、複数のクラスター間でアドオンやアプリケーションの展開と管理を簡素化します。
- :green_heart:[The Hierarchical Namespace Controller](https://github.com/kubernetes-sigs/multi-tenancy/tree/master/incubator/hnc)  :fire::fire::fire: - 階層の名前空間は、名前空間をより強力にすることで、クラスターを簡単に共有できます。

### 秘密管理
- :green_heart:[Kubernetes External Secrets](https://github.com/godaddy/kubernetes-external-secrets)  :fire::fire::fire::fire::fire: - - - Kubernetes 外部シークレットは、AWSシークレットマネージャーやHashiCorp Vaultなどの外部シークレット管理システムを使用して、秘密を安全に追加できます。 Kubernetesお問い合わせ
- :green_heart:[Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets)  :fire::fire::fire::fire::fire: - 秘密を SealedSecret に暗号化し、保存しても安全です。
- :green_heart:[akv2k8s](https://github.com/SparebankenVest/azure-key-vault-to-kubernetes)  :fire::fire: - Azureのキーボルトへの Kubernetes (akv2k8s) は Azure Key Vault オブジェクトを利用できるようにします Kubernetes 2つの方法で: ネイティブ Kubernetes 秘密; コンテナアプリケーションに直接注入された環境変数として

### ネットワーク
- :green_heart:[Calico Networking](https://github.com/projectcalico/calico)  :fire::fire::fire::fire::fire: - Calicoはコンテナ、仮想マシン、およびベアメタルワークロード用のオープンソースネットワークおよびネットワークセキュリティソリューションです。
- :green_heart:[cert-manager](https://github.com/jetstack/cert-manager)  :fire::fire::fire::fire::fire: - cert-manager は Kubernetes 様々な発行元からTLS証明書の管理と発行を自動化するアドオン。
- :green_heart:[cilium](https://github.com/cilium/cilium)  :fire::fire::fire::fire::fire: - Cilium は、eBPF ベースのデータプレーンとネットワーク、保守性、セキュリティソリューションです。
- :green_heart:[CoreDNS](https://github.com/coredns/coredns)  :fire::fire::fire::fire::fire: - CoreDNS は高速で柔軟な DNS サーバーです。 Kubernetesお問い合わせ
- :green_heart:[ingress-nginx](https://github.com/kubernetes/ingress-nginx)  :fire::fire::fire::fire::fire: - - - `ingress-nginx` Ingress コントローラーです。 Kubernetes 逆プロキシとロードバランサとしてNGINXを使う。
- :green_heart:[Kong for Kubernetes](https://github.com/Kong/kubernetes-ingress-controller)  :fire::fire::fire::fire: - プラグインの設定、健康チェック、負荷分散などのためのコング Kubernetes サービス
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - tcpdumpとWiresharkを利用するkubectlプラグインは、あなたのPodで任意のPodにリモートキャプチャを開始する Kubernetes クラスター。
- :green_heart:[kubectl trace](https://github.com/iovisor/kubectl-trace)  :fire::fire::fire::fire: - - - `kubectl trace` kubectlプラグインで、bpftraceプログラムの実行をスケジュールすることができます Kubernetes クラスター。
- :green_heart:[Kube Karp](https://github.com/immanuelfodor/kube-karp)  :fire: - フローティング仮想IPを追加 Kubernetes CARPプロトコルに基づいて簡単にロードバランシング用のクラスターノード
- :green_heart:[kubernetes-ingress](https://github.com/nginxinc/kubernetes-ingress)  :fire::fire::fire::fire::fire:  - NGINXとNGINX Plus(商用)のIngressコントローラーの実装。
- :green_heart:[kube-ovn](https://github.com/alauda/kube-ovn)  :fire::fire::fire::fire:  - A Kubernetes 機能が豊富で、操作が容易である企業のためのネットワークの生地。
- :green_heart:[loxilb](https://github.com/loxilb-io/loxilb)  :fire::fire::fire:  - A Kubernetes eBPFに基づくサービスロードバランサー
  
### ストレージ
- :green_heart:[Longhorn](https://github.com/longhorn/longhorn)  :fire::fire::fire::fire::fire: - Longhornはのための分散されたブロックの貯蔵システムです Kubernetesお問い合わせ
- :green_heart:[OpenEBS](https://github.com/openebs/openebs)  :fire::fire::fire::fire::fire: - OpenEBSは最も広く導入され、使いやすいオープンソースストレージソリューションです。 Kubernetesお問い合わせ
- :green_heart:[Rook](https://github.com/rook/rook)  :fire::fire::fire::fire::fire: - Rookはオープンソースクラウドネイティブストレージオーケストです。 Kubernetesお問い合わせ

### テストとトラブルシューティング
- :green_heart:[Chainsaw](https://github.com/kyverno/chainsaw)  :fire: - 究極のテストツールを終わらせるためのエンド Kubernetes オペレータ。
- :green_heart:[Chaos Mesh](https://github.com/pingcap/chaos-mesh)  :fire::fire::fire::fire::fire: - シャオス・メッシュ®は、チェオスをオーケストするクラウドネイティブ・チャオス・エンジニアリング・プラットフォームです。 Kubernetes 環境。
- :green_heart:[chaoskube](https://github.com/linki/chaoskube)  :fire::fire::fire::fire: - - - `chaoskube` 定期的にあなたのランダムなポッドを殺します Kubernetes クラスター。
- :green_heart:[Conftest](https://github.com/open-policy-agent/conftest)  :fire::fire::fire::fire: - Conftest は、構造化された構成データに対してテストを書くのに役立ちます。
- :green_heart:[DETIK](https://github.com/bats-core/bats-detik)  :fire: - エンドツーエンドのテストを簡素化するライブラリ K8s 使用によるアプリケーション [BATS](https://github.com/bats-core/bats-core) アサーションと自然言語のクエリ。
- :green_heart:[k6](https://github.com/loadimpact/k6)  :fire::fire::fire::fire::fire: - k6は負荷衝撃の負荷および性能のテストの企業の経験の年を造る現代負荷テスト用具です。
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - tcpdumpとWiresharkを利用するkubectlプラグインは、あなたのPodで任意のPodにリモートキャプチャを開始する Kubernetes クラスター。
- :green_heart:[Kube DOOM](https://github.com/storax/kubedoom)  :fire::fire::fire::fire: - カオスエンジニアリングの次のレベルはここにあります! あなたの中のポッドをキル Kubernetes ドムでそれらを撮影することによってクラスター!
- :green_heart:[kube-monkey](https://github.com/asobti/kube-monkey)  :fire::fire::fire::fire::fire: - ランダムに削除 Kubernetes (k8s) 障害のあるサービスの開発を奨励し、検証するクラスターのポッド。
- :green_heart:[kube-score](https://github.com/zegl/kube-score)  :fire::fire::fire::fire: - - - `kube-score` 静的コード解析を実行するツールです。 Kubernetes オブジェクト定義。
- :green_heart:[Kubectl-debug](https://github.com/JamesTGrant/kubectl-debug)  :fire::fire::fire::fire::fire: - - - `kubectl-debug` 実行中のPodをトラブルシューティングするためのアウト・オブ・ツリー・ソリューションです。これにより、デバッグ目的でPodを実行して新しいコンテナを実行できます。
- :green_heart:[KubeInvaders](https://github.com/lucky-sideburn/KubeInvaders)  :fire::fire::fire: - KubeInvaderを通してあなたが強調することができます Kubernetes 楽しい方法でクラスターと弾力性のある方法を確認してください。
- :green_heart:[Kubetest](https://github.com/vapor-ware/kubetest)  :fire: - Kubetestは管理しやすくするpytestプラグインです Kubernetes 統合テスト内のクラスター。
- :green_heart:[Litmus](https://github.com/litmuschaos/litmus)  :fire::fire::fire::fire::fire: - LitmusはChaosをオーケストするためのツールを提供しています Kubernetes SREが展開中の弱点を見つけるのに役立ちます。
- :green_heart:[popeye](https://popeyecli.io/)  :fire::fire::fire::fire::fire: - Popeyeはライブをスキャンするユーティリティです Kubernetes リソースと構成をデプロイした潜在的な問題のクラスターとレポートします。
- :green_heart:[PowerfulSeal](https://github.com/bloomberg/powerfulseal)  :fire::fire::fire::fire: - 強力なシールは、あなたの失敗を注入します Kubernetes クラスターは、できるだけ早く問題を検出できるようにします。
- :green_heart:[Testkube](https://github.com/kubeshop/testkube)  :fire::fire::fire: - Testkubeは Kubernetes テストオーケストレーションと実行のためのネイティブテストフレームワーク。 どのテストでもテストを実行できます。 Kubernetes クラスター。 CI/CD と連携し、GitOps のアプローチに従ってテストを行い、すべてのクラスターを一元化した結果、集中的にテストできます。

### 監視、アラート、可視化
- :green_heart:[BotKube](https://github.com/infracloudio/botkube)  :fire::fire::fire::fire: - BotKube と Slack や Mattermost との統合により、監視ができるようになります。 Kubernetes クラスター、重要な展開をデバッグし、チェックを実行することで、標準の慣行に対する推奨事項を提供します Kubernetes リソース。
- :green_heart:[Canary Checker](https://github.com/flanksource/canary-checker)  :fire: - Canary Checkerは30以上のビルトインヘルスチェックタイプを備えたkubernetesネイティブヘルスチェックプラットフォームです。
- :green_heart:[Cortex](https://github.com/cortexproject/cortex)  :fire::fire::fire::fire::fire: - Cortexは、水平にスケーラブル、高可用性、マルチテナント、Prometheusの長期ストレージを提供します。
- :green_heart:[Goldilocks](https://github.com/FairwindsOps/goldilocks)  :fire::fire::fire: - Goldilocksは、リソースの要求と制限の開始点を識別するのに役立ちますユーティリティです。
- :green_heart:[Goldpinger](https://github.com/bloomberg/goldpinger)  :fire::fire::fire::fire::fire: - デバッグツール Kubernetes クラスター内のノード間の接続をテストして表示します。
- :green_heart:[Grafana](https://github.com/grafana/grafana)  :fire::fire::fire::fire::fire: - Grafanaを使用すると、保存場所に関係なく、メトリックを照会、視覚化、アラートオンおよび理解することができます。
- :green_heart:[Helm Dashboard](https://github.com/komodorio/helm-dashboard)  :fire::fire::fire::fire: - Helm の不足している UI 。 Helm Dashboard プラグインは、インストールされた Helm チャートを表示するための UI 主導的な方法を提供し、そのリビジョン履歴と対応する k8s リソースを参照してください。 
- :green_heart:[Kiali](https://github.com/kiali/kiali)  :fire::fire::fire::fire::fire: - キアリは、サービスメッシュトポロジーを視覚化するために、Istioで動作します。
- :green_heart:[k8s-image-availability-exporter](https://github.com/flant/k8s-image-availability-exporter)  :fire: - 定義されている画像について積極的に警告するPrometheusの輸出業者 Kubernetes オブジェクトはコンテナレジストリでは利用できません。 
- :green_heart:[kube-capacity](https://github.com/robscott/kube-capacity)  :fire::fire::fire: - これは、リソースの要求、制限、および利用の概要を提供する単純なCLIです。 Kubernetes クラスター。
- :green_heart:[Kubernetes Dashboard](https://github.com/kubernetes/dashboard)  :fire::fire::fire::fire::fire: - - - Kubernetes Dashboard は、一般的な目的、Web ベースの UI です。 Kubernetes クラスター。
- :green_heart:[Kubedev](https://github.com/relferreira/kubedev)  :fire: - Kubedevは管理のための強力で、美しいユーザー インターフェイスです Kubernetes クラスター。
- :green_heart:[KubeHelper](https://github.com/KubeHelper/kubehelper)  :fire: - KubeHelper - 日々多くの簡素化 Kubernetes ウェブインターフェイスによるクラスタータスク。
- :green_heart:[Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server)  :fire::fire::fire::fire::fire: - メトリックサーバーは、コンテナリソースメトリックのスケーラブルで効率的なソースです。 Kubernetes ビルトインオートスケールパイプライン。
- :green_heart:[Kubernetes Operational View](https://github.com/hjacobs/kube-ops-view)  :fire::fire::fire::fire: - 複数の操作画像を提供するためのツール Kubernetes クラスター。
- :green_heart:[kube-state-metrics](https://github.com/kubernetes/kube-state-metrics)  :fire::fire::fire::fire::fire: - kube-state-metricsは聴く簡単なサービスです Kubernetes API サーバーは、オブジェクトの状態に関するメトリックを生成します。
- :green_heart:[kubewatch](https://github.com/robusta-dev/kubewatch)  :fire::fire::fire::fire::fire: - - - `kubewatch` お問い合わせ Kubernetes 現在、コラボレーションハブ/通知チャネルの通知を公開しているWatcher。
- :green_heart:[Lens](https://github.com/lensapp/lens)  :fire::fire::fire::fire::fire: - レンズ それは便利で、魅力的で、オープンソースのユーザー インターフェイスです(UI) 作業のために Kubernetes クラスター。
- :green_heart:[Mizu](https://github.com/up9inc/mizu)  :fire::fire::fire: - API トラフィックビューア Kubernetes microservices 間ですべての API 通信を閲覧できます。 TCPDump と Wireshark が再発明されたことを考える Kubernetes
- :green_heart:[Network mapper](https://github.com/otterize/network-mapper)  :fire::fire: サイトマップ Kubernetes テキスト、インテント、またはイメージとしてインクルーザーのトラフィックとエクスポート。
- :green_heart:[Popeye](https://github.com/derailed/popeye)  :fire::fire::fire::fire::fire: - Popeyeはライブをスキャンするユーティリティです Kubernetes リソースと構成をデプロイした潜在的な問題のクラスターとレポートします。
- :green_heart:[Prometheus](https://github.com/prometheus/prometheus)  :fire::fire::fire::fire::fire: - Prometheus、クラウドネイティブコンピューティング財団プロジェクトは、システムとサービス監視システムです。
- :green_heart:[Searchlight](https://github.com/searchlight/searchlight)  :fire::fire: - Searchlight/Icingaは定期的にさまざまなチェックを実行します Kubernetes 問題を検出し、通知を送信します。
- :green_heart:[Sloop](https://github.com/salesforce/sloop)  :fire::fire::fire: - スループモニター Kubernetes, イベントやリソースの状態の変更の履歴を記録し、過去のイベントのデバッグに役立つ視覚化を提供します。
- :green_heart:[Thanos](https://github.com/thanos-io/thanos)  :fire::fire::fire::fire::fire: - タノスは、無制限のストレージ容量を備えた非常に利用可能なメトリックシステムに構成できるコンポーネントのセットです。
- :green_heart:[K8Studio](https://github.com/guiqui/k8Studio)  :fire::fire::fire: - K8Studio IDEを管理し、視覚化します Kubernetes クラスタ。
- :green_heart:[KubeDiagrams](https://github.com/philippemerle/KubeDiagrams)  :fire: - 生成 Kubernetes アーキテクチャ図から Kubernetes manifestファイル、kustomizationファイル、Helmチャート、実際のクラスター状態。

### バックアップと復元
- :green_heart:[katafygio](https://github.com/bpineau/katafygio)  :fire: - カタフィジオの発見 Kubernetes オブジェクト(deployments、サービス、...)、および継続的にgitリポジトリ内のyamlファイルとして保存します。
- :green_heart:[Velero](https://github.com/vmware-tanzu/velero)  :fire::fire::fire::fire::fire: - Velero(旧Heptio Ark)は、バックアップと復元するためのツールを提供します Kubernetes クラスターリソースと永続的なボリューム。

### セキュリティとコンプライアンス
- :green_heart:[Datree](https://github.com/datreeio/datree)  :fire::fire::fire::fire::fire: - DatreeはサポートするCLIツールです Kubernetes 開発者がエラーを犯すことを防ぐことによって、自分の役割を管理 Kubernetes クラスターが生産に失敗する可能性がある構成。
- :green_heart:[Deepfence ThreatMapper](https://github.com/deepfence/ThreatMapper)  :fire::fire::fire: - Apache v2、kubernetes、仮想マシン、サーバーレス用の強力なランタイム脆弱性スキャナー。
- :green_heart:[Falco](https://github.com/falcosecurity/falco)  :fire::fire::fire::fire::fire: - Falcoは、アプリケーションの異常な活動を検出するために設計された行動活動モニターです。 Falco を使用して、ランタイムセキュリティを監視できます。 Kubernetes アプリケーションおよび内部コンポーネント。
- :green_heart:[Gatekeeper](https://github.com/open-policy-agent/gatekeeper)  :fire::fire::fire::fire::fire: - のための方針のコントローラー Kubernetes
- :green_heart:[Intents operator](https://github.com/otterize/intents-operator)  :fire::fire: - ネットワークポリシー、Istio認可ポリシー、およびKafka ACLを管理 Kubernetes 簡単にクラスター。
- :green_heart:[k-rail](https://github.com/cruise-automation/k-rail)  :fire::fire: - kレールは、ワークロードポリシーの執行ツールです Kubernetes. それは最低の破壊および最高速度の多テナント クラスターを保障するのを助けることができます。
- :green_heart:[Konstraint](https://github.com/plexsystems/konstraint)  :fire::fire: - KonstraintはGatekeeperを使用するときに制約の創造と管理を支援するCLIツールです。
- :green_heart:[kube-bench](https://github.com/aquasecurity/kube-bench)  :fire::fire::fire::fire::fire: - kube-benchは、かどうかをチェックするGoアプリケーションです Kubernetes CIS で文書化されたチェックを実行することで安全にデプロイされます。 Kubernetes ベンチマーク。
- :green_heart:[kube-hunter](https://github.com/aquasecurity/kube-hunter)  :fire::fire::fire::fire::fire: - kube-hunter ハンター ハンター ハンター ハンター ハンター のための セキュリティ 弱点 に Kubernetes クラスター。
- :green_heart:[KubeLinter](https://github.com/stackrox/kube-linter)  :fire::fire::fire::fire: - KubeLinter は静的解析ツールで、 Kubernetes YAMLファイルと Helm チャートは、それらに代表されるアプリケーションが最善の慣行に付着することを保証します。
- :green_heart:[Kubesploit](https://github.com/cyberark/kubesploit)  :fire::fire::fire: - Kubesploitは、Golangで書かれたコンテナ化された環境に専用のクロスプラットフォームのポスト・エクスプロイトHTTP / 2コマンド&コントロールサーバーとエージェントで、Russel Van Tuyl(@Ne0nd0g)によるMerlinプロジェクトの上に構築されています。
- :green_heart:[KubiScan](https://github.com/cyberark/KubiScan)  :fire::fire::fire: - スキャンのためのツール Kubernetes リスク権限のクラスター Kubernetesロールベースのアクセス制御(RBAC)認可モデル。
- :green_heart:[Kyverno](https://github.com/kyverno/kyverno)  :fire::fire::fire::fire: - Kyvernoは、のために設計されたポリシーエンジンです Kubernetes. 入学制御とバックグラウンドスキャンを使用して、設定を検証、ミュート、生成できます。
- :green_heart:[Netchecks](https://github.com/hardbyte/netchecks/)  :fire: - ネットワーク条件をテストするためのツールのセットと、期待通りであると主張する。
- :green_heart:[Permission manager](https://github.com/sighupio/permission-manager)  :fire::fire::fire: - 許可マネージャは、SIGHUPによって開発されたアプリケーションで、超簡単で使いやすいRBAC管理を可能にしています。 Kubernetesお問い合わせ
- :green_heart:[rakkess](https://github.com/corneliusweig/rakkess)  :fire::fire::fire: - kubectlプラグインは、サーバーリソースのアクセス行列を表示する
- :green_heart:[Rönd](https://github.com/rond-authz/rond)  :fire: - Röndはオープンソースの軽量です Kubernetes シンプルなセキュリティポリシーで API を保護するのに役立つサイドカーコンテナ。 また、ネイティブでRBAC/ABACソリューションを構築できます。
- :green_heart:[Teleport](https://github.com/gravitational/teleport)  :fire::fire::fire::fire::fire: - Teleport Unified Access Plane は、エンジニアがいつでもどこでも任意のコンピューティングリソースにアクセスできるようにします。


### サービスメッシュ
- :green_heart:[Istio](https://github.com/istio/istio)  :fire::fire::fire::fire::fire: - マイクロサービスを接続し、管理し、そして保障する開いたプラットホーム。
- :green_heart:[Linkerd](https://github.com/linkerd/linkerd)  :fire::fire::fire::fire::fire: - Linkerdは現代適用を安全および砂を作るように設計されている透明なサービス網です。
- :green_heart:[Open Service Mesh](https://github.com/openservicemesh/osm/)  :fire::fire::fire::fire::fire: - オープンサービスメッシュ(OSM)は、軽量で拡張可能なクラウドネイティブサービスメッシュです。これにより、ユーザーは、非常に動的マイクロサービス環境で管理、安全、および受信不能な機能を実現できます。


### 開発ツール
- :green_heart:[Cyclops](https://github.com/cyclops-ui/cyclops)  :fire::fire: - カスタマイズ可能なUIのための Kubernetes 導入事例
- :green_heart:[Eclipse JKube](https://github.com/eclipse/jkube)  :fire::fire: - 必要なマニフェストと一緒にコンテナイメージを作成するのに役立つJava開発者のためのツールとプラグイン Kubernetesお問い合わせ
- :green_heart:[garden](https://github.com/garden-io/garden)  :fire::fire::fire::fire::fire: - 庭は生産様を提供します Kubernetes 統合テスト、QA、開発のためのテスト環境。
- :green_heart:[gefyra](https://github.com/gefyrahq/gefyra)  :fire::fire::fire: -Gefyraの超高速、ロックソリッド、ローカルアプリケーション開発 ➡️ と Kubernetesお問い合わせ
- :green_heart:[ko](https://github.com/google/ko)  :fire::fire::fire::fire::fire: - - - `ko` Golangアプリケーションをビルドしてデプロイするツールです。 Kubernetesお問い合わせ
- :green_heart:[Konfig](https://github.com/cloud66-oss/konfig)  :fire: - コンフィグは Kubernetes フレンドリーな柵の宝石。 個々のファイルでYAMLまたはフォルダから構成と秘密をロードし、同じ方法でアプリケーションに表示することができます。
- :green_heart:[kubevious](https://github.com/kubevious/Kubevious)  :fire::fire::fire::fire: - Kubeviousは、アプリケーションに関連するすべての構成を1か所でレンダリングします。 これにより、オペレータから多くの時間を節約し、セレクターやラベル内で設定を探し、掘り下げる必要性を排除します。
- :green_heart:[kubectl-warp](https://github.com/ernoaapa/kubectl-warp)  :fire::fire: - - - Kubernetes Podのローカルファイルを同期および実行するためのCLIプラグイン Kubernetes
- :green_heart:[kubernix](https://github.com/saschagrunert/kubernix)  :fire::fire::fire: - このプロジェクトは、単一の依存性を提供することを目指しています Kubernetes ローカルテスト、実験および開発の目的のためのクラスター。
- :green_heart:[Makisu](https://github.com/uber/makisu)  :fire::fire::fire::fire::fire: - MakisuはMesosまたはのようなunprivileged容器化された環境のために設計されている速く、適用範囲が広いDockerのイメージの造り用具です Kubernetesお問い合わせ
- :green_heart:[mirrord](https://github.com/metalbear-co/mirrord)  :fire::fire::fire::fire::fire: - ローカルプロセスとクラウド環境を接続し、クラウド環境でローカルコードを実行します。
- :green_heart:[Monokle](https://github.com/kubeshop/monokle)  :fire::fire::fire: - Monokleは、yamlマニフェストを作成、編集、検証し、リソースリンクと依存関係を可視化し、リソースをクラスターに接続して比較し、kustomizeまたはlmの出力をデバッグします。
- :green_heart:[Okteto](https://github.com/okteto/okteto)  :fire::fire::fire::fire: - - - `okteto` 開発ワークフローの加速 Kubernetes アプリケーション。
- :green_heart:[Telepresence](https://github.com/telepresenceio/telepresence)  :fire::fire::fire::fire::fire: - テレプレゼンスは速く、現実的なローカル開発を提供します Kubernetes マイクロサービス。
- :green_heart:[Tilt](https://github.com/tilt-dev/tilt)  :fire::fire::fire::fire::fire: - チルトパワーマルチサービスの開発と動作確認を行います。
- :green_heart:[Tye](https://github.com/dotnet/tye)  :fire::fire::fire::fire::fire: - Tyeは、microservicesの開発、テスト、および分散されたアプリケーションを簡単に展開する開発者ツールです。
- [Aptakube](https://aptakube.com) - モダンで軽量でマルチクラスターデスクトップクライアント Kubernetes. 複数のクラスターに同時に接続して、すべてのリソースを表示、編集、管理できます。

### データ処理と機械学習
- :green_heart:[Kubeflow](https://github.com/kubeflow/kubeflow)  :fire::fire::fire::fire::fire: - KubeflowはGoogleの内部機械学習パイプラインに基づいて機械学習のためのクラウドネイティブプラットフォームです。
- :green_heart:[nos](https://github.com/nebuly-ai/nos)  :fire::fire: - - - `nos` AI のワークロードを効率的に実行するためのオープンソースプラットフォームです。 Kubernetes, インフラと運用コストを削減し、GPU利用率を高めます。
- :green_heart:[Strimzi](https://github.com/strimzi/strimzi-kafka-operator)  :fire::fire::fire::fire::fire: - StrimziはApache Kafkaクラスターを実行するための方法を提供します Kubernetes または OpenShift は、さまざまな展開設定で行います。
- :green_heart:[Volcano](https://github.com/volcano-sh/volcano)  :fire::fire::fire::fire: - ボルケーノは造られるバッチ システムです Kubernetesお問い合わせ
- :green_heart:[yunikorn](https://github.com/apache/incubator-yunikorn-core)  :fire::fire: - コンテナオーケストレータシステム用の軽量、ユニバーサルリソーススケジューラ。

### データ管理
- :green_heart:[Kubegres](https://github.com/reactive-tech/kubegres)  :fire::fire::fire: - Kubegresは Kubernetes オペレータは、データレプリケーションとフェイルオーバー機能のアウトオブザボックスを使用して、PostgreSqlポッドの1つまたは複数のクラスターをデプロイすることができます。
- :green_heart:[Postgres Operator](https://github.com/CrunchyData/postgres-operator)  :fire::fire::fire::fire::fire: - PGO、Crunchy DataのPostgres Operatorは、PostgreSQLクラスターを自動的に管理する宣言的なPostgresソリューションを提供します。
- :green_heart:[MongoDB Community Kubernetes Operator](https://github.com/mongodb/mongodb-kubernetes-operator)  :fire::fire: - これは、 Kubernetes MongoDBコミュニティをデプロイする演算子 Kubernetes クラスター。
- :green_heart:[MySQL Operator for Kubernetes](https://github.com/mysql/mysql-operator)  :fire: - MYSQLのオペレータのための Kubernetes オペレータは Kubernetes MySQL InnoDBの管理 クラスタの設定 Kubernetes クラスタ。
- :green_heart:[Redis Operator](https://github.com/spotahome/redis-operator)  :fire::fire::fire: - Redis 演算子は/configures/manages redis-failovers atop を作成します。 Kubernetesお問い合わせ

### ツイート
- :green_heart:[Agones](https://github.com/googleforgames/agones)  :fire::fire::fire::fire::fire: - Agonesは、ホスティング、実行、および専用のゲームサーバーをスケーリングするためのライブラリです Kubernetesお問い合わせ
- :green_heart:[AWS Controllers for Kubernetes](https://github.com/aws/aws-controllers-k8s)  :fire::fire::fire::fire: - AWS コントローラー Kubernetes (ACK) AWS サービスリソースを直接定義し、使用する Kubernetesお問い合わせ
- :green_heart:[AWS Node Termination Handler](https://github.com/aws/aws-node-termination-handler)  :fire::fire::fire: - A Kubernetes 優雅にEC2インスタンスのシャットダウンを処理するデーモンセット
- :green_heart:[Brigade](https://github.com/brigadecore/brigade/)  :fire::fire::fire::fire::fire: - Brigadeはパイプラインを作成するためのツールです Kubernetesお問い合わせ
- :green_heart:[Crossplane](https://github.com/crossplane/crossplane)  :fire::fire::fire::fire::fire: - クロスプレーンはオープンソースです Kubernetes クラウドインフラストラクチャ、サービス、およびアプリケーションをプロビジョニングおよび管理する機能を備えたクラスターを拡張するアドオン。
- :green_heart:[Descheduler for Kubernetes](https://github.com/kubernetes-sigs/descheduler)  :fire::fire::fire::fire::fire: - ポリシーに基づいてノードからPodをスケジュールする
- :green_heart:[Devtron](https://github.com/devtron-labs/devtron)  :fire::fire::fire::fire: - それは開発者の友好的な方法でkubernetesのアプリケーション(AppOps)を操作し、維持するためのセルフサービスプラットフォームとして設計されています。
- :green_heart:[OpenCost](https://github.com/opencost/opencost)  :fire::fire::fire::fire::fire: - OpenCostモデルは、チームを現在の履歴と履歴に可視化します Kubernetes 支出と資源配分。
- :green_heart:[K8s-Cleaner](https://github.com/gianlucam76/k8s-cleaner)  :fire: - - - `k8s-cleaner` 未使用のリソースを識別し、削除します。
- :green_heart:[K8sPurger](https://github.com/yogeshkk/K8sPurger)  :fire: - - - `K8sPurger` ハント未使用のリソースで Kubernetesお問い合わせ
- :green_heart:[KubeEdge](https://github.com/kubeedge/kubeedge)  :fire::fire::fire::fire::fire: - KubeEdge は、 Kubernetes ネイティブなコンテナ化されたアプリケーションオーケストレーションとデバイス管理を Edge でホストします。
- :green_heart:[KubePug](https://github.com/rikatz/kubepug)  :fire::fire: - アップグレード前の非推奨事項を確認するツール Kubernetes バージョン
- :green_heart:[Kube No Trouble](https://github.com/doitintl/kube-no-trouble)  :fire::fire::fire::fire::fire: - 以前の API を使用するクラスターを簡単にチェック
- :green_heart:[Shell-operator](https://github.com/flant/shell-operator)  :fire::fire::fire::fire: - Shell-operatorはイベント主導のスクリプトを実行するためのツールです。 Kubernetes クラスター。

## ガイド、ドキュメント、ブログ、学習

### ガイド
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - 包括的な導入 Kubernetes アーキテクチャ
- [A Deep Dive Into Kubernetes Schema Validation](https://www.datree.io/resources/kubernetes-schema-validation) - ガイドについて Kubernetes スキーマとOSSとネイティブツールを使用して検証する方法
- [A Guide to the Kubernetes Networking Model](https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/) - 詳細なランスルー Kubernetes ネットワーク
- [Amazon EKS Best Practices Guide for Security](https://aws.github.io/aws-eks-best-practices/) - 本ガイドでは、リスクアセスメントや緩和戦略を通じてビジネス価値を届けながら、EKSに頼る情報、システム、資産の保護に関するアドバイスを行っています。
- [Amazon EKS Node Drainer](https://github.com/aws-samples/amazon-k8s-node-drainer)  :fire: - EC2 ノードからすべての evictable Pod を中止し、回避するためのガイドと例。
- [Comparison of Kubernetes Ingress controllers](https://docs.google.com/spreadsheets/d/191WWNpjJ2za6-nbG4ZoUMXMpUK8KlCIosvQB0f-oq3k/htmlview?pru=AAABdXUHlbs*g6XkyoZXhanlhRazst77Xw) - この研究は14の異なる能力を比較します Kubernetes 侵入のコントローラー。  
- [Configuring HA Kubernetes cluster on bare metal servers with kubeadm](https://medium.com/faun/configuring-ha-kubernetes-cluster-on-bare-metal-servers-with-kubeadm-1-2-1e79f0f7857b) ・HAを立てるガイド Kubernetes kubeadm のベアメタルサーバーのクラスター。
- [Introduction to Using Google Kubernetes Engine; Explain Like I’m Five!](https://medium.com/faun/google-kubernetes-engine-explain-like-im-five-1890e550c099) - 最初の管理を作成する Kubernetes Googleのクラスター Kubernetes テラフォームを用いたエンジン
- [Kubernetes Network Policy Recipes](https://github.com/ahmetb/kubernetes-network-policy-recipes)  :fire::fire::fire::fire::fire: - このリポジトリにはさまざまなユースケースが含まれています Kubernetes ネットワークポリシーとYAMLファイルをサンプルして、セットアップで活用します。
- [Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)  :fire::fire::fire::fire::fire: - - - Kubernetes ハード・ウェイは、ブーツトラッピングを通してあなたをガイドします。 Kubernetes コンポーネントとRBAC認証間のエンドツーエンドの暗号化でクラスター。
- [Kubernetes Working Group for Multi-Tenancy](https://github.com/kubernetes-sigs/multi-tenancy)  :fire::fire::fire: ・マルチテナント関連提案や試作の現場です。
- [Production grade Kubernetes Monitoring using Prometheus](https://medium.com/faun/production-grade-kubernetes-monitoring-using-prometheus-78144b835b60) - Prometheusモニタリングソリューションをデプロイする詳細なガイド。
- [The Illustrated Children’s Guide to Kubernetes](https://www.cncf.io/phippy/the-childrens-illustrated-guide-to-kubernetes/) - グラフィックの説明 Kubernetes
- [Troubleshooting Kubernetes deployments](https://learnk8s.io/a/troubleshooting-kubernetes.pdf) - 問題の場合にはkubernetes展開をトラブルシューティングするためのフローチャート
 - [Vertical Pod Autoscaling: The Definitive Guide](https://povilasv.me/vertical-pod-autoscaling-the-definitive-guide/) - 詳細な説明 Kubernetes VPA:それが何であるか、それがどのように機能するか、それを使用する方法およびそれがある制限。 
- [Writing Your First Kubernetes Operator](https://medium.com/faun/writing-your-first-kubernetes-operator-8f3df4453234) - この記事では、まず最初にビルドしてデプロイする方法を説明します。 Kubernetes オペレータSDKを使用してオペレータ。

### ブログと動画
- [10 most common mistakes using kubernetes](https://blog.pipetail.io/posts/2020-05-04-most-common-mistakes-k8s/) - 一般的な落とし穴とそれらを避ける方法。  
- [How the Department of Defense Moved to Kubernetes and Istio](https://www.youtube.com/watch?v=YjZ4AZ7hRM0) - Envoy および sidecar の容器の活用のサイドカーの保証積み重ねにゼロの信頼の保証および製粉された多層の保証を保障するために焦点を合わせて下さい。  
- [Kubernetes at Reddit: Tales from Production](https://youtu.be/WTbIBqNcjoQ) - 成功の恐怖、生産の爆発の鼓動で共有し、世界の忙しいウェブ特性の1つのためにうまく働かなかったものへの洞察を得る。  
- [Kubernetes Failure Stories](https://github.com/hjacobs/kubernetes-failure-stories)  :fire::fire::fire::fire::fire: - 関連する公開失敗のストーリーへのリンクのコンパイルされたリスト Kubernetesお問い合わせ  
- [Life of a Packet](https://www.youtube.com/watch?v=0Omvgd7Hg1I) - ネットワークトラフィックの経路を追跡する Kubernetes システム。  
- [OPA Deep Dive](https://www.youtube.com/watch?v=Uj2N9S58GLU) - 共演者によるOPAプロジェクトで、いくつかのエキサイティングな新機能のディープダイビング。  
- [Scaling Kubernetes to 2,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-2500-nodes/) + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + [Scaling Kubernetes to 7,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-7500-nodes/) - 大規模稼働時に遭遇する問題 Kubernetes ワークロード。
- [Service Mesh Comparison](https://servicemesh.es/) - サービスメッシュの実装の1つを選ぶのに役立つ簡単な補償。  
- [ArgoCD Best Practices](https://datree.io/resources/argocd-best-practices-you-should-know)

### 学習とドキュメント
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - 包括的な導入 Kubernetes アーキテクチャ
- [ConfigMaps in Kubernetes: how they work and what you should remember](https://blog.flant.com/configmaps-in-kubernetes-how-they-work-and-what-you-should-remember/) - ConfigMapsの進化を理解する、どのように機能するか、そして変更時に何が起こるか。 
- [Configuring Redis using a ConfigMap](https://kubernetes.io/docs/tutorials/configuration/configure-redis-using-configmap/) - ConfigMapを使用してRedisを設定する方法の実際の世界例を提供するウォークスルー
- [Example: Deploying Cassandra with a StatefulSet](https://kubernetes.io/docs/tutorials/stateful-application/cassandra/) - このチュートリアルでは、Apache Cassandraの実行方法を説明します Kubernetes. カサンドラ、データベース、データ耐久性を提供する永続的なストレージが必要です。
- [Example: Deploying PHP Guestbook application with Redis](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/) - このチュートリアルでは、シンプルでマルチ層のWebアプリケーションの構築と展開方法を説明します。 Kubernetes そしてDocker。
- [Example: Deploying WordPress and MySQL with Persistent Volumes](https://kubernetes.io/docs/tutorials/stateful-application/mysql-wordpress-persistent-volume/) - このチュートリアルでは、Minikubeを使用してWordPressサイトとMySQLデータベースをデプロイする方法を紹介します。
- [Exposing an External IP Address to Access an Application in a Cluster](https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address/) - このガイドは、作成方法を示しています Kubernetes 外部IPアドレスを公開するサービスオブジェクト。
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) - 一般的なkubectlコマンドとフラグの公式リスト。  
- [Kubectl Kubernetes CheatSheet](https://github.com/dennyzhang/cheatsheet-kubernetes-A4)  :fire::fire::fire::fire: - 多くの有用なkubectlコマンドを含む不正なシート
- [Kubernetes API Reference Docs](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/) - 提供されるリソースの基本的なタイプの高レベルの概要 Kubernetes APIとプライマリ関数。  
- [Learn Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/) - このチュートリアルは、基本のウォークスルーを提供します Kubernetes クラスターオーケストレーションシステム
- [Play with Kubernetes](https://labs.play-with-k8s.com/) - 遊ぶ Kubernetes ユーザーが実行することを可能にする遊び場です K8s 秒単位のクラスター。
- [Ready-to-use commands and tips for kubectl](https://blog.flant.com/ready-to-use-commands-and-tips-for-kubectl/) - Flantのエンジニアによる様々なkubectlのヒントとコツ。  
- [Running ZooKeeper, A Distributed System Coordinator](https://kubernetes.io/docs/tutorials/stateful-application/zookeeper/) - このチュートリアルでは、Apache Zookeeperを実行していることを実証します Kubernetes StatefulSets、PodDisruptionBudgets、およびPodAntiAffinityを使用して。
- [Set Up a CI/CD Pipeline with Kubernetes](https://www.linux.com/audience/enterprise/set-cicd-pipeline-kubernetes-part-1-overview/) - CI/CD パイプラインをセットアップするエンドツーエンドガイド Kubernetesお問い合わせ
- [StatefulSet Basics](https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/) - このチュートリアルでは、StatefulSetsでアプリケーションを管理するための導入を提供しています。
- [Webinar: K8s with OPA Gatekeeper](https://www.youtube.com/watch?v=v4wJE3I8BYM) - OPAを使用して、エンドユーザーがクラスターやクラスターが社内ポリシーに順守されていることを確認する方法を制御する方法。  

### 認定ガイド
- [Certified Kubernetes Security Specialist - CKSS](https://github.com/ijelliti/CKSS-Certified-Kubernetes-Security-Specialist)  :fire::fire: - このリポジトリは、認定のために準備するリソースのコレクションです Kubernetes セキュリティスペシャリスト(CKSS)試験
- [CKS "Certified Kubernetes security specialist certification](https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist)  :fire::fire::fire::fire: - - - Kubernetes 試験中に許可されている材料から優先的にセキュリティリソース、および追加のオプションアイテムは、コンテナとkubernetesのセキュリティジャーニーを推進するのに役立ちます。
- [How to pass the Certified Kubernetes Administrator (CKA) exam on the first attempt](https://medium.com/faun/how-to-pass-certified-kubernetes-administrator-cka-exam-on-first-attempt-36c0ceb4c9e) - CKA試験合格ガイド
- [The ultimate CKA "Certfified Kuberenetes Administator" resource since exam inception](https://github.com/walidshaari/Kubernetes-Certified-Administrator)  - CKA試験をマスターするだけでなく、あなたのkubernetes管理の知識を統合するための追加のリソースを助けるために、officalリソースの更新リポジトリ。
- [Kubernetes Exam Simulator](https://killer.sh/) - CKS/CKA/CKADは、シナリオと環境をテストします。  

## 貢献する

ご協力のほどよろしくお願いします! 読む [contribution guidelines](contributing.md) まずは。


## ライセンス

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

法律の下で可能な範囲に, トム・ホアンは、すべての著作権を放棄し、
この作品に関連または隣接する権利。
