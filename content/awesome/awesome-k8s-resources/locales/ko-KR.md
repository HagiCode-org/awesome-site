# 엄선한 Kubernetes 리소스 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

멋진 목록 Kubernetes 도구 및 리소스.

에 의해 영감을 [awesome](https://github.com/sindresorhus/awesome) 목록 및 [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws)·

## 최고의 Fiery 미터

* 별 0050+개를 받은 저장소: :fire:
* 별 0200+개를 받은 저장소: :fire::fire:
* 별 0500+개를 받은 저장소: :fire::fire::fire:
* 별 1000+개를 받은 저장소: :fire::fire::fire::fire:
* 별 2000+개를 받은 저장소: :fire::fire::fire::fire::fire:

자주 묻는 질문 [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws)· 


## 이름 *
- [도구 및 라이브러리](#tools-and-libraries)
  - [명령줄 도구](#command-line-tools)
  - [클러스터](#cluster-provisioning)
  - [자동화 및 CI/CD](#automation-and-cicd)
  - [Cluster 자원 관리](#cluster-resources-management)
  - [비밀 관리](#secrets-management)
  - [사업영역](#networking)
  - [제품 정보](#storage)
  - [테스트 및 문제 해결](#testing-and-troubleshooting)
  - [모니터링, 경고 및 시각화](#monitoring-alerts-and-visualization)
  - [백업 및 복원](#backup-and-restore)
  - [보안 및 준수](#security-and-compliance)
  - [서비스 메쉬](#service-mesh)
  - [개발 도구](#development-tools)
  - [데이터 처리 및 기계 학습](#data-processing-and-machine-learning)
  - [데이터 관리](#data-management)
  - [기타 제품](#miscellaneous)
- [가이드, 문서, 블로그 및 학습](#guides-documentations-blogs-and-learnings)
  - [제품정보](#guides)
  - [블로그 및 동영상](#blogs-and-videos)
  - [학습 및 문서](#learnings-and-documentations)
  - [인증 안내](#certification-guides)
- [계정 만들기](#contribute)
- [이름 *](#license)


## 도구 및 라이브러리
제품정보 :green_heart: 오픈 소스 프로젝트를 나타냅니다. 

### 명령줄 도구
- :green_heart:[Helm](https://github.com/helm/helm)  :fire::fire::fire::fire::fire: - Helm은 차트 관리를위한 도구입니다. 차트는 사전 구성의 패키지입니다. Kubernetes 자료실
- :green_heart:[Helmfile](https://github.com/helmfile/helmfile)  :fire::fire::fire::fire::fire: - Helmfile은 helm 차트를 배포하기위한 선언 사양입니다.
- :green_heart:[Helmwave](https://github.com/helmwave/helmwave)  :fire::fire::fire: - Helmwave는 Helm Charts를 배포하기위한 helm3-native 도구입니다. Docker-Compose 처럼, 하지만 Helm.
- :green_heart:[Infra](https://github.com/infrahq/infra)  :fire::fire::fire: - Infra를 통해 인프라를 발견하고 액세스할 수 있습니다. Kubernetes, 데이터베이스). 우리는 Okta 또는 Azure 활성 디렉토리와 같은 ID 공급자를 연결하고 인프라에 설정된 권한을 가진 사용자 / 그룹을 맵니다.
- :green_heart:[K9s](https://github.com/derailed/k9s)  :fire::fire::fire::fire::fire: - K9s는 터미널 UI를 제공하여 Kubernetes 클러스터.
- :green_heart:[kapp](https://github.com/vmware-tanzu/carvel-kapp)  :fire::fire::fire: - kapp은 "의 개념에 초점을 맞춘 간단한 배포 도구입니다Kubernetes application" — 동일한 라벨과 리소스 세트
- :green_heart:[kconnect](https://github.com/fidelity/kconnect)  :fire::fire: - kconnect는 CLI 유틸리티입니다. Kubernetes 여러 운영 환경에 걸쳐 클러스터.
- :green_heart:[kl](https://github.com/robinovitch61/kl)  :fire: - kl은 많은 컨테이너와 클러스터를 통해 로그와 상호 작용하는 인터랙티브 터미널 애플리케이션입니다.
- :green_heart:[Ktunnel](https://github.com/omrikiei/ktunnel)  :fire::fire: - Ktunnel은 kubernetes 클러스터와 로컬 머신 사이의 역 터널을 설정하는 CLI 도구입니다.
- :green_heart:[Kubebox](https://github.com/astefanutti/kubebox)  :fire::fire::fire::fire: - 터미널 및 웹 콘솔 Kubernetes
- :green_heart:[Kubetail](https://github.com/johanhaleby/kubetail)  :fire::fire::fire::fire::fire: - 여러 pods에서 하나의 스트림으로 집계 (tail/follow) 로그를 가능하게하는 Bash 스크립트.
- :green_heart:[kube-shell](https://github.com/cloudnativelabs/kube-shell)  :fire::fire::fire::fire: - Kube-shell : 작업을위한 통합 쉘 Kubernetes 로그인
- ₢ 킹[kubecolor](https://github.com/kubecolor/kubecolor) 🔥🔥🔥 - kubectl 출력을 색화
- :green_heart:[kubectl tree](https://github.com/ahmetb/kubectl-tree)  :fire::fire::fire::fire: - kubectl 플러그인은 소유권 관계를 탐구합니다. Kubernetes 소유자를 통해 개체.
- :green_heart:[kubectl-aliases](https://github.com/ahmetb/kubectl-aliases)  :fire::fire::fire::fire::fire: - 이 저장소에는 kubectl을 위한 편리한 포탄 별명으로 수백을 생성하는 스크립트가 포함되어 있습니다.
- :green_heart:[kubectx + kubens](https://github.com/ahmetb/kubectx)  :fire::fire::fire::fire::fire: - - - `kubectx` 클러스터를 뒤로 전환하고, `kubens` 당신은 사이 전환을 돕습니다 Kubernetes namespaces는 매끄럽습니다.
- :green_heart:[kube-ps1](https://github.com/jonmosco/kube-ps1)  :fire::fire::fire::fire::fire: - kube-ps1 : 현재 추가 할 수있는 스크립트 Kubernetes kubectl에서 Bash/Zsh 프롬프트 문자열(즉, $PS1)로 구성된 컨텍스트 및 네임스페이스.
- :green_heart:[kubediff](https://github.com/weaveworks/kubediff)  :fire::fire::fire: - Kubediff는 도구입니다. Kubernetes 실행 구성과 버전 제어 구성의 차이를 보여줍니다.
- :green_heart:[kubeprompt](https://github.com/jlesquembre/kubeprompt)  :fire: - 각 포탄에 있는 고립 KUBECONFIG는 현재를 보여줍니다 Kubernetes context/namespace 의 설정
- :green_heart:[Kubevela](https://github.com/oam-dev/kubevela)  :fire::fire::fire::fire::fire: - KubeVela는 최소한의 노력으로 설계 및 배송 응용을 가능하게하는 쉽고 확장 가능한 플랫폼입니다.
- :green_heart:[Move2Kube](https://github.com/konveyor/move2kube)  :fire::fire: - 사용자가 Cloud Foundry와 같은 레거시 플랫폼에서 앱을 마이그레이션하는 데 도움이되는 도구 Kubernetes 그리고 Openshift. Application 소스 코드를 분석하고 생성 Kubernetes YAMLs, Helm 도표, Tekton 관, 등. 분석 및 생성은 당신이 원하는 정확한 산출을 생성하기 위하여 크게 주문을 받아서 만들어질 수 있습니다.
- :green_heart:[nova](https://github.com/FairwindsOps/nova/)  :fire::fire: - Nova는 Helm 차트를 설치하기 위해 클러스터를 스캔 한 다음 알려진 Helm 저장소에 대해 십자가 검사합니다.
- :green_heart:[Plural](https://github.com/pluralsh/plural)  :fire::fire: - Plural는 CLI 도구 및 전체 DevOps 관리 플랫폼으로 빠르게 배포, 관리, 모니터링 및 오픈 소스 응용 프로그램 Kubernetes·
- :green_heart:[RBAC Lookup](https://github.com/FairwindsOps/rbac-lookup)  :fire::fire::fire: - RBAC Lookup은 쉽게 찾을 수있는 CLI입니다. Kubernetes 역할과 클러스터 역할은 어떤 사용자, 서비스 계정, 또는 그룹 이름에 경계.
- :green_heart:[stern](https://github.com/stern/stern)  :fire::fire::fire::fire::fire: - Stern은 여러 팟을 꼬리 할 수 있습니다. Kubernetes 그리고 pod 안에 다수 콘테이너.

### 클러스터
- :green_heart:[Bootkube](https://github.com/kubernetes-sigs/bootkube)  :fire::fire::fire::fire: - Bootkube는 자체 호스팅을 시작하기위한 도구입니다. Kubernetes 클러스터.
- :green_heart:[Claudie](https://github.com/berops/claudie)  :fire: - 다양한 클라우드 공급자의 각 노드풀과 멀티클라우드 클러스터.
- :green_heart:[Cluster API](https://github.com/kubernetes-sigs/cluster-api)  :fire::fire::fire::fire::fire: - 클러스터 API는 Kubernetes declarative APIs 및 Tooling을 제공하여 프로비저닝, 업그레이드 및 운영을 단순화하는 데 중점을 둔 하위 프로젝트 Kubernetes 클러스터.
- :green_heart:[eksctl](https://github.com/weaveworks/eksctl)  :fire::fire::fire::fire::fire: - - - `eksctl` EKS 클러스터를 만드는 간단한 CLI 도구 - Amazon의 새로운 관리 Kubernetes EC2 서비스
- :green_heart:[k0s](https://github.com/k0sproject/k0s)  :fire::fire::fire::fire::fire: - k0s - 제로 마찰 Kubernetes (단, 고체 및 인증 Kubernetes 유통)
- :green_heart:[k3d](https://github.com/rancher/k3d)  :fire::fire::fire::fire::fire: - k3d 및 Windows., 파괴, 메모리를 할 수, 높게 사용할 수, 도커의 로컬 k3s 클러스터를 실행하기위한 도구입니다. 그것은 20 MB에 대한 단일 바이너리입니다. 도커가 설치되어 있어야 합니다.
- :green_heart:[k3s](https://github.com/rancher/k3s)  :fire::fire::fire::fire::fire: - 경량 Kubernetes. 설치하게 쉬운,Kubernetes 명령줄에서 클러스터.
- :green_heart:[kind](https://github.com/kubernetes-sigs/kind)  :fire::fire::fire::fire::fire: - 로컬 실행 도구 Kubernetes Docker 컨테이너 "nodes"를 사용하는 클러스터.
- :green_heart:[kops](https://github.com/kubernetes/kops)  :fire::fire::fire::fire::fire: - - - `kops` 당신이 창조하고, 종류 같이, 고급 유지하고 생산 급료를 유지합니다
- :green_heart:[kube-aws](https://github.com/kubernetes-incubator/kube-aws)  :fire::fire::fire::fire: - - - `kube-aws` create/update/destroy의 명령행 도구입니다. Kubernetes AWS에 클러스터.
- :green_heart:[kubespray](https://github.com/kubernetes-sigs/kubespray)  :fire::fire::fire::fire::fire: - 생산 준비를 배포 Kubernetes 이름 *
- :green_heart:[microK8s](https://github.com/ubuntu/microk8s)  :fire::fire::fire::fire::fire: - 가장 작은, 가장 빠른 Kubernetes
- :green_heart:[Minikube](https://github.com/kubernetes/minikube)  :fire::fire::fire::fire::fire: - minikube는 로컬 구현 Kubernetes macOS, Linux의 클러스터는 100MB 미만의 바이너리에서 모두.
- :green_heart:[Talos Linux](https://github.com/siderolabs/talos)  :fire::fire::fire::fire::fire: - Talos Linux는 최소한이며, 밴라일을 설치하는 보안 OS입니다. Kubernetes - 생산 datacenters를 위해, K8s@home, 그리고 가장자리.
- :green_heart:[karpenter]([https://karpenter.sh](https://github.com/aws/karpenter-provider-aws))  :fire::fire::fire::fire::fire: - Karpenter는 Kubernetes Node Autoscaler는 유연성, 성능 및 단순성을 위해 제작되었습니다.
- :green_heart:[Kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/) - kubeadm은 최소한의 viable 클러스터를 실행하고 실행해야 하는 작업을 수행합니다.
- :green_heart:[vCluster](https://github.com/loft-sh/vcluster/) :: :fire::fire::fire::fire::fire: - vCluster를 사용하면 완전히 기능적인 가상을 만들 수 있습니다. Kubernetes 클러스터, drastically 비용 절감 및 멀티-텐시브 개선 및 기존에 비해 고립 Kubernetes· 
  
### 자동화 및 CI/CD
- :green_heart:[Argo CD](https://github.com/argoproj/argo-cd)  :fire::fire::fire::fire::fire: - Argo CD는 declarative, GitOps 지속적인 납품 공구입니다 Kubernetes·
- :green_heart:[Argo Events](https://github.com/argoproj/argo-events)  :fire::fire::fire::fire: - Argo Events는 이벤트 중심 워크플로우 자동화 프레임워크입니다. Kubernetes 당신이 트리거하는 데 도움이 K8s 객체, Argo Workflows, Serverless 워크로드 등
- :green_heart:[Argo Rollouts](https://github.com/argoproj/argo-rollouts)  :fire::fire::fire::fire: - Argo Rollouts Controller는 Blue Green 및 Canary와 같은 추가 배포 전략을 제공하기 위해 롤아웃 사용자 정의 리소스를 사용합니다. Kubernetes·
- :green_heart:[Argo Workflows](https://github.com/argoproj/argo)  :fire::fire::fire::fire::fire: - Argo Workflows는 병렬 작업을 관성하기위한 오픈 소스 컨테이너 중립 워크 엔진입니다. Kubernetes·
- :green_heart:[Argocd autopilot](https://github.com/argoproj-labs/argocd-autopilot)  :fire::fire::fire: - Argo-CD Autopilot은 Argo-CD를 설치하고 GitOps 저장소를 관리하는 데 대한 의견을 제공하는 도구입니다.
- :green_heart:[Flagger](https://github.com/weaveworks/flagger)  :fire::fire::fire::fire::fire: - Flagger는 응용 프로그램에 대한 릴리스 프로세스를 자동화하는 진보적 인 배달 도구입니다. Kubernetes·
- :green_heart:[Flux2](https://github.com/fluxcd/flux2)  :fire::fire::fire::fire::fire: - 플럭스 버전 2는 지상에서 사용까지 건축됩니다 Kubernetes'API 확장 시스템, Prometheus 및 기타 핵심 구성 요소와 통합 Kubernetes 생태계.
- :green_heart:[k8s-image-swapper](https://github.com/estahn/k8s-image-swapper/)  :fire::fire: - - - `k8s-image-swapper` mutating webhook 용 Kubernetes, 자신의 레지스트리로 이미지를 다운로드하고 새로운 위치로 이미지를 지적합니다.
- :green_heart:[Kubero](https://github.com/kubero-dev/kubero)  :fire::fire::fire::fire::fire: - 무료 및 자체 호스팅 Heroku PaaS 대안 Kubernetes GitOps 구현
- :green_heart:[KubeSphere](https://github.com/kubesphere/kubesphere)  :fire::fire::fire::fire::fire: - KubeSphere는 클라우드 네이티브 스택을 제공하는 분산 운영 시스템입니다. Kubernetes 커널로서, 제3자 애플리케이션을 위한 플러그 앤 플레이 아키텍처가 되는 것을 목표로 합니다.
- :green_heart:[Reloader](https://github.com/stakater/Reloader)  :fire::fire::fire::fire::fire: - Reloader는 변경 사항을 볼 수 있습니다. `ConfigMap` · `Secret` 팟에 롤링 업그레이드를 연결 `DeploymentConfigs`· `Deployments`· `Daemonsets` · `Statefulsets`·
- :green_heart:[terranetes-controller](https://github.com/appvia/terranetes-controller)  :fire: - Terranetes 컨트롤러는 플랫폼 팀이 클라우드 리소스의 셀프 서비스 기능을 제공합니다.
- :green_heart:[Skaffold](https://github.com/GoogleContainerTools/skaffold)  :fire::fire::fire::fire::fire: - Skaffold는 연속 개발을 촉진하는 명령줄 도구입니다. Kubernetes 신청.
- :green_heart:[Spinnaker](https://github.com/spinnaker/spinnaker)  :fire::fire::fire::fire::fire: - Spinnaker는 고속 및 신뢰로 소프트웨어 변경을 해제하기위한 오픈 소스 연속 배송 플랫폼입니다.
- :green_heart:[TF-controller](https://github.com/weaveworks/tf-controller)  :fire: - TF-controller는 GitOps 방식의 Terraform 리소스를 재구성하기 위해 Flux를 위한 실험적인 관제사입니다.
- :green_heart:[werf](https://github.com/werf/werf)  :fire::fire::fire::fire::fire: - werf는 Git, Docker, Helm &의 CLI 도구입니다. Kubernetes CI/CD 및 GitOps를 구현하는 모든 CI 시스템. 
- :green_heart:[Weave GitOps](https://github.com/weaveworks/weave-gitops)  :fire::fire: - Weave GitOps는 클라우드 네이티브 애플리케이션을 원하는 사람들에게 간단한 오픈 소스 개발자 플랫폼입니다. Kubernetes 전문분야
- :green_heart:[Otomi - Self-hosted PaaS for K8s](https://github.com/redkubes/otomi-core)  :fire::fire::fire::fire: - Otomi는 개발자 및 운영 중심 도구, 자동화 및 개발자 셀프 서비스 위에 추가 Kubernetes 모든 인프라 또는 클라우드에서 코드, 빌드, 릴리즈, 배포, 보안, 작동 및 컨테이너화된 애플리케이션을 모니터링합니다.
:green_heart:[Cozystack - Self-hosted PaaS for K8s](https://github.com/cozystack/cozystack)  :fire::fire::fire::fire: - 턴키, 자체 호스팅 PaaS는 Talos Linux 클러스터를 강화하기 위해 구축되었으며 보안 우선 Kubernetes 당신의 자신의 금속에 자동화. sovereign 구름 또는 가장자리 중립 더미를 건설하는 경우에 완벽한.

### Cluster 자원 관리
- :green_heart:[Clusterpedia](https://github.com/clusterpedia-io/clusterpedia)  :fire: - Clusterpedia는 여러 클러스터에 걸쳐 복잡한 리소스 검색에 사용됩니다. 여러 클러스터에서 존재하는 리소스 또는 여러 종류의 리소스의 동시 검색을 지원합니다.
- :green_heart:[Grafana Tanka](https://github.com/grafana/tanka)  :fire::fire::fire::fire: - 청소, concise 및 슈퍼 유연한 대안 YAML에 대한 Kubernetes 클러스터.
- :green_heart:[KEDA](https://github.com/kedacore/keda)  :fire::fire::fire::fire::fire: - KEDA는 정밀한 곡물 자동화를 허용합니다 (를 포함하여 0에서 0까지) Kubernetes 작업대.
- :green_heart:[Kruise](https://github.com/openkruise/kruise)  :fire::fire::fire::fire::fire: - Kruise는 확장하고 보완하는 몇몇 관제사로 이루어져 있습니다 Kubernetes workload 관리를 위한 핵심 관제사.
- :green_heart:[KubeDirector](https://github.com/bluek8s/kubedirector)  :fire::fire: - KubeDirector는 표준을 사용합니다. Kubernetes (주)K8s) 사용자 정의 리소스 및 API 확장의 기능은 최첨단 애플리케이션 클러스터를 구현합니다.
- :green_heart:[Kubenav](https://github.com/kubenav/kubenav)  :fire::fire::fire::fire: - kubenav는 네비게이터입니다. Kubernetes 주머니에 마우스 오른쪽.
- :green_heart:[Liqo](https://github.com/liqotech/liqo)  :fire::fire: - Liqo는 서로의 동적 자원 공유를 구현합니다. Kubernetes cluster(e.g.; offloading pods and services), 분산된 거버넌스 지원.
- :green_heart:  [Meshery](https://github.com/meshery/meshery)  :fire::fire::fire::fire::fire: - Meshery는 모든 디자인과 관리를 가능하게 하는 오픈 소스 클라우드 고유 관리자입니다. Kubernetes- 기반 인프라 및 응용 분야.
- :green_heart:[Pluto](https://github.com/FairwindsOps/pluto)  :fire::fire::fire::fire: - Pluto는 사용자가 deprecated를 찾을 수있는 유틸리티입니다. Kubernetes apiVersions 에 그들의 코드 저장소 과 그들의 helm releases.
- :green_heart:[Polaris](https://github.com/FairwindsOps/polaris)  :fire::fire::fire::fire::fire: - Polaris는 오픈 소스 정책 엔진입니다. Kubernetes 즉, 리소스 구성을 검증하고 재개합니다.
- :green_heart:[Projectsveltos](https://github.com/projectsveltos/addon-manager)  :fire: Projectsveltos는 Kubernetes add-on 컨트롤러는 여러 클러스터에서 add-ons 및 애플리케이션의 배포 및 관리를 단순화합니다.
- :green_heart:[The Hierarchical Namespace Controller](https://github.com/kubernetes-sigs/multi-tenancy/tree/master/incubator/hnc)  :fire::fire::fire: - Hierarchical 네임스페이스는 네임스페이스를 더 강력하게 만들기 위해 클러스터를 쉽게 공유할 수 있습니다.

### 비밀 관리
- :green_heart:[Kubernetes External Secrets](https://github.com/godaddy/kubernetes-external-secrets)  :fire::fire::fire::fire::fire: - - - Kubernetes 외부 비밀은 AWS Secrets Manager 또는 HashiCorp Vault와 같은 외부 비밀 관리 시스템을 사용하여 안전하게 비밀을 추가 할 수 있습니다. Kubernetes·
- :green_heart:[Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets)  :fire::fire::fire::fire::fire: - SealedSecret에 비밀을 암호화, 저장 안전 - 심지어 공공 저장소.
- :green_heart:[akv2k8s](https://github.com/SparebankenVest/azure-key-vault-to-kubernetes)  :fire::fire: - Azure 키 볼트 Kubernetes (akv2k8s)는 Azure Key Vault 개체를 사용할 수 있습니다. Kubernetes 두 가지 방법으로: 기본 Kubernetes 비밀; 환경 변수로 직접 당신의 컨테이너 응용에 주사

### 사업영역
- :green_heart:[Calico Networking](https://github.com/projectcalico/calico)  :fire::fire::fire::fire::fire: - Calico는 컨테이너, 가상 머신 및 베어 메탈 워크로드를 위한 오픈 소스 네트워킹 및 네트워크 보안 솔루션입니다.
- :green_heart:[cert-manager](https://github.com/jetstack/cert-manager)  :fire::fire::fire::fire::fire: - cert-manager는 Kubernetes 다양한 발행 소스에서 TLS 인증서의 관리 및 발급을 자동화 할 수 있습니다.
- :green_heart:[cilium](https://github.com/cilium/cilium)  :fire::fire::fire::fire::fire: - Cilium은 eBPF 기반 데이터 비행기와 네트워킹, 관찰성 및 보안 솔루션입니다.
- :green_heart:[CoreDNS](https://github.com/coredns/coredns)  :fire::fire::fire::fire::fire: - CoreDNS는 빠르고 유연한 DNS 서버로 작동 Kubernetes·
- :green_heart:[ingress-nginx](https://github.com/kubernetes/ingress-nginx)  :fire::fire::fire::fire::fire: - - - `ingress-nginx` Ingress 컨트롤러 Kubernetes NGINX를 역 프록시 및 로드밸런서로 사용합니다.
- :green_heart:[Kong for Kubernetes](https://github.com/Kong/kubernetes-ingress-controller)  :fire::fire::fire::fire: - 플러그인 구성, 건강 검사, 로드 균형 및 더 많은 in Kong Kubernetes 서비스.
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - tcpdump 및 Wireshark를 활용한 kubectl 플러그인을 사용하여 원격 캡처를 시작할 수 있습니다. Kubernetes 클러스터.
- :green_heart:[kubectl trace](https://github.com/iovisor/kubectl-trace)  :fire::fire::fire::fire: - - - `kubectl trace` kubectl 플러그인으로 bpftrace 프로그램을 실행할 수 있습니다. Kubernetes 클러스터.
- :green_heart:[Kube Karp](https://github.com/immanuelfodor/kube-karp)  :fire: - 부동 가상 IP를 Kubernetes CARP 프로토콜을 기반으로 쉽게 균형 잡힌 부하 클러스터 노드
- :green_heart:[kubernetes-ingress](https://github.com/nginxinc/kubernetes-ingress)  :fire::fire::fire::fire::fire:  - NGINX 및 NGINX Plus의 Ingress Controller 구현
- :green_heart:[kube-ovn](https://github.com/alauda/kube-ovn)  :fire::fire::fire::fire:  - 아 Kubernetes 기능에 부유하고 운영에서 쉬운 기업을 위한 네트워크 직물.
- :green_heart:[loxilb](https://github.com/loxilb-io/loxilb)  :fire::fire::fire:  - 아 Kubernetes eBPF에 근거를 둔 서비스 짐 균형.
  
### 제품 정보
- :green_heart:[Longhorn](https://github.com/longhorn/longhorn)  :fire::fire::fire::fire::fire: - Longhorn은 분산 블록 스토리지 시스템입니다. Kubernetes·
- :green_heart:[OpenEBS](https://github.com/openebs/openebs)  :fire::fire::fire::fire::fire: - OpenEBS는 가장 넓게 배치되고 open-source 저장 해결책을 사용하는 것은 쉽습니다 Kubernetes·
- :green_heart:[Rook](https://github.com/rook/rook)  :fire::fire::fire::fire::fire: - Rook는 오픈 소스 클라우드 네이티브 스토리지 오케스트라 Kubernetes·

### 테스트 및 문제 해결
- :green_heart:[Chainsaw](https://github.com/kyverno/chainsaw)  :fire: - 최종 테스트 도구에 대한 궁극적 인 끝 Kubernetes 작업자.
- :green_heart:[Chaos Mesh](https://github.com/pingcap/chaos-mesh)  :fire::fire::fire::fire::fire: - Chaos Mesh®는 챠오를 관현하는 클라우드 중립 Chaos Engineering 플랫폼입니다. Kubernetes 환경.
- :green_heart:[chaoskube](https://github.com/linki/chaoskube)  :fire::fire::fire::fire: - - - `chaoskube` 주기적으로 당신의 무작위 pods를 죽이십시오 Kubernetes 클러스터.
- :green_heart:[Conftest](https://github.com/open-policy-agent/conftest)  :fire::fire::fire::fire: - Conftest는 구성 데이터에 대한 테스트를 작성하는 데 도움이됩니다.
- :green_heart:[DETIK](https://github.com/bats-core/bats-detik)  :fire: - end-to-end 테스트를 단순화하는 라이브러리 K8s 사용방법 [BATS](https://github.com/bats-core/bats-core) assertions 및 자연 언어 쿼리.
- :green_heart:[k6](https://github.com/loadimpact/k6)  :fire::fire::fire::fire::fire: - k6는 부하 및 성능 테스트 업계에서 Load Impact의 년 경험을 구축하는 현대적인 로드 테스트 도구입니다.
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - tcpdump 및 Wireshark를 활용한 kubectl 플러그인을 사용하여 원격 캡처를 시작할 수 있습니다. Kubernetes 클러스터.
- :green_heart:[Kube DOOM](https://github.com/storax/kubedoom)  :fire::fire::fire::fire: - chaos 공학의 다음 수준은 여기! 당신의 안쪽에 pods를 죽이십시오 Kubernetes Doom에서 그들을 촬영하여 클러스터!
- :green_heart:[kube-monkey](https://github.com/asobti/kube-monkey)  :fire::fire::fire::fire::fire: - 무작위로 삭제 Kubernetes (k8s) 클러스터의 파드는 실패 탄력적 서비스의 개발 및 검증.
- :green_heart:[kube-score](https://github.com/zegl/kube-score)  :fire::fire::fire::fire: - - - `kube-score` 의 정적 코드 분석을 수행하는 도구 Kubernetes 객체 정의.
- :green_heart:[Kubectl-debug](https://github.com/JamesTGrant/kubectl-debug)  :fire::fire::fire::fire::fire: - - - `kubectl-debug` 디버깅 목적으로 파드를 실행할 수 있는 새로운 컨테이너를 실행할 수 있는 파드를 문제 해결하기 위한 out-of-tree 솔루션입니다.
- :green_heart:[KubeInvaders](https://github.com/lucky-sideburn/KubeInvaders)  :fire::fire::fire: - KubeInvaders를 통해 스트레스를 할 수 있습니다. Kubernetes 재미있는 방법으로 클러스터를 확인하고 탄력있는 방법을 확인하십시오.
- :green_heart:[Kubetest](https://github.com/vapor-ware/kubetest)  :fire: - Kubetest는 관리하기 쉬운 pytest 플러그인입니다 Kubernetes 통합 테스트 내에서 클러스터.
- :green_heart:[Litmus](https://github.com/litmuschaos/litmus)  :fire::fire::fire::fire::fire: - Litmus는 오케스트라에 도구를 제공합니다 Kubernetes 에 도움 SREs find 약점 에 그들의 배포.
- :green_heart:[popeye](https://popeyecli.io/)  :fire::fire::fire::fire::fire: - Popeye는 라이브 스캔 유틸리티입니다. Kubernetes 클러스터 및 보고서 잠재적 문제 배포 리소스 및 구성.
- :green_heart:[PowerfulSeal](https://github.com/bloomberg/powerfulseal)  :fire::fire::fire::fire: - StrongSeal는 실패를 당신의 주사합니다 Kubernetes 클러스터는 가능한 한 일찍 문제를 감지 할 수 있도록합니다.
- :green_heart:[Testkube](https://github.com/kubeshop/testkube)  :fire::fire::fire: - Testkube는 Kubernetes 테스트 오케스트라 및 실행을위한 기본 테스트 프레임 워크. 테스트 중 어떤 것을 실행할 수 있습니다. Kubernetes 클러스터. CI/CD와 통합하여 GitOps가 테스트에 접근할 수 있게 되며, 모든 클러스터를 건너는 모든 테스트 결과에 대한 중앙화된 장소를 가지고 있습니다.

### 모니터링, 경고 및 시각화
- :green_heart:[BotKube](https://github.com/infracloudio/botkube)  :fire::fire::fire::fire: - Slack 또는 Mattermost와 BotKube 통합을 통해 모니터할 수 있습니다. Kubernetes 클러스터, 디버그 중요한 배포 및 표준 관행에 대한 권장 사항을 제공합니다 Kubernetes 자료실
- :green_heart:[Canary Checker](https://github.com/flanksource/canary-checker)  :fire: - Canary Checker는 30+ 내장된 건강 검사 유형을 가진 kubernetes-native 건강 검사 플랫폼입니다.
- :green_heart:[Cortex](https://github.com/cortexproject/cortex)  :fire::fire::fire::fire::fire: - 외피는 Prometheus를 위한 수평으로 확장할 수 있는, 높게 유효한, 다중목적, 장기 저장을 제공합니다.
- :green_heart:[Goldilocks](https://github.com/FairwindsOps/goldilocks)  :fire::fire::fire: - Goldilocks는 자원 요청 및 제한을위한 시작점을 식별 할 수있는 유틸리티입니다.
- :green_heart:[Goldpinger](https://github.com/bloomberg/goldpinger)  :fire::fire::fire::fire::fire: - Debugging 도구 Kubernetes 클러스터에서 노드 사이의 연결성을 테스트하고 표시합니다.
- :green_heart:[Grafana](https://github.com/grafana/grafana)  :fire::fire::fire::fire::fire: - Grafana는 쿼리, 시각화, 경고를 허용하고 저장되는 곳의 메트릭을 이해합니다.
- :green_heart:[Helm Dashboard](https://github.com/komodorio/helm-dashboard)  :fire::fire::fire::fire: - Helm에 대한 누락 된 UI. Helm Dashboard 플러그인은 설치 된 Helm 차트를 볼 수있는 UI 기반 방법을 제공하며, 개정 역사와 해당 k8s 리소스를 참조하십시오. 
- :green_heart:[Kiali](https://github.com/kiali/kiali)  :fire::fire::fire::fire::fire: - Kiali는 서비스 메쉬 topology를 시각화하기 위해 Istio와 협력합니다.
- :green_heart:[k8s-image-availability-exporter](https://github.com/flant/k8s-image-availability-exporter)  :fire: - Prometheus Exporter that warns you proactively about images that are 정의 된 이미지 Kubernetes 객체는 컨테이너 레지스트리에서 사용할 수 없습니다. 
- :green_heart:[kube-capacity](https://github.com/robscott/kube-capacity)  :fire::fire::fire: - 이것은 자원 요청, 제한 및 활용의 개요를 제공하는 간단한 CLI입니다. Kubernetes 클러스터.
- :green_heart:[Kubernetes Dashboard](https://github.com/kubernetes/dashboard)  :fire::fire::fire::fire::fire: - - - Kubernetes Dashboard는 범용, 웹 기반 UI입니다. Kubernetes 클러스터.
- :green_heart:[Kubedev](https://github.com/relferreira/kubedev)  :fire: - Kubedev는 관리를위한 강력하고 아름다운 사용자 인터페이스입니다 Kubernetes 클러스터.
- :green_heart:[KubeHelper](https://github.com/KubeHelper/kubehelper)  :fire: - KubeHelper - 일상을 단순화 Kubernetes 웹 인터페이스를 통해 클러스터 작업.
- :green_heart:[Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server)  :fire::fire::fire::fire::fire: - Metrics Server는 컨테이너 리소스 메트릭의 확장성, 효율적인 소스입니다. Kubernetes 내장 자동화 파이프라인.
- :green_heart:[Kubernetes Operational View](https://github.com/hjacobs/kube-ops-view)  :fire::fire::fire::fire: - 여러 가지 일반적인 조작 사진을 제공하는 것을 목표로하는 도구 Kubernetes 클러스터.
- :green_heart:[kube-state-metrics](https://github.com/kubernetes/kube-state-metrics)  :fire::fire::fire::fire::fire: - kube-state-metrics는 듣기 쉬운 서비스입니다. Kubernetes API 서버는 객체의 상태에 대한 메트릭을 생성합니다.
- :green_heart:[kubewatch](https://github.com/robusta-dev/kubewatch)  :fire::fire::fire::fire::fire: - - - `kubewatch` · Kubernetes 현재 제공되는 협업 허브/노화 채널에 알림을 게시합니다.
- :green_heart:[Lens](https://github.com/lensapp/lens)  :fire::fire::fire::fire::fire: - 렌즈 그것은 유용, 매력, 오픈 소스 사용자 인터페이스 (UI) 작업 Kubernetes 클러스터.
- :green_heart:[Mizu](https://github.com/up9inc/mizu)  :fire::fire::fire: - API 트래픽 뷰어 Kubernetes microservices 간의 모든 API 통신을 볼 수 있습니다. TCPDump와 Wireshark를 재 발명 Kubernetes
- :green_heart:[Network mapper](https://github.com/otterize/network-mapper)  :fire::fire: - 지도 Kubernetes in-cluster 트래픽 및 내보내기 텍스트, intents 또는 이미지.
- :green_heart:[Popeye](https://github.com/derailed/popeye)  :fire::fire::fire::fire::fire: - Popeye는 라이브 스캔 유틸리티입니다. Kubernetes 클러스터 및 보고서 잠재적 문제 배포 리소스 및 구성.
- :green_heart:[Prometheus](https://github.com/prometheus/prometheus)  :fire::fire::fire::fire::fire: - Prometheus, Cloud Native Computing Foundation 프로젝트는 시스템 및 서비스 모니터링 시스템입니다.
- :green_heart:[Searchlight](https://github.com/searchlight/searchlight)  :fire::fire: - Searchlight/Icinga 주기적으로 다양한 체크를 실행 Kubernetes 클러스터를 보내고 문제가 발견되면 알림을 보냅니다.
- :green_heart:[Sloop](https://github.com/salesforce/sloop)  :fire::fire::fire: - Sloop 모니터 Kubernetes이벤트 및 리소스 상태 변경의 역사와 과거 이벤트를 디버깅에 대한 시각화를 제공합니다.
- :green_heart:[Thanos](https://github.com/thanos-io/thanos)  :fire::fire::fire::fire::fire: - Thanos는 무제한 저장 용량을 가진 높게 유효한 미터 체계로 구성될 수 있는 성분의 세트입니다.
- :green_heart:[K8Studio](https://github.com/guiqui/k8Studio)  :fire::fire::fire: - K8Studio IDE 관리 및 시각화 Kubernetes 감사합니다.
- :green_heart:[KubeDiagrams](https://github.com/philippemerle/KubeDiagrams)  :fire: - 생성 Kubernetes 건축 도표에서 Kubernetes 파일, kustomization 파일, Helm 차트 및 실제 클러스터 상태.

### 백업 및 복원
- :green_heart:[katafygio](https://github.com/bpineau/katafygio)  :fire: - katafygio 발견 Kubernetes 객체 (deployments, services, ...), 지속적으로 git 저장소에 yaml 파일로 저장합니다.
- :green_heart:[Velero](https://github.com/vmware-tanzu/velero)  :fire::fire::fire::fire::fire: - Velero (이전 Heptio Ark)는 당신에게 도구를 백업하고 복원합니다. Kubernetes 클러스터 리소스 및 지속적 볼륨.

### 보안 및 준수
- :green_heart:[Datree](https://github.com/datreeio/datree)  :fire::fire::fire::fire::fire: - Datree는 CLI 도구입니다. Kubernetes 개발자가 오류를 방지함으로써 역할에 대한 관리자 Kubernetes 클러스터가 생산에 실패할 수 있는 구성.
- :green_heart:[Deepfence ThreatMapper](https://github.com/deepfence/ThreatMapper)  :fire::fire::fire: - Apache v2, kubernetes, 가상 머신 및 serverless를 위한 강력한 실행 시간 취약성 스캐너.
- :green_heart:[Falco](https://github.com/falcosecurity/falco)  :fire::fire::fire::fire::fire: - Falco는 당신의 신청에 있는 anomalous 활동을 검출하기 위하여 디자인된 행동 활동 감시자입니다. Falco를 사용하여 실행 시간 보안을 모니터링 할 수 있습니다. Kubernetes 신청과 내부 성분.
- :green_heart:[Gatekeeper](https://github.com/open-policy-agent/gatekeeper)  :fire::fire::fire::fire::fire: - 정책 컨트롤러 Kubernetes
- :green_heart:[Intents operator](https://github.com/otterize/intents-operator)  :fire::fire: - 네트워크 정책 관리, Istio 권한 정책 및 Kafka ACLs Kubernetes 쉽게 클러스터.
- :green_heart:[k-rail](https://github.com/cruise-automation/k-rail)  :fire::fire: - k-rail는 workload 정책 시행 도구입니다. Kubernetes. 그것은 당신이 최소한의 붕괴 및 최대 각측정속도를 가진 다 tenant 클러스터를 보호할 것을 도울 수 있습니다.
- :green_heart:[Konstraint](https://github.com/plexsystems/konstraint)  :fire::fire: - Konstraint는 Gatekeeper를 사용할 때 constraints의 생성 및 관리에 도움을주는 CLI 도구입니다.
- :green_heart:[kube-bench](https://github.com/aquasecurity/kube-bench)  :fire::fire::fire::fire::fire: - kube-bench는 여부를 확인하는 이동 응용 프로그램입니다 Kubernetes CIS에서 문서화된 체크를 실행하여 안전하게 배포 Kubernetes 벤치 마크.
- :green_heart:[kube-hunter](https://github.com/aquasecurity/kube-hunter)  :fire::fire::fire::fire::fire: - kube-hunter는 보안 약점에 대한 사냥 Kubernetes 클러스터.
- :green_heart:[KubeLinter](https://github.com/stackrox/kube-linter)  :fire::fire::fire::fire: - KubeLinter는 정적 분석 도구입니다. Kubernetes YAML 파일 및 Helm 차트는 최고의 관행을 준수합니다.
- :green_heart:[Kubesploit](https://github.com/cyberark/kubesploit)  :fire::fire::fire: - Kubesploit은 Golang에서 작성한 컨테이너화된 환경을 위해 설계된 HTTP / 2 명령 및 제어 서버 및 에이전트이며 Russel Van Tuyl (@Ne0nd0g)의 Merlin 프로젝트의 상단에 내장되어 있습니다.
- :green_heart:[KubiScan](https://github.com/cyberark/KubiScan)  :fire::fire::fire: - 스캔 도구 Kubernetes 위험에 대한 클러스터 Kubernetes역할 기반 액세스 제어 (RBAC) 인증 모델.
- :green_heart:[Kyverno](https://github.com/kyverno/kyverno)  :fire::fire::fire::fire: - Kyverno는 정책 엔진입니다. Kubernetes. 그것은 유효한, mutate 할 수 있고, 입학 통제와 배경 검사를 사용하여 윤곽을 생성합니다.
- :green_heart:[Netchecks](https://github.com/hardbyte/netchecks/)  :fire: - 테스트 네트워크 조건 및 asserting에 대한 도구 세트 예상대로.
- :green_heart:[Permission manager](https://github.com/sighupio/permission-manager)  :fire::fire::fire: - Permission Manager는 SIGHUP에 의해 개발 된 응용 프로그램입니다. 초고속 및 사용자 친화적 인 RBAC 관리를 가능하게합니다. Kubernetes·
- :green_heart:[rakkess](https://github.com/corneliusweig/rakkess)  :fire::fire::fire: - kubectl 플러그인은 서버 리소스에 대한 액세스 매트릭스를 보여줍니다
- :green_heart:[Rönd](https://github.com/rond-authz/rond)  :fire: - Rönd는 오픈 소스 경량 Kubernetes 간단한 보안 정책으로 API를 보호하는 데 도움이되는 sidecar 컨테이너. 또한 기본적으로 RBAC/ABAC 솔루션을 구축할 수 있습니다.
- :green_heart:[Teleport](https://github.com/gravitational/teleport)  :fire::fire::fire::fire::fire: - Teleport Unified Access Plane는 엔지니어가 모든 컴퓨팅 리소스에 신속하게 액세스 할 수 있습니다.


### 서비스 메쉬
- :green_heart:[Istio](https://github.com/istio/istio)  :fire::fire::fire::fire::fire: - 연결, 관리, 안전한 microservices를 위한 개방형 플랫폼.
- :green_heart:[Linkerd](https://github.com/linkerd/linkerd)  :fire::fire::fire::fire::fire: - Linkerd는 현대 신청 안전하고 sane를 만들기 위하여 디자인된 투명한 서비스 메시입니다.
- :green_heart:[Open Service Mesh](https://github.com/openservicemesh/osm/)  :fire::fire::fire::fire::fire: - Open Service Mesh (OSM)는 사용자가 획일하게 관리하고 안전하게 관리할 수 있는 경량, 확장 가능한 클라우드 네이티브 서비스 메쉬이며, 역동적인 마이크로서비스 환경을 위한 아웃-of-the-box Observability 기능을 제공합니다.


### 개발 도구
- :green_heart:[Cyclops](https://github.com/cyclops-ui/cyclops)  :fire::fire: - 사용자 정의 UI Kubernetes 설치하기
- :green_heart:[Eclipse JKube](https://github.com/eclipse/jkube)  :fire::fire: - Java 개발자에 대한 도구 및 플러그인은 필요한 표시와 함께 컨테이너 이미지를 만들 수 있도록 도와줍니다. Kubernetes·
- :green_heart:[garden](https://github.com/garden-io/garden)  :fire::fire::fire::fire::fire: - Garden은 생산품을 제공합니다. Kubernetes 통합 테스트, QA 및 개발 환경 테스트.
- :green_heart:[gefyra](https://github.com/gefyrahq/gefyra)  :fire::fire::fire: -Gefyra blazingly-fast, rock-solid, 로컬 애플리케이션 개발 ➡️ Kubernetes·
- :green_heart:[ko](https://github.com/google/ko)  :fire::fire::fire::fire::fire: - - - `ko` Golang 애플리케이션을 구축하고 배포하는 도구입니다. Kubernetes·
- :green_heart:[Konfig](https://github.com/cloud66-oss/konfig)  :fire: - Konfig는 입니다 Kubernetes 친절한 가로장 보석. YAML 또는 폴더에서 구성과 비밀을 개별 파일로로드하고 응용 프로그램에 동일한 방법을 제시 할 수 있습니다.
- :green_heart:[kubevious](https://github.com/kubevious/Kubevious)  :fire::fire::fire::fire: - Kubevious는 한 곳에서 응용 프로그램에 관련된 모든 구성을 렌더링합니다. 그것은 연산자에서 많은 시간을 절약, 설정과 선택자 및 라벨 내에서 파는 필요 제거.
- :green_heart:[kubectl-warp](https://github.com/ernoaapa/kubectl-warp)  :fire::fire: - - - Kubernetes 팟에서 로컬 파일을 동기화하고 실행하는 CLI 플러그인 Kubernetes
- :green_heart:[kubernix](https://github.com/saschagrunert/kubernix)  :fire::fire::fire: - 이 프로젝트는 단일 의존성을 제공하기 위해 Kubernetes 로컬 테스트, 실험 및 개발 목적을 위한 클러스터.
- :green_heart:[Makisu](https://github.com/uber/makisu)  :fire::fire::fire::fire::fire: - Makisu는 Mesos 또는 같은 컨테이너화된 환경을 위해 설계된 빠르고 유연한 Docker 이미지 빌드 도구입니다. Kubernetes·
- :green_heart:[mirrord](https://github.com/metalbear-co/mirrord)  :fire::fire::fire::fire::fire: - 미러링은 로컬 프로세스와 클라우드 환경을 연결하고 클라우드 환경에서 로컬 코드를 실행합니다.
- :green_heart:[Monokle](https://github.com/kubeshop/monokle)  :fire::fire::fire: - 모노클을 사용하면 클러스터에 리소스를 연결하고 비교하고, kustomize 또는 helm의 출력을 디버깅하고, kustomize 또는 helm의 출력을 디버깅하는 데 도움이됩니다.
- :green_heart:[Okteto](https://github.com/okteto/okteto)  :fire::fire::fire::fire: - - - `okteto` 개발 작업 흐름 가속화 Kubernetes 신청.
- :green_heart:[Telepresence](https://github.com/telepresenceio/telepresence)  :fire::fire::fire::fire::fire: - Telepresence는 빠르고 현실적인 로컬 개발을 제공합니다. Kubernetes 마이크로 서비스.
- :green_heart:[Tilt](https://github.com/tilt-dev/tilt)  :fire::fire::fire::fire::fire: - Tilt Powers 멀티 서비스 개발 및 행동을 확인합니다.
- :green_heart:[Tye](https://github.com/dotnet/tye)  :fire::fire::fire::fire::fire: - Tye는 microservices 및 분산 응용 프로그램을 개발, 테스트 및 배포하는 개발자 도구입니다.
- [Aptakube](https://aptakube.com) - 현대, 경량 및 멀티 클러스터 데스크톱 클라이언트 Kubernetes. 동시에 여러 클러스터에 연결하여 모든 리소스를 편집하고 관리합니다.

### 데이터 처리 및 기계 학습
- :green_heart:[Kubeflow](https://github.com/kubeflow/kubeflow)  :fire::fire::fire::fire::fire: - Kubeflow는 Google의 내부 기계 학습 파이프라인을 기반으로하는 기계 학습을위한 Cloud Native 플랫폼입니다.
- :green_heart:[nos](https://github.com/nebuly-ai/nos)  :fire::fire: - - - `nos` AI 워크로드를 효율적으로 실행하는 오픈 소스 플랫폼입니다. Kubernetes, GPU 활용 증가 및 인프라 및 운영 비용을 절감.
- :green_heart:[Strimzi](https://github.com/strimzi/strimzi-kafka-operator)  :fire::fire::fire::fire::fire: - Strimzi는 Apache Kafka 클러스터를 실행하는 방법을 제공합니다. Kubernetes 또는 OpenShift 다양한 배포 구성.
- :green_heart:[Volcano](https://github.com/volcano-sh/volcano)  :fire::fire::fire::fire: - Volcano는 배치 체계에 건축됩니다 Kubernetes·
- :green_heart:[yunikorn](https://github.com/apache/incubator-yunikorn-core)  :fire::fire: - 경량, 컨테이너 오케스트라 시스템용 범용 리소스 스케줄러.

### 데이터 관리
- :green_heart:[Kubegres](https://github.com/reactive-tech/kubegres)  :fire::fire::fire: - Kubegres는 Kubernetes 작업자는 데이터 복제 및 실패로 PostgreSql pods의 하나 또는 많은 클러스터를 배포 할 수 있습니다.
- :green_heart:[Postgres Operator](https://github.com/CrunchyData/postgres-operator)  :fire::fire::fire::fire::fire: - PGO, Crunchy Data의 Postgres 연산자는 PostgreSQL 클러스터를 자동으로 관리하는 데 필요한 Postgres 솔루션을 제공합니다.
- :green_heart:[MongoDB Community Kubernetes Operator](https://github.com/mongodb/mongodb-kubernetes-operator)  :fire::fire: - 이것은 Kubernetes MongoDB 커뮤니티를 배포하는 운영자 Kubernetes 클러스터.
- :green_heart:[MySQL Operator for Kubernetes](https://github.com/mysql/mysql-operator)  :fire: - MYSQL 연산자 Kubernetes 작업자입니다 Kubernetes MySQL InnoDB 관리 클러스터 설정 내부 Kubernetes 감사합니다.
- :green_heart:[Redis Operator](https://github.com/spotahome/redis-operator)  :fire::fire::fire: - Redis 연산자는/configures/manages redis-failovers atop를 만듭니다 Kubernetes·

### 기타 제품
- :green_heart:[Agones](https://github.com/googleforgames/agones)  :fire::fire::fire::fire::fire: - Agones는 호스팅, 실행 및 스케일링 전용 게임 서버를 위한 라이브러리입니다. Kubernetes·
- :green_heart:[AWS Controllers for Kubernetes](https://github.com/aws/aws-controllers-k8s)  :fire::fire::fire::fire: - AWS 컨트롤러 Kubernetes (ACK)는 AWS 서비스 리소스를 직접 정의하고 사용합니다. Kubernetes·
- :green_heart:[AWS Node Termination Handler](https://github.com/aws/aws-node-termination-handler)  :fire::fire::fire: - 아 Kubernetes EC2 인스턴스를 완전히 처리하는 Daemonset
- :green_heart:[Brigade](https://github.com/brigadecore/brigade/)  :fire::fire::fire::fire::fire: - Brigade는 파이프 라인 생성을위한 도구입니다. Kubernetes·
- :green_heart:[Crossplane](https://github.com/crossplane/crossplane)  :fire::fire::fire::fire::fire: - Crossplane은 오픈 소스입니다. Kubernetes 클라우드 인프라, 서비스 및 응용 프로그램을 제공하고 관리 할 수있는 능력으로 클러스터를 확장하는 추가 기능.
- :green_heart:[Descheduler for Kubernetes](https://github.com/kubernetes-sigs/descheduler)  :fire::fire::fire::fire::fire: - 정책에 근거하여 노드의 파드 Descheduling
- :green_heart:[Devtron](https://github.com/devtron-labs/devtron)  :fire::fire::fire::fire: - 개발자 친화적 인 방법으로 kubernetes에서 작업 및 유지 응용 프로그램 (AppOps)에 대한 자체 보호 플랫폼으로 설계되었습니다.
- :green_heart:[OpenCost](https://github.com/opencost/opencost)  :fire::fire::fire::fire::fire: - OpenCost 모델은 현재와 역사적인 팀 가시성을 제공합니다. Kubernetes 자원 할당.
- :green_heart:[K8s-Cleaner](https://github.com/gianlucam76/k8s-cleaner)  :fire: - - - `k8s-cleaner` 사용되지 않은 리소스를 식별하고 제거하십시오.
- :green_heart:[K8sPurger](https://github.com/yogeshkk/K8sPurger)  :fire: - - - `K8sPurger` Hunt 사용되지 않은 자원 Kubernetes·
- :green_heart:[KubeEdge](https://github.com/kubeedge/kubeedge)  :fire::fire::fire::fire::fire: - KubeEdge는 위에 건축됩니다 Kubernetes 그리고 Edge에서 호스트하는 기본 컨테이너화된 애플리케이션 오케스트라 및 장치 관리를 확장합니다.
- :green_heart:[KubePug](https://github.com/rikatz/kubepug)  :fire::fire: - 업그레이드 전에 deprecations를 확인하는 도구 Kubernetes 이름 *
- :green_heart:[Kube No Trouble](https://github.com/doitintl/kube-no-trouble)  :fire::fire::fire::fire::fire: - 쉽게 deprecated API의 사용을 위한 클러스터를 검사하십시오
- :green_heart:[Shell-operator](https://github.com/flant/shell-operator)  :fire::fire::fire::fire: - Shell-operator는 이벤트 구동 스크립트를 위한 도구입니다. Kubernetes 클러스터.

## 가이드, 문서, 블로그 및 학습

### 제품정보
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - 포괄적인 소개 Kubernetes 회사연혁
- [A Deep Dive Into Kubernetes Schema Validation](https://www.datree.io/resources/kubernetes-schema-validation) - 가이드 Kubernetes schema 및 OSS 및 기본 도구를 사용하여 검증하는 방법
- [A Guide to the Kubernetes Networking Model](https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/) - 심층적 런트로 Kubernetes 네트워크
- [Amazon EKS Best Practices Guide for Security](https://aws.github.io/aws-eks-best-practices/) - 이 가이드는 위험 평가 및 완화 전략을 통해 비즈니스 가치를 전달하면서 EKS에 의존하는 정보, 시스템 및 자산을 보호하는 방법에 대한 조언을 제공합니다.
- [Amazon EKS Node Drainer](https://github.com/aws-samples/amazon-k8s-node-drainer)  :fire: - 종료된 EC2 노드의 모든 evictable pods를 Cordon 및 evict에 대한 가이드와 예.
- [Comparison of Kubernetes Ingress controllers](https://docs.google.com/spreadsheets/d/191WWNpjJ2za6-nbG4ZoUMXMpUK8KlCIosvQB0f-oq3k/htmlview?pru=AAABdXUHlbs*g6XkyoZXhanlhRazst77Xw) - 이 연구는 14의 다른 기능을 비교합니다 Kubernetes Ingress 관제사.  
- [Configuring HA Kubernetes cluster on bare metal servers with kubeadm](https://medium.com/faun/configuring-ha-kubernetes-cluster-on-bare-metal-servers-with-kubeadm-1-2-1e79f0f7857b) - HA에 서 있는 가이드 Kubernetes kubeadm을 가진 벌거벗은 금속 서버에 클러스터.
- [Introduction to Using Google Kubernetes Engine; Explain Like I’m Five!](https://medium.com/faun/google-kubernetes-engine-explain-like-im-five-1890e550c099) - 첫 번째 관리 Kubernetes Google의 클러스터 Kubernetes Terraform을 사용하여 엔진.
- [Kubernetes Network Policy Recipes](https://github.com/ahmetb/kubernetes-network-policy-recipes)  :fire::fire::fire::fire::fire: - 이 저장소에는 다양한 사용 사례가 포함되어 있습니다. Kubernetes 네트워크 정책 및 샘플 YAML 파일은 설정에서 레버리지합니다.
- [Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)  :fire::fire::fire::fire::fire: - - - Kubernetes Hard Way는 부트 스트랩을 통해 안내합니다. Kubernetes 구성 요소와 RBAC 인증 간의 엔드 투 엔드 암호화를 가진 클러스터.
- [Kubernetes Working Group for Multi-Tenancy](https://github.com/kubernetes-sigs/multi-tenancy)  :fire::fire::fire: - 다중목적 관련 제안 및 프로토 타입을 위한 작업 공간입니다.
- [Production grade Kubernetes Monitoring using Prometheus](https://medium.com/faun/production-grade-kubernetes-monitoring-using-prometheus-78144b835b60) - Prometheus Monitoring Solution을 배포하는 심층적인 가이드.
- [The Illustrated Children’s Guide to Kubernetes](https://www.cncf.io/phippy/the-childrens-illustrated-guide-to-kubernetes/) - 그래픽 설명 Kubernetes
- [Troubleshooting Kubernetes deployments](https://learnk8s.io/a/troubleshooting-kubernetes.pdf) - kubernetes 배포를 문제 해결하는 흐름 차트
 - [Vertical Pod Autoscaling: The Definitive Guide](https://povilasv.me/vertical-pod-autoscaling-the-definitive-guide/) - 심층적 설명 Kubernetes VPA : 그것이 무엇인지, 어떻게 작동, 그것을 사용하는 방법 및 그것을 제한. 
- [Writing Your First Kubernetes Operator](https://medium.com/faun/writing-your-first-kubernetes-operator-8f3df4453234) - 이 문서에서, 우리는 당신의 첫번째를 구축하고 배치하는 방법을 볼 것입니다 Kubernetes 연산자 SDK를 사용하여 연산자.

### 블로그 및 동영상
- [10 most common mistakes using kubernetes](https://blog.pipetail.io/posts/2020-05-04-most-common-mistakes-k8s/) - 일반적인 pitfalls 및 그들을 피하는 방법.  
- [How the Department of Defense Moved to Kubernetes and Istio](https://www.youtube.com/watch?v=YjZ4AZ7hRM0) - Envoy 및 sidecar 컨테이너를 레버리지하여 신뢰의 보안과 베이킹인 멀티레이어 보안을 보장합니다.  
- [Kubernetes at Reddit: Tales from Production](https://youtu.be/WTbIBqNcjoQ) - 성공을 거두며, 생산 폭발의 심발을 공유하고, 어떤 것에 대한 통찰력을 얻고 세계에서 가장 바쁜 웹 속성 중 하나에 대해 잘 작동하지 않습니다.  
- [Kubernetes Failure Stories](https://github.com/hjacobs/kubernetes-failure-stories)  :fire::fire::fire::fire::fire: - 관련 공공 실패 이야기에 대한 링크의 컴파일 목록 Kubernetes·  
- [Life of a Packet](https://www.youtube.com/watch?v=0Omvgd7Hg1I) - 네트워크 트래픽의 경로를 추적 Kubernetes 시스템.  
- [OPA Deep Dive](https://www.youtube.com/watch?v=Uj2N9S58GLU) - OPA 프로젝트의 흥미로운 새로운 기능에 대한 깊은 다이빙은 공동 제작자가 제시했습니다.  
- [Scaling Kubernetes to 2,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-2500-nodes/) + 더보기 [Scaling Kubernetes to 7,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-7500-nodes/) - 높은 스케일을 실행할 때 발생하는 문제 Kubernetes 작업대.
- [Service Mesh Comparison](https://servicemesh.es/) - 서비스 메쉬 구현 중 하나를 선택할 수있는 쉬운 보상.  
- [ArgoCD Best Practices](https://datree.io/resources/argocd-best-practices-you-should-know)

### 학습 및 문서
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - 포괄적인 소개 Kubernetes 회사연혁
- [ConfigMaps in Kubernetes: how they work and what you should remember](https://blog.flant.com/configmaps-in-kubernetes-how-they-work-and-what-you-should-remember/) - ConfigMaps에 대한 진화를 이해, 그들은 어떻게 작동하고 그들이 변화 할 때 무슨 일이 일어나는지. 
- [Configuring Redis using a ConfigMap](https://kubernetes.io/docs/tutorials/configuration/configure-redis-using-configmap/) - ConfigMap을 사용하여 Redis를 구성하는 방법의 실제 세계 예제를 제공하는 walkthrough
- [Example: Deploying Cassandra with a StatefulSet](https://kubernetes.io/docs/tutorials/stateful-application/cassandra/) - 이 튜토리얼은 Apache Cassandra를 실행하는 방법을 보여줍니다. Kubernetes. Cassandra, 데이터베이스, 데이터 내구성을 제공하기 위해 지속적인 스토리지가 필요합니다.
- [Example: Deploying PHP Guestbook application with Redis](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/) - 이 튜토리얼은 간단한 멀티 계층 웹 응용 프로그램을 구축하고 배포하는 방법을 보여줍니다 Kubernetes 그리고 Docker.
- [Example: Deploying WordPress and MySQL with Persistent Volumes](https://kubernetes.io/docs/tutorials/stateful-application/mysql-wordpress-persistent-volume/) - 이 튜토리얼은 Minikube를 사용하여 WordPress 사이트 및 MySQL 데이터베이스를 배포하는 방법을 보여줍니다.
- [Exposing an External IP Address to Access an Application in a Cluster](https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address/) - 이 가이드는 만드는 방법을 보여줍니다 Kubernetes 외부 IP 주소를 노출시키는 서비스 오브젝트.
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) - 일반적으로 사용되는 kubectl 명령 및 플래그의 공식 목록.  
- [Kubectl Kubernetes CheatSheet](https://github.com/dennyzhang/cheatsheet-kubernetes-A4)  :fire::fire::fire::fire: - 많은 유용한 kubectl 명령을 포함하는 속임수 시트
- [Kubernetes API Reference Docs](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/) - 기본 유형의 자원의 높은 수준의 개요 Kubernetes API 및 기본 기능.  
- [Learn Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/) - 이 튜토리얼은 기초의 연습을 제공합니다 Kubernetes 클러스터 관현 시스템.
- [Play with Kubernetes](https://labs.play-with-k8s.com/) - 게임 Kubernetes 사용자가 실행할 수있는 놀이터 K8s 몇 초 안에 클러스터.
- [Ready-to-use commands and tips for kubectl](https://blog.flant.com/ready-to-use-commands-and-tips-for-kubectl/) - 다양한 kubectl - Flant의 엔지니어의 게임 - 자동차 게임 - 한국어  
- [Running ZooKeeper, A Distributed System Coordinator](https://kubernetes.io/docs/tutorials/stateful-application/zookeeper/) - 이 튜토리얼은 Apache Zookeeper를 실행합니다. Kubernetes StatefulSets, PodDisruptionBudgets 및 PodAntiAffinity를 사용하여.
- [Set Up a CI/CD Pipeline with Kubernetes](https://www.linux.com/audience/enterprise/set-cicd-pipeline-kubernetes-part-1-overview/) - CI/CD Pipeline을 설정하기 위한 엔드 투 엔드 가이드 Kubernetes·
- [StatefulSet Basics](https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/) - 이 튜토리얼은 StatefulSets와 응용 프로그램을 관리하기위한 소개를 제공합니다.
- [Webinar: K8s with OPA Gatekeeper](https://www.youtube.com/watch?v=v4wJE3I8BYM) - OPA를 사용하는 방법 최종 사용자가 클러스터에 수행 할 수있는 방법을 제어하고 클러스터는 회사 정책 준수에 있습니다.  

### 인증 안내
- [Certified Kubernetes Security Specialist - CKSS](https://github.com/ijelliti/CKSS-Certified-Kubernetes-Security-Specialist)  :fire::fire: - 이 저장소는 공인을 준비하는 리소스 모음입니다. Kubernetes 보안 전문가 (CKSS) 시험.
- [CKS "Certified Kubernetes security specialist certification](https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist)  :fire::fire::fire::fire: - - - Kubernetes 시험 도중 허용된 물자에서 보안 자원 primarly, 그리고 당신이 당신의 콘테이너 및 kubernetes 안전 여행을 전진하는 추가 선택적인 품목.
- [How to pass the Certified Kubernetes Administrator (CKA) exam on the first attempt](https://medium.com/faun/how-to-pass-certified-kubernetes-administrator-cka-exam-on-first-attempt-36c0ceb4c9e) - CKA 시험을 통과하는 가이드
- [The ultimate CKA "Certfified Kuberenetes Administator" resource since exam inception](https://github.com/walidshaari/Kubernetes-Certified-Administrator)  - CKA 시험뿐만 아니라 kubernetes 관리 지식을 통합하는 몇 가지 추가 리소스를 마스터하는 데 도움이되는 offical 리소스의 업데이트 된 재포.
- [Kubernetes Exam Simulator](https://killer.sh/) - CKS/CKA/CKAD 시험 시나리오 및 환경.  

## 계정 만들기

감사합니다! 자세히보기 [contribution guidelines](contributing.md) 처음.


## 이름 *

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

법률에 따라 가능한 한, Tom Huang은 모든 저작권을 면제하고
이 일에 관련 또는 이웃 권리.
