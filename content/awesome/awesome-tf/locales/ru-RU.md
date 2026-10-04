# Awesome Terraform [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) <!-- omit in toc -->

[![Link Checker](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml)
[![Misspell Check](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml)

> Подборка ресурсов по [HashiCorp's Terraform](https://www.terraform.io/).
> [<img src="https://raw.githubusercontent.com/shuaibiyy/awesome-terraform/master/terraform.svg" align="right" width="100">](https://terraform.io)
> Мы приветствуем ваши [вклады](https://github.com/shuaibiyy/awesome-tf/blob/master/contributing.md)!

Terraform позволяет безопасно и предсказуемо создавать, изменять и улучшать производственную инфраструктуру. Это инструмент с открытым исходным кодом, который описывает API в виде декларативных файлов конфигурации: ими можно делиться с командой, относиться к ним как к коду, редактировать, проверять и версионировать.

## Содержание <!-- omit in toc -->

- [Условные обозначения](#legend)
- [Официальные ресурсы](#official-resources)
- [Сообщество](#community)
- [Книги](#books)
- [Изучение и обучение](#learning-and-studying)
- [Приложения](#apps)
- [Учебные материалы и публикации в блогах](#tutorials-and-blog-posts)
  - [Руководства для начинающих](#beginner-guides)
  - [Разработка пользовательских провайдеров](#writing-custom-providers)
  - [Практические руководства](#how-to)
  - [Конфигурация для нескольких сред](#multi-environment-configuration)
  - [Azure](#azure)
  - [AWS](#aws)
  - [Google Cloud](#google-cloud)
  - [Разное](#miscellaneous)
- [Модули сообщества](#community-modules)
- [Реестры с самостоятельным размещением](#self-hosted-registries)
- [Управляемые реестры](#managed-registries)
- [Провайдеры](#providers)
  - [Провайдеры с поддержкой Hashicorp](#hashicorp-supported-providers)
  - [Провайдеры с поддержкой поставщиков](#vendor-supported-providers)
  - [Провайдеры сообщества](#community-providers)
- [Тестирование](#testing)
- [Инструменты](#tools)
  - [Непрерывная интеграция](#ci)
  - [Расширения для VS Code](#vs-code-extensions)
- [Библиотеки](#libraries)
- [Шаблоны проектов](#boilerplates)
- [Самостоятельно размещаемые платформы Terraform](#self-hosted-terraform-platforms)
- [Управляемые платформы Terraform :heavy\_dollar\_sign:](#managed-terraform-platforms-heavy_dollar_sign)
- [Инструменты Terraform Enterprise](#terraform-enterprise-tooling)
- [Видео](#videos)
- [Плагины для редакторов](#editor-plugins)
- [Лицензия](#license)

## Условные обозначения

- Несовместимо с _terraform >= 0.12_ :ghost:
- Заброшено :skull:
- Монетизировано :heavy_dollar_sign:

## Официальные ресурсы

- [Hashicorp Terraform Blog](https://www.hashicorp.com/en/blog/products/terraform)
- [Introduction to Terraform](https://developer.hashicorp.com/terraform/intro)
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform learn](https://developer.hashicorp.com/terraform/tutorials)

## Сообщество

- [weekly.tf - Terraform Weekly Newsletter](https://www.weekly.tf/) - Еженедельная рассылка о новостях Terraform, проектах с открытым исходным кодом, объявлениях и обсуждениях.
- [Complete Terraform documentation as PDF files (Updated nightly)](https://github.com/antonbabenko/terraform-docs-as-pdf) — Полная документация Terraform в формате PDF (обновляется каждую ночь). :skull:
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
- [The Claude Agent Skill for Terraform and OpenTofu - testing, modules, CI/CD, and production patterns](https://github.com/antonbabenko/terraform-skill) - Навык Claude Code для Terraform и OpenTofu: тестирование, проектирование модулей, рабочие процессы CI/CD и производственные шаблоны.
- [awesome-terraform-compliance](https://github.com/antonbabenko/awesome-terraform-compliance) - Подборка инструментов, фреймворков и ресурсов для соответствия требованиям и обеспечения безопасности в Terraform.
- Сообщества на отдельных языках:
  - [Telegram (Ukrainian speak community)](https://t.me/terraform_ukraine)

## Книги

- [Big Little Book On Terraform](https://www.amazon.com/Big-Little-Book-Terraform-Omos-ebook/dp/B07PWYPNX8/)
- [Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Second Edition](https://www.manning.com/books/bootstrapping-microservices-second-edition)
- [Deep-Dive Terraform on Azure](https://link.springer.com/book/10.1007/978-1-4842-7328-9)
- [Getting Started with Terraform, 2nd ed.](https://www.amazon.com/Getting-Started-Terraform-production-infrastructure/dp/1788623533/)
- [HashiCorp Infrastructure Automation Certification Guide](https://www.amazon.com/HashiCorp-Infrastructure-Automation-Certification-Guide-ebook/dp/B092KM7LXC/)
- [IaC starting with Terraform (Korean)](https://product.kyobobook.co.kr/detail/S000202478097)
- [Infrastructure as Code](https://www.oreilly.com/library/view/infrastructure-as-code/9781491924334/)
- [Patterns and Practices for Infrastructure as Code: With examples in Python and Terraform](https://www.manning.com/books/infrastructure-as-code-patterns-and-practices)
- [Terraform Best Practices](https://www.terraform-best-practices.com/) - [open-source ebook](https://github.com/antonbabenko/terraform-best-practices)
- [Terraform Cookbook](https://www.amazon.com/Terraform-Cookbook-Efficiently-Infrastructure-platforms/dp/1800207557)
- [Terraform for Ops e-book](https://www.terraformforops.com)
- [Terraform in Action](https://www.manning.com/books/terraform-in-action)
- [Terraform in Depth](https://www.manning.com/books/terraform-in-depth)
- [Terraform: Up & Running, 3rd ed.](https://www.terraformupandrunning.com/)
- [The Terraform Book](https://terraformbook.com/)

## Изучение и обучение

- [Terraform Academy](https://www.terraformacademy.app) - Интерактивная платформа для изучения Terraform и IaC с практическими лабораторными работами, подготовкой к сертификациям (HashiCorp, AWS, GCP, Azure, Docker, Kubernetes, GitOps), ИИ-наставником и отслеживанием прогресса. Также доступны блог [SRE Pro Tips](https://www.terraformacademy.app/protips/?cat=sre-pro-tips) и мобильные/PWA-приложения ниже.
- [Terraform Terminal Simulator](https://devops-daily.com/games/terraform-terminal-simulator) - Практикуйтесь выполнять init, plan и apply в эмуляторе терминала в браузере. Бесплатно, с открытым исходным кодом, регистрация не требуется.
- [compliance.tf docs](https://compliance.tf/docs/) - Бесплатные реализации Terraform для SOC 2, PCI DSS, HIPAA, NIST 800-53 и более чем 35 других требований соответствия — открытый справочник по созданию соответствующего требованиям кода инфраструктуры.
- [DevOpsLesson Terraform Playground](https://devopslesson.com/playground/terraform) - Бесплатный симулятор Terraform в браузере с пошаговыми упражнениями по HCL и практикой команд.

## Приложения

Мобильные, настольные и PWA-приложения для изучения Terraform и работы с ним в дороге.

- [Terraform Academy — iOS](https://apps.apple.com/us/app/terraform-academy/id6745738634) - Нативное приложение iOS для интерактивной обучающей платформы Terraform Academy. Практические лабораторные работы, подготовка к сертификациям (HashiCorp, AWS, GCP, Azure, Docker, Kubernetes, GitOps), ИИ-наставник и синхронизация прогресса между устройствами.
- [Terraform Academy — Android](https://play.google.com/store/apps/details?id=com.terraformacade1.app) - Нативное приложение Android для обучающей платформы Terraform Academy с теми же лабораторными работами, подготовкой к сертификации и ИИ-наставником, что и в версиях для iOS и веба.
- [Terraform Academy — PWA / Web App](https://www.terraformacademy.app/) - Устанавливаемая версия Terraform Academy в формате Progressive Web App. Работает офлайн, устанавливается на главный экран любой платформы и синхронизирует прогресс с мобильными приложениями.

## Учебные материалы и публикации в блогах

### Руководства для начинающих

- [A Comprehensive Guide to Terraform](https://www.gruntwork.io/blog/a-comprehensive-guide-to-terraform) - Серия публикаций в блоге автора Terraform: Up & Running, которая знакомит читателей с Terraform — от первых шагов до практического применения.
- [Using Terraform for Cloud Deployments - Part 1](https://dev.to/koenighotze/using-terraform-for-cloud-deployments---part-1) - Развёртывание экземпляра EC2.
- [Hello, world: The Fargate/Terraform tutorial I wish I had](https://section411.com/2019/07/hello-world/) - Публикация в блоге о создании кластера ECS Fargate с нуля.
- [Terraform Security Guide](https://sysdig.com/blog/terraform-security-best-practices/) - Публикация в блоге о рекомендациях по безопасности при работе с Terraform.
- [Building a SaaS API? Don't Forget Your Terraform Provider](https://www.speakeasy.com/blog/build-terraform-providers) - Почему стоит написать провайдер Terraform.
- [Complete Terraform Course in French (Free)](https://blog.stephane-robert.info/docs/infra-as-code/provisionnement/terraform/) – Подробный бесплатный курс на французском языке — от начального до продвинутого уровня, с практическими примерами и рекомендациями.
- [Introduction to Terraform](https://devopslesson.com/tutorials/terraform/introduction-to-terraform) - Руководство для начинающих по основам Terraform: провайдеры, ресурсы, состояние и первый apply с практическими примерами.

### Разработка пользовательских провайдеров

- [Creating custom terraform providers](https://blog.pelo.tech/creating-custom-terraform-providers-341311823fa2) - Руководство по созданию пользовательских провайдеров.
- [Writing a Terraform provider](https://web.archive.org/web/20220516140659/http://blog.jfabre.net/2017/01/22/writing-terraform-provider/) - Руководство по созданию пользовательских провайдеров.
- [Writing Custom Providers](https://developer.hashicorp.com/terraform/plugin/sdkv2) - Официальная документация по созданию пользовательских провайдеров.
- [Terraform Provider Code generation](https://www.speakeasy.com/docs/terraform/create-terraform) - Руководство по генерации провайдера Terraform из спецификации OpenAPI (поддерживается поставщиком).

### Практические руководства

- [How To Write OPA for Terraform](https://scalr.com/learning-center/opa-series-part-1-open-policy-agent-and-terraform) - Как использовать Open Policy Agent для оценки политик и контроля их соблюдения в планах Terraform.
- [Deploying Discourse with Terraform](https://www.hashicorp.com/en/blog/deploying-discourse-with-terraform) - Показывает, как Terraform может одной командой создать работающий экземпляр Discourse в DigitalOcean.
- [Deploying Django to AWS ECS with Terraform](https://testdriven.io/blog/deploying-django-to-ecs-with-terraform/) - Рассматривается использование Terraform для создания инфраструктуры AWS, необходимой для запуска приложения Django в ECS.
- [Easily Deploy A Seneca Microservice to ECS with Wercker and Terraform: Part I](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-i/), [II](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-ii/) & [III](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-iii/) - Показывает, как включить Terraform в конвейер развёртывания микросервисов.
- [Terraform for a Highly Available VPN between AWS and Azure](https://web.archive.org/web/20210616132857/https://deployeveryday.com/2020/04/13/vpn-aws-azure-terraform.html) - Код Terraform для развёртывания высокодоступной VPN между AWS и Azure.
- [Terraforming 1Password](https://1password.com/blog/terraforming-1password) - Как 1Password перешёл с CloudFormation на Terraform.
- [Tutorial: How to Use Terraform to Deploy OpenStack Workloads](https://web.archive.org/web/20170611135511/http://www.stratoscale.com/blog/openstack/tutorial-how-to-use-terraform-to-deploy-openstack-workloads/) - Показывает, как легко использовать провайдер Terraform для OpenStack, чтобы развернуть веб-сервер.
- [Zero Downtime Updates with HashiCorp Terraform](https://www.hashicorp.com/en/blog/zero-downtime-updates-with-terraform) - Обеспечение обновления инфраструктуры без простоя.
- [Google Cloud Platform for 10$ a month using terraform](https://github.com/nufailtd/terraform-budget-gcp) - Создание с помощью Terraform защищённого кластера Google Kubernetes, сервисов Google Cloud Run и других компонентов инфраструктуры менее чем за [10 $](https://nufailtd.github.io/budget-gcp/) в месяц.
- [Infracost + Terraform + GitHub Actions = Automate Cloud Cost Management](https://medium.com/better-programming/infracost-terraform-github-actions-automate-cloud-cost-management-a62b329f2834) - Как использовать Infracost для контроля расходов на облако при разработке с Terraform.
- [How To Wrap Your Terraform Provider for Pulumi](https://www.speakeasy.com/blog/pulumi-terraform-provider) - Подготовка провайдера Terraform к использованию с Pulumi.
- [How to Build an AWS Account Vending Machine](https://medium.com/@StackGuardian/how-to-build-an-aws-account-vending-machine-by-stackguardian-f2895e35a27b) - Автоматизированное самостоятельное управление жизненным циклом аккаунтов AWS с помощью стеков Terraform и StackGuardian, распределения на основе SSM, очистки по триггерам EventBridge и контроля политик Tirith.

### Конфигурация для нескольких сред

- [Terraform Design Patterns: the Terrafile](https://bensnape.com/2016/01/14/terraform-design-patterns-the-terrafile/) - Управление модулями Terraform и их версиями в проектах Terraform с помощью Terrafile.
- [Terraform, VPC, and why you want a tfstate file per env](https://charity.wtf/2016/03/30/terraform-vpc-and-why-you-want-a-tfstate-file-per-env/) - Подводные камни использования Terraform в крупных проектах с несколькими средами и способы их избежать.
- [Using Pipelines to Manage Environments with Infrastructure as Code](https://medium.com/@kief/https-medium-com-kief-using-pipelines-to-manage-environments-with-infrastructure-as-code-b37285a1cbf5) - Подходы к созданию конвейера для переноса изменений инфраструктуры из одной среды в другую.

### Azure

- [Learning HashiCorp Terraform](https://web.archive.org/web/20201108000713/https://www.g10s.io/hashicorp-terraform/) - Руководство по Azure.
- [New Terraform Azure Automation Resources](https://bgelens.nl/terraform-automation-resources/) - Azure Automation.
- [Terraforming Azure PaaS](https://devkimchi.com/2019/01/21/terraforming-azure-paas/) - Развёртывание ресурсов PaaS в Azure.
- [azure-az104](https://github.com/victorlane/azure-az104) - Конспект AZ-104 Azure Administrator и практические примеры Terraform, включая эталонную архитектуру посадочной зоны.

### AWS

- [AWS Lambda the Terraform Way](https://github.com/nsriram/lambda-the-terraform-way) - Подробное изучение AWS Lambda с Terraform: не только запуск функций, но и интеграция с S3, API Gateway, DynamoDB, Kinesis и SQS.
- [Managing AWS Lambda Functions with Terraform](https://spacelift.io/blog/terraform-aws-lambda) - Для чего используется AWS Lambda и как управлять функциями AWS Lambda с помощью Terraform?

### Google Cloud

- [Managing infrastructure as code with Terraform, Cloud Build, and GitOps](https://docs.cloud.google.com/docs/terraform/resource-management/managing-infrastructure-as-code) - Настройка и управление инфраструктурой как кодом с помощью Terraform, Cloud Build и GitOps.
- [Getting started with Terraform on Google Cloud](https://docs.cloud.google.com/docs/terraform/create-vm-instance) - Создание виртуальной машины в Google Cloud с помощью Terraform и запуск базового сервера Python Flask.
- [Managing Cloud Infrastructure with Terraform](https://www.skills.google/course_templates/746) - Развёртывание службы балансировки нагрузки Kubernetes, HTTPS-балансировщика с маршрутизацией по содержимому, модульной региональной балансировки, пользовательских провайдеров, Cloud SQL и VPN между Google Cloud и AWS с помощью Terraform.
- [Hashicorp Terraform Tutorials for Google Cloud](https://developer.hashicorp.com/terraform/tutorials/gcp-get-started) - Начало работы с Terraform в Google Cloud.
- [IAC - Terraform and Terragrunt on Google Cloud](https://www.academeez.com/courses/terraform) - Курс с открытым исходным кодом под лицензией MIT о создании инфраструктуры в Google Cloud с использованием Terraform/OpenTofu и Terragrunt.
- [Self-host n8n on Google Cloud Run](https://github.com/datawranglerai/self-host-n8n-on-gcr) - Конфигурация Terraform и руководство по развёртыванию n8n в Cloud Run с Cloud SQL, Secret Manager и дополнительным Queue Mode через Redis.

### Разное

- [Sharing data between Terraform configurations](https://web.archive.org/web/20230927082422/https://jamesmckay.net/2016/09/sharing-data-between-terraform-configurations/) - Как использовать удалённое состояние для обмена данными между конфигурациями Terraform.
- [The Segment AWS Stack](https://web.archive.org/web/20250322120753/https://segment.com/blog/the-segment-aws-stack/) - Рассказывает о внутреннем устройстве инфраструктуры на Terraform, которая решила [The Million Dollar Engineering Problem](https://segment.com/blog/the-million-dollar-eng-problem/) в [Segment](https://segment.com/).
- [Top 3 Terraform Testing Strategies for Ultra-Reliable Infrastructure-as-Code](https://www.contino.io/insights/top-3-terraform-testing-strategies-for-ultra-reliable-infrastructure-as-code)
- [Two Weeks with Terraform](https://charity.wtf/2016/02/23/two-weeks-with-terraform/) - Практический опыт работы с Terraform и выводы об эксплуатации.
- [Terraform: Beyond the Basics with AWS](https://aws.amazon.com/blogs/apn/terraform-beyond-the-basics-with-aws/) - Демонстрация использования Terraform для развёртывания примера архитектуры AWS.
- [Terraform cost estimation](https://github.com/antonbabenko/terraform-cost-estimation) - Анонимизированная бесплатная оценка затрат по плану Terraform (0.12+) или файлу состояния. Также доступна в браузере на [terraform-cost-estimation.com](https://terraform-cost-estimation.com).
- [How to Debug Terraform Projects: Tutorial](https://spacelift.io/blog/terraform-debug)
- [The terraform-docs GitHub Action: A Complete CI Setup Guide](https://devtoolhub.com/terraform-docs-github-action/) - Создание документации модулей и автоматический коммит при каждом PR с помощью terraform-docs, включая нюансы OIDC и разрешений, из-за которых CI может работать неправильно.

## Модули сообщества

Дополнительные модули сообщества, не перечисленные здесь, см. в [Terraform Module Registry](https://registry.terraform.io/).

- [nis2shield/infrastructure](https://github.com/nis2shield/infrastructure) - Модули Terraform для автоматизированного соответствия требованиям NIS2 и безопасного развёртывания инфраструктуры.
- [rancher-terraform-digitalocean](https://github.com/lunagt/rancher-terraform-digitalocean) - Сервер Rancher в DigitalOcean.
- [segmentio/stack](https://github.com/segmentio/stack) - Настраивает производственную инфраструктуру с AWS, Docker и ECS. :skull:
- [terraform-aws-account-lookup](https://github.com/be-bold/terraform-aws-account-lookup) - Модуль Terraform позволяет запрашивать аккаунты AWS и выводить их в виде сопоставлений или полного списка; поддерживает фильтрацию и группировку аккаунтов по существующим тегам с помощью подмодуля.
- [terraform-aws-alb](https://github.com/terraform-aws-modules/terraform-aws-alb) - Создаёт балансировщик нагрузки Application в AWS (проверенный модуль).
- [terraform-aws-appconfig](https://github.com/terraform-aws-modules/terraform-aws-appconfig) - Создаёт ресурсы AWS AppConfig в AWS.
- [terraform-aws-atlantis](https://github.com/terraform-aws-modules/terraform-aws-atlantis) - Создаёт конфигурации Terraform для запуска [Atlantis](https://runatlantis.io) в AWS Fargate. Поддерживаются Github, Gitlab и BitBucket.
- [terraform-aws-autoscaling](https://github.com/terraform-aws-modules/terraform-aws-autoscaling) - Создаёт группы автоматического масштабирования и конфигурации запуска (проверенный модуль).
- [terraform-aws-customer-gateway](https://github.com/terraform-aws-modules/terraform-aws-customer-gateway) - Создаёт Customer Gateway в AWS.
- [terraform-aws-datadog-forwarders](https://github.com/terraform-aws-modules/terraform-aws-datadog-forwarders) - Создаёт в AWS ресурсы для пересылки журналов и метрик в Datadog.
- [terraform-aws-dms](https://github.com/terraform-aws-modules/terraform-aws-dms) - Создаёт ресурсы AWS DMS (Database Migration Service) в AWS.
- [terraform-aws-dynamodb-table](https://github.com/terraform-aws-modules/terraform-aws-dynamodb-table) - Создаёт таблицу DynamoDB в AWS.
- [terraform-aws-ec2-instance](https://github.com/terraform-aws-modules/terraform-aws-ec2-instance) - Создаёт экземпляры EC2 в AWS.
- [terraform-aws-ecr](https://github.com/cloudposse/terraform-aws-ecr) - Управляет реестрами контейнеров Docker в AWS ECR.
- [terraform-aws-ecs](https://github.com/terraform-aws-modules/terraform-aws-ecs) - Создаёт ресурсы AWS ECS в AWS.
- [terraform-aws-efs](https://github.com/cloudposse/terraform-aws-efs) - Описывает файловую систему EFS.
- [terraform-aws-eks](https://github.com/terraform-aws-modules/terraform-aws-eks) - Создаёт Elastic Kubernetes Service в AWS (очень популярный модуль).
- [terraform-aws-elb](https://github.com/terraform-aws-modules/terraform-aws-elb) - Создаёт балансировщик нагрузки Elastic в AWS (проверенный модуль).
- [terraform-aws-eventbridge](https://github.com/terraform-aws-modules/terraform-aws-eventbridge) - Создаёт ресурсы EventBridge в AWS.
- [terraform-aws-jenkins-ha-agents](https://github.com/neiman-marcus/terraform-aws-jenkins-ha-agents) - Развёртывание Jenkins на основе EC2 с агентами высокой доступности (spot). Работает на EFS для обеспечения неизменяемости. Полностью настраиваемый вариант с разумными значениями по умолчанию.
- [terraform-aws-jenkins](https://github.com/cloudposse-archives/terraform-aws-jenkins) - Собирает образ Docker с Jenkins, сохраняет его в репозитории ECR и развёртывает в Elastic Beanstalk со стеком Docker. :skull:
- [terraform-aws-key-pair](https://github.com/cloudposse/terraform-aws-key-pair) - Автоматически создаёт пары ключей SSH (открытый/закрытый ключ).
- [terraform-aws-lambda-auto-package](https://github.com/nozaq/terraform-aws-lambda-auto-package) - Модуль Terraform для описания функции Lambda, исходные файлы которой автоматически собираются и упаковываются для развёртывания в Lambda.
- [terraform-aws-lambda](https://github.com/terraform-aws-modules/terraform-aws-lambda) - Модуль Terraform собирает зависимости и пакеты, а также создаёт ресурсы AWS Lambda во множестве сочетаний.
- [terraform-aws-managed-service-prometheus](https://github.com/terraform-aws-modules/terraform-aws-managed-service-prometheus) - Создаёт ресурсы AWS Managed Service for Prometheus (AMP) в AWS.
- [terraform-aws-modules](https://github.com/terraform-aws-modules) - Коллекция модулей Terraform для AWS, поддерживаемых сообществом (включает официальные модули AWS).
- [terraform-aws-msk-kafka-cluster](https://github.com/terraform-aws-modules/terraform-aws-msk-kafka-cluster) - Создаёт ресурсы AWS MSK (Managed Streaming for Kafka) в AWS.
- [terraform-aws-notify-slack](https://github.com/terraform-aws-modules/terraform-aws-notify-slack) - Создаёт тему SNS и функцию Lambda, отправляющую уведомления в Slack.
- [terraform-aws-postgresql-rds](https://github.com/azavea/terraform-aws-postgresql-rds) - Создаёт PostgreSQL в RDS.
- [terraform-aws-rds-aurora](https://github.com/terraform-aws-modules/terraform-aws-rds-aurora) - Создаёт ресурсы кластера RDS Aurora в AWS (проверенный модуль).
- [terraform-aws-rds-proxy](https://github.com/terraform-aws-modules/terraform-aws-rds-proxy) - Создаёт ресурсы AWS RDS Proxy в AWS.
- [terraform-aws-rds](https://github.com/terraform-aws-modules/terraform-aws-rds) - Создаёт ресурсы RDS в AWS (проверенный модуль).
- [terraform-aws-redshift](https://github.com/terraform-aws-modules/terraform-aws-redshift) - Создаёт ресурсы Redshift в AWS.
- [terraform-aws-route53](https://github.com/terraform-aws-modules/terraform-aws-route53) - Создаёт ресурсы Route53 в AWS.
- [terraform-aws-s3-bucket](https://github.com/terraform-aws-modules/terraform-aws-s3-bucket) - Создаёт ресурсы бакетов S3 в AWS.
- [terraform-aws-secure-baseline](https://github.com/nozaq/terraform-aws-secure-baseline) - Настраивает аккаунт AWS с защищённой базовой конфигурацией на основе CIS Amazon Web Services Foundations.
- [terraform-aws-security-group](https://github.com/terraform-aws-modules/terraform-aws-security-group) - Создаёт группы безопасности EC2-VPC в AWS (проверенный модуль).
- [terraform-aws-ssh-bastion-service](https://github.com/joshuamkite/terraform-aws-ssh-bastion-service) - План Terraform для развёртывания stateless SSH-бастиона как сервиса в AWS.
- [terraform-aws-transit-gateway](https://github.com/terraform-aws-modules/terraform-aws-transit-gateway) - Создаёт ресурсы Transit Gateway в AWS.
- [terraform-aws-vpc](https://github.com/terraform-aws-modules/terraform-aws-vpc) - Создаёт ресурсы VPC в AWS (проверенный и очень популярный модуль).
- [terraform-aws-vpn-gateway](https://github.com/terraform-aws-modules/terraform-aws-vpn-gateway) - Создаёт ресурсы VPN Gateway в AWS.
- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Официальная коллекция проверенных модулей Microsoft для Azure, в которой лучшие практики WAF воплощены в коде для единообразного развёртывания инфраструктуры.
- [terraform-azurerm-aks](https://github.com/kjanshair/terraform-azurerm-aks) - Создаёт ресурсы AKS в Azure.
- [terraform-azurerm-iis](https://github.com/ghostinthewires/terraform-azurerm-iis-install) - Устанавливает сервер IIS на виртуальный экземпляр Azure.
- [terraform-azurerm-mysql](https://github.com/foreverXZC/terraform-azurerm-mysql) - Создаёт базу данных MySql в Azure.
- [terraform-azurerm-redis](https://github.com/rahulkhengare/terraform-azurerm-redis) - Создаёт Redis в Azure.
- [terraform-azurerm-sqlserver](https://github.com/metadevpro/terraform-azurerm-sqlserver-seed) - Создаёт базу данных SQL Server в Azure.
- [terraform-cloudflare-maintenance](https://github.com/adinhodovic/terraform-cloudflare-maintenance) - Модуль для создания страницы технического обслуживания с помощью Cloudflare Workers.
- [terraform-digitalocean-droplet](https://registry.terraform.io/modules/terraform-digitalocean-modules/droplet/digitalocean/latest) - Модуль Terraform для управления Droplet в DigitalOcean и связанными ресурсами.
- [terraform-ecs-jenkins](https://github.com/shuaibiyy/terraform-ecs-jenkins) - Развёртывает Jenkins в AWS ECS с помощью Terraform.
- [terraform-gce-atlantis](https://github.com/runatlantis/terraform-gce-atlantis) - Создаёт конфигурации Terraform для запуска [Atlantis](https://runatlantis.io) в Google Compute Engine.
- [terraform-google-project-factory](https://github.com/terraform-google-modules/terraform-google-project-factory) - Создание и настройка проекта Google Cloud Platform с Shared VPC, IAM, API и т. д.
- [terraform-helm-carbon-intensity-exporter](https://github.com/fabiocicerchia/terraform-helm-carbon-intensity-exporter) - Модуль Terraform/Helm для развёртывания Kubernetes Carbon Intensity Exporter.
- [terraform-helm-cloud-carbon-footprint](https://github.com/fabiocicerchia/terraform-helm-cloud-carbon-footprint) - Модуль Terraform/Helm для развёртывания Cloud Carbon Footprint в Kubernetes.
- [terraform-helm-kepler](https://github.com/fabiocicerchia/terraform-helm-kepler) - Модуль Terraform для развёртывания Kepler (профилирования энергопотребления Kubernetes) через Helm.
- [terraform-kubestack](https://github.com/kbst/terraform-kubestack) - Kubestack — фреймворк для команд разработки платформ Kubernetes: позволяет описать облачный нативный стек в одной кодовой базе Terraform и безопасно развивать платформу с помощью GitOps.
- [terraform-linode-k8s](https://registry.terraform.io/modules/linode/k8s/linode/latest) - Устанавливает Kubernetes на экземпляры Linode.
- [terraform-nixos](https://github.com/nix-community/terraform-nixos) - Набор модулей Terraform для развёртывания NixOS.
- [terraform-static-website-s3-cloudfront](https://github.com/sergej-brazdeikis/terraform-static-website-s3-cloudfront) - Создаёт статические сайты в AWS S3 и Cloudfront на основе переменных.
- [tf_aws_bastion_s3_keys](https://github.com/terraform-community-modules/tf_aws_bastion_s3_keys) - Создаёт бастион-хосты на AWS EC2.
- [typhoon](https://github.com/poseidon/typhoon) - Минимальный бесплатный дистрибутив Kubernetes с Terraform.

## Реестры с самостоятельным размещением

- [anthology](https://github.com/erikvanbrakel/anthology) - Реализация приватного реестра Terraform в качестве альтернативы официальному реестру.
- [boring-registry](https://github.com/boring-registry/boring-registry) - Приватный реестр модулей/провайдеров Terraform с аутентификацией по API-ключу и поддержкой блочного хранилища.
- [citizen](https://github.com/outsideris/citizen) - Приватный реестр модулей/провайдеров Terraform.
- [nrkno/terraform-registry](https://github.com/nrkno/terraform-registry) - Приватный реестр Terraform с подключаемыми серверными хранилищами.
- [petra](https://github.com/devoteamgcloud/petra) - Менеджер приватного реестра Terraform.
- [philips-labs/terraform-registry](https://github.com/philips-labs/terraform-registry) - Реестр Terraform для публикации произвольных выпусков провайдеров Terraform, размещённых на Github.
- [tapir](https://github.com/PacoVK/tapir) - Приватный реестр Terraform.
- [terraform-simple-registry](https://github.com/apparentlymart/terraform-simple-registry) - Простая реализация протоколов реестра Terraform.
- [terramantle.dev](https://terramantle.dev) - Реестр, ориентированный на анализ модулей и состояния и решающий задачи управления зависимостями.
- [Terrareg](https://github.com/matthewjohn/terrareg) - Реестр модулей Terraform.
- [terustry](https://github.com/veepee-oss/terustry) - Реестр провайдеров Terraform с открытым исходным кодом, работающий как прокси для выпусков GitLab или GitHub.
- [terralist](https://github.com/terralist/terralist) - Приватный реестр Terraform для модулей и провайдеров, управляемый через REST API.

## Управляемые реестры

- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Официальная инициатива Microsoft с проверенными, соответствующими стандартам модулями Terraform (и Bicep) для ресурсов и архитектурных шаблонов Azure; согласована с Well-Architected Framework.
- [cloudsmith](https://docs.cloudsmith.com/formats/terraform-modules-repository) - Управляемый хостинг пакетов для внутренних и внешних клиентов. :heavy_dollar_sign:
- [Terramantle](https://terramantle.dev) - Приватный реестр Terraform/OpenTofu с подробной аналитикой модулей, картой зависимостей и видимостью состояния.

## Провайдеры

### Провайдеры с поддержкой Hashicorp

- [terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) - Провайдер для Amazon Web Services.
- [terraform-provider-azurerm](https://github.com/hashicorp/terraform-provider-azurerm) - Провайдер для Azure.
- [terraform-provider-docker](https://github.com/hashicorp/terraform-provider-docker) - Провайдер для Docker. :skull:
- [terraform-provider-google](https://github.com/hashicorp/terraform-provider-google) - Провайдер для Google Cloud Platform.
- [terraform-provider-helm](https://github.com/hashicorp/terraform-provider-helm) - Провайдер для Helm.
- [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) - Провайдер для Kubernetes.
- [terraform-provider-vsphere](https://github.com/vmware/terraform-provider-vsphere) - Провайдер для VMware vSphere.

### Провайдеры с поддержкой поставщиков

- [terraform-provider-alicloud](https://github.com/aliyun/terraform-provider-alicloud) - Провайдер для Alibaba Cloud.
- [terraform-provider-artifactory](https://github.com/jfrog/terraform-provider-artifactory) - Провайдер для [JFrog Artifactory](https://jfrog.com/artifactory/).
- [terraform-provider-atlas](https://github.com/ariga/terraform-provider-atlas) - Провайдер для [Atlas](https://atlasgo.io/).
- [terraform-provider-azapi](https://github.com/Azure/terraform-provider-azapi) - Провайдер для REST API Azure Resource Manager.
- [terraform-provider-azuredevops](https://github.com/microsoft/terraform-provider-azuredevops) - Провайдер для Azure DevOps (VSTS).
- [terraform-provider-buildkite](https://github.com/buildkite/terraform-provider-buildkite) - Провайдер для Buildkite.
- [terraform-provider-checkly](https://github.com/checkly/terraform-provider-checkly) - Управление ресурсами [Checkly](https://www.checklyhq.com) для мониторинга API и сквозных тестов.
- [terraform-provider-coder](https://github.com/coder/terraform-provider-coder) - Провайдер для [Coder](https://coder.com).
- [terraform-provider-confluent](https://github.com/confluentinc/terraform-provider-confluent) - Провайдер для Confluent.
- [terraform-provider-datadog](https://github.com/DataDog/terraform-provider-datadog) - Провайдер для Datadog.
- [terraform-provider-devhelm](https://github.com/devhelmhq/terraform-provider-devhelm) - Провайдер для мониторинга доступности [DevHelm](https://devhelm.io): управление мониторами, каналами оповещений и страницами состояния как кодом.
- [terraform-provider-digitalocean](https://github.com/digitalocean/terraform-provider-digitalocean) - Провайдер для DigitalOcean.
- [terraform-provider-dominos](https://github.com/nat-henderson/terraform-provider-dominos) - Провайдер для Dominos Pizza.
- [terraform-provider-elasticstack](https://github.com/elastic/terraform-provider-elasticstack) - Провайдер для Elasticsearch и Kibana.
- [terraform-provider-env0](https://github.com/env0/terraform-provider-env0) - Провайдер для [env0](https://www.env0.com/).
- [terraform-provider-featureflip](https://github.com/canopy-labs/terraform-provider-featureflip) - Провайдер для флагов функций [Featureflip](https://featureflip.io/): проектов, сред, флагов, правил таргетирования, сегментов и ключей SDK.
- [terraform-provider-github](https://github.com/integrations/terraform-provider-github) - Провайдер для GitHub.
- [terraform-provider-gitlab](https://github.com/gitlabhq/terraform-provider-gitlab) - Провайдер для GitLab.
- [terraform-provider-graphql](https://github.com/sullivtr/terraform-provider-graphql) - Провайдер для запросов и мутаций GraphQL.
- [terraform-provider-hcloud](https://github.com/hetznercloud/terraform-provider-hcloud) - Провайдер для Hetzner Cloud.
- [terraform-provider-healthchecksio](https://github.com/kristofferahl/terraform-provider-healthchecksio) - Провайдер для управления ресурсами healthchecks.io.
- [terraform-provider-heroku](https://github.com/heroku/terraform-provider-heroku) - Провайдер для Heroku.
- [terraform-provider-ibm](https://github.com/IBM-Cloud/terraform-provider-ibm) - Провайдер для IBM Cloud.
- [terraform-provider-iterative](https://github.com/iterative/terraform-provider-iterative) - Плагин Terraform, разработанный с учётом задач машинного обучения.
- [terraform-provider-k8s](https://github.com/banzaicloud/terraform-provider-k8s) - Простой провайдер Kubernetes, работающий с любыми манифестами.
- [terraform-provider-keycloak](https://github.com/keycloak/terraform-provider-keycloak) - Провайдер для управления настройками сервера идентификации [Keycloak](https://www.keycloak.org/).
- [terraform-provider-linode](https://github.com/btobolaski/terraform-provider-linode) - Провайдер для Linode.
- [terraform-provider-nxip](https://github.com/uk-sw/terraform-provider-nxip) - Провайдер для [nxip](https://nx-ip.com), системы IPAM с распределением CIDR на основе пулов в облачной и локальной инфраструктуре. :heavy_dollar_sign:
- [terraform-provider-openstack](https://github.com/terraform-provider-openstack/terraform-provider-openstack) - Плагин для OpenStack.
- [terraform-provider-panos](https://github.com/PaloAltoNetworks/terraform-provider-panos) - Провайдер для межсетевых экранов нового поколения [Palo Alto Networks](https://www.paloaltonetworks.com/network-security).
- [terraform-provider-phare](https://github.com/phare/terraform-provider-phare) - Провайдер Terraform для [Phare](https://phare.io).
- [terraform-provider-planetscale](https://github.com/planetscale/terraform-provider-planetscale) - Провайдер Terraform для [PlanetScale](https://planetscale.com) (Vitess и Postgres).
- [terraform-provider-qovery](https://github.com/Qovery/terraform-provider-qovery) - Провайдер для [Qovery](https://www.qovery.com/) — управление развёртываниями Kubernetes, средами, приложениями, базами данных, диаграммами Helm и сервисами Terraform в AWS, GCP, Azure и Scaleway.
- [terraform-provider-pingdom](https://github.com/russellcardullo/terraform-provider-pingdom) - Провайдер для управления ресурсами Pingdom. :skull:
- [terraform-provider-rancher2](https://github.com/rancher/terraform-provider-rancher2) - Провайдер для Rancher v2.
- [terraform-provider-scalr](https://github.com/Scalr/terraform-provider-scalr) - Провайдер для [Scalr](https://www.scalr.com/).
- [terraform-provider-secrethub](https://github.com/secrethub/terraform-provider-secrethub) - Провайдер для SecretHub. :skull:
- [terraform-provider-sigsci](https://github.com/signalsciences/terraform-provider-sigsci) - Провайдер для Signal Sciences.
- [terraform-provider-snowflake](https://github.com/snowflakedb/terraform-provider-snowflake) - Провайдер для хранилища данных Snowflake.
- [terraform-provider-spinnaker](https://github.com/armory-io/terraform-provider-spinnaker) - Провайдер для [Spinnaker](https://spinnaker.io/).
- [terraform-provider-spotinst](https://github.com/spotinst/terraform-provider-spotinst) - Провайдер для spotinst.
- [terraform-provider-stripe](https://github.com/franckverrot/terraform-provider-stripe) - Провайдер для Stripe.
- [terraform-provider-ucloud](https://github.com/ucloud/terraform-provider-ucloud) - Провайдер для управления ресурсами UCloud.
- [terraform-provider-uptimerobot](https://github.com/louy/terraform-provider-uptimerobot) - Провайдер для управления ресурсами uptimerobot. :skull:
- [terraform-provider-vaulted](https://github.com/sumup-oss/terraform-provider-vaulted) - Зашифрованные секреты HashiCorp Vault через Terraform, которые можно хранить в SCM, например Git.
- [terraform-provider-scp](https://github.com/splunk/terraform-provider-scp) - Провайдер для Splunk Cloud Platform.

### Провайдеры сообщества

- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Провайдер Terraform для Coolify.
- [terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) - Провайдер Terraform для Docker.
- [terraform-provider-minio](https://github.com/aminueza/terraform-provider-minio) - Провайдер Terraform для управления бакетами MinIO S3 и пользователями IAM.
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Провайдер Terraform для Multipass.
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - Управляйте OpenRouter как кодом: рабочие пространства, защитные ограничения, API-ключи с лимитами расходов и участники организации. Terraform + OpenTofu.
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - Провайдер Terraform для оценки затрат Azure и контроля расходов.
- [terraform-provider-proxmox](https://github.com/Telmate/terraform-provider-proxmox) - Провайдер Terraform для Proxmox.
- [terraform-provider-seerr](https://github.com/Josh-Archer/terraform-provider-seerr) - Провайдер Terraform для Seerr (Overseerr/Jellyseerr).
- [terraform-provider-terracurl](https://github.com/devops-rob/terraform-provider-terracurl) - Провайдер для выполнения управляемых и неуправляемых вызовов API к целевой конечной точке.
- [terraform-provider-uname](https://github.com/julienlevasseur/terraform-provider-uname) - Провайдер Uname для Terraform.
- [terraform-provider-value](https://github.com/pseudo-dynamic/terraform-provider-value) - Провайдер Value для Terraform.
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Провайдер Terraform для Multipass.
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - Управляйте OpenRouter как кодом: рабочие пространства, защитные ограничения, API-ключи с лимитами расходов и участники организации. Terraform + OpenTofu.
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - Провайдер Terraform для оценки затрат Azure и контроля расходов.
- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Провайдер Terraform для Coolify.
- [terraform-provider-appstore](https://github.com/elevenode/terraform-provider-appstore) - Провайдер Terraform для Apple App Store Connect.
- [terraform-provider-expo](https://github.com/elevenode/terraform-provider-expo) - Провайдер Terraform для Expo Application Services (EAS).
- [terraform-provider-paddle](https://github.com/vivantel/terraform-provider-paddle) - Провайдер Terraform для ресурсов каталога Paddle Billing, операций жизненного цикла и данных поиска.
- [terraform-provider-seekrit](https://github.com/seekritdev/terraform-provider-seekrit) - Управление приложениями seekrit, средами, группами, сервисными токенами, разрешениями на ключи и секретами. Аргументы только для записи и эфемерные ресурсы не позволяют значениям секретов попасть в состояние.

## Тестирование

- [clarity](https://github.com/xchapter7x/clarity) - Декларативный тестовый фреймворк для модульного тестирования Terraform. :skull:
- [kitchen-terraform](https://github.com/newcontext-oss/kitchen-terraform) - Предоставляет плагины Test Kitchen для применения конфигурации Terraform и проверки полученного состояния Terraform с помощью контролей InSpec. :skull:
- [rspec-terraform](https://github.com/bsnape/rspec-terraform) - Тесты RSpec для модулей Terraform. :skull:
- [terraform_validate](https://github.com/elmundio87/terraform_validate) - Помогает обеспечивать соблюдение пользовательских стандартов в Terraform. :skull:
- [terraform-compliance](https://github.com/terraform-compliance/cli) - BDD-тестирование файлов Terraform.
- [terratest](https://github.com/gruntwork-io/terratest) - Terratest — библиотека Go, упрощающая написание автоматизированных тестов для кода инфраструктуры.

## Инструменты

- [AIaC](https://github.com/gofireflyio/aiac) - Генератор инфраструктуры как кода на основе искусственного интеллекта.
- [AirIAM](https://github.com/bridgecrewio/AirIAM) - AirIAM — инструмент AWS IAM для обеспечения минимальных привилегий при выполнении Terraform.
- [asdf](https://github.com/asdf-community/asdf-hashicorp) - Плагин HashiCorp для менеджера версий [asdf](https://github.com/asdf-vm/asdf).
- [astro](https://github.com/uber/astro/) - Инструмент для управления несколькими запусками Terraform одной командой. :ghost:
- [atlantis](https://github.com/runatlantis/atlantis) - Единый рабочий процесс совместной работы с Terraform через GitHub.
- [atmos](https://github.com/cloudposse/atmos) - Универсальный инструмент, преобразующий глубоко объединённые YAML-файлы во входные данные модулей.
- [aws2tf](https://github.com/aws-samples/aws2tf) - Автоматизирует импорт существующих ресурсов AWS в Terraform и формирует код HCL Terraform.
- [aztfexport](https://github.com/Azure/aztfexport) - Инструмент для передачи существующих ресурсов Azure под управление Terraform.
- [AzureNamer](https://azurenamingconventions.com/) - Создаёт соответствующие CAF имена для более чем 200 типов ресурсов Azure и экспортирует их как локальные значения Terraform с проверкой длины и допустимых символов в реальном времени.
- [balcony](https://oguzhan-yilmaz.github.io/balcony/) - Инструмент командной строки для удобного чтения данных AWS API. Также генерирует блоки импорта Terraform и код ресурсов Terraform.
- [bare-devcontainer/templates](https://github.com/bare-devcontainer/templates/tree/main/src/terraform) - Защищённый контейнер разработки Terraform с terraform-ls и кэшированием, упрощающим пересборку. Базовый образ доступен в [bare-devcontainer/images](https://github.com/bare-devcontainer/images/tree/main/terraform).
- [blast radius](https://github.com/28mm/blast-radius) - Интерактивная визуализация графов зависимостей Terraform. :skull:
- [cf-terraforming](https://github.com/cloudflare/cf-terraforming) - Утилита командной строки для переноса существующих ресурсов Cloudflare в Terraform.
- [cfnctl](https://github.com/rogerwelin/cfnctl) - Cfnctl переносит привычный интерфейс командной строки Terraform в AWS CloudFormation.
- [Checkov](https://github.com/bridgecrewio/checkov/) - Инструмент статического анализа Terraform для terraform>=0.12.
- [cloud-audit](https://github.com/gebalamariusz/cloud-audit) - CLI для аудита безопасности AWS с механизмом исправления, который генерирует код Terraform для устранения неправильных конфигураций.
- [CloudBurn](https://github.com/towardsthecloud/cloudburn) - Проверка политик затрат AWS для Terraform и CloudFormation в CI и активных аккаунтах AWS.
- [Coder](https://coder.com/) - Coder подготавливает среды разработки ПО в вашей инфраструктуре с помощью Terraform.
- [coretech/terrafile](https://github.com/coretech/terrafile) - Систематизирует управление внешними модулями из Github для использования в Terraform (написан на Go). :skull:
- [Cynative](https://github.com/cynative/cynative) - Фреймворк агента безопасности с открытым исходным кодом для проверки конфигураций Terraform и исследования активной инфраструктуры через облачные API только для чтения.
- [Datadef](https://datadef.io/repo-to-diagram) - Создаёт диаграммы архитектуры и документацию по репозиторию Terraform: анализирует файлы `.tf`, не запуская `terraform init` и не читая состояние, отображает модули как зоны с количеством по средам, ежедневно обновляет данные. :heavy_dollar_sign:
- [demonolith](https://github.com/schrieksoft/demonolith) - Разбивает монолитные проекты Terraform с помощью `demonolith refactor` (перемещение кода) и `demonolith migrate` (перенос в файлы .tfstate меньшего размера).
- [driftctl](https://github.com/snyk/driftctl) - Обнаруживает, отслеживает и сообщает об отклонениях инфраструктуры. :skull:
- [drifthound](https://github.com/drifthoundhq/drifthound) - Непрерывно обнаруживает отклонения инфраструктуры, ведёт историю и отправляет уведомления.
- [dxw/terrafile](https://github.com/dxw/terrafile) - Систематизирует управление внешними модулями из Github для использования в Terraform (написан на Ruby).
- [flora](https://github.com/ketchoop/flora) - Менеджер версий Terraform.
- [fogg](https://github.com/chanzuckerberg/fogg) - Инструмент для устранения рутины при управлении репозиториями terraform.
- [former2](https://github.com/iann0036/former2) - Генерирует конфигурацию Terraform на основе существующих ресурсов в вашем аккаунте AWS.
- [fuzzy-terraform-rm](https://github.com/paololazzari/fuzzy-terraform-rm) - Инструмент командной строки с нечётким поиском для удаления ресурсов из состояния terraform.
- [gaia](https://github.com/gaia-app/gaia) - Gaia — интерфейс Terraform 🌍 для ваших модулей и платформа самостоятельного предоставления инфраструктуры 👨‍💻. :skull:
- [hcl2json](https://github.com/tmccombs/hcl2json) - Преобразует hcl2 в json.
- [hcldump](https://github.com/magodo/hcldump) - Выводит абстрактное синтаксическое дерево HCL (v2).
- [hcledit (mercari)](https://github.com/mercari/hcledit) - Пакет Go для редактирования конфигурации HCL.
- [hcledit (minamijoyo)](https://github.com/minamijoyo/hcledit) - Редактор HCL для командной строки.
- [hclgrep](https://github.com/magodo/hclgrep) - Поиск по синтаксической структуре для HCL(v2).
- [hq](https://github.com/miller-time/hq) - Обработчик HCL для командной строки.
- [iam-policy-json-to-terraform](https://github.com/flosell/iam-policy-json-to-terraform) - Небольшой инструмент для преобразования политики IAM в JSON в aws_iam_policy_document Terraform.
- [Infracost](https://github.com/infracost/infracost) - Оценка стоимости облака для Terraform в командной строке и pull request.
- [inframap](https://github.com/cycloidio/inframap) - Читает tfstate или HCL и строит граф для каждого провайдера, показывая наиболее важные и актуальные ресурсы.
- [InfraScan](https://infrascan.soldevelo.com) - Продвинутый аудитор инфраструктуры для анализа затрат и безопасности Terraform, AWS и Kubernetes.
- [InfraSketch](https://infrasketch.cloud) - Бесплатный браузерный инструмент для визуализации HCL Terraform и Docker Compose в виде архитектурных диаграмм. Поддерживает AWS и Azure. Регистрация и учётные данные не нужны.
- [json2hcl](https://github.com/kvz/json2hcl) - Преобразует JSON в HCL и наоборот. :ghost:
- [k2tf](https://github.com/sl1pm4t/k2tf) - Конвертер YAML Kubernetes в HCL Terraform.
- [Kapitan](https://github.com/kapicorp/kapitan) - Генерирует JSON Terraform/OpenTofu и другие конфигурации инфраструктуры из шаблонов на основе инвентаризации.
- [KICS](https://github.com/Checkmarx/kics) - Сканирует проекты IaC на уязвимости безопасности, проблемы соответствия требованиям и ошибки конфигурации инфраструктуры. Поддерживает проекты Terraform, манифесты Kubernetes, Dockerfile, шаблоны AWS CloudFormation и сценарии Ansible.
- [layerform](https://github.com/briefercloud/layerform) - Layerform помогает создавать повторно используемые стеки сред с помощью обычных файлов .tf. Подходит для нескольких сред «staging». :skull:
- [library.tf](https://library.tf) - Library.tf предоставляет информацию реестров Terraform и OpenTofu, а также аналитику для принятия решений. Позволяет быстро находить поддерживаемые и сопровождаемые модули и провайдеры без множества ошибок.
- [modules.tf-lambda](https://github.com/antonbabenko/modules.tf-lambda) - Генератор инфраструктуры как кода, преобразующий визуальные диаграммы [Cloudcraft.co](https://cloudcraft.co) в Terraform.
- [para](https://github.com/paraterraform/para) - Сторонний менеджер плагинов и «швейцарский армейский нож» для Terraform/Terragrunt — один инструмент для всех рабочих процессов. :skull:
- [pike](https://github.com/jamesWoolfenden/pike) - Pike вычисляет разрешения или политику IAM, необходимые для сборки конфигурации Terraform.
- [pipeform](https://github.com/magodo/pipeform) - TUI для среды выполнения Terraform.
- [platform-skills](https://github.com/nitinjain999/platform-skills) - Справочник с поддержкой ИИ для работы с Terraform: проверка минимальных привилегий IAM, анализ радиуса воздействия, влияния на состояние, ограничений провайдеров и планирование отката. Работает как плагин Claude, Codex, Cursor и Copilot.
- [pluralith](https://www.pluralith.com/) - Визуализация состояния Terraform и автоматическая генерация документации по инфраструктуре. :heavy_dollar_sign:
- [pre-commit-terraform](https://github.com/antonbabenko/pre-commit-terraform) - Git-хуки pre-commit для Terraform и Terragrunt: автоформатирование, проверка, обновление документации, проверки безопасности, оценка затрат и многое другое.
- [pretf](https://github.com/raymondbutcher/pretf) - Обёртка Terraform, генерирующая конфигурацию Terraform с помощью Python. См. [документацию pretf](https://pretf.readthedocs.io/en/latest/). :skull:
- [prettyplan for TF 0.12+](https://github.com/cloudandthings/terraform-pretty-plan) - Prettyplan для TF 0.12+ ([доступен онлайн](https://cloudandthings.github.io/terraform-pretty-plan/)) — небольшой инструмент для удобного просмотра больших планов Terraform.
- [prettyplan](https://github.com/chrislewisdev/prettyplan) - Prettyplan ([доступен онлайн](https://chrislewisdev.github.io/prettyplan/)) — небольшой инструмент для удобного просмотра больших планов Terraform. :ghost:
- [pug](https://github.com/leg100/pug) - Терминальный интерфейс для опытных пользователей Terraform.
- [pytest-terraform](https://github.com/cloud-custodian/pytest-terraform) - Плагин pytest для Terraform с фикстурами и поддержкой автономного повторного воспроизведения.
- [python-terrafile](https://github.com/claranet/python-terrafile) - Систематизирует управление внешними модулями из Github для использования в Terraform.
- [regula](https://github.com/fugue/regula) - Проверяет код инфраструктуры Terraform до развёртывания на ошибки конфигурации безопасности AWS, Azure и Google Cloud и нарушения соответствия требованиям.
- [redc](https://github.com/wgpsec/redc) - Инструмент автоматизации инфраструктуры красной команды на базе Terraform; поддерживает мультиоблачное развёртывание (Alibaba Cloud, Tencent Cloud, AWS и др.) одной командой для создания, настройки и удаления сред красной команды.
- [renovate-config](https://github.com/SpotOnInc/renovate-config) - Общие предустановки конфигурации для Renovatebot, особенно полезные специалистам DevOps.
- [Riftmap](https://riftmap.dev) - Механизм анализа зависимостей и влияния изменений между репозиториями: сканирует инфраструктуру Terraform, Docker, Helm и др., показывая зависимости и последствия изменений.
- [rover](https://github.com/im2nguyen/rover) - Интерактивный обозреватель состояния и конфигурации Terraform.
- [ruby-terraform](https://github.com/infrablocks/ruby_terraform) - Простая оболочка Ruby для запуска команд terraform.
- [sato](https://github.com/JamesWoolfenden/sato) - Sato помогает преобразовать устаревшую конфигурацию Cloudformation в Terraform.
- [scenery](https://github.com/dmlittle/scenery) - Ещё один инструмент для улучшения читаемости вывода плана Terraform. :ghost: :skull:
- [scratchrelaxtv](https://github.com/YakDriver/scratchrelaxtv) - Простой инструмент на Python для разработки модулей: извлекает переменные из `main.tf` для создания `variables.tf` и формирует заготовку использования модуля из `variables.tf`.
- [serverless.tf - Doing serverless with Terraform](https://serverless.tf/) - serverless.tf — фреймворк для разработки, сборки, развёртывания и защиты бессерверных приложений и инфраструктуры в AWS с помощью Terraform. [Подробнее](https://github.com/antonbabenko/serverless.tf).
- [Shieldly](https://github.com/shieldly-io/cli) - Анализ безопасности политик IAM и CloudFormation, созданных Terraform, с помощью ИИ: объясняет риски разрешений и способы их устранения. Есть бесплатный тариф, CLI и GitHub Action.
- [Shisho](https://github.com/flatt-security/shisho) - Лёгкий статический анализатор для Terraform.
- [Speakeasy](https://www.speakeasy.com/) - Генерация провайдера Terraform из спецификации OpenAPI.
- [stacks](https://github.com/cisco-open/stacks) - Предварительный обработчик кода Terraform.
- [SyncVey](https://github.com/MR-TABATA/SyncVey) - Самостоятельно размещаемый реестр ресурсов AWS с обнаружением расхождений между tfstate и активным состоянием AWS на уровне атрибутов, запланированными проверками и предупреждениями об окончании поддержки промежуточного ПО.
- [tads-boilerplate](https://github.com/Thomvaill/tads-boilerplate) - Мощь Ansible и Terraform плюс простота Docker Swarm — инфраструктура как код и лучшие практики DevOps.
- [tau](https://github.com/avinor/tau) - Tau — тонкая обёртка над terraform для управления несколькими развёртываниями, зависимостями и секретами. :skull:
- [tenv](https://github.com/tofuutils/tenv) - Менеджер версий OpenTofu/Terraform/Terragrunt.
- [terraboard](https://github.com/camptocamp/terraboard) - Веб-панель для просмотра состояний Terraform.
- [terraboot](https://github.com/MastodonC/terraboot) - DSL для генерации конфигурации terraform и её запуска.
- [terracognita](https://github.com/cycloidio/terracognita) - Считывает данные существующих облачных провайдеров (обратный Terraform) и генерирует код инфраструктуры в конфигурации Terraform.
- [terracost](https://github.com/cycloidio/terracost) - Оценка стоимости облака для Terraform в командной строке.
- [terracove](https://elementtech.github.io/terracove/) - Рекурсивно проверяет дерево каталогов на различия Terraform и покрытие тестами.
- [TerraDepot](https://github.com/derBroBro/TerraDepot) - Репозиторий состояний Terraform на основе стандартного удалённого бэкенда http. Позволяет централизованно управлять tfstates в AWS S3.
- [TerraDrift](https://github.com/niravraychura/terradrift) - Самостоятельно размещаемый CLI для обнаружения дрейфа Terraform/OpenTofu в CI и cron (на основе plan; не ведёт инвентаризацию неуправляемых ресурсов).
- [terradozer](https://github.com/chenrui333/terradozer) - Выполнение terraform destroy без файлов конфигурации.
- [terraeasy](https://github.com/jaceq/terraeasy) - Простая обёртка Terraform.
- [terraform-ai-skills](https://github.com/anmolnagpal/terraform-ai-skills) - Навык с поддержкой ИИ для GitHub Copilot, Claude и ChatGPT, автоматизирующий массовое управление модулями Terraform — обновление провайдеров, стандартизацию рабочих процессов и выпуски в 10–200+ репозиториях AWS, GCP, Azure и DigitalOcean.
- [terraform-aws-clickops-notifier](https://github.com/cloudandthings/terraform-aws-clickops-notifier) - Уведомляет о действиях, выполняемых в консоли AWS.
- [terraform-bundle](https://github.com/hashicorp/terraform/tree/main/tools/terraform-bundle) - Собирает комплекты с бинарным файлом Terraform и бинарными файлами провайдеров. Полезно для CI и изолированных от сети сред Terraform Enterprise.
- [terraform-cdk](https://github.com/hashicorp/terraform-cdk) - CDK (Cloud Development Kit) для Terraform позволяет разработчикам описывать облачную инфраструктуру на знакомых языках программирования и развёртывать её с помощью HashiCorp Terraform.
- [terraform-cleaner](https://github.com/sylwit/terraform-cleaner) - Небольшая утилита, обнаруживающая неиспользуемые переменные в модулях terraform.
- [terraform-credentials-vault](https://github.com/oulman/terraform-credentials-vault) - Плагин Terraform «credentials helper», предоставляющий учётные данные для сервисов Terraform (приватных реестров модулей, Terraform Cloud и т. д.) через переменные среды.
- [terraform-diff](https://github.com/contentful-labs/terraform-diff) - Всегда знайте, где нужно выполнить Terraform plan и apply!
- [terraform-docs](https://github.com/terraform-docs/terraform-docs) - Простая утилита для генерации документации из модулей terraform.
- [terraform-graph-beautifier](https://github.com/pcasteran/terraform-graph-beautifier) - Утилита командной строки, преобразующая почти непригодный вывод terraform graph в более понятное и наглядное представление.
- [terraform-iam-policy-validator](https://github.com/awslabs/terraform-iam-policy-validator) - CLI проверяет политики AWS IAM в шаблоне Terraform на соответствие рекомендациям AWS IAM.
- [terraform-landscape](https://github.com/coinbase/terraform-landscape) - *(только версии 0.11 и ниже)* Улучшает вывод плана Terraform, делая его удобнее для чтения и понимания.
- [terraform-operator](https://github.com/GalleyBytes/terraform-operator) - CRD Kubernetes для обработки операций Terraform.
- [terraform-plan-parser](https://github.com/lifeomic/terraform-plan-parser) - Утилита командной строки и API JavaScript для разбора stdout команды `terraform plan` и преобразования результата в JSON. :ghost:
- [terraform-provisioner](https://github.com/shuaibiyy/terraform-provisioner) - Инструмент для управления несколькими запусками одних и тех же сценариев Terraform.
- [terraform-rake-tasks](https://github.com/gina-alaska/terraform-rake-tasks) - Общие задачи Rake для управления планами terraform.
- [terraform-repl](https://github.com/paololazzari/terraform-repl) - Обёртка terraform console для более удобной интерактивной работы в консоли.
- [Terraform-Visual](https://github.com/hieven/terraform-visual) - Простой, но мощный инструмент для визуализации плана Terraform.
- [terravision](https://github.com/patrickchugh/terravision) - Создаёт профессиональные диаграммы облачной архитектуры по коду Terraform с официальными значками и стандартами оформления AWS/Azure/GCP. Полностью работает на стороне клиента, поддерживает интеграцию с CI/CD.
- [terraform.py](https://github.com/mantl/terraform.py) - Сценарий динамической инвентаризации Ansible для разбора файлов состояния Terraform. :skull:
- [terraformer](https://github.com/chenrui333/terraformer) - CLI для генерации файлов terraform на основе существующей инфраструктуры. Инфраструктура как код. Поддерживается множество провайдеров.
- [terraforming](https://github.com/dtan4/terraforming) - Экспортирует существующие ресурсы AWS в формате Terraform (tf, tfstate). Аналог `terraformer`. :skull:
- [terraformize](https://github.com/naorlivne/terraformize) - Применение и уничтожение модулей Terraform через простой REST API. :skull:
- [terraformsh](https://github.com/pwillis-els/terraformsh) - Обёртка на Bash для удобной работы в CLI и создания DRY-иерархических конфигураций.
- [terragrunt-atlantis-config](https://github.com/transcend-io/terragrunt-atlantis-config) - Генерирует конфигурацию Atlantis для проектов Terragrunt.
- [terragrunt](https://github.com/gruntwork-io/terragrunt) - Terragrunt — тонкая обёртка для Terraform с инструментами, помогающими не дублировать конфигурации, работать с несколькими модулями Terraform и управлять удалённым состоянием.
- [terrahelp](https://github.com/opencredo/terrahelp) - Утилита командной строки с дополнительными функциями, полезными при работе с Terraform.
- [terrahub](https://github.com/tfxor/terrahub) - TerraHub — инструмент автоматизации и оркестрации terraform. Интегрирован с console.terrahub.io — корпоративным графическим интерфейсом для просмотра выполнения terraform в реальном времени, аудита и отчётов об истории запусков. :heavy_dollar_sign:
- [terramagic](https://github.com/miltlima/terramagic) - Инструмент-мастер для автоматического создания папок и файлов terraform, написанный на Python!
- [terramate](https://github.com/terramate-io/terramate) - Инструмент для управления несколькими стеками Terraform с поддержкой обнаружения изменений и генерации кода.
- [terrap-cli](https://github.com/sirrend/terrap-cli) - Terrap — мощный CLI-инструмент, сканирующий инфраструктуру и выявляющий необходимые изменения.
- [terrars](https://github.com/andrewbaxter/terrars) - Terrars — инструмент для создания стеков Terraform на Rust. Альтернатива CDK.
- [terrascan](https://github.com/tenable/terrascan) - Набор проверок безопасности и лучших практик для статического анализа шаблонов terraform.
- [terrascope](https://github.com/spilliams/terrascope) - Оркестратор сборки для монорепозиториев terraform.
- [terrashine](https://isawan.github.io/terrashine/) - Реализация зеркала провайдеров terraform, автоматически кэширующая зависимости по мере запроса провайдеров.
- [terraspace](https://terraspace.cloud) - Фреймворк Terraform.
- [terrastate](https://github.com/rohinivsenthil/terrastate) - Расширение Visual Studio Code для мониторинга, развёртывания и уничтожения ресурсов Terraform в рабочей области.
- [terratag](https://github.com/env0/terratag) - Terratag — CLI-инструмент для автоматического создания и поддержки тегов всех ресурсов AWS, Azure и GCP в Terraform.
- [tf-init-booster](https://github.com/hayorov/terraform-init-booster) - Предварительная процедура перед Terraform, ускоряющая загрузку модулей для крупных схем.
- [tf-profile](https://github.com/datarootsio/tf-profile/) - Профилировщик запусков Terraform. Создаёт общую статистику, статистику ресурсов или визуализации.
- [tf-summarize](https://github.com/dineshba/tf-summarize) - Утилита командной строки для вывода сводки плана terraform.
- [tf-why](https://github.com/Raj-glitch-max/tf.why) - CLI-инструмент, связывающий дрейф Terraform с вызвавшим его субъектом AWS через поиск в CloudTrail.
- [tfaction](https://github.com/suzuki-shunsuke/tfaction) - Коллекция GitHub Actions для рабочего процесса Terraform с заданными предпочтениями.
- [tfautomv](https://github.com/busser/tfautomv) - Автоматически создаёт блоки Terraform `moved` для простого рефакторинга.
- [tfcmt](https://github.com/suzuki-shunsuke/tfcmt) - CLI для отправки результата plan и apply в комментарий к Pull Request.
- [tfedit](https://github.com/minamijoyo/tfedit) - Инструмент рефакторинга для Terraform.
- [tfenv](https://github.com/tfutils/tfenv) - Менеджер версий Terraform, вдохновлённый rbenv.
- [tfgen](https://github.com/0xDones/tfgen) - Генератор кода Terraform для единообразной кодовой базы и соблюдения принципа DRY.
- [tfgpt](https://github.com/flavius-dinu/tfgpt) - CLI-инструмент, интегрирующий Terraform с GPT-3.5 Turbo от OpenAI для объяснения команд и концепций Terraform.
- [tfimport](https://github.com/coolapso/tfimport) - CLI-инструмент для автоматизации импорта существующей инфраструктуры в tfstate.
- [tfjson](https://github.com/palantir/tfjson) - Утилита для чтения файла плана Terraform и вывода его в формате JSON. :skull:
- [tfk8s](https://github.com/jrhouston/tfk8s) - Инструмент для преобразования манифестов Kubernetes YAML в HCL Terraform.
- [tflint](https://github.com/terraform-linters/tflint) - Линтер Terraform для обнаружения ошибок, которые нельзя выявить с помощью `terraform plan`.
- [tfmake](https://github.com/tfmake/tfmake) - Автоматизация Terraform с помощью make.
- [tfmask](https://github.com/cloudposse-archives/tfmask) - Утилита Terraform для маскировки выбранных выходных данных `terraform plan` и `terraform apply`. :skull:
- [tfmigrate](https://github.com/minamijoyo/tfmigrate) - Инструмент миграции состояния Terraform для GitOps.
- [tfmigrator](https://github.com/tfmigrator/cli) - Библиотека Go и CLI для миграции конфигурации и состояния Terraform.
- [tfmodcache](https://github.com/Rezarys/tfmodcache) - Локальный общий кэш модулей для Terraform и OpenTofu; `terraform init` больше не загружает повторно уже имеющиеся модули. Автор — я.
- [tfmv](https://github.com/suzuki-shunsuke/tfmv) - Переименовывает ресурсы Terraform и создаёт блоки moved.
- [tfocus](https://github.com/nwiizo/tfocus) - tfocus — интерактивный инструмент для выбора и выполнения plan/apply Terraform для конкретных ресурсов. Это «аварийный инструмент», не предназначенный для повседневного использования.
- [tfprovidercheck](https://github.com/suzuki-shunsuke/tfprovidercheck) - CLI для предотвращения запуска вредоносных провайдеров Terraform.
- [tfproviderlint](https://github.com/bflad/tfproviderlint) - Инструмент линтинга провайдеров Terraform.
- [tfrepl](https://github.com/ysoftwareab/tfrepl) - REPL для Terraform с полноценной работой в оболочке. На основе Readline. Без зависимостей. Сохранение изменений конфигурации. История.
- [tfreveal](https://github.com/breml/tfreveal) - Утилита Terraform для отображения планов с раскрытием всех секретных (чувствительных) значений.
- [tfscaffold](https://github.com/tfutils/tfscaffold) - Фреймворк управления многосредовой и многокомпонентной инфраструктурой AWS под управлением terraform.
- [tfschema](https://github.com/minamijoyo/tfschema) - Инспектор схем провайдеров Terraform.
- [tfsec](https://github.com/aquasecurity/tfsec) - Инструмент статического анализа Terraform, поддерживающий terraform <0.12 и >=0.12 и напрямую интегрирующийся с анализатором HCL для повышения точности результатов.
- [tfsort](https://github.com/AlexNabokikh/tfsort) - Утилита CLI для сортировки переменных и выходных значений Terraform.
- [tftarget](https://github.com/future-architect/tftarget) - CLI-инструмент для интерактивного выполнения `terraform xxx -target={...}`.
- [tftree](https://github.com/busser/tftree) - Показывает стек вызовов модулей Terraform в терминале.
- [tftui](https://github.com/idoavrah/terraform-tui) - Текстовый интерфейс для состояния Terraform.
- [tfupdate](https://github.com/minamijoyo/tfupdate) - Обновляет ограничения версий в конфигурациях Terraform.
- [tfvar](https://github.com/shihanng/tfvar) - tfvar анализирует конфигурации или модули Terraform и извлекает переменные в выбранные форматы (tfvar, переменные среды и т. д.) для редактирования.
- [tfvault](https://github.com/tedilabs/tfvault) - Универсальный помощник для учётных данных Terraform с подключаемыми хранилищами секретов (системное хранилище ключей, pass/gopass, переменные среды) и изоляцией аккаунтов для каждого профиля.
- [tfvaultenv](https://github.com/oulman/tfvaultenv) - tfvaultenv читает секреты из HashiCorp Vault и выводит переменные среды для провайдеров Terraform.
- [tfwrapper](https://github.com/manheim/tfwrapper) - RubyGem, предоставляющий задачи rake для упорядоченного запуска Hashicorp Terraform.
- [tfmcp](https://github.com/nwiizo/tfmcp) - CLI для взаимодействия с Terraform через Model Context Protocol (MCP), позволяющий ИИ-ассистентам, например Claude, управлять средами Terraform.
- [tgf](https://github.com/coveooss/tgf) - Интерфейс Terragrunt для запуска Terragrunt/Terraform через Docker.
- [threatcl](https://github.com/threatcl/threatcl) - Документирование моделей угроз с помощью HCL.
- [tofuenv](https://github.com/tofuutils/tofuenv) - Менеджер версий OpenTofu, вдохновлённый tfenv.
- [tpm](https://github.com/Madh93/tpm) - Менеджер пакетов для провайдеров Terraform.
- [travelgrunt](https://github.com/ivanilves/travelgrunt) - Перемещайтесь по [моно]репозиториям без утомительных усилий!
- [trupositive](https://github.com/trupositive-ai/trupositive) - Обёртка с нулевой настройкой, автоматически добавляющая метаданные Git (SHA коммита, ветку, репозиторий) ко всем ресурсам под управлением Terraform.
- [validIaC](https://github.com/gofireflyio/validiac) - ValidIaC объединяет лучшие инструменты с открытым исходным кодом, помогая соблюдать лучшие практики Terraform, поддерживать порядок и обеспечивать безопасность.
- [xterrafile](https://github.com/devopsmakers/xterrafile) - Систематизирует управление внешними модулями из реестра модулей, Git или локальных каталогов для Terraform (написан на Go). :skull:
- [yj](https://github.com/sclevine/yj) - CLI для преобразования между YAML, TOML, JSON и HCL. Сохраняет порядок элементов map.
- [yor](https://github.com/bridgecrewio/yor) - Автоматически добавляет теги и отслеживает фреймворки инфраструктуры как кода (Terraform, Cloudformation и Serverless).
- [zephy](https://github.com/henrybravo/zephy) - Сравнивает ресурсы Azure в подписке с ресурсами рабочих областей Terraform Enterprise (HCP и самостоятельное размещение), когда стратегия тегирования облака недостаточна.

### Непрерывная интеграция

- [opentofu-updater-action](https://github.com/drumandbytes/opentofu-updater-action) - GitHub Action, поддерживающий актуальность провайдеров и модулей OpenTofu/Terraform, диаграмм Helm и образов контейнеров путём создания pull request.
- [setup-terraform](https://github.com/hashicorp/setup-terraform) - Настраивает CLI Terraform в рабочем процессе GitHub Actions.
- [terraform-plan](https://github.com/cds-snc/terraform-plan) - GitHub Action для запуска Terraform plan и добавления комментария с изменениями.
- [terraform-risk-assessor](https://github.com/Liam-Johnston/terraform-risk-assessor) - GitHub Action анализирует с помощью ИИ изменения плана Terraform и публикует в pull request комментарий с оценкой рисков.

### Расширения для VS Code

- [HashiCorp Terraform](https://marketplace.visualstudio.com/items?itemName=hashicorp.terraform)
- [vscode-terraform-live-graph](https://github.com/adamiBs/vscode-terraform-live-graph) - Расширение Terraform Live Graph для Visual Studio Code позволяет строить граф Terraform в реальном времени по мере написания кода.
- [tf-nav](https://marketplace.visualstudio.com/items?itemName=owenrumney.tf-nav) - Расширение навигации по Terraform, создающее индекс ресурсов по типам файлов и удобное дерево для навигации.

## Библиотеки

- [hcl-rs](https://github.com/martinohmann/hcl-rs) - Библиотеки разбора и кодирования HCL для Rust с поддержкой serde.
- [hcl4j](https://github.com/wondrify/hcl4j) - Парсер HCL на Java.
- [nu_plugin_hcl](https://github.com/Yethal/nu_plugin_hcl) - Плагин-парсер HCL для [Nushell](https://github.com/nushell/nushell).
- [pyhcl](https://github.com/virtuald/pyhcl) - Парсер HCL на Python.
- [python-hcl2](https://github.com/amplify-education/python-hcl2/) - Парсер HCL2 на Python.
- [rhcl](https://github.com/winebarrel/rhcl) - Чистый парсер HCL на Ruby. :skull:
- [tree-sitter-hcl](https://github.com/tree-sitter-grammars/tree-sitter-hcl) - Грамматика HCL для tree-sitter.

## Шаблоны проектов

- [Solo-Engineer Stack](https://github.com/sarmakska/terraform-stack) - Единый репозиторий Terraform, связывающий Vercel + Supabase + Cloudflare + DigitalOcean в платформу для независимых SaaS-проектов. Одна команда `terraform apply` создаёт проект Next.js, проект Supabase с передачей переменных среды в Vercel, зону Cloudflare с R2 и Workers KV, а также Droplet DigitalOcean с мониторингом.
- [Terraform Generator](https://github.com/sudokar/generator-tf-module) - Заготовка нового модуля или проекта terraform с поддержкой тестовых фреймворков (terratest и kitchen-terraform).
- [Terraform GitOps Framework](https://www.kubestack.com) - Всё необходимое для создания надёжной автоматизации кластеров Kubernetes AKS, EKS и GKE в одном бесплатном фреймворке с открытым исходным кодом.

## Самостоятельно размещаемые платформы Terraform

- [Snap CD](https://github.com/schrieksoft/snapcd) - Полнофункциональная платформа непрерывного развёртывания для модульных развёртываний с изолированными исполнителями, автоматизацией с учётом зависимостей и точным управлением доступом.
- [Lynx](https://github.com/clivern/lynx) - Быстрый, безопасный и надёжный бэкенд Terraform. Есть удобная панель управления, управление проектами и средами, версионирование состояния, блокировки и снимки.
- [OTF](https://github.com/leg100/otf) - Open Terraforming Framework — альтернатива Terraform Enterprise с открытым исходным кодом и полной интеграцией CLI Terraform.
- [Terrakube](https://docs.terrakube.io) - Альтернатива Terraform Enterprise с открытым исходным кодом: приватный реестр, удалённое состояние, пользовательские процессы, плановые рабочие области и визуализация состояний.
- [Digger](https://digger.dev) - Альтернатива Terraform Cloud с открытым исходным кодом — выполнение задач Terraform plan и apply в CI.
- [cloud-concierge](https://github.com/dragondrop-cloud/cloud-concierge) - Решение с открытым исходным кодом для описания неуправляемых ресурсов в Terraform, обнаружения дрейфа и анализа затрат и безопасности облака; результаты доставляются в виде Pull Request.
- [Stack-Lifecycle-Deployment](https://github.com/D10S0VSkY-OSS/Stack-Lifecycle-Deployment) - Решение с открытым исходным кодом, определяющее и управляющее полным жизненным циклом ресурсов, используемых и подготовленных в облаке.
- [Burrito](https://github.com/padok-team/burrito) - Оператор Kubernetes TACoS — «ArgoCD для Terraform».
- [Terrateam](https://terrateam.io) - Альтернатива Terraform Cloud/Enterprise с открытым исходным кодом, ориентированная на GitOps, с нативной интеграцией GitHub и рассчитанная на масштабируемость, безопасность и надёжность.


## Управляемые платформы Terraform :heavy_dollar_sign:

- [compliance.tf](https://compliance.tf) - Модули Terraform со встроенными требованиями SOC 2, PCI DSS, HIPAA, NIST 800-53 и более чем 35 других стандартов. Несоответствующие требованиям конфигурации отклоняются при `terraform plan`, до применения изменений. :heavy_dollar_sign:
- [ControlMonkey](https://www.controlmonkey.io/) - Альтернатива Terraform Cloud с генерацией кода Terraform/OpenTofu, инвентаризацией облачных ресурсов и оценкой покрытия IaC. Включает готовые политики, устранение дрейфа и сканер активности ClickOps. :heavy_dollar_sign:
- [Firefly](https://www.firefly.ai/) - Альтернатива Terraform Cloud, использующая ваши CI-инструменты. Firefly также сканирует облако для оценки покрытия IaC и обнаружения дрейфа. :heavy_dollar_sign:
- [Scalr](https://www.scalr.com/) - Альтернатива Terraform Enterprise с интеграцией OPA, организационной структурой, пользовательскими хуками, нативными интеграциями с платформами DevOps и централизованной отчётностью. :heavy_dollar_sign:
- [Stategraph](https://stategraph.com) - Terraform и OpenTofu без узкого места в виде файла состояния. Замените плоский файл состояния настоящей базой данных. Команды могут планировать параллельно, запрашивать состояние через SQL и выполнять планы за секунды вместо минут. :heavy_dollar_sign:
- [env0](https://www.env0.com/) - Альтернатива Terraform Cloud/Enterprise с интеграцией OPA, пользовательскими процессами и поддержкой Terragrunt. :heavy_dollar_sign:
- [Brainboard](https://www.brainboard.co) - Визуальное проектирование, развёртывание и управление современной облачной инфраструктурой у любого поставщика: AWS, GCP, Azure. :heavy_dollar_sign:
- [Spacelift](https://spacelift.io/) - Альтернатива Terraform Cloud/Enterprise. Совместная платформа доставки инфраструктуры для Terraform. :heavy_dollar_sign:
- [StackGuardian](https://stackguardian.io/) - Платформа описания инфраструктуры как кода и оркестрации, преобразующая облачные ресурсы в IaC; предлагает рабочие процессы на основе политик Tirith, OPA и Checkov, поддержку частных сред выполнения и шаблоны без кода. :heavy_dollar_sign:

## Инструменты Terraform Enterprise

- [terraform-enterprise-cli](https://github.com/skierkowski/terraform-enterprise-cli) - Интерфейс командной строки Terraform Enterprise.
- [terraform-enterprise-client](https://github.com/skierkowski/terraform-enterprise-client) - Клиент API Terraform Enterprise на Ruby и инструмент командной строки.
- [terraform-enterprise-migrator](https://github.com/sil-org/tfc-ops) - Сценарий миграции сред Terraform Enterprise с устаревшей версии на новую.

## Видео

- [Your Weekly Dose of Terraform](https://www.youtube.com/channel/UCGH0yYPvlCN1VjSFMGVmFgQ) - Канал YouTube с еженедельными прямыми эфирами о новостях Terraform, обзорами, интервью, вопросами и ответами, программированием в прямом эфире и экспериментами с Terraform.
- [Terraform explained in 15 mins](https://www.youtube.com/watch?v=l5k1ai_GBDE) - Объяснение Terraform за 15 минут.
- [Terraform Course](https://www.youtube.com/watch?v=SLB_c_ayRMo) - Автоматизация облачной инфраструктуры AWS.
- [How to Build Reusable, Composable, Battle tested Terraform Modules](https://www.youtube.com/watch?v=LVgP63BkhKQ) - Yevgeniy Brikman рассказывает, как писать повторно используемый, компонуемый и тестируемый код Terraform. Доклад посвящён модулям, объясняет задачу, для решения которой был создан Terraform, и содержит демонстрацию его основ (около 39 минут, октябрь 2017 года).
- [Building Scalable, Repeatable Infrastructure in the Cloud with Terraform](https://www.youtube.com/watch?v=cG7pcksTAnY) - Демонстрация того, как Terraform позволяет применять подход Infrastructure as Code, развёртывая TeamCity в AWS с размещённой PostgreSQL.
- [Creating a Google Compute Instance with Terraform](https://www.youtube.com/watch?v=fo3VX33Zx0c) - Пример создания экземпляра Google Compute с помощью кода Terraform.
- [Creating a Terraform Provider for Just About Anything](https://www.hashicorp.com/resources/creating-terraform-provider-for-anything) - Пошаговое руководство о том, как внести вклад в провайдер Terraform или создать собственный.
- [Evolving Your Infrastructure with Terraform](https://www.youtube.com/watch?v=wgzgVm7Sqlk) - Технический директор OpenCredo подробно рассказывает о практическом использовании Terraform на примере интересных сценариев.
- [Going Multi-Cloud with Terraform and Nomad](https://www.youtube.com/watch?v=e42A4aBZUkQ).
- [How to Extend the Terraform Provider List](https://www.youtube.com/watch?v=2BvpqmFpchI) - В докладе Paul рассказывает о создании провайдера terraform.
- [Orchestrating Containers with Terraform and Consul](https://www.infoq.com/presentations/terraform-consul/) - Mitchell Hashimoto показывает, как Terraform помогает развёртывать и масштабировать контейнерные рабочие нагрузки.
- [Production ChaosMonkey with Terraform](https://www.youtube.com/watch?v=CPI6W3LK0-g) - Как DigitalOcean использует Terraform для запуска интеграционных тестов в производственной среде.
- [Running a Terraform Environment at Scale](https://www.youtube.com/watch?v=3JVGSq7QIS0) - Запуск Terraform в масштабе сотен аккаунтов AWS.
- [Setup Continuous Integration for a Terraform module](https://www.youtube.com/watch?v=vuJ6bjYKUcA) - Пример использования CI и Kitchen-Terraform для тестирования, маркировки и публикации модуля Terraform, создающего экземпляр Google Compute.
- [State of Terraform Providerland](https://www.youtube.com/watch?v=ar1PF5iDtbg) - Как работают провайдеры Terraform и как написать такой провайдер.
- [Terraform At Scale](https://www.youtube.com/watch?v=RldRDryLiXs) - Как Segment использует Terraform.
- [Terraform w/ Lee Trout](https://www.youtube.com/watch?v=p2ESyuqPw1A) - Рассматриваются шаблоны разработки и эффективная организация кода Terraform.
- [Terraforming the Composable World](https://www.youtube.com/watch?v=cHrOXPatFeg) - Интеграция Terraform с локальным предоставлением серверов на физическом оборудовании.
- [Test and verify a Google Compute Instance with Kitchen-Terraform](https://www.youtube.com/watch?v=kiH3-LEveek) - Пример использования Kitchen-Terraform для тестирования кода Terraform, создающего Google Compute.
- [Untangling Terraform Through Refactoring](https://www.youtube.com/watch?v=OH6iDKaXpZs) - Как аккуратно рефакторить код Terraform с минимальным риском.
- [Complete Terraform Course - From BEGINNER to PRO! (Learn Infrastructure as Code)](https://www.youtube.com/watch?v=7xngnjfIlK4) - Полный курс от начального до продвинутого уровня, без привязки к конкретному облачному провайдеру и с общим подходом.

## Плагины для редакторов

- [Emacs terraform-mode](https://github.com/hcl-emacs/terraform-mode)
- [Intellij](https://plugins.jetbrains.com/plugin/7808-terraform-and-hcl)
- [Terraform-ls](https://github.com/hashicorp/terraform-ls) (Сервер языка Terraform)
- [Terraform-lsp](https://github.com/juliosueiras/terraform-lsp) (Протокол сервера языка для Terraform)
- [vim-hcl](https://github.com/jvirtanen/vim-hcl) - Подсветка синтаксиса для HCL
- [Vim-Terraform-Completion](https://github.com/juliosueiras/vim-terraform-completion)
- [Vim-Terraform](https://github.com/hashivim/vim-terraform)

## Лицензия

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

Насколько это допускает закон, Shuaib Yunus отказался от всех авторских и смежных или связанных с ними прав на эту работу.
