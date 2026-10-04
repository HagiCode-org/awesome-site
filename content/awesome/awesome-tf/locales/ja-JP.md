# Awesome Terraform [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) <!-- omit in toc -->

[![Link Checker](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml)
[![Misspell Check](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml)

> [HashiCorp の Terraform](https://www.terraform.io/) に関する厳選リソース集。
> [<img src="https://raw.githubusercontent.com/shuaibiyy/awesome-terraform/master/terraform.svg" align="right" width="100">](https://terraform.io)
> [コントリビューション](https://github.com/shuaibiyy/awesome-tf/blob/master/contributing.md)を歓迎します！

Terraform を使うと、本番インフラを安全かつ予測可能な方法で作成、変更、改善できます。API を宣言型設定 file としてコード化するオープンソースツールであり、チーム間で共有し、コードとして扱い、編集、レビュー、バージョン管理できます。

## 目次 <!-- omit in toc -->

- [凡例](#legend)
- [公式リソース](#official-resources)
- [コミュニティ](#community)
- [書籍](#books)
- [学習](#learning-and-studying)
- [アプリ](#apps)
- [チュートリアルとブログ記事](#tutorials-and-blog-posts)
  - [初心者向けガイド](#beginner-guides)
  - [カスタム Provider の作成](#writing-custom-providers)
  - [使い方](#how-to)
  - [複数環境の設定](#multi-environment-configuration)
  - [Azure](#azure)
  - [AWS](#aws)
  - [Google Cloud](#google-cloud)
  - [その他](#miscellaneous)
- [コミュニティモジュール](#community-modules)
- [セルフホスト型 Registry](#self-hosted-registries)
- [マネージド Registry](#managed-registries)
- [Provider](#providers)
  - [HashiCorp がサポートする Provider](#hashicorp-supported-providers)
  - [ベンダーがサポートする Provider](#vendor-supported-providers)
  - [コミュニティ Provider](#community-providers)
- [テスト](#testing)
- [ツール](#tools)
  - [CI](#ci)
  - [VS Code 拡張機能](#vs-code-extensions)
- [ライブラリ](#libraries)
- [ひな型](#boilerplates)
- [セルフホスト型 Terraform Platform](#self-hosted-terraform-platforms)
- [マネージド Terraform Platform :heavy\_dollar\_sign:](#managed-terraform-platforms-heavy_dollar_sign)
- [Terraform Enterprise 用ツール](#terraform-enterprise-tooling)
- [動画](#videos)
- [エディタープラグイン](#editor-plugins)
- [ライセンス](#license)

## 凡例

- _terraform >= 0.12_ と互換性なし :ghost:
- 開発終了 :skull:
- 有料 :heavy_dollar_sign:

## 公式リソース

- [Hashicorp Terraform Blog](https://www.hashicorp.com/en/blog/products/terraform)
- [Introduction to Terraform](https://developer.hashicorp.com/terraform/intro)
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform learn](https://developer.hashicorp.com/terraform/tutorials)

## コミュニティ

- [weekly.tf - Terraform Weekly Newsletter](https://www.weekly.tf/) - Terraform のニュース、OSS project、お知らせ、議論を扱う週刊ニュースレター。
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
- [The Claude Agent Skill for Terraform and OpenTofu - testing, modules, CI/CD, and production patterns](https://github.com/antonbabenko/terraform-skill) - Terraform と OpenTofu のテスト、module 設計、CI/CD、本番環境向けパターンを扱う Claude Code skill。
- [awesome-terraform-compliance](https://github.com/antonbabenko/awesome-terraform-compliance) - Terraform compliance と security のツール、framework、resource 集。
- 言語別コミュニティ:
  - [Telegram（ウクライナ語話者コミュニティ）](https://t.me/terraform_ukraine)

## 書籍

- [Big Little Book On Terraform](https://www.amazon.com/Big-Little-Book-Terraform-Omos-ebook/dp/B07PWYPNX8/)
- [Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Second Edition](https://www.manning.com/books/bootstrapping-microservices-second-edition)
- [Deep-Dive Terraform on Azure](https://link.springer.com/book/10.1007/978-1-4842-7328-9)
- [Getting Started with Terraform, 2nd ed.](https://www.amazon.com/Getting-Started-Terraform-production-infrastructure/dp/1788623533/)
- [HashiCorp Infrastructure Automation Certification Guide](https://www.amazon.com/HashiCorp-Infrastructure-Automation-Certification-Guide-ebook/dp/B092KM7LXC/)
- [IaC starting with Terraform (Korean)](https://product.kyobobook.co.kr/detail/S000202478097)
- [Infrastructure as Code](https://www.oreilly.com/library/view/infrastructure-as-code/9781491924334/)
- [Patterns and Practices for Infrastructure as Code: With examples in Python and Terraform](https://www.manning.com/books/infrastructure-as-code-patterns-and-practices)
- [Terraform Best Practices](https://www.terraform-best-practices.com/) - [オープンソース電子書籍](https://github.com/antonbabenko/terraform-best-practices)
- [Terraform Cookbook](https://www.amazon.com/Terraform-Cookbook-Efficiently-Infrastructure-platforms/dp/1800207557)
- [Terraform for Ops e-book](https://www.terraformforops.com)
- [Terraform in Action](https://www.manning.com/books/terraform-in-action)
- [Terraform in Depth](https://www.manning.com/books/terraform-in-depth)
- [Terraform: Up & Running, 3rd ed.](https://www.terraformupandrunning.com/)
- [The Terraform Book](https://terraformbook.com/)

## 学習

- [Terraform Academy](https://www.terraformacademy.app) - 実践ラボ、資格対策（HashiCorp、AWS、GCP、Azure、Docker、Kubernetes、GitOps）、AI coaching、進捗管理を備えた Terraform / IaC 学習 platform。[SRE Pro Tips blog](https://www.terraformacademy.app/protips/?cat=sre-pro-tips) と以下の mobile/PWA app も参照。
- [Terraform Terminal Simulator](https://devops-daily.com/games/terraform-terminal-simulator) - browser simulator で init、plan、apply を練習。無料のOSS、登録不要。
- [compliance.tf docs](https://compliance.tf/docs/) - SOC 2、PCI DSS、HIPAA、NIST 800-53 など35以上のcompliance control向け無料Terraform実装。準拠したinfrastructure code作成のopen reference。
- [DevOpsLesson Terraform Playground](https://devopslesson.com/playground/terraform) - HCL 演習と command 練習ができる無料の browser ベース Terraform simulator。

## アプリ

モバイル、デスクトップ、PWA アプリで、外出先でも Terraform を学習・利用。

- [Terraform Academy — iOS](https://apps.apple.com/us/app/terraform-academy/id6745738634) - Terraform Academy の iOS app。実践ラボ、資格対策、AI coaching、端末間の進捗同期。資格対策はHashiCorp、AWS、GCP、Azure、Docker、Kubernetes、GitOps。
- [Terraform Academy — Android](https://play.google.com/store/apps/details?id=com.terraformacade1.app) - Terraform Academy の Android app。iOS/Web 版と同じラボ、資格対策、AI coaching を提供。
- [Terraform Academy — PWA / Web App](https://www.terraformacademy.app/) - インストール可能な Terraform Academy Progressive Web App。offline 動作し、home screen に追加でき、mobile app と進捗同期。

## チュートリアルとブログ記事

### 初心者向けガイド

- [A Comprehensive Guide to Terraform](https://www.gruntwork.io/blog/a-comprehensive-guide-to-terraform) - 『Terraform: Up & Running』著者によるブログシリーズ。入門から実環境での活用まで案内。
- [Using Terraform for Cloud Deployments - Part 1](https://dev.to/koenighotze/using-terraform-for-cloud-deployments---part-1) - EC2 instance の provision。
- [Hello, world: The Fargate/Terraform tutorial I wish I had](https://section411.com/2019/07/hello-world/) - ECS Fargate cluster のゼロからの構築方法。
- [Terraform Security Guide](https://sysdig.com/blog/terraform-security-best-practices/) - Terraform 利用時の security best practice。
- [Building a SaaS API? Don't Forget Your Terraform Provider](https://www.speakeasy.com/blog/build-terraform-providers) - Terraform Provider を書くべき理由。
- [Complete Terraform Course in French (Free)](https://blog.stephane-robert.info/docs/infra-as-code/provisionnement/terraform/) – 初心者から上級者まで、実践例と best practice で Terraform を学ぶ包括的な無料フランス語 course。
- [Introduction to Terraform](https://devopslesson.com/tutorials/terraform/introduction-to-terraform) - Provider、resource、state、初めての apply などを実践例で学ぶ初心者向け guide。

### カスタム Provider の作成

- [Creating custom terraform providers](https://blog.pelo.tech/creating-custom-terraform-providers-341311823fa2) - カスタム Provider 作成ガイド。
- [Writing a Terraform provider](https://web.archive.org/web/20220516140659/http://blog.jfabre.net/2017/01/22/writing-terraform-provider/) - カスタム Provider 作成ガイド。
- [Writing Custom Providers](https://developer.hashicorp.com/terraform/plugin/sdkv2) - カスタム Provider 作成の公式 documentation。
- [Terraform Provider Code generation](https://www.speakeasy.com/docs/terraform/create-terraform) - OpenAPI 仕様から Terraform Provider を生成する guide（vendor support）。

### 使い方

- [How To Write OPA for Terraform](https://scalr.com/learning-center/opa-series-part-1-open-policy-agent-and-terraform) - Open Policy Agent で Terraform plan を評価し、policy を適用する方法。
- [Deploying Discourse with Terraform](https://www.hashicorp.com/en/blog/deploying-discourse-with-terraform) - Terraform で DigitalOcean に Discourse instance を1 command で作成。
- [Deploying Django to AWS ECS with Terraform](https://testdriven.io/blog/deploying-django-to-ecs-with-terraform/) - ECS 上の Django app に必要な AWS infrastructure を Terraform で構築。
- [Easily Deploy A Seneca Microservice to ECS with Wercker and Terraform: Part I](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-i/), [II](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-ii/) & [III](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-iii/) - マイクロサービス deployment pipeline に Terraform を組み込む方法。
- [Terraform for a Highly Available VPN between AWS and Azure](https://web.archive.org/web/20210616132857/https://deployeveryday.com/2020/04/13/vpn-aws-azure-terraform.html) - AWS-Azure 間の高可用性 VPN を deploy する Terraform code。
- [Terraforming 1Password](https://1password.com/blog/terraforming-1password) - 1Password の CloudFormation から Terraform への移行方法。
- [Tutorial: How to Use Terraform to Deploy OpenStack Workloads](https://web.archive.org/web/20170611135511/http://www.stratoscale.com/blog/openstack/tutorial-how-to-use-terraform-to-deploy-openstack-workloads/) - OpenStack Provider による Web server の簡単な deploy 方法。
- [Zero Downtime Updates with HashiCorp Terraform](https://www.hashicorp.com/en/blog/zero-downtime-updates-with-terraform) - infrastructure の downtime をゼロにする方法。
- [Google Cloud Platform for 10$ a month using terraform](https://github.com/nufailtd/terraform-budget-gcp) - Terraform で Google Kubernetes Cluster、Google Cloud Run service 等を月額[10ドル](https://nufailtd.github.io/budget-gcp/)未満で安全に作成。
- [Infracost + Terraform + GitHub Actions = Automate Cloud Cost Management](https://medium.com/better-programming/infracost-terraform-github-actions-automate-cloud-cost-management-a62b329f2834) - Terraform 開発中のクラウド費用管理 guardrail として Infracost を使用。
- [How To Wrap Your Terraform Provider for Pulumi](https://www.speakeasy.com/blog/pulumi-terraform-provider) - Terraform Provider を Pulumi 対応にする方法。
- [How to Build an AWS Account Vending Machine](https://medium.com/@StackGuardian/how-to-build-an-aws-account-vending-machine-by-stackguardian-f2895e35a27b) - StackGuardian の Terraform stack による AWS account 自動セルフサービス管理。SSM 割当、EventBridge cleanup、Tirith policy enforcement を含む。

### 複数環境の設定

- [Terraform Design Patterns: the Terrafile](https://bensnape.com/2016/01/14/terraform-design-patterns-the-terrafile/) - Terrafile による Terraform project 内のmodule/version管理。
- [Terraform, VPC, and why you want a tfstate file per env](https://charity.wtf/2016/03/30/terraform-vpc-and-why-you-want-a-tfstate-file-per-env/) - 複数環境の大規模 project で Terraform を使う際の注意点と回避法。
- [Using Pipelines to Manage Environments with Infrastructure as Code](https://medium.com/@kief/https-medium-com-kief-using-pipelines-to-manage-environments-with-infrastructure-as-code-b37285a1cbf5) - 環境間で変更を反映する pipeline の構築方法。

### Azure

- [Learning HashiCorp Terraform](https://web.archive.org/web/20201108000713/https://www.g10s.io/hashicorp-terraform/) - Azure 向け guide。
- [New Terraform Azure Automation Resources](https://bgelens.nl/terraform-automation-resources/) - Azure Automation。
- [Terraforming Azure PaaS](https://devkimchi.com/2019/01/21/terraforming-azure-paas/) - Azure に PaaS resource を deploy。
- [azure-az104](https://github.com/victorlane/azure-az104) - AZ-104 Azure Administrator 学習ノートと実践 Terraform 例（landing-zone architecture 含む）。

### AWS

- [AWS Lambda the Terraform Way](https://github.com/nsriram/lambda-the-terraform-way) - Terraform で AWS Lambda を深く理解。S3、API Gateway、DynamoDB、Kinesis、SQS 連携ガイドも掲載。
- [Managing AWS Lambda Functions with Terraform](https://spacelift.io/blog/terraform-aws-lambda) - AWS Lambda の用途と Terraform による関数管理方法。

### Google Cloud

- [Managing infrastructure as code with Terraform, Cloud Build, and GitOps](https://docs.cloud.google.com/docs/terraform/resource-management/managing-infrastructure-as-code) - Terraform、Cloud Build、GitOps による IaC 設定と管理。
- [Getting started with Terraform on Google Cloud](https://docs.cloud.google.com/docs/terraform/create-vm-instance) - Terraform で Google Cloud に VM を作成し、Python Flask server を起動。
- [Managing Cloud Infrastructure with Terraform](https://www.skills.google/course_templates/746) - Deploy Kubernetes Load Balancer Service with Terraform, HTTPS Content-Based Load Balancer with Terraform, Modular Load Balancing with Terraform - Terraform による Kubernetes load balancer、HTTPS content-based load balancer、regional load balancer、custom Provider、Cloud SQL、Google Cloud-AWS 間 VPN。
- [Hashicorp Terraform Tutorials for Google Cloud](https://developer.hashicorp.com/terraform/tutorials/gcp-get-started) - Google Cloud で Terraform を始める tutorial。
- [IAC - Terraform and Terragrunt on Google Cloud](https://www.academeez.com/courses/terraform) - Terraform/OpenTofu と Terragrunt で Google Cloud infra を構築する MIT license の OSS course。
- [Self-host n8n on Google Cloud Run](https://github.com/datawranglerai/self-host-n8n-on-gcr) - Cloud SQL、Secret Manager、任意の Redis Queue Mode を使い Cloud Run に n8n を deploy する Terraform 設定と guide。

### その他

- [Sharing data between Terraform configurations](https://web.archive.org/web/20230927082422/https://jamesmckay.net/2016/09/sharing-data-between-terraform-configurations/) - remote state で Terraform 設定間のデータを共有。
- [The Segment AWS Stack](https://web.archive.org/web/20250322120753/https://segment.com/blog/the-segment-aws-stack/) - Terraform を使った Segment のインフラが[「100万ドルのエンジニアリング課題」](https://segment.com/blog/the-million-dollar-eng-problem/)を解決した舞台裏を紹介。 ([Segment](https://segment.com/))。
- [Top 3 Terraform Testing Strategies for Ultra-Reliable Infrastructure-as-Code](https://www.contino.io/insights/top-3-terraform-testing-strategies-for-ultra-reliable-infrastructure-as-code)
- [Two Weeks with Terraform](https://charity.wtf/2016/02/23/two-weeks-with-terraform/) - 実環境で Terraform を使って得た経験と運用知見。
- [Terraform: Beyond the Basics with AWS](https://aws.amazon.com/blogs/apn/terraform-beyond-the-basics-with-aws/) - Terraform で AWS sample architecture を provision する demo の解説。
- [Terraform cost estimation](https://github.com/antonbabenko/terraform-cost-estimation) - Terraform plan（0.12+）または state file から匿名化された無料費用見積りを生成。[terraform-cost-estimation.com](https://terraform-cost-estimation.com) でも利用可能。
- [How to Debug Terraform Projects: Tutorial](https://spacelift.io/blog/terraform-debug)
- [The terraform-docs GitHub Action: A Complete CI Setup Guide](https://devtoolhub.com/terraform-docs-github-action/) - terraform-docs で各 PR に module docs を生成・自動 commit する方法、CI での OIDC/permission 注意点を含む完全な CI 設定 guide。

## コミュニティモジュール

ここに掲載されていないコミュニティモジュールについては、[Terraform Module Registry](https://registry.terraform.io/) を参照。

- [nis2shield/infrastructure](https://github.com/nis2shield/infrastructure) - NIS2 compliance 自動化と安全な infrastructure deploy 用 Terraform module。
- [rancher-terraform-digitalocean](https://github.com/lunagt/rancher-terraform-digitalocean) - DigitalOcean 上の Rancher server。
- [segmentio/stack](https://github.com/segmentio/stack) - AWS、Docker、ECS による本番 infrastructure。
- [terraform-aws-account-lookup](https://github.com/be-bold/terraform-aws-account-lookup) - AWS account を検索し、mapping または一覧を出力。検索 filter や既存 tag による group 化にも対応する Terraform module。
- [terraform-aws-alb](https://github.com/terraform-aws-modules/terraform-aws-alb) - AWS に Application Load Balancer 作成（検証済みmodule）。
- [terraform-aws-appconfig](https://github.com/terraform-aws-modules/terraform-aws-appconfig) - AWS AppConfig resource 作成。
- [terraform-aws-atlantis](https://github.com/terraform-aws-modules/terraform-aws-atlantis) - AWS Fargate 上で [Atlantis](https://runatlantis.io) を動かす Terraform 設定。GitHub、GitLab、Bitbucket 対応。
- [terraform-aws-autoscaling](https://github.com/terraform-aws-modules/terraform-aws-autoscaling) - Auto Scaling Group と Launch Configuration 作成（検証済みmodule）。
- [terraform-aws-customer-gateway](https://github.com/terraform-aws-modules/terraform-aws-customer-gateway) - AWS Customer Gateway 作成。
- [terraform-aws-datadog-forwarders](https://github.com/terraform-aws-modules/terraform-aws-datadog-forwarders) - AWS log/metric を Datadog に転送するresource作成。
- [terraform-aws-dms](https://github.com/terraform-aws-modules/terraform-aws-dms) - AWS DMS resource 作成。
- [terraform-aws-dynamodb-table](https://github.com/terraform-aws-modules/terraform-aws-dynamodb-table) - AWS DynamoDB table 作成。
- [terraform-aws-ec2-instance](https://github.com/terraform-aws-modules/terraform-aws-ec2-instance) - AWS EC2 instance 作成。
- [terraform-aws-ecr](https://github.com/cloudposse/terraform-aws-ecr) - AWS ECR の Docker container registry 管理。
- [terraform-aws-ecs](https://github.com/terraform-aws-modules/terraform-aws-ecs) - AWS ECS resource 作成。
- [terraform-aws-efs](https://github.com/cloudposse/terraform-aws-efs) - EFS file system 定義。
- [terraform-aws-eks](https://github.com/terraform-aws-modules/terraform-aws-eks) - AWS Elastic Kubernetes Service 作成（人気module）。
- [terraform-aws-elb](https://github.com/terraform-aws-modules/terraform-aws-elb) - AWS Elastic Load Balancer 作成（検証済みmodule）。
- [terraform-aws-eventbridge](https://github.com/terraform-aws-modules/terraform-aws-eventbridge) - AWS EventBridge resource 作成。
- [terraform-aws-jenkins-ha-agents](https://github.com/neiman-marcus/terraform-aws-jenkins-ha-agents) - 高可用性（Spot）agent 付き EC2 ベース Jenkins deployment。immutability のため EFS 使用。柔軟に設定でき妥当な初期値を提供。
- [terraform-aws-jenkins](https://github.com/cloudposse-archives/terraform-aws-jenkins) - Jenkins Docker image を build して ECR に保存し、Docker stack 用 Elastic Beanstalk に deploy。
- [terraform-aws-key-pair](https://github.com/cloudposse/terraform-aws-key-pair) - SSH key pair（公開鍵/秘密鍵）自動生成。
- [terraform-aws-lambda-auto-package](https://github.com/nozaq/terraform-aws-lambda-auto-package) - source file を自動 build/package し Lambda に deploy する関数用 Terraform module。
- [terraform-aws-lambda](https://github.com/terraform-aws-modules/terraform-aws-lambda) - dependency の build/package と多様な AWS Lambda resource 作成を行う Terraform module。
- [terraform-aws-managed-service-prometheus](https://github.com/terraform-aws-modules/terraform-aws-managed-service-prometheus) - AWS Managed Service for Prometheus resource 作成。
- [terraform-aws-modules](https://github.com/terraform-aws-modules) - コミュニティ提供の Terraform AWS module 集（公式module含む）。
- [terraform-aws-msk-kafka-cluster](https://github.com/terraform-aws-modules/terraform-aws-msk-kafka-cluster) - AWS MSK resource 作成。
- [terraform-aws-notify-slack](https://github.com/terraform-aws-modules/terraform-aws-notify-slack) - Slack 通知用 SNS topic と Lambda function 作成。
- [terraform-aws-postgresql-rds](https://github.com/azavea/terraform-aws-postgresql-rds) - RDS 上に PostgreSQL 作成。
- [terraform-aws-rds-aurora](https://github.com/terraform-aws-modules/terraform-aws-rds-aurora) - AWS RDS Aurora cluster resource 作成（検証済みmodule）。
- [terraform-aws-rds-proxy](https://github.com/terraform-aws-modules/terraform-aws-rds-proxy) - AWS RDS Proxy resource 作成。
- [terraform-aws-rds](https://github.com/terraform-aws-modules/terraform-aws-rds) - AWS RDS resource 作成（検証済みmodule）。
- [terraform-aws-redshift](https://github.com/terraform-aws-modules/terraform-aws-redshift) - Redshift resource 作成。
- [terraform-aws-route53](https://github.com/terraform-aws-modules/terraform-aws-route53) - Route53 resource 作成。
- [terraform-aws-s3-bucket](https://github.com/terraform-aws-modules/terraform-aws-s3-bucket) - S3 bucket resource 作成。
- [terraform-aws-secure-baseline](https://github.com/nozaq/terraform-aws-secure-baseline) - CIS Amazon Web Services Foundations 準拠の安全な baseline で AWS account を設定。
- [terraform-aws-security-group](https://github.com/terraform-aws-modules/terraform-aws-security-group) - AWS EC2-VPC security group 作成（検証済みmodule）。
- [terraform-aws-ssh-bastion-service](https://github.com/joshuamkite/terraform-aws-ssh-bastion-service) - AWS 上に stateless service として SSH bastion を deploy する Terraform plan。
- [terraform-aws-transit-gateway](https://github.com/terraform-aws-modules/terraform-aws-transit-gateway) - AWS Transit Gateway resource 作成。
- [terraform-aws-vpc](https://github.com/terraform-aws-modules/terraform-aws-vpc) - AWS VPC resource 作成（検証済みの人気module）。
- [terraform-aws-vpn-gateway](https://github.com/terraform-aws-modules/terraform-aws-vpn-gateway) - AWS VPN gateway resource 作成。
- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Azure 向け検証済み Terraform module の Microsoft 公式集。WAF best practice を体系化し一貫した deploy を実現。
- [terraform-azurerm-aks](https://github.com/kjanshair/terraform-azurerm-aks) - Azure AKS resource 作成。
- [terraform-azurerm-iis](https://github.com/ghostinthewires/terraform-azurerm-iis-install) - Azure VM に IIS Server をインストール。
- [terraform-azurerm-mysql](https://github.com/foreverXZC/terraform-azurerm-mysql) - Azure MySQL Database 作成。
- [terraform-azurerm-redis](https://github.com/rahulkhengare/terraform-azurerm-redis) - Azure Redis 作成。
- [terraform-azurerm-sqlserver](https://github.com/metadevpro/terraform-azurerm-sqlserver-seed) - Azure SQL Server Database 作成。
- [terraform-cloudflare-maintenance](https://github.com/adinhodovic/terraform-cloudflare-maintenance) - Cloudflare Workers による maintenance page module。
- [terraform-digitalocean-droplet](https://registry.terraform.io/modules/terraform-digitalocean-modules/droplet/digitalocean/latest) - DigitalOcean Droplet 関連 resource 管理用 Terraform module。
- [terraform-ecs-jenkins](https://github.com/shuaibiyy/terraform-ecs-jenkins) - Terraform で AWS ECS に Jenkins を provision。
- [terraform-gce-atlantis](https://github.com/runatlantis/terraform-gce-atlantis) - Google Compute Engine で [Atlantis](https://runatlantis.io) を動かす Terraform 設定。
- [terraform-google-project-factory](https://github.com/terraform-google-modules/terraform-google-project-factory) - Shared VPC、IAM、API などを使った Google Cloud Platform project の作成・設定。
- [terraform-helm-carbon-intensity-exporter](https://github.com/fabiocicerchia/terraform-helm-carbon-intensity-exporter) - Kubernetes Carbon Intensity Exporter 用 Terraform/Helm module。
- [terraform-helm-cloud-carbon-footprint](https://github.com/fabiocicerchia/terraform-helm-cloud-carbon-footprint) - Kubernetes 上の Cloud Carbon Footprint 用 Terraform/Helm module。
- [terraform-helm-kepler](https://github.com/fabiocicerchia/terraform-helm-kepler) - Helm で Kepler（Kubernetes power profiling）を deploy する Terraform module。
- [terraform-kubestack](https://github.com/kbst/terraform-kubestack) - Kubestack は Kubernetes platform team が単一 Terraform codebase で cloud-native stack 全体を定義し、GitOps で安全に進化させる framework。
- [terraform-linode-k8s](https://registry.terraform.io/modules/linode/k8s/linode/latest) - Linode instance に Kubernetes を導入。
- [terraform-nixos](https://github.com/nix-community/terraform-nixos) - NixOS deploy 用 Terraform module 集。
- [terraform-static-website-s3-cloudfront](https://github.com/sergej-brazdeikis/terraform-static-website-s3-cloudfront) - 変数に基づき AWS S3/CloudFront に static website 作成。
- [tf_aws_bastion_s3_keys](https://github.com/terraform-community-modules/tf_aws_bastion_s3_keys) - AWS EC2 上の bastion host 作成。
- [typhoon](https://github.com/poseidon/typhoon) - Terraform を使った、最小構成で無料の Kubernetes ディストリビューション。

## セルフホスト型 Registry

- [anthology](https://github.com/erikvanbrakel/anthology) - 公式 registry の代替となるプライベート Terraform registry 実装。
- [boring-registry](https://github.com/boring-registry/boring-registry) - API key 認証と blob storage 対応のプライベート Terraform Module/Provider Registry。
- [citizen](https://github.com/outsideris/citizen) - プライベート Terraform Module/Provider Registry。
- [nrkno/terraform-registry](https://github.com/nrkno/terraform-registry) - module 式 store backend を備えたプライベート Terraform registry。
- [petra](https://github.com/devoteamgcloud/petra) - プライベート Terraform Registry Manager。
- [philips-labs/terraform-registry](https://github.com/philips-labs/terraform-registry) - GitHub 上の任意の Terraform Provider release を配信する registry。
- [tapir](https://github.com/PacoVK/tapir) - プライベート Terraform Registry。
- [terraform-simple-registry](https://github.com/apparentlymart/terraform-simple-registry) - Terraform registry protocol の簡易実装。
- [terramantle.dev](https://terramantle.dev) - module/state 分析を重視し、dependency 管理に取り組む registry。
- [Terrareg](https://github.com/matthewjohn/terrareg) - Terraform module registry。
- [terustry](https://github.com/veepee-oss/terustry) - GitLab/GitHub release の proxy となる OSS Terraform Provider registry。
- [terralist](https://github.com/terralist/terralist) - REST API で管理できる module/provider 用 private Terraform Registry。

## マネージド Registry

- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Well-Architected Framework に沿った Azure resource/architecture 用の、検証済み標準準拠 Terraform/Bicep module を提供する Microsoft 公式 initiative。
- [cloudsmith](https://docs.cloudsmith.com/formats/terraform-modules-repository) - 社内外の顧客向け managed package hosting service。
- [Terramantle](https://terramantle.dev) - module insight、dependency mapping、state visibility を備える private Terraform/OpenTofu registry。

## Provider

### HashiCorp がサポートする Provider

- [terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) - Amazon Web Services 用 Provider。
- [terraform-provider-azurerm](https://github.com/hashicorp/terraform-provider-azurerm) - Azure 用 Provider。
- [terraform-provider-docker](https://github.com/hashicorp/terraform-provider-docker) - Docker 用 Provider。
- [terraform-provider-google](https://github.com/hashicorp/terraform-provider-google) - Google Cloud Platform 用 Provider。
- [terraform-provider-helm](https://github.com/hashicorp/terraform-provider-helm) - Helm 用 Provider。
- [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) - Kubernetes 用 Provider。
- [terraform-provider-vsphere](https://github.com/vmware/terraform-provider-vsphere) - VMware vSphere 用 Provider。

### ベンダーがサポートする Provider

- [terraform-provider-alicloud](https://github.com/aliyun/terraform-provider-alicloud) - Alibaba Cloud 用 Provider。
- [terraform-provider-artifactory](https://github.com/jfrog/terraform-provider-artifactory) - [JFrog Artifactory](https://jfrog.com/artifactory/) 用 Provider。
- [terraform-provider-atlas](https://github.com/ariga/terraform-provider-atlas) - [Atlas](https://atlasgo.io/) 用 Provider。
- [terraform-provider-azapi](https://github.com/Azure/terraform-provider-azapi) - Azure Resource Manager REST API 用 Provider。
- [terraform-provider-azuredevops](https://github.com/microsoft/terraform-provider-azuredevops) - Azure DevOps（VSTS）用 Provider。
- [terraform-provider-buildkite](https://github.com/buildkite/terraform-provider-buildkite) - Buildkite 用 Provider。
- [terraform-provider-checkly](https://github.com/checkly/terraform-provider-checkly) - API/E2E monitoring 用 [Checkly](https://www.checklyhq.com) resource を管理。
- [terraform-provider-coder](https://github.com/coder/terraform-provider-coder) - [Coder](https://coder.com) 用 Provider。
- [terraform-provider-confluent](https://github.com/confluentinc/terraform-provider-confluent) - Confluent 用 Provider。
- [terraform-provider-datadog](https://github.com/DataDog/terraform-provider-datadog) - Datadog 用 Provider。
- [terraform-provider-devhelm](https://github.com/devhelmhq/terraform-provider-devhelm) - 稼働監視 [DevHelm](https://devhelm.io) 用。monitor、alert channel、status page を code で管理。
- [terraform-provider-digitalocean](https://github.com/digitalocean/terraform-provider-digitalocean) - DigitalOcean 用 Provider。
- [terraform-provider-dominos](https://github.com/nat-henderson/terraform-provider-dominos) - Dominos Pizza 用 Provider。
- [terraform-provider-elasticstack](https://github.com/elastic/terraform-provider-elasticstack) - Elasticsearch と Kibana 用 Provider。
- [terraform-provider-env0](https://github.com/env0/terraform-provider-env0) - [env0](https://www.env0.com/) 用 Provider。
- [terraform-provider-featureflip](https://github.com/canopy-labs/terraform-provider-featureflip) - [Featureflip](https://featureflip.io/) feature flag（project、environment、flag、targeting rule、segment、SDK key）を管理。
- [terraform-provider-github](https://github.com/integrations/terraform-provider-github) - GitHub 用 Provider。
- [terraform-provider-gitlab](https://github.com/gitlabhq/terraform-provider-gitlab) - GitLab 用 Provider。
- [terraform-provider-graphql](https://github.com/sullivtr/terraform-provider-graphql) - GraphQL query/mutation 用 Provider。
- [terraform-provider-hcloud](https://github.com/hetznercloud/terraform-provider-hcloud) - Hetzner Cloud 用 Provider。
- [terraform-provider-healthchecksio](https://github.com/kristofferahl/terraform-provider-healthchecksio) - healthchecks.io resource 管理用 Provider。
- [terraform-provider-heroku](https://github.com/heroku/terraform-provider-heroku) - Heroku 用 Provider。
- [terraform-provider-ibm](https://github.com/IBM-Cloud/terraform-provider-ibm) - IBM Cloud 用 Provider。
- [terraform-provider-iterative](https://github.com/iterative/terraform-provider-iterative) - machine learning を想定した Terraform plugin。
- [terraform-provider-k8s](https://github.com/banzaicloud/terraform-provider-k8s) - 任意の manifest で使えるシンプルな Kubernetes Provider。
- [terraform-provider-keycloak](https://github.com/keycloak/terraform-provider-keycloak) - [Keycloak](https://www.keycloak.org/) identity provider server の設定を管理。
- [terraform-provider-linode](https://github.com/btobolaski/terraform-provider-linode) - Linode 用 Provider。
- [terraform-provider-nxip](https://github.com/uk-sw/terraform-provider-nxip) - cloud/on-premise 間の pool-based CIDR 割当 IPAM、[nxip](https://nx-ip.com) 用 Provider。
- [terraform-provider-openstack](https://github.com/terraform-provider-openstack/terraform-provider-openstack) - OpenStack 用 plugin。
- [terraform-provider-panos](https://github.com/PaloAltoNetworks/terraform-provider-panos) - [Palo Alto Networks 次世代 firewall](https://www.paloaltonetworks.com/network-security) 用 Provider。
- [terraform-provider-phare](https://github.com/phare/terraform-provider-phare) - [Phare](https://phare.io) 用 Terraform Provider。
- [terraform-provider-planetscale](https://github.com/planetscale/terraform-provider-planetscale) - [PlanetScale](https://planetscale.com)（Vitess/Postgres）用 Terraform Provider。
- [terraform-provider-qovery](https://github.com/Qovery/terraform-provider-qovery) - [Qovery](https://www.qovery.com/) 用 Provider。AWS、GCP、Azure、Scaleway の Kubernetes deployment、environment、app、database、Helm chart、Terraform service を管理。
- [terraform-provider-pingdom](https://github.com/russellcardullo/terraform-provider-pingdom) - Pingdom resource 管理用 Provider。
- [terraform-provider-rancher2](https://github.com/rancher/terraform-provider-rancher2) - Rancher v2 用 Provider。
- [terraform-provider-scalr](https://github.com/Scalr/terraform-provider-scalr) - [Scalr](https://www.scalr.com/) 用 Provider。
- [terraform-provider-secrethub](https://github.com/secrethub/terraform-provider-secrethub) - SecretHub 用 Provider。
- [terraform-provider-sigsci](https://github.com/signalsciences/terraform-provider-sigsci) - Signal Sciences 用 Provider。
- [terraform-provider-snowflake](https://github.com/snowflakedb/terraform-provider-snowflake) - Snowflake data warehouse 用 Provider。
- [terraform-provider-spinnaker](https://github.com/armory-io/terraform-provider-spinnaker) - [Spinnaker](https://spinnaker.io/) 用 Provider。
- [terraform-provider-spotinst](https://github.com/spotinst/terraform-provider-spotinst) - spotinst 用 Provider。
- [terraform-provider-stripe](https://github.com/franckverrot/terraform-provider-stripe) - Stripe 用 Provider。
- [terraform-provider-ucloud](https://github.com/ucloud/terraform-provider-ucloud) - UCloud resource 管理用 Provider。
- [terraform-provider-uptimerobot](https://github.com/louy/terraform-provider-uptimerobot) - uptimerobot resource 管理用 Provider。
- [terraform-provider-vaulted](https://github.com/sumup-oss/terraform-provider-vaulted) - Terraform で暗号化した HashiCorp Vault secret を管理し、Git などの SCM に保存可能。
- [terraform-provider-scp](https://github.com/splunk/terraform-provider-scp) - Splunk Cloud Platform 用 Provider。

### コミュニティ Provider

- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Coolify 用 Terraform Provider。
- [terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) - Terraform Docker Provider。
- [terraform-provider-minio](https://github.com/aminueza/terraform-provider-minio) - MinIO S3 bucket と IAM user 管理用 Terraform Provider。
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Multipass 用 Terraform Provider。
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - OpenRouter を code 管理（workspace、guardrail、支出上限 API key、組織 member）。Terraform/OpenTofu 対応。
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - Azure cost estimate と guardrail 用 Terraform Provider。
- [terraform-provider-proxmox](https://github.com/Telmate/terraform-provider-proxmox) - Terraform Proxmox Provider。
- [terraform-provider-seerr](https://github.com/Josh-Archer/terraform-provider-seerr) - Seerr（Overseerr/Jellyseerr）用 Terraform Provider。
- [terraform-provider-terracurl](https://github.com/devops-rob/terraform-provider-terracurl) - target endpoint への managed/unmanaged API call 用 Provider。
- [terraform-provider-uname](https://github.com/julienlevasseur/terraform-provider-uname) - Terraform Uname Provider。
- [terraform-provider-value](https://github.com/pseudo-dynamic/terraform-provider-value) - Terraform Value Provider。
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Multipass 用 Terraform Provider。
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - OpenRouter を code 管理（workspace、guardrail、支出上限 API key、組織 member）。Terraform/OpenTofu 対応。
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - Azure cost estimate と guardrail 用 Terraform Provider。
- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Coolify 用 Terraform Provider。
- [terraform-provider-appstore](https://github.com/elevenode/terraform-provider-appstore) - Apple App Store Connect 用 Terraform Provider。
- [terraform-provider-expo](https://github.com/elevenode/terraform-provider-expo) - Expo Application Services（EAS）用 Terraform Provider。
- [terraform-provider-paddle](https://github.com/vivantel/terraform-provider-paddle) - Paddle Billing の catalog resource、lifecycle action、lookup data source 用 Terraform Provider。
- [terraform-provider-seekrit](https://github.com/seekritdev/terraform-provider-seekrit) - seekrit app、environment、group、service token、key grant、secret を管理。write-only argument と ephemeral resource により secret 値を state に残さない。

## テスト

- [clarity](https://github.com/xchapter7x/clarity) - Terraform 単体 test 用 declarative test framework。
- [kitchen-terraform](https://github.com/newcontext-oss/kitchen-terraform) - Test Kitchen で Terraform 設定を適用し、InSpec control で Terraform state を検証する plugin 集。
- [rspec-terraform](https://github.com/bsnape/rspec-terraform) - Terraform module 用 RSpec test。
- [terraform_validate](https://github.com/elmundio87/terraform_validate) - Terraform でユーザー定義標準の適用を支援。
- [terraform-compliance](https://github.com/terraform-compliance/cli) - Terraform file 用 BDD test。
- [terratest](https://github.com/gruntwork-io/terratest) - infrastructure code の自動 test を容易にする Go library。

## ツール

- [AIaC](https://github.com/gofireflyio/aiac) - AI による Infrastructure as Code generator。
- [AirIAM](https://github.com/bridgecrewio/AirIAM) - 最小権限 Terraform 実行 framework 用 AWS IAM tool。
- [asdf](https://github.com/asdf-community/asdf-hashicorp) - [asdf](https://github.com/asdf-vm/asdf) version manager 用 HashiCorp plugin。
- [astro](https://github.com/uber/astro/) - 複数 Terraform 実行を単一 command で管理。
- [atlantis](https://github.com/runatlantis/atlantis) - GitHub を介した Terraform 協業 workflow。
- [atmos](https://github.com/cloudposse/atmos) - 深く merge した YAML を module input に変換する汎用 tool。
- [aws2tf](https://github.com/aws-samples/aws2tf) - 既存 AWS resource を Terraform に自動 import し HCL code を出力。
- [aztfexport](https://github.com/Azure/aztfexport) - 既存 Azure resource を Terraform 管理下に取り込む tool。
- [AzureNamer](https://azurenamingconventions.com/) - 200種超の Azure resource 向け CAF 準拠名を生成し Terraform local として出力。長さと文字をリアルタイム検証。
- [balcony](https://oguzhan-yilmaz.github.io/balcony/) - AWS API を簡単に読む CLI。Terraform import block と resource code も生成。
- [bare-devcontainer/templates](https://github.com/bare-devcontainer/templates/tree/main/src/terraform) - terraform-ls と rebuild 向け cache を備える security 重視 Terraform dev container。base image は [bare-devcontainer/images](https://github.com/bare-devcontainer/images/tree/main/terraform)。
- [blast radius](https://github.com/28mm/blast-radius) - Terraform dependency graph の対話型可視化。
- [cf-terraforming](https://github.com/cloudflare/cf-terraforming) - 既存 Cloudflare resource の Terraform 化を支援する CLI。
- [cfnctl](https://github.com/rogerwelin/cfnctl) - AWS CloudFormation に Terraform CLI の操作性を提供。
- [Checkov](https://github.com/bridgecrewio/checkov/) - terraform >=0.12 用静的解析 tool。
- [cloud-audit](https://github.com/gebalamariusz/cloud-audit) - 誤設定修正用 Terraform code を生成する AWS security audit CLI。
- [CloudBurn](https://github.com/towardsthecloud/cloudburn) - CI と実 AWS account で Terraform/CloudFormation の AWS cost policy を検査。
- [Coder](https://coder.com/) - Coder は Terraform 経由で自社 infra に開発環境を provision。
- [coretech/terrafile](https://github.com/coretech/terrafile) - Terraform 用 GitHub 外部 module を体系管理（Go）。
- [Cynative](https://github.com/cynative/cynative) - Terraform 設定を review し、read-only cloud API で稼働 infrastructure を調査する OSS security agent framework。
- [Datadef](https://datadef.io/repo-to-diagram) - Terraform repo から architecture 図/docs を生成。.tf を解析し terraform init/state 読込は不要。environment 別 module 数を表示し毎日再同期。
- [demonolith](https://github.com/schrieksoft/demonolith) - `demonolith refactor` で code 移動、`demonolith migrate` で小規模 .tfstate に移行し巨大 project を分割。
- [driftctl](https://github.com/snyk/driftctl) - infrastructure drift の検出、追跡、通知。
- [drifthound](https://github.com/drifthoundhq/drifthound) - 履歴記録と通知付きの継続的 infrastructure drift 検出。
- [dxw/terrafile](https://github.com/dxw/terrafile) - Terraform 用 GitHub 外部 module を体系管理（Ruby）。
- [flora](https://github.com/ketchoop/flora) - Terraform version manager。
- [fogg](https://github.com/chanzuckerberg/fogg) - Terraform repository 管理の手間を減らす tool。
- [former2](https://github.com/iann0036/former2) - 既存 AWS resource から Terraform 設定を生成。
- [fuzzy-terraform-rm](https://github.com/paololazzari/fuzzy-terraform-rm) - Terraform state から resource を削除する fuzzy finder CLI。
- [gaia](https://github.com/gaia-app/gaia) - Gaia は module と self-service infrastructure 用 Terraform 🌍 UI。
- [hcl2json](https://github.com/tmccombs/hcl2json) - HCL2 を JSON に変換。
- [hcldump](https://github.com/magodo/hcldump) - HCL (v2) abstract syntax tree を出力。
- [hcledit (mercari)](https://github.com/mercari/hcledit) - HCL 設定編集用 Go package。
- [hcledit (minamijoyo)](https://github.com/minamijoyo/hcledit) - HCL command-line editor。
- [hclgrep](https://github.com/magodo/hclgrep) - HCL(v2) syntax-based grep。
- [hq](https://github.com/miller-time/hq) - command-line HCL processor。
- [iam-policy-json-to-terraform](https://github.com/flosell/iam-policy-json-to-terraform) - JSON IAM Policy を Terraform aws_iam_policy_document に変換する小型 tool。
- [Infracost](https://github.com/infracost/infracost) - CLI と pull request で Terraform cloud cost を見積り。
- [inframap](https://github.com/cycloidio/inframap) - tfstate/HCL を読み provider ごとの重要 resource graph を生成。
- [InfraScan](https://infrascan.soldevelo.com) - Terraform、AWS、Kubernetes の cost/security 分析用高度な infrastructure auditor。
- [InfraSketch](https://infrasketch.cloud) - Terraform HCL と Docker Compose を architecture 図にする無料 browser tool。AWS/Azure 対応、登録・credential 不要。
- [json2hcl](https://github.com/kvz/json2hcl) - JSON と HCL の相互変換。
- [k2tf](https://github.com/sl1pm4t/k2tf) - Kubernetes YAML から Terraform HCL への変換。
- [Kapitan](https://github.com/kapicorp/kapitan) - inventory-based template から Terraform/OpenTofu JSON 等の infrastructure config を生成。
- [KICS](https://github.com/Checkmarx/kics) - IaC project を scan し security vulnerability、compliance 問題、誤設定を検出。Terraform、Kubernetes manifest、Dockerfile、CloudFormation、Ansible 対応。
- [layerform](https://github.com/briefercloud/layerform) - 通常の .tf file で再利用可能な environment stack を作成。複数 staging 環境向け。
- [library.tf](https://library.tf) - Terraform/OpenTofu registry 情報と選定知見を提供。保守され bug の少ない module/provider を素早く発見。
- [modules.tf-lambda](https://github.com/antonbabenko/modules.tf-lambda) - [Cloudcraft.co](https://cloudcraft.co) の図から Terraform を生成する IaC generator。
- [para](https://github.com/paraterraform/para) - The missing 3rd-party plugin manager and a "Swiss army knife" for Terraform/Terragrunt - Terraform/Terragrunt 向け third-party plugin manager と万能 tool。workflow を一つで支援。
- [pike](https://github.com/jamesWoolfenden/pike) - Terraform 構築に必要な permission または IAM policy を計算。
- [pipeform](https://github.com/magodo/pipeform) - Terraform runtime の TUI。
- [platform-skills](https://github.com/nitinjain999/platform-skills) - Terraform 向け AI 支援 handbook。IAM 最小権限 review、影響範囲/state 分析、provider 制約、rollback 計画。Claude、Codex、Cursor、Copilot plugin として利用。
- [pluralith](https://www.pluralith.com/) - Terraform state の可視化と infrastructure docs の自動生成。
- [pre-commit-terraform](https://github.com/antonbabenko/pre-commit-terraform) - Terraform/Terragrunt 用 pre-commit hook。format、validate、docs 更新、security check、cost 見積り等。
- [pretf](https://github.com/raymondbutcher/pretf) - Python で Terraform config を生成する drop-in wrapper。[pretf documentation](https://pretf.readthedocs.io/en/latest/)。
- [prettyplan for TF 0.12+](https://github.com/cloudandthings/terraform-pretty-plan) - TF 0.12+ 向け Prettyplan。[オンライン版](https://cloudandthings.github.io/terraform-pretty-plan/)は、大きな Terraform plan を簡単に確認できる小さな tool。
- [prettyplan](https://github.com/chrislewisdev/prettyplan) - Prettyplan の[オンライン版](https://chrislewisdev.github.io/prettyplan/)は、大きな Terraform plan を簡単に確認できる小さな tool。 :ghost:
- [pug](https://github.com/leg100/pug) - Terraform 上級者向け terminal UI。
- [pytest-terraform](https://github.com/cloud-custodian/pytest-terraform) - fixture と offline replay 対応 pytest Terraform plugin。
- [python-terrafile](https://github.com/claranet/python-terrafile) - Terraform 用 GitHub 外部 module の体系管理。
- [regula](https://github.com/fugue/regula) - deploy 前に Terraform IaC の AWS/Azure/Google Cloud セキュリティ誤設定と compliance 違反を評価。
- [redc](https://github.com/wgpsec/redc) - Terraform ベースの次世代 red team infrastructure automation。Alibaba Cloud、Tencent Cloud、AWS 等の multi-cloud 対応。red team 環境の作成/設定/破棄を一 command で実行。
- [renovate-config](https://github.com/SpotOnInc/renovate-config) - 特に DevOps 向け Renovatebot 共有設定 preset。
- [Riftmap](https://riftmap.dev) - Terraform、Docker、Helm 等の複数 repo infrastructure を scan する依存関係・変更影響分析 engine。何が依存し変更で何が壊れるかを可視化。
- [rover](https://github.com/im2nguyen/rover) - Terraform state/config の対話型 explorer。
- [ruby-terraform](https://github.com/infrablocks/ruby_terraform) - terraform command 実行用 Ruby wrapper。
- [sato](https://github.com/JamesWoolfenden/sato) - legacy CloudFormation を Terraform に変換。
- [scenery](https://github.com/dmlittle/scenery) - Terraform plan 出力の整形 tool。
- [scratchrelaxtv](https://github.com/YakDriver/scratchrelaxtv) - Simple Python tool to help with module development - module 開発用 Python tool。`main.tf` から変数を抽出して `variables.tf` を作り、module 利用 stub を生成。
- [serverless.tf - Doing serverless with Terraform](https://serverless.tf/) - Terraform で AWS 上の serverless app/infrastructure を開発、build、deploy、保護する独自仕様 OSS framework。[詳細](https://github.com/antonbabenko/serverless.tf)。
- [Shieldly](https://github.com/shieldly-io/cli) - Terraform 生成 IAM policy と CloudFormation の AI security 分析。permission のリスクと修正案を説明。無料枠、CLI、GitHub Action。
- [Shisho](https://github.com/flatt-security/shisho) - 軽量 Terraform 静的解析 tool。
- [Speakeasy](https://www.speakeasy.com/) - OpenAPI 仕様から Terraform Provider を生成。
- [stacks](https://github.com/cisco-open/stacks) - Terraform code pre-processor。
- [SyncVey](https://github.com/MR-TABATA/SyncVey) - tfstate と実 AWS state の属性単位 drift 検出、定期 scan、middleware EOL 通知を備える self-hosted AWS asset ledger。
- [tads-boilerplate](https://github.com/Thomvaill/tads-boilerplate) - Ansible/Terraform と Docker Swarm を組み合わせた IaC/DevOps best practice。
- [tau](https://github.com/avinor/tau) - 複数 deployment、dependency、secret を管理する Terraform wrapper。
- [tenv](https://github.com/tofuutils/tenv) - OpenTofu/Terraform/Terragrunt version manager。
- [terraboard](https://github.com/camptocamp/terraboard) - Terraform state を調べる Web dashboard。
- [terraboot](https://github.com/MastodonC/terraboot) - Terraform config を生成・実行する DSL。
- [terracognita](https://github.com/cycloidio/terracognita) - 既存 cloud provider を読み（reverse Terraform）、infrastructure を Terraform config として生成。
- [terracost](https://github.com/cycloidio/terracost) - CLI 用 Terraform cloud cost estimation。
- [terracove](https://elementtech.github.io/terracove/) - directory tree を再帰的に検査し Terraform diff と coverage を test。
- [TerraDepot](https://github.com/derBroBro/TerraDepot) - 標準 HTTP remote backend ベースの Terraform state repository。AWS S3 の tfstate を一元管理。
- [TerraDrift](https://github.com/niravraychura/terradrift) - CI/cron 用 self-hosted Terraform/OpenTofu drift CLI（plan ベース、未管理 resource inventory なし）。
- [terradozer](https://github.com/chenrui333/terradozer) - config file なしで Terraform destroy。
- [terraeasy](https://github.com/jaceq/terraeasy) - 簡単な Terraform wrapper。
- [terraform-ai-skills](https://github.com/anmolnagpal/terraform-ai-skills) - GitHub Copilot、Claude、ChatGPT 向け AI skill。AWS/GCP/Azure/DigitalOcean の10〜200以上の repo で module upgrade、workflow 標準化、release 等を一括自動化。
- [terraform-aws-clickops-notifier](https://github.com/cloudandthings/terraform-aws-clickops-notifier) - AWS Console 操作時に通知。
- [terraform-bundle](https://github.com/hashicorp/terraform/tree/main/tools/terraform-bundle) - Terraform と Provider binary の bundle を簡単に build。CI や air-gapped Terraform Enterprise に便利。
- [terraform-cdk](https://github.com/hashicorp/terraform-cdk) - Terraform 用 CDK。使い慣れた言語で cloud infrastructure を定義し HashiCorp Terraform で provision。
- [terraform-cleaner](https://github.com/sylwit/terraform-cleaner) - Terraform module の未使用 variable を検出する小型 utility。
- [terraform-credentials-vault](https://github.com/oulman/terraform-credentials-vault) - 環境変数経由で Terraform native service（private registry、Terraform Cloud 等）の credential を渡す credential helper plugin。
- [terraform-diff](https://github.com/contentful-labs/terraform-diff) - Terraform plan/apply を実行する場所を把握。
- [terraform-docs](https://github.com/terraform-docs/terraform-docs) - Terraform module から docs を生成する簡易 utility。
- [terraform-graph-beautifier](https://github.com/pcasteran/terraform-graph-beautifier) - terraform graph の読みづらい出力を意味のある説明的な形式へ変換する CLI。
- [terraform-iam-policy-validator](https://github.com/awslabs/terraform-iam-policy-validator) - Terraform template 内の AWS IAM Policy を best practice で検証する CLI。
- [terraform-landscape](https://github.com/coinbase/terraform-landscape) - Terraform plan の出力を読みやすく改善（0.11以前）。
- [terraform-operator](https://github.com/GalleyBytes/terraform-operator) - Terraform operation 用 Kubernetes CRD。
- [terraform-plan-parser](https://github.com/lifeomic/terraform-plan-parser) - `terraform plan` stdout を解析し JSON に変換する CLI utility と JavaScript API。
- [terraform-provisioner](https://github.com/shuaibiyy/terraform-provisioner) - 同じ Terraform script の複数 deployment を管理。
- [terraform-rake-tasks](https://github.com/gina-alaska/terraform-rake-tasks) - Terraform plan 管理用共有 Rake task。
- [terraform-repl](https://github.com/paololazzari/terraform-repl) - 対話操作を改善する terraform console wrapper。
- [Terraform-Visual](https://github.com/hieven/terraform-visual) - Terraform plan の簡潔で強力な可視化 tool。
- [terravision](https://github.com/patrickchugh/terravision) - 公式 AWS/Azure/GCP icon と設計標準で Terraform code から cloud architecture 図を生成。100% client-side 動作、CI/CD 統合。
- [terraform.py](https://github.com/mantl/terraform.py) - Terraform state file を解析する Ansible dynamic inventory script。
- [terraformer](https://github.com/chenrui333/terraformer) - 既存 infrastructure から Terraform file を生成する CLI。多数の provider 対応。
- [terraforming](https://github.com/dtan4/terraforming) - AWS resource を Terraform 形式（tf、tfstate）で export。`terraformer` 類似。
- [terraformize](https://github.com/naorlivne/terraformize) - REST API endpoint から Terraform module に Apply/Destroy。
- [terraformsh](https://github.com/pwillis-els/terraformsh) - CLI 操作を簡素化し DRY 階層設定を実現する Bash wrapper。
- [terragrunt-atlantis-config](https://github.com/transcend-io/terragrunt-atlantis-config) - Terragrunt project 用 Atlantis config 生成。
- [terragrunt](https://github.com/gruntwork-io/terragrunt) - Terraform の thin wrapper。設定の DRY 化、複数 module、remote state 管理用 tool。
- [terrahelp](https://github.com/opencredo/terrahelp) - Terraform 利用時に便利な追加機能を提供する CLI utility。
- [terrahub](https://github.com/tfxor/terrahub) - Terraform automation/orchestration tool。console.terrahub.io と統合する企業向け GUI で実行状況、履歴監査、reporting を提供。
- [terramagic](https://github.com/miltlima/terramagic) - Python 製、folder と Terraform file 作成を自動化する wizard。
- [terramate](https://github.com/terramate-io/terramate) - change detection と code generation 対応の複数 Terraform stack 管理 tool。
- [terrap-cli](https://github.com/sirrend/terrap-cli) - Terrap - infrastructure を scan して必要な変更を特定する CLI。
- [terrars](https://github.com/andrewbaxter/terrars) - Rust で Terraform stack を構築する tool、CDK の代替。
- [terrascan](https://github.com/tenable/terrascan) - Terraform template の静的解析用 security/best-practice test 集。
- [terrascope](https://github.com/spilliams/terrascope) - Terraform monorepo 用 build orchestrator。
- [terrashine](https://isawan.github.io/terrashine/) - Provider 要求時に依存を自動 cache する Terraform provider mirror1 実装。
- [terraspace](https://terraspace.cloud) - Terraform framework。
- [terrastate](https://github.com/rohinivsenthil/terrastate) - workspace の Terraform resource を監視/deploy/destroy する VS Code extension。
- [terratag](https://github.com/env0/terratag) - AWS/Azure/GCP 全 resource に tag を自動付与・維持する Terraform CLI。
- [tf-init-booster](https://github.com/hayorov/terraform-init-booster) - 大規模 blueprint の module download を高速化する Terraform 前処理。
- [tf-profile](https://github.com/datarootsio/tf-profile/) - Terraform run profiler。全体/resource 統計や可視化を生成。
- [tf-summarize](https://github.com/dineshba/tf-summarize) - terraform plan の概要を表示する CLI。
- [tf-why](https://github.com/Raj-glitch-max/tf.why) - CloudTrail lookup で Terraform drift の原因となった AWS actor を特定する CLI。
- [tfaction](https://github.com/suzuki-shunsuke/tfaction) - 独自仕様の Terraform workflow 用 GitHub Actions 集。
- [tfautomv](https://github.com/busser/tfautomv) - Terraform `moved` block を自動生成し refactor を容易化。
- [tfcmt](https://github.com/suzuki-shunsuke/tfcmt) - plan/apply の結果を Pull Request comment で通知する CLI。
- [tfedit](https://github.com/minamijoyo/tfedit) - Terraform refactoring tool。
- [tfenv](https://github.com/tfutils/tfenv) - rbenv に着想を得た Terraform version manager。
- [tfgen](https://github.com/0xDones/tfgen) - 一貫性のある DRY codebase 向け Terraform code generator。
- [tfgpt](https://github.com/flavius-dinu/tfgpt) - OpenAI GPT-3.5 Turbo を使い Terraform command/概念を解説する CLI。
- [tfimport](https://github.com/coolapso/tfimport) - 既存 infrastructure の tfstate への import を自動化する CLI。
- [tfjson](https://github.com/palantir/tfjson) - Terraform plan file を読み JSON に出力する utility。
- [tfk8s](https://github.com/jrhouston/tfk8s) - Kubernetes YAML manifest を Terraform HCL に変換。
- [tflint](https://github.com/terraform-linters/tflint) - `terraform plan` では検出できない error を見つける Terraform linter。
- [tfmake](https://github.com/tfmake/tfmake) - make の力で Terraform を自動化。
- [tfmask](https://github.com/cloudposse-archives/tfmask) - `terraform plan`/`terraform apply` の指定出力を mask する utility。
- [tfmigrate](https://github.com/minamijoyo/tfmigrate) - GitOps 用 Terraform state migration tool。
- [tfmigrator](https://github.com/tfmigrator/cli) - Terraform config/state migration 用 Go library と CLI。
- [tfmodcache](https://github.com/Rezarys/tfmodcache) - Terraform/OpenTofu 用 local shared module cache。`terraform init` で取得済み module を再取得しない。作者本人の投稿。
- [tfmv](https://github.com/suzuki-shunsuke/tfmv) - Terraform resource を rename して moved block を生成。
- [tfocus](https://github.com/nwiizo/tfocus) - tfocus is a super interactive tool for selecting and executing Terraform plan/apply on specific resources. Think of it as an "emergency tool" - 特定 resource の Terraform plan/apply を対話的に選択・実行する tool。「緊急用」で日常利用向けではない。
- [tfprovidercheck](https://github.com/suzuki-shunsuke/tfprovidercheck) - 悪意ある Terraform Provider の実行を防ぐ CLI。
- [tfproviderlint](https://github.com/bflad/tfproviderlint) - Terraform Provider linter。
- [tfrepl](https://github.com/ysoftwareab/tfrepl) - readline ベースで shell のように使える Terraform REPL。依存不要、config 保存、history 対応。
- [tfreveal](https://github.com/breml/tfreveal) - secret 値をすべて表示する Terraform plan viewer。
- [tfscaffold](https://github.com/tfutils/tfscaffold) - 複数環境・複数 component の Terraform 管理 AWS infra 制御 framework。
- [tfschema](https://github.com/minamijoyo/tfschema) - Terraform Provider schema inspector。
- [tfsec](https://github.com/aquasecurity/tfsec) - terraform <0.12 および >=0.12 対応の静的解析。HCL parser と統合し精度向上。
- [tfsort](https://github.com/AlexNabokikh/tfsort) - Terraform variable/output を並べ替える CLI。
- [tftarget](https://github.com/future-architect/tftarget) - `terraform xxx -target={...}` の対話型実行 tool。
- [tftree](https://github.com/busser/tftree) - Terraform module call stack を terminal に表示。
- [tftui](https://github.com/idoavrah/terraform-tui) - Terraform state 向け text UI。
- [tfupdate](https://github.com/minamijoyo/tfupdate) - Terraform config の version constraint を更新。
- [tfvar](https://github.com/shihanng/tfvar) - Terraform config/module を scan し variable を選択形式（tfvar、環境変数等）で抽出・編集。
- [tfvault](https://github.com/tedilabs/tfvault) - OS keyring、pass/gopass、環境変数等の pluggable secret backend と profile 別 account 分離を備える汎用 Terraform credential helper。
- [tfvaultenv](https://github.com/oulman/tfvaultenv) - HashiCorp Vault の secret を読み、各 Terraform Provider 用環境変数を出力。
- [tfwrapper](https://github.com/manheim/tfwrapper) - Terraform を適切に実行する rake task を提供する RubyGem。
- [tfmcp](https://github.com/nwiizo/tfmcp) - MCP 経由で Terraform を操作し、Claude 等の AI assistant で環境を管理・運用できる CLI。
- [tgf](https://github.com/coveooss/tgf) - Docker 経由で Terragrunt/Terraform を実行する frontend。
- [threatcl](https://github.com/threatcl/threatcl) - HCL で Threat Model を文書化。
- [tofuenv](https://github.com/tofuutils/tofuenv) - tfenv に着想を得た OpenTofu version manager。
- [tpm](https://github.com/Madh93/tpm) - Terraform Provider package manager。
- [travelgrunt](https://github.com/ivanilves/travelgrunt) - [mono]repo 内を楽に移動。
- [trupositive](https://github.com/trupositive-ai/trupositive) - Git metadata（commit SHA、branch、repo）を Terraform 管理 resource 全てに自動付与する設定不要 wrapper。
- [validIaC](https://github.com/gofireflyio/validiac) - Terraform best practice、保守性、security に役立つ OSS tool の統合。
- [xterrafile](https://github.com/devopsmakers/xterrafile) - registry、Git、local directory の外部 module を体系管理する Go tool。
- [yj](https://github.com/sclevine/yj) - CLI - YAML、TOML、JSON、HCL を相互変換する CLI。map 順序を維持。
- [yor](https://github.com/bridgecrewio/yor) - Terraform、CloudFormation、Serverless 等の IaC framework に tag を自動追加し追跡。
- [zephy](https://github.com/henrybravo/zephy) - resource tagging が不十分な場合に Azure subscription の resource と Terraform Enterprise workspace 管理 resource を比較。

### CI

- [opentofu-updater-action](https://github.com/drumandbytes/opentofu-updater-action) - OpenTofu/Terraform provider、module、Helm chart、container image を最新に保つ pull request を作る GitHub Action。
- [setup-terraform](https://github.com/hashicorp/setup-terraform) - GitHub Actions workflow に Terraform CLI をセットアップ。
- [terraform-plan](https://github.com/cds-snc/terraform-plan) - Terraform plan を実行し変更を comment する GitHub Action。
- [terraform-risk-assessor](https://github.com/Liam-Johnston/terraform-risk-assessor) - Terraform plan の変更を AI 解析し、Pull Request にリスク評価を投稿する GitHub Action。

### VS Code 拡張機能

- [HashiCorp Terraform](https://marketplace.visualstudio.com/items?itemName=hashicorp.terraform)
- [vscode-terraform-live-graph](https://github.com/adamiBs/vscode-terraform-live-graph) - code 編集中に Terraform graph をリアルタイム生成する VS Code extension。
- [tf-nav](https://marketplace.visualstudio.com/items?itemName=owenrumney.tf-nav) - file 種別ごとの resource 索引と移動しやすい tree view を提供する Terraform Navigation Extension。

## ライブラリ

- [hcl-rs](https://github.com/martinohmann/hcl-rs) - serde 対応 Rust 用 HCL parse/encode library。
- [hcl4j](https://github.com/wondrify/hcl4j) - Java 用 HCL parser。
- [nu_plugin_hcl](https://github.com/Yethal/nu_plugin_hcl) - [Nushell](https://github.com/nushell/nushell) 用 HCL parser plugin。
- [pyhcl](https://github.com/virtuald/pyhcl) - Python 用 HCL parser。
- [python-hcl2](https://github.com/amplify-education/python-hcl2/) - Python 用 HCL2 parser。
- [rhcl](https://github.com/winebarrel/rhcl) - Pure Ruby HCL parser。
- [tree-sitter-hcl](https://github.com/tree-sitter-grammars/tree-sitter-hcl) - tree-sitter 用 HCL grammar。

## ひな型

- [Solo-Engineer Stack](https://github.com/sarmakska/terraform-stack) - Vercel、Supabase、Cloudflare、DigitalOcean を接続する個人開発者向け単一 Terraform repo。`terraform apply` 1回で Next.js、Vercel に環境変数を渡す Supabase、R2/Workers KV 付き Cloudflare zone、監視付き DigitalOcean droplet を構築。
- [Terraform Generator](https://github.com/sudokar/generator-tf-module) - terratest/kitchen-terraform test framework 対応の Terraform module/project scaffold。
- [Terraform GitOps Framework](https://www.kubestack.com) - AKS、EKS、GKE cluster の信頼性ある自動化構築に必要な機能を備える無料 OSS framework。

## セルフホスト型 Terraform Platform

- [Snap CD](https://github.com/schrieksoft/snapcd) - isolated runner、dependency-aware automation、細かなアクセス制御で modular deployment を実現する継続的 deployment platform。
- [Lynx](https://github.com/clivern/lynx) - 高速、安全、信頼性の高い Terraform backend。dashboard、project/environment 管理、state versioning、locking、snapshot 対応。
- [OTF](https://github.com/leg100/otf) - Terraform CLI 完全統合の Terraform Enterprise OSS 代替、Open Terraforming Framework。
- [Terrakube](https://docs.terrakube.io) - private registry、remote state、custom flow、scheduled workspace、state visualization を備える Terraform Enterprise OSS 代替。
- [Digger](https://digger.dev) - Open Source Alternative to Terraform Cloud - Terraform Cloud の OSS 代替。CI で Terraform plan/apply job を実行。
- [cloud-concierge](https://github.com/dragondrop-cloud/cloud-concierge) - 管理外 resource の Terraform code 化、drift 検出、cloud cost/security 分析を Pull Request で提供する OSS。
- [Stack-Lifecycle-Deployment](https://github.com/D10S0VSkY-OSS/Stack-Lifecycle-Deployment) - cloud に provision された resource の全 lifecycle を定義・管理する OSS solution。
- [Burrito](https://github.com/padok-team/burrito) - TACoS Kubernetes Operator - TACoS Kubernetes Operator。「Terraform の ArgoCD」。
- [Terrateam](https://terrateam.io) - Terraform Cloud/Enterprise の OSS 代替。GitOps 中心で GitHub と統合し、scale/security/reliability を重視。


## マネージド Terraform Platform :heavy_dollar_sign:

- [compliance.tf](https://compliance.tf) - SOC 2、PCI DSS、HIPAA、NIST 800-53 等35以上の framework 対応 Terraform module。非準拠設定は適用前の `terraform plan` で失敗。
- [ControlMonkey](https://www.controlmonkey.io/) - Terraform/OpenTofu code 生成、cloud inventory、IaC coverage を備える Terraform Cloud 代替。標準 policy、drift remediation、ClickOps scanner を含む。
- [Firefly](https://www.firefly.ai/) - CI tool を活用する Terraform Cloud 代替。cloud scan で IaC coverage と drift も検出。
- [Scalr](https://www.scalr.com/) - OPA 統合、組織構成、custom hook、DevOps platform 統合、一元 reporting を備える Terraform Enterprise 代替。
- [Stategraph](https://stategraph.com) - state file の bottleneck を解消する Terraform/OpenTofu。flat state file を database に置換し、並列 plan、SQL query、数秒での plan 実行を実現。
- [env0](https://www.env0.com/) - OPA 統合、custom flow、Terragrunt 対応の Terraform Cloud/Enterprise 代替。
- [Brainboard](https://www.brainboard.co) - Visually Design, Deploy & Manage modern cloud infrastructures starting from any Cloud Provider - AWS/GCP/Azure 等、任意の Cloud Provider から最新 infrastructure を視覚設計、deploy、管理。
- [Spacelift](https://spacelift.io/) - Terraform Cloud/Enterprise 代替となる Terraform collaborative infrastructure delivery platform。
- [StackGuardian](https://stackguardian.io/) - 既存 cloud resource を IaC 化する infrastructure codification/orchestration platform。Tirith、OPA、Checkov の policy workflow、private runtime、no-code template 対応。

## Terraform Enterprise 用ツール

- [terraform-enterprise-cli](https://github.com/skierkowski/terraform-enterprise-cli) - Terraform Enterprise command-line interface。
- [terraform-enterprise-client](https://github.com/skierkowski/terraform-enterprise-client) - Terraform Enterprise API 用 Ruby client と CLI。
- [terraform-enterprise-migrator](https://github.com/sil-org/tfc-ops) - Terraform Enterprise 環境を旧版から新版へ移行する script。

## 動画

- [Your Weekly Dose of Terraform](https://www.youtube.com/channel/UCGH0yYPvlCN1VjSFMGVmFgQ) - Terraform news、review、interview、Q&A、live coding、Terraform hacking 等の週刊 live stream YouTube channel。
- [Terraform explained in 15 mins](https://www.youtube.com/watch?v=l5k1ai_GBDE) - 15分で解説する Terraform。
- [Terraform Course](https://www.youtube.com/watch?v=SLB_c_ayRMo) - AWS cloud infrastructure を自動化。
- [How to Build Reusable, Composable, Battle tested Terraform Modules](https://www.youtube.com/watch?v=LVgP63BkhKQ) - Yevgeniy Brikman が再利用・合成・テスト可能な Terraform code の書き方を解説。module を中心に Terraform の目的と基本 demo も紹介（約39分、2017年10月）。
- [Building Scalable, Repeatable Infrastructure in the Cloud with Terraform](https://www.youtube.com/watch?v=cG7pcksTAnY) - Terraform の Infrastructure as Code を紹介。hosted PostgreSQL を使い AWS に TeamCity を deploy。
- [Creating a Google Compute Instance with Terraform](https://www.youtube.com/watch?v=fo3VX33Zx0c) - Terraform code による Google Compute Instance 作成例。
- [Creating a Terraform Provider for Just About Anything](https://www.hashicorp.com/resources/creating-terraform-provider-for-anything) - walkthrough で Terraform Provider への貢献や独自作成方法を学ぶ。
- [Evolving Your Infrastructure with Terraform](https://www.youtube.com/watch?v=wgzgVm7Sqlk) - OpenCredo CTO が実例を交え、実環境の Terraform 活用を詳しく紹介。
- [Going Multi-Cloud with Terraform and Nomad](https://www.youtube.com/watch?v=e42A4aBZUkQ).
- [How to Extend the Terraform Provider List](https://www.youtube.com/watch?v=2BvpqmFpchI) - Paul が Terraform Provider 作成手順を紹介。
- [Orchestrating Containers with Terraform and Consul](https://www.infoq.com/presentations/terraform-consul/) - Mitchell Hashimoto が Terraform による container workload の deploy と scale を解説。
- [Production ChaosMonkey with Terraform](https://www.youtube.com/watch?v=CPI6W3LK0-g) - DigitalOcean が Terraform で本番統合 test を実施する方法。
- [Running a Terraform Environment at Scale](https://www.youtube.com/watch?v=3JVGSq7QIS0) - 数百 AWS account で Terraform を大規模実行。
- [Setup Continuous Integration for a Terraform module](https://www.youtube.com/watch?v=vuJ6bjYKUcA) - Google Compute Instance 用 Terraform module の test/tag/publish に Kitchen-Terraform を使う CI 例。
- [State of Terraform Providerland](https://www.youtube.com/watch?v=ar1PF5iDtbg) - Terraform Provider の仕組みと作成方法。
- [Terraform At Scale](https://www.youtube.com/watch?v=RldRDryLiXs) - Segment の Terraform 活用法。
- [Terraform w/ Lee Trout](https://www.youtube.com/watch?v=p2ESyuqPw1A) - 開発 pattern と Terraform code の効果的な構成に焦点。
- [Terraforming the Composable World](https://www.youtube.com/watch?v=cHrOXPatFeg) - Terraform とオンプレミス bare metal provisioning の統合。
- [Test and verify a Google Compute Instance with Kitchen-Terraform](https://www.youtube.com/watch?v=kiH3-LEveek) - Google Compute Instance 用 Terraform code を Kitchen-Terraform で test する例。
- [Untangling Terraform Through Refactoring](https://www.youtube.com/watch?v=OH6iDKaXpZs) - 最小リスクで Terraform code を慎重に refactor する方法。
- [Complete Terraform Course - From BEGINNER to PRO! (Learn Infrastructure as Code)](https://www.youtube.com/watch?v=7xngnjfIlK4) - 特定 cloud provider に限定せず初心者から上級者まで学ぶ総合 course。

## エディタープラグイン

- [Emacs terraform-mode](https://github.com/hcl-emacs/terraform-mode)
- [Intellij](https://plugins.jetbrains.com/plugin/7808-terraform-and-hcl)
- [Terraform-ls](https://github.com/hashicorp/terraform-ls) (Terraform Language Server)
- [Terraform-lsp](https://github.com/juliosueiras/terraform-lsp) (Language Server Protocol for Terraform)
- [vim-hcl](https://github.com/jvirtanen/vim-hcl) - HCL syntax highlighting。
- [Vim-Terraform-Completion](https://github.com/juliosueiras/vim-terraform-completion)
- [Vim-Terraform](https://github.com/hashivim/vim-terraform)

## ライセンス

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲内で、Shuaib Yunus は本作品に関する著作権および関連する権利・隣接権を放棄しています。
