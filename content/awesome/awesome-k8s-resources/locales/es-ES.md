# Selección de recursos de Kubernetes [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

Una lista curada de impresionante Kubernetes herramientas y recursos.

Inspirado por [awesome](https://github.com/sindresorhus/awesome) lista y [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws).

## El Medidor Ardiente de la Awesomeness

* Repositorios con 0050+ estrellas: :fire:
* Repositorios con 0200+ estrellas: :fire::fire:
* Repositorios con 0500+ estrellas: :fire::fire::fire:
* Repositorios con 1000+ estrellas: :fire::fire::fire::fire:
* Repositorios con 2000+ estrellas: :fire::fire::fire::fire::fire:

Idea taken from [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws). 


## Índice
- [Herramientas y bibliotecas](#tools-and-libraries)
  - [Herramientas de línea de comandos](#command-line-tools)
  - [Cluster Provisioning](#cluster-provisioning)
  - [Automatización y CI/CD](#automation-and-cicd)
  - [Cluster Resources Management](#cluster-resources-management)
  - [Secrets Management](#secrets-management)
  - [Redes](#networking)
  - [Almacenamiento](#storage)
  - [Pruebas y solución de problemas](#testing-and-troubleshooting)
  - [Monitoreo, Alertas y Visualización](#monitoring-alerts-and-visualization)
  - [Respaldo y restauración](#backup-and-restore)
  - [Seguridad y cumplimiento](#security-and-compliance)
  - [Mesh de servicio](#service-mesh)
  - [Herramientas de desarrollo](#development-tools)
  - [Procesamiento de datos y aprendizaje automático](#data-processing-and-machine-learning)
  - [Gestión de datos](#data-management)
  - [Varios](#miscellaneous)
- [Guías, Documentación, Blogs y Aprendizaje](#guides-documentations-blogs-and-learnings)
  - [Guías](#guides)
  - [Blogs y videos](#blogs-and-videos)
  - [Aprendizaje y documentación](#learnings-and-documentations)
  - [Guías de certificación](#certification-guides)
- [Gentileza](#contribute)
- [Licencia](#license)


## Herramientas y bibliotecas
Temas con :green_heart: indicar los proyectos de código abierto. 

### Herramientas de línea de comandos
- :green_heart:[Helm](https://github.com/helm/helm)  :fire::fire::fire::fire::fire: - Helm es una herramienta para manejar Charts. Los gráficos son paquetes de preconfigurados Kubernetes recursos.
- :green_heart:[Helmfile](https://github.com/helmfile/helmfile)  :fire::fire::fire::fire::fire: - Helmfile es una especie declarativa para desplegar tablas de helm.
- :green_heart:[Helmwave](https://github.com/helmwave/helmwave)  :fire::fire::fire: - Helmwave es la herramienta helm3-native para desplegar sus Charts Helm. Es como Docker-Compose, pero para Helm.
- :green_heart:[Infra](https://github.com/infrahq/infra)  :fire::fire::fire: - Infra le permite descubrir y acceder a la infraestructura (por ejemplo. Kubernetes, bases de datos). Le ayudamos a conectar un proveedor de identidad como el directorio activo Okta o Azure, y mapear usuarios/grupos con los permisos que usted estableció en su infraestructura.
- :green_heart:[K9s](https://github.com/derailed/k9s)  :fire::fire::fire::fire::fire: - K9s proporciona una interfaz de usuario terminal para interactuar con su Kubernetes clusters.
- :green_heart:[kapp](https://github.com/vmware-tanzu/carvel-kapp)  :fire::fire::fire: - kapp es una herramienta de despliegue simple enfocada en el concepto de "Kubernetes aplicación" — un conjunto de recursos con la misma etiqueta
- :green_heart:[kconnect](https://github.com/fidelity/kconnect)  :fire::fire: - kconnect es una utilidad CLI que se puede utilizar para descubrir y acceder de forma segura Kubernetes clusters en múltiples entornos operativos.
- :green_heart:[kl](https://github.com/robinovitch61/kl)  :fire: - kl es una aplicación terminal interactiva para interactuar con troncos en muchos contenedores y racimos.
- :green_heart:[Ktunnel](https://github.com/omrikiei/ktunnel)  :fire::fire: - Ktunnel es una herramienta CLI que establece un túnel inverso entre un clúster de kubernetes y su máquina local.
- :green_heart:[Kubebox](https://github.com/astefanutti/kubebox)  :fire::fire::fire::fire: - Consola terminal y Web para Kubernetes
- :green_heart:[Kubetail](https://github.com/johanhaleby/kubetail)  :fire::fire::fire::fire::fire: - Bash script que le permite agregar (de cola/siguiente) registros de múltiples cápsulas en un solo flujo.
- :green_heart:[kube-shell](https://github.com/cloudnativelabs/kube-shell)  :fire::fire::fire::fire: - Kube-shell: Una cáscara integrada para trabajar con la Kubernetes CLI.
- 💚[kubecolor](https://github.com/kubecolor/kubecolor) 🔥🔥🔥 - coloriza la salida kubectl
- :green_heart:[kubectl tree](https://github.com/ahmetb/kubectl-tree)  :fire::fire::fire::fire: - Un plugin kubectl para explorar relaciones de propiedad entre Kubernetes objetos a través de propietarios.
- :green_heart:[kubectl-aliases](https://github.com/ahmetb/kubectl-aliases)  :fire::fire::fire::fire::fire: - Este repositorio contiene un script para generar cientos de alias convenientes para kubectl.
- :green_heart:[kubectx + kubens](https://github.com/ahmetb/kubectx)  :fire::fire::fire::fire::fire: - `kubectx` le ayuda a cambiar entre los racimos de ida y vuelta, y `kubens` ayuda a cambiar entre Kubernetes namespaces suavemente.
- :green_heart:[kube-ps1](https://github.com/jonmosco/kube-ps1)  :fire::fire::fire::fire::fire: - kube-ps1: Un script que te permite añadir la corriente Kubernetes context and namespace configured on kubectl to your Bash/Zsh prompt strings (es decir, los $PS1).
- :green_heart:[kubediff](https://github.com/weaveworks/kubediff)  :fire::fire::fire: - Kubediff es una herramienta para Kubernetes para mostrarle las diferencias entre su configuración de ejecución y su configuración controlada de la versión.
- :green_heart:[kubeprompt](https://github.com/jlesquembre/kubeprompt)  :fire: - Isolates KUBECONFIG en cada concha y muestra la corriente Kubernetes context/namespace en su prompt
- :green_heart:[Kubevela](https://github.com/oam-dev/kubevela)  :fire::fire::fire::fire::fire: - KubeVela es una plataforma fácil de usar pero extensible que les permite diseñar y enviar aplicaciones con mínimo esfuerzo.
- :green_heart:[Move2Kube](https://github.com/konveyor/move2kube)  :fire::fire: - Una herramienta para ayudar a los usuarios a migrar sus aplicaciones desde plataformas heredadas como Cloud Foundry a Kubernetes y Openshift. Analiza el código fuente de aplicación y genera Kubernetes YAMLs, Helm Charts, Tekton Pipelines, etc. El análisis y la generación pueden ser muy personalizados para producir la salida exacta que desea.
- :green_heart:[nova](https://github.com/FairwindsOps/nova/)  :fire::fire: - Nova escanea su clúster para los gráficos Helm instalados, y luego los cruza contra todos los repositorios Helm conocidos.
- :green_heart:[Plural](https://github.com/pluralsh/plural)  :fire::fire: - Plural es una herramienta CLI y plataforma integral de gestión de DevOps para implementar, gestionar y monitorear rápidamente aplicaciones de código abierto Kubernetes.
- :green_heart:[RBAC Lookup](https://github.com/FairwindsOps/rbac-lookup)  :fire::fire::fire: - RBAC Lookup es un CLI que le permite encontrar fácilmente Kubernetes funciones y funciones de agrupación vinculadas a cualquier usuario, cuenta de servicio o nombre de grupo.
- :green_heart:[stern](https://github.com/stern/stern)  :fire::fire::fire::fire::fire: - Stern le permite seguir múltiples cápsulas en Kubernetes y múltiples contenedores dentro de la cápsula.

### Cluster Provisioning
- :green_heart:[Bootkube](https://github.com/kubernetes-sigs/bootkube)  :fire::fire::fire::fire: - Bootkube es una herramienta para lanzar auto hospedado Kubernetes clusters.
- :green_heart:[Claudie](https://github.com/berops/claudie)  :fire: - Multi-cloud clusters con cada nodepool en un proveedor de nube diferente.
- :green_heart:[Cluster API](https://github.com/kubernetes-sigs/cluster-api)  :fire::fire::fire::fire::fire: - Cluster API es un Kubernetes subproyecto centrado en proporcionar APIs declarativas y herramientas para simplificar la provisión, actualización y operación de múltiples Kubernetes clusters.
- :green_heart:[eksctl](https://github.com/weaveworks/eksctl)  :fire::fire::fire::fire::fire: - `eksctl` es una herramienta CLI simple para crear clusters en EKS - Amazon's new managed Kubernetes servicio para EC2.
- :green_heart:[k0s](https://github.com/k0sproject/k0s)  :fire::fire::fire::fire::fire: - K0s - Zero Friction Kubernetes (El Certificado simple, sólido Kubernetes Distribución)
- :green_heart:[k3d](https://github.com/rancher/k3d)  :fire::fire::fire::fire::fire: - k3d, y Windows., destroy,half la memoria, altamente disponible, es una herramienta para ejecutar los grupos k3s locales en el docker. Es un solo binario alrededor de 20 MB. Necesitas tener instalado docker.
- :green_heart:[k3s](https://github.com/rancher/k3s)  :fire::fire::fire::fire::fire: - Ligero KubernetesFácil de instalar,Kubernetes clusters de la línea de comandos.
- :green_heart:[kind](https://github.com/kubernetes-sigs/kind)  :fire::fire::fire::fire::fire: - el tipo es una herramienta para correr local Kubernetes clusters que utilizan contenedores Docker "nodos".
- :green_heart:[kops](https://github.com/kubernetes/kops)  :fire::fire::fire::fire::fire: - `kops` le ayuda a crear, como el tipo, mejorar y mantener la calidad de producción
- :green_heart:[kube-aws](https://github.com/kubernetes-incubator/kube-aws)  :fire::fire::fire::fire: - `kube-aws` es una herramienta de línea de comandos para crear/actualizar/destruir Kubernetes clusters en AWS.
- :green_heart:[kubespray](https://github.com/kubernetes-sigs/kubespray)  :fire::fire::fire::fire::fire: - Implementar una producción lista Kubernetes Grupo temático
- :green_heart:[microK8s](https://github.com/ubuntu/microk8s)  :fire::fire::fire::fire::fire: - El más pequeño, más rápido Kubernetes
- :green_heart:[Minikube](https://github.com/kubernetes/minikube)  :fire::fire::fire::fire::fire: - minikube implementa un local Kubernetes cluster on macOS,Linux,all in a binario less than 100 MB.
- :green_heart:[Talos Linux](https://github.com/siderolabs/talos)  :fire::fire::fire::fire::fire: - Talos Linux es un sistema operativo mínimo, inmutable y seguro que instala vainilla Kubernetes - para centros de datos de producción, K8s@home, y Edge.
- :green_heart:[karpenter]([https://karpenter.sh](https://github.com/aws/karpenter-provider-aws))  :fire::fire::fire::fire::fire: - Karpenter es un Kubernetes Node Autoscaler construido para flexibilidad, rendimiento y simplicidad.
- :green_heart:[Kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/) - ku Bjm realiza las acciones necesarias para conseguir un mínimo de cúmulo viable en funcionamiento.
- :green_heart:[vCluster](https://github.com/loft-sh/vcluster/) : :fire::fire::fire::fire::fire: - vCluster le permite crear virtualmente completamente funcional Kubernetes cúmulos, reducción drástica de los costos y mejora de la capacidad y el aislamiento múltiples en comparación con los tradicionales Kubernetes. 
  
### Automatización y CI/CD
- :green_heart:[Argo CD](https://github.com/argoproj/argo-cd)  :fire::fire::fire::fire::fire: - Argo CD es una herramienta declarativa de entrega continua de GitOps Kubernetes.
- :green_heart:[Argo Events](https://github.com/argoproj/argo-events)  :fire::fire::fire::fire: - Argo Events es un marco de automatización de flujo de trabajo impulsado por eventos Kubernetes que te ayuda a disparar K8s objetos, flujos de trabajo Argo, cargas de trabajo sin servidor, etc.
- :green_heart:[Argo Rollouts](https://github.com/argoproj/argo-rollouts)  :fire::fire::fire::fire: - Controlador Argo Rollouts, utiliza el recurso personalizado Rollout para proporcionar estrategias adicionales de implementación como Blue Green y Canary a Kubernetes.
- :green_heart:[Argo Workflows](https://github.com/argoproj/argo)  :fire::fire::fire::fire::fire: - Argo Workflows es un motor de flujo de trabajo de código abierto para orquestar trabajos paralelos en Kubernetes.
- :green_heart:[Argocd autopilot](https://github.com/argoproj-labs/argocd-autopilot)  :fire::fire::fire: - El Autopilot Argo-CD es una herramienta que ofrece una forma de instalar Argo-CD y gestionar los repositorios GitOps.
- :green_heart:[Flagger](https://github.com/weaveworks/flagger)  :fire::fire::fire::fire::fire: - Flagger es una herramienta de entrega progresiva que automatiza el proceso de liberación para aplicaciones que se ejecutan en Kubernetes.
- :green_heart:[Flux2](https://github.com/fluxcd/flux2)  :fire::fire::fire::fire::fire: - Flux versión 2 se construye desde el suelo hasta el uso Kubernetes' sistema de extensión API, e integrar con Prometheus y otros componentes básicos del Kubernetes ecosistema.
- :green_heart:[k8s-image-swapper](https://github.com/estahn/k8s-image-swapper/)  :fire::fire: - `k8s-image-swapper` es un Webhook mutante Kubernetes, descargando imágenes en su propio registro y señalando las imágenes a esa nueva ubicación.
- :green_heart:[Kubero](https://github.com/kubero-dev/kubero)  :fire::fire::fire::fire::fire: - Una alternativa de Heroku PaaS libre y auto hospedado Kubernetes que implementa GitOps
- :green_heart:[KubeSphere](https://github.com/kubesphere/kubesphere)  :fire::fire::fire::fire::fire: - KubeSphere es un sistema operativo distribuido que proporciona pila nativa de la nube con Kubernetes como su núcleo, y pretende ser la arquitectura plug-and-play para aplicaciones de terceros integración perfecta para impulsar su ecosistema.
- :green_heart:[Reloader](https://github.com/stakater/Reloader)  :fire::fire::fire::fire::fire: - Reloader puede ver cambios en `ConfigMap` y `Secret` y hacer actualizaciones de rodaje en Pods con su asociado `DeploymentConfigs`, `Deployments`, `Daemonsets` y `Statefulsets`.
- :green_heart:[terranetes-controller](https://github.com/appvia/terranetes-controller)  :fire: - El controlador Terranetes permite al equipo de plataforma ofrecer capacidades de autoservicio en torno a los recursos de la nube.
- :green_heart:[Skaffold](https://github.com/GoogleContainerTools/skaffold)  :fire::fire::fire::fire::fire: - Skaffold es una herramienta de línea de comandos que facilita el desarrollo continuo Kubernetes Aplicaciones.
- :green_heart:[Spinnaker](https://github.com/spinnaker/spinnaker)  :fire::fire::fire::fire::fire: - Spinnaker es una plataforma de entrega continua de código abierto para liberar cambios de software con alta velocidad y confianza.
- :green_heart:[TF-controller](https://github.com/weaveworks/tf-controller)  :fire: - TF-controller es un controlador experimental para Flux para reconciliar los recursos Terraform de la manera GitOps.
- :green_heart:[werf](https://github.com/werf/werf)  :fire::fire::fire::fire::fire: - werf es una herramienta CLI pegando Git, Docker, Helm Kubernetes con cualquier sistema CI para implementar CI/CD y GitOps. 
- :green_heart:[Weave GitOps](https://github.com/weaveworks/weave-gitops)  :fire::fire: - Weave GitOps es una sencilla plataforma de desarrolladores de código abierto para personas que quieren aplicaciones nativas en la nube, sin necesidad Kubernetes experto.
- :green_heart:[Otomi - Self-hosted PaaS for K8s](https://github.com/redkubes/otomi-core)  :fire::fire::fire::fire: - Otomi añade herramientas centradas en el desarrollo y las operaciones, automatización y autoservicio del desarrollador encima de Kubernetes en cualquier infraestructura o nube, para codificar, construir, soltar, desplegar, asegurar, operar y monitorear aplicaciones containerizzate.
:green_heart:[Cozystack - Self-hosted PaaS for K8s](https://github.com/cozystack/cozystack)  :fire::fire::fire::fire: - un llavero, auto hospedado PaaS construido para funcionar en los clusters de Talos Linux endurecidos, trayendo primero seguridad Kubernetes automatización a tu propio metal. Perfecto si estás construyendo nubes soberanas o pilas nativas del borde.

### Cluster Resources Management
- :green_heart:[Clusterpedia](https://github.com/clusterpedia-io/clusterpedia)  :fire: - Clusterpedia se utiliza para búsquedas complejas de recursos en múltiples grupos, soporta la búsqueda simultánea de un único tipo de recursos o múltiples tipos de recursos existentes en múltiples grupos.
- :green_heart:[Grafana Tanka](https://github.com/grafana/tanka)  :fire::fire::fire::fire: - La alternativa limpia, concisa y súper flexible a YAML para su Kubernetes cluster.
- :green_heart:[KEDA](https://github.com/kedacore/keda)  :fire::fire::fire::fire::fire: - KEDA permite un autoescalamiento fino (incluido a / desde cero) para el evento impulsado Kubernetes carga de trabajo.
- :green_heart:[Kruise](https://github.com/openkruise/kruise)  :fire::fire::fire::fire::fire: - Kruise consta de varios controladores que extienden y complementan el Kubernetes Controladores básicos para la gestión del volumen de trabajo.
- :green_heart:[KubeDirector](https://github.com/bluek8s/kubedirector)  :fire::fire: - KubeDirector utiliza estándar Kubernetes (G)K8s) facilidades de recursos personalizados y extensiones de API para implementar grupos de aplicaciones de escalado estatal.
- :green_heart:[Kubenav](https://github.com/kubenav/kubenav)  :fire::fire::fire::fire: - Kubenav es el navegante para tu Kubernetes cúmulos en el bolsillo.
- :green_heart:[Liqo](https://github.com/liqotech/liqo)  :fire::fire: - Liqo implementa compartir recursos dinámicos en diferentes Kubernetes clusters (e.g.; offloading pods and services), supporting decentralized governance.
- :green_heart:  [Meshery](https://github.com/meshery/meshery)  :fire::fire::fire::fire::fire: - Meshery es un gestor de código abierto que permite el diseño y la gestión de todos Kubernetes- infraestructura basada y aplicaciones.
- :green_heart:[Pluto](https://github.com/FairwindsOps/pluto)  :fire::fire::fire::fire: - Plutón es una utilidad para ayudar a los usuarios a encontrar deprecated Kubernetes apiVersions in their code repositories and their helm releases.
- :green_heart:[Polaris](https://github.com/FairwindsOps/polaris)  :fire::fire::fire::fire::fire: - Polaris es un motor de política de código abierto Kubernetes que valida y remedia la configuración de recursos.
- :green_heart:[Projectsveltos](https://github.com/projectsveltos/addon-manager)  :fire: Projectsveltos es un Kubernetes Controlador adicional que simplifica el despliegue y la gestión de add-ons y aplicaciones en múltiples grupos.
- :green_heart:[The Hierarchical Namespace Controller](https://github.com/kubernetes-sigs/multi-tenancy/tree/master/incubator/hnc)  :fire::fire::fire: - Los espacios de nombres jerárquicos facilitan la participación de su grupo haciendo más poderosos los espacios de nombres.

### Secrets Management
- :green_heart:[Kubernetes External Secrets](https://github.com/godaddy/kubernetes-external-secrets)  :fire::fire::fire::fire::fire: - Kubernetes Secretos Externos le permite utilizar sistemas externos de gestión secreta, como AWS Secrets Manager o HashiCorp Vault, para agregar secretos en forma segura Kubernetes.
- :green_heart:[Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets)  :fire::fire::fire::fire::fire: - Cifra tu Secreto en un SealedSecret, que es seguro almacenar - incluso a un repositorio público.
- :green_heart:[akv2k8s](https://github.com/SparebankenVest/azure-key-vault-to-kubernetes)  :fire::fire: - La clave de Azure Kubernetes (akv2k8s) hará que los objetos clave de Azure estén disponibles Kubernetes de dos maneras: como nativo Kubernetes Secretos; como variables ambientales directamente inyectadas en su aplicación Container

### Redes
- :green_heart:[Calico Networking](https://github.com/projectcalico/calico)  :fire::fire::fire::fire::fire: - Calico es una solución de red de código abierto y de seguridad de red para contenedores, máquinas virtuales y cargas de trabajo de metales desnudos
- :green_heart:[cert-manager](https://github.com/jetstack/cert-manager)  :fire::fire::fire::fire::fire: - cert-manager es un Kubernetes add-on to automate the management and issuance of TLS certificates from various issuing sources.
- :green_heart:[cilium](https://github.com/cilium/cilium)  :fire::fire::fire::fire::fire: - Cilium es una solución de redes, observabilidad y seguridad con un plan de datos basado en eBPF.
- :green_heart:[CoreDNS](https://github.com/coredns/coredns)  :fire::fire::fire::fire::fire: - CoreDNS es un servidor DNS rápido y flexible que funciona en Kubernetes.
- :green_heart:[ingress-nginx](https://github.com/kubernetes/ingress-nginx)  :fire::fire::fire::fire::fire: - `ingress-nginx` es un controlador Ingress para Kubernetes usando NGINX como un proxy inverso y balanceador de carga.
- :green_heart:[Kong for Kubernetes](https://github.com/Kong/kubernetes-ingress-controller)  :fire::fire::fire::fire: - Configurar plugins, cheques de salud, equilibrio de carga y más en Kong para Kubernetes Servicios.
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - Un plugin kubectl que utiliza tcpdump y Wireshark para iniciar una captura remota en cualquier cápsula en su Kubernetes cluster.
- :green_heart:[kubectl trace](https://github.com/iovisor/kubectl-trace)  :fire::fire::fire::fire: - `kubectl trace` es un plugin kubectl que le permite programar la ejecución de programas bpftrace en su Kubernetes cluster.
- :green_heart:[Kube Karp](https://github.com/immanuelfodor/kube-karp)  :fire: - Añadir una IP virtual flotante Kubernetes nodos de racimo para el balance de carga fácilmente basado en el protocolo CARP
- :green_heart:[kubernetes-ingress](https://github.com/nginxinc/kubernetes-ingress)  :fire::fire::fire::fire::fire:  - Aplicación de un controlador de Ingress para NGINX y NGINX Plus (comercial).
- :green_heart:[kube-ovn](https://github.com/alauda/kube-ovn)  :fire::fire::fire::fire:  - A Kubernetes Tejido de red para empresas ricas en funciones y fáciles en operaciones.
- :green_heart:[loxilb](https://github.com/loxilb-io/loxilb)  :fire::fire::fire:  - A Kubernetes service load-balancer basado en eBPF.
  
### Almacenamiento
- :green_heart:[Longhorn](https://github.com/longhorn/longhorn)  :fire::fire::fire::fire::fire: - Longhorn es un sistema de almacenamiento de bloques distribuido para Kubernetes.
- :green_heart:[OpenEBS](https://github.com/openebs/openebs)  :fire::fire::fire::fire::fire: - OpenEBS es la solución de almacenamiento de código abierto más amplia y fácil de usar Kubernetes.
- :green_heart:[Rook](https://github.com/rook/rook)  :fire::fire::fire::fire::fire: - Rook es un orquestador de almacenamiento nativo de código abierto Kubernetes.

### Pruebas y solución de problemas
- :green_heart:[Chainsaw](https://github.com/kyverno/chainsaw)  :fire: - La herramienta final al final de la prueba Kubernetes operadores.
- :green_heart:[Chaos Mesh](https://github.com/pingcap/chaos-mesh)  :fire::fire::fire::fire::fire: - Chaos Mesh® es una plataforma de ingeniería de caos nativa que orquesta el caos en Kubernetes ambientes.
- :green_heart:[chaoskube](https://github.com/linki/chaoskube)  :fire::fire::fire::fire: - `chaoskube` periódicamente mata cápsulas aleatorias en sus Kubernetes cluster.
- :green_heart:[Conftest](https://github.com/open-policy-agent/conftest)  :fire::fire::fire::fire: - Conftest le ayuda a escribir pruebas contra datos de configuración estructurados.
- :green_heart:[DETIK](https://github.com/bats-core/bats-detik)  :fire: - Una biblioteca que simplifica las pruebas de extremo a extremo K8s aplicaciones utilizando [BATS](https://github.com/bats-core/bats-core) afirmaciones y consultas de lenguaje natural.
- :green_heart:[k6](https://github.com/loadimpact/k6)  :fire::fire::fire::fire::fire: - k6 es una moderna herramienta de pruebas de carga, aprovechando los años de experiencia de Load Impact en la industria de pruebas de carga y rendimiento.
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - Un plugin kubectl que utiliza tcpdump y Wireshark para iniciar una captura remota en cualquier cápsula en su Kubernetes cluster.
- :green_heart:[Kube DOOM](https://github.com/storax/kubedoom)  :fire::fire::fire::fire: - ¡El siguiente nivel de ingeniería del caos está aquí! Matar vainas dentro de tus Kubernetes ¡Golpearlos en Doom!
- :green_heart:[kube-monkey](https://github.com/asobti/kube-monkey)  :fire::fire::fire::fire::fire: - Se elimina al azar Kubernetes k8s) pods in the cluster encouraging and validating the development of failure-resilient services.
- :green_heart:[kube-score](https://github.com/zegl/kube-score)  :fire::fire::fire::fire: - `kube-score` es una herramienta que realiza análisis de código estático de su Kubernetes definiciones de objetos.
- :green_heart:[Kubectl-debug](https://github.com/JamesTGrant/kubectl-debug)  :fire::fire::fire::fire::fire: - `kubectl-debug` es una solución fuera de árbol para la solución de problemas de las cápsulas de funcionamiento, que le permite ejecutar un nuevo contenedor en las cápsulas de funcionamiento para el propósito depuración.
- :green_heart:[KubeInvaders](https://github.com/lucky-sideburn/KubeInvaders)  :fire::fire::fire: - A través de KubeInvaders puedes estresar Kubernetes cluster de una manera divertida y comprobar cómo es resistente.
- :green_heart:[Kubetest](https://github.com/vapor-ware/kubetest)  :fire: - Kubetest es un plugin de pytest que facilita la gestión de un Kubernetes cluster dentro de tus pruebas de integración.
- :green_heart:[Litmus](https://github.com/litmuschaos/litmus)  :fire::fire::fire::fire::fire: - Litmus ofrece herramientas para orquestar el caos Kubernetes para ayudar a SREs a encontrar debilidades en sus despliegues.
- :green_heart:[popeye](https://popeyecli.io/)  :fire::fire::fire::fire::fire: - Popeye es una utilidad que explora en vivo Kubernetes agrupar e informar sobre posibles cuestiones con los recursos y configuraciones desplegados.
- :green_heart:[PowerfulSeal](https://github.com/bloomberg/powerfulseal)  :fire::fire::fire::fire: - PowerfulSeal inyecta fallo en su Kubernetes clusters, para que puedas detectar problemas lo antes posible.
- :green_heart:[Testkube](https://github.com/kubeshop/testkube)  :fire::fire::fire: - Testkube es un Kubernetes nativo Testing Framework para orquestación y ejecución de pruebas. Le permite realizar cualquiera de sus pruebas dentro de un Kubernetes cluster. Integra con su CI/CD y le permite seguir un enfoque de GitOps para probar mientras tiene un lugar centralizado para todos sus resultados de prueba en todos los grupos.

### Monitoreo, Alertas y Visualización
- :green_heart:[BotKube](https://github.com/infracloudio/botkube)  :fire::fire::fire::fire: - La integración de BotKube con Slack o Mattermost le ayuda a monitorizar su Kubernetes cluster, debug critical deployments and gives recommendations for standard practices by running checks on the Kubernetes recursos.
- :green_heart:[Canary Checker](https://github.com/flanksource/canary-checker)  :fire: - Canary Checker es una plataforma de control de salud nativa de kubernetes con 30+ tipos de comprobación de salud incorporados.
- :green_heart:[Cortex](https://github.com/cortexproject/cortex)  :fire::fire::fire::fire::fire: - Cortex proporciona almacenamiento horizontalmente escalable, altamente disponible, multi-tenant, a largo plazo para Prometheus.
- :green_heart:[Goldilocks](https://github.com/FairwindsOps/goldilocks)  :fire::fire::fire: - Goldilocks es una utilidad que puede ayudarle a identificar un punto de partida para solicitudes de recursos y límites.
- :green_heart:[Goldpinger](https://github.com/bloomberg/goldpinger)  :fire::fire::fire::fire::fire: - Herramienta de depuración Kubernetes que prueba y muestra conectividad entre los nodos en el cluster.
- :green_heart:[Grafana](https://github.com/grafana/grafana)  :fire::fire::fire::fire::fire: - Grafana le permite preguntar, visualizar, alertar y comprender sus métricas sin importar dónde se almacenan.
- :green_heart:[Helm Dashboard](https://github.com/komodorio/helm-dashboard)  :fire::fire::fire::fire: - La UI desaparecida para Helm. El plugin Helm Dashboard ofrece una forma impulsada por UI para ver los gráficos Helm instalados, ver su historial de revisión y los recursos k8s correspondientes. 
- :green_heart:[Kiali](https://github.com/kiali/kiali)  :fire::fire::fire::fire::fire: - Kiali trabaja con Istio para visualizar la topología de malla de servicio.
- :green_heart:[k8s-image-availability-exporter](https://github.com/flant/k8s-image-availability-exporter)  :fire: - Prometheus exportador que le advierte proactivamente sobre las imágenes que se definen en Kubernetes objetos pero no están disponibles en el registro de contenedores. 
- :green_heart:[kube-capacity](https://github.com/robscott/kube-capacity)  :fire::fire::fire: - Se trata de un CLI simple que ofrece una visión general de las solicitudes de recursos, los límites y la utilización en un Kubernetes cluster.
- :green_heart:[Kubernetes Dashboard](https://github.com/kubernetes/dashboard)  :fire::fire::fire::fire::fire: - Kubernetes Dashboard es un propósito general, UI basada en la web para Kubernetes clusters.
- :green_heart:[Kubedev](https://github.com/relferreira/kubedev)  :fire: - Kubedev es una potente y hermosa interfaz de usuario para gestionar Kubernetes clusters.
- :green_heart:[KubeHelper](https://github.com/KubeHelper/kubehelper)  :fire: - KubeHelper - simplifica muchos diarios Kubernetes tareas de racimo a través de una interfaz web.
- :green_heart:[Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server)  :fire::fire::fire::fire::fire: - Metrics Server es una fuente escalable y eficiente de métricas de recursos de contenedores para Kubernetes tuberías de autoescalamiento incorporadas.
- :green_heart:[Kubernetes Operational View](https://github.com/hjacobs/kube-ops-view)  :fire::fire::fire::fire: - Una herramienta que pretende proporcionar un cuadro operativo común para múltiples Kubernetes clusters.
- :green_heart:[kube-state-metrics](https://github.com/kubernetes/kube-state-metrics)  :fire::fire::fire::fire::fire: - kube-state-metrics es un simple servicio que escucha el Kubernetes Servidor API y genera métricas sobre el estado de los objetos.
- :green_heart:[kubewatch](https://github.com/robusta-dev/kubewatch)  :fire::fire::fire::fire::fire: - `kubewatch` es un Kubernetes watcher that currently publishes notification to available collaboration hubs/notification channels.
- :green_heart:[Lens](https://github.com/lensapp/lens)  :fire::fire::fire::fire::fire: - Es una interfaz de usuario útil, atractiva y de código abierto (UI) para trabajar con Kubernetes clusters.
- :green_heart:[Mizu](https://github.com/up9inc/mizu)  :fire::fire::fire: - Visor de tráfico de API Kubernetes le permite ver toda la comunicación API entre microservicios. Creo que TCPDump y Wireshark reinventaron para Kubernetes
- :green_heart:[Network mapper](https://github.com/otterize/network-mapper)  :fire::fire: - Mapa Kubernetes tráfico incluster y exportación como texto, intenciones o una imagen.
- :green_heart:[Popeye](https://github.com/derailed/popeye)  :fire::fire::fire::fire::fire: - Popeye es una utilidad que explora en vivo Kubernetes agrupar e informar sobre posibles cuestiones con los recursos y configuraciones desplegados.
- :green_heart:[Prometheus](https://github.com/prometheus/prometheus)  :fire::fire::fire::fire::fire: - Prometheus, un proyecto Cloud Native Computing Foundation, es un sistema de monitoreo de sistemas y servicios.
- :green_heart:[Searchlight](https://github.com/searchlight/searchlight)  :fire::fire: - Searchlight/Icinga corre periódicamente varios cheques en un Kubernetes cluster y envía notificaciones si detecta un problema.
- :green_heart:[Sloop](https://github.com/salesforce/sloop)  :fire::fire::fire: - Monitores Sloop Kubernetes, grabar historias de eventos y cambios de estado de recursos y proporcionar visualizaciones para ayudar a depurar eventos pasados.
- :green_heart:[Thanos](https://github.com/thanos-io/thanos)  :fire::fire::fire::fire::fire: - Thanos es un conjunto de componentes que se pueden componer en un sistema métrico altamente disponible con capacidad de almacenamiento ilimitada.
- :green_heart:[K8Studio](https://github.com/guiqui/k8Studio)  :fire::fire::fire: - K8Studio IDE para gestionar y visualizar Kubernetes Grupos.
- :green_heart:[KubeDiagrams](https://github.com/philippemerle/KubeDiagrams)  :fire: - Generar Kubernetes diagramas de arquitectura de Kubernetes manifiesta archivos, archivos de kustomización, gráficos Helm, y estado de cluster real.

### Respaldo y restauración
- :green_heart:[katafygio](https://github.com/bpineau/katafygio)  :fire: - katafygio descubre Kubernetes objetos (distribuciones, servicios, ...), y guardarlos continuamente como archivos yaml en un repositorio de git.
- :green_heart:[Velero](https://github.com/vmware-tanzu/velero)  :fire::fire::fire::fire::fire: - Velero (anteriormente Heptio Ark) le da herramientas para respaldar y restaurar su Kubernetes recursos de grupos temáticos y volúmenes persistentes.

### Seguridad y cumplimiento
- :green_heart:[Datree](https://github.com/datreeio/datree)  :fire::fire::fire::fire::fire: - Datree es una herramienta CLI que soporta Kubernetes Los administradores en sus funciones evitando que los desarrolladores cometan errores en Kubernetes configuraciones que pueden hacer que los clusters fallen en la producción.
- :green_heart:[Deepfence ThreatMapper](https://github.com/deepfence/ThreatMapper)  :fire::fire::fire: - Apache v2, potente escáner de vulnerabilidad de tiempo de ejecución para kubernetes, máquinas virtuales y sin servidor.
- :green_heart:[Falco](https://github.com/falcosecurity/falco)  :fire::fire::fire::fire::fire: - Falco es un monitor de actividad conductual diseñado para detectar actividad anómala en sus aplicaciones. Puede utilizar Falco para monitorear la seguridad de su tiempo de ejecución Kubernetes aplicaciones y componentes internos.
- :green_heart:[Gatekeeper](https://github.com/open-policy-agent/gatekeeper)  :fire::fire::fire::fire::fire: - Controlador de políticas Kubernetes
- :green_heart:[Intents operator](https://github.com/otterize/intents-operator)  :fire::fire: - Gestionar las políticas de red, Istio Authorization Policies, y Kafka ACLs en a Kubernetes cúmulo con facilidad.
- :green_heart:[k-rail](https://github.com/cruise-automation/k-rail)  :fire::fire: - k-rail es un instrumento de aplicación de la política de carga de trabajo Kubernetes. Puede ayudarle a asegurar un clúster multi inquilino con mínima perturbación y velocidad máxima.
- :green_heart:[Konstraint](https://github.com/plexsystems/konstraint)  :fire::fire: - Konstraint es una herramienta CLI para ayudar con la creación y gestión de limitaciones al utilizar Gatekeeper.
- :green_heart:[kube-bench](https://github.com/aquasecurity/kube-bench)  :fire::fire::fire::fire::fire: - kube-bench es una aplicación Go que comprueba si Kubernetes se despliega de forma segura ejecutando los cheques documentados en la CEI Kubernetes Benchmark.
- :green_heart:[kube-hunter](https://github.com/aquasecurity/kube-hunter)  :fire::fire::fire::fire::fire: - kube-hunter busca debilidades de seguridad en Kubernetes clusters.
- :green_heart:[KubeLinter](https://github.com/stackrox/kube-linter)  :fire::fire::fire::fire: - KubeLinter es una herramienta de análisis estática que comprueba Kubernetes Los archivos YAML y los gráficos Helm para asegurar que las aplicaciones representadas en ellos se adhieran a las mejores prácticas.
- :green_heart:[Kubesploit](https://github.com/cyberark/kubesploit)  :fire::fire::fire: - Kubesploit es un servidor y agente de control post-explotación multiplataforma HTTP/2 dedicado a entornos containerizzatos escritos en Golang y construido sobre el proyecto Merlin por Russel Van Tuyl (@Ne0nd0g).
- :green_heart:[KubiScan](https://github.com/cyberark/KubiScan)  :fire::fire::fire: - Una herramienta para escanear Kubernetes cluster for risky permissions in KubernetesModelo de autorización de control de acceso basado en roles (RBAC).
- :green_heart:[Kyverno](https://github.com/kyverno/kyverno)  :fire::fire::fire::fire: - Kyverno es un motor de políticas diseñado para KubernetesPuede validar, mutar y generar configuraciones usando controles de admisión y escaneos de fondo.
- :green_heart:[Netchecks](https://github.com/hardbyte/netchecks/)  :fire: - Conjunto de herramientas para probar las condiciones de red y afirmar que son como se espera.
- :green_heart:[Permission manager](https://github.com/sighupio/permission-manager)  :fire::fire::fire: - Permission Manager es una aplicación desarrollada por SIGHUP que permite una gestión RBAC súper fácil y fácil de usar para Kubernetes.
- :green_heart:[rakkess](https://github.com/corneliusweig/rakkess)  :fire::fire::fire: - plugin kubectl para mostrar una matriz de acceso para los recursos del servidor
- :green_heart:[Rönd](https://github.com/rond-authz/rond)  :fire: - Rönd es un peso ligero de código abierto Kubernetes contenedor sidecar que le ayuda a proteger sus API con políticas de seguridad sencillas. También le permite crear su solución RBAC/ABAC.
- :green_heart:[Teleport](https://github.com/gravitational/teleport)  :fire::fire::fire::fire::fire: - Teleport Unified Access Plane permite a los ingenieros acceder rápidamente a cualquier recurso informático en cualquier lugar.


### Mesh de servicio
- :green_heart:[Istio](https://github.com/istio/istio)  :fire::fire::fire::fire::fire: - Una plataforma abierta para conectar, gestionar y asegurar microservicios.
- :green_heart:[Linkerd](https://github.com/linkerd/linkerd)  :fire::fire::fire::fire::fire: - Linkerd es una malla de servicio transparente, diseñada para que las aplicaciones modernas sean seguras y sanas.
- :green_heart:[Open Service Mesh](https://github.com/openservicemesh/osm/)  :fire::fire::fire::fire::fire: - Open Service Mesh (OSM) es una malla ligera, extensible, Cloud Native service que permite a los usuarios gestionar, asegurar y obtener funciones de observabilidad fuera de la caja para entornos de microservicio altamente dinámicos.


### Herramientas de desarrollo
- :green_heart:[Cyclops](https://github.com/cyclops-ui/cyclops)  :fire::fire: - IU personalizable para Kubernetes despliegues
- :green_heart:[Eclipse JKube](https://github.com/eclipse/jkube)  :fire::fire: - Herramientas y plugins para desarrolladores Java que le ayudan a crear imágenes de contenedores junto con los manifiestos requeridos para desplegar sus aplicaciones a Kubernetes.
- :green_heart:[garden](https://github.com/garden-io/garden)  :fire::fire::fire::fire::fire: - El jardín proporciona un tipo de producción Kubernetes entornos de prueba para pruebas de integración, QA y desarrollo.
- :green_heart:[gefyra](https://github.com/gefyrahq/gefyra)  :fire::fire::fire: -Gefyra blazingly-fast, rock-solid, local application development ⋅ with Kubernetes.
- :green_heart:[ko](https://github.com/google/ko)  :fire::fire::fire::fire::fire: - `ko` es una herramienta para construir e implementar aplicaciones Golang a Kubernetes.
- :green_heart:[Konfig](https://github.com/cloud66-oss/konfig)  :fire: - Konfig es un Kubernetes gema Rails amistosa. Puede cargar configuración y secretos tanto de YAML como de carpetas con archivos individuales y presentarlos a su aplicación de la misma manera.
- :green_heart:[kubevious](https://github.com/kubevious/Kubevious)  :fire::fire::fire::fire: - Kubevious renderiza todas las configuraciones relevantes para la aplicación en un solo lugar. Eso ahorra mucho tiempo de los operadores, eliminando la necesidad de buscar ajustes y cavar dentro de selectores y etiquetas.
- :green_heart:[kubectl-warp](https://github.com/ernoaapa/kubectl-warp)  :fire::fire: - Kubernetes plugin CLI para sincronizar y ejecutar archivos locales en Pod on Kubernetes
- :green_heart:[kubernix](https://github.com/saschagrunert/kubernix)  :fire::fire::fire: - Este proyecto pretende proporcionar una dependencia única Kubernetes clusters para pruebas locales, experimentos y propósitos de desarrollo.
- :green_heart:[Makisu](https://github.com/uber/makisu)  :fire::fire::fire::fire::fire: - Makisu es una herramienta de construcción de imagen Docker rápida y flexible diseñada para entornos containerizzatos no privilegiados como Mesos o Kubernetes.
- :green_heart:[mirrord](https://github.com/metalbear-co/mirrord)  :fire::fire::fire::fire::fire: - Espejo conecta su proceso local y su entorno de nube, y ejecuta código local en condiciones de nube.
- :green_heart:[Monokle](https://github.com/kubeshop/monokle)  :fire::fire::fire: - Monokle te ayuda a crear, editar y validar manifiestos yaml, visualizar y validar enlaces de recursos y dependencias, conectar y comparar recursos con tus grupos, depurar la salida de kustomize o helm, y más!
- :green_heart:[Okteto](https://github.com/okteto/okteto)  :fire::fire::fire::fire: - `okteto` acelera el flujo de trabajo para el desarrollo Kubernetes Aplicaciones.
- :green_heart:[Telepresence](https://github.com/telepresenceio/telepresence)  :fire::fire::fire::fire::fire: - La telepresencia proporciona un desarrollo local rápido y realista Kubernetes microservicios.
- :green_heart:[Tilt](https://github.com/tilt-dev/tilt)  :fire::fire::fire::fire::fire: - Potencias inclinadas desarrollo multiservicio y se asegura de que se comportan.
- :green_heart:[Tye](https://github.com/dotnet/tye)  :fire::fire::fire::fire::fire: - Tye es una herramienta de desarrollo que facilita el desarrollo, la prueba y el despliegue de microservicios y aplicaciones distribuidas.
- [Aptakube](https://aptakube.com) - Un cliente de escritorio moderno, ligero y multicluster Kubernetes. Conectarse a múltiples grupos simultáneamente para ver, editar y gestionar todos sus recursos.

### Procesamiento de datos y aprendizaje automático
- :green_heart:[Kubeflow](https://github.com/kubeflow/kubeflow)  :fire::fire::fire::fire::fire: - Kubeflow es una plataforma nativa de Cloud para el aprendizaje automático basado en los conductos internos de aprendizaje automático de Google.
- :green_heart:[nos](https://github.com/nebuly-ai/nos)  :fire::fire: - `nos` es una plataforma de código abierto para ejecutar eficientemente las cargas de trabajo de IA en Kubernetes, aumento de la utilización de la GPU y reducción de la infraestructura y los costos operacionales.
- :green_heart:[Strimzi](https://github.com/strimzi/strimzi-kafka-operator)  :fire::fire::fire::fire::fire: - Strimzi proporciona una forma de ejecutar un grupo de Apache Kafka en Kubernetes o OpenShift en varias configuraciones de implementación.
- :green_heart:[Volcano](https://github.com/volcano-sh/volcano)  :fire::fire::fire::fire: - El volcán es un sistema de lotes construido sobre Kubernetes.
- :green_heart:[yunikorn](https://github.com/apache/incubator-yunikorn-core)  :fire::fire: - un programador de recursos ligero y universal para sistemas de orquestadores de contenedores.

### Gestión de datos
- :green_heart:[Kubegres](https://github.com/reactive-tech/kubegres)  :fire::fire::fire: - Kubegres es un Kubernetes operador que permite desplegar uno o muchos grupos de cápsulas PostgreSql con la replicación de datos y el fallo habilitado fuera de la caja.
- :green_heart:[Postgres Operator](https://github.com/CrunchyData/postgres-operator)  :fire::fire::fire::fire::fire: - PGO, el Operador Postgres de Crunchy Data, le da una solución Postgres declarativa que gestiona automáticamente sus clusters PostgreSQL.
- :green_heart:[MongoDB Community Kubernetes Operator](https://github.com/mongodb/mongodb-kubernetes-operator)  :fire::fire: - Esto es un Kubernetes Operador que implementa la Comunidad MongoDB Kubernetes clusters.
- :green_heart:[MySQL Operator for Kubernetes](https://github.com/mysql/mysql-operator)  :fire: - El Operador de MYSQL Kubernetes es un Operador para Kubernetes administración MySQL InnoDB Configuraciones de racimo dentro de un Kubernetes Cluster.
- :green_heart:[Redis Operator](https://github.com/spotahome/redis-operator)  :fire::fire::fire: - Redis Operator crea/configura/manages redis-failovers encima Kubernetes.

### Varios
- :green_heart:[Agones](https://github.com/googleforgames/agones)  :fire::fire::fire::fire::fire: - Agones es una biblioteca para albergar, ejecutar y escalar servidores de juego dedicados en Kubernetes.
- :green_heart:[AWS Controllers for Kubernetes](https://github.com/aws/aws-controllers-k8s)  :fire::fire::fire::fire: - Controladores AWS para Kubernetes (ACK) le permite definir y utilizar los recursos de servicio AWS directamente desde Kubernetes.
- :green_heart:[AWS Node Termination Handler](https://github.com/aws/aws-node-termination-handler)  :fire::fire::fire: - A Kubernetes Daemonset para manejar con gracia el cierre de instancia EC2
- :green_heart:[Brigade](https://github.com/brigadecore/brigade/)  :fire::fire::fire::fire::fire: - Brigade es la herramienta para crear tuberías para Kubernetes.
- :green_heart:[Crossplane](https://github.com/crossplane/crossplane)  :fire::fire::fire::fire::fire: - Crossplane es una fuente abierta Kubernetes add-on que extiende cualquier cluster con la capacidad de proveer y gestionar infraestructura, servicios y aplicaciones en la nube.
- :green_heart:[Descheduler for Kubernetes](https://github.com/kubernetes-sigs/descheduler)  :fire::fire::fire::fire::fire: - Descheduling pods from nodes based on policies
- :green_heart:[Devtron](https://github.com/devtron-labs/devtron)  :fire::fire::fire::fire: - Está diseñado como una plataforma de autoservicio para la puesta en funcionamiento y mantenimiento de aplicaciones (AppOps) en kubernetes de una manera amigable con el desarrollador.
- :green_heart:[OpenCost](https://github.com/opencost/opencost)  :fire::fire::fire::fire::fire: - Los modelos OpenCost dan visibilidad a los equipos en la actualidad e histórica Kubernetes gasto y asignación de recursos.
- :green_heart:[K8s-Cleaner](https://github.com/gianlucam76/k8s-cleaner)  :fire: - `k8s-cleaner` identifica y elimina los recursos no utilizados.
- :green_heart:[K8sPurger](https://github.com/yogeshkk/K8sPurger)  :fire: - `K8sPurger` Hunt Unused Resources In Kubernetes.
- :green_heart:[KubeEdge](https://github.com/kubeedge/kubeedge)  :fire::fire::fire::fire::fire: - KubeEdge está construido sobre Kubernetes y extiende la orquestación de aplicaciones containerizzate nativa y la gestión de dispositivos a hosts en el Edge.
- :green_heart:[KubePug](https://github.com/rikatz/kubepug)  :fire::fire: - Una herramienta para comprobar las deprecaciones antes de actualizar Kubernetes versión
- :green_heart:[Kube No Trouble](https://github.com/doitintl/kube-no-trouble)  :fire::fire::fire::fire::fire: - Revise fácilmente sus clusters para el uso de APIs deprecatadas
- :green_heart:[Shell-operator](https://github.com/flant/shell-operator)  :fire::fire::fire::fire: - Shell-operator es una herramienta para ejecutar scripts impulsados por eventos en un Kubernetes cluster.

## Guías, Documentación, Blogs y Aprendizaje

### Guías
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - Una introducción completa Kubernetes arquitectura
- [A Deep Dive Into Kubernetes Schema Validation](https://www.datree.io/resources/kubernetes-schema-validation) - Una guía sobre el Kubernetes schema y cómo validarlo usando OSS y herramientas nativas
- [A Guide to the Kubernetes Networking Model](https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/) - Un avance profundo de Kubernetes networking
- [Amazon EKS Best Practices Guide for Security](https://aws.github.io/aws-eks-best-practices/) - Esta guía proporciona asesoramiento sobre la protección de la información, los sistemas y los activos que dependen de EKS al tiempo que proporciona valor comercial mediante evaluaciones de riesgos y estrategias de mitigación.
- [Amazon EKS Node Drainer](https://github.com/aws-samples/amazon-k8s-node-drainer)  :fire: - Una guía y un ejemplo para acordonar y desalojar todas las cápsulas desalojables de un nodo EC2 que se termina.
- [Comparison of Kubernetes Ingress controllers](https://docs.google.com/spreadsheets/d/191WWNpjJ2za6-nbG4ZoUMXMpUK8KlCIosvQB0f-oq3k/htmlview?pru=AAABdXUHlbs*g6XkyoZXhanlhRazst77Xw) - Esta investigación compara las capacidades de 14 diferentes Kubernetes Controladores de entrada.  
- [Configuring HA Kubernetes cluster on bare metal servers with kubeadm](https://medium.com/faun/configuring-ha-kubernetes-cluster-on-bare-metal-servers-with-kubeadm-1-2-1e79f0f7857b) - Una guía para levantar una HA Kubernetes clúster en servidores metálicos desnudos con ku
- [Introduction to Using Google Kubernetes Engine; Explain Like I’m Five!](https://medium.com/faun/google-kubernetes-engine-explain-like-im-five-1890e550c099) - Creando tu primera gestión Kubernetes clúster en Google Kubernetes Motor usando Terraform.
- [Kubernetes Network Policy Recipes](https://github.com/ahmetb/kubernetes-network-policy-recipes)  :fire::fire::fire::fire::fire: - Este repositorio contiene varios casos de uso Kubernetes Políticas de red y muestra archivos YAML para aprovechar en su configuración.
- [Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)  :fire::fire::fire::fire::fire: - Kubernetes El Camino Duro le guía a través de arranque una altamente disponible Kubernetes cluster con encriptación de extremo a extremo entre componentes y autenticación RBAC.
- [Kubernetes Working Group for Multi-Tenancy](https://github.com/kubernetes-sigs/multi-tenancy)  :fire::fire::fire: - Se trata de un lugar de trabajo para propuestas y prototipos relacionados con múltiples niveles.
- [Production grade Kubernetes Monitoring using Prometheus](https://medium.com/faun/production-grade-kubernetes-monitoring-using-prometheus-78144b835b60) - Una guía detallada para implementar la solución de monitoreo Prometheus.
- [The Illustrated Children’s Guide to Kubernetes](https://www.cncf.io/phippy/the-childrens-illustrated-guide-to-kubernetes/) - Explicaciones gráficas de Kubernetes
- [Troubleshooting Kubernetes deployments](https://learnk8s.io/a/troubleshooting-kubernetes.pdf) - Un diagrama de flujo para resolver un despliegue de kubernetes en caso de problemas
 - [Vertical Pod Autoscaling: The Definitive Guide](https://povilasv.me/vertical-pod-autoscaling-the-definitive-guide/) - Una explicación detallada sobre Kubernetes VPA: qué es, cómo funciona, cómo utilizarlo y qué limitaciones tiene. 
- [Writing Your First Kubernetes Operator](https://medium.com/faun/writing-your-first-kubernetes-operator-8f3df4453234) - En este artículo veremos cómo construir y desplegar su primer artículo Kubernetes Operador usando el SDK Operador.

### Blogs y videos
- [10 most common mistakes using kubernetes](https://blog.pipetail.io/posts/2020-05-04-most-common-mistakes-k8s/) - Problemas comunes y cómo evitarlos.  
- [How the Department of Defense Moved to Kubernetes and Istio](https://www.youtube.com/watch?v=YjZ4AZ7hRM0) - Enfóquese en la pila de seguridad sidecar, aprovechando los contenedores enviados y sidecar para garantizar la seguridad cero de confianza y la seguridad multicapa.  
- [Kubernetes at Reddit: Tales from Production](https://youtu.be/WTbIBqNcjoQ) - Oído de éxitos, compartir en el corazón de las explosiones de producción, y obtener información sobre lo que tiene y no ha trabajado bien para una de las propiedades web más activas del mundo.  
- [Kubernetes Failure Stories](https://github.com/hjacobs/kubernetes-failure-stories)  :fire::fire::fire::fire::fire: - Una lista compilada de enlaces a historias de fracaso público relacionadas con Kubernetes.  
- [Life of a Packet](https://www.youtube.com/watch?v=0Omvgd7Hg1I) - Trazando el camino del tráfico de red en el Kubernetes sistema.  
- [OPA Deep Dive](https://www.youtube.com/watch?v=Uj2N9S58GLU) - Inmersión profunda en algunas nuevas características emocionantes en el proyecto OPA presentado por los co-creadores.  
- [Scaling Kubernetes to 2,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-2500-nodes/) + [Scaling Kubernetes to 7,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-7500-nodes/) - Problemas que encontrará al correr a gran escala Kubernetes carga de trabajo.
- [Service Mesh Comparison](https://servicemesh.es/) - Una compensación fácil para ayudar a elegir una de las implementaciones del servicio Mesh.  
- [ArgoCD Best Practices](https://datree.io/resources/argocd-best-practices-you-should-know)

### Aprendizaje y documentación
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - Una introducción completa Kubernetes arquitectura
- [ConfigMaps in Kubernetes: how they work and what you should remember](https://blog.flant.com/configmaps-in-kubernetes-how-they-work-and-what-you-should-remember/) - Comprender la evolución a ConfigMaps, cómo funcionan y qué sucede cuando cambian. 
- [Configuring Redis using a ConfigMap](https://kubernetes.io/docs/tutorials/configuration/configure-redis-using-configmap/) - Un recorrido que proporciona un ejemplo de cómo configurar Redis usando un ConfigMap
- [Example: Deploying Cassandra with a StatefulSet](https://kubernetes.io/docs/tutorials/stateful-application/cassandra/) - Este tutorial te muestra cómo ejecutar Apache Cassandra KubernetesCassandra, una base de datos, necesita almacenamiento persistente para proporcionar durabilidad de los datos.
- [Example: Deploying PHP Guestbook application with Redis](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/) - Este tutorial le muestra cómo construir e implementar una aplicación web simple, multi-tier Kubernetes y Docker.
- [Example: Deploying WordPress and MySQL with Persistent Volumes](https://kubernetes.io/docs/tutorials/stateful-application/mysql-wordpress-persistent-volume/) - Este tutorial le muestra cómo implementar un sitio de WordPress y una base de datos MySQL usando Minikube.
- [Exposing an External IP Address to Access an Application in a Cluster](https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address/) - Esta guía muestra cómo crear una Kubernetes Objeto de servicio que expone una dirección IP externa.
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) - Una lista oficial de comandos y banderas kubectl de uso común.  
- [Kubectl Kubernetes CheatSheet](https://github.com/dennyzhang/cheatsheet-kubernetes-A4)  :fire::fire::fire::fire: - Una hoja de trampa que contiene muchos comandos kubectl útiles
- [Kubernetes API Reference Docs](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/) - Una visión general de alto nivel de los recursos básicos proporcionados por el Kubernetes API y sus funciones primarias.  
- [Learn Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/) - Este tutorial proporciona un recorrido por los fundamentos de los Kubernetes Sistema de orquestación de racimo.
- [Play with Kubernetes](https://labs.play-with-k8s.com/) - Juega con Kubernetes es un parque infantil que permite a los usuarios correr K8s racimos en cuestión de segundos.
- [Ready-to-use commands and tips for kubectl](https://blog.flant.com/ready-to-use-commands-and-tips-for-kubectl/) - Varios consejos kubectl y trucos de los ingenieros de Flant.  
- [Running ZooKeeper, A Distributed System Coordinator](https://kubernetes.io/docs/tutorials/stateful-application/zookeeper/) - Este tutorial demuestra el funcionamiento de Apache Zookeeper Kubernetes Usando sets estatales, PodDisruptionBudgets y PodAntiAffinity.
- [Set Up a CI/CD Pipeline with Kubernetes](https://www.linux.com/audience/enterprise/set-cicd-pipeline-kubernetes-part-1-overview/) - Una guía de extremo a extremo para establecer una tubería CI/CD con Kubernetes.
- [StatefulSet Basics](https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/) - Este tutorial proporciona una introducción para gestionar aplicaciones con StatefulSets.
- [Webinar: K8s with OPA Gatekeeper](https://www.youtube.com/watch?v=v4wJE3I8BYM) - Cómo utilizar la OPA para controlar lo que los usuarios finales pueden hacer en el cluster y las formas de asegurar que los clusters se ajusten a las políticas de la empresa.  

### Guías de certificación
- [Certified Kubernetes Security Specialist - CKSS](https://github.com/ijelliti/CKSS-Certified-Kubernetes-Security-Specialist)  :fire::fire: - Este repositorio es una colección de recursos para prepararse para el Certificado Kubernetes Examen del Especialista en Seguridad (CKSS).
- [CKS "Certified Kubernetes security specialist certification](https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist)  :fire::fire::fire::fire: - Kubernetes los recursos de seguridad primarly de material permitido durante el examen, y elementos opcionales adicionales para ayudarle a avanzar su contenedor y kubernetes viaje de seguridad.
- [How to pass the Certified Kubernetes Administrator (CKA) exam on the first attempt](https://medium.com/faun/how-to-pass-certified-kubernetes-administrator-cka-exam-on-first-attempt-36c0ceb4c9e) - Una guía para pasar el examen de CKA
- [The ultimate CKA "Certfified Kuberenetes Administator" resource since exam inception](https://github.com/walidshaari/Kubernetes-Certified-Administrator)  - Un reposo actualizado de recursos extras para ayudarle a dominar el examen de CKA, así como algunos recursos adicionales para consolidar sus conocimientos de administración de kubernetes.
- [Kubernetes Exam Simulator](https://killer.sh/) - CKS/CKA/CKAD examina escenarios y entorno.  

## Gentileza

¡Aportaciones bienvenidas! Leer el [contribution guidelines](contributing.md) primero.


## Licencia

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

En la medida de lo posible bajo la ley, Tom Huang ha renunciado a todos los derechos de autor y
derechos relacionados o vecinos a este trabajo.
