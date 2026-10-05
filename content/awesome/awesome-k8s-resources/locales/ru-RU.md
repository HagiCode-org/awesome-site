# Подборка ресурсов Kubernetes [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

Составленный список удивительных Kubernetes Инструменты и ресурсы.

Вдохновленный [awesome](https://github.com/sindresorhus/awesome) список и [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws).

## Огненный метр изумления

* Репозитории с 0050+ звездами: :fire:
* Репозитории с 0200+ звездами: :fire::fire:
* Репозитории с 0500+ звездами: :fire::fire::fire:
* Репозитории с 1000+ звездами: :fire::fire::fire::fire:
* Репозитории с 2000+ звездами: :fire::fire::fire::fire::fire:

Идея, взятая из [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws). 


## Содержание
- [Инструменты и библиотеки](#tools-and-libraries)
  - [Инструменты командной строки](#command-line-tools)
  - [Кластерное обеспечение](#cluster-provisioning)
  - [Автоматизация и CI/CD](#automation-and-cicd)
  - [Управление кластерными ресурсами](#cluster-resources-management)
  - [Управление секретами](#secrets-management)
  - [Сеть](#networking)
  - [хранение](#storage)
  - [Тестирование и устранение неполадок](#testing-and-troubleshooting)
  - [Мониторинг, оповещения и визуализация](#monitoring-alerts-and-visualization)
  - [Резервное копирование и восстановление](#backup-and-restore)
  - [Безопасность и соблюдение](#security-and-compliance)
  - [Сервисная сеть](#service-mesh)
  - [Инструменты развития](#development-tools)
  - [Обработка данных и машинное обучение](#data-processing-and-machine-learning)
  - [Управление данными](#data-management)
  - [Разное](#miscellaneous)
- [Руководства, документы, блоги и обучение](#guides-documentations-blogs-and-learnings)
  - [Руководители](#guides)
  - [Блоги и видео](#blogs-and-videos)
  - [Обучение и документы](#learnings-and-documentations)
  - [Руководство по сертификации](#certification-guides)
- [содействовать](#contribute)
- [Лицензия](#license)


## Инструменты и библиотеки
Пункты с :green_heart: Укажите проекты с открытым кодом. 

### Инструменты командной строки
- :green_heart:[Helm](https://github.com/helm/helm)  :fire::fire::fire::fire::fire: - Хелм - инструмент для управления диаграммами. Диаграммы представляют собой пакеты предварительно сконфигурированных Kubernetes ресурсов.
- :green_heart:[Helmfile](https://github.com/helmfile/helmfile)  :fire::fire::fire::fire::fire: Helmfile - это декларативная спецификация для развертывания диаграмм рулевого управления.
- :green_heart:[Helmwave](https://github.com/helmwave/helmwave)  :fire::fire::fire: Helmwave - это родной инструмент для развертывания диаграмм Helm3. Это как Docker-Compose, но для Хелма.
- :green_heart:[Infra](https://github.com/infrahq/infra)  :fire::fire::fire: Инфра позволяет вам находить и получать доступ к инфраструктуре (например). KubernetesБазы данных. Мы поможем вам подключить поставщика идентификационных данных, такого как активный каталог Okta или Azure, и сопоставить пользователей / группы с разрешениями, которые вы настроили для своей инфраструктуры.
- :green_heart:[K9s](https://github.com/derailed/k9s)  :fire::fire::fire::fire::fire: K9s предоставляет интерфейс терминала для взаимодействия с вашим устройством Kubernetes кластеры.
- :green_heart:[kapp](https://github.com/vmware-tanzu/carvel-kapp)  :fire::fire::fire: - kapp - это простой инструмент развертывания, ориентированный на концепцию "Kubernetes «приложение» — набор ресурсов с одинаковой меткой
- :green_heart:[kconnect](https://github.com/fidelity/kconnect)  :fire::fire: kconnect - это утилита CLI, которая может использоваться для обнаружения и безопасного доступа. Kubernetes кластеры в нескольких операционных средах.
- :green_heart:[kl](https://github.com/robinovitch61/kl)  :fire: kl - это интерактивное терминальное приложение для взаимодействия с журналами во многих контейнерах и кластерах.
- :green_heart:[Ktunnel](https://github.com/omrikiei/ktunnel)  :fire::fire: Ktunnel - это инструмент CLI, который устанавливает обратный туннель между кластером кубернетов и вашей локальной машиной.
- :green_heart:[Kubebox](https://github.com/astefanutti/kubebox)  :fire::fire::fire::fire: Терминал и веб-консоль для Kubernetes
- :green_heart:[Kubetail](https://github.com/johanhaleby/kubetail)  :fire::fire::fire::fire::fire: Скрипт Bash, который позволяет объединять (хвост/следовать) журналы из нескольких контейнеров в один поток.
- :green_heart:[kube-shell](https://github.com/cloudnativelabs/kube-shell)  :fire::fire::fire::fire: Kube-shell: интегрированная оболочка для работы с Kubernetes КЛИ.
- [kubecolor](https://github.com/kubecolor/kubecolor) — окрашивает выход кубектля
- :green_heart:[kubectl tree](https://github.com/ahmetb/kubectl-tree)  :fire::fire::fire::fire: плагин kububl для изучения отношений собственности между Kubernetes объектов через собственников.
- :green_heart:[kubectl-aliases](https://github.com/ahmetb/kubectl-aliases)  :fire::fire::fire::fire::fire: Это хранилище содержит скрипт для генерации сотен удобных псевдонимов оболочки для kububl.
- :green_heart:[kubectx + kubens](https://github.com/ahmetb/kubectx)  :fire::fire::fire::fire::fire: - `kubectx` Помогает переключаться между скоплениями туда и обратно, и `kubens` Помогает переключаться между Kubernetes Пространства имен плавно.
- :green_heart:[kube-ps1](https://github.com/jonmosco/kube-ps1)  :fire::fire::fire::fire::fire: kube-ps1: скрипт, который позволяет добавить текущий Kubernetes Контекст и пространство имен настроены на kububl для строк подсказки Bash/Zsh (т.е. $PS1).
- :green_heart:[kubediff](https://github.com/weaveworks/kubediff)  :fire::fire::fire: Кубедиф - это инструмент для Kubernetes Чтобы показать вам различия между конфигурацией запуска и конфигурацией, контролируемой версией.
- :green_heart:[kubeprompt](https://github.com/jlesquembre/kubeprompt)  :fire: Изолирует KUBECONFIG в каждой оболочке и показывает ток Kubernetes контекст / пространство имен в вашем запросе
- :green_heart:[Kubevela](https://github.com/oam-dev/kubevela)  :fire::fire::fire::fire::fire: KubeVela - это простая в использовании, но расширяемая платформа, которая позволяет им проектировать и отправлять приложения с минимальными усилиями.
- :green_heart:[Move2Kube](https://github.com/konveyor/move2kube)  :fire::fire: Инструмент, который поможет пользователям перенести свои приложения с устаревших платформ, таких как Cloud Foundry, на Kubernetes и Openshift. Анализирует исходный код приложения и генерирует Kubernetes YAMLs, Helm Charts, Tekton Pipelines и др. Анализ и генерация могут быть сильно настроены для получения точного результата, который вы хотите.
- :green_heart:[nova](https://github.com/FairwindsOps/nova/)  :fire::fire: - Nova сканирует ваш кластер для установленных диаграмм Хелма, а затем перекрестно проверяет их на всех известных репозиториях Хелма.
- :green_heart:[Plural](https://github.com/pluralsh/plural)  :fire::fire: Plural - это инструмент CLI и целостная платформа управления DevOps для быстрого развертывания, управления и мониторинга приложений с открытым исходным кодом. Kubernetes.
- :green_heart:[RBAC Lookup](https://github.com/FairwindsOps/rbac-lookup)  :fire::fire::fire: RBAC Lookup - это CLI, который позволяет легко найти Kubernetes роли и кластерные роли, связанные с любым пользователем, учетной записью службы или именем группы.
- :green_heart:[stern](https://github.com/stern/stern)  :fire::fire::fire::fire::fire: - Stern позволяет вам хвост несколько стручков на Kubernetes несколько контейнеров внутри контейнера.

### Кластерное обеспечение
- :green_heart:[Bootkube](https://github.com/kubernetes-sigs/bootkube)  :fire::fire::fire::fire: Bootkube — это инструмент для запуска самохостинга Kubernetes кластеры.
- :green_heart:[Claudie](https://github.com/berops/claudie)  :fire: Многооблачные кластеры с каждым узелком в разных облачных провайдерах.
- :green_heart:[Cluster API](https://github.com/kubernetes-sigs/cluster-api)  :fire::fire::fire::fire::fire: Кластер API является Kubernetes подпроект, ориентированный на предоставление декларативных API и инструментов для упрощения предоставления, обновления и эксплуатации нескольких Kubernetes кластеры.
- :green_heart:[eksctl](https://github.com/weaveworks/eksctl)  :fire::fire::fire::fire::fire: - `eksctl` Простой инструмент CLI для создания кластеров на EKS - новый управляемый Amazon Kubernetes Обслуживание EC2.
- :green_heart:[k0s](https://github.com/k0sproject/k0s)  :fire::fire::fire::fire::fire: - k0s - нулевое трение Kubernetes (Простой, твердый и сертифицированный) Kubernetes Распределение
- :green_heart:[k3d](https://github.com/rancher/k3d)  :fire::fire::fire::fire::fire: - k3d, и Windows., Destroy, половина памяти, широко доступная, является инструментом для запуска локальных кластеров k3s в докере. Это один двоичный около 20 МБ. Вам нужно установить Docker.
- :green_heart:[k3s](https://github.com/rancher/k3s)  :fire::fire::fire::fire::fire: Легкий вес KubernetesЛегко устанавливается,Kubernetes Кластеры из командной строки.
- :green_heart:[kind](https://github.com/kubernetes-sigs/kind)  :fire::fire::fire::fire::fire: Тип - это инструмент для запуска локального Kubernetes кластеры с использованием «узлов» контейнера Docker.
- :green_heart:[kops](https://github.com/kubernetes/kops)  :fire::fire::fire::fire::fire: - `kops` помогает вам создавать, как род, обновлять и поддерживать производственный класс
- :green_heart:[kube-aws](https://github.com/kubernetes-incubator/kube-aws)  :fire::fire::fire::fire: - `kube-aws` Инструмент командной строки для создания / обновления / уничтожения Kubernetes Кластеры на AWS.
- :green_heart:[kubespray](https://github.com/kubernetes-sigs/kubespray)  :fire::fire::fire::fire::fire: - Развернуть готовое производство Kubernetes кластер
- :green_heart:[microK8s](https://github.com/ubuntu/microk8s)  :fire::fire::fire::fire::fire: - Самый маленький, самый быстрый Kubernetes
- :green_heart:[Minikube](https://github.com/kubernetes/minikube)  :fire::fire::fire::fire::fire: Миникуб реализует местный Kubernetes кластер на macOS, Linux, все в двоичной системе менее 100 МБ.
- :green_heart:[Talos Linux](https://github.com/siderolabs/talos)  :fire::fire::fire::fire::fire: Talos Linux - это минимальная, неизменяемая, безопасная ОС, которая устанавливает ваниль. Kubernetes - для производственных центров обработки данных, K8sДомой и Эдж.
- :green_heart:[karpenter]([https://karpenter.sh](https://github.com/aws/karpenter-provider-aws))  :fire::fire::fire::fire::fire: - Карпентер - это Kubernetes Узел Autoscaler построен для гибкости, производительности и простоты.
- :green_heart:[Kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/) kubeadm выполняет действия, необходимые для создания минимально жизнеспособного кластера.
- :green_heart:[vCluster](https://github.com/loft-sh/vcluster/) : :fire::fire::fire::fire::fire: VCluster позволяет создавать полностью функциональные виртуальные системы Kubernetes кластеры, резко снижающие затраты и улучшающие многоквартирность и изоляцию по сравнению с традиционными Kubernetes. 
  
### Автоматизация и CI/CD
- :green_heart:[Argo CD](https://github.com/argoproj/argo-cd)  :fire::fire::fire::fire::fire: Argo CD - это декларативный инструмент непрерывной доставки GitOps Kubernetes.
- :green_heart:[Argo Events](https://github.com/argoproj/argo-events)  :fire::fire::fire::fire: Argo Events - это платформа автоматизации рабочих процессов, ориентированная на события. Kubernetes который помогает запускать K8s объекты, Argo Workflows, рабочие нагрузки без сервера и т.д.
- :green_heart:[Argo Rollouts](https://github.com/argoproj/argo-rollouts)  :fire::fire::fire::fire: Контроллер Argo Rollouts использует пользовательский ресурс Rollout для обеспечения дополнительных стратегий развертывания, таких как Blue Green и Canary. Kubernetes.
- :green_heart:[Argo Workflows](https://github.com/argoproj/argo)  :fire::fire::fire::fire::fire: Argo Workflows - это движок рабочего процесса с открытым исходным кодом для организации параллельных заданий на Kubernetes.
- :green_heart:[Argocd autopilot](https://github.com/argoproj-labs/argocd-autopilot)  :fire::fire::fire: Argo-CD Autopilot - это инструмент, который предлагает продуманный способ установки Argo-CD и управления репозиториями GitOps.
- :green_heart:[Flagger](https://github.com/weaveworks/flagger)  :fire::fire::fire::fire::fire: Flagger - это прогрессивный инструмент доставки, который автоматизирует процесс выпуска для приложений, работающих на Kubernetes.
- :green_heart:[Flux2](https://github.com/fluxcd/flux2)  :fire::fire::fire::fire::fire: Flux версии 2 построен с нуля для использования KubernetesСистема расширения API и интеграция с Prometheus и другими основными компонентами Kubernetes экосистемы.
- :green_heart:[k8s-image-swapper](https://github.com/estahn/k8s-image-swapper/)  :fire::fire: - `k8s-image-swapper` Это мутирующий веб-хук для KubernetesЗагружая изображения в свой собственный реестр и направляя изображения в новое место.
- :green_heart:[Kubero](https://github.com/kubero-dev/kubero)  :fire::fire::fire::fire::fire: Бесплатная и самостоятельная альтернатива Heroku PaaS Kubernetes Что такое GitOps
- :green_heart:[KubeSphere](https://github.com/kubesphere/kubesphere)  :fire::fire::fire::fire::fire: KubeSphere - это распределенная операционная система, обеспечивающая облачный нативный стек Kubernetes как ядро, и стремится быть архитектурой plug-and-play для бесшовной интеграции сторонних приложений для повышения своей экосистемы.
- :green_heart:[Reloader](https://github.com/stakater/Reloader)  :fire::fire::fire::fire::fire: Перезагрузчик может видеть изменения `ConfigMap` и `Secret` И в них есть свои плюсы и минусы. `DeploymentConfigs`, `Deployments`, `Daemonsets` и `Statefulsets`.
- :green_heart:[terranetes-controller](https://github.com/appvia/terranetes-controller)  :fire: Контроллер Terranetes позволяет команде платформы предоставлять возможности самообслуживания на облачных ресурсах.
- :green_heart:[Skaffold](https://github.com/GoogleContainerTools/skaffold)  :fire::fire::fire::fire::fire: Skaffold - это инструмент командной строки, который облегчает непрерывное развитие Kubernetes приложения.
- :green_heart:[Spinnaker](https://github.com/spinnaker/spinnaker)  :fire::fire::fire::fire::fire: Spinnaker - это платформа непрерывной доставки с открытым исходным кодом для выпуска изменений программного обеспечения с высокой скоростью и уверенностью.
- :green_heart:[TF-controller](https://github.com/weaveworks/tf-controller)  :fire: TF-контроллер является экспериментальным контроллером для Flux для согласования ресурсов Terraform в GitOps.
- :green_heart:[werf](https://github.com/werf/werf)  :fire::fire::fire::fire::fire: Werf - это инструмент CLI, склеивающий Git, Docker, Helm & Kubernetes с любой системой CI для реализации CI/CD и GitOps. 
- :green_heart:[Weave GitOps](https://github.com/weaveworks/weave-gitops)  :fire::fire: Weave GitOps - простая платформа для разработчиков с открытым исходным кодом для людей, которые хотят нативные облачные приложения без необходимости. Kubernetes Опыт.
- :green_heart:[Otomi - Self-hosted PaaS for K8s](https://github.com/redkubes/otomi-core)  :fire::fire::fire::fire: Otomi добавляет инструменты, ориентированные на разработчиков и операции, автоматизацию и самообслуживание разработчиков поверх Kubernetes в любой инфраструктуре или облаке кодировать, создавать, выпускать, развертывать, защищать, управлять и контролировать контейнерные приложения.
:green_heart:[Cozystack - Self-hosted PaaS for K8s](https://github.com/cozystack/cozystack)  :fire::fire::fire::fire: - автономный PaaS под ключ, созданный для работы на закаленных кластерах Talos Linux, обеспечивая безопасность Kubernetes Автоматизация собственного металла. Идеально, если вы строите суверенные облака или краевые стеки.

### Управление кластерными ресурсами
- :green_heart:[Clusterpedia](https://github.com/clusterpedia-io/clusterpedia)  :fire: Кластерпедия используется для комплексного поиска ресурсов в нескольких кластерах, поддержки одновременного поиска одного вида ресурсов или нескольких видов ресурсов, существующих в нескольких кластерах.
- :green_heart:[Grafana Tanka](https://github.com/grafana/tanka)  :fire::fire::fire::fire: Чистая, лаконичная и супер гибкая альтернатива YAML для вас. Kubernetes кластер.
- :green_heart:[KEDA](https://github.com/kedacore/keda)  :fire::fire::fire::fire::fire: - KEDA позволяет проводить мелкозернистую автомасштабирование (в том числе до/с нуля) Kubernetes Рабочие нагрузки.
- :green_heart:[Kruise](https://github.com/openkruise/kruise)  :fire::fire::fire::fire::fire: Kruise состоит из нескольких контроллеров, которые расширяют и дополняют Kubernetes Основные контроллеры для управления рабочей нагрузкой.
- :green_heart:[KubeDirector](https://github.com/bluek8s/kubedirector)  :fire::fire: KubeDirector использует стандарт Kubernetes ()K8s) средства пользовательских ресурсов и расширения API для реализации кластеров приложений государственного масштабирования.
- :green_heart:[Kubenav](https://github.com/kubenav/kubenav)  :fire::fire::fire::fire: Кубенав - это навигатор для вас. Kubernetes скопления прямо в кармане.
- :green_heart:[Liqo](https://github.com/liqotech/liqo)  :fire::fire: Liqo реализует динамический обмен ресурсами между различными Kubernetes кластеры (например, разгрузка контейнеров и сервисов), поддерживающие децентрализованное управление.
- :green_heart:  [Meshery](https://github.com/meshery/meshery)  :fire::fire::fire::fire::fire: Meshery - это облачный менеджер с открытым исходным кодом, который позволяет проектировать и управлять всеми KubernetesБазовая инфраструктура и приложения.
- :green_heart:[Pluto](https://github.com/FairwindsOps/pluto)  :fire::fire::fire::fire: Плутон — это утилита, помогающая пользователям найти устаревшие Kubernetes apiVersions в своих репозиториях кода и выпусках шлема.
- :green_heart:[Polaris](https://github.com/FairwindsOps/polaris)  :fire::fire::fire::fire::fire: Polaris - это механизм политики с открытым исходным кодом для Kubernetes Это проверяет и восстанавливает конфигурацию ресурсов.
- :green_heart:[Projectsveltos](https://github.com/projectsveltos/addon-manager)  :fire: Projectsveltos является Kubernetes Дополнительный контроллер, который упрощает развертывание и управление дополнениями и приложениями в нескольких кластерах.
- :green_heart:[The Hierarchical Namespace Controller](https://github.com/kubernetes-sigs/multi-tenancy/tree/master/incubator/hnc)  :fire::fire::fire: Иерархические пространства имен облегчают совместное использование кластера, делая пространства имен более мощными.

### Управление секретами
- :green_heart:[Kubernetes External Secrets](https://github.com/godaddy/kubernetes-external-secrets)  :fire::fire::fire::fire::fire: - Kubernetes Внешние секреты позволяют использовать внешние системы управления секретами, такие как AWS Secrets Manager или HashiCorp Vault, для безопасного добавления секретов. Kubernetes.
- :green_heart:[Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets)  :fire::fire::fire::fire::fire: Зашифровать свой секрет в SealedSecret, который безопасно хранить, даже в публичном хранилище.
- :green_heart:[akv2k8s](https://github.com/SparebankenVest/azure-key-vault-to-kubernetes)  :fire::fire: - Azure Key Vault Kubernetes (akv2k8s) сделает доступными объекты Azure Key Vault Kubernetes двумя способами: как родной Kubernetes Секреты; как переменные среды, непосредственно введенные в приложение Контейнер

### Сеть
- :green_heart:[Calico Networking](https://github.com/projectcalico/calico)  :fire::fire::fire::fire::fire: Calico - это решение для сетевой и сетевой безопасности с открытым исходным кодом для контейнеров, виртуальных машин и рабочих нагрузок голого металла.
- :green_heart:[cert-manager](https://github.com/jetstack/cert-manager)  :fire::fire::fire::fire::fire: Серт-менеджер - это Kubernetes аддон для автоматизации управления и выдачи сертификатов TLS из различных источников выдачи.
- :green_heart:[cilium](https://github.com/cilium/cilium)  :fire::fire::fire::fire::fire: Cilium - это сетевое решение, решение для наблюдения и безопасности с помощью плоскости данных на основе eBPF.
- :green_heart:[CoreDNS](https://github.com/coredns/coredns)  :fire::fire::fire::fire::fire: CoreDNS — быстрый и гибкий DNS-сервер, работающий на Kubernetes.
- :green_heart:[ingress-nginx](https://github.com/kubernetes/ingress-nginx)  :fire::fire::fire::fire::fire: - `ingress-nginx` является контроллером для Kubernetes Использование NGINX в качестве обратного прокси и балансировщика нагрузки.
- :green_heart:[Kong for Kubernetes](https://github.com/Kong/kubernetes-ingress-controller)  :fire::fire::fire::fire: Настройка плагинов, проверка здоровья, балансировка нагрузки и многое другое в Гонконге Kubernetes Услуги.
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - Плюгин kububl, который использует tcpdump и Wireshark, чтобы начать удаленный захват на любом контейнере в вашем компьютере. Kubernetes кластер.
- :green_heart:[kubectl trace](https://github.com/iovisor/kubectl-trace)  :fire::fire::fire::fire: - `kubectl trace` Это плагин kububl, который позволяет вам планировать выполнение программ bpftrace в вашем компьютере. Kubernetes кластер.
- :green_heart:[Kube Karp](https://github.com/immanuelfodor/kube-karp)  :fire: Добавить плавающий виртуальный IP Kubernetes Кластерные узлы для легкой балансировки нагрузки на основе протокола CARP
- :green_heart:[kubernetes-ingress](https://github.com/nginxinc/kubernetes-ingress)  :fire::fire::fire::fire::fire:  Реализация контроллера Ingress для NGINX и NGINX Plus (коммерческий).
- :green_heart:[kube-ovn](https://github.com/alauda/kube-ovn)  :fire::fire::fire::fire:  - А Kubernetes Сетевое оборудование для предприятий, которые богаты функциями и просты в эксплуатации.
- :green_heart:[loxilb](https://github.com/loxilb-io/loxilb)  :fire::fire::fire:  - А Kubernetes сервисный нагрузочный баланс на основе eBPF.
  
### хранение
- :green_heart:[Longhorn](https://github.com/longhorn/longhorn)  :fire::fire::fire::fire::fire: Longhorn - распределенная система хранения блоков для Kubernetes.
- :green_heart:[OpenEBS](https://github.com/openebs/openebs)  :fire::fire::fire::fire::fire: OpenEBS является наиболее широко развернутым и простым в использовании решением для хранения с открытым исходным кодом. Kubernetes.
- :green_heart:[Rook](https://github.com/rook/rook)  :fire::fire::fire::fire::fire: Rook - это облачный оркестратор хранения с открытым исходным кодом для Kubernetes.

### Тестирование и устранение неполадок
- :green_heart:[Chainsaw](https://github.com/kyverno/chainsaw)  :fire: Окончательный конечный инструмент для тестирования Kubernetes операторов.
- :green_heart:[Chaos Mesh](https://github.com/pingcap/chaos-mesh)  :fire::fire::fire::fire::fire: Chaos Mesh - это облачная платформа Chaos Engineering, которая организует хаос на Kubernetes окружающей среды.
- :green_heart:[chaoskube](https://github.com/linki/chaoskube)  :fire::fire::fire::fire: - `chaoskube` периодически убивает случайные стручки в вашем Kubernetes кластер.
- :green_heart:[Conftest](https://github.com/open-policy-agent/conftest)  :fire::fire::fire::fire: Conftest помогает вам писать тесты на структурированные данные конфигурации.
- :green_heart:[DETIK](https://github.com/bats-core/bats-detik)  :fire: Библиотека, упрощающая сквозное тестирование K8s Приложения, использующие [BATS](https://github.com/bats-core/bats-core) Утверждения и запросы естественного языка.
- :green_heart:[k6](https://github.com/loadimpact/k6)  :fire::fire::fire::fire::fire: k6 - это современный инструмент для нагрузочного тестирования, основанный на многолетнем опыте Load Impact в индустрии нагрузочных и эксплуатационных испытаний.
- :green_heart:[ksniff](https://github.com/eldadru/ksniff)  :fire::fire::fire::fire: - Плюгин kububl, который использует tcpdump и Wireshark, чтобы начать удаленный захват на любом контейнере в вашем компьютере. Kubernetes кластер.
- :green_heart:[Kube DOOM](https://github.com/storax/kubedoom)  :fire::fire::fire::fire: Следующий уровень инженерии хаоса здесь! Убей стручки внутри себя Kubernetes Стреляйте в них, стреляйте в них!
- :green_heart:[kube-monkey](https://github.com/asobti/kube-monkey)  :fire::fire::fire::fire::fire: - Он случайно удаляет Kubernetes (k8s) стручки в кластере, поощряющие и подтверждающие развитие отказоустойчивых услуг.
- :green_heart:[kube-score](https://github.com/zegl/kube-score)  :fire::fire::fire::fire: - `kube-score` Это инструмент, который выполняет статический анализ кода. Kubernetes Определения объектов.
- :green_heart:[Kubectl-debug](https://github.com/JamesTGrant/kubectl-debug)  :fire::fire::fire::fire::fire: - `kubectl-debug` Это внедревесное решение для устранения неполадок беговых стручков, которое позволяет запускать новый контейнер в беговых стручках для отладки.
- :green_heart:[KubeInvaders](https://github.com/lucky-sideburn/KubeInvaders)  :fire::fire::fire: С помощью KubeInvaders вы можете Kubernetes Скопируйте в веселой форме и проверьте, насколько он устойчив.
- :green_heart:[Kubetest](https://github.com/vapor-ware/kubetest)  :fire: Kubetest - это плагин pytest, который облегчает управление Kubernetes кластер в рамках интеграционных тестов.
- :green_heart:[Litmus](https://github.com/litmuschaos/litmus)  :fire::fire::fire::fire::fire: Litmus предоставляет инструменты для организации хаоса Kubernetes Помочь СПВ найти слабые места в их развертывании.
- :green_heart:[popeye](https://popeyecli.io/)  :fire::fire::fire::fire::fire: - Попай - это утилита, которая сканирует вживую Kubernetes кластер и сообщает о потенциальных проблемах с развернутыми ресурсами и конфигурациями.
- :green_heart:[PowerfulSeal](https://github.com/bloomberg/powerfulseal)  :fire::fire::fire::fire: PowerfulSeal вводит сбой в ваш Kubernetes кластеры, чтобы вы могли обнаружить проблемы как можно раньше.
- :green_heart:[Testkube](https://github.com/kubeshop/testkube)  :fire::fire::fire: - Тесткубе - это Kubernetes Нативная структура тестирования для оркестровки и выполнения тестов. Это позволяет вам выполнить любой из ваших тестов в Kubernetes кластер. Интегрируется с вашим CI / CD и позволяет вам следовать подходу GitOps к тестированию, имея централизованное место для всех ваших результатов тестирования во всех кластерах.

### Мониторинг, оповещения и визуализация
- :green_heart:[BotKube](https://github.com/infracloudio/botkube)  :fire::fire::fire::fire: Интеграция BotKube со Slack или Mattermost поможет вам контролировать вашу работу. Kubernetes кластер, отладка критически важных развертываний и дает рекомендации по стандартной практике путем проведения проверок Kubernetes ресурсов.
- :green_heart:[Canary Checker](https://github.com/flanksource/canary-checker)  :fire: Canary Checker - это платформа для проверки здоровья с 30+ встроенными типами проверки здоровья.
- :green_heart:[Cortex](https://github.com/cortexproject/cortex)  :fire::fire::fire::fire::fire: Cortex обеспечивает горизонтально масштабируемое, высокодоступное, многопользовательское, долгосрочное хранение для Prometheus.
- :green_heart:[Goldilocks](https://github.com/FairwindsOps/goldilocks)  :fire::fire::fire: Goldilocks - это утилита, которая может помочь вам определить отправную точку для запросов ресурсов и ограничений.
- :green_heart:[Goldpinger](https://github.com/bloomberg/goldpinger)  :fire::fire::fire::fire::fire: - Инструмент отладки для Kubernetes который тестирует и отображает связь между узлами в кластере.
- :green_heart:[Grafana](https://github.com/grafana/grafana)  :fire::fire::fire::fire::fire: Grafana позволяет запрашивать, визуализировать, предупреждать и понимать ваши показатели независимо от того, где они хранятся.
- :green_heart:[Helm Dashboard](https://github.com/komodorio/helm-dashboard)  :fire::fire::fire::fire: - Пропавший интерфейс для Хелма. Плагин Helm Dashboard предлагает основанный на пользовательском интерфейсе способ просмотра установленных диаграмм Helm, просмотра истории их пересмотра и соответствующих ресурсов k8. 
- :green_heart:[Kiali](https://github.com/kiali/kiali)  :fire::fire::fire::fire::fire: Киали работает с Istio, чтобы визуализировать топологию сервисной сетки.
- :green_heart:[k8s-image-availability-exporter](https://github.com/flant/k8s-image-availability-exporter)  :fire: Экспортер Прометея, который предупреждает вас о изображениях, которые определены в Kubernetes объекты, но не доступны в реестре контейнеров. 
- :green_heart:[kube-capacity](https://github.com/robscott/kube-capacity)  :fire::fire::fire: Это простой CLI, который предоставляет обзор запросов на ресурсы, ограничений и использования. Kubernetes кластер.
- :green_heart:[Kubernetes Dashboard](https://github.com/kubernetes/dashboard)  :fire::fire::fire::fire::fire: - Kubernetes Dashboard - это универсальный веб-интерфейс для Kubernetes кластеры.
- :green_heart:[Kubedev](https://github.com/relferreira/kubedev)  :fire: Кубедев - мощный и красивый пользовательский интерфейс для управления Kubernetes кластеры.
- :green_heart:[KubeHelper](https://github.com/KubeHelper/kubehelper)  :fire: - KubeHelper - упрощает многие ежедневные Kubernetes кластерные задачи через веб-интерфейс.
- :green_heart:[Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server)  :fire::fire::fire::fire::fire: Metrics Server - это масштабируемый и эффективный источник метрик контейнерных ресурсов. Kubernetes Встроенные автомасштабирующие трубопроводы.
- :green_heart:[Kubernetes Operational View](https://github.com/hjacobs/kube-ops-view)  :fire::fire::fire::fire: Инструмент, который призван обеспечить общую оперативную картину для нескольких Kubernetes кластеры.
- :green_heart:[kube-state-metrics](https://github.com/kubernetes/kube-state-metrics)  :fire::fire::fire::fire::fire: - kube-state-metrics - это простая услуга, которая слушает Kubernetes API сервер и генерирует метрики о состоянии объектов.
- :green_heart:[kubewatch](https://github.com/robusta-dev/kubewatch)  :fire::fire::fire::fire::fire: - `kubewatch` является Kubernetes Наблюдатель, который в настоящее время публикует уведомления для доступных центров сотрудничества / каналов уведомлений.
- :green_heart:[Lens](https://github.com/lensapp/lens)  :fire::fire::fire::fire::fire: Линза - это полезный, привлекательный пользовательский интерфейс с открытым исходным кодом (UI) для работы с Kubernetes кластеры.
- :green_heart:[Mizu](https://github.com/up9inc/mizu)  :fire::fire::fire: API для просмотра трафика Kubernetes Это позволяет просматривать все коммуникации API между микросервисами. TCPDump и Wireshark переизобрели Kubernetes
- :green_heart:[Network mapper](https://github.com/otterize/network-mapper)  :fire::fire: - Карта Kubernetes в кластерном трафике и экспорте в виде текста, намерений или изображения.
- :green_heart:[Popeye](https://github.com/derailed/popeye)  :fire::fire::fire::fire::fire: - Попай - это утилита, которая сканирует вживую Kubernetes кластер и сообщает о потенциальных проблемах с развернутыми ресурсами и конфигурациями.
- :green_heart:[Prometheus](https://github.com/prometheus/prometheus)  :fire::fire::fire::fire::fire: Prometheus, проект Cloud Native Computing Foundation, представляет собой систему и систему мониторинга услуг.
- :green_heart:[Searchlight](https://github.com/searchlight/searchlight)  :fire::fire: - Searchlight/Icinga периодически выполняет различные проверки Kubernetes кластер и отправляет уведомления, если обнаруживает проблему.
- :green_heart:[Sloop](https://github.com/salesforce/sloop)  :fire::fire::fire: - Мониторы Sloop KubernetesЗапись истории событий и изменений состояния ресурсов и предоставление визуализаций для помощи в отладке прошлых событий.
- :green_heart:[Thanos](https://github.com/thanos-io/thanos)  :fire::fire::fire::fire::fire: Танос представляет собой набор компонентов, которые могут быть составлены в высокодоступную метрическую систему с неограниченной емкостью.
- :green_heart:[K8Studio](https://github.com/guiqui/k8Studio)  :fire::fire::fire: K8Studio IDE для управления и визуализации Kubernetes Кластеры.
- :green_heart:[KubeDiagrams](https://github.com/philippemerle/KubeDiagrams)  :fire: - Генерировать Kubernetes Архитектурные схемы из Kubernetes манифестные файлы, файлы кустомизации, диаграммы Хелма и фактическое состояние кластера.

### Резервное копирование и восстановление
- :green_heart:[katafygio](https://github.com/bpineau/katafygio)  :fire: Катафигио обнаруживает Kubernetes объекты (развертывания, сервисы, ...) и непрерывно сохранять их в виде ямл-файлов в git-хранилище.
- :green_heart:[Velero](https://github.com/vmware-tanzu/velero)  :fire::fire::fire::fire::fire: Velero (ранее Heptio Ark) дает вам инструменты для резервного копирования и восстановления. Kubernetes кластерные ресурсы и постоянные объемы.

### Безопасность и соблюдение
- :green_heart:[Datree](https://github.com/datreeio/datree)  :fire::fire::fire::fire::fire: Datree - это инструмент CLI, который поддерживает Kubernetes администраторы в своих ролях, предотвращая ошибки разработчиков Kubernetes Конфигурации, которые могут привести к отказу кластеров в производстве.
- :green_heart:[Deepfence ThreatMapper](https://github.com/deepfence/ThreatMapper)  :fire::fire::fire: Apache v2, мощный сканер уязвимостей во время выполнения для кубернетов, виртуальных машин и бессерверных.
- :green_heart:[Falco](https://github.com/falcosecurity/falco)  :fire::fire::fire::fire::fire: Falco - это монитор поведенческой активности, предназначенный для обнаружения аномальной активности в ваших приложениях. Вы можете использовать Falco для мониторинга безопасности вашего времени выполнения. Kubernetes Приложения и внутренние компоненты.
- :green_heart:[Gatekeeper](https://github.com/open-policy-agent/gatekeeper)  :fire::fire::fire::fire::fire: Контроллер политики для Kubernetes
- :green_heart:[Intents operator](https://github.com/otterize/intents-operator)  :fire::fire: - Управлять сетевыми политиками, политиками авторизации Istio и ACL Kafka в одном месте. Kubernetes Кластер с легкостью.
- :green_heart:[k-rail](https://github.com/cruise-automation/k-rail)  :fire::fire: k-rail - инструмент для обеспечения соблюдения политики рабочей нагрузки KubernetesЭто может помочь вам обеспечить многоквартирный кластер с минимальными нарушениями и максимальной скоростью.
- :green_heart:[Konstraint](https://github.com/plexsystems/konstraint)  :fire::fire: Konstraint - это инструмент CLI, который помогает создавать и управлять ограничениями при использовании Gatekeeper.
- :green_heart:[kube-bench](https://github.com/aquasecurity/kube-bench)  :fire::fire::fire::fire::fire: kube-bench - это приложение Go, которое проверяет, Kubernetes безопасно развертывается путем проведения проверок, зарегистрированных в СНГ; Kubernetes Знак отличия.
- :green_heart:[kube-hunter](https://github.com/aquasecurity/kube-hunter)  :fire::fire::fire::fire::fire: Кубе-охотник охотится за недостатками безопасности Kubernetes кластеры.
- :green_heart:[KubeLinter](https://github.com/stackrox/kube-linter)  :fire::fire::fire::fire: KubeLinter - инструмент статического анализа, который проверяет Kubernetes Файлы YAML и диаграммы Helm обеспечивают соответствие представленных в них приложений передовой практике.
- :green_heart:[Kubesploit](https://github.com/cyberark/kubesploit)  :fire::fire::fire: Kubesploit - это кроссплатформенный пост-эксплуататорский сервер и агент HTTP/2 Command & Control, предназначенный для контейнерных сред, написанных на Golang и построенных поверх проекта Merlin Рассела Ван Тюила (@Ne0nd0g).
- :green_heart:[KubiScan](https://github.com/cyberark/KubiScan)  :fire::fire::fire: - Инструмент для сканирования Kubernetes кластер для рискованных разрешений в KubernetesМодель авторизации управления доступом на основе ролей (RBAC).
- :green_heart:[Kyverno](https://github.com/kyverno/kyverno)  :fire::fire::fire::fire: Kyverno - это политический двигатель, предназначенный для KubernetesОн может валидировать, мутировать и генерировать конфигурации с использованием элементов управления допуском и фонового сканирования.
- :green_heart:[Netchecks](https://github.com/hardbyte/netchecks/)  :fire: Набор инструментов для тестирования сетевых условий и утверждения, что они соответствуют ожиданиям.
- :green_heart:[Permission manager](https://github.com/sighupio/permission-manager)  :fire::fire::fire: Permission Manager - это приложение, разработанное SIGHUP, которое обеспечивает сверхлегкое и удобное управление RBAC. Kubernetes.
- :green_heart:[rakkess](https://github.com/corneliusweig/rakkess)  :fire::fire::fire: - плагин kububl для отображения матрицы доступа к ресурсам сервера
- :green_heart:[Rönd](https://github.com/rond-authz/rond)  :fire: Rönd - легкий open-source Kubernetes Контейнер для коляски, который помогает защитить API с помощью простых политик безопасности. Кроме того, он позволяет создавать решения RBAC/ABAC.
- :green_heart:[Teleport](https://github.com/gravitational/teleport)  :fire::fire::fire::fire::fire: Teleport Unified Access Plane позволяет инженерам быстро получить доступ к любому вычислительному ресурсу в любом месте.


### Сервисная сеть
- :green_heart:[Istio](https://github.com/istio/istio)  :fire::fire::fire::fire::fire: Открытая платформа для подключения, управления и защиты микросервисов.
- :green_heart:[Linkerd](https://github.com/linkerd/linkerd)  :fire::fire::fire::fire::fire: Linkerd - это прозрачная сервисная сетка, предназначенная для того, чтобы сделать современные приложения безопасными и здоровыми.
- :green_heart:[Open Service Mesh](https://github.com/openservicemesh/osm/)  :fire::fire::fire::fire::fire: Open Service Mesh (OSM) - это легкая, расширяемая облачная сервисная сетка, которая позволяет пользователям равномерно управлять, защищать и получать функции наблюдения из коробки для высокодинамичных микросервисных сред.


### Инструменты развития
- :green_heart:[Cyclops](https://github.com/cyclops-ui/cyclops)  :fire::fire: Настраиваемый UI для Kubernetes развертывание
- :green_heart:[Eclipse JKube](https://github.com/eclipse/jkube)  :fire::fire: Инструменты и плагины для Java-разработчиков, которые помогут вам создавать изображения контейнеров вместе с необходимыми манифестами для развертывания ваших приложений. Kubernetes.
- :green_heart:[garden](https://github.com/garden-io/garden)  :fire::fire::fire::fire::fire: Сад обеспечивает производство как Kubernetes среды тестирования для интеграционных тестов, QA и разработки.
- :green_heart:[gefyra](https://github.com/gefyrahq/gefyra)  :fire::fire::fire: -Gefyra невероятно быстрая, скалистая, локальная разработка приложений Kubernetes.
- :green_heart:[ko](https://github.com/google/ko)  :fire::fire::fire::fire::fire: - `ko` Это инструмент для создания и развертывания приложений Golang. Kubernetes.
- :green_heart:[Konfig](https://github.com/cloud66-oss/konfig)  :fire: - Конфиг - это Kubernetes Дружественная жемчужина железных дорог. Он может загружать конфигурацию и секреты как из YAML, так и из папок с отдельными файлами и представлять их вашему приложению одинаково.
- :green_heart:[kubevious](https://github.com/kubevious/Kubevious)  :fire::fire::fire::fire: Kubevious отображает все конфигурации, относящиеся к приложению, в одном месте. Это экономит много времени у операторов, устраняя необходимость поиска настроек и копания в селекторах и этикетках.
- :green_heart:[kubectl-warp](https://github.com/ernoaapa/kubectl-warp)  :fire::fire: - Kubernetes Плагин CLI для синхронизации и выполнения локальных файлов в Pod on Kubernetes
- :green_heart:[kubernix](https://github.com/saschagrunert/kubernix)  :fire::fire::fire: Этот проект направлен на обеспечение единой зависимости. Kubernetes кластеры для локальных испытаний, экспериментов и разработок.
- :green_heart:[Makisu](https://github.com/uber/makisu)  :fire::fire::fire::fire::fire: Makisu - это быстрый и гибкий инструмент для создания изображений Docker, предназначенный для непривилегированных контейнерных сред, таких как Mesos. Kubernetes.
- :green_heart:[mirrord](https://github.com/metalbear-co/mirrord)  :fire::fire::fire::fire::fire: Зеркало соединяет локальный процесс и облачную среду и запускает локальный код в облачных условиях.
- :green_heart:[Monokle](https://github.com/kubeshop/monokle)  :fire::fire::fire: Monokle помогает вам создавать, редактировать и проверять манифесты ямла, визуализировать и проверять ссылки на ресурсы и зависимости, подключать и сравнивать ресурсы с вашими кластерами, отлаживать выход кустомизации или руля и многое другое!
- :green_heart:[Okteto](https://github.com/okteto/okteto)  :fire::fire::fire::fire: - `okteto` ускоряет рабочий процесс развития Kubernetes приложения.
- :green_heart:[Telepresence](https://github.com/telepresenceio/telepresence)  :fire::fire::fire::fire::fire: Телеприсутствие обеспечивает быстрое и реалистичное локальное развитие. Kubernetes Микросервисы.
- :green_heart:[Tilt](https://github.com/tilt-dev/tilt)  :fire::fire::fire::fire::fire: Tilt обеспечивает многосервисное развитие и следит за тем, чтобы они вели себя хорошо.
- :green_heart:[Tye](https://github.com/dotnet/tye)  :fire::fire::fire::fire::fire: Tye - это инструмент для разработчиков, который облегчает разработку, тестирование и развертывание микросервисов и распределенных приложений.
- [Aptakube](https://aptakube.com) Современный, легкий и многокластерный настольный клиент для KubernetesПодключайтесь к нескольким кластерам одновременно для просмотра, редактирования и управления всеми вашими ресурсами.

### Обработка данных и машинное обучение
- :green_heart:[Kubeflow](https://github.com/kubeflow/kubeflow)  :fire::fire::fire::fire::fire: Kubeflow - это облачная платформа для машинного обучения, основанная на внутренних конвейерах машинного обучения Google.
- :green_heart:[nos](https://github.com/nebuly-ai/nos)  :fire::fire: - `nos` Это платформа с открытым исходным кодом для эффективного выполнения рабочих нагрузок ИИ Kubernetesувеличение использования GPU и сокращение инфраструктурных и эксплуатационных расходов.
- :green_heart:[Strimzi](https://github.com/strimzi/strimzi-kafka-operator)  :fire::fire::fire::fire::fire: Strimzi предоставляет способ запуска кластера Apache Kafka Kubernetes OpenShift в различных конфигурациях развертывания.
- :green_heart:[Volcano](https://github.com/volcano-sh/volcano)  :fire::fire::fire::fire: Вулкан — это система, построенная на Kubernetes.
- :green_heart:[yunikorn](https://github.com/apache/incubator-yunikorn-core)  :fire::fire: - легкий универсальный планировщик ресурсов для контейнерных оркестраторных систем.

### Управление данными
- :green_heart:[Kubegres](https://github.com/reactive-tech/kubegres)  :fire::fire::fire: - Кубегрес - это Kubernetes оператор, позволяющий развернуть один или несколько кластеров Pods PostgreSql с репликацией данных и отказоустойчивостью, включенными вне коробки.
- :green_heart:[Postgres Operator](https://github.com/CrunchyData/postgres-operator)  :fire::fire::fire::fire::fire: PGO, оператор Postgres от Crunchy Data, предоставляет декларативное решение Postgres, которое автоматически управляет кластерами PostgreSQL.
- :green_heart:[MongoDB Community Kubernetes Operator](https://github.com/mongodb/mongodb-kubernetes-operator)  :fire::fire: - Это а Kubernetes Оператор, включающий MongoDB Community Kubernetes кластеры.
- :green_heart:[MySQL Operator for Kubernetes](https://github.com/mysql/mysql-operator)  :fire: Оператор MYSQL для Kubernetes является оператором для Kubernetes Управление MySQL InnoDB Кластерные установки внутри Kubernetes Кластер.
- :green_heart:[Redis Operator](https://github.com/spotahome/redis-operator)  :fire::fire::fire: - Redis Operator создает/настраивает/управляет переоборудованием Kubernetes.

### Разное
- :green_heart:[Agones](https://github.com/googleforgames/agones)  :fire::fire::fire::fire::fire: Agones - это библиотека для хостинга, запуска и масштабирования выделенных игровых серверов на Kubernetes.
- :green_heart:[AWS Controllers for Kubernetes](https://github.com/aws/aws-controllers-k8s)  :fire::fire::fire::fire: контроллеры AWS для Kubernetes (ACK) позволяет определять и использовать сервисные ресурсы AWS непосредственно из Kubernetes.
- :green_heart:[AWS Node Termination Handler](https://github.com/aws/aws-node-termination-handler)  :fire::fire::fire: - А Kubernetes Daemonset изящно справляется с отключением экземпляра EC2
- :green_heart:[Brigade](https://github.com/brigadecore/brigade/)  :fire::fire::fire::fire::fire: Бригада - это инструмент для создания трубопроводов Kubernetes.
- :green_heart:[Crossplane](https://github.com/crossplane/crossplane)  :fire::fire::fire::fire::fire: Crossplane является открытым исходным кодом Kubernetes Дополнение, которое расширяет любой кластер с возможностью предоставления и управления облачной инфраструктурой, услугами и приложениями.
- :green_heart:[Descheduler for Kubernetes](https://github.com/kubernetes-sigs/descheduler)  :fire::fire::fire::fire::fire: - Расписание подиумов из узлов на основе политик
- :green_heart:[Devtron](https://github.com/devtron-labs/devtron)  :fire::fire::fire::fire: Он разработан как платформа самообслуживания для функционирования и обслуживания приложений (AppOps) на кубернетах дружественным для разработчиков способом.
- :green_heart:[OpenCost](https://github.com/opencost/opencost)  :fire::fire::fire::fire::fire: Модели OpenCost дают командам видимость текущих и исторических событий. Kubernetes Расходы и распределение ресурсов.
- :green_heart:[K8s-Cleaner](https://github.com/gianlucam76/k8s-cleaner)  :fire: - `k8s-cleaner` Выявляет и удаляет неиспользованные ресурсы.
- :green_heart:[K8sPurger](https://github.com/yogeshkk/K8sPurger)  :fire: - `K8sPurger` Охота на неиспользованные ресурсы Kubernetes.
- :green_heart:[KubeEdge](https://github.com/kubeedge/kubeedge)  :fire::fire::fire::fire::fire: KubeEdge построен на Kubernetes и расширяет нативную контейнерную оркестровку приложений и управление устройствами для хостов в Edge.
- :green_heart:[KubePug](https://github.com/rikatz/kubepug)  :fire::fire: Инструмент для проверки амортизации перед обновлением Kubernetes версия
- :green_heart:[Kube No Trouble](https://github.com/doitintl/kube-no-trouble)  :fire::fire::fire::fire::fire: Легко проверить свои кластеры на использование устаревших API
- :green_heart:[Shell-operator](https://github.com/flant/shell-operator)  :fire::fire::fire::fire: Shell-оператор - это инструмент для запуска сценариев, управляемых событиями, в Kubernetes кластер.

## Руководства, документы, блоги и обучение

### Руководители
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - всеобъемлющее введение в Kubernetes архитектура
- [A Deep Dive Into Kubernetes Schema Validation](https://www.datree.io/resources/kubernetes-schema-validation) - путеводитель по Kubernetes схема и как ее проверить с помощью OSS и нативных инструментов
- [A Guide to the Kubernetes Networking Model](https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/) - Углубленное прохождение Kubernetes сетевой
- [Amazon EKS Best Practices Guide for Security](https://aws.github.io/aws-eks-best-practices/) Это руководство содержит рекомендации по защите информации, систем и активов, которые зависят от EKS, обеспечивая при этом ценность бизнеса посредством оценки рисков и стратегий смягчения последствий.
- [Amazon EKS Node Drainer](https://github.com/aws-samples/amazon-k8s-node-drainer)  :fire: Руководство и пример для оцепления и выселения всех выселяемых стручков из узла EC2.
- [Comparison of Kubernetes Ingress controllers](https://docs.google.com/spreadsheets/d/191WWNpjJ2za6-nbG4ZoUMXMpUK8KlCIosvQB0f-oq3k/htmlview?pru=AAABdXUHlbs*g6XkyoZXhanlhRazst77Xw) В этом исследовании сравниваются возможности 14 различных Kubernetes Входящие контроллеры.  
- [Configuring HA Kubernetes cluster on bare metal servers with kubeadm](https://medium.com/faun/configuring-ha-kubernetes-cluster-on-bare-metal-servers-with-kubeadm-1-2-1e79f0f7857b) Оригинальное название: Stand Up a HA Kubernetes кластер на голых металлических серверах с kubeadm.
- [Introduction to Using Google Kubernetes Engine; Explain Like I’m Five!](https://medium.com/faun/google-kubernetes-engine-explain-like-im-five-1890e550c099) Создать свой первый управляемый Kubernetes Кластер в Google Kubernetes Двигатель с использованием Terraform.
- [Kubernetes Network Policy Recipes](https://github.com/ahmetb/kubernetes-network-policy-recipes)  :fire::fire::fire::fire::fire: Этот репозиторий содержит различные варианты использования Kubernetes Сетевая политика и выборка файлов YAML для использования в настройках.
- [Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)  :fire::fire::fire::fire::fire: - Kubernetes The Hard Way проведет вас через загрузку высокодоступного Kubernetes кластер с сквозным шифрованием между компонентами и аутентификацией RBAC.
- [Kubernetes Working Group for Multi-Tenancy](https://github.com/kubernetes-sigs/multi-tenancy)  :fire::fire::fire: Это рабочее место для предложений и прототипов, связанных с несколькими арендаторами.
- [Production grade Kubernetes Monitoring using Prometheus](https://medium.com/faun/production-grade-kubernetes-monitoring-using-prometheus-78144b835b60) Углубленное руководство по развертыванию решения мониторинга Prometheus.
- [The Illustrated Children’s Guide to Kubernetes](https://www.cncf.io/phippy/the-childrens-illustrated-guide-to-kubernetes/) Графические объяснения Kubernetes
- [Troubleshooting Kubernetes deployments](https://learnk8s.io/a/troubleshooting-kubernetes.pdf) - Потоковая диаграмма для устранения неполадок развертывания кубернетов в случае проблем
 - [Vertical Pod Autoscaling: The Definitive Guide](https://povilasv.me/vertical-pod-autoscaling-the-definitive-guide/) - углубленное объяснение Kubernetes VPA: что это такое, как он работает, как его использовать и какие ограничения он имеет. 
- [Writing Your First Kubernetes Operator](https://medium.com/faun/writing-your-first-kubernetes-operator-8f3df4453234) В этой статье мы рассмотрим, как создать и развернуть ваш первый Kubernetes Оператор использует оператор SDK.

### Блоги и видео
- [10 most common mistakes using kubernetes](https://blog.pipetail.io/posts/2020-05-04-most-common-mistakes-k8s/) Общие подводные камни и как их избежать.  
- [How the Department of Defense Moved to Kubernetes and Istio](https://www.youtube.com/watch?v=YjZ4AZ7hRM0) Сосредоточьтесь на стеке безопасности коляски, используя контейнеры Envoy и коляски для обеспечения нулевой безопасности доверия и многоуровневой безопасности.  
- [Kubernetes at Reddit: Tales from Production](https://youtu.be/WTbIBqNcjoQ) Слышать об успехах, участвовать в разбитом сердце производственных взрывов и получить представление о том, что хорошо работало и не работало для одного из самых загруженных веб-ресурсов в мире.  
- [Kubernetes Failure Stories](https://github.com/hjacobs/kubernetes-failure-stories)  :fire::fire::fire::fire::fire: Составленный список ссылок на публичные истории неудач, связанные с Kubernetes.  
- [Life of a Packet](https://www.youtube.com/watch?v=0Omvgd7Hg1I) отслеживание пути сетевого трафика в Kubernetes система.  
- [OPA Deep Dive](https://www.youtube.com/watch?v=Uj2N9S58GLU) Глубокое погружение на некоторые захватывающие новые функции в проекте OPA, представленном соавторами.  
- [Scaling Kubernetes to 2,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-2500-nodes/) + [Scaling Kubernetes to 7,500 Nodes](https://openai.com/blog/scaling-kubernetes-to-7500-nodes/) Проблемы, с которыми вы столкнетесь при работе на высоком уровне Kubernetes Рабочие нагрузки.
- [Service Mesh Comparison](https://servicemesh.es/) - Легкая компенсация, помогающая выбрать одну из реализаций сервиса Mesh.  
- [ArgoCD Best Practices](https://datree.io/resources/argocd-best-practices-you-should-know)

### Обучение и документы
- [A Beginner’s Guide to Kubernetes](https://medium.com/containermind/a-beginners-guide-to-kubernetes-7e8ca56420b6) - всеобъемлющее введение в Kubernetes архитектура
- [ConfigMaps in Kubernetes: how they work and what you should remember](https://blog.flant.com/configmaps-in-kubernetes-how-they-work-and-what-you-should-remember/) Понимание эволюции ConfigMaps, как они работают и что происходит, когда они меняются. 
- [Configuring Redis using a ConfigMap](https://kubernetes.io/docs/tutorials/configuration/configure-redis-using-configmap/) Прохождение, которое предоставляет реальный пример того, как настроить Redis с помощью ConfigMap
- [Example: Deploying Cassandra with a StatefulSet](https://kubernetes.io/docs/tutorials/stateful-application/cassandra/) Это руководство показывает вам, как запустить Apache Cassandra на KubernetesКассандра, база данных, нуждается в постоянном хранении для обеспечения долговечности данных.
- [Example: Deploying PHP Guestbook application with Redis](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/) Это руководство показывает вам, как создать и развернуть простое, многоуровневое веб-приложение с использованием Kubernetes и Докер.
- [Example: Deploying WordPress and MySQL with Persistent Volumes](https://kubernetes.io/docs/tutorials/stateful-application/mysql-wordpress-persistent-volume/) Это руководство показывает вам, как развернуть сайт WordPress и базу данных MySQL с помощью Minikube.
- [Exposing an External IP Address to Access an Application in a Cluster](https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address/) Это руководство показывает, как создать Kubernetes Объект обслуживания, который раскрывает внешний IP-адрес.
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) Официальный список широко используемых команд и флагов.  
- [Kubectl Kubernetes CheatSheet](https://github.com/dennyzhang/cheatsheet-kubernetes-A4)  :fire::fire::fire::fire: Читы, содержащие много полезных команд kububl
- [Kubernetes API Reference Docs](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/) - Обзор основных видов ресурсов, предоставляемых на высоком уровне Kubernetes API и их основные функции.  
- [Learn Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/) - Это учебное пособие обеспечивает прохождение основ Kubernetes Система кластерной оркестровки.
- [Play with Kubernetes](https://labs.play-with-k8s.com/) - Играй с ним. Kubernetes Это игровая площадка, которая позволяет пользователям работать K8s скопления в считанные секунды.
- [Ready-to-use commands and tips for kubectl](https://blog.flant.com/ready-to-use-commands-and-tips-for-kubectl/) - Различные советы и трюки инженеров Фланта.  
- [Running ZooKeeper, A Distributed System Coordinator](https://kubernetes.io/docs/tutorials/stateful-application/zookeeper/) - Это руководство демонстрирует запуск Apache Zookeeper на Kubernetes Использование StatefulSets, PodDisruptionBudgets и PodAntiAffinity.
- [Set Up a CI/CD Pipeline with Kubernetes](https://www.linux.com/audience/enterprise/set-cicd-pipeline-kubernetes-part-1-overview/) - Сквозное руководство по настройке трубопровода CI/CD Kubernetes.
- [StatefulSet Basics](https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/) Этот учебник предоставляет введение в управление приложениями с StatefulSets.
- [Webinar: K8s with OPA Gatekeeper](https://www.youtube.com/watch?v=v4wJE3I8BYM) Как использовать OPA для контроля того, что конечные пользователи могут сделать в кластере, и как обеспечить соответствие кластеров политике компании.  

### Руководство по сертификации
- [Certified Kubernetes Security Specialist - CKSS](https://github.com/ijelliti/CKSS-Certified-Kubernetes-Security-Specialist)  :fire::fire: Это хранилище представляет собой набор ресурсов для подготовки к сертификации. Kubernetes Экзамен специалиста по безопасности (CKSS).
- [CKS "Certified Kubernetes security specialist certification](https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist)  :fire::fire::fire::fire: - Kubernetes Ресурсы безопасности, в основном из материалов, разрешенных во время экзамена, и дополнительные дополнительные предметы, которые помогут вам продвинуться по пути безопасности контейнеров и кубернетов.
- [How to pass the Certified Kubernetes Administrator (CKA) exam on the first attempt](https://medium.com/faun/how-to-pass-certified-kubernetes-administrator-cka-exam-on-first-attempt-36c0ceb4c9e) - Руководство по сдаче экзамена CKA
- [The ultimate CKA "Certfified Kuberenetes Administator" resource since exam inception](https://github.com/walidshaari/Kubernetes-Certified-Administrator)  Обновленное репо официальных ресурсов, чтобы помочь вам освоить экзамен CKA, а также некоторые дополнительные ресурсы для консолидации ваших знаний об управлении кубернетами.
- [Kubernetes Exam Simulator](https://killer.sh/) CKS / CKA / CKAD экзамены сценарии и окружающая среда.  

## содействовать

Взносы приветствуются! Прочитай [contribution guidelines](contributing.md) Сначала.


## Лицензия

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

По мере возможности в соответствии с законом, Том Хуан отказался от всех авторских прав.
смежных или смежных прав на эту работу.
