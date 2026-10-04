# Awesome Terraform [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) <!-- omit in toc -->

[![Link Checker](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml)
[![Misspell Check](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml)

> Uma lista selecionada de recursos sobre [HashiCorp's Terraform](https://www.terraform.io/).
> [<img src="https://raw.githubusercontent.com/shuaibiyy/awesome-terraform/master/terraform.svg" align="right" width="100">](https://terraform.io)
> Suas [contribuições](https://github.com/shuaibiyy/awesome-tf/blob/master/contributing.md) são bem-vindas!

O Terraform permite criar, alterar e aprimorar com segurança e previsibilidade a infraestrutura de produção. É uma ferramenta de código aberto que codifica APIs em arquivos de configuração declarativos, que podem ser compartilhados entre membros da equipe, tratados como código, editados, revisados e versionados.

## Conteúdo <!-- omit in toc -->

- [Legenda](#legend)
- [Recursos oficiais](#official-resources)
- [Comunidade](#community)
- [Livros](#books)
- [Aprendizado e estudos](#learning-and-studying)
- [Aplicativos](#apps)
- [Tutoriais e publicações de blog](#tutorials-and-blog-posts)
  - [Guias para iniciantes](#beginner-guides)
  - [Como escrever providers personalizados](#writing-custom-providers)
  - [Guias práticos](#how-to)
  - [Configuração de vários ambientes](#multi-environment-configuration)
  - [Azure](#azure)
  - [AWS](#aws)
  - [Google Cloud](#google-cloud)
  - [Diversos](#miscellaneous)
- [Módulos da comunidade](#community-modules)
- [Registros self-hosted](#self-hosted-registries)
- [Registros gerenciados](#managed-registries)
- [Providers](#providers)
  - [Providers mantidos pela HashiCorp](#hashicorp-supported-providers)
  - [Providers mantidos por fornecedores](#vendor-supported-providers)
  - [Providers da comunidade](#community-providers)
- [Testes](#testing)
- [Ferramentas](#tools)
  - [CI](#ci)
  - [Extensões do VS Code](#vs-code-extensions)
- [Bibliotecas](#libraries)
- [Modelos iniciais](#boilerplates)
- [Plataformas Terraform self-hosted](#self-hosted-terraform-platforms)
- [Plataformas Terraform gerenciadas :heavy\_dollar\_sign:](#managed-terraform-platforms-heavy_dollar_sign)
- [Ferramentas para Terraform Enterprise](#terraform-enterprise-tooling)
- [Vídeos](#videos)
- [Plugins de editores](#editor-plugins)
- [Licença](#license)

## Legenda

- Não compatível com _terraform >= 0.12_ :ghost:
- Abandonado :skull:
- Monetizado :heavy_dollar_sign:

## Recursos oficiais

- [Hashicorp Terraform Blog](https://www.hashicorp.com/en/blog/products/terraform)
- [Introduction to Terraform](https://developer.hashicorp.com/terraform/intro)
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform learn](https://developer.hashicorp.com/terraform/tutorials)

## Comunidade

- [weekly.tf - Terraform Weekly Newsletter](https://www.weekly.tf/) - Boletim semanal com notícias sobre Terraform, projetos de código aberto, anúncios e discussões.
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
- [The Claude Agent Skill for Terraform and OpenTofu - testing, modules, CI/CD, and production patterns](https://github.com/antonbabenko/terraform-skill) - Habilidade do Claude Code para Terraform e OpenTofu — testes, design de módulos, fluxos de CI/CD e padrões de produção.
- [awesome-terraform-compliance](https://github.com/antonbabenko/awesome-terraform-compliance) - Lista selecionada de ferramentas, frameworks e recursos para conformidade e segurança no Terraform.
- Comunidades específicas de cada idioma:
  - [Telegram (Comunidade de falantes de ucraniano)](https://t.me/terraform_ukraine)

## Livros

- [Big Little Book On Terraform](https://www.amazon.com/Big-Little-Book-Terraform-Omos-ebook/dp/B07PWYPNX8/)
- [Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Second Edition](https://www.manning.com/books/bootstrapping-microservices-second-edition)
- [Deep-Dive Terraform on Azure](https://link.springer.com/book/10.1007/978-1-4842-7328-9)
- [Getting Started with Terraform, 2nd ed.](https://www.amazon.com/Getting-Started-Terraform-production-infrastructure/dp/1788623533/)
- [HashiCorp Infrastructure Automation Certification Guide](https://www.amazon.com/HashiCorp-Infrastructure-Automation-Certification-Guide-ebook/dp/B092KM7LXC/)
- [IaC starting with Terraform (Korean)](https://product.kyobobook.co.kr/detail/S000202478097)
- [Infrastructure as Code](https://www.oreilly.com/library/view/infrastructure-as-code/9781491924334/)
- [Patterns and Practices for Infrastructure as Code: With examples in Python and Terraform](https://www.manning.com/books/infrastructure-as-code-patterns-and-practices)
- [Terraform Best Practices](https://www.terraform-best-practices.com/) - [e-book de código aberto](https://github.com/antonbabenko/terraform-best-practices)
- [Terraform Cookbook](https://www.amazon.com/Terraform-Cookbook-Efficiently-Infrastructure-platforms/dp/1800207557)
- [Terraform for Ops e-book](https://www.terraformforops.com)
- [Terraform in Action](https://www.manning.com/books/terraform-in-action)
- [Terraform in Depth](https://www.manning.com/books/terraform-in-depth)
- [Terraform: Up & Running, 3rd ed.](https://www.terraformupandrunning.com/)
- [The Terraform Book](https://terraformbook.com/)

## Aprendizado e estudos

- [Terraform Academy](https://www.terraformacademy.app) - Plataforma interativa de aprendizado de Terraform / IaC com laboratórios práticos, preparação para certificações (HashiCorp, AWS, GCP, Azure, Docker, Kubernetes, GitOps), orientação por IA e acompanhamento do progresso. Confira também o blog [SRE Pro Tips](https://www.terraformacademy.app/protips/?cat=sre-pro-tips) e os aplicativos móveis/PWA abaixo.
- [Terraform Terminal Simulator](https://devops-daily.com/games/terraform-terminal-simulator) - Pratique init, plan e apply em um terminal simulado no navegador. Gratuito e de código aberto, sem necessidade de cadastro.
- [compliance.tf docs](https://compliance.tf/docs/) - Implementações gratuitas em Terraform de SOC 2, PCI DSS, HIPAA, NIST 800-53 e mais de 35 outros controles de conformidade — referência aberta para escrever código de infraestrutura em conformidade.
- [DevOpsLesson Terraform Playground](https://devopslesson.com/playground/terraform) - Simulador gratuito de Terraform no navegador, com exercícios guiados de HCL e comandos para praticar.

## Aplicativos

Aplicativos para dispositivos móveis, computadores e PWA para aprender e trabalhar com Terraform em qualquer lugar.

- [Terraform Academy — iOS](https://apps.apple.com/us/app/terraform-academy/id6745738634) - Aplicativo nativo para iOS da plataforma interativa de aprendizado Terraform Academy. Laboratórios práticos, preparação para certificações (HashiCorp, AWS, GCP, Azure, Docker, Kubernetes, GitOps), orientação por IA e sincronização do progresso entre dispositivos.
- [Terraform Academy — Android](https://play.google.com/store/apps/details?id=com.terraformacade1.app) - Aplicativo nativo para Android da plataforma de aprendizado Terraform Academy, com os mesmos laboratórios, preparação para certificações e orientação por IA das versões para iOS e web.
- [Terraform Academy — PWA / Web App](https://www.terraformacademy.app/) - Versão instalável do Progressive Web App do Terraform Academy. Funciona offline, pode ser instalada na tela inicial em qualquer plataforma e sincroniza o progresso com os aplicativos móveis.

## Tutoriais e publicações de blog

### Guias para iniciantes

- [A Comprehensive Guide to Terraform](https://www.gruntwork.io/blog/a-comprehensive-guide-to-terraform) - Série de publicações de blog do autor de "Terraform: Up & Running" que guia o leitor desde os primeiros passos com Terraform até seu uso no mundo real.
- [Using Terraform for Cloud Deployments - Part 1](https://dev.to/koenighotze/using-terraform-for-cloud-deployments---part-1) - Provisionamento de uma instância EC2.
- [Hello, world: The Fargate/Terraform tutorial I wish I had](https://section411.com/2019/07/hello-world/) - Publicação de blog que descreve como configurar do zero um cluster ECS Fargate.
- [Terraform Security Guide](https://sysdig.com/blog/terraform-security-best-practices/) - Publicação de blog que descreve as práticas recomendadas de segurança ao trabalhar com Terraform.
- [Building a SaaS API? Don't Forget Your Terraform Provider](https://www.speakeasy.com/blog/build-terraform-providers) - Por que você deveria escrever um provider do Terraform.
- [Complete Terraform Course in French (Free)](https://blog.stephane-robert.info/docs/infra-as-code/provisionnement/terraform/) – Curso abrangente e gratuito em francês para dominar Terraform, do nível iniciante ao avançado, com exemplos práticos e boas práticas.
- [Introduction to Terraform](https://devopslesson.com/tutorials/terraform/introduction-to-terraform) - Guia para iniciantes sobre os fundamentos do Terraform — providers, recursos, estado e seu primeiro apply, com exemplos práticos.

### Como escrever providers personalizados

- [Creating custom terraform providers](https://blog.pelo.tech/creating-custom-terraform-providers-341311823fa2) - Guia para criar providers personalizados.
- [Writing a Terraform provider](https://web.archive.org/web/20220516140659/http://blog.jfabre.net/2017/01/22/writing-terraform-provider/) - Guia para criar providers personalizados.
- [Writing Custom Providers](https://developer.hashicorp.com/terraform/plugin/sdkv2) - Documentação oficial para criar providers personalizados.
- [Terraform Provider Code generation](https://www.speakeasy.com/docs/terraform/create-terraform) - Guia para gerar um provider do Terraform a partir de uma especificação OpenAPI (com suporte do fornecedor).

### Guias práticos

- [How To Write OPA for Terraform](https://scalr.com/learning-center/opa-series-part-1-open-policy-agent-and-terraform) - Como usar o Open Policy Agent para avaliar e aplicar políticas aos planos do Terraform.
- [Deploying Discourse with Terraform](https://www.hashicorp.com/en/blog/deploying-discourse-with-terraform) - Mostra como o Terraform pode criar uma instância funcional do Discourse no DigitalOcean com um único comando.
- [Deploying Django to AWS ECS with Terraform](https://testdriven.io/blog/deploying-django-to-ecs-with-terraform/) - Explica como usar Terraform para provisionar a infraestrutura AWS necessária para executar um aplicativo Django no ECS.
- [Easily Deploy A Seneca Microservice to ECS with Wercker and Terraform: Part I](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-i/), [II](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-ii/) & [III](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-iii/) - Ilustra como o Terraform pode ser incorporado a um pipeline de implantação de microsserviços.
- [Terraform for a Highly Available VPN between AWS and Azure](https://web.archive.org/web/20210616132857/https://deployeveryday.com/2020/04/13/vpn-aws-azure-terraform.html) - Código Terraform para implantar uma VPN altamente disponível entre AWS e Azure.
- [Terraforming 1Password](https://1password.com/blog/terraforming-1password) - Como a 1Password migrou do CloudFormation para o Terraform.
- [Tutorial: How to Use Terraform to Deploy OpenStack Workloads](https://web.archive.org/web/20170611135511/http://www.stratoscale.com/blog/openstack/tutorial-how-to-use-terraform-to-deploy-openstack-workloads/) - Ilustra como é fácil usar o provider Terraform do OpenStack para implantar um servidor web.
- [Zero Downtime Updates with HashiCorp Terraform](https://www.hashicorp.com/en/blog/zero-downtime-updates-with-terraform) - Como garantir tempo de inatividade zero na sua infraestrutura.
- [Google Cloud Platform for 10$ a month using terraform](https://github.com/nufailtd/terraform-budget-gcp) - Mostra como usar Terraform para criar um Google Kubernetes Cluster seguro, serviços Google Cloud Run e outros componentes de infraestrutura por menos de [10$](https://nufailtd.github.io/budget-gcp/) por mês.
- [Infracost + Terraform + GitHub Actions = Automate Cloud Cost Management](https://medium.com/better-programming/infracost-terraform-github-actions-automate-cloud-cost-management-a62b329f2834) - Como usar o Infracost como proteção para gerenciar custos de nuvem durante o desenvolvimento com Terraform.
- [How To Wrap Your Terraform Provider for Pulumi](https://www.speakeasy.com/blog/pulumi-terraform-provider) - Como preparar seu provider do Terraform para o Pulumi.
- [How to Build an AWS Account Vending Machine](https://medium.com/@StackGuardian/how-to-build-an-aws-account-vending-machine-by-stackguardian-f2895e35a27b) - Gerenciamento automatizado e self-service do ciclo de vida de contas AWS usando stacks Terraform orquestradas pelo StackGuardian, com alocação baseada em SSM, acionadores de limpeza do EventBridge e aplicação de políticas do Tirith.

### Configuração de vários ambientes

- [Terraform Design Patterns: the Terrafile](https://bensnape.com/2016/01/14/terraform-design-patterns-the-terrafile/) - Gerenciamento de módulos Terraform e suas versões em projetos Terraform com Terrafile.
- [Terraform, VPC, and why you want a tfstate file per env](https://charity.wtf/2016/03/30/terraform-vpc-and-why-you-want-a-tfstate-file-per-env/) - Algumas armadilhas do uso de Terraform em projetos grandes com vários ambientes e como evitá-las.
- [Using Pipelines to Manage Environments with Infrastructure as Code](https://medium.com/@kief/https-medium-com-kief-using-pipelines-to-manage-environments-with-infrastructure-as-code-b37285a1cbf5) - Explica diferentes abordagens para criar um pipeline que gerencie mudanças na infraestrutura ao passar de um ambiente para outro.

### Azure

- [Learning HashiCorp Terraform](https://web.archive.org/web/20201108000713/https://www.g10s.io/hashicorp-terraform/) - Guia para Azure.
- [New Terraform Azure Automation Resources](https://bgelens.nl/terraform-automation-resources/) - Automação do Azure.
- [Terraforming Azure PaaS](https://devkimchi.com/2019/01/21/terraforming-azure-paas/) - Implante recursos PaaS no Azure.
- [azure-az104](https://github.com/victorlane/azure-az104) - Anotações de estudo para AZ-104 Azure Administrator e exemplos práticos de Terraform, incluindo uma arquitetura de referência de landing zone.

### AWS

- [AWS Lambda the Terraform Way](https://github.com/nsriram/lambda-the-terraform-way) - Entenda a fundo o AWS Lambda, além da execução de funções, usando Terraform. Também inclui guias de integração com S3, API Gateway, DynamoDB, Kinesis e SQS.
- [Managing AWS Lambda Functions with Terraform](https://spacelift.io/blog/terraform-aws-lambda) - Para que serve o AWS Lambda e como usar Terraform para gerenciar funções do AWS Lambda?

### Google Cloud

- [Managing infrastructure as code with Terraform, Cloud Build, and GitOps](https://docs.cloud.google.com/docs/terraform/resource-management/managing-infrastructure-as-code) - Configure e gerencie infraestrutura como código com Terraform, Cloud Build e GitOps.
- [Getting started with Terraform on Google Cloud](https://docs.cloud.google.com/docs/terraform/create-vm-instance) - Use Terraform para criar uma VM no Google Cloud e iniciar um servidor Python Flask básico.
- [Managing Cloud Infrastructure with Terraform](https://www.skills.google/course_templates/746) - Implante um serviço Kubernetes Load Balancer com Terraform, um HTTPS Content-Based Load Balancer com Terraform, balanceamento de carga modular com Terraform — Regional Load Balancer, providers personalizados com Terraform, Cloud SQL com Terraform e crie uma VPN entre Google Cloud e AWS com Terraform.
- [Hashicorp Terraform Tutorials for Google Cloud](https://developer.hashicorp.com/terraform/tutorials/gcp-get-started) - Comece a usar Terraform no Google Cloud.
- [IAC - Terraform and Terragrunt on Google Cloud](https://www.academeez.com/courses/terraform) - Curso de código aberto sob licença MIT sobre criação de infraestrutura no Google Cloud usando Terraform/OpenTofu e Terragrunt.
- [Self-host n8n on Google Cloud Run](https://github.com/datawranglerai/self-host-n8n-on-gcr) - Configuração e guia Terraform para implantar automação de fluxos de trabalho n8n no Cloud Run com Cloud SQL, Secret Manager e modo de fila opcional via Redis.

### Diversos

- [Sharing data between Terraform configurations](https://web.archive.org/web/20230927082422/https://jamesmckay.net/2016/09/sharing-data-between-terraform-configurations/) - Ilustra como usar o estado remoto para compartilhar dados entre configurações do Terraform.
- [The Segment AWS Stack](https://web.archive.org/web/20250322120753/https://segment.com/blog/the-segment-aws-stack/) - Mostra os bastidores da infraestrutura baseada em Terraform que resolveu [The Million Dollar Engineering Problem](https://segment.com/blog/the-million-dollar-eng-problem/) na [Segment](https://segment.com/).
- [Top 3 Terraform Testing Strategies for Ultra-Reliable Infrastructure-as-Code](https://www.contino.io/insights/top-3-terraform-testing-strategies-for-ultra-reliable-infrastructure-as-code)
- [Two Weeks with Terraform](https://charity.wtf/2016/02/23/two-weeks-with-terraform/) - Experiência conquistada com muito esforço ao usar Terraform na prática e algumas lições de sabedoria operacional.
- [Terraform: Beyond the Basics with AWS](https://aws.amazon.com/blogs/apn/terraform-beyond-the-basics-with-aws/) - Explicação de uma demonstração que usa Terraform para provisionar uma arquitetura AWS de exemplo.
- [Terraform cost estimation](https://github.com/antonbabenko/terraform-cost-estimation) - Estimativa de custos gratuita e anonimizada a partir de um plano do Terraform (0.12+) ou arquivo de estado. Também disponível no navegador em [terraform-cost-estimation.com](https://terraform-cost-estimation.com).
- [How to Debug Terraform Projects: Tutorial](https://spacelift.io/blog/terraform-debug)
- [The terraform-docs GitHub Action: A Complete CI Setup Guide](https://devtoolhub.com/terraform-docs-github-action/) - Geração e commit automático da documentação dos módulos a cada PR com terraform-docs, incluindo as armadilhas de OIDC/permissões que causam falhas no CI.

## Módulos da comunidade

Para encontrar mais módulos da comunidade que não estão listados aqui, consulte o [Terraform Module Registry](https://registry.terraform.io/).

- [nis2shield/infrastructure](https://github.com/nis2shield/infrastructure) - Módulos Terraform para conformidade automatizada com NIS2 e implantação segura de infraestrutura.
- [rancher-terraform-digitalocean](https://github.com/lunagt/rancher-terraform-digitalocean) - Servidor Rancher no DigitalOcean.
- [segmentio/stack](https://github.com/segmentio/stack) - Configura infraestrutura de produção com AWS, Docker e ECS. :skull:
- [terraform-aws-account-lookup](https://github.com/be-bold/terraform-aws-account-lookup) - Este módulo Terraform permite consultar contas AWS e gera as contas em vários mapeamentos ou como uma lista completa, com a possibilidade de aplicar um filtro de pesquisa à lista e agrupar as contas por tags existentes usando um submódulo.
- [terraform-aws-alb](https://github.com/terraform-aws-modules/terraform-aws-alb) - Cria um Application Load Balancer na AWS (módulo verificado).
- [terraform-aws-appconfig](https://github.com/terraform-aws-modules/terraform-aws-appconfig) - Cria recursos AWS AppConfig na AWS.
- [terraform-aws-atlantis](https://github.com/terraform-aws-modules/terraform-aws-atlantis) - Cria configurações Terraform para executar [Atlantis](https://runatlantis.io) no AWS Fargate. GitHub, GitLab e Bitbucket são compatíveis.
- [terraform-aws-autoscaling](https://github.com/terraform-aws-modules/terraform-aws-autoscaling) - Cria grupos de Auto Scaling e configurações de inicialização (módulo verificado).
- [terraform-aws-customer-gateway](https://github.com/terraform-aws-modules/terraform-aws-customer-gateway) - Cria um Customer Gateway na AWS.
- [terraform-aws-datadog-forwarders](https://github.com/terraform-aws-modules/terraform-aws-datadog-forwarders) - Cria recursos na AWS para encaminhar logs/métricas ao Datadog.
- [terraform-aws-dms](https://github.com/terraform-aws-modules/terraform-aws-dms) - Cria recursos AWS DMS (Database Migration Service) na AWS.
- [terraform-aws-dynamodb-table](https://github.com/terraform-aws-modules/terraform-aws-dynamodb-table) - Cria uma tabela DynamoDB na AWS.
- [terraform-aws-ec2-instance](https://github.com/terraform-aws-modules/terraform-aws-ec2-instance) - Cria instâncias EC2 na AWS.
- [terraform-aws-ecr](https://github.com/cloudposse/terraform-aws-ecr) - Gerencia registros de contêineres Docker no AWS ECR.
- [terraform-aws-ecs](https://github.com/terraform-aws-modules/terraform-aws-ecs) - Cria recursos AWS ECS na AWS.
- [terraform-aws-efs](https://github.com/cloudposse/terraform-aws-efs) - Define um sistema de arquivos EFS.
- [terraform-aws-eks](https://github.com/terraform-aws-modules/terraform-aws-eks) - Cria um Elastic Kubernetes Service na AWS (módulo muito popular).
- [terraform-aws-elb](https://github.com/terraform-aws-modules/terraform-aws-elb) - Cria um Elastic Load Balancer na AWS (módulo verificado).
- [terraform-aws-eventbridge](https://github.com/terraform-aws-modules/terraform-aws-eventbridge) - Cria recursos EventBridge na AWS.
- [terraform-aws-jenkins-ha-agents](https://github.com/neiman-marcus/terraform-aws-jenkins-ha-agents) - Implantação Jenkins baseada em EC2 com agentes HA (spot). Executa no EFS para garantir imutabilidade. Totalmente personalizável, com padrões sensatos.
- [terraform-aws-jenkins](https://github.com/cloudposse-archives/terraform-aws-jenkins) - Cria uma imagem Docker com Jenkins, salva-a em um repositório ECR e a implanta no Elastic Beanstalk executando uma stack Docker. :skull:
- [terraform-aws-key-pair](https://github.com/cloudposse/terraform-aws-key-pair) - Gera automaticamente pares de chaves SSH (chaves públicas/privadas).
- [terraform-aws-lambda-auto-package](https://github.com/nozaq/terraform-aws-lambda-auto-package) - Módulo Terraform para definir uma função Lambda cujos arquivos-fonte são compilados e empacotados automaticamente para implantação no Lambda.
- [terraform-aws-lambda](https://github.com/terraform-aws-modules/terraform-aws-lambda) - Módulo Terraform que compila dependências e empacota, além de criar recursos AWS Lambda em inúmeras combinações.
- [terraform-aws-managed-service-prometheus](https://github.com/terraform-aws-modules/terraform-aws-managed-service-prometheus) - Cria recursos AWS Managed Service for Prometheus (AMP) na AWS.
- [terraform-aws-modules](https://github.com/terraform-aws-modules) - Coleção de módulos Terraform AWS apoiados pela comunidade (inclui módulos oficiais da AWS).
- [terraform-aws-msk-kafka-cluster](https://github.com/terraform-aws-modules/terraform-aws-msk-kafka-cluster) - Cria recursos AWS MSK (Managed Streaming for Kafka) na AWS.
- [terraform-aws-notify-slack](https://github.com/terraform-aws-modules/terraform-aws-notify-slack) - Cria um tópico SNS e uma função Lambda que envia notificações ao Slack.
- [terraform-aws-postgresql-rds](https://github.com/azavea/terraform-aws-postgresql-rds) - Cria PostgreSQL no RDS.
- [terraform-aws-rds-aurora](https://github.com/terraform-aws-modules/terraform-aws-rds-aurora) - Cria recursos de cluster RDS Aurora na AWS (módulo verificado).
- [terraform-aws-rds-proxy](https://github.com/terraform-aws-modules/terraform-aws-rds-proxy) - Cria recursos AWS RDS Proxy na AWS.
- [terraform-aws-rds](https://github.com/terraform-aws-modules/terraform-aws-rds) - Cria recursos RDS na AWS (módulo verificado).
- [terraform-aws-redshift](https://github.com/terraform-aws-modules/terraform-aws-redshift) - Cria recursos Redshift na AWS.
- [terraform-aws-route53](https://github.com/terraform-aws-modules/terraform-aws-route53) - Cria recursos Route53 na AWS.
- [terraform-aws-s3-bucket](https://github.com/terraform-aws-modules/terraform-aws-s3-bucket) - Cria recursos de bucket S3 na AWS.
- [terraform-aws-secure-baseline](https://github.com/nozaq/terraform-aws-secure-baseline) - Configura sua conta AWS com a configuração de base segura baseada em CIS Amazon Web Services Foundations.
- [terraform-aws-security-group](https://github.com/terraform-aws-modules/terraform-aws-security-group) - Cria grupos de segurança EC2-VPC na AWS (módulo verificado).
- [terraform-aws-ssh-bastion-service](https://github.com/joshuamkite/terraform-aws-ssh-bastion-service) - Plano Terraform para implantar um bastion SSH como serviço sem estado na AWS.
- [terraform-aws-transit-gateway](https://github.com/terraform-aws-modules/terraform-aws-transit-gateway) - Cria recursos Transit Gateway na AWS.
- [terraform-aws-vpc](https://github.com/terraform-aws-modules/terraform-aws-vpc) - Cria recursos VPC na AWS (módulo verificado e muito popular).
- [terraform-aws-vpn-gateway](https://github.com/terraform-aws-modules/terraform-aws-vpn-gateway) - Cria recursos de VPN gateway na AWS.
- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Coleção oficial de módulos Terraform verificados, mantida pela Microsoft para Azure, que codifica boas práticas de WAF para implantação consistente de infraestrutura.
- [terraform-azurerm-aks](https://github.com/kjanshair/terraform-azurerm-aks) - Cria recursos AKS no Azure.
- [terraform-azurerm-iis](https://github.com/ghostinthewires/terraform-azurerm-iis-install) - Instala o servidor IIS em uma instância de VM do Azure.
- [terraform-azurerm-mysql](https://github.com/foreverXZC/terraform-azurerm-mysql) - Cria um banco de dados MySQL no Azure.
- [terraform-azurerm-redis](https://github.com/rahulkhengare/terraform-azurerm-redis) - Cria Redis no Azure.
- [terraform-azurerm-sqlserver](https://github.com/metadevpro/terraform-azurerm-sqlserver-seed) - Cria um banco de dados SQL Server no Azure.
- [terraform-cloudflare-maintenance](https://github.com/adinhodovic/terraform-cloudflare-maintenance) - Módulo para criar uma página de manutenção usando Cloudflare Workers.
- [terraform-digitalocean-droplet](https://registry.terraform.io/modules/terraform-digitalocean-modules/droplet/digitalocean/latest) - Módulo Terraform para gerenciar Droplets do DigitalOcean e recursos relacionados.
- [terraform-ecs-jenkins](https://github.com/shuaibiyy/terraform-ecs-jenkins) - Provisiona Jenkins no AWS ECS usando Terraform.
- [terraform-gce-atlantis](https://github.com/runatlantis/terraform-gce-atlantis) - Cria configurações Terraform para executar [Atlantis](https://runatlantis.io) no Google Compute Engine.
- [terraform-google-project-factory](https://github.com/terraform-google-modules/terraform-google-project-factory) - Criação e configuração opinativas de projetos do Google Cloud Platform com Shared VPC, IAM, APIs etc.
- [terraform-helm-carbon-intensity-exporter](https://github.com/fabiocicerchia/terraform-helm-carbon-intensity-exporter) - Módulo Terraform/Helm para implantar o Kubernetes Carbon Intensity Exporter.
- [terraform-helm-cloud-carbon-footprint](https://github.com/fabiocicerchia/terraform-helm-cloud-carbon-footprint) - Módulo Terraform/Helm para implantar o Cloud Carbon Footprint no Kubernetes.
- [terraform-helm-kepler](https://github.com/fabiocicerchia/terraform-helm-kepler) - Módulo Terraform para implantar Kepler (perfilamento de energia do Kubernetes) via Helm.
- [terraform-kubestack](https://github.com/kbst/terraform-kubestack) - O Kubestack é um framework para equipes de engenharia de plataformas Kubernetes definirem toda a stack cloud native em uma única base de código Terraform e evoluírem a plataforma continuamente, com segurança, por meio de GitOps.
- [terraform-linode-k8s](https://registry.terraform.io/modules/linode/k8s/linode/latest) - Instala Kubernetes em instâncias Linode.
- [terraform-nixos](https://github.com/nix-community/terraform-nixos) - Conjunto de módulos Terraform projetados para implantar NixOS.
- [terraform-static-website-s3-cloudfront](https://github.com/sergej-brazdeikis/terraform-static-website-s3-cloudfront) - Cria sites estáticos no AWS S3 e CloudFront com base em variáveis.
- [tf_aws_bastion_s3_keys](https://github.com/terraform-community-modules/tf_aws_bastion_s3_keys) - Cria hosts bastion no AWS EC2.
- [typhoon](https://github.com/poseidon/typhoon) - Distribuição Kubernetes mínima e gratuita com Terraform.

## Registros self-hosted

- [anthology](https://github.com/erikvanbrakel/anthology) - Implementação de registro privado do Terraform como alternativa ao registro oficial.
- [boring-registry](https://github.com/boring-registry/boring-registry) - Registro privado de módulos/providers Terraform com autenticação por chave de API e suporte a armazenamento de blobs.
- [citizen](https://github.com/outsideris/citizen) - Registro privado de módulos/providers Terraform.
- [nrkno/terraform-registry](https://github.com/nrkno/terraform-registry) - Registro privado do Terraform com backends de armazenamento modulares.
- [petra](https://github.com/devoteamgcloud/petra) - Gerenciador de registro privado do Terraform.
- [philips-labs/terraform-registry](https://github.com/philips-labs/terraform-registry) - Registro Terraform para disponibilizar versões arbitrárias de providers Terraform hospedadas no GitHub.
- [tapir](https://github.com/PacoVK/tapir) - Registro privado do Terraform.
- [terraform-simple-registry](https://github.com/apparentlymart/terraform-simple-registry) - Implementação simples dos protocolos do Terraform Registry.
- [terramantle.dev](https://terramantle.dev) - Registro com foco em insights de módulos e estado, que resolve desafios de gerenciamento de dependências.
- [Terrareg](https://github.com/matthewjohn/terrareg) - Registro de módulos Terraform.
- [terustry](https://github.com/veepee-oss/terustry) - Registro de providers Terraform de código aberto que atua como proxy para releases do GitLab ou GitHub.
- [terralist](https://github.com/terralist/terralist) - Registro privado Terraform para módulos e providers, gerenciável por uma API REST.

## Registros gerenciados

- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Iniciativa oficial da Microsoft que oferece módulos Terraform (e Bicep) verificados e em conformidade com padrões para recursos e padrões arquiteturais do Azure, alinhados ao Well-Architected Framework.
- [cloudsmith](https://docs.cloudsmith.com/formats/terraform-modules-repository) - Serviço gerenciado de hospedagem de pacotes para clientes internos e externos. :heavy_dollar_sign:
- [Terramantle](https://terramantle.dev) - Registro privado de Terraform/OpenTofu com insights detalhados sobre módulos, mapeamento de dependências e visibilidade do estado.

## Providers

### Providers mantidos pela HashiCorp

- [terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) - Provider para Amazon Web Services.
- [terraform-provider-azurerm](https://github.com/hashicorp/terraform-provider-azurerm) - Provider para Azure.
- [terraform-provider-docker](https://github.com/hashicorp/terraform-provider-docker) - Provider para Docker. :skull:
- [terraform-provider-google](https://github.com/hashicorp/terraform-provider-google) - Provider para Google Cloud Platform.
- [terraform-provider-helm](https://github.com/hashicorp/terraform-provider-helm) - Provider para Helm.
- [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) - Provider para Kubernetes.
- [terraform-provider-vsphere](https://github.com/vmware/terraform-provider-vsphere) - Provider para VMware vSphere.

### Providers mantidos por fornecedores

- [terraform-provider-alicloud](https://github.com/aliyun/terraform-provider-alicloud) - Provider para Alibaba Cloud.
- [terraform-provider-artifactory](https://github.com/jfrog/terraform-provider-artifactory) - Provider para [JFrog Artifactory](https://jfrog.com/artifactory/).
- [terraform-provider-atlas](https://github.com/ariga/terraform-provider-atlas) - Provider para [Atlas](https://atlasgo.io/).
- [terraform-provider-azapi](https://github.com/Azure/terraform-provider-azapi) - Provider para a API REST do Azure Resource Manager.
- [terraform-provider-azuredevops](https://github.com/microsoft/terraform-provider-azuredevops) - Provider para Azure DevOps (VSTS).
- [terraform-provider-buildkite](https://github.com/buildkite/terraform-provider-buildkite) - Provider para Buildkite.
- [terraform-provider-checkly](https://github.com/checkly/terraform-provider-checkly) - Gerencie recursos do [Checkly](https://www.checklyhq.com) para monitoramento de API e E2E.
- [terraform-provider-coder](https://github.com/coder/terraform-provider-coder) - Provider para [Coder](https://coder.com).
- [terraform-provider-confluent](https://github.com/confluentinc/terraform-provider-confluent) - Provider para Confluent.
- [terraform-provider-datadog](https://github.com/DataDog/terraform-provider-datadog) - Provider para Datadog.
- [terraform-provider-devhelm](https://github.com/devhelmhq/terraform-provider-devhelm) - Provider para monitoramento de disponibilidade do [DevHelm](https://devhelm.io) — gerencie monitores, canais de alerta e páginas de status como código.
- [terraform-provider-digitalocean](https://github.com/digitalocean/terraform-provider-digitalocean) - Provider para DigitalOcean.
- [terraform-provider-dominos](https://github.com/nat-henderson/terraform-provider-dominos) - Provider para Dominos Pizza.
- [terraform-provider-elasticstack](https://github.com/elastic/terraform-provider-elasticstack) - Provider para Elasticsearch e Kibana.
- [terraform-provider-env0](https://github.com/env0/terraform-provider-env0) - Provider para [env0](https://www.env0.com/).
- [terraform-provider-featureflip](https://github.com/canopy-labs/terraform-provider-featureflip) - Provider para flags de recurso do [Featureflip](https://featureflip.io/): projetos, ambientes, flags, regras de direcionamento, segmentos e chaves SDK.
- [terraform-provider-github](https://github.com/integrations/terraform-provider-github) - Provider para GitHub.
- [terraform-provider-gitlab](https://github.com/gitlabhq/terraform-provider-gitlab) - Provider para GitLab.
- [terraform-provider-graphql](https://github.com/sullivtr/terraform-provider-graphql) - Provider para consultas e mutações GraphQL.
- [terraform-provider-hcloud](https://github.com/hetznercloud/terraform-provider-hcloud) - Provider para Hetzner Cloud.
- [terraform-provider-healthchecksio](https://github.com/kristofferahl/terraform-provider-healthchecksio) - Provider para gerenciar recursos do healthchecks.io.
- [terraform-provider-heroku](https://github.com/heroku/terraform-provider-heroku) - Provider para Heroku.
- [terraform-provider-ibm](https://github.com/IBM-Cloud/terraform-provider-ibm) - Provider para IBM Cloud.
- [terraform-provider-iterative](https://github.com/iterative/terraform-provider-iterative) - Plugin Terraform desenvolvido pensando em machine learning.
- [terraform-provider-k8s](https://github.com/banzaicloud/terraform-provider-k8s) - Provider Kubernetes simples, compatível com qualquer manifesto.
- [terraform-provider-keycloak](https://github.com/keycloak/terraform-provider-keycloak) - Provider para gerenciar as configurações do servidor de identidade [Keycloak](https://www.keycloak.org/).
- [terraform-provider-linode](https://github.com/btobolaski/terraform-provider-linode) - Provider para Linode.
- [terraform-provider-nxip](https://github.com/uk-sw/terraform-provider-nxip) - Provider para [nxip](https://nx-ip.com), IPAM com alocação CIDR baseada em pools entre ambientes de nuvem e locais. :heavy_dollar_sign:
- [terraform-provider-openstack](https://github.com/terraform-provider-openstack/terraform-provider-openstack) - Plugin para OpenStack.
- [terraform-provider-panos](https://github.com/PaloAltoNetworks/terraform-provider-panos) - Provider para [firewalls de próxima geração da Palo Alto Networks](https://www.paloaltonetworks.com/network-security).
- [terraform-provider-phare](https://github.com/phare/terraform-provider-phare) -  Provider Terraform para [Phare](https://phare.io).
- [terraform-provider-planetscale](https://github.com/planetscale/terraform-provider-planetscale) -  Provider Terraform para [PlanetScale](https://planetscale.com) (Vitess e Postgres).
- [terraform-provider-qovery](https://github.com/Qovery/terraform-provider-qovery) - Provider para [Qovery](https://www.qovery.com/) — gerencie implantações Kubernetes, ambientes, aplicativos, bancos de dados, gráficos Helm e serviços Terraform em AWS, GCP, Azure e Scaleway.
- [terraform-provider-pingdom](https://github.com/russellcardullo/terraform-provider-pingdom) - Provider para gerenciar recursos Pingdom. :skull:
- [terraform-provider-rancher2](https://github.com/rancher/terraform-provider-rancher2) - Provider para Rancher v2.
- [terraform-provider-scalr](https://github.com/Scalr/terraform-provider-scalr) - Provider para [Scalr](https://www.scalr.com/).
- [terraform-provider-secrethub](https://github.com/secrethub/terraform-provider-secrethub) - Provider para SecretHub. :skull:
- [terraform-provider-sigsci](https://github.com/signalsciences/terraform-provider-sigsci) - Provider para Signal Sciences.
- [terraform-provider-snowflake](https://github.com/snowflakedb/terraform-provider-snowflake) - Provider para o data warehouse Snowflake.
- [terraform-provider-spinnaker](https://github.com/armory-io/terraform-provider-spinnaker) - Provider para [Spinnaker](https://spinnaker.io/).
- [terraform-provider-spotinst](https://github.com/spotinst/terraform-provider-spotinst) - Provider para spotinst.
- [terraform-provider-stripe](https://github.com/franckverrot/terraform-provider-stripe) - Provider para Stripe.
- [terraform-provider-ucloud](https://github.com/ucloud/terraform-provider-ucloud) - Provider para gerenciar recursos UCloud.
- [terraform-provider-uptimerobot](https://github.com/louy/terraform-provider-uptimerobot) - Provider para gerenciar recursos uptimerobot. :skull:
- [terraform-provider-vaulted](https://github.com/sumup-oss/terraform-provider-vaulted) - Segredos criptografados do HashiCorp Vault via Terraform, que podem ser armazenados em SCM, como Git.
- [terraform-provider-scp](https://github.com/splunk/terraform-provider-scp) - Provider para Splunk Cloud Platform.

### Providers da comunidade

- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Provider Terraform para Coolify.
- [terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) - Provider Docker para Terraform.
- [terraform-provider-minio](https://github.com/aminueza/terraform-provider-minio) - Provider Terraform para gerenciar buckets S3 e usuários IAM do MinIO.
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Provider Terraform para Multipass.
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - Gerencie OpenRouter como código: workspaces, guardrails, chaves de API com limites de gastos e membros da organização. Terraform + OpenTofu.
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - Provider Terraform para estimativa de custos e guardrails de custos do Azure.
- [terraform-provider-proxmox](https://github.com/Telmate/terraform-provider-proxmox) - Provider Terraform para Proxmox.
- [terraform-provider-seerr](https://github.com/Josh-Archer/terraform-provider-seerr) - Provider Terraform para Seerr (Overseerr/Jellyseerr).
- [terraform-provider-terracurl](https://github.com/devops-rob/terraform-provider-terracurl) - Provider para fazer chamadas de API gerenciadas e não gerenciadas ao endpoint de destino.
- [terraform-provider-uname](https://github.com/julienlevasseur/terraform-provider-uname) - Provider Uname para Terraform.
- [terraform-provider-value](https://github.com/pseudo-dynamic/terraform-provider-value) - Provider Value para Terraform.
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Provider Terraform para Multipass.
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - Gerencie OpenRouter como código: workspaces, guardrails, chaves de API com limites de gastos e membros da organização. Terraform + OpenTofu.
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - Provider Terraform para estimativa de custos e guardrails de custos do Azure.
- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Provider Terraform para Coolify.
- [terraform-provider-appstore](https://github.com/elevenode/terraform-provider-appstore) - Provider Terraform para Apple App Store Connect.
- [terraform-provider-expo](https://github.com/elevenode/terraform-provider-expo) - Provider Terraform para Expo Application Services (EAS).
- [terraform-provider-paddle](https://github.com/vivantel/terraform-provider-paddle) - Provider Terraform para recursos de catálogo, ações de ciclo de vida e fontes de dados de consulta do Paddle Billing.
- [terraform-provider-seekrit](https://github.com/seekritdev/terraform-provider-seekrit) - Gerencie aplicativos, ambientes, grupos, tokens de serviço, concessões de chaves e segredos do seekrit. Argumentos somente para gravação e recursos efêmeros mantêm valores secretos fora do estado.

## Testes

- [clarity](https://github.com/xchapter7x/clarity) - Framework de testes declarativo para testes unitários de Terraform. :skull:
- [kitchen-terraform](https://github.com/newcontext-oss/kitchen-terraform) - Fornece um conjunto de plugins Test Kitchen que permite convergir uma configuração Terraform usando Test Kitchen e verificar o estado Terraform resultante com controles InSpec. :skull:
- [rspec-terraform](https://github.com/bsnape/rspec-terraform) - Testes RSpec para seus módulos Terraform. :skull:
- [terraform_validate](https://github.com/elmundio87/terraform_validate) - Ajuda a aplicar padrões definidos pelo usuário no Terraform. :skull:
- [terraform-compliance](https://github.com/terraform-compliance/cli) - Testes BDD para arquivos Terraform.
- [terratest](https://github.com/gruntwork-io/terratest) - Terratest é uma biblioteca Go que facilita a escrita de testes automatizados para seu código de infraestrutura.

## Ferramentas

- [AIaC](https://github.com/gofireflyio/aiac) - Gerador de Infrastructure-as-Code com inteligência artificial.
- [AirIAM](https://github.com/bridgecrewio/AirIAM) - AirIAM é uma ferramenta para AWS IAM que implementa o framework de execução Terraform com privilégio mínimo.
- [asdf](https://github.com/asdf-community/asdf-hashicorp) - Plugin HashiCorp para o gerenciador de versões [asdf](https://github.com/asdf-vm/asdf).
- [astro](https://github.com/uber/astro/) - Astro é uma ferramenta para gerenciar várias execuções do Terraform com um único comando. :ghost:
- [atlantis](https://github.com/runatlantis/atlantis) - Fluxo de trabalho unificado para colaboração em Terraform pelo GitHub.
- [atmos](https://github.com/cloudposse/atmos) - Ferramenta universal que converte YAML profundamente mesclado em entradas de módulos.
- [aws2tf](https://github.com/aws-samples/aws2tf) - Automatiza a importação de recursos AWS existentes para o Terraform e gera o código HCL do Terraform.
- [aztfexport](https://github.com/Azure/aztfexport) - Ferramenta para trazer recursos Azure existentes para o gerenciamento do Terraform.
- [AzureNamer](https://azurenamingconventions.com/) - Gera nomes compatíveis com CAF para mais de 200 tipos de recursos Azure e os exporta como locals do Terraform, com validação em tempo real de comprimento e caracteres.
- [balcony](https://oguzhan-yilmaz.github.io/balcony/) - Ferramenta CLI para consultas fáceis à API AWS. Também gera blocos de importação Terraform e código de recursos Terraform.
- [bare-devcontainer/templates](https://github.com/bare-devcontainer/templates/tree/main/src/terraform) - Dev container Terraform com foco em segurança, terraform-ls e cache que facilita reconstruções. A imagem base está disponível em [bare-devcontainer/images](https://github.com/bare-devcontainer/images/tree/main/terraform).
- [blast radius](https://github.com/28mm/blast-radius) - Visualizações interativas de grafos de dependências do Terraform. :skull:
- [cf-terraforming](https://github.com/cloudflare/cf-terraforming) - Utilitário de linha de comando para facilitar a importação dos seus recursos Cloudflare existentes para Terraform.
- [cfnctl](https://github.com/rogerwelin/cfnctl) - Cfnctl traz a experiência da CLI do Terraform para o AWS CloudFormation.
- [Checkov](https://github.com/bridgecrewio/checkov/) - Ferramenta de análise estática do Terraform para terraform>=0.12.
- [cloud-audit](https://github.com/gebalamariusz/cloud-audit) - CLI de auditoria de segurança AWS com mecanismo de correção que gera código Terraform para corrigir configurações incorretas.
- [CloudBurn](https://github.com/towardsthecloud/cloudburn) - Verificações de políticas de custos AWS para Terraform e CloudFormation no CI e em contas AWS ativas.
- [Coder](https://coder.com/) - Coder provisiona ambientes de desenvolvimento de software na sua infraestrutura via Terraform.
- [coretech/terrafile](https://github.com/coretech/terrafile) - Gerencie sistematicamente módulos externos do GitHub para uso no Terraform (escrito em Go). :skull:
- [Cynative](https://github.com/cynative/cynative) - Framework de agentes de segurança de código aberto para revisar configurações Terraform e investigar infraestrutura ativa por meio de APIs de nuvem somente leitura.
- [Datadef](https://datadef.io/repo-to-diagram) - Gera diagramas de arquitetura e documentação a partir de um repositório Terraform: analisa arquivos `.tf` sem executar `terraform init` nem ler o estado, desenha módulos como zonas com contagens por ambiente e sincroniza novamente todos os dias. :heavy_dollar_sign:
- [demonolith](https://github.com/schrieksoft/demonolith) - Divide projetos Terraform monolíticos com `demonolith refactor` (para mover o código) e `demonolith migrate` (para migrar para arquivos .tfstate menores).
- [driftctl](https://github.com/snyk/driftctl) - Detecte, acompanhe e receba alertas sobre desvios na infraestrutura. :skull:
- [drifthound](https://github.com/drifthoundhq/drifthound) - Detecção contínua de desvios na infraestrutura, com histórico e notificações.
- [dxw/terrafile](https://github.com/dxw/terrafile) - Gerencie sistematicamente módulos externos do GitHub para uso no Terraform (escrito em Ruby).
- [flora](https://github.com/ketchoop/flora) - Gerenciador de versões do Terraform.
- [fogg](https://github.com/chanzuckerberg/fogg) - Ferramenta para eliminar o trabalho repetitivo na manutenção de repositórios Terraform.
- [former2](https://github.com/iann0036/former2) - Gere configurações Terraform a partir dos recursos existentes na sua conta AWS.
- [fuzzy-terraform-rm](https://github.com/paololazzari/fuzzy-terraform-rm) - Ferramenta de linha de comando com busca aproximada para remover recursos do estado do Terraform.
- [gaia](https://github.com/gaia-app/gaia) - Gaia é uma interface de usuário 🌍 do Terraform para seus módulos e infraestrutura self-service 👨‍💻. :skull:
- [hcl2json](https://github.com/tmccombs/hcl2json) - Converta HCL2 para JSON.
- [hcldump](https://github.com/magodo/hcldump) - Exiba a árvore sintática abstrata do HCL (v2).
- [hcledit (mercari)](https://github.com/mercari/hcledit) - Pacote Go para editar configurações HCL.
- [hcledit (minamijoyo)](https://github.com/minamijoyo/hcledit) - Editor de linha de comando para HCL.
- [hclgrep](https://github.com/magodo/hclgrep) - grep baseado em sintaxe para HCL(v2).
- [hq](https://github.com/miller-time/hq) - Processador HCL de linha de comando.
- [iam-policy-json-to-terraform](https://github.com/flosell/iam-policy-json-to-terraform) - Pequena ferramenta para converter uma política IAM em formato JSON em um aws_iam_policy_document do Terraform.
- [Infracost](https://github.com/infracost/infracost) - Estimativas de custos de nuvem para Terraform na CLI e em pull requests.
- [inframap](https://github.com/cycloidio/inframap) - Leia seu tfstate ou HCL para gerar um grafo específico para cada provider, mostrando apenas os recursos mais importantes/relevantes.
- [InfraScan](https://infrascan.soldevelo.com) - Auditor avançado de infraestrutura para análise de custos e segurança de Terraform, AWS e Kubernetes.
- [InfraSketch](https://infrasketch.cloud) - Ferramenta gratuita no navegador para visualizar HCL do Terraform e Docker Compose como diagramas de arquitetura. Compatível com AWS e Azure. Sem cadastro nem credenciais.
- [json2hcl](https://github.com/kvz/json2hcl) - Converta JSON para HCL e vice-versa. :ghost:
- [k2tf](https://github.com/sl1pm4t/k2tf) - Conversor de YAML do Kubernetes para HCL do Terraform.
- [Kapitan](https://github.com/kapicorp/kapitan) - Gera JSON de Terraform/OpenTofu e outras configurações de infraestrutura a partir de templates baseados em inventário.
- [KICS](https://github.com/Checkmarx/kics) - Analisa projetos IaC em busca de vulnerabilidades de segurança, problemas de conformidade e configurações incorretas de infraestrutura. Compatível com projetos Terraform, manifestos Kubernetes, Dockerfiles, templates AWS CloudFormation e playbooks Ansible.
- [layerform](https://github.com/briefercloud/layerform) - Layerform ajuda engenheiros a criar stacks de ambiente reutilizáveis usando arquivos .tf simples. Ideal para vários ambientes de "staging". :skull:
- [library.tf](https://library.tf) - Library.tf foi criado e projetado não apenas para fornecer todas as informações de registro de Terraform e OpenTofu, mas também os insights necessários para tomar decisões. Encontre rapidamente módulos ou providers compatíveis, mantidos e sem muitos bugs.
- [modules.tf-lambda](https://github.com/antonbabenko/modules.tf-lambda) - Gerador de infraestrutura como código a partir de diagramas visuais criados com [Cloudcraft.co](https://cloudcraft.co) para Terraform.
- [para](https://github.com/paraterraform/para) - O gerenciador de plugins de terceiros que faltava e um "canivete suíço" para Terraform/Terragrunt — uma única ferramenta para facilitar todos os fluxos de trabalho. :skull:
- [pike](https://github.com/jamesWoolfenden/pike) - Pike calcula as permissões ou a política IAM necessárias para compilar sua infraestrutura Terraform.
- [pipeform](https://github.com/magodo/pipeform) - Interface TUI de tempo de execução para Terraform.
- [platform-skills](https://github.com/nitinjain999/platform-skills) - Manual de campo assistido por IA para Terraform: revisão de privilégio mínimo IAM, análise do raio de impacto, impacto no estado, restrições de providers e planejamento de reversão. Funciona como plugin para Claude, Codex, Cursor e Copilot.
- [pluralith](https://www.pluralith.com/) - Visualização do estado do Terraform e geração automatizada de documentação de infraestrutura. :heavy_dollar_sign:
- [pre-commit-terraform](https://github.com/antonbabenko/pre-commit-terraform) - Hooks Git pre-commit para Terraform e Terragrunt: formatam automaticamente, validam, atualizam documentação, executam verificações de segurança, estimam custos e muito mais.
- [pretf](https://github.com/raymondbutcher/pretf) - Wrapper drop-in para Terraform que gera configurações Terraform com Python. Consulte a [documentação do pretf](https://pretf.readthedocs.io/en/latest/). :skull:
- [prettyplan for TF 0.12+](https://github.com/cloudandthings/terraform-pretty-plan) - Prettyplan para TF 0.12+ ([disponível online aqui](https://cloudandthings.github.io/terraform-pretty-plan/)) é uma ferramenta pequena que ajuda a visualizar planos Terraform grandes com facilidade.
- [prettyplan](https://github.com/chrislewisdev/prettyplan) - Prettyplan ([disponível online aqui](https://chrislewisdev.github.io/prettyplan/)) é uma ferramenta pequena que ajuda a visualizar planos Terraform grandes com facilidade. :ghost:
- [pug](https://github.com/leg100/pug) - A interface de terminal para usuários avançados do Terraform.
- [pytest-terraform](https://github.com/cloud-custodian/pytest-terraform) - Plugin pytest para Terraform com fixtures e suporte a replay offline.
- [python-terrafile](https://github.com/claranet/python-terrafile) - Gerencie sistematicamente módulos externos do GitHub para uso no Terraform.
- [regula](https://github.com/fugue/regula) - Avalia infraestrutura como código Terraform em busca de possíveis configurações incorretas de segurança e violações de conformidade na AWS, Azure e Google Cloud antes da implantação.
- [redc](https://github.com/wgpsec/redc) - Ferramenta de automação de infraestrutura de red team de próxima geração, criada sobre Terraform e compatível com implantação multicloud (Alibaba Cloud, Tencent Cloud, AWS etc.), com implantação em um comando para criar, configurar e destruir ambientes de red team.
- [renovate-config](https://github.com/SpotOnInc/renovate-config) - Predefinições de configuração compartilháveis para Renovatebot, especialmente úteis para profissionais de DevOps.
- [Riftmap](https://riftmap.dev) - Mecanismo entre repositórios para dependências e impacto de mudanças, que analisa infraestrutura multirrepositório em Terraform, Docker, Helm e mais para visualizar dependências e o que será afetado por uma alteração.
- [rover](https://github.com/im2nguyen/rover) - Explorador interativo do estado e das configurações do Terraform.
- [ruby-terraform](https://github.com/infrablocks/ruby_terraform) - Wrapper Ruby simples para executar comandos Terraform.
- [sato](https://github.com/JamesWoolfenden/sato) - Sato ajuda a converter Cloudformation legado para Terraform.
- [scenery](https://github.com/dmlittle/scenery) - Mais um formatador de saída de planos Terraform. :ghost: :skull:
- [scratchrelaxtv](https://github.com/YakDriver/scratchrelaxtv) - Ferramenta Python simples para ajudar no desenvolvimento de módulos — extrai variáveis de `main.tf` para gerar `variables.tf` e cria um esqueleto de uso do módulo a partir de `variables.tf`.
- [serverless.tf - Doing serverless with Terraform](https://serverless.tf/) - serverless.tf é um framework opinativo e de código aberto para desenvolver, compilar, implantar e proteger aplicativos e infraestrutura serverless na AWS usando Terraform. [Saiba mais](https://github.com/antonbabenko/serverless.tf).
- [Shieldly](https://github.com/shieldly-io/cli) - Análise de segurança com IA para políticas IAM e CloudFormation geradas pelo Terraform, explicando por que uma permissão é arriscada e como corrigi-la. Plano gratuito, CLI e GitHub Action.
- [Shisho](https://github.com/flatt-security/shisho) - Analisador estático leve para Terraform.
- [Speakeasy](https://www.speakeasy.com/) - Gere um provider Terraform a partir de uma especificação OpenAPI.
- [stacks](https://github.com/cisco-open/stacks) - Stacks, o pré-processador de código Terraform.
- [SyncVey](https://github.com/MR-TABATA/SyncVey) - Registro de ativos AWS self-hosted com detecção de desvios no nível de atributo entre tfstate e o estado ativo da AWS, verificações agendadas e alertas de fim de vida útil de middleware.
- [tads-boilerplate](https://github.com/Thomvaill/tads-boilerplate) - O poder do Ansible e do Terraform + a simplicidade do Docker Swarm = infraestrutura como código e boas práticas de DevOps.
- [tau](https://github.com/avinor/tau) - Tau é um wrapper leve sobre Terraform para gerenciar várias implantações, dependências e segredos. :skull:
- [tenv](https://github.com/tofuutils/tenv) - Gerenciador de versões OpenTofu/Terraform/Terragrunt.
- [terraboard](https://github.com/camptocamp/terraboard) - Painel web para inspecionar estados do Terraform.
- [terraboot](https://github.com/MastodonC/terraboot) - DSL para gerar uma configuração Terraform e executá-la.
- [terracognita](https://github.com/cycloidio/terracognita) - Lê de provedores de nuvem existentes (Terraform reverso) e gera sua infraestrutura como código em uma configuração Terraform.
- [terracost](https://github.com/cycloidio/terracost) - Estimativa de custos de nuvem para Terraform na CLI.
- [terracove](https://elementtech.github.io/terracove/) - Testa recursivamente uma árvore de diretórios em busca de diferenças e cobertura do Terraform.
- [TerraDepot](https://github.com/derBroBro/TerraDepot) - Repositório de estado Terraform baseado no backend remoto http padrão. Permite a administração centralizada de tfstates no AWS S3.
- [TerraDrift](https://github.com/niravraychura/terradrift) - CLI self-hosted para desvios de Terraform/OpenTofu em CI e cron (baseada em plan; não inventaria recursos não gerenciados).
- [terradozer](https://github.com/chenrui333/terradozer) - Execute terraform destroy sem arquivos de configuração.
- [terraeasy](https://github.com/jaceq/terraeasy) - Wrapper simples para Terraform.
- [terraform-ai-skills](https://github.com/anmolnagpal/terraform-ai-skills) - Habilidade com IA para GitHub Copilot, Claude e ChatGPT que automatiza o gerenciamento em massa de módulos Terraform — atualizações de providers, padronização de fluxos de trabalho e releases em 10–200+ repositórios na AWS, GCP, Azure e DigitalOcean.
- [terraform-aws-clickops-notifier](https://github.com/cloudandthings/terraform-aws-clickops-notifier) - Receba notificações quando ações forem realizadas no AWS Console.
- [terraform-bundle](https://github.com/hashicorp/terraform/tree/main/tools/terraform-bundle) - Cria facilmente pacotes contendo um binário Terraform e binários de providers. Útil para CI e Terraform Enterprise isolado de redes.
- [terraform-cdk](https://github.com/hashicorp/terraform-cdk) - O CDK (Cloud Development Kit) para Terraform permite que desenvolvedores usem linguagens de programação conhecidas para definir infraestrutura de nuvem e provisioná-la pelo HashiCorp Terraform.
- [terraform-cleaner](https://github.com/sylwit/terraform-cleaner) - Pequeno utilitário que detecta variáveis não utilizadas nos módulos Terraform.
- [terraform-credentials-vault](https://github.com/oulman/terraform-credentials-vault) - Plugin "credentials helper" do Terraform que permite fornecer credenciais para serviços nativos do Terraform (registros privados de módulos, Terraform Cloud etc.) por meio de variáveis de ambiente.
- [terraform-diff](https://github.com/contentful-labs/terraform-diff) - Saiba sempre onde executar Terraform plan e apply!
- [terraform-docs](https://github.com/terraform-docs/terraform-docs) - Utilitário rápido para gerar documentação a partir de módulos Terraform.
- [terraform-graph-beautifier](https://github.com/pcasteran/terraform-graph-beautifier) - Ferramenta de linha de comando que converte a saída pouco utilizável do comando terraform graph em algo mais significativo e explicativo.
- [terraform-iam-policy-validator](https://github.com/awslabs/terraform-iam-policy-validator) - A CLI valida políticas AWS IAM em um template Terraform em relação às boas práticas do AWS IAM.
- [terraform-landscape](https://github.com/coinbase/terraform-landscape) - *(somente 0.11 e anteriores)* Melhora a saída do plan do Terraform para facilitar a leitura e compreensão.
- [terraform-operator](https://github.com/GalleyBytes/terraform-operator) - Um CRD do Kubernetes para lidar com operações do Terraform.
- [terraform-plan-parser](https://github.com/lifeomic/terraform-plan-parser) - Utilitário de linha de comando e API JavaScript para analisar a saída padrão de `terraform plan` e convertê-la para JSON. :ghost:
- [terraform-provisioner](https://github.com/shuaibiyy/terraform-provisioner) - Ferramenta para gerenciar várias instanciações dos mesmos scripts Terraform.
- [terraform-rake-tasks](https://github.com/gina-alaska/terraform-rake-tasks) - Tarefas Rake compartilhadas para gerenciar planos Terraform.
- [terraform-repl](https://github.com/paololazzari/terraform-repl) - Wrapper do console Terraform para uma experiência de console interativo melhor.
- [Terraform-Visual](https://github.com/hieven/terraform-visual) - Ferramenta simples, mas poderosa, para visualizar planos Terraform.
- [terravision](https://github.com/patrickchugh/terravision) - Gera diagramas profissionais de arquitetura de nuvem a partir de código Terraform usando ícones e padrões oficiais da AWS/Azure/GCP. Executa 100% no cliente, com integração CI/CD.
- [terraform.py](https://github.com/mantl/terraform.py) - Script de inventário dinâmico do Ansible para analisar arquivos de estado Terraform. :skull:
- [terraformer](https://github.com/chenrui333/terraformer) - Ferramenta CLI para gerar arquivos Terraform a partir de infraestrutura existente. Infraestrutura como código. Compatível com muitos providers.
- [terraforming](https://github.com/dtan4/terraforming) - Exporta recursos AWS existentes para o formato Terraform (tf, tfstate). Semelhante ao `terraformer`. :skull:
- [terraformize](https://github.com/naorlivne/terraformize) - Executa\Destrói módulos Terraform por meio de um endpoint de API REST simples. :skull:
- [terraformsh](https://github.com/pwillis-els/terraformsh) - Wrapper em Bash para uma experiência de CLI mais fácil e configurações hierárquicas DRY.
- [terragrunt-atlantis-config](https://github.com/transcend-io/terragrunt-atlantis-config) - Gera configuração do Atlantis para projetos Terragrunt.
- [terragrunt](https://github.com/gruntwork-io/terragrunt) - Terragrunt é um wrapper leve para Terraform que oferece ferramentas extras para manter suas configurações Terraform DRY, trabalhar com vários módulos Terraform e gerenciar estado remoto.
- [terrahelp](https://github.com/opencredo/terrahelp) - Utilitário de linha de comando que oferece funcionalidades complementares que podem ser úteis ao trabalhar com Terraform.
- [terrahub](https://github.com/tfxor/terrahub) - TerraHub é uma ferramenta de automação e orquestração do Terraform. Integrada perfeitamente ao console.terrahub.io, oferece uma interface empresarial para exibir execuções do Terraform em tempo real, além de recursos de auditoria e relatórios de execuções anteriores. :heavy_dollar_sign:
- [terramagic](https://github.com/miltlima/terramagic) - Ferramenta assistente para criar pastas e arquivos Terraform automaticamente, escrita em Python!
- [terramate](https://github.com/terramate-io/terramate) - Ferramenta para gerenciar várias stacks Terraform, com suporte à detecção de alterações e geração de código.
- [terrap-cli](https://github.com/sirrend/terrap-cli) - Terrap - ferramenta CLI poderosa que examina sua infraestrutura e identifica as alterações necessárias.
- [terrars](https://github.com/andrewbaxter/terrars) - Terrars é uma ferramenta para criar stacks Terraform em Rust. É uma alternativa ao CDK.
- [terrascan](https://github.com/tenable/terrascan) - Coleção de testes de segurança e boas práticas para análise estática de templates Terraform.
- [terrascope](https://github.com/spilliams/terrascope) - Orquestrador de builds para monorepos Terraform.
- [terrashine](https://isawan.github.io/terrashine/) - Implementação de espelho de providers Terraform que armazena dependências em cache automaticamente à medida que os providers são solicitados.
- [terraspace](https://terraspace.cloud) - O framework Terraform.
- [terrastate](https://github.com/rohinivsenthil/terrastate) - Extensão do Visual Studio Code para monitorar/implantar/destruir recursos Terraform no seu workspace.
- [terratag](https://github.com/env0/terratag) - Terratag é uma ferramenta CLI que permite aos usuários do Terraform criar e manter tags automaticamente em todos os seus recursos AWS, Azure e GCP.
- [tf-init-booster](https://github.com/hayorov/terraform-init-booster) - Rotina anterior ao Terraform que acelera o download de módulos Terraform para blueprints volumosos.
- [tf-profile](https://github.com/datarootsio/tf-profile/) - Profiler para execuções do Terraform. Gere estatísticas globais, estatísticas por recurso ou visualizações.
- [tf-summarize](https://github.com/dineshba/tf-summarize) - Utilitário de linha de comando para exibir o resumo do plano Terraform.
- [tf-why](https://github.com/Raj-glitch-max/tf.why) - Ferramenta CLI que atribui desvios do Terraform ao agente AWS que os causou, por meio de consulta ao CloudTrail.
- [tfaction](https://github.com/suzuki-shunsuke/tfaction) - Coleção de GitHub Actions para um fluxo de trabalho Terraform opinativo.
- [tfautomv](https://github.com/busser/tfautomv) - Gera automaticamente blocos `moved` do Terraform para refatoração sem complicações.
- [tfcmt](https://github.com/suzuki-shunsuke/tfcmt) - CLI para notificar o resultado de plan e apply como comentário em Pull Request.
- [tfedit](https://github.com/minamijoyo/tfedit) - Ferramenta de refatoração para Terraform.
- [tfenv](https://github.com/tfutils/tfenv) - Gerenciador de versões do Terraform inspirado no rbenv.
- [tfgen](https://github.com/0xDones/tfgen) - Gerador de código Terraform para uma base de código consistente e DRY.
- [tfgpt](https://github.com/flavius-dinu/tfgpt) - Ferramenta CLI que integra Terraform ao GPT-3.5 Turbo da OpenAI para explicar comandos e conceitos do Terraform.
- [tfimport](https://github.com/coolapso/tfimport) - Ferramenta CLI para automatizar a importação de infraestrutura existente para o tfstate.
- [tfjson](https://github.com/palantir/tfjson) - Utilitário para ler um arquivo de plano Terraform e exportá-lo como JSON. :skull:
- [tfk8s](https://github.com/jrhouston/tfk8s) - Ferramenta para converter manifestos YAML do Kubernetes em HCL do Terraform.
- [tflint](https://github.com/terraform-linters/tflint) - Linter Terraform para detectar erros que não podem ser detectados por `terraform plan`.
- [tfmake](https://github.com/tfmake/tfmake) - Automatize Terraform com o poder do make.
- [tfmask](https://github.com/cloudposse-archives/tfmask) - Utilitário Terraform para ocultar saídas selecionadas de `terraform plan` e `terraform apply`. :skull:
- [tfmigrate](https://github.com/minamijoyo/tfmigrate) - Ferramenta de migração do estado Terraform para GitOps.
- [tfmigrator](https://github.com/tfmigrator/cli) - Biblioteca Go e CLI para migrar configurações e estado do Terraform.
- [tfmodcache](https://github.com/Rezarys/tfmodcache) - Cache local e compartilhado de módulos para Terraform e OpenTofu; `terraform init` deixa de baixar novamente módulos já obtidos. Sou o autor.
- [tfmv](https://github.com/suzuki-shunsuke/tfmv) - Renomeia recursos Terraform e gera blocos moved.
- [tfocus](https://github.com/nwiizo/tfocus) - tfocus é uma ferramenta superinterativa para selecionar e executar plan/apply do Terraform em recursos específicos. Pense nela como uma "ferramenta de emergência" — não para uso diário.
- [tfprovidercheck](https://github.com/suzuki-shunsuke/tfprovidercheck) - CLI para impedir a execução de providers Terraform maliciosos.
- [tfproviderlint](https://github.com/bflad/tfproviderlint) - Ferramenta de lint para providers Terraform.
- [tfrepl](https://github.com/ysoftwareab/tfrepl) - Um REPL do Terraform que oferece uma experiência completa de shell. Baseado em Readline. Sem dependências. Salve alterações de configuração. Histórico.
- [tfreveal](https://github.com/breml/tfreveal) - Utilitário Terraform para exibir planos Terraform com todos os valores secretos (sensíveis) revelados.
- [tfscaffold](https://github.com/tfutils/tfscaffold) - Framework para controlar infraestrutura AWS gerenciada por Terraform, com vários ambientes e componentes.
- [tfschema](https://github.com/minamijoyo/tfschema) - Inspetor de esquemas para providers Terraform.
- [tfsec](https://github.com/aquasecurity/tfsec) - Ferramenta de análise estática Terraform compatível com terraform <0.12 e >=0.12 e integração direta com o analisador HCL para melhores resultados.
- [tfsort](https://github.com/AlexNabokikh/tfsort) - Utilitário CLI para ordenar variáveis e saídas do Terraform.
- [tftarget](https://github.com/future-architect/tftarget) - Ferramenta CLI para executar `terraform xxx -target={...}` interativamente.
- [tftree](https://github.com/busser/tftree) - Exibe a pilha de chamadas de módulos Terraform no terminal.
- [tftui](https://github.com/idoavrah/terraform-tui) - Interface textual de usuário para o estado do Terraform.
- [tfupdate](https://github.com/minamijoyo/tfupdate) - Atualiza restrições de versão nas suas configurações Terraform.
- [tfvar](https://github.com/shihanng/tfvar) - tfvar analisa suas configurações ou módulos Terraform e extrai variáveis nos formatos desejados (tfvar, variáveis de ambiente etc.) para edição.
- [tfvault](https://github.com/tedilabs/tfvault) - Auxiliar universal de credenciais Terraform com backends de segredos conectáveis (chaveiro do SO, pass/gopass, variáveis de ambiente) e isolamento de contas por perfil.
- [tfvaultenv](https://github.com/oulman/tfvaultenv) - tfvaultenv lê segredos do HashiCorp Vault e gera variáveis de ambiente para vários providers Terraform com esses segredos.
- [tfwrapper](https://github.com/manheim/tfwrapper) - RubyGem que fornece tarefas Rake para executar o HashiCorp Terraform de forma sensata.
- [tfmcp](https://github.com/nwiizo/tfmcp) - Ferramenta CLI para interagir com Terraform via Model Context Protocol (MCP), permitindo que assistentes de IA como Claude gerenciem e operem ambientes Terraform.
- [tgf](https://github.com/coveooss/tgf) - Interface Terragrunt para executar Terragrunt/Terraform via Docker.
- [threatcl](https://github.com/threatcl/threatcl) - Documente seus modelos de ameaças com HCL.
- [tofuenv](https://github.com/tofuutils/tofuenv) - Gerenciador de versões OpenTofu inspirado no tfenv.
- [tpm](https://github.com/Madh93/tpm) - Gerenciador de pacotes para providers Terraform.
- [travelgrunt](https://github.com/ivanilves/travelgrunt) - Navegue por [mono]repositórios sem esforço!
- [trupositive](https://github.com/trupositive-ai/trupositive) - Wrapper sem configuração que injeta automaticamente metadados Git (SHA do commit, branch, repositório) em todos os recursos gerenciados pelo Terraform.
- [validIaC](https://github.com/gofireflyio/validiac) - ValidIaC combina as melhores ferramentas de código aberto para ajudar a garantir boas práticas, higiene e segurança no Terraform.
- [xterrafile](https://github.com/devopsmakers/xterrafile) - Gerencie sistematicamente módulos externos do registro de módulos, Git ou diretórios locais para uso no Terraform (escrito em Go). :skull:
- [yj](https://github.com/sclevine/yj) - CLI para converter entre YAML, TOML, JSON e HCL. Preserva a ordem dos mapas.
- [yor](https://github.com/bridgecrewio/yor) - Adiciona tags e rastreia automaticamente frameworks de infraestrutura como código (Terraform, Cloudformation e Serverless).
- [zephy](https://github.com/henrybravo/zephy) - Compara recursos Azure implantados em uma assinatura com recursos gerenciados por workspaces do Terraform Enterprise (HCP e self-hosted) *quando a estratégia de marcação de recursos da nuvem não é suficiente*.

### CI

- [opentofu-updater-action](https://github.com/drumandbytes/opentofu-updater-action) - GitHub Action que mantém providers e módulos OpenTofu/Terraform, gráficos Helm e imagens de contêiner atualizados, abrindo pull requests.
- [setup-terraform](https://github.com/hashicorp/setup-terraform) - Configura a CLI do Terraform no fluxo de trabalho GitHub Actions.
- [terraform-plan](https://github.com/cds-snc/terraform-plan) - GitHub Action para executar Terraform plan e adicionar um comentário com as alterações.
- [terraform-risk-assessor](https://github.com/Liam-Johnston/terraform-risk-assessor) - GitHub Action que analisa alterações do plano Terraform com IA e comenta uma avaliação de risco em pull requests.

### Extensões do VS Code

- [HashiCorp Terraform](https://marketplace.visualstudio.com/items?itemName=hashicorp.terraform)
- [vscode-terraform-live-graph](https://github.com/adamiBs/vscode-terraform-live-graph) - A extensão Terraform Live Graph para Visual Studio Code permite gerar um grafo Terraform em tempo real enquanto você programa.
- [tf-nav](https://marketplace.visualstudio.com/items?itemName=owenrumney.tf-nav) - Extensão de navegação Terraform que cria um índice de recursos por tipo de arquivo, com uma visualização em árvore fácil de navegar.

## Bibliotecas

- [hcl-rs](https://github.com/martinohmann/hcl-rs) - Bibliotecas de análise e codificação HCL para Rust com suporte a serde.
- [hcl4j](https://github.com/wondrify/hcl4j) - Analisador HCL em Java.
- [nu_plugin_hcl](https://github.com/Yethal/nu_plugin_hcl) - Plugin analisador HCL para [Nushell](https://github.com/nushell/nushell).
- [pyhcl](https://github.com/virtuald/pyhcl) - Analisador HCL em Python.
- [python-hcl2](https://github.com/amplify-education/python-hcl2/) - Analisador HCL2 em Python.
- [rhcl](https://github.com/winebarrel/rhcl) - Analisador HCL puro em Ruby. :skull:
- [tree-sitter-hcl](https://github.com/tree-sitter-grammars/tree-sitter-hcl) - Gramática HCL para tree-sitter.

## Modelos iniciais

- [Solo-Engineer Stack](https://github.com/sarmakska/terraform-stack) - Repositório Terraform único que conecta Vercel + Supabase + Cloudflare + DigitalOcean como plataforma indie-SaaS. Um `terraform apply` provisiona um projeto Next.js, um projeto Supabase com variáveis de ambiente enviadas para Vercel, uma zona Cloudflare com R2 e Workers KV e um droplet DigitalOcean com monitoramento.
- [Terraform Generator](https://github.com/sudokar/generator-tf-module) - Estrutura inicial para um novo módulo ou projeto Terraform, com suporte a frameworks de teste (terratest e kitchen-terraform).
- [Terraform GitOps Framework](https://www.kubestack.com) - Tudo o que você precisa para criar automação confiável para clusters Kubernetes AKS, EKS e GKE em um único framework gratuito e de código aberto.

## Plataformas Terraform self-hosted

- [Snap CD](https://github.com/schrieksoft/snapcd) - Plataforma de implantação contínua completa que facilita implantações modulares com executores isolados, automação com reconhecimento de dependências e controle de acesso granular.
- [Lynx](https://github.com/clivern/lynx) - Backend Terraform rápido, seguro e confiável. Possui painel intuitivo, gerenciamento de projetos e ambientes, versionamento do estado e suporte a bloqueios e snapshots.
- [OTF](https://github.com/leg100/otf) - Open Terraforming Framework, uma alternativa de código aberto ao Terraform Enterprise com integração completa à CLI do Terraform.
- [Terrakube](https://docs.terrakube.io) - Alternativa de código aberto ao Terraform Enterprise com registro privado, estado remoto, fluxos personalizados, workspaces agendados e estados visuais.
- [Digger](https://digger.dev) - Alternativa de código aberto ao Terraform Cloud — execute jobs de Terraform plan e apply no seu CI.
- [cloud-concierge](https://github.com/dragondrop-cloud/cloud-concierge) - Codifique recursos não gerenciados como Terraform, detecte desvios e analise custos e segurança da nuvem; tudo entregue como Pull Request.
- [Stack-Lifecycle-Deployment](https://github.com/D10S0VSkY-OSS/Stack-Lifecycle-Deployment) - Solução de código aberto que define e gerencia o ciclo de vida completo dos recursos usados e provisionados em uma nuvem.
- [Burrito](https://github.com/padok-team/burrito) - Operador Kubernetes TACoS — "ArgoCD para Terraform".
- [Terrateam](https://terrateam.io) - Alternativa de código aberto ao Terraform Cloud/Enterprise, com GitOps como prioridade, integração nativa ao GitHub e projetada para escala, segurança e confiabilidade.


## Plataformas Terraform gerenciadas :heavy_dollar_sign:

- [compliance.tf](https://compliance.tf) - Módulos Terraform com SOC 2, PCI DSS, HIPAA, NIST 800-53 e mais de 35 outros frameworks integrados. Configurações não conformes falham em `terraform plan` antes de qualquer aplicação. :heavy_dollar_sign:
- [ControlMonkey](https://www.controlmonkey.io/) - Alternativa ao Terraform Cloud com geração de código Terraform/OpenTofu, inventário de nuvem e cobertura IaC. Inclui políticas prontas, correção de desvios e scanner de atividades ClickOps. :heavy_dollar_sign:
- [Firefly](https://www.firefly.ai/) - Alternativa ao Terraform Cloud que aproveita sua ferramenta de CI. A plataforma Firefly também examina sua nuvem para avaliar a cobertura de IaC e detectar desvios. :heavy_dollar_sign:
- [Scalr](https://www.scalr.com/) - Alternativa ao Terraform Enterprise com integração OPA, estrutura organizacional, hooks personalizados, integrações nativas com outras plataformas DevOps e relatórios centralizados. :heavy_dollar_sign:
- [Stategraph](https://stategraph.com) - Terraform e OpenTofu sem o gargalo do arquivo de estado. Substitua o arquivo de estado plano por um banco de dados real. Equipes podem planejar em paralelo, consultar o estado via SQL e executar planos em segundos, em vez de minutos. :heavy_dollar_sign:
- [env0](https://www.env0.com/) - Alternativa ao Terraform Cloud/Enterprise com integração OPA, fluxos personalizados e suporte a Terragrunt. :heavy_dollar_sign:
- [Brainboard](https://www.brainboard.co) - Projete visualmente, implante e gerencie infraestruturas modernas de nuvem a partir de qualquer provedor — AWS, GCP, Azure. :heavy_dollar_sign:
- [Spacelift](https://spacelift.io/) - Alternativa ao Terraform Cloud/Enterprise. Plataforma colaborativa de entrega de infraestrutura para Terraform. :heavy_dollar_sign:
- [StackGuardian](https://stackguardian.io/) - Plataforma de codificação e orquestração de infraestrutura que converte recursos de nuvem existentes em IaC, com fluxos orientados por políticas usando Tirith, OPA e Checkov, além de suporte a runtimes privados e templates sem código. :heavy_dollar_sign:

## Ferramentas para Terraform Enterprise

- [terraform-enterprise-cli](https://github.com/skierkowski/terraform-enterprise-cli) - Interface de linha de comando do Terraform Enterprise.
- [terraform-enterprise-client](https://github.com/skierkowski/terraform-enterprise-client) - Cliente Ruby da API e ferramenta de linha de comando do Terraform Enterprise.
- [terraform-enterprise-migrator](https://github.com/sil-org/tfc-ops) - Script para migrar ambientes Terraform Enterprise da versão legada para a nova versão do Terraform Enterprise.

## Vídeos

- [Your Weekly Dose of Terraform](https://www.youtube.com/channel/UCGH0yYPvlCN1VjSFMGVmFgQ) - Canal do YouTube com transmissões ao vivo semanais sobre notícias do Terraform, análises, entrevistas, perguntas e respostas, programação ao vivo e algumas experiências com Terraform.
- [Terraform explained in 15 mins](https://www.youtube.com/watch?v=l5k1ai_GBDE) - Terraform explicado em 15 minutos.
- [Terraform Course](https://www.youtube.com/watch?v=SLB_c_ayRMo) - Automatize sua infraestrutura de nuvem AWS.
- [How to Build Reusable, Composable, Battle tested Terraform Modules](https://www.youtube.com/watch?v=LVgP63BkhKQ) - Yevgeniy Brikman fala sobre como escrever código Terraform reutilizável, componível e testável. A apresentação se concentra em módulos Terraform, mas também explica de forma breve e clara qual problema o Terraform foi criado para resolver e inclui uma demonstração curta dos fundamentos do Terraform (cerca de 39 min, outubro de 2017).
- [Building Scalable, Repeatable Infrastructure in the Cloud with Terraform](https://www.youtube.com/watch?v=cG7pcksTAnY) - Demonstra como o Terraform viabiliza a prática de infraestrutura como código ao implantar TeamCity na AWS usando PostgreSQL hospedado.
- [Creating a Google Compute Instance with Terraform](https://www.youtube.com/watch?v=fo3VX33Zx0c) - Exemplo de criação de uma instância Google Compute com código Terraform.
- [Creating a Terraform Provider for Just About Anything](https://www.hashicorp.com/resources/creating-terraform-provider-for-anything) - Aprenda a contribuir com um provider Terraform ou criar o seu próprio neste passo a passo.
- [Evolving Your Infrastructure with Terraform](https://www.youtube.com/watch?v=wgzgVm7Sqlk) - O CTO da OpenCredo apresenta uma análise extensa do uso de Terraform no mundo real, com alguns casos de uso interessantes.
- [Going Multi-Cloud with Terraform and Nomad](https://www.youtube.com/watch?v=e42A4aBZUkQ).
- [How to Extend the Terraform Provider List](https://www.youtube.com/watch?v=2BvpqmFpchI) - Nesta palestra, Paul apresenta o processo de criação de um provider Terraform.
- [Orchestrating Containers with Terraform and Consul](https://www.infoq.com/presentations/terraform-consul/) - Mitchell Hashimoto mostra como Terraform pode ser usado para implantar e escalar cargas de trabalho em contêineres.
- [Production ChaosMonkey with Terraform](https://www.youtube.com/watch?v=CPI6W3LK0-g) - Como a DigitalOcean usa Terraform para executar testes de integração em produção.
- [Running a Terraform Environment at Scale](https://www.youtube.com/watch?v=3JVGSq7QIS0) - Executando Terraform em grande escala, com centenas de contas AWS.
- [Setup Continuous Integration for a Terraform module](https://www.youtube.com/watch?v=vuJ6bjYKUcA) - Exemplo de uso de CI com Kitchen-Terraform para testar, marcar e publicar nosso módulo Terraform, que cria uma instância Google Compute.
- [State of Terraform Providerland](https://www.youtube.com/watch?v=ar1PF5iDtbg) - Como funcionam os providers Terraform e como criar um.
- [Terraform At Scale](https://www.youtube.com/watch?v=RldRDryLiXs) - Como a Segment usa Terraform.
- [Terraform w/ Lee Trout](https://www.youtube.com/watch?v=p2ESyuqPw1A) - Foco em padrões de desenvolvimento e em como estruturar código Terraform de maneira eficaz.
- [Terraforming the Composable World](https://www.youtube.com/watch?v=cHrOXPatFeg) - Integração do Terraform ao provisionamento bare metal local.
- [Test and verify a Google Compute Instance with Kitchen-Terraform](https://www.youtube.com/watch?v=kiH3-LEveek) - Exemplo de uso do Kitchen-Terraform para testar nosso código Terraform que cria uma instância Google Compute.
- [Untangling Terraform Through Refactoring](https://www.youtube.com/watch?v=OH6iDKaXpZs) - Como refatorar seu código Terraform com cuidado e risco mínimo.
- [Complete Terraform Course - From BEGINNER to PRO! (Learn Infrastructure as Code)](https://www.youtube.com/watch?v=7xngnjfIlK4) - Curso completo, do nível iniciante ao avançado, sem foco em um provedor de nuvem específico, com uma abordagem geral.

## Plugins de editores

- [Emacs terraform-mode](https://github.com/hcl-emacs/terraform-mode)
- [Intellij](https://plugins.jetbrains.com/plugin/7808-terraform-and-hcl)
- [Terraform-ls](https://github.com/hashicorp/terraform-ls) (Terraform Language Server)
- [Terraform-lsp](https://github.com/juliosueiras/terraform-lsp) (Protocolo de Servidor de Linguagem para Terraform)
- [vim-hcl](https://github.com/jvirtanen/vim-hcl) - Realce de sintaxe para HCL
- [Vim-Terraform-Completion](https://github.com/juliosueiras/vim-terraform-completion)
- [Vim-Terraform](https://github.com/hashivim/vim-terraform)

## Licença

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

Na medida permitida por lei, Shuaib Yunus renunciou a todos os direitos autorais e direitos conexos ou similares sobre esta obra.
