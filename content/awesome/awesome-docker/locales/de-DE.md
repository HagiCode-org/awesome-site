# Awesome Docker [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)][sindresorhus] [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/veggiemonk/awesome-docker/)[![Last Commit](https://img.shields.io/github/last-commit/veggiemonk/awesome-docker)](https://github.com/veggiemonk/awesome-docker/commits/main)<!-- omit in toc -->

> Eine sorgfältig zusammengestellte Liste von Projekten für Docker.

Wenn du etwas beitragen möchtest, lies bitte zuerst [CONTRIBUTING.md](https://github.com/veggiemonk/awesome-docker/blob/master/.github/CONTRIBUTING.md).
Wenn diese Liste nicht vollständig ist, kannst du dazu beitragen, sie zu vervollständigen.
Wenn ein Link hier nicht (mehr) passt, kannst du das mit einem [Pull Request][editreadme] ändern und diese Datei verbessern. Vielen Dank!

**Das Projekt muss für Docker sein und darf Docker nicht nur verwenden.**

> Als Faustregel gilt: Wenn die Entfernung der Docker-Integration den Nutzen des Projekts nicht zunichtemachen würde, gehört es nicht auf diese Liste.

Die Ersteller und Betreuer dieser Liste erhalten keinerlei Zahlungen für die Annahme von Änderungen von Mitwirkenden.
Diese Seite ist in keiner Weise ein offizielles Docker-Produkt.
Sie ist eine Liste von Links zu Projekten und wird von Freiwilligen gepflegt.
Alle sind herzlich eingeladen, Beiträge zu leisten.
Ziel dieses Repositorys ist es, Open-Source-Projekte zu katalogisieren, nicht Werbung für kommerzielle Zwecke zu machen.

> Docker ist eine offene Plattform, auf der Entwickler und Systemadministratoren verteilte Anwendungen erstellen, bereitstellen und ausführen können. Docker besteht aus der portablen, leichtgewichtigen Laufzeit- und Paketierungskomponente Docker Engine sowie dem Cloud-Dienst Docker Hub zum Teilen von Anwendungen und Automatisieren von Arbeitsabläufen. Mit Docker lassen sich Anwendungen schnell aus Komponenten zusammensetzen; zugleich werden Reibungsverluste zwischen Entwicklungs-, QA- und Produktionsumgebungen beseitigt. So kann die IT schneller ausliefern und dieselbe Anwendung unverändert auf Laptops, virtuellen Maschinen im Rechenzentrum und in jeder Cloud ausführen.

_Quelle:_ [What is Docker](https://www.docker.com/why-docker/)

# Inhalt <!-- omit in toc -->

<!-- TOC -->

- [Projekte](#projects)
    - [Engine und Laufzeit](#engine--runtime)
    - [Images erstellen](#building-images)
        - [Erstellungswerkzeuge](#builder)
        - [Basis-Images](#base-images)
        - [Dockerfile](#dockerfile)
        - [Prüfwerkzeuge](#linter)
    - [Image-Lebenszyklus](#image-lifecycle)
        - [Registry](#registry)
        - [Registry-CLI](#registry-cli)
        - [Image-Scanning und SBOM](#image-scanning--sbom)
        - [Software-Lieferkette](#supply-chain)
    - [Container ausführen](#running-containers)
        - [Zusammenstellung](#composition)
        - [Orchestrierung](#orchestration)
        - [Bereitstellung und Plattformen](#deployment--platforms)
        - [Bereinigung nicht verwendeter Ressourcen](#garbage-collection)
    - [Netzwerke und Proxys](#networking--proxies)
        - [Netzwerke](#networking)
        - [Reverse-Proxys](#reverse-proxy)
    - [Speicher und Daten](#storage--data)
    - [Beobachtbarkeit](#observability)
    - [Sicherheit](#security)
    - [Benutzeroberflächen](#user-interfaces)
        - [Desktop](#desktop)
        - [Terminal](#terminal)
        - [Web](#web)
        - [IDE-Integrationen](#ide-integrations)
    - [Entwicklungsablauf](#developer-workflow)
        - [API-Client](#api-client)
        - [CI/CD](#cicd)
        - [Entwicklungsumgebung](#development-environment)
        - [Serverlos](#serverless)
        - [Tests](#testing)
        - [Wrapper](#wrappers)
    - [Werkzeuge im Container](#in-container-tooling)
- [Lernressourcen](#learning-resources)
    - [Erste Schritte](#where-to-start)
    - [Erste Schritte (Windows)](#where-to-start-windows)
    - [Bücher und Tutorials](#books--tutorials)
    - [Awesome-Listen](#awesome-lists)
    - [Demos und Beispiele](#demos-and-examples)
    - [Nützliche Tipps](#good-tips)
    - [Raspberry Pi und ARM](#raspberry-pi--arm)
    - [Sicherheitsartikel](#security-articles)
    - [Videos](#videos)
    - [Communitys und Meetups](#communities-and-meetups)
        - [Brasilianisch](#brazilian)
        - [Englisch](#english)
        - [Russisch](#russian)
        - [Spanisch](#spanish)
- [Sterne im Zeitverlauf](#stargazers-over-time)

<!-- /TOC -->

# Projekte

## Offizielle Projekte

- [Moby](https://github.com/moby/moby)
- [Docker Hub](https://hub.docker.com)
- [Docker Compose](https://github.com/docker/compose/) - Mehrcontainer-Anwendungen mit Docker definieren und ausführen.
- [Docker Registry][distribution] - Das Docker-Werkzeugset zum Packen, Ausliefern, Speichern und Bereitstellen von Inhalten

## Engine und Laufzeit

- [colima](https://github.com/abiosoft/colima) - Container-Laufzeiten unter macOS (und Linux) mit minimalem Einrichtungsaufwand.
- [containerd](https://github.com/containerd/containerd) - Eine offene und zuverlässige Container-Laufzeit.
- [cri-o](https://github.com/cri-o/cri-o) - Eine auf der Open Container Initiative basierende Implementierung der Kubernetes Container Runtime Interface.
- [gVisor](https://github.com/google/gvisor) - Anwendungskernel für Container.
- [lxc](https://github.com/lxc/lxc) - LXC – Linux-Container.
- [Mocker](https://github.com/us/mocker) - Docker-kompatible Container-CLI für macOS, erstellt auf Apples Containerization-Framework.
- [podman](https://github.com/containers/libpod) - Libpod ist eine Bibliothek zum Erstellen von Container-Pods. Heimat von Podman.
- [runc](https://github.com/opencontainers/runc) - CLI-Werkzeug zum Starten und Ausführen von Containern gemäß der OCI-Spezifikation.
- [runtime-tools](https://github.com/opencontainers/runtime-tools) - Oci-runtime-tool ist eine Sammlung von Werkzeugen für die OCI-Laufzeitspezifikation.
- [youki](https://github.com/youki-dev/youki) - In Rust geschriebene Container-Laufzeit, die die OCI-Laufzeitspezifikation implementiert.

## Images erstellen

### Erstellungswerkzeuge

Anwendungen, die das Erstellen **neuer** Images unterstützen oder vereinfachen.

- [ansible-bender](https://github.com/ansible-community/ansible-bender) - Ein Werkzeug, das `ansible` und `buildah` nutzt.
- [apko](https://github.com/chainguard-dev/apko) - Deklarativer OCI-Image-Builder aus apk-Paketen; von Grund auf reproduzierbar.
- [buildah](https://github.com/containers/buildah) - Ein Werkzeug zum Erstellen von OCI-Images.
- [BuildKit](https://github.com/moby/buildkit) - Nebenläufiges, cache-effizientes und Dockerfile-unabhängiges Builder-Toolkit.
- [buildx](https://github.com/docker/buildx) - Offizielles Docker-CLI-Plugin für Multi-Plattform-Builds auf Basis von BuildKit.
- [cekit](https://github.com/cekit/cekit) - Ein von OpenShift verwendetes Werkzeug zum Erstellen von Basis-Images mit verschiedenen Build-Engines.
- [dlayer](https://github.com/orisano/dlayer) - Docker-Layer-Analysator.
- [docker-companion](https://github.com/mudler/docker-companion) - In Golang geschriebenes Kommandozeilenwerkzeug zum Zusammenfassen und Entpacken von Docker-Images.
- [docker-repack](https://github.com/orf/docker-repack) - Packt ein Docker-Image als kleinere, effizientere Version neu, die sich deutlich schneller herunterladen lässt.
- [DockerSlim](https://github.com/docker-slim/docker-slim) verkleinert überdimensionierte Docker-Images und erstellt möglichst kleine Images.
- [earthly](https://github.com/earthly/earthly) - Containerisierte Build-Automatisierung mit einer Syntax aus Dockerfile und Makefile.
- [essex](https://github.com/utensils/essex) - Vorlage für Docker-basierte Projekte: Essex ist ein in Bash geschriebenes CLI-Werkzeug, mit dem sich schnell saubere und einheitliche Docker-Projekte mit Makefile-gesteuerten Workflows einrichten lassen.
- [HPC Container Maker](https://github.com/NVIDIA/hpc-container-maker) - Erstellt Dockerfiles aus einer übergeordneten Python-Rezeptur, einschließlich Bausteinen für High-Performance-Computing-Komponenten.
- [img](https://github.com/genuinetools/img) - Eigenständiger, daemonloser und unprivilegierter Builder für Dockerfile- und OCI-kompatible Container-Images.
- [ko](https://github.com/ko-build/ko) - Go-Anwendungen ohne Dockerfile als Container-Images erstellen und bereitstellen.
- [nix2container](https://github.com/nlewo/nix2container) - OCI-Images mit Nix erstellen, ohne Umwege über `docker load`.
- [packer](https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/builder/docker) - HashiCorp-Werkzeug zum Erstellen von Maschinen-Images, einschließlich Docker-Images, integriert mit Konfigurationsverwaltungswerkzeugen wie Chef, Puppet und Ansible.
- [Production-Ready Python Containers](https://pythonspeed.com/products/pythoncontainer/) - :yen: Vorlage zum Erstellen produktionsreifer Docker-Images für Python-Anwendungen.
- [RAUDI](https://github.com/cybersecsi/RAUDI) - Werkzeug zur automatischen Aktualisierung (und optional zum Push zu Docker Hub) von Docker-Images für Software von Drittanbietern, sobald eine neue Version, Aktualisierung oder ein Commit vorliegt.
- [runlike](https://github.com/lavie/runlike) - Erzeugt aus laufenden Containern den `docker run`-Befehl samt Optionen.
- [Whaler](https://github.com/P3GLEG/Whaler) - Programm zum Zurückentwickeln von Docker-Images in Dockerfiles.


### Basis-Images

Minimale, gehärtete oder speziell entwickelte Container-Basis-Images.

- [Chainguard Images](https://github.com/chainguard-images/images) - Minimale, signierte und mit SBOM-Nachweisen versehene Container-Images auf Basis von Wolfi.
- [distroless](https://github.com/GoogleContainerTools/distroless) - Sprachspezifische Docker-Images ohne Betriebssystem.
- [melange](https://github.com/chainguard-dev/melange) - Erstellt apk-Pakete aus deklarativem YAML zur Verwendung mit apko.
- [pglayers](https://github.com/pglayers/pglayers) - Vorgefertigte PostgreSQL-Erweiterungen als kombinierbare Docker-Layer. Über 50 Erweiterungen, sofort einsatzbereite kombinierte Images (vollständig, Azure-kompatibel).
- [Wolfi](https://github.com/wolfi-dev/os) - Undistro-Linux für Container; basiert auf glibc, signiert und mit täglichen SBOMs.


### Dockerfile

- [Dockerfile Generator](https://github.com/ozankasikci/dockerfile-generator) `dfg` ist sowohl eine Go-Bibliothek als auch ein ausführbares Programm, das über verschiedene Eingabekanäle gültige Dockerfiles erstellt.
- [Dockershelf](https://github.com/Dockershelf/dockershelf) - Ein Repository als Sammlung universeller, effizienter und schlanker Docker-Rezepte. Die Images werden täglich über einen Travis-Cron-Job aktualisiert, getestet und veröffentlicht.
- [Dofigen](https://github.com/lenra-io/dofigen) - Ein Dockerfile-Generator, der eine vereinfachte Beschreibung im YAML- oder JSON-Format verwendet.
- [Trsuted Builds](https://dockerfile.github.io/) - Vertrauenswürdige, automatisierte Docker-Builds. Das Dockerfile-Projekt pflegt ein zentrales Repository mit Dockerfiles für verschiedene beliebte Open-Source-Dienste, die in Docker-Containern ausgeführt werden können.

### Prüfwerkzeuge

- [Dockadvisor](https://github.com/deckrun/dockadvisor) - Leichtgewichtiger Dockerfile-Linter mit über 60 Regeln, Qualitätsbewertung und Sicherheitsprüfungen.
- [docker-image-size-limit](https://github.com/wemake-services/docker-image-size-limit) - Ein Werkzeug zur Überwachung der Größe deiner Docker-Images.
- [Hadolint](https://github.com/hadolint/hadolint) - Ein Dockerfile-Linter, der Best Practices und häufige Fehler prüft und auch Bash-Code in `RUN`-Anweisungen linten kann.

## Image-Lebenszyklus

### Registry

Dienste zum sicheren Speichern deiner Docker-Images.

- [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/) - :yen: Amazon Elastic Container Registry (ECR) ist eine vollständig verwaltete Docker-Container-Registry, in der Entwickler Docker-Container-Images einfach speichern, verwalten und bereitstellen können.
- [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/#overview) - :yen: Eine private Docker-Registry als erstklassige Azure-Ressource verwalten.
- [Cloudsmith](https://cloudsmith.com/product/formats/docker-registry) - :yen: Vollständig verwalteter SaaS-Dienst für Paketverwaltung mit erstklassiger Unterstützung für öffentliche und private Docker-Registries (sowie viele weitere Formate, darunter Helm-Charts für das Kubernetes-Ökosystem). Großzügiges kostenloses Kontingent und für Open Source vollständig kostenlos.
- [Container Registry Service](https://container-registry.com/) - :yen: Harbor-basierte Containerverwaltung als Dienst für Teams und Organisationen. Das kostenlose Kontingent umfasst 1 GB Speicher für private Repositories.
- [Cycle.io](https://cycle.io/) - :yen: Container-Hosting auf Bare-Metal-Servern.
- [DigitalOcean](https://www.digitalocean.com/products/container-registry) - :yen: DigitalOcean Container Registry.
- [Docker Hub](https://hub.docker.com/) von Docker Inc. bereitgestellt.
- [Docker Registry v2][distribution] - Das Docker-Werkzeugset zum Packen, Ausliefern, Speichern und Bereitstellen von Inhalten
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - Effiziente, stabile und sichere Dateiübertragung und Image-Beschleunigung auf Grundlage von P2P-Technologie.
- [GCP Artifact Registry](https://docs.cloud.google.com/artifact-registry/docs) - :yen: Schneller, privater Docker-Image-Speicher auf der Google Cloud Platform.
- [Gitea Container Registry](https://docs.gitea.com/usage/packages/container) - In Gitea integrierte Docker-Registry, ideal für das Hosting privater Images in kleinem Umfang.
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - GitHubs Lösung zum Speichern und Verwalten von Docker-Images, eng in GitHub Actions integriert.
- [GitLab Container Registry](https://docs.gitlab.com/user/packages/container_registry/) - Registry, deren Images für GitLab CI vorgesehen sind.
- [Granite Registry](https://granite.so/products/docker-registry) - :yen: Private Docker-Images gemeinsam mit den Workloads speichern, die sie abrufen; mit eingeschränkten Nur-Lese- und Lese-Schreib-Schlüsseln.
- [Harbor](https://github.com/goharbor/harbor) Ein Open-Source-Projekt für eine vertrauenswürdige Cloud-native Registry, die Inhalte speichert, signiert und scannt. Unterstützt Replikation, Benutzerverwaltung, Zugriffskontrolle und Aktivitätsprüfung.
- [JFrog Artifactory](https://jfrog.com/artifactory/) - :yen: Artefakt-Repository-Manager, der auch als private Docker-Registry genutzt werden kann.
- [kontain.me](https://github.com/imjasonh/kontain.me) - On-Demand-Container-Image-Registry, die Images beim Abruf erstellt und bereitstellt.
- [Kraken](https://github.com/uber/kraken) - Ubers hochskalierbare P2P-Docker-Registry, die Terabytes an Daten in Sekunden verteilen kann.
- [NORA](https://github.com/getnora-io/nora) - Leichtgewichtige Registry für Artefakte mit mehreren Protokollen: Docker, Maven, npm, Cargo und PyPI in einer einzigen 32-MB-Binärdatei. Pull-through-Cache, Web-UI, Prometheus-Metriken und RBAC-Authentifizierung.
- [nscr](https://github.com/jhstatewide/nscr) - Eine leichtgewichtige, eigenständige Container-Registry, die einfach zu betreiben und zu warten ist.
- [Quay.io](https://quay.io/) - :yen: Sicheres Hosting für private Docker-Repositories.
- [Registryo](https://github.com/inmagik/registryo) - UI und tokenbasierter Authentifizierungsserver für lokale Docker-Registries.
- [RepoFlow](https://www.repoflow.io) - Eine einfache und benutzerfreundliche Paketverwaltungsplattform mit Docker-Unterstützung und weiteren Formaten wie PyPI, Maven, npm und Helm. Mit intelligenter Suche, integrierter Docker-Image-Prüfung und einem attraktiven kostenlosen Angebot für selbst gehosteten Betrieb und Cloud-Nutzung.
- [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) - Binärdateien und Build-Artefakte entlang der Software-Lieferkette verwalten.

### Registry-CLI

Daemonlose Kommandozeilenwerkzeuge zum Untersuchen, Kopieren und Bearbeiten von Images in OCI-/Docker-Registries.

- [crane](https://github.com/google/go-containerregistry/tree/main/cmd/crane) - Leichtgewichtige CLI zur Bearbeitung von Registry-Images aus `go-containerregistry`.
- [go-containerregistry](https://github.com/google/go-containerregistry) - Go-Bibliothek und CLI-Werkzeuge (`crane`, `gcrane`, `registry`) für die Arbeit mit Container-Registries.
- [oras](https://github.com/oras-project/oras) - Beliebige OCI-Artefakte zu jeder OCI-Registry pushen und von dort abrufen.
- [regctl](https://github.com/regclient/regclient) - Daemonloser Registry-Client zum Kopieren, Untersuchen, Ändern und Signieren von OCI-Images.
- [skopeo](https://github.com/containers/skopeo) - Mit entfernten Image-Registries arbeiten: Informationen abrufen, Images kopieren und Inhalte signieren.

### Image-Scanning und SBOM

Image-Schwachstellenscanner, SBOM-Generatoren und Werkzeuge zum Fixieren von Digests. Kommerzielle Einträge sind mit `:yen:` gekennzeichnet.

- [Anchor](https://github.com/SongStitch/anchor/) - Werkzeug für reproduzierbare Builds, das Abhängigkeiten in Dockerfiles auf feste Versionen fixiert.
- [Anchor Enterprise](https://anchore.com/) - :yen: Images auf CVE-Schwachstellen und anhand benutzerdefinierter Sicherheitsrichtlinien analysieren.
- [BomLens](https://github.com/sktelecom/bomlens) - Container-Images (sowie Quellcode, Binärdateien und Firmware) scannen und CycloneDX-SBOMs mit Berichten zu Schwachstellen, Lizenzen und Hinweisen erstellen. Wird als einzelnes Docker-Image mit Web-UI ausgeliefert.
- [Clair](https://github.com/quay/clair) - Clair ist ein Open-Source-Projekt zur statischen Analyse von Schwachstellen in appc- und Docker-Containern.
- [Docker Scout](https://github.com/docker/scout-cli) - Offizielle Docker-CLI zur Erstellung von SBOMs, Schwachstellenanalyse und Richtlinienbewertung.
- [Grype](https://github.com/anchore/grype) - Ein Schwachstellenscanner für Container-Images, Dateisysteme und SBOMs.
- [oscap-docker](https://github.com/OpenSCAP/openscap) - OpenSCAP stellt das Werkzeug oscap-docker zum Scannen von Docker-Containern und -Images bereit.
- [pindock](https://github.com/deadnews/pindock) - Docker-Image-Digests in Dockerfiles und Compose-Dateien fixieren und aktualisieren.
- [Syft](https://github.com/anchore/syft) - CLI-Werkzeug und Bibliothek zur Erstellung einer Software Bill of Materials (SBOM) aus Container-Images und Dateisystemen.
- [Trivy](https://github.com/aquasecurity/trivy) - Einfacher und umfassender Open-Source-Schwachstellenscanner von Aqua Security für Container (geeignet für CI).

### Software-Lieferkette

Signierung, Attestierungen und Herkunftsnachweise für Container-Images.

- [cosign](https://github.com/sigstore/cosign) - Signierung und Verifizierung von Containern sowie Transparenzprotokoll für OCI-Artefakte.
- [in-toto](https://github.com/in-toto/in-toto) - Framework für Attestierungen der Lieferkette; bildet die Grundlage für SLSA und cosign-Herkunftsnachweise.
- [policy-controller](https://github.com/sigstore/policy-controller) - Kubernetes-Admission-Controller, der cosign-Signaturen für Container-Images erzwingt.
- [witness](https://github.com/in-toto/witness) - in-toto-Attestierungen entlang der Build-Pipeline erstellen und verifizieren.

## Container ausführen

### Zusammenstellung

- [Composerize](https://github.com/magicmark/composerize) - docker run-Befehle in docker-compose-Dateien umwandeln.
- [ctk](https://github.com/ctk-hq/ctk) - Visueller Composer für containerbasierte Workloads.
- [kompose](https://github.com/kubernetes/kompose) - Von Docker Compose zu Kubernetes wechseln.
- [plash](https://github.com/ihucos/plash) - Eine Engine zum Ausführen und Erstellen von Containern, die innerhalb von Docker läuft.
- [podman-compose](https://github.com/containers/podman-compose) - Ein Skript zum Ausführen von docker-compose.yml mit Podman.
- [Smalte](https://github.com/roquie/smalte) – Anwendungen, die eine statische Konfiguration benötigen, dynamisch im Docker-Container konfigurieren.

### Orchestrierung

- [CloudSlang](https://github.com/CloudSlang/cloud-slang) - CloudSlang ist eine Workflow-Engine zur Automatisierung von Docker-Prozessen.
- [docker rollout](https://github.com/Wowu/docker-rollout) - Unterbrechungsfreie Bereitstellung von Docker-Compose-Diensten.
- [Kubernetes](https://github.com/kubernetes/kubernetes) - Open-Source-Orchestrierungssystem von Google für Docker-Container.
- [Mesos](https://github.com/apache/mesos) - Ressourcen-/Job-Scheduler für Container, virtuelle Maschinen und physische Hosts.
- [Nebula](https://github.com/nebula-orchestrator) - Ein Docker-Orchestrierungswerkzeug zur Verwaltung verteilter Cluster im großen Maßstab.
- [Nomad](https://github.com/hashicorp/nomad) - Anwendungen einfach in jedem Maßstab bereitstellen. Ein verteilter, hochverfügbarer und rechenzentrumsbewusster Scheduler.
- [Rancher](https://github.com/rancher/rancher) - Ein Open-Source-Projekt mit einer Komplettplattform für den produktiven Betrieb von Docker.
- [Swarm-cronjob](https://github.com/crazy-max/swarm-cronjob) - Zeitgesteuerte Jobs auf Swarm erstellen.

### Bereitstellung und Plattformen

Selbst gehostete und verwaltete Cloud-Plattformen (PaaS/CaaS, Bereitstellungsautomatisierung). Kommerzielle Einträge sind mit `:yen:` gekennzeichnet.

- [Amazon ECS](https://aws.amazon.com/ecs/) - :yen: Ein Verwaltungsdienst auf EC2, der Docker-Container unterstützt.
- [Appfleet](https://appfleet.com/) - :yen: Edge-Plattform zur globalen Bereitstellung und Verwaltung containerisierter Dienste; leitet den Datenverkehr für geringe Latenz zum nächstgelegenen Standort.
- [Azure AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/) - :yen: Vollständig verwalteter Kubernetes-Dienst zur Container-Orchestrierung.
- [blackfish](https://gitlab.com/blackfish/blackfish) - Eine CoreOS-VM zum Aufbau von Swarm-Clustern für Entwicklung und Produktion.
- [BosnD](https://gitlab.com/n0r1sk/bosnd) - BosnD, der Boatswain-Daemon – ein dynamischer Konfigurationsdatei-Generator und Dienst-Neustarter für sich ändernde Containerumgebungen.
- [caprover](https://github.com/caprover/caprover) - [Zuvor als CaptainDuckDuck bekannt] Automatisiertes, skalierbares Webserver-Paket (automatisiertes Docker und nginx) – Heroku auf Steroiden.
- [Cloud 66](https://www.cloud66.com) - :yen: Vollständig verwaltete Containerverwaltung als Full-Stack-Dienst.
- [Cloud Run Compose](https://docs.cloud.google.com/run/docs/deploy-run-compose) - :yen: `docker-compose.yaml`-Dateien direkt als verwalteten Dienst auf Google Cloud Run bereitstellen.
- [Convox Rack](https://github.com/convox/rack) - Convox Rack ist eine Open-Source-PaaS auf Basis professioneller Infrastrukturautomatisierung und bewährter DevOps-Praktiken.
- [docker-to-iac](https://github.com/deploystackio/docker-to-iac) - docker run und commit in Infrastructure-as-Code-Vorlagen für AWS, Render.com und DigitalOcean umwandeln.
- [doco-cd](https://github.com/kimdre/doco-cd) - Leichtgewichtiges GitOps- und Continuous-Deployment-Werkzeug zur Bereitstellung von Docker-Compose-Projekten und Swarm-Stacks per Polling und Webhooks.
- [Dokku](https://github.com/dokku/dokku) - Ein von Docker unterstütztes Mini-Heroku zum Erstellen von Anwendungen und Verwalten ihres Lebenszyklus.
- [Exoframe](https://github.com/exoframejs/exoframe) - Ein selbst gehostetes Werkzeug, das einfache Bereitstellungen mit nur einem Befehl und Docker ermöglicht.
- [Giant Swarm](https://www.giantswarm.io/) - :yen: Einfache Microservice-Infrastruktur. Container in Sekunden bereitstellen.
- [Google Container Engine](https://docs.cloud.google.com/kubernetes-engine/docs) - :yen: Docker-Container auf Google Cloud, unterstützt von [Kubernetes][kubernetes].
- [Grafeas](https://github.com/grafeas/grafeas) - Eine gemeinsame API für Metadaten zu Containern, von Image- und Build-Details bis hin zu Sicherheitslücken.
- [Mesosphere DC/OS Platform](https://d2iq.com/products/dcos) - :yen: Integrierte Plattform für Daten und Container auf Basis von Apache Mesos.
- [OpenRun](https://github.com/openrundev/openrun) - Webanwendungen mit Docker oder Kubernetes erstellen, bereitstellen, per Proxy vermitteln, authentifizieren und automatisch pausieren.
- [OpenShift][openshift] - Eine Open-Source-PaaS auf Basis von [Kubernetes][kubernetes], optimiert für die Entwicklung und Bereitstellung Docker-basierter Anwendungen von [Red Hat](https://www.redhat.com/en).
- [Red Hat OpenShift Dedicated](https://www.redhat.com/en/technologies/cloud-computing/openshift/dedicated) - :yen: Vollständig verwalteter Red Hat®-OpenShift®-Dienst auf Amazon Web Services und Google Cloud.
- [swarm-ansible](https://github.com/LombardiDaniel/swarm-ansible?tab=readme-ov-file) - Swarm-Ansible richtet mit Ansible einen produktionsreifen Swarm-Cluster ein. Enthält Werkzeuge zur CI-Automatisierung, Unterstützung für die Überwachung sowie vorab für SSL-Zertifikate und einfache Authentifizierung konfiguriertes Traefik. Eine private Registry und mehr sind ebenfalls enthalten!
- [SwarmManagement](https://github.com/hansehe/SwarmManagement) - Swarm Management ist eine mit pip installierbare Python-Anwendung. Sie erleichtert die Verwaltung eines Docker Swarm, indem eine einzelne YAML-Datei festlegt, welche Stacks bereitgestellt und welche Netzwerke, Konfigurationen oder Secrets erstellt werden sollen.
- [Triton](https://www.joyent.com/) - :yen: Elastische, container-native Infrastruktur.
- [Tsuru](https://github.com/tsuru/tsuru) - Tsuru ist eine erweiterbare Open-Source-Platform-as-a-Service-Software.
- [werf](https://github.com/werf/werf) - Werf ist ein CI/CD-Werkzeug zum effizienten Erstellen von Docker-Images und deren GitOps-basierter Bereitstellung auf Kubernetes.

### Bereinigung nicht verwendeter Ressourcen

- [docker-custodian](https://github.com/Yelp/docker-custodian) - Docker-Hosts aufgeräumt halten.
- [Docuum](https://github.com/stepchowfun/docuum) - Docker-Images nach dem LRU-Prinzip (Least Recently Used) entfernen.

## Netzwerke und Proxys

### Netzwerke

Container-Netzwerke, Overlay-Netzwerke und DNS-/Service-Discovery-Brücken.

- [Calico][calico] - Calico ist ein virtuelles Netzwerk auf reiner Layer-3-Ebene, über das Container auf mehreren Docker-Hosts miteinander kommunizieren können.
- [docker-dns](https://github.com/bytesharky/docker-dns) - Leichtgewichtiger DNS-Forwarder für Docker-Container, der Containernamen mit benutzerdefinierten Suffixen (z. B. `.docker`) auf dem Host auflöst und so die Service-Erkennung vereinfacht.
- [Flannel](https://github.com/coreos/flannel/) - Flannel ist ein virtuelles Netzwerk, das jedem Host ein für Container-Laufzeiten nutzbares Subnetz zuweist.
- [netshoot](https://github.com/nicolaka/netshoot) - Der netshoot-Container enthält eine leistungsfähige Sammlung von Netzwerkwerkzeugen zur Fehlerbehebung bei Docker-Netzwerkproblemen.
- [Pipework](https://github.com/jpetazzo/pipework) - Softwaredefinierte Netzwerktechnik für Linux-Container. Pipework funktioniert mit herkömmlichen LXC-Containern und mit Docker.
- [registrator](https://github.com/gliderlabs/registrator) - Service-Registry-Brücke für Docker.

### Reverse-Proxy

Containerbewusste Reverse-Proxys, Ingress und TLS-terminierende Frontends mit automatischer Erkennung.

- [BunkerWeb](https://github.com/bunkerity/bunkerweb) - Open-Source-Webanwendungsfirewall (WAF) der nächsten Generation.
- [caddy-docker-proxy](https://github.com/lucaslorentz/caddy-docker-proxy) - Caddy-basierter Reverse-Proxy, konfiguriert über Dienst- oder Container-Labels.
- [caddy-docker-upstreams](https://github.com/invzhi/caddy-docker-upstreams) - Docker-Upstreams-Modul für Caddy, konfiguriert über Container-Labels.
- [Docker Dnsmasq Updater](https://github.com/moonbuggy/docker-dnsmasq-updater) - Einen entfernten dnsmasq-Server mit Hostnamen von Docker-Containern aktualisieren.
- [docker-flow-proxy](https://github.com/docker-flow/docker-flow-proxy) - Konfiguriert den Proxy bei jeder Bereitstellung eines neuen Dienstes oder bei einer Skalierung neu.
- [Let's Encrypt Nginx-proxy Companion](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) - Leichtgewichtiger Begleitcontainer für nginx-proxy. Ermöglicht die automatische Erstellung und Erneuerung von Let’s-Encrypt-Zertifikaten.
- [mesh-router](https://github.com/Yundera/mesh-router) - Anbieter kostenloser Domains (nsl.sh) für Docker-Container mit automatischem HTTPS-Routing. Nutzt WireGuard-VPN, um Subdomain-Anfragen sicher über Netzwerke hinweg weiterzuleiten. Ideal für selbst gehostete NAS- und Cloud-Bereitstellungen.
- [Nginx Proxy Manager](https://github.com/jc21/nginx-proxy-manager) - Eine ansprechende Weboberfläche zur Weiterleitung webbasierter Dienste mit SSL.
- [nginx-proxy][nginxproxy] - Automatisierter nginx-Proxy für Docker-Container mit docker-gen.
- [OpenResty Manager](https://github.com/Safe3/openresty-manager) - Der einfachste, leistungsstarke und benutzerfreundliche OpenResty Manager (verbesserte Nginx-Version), eine Open-Source-Alternative zu OpenResty Edge.
- [Swarm Router](https://github.com/flavioaiello/swarm-router) - Ein Router für den Docker-Swarm-Modus, der ohne Konfiguration anhand von Dienstnamen arbeitet und einen neuen, sichereren Ansatz verfolgt.
- [Træfɪk](https://github.com/containous/traefik) - Automatischer Reverse-Proxy und Load-Balancer für Docker, Mesos, Consul und Etcd.

## Speicher und Daten

- [Docker Volume Backup](https://github.com/offen/docker-volume-backup) Docker-Volumes lokal oder in beliebigem S3-kompatiblem Speicher sichern.
- [Label Backup](https://github.com/resulgg/label-backup) - Ein leichtgewichtiger, Docker-bewusster Backup-Agent, der containerisierte Datenbanken (PostgreSQL, MySQL, MongoDB, Redis) anhand von Docker-Labels automatisch erkennt und sichert. Unterstützt lokalen Speicher und S3-kompatible Ziele mit flexibler Planung über Cron-Ausdrücke.
- [Netshare](https://github.com/ContainX/docker-volume-netshare) Docker-NFS-, AWS-EFS-, Ceph- und Samba/CIFS-Volume-Plugin.
- [portworx](https://portworx.com) - :yen: Dezentrale Speicherlösung für persistente, gemeinsam genutzte und replizierte Volumes.
- [quobyte](https://www.quobyte.com/) - :yen: Vollständig fehlertolerantes verteiltes Dateisystem mit Docker-Volume-Treiber.
- [resq](https://github.com/mashb1t/resq) - Restic-gestützte Docker-Backups von Volumes, Datenbanken und .env-Dateien, mit oder ohne angehaltene Container. Funktioniert mit lokalem Speicher, SSH und beliebigem S3-kompatiblem Speicher.
- [REX-Ray](https://github.com/rexray/rexray) stellt eine herstellerunabhängige Speicher-Orchestrierungs-Engine bereit. Das Hauptziel ist die Bereitstellung persistenten Speichers für Docker, Kubernetes und Mesos.

## Beobachtbarkeit

Docker-Hosts, Container und darin ausgeführte Dienste überwachen. Selbst gehostete Lösungen und SaaS-Angebote gemeinsam; kommerzielle Einträge sind mit `:yen:` gekennzeichnet.

- [ADRG](https://github.com/jaldertech/adrg) - Dynamischer Docker-Ressourcenregler, der cgroups v2 zur Steuerung der Systemlast nutzt.
- [AppDynamics](https://github.com/Appdynamics/docker-monitoring-extension) - :yen: Die Docker-Monitoring-Erweiterung erfasst Metriken über die Docker Remote API, entweder über Unix-Socket oder TCP.
- [Autoheal](https://github.com/willfarrell/docker-autoheal) - Überwacht Docker-Container und startet fehlerhafte Container automatisch neu.
- [Better Stack](https://betterstack.com/community/guides/scaling-docker/) - :yen: Ein Docker-kompatibler Observability-Stack mit Log-Aggregation und Uptime-Überwachung für containerisierte Apps.
- [cAdvisor](https://github.com/google/cadvisor) - Analysiert Ressourcennutzung und Leistungsmerkmale laufender Container.
- [Datadog](https://www.datadoghq.com/) - :yen: Full-Stack-Monitoring-Dienst mit erstklassiger Docker-, Kubernetes- und Mesos-Unterstützung.
- [DLIA](https://github.com/zorak1103/dlia) - DLIA ist ein KI-gestützter Agent zur Überwachung von Docker-Protokollen. Er nutzt Large Language Models (LLMs), um Container-Logs intelligent zu analysieren, Anomalien zu erkennen und im Zeitverlauf kontextbezogene Einblicke zu liefern.
- [docker-exporter](https://github.com/dlepaux/docker-exporter) - Leichtgewichtiger Prometheus-Exporter für Docker-Container-Metriken, geschrieben in Rust. Korrekte cgroup-v2-Speicher-Working-Set-Werte auf ARM64 (Raspberry Pi 5); läuft ohne Root-Rechte und mit schreibgeschütztem Socket, etwa 7 MiB RAM im Leerlauf.
- [Docker-Sentinel](https://github.com/Will-Luck/Docker-Sentinel) - Automatische Container-Aktualisierungen mit Richtlinien pro Container, sicherem Rollback und Echtzeit-Web-Dashboard.
- [DockProbe](https://github.com/deep-on/dockprobe) - Leichtgewichtiges Docker-Monitoring-Dashboard in einem einzelnen Container. Echtzeit-Metriken, 6 Regeln zur Anomalieerkennung, Telegram-Benachrichtigungen und 16 automatisierte Sicherheitsprüfungen. Keine Konfiguration erforderlich, etwa 50 MB RAM.
- [DockProc](https://gitlab.com/n0r1sk/dockproc) - I/O-Überwachung für Container auf Prozessebene.
- [dockprom](https://github.com/stefanprodan/dockprom) - Überwachung von Docker-Hosts und -Containern mit Prometheus, Grafana, cAdvisor, NodeExporter und AlertManager.
- [Doku](https://github.com/amerkurev/doku) - Doku ist eine einfache webbasierte Anwendung zur Überwachung der Docker-Datenträgernutzung.
- [Dozzle](dozzle) - Container-Logs in Echtzeit über einen Browser oder ein Mobilgerät überwachen.
- [Drydock](https://github.com/CodesWhat/drydock) - Überwachung von Container-Aktualisierungen mit Web-Dashboard, 23 Registry-Anbietern, 20 Benachrichtigungsauslösern und verteilter Agentenarchitektur.
- [Dynatrace](https://docs.dynatrace.com/docs/observe/infrastructure-observability/container-platform-monitoring) - :yen: Containerisierte Anwendungen überwachen, ohne Agents zu installieren oder Run-Befehle zu ändern.
- [Grafana Docker Dashboard Template](https://grafana.com/grafana/dashboards/179-docker-prometheus-monitoring/) - Vorlage für einen Docker-, Grafana- und Prometheus-Stack.
- [InfraCanvas](https://github.com/bytestrix/InfraCanvas) - Live-Visualisierung von Containern, Pods, Volumes und Netzwerken auf jedem Linux-Server. Einzelne Binärdatei mit WebSocket-gestützten Live-Aktualisierungen.
- [Maintenant](https://github.com/kolapsis/maintenant) - Selbstentdeckendes Infrastruktur-Monitoring für Docker und Kubernetes. Erkennt Container automatisch anhand von Labels und bietet Endpunktüberwachung, Heartbeats, TLS-Zertifikate, Ressourcenmetriken, Aktualisierungsinformationen und eine integrierte Statusseite. Einzelne Binärdatei mit eingebettetem SPA.
- [Middleware](https://middleware.io/) - :yen: Docker-Hosts, Container, Logs und Anwendungsleistung über eine einheitliche Observability-Plattform überwachen.
- [Site24x7](https://www.site24x7.com/docker-monitoring.html) - :yen: Docker-Monitoring für DevOps und IT im SaaS-Modell mit nutzungsabhängiger Abrechnung pro Host.
- [Sysdig Monitor](https://www.sysdig.com/products/monitor) - :yen: Software oder SaaS-Dienst zur Überwachung, Alarmierung und Fehlerbehebung bei Containern anhand von Systemaufrufen; mit Docker- und Kubernetes-spezifischen Funktionen.
- [Wiremap](https://github.com/codeofmario/wiremap) - Selbst gehostetes Werkzeug zur visuellen Erkundung der Docker-Netzwerktopologie mit Live-Log-Streaming, Echtzeitstatistiken, integriertem Terminal und Containerprüfung.

## Sicherheit

Härtung von Containern, Laufzeitsicherheit, Richtlinien, Compliance und Forensik. Selbst gehostete und kommerzielle Lösungen gemeinsam; kommerzielle Einträge sind mit `:yen:` gekennzeichnet.

- [Aqua Security](https://www.aquasec.com) - :yen: Containerbasierte Anwendungen von der Entwicklung bis zur Produktion auf jeder Plattform absichern.
- [buildcage](https://github.com/dash14/buildcage) - Beschränkt während Docker-Builds den ausgehenden Netzwerkzugriff, um Angriffe auf die Lieferkette zu verhindern. Funktioniert als direkter BuildKit-Remote-Treiber für Docker Buildx und bietet sofort einsatzbereite GitHub Actions.
- [CetusGuard](https://github.com/hectorm/cetusguard) - CetusGuard schützt den Docker-Daemon-Socket, indem Aufrufe an dessen API-Endpunkte gefiltert werden.
- [Checkov](https://github.com/bridgecrewio/checkov) - Statische Analyse von Infrastructure-as-Code-Manifesten (Terraform, Kubernetes, CloudFormation, Helm, Dockerfile, Kustomize), um Sicherheitsfehlkonfigurationen zu finden und zu beheben.
- [compose-lint](https://github.com/tmatens/compose-lint) - Prüft Docker-Compose-Dateien auf Sicherheitsfehlkonfigurationen – privilegierte Container, nicht fixierte Images, Docker-Socket-Mounts und Klartext-Zugangsdaten – auf Grundlage von OWASP und dem CIS Docker Benchmark.
- [container-explorer](https://github.com/google/container-explorer) - Forensisches Werkzeug zur Untersuchung von Docker- und containerd-Containerdetails aus eingebundenen Festplatten-Images.
- [Deepfence Threat Mapper](https://github.com/deepfence/ThreatMapper) - Leistungsstarker Laufzeit-Schwachstellenscanner für Kubernetes, virtuelle Maschinen und Serverless-Umgebungen.
- [Den](https://github.com/us/den) - Selbst gehostete Sandbox-Laufzeit für KI-Agenten mit Docker-Containern, Sicherheitshärtung, REST-API und WebSocket-Unterstützung.
- [docker-bench-security](https://github.com/docker/docker-bench-security) - Skript zur Prüfung Dutzender gängiger Best Practices für den produktiven Einsatz von Docker-Containern.
- [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy) - HAProxy-basierter, fein abgestufter Filter für den Docker-API-Socket; häufig eingesetzt, um Reverse-Proxys und Homelab-Stacks einen eingeschränkten Socket bereitzustellen.
- [KICS](https://github.com/checkmarx/kics) - Infrastructure-as-Code-Scanner, der Sicherheitslücken, Compliance-Probleme und Fehlkonfigurationen der Infrastruktur früh im Entwicklungszyklus findet. Lässt sich um zusätzliche Richtlinien erweitern.
- [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) - :yen: (zuvor Twistlock Security Suite) erkennt Schwachstellen, härtet Container-Images und setzt Sicherheitsrichtlinien über den gesamten Anwendungslebenszyklus hinweg durch.
- [segspec](https://github.com/dormstern/segspec) - Extrahiert Netzwerkabhängigkeiten aus Docker-Compose-Dateien, Kubernetes-Manifesten, Helm-Charts und anderen Konfigurationsdateien, um Kubernetes NetworkPolicies mit nachvollziehbaren Belegen zu erstellen.
- [Sysdig Falco](https://github.com/falcosecurity/falco) - Sysdig Falco ist ein Open-Source-Sicherheitsmonitor für Container. Er kann Aktivitäten in Anwendungen, Containern, Hosts und Netzwerken überwachen und bei nicht autorisierten Aktivitäten Alarm auslösen.
- [Sysdig Secure](https://www.sysdig.com/solutions/cloud-detection-and-response-cdr) - :yen: Sysdig Secure schützt zur Laufzeit durch Verhaltensüberwachung und -abwehr und bietet für die Reaktion auf Vorfälle detaillierte Forensik auf Basis des Open-Source-Projekts Sysdig.
- [Trend Micro DeepSecurity](https://www.trendmicro.com/en_us/business/products/hybrid-cloud/deep-security.html) - :yen: Trend Micro DeepSecurity bietet Laufzeitschutz für Container-Workloads und Hosts sowie Scans vor der Laufzeit, um Schwachstellen, Malware und Inhalte wie fest codierte Secrets zu erkennen.

## Benutzeroberflächen

### Desktop

Native Desktop-Anwendungen zur Verwaltung und Überwachung von Docker-Hosts und -Clustern.

- [Docker DB Manager](https://github.com/AbianS/docker-db-manager) - Desktop-Anwendung zur Verwaltung von Docker-Datenbankcontainern mit visueller Oberfläche und Ein-Klick-Aktionen.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - Offizielle native Anwendung. Nur für Windows und macOS.
- [Gantry (Desktop)](https://github.com/getgantry/gantry) - Native macOS-App (SwiftUI, kein Electron) zur Verwaltung und Überwachung lokaler und per SSH erreichbarer Docker-Hosts: Fleet-Dashboard, Live-Logs und -Statistiken, Exec-Terminal, Dateibrowser sowie integrierter MCP-Server für KI-Agenten.
- [Simple Docker UI](https://github.com/felixgborrego/simple-docker-ui) - Basiert auf Electron.
- [Stevedore](https://github.com/slonopotamus/stevedore) - Guter Ersatz für Docker Desktop unter Windows. Unterstützt sowohl Linux- als auch Windows-Container. [slonopotamus](https://github.com/slonopotamus).

### Terminal

TUIs, CLI-Werkzeuge und Shell-Integrationen für Docker.

- [bosun](https://github.com/psychedelicdevx/bosun) - Tastaturgesteuerte Terminal-Oberfläche für Docker mit Gruppierung von Compose-Projekten, Live-Logs, Statistiken und Shell-Zugriff.
- [d4s](https://github.com/jr-k/d4s) - Schnelle, tastaturgesteuerte Terminal-Oberfläche zur Verwaltung von Docker-Containern, Compose-Stacks und Swarm-Diensten mit der Ergonomie von K9s.
- [dcinja](https://github.com/Falldog/dcinja) - Leistungsstarke Template-Engine mit besonders kleiner Binärdatei für die Docker-Kommandozeilenumgebung.
- [dctl](https://github.com/FabienD/docker-stack) - Dctl ist ein CLI-Werkzeug, mit dem Entwickler überall im Terminal sämtliche Docker-Compose-Befehle und mehr ausführen können.
- [decompose](https://github.com/s0rg/decompose) - Werkzeug zum Reverse Engineering von Docker-Umgebungen.
- [dive](https://github.com/wagoodman/dive) - Werkzeug zur Untersuchung jeder einzelnen Ebene eines Docker-Images.
- [docker pushrm](https://github.com/christian-korneck/docker-pushrm) - Docker-CLI-Plugin, mit dem sich die README.md-Datei aus dem aktuellen Verzeichnis zu Docker Hub pushen lässt. Unterstützt auch Quay und Harbor.
- [docker-captain](https://github.com/lucabello/docker-captain) - Benutzerfreundliche CLI zur stilvollen Verwaltung mehrerer Docker-Compose-Bereitstellungen – mit Typer, Rich, questionary und sh.
- [dockerfile-mode](https://github.com/spotify/dockerfile-mode) - Ein Emacs-Modus für die Arbeit mit Dockerfiles.
- [dockerfilegraph](https://github.com/patrickhoefler/dockerfilegraph) - Multi-Stage-Dockerfiles visualisieren.
- [dockly](https://github.com/lirantal/dockly) - Interaktive Shell-Oberfläche zur Verwaltung von Docker-Containern.
- [DockMate](https://github.com/shubh-io/dockmate) - Leichtgewichtiger, terminalbasierter Manager für Docker und Podman mit textbasierter Benutzeroberfläche.
- [DockSTARTer](https://github.com/GhostWriters/DockSTARTer) - DockSTARTer hilft dir beim Einstieg in Home-Server-Apps, die in Docker laufen.
- [DockTUI](https://github.com/strmax195-hue/docktui) - Schnelles Terminal-Dashboard ohne Abhängigkeiten für Docker und Compose.
- [dockup](https://github.com/paulo-amaral/dockup) - TUI zum Installieren, Härten und Warten von Container-Laufzeiten: Docker Engine und Compose v2, NVIDIA Container Toolkit, Podman und Apple container; mit CIS-inspiriertem Sicherheitsaudit.
- [dprs](https://github.com/durableprogramming/dprs) - Entwicklerorientierte TUI zur Verwaltung von Docker-Containern mit Echtzeit-Log-Streaming und Containerverwaltung.
- [dry](https://github.com/moncho/dry) - Interaktive CLI für Docker-Container.
- [easydocker](https://github.com/joao-zanutto/easydocker) - Eine Terminal-Oberfläche, stark von K9s inspiriert, mit ansprechender BubbleTea-Grafik.
- [goManageDocker](https://github.com/ajayd-san/gomanagedocker) - TUI-Werkzeug zur blitzschnellen Anzeige und Verwaltung von Docker-Objekten mit sinnvollen Tastenkürzeln und integrierter Vim-Navigation.
- [layerx](https://github.com/deveshctl/layerx) - Container-Image-Layer in einer TUI untersuchen – Dateisystemunterschiede durchstöbern, Dateiinhalte direkt anzeigen, nach Größe sortieren, einzelne Dateien extrahieren und CI anhand von Effizienzgrenzwerten steuern. Unterstützt Docker, Podman und OCI-Archive.
- [lazydocker](https://github.com/jesseduffield/lazydocker) - Die bequemste Art, alles rund um Docker zu verwalten. Eine einfache Terminal-Oberfläche für Docker und Docker Compose, geschrieben in Go mit der gocui-Bibliothek.
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - Oberfläche zum Lesen und Filtern der Logs von Docker- und Podman-Containern – wie [Dozzle](dozzle), aber im Terminal, mit Fuzzy-Suche, Regex und farbiger Ausgabe.
- [oxker](https://github.com/mrjackwills/oxker) - Eine einfache TUI zum Anzeigen und Steuern von Docker-Containern.
- [proco](https://github.com/shiwaforce/poco) - Proco hilft dir, Docker-, Docker-Compose- und Kubernetes-Projekte jeder Komplexität mithilfe einfacher YAML-Konfigurationsdateien zu organisieren und zu verwalten. So verkürzt sich der Weg von der Projektauswahl bis zur Initialisierung in deiner lokalen Umgebung.
- [scuba](https://github.com/JonathonReinhart/scuba) - Docker-Container transparent zur Kapselung von Software-Build-Umgebungen verwenden.
- [supdock](https://github.com/segersniels/supdock) - Ermöglicht eine etwas visuellere Docker-Nutzung über eine interaktive Eingabeaufforderung.
- [swarmcli](https://github.com/Eldara-Tech/swarmcli) - Swarm-Verwaltung in Gedankenschnelle – mit Echtzeit-Log-Streaming, sofortigem Shell-Zugriff auf Container, nahtloser Portweiterleitung und bedarfsgesteuerter Anzeige von Secrets. So behältst du die volle Kontrolle über deinen Docker Swarm, ohne aus dem Arbeitsfluss zu geraten.
- [tdocker](https://github.com/pivovarit/tdocker) - Ersatz für `docker ps` für alltägliche Container-Aufgaben.
- [wharf](https://github.com/idesyatov/wharf) - Eine von k9s inspirierte TUI für Docker Compose mit Vim-artiger Navigation, Echtzeit-CPU-/Speicherüberwachung per Braille-Diagrammen, Container-Dateibrowser, Unterstützung für entfernte SSH-Hosts und Befehlsmodus.

### Web

- [Arcane](https://github.com/getarcaneapp/arcane) - Eine einfache und moderne Docker-Verwaltungsplattform für alle.
- [CASA](https://github.com/knrdl/casa) - Die Verwaltung einer Handvoll Container an Kolleginnen und Kollegen abgeben.
- [Container Web TTY](https://github.com/wrfly/container-web-tty) - Über ein Web-TTY eine Verbindung zu deinen Containern herstellen.
- [Docker Commander](https://github.com/koduj-dev/docker-commander) - Selbst gehostete Oberfläche zur Verwaltung und Überwachung von Docker mit Unterstützung mehrerer Hosts, Compose-Verwaltung, aggregierten Logs, Alarmen, RBAC, Schwachstellenprüfung und MCP-Integration.
- [Docker Registry Browser](https://github.com/klausmeyer/docker-registry-browser) - Weboberfläche für die Docker Registry HTTP API v2.
- [docker-swarm-visualizer](https://github.com/dockersamples/docker-swarm-visualizer) - Visualisiert Docker-Dienste in einem Docker Swarm (für Demo-Ausführungen).
- [dockge](https://github.com/louislam/dockge) - Einfach zu bedienender, reaktiver Manager für selbst gehostete Docker-Compose-Stacks.
- [DockScope](https://github.com/ManuelR-T/dockscope) - Visualisiert Docker-Container in einem 3D-Abhängigkeitsgraphen mit Live-Metriken, Logs und integriertem Browser-Terminal.
- [Komodo](https://github.com/mbecker20/komodo) - Ein Werkzeug zum Erstellen und Bereitstellen von Software auf zahlreichen Servern.
- [Portainer](https://github.com/portainer/portainer) - Eine leichtgewichtige Verwaltungsoberfläche für Docker-Hosts oder Docker-Swarm-Cluster.
- [Swarmpit](https://github.com/swarmpit/swarmpit) - Swarmpit bietet eine einfache und benutzerfreundliche Oberfläche für Docker-Swarm-Cluster. Verwalte Stacks, Dienste, Secrets, Volumes, Netzwerke usw.
- [usulnet](https://github.com/fr4nsys/usulnet) - Eine vollständige und moderne Docker-Verwaltungsplattform für Systemadministration und DevOps mit Werkzeugen auf Enterprise-Niveau, CVE-Scanner, SSH, RDP im Web und vielem mehr.

### IDE-Integrationen

- JetBrains-IDEs (IntelliJ IDEA, GoLand, WebStorm, CLion usw.) verfügen über ein [integriertes Docker-Plugin](https://www.jetbrains.com/help/idea/docker.html#managing-images).
- Eclipse-[Docker-Tooling-Plugin](https://www.eclipse.org/community/eclipse_newsletter/2016/july/article2.php)
- [docker.el](https://github.com/Silex/docker.el) Docker über Emacs verwalten.

## Entwicklungsablauf

### API-Client

- [contajners](https://github.com/lispyclouds/contajners) - Ein idiomatischer, datengesteuerter und REPL-freundlicher Clojure-Client für OCI-Container-Engines.
- [Docker Client for JVM](https://github.com/gesellix/docker-client) - Client-Bibliothek für die Docker Remote API auf der JVM, geschrieben in Groovy.
- [Docker Client TypeScript](https://gitlab.com/masaeedu/docker-client) - Docker-API-Client für JavaScript, automatisch aus der Swagger-API-Definition des Moby-Repositorys generiert.
- [docker-controller-bot](https://github.com/dgongut/docker-controller-bot) - Telegram-Bot zur Steuerung von Docker-Containern.
- [docker-maven-plugin](https://github.com/fabric8io/docker-maven-plugin) - Maven-Plugin zum Ausführen und Erstellen von Docker-Images.
- [Docker.DotNet](https://github.com/Microsoft/Docker.DotNet) - C#/.NET-HTTP-Client für die Docker Remote API.
- [Docker.Registry.DotNet](https://github.com/ChangemakerStudios/Docker.Registry.DotNet) - .NET-(C#)-Clientbibliothek für die Docker Registry API (v2).
- [dockerode](https://github.com/apocas/dockerode) - Node.js-Modul für die Docker Remote API.
- [go-dockerclient](https://github.com/fsouza/go-dockerclient/) - Go-HTTP-Client für die Docker Remote API.
- [Gradle Docker plugin](https://github.com/gesellix/gradle-docker-plugin) - Docker-Remote-API-Plugin für Gradle.
- [Portainer stack utils](https://github.com/greenled/portainer-stack-utils) - Bash-Skript zum Bereitstellen, Aktualisieren und Entfernen von Docker-Stacks in einer Portainer-Instanz anhand einer docker-compose-YAML-Datei.
- [sbt-docker](https://github.com/marcuslonnberg/sbt-docker) - Docker-Images direkt aus sbt erstellen.

### CI/CD

Selbst gehostete CI-Engines, Build-Beschleuniger und gehostete Dienste für Docker-Workflows. Kommerzielle Einträge sind mit `:yen:` gekennzeichnet.

- [Buddy](https://buddy.works) - :yen: Die besten Git-, Build- und Bereitstellungswerkzeuge in einem leistungsstarken Tool vereint, das die Entwicklung beschleunigt.
- [Captain](https://github.com/harbur/captain) - Den Git-Workflow in Docker-Container für Continuous Delivery umwandeln.
- [CircleCI](https://circleci.com/) - :yen: Docker-Images aus der Build-Umgebung pushen oder abrufen sowie Container direkt auf CircleCI erstellen und ausführen.
- [CodeFresh](https://octopus.com/codefresh) - :yen: Durchgängiges Erstellen, Testen und Teilen von Docker-Anwendungen mit automatisierten Tests.
- [ConcourseCI](https://concourse-ci.org) - :yen: Auf Pipelines ausgerichtete CI-SaaS-Plattform für DevOps-Teams.
- [Defang](https://github.com/DefangLabs/defang) - Docker Compose in wenigen Minuten in deiner bevorzugten Cloud bereitstellen.
- [Depot](https://depot.dev) - :yen: Docker-Images schnell in der Cloud erstellen. Blitzschnelle Rechenleistung, intelligentes automatisches Caching und keine Konfiguration.
- [Diun](https://github.com/crazy-max/diun) - Benachrichtigungen erhalten, wenn ein Image oder Repository in einer Docker-Registry aktualisiert wird.
- [dockcheck](https://github.com/mag37/dockcheck) - Skript zur Prüfung auf Aktualisierungen von Docker-Images ohne vorherigen Pull; ausgewählte oder alle Container werden anschließend automatisch aktualisiert. Mit Benachrichtigungen, Bereinigung und mehr.
- [Docker plugin for Jenkins](https://github.com/jenkinsci/docker-plugin/) - Ziel des Docker-Plugins ist es, einen Docker-Host zur dynamischen Bereitstellung eines Build-Agents zu verwenden, einen einzelnen Build auszuführen und den Agent anschließend wieder zu entfernen.
- [Drone](https://github.com/drone/drone) - Auf Docker basierender CI-Server, konfiguriert mit YAML-Dateien.
- [Gantry](https://github.com/shizunge/gantry) - Ausgewählte Docker-Swarm-Dienste automatisch aktualisieren.
- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) - GitLab bietet integrierte CI zum Testen, Erstellen und Bereitstellen deines Codes mithilfe von GitLab Runnern.
- [Jaypore CI](https://github.com/theSage21/jaypore_ci) - Einfaches, sehr flexibles und leistungsstarkes CI/CD- und Automatisierungssystem, konfiguriert in Python. Offlinefähig und lokal ausgerichtet.
- [Kraken CI](https://github.com/Kraken-CI/kraken) - Modernes, skalierbares Open-Source-CI/CD-System für den lokalen Betrieb mit Schwerpunkt auf Tests. Einer der Executor ist Docker.
- [Screwdriver](https://screwdriver.cd/) - :yen: Open-Source-Build-Plattform von Yahoo!, konzipiert für Continuous Delivery.
- [Self Hosted Runner](https://github.com/youssefbrr/self-hosted-runner) - Dockerisierte Lösung zum Einrichten eines selbst gehosteten GitHub-Actions-Runners mit Unterstützung für Linux, macOS und Windows.
- [Semaphore CI](https://semaphore.io/) - :yen: Leistungsstarke Cloud-CI, die Container erstellt, testet und in der Produktion ausliefert.
- [Skipper](https://github.com/Stratoscale/skipper) - Dein Git-Repository ganz einfach dockerisieren.
- [Tekton CD](https://tekton.dev/) - Cloud-native Pipeline-Ressource.
- [TravisCI](https://www.travis-ci.com/) - :yen: Gehostete CI für GitHub-Projekte mit Docker-Unterstützung.

### Entwicklungsumgebung

- [coder](https://github.com/coder/coder) - Remote-Entwicklungsmaschinen auf Basis von Terraform oder Docker.
- [dde](https://github.com/whatwedo/dde) - Werkzeugset für lokale Entwicklungsumgebungen auf Basis von Docker.
- [DIP](https://github.com/bibendi/dip) - CLI-Werkzeug zur einfachen Bereitstellung und Interaktion mit einer per docker-compose konfigurierten Anwendung.
- [EnvCLI](https://github.com/EnvCLI/EnvCLI) - Ersetzt lokal installierte Versionen von Node, Go usw. durch projektspezifische Docker-Container.
- [Gebug](https://github.com/moshebe/gebug) - Werkzeug, das das Debugging dockerisierter Go-Anwendungen durch nahtloses Aktivieren von Debugger- und Hot-Reload-Funktionen vereinfacht.
- [HarborPilot](https://github.com/potterwhite/HarborPilot) - Automatisierter Builder für Docker-Images mit mehreren Plattformen zur Embedded-Linux-Entwicklung (RK3588, RV1126, RK3568). Bietet dreistufige Konfigurationsvererbung, PORT_SLOT-basierte Portzuweisung und Ubuntu-Unterstützung für mehrere Versionen (20.04/22.04/24.04).
- [Lando](https://github.com/lando/lando) - Lando richtet sich an Entwickler, die schnell und unkompliziert die für ihre Projekte benötigten Dienste und Werkzeuge festlegen und starten möchten.
- [Laradock](https://github.com/laradock/laradock) - Vollständige PHP-Entwicklungsumgebung auf Docker-Basis mit Nginx/Apache, PHP, MySQL, Redis und mehr als austauschbaren Compose-Diensten.
- [uniget](https://github.com/uniget-org/cli) - Uni(versal)get, Installations- und Aktualisierungswerkzeug für Container-Tools und mehr (zuvor docker-setup).
- [Zsh-in-Docker](https://github.com/deluan/zsh-in-docker) - Installiert Zsh, Oh-My-Zsh und Plugins mit nur einer Zeile in einem Docker-Container.

### Serverlos

- [Apache OpenWhisk](https://github.com/apache/openwhisk) - Eine serverlose Open-Source-Cloudplattform, die Funktionen als Reaktion auf Ereignisse in jedem Maßstab ausführt.
- [Koyeb](https://www.koyeb.com/) - :yen: Entwicklerfreundliche Serverless-Plattform zur globalen Bereitstellung von Apps. Docker-Container, Web-Apps und APIs mit Git-basierter Bereitstellung, nativer automatischer Skalierung, globalem Edge-Netzwerk sowie integriertem Service Mesh und Service Discovery nahtlos ausführen.
- [OpenFaaS](https://github.com/openfaas/faas) - Vollständiges Framework für serverlose Funktionen mit Docker und Kubernetes.

### Tests

- [Container Structure Test](https://github.com/GoogleContainerTools/container-structure-test) - Framework zur Validierung des Aufbaus eines Images anhand der Ausgaben von Befehlen oder des Dateisysteminhalts.
- [dgoss](https://github.com/goss-org/goss/tree/master/extras/dgoss) - Schnelles, YAML-basiertes Werkzeug zur Validierung von Docker-Containern.
- [Kurtosis](https://github.com/kurtosis-tech/kurtosis) - Zusammensetzbares Build-System für Testumgebungen mit mehreren Containern. Es bietet Entwicklern ein leistungsstarkes, Python-ähnliches SDK zur Umgebungskonfiguration, einen Compiler-Validator zum Überprüfen von Umgebungsverhalten und -einrichtung sowie eine Laufzeitumgebung zur Ausführung, Überwachung und Fehlerbehebung.
- [Pumba](https://github.com/alexei-led/pumba) - Chaos-Testwerkzeug für Docker. Kann in Kubernetes- und CoreOS-Clustern bereitgestellt werden.

### Wrapper

- [Hokusai](https://github.com/artsy/hokusai) - Docker- und Kubernetes-CLI für Anwendungsentwickler; dient dazu, Anwendungen zu containerisieren und ihren Lebenszyklus während Entwicklung, Tests und Veröffentlichungen zu verwalten. Von [artsy](https://github.com/artsy).
- [Preevy](https://github.com/livecycle/preevy) - Vorschauumgebungen für Docker- und Docker-Compose-Projekte. Teste Änderungen und hole Feedback von Entwicklerinnen, Entwicklern und anderen Beteiligten (Produkt/Design) ein, indem Pull Requests im Rahmen deiner CI-Pipeline bei deinem Cloud-Anbieter bereitgestellt werden.
- [subuser](https://github.com/subuser-security/subuser) - Ermöglicht die sichere und portable Ausführung grafischer Desktop-Anwendungen in Docker.
- [udocker](https://github.com/indigo-dc/udocker) - Werkzeug zum Ausführen einfacher Docker-Container in Batch- oder interaktiven Systemen ohne Root-Rechte.
- [Vagrant - Docker provider](https://developer.hashicorp.com/vagrant/docs/providers/docker/basics) - Ein guter Ausgangspunkt ist [vagrant-docker-example](https://github.com/bubenkoff/vagrant-docker-example).

## Werkzeuge im Container

Werkzeuge und Anwendungen, die entweder in Containern installiert oder als [Sidecar](https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar) ausgeführt werden sollen.

- [cdebug](https://github.com/iximiuz/cdebug) - Schweizer Taschenmesser zum Debuggen laufender Container über temporäre Sidecars; funktioniert mit Docker, containerd und Kubernetes.
- [ckron](https://github.com/nicomt/ckron) - Cron-ähnlicher Job-Scheduler für Docker.
- [CoreOS][coreos] - Linux für umfangreiche Serverbereitstellungen
- [docker-gen](https://github.com/jwilder/docker-gen) - Dateien aus Docker-Container-Metadaten generieren.
- [dockerize](https://github.com/powerman/dockerize) - Dienstprogramm zur Vereinfachung der Ausführung von Anwendungen in Docker-Containern.
- [GoSu](https://github.com/tianon/gosu) - Eine bestimmte Anwendung als bestimmter Benutzer ausführen und den Prozess anschließend beenden (Werkzeug für Entry-Point-Skripte).
- [is-docker](https://github.com/sindresorhus/is-docker) - Prüft, ob ein Prozess innerhalb eines Docker-Containers ausgeführt wird.
- [microcheck](https://github.com/tarampampam/microcheck) - Leichtgewichtige Health-Check-Werkzeuge für Docker-Container (75 KB statt 9,3 MB für httpcheck im Vergleich zu cURL), vollständig in C geschrieben – mit HTTP(S)- und Portprüfungen sowie paralleler Ausführung.
- [Ofelia](https://github.com/mcuadros/ofelia/) - Ofelia ist ein moderner Job-Scheduler mit geringem Ressourcenbedarf für Docker-Umgebungen, geschrieben in Go. Soll das altmodische cron ersetzen. Unterstützt die Konfiguration über Container-Labels und/oder Konfigurationsdateien.
- [su-exec](https://github.com/ncopa/su-exec) - Einfaches Werkzeug, das ein Programm mit anderen Berechtigungen ausführt. Das Programm wird direkt statt als Kindprozess gestartet, wie es bei su und sudo der Fall ist, und vermeidet so TTY- und Signalprobleme. Warum gosu neu erfinden? Es macht mehr oder weniger genau dasselbe, ist aber nur 10 KB statt 1,8 MB groß.
- [supercronic](https://github.com/aptible/supercronic) - Crontab-kompatibler Job-Runner, speziell für den Einsatz in Containern entwickelt.

# Lernressourcen

## Erste Schritte

- [Benefits of using Docker](https://semaphore.io/blog/docker-benefits) zur Entwicklung und Bereitstellung, mit einem praktischen Fahrplan für die Einführung.
- [Bootstrapping Microservices](https://www.manning.com/books/bootstrapping-microservices-with-docker-kubernetes-and-terraform) - Ein praktischer, projektbasierter Leitfaden zum Erstellen von Anwendungen mit Microservices. Beginnt mit dem Erstellen eines Docker-Images für einen einzelnen Microservice und dessen Veröffentlichung in einer privaten Container-Registry und endet mit der Bereitstellung einer vollständigen Microservices-Anwendung in einem produktiven Kubernetes-Cluster.
- [Docker Curriculum](https://github.com/prakhar1989/docker-curriculum): Ein umfassendes Tutorial für den Einstieg in Docker. Vermittelt die Nutzung von Docker und die Bereitstellung dockerisierter Apps auf AWS mit Elastic Beanstalk und Elastic Container Service.
- [Docker Documentation](https://docs.docker.com/): die offizielle Dokumentation.
- [Docker for beginners](https://github.com/groda/big_data/blob/master/docker_for_beginners.md): Ein Tutorial für Anfänger, die Docker-Grundlagen lernen möchten – von „Hello world!“ bis zu den ersten Schritten mit Containern, mit einfachen Erklärungen der zugrunde liegenden Konzepte.
- [Docker for novices](https://www.youtube.com/watch?v=xsjSadjKXns) Eine Einführung in Docker für Entwickler und Tester, die es noch nie verwendet haben. (Video 1 Std. 40 Min., aufgezeichnet auf der linux.conf.au 2019 in Christchurch, Neuseeland)
- [Docker katas](https://github.com/eficode-academy/docker-katas) Eine Reihe von Übungen, die dich von „Hello Docker“ bis zur Bereitstellung einer containerisierten Webanwendung auf einem Server führen.
- [Docker simplified in 55 seconds](https://www.youtube.com/watch?v=vP_4DlOH1G4): Animierte Einführung in Docker auf hohem Niveau. Eine visuelle Kurzfassung, die den Einstieg in anspruchsvollere Lernmaterialien erleichtert.
- [Docker Training](https://training.mirantis.com) - :yen:
- [Dockerlings](https://github.com/furkan/dockerlings): Docker direkt im Terminal lernen – mit einer modernen TUI und kurzen Übungen.
- [Introduction à Docker](https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/) Ein eigener Abschnitt zum Erlernen von Docker auf einer französischen DevSecOps-Website: von den Grundlagen bis zu Best Practices, einschließlich Optimierung und Absicherung von Containern ...
- [Learn Docker](https://github.com/dwyl/learn-docker): Schritt-für-Schritt-Tutorial und weitere Ressourcen (Videos, Artikel, Spickzettel).
- [Learn Docker (Visually)](https://pagertree.com/learn/docker/overview) - Überblick für Einsteiger über die wichtigsten Komponenten von Docker und ihr Zusammenspiel. Mit vielen hochwertigen Abbildungen, Beispielen und Ressourcen.
- [Play With Docker](https://training.play-with-docker.com/): PWD eignet sich hervorragend als Einstieg in Docker – von Anfängern bis zu Fortgeschrittenen. Docker läuft direkt im Browser.
- [Practical Guide about Docker Commands in Spanish](https://github.com/brunocascio/docker-espanol) Dieser spanische Leitfaden erläutert grundlegende Docker-Befehle anhand praxisnaher Beispiele.
- [Setting Python Development Environment with VScode and Docker](https://github.com/RamiKrispin/vscode-python): Schritt-für-Schritt-Tutorial zum Einrichten einer dockerisierten Python-Entwicklungsumgebung mit VScode, Docker und der Dev-Container-Erweiterung.
- [The Docker Handbook](https://docker-handbook.farhan.dev/) Ein Open-Source-Buch, das die Grundlagen, Best Practices und einige fortgeschrittene Docker-Funktionen vermittelt. Das Buch ist unter [fhsinchy/the-docker-handbook](https://github.com/fhsinchy/the-docker-handbook) und die Projekte sind im Repository [fhsinchy/docker-handbook-projects](https://github.com/fhsinchy/docker-handbook-projects) zu finden.

**Spickzettel**

- [eon01](https://github.com/eon01/DockerCheatSheet)
- [dimonomid](https://github.com/dimonomid/docker-quick-ref) (PDF)
- [JensPiegsa](https://github.com/JensPiegsa/docker-cheat-sheet)
- [wsargent](https://github.com/wsargent/docker-cheat-sheet) (Am beliebtesten)

## Erste Schritte (Windows)

- [Docker on Windows behind a firewall](https://toedter.com/2015/05/11/docker-on-windows-behind-a-firewall/)
- [Docker Reference Architecture: Modernizing Traditional .NET Framework Applications](https://docs.mirantis.com/containers/v3.0/dockeree-ref-arch/app-dev/modernize-dotnet-apps.html) - Du lernst, welche .NET-Framework-Anwendungen sich für die Containerisierung eignen und wie der „Lift-and-Shift“-Ansatz funktioniert.
- [Docker with Microsoft SQL 2016 + ASP.NET](https://blog.alexellis.io/docker-does-sql2016-aspnet/) Demonstration der Ausführung von ASP.NET- und SQL-Server-Workloads in Docker
- [Exploring ASP.NET Core with Docker in both Linux and Windows Containers](https://www.hanselman.com/blog/exploring-aspnet-core-with-docker-in-both-linux-and-windows-containers) Ausführung von ASP.NET-Core-Anwendungen in Linux- und Windows-Containern mit [Docker for Windows][docker-for-windows]
- [Running a Legacy ASP.NET App in a Windows Container](https://blog.sixeyed.com/dockerizing-nerd-dinner-part-1-running-a-legacy-asp-net-app-in-a-windows-container/) Schritte zur Dockerisierung einer älteren ASP.NET-Anwendung und deren Ausführung als Windows-Container
- [Windows Containers and Docker: The 101](https://www.youtube.com/watch?v=N7SG2wEyQtM) - 20-minütiger Überblick zur Verwendung von Docker für PowerShell-, ASP.NET-Core- und ASP.NET-Anwendungen.
- [Windows Containers Quick Start](https://learn.microsoft.com/en-us/virtualization/windowscontainers/about/) Überblick über Windows-Container mit Verweisen auf Schnellstarts für Windows 10 und Windows Server 2016

---

## Bücher und Tutorials

- [Cloud Native Landscape](https://github.com/cncf/landscape)
- [Docker Blog](https://www.docker.com/blog/) - Regelmäßige Neuigkeiten zu Docker, der Community und den Werkzeugen.
- [Docker Certification](https://intellipaat.com/docker-training-course/?US) - :yen: Vermittelt Docker-Containerisierung, das Ausführen von Docker-Containern, Image-Erstellung, Dockerfile, Docker-Orchestrierung, Best Practices zur Sicherheit und mehr – anhand praktischer Projekte und Fallstudien; bereitet außerdem auf die Zertifizierung Docker Certified Associate vor.
- [Docker dev bookmarks](https://www.codever.dev/search?q=docker) - Verwende das Schlagwort [docker](https://www.codever.dev/bookmarks/t/docker).
- [Docker in Action, Second Edition](https://www.manning.com/books/docker-in-action-second-edition)
- [Docker in Practice, Second Edition](https://www.manning.com/books/docker-in-practice-second-edition)
- [Docker packaging guide for Python](https://pythonspeed.com/docker/) - Eine Reihe ausführlicher Artikel zu den Besonderheiten der Docker-Paketierung für Python.
- [Learn Docker in a Month of Lunches](https://www.manning.com/books/learn-docker-in-a-month-of-lunches)
- [Learn Docker](https://coursesity.com/blog/best-docker-tutorials/) - Eine kuratierte Liste der besten Online-Docker-Tutorials und -Kurse.
- [Programming Community Curated Resources for learning Docker](https://hackr.io/tutorials/learn-docker)

## Awesome-Listen

- [Awesome Compose](https://github.com/docker/awesome-compose) - Docker-Compose-Beispiele.
- [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes)
- [Awesome Linux Container](https://github.com/Friz-zy/awesome-linux-containers) allgemeiner zu Containern als dieses Repository.
- [Awesome Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) Liste freier Software für Netzwerkdienste und Webanwendungen, die lokal auf herkömmliche Weise (mit lokalem Webserver) oder in einem Docker-Container gehostet werden können.
- [Awesome Sysadmin](https://github.com/n1trux/awesome-sysadmin)
- [ToolsOfTheTrade](https://github.com/cjbarber/ToolsOfTheTrade) eine Liste von SaaS- und lokal installierbaren Anwendungen

## Demos und Beispiele

- [An Annotated Docker Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-docker-config-for-frontend-web-development) Eine lokale Entwicklungsumgebung mit Docker ermöglicht es, die benötigte DevOps-Konfiguration deines Projekts gebündelt bereitzustellen und den Einstieg reibungslos zu gestalten.
- [Local Docker DB](https://github.com/alexmacarthur/local-docker-db) eine Liste von docker-compose-Beispielen für zahlreiche Datenbanken
- [Webstack-micro](https://github.com/ferbs/webstack-micro) Demo-Web-App, die zeigt, wie Docker Compose als containerisierte Dienste ein API-Gateway, zentrale Authentifizierung, Hintergrund-Worker und WebSockets einrichten kann.

## Nützliche Tipps

- [Docker Caveats](https://docker-saigon.github.io/post/Docker-Caveats/) Was du über den produktiven Docker-Betrieb wissen solltest (verfasst am 11. APRIL 2016).
- [Docker Containers on the Desktop](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
- [Docker vs. VMs? Combining Both for Cloud Portability Nirvana](https://www.flexera.com/blog/finops/)
- [Don't Repeat Yourself with Anchors, Aliases and Extensions in Docker Compose Files](https://medium.com/@kinghuang/docker-compose-anchors-aliases-extensions-a1e4105d70bd)
- [GUI Apps with Docker](https://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/)

## Raspberry Pi und ARM

- [Docker Pirates ARMed with explosive stuff](https://blog.hypriot.com/) Umfangreiche Informationsquelle zu Clustering, Swarm und Docker sowie vorinstalliertes SD-Karten-Image für Raspberry Pi
- [Get Docker up and running on the RaspberryPi in three steps](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)
- [git push docker containers to linux devices](https://www.balena.io) Moderne DevOps für IoT auf Basis von Git und Docker.
- [Installing, running, using Docker on armhf (ARMv7) devices](https://github.com/umiddelb/armhf/wiki/Installing,-running,-using-docker-on-armhf-%28ARMv7%29-devices)

## Sicherheitsartikel

- [Bringing new security features to Docker](https://opensource.com/business/14/9/security-for-docker)
- [CVE Scanning Alpine images with Multi-stage builds in Docker 17.05](https://github.com/tomwillfixit/alpine-cvecheck)
- [Docker Secure Deployment Guidelines](https://github.com/AonCyberLabs/Docker-Secure-Deployment-Guidelines)
- [Docker Security - Quick Reference](https://binarymist.io/publication/docker-security/)
- [Docker Security: Are Your Containers Tightly Secured to the Ship? SlideShare](https://www.slideshare.net/slideshow/docker-security-are-your-containers-tightly-secured-to-the-ship/43834790)
- [How CVE's are handled on Offical Docker Images](https://github.com/docker-library/official-images/issues/1448)
- [Lynis is an open source security auditing tool including Docker auditing](https://cisofy.com/lynis/)
- [Security Best Practices for Building Docker Images](https://linux-audit.com/tags/docker/)
- [Software Engineering Radio interview of Docker Security Team Lead (Diogo Mónica)](https://www.se-radio.net/2017/05/se-radio-episode-290-diogo-monica-on-docker-security/) Interview mit dem Leiter des Docker-Sicherheitsteams (Diogo Mónica) im Software Engineering Radio
- [Ten Docker Image Security Best Practices Cheat Sheet](https://snyk.io/blog/10-docker-image-security-best-practices/)
- [Top ten most popular docker images each contain at least 30 vulnerabilities](https://snyk.io/blog/top-ten-most-popular-docker-images-each-contain-at-least-30-vulnerabilities/)
- [Tuning Docker with the newest security enhancements](https://opensource.com/business/15/3/docker-security-tuning)
- [10 best practices to containerize Node.js web applications with Docker](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)

## Videos

- [Deploying and scaling applications with Docker, Swarm, and a tiny bit of Python magic](https://www.youtube.com/watch?v=GpHMTR7P2Ms) (3:11:06)
- [Docker Course](https://www.youtube.com/watch?v=UZpyvK6UGFo) (Spanisch)
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
- [Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615) Kostenloser Udacity-Kurs
- [State of containers: a debate with CoreOS, VMware and Google](https://www.youtube.com/watch?v=IiITP3yIRd8) (27:38)

## Communitys und Meetups

### Brasilianisch

- [Docker BR on Telegram](https://telegram.me/dockerbr)

### Englisch

- [Docker Community](https://www.docker.com/community/)
- [Docker Events](https://www.docker.com/events/)
- [Docker Online Meetup](https://www.meetup.com/en-AU/Docker-Online-Meetup/)
- [Docker Reddit Community](https://www.reddit.com/r/docker/)

### Russisch

- [Docker Russian-speaking Community](https://t.me/docker_ru)

### Spanisch

- [Docker Tips](https://dockertips.com/)

## Sterne im Zeitverlauf

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

