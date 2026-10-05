# Awesome Kubernetes 資源 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

很棒的名單 Kubernetes 工具与資源。

受到 [awesome](https://github.com/sindresorhus/awesome) 列表和 [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws).

## 強烈的火焰

* 星數達到 0050+ 的儲存庫：:fire:
* 星數達到 0200+ 的儲存庫：:fire::fire:
* 星數達到 0500+ 的儲存庫：:fire::fire::fire:
* 星數達到 1000+ 的儲存庫：:fire::fire::fire::fire:
* 星數達到 2000+ 的儲存庫：:fire::fire::fire::fire::fire:

想法取自 [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws). 


## 附 件
- [工具和圖書館](#tools-and-libraries)
  - [命令行工具](#command-line-tools)
  - [群組提供](#cluster-provisioning)
  - [自动化和CI/CD](#automation-and-cicd)
  - [群組資源管理](#cluster-resources-management)
  - [秘密管理](#secrets-management)
  - [建立網路](#networking)
  - [儲存](#storage)
  - [測試和挑戰](#testing-and-troubleshooting)
  - [監控、警報和視覺化](#monitoring-alerts-and-visualization)
  - [備份和恢复](#backup-and-restore)
  - [安全和遵守](#security-and-compliance)
  - [服務網格](#service-mesh)
  - [發展工具](#development-tools)
  - [資料處理與機器學習](#data-processing-and-machine-learning)
  - [資料管理](#data-management)
  - [其他](#miscellaneous)
- [指南、文件、部落格和學習](#guides-documentations-blogs-and-learnings)
  - [指南](#guides)
  - [部落格和影片](#blogs-and-videos)
  - [学习和文件](#learnings-and-documentations)
  - [憑證指南](#certification-guides)
- [贡献](#contribute)
- [執照](#license)


## 工具和圖書館
有項目 :green_heart: 表示開源專案。 

### 命令行工具
- :green_heart:[Helm](https://github.com/helm/helm)  :fire::fire::fire::fire::fire: - Helm是管理圖的工具 圖表是預設的套件 Kubernetes 资源。
- :green_heart:[Helmfile](https://github.com/helmfile/helmfile)  :fire::fire::fire::fire::fire: - Helmfile是布置導航圖的宣示
- :green_heart:[Helmwave](https://github.com/helmwave/helmwave)  :fire::fire::fire: - Helmwave是用于部署Helm圖表的 導航3 - 本地工具。 這就像多克·斯托斯 但對赫姆來說
- :green_heart:[Infra](https://github.com/infrahq/infra)  :fire::fire::fire: 基建(例如: Kubernetes,資料庫). 我們幫助您連接象 Okta 或 Azure 作用中的目錄等身份提供商, 並將使用者/ 群組的地圖與您為您的基礎設置的權限連接 。
- :green_heart:[K9s](https://github.com/derailed/k9s)  :fire::fire::fire::fire::fire: - K9s 提供了一個終端UI與您的互動 Kubernetes 群組。
- :green_heart:[kapp](https://github.com/vmware-tanzu/carvel-kapp)  :fire::fire::fire: - Kapp是一個簡單的部署工具,Kubernetes 應用程式 —— 具有相同標籤的資源集
- :green_heart:[kconnect](https://github.com/fidelity/kconnect)  :fire::fire: - kconnect 是 CLI 工具, 可用于發現安全存取 Kubernetes 群組跨越多個操作環境。
- :green_heart:[kl](https://github.com/robinovitch61/kl)  :fire: kl 是互動的終端應用程式, 可以與許多容器與群組的紀錄相互作用 。
- :green_heart:[Ktunnel](https://github.com/omrikiei/ktunnel)  :fire::fire: Ktunnel 是一個CLI 工具, 它在 kubernetes 群組與您的本地機器之間建立反向通道 。
- :green_heart:[Kubebox](https://github.com/astefanutti/kubebox)  :fire::fire::fire::fire: - 终端和網頁控制台 Kubernetes
- :green_heart:[Kubetail](https://github.com/johanhaleby/kubetail)  :fire::fire::fire::fire::fire: ─ Bash 文稿可以讓您從多個 pocks 集中( 尾/ 跟著) 紀錄到一個流 。
- :green_heart:[kube-shell](https://github.com/cloudnativelabs/kube-shell)  :fire::fire::fire::fire: - Kube-shell: 配合 Kubernetes CLI(CLI).
- 💚[kubecolor](https://github.com/kubecolor/kubecolor) QQ - 色彩化 kubectl 輸出
- :green_heart:[kubectl tree](https://github.com/ahmetb/kubectl-tree)  :fire::fire::fire::fire: - 探索所有者關係的 kubectl 外掛程式 Kubernetes 物件通过所有者。
- :green_heart:[kubectl-aliases](https://github.com/ahmetb/kubectl-aliases)  :fire::fire::fire::fire::fire: - 這個寄存器包含一個文稿來產生數以百計的 kubectl 的方便 shell 化名 。
- :green_heart:[kubectx + kubens](https://github.com/ahmetb/kubectx)  :fire::fire::fire::fire::fire: - – `kubectx` 幫助您在群組中回轉,以及 `kubens` 幫助您切換 Kubernetes 命名空間平滑 。
- :green_heart:[kube-ps1](https://github.com/jonmosco/kube-ps1)  :fire::fire::fire::fire::fire: - Kube- ps1: 使您加入目前文字的文稿 Kubernetes 在 kubectl 上設定到您的 Bash/ Zsh 即時字串( 即 $PS1 ) 的上下文和名稱區域 。
- :green_heart:[kubediff](https://github.com/weaveworks/kubediff)  :fire::fire::fire: - 庫比迪夫是個工具 Kubernetes 以顯示您執行的配置與版本控制配置的區別。
- :green_heart:[kubeprompt](https://github.com/jlesquembre/kubeprompt)  :fire: - 隔離 KUBECONFIG 在每個 shell 中, 顯示目前 Kubernetes 上下文/ 命名空格在您的提示中
- :green_heart:[Kubevela](https://github.com/oam-dev/kubevela)  :fire::fire::fire::fire::fire: - KubeVela是一個容易使用、但可扩展的平台,
- :green_heart:[Move2Kube](https://github.com/konveyor/move2kube)  :fire::fire: 幫助使用者從Cloud Foundry等傳統平台移動應用程式的工具 Kubernetes 和開班。 分析應用程式源碼並產生 Kubernetes YAMLs,Helm Charts,Tekton管道等. 分析和生成可以大量定制 以產生你想要的确切的輸出 。
- :green_heart:[nova](https://github.com/FairwindsOps/nova/)  :fire::fire: - Nova掃瞄你安裝的Helm圖的群組 然后对照所有已知的Helm寄存器檢查
- :green_heart:[Plural](https://github.com/pluralsh/plural)  :fire::fire: - Plural是CLI的工具和全體DevOps管理平台,用于快速部署、管理和监测開源應用程式 Kubernetes.
- :green_heart:[RBAC Lookup](https://github.com/FairwindsOps/rbac-lookup)  :fire::fire::fire: - RBAC查查是CLI,讓你很容易找到 Kubernetes 角色與群組角色結合於任何使用者、服務帳號或群組名稱。
- :green_heart:[stern](https://github.com/stern/stern)  :fire::fire::fire::fire::fire: 斯特恩允許你跟蹤多個艙 Kubernetes 以及多個容器

### 群組提供
- :green_heart:[Bootkube](https://github.com/kubernetes-sigs/bootkube)  :fire::fire::fire::fire: - Bootkube是自行發射工具 Kubernetes 群組。
- :green_heart:[Claudie](https://github.com/berops/claudie)  :fire: -多云群組 和不同的云提供商的節點
- :green_heart:[Cluster API](https://github.com/kubernetes-sigs/cluster-api)  :fire::fire::fire::fire::fire: - 群組 API 是 Kubernetes 子專案侧重于提供宣傳性API和工具,以简化提供、提升和操作多重 Kubernetes 群組。
- :green_heart:[eksctl](https://github.com/weaveworks/eksctl)  :fire::fire::fire::fire::fire: - – `eksctl` 在 EKS 上建立群組的簡單 CLI 工具 - Amazon 新管理 Kubernetes EC2 服務。
- :green_heart:[k0s](https://github.com/k0sproject/k0s)  :fire::fire::fire::fire::fire: k0s - 零旋轉 Kubernetes (簡單、 固體和授權) Kubernetes 分配)
- :green_heart:[k3d](https://github.com/rancher/k3d)  :fire::fire::fire::fire::fire: - k3d, 和 Windows., destroy, 一半的記憶體, 高度可用, 是運行本地 k3s 群組的工具 。 這是一個單位的二進制 約20 MB 你需要安裝器子。
- :green_heart:[k3s](https://github.com/rancher/k3s)  :fire::fire::fire::fire::fire: - 輕巧 Kubernetes很容易安裝Kubernetes 命令行的群組。
- :green_heart:[kind](https://github.com/kubernetes-sigs/kind)  :fire::fire::fire::fire::fire: - 類型是執行本地化的工具 Kubernetes 使用 Docker 容器"節點"的群組 。
- :green_heart:[kops](https://github.com/kubernetes/kops)  :fire::fire::fire::fire::fire: - – `kops` 幫助您建立, 類似善良, 提升並維持產品級
- :green_heart:[kube-aws](https://github.com/kubernetes-incubator/kube-aws)  :fire::fire::fire::fire: - – `kube-aws` 是建立/更新/销毁的命令行工具 Kubernetes AWS 上的群組。
- :green_heart:[kubespray](https://github.com/kubernetes-sigs/kubespray)  :fire::fire::fire::fire::fire: - 做好了 Kubernetes 群組
- :green_heart:[microK8s](https://github.com/ubuntu/microk8s)  :fire::fire::fire::fire::fire: - 最小的,最快的 Kubernetes
- :green_heart:[Minikube](https://github.com/kubernetes/minikube)  :fire::fire::fire::fire::fire: - 迷你庫伯實施本地的 Kubernetes 群組在 macOS, Linux 上, 都在小於 100 MB 的二進位 。
- :green_heart:[Talos Linux](https://github.com/siderolabs/talos)  :fire::fire::fire::fire::fire: - Talos Linux 是安裝香草的最小、不可變化的安全OS Kubernetes - 制作數據中心, K8s@home,以及Edge。
- :green_heart:[karpenter]([https://karpenter.sh](https://github.com/aws/karpenter-provider-aws))  :fire::fire::fire::fire::fire: - 卡彭特是... Kubernetes 節點自動調整器的建設有灵活性、性能和簡便性。
- :green_heart:[Kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/) - Kubeadm 做一些必要的動作 才能讓一個最小的可行群組開始運作
- :green_heart:[vCluster](https://github.com/loft-sh/vcluster/) : :fire::fire::fire::fire::fire: - vCluster 允許您建立完整功能的虛擬 Kubernetes 相當於傳統, Kubernetes. 
  
### 自动化和CI/CD
- :green_heart:[Argo CD](https://github.com/argoproj/argo-cd)  :fire::fire::fire::fire::fire: - Argo CD 是一個宣傳的 GitOps 持續傳送工具 Kubernetes.
- :green_heart:[Argo Events](https://github.com/argoproj/argo-events)  :fire::fire::fire::fire: - Argo Events 是事件驱动的工作流程自動框架 Kubernetes 幫助你觸發 K8s 物件、 Argo 工作流程、無伺服器工作量等。
- :green_heart:[Argo Rollouts](https://github.com/argoproj/argo-rollouts)  :fire::fire::fire::fire: - Argo Rollouts控制器,使用Rollout自訂資源,以提供额外的部署策略,如藍綠和加那利 Kubernetes.
- :green_heart:[Argo Workflows](https://github.com/argoproj/argo)  :fire::fire::fire::fire::fire: - Argo Workflows是一款開源的容器內置工作流程引擎,用于协调并行的工作 Kubernetes.
- :green_heart:[Argocd autopilot](https://github.com/argoproj-labs/argocd-autopilot)  :fire::fire::fire: Argo- CD 自動駕駛器是一種工具, 它提供一种有觀點的安裝 Argo- CD 和管理 GitOps 寄存器的方法。
- :green_heart:[Flagger](https://github.com/weaveworks/flagger)  :fire::fire::fire::fire::fire: - Flagger 是一個進步的傳送工具,可以自動執行應用程式的放行流程 Kubernetes.
- :green_heart:[Flux2](https://github.com/fluxcd/flux2)  :fire::fire::fire::fire::fire: - 豪華版2從地面到使用 KubernetesAPI 延伸系統,并整合 Prometheus 和其他核心元件 Kubernetes 生态系统。
- :green_heart:[k8s-image-swapper](https://github.com/estahn/k8s-image-swapper/)  :fire::fire: - – `k8s-image-swapper` 是突變的網游 Kubernetes,在您自己的登記簿中下載影像,并将影像指向新位置。
- :green_heart:[Kubero](https://github.com/kubero-dev/kubero)  :fire::fire::fire::fire::fire: - 自由的自我托管的 Heroku PaaS Kubernetes 執行 GitOps
- :green_heart:[KubeSphere](https://github.com/kubesphere/kubesphere)  :fire::fire::fire::fire::fire: - KubeSphere是分布式操作系統,提供云母堆栈 Kubernetes 作為它的內核, 目標是作為第三方應用程式的插件與遊戲架构 無缝集成,
- :green_heart:[Reloader](https://github.com/stakater/Reloader)  :fire::fire::fire::fire::fire: - 裝填器可以監視變更 `ConfigMap` 和 `Secret` 并用相關方式在 Pods 上進行翻版 `DeploymentConfigs`, `Deployments`, `Daemonsets` 和 `Statefulsets`.
- :green_heart:[terranetes-controller](https://github.com/appvia/terranetes-controller)  :fire: - Terranetes控制器讓平台團隊能 提供與云資源相關的自我服務能力
- :green_heart:[Skaffold](https://github.com/GoogleContainerTools/skaffold)  :fire::fire::fire::fire::fire: - Skaffold 是一個命令行工具, 方便於繼續發展 Kubernetes 应用程序。
- :green_heart:[Spinnaker](https://github.com/spinnaker/spinnaker)  :fire::fire::fire::fire::fire: Spinnaker是開源的 持續送貨平台 以高速度和信心釋放軟體變更
- :green_heart:[TF-controller](https://github.com/weaveworks/tf-controller)  :fire: TF控制器是Flux的實驗控制器 用GitOps的方式調和Terraform資源
- :green_heart:[werf](https://github.com/werf/werf)  :fire::fire::fire::fire::fire: - Werf 是粘合 Git, Docker, Helm & 的 CLI 工具 Kubernetes 使用任何 CI 系統來執行 CI/CD 和 GitOps 。 
- :green_heart:[Weave GitOps](https://github.com/weaveworks/weave-gitops)  :fire::fire: - 編织 GitOps 是一個簡單的開源開發平台, 供那些想要云母應用程式的人使用, 而不需要 Kubernetes 專業
- :green_heart:[Otomi - Self-hosted PaaS for K8s](https://github.com/redkubes/otomi-core)  :fire::fire::fire::fire: - Otomi 在上方增加了以開發器和操作为中心的工具、自动化和開發器自助服務 Kubernetes 以編碼、建築、釋放、部署、安全、操作和监督容器化的應用程式。
:green_heart:[Cozystack - Self-hosted PaaS for K8s](https://github.com/cozystack/cozystack)  :fire::fire::fire::fire: - 一個自營式的PaaS, 建於硬化的 Talos Linux 群組上, Kubernetes 自动化到自己的金屬。 如果你正在建造高級的雲或邊緣堆

### 群組資源管理
- :green_heart:[Clusterpedia](https://github.com/clusterpedia-io/clusterpedia)  :fire: - Crouppedia 用于跨多群組的複雜資源搜尋, 支持同步搜尋多群組中存在的單類資源或多類資源 。
- :green_heart:[Grafana Tanka](https://github.com/grafana/tanka)  :fire::fire::fire::fire: - 對YAML來說 是清潔、简洁和超灵活的替代方案 Kubernetes 群組。
- :green_heart:[KEDA](https://github.com/kedacore/keda)  :fire::fire::fire::fire::fire: - KEDA 允許對事件驅動的精細的谷物自動調整( 包括到/ 從零) Kubernetes 工作量。
- :green_heart:[Kruise](https://github.com/openkruise/kruise)  :fire::fire::fire::fire::fire: - Kruise由數個控制器组成,可以延伸和補充 Kubernetes 工作量管理核心控制器。
- :green_heart:[KubeDirector](https://github.com/bluek8s/kubedirector)  :fire::fire: - Kube主任用標準 Kubernetes (K8s自訂資源的設施和 API 延伸, 以實施狀態的擴張應用群組 。
- :green_heart:[Kubenav](https://github.com/kubenav/kubenav)  :fire::fire::fire::fire: - 庫貝納夫是你的航海家 Kubernetes 群組就在你的口袋里
- :green_heart:[Liqo](https://github.com/liqotech/liqo)  :fire::fire: - Liqo 實施不同的动态資源共享 Kubernetes 群組(例如:卸载艙和服务),支持分散治理。
- :green_heart:  [Meshery](https://github.com/meshery/meshery)  :fire::fire::fire::fire::fire: - Mesherry是開源的云母管理員 能夠設計和管理所有 Kubernetes- 基建和应用。
- :green_heart:[Pluto](https://github.com/FairwindsOps/pluto)  :fire::fire::fire::fire: - 冥王星是幫助使用者找到腐敗的工具 Kubernetes 它們的密碼寄存器和導管放出
- :green_heart:[Polaris](https://github.com/FairwindsOps/polaris)  :fire::fire::fire::fire::fire: - 极地是開源政策引擎 Kubernetes 以驗證和补救資源設定。
- :green_heart:[Projectsveltos](https://github.com/projectsveltos/addon-manager)  :fire: 專案veltos 是 Kubernetes 新增控制器,可以简化多群組中新增和應用程式的部署和管理。
- :green_heart:[The Hierarchical Namespace Controller](https://github.com/kubernetes-sigs/multi-tenancy/tree/master/incubator/hnc)  :fire::fire::fire: - 分級命名空間 讓命名空間更強大 更容易分享你的群組

### 秘密管理
- :green_heart:[Kubernetes External Secrets](https://github.com/godaddy/kubernetes-external-secrets)  :fire::fire::fire::fire::fire: - – Kubernetes 外部機密允許您使用外部機密管理系統, 如 AWS 秘密管理員或 HashiCorp Vault , 安全新增機密 Kubernetes.
- :green_heart:[Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets)  :fire::fire::fire::fire::fire: - 把你的秘密加密到封存的封存器中 封存器是安全的 即使是公開的寄存器
- :green_heart:[akv2k8s](https://github.com/SparebankenVest/azure-key-vault-to-kubernetes)  :fire::fire: - Azure 金鑰 Kubernetes (kv2k8s)將讓 Azure 金鑰存在 Kubernetes 兩種方式: Kubernetes 秘密; 直接注入容器的環境變數

### 建立網路
- :green_heart:[Calico Networking](https://github.com/projectcalico/calico)  :fire::fire::fire::fire::fire: - Calico是一個開源網絡及網路安全解決方案,
- :green_heart:[cert-manager](https://github.com/jetstack/cert-manager)  :fire::fire::fire::fire::fire: - 管理員是 Kubernetes 新增以自動管理及發行不同發佈來源的 TLS 憑證 。
- :green_heart:[cilium](https://github.com/cilium/cilium)  :fire::fire::fire::fire::fire: -Cilium是一個網路,可觀性,安全性 溶液与基于eBPF的數據機。
- :green_heart:[CoreDNS](https://github.com/coredns/coredns)  :fire::fire::fire::fire::fire: - CoreDNS是快速而灵活的 DNS 伺服器。 Kubernetes.
- :green_heart:[ingress-nginx](https://github.com/kubernetes/ingress-nginx)  :fire::fire::fire::fire::fire: - – `ingress-nginx` 是入侵控制器 Kubernetes 使用 NGINX 作為反向代理和載入平衡器 。
- :green_heart:[Kong for Kubernetes](https://github.com/Kong/kubernetes-ingress-controller)  :fire::fire::fire::fire: - 在 Kong 中配置插件、 健康檢查、 載入平衡及更多 Kubernetes 服務
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - 使用 tcpdump 和 Wireshark 的 kubectl 外掛程式以啟動遠端捕捉您的任何艙 Kubernetes 群組。
- :green_heart:[kubectl trace](https://github.com/iovisor/kubectl-trace)  :fire::fire::fire::fire: - – `kubectl trace` 是 kubectl 外掛程式, 讓您在您的程式中排程執行 bpftrace 程式 Kubernetes 群組。
- :green_heart:[Kube Karp](https://github.com/immanuelfodor/kube-karp)  :fire: - 新增浮式虛擬IP到 Kubernetes 依據 CARP 协议輕易平衡載荷的群組節點
- :green_heart:[kubernetes-ingress](https://github.com/nginxinc/kubernetes-ingress)  :fire::fire::fire::fire::fire:  - NGINX和NGINX Plus(商用)的入侵控制器。
- :green_heart:[kube-ovn](https://github.com/alauda/kube-ovn)  :fire::fire::fire::fire:  - A Kubernetes 功能豐富且易操作的企業的網路建設 。
- :green_heart:[loxilb](https://github.com/loxilb-io/loxilb)  :fire::fire::fire:  - A Kubernetes 基于 eBPF 的服務載重平衡器。
  
### 儲存
- :green_heart:[Longhorn](https://github.com/longhorn/longhorn)  :fire::fire::fire::fire::fire: Longhorn是分布式區塊儲存系統 Kubernetes.
- :green_heart:[OpenEBS](https://github.com/openebs/openebs)  :fire::fire::fire::fire::fire: - OpenEBS是部署最廣且最容易使用的開源儲存解答 Kubernetes.
- :green_heart:[Rook](https://github.com/rook/rook)  :fire::fire::fire::fire::fire: - Rook是開源的云實存管弦樂手 Kubernetes.

### 測試和挑戰
- :green_heart:[Chainsaw](https://github.com/kyverno/chainsaw)  :fire: - 結束測試工具的終端 Kubernetes 操作者。
- :green_heart:[Chaos Mesh](https://github.com/pingcap/chaos-mesh)  :fire::fire::fire::fire::fire: - 混亂梅希是云內混亂的工程平台,它導致混亂 Kubernetes 環境
- :green_heart:[chaoskube](https://github.com/linki/chaoskube)  :fire::fire::fire::fire: - – `chaoskube` 定期殺害您的隨機艙 Kubernetes 群組。
- :green_heart:[Conftest](https://github.com/open-policy-agent/conftest)  :fire::fire::fire::fire: - Conftest 幫助您寫入 結構配置資料的測試。
- :green_heart:[DETIK](https://github.com/bats-core/bats-detik)  :fire: - 簡化端到端測的圖書館 K8s 使用 [BATS](https://github.com/bats-core/bats-core) 口述和自然語言探究。
- :green_heart:[k6](https://github.com/loadimpact/k6)  :fire::fire::fire::fire::fire: K6是現代的載重測試工具,
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - 使用 tcpdump 和 Wireshark 的 kubectl 外掛程式以啟動遠端捕捉您的任何艙 Kubernetes 群組。
- :green_heart:[Kube DOOM](https://github.com/storax/kubedoom)  :fire::fire::fire::fire: 下一層混亂工程到了 殺掉你體內的艙 Kubernetes 在末日射擊他們,
- :green_heart:[kube-monkey](https://github.com/asobti/kube-monkey)  :fire::fire::fire::fire::fire: - 隨機刪除 Kubernetes (k8s) 群組的吊艙鼓勵及證實 抗故障服務的發展。
- :green_heart:[kube-score](https://github.com/zegl/kube-score)  :fire::fire::fire::fire: - – `kube-score` 是執行您的靜態碼分析的工具 Kubernetes 物件定義。
- :green_heart:[Kubectl-debug](https://github.com/JamesTGrant/kubectl-debug)  :fire::fire::fire::fire::fire: - – `kubectl-debug` 是在樹林外的解決程式, 以排除執行中的錯誤, 讓您在執行中執行一個新容器, 以調试目的 。
- :green_heart:[KubeInvaders](https://github.com/lucky-sideburn/KubeInvaders)  :fire::fire::fire: - 通过Kube入侵者,你可以壓力 Kubernetes 以有趣的方式組成群組,並檢查它是如何有弹性的。
- :green_heart:[Kubetest](https://github.com/vapor-ware/kubetest)  :fire: - Kubetest是一个 pytest 插件,它更容易管理 Kubernetes 集成在您的整合測試中。
- :green_heart:[Litmus](https://github.com/litmuschaos/litmus)  :fire::fire::fire::fire::fire: - 利特穆斯提供工具 調整混亂 Kubernetes 幫助 SREs 在部署中找到弱点
- :green_heart:[popeye](https://popeyecli.io/)  :fire::fire::fire::fire::fire: - 大力水手是掃瞄直播的效用 Kubernetes 和群組,
- :green_heart:[PowerfulSeal](https://github.com/bloomberg/powerfulseal)  :fire::fire::fire::fire: - 強力海豹在你身上注入故障 Kubernetes 群組, 以便您能尽早發現問題 。
- :green_heart:[Testkube](https://github.com/kubeshop/testkube)  :fire::fire::fire: - Testkube 是一個 Kubernetes 實驗管弦與執行的原生測試框架 。 它能讓你在內部進行測試 Kubernetes 群組。 與您的 CI/ CD 整合, 並且允許您遵循 GitOps 的測試方法, 同时為您所有的測試結果設定一個中心位置 。

### 監控、警報和視覺化
- :green_heart:[BotKube](https://github.com/infracloudio/botkube)  :fire::fire::fire::fire: - BotKube與Slack或Matterm的集成 幫助你監視你 Kubernetes 檢查 Kubernetes 资源。
- :green_heart:[Canary Checker](https://github.com/flanksource/canary-checker)  :fire: - 卡納里檢查器是Kubernetes-native健康檢查平台 有30+內置健康檢查類型。
- :green_heart:[Cortex](https://github.com/cortexproject/cortex)  :fire::fire::fire::fire::fire: Cortex為普羅米修斯提供水平可伸展性,高可用性,多tenant,長期儲存.
- :green_heart:[Goldilocks](https://github.com/FairwindsOps/goldilocks)  :fire::fire::fire: ─ Goldilocks 是可以幫助您找到資源要求與限制的起始點的功能 。
- :green_heart:[Goldpinger](https://github.com/bloomberg/goldpinger)  :fire::fire::fire::fire::fire: - 调试工具 Kubernetes 以測試並顯示群組中節點之間的連通性。
- :green_heart:[Grafana](https://github.com/grafana/grafana)  :fire::fire::fire::fire::fire: - Grafana允許你查詢、視覺、警覺和理解你的測量,
- :green_heart:[Helm Dashboard](https://github.com/komodorio/helm-dashboard)  :fire::fire::fire::fire: - Helm失蹤的UI Helm Dashboard 外掛程式提供了由 UI 驱动的檢視已安裝的 Helm 圖表的方法, 查看其修正歷史和相应的 k8s 資源 。 
- :green_heart:[Kiali](https://github.com/kiali/kiali)  :fire::fire::fire::fire::fire: Kiali和Istio合作,
- :green_heart:[k8s-image-availability-exporter](https://github.com/flant/k8s-image-availability-exporter)  :fire: - Prometheus 匯出者 警告您要預防影像被定義 Kubernetes 物件,但不在容器登記簿中。 
- :green_heart:[kube-capacity](https://github.com/robscott/kube-capacity)  :fire::fire::fire: - 這是一個簡單的CLI, Kubernetes 群組。
- :green_heart:[Kubernetes Dashboard](https://github.com/kubernetes/dashboard)  :fire::fire::fire::fire::fire: - – Kubernetes Dashboard 是通用的, 網基UI 的 Kubernetes 群組。
- :green_heart:[Kubedev](https://github.com/relferreira/kubedev)  :fire: - Kubedev是一個強大的、美麗的使用者介面 Kubernetes 群組。
- :green_heart:[KubeHelper](https://github.com/KubeHelper/kubehelper)  :fire: - Kuberelfer - 簡化很多日常 Kubernetes 群組工作通過網路介面。
- :green_heart:[Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server)  :fire::fire::fire::fire::fire: - 量子伺服器是容器資源量的可伸縮、高效的來源 Kubernetes 內建自動調整管道
- :green_heart:[Kubernetes Operational View](https://github.com/hjacobs/kube-ops-view)  :fire::fire::fire::fire: - 工具,目的是提供多种操作圖象 Kubernetes 群組。
- :green_heart:[kube-state-metrics](https://github.com/kubernetes/kube-state-metrics)  :fire::fire::fire::fire::fire: - Kube - 狀態測量是一種簡單的服務,聽聽 Kubernetes API 伺服器并產生關於物件狀態的公制 。
- :green_heart:[kubewatch](https://github.com/robusta-dev/kubewatch)  :fire::fire::fire::fire::fire: - – `kubewatch` 是 Kubernetes 監視者目前公布到可用合作中心/通知渠道的通知。
- :green_heart:[Lens](https://github.com/lensapp/lens)  :fire::fire::fire::fire::fire: - Lens 這是一個有用的,有吸引力的,開源的使用者介面 Kubernetes 群組。
- :green_heart:[Mizu](https://github.com/up9inc/mizu)  :fire::fire::fire: - API 流量查看器 Kubernetes 允許您查看所有微服務的 API 通訊 。 TCPDump 和 Wireshark 重新發明 Kubernetes
- :green_heart:[Network mapper](https://github.com/otterize/network-mapper)  :fire::fire: - 地圖 Kubernetes 以文字、意图或影像匯出。
- :green_heart:[Popeye](https://github.com/derailed/popeye)  :fire::fire::fire::fire::fire: - 大力水手是掃瞄直播的效用 Kubernetes 和群組,
- :green_heart:[Prometheus](https://github.com/prometheus/prometheus)  :fire::fire::fire::fire::fire: - 普羅米修斯(Prometheus)是云原電腦基金會的一個項目,是一個系統和服务監控系統.
- :green_heart:[Searchlight](https://github.com/searchlight/searchlight)  :fire::fire: - 搜索燈/Icinga定期檢查 Kubernetes 如果發現有問題, 群組並發送通知 。
- :green_heart:[Sloop](https://github.com/salesforce/sloop)  :fire::fire::fire: - Sloop 監控器 Kubernetes, 記錄事件和資源狀態變更的歷史, 并提供視覺化來協助調试過去的事件 。
- :green_heart:[Thanos](https://github.com/thanos-io/thanos)  :fire::fire::fire::fire::fire: - 塔諾斯是一套可以組成 高度可用的公制系統的元件 具有無限的儲存能力
- :green_heart:[K8Studio](https://github.com/guiqui/k8Studio)  :fire::fire::fire: - K8Studio IDE 管理和可視化 Kubernetes 群集.
- :green_heart:[KubeDiagrams](https://github.com/philippemerle/KubeDiagrams)  :fire: - 生成 Kubernetes 建構圖來自 Kubernetes 顯示檔案、 kustomism 檔案、 Helm 圖表以及實際群組狀態 。

### 備份和恢复
- :green_heart:[katafygio](https://github.com/bpineau/katafygio)  :fire: - 卡塔菲吉奧發現 Kubernetes 物件( 部署, 服務,... ) , 並將它們保存為 git 主目錄中的 yaml 文件 。
- :green_heart:[Velero](https://github.com/vmware-tanzu/velero)  :fire::fire::fire::fire::fire: - Velero(前赫普提奧·方舟公司)給你工具來支援和恢復你的 Kubernetes 群組資源與持續量。

### 安全和遵守
- :green_heart:[Datree](https://github.com/datreeio/datree)  :fire::fire::fire::fire::fire: - Datree是支持的CLI工具 Kubernetes 防止開發者在其中犯錯 Kubernetes 可能導致群組生产失敗的設定 。
- :green_heart:[Deepfence ThreatMapper](https://github.com/deepfence/ThreatMapper)  :fire::fire::fire: - Apache v2, 強大的 runtime 脆弱性掃瞄器, 用于 kubernetes, 虛擬機和無伺服器 。
- :green_heart:[Falco](https://github.com/falcosecurity/falco)  :fire::fire::fire::fire::fire: - Falco是一種行為活動監控器 旨在測測你的應用程式中的反常活動 您可以使用 Falco 監控您的時空安全 Kubernetes 應用程式和內部元件。
- :green_heart:[Gatekeeper](https://github.com/open-policy-agent/gatekeeper)  :fire::fire::fire::fire::fire: - 政策控制器 Kubernetes
- :green_heart:[Intents operator](https://github.com/otterize/intents-operator)  :fire::fire: - 管理網路政策、Istio授权政策以及Kafka ACLs Kubernetes 容易地集合。
- :green_heart:[k-rail](https://github.com/cruise-automation/k-rail)  :fire::fire: K-rail是工作量政策执行工具, Kubernetes。它可以幫助您取得多租戶群組, 最小的干扰和最大速度。
- :green_heart:[Konstraint](https://github.com/plexsystems/konstraint)  :fire::fire: Konstraint 是CLI工具,
- :green_heart:[kube-bench](https://github.com/aquasecurity/kube-bench)  :fire::fire::fire::fire::fire: -Kube -bench 是Go應用程式,檢查是否 Kubernetes 以安全方式部署 Kubernetes 基准。
- :green_heart:[kube-hunter](https://github.com/aquasecurity/kube-hunter)  :fire::fire::fire::fire::fire: - 庫比獵人追蹤安全漏洞 Kubernetes 群組。
- :green_heart:[KubeLinter](https://github.com/stackrox/kube-linter)  :fire::fire::fire::fire: - KubeLinter是檢查的靜态分析工具 Kubernetes YAML 檔案與 Helm 圖表, 以确保其中的應用程式符合最佳操作 。
- :green_heart:[Kubesploit](https://github.com/cyberark/kubesploit)  :fire::fire::fire: 由Russel Van Tuyl(@Ne0nd0g)在Merlin計畫上建設。
- :green_heart:[KubiScan](https://github.com/cyberark/KubiScan)  :fire::fire::fire: - 掃描工具 Kubernetes 使用權限的群組 Kubernetes基于角色的存取控制(RBAC)授權模式.
- :green_heart:[Kyverno](https://github.com/kyverno/kyverno)  :fire::fire::fire::fire: - Kyverno是一款政策引擎 Kubernetes。它可以使用認證控制和背景掃瞄來驗證、突變和產生設定。
- :green_heart:[Netchecks](https://github.com/hardbyte/netchecks/)  :fire: - 測試網路條件的一套工具,
- :green_heart:[Permission manager](https://github.com/sighupio/permission-manager)  :fire::fire::fire: - 權限管理器是SIGHUP開發的應用程式,它能讓 RBAC 管理變得超易用和易用 Kubernetes.
- :green_heart:[rakkess](https://github.com/corneliusweig/rakkess)  :fire::fire::fire: - Kubectl 外掛程式, 顯示伺服器資源的存取母體
- :green_heart:[Rönd](https://github.com/rond-authz/rond)  :fire: - Rond是開源輕量级的 Kubernetes 用簡單的安全政策來保護您的 API 的 副車子容器 。 它也讓你們在本地建立RBAC/ABAC的解決方案。
- :green_heart:[Teleport](https://github.com/gravitational/teleport)  :fire::fire::fire::fire::fire: - Telepport United Access Plane 能讓工程師快速存取任何地方的計算資源


### 服務網格
- :green_heart:[Istio](https://github.com/istio/istio)  :fire::fire::fire::fire::fire: - 一個開放的平台 連接,管理,以及安全的微服務。
- :green_heart:[Linkerd](https://github.com/linkerd/linkerd)  :fire::fire::fire::fire::fire: - Linkerd是一個透明的服務网格, 設計使現代應用程式安全正常。
- :green_heart:[Open Service Mesh](https://github.com/openservicemesh/osm/)  :fire::fire::fire::fire::fire: - Open Service Mesh(OSM)是一個輕量级、可延伸的Cloud Natural 服務網格,


### 發展工具
- :green_heart:[Cyclops](https://github.com/cyclops-ui/cyclops)  :fire::fire: - 自訂的 UI Kubernetes 部署
- :green_heart:[Eclipse JKube](https://github.com/eclipse/jkube)  :fire::fire: - Java 開發者的工具和插件, 幫助您建立容器影像, 以及部署您的應用程式所需的清單 Kubernetes.
- :green_heart:[garden](https://github.com/garden-io/garden)  :fire::fire::fire::fire::fire: - 花園提供產品類型 Kubernetes 測試整合測試的環境, QA, 以及發展。
- :green_heart:[gefyra](https://github.com/gefyrahq/gefyra)  :fire::fire::fire: - Gefyra 閃亮的快速, 搖滾的固態, 本地應用程式的發展... Kubernetes.
- :green_heart:[ko](https://github.com/google/ko)  :fire::fire::fire::fire::fire: - – `ko` 是建立和部署戈兰格應用程式的工具 Kubernetes.
- :green_heart:[Konfig](https://github.com/cloud66-oss/konfig)  :fire: - 康菲格是 Kubernetes 友好的鐵路宝石 它可以載入 YAML 或包含個人檔案的資料夾的設定與秘密, 並且以相同的方式提交您的應用程式 。
- :green_heart:[kubevious](https://github.com/kubevious/Kubevious)  :fire::fire::fire::fire: - Kubeevious讓所有與應用程式相關的設定都放在一個地方。 這可以從操作員手中省下很多時間,
- :green_heart:[kubectl-warp](https://github.com/ernoaapa/kubectl-warp)  :fire::fire: - – Kubernetes 在 Pod 同步及執行本地端檔案的 CLI 插件 Kubernetes
- :green_heart:[kubernix](https://github.com/saschagrunert/kubernix)  :fire::fire::fire: - 這個計畫旨在提供單一依赖性 Kubernetes 用于本地測試、實驗和發展目的的群組。
- :green_heart:[Makisu](https://github.com/uber/makisu)  :fire::fire::fire::fire::fire: Makisu是快速而灵活的 Docker 影像建設工具, Kubernetes.
- :green_heart:[mirrord](https://github.com/metalbear-co/mirrord)  :fire::fire::fire::fire::fire: - 反射了您的本地行程和您的雲環境, 在雲環境下執行本地代碼 。
- :green_heart:[Monokle](https://github.com/kubeshop/monokle)  :fire::fire::fire: - Monokle 幫助您建立、編輯與驗證 Yaml 的表單, 視覺化與驗證資源連結與依賴,
- :green_heart:[Okteto](https://github.com/okteto/okteto)  :fire::fire::fire::fire: - – `okteto` 加速开发工作流程 Kubernetes 应用程序。
- :green_heart:[Telepresence](https://github.com/telepresenceio/telepresence)  :fire::fire::fire::fire::fire: - Telepresence提供快速,實際的本地發展 Kubernetes 微型服務
- :green_heart:[Tilt](https://github.com/tilt-dev/tilt)  :fire::fire::fire::fire::fire: - 倾斜能發揮多功能發展 確保它們的行為
- :green_heart:[Tye](https://github.com/dotnet/tye)  :fire::fire::fire::fire::fire: Tye是一個開發器工具,
- [Aptakube](https://aptakube.com) - 現代、輕巧和多群組桌面用戶端 Kubernetes。連接多個群組以檢視、編輯和管理您的所有資源。

### 資料處理與機器學習
- :green_heart:[Kubeflow](https://github.com/kubeflow/kubeflow)  :fire::fire::fire::fire::fire: 根據谷歌內部機器學習管道,
- :green_heart:[nos](https://github.com/nebuly-ai/nos)  :fire::fire: - – `nos` 是一個開源平台,以高效管理 AI 工作 Kubernetes增加GPU的利用率并降低基建和操作成本。
- :green_heart:[Strimzi](https://github.com/strimzi/strimzi-kafka-operator)  :fire::fire::fire::fire::fire: - Strimzi 提供了管理 Apache Kafka 群組的方法 Kubernetes 或 OpenShift 在不同的部署配置中。
- :green_heart:[Volcano](https://github.com/volcano-sh/volcano)  :fire::fire::fire::fire: - 火山是建在 Kubernetes.
- :green_heart:[yunikorn](https://github.com/apache/incubator-yunikorn-core)  :fire::fire: - 容器管弦系統的輕量级通用資源排程器。

### 資料管理
- :green_heart:[Kubegres](https://github.com/reactive-tech/kubegres)  :fire::fire::fire: - 庫貝格斯是個 Kubernetes 操作員允許部署 PostgreSql 的一個或很多群組的套接字 。
- :green_heart:[Postgres Operator](https://github.com/CrunchyData/postgres-operator)  :fire::fire::fire::fire::fire: - PGO, Postgres Operator from Crunchy Data, 給你一個宣傳的 Postgres 解析程式, 可以自動管理您的 PostgreSQL 群組 。
- :green_heart:[MongoDB Community Kubernetes Operator](https://github.com/mongodb/mongodb-kubernetes-operator)  :fire::fire: - 這是... Kubernetes 部署 MongoDB 群組到 Kubernetes 群組。
- :green_heart:[MySQL Operator for Kubernetes](https://github.com/mysql/mysql-operator)  :fire: -MYSQL操作員 Kubernetes 是 Kubernetes 管理 MySQL InnoDB A 內的群組設定 Kubernetes 群集.
- :green_heart:[Redis Operator](https://github.com/spotahome/redis-operator)  :fire::fire::fire: - Redis 操作員建立/配置/管理 Kubernetes.

### 其他
- :green_heart:[Agones](https://github.com/googleforgames/agones)  :fire::fire::fire::fire::fire: - Agones是主機、運作和縮放专用遊戲伺服器的圖書庫 Kubernetes.
- :green_heart:[AWS Controllers for Kubernetes](https://github.com/aws/aws-controllers-k8s)  :fire::fire::fire::fire: - AWS 控制器 Kubernetes (ACK) 讓您直接從中定义和使用 AWS 服務資源 Kubernetes.
- :green_heart:[AWS Node Termination Handler](https://github.com/aws/aws-node-termination-handler)  :fire::fire::fire: - A Kubernetes 優雅處理 EC2 實驗關閉
- :green_heart:[Brigade](https://github.com/brigadecore/brigade/)  :fire::fire::fire::fire::fire: 旅是建立管道的工具 Kubernetes.
- :green_heart:[Crossplane](https://github.com/crossplane/crossplane)  :fire::fire::fire::fire::fire: - 直升機是開源的 Kubernetes 以提供和管理云基础设施、服務和應用程式。
- :green_heart:[Descheduler for Kubernetes](https://github.com/kubernetes-sigs/descheduler)  :fire::fire::fire::fire::fire: - 根據政策,取消節點的選區
- :green_heart:[Devtron](https://github.com/devtron-labs/devtron)  :fire::fire::fire::fire: 它被設計成自動服務平台, 以開發者友好的方式操作和维护 kubernetes 上的應用程式( AppOps) 。
- :green_heart:[OpenCost](https://github.com/opencost/opencost)  :fire::fire::fire::fire::fire: - OpenCost模型讓團隊在現今和歷史中顯眼 Kubernetes 支出和资源分配。
- :green_heart:[K8s-Cleaner](https://github.com/gianlucam76/k8s-cleaner)  :fire: - – `k8s-cleaner` 确定并移除未使用的資源。
- :green_heart:[K8sPurger](https://github.com/yogeshkk/K8sPurger)  :fire: - – `K8sPurger` 未使用的資源 Kubernetes.
- :green_heart:[KubeEdge](https://github.com/kubeedge/kubeedge)  :fire::fire::fire::fire::fire: - KubeEdge是建立在 Kubernetes 并延伸本地容器化應用程式的管弦與裝置管理到邊緣的主機。
- :green_heart:[KubePug](https://github.com/rikatz/kubepug)  :fire::fire: - 升級前檢查腐敗的工具 Kubernetes 版本
- :green_heart:[Kube No Trouble](https://github.com/doitintl/kube-no-trouble)  :fire::fire::fire::fire::fire: - 容易檢查您的群組是否使用已腐爛的API
- :green_heart:[Shell-operator](https://github.com/flant/shell-operator)  :fire::fire::fire::fire: -  shell- 操作器是執行事件驅動的文稿的工具 Kubernetes 群組。

## 指南、文件、部落格和學習

### 指南
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - 全面引言 Kubernetes 架构
- [A Deep Dive Into Kubernetes Schema Validation](https://www.datree.io/resources/kubernetes-schema-validation) - 向导關於 Kubernetes 如何使用OSS和本地工具验证
- [A Guide to the Kubernetes Networking Model](https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/) - 深穿 Kubernetes 联网
- [Amazon EKS Best Practices Guide for Security](https://aws.github.io/aws-eks-best-practices/) 這份指南提供建議,
- [Amazon EKS Node Drainer](https://github.com/aws-samples/amazon-k8s-node-drainer)  :fire: - 一個導引和一個範例,來封鎖和驅逐所有可驅逐的吊艙 從EC2節點被终止。
- [Comparison of Kubernetes Ingress controllers](https://docs.google.com/spreadsheets/d/191WWNpjJ2za6-nbG4ZoUMXMpUK8KlCIosvQB0f-oq3k/htmlview?pru=AAABdXUHlbs*g6XkyoZXhanlhRazst77Xw) - 這項研究比對了14個不同的能力 Kubernetes 入侵控制器  
- [Configuring HA Kubernetes cluster on bare metal servers with kubeadm](https://medium.com/faun/configuring-ha-kubernetes-cluster-on-bare-metal-servers-with-kubeadm-1-2-1e79f0f7857b) - 站HA的指南 Kubernetes 以 kubeadm 裝入裸金屬伺服器 。
- [Introduction to Using Google Kubernetes Engine; Explain Like I’m Five!](https://medium.com/faun/google-kubernetes-engine-explain-like-im-five-1890e550c099) - 建立你的第一個管理 Kubernetes 群組於 Google Kubernetes 引擎使用Terraform。
- [Kubernetes Network Policy Recipes](https://github.com/ahmetb/kubernetes-network-policy-recipes)  :fire::fire::fire::fire::fire: - 這個寄存器包含多种使用大小寫 Kubernetes 網路政策與樣本 YAML 檔案以在您的設定中杠杆化 。
- [Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)  :fire::fire::fire::fire::fire: - – Kubernetes 硬路指引你穿過靴子圈 Kubernetes 群組, 元件與 RBAC 認證之間有端對端加密 。
- [Kubernetes Working Group for Multi-Tenancy](https://github.com/kubernetes-sigs/multi-tenancy)  :fire::fire::fire: 這裡是多租期的建議和原型的工作场所
- [Production grade Kubernetes Monitoring using Prometheus](https://medium.com/faun/production-grade-kubernetes-monitoring-using-prometheus-78144b835b60) - 部署普羅米修斯監控解决方案的深度指南
- [The Illustrated Children’s Guide to Kubernetes](https://www.cncf.io/phippy/the-childrens-illustrated-guide-to-kubernetes/) - 圖像化解釋 Kubernetes
- [Troubleshooting Kubernetes deployments](https://learnk8s.io/a/troubleshooting-kubernetes.pdf) - 一個流程圖,以便在遇到問題的時候 找出一個 Kubernetes 的部署
 - [Vertical Pod Autoscaling: The Definitive Guide](https://povilasv.me/vertical-pod-autoscaling-the-definitive-guide/) - 一個深刻的解釋 Kubernetes VPA:它是什么、如何工作、如何使用, 
- [Writing Your First Kubernetes Operator](https://medium.com/faun/writing-your-first-kubernetes-operator-8f3df4453234) 這篇文章中, Kubernetes 操作員使用操作員 SDK 。

### 部落格和影片
- [10 most common mistakes using kubernetes](https://blog.pipetail.io/posts/2020-05-04-most-common-mistakes-k8s/) - 通常的陷阱和如何避免  
- [How the Department of Defense Moved to Kubernetes and Istio](https://www.youtube.com/watch?v=YjZ4AZ7hRM0) - 專注在旁車安全堆 利用特使和旁車容器 确保零信任安全  
- [Kubernetes at Reddit: Tales from Production](https://youtu.be/WTbIBqNcjoQ) 分享製作爆炸的心碎, 了解哪些東西對全球最繁忙的網絡性能有好處,  
- [Kubernetes Failure Stories](https://github.com/hjacobs/kubernetes-failure-stories)  :fire::fire::fire::fire::fire: - 与公共失敗故事相關的連結 Kubernetes.  
- [Life of a Packet](https://www.youtube.com/watch?v=0Omvgd7Hg1I) - 追蹤線路 Kubernetes 系統。  
- [OPA Deep Dive](https://www.youtube.com/watch?v=Uj2N9S58GLU) - 深度潛入一些令人興奮的新功能 在OPA項目中,由共同創作者提出。  
- [Scaling Kubernetes to 2,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-2500-nodes/) + [Scaling Kubernetes to 7,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-7500-nodes/) - 高級跑步會遇到的問題 Kubernetes 工作量。
- [Service Mesh Comparison](https://servicemesh.es/) - 一個簡單的補償 幫助選擇一個服務 Mesh 實施。  
- [ArgoCD Best Practices](https://datree.io/resources/argocd-best-practices-you-should-know)

### 学习和文件
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - 全面引言 Kubernetes 架构
- [ConfigMaps in Kubernetes: how they work and what you should remember](https://blog.flant.com/configmaps-in-kubernetes-how-they-work-and-what-you-should-remember/) - 了解進化到ConfigMaps 它們是如何工作的 以及它們改變後會發生什麼 
- [Configuring Redis using a ConfigMap](https://kubernetes.io/docs/tutorials/configuration/configure-redis-using-configmap/) - 一個能提供世界實際例子的穿行,
- [Example: Deploying Cassandra with a StatefulSet](https://kubernetes.io/docs/tutorials/stateful-application/cassandra/) - 教訓你如何操作Apache Cassandra KubernetesCassandra,一個數據庫,需要持續儲存以提供數據耐久性。
- [Example: Deploying PHP Guestbook application with Redis](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/) - 這個教程顯示您如何使用簡單的多層網路應用程式建立與部署 Kubernetes 和多克。
- [Example: Deploying WordPress and MySQL with Persistent Volumes](https://kubernetes.io/docs/tutorials/stateful-application/mysql-wordpress-persistent-volume/) - 這個教程顯示您如何使用 Minikube 部署 WordPress 網站和 MySQL 資料庫 。
- [Exposing an External IP Address to Access an Application in a Cluster](https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address/) - 這本指南顯示如何建立 Kubernetes 暴露外部 IP 位址的服務物件 。
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) 通常使用的 kubectl 命令和旗子的正式清單 。  
- [Kubectl Kubernetes CheatSheet](https://github.com/dennyzhang/cheatsheet-kubernetes-A4)  :fire::fire::fire::fire: - 包含很多有幫助的 kubectl 指令的作弊表
- [Kubernetes API Reference Docs](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/) - 高水平概述 Kubernetes API及其主要功能.  
- [Learn Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/) - 這項教學課程可以讓大家了解 Kubernetes 群組管弦系統 。
- [Play with Kubernetes](https://labs.play-with-k8s.com/) - 玩弄 Kubernetes 是讓使用者執行的游樂場 K8s 群組一秒鐘。
- [Ready-to-use commands and tips for kubectl](https://blog.flant.com/ready-to-use-commands-and-tips-for-kubectl/) - Flant的工程師們提供各种小費和技巧。  
- [Running ZooKeeper, A Distributed System Coordinator](https://kubernetes.io/docs/tutorials/stateful-application/zookeeper/) - 這個教學演示正在執行 Apache 動物園守護者 Kubernetes 使用 國內 的 、 波德 的 破壞 预算 、 和 波德 的 聯邦 。
- [Set Up a CI/CD Pipeline with Kubernetes](https://www.linux.com/audience/enterprise/set-cicd-pipeline-kubernetes-part-1-overview/) - 建立CI/CD管道的端到端指南 Kubernetes.
- [StatefulSet Basics](https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/) - 這個教程提供用 StatefulSets 管理應用程式的介紹 。
- [Webinar: K8s with OPA Gatekeeper](https://www.youtube.com/watch?v=v4wJE3I8BYM) - 如何利用OPA控制最终用户在集團上能做什么,以及如何确保集團符合公司政策。  

### 憑證指南
- [Certified Kubernetes Security Specialist - CKSS](https://github.com/ijelliti/CKSS-Certified-Kubernetes-Security-Specialist)  :fire::fire: - 這本寄存器是資源的集合, 以準備授權者 Kubernetes 安全專家考試
- [CKS "Certified Kubernetes security specialist certification](https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist)  :fire::fire::fire::fire: - – Kubernetes 安全資源從考試時允許的素材 以及附加的可選項目來協助您進展您的容器和Kubernetes安全行程。
- [How to pass the Certified Kubernetes Administrator (CKA) exam on the first attempt](https://medium.com/faun/how-to-pass-certified-kubernetes-administrator-cka-exam-on-first-attempt-36c0ceb4c9e) - CKA考試指南
- [The ultimate CKA "Certfified Kuberenetes Administator" resource since exam inception](https://github.com/walidshaari/Kubernetes-Certified-Administrator)  幫助你掌握CKA的考試 以及一些資源 以整合你的Kubernetes行政學習
- [Kubernetes Exam Simulator](https://killer.sh/) - CKS/CKA/CKAD 考試方案和环境。  

## 贡献

歡迎捐款! 讀取 [contribution guidelines](contributing.md) 先


## 執照

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

盡可能,在法律下, Tom Huang已經放棄所有著作權
相關或鄰居的權利與這項工作有關。
