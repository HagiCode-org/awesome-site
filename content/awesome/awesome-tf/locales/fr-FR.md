# Awesome Terraform [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) <!-- omit in toc -->

[![Link Checker](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml)
[![Misspell Check](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml)

> Une sélection de ressources consacrées à [HashiCorp Terraform](https://www.terraform.io/).
> [<img src="https://raw.githubusercontent.com/shuaibiyy/awesome-terraform/master/terraform.svg" align="right" width="100">](https://terraform.io)
> Vos [contributions](https://github.com/shuaibiyy/awesome-tf/blob/master/contributing.md) sont les bienvenues !

Terraform permet de créer, modifier et améliorer l’infrastructure de production de manière sûre et prévisible. Cet outil open source transforme les API en fichiers de configuration déclaratifs, partageables entre les membres d’une équipe, traités comme du code, modifiés, examinés et versionnés.

## Sommaire <!-- omit in toc -->

- [Légende](#legend)
- [Ressources officielles](#official-resources)
- [Communauté](#community)
- [Livres](#books)
- [Apprentissage et études](#learning-and-studying)
- [Applications](#apps)
- [Tutoriels et articles de blog](#tutorials-and-blog-posts)
  - [Guides pour débutants](#beginner-guides)
  - [Écrire des fournisseurs personnalisés](#writing-custom-providers)
  - [Guides pratiques](#how-to)
  - [Configuration multi-environnement](#multi-environment-configuration)
  - [Azure](#azure)
  - [AWS](#aws)
  - [Google Cloud](#google-cloud)
  - [Divers](#miscellaneous)
- [Modules communautaires](#community-modules)
- [Registres auto-hébergés](#self-hosted-registries)
- [Registres gérés](#managed-registries)
- [Fournisseurs](#providers)
  - [Fournisseurs pris en charge par HashiCorp](#hashicorp-supported-providers)
  - [Fournisseurs pris en charge par les éditeurs](#vendor-supported-providers)
  - [Fournisseurs communautaires](#community-providers)
- [Tests](#testing)
- [Outils](#tools)
  - [Intégration continue](#ci)
  - [Extensions VS Code](#vs-code-extensions)
- [Bibliothèques](#libraries)
- [Modèles de base](#boilerplates)
- [Plateformes Terraform auto-hébergées](#self-hosted-terraform-platforms)
- [Managed Terraform Platforms :heavy\_dollar\_sign:](#managed-terraform-platforms-heavy_dollar_sign)
- [Outils pour Terraform Enterprise](#terraform-enterprise-tooling)
- [Vidéos](#videos)
- [Extensions d’éditeur](#editor-plugins)
- [Licence](#license)

## Légende

- Non compatible avec _terraform >= 0.12_ :ghost:
- Abandonné :skull:
- Monétisé :heavy_dollar_sign:

## Ressources officielles

- [Hashicorp Terraform Blog](https://www.hashicorp.com/en/blog/products/terraform)
- [Introduction to Terraform](https://developer.hashicorp.com/terraform/intro)
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform learn](https://developer.hashicorp.com/terraform/tutorials)

## Communauté

- [weekly.tf - Terraform Weekly Newsletter](https://www.weekly.tf/) - Lettre d’information hebdomadaire sur l’actualité de Terraform, les projets open source, les annonces et les discussions.
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
- [The Claude Agent Skill for Terraform and OpenTofu - testing, modules, CI/CD, and production patterns](https://github.com/antonbabenko/terraform-skill) - Compétence Claude Code consacrée à Terraform et OpenTofu : tests, conception de modules, flux de travail CI/CD et pratiques de production.
- [awesome-terraform-compliance](https://github.com/antonbabenko/awesome-terraform-compliance) - Sélection d’outils, de frameworks et de ressources pour la conformité et la sécurité avec Terraform.
- Communautés propres à certaines langues :
  - [Telegram (Ukrainian speak community)](https://t.me/terraform_ukraine)

## Livres

- [Big Little Book On Terraform](https://www.amazon.com/Big-Little-Book-Terraform-Omos-ebook/dp/B07PWYPNX8/)
- [Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Second Edition](https://www.manning.com/books/bootstrapping-microservices-second-edition)
- [Deep-Dive Terraform on Azure](https://link.springer.com/book/10.1007/978-1-4842-7328-9)
- [Getting Started with Terraform, 2nd ed.](https://www.amazon.com/Getting-Started-Terraform-production-infrastructure/dp/1788623533/)
- [HashiCorp Infrastructure Automation Certification Guide](https://www.amazon.com/HashiCorp-Infrastructure-Automation-Certification-Guide-ebook/dp/B092KM7LXC/)
- [IaC starting with Terraform (Korean)](https://product.kyobobook.co.kr/detail/S000202478097)
- [Infrastructure as Code](https://www.oreilly.com/library/view/infrastructure-as-code/9781491924334/)
- [Patterns and Practices for Infrastructure as Code: With examples in Python and Terraform](https://www.manning.com/books/infrastructure-as-code-patterns-and-practices)
- [Terraform Best Practices](https://www.terraform-best-practices.com/) - [livre électronique open source](https://github.com/antonbabenko/terraform-best-practices)
- [Terraform Cookbook](https://www.amazon.com/Terraform-Cookbook-Efficiently-Infrastructure-platforms/dp/1800207557)
- [Terraform for Ops e-book](https://www.terraformforops.com)
- [Terraform in Action](https://www.manning.com/books/terraform-in-action)
- [Terraform in Depth](https://www.manning.com/books/terraform-in-depth)
- [Terraform: Up & Running, 3rd ed.](https://www.terraformupandrunning.com/)
- [The Terraform Book](https://terraformbook.com/)

## Apprentissage et études

- [Terraform Academy](https://www.terraformacademy.app) - Plateforme interactive d’apprentissage de Terraform et de l’IaC, avec ateliers pratiques, préparation aux certifications (HashiCorp, AWS, GCP, Azure, Docker, Kubernetes, GitOps), accompagnement par l’IA et suivi de progression. Voir aussi le [blog SRE Pro Tips](https://www.terraformacademy.app/protips/?cat=sre-pro-tips) et les applications mobiles/PWA ci-dessous.
- [Terraform Terminal Simulator](https://devops-daily.com/games/terraform-terminal-simulator) - Entraînez-vous à utiliser init, plan et apply dans un terminal simulé dans le navigateur. Gratuit et open source, sans inscription.
- [compliance.tf docs](https://compliance.tf/docs/) - Implémentations Terraform gratuites de SOC 2, PCI DSS, HIPAA, NIST 800-53 et de plus de 35 autres contrôles de conformité — une référence ouverte pour écrire du code d’infrastructure conforme.
- [DevOpsLesson Terraform Playground](https://devopslesson.com/playground/terraform) - Simulateur Terraform gratuit dans le navigateur, avec exercices HCL guidés et commandes d’entraînement.

## Applications

Applications mobiles, de bureau et PWA pour apprendre et travailler avec Terraform où que vous soyez.

- [Terraform Academy — iOS](https://apps.apple.com/us/app/terraform-academy/id6745738634) - Application iOS native de la plateforme interactive d’apprentissage Terraform Academy. Ateliers pratiques, préparation aux certifications (HashiCorp, AWS, GCP, Azure, Docker, Kubernetes, GitOps), accompagnement par l’IA et synchronisation de la progression entre appareils.
- [Terraform Academy — Android](https://play.google.com/store/apps/details?id=com.terraformacade1.app) - Application Android native pour Terraform Academy, avec les mêmes ateliers, préparation aux certifications et accompagnement par l’IA que les versions iOS et Web.
- [Terraform Academy — PWA / Web App](https://www.terraformacademy.app/) - Version installable en application Web progressive (PWA) de Terraform Academy. Fonctionne hors ligne, s’installe sur l’écran d’accueil de toute plateforme et synchronise la progression avec les applications mobiles.

## Tutoriels et articles de blog

### Guides pour débutants

- [A Comprehensive Guide to Terraform](https://www.gruntwork.io/blog/a-comprehensive-guide-to-terraform) - Série d’articles de blog de l’auteur de « Terraform: Up & Running » qui accompagne le lecteur de ses débuts avec Terraform à son utilisation dans des situations réelles.
- [Using Terraform for Cloud Deployments - Part 1](https://dev.to/koenighotze/using-terraform-for-cloud-deployments---part-1) - Provisionnement d’une instance EC2.
- [Hello, world: The Fargate/Terraform tutorial I wish I had](https://section411.com/2019/07/hello-world/) - Article de blog décrivant la configuration d’un cluster ECS Fargate à partir de zéro.
- [Terraform Security Guide](https://sysdig.com/blog/terraform-security-best-practices/) - Article de blog décrivant les bonnes pratiques de sécurité lors de l’utilisation de Terraform.
- [Building a SaaS API? Don't Forget Your Terraform Provider](https://www.speakeasy.com/blog/build-terraform-providers) - Pourquoi écrire un fournisseur Terraform.
- [Complete Terraform Course in French (Free)](https://blog.stephane-robert.info/docs/infra-as-code/provisionnement/terraform/) – Cours complet et gratuit en français pour maîtriser Terraform, des bases aux usages avancés, avec des exemples pratiques et de bonnes pratiques.
- [Introduction to Terraform](https://devopslesson.com/tutorials/terraform/introduction-to-terraform) - Guide accessible aux débutants sur les fondamentaux de Terraform — fournisseurs, ressources, état et première exécution de apply avec des exemples pratiques.

### Écrire des fournisseurs personnalisés

- [Creating custom terraform providers](https://blog.pelo.tech/creating-custom-terraform-providers-341311823fa2) - Guide de création de fournisseurs Terraform personnalisés.
- [Writing a Terraform provider](https://web.archive.org/web/20220516140659/http://blog.jfabre.net/2017/01/22/writing-terraform-provider/) - Guide de création de fournisseurs Terraform personnalisés.
- [Writing Custom Providers](https://developer.hashicorp.com/terraform/plugin/sdkv2) - Documentation officielle pour créer des fournisseurs personnalisés.
- [Terraform Provider Code generation](https://www.speakeasy.com/docs/terraform/create-terraform) - Guide de génération d’un fournisseur Terraform à partir d’une spécification OpenAPI (prise en charge par un éditeur).

### Guides pratiques

- [How To Write OPA for Terraform](https://scalr.com/learning-center/opa-series-part-1-open-policy-agent-and-terraform) - Comment utiliser Open Policy Agent pour évaluer et appliquer des politiques à vos plans Terraform.
- [Deploying Discourse with Terraform](https://www.hashicorp.com/en/blog/deploying-discourse-with-terraform) - Montre comment Terraform peut créer en une commande une instance Discourse fonctionnelle sur DigitalOcean.
- [Deploying Django to AWS ECS with Terraform](https://testdriven.io/blog/deploying-django-to-ecs-with-terraform/) - Explique comment utiliser Terraform pour créer l’infrastructure AWS nécessaire à l’exécution d’une application Django sur ECS.
- [Easily Deploy A Seneca Microservice to ECS with Wercker and Terraform: Part I](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-i/), [II](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-ii/) & [III](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-iii/) - Montre comment intégrer Terraform à un pipeline de déploiement de microservices.
- [Terraform for a Highly Available VPN between AWS and Azure](https://web.archive.org/web/20210616132857/https://deployeveryday.com/2020/04/13/vpn-aws-azure-terraform.html) - Code Terraform pour déployer un VPN hautement disponible entre AWS et Azure.
- [Terraforming 1Password](https://1password.com/blog/terraforming-1password) - Comment 1Password est passé de CloudFormation à Terraform.
- [Tutorial: How to Use Terraform to Deploy OpenStack Workloads](https://web.archive.org/web/20170611135511/http://www.stratoscale.com/blog/openstack/tutorial-how-to-use-terraform-to-deploy-openstack-workloads/) - Montre à quel point il est facile d’utiliser le fournisseur Terraform OpenStack pour déployer un serveur Web.
- [Zero Downtime Updates with HashiCorp Terraform](https://www.hashicorp.com/en/blog/zero-downtime-updates-with-terraform) - Garantir l’absence d’interruption de service dans votre infrastructure.
- [Google Cloud Platform for 10$ a month using terraform](https://github.com/nufailtd/terraform-budget-gcp) - Montre comment utiliser Terraform pour créer un cluster Kubernetes Google sécurisé, des services Google Cloud Run et d’autres éléments d’infrastructure pour moins de [10 $](https://nufailtd.github.io/budget-gcp/) par mois.
- [Infracost + Terraform + GitHub Actions = Automate Cloud Cost Management](https://medium.com/better-programming/infracost-terraform-github-actions-automate-cloud-cost-management-a62b329f2834) - Comment utiliser Infracost comme garde-fou pour maîtriser les coûts du cloud pendant le développement avec Terraform.
- [How To Wrap Your Terraform Provider for Pulumi](https://www.speakeasy.com/blog/pulumi-terraform-provider) - Rendre votre fournisseur Terraform compatible avec Pulumi.
- [How to Build an AWS Account Vending Machine](https://medium.com/@StackGuardian/how-to-build-an-aws-account-vending-machine-by-stackguardian-f2895e35a27b) - Gestion automatisée et en libre-service du cycle de vie des comptes AWS à l’aide de piles Terraform orchestrées par StackGuardian, avec allocation via SSM, nettoyage déclenché par EventBridge et application des politiques Tirith.

### Configuration multi-environnement

- [Terraform Design Patterns: the Terrafile](https://bensnape.com/2016/01/14/terraform-design-patterns-the-terrafile/) - Gestion des modules Terraform et de leurs versions dans des projets Terraform avec Terrafile.
- [Terraform, VPC, and why you want a tfstate file per env](https://charity.wtf/2016/03/30/terraform-vpc-and-why-you-want-a-tfstate-file-per-env/) - Quelques pièges liés à l’utilisation de Terraform dans de grands projets comportant plusieurs environnements, et comment les éviter.
- [Using Pipelines to Manage Environments with Infrastructure as Code](https://medium.com/@kief/https-medium-com-kief-using-pipelines-to-manage-environments-with-infrastructure-as-code-b37285a1cbf5) - Présentation de différentes approches pour créer un pipeline qui gère les modifications d’infrastructure d’un environnement au suivant.

### Azure

- [Learning HashiCorp Terraform](https://web.archive.org/web/20201108000713/https://www.g10s.io/hashicorp-terraform/) - Guide sur Azure.
- [New Terraform Azure Automation Resources](https://bgelens.nl/terraform-automation-resources/) - Azure Automation.
- [Terraforming Azure PaaS](https://devkimchi.com/2019/01/21/terraforming-azure-paas/) - Déployer des ressources PaaS sur Azure.
- [azure-az104](https://github.com/victorlane/azure-az104) - Notes de préparation à l’examen AZ-104 Azure Administrator et exemples Terraform pratiques, notamment une architecture de référence de zone d’atterrissage.

### AWS

- [AWS Lambda the Terraform Way](https://github.com/nsriram/lambda-the-terraform-way) - Comprendre AWS Lambda en profondeur, au-delà de l’exécution des fonctions, avec Terraform. Comprend également des guides d’intégration avec S3, API Gateway, DynamoDB, Kinesis et SQS.
- [Managing AWS Lambda Functions with Terraform](https://spacelift.io/blog/terraform-aws-lambda) - À quoi sert AWS Lambda et comment utiliser Terraform pour gérer les fonctions AWS Lambda ?

### Google Cloud

- [Managing infrastructure as code with Terraform, Cloud Build, and GitOps](https://docs.cloud.google.com/docs/terraform/resource-management/managing-infrastructure-as-code) - Configurer et gérer une infrastructure en tant que code avec Terraform, Cloud Build et GitOps.
- [Getting started with Terraform on Google Cloud](https://docs.cloud.google.com/docs/terraform/create-vm-instance) - Utiliser Terraform pour créer une machine virtuelle sur Google Cloud et démarrer un serveur Python Flask élémentaire.
- [Managing Cloud Infrastructure with Terraform](https://www.skills.google/course_templates/746) - Déployer un service Kubernetes Load Balancer avec Terraform, un HTTPS Content-Based Load Balancer, l’équilibrage de charge modulaire (Regional Load Balancer), des fournisseurs personnalisés, Cloud SQL et un VPN entre Google Cloud et AWS.
- [Hashicorp Terraform Tutorials for Google Cloud](https://developer.hashicorp.com/terraform/tutorials/gcp-get-started) - Bien démarrer avec Terraform sur Google Cloud.
- [IAC - Terraform and Terragrunt on Google Cloud](https://www.academeez.com/courses/terraform) - Cours open source sous licence MIT sur la création d’infrastructures sur Google Cloud avec Terraform/OpenTofu et Terragrunt.
- [Self-host n8n on Google Cloud Run](https://github.com/datawranglerai/self-host-n8n-on-gcr) - Configuration et guide Terraform pour déployer l’automatisation de workflows n8n sur Cloud Run avec Cloud SQL, Secret Manager et, en option, le mode Queue via Redis.

### Divers

- [Sharing data between Terraform configurations](https://web.archive.org/web/20230927082422/https://jamesmckay.net/2016/09/sharing-data-between-terraform-configurations/) - Montre comment utiliser l’état distant pour partager des données entre configurations Terraform.
- [The Segment AWS Stack](https://web.archive.org/web/20250322120753/https://segment.com/blog/the-segment-aws-stack/) - Présentation des coulisses de l’infrastructure propulsée par Terraform qui a résolu [The Million Dollar Engineering Problem](https://segment.com/blog/the-million-dollar-eng-problem/) chez [Segment](https://segment.com/).
- [Top 3 Terraform Testing Strategies for Ultra-Reliable Infrastructure-as-Code](https://www.contino.io/insights/top-3-terraform-testing-strategies-for-ultra-reliable-infrastructure-as-code)
- [Two Weeks with Terraform](https://charity.wtf/2016/02/23/two-weeks-with-terraform/) - Quelques années d’expérience durement acquise avec Terraform sur le terrain, et des conseils opérationnels.
- [Terraform: Beyond the Basics with AWS](https://aws.amazon.com/blogs/apn/terraform-beyond-the-basics-with-aws/) - Explication d’une démonstration utilisant Terraform pour provisionner une architecture AWS exemple.
- [Terraform cost estimation](https://github.com/antonbabenko/terraform-cost-estimation) - Estimation gratuite et anonymisée des coûts à partir d’un plan Terraform (0.12+) ou d’un fichier d’état. Également disponible dans le navigateur sur [terraform-cost-estimation.com](https://terraform-cost-estimation.com).
- [How to Debug Terraform Projects: Tutorial](https://spacelift.io/blog/terraform-debug)
- [The terraform-docs GitHub Action: A Complete CI Setup Guide](https://devtoolhub.com/terraform-docs-github-action/) - Génération et validation automatique de la documentation des modules à chaque PR avec terraform-docs, notamment les pièges OIDC/autorisations qui provoquent des échecs en CI.

## Modules communautaires

Pour découvrir d’autres modules communautaires qui ne figurent pas ici, consultez le [Terraform Module Registry](https://registry.terraform.io/).

- [nis2shield/infrastructure](https://github.com/nis2shield/infrastructure) - Modules Terraform pour automatiser la conformité NIS2 et déployer une infrastructure sécurisée.
- [rancher-terraform-digitalocean](https://github.com/lunagt/rancher-terraform-digitalocean) - Serveur Rancher sur DigitalOcean.
- [segmentio/stack](https://github.com/segmentio/stack) - Configure une infrastructure de production avec AWS, Docker et ECS.
- [terraform-aws-account-lookup](https://github.com/be-bold/terraform-aws-account-lookup) - Ce module Terraform permet d’interroger les comptes AWS et de les renvoyer sous forme de différentes associations ou d’une liste complète. Il permet aussi de filtrer la liste des comptes et de les regrouper selon leurs balises existantes au moyen d’un sous-module.
- [terraform-aws-alb](https://github.com/terraform-aws-modules/terraform-aws-alb) - Crée un équilibreur de charge applicatif sur AWS (module vérifié).
- [terraform-aws-appconfig](https://github.com/terraform-aws-modules/terraform-aws-appconfig) - Crée des ressources AWS AppConfig.
- [terraform-aws-atlantis](https://github.com/terraform-aws-modules/terraform-aws-atlantis) - Crée des configurations Terraform pour exécuter [Atlantis](https://runatlantis.io) sur AWS Fargate. Github, Gitlab et BitBucket sont pris en charge.
- [terraform-aws-autoscaling](https://github.com/terraform-aws-modules/terraform-aws-autoscaling) - Crée des groupes Auto Scaling et des configurations de lancement (module vérifié).
- [terraform-aws-customer-gateway](https://github.com/terraform-aws-modules/terraform-aws-customer-gateway) - Crée une passerelle client sur AWS.
- [terraform-aws-datadog-forwarders](https://github.com/terraform-aws-modules/terraform-aws-datadog-forwarders) - Crée des ressources AWS pour transférer les journaux et les métriques vers Datadog.
- [terraform-aws-dms](https://github.com/terraform-aws-modules/terraform-aws-dms) - Crée des ressources AWS DMS (Database Migration Service).
- [terraform-aws-dynamodb-table](https://github.com/terraform-aws-modules/terraform-aws-dynamodb-table) - Crée une table DynamoDB sur AWS.
- [terraform-aws-ec2-instance](https://github.com/terraform-aws-modules/terraform-aws-ec2-instance) - Crée des instances EC2 sur AWS.
- [terraform-aws-ecr](https://github.com/cloudposse/terraform-aws-ecr) - Gère les registres de conteneurs Docker sur AWS ECR.
- [terraform-aws-ecs](https://github.com/terraform-aws-modules/terraform-aws-ecs) - Crée des ressources AWS ECS.
- [terraform-aws-efs](https://github.com/cloudposse/terraform-aws-efs) - Définit un système de fichiers EFS.
- [terraform-aws-eks](https://github.com/terraform-aws-modules/terraform-aws-eks) - Crée des ressources Elastic Kubernetes Service sur AWS (module très populaire).
- [terraform-aws-elb](https://github.com/terraform-aws-modules/terraform-aws-elb) - Crée un équilibreur de charge Elastic sur AWS (module vérifié).
- [terraform-aws-eventbridge](https://github.com/terraform-aws-modules/terraform-aws-eventbridge) - Crée des ressources EventBridge sur AWS.
- [terraform-aws-jenkins-ha-agents](https://github.com/neiman-marcus/terraform-aws-jenkins-ha-agents) - Déploiement Jenkins basé sur EC2 avec des agents HA (spot). S’exécute sur EFS pour garantir l’immutabilité. Entièrement personnalisable, avec des valeurs par défaut pertinentes.
- [terraform-aws-jenkins](https://github.com/cloudposse-archives/terraform-aws-jenkins) - Construit une image Docker avec Jenkins, l’enregistre dans un dépôt ECR et la déploie sur Elastic Beanstalk exécutant une pile Docker.
- [terraform-aws-key-pair](https://github.com/cloudposse/terraform-aws-key-pair) - Génère automatiquement des paires de clés SSH (publique/privée).
- [terraform-aws-lambda-auto-package](https://github.com/nozaq/terraform-aws-lambda-auto-package) - Module Terraform pour définir une fonction Lambda dont les fichiers source sont compilés et empaquetés automatiquement pour son déploiement.
- [terraform-aws-lambda](https://github.com/terraform-aws-modules/terraform-aws-lambda) - Module Terraform qui construit et empaquette les dépendances, et crée des ressources AWS Lambda dans d’innombrables configurations.
- [terraform-aws-managed-service-prometheus](https://github.com/terraform-aws-modules/terraform-aws-managed-service-prometheus) - Crée des ressources AWS Managed Service for Prometheus (AMP).
- [terraform-aws-modules](https://github.com/terraform-aws-modules) - Collection de modules Terraform AWS pris en charge par la communauté (comprend des modules AWS officiels).
- [terraform-aws-msk-kafka-cluster](https://github.com/terraform-aws-modules/terraform-aws-msk-kafka-cluster) - Crée des ressources AWS MSK (Managed Streaming for Kafka).
- [terraform-aws-notify-slack](https://github.com/terraform-aws-modules/terraform-aws-notify-slack) - Crée une rubrique SNS et une fonction Lambda qui envoie des notifications à Slack.
- [terraform-aws-postgresql-rds](https://github.com/azavea/terraform-aws-postgresql-rds) - Crée PostgreSQL sur RDS.
- [terraform-aws-rds-aurora](https://github.com/terraform-aws-modules/terraform-aws-rds-aurora) - Crée des ressources de cluster RDS Aurora sur AWS (module vérifié).
- [terraform-aws-rds-proxy](https://github.com/terraform-aws-modules/terraform-aws-rds-proxy) - Crée des ressources AWS RDS Proxy.
- [terraform-aws-rds](https://github.com/terraform-aws-modules/terraform-aws-rds) - Crée des ressources RDS sur AWS (module vérifié).
- [terraform-aws-redshift](https://github.com/terraform-aws-modules/terraform-aws-redshift) - Crée des ressources Redshift sur AWS.
- [terraform-aws-route53](https://github.com/terraform-aws-modules/terraform-aws-route53) - Crée des ressources Route53 sur AWS.
- [terraform-aws-s3-bucket](https://github.com/terraform-aws-modules/terraform-aws-s3-bucket) - Crée des ressources de compartiment S3 sur AWS.
- [terraform-aws-secure-baseline](https://github.com/nozaq/terraform-aws-secure-baseline) - Configure votre compte AWS selon une configuration de base sécurisée, fondée sur CIS Amazon Web Services Foundations.
- [terraform-aws-security-group](https://github.com/terraform-aws-modules/terraform-aws-security-group) - Crée des groupes de sécurité EC2-VPC sur AWS (module vérifié).
- [terraform-aws-ssh-bastion-service](https://github.com/joshuamkite/terraform-aws-ssh-bastion-service) - Plan Terraform pour déployer un bastion SSH en tant que service sans état sur AWS.
- [terraform-aws-transit-gateway](https://github.com/terraform-aws-modules/terraform-aws-transit-gateway) - Crée des ressources Transit Gateway sur AWS.
- [terraform-aws-vpc](https://github.com/terraform-aws-modules/terraform-aws-vpc) - Crée des ressources VPC sur AWS (module vérifié et très populaire).
- [terraform-aws-vpn-gateway](https://github.com/terraform-aws-modules/terraform-aws-vpn-gateway) - Crée des ressources de passerelle VPN sur AWS.
- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Collection officielle de modules Azure vérifiés appartenant à Microsoft, qui codifie les bonnes pratiques WAF pour un déploiement cohérent de l’infrastructure.
- [terraform-azurerm-aks](https://github.com/kjanshair/terraform-azurerm-aks) - Crée des ressources AKS sur Azure.
- [terraform-azurerm-iis](https://github.com/ghostinthewires/terraform-azurerm-iis-install) - Installe un serveur IIS sur une machine virtuelle Azure.
- [terraform-azurerm-mysql](https://github.com/foreverXZC/terraform-azurerm-mysql) - Crée une base de données MySQL sur Azure.
- [terraform-azurerm-redis](https://github.com/rahulkhengare/terraform-azurerm-redis) - Crée Redis sur Azure.
- [terraform-azurerm-sqlserver](https://github.com/metadevpro/terraform-azurerm-sqlserver-seed) - Crée une base de données SQL Server sur Azure.
- [terraform-cloudflare-maintenance](https://github.com/adinhodovic/terraform-cloudflare-maintenance) - Module pour créer une page de maintenance avec Cloudflare Workers.
- [terraform-digitalocean-droplet](https://registry.terraform.io/modules/terraform-digitalocean-modules/droplet/digitalocean/latest) - Module Terraform pour gérer les Droplets DigitalOcean et les ressources associées.
- [terraform-ecs-jenkins](https://github.com/shuaibiyy/terraform-ecs-jenkins) - Provisionne Jenkins sur AWS ECS avec Terraform.
- [terraform-gce-atlantis](https://github.com/runatlantis/terraform-gce-atlantis) - Crée des configurations Terraform pour exécuter [Atlantis](https://runatlantis.io) sur Google Compute Engine.
- [terraform-google-project-factory](https://github.com/terraform-google-modules/terraform-google-project-factory) - Création et configuration de projets Google Cloud Platform selon des conventions précises, avec VPC partagé, IAM, API, etc.
- [terraform-helm-carbon-intensity-exporter](https://github.com/fabiocicerchia/terraform-helm-carbon-intensity-exporter) - Module Terraform/Helm pour déployer Kubernetes Carbon Intensity Exporter.
- [terraform-helm-cloud-carbon-footprint](https://github.com/fabiocicerchia/terraform-helm-cloud-carbon-footprint) - Module Terraform/Helm pour déployer Cloud Carbon Footprint sur Kubernetes.
- [terraform-helm-kepler](https://github.com/fabiocicerchia/terraform-helm-kepler) - Module Terraform pour déployer Kepler (profilage énergétique de Kubernetes) via Helm.
- [terraform-kubestack](https://github.com/kbst/terraform-kubestack) - Kubestack est un framework destiné aux équipes d’ingénierie de plateformes Kubernetes. Il permet de définir toute la pile cloud native dans une seule base de code Terraform et de faire évoluer la plateforme en continu et en toute sécurité avec GitOps.
- [terraform-linode-k8s](https://registry.terraform.io/modules/linode/k8s/linode/latest) - Installe Kubernetes sur des instances Linode.
- [terraform-nixos](https://github.com/nix-community/terraform-nixos) - Ensemble de modules Terraform conçus pour déployer NixOS.
- [terraform-static-website-s3-cloudfront](https://github.com/sergej-brazdeikis/terraform-static-website-s3-cloudfront) - Crée des sites Web statiques sur AWS S3 et CloudFront à partir de variables.
- [tf_aws_bastion_s3_keys](https://github.com/terraform-community-modules/tf_aws_bastion_s3_keys) - Crée des hôtes bastion sur AWS EC2.
- [typhoon](https://github.com/poseidon/typhoon) - Distribution Kubernetes minimale et gratuite avec Terraform.

## Registres auto-hébergés

- [anthology](https://github.com/erikvanbrakel/anthology) - Implémentation d’un registre Terraform privé comme alternative au registre officiel.
- [boring-registry](https://github.com/boring-registry/boring-registry) - Registre privé de modules/fournisseurs Terraform avec authentification par clé API et prise en charge du stockage d’objets binaires.
- [citizen](https://github.com/outsideris/citizen) - Registre privé de modules/fournisseurs Terraform.
- [nrkno/terraform-registry](https://github.com/nrkno/terraform-registry) - Registre Terraform privé avec des backends de stockage modulaires.
- [petra](https://github.com/devoteamgcloud/petra) - Gestionnaire de registre Terraform privé.
- [philips-labs/terraform-registry](https://github.com/philips-labs/terraform-registry) - Registre Terraform qui sert des versions arbitraires de fournisseurs Terraform hébergées sur GitHub.
- [tapir](https://github.com/PacoVK/tapir) - Registre Terraform privé.
- [terraform-simple-registry](https://github.com/apparentlymart/terraform-simple-registry) - Implémentation simple des protocoles du registre Terraform.
- [terramantle.dev](https://terramantle.dev) - Registre axé sur la visibilité des modules et de l’état, qui s’attaque à la gestion des dépendances.
- [Terrareg](https://github.com/matthewjohn/terrareg) - Registre de modules Terraform.
- [terustry](https://github.com/veepee-oss/terustry) - Registre de fournisseurs Terraform open source servant de proxy aux versions publiées sur GitLab ou GitHub.
- [terralist](https://github.com/terralist/terralist) - Registre privé Terraform pour les modules et les fournisseurs, administrable via une API REST.

## Registres gérés

- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Initiative officielle de Microsoft proposant des modules Terraform et Bicep vérifiés et conformes aux normes pour les ressources et modèles d’architecture Azure, alignés sur le Well-Architected Framework.
- [cloudsmith](https://docs.cloudsmith.com/formats/terraform-modules-repository) - Hébergeur de paquets géré pour clients internes et externes.
- [Terramantle](https://terramantle.dev) - Registre privé Terraform/OpenTofu offrant une analyse approfondie des modules, la cartographie des dépendances et la visibilité sur l’état.

## Fournisseurs

### Fournisseurs pris en charge par HashiCorp

- [terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) - Fournisseur pour Amazon Web Services.
- [terraform-provider-azurerm](https://github.com/hashicorp/terraform-provider-azurerm) - Fournisseur pour Azure.
- [terraform-provider-docker](https://github.com/hashicorp/terraform-provider-docker) - Fournisseur pour Docker. :skull:
- [terraform-provider-google](https://github.com/hashicorp/terraform-provider-google) - Fournisseur pour Google Cloud Platform.
- [terraform-provider-helm](https://github.com/hashicorp/terraform-provider-helm) - Fournisseur pour Helm.
- [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) - Fournisseur pour Kubernetes.
- [terraform-provider-vsphere](https://github.com/vmware/terraform-provider-vsphere) - Fournisseur pour VMware vSphere.

### Fournisseurs pris en charge par les éditeurs

- [terraform-provider-alicloud](https://github.com/aliyun/terraform-provider-alicloud) - Fournisseur pour Alibaba Cloud.
- [terraform-provider-artifactory](https://github.com/jfrog/terraform-provider-artifactory) - Fournisseur pour [JFrog Artifactory](https://jfrog.com/artifactory/).
- [terraform-provider-atlas](https://github.com/ariga/terraform-provider-atlas) - Fournisseur pour [Atlas](https://atlasgo.io/).
- [terraform-provider-azapi](https://github.com/Azure/terraform-provider-azapi) - Fournisseur pour l’API REST Azure Resource Manager.
- [terraform-provider-azuredevops](https://github.com/microsoft/terraform-provider-azuredevops) - Fournisseur pour Azure DevOps (VSTS).
- [terraform-provider-buildkite](https://github.com/buildkite/terraform-provider-buildkite) - Fournisseur pour Buildkite.
- [terraform-provider-checkly](https://github.com/checkly/terraform-provider-checkly) - Gère les ressources [Checkly](https://www.checklyhq.com) pour la surveillance d’API et les tests de bout en bout.
- [terraform-provider-coder](https://github.com/coder/terraform-provider-coder) - Fournisseur pour [Coder](https://coder.com)
- [terraform-provider-confluent](https://github.com/confluentinc/terraform-provider-confluent) - Fournisseur pour Confluent.
- [terraform-provider-datadog](https://github.com/DataDog/terraform-provider-datadog) - Fournisseur pour Datadog.
- [terraform-provider-devhelm](https://github.com/devhelmhq/terraform-provider-devhelm) - Fournisseur pour [DevHelm](https://devhelm.io), service de surveillance de disponibilité : gérer les moniteurs, les canaux d’alerte et les pages d’état sous forme de code.
- [terraform-provider-digitalocean](https://github.com/digitalocean/terraform-provider-digitalocean) - Fournisseur pour DigitalOcean.
- [terraform-provider-dominos](https://github.com/nat-henderson/terraform-provider-dominos) - Fournisseur pour Dominos Pizza.
- [terraform-provider-elasticstack](https://github.com/elastic/terraform-provider-elasticstack) - Fournisseur pour Elasticsearch et Kibana.
- [terraform-provider-env0](https://github.com/env0/terraform-provider-env0) - Fournisseur pour [env0](https://www.env0.com/)
- [terraform-provider-featureflip](https://github.com/canopy-labs/terraform-provider-featureflip) - Fournisseur pour les indicateurs de fonctionnalité [Featureflip](https://featureflip.io/) : projets, environnements, indicateurs, règles de ciblage, segments et clés SDK.
- [terraform-provider-github](https://github.com/integrations/terraform-provider-github) - Fournisseur pour GitHub.
- [terraform-provider-gitlab](https://github.com/gitlabhq/terraform-provider-gitlab) - Fournisseur pour GitLab.
- [terraform-provider-graphql](https://github.com/sullivtr/terraform-provider-graphql) - Fournisseur pour les requêtes et mutations GraphQL.
- [terraform-provider-hcloud](https://github.com/hetznercloud/terraform-provider-hcloud) - Fournisseur pour Hetzner Cloud.
- [terraform-provider-healthchecksio](https://github.com/kristofferahl/terraform-provider-healthchecksio) - Fournisseur permettant de gérer les ressources healthchecks.io.
- [terraform-provider-heroku](https://github.com/heroku/terraform-provider-heroku) - Fournisseur pour Heroku.
- [terraform-provider-ibm](https://github.com/IBM-Cloud/terraform-provider-ibm) - Fournisseur pour IBM Cloud.
- [terraform-provider-iterative](https://github.com/iterative/terraform-provider-iterative) - Greffon Terraform conçu pour l’apprentissage automatique.
- [terraform-provider-k8s](https://github.com/banzaicloud/terraform-provider-k8s) - Fournisseur Kubernetes simple, compatible avec tout manifeste.
- [terraform-provider-keycloak](https://github.com/keycloak/terraform-provider-keycloak) - Fournisseur permettant de gérer les paramètres du serveur fournisseur d’identité [Keycloak](https://www.keycloak.org/).
- [terraform-provider-linode](https://github.com/btobolaski/terraform-provider-linode) - Fournisseur pour Linode.
- [terraform-provider-nxip](https://github.com/uk-sw/terraform-provider-nxip) - Fournisseur pour [nxip](https://nx-ip.com), une solution IPAM avec allocation de CIDR fondée sur des pools pour le cloud et les environnements sur site.
- [terraform-provider-openstack](https://github.com/terraform-provider-openstack/terraform-provider-openstack) - Greffon pour OpenStack.
- [terraform-provider-panos](https://github.com/PaloAltoNetworks/terraform-provider-panos) - Fournisseur pour les pare-feu de nouvelle génération [Palo Alto Networks](https://www.paloaltonetworks.com/network-security).
- [terraform-provider-phare](https://github.com/phare/terraform-provider-phare) - Fournisseur Terraform pour [Phare](https://phare.io).
- [terraform-provider-planetscale](https://github.com/planetscale/terraform-provider-planetscale) - Fournisseur Terraform pour [PlanetScale](https://planetscale.com) (Vitess et Postgres).
- [terraform-provider-qovery](https://github.com/Qovery/terraform-provider-qovery) - Fournisseur pour [Qovery](https://www.qovery.com/) — gérer les déploiements Kubernetes, les environnements, les applications, les bases de données, les graphiques Helm et les services Terraform sur AWS, GCP, Azure et Scaleway.
- [terraform-provider-pingdom](https://github.com/russellcardullo/terraform-provider-pingdom) - Fournisseur permettant de gérer les ressources Pingdom. :skull:
- [terraform-provider-rancher2](https://github.com/rancher/terraform-provider-rancher2) - Fournisseur pour Rancher v2.
- [terraform-provider-scalr](https://github.com/Scalr/terraform-provider-scalr) - Fournisseur pour [Scalr](https://www.scalr.com/)
- [terraform-provider-secrethub](https://github.com/secrethub/terraform-provider-secrethub) - Fournisseur pour SecretHub. :skull:
- [terraform-provider-sigsci](https://github.com/signalsciences/terraform-provider-sigsci) - Fournisseur pour Signal Sciences.
- [terraform-provider-snowflake](https://github.com/snowflakedb/terraform-provider-snowflake) - Fournisseur pour l’entrepôt de données Snowflake.
- [terraform-provider-spinnaker](https://github.com/armory-io/terraform-provider-spinnaker) - Fournisseur pour [Spinnaker](https://spinnaker.io/).
- [terraform-provider-spotinst](https://github.com/spotinst/terraform-provider-spotinst) - Fournisseur pour spotinst.
- [terraform-provider-stripe](https://github.com/franckverrot/terraform-provider-stripe) - Fournisseur pour Stripe.
- [terraform-provider-ucloud](https://github.com/ucloud/terraform-provider-ucloud) - Fournisseur permettant de gérer les ressources UCloud.
- [terraform-provider-uptimerobot](https://github.com/louy/terraform-provider-uptimerobot) - Fournisseur permettant de gérer les ressources uptimerobot. :skull:
- [terraform-provider-vaulted](https://github.com/sumup-oss/terraform-provider-vaulted) - Secrets chiffrés de HashiCorp Vault via Terraform, stockables dans un SCM tel que Git.
- [terraform-provider-scp](https://github.com/splunk/terraform-provider-scp) - Fournisseur pour Splunk Cloud Platform.

### Fournisseurs communautaires

- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Fournisseur Terraform pour Coolify.
- [terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) - Fournisseur Docker pour Terraform.
- [terraform-provider-minio](https://github.com/aminueza/terraform-provider-minio) - Fournisseur Terraform permettant de gérer les compartiments S3 et les utilisateurs IAM de MinIO.
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Fournisseur Terraform pour Multipass.
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - Gérer OpenRouter sous forme de code : espaces de travail, garde-fous, clés API à dépenses limitées et membres de l’organisation. Terraform + OpenTofu.
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - Fournisseur Terraform pour l’estimation des coûts Azure et les garde-fous budgétaires.
- [terraform-provider-proxmox](https://github.com/Telmate/terraform-provider-proxmox) - Fournisseur Proxmox pour Terraform.
- [terraform-provider-seerr](https://github.com/Josh-Archer/terraform-provider-seerr) - Fournisseur Terraform pour Seerr (Overseerr/Jellyseerr).
- [terraform-provider-terracurl](https://github.com/devops-rob/terraform-provider-terracurl) - Fournisseur permettant d’effectuer des appels API gérés et non gérés vers le point de terminaison cible.
- [terraform-provider-uname](https://github.com/julienlevasseur/terraform-provider-uname) - Fournisseur Uname pour Terraform.
- [terraform-provider-value](https://github.com/pseudo-dynamic/terraform-provider-value) - Fournisseur Value pour Terraform.
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Fournisseur Terraform pour Multipass.
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - Gérer OpenRouter sous forme de code : espaces de travail, garde-fous, clés API à dépenses limitées et membres de l’organisation. Terraform + OpenTofu.
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - Fournisseur Terraform pour l’estimation des coûts Azure et les garde-fous budgétaires.
- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Fournisseur Terraform pour Coolify.
- [terraform-provider-appstore](https://github.com/elevenode/terraform-provider-appstore) - Fournisseur Terraform pour Apple App Store Connect.
- [terraform-provider-expo](https://github.com/elevenode/terraform-provider-expo) - Fournisseur Terraform pour Expo Application Services (EAS).
- [terraform-provider-paddle](https://github.com/vivantel/terraform-provider-paddle) - Fournisseur Terraform pour les ressources du catalogue Paddle Billing, les actions de cycle de vie et les sources de données de recherche.
- [terraform-provider-seekrit](https://github.com/seekritdev/terraform-provider-seekrit) - Gérer les applications, environnements, groupes, jetons de service, autorisations de clés et secrets seekrit. Les arguments à écriture seule et les ressources éphémères maintiennent les valeurs secrètes hors de l’état.

## Tests

- [clarity](https://github.com/xchapter7x/clarity) - Framework déclaratif de tests unitaires pour Terraform.
- [kitchen-terraform](https://github.com/newcontext-oss/kitchen-terraform) - Fournit des greffons Test Kitchen permettant de converger une configuration Terraform et de vérifier l’état obtenu au moyen de contrôles InSpec.
- [rspec-terraform](https://github.com/bsnape/rspec-terraform) - Tests RSpec pour vos modules Terraform.
- [terraform_validate](https://github.com/elmundio87/terraform_validate) - Aide à appliquer les normes définies par l’utilisateur dans Terraform.
- [terraform-compliance](https://github.com/terraform-compliance/cli) - Tests BDD pour les fichiers Terraform.
- [terratest](https://github.com/gruntwork-io/terratest) - Terratest est une bibliothèque Go qui facilite l’écriture de tests automatisés pour le code d’infrastructure.

## Outils

- [AIaC](https://github.com/gofireflyio/aiac) - Générateur d’infrastructure en tant que code fondé sur l’intelligence artificielle.
- [AirIAM](https://github.com/bridgecrewio/AirIAM) - Outil AWS IAM qui applique le principe du moindre privilège lors de l’exécution de Terraform.
- [asdf](https://github.com/asdf-community/asdf-hashicorp) - Greffon HashiCorp pour le gestionnaire de versions [asdf](https://github.com/asdf-vm/asdf).
- [astro](https://github.com/uber/astro/) - Astro est un outil permettant de gérer plusieurs exécutions Terraform avec une seule commande.
- [atlantis](https://github.com/runatlantis/atlantis) - Workflow unifié pour collaborer sur Terraform via GitHub.
- [atmos](https://github.com/cloudposse/atmos) - Outil universel qui convertit du YAML fusionné en profondeur en entrées de module.
- [aws2tf](https://github.com/aws-samples/aws2tf) - Automatise l’importation de ressources AWS existantes dans Terraform et génère le code HCL correspondant.
- [aztfexport](https://github.com/Azure/aztfexport) - Outil permettant de placer des ressources Azure existantes sous la gestion de Terraform.
- [AzureNamer](https://azurenamingconventions.com/) - Génère des noms conformes à CAF pour plus de 200 types de ressources Azure et les exporte sous forme de locals Terraform, avec validation en temps réel de la longueur et des caractères.
- [balcony](https://oguzhan-yilmaz.github.io/balcony/) - Outil CLI pour consulter facilement les API AWS. Génère aussi des blocs d’importation Terraform et le code des ressources correspondantes.
- [bare-devcontainer/templates](https://github.com/bare-devcontainer/templates/tree/main/src/terraform) - Conteneur de développement Terraform axé sur la sécurité, avec terraform-ls et un cache facilitant les reconstructions. L’image de base est disponible sur [bare-devcontainer/images](https://github.com/bare-devcontainer/images/tree/main/terraform).
- [blast radius](https://github.com/28mm/blast-radius) - Visualisations interactives des graphes de dépendances Terraform.
- [cf-terraforming](https://github.com/cloudflare/cf-terraforming) - Utilitaire en ligne de commande pour faciliter la transformation en Terraform de vos ressources Cloudflare existantes.
- [cfnctl](https://github.com/rogerwelin/cfnctl) - Cfnctl apporte l’expérience de la CLI Terraform à AWS CloudFormation.
- [Checkov](https://github.com/bridgecrewio/checkov/) - Outil d’analyse statique Terraform pour terraform>=0.12.
- [cloud-audit](https://github.com/gebalamariusz/cloud-audit) - CLI d’audit de sécurité AWS avec moteur de remédiation qui génère du code Terraform pour corriger les mauvaises configurations.
- [CloudBurn](https://github.com/towardsthecloud/cloudburn) - Vérification des politiques de coûts AWS pour Terraform et CloudFormation en CI et dans des comptes AWS actifs.
- [Coder](https://coder.com/) - Coder provisionne des environnements de développement logiciel sur votre infrastructure via Terraform.
- [coretech/terrafile](https://github.com/coretech/terrafile) - Gère systématiquement les modules externes issus de GitHub pour les utiliser avec Terraform (écrit en Go).
- [Cynative](https://github.com/cynative/cynative) - Framework open source d’agents de sécurité pour examiner les configurations Terraform et analyser l’infrastructure active via des API cloud en lecture seule.
- [Datadef](https://datadef.io/repo-to-diagram) - Génère des diagrammes d’architecture et de la documentation à partir d’un dépôt Terraform : analyse les fichiers `.tf` sans lancer `terraform init` ni lire l’état, représente les modules par zones avec des décomptes par environnement et se resynchronise quotidiennement.
- [demonolith](https://github.com/schrieksoft/demonolith) - Scinde les projets Terraform monolithiques avec `demonolith refactor` (pour déplacer le code) et `demonolith migrate` (pour migrer vers des fichiers .tfstate plus petits).
- [driftctl](https://github.com/snyk/driftctl) - Détecte, suit et signale les dérives d’infrastructure.
- [drifthound](https://github.com/drifthoundhq/drifthound) - Détection continue des dérives d’infrastructure avec historique et notifications.
- [dxw/terrafile](https://github.com/dxw/terrafile) - Gère systématiquement les modules externes issus de GitHub pour les utiliser avec Terraform (écrit en Ruby).
- [flora](https://github.com/ketchoop/flora) - Gestionnaire de versions Terraform.
- [fogg](https://github.com/chanzuckerberg/fogg) - Outil pour éliminer les tâches fastidieuses de gestion des dépôts Terraform.
- [former2](https://github.com/iann0036/former2) - Génère une configuration Terraform à partir des ressources existantes de votre compte AWS.
- [fuzzy-terraform-rm](https://github.com/paololazzari/fuzzy-terraform-rm) - Outil en ligne de commande de recherche approximative pour supprimer des ressources de l’état Terraform.
- [gaia](https://github.com/gaia-app/gaia) - Gaia est une interface Terraform 🌍 pour vos modules et votre infrastructure en libre-service 👨‍💻.
- [hcl2json](https://github.com/tmccombs/hcl2json) - Convertit HCL2 en JSON.
- [hcldump](https://github.com/magodo/hcldump) - Affiche l’arbre de syntaxe abstraite du HCL (v2).
- [hcledit (mercari)](https://github.com/mercari/hcledit) - Bibliothèque Go pour modifier une configuration HCL.
- [hcledit (minamijoyo)](https://github.com/minamijoyo/hcledit) - Éditeur en ligne de commande pour HCL.
- [hclgrep](https://github.com/magodo/hclgrep) - Outil grep fondé sur la syntaxe pour HCL(v2).
- [hq](https://github.com/miller-time/hq) - Processeur HCL en ligne de commande.
- [iam-policy-json-to-terraform](https://github.com/flosell/iam-policy-json-to-terraform) - Petit outil convertissant une stratégie IAM JSON en document aws_iam_policy_document Terraform.
- [Infracost](https://github.com/infracost/infracost) - Estimations des coûts du cloud pour Terraform dans votre CLI et vos pull requests.
- [inframap](https://github.com/cycloidio/inframap) - Lit votre tfstate ou HCL pour générer un graphe propre à chaque fournisseur, en ne montrant que les ressources les plus importantes ou pertinentes.
- [InfraScan](https://infrascan.soldevelo.com) - Auditeur avancé d’infrastructure pour l’analyse des coûts et de la sécurité de Terraform, AWS et Kubernetes.
- [InfraSketch](https://infrasketch.cloud) - Outil gratuit dans le navigateur pour visualiser HCL Terraform et Docker Compose sous forme de diagrammes d’architecture. Compatible avec AWS et Azure, sans inscription ni identifiants.
- [json2hcl](https://github.com/kvz/json2hcl) - Convertit le JSON en HCL et inversement.
- [k2tf](https://github.com/sl1pm4t/k2tf) - Convertisseur de YAML Kubernetes en HCL Terraform.
- [Kapitan](https://github.com/kapicorp/kapitan) - Génère du JSON Terraform/OpenTofu et d’autres configurations d’infrastructure à partir de modèles pilotés par un inventaire.
- [KICS](https://github.com/Checkmarx/kics) - Analyse les projets IaC à la recherche de vulnérabilités, de problèmes de conformité et de mauvaises configurations d’infrastructure. Prend en charge Terraform, les manifestes Kubernetes, les Dockerfiles, les modèles AWS CloudFormation et les playbooks Ansible.
- [layerform](https://github.com/briefercloud/layerform) - Layerform aide les ingénieurs à créer des piles d’environnements réutilisables à partir de simples fichiers .tf. Idéal pour plusieurs environnements de préproduction.
- [library.tf](https://library.tf) - Library.tf fournit les informations du registre Terraform et OpenTofu ainsi que les analyses nécessaires à la prise de décision. Trouvez rapidement des modules ou fournisseurs pris en charge, maintenus et exempts de bogues.
- [modules.tf-lambda](https://github.com/antonbabenko/modules.tf-lambda) - Générateur d’infrastructure en tant que code à partir de diagrammes visuels créés avec [Cloudcraft.co](https://cloudcraft.co), vers Terraform.
- [para](https://github.com/paraterraform/para) - Gestionnaire de greffons tiers manquant et « couteau suisse » de Terraform/Terragrunt, conçu pour faciliter tous les workflows avec un seul outil.
- [pike](https://github.com/jamesWoolfenden/pike) - Pike calcule les autorisations ou la politique IAM nécessaires à la construction de votre infrastructure Terraform.
- [pipeform](https://github.com/magodo/pipeform) - Interface utilisateur textuelle de Terraform à l’exécution.
- [platform-skills](https://github.com/nitinjain999/platform-skills) - Guide de terrain assisté par l’IA pour Terraform : examen du moindre privilège IAM, analyse du rayon d’impact, conséquences sur l’état, contraintes des fournisseurs et planification des retours arrière. Fonctionne comme greffon Claude, Codex, Cursor et Copilot.
- [pluralith](https://www.pluralith.com/) - Visualisation de l’état Terraform et génération automatique de documentation d’infrastructure.
- [pre-commit-terraform](https://github.com/antonbabenko/pre-commit-terraform) - Hooks Git pre-commit pour Terraform et Terragrunt : formatage automatique, validation, mise à jour de la documentation, contrôles de sécurité, estimation des coûts et plus encore.
- [pretf](https://github.com/raymondbutcher/pretf) - Enveloppe Terraform directement utilisable qui génère une configuration Terraform avec Python. Voir la [documentation pretf](https://pretf.readthedocs.io/en/latest/).
- [prettyplan for TF 0.12+](https://github.com/cloudandthings/terraform-pretty-plan) - Prettyplan pour TF 0.12+ ([disponible en ligne](https://cloudandthings.github.io/terraform-pretty-plan/)) est un petit outil qui facilite la consultation des grands plans Terraform.
- [prettyplan](https://github.com/chrislewisdev/prettyplan) - Prettyplan ([disponible en ligne](https://chrislewisdev.github.io/prettyplan/)) est un petit outil qui facilite la consultation des grands plans Terraform.
- [pug](https://github.com/leg100/pug) - Interface utilisateur de terminal pour les utilisateurs chevronnés de Terraform.
- [pytest-terraform](https://github.com/cloud-custodian/pytest-terraform) - Greffon pytest Terraform avec fixtures et prise en charge de la relecture hors ligne.
- [python-terrafile](https://github.com/claranet/python-terrafile) - Gère systématiquement les modules externes issus de GitHub pour les utiliser avec Terraform.
- [regula](https://github.com/fugue/regula) - Évalue l’infrastructure en tant que code Terraform pour repérer les mauvaises configurations de sécurité et violations de conformité potentielles sur AWS, Azure et Google Cloud avant le déploiement.
- [redc](https://github.com/wgpsec/redc) - Outil d’automatisation d’infrastructure d’équipe rouge de nouvelle génération, fondé sur Terraform et prenant en charge les déploiements multicloud (Alibaba Cloud, Tencent Cloud, AWS, etc.), avec déploiement en une commande pour créer, configurer et détruire ces environnements.
- [renovate-config](https://github.com/SpotOnInc/renovate-config) - Préréglages de configuration partageables pour Renovatebot, particulièrement utiles aux équipes DevOps.
- [Riftmap](https://riftmap.dev) - Moteur de dépendances et d’impact des modifications entre dépôts, qui analyse l’infrastructure multidépot dans Terraform, Docker, Helm et d’autres outils pour visualiser les dépendances et les éléments affectés par un changement.
- [rover](https://github.com/im2nguyen/rover) - Explorateur interactif d’état et de configuration Terraform.
- [ruby-terraform](https://github.com/infrablocks/ruby_terraform) - Enveloppe Ruby simple pour exécuter les commandes terraform.
- [sato](https://github.com/JamesWoolfenden/sato) - Sato vous aide à convertir vos anciens fichiers CloudFormation en Terraform.
- [scenery](https://github.com/dmlittle/scenery) - Encore un outil de mise en forme de la sortie des plans Terraform.
- [scratchrelaxtv](https://github.com/YakDriver/scratchrelaxtv) - Outil Python simple pour le développement de modules : extrait les variables de `main.tf` afin de générer `variables.tf` et crée un squelette d’utilisation du module à partir de `variables.tf`.
- [serverless.tf - Doing serverless with Terraform](https://serverless.tf/) - serverless.tf est un framework open source prescriptif pour développer, construire, déployer et sécuriser des applications et infrastructures sans serveur sur AWS avec Terraform. [En savoir plus](https://github.com/antonbabenko/serverless.tf).
- [Shieldly](https://github.com/shieldly-io/cli) - Analyse de sécurité par IA des politiques IAM et de CloudFormation générés par Terraform ; explique les risques liés aux autorisations et comment les corriger. Offre gratuite, CLI et action GitHub.
- [Shisho](https://github.com/flatt-security/shisho) - Analyseur statique léger pour Terraform.
- [Speakeasy](https://www.speakeasy.com/) - Génère un fournisseur Terraform à partir d’une spécification OpenAPI.
- [stacks](https://github.com/cisco-open/stacks) - Préprocesseur de code Terraform.
- [SyncVey](https://github.com/MR-TABATA/SyncVey) - Registre d’actifs AWS auto-hébergé avec détection des dérives au niveau des attributs entre tfstate et l’état AWS réel, analyses planifiées et alertes de fin de vie du middleware.
- [tads-boilerplate](https://github.com/Thomvaill/tads-boilerplate) - La puissance d’Ansible et Terraform alliée à la simplicité de Docker Swarm : infrastructure en tant que code et bonnes pratiques DevOps.
- [tau](https://github.com/avinor/tau) - Tau est une fine couche au-dessus de terraform pour gérer plusieurs déploiements, dépendances et secrets.
- [tenv](https://github.com/tofuutils/tenv) - Gestionnaire de versions OpenTofu/Terraform/Terragrunt.
- [terraboard](https://github.com/camptocamp/terraboard) - Tableau de bord Web pour inspecter les états Terraform.
- [terraboot](https://github.com/MastodonC/terraboot) - DSL pour générer une configuration terraform et l’exécuter.
- [terracognita](https://github.com/cycloidio/terracognita) - Lit les fournisseurs cloud existants (Terraform inversé) et génère votre infrastructure en tant que code sous forme de configuration Terraform.
- [terracost](https://github.com/cycloidio/terracost) - Estimation des coûts du cloud pour Terraform dans votre CLI.
- [terracove](https://elementtech.github.io/terracove/) - Teste récursivement une arborescence de répertoires pour repérer les différences Terraform et mesurer la couverture.
- [TerraDepot](https://github.com/derBroBro/TerraDepot) - Dépôt d’état Terraform fondé sur le backend distant HTTP par défaut. Permet l’administration centralisée des états tfstates sur AWS S3.
- [TerraDrift](https://github.com/niravraychura/terradrift) - CLI de détection des dérives Terraform/OpenTofu auto-hébergée pour la CI et cron (fondée sur plan ; ne répertorie pas les ressources non gérées).
- [terradozer](https://github.com/chenrui333/terradozer) - Détruit des ressources Terraform sans fichiers de configuration.
- [terraeasy](https://github.com/jaceq/terraeasy) - Enveloppe Terraform simple.
- [terraform-ai-skills](https://github.com/anmolnagpal/terraform-ai-skills) - Compétence IA pour GitHub Copilot, Claude et ChatGPT qui automatise la gestion en masse des modules Terraform — mises à niveau de fournisseurs, normalisation des workflows et publications sur 10 à 200 dépôts ou plus, sur AWS, GCP, Azure et DigitalOcean.
- [terraform-aws-clickops-notifier](https://github.com/cloudandthings/terraform-aws-clickops-notifier) - Soyez averti lorsque des actions sont effectuées dans la console AWS.
- [terraform-bundle](https://github.com/hashicorp/terraform/tree/main/tools/terraform-bundle) - Construit facilement des ensembles contenant un binaire Terraform et des binaires de fournisseurs. Utile pour la CI et Terraform Enterprise en environnement isolé.
- [terraform-cdk](https://github.com/hashicorp/terraform-cdk) - Le CDK pour Terraform permet aux développeurs d’utiliser leurs langages de programmation préférés pour définir l’infrastructure cloud et la provisionner via HashiCorp Terraform.
- [terraform-cleaner](https://github.com/sylwit/terraform-cleaner) - Petit utilitaire qui détecte les variables inutilisées dans vos modules Terraform.
- [terraform-credentials-vault](https://github.com/oulman/terraform-credentials-vault) - Greffon « credential helper » Terraform permettant de fournir via des variables d’environnement des identifiants pour les services natifs Terraform (registres de modules privés, Terraform Cloud, etc.).
- [terraform-diff](https://github.com/contentful-labs/terraform-diff) - Sachez toujours où exécuter Terraform plan et apply !
- [terraform-docs](https://github.com/terraform-docs/terraform-docs) - Utilitaire rapide pour générer la documentation des modules Terraform.
- [terraform-graph-beautifier](https://github.com/pcasteran/terraform-graph-beautifier) - Outil en ligne de commande qui transforme la sortie peu exploitable de terraform graph en une représentation plus claire et explicite.
- [terraform-iam-policy-validator](https://github.com/awslabs/terraform-iam-policy-validator) - La CLI valide les stratégies AWS IAM d’un modèle Terraform selon les bonnes pratiques AWS IAM.
- [terraform-landscape](https://github.com/coinbase/terraform-landscape) - Améliore la lisibilité et la compréhension de la sortie plan de Terraform.
- [terraform-operator](https://github.com/GalleyBytes/terraform-operator) - CRD Kubernetes pour gérer les opérations Terraform.
- [terraform-plan-parser](https://github.com/lifeomic/terraform-plan-parser) - Utilitaire en ligne de commande et API JavaScript pour analyser la sortie de `terraform plan` et la convertir en JSON.
- [terraform-provisioner](https://github.com/shuaibiyy/terraform-provisioner) - Outil de gestion de plusieurs provisionnements des mêmes scripts Terraform.
- [terraform-rake-tasks](https://github.com/gina-alaska/terraform-rake-tasks) - Tâches Rake partagées pour gérer les plans terraform.
- [terraform-repl](https://github.com/paololazzari/terraform-repl) - Enveloppe de la console terraform offrant une meilleure expérience interactive.
- [Terraform-Visual](https://github.com/hieven/terraform-visual) - Outil simple mais puissant de visualisation des plans Terraform.
- [terravision](https://github.com/patrickchugh/terravision) - Génère des diagrammes d’architecture cloud professionnels à partir de code Terraform, avec les icônes et conventions graphiques officielles AWS/Azure/GCP. S’exécute entièrement côté client et s’intègre à la CI/CD.
- [terraform.py](https://github.com/mantl/terraform.py) - Script d’inventaire dynamique Ansible pour analyser les fichiers d’état Terraform.
- [terraformer](https://github.com/chenrui333/terraformer) - Outil CLI pour générer des fichiers Terraform à partir d’une infrastructure existante. De l’infrastructure au code. De nombreux fournisseurs sont pris en charge.
- [terraforming](https://github.com/dtan4/terraforming) - Exporte les ressources AWS existantes au format Terraform (tf, tfstate). Similaire à `terraformer`.
- [terraformize](https://github.com/naorlivne/terraformize) - Applique ou détruit des modules Terraform via un simple point de terminaison d’API REST.
- [terraformsh](https://github.com/pwillis-els/terraformsh) - Enveloppe Bash pour une expérience CLI simplifiée et des configurations hiérarchiques DRY.
- [terragrunt-atlantis-config](https://github.com/transcend-io/terragrunt-atlantis-config) - Génère une configuration Atlantis pour les projets Terragrunt.
- [terragrunt](https://github.com/gruntwork-io/terragrunt) - Terragrunt est une fine couche d’enveloppement de Terraform qui fournit des outils supplémentaires pour garder vos configurations Terraform DRY, travailler avec plusieurs modules Terraform et gérer l’état distant.
- [terrahelp](https://github.com/opencredo/terrahelp) - Utilitaire en ligne de commande fournissant des fonctionnalités complémentaires parfois utiles avec Terraform.
- [terrahub](https://github.com/tfxor/terrahub) - TerraHub est un outil d’automatisation et d’orchestration Terraform intégré à console.terrahub.io, une interface d’entreprise permettant d’afficher les exécutions Terraform en temps réel ainsi que les capacités d’audit et de création de rapports historiques.
- [terramagic](https://github.com/miltlima/terramagic) - Assistant pour créer automatiquement des dossiers et fichiers Terraform, écrit en Python !
- [terramate](https://github.com/terramate-io/terramate) - Outil de gestion de plusieurs piles Terraform, avec détection des modifications et génération de code.
- [terrap-cli](https://github.com/sirrend/terrap-cli) - Terrap est un puissant outil CLI qui analyse votre infrastructure et identifie les changements nécessaires.
- [terrars](https://github.com/andrewbaxter/terrars) - Terrars est un outil de création de piles Terraform en Rust. Une alternative au CDK.
- [terrascan](https://github.com/tenable/terrascan) - Ensemble de tests de sécurité et de bonnes pratiques pour l’analyse statique de modèles Terraform.
- [terrascope](https://github.com/spilliams/terrascope) - Orchestrateur de compilation pour les monodépôts Terraform.
- [terrashine](https://isawan.github.io/terrashine/) - Implémentation d’un miroir de fournisseurs terraform1 qui met automatiquement en cache les dépendances à mesure que les fournisseurs sont demandés.
- [terraspace](https://terraspace.cloud) - Le framework Terraform.
- [terrastate](https://github.com/rohinivsenthil/terrastate) - Extension Visual Studio Code permettant de surveiller, déployer et détruire les ressources Terraform de votre espace de travail.
- [terratag](https://github.com/env0/terratag) - Terratag est un outil CLI qui permet aux utilisateurs de Terraform de créer et maintenir automatiquement des balises sur l’ensemble de leurs ressources AWS, Azure et GCP.
- [tf-init-booster](https://github.com/hayorov/terraform-init-booster) - Routine précédant Terraform qui accélère le téléchargement des modules Terraform pour les plans volumineux.
- [tf-profile](https://github.com/datarootsio/tf-profile/) - Profileur d’exécutions Terraform. Génère des statistiques globales, des statistiques par ressource ou des visualisations.
- [tf-summarize](https://github.com/dineshba/tf-summarize) - Utilitaire en ligne de commande qui affiche le résumé d’un plan terraform.
- [tf-why](https://github.com/Raj-glitch-max/tf.why) - Outil CLI qui attribue les dérives Terraform à l’acteur AWS qui les a provoquées, via une recherche CloudTrail.
- [tfaction](https://github.com/suzuki-shunsuke/tfaction) - Collection d’actions GitHub pour un workflow Terraform prescriptif.
- [tfautomv](https://github.com/busser/tfautomv) - Génère automatiquement des blocs Terraform `moved` pour simplifier les refactorisations.
- [tfcmt](https://github.com/suzuki-shunsuke/tfcmt) - CLI pour notifier le résultat de plan et apply sous forme de commentaire de pull request.
- [tfedit](https://github.com/minamijoyo/tfedit) - Outil de refactorisation pour Terraform.
- [tfenv](https://github.com/tfutils/tfenv) - Gestionnaire de versions Terraform inspiré de rbenv.
- [tfgen](https://github.com/0xDones/tfgen) - Générateur de code Terraform pour assurer la cohérence de la base de code et éviter les répétitions (DRY).
- [tfgpt](https://github.com/flavius-dinu/tfgpt) - Outil CLI intégrant Terraform à GPT-3.5 Turbo d’OpenAI pour expliquer les commandes et concepts Terraform.
- [tfimport](https://github.com/coolapso/tfimport) - Outil CLI pour automatiser l’importation d’une infrastructure existante dans tfstate.
- [tfjson](https://github.com/palantir/tfjson) - Utilitaire qui lit un fichier de plan Terraform et l’affiche au format JSON.
- [tfk8s](https://github.com/jrhouston/tfk8s) - Outil de conversion de manifestes YAML Kubernetes en HCL Terraform.
- [tflint](https://github.com/terraform-linters/tflint) - Linter Terraform qui détecte les erreurs non détectables par `terraform plan`.
- [tfmake](https://github.com/tfmake/tfmake) - Automatise Terraform grâce à la puissance de make.
- [tfmask](https://github.com/cloudposse-archives/tfmask) - Utilitaire Terraform pour masquer certaines sorties de `terraform plan` et `terraform apply`.
- [tfmigrate](https://github.com/minamijoyo/tfmigrate) - Outil de migration de l’état Terraform pour GitOps.
- [tfmigrator](https://github.com/tfmigrator/cli) - Bibliothèque Go et CLI pour migrer la configuration et l’état Terraform.
- [tfmodcache](https://github.com/Rezarys/tfmodcache) - Cache de modules local et partagé pour Terraform et OpenTofu ; `terraform init` cesse de retélécharger les modules déjà présents. J’en suis l’auteur.
- [tfmv](https://github.com/suzuki-shunsuke/tfmv) - Renomme les ressources Terraform et génère des blocs moved.
- [tfocus](https://github.com/nwiizo/tfocus) - tfocus est un outil très interactif pour sélectionner et exécuter plan/apply Terraform sur des ressources précises. À utiliser comme « outil d’urgence », pas au quotidien.
- [tfprovidercheck](https://github.com/suzuki-shunsuke/tfprovidercheck) - CLI empêchant l’exécution de fournisseurs Terraform malveillants.
- [tfproviderlint](https://github.com/bflad/tfproviderlint) - Outil de lint des fournisseurs Terraform.
- [tfrepl](https://github.com/ysoftwareab/tfrepl) - REPL Terraform offrant une expérience complète de shell. Fondé sur Readline. Sans dépendance. Enregistre les modifications de configuration et conserve l’historique.
- [tfreveal](https://github.com/breml/tfreveal) - Utilitaire Terraform affichant les plans avec toutes les valeurs secrètes (sensibles) révélées.
- [tfscaffold](https://github.com/tfutils/tfscaffold) - Framework de contrôle d’infrastructure AWS gérée par Terraform sur plusieurs environnements et composants.
- [tfschema](https://github.com/minamijoyo/tfschema) - Inspecteur de schémas pour les fournisseurs Terraform.
- [tfsec](https://github.com/aquasecurity/tfsec) - Outil d’analyse statique Terraform compatible avec terraform <0.12 et >=0.12, intégrant directement l’analyseur HCL pour de meilleurs résultats.
- [tfsort](https://github.com/AlexNabokikh/tfsort) - Utilitaire CLI pour trier les variables et sorties Terraform.
- [tftarget](https://github.com/future-architect/tftarget) - Outil CLI permettant d’exécuter interactivement `terraform xxx -target={...}`.
- [tftree](https://github.com/busser/tftree) - Affiche la pile d’appels des modules Terraform dans votre terminal.
- [tftui](https://github.com/idoavrah/terraform-tui) - Interface utilisateur textuelle pour l’état Terraform.
- [tfupdate](https://github.com/minamijoyo/tfupdate) - Met à jour les contraintes de version dans vos configurations Terraform.
- [tfvar](https://github.com/shihanng/tfvar) - tfvar analyse vos configurations ou modules Terraform et extrait les variables dans les formats de votre choix (tfvar, variables d’environnement, etc.) pour les modifier.
- [tfvault](https://github.com/tedilabs/tfvault) - Assistant universel d’identifiants Terraform avec backends de secrets enfichables (trousseau du système, pass/gopass, variables d’environnement) et isolation des comptes par profil.
- [tfvaultenv](https://github.com/oulman/tfvaultenv) - tfvaultenv lit les secrets depuis HashiCorp Vault et produit des variables d’environnement pour différents fournisseurs Terraform.
- [tfwrapper](https://github.com/manheim/tfwrapper) - Gem Ruby fournissant des tâches rake pour exécuter Terraform HashiCorp de façon raisonnable.
- [tfmcp](https://github.com/nwiizo/tfmcp) - Outil CLI permettant d’interagir avec Terraform via le Model Context Protocol (MCP) et aux assistants IA comme Claude de gérer et d’utiliser des environnements Terraform.
- [tgf](https://github.com/coveooss/tgf) - Interface Terragrunt permettant d’exécuter Terragrunt/Terraform via Docker.
- [threatcl](https://github.com/threatcl/threatcl) - Documenter vos modèles de menaces avec HCL.
- [tofuenv](https://github.com/tofuutils/tofuenv) - Gestionnaire de versions OpenTofu inspiré de tfenv.
- [tpm](https://github.com/Madh93/tpm) - Gestionnaire de paquets pour les fournisseurs Terraform.
- [travelgrunt](https://github.com/ivanilves/travelgrunt) - Naviguez dans les [mono]dépôts sans effort !
- [trupositive](https://github.com/trupositive-ai/trupositive) - Enveloppe sans configuration qui injecte automatiquement les métadonnées Git (SHA du commit, branche, dépôt) dans toutes les ressources gérées par Terraform.
- [validIaC](https://github.com/gofireflyio/validiac) - ValidIaC combine les meilleurs outils open source pour garantir les bonnes pratiques, l’hygiène et la sécurité Terraform.
- [xterrafile](https://github.com/devopsmakers/xterrafile) - Gère systématiquement les modules externes provenant du registre de modules, de Git ou de répertoires locaux pour Terraform (écrit en Go).
- [yj](https://github.com/sclevine/yj) - CLI — convertit entre YAML, TOML, JSON et HCL. Préserve l’ordre des associations.
- [yor](https://github.com/bridgecrewio/yor) - Balise et trace automatiquement les frameworks d’infrastructure en tant que code (Terraform, CloudFormation et Serverless).
- [zephy](https://github.com/henrybravo/zephy) - Compare les ressources Azure déployées dans un abonnement aux ressources gérées par les espaces de travail Terraform Enterprise (HCP et auto-hébergé), lorsque la stratégie de balisage des ressources cloud est insuffisante.

### Intégration continue

- [opentofu-updater-action](https://github.com/drumandbytes/opentofu-updater-action) - Action GitHub qui maintient à jour les fournisseurs et modules OpenTofu/Terraform, les graphiques Helm et les images de conteneur en ouvrant des pull requests.
- [setup-terraform](https://github.com/hashicorp/setup-terraform) - Configure la CLI Terraform dans votre workflow GitHub Actions.
- [terraform-plan](https://github.com/cds-snc/terraform-plan) - Action GitHub pour exécuter Terraform plan et ajouter un commentaire décrivant les changements.
- [terraform-risk-assessor](https://github.com/Liam-Johnston/terraform-risk-assessor) - Action GitHub qui analyse avec l’IA les changements d’un plan Terraform et publie une évaluation des risques dans les pull requests.

### Extensions VS Code

- [HashiCorp Terraform](https://marketplace.visualstudio.com/items?itemName=hashicorp.terraform)
- [vscode-terraform-live-graph](https://github.com/adamiBs/vscode-terraform-live-graph) - Extension Terraform Live Graph pour Visual Studio Code, qui génère un graphe Terraform dynamique pendant que vous écrivez votre code.
- [tf-nav](https://marketplace.visualstudio.com/items?itemName=owenrumney.tf-nav) - Extension de navigation Terraform qui crée un index des ressources par type de fichier avec une vue arborescente facile à parcourir.

## Bibliothèques

- [hcl-rs](https://github.com/martinohmann/hcl-rs) - Bibliothèques d’analyse et d’encodage HCL pour Rust avec prise en charge de serde.
- [hcl4j](https://github.com/wondrify/hcl4j) - Analyseur HCL en Java.
- [nu_plugin_hcl](https://github.com/Yethal/nu_plugin_hcl) - Greffon d’analyse HCL pour [Nushell](https://github.com/nushell/nushell).
- [pyhcl](https://github.com/virtuald/pyhcl) - Analyseur HCL en Python.
- [python-hcl2](https://github.com/amplify-education/python-hcl2/) - Analyseur HCL2 en Python.
- [rhcl](https://github.com/winebarrel/rhcl) - Analyseur HCL en Ruby pur.
- [tree-sitter-hcl](https://github.com/tree-sitter-grammars/tree-sitter-hcl) - Grammaire HCL pour tree-sitter.

## Modèles de base

- [Solo-Engineer Stack](https://github.com/sarmakska/terraform-stack) - Dépôt Terraform unique reliant Vercel, Supabase, Cloudflare et DigitalOcean pour former une plateforme SaaS indépendante. Une seule commande `terraform apply` provisionne un projet Next.js, un projet Supabase avec variables d’environnement transmises à Vercel, une zone Cloudflare avec R2 et Workers KV et un droplet DigitalOcean avec surveillance.
- [Terraform Generator](https://github.com/sudokar/generator-tf-module) - Squelette pour un nouveau module ou projet Terraform, avec prise en charge de frameworks de test (terratest et kitchen-terraform).
- [Terraform GitOps Framework](https://www.kubestack.com) - Tout ce dont vous avez besoin pour créer une automatisation fiable de clusters Kubernetes AKS, EKS et GKE dans un framework gratuit et open source.

## Plateformes Terraform auto-hébergées

- [Snap CD](https://github.com/schrieksoft/snapcd) - Plateforme complète de déploiement continu facilitant les déploiements modulaires avec des runners isolés, une automatisation tenant compte des dépendances et un contrôle d’accès précis.
- [Lynx](https://github.com/clivern/lynx) - Backend Terraform rapide, sécurisé et fiable. Comprend un tableau de bord convivial, la gestion des projets et environnements, le versionnement de l’état, le verrouillage et la prise en charge des instantanés.
- [OTF](https://github.com/leg100/otf) - Open Terraforming Framework, alternative open source à Terraform Enterprise avec intégration complète de la CLI Terraform.
- [Terrakube](https://docs.terrakube.io) - Alternative open source à Terraform Enterprise avec registre privé, état distant, workflows personnalisés, espaces de travail planifiés et états visuels.
- [Digger](https://digger.dev) - Alternative open source à Terraform Cloud : exécute les tâches Terraform plan et apply dans votre CI.
- [cloud-concierge](https://github.com/dragondrop-cloud/cloud-concierge) - Solution open source qui transforme les ressources non gérées en code Terraform, détecte les dérives et analyse les coûts et la sécurité du cloud, le tout livré sous forme de pull request.
- [Stack-Lifecycle-Deployment](https://github.com/D10S0VSkY-OSS/Stack-Lifecycle-Deployment) - Solution open source définissant et gérant le cycle de vie complet des ressources utilisées et provisionnées dans un cloud.
- [Burrito](https://github.com/padok-team/burrito) - Opérateur Kubernetes TACoS — « ArgoCD pour Terraform ».
- [Terrateam](https://terrateam.io) - Alternative open source à Terraform Cloud/Enterprise privilégiant GitOps, avec intégration native à GitHub et conçue pour l’échelle, la sécurité et la fiabilité.


## Plateformes Terraform gérées :heavy_dollar_sign:

- [compliance.tf](https://compliance.tf) - Modules Terraform intégrant SOC 2, PCI DSS, HIPAA, NIST 800-53 et plus de 35 autres référentiels. Les configurations non conformes échouent à `terraform plan` avant toute application.
- [ControlMonkey](https://www.controlmonkey.io/) - Alternative à Terraform Cloud avec génération de code Terraform/OpenTofu, inventaire cloud et couverture IaC. Comprend des politiques prêtes à l’emploi, la remédiation des dérives et un scanner d’activités ClickOps.
- [Firefly](https://www.firefly.ai/) - Alternative à Terraform Cloud utilisant votre outil CI. Firefly analyse aussi votre cloud pour évaluer la couverture IaC et détecter les dérives.
- [Scalr](https://www.scalr.com/) - Alternative à Terraform Enterprise avec intégration OPA, structure organisationnelle, hooks personnalisés, intégrations natives à d’autres plateformes DevOps et rapports centralisés.
- [Stategraph](https://stategraph.com) - Terraform et OpenTofu sans goulot d’étranglement du fichier d’état. Remplace le fichier d’état plat par une véritable base de données. Les équipes planifient en parallèle, l’état est interrogeable en SQL et les plans s’exécutent en quelques secondes plutôt qu’en minutes.
- [env0](https://www.env0.com/) - Alternative à Terraform Cloud/Enterprise avec intégration OPA, workflows personnalisés et prise en charge de Terragrunt.
- [Brainboard](https://www.brainboard.co) - Concevez visuellement, déployez et gérez des infrastructures cloud modernes à partir de n’importe quel fournisseur — AWS, GCP ou Azure.
- [Spacelift](https://spacelift.io/) - Alternative à Terraform Cloud/Enterprise : plateforme collaborative de livraison d’infrastructure pour Terraform.
- [StackGuardian](https://stackguardian.io/) - Plateforme de codification et d’orchestration d’infrastructure qui convertit les ressources cloud existantes en IaC, avec workflows régis par les politiques Tirith, OPA et Checkov, runtimes privés et modèles sans code.

## Outils pour Terraform Enterprise

- [terraform-enterprise-cli](https://github.com/skierkowski/terraform-enterprise-cli) - Interface en ligne de commande Terraform Enterprise.
- [terraform-enterprise-client](https://github.com/skierkowski/terraform-enterprise-client) - Client API Ruby et outil en ligne de commande pour Terraform Enterprise.
- [terraform-enterprise-migrator](https://github.com/sil-org/tfc-ops) - Script de migration des environnements Terraform Enterprise de l’ancienne version vers la nouvelle.

## Vidéos

- [Your Weekly Dose of Terraform](https://www.youtube.com/channel/UCGH0yYPvlCN1VjSFMGVmFgQ) - Chaîne YouTube proposant des diffusions en direct hebdomadaires sur l’actualité Terraform, des critiques, des entretiens, des questions-réponses, du codage en direct et quelques expérimentations avec Terraform.
- [Terraform explained in 15 mins](https://www.youtube.com/watch?v=l5k1ai_GBDE) - Terraform expliqué en 15 minutes.
- [Terraform Course](https://www.youtube.com/watch?v=SLB_c_ayRMo) - Automatisez votre infrastructure cloud AWS.
- [How to Build Reusable, Composable, Battle tested Terraform Modules](https://www.youtube.com/watch?v=LVgP63BkhKQ) - Yevgeniy Brikman explique comment écrire du code Terraform réutilisable, composable et testable. La présentation porte sur les modules Terraform, explique brièvement le problème que Terraform vise à résoudre et propose une courte démonstration des bases de Terraform (environ 39 min, octobre 2017).
- [Building Scalable, Repeatable Infrastructure in the Cloud with Terraform](https://www.youtube.com/watch?v=cG7pcksTAnY) - Montre comment Terraform permet de pratiquer l’infrastructure en tant que code en déployant TeamCity sur AWS avec une base PostgreSQL hébergée.
- [Creating a Google Compute Instance with Terraform](https://www.youtube.com/watch?v=fo3VX33Zx0c) - Exemple de création d’une instance Google Compute avec du code Terraform.
- [Creating a Terraform Provider for Just About Anything](https://www.hashicorp.com/resources/creating-terraform-provider-for-anything) - Découvrez comment contribuer à un fournisseur Terraform ou créer le vôtre grâce à ce tutoriel.
- [Evolving Your Infrastructure with Terraform](https://www.youtube.com/watch?v=wgzgVm7Sqlk) - Le directeur technique d’OpenCredo propose un examen approfondi de l’utilisation de Terraform dans des situations réelles à l’aide de cas d’utilisation intéressants.
- [Going Multi-Cloud with Terraform and Nomad](https://www.youtube.com/watch?v=e42A4aBZUkQ).
- [How to Extend the Terraform Provider List](https://www.youtube.com/watch?v=2BvpqmFpchI) - Dans cette présentation, Paul décrit la création d’un fournisseur Terraform.
- [Orchestrating Containers with Terraform and Consul](https://www.infoq.com/presentations/terraform-consul/) - Mitchell Hashimoto montre comment Terraform peut déployer et mettre à l’échelle des charges de travail conteneurisées.
- [Production ChaosMonkey with Terraform](https://www.youtube.com/watch?v=CPI6W3LK0-g) - Comment DigitalOcean utilise Terraform pour exécuter des tests d’intégration en production.
- [Running a Terraform Environment at Scale](https://www.youtube.com/watch?v=3JVGSq7QIS0) - Exécuter Terraform à grande échelle avec des centaines de comptes AWS.
- [Setup Continuous Integration for a Terraform module](https://www.youtube.com/watch?v=vuJ6bjYKUcA) - Exemple d’utilisation de CI avec Kitchen-Terraform pour tester, baliser et publier un module Terraform qui crée une instance Google Compute.
- [State of Terraform Providerland](https://www.youtube.com/watch?v=ar1PF5iDtbg) - Fonctionnement des fournisseurs Terraform et création d’un fournisseur.
- [Terraform At Scale](https://www.youtube.com/watch?v=RldRDryLiXs) - Comment Segment utilise Terraform.
- [Terraform w/ Lee Trout](https://www.youtube.com/watch?v=p2ESyuqPw1A) - Présentation des modèles de développement et de la structuration efficace du code Terraform.
- [Terraforming the Composable World](https://www.youtube.com/watch?v=cHrOXPatFeg) - Intégrer Terraform au provisionnement bare metal sur site.
- [Test and verify a Google Compute Instance with Kitchen-Terraform](https://www.youtube.com/watch?v=kiH3-LEveek) - Exemple d’utilisation de Kitchen-Terraform pour tester le code Terraform qui crée une instance Google Compute.
- [Untangling Terraform Through Refactoring](https://www.youtube.com/watch?v=OH6iDKaXpZs) - Comment refactoriser soigneusement votre code Terraform avec un risque minimal.
- [Complete Terraform Course - From BEGINNER to PRO! (Learn Infrastructure as Code)](https://www.youtube.com/watch?v=7xngnjfIlK4) - Cours complet, des bases au niveau avancé, sans se concentrer sur un fournisseur cloud particulier et avec une approche générale.

## Extensions d’éditeur

- [Emacs terraform-mode](https://github.com/hcl-emacs/terraform-mode)
- [Intellij](https://plugins.jetbrains.com/plugin/7808-terraform-and-hcl)
- [Terraform-ls](https://github.com/hashicorp/terraform-ls) (Terraform Language Server)
- [Terraform-lsp](https://github.com/juliosueiras/terraform-lsp) (Language Server Protocol for Terraform)
- [vim-hcl](https://github.com/jvirtanen/vim-hcl) - Coloration syntaxique pour HCL.
- [Vim-Terraform-Completion](https://github.com/juliosueiras/vim-terraform-completion)
- [Vim-Terraform](https://github.com/hashivim/vim-terraform)

## Licence

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, Shuaib Yunus has waived all copyright and related or neighboring rights to this work.
