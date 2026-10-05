# Awesome Kubernetes 资源 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

很棒的名单 Kubernetes 工具与资源。

灵感来自 [awesome](https://github.com/sindresorhus/awesome) 清单和 [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws)。 。 。 。

## 令人惊叹的烈火

* 星数达到 0050+ 的仓库：:fire:
* 星数达到 0200+ 的仓库：:fire::fire:
* 星数达到 0500+ 的仓库：:fire::fire::fire:
* 星数达到 1000+ 的仓库：:fire::fire::fire::fire:
* 星数达到 2000+ 的仓库：:fire::fire::fire::fire::fire:

想法从 [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws)。 。 。 。 


## 目录
- [工具和图书馆](#tools-and-libraries)
  - [命令行工具](#command-line-tools)
  - [集群提供](#cluster-provisioning)
  - [自动化和CI/CD](#automation-and-cicd)
  - [分组资源管理](#cluster-resources-management)
  - [保密管理](#secrets-management)
  - [联网](#networking)
  - [储存](#storage)
  - [测试和解决问题](#testing-and-troubleshooting)
  - [监测、警报和可视化](#monitoring-alerts-and-visualization)
  - [备份和恢复](#backup-and-restore)
  - [安全和合规](#security-and-compliance)
  - [服务网格](#service-mesh)
  - [开发工具](#development-tools)
  - [数据处理和机器学习](#data-processing-and-machine-learning)
  - [数据管理](#data-management)
  - [杂项](#miscellaneous)
- [指南、文档、博客和学习](#guides-documentations-blogs-and-learnings)
  - [指南](#guides)
  - [博客和视频](#blogs-and-videos)
  - [学习和文献](#learnings-and-documentations)
  - [认证指南](#certification-guides)
- [贡献](#contribute)
- [许可证](#license)


## 工具和图书馆
与 :green_heart: 显示开源项目。 

### 命令行工具
- :green_heart:[Helm](https://github.com/helm/helm)  :fire::fire::fire::fire::fire: - Helm是管理图表的工具。 图表是预配置的软件包 Kubernetes 资源。
- :green_heart:[Helmfile](https://github.com/helmfile/helmfile)  :fire::fire::fire::fire::fire: - Helmfile是部署舵手图的宣示谱。
- :green_heart:[Helmwave](https://github.com/helmwave/helmwave)  :fire::fire::fire: - Helmwave是用于部署Helm图的 3-内控工具。 这就像Docker -Soncose, 但赫尔姆。
- :green_heart:[Infra](https://github.com/infrahq/infra)  :fire::fire::fire: - 基础设施(例如: Kubernetes数据库)。 我们帮助您连接一个身份提供者, 如 Okta 或 Azure 活动目录, 并且将用户/ 组与您为您的基础设施设置的权限连接 。
- :green_heart:[K9s](https://github.com/derailed/k9s)  :fire::fire::fire::fire::fire: - K9s 提供了一个终端UI 与您交互 Kubernetes 集群。
- :green_heart:[kapp](https://github.com/vmware-tanzu/carvel-kapp)  :fire::fire::fire: - Kapp是一个简单的部署工具,侧重于 " .Kubernetes 应用程序”——具有相同标签的一组资源
- :green_heart:[kconnect](https://github.com/fidelity/kconnect)  :fire::fire: - kconnect是一个CLI工具,可用于发现和安全访问 Kubernetes 跨越多个操作环境的集群.
- :green_heart:[kl](https://github.com/robinovitch61/kl)  :fire: - kl是一个交互终端应用程序,用于在许多容器和集群上与日志相互作用。
- :green_heart:[Ktunnel](https://github.com/omrikiei/ktunnel)  :fire::fire: - Ktunnel是一个CLI工具,在Kubernetes集群和您的本地机器之间建立一个逆向隧道.
- :green_heart:[Kubebox](https://github.com/astefanutti/kubebox)  :fire::fire::fire::fire: - 终端和网络控制台 Kubernetes
- :green_heart:[Kubetail](https://github.com/johanhaleby/kubetail)  :fire::fire::fire::fire::fire: - Bash脚本,使您能够将(尾/尾)日志从多个吊舱集中到一个流中。
- :green_heart:[kube-shell](https://github.com/cloudnativelabs/kube-shell)  :fire::fire::fire::fire: - Kube-shell:用于与原子能机构合作的综合壳体 Kubernetes CLI(英语:CLI).
- 💚[kubecolor](https://github.com/kubecolor/kubecolor) QQ - 颜色化 kubectl 输出
- :green_heart:[kubectl tree](https://github.com/ahmetb/kubectl-tree)  :fire::fire::fire::fire: - 探索所有权关系的kubectl插件 Kubernetes 对象通过所有者。
- :green_heart:[kubectl-aliases](https://github.com/ahmetb/kubectl-aliases)  :fire::fire::fire::fire::fire: - 这个寄存器包含一个脚本,可以生成数百种方便的贝壳别名用于kubectl.
- :green_heart:[kubectx + kubens](https://github.com/ahmetb/kubectx)  :fire::fire::fire::fire::fire: - 怎么样? `kubectx` 帮助您在集群之间前后切换,以及 `kubens` 帮助您在 Kubernetes 名称空间顺畅。
- :green_heart:[kube-ps1](https://github.com/jonmosco/kube-ps1)  :fire::fire::fire::fire::fire: - Kube- ps1: 允许您添加当前内容的脚本 Kubernetes 上下文和名称空间在 kubectl 上配置到您的 Bash/Zsh 提示字符串(即 $PS1) 。
- :green_heart:[kubediff](https://github.com/weaveworks/kubediff)  :fire::fire::fire: - 库比迪夫是一个工具 Kubernetes 来显示您运行的配置和版本控制配置之间的差异。
- :green_heart:[kubeprompt](https://github.com/jlesquembre/kubeprompt)  :fire: - 将KUBECONFIG隔离在每个外壳中,并显示当前 Kubernetes 提示中的上下文/名称空间
- :green_heart:[Kubevela](https://github.com/oam-dev/kubevela)  :fire::fire::fire::fire::fire: - KubeVela是一个易于使用、但可扩展的平台,能够尽量不费力地设计和运送应用软件。
- :green_heart:[Move2Kube](https://github.com/konveyor/move2kube)  :fire::fire: - 帮助用户从Cloud Foundry等遗留平台迁移应用的工具 Kubernetes 和开放班。 分析应用程序源代码并生成 Kubernetes YAMLs,赫尔姆图,泰克顿管道等. 分析和生成可以大量定制,以产生你想要的准确输出.
- :green_heart:[nova](https://github.com/FairwindsOps/nova/)  :fire::fire: Nova扫描你安装的Helm图表 然后对照所有已知的Helm寄存器进行交叉检查
- :green_heart:[Plural](https://github.com/pluralsh/plural)  :fire::fire: - Pullar是一个CLI工具和整体DevOps管理平台,用于快速部署、管理和监测开源应用程序 Kubernetes。 。 。 。
- :green_heart:[RBAC Lookup](https://github.com/FairwindsOps/rbac-lookup)  :fire::fire::fire: - RBAC 搜索是一个CLI,让你很容易找到 Kubernetes 与任何用户、服务账户或组名绑定的角色和集群角色。
- :green_heart:[stern](https://github.com/stern/stern)  :fire::fire::fire::fire::fire: - Stern允许你跟踪多个舱位 Kubernetes 舱内有多个容器

### 集群提供
- :green_heart:[Bootkube](https://github.com/kubernetes-sigs/bootkube)  :fire::fire::fire::fire: - Bootkube是自行发射的工具 Kubernetes 集群。
- :green_heart:[Claudie](https://github.com/berops/claudie)  :fire: - 多云集群,每个节点集合在不同的云提供方。
- :green_heart:[Cluster API](https://github.com/kubernetes-sigs/cluster-api)  :fire::fire::fire::fire::fire: - 分组API是一个 Kubernetes 次级项目侧重于提供声明性API和工具,以简化供应、升级和操作多种产品 Kubernetes 集群。
- :green_heart:[eksctl](https://github.com/weaveworks/eksctl)  :fire::fire::fire::fire::fire: - 怎么样? `eksctl` 是一个简单的 CLI 工具,用于在 EKS 上创建集群 - 亚马逊新管理 Kubernetes EC2服务。
- :green_heart:[k0s](https://github.com/k0sproject/k0s)  :fire::fire::fire::fire::fire: - k0s - 零闪烁 Kubernetes (简单、固态和认证) Kubernetes 分发)
- :green_heart:[k3d](https://github.com/rancher/k3d)  :fire::fire::fire::fire::fire: - k3d, 和 Windows., destroy, 一半的内存, 高度可用, 是运行本地 k3s 集群的工具 。 单曲二进制,约20 MB. 你需要安装插座。
- :green_heart:[k3s](https://github.com/rancher/k3s)  :fire::fire::fire::fire::fire: - 轻量级 Kubernetes容易安装,Kubernetes 来自命令行的集群。
- :green_heart:[kind](https://github.com/kubernetes-sigs/kind)  :fire::fire::fire::fire::fire: - 类型是运行本地的工具 Kubernetes 使用 Docker 容器“节点”的集群。
- :green_heart:[kops](https://github.com/kubernetes/kops)  :fire::fire::fire::fire::fire: - 怎么样? `kops` 帮助您创建, 像善良,升级和保持生产级
- :green_heart:[kube-aws](https://github.com/kubernetes-incubator/kube-aws)  :fire::fire::fire::fire: - 怎么样? `kube-aws` 是创建/更新/销毁的命令行工具 Kubernetes AWS 上的集群。
- :green_heart:[kubespray](https://github.com/kubernetes-sigs/kubespray)  :fire::fire::fire::fire::fire: - 准备生产 Kubernetes 分组
- :green_heart:[microK8s](https://github.com/ubuntu/microk8s)  :fire::fire::fire::fire::fire: - 最小的,最快的 Kubernetes
- :green_heart:[Minikube](https://github.com/kubernetes/minikube)  :fire::fire::fire::fire::fire: - 小库贝执行一个当地 Kubernetes 在 macOS,Linux 上分组,全部在小于 100 MB 的二进制中。
- :green_heart:[Talos Linux](https://github.com/siderolabs/talos)  :fire::fire::fire::fire::fire: - Talos Linux是安装香草的最小、不可改变、安全的OS Kubernetes - 生产数据中心, K8s@home,还有Edge.
- :green_heart:[karpenter]([https://karpenter.sh](https://github.com/aws/karpenter-provider-aws))  :fire::fire::fire::fire::fire: - 卡彭特是个 Kubernetes 为灵活性、性能和简洁性而建造的节点自动显示器。
- :green_heart:[Kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/) - Kubeadm 执行必要的行动,以建立最低限度的可行集群。
- :green_heart:[vCluster](https://github.com/loft-sh/vcluster/) 编号 : :fire::fire::fire::fire::fire: - vCluster 允许您创建全功能虚拟 Kubernetes 与传统模式相比,将大量降低成本,改善多种租赁和隔离状况。 Kubernetes。 。 。 。 
  
### 自动化和CI/CD
- :green_heart:[Argo CD](https://github.com/argoproj/argo-cd)  :fire::fire::fire::fire::fire: - Argo CD是一个声明式的,GitOps连续传送工具,用于 Kubernetes。 。 。 。
- :green_heart:[Argo Events](https://github.com/argoproj/argo-events)  :fire::fire::fire::fire: - 阿尔戈事件是一个由事件驱动的工作流程自动化框架,用于 Kubernetes 帮助你触发 K8s 对象、Argo工作流程、无服务器工作量等。
- :green_heart:[Argo Rollouts](https://github.com/argoproj/argo-rollouts)  :fire::fire::fire::fire: - Argo Rollouts控制器,使用Rollout自定义资源,提供额外的部署策略,如蓝绿色和加那利 Kubernetes。 。 。 。
- :green_heart:[Argo Workflows](https://github.com/argoproj/argo)  :fire::fire::fire::fire::fire: - Argo Workflows是一个开源的容器内源工作流程引擎,用于协调并行工作 Kubernetes。 。 。 。
- :green_heart:[Argocd autopilot](https://github.com/argoproj-labs/argocd-autopilot)  :fire::fire::fire: - Argo-CD自动驾驶器是一个工具,它提供了一种有见解的安装Argo-CD和管理GitOps寄存器的方法.
- :green_heart:[Flagger](https://github.com/weaveworks/flagger)  :fire::fire::fire::fire::fire: - Flagger是一个渐进的传送工具,可以自动化应用程序运行的释放过程 Kubernetes。 。 。 。
- :green_heart:[Flux2](https://github.com/fluxcd/flux2)  :fire::fire::fire::fire::fire: - 豪华版2从地面到使用 Kubernetes'API扩展系统,并与Prometheus和其他核心组件结合 Kubernetes 生态系统。
- :green_heart:[k8s-image-swapper](https://github.com/estahn/k8s-image-swapper/)  :fire::fire: - 怎么样? `k8s-image-swapper` 是一个变异的网点 Kubernetes,将图像下载到自己的登记册,并将图像指向新位置。
- :green_heart:[Kubero](https://github.com/kubero-dev/kubero)  :fire::fire::fire::fire::fire: - 免费自办的Heroku PaaS替代品,用于 Kubernetes 执行 GitOps
- :green_heart:[KubeSphere](https://github.com/kubesphere/kubesphere)  :fire::fire::fire::fire::fire: - KubeSphere是一个分布式操作系统,提供云土堆栈 Kubernetes 作为它的内核,并旨在成为第三方应用的插件和游戏架构,无缝整合,以提升其生态系统.
- :green_heart:[Reloader](https://github.com/stakater/Reloader)  :fire::fire::fire::fire::fire: - 重新装填器可以监视变化 `ConfigMap` 和 `Secret` 在波兹进行滚动升级 `DeploymentConfigs`, (中文). `Deployments`, (中文). `Daemonsets` 和 `Statefulsets`。 。 。 。
- :green_heart:[terranetes-controller](https://github.com/appvia/terranetes-controller)  :fire: - Terranetes控制器使平台小组能够围绕云资源提供自助能力。
- :green_heart:[Skaffold](https://github.com/GoogleContainerTools/skaffold)  :fire::fire::fire::fire::fire: - Skaffold是一个命令行工具,有利于持续开发 Kubernetes 应用。
- :green_heart:[Spinnaker](https://github.com/spinnaker/spinnaker)  :fire::fire::fire::fire::fire: - Spinnaker是一个开放源代码连续发送平台,用于以高速度和信心释放软件变化.
- :green_heart:[TF-controller](https://github.com/weaveworks/tf-controller)  :fire: - TF控制器是Flux的实验控制器,以GitOps方式调和Terraform资源.
- :green_heart:[werf](https://github.com/werf/werf)  :fire::fire::fire::fire::fire: - Werf是一个粘着 Git, Docker, Helm & 的 CLI 工具 Kubernetes 使用任何CI系统来实施CI/CD和GitOps. 
- :green_heart:[Weave GitOps](https://github.com/weaveworks/weave-gitops)  :fire::fire: - Weave GitOps是一个简单的开源开发者平台,供需要云本地应用程序的人使用,而不需要 Kubernetes 专门知识。
- :green_heart:[Otomi - Self-hosted PaaS for K8s](https://github.com/redkubes/otomi-core)  :fire::fire::fire::fire: - Otomi 添加以开发者和业务为中心的工具、自动化和开发者自助服务 Kubernetes 在任何基础设施或云中,用于编码、建造、释放、部署、安全、操作和监测集装箱化应用。
:green_heart:[Cozystack - Self-hosted PaaS for K8s](https://github.com/cozystack/cozystack)  :fire::fire::fire::fire: - 自动托管的PaaS,在硬化的Talos Linux集群上运行,带来安全第一 Kubernetes 自动化到自己的金属。 如果你正在建造主权的云层或边缘内层堆栈,那么完美.

### 分组资源管理
- :green_heart:[Clusterpedia](https://github.com/clusterpedia-io/clusterpedia)  :fire: - Crouppedia用于跨多个集群的复杂资源搜索,支持同时搜索多个集群中存在的单一类型的资源或多种类型的资源.
- :green_heart:[Grafana Tanka](https://github.com/grafana/tanka)  :fire::fire::fire::fire: - 简洁、简洁和超灵活的YAML替代方案 Kubernetes 组合。
- :green_heart:[KEDA](https://github.com/kedacore/keda)  :fire::fire::fire::fire::fire: - KEDA允许对事件驱动进行精细的谷物自动升级(包括从零) Kubernetes 工作量。
- :green_heart:[Kruise](https://github.com/openkruise/kruise)  :fire::fire::fire::fire::fire: - Kruise由几个控制器组成,这些控制器可以扩展和补充 Kubernetes 工作量管理核心控制器。
- :green_heart:[KubeDirector](https://github.com/bluek8s/kubedirector)  :fire::fire: - Kube局长使用标准 Kubernetes (单位:千美元)K8s自定义资源设施和API扩展,以实施状态扩展应用集群.
- :green_heart:[Kubenav](https://github.com/kubenav/kubenav)  :fire::fire::fire::fire: - 库贝纳夫是你的导航员 Kubernetes 团团就在你的口袋里。
- :green_heart:[Liqo](https://github.com/liqotech/liqo)  :fire::fire: - Liqo在不同的区域进行动态资源分享 Kubernetes 集群(例如:卸载舱和服务),支持分散治理。
- :green_heart:  [Meshery](https://github.com/meshery/meshery)  :fire::fire::fire::fire::fire: - Mesherry是一个开源云母管理器,能够设计和管理所有 Kubernetes- 基于基础设施和应用。
- :green_heart:[Pluto](https://github.com/FairwindsOps/pluto)  :fire::fire::fire::fire: - 冥王星是帮助用户发现堕落的工具 Kubernetes 密码寄存器和主控版的版本
- :green_heart:[Polaris](https://github.com/FairwindsOps/polaris)  :fire::fire::fire::fire::fire: - Polaris是一个开源政策引擎,用于 Kubernetes 用于验证和补救资源配置。
- :green_heart:[Projectsveltos](https://github.com/projectsveltos/addon-manager)  :fire: Projectveltos是一个 Kubernetes 添加控制器,简化多组中添加和应用程序的部署和管理。
- :green_heart:[The Hierarchical Namespace Controller](https://github.com/kubernetes-sigs/multi-tenancy/tree/master/incubator/hnc)  :fire::fire::fire: - 分级命名空间,通过使命名空间更强大,使得共享您的集群更加容易.

### 保密管理
- :green_heart:[Kubernetes External Secrets](https://github.com/godaddy/kubernetes-external-secrets)  :fire::fire::fire::fire::fire: - 怎么样? Kubernetes 外部机密允许您使用外部机密管理系统, 如 AWS 机密管理器或 HashiCorp Vault , 安全添加机密 Kubernetes。 。 。 。
- :green_heart:[Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets)  :fire::fire::fire::fire::fire: - 把你的秘密加密到一个封存的封存器中,它可以安全地存储 - 甚至可以存放在公共仓库里。
- :green_heart:[akv2k8s](https://github.com/SparebankenVest/azure-key-vault-to-kubernetes)  :fire::fire: - Azure 密钥 Kubernetes (kv2k8s)将使 Azure 密钥断层对象可供 Kubernetes 两种方式: Kubernetes 秘密; 直接注入容器应用程序的环境变量

### 联网
- :green_heart:[Calico Networking](https://github.com/projectcalico/calico)  :fire::fire::fire::fire::fire: - Calico是集装箱、虚拟机器和光金属工作量的开源网络和网络安全解决方案
- :green_heart:[cert-manager](https://github.com/jetstack/cert-manager)  :fire::fire::fire::fire::fire: - 管理者是一个 Kubernetes 添加,使各种发行来源的TLS证书的管理和发放自动化.
- :green_heart:[cilium](https://github.com/cilium/cilium)  :fire::fire::fire::fire::fire: - Cilium是一个网络化、可观察性和安全性解决方案,使用基于eBPF的数据平面。
- :green_heart:[CoreDNS](https://github.com/coredns/coredns)  :fire::fire::fire::fire::fire: - CoreDNS是一个快速和灵活的DNS服务器,在 Kubernetes。 。 。 。
- :green_heart:[ingress-nginx](https://github.com/kubernetes/ingress-nginx)  :fire::fire::fire::fire::fire: - 怎么样? `ingress-nginx` 是一个入侵控制器,用于 Kubernetes 使用NGINX作为反向代理和负载平衡器.
- :green_heart:[Kong for Kubernetes](https://github.com/Kong/kubernetes-ingress-controller)  :fire::fire::fire::fire: - 在Kong中配置插件、健康检查、负载平衡和更多 Kubernetes 服务。
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - 使用 tcpdump 和 Wireshark 的 kubectl 插件, 启动远程捕获您的任何吊舱 Kubernetes 组合。
- :green_heart:[kubectl trace](https://github.com/iovisor/kubectl-trace)  :fire::fire::fire::fire: - 怎么样? `kubectl trace` 是一个 kubectl 插件, 允许您在您的中安排 bpftrace 程序的执行 Kubernetes 组合。
- :green_heart:[Kube Karp](https://github.com/immanuelfodor/kube-karp)  :fire: - 将浮动虚拟IP添加到 Kubernetes 根据 CARP 协议轻松平衡负载的集群节点
- :green_heart:[kubernetes-ingress](https://github.com/nginxinc/kubernetes-ingress)  :fire::fire::fire::fire::fire:  - 实施NGINX和NGINX Plus(商业)的入侵控制器。
- :green_heart:[kube-ovn](https://github.com/alauda/kube-ovn)  :fire::fire::fire::fire:  - 一个 Kubernetes 功能丰富,业务简便的企业网络布局.
- :green_heart:[loxilb](https://github.com/loxilb-io/loxilb)  :fire::fire::fire:  - 一个 Kubernetes 基于eBPF的服务负载平衡器.
  
### 储存
- :green_heart:[Longhorn](https://github.com/longhorn/longhorn)  :fire::fire::fire::fire::fire: - Longhorn是一个分布式区块存储系统,用于: Kubernetes。 。 。 。
- :green_heart:[OpenEBS](https://github.com/openebs/openebs)  :fire::fire::fire::fire::fire: - OpenEBS是最广泛和最容易使用开源存储解决方案的。 Kubernetes。 。 。 。
- :green_heart:[Rook](https://github.com/rook/rook)  :fire::fire::fire::fire::fire: - Rook是一个开源的云母存储管弦乐 Kubernetes。 。 。 。

### 测试和解决问题
- :green_heart:[Chainsaw](https://github.com/kyverno/chainsaw)  :fire: - 最终结束测试工具 Kubernetes 操作员。
- :green_heart:[Chaos Mesh](https://github.com/pingcap/chaos-mesh)  :fire::fire::fire::fire::fire: - 混沌(英语:Chaos Mesh®)是一个云内混沌工程平台,它使混乱在 Kubernetes 环境。
- :green_heart:[chaoskube](https://github.com/linki/chaoskube)  :fire::fire::fire::fire: - 怎么样? `chaoskube` 周期性地杀死您的随机舱 Kubernetes 组合。
- :green_heart:[Conftest](https://github.com/open-policy-agent/conftest)  :fire::fire::fire::fire: - Confest帮助您针对结构化配置数据编写测试.
- :green_heart:[DETIK](https://github.com/bats-core/bats-detik)  :fire: - 简化端到端测试的库 K8s 通过使用 [BATS](https://github.com/bats-core/bats-core) 断言和自然语言查询。
- :green_heart:[k6](https://github.com/loadimpact/k6)  :fire::fire::fire::fire::fire: - k6是现代载荷测试工具,基于Load Affairs在载荷和性能测试行业的多年经验.
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - 使用 tcpdump 和 Wireshark 的 kubectl 插件, 启动远程捕获您的任何吊舱 Kubernetes 组合。
- :green_heart:[Kube DOOM](https://github.com/storax/kubedoom)  :fire::fire::fire::fire: - 接下来的混乱工程来了! 杀死你体内的吊舱 Kubernetes 连环射杀在末日!
- :green_heart:[kube-monkey](https://github.com/asobti/kube-monkey)  :fire::fire::fire::fire::fire: - 它随意删除 Kubernetes (k8s) 集群中的吊舱鼓励和验证故障反应服务的发展.
- :green_heart:[kube-score](https://github.com/zegl/kube-score)  :fire::fire::fire::fire: - 怎么样? `kube-score` 是一个对您进行静态代码分析的工具 Kubernetes 对象定义。
- :green_heart:[Kubectl-debug](https://github.com/JamesTGrant/kubectl-debug)  :fire::fire::fire::fire::fire: - 怎么样? `kubectl-debug` 是一种用于排除运行中的故障的树外解决方案,它允许您运行运行中的新容器,用于调试目的.
- :green_heart:[KubeInvaders](https://github.com/lucky-sideburn/KubeInvaders)  :fire::fire::fire: - 通过Kube Invaders,你可以强调 Kubernetes 以有趣的方式组合起来,并检查它的韧性。
- :green_heart:[Kubetest](https://github.com/vapor-ware/kubetest)  :fire: - Kubetest是一个 pytest 插件,它更容易管理一个 Kubernetes 组合在您的整合测试中。
- :green_heart:[Litmus](https://github.com/litmuschaos/litmus)  :fire::fire::fire::fire::fire: - 利特穆斯提供工具 来策划混乱 Kubernetes 帮助SRE在部署中发现弱点.
- :green_heart:[popeye](https://popeyecli.io/)  :fire::fire::fire::fire::fire: - 大力水手是用来扫描现场的 Kubernetes 并报告可能涉及已部署资源和配置的问题。
- :green_heart:[PowerfulSeal](https://github.com/bloomberg/powerfulseal)  :fire::fire::fire::fire: - 强大的Seal将失败注入你的体内 Kubernetes 集群,可以尽早发现问题。
- :green_heart:[Testkube](https://github.com/kubeshop/testkube)  :fire::fire::fire: - 测试库贝是一个 Kubernetes 测试管弦乐和执行的本土测试框架。 它允许你运行 你的任何测试在一个 Kubernetes 组合。 与您的 CI/ CD 结合, 并允许您遵循 GitOps 方法进行测试, 同时为您所有测试结果覆盖所有集群的集中位置 。

### 监测、警报和可视化
- :green_heart:[BotKube](https://github.com/infracloudio/botkube)  :fire::fire::fire::fire: - 与Slack或Matterm的BotKube集成有助于你监测你的 Kubernetes 组合、调试关键部署,并通过检查 Kubernetes 资源。
- :green_heart:[Canary Checker](https://github.com/flanksource/canary-checker)  :fire: - Canary检查器是一个Kubernetes-native健康检查平台,有30+内置健康检查类型.
- :green_heart:[Cortex](https://github.com/cortexproject/cortex)  :fire::fire::fire::fire::fire: - Cortex为普罗米修斯提供水平可伸缩,高可用,多租借,长期存储.
- :green_heart:[Goldilocks](https://github.com/FairwindsOps/goldilocks)  :fire::fire::fire: - Goldilocks是一种有用工具,可以帮助您确定资源请求和限制的起点.
- :green_heart:[Goldpinger](https://github.com/bloomberg/goldpinger)  :fire::fire::fire::fire::fire: - 调试工具 Kubernetes 测试并显示集群中节点之间的连接。
- :green_heart:[Grafana](https://github.com/grafana/grafana)  :fire::fire::fire::fire::fire: - Grafana允许你 查询,可视化,提醒和理解 你的度量衡,无论它们存放在哪里。
- :green_heart:[Helm Dashboard](https://github.com/komodorio/helm-dashboard)  :fire::fire::fire::fire: - 赫尔姆失踪的UI Helm Dashboard插件提供了一个UI驱动的查看已安装的Helm图表的方法,查看其修订历史和相应的k8s资源. 
- :green_heart:[Kiali](https://github.com/kiali/kiali)  :fire::fire::fire::fire::fire: - Kiali和Istio合作 以视觉服务网状地形。
- :green_heart:[k8s-image-availability-exporter](https://github.com/flant/k8s-image-availability-exporter)  :fire: - Prometheus出口商,该出口商主动警告您哪些图像被定义 Kubernetes 在集装箱登记册中找不到的物体。 
- :green_heart:[kube-capacity](https://github.com/robscott/kube-capacity)  :fire::fire::fire: - 这是一个简单的CLI,它概述了资源需求、限制和使用情况。 Kubernetes 组合。
- :green_heart:[Kubernetes Dashboard](https://github.com/kubernetes/dashboard)  :fire::fire::fire::fire::fire: - 怎么样? Kubernetes Dashboard是一个通用的,基于网络的UI用于 Kubernetes 集群。
- :green_heart:[Kubedev](https://github.com/relferreira/kubedev)  :fire: - Kubedev是一个强大而美丽的用户界面,用于管理 Kubernetes 集群。
- :green_heart:[KubeHelper](https://github.com/KubeHelper/kubehelper)  :fire: - Kubeelfer - 简化了许多日常 Kubernetes 通过网络界面进行集群任务。
- :green_heart:[Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server)  :fire::fire::fire::fire::fire: - 计量服务器是一个可伸缩、高效的集装箱资源衡量标准来源,用于 Kubernetes 内置自动伸缩管道。
- :green_heart:[Kubernetes Operational View](https://github.com/hjacobs/kube-ops-view)  :fire::fire::fire::fire: - 一个工具,旨在为多种情况提供共同的业务情况 Kubernetes 集群。
- :green_heart:[kube-state-metrics](https://github.com/kubernetes/kube-state-metrics)  :fire::fire::fire::fire::fire: - Kube - state - 度量衡是一种简单的服务,听从 Kubernetes API 服务器并生成关于对象状态的参数.
- :green_heart:[kubewatch](https://github.com/robusta-dev/kubewatch)  :fire::fire::fire::fire::fire: - 怎么样? `kubewatch` 是一个 Kubernetes 目前向现有协作中心/通知渠道发布通知的观察者。
- :green_heart:[Lens](https://github.com/lensapp/lens)  :fire::fire::fire::fire::fire: - Lens 这是一个有用的,有吸引力的,开源的用户界面(UI),用于与 Kubernetes 集群。
- :green_heart:[Mizu](https://github.com/up9inc/mizu)  :fire::fire::fire: - API 交通浏览器 Kubernetes 您可以查看微服务之间的所有 API 通信。 认为 TCPDump 和 Wireshark 重新发明用于 Kubernetes
- :green_heart:[Network mapper](https://github.com/otterize/network-mapper)  :fire::fire: - 地图 Kubernetes 中分组流量和导出为文本、意图或图像。
- :green_heart:[Popeye](https://github.com/derailed/popeye)  :fire::fire::fire::fire::fire: - 大力水手是用来扫描现场的 Kubernetes 并报告可能涉及已部署资源和配置的问题。
- :green_heart:[Prometheus](https://github.com/prometheus/prometheus)  :fire::fire::fire::fire::fire: - 普罗米修斯(Prometheus),云原电子计算基金会项目,是一个系统和服务监测系统。
- :green_heart:[Searchlight](https://github.com/searchlight/searchlight)  :fire::fire: - 搜查灯/Icinga定期检查 Kubernetes 如果发现问题,则分组并发送通知。
- :green_heart:[Sloop](https://github.com/salesforce/sloop)  :fire::fire::fire: - Sloop监视器 Kubernetes,记录事件的历史和资源状态变化,并提供可视化帮助调试过去的事件.
- :green_heart:[Thanos](https://github.com/thanos-io/thanos)  :fire::fire::fire::fire::fire: - Thanos是一组组件,可以组成一个高度可用的具有无限存储能力的计量系统.
- :green_heart:[K8Studio](https://github.com/guiqui/k8Studio)  :fire::fire::fire: - K8Studio IDE 管理和可视化 Kubernetes 组团.
- :green_heart:[KubeDiagrams](https://github.com/philippemerle/KubeDiagrams)  :fire: - 生成 Kubernetes 结构图来自 Kubernetes 显示文件、 kustomization 文件、 Helm 图表以及实际集群状态。

### 备份和恢复
- :green_heart:[katafygio](https://github.com/bpineau/katafygio)  :fire: - 卡塔菲乔发现 Kubernetes 对象(部署、服务.),并持续保存为 git 仓库中的 yaml 文件。
- :green_heart:[Velero](https://github.com/vmware-tanzu/velero)  :fire::fire::fire::fire::fire: - 维莱罗(前赫普提奥·方舟)给你工具 以备份和恢复你的 Kubernetes 集群资源和持续量。

### 安全和合规
- :green_heart:[Datree](https://github.com/datreeio/datree)  :fire::fire::fire::fire::fire: - Datree是一个支持 Kubernetes 通过防止开发人员在 Kubernetes 可导致集群生产失败的配置.
- :green_heart:[Deepfence ThreatMapper](https://github.com/deepfence/ThreatMapper)  :fire::fire::fire: - Apache v2, 强大的运行时脆弱扫描仪, 用于 Kubernetes, 虚拟机和无服务器 。
- :green_heart:[Falco](https://github.com/falcosecurity/falco)  :fire::fire::fire::fire::fire: - Falco是一个行为活动监视器, 旨在检测你的应用中的异常活动。 您可以使用 Falco 监视您运行时的安全 Kubernetes 应用和内部组件。
- :green_heart:[Gatekeeper](https://github.com/open-policy-agent/gatekeeper)  :fire::fire::fire::fire::fire: - 政策控制员 Kubernetes
- :green_heart:[Intents operator](https://github.com/otterize/intents-operator)  :fire::fire: - 管理网络政策、Istio授权政策和卡夫卡ACLs Kubernetes 以容易的方式组合起来。
- :green_heart:[k-rail](https://github.com/cruise-automation/k-rail)  :fire::fire: - k-rail是工作量政策执行工具 Kubernetes。它可以帮助您获得一个多租户集群,并且最小的干扰和最大速度。
- :green_heart:[Konstraint](https://github.com/plexsystems/konstraint)  :fire::fire: - Konstraint是一种CLI工具,在使用守门员时协助创建和管理限制。
- :green_heart:[kube-bench](https://github.com/aquasecurity/kube-bench)  :fire::fire::fire::fire::fire: - Kube-bench是一个Go应用程序,用于检查是否 Kubernetes 通过进行独联体记录的检查安全部署 Kubernetes 基准。
- :green_heart:[kube-hunter](https://github.com/aquasecurity/kube-hunter)  :fire::fire::fire::fire::fire: - Kube猎杀者在搜索安全弱点 Kubernetes 集群。
- :green_heart:[KubeLinter](https://github.com/stackrox/kube-linter)  :fire::fire::fire::fire: - KubeLinter是一个静态分析工具,用于检查 Kubernetes YAML文件和Helm图表,以确保它们所代表的应用程序遵循最佳做法。
- :green_heart:[Kubesploit](https://github.com/cyberark/kubesploit)  :fire::fire::fire: - Kubesploit是一个跨平台的开发后HTTP/2指挥与控制服务器和专用于集装箱化环境的代理,由Russel Van Tuyl(@Ne0nd0g)在Merlin项目之上建造。
- :green_heart:[KubiScan](https://github.com/cyberark/KubiScan)  :fire::fire::fire: - 扫描工具 Kubernetes 风险权限分组 Kubernetes'基于角色的访问控制(RBAC)授权模式.
- :green_heart:[Kyverno](https://github.com/kyverno/kyverno)  :fire::fire::fire::fire: - Kyverno是一个政策引擎 设计为: Kubernetes。它可以使用准入控制和背景扫描来验证、变异和生成配置。
- :green_heart:[Netchecks](https://github.com/hardbyte/netchecks/)  :fire: - 测试网络条件的一套工具,并申明这些条件符合预期。
- :green_heart:[Permission manager](https://github.com/sighupio/permission-manager)  :fire::fire::fire: - 权限管理器是由SIGHUP开发的应用程序,它使RBAC管理能够对用户进行超容易和方便的管理。 Kubernetes。 。 。 。
- :green_heart:[rakkess](https://github.com/corneliusweig/rakkess)  :fire::fire::fire: - 显示服务器资源访问矩阵的 kubectl 插件
- :green_heart:[Rönd](https://github.com/rond-authz/rond)  :fire: - Rond是开源轻量级的 Kubernetes 辅助车容器, 帮助您保护您的API 简单安全政策。 它也允许你建立自己的RBAC/ABAC解决方案。
- :green_heart:[Teleport](https://github.com/gravitational/teleport)  :fire::fire::fire::fire::fire: - Teleport United Access Plane使工程师能够迅速访问任何地方的任何计算资源。


### 服务网格
- :green_heart:[Istio](https://github.com/istio/istio)  :fire::fire::fire::fire::fire: - 一个连接、管理和保障微服务的开放平台。
- :green_heart:[Linkerd](https://github.com/linkerd/linkerd)  :fire::fire::fire::fire::fire: - Linkerd是一种透明的服务网格,旨在使现代应用安全和正常。
- :green_heart:[Open Service Mesh](https://github.com/openservicemesh/osm/)  :fire::fire::fire::fire::fire: - Open Service Mesh(OSM)是一个轻量级,可扩展,云原服务网格,允许用户统一管理,安全,并获得极具动态的微服务环境的箱外可观察性功能.


### 开发工具
- :green_heart:[Cyclops](https://github.com/cyclops-ui/cyclops)  :fire::fire: - 自定义的用户界面 Kubernetes 部署
- :green_heart:[Eclipse JKube](https://github.com/eclipse/jkube)  :fire::fire: - 用于Java开发者的工具和插件,这些工具和插件帮助您创建容器图像,以及需要的运算表来部署您的应用程序到 Kubernetes。 。 。 。
- :green_heart:[garden](https://github.com/garden-io/garden)  :fire::fire::fire::fire::fire: - 花园提供类似生产 Kubernetes 测试集成测试、质量保证和发展的环境。
- :green_heart:[gefyra](https://github.com/gefyrahq/gefyra)  :fire::fire::fire: - Gefyra 闪闪发亮的快速, 岩石固态, 本地应用开发 QQ Kubernetes。 。 。 。
- :green_heart:[ko](https://github.com/google/ko)  :fire::fire::fire::fire::fire: - 怎么样? `ko` 是建立和部署戈兰格应用程序的工具。 Kubernetes。 。 。 。
- :green_heart:[Konfig](https://github.com/cloud66-oss/konfig)  :fire: - 康菲格是个 Kubernetes 友好铁路宝石. 它可以从YAML或文件夹中装入包含单个文件的配置和秘密,并以同样的方式呈现给您的应用程序.
- :green_heart:[kubevious](https://github.com/kubevious/Kubevious)  :fire::fire::fire::fire: - Kubeevious使所有与应用程序相关的配置在一个地方。 这从操作员那里节省了很多时间,从而不需要在选择器和标签中查找和挖掘设置。
- :green_heart:[kubectl-warp](https://github.com/ernoaapa/kubectl-warp)  :fire::fire: - 怎么样? Kubernetes 在 Pod 中同步和执行本地文件的 CLI 插件 Kubernetes
- :green_heart:[kubernix](https://github.com/saschagrunert/kubernix)  :fire::fire::fire: - 该项目旨在提供单一依赖性 Kubernetes 用于本地测试、试验和发展目的的集群。
- :green_heart:[Makisu](https://github.com/uber/makisu)  :fire::fire::fire::fire::fire: - Makisu是一个快速和灵活的Docker图像构建工具,为诸如Mesos之类的非特权集装箱环境设计。 Kubernetes。 。 。 。
- :green_heart:[mirrord](https://github.com/metalbear-co/mirrord)  :fire::fire::fire::fire::fire: - 镜像连接您的本地进程和您的云环境,并在云条件下运行本地代码。
- :green_heart:[Monokle](https://github.com/kubeshop/monokle)  :fire::fire::fire: - Monokle帮助您创建,编辑和验证yaml的列表,可视化和验证资源链接和依赖性,连接和比较资源与您的集群,调试 kustomize 或 turnize 的输出,以及更多!
- :green_heart:[Okteto](https://github.com/okteto/okteto)  :fire::fire::fire::fire: - 怎么样? `okteto` 加速开发工作流程 Kubernetes 应用。
- :green_heart:[Telepresence](https://github.com/telepresenceio/telepresence)  :fire::fire::fire::fire::fire: - Telepresence为当地提供迅速、现实的发展。 Kubernetes 微服务.
- :green_heart:[Tilt](https://github.com/tilt-dev/tilt)  :fire::fire::fire::fire::fire: ——倾斜带动多种服务发展,保证其行为.
- :green_heart:[Tye](https://github.com/dotnet/tye)  :fire::fire::fire::fire::fire: - Tye是一个开发者工具,它使开发,测试和部署微服务和分布式应用更加容易.
- [Aptakube](https://aptakube.com) - 一个现代化、轻量级和多集群桌面客户端 Kubernetes。连接到多个集群,以同步查看、编辑和管理您的所有资源。

### 数据处理和机器学习
- :green_heart:[Kubeflow](https://github.com/kubeflow/kubeflow)  :fire::fire::fire::fire::fire: Kubeflow是一个基于Google内部机器学习管道进行机器学习的云原平台.
- :green_heart:[nos](https://github.com/nebuly-ai/nos)  :fire::fire: - 怎么样? `nos` 是一个开源平台,以高效运行 AI 工作量 Kubernetes,提高GPU的利用率,降低基础设施和业务费用.
- :green_heart:[Strimzi](https://github.com/strimzi/strimzi-kafka-operator)  :fire::fire::fire::fire::fire: - Strimzi为Apache Kafka集群的运行提供了一种方法。 Kubernetes 或 OpenShift 在各种部署配置中。
- :green_heart:[Volcano](https://github.com/volcano-sh/volcano)  :fire::fire::fire::fire: - 火山是一个批量系统。 Kubernetes。 。 。 。
- :green_heart:[yunikorn](https://github.com/apache/incubator-yunikorn-core)  :fire::fire: - 集装箱管弦乐系统的轻型通用资源调度器。

### 数据管理
- :green_heart:[Kubegres](https://github.com/reactive-tech/kubegres)  :fire::fire::fire: - 库贝格斯是个 Kubernetes 操作员允许部署一个或许多组的 PostgreSql 吊舱,并进行数据复制和故障处理。
- :green_heart:[Postgres Operator](https://github.com/CrunchyData/postgres-operator)  :fire::fire::fire::fire::fire: - PGO 来自 Crunchy Data 的 Postgres 运算符 给您一个声明性 Postgres 解决方案,可以自动管理您的 PostgreSQL 集群.
- :green_heart:[MongoDB Community Kubernetes Operator](https://github.com/mongodb/mongodb-kubernetes-operator)  :fire::fire: - 这是 Kubernetes 将MongoDB社区部署到 Kubernetes 集群。
- :green_heart:[MySQL Operator for Kubernetes](https://github.com/mysql/mysql-operator)  :fire: -MYSQL操作员 Kubernetes 是运算符 Kubernetes 管理 MySQL InnoDB a 内的集群设置 Kubernetes 组团.
- :green_heart:[Redis Operator](https://github.com/spotahome/redis-operator)  :fire::fire::fire: - Redis操作员创建/配置/管理 Kubernetes。 。 。 。

### 杂项
- :green_heart:[Agones](https://github.com/googleforgames/agones)  :fire::fire::fire::fire::fire: - Agones是一个用于托管、运行和缩放专用游戏服务器的库 Kubernetes。 。 。 。
- :green_heart:[AWS Controllers for Kubernetes](https://github.com/aws/aws-controllers-k8s)  :fire::fire::fire::fire: - AWS控制员 Kubernetes (ACK)允许您直接从 Kubernetes。 。 。 。
- :green_heart:[AWS Node Termination Handler](https://github.com/aws/aws-node-termination-handler)  :fire::fire::fire: - 一个 Kubernetes 优雅处理 EC2 实例关闭的守护程序
- :green_heart:[Brigade](https://github.com/brigadecore/brigade/)  :fire::fire::fire::fire::fire: - 旅是创建输油管的工具。 Kubernetes。 。 。 。
- :green_heart:[Crossplane](https://github.com/crossplane/crossplane)  :fire::fire::fire::fire::fire: - 飞机是开源的 Kubernetes 以提供和管理云基础设施、服务和应用的能力扩展任何集群。
- :green_heart:[Descheduler for Kubernetes](https://github.com/kubernetes-sigs/descheduler)  :fire::fire::fire::fire::fire: - 根据政策取消节点的吊舱
- :green_heart:[Devtron](https://github.com/devtron-labs/devtron)  :fire::fire::fire::fire: - 它被设计成一个自助平台,以开发者友好的方式操作和维护kubernetes上的应用程序(AppOps)。
- :green_heart:[OpenCost](https://github.com/opencost/opencost)  :fire::fire::fire::fire::fire: - OpenCost模型使团队能见度进入当前和历史 Kubernetes 支出和资源分配。
- :green_heart:[K8s-Cleaner](https://github.com/gianlucam76/k8s-cleaner)  :fire: - 怎么样? `k8s-cleaner` 识别并删除未使用的资源。
- :green_heart:[K8sPurger](https://github.com/yogeshkk/K8sPurger)  :fire: - 怎么样? `K8sPurger` 未使用资源 Kubernetes。 。 。 。
- :green_heart:[KubeEdge](https://github.com/kubeedge/kubeedge)  :fire::fire::fire::fire::fire: - 库贝埃奇是建立在 Kubernetes 并且将本地的集装箱化应用管弦和装置管理扩展到边际的主机.
- :green_heart:[KubePug](https://github.com/rikatz/kubepug)  :fire::fire: - 在升级前检查折旧情况的工具 Kubernetes 版本
- :green_heart:[Kube No Trouble](https://github.com/doitintl/kube-no-trouble)  :fire::fire::fire::fire::fire: - 方便地检查您的集群是否使用已贬值的API
- :green_heart:[Shell-operator](https://github.com/flant/shell-operator)  :fire::fire::fire::fire: - 壳牌操作器是运行事件驱动脚本的工具 Kubernetes 组合。

## 指南、文档、博客和学习

### 指南
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - 全面介绍 Kubernetes 结构
- [A Deep Dive Into Kubernetes Schema Validation](https://www.datree.io/resources/kubernetes-schema-validation) - 关于 Kubernetes 计划以及如何使用开放源码软件和本地工具验证
- [A Guide to the Kubernetes Networking Model](https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/) - 深入运行 Kubernetes 联网
- [Amazon EKS Best Practices Guide for Security](https://aws.github.io/aws-eks-best-practices/) - 本指南提供关于保护信息、系统和资产的建议,这些信息、系统和资产依赖EKS,同时通过风险评估和缓解战略提供业务价值。
- [Amazon EKS Node Drainer](https://github.com/aws-samples/amazon-k8s-node-drainer)  :fire: - 警戒和驱逐所有可驱逐的吊舱的指南和范例 EC2节点即将终止
- [Comparison of Kubernetes Ingress controllers](https://docs.google.com/spreadsheets/d/191WWNpjJ2za6-nbG4ZoUMXMpUK8KlCIosvQB0f-oq3k/htmlview?pru=AAABdXUHlbs*g6XkyoZXhanlhRazst77Xw) - 这项研究比较了14个不同的能力 Kubernetes 入侵控制器。  
- [Configuring HA Kubernetes cluster on bare metal servers with kubeadm](https://medium.com/faun/configuring-ha-kubernetes-cluster-on-bare-metal-servers-with-kubeadm-1-2-1e79f0f7857b) - 医管局的指南 Kubernetes 组合在带有 kubeadm 的裸金属服务器上。
- [Introduction to Using Google Kubernetes Engine; Explain Like I’m Five!](https://medium.com/faun/google-kubernetes-engine-explain-like-im-five-1890e550c099) - 创建你的第一个管理 Kubernetes Google 上的分组 Kubernetes 使用Terraform的引擎.
- [Kubernetes Network Policy Recipes](https://github.com/ahmetb/kubernetes-network-policy-recipes)  :fire::fire::fire::fire::fire: - 这个存储库包含各种使用案例: Kubernetes 网络政策和 YAML 文件样本, 以在您的设置中发挥杠杆作用 。
- [Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)  :fire::fire::fire::fire::fire: - 怎么样? Kubernetes 硬路指引你穿靴子 Kubernetes 分组,在组件和RBAC认证之间进行端到端加密。
- [Kubernetes Working Group for Multi-Tenancy](https://github.com/kubernetes-sigs/multi-tenancy)  :fire::fire::fire: 这是多租期相关提案和原型的工作场所。
- [Production grade Kubernetes Monitoring using Prometheus](https://medium.com/faun/production-grade-kubernetes-monitoring-using-prometheus-78144b835b60) - 部署普罗米修斯监测解决方案的深入指南。
- [The Illustrated Children’s Guide to Kubernetes](https://www.cncf.io/phippy/the-childrens-illustrated-guide-to-kubernetes/) - 图表解释: Kubernetes
- [Troubleshooting Kubernetes deployments](https://learnk8s.io/a/troubleshooting-kubernetes.pdf) - 在出现问题时用流程图来排除部署库伯内兹的故障
 - [Vertical Pod Autoscaling: The Definitive Guide](https://povilasv.me/vertical-pod-autoscaling-the-definitive-guide/) - 深入解释 Kubernetes VPA:它是什么,如何运作,如何使用以及它有哪些限制. 
- [Writing Your First Kubernetes Operator](https://medium.com/faun/writing-your-first-kubernetes-operator-8f3df4453234) - 在这篇文章中,我们将看到如何建造和部署你的第一部 Kubernetes 操作员使用操作员SDK.

### 博客和视频
- [10 most common mistakes using kubernetes](https://blog.pipetail.io/posts/2020-05-04-most-common-mistakes-k8s/) - 常见的陷阱和如何避免它们。  
- [How the Department of Defense Moved to Kubernetes and Istio](https://www.youtube.com/watch?v=YjZ4AZ7hRM0) - 利用特使和副车集装箱,集中力量于侧车安全堆,确保零信任安全和多层次安全。  
- [Kubernetes at Reddit: Tales from Production](https://youtu.be/WTbIBqNcjoQ) - 听到成功的消息,分享生产爆炸的心碎, 并获得洞察力,什么已经和还没有很好地工作 对于世界上最繁忙的网络属性之一。  
- [Kubernetes Failure Stories](https://github.com/hjacobs/kubernetes-failure-stories)  :fire::fire::fire::fire::fire: - 与下列有关的公共失败故事的链接汇编清单 Kubernetes。 。 。 。  
- [Life of a Packet](https://www.youtube.com/watch?v=0Omvgd7Hg1I) - 追踪该区网络交通的路径 Kubernetes 系统。  
- [OPA Deep Dive](https://www.youtube.com/watch?v=Uj2N9S58GLU) - 深入挖掘共同创作者提出的OPA项目中一些令人兴奋的新特征。  
- [Scaling Kubernetes to 2,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-2500-nodes/) + 键 [Scaling Kubernetes to 7,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-7500-nodes/) - 高水平运行时会遇到的问题 Kubernetes 工作量。
- [Service Mesh Comparison](https://servicemesh.es/) - 一种方便的补偿,帮助选择一种服务。  
- [ArgoCD Best Practices](https://datree.io/resources/argocd-best-practices-you-should-know)

### 学习和文献
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - 全面介绍 Kubernetes 结构
- [ConfigMaps in Kubernetes: how they work and what you should remember](https://blog.flant.com/configmaps-in-kubernetes-how-they-work-and-what-you-should-remember/) - 了解进化到ConfigMaps,它们是如何工作的,以及它们改变后会发生什么. 
- [Configuring Redis using a ConfigMap](https://kubernetes.io/docs/tutorials/configuration/configure-redis-using-configmap/) - 一个可以提供真实世界实例的行进图,说明如何使用配置图配置Redis
- [Example: Deploying Cassandra with a StatefulSet](https://kubernetes.io/docs/tutorials/stateful-application/cassandra/) - 这个教程教你如何运行 Apache Cassandra KubernetesCassandra是一个数据库,需要持续储存,以提供数据的耐久性。
- [Example: Deploying PHP Guestbook application with Redis](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/) - 此教程显示您如何使用 : Kubernetes 还有多克
- [Example: Deploying WordPress and MySQL with Persistent Volumes](https://kubernetes.io/docs/tutorials/stateful-application/mysql-wordpress-persistent-volume/) - 这个教程教你如何使用Minikube 部署 WordPress网站和 MySQL 数据库。
- [Exposing an External IP Address to Access an Application in a Cluster](https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address/) - 这个指南显示如何创建 Kubernetes 暴露外部IP地址的服务对象.
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) - 常用的kubectl命令和旗帜的正式清单。  
- [Kubectl Kubernetes CheatSheet](https://github.com/dennyzhang/cheatsheet-kubernetes-A4)  :fire::fire::fire::fire: - 包含许多有帮助的 kubectl 命令的欺骗表
- [Kubernetes API Reference Docs](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/) - 高级别概览,说明联合国提供的基本资源类型。 Kubernetes API及其主要功能.  
- [Learn Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/) - 这个教程可以帮助人们了解 Kubernetes 集群管弦系统。
- [Play with Kubernetes](https://labs.play-with-k8s.com/) - 跟着玩 Kubernetes 是允许用户运行的游乐场 K8s 以秒计。
- [Ready-to-use commands and tips for kubectl](https://blog.flant.com/ready-to-use-commands-and-tips-for-kubectl/) 由Flant的工程师提供各种小技巧。  
- [Running ZooKeeper, A Distributed System Coordinator](https://kubernetes.io/docs/tutorials/stateful-application/zookeeper/) - 这个教程显示 Apache 动物园管理员运行 Kubernetes 使用 StatefulSets 、 Pod Disruption 预算 和 Pod AntiAffinity 。
- [Set Up a CI/CD Pipeline with Kubernetes](https://www.linux.com/audience/enterprise/set-cicd-pipeline-kubernetes-part-1-overview/) - 设置CI/CD管道的端对端指南 Kubernetes。 。 。 。
- [StatefulSet Basics](https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/) - 这个教程为用 StatefulSets 管理应用程序提供了介绍。
- [Webinar: K8s with OPA Gatekeeper](https://www.youtube.com/watch?v=v4wJE3I8BYM) - 如何利用OPA来控制最终用户在集群上可以做什么,以及如何确保集群符合公司政策。  

### 认证指南
- [Certified Kubernetes Security Specialist - CKSS](https://github.com/ijelliti/CKSS-Certified-Kubernetes-Security-Specialist)  :fire::fire: - 这个储存库汇集了资源,用于筹备核证人 Kubernetes 安全专家(CKSS)考试.
- [CKS "Certified Kubernetes security specialist certification](https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist)  :fire::fire::fire::fire: - 怎么样? Kubernetes 安全资源主要来自考试期间允许的材料, 和额外的可选项目 帮助您推进您的集装箱和库伯内兹安全行程。
- [How to pass the Certified Kubernetes Administrator (CKA) exam on the first attempt](https://medium.com/faun/how-to-pass-certified-kubernetes-administrator-cka-exam-on-first-attempt-36c0ceb4c9e) - 通过CKA考试指南
- [The ultimate CKA "Certfified Kuberenetes Administator" resource since exam inception](https://github.com/walidshaari/Kubernetes-Certified-Administrator)  - 更新的局外资源,帮助你掌握CKA考试,以及一些额外的资源,以巩固你的Kubernetes管理知识。
- [Kubernetes Exam Simulator](https://killer.sh/) - CKS/CKA/CKAD考试设想和环境。  

## 贡献

欢迎捐款! 阅读 [contribution guidelines](contributing.md) 先说


## 许可证

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

根据法律尽可能放弃所有版权
与这项工作相关或相邻的权利。
