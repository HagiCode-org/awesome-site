# Awesome Docker [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)][sindresorhus] [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/veggiemonk/awesome-docker/)[![Last Commit](https://img.shields.io/github/last-commit/veggiemonk/awesome-docker)](https://github.com/veggiemonk/awesome-docker/commits/main)<!-- omit in toc -->

> Une liste sélectionnée de projets pour Docker.

Si vous souhaitez contribuer, veuillez d’abord lire [CONTRIBUTING.md](https://github.com/veggiemonk/awesome-docker/blob/master/.github/CONTRIBUTING.md).
Si cette liste est incomplète, vous pouvez contribuer à la compléter.
Si un lien de cette liste n’est plus pertinent, vous pouvez proposer une [pull request][editreadme] pour améliorer ce fichier. Merci !

**Le projet doit être destiné à Docker, et pas simplement utiliser Docker.**

> En règle générale, si supprimer l’intégration Docker ne détruirait pas la proposition de valeur du projet, celui-ci n’a pas sa place dans cette liste.

Les créateurs et responsables de cette liste ne reçoivent aucune rémunération pour accepter une modification proposée par un contributeur.
Cette page n’est en aucun cas un produit officiel de Docker.
Il s’agit d’une liste de liens vers des projets, tenue à jour par des bénévoles.
Tout le monde est invité à contribuer.
L’objectif de ce dépôt est de répertorier des projets open source, et non de faire de la publicité à des fins lucratives.

> Docker est une plateforme ouverte permettant aux développeurs et aux administrateurs système de créer, livrer et exécuter des applications distribuées. Composé de Docker Engine, un outil portable et léger d’exécution et d’empaquetage, et de Docker Hub, un service cloud de partage d’applications et d’automatisation des flux de travail, Docker permet d’assembler rapidement des applications à partir de composants et élimine les frictions entre les environnements de développement, d’assurance qualité et de production. Ainsi, les équipes informatiques peuvent livrer plus rapidement et exécuter la même application, sans modification, sur des ordinateurs portables, des machines virtuelles de centres de données et dans n’importe quel cloud.

_Source :_ [Qu’est-ce que Docker](https://www.docker.com/why-docker/)

# Sommaire <!-- omit in toc -->

<!-- TOC -->

- [Projets](#projects)
    - [Moteur et environnement d’exécution](#engine--runtime)
    - [Création d’images](#building-images)
        - [Outils de création](#builder)
        - [Images de base](#base-images)
        - [Dockerfile](#dockerfile)
        - [Linter](#linter)
    - [Cycle de vie des images](#image-lifecycle)
        - [Registre](#registry)
        - [CLI de registre](#registry-cli)
        - [Analyse d’images et SBOM](#image-scanning--sbom)
        - [Chaîne d’approvisionnement](#supply-chain)
    - [Exécution des conteneurs](#running-containers)
        - [Composition](#composition)
        - [Orchestration](#orchestration)
        - [Déploiement et plateformes](#deployment--platforms)
        - [Nettoyage](#garbage-collection)
    - [Réseau et proxys](#networking--proxies)
        - [Réseau](#networking)
        - [Proxy inverse](#reverse-proxy)
    - [Stockage et données](#storage--data)
    - [Observabilité](#observability)
    - [Sécurité](#security)
    - [Interfaces utilisateur](#user-interfaces)
        - [Bureau](#desktop)
        - [Terminal](#terminal)
        - [Web](#web)
        - [Intégrations IDE](#ide-integrations)
    - [Flux de travail des développeurs](#developer-workflow)
        - [Client API](#api-client)
        - [CI/CD](#cicd)
        - [Environnement de développement](#development-environment)
        - [Serverless](#serverless)
        - [Tests](#testing)
        - [Wrappers](#wrappers)
    - [Outils dans les conteneurs](#in-container-tooling)
- [Ressources d’apprentissage](#learning-resources)
    - [Par où commencer](#where-to-start)
    - [Par où commencer (Windows)](#where-to-start-windows)
    - [Livres et tutoriels](#books--tutorials)
    - [Listes Awesome](#awesome-lists)
    - [Démonstrations et exemples](#demos-and-examples)
    - [Bons conseils](#good-tips)
    - [Raspberry Pi et ARM](#raspberry-pi--arm)
    - [Articles sur la sécurité](#security-articles)
    - [Vidéos](#videos)
    - [Communautés et rencontres](#communities-and-meetups)
        - [Brésilien](#brazilian)
        - [Anglais](#english)
        - [Russe](#russian)
        - [Espagnol](#spanish)
- [Évolution du nombre d’étoiles](#stargazers-over-time)

<!-- /TOC -->

# Projets

## Projets officiels

- [Moby](https://github.com/moby/moby)
- [Docker Hub](https://hub.docker.com)
- [Docker Compose](https://github.com/docker/compose/) - Définissez et exécutez des applications multi-conteneurs.
- [Docker Registry][distribution] - L’ensemble d’outils Docker pour empaqueter, expédier, stocker et distribuer du contenu.

## Moteur et environnement d’exécution

- [colima](https://github.com/abiosoft/colima) - Moteurs d’exécution de conteneurs sur macOS (et Linux) avec une configuration minimale.
- [containerd](https://github.com/containerd/containerd) - Un moteur d’exécution de conteneurs ouvert et fiable.
- [cri-o](https://github.com/cri-o/cri-o) - Implémentation de l’interface d’exécution des conteneurs Kubernetes basée sur l’Open Container Initiative.
- [gVisor](https://github.com/google/gvisor) - Noyau applicatif pour les conteneurs.
- [lxc](https://github.com/lxc/lxc) - LXC — Linux Containers.
- [Mocker](https://github.com/us/mocker) - CLI de conteneurs compatible Docker pour macOS, basée sur le framework Containerization d’Apple.
- [podman](https://github.com/containers/libpod) - Libpod est une bibliothèque utilisée pour créer des pods de conteneurs. C’est le projet d’origine de Podman.
- [runc](https://github.com/opencontainers/runc) - Outil CLI permettant de créer et d’exécuter des conteneurs conformément à la spécification OCI.
- [runtime-tools](https://github.com/opencontainers/runtime-tools) - Oci-runtime-tool est un ensemble d’outils pour travailler avec la spécification OCI Runtime.
- [youki](https://github.com/youki-dev/youki) - Moteur d’exécution de conteneurs écrit en Rust, qui implémente la spécification OCI Runtime.

## Création d’images

### Outils de création

Applications conçues pour aider à créer des images **nouvelles** ou en simplifier la création.

- [ansible-bender](https://github.com/ansible-community/ansible-bender) - Un outil utilisant `ansible` et `buildah`.
- [apko](https://github.com/chainguard-dev/apko) - Un outil déclaratif de création d’images OCI à partir de paquets apk, reproductible par conception.
- [buildah](https://github.com/containers/buildah) - Un outil facilitant la création d’images OCI.
- [BuildKit](https://github.com/moby/buildkit) - Une boîte à outils de création concurrente, efficace en matière de cache et indépendante de Dockerfile.
- [buildx](https://github.com/docker/buildx) - Plugin officiel de la CLI Docker pour les compilations multiplateformes, basé sur BuildKit.
- [cekit](https://github.com/cekit/cekit) - Un outil utilisé par OpenShift pour créer des images de base à l’aide de différents moteurs de compilation.
- [dlayer](https://github.com/orisano/dlayer) - Analyseur de couches Docker.
- [docker-companion](https://github.com/mudler/docker-companion) - Un outil en ligne de commande écrit en Golang pour fusionner et décompresser des images Docker.
- [docker-repack](https://github.com/orf/docker-repack) - Reconditionne une image Docker en une version plus petite et plus efficace, nettement plus rapide à télécharger.
- [DockerSlim](https://github.com/docker-slim/docker-slim) Réduit la taille des images Docker volumineuses pour créer les images les plus petites possible.
- [earthly](https://github.com/earthly/earthly) - Automatisation de compilation conteneurisée avec une syntaxe à mi-chemin entre Dockerfile et Makefile.
- [essex](https://github.com/utensils/essex) - Modèle de base pour les projets Docker : Essex est un utilitaire CLI écrit en bash qui permet de configurer rapidement des projets Docker propres et cohérents avec des flux de travail pilotés par Makefile.
- [HPC Container Maker](https://github.com/NVIDIA/hpc-container-maker) - Génère des Dockerfiles à partir d’une recette Python de haut niveau, avec des composants pour les éléments de calcul haute performance.
- [img](https://github.com/genuinetools/img) - Outil autonome et sans démon pour créer des images de conteneurs compatibles Dockerfile et OCI sans privilèges.
- [ko](https://github.com/ko-build/ko) - Créez et déployez des applications Go sous forme d’images de conteneur, sans Dockerfile.
- [nix2container](https://github.com/nlewo/nix2container) - Créez des images OCI avec Nix sans allers-retours via `docker load`.
- [packer](https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/builder/docker) - Outil HashiCorp de création d’images de machines, notamment d’images Docker, intégré à des outils de gestion de configuration comme Chef, Puppet et Ansible.
- [Production-Ready Python Containers](https://pythonspeed.com/products/pythoncontainer/) - :yen: Modèle pour créer des images Docker prêtes pour la production pour les applications Python.
- [RAUDI](https://github.com/cybersecsi/RAUDI) - Outil qui met automatiquement à jour les images Docker de logiciels tiers (et peut les pousser vers Docker Hub) à chaque nouvelle version, mise à jour ou commit.
- [runlike](https://github.com/lavie/runlike) - Génère la commande `docker run` et ses options à partir de conteneurs en cours d’exécution.
- [Whaler](https://github.com/P3GLEG/Whaler) - Programme permettant de convertir des images Docker en Dockerfiles par rétro-ingénierie.


### Images de base

Images de base minimales, renforcées ou conçues pour un usage précis.

- [Chainguard Images](https://github.com/chainguard-images/images) - Images de conteneur minimales, signées et accompagnées d’une attestation SBOM, basées sur Wolfi.
- [distroless](https://github.com/GoogleContainerTools/distroless) - Images Docker axées sur les langages, sans système d’exploitation.
- [melange](https://github.com/chainguard-dev/melange) - Crée des paquets apk à partir de fichiers YAML déclaratifs destinés à apko.
- [pglayers](https://github.com/pglayers/pglayers) - Extensions PostgreSQL précompilées sous forme de couches Docker composables. Plus de 50 extensions et images combinées prêtes à l’emploi (complètes et compatibles Azure).
- [Wolfi](https://github.com/wolfi-dev/os) - Distribution Linux conçue pour les conteneurs, basée sur glibc, signée, avec des SBOM quotidiens.


### Dockerfile

- [Dockerfile Generator](https://github.com/ozankasikci/dockerfile-generator) `dfg` est à la fois une bibliothèque Go et un exécutable qui génère des Dockerfiles valides à partir de différentes sources d’entrée.
- [Dockershelf](https://github.com/Dockershelf/dockershelf) - Dépôt regroupant des recettes Docker universelles, efficaces et légères. Les images sont mises à jour, testées et publiées quotidiennement par une tâche cron Travis.
- [Dofigen](https://github.com/lenra-io/dofigen) - Un générateur de Dockerfile utilisant une description simplifiée au format YAML ou JSON.
- [Trsuted Builds](https://dockerfile.github.io/) - Compilations Docker automatisées et fiables. Le projet Dockerfile gère un dépôt central de Dockerfiles pour divers services logiciels open source populaires exécutables dans un conteneur Docker.

### Linter

- [Dockadvisor](https://github.com/deckrun/dockadvisor) - Linter Dockerfile léger proposant plus de 60 règles, une évaluation de la qualité et des contrôles de sécurité.
- [docker-image-size-limit](https://github.com/wemake-services/docker-image-size-limit) - Un outil pour surveiller la taille de vos images Docker.
- [Hadolint](https://github.com/hadolint/hadolint) - Un linter Dockerfile qui vérifie les bonnes pratiques et les erreurs courantes, et peut également analyser le bash de toutes les instructions `RUN`.

## Cycle de vie des images

### Registre

Services permettant de stocker vos images Docker en toute sécurité.

- [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/) - :yen: Registre de conteneurs Docker entièrement géré par Amazon, qui facilite le stockage, la gestion et le déploiement d’images de conteneur Docker.
- [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/#overview) - :yen: Gérez un registre privé Docker comme une ressource Azure à part entière.
- [Cloudsmith](https://cloudsmith.com/product/formats/docker-registry) - :yen: Service SaaS entièrement géré de gestion de paquets, avec une prise en charge complète des registres Docker publics et privés (ainsi que de nombreux autres formats, dont les charts Helm de l’écosystème Kubernetes). Offre une généreuse formule gratuite et est entièrement gratuit pour l’open source.
- [Container Registry Service](https://container-registry.com/) - :yen: Solution de gestion de conteneurs basée sur Harbor et proposée en tant que service aux équipes et organisations. L’offre gratuite comprend 1 Go de stockage pour les dépôts privés.
- [Cycle.io](https://cycle.io/) - :yen: Hébergement de conteneurs sur matériel dédié.
- [DigitalOcean](https://www.digitalocean.com/products/container-registry) - :yen: Registre de conteneurs DigitalOcean.
- [Docker Hub](https://hub.docker.com/) fourni par Docker Inc.
- [Docker Registry v2][distribution] - L’ensemble d’outils Docker pour empaqueter, expédier, stocker et distribuer du contenu.
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - Assure une distribution efficace, stable et sécurisée de fichiers ainsi que l’accélération des images grâce à la technologie pair-à-pair.
- [GCP Artifact Registry](https://docs.cloud.google.com/artifact-registry/docs) - :yen: Stockage rapide et privé d’images Docker sur Google Cloud Platform.
- [Gitea Container Registry](https://docs.gitea.com/usage/packages/container) - Registre Docker intégré à Gitea, idéal pour héberger des images privées à petite échelle.
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - Solution de GitHub pour stocker et gérer des images Docker, étroitement intégrée à GitHub Actions.
- [GitLab Container Registry](https://docs.gitlab.com/user/packages/container_registry/) - Registre conçu pour utiliser ses images dans GitLab CI.
- [Granite Registry](https://granite.so/products/docker-registry) - :yen: Stockez des images Docker privées aux côtés des charges de travail qui les téléchargent, avec des clés à portée définie en lecture seule ou en lecture-écriture.
- [Harbor](https://github.com/goharbor/harbor) Projet open source de registre cloud natif de confiance qui stocke, signe et analyse le contenu. Prend en charge la réplication, la gestion des utilisateurs, le contrôle d’accès et l’audit des activités.
- [JFrog Artifactory](https://jfrog.com/artifactory/) - :yen: Gestionnaire de dépôts d’artefacts, également utilisable comme registre Docker privé.
- [kontain.me](https://github.com/imjasonh/kontain.me) - Registre d’images de conteneurs à la demande qui construit et fournit les images lors de leur téléchargement.
- [Kraken](https://github.com/uber/kraken) - Registre Docker pair-à-pair hautement évolutif d’Uber, capable de distribuer des téraoctets de données en quelques secondes.
- [NORA](https://github.com/getnora-io/nora) - Registre d’artefacts multiprotocole léger prenant en charge Docker, Maven, npm, Cargo et PyPI dans un seul binaire de 32 Mo. Cache de transit, interface Web, métriques Prometheus et authentification RBAC.
- [nscr](https://github.com/jhstatewide/nscr) - Registre de conteneurs léger et autonome, facile à exécuter et à maintenir.
- [Quay.io](https://quay.io/) - :yen: Hébergement sécurisé pour les dépôts Docker privés.
- [Registryo](https://github.com/inmagik/registryo) - Interface utilisateur et serveur d’authentification par jeton pour un registre Docker sur site.
- [RepoFlow](https://www.repoflow.io) - Plateforme de gestion de paquets simple et facile à utiliser, avec prise en charge de Docker et d’autres formats comme PyPI, Maven, npm et Helm. Comprend une recherche intelligente, l’analyse intégrée des images Docker et une excellente offre gratuite, en auto-hébergement comme dans le cloud.
- [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) - Gérez les binaires et les artefacts de compilation tout au long de votre chaîne d’approvisionnement logicielle.

### CLI de registre

Outils en ligne de commande sans démon pour inspecter, copier et manipuler des images dans les registres OCI/Docker.

- [crane](https://github.com/google/go-containerregistry/tree/main/cmd/crane) - CLI légère pour manipuler les images de registre, issue de `go-containerregistry`.
- [go-containerregistry](https://github.com/google/go-containerregistry) - Bibliothèque Go et outils CLI (`crane`, `gcrane`, `registry`) pour travailler avec des registres de conteneurs.
- [oras](https://github.com/oras-project/oras) - Poussez et récupérez des artefacts OCI arbitraires depuis n’importe quel registre OCI.
- [regctl](https://github.com/regclient/regclient) - Client de registre sans démon : copiez, inspectez, modifiez et signez des images OCI.
- [skopeo](https://github.com/containers/skopeo) - Travaillez avec des registres d’images distants : récupérez des informations, copiez des images et signez du contenu.

### Analyse d’images et SBOM

Outils d’analyse des vulnérabilités des images, de génération de SBOM et d’épinglage de digest. Les offres commerciales sont signalées par `:yen:`.

- [Anchor](https://github.com/SongStitch/anchor/) - Outil garantissant des compilations reproductibles en épinglant les dépendances dans vos Dockerfiles.
- [Anchor Enterprise](https://anchore.com/) - :yen: Analyse les images à la recherche de vulnérabilités CVE et les évalue selon des politiques de sécurité personnalisées.
- [BomLens](https://github.com/sktelecom/bomlens) - Analyse les images de conteneur (ainsi que le code source, les binaires et les micrologiciels) pour produire des SBOM CycloneDX avec rapports sur les vulnérabilités, les licences et les mentions légales. Fourni sous la forme d’une seule image Docker avec interface Web.
- [Clair](https://github.com/quay/clair) - Projet open source d’analyse statique des vulnérabilités dans les conteneurs appc et Docker.
- [Docker Scout](https://github.com/docker/scout-cli) - CLI officielle de Docker pour générer des SBOM, analyser les vulnérabilités et évaluer les politiques.
- [Grype](https://github.com/anchore/grype) - Analyseur de vulnérabilités pour les images de conteneur, les systèmes de fichiers et les SBOM.
- [oscap-docker](https://github.com/OpenSCAP/openscap) - OpenSCAP fournit l’outil oscap-docker, qui sert à analyser les conteneurs et images Docker.
- [pindock](https://github.com/deadnews/pindock) - Épingle et met à jour les digests d’images Docker dans les Dockerfiles et les fichiers Compose.
- [Syft](https://github.com/anchore/syft) - Outil CLI et bibliothèque permettant de générer une nomenclature logicielle (SBOM) à partir d’images de conteneur et de systèmes de fichiers.
- [Trivy](https://github.com/aquasecurity/trivy) - Analyseur de vulnérabilités open source simple et complet d’Aqua Security pour les conteneurs (adapté à la CI).

### Chaîne d’approvisionnement

Signature, attestation et provenance des images de conteneur.

- [cosign](https://github.com/sigstore/cosign) - Signature et vérification de conteneurs, avec journal de transparence pour les artefacts OCI.
- [in-toto](https://github.com/in-toto/in-toto) - Cadre pour les attestations de chaîne d’approvisionnement ; sous-tend les preuves de provenance SLSA et cosign.
- [policy-controller](https://github.com/sigstore/policy-controller) - Contrôleur d’admission Kubernetes qui impose les signatures cosign sur les images de conteneur.
- [witness](https://github.com/in-toto/witness) - Génère et vérifie des attestations in-toto tout au long du pipeline de compilation.

## Exécution des conteneurs

### Composition

- [Composerize](https://github.com/magicmark/composerize) - Convertit les commandes docker run en fichiers docker-compose.
- [ctk](https://github.com/ctk-hq/ctk) - Éditeur visuel de compositions pour les charges de travail conteneurisées.
- [kompose](https://github.com/kubernetes/kompose) - Passez de Docker Compose à Kubernetes.
- [plash](https://github.com/ihucos/plash) - Moteur d’exécution et de création de conteneurs qui s’exécute dans Docker.
- [podman-compose](https://github.com/containers/podman-compose) - Script permettant d’exécuter docker-compose.yml avec podman.
- [Smalte](https://github.com/roquie/smalte) – Configure dynamiquement les applications nécessitant une configuration statique dans un conteneur Docker.

### Orchestration

- [CloudSlang](https://github.com/CloudSlang/cloud-slang) - Moteur de flux de travail permettant de créer des automatisations de processus Docker.
- [docker rollout](https://github.com/Wowu/docker-rollout) - Déploiement sans interruption des services Docker Compose.
- [Kubernetes](https://github.com/kubernetes/kubernetes) - Système open source d’orchestration des conteneurs Docker, créé par Google.
- [Mesos](https://github.com/apache/mesos) - Ordonnanceur de ressources et de tâches pour conteneurs, machines virtuelles et hôtes physiques.
- [Nebula](https://github.com/nebula-orchestrator) - Outil d’orchestration Docker conçu pour gérer des clusters distribués à très grande échelle.
- [Nomad](https://github.com/hashicorp/nomad) - Déployez facilement des applications à toute échelle. Un ordonnanceur distribué, hautement disponible et adapté aux centres de données.
- [Rancher](https://github.com/rancher/rancher) - Projet open source fournissant une plateforme complète pour exploiter Docker en production.
- [Swarm-cronjob](https://github.com/crazy-max/swarm-cronjob) - Créez des tâches planifiées dans Swarm.

### Déploiement et plateformes

Plateformes cloud autohébergées et gérées (PaaS/CaaS, automatisation des déploiements). Les offres commerciales sont signalées par `:yen:`.

- [Amazon ECS](https://aws.amazon.com/ecs/) - :yen: Service de gestion sur EC2 prenant en charge les conteneurs Docker.
- [Appfleet](https://appfleet.com/) - :yen: Plateforme périphérique pour déployer et gérer des services conteneurisés à l’échelle mondiale ; achemine le trafic vers le site le plus proche pour réduire la latence.
- [Azure AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/) - :yen: Service d’orchestration de conteneurs Kubernetes entièrement géré.
- [blackfish](https://gitlab.com/blackfish/blackfish) - Machine virtuelle CoreOS permettant de créer des clusters Swarm pour le développement et la production.
- [BosnD](https://gitlab.com/n0r1sk/bosnd) - BosnD, le démon boatswain : écrit des fichiers de configuration dynamiques et recharge les services dans des environnements de conteneurs évolutifs.
- [caprover](https://github.com/caprover/caprover) - [Auparavant connu sous le nom de CaptainDuckDuck] Package de serveur Web automatisé et évolutif (Docker + nginx automatisés) — Heroku sous stéroïdes.
- [Cloud 66](https://www.cloud66.com) - :yen: Gestion hébergée de conteneurs, complète et proposée en tant que service.
- [Cloud Run Compose](https://docs.cloud.google.com/run/docs/deploy-run-compose) - :yen: Déployez directement des fichiers `docker-compose.yaml` sur Google Cloud Run sous forme de service géré.
- [Convox Rack](https://github.com/convox/rack) - Convox Rack est un PaaS open source reposant sur une automatisation experte de l’infrastructure et les bonnes pratiques DevOps.
- [docker-to-iac](https://github.com/deploystackio/docker-to-iac) - Convertit docker run et commit en modèles d’infrastructure sous forme de code pour AWS, Render.com et DigitalOcean.
- [doco-cd](https://github.com/kimdre/doco-cd) - Outil léger GitOps et de déploiement continu pour déployer des projets Docker Compose et des piles Swarm à l’aide de sondages périodiques et de webhooks.
- [Dokku](https://github.com/dokku/dokku) - Mini-Heroku propulsé par Docker qui vous aide à créer des applications et à gérer leur cycle de vie.
- [Exoframe](https://github.com/exoframejs/exoframe) - Outil autohébergé permettant de déployer facilement avec une seule commande grâce à Docker.
- [Giant Swarm](https://www.giantswarm.io/) - :yen: Infrastructure simple pour microservices. Déployez vos conteneurs en quelques secondes.
- [Google Container Engine](https://docs.cloud.google.com/kubernetes-engine/docs) - :yen: Conteneurs Docker sur Google Cloud, propulsés par [Kubernetes][kubernetes].
- [Grafeas](https://github.com/grafeas/grafeas) - API commune pour les métadonnées des conteneurs, des détails sur les images et les compilations aux vulnérabilités de sécurité.
- [Mesosphere DC/OS Platform](https://d2iq.com/products/dcos) - :yen: Plateforme intégrée pour les données et les conteneurs, basée sur Apache Mesos.
- [OpenRun](https://github.com/openrundev/openrun) - Crée, déploie, relaie, authentifie et met automatiquement en pause les applications Web avec Docker ou Kubernetes.
- [OpenShift][openshift] - PaaS open source basé sur [Kubernetes][kubernetes] et optimisé pour le développement et le déploiement d’applications conteneurisées avec Docker par [Red Hat](https://www.redhat.com/en).
- [Red Hat OpenShift Dedicated](https://www.redhat.com/en/technologies/cloud-computing/openshift/dedicated) - :yen: Service Red Hat® OpenShift® entièrement géré sur Amazon Web Services et Google Cloud.
- [swarm-ansible](https://github.com/LombardiDaniel/swarm-ansible?tab=readme-ov-file) - Swarm-Ansible initialise un cluster Swarm prêt pour la production à l’aide d’Ansible. Inclut des outils d’automatisation de la CI, d’aide à la supervision et Traefik préconfiguré pour les certificats SSL et l’authentification simple. Comprend également un registre privé et bien plus encore !
- [SwarmManagement](https://github.com/hansehe/SwarmManagement) - Swarm Management est une application Python qui s’installe avec pip. Elle simplifie la gestion d’un Docker Swarm en configurant un unique fichier YAML décrivant les piles à déployer ainsi que les réseaux, configurations ou secrets à créer.
- [Triton](https://www.joyent.com/) - :yen: Infrastructure élastique native aux conteneurs.
- [Tsuru](https://github.com/tsuru/tsuru) - Tsuru est un logiciel de plateforme en tant que service extensible et open source.
- [werf](https://github.com/werf/werf) - Werf est un outil CI/CD qui crée efficacement des images Docker et les déploie sur Kubernetes avec GitOps.

### Nettoyage

- [docker-custodian](https://github.com/Yelp/docker-custodian) - Gardez les hôtes Docker bien rangés.
- [Docuum](https://github.com/stepchowfun/docuum) - Éviction des images Docker selon le principe du moins récemment utilisé (LRU).

## Réseau et proxys

### Réseau

Réseaux de conteneurs, réseaux superposés et ponts DNS/de découverte de services.

- [Calico][calico] - Calico est un réseau virtuel pur de couche 3 qui permet aux conteneurs répartis sur plusieurs hôtes Docker de communiquer entre eux.
- [docker-dns](https://github.com/bytesharky/docker-dns) - Redirecteur DNS léger pour les conteneurs Docker ; résout sur l’hôte les noms de conteneurs avec des suffixes personnalisés (par exemple `.docker`) afin de simplifier la découverte des services.
- [Flannel](https://github.com/coreos/flannel/) - Flannel est un réseau virtuel qui attribue un sous-réseau à chaque hôte pour les moteurs d’exécution de conteneurs.
- [netshoot](https://github.com/nicolaka/netshoot) - Le conteneur netshoot fournit un puissant ensemble d’outils réseau pour diagnostiquer les problèmes de réseau Docker.
- [Pipework](https://github.com/jpetazzo/pipework) - Réseau défini par logiciel pour les conteneurs Linux. Pipework fonctionne avec des conteneurs LXC « classiques » et avec le formidable Docker.
- [registrator](https://github.com/gliderlabs/registrator) - Pont de registre de services pour Docker.

### Proxy inverse

Proxys inverses adaptés aux conteneurs, ingress et interfaces frontales assurant la terminaison TLS avec découverte automatique.

- [BunkerWeb](https://github.com/bunkerity/bunkerweb) - Pare-feu applicatif Web (WAF) open source de nouvelle génération.
- [caddy-docker-proxy](https://github.com/lucaslorentz/caddy-docker-proxy) - Proxy inverse basé sur Caddy, configuré à l’aide d’étiquettes de service ou de conteneur.
- [caddy-docker-upstreams](https://github.com/invzhi/caddy-docker-upstreams) - Module Caddy pour les upstreams Docker, configuré à l’aide d’étiquettes de conteneur.
- [Docker Dnsmasq Updater](https://github.com/moonbuggy/docker-dnsmasq-updater) - Met à jour un serveur dnsmasq distant avec les noms d’hôte des conteneurs Docker.
- [docker-flow-proxy](https://github.com/docker-flow/docker-flow-proxy) - Reconfigure le proxy chaque fois qu’un service est déployé ou mis à l’échelle.
- [Let's Encrypt Nginx-proxy Companion](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) - Conteneur compagnon léger pour nginx-proxy. Il permet de créer et renouveler automatiquement les certificats Let’s Encrypt.
- [mesh-router](https://github.com/Yundera/mesh-router) - Fournisseur gratuit de domaines (nsl.sh) pour les conteneurs Docker, avec routage HTTPS automatique. Utilise un VPN WireGuard pour acheminer de manière sécurisée les requêtes de sous-domaines entre réseaux. Idéal pour les NAS autohébergés et les déploiements cloud.
- [Nginx Proxy Manager](https://github.com/jc21/nginx-proxy-manager) - Belle interface Web pour relayer des services Web avec SSL.
- [nginx-proxy][nginxproxy] - Proxy nginx automatisé pour les conteneurs Docker utilisant docker-gen.
- [OpenResty Manager](https://github.com/Safe3/openresty-manager) - Le gestionnaire OpenResty (version améliorée de Nginx) le plus simple à utiliser, puissant et élégant, alternative open source à OpenResty Edge.
- [Swarm Router](https://github.com/flavioaiello/swarm-router) - Routeur sans configuration basé sur le nom de service pour le mode Docker Swarm, avec une approche nouvelle et plus sécurisée.
- [Træfɪk](https://github.com/containous/traefik) - Proxy inverse et répartiteur de charge automatisés pour Docker, Mesos, Consul et Etcd.

## Stockage et données

- [Docker Volume Backup](https://github.com/offen/docker-volume-backup) Sauvegardez les volumes Docker localement ou dans tout stockage compatible avec S3.
- [Label Backup](https://github.com/resulgg/label-backup) - Agent de sauvegarde léger, adapté à Docker, qui détecte et sauvegarde automatiquement les bases de données conteneurisées (PostgreSQL, MySQL, MongoDB, Redis) selon les étiquettes Docker. Prend en charge le stockage local et les destinations compatibles S3, avec une planification flexible par expressions cron.
- [Netshare](https://github.com/ContainX/docker-volume-netshare) Plugin de volumes Docker pour NFS, AWS EFS, Ceph et Samba/CIFS.
- [portworx](https://portworx.com) - :yen: Solution de stockage décentralisée pour des volumes persistants, partagés et répliqués.
- [quobyte](https://www.quobyte.com/) - :yen: Système de fichiers distribué entièrement tolérant aux pannes, doté d’un pilote de volume Docker.
- [resq](https://github.com/mashb1t/resq) - Sauvegardes Docker propulsées par Restic pour les volumes, bases de données et fichiers .env, que les conteneurs soient arrêtés ou non. Fonctionne avec un stockage local, SSH ou tout stockage compatible S3.
- [REX-Ray](https://github.com/rexray/rexray) fournit un moteur d’orchestration du stockage indépendant des fournisseurs. Son objectif principal est de fournir un stockage persistant pour Docker, Kubernetes et Mesos.

## Observabilité

Supervisez les hôtes Docker, les conteneurs et les services qui y sont exécutés. Solutions autohébergées et SaaS ; les offres commerciales sont signalées par `:yen:`.

- [ADRG](https://github.com/jaldertech/adrg) - Gestionnaire dynamique des ressources Docker utilisant cgroups v2 pour réguler la charge système.
- [AppDynamics](https://github.com/Appdynamics/docker-monitoring-extension) - :yen: L’extension de supervision Docker collecte des métriques via l’API distante Docker, au moyen d’un socket Unix ou de TCP.
- [Autoheal](https://github.com/willfarrell/docker-autoheal) - Surveille et redémarre automatiquement les conteneurs Docker défaillants.
- [Better Stack](https://betterstack.com/community/guides/scaling-docker/) - :yen: Pile d’observabilité compatible Docker offrant l’agrégation des journaux et la surveillance de disponibilité des applications conteneurisées.
- [cAdvisor](https://github.com/google/cadvisor) - Analyse l’utilisation des ressources et les caractéristiques de performance des conteneurs en cours d’exécution.
- [Datadog](https://www.datadoghq.com/) - :yen: Service de supervision complète avec prise en charge native de Docker, Kubernetes et Mesos.
- [DLIA](https://github.com/zorak1103/dlia) - DLIA est un agent de surveillance des journaux Docker propulsé par l’IA. Il utilise de grands modèles de langage (LLM) pour analyser intelligemment les journaux des conteneurs, détecter les anomalies et fournir des informations contextuelles au fil du temps.
- [docker-exporter](https://github.com/dlepaux/docker-exporter) - Exportateur Prometheus léger écrit en Rust pour les métriques des conteneurs Docker. Calcule correctement l’ensemble de travail mémoire de cgroup v2 sur ARM64 (Raspberry Pi 5), fonctionne sans privilèges avec un socket en lecture seule et utilise environ 7 Mio de RAM au repos.
- [Docker-Sentinel](https://github.com/Will-Luck/Docker-Sentinel) - Mises à jour automatiques des conteneurs avec stratégies par conteneur, retour arrière sécurisé et tableau de bord Web en temps réel.
- [DockProbe](https://github.com/deep-on/dockprobe) - Tableau de bord léger de supervision Docker dans un seul conteneur. Métriques en temps réel, 6 règles de détection d’anomalies, alertes Telegram et 16 analyses de sécurité automatisées. Sans configuration, environ 50 Mo de RAM.
- [DockProc](https://gitlab.com/n0r1sk/dockproc) - Surveillance des E/S des conteneurs au niveau des processus.
- [dockprom](https://github.com/stefanprodan/dockprom) - Supervision des hôtes et conteneurs Docker avec Prometheus, Grafana, cAdvisor, NodeExporter et AlertManager.
- [Doku](https://github.com/amerkurev/doku) - Doku est une application Web simple qui permet de surveiller l’utilisation du disque par Docker.
- [Dozzle](dozzle) - Surveillez les journaux des conteneurs en temps réel depuis un navigateur ou un appareil mobile.
- [Drydock](https://github.com/CodesWhat/drydock) - Surveillance des mises à jour de conteneurs avec tableau de bord Web, 23 fournisseurs de registres, 20 déclencheurs de notification et architecture d’agents distribués.
- [Dynatrace](https://docs.dynatrace.com/docs/observe/infrastructure-observability/container-platform-monitoring) - :yen: Surveillez les applications conteneurisées sans installer d’agents ni modifier vos commandes Run.
- [Grafana Docker Dashboard Template](https://grafana.com/grafana/dashboards/179-docker-prometheus-monitoring/) - Modèle de tableau de bord pour votre pile Docker, Grafana et Prometheus.
- [InfraCanvas](https://github.com/bytestrix/InfraCanvas) - Carte visuelle en temps réel des conteneurs, pods, volumes et réseaux sur tout serveur Linux. Binaire unique, mises à jour en direct par WebSocket.
- [Maintenant](https://github.com/kolapsis/maintenant) - Supervision d’infrastructure autogérée par découverte automatique pour Docker et Kubernetes. Détecte automatiquement les conteneurs par leurs étiquettes, avec surveillance des points de terminaison, signaux de vie, certificats TLS, métriques de ressources, suivi des mises à jour et page d’état intégrée. Binaire unique avec SPA intégrée.
- [Middleware](https://middleware.io/) - :yen: Surveillez les hôtes Docker, conteneurs, journaux et performances applicatives depuis une plateforme d’observabilité unifiée.
- [Site24x7](https://www.site24x7.com/docker-monitoring.html) - :yen: Supervision Docker pour DevOps et les équipes informatiques, modèle SaaS avec facturation par hôte.
- [Sysdig Monitor](https://www.sysdig.com/products/monitor) - :yen: Logiciel ou service SaaS qui surveille, alerte et aide à diagnostiquer les conteneurs à l’aide des appels système ; fonctionnalités propres à Docker et Kubernetes.
- [Wiremap](https://github.com/codeofmario/wiremap) - Explorateur visuel autohébergé de la topologie réseau Docker, avec diffusion des journaux en temps réel, statistiques en direct, terminal intégré et inspection des conteneurs.

## Sécurité

Renforcement de la sécurité des conteneurs, sécurité à l’exécution, politiques, conformité et analyse forensique. Solutions autohébergées et commerciales ; les offres commerciales sont signalées par `:yen:`.

- [Aqua Security](https://www.aquasec.com) - :yen: Sécurise les applications conteneurisées du développement à la production, sur toutes les plateformes.
- [buildcage](https://github.com/dash14/buildcage) - Restreint les accès réseau sortants pendant les compilations Docker afin d’empêcher les attaques de la chaîne d’approvisionnement. Fonctionne comme pilote distant BuildKit de remplacement pour Docker Buildx et fournit des GitHub Actions prêtes à l’emploi.
- [CetusGuard](https://github.com/hectorm/cetusguard) - Outil qui protège le socket du démon Docker en filtrant les appels à ses points de terminaison d’API.
- [Checkov](https://github.com/bridgecrewio/checkov) - Analyse statique des manifestes d’infrastructure sous forme de code (Terraform, Kubernetes, CloudFormation, Helm, Dockerfile, Kustomize) afin de détecter et corriger les erreurs de configuration de sécurité.
- [compose-lint](https://github.com/tmatens/compose-lint) - Analyse les fichiers Docker Compose à la recherche d’erreurs de configuration de sécurité — conteneurs privilégiés, images non épinglées, montages du socket Docker, identifiants en clair — en s’appuyant sur OWASP et le CIS Docker Benchmark.
- [container-explorer](https://github.com/google/container-explorer) - Outil forensique d’exploration des détails de conteneurs Docker et containerd à partir d’images disque montées.
- [Deepfence Threat Mapper](https://github.com/deepfence/ThreatMapper) - Puissant analyseur de vulnérabilités à l’exécution pour Kubernetes, les machines virtuelles et le serverless.
- [Den](https://github.com/us/den) - Environnement d’exécution bac à sable autohébergé pour agents IA, avec conteneurs Docker, renforcement de la sécurité, API REST et prise en charge de WebSocket.
- [docker-bench-security](https://github.com/docker/docker-bench-security) - Script qui vérifie des dizaines de bonnes pratiques courantes pour le déploiement de conteneurs Docker en production.
- [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy) - Filtre granulaire basé sur HAProxy pour le socket de l’API Docker ; largement utilisé pour exposer un socket à accès restreint aux proxys inverses et aux piles de labos domestiques.
- [KICS](https://github.com/checkmarx/kics) - Outil d’analyse d’infrastructure sous forme de code qui détecte tôt dans le cycle de développement les vulnérabilités de sécurité, les problèmes de conformité et les erreurs de configuration de l’infrastructure. Peut être étendu avec des politiques supplémentaires.
- [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) - :yen: (Anciennement Twistlock Security Suite) détecte les vulnérabilités, renforce la sécurité des images de conteneur et applique des politiques de sécurité à toutes les étapes du cycle de vie des applications.
- [segspec](https://github.com/dormstern/segspec) - Extrait les dépendances réseau de Docker Compose, des manifestes Kubernetes, des charts Helm et d’autres fichiers de configuration pour générer des NetworkPolicies Kubernetes avec traçabilité des preuves.
- [Sysdig Falco](https://github.com/falcosecurity/falco) - Sysdig Falco est un moniteur de sécurité des conteneurs open source. Il surveille l’activité des applications, des conteneurs, des hôtes et du réseau, et signale les activités non autorisées.
- [Sysdig Secure](https://www.sysdig.com/solutions/cloud-detection-and-response-cdr) - :yen: Sysdig Secure assure la sécurité à l’exécution par la surveillance comportementale et la défense, et fournit une analyse forensique approfondie basée sur l’outil open source Sysdig pour la réponse aux incidents.
- [Trend Micro DeepSecurity](https://www.trendmicro.com/en_us/business/products/hybrid-cloud/deep-security.html) - :yen: Trend Micro DeepSecurity protège à l’exécution les charges de travail et les hôtes conteneurisés, et analyse les images avant exécution pour détecter les vulnérabilités, les logiciels malveillants et les contenus tels que les secrets codés en dur.

## Interfaces utilisateur

### Bureau

Applications de bureau natives pour gérer et superviser les hôtes et clusters Docker.

- [Docker DB Manager](https://github.com/AbianS/docker-db-manager) - Application de bureau permettant de gérer les conteneurs de bases de données Docker par interface visuelle et opérations en un clic.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - Application native officielle. Uniquement pour Windows et macOS.
- [Gantry (Desktop)](https://github.com/getgantry/gantry) - Application native macOS (SwiftUI, sans Electron) pour gérer et superviser des hôtes Docker, localement ou par SSH : tableau de bord de flotte, journaux et statistiques en direct, terminal d’exécution, explorateur de fichiers et serveur MCP intégré pour agents IA.
- [Simple Docker UI](https://github.com/felixgborrego/simple-docker-ui) - Basé sur Electron.
- [Stevedore](https://github.com/slonopotamus/stevedore) - Bonne alternative à Docker Desktop pour Windows. Prend en charge les conteneurs Linux et Windows. [slonopotamus](https://github.com/slonopotamus).

### Terminal

Interfaces TUI, outils CLI et intégrations shell pour Docker.

- [bosun](https://github.com/psychedelicdevx/bosun) - Interface terminal Docker pilotée au clavier, avec regroupement des projets Compose, journaux en direct, statistiques et accès au shell.
- [d4s](https://github.com/jr-k/d4s) - Interface terminal rapide et pilotée au clavier pour gérer les conteneurs Docker, les piles Compose et les services Swarm, avec l’ergonomie de K9s.
- [dcinja](https://github.com/Falldog/dcinja) - Moteur de templates puissant et de très petite taille pour l’environnement de ligne de commande Docker.
- [dctl](https://github.com/FabienD/docker-stack) - Dctl est un outil CLI qui permet aux développeurs d’exécuter toutes les commandes Docker Compose depuis n’importe quel terminal, et bien plus encore.
- [decompose](https://github.com/s0rg/decompose) - Outil de rétro-ingénierie des environnements Docker.
- [dive](https://github.com/wagoodman/dive) - Outil permettant d’explorer chaque couche d’une image Docker.
- [docker pushrm](https://github.com/christian-korneck/docker-pushrm) - Plugin CLI Docker permettant de pousser vers Docker Hub le fichier README.md du répertoire courant. Prend également en charge Quay et Harbor.
- [docker-captain](https://github.com/lucabello/docker-captain) - CLI conviviale pour gérer avec élégance plusieurs déploiements Docker Compose, propulsée par Typer, Rich, questionary et sh.
- [dockerfile-mode](https://github.com/spotify/dockerfile-mode) - Mode Emacs pour manipuler les fichiers Dockerfile.
- [dockerfilegraph](https://github.com/patrickhoefler/dockerfilegraph) - Visualisez vos Dockerfiles multiétapes.
- [dockly](https://github.com/lirantal/dockly) - Interface shell interactive pour gérer les conteneurs Docker.
- [DockMate](https://github.com/shubh-io/dockmate) - Gestionnaire léger de Docker et Podman dans le terminal, avec interface textuelle.
- [DockSTARTer](https://github.com/GhostWriters/DockSTARTer) - DockSTARTer vous aide à démarrer avec des applications de serveur domestique exécutées dans Docker.
- [DockTUI](https://github.com/strmax195-hue/docktui) - Tableau de bord terminal rapide, sans dépendances, pour Docker et Compose.
- [dockup](https://github.com/paulo-amaral/dockup) - Interface TUI pour installer, renforcer la sécurité et maintenir des moteurs de conteneurs : Docker Engine + Compose v2, NVIDIA Container Toolkit, Podman et Apple container, avec audit de sécurité inspiré du CIS.
- [dprs](https://github.com/durableprogramming/dprs) - Interface TUI destinée aux développeurs pour gérer les conteneurs Docker avec diffusion des journaux en temps réel et gestion des conteneurs.
- [dry](https://github.com/moncho/dry) - CLI interactive pour les conteneurs Docker.
- [easydocker](https://github.com/joao-zanutto/easydocker) - Interface terminal fortement inspirée de K9s, exploitant les superbes graphismes de BubbleTea.
- [goManageDocker](https://github.com/ajayd-san/gomanagedocker) - Outil TUI pour afficher et gérer très rapidement vos objets Docker avec des raccourcis clavier intuitifs ; prend aussi en charge la navigation VIM.
- [layerx](https://github.com/deveshctl/layerx) - Inspectez les couches des images de conteneur dans une interface TUI : parcourez les différences du système de fichiers, affichez le contenu des fichiers, triez par taille, extrayez des fichiers individuels et imposez des seuils d’efficacité en CI. Prend en charge Docker, Podman et les archives OCI.
- [lazydocker](https://github.com/jesseduffield/lazydocker) - La façon la plus paresseuse de tout gérer dans Docker. Interface terminal simple pour Docker et docker-compose, écrite en Go avec la bibliothèque gocui.
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - Interface de lecture et de filtrage des journaux de sortie des conteneurs Docker et Podman, comme [Dozzle](dozzle), mais dans le terminal, avec recherche floue, expressions régulières et coloration de la sortie.
- [oxker](https://github.com/mrjackwills/oxker) - Interface TUI simple pour afficher et contrôler les conteneurs Docker.
- [proco](https://github.com/shiwaforce/poco) - Proco vous aide à organiser et gérer des projets Docker, Docker-Compose et Kubernetes de toute complexité à l’aide de simples fichiers de configuration YAML, afin de raccourcir le chemin entre la découverte du projet et son initialisation dans votre environnement local.
- [scuba](https://github.com/JonathonReinhart/scuba) - Utilisez en toute transparence des conteneurs Docker pour encapsuler les environnements de compilation logicielle.
- [supdock](https://github.com/segersniels/supdock) - Permet une utilisation de Docker un peu plus visuelle grâce à une invite interactive.
- [swarmcli](https://github.com/Eldara-Tech/swarmcli) - Gestion de Swarm à la vitesse de la pensée : diffusion des journaux en temps réel, accès immédiat au shell des conteneurs, redirection de ports fluide et révélation à la demande des secrets, pour garder le contrôle de Docker Swarm sans interrompre votre travail.
- [tdocker](https://github.com/pivovarit/tdocker) - Remplacement de `docker ps` pour les opérations quotidiennes sur les conteneurs.
- [wharf](https://github.com/idesyatov/wharf) - Interface TUI inspirée de K9s pour Docker Compose, avec navigation de type vim, suivi en temps réel du CPU et de la mémoire avec graphiques braille, explorateur de fichiers des conteneurs, prise en charge des hôtes distants SSH et mode commande.

### Web

- [Arcane](https://github.com/getarcaneapp/arcane) - Plateforme de gestion Docker simple et moderne, conçue pour tous.
- [CASA](https://github.com/knrdl/casa) - Déléguez à vos collègues l’administration d’un petit nombre de conteneurs.
- [Container Web TTY](https://github.com/wrfly/container-web-tty) - Connectez vos conteneurs via un terminal Web.
- [Docker Commander](https://github.com/koduj-dev/docker-commander) - Interface autohébergée de gestion et de supervision Docker avec prise en charge multi-hôte, gestion de Compose, journaux agrégés, alertes, RBAC, analyse des vulnérabilités et intégration MCP.
- [Docker Registry Browser](https://github.com/klausmeyer/docker-registry-browser) - Interface Web pour l’API HTTP v2 du registre Docker.
- [docker-swarm-visualizer](https://github.com/dockersamples/docker-swarm-visualizer) - Visualise les services Docker sur un Docker Swarm (pour exécuter des démonstrations).
- [dockge](https://github.com/louislam/dockge) - Gestionnaire simple et réactif, autohébergé, organisé autour des piles docker compose.yaml.
- [DockScope](https://github.com/ManuelR-T/dockscope) - Visualise les conteneurs Docker sous forme de graphe de dépendances 3D, avec métriques en direct, journaux et terminal dans le navigateur.
- [Komodo](https://github.com/mbecker20/komodo) - Outil permettant de créer et déployer des logiciels sur de nombreux serveurs.
- [Portainer](https://github.com/portainer/portainer) - Interface de gestion légère pour administrer vos hôtes Docker ou clusters Docker Swarm.
- [Swarmpit](https://github.com/swarmpit/swarmpit) - Swarmpit fournit une interface simple et facile à utiliser pour votre cluster Docker Swarm. Gérez vos piles, services, secrets, volumes, réseaux, etc.
- [usulnet](https://github.com/fr4nsys/usulnet) - Plateforme complète et moderne de gestion Docker, conçue pour les administrateurs système et DevOps, avec outils de niveau entreprise, analyseur CVE, SSH, RDP sur le Web et bien plus encore.

### Intégrations IDE

- Les IDE JetBrains (IntelliJ IDEA, GoLand, WebStorm, CLion, etc.) intègrent un [plugin Docker](https://www.jetbrains.com/help/idea/docker.html#managing-images).
- Plugin [Docker Tooling](https://www.eclipse.org/community/eclipse_newsletter/2016/july/article2.php) pour Eclipse.
- [docker.el](https://github.com/Silex/docker.el) Gérez Docker depuis Emacs.

## Flux de travail des développeurs

### Client API

- [contajners](https://github.com/lispyclouds/contajners) - Client Clojure idiomatique, piloté par les données et adapté au REPL pour les moteurs de conteneurs OCI.
- [Docker Client for JVM](https://github.com/gesellix/docker-client) - Bibliothèque cliente de l’API distante Docker pour la JVM, écrite en Groovy.
- [Docker Client TypeScript](https://gitlab.com/masaeedu/docker-client) - Client de l’API Docker pour JavaScript, généré automatiquement à partir de la définition d’API Swagger du dépôt moby.
- [docker-controller-bot](https://github.com/dgongut/docker-controller-bot) - Bot Telegram pour contrôler les conteneurs Docker.
- [docker-maven-plugin](https://github.com/fabric8io/docker-maven-plugin) - Plugin Maven pour exécuter et créer des images Docker.
- [Docker.DotNet](https://github.com/Microsoft/Docker.DotNet) - Client HTTP C#/.NET pour l’API distante Docker.
- [Docker.Registry.DotNet](https://github.com/ChangemakerStudios/Docker.Registry.DotNet) - Bibliothèque cliente .NET (C#) pour interagir avec l’API de registre Docker (v2).
- [dockerode](https://github.com/apocas/dockerode) - Module node.js pour l’API distante Docker.
- [go-dockerclient](https://github.com/fsouza/go-dockerclient/) - Client HTTP Go pour l’API distante Docker.
- [Gradle Docker plugin](https://github.com/gesellix/gradle-docker-plugin) - Plugin d’API distante Docker pour Gradle.
- [Portainer stack utils](https://github.com/greenled/portainer-stack-utils) - Script Bash pour déployer, mettre à jour ou supprimer des piles Docker dans une instance Portainer à partir d’un fichier YAML docker-compose.
- [sbt-docker](https://github.com/marcuslonnberg/sbt-docker) - Créez des images Docker directement depuis sbt.

### CI/CD

Moteurs CI autohébergés, accélérateurs de compilation et services hébergés ciblant les flux de travail Docker. Les offres commerciales sont signalées par `:yen:`.

- [Buddy](https://buddy.works) - :yen: Le meilleur de Git, de la compilation et des outils de déploiement réuni dans un seul outil puissant qui a accéléré notre développement.
- [Captain](https://github.com/harbur/captain) - Convertissez votre flux de travail Git en conteneurs Docker prêts pour la livraison continue.
- [CircleCI](https://circleci.com/) - :yen: Poussez ou récupérez des images Docker depuis votre environnement de compilation, ou créez et exécutez des conteneurs directement sur CircleCI.
- [CodeFresh](https://octopus.com/codefresh) - :yen: De la compilation aux tests et au partage d’applications Docker, de bout en bout, avec tests automatisés.
- [ConcourseCI](https://concourse-ci.org) - :yen: Plateforme SaaS CI orientée pipelines pour les équipes DevOps.
- [Defang](https://github.com/DefangLabs/defang) - Déployez Docker Compose sur le cloud de votre choix en quelques minutes.
- [Depot](https://depot.dev) - :yen: Créez rapidement des images Docker dans le cloud. Calcul ultra-rapide, mise en cache intelligente automatique et aucune configuration.
- [Diun](https://github.com/crazy-max/diun) - Recevez des notifications lorsqu’une image ou un dépôt est mis à jour dans un registre Docker.
- [dockcheck](https://github.com/mag37/dockcheck) - Script qui vérifie les mises à jour des images Docker sans les télécharger, puis met à jour automatiquement les conteneurs sélectionnés ou tous les conteneurs. Avec notifications, nettoyage et plus encore.
- [Docker plugin for Jenkins](https://github.com/jenkinsci/docker-plugin/) - Le plugin Docker vise à utiliser un hôte Docker pour provisionner dynamiquement un agent, exécuter une seule compilation, puis supprimer cet agent.
- [Drone](https://github.com/drone/drone) - Serveur d’intégration continue basé sur Docker et configuré à l’aide de fichiers YAML.
- [Gantry](https://github.com/shizunge/gantry) - Met automatiquement à jour les services Docker Swarm sélectionnés.
- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) - GitLab intègre la CI pour tester, compiler et déployer votre code à l’aide des runners GitLab.
- [Jaypore CI](https://github.com/theSage21/jaypore_ci) - Système CI/CD et d’automatisation simple, très flexible et puissant, configuré en Python. Fonctionne hors ligne et privilégie l’exécution locale.
- [Kraken CI](https://github.com/Kraken-CI/kraken) - Système CI/CD moderne, open source et sur site, hautement évolutif et axé sur les tests. Docker est l’un de ses exécutants. Développé.
- [Screwdriver](https://screwdriver.cd/) - :yen: Plateforme de compilation open source de Yahoo conçue pour la livraison continue.
- [Self Hosted Runner](https://github.com/youssefbrr/self-hosted-runner) - Solution conteneurisée pour configurer un runner GitHub Actions autohébergé, compatible avec Linux, macOS et Windows.
- [Semaphore CI](https://semaphore.io/) - :yen: CI cloud haute performance qui compile, teste et livre des conteneurs en production.
- [Skipper](https://github.com/Stratoscale/skipper) - Conteneurisez facilement votre dépôt Git.
- [Tekton CD](https://tekton.dev/) - Ressource de pipeline cloud native.
- [TravisCI](https://www.travis-ci.com/) - :yen: CI hébergée pour les projets GitHub avec prise en charge de Docker.

### Environnement de développement

- [coder](https://github.com/coder/coder) - Machines de développement à distance propulsées par Terraform ou Docker.
- [dde](https://github.com/whatwedo/dde) - Ensemble d’outils d’environnement de développement local basé sur Docker.
- [DIP](https://github.com/bibendi/dip) - Utilitaire CLI pour provisionner simplement et interagir avec une application configurée par docker-compose.
- [EnvCLI](https://github.com/EnvCLI/EnvCLI) - Remplacez votre installation locale de Node, Go, etc. par des conteneurs Docker propres au projet.
- [Gebug](https://github.com/moshebe/gebug) - Outil qui simplifie considérablement le débogage d’applications Go conteneurisées grâce aux fonctions de débogueur et de rechargement à chaud.
- [HarborPilot](https://github.com/potterwhite/HarborPilot) - Générateur automatisé d’images Docker multiplateformes pour le développement Linux embarqué (RK3588, RV1126, RK3568). Comprend l’héritage de configuration à trois niveaux, l’allocation de ports basée sur PORT_SLOT et la prise en charge de plusieurs versions d’Ubuntu (20.04/22.04/24.04).
- [Lando](https://github.com/lando/lando) - Lando s’adresse aux développeurs qui souhaitent spécifier rapidement et lancer sans peine les services et outils nécessaires à leurs projets.
- [Laradock](https://github.com/laradock/laradock) - Environnement complet de développement PHP basé sur Docker, exécutant Nginx/Apache, PHP, MySQL, Redis et bien d’autres services Compose interchangeables.
- [uniget](https://github.com/uniget-org/cli) - Uni(versal)get, installateur et outil de mise à jour pour les outils de conteneurs et au-delà (anciennement docker-setup).
- [Zsh-in-Docker](https://github.com/deluan/zsh-in-docker) - Installez Zsh, Oh-My-Zsh et des plugins dans un conteneur Docker en une seule ligne !

### Serverless

- [Apache OpenWhisk](https://github.com/apache/openwhisk) - Plateforme cloud serverless open source qui exécute des fonctions en réponse à des événements, quelle que soit l’échelle.
- [Koyeb](https://www.koyeb.com/) - :yen: Koyeb est une plateforme serverless conviviale pour les développeurs qui déploie des applications partout dans le monde. Exécutez facilement des conteneurs Docker, applications Web et API avec des déploiements basés sur Git, une mise à l’échelle automatique native, un réseau périphérique mondial ainsi qu’un maillage et une découverte de services intégrés.
- [OpenFaaS](https://github.com/openfaas/faas) - Cadre complet de fonctions serverless pour Docker et Kubernetes.

### Tests

- [Container Structure Test](https://github.com/GoogleContainerTools/container-structure-test) - Cadre de validation de la structure d’une image en vérifiant la sortie de commandes ou le contenu du système de fichiers.
- [dgoss](https://github.com/goss-org/goss/tree/master/extras/dgoss) - Outil rapide basé sur YAML pour valider des conteneurs Docker.
- [Kurtosis](https://github.com/kurtosis-tech/kurtosis) - Système de compilation composable pour les environnements de test multi-conteneurs. Il fournit aux développeurs un puissant SDK de type Python pour configurer l’environnement, un validateur à la compilation pour vérifier son comportement et sa configuration, ainsi qu’un environnement d’exécution pour lancer, superviser et déboguer celui-ci.
- [Pumba](https://github.com/alexei-led/pumba) - Outil de tests de chaos pour Docker. Peut être déployé sur Kubernetes et dans un cluster CoreOS.

### Wrappers

- [Hokusai](https://github.com/artsy/hokusai) - CLI Docker + Kubernetes destinée aux développeurs d’applications ; utilisée pour conteneuriser une application et gérer son cycle de vie pendant le développement, les tests et les cycles de publication. Par [artsy](https://github.com/artsy).
- [Preevy](https://github.com/livecycle/preevy) - Environnements de prévisualisation pour les projets Docker et Docker Compose. Testez vos modifications et recueillez les retours des développeurs et non-développeurs (produit/design) en déployant les demandes de tirage chez votre fournisseur cloud dans le cadre du pipeline CI.
- [subuser](https://github.com/subuser-security/subuser) - Facilite l’exécution sécurisée et portable d’applications de bureau graphiques dans Docker.
- [udocker](https://github.com/indigo-dc/udocker) - Outil permettant d’exécuter des conteneurs Docker simples dans des systèmes batch ou interactifs sans privilèges root.
- [Vagrant - Docker provider](https://developer.hashicorp.com/vagrant/docs/providers/docker/basics) - Pour commencer, consultez [vagrant-docker-example](https://github.com/bubenkoff/vagrant-docker-example).

## Outils dans les conteneurs

Outils et applications installés dans des conteneurs ou conçus pour être exécutés en [sidecar](https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar).

- [cdebug](https://github.com/iximiuz/cdebug) - Couteau suisse pour déboguer les conteneurs en cours d’exécution via des sidecars éphémères ; fonctionne avec Docker, containerd et Kubernetes.
- [ckron](https://github.com/nicomt/ckron) - Ordonnanceur de tâches de type cron pour Docker.
- [CoreOS][coreos] - Linux pour les déploiements de serveurs à grande échelle.
- [docker-gen](https://github.com/jwilder/docker-gen) - Génère des fichiers à partir des métadonnées des conteneurs Docker.
- [dockerize](https://github.com/powerman/dockerize) - Utilitaire simplifiant l’exécution d’applications dans des conteneurs Docker.
- [GoSu](https://github.com/tianon/gosu) - Exécutez cette application précise avec cet utilisateur précis, puis quittez le pipeline (outil de script entrypoint).
- [is-docker](https://github.com/sindresorhus/is-docker) - Vérifie si le processus s’exécute dans un conteneur Docker.
- [microcheck](https://github.com/tarampampam/microcheck) - Utilitaires légers de vérification d’état pour conteneurs Docker (75 Ko au lieu de 9,3 Mo pour httpcheck face à cURL), écrits en C pur ; vérifications HTTP(S) et de ports, ainsi qu’exécution parallèle incluses.
- [Ofelia](https://github.com/mcuadros/ofelia/) - Ofelia est un ordonnanceur de tâches moderne et léger pour les environnements Docker, écrit en Go. Il vise à remplacer cron, devenu obsolète. Prend en charge la configuration à partir des étiquettes de conteneur et/ou de fichiers de configuration.
- [su-exec](https://github.com/ncopa/su-exec) - Outil simple qui exécute un programme avec des privilèges différents. Le programme est exécuté directement et non comme processus enfant, contrairement à su et sudo, ce qui évite les problèmes de TTY et de signaux. Pourquoi réinventer gosu ? Il fait pratiquement la même chose que gosu, mais ne pèse que 10 Ko au lieu de 1,8 Mo.
- [supercronic](https://github.com/aptible/supercronic) - Exécuteur de tâches compatible crontab, conçu spécialement pour les conteneurs.

# Ressources d’apprentissage

## Par où commencer

- [Benefits of using Docker](https://semaphore.io/blog/docker-benefits) sur les avantages de Docker pour le développement et la livraison, avec une feuille de route pratique pour son adoption.
- [Bootstrapping Microservices](https://www.manning.com/books/bootstrapping-microservices-with-docker-kubernetes-and-terraform) - Guide pratique fondé sur des projets pour créer des applications à base de microservices : commence par la création d’une image Docker pour un microservice et sa publication dans un registre privé, puis se termine par le déploiement d’une application complète de microservices sur un cluster Kubernetes de production.
- [Docker Curriculum](https://github.com/prakhar1989/docker-curriculum): Tutoriel complet pour débuter avec Docker. Apprenez à utiliser Docker et à déployer des applications conteneurisées sur AWS avec Elastic Beanstalk et Elastic Container Service.
- [Docker Documentation](https://docs.docker.com/): La documentation officielle.
- [Docker for beginners](https://github.com/groda/big_data/blob/master/docker_for_beginners.md): Tutoriel destiné aux débutants qui souhaitent apprendre les bases de Docker, de « Hello world! » aux interactions élémentaires avec les conteneurs, avec des explications simples des concepts sous-jacents.
- [Docker for novices](https://www.youtube.com/watch?v=xsjSadjKXns) Introduction à Docker destinée aux développeurs et testeurs qui ne l’ont jamais utilisé. (Vidéo de 1 h 40, enregistrée à linux.conf.au 2019 — Christchurch, Nouvelle-Zélande.)
- [Docker katas](https://github.com/eficode-academy/docker-katas) Série de travaux pratiques qui vous mène de « Hello Docker » au déploiement d’une application Web conteneurisée sur un serveur.
- [Docker simplified in 55 seconds](https://www.youtube.com/watch?v=vP_4DlOH1G4): Introduction animée et générale à Docker. Considérez-la comme un résumé visuel qui vous aidera à aborder des ressources pédagogiques plus complexes.
- [Docker Training](https://training.mirantis.com) - :yen:
- [Dockerlings](https://github.com/furkan/dockerlings): Apprenez Docker depuis votre terminal grâce à une TUI moderne et à des exercices courts.
- [Introduction à Docker](https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/) Section dédiée à la maîtrise de Docker sur un site français consacré au DevSecOps : des bases aux bonnes pratiques, en passant par l’optimisation et la sécurisation de vos conteneurs...
- [Learn Docker](https://github.com/dwyl/learn-docker): Tutoriel pas à pas et ressources complémentaires (vidéos, articles, antisèches).
- [Learn Docker (Visually)](https://pagertree.com/learn/docker/overview) - Vue d’ensemble de haut niveau, destinée aux débutants, des principaux composants de Docker et de leur articulation. Nombreuses images, exemples et ressources de grande qualité.
- [Play With Docker](https://training.play-with-docker.com/): PWD est un excellent moyen de débuter avec Docker, du niveau débutant au niveau avancé. Docker s’exécute directement dans votre navigateur.
- [Practical Guide about Docker Commands in Spanish](https://github.com/brunocascio/docker-espanol) Ce guide espagnol présente les commandes Docker de base avec des exemples concrets.
- [Setting Python Development Environment with VScode and Docker](https://github.com/RamiKrispin/vscode-python): Tutoriel pas à pas pour configurer un environnement de développement Python conteneurisé avec VScode, Docker et l’extension Dev Container.
- [The Docker Handbook](https://docker-handbook.farhan.dev/) Livre open source qui enseigne les fondamentaux de Docker, les bonnes pratiques et certaines fonctionnalités intermédiaires. Le livre est hébergé sur [fhsinchy/the-docker-handbook](https://github.com/fhsinchy/the-docker-handbook) et les projets sur le dépôt [fhsinchy/docker-handbook-projects](https://github.com/fhsinchy/docker-handbook-projects).

**Antisèches**

- [eon01](https://github.com/eon01/DockerCheatSheet)
- [dimonomid](https://github.com/dimonomid/docker-quick-ref) (PDF)
- [JensPiegsa](https://github.com/JensPiegsa/docker-cheat-sheet)
- [wsargent](https://github.com/wsargent/docker-cheat-sheet) (la plus populaire)

## Par où commencer (Windows)

- [Docker on Windows behind a firewall](https://toedter.com/2015/05/11/docker-on-windows-behind-a-firewall/)
- [Docker Reference Architecture: Modernizing Traditional .NET Framework Applications](https://docs.mirantis.com/containers/v3.0/dockeree-ref-arch/app-dev/modernize-dotnet-apps.html) - Vous apprendrez à déterminer quels types d’applications .NET Framework se prêtent à la conteneurisation et à appliquer l’approche « lift-and-shift ».
- [Docker with Microsoft SQL 2016 + ASP.NET](https://blog.alexellis.io/docker-does-sql2016-aspnet/) Démonstration de l’exécution de charges de travail ASP.NET et SQL Server dans Docker.
- [Exploring ASP.NET Core with Docker in both Linux and Windows Containers](https://www.hanselman.com/blog/exploring-aspnet-core-with-docker-in-both-linux-and-windows-containers) Exécution d’applications ASP.NET Core dans des conteneurs Linux et Windows, avec [Docker pour Windows][docker-for-windows].
- [Running a Legacy ASP.NET App in a Windows Container](https://blog.sixeyed.com/dockerizing-nerd-dinner-part-1-running-a-legacy-asp-net-app-in-a-windows-container/) Étapes pour conteneuriser une ancienne application ASP.NET et l’exécuter dans un conteneur Windows.
- [Windows Containers and Docker: The 101](https://www.youtube.com/watch?v=N7SG2wEyQtM) - Présentation de 20 minutes de l’utilisation de Docker pour exécuter PowerShell, ASP.NET Core et des applications ASP.NET.
- [Windows Containers Quick Start](https://learn.microsoft.com/en-us/virtualization/windowscontainers/about/) Présentation des conteneurs Windows, avec des liens vers des guides de démarrage rapide pour Windows 10 et Windows Server 2016.

---

## Livres et tutoriels

- [Cloud Native Landscape](https://github.com/cncf/landscape)
- [Docker Blog](https://www.docker.com/blog/) - Actualités régulières sur Docker, sa communauté et ses outils.
- [Docker Certification](https://intellipaat.com/docker-training-course/?US) - :yen: Vous aidera à apprendre la conteneurisation avec Docker, l’exécution de conteneurs, la création d’images, Dockerfile, l’orchestration Docker, les bonnes pratiques de sécurité et bien plus grâce à des projets pratiques et des études de cas, et à réussir la certification Docker Certified Associate.
- [Docker dev bookmarks](https://www.codever.dev/search?q=docker) - Utilisez l’étiquette [docker](https://www.codever.dev/bookmarks/t/docker).
- [Docker in Action, Second Edition](https://www.manning.com/books/docker-in-action-second-edition)
- [Docker in Practice, Second Edition](https://www.manning.com/books/docker-in-practice-second-edition)
- [Docker packaging guide for Python](https://pythonspeed.com/docker/) - Série d’articles détaillés sur les spécificités de l’empaquetage Docker pour Python.
- [Learn Docker in a Month of Lunches](https://www.manning.com/books/learn-docker-in-a-month-of-lunches)
- [Learn Docker](https://coursesity.com/blog/best-docker-tutorials/) - Sélection des meilleurs tutoriels et cours Docker en ligne.
- [Programming Community Curated Resources for learning Docker](https://hackr.io/tutorials/learn-docker)

## Listes Awesome

- [Awesome Compose](https://github.com/docker/awesome-compose) - Exemples Docker Compose.
- [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes)
- [Awesome Linux Container](https://github.com/Friz-zy/awesome-linux-containers) plus général sur les conteneurs que ce dépôt.
- [Awesome Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) Liste de services réseau et d’applications Web libres pouvant être hébergés localement, de façon classique (en configurant un serveur Web local et en y exécutant les applications) ou dans un conteneur Docker.
- [Awesome Sysadmin](https://github.com/n1trux/awesome-sysadmin)
- [ToolsOfTheTrade](https://github.com/cjbarber/ToolsOfTheTrade) liste d’applications SaaS et sur site.

## Démonstrations et exemples

- [An Annotated Docker Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-docker-config-for-frontend-web-development) Un environnement de développement local avec Docker permet d’empaqueter sous forme de configuration les besoins DevOps du projet et de fluidifier l’intégration des nouveaux arrivants.
- [Local Docker DB](https://github.com/alexmacarthur/local-docker-db) liste d’exemples docker-compose pour de nombreuses bases de données.
- [Webstack-micro](https://github.com/ferbs/webstack-micro) Application Web de démonstration montrant comment Docker Compose peut configurer une passerelle API, une authentification centralisée, des tâches en arrière-plan et des WebSockets sous forme de services conteneurisés.

## Bons conseils

- [Docker Caveats](https://docker-saigon.github.io/post/Docker-Caveats/) Ce qu’il faut savoir sur l’exécution de Docker en production (rédigé le 11 avril 2016).
- [Docker Containers on the Desktop](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
- [Docker vs. VMs? Combining Both for Cloud Portability Nirvana](https://www.flexera.com/blog/finops/)
- [Don't Repeat Yourself with Anchors, Aliases and Extensions in Docker Compose Files](https://medium.com/@kinghuang/docker-compose-anchors-aliases-extensions-a1e4105d70bd)
- [GUI Apps with Docker](https://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/)

## Raspberry Pi et ARM

- [Docker Pirates ARMed with explosive stuff](https://blog.hypriot.com/) Vaste ressource sur les clusters, Swarm et Docker, avec une image préinstallée pour carte SD Raspberry Pi.
- [Get Docker up and running on the RaspberryPi in three steps](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)
- [git push docker containers to linux devices](https://www.balena.io) DevOps moderne pour l’IoT, s’appuyant sur Git et Docker.
- [Installing, running, using Docker on armhf (ARMv7) devices](https://github.com/umiddelb/armhf/wiki/Installing,-running,-using-docker-on-armhf-%28ARMv7%29-devices)

## Articles sur la sécurité

- [Bringing new security features to Docker](https://opensource.com/business/14/9/security-for-docker)
- [CVE Scanning Alpine images with Multi-stage builds in Docker 17.05](https://github.com/tomwillfixit/alpine-cvecheck)
- [Docker Secure Deployment Guidelines](https://github.com/AonCyberLabs/Docker-Secure-Deployment-Guidelines)
- [Docker Security - Quick Reference](https://binarymist.io/publication/docker-security/)
- [Docker Security: Are Your Containers Tightly Secured to the Ship? SlideShare](https://www.slideshare.net/slideshow/docker-security-are-your-containers-tightly-secured-to-the-ship/43834790)
- [How CVE's are handled on Offical Docker Images](https://github.com/docker-library/official-images/issues/1448)
- [Lynis est un outil d’audit de sécurité open source qui inclut l’audit Docker](https://cisofy.com/lynis/)
- [Security Best Practices for Building Docker Images](https://linux-audit.com/tags/docker/)
- [Software Engineering Radio interview of Docker Security Team Lead (Diogo Mónica)](https://www.se-radio.net/2017/05/se-radio-episode-290-diogo-monica-on-docker-security/)
- [Ten Docker Image Security Best Practices Cheat Sheet](https://snyk.io/blog/10-docker-image-security-best-practices/)
- [Top ten most popular docker images each contain at least 30 vulnerabilities](https://snyk.io/blog/top-ten-most-popular-docker-images-each-contain-at-least-30-vulnerabilities/)
- [Tuning Docker with the newest security enhancements](https://opensource.com/business/15/3/docker-security-tuning)
- [10 best practices to containerize Node.js web applications with Docker](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)

## Vidéos

- [Deploying and scaling applications with Docker, Swarm, and a tiny bit of Python magic](https://www.youtube.com/watch?v=GpHMTR7P2Ms) (3:11:06)
- [Docker Course](https://www.youtube.com/watch?v=UZpyvK6UGFo) (en espagnol)
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
- [Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615) Cours Udacity gratuit.
- [State of containers: a debate with CoreOS, VMware and Google](https://www.youtube.com/watch?v=IiITP3yIRd8) (27:38)

## Communautés et rencontres

### Brésil

- [Docker BR on Telegram](https://telegram.me/dockerbr)

### Anglais

- [Docker Community](https://www.docker.com/community/)
- [Docker Events](https://www.docker.com/events/)
- [Docker Online Meetup](https://www.meetup.com/en-AU/Docker-Online-Meetup/)
- [Docker Reddit Community](https://www.reddit.com/r/docker/)

### Russe

- [Docker Russian-speaking Community](https://t.me/docker_ru)

### Espagnol

- [Docker Tips](https://dockertips.com/)

## Évolution du nombre d’étoiles

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

