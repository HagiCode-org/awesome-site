# Awesome Terraform [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) <!-- omit in toc -->

[![Link Checker](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml)
[![Misspell Check](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml)

> 精选的 [HashiCorp Terraform](https://www.terraform.io/) 资源列表。
> [<img src="https://raw.githubusercontent.com/shuaibiyy/awesome-terraform/master/terraform.svg" align="right" width="100">](https://terraform.io)
> 欢迎提交[贡献](https://github.com/shuaibiyy/awesome-tf/blob/master/contributing.md)！

Terraform 可帮助你安全、可预测地创建、变更和改进生产基础设施。它是一款开源工具，可将 API 编写为声明式配置文件，供团队成员共享，并像代码一样管理、编辑、审查和版本控制。

## 目录 <!-- omit in toc -->

- [图例](#legend)
- [官方资源](#official-resources)
- [社区](#community)
- [书籍](#books)
- [学习与研习](#learning-and-studying)
- [应用](#apps)
- [教程与博客文章](#tutorials-and-blog-posts)
  - [入门指南](#beginner-guides)
  - [编写自定义 Providers](#writing-custom-providers)
  - [操作指南](#how-to)
  - [多环境配置](#multi-environment-configuration)
  - [Azure](#azure)
  - [AWS](#aws)
  - [Google Cloud](#google-cloud)
  - [其他](#miscellaneous)
- [社区模块](#community-modules)
- [自托管注册表](#self-hosted-registries)
- [托管注册表](#managed-registries)
- [Providers](#providers)
  - [HashiCorp 支持的 Providers](#hashicorp-supported-providers)
  - [供应商支持的 Providers](#vendor-supported-providers)
  - [社区 Providers](#community-providers)
- [测试](#testing)
- [工具](#tools)
  - [CI](#ci)
  - [VS Code 扩展](#vs-code-extensions)
- [库](#libraries)
- [项目模板](#boilerplates)
- [自托管 Terraform 平台](#self-hosted-terraform-platforms)
- [托管 Terraform 平台 :heavy\_dollar\_sign:](#managed-terraform-platforms-heavy_dollar_sign)
- [Terraform Enterprise 工具](#terraform-enterprise-tooling)
- [视频](#videos)
- [编辑器插件](#editor-plugins)
- [许可证](#license)

## 图例

- 不兼容 _terraform >= 0.12_ :ghost:
- 已停止维护 :skull:
- 付费 :heavy_dollar_sign:

## 官方资源

- [Hashicorp Terraform Blog](https://www.hashicorp.com/en/blog/products/terraform)
- [Introduction to Terraform](https://developer.hashicorp.com/terraform/intro)
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform learn](https://developer.hashicorp.com/terraform/tutorials)

## 社区

- [weekly.tf - Terraform Weekly Newsletter](https://www.weekly.tf/) - 每周发布的新闻通讯，涵盖 Terraform 新闻、开源项目、公告和讨论。
- [Terraform 完整文档 PDF 版（每晚更新）](https://github.com/antonbabenko/terraform-docs-as-pdf) :skull:
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
- [The Claude Agent Skill for Terraform and OpenTofu - testing, modules, CI/CD, and production patterns](https://github.com/antonbabenko/terraform-skill) - 用于 Terraform 和 OpenTofu 的 Claude Code 技能，涵盖测试、模块设计、CI/CD 工作流和生产环境实践。
- [awesome-terraform-compliance](https://github.com/antonbabenko/awesome-terraform-compliance) - Terraform 合规与安全工具、框架及资源精选列表。
- 特定语言社区：
  - [Telegram（乌克兰语社区）](https://t.me/terraform_ukraine)

## 书籍

- [Big Little Book On Terraform](https://www.amazon.com/Big-Little-Book-Terraform-Omos-ebook/dp/B07PWYPNX8/)
- [Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Second Edition](https://www.manning.com/books/bootstrapping-microservices-second-edition)
- [Deep-Dive Terraform on Azure](https://link.springer.com/book/10.1007/978-1-4842-7328-9)
- [Getting Started with Terraform, 2nd ed.](https://www.amazon.com/Getting-Started-Terraform-production-infrastructure/dp/1788623533/)
- [HashiCorp Infrastructure Automation Certification Guide](https://www.amazon.com/HashiCorp-Infrastructure-Automation-Certification-Guide-ebook/dp/B092KM7LXC/)
- [IaC starting with Terraform (Korean)](https://product.kyobobook.co.kr/detail/S000202478097)
- [Infrastructure as Code](https://www.oreilly.com/library/view/infrastructure-as-code/9781491924334/)
- [Patterns and Practices for Infrastructure as Code: With examples in Python and Terraform](https://www.manning.com/books/infrastructure-as-code-patterns-and-practices)
- [Terraform Best Practices](https://www.terraform-best-practices.com/) - [开源电子书](https://github.com/antonbabenko/terraform-best-practices)
- [Terraform Cookbook](https://www.amazon.com/Terraform-Cookbook-Efficiently-Infrastructure-platforms/dp/1800207557)
- [Terraform for Ops e-book](https://www.terraformforops.com)
- [Terraform in Action](https://www.manning.com/books/terraform-in-action)
- [Terraform in Depth](https://www.manning.com/books/terraform-in-depth)
- [Terraform: Up & Running, 3rd ed.](https://www.terraformupandrunning.com/)
- [The Terraform Book](https://terraformbook.com/)

## 学习与研习

- [Terraform Academy](https://www.terraformacademy.app) - 交互式 Terraform / IaC 学习平台，提供动手实验、认证备考（HashiCorp、AWS、GCP、Azure、Docker、Kubernetes、GitOps）、AI 辅导和进度跟踪。另请参阅 [SRE Pro Tips 博客](https://www.terraformacademy.app/protips/?cat=sre-pro-tips) 及下方的移动端/PWA 应用。
- [Terraform Terminal Simulator](https://devops-daily.com/games/terraform-terminal-simulator) - 在浏览器模拟终端中练习 init、plan 和 apply。免费开源，无需注册。
- [compliance.tf docs](https://compliance.tf/docs/) - 免费的 Terraform 合规实现，涵盖 SOC 2、PCI DSS、HIPAA、NIST 800-53 及另外 35 多种合规控制项——可作为编写合规基础设施代码的开放参考。
- [DevOpsLesson Terraform Playground](https://devopslesson.com/playground/terraform) - 免费的浏览器版 Terraform 模拟器，提供循序渐进的 HCL 练习和命令实践。

## 应用

移动端、桌面端和 PWA 应用，让你随时随地学习和使用 Terraform。

- [Terraform Academy — iOS](https://apps.apple.com/us/app/terraform-academy/id6745738634) - Terraform Academy 交互式学习平台的原生 iOS 应用，提供动手实验、认证备考（HashiCorp、AWS、GCP、Azure、Docker、Kubernetes、GitOps）、AI 辅导，以及跨设备进度同步。
- [Terraform Academy — Android](https://play.google.com/store/apps/details?id=com.terraformacade1.app) - Terraform Academy 学习平台的原生 Android 应用，提供与 iOS 和 Web 版本相同的实验、认证备考和 AI 辅导。
- [Terraform Academy — PWA / Web App](https://www.terraformacademy.app/) - Terraform Academy 的可安装渐进式 Web 应用版本。支持离线使用，可在任意平台安装到主屏幕，并与移动应用同步进度。

## 教程与博客文章

### 入门指南

- [A Comprehensive Guide to Terraform](https://www.gruntwork.io/blog/a-comprehensive-guide-to-terraform) - Terraform: Up & Running 一书作者撰写的系列博客文章，引导读者从 Terraform 入门到在真实场景中使用。
- [Using Terraform for Cloud Deployments - Part 1](https://dev.to/koenighotze/using-terraform-for-cloud-deployments---part-1) - 配置 EC2 实例。
- [Hello, world: The Fargate/Terraform tutorial I wish I had](https://section411.com/2019/07/hello-world/) - 介绍如何从零开始搭建 ECS Fargate 集群的博客文章。
- [Terraform Security Guide](https://sysdig.com/blog/terraform-security-best-practices/) - 介绍使用 Terraform 时安全最佳实践的博客文章。
- [Building a SaaS API? Don't Forget Your Terraform Provider](https://www.speakeasy.com/blog/build-terraform-providers) - 说明为什么应该编写 Terraform Provider。
- [Complete Terraform Course in French (Free)](https://blog.stephane-robert.info/docs/infra-as-code/provisionnement/terraform/) - 免费且全面的法语课程，通过实践示例和最佳实践，带你从入门到进阶掌握 Terraform。
- [Introduction to Terraform](https://devopslesson.com/tutorials/terraform/introduction-to-terraform) - 面向初学者的 Terraform 基础指南，涵盖 Providers、资源、状态，以及通过实践示例完成首次 apply。

### 编写自定义 Providers

- [Creating custom terraform providers](https://blog.pelo.tech/creating-custom-terraform-providers-341311823fa2) - 创建自定义 Providers 的指南。
- [Writing a Terraform provider](https://web.archive.org/web/20220516140659/http://blog.jfabre.net/2017/01/22/writing-terraform-provider/) - 创建自定义 Providers 的指南。
- [Writing Custom Providers](https://developer.hashicorp.com/terraform/plugin/sdkv2) - 创建自定义 Providers 的官方文档。
- [Terraform Provider Code generation](https://www.speakeasy.com/docs/terraform/create-terraform) - 根据 OpenAPI 规范生成 Terraform Provider 的指南（供应商支持）。

### 操作指南

- [How To Write OPA for Terraform](https://scalr.com/learning-center/opa-series-part-1-open-policy-agent-and-terraform) - 如何使用 Open Policy Agent 评估并强制执行 Terraform plan 中的策略。
- [Deploying Discourse with Terraform](https://www.hashicorp.com/en/blog/deploying-discourse-with-terraform) - 展示如何通过一条命令使用 Terraform 在 DigitalOcean 上创建可运行的 Discourse 实例。
- [Deploying Django to AWS ECS with Terraform](https://testdriven.io/blog/deploying-django-to-ecs-with-terraform/) - 介绍如何使用 Terraform 配置在 ECS 上运行 Django 应用所需的 AWS 基础设施。
- [Easily Deploy A Seneca Microservice to ECS with Wercker and Terraform: Part I](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-i/), [II](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-ii/) & [III](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-iii/) - 说明如何将 Terraform 纳入微服务部署流水线。
- [Terraform for a Highly Available VPN between AWS and Azure](https://web.archive.org/web/20210616132857/https://deployeveryday.com/2020/04/13/vpn-aws-azure-terraform.html) - 使用 Terraform 在 AWS 和 Azure 之间部署高可用 VPN 的代码。
- [Terraforming 1Password](https://1password.com/blog/terraforming-1password) - 介绍 1Password 如何从 CloudFormation 迁移到 Terraform。
- [Tutorial: How to Use Terraform to Deploy OpenStack Workloads](https://web.archive.org/web/20170611135511/http://www.stratoscale.com/blog/openstack/tutorial-how-to-use-terraform-to-deploy-openstack-workloads/) - 展示如何轻松使用 OpenStack Terraform Provider 部署 Web 服务器。
- [Zero Downtime Updates with HashiCorp Terraform](https://www.hashicorp.com/en/blog/zero-downtime-updates-with-terraform) - 确保基础设施更新期间实现零停机。
- [Google Cloud Platform for 10$ a month using terraform](https://github.com/nufailtd/terraform-budget-gcp) - 展示如何使用 Terraform 创建安全的 Google Kubernetes 集群、Google Cloud Run 服务及其他基础设施，每月费用低于 [10 美元](https://nufailtd.github.io/budget-gcp/)。
- [Infracost + Terraform + GitHub Actions = Automate Cloud Cost Management](https://medium.com/better-programming/infracost-terraform-github-actions-automate-cloud-cost-management-a62b329f2834) - 介绍如何在 Terraform 开发期间使用 Infracost 作为云成本管理的防护措施。
- [How To Wrap Your Terraform Provider for Pulumi](https://www.speakeasy.com/blog/pulumi-terraform-provider) - 让你的 Terraform Provider 能够用于 Pulumi。
- [How to Build an AWS Account Vending Machine](https://medium.com/@StackGuardian/how-to-build-an-aws-account-vending-machine-by-stackguardian-f2895e35a27b) - 使用 Terraform stacks 编排 AWS 账户生命周期自动化自助管理，包含基于 SSM 的分配、EventBridge 清理触发器和 Tirith 策略强制执行。

### 多环境配置

- [Terraform Design Patterns: the Terrafile](https://bensnape.com/2016/01/14/terraform-design-patterns-the-terrafile/) - 使用 Terrafile 在 Terraform 项目中管理 Terraform 模块及其版本。
- [Terraform, VPC, and why you want a tfstate file per env](https://charity.wtf/2016/03/30/terraform-vpc-and-why-you-want-a-tfstate-file-per-env/) - 介绍大型多环境项目中使用 Terraform 时的一些常见陷阱，以及如何避免。
- [Using Pipelines to Manage Environments with Infrastructure as Code](https://medium.com/@kief/https-medium-com-kief-using-pipelines-to-manage-environments-with-infrastructure-as-code-b37285a1cbf5) - 讲解构建流水线的不同方法，以处理基础设施即代码变更在各环境之间的逐步推进。

### Azure

- [Learning HashiCorp Terraform](https://web.archive.org/web/20201108000713/https://www.g10s.io/hashicorp-terraform/) - Azure 指南。
- [New Terraform Azure Automation Resources](https://bgelens.nl/terraform-automation-resources/) - Azure Automation。
- [Terraforming Azure PaaS](https://devkimchi.com/2019/01/21/terraforming-azure-paas/) - 在 Azure 上部署 PaaS 资源。
- [azure-az104](https://github.com/victorlane/azure-az104) - AZ-104 Azure 管理员学习笔记和 Terraform 实践示例，包括 Landing Zone 参考架构。

### AWS

- [AWS Lambda the Terraform Way](https://github.com/nsriram/lambda-the-terraform-way) - 借助 Terraform 深入了解 AWS Lambda，而不仅仅是执行函数。还包含与 S3、API Gateway、DynamoDB、Kinesis、SQS 集成的指南。
- [Managing AWS Lambda Functions with Terraform](https://spacelift.io/blog/terraform-aws-lambda) - 介绍 AWS Lambda 的用途，以及如何使用 Terraform 管理 AWS Lambda 函数。

### Google Cloud

- [Managing infrastructure as code with Terraform, Cloud Build, and GitOps](https://docs.cloud.google.com/docs/terraform/resource-management/managing-infrastructure-as-code) - 使用 Terraform、Cloud Build 和 GitOps 设置并管理基础设施即代码。
- [Getting started with Terraform on Google Cloud](https://docs.cloud.google.com/docs/terraform/create-vm-instance) - 使用 Terraform 在 Google Cloud 创建 VM 并启动基础 Python Flask 服务器。
- [Managing Cloud Infrastructure with Terraform](https://www.skills.google/course_templates/746) - 使用 Terraform 部署 Kubernetes Load Balancer Service、HTTPS Content-Based Load Balancer、模块化负载均衡（区域负载均衡器）、自定义 Providers、Cloud SQL，以及在 Google Cloud 和 AWS 之间构建 VPN。
- [Hashicorp Terraform Tutorials for Google Cloud](https://developer.hashicorp.com/terraform/tutorials/gcp-get-started) - 开始在 Google Cloud 上使用 Terraform。
- [IAC - Terraform and Terragrunt on Google Cloud](https://www.academeez.com/courses/terraform) - 采用 MIT 许可证的开源课程，介绍如何使用 Terraform/OpenTofu 和 Terragrunt 在 Google Cloud 上创建基础设施。
- [Self-host n8n on Google Cloud Run](https://github.com/datawranglerai/self-host-n8n-on-gcr) - 用于在 Cloud Run 上部署 n8n 工作流自动化的 Terraform 配置和指南，包含 Cloud SQL、Secret Manager，以及可选的 Redis 队列模式。

### 其他

- [Sharing data between Terraform configurations](https://web.archive.org/web/20230927082422/https://jamesmckay.net/2016/09/sharing-data-between-terraform-configurations/) - 展示如何使用远程状态在 Terraform 配置之间共享数据。
- [The Segment AWS Stack](https://web.archive.org/web/20250322120753/https://segment.com/blog/the-segment-aws-stack/) - 揭示由 Terraform 驱动的基础设施幕后运作方式，该基础设施解决了 [百万美元工程难题](https://segment.com/blog/the-million-dollar-eng-problem/)（位于 [Segment](https://segment.com/)）。
- [Top 3 Terraform Testing Strategies for Ultra-Reliable Infrastructure-as-Code](https://www.contino.io/insights/top-3-terraform-testing-strategies-for-ultra-reliable-infrastructure-as-code)
- [Two Weeks with Terraform](https://charity.wtf/2016/02/23/two-weeks-with-terraform/) - 分享在真实环境中使用 Terraform 得来的经验教训和运维心得。
- [Terraform: Beyond the Basics with AWS](https://aws.amazon.com/blogs/apn/terraform-beyond-the-basics-with-aws/) - 讲解一个使用 Terraform 配置示例 AWS 架构的演示。
- [Terraform cost estimation](https://github.com/antonbabenko/terraform-cost-estimation) - 从 Terraform plan（0.12+）或状态文件进行匿名免费成本估算。也可在浏览器中通过 [terraform-cost-estimation.com](https://terraform-cost-estimation.com) 使用。
- [How to Debug Terraform Projects: Tutorial](https://spacelift.io/blog/terraform-debug)
- [The terraform-docs GitHub Action: A Complete CI Setup Guide](https://devtoolhub.com/terraform-docs-github-action/) - 介绍如何借助 terraform-docs 在每个 PR 中生成并自动提交模块文档，包含容易导致 CI 失败的 OIDC/权限陷阱。

## 社区模块

如需查看更多此处未列出的社区模块，请参阅 [Terraform Module Registry](https://registry.terraform.io/)。

- [nis2shield/infrastructure](https://github.com/nis2shield/infrastructure) - 用于自动化 NIS2 合规和安全基础设施部署的 Terraform 模块。
- [rancher-terraform-digitalocean](https://github.com/lunagt/rancher-terraform-digitalocean) - 在 DigitalOcean 上运行 Rancher 服务器。
- [segmentio/stack](https://github.com/segmentio/stack) - 使用 AWS、Docker 和 ECS 配置生产基础设施。
- [terraform-aws-account-lookup](https://github.com/be-bold/terraform-aws-account-lookup) - 此 Terraform 模块可查询 AWS 账户，并以多种映射或完整列表形式输出账户；支持筛选账户列表，并通过子模块按现有标签对账户分组。
- [terraform-aws-alb](https://github.com/terraform-aws-modules/terraform-aws-alb) - 在 AWS 上创建 Application Load Balancer（已验证模块）。
- [terraform-aws-appconfig](https://github.com/terraform-aws-modules/terraform-aws-appconfig) - 在 AWS 上创建 AWS AppConfig 资源。
- [terraform-aws-atlantis](https://github.com/terraform-aws-modules/terraform-aws-atlantis) - 创建 Terraform 配置，以便在 AWS Fargate 上运行 [Atlantis](https://runatlantis.io)。支持 Github、Gitlab 和 BitBucket。
- [terraform-aws-autoscaling](https://github.com/terraform-aws-modules/terraform-aws-autoscaling) - 创建 Auto-Scaling Groups 和 Launch Configurations（已验证模块）。
- [terraform-aws-customer-gateway](https://github.com/terraform-aws-modules/terraform-aws-customer-gateway) - 在 AWS 上创建 Customer Gateway。
- [terraform-aws-datadog-forwarders](https://github.com/terraform-aws-modules/terraform-aws-datadog-forwarders) - 在 AWS 上创建资源，将日志/指标转发到 Datadog。
- [terraform-aws-dms](https://github.com/terraform-aws-modules/terraform-aws-dms) - 在 AWS 上创建 AWS DMS（Database Migration Service）资源。
- [terraform-aws-dynamodb-table](https://github.com/terraform-aws-modules/terraform-aws-dynamodb-table) - 在 AWS 上创建 DynamoDB 表。
- [terraform-aws-ec2-instance](https://github.com/terraform-aws-modules/terraform-aws-ec2-instance) - 在 AWS 上创建 EC2 实例。
- [terraform-aws-ecr](https://github.com/cloudposse/terraform-aws-ecr) - 管理 AWS ECR 上的 Docker 容器注册表。
- [terraform-aws-ecs](https://github.com/terraform-aws-modules/terraform-aws-ecs) - 在 AWS 上创建 AWS ECS 资源。
- [terraform-aws-efs](https://github.com/cloudposse/terraform-aws-efs) - 定义 EFS 文件系统。
- [terraform-aws-eks](https://github.com/terraform-aws-modules/terraform-aws-eks) - 在 AWS 上创建 Elastic Kubernetes Service（非常受欢迎的模块）。
- [terraform-aws-elb](https://github.com/terraform-aws-modules/terraform-aws-elb) - 在 AWS 上创建 Elastic Load Balancer（已验证模块）。
- [terraform-aws-eventbridge](https://github.com/terraform-aws-modules/terraform-aws-eventbridge) - 在 AWS 上创建 EventBridge 资源。
- [terraform-aws-jenkins-ha-agents](https://github.com/neiman-marcus/terraform-aws-jenkins-ha-agents) - 基于 EC2 的 Jenkins 部署，带高可用（Spot）代理。运行于 EFS 以实现不可变性，并提供丰富的自定义选项和合理默认值。
- [terraform-aws-jenkins](https://github.com/cloudposse-archives/terraform-aws-jenkins) - 构建包含 Jenkins 的 Docker 镜像，将其保存到 ECR 仓库，并部署到运行 Docker stack 的 Elastic Beanstalk。
- [terraform-aws-key-pair](https://github.com/cloudposse/terraform-aws-key-pair) - 自动生成 SSH 密钥对（公钥/私钥）。
- [terraform-aws-lambda-auto-package](https://github.com/nozaq/terraform-aws-lambda-auto-package) - 用于定义 Lambda 函数的 Terraform 模块，可自动构建源文件并打包以部署到 Lambda。
- [terraform-aws-lambda](https://github.com/terraform-aws-modules/terraform-aws-lambda) - Terraform 模块，可构建依赖项并打包，同时以多种组合创建 AWS Lambda 资源。
- [terraform-aws-managed-service-prometheus](https://github.com/terraform-aws-modules/terraform-aws-managed-service-prometheus) - 在 AWS 上创建 AWS Managed Service for Prometheus（AMP）资源。
- [terraform-aws-modules](https://github.com/terraform-aws-modules) - 由社区维护的 Terraform AWS 模块集合（包括 AWS 官方模块）。
- [terraform-aws-msk-kafka-cluster](https://github.com/terraform-aws-modules/terraform-aws-msk-kafka-cluster) - 在 AWS 上创建 AWS MSK（Managed Streaming for Kafka）资源。
- [terraform-aws-notify-slack](https://github.com/terraform-aws-modules/terraform-aws-notify-slack) - 创建 SNS topic 和 Lambda 函数，用于向 Slack 发送通知。
- [terraform-aws-postgresql-rds](https://github.com/azavea/terraform-aws-postgresql-rds) - 在 RDS 上创建 PostgreSQL。
- [terraform-aws-rds-aurora](https://github.com/terraform-aws-modules/terraform-aws-rds-aurora) - 在 AWS 上创建 RDS Aurora 集群资源（已验证模块）。
- [terraform-aws-rds-proxy](https://github.com/terraform-aws-modules/terraform-aws-rds-proxy) - 在 AWS 上创建 AWS RDS Proxy 资源。
- [terraform-aws-rds](https://github.com/terraform-aws-modules/terraform-aws-rds) - 在 AWS 上创建 RDS 资源（已验证模块）。
- [terraform-aws-redshift](https://github.com/terraform-aws-modules/terraform-aws-redshift) - 在 AWS 上创建 Redshift 资源。
- [terraform-aws-route53](https://github.com/terraform-aws-modules/terraform-aws-route53) - 在 AWS 上创建 Route53 资源。
- [terraform-aws-s3-bucket](https://github.com/terraform-aws-modules/terraform-aws-s3-bucket) - 在 AWS 上创建 S3 bucket 资源。
- [terraform-aws-secure-baseline](https://github.com/nozaq/terraform-aws-secure-baseline) - 根据 CIS Amazon Web Services Foundations 安全基线配置设置 AWS 账户。
- [terraform-aws-security-group](https://github.com/terraform-aws-modules/terraform-aws-security-group) - 在 AWS 上创建 EC2-VPC 安全组（已验证模块）。
- [terraform-aws-ssh-bastion-service](https://github.com/joshuamkite/terraform-aws-ssh-bastion-service) - Terraform 方案：在 AWS 上将 SSH 堡垒机部署为无状态服务。
- [terraform-aws-transit-gateway](https://github.com/terraform-aws-modules/terraform-aws-transit-gateway) - 在 AWS 上创建 Transit Gateway 资源。
- [terraform-aws-vpc](https://github.com/terraform-aws-modules/terraform-aws-vpc) - 在 AWS 上创建 VPC 资源（已验证且非常受欢迎的模块）。
- [terraform-aws-vpn-gateway](https://github.com/terraform-aws-modules/terraform-aws-vpn-gateway) - 在 AWS 上创建 VPN Gateway 资源。
- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - 由 Microsoft 官方维护的 Azure 已验证模块集合，将 WAF 最佳实践编码，以一致地部署基础设施。
- [terraform-azurerm-aks](https://github.com/kjanshair/terraform-azurerm-aks) - 在 Azure 上创建 AKS 资源。
- [terraform-azurerm-iis](https://github.com/ghostinthewires/terraform-azurerm-iis-install) - 在 Azure VM 实例上安装 IIS Server。
- [terraform-azurerm-mysql](https://github.com/foreverXZC/terraform-azurerm-mysql) - 在 Azure 上创建 MySQL 数据库。
- [terraform-azurerm-redis](https://github.com/rahulkhengare/terraform-azurerm-redis) - 在 Azure 上创建 Redis。
- [terraform-azurerm-sqlserver](https://github.com/metadevpro/terraform-azurerm-sqlserver-seed) - 在 Azure 上创建 SQL Server 数据库。
- [terraform-cloudflare-maintenance](https://github.com/adinhodovic/terraform-cloudflare-maintenance) - 使用 Cloudflare Workers 创建维护页面的模块。
- [terraform-digitalocean-droplet](https://registry.terraform.io/modules/terraform-digitalocean-modules/droplet/digitalocean/latest) - 用于管理 DigitalOcean Droplets 及相关资源的 Terraform 模块。
- [terraform-ecs-jenkins](https://github.com/shuaibiyy/terraform-ecs-jenkins) - 使用 Terraform 在 AWS ECS 上配置 Jenkins。
- [terraform-gce-atlantis](https://github.com/runatlantis/terraform-gce-atlantis) - 创建 Terraform 配置，以便在 Google Compute Engine 上运行 [Atlantis](https://runatlantis.io)。
- [terraform-google-project-factory](https://github.com/terraform-google-modules/terraform-google-project-factory) - 以约定为主的 Google Cloud Platform 项目创建与配置，包含 Shared VPC、IAM、API 等。
- [terraform-helm-carbon-intensity-exporter](https://github.com/fabiocicerchia/terraform-helm-carbon-intensity-exporter) - 用于部署 Kubernetes Carbon Intensity Exporter 的 Terraform/Helm 模块。
- [terraform-helm-cloud-carbon-footprint](https://github.com/fabiocicerchia/terraform-helm-cloud-carbon-footprint) - 用于在 Kubernetes 上部署 Cloud Carbon Footprint 的 Terraform/Helm 模块。
- [terraform-helm-kepler](https://github.com/fabiocicerchia/terraform-helm-kepler) - 通过 Helm 部署 Kepler（Kubernetes 功耗分析）的 Terraform 模块。
- [terraform-kubestack](https://github.com/kbst/terraform-kubestack) - Kubestack 是面向 Kubernetes 平台工程团队的框架，可在单一 Terraform 代码库中定义完整的云原生技术栈，并通过 GitOps 持续、安全地演进平台。
- [terraform-linode-k8s](https://registry.terraform.io/modules/linode/k8s/linode/latest) - 在 Linode 实例上安装 Kubernetes。
- [terraform-nixos](https://github.com/nix-community/terraform-nixos) - 一组用于部署 NixOS 的 Terraform 模块。
- [terraform-static-website-s3-cloudfront](https://github.com/sergej-brazdeikis/terraform-static-website-s3-cloudfront) - 根据变量在 AWS S3 和 CloudFront 上创建静态网站。
- [tf_aws_bastion_s3_keys](https://github.com/terraform-community-modules/tf_aws_bastion_s3_keys) - 在 AWS EC2 上创建堡垒主机。
- [typhoon](https://github.com/poseidon/typhoon) - 精简、免费的 Kubernetes 发行版，使用 Terraform。

## 自托管注册表

- [anthology](https://github.com/erikvanbrakel/anthology) - 作为官方注册表替代方案的私有 Terraform 注册表实现。
- [boring-registry](https://github.com/boring-registry/boring-registry) - 支持 API key 身份验证和 blob 存储的私有 Terraform Module/Provider 注册表。
- [citizen](https://github.com/outsideris/citizen) - 私有 Terraform Module/Provider 注册表。
- [nrkno/terraform-registry](https://github.com/nrkno/terraform-registry) - 支持模块化存储后端的私有 Terraform 注册表。
- [petra](https://github.com/devoteamgcloud/petra) - 私有 Terraform 注册表管理器。
- [philips-labs/terraform-registry](https://github.com/philips-labs/terraform-registry) - 用于提供托管在 Github 上的任意 Terraform Provider 版本的 Terraform 注册表。
- [tapir](https://github.com/PacoVK/tapir) - 私有 Terraform 注册表。
- [terraform-simple-registry](https://github.com/apparentlymart/terraform-simple-registry) - Terraform 注册表协议的简单实现。
- [terramantle.dev](https://terramantle.dev) - 专注于模块和状态洞察的注册表，致力于解决依赖管理问题。
- [Terrareg](https://github.com/matthewjohn/terrareg) - Terraform 模块注册表。
- [terustry](https://github.com/veepee-oss/terustry) - 开源 Terraform Provider 注册表，可作为 GitLab 或 GitHub Releases 的代理。
- [terralist](https://github.com/terralist/terralist) - 可通过 REST API 管理模块和 Providers 的 Terraform 私有注册表。

## 托管注册表

- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Microsoft 官方计划，提供符合标准的 Azure 资源和架构模式 Terraform（及 Bicep）已验证模块，并遵循 Well-Architected Framework。
- [cloudsmith](https://docs.cloudsmith.com/formats/terraform-modules-repository) - 面向内部和外部客户的托管软件包托管服务。
- [Terramantle](https://terramantle.dev) - 私有 Terraform/OpenTofu 注册表，提供深入的模块洞察、依赖关系映射和状态可见性。

## Providers

### HashiCorp 支持的 Providers

- [terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) - Amazon Web Services 的 Provider。
- [terraform-provider-azurerm](https://github.com/hashicorp/terraform-provider-azurerm) - Azure 的 Provider。
- [terraform-provider-docker](https://github.com/hashicorp/terraform-provider-docker) - Docker 的 Provider。
- [terraform-provider-google](https://github.com/hashicorp/terraform-provider-google) - Google Cloud Platform 的 Provider。
- [terraform-provider-helm](https://github.com/hashicorp/terraform-provider-helm) - Helm 的 Provider。
- [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) - Kubernetes 的 Provider。
- [terraform-provider-vsphere](https://github.com/vmware/terraform-provider-vsphere) - VMware vSphere 的 Provider。

### 供应商支持的 Providers

- [terraform-provider-alicloud](https://github.com/aliyun/terraform-provider-alicloud) - Alibaba Cloud 的 Provider。
- [terraform-provider-artifactory](https://github.com/jfrog/terraform-provider-artifactory) - [JFrog Artifactory](https://jfrog.com/artifactory/) 的 Provider。
- [terraform-provider-atlas](https://github.com/ariga/terraform-provider-atlas) - [Atlas](https://atlasgo.io/) 的 Provider。
- [terraform-provider-azapi](https://github.com/Azure/terraform-provider-azapi) - Azure Resource Manager REST API 的 Provider。
- [terraform-provider-azuredevops](https://github.com/microsoft/terraform-provider-azuredevops) - Azure DevOps（VSTS）的 Provider。
- [terraform-provider-buildkite](https://github.com/buildkite/terraform-provider-buildkite) - Buildkite 的 Provider。
- [terraform-provider-checkly](https://github.com/checkly/terraform-provider-checkly) - 管理用于 API 和端到端监控的 [Checkly](https://www.checklyhq.com) 资源。
- [terraform-provider-coder](https://github.com/coder/terraform-provider-coder) - [Coder](https://coder.com) 的 Provider。
- [terraform-provider-confluent](https://github.com/confluentinc/terraform-provider-confluent) - Confluent 的 Provider。
- [terraform-provider-datadog](https://github.com/DataDog/terraform-provider-datadog) - Datadog 的 Provider。
- [terraform-provider-devhelm](https://github.com/devhelmhq/terraform-provider-devhelm) - [DevHelm](https://devhelm.io) 正常运行时间监控 Provider——以代码管理监控器、告警频道和状态页。
- [terraform-provider-digitalocean](https://github.com/digitalocean/terraform-provider-digitalocean) - DigitalOcean 的 Provider。
- [terraform-provider-dominos](https://github.com/nat-henderson/terraform-provider-dominos) - Dominos Pizza 的 Provider。
- [terraform-provider-elasticstack](https://github.com/elastic/terraform-provider-elasticstack) - Elasticsearch 和 Kibana 的 Provider。
- [terraform-provider-env0](https://github.com/env0/terraform-provider-env0) - [env0](https://www.env0.com/) 的 Provider。
- [terraform-provider-featureflip](https://github.com/canopy-labs/terraform-provider-featureflip) - 用于管理 [Featureflip](https://featureflip.io/) 功能开关的 Provider：项目、环境、开关、定向规则、分群和 SDK keys。
- [terraform-provider-github](https://github.com/integrations/terraform-provider-github) - GitHub 的 Provider。
- [terraform-provider-gitlab](https://github.com/gitlabhq/terraform-provider-gitlab) - GitLab 的 Provider。
- [terraform-provider-graphql](https://github.com/sullivtr/terraform-provider-graphql) - 用于 GraphQL 查询和变更的 Provider。
- [terraform-provider-hcloud](https://github.com/hetznercloud/terraform-provider-hcloud) - Hetzner Cloud 的 Provider。
- [terraform-provider-healthchecksio](https://github.com/kristofferahl/terraform-provider-healthchecksio) - 用于管理 healthchecks.io 资源的 Provider。
- [terraform-provider-heroku](https://github.com/heroku/terraform-provider-heroku) - Heroku 的 Provider。
- [terraform-provider-ibm](https://github.com/IBM-Cloud/terraform-provider-ibm) - IBM Cloud 的 Provider。
- [terraform-provider-iterative](https://github.com/iterative/terraform-provider-iterative) - 针对机器学习构建的 Terraform 插件。
- [terraform-provider-k8s](https://github.com/banzaicloud/terraform-provider-k8s) - 简单的 Kubernetes Provider，支持任意 manifest。
- [terraform-provider-keycloak](https://github.com/keycloak/terraform-provider-keycloak) - 用于管理 [Keycloak](https://www.keycloak.org/) 身份 Provider 服务器设置的 Provider。
- [terraform-provider-linode](https://github.com/btobolaski/terraform-provider-linode) - Linode 的 Provider。
- [terraform-provider-nxip](https://github.com/uk-sw/terraform-provider-nxip) - [nxip](https://nx-ip.com) 的 Provider，支持跨云和本地环境通过基于池的 CIDR 分配进行 IPAM。
- [terraform-provider-openstack](https://github.com/terraform-provider-openstack/terraform-provider-openstack) - OpenStack 插件。
- [terraform-provider-panos](https://github.com/PaloAltoNetworks/terraform-provider-panos) - [Palo Alto Networks 新一代防火墙](https://www.paloaltonetworks.com/network-security)的 Provider。
- [terraform-provider-phare](https://github.com/phare/terraform-provider-phare) - [Phare](https://phare.io) 的 Terraform Provider。
- [terraform-provider-planetscale](https://github.com/planetscale/terraform-provider-planetscale) - [PlanetScale](https://planetscale.com)（Vitess 和 Postgres）的 Terraform Provider。
- [terraform-provider-qovery](https://github.com/Qovery/terraform-provider-qovery) - [Qovery](https://www.qovery.com/) 的 Provider——管理 Kubernetes 部署、环境、应用、数据库、Helm charts 和 Terraform 服务，支持 AWS、GCP、Azure 和 Scaleway。
- [terraform-provider-pingdom](https://github.com/russellcardullo/terraform-provider-pingdom) - 用于管理 Pingdom 资源的 Provider。
- [terraform-provider-rancher2](https://github.com/rancher/terraform-provider-rancher2) - Rancher v2 的 Provider。
- [terraform-provider-scalr](https://github.com/Scalr/terraform-provider-scalr) - [Scalr](https://www.scalr.com/) 的 Provider。
- [terraform-provider-secrethub](https://github.com/secrethub/terraform-provider-secrethub) - SecretHub 的 Provider。
- [terraform-provider-sigsci](https://github.com/signalsciences/terraform-provider-sigsci) - Signal Sciences 的 Provider。
- [terraform-provider-snowflake](https://github.com/snowflakedb/terraform-provider-snowflake) - Snowflake 数据仓库的 Provider。
- [terraform-provider-spinnaker](https://github.com/armory-io/terraform-provider-spinnaker) - [Spinnaker](https://spinnaker.io/) 的 Provider。
- [terraform-provider-spotinst](https://github.com/spotinst/terraform-provider-spotinst) - spotinst 的 Provider。
- [terraform-provider-stripe](https://github.com/franckverrot/terraform-provider-stripe) - Stripe 的 Provider。
- [terraform-provider-ucloud](https://github.com/ucloud/terraform-provider-ucloud) - 用于管理 UCloud 资源的 Provider。
- [terraform-provider-uptimerobot](https://github.com/louy/terraform-provider-uptimerobot) - 用于管理 uptimerobot 资源的 Provider。
- [terraform-provider-vaulted](https://github.com/sumup-oss/terraform-provider-vaulted) - 通过 Terraform 管理加密的 HashiCorp Vault 密钥，可存储在 Git 等 SCM 中。
- [terraform-provider-scp](https://github.com/splunk/terraform-provider-scp) - Splunk Cloud Platform 的 Provider。

### 社区 Providers

- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Coolify 的 Terraform Provider。
- [terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) - Terraform Docker Provider。
- [terraform-provider-minio](https://github.com/aminueza/terraform-provider-minio) - 用于管理 MinIO S3 buckets 和 IAM 用户的 Terraform Provider。
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Multipass 的 Terraform Provider。
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - 以代码方式管理 OpenRouter：workspaces、guardrails、支出受限的 API keys 和组织成员。支持 Terraform + OpenTofu。
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - 用于 Azure 成本估算和成本防护的 Terraform Provider。
- [terraform-provider-proxmox](https://github.com/Telmate/terraform-provider-proxmox) - Terraform Proxmox Provider。
- [terraform-provider-seerr](https://github.com/Josh-Archer/terraform-provider-seerr) - Seerr（Overseerr/Jellyseerr）的 Terraform Provider。
- [terraform-provider-terracurl](https://github.com/devops-rob/terraform-provider-terracurl) - 用于向目标端点发起托管和非托管 API 调用的 Provider。
- [terraform-provider-uname](https://github.com/julienlevasseur/terraform-provider-uname) - Terraform 的 Uname Provider。
- [terraform-provider-value](https://github.com/pseudo-dynamic/terraform-provider-value) - Terraform 的 Value Provider。
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Multipass 的 Terraform Provider。
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - 以代码方式管理 OpenRouter：workspaces、guardrails、支出受限的 API keys 和组织成员。支持 Terraform + OpenTofu。
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - 用于 Azure 成本估算和成本防护的 Terraform Provider。
- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Coolify 的 Terraform Provider。
- [terraform-provider-appstore](https://github.com/elevenode/terraform-provider-appstore) - Apple App Store Connect 的 Terraform Provider。
- [terraform-provider-expo](https://github.com/elevenode/terraform-provider-expo) - Expo Application Services（EAS）的 Terraform Provider。
- [terraform-provider-paddle](https://github.com/vivantel/terraform-provider-paddle) - 用于管理 Paddle Billing 目录资源、生命周期操作和查找数据源的 Terraform Provider。
- [terraform-provider-seekrit](https://github.com/seekritdev/terraform-provider-seekrit) - 管理 seekrit 应用、环境、群组、服务令牌、密钥授权和秘密。仅写入参数和临时资源可避免秘密值进入状态。

## 测试

- [clarity](https://github.com/xchapter7x/clarity) - 用于单元测试的 Terraform 声明式测试框架。
- [kitchen-terraform](https://github.com/newcontext-oss/kitchen-terraform) - 提供一组 Test Kitchen 插件，使系统能够使用 Test Kitchen 收敛 Terraform 配置，并通过 InSpec 控件验证生成的 Terraform 状态。
- [rspec-terraform](https://github.com/bsnape/rspec-terraform) - 用于 Terraform 模块的 RSpec 测试。
- [terraform_validate](https://github.com/elmundio87/terraform_validate) - 协助实施用户定义的 Terraform 标准。
- [terraform-compliance](https://github.com/terraform-compliance/cli) - 针对 Terraform 文件的 BDD 测试。
- [terratest](https://github.com/gruntwork-io/terratest) - Terratest 是一个 Go 库，可简化基础设施代码自动化测试的编写。

## 工具

- [AIaC](https://github.com/gofireflyio/aiac) - 人工智能基础设施即代码生成器。
- [AirIAM](https://github.com/bridgecrewio/AirIAM) - 用于 AWS IAM 的最小权限 Terraform 执行框架工具。
- [asdf](https://github.com/asdf-community/asdf-hashicorp) - 用于 [asdf](https://github.com/asdf-vm/asdf) 版本管理器的 HashiCorp 插件。
- [astro](https://github.com/uber/astro/) - 用于将多个 Terraform 执行合并为一条命令的工具。
- [atlantis](https://github.com/runatlantis/atlantis) - 通过 GitHub 协作使用 Terraform 的统一工作流。
- [atmos](https://github.com/cloudposse/atmos) - 可将深度合并的 YAML 转换为模块输入的通用工具。
- [aws2tf](https://github.com/aws-samples/aws2tf) - 自动将现有 AWS 资源导入 Terraform，并输出 Terraform HCL 代码。
- [aztfexport](https://github.com/Azure/aztfexport) - 将现有 Azure 资源纳入 Terraform 管理的工具。
- [AzureNamer](https://azurenamingconventions.com/) - 为 200 多种 Azure 资源类型生成符合 CAF 的名称，并导出为 Terraform locals，同时实时校验长度和字符。
- [balcony](https://oguzhan-yilmaz.github.io/balcony/) - 便捷读取 AWS API 的 CLI 工具。还可生成 Terraform import blocks 和 Terraform Resource 代码。
- [bare-devcontainer/templates](https://github.com/bare-devcontainer/templates/tree/main/src/terraform) - 注重安全的 Terraform 开发容器，内含 terraform-ls 和便于重建的缓存。基础镜像位于 [bare-devcontainer/images](https://github.com/bare-devcontainer/images/tree/main/terraform)。
- [blast radius](https://github.com/28mm/blast-radius) - Terraform 依赖图的交互式可视化。
- [cf-terraforming](https://github.com/cloudflare/cf-terraforming) - 便于对现有 Cloudflare 资源进行 Terraform 化的命令行工具。
- [cfnctl](https://github.com/rogerwelin/cfnctl) - Cfnctl 为 AWS CloudFormation 带来 Terraform CLI 使用体验。
- [Checkov](https://github.com/bridgecrewio/checkov/) - 适用于 terraform>=0.12 的 Terraform 静态分析工具。
- [cloud-audit](https://github.com/gebalamariusz/cloud-audit) - AWS 安全审计 CLI，带有可生成 Terraform 修复代码的修复引擎。
- [CloudBurn](https://github.com/towardsthecloud/cloudburn) - 在 CI 和实时 AWS 账户中检查 Terraform 与 CloudFormation 的 AWS 成本策略。
- [Coder](https://coder.com/) - Coder 可通过 Terraform 在你的基础设施上配置软件开发环境。
- [coretech/terrafile](https://github.com/coretech/terrafile) - 以系统化方式管理供 Terraform 使用的外部 Github 模块（使用 Go 编写）。
- [Cynative](https://github.com/cynative/cynative) - 开源安全代理框架，可审查 Terraform 配置，并通过只读云 API 调查实时基础设施。
- [Datadef](https://datadef.io/repo-to-diagram) - 从 Terraform 仓库生成架构图和文档：无需运行 `terraform init` 或读取状态即可解析 `.tf` 文件；将模块绘制为区域并统计各环境数量；每日重新同步。
- [demonolith](https://github.com/schrieksoft/demonolith) - 使用 `demonolith refactor` 拆分单体 Terraform 项目（迁移代码），并用 `demonolith migrate` 迁移到较小的 .tfstate 文件。
- [driftctl](https://github.com/snyk/driftctl) - 检测、跟踪并提醒基础设施漂移。
- [drifthound](https://github.com/drifthoundhq/drifthound) - 持续检测基础设施漂移，并提供历史跟踪和通知。
- [dxw/terrafile](https://github.com/dxw/terrafile) - 以系统化方式管理供 Terraform 使用的外部 Github 模块（使用 Ruby 编写）。
- [flora](https://github.com/ketchoop/flora) - Terraform 版本管理器。
- [fogg](https://github.com/chanzuckerberg/fogg) - 用于消除管理 Terraform 仓库繁琐工作的工具。
- [former2](https://github.com/iann0036/former2) - 从 AWS 账户中的现有资源生成 Terraform 配置。
- [fuzzy-terraform-rm](https://github.com/paololazzari/fuzzy-terraform-rm) - 用于从 Terraform 状态中移除资源的模糊查找命令行工具。
- [gaia](https://github.com/gaia-app/gaia) - Gaia 是面向模块和自助服务基础设施的 Terraform 🌍 UI。
- [hcl2json](https://github.com/tmccombs/hcl2json) - 将 HCL2 转换为 JSON。
- [hcldump](https://github.com/magodo/hcldump) - 转储 HCL（v2）抽象语法树。
- [hcledit (mercari)](https://github.com/mercari/hcledit) - 用于编辑 HCL 配置的 Go 包。
- [hcledit (minamijoyo)](https://github.com/minamijoyo/hcledit) - HCL 命令行编辑器。
- [hclgrep](https://github.com/magodo/hclgrep) - 基于语法的 HCL(v2) grep。
- [hq](https://github.com/miller-time/hq) - 命令行 HCL 处理器。
- [iam-policy-json-to-terraform](https://github.com/flosell/iam-policy-json-to-terraform) - 将 JSON 格式的 IAM Policy 转换为 Terraform aws_iam_policy_document 的小型工具。
- [Infracost](https://github.com/infracost/infracost) - 在 CLI 和拉取请求中提供 Terraform 云成本估算。
- [inframap](https://github.com/cycloidio/inframap) - 读取 tfstate 或 HCL，为每个 Provider 生成专属图表，只显示最重要/相关的资源。
- [InfraScan](https://infrascan.soldevelo.com) - 用于 Terraform、AWS 和 Kubernetes 成本与安全分析的高级基础设施审计工具。
- [InfraSketch](https://infrasketch.cloud) - 免费的浏览器工具，可将 Terraform HCL 和 Docker Compose 可视化为架构图。支持 AWS 和 Azure。无需注册或凭据。
- [json2hcl](https://github.com/kvz/json2hcl) - JSON 与 HCL 双向转换。
- [k2tf](https://github.com/sl1pm4t/k2tf) - 将 Kubernetes YAML 转换为 Terraform HCL。
- [Kapitan](https://github.com/kapicorp/kapitan) - 根据库存驱动的模板生成 Terraform/OpenTofu JSON 和其他基础设施配置。
- [KICS](https://github.com/Checkmarx/kics) - 扫描 IaC 项目中的安全漏洞、合规问题和基础设施配置错误。目前支持 Terraform 项目、Kubernetes manifests、Dockerfiles、AWS CloudFormation 模板和 Ansible playbooks。
- [layerform](https://github.com/briefercloud/layerform) - Layerform 帮助工程师使用普通 .tf 文件创建可复用的环境栈，特别适用于多个“staging”环境。
- [library.tf](https://library.tf) - Library.tf 不仅提供 Terraform 和 OpenTofu 的完整注册表信息，也提供决策所需的洞察。可快速找到受支持、维护良好且无大量缺陷的模块或 Providers。
- [modules.tf-lambda](https://github.com/antonbabenko/modules.tf-lambda) - 将通过 [Cloudcraft.co](https://cloudcraft.co) 创建的可视化图表生成 Terraform 基础设施即代码。
- [para](https://github.com/paraterraform/para) - Terraform/Terragrunt 缺少的第三方插件管理器和“瑞士军刀”，用一个工具满足所有工作流需求。
- [pike](https://github.com/jamesWoolfenden/pike) - Pike 可计算构建 Terraform 所需的权限或 IAM policy。
- [pipeform](https://github.com/magodo/pipeform) - Terraform 运行时的 TUI。
- [platform-skills](https://github.com/nitinjain999/platform-skills) - Terraform AI 辅助实战手册：IAM 最小权限审查、爆炸半径分析、状态影响、Provider 约束和回滚规划。可作为 Claude、Codex、Cursor 和 Copilot 插件使用。
- [pluralith](https://www.pluralith.com/) - Terraform 状态可视化，并自动生成基础设施文档。
- [pre-commit-terraform](https://github.com/antonbabenko/pre-commit-terraform) - 用于 Terraform 和 Terragrunt 的 pre-commit Git hooks：自动格式化、验证、更新文档、运行安全检查、估算成本等。
- [pretf](https://github.com/raymondbutcher/pretf) - 可直接替代 Terraform 的封装工具，使用 Python 生成 Terraform 配置。另请参阅 [pretf 文档](https://pretf.readthedocs.io/en/latest/)。
- [prettyplan for TF 0.12+](https://github.com/cloudandthings/terraform-pretty-plan) - Prettyplan for TF 0.12+（[在线版本](https://cloudandthings.github.io/terraform-pretty-plan/)）是一款小工具，可帮助你轻松查看大型 Terraform plan。
- [prettyplan](https://github.com/chrislewisdev/prettyplan) - Prettyplan（[在线版本](https://chrislewisdev.github.io/prettyplan/)）是一款小工具，可帮助你轻松查看大型 Terraform plan。
- [pug](https://github.com/leg100/pug) - 面向 Terraform 高级用户的终端用户界面。
- [pytest-terraform](https://github.com/cloud-custodian/pytest-terraform) - pytest Terraform 插件，带有 fixtures 和离线回放支持。
- [python-terrafile](https://github.com/claranet/python-terrafile) - 以系统化方式管理供 Terraform 使用的外部 Github 模块。
- [regula](https://github.com/fugue/regula) - 在部署前评估 Terraform 基础设施即代码中的潜在 AWS、Azure 和 Google Cloud 安全配置错误及合规违规。
- [redc](https://github.com/wgpsec/redc) - 基于 Terraform 构建的新一代红队基础设施自动化工具，支持多云部署（Alibaba Cloud、Tencent Cloud、AWS 等），一键创建、配置和销毁红队环境。
- [renovate-config](https://github.com/SpotOnInc/renovate-config) - 可共享的 Renovatebot 配置预设，尤其适合 DevOps 人员。
- [Riftmap](https://riftmap.dev) - 跨仓库依赖和变更影响分析引擎，可扫描 Terraform、Docker、Helm 等多仓库基础设施，直观展示依赖关系及变更影响。
- [rover](https://github.com/im2nguyen/rover) - 交互式 Terraform 状态和配置浏览器。
- [ruby-terraform](https://github.com/infrablocks/ruby_terraform) - 用于调用 Terraform 命令的简易 Ruby 封装。
- [sato](https://github.com/JamesWoolfenden/sato) - Sato 可帮助你将旧版 CloudFormation 转换为 Terraform。
- [scenery](https://github.com/dmlittle/scenery) - 另一个美化 Terraform plan 输出的工具。
- [scratchrelaxtv](https://github.com/YakDriver/scratchrelaxtv) - 简易 Python 工具，辅助模块开发：从 `main.tf` 提取变量并生成 `variables.tf`，再根据 `variables.tf` 生成模块用法模板。
- [serverless.tf - Doing serverless with Terraform](https://serverless.tf/) - serverless.tf 是一个以约定为主的开源框架，使用 Terraform 在 AWS 上开发、构建、部署和保护无服务器应用及基础设施。[了解更多](https://github.com/antonbabenko/serverless.tf)。
- [Shieldly](https://github.com/shieldly-io/cli) - AI 驱动的安全分析工具，可分析 Terraform 生成的 IAM policies 和 CloudFormation，解释权限风险及修复方法。提供免费套餐、CLI 和 GitHub Action。
- [Shisho](https://github.com/flatt-security/shisho) - 轻量级 Terraform 静态分析器。
- [Speakeasy](https://www.speakeasy.com/) - 根据 OpenAPI 规范生成 Terraform Provider。
- [stacks](https://github.com/cisco-open/stacks) - Terraform 代码预处理器 Stacks。
- [SyncVey](https://github.com/MR-TABATA/SyncVey) - 自托管 AWS 资产台账，支持 tfstate 与实时 AWS 状态之间的属性级漂移检测、定时扫描和中间件 EOL 告警。
- [tads-boilerplate](https://github.com/Thomvaill/tads-boilerplate) - 结合 Ansible 和 Terraform 的强大功能与 Docker Swarm 的简洁性，实现基础设施即代码和 DevOps 最佳实践。
- [tau](https://github.com/avinor/tau) - Tau 是 Terraform 的轻量封装工具，用于管理多个部署、依赖项和秘密。
- [tenv](https://github.com/tofuutils/tenv) - OpenTofu/Terraform/Terragrunt 版本管理器。
- [terraboard](https://github.com/camptocamp/terraboard) - 用于检查 Terraform States 的 Web 仪表板。
- [terraboot](https://github.com/MastodonC/terraboot) - 用于生成 Terraform 配置并运行它的 DSL。
- [terracognita](https://github.com/cycloidio/terracognita) - 从现有云 Provider 读取资源（反向 Terraform），并生成 Terraform 配置形式的基础设施即代码。
- [terracost](https://github.com/cycloidio/terracost) - 在 CLI 中进行 Terraform 云成本估算。
- [terracove](https://elementtech.github.io/terracove/) - 递归测试目录树中的 Terraform 差异和覆盖率。
- [TerraDepot](https://github.com/derBroBro/TerraDepot) - 基于默认 HTTP 远程后端的 Terraform 状态仓库，可在 AWS S3 上集中管理 tfstates。
- [TerraDrift](https://github.com/niravraychura/terradrift) - 自托管的 Terraform/OpenTofu 漂移 CLI，适用于 CI 和 cron（基于 plan；不盘点非托管资源）。
- [terradozer](https://github.com/chenrui333/terradozer) - 无需配置文件即可销毁 Terraform 资源。
- [terraeasy](https://github.com/jaceq/terraeasy) - 简易 Terraform 封装工具。
- [terraform-ai-skills](https://github.com/anmolnagpal/terraform-ai-skills) - 面向 GitHub Copilot、Claude 和 ChatGPT 的 AI 技能，可自动批量管理 Terraform 模块——在 AWS、GCP、Azure 和 DigitalOcean 的 10 到 200 多个仓库中执行 Provider 升级、工作流标准化和发布。
- [terraform-aws-clickops-notifier](https://github.com/cloudandthings/terraform-aws-clickops-notifier) - 当 AWS Console 中执行操作时接收通知。
- [terraform-bundle](https://github.com/hashicorp/terraform/tree/main/tools/terraform-bundle) - 轻松构建包含 Terraform 二进制文件及 Provider 二进制文件的套件。适用于 CI 和隔离网络中的 Terraform Enterprise。
- [terraform-cdk](https://github.com/hashicorp/terraform-cdk) - Terraform 的 CDK（Cloud Development Kit），允许开发者使用熟悉的编程语言定义云基础设施，并通过 HashiCorp Terraform 配置资源。
- [terraform-cleaner](https://github.com/sylwit/terraform-cleaner) - 检测 Terraform 模块中未使用变量的小型工具。
- [terraform-credentials-vault](https://github.com/oulman/terraform-credentials-vault) - Terraform“凭据助手”插件，可通过环境变量为 Terraform 原生服务（私有模块注册表、Terraform Cloud 等）提供凭据。
- [terraform-diff](https://github.com/contentful-labs/terraform-diff) - 随时了解需要运行 Terraform plan 和 apply 的位置！
- [terraform-docs](https://github.com/terraform-docs/terraform-docs) - 从 Terraform 模块快速生成文档的实用工具。
- [terraform-graph-beautifier](https://github.com/pcasteran/terraform-graph-beautifier) - 命令行工具，可将几乎无法使用的 terraform graph 命令输出转换为更有意义、易懂的形式。
- [terraform-iam-policy-validator](https://github.com/awslabs/terraform-iam-policy-validator) - CLI 可根据 AWS IAM 最佳实践验证 Terraform 模板中的 AWS IAM Policies。
- [terraform-landscape](https://github.com/coinbase/terraform-landscape) - （仅支持 0.11 及更早版本）改进 Terraform plan 输出，使其更易阅读和理解。
- [terraform-operator](https://github.com/GalleyBytes/terraform-operator) - 用于处理 Terraform 操作的 Kubernetes CRD。
- [terraform-plan-parser](https://github.com/lifeomic/terraform-plan-parser) - 命令行工具和 JavaScript API，可解析 `terraform plan` 的标准输出并转换为 JSON。
- [terraform-provisioner](https://github.com/shuaibiyy/terraform-provisioner) - 用于管理同一 Terraform 脚本的多个配置实例的工具。
- [terraform-rake-tasks](https://github.com/gina-alaska/terraform-rake-tasks) - 用于管理 Terraform plans 的共享 Rake tasks。
- [terraform-repl](https://github.com/paololazzari/terraform-repl) - Terraform console 封装工具，提供更佳的交互式控制台体验。
- [Terraform-Visual](https://github.com/hieven/terraform-visual) - 用于可视化 Terraform plan 的简单而强大工具。
- [terravision](https://github.com/patrickchugh/terravision) - 根据 Terraform 代码生成专业云架构图，使用官方 AWS/Azure/GCP 图标和设计标准。完全在客户端运行，并支持 CI/CD 集成。
- [terraform.py](https://github.com/mantl/terraform.py) - 用于解析 Terraform 状态文件的 Ansible 动态 inventory 脚本。
- [terraformer](https://github.com/chenrui333/terraformer) - 从现有基础设施生成 Terraform 文件的 CLI 工具，实现从基础设施到代码的转换。支持多种 Providers。
- [terraforming](https://github.com/dtan4/terraforming) - 将现有 AWS 资源导出为 Terraform 格式（tf、tfstate），类似于 `terraformer`。
- [terraformize](https://github.com/naorlivne/terraformize) - 通过简单的 REST API 端点应用/销毁 Terraform 模块。
- [terraformsh](https://github.com/pwillis-els/terraformsh) - 让 CLI 更易使用并支持 DRY 分层配置的 Bash 封装工具。
- [terragrunt-atlantis-config](https://github.com/transcend-io/terragrunt-atlantis-config) - 为 Terragrunt 项目生成 Atlantis 配置。
- [terragrunt](https://github.com/gruntwork-io/terragrunt) - Terragrunt 是 Terraform 的轻量封装工具，提供额外工具来保持 Terraform 配置 DRY、处理多个 Terraform 模块以及管理远程状态。
- [terrahelp](https://github.com/opencredo/terrahelp) - 旨在为 Terraform 工作提供有时很实用的辅助功能的命令行工具。
- [terrahub](https://github.com/tfxor/terrahub) - TerraHub 是 Terraform 自动化与编排工具。它与 console.terrahub.io 无缝集成；该企业级 GUI 可实时展示 Terraform 执行情况，并支持历史运行审计和报告。
- [terramagic](https://github.com/miltlima/terramagic) - 使用 Python 编写的向导工具，可自动创建文件夹和 Terraform 文件！
- [terramate](https://github.com/terramate-io/terramate) - 管理多个 Terraform stacks，并支持变更检测和代码生成。
- [terrap-cli](https://github.com/sirrend/terrap-cli) - 强大的 CLI 工具，用于扫描基础设施并识别所需变更。
- [terrars](https://github.com/andrewbaxter/terrars) - 使用 Rust 构建 Terraform stacks 的工具，是 CDK 的替代方案。
- [terrascan](https://github.com/tenable/terrascan) - 用于对 Terraform 模板进行静态代码分析的安全与最佳实践测试集合。
- [terrascope](https://github.com/spilliams/terrascope) - Terraform 单体仓库的构建编排器。
- [terrashine](https://isawan.github.io/terrashine/) - Terraform Provider mirror1 的实现，会在请求 Providers 时自动缓存依赖项。
- [terraspace](https://terraspace.cloud) - Terraform 框架。
- [terrastate](https://github.com/rohinivsenthil/terrastate) - Visual Studio Code 扩展，用于监控/部署/销毁工作区中的 Terraform 资源。
- [terratag](https://github.com/env0/terratag) - CLI 工具，可自动为用户的所有 AWS、Azure 和 GCP 资源创建并维护标签。
- [tf-init-booster](https://github.com/hayorov/terraform-init-booster) - Terraform 之前运行的例程，可加速大型蓝图中 Terraform 模块的下载。
- [tf-profile](https://github.com/datarootsio/tf-profile/) - Terraform 运行性能分析器，可生成全局统计、资源级统计或可视化结果。
- [tf-summarize](https://github.com/dineshba/tf-summarize) - 用于打印 Terraform plan 摘要的命令行工具。
- [tf-why](https://github.com/Raj-glitch-max/tf.why) - 通过查询 CloudTrail，将 Terraform 漂移归因到引发变更的 AWS 操作者的 CLI 工具。
- [tfaction](https://github.com/suzuki-shunsuke/tfaction) - 针对约定式 Terraform 工作流的 GitHub Actions 集合。
- [tfautomv](https://github.com/busser/tfautomv) - 自动生成 Terraform `moved` blocks，轻松完成重构。
- [tfcmt](https://github.com/suzuki-shunsuke/tfcmt) - CLI 工具，可将 plan 和 apply 结果作为拉取请求评论通知。
- [tfedit](https://github.com/minamijoyo/tfedit) - Terraform 重构工具。
- [tfenv](https://github.com/tfutils/tfenv) - 受 rbenv 启发的 Terraform 版本管理器。
- [tfgen](https://github.com/0xDones/tfgen) - Terraform 代码生成器，确保代码库一致并遵循 DRY 原则。
- [tfgpt](https://github.com/flavius-dinu/tfgpt) - 将 Terraform 与 OpenAI GPT-3.5 Turbo 集成的 CLI 工具，可解释 Terraform 命令和概念。
- [tfimport](https://github.com/coolapso/tfimport) - 用于自动将现有基础设施导入 tfstate 的 CLI 工具。
- [tfjson](https://github.com/palantir/tfjson) - 读取 Terraform plan 文件并将其输出为 JSON 的实用工具。
- [tfk8s](https://github.com/jrhouston/tfk8s) - 将 Kubernetes YAML manifests 转换为 Terraform HCL 的工具。
- [tflint](https://github.com/terraform-linters/tflint) - Terraform linter，用于检测 `terraform plan` 无法发现的错误。
- [tfmake](https://github.com/tfmake/tfmake) - 借助 make 的强大功能实现 Terraform 自动化。
- [tfmask](https://github.com/cloudposse-archives/tfmask) - Terraform 实用工具，可隐藏 `terraform plan` 和 `terraform apply` 输出中的指定内容。
- [tfmigrate](https://github.com/minamijoyo/tfmigrate) - 面向 GitOps 的 Terraform 状态迁移工具。
- [tfmigrator](https://github.com/tfmigrator/cli) - 用于迁移 Terraform 配置和状态的 Go 库及 CLI。
- [tfmodcache](https://github.com/Rezarys/tfmodcache) - Terraform 和 OpenTofu 的本地共享模块缓存；`terraform init` 不会重复下载已有模块。我是作者。
- [tfmv](https://github.com/suzuki-shunsuke/tfmv) - 重命名 Terraform 资源并生成 moved blocks。
- [tfocus](https://github.com/nwiizo/tfocus) - 用于交互式选择并对指定资源执行 Terraform plan/apply 的超强工具。可将其视为“应急工具”，并非日常使用。
- [tfprovidercheck](https://github.com/suzuki-shunsuke/tfprovidercheck) - 用于防止执行恶意 Terraform Providers 的 CLI。
- [tfproviderlint](https://github.com/bflad/tfproviderlint) - Terraform Provider lint 工具。
- [tfrepl](https://github.com/ysoftwareab/tfrepl) - Terraform REPL，提供完整的 shell 体验。基于 Readline，无依赖，可保存配置变更并记录历史。
- [tfreveal](https://github.com/breml/tfreveal) - Terraform 实用工具，可显示包含所有秘密（敏感）值的 Terraform plans。
- [tfscaffold](https://github.com/tfutils/tfscaffold) - 用于控制多环境、多组件 Terraform 管理的 AWS 基础设施的框架。
- [tfschema](https://github.com/minamijoyo/tfschema) - Terraform Providers 的 schema 检查器。
- [tfsec](https://github.com/aquasecurity/tfsec) - Terraform 静态分析工具，支持 terraform <0.12 和 >=0.12，并直接集成 HCL parser 以获得更佳结果。
- [tfsort](https://github.com/AlexNabokikh/tfsort) - 用于对 Terraform 变量和输出排序的 CLI 实用工具。
- [tftarget](https://github.com/future-architect/tftarget) - 交互式运行 `terraform xxx -target={...}` 的 CLI 工具。
- [tftree](https://github.com/busser/tftree) - 在终端中显示 Terraform 模块调用栈。
- [tftui](https://github.com/idoavrah/terraform-tui) - Terraform 状态的文本用户界面。
- [tfupdate](https://github.com/minamijoyo/tfupdate) - 更新 Terraform 配置中的版本约束。
- [tfvar](https://github.com/shihanng/tfvar) - tfvar 可扫描 Terraform 配置或模块，并提取变量以转换为所选格式（tfvar、环境变量等）进行编辑。
- [tfvault](https://github.com/tedilabs/tfvault) - 通用 Terraform 凭据助手，支持可插拔的秘密后端（OS keyring、pass/gopass、环境变量）和按配置文件隔离账户。
- [tfvaultenv](https://github.com/oulman/tfvaultenv) - tfvaultenv 从 HashiCorp Vault 读取秘密，并为各类 Terraform Providers 输出环境变量。
- [tfwrapper](https://github.com/manheim/tfwrapper) - 提供用于正常运行 HashiCorp Terraform 的 Rake tasks 的 RubyGem。
- [tfmcp](https://github.com/nwiizo/tfmcp) - 通过 Model Context Protocol（MCP）与 Terraform 交互的 CLI 工具，可让 Claude 等 AI 助手管理和操作 Terraform 环境。
- [tgf](https://github.com/coveooss/tgf) - 通过 Docker 执行 Terragrunt/Terraform 的 Terragrunt 前端。
- [threatcl](https://github.com/threatcl/threatcl) - 使用 HCL 记录威胁模型。
- [tofuenv](https://github.com/tofuutils/tofuenv) - 受 tfenv 启发的 OpenTofu 版本管理器。
- [tpm](https://github.com/Madh93/tpm) - Terraform Providers 的包管理器。
- [travelgrunt](https://github.com/ivanilves/travelgrunt) - 轻松在 [mono]repos 中切换目录！
- [trupositive](https://github.com/trupositive-ai/trupositive) - 零配置封装工具，可自动将 Git 元数据（commit SHA、branch、repo）注入所有 Terraform 管理的资源。
- [validIaC](https://github.com/gofireflyio/validiac) - ValidIaC 整合了优秀的开源工具，帮助确保 Terraform 最佳实践、规范和安全。
- [xterrafile](https://github.com/devopsmakers/xterrafile) - 以系统化方式管理供 Terraform 使用的外部模块，来源可为模块注册表、Git 或本地目录（使用 Go 编写）。
- [yj](https://github.com/sclevine/yj) - CLI 工具，可在 YAML、TOML、JSON 和 HCL 之间转换，并保留映射顺序。
- [yor](https://github.com/bridgecrewio/yor) - 自动为基础设施即代码框架（Terraform、Cloudformation 和 Serverless）添加标签并进行追踪。
- [zephy](https://github.com/henrybravo/zephy) - 当云资源标签策略不足时，将 Azure 订阅中部署的资源与 Terraform Enterprise（HCP 和自托管）工作区管理的资源进行比较。

### CI

- [opentofu-updater-action](https://github.com/drumandbytes/opentofu-updater-action) - GitHub Action，可通过创建拉取请求，让 OpenTofu/Terraform Providers、模块、Helm charts 和容器镜像保持最新。
- [setup-terraform](https://github.com/hashicorp/setup-terraform) - 在 GitHub Actions 工作流中设置 Terraform CLI。
- [terraform-plan](https://github.com/cds-snc/terraform-plan) - 用于运行 Terraform plan 并添加变更评论的 GitHub Action。
- [terraform-risk-assessor](https://github.com/Liam-Johnston/terraform-risk-assessor) - GitHub Action，使用 AI 分析 Terraform plan 变更，并在拉取请求中评论风险评估。

### VS Code 扩展

- [HashiCorp Terraform](https://marketplace.visualstudio.com/items?itemName=hashicorp.terraform)
- [vscode-terraform-live-graph](https://github.com/adamiBs/vscode-terraform-live-graph) - Visual Studio Code 的 Terraform Live Graph 扩展，可在编写代码时生成实时 Terraform 图。
- [tf-nav](https://marketplace.visualstudio.com/items?itemName=owenrumney.tf-nav) - Terraform 导航扩展，可按文件类型创建资源索引，并以易于浏览的树形视图呈现。

## 库

- [hcl-rs](https://github.com/martinohmann/hcl-rs) - 支持 serde 的 Rust HCL 解析和编码库。
- [hcl4j](https://github.com/wondrify/hcl4j) - Java HCL parser。
- [nu_plugin_hcl](https://github.com/Yethal/nu_plugin_hcl) - 适用于 [Nushell](https://github.com/nushell/nushell) 的 HCL parser 插件。
- [pyhcl](https://github.com/virtuald/pyhcl) - Python HCL parser。
- [python-hcl2](https://github.com/amplify-education/python-hcl2/) - Python HCL2 parser。
- [rhcl](https://github.com/winebarrel/rhcl) - 纯 Ruby HCL parser。
- [tree-sitter-hcl](https://github.com/tree-sitter-grammars/tree-sitter-hcl) - 适用于 tree-sitter 的 HCL grammar。

## 项目模板

- [Solo-Engineer Stack](https://github.com/sarmakska/terraform-stack) - 将 Vercel、Supabase、Cloudflare 和 DigitalOcean 连接起来的单仓库 Terraform 栈，用作独立 SaaS 平台。一次 `terraform apply` 即可配置 Next.js 项目、将环境变量传递给 Vercel 的 Supabase 项目、带有 R2 和 Workers KV 的 Cloudflare zone，以及带监控的 DigitalOcean droplet。
- [Terraform Generator](https://github.com/sudokar/generator-tf-module) - 用于创建新 Terraform 模块或项目的脚手架，支持测试框架（terratest 和 kitchen-terraform）。
- [Terraform GitOps Framework](https://www.kubestack.com) - 在一个免费开源框架中，提供构建 AKS、EKS 和 GKE Kubernetes 集群可靠自动化所需的一切。

## 自托管 Terraform 平台

- [Snap CD](https://github.com/schrieksoft/snapcd) - 功能完备的持续部署平台，支持通过隔离运行器、依赖感知自动化和精细访问控制实现模块化部署。
- [Lynx](https://github.com/clivern/lynx) - 快速、安全、可靠的 Terraform Backend。提供易用的仪表板、项目和环境管理、状态版本控制、锁定和快照支持。
- [OTF](https://github.com/leg100/otf) - Open Terraforming Framework，是 Terraform Enterprise 的开源替代方案，全面集成 Terraform CLI。
- [Terrakube](https://docs.terrakube.io) - Terraform Enterprise 的开源替代方案，提供私有注册表、远程状态、自定义流程、定时工作区和可视化状态。
- [Digger](https://digger.dev) - Terraform Cloud 的开源替代方案——在 CI 中运行 Terraform plan 和 apply 作业。
- [cloud-concierge](https://github.com/dragondrop-cloud/cloud-concierge) - 开源工具，可将非托管资源编码为 Terraform、检测漂移，并分析云成本和安全问题，最后通过拉取请求交付。
- [Stack-Lifecycle-Deployment](https://github.com/D10S0VSkY-OSS/Stack-Lifecycle-Deployment) - 定义和管理云中使用与配置的资源完整生命周期的开源解决方案。
- [Burrito](https://github.com/padok-team/burrito) - TACoS Kubernetes Operator——“Terraform 版 ArgoCD”。
- [Terrateam](https://terrateam.io) - Terraform Cloud/Enterprise 的开源替代方案，以 GitOps 为先，原生集成 GitHub，专为规模化、安全和可靠性而设计。


## 托管 Terraform 平台 :heavy_dollar_sign:

- [compliance.tf](https://compliance.tf) - 内置 SOC 2、PCI DSS、HIPAA、NIST 800-53 和另外 35 多种框架要求的 Terraform 模块。不合规配置会在 `terraform plan` 阶段失败，早于任何实际应用。
- [ControlMonkey](https://www.controlmonkey.io/) - Terraform Cloud 的替代方案，提供 Terraform/OpenTofu 代码生成、云资产清单和 IaC 覆盖率。内置策略、漂移修复和 ClickOps 活动扫描器。
- [Firefly](https://www.firefly.ai/) - 借助你的 CI 工具替代 Terraform Cloud。Firefly 平台还会扫描云环境，评估 IaC 覆盖率并检测漂移。
- [Scalr](https://www.scalr.com/) - Terraform Enterprise 的替代方案，提供 OPA 集成、组织结构、自定义 hooks、与其他 DevOps 平台的原生集成和集中式报告。
- [Stategraph](https://stategraph.com) - Terraform 和 OpenTofu 不再受状态文件瓶颈限制。以真正的数据库取代扁平状态文件。团队可并行执行 plan，通过 SQL 查询状态，plan 用时从数分钟缩短至数秒。
- [env0](https://www.env0.com/) - Terraform Cloud/Enterprise 的替代方案，支持 OPA 集成、自定义流程和 Terragrunt。
- [Brainboard](https://www.brainboard.co) - 通过可视化方式设计、部署和管理现代云基础设施，支持 AWS、GCP、Azure 等云 Provider。
- [Spacelift](https://spacelift.io/) - Terraform Cloud/Enterprise 的替代方案，是面向 Terraform 的协作式基础设施交付平台。
- [StackGuardian](https://stackguardian.io/) - 基础设施代码化与编排平台，可将现有云资源转换为 IaC，提供由 Tirith、OPA 和 Checkov 驱动的策略工作流，并支持私有运行时和无代码模板。

## Terraform Enterprise 工具

- [terraform-enterprise-cli](https://github.com/skierkowski/terraform-enterprise-cli) - Terraform Enterprise 命令行界面。
- [terraform-enterprise-client](https://github.com/skierkowski/terraform-enterprise-client) - Terraform Enterprise API Ruby Client 和命令行工具。
- [terraform-enterprise-migrator](https://github.com/sil-org/tfc-ops) - 将 Terraform Enterprise 环境从旧版迁移到新版 Terraform Enterprise 的脚本。

## 视频

- [Your Weekly Dose of Terraform](https://www.youtube.com/channel/UCGH0yYPvlCN1VjSFMGVmFgQ) - YouTube 频道，每周直播 Terraform 新闻、评测、访谈、问答、现场编码和 Terraform 探索内容。
- [Terraform explained in 15 mins](https://www.youtube.com/watch?v=l5k1ai_GBDE) - 用 15 分钟讲解 Terraform。
- [Terraform Course](https://www.youtube.com/watch?v=SLB_c_ayRMo) - 自动化 AWS 云基础设施。
- [How to Build Reusable, Composable, Battle tested Terraform Modules](https://www.youtube.com/watch?v=LVgP63BkhKQ) - Yevgeniy Brikman 分享如何编写可复用、可组合、可测试的 Terraform 代码。演讲重点介绍 Terraform 模块，也简明扼要地解释 Terraform 要解决的问题，并简要演示 Terraform 基础知识（约 39 分钟，2017 年 10 月）。
- [Building Scalable, Repeatable Infrastructure in the Cloud with Terraform](https://www.youtube.com/watch?v=cG7pcksTAnY) - 演示 Terraform 如何通过在 AWS 上部署使用托管 PostgreSQL 的 TeamCity，实现基础设施即代码实践。
- [Creating a Google Compute Instance with Terraform](https://www.youtube.com/watch?v=fo3VX33Zx0c) - 使用 Terraform 代码创建 Google Compute Instance 的示例。
- [Creating a Terraform Provider for Just About Anything](https://www.hashicorp.com/resources/creating-terraform-provider-for-anything) - 通过本教程了解如何为 Terraform Provider 贡献代码或创建自己的 Provider。
- [Evolving Your Infrastructure with Terraform](https://www.youtube.com/watch?v=wgzgVm7Sqlk) - OpenCredo 的 CTO 借助一些有趣的用例，深入介绍在现实环境中使用 Terraform。
- [Going Multi-Cloud with Terraform and Nomad](https://www.youtube.com/watch?v=e42A4aBZUkQ).
- [How to Extend the Terraform Provider List](https://www.youtube.com/watch?v=2BvpqmFpchI) - 在本次演讲中，Paul 将介绍 Terraform Provider 的创建过程。
- [Orchestrating Containers with Terraform and Consul](https://www.infoq.com/presentations/terraform-consul/) - Mitchell Hashimoto 展示如何使用 Terraform 部署和扩展容器化工作负载。
- [Production ChaosMonkey with Terraform](https://www.youtube.com/watch?v=CPI6W3LK0-g) - 介绍 DigitalOcean 如何使用 Terraform 运行生产集成测试。
- [Running a Terraform Environment at Scale](https://www.youtube.com/watch?v=3JVGSq7QIS0) - 在数百个 AWS 账户中大规模运行 Terraform。
- [Setup Continuous Integration for a Terraform module](https://www.youtube.com/watch?v=vuJ6bjYKUcA) - 通过 Kitchen-Terraform 测试、标记和发布创建 Google Compute Instance 的 Terraform 模块，演示如何为 Terraform 模块设置持续集成。
- [State of Terraform Providerland](https://www.youtube.com/watch?v=ar1PF5iDtbg) - 介绍 Terraform Providers 的工作原理以及如何编写 Provider。
- [Terraform At Scale](https://www.youtube.com/watch?v=RldRDryLiXs) - 介绍 Segment 如何使用 Terraform。
- [Terraform w/ Lee Trout](https://www.youtube.com/watch?v=p2ESyuqPw1A) - 重点介绍开发模式以及如何有效组织 Terraform 代码。
- [Terraforming the Composable World](https://www.youtube.com/watch?v=cHrOXPatFeg) - 将 Terraform 与本地裸机配置集成。
- [Test and verify a Google Compute Instance with Kitchen-Terraform](https://www.youtube.com/watch?v=kiH3-LEveek) - 使用 Kitchen-Terraform 测试创建 Google Compute 实例的 Terraform 代码示例。
- [Untangling Terraform Through Refactoring](https://www.youtube.com/watch?v=OH6iDKaXpZs) - 如何谨慎地重构 Terraform 代码，将风险降至最低。
- [Complete Terraform Course - From BEGINNER to PRO! (Learn Infrastructure as Code)](https://www.youtube.com/watch?v=7xngnjfIlK4) - 从入门到专业的完整课程，不聚焦于任何特定云 Provider，采用通用方法。

## 编辑器插件

- [Emacs terraform-mode](https://github.com/hcl-emacs/terraform-mode)
- [Intellij](https://plugins.jetbrains.com/plugin/7808-terraform-and-hcl)
- [Terraform-ls](https://github.com/hashicorp/terraform-ls) (Terraform 语言服务器)
- [Terraform-lsp](https://github.com/juliosueiras/terraform-lsp) (Terraform 语言服务器协议)
- [vim-hcl](https://github.com/jvirtanen/vim-hcl) - HCL 语法高亮。
- [Vim-Terraform-Completion](https://github.com/juliosueiras/vim-terraform-completion)
- [Vim-Terraform](https://github.com/hashivim/vim-terraform)

## 许可证

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

在法律允许的最大范围内，Shuaib Yunus 已放弃对本作品的所有版权及相关权利或邻接权。
