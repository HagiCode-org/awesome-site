# Awesome Terraform [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) <!-- omit in toc -->

[![Link Checker](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/link-checker.yml)
[![Misspell Check](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml/badge.svg)](https://github.com/shuaibiyy/awesome-tf/actions/workflows/misspell.yml)

> Lista seleccionada de recursos sobre [HashiCorp's Terraform](https://www.terraform.io/).
> [<img src="https://raw.githubusercontent.com/shuaibiyy/awesome-terraform/master/terraform.svg" align="right" width="100">](https://terraform.io)
> ¡Tus [contribuciones](https://github.com/shuaibiyy/awesome-tf/blob/master/contributing.md) son bienvenidas!

Terraform te permite crear, cambiar y mejorar de forma segura y predecible la infraestructura de producción. Es una herramienta de código abierto que codifica las API en archivos de configuración declarativos que se pueden compartir entre los miembros del equipo, tratar como código, editar, revisar y versionar.

## Contenido <!-- omit in toc -->

- [Leyenda](#legend)
- [Recursos oficiales](#official-resources)
- [Comunidad](#community)
- [Libros](#books)
- [Aprendizaje y estudio](#learning-and-studying)
- [Aplicaciones](#apps)
- [Tutoriales y entradas de blog](#tutorials-and-blog-posts)
  - [Guías para principiantes](#beginner-guides)
  - [Escritura de proveedores personalizados](#writing-custom-providers)
  - [Guías prácticas](#how-to)
  - [Configuración para varios entornos](#multi-environment-configuration)
  - [Azure](#azure)
  - [AWS](#aws)
  - [Google Cloud](#google-cloud)
  - [Varios](#miscellaneous)
- [Módulos de la comunidad](#community-modules)
- [Registros autohospedados](#self-hosted-registries)
- [Registros gestionados](#managed-registries)
- [Proveedores](#providers)
  - [Proveedores mantenidos por Hashicorp](#hashicorp-supported-providers)
  - [Proveedores mantenidos por fabricantes](#vendor-supported-providers)
  - [Proveedores de la comunidad](#community-providers)
- [Pruebas](#testing)
- [Herramientas](#tools)
  - [CI](#ci)
  - [Extensiones de VS Code](#vs-code-extensions)
- [Bibliotecas](#libraries)
- [Plantillas](#boilerplates)
- [Plataformas Terraform autohospedadas](#self-hosted-terraform-platforms)
- [Plataformas Terraform gestionadas :heavy\_dollar\_sign:](#managed-terraform-platforms-heavy_dollar_sign)
- [Herramientas para Terraform Enterprise](#terraform-enterprise-tooling)
- [Vídeos](#videos)
- [Complementos para editores](#editor-plugins)
- [Licencia](#license)

## Leyenda

- No compatible con _terraform >= 0.12_ :ghost:
- Abandonado :skull:
- Monetizado :heavy_dollar_sign:

## Recursos oficiales

- [Hashicorp Terraform Blog](https://www.hashicorp.com/en/blog/products/terraform)
- [Introduction to Terraform](https://developer.hashicorp.com/terraform/intro)
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform learn](https://developer.hashicorp.com/terraform/tutorials)

## Comunidad

- [weekly.tf - Terraform Weekly Newsletter](https://www.weekly.tf/) - Boletín semanal que cubre noticias de Terraform, proyectos de código abierto, anuncios y debates.
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
- [The Claude Agent Skill for Terraform and OpenTofu - testing, modules, CI/CD, and production patterns](https://github.com/antonbabenko/terraform-skill) - Habilidad de Claude Code para Terraform y OpenTofu: pruebas, diseño de módulos, flujos de trabajo de CI/CD y patrones de producción.
- [awesome-terraform-compliance](https://github.com/antonbabenko/awesome-terraform-compliance) - Lista seleccionada de herramientas, marcos de trabajo y recursos para el cumplimiento normativo y la seguridad de Terraform.
- Comunidades específicas por idioma:
  - [Telegram (comunidad de habla ucraniana)](https://t.me/terraform_ukraine)

## Libros

- [Big Little Book On Terraform](https://www.amazon.com/Big-Little-Book-Terraform-Omos-ebook/dp/B07PWYPNX8/)
- [Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Second Edition](https://www.manning.com/books/bootstrapping-microservices-second-edition)
- [Deep-Dive Terraform on Azure](https://link.springer.com/book/10.1007/978-1-4842-7328-9)
- [Getting Started with Terraform, 2nd ed.](https://www.amazon.com/Getting-Started-Terraform-production-infrastructure/dp/1788623533/)
- [HashiCorp Infrastructure Automation Certification Guide](https://www.amazon.com/HashiCorp-Infrastructure-Automation-Certification-Guide-ebook/dp/B092KM7LXC/)
- [IaC starting with Terraform (Korean)](https://product.kyobobook.co.kr/detail/S000202478097)
- [Infrastructure as Code](https://www.oreilly.com/library/view/infrastructure-as-code/9781491924334/)
- [Patterns and Practices for Infrastructure as Code: With examples in Python and Terraform](https://www.manning.com/books/infrastructure-as-code-patterns-and-practices)
- [Terraform Best Practices](https://www.terraform-best-practices.com/) - [libro electrónico de código abierto](https://github.com/antonbabenko/terraform-best-practices)
- [Terraform Cookbook](https://www.amazon.com/Terraform-Cookbook-Efficiently-Infrastructure-platforms/dp/1800207557)
- [Terraform for Ops e-book](https://www.terraformforops.com)
- [Terraform in Action](https://www.manning.com/books/terraform-in-action)
- [Terraform in Depth](https://www.manning.com/books/terraform-in-depth)
- [Terraform: Up & Running, 3rd ed.](https://www.terraformupandrunning.com/)
- [The Terraform Book](https://terraformbook.com/)

## Aprendizaje y estudio

- [Terraform Academy](https://www.terraformacademy.app) - Plataforma interactiva de aprendizaje de Terraform/IaC con laboratorios prácticos, preparación para certificaciones (HashiCorp, AWS, GCP, Azure, Docker, Kubernetes, GitOps), asesoramiento con IA y seguimiento del progreso. Consulta también el blog [SRE Pro Tips](https://www.terraformacademy.app/protips/?cat=sre-pro-tips) y las aplicaciones móviles/PWA a continuación.
- [Terraform Terminal Simulator](https://devops-daily.com/games/terraform-terminal-simulator) - Practica init, plan y apply en una terminal simulada en el navegador. Gratis y de código abierto, sin necesidad de registrarse.
- [compliance.tf docs](https://compliance.tf/docs/) - Implementaciones gratuitas de controles SOC 2, PCI DSS, HIPAA, NIST 800-53 y más de 35 marcos de cumplimiento en Terraform: referencia abierta para escribir código de infraestructura conforme.
- [DevOpsLesson Terraform Playground](https://devopslesson.com/playground/terraform) - Simulador gratuito de Terraform en el navegador, con ejercicios guiados de HCL y comandos de práctica.

## Aplicaciones

Aplicaciones móviles, de escritorio y PWA para aprender y trabajar con Terraform estés donde estés.

- [Terraform Academy — iOS](https://apps.apple.com/us/app/terraform-academy/id6745738634) - Aplicación nativa para iOS de la plataforma interactiva de aprendizaje Terraform Academy. Laboratorios prácticos, preparación para certificaciones (HashiCorp, AWS, GCP, Azure, Docker, Kubernetes, GitOps), asesoramiento con IA y sincronización del progreso entre dispositivos.
- [Terraform Academy — Android](https://play.google.com/store/apps/details?id=com.terraformacade1.app) - Aplicación nativa para Android de la plataforma de aprendizaje Terraform Academy, con los mismos laboratorios, preparación para certificaciones y asesoramiento con IA que las versiones para iOS y web.
- [Terraform Academy — PWA / Web App](https://www.terraformacademy.app/) - Versión instalable de aplicación web progresiva de Terraform Academy. Funciona sin conexión, se instala en la pantalla de inicio de cualquier plataforma y sincroniza el progreso con las aplicaciones móviles.

## Tutoriales y entradas de blog

### Guías para principiantes

- [A Comprehensive Guide to Terraform](https://www.gruntwork.io/blog/a-comprehensive-guide-to-terraform) - Serie de entradas de blog del autor de «Terraform: Up & Running» que guía al lector desde los primeros pasos con Terraform hasta su uso en entornos reales.
- [Using Terraform for Cloud Deployments - Part 1](https://dev.to/koenighotze/using-terraform-for-cloud-deployments---part-1) - Aprovisionamiento de una instancia EC2.
- [Hello, world: The Fargate/Terraform tutorial I wish I had](https://section411.com/2019/07/hello-world/) - Entrada de blog que describe cómo configurar desde cero un clúster ECS Fargate.
- [Terraform Security Guide](https://sysdig.com/blog/terraform-security-best-practices/) - Entrada de blog que describe las prácticas recomendadas de seguridad al trabajar con Terraform.
- [Building a SaaS API? Don't Forget Your Terraform Provider](https://www.speakeasy.com/blog/build-terraform-providers) - Por qué deberías escribir un proveedor de Terraform.
- [Complete Terraform Course in French (Free)](https://blog.stephane-robert.info/docs/infra-as-code/provisionnement/terraform/) – Curso completo y gratuito en francés para dominar Terraform, desde los conceptos básicos hasta el uso avanzado, con ejemplos prácticos y prácticas recomendadas.
- [Introduction to Terraform](https://devopslesson.com/tutorials/terraform/introduction-to-terraform) - Guía de los fundamentos de Terraform para principiantes: proveedores, recursos, estado y la primera ejecución de apply con ejemplos prácticos.

### Escritura de proveedores personalizados

- [Creating custom terraform providers](https://blog.pelo.tech/creating-custom-terraform-providers-341311823fa2) - Guía para crear proveedores personalizados.
- [Writing a Terraform provider](https://web.archive.org/web/20220516140659/http://blog.jfabre.net/2017/01/22/writing-terraform-provider/) - Guía para crear proveedores personalizados.
- [Writing Custom Providers](https://developer.hashicorp.com/terraform/plugin/sdkv2) - Documentación oficial para crear proveedores personalizados.
- [Terraform Provider Code generation](https://www.speakeasy.com/docs/terraform/create-terraform) - Guía para generar un proveedor de Terraform a partir de una especificación de OpenAPI (mantenido por un fabricante).

### Guías prácticas

- [How To Write OPA for Terraform](https://scalr.com/learning-center/opa-series-part-1-open-policy-agent-and-terraform) - Cómo usar Open Policy Agent para evaluar y aplicar políticas a tus planes de Terraform.
- [Deploying Discourse with Terraform](https://www.hashicorp.com/en/blog/deploying-discourse-with-terraform) - Muestra cómo Terraform puede crear en un solo comando una instancia de Discourse en ejecución en DigitalOcean.
- [Deploying Django to AWS ECS with Terraform](https://testdriven.io/blog/deploying-django-to-ecs-with-terraform/) - Explica cómo usar Terraform para aprovisionar la infraestructura de AWS necesaria para ejecutar una aplicación Django en ECS.
- [Easily Deploy A Seneca Microservice to ECS with Wercker and Terraform: Part I](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-i/), [II](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-ii/) & [III](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-iii/) - Ilustra cómo incorporar Terraform a una canalización de despliegue de microservicios.
- [Terraform for a Highly Available VPN between AWS and Azure](https://web.archive.org/web/20210616132857/https://deployeveryday.com/2020/04/13/vpn-aws-azure-terraform.html) - Código Terraform para desplegar una VPN de alta disponibilidad entre AWS y Azure.
- [Terraforming 1Password](https://1password.com/blog/terraforming-1password) - Cómo migró 1Password de CloudFormation a Terraform.
- [Tutorial: How to Use Terraform to Deploy OpenStack Workloads](https://web.archive.org/web/20170611135511/http://www.stratoscale.com/blog/openstack/tutorial-how-to-use-terraform-to-deploy-openstack-workloads/) - Ilustra lo fácil que es usar el proveedor Terraform de OpenStack para desplegar un servidor web.
- [Zero Downtime Updates with HashiCorp Terraform](https://www.hashicorp.com/en/blog/zero-downtime-updates-with-terraform) - Cómo garantizar que la infraestructura no tenga tiempo de inactividad.
- [Google Cloud Platform for 10$ a month using terraform](https://github.com/nufailtd/terraform-budget-gcp) - Muestra cómo usar Terraform para crear un clúster seguro de Google Kubernetes, servicios Google Cloud Run y otros elementos de infraestructura por menos de [10$](https://nufailtd.github.io/budget-gcp/) al mes.
- [Infracost + Terraform + GitHub Actions = Automate Cloud Cost Management](https://medium.com/better-programming/infracost-terraform-github-actions-automate-cloud-cost-management-a62b329f2834) - Cómo usar Infracost como mecanismo de control para gestionar los costes de la nube durante el desarrollo con Terraform.
- [How To Wrap Your Terraform Provider for Pulumi](https://www.speakeasy.com/blog/pulumi-terraform-provider) - Cómo preparar tu proveedor de Terraform para Pulumi.
- [How to Build an AWS Account Vending Machine](https://medium.com/@StackGuardian/how-to-build-an-aws-account-vending-machine-by-stackguardian-f2895e35a27b) - Gestión automatizada y de autoservicio del ciclo de vida de cuentas AWS mediante pilas de Terraform orquestadas por StackGuardian, con asignación basada en SSM, activadores de limpieza de EventBridge y aplicación de políticas Tirith.

### Configuración para varios entornos

- [Terraform Design Patterns: the Terrafile](https://bensnape.com/2016/01/14/terraform-design-patterns-the-terrafile/) - Gestión de módulos de Terraform y sus versiones en proyectos de Terraform con Terrafile.
- [Terraform, VPC, and why you want a tfstate file per env](https://charity.wtf/2016/03/30/terraform-vpc-and-why-you-want-a-tfstate-file-per-env/) - Algunos problemas habituales al usar Terraform en proyectos grandes con varios entornos y cómo evitarlos.
- [Using Pipelines to Manage Environments with Infrastructure as Code](https://medium.com/@kief/https-medium-com-kief-using-pipelines-to-manage-environments-with-infrastructure-as-code-b37285a1cbf5) - Explica distintos enfoques para crear una canalización que gestione cambios de infraestructura al pasar de un entorno al siguiente.

### Azure

- [Learning HashiCorp Terraform](https://web.archive.org/web/20201108000713/https://www.g10s.io/hashicorp-terraform/) - Guía para Azure.
- [New Terraform Azure Automation Resources](https://bgelens.nl/terraform-automation-resources/) - Azure Automation.
- [Terraforming Azure PaaS](https://devkimchi.com/2019/01/21/terraforming-azure-paas/) - Despliega recursos PaaS en Azure.
- [azure-az104](https://github.com/victorlane/azure-az104) - Notas de estudio y ejemplos prácticos de Terraform para AZ-104 Azure Administrator, incluida una arquitectura de referencia de zona de aterrizaje.

### AWS

- [AWS Lambda the Terraform Way](https://github.com/nsriram/lambda-the-terraform-way) - Comprende AWS Lambda en profundidad, más allá de ejecutar funciones, mediante Terraform. También incluye guías de integración con S3, API Gateway, DynamoDB, Kinesis y SQS.
- [Managing AWS Lambda Functions with Terraform](https://spacelift.io/blog/terraform-aws-lambda) - Para qué se usa AWS Lambda y cómo usar Terraform para administrar funciones de AWS Lambda.

### Google Cloud

- [Managing infrastructure as code with Terraform, Cloud Build, and GitOps](https://docs.cloud.google.com/docs/terraform/resource-management/managing-infrastructure-as-code) - Configura y administra infraestructura como código con Terraform, Cloud Build y GitOps.
- [Getting started with Terraform on Google Cloud](https://docs.cloud.google.com/docs/terraform/create-vm-instance) - Usa Terraform para crear una VM en Google Cloud e iniciar un servidor básico de Python Flask.
- [Managing Cloud Infrastructure with Terraform](https://www.skills.google/course_templates/746) - Despliegue de un servicio de balanceador de carga de Kubernetes con Terraform, balanceador HTTPS basado en contenido con Terraform, balanceo de carga modular con Terraform (balanceador regional), proveedores personalizados con Terraform, Cloud SQL con Terraform y creación de una VPN entre Google Cloud y AWS con Terraform.
- [Hashicorp Terraform Tutorials for Google Cloud](https://developer.hashicorp.com/terraform/tutorials/gcp-get-started) - Empieza a usar Terraform en Google Cloud.
- [IAC - Terraform and Terragrunt on Google Cloud](https://www.academeez.com/courses/terraform) - Curso de código abierto con licencia MIT sobre la creación de infraestructura en Google Cloud con Terraform/OpenTofu y Terragrunt.
- [Self-host n8n on Google Cloud Run](https://github.com/datawranglerai/self-host-n8n-on-gcr) - Configuración de Terraform y guía para desplegar la automatización de flujos de trabajo n8n en Cloud Run con Cloud SQL, Secret Manager y modo de cola opcional mediante Redis.

### Varios

- [Sharing data between Terraform configurations](https://web.archive.org/web/20230927082422/https://jamesmckay.net/2016/09/sharing-data-between-terraform-configurations/) - Ilustra cómo usar el estado remoto para compartir datos entre configuraciones de Terraform.
- [The Segment AWS Stack](https://web.archive.org/web/20250322120753/https://segment.com/blog/the-segment-aws-stack/) - Muestra entre bastidores la infraestructura basada en Terraform que resolvió [The Million Dollar Engineering Problem](https://segment.com/blog/the-million-dollar-eng-problem/) en [Segment](https://segment.com/).
- [Top 3 Terraform Testing Strategies for Ultra-Reliable Infrastructure-as-Code](https://www.contino.io/insights/top-3-terraform-testing-strategies-for-ultra-reliable-infrastructure-as-code)
- [Two Weeks with Terraform](https://charity.wtf/2016/02/23/two-weeks-with-terraform/) - Experiencia ganada a pulso al usar Terraform en entornos reales y algunos consejos operativos.
- [Terraform: Beyond the Basics with AWS](https://aws.amazon.com/blogs/apn/terraform-beyond-the-basics-with-aws/) - Explicación de una demostración que usa Terraform para aprovisionar una arquitectura de ejemplo en AWS.
- [Terraform cost estimation](https://github.com/antonbabenko/terraform-cost-estimation) - Estimación de costes anonimizada y gratuita a partir de un plan de Terraform (0.12+) o un archivo de estado. También disponible en el navegador en [terraform-cost-estimation.com](https://terraform-cost-estimation.com).
- [How to Debug Terraform Projects: Tutorial](https://spacelift.io/blog/terraform-debug)
- [The terraform-docs GitHub Action: A Complete CI Setup Guide](https://devtoolhub.com/terraform-docs-github-action/) - Generación y confirmación automática de documentación de módulos en cada PR con terraform-docs, incluidos los problemas de OIDC/permisos que pueden hacer fallar CI.

## Módulos de la comunidad

Para consultar más módulos de la comunidad que no aparecen aquí, visita el [Registro de módulos de Terraform](https://registry.terraform.io/).

- [nis2shield/infrastructure](https://github.com/nis2shield/infrastructure) - Módulos de Terraform para automatizar el cumplimiento de NIS2 y el despliegue de infraestructura segura.
- [rancher-terraform-digitalocean](https://github.com/lunagt/rancher-terraform-digitalocean) - Servidor Rancher en DigitalOcean.
- [segmentio/stack](https://github.com/segmentio/stack) - Configura infraestructura de producción con AWS, Docker y ECS.
- [terraform-aws-account-lookup](https://github.com/be-bold/terraform-aws-account-lookup) - Este módulo de Terraform permite consultar cuentas AWS y genera las cuentas en varios mapas o como lista completa; permite aplicar un filtro de búsqueda a la lista y agrupar cuentas por etiquetas existentes mediante un submódulo.
- [terraform-aws-alb](https://github.com/terraform-aws-modules/terraform-aws-alb) - Crea un balanceador de carga de aplicaciones en AWS (módulo verificado).
- [terraform-aws-appconfig](https://github.com/terraform-aws-modules/terraform-aws-appconfig) - Crea recursos de AWS AppConfig en AWS.
- [terraform-aws-atlantis](https://github.com/terraform-aws-modules/terraform-aws-atlantis) - Crea configuraciones de Terraform para ejecutar [Atlantis](https://runatlantis.io) en AWS Fargate. Admite GitHub, GitLab y BitBucket.
- [terraform-aws-autoscaling](https://github.com/terraform-aws-modules/terraform-aws-autoscaling) - Crea grupos de escalado automático y configuraciones de lanzamiento (módulo verificado).
- [terraform-aws-customer-gateway](https://github.com/terraform-aws-modules/terraform-aws-customer-gateway) - Crea una puerta de enlace de cliente en AWS.
- [terraform-aws-datadog-forwarders](https://github.com/terraform-aws-modules/terraform-aws-datadog-forwarders) - Crea recursos en AWS para reenviar registros y métricas a Datadog.
- [terraform-aws-dms](https://github.com/terraform-aws-modules/terraform-aws-dms) - Crea recursos de AWS DMS (Database Migration Service) en AWS.
- [terraform-aws-dynamodb-table](https://github.com/terraform-aws-modules/terraform-aws-dynamodb-table) - Crea una tabla de DynamoDB en AWS.
- [terraform-aws-ec2-instance](https://github.com/terraform-aws-modules/terraform-aws-ec2-instance) - Crea instancias EC2 en AWS.
- [terraform-aws-ecr](https://github.com/cloudposse/terraform-aws-ecr) - Administra registros de contenedores Docker en AWS ECR.
- [terraform-aws-ecs](https://github.com/terraform-aws-modules/terraform-aws-ecs) - Crea recursos de AWS ECS en AWS.
- [terraform-aws-efs](https://github.com/cloudposse/terraform-aws-efs) - Define un sistema de archivos EFS.
- [terraform-aws-eks](https://github.com/terraform-aws-modules/terraform-aws-eks) - Crea Elastic Kubernetes Service en AWS (módulo muy popular).
- [terraform-aws-elb](https://github.com/terraform-aws-modules/terraform-aws-elb) - Crea un balanceador de carga elástico en AWS (módulo verificado).
- [terraform-aws-eventbridge](https://github.com/terraform-aws-modules/terraform-aws-eventbridge) - Crea recursos de EventBridge en AWS.
- [terraform-aws-jenkins-ha-agents](https://github.com/neiman-marcus/terraform-aws-jenkins-ha-agents) - Despliegue de Jenkins basado en EC2 con agentes de alta disponibilidad (spot). Se ejecuta en EFS para garantizar la inmutabilidad. Totalmente personalizable y con valores predeterminados sensatos.
- [terraform-aws-jenkins](https://github.com/cloudposse-archives/terraform-aws-jenkins) - Crea una imagen Docker con Jenkins, la guarda en un repositorio ECR y la despliega en Elastic Beanstalk con una pila Docker.
- [terraform-aws-key-pair](https://github.com/cloudposse/terraform-aws-key-pair) - Genera automáticamente pares de claves SSH (claves públicas/privadas).
- [terraform-aws-lambda-auto-package](https://github.com/nozaq/terraform-aws-lambda-auto-package) - Módulo Terraform para definir una función Lambda cuyos archivos de origen se compilan y empaquetan automáticamente para su despliegue.
- [terraform-aws-lambda](https://github.com/terraform-aws-modules/terraform-aws-lambda) - Módulo Terraform que compila dependencias y empaqueta, además de crear recursos AWS Lambda en innumerables combinaciones.
- [terraform-aws-managed-service-prometheus](https://github.com/terraform-aws-modules/terraform-aws-managed-service-prometheus) - Crea recursos de AWS Managed Service for Prometheus (AMP) en AWS.
- [terraform-aws-modules](https://github.com/terraform-aws-modules) - Colección de módulos Terraform para AWS mantenidos por la comunidad (incluye módulos oficiales de AWS).
- [terraform-aws-msk-kafka-cluster](https://github.com/terraform-aws-modules/terraform-aws-msk-kafka-cluster) - Crea recursos de AWS MSK (Managed Streaming for Kafka) en AWS.
- [terraform-aws-notify-slack](https://github.com/terraform-aws-modules/terraform-aws-notify-slack) - Crea un tema SNS y una función Lambda que envía notificaciones a Slack.
- [terraform-aws-postgresql-rds](https://github.com/azavea/terraform-aws-postgresql-rds) - Crea PostgreSQL en RDS.
- [terraform-aws-rds-aurora](https://github.com/terraform-aws-modules/terraform-aws-rds-aurora) - Crea recursos de clúster RDS Aurora en AWS (módulo verificado).
- [terraform-aws-rds-proxy](https://github.com/terraform-aws-modules/terraform-aws-rds-proxy) - Crea recursos de AWS RDS Proxy en AWS.
- [terraform-aws-rds](https://github.com/terraform-aws-modules/terraform-aws-rds) - Crea recursos RDS en AWS (módulo verificado).
- [terraform-aws-redshift](https://github.com/terraform-aws-modules/terraform-aws-redshift) - Crea recursos Redshift en AWS.
- [terraform-aws-route53](https://github.com/terraform-aws-modules/terraform-aws-route53) - Crea recursos Route53 en AWS.
- [terraform-aws-s3-bucket](https://github.com/terraform-aws-modules/terraform-aws-s3-bucket) - Crea recursos de buckets S3 en AWS.
- [terraform-aws-secure-baseline](https://github.com/nozaq/terraform-aws-secure-baseline) - Configura tu cuenta de AWS con una línea base de seguridad basada en CIS Amazon Web Services Foundations.
- [terraform-aws-security-group](https://github.com/terraform-aws-modules/terraform-aws-security-group) - Crea grupos de seguridad EC2-VPC en AWS (módulo verificado).
- [terraform-aws-ssh-bastion-service](https://github.com/joshuamkite/terraform-aws-ssh-bastion-service) - Plan de Terraform para desplegar un bastión SSH como servicio sin estado en AWS.
- [terraform-aws-transit-gateway](https://github.com/terraform-aws-modules/terraform-aws-transit-gateway) - Crea recursos de Transit Gateway en AWS.
- [terraform-aws-vpc](https://github.com/terraform-aws-modules/terraform-aws-vpc) - Crea recursos VPC en AWS (módulo verificado y muy popular).
- [terraform-aws-vpn-gateway](https://github.com/terraform-aws-modules/terraform-aws-vpn-gateway) - Crea recursos de puerta de enlace VPN en AWS.
- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Colección oficial de módulos verificados de Azure, propiedad de Microsoft, que codifica las prácticas recomendadas de WAF para un despliegue de infraestructura coherente.
- [terraform-azurerm-aks](https://github.com/kjanshair/terraform-azurerm-aks) - Crea recursos AKS en Azure.
- [terraform-azurerm-iis](https://github.com/ghostinthewires/terraform-azurerm-iis-install) - Instala el servidor IIS en una instancia de VM de Azure.
- [terraform-azurerm-mysql](https://github.com/foreverXZC/terraform-azurerm-mysql) - Crea una base de datos MySQL en Azure.
- [terraform-azurerm-redis](https://github.com/rahulkhengare/terraform-azurerm-redis) - Crea Redis en Azure.
- [terraform-azurerm-sqlserver](https://github.com/metadevpro/terraform-azurerm-sqlserver-seed) - Crea una base de datos SQL Server en Azure.
- [terraform-cloudflare-maintenance](https://github.com/adinhodovic/terraform-cloudflare-maintenance) - Módulo para crear una página de mantenimiento mediante Cloudflare Workers.
- [terraform-digitalocean-droplet](https://registry.terraform.io/modules/terraform-digitalocean-modules/droplet/digitalocean/latest) - Módulo Terraform para administrar Droplets de DigitalOcean y recursos relacionados.
- [terraform-ecs-jenkins](https://github.com/shuaibiyy/terraform-ecs-jenkins) - Aprovisiona Jenkins en AWS ECS mediante Terraform.
- [terraform-gce-atlantis](https://github.com/runatlantis/terraform-gce-atlantis) - Crea configuraciones de Terraform para ejecutar [Atlantis](https://runatlantis.io) en Google Compute Engine.
- [terraform-google-project-factory](https://github.com/terraform-google-modules/terraform-google-project-factory) - Creación y configuración predefinidas de proyectos de Google Cloud Platform con Shared VPC, IAM, API, etc.
- [terraform-helm-carbon-intensity-exporter](https://github.com/fabiocicerchia/terraform-helm-carbon-intensity-exporter) - Módulo Terraform/Helm para desplegar Kubernetes Carbon Intensity Exporter.
- [terraform-helm-cloud-carbon-footprint](https://github.com/fabiocicerchia/terraform-helm-cloud-carbon-footprint) - Módulo Terraform/Helm para desplegar Cloud Carbon Footprint en Kubernetes.
- [terraform-helm-kepler](https://github.com/fabiocicerchia/terraform-helm-kepler) - Módulo Terraform para desplegar Kepler (perfilado del consumo energético de Kubernetes) mediante Helm.
- [terraform-kubestack](https://github.com/kbst/terraform-kubestack) - Kubestack es un marco de trabajo que permite a los equipos de ingeniería de plataformas de Kubernetes definir toda la pila nativa de la nube en una base de código de Terraform y evolucionar la plataforma continuamente y de forma segura mediante GitOps.
- [terraform-linode-k8s](https://registry.terraform.io/modules/linode/k8s/linode/latest) - Instala Kubernetes en instancias Linode.
- [terraform-nixos](https://github.com/nix-community/terraform-nixos) - Conjunto de módulos Terraform diseñados para desplegar NixOS.
- [terraform-static-website-s3-cloudfront](https://github.com/sergej-brazdeikis/terraform-static-website-s3-cloudfront) - Crea sitios web estáticos en AWS S3 y CloudFront a partir de variables.
- [tf_aws_bastion_s3_keys](https://github.com/terraform-community-modules/tf_aws_bastion_s3_keys) - Crea hosts bastión en AWS EC2.
- [typhoon](https://github.com/poseidon/typhoon) - Distribución de Kubernetes mínima y gratuita con Terraform.

## Registros autohospedados

- [anthology](https://github.com/erikvanbrakel/anthology) - Implementación de un registro privado de Terraform como alternativa al registro oficial.
- [boring-registry](https://github.com/boring-registry/boring-registry) - Registro privado de módulos/proveedores de Terraform con autenticación mediante clave API y compatibilidad con almacenamiento de blobs.
- [citizen](https://github.com/outsideris/citizen) - Registro privado de módulos/proveedores de Terraform.
- [nrkno/terraform-registry](https://github.com/nrkno/terraform-registry) - Registro privado de Terraform con backends de almacenamiento modulares.
- [petra](https://github.com/devoteamgcloud/petra) - Administrador de registros privados de Terraform.
- [philips-labs/terraform-registry](https://github.com/philips-labs/terraform-registry) - Registro de Terraform para servir versiones arbitrarias de proveedores de Terraform alojadas en GitHub.
- [tapir](https://github.com/PacoVK/tapir) - Registro privado de Terraform.
- [terraform-simple-registry](https://github.com/apparentlymart/terraform-simple-registry) - Implementación sencilla de los protocolos del registro de Terraform.
- [terramantle.dev](https://terramantle.dev) - Registro centrado en la visibilidad de módulos y estado para abordar la gestión de dependencias.
- [Terrareg](https://github.com/matthewjohn/terrareg) - Registro de módulos de Terraform.
- [terustry](https://github.com/veepee-oss/terustry) - Registro de proveedores de Terraform de código abierto que actúa como proxy de las versiones de GitLab o GitHub.
- [terralist](https://github.com/terralist/terralist) - Registro privado de Terraform para módulos y proveedores, administrable mediante una API REST.

## Registros gestionados

- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Iniciativa oficial de Microsoft que ofrece módulos de Terraform (y Bicep) verificados y conformes a estándares para recursos y patrones arquitectónicos de Azure, alineados con Well-Architected Framework.
- [cloudsmith](https://docs.cloudsmith.com/formats/terraform-modules-repository) - Servicio de alojamiento de paquetes gestionado para clientes internos y externos.
- [Terramantle](https://terramantle.dev) - Registro privado de Terraform/OpenTofu con información detallada sobre módulos, mapeo de dependencias y visibilidad del estado.

## Proveedores

### Proveedores mantenidos por Hashicorp

- [terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) - Proveedor para Amazon Web Services.
- [terraform-provider-azurerm](https://github.com/hashicorp/terraform-provider-azurerm) - Proveedor para Azure.
- [terraform-provider-docker](https://github.com/hashicorp/terraform-provider-docker) - Proveedor para Docker.
- [terraform-provider-google](https://github.com/hashicorp/terraform-provider-google) - Proveedor para Google Cloud Platform.
- [terraform-provider-helm](https://github.com/hashicorp/terraform-provider-helm) - Proveedor para Helm.
- [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) - Proveedor para Kubernetes.
- [terraform-provider-vsphere](https://github.com/vmware/terraform-provider-vsphere) - Proveedor para VMware vSphere.

### Proveedores mantenidos por fabricantes

- [terraform-provider-alicloud](https://github.com/aliyun/terraform-provider-alicloud) - Proveedor para Alibaba Cloud.
- [terraform-provider-artifactory](https://github.com/jfrog/terraform-provider-artifactory) - Proveedor para [JFrog Artifactory](https://jfrog.com/artifactory/).
- [terraform-provider-atlas](https://github.com/ariga/terraform-provider-atlas) - Proveedor para [Atlas](https://atlasgo.io/).
- [terraform-provider-azapi](https://github.com/Azure/terraform-provider-azapi) - Proveedor para la API REST de Azure Resource Manager.
- [terraform-provider-azuredevops](https://github.com/microsoft/terraform-provider-azuredevops) - Proveedor para Azure DevOps (VSTS).
- [terraform-provider-buildkite](https://github.com/buildkite/terraform-provider-buildkite) - Proveedor para Buildkite.
- [terraform-provider-checkly](https://github.com/checkly/terraform-provider-checkly) - Administra recursos de [Checkly](https://www.checklyhq.com) para la monitorización de API y E2E.
- [terraform-provider-coder](https://github.com/coder/terraform-provider-coder) - Proveedor para [Coder](https://coder.com).
- [terraform-provider-confluent](https://github.com/confluentinc/terraform-provider-confluent) - Proveedor para Confluent.
- [terraform-provider-datadog](https://github.com/DataDog/terraform-provider-datadog) - Proveedor para Datadog.
- [terraform-provider-devhelm](https://github.com/devhelmhq/terraform-provider-devhelm) - Proveedor para la monitorización de disponibilidad de [DevHelm](https://devhelm.io): administra monitores, canales de alertas y páginas de estado como código.
- [terraform-provider-digitalocean](https://github.com/digitalocean/terraform-provider-digitalocean) - Proveedor para DigitalOcean.
- [terraform-provider-dominos](https://github.com/nat-henderson/terraform-provider-dominos) - Proveedor para Dominos Pizza.
- [terraform-provider-elasticstack](https://github.com/elastic/terraform-provider-elasticstack) - Proveedor para Elasticsearch y Kibana.
- [terraform-provider-env0](https://github.com/env0/terraform-provider-env0) - Proveedor para [env0](https://www.env0.com/).
- [terraform-provider-featureflip](https://github.com/canopy-labs/terraform-provider-featureflip) - Proveedor para las marcas de funciones de [Featureflip](https://featureflip.io/): proyectos, entornos, marcas, reglas de segmentación, segmentos y claves SDK.
- [terraform-provider-github](https://github.com/integrations/terraform-provider-github) - Proveedor para GitHub.
- [terraform-provider-gitlab](https://github.com/gitlabhq/terraform-provider-gitlab) - Proveedor para GitLab.
- [terraform-provider-graphql](https://github.com/sullivtr/terraform-provider-graphql) - Proveedor para consultas y mutaciones de GraphQL.
- [terraform-provider-hcloud](https://github.com/hetznercloud/terraform-provider-hcloud) - Proveedor para Hetzner Cloud.
- [terraform-provider-healthchecksio](https://github.com/kristofferahl/terraform-provider-healthchecksio) - Proveedor para administrar recursos de healthchecks.io.
- [terraform-provider-heroku](https://github.com/heroku/terraform-provider-heroku) - Proveedor para Heroku.
- [terraform-provider-ibm](https://github.com/IBM-Cloud/terraform-provider-ibm) - Proveedor para IBM Cloud.
- [terraform-provider-iterative](https://github.com/iterative/terraform-provider-iterative) - Complemento de Terraform diseñado teniendo en cuenta el aprendizaje automático.
- [terraform-provider-k8s](https://github.com/banzaicloud/terraform-provider-k8s) - Proveedor sencillo de Kubernetes, compatible con cualquier manifiesto.
- [terraform-provider-keycloak](https://github.com/keycloak/terraform-provider-keycloak) - Proveedor para administrar la configuración de tu servidor proveedor de identidad [Keycloak](https://www.keycloak.org/).
- [terraform-provider-linode](https://github.com/btobolaski/terraform-provider-linode) - Proveedor para Linode.
- [terraform-provider-nxip](https://github.com/uk-sw/terraform-provider-nxip) - Proveedor para [nxip](https://nx-ip.com), IPAM con asignación CIDR basada en grupos para la nube y entornos locales.
- [terraform-provider-openstack](https://github.com/terraform-provider-openstack/terraform-provider-openstack) - Complemento para OpenStack.
- [terraform-provider-panos](https://github.com/PaloAltoNetworks/terraform-provider-panos) - Proveedor para los [firewalls de próxima generación de Palo Alto Networks](https://www.paloaltonetworks.com/network-security).
- [terraform-provider-phare](https://github.com/phare/terraform-provider-phare) - Proveedor de Terraform para [Phare](https://phare.io).
- [terraform-provider-planetscale](https://github.com/planetscale/terraform-provider-planetscale) - Proveedor de Terraform para [PlanetScale](https://planetscale.com) (Vitess y Postgres).
- [terraform-provider-qovery](https://github.com/Qovery/terraform-provider-qovery) - Proveedor para [Qovery](https://www.qovery.com/): administra despliegues de Kubernetes, entornos, aplicaciones, bases de datos, gráficos Helm y servicios Terraform en AWS, GCP, Azure y Scaleway.
- [terraform-provider-pingdom](https://github.com/russellcardullo/terraform-provider-pingdom) - Proveedor para administrar recursos de Pingdom.
- [terraform-provider-rancher2](https://github.com/rancher/terraform-provider-rancher2) - Proveedor para Rancher v2.
- [terraform-provider-scalr](https://github.com/Scalr/terraform-provider-scalr) - Proveedor para [Scalr](https://www.scalr.com/).
- [terraform-provider-secrethub](https://github.com/secrethub/terraform-provider-secrethub) - Proveedor para SecretHub.
- [terraform-provider-sigsci](https://github.com/signalsciences/terraform-provider-sigsci) - Proveedor para Signal Sciences.
- [terraform-provider-snowflake](https://github.com/snowflakedb/terraform-provider-snowflake) - Proveedor para el almacén de datos Snowflake.
- [terraform-provider-spinnaker](https://github.com/armory-io/terraform-provider-spinnaker) - Proveedor para [Spinnaker](https://spinnaker.io/).
- [terraform-provider-spotinst](https://github.com/spotinst/terraform-provider-spotinst) - Proveedor para spotinst.
- [terraform-provider-stripe](https://github.com/franckverrot/terraform-provider-stripe) - Proveedor para Stripe.
- [terraform-provider-ucloud](https://github.com/ucloud/terraform-provider-ucloud) - Proveedor para administrar recursos de UCloud.
- [terraform-provider-uptimerobot](https://github.com/louy/terraform-provider-uptimerobot) - Proveedor para administrar recursos de uptimerobot.
- [terraform-provider-vaulted](https://github.com/sumup-oss/terraform-provider-vaulted) - Secretos cifrados de HashiCorp Vault mediante Terraform, que se pueden almacenar en un sistema de gestión de código fuente como Git.
- [terraform-provider-scp](https://github.com/splunk/terraform-provider-scp) - Proveedor para Splunk Cloud Platform.

### Proveedores de la comunidad

- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Proveedor de Terraform para Coolify.
- [terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) - Proveedor de Terraform para Docker.
- [terraform-provider-minio](https://github.com/aminueza/terraform-provider-minio) - Proveedor de Terraform para administrar buckets S3 de MinIO y usuarios IAM.
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Proveedor de Terraform para Multipass.
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - Administra OpenRouter como código: espacios de trabajo, barreras de protección, claves API con límite de gasto y miembros de la organización. Terraform + OpenTofu.
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - Proveedor de Terraform para estimaciones de costes de Azure y límites de costes.
- [terraform-provider-proxmox](https://github.com/Telmate/terraform-provider-proxmox) - Proveedor de Terraform para Proxmox.
- [terraform-provider-seerr](https://github.com/Josh-Archer/terraform-provider-seerr) - Proveedor de Terraform para Seerr (Overseerr/Jellyseerr).
- [terraform-provider-terracurl](https://github.com/devops-rob/terraform-provider-terracurl) - Proveedor para realizar llamadas API administradas y no administradas al endpoint de destino.
- [terraform-provider-uname](https://github.com/julienlevasseur/terraform-provider-uname) - Proveedor Uname para Terraform.
- [terraform-provider-value](https://github.com/pseudo-dynamic/terraform-provider-value) - Proveedor Value para Terraform.
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - Proveedor de Terraform para Multipass.
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - Administra OpenRouter como código: espacios de trabajo, barreras de protección, claves API con límite de gasto y miembros de la organización. Terraform + OpenTofu.
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - Proveedor de Terraform para estimaciones de costes de Azure y límites de costes.
- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Proveedor de Terraform para Coolify.
- [terraform-provider-appstore](https://github.com/elevenode/terraform-provider-appstore) - Proveedor de Terraform para Apple App Store Connect.
- [terraform-provider-expo](https://github.com/elevenode/terraform-provider-expo) - Proveedor de Terraform para Expo Application Services (EAS).
- [terraform-provider-paddle](https://github.com/vivantel/terraform-provider-paddle) - Proveedor de Terraform para recursos del catálogo de Paddle Billing, acciones del ciclo de vida y datos de búsqueda.
- [terraform-provider-seekrit](https://github.com/seekritdev/terraform-provider-seekrit) - Administra aplicaciones seekrit, entornos, grupos, tokens de servicio, concesiones de claves y secretos. Los argumentos de solo escritura y los recursos efímeros mantienen los valores secretos fuera del estado.

## Pruebas

- [clarity](https://github.com/xchapter7x/clarity) - Marco declarativo de pruebas unitarias para Terraform.
- [kitchen-terraform](https://github.com/newcontext-oss/kitchen-terraform) - Proporciona complementos de Test Kitchen que permiten converger una configuración Terraform y verificar el estado resultante con controles InSpec.
- [rspec-terraform](https://github.com/bsnape/rspec-terraform) - Pruebas RSpec para tus módulos de Terraform.
- [terraform_validate](https://github.com/elmundio87/terraform_validate) - Ayuda a aplicar estándares definidos por el usuario en Terraform.
- [terraform-compliance](https://github.com/terraform-compliance/cli) - Pruebas BDD para archivos de Terraform.
- [terratest](https://github.com/gruntwork-io/terratest) - Terratest es una biblioteca de Go que facilita la escritura de pruebas automatizadas para tu código de infraestructura.

## Herramientas

- [AIaC](https://github.com/gofireflyio/aiac) - Generador de infraestructura como código mediante inteligencia artificial.
- [AirIAM](https://github.com/bridgecrewio/AirIAM) - Herramienta para AWS IAM que aplica el principio de mínimo privilegio al marco de ejecución de Terraform.
- [asdf](https://github.com/asdf-community/asdf-hashicorp) - Complemento HashiCorp para el administrador de versiones [asdf](https://github.com/asdf-vm/asdf).
- [astro](https://github.com/uber/astro/) - Astro permite administrar varias ejecuciones de Terraform con un solo comando.
- [atlantis](https://github.com/runatlantis/atlantis) - Flujo de trabajo unificado para colaborar en Terraform mediante GitHub.
- [atmos](https://github.com/cloudposse/atmos) - Herramienta universal que convierte YAML fusionado en profundidad en entradas de módulos.
- [aws2tf](https://github.com/aws-samples/aws2tf) - Automatiza la importación de recursos AWS existentes a Terraform y genera código HCL.
- [aztfexport](https://github.com/Azure/aztfexport) - Herramienta para incorporar recursos Azure existentes a la gestión de Terraform.
- [AzureNamer](https://azurenamingconventions.com/) - Genera nombres conformes con CAF para más de 200 tipos de recursos de Azure y los exporta como valores locales de Terraform, con validación en tiempo real.
- [balcony](https://oguzhan-yilmaz.github.io/balcony/) - Herramienta CLI para leer fácilmente la API de AWS. También genera bloques de importación y código de recursos Terraform.
- [bare-devcontainer/templates](https://github.com/bare-devcontainer/templates/tree/main/src/terraform) - Contenedor de desarrollo de Terraform centrado en la seguridad, con terraform-ls y caché que facilita las reconstrucciones. La imagen base está en [bare-devcontainer/images](https://github.com/bare-devcontainer/images/tree/main/terraform).
- [blast radius](https://github.com/28mm/blast-radius) - Visualizaciones interactivas de grafos de dependencias de Terraform.
- [cf-terraforming](https://github.com/cloudflare/cf-terraforming) - Utilidad CLI para facilitar la transformación en Terraform de tus recursos Cloudflare existentes.
- [cfnctl](https://github.com/rogerwelin/cfnctl) - Cfnctl lleva la experiencia de la CLI de Terraform a AWS CloudFormation.
- [Checkov](https://github.com/bridgecrewio/checkov/) - Herramienta de análisis estático para terraform>=0.12.
- [cloud-audit](https://github.com/gebalamariusz/cloud-audit) - CLI de auditoría de seguridad de AWS con motor de corrección que genera código Terraform para arreglar configuraciones incorrectas.
- [CloudBurn](https://github.com/towardsthecloud/cloudburn) - Comprobaciones de políticas de costes de AWS para Terraform y CloudFormation en CI y en cuentas AWS activas.
- [Coder](https://coder.com/) - Coder aprovisiona entornos de desarrollo de software en tu infraestructura mediante Terraform.
- [coretech/terrafile](https://github.com/coretech/terrafile) - Administra sistemáticamente módulos externos de GitHub para Terraform (escrito en Go).
- [Cynative](https://github.com/cynative/cynative) - Marco de agentes de seguridad de código abierto para revisar configuraciones Terraform e investigar infraestructura activa mediante API de nube de solo lectura.
- [Datadef](https://datadef.io/repo-to-diagram) - Genera diagramas de arquitectura y documentación a partir de un repositorio Terraform: analiza archivos `.tf` sin ejecutar `terraform init` ni leer el estado, representa módulos como zonas con recuentos por entorno y vuelve a sincronizar a diario.
- [demonolith](https://github.com/schrieksoft/demonolith) - Divide proyectos monolíticos de Terraform con `demonolith refactor` (para mover código) y `demonolith migrate` (para migrarlos a archivos .tfstate más pequeños).
- [driftctl](https://github.com/snyk/driftctl) - Detecta, rastrea y alerta sobre desviaciones de infraestructura.
- [drifthound](https://github.com/drifthoundhq/drifthound) - Detección continua de desviaciones de infraestructura con seguimiento histórico y notificaciones.
- [dxw/terrafile](https://github.com/dxw/terrafile) - Administra sistemáticamente módulos externos de GitHub para Terraform (escrito en Ruby).
- [flora](https://github.com/ketchoop/flora) - Administrador de versiones de Terraform.
- [fogg](https://github.com/chanzuckerberg/fogg) - Herramienta para eliminar tareas tediosas de la gestión de repositorios Terraform.
- [former2](https://github.com/iann0036/former2) - Genera configuración de Terraform a partir de los recursos existentes en tu cuenta AWS.
- [fuzzy-terraform-rm](https://github.com/paololazzari/fuzzy-terraform-rm) - Herramienta CLI con buscador difuso para eliminar recursos del estado de Terraform.
- [gaia](https://github.com/gaia-app/gaia) - Gaia es una interfaz 🌍 de Terraform para tus módulos e infraestructura de autoservicio 👨‍💻.
- [hcl2json](https://github.com/tmccombs/hcl2json) - Convierte HCL2 a JSON.
- [hcldump](https://github.com/magodo/hcldump) - Muestra el árbol de sintaxis abstracta de HCL (v2).
- [hcledit (mercari)](https://github.com/mercari/hcledit) - Paquete de Go para editar configuraciones HCL.
- [hcledit (minamijoyo)](https://github.com/minamijoyo/hcledit) - Editor de línea de comandos para HCL.
- [hclgrep](https://github.com/magodo/hclgrep) - Búsqueda basada en sintaxis para HCL (v2).
- [hq](https://github.com/miller-time/hq) - Procesador HCL de línea de comandos.
- [iam-policy-json-to-terraform](https://github.com/flosell/iam-policy-json-to-terraform) - Herramienta pequeña para convertir una política IAM JSON en un aws_iam_policy_document de Terraform.
- [Infracost](https://github.com/infracost/infracost) - Estimaciones de costes de nube para Terraform en tu CLI y solicitudes de incorporación de cambios.
- [inframap](https://github.com/cycloidio/inframap) - Lee tfstate o HCL para generar un grafo por proveedor que muestre solo los recursos más importantes o pertinentes.
- [InfraScan](https://infrascan.soldevelo.com) - Auditor avanzado de infraestructura para analizar costes y seguridad de Terraform, AWS y Kubernetes.
- [InfraSketch](https://infrasketch.cloud) - Herramienta gratuita en el navegador para visualizar HCL de Terraform y Docker Compose como diagramas de arquitectura. Compatible con AWS y Azure. Sin registro ni credenciales.
- [json2hcl](https://github.com/kvz/json2hcl) - Convierte JSON a HCL y viceversa.
- [k2tf](https://github.com/sl1pm4t/k2tf) - Convertidor de YAML de Kubernetes a HCL de Terraform.
- [Kapitan](https://github.com/kapicorp/kapitan) - Genera JSON de Terraform/OpenTofu y otras configuraciones de infraestructura a partir de plantillas basadas en inventario.
- [KICS](https://github.com/Checkmarx/kics) - Analiza proyectos IaC en busca de vulnerabilidades, problemas de cumplimiento y configuraciones incorrectas. Compatible con Terraform, manifiestos Kubernetes, Dockerfiles, plantillas AWS CloudFormation y playbooks Ansible.
- [layerform](https://github.com/briefercloud/layerform) - Ayuda a crear pilas de entornos reutilizables con archivos .tf sencillos. Ideal para varios entornos de «staging».
- [library.tf](https://library.tf) - Library.tf ofrece la información de los registros Terraform y OpenTofu y perspectivas para tomar decisiones. Encuentra rápidamente módulos o proveedores compatibles, mantenidos y sin errores.
- [modules.tf-lambda](https://github.com/antonbabenko/modules.tf-lambda) - Generador de infraestructura como código a partir de diagramas de [Cloudcraft.co](https://cloudcraft.co) para Terraform.
- [para](https://github.com/paraterraform/para) - Gestor de complementos de terceros y «navaja suiza» para Terraform/Terragrunt: una herramienta para facilitar todos los flujos de trabajo.
- [pike](https://github.com/jamesWoolfenden/pike) - Pike calcula los permisos o la política IAM necesarios para compilar tu Terraform.
- [pipeform](https://github.com/magodo/pipeform) - Interfaz TUI de ejecución de Terraform.
- [platform-skills](https://github.com/nitinjain999/platform-skills) - Manual asistido por IA para Terraform: revisión de privilegios mínimos IAM, análisis del radio de impacto, efectos en el estado, restricciones de proveedores y planificación de reversiones. Complemento para Claude, Codex, Cursor y Copilot.
- [pluralith](https://www.pluralith.com/) - Visualización del estado de Terraform y generación automatizada de documentación de infraestructura.
- [pre-commit-terraform](https://github.com/antonbabenko/pre-commit-terraform) - Hooks Git pre-commit para Terraform y Terragrunt: formato, validación, actualización de documentación, comprobaciones de seguridad, estimación de costes y más.
- [pretf](https://github.com/raymondbutcher/pretf) - Wrapper integrado de Terraform que genera configuración con Python. Consulta la [documentación de pretf](https://pretf.readthedocs.io/en/latest/).
- [prettyplan for TF 0.12+](https://github.com/cloudandthings/terraform-pretty-plan) - Prettyplan para TF 0.12+ ([disponible en línea](https://cloudandthings.github.io/terraform-pretty-plan/)) facilita la visualización de planes grandes de Terraform.
- [prettyplan](https://github.com/chrislewisdev/prettyplan) - Prettyplan ([disponible en línea](https://chrislewisdev.github.io/prettyplan/)) facilita la visualización de planes grandes de Terraform.
- [pug](https://github.com/leg100/pug) - Interfaz de terminal para usuarios avanzados de Terraform.
- [pytest-terraform](https://github.com/cloud-custodian/pytest-terraform) - Complemento pytest para Terraform con fixtures y reproducción sin conexión.
- [python-terrafile](https://github.com/claranet/python-terrafile) - Administra sistemáticamente módulos externos de GitHub para Terraform.
- [regula](https://github.com/fugue/regula) - Evalúa código de infraestructura Terraform antes del despliegue para detectar errores de configuración de seguridad y vulneraciones de cumplimiento en AWS, Azure y Google Cloud.
- [redc](https://github.com/wgpsec/redc) - Herramienta de automatización de infraestructura de equipos rojos basada en Terraform, compatible con despliegues multinube (Alibaba Cloud, Tencent Cloud, AWS, etc.) y creación, configuración y destrucción de entornos con un solo comando.
- [renovate-config](https://github.com/SpotOnInc/renovate-config) - Ajustes preestablecidos compartibles para Renovatebot, especialmente útiles para profesionales de DevOps.
- [Riftmap](https://riftmap.dev) - Motor de dependencias e impacto de cambios entre repositorios para analizar infraestructura en Terraform, Docker, Helm y más, y visualizar dependencias y efectos de cambios.
- [rover](https://github.com/im2nguyen/rover) - Explorador interactivo del estado y la configuración de Terraform.
- [ruby-terraform](https://github.com/infrablocks/ruby_terraform) - Wrapper sencillo de Ruby para ejecutar comandos Terraform.
- [sato](https://github.com/JamesWoolfenden/sato) - Sato ayuda a convertir CloudFormation heredado a Terraform.
- [scenery](https://github.com/dmlittle/scenery) - Otro embellecedor de la salida del plan de Terraform.
- [scratchrelaxtv](https://github.com/YakDriver/scratchrelaxtv) - Herramienta sencilla de Python para desarrollo de módulos: extrae variables de `main.tf` para generar `variables.tf` y crea un esqueleto de uso del módulo.
- [serverless.tf - Doing serverless with Terraform](https://serverless.tf/) - Marco de código abierto con opiniones definidas para desarrollar, compilar, desplegar y proteger aplicaciones e infraestructuras sin servidor en AWS mediante Terraform. [Más información](https://github.com/antonbabenko/serverless.tf).
- [Shieldly](https://github.com/shieldly-io/cli) - Analiza con IA la seguridad de políticas IAM y CloudFormation generadas por Terraform, explica permisos arriesgados y cómo corregirlos. Nivel gratuito, CLI y GitHub Action.
- [Shisho](https://github.com/flatt-security/shisho) - Analizador estático ligero para Terraform.
- [Speakeasy](https://www.speakeasy.com/) - Genera un proveedor Terraform a partir de una especificación OpenAPI.
- [stacks](https://github.com/cisco-open/stacks) - Stacks, el preprocesador de código Terraform.
- [SyncVey](https://github.com/MR-TABATA/SyncVey) - Registro autohospedado de activos AWS con detección de desviaciones a nivel de atributo entre tfstate y AWS activo, análisis programados y alertas de fin de vida útil del middleware.
- [tads-boilerplate](https://github.com/Thomvaill/tads-boilerplate) - La potencia de Ansible y Terraform + la sencillez de Docker Swarm = infraestructura como código y prácticas recomendadas de DevOps.
- [tau](https://github.com/avinor/tau) - Wrapper ligero de Terraform para administrar varios despliegues, dependencias y secretos.
- [tenv](https://github.com/tofuutils/tenv) - Administrador de versiones de OpenTofu/Terraform/Terragrunt.
- [terraboard](https://github.com/camptocamp/terraboard) - Panel web para inspeccionar estados de Terraform.
- [terraboot](https://github.com/MastodonC/terraboot) - DSL para generar una configuración Terraform y ejecutarla.
- [terracognita](https://github.com/cycloidio/terracognita) - Lee proveedores de nube existentes (Terraform inverso) y genera infraestructura como código en una configuración Terraform.
- [terracost](https://github.com/cycloidio/terracost) - Estimación de costes de nube para Terraform en tu CLI.
- [terracove](https://elementtech.github.io/terracove/) - Prueba recursivamente un árbol de directorios para detectar diferencias y cobertura Terraform.
- [TerraDepot](https://github.com/derBroBro/TerraDepot) - Repositorio de estados Terraform basado en el backend remoto HTTP predeterminado. Permite administrar centralmente tfstates en AWS S3.
- [TerraDrift](https://github.com/niravraychura/terradrift) - CLI autohospedada para detectar desviaciones de Terraform/OpenTofu en CI y cron (basada en plan; no inventaría recursos no administrados).
- [terradozer](https://github.com/chenrui333/terradozer) - Destruye Terraform sin archivos de configuración.
- [terraeasy](https://github.com/jaceq/terraeasy) - Wrapper sencillo para Terraform.
- [terraform-ai-skills](https://github.com/anmolnagpal/terraform-ai-skills) - Habilidad con IA para GitHub Copilot, Claude y ChatGPT que automatiza la gestión masiva de módulos Terraform: actualizaciones de proveedores, estandarización de flujos de trabajo y lanzamientos en 10–200+ repositorios de AWS, GCP, Azure y DigitalOcean.
- [terraform-aws-clickops-notifier](https://github.com/cloudandthings/terraform-aws-clickops-notifier) - Recibe notificaciones cuando se realizan acciones en la consola de AWS.
- [terraform-bundle](https://github.com/hashicorp/terraform/tree/main/tools/terraform-bundle) - Crea paquetes con un binario Terraform y binarios de proveedores. Útil para CI y Terraform Enterprise en entornos aislados de la red.
- [terraform-cdk](https://github.com/hashicorp/terraform-cdk) - CDK (Cloud Development Kit) para Terraform permite definir infraestructura de nube con lenguajes conocidos y aprovisionarla mediante HashiCorp Terraform.
- [terraform-cleaner](https://github.com/sylwit/terraform-cleaner) - Utilidad diminuta que detecta variables sin usar en módulos Terraform.
- [terraform-credentials-vault](https://github.com/oulman/terraform-credentials-vault) - Complemento «credentials helper» para proporcionar credenciales de servicios Terraform (registros privados de módulos, Terraform Cloud, etc.) mediante variables de entorno.
- [terraform-diff](https://github.com/contentful-labs/terraform-diff) - ¡Identifica dónde debes ejecutar Terraform plan y apply!
- [terraform-docs](https://github.com/terraform-docs/terraform-docs) - Utilidad rápida para generar documentación a partir de módulos Terraform.
- [terraform-graph-beautifier](https://github.com/pcasteran/terraform-graph-beautifier) - Convierte la salida poco práctica de terraform graph en algo más significativo y explicativo.
- [terraform-iam-policy-validator](https://github.com/awslabs/terraform-iam-policy-validator) - CLI que valida políticas AWS IAM en plantillas Terraform según las prácticas recomendadas de AWS IAM.
- [terraform-landscape](https://github.com/coinbase/terraform-landscape) - *(solo 0.11 y anteriores)* Mejora la salida del plan Terraform para facilitar su lectura y comprensión.
- [terraform-operator](https://github.com/GalleyBytes/terraform-operator) - CRD de Kubernetes para gestionar operaciones Terraform.
- [terraform-plan-parser](https://github.com/lifeomic/terraform-plan-parser) - Utilidad CLI y API JavaScript para analizar la salida estándar de `terraform plan` y convertirla a JSON.
- [terraform-provisioner](https://github.com/shuaibiyy/terraform-provisioner) - Herramienta para administrar varios aprovisionamientos de los mismos scripts Terraform.
- [terraform-rake-tasks](https://github.com/gina-alaska/terraform-rake-tasks) - Tareas Rake compartidas para gestionar planes Terraform.
- [terraform-repl](https://github.com/paololazzari/terraform-repl) - Wrapper de la consola Terraform para una mejor experiencia interactiva.
- [Terraform-Visual](https://github.com/hieven/terraform-visual) - Herramienta sencilla pero potente para visualizar planes Terraform.
- [terravision](https://github.com/patrickchugh/terravision) - Genera diagramas profesionales de arquitectura de nube a partir de Terraform con iconos y estándares oficiales de AWS/Azure/GCP. Se ejecuta íntegramente en el cliente e integra CI/CD.
- [terraform.py](https://github.com/mantl/terraform.py) - Script de inventario dinámico de Ansible para analizar archivos de estado Terraform.
- [terraformer](https://github.com/chenrui333/terraformer) - CLI para generar archivos Terraform a partir de infraestructura existente. Infraestructura como código. Compatible con muchos proveedores.
- [terraforming](https://github.com/dtan4/terraforming) - Exporta recursos AWS existentes al formato Terraform (tf, tfstate). Similar a `terraformer`.
- [terraformize](https://github.com/naorlivne/terraformize) - Aplica y destruye módulos Terraform mediante un endpoint API REST sencillo.
- [terraformsh](https://github.com/pwillis-els/terraformsh) - Wrapper Bash para facilitar la experiencia de CLI y configuraciones jerárquicas DRY.
- [terragrunt-atlantis-config](https://github.com/transcend-io/terragrunt-atlantis-config) - Genera configuración Atlantis para proyectos Terragrunt.
- [terragrunt](https://github.com/gruntwork-io/terragrunt) - Wrapper ligero para Terraform con herramientas para mantener DRY las configuraciones, trabajar con varios módulos y administrar el estado remoto.
- [terrahelp](https://github.com/opencredo/terrahelp) - Utilidad CLI que proporciona funciones complementarias útiles al trabajar con Terraform.
- [terrahub](https://github.com/tfxor/terrahub) - Herramienta de automatización y orquestación Terraform, integrada con console.terrahub.io, una GUI empresarial que muestra ejecuciones en tiempo real y ofrece auditoría e informes históricos.
- [terramagic](https://github.com/miltlima/terramagic) - Asistente en Python para crear carpetas y archivos Terraform automáticamente.
- [terramate](https://github.com/terramate-io/terramate) - Herramienta para administrar varias pilas Terraform, con detección de cambios y generación de código.
- [terrap-cli](https://github.com/sirrend/terrap-cli) - Terrap: herramienta CLI que analiza tu infraestructura e identifica cambios necesarios.
- [terrars](https://github.com/andrewbaxter/terrars) - Herramienta para crear pilas Terraform en Rust. Alternativa al CDK.
- [terrascan](https://github.com/tenable/terrascan) - Colección de pruebas de seguridad y prácticas recomendadas para análisis estático de plantillas Terraform.
- [terrascope](https://github.com/spilliams/terrascope) - Orquestador de compilación para monorrepositorios Terraform.
- [terrashine](https://isawan.github.io/terrashine/) - Implementación de un mirror1 de proveedores Terraform que almacena automáticamente en caché las dependencias solicitadas.
- [terraspace](https://terraspace.cloud) - El marco de trabajo de Terraform.
- [terrastate](https://github.com/rohinivsenthil/terrastate) - Extensión de Visual Studio Code para supervisar, desplegar y destruir recursos Terraform en tu espacio de trabajo.
- [terratag](https://github.com/env0/terratag) - Herramienta CLI para crear y mantener automáticamente etiquetas en recursos Terraform de AWS, Azure y GCP.
- [tf-init-booster](https://github.com/hayorov/terraform-init-booster) - Rutina previa a Terraform que acelera la descarga de módulos para planos voluminosos.
- [tf-profile](https://github.com/datarootsio/tf-profile/) - Perfilador de ejecuciones Terraform. Genera estadísticas globales, por recurso o visualizaciones.
- [tf-summarize](https://github.com/dineshba/tf-summarize) - Utilidad CLI para mostrar el resumen del plan Terraform.
- [tf-why](https://github.com/Raj-glitch-max/tf.why) - CLI que atribuye desviaciones Terraform al actor AWS que las causó, mediante consultas a CloudTrail.
- [tfaction](https://github.com/suzuki-shunsuke/tfaction) - Colección de GitHub Actions para flujos de trabajo Terraform predefinidos.
- [tfautomv](https://github.com/busser/tfautomv) - Genera automáticamente bloques `moved` para facilitar la refactorización.
- [tfcmt](https://github.com/suzuki-shunsuke/tfcmt) - CLI para notificar el resultado de plan y apply como comentario en una solicitud de incorporación de cambios.
- [tfedit](https://github.com/minamijoyo/tfedit) - Herramienta de refactorización para Terraform.
- [tfenv](https://github.com/tfutils/tfenv) - Administrador de versiones Terraform inspirado en rbenv.
- [tfgen](https://github.com/0xDones/tfgen) - Generador de código Terraform para mantener una base coherente y DRY.
- [tfgpt](https://github.com/flavius-dinu/tfgpt) - CLI que integra Terraform con GPT-3.5 Turbo de OpenAI para explicar comandos y conceptos de Terraform.
- [tfimport](https://github.com/coolapso/tfimport) - CLI para automatizar la importación de infraestructura existente a tfstate.
- [tfjson](https://github.com/palantir/tfjson) - Utilidad para leer un archivo de plan Terraform y volcarlo en JSON.
- [tfk8s](https://github.com/jrhouston/tfk8s) - Herramienta para convertir manifiestos YAML de Kubernetes a HCL de Terraform.
- [tflint](https://github.com/terraform-linters/tflint) - Linter Terraform para detectar errores que `terraform plan` no puede detectar.
- [tfmake](https://github.com/tfmake/tfmake) - Automatiza Terraform con la potencia de make.
- [tfmask](https://github.com/cloudposse-archives/tfmask) - Utilidad Terraform para ocultar datos seleccionados de la salida de `terraform plan` y `terraform apply`.
- [tfmigrate](https://github.com/minamijoyo/tfmigrate) - Herramienta de migración del estado Terraform para GitOps.
- [tfmigrator](https://github.com/tfmigrator/cli) - Biblioteca Go y CLI para migrar configuración y estado Terraform.
- [tfmodcache](https://github.com/Rezarys/tfmodcache) - Caché local y compartida para módulos Terraform y OpenTofu; `terraform init` deja de volver a descargar módulos que ya tiene. Soy el autor.
- [tfmv](https://github.com/suzuki-shunsuke/tfmv) - Renombra recursos Terraform y genera bloques moved.
- [tfocus](https://github.com/nwiizo/tfocus) - Herramienta interactiva para seleccionar y ejecutar plan/apply de Terraform en recursos específicos. Es una «herramienta de emergencia», no para uso diario.
- [tfprovidercheck](https://github.com/suzuki-shunsuke/tfprovidercheck) - CLI para impedir la ejecución de proveedores Terraform maliciosos.
- [tfproviderlint](https://github.com/bflad/tfproviderlint) - Herramienta de lint para proveedores Terraform.
- [tfrepl](https://github.com/ysoftwareab/tfrepl) - REPL Terraform con experiencia de shell completa. Basado en Readline. Sin dependencias. Guarda cambios de configuración e historial.
- [tfreveal](https://github.com/breml/tfreveal) - Utilidad Terraform para mostrar planes con todos los valores secretos (sensibles) revelados.
- [tfscaffold](https://github.com/tfutils/tfscaffold) - Marco para controlar infraestructura AWS administrada por Terraform con varios entornos y componentes.
- [tfschema](https://github.com/minamijoyo/tfschema) - Inspector de esquemas para proveedores Terraform.
- [tfsec](https://github.com/aquasecurity/tfsec) - Análisis estático Terraform compatible con terraform <0.12 y >=0.12 e integrado directamente con el analizador HCL para mejores resultados.
- [tfsort](https://github.com/AlexNabokikh/tfsort) - CLI para ordenar variables y salidas Terraform.
- [tftarget](https://github.com/future-architect/tftarget) - CLI para ejecutar interactivamente `terraform xxx -target={...}`.
- [tftree](https://github.com/busser/tftree) - Muestra en la terminal la pila de llamadas de módulos Terraform.
- [tftui](https://github.com/idoavrah/terraform-tui) - Interfaz textual para el estado Terraform.
- [tfupdate](https://github.com/minamijoyo/tfupdate) - Actualiza las restricciones de versión en configuraciones Terraform.
- [tfvar](https://github.com/shihanng/tfvar) - Analiza configuraciones o módulos Terraform y extrae variables en el formato elegido (tfvar, variables de entorno, etc.) para editarlas.
- [tfvault](https://github.com/tedilabs/tfvault) - Asistente universal de credenciales Terraform con backends de secretos conectables (llavero del sistema operativo, pass/gopass, variables de entorno) y aislamiento de cuentas por perfil.
- [tfvaultenv](https://github.com/oulman/tfvaultenv) - Lee secretos de HashiCorp Vault y genera variables de entorno para varios proveedores Terraform.
- [tfwrapper](https://github.com/manheim/tfwrapper) - Gem Ruby que proporciona tareas rake para ejecutar Hashicorp Terraform de forma sensata.
- [tfmcp](https://github.com/nwiizo/tfmcp) - CLI para interactuar con Terraform mediante Model Context Protocol (MCP), para que asistentes de IA como Claude administren y operen entornos Terraform.
- [tgf](https://github.com/coveooss/tgf) - Interfaz Terragrunt para ejecutar Terragrunt/Terraform mediante Docker.
- [threatcl](https://github.com/threatcl/threatcl) - Documenta modelos de amenazas con HCL.
- [tofuenv](https://github.com/tofuutils/tofuenv) - Administrador de versiones OpenTofu inspirado en tfenv.
- [tpm](https://github.com/Madh93/tpm) - Administrador de paquetes para proveedores Terraform.
- [travelgrunt](https://github.com/ivanilves/travelgrunt) - Navega por mono/repositorios sin cansarte.
- [trupositive](https://github.com/trupositive-ai/trupositive) - Wrapper sin configuración que inyecta metadatos Git (SHA de confirmación, rama y repositorio) en todos los recursos administrados por Terraform.
- [validIaC](https://github.com/gofireflyio/validiac) - Combina las mejores herramientas de código abierto para garantizar prácticas recomendadas, higiene y seguridad Terraform.
- [xterrafile](https://github.com/devopsmakers/xterrafile) - Administra módulos externos del registro, Git o directorios locales para Terraform (escrito en Go).
- [yj](https://github.com/sclevine/yj) - CLI para convertir entre YAML, TOML, JSON y HCL. Conserva el orden de los mapas.
- [yor](https://github.com/bridgecrewio/yor) - Etiqueta y rastrea automáticamente marcos de infraestructura como código (Terraform, CloudFormation y Serverless).
- [zephy](https://github.com/henrybravo/zephy) - Compara recursos Azure desplegados en una suscripción con los administrados por espacios de trabajo Terraform Enterprise (HCP y autohospedado), cuando la estrategia de etiquetado no es suficiente.

### CI

- [opentofu-updater-action](https://github.com/drumandbytes/opentofu-updater-action) - GitHub Action que mantiene actualizados proveedores y módulos de OpenTofu/Terraform, gráficos Helm e imágenes de contenedores mediante solicitudes de incorporación de cambios.
- [setup-terraform](https://github.com/hashicorp/setup-terraform) - Configura Terraform CLI en tu flujo de trabajo de GitHub Actions.
- [terraform-plan](https://github.com/cds-snc/terraform-plan) - GitHub Action para ejecutar Terraform plan y añadir un comentario con los cambios.
- [terraform-risk-assessor](https://github.com/Liam-Johnston/terraform-risk-assessor) - GitHub Action que analiza con IA cambios de planes Terraform y publica una evaluación de riesgos en solicitudes de incorporación de cambios.

### Extensiones de VS Code

- [HashiCorp Terraform](https://marketplace.visualstudio.com/items?itemName=hashicorp.terraform)
- [vscode-terraform-live-graph](https://github.com/adamiBs/vscode-terraform-live-graph) - Extensión Terraform Live Graph para Visual Studio Code que genera un grafo Terraform en directo mientras escribes código.
- [tf-nav](https://marketplace.visualstudio.com/items?itemName=owenrumney.tf-nav) - Extensión de navegación Terraform que crea un índice de recursos por tipo de archivo con una vista de árbol fácil de navegar.

## Bibliotecas

- [hcl-rs](https://github.com/martinohmann/hcl-rs) - Bibliotecas de análisis y codificación HCL para Rust con compatibilidad con serde.
- [hcl4j](https://github.com/wondrify/hcl4j) - Analizador HCL en Java.
- [nu_plugin_hcl](https://github.com/Yethal/nu_plugin_hcl) - Complemento analizador HCL para [Nushell](https://github.com/nushell/nushell).
- [pyhcl](https://github.com/virtuald/pyhcl) - Analizador HCL en Python.
- [python-hcl2](https://github.com/amplify-education/python-hcl2/) - Analizador HCL2 en Python.
- [rhcl](https://github.com/winebarrel/rhcl) - Analizador HCL puro de Ruby.
- [tree-sitter-hcl](https://github.com/tree-sitter-grammars/tree-sitter-hcl) - Gramática HCL para tree-sitter.

## Plantillas

- [Solo-Engineer Stack](https://github.com/sarmakska/terraform-stack) - Repositorio único de Terraform que conecta Vercel + Supabase + Cloudflare + DigitalOcean como plataforma SaaS independiente. Un `terraform apply` aprovisiona un proyecto Next.js, un proyecto Supabase con variables de entorno enviadas a Vercel, una zona Cloudflare con R2 y Workers KV, y un Droplet DigitalOcean con supervisión.
- [Terraform Generator](https://github.com/sudokar/generator-tf-module) - Estructura inicial para un nuevo módulo o proyecto Terraform, compatible con marcos de pruebas (terratest y kitchen-terraform).
- [Terraform GitOps Framework](https://www.kubestack.com) - Todo lo necesario para crear automatización fiable para clústeres Kubernetes AKS, EKS y GKE en un marco gratuito y de código abierto.

## Plataformas Terraform autohospedadas

- [Snap CD](https://github.com/schrieksoft/snapcd) - Plataforma de despliegue continuo completa para despliegues modulares con ejecutores aislados, automatización que considera dependencias y control de acceso detallado.
- [Lynx](https://github.com/clivern/lynx) - Backend Terraform rápido, seguro y fiable. Incluye panel fácil de usar, gestión de proyectos y entornos, control de versiones del estado y compatibilidad con bloqueos e instantáneas.
- [OTF](https://github.com/leg100/otf) - Open Terraforming Framework, alternativa de código abierto a Terraform Enterprise con integración completa con Terraform CLI.
- [Terrakube](https://docs.terrakube.io) - Alternativa de código abierto a Terraform Enterprise con registro privado, estado remoto, flujos personalizados, espacios de trabajo programados y estados visuales.
- [Digger](https://digger.dev) - Alternativa de código abierto a Terraform Cloud: ejecuta trabajos Terraform plan y apply en tu CI.
- [cloud-concierge](https://github.com/dragondrop-cloud/cloud-concierge) - Solución de código abierto para codificar como Terraform recursos no administrados, detectar desviaciones y analizar costes y seguridad de la nube; todo se entrega como solicitud de incorporación de cambios.
- [Stack-Lifecycle-Deployment](https://github.com/D10S0VSkY-OSS/Stack-Lifecycle-Deployment) - Solución de código abierto que define y administra el ciclo de vida completo de los recursos usados y aprovisionados en una nube.
- [Burrito](https://github.com/padok-team/burrito) - Operador Kubernetes TACoS: «ArgoCD para Terraform».
- [Terrateam](https://terrateam.io) - Alternativa de código abierto a Terraform Cloud/Enterprise, con GitOps como prioridad, integración nativa con GitHub y diseñada para escala, seguridad y fiabilidad.


## Plataformas Terraform gestionadas :heavy_dollar_sign:

- [compliance.tf](https://compliance.tf) - Módulos Terraform con SOC 2, PCI DSS, HIPAA, NIST 800-53 y más de 35 marcos integrados. Las configuraciones no conformes fallan en `terraform plan` antes de aplicar cambios.
- [ControlMonkey](https://www.controlmonkey.io/) - Alternativa a Terraform Cloud con generación de código Terraform/OpenTofu, inventario de nube y cobertura IaC. Incluye políticas listas para usar, corrección de desviaciones y un analizador de actividad ClickOps.
- [Firefly](https://www.firefly.ai/) - Alternativa a Terraform Cloud que aprovecha tu herramienta CI. La plataforma Firefly también analiza tu nube para evaluar la cobertura IaC y detectar desviaciones.
- [Scalr](https://www.scalr.com/) - Alternativa a Terraform Enterprise con integración OPA, estructura organizativa, hooks personalizados, integraciones nativas con otras plataformas DevOps e informes centralizados.
- [Stategraph](https://stategraph.com) - Terraform y OpenTofu sin el cuello de botella del archivo de estado. Sustituye el archivo plano por una base de datos real. Los equipos planifican en paralelo, consultan el estado mediante SQL y ejecutan planes en segundos en vez de minutos.
- [env0](https://www.env0.com/) - Alternativa a Terraform Cloud/Enterprise con integración OPA, flujos personalizados y compatibilidad con Terragrunt.
- [Brainboard](https://www.brainboard.co) - Diseña, despliega y administra visualmente infraestructuras de nube modernas para cualquier proveedor: AWS, GCP y Azure.
- [Spacelift](https://spacelift.io/) - Alternativa a Terraform Cloud/Enterprise: plataforma colaborativa de entrega de infraestructura para Terraform.
- [StackGuardian](https://stackguardian.io/) - Plataforma de codificación y orquestación de infraestructura que convierte recursos de nube existentes en IaC; incluye flujos de trabajo basados en políticas con Tirith, OPA y Checkov, entornos de ejecución privados y plantillas sin código.

## Herramientas para Terraform Enterprise

- [terraform-enterprise-cli](https://github.com/skierkowski/terraform-enterprise-cli) - Interfaz de línea de comandos de Terraform Enterprise.
- [terraform-enterprise-client](https://github.com/skierkowski/terraform-enterprise-client) - Cliente API Ruby y herramienta de línea de comandos para Terraform Enterprise.
- [terraform-enterprise-migrator](https://github.com/sil-org/tfc-ops) - Script para migrar entornos Terraform Enterprise de versiones heredadas a la nueva versión.

## Vídeos

- [Your Weekly Dose of Terraform](https://www.youtube.com/channel/UCGH0yYPvlCN1VjSFMGVmFgQ) - Canal de YouTube con transmisiones semanales en directo sobre noticias de Terraform, reseñas, entrevistas, preguntas y respuestas, programación en directo y experimentación con Terraform.
- [Terraform explained in 15 mins](https://www.youtube.com/watch?v=l5k1ai_GBDE) - Explicación de Terraform en 15 minutos.
- [Terraform Course](https://www.youtube.com/watch?v=SLB_c_ayRMo) - Automatiza tu infraestructura de nube de AWS.
- [How to Build Reusable, Composable, Battle tested Terraform Modules](https://www.youtube.com/watch?v=LVgP63BkhKQ) - Yevgeniy Brikman explica cómo escribir código Terraform reutilizable, componible y comprobable. La presentación se centra en módulos, pero también explica brevemente el problema que Terraform resuelve y muestra los conceptos básicos (unos 39 min, octubre de 2017).
- [Building Scalable, Repeatable Infrastructure in the Cloud with Terraform](https://www.youtube.com/watch?v=cG7pcksTAnY) - Demuestra cómo Terraform permite aplicar infraestructura como código al desplegar TeamCity en AWS con PostgreSQL alojado.
- [Creating a Google Compute Instance with Terraform](https://www.youtube.com/watch?v=fo3VX33Zx0c) - Ejemplo de creación de una instancia Google Compute con código Terraform.
- [Creating a Terraform Provider for Just About Anything](https://www.hashicorp.com/resources/creating-terraform-provider-for-anything) - Aprende a contribuir a un proveedor Terraform o a crear uno propio con este tutorial.
- [Evolving Your Infrastructure with Terraform](https://www.youtube.com/watch?v=wgzgVm7Sqlk) - El CTO de OpenCredo ofrece una visión extensa del uso real de Terraform con casos de uso interesantes.
- [Going Multi-Cloud with Terraform and Nomad](https://www.youtube.com/watch?v=e42A4aBZUkQ).
- [How to Extend the Terraform Provider List](https://www.youtube.com/watch?v=2BvpqmFpchI) - En esta charla, Paul explica cómo crear un proveedor Terraform.
- [Orchestrating Containers with Terraform and Consul](https://www.infoq.com/presentations/terraform-consul/) - Mitchell Hashimoto muestra cómo usar Terraform para desplegar y escalar cargas de trabajo en contenedores.
- [Production ChaosMonkey with Terraform](https://www.youtube.com/watch?v=CPI6W3LK0-g) - Cómo usa DigitalOcean Terraform para ejecutar pruebas de integración en producción.
- [Running a Terraform Environment at Scale](https://www.youtube.com/watch?v=3JVGSq7QIS0) - Ejecución de Terraform a escala con cientos de cuentas AWS.
- [Setup Continuous Integration for a Terraform module](https://www.youtube.com/watch?v=vuJ6bjYKUcA) - Ejemplo de uso de CI con Kitchen-Terraform para probar, etiquetar y publicar un módulo Terraform que crea una instancia Google Compute.
- [State of Terraform Providerland](https://www.youtube.com/watch?v=ar1PF5iDtbg) - Cómo funcionan los proveedores Terraform y cómo escribir uno.
- [Terraform At Scale](https://www.youtube.com/watch?v=RldRDryLiXs) - Cómo usa Segment Terraform.
- [Terraform w/ Lee Trout](https://www.youtube.com/watch?v=p2ESyuqPw1A) - Patrones de desarrollo y cómo estructurar eficazmente el código Terraform.
- [Terraforming the Composable World](https://www.youtube.com/watch?v=cHrOXPatFeg) - Integración de Terraform con el aprovisionamiento local de servidores bare metal.
- [Test and verify a Google Compute Instance with Kitchen-Terraform](https://www.youtube.com/watch?v=kiH3-LEveek) - Ejemplo de uso de Kitchen-Terraform para probar código Terraform que crea una instancia Google Compute.
- [Untangling Terraform Through Refactoring](https://www.youtube.com/watch?v=OH6iDKaXpZs) - Cómo refactorizar cuidadosamente el código Terraform con el mínimo riesgo.
- [Complete Terraform Course - From BEGINNER to PRO! (Learn Infrastructure as Code)](https://www.youtube.com/watch?v=7xngnjfIlK4) - Curso completo desde principiante hasta profesional, sin centrarse en un proveedor de nube y con un enfoque general.

## Complementos para editores

- [Emacs terraform-mode](https://github.com/hcl-emacs/terraform-mode)
- [Intellij](https://plugins.jetbrains.com/plugin/7808-terraform-and-hcl)
- [Terraform-ls](https://github.com/hashicorp/terraform-ls) (Servidor de lenguaje de Terraform)
- [Terraform-lsp](https://github.com/juliosueiras/terraform-lsp) (Protocolo de servidor de lenguaje para Terraform)
- [vim-hcl](https://github.com/jvirtanen/vim-hcl) - Resaltado de sintaxis para HCL.
- [Vim-Terraform-Completion](https://github.com/juliosueiras/vim-terraform-completion)
- [Vim-Terraform](https://github.com/hashivim/vim-terraform)

## Licencia

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

En la medida permitida por la ley, Shuaib Yunus ha renunciado a todos los derechos de autor y derechos conexos o afines sobre esta obra.
