# Kuratierte Kubernetes-Ressourcen [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

Eine kuratierte Liste von awesome Kubernetes Werkzeuge und Ressourcen.

Inspiriert von [awesome](https://github.com/sindresorhus/awesome) Liste und [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws).

## Der feurige Meter der Großartigkeit

* Repositories mit 0050+ Sternen: :fire:
* Repositories mit 0200+ Sternen: :fire::fire:
* Repositories mit 0500+ Sternen: :fire::fire::fire:
* Repositories mit 1000+ Sternen: :fire::fire::fire::fire:
* Repositories mit 2000+ Sternen: :fire::fire::fire::fire::fire:

Die Idee stammt aus [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws). 


## Inhalt
- [Tools und Bibliotheken](#tools-and-libraries)
  - [Kommandozeilen-Tools](#command-line-tools)
  - [Clusterbereitstellung](#cluster-provisioning)
  - [Automatisierung und CI/CD](#automation-and-cicd)
  - [Cluster Ressourcenmanagement](#cluster-resources-management)
  - [Secrets Management](#secrets-management)
  - [Vernetzung](#networking)
  - [Lagerung](#storage)
  - [Testen und Troubleshooting](#testing-and-troubleshooting)
  - [Monitoring, Alerts und Visualisierung](#monitoring-alerts-and-visualization)
  - [Backup und Restore](#backup-and-restore)
  - [Sicherheit und Compliance](#security-and-compliance)
  - [Dienstmaschen](#service-mesh)
  - [Entwicklungswerkzeuge](#development-tools)
  - [Datenverarbeitung und Machine Learning](#data-processing-and-machine-learning)
  - [Datenmanagement](#data-management)
  - [Verschiedenes](#miscellaneous)
- [Guides, Dokumentationen, Blogs und Learnings](#guides-documentations-blogs-and-learnings)
  - [Leitfäden](#guides)
  - [Blogs und Videos](#blogs-and-videos)
  - [Lernen und Dokumentationen](#learnings-and-documentations)
  - [Zertifizierungsleitfäden](#certification-guides)
- [Beitrag](#contribute)
- [Lizenz](#license)


## Tools und Bibliotheken
Positionen mit :green_heart: Open Source Projekte angeben. 

### Kommandozeilen-Tools
- :green_heart:[Helm](https://github.com/helm/helm)  :fire::fire::fire::fire::fire: Helm ist ein Tool zum Verwalten von Charts. Charts sind Pakete von vorkonfigurierten Kubernetes Ressourcen.
- :green_heart:[Helmfile](https://github.com/helmfile/helmfile)  :fire::fire::fire::fire::fire: Helmfile ist eine deklarative Spezifikation für die Bereitstellung von Helm-Charts.
- :green_heart:[Helmwave](https://github.com/helmwave/helmwave)  :fire::fire::fire: Helmwave ist ein helm3-natives Tool für die Bereitstellung Ihrer Helm Charts. Es ist wie Docker-Compose, aber für Helm.
- :green_heart:[Infra](https://github.com/infrahq/infra)  :fire::fire::fire: - Infra ermöglicht es Ihnen, Infrastruktur zu entdecken und darauf zuzugreifen (z.B. Kubernetes, Datenbanken. Wir helfen Ihnen, einen Identitätsanbieter wie Okta oder Azure Active Directory zu verbinden und Benutzer/Gruppen mit den Berechtigungen zuzuordnen, die Sie für Ihre Infrastruktur festgelegt haben.
- :green_heart:[K9s](https://github.com/derailed/k9s)  :fire::fire::fire::fire::fire: - K9s bietet eine Terminal-Benutzeroberfläche zur Interaktion mit Ihrem Kubernetes Cluster.
- :green_heart:[kapp](https://github.com/vmware-tanzu/carvel-kapp)  :fire::fire::fire: - kapp ist ein einfaches Bereitstellungswerkzeug, das sich auf das Konzept von "Kubernetes application - eine Reihe von Ressourcen mit dem gleichen Label
- :green_heart:[kconnect](https://github.com/fidelity/kconnect)  :fire::fire: - kconnect ist ein CLI-Dienstprogramm, mit dem Sie sicher und sicher zugreifen können Kubernetes Cluster in mehreren Betriebsumgebungen.
- :green_heart:[kl](https://github.com/robinovitch61/kl)  :fire: - kl ist eine interaktive Terminalanwendung für die Interaktion mit Protokollen über viele Container und Cluster hinweg.
- :green_heart:[Ktunnel](https://github.com/omrikiei/ktunnel)  :fire::fire: Ktunnel ist ein CLI-Tool, das einen umgekehrten Tunnel zwischen einem Kubernetes-Cluster und Ihrer lokalen Maschine erstellt.
- :green_heart:[Kubebox](https://github.com/astefanutti/kubebox)  :fire::fire::fire::fire: Terminal und Webkonsole für Kubernetes
- :green_heart:[Kubetail](https://github.com/johanhaleby/kubetail)  :fire::fire::fire::fire::fire: - Bash-Skript, mit dem Sie Logs (Tail / Follow) aus mehreren Pods in einem Stream aggregieren können.
- :green_heart:[kube-shell](https://github.com/cloudnativelabs/kube-shell)  :fire::fire::fire::fire: - Kube-shell: Eine integrierte Shell zum Arbeiten mit dem Kubernetes CLI.
- 💘[kubecolor](https://github.com/kubecolor/kubecolor) 🔥🔥 - färbt kubectl Ausgang
- :green_heart:[kubectl tree](https://github.com/ahmetb/kubectl-tree)  :fire::fire::fire::fire: - Ein kubectl-Plugin, um die Eigentumsverhältnisse zwischen Kubernetes Objekte durch Eigentümer.
- :green_heart:[kubectl-aliases](https://github.com/ahmetb/kubectl-aliases)  :fire::fire::fire::fire::fire: - Dieses Repository enthält ein Skript, um Hunderte von praktischen Shell-Aliasen für kubectl zu generieren.
- :green_heart:[kubectx + kubens](https://github.com/ahmetb/kubectx)  :fire::fire::fire::fire::fire: - `kubectx` hilft Ihnen, zwischen Clustern hin und her zu wechseln, und `kubens` Hilft Ihnen beim Wechsel zwischen Kubernetes Namespaces reibungslos.
- :green_heart:[kube-ps1](https://github.com/jonmosco/kube-ps1)  :fire::fire::fire::fire::fire: - kube-ps1: Ein Skript, mit dem Sie den aktuellen Kubernetes Kontext und Namespace, die auf kubectl für Ihre Bash/Zsh-Promptstrings konfiguriert sind (d.h. die $PS1).
- :green_heart:[kubediff](https://github.com/weaveworks/kubediff)  :fire::fire::fire: Kubediff ist ein Werkzeug für Kubernetes um Ihnen die Unterschiede zwischen Ihrer laufenden Konfiguration und Ihrer versionengesteuerten Konfiguration anzuzeigen.
- :green_heart:[kubeprompt](https://github.com/jlesquembre/kubeprompt)  :fire: - Isoliert KUBECONFIG in jeder Shell und zeigt den Strom Kubernetes Kontext / Namespace in Ihrer Eingabeaufforderung
- :green_heart:[Kubevela](https://github.com/oam-dev/kubevela)  :fire::fire::fire::fire::fire: KubeVela ist eine einfach zu bedienende und dennoch erweiterbare Plattform, die es ihnen ermöglicht, Anwendungen mit minimalem Aufwand zu entwerfen und zu versenden.
- :green_heart:[Move2Kube](https://github.com/konveyor/move2kube)  :fire::fire: - Ein Tool, mit dem Benutzer ihre Apps von Legacy-Plattformen wie Cloud Foundry auf Kubernetes und Openshift. Analysiert den Anwendungsquellcode und generiert Kubernetes YAMLs, Helm Charts, Tekton Pipelines usw. Die Analyse und Generierung kann stark angepasst werden, um die genaue Ausgabe zu produzieren, die Sie wollen.
- :green_heart:[nova](https://github.com/FairwindsOps/nova/)  :fire::fire: Nova scannt Ihren Cluster nach installierten Helm-Diagrammen und vergleicht sie dann mit allen bekannten Helm-Repositories.
- :green_heart:[Plural](https://github.com/pluralsh/plural)  :fire::fire: Plural ist ein CLI-Tool und eine ganzheitliche DevOps-Management-Plattform für die schnelle Bereitstellung, Verwaltung und Überwachung von Open-Source-Anwendungen auf Kubernetes.
- :green_heart:[RBAC Lookup](https://github.com/FairwindsOps/rbac-lookup)  :fire::fire::fire: - RBAC Lookup ist eine CLI, mit der Sie leicht finden können Kubernetes Rollen und Clusterrollen, die an beliebige Benutzer, Dienstkonten oder Gruppennamen gebunden sind.
- :green_heart:[stern](https://github.com/stern/stern)  :fire::fire::fire::fire::fire: - Stern ermöglicht es Ihnen, mehrere Pods auf Kubernetes und mehrere Container im Pod.

### Clusterbereitstellung
- :green_heart:[Bootkube](https://github.com/kubernetes-sigs/bootkube)  :fire::fire::fire::fire: - Bootkube ist ein Tool zum Starten von Self-Hosted Kubernetes Cluster.
- :green_heart:[Claudie](https://github.com/berops/claudie)  :fire: Multi-Cloud-Cluster mit jedem Nodepool in einem anderen Cloud-Anbieter.
- :green_heart:[Cluster API](https://github.com/kubernetes-sigs/cluster-api)  :fire::fire::fire::fire::fire: Cluster API ist eine Kubernetes Teilprojekt, das sich auf die Bereitstellung deklarativer APIs und Tools zur Vereinfachung der Bereitstellung, des Upgrades und des Betriebs mehrerer Kubernetes Cluster.
- :green_heart:[eksctl](https://github.com/weaveworks/eksctl)  :fire::fire::fire::fire::fire: - `eksctl` ist ein einfaches CLI-Tool zum Erstellen von Clustern auf EKS - Amazons neues Managed Kubernetes Service für EC2.
- :green_heart:[k0s](https://github.com/k0sproject/k0s)  :fire::fire::fire::fire::fire: - k0s - Null Reibung Kubernetes (The Simple, Solid & Certified) Kubernetes Verteilung
- :green_heart:[k3d](https://github.com/rancher/k3d)  :fire::fire::fire::fire::fire: - k3d, and Windows.,destroy,half the memory,highly available,ist ein Tool zum Ausführen lokaler k3s-Cluster im Docker. Es ist eine einzelne binäre etwa 20 MB. Sie müssen Docker installiert haben.
- :green_heart:[k3s](https://github.com/rancher/k3s)  :fire::fire::fire::fire::fire: - Leichtgewicht Kubernetesleicht zu installieren,Kubernetes Cluster aus der Kommandozeile.
- :green_heart:[kind](https://github.com/kubernetes-sigs/kind)  :fire::fire::fire::fire::fire: - type ist ein Tool zum Ausführen von Local Kubernetes Cluster mit Docker-Container "Nodes".
- :green_heart:[kops](https://github.com/kubernetes/kops)  :fire::fire::fire::fire::fire: - `kops` hilft Ihnen beim Erstellen, wie Art, Upgrade und Aufrechterhaltung von Produktionsgrad
- :green_heart:[kube-aws](https://github.com/kubernetes-incubator/kube-aws)  :fire::fire::fire::fire: - `kube-aws` ist ein Kommandozeilen-Tool zum Erstellen / Aktualisieren / Zerstören Kubernetes Cluster auf AWS.
- :green_heart:[kubespray](https://github.com/kubernetes-sigs/kubespray)  :fire::fire::fire::fire::fire: - Bereitstellen einer Produktion Kubernetes Cluster
- :green_heart:[microK8s](https://github.com/ubuntu/microk8s)  :fire::fire::fire::fire::fire: - Der kleinste, schnellste Kubernetes
- :green_heart:[Minikube](https://github.com/kubernetes/minikube)  :fire::fire::fire::fire::fire: Minikube implementiert einen lokalen Kubernetes Cluster auf macOS, Linux, alle in einem binären weniger als 100 MB.
- :green_heart:[Talos Linux](https://github.com/siderolabs/talos)  :fire::fire::fire::fire::fire: Talos Linux ist ein minimales, unveränderliches, sicheres Betriebssystem, das Vanille installiert Kubernetes - für Produktionsrechenzentren, K8s@home und Edge.
- :green_heart:[karpenter]([https://karpenter.sh](https://github.com/aws/karpenter-provider-aws))  :fire::fire::fire::fire::fire: Karpenter ist ein Kubernetes Node Autoscaler wurde für Flexibilität, Leistung und Einfachheit entwickelt.
- :green_heart:[Kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/) kubeadm führt die notwendigen Aktionen aus, um ein Minimum an funktionsfähigem Cluster in Betrieb zu nehmen.
- :green_heart:[vCluster](https://github.com/loft-sh/vcluster/) : :fire::fire::fire::fire::fire: - vCluster ermöglicht es Ihnen, voll funktionsfähige virtuelle erstellen Kubernetes Cluster, die Kosten drastisch senken und Multitenancy und Isolation im Vergleich zu herkömmlichen Kubernetes. 
  
### Automatisierung und CI/CD
- :green_heart:[Argo CD](https://github.com/argoproj/argo-cd)  :fire::fire::fire::fire::fire: - Argo CD ist ein deklaratives, GitOps Continuous Delivery Tool für Kubernetes.
- :green_heart:[Argo Events](https://github.com/argoproj/argo-events)  :fire::fire::fire::fire: - Argo Events ist ein ereignisgesteuertes Workflow-Automatisierungs-Framework für Kubernetes Das hilft dir beim Auslösen K8s Objekte, Argo Workflows, Serverlose Workloads usw.
- :green_heart:[Argo Rollouts](https://github.com/argoproj/argo-rollouts)  :fire::fire::fire::fire: - Argo Rollouts Controller, verwendet die Rollout benutzerdefinierte Ressource, um zusätzliche Bereitstellungsstrategien wie Blue Green und Canary bereitzustellen Kubernetes.
- :green_heart:[Argo Workflows](https://github.com/argoproj/argo)  :fire::fire::fire::fire::fire: Argo Workflows ist eine Open-Source-Container-native Workflow-Engine zur Orchestrierung paralleler Jobs auf Kubernetes.
- :green_heart:[Argocd autopilot](https://github.com/argoproj-labs/argocd-autopilot)  :fire::fire::fire: Der Argo-CD Autopilot ist ein Tool, das eine eigensinnige Möglichkeit bietet, Argo-CD zu installieren und GitOps-Repositorys zu verwalten.
- :green_heart:[Flagger](https://github.com/weaveworks/flagger)  :fire::fire::fire::fire::fire: Flagr ist ein progressives Bereitstellungstool, das den Release-Prozess für Anwendungen automatisiert, die auf Kubernetes.
- :green_heart:[Flux2](https://github.com/fluxcd/flux2)  :fire::fire::fire::fire::fire: - Flux Version 2 wurde von Grund auf zur Verwendung entwickelt KubernetesAPI-Erweiterungssystem und zur Integration mit Prometheus und anderen Kernkomponenten des Kubernetes Ökosystem.
- :green_heart:[k8s-image-swapper](https://github.com/estahn/k8s-image-swapper/)  :fire::fire: - `k8s-image-swapper` ist ein mutierender Webhook für Kubernetes, Bilder in Ihre eigene Registrierung herunterladen und die Bilder auf diesen neuen Standort verweisen.
- :green_heart:[Kubero](https://github.com/kubero-dev/kubero)  :fire::fire::fire::fire::fire: - Eine kostenlose und selbst gehostete Heroku PaaS-Alternative für Kubernetes die GitOps implementiert
- :green_heart:[KubeSphere](https://github.com/kubesphere/kubesphere)  :fire::fire::fire::fire::fire: KubeSphere ist ein verteiltes Betriebssystem, das Cloud Native Stack mit Kubernetes als Kernel und zielt darauf ab, eine Plug-and-Play-Architektur für Anwendungen von Drittanbietern zu sein, die nahtlos integriert wird, um sein Ökosystem zu verbessern.
- :green_heart:[Reloader](https://github.com/stakater/Reloader)  :fire::fire::fire::fire::fire: Reloader kann Änderungen im `ConfigMap` und `Secret` Führen Sie Upgrades auf Pods mit ihren verbundenen `DeploymentConfigs`, `Deployments`, `Daemonsets` und `Statefulsets`.
- :green_heart:[terranetes-controller](https://github.com/appvia/terranetes-controller)  :fire: Terranetes Controller ermöglicht es dem Plattformteam, Self-Service-Funktionen rund um Cloud-Ressourcen bereitzustellen.
- :green_heart:[Skaffold](https://github.com/GoogleContainerTools/skaffold)  :fire::fire::fire::fire::fire: - Skaffold ist ein Kommandozeilen-Tool, das die kontinuierliche Entwicklung für Kubernetes Anträge.
- :green_heart:[Spinnaker](https://github.com/spinnaker/spinnaker)  :fire::fire::fire::fire::fire: Spinnaker ist eine Open-Source-Plattform für die kontinuierliche Bereitstellung von Softwareänderungen mit hoher Geschwindigkeit und Vertrauen.
- :green_heart:[TF-controller](https://github.com/weaveworks/tf-controller)  :fire: - Der TF-Controller ist ein experimenteller Controller für Flux, um Terraform-Ressourcen auf GitOps-Wege in Einklang zu bringen.
- :green_heart:[werf](https://github.com/werf/werf)  :fire::fire::fire::fire::fire: - werf ist ein CLI-Tool, das Git, Docker, Helm & Kubernetes mit einem beliebigen CI-System zur Implementierung von CI/CD und GitOps. 
- :green_heart:[Weave GitOps](https://github.com/weaveworks/weave-gitops)  :fire::fire: Weave GitOps ist eine einfache Open-Source-Entwicklerplattform für Menschen, die Cloud-native Anwendungen wünschen, ohne es zu benötigen. Kubernetes Fachwissen.
- :green_heart:[Otomi - Self-hosted PaaS for K8s](https://github.com/redkubes/otomi-core)  :fire::fire::fire::fire: - Otomi fügt entwickler- und betriebsorientierte Tools, Automatisierung und Entwickler-Self-Service hinzu Kubernetes in jeder Infrastruktur oder Cloud, um containerisierte Anwendungen zu codieren, zu erstellen, freizugeben, bereitzustellen, zu sichern, zu betreiben und zu überwachen.
:green_heart:[Cozystack - Self-hosted PaaS for K8s](https://github.com/cozystack/cozystack)  :fire::fire::fire::fire: - ein schlüsselfertiges, selbst gehostetes PaaS, das auf gehärteten Talos-Linux-Clustern läuft und Sicherheit an erste Stelle setzt Kubernetes Automatisierung auf Ihr eigenes Metall. Perfekt, wenn Sie souveräne Cloud- oder Edge-native-Stacks erstellen.

### Cluster Ressourcenmanagement
- :green_heart:[Clusterpedia](https://github.com/clusterpedia-io/clusterpedia)  :fire: Clusterpedia wird für komplexe Ressourcensuchen in mehreren Clustern verwendet und unterstützt die gleichzeitige Suche nach einer einzelnen Art von Ressource oder mehreren Arten von Ressourcen, die in mehreren Clustern vorhanden sind.
- :green_heart:[Grafana Tanka](https://github.com/grafana/tanka)  :fire::fire::fire::fire: - Die saubere, prägnante und super flexible Alternative zu YAML für Ihre Kubernetes Cluster.
- :green_heart:[KEDA](https://github.com/kedacore/keda)  :fire::fire::fire::fire::fire: - KEDA ermöglicht feinkörnige Autoskalierung (einschließlich bis / von Null) für ereignisgesteuerte Kubernetes Workloads.
- :green_heart:[Kruise](https://github.com/openkruise/kruise)  :fire::fire::fire::fire::fire: - Kruise besteht aus mehreren Controllern, die die Kubernetes Kerncontroller für das Workload Management.
- :green_heart:[KubeDirector](https://github.com/bluek8s/kubedirector)  :fire::fire: KubeDirector verwendet Standard Kubernetes ()K8s) Einrichtungen für benutzerdefinierte Ressourcen und API-Erweiterungen zur Implementierung von Stateful Scaleout-Anwendungsclustern.
- :green_heart:[Kubenav](https://github.com/kubenav/kubenav)  :fire::fire::fire::fire: - kubenav ist der Navigator für Ihre Kubernetes Cluster direkt in Ihrer Tasche.
- :green_heart:[Liqo](https://github.com/liqotech/liqo)  :fire::fire: - Liqo implementiert dynamisches Ressourcen-Sharing über verschiedene Kubernetes Cluster (z. B. Offloading von Pods und Services), die eine dezentrale Governance unterstützen.
- :green_heart:  [Meshery](https://github.com/meshery/meshery)  :fire::fire::fire::fire::fire: - Meshery ist ein Open-Source-Cloud-nativer Manager, der das Design und Management aller ermöglicht Kubernetes-basierte Infrastruktur und Anwendungen.
- :green_heart:[Pluto](https://github.com/FairwindsOps/pluto)  :fire::fire::fire::fire: Pluto ist ein Dienstprogramm, um Benutzern zu helfen, veraltet zu finden Kubernetes apiVersionen in ihren Code-Repositories und ihren Helm-Releases.
- :green_heart:[Polaris](https://github.com/FairwindsOps/polaris)  :fire::fire::fire::fire::fire: Polaris ist eine Open Source Policy Engine für Kubernetes Das validiert und behebt die Ressourcenkonfiguration.
- :green_heart:[Projectsveltos](https://github.com/projectsveltos/addon-manager)  :fire: Projectsveltos ist ein Kubernetes Add-on-Controller, der die Bereitstellung und Verwaltung von Add-ons und Anwendungen über mehrere Cluster hinweg vereinfacht.
- :green_heart:[The Hierarchical Namespace Controller](https://github.com/kubernetes-sigs/multi-tenancy/tree/master/incubator/hnc)  :fire::fire::fire: Hierarchische Namespaces erleichtern das Teilen Ihres Clusters, indem sie Namespaces leistungsfähiger machen.

### Secrets Management
- :green_heart:[Kubernetes External Secrets](https://github.com/godaddy/kubernetes-external-secrets)  :fire::fire::fire::fire::fire: - Kubernetes External Secrets ermöglicht es Ihnen, externe Geheimmanagementsysteme wie AWS Secrets Manager oder HashiCorp Vault zu verwenden, um Geheimnisse sicher hinzuzufügen. Kubernetes.
- :green_heart:[Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets)  :fire::fire::fire::fire::fire: Verschlüsseln Sie Ihr Geheimnis in ein SealedSecret, das sicher zu speichern ist - sogar in ein öffentliches Repository.
- :green_heart:[akv2k8s](https://github.com/SparebankenVest/azure-key-vault-to-kubernetes)  :fire::fire: Azure Key Vault für Kubernetes (akv2k8s) stellt Azure Key Vault-Objekte für Kubernetes In zweierlei Hinsicht: als native Kubernetes Secrets; als Umgebungsvariablen direkt in Ihre Container-Anwendung injiziert

### Vernetzung
- :green_heart:[Calico Networking](https://github.com/projectcalico/calico)  :fire::fire::fire::fire::fire: Calico ist eine Open-Source-Netzwerk- und Netzwerksicherheitslösung für Container, virtuelle Maschinen und Bare-Metal-Workloads
- :green_heart:[cert-manager](https://github.com/jetstack/cert-manager)  :fire::fire::fire::fire::fire: cert-manager ist ein Kubernetes Add-on zur Automatisierung der Verwaltung und Ausstellung von TLS-Zertifikaten aus verschiedenen Quellen.
- :green_heart:[cilium](https://github.com/cilium/cilium)  :fire::fire::fire::fire::fire: Cilium ist eine Netzwerk-, Beobachtungs- und Sicherheitslösung mit einem eBPF-basierten Dataplane.
- :green_heart:[CoreDNS](https://github.com/coredns/coredns)  :fire::fire::fire::fire::fire: CoreDNS ist ein schneller und flexibler DNS-Server, der auf Kubernetes.
- :green_heart:[ingress-nginx](https://github.com/kubernetes/ingress-nginx)  :fire::fire::fire::fire::fire: - `ingress-nginx` ist ein Ingress Controller für Kubernetes Verwendung von NGINX als Reverse Proxy und Load Balancer.
- :green_heart:[Kong for Kubernetes](https://github.com/Kong/kubernetes-ingress-controller)  :fire::fire::fire::fire: - Konfigurieren Sie Plugins, Health Checking, Load Balancing und mehr in Kong für Kubernetes Dienstleistungen.
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - Ein kubectl-Plugin, das tcpdump und Wireshark verwendet, um eine Fernaufnahme auf einem beliebigen Pod in Ihrem Kubernetes Cluster.
- :green_heart:[kubectl trace](https://github.com/iovisor/kubectl-trace)  :fire::fire::fire::fire: - `kubectl trace` ist ein kubectl Plugin, mit dem Sie die Ausführung von bpftrace Programmen in Ihrem Kubernetes Cluster.
- :green_heart:[Kube Karp](https://github.com/immanuelfodor/kube-karp)  :fire: - Fügen Sie eine schwimmende virtuelle IP hinzu Kubernetes Clusterknoten für Load Balancing auf Basis des CARP-Protokolls
- :green_heart:[kubernetes-ingress](https://github.com/nginxinc/kubernetes-ingress)  :fire::fire::fire::fire::fire:  - Eine Implementierung eines Ingress Controllers für NGINX und NGINX Plus (kommerziell).
- :green_heart:[kube-ovn](https://github.com/alauda/kube-ovn)  :fire::fire::fire::fire:  - A Kubernetes Network Fabric für Unternehmen, das reich an Funktionen und einfach im Betrieb ist.
- :green_heart:[loxilb](https://github.com/loxilb-io/loxilb)  :fire::fire::fire:  - A Kubernetes Service Load Balancer auf Basis von eBPF.
  
### Lagerung
- :green_heart:[Longhorn](https://github.com/longhorn/longhorn)  :fire::fire::fire::fire::fire: Longhorn ist ein verteiltes Blockspeichersystem für Kubernetes.
- :green_heart:[OpenEBS](https://github.com/openebs/openebs)  :fire::fire::fire::fire::fire: OpenEBS ist die am weitesten verbreitete und einfach zu bedienende Open-Source-Speicherlösung für Kubernetes.
- :green_heart:[Rook](https://github.com/rook/rook)  :fire::fire::fire::fire::fire: Rook ist ein Open Source Cloud-nativer Storage Orchestrator für Kubernetes.

### Testen und Troubleshooting
- :green_heart:[Chainsaw](https://github.com/kyverno/chainsaw)  :fire: - Das ultimative End to End Testing Tool für Kubernetes Betreiber.
- :green_heart:[Chaos Mesh](https://github.com/pingcap/chaos-mesh)  :fire::fire::fire::fire::fire: Chaos Mesh® ist eine Cloud-native Chaos Engineering Plattform, die Chaos auf Kubernetes Umgebungen.
- :green_heart:[chaoskube](https://github.com/linki/chaoskube)  :fire::fire::fire::fire: - `chaoskube` Tötet regelmäßig zufällige Pods in Ihrem Kubernetes Cluster.
- :green_heart:[Conftest](https://github.com/open-policy-agent/conftest)  :fire::fire::fire::fire: Conftest hilft Ihnen, Tests mit strukturierten Konfigurationsdaten zu schreiben.
- :green_heart:[DETIK](https://github.com/bats-core/bats-detik)  :fire: Eine Bibliothek, die das End-to-End-Testen von K8s Anwendungen durch Nutzung [BATS](https://github.com/bats-core/bats-core) Behauptungen und natursprachliche Abfragen.
- :green_heart:[k6](https://github.com/loadimpact/k6)  :fire::fire::fire::fire::fire: - k6 ist ein modernes Lastprüfwerkzeug, das auf der jahrelangen Erfahrung von Load Impact in der Last- und Leistungsprüfungsbranche aufbaut.
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - Ein kubectl-Plugin, das tcpdump und Wireshark verwendet, um eine Fernaufnahme auf einem beliebigen Pod in Ihrem Kubernetes Cluster.
- :green_heart:[Kube DOOM](https://github.com/storax/kubedoom)  :fire::fire::fire::fire: - Die nächste Stufe des Chaos Engineering ist da! Töte Schoten in deinem Kubernetes Cluster, indem Sie sie in Doom schießen!
- :green_heart:[kube-monkey](https://github.com/asobti/kube-monkey)  :fire::fire::fire::fire::fire: - Es löscht zufällig Kubernetes (k8s) Pods im Cluster, die die Entwicklung fehlerresistenter Dienste fördern und validieren.
- :green_heart:[kube-score](https://github.com/zegl/kube-score)  :fire::fire::fire::fire: - `kube-score` ist ein Tool, das statische Codeanalysen Ihrer Kubernetes Objektdefinitionen.
- :green_heart:[Kubectl-debug](https://github.com/JamesTGrant/kubectl-debug)  :fire::fire::fire::fire::fire: - `kubectl-debug` ist eine Out-of-Tree-Lösung zur Fehlersuche bei laufenden Pods, mit der Sie einen neuen Container in laufenden Pods zum Debuggen ausführen können.
- :green_heart:[KubeInvaders](https://github.com/lucky-sideburn/KubeInvaders)  :fire::fire::fire: - Durch KubeInvaders können Sie stressen Kubernetes Cluster auf eine lustige Art und Weise und überprüfen Sie, wie es widerstandsfähig ist.
- :green_heart:[Kubetest](https://github.com/vapor-ware/kubetest)  :fire: Kubetest ist ein Pytest-Plugin, das die Verwaltung eines Kubernetes Cluster innerhalb Ihrer Integrationstests.
- :green_heart:[Litmus](https://github.com/litmuschaos/litmus)  :fire::fire::fire::fire::fire: - Litmus bietet Werkzeuge, um Chaos auf Kubernetes SREs dabei zu helfen, Schwachstellen in ihren Einsätzen zu finden.
- :green_heart:[popeye](https://popeyecli.io/)  :fire::fire::fire::fire::fire: - Popeye ist ein Dienstprogramm, das live scannt Kubernetes Cluster und meldet mögliche Probleme mit bereitgestellten Ressourcen und Konfigurationen.
- :green_heart:[PowerfulSeal](https://github.com/bloomberg/powerfulseal)  :fire::fire::fire::fire: - PowerfulSeal injiziert Misserfolg in Ihre Kubernetes Cluster, so dass Sie Probleme so früh wie möglich erkennen können.
- :green_heart:[Testkube](https://github.com/kubeshop/testkube)  :fire::fire::fire: Testkube ist ein Kubernetes natives Testing Framework für Testorchestrierung und -ausführung. Es ermöglicht Ihnen, jeden Ihrer Tests in einem Kubernetes Cluster. Integriert sich in Ihre CI/CD und ermöglicht es Ihnen, einem GitOps-Ansatz beim Testen zu folgen und gleichzeitig einen zentralen Ort für alle Ihre Testergebnisse in allen Clustern zu haben.

### Monitoring, Alerts und Visualisierung
- :green_heart:[BotKube](https://github.com/infracloudio/botkube)  :fire::fire::fire::fire: - BotKube-Integration mit Slack oder Mattermost hilft Ihnen, Ihre Kubernetes Cluster, Debug kritische Deployments und gibt Empfehlungen für Standard-Praktiken durch die Durchführung von Überprüfungen auf Kubernetes Ressourcen.
- :green_heart:[Canary Checker](https://github.com/flanksource/canary-checker)  :fire: Canary Checker ist eine kubernetes-native Gesundheitscheck-Plattform mit mehr als 30 integrierten Gesundheitscheck-Typen.
- :green_heart:[Cortex](https://github.com/cortexproject/cortex)  :fire::fire::fire::fire::fire: Cortex bietet horizontal skalierbare, hochverfügbare, Multi-Tenant-Langzeitspeicher für Prometheus.
- :green_heart:[Goldilocks](https://github.com/FairwindsOps/goldilocks)  :fire::fire::fire: - Goldilocks ist ein Dienstprogramm, mit dem Sie einen Ausgangspunkt für Ressourcenanforderungen und -limits identifizieren können.
- :green_heart:[Goldpinger](https://github.com/bloomberg/goldpinger)  :fire::fire::fire::fire::fire: Debugging Tool für Kubernetes welche die Konnektivität zwischen Knoten im Cluster testet und anzeigt.
- :green_heart:[Grafana](https://github.com/grafana/grafana)  :fire::fire::fire::fire::fire: Mit Grafana können Sie Ihre Metriken abfragen, visualisieren, alarmieren und verstehen, unabhängig davon, wo sie gespeichert sind.
- :green_heart:[Helm Dashboard](https://github.com/komodorio/helm-dashboard)  :fire::fire::fire::fire: - Das fehlende UI für Helm. Das Helm-Dashboard-Plugin bietet eine UI-gesteuerte Möglichkeit, installierte Helm-Diagramme anzuzeigen, den Revisionsverlauf und die entsprechenden k8s-Ressourcen zu sehen. 
- :green_heart:[Kiali](https://github.com/kiali/kiali)  :fire::fire::fire::fire::fire: Kiali arbeitet mit Istio zusammen, um die Service Mesh Topologie zu visualisieren.
- :green_heart:[k8s-image-availability-exporter](https://github.com/flant/k8s-image-availability-exporter)  :fire: Prometheus-Exporteur, der Sie proaktiv vor Bildern warnt, die in Kubernetes Objekte, aber nicht im Containerregister verfügbar sind. 
- :green_heart:[kube-capacity](https://github.com/robscott/kube-capacity)  :fire::fire::fire: - Dies ist eine einfache CLI, die einen Überblick über die Ressourcenanforderungen, -limits und -nutzung in einem Kubernetes Cluster.
- :green_heart:[Kubernetes Dashboard](https://github.com/kubernetes/dashboard)  :fire::fire::fire::fire::fire: - Kubernetes Dashboard ist eine allgemeine, webbasierte Benutzeroberfläche für Kubernetes Cluster.
- :green_heart:[Kubedev](https://github.com/relferreira/kubedev)  :fire: - Kubedev ist eine leistungsstarke und schöne Benutzeroberfläche für die Verwaltung Kubernetes Cluster.
- :green_heart:[KubeHelper](https://github.com/KubeHelper/kubehelper)  :fire: - KubeHelper - vereinfacht viele täglich Kubernetes Clusteraufgaben über eine Webschnittstelle.
- :green_heart:[Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server)  :fire::fire::fire::fire::fire: - Metrics Server ist eine skalierbare, effiziente Quelle für Container-Ressourcenmetriken für Kubernetes eingebaute Autoscaling-Pipelines.
- :green_heart:[Kubernetes Operational View](https://github.com/hjacobs/kube-ops-view)  :fire::fire::fire::fire: - Ein Tool, das darauf abzielt, ein gemeinsames Betriebsbild für mehrere bereitzustellen Kubernetes Cluster.
- :green_heart:[kube-state-metrics](https://github.com/kubernetes/kube-state-metrics)  :fire::fire::fire::fire::fire: - kube-state-metrics ist ein einfacher Dienst, der die Kubernetes API Server und erzeugt Metriken über den Zustand der Objekte.
- :green_heart:[kubewatch](https://github.com/robusta-dev/kubewatch)  :fire::fire::fire::fire::fire: - `kubewatch` ist a Kubernetes Watcher, der derzeit Benachrichtigungen an verfügbare Collaboration Hubs/Benachrichtigungskanäle veröffentlicht.
- :green_heart:[Lens](https://github.com/lensapp/lens)  :fire::fire::fire::fire::fire: - Objektiv ist es eine nützliche, attraktive Open-Source-Benutzeroberfläche (UI) für die Arbeit mit Kubernetes Cluster.
- :green_heart:[Mizu](https://github.com/up9inc/mizu)  :fire::fire::fire: API Traffic Viewer für Kubernetes So können Sie die gesamte API-Kommunikation zwischen Microservices anzeigen. Denken Sie TCPDump und Wireshark neu erfunden für Kubernetes
- :green_heart:[Network mapper](https://github.com/otterize/network-mapper)  :fire::fire: - Karte Kubernetes In-Cluster-Verkehr und Export als Text, Absichten oder Bild.
- :green_heart:[Popeye](https://github.com/derailed/popeye)  :fire::fire::fire::fire::fire: - Popeye ist ein Dienstprogramm, das live scannt Kubernetes Cluster und meldet mögliche Probleme mit bereitgestellten Ressourcen und Konfigurationen.
- :green_heart:[Prometheus](https://github.com/prometheus/prometheus)  :fire::fire::fire::fire::fire: Prometheus, ein Projekt der Cloud Native Computing Foundation, ist ein System- und Serviceüberwachungssystem.
- :green_heart:[Searchlight](https://github.com/searchlight/searchlight)  :fire::fire: - Searchlight/Icinga führt regelmäßig verschiedene Überprüfungen einer Kubernetes Cluster und sendet Benachrichtigungen, wenn ein Problem erkannt wird.
- :green_heart:[Sloop](https://github.com/salesforce/sloop)  :fire::fire::fire: - Sloop-Monitore Kubernetes, Aufzeichnung von Ereignissen und Änderungen des Ressourcenzustands und Bereitstellung von Visualisierungen, um das Debuggen vergangener Ereignisse zu unterstützen.
- :green_heart:[Thanos](https://github.com/thanos-io/thanos)  :fire::fire::fire::fire::fire: Thanos ist eine Reihe von Komponenten, die zu einem hochverfügbaren metrischen System mit unbegrenzter Speicherkapazität zusammengesetzt werden können.
- :green_heart:[K8Studio](https://github.com/guiqui/k8Studio)  :fire::fire::fire: - K8Studio IDE zum Verwalten und Visualisieren Kubernetes Cluster.
- :green_heart:[KubeDiagrams](https://github.com/philippemerle/KubeDiagrams)  :fire: - Generieren Kubernetes Architekturdiagramme von Kubernetes Manifestdateien, Kustomisierungsdateien, Helm-Diagramme und tatsächlicher Clusterzustand.

### Backup und Restore
- :green_heart:[katafygio](https://github.com/bpineau/katafygio)  :fire: - katafygio entdeckt Kubernetes Objekte (Bereitstellungen, Dienste, ...) und speichern diese kontinuierlich als Yaml-Dateien in einem Git-Repository.
- :green_heart:[Velero](https://github.com/vmware-tanzu/velero)  :fire::fire::fire::fire::fire: Velero (früher Heptio Ark) bietet Ihnen Werkzeuge zum Sichern und Wiederherstellen Ihrer Kubernetes Clusterressourcen und persistente Volumina.

### Sicherheit und Compliance
- :green_heart:[Datree](https://github.com/datreeio/datree)  :fire::fire::fire::fire::fire: - Datree ist ein CLI-Tool, das unterstützt Kubernetes Administratoren in ihren Rollen, indem sie verhindern, dass Entwickler Fehler in Kubernetes Konfigurationen, die dazu führen können, dass Cluster in der Produktion ausfallen.
- :green_heart:[Deepfence ThreatMapper](https://github.com/deepfence/ThreatMapper)  :fire::fire::fire: Apache v2, leistungsstarker Runtime Vulnerability Scanner für Kubernetes, virtuelle Maschinen und Serverless.
- :green_heart:[Falco](https://github.com/falcosecurity/falco)  :fire::fire::fire::fire::fire: Falco ist ein Verhaltensaktivitätsmonitor, der entwickelt wurde, um anomale Aktivitäten in Ihren Anwendungen zu erkennen. Sie können Falco verwenden, um die Laufzeitsicherheit Ihrer Kubernetes Anwendungen und interne Komponenten.
- :green_heart:[Gatekeeper](https://github.com/open-policy-agent/gatekeeper)  :fire::fire::fire::fire::fire: Policy Controller für Kubernetes
- :green_heart:[Intents operator](https://github.com/otterize/intents-operator)  :fire::fire: Verwalten von Netzwerkrichtlinien, Istio Authorization Policies und Kafka ACLs in einem Kubernetes Cluster mit Leichtigkeit.
- :green_heart:[k-rail](https://github.com/cruise-automation/k-rail)  :fire::fire: - k-rail ist ein Tool zur Durchsetzung von Workload-Richtlinien für KubernetesEs kann Ihnen helfen, einen Multi-Mieter-Cluster mit minimaler Störung und maximaler Geschwindigkeit zu sichern.
- :green_heart:[Konstraint](https://github.com/plexsystems/konstraint)  :fire::fire: Konstraint ist ein CLI-Tool zur Unterstützung bei der Erstellung und Verwaltung von Einschränkungen bei der Verwendung von Gatekeeper.
- :green_heart:[kube-bench](https://github.com/aquasecurity/kube-bench)  :fire::fire::fire::fire::fire: kube-bench ist eine Go-Anwendung, die überprüft, ob Kubernetes sicher eingesetzt wird, indem die im ZIS dokumentierten Kontrollen durchgeführt werden Kubernetes Benchmark.
- :green_heart:[kube-hunter](https://github.com/aquasecurity/kube-hunter)  :fire::fire::fire::fire::fire: - kube-hunter jagt auf Sicherheitslücken in Kubernetes Cluster.
- :green_heart:[KubeLinter](https://github.com/stackrox/kube-linter)  :fire::fire::fire::fire: KubeLinter ist ein statisches Analyse-Tool, das überprüft Kubernetes YAML-Dateien und Helm-Diagramme, um sicherzustellen, dass die darin dargestellten Anwendungen den Best Practices entsprechen.
- :green_heart:[Kubesploit](https://github.com/cyberark/kubesploit)  :fire::fire::fire: Kubesploit ist ein plattformübergreifender HTTP/2 Command & Control Server und Agent, der für containerisierte Umgebungen in Golang geschrieben wurde und auf dem Merlin-Projekt von Russel Van Tuyl (@Ne0nd0g) aufbaut.
- :green_heart:[KubiScan](https://github.com/cyberark/KubiScan)  :fire::fire::fire: - Ein Werkzeug zum Scannen Kubernetes Cluster für riskante Berechtigungen in KubernetesRBAC-Autorisierungsmodell (Role-based Access Control).
- :green_heart:[Kyverno](https://github.com/kyverno/kyverno)  :fire::fire::fire::fire: - Kyverno ist ein politischer Motor für KubernetesEs kann Konfigurationen mithilfe von Zugangskontrollen und Hintergrundscans validieren, mutieren und erzeugen.
- :green_heart:[Netchecks](https://github.com/hardbyte/netchecks/)  :fire: - Set von Tools zum Testen von Netzwerkbedingungen und zur Feststellung, dass sie wie erwartet sind.
- :green_heart:[Permission manager](https://github.com/sighupio/permission-manager)  :fire::fire::fire: Permission Manager ist eine von SIGHUP entwickelte Anwendung, die ein super einfaches und benutzerfreundliches RBAC-Management für Kubernetes.
- :green_heart:[rakkess](https://github.com/corneliusweig/rakkess)  :fire::fire::fire: kubectl Plugin zeigt eine Zugriffsmatrix für Serverressourcen
- :green_heart:[Rönd](https://github.com/rond-authz/rond)  :fire: Rönd ist ein Open Source Leichtgewicht Kubernetes Sidecar-Container, mit dem Sie Ihre APIs mit einfachen Sicherheitsrichtlinien schützen können. Es ermöglicht Ihnen auch nativ, Ihre RBAC / ABAC-Lösung zu erstellen.
- :green_heart:[Teleport](https://github.com/gravitational/teleport)  :fire::fire::fire::fire::fire: Teleport Unified Access Plane ermöglicht es Ingenieuren, überall schnell auf jede Computerressource zuzugreifen.


### Dienstmaschen
- :green_heart:[Istio](https://github.com/istio/istio)  :fire::fire::fire::fire::fire: Eine offene Plattform zur Verbindung, Verwaltung und Sicherung von Microservices.
- :green_heart:[Linkerd](https://github.com/linkerd/linkerd)  :fire::fire::fire::fire::fire: Linkerd ist ein transparentes Service-Mesh, das moderne Anwendungen sicher und vernünftig macht.
- :green_heart:[Open Service Mesh](https://github.com/openservicemesh/osm/)  :fire::fire::fire::fire::fire: Open Service Mesh (OSM) ist ein leichtes, erweiterbares Cloud Native Service Mesh, das es Benutzern ermöglicht, Funktionen für hochdynamische Microservice-Umgebungen einheitlich zu verwalten, zu sichern und out-of-the-box zu erhalten.


### Entwicklungswerkzeuge
- :green_heart:[Cyclops](https://github.com/cyclops-ui/cyclops)  :fire::fire: Anpassbare UI für Kubernetes Einsätze
- :green_heart:[Eclipse JKube](https://github.com/eclipse/jkube)  :fire::fire: - Tools und Plugins für Java-Entwickler, mit denen Sie Container-Images zusammen mit den erforderlichen Manifesten erstellen können, um Ihre Anwendungen für Kubernetes.
- :green_heart:[garden](https://github.com/garden-io/garden)  :fire::fire::fire::fire::fire: - Garten bietet Produktions-like Kubernetes Testumgebungen für Integrationstests, QA und Entwicklung.
- :green_heart:[gefyra](https://github.com/gefyrahq/gefyra)  :fire::fire::fire: -Gefyra blazingly-schnell, felsenfest, lokale Anwendungsentwicklung mit Kubernetes.
- :green_heart:[ko](https://github.com/google/ko)  :fire::fire::fire::fire::fire: - `ko` ist ein Tool zum Erstellen und Bereitstellen von Golang-Anwendungen für Kubernetes.
- :green_heart:[Konfig](https://github.com/cloud66-oss/konfig)  :fire: Konfig ist eine Kubernetes freundliche Rails gem. Es kann Konfiguration und Geheimnisse aus YAML oder Ordnern mit einzelnen Dateien laden und sie auf die gleiche Weise Ihrer Anwendung präsentieren.
- :green_heart:[kubevious](https://github.com/kubevious/Kubevious)  :fire::fire::fire::fire: Kubevious macht alle für die Anwendung relevanten Konfigurationen an einem Ort. Das spart den Betreibern viel Zeit, wodurch die Notwendigkeit entfällt, Einstellungen nachzuschlagen und in Selektoren und Labels zu graben.
- :green_heart:[kubectl-warp](https://github.com/ernoaapa/kubectl-warp)  :fire::fire: - Kubernetes CLI-Plugin zum Synchronisieren und Ausführen lokaler Dateien in Pod on Kubernetes
- :green_heart:[kubernix](https://github.com/saschagrunert/kubernix)  :fire::fire::fire: - Dieses Projekt zielt darauf ab, eine einzige Abhängigkeit zu schaffen Kubernetes Cluster für lokale Test-, Versuchs- und Entwicklungszwecke.
- :green_heart:[Makisu](https://github.com/uber/makisu)  :fire::fire::fire::fire::fire: Makisu ist ein schnelles und flexibles Docker Image Build Tool, das für unprivilegierte containerisierte Umgebungen wie Mesos oder Kubernetes.
- :green_heart:[mirrord](https://github.com/metalbear-co/mirrord)  :fire::fire::fire::fire::fire: Mirrord verbindet Ihren lokalen Prozess und Ihre Cloud-Umgebung und führt lokalen Code unter Cloud-Bedingungen aus.
- :green_heart:[Monokle](https://github.com/kubeshop/monokle)  :fire::fire::fire: Monokle hilft Ihnen beim Erstellen, Bearbeiten und Validieren von Yaml-Manifesten, Visualisieren und Validieren von Ressourcenlinks und Abhängigkeiten, Verbinden und Vergleichen von Ressourcen mit Ihren Clustern, Debuggen der Ausgabe von kustomize oder helm und mehr!
- :green_heart:[Okteto](https://github.com/okteto/okteto)  :fire::fire::fire::fire: - `okteto` beschleunigt den Entwicklungsworkflow von Kubernetes Anträge.
- :green_heart:[Telepresence](https://github.com/telepresenceio/telepresence)  :fire::fire::fire::fire::fire: Telepresence bietet schnelle, realistische lokale Entwicklung für Kubernetes Microservices.
- :green_heart:[Tilt](https://github.com/tilt-dev/tilt)  :fire::fire::fire::fire::fire: - Tilt unterstützt die Multi-Service-Entwicklung und stellt sicher, dass sie sich verhalten.
- :green_heart:[Tye](https://github.com/dotnet/tye)  :fire::fire::fire::fire::fire: Tye ist ein Entwickler-Tool, das die Entwicklung, das Testen und die Bereitstellung von Microservices und verteilten Anwendungen erleichtert.
- [Aptakube](https://aptakube.com) - Ein moderner, leichter und Multicluster-Desktop-Client für KubernetesVerbinden Sie sich mit mehreren Clustern gleichzeitig, um alle Ihre Ressourcen anzuzeigen, zu bearbeiten und zu verwalten.

### Datenverarbeitung und Machine Learning
- :green_heart:[Kubeflow](https://github.com/kubeflow/kubeflow)  :fire::fire::fire::fire::fire: Kubeflow ist eine Cloud Native Plattform für maschinelles Lernen, die auf den internen Machine Learning Pipelines von Google basiert.
- :green_heart:[nos](https://github.com/nebuly-ai/nos)  :fire::fire: - `nos` ist eine Open-Source-Plattform, um KI-Workloads effizient auszuführen Kubernetes, die GPU-Auslastung zu erhöhen und die Infrastruktur- und Betriebskosten zu senken.
- :green_heart:[Strimzi](https://github.com/strimzi/strimzi-kafka-operator)  :fire::fire::fire::fire::fire: Strimzi bietet eine Möglichkeit, einen Apache Kafka-Cluster auf Kubernetes oder OpenShift in verschiedenen Bereitstellungskonfigurationen.
- :green_heart:[Volcano](https://github.com/volcano-sh/volcano)  :fire::fire::fire::fire: - Volcano ist ein Batch-System, das auf Kubernetes.
- :green_heart:[yunikorn](https://github.com/apache/incubator-yunikorn-core)  :fire::fire: - ein leichter, universeller Ressourcen-Scheduler für Container-Orchestrator-Systeme.

### Datenmanagement
- :green_heart:[Kubegres](https://github.com/reactive-tech/kubegres)  :fire::fire::fire: Kubegres ist ein Kubernetes Betreiber, der die Bereitstellung eines oder mehrerer Cluster von PostgreSql-Pods ermöglicht, wobei die Datenreplikation und das Failover out-of-the-box aktiviert sind.
- :green_heart:[Postgres Operator](https://github.com/CrunchyData/postgres-operator)  :fire::fire::fire::fire::fire: PGO, der Postgres-Operator von Crunchy Data, bietet Ihnen eine deklarative Postgres-Lösung, die Ihre PostgreSQL-Cluster automatisch verwaltet.
- :green_heart:[MongoDB Community Kubernetes Operator](https://github.com/mongodb/mongodb-kubernetes-operator)  :fire::fire: - Das ist ein Kubernetes Betreiber, der die MongoDB Community in Kubernetes Cluster.
- :green_heart:[MySQL Operator for Kubernetes](https://github.com/mysql/mysql-operator)  :fire: Der MYSQL Operator für Kubernetes ist ein Betreiber für Kubernetes Verwalten von MySQL InnoDB Cluster-Setups innerhalb eines Kubernetes Cluster.
- :green_heart:[Redis Operator](https://github.com/spotahome/redis-operator)  :fire::fire::fire: - Redis Operator erstellt/konfiguriert/verwaltet Redis-Failovers Kubernetes.

### Verschiedenes
- :green_heart:[Agones](https://github.com/googleforgames/agones)  :fire::fire::fire::fire::fire: Agones ist eine Bibliothek zum Hosten, Ausführen und Skalieren von dedizierten Spielservern auf Kubernetes.
- :green_heart:[AWS Controllers for Kubernetes](https://github.com/aws/aws-controllers-k8s)  :fire::fire::fire::fire: AWS Controller für Kubernetes Mit (ACK) können Sie AWS-Serviceressourcen direkt aus Kubernetes.
- :green_heart:[AWS Node Termination Handler](https://github.com/aws/aws-node-termination-handler)  :fire::fire::fire: - A Kubernetes Daemonset übernimmt die Abschaltung der EC2-Instanz
- :green_heart:[Brigade](https://github.com/brigadecore/brigade/)  :fire::fire::fire::fire::fire: Brigade ist das Werkzeug zum Erstellen von Pipelines für Kubernetes.
- :green_heart:[Crossplane](https://github.com/crossplane/crossplane)  :fire::fire::fire::fire::fire: Crossplane ist eine Open Source Kubernetes Add-on, das jeden Cluster mit der Fähigkeit zur Bereitstellung und Verwaltung von Cloud-Infrastruktur, Diensten und Anwendungen erweitert.
- :green_heart:[Descheduler for Kubernetes](https://github.com/kubernetes-sigs/descheduler)  :fire::fire::fire::fire::fire: - Descheduling Pods von Knoten basierend auf Richtlinien
- :green_heart:[Devtron](https://github.com/devtron-labs/devtron)  :fire::fire::fire::fire: Es ist als Selbstbedienungsplattform für die Operationalisierung und Wartung von Anwendungen (AppOps) auf Kubernetes auf entwicklerfreundliche Weise konzipiert.
- :green_heart:[OpenCost](https://github.com/opencost/opencost)  :fire::fire::fire::fire::fire: - OpenCost-Modelle geben Teams Einblick in aktuelle und historische Kubernetes Ausgaben und Ressourcenzuweisung.
- :green_heart:[K8s-Cleaner](https://github.com/gianlucam76/k8s-cleaner)  :fire: - `k8s-cleaner` identifiziert und entfernt nicht verwendete Ressourcen.
- :green_heart:[K8sPurger](https://github.com/yogeshkk/K8sPurger)  :fire: - `K8sPurger` Jagd ungenutzte Ressourcen in Kubernetes.
- :green_heart:[KubeEdge](https://github.com/kubeedge/kubeedge)  :fire::fire::fire::fire::fire: KubeEdge baut auf Kubernetes und erweitert die native containerisierte Anwendungsorchestrierung und Geräteverwaltung auf Hosts am Edge.
- :green_heart:[KubePug](https://github.com/rikatz/kubepug)  :fire::fire: - Ein Tool zur Überprüfung von Deprecations vor dem Upgrade Kubernetes Version
- :green_heart:[Kube No Trouble](https://github.com/doitintl/kube-no-trouble)  :fire::fire::fire::fire::fire: - Überprüfen Sie Ihre Cluster auf die Verwendung veralteter APIs
- :green_heart:[Shell-operator](https://github.com/flant/shell-operator)  :fire::fire::fire::fire: - Shell-Operator ist ein Tool zum Ausführen ereignisgesteuerter Skripte in einem Kubernetes Cluster.

## Guides, Dokumentationen, Blogs und Learnings

### Leitfäden
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) Eine umfassende Einführung in Kubernetes Architektur
- [A Deep Dive Into Kubernetes Schema Validation](https://www.datree.io/resources/kubernetes-schema-validation) Ein Guide über die Kubernetes Schema und wie man es mit OSS und nativen Tools validiert
- [A Guide to the Kubernetes Networking Model](https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/) - Ein ausführlicher Durchlauf von Kubernetes Vernetzung
- [Amazon EKS Best Practices Guide for Security](https://aws.github.io/aws-eks-best-practices/) Dieser Leitfaden bietet Ratschläge zum Schutz von Informationen, Systemen und Vermögenswerten, die auf EKS angewiesen sind, und bietet gleichzeitig einen Geschäftswert durch Risikobewertungen und Minderungsstrategien.
- [Amazon EKS Node Drainer](https://github.com/aws-samples/amazon-k8s-node-drainer)  :fire: Ein Leitfaden und ein Beispiel, um alle ausrangierbaren Pods von einem EC2-Knoten zu sperren und zu vertreiben, der beendet wird.
- [Comparison of Kubernetes Ingress controllers](https://docs.google.com/spreadsheets/d/191WWNpjJ2za6-nbG4ZoUMXMpUK8KlCIosvQB0f-oq3k/htmlview?pru=AAABdXUHlbs*g6XkyoZXhanlhRazst77Xw) - Diese Forschung vergleicht die Fähigkeiten von 14 verschiedenen Kubernetes Ingress-Controller.  
- [Configuring HA Kubernetes cluster on bare metal servers with kubeadm](https://medium.com/faun/configuring-ha-kubernetes-cluster-on-bare-metal-servers-with-kubeadm-1-2-1e79f0f7857b) Ein Leitfaden zum Aufstehen eines HA Kubernetes Cluster auf Bare Metal Servern mit kubeadm.
- [Introduction to Using Google Kubernetes Engine; Explain Like I’m Five!](https://medium.com/faun/google-kubernetes-engine-explain-like-im-five-1890e550c099) Erstellen Sie Ihr erstes Managed Kubernetes Cluster bei Google Kubernetes Motor mit Terraform.
- [Kubernetes Network Policy Recipes](https://github.com/ahmetb/kubernetes-network-policy-recipes)  :fire::fire::fire::fire::fire: - Dieses Repository enthält verschiedene Anwendungsfälle von Kubernetes Netzwerkrichtlinien und Beispiel-YAML-Dateien, um in Ihrem Setup zu nutzen.
- [Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)  :fire::fire::fire::fire::fire: - Kubernetes The Hard Way führt Sie durch Bootstrapping eine hoch verfügbare Kubernetes Cluster mit End-to-End-Verschlüsselung zwischen Komponenten und RBAC-Authentifizierung.
- [Kubernetes Working Group for Multi-Tenancy](https://github.com/kubernetes-sigs/multi-tenancy)  :fire::fire::fire: - Dies ist ein Arbeitsplatz für Multi-Tenancy-bezogene Vorschläge und Prototypen.
- [Production grade Kubernetes Monitoring using Prometheus](https://medium.com/faun/production-grade-kubernetes-monitoring-using-prometheus-78144b835b60) - Eine ausführliche Anleitung zum Einsatz der Prometheus-Überwachungslösung.
- [The Illustrated Children’s Guide to Kubernetes](https://www.cncf.io/phippy/the-childrens-illustrated-guide-to-kubernetes/) - Grafische Erklärungen von Kubernetes
- [Troubleshooting Kubernetes deployments](https://learnk8s.io/a/troubleshooting-kubernetes.pdf) - Ein Flussdiagramm zur Fehlerbehebung einer Kubernetes-Bereitstellung bei Problemen
 - [Vertical Pod Autoscaling: The Definitive Guide](https://povilasv.me/vertical-pod-autoscaling-the-definitive-guide/) Eine ausführliche Erklärung über Kubernetes VPA: was es ist, wie es funktioniert, wie man es benutzt und welche Einschränkungen es hat. 
- [Writing Your First Kubernetes Operator](https://medium.com/faun/writing-your-first-kubernetes-operator-8f3df4453234) - In diesem Artikel sehen wir, wie Sie Ihre erste erstellen und bereitstellen Kubernetes Betreiber mit dem Operator SDK.

### Blogs und Videos
- [10 most common mistakes using kubernetes](https://blog.pipetail.io/posts/2020-05-04-most-common-mistakes-k8s/) - Häufige Fallstricke und wie man sie vermeidet.  
- [How the Department of Defense Moved to Kubernetes and Istio](https://www.youtube.com/watch?v=YjZ4AZ7hRM0) - Konzentrieren Sie sich auf den Sidecar-Sicherheitsstapel, der Envoy- und Sidecar-Container nutzt, um eine Null-Trust-Sicherheit und eine eingebrannte Mehrschicht-Sicherheit zu gewährleisten.  
- [Kubernetes at Reddit: Tales from Production](https://youtu.be/WTbIBqNcjoQ) - Hören Sie von Erfolgen, teilen Sie den Herzschmerz der Produktionsexplosionen und erhalten Sie einen Einblick in das, was für eines der geschäftigsten Web-Eigenschaften der Welt gut funktioniert hat und was nicht.  
- [Kubernetes Failure Stories](https://github.com/hjacobs/kubernetes-failure-stories)  :fire::fire::fire::fire::fire: - Eine zusammengestellte Liste von Links zu öffentlichen Misserfolgsgeschichten im Zusammenhang mit Kubernetes.  
- [Life of a Packet](https://www.youtube.com/watch?v=0Omvgd7Hg1I) - Den Pfad des Netzwerkverkehrs im Kubernetes System.  
- [OPA Deep Dive](https://www.youtube.com/watch?v=Uj2N9S58GLU) - Tauchen Sie ein in einige aufregende neue Features im OPA-Projekt, das von den Co-Creators vorgestellt wurde.  
- [Scaling Kubernetes to 2,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-2500-nodes/) + [Scaling Kubernetes to 7,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-7500-nodes/) - Probleme, denen Sie beim Laufen in großem Maßstab begegnen werden Kubernetes Workloads.
- [Service Mesh Comparison](https://servicemesh.es/) - Eine einfache Entschädigung, um bei der Auswahl einer der Service-Mesh-Implementierungen zu helfen.  
- [ArgoCD Best Practices](https://datree.io/resources/argocd-best-practices-you-should-know)

### Lernen und Dokumentationen
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) Eine umfassende Einführung in Kubernetes Architektur
- [ConfigMaps in Kubernetes: how they work and what you should remember](https://blog.flant.com/configmaps-in-kubernetes-how-they-work-and-what-you-should-remember/) - Verständnis der Entwicklung von ConfigMaps, wie sie funktionieren und was passiert, wenn sie sich ändern. 
- [Configuring Redis using a ConfigMap](https://kubernetes.io/docs/tutorials/configuration/configure-redis-using-configmap/) - Eine Komplettlösung, die ein reales Beispiel für die Konfiguration von Redis mit einer ConfigMap bietet
- [Example: Deploying Cassandra with a StatefulSet](https://kubernetes.io/docs/tutorials/stateful-application/cassandra/) - Dieses Tutorial zeigt Ihnen, wie Sie Apache Cassandra auf KubernetesCassandra, eine Datenbank, benötigt eine dauerhafte Speicherung, um Daten dauerhaft zu erhalten.
- [Example: Deploying PHP Guestbook application with Redis](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/) - Dieses Tutorial zeigt Ihnen, wie Sie eine einfache, mehrstufige Webanwendung erstellen und bereitstellen Kubernetes und Docker.
- [Example: Deploying WordPress and MySQL with Persistent Volumes](https://kubernetes.io/docs/tutorials/stateful-application/mysql-wordpress-persistent-volume/) - Dieses Tutorial zeigt Ihnen, wie Sie eine WordPress-Website und eine MySQL-Datenbank mit Minikube bereitstellen.
- [Exposing an External IP Address to Access an Application in a Cluster](https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address/) - Dieser Leitfaden zeigt, wie man eine Kubernetes Dienstobjekt, das eine externe IP-Adresse freigibt.
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) - Eine offizielle Liste der häufig verwendeten kubectl-Befehle und Flags.  
- [Kubectl Kubernetes CheatSheet](https://github.com/dennyzhang/cheatsheet-kubernetes-A4)  :fire::fire::fire::fire: - Ein Spickzettel mit vielen hilfreichen Kubectl-Befehlen
- [Kubernetes API Reference Docs](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/) - Einen Überblick über die grundlegenden Arten von Ressourcen, die von der Kubernetes API und ihre primären Funktionen.  
- [Learn Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/) - Dieses Tutorial bietet einen Überblick über die Grundlagen der Kubernetes Cluster-Orchestrierungssystem.
- [Play with Kubernetes](https://labs.play-with-k8s.com/) - Spielen mit Kubernetes ist ein Spielplatz, der es Benutzern ermöglicht zu laufen K8s Cluster in Sekundenschnelle.
- [Ready-to-use commands and tips for kubectl](https://blog.flant.com/ready-to-use-commands-and-tips-for-kubectl/) - Verschiedene kubectl Tipps und Tricks von Flants Ingenieuren.  
- [Running ZooKeeper, A Distributed System Coordinator](https://kubernetes.io/docs/tutorials/stateful-application/zookeeper/) - Dieses Tutorial zeigt, wie Apache Zookeeper auf Kubernetes Verwendung von StatefulSets, PodDisruptionBudgets und PodAntiAffinity.
- [Set Up a CI/CD Pipeline with Kubernetes](https://www.linux.com/audience/enterprise/set-cicd-pipeline-kubernetes-part-1-overview/) - Eine End-to-End-Anleitung zum Einrichten einer CI/CD-Pipeline mit Kubernetes.
- [StatefulSet Basics](https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/) - Dieses Tutorial bietet eine Einführung in die Verwaltung von Anwendungen mit StatefulSets.
- [Webinar: K8s with OPA Gatekeeper](https://www.youtube.com/watch?v=v4wJE3I8BYM) - Wie Sie OPA verwenden, um zu kontrollieren, was Endbenutzer im Cluster tun können, und wie Sie sicherstellen können, dass Cluster den Unternehmensrichtlinien entsprechen.  

### Zertifizierungsleitfäden
- [Certified Kubernetes Security Specialist - CKSS](https://github.com/ijelliti/CKSS-Certified-Kubernetes-Security-Specialist)  :fire::fire: - Dieses Repository ist eine Sammlung von Ressourcen zur Vorbereitung auf das Certified Kubernetes Security Specialist (CKSS) Prüfung.
- [CKS "Certified Kubernetes security specialist certification](https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist)  :fire::fire::fire::fire: - Kubernetes Sicherheitsressourcen hauptsächlich aus Material, das während der Prüfung erlaubt ist, und zusätzliche optionale Elemente, die Ihnen helfen, Ihre Container- und Kubernetes-Sicherheitsreise voranzutreiben.
- [How to pass the Certified Kubernetes Administrator (CKA) exam on the first attempt](https://medium.com/faun/how-to-pass-certified-kubernetes-administrator-cka-exam-on-first-attempt-36c0ceb4c9e) Ein Leitfaden zum Bestehen der CKA-Prüfung
- [The ultimate CKA "Certfified Kuberenetes Administator" resource since exam inception](https://github.com/walidshaari/Kubernetes-Certified-Administrator)  - Ein aktualisiertes Repo von offiziellen Ressourcen, das Ihnen hilft, die CKA-Prüfung zu meistern, sowie einige zusätzliche Ressourcen, um Ihre Kubernetes-Verwaltungskenntnisse zu konsolidieren.
- [Kubernetes Exam Simulator](https://killer.sh/) - CKS / CKA / CKAD-Prüfungen Szenarien und Umgebung.  

## Beitrag

Beiträge willkommen! Lesen Sie [contribution guidelines](contributing.md) zuerst.


## Lizenz

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

Soweit gesetzlich möglich, hat Tom Huang auf alle Urheberrechte verzichtet und
verwandte oder benachbarte Rechte an diesem Werk.
