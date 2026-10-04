# Awesome Terraform [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) <!-- omit in toc -->

[![Link Checker](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml)
[![Misspell Check](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml)

> [HashiCorp Terraform](https://www.terraform.io/) 的精選資源清單。
> [<img src="https://raw.githubusercontent.com/shuaibiyy/awesome-terraform/master/terraform.svg" align="right" width="100">](https://terraform.io)
> 歡迎[貢獻](https://github.com/shuaibiyy/awesome-tf/blob/master/contributing.md)！

Terraform 可讓您安全且可預測地建立、變更及改進正式環境基礎架構。它是開放原始碼工具，可將 API 轉換為宣告式設定檔，供團隊成員共用，並以程式碼的方式管理、編輯、審查及進行版本控制。

## 目錄 <!-- omit in toc -->

- [圖例](#legend)
- [官方資源](#official-resources)
- [社群](#community)
- [書籍](#books)
- [學習資源](#learning-and-studying)
- [應用程式](#apps)
- [教學與部落格文章](#tutorials-and-blog-posts)
  - [入門指南](#beginner-guides)
  - [撰寫自訂 Provider](#writing-custom-providers)
  - [操作指南](#how-to)
  - [多環境設定](#multi-environment-configuration)
  - [Azure](#azure)
  - [AWS](#aws)
  - [Google Cloud](#google-cloud)
  - [其他](#miscellaneous)
- [社群模組](#community-modules)
- [自架 Registry](#self-hosted-registries)
- [代管 Registry](#managed-registries)
- [Providers](#providers)
  - [HashiCorp 支援的 Providers](#hashicorp-supported-providers)
  - [廠商支援的 Providers](#vendor-supported-providers)
  - [社群 Providers](#community-providers)
- [測試](#testing)
- [工具](#tools)
  - [CI](#ci)
  - [VS Code 擴充功能](#vs-code-extensions)
- [函式庫](#libraries)
- [樣板](#boilerplates)
- [自架 Terraform 平台](#self-hosted-terraform-platforms)
- [代管 Terraform 平台 :heavy\_dollar\_sign:](#managed-terraform-platforms-heavy_dollar_sign)
- [Terraform Enterprise 工具](#terraform-enterprise-tooling)
- [影片](#videos)
- [編輯器外掛](#editor-plugins)
- [授權](#license)

## 圖例

- 與 _terraform >= 0.12_ 不相容 :ghost:
- 已停止維護 :skull:
- 商業化 :heavy_dollar_sign:

## 官方資源

- [Hashicorp Terraform Blog](https://www.hashicorp.com/en/blog/products/terraform)
- [Introduction to Terraform](https://developer.hashicorp.com/terraform/intro)
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform learn](https://developer.hashicorp.com/terraform/tutorials)

## 社群

- [weekly.tf - Terraform Weekly Newsletter](https://www.weekly.tf/) - 每週刊載 Terraform 新聞、開放原始碼專案、公告與討論的電子報。
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
- [The Claude Agent Skill for Terraform and OpenTofu - testing, modules, CI/CD, and production patterns](https://github.com/antonbabenko/terraform-skill) - Claude Code 的 Terraform 與 OpenTofu 技能 — 涵蓋測試、模組設計、CI/CD 工作流程及正式環境模式。
- [awesome-terraform-compliance](https://github.com/antonbabenko/awesome-terraform-compliance) - Terraform 合規與安全性工具、架構及資源的精選清單。
- 特定語言社群：
  - [Telegram (Ukrainian speak community)](https://t.me/terraform_ukraine)

## 書籍

- [Big Little Book On Terraform](https://www.amazon.com/Big-Little-Book-Terraform-Omos-ebook/dp/B07PWYPNX8/)
- [Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Second Edition](https://www.manning.com/books/bootstrapping-microservices-second-edition)
- [Deep-Dive Terraform on Azure](https://link.springer.com/book/10.1007/978-1-4842-7328-9)
- [Getting Started with Terraform, 2nd ed.](https://www.amazon.com/Getting-Started-Terraform-production-infrastructure/dp/1788623533/)
- [HashiCorp Infrastructure Automation Certification Guide](https://www.amazon.com/HashiCorp-Infrastructure-Automation-Certification-Guide-ebook/dp/B092KM7LXC/)
- [IaC starting with Terraform (Korean)](https://product.kyobobook.co.kr/detail/S000202478097)
- [Infrastructure as Code](https://www.oreilly.com/library/view/infrastructure-as-code/9781491924334/)
- [Patterns and Practices for Infrastructure as Code: With examples in Python and Terraform](https://www.manning.com/books/infrastructure-as-code-patterns-and-practices)
- [Terraform Best Practices](https://www.terraform-best-practices.com/) - [開放原始碼電子書](https://github.com/antonbabenko/terraform-best-practices)
- [Terraform Cookbook](https://www.amazon.com/Terraform-Cookbook-Efficiently-Infrastructure-platforms/dp/1800207557)
- [Terraform for Ops e-book](https://www.terraformforops.com)
- [Terraform in Action](https://www.manning.com/books/terraform-in-action)
- [Terraform in Depth](https://www.manning.com/books/terraform-in-depth)
- [Terraform: Up & Running, 3rd ed.](https://www.terraformupandrunning.com/)
- [The Terraform Book](https://terraformbook.com/)

## 學習資源

- [Terraform Academy](https://www.terraformacademy.app) - 互動式 Terraform／IaC 學習平台，提供實作實驗、認證準備（HashiCorp、AWS、GCP、Azure、Docker、Kubernetes、GitOps）、AI 指導與進度追蹤。另請參閱 [SRE Pro Tips 部落格](https://www.terraformacademy.app/protips/?cat=sre-pro-tips)及下方的行動版／PWA 應用程式。
- [Terraform Terminal Simulator](https://devops-daily.com/games/terraform-terminal-simulator) - 在瀏覽器的模擬終端機中練習 init、plan 和 apply。免費、開放原始碼，無須註冊。
- [compliance.tf docs](https://compliance.tf/docs/) - 免費提供 SOC 2、PCI DSS、HIPAA、NIST 800-53 及其他 35 種以上合規控制項的 Terraform 實作，是撰寫合規基礎架構程式碼的公開參考資料。
- [DevOpsLesson Terraform Playground](https://devopslesson.com/playground/terraform) - 免費的瀏覽器版 Terraform 模擬器，提供引導式 HCL 練習與指令操作。

## 應用程式

可隨時隨地學習及使用 Terraform 的行動、桌面與 PWA 應用程式。

- [Terraform Academy — iOS](https://apps.apple.com/us/app/terraform-academy/id6745738634) - Terraform Academy 互動式學習平台的原生 iOS 應用程式。提供實作實驗、認證準備（HashiCorp、AWS、GCP、Azure、Docker、Kubernetes、GitOps）、AI 指導及跨裝置進度同步。
- [Terraform Academy — Android](https://play.google.com/store/apps/details?id=com.terraformacade1.app) - Terraform Academy 學習平台的原生 Android 應用程式，提供與 iOS 及網頁版相同的實驗、認證準備及 AI 指導功能。
- [Terraform Academy — PWA / Web App](https://www.terraformacademy.app/) - 可安裝的 Terraform Academy 漸進式網頁應用程式（PWA）。可離線使用、可安裝至任何平台的主畫面，並與行動應用程式同步進度。

## 教學與部落格文章

### 入門指南

- [A Comprehensive Guide to Terraform](https://www.gruntwork.io/blog/a-comprehensive-guide-to-terraform) - 由《Terraform: Up & Running》作者撰寫的一系列部落格文章，帶領讀者從 Terraform 入門到實際應用。
- [Using Terraform for Cloud Deployments - Part 1](https://dev.to/koenighotze/using-terraform-for-cloud-deployments---part-1) - 佈建 EC2 執行個體。
- [Hello, world: The Fargate/Terraform tutorial I wish I had](https://section411.com/2019/07/hello-world/) - 介紹如何從頭建立 ECS Fargate 叢集的部落格文章
- [Terraform Security Guide](https://sysdig.com/blog/terraform-security-best-practices/) - 介紹使用 Terraform 時安全性最佳做法的部落格文章
- [Building a SaaS API? Don't Forget Your Terraform Provider](https://www.speakeasy.com/blog/build-terraform-providers) - 說明為何應撰寫 Terraform Provider
- [Complete Terraform Course in French (Free)](https://blog.stephane-robert.info/docs/infra-as-code/provisionnement/terraform/) – 免費且完整的法語課程，透過實作範例與最佳做法，帶您從入門到進階掌握 Terraform。
- [Introduction to Terraform](https://devopslesson.com/tutorials/terraform/introduction-to-terraform) - 適合初學者的 Terraform 基礎指南，涵蓋 Providers、資源、狀態，以及透過實作範例執行首次 apply。

### 撰寫自訂 Provider

- [Creating custom terraform providers](https://blog.pelo.tech/creating-custom-terraform-providers-341311823fa2) - 建立自訂 Providers 的指南。
- [Writing a Terraform provider](https://web.archive.org/web/20220516140659/http://blog.jfabre.net/2017/01/22/writing-terraform-provider/) - 建立自訂 Providers 的指南。
- [Writing Custom Providers](https://developer.hashicorp.com/terraform/plugin/sdkv2) - 建立自訂 Providers 的官方文件。
- [Terraform Provider Code generation](https://www.speakeasy.com/docs/terraform/create-terraform) - 如何根據 OpenAPI 規格產生 Terraform Provider 的指南（廠商支援）

### 操作指南

- [How To Write OPA for Terraform](https://scalr.com/learning-center/opa-series-part-1-open-policy-agent-and-terraform) - 如何使用 Open Policy Agent 評估 Terraform 計畫並強制執行政策
- [Deploying Discourse with Terraform](https://www.hashicorp.com/en/blog/deploying-discourse-with-terraform) - 示範如何使用 Terraform 透過一個指令，在 DigitalOcean 上建立並執行 Discourse 執行個體。
- [Deploying Django to AWS ECS with Terraform](https://testdriven.io/blog/deploying-django-to-ecs-with-terraform/) - 介紹如何使用 Terraform 建立在 ECS 上執行 Django 應用程式所需的 AWS 基礎架構。
- [Easily Deploy A Seneca Microservice to ECS with Wercker and Terraform: Part I](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-i/), [II](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-ii/) & [III](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-iii/) - 說明如何將 Terraform 整合至微服務部署流程。
- [Terraform for a Highly Available VPN between AWS and Azure](https://web.archive.org/web/20210616132857/https://deployeveryday.com/2020/04/13/vpn-aws-azure-terraform.html) - 用於在 AWS 與 Azure 之間部署高可用性 VPN 的 Terraform 程式碼。
- [Terraforming 1Password](https://1password.com/blog/terraforming-1password) - 介紹 1Password 如何從 CloudFormation 遷移至 Terraform。
- [Tutorial: How to Use Terraform to Deploy OpenStack Workloads](https://web.archive.org/web/20170611135511/http://www.stratoscale.com/blog/openstack/tutorial-how-to-use-terraform-to-deploy-openstack-workloads/) - 示範使用 OpenStack Terraform Provider 部署網頁伺服器有多麼簡單。
- [Zero Downtime Updates with HashiCorp Terraform](https://www.hashicorp.com/en/blog/zero-downtime-updates-with-terraform) - 確保基礎架構更新期間零停機。
- [Google Cloud Platform for 10$ a month using terraform](https://github.com/nufailtd/terraform-budget-gcp) - 示範如何使用 Terraform，以每月不到 [10 美元](https://nufailtd.github.io/budget-gcp/)的費用，建立安全的 Google Kubernetes Cluster、Google Cloud Run 服務及其他基礎架構元件。
- [Infracost + Terraform + GitHub Actions = Automate Cloud Cost Management](https://medium.com/better-programming/infracost-terraform-github-actions-automate-cloud-cost-management-a62b329f2834) - 如何在 Terraform 開發期間使用 Infracost 作為管理雲端成本的防護措施。
- [How To Wrap Your Terraform Provider for Pulumi](https://www.speakeasy.com/blog/pulumi-terraform-provider) - 讓您的 Terraform Provider 能與 Pulumi 搭配使用
- [How to Build an AWS Account Vending Machine](https://medium.com/@StackGuardian/how-to-build-an-aws-account-vending-machine-by-stackguardian-f2895e35a27b) - 使用 StackGuardian 編排的 Terraform stacks 自動化、自助式管理 AWS 帳戶生命週期，包含以 SSM 為基礎的分配、EventBridge 清理觸發條件及 Tirith 政策強制執行。

### 多環境設定

- [Terraform Design Patterns: the Terrafile](https://bensnape.com/2016/01/14/terraform-design-patterns-the-terrafile/) - 使用 Terrafile 管理 Terraform 專案中的 Terraform 模組及其版本。
- [Terraform, VPC, and why you want a tfstate file per env](https://charity.wtf/2016/03/30/terraform-vpc-and-why-you-want-a-tfstate-file-per-env/) - 介紹在含多個環境的大型專案中使用 Terraform 時可能遇到的陷阱，以及如何避免這些問題。
- [Using Pipelines to Manage Environments with Infrastructure as Code](https://medium.com/@kief/https-medium-com-kief-using-pipelines-to-manage-environments-with-infrastructure-as-code-b37285a1cbf5) - 說明建立流程以處理基礎架構變更、並逐一推進至不同環境的各種方法。

### Azure

- [Learning HashiCorp Terraform](https://web.archive.org/web/20201108000713/https://www.g10s.io/hashicorp-terraform/) - Azure 指南。
- [New Terraform Azure Automation Resources](https://bgelens.nl/terraform-automation-resources/) - Azure Automation。
- [Terraforming Azure PaaS](https://devkimchi.com/2019/01/21/terraforming-azure-paas/) - 在 Azure 上部署 PaaS 資源。
- [azure-az104](https://github.com/victorlane/azure-az104) - AZ-104 Azure 管理員讀書筆記及 Terraform 實作範例，包含 Landing Zone 參考架構。

### AWS

- [AWS Lambda the Terraform Way](https://github.com/nsriram/lambda-the-terraform-way) - 透過 Terraform 深入了解 AWS Lambda，不只限於執行函式。也包含與 S3、API Gateway、DynamoDB、Kinesis、SQS 整合的指南。
- [Managing AWS Lambda Functions with Terraform](https://spacelift.io/blog/terraform-aws-lambda) - 了解 AWS Lambda 的用途，以及如何使用 Terraform 管理 AWS Lambda 函式。

### Google Cloud

- [Managing infrastructure as code with Terraform, Cloud Build, and GitOps](https://docs.cloud.google.com/docs/terraform/resource-management/managing-infrastructure-as-code) - 使用 Terraform、Cloud Build 和 GitOps 設定並管理基礎架構即程式碼。
- [Getting started with Terraform on Google Cloud](https://docs.cloud.google.com/docs/terraform/create-vm-instance) - 使用 Terraform 在 Google Cloud 建立 VM，並啟動基本的 Python Flask 伺服器。
- [Managing Cloud Infrastructure with Terraform](https://www.skills.google/course_templates/746) - 使用 Terraform 部署 Kubernetes Load Balancer Service、HTTPS 內容型負載平衡器、模組化負載平衡（區域負載平衡器）、自訂 Providers、Cloud SQL，以及在 Google Cloud 與 AWS 之間建立 VPN。
- [Hashicorp Terraform Tutorials for Google Cloud](https://developer.hashicorp.com/terraform/tutorials/gcp-get-started) - 開始在 Google Cloud 上使用 Terraform。
- [IAC - Terraform and Terragrunt on Google Cloud](https://www.academeez.com/courses/terraform) - 以 MIT 授權的開放原始碼課程，介紹如何使用 Terraform／OpenTofu 與 Terragrunt 在 Google Cloud 建立基礎架構
- [Self-host n8n on Google Cloud Run](https://github.com/datawranglerai/self-host-n8n-on-gcr) - Terraform 設定與指南，介紹如何在 Cloud Run 部署 n8n 工作流程自動化，並使用 Cloud SQL、Secret Manager，以及可選的 Redis Queue Mode。

### 其他

- [Sharing data between Terraform configurations](https://web.archive.org/web/20230927082422/https://jamesmckay.net/2016/09/sharing-data-between-terraform-configurations/) - 示範如何使用遠端狀態，在不同 Terraform 設定之間共用資料。
- [The Segment AWS Stack](https://web.archive.org/web/20250322120753/https://segment.com/blog/the-segment-aws-stack/) - 揭示 Terraform 驅動的基礎架構如何協助 [The Million Dollar Engineering Problem](https://segment.com/blog/the-million-dollar-eng-problem/) 在 [Segment](https://segment.com/) 獲得解決。
- [Top 3 Terraform Testing Strategies for Ultra-Reliable Infrastructure-as-Code](https://www.contino.io/insights/top-3-terraform-testing-strategies-for-ultra-reliable-infrastructure-as-code)
- [Two Weeks with Terraform](https://charity.wtf/2016/02/23/two-weeks-with-terraform/) - 分享在實際環境使用 Terraform 累積的經驗與營運心得。
- [Terraform: Beyond the Basics with AWS](https://aws.amazon.com/blogs/apn/terraform-beyond-the-basics-with-aws/) - 說明如何使用 Terraform 佈建範例 AWS 架構的示範。
- [Terraform cost estimation](https://github.com/antonbabenko/terraform-cost-estimation) - 可從 Terraform 計畫（0.12 以上）或狀態檔進行匿名、免費的成本估算。也可在瀏覽器中使用：[terraform-cost-estimation.com](https://terraform-cost-estimation.com)。
- [How to Debug Terraform Projects: Tutorial](https://spacelift.io/blog/terraform-debug)
- [The terraform-docs GitHub Action: A Complete CI Setup Guide](https://devtoolhub.com/terraform-docs-github-action/) - 使用 terraform-docs 在每個 PR 自動產生並提交模組文件，並說明可能導致 CI 失敗的 OIDC／權限陷阱。

## 社群模組

如需此處未列出的其他社群模組，請參閱 [Terraform Module Registry](https://registry.terraform.io/)。

- [nis2shield/infrastructure](https://github.com/nis2shield/infrastructure) - 用於自動化 NIS2 合規及安全部署基礎架構的 Terraform 模組。
- [rancher-terraform-digitalocean](https://github.com/lunagt/rancher-terraform-digitalocean) - 在 DigitalOcean 上部署 Rancher 伺服器。
- [segmentio/stack](https://github.com/segmentio/stack) - 使用 AWS、Docker 和 ECS 設定正式環境基礎架構。 :skull:
- [terraform-aws-account-lookup](https://github.com/be-bold/terraform-aws-account-lookup) - 此 Terraform 模組可查詢 AWS 帳戶，並以多種對應方式或完整清單輸出；也可篩選帳戶清單，並透過子模組依現有標籤將帳戶分組。
- [terraform-aws-alb](https://github.com/terraform-aws-modules/terraform-aws-alb) - 在 AWS 建立 Application Load Balancer（已驗證模組）。
- [terraform-aws-appconfig](https://github.com/terraform-aws-modules/terraform-aws-appconfig) - 在 AWS 建立 AWS AppConfig 資源。
- [terraform-aws-atlantis](https://github.com/terraform-aws-modules/terraform-aws-atlantis) - 建立 Terraform 設定，以便在 AWS Fargate 執行 [Atlantis](https://runatlantis.io)。支援 GitHub、GitLab 和 BitBucket。
- [terraform-aws-autoscaling](https://github.com/terraform-aws-modules/terraform-aws-autoscaling) - 建立 Auto Scaling 群組與啟動設定（已驗證模組）。
- [terraform-aws-customer-gateway](https://github.com/terraform-aws-modules/terraform-aws-customer-gateway) - 在 AWS 建立 Customer Gateway。
- [terraform-aws-datadog-forwarders](https://github.com/terraform-aws-modules/terraform-aws-datadog-forwarders) - 在 AWS 建立資源，將日誌／指標轉送至 Datadog。
- [terraform-aws-dms](https://github.com/terraform-aws-modules/terraform-aws-dms) - 在 AWS 建立 AWS DMS（Database Migration Service）資源。
- [terraform-aws-dynamodb-table](https://github.com/terraform-aws-modules/terraform-aws-dynamodb-table) - 在 AWS 建立 DynamoDB 資料表。
- [terraform-aws-ec2-instance](https://github.com/terraform-aws-modules/terraform-aws-ec2-instance) - 在 AWS 建立 EC2 執行個體。
- [terraform-aws-ecr](https://github.com/cloudposse/terraform-aws-ecr) - 管理 AWS ECR 上的 Docker 容器 Registry。
- [terraform-aws-ecs](https://github.com/terraform-aws-modules/terraform-aws-ecs) - 在 AWS 建立 AWS ECS 資源。
- [terraform-aws-efs](https://github.com/cloudposse/terraform-aws-efs) - 定義 EFS 檔案系統。
- [terraform-aws-eks](https://github.com/terraform-aws-modules/terraform-aws-eks) - 在 AWS 建立 Elastic Kubernetes Service（非常熱門的模組）。
- [terraform-aws-elb](https://github.com/terraform-aws-modules/terraform-aws-elb) - 在 AWS 建立 Elastic Load Balancer（已驗證模組）。
- [terraform-aws-eventbridge](https://github.com/terraform-aws-modules/terraform-aws-eventbridge) - 在 AWS 建立 EventBridge 資源。
- [terraform-aws-jenkins-ha-agents](https://github.com/neiman-marcus/terraform-aws-jenkins-ha-agents) - 以 EC2 為基礎部署 Jenkins，並使用高可用性（Spot）代理程式。於 EFS 上執行以確保不可變性。完全可自訂，並提供合理的預設值。
- [terraform-aws-jenkins](https://github.com/cloudposse-archives/terraform-aws-jenkins) - 建立包含 Jenkins 的 Docker 映像，將其儲存至 ECR Repository，並部署至執行 Docker stack 的 Elastic Beanstalk。 :skull:
- [terraform-aws-key-pair](https://github.com/cloudposse/terraform-aws-key-pair) - 自動產生 SSH 金鑰組（公開／私密金鑰）。
- [terraform-aws-lambda-auto-package](https://github.com/nozaq/terraform-aws-lambda-auto-package) - 此 Terraform 模組可定義 Lambda 函式，並自動建置及封裝其原始程式檔以供部署。
- [terraform-aws-lambda](https://github.com/terraform-aws-modules/terraform-aws-lambda) - Terraform 模組，可建置相依項目與套件，並以多種組合建立 AWS Lambda 資源。
- [terraform-aws-managed-service-prometheus](https://github.com/terraform-aws-modules/terraform-aws-managed-service-prometheus) - 在 AWS 建立 AWS Managed Service for Prometheus（AMP）資源。
- [terraform-aws-modules](https://github.com/terraform-aws-modules) - 由社群支援的 Terraform AWS 模組集合（包含 AWS 官方模組）。
- [terraform-aws-msk-kafka-cluster](https://github.com/terraform-aws-modules/terraform-aws-msk-kafka-cluster) - 在 AWS 建立 AWS MSK（Managed Streaming for Kafka）資源。
- [terraform-aws-notify-slack](https://github.com/terraform-aws-modules/terraform-aws-notify-slack) - 建立 SNS 主題與 Lambda 函式，將通知傳送至 Slack。
- [terraform-aws-postgresql-rds](https://github.com/azavea/terraform-aws-postgresql-rds) - 在 RDS 上建立 PostgreSQL。
- [terraform-aws-rds-aurora](https://github.com/terraform-aws-modules/terraform-aws-rds-aurora) - 在 AWS 建立 RDS Aurora 叢集資源（已驗證模組）。
- [terraform-aws-rds-proxy](https://github.com/terraform-aws-modules/terraform-aws-rds-proxy) - 在 AWS 建立 AWS RDS Proxy 資源。
- [terraform-aws-rds](https://github.com/terraform-aws-modules/terraform-aws-rds) - 在 AWS 建立 RDS 資源（已驗證模組）。
- [terraform-aws-redshift](https://github.com/terraform-aws-modules/terraform-aws-redshift) - 在 AWS 建立 Redshift 資源。
- [terraform-aws-route53](https://github.com/terraform-aws-modules/terraform-aws-route53) - 在 AWS 建立 Route53 資源。
- [terraform-aws-s3-bucket](https://github.com/terraform-aws-modules/terraform-aws-s3-bucket) - 在 AWS 建立 S3 bucket 資源。
- [terraform-aws-secure-baseline](https://github.com/nozaq/terraform-aws-secure-baseline) - 依據 CIS Amazon Web Services Foundations 安全基準設定 AWS 帳戶。
- [terraform-aws-security-group](https://github.com/terraform-aws-modules/terraform-aws-security-group) - 在 AWS 建立 EC2-VPC 安全群組（已驗證模組）。
- [terraform-aws-ssh-bastion-service](https://github.com/joshuamkite/terraform-aws-ssh-bastion-service) - 用於在 AWS 將 SSH bastion 部署為無狀態服務的 Terraform 計畫。
- [terraform-aws-transit-gateway](https://github.com/terraform-aws-modules/terraform-aws-transit-gateway) - 在 AWS 建立 Transit Gateway 資源。
- [terraform-aws-vpc](https://github.com/terraform-aws-modules/terraform-aws-vpc) - 在 AWS 建立 VPC 資源（已驗證且非常熱門的模組）。
- [terraform-aws-vpn-gateway](https://github.com/terraform-aws-modules/terraform-aws-vpn-gateway) - 在 AWS 建立 VPN Gateway 資源。
- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - 由 Microsoft 官方擁有的 Azure 已驗證 Terraform 模組集合，將 WAF 最佳做法編碼化，以一致地部署基礎架構。
- [terraform-azurerm-aks](https://github.com/kjanshair/terraform-azurerm-aks) - 在 Azure 建立 AKS 資源。
- [terraform-azurerm-iis](https://github.com/ghostinthewires/terraform-azurerm-iis-install) - 在 Azure VM 執行個體安裝 IIS Server。
- [terraform-azurerm-mysql](https://github.com/foreverXZC/terraform-azurerm-mysql) - 在 Azure 建立 MySQL 資料庫。
- [terraform-azurerm-redis](https://github.com/rahulkhengare/terraform-azurerm-redis) - 在 Azure 建立 Redis。
- [terraform-azurerm-sqlserver](https://github.com/metadevpro/terraform-azurerm-sqlserver-seed) - 在 Azure 建立 SQL Server 資料庫。
- [terraform-cloudflare-maintenance](https://github.com/adinhodovic/terraform-cloudflare-maintenance) - 使用 Cloudflare Workers 建立維護頁面的模組。
- [terraform-digitalocean-droplet](https://registry.terraform.io/modules/terraform-digitalocean-modules/droplet/digitalocean/latest) - 用於管理 DigitalOcean Droplets 及相關資源的 Terraform 模組。
- [terraform-ecs-jenkins](https://github.com/shuaibiyy/terraform-ecs-jenkins) - 使用 Terraform 在 AWS ECS 佈建 Jenkins。
- [terraform-gce-atlantis](https://github.com/runatlantis/terraform-gce-atlantis) - 建立 Terraform 設定，以便在 Google Compute Engine 執行 [Atlantis](https://runatlantis.io)。
- [terraform-google-project-factory](https://github.com/terraform-google-modules/terraform-google-project-factory) - 以具有明確主張的方式建立及設定 Google Cloud Platform 專案，包含 Shared VPC、IAM、API 等。
- [terraform-helm-carbon-intensity-exporter](https://github.com/fabiocicerchia/terraform-helm-carbon-intensity-exporter) - 用於部署 Kubernetes Carbon Intensity Exporter 的 Terraform／Helm 模組。
- [terraform-helm-cloud-carbon-footprint](https://github.com/fabiocicerchia/terraform-helm-cloud-carbon-footprint) - 用於在 Kubernetes 部署 Cloud Carbon Footprint 的 Terraform／Helm 模組。
- [terraform-helm-kepler](https://github.com/fabiocicerchia/terraform-helm-kepler) - 透過 Helm 部署 Kepler（Kubernetes 電力分析）的 Terraform 模組。
- [terraform-kubestack](https://github.com/kbst/terraform-kubestack) - Kubestack 是一個架構，讓 Kubernetes 平台工程團隊能在單一 Terraform 程式碼庫中定義完整的雲端原生 stack，並透過 GitOps 安全地持續演進平台。
- [terraform-linode-k8s](https://registry.terraform.io/modules/linode/k8s/linode/latest) - 在 Linode 執行個體安裝 Kubernetes。
- [terraform-nixos](https://github.com/nix-community/terraform-nixos) - 一組專為部署 NixOS 設計的 Terraform 模組。
- [terraform-static-website-s3-cloudfront](https://github.com/sergej-brazdeikis/terraform-static-website-s3-cloudfront) - 根據變數在 AWS S3 與 CloudFront 建立靜態網站。
- [tf_aws_bastion_s3_keys](https://github.com/terraform-community-modules/tf_aws_bastion_s3_keys) - 在 AWS EC2 建立 bastion 主機。
- [typhoon](https://github.com/poseidon/typhoon) - 精簡且免費、搭配 Terraform 使用的 Kubernetes 發行版。

## 自架 Registry

- [anthology](https://github.com/erikvanbrakel/anthology) - 私有 Terraform Registry 實作，可作為官方 Registry 的替代方案。
- [boring-registry](https://github.com/boring-registry/boring-registry) - 私有 Terraform Module／Provider Registry，支援 API 金鑰驗證與 Blob 儲存
- [citizen](https://github.com/outsideris/citizen) - 私有 Terraform Module／Provider Registry
- [nrkno/terraform-registry](https://github.com/nrkno/terraform-registry) - 採用模組化儲存後端的私有 Terraform Registry。
- [petra](https://github.com/devoteamgcloud/petra) - 私有 Terraform Registry 管理工具
- [philips-labs/terraform-registry](https://github.com/philips-labs/terraform-registry) - 用於提供託管於 GitHub 的各種 Terraform Provider 發行版本的 Registry
- [tapir](https://github.com/PacoVK/tapir) - 私有 Terraform Registry。
- [terraform-simple-registry](https://github.com/apparentlymart/terraform-simple-registry) - Terraform Registry 通訊協定的簡易實作。
- [terramantle.dev](https://terramantle.dev) - 著重於模組與狀態洞察、協助處理相依性管理的 Registry
- [Terrareg](https://github.com/matthewjohn/terrareg) - Terraform 模組 Registry。
- [terustry](https://github.com/veepee-oss/terustry) - 開放原始碼 Terraform Provider Registry，可作為 GitLab 或 GitHub 發行版本的 Proxy。
- [terralist](https://github.com/terralist/terralist) - 可透過 REST API 管理模組與 Providers 的 Terraform 私有 Registry。

## 代管 Registry

- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Microsoft 官方倡議，提供符合標準的 Azure 資源及架構模式 Terraform（和 Bicep）已驗證模組，並遵循 Well-Architected Framework。
- [cloudsmith](https://docs.cloudsmith.com/formats/terraform-modules-repository) - 供內部及外部用戶使用的代管套件託管服務。 :heavy_dollar_sign:
- [Terramantle](https://terramantle.dev) - 提供深入模組洞察、相依性對應及狀態檢視功能的 Terraform／OpenTofu 私有 Registry。

## Providers

### HashiCorp 支援的 Providers

- [terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) - Amazon Web Services 的 Provider。
- [terraform-provider-azurerm](https://github.com/hashicorp/terraform-provider-azurerm) - Azure 的 Provider。
- [terraform-provider-docker](https://github.com/hashicorp/terraform-provider-docker) - Docker 的 Provider。 :skull:
- [terraform-provider-google](https://github.com/hashicorp/terraform-provider-google) - Google Cloud Platform 的 Provider。
- [terraform-provider-helm](https://github.com/hashicorp/terraform-provider-helm) - Helm 的 Provider。
- [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) - Kubernetes 的 Provider。
- [terraform-provider-vsphere](https://github.com/vmware/terraform-provider-vsphere) - VMware vSphere 的 Provider。

### 廠商支援的 Providers

- [terraform-provider-alicloud](https://github.com/aliyun/terraform-provider-alicloud) - Alibaba Cloud 的 Provider。
- [terraform-provider-artifactory](https://github.com/jfrog/terraform-provider-artifactory) - [JFrog Artifactory](https://jfrog.com/artifactory/) 的 Provider.
- [terraform-provider-atlas](https://github.com/ariga/terraform-provider-atlas) - [Atlas](https://atlasgo.io/) 的 Provider.
- [terraform-provider-azapi](https://github.com/Azure/terraform-provider-azapi) - Azure Resource Manager REST API 的 Provider
- [terraform-provider-azuredevops](https://github.com/microsoft/terraform-provider-azuredevops) - Azure DevOps (VSTS) 的 Provider。
- [terraform-provider-buildkite](https://github.com/buildkite/terraform-provider-buildkite) - Buildkite 的 Provider。
- [terraform-provider-checkly](https://github.com/checkly/terraform-provider-checkly) - 管理用於 API 與端對端監控的 [Checkly](https://www.checklyhq.com) 資源。
- [terraform-provider-coder](https://github.com/coder/terraform-provider-coder) - [Coder](https://coder.com) 的 Provider
- [terraform-provider-confluent](https://github.com/confluentinc/terraform-provider-confluent) - Confluent 的 Provider。
- [terraform-provider-datadog](https://github.com/DataDog/terraform-provider-datadog) - Datadog 的 Provider。
- [terraform-provider-devhelm](https://github.com/devhelmhq/terraform-provider-devhelm) - [DevHelm](https://devhelm.io) 可用性監控的 Provider — 以程式碼管理監控項目、警示通道與狀態頁面。
- [terraform-provider-digitalocean](https://github.com/digitalocean/terraform-provider-digitalocean) - DigitalOcean 的 Provider。
- [terraform-provider-dominos](https://github.com/nat-henderson/terraform-provider-dominos) - Dominos Pizza 的 Provider。
- [terraform-provider-elasticstack](https://github.com/elastic/terraform-provider-elasticstack) - Elasticsearch 與 Kibana 的 Provider。
- [terraform-provider-env0](https://github.com/env0/terraform-provider-env0) - [env0](https://www.env0.com/) 的 Provider
- [terraform-provider-featureflip](https://github.com/canopy-labs/terraform-provider-featureflip) - [Featureflip](https://featureflip.io/) 功能旗標的 Provider：專案、環境、旗標、目標規則、區段及 SDK 金鑰。
- [terraform-provider-github](https://github.com/integrations/terraform-provider-github) - GitHub 的 Provider。
- [terraform-provider-gitlab](https://github.com/gitlabhq/terraform-provider-gitlab) - GitLab 的 Provider。
- [terraform-provider-graphql](https://github.com/sullivtr/terraform-provider-graphql) - GraphQL 查詢與 Mutation 的 Provider。
- [terraform-provider-hcloud](https://github.com/hetznercloud/terraform-provider-hcloud) - Hetzner Cloud 的 Provider。
- [terraform-provider-healthchecksio](https://github.com/kristofferahl/terraform-provider-healthchecksio) - 用於管理 healthchecks.io 資源的 Provider。
- [terraform-provider-heroku](https://github.com/heroku/terraform-provider-heroku) - Heroku 的 Provider。
- [terraform-provider-ibm](https://github.com/IBM-Cloud/terraform-provider-ibm) - IBM Cloud 的 Provider。
- [terraform-provider-iterative](https://github.com/iterative/terraform-provider-iterative) - 以機器學習應用為考量打造的 Terraform 外掛。
- [terraform-provider-k8s](https://github.com/banzaicloud/terraform-provider-k8s) - 簡易 Kubernetes Provider，可搭配任何 Manifest 使用。
- [terraform-provider-keycloak](https://github.com/keycloak/terraform-provider-keycloak) - 用於管理 [Keycloak](https://www.keycloak.org/) 身分識別 Provider 伺服器設定的 Provider。
- [terraform-provider-linode](https://github.com/btobolaski/terraform-provider-linode) - Linode 的 Provider。
- [terraform-provider-nxip](https://github.com/uk-sw/terraform-provider-nxip) - [nxip](https://nx-ip.com) 的 Provider；這是可在雲端及地端環境跨網域以集區為基礎分配 CIDR 的 IPAM。 :heavy_dollar_sign:
- [terraform-provider-openstack](https://github.com/terraform-provider-openstack/terraform-provider-openstack) - OpenStack 的 Plugin。
- [terraform-provider-panos](https://github.com/PaloAltoNetworks/terraform-provider-panos) - [Palo Alto Networks 次世代防火牆](https://www.paloaltonetworks.com/network-security)的 Provider。
- [terraform-provider-phare](https://github.com/phare/terraform-provider-phare) -  [Phare](https://phare.io) 的 Terraform Provider。
- [terraform-provider-planetscale](https://github.com/planetscale/terraform-provider-planetscale) -  [PlanetScale](https://planetscale.com)（Vitess 與 Postgres）的 Terraform Provider。
- [terraform-provider-qovery](https://github.com/Qovery/terraform-provider-qovery) - [Qovery](https://www.qovery.com/) 的 Provider — 在 AWS、GCP、Azure 和 Scaleway 上管理 Kubernetes 部署、環境、應用程式、資料庫、Helm charts 及 Terraform 服務。
- [terraform-provider-pingdom](https://github.com/russellcardullo/terraform-provider-pingdom) - 用於管理 Pingdom 資源的 Provider。 :skull:
- [terraform-provider-rancher2](https://github.com/rancher/terraform-provider-rancher2) - Rancher v2 的 Provider。
- [terraform-provider-scalr](https://github.com/Scalr/terraform-provider-scalr) - [Scalr](https://www.scalr.com/) 的 Provider
- [terraform-provider-secrethub](https://github.com/secrethub/terraform-provider-secrethub) - SecretHub 的 Provider。 :skull:
- [terraform-provider-sigsci](https://github.com/signalsciences/terraform-provider-sigsci) - Signal Sciences 的 Provider。
- [terraform-provider-snowflake](https://github.com/snowflakedb/terraform-provider-snowflake) - Snowflake 資料倉儲的 Provider。
- [terraform-provider-spinnaker](https://github.com/armory-io/terraform-provider-spinnaker) - [Spinnaker](https://spinnaker.io/) 的 Provider。
- [terraform-provider-spotinst](https://github.com/spotinst/terraform-provider-spotinst) - spotinst 的 Provider。
- [terraform-provider-stripe](https://github.com/franckverrot/terraform-provider-stripe) - Stripe 的 Provider。
- [terraform-provider-ucloud](https://github.com/ucloud/terraform-provider-ucloud) - 用於管理 UCloud 資源的 Provider。
- [terraform-provider-uptimerobot](https://github.com/louy/terraform-provider-uptimerobot) - 用於管理 uptimerobot 資源的 Provider。 :skull:
- [terraform-provider-vaulted](https://github.com/sumup-oss/terraform-provider-vaulted) - 透過 Terraform 加密 HashiCorp Vault 秘密資料，並可儲存在 Git 等 SCM 中。
- [terraform-provider-scp](https://github.com/splunk/terraform-provider-scp) - Splunk Cloud Platform 的 Provider。

### 社群 Providers

- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Coolify 的 Terraform Provider。
- [terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) - Terraform Docker Provider。
- [terraform-provider-minio](https://github.com/aminueza/terraform-provider-minio) - 用於管理 MinIO S3 bucket 與 IAM 使用者的 Terraform Provider。
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Multipass 的 Terraform Provider。
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - 以程式碼管理 OpenRouter：工作區、防護措施、具支出上限的 API 金鑰及組織成員。支援 Terraform 與 OpenTofu。
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - 用於 Azure 成本估算與成本防護的 Terraform Provider。
- [terraform-provider-proxmox](https://github.com/Telmate/terraform-provider-proxmox) - Terraform Proxmox Provider。
- [terraform-provider-seerr](https://github.com/Josh-Archer/terraform-provider-seerr) - Seerr（Overseerr／Jellyseerr）的 Terraform Provider。
- [terraform-provider-terracurl](https://github.com/devops-rob/terraform-provider-terracurl) - 用於對目標端點發出受管理及非受管理 API 呼叫的 Provider。
- [terraform-provider-uname](https://github.com/julienlevasseur/terraform-provider-uname) - Terraform 的 Uname Provider。
- [terraform-provider-value](https://github.com/pseudo-dynamic/terraform-provider-value) - Terraform 的 Value Provider。
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Multipass 的 Terraform Provider。
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - 以程式碼管理 OpenRouter：工作區、防護措施、具支出上限的 API 金鑰及組織成員。支援 Terraform 與 OpenTofu。
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - 用於 Azure 成本估算與成本防護的 Terraform Provider。
- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Coolify 的 Terraform Provider。
- [terraform-provider-appstore](https://github.com/elevenode/terraform-provider-appstore) - Apple App Store Connect 的 Terraform Provider。
- [terraform-provider-expo](https://github.com/elevenode/terraform-provider-expo) - Expo Application Services (EAS) 的 Terraform Provider。
- [terraform-provider-paddle](https://github.com/vivantel/terraform-provider-paddle) - 用於管理 Paddle Billing 目錄資源、生命週期動作及查詢資料來源的 Terraform Provider。
- [terraform-provider-seekrit](https://github.com/seekritdev/terraform-provider-seekrit) - 管理 seekrit 應用程式、環境、群組、服務 Token、金鑰授權及秘密資料。僅寫入引數與暫時性資源可避免秘密值進入狀態檔。

## 測試

- [clarity](https://github.com/xchapter7x/clarity) - 用於 Terraform 單元測試的宣告式測試架構。 :skull:
- [kitchen-terraform](https://github.com/newcontext-oss/kitchen-terraform) - 提供一組 Test Kitchen 外掛，讓系統能使用 Test Kitchen 套用 Terraform 設定，並透過 InSpec 控制項驗證產生的 Terraform 狀態。 :skull:
- [rspec-terraform](https://github.com/bsnape/rspec-terraform) - Terraform 模組的 RSpec 測試。 :skull:
- [terraform_validate](https://github.com/elmundio87/terraform_validate) - 協助強制執行使用者定義的 Terraform 標準。 :skull:
- [terraform-compliance](https://github.com/terraform-compliance/cli) - Terraform 檔案的 BDD 測試。
- [terratest](https://github.com/gruntwork-io/terratest) - Terratest 是 Go 函式庫，可讓您更輕鬆地為基礎架構程式碼撰寫自動化測試。

## 工具

- [AIaC](https://github.com/gofireflyio/aiac) - 人工智慧基礎架構即程式碼產生器
- [AirIAM](https://github.com/bridgecrewio/AirIAM) - AirIAM 是一款 AWS IAM 工具，可建立 Terraform 執行的最小權限架構。
- [asdf](https://github.com/asdf-community/asdf-hashicorp) - [asdf](https://github.com/asdf-vm/asdf) 版本管理工具的 HashiCorp 外掛
- [astro](https://github.com/uber/astro/) - Astro 是一款工具，可透過單一指令管理多個 Terraform 執行作業。 :ghost:
- [atlantis](https://github.com/runatlantis/atlantis) - 透過 GitHub 協作使用 Terraform 的統一工作流程。
- [atmos](https://github.com/cloudposse/atmos) - 可將深度合併的 YAML 轉換為模組輸入值的通用工具。
- [aws2tf](https://github.com/aws-samples/aws2tf) - 自動將現有 AWS 資源匯入 Terraform，並輸出 Terraform HCL 程式碼。
- [aztfexport](https://github.com/Azure/aztfexport) - 將現有 Azure 資源納入 Terraform 管理的工具。
- [AzureNamer](https://azurenamingconventions.com/) - 為 200 多種 Azure 資源類型產生符合 CAF 的名稱，並將其匯出為 Terraform locals，同時即時驗證長度與字元。
- [balcony](https://oguzhan-yilmaz.github.io/balcony/) - 方便讀取 AWS API 的 CLI 工具，也能產生 Terraform import blocks 及 Terraform Resource 程式碼。
- [bare-devcontainer/templates](https://github.com/bare-devcontainer/templates/tree/main/src/terraform) - 重視安全性的 Terraform 開發容器，內含 terraform-ls 及方便重新建置的快取。基礎映像位於 [bare-devcontainer/images](https://github.com/bare-devcontainer/images/tree/main/terraform)。
- [blast radius](https://github.com/28mm/blast-radius) - Terraform 相依性圖的互動式視覺化。 :skull:
- [cf-terraforming](https://github.com/cloudflare/cf-terraforming) - 讓您更輕鬆地將現有 Cloudflare 資源納入 Terraform 管理的命令列工具。
- [cfnctl](https://github.com/rogerwelin/cfnctl) - Cfnctl 將 Terraform CLI 的使用體驗帶到 AWS CloudFormation。
- [Checkov](https://github.com/bridgecrewio/checkov/) - 適用於 terraform>=0.12 的 Terraform 靜態分析工具
- [cloud-audit](https://github.com/gebalamariusz/cloud-audit) - AWS 安全性稽核 CLI，具備修正引擎，可產生 Terraform 程式碼以修復錯誤設定。
- [CloudBurn](https://github.com/towardsthecloud/cloudburn) - 在 CI 與正式 AWS 帳戶中，針對 Terraform 和 CloudFormation 執行 AWS 成本政策檢查。
- [Coder](https://coder.com/) - Coder 透過 Terraform 在您的基礎架構上佈建軟體開發環境。
- [coretech/terrafile](https://github.com/coretech/terrafile) - 以有系統的方式管理來自 GitHub、供 Terraform 使用的外部模組（以 Go 撰寫）。 :skull:
- [Cynative](https://github.com/cynative/cynative) - 開放原始碼安全代理架構，可審查 Terraform 設定，並透過唯讀雲端 API 調查線上基礎架構。
- [Datadef](https://datadef.io/repo-to-diagram) - 從 Terraform Repository 產生架構圖與文件：不執行 `terraform init` 或讀取狀態，即可剖析 `.tf` 檔案；將模組繪製為區域並顯示各環境數量，每日重新同步。 :heavy_dollar_sign:
- [demonolith](https://github.com/schrieksoft/demonolith) - 使用 `demonolith refactor`（移動程式碼）和 `demonolith migrate`（遷移至較小的 .tfstate 檔案）拆分單體 Terraform 專案。
- [driftctl](https://github.com/snyk/driftctl) - 偵測、追蹤基礎架構漂移並發出警示 :skull:
- [drifthound](https://github.com/drifthoundhq/drifthound) - 持續偵測基礎架構漂移，並提供歷史追蹤與通知。
- [dxw/terrafile](https://github.com/dxw/terrafile) - 以有系統的方式管理來自 GitHub、供 Terraform 使用的外部模組（以 Ruby 撰寫）。
- [flora](https://github.com/ketchoop/flora) - Terraform 版本管理工具。
- [fogg](https://github.com/chanzuckerberg/fogg) - 用於減少管理 Terraform Repository 時繁瑣工作的工具。
- [former2](https://github.com/iann0036/former2) - 根據 AWS 帳戶中的現有資源產生 Terraform 設定。
- [fuzzy-terraform-rm](https://github.com/paololazzari/fuzzy-terraform-rm) - 使用模糊搜尋從 Terraform 狀態中移除資源的命令列工具。
- [gaia](https://github.com/gaia-app/gaia) - Gaia 是 Terraform 模組及自助式基礎架構的使用者介面 🌍👨‍💻。 :skull:
- [hcl2json](https://github.com/tmccombs/hcl2json) - 將 HCL2 轉換為 JSON。
- [hcldump](https://github.com/magodo/hcldump) - 輸出 HCL（v2）抽象語法樹。
- [hcledit (mercari)](https://github.com/mercari/hcledit) - 用於編輯 HCL 設定的 Go 套件
- [hcledit (minamijoyo)](https://github.com/minamijoyo/hcledit) - HCL 命令列編輯器。
- [hclgrep](https://github.com/magodo/hclgrep) - 以語法為基礎的 HCL(v2) grep 工具。
- [hq](https://github.com/miller-time/hq) - 命令列 HCL 處理器
- [iam-policy-json-to-terraform](https://github.com/flosell/iam-policy-json-to-terraform) - 將 JSON 格式 IAM Policy 轉換為 Terraform aws_iam_policy_document 的小型工具
- [Infracost](https://github.com/infracost/infracost) - 在 CLI 及 Pull Request 中提供 Terraform 雲端成本估算。
- [inframap](https://github.com/cycloidio/inframap) - 讀取 tfstate 或 HCL，產生各 Provider 專屬的圖表，只顯示最重要／相關的資源。
- [InfraScan](https://infrascan.soldevelo.com) - 進階基礎架構稽核工具，用於分析 Terraform、AWS 與 Kubernetes 的成本及安全性。
- [InfraSketch](https://infrasketch.cloud) - 免費的瀏覽器工具，可將 Terraform HCL 與 Docker Compose 視覺化為架構圖。支援 AWS 與 Azure，無須註冊或提供憑證。
- [json2hcl](https://github.com/kvz/json2hcl) - 將 JSON 轉換為 HCL，亦可反向轉換。 :ghost:
- [k2tf](https://github.com/sl1pm4t/k2tf) - 將 Kubernetes YAML 轉換為 Terraform HCL 的工具。
- [Kapitan](https://github.com/kapicorp/kapitan) - 根據以 Inventory 驅動的範本產生 Terraform／OpenTofu JSON 及其他基礎架構設定。
- [KICS](https://github.com/Checkmarx/kics) - 掃描 IaC 專案中的安全漏洞、合規問題及基礎架構錯誤設定。目前支援 Terraform 專案、Kubernetes Manifest、Dockerfile、AWS CloudFormation 範本及 Ansible Playbook。
- [layerform](https://github.com/briefercloud/layerform) - Layerform 協助工程師使用一般 .tf 檔案建立可重複使用的環境 stack，非常適合多個「staging」環境。 :skull:
- [library.tf](https://library.tf) - Library.tf 的設計不僅提供 Terraform 與 OpenTofu 的所有 Registry 資訊，也提供決策所需的洞察。快速找到有人支援及維護、且沒有滿布錯誤的模組或 Providers。
- [modules.tf-lambda](https://github.com/antonbabenko/modules.tf-lambda) - 將使用 [Cloudcraft.co](https://cloudcraft.co) 建立的視覺化圖表轉換為 Terraform 基礎架構即程式碼的產生器。
- [para](https://github.com/paraterraform/para) - Terraform／Terragrunt 缺少的第三方外掛管理工具，也是「瑞士刀」；只需一個工具即可簡化所有工作流程。 :skull:
- [pike](https://github.com/jamesWoolfenden/pike) - Pike 會計算建置 Terraform 所需的權限或 IAM Policy。
- [pipeform](https://github.com/magodo/pipeform) - Terraform 執行階段 TUI
- [platform-skills](https://github.com/nitinjain999/platform-skills) - AI 輔助的 Terraform 實務手冊：涵蓋 IAM 最小權限審查、影響範圍分析、狀態影響、Provider 限制及復原計畫。可作為 Claude、Codex、Cursor 與 Copilot 外掛使用。
- [pluralith](https://www.pluralith.com/) - Terraform 狀態視覺化及基礎架構文件自動產生工具。 :heavy_dollar_sign:
- [pre-commit-terraform](https://github.com/antonbabenko/pre-commit-terraform) - Terraform 與 Terragrunt 的 pre-commit Git Hooks：自動格式化、驗證、更新文件、執行安全檢查、估算成本等。
- [pretf](https://github.com/raymondbutcher/pretf) - 可直接替換使用的 Terraform Wrapper，使用 Python 產生 Terraform 設定。請參閱 [pretf 文件](https://pretf.readthedocs.io/en/latest/)。 :skull:
- [prettyplan for TF 0.12+](https://github.com/cloudandthings/terraform-pretty-plan) - 適用於 TF 0.12 以上的 Prettyplan（[可在此線上使用](https://cloudandthings.github.io/terraform-pretty-plan/)）是小型工具，可讓您輕鬆檢視大型 Terraform 計畫。
- [prettyplan](https://github.com/chrislewisdev/prettyplan) - Prettyplan（[可在此線上使用](https://chrislewisdev.github.io/prettyplan/)）是小型工具，可讓您輕鬆檢視大型 Terraform 計畫。 :ghost:
- [pug](https://github.com/leg100/pug) - 供 Terraform 進階使用者使用的終端機介面。
- [pytest-terraform](https://github.com/cloud-custodian/pytest-terraform) - 提供 Fixtures 與離線重播支援的 pytest Terraform 外掛。
- [python-terrafile](https://github.com/claranet/python-terrafile) - 以有系統的方式管理來自 GitHub、供 Terraform 使用的外部模組。
- [regula](https://github.com/fugue/regula) - 在部署前評估 Terraform 基礎架構即程式碼，找出 AWS、Azure 及 Google Cloud 可能存在的安全設定錯誤與合規違規。
- [redc](https://github.com/wgpsec/redc) - 以 Terraform 建置的新一代紅隊基礎架構自動化工具，支援多雲部署（Alibaba Cloud、Tencent Cloud、AWS 等），可透過單一指令建立、設定及銷毀紅隊環境。
- [renovate-config](https://github.com/SpotOnInc/renovate-config) - 可共用的 Renovatebot 設定預設值，對 DevOps 人員特別實用。
- [Riftmap](https://riftmap.dev) - 跨 Repository 相依性及變更影響分析引擎，可掃描 Terraform、Docker、Helm 等多個 Repository 的基礎架構，視覺化呈現相依關係及變更造成的影響。
- [rover](https://github.com/im2nguyen/rover) - Terraform 狀態與設定的互動式探索工具。
- [ruby-terraform](https://github.com/infrablocks/ruby_terraform) - 用於執行 Terraform 指令的簡易 Ruby Wrapper。
- [sato](https://github.com/JamesWoolfenden/sato) - Sato 可協助您將舊版 CloudFormation 轉換為 Terraform。
- [scenery](https://github.com/dmlittle/scenery) - 另一款 Terraform 計畫輸出美化工具。 :ghost: :skull:
- [scratchrelaxtv](https://github.com/YakDriver/scratchrelaxtv) - 協助開發模組的簡易 Python 工具：從 `main.tf` 擷取變數以產生 `variables.tf`，並根據 `variables.tf` 建立模組使用範本。
- [serverless.tf - Doing serverless with Terraform](https://serverless.tf/) - serverless.tf 是一套具有明確主張的開放原始碼架構，使用 Terraform 在 AWS 上開發、建置、部署及保護無伺服器應用程式與基礎架構。[深入瞭解](https://github.com/antonbabenko/serverless.tf)。
- [Shieldly](https://github.com/shieldly-io/cli) - 以 AI 分析 Terraform 產生的 IAM Policy 與 CloudFormation 安全性，說明權限風險原因及修正方法。提供免費方案、CLI 與 GitHub Action。
- [Shisho](https://github.com/flatt-security/shisho) - 輕量級 Terraform 靜態分析工具。
- [Speakeasy](https://www.speakeasy.com/) - 根據 OpenAPI 規格產生 Terraform Provider。
- [stacks](https://github.com/cisco-open/stacks) - Stacks，Terraform 程式碼前處理器
- [SyncVey](https://github.com/MR-TABATA/SyncVey) - 自架 AWS 資產清冊，可在 tfstate 與 AWS 線上狀態間偵測屬性層級的漂移，並支援排程掃描及中介軟體 EOL 警示。
- [tads-boilerplate](https://github.com/Thomvaill/tads-boilerplate) - 結合 Ansible 與 Terraform 的強大功能及 Docker Swarm 的簡潔性，實現基礎架構即程式碼與 DevOps 最佳做法。
- [tau](https://github.com/avinor/tau) - Tau 是 Terraform 的輕量 Wrapper，用於管理多個部署、相依項目及秘密資料。 :skull:
- [tenv](https://github.com/tofuutils/tenv) - OpenTofu／Terraform／Terragrunt 版本管理工具。
- [terraboard](https://github.com/camptocamp/terraboard) - 用於檢視 Terraform 狀態的網頁儀表板。
- [terraboot](https://github.com/MastodonC/terraboot) - 用於產生並執行 Terraform 設定的 DSL。
- [terracognita](https://github.com/cycloidio/terracognita) - 從現有 Cloud Providers 讀取資源（反向 Terraform），並產生基礎架構即程式碼的 Terraform 設定。
- [terracost](https://github.com/cycloidio/terracost) - CLI 中的 Terraform 雲端成本估算工具。
- [terracove](https://elementtech.github.io/terracove/) - 遞迴測試目錄樹中的 Terraform 差異與涵蓋率。
- [TerraDepot](https://github.com/derBroBro/TerraDepot) - 以預設 HTTP 遠端 Backend 為基礎的 Terraform 狀態 Repository，可集中管理 AWS S3 上的 tfstate。
- [TerraDrift](https://github.com/niravraychura/terradrift) - 供 CI 與 cron 使用的自架 Terraform／OpenTofu 漂移 CLI（以 plan 為基礎；不盤點未受管理的資源）。
- [terradozer](https://github.com/chenrui333/terradozer) - 無需設定檔即可執行 Terraform destroy。
- [terraeasy](https://github.com/jaceq/terraeasy) - 簡易 Terraform Wrapper
- [terraform-ai-skills](https://github.com/anmolnagpal/terraform-ai-skills) - 適用於 GitHub Copilot、Claude 與 ChatGPT 的 AI 技能，可自動化大量 Terraform 模組管理 — 在 AWS、GCP、Azure 與 DigitalOcean 的 10 至 200 多個 Repository 中升級 Provider、標準化工作流程及發佈版本。
- [terraform-aws-clickops-notifier](https://github.com/cloudandthings/terraform-aws-clickops-notifier) - AWS Console 中發生操作時接收通知。
- [terraform-bundle](https://github.com/hashicorp/terraform/tree/main/tools/terraform-bundle) - 輕鬆建立包含 Terraform 執行檔及 Provider 執行檔的套件。適用於 CI 及隔離網路環境中的 Terraform Enterprise。
- [terraform-cdk](https://github.com/hashicorp/terraform-cdk) - Terraform 的 CDK（Cloud Development Kit）可讓開發者使用熟悉的程式語言定義雲端基礎架構，並透過 HashiCorp Terraform 佈建。
- [terraform-cleaner](https://github.com/sylwit/terraform-cleaner) - 用於偵測 Terraform 模組中未使用變數的小型工具。
- [terraform-credentials-vault](https://github.com/oulman/terraform-credentials-vault) - Terraform「憑證輔助程式」外掛，可透過環境變數為 Terraform 原生服務（私有模組 Registry、Terraform Cloud 等）提供憑證。
- [terraform-diff](https://github.com/contentful-labs/terraform-diff) - 隨時掌握需要在哪裡執行 Terraform plan 與 apply！
- [terraform-docs](https://github.com/terraform-docs/terraform-docs) - 快速產生 Terraform 模組文件的工具。
- [terraform-graph-beautifier](https://github.com/pcasteran/terraform-graph-beautifier) - 命令列工具，可將幾乎無法使用的 terraform graph 指令輸出轉換為更有意義且易於理解的內容。
- [terraform-iam-policy-validator](https://github.com/awslabs/terraform-iam-policy-validator) - CLI 會依據 AWS IAM 最佳做法，驗證 Terraform 範本中的 AWS IAM Policy。
- [terraform-landscape](https://github.com/coinbase/terraform-landscape) - *（僅適用於 0.11 及更舊版本）* 改善 Terraform 計畫輸出，讓內容更易讀、易懂。
- [terraform-operator](https://github.com/GalleyBytes/terraform-operator) - 用於處理 Terraform 作業的 Kubernetes CRD。
- [terraform-plan-parser](https://github.com/lifeomic/terraform-plan-parser) - 剖析 `terraform plan` 標準輸出並轉換為 JSON 的命令列工具及 JavaScript API。 :ghost:
- [terraform-provisioner](https://github.com/shuaibiyy/terraform-provisioner) - 用於管理同一組 Terraform 指令碼多次佈建作業的工具。
- [terraform-rake-tasks](https://github.com/gina-alaska/terraform-rake-tasks) - 用於管理 Terraform 計畫的共用 Rake 工作。
- [terraform-repl](https://github.com/paololazzari/terraform-repl) - 提供更佳互動式主控台體驗的 Terraform Console Wrapper。
- [Terraform-Visual](https://github.com/hieven/terraform-visual) - 簡單但強大的 Terraform 計畫視覺化工具。
- [terravision](https://github.com/patrickchugh/terravision) - 使用 AWS／Azure／GCP 官方圖示與設計標準，從 Terraform 程式碼產生專業雲端架構圖。完全在用戶端執行，並整合 CI/CD。
- [terraform.py](https://github.com/mantl/terraform.py) - 用於剖析 Terraform 狀態檔的 Ansible 動態 Inventory 指令碼。 :skull:
- [terraformer](https://github.com/chenrui333/terraformer) - 從現有基礎架構產生 Terraform 檔案的 CLI 工具，將基礎架構轉為程式碼。支援多種 Providers。
- [terraforming](https://github.com/dtan4/terraforming) - 將現有 AWS 資源匯出為 Terraform 格式（tf、tfstate）。類似 `terraformer`。 :skull:
- [terraformize](https://github.com/naorlivne/terraformize) - 透過簡易 REST API 端點套用／銷毀 Terraform 模組。 :skull:
- [terraformsh](https://github.com/pwillis-els/terraformsh) - 以 Bash 撰寫的 Wrapper，可改善 CLI 使用體驗並實現 DRY 階層式設定
- [terragrunt-atlantis-config](https://github.com/transcend-io/terragrunt-atlantis-config) - 為 Terragrunt 專案產生 Atlantis 設定。
- [terragrunt](https://github.com/gruntwork-io/terragrunt) - Terragrunt 是 Terraform 的輕量 Wrapper，提供額外工具以維持 Terraform 設定的 DRY、搭配多個 Terraform 模組使用，以及管理遠端狀態。
- [terrahelp](https://github.com/opencredo/terrahelp) - 提供額外功能的命令列工具，這些功能有時在使用 Terraform 時很實用。
- [terrahub](https://github.com/tfxor/terrahub) - TerraHub 是 Terraform 自動化與協調工具。與 console.terrahub.io 無縫整合，提供適合企業使用的 GUI，可即時顯示 Terraform 執行狀況，並稽核及報告歷史執行紀錄。 :heavy_dollar_sign:
- [terramagic](https://github.com/miltlima/terramagic) - 以 Python 撰寫的精靈工具，可自動建立資料夾與 Terraform 檔案！
- [terramate](https://github.com/terramate-io/terramate) - 用於管理多個 Terraform Stack 的工具，支援變更偵測與程式碼產生
- [terrap-cli](https://github.com/sirrend/terrap-cli) - Terrap 是功能強大的 CLI 工具，可掃描基礎架構並識別所需變更。
- [terrars](https://github.com/andrewbaxter/terrars) - Terrars 是以 Rust 建置 Terraform Stack 的工具，可作為 CDK 的替代方案。
- [terrascan](https://github.com/tenable/terrascan) - 用於 Terraform 範本靜態程式碼分析的安全性與最佳做法測試集合
- [terrascope](https://github.com/spilliams/terrascope) - Terraform Monorepo 的建置協調工具。
- [terrashine](https://isawan.github.io/terrashine/) - Terrashine 是 Terraform Provider Mirror Protocol 的實作，會在要求 Provider 時自動快取相依項目。
- [terraspace](https://terraspace.cloud) - Terraform 架構
- [terrastate](https://github.com/rohinivsenthil/terrastate) - 用於監控／部署／銷毀工作區 Terraform 資源的 Visual Studio Code 擴充功能
- [terratag](https://github.com/env0/terratag) - Terratag 是 CLI 工具，可讓 Terraform 使用者在所有 AWS、Azure 與 GCP 資源中自動建立及維護標籤。
- [tf-init-booster](https://github.com/hayorov/terraform-init-booster) - Terraform 執行前的程序，可加速大型藍圖下載 Terraform 模組。
- [tf-profile](https://github.com/datarootsio/tf-profile/) - Terraform 執行作業的分析器，可產生全域統計、資源層級統計或視覺化結果。
- [tf-summarize](https://github.com/dineshba/tf-summarize) - 列印 Terraform 計畫摘要的命令列工具
- [tf-why](https://github.com/Raj-glitch-max/tf.why) - 透過查詢 CloudTrail，將 Terraform 漂移追溯至造成該變更的 AWS 操作者的 CLI 工具。
- [tfaction](https://github.com/suzuki-shunsuke/tfaction) - 具明確主張的 Terraform 工作流程 GitHub Actions 集合
- [tfautomv](https://github.com/busser/tfautomv) - 自動產生 Terraform `moved` 區塊，讓重構更輕鬆
- [tfcmt](https://github.com/suzuki-shunsuke/tfcmt) - 將 plan 與 apply 結果作為 Pull Request 留言通知的 CLI。
- [tfedit](https://github.com/minamijoyo/tfedit) - Terraform 重構工具。
- [tfenv](https://github.com/tfutils/tfenv) - 受 rbenv 啟發的 Terraform 版本管理工具。
- [tfgen](https://github.com/0xDones/tfgen) - 用於維持程式碼庫一致性並實現 DRY 的 Terraform 程式碼產生器。
- [tfgpt](https://github.com/flavius-dinu/tfgpt) - 整合 Terraform 與 OpenAI GPT-3.5 Turbo 的 CLI 工具，可說明 Terraform 指令與概念。
- [tfimport](https://github.com/coolapso/tfimport) - 自動將現有基礎架構匯入 tfstate 的 CLI 工具。
- [tfjson](https://github.com/palantir/tfjson) - 讀取 Terraform 計畫檔並以 JSON 輸出的工具。 :skull:
- [tfk8s](https://github.com/jrhouston/tfk8s) - 將 Kubernetes YAML Manifest 轉換為 Terraform HCL 的工具
- [tflint](https://github.com/terraform-linters/tflint) - Terraform Linter，可偵測 `terraform plan` 無法偵測的錯誤
- [tfmake](https://github.com/tfmake/tfmake) - 運用 make 的強大功能自動化 Terraform。
- [tfmask](https://github.com/cloudposse-archives/tfmask) - 遮蔽 `terraform plan` 與 `terraform apply` 特定輸出的 Terraform 工具。 :skull:
- [tfmigrate](https://github.com/minamijoyo/tfmigrate) - 供 GitOps 使用的 Terraform 狀態遷移工具。
- [tfmigrator](https://github.com/tfmigrator/cli) - 遷移 Terraform 設定與狀態的 Go 函式庫及 CLI
- [tfmodcache](https://github.com/Rezarys/tfmodcache) - Terraform 與 OpenTofu 的本機共用模組快取；`terraform init` 不再重新下載已有的模組。我是作者。
- [tfmv](https://github.com/suzuki-shunsuke/tfmv) - 重新命名 Terraform 資源並產生 moved 區塊
- [tfocus](https://github.com/nwiizo/tfocus) - tfocus 是高度互動式工具，可選取特定資源執行 Terraform plan／apply。可將它視為「緊急工具」，而非日常用途。
- [tfprovidercheck](https://github.com/suzuki-shunsuke/tfprovidercheck) - 防止執行惡意 Terraform Providers 的 CLI
- [tfproviderlint](https://github.com/bflad/tfproviderlint) - Terraform Provider Lint 工具。
- [tfrepl](https://github.com/ysoftwareab/tfrepl) - Terraform REPL，提供完整 Shell 體驗。以 Readline 為基礎，無相依項目，可儲存設定變更並保留歷史紀錄。
- [tfreveal](https://github.com/breml/tfreveal) - 顯示 Terraform 計畫中所有秘密（敏感）值的 Terraform 工具。
- [tfscaffold](https://github.com/tfutils/tfscaffold) - 用於控制由 Terraform 管理的多環境、多元件 AWS 基礎架構的架構。
- [tfschema](https://github.com/minamijoyo/tfschema) - Terraform Providers 的 Schema 檢視工具。
- [tfsec](https://github.com/aquasecurity/tfsec) - Terraform 靜態分析工具，支援 terraform <0.12 與 >=0.12，並直接整合 HCL Parser 以獲得更佳結果。
- [tfsort](https://github.com/AlexNabokikh/tfsort) - 排序 Terraform 變數與輸出的 CLI 工具。
- [tftarget](https://github.com/future-architect/tftarget) - 以互動方式執行 `terraform xxx -target={...}` 的 CLI 工具。
- [tftree](https://github.com/busser/tftree) - 在終端機顯示 Terraform 模組呼叫堆疊。
- [tftui](https://github.com/idoavrah/terraform-tui) - Terraform 狀態的文字使用者介面。
- [tfupdate](https://github.com/minamijoyo/tfupdate) - 更新 Terraform 設定中的版本限制。
- [tfvar](https://github.com/shihanng/tfvar) - tfvar 會掃描 Terraform 設定或模組，並擷取變數至您選擇的格式（tfvar、環境變數等）以供編輯。
- [tfvault](https://github.com/tedilabs/tfvault) - 通用 Terraform 憑證輔助工具，支援可插拔的秘密資料後端（OS 金鑰圈、pass／gopass、環境變數），並依設定檔隔離帳戶。
- [tfvaultenv](https://github.com/oulman/tfvaultenv) - tfvaultenv 從 HashiCorp Vault 讀取秘密資料，並輸出含有這些秘密資料、供各種 Terraform Providers 使用的環境變數。
- [tfwrapper](https://github.com/manheim/tfwrapper) - 提供 Rake 工作、以合理方式執行 HashiCorp Terraform 的 RubyGem。
- [tfmcp](https://github.com/nwiizo/tfmcp) - 透過 Model Context Protocol (MCP) 與 Terraform 互動的 CLI 工具，可讓 Claude 等 AI 助理管理及操作 Terraform 環境。
- [tgf](https://github.com/coveooss/tgf) - 透過 Docker 執行 Terragrunt／Terraform 的 Terragrunt 前端。
- [threatcl](https://github.com/threatcl/threatcl) - 使用 HCL 記錄威脅模型
- [tofuenv](https://github.com/tofuutils/tofuenv) - 受 tfenv 啟發的 OpenTofu 版本管理工具
- [tpm](https://github.com/Madh93/tpm) - Terraform Providers 套件管理工具。
- [travelgrunt](https://github.com/ivanilves/travelgrunt) - 輕鬆切換至 [Mono]Repository 目錄！
- [trupositive](https://github.com/trupositive-ai/trupositive) - 零設定 Wrapper，可自動將 Git 中繼資料（Commit SHA、分支、Repository）注入所有 Terraform 管理的資源。
- [validIaC](https://github.com/gofireflyio/validiac) - ValidIaC 整合優秀的開放原始碼工具，協助確保 Terraform 最佳做法、整潔度與安全性。
- [xterrafile](https://github.com/devopsmakers/xterrafile) - 以有系統的方式管理來自 Module Registry、Git 或本機目錄、供 Terraform 使用的外部模組（以 Go 撰寫）。 :skull:
- [yj](https://github.com/sclevine/yj) - CLI — 在 YAML、TOML、JSON 與 HCL 之間互相轉換，並保留 Map 順序。
- [yor](https://github.com/bridgecrewio/yor) - 自動為基礎架構即程式碼架構（Terraform、CloudFormation 與 Serverless）加上標籤並追蹤。
- [zephy](https://github.com/henrybravo/zephy) - 比較訂用帳戶中已部署的 Azure 資源與 Terraform Enterprise（HCP 與自架）工作區管理的資源，*適用於雲端資源標籤策略不足時*。

### CI

- [opentofu-updater-action](https://github.com/drumandbytes/opentofu-updater-action) - GitHub Action，會透過建立 Pull Request，讓 OpenTofu／Terraform Providers、模組、Helm Charts 與容器映像保持在最新版本。
- [setup-terraform](https://github.com/hashicorp/setup-terraform) - 在 GitHub Actions 工作流程中設定 Terraform CLI。
- [terraform-plan](https://github.com/cds-snc/terraform-plan) - 執行 Terraform plan 並留言列出變更的 GitHub Action。
- [terraform-risk-assessor](https://github.com/Liam-Johnston/terraform-risk-assessor) - 使用 AI 分析 Terraform 計畫變更，並在 Pull Request 留下風險評估的 GitHub Action。

### VS Code 擴充功能

- [HashiCorp Terraform](https://marketplace.visualstudio.com/items?itemName=hashicorp.terraform)
- [vscode-terraform-live-graph](https://github.com/adamiBs/vscode-terraform-live-graph) - Terraform Live Graph Extension for Visual Studio Code 是一款外掛，可在撰寫程式碼時即時產生 Terraform 圖表。
- [tf-nav](https://marketplace.visualstudio.com/items?itemName=owenrumney.tf-nav) - Terraform 導覽擴充功能，可依檔案類型建立資源索引，並以易於瀏覽的樹狀檢視呈現。

## 函式庫

- [hcl-rs](https://github.com/martinohmann/hcl-rs) - 支援 serde 的 Rust HCL 剖析與編碼函式庫
- [hcl4j](https://github.com/wondrify/hcl4j) - Java HCL Parser
- [nu_plugin_hcl](https://github.com/Yethal/nu_plugin_hcl) - [Nushell](https://github.com/nushell/nushell) 的 HCL Parser 外掛
- [pyhcl](https://github.com/virtuald/pyhcl) - Python HCL Parser
- [python-hcl2](https://github.com/amplify-education/python-hcl2/) - Python HCL2 Parser
- [rhcl](https://github.com/winebarrel/rhcl) - 純 Ruby HCL Parser :skull:
- [tree-sitter-hcl](https://github.com/tree-sitter-grammars/tree-sitter-hcl) - tree-sitter 的 HCL 文法

## 樣板

- [Solo-Engineer Stack](https://github.com/sarmakska/terraform-stack) - 單一 Terraform Repository，串接 Vercel、Supabase、Cloudflare 與 DigitalOcean，打造獨立 SaaS 平台。執行一次 `terraform apply` 即可佈建 Next.js 專案、將環境變數傳送至 Vercel 的 Supabase 專案、含 R2 與 Workers KV 的 Cloudflare Zone，以及附帶監控功能的 DigitalOcean Droplet。
- [Terraform Generator](https://github.com/sudokar/generator-tf-module) - 建立新 Terraform 模組或專案的樣板產生工具，支援測試架構（terratest 與 kitchen-terraform）
- [Terraform GitOps Framework](https://www.kubestack.com) - 在單一免費開放原始碼架構中，提供建置 AKS、EKS 與 GKE Kubernetes 叢集可靠自動化所需的一切。

## 自架 Terraform 平台

- [Snap CD](https://github.com/schrieksoft/snapcd) - 功能完整的持續部署平台，支援使用隔離 Runner、具相依性意識的自動化及細緻存取控制進行模組化部署。
- [Lynx](https://github.com/clivern/lynx) - 快速、安全且可靠的 Terraform Backend。提供易用的儀表板、專案與環境管理、狀態版本控制、鎖定及快照支援。
- [OTF](https://github.com/leg100/otf) - Open Terraforming Framework，是 Terraform Enterprise 的開放原始碼替代方案，並完整整合 Terraform CLI。
- [Terrakube](https://docs.terrakube.io) - Terraform Enterprise 的開放原始碼替代方案，提供私有 Registry、遠端狀態、自訂流程、排程工作區及狀態視覺化。
- [Digger](https://digger.dev) - Terraform Cloud 的開放原始碼替代方案 — 在 CI 中執行 Terraform plan 與 apply 工作。
- [cloud-concierge](https://github.com/dragondrop-cloud/cloud-concierge) - 開放原始碼工具，可將未受管理的資源轉為 Terraform 程式碼、偵測漂移並分析雲端成本與安全性，結果以 Pull Request 提交。
- [Stack-Lifecycle-Deployment](https://github.com/D10S0VSkY-OSS/Stack-Lifecycle-Deployment) - 開放原始碼解決方案，可定義及管理雲端中使用與佈建資源的完整生命週期。
- [Burrito](https://github.com/padok-team/burrito) - TACoS Kubernetes Operator —「Terraform 版 ArgoCD」
- [Terrateam](https://terrateam.io) - Terraform Cloud／Enterprise 的開放原始碼替代方案，以 GitOps 為優先，原生整合 GitHub，並以擴充性、安全性及可靠性為設計核心。


## 代管 Terraform 平台 :heavy_dollar_sign:

- [compliance.tf](https://compliance.tf) - 內建 SOC 2、PCI DSS、HIPAA、NIST 800-53 及其他 35 種以上框架的 Terraform 模組。不合規的設定會在任何變更套用前，於 `terraform plan` 階段失敗。 :heavy_dollar_sign:
- [ControlMonkey](https://www.controlmonkey.io/) - Terraform Cloud 的替代方案，提供 Terraform／OpenTofu 程式碼產生、雲端資產盤點及 IaC 涵蓋範圍分析。內建政策、漂移修復及 ClickOps 活動掃描器。 :heavy_dollar_sign:
- [Firefly](https://www.firefly.ai/) - 運用您的 CI 工具作為 Terraform Cloud 的替代方案。Firefly 平台也會掃描雲端，評估 IaC 涵蓋範圍並偵測漂移。 :heavy_dollar_sign:
- [Scalr](https://www.scalr.com/) - Terraform Enterprise 的替代方案，整合 OPA、組織架構、自訂 Hooks、其他 DevOps 平台的原生整合及集中式報告。 :heavy_dollar_sign:
- [Stategraph](https://stategraph.com) - 使用 Terraform 與 OpenTofu，不再受狀態檔瓶頸限制。以真正的資料庫取代扁平狀態檔，讓團隊平行執行計畫、透過 SQL 查詢狀態，並將計畫執行時間從數分鐘縮短至數秒。 :heavy_dollar_sign:
- [env0](https://www.env0.com/) - Terraform Cloud／Enterprise 的替代方案，整合 OPA、自訂流程並支援 Terragrunt。 :heavy_dollar_sign:
- [Brainboard](https://www.brainboard.co) - 從任意 Cloud Provider（AWS、GCP、Azure）開始，以視覺化方式設計、部署及管理現代雲端基礎架構。 :heavy_dollar_sign:
- [Spacelift](https://spacelift.io/) - Terraform Cloud／Enterprise 的替代方案。Terraform 協作式基礎架構交付平台。 :heavy_dollar_sign:
- [StackGuardian](https://stackguardian.io/) - 基礎架構程式碼化與協調平台，可將現有雲端資源轉換為 IaC，提供由 Tirith、OPA 與 Checkov 驅動的政策工作流程，並支援私有 Runtime 與免程式碼範本。 :heavy_dollar_sign:

## Terraform Enterprise 工具

- [terraform-enterprise-cli](https://github.com/skierkowski/terraform-enterprise-cli) - Terraform Enterprise 命令列介面。
- [terraform-enterprise-client](https://github.com/skierkowski/terraform-enterprise-client) - Terraform Enterprise API Ruby Client 與命令列工具。
- [terraform-enterprise-migrator](https://github.com/sil-org/tfc-ops) - 將 Terraform Enterprise 環境從舊版遷移至新版的指令碼。

## 影片

- [Your Weekly Dose of Terraform](https://www.youtube.com/channel/UCGH0yYPvlCN1VjSFMGVmFgQ) - 每週直播的 YouTube 頻道，內容涵蓋 Terraform 新聞、評論、訪談、問答、即時程式設計及 Terraform 實作探索。
- [Terraform explained in 15 mins](https://www.youtube.com/watch?v=l5k1ai_GBDE) - 用 15 分鐘說明 Terraform。
- [Terraform Course](https://www.youtube.com/watch?v=SLB_c_ayRMo) - 自動化 AWS 雲端基礎架構。
- [How to Build Reusable, Composable, Battle tested Terraform Modules](https://www.youtube.com/watch?v=LVgP63BkhKQ) - Yevgeniy Brikman 分享如何撰寫可重複使用、可組合且可測試的 Terraform 程式碼。簡報著重於 Terraform 模組，也簡短清楚地說明 Terraform 要解決的問題，並簡介 Terraform 基礎知識（約 39 分鐘，2017 年 10 月）。
- [Building Scalable, Repeatable Infrastructure in the Cloud with Terraform](https://www.youtube.com/watch?v=cG7pcksTAnY) - 示範如何使用託管的 PostgreSQL 在 AWS 部署 TeamCity，藉此說明 Terraform 如何實現基礎架構即程式碼。
- [Creating a Google Compute Instance with Terraform](https://www.youtube.com/watch?v=fo3VX33Zx0c) - 使用 Terraform 程式碼建立 Google Compute Instance 的範例。
- [Creating a Terraform Provider for Just About Anything](https://www.hashicorp.com/resources/creating-terraform-provider-for-anything) - 透過本教學了解如何貢獻 Terraform Provider 或建立自己的 Provider。
- [Evolving Your Infrastructure with Terraform](https://www.youtube.com/watch?v=wgzgVm7Sqlk) - OpenCredo 的 CTO 透過有趣的案例，深入介紹 Terraform 在實際環境中的使用方式。
- [Going Multi-Cloud with Terraform and Nomad](https://www.youtube.com/watch?v=e42A4aBZUkQ).
- [How to Extend the Terraform Provider List](https://www.youtube.com/watch?v=2BvpqmFpchI) - Paul 將在這場演講中逐步說明如何建立 Terraform Provider。
- [Orchestrating Containers with Terraform and Consul](https://www.infoq.com/presentations/terraform-consul/) - Mitchell Hashimoto 示範如何使用 Terraform 部署及擴充容器化工作負載。
- [Production ChaosMonkey with Terraform](https://www.youtube.com/watch?v=CPI6W3LK0-g) - DigitalOcean 如何使用 Terraform 執行正式環境整合測試。
- [Running a Terraform Environment at Scale](https://www.youtube.com/watch?v=3JVGSq7QIS0) - 在數百個 AWS 帳戶的大規模環境中執行 Terraform。
- [Setup Continuous Integration for a Terraform module](https://www.youtube.com/watch?v=vuJ6bjYKUcA) - 使用 CI 與 Kitchen-Terraform 測試、標記及發佈 Terraform 模組的範例；該模組會建立 Google Compute Instance。
- [State of Terraform Providerland](https://www.youtube.com/watch?v=ar1PF5iDtbg) - Terraform Providers 的運作方式及撰寫方法。
- [Terraform At Scale](https://www.youtube.com/watch?v=RldRDryLiXs) - Segment 如何使用 Terraform。
- [Terraform w/ Lee Trout](https://www.youtube.com/watch?v=p2ESyuqPw1A) - 著重於開發模式及如何有效組織 Terraform 程式碼。
- [Terraforming the Composable World](https://www.youtube.com/watch?v=cHrOXPatFeg) - 將 Terraform 整合至地端裸機佈建作業。
- [Test and verify a Google Compute Instance with Kitchen-Terraform](https://www.youtube.com/watch?v=kiH3-LEveek) - 使用 Kitchen-Terraform 測試建立 Google Compute 的 Terraform 程式碼範例。
- [Untangling Terraform Through Refactoring](https://www.youtube.com/watch?v=OH6iDKaXpZs) - 如何謹慎地重構 Terraform 程式碼，將風險降至最低。
- [Complete Terraform Course - From BEGINNER to PRO! (Learn Infrastructure as Code)](https://www.youtube.com/watch?v=7xngnjfIlK4) - 從初學者到專家的完整課程，不特別聚焦於任何 Cloud Provider，採通用方式介紹

## 編輯器外掛

- [Emacs terraform-mode](https://github.com/hcl-emacs/terraform-mode)
- [Intellij](https://plugins.jetbrains.com/plugin/7808-terraform-and-hcl)
- [Terraform-ls](https://github.com/hashicorp/terraform-ls) (Terraform Language Server)
- [Terraform-lsp](https://github.com/juliosueiras/terraform-lsp)（Terraform 的語言伺服器通訊協定）
- [vim-hcl](https://github.com/jvirtanen/vim-hcl) - HCL 語法醒目提示
- [Vim-Terraform-Completion](https://github.com/juliosueiras/vim-terraform-completion)
- [Vim-Terraform](https://github.com/hashivim/vim-terraform)

## 授權

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

在法律允許的最大範圍內，Shuaib Yunus 已放棄本作品的所有著作權及相關或鄰接權利。
