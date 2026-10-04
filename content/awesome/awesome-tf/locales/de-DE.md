# Awesome Terraform [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) <!-- omit in toc -->

[![Link Checker](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml)
[![Misspell Check](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml)

> Eine kuratierte Sammlung von Ressourcen zu [HashiCorp's Terraform](https://www.terraform.io/).
> [<img src="https://raw.githubusercontent.com/shuaibiyy/awesome-terraform/master/terraform.svg" align="right" width="100">](https://terraform.io)
> Ihre [Beiträge](https://github.com/shuaibiyy/awesome-tf/blob/master/contributing.md) sind willkommen!

Terraform ermöglicht es, Produktionsinfrastrukturen sicher und vorhersehbar zu erstellen, zu ändern und zu verbessern. Es ist ein Open-Source-Tool, das APIs in deklarative Konfigurationsdateien überführt, die teamübergreifend geteilt, als Code behandelt, bearbeitet, überprüft und versioniert werden können.

## Inhalt <!-- omit in toc -->

- [Legende](#legend)
- [Offizielle Ressourcen](#official-resources)
- [Community](#community)
- [Bücher](#books)
- [Lernen und Weiterbildung](#learning-and-studying)
- [Apps](#apps)
- [Tutorials und Blogbeiträge](#tutorials-and-blog-posts)
  - [Einsteigerleitfäden](#beginner-guides)
  - [Benutzerdefinierte Provider schreiben](#writing-custom-providers)
  - [Anleitungen](#how-to)
  - [Konfiguration mehrerer Umgebungen](#multi-environment-configuration)
  - [Azure](#azure)
  - [AWS](#aws)
  - [Google Cloud](#google-cloud)
  - [Verschiedenes](#miscellaneous)
- [Community-Module](#community-modules)
- [Selbst gehostete Registries](#self-hosted-registries)
- [Verwaltete Registries](#managed-registries)
- [Provider](#providers)
  - [Von HashiCorp unterstützte Provider](#hashicorp-supported-providers)
  - [Von Anbietern unterstützte Provider](#vendor-supported-providers)
  - [Community-Provider](#community-providers)
- [Tests](#testing)
- [Tools](#tools)
  - [CI](#ci)
  - [VS-Code-Erweiterungen](#vs-code-extensions)
- [Bibliotheken](#libraries)
- [Vorlagen](#boilerplates)
- [Selbst gehostete Terraform-Plattformen](#self-hosted-terraform-platforms)
- [Verwaltete Terraform-Plattformen :heavy\_dollar\_sign:](#managed-terraform-platforms-heavy_dollar_sign)
- [Tools für Terraform Enterprise](#terraform-enterprise-tooling)
- [Videos](#videos)
- [Editor-Plugins](#editor-plugins)
- [Lizenz](#license)

## Legende

- Nicht kompatibel mit _terraform >= 0.12_ :ghost:
- Verlassen :skull:
- Kostenpflichtig :heavy_dollar_sign:

## Offizielle Ressourcen

- [Hashicorp Terraform Blog](https://www.hashicorp.com/en/blog/products/terraform)
- [Introduction to Terraform](https://developer.hashicorp.com/terraform/intro)
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform learn](https://developer.hashicorp.com/terraform/tutorials)

## Community

- [weekly.tf - Terraform Weekly Newsletter](https://www.weekly.tf/) - Wöchentlicher Newsletter mit Neuigkeiten zu Terraform, Open-Source-Projekten, Ankündigungen und Diskussionen.
- [Complete Terraform documentation as PDF files (Updated nightly)](https://github.com/antonbabenko/terraform-docs-as-pdf) :skull:
- [Terraform AWS Modules](https://github.com/terraform-aws-modules) + [meta-configurations repository](https://github.com/terraform-aws-modules/meta)
- [Terraform Bug Tracker](https://github.com/hashicorp/terraform/issues)
- [Terraform Cheatsheet](https://vivid-badger-c30.notion.site/Terraform-Cheatsheet-352d7b505fb980618d5de73aa086d1d4)
- [Terraform Community Modules](https://github.com/terraform-community-modules)
- [Terraform Twitter Community](https://twitter.com/i/communities/1501688565884928007) <!-- markdown-link-check-disable-line -->
- [Terraform Discuss](https://discuss.hashicorp.com/c/terraform-core/27)
- [Terraform Provider/Module Registry](https://registry.terraform.io/)
- [Terraform PDF Doc](https://github.com/dohsimpson/terraform-doc-pdf) :skull:
- [Terraform Roadmap](https://roadmap.sh/terraform)
- [The Ultimate Terraform Cheatsheet for DevOps Engineers](https://atulcodes.hashnode.dev/ultimate-terraform-cheatsheet-devops)
- [Terragrunt Reference Architecture](https://github.com/antonbabenko/terragrunt-reference-architecture) :skull:
- [The Claude Agent Skill for Terraform and OpenTofu - testing, modules, CI/CD, and production patterns](https://github.com/antonbabenko/terraform-skill) - Claude-Code-Skill für Terraform und OpenTofu — Tests, Modulentwurf, CI/CD-Workflows und Produktionsmuster.
- [awesome-terraform-compliance](https://github.com/antonbabenko/awesome-terraform-compliance) - Kuratierte Liste von Tools, Frameworks und Ressourcen für Compliance und Sicherheit mit Terraform.
- Sprachspezifische Communities:
  - [Telegram (ukrainischsprachige Community)](https://t.me/terraform_ukraine)

## Bücher

- [Big Little Book On Terraform](https://www.amazon.com/Big-Little-Book-Terraform-Omos-ebook/dp/B07PWYPNX8/)
- [Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Second Edition](https://www.manning.com/books/bootstrapping-microservices-second-edition)
- [Deep-Dive Terraform on Azure](https://link.springer.com/book/10.1007/978-1-4842-7328-9)
- [Getting Started with Terraform, 2nd ed.](https://www.amazon.com/Getting-Started-Terraform-production-infrastructure/dp/1788623533/)
- [HashiCorp Infrastructure Automation Certification Guide](https://www.amazon.com/HashiCorp-Infrastructure-Automation-Certification-Guide-ebook/dp/B092KM7LXC/)
- [IaC starting with Terraform (Korean)](https://product.kyobobook.co.kr/detail/S000202478097)
- [Infrastructure as Code](https://www.oreilly.com/library/view/infrastructure-as-code/9781491924334/)
- [Patterns and Practices for Infrastructure as Code: With examples in Python and Terraform](https://www.manning.com/books/infrastructure-as-code-patterns-and-practices)
- [Terraform Best Practices](https://www.terraform-best-practices.com/) - [quelloffenes E-Book](https://github.com/antonbabenko/terraform-best-practices)
- [Terraform Cookbook](https://www.amazon.com/Terraform-Cookbook-Efficiently-Infrastructure-platforms/dp/1800207557)
- [Terraform for Ops e-book](https://www.terraformforops.com)
- [Terraform in Action](https://www.manning.com/books/terraform-in-action)
- [Terraform in Depth](https://www.manning.com/books/terraform-in-depth)
- [Terraform: Up & Running, 3rd ed.](https://www.terraformupandrunning.com/)
- [The Terraform Book](https://terraformbook.com/)

## Lernen und Weiterbildung

- [Terraform Academy](https://www.terraformacademy.app) - Interaktive Lernplattform für Terraform / IaC mit praktischen Übungen, Prüfungsvorbereitung (HashiCorp, AWS, GCP, Azure, Docker, Kubernetes, GitOps), KI-Coaching und Fortschrittsverfolgung. Siehe auch den [SRE Pro Tips-Blog](https://www.terraformacademy.app/protips/?cat=sre-pro-tips) und die unten aufgeführten mobilen/PWA-Apps.
- [Terraform Terminal Simulator](https://devops-daily.com/games/terraform-terminal-simulator) - Üben Sie init, plan und apply in einem simulierten Terminal im Browser. Kostenlos und quelloffen, keine Anmeldung erforderlich.
- [compliance.tf docs](https://compliance.tf/docs/) - Kostenlose Terraform-Implementierungen für SOC 2, PCI DSS, HIPAA, NIST 800-53 und mehr als 35 weitere Compliance-Kontrollen — eine offene Referenz für das Schreiben konformer Infrastruktur als Code.
- [DevOpsLesson Terraform Playground](https://devopslesson.com/playground/terraform) - Kostenloser Terraform-Simulator im Browser mit angeleiteten HCL-Übungen und Befehlen zum Ausprobieren.

## Apps

Mobile, Desktop- und PWA-Apps zum Lernen und Arbeiten mit Terraform unterwegs.

- [Terraform Academy — iOS](https://apps.apple.com/us/app/terraform-academy/id6745738634) - Native iOS-App der interaktiven Lernplattform Terraform Academy. Praktische Übungen, Prüfungsvorbereitung (HashiCorp, AWS, GCP, Azure, Docker, Kubernetes, GitOps), KI-Coaching und geräteübergreifende Synchronisierung des Lernfortschritts.
- [Terraform Academy — Android](https://play.google.com/store/apps/details?id=com.terraformacade1.app) - Native Android-App für die Lernplattform Terraform Academy mit denselben Übungen, Prüfungsvorbereitungen und KI-Coaching-Funktionen wie die iOS- und Webversion.
- [Terraform Academy — PWA / Web App](https://www.terraformacademy.app/) - Installierbare Progressive-Web-App-Version der Terraform Academy. Funktioniert offline, lässt sich auf jeder Plattform zum Startbildschirm hinzufügen und synchronisiert den Fortschritt mit den mobilen Apps.

## Tutorials und Blogbeiträge

### Einsteigerleitfäden

- [A Comprehensive Guide to Terraform](https://www.gruntwork.io/blog/a-comprehensive-guide-to-terraform) - Reihe von Blogbeiträgen des Autors von „Terraform: Up & Running“, die Leser vom Einstieg in Terraform bis zum praktischen Einsatz in der realen Welt führen.
- [Using Terraform for Cloud Deployments - Part 1](https://dev.to/koenighotze/using-terraform-for-cloud-deployments---part-1) - Bereitstellung einer EC2-Instanz.
- [Hello, world: The Fargate/Terraform tutorial I wish I had](https://section411.com/2019/07/hello-world/) - Blogbeitrag über die Einrichtung eines ECS-Fargate-Clusters von Grund auf.
- [Terraform Security Guide](https://sysdig.com/blog/terraform-security-best-practices/) - Blogbeitrag zu bewährten Sicherheitspraktiken bei der Arbeit mit Terraform.
- [Building a SaaS API? Don't Forget Your Terraform Provider](https://www.speakeasy.com/blog/build-terraform-providers) - Warum Sie einen Terraform-Provider schreiben sollten.
- [Complete Terraform Course in French (Free)](https://blog.stephane-robert.info/docs/infra-as-code/provisionnement/terraform/) – Ein umfassender und kostenloser Kurs auf Französisch, der Terraform vom Einstieg bis zur fortgeschrittenen Anwendung mit praktischen Beispielen und Best Practices vermittelt.
- [Introduction to Terraform](https://devopslesson.com/tutorials/terraform/introduction-to-terraform) - Einsteigerfreundlicher Leitfaden zu den Grundlagen von Terraform — Providern, Ressourcen, State und dem ersten Apply mit praktischen Beispielen.

### Benutzerdefinierte Provider schreiben

- [Creating custom terraform providers](https://blog.pelo.tech/creating-custom-terraform-providers-341311823fa2) - Leitfaden zum Erstellen benutzerdefinierter Provider.
- [Writing a Terraform provider](https://web.archive.org/web/20220516140659/http://blog.jfabre.net/2017/01/22/writing-terraform-provider/) - Leitfaden zum Erstellen benutzerdefinierter Provider.
- [Writing Custom Providers](https://developer.hashicorp.com/terraform/plugin/sdkv2) - Offizielle Dokumentation zum Erstellen benutzerdefinierter Provider.
- [Terraform Provider Code generation](https://www.speakeasy.com/docs/terraform/create-terraform) - Anleitung zur Generierung eines Terraform-Providers aus einer OpenAPI-Spezifikation (von einem Anbieter unterstützt).

### Anleitungen

- [How To Write OPA for Terraform](https://scalr.com/learning-center/opa-series-part-1-open-policy-agent-and-terraform) - So verwenden Sie Open Policy Agent, um Richtlinien für Ihre Terraform-Pläne auszuwerten und durchzusetzen.
- [Deploying Discourse with Terraform](https://www.hashicorp.com/en/blog/deploying-discourse-with-terraform) - Zeigt, wie Terraform mit einem einzigen Befehl eine laufende Discourse-Instanz auf DigitalOcean erstellen kann.
- [Deploying Django to AWS ECS with Terraform](https://testdriven.io/blog/deploying-django-to-ecs-with-terraform/) - Beschreibt, wie Terraform die erforderliche AWS-Infrastruktur für den Betrieb einer Django-App auf ECS bereitstellen kann.
- [Easily Deploy A Seneca Microservice to ECS with Wercker and Terraform: Part I](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-i/), [II](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-ii/) & [III](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-iii/) - Veranschaulicht, wie Terraform in eine Bereitstellungspipeline für Microservices eingebunden werden kann.
- [Terraform for a Highly Available VPN between AWS and Azure](https://web.archive.org/web/20210616132857/https://deployeveryday.com/2020/04/13/vpn-aws-azure-terraform.html) - Terraform-Code zur Bereitstellung eines hochverfügbaren VPN zwischen AWS und Azure.
- [Terraforming 1Password](https://1password.com/blog/terraforming-1password) - Wie 1Password von CloudFormation zu Terraform migriert ist.
- [Tutorial: How to Use Terraform to Deploy OpenStack Workloads](https://web.archive.org/web/20170611135511/http://www.stratoscale.com/blog/openstack/tutorial-how-to-use-terraform-to-deploy-openstack-workloads/) - Veranschaulicht, wie einfach sich der OpenStack-Terraform-Provider zum Bereitstellen eines Webservers verwenden lässt.
- [Zero Downtime Updates with HashiCorp Terraform](https://www.hashicorp.com/en/blog/zero-downtime-updates-with-terraform) - Sicherstellung unterbrechungsfreier Infrastrukturupdates.
- [Google Cloud Platform for 10$ a month using terraform](https://github.com/nufailtd/terraform-budget-gcp) - Zeigt, wie sich mit Terraform für weniger als [10 $](https://nufailtd.github.io/budget-gcp/) pro Monat ein sicherer Google-Kubernetes-Cluster, Google-Cloud-Run-Dienste und weitere Infrastrukturkomponenten erstellen lassen.
- [Infracost + Terraform + GitHub Actions = Automate Cloud Cost Management](https://medium.com/better-programming/infracost-terraform-github-actions-automate-cloud-cost-management-a62b329f2834) - So lässt sich Infracost als Leitplanke zur Verwaltung der Cloud-Kosten während der Terraform-Entwicklung einsetzen.
- [How To Wrap Your Terraform Provider for Pulumi](https://www.speakeasy.com/blog/pulumi-terraform-provider) - Den Terraform-Provider für Pulumi vorbereiten.
- [How to Build an AWS Account Vending Machine](https://medium.com/@StackGuardian/how-to-build-an-aws-account-vending-machine-by-stackguardian-f2895e35a27b) - Automatisiertes Self-Service-Lifecycle-Management von AWS-Konten mit Terraform-Stacks, orchestriert durch StackGuardian, mit SSM-basierter Zuweisung, EventBridge-Bereinigungs-Triggern und Tirith-Richtliniendurchsetzung.

### Konfiguration mehrerer Umgebungen

- [Terraform Design Patterns: the Terrafile](https://bensnape.com/2016/01/14/terraform-design-patterns-the-terrafile/) - Verwaltung von Terraform-Modulen und deren Versionen in Terraform-Projekten mit Terrafile.
- [Terraform, VPC, and why you want a tfstate file per env](https://charity.wtf/2016/03/30/terraform-vpc-and-why-you-want-a-tfstate-file-per-env/) - Einige Fallstricke beim Einsatz von Terraform in großen Projekten mit mehreren Umgebungen und wie sie sich vermeiden lassen.
- [Using Pipelines to Manage Environments with Infrastructure as Code](https://medium.com/@kief/https-medium-com-kief-using-pipelines-to-manage-environments-with-infrastructure-as-code-b37285a1cbf5) - Erläutert verschiedene Ansätze zum Aufbau einer Pipeline, die Infrastrukturänderungen von einer Umgebung in die nächste überführt.

### Azure

- [Learning HashiCorp Terraform](https://web.archive.org/web/20201108000713/https://www.g10s.io/hashicorp-terraform/) - Leitfaden für Azure.
- [New Terraform Azure Automation Resources](https://bgelens.nl/terraform-automation-resources/) - Azure Automation.
- [Terraforming Azure PaaS](https://devkimchi.com/2019/01/21/terraforming-azure-paas/) - PaaS-Ressourcen auf Azure bereitstellen.
- [azure-az104](https://github.com/victorlane/azure-az104) - Lernnotizen zu AZ-104 Azure Administrator und praktische Terraform-Beispiele, einschließlich einer Referenzarchitektur für eine Landing Zone.

### AWS

- [AWS Lambda the Terraform Way](https://github.com/nsriram/lambda-the-terraform-way) - AWS Lambda mit Terraform umfassend verstehen — über das Ausführen von Funktionen hinaus. Enthält außerdem Anleitungen zur Integration mit S3, API Gateway, DynamoDB, Kinesis und SQS.
- [Managing AWS Lambda Functions with Terraform](https://spacelift.io/blog/terraform-aws-lambda) - Wofür wird AWS Lambda verwendet und wie lassen sich AWS-Lambda-Funktionen mit Terraform verwalten?

### Google Cloud

- [Managing infrastructure as code with Terraform, Cloud Build, and GitOps](https://docs.cloud.google.com/docs/terraform/resource-management/managing-infrastructure-as-code) - Infrastruktur als Code mit Terraform, Cloud Build und GitOps einrichten und verwalten.
- [Getting started with Terraform on Google Cloud](https://docs.cloud.google.com/docs/terraform/create-vm-instance) - Mit Terraform eine VM in Google Cloud erstellen und einen einfachen Python-Flask-Server starten.
- [Managing Cloud Infrastructure with Terraform](https://www.skills.google/course_templates/746) - Kubernetes-Load-Balancer-Dienst mit Terraform bereitstellen, HTTPS-Load-Balancer mit inhaltsbasierter Weiterleitung mit Terraform, modulares Load-Balancing mit Terraform – regionaler Load-Balancer, benutzerdefinierte Provider mit Terraform, Cloud SQL mit Terraform, Aufbau eines VPN zwischen Google Cloud und AWS mit Terraform.
- [Hashicorp Terraform Tutorials for Google Cloud](https://developer.hashicorp.com/terraform/tutorials/gcp-get-started) - Mit Terraform auf Google Cloud loslegen.
- [IAC - Terraform and Terragrunt on Google Cloud](https://www.academeez.com/courses/terraform) - Open-Source-Kurs unter MIT-Lizenz zum Erstellen von Infrastruktur auf Google Cloud mit Terraform/OpenTofu und Terragrunt.
- [Self-host n8n on Google Cloud Run](https://github.com/datawranglerai/self-host-n8n-on-gcr) - Terraform-Konfiguration und Anleitung zur Bereitstellung der n8n-Workflow-Automatisierung auf Cloud Run mit Cloud SQL, Secret Manager und optionalem Queue-Modus über Redis.

### Verschiedenes

- [Sharing data between Terraform configurations](https://web.archive.org/web/20230927082422/https://jamesmckay.net/2016/09/sharing-data-between-terraform-configurations/) - Veranschaulicht, wie sich Remote State zum Teilen von Daten zwischen Terraform-Konfigurationen verwenden lässt.
- [The Segment AWS Stack](https://web.archive.org/web/20250322120753/https://segment.com/blog/the-segment-aws-stack/) - Zeigt die Hintergründe der mit Terraform betriebenen Infrastruktur, mit der das [Million-Dollar-Engineering-Problem](https://segment.com/blog/the-million-dollar-eng-problem/) bei [Segment](https://segment.com/) gelöst wurde.
- [Top 3 Terraform Testing Strategies for Ultra-Reliable Infrastructure-as-Code](https://www.contino.io/insights/top-3-terraform-testing-strategies-for-ultra-reliable-infrastructure-as-code)
- [Two Weeks with Terraform](https://charity.wtf/2016/02/23/two-weeks-with-terraform/) - Erfahrungen aus der Praxis mit Terraform und einige Erkenntnisse aus dem Betrieb.
- [Terraform: Beyond the Basics with AWS](https://aws.amazon.com/blogs/apn/terraform-beyond-the-basics-with-aws/) - Erklärung einer Demo, in der Terraform eine Beispielarchitektur auf AWS bereitstellt.
- [Terraform cost estimation](https://github.com/antonbabenko/terraform-cost-estimation) - Anonymisierte, kostenlose Kostenschätzung anhand eines Terraform-Plans (0.12+) oder einer State-Datei. Auch im Browser verfügbar unter [terraform-cost-estimation.com](https://terraform-cost-estimation.com).
- [How to Debug Terraform Projects: Tutorial](https://spacelift.io/blog/terraform-debug)
- [The terraform-docs GitHub Action: A Complete CI Setup Guide](https://devtoolhub.com/terraform-docs-github-action/) - Erzeugen und automatisches Committen von Modul-Dokumentation bei jedem PR mit terraform-docs, einschließlich der OIDC-/Berechtigungs-Fallstricke, die CI zum Scheitern bringen.

## Community-Module

Weitere Community-Module finden Sie in der [Terraform-Modul-Registry](https://registry.terraform.io/).

- [nis2shield/infrastructure](https://github.com/nis2shield/infrastructure) - Terraform-Module zur automatisierten NIS2-Compliance und sicheren Bereitstellung von Infrastruktur.
- [rancher-terraform-digitalocean](https://github.com/lunagt/rancher-terraform-digitalocean) - Rancher-Server auf DigitalOcean.
- [segmentio/stack](https://github.com/segmentio/stack) - Konfiguriert Produktionsinfrastruktur mit AWS, Docker und ECS. :skull:
- [terraform-aws-account-lookup](https://github.com/be-bold/terraform-aws-account-lookup) - Dieses Terraform-Modul ermöglicht es, AWS-Konten abzufragen und sie in verschiedenen Zuordnungen oder als vollständige Liste auszugeben. Die Kontenliste kann gefiltert und anhand vorhandener Tags mithilfe eines Untermoduls gruppiert werden.
- [terraform-aws-alb](https://github.com/terraform-aws-modules/terraform-aws-alb) - Erstellt einen Application Load Balancer auf AWS (verifiziertes Modul).
- [terraform-aws-appconfig](https://github.com/terraform-aws-modules/terraform-aws-appconfig) - Erstellt AWS-AppConfig-Ressourcen auf AWS.
- [terraform-aws-atlantis](https://github.com/terraform-aws-modules/terraform-aws-atlantis) - Erstellt Terraform-Konfigurationen zum Betrieb von [Atlantis](https://runatlantis.io) auf AWS Fargate. GitHub, GitLab und BitBucket werden unterstützt.
- [terraform-aws-autoscaling](https://github.com/terraform-aws-modules/terraform-aws-autoscaling) - Erstellt Auto-Scaling-Gruppen und Launch-Konfigurationen (verifiziertes Modul).
- [terraform-aws-customer-gateway](https://github.com/terraform-aws-modules/terraform-aws-customer-gateway) - Erstellt ein Customer Gateway auf AWS.
- [terraform-aws-datadog-forwarders](https://github.com/terraform-aws-modules/terraform-aws-datadog-forwarders) - Erstellt AWS-Ressourcen zum Weiterleiten von Protokolle/Metriken an Datadog.
- [terraform-aws-dms](https://github.com/terraform-aws-modules/terraform-aws-dms) - Erstellt AWS-DMS-Ressourcen (Database Migration Service) auf AWS.
- [terraform-aws-dynamodb-table](https://github.com/terraform-aws-modules/terraform-aws-dynamodb-table) - Erstellt eine DynamoDB-Tabelle auf AWS.
- [terraform-aws-ec2-instance](https://github.com/terraform-aws-modules/terraform-aws-ec2-instance) - Erstellt EC2-Instanzen auf AWS.
- [terraform-aws-ecr](https://github.com/cloudposse/terraform-aws-ecr) - Verwaltet Docker-Container-Registries auf AWS ECR.
- [terraform-aws-ecs](https://github.com/terraform-aws-modules/terraform-aws-ecs) - Erstellt AWS-ECS-Ressourcen auf AWS.
- [terraform-aws-efs](https://github.com/cloudposse/terraform-aws-efs) - Definiert ein EFS-Dateisystem.
- [terraform-aws-eks](https://github.com/terraform-aws-modules/terraform-aws-eks) - Erstellt Ressourcen für den Elastic Kubernetes Service auf AWS (sehr beliebtes Modul).
- [terraform-aws-elb](https://github.com/terraform-aws-modules/terraform-aws-elb) - Erstellt einen Elastic Load Balancer auf AWS (verifiziertes Modul).
- [terraform-aws-eventbridge](https://github.com/terraform-aws-modules/terraform-aws-eventbridge) - Erstellt EventBridge-Ressourcen auf AWS.
- [terraform-aws-jenkins-ha-agents](https://github.com/neiman-marcus/terraform-aws-jenkins-ha-agents) - EC2-basierte Jenkins-Bereitstellung mit HA- (Spot-)Agents. Läuft aus Gründen der Unveränderlichkeit auf EFS. Vollständig anpassbar und mit sinnvollen Standardwerten.
- [terraform-aws-jenkins](https://github.com/cloudposse-archives/terraform-aws-jenkins) - Erstellt ein Docker-Image mit Jenkins, speichert es in einem ECR-Repository und stellt es in Elastic Beanstalk mit einem Docker-Stack bereit. :skull:
- [terraform-aws-key-pair](https://github.com/cloudposse/terraform-aws-key-pair) - Erzeugt automatisch SSH-Schlüsselpaare (öffentliche/private Schlüssel).
- [terraform-aws-lambda-auto-package](https://github.com/nozaq/terraform-aws-lambda-auto-package) - Terraform-Modul zum Definieren einer Lambda-Funktion, deren Quelldateien automatisch für die Lambda-Bereitstellung erstellt und gepackt werden.
- [terraform-aws-lambda](https://github.com/terraform-aws-modules/terraform-aws-lambda) - Terraform-Modul, das Abhängigkeiten und Pakete erstellt und außerdem AWS-Lambda-Ressourcen in unzähligen Kombinationen anlegt.
- [terraform-aws-managed-service-prometheus](https://github.com/terraform-aws-modules/terraform-aws-managed-service-prometheus) - Erstellt Ressourcen des AWS Managed Service for Prometheus (AMP) auf AWS.
- [terraform-aws-modules](https://github.com/terraform-aws-modules) - Sammlung von Terraform-AWS-Modulen, die von der Community unterstützt werden (einschließlich offizieller AWS-Module).
- [terraform-aws-msk-kafka-cluster](https://github.com/terraform-aws-modules/terraform-aws-msk-kafka-cluster) - Erstellt AWS-MSK-Ressourcen (Managed Streaming for Kafka) auf AWS.
- [terraform-aws-notify-slack](https://github.com/terraform-aws-modules/terraform-aws-notify-slack) - Erstellt ein SNS-Thema und eine Lambda-Funktion, die Benachrichtigungen an Slack sendet.
- [terraform-aws-postgresql-rds](https://github.com/azavea/terraform-aws-postgresql-rds) - Erstellt PostgreSQL auf RDS.
- [terraform-aws-rds-aurora](https://github.com/terraform-aws-modules/terraform-aws-rds-aurora) - Erstellt Ressourcen für einen RDS-Aurora-Cluster auf AWS (verifiziertes Modul).
- [terraform-aws-rds-proxy](https://github.com/terraform-aws-modules/terraform-aws-rds-proxy) - Erstellt AWS-RDS-Proxy-Ressourcen auf AWS.
- [terraform-aws-rds](https://github.com/terraform-aws-modules/terraform-aws-rds) - Erstellt RDS-Ressourcen auf AWS (verifiziertes Modul).
- [terraform-aws-redshift](https://github.com/terraform-aws-modules/terraform-aws-redshift) - Erstellt Redshift-Ressourcen auf AWS.
- [terraform-aws-route53](https://github.com/terraform-aws-modules/terraform-aws-route53) - Erstellt Route-53-Ressourcen auf AWS.
- [terraform-aws-s3-bucket](https://github.com/terraform-aws-modules/terraform-aws-s3-bucket) - Erstellt S3-Bucket-Ressourcen auf AWS.
- [terraform-aws-secure-baseline](https://github.com/nozaq/terraform-aws-secure-baseline) - Richtet Ihr AWS-Konto mit einer sicheren Basiskonfiguration auf Grundlage der CIS Amazon Web Services Foundations ein.
- [terraform-aws-security-group](https://github.com/terraform-aws-modules/terraform-aws-security-group) - Erstellt EC2-VPC-Sicherheitsgruppen auf AWS (verifiziertes Modul).
- [terraform-aws-ssh-bastion-service](https://github.com/joshuamkite/terraform-aws-ssh-bastion-service) - Terraform-Plan zur Bereitstellung eines zustandslosen SSH-Bastion-Hosts als Dienst auf AWS.
- [terraform-aws-transit-gateway](https://github.com/terraform-aws-modules/terraform-aws-transit-gateway) - Erstellt Transit-Gateway-Ressourcen auf AWS.
- [terraform-aws-vpc](https://github.com/terraform-aws-modules/terraform-aws-vpc) - Erstellt VPC-Ressourcen auf AWS (verifiziertes und sehr beliebtes Modul).
- [terraform-aws-vpn-gateway](https://github.com/terraform-aws-modules/terraform-aws-vpn-gateway) - Erstellt VPN-Gateway-Ressourcen auf AWS.
- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Offizielle, von Microsoft verantwortete Sammlung verifizierter Module für Azure, die bewährte WAF-Verfahren für eine konsistente Bereitstellung von Infrastruktur umsetzt.
- [terraform-azurerm-aks](https://github.com/kjanshair/terraform-azurerm-aks) - Erstellt AKS-Ressourcen auf Azure.
- [terraform-azurerm-iis](https://github.com/ghostinthewires/terraform-azurerm-iis-install) - Installiert einen IIS-Server auf einer Azure-VM-Instanz.
- [terraform-azurerm-mysql](https://github.com/foreverXZC/terraform-azurerm-mysql) - Erstellt eine MySQL-Datenbank auf Azure.
- [terraform-azurerm-redis](https://github.com/rahulkhengare/terraform-azurerm-redis) - Erstellt Redis auf Azure.
- [terraform-azurerm-sqlserver](https://github.com/metadevpro/terraform-azurerm-sqlserver-seed) - Erstellt eine SQL-Server-Datenbank auf Azure.
- [terraform-cloudflare-maintenance](https://github.com/adinhodovic/terraform-cloudflare-maintenance) - Modul zum Erstellen einer Wartungsseite mit Cloudflare Workers.
- [terraform-digitalocean-droplet](https://registry.terraform.io/modules/terraform-digitalocean-modules/droplet/digitalocean/latest) - Terraform-Modul zur Verwaltung von DigitalOcean-Droplets und zugehörigen Ressourcen.
- [terraform-ecs-jenkins](https://github.com/shuaibiyy/terraform-ecs-jenkins) - Stellt Jenkins auf AWS ECS mit Terraform bereit.
- [terraform-gce-atlantis](https://github.com/runatlantis/terraform-gce-atlantis) - Erstellt Terraform-Konfigurationen zum Betrieb von [Atlantis](https://runatlantis.io) auf Google Compute Engine.
- [terraform-google-project-factory](https://github.com/terraform-google-modules/terraform-google-project-factory) - Vorgegebene Erstellung und Konfiguration von Google-Cloud-Platform-Projekten mit Shared VPC, IAM, APIs usw.
- [terraform-helm-carbon-intensity-exporter](https://github.com/fabiocicerchia/terraform-helm-carbon-intensity-exporter) - Terraform-/Helm-Modul zur Bereitstellung des Kubernetes Carbon Intensity Exporter.
- [terraform-helm-cloud-carbon-footprint](https://github.com/fabiocicerchia/terraform-helm-cloud-carbon-footprint) - Terraform-/Helm-Modul zur Bereitstellung von Cloud Carbon Footprint auf Kubernetes.
- [terraform-helm-kepler](https://github.com/fabiocicerchia/terraform-helm-kepler) - Terraform-Modul zur Bereitstellung von Kepler (Kubernetes-Leistungsprofilierung) über Helm.
- [terraform-kubestack](https://github.com/kbst/terraform-kubestack) - Kubestack ist ein Framework, mit dem Teams für Kubernetes-Plattform-Engineering den gesamten cloudnativen Stack in einer Terraform-Codebasis definieren und die Plattform mit GitOps sicher kontinuierlich weiterentwickeln können.
- [terraform-linode-k8s](https://registry.terraform.io/modules/linode/k8s/linode/latest) - Installiert Kubernetes auf Linode-Instanzen.
- [terraform-nixos](https://github.com/nix-community/terraform-nixos) - Eine Sammlung von Terraform-Modulen zur Bereitstellung von NixOS.
- [terraform-static-website-s3-cloudfront](https://github.com/sergej-brazdeikis/terraform-static-website-s3-cloudfront) - Erstellt anhand von Variablen statische Websites auf AWS S3 und CloudFront.
- [tf_aws_bastion_s3_keys](https://github.com/terraform-community-modules/tf_aws_bastion_s3_keys) - Erstellt Bastion-Hosts auf AWS EC2.
- [typhoon](https://github.com/poseidon/typhoon) - Minimale und kostenlose Kubernetes-Distribution mit Terraform.

## Selbst gehostete Registries

- [anthology](https://github.com/erikvanbrakel/anthology) - Private Implementierung einer Terraform-Registry als Alternative zur offiziellen Registry.
- [boring-registry](https://github.com/boring-registry/boring-registry) - Private Terraform-Modul-/Provider-Registry mit API-Schlüsselauthentifizierung und Unterstützung für Blob-Speicher.
- [citizen](https://github.com/outsideris/citizen) - Private Terraform-Modul-/Provider-Registry.
- [nrkno/terraform-registry](https://github.com/nrkno/terraform-registry) - Private Terraform-Registry mit modularen Store-Backends.
- [petra](https://github.com/devoteamgcloud/petra) - Verwaltung für eine private Terraform-Registry.
- [philips-labs/terraform-registry](https://github.com/philips-labs/terraform-registry) - Terraform-Registry zum Bereitstellen beliebiger, auf GitHub gehosteter Terraform-Provider-Releases.
- [tapir](https://github.com/PacoVK/tapir) - Private Terraform-Registry.
- [terraform-simple-registry](https://github.com/apparentlymart/terraform-simple-registry) - Einfache Implementierung der Terraform-Registry-Protokolle.
- [terramantle.dev](https://terramantle.dev) - Registry mit Schwerpunkt auf Einblicken in Module und State, die sich der Verwaltung von Abhängigkeiten widmet.
- [Terrareg](https://github.com/matthewjohn/terrareg) - Terraform-Modul-Registry.
- [terustry](https://github.com/veepee-oss/terustry) - Open-Source-Registry für Terraform-Provider, die als Proxy für GitLab- oder GitHub-Releases dient.
- [terralist](https://github.com/terralist/terralist) - Private Terraform-Registry für Module und Provider, die über eine REST-API verwaltet werden kann.

## Verwaltete Registries

- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Offizielle Microsoft-Initiative mit verifizierten, standardkonformen Terraform- (und Bicep-)Modulen für Azure-Ressourcen und Architekturmuster, abgestimmt auf das Well-Architected Framework.
- [cloudsmith](https://docs.cloudsmith.com/formats/terraform-modules-repository) - Verwalteter Paket-Hoster für interne und externe Kunden. :heavy_dollar_sign:
- [Terramantle](https://terramantle.dev) - Private Terraform-/OpenTofu-Registry mit detaillierten Einblicken in Module, Zuordnung von Abhängigkeiten und State-Transparenz.

## Provider

### Von HashiCorp unterstützte Provider

- [terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) - Provider für Amazon Web Services.
- [terraform-provider-azurerm](https://github.com/hashicorp/terraform-provider-azurerm) - Provider für Azure.
- [terraform-provider-docker](https://github.com/hashicorp/terraform-provider-docker) - Provider für Docker. :skull:
- [terraform-provider-google](https://github.com/hashicorp/terraform-provider-google) - Provider für Google Cloud Platform.
- [terraform-provider-helm](https://github.com/hashicorp/terraform-provider-helm) - Provider für Helm.
- [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) - Provider für Kubernetes.
- [terraform-provider-vsphere](https://github.com/vmware/terraform-provider-vsphere) - Provider für VMware vSphere.

### Von Anbietern unterstützte Provider

- [terraform-provider-alicloud](https://github.com/aliyun/terraform-provider-alicloud) - Provider für Alibaba Cloud.
- [terraform-provider-artifactory](https://github.com/jfrog/terraform-provider-artifactory) - Provider für [JFrog Artifactory](https://jfrog.com/artifactory/).
- [terraform-provider-atlas](https://github.com/ariga/terraform-provider-atlas) - Provider für [Atlas](https://atlasgo.io/).
- [terraform-provider-azapi](https://github.com/Azure/terraform-provider-azapi) - Provider für die Azure Resource Manager REST API.
- [terraform-provider-azuredevops](https://github.com/microsoft/terraform-provider-azuredevops) - Provider für Azure DevOps (VSTS).
- [terraform-provider-buildkite](https://github.com/buildkite/terraform-provider-buildkite) - Provider für Buildkite.
- [terraform-provider-checkly](https://github.com/checkly/terraform-provider-checkly) - Verwaltet [Checkly](https://www.checklyhq.com)-Ressourcen für API- und E2E-Monitoring.
- [terraform-provider-coder](https://github.com/coder/terraform-provider-coder) - Provider für [Coder](https://coder.com).
- [terraform-provider-confluent](https://github.com/confluentinc/terraform-provider-confluent) - Provider für Confluent.
- [terraform-provider-datadog](https://github.com/DataDog/terraform-provider-datadog) - Provider für Datadog.
- [terraform-provider-devhelm](https://github.com/devhelmhq/terraform-provider-devhelm) - Provider für [DevHelm](https://devhelm.io)-Uptime-Monitoring — verwaltet Monitore, Alarmkanäle und Statusseiten als Code.
- [terraform-provider-digitalocean](https://github.com/digitalocean/terraform-provider-digitalocean) - Provider für DigitalOcean.
- [terraform-provider-dominos](https://github.com/nat-henderson/terraform-provider-dominos) - Provider für Dominos Pizza.
- [terraform-provider-elasticstack](https://github.com/elastic/terraform-provider-elasticstack) - Provider für Elasticsearch und Kibana.
- [terraform-provider-env0](https://github.com/env0/terraform-provider-env0) - Provider für [env0](https://www.env0.com/).
- [terraform-provider-featureflip](https://github.com/canopy-labs/terraform-provider-featureflip) - Provider für [Featureflip](https://featureflip.io/)-Feature-Flags: Projekte, Umgebungen, Flags, Targeting-Regeln, Segmente und SDK-Schlüssel.
- [terraform-provider-github](https://github.com/integrations/terraform-provider-github) - Provider für GitHub.
- [terraform-provider-gitlab](https://github.com/gitlabhq/terraform-provider-gitlab) - Provider für GitLab.
- [terraform-provider-graphql](https://github.com/sullivtr/terraform-provider-graphql) - Provider für GraphQL-Abfragen und -Mutationen.
- [terraform-provider-hcloud](https://github.com/hetznercloud/terraform-provider-hcloud) - Provider für Hetzner Cloud.
- [terraform-provider-healthchecksio](https://github.com/kristofferahl/terraform-provider-healthchecksio) - Provider zur Verwaltung von healthchecks.io-Ressourcen.
- [terraform-provider-heroku](https://github.com/heroku/terraform-provider-heroku) - Provider für Heroku.
- [terraform-provider-ibm](https://github.com/IBM-Cloud/terraform-provider-ibm) - Provider für IBM Cloud.
- [terraform-provider-iterative](https://github.com/iterative/terraform-provider-iterative) - Terraform-Plugin für den Einsatz im Bereich Machine Learning.
- [terraform-provider-k8s](https://github.com/banzaicloud/terraform-provider-k8s) - Einfacher Kubernetes-Provider, der mit jedem Manifest funktioniert.
- [terraform-provider-keycloak](https://github.com/keycloak/terraform-provider-keycloak) - Provider zur Verwaltung der Einstellungen Ihres [Keycloak](https://www.keycloak.org/)-Identity-Provider-Servers.
- [terraform-provider-linode](https://github.com/btobolaski/terraform-provider-linode) - Provider für Linode.
- [terraform-provider-nxip](https://github.com/uk-sw/terraform-provider-nxip) - Provider für [nxip](https://nx-ip.com), IPAM mit poolbasierter CIDR-Zuweisung über Cloud- und On-Premise-Umgebungen hinweg. :heavy_dollar_sign:
- [terraform-provider-openstack](https://github.com/terraform-provider-openstack/terraform-provider-openstack) - Plugin für OpenStack.
- [terraform-provider-panos](https://github.com/PaloAltoNetworks/terraform-provider-panos) - Provider für [Next-Generation-Firewalls von Palo Alto Networks](https://www.paloaltonetworks.com/network-security).
- [terraform-provider-phare](https://github.com/phare/terraform-provider-phare) - Terraform-Provider für [Phare](https://phare.io).
- [terraform-provider-planetscale](https://github.com/planetscale/terraform-provider-planetscale) - Terraform-Provider für [PlanetScale](https://planetscale.com) (Vitess und Postgres).
- [terraform-provider-qovery](https://github.com/Qovery/terraform-provider-qovery) - Provider für [Qovery](https://www.qovery.com/) — verwaltet Kubernetes-Bereitstellungen, Umgebungen, Anwendungen, Datenbanken, Helm-Charts und Terraform-Dienste auf AWS, GCP, Azure und Scaleway.
- [terraform-provider-pingdom](https://github.com/russellcardullo/terraform-provider-pingdom) - Provider zur Verwaltung von Pingdom-Ressourcen. :skull:
- [terraform-provider-rancher2](https://github.com/rancher/terraform-provider-rancher2) - Provider für Rancher v2.
- [terraform-provider-scalr](https://github.com/Scalr/terraform-provider-scalr) - Provider für [Scalr](https://www.scalr.com/).
- [terraform-provider-secrethub](https://github.com/secrethub/terraform-provider-secrethub) - Provider für SecretHub. :skull:
- [terraform-provider-sigsci](https://github.com/signalsciences/terraform-provider-sigsci) - Provider für Signal Sciences.
- [terraform-provider-snowflake](https://github.com/snowflakedb/terraform-provider-snowflake) - Provider für das Snowflake Data Warehouse.
- [terraform-provider-spinnaker](https://github.com/armory-io/terraform-provider-spinnaker) - Provider für [Spinnaker](https://spinnaker.io/).
- [terraform-provider-spotinst](https://github.com/spotinst/terraform-provider-spotinst) - Provider für spotinst.
- [terraform-provider-stripe](https://github.com/franckverrot/terraform-provider-stripe) - Provider für Stripe.
- [terraform-provider-ucloud](https://github.com/ucloud/terraform-provider-ucloud) - Provider zur Verwaltung von UCloud-Ressourcen.
- [terraform-provider-uptimerobot](https://github.com/louy/terraform-provider-uptimerobot) - Provider zur Verwaltung von uptimerobot-Ressourcen. :skull:
- [terraform-provider-vaulted](https://github.com/sumup-oss/terraform-provider-vaulted) - Verschlüsselte HashiCorp-Vault-Secrets über Terraform, die in SCM wie Git gespeichert werden können.
- [terraform-provider-scp](https://github.com/splunk/terraform-provider-scp) - Provider für Splunk Cloud Platform.

### Community-Provider

- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Terraform-Provider für Coolify.
- [terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) - Terraform-Provider für Docker.
- [terraform-provider-minio](https://github.com/aminueza/terraform-provider-minio) - Terraform-Provider zur Verwaltung von MinIO-S3-Buckets und IAM-Benutzern.
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Terraform-Provider für Multipass.
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - OpenRouter als Code verwalten: Workspaces, Leitplanken, API-Schlüssel mit Ausgabenlimit und Organisationsmitglieder. Terraform + OpenTofu.
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - Terraform-Provider für Azure-Kostenschätzungen und Kostenleitplanken.
- [terraform-provider-proxmox](https://github.com/Telmate/terraform-provider-proxmox) - Terraform-Provider für Proxmox.
- [terraform-provider-seerr](https://github.com/Josh-Archer/terraform-provider-seerr) - Terraform-Provider für Seerr (Overseerr/Jellyseerr).
- [terraform-provider-terracurl](https://github.com/devops-rob/terraform-provider-terracurl) - Provider für verwaltete und nicht verwaltete API-Aufrufe an den Zielendpunkt.
- [terraform-provider-uname](https://github.com/julienlevasseur/terraform-provider-uname) - Uname-Provider für Terraform.
- [terraform-provider-value](https://github.com/pseudo-dynamic/terraform-provider-value) - Value-Provider für Terraform.
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Terraform-Provider für Multipass.
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - OpenRouter als Code verwalten: Workspaces, Leitplanken, API-Schlüssel mit Ausgabenlimit und Organisationsmitglieder. Terraform + OpenTofu.
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - Terraform-Provider für Azure-Kostenschätzungen und Kostenleitplanken.
- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Terraform-Provider für Coolify.
- [terraform-provider-appstore](https://github.com/elevenode/terraform-provider-appstore) - Terraform-Provider für Apple App Store Connect.
- [terraform-provider-expo](https://github.com/elevenode/terraform-provider-expo) - Terraform-Provider für Expo Application Services (EAS).
- [terraform-provider-paddle](https://github.com/vivantel/terraform-provider-paddle) - Terraform-Provider für Katalogressourcen, Lifecycle-Aktionen und Lookup-Datenquellen von Paddle Billing.
- [terraform-provider-seekrit](https://github.com/seekritdev/terraform-provider-seekrit) - Verwaltet seekrit-Apps, Umgebungen, Gruppen, Service-Tokens, Schlüsselvergaben und Secrets. Schreibgeschützte Argumente und kurzlebige Ressourcen halten Secret-Werte aus dem State heraus.

## Tests

- [clarity](https://github.com/xchapter7x/clarity) - Deklaratives Test-Framework für Unit-Tests mit Terraform. :skull:
- [kitchen-terraform](https://github.com/newcontext-oss/kitchen-terraform) - Stellt eine Reihe von Test-Kitchen-Plugins bereit, mit denen sich eine Terraform-Konfiguration anwenden und der resultierende Terraform-State mit InSpec-Kontrollen überprüfen lässt. :skull:
- [rspec-terraform](https://github.com/bsnape/rspec-terraform) - RSpec-Tests für Ihre Terraform-Module. :skull:
- [terraform_validate](https://github.com/elmundio87/terraform_validate) - Unterstützt die Durchsetzung benutzerdefinierter Standards in Terraform. :skull:
- [terraform-compliance](https://github.com/terraform-compliance/cli) - BDD-Tests für Terraform-Dateien.
- [terratest](https://github.com/gruntwork-io/terratest) - Terratest ist eine Go-Bibliothek, die das Schreiben automatisierter Tests für Ihren Infrastrukturcode erleichtert.

## Tools

- [AIaC](https://github.com/gofireflyio/aiac) - Generator für Infrastruktur als Code mit künstlicher Intelligenz.
- [AirIAM](https://github.com/bridgecrewio/AirIAM) - AirIAM ist ein Tool für AWS IAM und ein Framework zur Ausführung von Terraform mit minimalen Berechtigungen.
- [asdf](https://github.com/asdf-community/asdf-hashicorp) - HashiCorp-Plugin für den [asdf](https://github.com/asdf-vm/asdf)-Versionsmanager.
- [astro](https://github.com/uber/astro/) - Astro ist ein Tool, mit dem sich mehrere Terraform-Ausführungen als einzelner Befehl verwalten lassen. :ghost:
- [atlantis](https://github.com/runatlantis/atlantis) - Einheitlicher Arbeitsablauf für die Zusammenarbeit an Terraform über GitHub.
- [atmos](https://github.com/cloudposse/atmos) - Universelles Tool, das tief zusammengeführtes YAML in Moduleingaben umwandelt.
- [aws2tf](https://github.com/aws-samples/aws2tf) - Automatisiert den Import vorhandener AWS-Ressourcen in Terraform und gibt den Terraform-HCL-Code aus.
- [aztfexport](https://github.com/Azure/aztfexport) - Ein Tool, um vorhandene Azure-Ressourcen in die Verwaltung durch Terraform zu übernehmen.
- [AzureNamer](https://azurenamingconventions.com/) - Erzeugt CAF-konforme Namen für mehr als 200 Azure-Ressourcentypen und exportiert sie als Terraform-locals, einschließlich Live-Validierung von Länge und Zeichen.
- [balcony](https://oguzhan-yilmaz.github.io/balcony/) - CLI-Tool zum einfachen Abrufen von AWS-API-Daten. Erzeugt außerdem Terraform-Importblöcke und Terraform-Ressourcencode.
- [bare-devcontainer/templates](https://github.com/bare-devcontainer/templates/tree/main/src/terraform) - Sicherheitsorientierter Terraform-Dev-Container mit terraform-ls und cachefreundlichem Neuaufbau. Das Basis-Image ist unter [bare-devcontainer/images](https://github.com/bare-devcontainer/images/tree/main/terraform) verfügbar.
- [blast radius](https://github.com/28mm/blast-radius) - Interaktive Visualisierungen von Terraform-Abhängigkeitsgraphen. :skull:
- [cf-terraforming](https://github.com/cloudflare/cf-terraforming) - Kommandozeilenprogramm zur Unterstützung beim Terraformieren Ihrer vorhandenen Cloudflare-Ressourcen.
- [cfnctl](https://github.com/rogerwelin/cfnctl) - Cfnctl bringt das Terraform-CLI-Erlebnis zu AWS CloudFormation.
- [Checkov](https://github.com/bridgecrewio/checkov/) - Statisches Analysetool für Terraform ab Version 0.12.
- [cloud-audit](https://github.com/gebalamariusz/cloud-audit) - AWS-Sicherheitsprüfungs-CLI mit Behebungsmodul, das Terraform-Code zum Korrigieren von Fehlkonfigurationen erzeugt.
- [CloudBurn](https://github.com/towardsthecloud/cloudburn) - Prüfungen von AWS-Kostenrichtlinien für Terraform und CloudFormation in CI und Live-AWS-Konten.
- [Coder](https://coder.com/) - Coder stellt mithilfe von Terraform Softwareentwicklungsumgebungen auf Ihrer Infrastruktur bereit.
- [coretech/terrafile](https://github.com/coretech/terrafile) - Systematische Verwaltung externer Module von GitHub zur Verwendung mit Terraform (in Go geschrieben). :skull:
- [Cynative](https://github.com/cynative/cynative) - Open-Source-Framework für Sicherheitsagenten zur Überprüfung von Terraform-Konfigurationen und zur Untersuchung laufender Infrastruktur über schreibgeschützte Cloud-APIs.
- [Datadef](https://datadef.io/repo-to-diagram) - Erzeugt Architekturdiagramme und Dokumentation aus einem Terraform-Repository: analysiert `.tf`-Dateien, ohne `terraform init` auszuführen oder den State zu lesen, stellt Module als Zonen mit Umgebungsanzahl dar und synchronisiert täglich neu. :heavy_dollar_sign:
- [demonolith](https://github.com/schrieksoft/demonolith) - Teilt monolithische Terraform-Projekte mit `demonolith refactor` (zum Verschieben des Codes) und `demonolith migrate` (zur Migration in kleinere .tfstate-Dateien) auf.
- [driftctl](https://github.com/snyk/driftctl) - Erkennt und verfolgt Infrastrukturabweichungen und meldet sie. :skull:
- [drifthound](https://github.com/drifthoundhq/drifthound) - Kontinuierliche Erkennung von Infrastrukturabweichungen mit Verlauf und Benachrichtigungen.
- [dxw/terrafile](https://github.com/dxw/terrafile) - Systematische Verwaltung externer Module von GitHub zur Verwendung mit Terraform (in Ruby geschrieben).
- [flora](https://github.com/ketchoop/flora) - Versionsmanager für Terraform.
- [fogg](https://github.com/chanzuckerberg/fogg) - Tool zur Beseitigung manueller Routinearbeit bei der Verwaltung von Terraform-Repositories.
- [former2](https://github.com/iann0036/former2) - Erzeugt Terraform-Konfigurationen aus vorhandenen Ressourcen in Ihrem AWS-Konto.
- [fuzzy-terraform-rm](https://github.com/paololazzari/fuzzy-terraform-rm) - Kommandozeilenprogramm mit Fuzzy-Suche zum Entfernen von Ressourcen aus dem Terraform-State.
- [gaia](https://github.com/gaia-app/gaia) - Gaia ist eine Terraform-🌍-Benutzeroberfläche für Ihre Module und eine Self-Service-Infrastruktur 👨‍💻. :skull:
- [hcl2json](https://github.com/tmccombs/hcl2json) - Konvertiert HCL2 in JSON.
- [hcldump](https://github.com/magodo/hcldump) - Gibt den abstrakten Syntaxbaum von HCL (v2) aus.
- [hcledit (mercari)](https://github.com/mercari/hcledit) - Go-Paket zum Bearbeiten von HCL-Konfigurationen.
- [hcledit (minamijoyo)](https://github.com/minamijoyo/hcledit) - Kommandozeileneditor für HCL.
- [hclgrep](https://github.com/magodo/hclgrep) - Syntaxbasiertes grep für HCL (v2).
- [hq](https://github.com/miller-time/hq) - Kommandozeilenprozessor für HCL.
- [iam-policy-json-to-terraform](https://github.com/flosell/iam-policy-json-to-terraform) - Kleines Tool zur Konvertierung einer IAM-Richtlinie im JSON-Format in ein Terraform-aws_iam_policy_document.
- [Infracost](https://github.com/infracost/infracost) - Kostenschätzungen für die Cloud für Terraform in Ihrer CLI und in Pull Requests.
- [inframap](https://github.com/cycloidio/inframap) - Liest Ihren tfstate oder HCL-Code ein und erstellt ein Diagramm für den jeweiligen Provider, das nur die wichtigsten/relevantesten Ressourcen zeigt.
- [InfraScan](https://infrascan.soldevelo.com) - Erweiterter Infrastruktur-Auditor für Kosten- und Sicherheitsanalysen von Terraform, AWS und Kubernetes.
- [InfraSketch](https://infrasketch.cloud) - Kostenloses browserbasiertes Tool zur Visualisierung von Terraform-HCL und Docker Compose als Architekturdiagramme. Unterstützt AWS und Azure. Keine Anmeldung und keine Zugangsdaten erforderlich.
- [json2hcl](https://github.com/kvz/json2hcl) - Konvertiert JSON in HCL und umgekehrt. :ghost:
- [k2tf](https://github.com/sl1pm4t/k2tf) - Konverter von Kubernetes-YAML in Terraform-HCL.
- [Kapitan](https://github.com/kapicorp/kapitan) - Erzeugt Terraform-/OpenTofu-JSON und weitere Infrastrukturkonfigurationen aus inventargesteuerten Vorlagen.
- [KICS](https://github.com/Checkmarx/kics) - Durchsucht IaC-Projekte nach Sicherheitslücken, Compliance-Problemen und Fehlkonfigurationen der Infrastruktur. Unterstützt derzeit Terraform-Projekte, Kubernetes-Manifeste, Dockerfiles, AWS-CloudFormation-Vorlagen und Ansible-Playbooks.
- [layerform](https://github.com/briefercloud/layerform) - Layerform unterstützt Entwickler dabei, mit einfachen .tf-Dateien wiederverwendbare Umgebungs-Stacks zu erstellen. Ideal für mehrere „Staging“-Umgebungen. :skull:
- [library.tf](https://library.tf) - Library.tf wurde nicht nur entwickelt, um Registry-Informationen zu Terraform und OpenTofu bereitzustellen, sondern auch alle Einblicke, die Sie für Entscheidungen benötigen. Finden Sie schnell unterstützte und gepflegte, nicht fehleranfällige Module oder Provider.
- [modules.tf-lambda](https://github.com/antonbabenko/modules.tf-lambda) - Generator für Infrastruktur als Code, der visuelle Diagramme von [Cloudcraft.co](https://cloudcraft.co) in Terraform umwandelt.
- [para](https://github.com/paraterraform/para) - Der fehlende Plugin-Manager von Drittanbietern und ein „Schweizer Taschenmesser“ für Terraform/Terragrunt — ein einziges Tool für alle Workflows. :skull:
- [pike](https://github.com/jamesWoolfenden/pike) - Pike berechnet die Berechtigungen oder IAM-Richtlinie, die zum Erstellen Ihrer Terraform-Konfiguration erforderlich sind.
- [pipeform](https://github.com/magodo/pipeform) - Terraform-Laufzeit-TUI.
- [platform-skills](https://github.com/nitinjain999/platform-skills) - KI-gestütztes Praxis-Handbuch für Terraform: Überprüfung minimaler IAM-Berechtigungen, Analyse des Wirkungsbereichs, Auswirkungen auf den State, Provider-Einschränkungen und Rollback-Planung. Funktioniert als Plugin für Claude, Codex, Cursor und Copilot.
- [pluralith](https://www.pluralith.com/) - Visualisierung des Terraform-States und automatisierte Erstellung von Infrastruktur-Dokumentation. :heavy_dollar_sign:
- [pre-commit-terraform](https://github.com/antonbabenko/pre-commit-terraform) - pre-commit-Git-Hooks für Terraform und Terragrunt: automatisch formatieren, validieren, Dokumentation aktualisieren, Sicherheitsprüfungen ausführen, Kosten schätzen und mehr.
- [pretf](https://github.com/raymondbutcher/pretf) - Direkt einsetzbarer Terraform-Wrapper, der Terraform-Konfiguration mit Python erzeugt. Siehe [pretf-Dokumentation](https://pretf.readthedocs.io/en/latest/). :skull:
- [prettyplan for TF 0.12+](https://github.com/cloudandthings/terraform-pretty-plan) - Prettyplan für TF 0.12+ ([hier online verfügbar](https://cloudandthings.github.io/terraform-pretty-plan/)) ist ein kleines Tool, mit dem sich große Terraform-Pläne mühelos anzeigen lassen.
- [prettyplan](https://github.com/chrislewisdev/prettyplan) - Prettyplan ([hier online verfügbar](https://chrislewisdev.github.io/prettyplan/)) ist ein kleines Tool, mit dem sich große Terraform-Pläne mühelos anzeigen lassen. :ghost:
- [pug](https://github.com/leg100/pug) - Die Terminal-Benutzeroberfläche für Terraform-Power-User.
- [pytest-terraform](https://github.com/cloud-custodian/pytest-terraform) - pytest-Terraform-Plugin mit Fixtures und Unterstützung für Offline-Wiedergabe.
- [python-terrafile](https://github.com/claranet/python-terrafile) - Systematische Verwaltung externer Module von GitHub zur Verwendung mit Terraform.
- [regula](https://github.com/fugue/regula) - Wertet Terraform-Infrastruktur-als-Code vor der Bereitstellung auf mögliche Sicherheitsfehlkonfigurationen und Compliance-Verstöße für AWS, Azure und Google Cloud aus.
- [redc](https://github.com/wgpsec/redc) - In Terraform entwickeltes Infrastrukturautomatisierungstool der nächsten Generation für Red Teams. Unterstützt Multi-Cloud-Bereitstellungen (Alibaba Cloud, Tencent Cloud, AWS usw.) sowie die Erstellung, Konfiguration und Zerstörung von Red-Team-Umgebungen mit einem einzigen Befehl.
- [renovate-config](https://github.com/SpotOnInc/renovate-config) - Teilbare Konfigurationsvoreinstellungen für Renovatebot, besonders nützlich für DevOps-Teams.
- [Riftmap](https://riftmap.dev) - Repositoryübergreifende Abhängigkeits- und Auswirkungsanalyse: durchsucht Infrastruktur über mehrere Repositories hinweg nach Terraform, Docker, Helm und mehr, um Abhängigkeiten und mögliche Folgen von Änderungen sichtbar zu machen.
- [rover](https://github.com/im2nguyen/rover) - Interaktiver Explorer für Terraform-State und -Konfiguration.
- [ruby-terraform](https://github.com/infrablocks/ruby_terraform) - Einfacher Ruby-Wrapper zum Aufrufen von Terraform-Befehlen.
- [sato](https://github.com/JamesWoolfenden/sato) - Sato unterstützt Sie bei der Konvertierung älterer CloudFormation-Konfigurationen in Terraform.
- [scenery](https://github.com/dmlittle/scenery) - Ein weiterer Aufbereiter für die Ausgabe von Terraform-Plänen. :ghost: :skull:
- [scratchrelaxtv](https://github.com/YakDriver/scratchrelaxtv) - Einfaches Python-Tool zur Unterstützung bei der Modulentwicklung — extrahiert Variablen aus `main.tf`, um `variables.tf` zu erzeugen, und erstellt aus `variables.tf` ein Gerüst zur Modulverwendung.
- [serverless.tf - Doing serverless with Terraform](https://serverless.tf/) - serverless.tf ist ein meinungsstarkes Open-Source-Framework zum Entwickeln, Erstellen, Bereitstellen und Absichern serverloser Anwendungen und Infrastrukturen auf AWS mit Terraform. [Mehr erfahren](https://github.com/antonbabenko/serverless.tf).
- [Shieldly](https://github.com/shieldly-io/cli) - KI-gestützte Sicherheitsanalyse von mit Terraform erzeugten IAM-Richtlinien und CloudFormation. Erklärt, warum eine Berechtigung riskant ist und wie sie sich beheben lässt. Kostenloser Tarif, CLI und GitHub Action.
- [Shisho](https://github.com/flatt-security/shisho) - Leichtgewichtiger statischer Analysator für Terraform.
- [Speakeasy](https://www.speakeasy.com/) - Erzeugt einen Terraform-Provider aus einer OpenAPI-Spezifikation.
- [stacks](https://github.com/cisco-open/stacks) - Stacks, der Terraform-Code-Präprozessor.
- [SyncVey](https://github.com/MR-TABATA/SyncVey) - Self-gehostetes AWS-Asset-Register mit Erkennung von Abweichungen auf Attributebene zwischen tfstate und Live-AWS-State, geplanten Scans und Warnungen zum Supportende von Middleware.
- [tads-boilerplate](https://github.com/Thomvaill/tads-boilerplate) - Die Leistungsfähigkeit von Ansible und Terraform + die Einfachheit von Docker Swarm = Infrastruktur als Code und bewährte DevOps-Verfahren.
- [tau](https://github.com/avinor/tau) - Tau ist ein schlanker Wrapper um Terraform zur Verwaltung mehrerer Bereitstellungen, Abhängigkeiten und Secrets. :skull:
- [tenv](https://github.com/tofuutils/tenv) - Versionsmanager für OpenTofu/Terraform/Terragrunt.
- [terraboard](https://github.com/camptocamp/terraboard) - Web-Dashboard zur Prüfung von Terraform-States.
- [terraboot](https://github.com/MastodonC/terraboot) - DSL zum Erzeugen und Ausführen einer Terraform-Konfiguration.
- [terracognita](https://github.com/cycloidio/terracognita) - Liest bestehende Cloud-Provider aus (Reverse Terraform) und erzeugt daraus Infrastruktur als Code in einer Terraform-Konfiguration.
- [terracost](https://github.com/cycloidio/terracost) - Kostenschätzung für die Cloud für Terraform in Ihrer CLI.
- [terracove](https://elementtech.github.io/terracove/) - Testet rekursiv einen Verzeichnisbaum auf Terraform-Diffs und Testabdeckung.
- [TerraDepot](https://github.com/derBroBro/TerraDepot) - Terraform-State-Repository auf Grundlage des standardmäßigen HTTP-Remote-Backends. Ermöglicht die zentrale Verwaltung von tfstates auf AWS S3.
- [TerraDrift](https://github.com/niravraychura/terradrift) - Self-gehostete Terraform-/OpenTofu-CLI zur Erkennung von Abweichungen für CI und cron (planbasiert; kein Inventar nicht verwalteter Ressourcen).
- [terradozer](https://github.com/chenrui333/terradozer) - Terraform destroy ohne Konfigurationsdateien.
- [terraeasy](https://github.com/jaceq/terraeasy) - Einfacher Terraform-Wrapper.
- [terraform-ai-skills](https://github.com/anmolnagpal/terraform-ai-skills) - KI-gestützter Skill für GitHub Copilot, Claude und ChatGPT, der die Massenverwaltung von Terraform-Modulen automatisiert — Provider-Upgrades, Standardisierung von Workflows und Releases über 10–200+ Repositories auf AWS, GCP, Azure und DigitalOcean hinweg.
- [terraform-aws-clickops-notifier](https://github.com/cloudandthings/terraform-aws-clickops-notifier) - Lassen Sie sich benachrichtigen, wenn Aktionen in der AWS Console ausgeführt werden.
- [terraform-bundle](https://github.com/hashicorp/terraform/tree/main/tools/terraform-bundle) - Erstellt mühelos Pakete mit einer Terraform-Binärdatei und Provider-Binärdateien. Nützlich für CI und air-gapped Terraform Enterprise.
- [terraform-cdk](https://github.com/hashicorp/terraform-cdk) - CDK (Cloud Development Kit) für Terraform ermöglicht Entwicklern, vertraute Programmiersprachen zum Definieren von Cloud-Infrastruktur zu verwenden und diese über HashiCorp Terraform bereitzustellen.
- [terraform-cleaner](https://github.com/sylwit/terraform-cleaner) - Kleines Hilfsprogramm, das ungenutzte Variablen in Terraform-Modulen erkennt.
- [terraform-credentials-vault](https://github.com/oulman/terraform-credentials-vault) - Ein Terraform-Plugin zur Unterstützung von Anmeldedaten, mit dem sich über Umgebungsvariablen Zugangsdaten für native Terraform-Dienste (private Modul-Registries, Terraform Cloud usw.) bereitstellen lassen.
- [terraform-diff](https://github.com/contentful-labs/terraform-diff) - Finden Sie immer heraus, wo Sie Terraform plan und apply ausführen müssen!
- [terraform-docs](https://github.com/terraform-docs/terraform-docs) - Ein einfaches Hilfsprogramm zum Erzeugen von Dokumentation aus Terraform-Modulen.
- [terraform-graph-beautifier](https://github.com/pcasteran/terraform-graph-beautifier) - Kommandozeilenprogramm, das die kaum brauchbare Ausgabe des Befehls terraform graph in eine aussagekräftigere und verständlichere Darstellung umwandelt.
- [terraform-iam-policy-validator](https://github.com/awslabs/terraform-iam-policy-validator) - CLI zur Prüfung von AWS-IAM-Richtlinien in einer Terraform-Vorlage anhand der bewährten Vorgehensweisen für AWS IAM.
- [terraform-landscape](https://github.com/coinbase/terraform-landscape) - *(nur 0.11 und früher)* Verbessert die Ausgabe von Terraform-Plänen, damit sie leichter lesbar und verständlich ist.
- [terraform-operator](https://github.com/GalleyBytes/terraform-operator) - Eine Kubernetes-CRD zur Verwaltung von Terraform-Vorgängen.
- [terraform-plan-parser](https://github.com/lifeomic/terraform-plan-parser) - Kommandozeilenprogramm und JavaScript-API, die die Standardausgabe von `terraform plan` analysieren und in JSON umwandeln. :ghost:
- [terraform-provisioner](https://github.com/shuaibiyy/terraform-provisioner) - Tool zur Verwaltung mehrerer Bereitstellungen derselben Terraform-Skripte.
- [terraform-rake-tasks](https://github.com/gina-alaska/terraform-rake-tasks) - Gemeinsam verwendbare Rake-Aufgaben zur Verwaltung von Terraform-Plänen.
- [terraform-repl](https://github.com/paololazzari/terraform-repl) - Wrapper für die Terraform-Konsole für eine bessere interaktive Konsolenerfahrung.
- [Terraform-Visual](https://github.com/hieven/terraform-visual) - Ein einfaches, aber leistungsstarkes Tool zur Visualisierung von Terraform-Plänen.
- [terravision](https://github.com/patrickchugh/terravision) - Erzeugt professionelle Cloud-Architekturdiagramme aus Terraform-Code mit offiziellen AWS-/Azure-/GCP-Symbolen und Designstandards. Läuft vollständig clientseitig und unterstützt CI/CD-Integration.
- [terraform.py](https://github.com/mantl/terraform.py) - Dynamisches Ansible-Inventarskript zum Auslesen von Terraform-State-Dateien. :skull:
- [terraformer](https://github.com/chenrui333/terraformer) - CLI-Tool zum Erzeugen von Terraform-Dateien aus bestehender Infrastruktur. Infrastruktur wird zu Code. Unterstützt zahlreiche Provider.
- [terraforming](https://github.com/dtan4/terraforming) - Exportiert bestehende AWS-Ressourcen in das Terraform-Format (tf, tfstate). Ähnlich wie `terraformer`. :skull:
- [terraformize](https://github.com/naorlivne/terraformize) - Terraform-Module über einen einfachen REST-API-Endpunkt anwenden/zerstören. :skull:
- [terraformsh](https://github.com/pwillis-els/terraformsh) - Bash-Wrapper für eine einfachere CLI-Benutzererfahrung und DRY-hierarchische Konfigurationen.
- [terragrunt-atlantis-config](https://github.com/transcend-io/terragrunt-atlantis-config) - Erzeugt die Atlantis-Konfiguration für Terragrunt-Projekte.
- [terragrunt](https://github.com/gruntwork-io/terragrunt) - Terragrunt ist ein schlanker Wrapper für Terraform mit zusätzlichen Tools, um Terraform-Konfigurationen DRY zu halten, mit mehreren Terraform-Modulen zu arbeiten und Remote State zu verwalten.
- [terrahelp](https://github.com/opencredo/terrahelp) - Kommandozeilenprogramm mit Zusatzfunktionen, die bei der Arbeit mit Terraform gelegentlich nützlich sein können.
- [terrahub](https://github.com/tfxor/terrahub) - TerraHub ist ein Automatisierungs- und Orchestrierungstool für Terraform. Es ist nahtlos in console.terrahub.io integriert, eine unternehmenstaugliche GUI zur Anzeige von Terraform-Ausführungen in Echtzeit sowie zur Prüfung und Berichterstellung für frühere Terraform-Läufe. :heavy_dollar_sign:
- [terramagic](https://github.com/miltlima/terramagic) - Assistent zum automatischen Erstellen von Ordnern und Terraform-Dateien, geschrieben in Python!
- [terramate](https://github.com/terramate-io/terramate) - Tool zur Verwaltung mehrerer Terraform-Stacks mit Unterstützung für Änderungserkennung und Codegenerierung.
- [terrap-cli](https://github.com/sirrend/terrap-cli) - Leistungsstarkes CLI-Tool, das Ihre Infrastruktur durchsucht und erforderliche Änderungen erkennt.
- [terrars](https://github.com/andrewbaxter/terrars) - Terrars ist ein Tool zum Erstellen von Terraform-Stacks in Rust. Eine Alternative zum CDK.
- [terrascan](https://github.com/tenable/terrascan) - Sammlung von Tests für Sicherheits- und Best-Practice-Prüfungen zur statischen Codeanalyse von Terraform-Vorlagen.
- [terrascope](https://github.com/spilliams/terrascope) - Build-Orchestrator für Terraform-Monorepos.
- [terrashine](https://isawan.github.io/terrashine/) - Implementierung eines Terraform-Provider-Mirrors, der Abhängigkeiten automatisch zwischenspeichert, sobald Provider angefordert werden.
- [terraspace](https://terraspace.cloud) - Das Terraform-Framework.
- [terrastate](https://github.com/rohinivsenthil/terrastate) - Visual-Studio-Code-Erweiterung zum Überwachen/Bereitstellen/Zerstören von Terraform-Ressourcen im Arbeitsbereich.
- [terratag](https://github.com/env0/terratag) - Terratag ist ein CLI-Tool, mit dem Terraform-Nutzer Tags für alle ihre AWS-, Azure- und GCP-Ressourcen automatisch erstellen und pflegen können.
- [tf-init-booster](https://github.com/hayorov/terraform-init-booster) - Vor Terraform ausgeführte Routine, die das Herunterladen von Terraform-Modulen für umfangreiche Blueprints beschleunigt.
- [tf-profile](https://github.com/datarootsio/tf-profile/) - Profiler für Terraform-Ausführungen. Erzeugt globale Statistiken, Statistiken auf Ressourcenebene oder Visualisierungen.
- [tf-summarize](https://github.com/dineshba/tf-summarize) - Kommandozeilenprogramm zur Ausgabe einer Zusammenfassung des Terraform-Plans.
- [tf-why](https://github.com/Raj-glitch-max/tf.why) - CLI-Tool, das Terraform-Abweichungen anhand einer CloudTrail-Abfrage dem verantwortlichen AWS-Akteur zuordnet.
- [tfaction](https://github.com/suzuki-shunsuke/tfaction) - Sammlung von GitHub Actions für einen meinungsstarken Terraform-Workflow.
- [tfautomv](https://github.com/busser/tfautomv) - Erzeugt Terraform-`moved`-Blöcke automatisch und ermöglicht so müheloses Refactoring.
- [tfcmt](https://github.com/suzuki-shunsuke/tfcmt) - CLI zum Melden der Ergebnisse von plan und apply als Pull-Request-Kommentar.
- [tfedit](https://github.com/minamijoyo/tfedit) - Refactoring-Tool für Terraform.
- [tfenv](https://github.com/tfutils/tfenv) - Von rbenv inspirierter Versionsmanager für Terraform.
- [tfgen](https://github.com/0xDones/tfgen) - Terraform-Codegenerator für eine konsistente Codebasis und DRY-Code.
- [tfgpt](https://github.com/flavius-dinu/tfgpt) - CLI-Tool, das Terraform mit OpenAIs GPT-3.5 Turbo integriert, um Erklärungen zu Terraform-Befehlen und -Konzepten bereitzustellen.
- [tfimport](https://github.com/coolapso/tfimport) - CLI-Tool zur Automatisierung des Imports vorhandener Infrastruktur in tfstate.
- [tfjson](https://github.com/palantir/tfjson) - Hilfsprogramm zum Einlesen einer Terraform-Plan-Datei und Ausgeben als JSON. :skull:
- [tfk8s](https://github.com/jrhouston/tfk8s) - Tool zum Konvertieren von Kubernetes-YAML-Manifesten in Terraform-HCL.
- [tflint](https://github.com/terraform-linters/tflint) - Terraform-Linter zum Erkennen von Fehlern, die `terraform plan` nicht erkennen kann.
- [tfmake](https://github.com/tfmake/tfmake) - Automatisierung von Terraform mit der Leistungsfähigkeit von make.
- [tfmask](https://github.com/cloudposse-archives/tfmask) - Terraform-Hilfsprogramm zum Maskieren ausgewählter Ausgaben von `terraform plan` und `terraform apply`. :skull:
- [tfmigrate](https://github.com/minamijoyo/tfmigrate) - Terraform-State-Migrationstool für GitOps.
- [tfmigrator](https://github.com/tfmigrator/cli) - Go-Bibliothek und CLI zur Migration von Terraform-Konfiguration und -State.
- [tfmodcache](https://github.com/Rezarys/tfmodcache) - Lokaler, gemeinsam genutzter Modul-Cache für Terraform und OpenTofu; `terraform init` lädt bereits vorhandene Module nicht erneut herunter. Ich bin der Autor.
- [tfmv](https://github.com/suzuki-shunsuke/tfmv) - Benennt Terraform-Ressourcen um und erzeugt moved-Blöcke.
- [tfocus](https://github.com/nwiizo/tfocus) - tfocus ist ein hochinteraktives Tool zum Auswählen und Ausführen von Terraform plan/apply für bestimmte Ressourcen. Als „Notfallwerkzeug“ gedacht — nicht für den täglichen Einsatz.
- [tfprovidercheck](https://github.com/suzuki-shunsuke/tfprovidercheck) - CLI, die verhindert, dass schädliche Terraform-Provider ausgeführt werden.
- [tfproviderlint](https://github.com/bflad/tfproviderlint) - Lint-Tool für Terraform-Provider.
- [tfrepl](https://github.com/ysoftwareab/tfrepl) - Eine Terraform-REPL mit umfassender Shell-Erfahrung. Basiert auf Readline. Keine Abhängigkeiten. Konfigurationsänderungen speichern. Verlauf.
- [tfreveal](https://github.com/breml/tfreveal) - Terraform-Hilfsprogramm zur Anzeige von Terraform-Plänen mit offengelegten Secret- (sensiblen) Werten.
- [tfscaffold](https://github.com/tfutils/tfscaffold) - Framework zur Steuerung von Terraform-verwalteter AWS-Infrastruktur mit mehreren Umgebungen und Komponenten.
- [tfschema](https://github.com/minamijoyo/tfschema) - Schema-Inspektor für Terraform-Provider.
- [tfsec](https://github.com/aquasecurity/tfsec) - Statisches Analysetool für Terraform, das terraform <0.12 und >=0.12 unterstützt und für bessere Ergebnisse direkt in den HCL-Parser integriert ist.
- [tfsort](https://github.com/AlexNabokikh/tfsort) - CLI-Hilfsprogramm zum Sortieren von Terraform-Variablen und -Ausgaben.
- [tftarget](https://github.com/future-architect/tftarget) - Interaktives CLI-Tool zum Ausführen von `terraform xxx -target={...}`.
- [tftree](https://github.com/busser/tftree) - Zeigt den Aufrufstapel Ihrer Terraform-Module im Terminal an.
- [tftui](https://github.com/idoavrah/terraform-tui) - Textbasierte Benutzeroberfläche für Terraform-State.
- [tfupdate](https://github.com/minamijoyo/tfupdate) - Aktualisiert Versionsbeschränkungen in Ihren Terraform-Konfigurationen.
- [tfvar](https://github.com/shihanng/tfvar) - tfvar durchsucht Ihre Terraform-Konfigurationen oder -Module und extrahiert Variablen in Formate Ihrer Wahl (tfvar, Umgebungsvariablen usw.) zur Bearbeitung.
- [tfvault](https://github.com/tedilabs/tfvault) - Universeller Terraform-Helfer für Zugangsdaten mit austauschbaren Secret-Backends (OS-Schlüsselbund, pass/gopass, Umgebungsvariablen) und Kontentrennung je Profil.
- [tfvaultenv](https://github.com/oulman/tfvaultenv) - tfvaultenv liest Secrets aus HashiCorp Vault und gibt für verschiedene Terraform-Provider Umgebungsvariablen mit diesen Secrets aus.
- [tfwrapper](https://github.com/manheim/tfwrapper) - RubyGem mit Rake-Aufgaben zur vernünftigen Ausführung von HashiCorp Terraform.
- [tfmcp](https://github.com/nwiizo/tfmcp) - CLI-Tool für die Interaktion mit Terraform über das Model Context Protocol (MCP), mit dem KI-Assistenten wie Claude Terraform-Umgebungen verwalten und betreiben können.
- [tgf](https://github.com/coveooss/tgf) - Terragrunt-Frontend zur Ausführung von Terragrunt/Terraform über Docker.
- [threatcl](https://github.com/threatcl/threatcl) - Dokumentation von Bedrohungsmodellen mit HCL.
- [tofuenv](https://github.com/tofuutils/tofuenv) - Von tfenv inspirierter Versionsmanager für OpenTofu.
- [tpm](https://github.com/Madh93/tpm) - Paketmanager für Terraform-Provider.
- [travelgrunt](https://github.com/ivanilves/travelgrunt) - Wechseln Sie ohne Ermüdung in [Mono-]Repos!
- [trupositive](https://github.com/trupositive-ai/trupositive) - Wrapper ohne Konfiguration, der Git-Metadaten (Commit-SHA, Branch, Repository) automatisch in alle mit Terraform verwalteten Ressourcen einfügt.
- [validIaC](https://github.com/gofireflyio/validiac) - ValidIaC vereint die besten Open-Source-Tools, um Terraform-Best-Practices, Codehygiene und Sicherheit sicherzustellen.
- [xterrafile](https://github.com/devopsmakers/xterrafile) - Systematische Verwaltung externer Module aus der Modul-Registry, aus Git oder lokalen Verzeichnissen zur Verwendung mit Terraform (in Go geschrieben). :skull:
- [yj](https://github.com/sclevine/yj) - CLI zum Konvertieren zwischen YAML, TOML, JSON und HCL. Die Reihenfolge von Maps bleibt erhalten.
- [yor](https://github.com/bridgecrewio/yor) - Markiert und verfolgt Infrastruktur-als-Code-Frameworks (Terraform, CloudFormation und Serverless) automatisch.
- [zephy](https://github.com/henrybravo/zephy) - Vergleicht in einem Abonnement bereitgestellte Azure-Ressourcen mit den von Terraform-Enterprise- (HCP- und Self-hosted-)Workspaces verwalteten Ressourcen, wenn die Tagging-Strategie Ihrer Cloud nicht ausreicht.

### CI

- [opentofu-updater-action](https://github.com/drumandbytes/opentofu-updater-action) - GitHub Action, die OpenTofu-/Terraform-Provider, -Module, Helm-Charts und Container-Images aktuell hält, indem sie Pull Requests erstellt.
- [setup-terraform](https://github.com/hashicorp/setup-terraform) - Richtet die Terraform-CLI in Ihrem GitHub-Actions-Workflow ein.
- [terraform-plan](https://github.com/cds-snc/terraform-plan) - GitHub Action zum Ausführen von Terraform plan und Hinzufügen eines Kommentars mit den Änderungen.
- [terraform-risk-assessor](https://github.com/Liam-Johnston/terraform-risk-assessor) - GitHub Action, die Änderungen eines Terraform-Plans mit KI analysiert und Pull Requests mit einer Risikobewertung kommentiert.

### VS-Code-Erweiterungen

- [HashiCorp Terraform](https://marketplace.visualstudio.com/items?itemName=hashicorp.terraform)
- [vscode-terraform-live-graph](https://github.com/adamiBs/vscode-terraform-live-graph) - Die Terraform Live Graph Extension für Visual Studio Code ist ein Plugin, mit dem sich beim Programmieren ein aktueller Terraform-Graph erzeugen lässt.
- [tf-nav](https://marketplace.visualstudio.com/items?itemName=owenrumney.tf-nav) - Terraform-Navigationserweiterung, die einen Dateityp-Index der Ressourcen als einfach navigierbare Baumansicht erstellt.

## Bibliotheken

- [hcl-rs](https://github.com/martinohmann/hcl-rs) - HCL-Parsing- und Kodierungsbibliotheken für Rust mit Serde-Unterstützung.
- [hcl4j](https://github.com/wondrify/hcl4j) - HCL-Parser in Java.
- [nu_plugin_hcl](https://github.com/Yethal/nu_plugin_hcl) - HCL-Parser-Plugin für [Nushell](https://github.com/nushell/nushell).
- [pyhcl](https://github.com/virtuald/pyhcl) - HCL-Parser in Python.
- [python-hcl2](https://github.com/amplify-education/python-hcl2/) - HCL2-Parser in Python.
- [rhcl](https://github.com/winebarrel/rhcl) - Reiner Ruby-HCL-Parser. :skull:
- [tree-sitter-hcl](https://github.com/tree-sitter-grammars/tree-sitter-hcl) - HCL-Grammatik für tree-sitter.

## Vorlagen

- [Solo-Engineer Stack](https://github.com/sarmakska/terraform-stack) - Einzelnes Terraform-Repository, das Vercel + Supabase + Cloudflare + DigitalOcean zu einer Indie-SaaS-Plattform verbindet. Ein `terraform apply` stellt ein Next.js-Projekt, ein Supabase-Projekt mit an Vercel übergebenen Umgebungsvariablen, eine Cloudflare-Zone mit R2 und Workers KV sowie ein DigitalOcean-Droplet mit Monitoring bereit.
- [Terraform Generator](https://github.com/sudokar/generator-tf-module) - Gerüst für ein neues Terraform-Modul oder -Projekt mit Unterstützung für Test-Frameworks (terratest und kitchen-terraform).
- [Terraform GitOps Framework](https://www.kubestack.com) - Alles, was Sie benötigen, um zuverlässige Automatisierung für Kubernetes-Cluster auf AKS, EKS und GKE in einem kostenlosen Open-Source-Framework zu erstellen.

## Selbst gehostete Terraform-Plattformen

- [Snap CD](https://github.com/schrieksoft/snapcd) - Voll ausgestattete Continuous-Deployment-Plattform für modulare Bereitstellungen mit isolierten Runnern, abhängigkeitssensitiver Automatisierung und feingranularer Zugriffskontrolle.
- [Lynx](https://github.com/clivern/lynx) - Schnelles, sicheres und zuverlässiges Terraform-Backend. Es bietet ein benutzerfreundliches Dashboard, Projekt- und Umgebungsverwaltung, State-Versionierung sowie Unterstützung für Sperren und Snapshots.
- [OTF](https://github.com/leg100/otf) - Open Terraforming Framework, eine Open-Source-Alternative zu Terraform Enterprise mit vollständiger Terraform-CLI-Integration.
- [Terrakube](https://docs.terrakube.io) - Open-Source-Alternative zu Terraform Enterprise mit privater Registry, Remote State, benutzerdefinierten Abläufen, geplanten Workspaces und visuellen States.
- [Digger](https://digger.dev) - Open-Source-Alternative zu Terraform Cloud — führt Terraform-plan- und -apply-Aufträge in Ihrer CI aus.
- [cloud-concierge](https://github.com/dragondrop-cloud/cloud-concierge) - Quelloffene Lösung: Nicht verwaltete Ressourcen als Terraform-Code abbilden, Abweichungen erkennen und Cloud-Kosten sowie Sicherheit analysieren — bereitgestellt als Pull Request.
- [Stack-Lifecycle-Deployment](https://github.com/D10S0VSkY-OSS/Stack-Lifecycle-Deployment) - Open-Source-Lösung zur Definition und Verwaltung des vollständigen Lebenszyklus von in einer Cloud verwendeten und bereitgestellten Ressourcen.
- [Burrito](https://github.com/padok-team/burrito) - TACoS-Kubernetes-Operator – „ArgoCD für Terraform“.
- [Terrateam](https://terrateam.io) - Open-Source-Alternative zu Terraform Cloud/Enterprise, GitOps-orientiert mit nativer GitHub-Integration und für Skalierbarkeit, Sicherheit und Zuverlässigkeit entwickelt.


## Verwaltete Terraform-Plattformen :heavy_dollar_sign:

- [compliance.tf](https://compliance.tf) - Terraform-Module mit integrierten SOC-2-, PCI-DSS-, HIPAA-, NIST-800-53- und mehr als 35 weiteren Frameworks. Nicht konforme Konfigurationen scheitern bei `terraform plan`, bevor etwas angewendet wird. :heavy_dollar_sign:
- [ControlMonkey](https://www.controlmonkey.io/) - Alternative zu Terraform Cloud mit Terraform-/OpenTofu-Codegenerierung, Cloud-Inventar und IaC-Abdeckung. Enthält sofort einsatzbereite Richtlinien, Behebung von Abweichungen und einen ClickOps-Aktivitätsscanner. :heavy_dollar_sign:
- [Firefly](https://www.firefly.ai/) - Alternative zu Terraform Cloud, die Ihr CI-Tool nutzt. Die Firefly-Plattform durchsucht außerdem Ihre Cloud, um die IaC-Abdeckung und Abweichungen zu ermitteln. :heavy_dollar_sign:
- [Scalr](https://www.scalr.com/) - Alternative zu Terraform Enterprise mit OPA-Integration, Organisationsstruktur, benutzerdefinierten Hooks, nativen Integrationen mit anderen DevOps-Plattformen und zentraler Berichterstellung. :heavy_dollar_sign:
- [Stategraph](https://stategraph.com) - Terraform und OpenTofu ohne Engpass durch State-Dateien. Ersetzt die flache State-Datei durch eine echte Datenbank. Teams können parallel Pläne erstellen, der State ist per SQL abfragbar und Pläne laufen in Sekunden statt Minuten. :heavy_dollar_sign:
- [env0](https://www.env0.com/) - Alternative zu Terraform Cloud/Enterprise mit OPA-Integration, benutzerdefinierten Abläufen und Terragrunt-Unterstützung. :heavy_dollar_sign:
- [Brainboard](https://www.brainboard.co) - Moderne Cloud-Infrastrukturen visuell entwerfen, bereitstellen und verwalten — für beliebige Cloud-Anbieter wie AWS, GCP und Azure. :heavy_dollar_sign:
- [Spacelift](https://spacelift.io/) - Alternative zu Terraform Cloud/Enterprise. Plattform für die gemeinsame Bereitstellung von Infrastruktur mit Terraform. :heavy_dollar_sign:
- [StackGuardian](https://stackguardian.io/) - Plattform zur Kodifizierung und Orchestrierung von Infrastruktur, die vorhandene Cloud-Ressourcen in IaC umwandelt und richtliniengesteuerte Workflows mit Tirith, OPA und Checkov sowie Unterstützung für private Laufzeitumgebungen und No-Code-Vorlagen bietet. :heavy_dollar_sign:

## Tools für Terraform Enterprise

- [terraform-enterprise-cli](https://github.com/skierkowski/terraform-enterprise-cli) - Kommandozeilenschnittstelle für Terraform Enterprise.
- [terraform-enterprise-client](https://github.com/skierkowski/terraform-enterprise-client) - Terraform-Enterprise-API-Ruby-Client und Kommandozeilenprogramm.
- [terraform-enterprise-migrator](https://github.com/sil-org/tfc-ops) - Skript zur Migration von Terraform-Enterprise-Umgebungen von älteren Versionen zu einer neuen Terraform-Enterprise-Version.

## Videos

- [Your Weekly Dose of Terraform](https://www.youtube.com/channel/UCGH0yYPvlCN1VjSFMGVmFgQ) - YouTube-Kanal mit wöchentlichen Livestreams zu Terraform-Neuigkeiten, Rezensionen, Interviews, Fragen und Antworten, Live-Coding und etwas Hacking mit Terraform.
- [Terraform explained in 15 mins](https://www.youtube.com/watch?v=l5k1ai_GBDE) - Terraform in 15 Minuten erklärt.
- [Terraform Course](https://www.youtube.com/watch?v=SLB_c_ayRMo) - Automatisieren Sie Ihre AWS-Cloud-Infrastruktur.
- [How to Build Reusable, Composable, Battle tested Terraform Modules](https://www.youtube.com/watch?v=LVgP63BkhKQ) - Yevgeniy Brikman erläutert, wie Terraform-Code wiederverwendbar, zusammensetzbar und testbar wird. Der Vortrag konzentriert sich auf Terraform-Module, erklärt aber auch kurz und anschaulich, welches Problem Terraform lösen sollte, und zeigt die Grundlagen von Terraform in einer kurzen Demo (ca. 39 Min., Oktober 2017).
- [Building Scalable, Repeatable Infrastructure in the Cloud with Terraform](https://www.youtube.com/watch?v=cG7pcksTAnY) - Zeigt, wie Terraform Infrastruktur als Code ermöglicht, indem TeamCity mit einer gehosteten PostgreSQL-Datenbank auf AWS bereitgestellt wird.
- [Creating a Google Compute Instance with Terraform](https://www.youtube.com/watch?v=fo3VX33Zx0c) - Beispiel für das Erstellen einer Google-Compute-Instanz mit Terraform-Code.
- [Creating a Terraform Provider for Just About Anything](https://www.hashicorp.com/resources/creating-terraform-provider-for-anything) - In dieser Schritt-für-Schritt-Anleitung erfahren Sie, wie Sie zu einem Terraform-Provider beitragen oder einen eigenen erstellen.
- [Evolving Your Infrastructure with Terraform](https://www.youtube.com/watch?v=wgzgVm7Sqlk) - Der CTO von OpenCredo gibt einen ausführlichen Einblick in den Praxiseinsatz von Terraform anhand interessanter Anwendungsfälle.
- [Going Multi-Cloud with Terraform and Nomad](https://www.youtube.com/watch?v=e42A4aBZUkQ).
- [How to Extend the Terraform Provider List](https://www.youtube.com/watch?v=2BvpqmFpchI) - In diesem Vortrag erläutert Paul die Erstellung eines Terraform-Providers.
- [Orchestrating Containers with Terraform and Consul](https://www.infoq.com/presentations/terraform-consul/) - Mitchell Hashimoto zeigt, wie Terraform zum Bereitstellen und Skalieren containerisierter Workloads verwendet werden kann.
- [Production ChaosMonkey with Terraform](https://www.youtube.com/watch?v=CPI6W3LK0-g) - Wie DigitalOcean Terraform zum Ausführen von Integrationstests in der Produktionsumgebung einsetzt.
- [Running a Terraform Environment at Scale](https://www.youtube.com/watch?v=3JVGSq7QIS0) - Terraform in großem Maßstab mit Hunderten von AWS-Konten ausführen.
- [Setup Continuous Integration for a Terraform module](https://www.youtube.com/watch?v=vuJ6bjYKUcA) - Beispiel für den Einsatz von CI mit Kitchen-Terraform, um unser Terraform-Modul zum Erstellen einer Google-Compute-Instanz zu testen, zu taggen und zu veröffentlichen.
- [State of Terraform Providerland](https://www.youtube.com/watch?v=ar1PF5iDtbg) - Wie Terraform-Provider funktionieren und wie man einen schreibt.
- [Terraform At Scale](https://www.youtube.com/watch?v=RldRDryLiXs) - Wie Segment Terraform einsetzt.
- [Terraform w/ Lee Trout](https://www.youtube.com/watch?v=p2ESyuqPw1A) - Konzentriert sich auf Entwicklungsmuster und die effektive Strukturierung von Terraform-Code.
- [Terraforming the Composable World](https://www.youtube.com/watch?v=cHrOXPatFeg) - Terraform in eine Bereitstellung von Bare-Metal-Systemen vor Ort integrieren.
- [Test and verify a Google Compute Instance with Kitchen-Terraform](https://www.youtube.com/watch?v=kiH3-LEveek) - Beispiel für den Einsatz von Kitchen-Terraform zum Testen unseres Terraform-Codes, der eine Google-Compute-Instanz erstellt.
- [Untangling Terraform Through Refactoring](https://www.youtube.com/watch?v=OH6iDKaXpZs) - So refaktorieren Sie Ihren Terraform-Code sorgfältig und mit minimalem Risiko.
- [Complete Terraform Course - From BEGINNER to PRO! (Learn Infrastructure as Code)](https://www.youtube.com/watch?v=7xngnjfIlK4) - Vollständiger Kurs vom Einstieg bis zum Profi, ohne Fokus auf einen Cloud-Anbieter und mit einem allgemeinen Ansatz.

## Editor-Plugins

- [Emacs terraform-mode](https://github.com/hcl-emacs/terraform-mode)
- [Intellij](https://plugins.jetbrains.com/plugin/7808-terraform-and-hcl)
- [Terraform-ls](https://github.com/hashicorp/terraform-ls) (Terraform Language Server)
- [Terraform-lsp](https://github.com/juliosueiras/terraform-lsp) (Language Server Protocol for Terraform)
- [vim-hcl](https://github.com/jvirtanen/vim-hcl) - Syntaxhervorhebung für HCL.
- [Vim-Terraform-Completion](https://github.com/juliosueiras/vim-terraform-completion)
- [Vim-Terraform](https://github.com/hashivim/vim-terraform)

## Lizenz

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

Soweit gesetzlich möglich, hat Shuaib Yunus auf alle Urheberrechte und verwandten oder benachbarten Schutzrechte an diesem Werk verzichtet.
