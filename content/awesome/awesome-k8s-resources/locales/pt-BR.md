# Seleção de recursos do Kubernetes [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

Uma lista curadoria de impressionante Kubernetes ferramentas e recursos.

Inspirado por [awesome](https://github.com/sindresorhus/awesome) lista e [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws).

## O medidor de awesomeness

* Repositórios com 0050+ estrelas: :fire:
* Repositórios com 0200+ estrelas: :fire::fire:
* Repositórios com 0500+ estrelas: :fire::fire::fire:
* Repositórios com 1000+ estrelas: :fire::fire::fire::fire:
* Repositórios com 2000+ estrelas: :fire::fire::fire::fire::fire:

Ideia retirada de [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws). 


## Índice
- [Ferramentas e Bibliotecas](#tools-and-libraries)
  - [Ferramentas de Linha de Comandos](#command-line-tools)
  - [Provisão de clusters](#cluster-provisioning)
  - [Automação e CI/CD](#automation-and-cicd)
  - [Gestão de Recursos de Agregados](#cluster-resources-management)
  - [Gestão de Segredos](#secrets-management)
  - [Rede](#networking)
  - [Armazenamento](#storage)
  - [Testes e solução de problemas](#testing-and-troubleshooting)
  - [Monitoramento, Alertas e Visualização](#monitoring-alerts-and-visualization)
  - [Backup e Restauração](#backup-and-restore)
  - [Segurança e Compliance](#security-and-compliance)
  - [Mesh de Serviço](#service-mesh)
  - [Ferramentas de Desenvolvimento](#development-tools)
  - [Processamento de dados e aprendizagem de máquina](#data-processing-and-machine-learning)
  - [Gestão de Dados](#data-management)
  - [Diversos](#miscellaneous)
- [Guias, Documentação, Blogs e Aprendizagem](#guides-documentations-blogs-and-learnings)
  - [Guias](#guides)
  - [Blogs e Vídeos](#blogs-and-videos)
  - [Aprendizagem e Documentação](#learnings-and-documentations)
  - [Guias de Certificação](#certification-guides)
- [Contribuir](#contribute)
- [Licença](#license)


## Ferramentas e Bibliotecas
Itens com :green_heart: indicar projetos de código aberto. 

### Ferramentas de Linha de Comandos
- :green_heart:[Helm](https://github.com/helm/helm)  :fire::fire::fire::fire::fire: - Leme é uma ferramenta para gerir gráficos. Os gráficos são pacotes de pré-configurados Kubernetes recursos.
- :green_heart:[Helmfile](https://github.com/helmfile/helmfile)  :fire::fire::fire::fire::fire: - Helmfile é uma especificação declarativa para a implantação de mapas de leme.
- :green_heart:[Helmwave](https://github.com/helmwave/helmwave)  :fire::fire::fire: - Helmwave é uma ferramenta nativa do leme 3 para implantar os gráficos do leme. É como o Docker-Compose, mas para o Helm.
- :green_heart:[Infra](https://github.com/infrahq/infra)  :fire::fire::fire: - Infra permite-lhe descobrir e aceder à infra-estrutura (por exemplo: Kubernetes, bases de dados). Ajudamos você a conectar um provedor de identidade, como o diretório ativo Okta ou Azure, e mapear usuários/grupos com as permissões que você define para sua infraestrutura.
- :green_heart:[K9s](https://github.com/derailed/k9s)  :fire::fire::fire::fire::fire: - O K9s fornece uma interface de terminal para interagir com o seu Kubernetes Grupos.
- :green_heart:[kapp](https://github.com/vmware-tanzu/carvel-kapp)  :fire::fire::fire: - kapp é uma ferramenta de implantação simples focada no conceito de "Kubernetes aplicação" — um conjunto de recursos com o mesmo rótulo
- :green_heart:[kconnect](https://github.com/fidelity/kconnect)  :fire::fire: - o kconnect é um utilitário CLI que pode ser usado para descobrir e acessar com segurança Kubernetes clusters em vários ambientes operacionais.
- :green_heart:[kl](https://github.com/robinovitch61/kl)  :fire: - kl é um aplicativo de terminal interativo para interagir com logs em muitos contêineres e clusters.
- :green_heart:[Ktunnel](https://github.com/omrikiei/ktunnel)  :fire::fire: - Ktunnel é uma ferramenta CLI que estabelece um túnel inverso entre um cluster de Kubernetes e sua máquina local.
- :green_heart:[Kubebox](https://github.com/astefanutti/kubebox)  :fire::fire::fire::fire: - Terminal e consola Web para Kubernetes
- :green_heart:[Kubetail](https://github.com/johanhaleby/kubetail)  :fire::fire::fire::fire::fire: - Script Bash que permite agregar (tail/sellow) logs de vários pods em um fluxo.
- :green_heart:[kube-shell](https://github.com/cloudnativelabs/kube-shell)  :fire::fire::fire::fire: - Kube-shell: Uma shell integrada para trabalhar com o Kubernetes CLI.
- □[kubecolor](https://github.com/kubecolor/kubecolor) - coloriza a saída do kubectl
- :green_heart:[kubectl tree](https://github.com/ahmetb/kubectl-tree)  :fire::fire::fire::fire: - Um plugin kubectl para explorar relações de propriedade entre Kubernetes objetos através de proprietários.
- :green_heart:[kubectl-aliases](https://github.com/ahmetb/kubectl-aliases)  :fire::fire::fire::fire::fire: - Este repositório contém um programa para gerar centenas de aliases de shell convenientes para o kubectl.
- :green_heart:[kubectx + kubens](https://github.com/ahmetb/kubectx)  :fire::fire::fire::fire::fire: - Não. `kubectx` ajuda você a alternar entre grupos para trás e para a frente, e `kubens` ajuda você a alternar entre Kubernetes Namespaces sem problemas.
- :green_heart:[kube-ps1](https://github.com/jonmosco/kube-ps1)  :fire::fire::fire::fire::fire: - kube-ps1: Um script que permite adicionar o atual Kubernetes contexto e espaço de nomes configurados no kubectl para as suas cadeias de comandos Bash/Zsh (ou seja, o $PS1).
- :green_heart:[kubediff](https://github.com/weaveworks/kubediff)  :fire::fire::fire: - Kubediff é uma ferramenta para Kubernetes para mostrar as diferenças entre sua configuração em execução e sua versão controlada.
- :green_heart:[kubeprompt](https://github.com/jlesquembre/kubeprompt)  :fire: - Isola o KUBECONFIG em cada shell e mostra a corrente Kubernetes contexto/espaço de nomes no seu prompt
- :green_heart:[Kubevela](https://github.com/oam-dev/kubevela)  :fire::fire::fire::fire::fire: - KubeVela é uma plataforma fácil de usar, mas extensível, que permite projetar e enviar aplicações com o mínimo esforço.
- :green_heart:[Move2Kube](https://github.com/konveyor/move2kube)  :fire::fire: - Uma ferramenta para ajudar os usuários a migrar seus aplicativos de plataformas legadas como a Cloud Foundry para Kubernetes e Openshift. Analisa o código fonte da aplicação e gera Kubernetes YAMLs, Helm Charts, Tekton Pipelines, etc. A análise e geração pode ser fortemente personalizado para produzir a saída exata que você deseja.
- :green_heart:[nova](https://github.com/FairwindsOps/nova/)  :fire::fire: - Nova verifica o seu grupo para instalar gráficos Helm, e depois cruza-os contra todos os repositórios conhecidos Helm.
- :green_heart:[Plural](https://github.com/pluralsh/plural)  :fire::fire: - Plural é uma ferramenta CLI e plataforma de gerenciamento de DevOps holística para rápida implantação, gerenciamento e monitoramento de aplicativos de código aberto em Kubernetes.
- :green_heart:[RBAC Lookup](https://github.com/FairwindsOps/rbac-lookup)  :fire::fire::fire: - RBAC Lookup é um CLI que permite encontrar facilmente Kubernetes funções e funções de agrupamento ligadas a qualquer utilizador, conta de serviço ou nome de grupo.
- :green_heart:[stern](https://github.com/stern/stern)  :fire::fire::fire::fire::fire: - Stern permite que você siga várias cápsulas em Kubernetes e vários contentores dentro da cápsula.

### Provisão de clusters
- :green_heart:[Bootkube](https://github.com/kubernetes-sigs/bootkube)  :fire::fire::fire::fire: - Bootkube é uma ferramenta para lançar self-hosted Kubernetes Grupos.
- :green_heart:[Claudie](https://github.com/berops/claudie)  :fire: - Multi-cloud clusters com cada nodopool em um provedor de nuvem diferente.
- :green_heart:[Cluster API](https://github.com/kubernetes-sigs/cluster-api)  :fire::fire::fire::fire::fire: - API de cluster é um Kubernetes sub-projeto focado em fornecer APIs declarativas e ferramentas para simplificar provisionamento, atualização e operação múltipla Kubernetes Grupos.
- :green_heart:[eksctl](https://github.com/weaveworks/eksctl)  :fire::fire::fire::fire::fire: - Não. `eksctl` é uma ferramenta CLI simples para criar clusters no EKS - novo gerenciado da Amazon Kubernetes serviço para EC2.
- :green_heart:[k0s](https://github.com/k0sproject/k0s)  :fire::fire::fire::fire::fire: - K0s - Fricção zero Kubernetes (O simples, sólido e certificado Kubernetes Distribuição)
- :green_heart:[k3d](https://github.com/rancher/k3d)  :fire::fire::fire::fire::fire: - k3d, e Windows., destruir, metade da memória, altamente disponível, é uma ferramenta para executar clusters locais de k3s em docker. É um único binário cerca de 20 MB. Você precisa ter docker instalado.
- :green_heart:[k3s](https://github.com/rancher/k3s)  :fire::fire::fire::fire::fire: - Leve Kubernetes. Fácil de instalar,Kubernetes Grupos da linha de comando.
- :green_heart:[kind](https://github.com/kubernetes-sigs/kind)  :fire::fire::fire::fire::fire: - tipo é uma ferramenta para executar local Kubernetes clusters usando o recipiente Docker "nós".
- :green_heart:[kops](https://github.com/kubernetes/kops)  :fire::fire::fire::fire::fire: - Não. `kops` ajuda você a criar, como gentil, atualizar e manter o grau de produção
- :green_heart:[kube-aws](https://github.com/kubernetes-incubator/kube-aws)  :fire::fire::fire::fire: - Não. `kube-aws` é uma ferramenta de linha de comando para criar/atualizar/destruir Kubernetes Grupos na AWS.
- :green_heart:[kubespray](https://github.com/kubernetes-sigs/kubespray)  :fire::fire::fire::fire::fire: - Implantar uma produção pronta Kubernetes cluster
- :green_heart:[microK8s](https://github.com/ubuntu/microk8s)  :fire::fire::fire::fire::fire: - O mais pequeno, mais rápido Kubernetes
- :green_heart:[Minikube](https://github.com/kubernetes/minikube)  :fire::fire::fire::fire::fire: - minikube implementa um local Kubernetes cluster no macOS,Linux, tudo em um binário inferior a 100 MB.
- :green_heart:[Talos Linux](https://github.com/siderolabs/talos)  :fire::fire::fire::fire::fire: - Talos Linux é um sistema operacional mínimo, imutável e seguro que instala baunilha Kubernetes - para centros de dados de produção, K8s@home, e Edge.
- :green_heart:[karpenter]([https://karpenter.sh](https://github.com/aws/karpenter-provider-aws))  :fire::fire::fire::fire::fire: - Karpenter é um Kubernetes Node Autoscaler construído para flexibilidade, desempenho e simplicidade.
- :green_heart:[Kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/) - kubeadm realiza as ações necessárias para obter um cluster viável mínimo em funcionamento.
- :green_heart:[vCluster](https://github.com/loft-sh/vcluster/) : :fire::fire::fire::fire::fire: - vCluster permite que você crie virtual totalmente funcional Kubernetes clusters, reduzindo drasticamente os custos e melhorando a multilotação e o isolamento em comparação com tradicionais Kubernetes. 
  
### Automação e CI/CD
- :green_heart:[Argo CD](https://github.com/argoproj/argo-cd)  :fire::fire::fire::fire::fire: - Argo CD é uma ferramenta declarativa, GitOps de entrega contínua para Kubernetes.
- :green_heart:[Argo Events](https://github.com/argoproj/argo-events)  :fire::fire::fire::fire: - Argo Events é uma estrutura de automação de fluxo de trabalho orientada para eventos para Kubernetes que ajuda a activar K8s objetos, fluxos de trabalho Argo, cargas de trabalho sem servidor, etc.
- :green_heart:[Argo Rollouts](https://github.com/argoproj/argo-rollouts)  :fire::fire::fire::fire: - Controlador Argo Rollouts, usa o recurso personalizado Rollout para fornecer estratégias de implantação adicionais, como Blue Green e Canary para Kubernetes.
- :green_heart:[Argo Workflows](https://github.com/argoproj/argo)  :fire::fire::fire::fire::fire: - Argo Workflows é um motor de fluxo de trabalho nativo de contêiner de código aberto para orquestrar trabalhos paralelos em Kubernetes.
- :green_heart:[Argocd autopilot](https://github.com/argoproj-labs/argocd-autopilot)  :fire::fire::fire: - O Argo-CD Autopilot é uma ferramenta que oferece uma forma opinativa de instalar Argo-CD e gerenciar repositórios GitOps.
- :green_heart:[Flagger](https://github.com/weaveworks/flagger)  :fire::fire::fire::fire::fire: - Flagger é uma ferramenta de entrega progressiva que automatiza o processo de lançamento para aplicações em execução Kubernetes.
- :green_heart:[Flux2](https://github.com/fluxcd/flux2)  :fire::fire::fire::fire::fire: - Flux versão 2 é construído a partir do solo para usar Kubernetes' Sistema de extensão API, e para integrar com Prometeu e outros componentes principais do Kubernetes ecossistema.
- :green_heart:[k8s-image-swapper](https://github.com/estahn/k8s-image-swapper/)  :fire::fire: - Não. `k8s-image-swapper` é um webhook mutante para Kubernetes, baixando imagens em seu próprio registro e apontando as imagens para esse novo local.
- :green_heart:[Kubero](https://github.com/kubero-dev/kubero)  :fire::fire::fire::fire::fire: - Uma alternativa livre e auto-anfitriã Heroku PaaS para Kubernetes que implementa o GitOps
- :green_heart:[KubeSphere](https://github.com/kubesphere/kubesphere)  :fire::fire::fire::fire::fire: - KubeSphere é um sistema operacional distribuído fornecendo nuvem pilha nativa com Kubernetes como seu kernel, e visa ser a arquitetura plug-and-play para aplicações de terceiros integração perfeita para impulsionar seu ecossistema.
- :green_heart:[Reloader](https://github.com/stakater/Reloader)  :fire::fire::fire::fire::fire: - Reloader pode assistir alterações em `ConfigMap` e `Secret` e fazer atualizações de rolamento em Pods com seus associados `DeploymentConfigs`, `Deployments`, `Daemonsets` e `Statefulsets`.
- :green_heart:[terranetes-controller](https://github.com/appvia/terranetes-controller)  :fire: - O controlador Terranetes permite que a equipe de plataforma ofereça recursos de autoatendimento em torno de recursos na nuvem.
- :green_heart:[Skaffold](https://github.com/GoogleContainerTools/skaffold)  :fire::fire::fire::fire::fire: - Skaffold é uma ferramenta de linha de comando que facilita o desenvolvimento contínuo para Kubernetes Pedidos.
- :green_heart:[Spinnaker](https://github.com/spinnaker/spinnaker)  :fire::fire::fire::fire::fire: - Spinnaker é uma plataforma de entrega contínua de código aberto para liberar mudanças de software com alta velocidade e confiança.
- :green_heart:[TF-controller](https://github.com/weaveworks/tf-controller)  :fire: - TF-controller é um controlador experimental para Flux para conciliar recursos Terraform na maneira GitOps.
- :green_heart:[werf](https://github.com/werf/werf)  :fire::fire::fire::fire::fire: - werf é uma ferramenta CLI colando Git, Docker, Helm & Kubernetes com qualquer sistema CI para implementar CI/CD e GitOps. 
- :green_heart:[Weave GitOps](https://github.com/weaveworks/weave-gitops)  :fire::fire: - Weave GitOps é uma simples plataforma de desenvolvimento de código aberto para pessoas que querem aplicações nativas de nuvem, sem necessidade Kubernetes Experiência.
- :green_heart:[Otomi - Self-hosted PaaS for K8s](https://github.com/redkubes/otomi-core)  :fire::fire::fire::fire: - Otomi adiciona ferramentas de desenvolvimento e operações centradas, automação e autoatendimento do desenvolvedor em cima de Kubernetes em qualquer infraestrutura ou nuvem, para codificar, construir, liberar, implantar, proteger, operar e monitorar aplicativos containerizados.
:green_heart:[Cozystack - Self-hosted PaaS for K8s](https://github.com/cozystack/cozystack)  :fire::fire::fire::fire: - um PaaS na mão, auto-hospedado, construído para funcionar em clusters Talos Linux endurecidos, trazendo segurança em primeiro lugar Kubernetes automatização para o seu próprio metal. Perfeito se você estiver construindo nuvens soberanas ou pilhas nativas.

### Gestão de Recursos de Agregados
- :green_heart:[Clusterpedia](https://github.com/clusterpedia-io/clusterpedia)  :fire: - Clusterpedia é usado para pesquisas de recursos complexos em múltiplos clusters, suportando a busca simultânea de um único tipo de recurso ou vários tipos de recursos existentes em múltiplos clusters.
- :green_heart:[Grafana Tanka](https://github.com/grafana/tanka)  :fire::fire::fire::fire: - A alternativa limpa, concisa e super flexível para YAML para o seu Kubernetes cluster.
- :green_heart:[KEDA](https://github.com/kedacore/keda)  :fire::fire::fire::fire::fire: - A KEDA permite a autoescalagem de grãos finos (incluindo para/a partir de zero) Kubernetes cargas de trabalho.
- :green_heart:[Kruise](https://github.com/openkruise/kruise)  :fire::fire::fire::fire::fire: - Kruise consiste em vários controladores que estendem e complementam o Kubernetes Controladores centrais para gestão de carga de trabalho.
- :green_heart:[KubeDirector](https://github.com/bluek8s/kubedirector)  :fire::fire: - KubeDirector usa padrão Kubernetes (K8s) facilidades de recursos personalizados e extensões API para implementar stateful scaleout clusters de aplicativos.
- :green_heart:[Kubenav](https://github.com/kubenav/kubenav)  :fire::fire::fire::fire: - Kubenav é o navegador para o seu Kubernetes Aglomerações mesmo no seu bolso.
- :green_heart:[Liqo](https://github.com/liqotech/liqo)  :fire::fire: - Liqo implementa o compartilhamento dinâmico de recursos em diferentes Kubernetes Grupos (por exemplo, módulos e serviços de descarregamento), apoiando a governação descentralizada.
- :green_heart:  [Meshery](https://github.com/meshery/meshery)  :fire::fire::fire::fire::fire: - Meshery é um gerenciador nativo de nuvem de código aberto que permite o design e gerenciamento de todos Kubernetes-infra-estruturas e aplicações baseadas.
- :green_heart:[Pluto](https://github.com/FairwindsOps/pluto)  :fire::fire::fire::fire: - Plutão é um utilitário para ajudar os usuários a encontrar Kubernetes ApiVersões em seus repositórios de códigos e seus lançamentos de leme.
- :green_heart:[Polaris](https://github.com/FairwindsOps/polaris)  :fire::fire::fire::fire::fire: - Polaris é um mecanismo de política de código aberto para Kubernetes que valida e remedia a configuração de recursos.
- :green_heart:[Projectsveltos](https://github.com/projectsveltos/addon-manager)  :fire: Projectsveltos é um Kubernetes controlador add-on que simplifica a implantação e gerenciamento de add-ons e aplicativos em vários clusters.
- :green_heart:[The Hierarchical Namespace Controller](https://github.com/kubernetes-sigs/multi-tenancy/tree/master/incubator/hnc)  :fire::fire::fire: - Namespaces hierárquicos tornam mais fácil compartilhar seu cluster, tornando os namespaces mais poderosos.

### Gestão de Segredos
- :green_heart:[Kubernetes External Secrets](https://github.com/godaddy/kubernetes-external-secrets)  :fire::fire::fire::fire::fire: - Não. Kubernetes Segredos Externos permite que você use sistemas externos de gerenciamento secreto, como AWS Secrets Manager ou HashiCorp Vault, para adicionar segredos de forma segura Kubernetes.
- :green_heart:[Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets)  :fire::fire::fire::fire::fire: - Criptografar seu Segredo em um SealedSecret, que é seguro para armazenar - mesmo para um repositório público.
- :green_heart:[akv2k8s](https://github.com/SparebankenVest/azure-key-vault-to-kubernetes)  :fire::fire: - Vault chave Azure para Kubernetes (akv2k8s) tornará os objetos Azure Key Vault disponíveis para Kubernetes de duas maneiras: como nativo Kubernetes Segredos; como variáveis de ambiente injetadas diretamente em sua aplicação Container

### Rede
- :green_heart:[Calico Networking](https://github.com/projectcalico/calico)  :fire::fire::fire::fire::fire: - Calico é uma solução de rede de código aberto e segurança de rede para contêineres, máquinas virtuais e cargas de trabalho de metais nus
- :green_heart:[cert-manager](https://github.com/jetstack/cert-manager)  :fire::fire::fire::fire::fire: - cert-manager é um Kubernetes Suplemento para automatizar a gestão e emissão de certificados TLS de várias fontes emissoras.
- :green_heart:[cilium](https://github.com/cilium/cilium)  :fire::fire::fire::fire::fire: - Cílio é uma solução de rede, observação e segurança com um plano de dados baseado em eBPF.
- :green_heart:[CoreDNS](https://github.com/coredns/coredns)  :fire::fire::fire::fire::fire: - CoreDNS é um servidor DNS rápido e flexível que funciona em Kubernetes.
- :green_heart:[ingress-nginx](https://github.com/kubernetes/ingress-nginx)  :fire::fire::fire::fire::fire: - Não. `ingress-nginx` é um controlador de entrada para Kubernetes usando NGINX como um proxy reverso e balanceador de carga.
- :green_heart:[Kong for Kubernetes](https://github.com/Kong/kubernetes-ingress-controller)  :fire::fire::fire::fire: - Configurar plugins, verificação de saúde, balanceamento de carga e muito mais em Kong para Kubernetes Serviços.
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - Um plugin kubectl que utiliza tcpdump e Wireshark para iniciar uma captura remota em qualquer pod em seu Kubernetes cluster.
- :green_heart:[kubectl trace](https://github.com/iovisor/kubectl-trace)  :fire::fire::fire::fire: - Não. `kubectl trace` é um plugin kubectl que lhe permite agendar a execução de programas bpftrace no seu Kubernetes cluster.
- :green_heart:[Kube Karp](https://github.com/immanuelfodor/kube-karp)  :fire: - Adicionar um IP virtual flutuante para Kubernetes nós de agrupamento para balanceamento de carga facilmente com base no protocolo CARP
- :green_heart:[kubernetes-ingress](https://github.com/nginxinc/kubernetes-ingress)  :fire::fire::fire::fire::fire:  - Uma implementação de um controlador de entrada para NGINX e NGINX Plus (comercial).
- :green_heart:[kube-ovn](https://github.com/alauda/kube-ovn)  :fire::fire::fire::fire:  - A Kubernetes Tecido de rede para empresas que é rico em funções e fácil em operações.
- :green_heart:[loxilb](https://github.com/loxilb-io/loxilb)  :fire::fire::fire:  - A Kubernetes balanceador de carga de serviço baseado no eBPF.
  
### Armazenamento
- :green_heart:[Longhorn](https://github.com/longhorn/longhorn)  :fire::fire::fire::fire::fire: - Longhorn é um sistema de armazenamento de blocos distribuído para Kubernetes.
- :green_heart:[OpenEBS](https://github.com/openebs/openebs)  :fire::fire::fire::fire::fire: - OpenEBS é a solução de armazenamento de código aberto mais amplamente implantada e fácil de usar Kubernetes.
- :green_heart:[Rook](https://github.com/rook/rook)  :fire::fire::fire::fire::fire: - Rook é um orquestrador de armazenamento nativo de nuvem de código aberto para Kubernetes.

### Testes e solução de problemas
- :green_heart:[Chainsaw](https://github.com/kyverno/chainsaw)  :fire: - A ferramenta de teste final para Kubernetes operadores.
- :green_heart:[Chaos Mesh](https://github.com/pingcap/chaos-mesh)  :fire::fire::fire::fire::fire: - Chaos Mesh® é uma plataforma de engenharia Chaos nativa em nuvem que orquestra o caos Kubernetes ambientes.
- :green_heart:[chaoskube](https://github.com/linki/chaoskube)  :fire::fire::fire::fire: - Não. `chaoskube` periodicamente mata vagens aleatórias no seu Kubernetes cluster.
- :green_heart:[Conftest](https://github.com/open-policy-agent/conftest)  :fire::fire::fire::fire: - Conftest ajuda você a escrever testes contra dados de configuração estruturados.
- :green_heart:[DETIK](https://github.com/bats-core/bats-detik)  :fire: - Uma biblioteca que simplifica o teste K8s aplicações utilizando [BATS](https://github.com/bats-core/bats-core) asserções e consultas de linguagem natural.
- :green_heart:[k6](https://github.com/loadimpact/k6)  :fire::fire::fire::fire::fire: - k6 é uma ferramenta de teste de carga moderna, com base nos anos de experiência da Load Impact na indústria de testes de carga e desempenho.
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - Um plugin kubectl que utiliza tcpdump e Wireshark para iniciar uma captura remota em qualquer pod em seu Kubernetes cluster.
- :green_heart:[Kube DOOM](https://github.com/storax/kubedoom)  :fire::fire::fire::fire: - O próximo nível de engenharia do caos é aqui! Matar cápsulas dentro do seu Kubernetes Agrupar atirando neles em Doom!
- :green_heart:[kube-monkey](https://github.com/asobti/kube-monkey)  :fire::fire::fire::fire::fire: - Ele apaga aleatoriamente Kubernetes (k8s) pods no cluster encorajando e validando o desenvolvimento de serviços resilientes a falhas.
- :green_heart:[kube-score](https://github.com/zegl/kube-score)  :fire::fire::fire::fire: - Não. `kube-score` é uma ferramenta que realiza análise estática de código de sua Kubernetes definições de objetos.
- :green_heart:[Kubectl-debug](https://github.com/JamesTGrant/kubectl-debug)  :fire::fire::fire::fire::fire: - Não. `kubectl-debug` é uma solução fora da árvore para solucionar problemas executando pods, o que permite que você execute um novo contêiner em pods em execução para fins de depuração.
- :green_heart:[KubeInvaders](https://github.com/lucky-sideburn/KubeInvaders)  :fire::fire::fire: - Através de KubeInvaders você pode enfatizar Kubernetes Agrupar de forma divertida e verificar como é resistente.
- :green_heart:[Kubetest](https://github.com/vapor-ware/kubetest)  :fire: - Kubetest é um plugin pytest que facilita o gerenciamento de Kubernetes cluster dentro de seus testes de integração.
- :green_heart:[Litmus](https://github.com/litmuschaos/litmus)  :fire::fire::fire::fire::fire: - Litmus fornece ferramentas para orquestrar o caos em Kubernetes ajudar os SREs a encontrar fraquezas nos seus destacamentos.
- :green_heart:[popeye](https://popeyecli.io/)  :fire::fire::fire::fire::fire: - Popeye é um utilitário que verifica ao vivo Kubernetes agrupar e relatar problemas potenciais com recursos e configurações implantadas.
- :green_heart:[PowerfulSeal](https://github.com/bloomberg/powerfulseal)  :fire::fire::fire::fire: - PowerfulSeal injecta uma falha na Kubernetes clusters, para que você possa detectar problemas o mais cedo possível.
- :green_heart:[Testkube](https://github.com/kubeshop/testkube)  :fire::fire::fire: - Testkube é um Kubernetes Framework de teste nativo para orquestração de teste e execução. Permite-lhe executar qualquer um dos seus testes dentro de um Kubernetes cluster. Integra-se ao seu CI/CD e permite que você siga uma abordagem GitOps para Testing enquanto tem um lugar centralizado para todos os seus resultados de teste entre todos os clusters.

### Monitoramento, Alertas e Visualização
- :green_heart:[BotKube](https://github.com/infracloudio/botkube)  :fire::fire::fire::fire: - A integração BotKube com Slack ou Mattermost ajuda você a monitorar seu Kubernetes cluster, depura implantações críticas e dá recomendações para práticas padrão executando verificações Kubernetes recursos.
- :green_heart:[Canary Checker](https://github.com/flanksource/canary-checker)  :fire: - Canary Checker é uma plataforma de verificação de saúde Kubernetes-native com mais de 30 tipos de verificação de saúde integrados.
- :green_heart:[Cortex](https://github.com/cortexproject/cortex)  :fire::fire::fire::fire::fire: - Cortex fornece armazenamento horizontalmente escalável, altamente disponível, multi-doente, de longo prazo para Prometeu.
- :green_heart:[Goldilocks](https://github.com/FairwindsOps/goldilocks)  :fire::fire::fire: - Goldilocks é um utilitário que pode ajudá-lo a identificar um ponto de partida para solicitações de recursos e limites.
- :green_heart:[Goldpinger](https://github.com/bloomberg/goldpinger)  :fire::fire::fire::fire::fire: - Ferramenta de depuração para Kubernetes que testa e exibe conectividade entre nós no cluster.
- :green_heart:[Grafana](https://github.com/grafana/grafana)  :fire::fire::fire::fire::fire: - Grafana permite que você consulte, visualize, alerte e entenda suas métricas, não importa onde sejam armazenadas.
- :green_heart:[Helm Dashboard](https://github.com/komodorio/helm-dashboard)  :fire::fire::fire::fire: - A UI desaparecida para o Helm. O plugin Helm Dashboard oferece uma maneira orientada para UI de visualizar gráficos Helm instalados, ver seu histórico de revisão e recursos k8s correspondentes. 
- :green_heart:[Kiali](https://github.com/kiali/kiali)  :fire::fire::fire::fire::fire: - O Kiali trabalha com o Istio para visualizar a topologia da malha de serviço.
- :green_heart:[k8s-image-availability-exporter](https://github.com/flant/k8s-image-availability-exporter)  :fire: - Prometheus exportador que avisa proativamente sobre imagens que são definidas em Kubernetes objetos mas não estão disponíveis no registro do recipiente. 
- :green_heart:[kube-capacity](https://github.com/robscott/kube-capacity)  :fire::fire::fire: - Este é um simples CLI que fornece uma visão geral das solicitações de recursos, limites e utilização em um Kubernetes cluster.
- :green_heart:[Kubernetes Dashboard](https://github.com/kubernetes/dashboard)  :fire::fire::fire::fire::fire: - Não. Kubernetes Dashboard é um propósito geral, UI baseado na web para Kubernetes Grupos.
- :green_heart:[Kubedev](https://github.com/relferreira/kubedev)  :fire: - Kubedev é uma interface de usuário poderosa e bonita para gerenciar Kubernetes Grupos.
- :green_heart:[KubeHelper](https://github.com/KubeHelper/kubehelper)  :fire: - KubeHelper - simplifica muitos diariamente Kubernetes tarefas de cluster através de uma interface web.
- :green_heart:[Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server)  :fire::fire::fire::fire::fire: - Metrics Server é uma fonte escalável e eficiente de métricas de recursos de container para Kubernetes Oleodutos de auto-escalamento incorporados.
- :green_heart:[Kubernetes Operational View](https://github.com/hjacobs/kube-ops-view)  :fire::fire::fire::fire: - Uma ferramenta que visa fornecer uma imagem operacional comum para múltiplos Kubernetes Grupos.
- :green_heart:[kube-state-metrics](https://github.com/kubernetes/kube-state-metrics)  :fire::fire::fire::fire::fire: - kube-state-metrics é um serviço simples que ouve Kubernetes Servidor API e gera métricas sobre o estado dos objetos.
- :green_heart:[kubewatch](https://github.com/robusta-dev/kubewatch)  :fire::fire::fire::fire::fire: - Não. `kubewatch` é um Kubernetes Observador que atualmente publica notificação para hubs de colaboração disponíveis / canais de notificação.
- :green_heart:[Lens](https://github.com/lensapp/lens)  :fire::fire::fire::fire::fire: - Lente é uma útil, atraente, interface de usuário de código aberto (UI) para trabalhar com Kubernetes Grupos.
- :green_heart:[Mizu](https://github.com/up9inc/mizu)  :fire::fire::fire: - Visualizador de tráfego API para Kubernetes permitindo que você visualize toda a comunicação API entre microservices. Pensar que TCPDump e Wireshark reinventaram para Kubernetes
- :green_heart:[Network mapper](https://github.com/otterize/network-mapper)  :fire::fire: - Mapa Kubernetes tráfego in-cluster e exportação como texto, intenções ou uma imagem.
- :green_heart:[Popeye](https://github.com/derailed/popeye)  :fire::fire::fire::fire::fire: - Popeye é um utilitário que verifica ao vivo Kubernetes agrupar e relatar problemas potenciais com recursos e configurações implantadas.
- :green_heart:[Prometheus](https://github.com/prometheus/prometheus)  :fire::fire::fire::fire::fire: - Prometheus, um projeto da Cloud Native Computing Foundation, é um sistema de monitoramento de sistemas e serviços.
- :green_heart:[Searchlight](https://github.com/searchlight/searchlight)  :fire::fire: - Searchlight/Icinga realiza periodicamente várias verificações sobre um Kubernetes cluster e envia notificações se detectar um problema.
- :green_heart:[Sloop](https://github.com/salesforce/sloop)  :fire::fire::fire: - Monitores de deslizamento Kubernetes, registrando histórias de eventos e mudanças de estado de recursos e fornecendo visualizações para auxiliar na depuração de eventos passados.
- :green_heart:[Thanos](https://github.com/thanos-io/thanos)  :fire::fire::fire::fire::fire: - Thanos é um conjunto de componentes que pode ser composto em um sistema métrico altamente disponível com capacidade de armazenamento ilimitada.
- :green_heart:[K8Studio](https://github.com/guiqui/k8Studio)  :fire::fire::fire: - IDE do K8Studio para gerenciar e visualizar Kubernetes Aglomerados.
- :green_heart:[KubeDiagrams](https://github.com/philippemerle/KubeDiagrams)  :fire: - Gerar Kubernetes diagramas de arquitetura de Kubernetes arquivos manifestos, arquivos de kustomização, gráficos Helm e estado de cluster real.

### Backup e Restauração
- :green_heart:[katafygio](https://github.com/bpineau/katafygio)  :fire: - Katafygio descobre Kubernetes objetos (implantações, serviços, ...), e salvá-los continuamente como arquivos yaml em um repositório git.
- :green_heart:[Velero](https://github.com/vmware-tanzu/velero)  :fire::fire::fire::fire::fire: - Velero (antiga Heptio Ark) dá-lhe ferramentas para fazer backup e restaurar o seu Kubernetes recursos de agrupamento e volumes persistentes.

### Segurança e Compliance
- :green_heart:[Datree](https://github.com/datreeio/datree)  :fire::fire::fire::fire::fire: - Datree é uma ferramenta CLI que suporta Kubernetes administradores em seus papéis, impedindo desenvolvedores de cometer erros em Kubernetes configurações que podem causar falha na produção de clusters.
- :green_heart:[Deepfence ThreatMapper](https://github.com/deepfence/ThreatMapper)  :fire::fire::fire: - Apache v2, poderoso scanner de vulnerabilidade em tempo de execução para kubernetes, máquinas virtuais e servidor sem.
- :green_heart:[Falco](https://github.com/falcosecurity/falco)  :fire::fire::fire::fire::fire: - Falco é um monitor de atividade comportamental projetado para detectar atividade anômala em suas aplicações. Você pode usar Falco para monitorar a segurança em tempo de execução de seu Kubernetes aplicações e componentes internos.
- :green_heart:[Gatekeeper](https://github.com/open-policy-agent/gatekeeper)  :fire::fire::fire::fire::fire: - Controlador de políticas para Kubernetes
- :green_heart:[Intents operator](https://github.com/otterize/intents-operator)  :fire::fire: - Gerenciar políticas de rede, Políticas de Autorização de Istio e ACLs Kafka em um Kubernetes Agrupar com facilidade.
- :green_heart:[k-rail](https://github.com/cruise-automation/k-rail)  :fire::fire: - k-rail é uma ferramenta de aplicação da política de carga de trabalho para Kubernetes. Ele pode ajudá-lo a proteger um cluster multi inquilino com ruptura mínima e velocidade máxima.
- :green_heart:[Konstraint](https://github.com/plexsystems/konstraint)  :fire::fire: - Konstraint é uma ferramenta CLI para ajudar na criação e gestão de restrições ao usar Gatekeeper.
- :green_heart:[kube-bench](https://github.com/aquasecurity/kube-bench)  :fire::fire::fire::fire::fire: - kube-bench é um aplicativo Go que verifica se Kubernetes é aplicado de forma segura através da execução das verificações documentadas no CIS Kubernetes Benchmark.
- :green_heart:[kube-hunter](https://github.com/aquasecurity/kube-hunter)  :fire::fire::fire::fire::fire: - kube-hunter caça por falhas de segurança em Kubernetes Grupos.
- :green_heart:[KubeLinter](https://github.com/stackrox/kube-linter)  :fire::fire::fire::fire: - KubeLinter é uma ferramenta de análise estática que verifica Kubernetes Arquivos YAML e gráficos Helm para garantir que as aplicações representadas neles aderir às melhores práticas.
- :green_heart:[Kubesploit](https://github.com/cyberark/kubesploit)  :fire::fire::fire: - Kubesploit é um servidor de pós-exploração multiplataforma HTTP/2 Command & Control e agente dedicado para ambientes contêinerizados escritos em Golang e construídos em cima do projeto Merlin por Russel Van Tuyl (@Ne0nd0g).
- :green_heart:[KubiScan](https://github.com/cyberark/KubiScan)  :fire::fire::fire: - Uma ferramenta de digitalização Kubernetes cluster para permissões de risco KubernetesO modelo de autorização de controlo de acesso baseado no papel (RBAC).
- :green_heart:[Kyverno](https://github.com/kyverno/kyverno)  :fire::fire::fire::fire: - Kyverno é um motor de política projetado para Kubernetes. Pode validar, mutar e gerar configurações usando controles de admissão e varreduras de fundo.
- :green_heart:[Netchecks](https://github.com/hardbyte/netchecks/)  :fire: - Conjunto de ferramentas para testar as condições da rede e afirmar que elas são como esperado.
- :green_heart:[Permission manager](https://github.com/sighupio/permission-manager)  :fire::fire::fire: - Permission Manager é uma aplicação desenvolvida pela SIGHUP que permite um gerenciamento RBAC super fácil e fácil de usar para Kubernetes.
- :green_heart:[rakkess](https://github.com/corneliusweig/rakkess)  :fire::fire::fire: - 'plugin' do kubectl para mostrar uma matriz de acesso para os recursos do servidor
- :green_heart:[Rönd](https://github.com/rond-authz/rond)  :fire: - Rönd é um leve de código aberto Kubernetes recipiente sidecar que ajuda você a proteger suas APIs com políticas de segurança simples. Também permite que você construa sua solução RBAC/ABAC.
- :green_heart:[Teleport](https://github.com/gravitational/teleport)  :fire::fire::fire::fire::fire: - O Teleport Unified Access Plane permite aos engenheiros acessar rapidamente qualquer recurso de computação em qualquer lugar.


### Mesh de Serviço
- :green_heart:[Istio](https://github.com/istio/istio)  :fire::fire::fire::fire::fire: - Uma plataforma aberta para conectar, gerenciar e proteger microserviços.
- :green_heart:[Linkerd](https://github.com/linkerd/linkerd)  :fire::fire::fire::fire::fire: - Linkerd é uma malha de serviço transparente, projetada para tornar as aplicações modernas seguras e sãs.
- :green_heart:[Open Service Mesh](https://github.com/openservicemesh/osm/)  :fire::fire::fire::fire::fire: - Open Service Mesh (OSM) é um leve, extensível, Cloud Native service mesh que permite aos usuários gerenciar, proteger e sair da caixa de recursos de observação para ambientes de microserviço altamente dinâmicos.


### Ferramentas de Desenvolvimento
- :green_heart:[Cyclops](https://github.com/cyclops-ui/cyclops)  :fire::fire: - UI personalizável para Kubernetes implementações
- :green_heart:[Eclipse JKube](https://github.com/eclipse/jkube)  :fire::fire: - Ferramentas e plugins para desenvolvedores Java que ajudam você a criar imagens de container junto com os manifestos necessários para implantar seus aplicativos para Kubernetes.
- :green_heart:[garden](https://github.com/garden-io/garden)  :fire::fire::fire::fire::fire: - Jardim oferece produção-like Kubernetes testando ambientes para testes de integração, QA e desenvolvimento.
- :green_heart:[gefyra](https://github.com/gefyrahq/gefyra)  :fire::fire::fire: -Gefyra rápido, sólido, desenvolvimento de aplicações locais Kubernetes.
- :green_heart:[ko](https://github.com/google/ko)  :fire::fire::fire::fire::fire: - Não. `ko` é uma ferramenta para construir e implantar aplicações Golang para Kubernetes.
- :green_heart:[Konfig](https://github.com/cloud66-oss/konfig)  :fire: - Konfig é um Kubernetes Amigável gema Rails. Ele pode carregar configuração e segredos de ambos YAML ou pastas com arquivos individuais e apresentá-los à sua aplicação da mesma forma.
- :green_heart:[kubevious](https://github.com/kubevious/Kubevious)  :fire::fire::fire::fire: - Kubevious torna todas as configurações relevantes para a aplicação em um só lugar. Isso economiza muito tempo dos operadores, eliminando a necessidade de procurar configurações e cavar dentro de seletores e rótulos.
- :green_heart:[kubectl-warp](https://github.com/ernoaapa/kubectl-warp)  :fire::fire: - Não. Kubernetes Plug- in CLI para sincronizar e executar arquivos locais em Pod Kubernetes
- :green_heart:[kubernix](https://github.com/saschagrunert/kubernix)  :fire::fire::fire: - Este projecto visa proporcionar uma dependência única Kubernetes Grupos de ensaios, experiências e desenvolvimento locais.
- :green_heart:[Makisu](https://github.com/uber/makisu)  :fire::fire::fire::fire::fire: - Makisu é uma ferramenta rápida e flexível de construção de imagens Docker projetada para ambientes contêineres sem privilégios, como Mesos ou Kubernetes.
- :green_heart:[mirrord](https://github.com/metalbear-co/mirrord)  :fire::fire::fire::fire::fire: - espelhado conecta seu processo local e seu ambiente de nuvem, e executa código local em condições de nuvem.
- :green_heart:[Monokle](https://github.com/kubeshop/monokle)  :fire::fire::fire: - Monokle ajuda você a criar, editar e validar manifestos yaml, visualizar e validar links de recursos e dependências, conectar e comparar recursos com seus clusters, depurar a saída do kustomize ou leme, e muito mais!
- :green_heart:[Okteto](https://github.com/okteto/okteto)  :fire::fire::fire::fire: - Não. `okteto` acelera o fluxo de trabalho de desenvolvimento de Kubernetes Pedidos.
- :green_heart:[Telepresence](https://github.com/telepresenceio/telepresence)  :fire::fire::fire::fire::fire: - Telepresença fornece desenvolvimento local rápido e realista para Kubernetes microserviços.
- :green_heart:[Tilt](https://github.com/tilt-dev/tilt)  :fire::fire::fire::fire::fire: - A inclinação alimenta o desenvolvimento de vários serviços e certifica-se que se comportam.
- :green_heart:[Tye](https://github.com/dotnet/tye)  :fire::fire::fire::fire::fire: - Tye é uma ferramenta de desenvolvimento que facilita o desenvolvimento, teste e implantação de microserviços e aplicativos distribuídos.
- [Aptakube](https://aptakube.com) - Um cliente moderno, leve e multi-cluster desktop para Kubernetes. Conecte-se a vários clusters simultaneamente para visualizar, editar e gerenciar todos os seus recursos.

### Processamento de dados e aprendizagem de máquina
- :green_heart:[Kubeflow](https://github.com/kubeflow/kubeflow)  :fire::fire::fire::fire::fire: - Kubeflow é uma plataforma nativa da nuvem para aprendizado de máquina baseada em oleodutos de aprendizado de máquina internos do Google.
- :green_heart:[nos](https://github.com/nebuly-ai/nos)  :fire::fire: - Não. `nos` é uma plataforma de código aberto para executar eficientemente cargas de trabalho de IA em Kubernetes, aumentando a utilização da GPU e reduzindo os custos de infraestrutura e operacional.
- :green_heart:[Strimzi](https://github.com/strimzi/strimzi-kafka-operator)  :fire::fire::fire::fire::fire: - Strimzi fornece uma maneira de executar um cluster Apache Kafka em Kubernetes ou OpenShift em várias configurações de implantação.
- :green_heart:[Volcano](https://github.com/volcano-sh/volcano)  :fire::fire::fire::fire: - Vulcão é um sistema de lote construído sobre Kubernetes.
- :green_heart:[yunikorn](https://github.com/apache/incubator-yunikorn-core)  :fire::fire: - um programador de recursos universal leve para sistemas orquestradores de contentores.

### Gestão de Dados
- :green_heart:[Kubegres](https://github.com/reactive-tech/kubegres)  :fire::fire::fire: - Kubegres é um Kubernetes operador que permite implantar um ou muitos clusters de pods PostgreSql com replicação de dados e failover habilitado fora da caixa.
- :green_heart:[Postgres Operator](https://github.com/CrunchyData/postgres-operator)  :fire::fire::fire::fire::fire: - PGO, o Operador Postgres de Dados Crunchy, fornece uma solução declarativa Postgres que gerencia automaticamente seus clusters PostgreSQL.
- :green_heart:[MongoDB Community Kubernetes Operator](https://github.com/mongodb/mongodb-kubernetes-operator)  :fire::fire: - Isto é... Kubernetes Operador que coloca a Comunidade MongoDB em Kubernetes Grupos.
- :green_heart:[MySQL Operator for Kubernetes](https://github.com/mysql/mysql-operator)  :fire: - Operador MYSQL para Kubernetes é um Operador para Kubernetes gerenciando MySQL InnoDB Conjuntos de agrupamento dentro de uma Kubernetes Aglomerado.
- :green_heart:[Redis Operator](https://github.com/spotahome/redis-operator)  :fire::fire::fire: - Redes Operador cria/configura/gerencia redes-failovers no topo Kubernetes.

### Diversos
- :green_heart:[Agones](https://github.com/googleforgames/agones)  :fire::fire::fire::fire::fire: - Agones é uma biblioteca para hospedar, executar e escalar servidores de jogos dedicados em Kubernetes.
- :green_heart:[AWS Controllers for Kubernetes](https://github.com/aws/aws-controllers-k8s)  :fire::fire::fire::fire: - Controladores AWS para Kubernetes (ACK) permite definir e usar recursos de serviço AWS diretamente de Kubernetes.
- :green_heart:[AWS Node Termination Handler](https://github.com/aws/aws-node-termination-handler)  :fire::fire::fire: - A Kubernetes Daemonset para manipular graciosamente o desligamento da instância EC2
- :green_heart:[Brigade](https://github.com/brigadecore/brigade/)  :fire::fire::fire::fire::fire: - A Brigada é a ferramenta para criar gasodutos para Kubernetes.
- :green_heart:[Crossplane](https://github.com/crossplane/crossplane)  :fire::fire::fire::fire::fire: - Crossplane é um código aberto Kubernetes add-on que amplia qualquer cluster com a capacidade de fornecer e gerenciar infraestrutura, serviços e aplicativos em nuvem.
- :green_heart:[Descheduler for Kubernetes](https://github.com/kubernetes-sigs/descheduler)  :fire::fire::fire::fire::fire: - Desmarcar pods de nós baseados em políticas
- :green_heart:[Devtron](https://github.com/devtron-labs/devtron)  :fire::fire::fire::fire: - Ele é projetado como uma plataforma de auto-serve para operacionalização e manutenção de aplicativos (AppOps) em kubernetes de forma amigável.
- :green_heart:[OpenCost](https://github.com/opencost/opencost)  :fire::fire::fire::fire::fire: - Os modelos OpenCost dão visibilidade às equipas no actual e histórico Kubernetes despesas e alocação de recursos.
- :green_heart:[K8s-Cleaner](https://github.com/gianlucam76/k8s-cleaner)  :fire: - Não. `k8s-cleaner` identifica e remove recursos não utilizados.
- :green_heart:[K8sPurger](https://github.com/yogeshkk/K8sPurger)  :fire: - Não. `K8sPurger` Caçar recursos não usados Kubernetes.
- :green_heart:[KubeEdge](https://github.com/kubeedge/kubeedge)  :fire::fire::fire::fire::fire: - KubeEdge é construído sobre Kubernetes e estende a orquestração de aplicações nativas em contêineres e o gerenciamento de dispositivos para hosts no Edge.
- :green_heart:[KubePug](https://github.com/rikatz/kubepug)  :fire::fire: - Uma ferramenta para verificar depreciações antes de atualizar Kubernetes versão
- :green_heart:[Kube No Trouble](https://github.com/doitintl/kube-no-trouble)  :fire::fire::fire::fire::fire: - Verifique facilmente seus clusters para uso de APIs desatualizadas
- :green_heart:[Shell-operator](https://github.com/flant/shell-operator)  :fire::fire::fire::fire: - Shell-operator é uma ferramenta para executar scripts orientados a eventos em um Kubernetes cluster.

## Guias, Documentação, Blogs e Aprendizagem

### Guias
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - Uma introdução abrangente ao Kubernetes arquitetura
- [A Deep Dive Into Kubernetes Schema Validation](https://www.datree.io/resources/kubernetes-schema-validation) - Um guia sobre o Kubernetes esquema e como validá-lo usando OSS e ferramentas nativas
- [A Guide to the Kubernetes Networking Model](https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/) - Uma análise aprofundada Kubernetes rede
- [Amazon EKS Best Practices Guide for Security](https://aws.github.io/aws-eks-best-practices/) - Este guia fornece aconselhamento sobre a proteção de informações, sistemas e ativos que dependem do EKS ao mesmo tempo em que fornece valor comercial através de avaliações de risco e estratégias de mitigação.
- [Amazon EKS Node Drainer](https://github.com/aws-samples/amazon-k8s-node-drainer)  :fire: - Um guia e um exemplo para isolar e despejar todas as cápsulas de despejo de um nó EC2 sendo encerrado.
- [Comparison of Kubernetes Ingress controllers](https://docs.google.com/spreadsheets/d/191WWNpjJ2za6-nbG4ZoUMXMpUK8KlCIosvQB0f-oq3k/htmlview?pru=AAABdXUHlbs*g6XkyoZXhanlhRazst77Xw) - Esta pesquisa compara as capacidades de 14 diferentes Kubernetes Controladores de entrada.  
- [Configuring HA Kubernetes cluster on bare metal servers with kubeadm](https://medium.com/faun/configuring-ha-kubernetes-cluster-on-bare-metal-servers-with-kubeadm-1-2-1e79f0f7857b) - Um guia para levantar um HA Kubernetes cluster em servidores de metal nu com kubeadm.
- [Introduction to Using Google Kubernetes Engine; Explain Like I’m Five!](https://medium.com/faun/google-kubernetes-engine-explain-like-im-five-1890e550c099) - Criando seu primeiro gerenciado Kubernetes cluster no Google Kubernetes Motor usando Terraform.
- [Kubernetes Network Policy Recipes](https://github.com/ahmetb/kubernetes-network-policy-recipes)  :fire::fire::fire::fire::fire: - Este repositório contém vários casos de uso Kubernetes Políticas de rede e exemplo de arquivos YAML para alavancar em sua configuração.
- [Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)  :fire::fire::fire::fire::fire: - Não. Kubernetes O Hard Way guia você através de bootstrapping um altamente disponível Kubernetes cluster com criptografia de ponta a ponta entre componentes e autenticação RBAC.
- [Kubernetes Working Group for Multi-Tenancy](https://github.com/kubernetes-sigs/multi-tenancy)  :fire::fire::fire: - Este é um local de trabalho para propostas e protótipos relacionados com multi-dotações.
- [Production grade Kubernetes Monitoring using Prometheus](https://medium.com/faun/production-grade-kubernetes-monitoring-using-prometheus-78144b835b60) - Um guia detalhado para implantar a solução de monitoramento Prometheus.
- [The Illustrated Children’s Guide to Kubernetes](https://www.cncf.io/phippy/the-childrens-illustrated-guide-to-kubernetes/) - Explicações gráficas de Kubernetes
- [Troubleshooting Kubernetes deployments](https://learnk8s.io/a/troubleshooting-kubernetes.pdf) - Um fluxograma para solucionar problemas em caso de problemas
 - [Vertical Pod Autoscaling: The Definitive Guide](https://povilasv.me/vertical-pod-autoscaling-the-definitive-guide/) - Uma explicação aprofundada sobre Kubernetes VPA: o que é, como funciona, como usá-lo e quais limitações tem. 
- [Writing Your First Kubernetes Operator](https://medium.com/faun/writing-your-first-kubernetes-operator-8f3df4453234) - Neste artigo, vamos ver como construir e implantar seu primeiro Kubernetes Operador que utiliza o operador SDK.

### Blogs e Vídeos
- [10 most common mistakes using kubernetes](https://blog.pipetail.io/posts/2020-05-04-most-common-mistakes-k8s/) - São armadilhas comuns e como evitá-las.  
- [How the Department of Defense Moved to Kubernetes and Istio](https://www.youtube.com/watch?v=YjZ4AZ7hRM0) - Concentre-se na pilha de segurança do sidecar alavancando recipientes de Enviado e sidecar para garantir segurança de confiança zero e segurança multi-camadas assada.  
- [Kubernetes at Reddit: Tales from Production](https://youtu.be/WTbIBqNcjoQ) - Ouvir sucessos, compartilhar o coração partido das explosões de produção, e obter insight sobre o que tem funcionado e não funcionou bem para uma das propriedades web mais movimentadas do mundo.  
- [Kubernetes Failure Stories](https://github.com/hjacobs/kubernetes-failure-stories)  :fire::fire::fire::fire::fire: - Uma lista compilada de links para histórias de falhas públicas relacionadas com Kubernetes.  
- [Life of a Packet](https://www.youtube.com/watch?v=0Omvgd7Hg1I) - Rastreando o caminho do tráfego de rede no Kubernetes sistema.  
- [OPA Deep Dive](https://www.youtube.com/watch?v=Uj2N9S58GLU) - Mergulho profundo em algumas novas características emocionantes no projeto OPA apresentado pelos co-criadores.  
- [Scaling Kubernetes to 2,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-2500-nodes/) + [Scaling Kubernetes to 7,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-7500-nodes/) - Problemas que você vai encontrar ao correr em alta escala Kubernetes cargas de trabalho.
- [Service Mesh Comparison](https://servicemesh.es/) - Uma compensação fácil para ajudar a escolher uma das implementações do serviço Mesh.  
- [ArgoCD Best Practices](https://datree.io/resources/argocd-best-practices-you-should-know)

### Aprendizagem e Documentação
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - Uma introdução abrangente ao Kubernetes arquitetura
- [ConfigMaps in Kubernetes: how they work and what you should remember](https://blog.flant.com/configmaps-in-kubernetes-how-they-work-and-what-you-should-remember/) - Compreender a evolução para ConfigMaps, como eles funcionam e o que acontece quando mudam. 
- [Configuring Redis using a ConfigMap](https://kubernetes.io/docs/tutorials/configuration/configure-redis-using-configmap/) - Uma caminhada que fornece um exemplo do mundo real de como configurar Redis usando um ConfigMap
- [Example: Deploying Cassandra with a StatefulSet](https://kubernetes.io/docs/tutorials/stateful-application/cassandra/) - Este tutorial mostra como executar Apache Cassandra Kubernetes. Cassandra, um banco de dados, precisa de armazenamento persistente para fornecer durabilidade de dados.
- [Example: Deploying PHP Guestbook application with Redis](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/) - Este tutorial mostra como construir e implantar uma aplicação web simples, multi-tier usando Kubernetes e Docker.
- [Example: Deploying WordPress and MySQL with Persistent Volumes](https://kubernetes.io/docs/tutorials/stateful-application/mysql-wordpress-persistent-volume/) - Este tutorial mostra como implantar um site WordPress e um banco de dados MySQL usando Minikube.
- [Exposing an External IP Address to Access an Application in a Cluster](https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address/) - Este guia mostra como criar um Kubernetes Objeto de serviço que expõe um endereço IP externo.
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) - Uma lista oficial de comandos e bandeiras kubectl comumente usados.  
- [Kubectl Kubernetes CheatSheet](https://github.com/dennyzhang/cheatsheet-kubernetes-A4)  :fire::fire::fire::fire: - Uma folha de fraude contendo muitos comandos úteis do kubectl
- [Kubernetes API Reference Docs](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/) - Uma visão geral de alto nível dos tipos básicos de recursos fornecidos pelo Kubernetes API e suas funções primárias.  
- [Learn Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/) - Este tutorial fornece uma análise dos fundamentos do Kubernetes Sistema de orquestração de clusters.
- [Play with Kubernetes](https://labs.play-with-k8s.com/) - Brincar com Kubernetes é um parque infantil que permite aos usuários executar K8s Grupos em questão de segundos.
- [Ready-to-use commands and tips for kubectl](https://blog.flant.com/ready-to-use-commands-and-tips-for-kubectl/) - Diversas dicas de kubectl e truques dos engenheiros da Flant.  
- [Running ZooKeeper, A Distributed System Coordinator](https://kubernetes.io/docs/tutorials/stateful-application/zookeeper/) - Este tutorial demonstra a execução do Apache Zookeeper em Kubernetes usando StatefulSets, PodDisruptionBudgets e PodAntiAffinity.
- [Set Up a CI/CD Pipeline with Kubernetes](https://www.linux.com/audience/enterprise/set-cicd-pipeline-kubernetes-part-1-overview/) - Um guia de ponta a ponta para configurar um pipeline CI/CD com Kubernetes.
- [StatefulSet Basics](https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/) - Este tutorial fornece uma introdução para gerenciar aplicativos com StatefulSets.
- [Webinar: K8s with OPA Gatekeeper](https://www.youtube.com/watch?v=v4wJE3I8BYM) - Como usar a OPA para controlar o que os usuários finais podem fazer sobre o cluster e formas de garantir que os clusters estejam em conformidade com as políticas da empresa.  

### Guias de Certificação
- [Certified Kubernetes Security Specialist - CKSS](https://github.com/ijelliti/CKSS-Certified-Kubernetes-Security-Specialist)  :fire::fire: - Este repositório é uma coleção de recursos para preparar para o Certificado Kubernetes Exame Especialista em Segurança (CKSS).
- [CKS "Certified Kubernetes security specialist certification](https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist)  :fire::fire::fire::fire: - Não. Kubernetes recursos de segurança primordialmente de material permitido durante o exame, e itens opcionais extra para ajudá-lo a avançar seu contêiner e viagem de segurança kubernetes.
- [How to pass the Certified Kubernetes Administrator (CKA) exam on the first attempt](https://medium.com/faun/how-to-pass-certified-kubernetes-administrator-cka-exam-on-first-attempt-36c0ceb4c9e) - Um guia para passar exame CKA
- [The ultimate CKA "Certfified Kuberenetes Administator" resource since exam inception](https://github.com/walidshaari/Kubernetes-Certified-Administrator)  - Um repo atualizado de recursos oficiais para ajudá-lo a dominar o exame CKA, bem como alguns recursos extras para consolidar seu conhecimento de administração kubernetes.
- [Kubernetes Exam Simulator](https://killer.sh/) - CKS/CKA/CKAD cenários de exames e ambiente.  

## Contribuir

Contribuições bem-vindas! Ler o [contribution guidelines](contributing.md) Primeiro.


## Licença

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

Na medida do possível, por lei, Tom Huang dispensou todos os direitos de autor e
direitos relacionados ou vizinhos a este trabalho.
