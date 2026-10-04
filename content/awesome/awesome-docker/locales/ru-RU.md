# Awesome Docker [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)][sindresorhus] [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/veggiemonk/awesome-docker/)[![Last Commit](https://img.shields.io/github/last-commit/veggiemonk/awesome-docker)](https://github.com/veggiemonk/awesome-docker/commits/main)<!-- omit in toc -->

> Подборка проектов для Docker.

Если вы хотите внести свой вклад, сначала прочитайте [CONTRIBUTING.md](https://github.com/veggiemonk/awesome-docker/blob/master/.github/CONTRIBUTING.md).
Если этот список неполон, вы можете помочь дополнить его.
Если какая-либо ссылка здесь больше не подходит, отправьте [запрос на изменение][editreadme], чтобы улучшить этот файл. Спасибо!

**Проект должен быть предназначен для Docker, а не просто использовать Docker.**

> Простое правило: если удаление интеграции с Docker не лишит проект его ценности, ему не место в этом списке.

Создатели и сопровождающие этого списка не получают никакой оплаты за принятие изменений от участников.
Эта страница никоим образом не является официальным продуктом Docker.
Это список ссылок на проекты, который поддерживают добровольцы.
Мы рады участию каждого.
Цель этого репозитория — индексировать проекты с открытым исходным кодом, а не рекламировать коммерческие продукты.

> Docker — это открытая платформа, позволяющая разработчикам и системным администраторам создавать, поставлять и запускать распределённые приложения. Docker состоит из Docker Engine — переносимой и облегчённой среды выполнения и инструмента упаковки — и Docker Hub, облачного сервиса для обмена приложениями и автоматизации рабочих процессов. Docker позволяет быстро собирать приложения из компонентов и устраняет трения между средами разработки, контроля качества и эксплуатации. В результате ИТ-команды могут быстрее выпускать приложения и запускать одно и то же приложение без изменений на ноутбуках, виртуальных машинах центров обработки данных и в любом облаке.

_Источник:_ [Что такое Docker](https://www.docker.com/why-docker/)

# Содержание

<!-- TOC -->

- [Проекты](#projects)
    - [Движок \& среда выполнения](#engine--runtime)
    - [Сборка образов](#building-images)
        - [Сборщик](#builder)
        - [Базовые образы](#base-images)
        - [Dockerfile](#dockerfile)
        - [Линтер](#linter)
    - [Жизненный цикл образов](#image-lifecycle)
        - [Реестр](#registry)
        - [Интерфейс командной строки реестра](#registry-cli)
        - [Сканирование образов \& SBOM](#image-scanning--sbom)
        - [Цепочка поставок](#supply-chain)
    - [Запуск контейнеров](#running-containers)
        - [Составление конфигураций](#composition)
        - [Оркестрация](#orchestration)
        - [Развёртывание \& платформы](#deployment--platforms)
        - [Сборка мусора](#garbage-collection)
    - [Сети \& прокси](#networking--proxies)
        - [Сети](#networking)
        - [Обратный прокси](#reverse-proxy)
    - [Хранилище \& данные](#storage--data)
    - [Наблюдаемость](#observability)
    - [Безопасность](#security)
    - [Пользовательские интерфейсы](#user-interfaces)
        - [Настольные приложения](#desktop)
        - [Терминал](#terminal)
        - [Веб-интерфейсы](#web)
        - [Интеграции с IDE](#ide-integrations)
    - [Рабочий процесс разработчика](#developer-workflow)
        - [Клиент API](#api-client)
        - [CI/CD](#cicd)
        - [Среда разработки](#development-environment)
        - [Бессерверные системы](#serverless)
        - [Тестирование](#testing)
        - [Обёртки](#wrappers)
    - [Инструменты внутри контейнеров](#in-container-tooling)
- [Материалы для изучения](#learning-resources)
    - [С чего начать](#where-to-start)
    - [С чего начать (Windows)](#where-to-start-windows)
    - [Книги \& руководства](#books--tutorials)
    - [Подборки Awesome](#awesome-lists)
    - [Демонстрации и примеры](#demos-and-examples)
    - [Полезные советы](#good-tips)
    - [Raspberry Pi \& ARM](#raspberry-pi--arm)
    - [Статьи о безопасности](#security-articles)
    - [Видео](#videos)
    - [Сообщества и встречи](#communities-and-meetups)
        - [Бразильское сообщество](#brazilian)
        - [Англоязычное сообщество](#english)
        - [Русскоязычное сообщество](#russian)
        - [Испаноязычное сообщество](#spanish)
- [График звёзд](#stargazers-over-time)

<!-- /TOC -->

# Проекты

## Официальные проекты

- [Moby](https://github.com/moby/moby)
- [Docker Hub](https://hub.docker.com)
- [Docker Compose](https://github.com/docker/compose/) - Определение и запуск многоконтейнерных приложений с помощью Docker.
- [Docker Registry][distribution] - Набор инструментов Docker для упаковки, доставки, хранения и распространения контента

## Движок и среда выполнения

- [colima](https://github.com/abiosoft/colima) - Среды выполнения контейнеров в macOS (и Linux) с минимальной настройкой.
- [containerd](https://github.com/containerd/containerd) - Открытая и надёжная среда выполнения контейнеров.
- [cri-o](https://github.com/cri-o/cri-o) - Реализация интерфейса среды выполнения контейнеров Kubernetes на основе Open Container Initiative.
- [gVisor](https://github.com/google/gvisor) - Ядро приложений для контейнеров.
- [lxc](https://github.com/lxc/lxc) - LXC — Linux Containers.
- [Mocker](https://github.com/us/mocker) - Совместимый с Docker интерфейс командной строки контейнеров для macOS на основе фреймворка Containerization от Apple.
- [podman](https://github.com/containers/libpod) - Libpod — библиотека для создания групп контейнеров. Здесь находится Podman.
- [runc](https://github.com/opencontainers/runc) - Инструмент командной строки для создания и запуска контейнеров в соответствии со спецификацией OCI.
- [runtime-tools](https://github.com/opencontainers/runtime-tools) - Oci-runtime-tool — набор инструментов для работы со спецификацией среды выполнения OCI.
- [youki](https://github.com/youki-dev/youki) - Среда выполнения контейнеров на Rust, реализующая спецификацию среды выполнения OCI.

## Сборка образов

### Сборщик

Приложения, помогающие упростить сборку **новых** образов.

- [ansible-bender](https://github.com/ansible-community/ansible-bender) - Инструмент, использующий `ansible` и `buildah`.
- [apko](https://github.com/chainguard-dev/apko) - Декларативный сборщик образов OCI из пакетов apk; по своей задумке обеспечивает воспроизводимость.
- [buildah](https://github.com/containers/buildah) - Инструмент для сборки образов OCI.
- [BuildKit](https://github.com/moby/buildkit) - Параллельный инструментарий сборки с эффективным кэшированием, не привязанный к Dockerfile.
- [buildx](https://github.com/docker/buildx) - Официальный плагин Docker CLI для многоплатформенной сборки на базе BuildKit.
- [cekit](https://github.com/cekit/cekit) - Инструмент, используемый OpenShift для сборки базовых образов с помощью разных движков сборки.
- [dlayer](https://github.com/orisano/dlayer) - Анализатор слоёв Docker.
- [docker-companion](https://github.com/mudler/docker-companion) - Инструмент командной строки на Go для объединения слоёв и распаковки образов Docker.
- [docker-repack](https://github.com/orf/docker-repack) - Пересобирает образ Docker в более компактную и эффективную версию, которую значительно быстрее загружать.
- [DockerSlim](https://github.com/docker-slim/docker-slim) Уменьшает раздутые образы Docker, создавая максимально компактные образы.
- [earthly](https://github.com/earthly/earthly) - Автоматизация сборки в контейнерах с синтаксисом на стыке Dockerfile и Makefile.
- [essex](https://github.com/utensils/essex) - Шаблон для проектов на Docker: Essex — утилита командной строки на bash, которая быстро настраивает чистые и единообразные проекты Docker с рабочими процессами на основе Makefile.
- [HPC Container Maker](https://github.com/NVIDIA/hpc-container-maker) - Создаёт Dockerfile из высокоуровневого рецепта на Python, включая строительные блоки для компонентов высокопроизводительных вычислений.
- [img](https://github.com/genuinetools/img) - Автономный сборщик образов контейнеров, совместимых с Dockerfile и OCI, без демона и без привилегий.
- [ko](https://github.com/ko-build/ko) - Собирает и развёртывает приложения Go в виде образов контейнеров без Dockerfile.
- [nix2container](https://github.com/nlewo/nix2container) - Собирает образы OCI с помощью Nix без промежуточного вызова `docker load`.
- [packer](https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/builder/docker) - Инструмент HashiCorp для сборки машинных образов, включая образы Docker, с интеграцией с инструментами управления конфигурацией, такими как chef, puppet и ansible.
- [Production-Ready Python Containers](https://pythonspeed.com/products/pythoncontainer/) - :yen: Шаблон для создания готовых к эксплуатации образов Docker для приложений на Python.
- [RAUDI](https://github.com/cybersecsi/RAUDI) - Инструмент для автоматического обновления (и при необходимости отправки в Docker Hub) образов Docker стороннего ПО при каждом новом выпуске, обновлении или коммите.
- [runlike](https://github.com/lavie/runlike) - Создаёт команду `docker run` и её параметры на основе запущенных контейнеров.
- [Whaler](https://github.com/P3GLEG/Whaler) - Программа для преобразования образов Docker обратно в Dockerfile.


### Базовые образы

Минимальные, усиленно защищённые или специализированные базовые образы контейнеров.

- [Chainguard Images](https://github.com/chainguard-images/images) - Минимальные образы контейнеров с цифровой подписью и подтверждённым SBOM, созданные на основе Wolfi.
- [distroless](https://github.com/GoogleContainerTools/distroless) - Образы Docker, ориентированные на языки программирования и не содержащие операционной системы.
- [melange](https://github.com/chainguard-dev/melange) - Собирает пакеты apk из декларативных файлов YAML для использования с apko.
- [pglayers](https://github.com/pglayers/pglayers) - Предварительно собранные расширения PostgreSQL в виде комбинируемых слоёв Docker. Более 50 расширений; готовые комбинированные образы (полный и совместимый с Azure).
- [Wolfi](https://github.com/wolfi-dev/os) - Дистрибутив Linux, разработанный для контейнеров; на основе glibc, с цифровой подписью и ежедневными SBOM.


### Dockerfile

- [Dockerfile Generator](https://github.com/ozankasikci/dockerfile-generator) `dfg` — библиотека Go и исполняемый файл для создания корректных Dockerfile из различных источников входных данных.
- [Dockershelf](https://github.com/Dockershelf/dockershelf) - Репозиторий универсальных, эффективных и компактных рецептов Docker. Образы ежедневно обновляются, тестируются и публикуются по расписанию Travis.
- [Dofigen](https://github.com/lenra-io/dofigen) - Генератор Dockerfile, использующий упрощённое описание в формате YAML или JSON.
- [Trsuted Builds](https://dockerfile.github.io/) - Доверенные автоматизированные сборки Docker. Проект Dockerfile поддерживает центральный репозиторий Dockerfile для популярных сервисов с открытым исходным кодом, работающих в контейнерах Docker.

### Линтер

- [Dockadvisor](https://github.com/deckrun/dockadvisor) - Лёгкий линтер Dockerfile с более чем 60 правилами, оценкой качества и проверками безопасности.
- [docker-image-size-limit](https://github.com/wemake-services/docker-image-size-limit) - Инструмент для контроля размера образов Docker.
- [Hadolint](https://github.com/hadolint/hadolint) - Линтер Dockerfile, проверяющий лучшие практики и распространённые ошибки; также проверяет код bash в инструкциях `RUN`.

## Жизненный цикл образов

### Реестр

Сервисы для безопасного хранения образов Docker.

- [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/) - :yen: Полностью управляемый реестр контейнеров Docker, упрощающий разработчикам хранение, управление и развёртывание образов контейнеров Docker.
- [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/#overview) - :yen: Управление частным реестром Docker как полноправным ресурсом Azure.
- [Cloudsmith](https://cloudsmith.com/product/formats/docker-registry) - :yen: Полностью управляемая SaaS-платформа управления пакетами с первоклассной поддержкой публичных и частных реестров Docker (а также многих других форматов, включая диаграммы Helm для экосистемы Kubernetes). Предлагает щедрый бесплатный тариф и полностью бесплатна для проектов с открытым исходным кодом.
- [Container Registry Service](https://container-registry.com/) - :yen: Решение для управления контейнерами на основе Harbor в формате сервиса для команд и организаций. Бесплатный тариф включает 1 ГБ хранилища для частных репозиториев.
- [Cycle.io](https://cycle.io/) - :yen: Размещение контейнеров на выделенном оборудовании.
- [DigitalOcean](https://www.digitalocean.com/products/container-registry) - :yen: Реестр контейнеров DigitalOcean.
- [Docker Hub](https://hub.docker.com/) предоставляется компанией Docker Inc.
- [Docker Registry v2][distribution] - Набор инструментов Docker для упаковки, доставки, хранения и распространения контента
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - Эффективное, стабильное и безопасное распространение файлов и ускорение загрузки образов на основе технологии P2P.
- [GCP Artifact Registry](https://docs.cloud.google.com/artifact-registry/docs) - :yen: Быстрое частное хранилище образов Docker в Google Cloud Platform.
- [Gitea Container Registry](https://docs.gitea.com/usage/packages/container) - Встроенный реестр Docker в Gitea, подходящий для размещения образов в небольшом частном масштабе.
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - Решение GitHub для хранения образов Docker и управления ими с тесной интеграцией с GitHub Actions.
- [GitLab Container Registry](https://docs.gitlab.com/user/packages/container_registry/) - Реестр, ориентированный на использование своих образов в GitLab CI.
- [Granite Registry](https://granite.so/products/docker-registry) - :yen: Хранение частных образов Docker рядом с рабочими нагрузками, которые их загружают; поддерживаются ключи доступа только для чтения или для чтения и записи с ограниченной областью действия.
- [Harbor](https://github.com/goharbor/harbor) Проект реестра cloud native с открытым исходным кодом, который хранит, подписывает и сканирует контент. Поддерживает репликацию, управление пользователями, контроль доступа и аудит действий.
- [JFrog Artifactory](https://jfrog.com/artifactory/) - :yen: Менеджер репозитория артефактов, который также можно использовать как частный реестр Docker.
- [kontain.me](https://github.com/imjasonh/kontain.me) - Реестр образов контейнеров по запросу, который собирает и предоставляет образы при их загрузке.
- [Kraken](https://github.com/uber/kraken) - Высокомасштабируемый P2P-реестр Docker от Uber, способный распространять терабайты данных за секунды.
- [NORA](https://github.com/getnora-io/nora) - Лёгкий мультипротокольный реестр артефактов с поддержкой Docker, Maven, npm, Cargo и PyPI в одном бинарном файле размером 32 МБ. Кэширование при получении, веб-интерфейс, метрики Prometheus, аутентификация RBAC.
- [nscr](https://github.com/jhstatewide/nscr) - Лёгкий автономный реестр контейнеров, который легко запускать и обслуживать.
- [Quay.io](https://quay.io/) - :yen: Безопасное размещение частных репозиториев Docker.
- [Registryo](https://github.com/inmagik/registryo) - Веб-интерфейс и сервер аутентификации на основе токенов для локального реестра Docker.
- [RepoFlow](https://www.repoflow.io) - Простая и удобная платформа управления пакетами с поддержкой Docker, а также таких форматов, как PyPI, Maven, npm и Helm. Включает интеллектуальный поиск, встроенное сканирование образов Docker и щедрые возможности как для самостоятельного размещения, так и для облачного использования.
- [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) - Управление двоичными файлами и артефактами сборки в цепочке поставок ПО.

### Интерфейс командной строки реестра

Инструменты командной строки без демона для проверки, копирования и изменения образов в реестрах OCI/Docker.

- [crane](https://github.com/google/go-containerregistry/tree/main/cmd/crane) - Лёгкая утилита командной строки для работы с образами в реестрах из `go-containerregistry`.
- [go-containerregistry](https://github.com/google/go-containerregistry) - Библиотека Go и инструменты командной строки (`crane`, `gcrane`, `registry`) для работы с реестрами контейнеров.
- [oras](https://github.com/oras-project/oras) - Отправка и загрузка произвольных артефактов OCI в любой реестр OCI и из него.
- [regctl](https://github.com/regclient/regclient) - Клиент реестра без демона: копирование, проверка, изменение и подписание образов OCI.
- [skopeo](https://github.com/containers/skopeo) - Работа с удалёнными реестрами образов: получение сведений, копирование образов и подписание контента.

### Сканирование образов и SBOM

Сканеры уязвимостей образов, генераторы SBOM и инструменты фиксации дайджестов. Коммерческие продукты отмечены `:yen:`.

- [Anchor](https://github.com/SongStitch/anchor/) - Инструмент для обеспечения воспроизводимости сборок за счёт фиксации зависимостей в Dockerfile.
- [Anchor Enterprise](https://anchore.com/) - :yen: Анализ образов на наличие уязвимостей CVE и соответствие пользовательским политикам безопасности.
- [BomLens](https://github.com/sktelecom/bomlens) - Сканирует образы контейнеров (а также исходный код, двоичные файлы и прошивки) и формирует SBOM в формате CycloneDX с отчётами об уязвимостях, лицензиях и уведомлениях. Поставляется как единый образ Docker с веб-интерфейсом.
- [Clair](https://github.com/quay/clair) - Проект с открытым исходным кодом для статического анализа уязвимостей в контейнерах appc и Docker.
- [Docker Scout](https://github.com/docker/scout-cli) - Официальный интерфейс командной строки Docker для создания SBOM, анализа уязвимостей и оценки политик.
- [Grype](https://github.com/anchore/grype) - Сканер уязвимостей для образов контейнеров, файловых систем и SBOM.
- [oscap-docker](https://github.com/OpenSCAP/openscap) - OpenSCAP предоставляет инструмент oscap-docker для сканирования контейнеров и образов Docker.
- [pindock](https://github.com/deadnews/pindock) - Фиксация и обновление дайджестов образов Docker в Dockerfile и файлах Compose.
- [Syft](https://github.com/anchore/syft) - Инструмент командной строки и библиотека для создания перечня компонентов ПО (SBOM) из образов контейнеров и файловых систем.
- [Trivy](https://github.com/aquasecurity/trivy) - Простой и комплексный сканер уязвимостей контейнеров с открытым исходным кодом от Aqua Security (подходит для CI).

### Цепочка поставок

Подписание, аттестация и подтверждение происхождения образов контейнеров.

- [cosign](https://github.com/sigstore/cosign) - Подписание и проверка контейнеров, а также журнал прозрачности для артефактов OCI.
- [in-toto](https://github.com/in-toto/in-toto) - Фреймворк для аттестации цепочек поставок; лежит в основе SLSA и подтверждения происхождения в cosign.
- [policy-controller](https://github.com/sigstore/policy-controller) - Контроллер допуска Kubernetes, обеспечивающий проверку подписей cosign у образов контейнеров.
- [witness](https://github.com/in-toto/witness) - Создание и проверка аттестаций in-toto на всём конвейере сборки.

## Запуск контейнеров

### Составление конфигураций

- [Composerize](https://github.com/magicmark/composerize) - Преобразует команды docker run в файлы docker-compose.
- [ctk](https://github.com/ctk-hq/ctk) - Визуальный конструктор рабочих нагрузок на основе контейнеров.
- [kompose](https://github.com/kubernetes/kompose) - Преобразование Docker Compose в Kubernetes.
- [plash](https://github.com/ihucos/plash) - Движок запуска и сборки контейнеров, работающий внутри Docker.
- [podman-compose](https://github.com/containers/podman-compose) - Скрипт для запуска docker-compose.yml с помощью Podman.
- [Smalte](https://github.com/roquie/smalte) Динамически настраивает приложения, которым нужна статическая конфигурация в контейнере Docker.

### Оркестрация

- [CloudSlang](https://github.com/CloudSlang/cloud-slang) - CloudSlang — движок рабочих процессов для автоматизации процессов Docker.
- [docker rollout](https://github.com/Wowu/docker-rollout) - Развёртывание сервисов Docker Compose без простоя.
- [Kubernetes](https://github.com/kubernetes/kubernetes) - Система оркестрации контейнеров Docker с открытым исходным кодом от Google.
- [Mesos](https://github.com/apache/mesos) - Планировщик ресурсов и заданий для контейнеров, виртуальных машин и физических хостов.
- [Nebula](https://github.com/nebula-orchestrator) - Инструмент оркестрации Docker для управления крупными распределёнными кластерами.
- [Nomad](https://github.com/hashicorp/nomad) - Удобное развёртывание приложений любого масштаба. Распределённый планировщик с высокой доступностью и учётом особенностей центров обработки данных.
- [Rancher](https://github.com/rancher/rancher) - Проект с открытым исходным кодом, предоставляющий полноценную платформу для эксплуатации Docker в производственной среде.
- [Swarm-cronjob](https://github.com/crazy-max/swarm-cronjob) - Создание заданий по расписанию в Swarm.

### Развёртывание и платформы

Самостоятельно размещаемые и управляемые облачные платформы (PaaS/CaaS, автоматизация развёртывания). Коммерческие продукты отмечены `:yen:`.

- [Amazon ECS](https://aws.amazon.com/ecs/) - :yen: Сервис управления на EC2 с поддержкой контейнеров Docker.
- [Appfleet](https://appfleet.com/) - :yen: Периферийная платформа для глобального развёртывания и управления контейнерными сервисами; направляет трафик в ближайшую точку для снижения задержки.
- [Azure AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/) - :yen: Полностью управляемый сервис оркестрации контейнеров Kubernetes.
- [blackfish](https://gitlab.com/blackfish/blackfish) - Виртуальная машина CoreOS для создания кластеров Swarm для разработки и эксплуатации.
- [BosnD](https://gitlab.com/n0r1sk/bosnd) - BosnD, демон боцмана, — средство динамического создания файлов конфигурации и перезапуска сервисов в динамически изменяющихся средах контейнеров.
- [caprover](https://github.com/caprover/caprover) - [Ранее назывался CaptainDuckDuck] Автоматизированный масштабируемый пакет веб-сервера (автоматизированные Docker и nginx) — Heroku на стероидах.
- [Cloud 66](https://www.cloud66.com) - :yen: Полностью управляемый сервис управления контейнерами.
- [Cloud Run Compose](https://docs.cloud.google.com/run/docs/deploy-run-compose) - :yen: Развёртывание файлов `docker-compose.yaml` напрямую в Google Cloud Run как управляемый сервис.
- [Convox Rack](https://github.com/convox/rack) - Convox Rack — PaaS с открытым исходным кодом, построенная на передовой автоматизации инфраструктуры и лучших практиках DevOps.
- [docker-to-iac](https://github.com/deploystackio/docker-to-iac) - Преобразует docker run и commit в шаблоны Infrastructure as Code для AWS, Render.com и DigitalOcean.
- [doco-cd](https://github.com/kimdre/doco-cd) - Лёгкий инструмент GitOps и непрерывного развёртывания проектов Docker Compose и стеков Swarm с использованием опроса и веб-перехватчиков.
- [Dokku](https://github.com/dokku/dokku) - Мини-Heroku на базе Docker, помогающий создавать приложения и управлять их жизненным циклом.
- [Exoframe](https://github.com/exoframejs/exoframe) - Самостоятельно размещаемый инструмент для простого развёртывания одной командой с помощью Docker.
- [Giant Swarm](https://www.giantswarm.io/) - :yen: Простая инфраструктура микросервисов. Развёртывание контейнеров за считаные секунды.
- [Google Container Engine](https://docs.cloud.google.com/kubernetes-engine/docs) - :yen: Контейнеры Docker в Google Cloud, работающие на базе [Kubernetes][kubernetes].
- [Grafeas](https://github.com/grafeas/grafeas) - Универсальный API для метаданных о контейнерах: от сведений об образе и сборке до уязвимостей безопасности.
- [Mesosphere DC/OS Platform](https://d2iq.com/products/dcos) - :yen: Интегрированная платформа для данных и контейнеров на базе Apache Mesos.
- [OpenRun](https://github.com/openrundev/openrun) - Собирает, развёртывает, проксирует, аутентифицирует и автоматически приостанавливает веб-приложения с Docker или Kubernetes.
- [OpenShift][openshift] - PaaS с открытым исходным кодом на базе [Kubernetes][kubernetes], оптимизированная [Red Hat](https://www.redhat.com/en) для разработки и развёртывания приложений в контейнерах Docker.
- [Red Hat OpenShift Dedicated](https://www.redhat.com/en/technologies/cloud-computing/openshift/dedicated) - :yen: Полностью управляемый сервис Red Hat® OpenShift® в Amazon Web Services и Google Cloud.
- [swarm-ansible](https://github.com/LombardiDaniel/swarm-ansible?tab=readme-ov-file) - Swarm-Ansible создаёт готовый к эксплуатации кластер Swarm с помощью ansible. В комплекте средства автоматизации CI, помощи в мониторинге и предварительно настроенный Traefik для SSL-сертификатов и простой аутентификации. Также включает частный реестр и многое другое.
- [SwarmManagement](https://github.com/hansehe/SwarmManagement) - Приложение на Python, устанавливаемое через pip. Упрощает управление Docker Swarm с помощью одного файла yaml, описывающего развёртываемые стеки, а также создаваемые сети, конфигурации и секреты.
- [Triton](https://www.joyent.com/) - :yen: Эластичная инфраструктура, изначально созданная для контейнеров.
- [Tsuru](https://github.com/tsuru/tsuru) - Tsuru — расширяемая PaaS-платформа с открытым исходным кодом.
- [werf](https://github.com/werf/werf) - Werf — инструмент CI/CD для эффективной сборки образов Docker и их развёртывания в Kubernetes с помощью GitOps.

### Сборка мусора

- [docker-custodian](https://github.com/Yelp/docker-custodian) - Поддерживает порядок на хостах Docker.
- [Docuum](https://github.com/stepchowfun/docuum) - Удаление образов Docker по принципу LRU (сначала удаляются наименее недавно использовавшиеся).

## Сети и прокси

### Сети

Сети контейнеров, оверлейные сети, мосты DNS и обнаружения сервисов.

- [Calico][calico] - Calico — виртуальная сеть чистого третьего уровня, позволяющая контейнерам на нескольких хостах Docker взаимодействовать друг с другом.
- [docker-dns](https://github.com/bytesharky/docker-dns) - Лёгкий DNS-форвардер для контейнеров Docker, разрешающий на хосте имена контейнеров с пользовательскими суффиксами (например, `.docker`) для упрощения обнаружения сервисов.
- [Flannel](https://github.com/coreos/flannel/) - Flannel — виртуальная сеть, выделяющая каждой машине подсеть для использования средами выполнения контейнеров.
- [netshoot](https://github.com/nicolaka/netshoot) - Контейнер netshoot содержит мощный набор сетевых инструментов для устранения проблем с сетями Docker.
- [Pipework](https://github.com/jpetazzo/pipework) - Программно-определяемые сети для контейнеров Linux. Pipework работает с обычными контейнерами LXC и с Docker.
- [registrator](https://github.com/gliderlabs/registrator) - Мост реестра сервисов для Docker.

### Обратный прокси

Обратные прокси с поддержкой контейнеров, ingress и входные узлы с завершением TLS и автоматическим обнаружением.

- [BunkerWeb](https://github.com/bunkerity/bunkerweb) - Межсетевой экран веб-приложений (WAF) нового поколения с открытым исходным кодом.
- [caddy-docker-proxy](https://github.com/lucaslorentz/caddy-docker-proxy) - Обратный прокси на основе Caddy, настраиваемый метками сервисов или контейнеров.
- [caddy-docker-upstreams](https://github.com/invzhi/caddy-docker-upstreams) - Модуль upstream-серверов Docker для Caddy, настраиваемый метками контейнеров.
- [Docker Dnsmasq Updater](https://github.com/moonbuggy/docker-dnsmasq-updater) - Обновляет удалённый сервер dnsmasq именами хостов контейнеров Docker.
- [docker-flow-proxy](https://github.com/docker-flow/docker-flow-proxy) - Перенастраивает прокси при каждом развёртывании или масштабировании сервиса.
- [Let's Encrypt Nginx-proxy Companion](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) - Лёгкий вспомогательный контейнер для nginx-proxy. Позволяет автоматически создавать и обновлять сертификаты Let’s Encrypt.
- [mesh-router](https://github.com/Yundera/mesh-router) - Бесплатный поставщик доменов (nsl.sh) для контейнеров Docker с автоматической маршрутизацией HTTPS. Использует VPN WireGuard для безопасной маршрутизации запросов к поддоменам между сетями. Подходит для самостоятельно размещаемых NAS и облачных развёртываний.
- [Nginx Proxy Manager](https://github.com/jc21/nginx-proxy-manager) - Удобный веб-интерфейс для проксирования веб-сервисов с SSL.
- [nginx-proxy][nginxproxy] - Автоматизированный прокси nginx для контейнеров Docker с использованием docker-gen.
- [OpenResty Manager](https://github.com/Safe3/openresty-manager) - Простой в использовании, мощный и удобный менеджер OpenResty (улучшенной версии Nginx), альтернатива OpenResty Edge с открытым исходным кодом.
- [Swarm Router](https://github.com/flavioaiello/swarm-router) - Маршрутизатор для режима Docker Swarm без настройки, работающий на основе имени сервиса и использующий более современный и безопасный подход.
- [Træfɪk](https://github.com/containous/traefik) - Автоматизированный обратный прокси и балансировщик нагрузки для Docker, Mesos, Consul и Etcd.

## Хранилище и данные

- [Docker Volume Backup](https://github.com/offen/docker-volume-backup) Резервное копирование томов Docker локально или в любое S3-совместимое хранилище.
- [Label Backup](https://github.com/resulgg/label-backup) - Лёгкий агент резервного копирования с поддержкой Docker, который автоматически обнаруживает базы данных в контейнерах (PostgreSQL, MySQL, MongoDB, Redis) по меткам Docker. Поддерживает локальное хранилище и назначения, совместимые с S3, а также гибкое планирование с помощью выражений cron.
- [Netshare](https://github.com/ContainX/docker-volume-netshare) Плагин томов Docker для NFS, AWS EFS, Ceph и Samba/CIFS.
- [portworx](https://portworx.com) - :yen: Децентрализованное решение для хранения постоянных, общих и реплицируемых томов.
- [quobyte](https://www.quobyte.com/) - :yen: Полностью отказоустойчивая распределённая файловая система с драйвером томов Docker.
- [resq](https://github.com/mashb1t/resq) - Резервное копирование Docker на базе Restic для томов, баз данных и файлов .env — с остановкой контейнеров или без неё. Работает с локальным хранилищем, SSH и любым хранилищем, совместимым с S3.
- [REX-Ray](https://github.com/rexray/rexray) Предоставляет независимый от поставщика движок оркестрации хранилища. Основная цель — обеспечить постоянное хранилище для Docker, Kubernetes и Mesos.

## Наблюдаемость

Мониторинг хостов Docker, контейнеров и работающих в них сервисов. Самостоятельно размещаемые решения и SaaS; коммерческие продукты отмечены `:yen:`.

- [ADRG](https://github.com/jaldertech/adrg) - Динамическое управление ресурсами Docker с помощью cgroups v2 для регулирования нагрузки на систему.
- [AppDynamics](https://github.com/Appdynamics/docker-monitoring-extension) - :yen: Расширение для мониторинга Docker собирает метрики через удалённый API Docker с помощью Unix-сокета или TCP.
- [Autoheal](https://github.com/willfarrell/docker-autoheal) - Автоматически отслеживает состояние контейнеров Docker и перезапускает неисправные.
- [Better Stack](https://betterstack.com/community/guides/scaling-docker/) - :yen: Стек наблюдаемости, совместимый с Docker, обеспечивает сбор журналов и мониторинг доступности приложений в контейнерах.
- [cAdvisor](https://github.com/google/cadvisor) - Анализирует использование ресурсов и характеристики производительности работающих контейнеров.
- [Datadog](https://www.datadoghq.com/) - :yen: Сервис мониторинга всего стека с полноценной поддержкой Docker, Kubernetes и Mesos.
- [DLIA](https://github.com/zorak1103/dlia) - DLIA — агент мониторинга журналов Docker на базе ИИ, который с помощью больших языковых моделей (LLM) анализирует журналы контейнеров, обнаруживает аномалии и со временем формирует контекстную аналитику.
- [docker-exporter](https://github.com/dlepaux/docker-exporter) - Лёгкий экспортёр метрик контейнеров Docker для Prometheus на Rust. Корректно рассчитывает рабочий набор памяти cgroup v2 на ARM64 (Raspberry Pi 5), работает без прав root с сокетом только для чтения, потребляет около 7 МиБ ОЗУ в простое.
- [Docker-Sentinel](https://github.com/Will-Luck/Docker-Sentinel) - Автоматическое обновление контейнеров с политиками для каждого контейнера, безопасным откатом и веб-панелью мониторинга в реальном времени.
- [DockProbe](https://github.com/deep-on/dockprobe) - Лёгкая панель мониторинга Docker в одном контейнере. Метрики в реальном времени, 6 правил обнаружения аномалий, оповещения Telegram и 16 автоматических проверок безопасности. Не требует настройки, потребляет около 50 МБ ОЗУ.
- [DockProc](https://gitlab.com/n0r1sk/dockproc) - Мониторинг ввода-вывода контейнеров на уровне процессов.
- [dockprom](https://github.com/stefanprodan/dockprom) - Мониторинг хостов и контейнеров Docker с помощью Prometheus, Grafana, cAdvisor, NodeExporter и AlertManager.
- [Doku](https://github.com/amerkurev/doku) - Doku — простое веб-приложение для мониторинга использования диска Docker.
- [Dozzle](dozzle) - Мониторинг журналов контейнеров в реальном времени через браузер или мобильное устройство.
- [Drydock](https://github.com/CodesWhat/drydock) - Мониторинг обновлений контейнеров с веб-панелью, 23 поставщиками реестров, 20 типами уведомлений и распределённой архитектурой агентов.
- [Dynatrace](https://docs.dynatrace.com/docs/observe/infrastructure-observability/container-platform-monitoring) - :yen: Мониторинг приложений в контейнерах без установки агентов и изменения команд Run.
- [Grafana Docker Dashboard Template](https://grafana.com/grafana/dashboards/179-docker-prometheus-monitoring/) - Шаблон для стека Docker, Grafana и Prometheus.
- [InfraCanvas](https://github.com/bytestrix/InfraCanvas) - Интерактивная визуальная карта контейнеров, подов, томов и сетей на любом сервере Linux. Один бинарный файл, обновления в реальном времени через WebSocket.
- [Maintenant](https://github.com/kolapsis/maintenant) - Автоматически обнаруживает инфраструктуру Docker и Kubernetes. Находит контейнеры по меткам, отслеживает конечные точки, сигналы доступности, TLS-сертификаты, метрики ресурсов и обновления; включает встроенную страницу статуса. Единый бинарный файл со встроенным SPA.
- [Middleware](https://middleware.io/) - :yen: Мониторинг хостов Docker, контейнеров, журналов и производительности приложений на единой платформе наблюдаемости.
- [Site24x7](https://www.site24x7.com/docker-monitoring.html) - :yen: Мониторинг Docker для DevOps и ИТ, SaaS с оплатой за хост.
- [Sysdig Monitor](https://www.sysdig.com/products/monitor) - :yen: Программный или облачный сервис для мониторинга, оповещений и устранения неполадок в контейнерах с помощью системных вызовов; специальные функции для Docker и Kubernetes.
- [Wiremap](https://github.com/codeofmario/wiremap) - Самостоятельно размещаемый обозреватель топологии сети Docker с визуализацией, потоковой передачей журналов в реальном времени, текущей статистикой, встроенным терминалом и просмотром контейнеров.

## Безопасность

Усиление защиты контейнеров, безопасность во время выполнения, политики, соответствие требованиям и криминалистический анализ. Самостоятельно размещаемые и коммерческие решения; коммерческие продукты отмечены `:yen:`.

- [Aqua Security](https://www.aquasec.com) - :yen: Защита приложений на основе контейнеров — от разработки до эксплуатации на любой платформе.
- [buildcage](https://github.com/dash14/buildcage) - Ограничивает исходящий сетевой доступ во время сборки Docker, предотвращая атаки на цепочку поставок. Работает как подключаемый удалённый драйвер BuildKit для Docker Buildx и включает готовые GitHub Actions.
- [CetusGuard](https://github.com/hectorm/cetusguard) - Инструмент, защищающий сокет демона Docker путём фильтрации вызовов к его конечным точкам API.
- [Checkov](https://github.com/bridgecrewio/checkov) - Статический анализ манифестов Infrastructure as Code (Terraform, Kubernetes, CloudFormation, Helm, Dockerfile, Kustomize) для выявления и устранения ошибок конфигурации безопасности.
- [compose-lint](https://github.com/tmatens/compose-lint) - Проверяет файлы Docker Compose на ошибки настройки безопасности — привилегированные контейнеры, незакреплённые образы, подключение сокета Docker, незашифрованные учётные данные — на основе рекомендаций OWASP и теста CIS Docker Benchmark.
- [container-explorer](https://github.com/google/container-explorer) - Криминалистическая утилита для изучения контейнеров Docker и containerd по смонтированным образам дисков.
- [Deepfence Threat Mapper](https://github.com/deepfence/ThreatMapper) - Мощный сканер уязвимостей во время выполнения для Kubernetes, виртуальных машин и бессерверных систем.
- [Den](https://github.com/us/den) - Самостоятельно размещаемая среда-песочница для ИИ-агентов с контейнерами Docker, усиленной защитой, REST API и поддержкой WebSocket.
- [docker-bench-security](https://github.com/docker/docker-bench-security) - Скрипт для проверки десятков распространённых рекомендаций по развёртыванию контейнеров Docker в производственной среде.
- [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy) - Точный фильтр сокета API Docker на основе HAProxy; широко используется для предоставления прокси-серверам и домашним лабораториям ограниченного доступа к сокету.
- [KICS](https://github.com/checkmarx/kics) - Инструмент сканирования инфраструктуры как кода для раннего выявления уязвимостей безопасности, проблем соответствия требованиям и ошибок конфигурации инфраструктуры. Поддерживает расширение дополнительными политиками.
- [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) - :yen: (Ранее — Twistlock Security Suite) обнаруживает уязвимости, усиливает защиту образов контейнеров и применяет политики безопасности на протяжении всего жизненного цикла приложений.
- [segspec](https://github.com/dormstern/segspec) - Извлекает сетевые зависимости из Docker Compose, манифестов Kubernetes, диаграмм Helm и других файлов конфигурации, чтобы создавать политики сети Kubernetes с подтверждающими данными.
- [Sysdig Falco](https://github.com/falcosecurity/falco) - Sysdig Falco — монитор безопасности контейнеров с открытым исходным кодом. Отслеживает действия приложений, контейнеров, хостов и сетей и оповещает о несанкционированной активности.
- [Sysdig Secure](https://www.sysdig.com/solutions/cloud-detection-and-response-cdr) - :yen: Sysdig Secure обеспечивает безопасность во время выполнения за счёт поведенческого мониторинга и защиты, а также предоставляет расширенные средства криминалистического анализа на основе Sysdig с открытым исходным кодом для реагирования на инциденты.
- [Trend Micro DeepSecurity](https://www.trendmicro.com/en_us/business/products/hybrid-cloud/deep-security.html) - :yen: Trend Micro DeepSecurity обеспечивает защиту контейнерных рабочих нагрузок и хостов во время выполнения, а также предварительное сканирование образов для обнаружения уязвимостей, вредоносного ПО и содержимого, например встроенных секретов.

## Пользовательские интерфейсы

### Настольные приложения

Нативные настольные приложения для управления и мониторинга хостов и кластеров docker.

- [Docker DB Manager](https://github.com/AbianS/docker-db-manager) - Настольное приложение для управления контейнерами баз данных Docker с визуальным интерфейсом и операциями в один клик.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - Официальное нативное приложение. Только для Windows и macOS.
- [Gantry (Desktop)](https://github.com/getgantry/gantry) - Нативное приложение для macOS (SwiftUI, без Electron) для управления и мониторинга хостов Docker локально и через SSH: панель парка серверов, журналы и статистика в реальном времени, терминал exec, файловый браузер и встроенный MCP-сервер для ИИ-агентов.
- [Simple Docker UI](https://github.com/felixgborrego/simple-docker-ui) - Создано на основе Electron.
- [Stevedore](https://github.com/slonopotamus/stevedore) - Хорошая замена Docker Desktop для Windows. Поддерживает контейнеры Linux и Windows. [slonopotamus](https://github.com/slonopotamus).

### Терминал

Текстовые интерфейсы, инструменты командной строки и интеграции с оболочкой для Docker.

- [bosun](https://github.com/psychedelicdevx/bosun) - Управляемый с клавиатуры текстовый интерфейс Docker с группировкой проектов Compose, журналами в реальном времени, статистикой и доступом к оболочке.
- [d4s](https://github.com/jr-k/d4s) - Быстрый текстовый интерфейс с управлением с клавиатуры для Docker-контейнеров, стеков Compose и сервисов Swarm с удобством K9s.
- [dcinja](https://github.com/Falldog/dcinja) - Мощнейший движок шаблонов с минимальным размером бинарного файла для командной строки Docker.
- [dctl](https://github.com/FabienD/docker-stack) - Dctl — инструмент командной строки, позволяющий разработчикам выполнять команды docker compose из любого места в терминале, а также многое другое.
- [decompose](https://github.com/s0rg/decompose) - Инструмент обратного проектирования сред Docker.
- [dive](https://github.com/wagoodman/dive) - Инструмент для изучения каждого слоя образа Docker.
- [docker pushrm](https://github.com/christian-korneck/docker-pushrm) - Плагин Docker CLI, позволяющий отправлять файл README.md из текущего каталога в Docker Hub. Также поддерживаются Quay и Harbor.
- [docker-captain](https://github.com/lucabello/docker-captain) - Удобная утилита командной строки для управления несколькими развёртываниями Docker Compose — на базе Typer, Rich, questionary и sh.
- [dockerfile-mode](https://github.com/spotify/dockerfile-mode) - Режим Emacs для работы с Dockerfile.
- [dockerfilegraph](https://github.com/patrickhoefler/dockerfilegraph) - Визуализирует многоэтапные Dockerfile.
- [dockly](https://github.com/lirantal/dockly) - Интерактивный интерфейс оболочки для управления контейнерами Docker.
- [DockMate](https://github.com/shubh-io/dockmate) - Лёгкий терминальный менеджер Docker и Podman с текстовым интерфейсом.
- [DockSTARTer](https://github.com/GhostWriters/DockSTARTer) - DockSTARTer помогает начать работу с домашними серверными приложениями в Docker.
- [DockTUI](https://github.com/strmax195-hue/docktui) - Быстрая панель терминала для Docker и Compose без зависимостей.
- [dockup](https://github.com/paulo-amaral/dockup) - Текстовый интерфейс для установки, усиления защиты и обслуживания сред выполнения контейнеров: Docker Engine + Compose v2, NVIDIA Container Toolkit, Podman и Apple container; включает аудит безопасности на основе CIS.
- [dprs](https://github.com/durableprogramming/dprs) - Текстовый интерфейс для разработчиков, позволяющий управлять контейнерами Docker и просматривать журналы в реальном времени.
- [dry](https://github.com/moncho/dry) - Интерактивный интерфейс командной строки для контейнеров Docker.
- [easydocker](https://github.com/joao-zanutto/easydocker) - Терминальный интерфейс, вдохновлённый k9s и использующий графику BubbleTea.
- [goManageDocker](https://github.com/ajayd-san/gomanagedocker) - Текстовый интерфейс для быстрого просмотра объектов Docker и управления ими с удобными сочетаниями клавиш; также из коробки поддерживается навигация VIM.
- [layerx](https://github.com/deveshctl/layerx) - Проверяет слои образов контейнеров в текстовом интерфейсе: просматривает различия файловой системы и содержимое файлов, сортирует по размеру, извлекает отдельные файлы и задаёт пороги эффективности для CI. Поддерживает Docker, Podman и архивы OCI.
- [lazydocker](https://github.com/jesseduffield/lazydocker) - Самый простой способ управлять всем в Docker. Простой терминальный интерфейс для Docker и docker-compose, написанный на Go с библиотекой gocui.
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - Интерфейс для чтения и фильтрации журналов контейнеров Docker и Podman, как у [Dozzle](dozzle), но в терминале; поддерживает нечёткий поиск, регулярные выражения и раскрашивание вывода.
- [oxker](https://github.com/mrjackwills/oxker) - Простой текстовый интерфейс для просмотра контейнеров Docker и управления ими.
- [proco](https://github.com/shiwaforce/poco) - Proco помогает организовать проекты Docker, Docker Compose и Kubernetes любой сложности с помощью простых файлов конфигурации YAML, упрощая переход от поиска проекта к его запуску в локальной среде.
- [scuba](https://github.com/JonathonReinhart/scuba) - Незаметно использует контейнеры Docker для изоляции сред сборки ПО.
- [supdock](https://github.com/segersniels/supdock) - Обеспечивает более наглядную работу с Docker с помощью интерактивной командной строки.
- [swarmcli](https://github.com/Eldara-Tech/swarmcli) - Управление Swarm со скоростью мысли: потоковая передача журналов в реальном времени, мгновенный доступ к оболочке контейнеров, простая переадресация портов и раскрытие секретов по запросу — полный контроль над Docker Swarm без прерывания рабочего процесса.
- [tdocker](https://github.com/pivovarit/tdocker) - Замена `docker ps` для повседневных операций с контейнерами.
- [wharf](https://github.com/idesyatov/wharf) - Текстовый интерфейс для Docker Compose в стиле k9s с навигацией в стиле vim, мониторингом CPU и памяти в реальном времени с графиками Брайля, файловым браузером контейнеров, поддержкой удалённых хостов SSH и командным режимом.

### Веб-интерфейсы

- [Arcane](https://github.com/getarcaneapp/arcane) - Простая и современная платформа управления Docker, созданная с расчётом на всех пользователей.
- [CASA](https://github.com/knrdl/casa) - Передайте коллегам управление небольшим набором контейнеров.
- [Container Web TTY](https://github.com/wrfly/container-web-tty) - Подключение к контейнерам через веб-терминал.
- [Docker Commander](https://github.com/koduj-dev/docker-commander) - Самостоятельно размещаемый интерфейс управления и мониторинга Docker с поддержкой нескольких хостов, управлением Compose, объединёнными журналами, оповещениями, RBAC, сканированием уязвимостей и интеграцией MCP.
- [Docker Registry Browser](https://github.com/klausmeyer/docker-registry-browser) - Веб-интерфейс для HTTP API реестра Docker v2.
- [docker-swarm-visualizer](https://github.com/dockersamples/docker-swarm-visualizer) - Визуализация сервисов Docker в Docker Swarm (для демонстраций).
- [dockge](https://github.com/louislam/dockge) - Простой и отзывчивый менеджер стеков docker compose.yaml с самостоятельным размещением.
- [DockScope](https://github.com/ManuelR-T/dockscope) - Визуализирует контейнеры Docker в виде трёхмерного графа зависимостей с метриками и журналами в реальном времени, а также встроенным терминалом.
- [Komodo](https://github.com/mbecker20/komodo) - Инструмент для сборки и развёртывания программного обеспечения на множестве серверов.
- [Portainer](https://github.com/portainer/portainer) - Лёгкий интерфейс управления хостами Docker и кластерами Docker Swarm.
- [Swarmpit](https://github.com/swarmpit/swarmpit) - Swarmpit предоставляет простой и удобный интерфейс для кластера Docker Swarm. Позволяет управлять стеками, сервисами, секретами, томами, сетями и т. д.
- [usulnet](https://github.com/fr4nsys/usulnet) - Полнофункциональная современная платформа управления Docker для системных администраторов и DevOps с инструментами корпоративного уровня, сканером CVE, SSH, RDP в браузере и многим другим.

### Интеграции с IDE

- В IDE JetBrains (IntelliJ IDEA, GoLand, WebStorm, CLion и др.) есть [встроенный плагин Docker](https://www.jetbrains.com/help/idea/docker.html#managing-images).
- Eclipse [Docker Tooling plugin](https://www.eclipse.org/community/eclipse_newsletter/2016/july/article2.php)
- [docker.el](https://github.com/Silex/docker.el) Управление Docker из Emacs.

## Рабочий процесс разработчика

### Клиент API

- [contajners](https://github.com/lispyclouds/contajners) - Идиоматичный, управляемый данными клиент Clojure для движков контейнеров OCI, удобный для REPL.
- [Docker Client for JVM](https://github.com/gesellix/docker-client) - Библиотека клиента удалённого API Docker для JVM, написанная на Groovy.
- [Docker Client TypeScript](https://gitlab.com/masaeedu/docker-client) - Клиент API Docker для JavaScript, автоматически созданный по определению Swagger API из репозитория moby.
- [docker-controller-bot](https://github.com/dgongut/docker-controller-bot) - Бот Telegram для управления контейнерами Docker.
- [docker-maven-plugin](https://github.com/fabric8io/docker-maven-plugin) - Плагин Maven для запуска и создания образов Docker.
- [Docker.DotNet](https://github.com/Microsoft/Docker.DotNet) - HTTP-клиент C#/.NET для удалённого API Docker.
- [Docker.Registry.DotNet](https://github.com/ChangemakerStudios/Docker.Registry.DotNet) - Клиентская библиотека .NET (C#) для взаимодействия с API реестра Docker (v2).
- [dockerode](https://github.com/apocas/dockerode) - Модуль Docker Remote API для node.js.
- [go-dockerclient](https://github.com/fsouza/go-dockerclient/) - HTTP-клиент Go для удалённого API Docker.
- [Gradle Docker plugin](https://github.com/gesellix/gradle-docker-plugin) - Плагин удалённого API Docker для Gradle.
- [Portainer stack utils](https://github.com/greenled/portainer-stack-utils) - Скрипт bash для развёртывания, обновления и удаления стеков Docker в экземпляре Portainer из файла yaml docker-compose.
- [sbt-docker](https://github.com/marcuslonnberg/sbt-docker) - Создание образов Docker напрямую из sbt.

### CI/CD

Самостоятельно размещаемые движки CI, средства ускорения сборки и облачные сервисы для рабочих процессов Docker. Коммерческие продукты отмечены `:yen:`.

- [Buddy](https://buddy.works) - :yen: Объединение Git, сборки и развёртывания в одном мощном инструменте, ускоряющем разработку.
- [Captain](https://github.com/harbur/captain) - Преобразует рабочий процесс Git в контейнеры Docker, готовые к непрерывной доставке.
- [CircleCI](https://circleci.com/) - :yen: Отправляйте и загружайте образы Docker из среды сборки или собирайте и запускайте контейнеры прямо в CircleCI.
- [CodeFresh](https://octopus.com/codefresh) - :yen: Полный цикл сборки, тестирования и обмена приложениями Docker с автоматизированным тестированием.
- [ConcourseCI](https://concourse-ci.org) - :yen: SaaS-платформа CI с конвейерной архитектурой для команд DevOps.
- [Defang](https://github.com/DefangLabs/defang) - Развёртывание Docker Compose в выбранном облаке за считаные минуты.
- [Depot](https://depot.dev) - :yen: Быстрая сборка образов Docker в облаке. Высокопроизводительные вычисления, интеллектуальное автоматическое кэширование и отсутствие необходимости в настройке.
- [Diun](https://github.com/crazy-max/diun) - Уведомления об обновлении образа или репозитория в реестре Docker.
- [dockcheck](https://github.com/mag37/dockcheck) - Скрипт для проверки обновлений образов Docker без их загрузки и автоматического обновления выбранных или всех контейнеров. Поддерживает уведомления, очистку и многое другое.
- [Docker plugin for Jenkins](https://github.com/jenkinsci/docker-plugin/) - Цель плагина Docker — использовать хост Docker для динамического предоставления агента, выполнения одной сборки и последующего удаления этого агента.
- [Drone](https://github.com/drone/drone) - Сервер непрерывной интеграции на Docker с конфигурацией в файлах YAML.
- [Gantry](https://github.com/shizunge/gantry) - Автоматически обновляет выбранные сервисы Docker Swarm.
- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) - GitLab предоставляет встроенную CI-систему для тестирования, сборки и развёртывания кода с помощью GitLab Runner.
- [Jaypore CI](https://github.com/theSage21/jaypore_ci) - Простая, гибкая и мощная система CI/CD и автоматизации с конфигурацией на Python. Сначала локальная работа, поддерживается автономный режим.
- [Kraken CI](https://github.com/Kraken-CI/kraken) - Современная система CI/CD с открытым исходным кодом для локального развёртывания, хорошо масштабируется и ориентирована на тестирование. Один из её исполнителей — Docker.
- [Screwdriver](https://screwdriver.cd/) - :yen: Платформа сборки с открытым исходным кодом от Yahoo, созданная для непрерывной доставки.
- [Self Hosted Runner](https://github.com/youssefbrr/self-hosted-runner) - Контейнерное решение для настройки самостоятельно размещаемого исполнителя GitHub Actions с поддержкой Linux, macOS и Windows.
- [Semaphore CI](https://semaphore.io/) - :yen: Высокопроизводительная облачная CI-система, собирающая, тестирующая и отправляющая контейнеры в эксплуатацию.
- [Skipper](https://github.com/Stratoscale/skipper) - Простое создание Docker-образа для репозитория Git.
- [Tekton CD](https://tekton.dev/) - Ресурс конвейера cloud native.
- [TravisCI](https://www.travis-ci.com/) - :yen: Размещённая CI-система для проектов GitHub с поддержкой Docker.

### Среда разработки

- [coder](https://github.com/coder/coder) - Удалённые среды разработки на базе Terraform или Docker.
- [dde](https://github.com/whatwedo/dde) - Набор инструментов локальной среды разработки на основе Docker.
- [DIP](https://github.com/bibendi/dip) - Утилита командной строки для простого создания и взаимодействия с приложением, настроенным с помощью docker-compose.
- [EnvCLI](https://github.com/EnvCLI/EnvCLI) - Заменяет локально установленные Node, Go и другие инструменты на проектные контейнеры Docker.
- [Gebug](https://github.com/moshebe/gebug) - Инструмент, упрощающий отладку приложений Go в Docker благодаря плавной интеграции отладчика и горячей перезагрузки.
- [HarborPilot](https://github.com/potterwhite/HarborPilot) - Автоматизированный многоплатформенный сборщик образов Docker для разработки встраиваемого Linux (RK3588, RV1126, RK3568). Поддерживает трёхуровневое наследование конфигураций, распределение портов на основе PORT_SLOT и разные версии Ubuntu (20.04/22.04/24.04).
- [Lando](https://github.com/lando/lando) - Lando предназначен для разработчиков, которым нужно быстро и без лишних сложностей запускать сервисы и инструменты, необходимые для разработки проектов.
- [Laradock](https://github.com/laradock/laradock) - Полноценная среда разработки PHP на Docker с Nginx/Apache, PHP, MySQL, Redis и другими сменными сервисами Compose.
- [uniget](https://github.com/uniget-org/cli) - Uni(versal)get — программа установки и обновления контейнерных инструментов и не только (ранее docker-setup).
- [Zsh-in-Docker](https://github.com/deluan/zsh-in-docker) - Установка Zsh, Oh-My-Zsh и плагинов в контейнер Docker одной строкой.

### Бессерверные системы

- [Apache OpenWhisk](https://github.com/apache/openwhisk) - Облачная бессерверная платформа с открытым исходным кодом, выполняющая функции в ответ на события при любой нагрузке.
- [Koyeb](https://www.koyeb.com/) - :yen: Удобная для разработчиков бессерверная платформа для глобального развёртывания приложений. Запускает контейнеры Docker, веб-приложения и API с развёртыванием на основе Git, автоматическим масштабированием, глобальной периферийной сетью, встроенной сервисной сетью и обнаружением сервисов.
- [OpenFaaS](https://github.com/openfaas/faas) - Полноценный фреймворк бессерверных функций для Docker и Kubernetes.

### Тестирование

- [Container Structure Test](https://github.com/GoogleContainerTools/container-structure-test) - Фреймворк для проверки структуры образа на основе результатов выполнения команд или содержимого файловой системы.
- [dgoss](https://github.com/goss-org/goss/tree/master/extras/dgoss) - Быстрый инструмент на основе YAML для проверки контейнеров Docker.
- [Kurtosis](https://github.com/kurtosis-tech/kurtosis) - Компонуемая система сборки многоконтейнерных тестовых сред. Предоставляет разработчикам мощный SDK в стиле Python для настройки окружения, проверку конфигурации и поведения во время компиляции, а также среду выполнения для запуска, мониторинга и отладки.
- [Pumba](https://github.com/alexei-led/pumba) - Инструмент хаос-тестирования Docker. Можно развернуть в кластере Kubernetes и CoreOS.

### Обёртки

- [Hokusai](https://github.com/artsy/hokusai) - Интерфейс командной строки Docker и Kubernetes для разработчиков приложений; используется для упаковки приложения в контейнер и управления его жизненным циклом при разработке, тестировании и выпуске. От [artsy](https://github.com/artsy).
- [Preevy](https://github.com/livecycle/preevy) - Предварительные среды для проектов Docker и Docker Compose. Проверяйте изменения и собирайте отзывы разработчиков и других участников команды (продукт/дизайн), развёртывая запросы на слияние у облачного поставщика в рамках конвейера CI.
- [subuser](https://github.com/subuser-security/subuser) - Упрощает безопасный и переносимый запуск графических настольных приложений в Docker.
- [udocker](https://github.com/indigo-dc/udocker) - Инструмент для запуска простых контейнеров Docker в пакетных или интерактивных системах без привилегий root.
- [Vagrant - Docker provider](https://developer.hashicorp.com/vagrant/docs/providers/docker/basics) - Хорошей отправной точкой будет [vagrant-docker-example](https://github.com/bubenkoff/vagrant-docker-example).

## Инструменты внутри контейнеров

Инструменты и приложения, устанавливаемые внутри контейнеров или предназначенные для запуска в виде [sidecar](https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar).

- [cdebug](https://github.com/iximiuz/cdebug) - Универсальный инструмент для отладки работающих контейнеров через временные вспомогательные контейнеры; поддерживает Docker, containerd и Kubernetes.
- [ckron](https://github.com/nicomt/ckron) - Планировщик заданий для Docker в стиле cron.
- [CoreOS][coreos] - Linux для массового развёртывания серверов.
- [docker-gen](https://github.com/jwilder/docker-gen) - Создание файлов на основе метаданных контейнеров Docker.
- [dockerize](https://github.com/powerman/dockerize) - Утилита, упрощающая запуск приложений в контейнерах Docker.
- [GoSu](https://github.com/tianon/gosu) - Запускает указанное приложение от имени указанного пользователя и завершает работу (инструмент для скриптов entrypoint).
- [is-docker](https://github.com/sindresorhus/is-docker) - Проверяет, выполняется ли процесс внутри контейнера Docker.
- [microcheck](https://github.com/tarampampam/microcheck) - Лёгкие утилиты проверки состояния контейнеров Docker (75 КБ вместо 9,3 МБ у httpcheck с cURL), написанные на чистом C; включают проверки http(s), портов и параллельное выполнение.
- [Ofelia](https://github.com/mcuadros/ofelia/) - Современный и компактный планировщик заданий для сред Docker на Go. Ofelia призван заменить устаревший cron. Поддерживает конфигурацию с помощью меток контейнеров и/или файлов конфигурации.
- [su-exec](https://github.com/ncopa/su-exec) - Простой инструмент для запуска программы с другими привилегиями. Программа запускается напрямую, а не как дочерний процесс, в отличие от su и sudo, что позволяет избежать проблем с TTY и сигналами. Зачем заново изобретать gosu? Он выполняет примерно ту же задачу, что и gosu, но занимает всего 10 КБ вместо 1,8 МБ.
- [supercronic](https://github.com/aptible/supercronic) - Исполнитель заданий, совместимый с crontab и специально разработанный для запуска в контейнерах.

# Материалы для изучения

## С чего начать

- [Benefits of using Docker](https://semaphore.io/blog/docker-benefits) для разработки и поставки, а также практическая дорожная карта внедрения.
- [Bootstrapping Microservices](https://www.manning.com/books/bootstrapping-microservices-with-docker-kubernetes-and-terraform) - Практическое руководство на примере проекта по созданию приложений на микросервисной архитектуре: от сборки образа Docker для одного микросервиса и публикации его в частном реестре контейнеров до развёртывания полноценного приложения в производственном кластере Kubernetes.
- [Docker Curriculum](https://github.com/prakhar1989/docker-curriculum): Полное руководство для начала работы с Docker. Учит использовать Docker и развёртывать приложения в контейнерах в AWS с помощью Elastic Beanstalk и Elastic Container Service.
- [Docker Documentation](https://docs.docker.com/): Официальная документация.
- [Docker for beginners](https://github.com/groda/big_data/blob/master/docker_for_beginners.md): Руководство для начинающих, которым нужно освоить основы Docker — от «Hello world!» до базовых операций с контейнерами; простые объяснения лежащих в основе концепций.
- [Docker for novices](https://www.youtube.com/watch?v=xsjSadjKXns) Введение в Docker для разработчиков и тестировщиков, которые ещё не работали с ним. (Видео длительностью 1 ч 40 мин, записано на linux.conf.au 2019 в Крайстчерче, Новая Зеландия.)
- [Docker katas](https://github.com/eficode-academy/docker-katas) Набор практических лабораторных работ, от «Hello Docker» до развёртывания веб-приложения в контейнере на сервере.
- [Docker simplified in 55 seconds](https://www.youtube.com/watch?v=vP_4DlOH1G4): Анимированное краткое введение в Docker на высоком уровне. Наглядное резюме, помогающее перейти к более сложным учебным материалам.
- [Docker Training](https://training.mirantis.com) - :yen:
- [Dockerlings](https://github.com/furkan/dockerlings): Изучайте Docker прямо в терминале с современным текстовым интерфейсом и короткими практическими заданиями.
- [Introduction à Docker](https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/) Специальный раздел французского сайта о DevSecOps для освоения Docker: от основ до лучших практик, включая оптимизацию и защиту контейнеров.
- [Learn Docker](https://github.com/dwyl/learn-docker): Пошаговое руководство и дополнительные материалы (видео, статьи, шпаргалки).
- [Learn Docker (Visually)](https://pagertree.com/learn/docker/overview) - Обзор основных компонентов Docker для начинающих и того, как они связаны между собой. Множество качественных иллюстраций, примеров и материалов.
- [Play With Docker](https://training.play-with-docker.com/): PWD — отличный способ начать работу с Docker для пользователей от новичков до продвинутых. Docker запускается прямо в браузере.
- [Practical Guide about Docker Commands in Spanish](https://github.com/brunocascio/docker-espanol) Испанское руководство по основным командам Docker с примерами из реальной жизни.
- [Setting Python Development Environment with VScode and Docker](https://github.com/RamiKrispin/vscode-python): Пошаговое руководство по настройке среды разработки Python в контейнере с VScode, Docker и расширением Dev Container.
- [The Docker Handbook](https://docker-handbook.farhan.dev/) Книга с открытым исходным кодом, обучающая основам Docker, лучшим практикам и ряду функций среднего уровня. Размещена на [fhsinchy/the-docker-handbook](https://github.com/fhsinchy/the-docker-handbook), а проекты — в репозитории [fhsinchy/docker-handbook-projects](https://github.com/fhsinchy/docker-handbook-projects).

**Шпаргалки**

- [eon01](https://github.com/eon01/DockerCheatSheet)
- [dimonomid](https://github.com/dimonomid/docker-quick-ref) (PDF)
- [JensPiegsa](https://github.com/JensPiegsa/docker-cheat-sheet)
- [wsargent](https://github.com/wsargent/docker-cheat-sheet) (Самая популярная)

## С чего начать (Windows)

- [Docker on Windows behind a firewall](https://toedter.com/2015/05/11/docker-on-windows-behind-a-firewall/)
- [Docker Reference Architecture: Modernizing Traditional .NET Framework Applications](https://docs.mirantis.com/containers/v3.0/dockeree-ref-arch/app-dev/modernize-dotnet-apps.html) - Вы узнаете, как определить типы приложений .NET Framework, подходящие для контейнеризации, и освоить подход «перенести и запустить».
- [Docker with Microsoft SQL 2016 + ASP.NET](https://blog.alexellis.io/docker-does-sql2016-aspnet/) Демонстрация запуска рабочих нагрузок ASP.NET и SQL Server в Docker.
- [Exploring ASP.NET Core with Docker in both Linux and Windows Containers](https://www.hanselman.com/blog/exploring-aspnet-core-with-docker-in-both-linux-and-windows-containers) Запуск приложений ASP.NET Core в контейнерах Linux и Windows с использованием [Docker для Windows][docker-for-windows].
- [Running a Legacy ASP.NET App in a Windows Container](https://blog.sixeyed.com/dockerizing-nerd-dinner-part-1-running-a-legacy-asp-net-app-in-a-windows-container/) Шаги по упаковке устаревшего приложения ASP.NET в Docker и запуску в контейнере Windows.
- [Windows Containers and Docker: The 101](https://www.youtube.com/watch?v=N7SG2wEyQtM) - Обзор продолжительностью 20 минут: использование Docker для запуска PowerShell, ASP.NET Core и приложений ASP.NET.
- [Windows Containers Quick Start](https://learn.microsoft.com/en-us/virtualization/windowscontainers/about/) Обзор контейнеров Windows со ссылками на краткие руководства для Windows 10 и Windows Server 2016.

---

## Книги и руководства

- [Cloud Native Landscape](https://github.com/cncf/landscape)
- [Docker Blog](https://www.docker.com/blog/) - Регулярные новости о Docker, сообществе и инструментах.
- [Docker Certification](https://intellipaat.com/docker-training-course/?US) - :yen: Практические проекты и примеры помогут освоить контейнеризацию Docker, запуск контейнеров, создание образов и Dockerfile, оркестрацию Docker, лучшие практики безопасности и многое другое, а также подготовиться к сертификации Docker Certified Associate.
- [Docker dev bookmarks](https://www.codever.dev/search?q=docker) - Используйте метку [docker](https://www.codever.dev/bookmarks/t/docker).
- [Docker in Action, Second Edition](https://www.manning.com/books/docker-in-action-second-edition)
- [Docker in Practice, Second Edition](https://www.manning.com/books/docker-in-practice-second-edition)
- [Docker packaging guide for Python](https://pythonspeed.com/docker/) - Серия подробных статей об особенностях упаковки Python-приложений в Docker.
- [Learn Docker in a Month of Lunches](https://www.manning.com/books/learn-docker-in-a-month-of-lunches)
- [Learn Docker](https://coursesity.com/blog/best-docker-tutorials/) - Подборка лучших онлайн-руководств и курсов по Docker.
- [Programming Community Curated Resources for learning Docker](https://hackr.io/tutorials/learn-docker)

## Подборки Awesome

- [Awesome Compose](https://github.com/docker/awesome-compose) - Примеры Docker Compose.
- [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes)
- [Awesome Linux Container](https://github.com/Friz-zy/awesome-linux-containers) Более общая подборка контейнеров, чем этот репозиторий.
- [Awesome Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) Список свободных сетевых сервисов и веб-приложений, которые можно размещать локально классическим способом (настроить локальный веб-сервер и запускать приложения) или в контейнере Docker.
- [Awesome Sysadmin](https://github.com/n1trux/awesome-sysadmin)
- [ToolsOfTheTrade](https://github.com/cjbarber/ToolsOfTheTrade) Список SaaS-приложений и приложений для локального размещения.

## Демонстрации и примеры

- [An Annotated Docker Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-docker-config-for-frontend-web-development) Локальная среда разработки на Docker позволяет упаковать нужные проекту настройки DevOps в конфигурацию и упростить начало работы.
- [Local Docker DB](https://github.com/alexmacarthur/local-docker-db) Список примеров docker-compose для множества баз данных.
- [Webstack-micro](https://github.com/ferbs/webstack-micro) Демонстрационное веб-приложение, показывающее, как Docker Compose может настроить шлюз API, централизованную аутентификацию, фоновые обработчики и WebSocket в виде контейнерных сервисов.

## Полезные советы

- [Docker Caveats](https://docker-saigon.github.io/post/Docker-Caveats/) Что следует знать о запуске Docker в производственной среде (написано 11 апреля 2016 года).
- [Docker Containers on the Desktop](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
- [Docker vs. VMs? Combining Both for Cloud Portability Nirvana](https://www.flexera.com/blog/finops/)
- [Don't Repeat Yourself with Anchors, Aliases and Extensions in Docker Compose Files](https://medium.com/@kinghuang/docker-compose-anchors-aliases-extensions-a1e4105d70bd)
- [GUI Apps with Docker](https://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/)

## Raspberry Pi и ARM

- [Docker Pirates ARMed with explosive stuff](https://blog.hypriot.com/) Большой ресурс о кластеризации, Swarm и Docker; предварительно установленный образ для SD-карты Raspberry Pi.
- [Get Docker up and running on the RaspberryPi in three steps](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)
- [git push docker containers to linux devices](https://www.balena.io) Современный DevOps для интернета вещей с использованием Git и Docker.
- [Installing, running, using Docker on armhf (ARMv7) devices](https://github.com/umiddelb/armhf/wiki/Installing,-running,-using-docker-on-armhf-%28ARMv7%29-devices)

## Статьи о безопасности

- [Bringing new security features to Docker](https://opensource.com/business/14/9/security-for-docker)
- [CVE Scanning Alpine images with Multi-stage builds in Docker 17.05](https://github.com/tomwillfixit/alpine-cvecheck)
- [Docker Secure Deployment Guidelines](https://github.com/AonCyberLabs/Docker-Secure-Deployment-Guidelines)
- [Docker Security - Quick Reference](https://binarymist.io/publication/docker-security/)
- [Docker Security: Are Your Containers Tightly Secured to the Ship? SlideShare](https://www.slideshare.net/slideshow/docker-security-are-your-containers-tightly-secured-to-the-ship/43834790)
- [How CVE's are handled on Offical Docker Images](https://github.com/docker-library/official-images/issues/1448)
- [Lynis is an open source security auditing tool including Docker auditing](https://cisofy.com/lynis/)
- [Security Best Practices for Building Docker Images](https://linux-audit.com/tags/docker/)
- [Software Engineering Radio interview of Docker Security Team Lead (Diogo Mónica)](https://www.se-radio.net/2017/05/se-radio-episode-290-diogo-monica-on-docker-security/)
- [Ten Docker Image Security Best Practices Cheat Sheet](https://snyk.io/blog/10-docker-image-security-best-practices/)
- [Top ten most popular docker images each contain at least 30 vulnerabilities](https://snyk.io/blog/top-ten-most-popular-docker-images-each-contain-at-least-30-vulnerabilities/)
- [Tuning Docker with the newest security enhancements](https://opensource.com/business/15/3/docker-security-tuning)
- [10 best practices to containerize Node.js web applications with Docker](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)

## Видео

- [Deploying and scaling applications with Docker, Swarm, and a tiny bit of Python magic](https://www.youtube.com/watch?v=GpHMTR7P2Ms) (3:11:06)
- [Docker Course](https://www.youtube.com/watch?v=UZpyvK6UGFo) (на испанском)
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
- [Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615) Бесплатный курс Udacity.
- [State of containers: a debate with CoreOS, VMware and Google](https://www.youtube.com/watch?v=IiITP3yIRd8) (27:38)

## Сообщества и встречи

### Бразильское сообщество

- [Docker BR on Telegram](https://telegram.me/dockerbr)

### Англоязычное сообщество

- [Docker Community](https://www.docker.com/community/)
- [Docker Events](https://www.docker.com/events/)
- [Docker Online Meetup](https://www.meetup.com/en-AU/Docker-Online-Meetup/)
- [Docker Reddit Community](https://www.reddit.com/r/docker/)

### Русскоязычное сообщество

- [Docker Russian-speaking Community](https://t.me/docker_ru)

### Испаноязычное сообщество

- [Docker Tips](https://dockertips.com/)

## График звёзд

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

