# Awesome Terraform [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) <!-- omit in toc -->

[![Link Checker](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml)
[![Misspell Check](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml)

[HashiCorp의 Terraform](https://www.terraform.io/)에 관한 엄선된 자료 목록입니다.
> [<img src="https://raw.githubusercontent.com/shuaibiyy/awesome-terraform/master/terraform.svg" align="right" width="100">](https://terraform.io)
여러분의 [기여](https://github.com/shuaibiyy/awesome-tf/blob/master/contributing.md)를 환영합니다!

Terraform을 사용하면 프로덕션 인프라를 안전하고 예측 가능하게 생성, 변경 및 개선할 수 있습니다. Terraform은 API를 선언적 구성 파일로 코드화하는 오픈 소스 도구이며, 이 파일은 팀원과 공유하고 코드처럼 다루며 편집, 검토 및 버전 관리할 수 있습니다.

## 목차 <!-- omit in toc -->

- [범례](#legend)
- [공식 자료](#official-resources)
- [커뮤니티](#community)
- [도서](#books)
- [학습](#learning-and-studying)
- [앱](#apps)
- [튜토리얼 및 블로그 게시물](#tutorials-and-blog-posts)
  - [초보자 가이드](#beginner-guides)
  - [사용자 지정 Provider 작성](#writing-custom-providers)
  - [방법 안내](#how-to)
  - [다중 환경 구성](#multi-environment-configuration)
  - [Azure](#azure)
  - [AWS](#aws)
  - [Google Cloud](#google-cloud)
  - [기타](#miscellaneous)
- [커뮤니티 모듈](#community-modules)
- [자체 호스팅 레지스트리](#self-hosted-registries)
- [관리형 레지스트리](#managed-registries)
- [Provider](#providers)
  - [HashiCorp 지원 Provider](#hashicorp-supported-providers)
  - [벤더 지원 Provider](#vendor-supported-providers)
  - [커뮤니티 Provider](#community-providers)
- [테스트](#testing)
- [도구](#tools)
  - [CI](#ci)
  - [VS Code 확장](#vs-code-extensions)
- [라이브러리](#libraries)
- [보일러플레이트](#boilerplates)
- [자체 호스팅 Terraform 플랫폼](#self-hosted-terraform-platforms)
- [관리형 Terraform 플랫폼 :heavy\_dollar\_sign:](#managed-terraform-platforms-heavy_dollar_sign)
- [Terraform Enterprise 도구](#terraform-enterprise-tooling)
- [동영상](#videos)
- [편집기 플러그인](#editor-plugins)
- [라이선스](#license)

## 범례

- _terraform >= 0.12_와 호환되지 않음 :ghost:
- 유지 관리 중단 :skull:
- 유료 :heavy_dollar_sign:

## 공식 자료

- [Hashicorp Terraform Blog](https://www.hashicorp.com/en/blog/products/terraform)
- [Introduction to Terraform](https://developer.hashicorp.com/terraform/intro)
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform learn](https://developer.hashicorp.com/terraform/tutorials)

## 커뮤니티

- [weekly.tf - Terraform Weekly Newsletter](https://www.weekly.tf/) - Terraform 뉴스, 오픈 소스 프로젝트, 공지 및 토론을 다루는 주간 뉴스레터입니다.
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
- [The Claude Agent Skill for Terraform and OpenTofu - testing, modules, CI/CD, and production patterns](https://github.com/antonbabenko/terraform-skill) - Terraform 및 OpenTofu의 테스트, 모듈, CI/CD, 프로덕션 패턴을 다루는 Claude Code 기술입니다.
- [awesome-terraform-compliance](https://github.com/antonbabenko/awesome-terraform-compliance) - Terraform 규정 준수 및 보안을 위한 도구, 프레임워크, 자료를 엄선한 목록입니다.
- 언어별 커뮤니티:
  - [Telegram (우크라이나어 커뮤니티)](https://t.me/terraform_ukraine)

## 도서

- [Big Little Book On Terraform](https://www.amazon.com/Big-Little-Book-Terraform-Omos-ebook/dp/B07PWYPNX8/)
- [Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Second Edition](https://www.manning.com/books/bootstrapping-microservices-second-edition)
- [Deep-Dive Terraform on Azure](https://link.springer.com/book/10.1007/978-1-4842-7328-9)
- [Getting Started with Terraform, 2nd ed.](https://www.amazon.com/Getting-Started-Terraform-production-infrastructure/dp/1788623533/)
- [HashiCorp Infrastructure Automation Certification Guide](https://www.amazon.com/HashiCorp-Infrastructure-Automation-Certification-Guide-ebook/dp/B092KM7LXC/)
- [IaC starting with Terraform (Korean)](https://product.kyobobook.co.kr/detail/S000202478097)
- [Infrastructure as Code](https://www.oreilly.com/library/view/infrastructure-as-code/9781491924334/)
- [Patterns and Practices for Infrastructure as Code: With examples in Python and Terraform](https://www.manning.com/books/infrastructure-as-code-patterns-and-practices)
- [Terraform Best Practices](https://www.terraform-best-practices.com/) - [오픈 소스 전자책](https://github.com/antonbabenko/terraform-best-practices)
- [Terraform Cookbook](https://www.amazon.com/Terraform-Cookbook-Efficiently-Infrastructure-platforms/dp/1800207557)
- [Terraform for Ops e-book](https://www.terraformforops.com)
- [Terraform in Action](https://www.manning.com/books/terraform-in-action)
- [Terraform in Depth](https://www.manning.com/books/terraform-in-depth)
- [Terraform: Up & Running, 3rd ed.](https://www.terraformupandrunning.com/)
- [The Terraform Book](https://terraformbook.com/)

## 학습

- [Terraform Academy](https://www.terraformacademy.app) - 실습 랩, 인증 시험 준비(HashiCorp, AWS, GCP, Azure, Docker, Kubernetes, GitOps), AI 코칭 및 진행 상황 추적 기능을 갖춘 인터랙티브 Terraform/IaC 학습 플랫폼입니다. [SRE Pro Tips 블로그](https://www.terraformacademy.app/protips/?cat=sre-pro-tips)와 아래 모바일/PWA 앱도 참조하세요.
- [Terraform Terminal Simulator](https://devops-daily.com/games/terraform-terminal-simulator) - 브라우저의 시뮬레이션 터미널에서 init, plan, apply를 연습하세요. 무료 오픈 소스이며 가입이 필요 없습니다.
- [compliance.tf docs](https://compliance.tf/docs/) - SOC 2, PCI DSS, HIPAA, NIST 800-53 및 35개 이상의 기타 규정 준수 제어를 위한 무료 Terraform 구현입니다. 규정 준수 인프라 코드를 작성하기 위한 공개 참조 자료입니다.
- [DevOpsLesson Terraform Playground](https://devopslesson.com/playground/terraform) - 가이드형 HCL 연습 및 명령어 실습을 제공하는 무료 브라우저 기반 Terraform 시뮬레이터입니다.

## 앱

이동 중에도 Terraform을 학습하고 사용할 수 있도록 돕는 모바일, 데스크톱 및 PWA 앱입니다.

- [Terraform Academy — iOS](https://apps.apple.com/us/app/terraform-academy/id6745738634) - Terraform Academy 인터랙티브 학습 플랫폼의 iOS 네이티브 앱입니다. 실습 랩, 인증 시험 준비(HashiCorp, AWS, GCP, Azure, Docker, Kubernetes, GitOps), AI 코칭 및 기기 간 진행 상황 동기화를 제공합니다.
- [Terraform Academy — Android](https://play.google.com/store/apps/details?id=com.terraformacade1.app) - Terraform Academy 학습 플랫폼의 Android 네이티브 앱으로, iOS 및 웹 버전과 동일한 랩, 인증 시험 준비, AI 코칭을 제공합니다.
- [Terraform Academy — PWA / Web App](https://www.terraformacademy.app/) - 설치 가능한 Terraform Academy 프로그레시브 웹 앱입니다. 오프라인으로 작동하고 모든 플랫폼의 홈 화면에 설치할 수 있으며 모바일 앱과 진행 상황을 동기화합니다.

## 튜토리얼 및 블로그 게시물

### 초보자 가이드

- [A Comprehensive Guide to Terraform](https://www.gruntwork.io/blog/a-comprehensive-guide-to-terraform) - “Terraform: Up & Running” 저자가 Terraform 입문부터 실전 활용까지 안내하는 블로그 게시물 시리즈입니다.
- [Using Terraform for Cloud Deployments - Part 1](https://dev.to/koenighotze/using-terraform-for-cloud-deployments---part-1) - EC2 인스턴스 프로비저닝.
- [Hello, world: The Fargate/Terraform tutorial I wish I had](https://section411.com/2019/07/hello-world/) - ECS Fargate 클러스터를 처음부터 설정하는 방법을 설명하는 블로그 게시물입니다.
- [Terraform Security Guide](https://sysdig.com/blog/terraform-security-best-practices/) - Terraform 사용 시 보안 모범 사례를 설명하는 블로그 게시물입니다.
- [Building a SaaS API? Don't Forget Your Terraform Provider](https://www.speakeasy.com/blog/build-terraform-providers) - Terraform Provider를 작성해야 하는 이유입니다.
- [Complete Terraform Course in French (Free)](https://blog.stephane-robert.info/docs/infra-as-code/provisionnement/terraform/) – Terraform을 초급부터 고급 활용까지 익힐 수 있는 포괄적인 무료 프랑스어 강좌로, 실습 예제와 모범 사례를 제공합니다.
- [Introduction to Terraform](https://devopslesson.com/tutorials/terraform/introduction-to-terraform) - Provider, 리소스, 상태 및 첫 apply를 실습 예제와 함께 다루는 Terraform 기초 입문 가이드입니다.

### 사용자 지정 Provider 작성

- [Creating custom terraform providers](https://blog.pelo.tech/creating-custom-terraform-providers-341311823fa2) - 사용자 지정 Provider를 만드는 안내서입니다.
- [Writing a Terraform provider](https://web.archive.org/web/20220516140659/http://blog.jfabre.net/2017/01/22/writing-terraform-provider/) - 사용자 지정 Provider를 만드는 안내서입니다.
- [Writing Custom Providers](https://developer.hashicorp.com/terraform/plugin/sdkv2) - 사용자 지정 Provider 제작에 관한 공식 문서입니다.
- [Terraform Provider Code generation](https://www.speakeasy.com/docs/terraform/create-terraform) - OpenAPI 사양에서 Terraform Provider를 생성하는 안내서(벤더 지원)입니다.

### 방법 안내

- [How To Write OPA for Terraform](https://scalr.com/learning-center/opa-series-part-1-open-policy-agent-and-terraform) - Open Policy Agent를 사용해 Terraform 계획을 평가하고 정책을 적용하는 방법입니다.
- [Deploying Discourse with Terraform](https://www.hashicorp.com/en/blog/deploying-discourse-with-terraform) - Terraform으로 한 번의 명령만으로 DigitalOcean에 실행 중인 Discourse 인스턴스를 만들 수 있음을 보여줍니다.
- [Deploying Django to AWS ECS with Terraform](https://testdriven.io/blog/deploying-django-to-ecs-with-terraform/) - ECS에서 Django 앱을 실행하는 데 필요한 AWS 인프라를 Terraform으로 구축하는 방법을 살펴봅니다.
- [Easily Deploy A Seneca Microservice to ECS with Wercker and Terraform: Part I](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-i/), [II](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-ii/) & [III](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-iii/) - 마이크로서비스 배포 파이프라인에 Terraform을 통합하는 방법을 보여줍니다.
- [Terraform for a Highly Available VPN between AWS and Azure](https://web.archive.org/web/20210616132857/https://deployeveryday.com/2020/04/13/vpn-aws-azure-terraform.html) - AWS와 Azure 간 고가용성 VPN을 배포하는 Terraform 코드입니다.
- [Terraforming 1Password](https://1password.com/blog/terraforming-1password) - 1Password가 CloudFormation에서 Terraform으로 마이그레이션한 방법입니다.
- [Tutorial: How to Use Terraform to Deploy OpenStack Workloads](https://web.archive.org/web/20170611135511/http://www.stratoscale.com/blog/openstack/tutorial-how-to-use-terraform-to-deploy-openstack-workloads/) - OpenStack Terraform Provider를 사용해 웹 서버를 쉽게 배포하는 방법을 보여줍니다.
- [Zero Downtime Updates with HashiCorp Terraform](https://www.hashicorp.com/en/blog/zero-downtime-updates-with-terraform) - 인프라의 다운타임을 없애는 방법입니다.
- [Google Cloud Platform for 10$ a month using terraform](https://github.com/nufailtd/terraform-budget-gcp) - Terraform으로 보안 Google Kubernetes Cluster, Google Cloud Run 서비스 및 기타 인프라를 월 [10달러](https://nufailtd.github.io/budget-gcp/) 미만으로 생성하는 방법을 보여줍니다.
- [Infracost + Terraform + GitHub Actions = Automate Cloud Cost Management](https://medium.com/better-programming/infracost-terraform-github-actions-automate-cloud-cost-management-a62b329f2834) - Terraform 개발 중 Infracost를 가드레일로 활용해 클라우드 비용을 관리하는 방법입니다.
- [How To Wrap Your Terraform Provider for Pulumi](https://www.speakeasy.com/blog/pulumi-terraform-provider) - Terraform Provider를 Pulumi에 사용할 수 있도록 만드는 방법입니다.
- [How to Build an AWS Account Vending Machine](https://medium.com/@StackGuardian/how-to-build-an-aws-account-vending-machine-by-stackguardian-f2895e35a27b) - StackGuardian이 오케스트레이션하는 Terraform 스택을 이용한 AWS 계정 수명 주기 자동화 및 셀프서비스 관리입니다. SSM 기반 할당, EventBridge 정리 트리거, Tirith 정책 적용을 포함합니다.

### 다중 환경 구성

- [Terraform Design Patterns: the Terrafile](https://bensnape.com/2016/01/14/terraform-design-patterns-the-terrafile/) - Terrafile을 사용해 Terraform 프로젝트 내 모듈과 버전을 관리합니다.
- [Terraform, VPC, and why you want a tfstate file per env](https://charity.wtf/2016/03/30/terraform-vpc-and-why-you-want-a-tfstate-file-per-env/) - 대규모 프로젝트의 여러 환경에서 Terraform을 사용할 때 주의할 점과 이를 피하는 방법을 소개합니다.
- [Using Pipelines to Manage Environments with Infrastructure as Code](https://medium.com/@kief/https-medium-com-kief-using-pipelines-to-manage-environments-with-infrastructure-as-code-b37285a1cbf5) - 한 환경에서 다음 환경으로 인프라 변경을 처리하는 파이프라인 구축의 다양한 접근법을 설명합니다.

### Azure

- [Learning HashiCorp Terraform](https://web.archive.org/web/20201108000713/https://www.g10s.io/hashicorp-terraform/) - Azure 안내서입니다.
- [New Terraform Azure Automation Resources](https://bgelens.nl/terraform-automation-resources/) - Azure Automation 서비스에 관한 자료입니다.
- [Terraforming Azure PaaS](https://devkimchi.com/2019/01/21/terraforming-azure-paas/) - Azure에 PaaS 리소스를 배포합니다.
- [azure-az104](https://github.com/victorlane/azure-az104) - 랜딩 존 참조 아키텍처를 포함한 AZ-104 Azure 관리자 학습 노트 및 Terraform 실습 예제입니다.

### AWS

- [AWS Lambda the Terraform Way](https://github.com/nsriram/lambda-the-terraform-way) - Terraform을 사용해 함수 실행을 넘어 AWS Lambda를 깊이 이해합니다. S3, API Gateway, DynamoDB, Kinesis, SQS 통합 안내서도 포함합니다.
- [Managing AWS Lambda Functions with Terraform](https://spacelift.io/blog/terraform-aws-lambda) - AWS Lambda의 용도와 Terraform으로 AWS Lambda 함수를 관리하는 방법을 소개합니다.

### Google Cloud

- [Managing infrastructure as code with Terraform, Cloud Build, and GitOps](https://docs.cloud.google.com/docs/terraform/resource-management/managing-infrastructure-as-code) - Terraform, Cloud Build 및 GitOps로 인프라를 코드로 설정하고 관리합니다.
- [Getting started with Terraform on Google Cloud](https://docs.cloud.google.com/docs/terraform/create-vm-instance) - Terraform으로 Google Cloud에 VM을 만들고 기본 Python Flask 서버를 시작합니다.
- [Managing Cloud Infrastructure with Terraform](https://www.skills.google/course_templates/746) - Deploy Kubernetes Load Balancer Service with Terraform, HTTPS Content-Based Load Balancer with Terraform, Modular Load Balancing with Terraform - Terraform으로 Kubernetes Load Balancer 서비스, HTTPS 콘텐츠 기반 Load Balancer, 모듈형 로드 밸런싱(리전별 Load Balancer), 사용자 지정 Provider, Cloud SQL, Google Cloud와 AWS 간 VPN을 구현합니다.
- [Hashicorp Terraform Tutorials for Google Cloud](https://developer.hashicorp.com/terraform/tutorials/gcp-get-started) - Google Cloud에서 Terraform을 시작하는 안내서입니다.
- [IAC - Terraform and Terragrunt on Google Cloud](https://www.academeez.com/courses/terraform) - Terraform/OpenTofu와 Terragrunt를 사용해 Google Cloud 인프라를 만드는 오픈 소스 MIT 라이선스 강좌입니다.
- [Self-host n8n on Google Cloud Run](https://github.com/datawranglerai/self-host-n8n-on-gcr) - Cloud SQL, Secret Manager 및 Redis를 통한 선택적 Queue Mode를 활용해 Cloud Run에 n8n 워크플로 자동화를 배포하는 Terraform 구성과 안내서입니다.

### 기타

- [Sharing data between Terraform configurations](https://web.archive.org/web/20230927082422/https://jamesmckay.net/2016/09/sharing-data-between-terraform-configurations/) - 원격 상태를 사용해 Terraform 구성 간 데이터를 공유하는 방법을 보여줍니다.
- [The Segment AWS Stack](https://web.archive.org/web/20250322120753/https://segment.com/blog/the-segment-aws-stack/) - Terraform으로 구현한 인프라가 [The Million Dollar Engineering Problem](https://segment.com/blog/the-million-dollar-eng-problem/)을 해결한 [Segment](https://segment.com/)의 비하인드 스토리를 보여줍니다.
- [Top 3 Terraform Testing Strategies for Ultra-Reliable Infrastructure-as-Code](https://www.contino.io/insights/top-3-terraform-testing-strategies-for-ultra-reliable-infrastructure-as-code)
- [Two Weeks with Terraform](https://charity.wtf/2016/02/23/two-weeks-with-terraform/) - 실전에서 Terraform을 사용하며 얻은 경험과 운영 노하우를 소개합니다.
- [Terraform: Beyond the Basics with AWS](https://aws.amazon.com/blogs/apn/terraform-beyond-the-basics-with-aws/) - Terraform으로 샘플 AWS 아키텍처를 프로비저닝하는 데모를 설명합니다.
- [Terraform cost estimation](https://github.com/antonbabenko/terraform-cost-estimation) - Terraform plan(0.12+) 또는 상태 파일을 사용한 익명화 무료 비용 추정입니다. [terraform-cost-estimation.com](https://terraform-cost-estimation.com)에서도 이용할 수 있습니다.
- [How to Debug Terraform Projects: Tutorial](https://spacelift.io/blog/terraform-debug)
- [The terraform-docs GitHub Action: A Complete CI Setup Guide](https://devtoolhub.com/terraform-docs-github-action/) - terraform-docs로 모든 PR의 모듈 문서를 생성하고 자동 커밋합니다. CI에서 실패를 유발하는 OIDC/권한 문제도 다룹니다.

## 커뮤니티 모듈

여기에 없는 커뮤니티 모듈은 [Terraform Module Registry](https://registry.terraform.io/)를 참조하세요.

- [nis2shield/infrastructure](https://github.com/nis2shield/infrastructure) - NIS2 규정 준수 자동화 및 보안 인프라 배포를 위한 Terraform 모듈입니다.
- [rancher-terraform-digitalocean](https://github.com/lunagt/rancher-terraform-digitalocean) - DigitalOcean의 Rancher 서버입니다.
- [segmentio/stack](https://github.com/segmentio/stack) - AWS, Docker 및 ECS를 사용해 프로덕션 인프라를 구성합니다. :skull:
- [terraform-aws-account-lookup](https://github.com/be-bold/terraform-aws-account-lookup) - AWS 계정을 조회해 다양한 매핑 또는 전체 목록으로 출력하며, 검색 필터 적용 및 기존 태그에 따른 그룹화를 지원하는 Terraform 모듈입니다.
- [terraform-aws-alb](https://github.com/terraform-aws-modules/terraform-aws-alb) - AWS에 Application Load Balancer를 생성합니다(검증된 모듈).
- [terraform-aws-appconfig](https://github.com/terraform-aws-modules/terraform-aws-appconfig) - AWS AppConfig 리소스를 생성합니다.
- [terraform-aws-atlantis](https://github.com/terraform-aws-modules/terraform-aws-atlantis) - AWS Fargate에서 [Atlantis](https://runatlantis.io)를 실행하는 Terraform 구성을 만듭니다. Github, Gitlab 및 BitBucket을 지원합니다.
- [terraform-aws-autoscaling](https://github.com/terraform-aws-modules/terraform-aws-autoscaling) - Auto Scaling 그룹과 시작 구성을 만듭니다(검증된 모듈).
- [terraform-aws-customer-gateway](https://github.com/terraform-aws-modules/terraform-aws-customer-gateway) - AWS에 Customer Gateway를 생성합니다.
- [terraform-aws-datadog-forwarders](https://github.com/terraform-aws-modules/terraform-aws-datadog-forwarders) - 로그/메트릭을 Datadog으로 전달하는 AWS 리소스를 생성합니다.
- [terraform-aws-dms](https://github.com/terraform-aws-modules/terraform-aws-dms) - AWS DMS(Database Migration Service) 리소스를 생성합니다.
- [terraform-aws-dynamodb-table](https://github.com/terraform-aws-modules/terraform-aws-dynamodb-table) - AWS에 DynamoDB 테이블을 생성합니다.
- [terraform-aws-ec2-instance](https://github.com/terraform-aws-modules/terraform-aws-ec2-instance) - AWS에 EC2 인스턴스를 생성합니다.
- [terraform-aws-ecr](https://github.com/cloudposse/terraform-aws-ecr) - AWS ECR의 Docker 컨테이너 레지스트리를 관리합니다.
- [terraform-aws-ecs](https://github.com/terraform-aws-modules/terraform-aws-ecs) - AWS ECS 리소스를 생성합니다.
- [terraform-aws-efs](https://github.com/cloudposse/terraform-aws-efs) - EFS 파일 시스템을 정의합니다.
- [terraform-aws-eks](https://github.com/terraform-aws-modules/terraform-aws-eks) - AWS에 Elastic Kubernetes Service를 생성합니다(매우 인기 있는 모듈).
- [terraform-aws-elb](https://github.com/terraform-aws-modules/terraform-aws-elb) - AWS에 Elastic Load Balancer를 생성합니다(검증된 모듈).
- [terraform-aws-eventbridge](https://github.com/terraform-aws-modules/terraform-aws-eventbridge) - AWS EventBridge 리소스를 생성합니다.
- [terraform-aws-jenkins-ha-agents](https://github.com/neiman-marcus/terraform-aws-jenkins-ha-agents) - 고가용성(스팟) 에이전트를 사용하는 EC2 기반 Jenkins 배포입니다. 변경 불가능한 배포를 위해 EFS에서 실행되며 합리적인 기본값으로 완전히 사용자 지정할 수 있습니다.
- [terraform-aws-jenkins](https://github.com/cloudposse-archives/terraform-aws-jenkins) - Jenkins를 포함한 Docker 이미지를 빌드해 ECR 저장소에 저장한 뒤 Docker 스택을 실행하는 Elastic Beanstalk에 배포합니다. :skull:
- [terraform-aws-key-pair](https://github.com/cloudposse/terraform-aws-key-pair) - SSH 키 쌍(공개/개인 키)을 자동 생성합니다.
- [terraform-aws-lambda-auto-package](https://github.com/nozaq/terraform-aws-lambda-auto-package) - 소스 파일을 자동으로 빌드하고 Lambda 배포용으로 패키징하는 Lambda 함수를 정의하는 Terraform 모듈입니다.
- [terraform-aws-lambda](https://github.com/terraform-aws-modules/terraform-aws-lambda) - 의존성을 빌드하고 패키징하며 다양한 조합으로 AWS Lambda 리소스를 생성하는 Terraform 모듈입니다.
- [terraform-aws-managed-service-prometheus](https://github.com/terraform-aws-modules/terraform-aws-managed-service-prometheus) - AWS Managed Service for Prometheus(AMP) 리소스를 생성합니다.
- [terraform-aws-modules](https://github.com/terraform-aws-modules) - 커뮤니티가 지원하는 Terraform AWS 모듈 모음(공식 AWS 모듈 포함)입니다.
- [terraform-aws-msk-kafka-cluster](https://github.com/terraform-aws-modules/terraform-aws-msk-kafka-cluster) - AWS MSK(Managed Streaming for Kafka) 리소스를 생성합니다.
- [terraform-aws-notify-slack](https://github.com/terraform-aws-modules/terraform-aws-notify-slack) - Slack에 알림을 보내는 SNS 주제 및 Lambda 함수를 생성합니다.
- [terraform-aws-postgresql-rds](https://github.com/azavea/terraform-aws-postgresql-rds) - RDS에 PostgreSQL을 생성합니다.
- [terraform-aws-rds-aurora](https://github.com/terraform-aws-modules/terraform-aws-rds-aurora) - AWS에 RDS Aurora 클러스터 리소스를 생성합니다(검증된 모듈).
- [terraform-aws-rds-proxy](https://github.com/terraform-aws-modules/terraform-aws-rds-proxy) - AWS RDS Proxy 리소스를 생성합니다.
- [terraform-aws-rds](https://github.com/terraform-aws-modules/terraform-aws-rds) - AWS RDS 리소스를 생성합니다(검증된 모듈).
- [terraform-aws-redshift](https://github.com/terraform-aws-modules/terraform-aws-redshift) - Redshift 리소스를 생성합니다.
- [terraform-aws-route53](https://github.com/terraform-aws-modules/terraform-aws-route53) - Route53 리소스를 생성합니다.
- [terraform-aws-s3-bucket](https://github.com/terraform-aws-modules/terraform-aws-s3-bucket) - S3 버킷 리소스를 생성합니다.
- [terraform-aws-secure-baseline](https://github.com/nozaq/terraform-aws-secure-baseline) - CIS Amazon Web Services Foundations 기반의 보안 기준 구성으로 AWS 계정을 설정합니다.
- [terraform-aws-security-group](https://github.com/terraform-aws-modules/terraform-aws-security-group) - AWS에 EC2-VPC 보안 그룹을 생성합니다(검증된 모듈).
- [terraform-aws-ssh-bastion-service](https://github.com/joshuamkite/terraform-aws-ssh-bastion-service) - AWS에서 상태 비저장 서비스로 SSH 배스천을 배포하는 Terraform 계획입니다.
- [terraform-aws-transit-gateway](https://github.com/terraform-aws-modules/terraform-aws-transit-gateway) - Transit Gateway 리소스를 생성합니다.
- [terraform-aws-vpc](https://github.com/terraform-aws-modules/terraform-aws-vpc) - VPC 리소스를 생성합니다(검증되고 매우 인기 있는 모듈).
- [terraform-aws-vpn-gateway](https://github.com/terraform-aws-modules/terraform-aws-vpn-gateway) - VPN Gateway 리소스를 생성합니다.
- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Azure를 위한 Microsoft 소유의 공식 검증 모듈 모음으로, 일관된 인프라 배포를 위해 WAF 모범 사례를 코드화합니다.
- [terraform-azurerm-aks](https://github.com/kjanshair/terraform-azurerm-aks) - Azure에서 AKS 리소스를 생성합니다.
- [terraform-azurerm-iis](https://github.com/ghostinthewires/terraform-azurerm-iis-install) - Azure VM 인스턴스에 IIS 서버를 설치합니다.
- [terraform-azurerm-mysql](https://github.com/foreverXZC/terraform-azurerm-mysql) - Azure에 MySQL 데이터베이스를 생성합니다.
- [terraform-azurerm-redis](https://github.com/rahulkhengare/terraform-azurerm-redis) - Azure에 Redis를 생성합니다.
- [terraform-azurerm-sqlserver](https://github.com/metadevpro/terraform-azurerm-sqlserver-seed) - Azure에 SQL Server 데이터베이스를 생성합니다.
- [terraform-cloudflare-maintenance](https://github.com/adinhodovic/terraform-cloudflare-maintenance) - Cloudflare Workers를 사용해 유지보수 페이지를 만드는 모듈입니다.
- [terraform-digitalocean-droplet](https://registry.terraform.io/modules/terraform-digitalocean-modules/droplet/digitalocean/latest) - DigitalOcean Droplet 및 관련 리소스를 관리하는 Terraform 모듈입니다.
- [terraform-ecs-jenkins](https://github.com/shuaibiyy/terraform-ecs-jenkins) - Terraform을 사용해 AWS ECS에 Jenkins를 프로비저닝합니다.
- [terraform-gce-atlantis](https://github.com/runatlantis/terraform-gce-atlantis) - Google Compute Engine에서 [Atlantis](https://runatlantis.io)를 실행하는 Terraform 구성을 만듭니다.
- [terraform-google-project-factory](https://github.com/terraform-google-modules/terraform-google-project-factory) - Shared VPC, IAM, API 등을 포함한 Google Cloud Platform 프로젝트 생성 및 구성을 위한 의견이 반영된 도구입니다.
- [terraform-helm-carbon-intensity-exporter](https://github.com/fabiocicerchia/terraform-helm-carbon-intensity-exporter) - Kubernetes Carbon Intensity Exporter를 배포하는 Terraform/Helm 모듈입니다.
- [terraform-helm-cloud-carbon-footprint](https://github.com/fabiocicerchia/terraform-helm-cloud-carbon-footprint) - Kubernetes에 Cloud Carbon Footprint를 배포하는 Terraform/Helm 모듈입니다.
- [terraform-helm-kepler](https://github.com/fabiocicerchia/terraform-helm-kepler) - Helm을 통해 Kepler(Kubernetes 전력 프로파일링)를 배포하는 Terraform 모듈입니다.
- [terraform-kubestack](https://github.com/kbst/terraform-kubestack) - Kubernetes 플랫폼 엔지니어링 팀이 하나의 Terraform 코드베이스에서 클라우드 네이티브 스택 전체를 정의하고 GitOps로 안전하게 지속 발전시킬 수 있는 프레임워크입니다.
- [terraform-linode-k8s](https://registry.terraform.io/modules/linode/k8s/linode/latest) - Linode 인스턴스에 Kubernetes를 설치합니다.
- [terraform-nixos](https://github.com/nix-community/terraform-nixos) - NixOS 배포를 위해 설계된 Terraform 모듈 모음입니다.
- [terraform-static-website-s3-cloudfront](https://github.com/sergej-brazdeikis/terraform-static-website-s3-cloudfront) - 변수를 기반으로 AWS S3 및 CloudFront에 정적 웹사이트를 생성합니다.
- [tf_aws_bastion_s3_keys](https://github.com/terraform-community-modules/tf_aws_bastion_s3_keys) - AWS EC2에 배스천 호스트를 생성합니다.
- [typhoon](https://github.com/poseidon/typhoon) - Terraform을 사용하는 가볍고 무료인 Kubernetes 배포판입니다.

## 자체 호스팅 레지스트리

- [anthology](https://github.com/erikvanbrakel/anthology) - 공식 레지스트리를 대체하는 비공개 Terraform 레지스트리 구현입니다.
- [boring-registry](https://github.com/boring-registry/boring-registry) - API 키 인증 및 Blob 스토리지 지원을 제공하는 비공개 Terraform 모듈/Provider 레지스트리입니다.
- [citizen](https://github.com/outsideris/citizen) - 비공개 Terraform 모듈/Provider 레지스트리입니다.
- [nrkno/terraform-registry](https://github.com/nrkno/terraform-registry) - 모듈형 저장소 백엔드를 갖춘 비공개 Terraform 레지스트리입니다.
- [petra](https://github.com/devoteamgcloud/petra) - 비공개 Terraform 레지스트리 관리자입니다.
- [philips-labs/terraform-registry](https://github.com/philips-labs/terraform-registry) - GitHub에 호스팅된 임의 Terraform Provider 릴리스를 제공하는 Terraform 레지스트리입니다.
- [tapir](https://github.com/PacoVK/tapir) - 비공개 Terraform 레지스트리입니다.
- [terraform-simple-registry](https://github.com/apparentlymart/terraform-simple-registry) - Terraform 레지스트리 프로토콜의 간단한 구현입니다.
- [terramantle.dev](https://terramantle.dev) - 모듈 및 상태 정보를 중점적으로 살펴보고 종속성 관리를 해결하는 레지스트리입니다.
- [Terrareg](https://github.com/matthewjohn/terrareg) - Terraform 모듈 레지스트리입니다.
- [terustry](https://github.com/veepee-oss/terustry) - GitLab 또는 GitHub 릴리스의 프록시 역할을 하는 오픈 소스 Terraform Provider 레지스트리입니다.
- [terralist](https://github.com/terralist/terralist) - REST API로 관리할 수 있는 모듈 및 Provider용 비공개 Terraform 레지스트리입니다.

## 관리형 레지스트리

- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Well-Architected Framework에 맞춰 Azure 리소스 및 아키텍처 패턴을 위한 검증되고 표준을 준수하는 Terraform(및 Bicep) 모듈을 제공하는 Microsoft 공식 이니셔티브입니다.
- [cloudsmith](https://docs.cloudsmith.com/formats/terraform-modules-repository) - 내부 및 외부 클라이언트를 위한 관리형 패키지 호스팅 서비스입니다. :heavy_dollar_sign:
- [Terramantle](https://terramantle.dev) - 심층적인 모듈 인사이트, 종속성 매핑 및 상태 가시성을 갖춘 비공개 Terraform/OpenTofu 레지스트리입니다.

## Provider

### HashiCorp 지원 Provider

- [terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) - Amazon Web Services용 Provider입니다.
- [terraform-provider-azurerm](https://github.com/hashicorp/terraform-provider-azurerm) - Azure용 Provider입니다.
- [terraform-provider-docker](https://github.com/hashicorp/terraform-provider-docker) - Docker용 Provider입니다. :skull:
- [terraform-provider-google](https://github.com/hashicorp/terraform-provider-google) - Google Cloud Platform용 Provider입니다.
- [terraform-provider-helm](https://github.com/hashicorp/terraform-provider-helm) - Helm용 Provider입니다.
- [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) - Kubernetes용 Provider입니다.
- [terraform-provider-vsphere](https://github.com/vmware/terraform-provider-vsphere) - VMware vSphere용 Provider입니다.

### 벤더 지원 Provider

- [terraform-provider-alicloud](https://github.com/aliyun/terraform-provider-alicloud) - Alibaba Cloud용 Provider입니다.
- [terraform-provider-artifactory](https://github.com/jfrog/terraform-provider-artifactory) - [JFrog Artifactory](https://jfrog.com/artifactory/)용 Provider입니다.
- [terraform-provider-atlas](https://github.com/ariga/terraform-provider-atlas) - [Atlas](https://atlasgo.io/)용 Provider입니다.
- [terraform-provider-azapi](https://github.com/Azure/terraform-provider-azapi) - Azure Resource Manager REST API용 Provider입니다.
- [terraform-provider-azuredevops](https://github.com/microsoft/terraform-provider-azuredevops) - Azure DevOps(VSTS)용 Provider입니다.
- [terraform-provider-buildkite](https://github.com/buildkite/terraform-provider-buildkite) - Buildkite용 Provider입니다.
- [terraform-provider-checkly](https://github.com/checkly/terraform-provider-checkly) - API 및 E2E 모니터링을 위한 [Checkly](https://www.checklyhq.com) 리소스를 관리합니다.
- [terraform-provider-coder](https://github.com/coder/terraform-provider-coder) - [Coder](https://coder.com)용 Provider입니다.
- [terraform-provider-confluent](https://github.com/confluentinc/terraform-provider-confluent) - Confluent용 Provider입니다.
- [terraform-provider-datadog](https://github.com/DataDog/terraform-provider-datadog) - Datadog용 Provider입니다.
- [terraform-provider-devhelm](https://github.com/devhelmhq/terraform-provider-devhelm) - 가동 시간 모니터링용 [DevHelm](https://devhelm.io) Provider로, 모니터, 알림 채널 및 상태 페이지를 코드로 관리합니다.
- [terraform-provider-digitalocean](https://github.com/digitalocean/terraform-provider-digitalocean) - DigitalOcean용 Provider입니다.
- [terraform-provider-dominos](https://github.com/nat-henderson/terraform-provider-dominos) - Dominos Pizza용 Provider입니다.
- [terraform-provider-elasticstack](https://github.com/elastic/terraform-provider-elasticstack) - Elasticsearch 및 Kibana용 Provider입니다.
- [terraform-provider-env0](https://github.com/env0/terraform-provider-env0) - [env0](https://www.env0.com/)용 Provider입니다.
- [terraform-provider-featureflip](https://github.com/canopy-labs/terraform-provider-featureflip) - 프로젝트, 환경, 플래그, 타기팅 규칙, 세그먼트 및 SDK 키 등 [Featureflip](https://featureflip.io/) 기능 플래그를 관리합니다.
- [terraform-provider-github](https://github.com/integrations/terraform-provider-github) - GitHub용 Provider입니다.
- [terraform-provider-gitlab](https://github.com/gitlabhq/terraform-provider-gitlab) - GitLab용 Provider입니다.
- [terraform-provider-graphql](https://github.com/sullivtr/terraform-provider-graphql) - GraphQL 쿼리 및 뮤테이션용 Provider입니다.
- [terraform-provider-hcloud](https://github.com/hetznercloud/terraform-provider-hcloud) - Hetzner Cloud용 Provider입니다.
- [terraform-provider-healthchecksio](https://github.com/kristofferahl/terraform-provider-healthchecksio) - healthchecks.io 리소스를 관리하는 Provider입니다.
- [terraform-provider-heroku](https://github.com/heroku/terraform-provider-heroku) - Heroku용 Provider입니다.
- [terraform-provider-ibm](https://github.com/IBM-Cloud/terraform-provider-ibm) - IBM Cloud용 Provider입니다.
- [terraform-provider-iterative](https://github.com/iterative/terraform-provider-iterative) - 머신 러닝을 고려해 제작된 Terraform 플러그인입니다.
- [terraform-provider-k8s](https://github.com/banzaicloud/terraform-provider-k8s) - 모든 매니페스트에서 작동하는 간단한 Kubernetes Provider입니다.
- [terraform-provider-keycloak](https://github.com/keycloak/terraform-provider-keycloak) - [Keycloak](https://www.keycloak.org/) ID Provider 서버 설정을 관리하는 Provider입니다.
- [terraform-provider-linode](https://github.com/btobolaski/terraform-provider-linode) - Linode용 Provider입니다.
- [terraform-provider-nxip](https://github.com/uk-sw/terraform-provider-nxip) - 클라우드 및 온프레미스 전반에 풀 기반 CIDR 할당 기능을 제공하는 IPAM인 [nxip](https://nx-ip.com) Provider입니다. :heavy_dollar_sign:
- [terraform-provider-openstack](https://github.com/terraform-provider-openstack/terraform-provider-openstack) - OpenStack용 플러그인입니다.
- [terraform-provider-panos](https://github.com/PaloAltoNetworks/terraform-provider-panos) - [Palo Alto Networks](https://www.paloaltonetworks.com/network-security)의 차세대 방화벽용 Provider입니다.
- [terraform-provider-phare](https://github.com/phare/terraform-provider-phare) - [Phare](https://phare.io)용 Terraform Provider입니다.
- [terraform-provider-planetscale](https://github.com/planetscale/terraform-provider-planetscale) - [PlanetScale](https://planetscale.com)용 Terraform Provider입니다(Vitess 및 Postgres).
- [terraform-provider-qovery](https://github.com/Qovery/terraform-provider-qovery) - [Qovery](https://www.qovery.com/)용 Provider입니다. AWS, GCP, Azure 및 Scaleway에서 Kubernetes 배포, 환경, 애플리케이션, 데이터베이스, Helm 차트 및 Terraform 서비스를 관리합니다.
- [terraform-provider-pingdom](https://github.com/russellcardullo/terraform-provider-pingdom) - Pingdom 리소스를 관리하는 Provider입니다. :skull:
- [terraform-provider-rancher2](https://github.com/rancher/terraform-provider-rancher2) - Rancher v2용 Provider입니다.
- [terraform-provider-scalr](https://github.com/Scalr/terraform-provider-scalr) - [Scalr](https://www.scalr.com/)용 Provider입니다.
- [terraform-provider-secrethub](https://github.com/secrethub/terraform-provider-secrethub) - SecretHub용 Provider입니다. :skull:
- [terraform-provider-sigsci](https://github.com/signalsciences/terraform-provider-sigsci) - Signal Sciences용 Provider입니다.
- [terraform-provider-snowflake](https://github.com/snowflakedb/terraform-provider-snowflake) - Snowflake 데이터 웨어하우스용 Provider입니다.
- [terraform-provider-spinnaker](https://github.com/armory-io/terraform-provider-spinnaker) - [Spinnaker](https://spinnaker.io/)용 Provider입니다.
- [terraform-provider-spotinst](https://github.com/spotinst/terraform-provider-spotinst) - spotinst용 Provider입니다.
- [terraform-provider-stripe](https://github.com/franckverrot/terraform-provider-stripe) - Stripe용 Provider입니다.
- [terraform-provider-ucloud](https://github.com/ucloud/terraform-provider-ucloud) - UCloud 리소스를 관리하는 Provider입니다.
- [terraform-provider-uptimerobot](https://github.com/louy/terraform-provider-uptimerobot) - uptimerobot 리소스를 관리하는 Provider입니다. :skull:
- [terraform-provider-vaulted](https://github.com/sumup-oss/terraform-provider-vaulted) - Terraform을 통해 암호화된 HashiCorp Vault 시크릿을 Git 등의 SCM에 저장할 수 있습니다.
- [terraform-provider-scp](https://github.com/splunk/terraform-provider-scp) - Splunk Cloud Platform용 Provider입니다.

### 커뮤니티 Provider

- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Coolify용 Terraform Provider입니다.
- [terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) - Terraform Docker Provider입니다.
- [terraform-provider-minio](https://github.com/aminueza/terraform-provider-minio) - MinIO S3 버킷 및 IAM 사용자를 관리하는 Terraform Provider입니다.
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Multipass용 Terraform Provider입니다.
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - OpenRouter를 코드로 관리합니다. 워크스페이스, 가드레일, 지출 한도 API 키 및 조직 구성원을 지원합니다. Terraform 및 OpenTofu를 지원합니다.
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - Azure 비용 추정 및 비용 가드레일을 위한 Terraform Provider입니다.
- [terraform-provider-proxmox](https://github.com/Telmate/terraform-provider-proxmox) - Terraform Proxmox Provider입니다.
- [terraform-provider-seerr](https://github.com/Josh-Archer/terraform-provider-seerr) - Seerr(Overseerr/Jellyseerr)용 Terraform Provider입니다.
- [terraform-provider-terracurl](https://github.com/devops-rob/terraform-provider-terracurl) - 대상 엔드포인트에 관리형 및 비관리형 API 호출을 수행하는 Provider입니다.
- [terraform-provider-uname](https://github.com/julienlevasseur/terraform-provider-uname) - Terraform용 Uname Provider입니다.
- [terraform-provider-value](https://github.com/pseudo-dynamic/terraform-provider-value) - Terraform용 Value Provider입니다.
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Multipass용 Terraform Provider입니다.
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - OpenRouter를 코드로 관리합니다. 워크스페이스, 가드레일, 지출 한도 API 키 및 조직 구성원을 지원합니다. Terraform 및 OpenTofu를 지원합니다.
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - Azure 비용 추정 및 비용 가드레일을 위한 Terraform Provider입니다.
- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Coolify용 Terraform Provider입니다.
- [terraform-provider-appstore](https://github.com/elevenode/terraform-provider-appstore) - Apple App Store Connect용 Terraform Provider입니다.
- [terraform-provider-expo](https://github.com/elevenode/terraform-provider-expo) - Expo Application Services(EAS)용 Terraform Provider입니다.
- [terraform-provider-paddle](https://github.com/vivantel/terraform-provider-paddle) - Paddle Billing 카탈로그 리소스, 수명 주기 작업 및 조회 데이터 소스를 위한 Terraform Provider입니다.
- [terraform-provider-seekrit](https://github.com/seekritdev/terraform-provider-seekrit) - seekrit 앱, 환경, 그룹, 서비스 토큰, 키 권한 및 시크릿을 관리합니다. 쓰기 전용 인수와 임시 리소스를 사용해 시크릿 값이 상태에 저장되지 않도록 합니다.

## 테스트

- [clarity](https://github.com/xchapter7x/clarity) - Terraform 단위 테스트용 선언형 테스트 프레임워크입니다. :skull:
- [kitchen-terraform](https://github.com/newcontext-oss/kitchen-terraform) - Test Kitchen 플러그인 모음을 제공하여 Terraform 구성을 적용하고 InSpec 제어로 생성된 Terraform 상태를 검증할 수 있습니다. :skull:
- [rspec-terraform](https://github.com/bsnape/rspec-terraform) - Terraform 모듈용 RSpec 테스트입니다. :skull:
- [terraform_validate](https://github.com/elmundio87/terraform_validate) - 사용자 정의 표준 적용을 지원합니다. :skull:
- [terraform-compliance](https://github.com/terraform-compliance/cli) - Terraform 파일용 BDD 테스트입니다.
- [terratest](https://github.com/gruntwork-io/terratest) - 인프라 코드의 자동화된 테스트를 더 쉽게 작성할 수 있도록 해주는 Go 라이브러리입니다.

## 도구

- [AIaC](https://github.com/gofireflyio/aiac) - 인공지능 기반 Infrastructure-as-Code 생성기입니다.
- [AirIAM](https://github.com/bridgecrewio/AirIAM) - AWS IAM용 최소 권한 Terraform 실행 프레임워크 도구입니다.
- [asdf](https://github.com/asdf-community/asdf-hashicorp) - HashiCorp 플러그인으로, [asdf](https://github.com/asdf-vm/asdf) 버전 관리자용입니다.
- [astro](https://github.com/uber/astro/) - 여러 Terraform 실행을 하나의 명령으로 관리하는 도구입니다. :ghost:
- [atlantis](https://github.com/runatlantis/atlantis) - GitHub를 통한 Terraform 협업을 위한 통합 워크플로입니다.
- [atmos](https://github.com/cloudposse/atmos) - 깊게 병합된 YAML을 모듈 입력값으로 변환하는 범용 도구입니다.
- [aws2tf](https://github.com/aws-samples/aws2tf) - 기존 AWS 리소스를 Terraform으로 가져오고 Terraform HCL 코드를 출력합니다.
- [aztfexport](https://github.com/Azure/aztfexport) - 기존 Azure 리소스를 Terraform 관리 대상으로 가져오는 도구입니다.
- [AzureNamer](https://azurenamingconventions.com/) - 200개 이상의 Azure 리소스 유형에 대해 CAF 규격을 준수하는 이름을 생성하고, 실시간 길이 및 문자 검증과 함께 Terraform locals로 내보냅니다.
- [balcony](https://oguzhan-yilmaz.github.io/balcony/) - AWS API를 쉽게 조회하는 CLI 도구입니다. Terraform import 블록과 실제 Terraform 리소스 코드도 생성합니다.
- [bare-devcontainer/templates](https://github.com/bare-devcontainer/templates/tree/main/src/terraform) - terraform-ls와 재빌드 친화적 캐시를 갖춘 보안 중심 Terraform 개발 컨테이너입니다. 기본 이미지는 [bare-devcontainer/images](https://github.com/bare-devcontainer/images/tree/main/terraform)에 있습니다.
- [blast radius](https://github.com/28mm/blast-radius) - Terraform 종속성 그래프를 인터랙티브하게 시각화합니다. :skull:
- [cf-terraforming](https://github.com/cloudflare/cf-terraforming) - 기존 Cloudflare 리소스를 Terraform으로 가져오는 작업을 돕는 명령줄 유틸리티입니다.
- [cfnctl](https://github.com/rogerwelin/cfnctl) - Cfnctl은 Terraform CLI와 같은 경험을 AWS CloudFormation에 제공합니다.
- [Checkov](https://github.com/bridgecrewio/checkov/) - terraform>=0.12용 Terraform 정적 분석 도구입니다.
- [cloud-audit](https://github.com/gebalamariusz/cloud-audit) - 잘못된 구성을 수정하는 Terraform 코드를 생성하는 AWS 보안 감사 CLI 및 수정 엔진입니다.
- [CloudBurn](https://github.com/towardsthecloud/cloudburn) - CI 및 실제 AWS 계정의 Terraform과 CloudFormation에 대해 AWS 비용 정책을 검사합니다.
- [Coder](https://coder.com/) - Coder는 Terraform을 통해 인프라에 소프트웨어 개발 환경을 프로비저닝합니다.
- [coretech/terrafile](https://github.com/coretech/terrafile) - Terraform에서 사용할 GitHub 외부 모듈을 체계적으로 관리합니다(Go로 작성). :skull:
- [Cynative](https://github.com/cynative/cynative) - Terraform 구성을 검토하고 읽기 전용 클라우드 API를 통해 실제 인프라를 조사하는 오픈 소스 보안 에이전트 프레임워크입니다.
- [Datadef](https://datadef.io/repo-to-diagram) - Terraform 저장소에서 아키텍처 다이어그램과 문서를 생성합니다. `terraform init` 실행이나 상태 조회 없이 `.tf` 파일을 분석하고, 환경별 개수를 포함해 모듈을 영역으로 표시하며 매일 다시 동기화합니다. :heavy_dollar_sign:
- [demonolith](https://github.com/schrieksoft/demonolith) - `demonolith refactor`로 코드를 옮기고 `demonolith migrate`로 더 작은 .tfstate 파일로 이전해 거대한 Terraform 프로젝트를 분할합니다.
- [driftctl](https://github.com/snyk/driftctl) - 인프라 드리프트를 감지, 추적하고 알림을 보냅니다. :skull:
- [drifthound](https://github.com/drifthoundhq/drifthound) - 기록 추적 및 알림을 제공하는 지속적 인프라 드리프트 감지 도구입니다.
- [dxw/terrafile](https://github.com/dxw/terrafile) - Terraform에서 사용할 GitHub 외부 모듈을 체계적으로 관리합니다(Ruby로 작성).
- [flora](https://github.com/ketchoop/flora) - Terraform 버전 관리자입니다.
- [fogg](https://github.com/chanzuckerberg/fogg) - Terraform 저장소 관리의 반복적인 수고를 없애는 도구입니다.
- [former2](https://github.com/iann0036/former2) - AWS 계정의 기존 리소스에서 Terraform 구성을 생성합니다.
- [fuzzy-terraform-rm](https://github.com/paololazzari/fuzzy-terraform-rm) - Terraform 상태에서 리소스를 제거하는 퍼지 검색 CLI 도구입니다.
- [gaia](https://github.com/gaia-app/gaia) - 모듈용 Terraform 🌍 UI이자 셀프서비스 인프라 👨‍💻 도구입니다. :skull:
- [hcl2json](https://github.com/tmccombs/hcl2json) - hcl2를 JSON으로 변환합니다.
- [hcldump](https://github.com/magodo/hcldump) - HCL(v2) 추상 구문 트리를 덤프합니다.
- [hcledit (mercari)](https://github.com/mercari/hcledit) - HCL 구성을 편집하는 Go 패키지입니다.
- [hcledit (minamijoyo)](https://github.com/minamijoyo/hcledit) - HCL용 명령줄 편집기입니다.
- [hclgrep](https://github.com/magodo/hclgrep) - HCL(v2)용 구문 기반 grep입니다.
- [hq](https://github.com/miller-time/hq) - 명령줄 HCL 처리기입니다.
- [iam-policy-json-to-terraform](https://github.com/flosell/iam-policy-json-to-terraform) - JSON 형식 IAM 정책을 Terraform aws_iam_policy_document로 변환하는 소형 도구입니다.
- [Infracost](https://github.com/infracost/infracost) - CLI 및 풀 리퀘스트에서 Terraform 클라우드 비용을 추정합니다.
- [inframap](https://github.com/cycloidio/inframap) - tfstate 또는 HCL을 읽어 Provider별 그래프를 생성하고 가장 중요하고 관련 있는 리소스만 표시합니다.
- [InfraScan](https://infrascan.soldevelo.com) - Terraform, AWS 및 Kubernetes의 비용 및 보안 분석을 위한 고급 인프라 감사 도구입니다.
- [InfraSketch](https://infrasketch.cloud) - Terraform HCL 및 Docker Compose를 아키텍처 다이어그램으로 시각화하는 무료 브라우저 도구입니다. AWS와 Azure를 지원하며 가입이나 자격 증명이 필요 없습니다.
- [json2hcl](https://github.com/kvz/json2hcl) - JSON과 HCL 간 변환을 수행합니다. :ghost:
- [k2tf](https://github.com/sl1pm4t/k2tf) - Kubernetes YAML을 Terraform HCL로 변환합니다.
- [Kapitan](https://github.com/kapicorp/kapitan) - 인벤토리 기반 템플릿에서 Terraform/OpenTofu JSON 및 기타 인프라 구성을 생성합니다.
- [KICS](https://github.com/Checkmarx/kics) - IaC 프로젝트에서 보안 취약점, 규정 준수 문제 및 인프라 구성 오류를 검사합니다. Terraform 프로젝트, Kubernetes 매니페스트, Dockerfile, AWS CloudFormation 템플릿 및 Ansible 플레이북을 지원합니다.
- [layerform](https://github.com/briefercloud/layerform) - 엔지니어가 일반 `.tf` 파일을 사용해 재사용 가능한 환경 스택을 만들도록 돕습니다. 여러 “스테이징” 환경에 적합합니다. :skull:
- [library.tf](https://library.tf) - Terraform 및 OpenTofu의 레지스트리 정보를 제공할 뿐 아니라 의사 결정에 필요한 인사이트도 제공합니다. 버그가 없고 지원 및 유지 관리가 잘되는 모듈이나 Provider를 빠르게 찾을 수 있습니다.
- [modules.tf-lambda](https://github.com/antonbabenko/modules.tf-lambda) - [Cloudcraft.co](https://cloudcraft.co)로 만든 시각적 다이어그램에서 Terraform 인프라 코드를 생성합니다.
- [para](https://github.com/paraterraform/para) - The missing 3rd-party plugin manager and a "Swiss army knife" for Terraform/Terragrunt - Terraform/Terragrunt를 위한 필수 서드파티 플러그인 관리자이자 “스위스 군용 칼”입니다. 하나의 도구로 모든 워크플로를 지원합니다. :skull:
- [pike](https://github.com/jamesWoolfenden/pike) - Terraform 구축에 필요한 권한 또는 IAM 정책을 계산합니다.
- [pipeform](https://github.com/magodo/pipeform) - Terraform 런타임 TUI입니다.
- [platform-skills](https://github.com/nitinjain999/platform-skills) - Terraform용 AI 지원 현장 핸드북입니다. IAM 최소 권한 검토, 영향 범위 분석, 상태 영향, Provider 제약 및 롤백 계획을 지원합니다. Claude, Codex, Cursor 및 Copilot 플러그인으로 작동합니다.
- [pluralith](https://www.pluralith.com/) - Terraform 상태 시각화 및 인프라 문서 자동 생성 도구입니다. :heavy_dollar_sign:
- [pre-commit-terraform](https://github.com/antonbabenko/pre-commit-terraform) - Terraform 및 Terragrunt용 pre-commit Git 훅입니다. 자동 포맷, 검증, 문서 업데이트, 보안 검사, 비용 추정 등을 수행합니다.
- [pretf](https://github.com/raymondbutcher/pretf) - Python으로 Terraform 구성을 생성하는 즉시 사용 가능한 Terraform 래퍼입니다. [pretf 문서](https://pretf.readthedocs.io/en/latest/)를 참조하세요. :skull:
- [prettyplan for TF 0.12+](https://github.com/cloudandthings/terraform-pretty-plan) - 대규모 Terraform 계획을 쉽게 확인할 수 있도록 돕는 작은 도구입니다. [온라인 버전](https://cloudandthings.github.io/terraform-pretty-plan/)도 이용할 수 있습니다.
- [prettyplan](https://github.com/chrislewisdev/prettyplan) - 대규모 Terraform 계획을 쉽게 확인할 수 있도록 돕는 작은 도구입니다. [온라인 버전](https://chrislewisdev.github.io/prettyplan/)도 이용할 수 있습니다. :ghost:
- [pug](https://github.com/leg100/pug) - Terraform 고급 사용자를 위한 터미널 사용자 인터페이스입니다.
- [pytest-terraform](https://github.com/cloud-custodian/pytest-terraform) - 픽스처 및 오프라인 재생 기능을 제공하는 pytest Terraform 플러그인입니다.
- [python-terrafile](https://github.com/claranet/python-terrafile) - Terraform에서 사용할 GitHub 외부 모듈을 체계적으로 관리합니다.
- [regula](https://github.com/fugue/regula) - 배포 전에 Terraform IaC의 AWS, Azure 및 Google Cloud 보안 구성 오류와 규정 위반 가능성을 평가합니다.
- [redc](https://github.com/wgpsec/redc) - Alibaba Cloud, Tencent Cloud, AWS 등 멀티 클라우드 배포를 지원하는 차세대 레드팀 인프라 자동화 도구입니다. 레드팀 환경을 생성, 구성 및 삭제하는 원클릭 배포 기능을 제공합니다.
- [renovate-config](https://github.com/SpotOnInc/renovate-config) - 특히 DevOps 사용자를 위한 Renovatebot 공유 구성 프리셋입니다.
- [Riftmap](https://riftmap.dev) - Terraform, Docker, Helm 등을 포함하는 여러 저장소의 인프라를 분석해 종속 관계와 변경 시 손상되는 부분을 시각화하는 저장소 간 종속성 및 변경 영향 분석 엔진입니다.
- [rover](https://github.com/im2nguyen/rover) - 인터랙티브 Terraform 상태 및 구성 탐색기입니다.
- [ruby-terraform](https://github.com/infrablocks/ruby_terraform) - Terraform 명령을 실행하는 간단한 Ruby 래퍼입니다.
- [sato](https://github.com/JamesWoolfenden/sato) - 기존 CloudFormation을 Terraform으로 변환하도록 돕습니다.
- [scenery](https://github.com/dmlittle/scenery) - Terraform 계획 출력을 보기 좋게 만드는 또 다른 도구입니다. :ghost: :skull:
- [scratchrelaxtv](https://github.com/YakDriver/scratchrelaxtv) - Simple Python tool to help with module development - 모듈 개발을 돕는 간단한 Python 도구입니다. `main.tf`에서 변수를 추출해 `variables.tf`를 생성하고 모듈 사용 예제를 만듭니다.
- [serverless.tf - Doing serverless with Terraform](https://serverless.tf/) - Terraform을 사용해 AWS에서 서버리스 애플리케이션 및 인프라를 개발, 빌드, 배포 및 보호하는 의견이 반영된 오픈 소스 프레임워크입니다. [자세히 보기](https://github.com/antonbabenko/serverless.tf).
- [Shieldly](https://github.com/shieldly-io/cli) - Terraform으로 생성한 IAM 정책과 CloudFormation을 AI로 분석해 권한이 위험한 이유와 해결 방법을 설명합니다. 무료 티어, CLI 및 GitHub Action을 제공합니다.
- [Shisho](https://github.com/flatt-security/shisho) - Terraform용 경량 정적 분석기입니다.
- [Speakeasy](https://www.speakeasy.com/) - OpenAPI 사양에서 Terraform Provider를 생성합니다.
- [stacks](https://github.com/cisco-open/stacks) - Terraform 코드 전처리기입니다.
- [SyncVey](https://github.com/MR-TABATA/SyncVey) - tfstate와 실제 AWS 상태 간 속성 수준 드리프트 감지, 예약 검사 및 미들웨어 EOL 알림을 제공하는 자체 호스팅 AWS 자산 원장입니다.
- [tads-boilerplate](https://github.com/Thomvaill/tads-boilerplate) - Ansible과 Terraform의 강력함에 Docker Swarm의 단순함을 결합해 IaC와 DevOps 모범 사례를 제공합니다.
- [tau](https://github.com/avinor/tau) - 여러 배포, 종속성 및 시크릿을 관리하는 Terraform용 경량 래퍼입니다. :skull:
- [tenv](https://github.com/tofuutils/tenv) - OpenTofu/Terraform/Terragrunt 버전 관리자입니다.
- [terraboard](https://github.com/camptocamp/terraboard) - Terraform 상태를 검사하는 웹 대시보드입니다.
- [terraboot](https://github.com/MastodonC/terraboot) - Terraform 구성을 생성하고 실행하는 DSL입니다.
- [terracognita](https://github.com/cycloidio/terracognita) - 기존 클라우드 Provider에서 데이터를 읽어(역 Terraform) Terraform 구성으로 인프라 코드를 생성합니다.
- [terracost](https://github.com/cycloidio/terracost) - CLI에서 Terraform 클라우드 비용을 추정합니다.
- [terracove](https://elementtech.github.io/terracove/) - Terraform diff 및 커버리지를 확인하기 위해 디렉터리 트리를 재귀적으로 테스트합니다.
- [TerraDepot](https://github.com/derBroBro/TerraDepot) - 기본 HTTP 원격 백엔드를 기반으로 하는 Terraform 상태 저장소입니다. AWS S3에서 tfstate를 중앙 관리할 수 있습니다.
- [TerraDrift](https://github.com/niravraychura/terradrift) - CI 및 cron을 위한 자체 호스팅 Terraform/OpenTofu 드리프트 CLI입니다(계획 기반이며 관리되지 않는 리소스 인벤토리는 아님).
- [terradozer](https://github.com/chenrui333/terradozer) - 구성 파일 없이 Terraform destroy를 실행합니다.
- [terraeasy](https://github.com/jaceq/terraeasy) - 간편한 Terraform 래퍼입니다.
- [terraform-ai-skills](https://github.com/anmolnagpal/terraform-ai-skills) - GitHub Copilot, Claude 및 ChatGPT용 AI 기반 기술로, AWS, GCP, Azure 및 DigitalOcean의 10~200개 이상 저장소에서 Provider 업그레이드, 워크플로 표준화 및 릴리스 등 대량 Terraform 모듈 관리를 자동화합니다.
- [terraform-aws-clickops-notifier](https://github.com/cloudandthings/terraform-aws-clickops-notifier) - AWS Console에서 수행된 작업을 알림으로 받습니다.
- [terraform-bundle](https://github.com/hashicorp/terraform/tree/main/tools/terraform-bundle) - Terraform 바이너리와 Provider 바이너리를 포함하는 번들을 쉽게 빌드합니다. CI 및 네트워크 격리된 Terraform Enterprise에 유용합니다.
- [terraform-cdk](https://github.com/hashicorp/terraform-cdk) - Terraform용 CDK(Cloud Development Kit)를 사용하면 익숙한 프로그래밍 언어로 클라우드 인프라를 정의하고 HashiCorp Terraform을 통해 프로비저닝할 수 있습니다.
- [terraform-cleaner](https://github.com/sylwit/terraform-cleaner) - Terraform 모듈에서 사용되지 않는 변수를 찾아내는 소형 유틸리티입니다.
- [terraform-credentials-vault](https://github.com/oulman/terraform-credentials-vault) - 환경 변수를 통해 Terraform 네이티브 서비스(비공개 모듈 레지스트리, Terraform Cloud 등)의 자격 증명을 제공하는 Terraform “자격 증명 도우미” 플러그인입니다.
- [terraform-diff](https://github.com/contentful-labs/terraform-diff) - Terraform plan 및 apply를 실행해야 하는 위치를 항상 파악하세요!
- [terraform-docs](https://github.com/terraform-docs/terraform-docs) - Terraform 모듈에서 문서를 빠르게 생성하는 유틸리티입니다.
- [terraform-graph-beautifier](https://github.com/pcasteran/terraform-graph-beautifier) - 거의 사용할 수 없는 terraform graph 명령 출력을 더 의미 있고 설명적인 형태로 변환하는 명령줄 도구입니다.
- [terraform-iam-policy-validator](https://github.com/awslabs/terraform-iam-policy-validator) - Terraform 템플릿의 AWS IAM 정책을 AWS IAM 모범 사례에 따라 검증하는 CLI입니다.
- [terraform-landscape](https://github.com/coinbase/terraform-landscape) - Terraform plan 출력을 더 읽기 쉽고 이해하기 쉽게 개선합니다(0.11 이하만 지원).
- [terraform-operator](https://github.com/GalleyBytes/terraform-operator) - Terraform 작업을 처리하는 Kubernetes CRD입니다.
- [terraform-plan-parser](https://github.com/lifeomic/terraform-plan-parser) - `terraform plan`의 표준 출력을 파싱해 JSON으로 변환하는 명령줄 유틸리티 및 JavaScript API입니다. :ghost:
- [terraform-provisioner](https://github.com/shuaibiyy/terraform-provisioner) - 동일한 Terraform 스크립트의 여러 프로비저닝을 관리하는 도구입니다.
- [terraform-rake-tasks](https://github.com/gina-alaska/terraform-rake-tasks) - Terraform 계획 관리를 위한 공유 Rake 작업입니다.
- [terraform-repl](https://github.com/paololazzari/terraform-repl) - 더 나은 인터랙티브 콘솔 경험을 제공하는 Terraform console 래퍼입니다.
- [Terraform-Visual](https://github.com/hieven/terraform-visual) - Terraform 계획을 시각화하는 간단하면서도 강력한 도구입니다.
- [terravision](https://github.com/patrickchugh/terravision) - 공식 AWS/Azure/GCP 아이콘과 디자인 표준을 사용해 Terraform 코드에서 전문적인 클라우드 아키텍처 다이어그램을 생성합니다. CI/CD 통합을 갖추고 완전히 클라이언트 측에서 실행됩니다.
- [terraform.py](https://github.com/mantl/terraform.py) - Terraform 상태 파일을 분석하는 Ansible 동적 인벤토리 스크립트입니다. :skull:
- [terraformer](https://github.com/chenrui333/terraformer) - 기존 인프라에서 Terraform 파일을 생성하는 CLI 도구입니다. 다수의 Provider를 지원합니다.
- [terraforming](https://github.com/dtan4/terraforming) - 기존 AWS 리소스를 Terraform 형식(tf, tfstate)으로 내보냅니다. `terraformer`와 유사합니다. :skull:
- [terraformize](https://github.com/naorlivne/terraformize) - 간단한 REST API 엔드포인트를 통해 Terraform 모듈을 적용/삭제합니다. :skull:
- [terraformsh](https://github.com/pwillis-els/terraformsh) - 더 쉬운 CLI UX와 DRY 계층형 구성을 위한 Bash 래퍼입니다.
- [terragrunt-atlantis-config](https://github.com/transcend-io/terragrunt-atlantis-config) - Terragrunt 프로젝트용 Atlantis 구성을 생성합니다.
- [terragrunt](https://github.com/gruntwork-io/terragrunt) - Terraform 구성을 DRY하게 유지하고 여러 Terraform 모듈을 다루며 원격 상태를 관리하기 위한 추가 도구를 제공하는 경량 Terraform 래퍼입니다.
- [terrahelp](https://github.com/opencredo/terrahelp) - Terraform 작업에 때때로 유용한 보조 기능을 제공하는 명령줄 유틸리티입니다.
- [terrahub](https://github.com/tfxor/terrahub) - 콘솔에 매끄럽게 통합되는 Terraform 자동화 및 오케스트레이션 도구입니다. console.terrahub.io의 기업용 GUI에서 Terraform 실행을 실시간으로 확인하고 과거 실행 기록을 감사 및 보고할 수 있습니다. :heavy_dollar_sign:
- [terramagic](https://github.com/miltlima/terramagic) - 폴더와 Terraform 파일 생성을 자동화하는 Python 기반 마법사 도구입니다.
- [terramate](https://github.com/terramate-io/terramate) - 변경 감지 및 코드 생성 기능을 제공하는 다중 Terraform 스택 관리 도구입니다.
- [terrap-cli](https://github.com/sirrend/terrap-cli) - Terrap - 인프라를 스캔하고 필요한 변경 사항을 식별하는 강력한 CLI 도구입니다.
- [terrars](https://github.com/andrewbaxter/terrars) - Rust로 Terraform 스택을 구축하는 도구입니다. CDK의 대안입니다.
- [terrascan](https://github.com/tenable/terrascan) - Terraform 템플릿의 정적 코드 분석을 위한 보안 및 모범 사례 테스트 모음입니다.
- [terrascope](https://github.com/spilliams/terrascope) - Terraform 모노레포용 빌드 오케스트레이터입니다.
- [terrashine](https://isawan.github.io/terrashine/) - Provider 요청 시 종속성을 자동으로 캐시하는 Terraform Provider 미러 구현입니다.
- [terraspace](https://terraspace.cloud) - Terraform 프레임워크입니다.
- [terrastate](https://github.com/rohinivsenthil/terrastate) - 워크스페이스의 Terraform 리소스를 모니터링/배포/삭제하는 Visual Studio Code 확장입니다.
- [terratag](https://github.com/env0/terratag) - AWS, Azure 및 GCP 리소스 전반에 걸쳐 태그를 자동 생성하고 유지 관리할 수 있는 Terraform CLI 도구입니다.
- [tf-init-booster](https://github.com/hayorov/terraform-init-booster) - 대규모 청사진에서 Terraform 모듈 다운로드 속도를 높이는 Terraform 이전 단계 루틴입니다.
- [tf-profile](https://github.com/datarootsio/tf-profile/) - Terraform 실행 프로파일러입니다. 전체 통계, 리소스 수준 통계 또는 시각화를 생성합니다.
- [tf-summarize](https://github.com/dineshba/tf-summarize) - Terraform plan 요약을 출력하는 명령줄 유틸리티입니다.
- [tf-why](https://github.com/Raj-glitch-max/tf.why) - CloudTrail 조회를 통해 Terraform 드리프트를 발생시킨 AWS 사용자를 찾아냅니다.
- [tfaction](https://github.com/suzuki-shunsuke/tfaction) - 의견이 반영된 Terraform 워크플로를 위한 GitHub Actions 모음입니다.
- [tfautomv](https://github.com/busser/tfautomv) - 손쉬운 리팩터링을 위해 Terraform `moved` 블록을 자동 생성합니다.
- [tfcmt](https://github.com/suzuki-shunsuke/tfcmt) - plan 및 apply 결과를 풀 리퀘스트 댓글로 알리는 CLI입니다.
- [tfedit](https://github.com/minamijoyo/tfedit) - Terraform 리팩터링 도구입니다.
- [tfenv](https://github.com/tfutils/tfenv) - rbenv에서 영감을 받은 Terraform 버전 관리자입니다.
- [tfgen](https://github.com/0xDones/tfgen) - 일관된 코드베이스와 DRY를 위한 Terraform 코드 생성기입니다.
- [tfgpt](https://github.com/flavius-dinu/tfgpt) - Terraform과 OpenAI GPT-3.5 Turbo를 통합해 Terraform 명령 및 개념을 설명하는 CLI 도구입니다.
- [tfimport](https://github.com/coolapso/tfimport) - 기존 인프라를 tfstate로 가져오는 과정을 자동화하는 CLI 도구입니다.
- [tfjson](https://github.com/palantir/tfjson) - Terraform plan 파일을 읽어 JSON으로 출력하는 유틸리티입니다. :skull:
- [tfk8s](https://github.com/jrhouston/tfk8s) - Kubernetes YAML 매니페스트를 Terraform HCL로 변환하는 도구입니다.
- [tflint](https://github.com/terraform-linters/tflint) - `terraform plan`으로 감지할 수 없는 오류를 찾아내는 Terraform 린터입니다.
- [tfmake](https://github.com/tfmake/tfmake) - make의 강력함으로 Terraform을 자동화합니다.
- [tfmask](https://github.com/cloudposse-archives/tfmask) - `terraform plan` 및 `terraform apply`에서 선택한 출력을 마스킹하는 Terraform 유틸리티입니다. :skull:
- [tfmigrate](https://github.com/minamijoyo/tfmigrate) - GitOps용 Terraform 상태 마이그레이션 도구입니다.
- [tfmigrator](https://github.com/tfmigrator/cli) - Terraform 구성 및 상태를 마이그레이션하는 Go 라이브러리 및 CLI입니다.
- [tfmodcache](https://github.com/Rezarys/tfmodcache) - Terraform 및 OpenTofu용 로컬 공유 모듈 캐시입니다. `terraform init`에서 이미 내려받은 모듈을 다시 다운로드하지 않습니다. 저자가 직접 제작했습니다.
- [tfmv](https://github.com/suzuki-shunsuke/tfmv) - Terraform 리소스 이름을 바꾸고 moved 블록을 생성합니다.
- [tfocus](https://github.com/nwiizo/tfocus) - tfocus is a super interactive tool for selecting and executing Terraform plan/apply on specific resources. Think of it as an "emergency tool" - 특정 리소스에서 Terraform plan/apply를 선택하고 실행하는 인터랙티브 도구입니다. 일상 작업용이 아니라 “비상용 도구”로 생각하면 됩니다.
- [tfprovidercheck](https://github.com/suzuki-shunsuke/tfprovidercheck) - 악성 Terraform Provider 실행을 방지하는 CLI입니다.
- [tfproviderlint](https://github.com/bflad/tfproviderlint) - Terraform Provider 린트 도구입니다.
- [tfrepl](https://github.com/ysoftwareab/tfrepl) - 완전한 셸 환경을 제공하는 Terraform REPL입니다. Readline 기반이며 의존성이 없습니다. 구성 변경 저장 및 기록 기능을 제공합니다.
- [tfreveal](https://github.com/breml/tfreveal) - 모든 시크릿(민감) 값이 드러나도록 Terraform 계획을 표시하는 유틸리티입니다.
- [tfscaffold](https://github.com/tfutils/tfscaffold) - 다중 환경, 다중 구성 요소의 Terraform 관리 AWS 인프라를 제어하는 프레임워크입니다.
- [tfschema](https://github.com/minamijoyo/tfschema) - Terraform Provider 스키마 검사기입니다.
- [tfsec](https://github.com/aquasecurity/tfsec) - 더 나은 결과를 위해 HCL 파서에 직접 통합되는 Terraform 정적 분석 도구로, terraform <0.12 및 >=0.12를 지원합니다.
- [tfsort](https://github.com/AlexNabokikh/tfsort) - Terraform 변수 및 출력을 정렬하는 CLI 유틸리티입니다.
- [tftarget](https://github.com/future-architect/tftarget) - `terraform xxx -target={...}`를 인터랙티브하게 실행하는 CLI 도구입니다.
- [tftree](https://github.com/busser/tftree) - 터미널에 Terraform 모듈 호출 스택을 표시합니다.
- [tftui](https://github.com/idoavrah/terraform-tui) - Terraform 상태를 위한 텍스트 사용자 인터페이스입니다.
- [tfupdate](https://github.com/minamijoyo/tfupdate) - Terraform 구성의 버전 제약 조건을 업데이트합니다.
- [tfvar](https://github.com/shihanng/tfvar) - Terraform 구성 또는 모듈을 분석해 원하는 형식(tfvar, 환경 변수 등)으로 변수를 추출해 편집할 수 있도록 합니다.
- [tfvault](https://github.com/tedilabs/tfvault) - OS 키링, pass/gopass, 환경 변수 등의 플러그형 시크릿 백엔드와 프로필별 계정 격리를 지원하는 범용 Terraform 자격 증명 도우미입니다.
- [tfvaultenv](https://github.com/oulman/tfvaultenv) - HashiCorp Vault에서 시크릿을 읽고 이를 사용해 다양한 Terraform Provider용 환경 변수를 출력합니다.
- [tfwrapper](https://github.com/manheim/tfwrapper) - HashiCorp Terraform을 합리적으로 실행하기 위한 rake 작업을 제공하는 RubyGem입니다.
- [tfmcp](https://github.com/nwiizo/tfmcp) - Model Context Protocol(MCP)을 통해 Terraform과 상호 작용하고 Claude 같은 AI 도우미로 Terraform 환경을 관리 및 운영할 수 있는 CLI 도구입니다.
- [tgf](https://github.com/coveooss/tgf) - Docker를 통해 Terragrunt/Terraform을 실행하는 Terragrunt 프런트엔드입니다.
- [threatcl](https://github.com/threatcl/threatcl) - HCL로 위협 모델을 문서화합니다.
- [tofuenv](https://github.com/tofuutils/tofuenv) - tfenv에서 영감을 받은 OpenTofu 버전 관리자입니다.
- [tpm](https://github.com/Madh93/tpm) - Terraform Provider용 패키지 관리자입니다.
- [travelgrunt](https://github.com/ivanilves/travelgrunt) - 피로감 없이 [모노]저장소 내부를 이동하세요!
- [trupositive](https://github.com/trupositive-ai/trupositive) - 모든 Terraform 관리 리소스에 Git 메타데이터(커밋 SHA, 브랜치, 저장소)를 자동 삽입하는 설정 불필요 래퍼입니다.
- [validIaC](https://github.com/gofireflyio/validiac) - Terraform 모범 사례, 코드 품질 및 보안을 보장하기 위해 최고의 오픈 소스 도구를 결합합니다.
- [xterrafile](https://github.com/devopsmakers/xterrafile) - Terraform에서 사용할 모듈 레지스트리, Git 또는 로컬 디렉터리의 외부 모듈을 체계적으로 관리합니다(Go로 작성). :skull:
- [yj](https://github.com/sclevine/yj) - CLI - YAML, TOML, JSON 및 HCL 간 변환 CLI입니다. 맵 순서를 보존합니다.
- [yor](https://github.com/bridgecrewio/yor) - Terraform, CloudFormation 및 Serverless 등 IaC 프레임워크에 태그를 자동으로 지정하고 추적합니다.
- [zephy](https://github.com/henrybravo/zephy) - 클라우드 리소스 태그 전략이 충분하지 않은 경우 Azure 구독에 배포된 리소스와 Terraform Enterprise(HCP 및 자체 호스팅) 워크스페이스가 관리하는 리소스를 비교합니다.

### CI

- [opentofu-updater-action](https://github.com/drumandbytes/opentofu-updater-action) - 풀 리퀘스트를 열어 OpenTofu/Terraform Provider, 모듈, Helm 차트 및 컨테이너 이미지를 최신 상태로 유지하는 GitHub Action입니다.
- [setup-terraform](https://github.com/hashicorp/setup-terraform) - GitHub Actions 워크플로에 Terraform CLI를 설정합니다.
- [terraform-plan](https://github.com/cds-snc/terraform-plan) - Terraform plan을 실행하고 변경 사항이 포함된 댓글을 추가하는 GitHub Action입니다.
- [terraform-risk-assessor](https://github.com/Liam-Johnston/terraform-risk-assessor) - AI로 Terraform plan 변경 사항을 분석하고 풀 리퀘스트에 위험 평가 댓글을 남기는 GitHub Action입니다.

### VS Code 확장

- [HashiCorp Terraform](https://marketplace.visualstudio.com/items?itemName=hashicorp.terraform)
- [vscode-terraform-live-graph](https://github.com/adamiBs/vscode-terraform-live-graph) - 코드 작성 중 실시간 Terraform 그래프를 생성하는 Visual Studio Code 확장입니다.
- [tf-nav](https://marketplace.visualstudio.com/items?itemName=owenrumney.tf-nav) - 파일 유형별 리소스 색인을 만들고 쉽게 탐색할 수 있는 트리 보기를 제공하는 Terraform 탐색 확장입니다.

## 라이브러리

- [hcl-rs](https://github.com/martinohmann/hcl-rs) - serde 지원을 제공하는 Rust용 HCL 파싱 및 인코딩 라이브러리입니다.
- [hcl4j](https://github.com/wondrify/hcl4j) - Java용 HCL 파서입니다.
- [nu_plugin_hcl](https://github.com/Yethal/nu_plugin_hcl) - [Nushell](https://github.com/nushell/nushell)용 HCL 파서 플러그인입니다.
- [pyhcl](https://github.com/virtuald/pyhcl) - Python용 HCL 파서입니다.
- [python-hcl2](https://github.com/amplify-education/python-hcl2/) - Python용 HCL2 파서입니다.
- [rhcl](https://github.com/winebarrel/rhcl) - 순수 Ruby HCL 파서입니다. :skull:
- [tree-sitter-hcl](https://github.com/tree-sitter-grammars/tree-sitter-hcl) - tree-sitter용 HCL 문법입니다.

## 보일러플레이트

- [Solo-Engineer Stack](https://github.com/sarmakska/terraform-stack) - Vercel, Supabase, Cloudflare 및 DigitalOcean을 연결하는 단일 Terraform 저장소로, 인디 SaaS 플랫폼을 구성합니다. `terraform apply` 한 번으로 Next.js 프로젝트, Vercel에 환경 변수를 전달하는 Supabase 프로젝트, R2 및 Workers KV를 포함한 Cloudflare 영역, 모니터링을 갖춘 DigitalOcean Droplet을 프로비저닝합니다.
- [Terraform Generator](https://github.com/sudokar/generator-tf-module) - 테스트 프레임워크(terratest 및 kitchen-terraform)를 지원하는 새로운 Terraform 모듈 또는 프로젝트 스캐폴딩입니다.
- [Terraform GitOps Framework](https://www.kubestack.com) - 무료 오픈 소스 프레임워크 하나로 AKS, EKS 및 GKE Kubernetes 클러스터를 위한 안정적인 자동화 구축에 필요한 모든 것을 제공합니다.

## 자체 호스팅 Terraform 플랫폼

- [Snap CD](https://github.com/schrieksoft/snapcd) - 격리된 Runner, 종속성 인식 자동화 및 세분화된 접근 제어를 통해 모듈형 배포를 지원하는 완전한 기능의 지속적 배포 플랫폼입니다.
- [Lynx](https://github.com/clivern/lynx) - 빠르고 안전하며 신뢰할 수 있는 Terraform Backend입니다. 사용자 친화적인 대시보드, 프로젝트 및 환경 관리, 상태 버전 관리, 잠금 및 스냅샷을 지원합니다.
- [OTF](https://github.com/leg100/otf) - Terraform CLI와 완전히 통합되는 Terraform Enterprise의 오픈 소스 대안인 Open Terraforming Framework입니다.
- [Terrakube](https://docs.terrakube.io) - 비공개 레지스트리, 원격 상태, 사용자 지정 흐름, 예약된 워크스페이스 및 시각적 상태를 제공하는 Terraform Enterprise의 오픈 소스 대안입니다.
- [Digger](https://digger.dev) - Open Source Alternative to Terraform Cloud - Terraform Cloud의 오픈 소스 대안으로 CI에서 Terraform plan 및 apply 작업을 실행합니다.
- [cloud-concierge](https://github.com/dragondrop-cloud/cloud-concierge) - 관리되지 않는 리소스를 Terraform 코드로 만들고, 드리프트를 감지하며, 클라우드 비용 및 보안을 분석해 풀 리퀘스트로 제공합니다. 오픈 소스입니다.
- [Stack-Lifecycle-Deployment](https://github.com/D10S0VSkY-OSS/Stack-Lifecycle-Deployment) - 클라우드에서 사용 및 프로비저닝되는 리소스의 전체 수명 주기를 정의하고 관리하는 오픈 소스 솔루션입니다.
- [Burrito](https://github.com/padok-team/burrito) - TACoS Kubernetes Operator - TACoS Kubernetes Operator, 즉 “Terraform용 ArgoCD”입니다.
- [Terrateam](https://terrateam.io) - GitOps 우선 방식과 기본 GitHub 통합을 갖추고 확장성, 보안 및 안정성을 위해 설계된 Terraform Cloud/Enterprise의 오픈 소스 대안입니다.


## 관리형 Terraform 플랫폼 :heavy_dollar_sign:

- [compliance.tf](https://compliance.tf) - SOC 2, PCI DSS, HIPAA, NIST 800-53 및 35개 이상의 프레임워크가 내장된 Terraform 모듈입니다. 규정을 준수하지 않는 구성은 적용 전에 `terraform plan`에서 실패합니다. :heavy_dollar_sign:
- [ControlMonkey](https://www.controlmonkey.io/) - Terraform/OpenTofu 코드 생성, 클라우드 인벤토리 및 IaC 적용 범위를 제공하는 Terraform Cloud 대안입니다. 기본 제공 정책, 드리프트 수정 및 ClickOps 활동 스캐너를 포함합니다. :heavy_dollar_sign:
- [Firefly](https://www.firefly.ai/) - CI 도구를 활용하는 Terraform Cloud 대안입니다. Firefly 플랫폼은 클라우드를 스캔해 IaC 적용 범위와 드리프트를 탐지합니다. :heavy_dollar_sign:
- [Scalr](https://www.scalr.com/) - OPA 통합, 조직 구조, 사용자 지정 훅, 다른 DevOps 플랫폼과의 기본 통합 및 중앙 집중식 보고 기능을 갖춘 Terraform Enterprise 대안입니다. :heavy_dollar_sign:
- [Stategraph](https://stategraph.com) - 상태 파일 병목 현상 없이 Terraform 및 OpenTofu를 사용합니다. 평면 상태 파일을 실제 데이터베이스로 대체합니다. 팀은 병렬로 계획을 수립하고, SQL로 상태를 조회하며, 수 분이 아닌 수 초 만에 계획을 실행할 수 있습니다. :heavy_dollar_sign:
- [env0](https://www.env0.com/) - OPA 통합, 사용자 지정 흐름 및 Terragrunt 지원을 갖춘 Terraform Cloud/Enterprise 대안입니다. :heavy_dollar_sign:
- [Brainboard](https://www.brainboard.co) - Visually Design, Deploy & Manage modern cloud infrastructures starting from any Cloud Provider - AWS, GCP, Azure 등 모든 Cloud Provider를 대상으로 최신 클라우드 인프라를 시각적으로 설계, 배포 및 관리합니다. :heavy_dollar_sign:
- [Spacelift](https://spacelift.io/) - Terraform용 협업 인프라 제공 플랫폼으로 Terraform Cloud/Enterprise의 대안입니다. :heavy_dollar_sign:
- [StackGuardian](https://stackguardian.io/) - 기존 클라우드 리소스를 IaC로 변환하는 인프라 코드화 및 오케스트레이션 플랫폼입니다. Tirith, OPA 및 Checkov를 사용한 정책 기반 워크플로, 비공개 런타임 및 노코드 템플릿을 지원합니다. :heavy_dollar_sign:

## Terraform Enterprise 도구

- [terraform-enterprise-cli](https://github.com/skierkowski/terraform-enterprise-cli) - Terraform Enterprise 명령줄 인터페이스입니다.
- [terraform-enterprise-client](https://github.com/skierkowski/terraform-enterprise-client) - Terraform Enterprise API용 Ruby 클라이언트 및 명령줄 도구입니다.
- [terraform-enterprise-migrator](https://github.com/sil-org/tfc-ops) - Terraform Enterprise 환경을 기존 버전에서 새로운 Terraform Enterprise 버전으로 마이그레이션하는 스크립트입니다.

## 동영상

- [Your Weekly Dose of Terraform](https://www.youtube.com/channel/UCGH0yYPvlCN1VjSFMGVmFgQ) - Terraform 뉴스, 리뷰, 인터뷰, 질의응답, 라이브 코딩 및 Terraform 해킹을 다루는 주간 라이브 스트리밍 YouTube 채널입니다.
- [Terraform explained in 15 mins](https://www.youtube.com/watch?v=l5k1ai_GBDE) - 15분 안에 Terraform을 설명합니다.
- [Terraform Course](https://www.youtube.com/watch?v=SLB_c_ayRMo) - AWS 클라우드 인프라를 자동화합니다.
- [How to Build Reusable, Composable, Battle tested Terraform Modules](https://www.youtube.com/watch?v=LVgP63BkhKQ) - Yevgeniy Brikman이 재사용 가능하고 조합 가능하며 테스트할 수 있는 Terraform 코드를 작성하는 방법을 설명합니다. Terraform 모듈에 중점을 두지만 Terraform이 해결하려 한 문제와 기본 사용법 데모도 간략하고 명확하게 소개합니다(약 39분, 2017년 10월).
- [Building Scalable, Repeatable Infrastructure in the Cloud with Terraform](https://www.youtube.com/watch?v=cG7pcksTAnY) - 호스팅된 PostgreSQL을 사용해 AWS에 TeamCity를 배포함으로써 Terraform이 클라우드에서 Infrastructure as Code를 실천하는 방법을 보여줍니다.
- [Creating a Google Compute Instance with Terraform](https://www.youtube.com/watch?v=fo3VX33Zx0c) - Terraform 코드로 Google Compute Instance를 생성하는 예제입니다.
- [Creating a Terraform Provider for Just About Anything](https://www.hashicorp.com/resources/creating-terraform-provider-for-anything) - 이 안내를 통해 Terraform Provider에 기여하거나 직접 만드는 방법을 배울 수 있습니다.
- [Evolving Your Infrastructure with Terraform](https://www.youtube.com/watch?v=wgzgVm7Sqlk) - OpenCredo의 CTO가 흥미로운 사용 사례를 통해 실전에서 Terraform을 사용하는 방법을 깊이 살펴봅니다.
- [Going Multi-Cloud with Terraform and Nomad](https://www.youtube.com/watch?v=e42A4aBZUkQ).
- [How to Extend the Terraform Provider List](https://www.youtube.com/watch?v=2BvpqmFpchI) - Paul이 Terraform Provider를 만드는 과정을 설명합니다.
- [Orchestrating Containers with Terraform and Consul](https://www.infoq.com/presentations/terraform-consul/) - Mitchell Hashimoto가 Terraform으로 컨테이너화된 워크로드를 배포하고 확장하는 방법을 보여줍니다.
- [Production ChaosMonkey with Terraform](https://www.youtube.com/watch?v=CPI6W3LK0-g) - DigitalOcean이 Terraform을 사용해 프로덕션 통합 테스트를 실행하는 방법입니다.
- [Running a Terraform Environment at Scale](https://www.youtube.com/watch?v=3JVGSq7QIS0) - 수백 개의 AWS 계정에서 Terraform을 대규모로 실행하는 방법입니다.
- [Setup Continuous Integration for a Terraform module](https://www.youtube.com/watch?v=vuJ6bjYKUcA) - Kitchen-Terraform을 사용해 Google Compute Instance를 생성하는 Terraform 모듈을 테스트, 태그 지정 및 게시하는 CI 활용 예제입니다.
- [State of Terraform Providerland](https://www.youtube.com/watch?v=ar1PF5iDtbg) - Terraform Provider의 작동 방식과 작성 방법입니다.
- [Terraform At Scale](https://www.youtube.com/watch?v=RldRDryLiXs) - Segment가 Terraform을 사용하는 방법입니다.
- [Terraform w/ Lee Trout](https://www.youtube.com/watch?v=p2ESyuqPw1A) - 개발 패턴과 Terraform 코드를 효과적으로 구조화하는 방법에 중점을 둡니다.
- [Terraforming the Composable World](https://www.youtube.com/watch?v=cHrOXPatFeg) - Terraform을 온프레미스 베어메탈 프로비저닝과 통합합니다.
- [Test and verify a Google Compute Instance with Kitchen-Terraform](https://www.youtube.com/watch?v=kiH3-LEveek) - Kitchen-Terraform으로 Google Compute를 생성하는 Terraform 코드를 테스트하는 예제입니다.
- [Untangling Terraform Through Refactoring](https://www.youtube.com/watch?v=OH6iDKaXpZs) - 최소한의 위험으로 Terraform 코드를 신중하게 리팩터링하는 방법입니다.
- [Complete Terraform Course - From BEGINNER to PRO! (Learn Infrastructure as Code)](https://www.youtube.com/watch?v=7xngnjfIlK4) - 클라우드 Provider에 특정되지 않은 일반적인 접근법으로 초급부터 전문가까지 배우는 전체 강좌입니다.

## 편집기 플러그인

- [Emacs terraform-mode](https://github.com/hcl-emacs/terraform-mode)
- [Intellij](https://plugins.jetbrains.com/plugin/7808-terraform-and-hcl)
- [Terraform-ls](https://github.com/hashicorp/terraform-ls) (Terraform Language Server)
- [Terraform-lsp](https://github.com/juliosueiras/terraform-lsp) (Language Server Protocol for Terraform)
- [vim-hcl](https://github.com/jvirtanen/vim-hcl) - HCL 구문 강조 기능입니다.
- [Vim-Terraform-Completion](https://github.com/juliosueiras/vim-terraform-completion)
- [Vim-Terraform](https://github.com/hashivim/vim-terraform)

## 라이선스

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

법이 허용하는 최대 범위까지 Shuaib Yunus는 이 저작물에 대한 모든 저작권 및 관련 권리를 포기했습니다.
