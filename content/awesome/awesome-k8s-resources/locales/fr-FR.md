# Sélection de ressources Kubernetes [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

Une liste soignée de génial Kubernetes outils et ressources.

Inspiré par [awesome](https://github.com/sindresorhus/awesome) liste et [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws).

## Le compteur de fureur d'impression

* Dépôts avec 0050+ étoiles : :fire:
* Dépôts avec 0200+ étoiles : :fire::fire:
* Dépôts avec 0500+ étoiles : :fire::fire::fire:
* Dépôts avec 1000+ étoiles : :fire::fire::fire::fire:
* Dépôts avec 2000+ étoiles : :fire::fire::fire::fire::fire:

Idées tirées [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws). 


## Sommaire
- [Outils et bibliothèques](#tools-and-libraries)
  - [Outils de ligne de commande](#command-line-tools)
  - [Fourniture de modules](#cluster-provisioning)
  - [Automatisation et CI/CD](#automation-and-cicd)
  - [Gestion des ressources des grappes](#cluster-resources-management)
  - [Gestion des secrets](#secrets-management)
  - [Réseautage](#networking)
  - [Stockage](#storage)
  - [Essais et dépannage](#testing-and-troubleshooting)
  - [Surveillance, alertes et visualisation](#monitoring-alerts-and-visualization)
  - [Sauvegarde et restauration](#backup-and-restore)
  - [Sécurité et conformité](#security-and-compliance)
  - [Mesh de service](#service-mesh)
  - [Outils de développement](#development-tools)
  - [Traitement des données et apprentissage automatique](#data-processing-and-machine-learning)
  - [Gestion des données](#data-management)
  - [Divers](#miscellaneous)
- [Guides, documentations, blogs et apprentissages](#guides-documentations-blogs-and-learnings)
  - [Guides](#guides)
  - [Blogs et vidéos](#blogs-and-videos)
  - [Apprentissage et documentation](#learnings-and-documentations)
  - [Guides de certification](#certification-guides)
- [Contribuer](#contribute)
- [Licence](#license)


## Outils et bibliothèques
Éléments avec :green_heart: indiquer les projets open source. 

### Outils de ligne de commande
- :green_heart:[Helm](https://github.com/helm/helm)  :fire::fire::fire::fire::fire: - Helm est un outil de gestion des cartes. Les graphiques sont des paquets de préconfigurés Kubernetes des ressources.
- :green_heart:[Helmfile](https://github.com/helmfile/helmfile)  :fire::fire::fire::fire::fire: - Helmfile est une spécification déclarative pour déployer des cartes de barre.
- :green_heart:[Helmwave](https://github.com/helmwave/helmwave)  :fire::fire::fire: - Helmwave est un outil natif pour déployer vos cartes Helm. C'est comme Docker-Compose, mais pour Helm.
- :green_heart:[Infra](https://github.com/infrahq/infra)  :fire::fire::fire: - Infra vous permet de découvrir et d'accéder aux infrastructures (par exemple: Kubernetes, bases de données). Nous vous aidons à connecter un fournisseur d'identité comme le répertoire actif Okta ou Azure, et les utilisateurs/groupes de cartes avec les permissions que vous définissez à votre infrastructure.
- :green_heart:[K9s](https://github.com/derailed/k9s)  :fire::fire::fire::fire::fire: - K9s fournit un UI terminal pour interagir avec votre Kubernetes les groupes.
- :green_heart:[kapp](https://github.com/vmware-tanzu/carvel-kapp)  :fire::fire::fire: - kapp est un outil de déploiement simple axé sur le concept de "Kubernetes application" — un ensemble de ressources avec le même label
- :green_heart:[kconnect](https://github.com/fidelity/kconnect)  :fire::fire: - kconnect est un utilitaire CLI qui peut être utilisé pour découvrir et accéder en toute sécurité Kubernetes les grappes dans plusieurs environnements opérationnels.
- :green_heart:[kl](https://github.com/robinovitch61/kl)  :fire: - kl est une application terminal interactive pour interagir avec les journaux dans de nombreux conteneurs et clusters.
- :green_heart:[Ktunnel](https://github.com/omrikiei/ktunnel)  :fire::fire: - Ktunnel est un outil CLI qui établit un tunnel inverse entre un cluster de kubernes et votre machine locale.
- :green_heart:[Kubebox](https://github.com/astefanutti/kubebox)  :fire::fire::fire::fire: - Terminal et console Web pour Kubernetes
- :green_heart:[Kubetail](https://github.com/johanhaleby/kubetail)  :fire::fire::fire::fire::fire: - script Bash qui vous permet d'agréger les logs (tail/follow) de plusieurs pods dans un seul flux.
- :green_heart:[kube-shell](https://github.com/cloudnativelabs/kube-shell)  :fire::fire::fire::fire: - Kube-shell: une coque intégrée pour travailler avec le Kubernetes CLI.
- (En milliers de dollars des États-Unis)[kubecolor](https://github.com/kubecolor/kubecolor) - colorise la sortie kubectl
- :green_heart:[kubectl tree](https://github.com/ahmetb/kubectl-tree)  :fire::fire::fire::fire: - Un plugin kubectl pour explorer les relations de propriété entre Kubernetes les objets par l'intermédiaire des propriétaires.
- :green_heart:[kubectl-aliases](https://github.com/ahmetb/kubectl-aliases)  :fire::fire::fire::fire::fire: - Ce dépôt contient un script pour générer des centaines d'alias shell pratiques pour kubectl.
- :green_heart:[kubectx + kubens](https://github.com/ahmetb/kubectx)  :fire::fire::fire::fire::fire: - Oui. `kubectx` vous aide à basculer d'un cluster à l'autre, et `kubens` vous aide à changer Kubernetes les espaces de noms en douceur.
- :green_heart:[kube-ps1](https://github.com/jonmosco/kube-ps1)  :fire::fire::fire::fire::fire: - kube-ps1: Un script qui vous permet d'ajouter le courant Kubernetes contexte et namespace configurés sur kubectl vers vos chaînes d'invites Bash/Zsh (c'est-à-dire le $PS1).
- :green_heart:[kubediff](https://github.com/weaveworks/kubediff)  :fire::fire::fire: - Kbediff est un outil pour Kubernetes pour vous montrer les différences entre votre configuration courante et votre configuration contrôlée par version.
- :green_heart:[kubeprompt](https://github.com/jlesquembre/kubeprompt)  :fire: - Isole KUBECONFIG dans chaque coquille et montre le courant Kubernetes contexte/namespace dans votre invite
- :green_heart:[Kubevela](https://github.com/oam-dev/kubevela)  :fire::fire::fire::fire::fire: - KubeVela est une plate-forme facile à utiliser mais extensible qui leur permet de concevoir et de expédier des applications avec un minimum d'effort.
- :green_heart:[Move2Kube](https://github.com/konveyor/move2kube)  :fire::fire: - Un outil pour aider les utilisateurs à migrer leurs applications à partir de plateformes existantes comme Cloud Foundry Kubernetes et Openshift. Analyse le code source de l'application et génère Kubernetes YAML, Helm Charts, Tekton Pipelines, etc. L'analyse et la génération peuvent être fortement personnalisées pour produire la sortie exacte que vous voulez.
- :green_heart:[nova](https://github.com/FairwindsOps/nova/)  :fire::fire: - Nova scanne votre cluster pour les cartes Helm installées, puis les compare à tous les dépôts Helm connus.
- :green_heart:[Plural](https://github.com/pluralsh/plural)  :fire::fire: - Plural est un outil CLI et une plateforme de gestion globale DevOps pour déployer, gérer et surveiller rapidement les applications open-source sur Kubernetes.
- :green_heart:[RBAC Lookup](https://github.com/FairwindsOps/rbac-lookup)  :fire::fire::fire: - RBAC Lookup est un CLI qui vous permet de trouver facilement Kubernetes rôles et rôles de regroupement liés à tout utilisateur, compte de service ou nom de groupe.
- :green_heart:[stern](https://github.com/stern/stern)  :fire::fire::fire::fire::fire: - Stern vous permet de suivre plusieurs gousses sur Kubernetes et plusieurs contenants dans la goupille.

### Fourniture de modules
- :green_heart:[Bootkube](https://github.com/kubernetes-sigs/bootkube)  :fire::fire::fire::fire: - Bootkube est un outil pour lancer auto-organisé Kubernetes les groupes.
- :green_heart:[Claudie](https://github.com/berops/claudie)  :fire: - Clusters multi-cloud avec chaque nœud dans un fournisseur de cloud différent.
- :green_heart:[Cluster API](https://github.com/kubernetes-sigs/cluster-api)  :fire::fire::fire::fire::fire: - API en grappe est une Kubernetes sous-projet axé sur la fourniture d'API et d'outils déclaratifs pour simplifier la fourniture, la mise à niveau et l'exploitation de multiples Kubernetes les groupes.
- :green_heart:[eksctl](https://github.com/weaveworks/eksctl)  :fire::fire::fire::fire::fire: - Oui. `eksctl` est un outil simple CLI pour créer des clusters sur EKS - Amazon nouvelle gestion Kubernetes service pour EC2.
- :green_heart:[k0s](https://github.com/k0sproject/k0s)  :fire::fire::fire::fire::fire: - k0s - Friction zéro Kubernetes (La simple, solide et certifiée Kubernetes Répartition)
- :green_heart:[k3d](https://github.com/rancher/k3d)  :fire::fire::fire::fire::fire: - k3d, et Windows.,destroy, la moitié de la mémoire, fortement disponible, est un outil pour exécuter des clusters locaux k3s dans docker. C'est un binaire unique d'environ 20 Mo. Vous devez avoir Docker installé.
- :green_heart:[k3s](https://github.com/rancher/k3s)  :fire::fire::fire::fire::fire: - Léger Kubernetes. Facile à installer,Kubernetes les grappes de la ligne de commande.
- :green_heart:[kind](https://github.com/kubernetes-sigs/kind)  :fire::fire::fire::fire::fire: - kind est un outil pour exécuter local Kubernetes groupes utilisant le conteneur Docker "nodes".
- :green_heart:[kops](https://github.com/kubernetes/kops)  :fire::fire::fire::fire::fire: - Oui. `kops` vous aide à créer, genre, améliorer et maintenir le niveau de production
- :green_heart:[kube-aws](https://github.com/kubernetes-incubator/kube-aws)  :fire::fire::fire::fire: - Oui. `kube-aws` est un outil en ligne de commande pour créer/mise à jour/dessroy Kubernetes des grappes sur AWS.
- :green_heart:[kubespray](https://github.com/kubernetes-sigs/kubespray)  :fire::fire::fire::fire::fire: - Déployer une production prête Kubernetes Groupe
- :green_heart:[microK8s](https://github.com/ubuntu/microk8s)  :fire::fire::fire::fire::fire: - Le plus petit, le plus rapide Kubernetes
- :green_heart:[Minikube](https://github.com/kubernetes/minikube)  :fire::fire::fire::fire::fire: - minikube met en œuvre un local Kubernetes cluster sur macOS,Linux, tous dans un binaire de moins de 100 Mo.
- :green_heart:[Talos Linux](https://github.com/siderolabs/talos)  :fire::fire::fire::fire::fire: - Talos Linux est un système d'exploitation minimal, immuable et sécurisé qui installe la vanille Kubernetes - pour les datacenters de production, K8s@home, et Edge.
- :green_heart:[karpenter]([https://karpenter.sh](https://github.com/aws/karpenter-provider-aws))  :fire::fire::fire::fire::fire: - Karpenter est un Kubernetes Node Autoscaler construit pour la flexibilité, la performance et la simplicité.
- :green_heart:[Kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/) - kubeadm effectue les actions nécessaires pour obtenir un minimum de cluster viable vers le haut et le fonctionnement.
- :green_heart:[vCluster](https://github.com/loft-sh/vcluster/) : :fire::fire::fire::fire::fire: - vCluster vous permet de créer un virtuel entièrement fonctionnel Kubernetes les grappes, en réduisant considérablement les coûts et en améliorant la polyvalence et l'isolement par rapport aux Kubernetes. 
  
### Automatisation et CI/CD
- :green_heart:[Argo CD](https://github.com/argoproj/argo-cd)  :fire::fire::fire::fire::fire: - Argo CD est un outil de livraison continu de déclaration, GitOps Kubernetes.
- :green_heart:[Argo Events](https://github.com/argoproj/argo-events)  :fire::fire::fire::fire: - Argo Events est un cadre d'automatisation de workflow axé sur les événements pour Kubernetes qui vous aide à déclencher K8s les objets, Argo Workflows, les charges de travail sans serveur, etc.
- :green_heart:[Argo Rollouts](https://github.com/argoproj/argo-rollouts)  :fire::fire::fire::fire: - Argo Rollouts controller, utilise la ressource personnalisée Rollout pour fournir des stratégies de déploiement supplémentaires comme Blue Green et Canary Kubernetes.
- :green_heart:[Argo Workflows](https://github.com/argoproj/argo)  :fire::fire::fire::fire::fire: - Argo Workflows est un moteur de flux de travail à source ouverte pour orchestrer des tâches parallèles sur Kubernetes.
- :green_heart:[Argocd autopilot](https://github.com/argoproj-labs/argocd-autopilot)  :fire::fire::fire: - Le pilote automatique Argo-CD est un outil qui offre une façon avisée d'installer Argo-CD et de gérer les dépôts GitOps.
- :green_heart:[Flagger](https://github.com/weaveworks/flagger)  :fire::fire::fire::fire::fire: - Flagger est un outil de livraison progressif qui automatise le processus de libération des applications Kubernetes.
- :green_heart:[Flux2](https://github.com/fluxcd/flux2)  :fire::fire::fire::fire::fire: - Flux version 2 est construit à partir du sol jusqu'à l'utilisation Kubernetes' API système d'extension, et d'intégrer avec Prométhée et d'autres composants de base de la Kubernetes l'écosystème.
- :green_heart:[k8s-image-swapper](https://github.com/estahn/k8s-image-swapper/)  :fire::fire: - Oui. `k8s-image-swapper` est un webhook mutant pour Kubernetes, télécharger des images dans votre propre registre et pointer les images vers ce nouvel emplacement.
- :green_heart:[Kubero](https://github.com/kubero-dev/kubero)  :fire::fire::fire::fire::fire: - Une alternative gratuite et auto-accueillée Heroku PaaS Kubernetes qui implémente GitOps
- :green_heart:[KubeSphere](https://github.com/kubesphere/kubesphere)  :fire::fire::fire::fire::fire: - KubeSphere est un système d'exploitation distribué fournissant la pile native du cloud avec Kubernetes en tant que noyau, et vise à être l'architecture plug-and-play pour les applications tierces intégration transparente pour stimuler son écosystème.
- :green_heart:[Reloader](https://github.com/stakater/Reloader)  :fire::fire::fire::fire::fire: - Reloader peut regarder les changements dans `ConfigMap` et `Secret` et faire des mises à niveau de roulement sur Pods avec leurs associés `DeploymentConfigs`, `Deployments`, `Daemonsets` et `Statefulsets`.
- :green_heart:[terranetes-controller](https://github.com/appvia/terranetes-controller)  :fire: - Le contrôleur Terranetes permet à l'équipe plate-forme de fournir des capacités en libre-service autour des ressources en nuage.
- :green_heart:[Skaffold](https://github.com/GoogleContainerTools/skaffold)  :fire::fire::fire::fire::fire: - Skaffold est un outil en ligne de commande qui facilite le développement continu pour Kubernetes les demandes.
- :green_heart:[Spinnaker](https://github.com/spinnaker/spinnaker)  :fire::fire::fire::fire::fire: - Spinnaker est une plate-forme de livraison continue open-source pour libérer les changements logiciels avec une grande vitesse et la confiance.
- :green_heart:[TF-controller](https://github.com/weaveworks/tf-controller)  :fire: - TF-controller est un contrôleur expérimental pour Flux pour réconcilier les ressources Terraform de la manière GitOps.
- :green_heart:[werf](https://github.com/werf/werf)  :fire::fire::fire::fire::fire: - werf est un outil de colle CLI Git, Docker, Helm & Kubernetes avec n'importe quel système d'IC pour mettre en oeuvre IC/CD et GitOps. 
- :green_heart:[Weave GitOps](https://github.com/weaveworks/weave-gitops)  :fire::fire: - Weave GitOps est une plate-forme de développeurs open source simple pour les personnes qui veulent des applications natives du cloud, sans avoir besoin Kubernetes expertise.
- :green_heart:[Otomi - Self-hosted PaaS for K8s](https://github.com/redkubes/otomi-core)  :fire::fire::fire::fire: - Otomi ajoute des outils centrés sur le développeur et l'exploitation, l'automatisation et le libre-service développeur en plus de Kubernetes dans toute infrastructure ou nuage, pour coder, construire, libérer, déployer, sécuriser, exploiter et surveiller les applications conteneurisées.
:green_heart:[Cozystack - Self-hosted PaaS for K8s](https://github.com/cozystack/cozystack)  :fire::fire::fire::fire: - un PaaS autonome clé en main conçu pour fonctionner sur des clusters de Talos Linux durcis, apportant la sécurité en premier Kubernetes l'automatisation à votre propre métal. Parfait si vous construisez un nuage souverain ou des piles natives de bord.

### Gestion des ressources des grappes
- :green_heart:[Clusterpedia](https://github.com/clusterpedia-io/clusterpedia)  :fire: - Les clusterpedia sont utilisés pour des recherches complexes de ressources sur plusieurs clusters, supportent la recherche simultanée d'un seul type de ressource ou de multiples types de ressources existant dans plusieurs clusters.
- :green_heart:[Grafana Tanka](https://github.com/grafana/tanka)  :fire::fire::fire::fire: - L'alternative propre, concise et super flexible à YAML pour votre Kubernetes Groupe.
- :green_heart:[KEDA](https://github.com/kedacore/keda)  :fire::fire::fire::fire::fire: - KEDA permet d'effectuer un calibrage automatique à grains fins (y compris à partir de zéro) pour les événements Kubernetes charge de travail.
- :green_heart:[Kruise](https://github.com/openkruise/kruise)  :fire::fire::fire::fire::fire: - Kruise se compose de plusieurs contrôleurs qui prolongent et complètent Kubernetes les contrôleurs principaux pour la gestion de la charge de travail.
- :green_heart:[KubeDirector](https://github.com/bluek8s/kubedirector)  :fire::fire: - KubeDirector utilise la norme Kubernetes (K8s) les installations de ressources personnalisées et d'extensions d'API pour mettre en place des grappes d'applications à grande échelle.
- :green_heart:[Kubenav](https://github.com/kubenav/kubenav)  :fire::fire::fire::fire: - kubenav est le navigateur de votre Kubernetes Des grappes dans ta poche.
- :green_heart:[Liqo](https://github.com/liqotech/liqo)  :fire::fire: - Liqo implémente le partage dynamique des ressources entre différents Kubernetes les grappes (p. ex., le déchargement des modules et des services), l'appui à la gouvernance décentralisée.
- :green_heart:  [Meshery](https://github.com/meshery/meshery)  :fire::fire::fire::fire::fire: - Meshery est un gestionnaire cloud-natif open-source qui permet la conception et la gestion de tous Kubernetes- une infrastructure et des applications basées.
- :green_heart:[Pluto](https://github.com/FairwindsOps/pluto)  :fire::fire::fire::fire: - Pluton est un utilitaire pour aider les utilisateurs à trouver déprécié Kubernetes apiVersions dans leurs dépôts de code et leurs sorties de barre.
- :green_heart:[Polaris](https://github.com/FairwindsOps/polaris)  :fire::fire::fire::fire::fire: - Polaris est un moteur de politique open source pour Kubernetes qui valide et remédie à la configuration des ressources.
- :green_heart:[Projectsveltos](https://github.com/projectsveltos/addon-manager)  :fire: Projetsveltos est un Kubernetes contrôleur add-on qui simplifie le déploiement et la gestion d'add-ons et d'applications sur plusieurs clusters.
- :green_heart:[The Hierarchical Namespace Controller](https://github.com/kubernetes-sigs/multi-tenancy/tree/master/incubator/hnc)  :fire::fire::fire: - Les espaces de noms hiérarchiques facilitent le partage de votre cluster en rendant les espaces de noms plus puissants.

### Gestion des secrets
- :green_heart:[Kubernetes External Secrets](https://github.com/godaddy/kubernetes-external-secrets)  :fire::fire::fire::fire::fire: - Oui. Kubernetes Secrets externes vous permet d'utiliser des systèmes de gestion de secrets externes, comme AWS Secrets Manager ou HashiCorp Vault, pour ajouter des secrets en toute sécurité dans Kubernetes.
- :green_heart:[Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets)  :fire::fire::fire::fire::fire: - Chiffrez votre secret dans un secret scellé, qui est sûr de stocker - même dans un dépôt public.
- :green_heart:[akv2k8s](https://github.com/SparebankenVest/azure-key-vault-to-kubernetes)  :fire::fire: - Azure Key Vault à Kubernetes (akv2k8s) rendra les objets Azure Key Vault disponibles à Kubernetes de deux manières: comme natif Kubernetes Secrets; comme variables d'environnement directement injectées dans votre application Container

### Réseautage
- :green_heart:[Calico Networking](https://github.com/projectcalico/calico)  :fire::fire::fire::fire::fire: - Calico est une solution de réseau et de sécurité réseau open source pour les conteneurs, les machines virtuelles et les charges de travail en métal nu
- :green_heart:[cert-manager](https://github.com/jetstack/cert-manager)  :fire::fire::fire::fire::fire: - le contrôleur est un Kubernetes ajouter pour automatiser la gestion et la délivrance des certificats TLS de diverses sources émettrices.
- :green_heart:[cilium](https://github.com/cilium/cilium)  :fire::fire::fire::fire::fire: - Cilium est une solution de mise en réseau, d'observation et de sécurité avec un dataplane eBPF.
- :green_heart:[CoreDNS](https://github.com/coredns/coredns)  :fire::fire::fire::fire::fire: - CoreDNS est un serveur DNS rapide et flexible qui fonctionne sur Kubernetes.
- :green_heart:[ingress-nginx](https://github.com/kubernetes/ingress-nginx)  :fire::fire::fire::fire::fire: - Oui. `ingress-nginx` est un contrôleur d'entrée pour Kubernetes utilisant NGINX comme proxy inverse et équilibreur de charge.
- :green_heart:[Kong for Kubernetes](https://github.com/Kong/kubernetes-ingress-controller)  :fire::fire::fire::fire: - Configurer les plugins, la vérification de la santé, l'équilibrage de la charge et plus à Kong pour Kubernetes Services.
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - Un plugin kubectl qui utilise tcpdump et Wireshark pour démarrer une capture à distance sur n'importe quel pod dans votre Kubernetes Groupe.
- :green_heart:[kubectl trace](https://github.com/iovisor/kubectl-trace)  :fire::fire::fire::fire: - Oui. `kubectl trace` est un plugin kubectl qui vous permet de planifier l'exécution de programmes bpftrace dans votre Kubernetes Groupe.
- :green_heart:[Kube Karp](https://github.com/immanuelfodor/kube-karp)  :fire: - Ajouter une IP virtuelle flottante à Kubernetes nœuds de cluster pour l'équilibrage de charge facilement basé sur le protocole CARP
- :green_heart:[kubernetes-ingress](https://github.com/nginxinc/kubernetes-ingress)  :fire::fire::fire::fire::fire:  - Implémentation d'un contrôleur d'entrée pour NGINX et NGINX Plus (commercial).
- :green_heart:[kube-ovn](https://github.com/alauda/kube-ovn)  :fire::fire::fire::fire:  - A Kubernetes Tissu réseau pour les entreprises qui est riche en fonctions et facile dans les opérations.
- :green_heart:[loxilb](https://github.com/loxilb-io/loxilb)  :fire::fire::fire:  - A Kubernetes le régulateur de charge de service basé sur eBPF.
  
### Stockage
- :green_heart:[Longhorn](https://github.com/longhorn/longhorn)  :fire::fire::fire::fire::fire: - Longhorn est un système de stockage de blocs distribué pour Kubernetes.
- :green_heart:[OpenEBS](https://github.com/openebs/openebs)  :fire::fire::fire::fire::fire: - OpenEBS est la solution de stockage open-source la plus largement déployée et facile à utiliser Kubernetes.
- :green_heart:[Rook](https://github.com/rook/rook)  :fire::fire::fire::fire::fire: - Rook est un orchestre de stockage cloud-natif open source pour Kubernetes.

### Essais et dépannage
- :green_heart:[Chainsaw](https://github.com/kyverno/chainsaw)  :fire: - L'outil de test final pour Kubernetes les opérateurs.
- :green_heart:[Chaos Mesh](https://github.com/pingcap/chaos-mesh)  :fire::fire::fire::fire::fire: - Chaos Mesh® est une plate-forme d'ingénierie du Chaos qui orchestre le chaos Kubernetes environnement.
- :green_heart:[chaoskube](https://github.com/linki/chaoskube)  :fire::fire::fire::fire: - Oui. `chaoskube` tue périodiquement des gousses aléatoires dans votre Kubernetes Groupe.
- :green_heart:[Conftest](https://github.com/open-policy-agent/conftest)  :fire::fire::fire::fire: - Conftest vous aide à écrire des tests sur des données de configuration structurées.
- :green_heart:[DETIK](https://github.com/bats-core/bats-detik)  :fire: - Une bibliothèque qui simplifie les tests de bout en bout K8s applications en utilisant [BATS](https://github.com/bats-core/bats-core) assertions et requêtes en langage naturel.
- :green_heart:[k6](https://github.com/loadimpact/k6)  :fire::fire::fire::fire::fire: - k6 est un outil d'essai de charge moderne, en s'appuyant sur les années d'expérience de Load Impact dans l'industrie des tests de charge et de performance.
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - Un plugin kubectl qui utilise tcpdump et Wireshark pour démarrer une capture à distance sur n'importe quel pod dans votre Kubernetes Groupe.
- :green_heart:[Kube DOOM](https://github.com/storax/kubedoom)  :fire::fire::fire::fire: - Le prochain niveau d'ingénierie du chaos est là ! Tuer des gousses à l'intérieur de votre Kubernetes en les tirant à Doom !
- :green_heart:[kube-monkey](https://github.com/asobti/kube-monkey)  :fire::fire::fire::fire::fire: - Il supprime au hasard Kubernetes (k8s) modules dans le groupe encourageant et validant le développement de services résilients aux défaillances.
- :green_heart:[kube-score](https://github.com/zegl/kube-score)  :fire::fire::fire::fire: - Oui. `kube-score` est un outil qui effectue l'analyse de code statique de votre Kubernetes définition des objets.
- :green_heart:[Kubectl-debug](https://github.com/JamesTGrant/kubectl-debug)  :fire::fire::fire::fire::fire: - Oui. `kubectl-debug` est une solution hors d'état pour le dépannage des gousses d'exécution, qui vous permet d'exécuter un nouveau conteneur dans les gousses d'exécution pour le débogage.
- :green_heart:[KubeInvaders](https://github.com/lucky-sideburn/KubeInvaders)  :fire::fire::fire: - Grâce à KubeInvaders vous pouvez stresser Kubernetes cluster d'une manière amusante et vérifier comment il est résistant.
- :green_heart:[Kubetest](https://github.com/vapor-ware/kubetest)  :fire: - Kubethest est un plugin pytest qui facilite la gestion d'un Kubernetes cluster dans vos tests d'intégration.
- :green_heart:[Litmus](https://github.com/litmuschaos/litmus)  :fire::fire::fire::fire::fire: - Litmus fournit des outils pour orchestrer le chaos sur Kubernetes aider les ERS à trouver des faiblesses dans leurs déploiements.
- :green_heart:[popeye](https://popeyecli.io/)  :fire::fire::fire::fire::fire: - Popeye est un utilitaire qui scanne en direct Kubernetes groupe et rend compte des problèmes potentiels liés aux ressources et aux configurations déployées.
- :green_heart:[PowerfulSeal](https://github.com/bloomberg/powerfulseal)  :fire::fire::fire::fire: - PowerfulSeal injecte une défaillance dans votre Kubernetes pour détecter les problèmes le plus tôt possible.
- :green_heart:[Testkube](https://github.com/kubeshop/testkube)  :fire::fire::fire: - Testkube est un Kubernetes native Testing Framework for test orchestration and execution. Il vous permet d'exécuter n'importe quel de vos tests dans un Kubernetes Groupe. Intégre votre CI/CD et vous permet de suivre une approche GitOps à Tester tout en ayant une place centralisée pour tous vos résultats de test à travers tous les clusters.

### Surveillance, alertes et visualisation
- :green_heart:[BotKube](https://github.com/infracloudio/botkube)  :fire::fire::fire::fire: - L'intégration de BotKube avec Slack ou Mattermost vous aide à surveiller votre Kubernetes , de déboguer les déploiements critiques et de formuler des recommandations sur les pratiques standard en procédant à des contrôles sur les Kubernetes des ressources.
- :green_heart:[Canary Checker](https://github.com/flanksource/canary-checker)  :fire: - Canary Checker est une plate-forme de contrôle de santé kubernetes-native avec 30 types de contrôle de santé intégrés.
- :green_heart:[Cortex](https://github.com/cortexproject/cortex)  :fire::fire::fire::fire::fire: - Cortex fournit un stockage à long terme horizontal, extensible, très disponible, multi-tenu pour Prométhée.
- :green_heart:[Goldilocks](https://github.com/FairwindsOps/goldilocks)  :fire::fire::fire: - Goldilocks est un utilitaire qui peut vous aider à identifier un point de départ pour les demandes de ressources et les limites.
- :green_heart:[Goldpinger](https://github.com/bloomberg/goldpinger)  :fire::fire::fire::fire::fire: - Outil de débogage pour Kubernetes qui teste et affiche la connectivité entre les nœuds du cluster.
- :green_heart:[Grafana](https://github.com/grafana/grafana)  :fire::fire::fire::fire::fire: - Grafana vous permet d'interroger, de visualiser, d'alerter et de comprendre vos paramètres, où qu'ils soient stockés.
- :green_heart:[Helm Dashboard](https://github.com/komodorio/helm-dashboard)  :fire::fire::fire::fire: - L'interface manquante pour Helm. Le plugin Helm Dashboard offre une façon basée sur l'interface utilisateur pour afficher les graphiques Helm installés, voir leur historique de révision et les ressources correspondantes k8. 
- :green_heart:[Kiali](https://github.com/kiali/kiali)  :fire::fire::fire::fire::fire: - Kiali travaille avec Istio pour visualiser la topologie des mailles de service.
- :green_heart:[k8s-image-availability-exporter](https://github.com/flant/k8s-image-availability-exporter)  :fire: - Prométhée exportateur qui vous avertit proactivement des images qui sont définies dans Kubernetes objets mais ne sont pas disponibles dans le registre des conteneurs. 
- :green_heart:[kube-capacity](https://github.com/robscott/kube-capacity)  :fire::fire::fire: - Il s'agit d'un CLI simple qui donne un aperçu des demandes de ressources, des limites et de l'utilisation dans un Kubernetes Groupe.
- :green_heart:[Kubernetes Dashboard](https://github.com/kubernetes/dashboard)  :fire::fire::fire::fire::fire: - Oui. Kubernetes Tableau de bord est une interface utilisateur Web à but général pour Kubernetes les groupes.
- :green_heart:[Kubedev](https://github.com/relferreira/kubedev)  :fire: - Kbedev est une interface utilisateur puissante et magnifique pour gérer Kubernetes les groupes.
- :green_heart:[KubeHelper](https://github.com/KubeHelper/kubehelper)  :fire: - KubeHelper - simplifie beaucoup chaque jour Kubernetes les tâches de regroupement via une interface web.
- :green_heart:[Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server)  :fire::fire::fire::fire::fire: - Metrics Server est une source évolutive et efficace de paramètres de ressources de conteneurs pour Kubernetes pipelines d'escalade automatique intégrés.
- :green_heart:[Kubernetes Operational View](https://github.com/hjacobs/kube-ops-view)  :fire::fire::fire::fire: - Un outil qui vise à fournir un tableau opérationnel commun Kubernetes les groupes.
- :green_heart:[kube-state-metrics](https://github.com/kubernetes/kube-state-metrics)  :fire::fire::fire::fire::fire: - kube-state-metrics est un service simple qui écoute Kubernetes Serveur API et génère des métriques sur l'état des objets.
- :green_heart:[kubewatch](https://github.com/robusta-dev/kubewatch)  :fire::fire::fire::fire::fire: - Oui. `kubewatch` est Kubernetes observatoire qui publie actuellement la notification aux centres de collaboration/canaux de notification disponibles.
- :green_heart:[Lens](https://github.com/lensapp/lens)  :fire::fire::fire::fire::fire: - Lens c'est une interface utilisateur utile, attrayante, open source (UI) pour travailler avec Kubernetes les groupes.
- :green_heart:[Mizu](https://github.com/up9inc/mizu)  :fire::fire::fire: - Visualiseur de trafic API pour Kubernetes vous permettant de voir toutes les communications API entre microservices. Pensez TCPDump et Wireshark réinventés pour Kubernetes
- :green_heart:[Network mapper](https://github.com/otterize/network-mapper)  :fire::fire: - Carte Kubernetes le trafic et l'exportation sous forme de texte, d'intentions ou d'image.
- :green_heart:[Popeye](https://github.com/derailed/popeye)  :fire::fire::fire::fire::fire: - Popeye est un utilitaire qui scanne en direct Kubernetes groupe et rend compte des problèmes potentiels liés aux ressources et aux configurations déployées.
- :green_heart:[Prometheus](https://github.com/prometheus/prometheus)  :fire::fire::fire::fire::fire: - Prométhée, un projet de la Cloud Native Computing Foundation, est un système de surveillance des systèmes et des services.
- :green_heart:[Searchlight](https://github.com/searchlight/searchlight)  :fire::fire: - Projecteur/Icinga effectue périodiquement divers contrôles sur Kubernetes cluster et envoie des notifications si elle détecte un problème.
- :green_heart:[Sloop](https://github.com/salesforce/sloop)  :fire::fire::fire: - Moniteurs Sloop Kubernetes, l'enregistrement des histoires d'événements et des changements d'état des ressources et fournir des visualisations pour aider à déboguer les événements passés.
- :green_heart:[Thanos](https://github.com/thanos-io/thanos)  :fire::fire::fire::fire::fire: - Thanos est un ensemble de composants qui peuvent être composés dans un système métrique très disponible avec une capacité de stockage illimitée.
- :green_heart:[K8Studio](https://github.com/guiqui/k8Studio)  :fire::fire::fire: - K8Studio IDE pour gérer et visualiser Kubernetes Des grappes.
- :green_heart:[KubeDiagrams](https://github.com/philippemerle/KubeDiagrams)  :fire: - Générer Kubernetes diagrammes d'architecture de Kubernetes les fichiers manifestes, les fichiers de kustomisation, les graphiques Helm et l'état réel du cluster.

### Sauvegarde et restauration
- :green_heart:[katafygio](https://github.com/bpineau/katafygio)  :fire: - katafygio découvre Kubernetes objets (déploiements, services, ...), et les enregistrer en continu sous forme de fichiers yaml dans un dépôt git.
- :green_heart:[Velero](https://github.com/vmware-tanzu/velero)  :fire::fire::fire::fire::fire: - Velero (anciennement Heptio Ark) vous donne des outils pour sauvegarder et restaurer votre Kubernetes les ressources des grappes et les volumes persistants.

### Sécurité et conformité
- :green_heart:[Datree](https://github.com/datreeio/datree)  :fire::fire::fire::fire::fire: - Datree est un outil CLI qui supporte Kubernetes les administrateurs dans leurs rôles en empêchant les développeurs de faire des erreurs dans Kubernetes les configurations qui peuvent faire échouer les grappes dans la production.
- :green_heart:[Deepfence ThreatMapper](https://github.com/deepfence/ThreatMapper)  :fire::fire::fire: - Apache v2, puissant scanner de vulnérabilité d'exécution pour kubernetes, machines virtuelles et sans serveur.
- :green_heart:[Falco](https://github.com/falcosecurity/falco)  :fire::fire::fire::fire::fire: - Falco est un moniteur d'activité comportementale conçu pour détecter l'activité anormale dans vos applications. Vous pouvez utiliser Falco pour surveiller la sécurité d'exécution de votre Kubernetes les applications et les composants internes.
- :green_heart:[Gatekeeper](https://github.com/open-policy-agent/gatekeeper)  :fire::fire::fire::fire::fire: - Contrôleur politique pour Kubernetes
- :green_heart:[Intents operator](https://github.com/otterize/intents-operator)  :fire::fire: - Gérer les politiques de réseau, les politiques d'autorisation d'Istio et les ACL de Kafka Kubernetes cluster avec facilité.
- :green_heart:[k-rail](https://github.com/cruise-automation/k-rail)  :fire::fire: - k-rail est un outil d'application de la politique Kubernetes. Il peut vous aider à sécuriser un cluster multi-locataire avec une perturbation minimale et une vitesse maximale.
- :green_heart:[Konstraint](https://github.com/plexsystems/konstraint)  :fire::fire: - Konstraint est un outil CLI pour aider à la création et la gestion des contraintes lors de l'utilisation de Gatekeeper.
- :green_heart:[kube-bench](https://github.com/aquasecurity/kube-bench)  :fire::fire::fire::fire::fire: - kube-bench est une application Go qui vérifie si Kubernetes est déployé en toute sécurité en exécutant les vérifications documentées dans le SIC Kubernetes Points de référence.
- :green_heart:[kube-hunter](https://github.com/aquasecurity/kube-hunter)  :fire::fire::fire::fire::fire: - kube-hunter recherche des faiblesses de sécurité dans Kubernetes les groupes.
- :green_heart:[KubeLinter](https://github.com/stackrox/kube-linter)  :fire::fire::fire::fire: - KubeLinter est un outil d'analyse statique qui vérifie Kubernetes Les fichiers YAML et les cartes Helm pour s'assurer que les applications représentées en eux respectent les meilleures pratiques.
- :green_heart:[Kubesploit](https://github.com/cyberark/kubesploit)  :fire::fire::fire: - Kubesploit est un serveur et agent de commande HTTP/2 dédié aux environnements containerizzato écrits en Golang et construits sur le projet Merlin par Russel Van Tuyl (@Ne0nd0g).
- :green_heart:[KubiScan](https://github.com/cyberark/KubiScan)  :fire::fire::fire: - Un outil de numérisation Kubernetes cluster pour les autorisations risquées dans KubernetesLe modèle d'autorisation du contrôle d'accès fondé sur le rôle.
- :green_heart:[Kyverno](https://github.com/kyverno/kyverno)  :fire::fire::fire::fire: - Kyverno est un moteur de politique conçu pour Kubernetes. Il peut valider, muter et générer des configurations à l'aide de contrôles d'admission et d'analyses de fond.
- :green_heart:[Netchecks](https://github.com/hardbyte/netchecks/)  :fire: - Ensemble d'outils pour tester les conditions du réseau et affirmer qu'elles sont comme prévu.
- :green_heart:[Permission manager](https://github.com/sighupio/permission-manager)  :fire::fire::fire: - Permission Manager est une application développée par SIGHUP qui permet une gestion RBAC super facile et conviviale pour Kubernetes.
- :green_heart:[rakkess](https://github.com/corneliusweig/rakkess)  :fire::fire::fire: - plugin kubectl pour afficher une matrice d'accès aux ressources du serveur
- :green_heart:[Rönd](https://github.com/rond-authz/rond)  :fire: - Rönd est une source ouverte légère Kubernetes conteneur sidecar qui vous aide à protéger vos API avec des politiques de sécurité simples. Il vous permet également nativement de construire votre solution RBAC/ABAC.
- :green_heart:[Teleport](https://github.com/gravitational/teleport)  :fire::fire::fire::fire::fire: - Teleport Unified Access Plane permet aux ingénieurs d'accéder rapidement à toute ressource informatique n'importe où.


### Mesh de service
- :green_heart:[Istio](https://github.com/istio/istio)  :fire::fire::fire::fire::fire: - Une plateforme ouverte pour connecter, gérer et sécuriser les microservices.
- :green_heart:[Linkerd](https://github.com/linkerd/linkerd)  :fire::fire::fire::fire::fire: - Linkerd est un maillage de service transparent, conçu pour rendre les applications modernes sûres et saines.
- :green_heart:[Open Service Mesh](https://github.com/openservicemesh/osm/)  :fire::fire::fire::fire::fire: - Open Service Mesh (OSM) est un maillage de service Cloud Native léger et extensible qui permet aux utilisateurs de gérer uniformément, de sécuriser et d'obtenir des fonctionnalités d'observation hors de la boîte pour des environnements de microservices très dynamiques.


### Outils de développement
- :green_heart:[Cyclops](https://github.com/cyclops-ui/cyclops)  :fire::fire: - UI personnalisable pour Kubernetes déploiements
- :green_heart:[Eclipse JKube](https://github.com/eclipse/jkube)  :fire::fire: - Outils et plugins pour les développeurs Java qui vous aident à créer des images conteneur ainsi que les manifestes requis pour déployer vos applications à Kubernetes.
- :green_heart:[garden](https://github.com/garden-io/garden)  :fire::fire::fire::fire::fire: - Jardin fournit la production-comme Kubernetes des environnements de test pour les tests d'intégration, d'AQ et de développement.
- :green_heart:[gefyra](https://github.com/gefyrahq/gefyra)  :fire::fire::fire: -Gefyra flamboyant-rapide, rock-solid, développement d'applications locales Kubernetes.
- :green_heart:[ko](https://github.com/google/ko)  :fire::fire::fire::fire::fire: - Oui. `ko` est un outil pour construire et déployer des applications Kubernetes.
- :green_heart:[Konfig](https://github.com/cloud66-oss/konfig)  :fire: - Konfig est un Kubernetes Des rails sympathiques. Il peut charger la configuration et les secrets à partir de YAML ou de dossiers avec des fichiers individuels et les présenter à votre application de la même manière.
- :green_heart:[kubevious](https://github.com/kubevious/Kubevious)  :fire::fire::fire::fire: - Kubevious rend toutes les configurations pertinentes à l'application en un seul endroit. Cela économise beaucoup de temps des opérateurs, éliminant la nécessité de rechercher les paramètres et de creuser dans les sélecteurs et les étiquettes.
- :green_heart:[kubectl-warp](https://github.com/ernoaapa/kubectl-warp)  :fire::fire: - Oui. Kubernetes plugin CLI pour synchroniser et exécuter des fichiers locaux dans Pod on Kubernetes
- :green_heart:[kubernix](https://github.com/saschagrunert/kubernix)  :fire::fire::fire: - Ce projet vise à fournir une dépendance unique Kubernetes clusters à des fins locales d'essais, d'expérimentations et de développement.
- :green_heart:[Makisu](https://github.com/uber/makisu)  :fire::fire::fire::fire::fire: - Makisu est un outil de construction d'images Docker rapide et flexible conçu pour les environnements conteneurisés non privilégiés tels que Mesos ou Kubernetes.
- :green_heart:[mirrord](https://github.com/metalbear-co/mirrord)  :fire::fire::fire::fire::fire: - miroir relie votre processus local et votre environnement cloud, et exécute le code local dans des conditions nuageuses.
- :green_heart:[Monokle](https://github.com/kubeshop/monokle)  :fire::fire::fire: - Monokle vous aide à créer, éditer et valider les manifestes yaml, visualiser et valider les liens et les dépendances des ressources, connecter et comparer les ressources à vos clusters, déboguer la sortie de kustomize ou helm, et plus encore !
- :green_heart:[Okteto](https://github.com/okteto/okteto)  :fire::fire::fire::fire: - Oui. `okteto` accélère le processus de développement de Kubernetes les demandes.
- :green_heart:[Telepresence](https://github.com/telepresenceio/telepresence)  :fire::fire::fire::fire::fire: - Téléprésence fournit un développement local rapide et réaliste pour Kubernetes les microservices.
- :green_heart:[Tilt](https://github.com/tilt-dev/tilt)  :fire::fire::fire::fire::fire: - Tilt stimule le développement multi-services et s'assure qu'ils se comportent.
- :green_heart:[Tye](https://github.com/dotnet/tye)  :fire::fire::fire::fire::fire: - Tye est un outil de développement qui facilite le développement, l'essai et le déploiement de microservices et d'applications distribuées.
- [Aptakube](https://aptakube.com) - Un client de bureau moderne, léger et multi-cluster pour Kubernetes. Connectez-vous à plusieurs clusters simultanément pour visualiser, modifier et gérer toutes vos ressources.

### Traitement des données et apprentissage automatique
- :green_heart:[Kubeflow](https://github.com/kubeflow/kubeflow)  :fire::fire::fire::fire::fire: - Kubeflow est une plate-forme Cloud Native pour l'apprentissage automatique basée sur les pipelines d'apprentissage automatique internes de Google.
- :green_heart:[nos](https://github.com/nebuly-ai/nos)  :fire::fire: - Oui. `nos` est une plateforme open-source pour gérer efficacement les charges de travail d'IA sur Kubernetes, en augmentant l'utilisation des GPU et en réduisant les coûts d'infrastructure et de fonctionnement.
- :green_heart:[Strimzi](https://github.com/strimzi/strimzi-kafka-operator)  :fire::fire::fire::fire::fire: - Strimzi fournit un moyen d'exécuter un cluster Apache Kafka sur Kubernetes ou OpenShift dans différentes configurations de déploiement.
- :green_heart:[Volcano](https://github.com/volcano-sh/volcano)  :fire::fire::fire::fire: - Volcano est un système par lots construit sur Kubernetes.
- :green_heart:[yunikorn](https://github.com/apache/incubator-yunikorn-core)  :fire::fire: - un programme de ressources universel léger pour les systèmes d'orchestreurs de conteneurs.

### Gestion des données
- :green_heart:[Kubegres](https://github.com/reactive-tech/kubegres)  :fire::fire::fire: - Kubegres est un Kubernetes operator permettant de déployer une ou plusieurs grappes de pods PostgreSql avec réplication des données et décrochage activé hors de la boîte.
- :green_heart:[Postgres Operator](https://github.com/CrunchyData/postgres-operator)  :fire::fire::fire::fire::fire: - PGO, l'opérateur Postgres de Cronchy Data, vous offre une solution Postgres déclarative qui gère automatiquement vos clusters PostgreSQL.
- :green_heart:[MongoDB Community Kubernetes Operator](https://github.com/mongodb/mongodb-kubernetes-operator)  :fire::fire: - C'est une Kubernetes Opérateur qui déploie la Communauté MongoDB Kubernetes les groupes.
- :green_heart:[MySQL Operator for Kubernetes](https://github.com/mysql/mysql-operator)  :fire: - L'opérateur MYSQL pour Kubernetes est un opérateur pour Kubernetes gestion de MySQL InnoDB Configurations de cluster à l'intérieur d'un Kubernetes Groupe.
- :green_heart:[Redis Operator](https://github.com/spotahome/redis-operator)  :fire::fire::fire: - Redis Operator crée/configure/gestionne des redis-failovers au sommet Kubernetes.

### Divers
- :green_heart:[Agones](https://github.com/googleforgames/agones)  :fire::fire::fire::fire::fire: - Agones est une bibliothèque pour l'hébergement, l'exécution et la mise à niveau des serveurs de jeux dédiés sur Kubernetes.
- :green_heart:[AWS Controllers for Kubernetes](https://github.com/aws/aws-controllers-k8s)  :fire::fire::fire::fire: - Contrôleurs AWS pour Kubernetes (ACK) vous permet de définir et d'utiliser des ressources de service AWS directement à partir de Kubernetes.
- :green_heart:[AWS Node Termination Handler](https://github.com/aws/aws-node-termination-handler)  :fire::fire::fire: - A Kubernetes Daemonset pour gérer gracieusement l'arrêt d'instance EC2
- :green_heart:[Brigade](https://github.com/brigadecore/brigade/)  :fire::fire::fire::fire::fire: - Brigade est l'outil pour créer des pipelines pour Kubernetes.
- :green_heart:[Crossplane](https://github.com/crossplane/crossplane)  :fire::fire::fire::fire::fire: - Le Crossplane est une source ouverte Kubernetes add-on qui étend tout cluster avec la capacité de fournir et de gérer l'infrastructure, les services et les applications cloud.
- :green_heart:[Descheduler for Kubernetes](https://github.com/kubernetes-sigs/descheduler)  :fire::fire::fire::fire::fire: - Déminage des pods de nœuds basés sur les politiques
- :green_heart:[Devtron](https://github.com/devtron-labs/devtron)  :fire::fire::fire::fire: - Il est conçu comme une plate-forme libre-service pour l'opérationnalisation et la maintenance des applications (AppOps) sur kubernetes d'une manière conviviale de développeur.
- :green_heart:[OpenCost](https://github.com/opencost/opencost)  :fire::fire::fire::fire::fire: - Les modèles OpenCost donnent une visibilité aux équipes dans le courant et l'historique Kubernetes les dépenses et l'affectation des ressources.
- :green_heart:[K8s-Cleaner](https://github.com/gianlucam76/k8s-cleaner)  :fire: - Oui. `k8s-cleaner` identifie et supprime les ressources inutilisées.
- :green_heart:[K8sPurger](https://github.com/yogeshkk/K8sPurger)  :fire: - Oui. `K8sPurger` Chasser les ressources inutilisées Kubernetes.
- :green_heart:[KubeEdge](https://github.com/kubeedge/kubeedge)  :fire::fire::fire::fire::fire: - KubeEdge est construit sur Kubernetes et étend l'orchestration d'applications containerizzato native et la gestion des appareils aux hôtes à l'Edge.
- :green_heart:[KubePug](https://github.com/rikatz/kubepug)  :fire::fire: - Un outil pour vérifier les déprécations avant la mise à niveau Kubernetes version
- :green_heart:[Kube No Trouble](https://github.com/doitintl/kube-no-trouble)  :fire::fire::fire::fire::fire: - Vérifiez facilement vos clusters pour l'utilisation des API obsolètes
- :green_heart:[Shell-operator](https://github.com/flant/shell-operator)  :fire::fire::fire::fire: - Shell-operator est un outil pour exécuter des scripts animés par des événements Kubernetes Groupe.

## Guides, documentations, blogs et apprentissages

### Guides
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - Une introduction complète Kubernetes architecture
- [A Deep Dive Into Kubernetes Schema Validation](https://www.datree.io/resources/kubernetes-schema-validation) - Un guide sur la Kubernetes schéma et comment le valider à l'aide d'OSS et d'outils natifs
- [A Guide to the Kubernetes Networking Model](https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/) - Une analyse approfondie Kubernetes réseau
- [Amazon EKS Best Practices Guide for Security](https://aws.github.io/aws-eks-best-practices/) - Ce guide fournit des conseils sur la protection de l'information, des systèmes et des biens qui dépendent de l'EKS tout en offrant une valeur opérationnelle grâce à des évaluations des risques et des stratégies d'atténuation.
- [Amazon EKS Node Drainer](https://github.com/aws-samples/amazon-k8s-node-drainer)  :fire: - Un guide et un exemple pour couper et expulser toutes les gousses évitables d'un noeud EC2 en cours de fin.
- [Comparison of Kubernetes Ingress controllers](https://docs.google.com/spreadsheets/d/191WWNpjJ2za6-nbG4ZoUMXMpUK8KlCIosvQB0f-oq3k/htmlview?pru=AAABdXUHlbs*g6XkyoZXhanlhRazst77Xw) - Cette recherche compare les capacités de 14 Kubernetes Contrôleurs d'entrée.  
- [Configuring HA Kubernetes cluster on bare metal servers with kubeadm](https://medium.com/faun/configuring-ha-kubernetes-cluster-on-bare-metal-servers-with-kubeadm-1-2-1e79f0f7857b) - Un guide pour se lever Kubernetes cluster sur des serveurs métalliques nus avec kubeadm.
- [Introduction to Using Google Kubernetes Engine; Explain Like I’m Five!](https://medium.com/faun/google-kubernetes-engine-explain-like-im-five-1890e550c099) - Création de votre première gestion Kubernetes cluster sur Google Kubernetes Moteur utilisant Terraform.
- [Kubernetes Network Policy Recipes](https://github.com/ahmetb/kubernetes-network-policy-recipes)  :fire::fire::fire::fire::fire: - Ce dépôt contient divers cas d'utilisation Kubernetes Politiques réseau et échantillon de fichiers YAML pour tirer parti de votre configuration.
- [Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)  :fire::fire::fire::fire::fire: - Oui. Kubernetes Le Hard Way vous guide à travers bootstraping un très disponible Kubernetes cluster avec chiffrement de bout en bout entre les composants et l'authentification RBAC.
- [Kubernetes Working Group for Multi-Tenancy](https://github.com/kubernetes-sigs/multi-tenancy)  :fire::fire::fire: - Il s'agit d'un lieu de travail pour les propositions et les prototypes liés à la location.
- [Production grade Kubernetes Monitoring using Prometheus](https://medium.com/faun/production-grade-kubernetes-monitoring-using-prometheus-78144b835b60) - Un guide détaillé pour déployer la solution de surveillance Prométhée.
- [The Illustrated Children’s Guide to Kubernetes](https://www.cncf.io/phippy/the-childrens-illustrated-guide-to-kubernetes/) - Explications graphiques Kubernetes
- [Troubleshooting Kubernetes deployments](https://learnk8s.io/a/troubleshooting-kubernetes.pdf) - Un organigramme pour dépanner un déploiement de kubernetes en cas de problèmes
 - [Vertical Pod Autoscaling: The Definitive Guide](https://povilasv.me/vertical-pod-autoscaling-the-definitive-guide/) - Une explication approfondie sur Kubernetes VPA: ce qu'il est, comment il fonctionne, comment l'utiliser et quelles limites il a. 
- [Writing Your First Kubernetes Operator](https://medium.com/faun/writing-your-first-kubernetes-operator-8f3df4453234) - Dans cet article, nous allons voir comment construire et déployer votre premier Kubernetes Exploitant utilisant le SDK de l'opérateur.

### Blogs et vidéos
- [10 most common mistakes using kubernetes](https://blog.pipetail.io/posts/2020-05-04-most-common-mistakes-k8s/) - Des pièges communs et comment les éviter.  
- [How the Department of Defense Moved to Kubernetes and Istio](https://www.youtube.com/watch?v=YjZ4AZ7hRM0) - Concentrez-vous sur la pile de sécurité du sidecar en mettant à profit les conteneurs d'Envoy et de sidecar pour garantir la sécurité zéro confiance et la sécurité multicouche au four.  
- [Kubernetes at Reddit: Tales from Production](https://youtu.be/WTbIBqNcjoQ) - Entendre les succès, partager le cœur brisé des explosions de production, et prendre connaissance de ce qui a et n'a pas bien fonctionné pour l'une des propriétés web les plus fréquentées du monde.  
- [Kubernetes Failure Stories](https://github.com/hjacobs/kubernetes-failure-stories)  :fire::fire::fire::fire::fire: - Une liste compilée de liens vers des histoires d'échecs Kubernetes.  
- [Life of a Packet](https://www.youtube.com/watch?v=0Omvgd7Hg1I) - Tracer le chemin du trafic réseau dans le Kubernetes système.  
- [OPA Deep Dive](https://www.youtube.com/watch?v=Uj2N9S58GLU) - Plongez profondément sur de nouvelles fonctionnalités passionnantes dans le projet OPA présenté par les co-créateurs.  
- [Scaling Kubernetes to 2,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-2500-nodes/) + [Scaling Kubernetes to 7,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-7500-nodes/) - Problèmes que vous rencontrerez lors de la course à grande échelle Kubernetes charge de travail.
- [Service Mesh Comparison](https://servicemesh.es/) - Une compensation facile pour aider à choisir une des implémentations de service Mesh.  
- [ArgoCD Best Practices](https://datree.io/resources/argocd-best-practices-you-should-know)

### Apprentissage et documentation
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - Une introduction complète Kubernetes architecture
- [ConfigMaps in Kubernetes: how they work and what you should remember](https://blog.flant.com/configmaps-in-kubernetes-how-they-work-and-what-you-should-remember/) - Comprendre l'évolution vers ConfigMaps, comment ils fonctionnent et ce qui se passe quand ils changent. 
- [Configuring Redis using a ConfigMap](https://kubernetes.io/docs/tutorials/configuration/configure-redis-using-configmap/) - Une passerelle qui fournit un exemple du monde réel de la configuration de Redis en utilisant une ConfigMap
- [Example: Deploying Cassandra with a StatefulSet](https://kubernetes.io/docs/tutorials/stateful-application/cassandra/) - Ce tutoriel vous montre comment exécuter Apache Cassandra sur Kubernetes. Cassandra, une base de données, a besoin de stockage persistant pour fournir la durabilité des données.
- [Example: Deploying PHP Guestbook application with Redis](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/) - Ce tutoriel vous montre comment construire et déployer une application web à plusieurs niveaux Kubernetes Et Docker.
- [Example: Deploying WordPress and MySQL with Persistent Volumes](https://kubernetes.io/docs/tutorials/stateful-application/mysql-wordpress-persistent-volume/) - Ce tutoriel vous montre comment déployer un site WordPress et une base de données MySQL en utilisant Minikube.
- [Exposing an External IP Address to Access an Application in a Cluster](https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address/) - Ce guide montre comment créer Kubernetes Objet de service qui expose une adresse IP externe.
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) - Une liste officielle des commandes et drapeaux kubectl couramment utilisés.  
- [Kubectl Kubernetes CheatSheet](https://github.com/dennyzhang/cheatsheet-kubernetes-A4)  :fire::fire::fire::fire: - Une feuille de triche contenant de nombreuses commandes utiles kubectl
- [Kubernetes API Reference Docs](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/) - Une vue d ' ensemble de haut niveau des types de ressources de base fournies par le Fonds Kubernetes API et leurs fonctions principales.  
- [Learn Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/) - Ce tutoriel fournit une passerelle des bases de la Kubernetes système d'orchestration en grappe.
- [Play with Kubernetes](https://labs.play-with-k8s.com/) - Jouer avec Kubernetes est une aire de jeux qui permet aux utilisateurs de courir K8s en quelques secondes.
- [Ready-to-use commands and tips for kubectl](https://blog.flant.com/ready-to-use-commands-and-tips-for-kubectl/) - Différents trucs et astuces de Kubectl par les ingénieurs de Flant.  
- [Running ZooKeeper, A Distributed System Coordinator](https://kubernetes.io/docs/tutorials/stateful-application/zookeeper/) - Ce tutoriel montre le fonctionnement d'Apache Zookeeper sur Kubernetes utilisant StatefulSets, PodDisruptionBudgets, et PodAntiAffinity.
- [Set Up a CI/CD Pipeline with Kubernetes](https://www.linux.com/audience/enterprise/set-cicd-pipeline-kubernetes-part-1-overview/) - Un guide de bout en bout pour créer un pipeline CI/CD Kubernetes.
- [StatefulSet Basics](https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/) - Ce tutoriel fournit une introduction à la gestion des applications avec StatefulSets.
- [Webinar: K8s with OPA Gatekeeper](https://www.youtube.com/watch?v=v4wJE3I8BYM) - Comment utiliser OPA pour contrôler ce que les utilisateurs finaux peuvent faire sur le cluster et comment s'assurer que les clusters sont conformes aux politiques de l'entreprise.  

### Guides de certification
- [Certified Kubernetes Security Specialist - CKSS](https://github.com/ijelliti/CKSS-Certified-Kubernetes-Security-Specialist)  :fire::fire: - Ce dépôt est une collection de ressources pour se préparer à Kubernetes Examen de spécialiste de la sécurité (CKSS).
- [CKS "Certified Kubernetes security specialist certification](https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist)  :fire::fire::fire::fire: - Oui. Kubernetes ressources de sécurité principalement à partir du matériel autorisé pendant l'examen, et des éléments optionnels supplémentaires pour vous aider à avancer votre conteneur et kubernetes voyage de sécurité.
- [How to pass the Certified Kubernetes Administrator (CKA) exam on the first attempt](https://medium.com/faun/how-to-pass-certified-kubernetes-administrator-cka-exam-on-first-attempt-36c0ceb4c9e) - Un guide pour réussir l'examen CKA
- [The ultimate CKA "Certfified Kuberenetes Administator" resource since exam inception](https://github.com/walidshaari/Kubernetes-Certified-Administrator)  - Une mise à jour des ressources officielles pour vous aider à maîtriser l'examen CKA ainsi que des ressources supplémentaires pour consolider vos connaissances d'administration de kubernetes.
- [Kubernetes Exam Simulator](https://killer.sh/) - CKS/CKA/CKAD des scénarios et de l'environnement.  

## Contribuer

Bienvenue ! Lire [contribution guidelines](contributing.md) D'abord.


## Licence

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

Dans la mesure du possible en vertu de la loi, Tom Huang a renoncé à tout droit d'auteur
droits connexes à cette œuvre.
