<a href="https://github.com/VoltAgent/voltagent">
    <img width="1500" height="500" alt="codex" src="https://github.com/user-attachments/assets/35f56654-e3e7-4023-a7d5-acd5215455de" />
</a>

<br />
<br />

<div align="center">
    <strong>La colección excepcional de más de 175 subagentes Codex en 13 categorías.</strong>
    <br />
    <br />
</div>

   
<div align="center">
    
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![Subagent Count](https://img.shields.io/badge/subagents-175-blue?style=classic)
[![Last Update](https://img.shields.io/github/last-commit/VoltAgent/awesome-codex-subagents?label=Last%20update&style=classic)](https://github.com/VoltAgent/awesome-codex-subagents)
[![Discord](https://img.shields.io/discord/1361559153780195478.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://s.voltagent.dev/discord)
[![Official MCP Servers](https://img.shields.io/badge/Official-MCP%20Servers-c2410c?style=classic&logo=github&logoColor=white&labelColor=24292f)](https://github.com/VoltAgent/official-mcp-servers)

</div>

<br />

# Magníficos Codex Subagents

Este repositorio es la colección definitiva de [Codex Subagents](https://developers.openai.com/codex/subagents), asistentes de IA especializados diseñados para tareas de desarrollo concretas. Escrito específicamente para Codex y alineado con la documentación oficial.

## Instalación

Utiliza los directorios de agentes personalizados de Codex exactamente como se documenta:

- `~/.codex/agents/` para agentes globales (disponibles en todos los proyectos)
- `.codex/agents/` para agentes específicos del proyecto (mayor prioridad en ese repositorio)

1. Clona este repositorio.
2. Copia los archivos de agente `.toml` que quieras en uno de los directorios anteriores.
3. Reinicia o actualiza tu sesión de Codex si es necesario.
4. Delega explícitamente en los prompts (Codex no genera subagentes personalizados automáticamente).

Ejemplos:
```bash
mkdir -p ~/.codex/agents
cp categories/01-core-development/backend-developer.toml ~/.codex/agents/
```

```bash
mkdir -p .codex/agents
cp categories/04-quality-security/reviewer.toml .codex/agents/
```

Si usas configuración de agentes en Codex, mantenla en `.codex/config.toml` bajo `[agents]` como se describe en la documentación oficial.


## Patrocinadores

|                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing"><picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-dark-mode.svg"><img alt="Crawlbase" src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-light-mode.svg" width="425"></picture></a> | [Crawlbase](https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing) es la infraestructura de datos web en la que confían más de 70 000 desarrolladores. Su API de Crawling, servidor MCP e integraciones dan a los agentes de IA acceso en vivo a cualquier página web — con renderizado JavaScript, rotación de proxys y protección anti-bot. |
| <a href="https://serpapi.com/awesome-codex-subagents"><img alt="SerpApi" src="https://cdn.voltagent.dev/awesome-repo/serpapi/serpapi-logo.png" width="425"></a> | [SerpApi](https://serpapi.com/awesome-codex-subagents) es una API de búsqueda web para tus aplicaciones de IA. Disponible en Markdown y JSON para cualquier integración. |


<div align="center">

<table>
<tr>
<td align="center" width="100%">
<h4>👉 Puedes mostrar tu producto aquí y llegar a desarrolladores que usan agentes de codificación de IA como Claude Code, Codex, Gemini y más.</h4>
     
<a href="https://sponsors.voltagent.dev/#awesome-codex-subagents"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



### Ubicaciones de almacenamiento de subagentes

| Type | Path | Availability | Precedence |
|------|------|--------------|------------|
| Project Subagents | `.codex/agents/` | Current project only | Higher |
| Global Subagents | `~/.codex/agents/` | All projects | Lower |

Nota: Cuando se producen conflictos de nombres, los subagentes específicos del proyecto anulan a los globales.


## Estructura de los subagentes

Cada subagente utiliza un formato `.toml` nativo de Codex:

```toml
name = "subagent-name"
description = "When this agent should be invoked"
model = "gpt-5.6-luna"
model_reasoning_effort = "medium"
sandbox_mode = "read-only"

[instructions]
text = """
You are a [role description and expertise areas]...

[Agent-specific checklists, patterns, and guidelines]...
"""
```

### Enrutamiento inteligente de modelos

Cada subagente incluye un campo `model` que lo enruta automáticamente al modelo adecuado — equilibrando calidad y coste:

| Model | When It's Used | Examples |
|-------|----------------|----------|
| `gpt-5.6-sol` | Razonamiento profundo — revisiones de arquitectura, auditorías de seguridad, lógica financiera | `security-auditor`, `architect-reviewer`, `fintech-engineer` |
| `gpt-5.6-terra` | Implementación, diagnóstico, evaluación y análisis profesional multi-paso | `docker-expert`, `test-automator`, `scientific-literature-researcher` |
| `gpt-5.6-luna` | Búsqueda acotada, extracción, enrutamiento, redacción y síntesis ligera | `search-specialist`, `docs-researcher`, `agent-installer` |

### Filosofía del modo sandbox

El campo `sandbox_mode` de cada subagente controla el acceso al sistema de archivos:
- **Agentes de solo lectura** (revisores, auditores): `sandbox_mode = "read-only"` — analizan sin modificar
- **Agentes de escritura en el workspace** (desarrolladores, ingenieros): `sandbox_mode = "workspace-write"` — crean y modifican archivos





## Categorías

### [01. Core Development](categories/01-core-development/)

Subagentes de desarrollo esenciales para tareas de codificación diarias.

- [**api-designer**](categories/01-core-development/api-designer.toml) - Arquitecto de API REST y GraphQL
- [**backend-developer**](categories/01-core-development/backend-developer.toml) - Experto en servidor para APIs escalables
- [**code-mapper**](categories/01-core-development/code-mapper.toml) - Mapeo de rutas de código y análisis de límites de propiedad
- [**design-bridge**](categories/01-core-development/design-bridge.toml) - Traduce especificaciones DESIGN.md en instrucciones UI listas para implementar
- [**electron-pro**](categories/01-core-development/electron-pro.toml) - Experto en aplicaciones de escritorio
- [**frontend-developer**](categories/01-core-development/frontend-developer.toml) - Especialista UI/UX para React, Vue y Angular
- [**fullstack-developer**](categories/01-core-development/fullstack-developer.toml) - Desarrollo de funcionalidades de extremo a extremo
- [**graphql-architect**](categories/01-core-development/graphql-architect.toml) - Experto en esquema GraphQL y federación
- [**microservices-architect**](categories/01-core-development/microservices-architect.toml) - Diseñador de sistemas distribuidos
- [**mobile-developer**](categories/01-core-development/mobile-developer.toml) - Especialista móvil multiplataforma
- [**ui-designer**](categories/01-core-development/ui-designer.toml) - Especialista en diseño visual e interacción
- [**ui-fixer**](categories/01-core-development/ui-fixer.toml) - Parche mínimo y seguro para problemas de UI reproducidos
- [**websocket-engineer**](categories/01-core-development/websocket-engineer.toml) - Especialista en comunicación en tiempo real

### [02. Language Specialists](categories/02-language-specialists/)

Expertos específicos de lenguaje con profundo conocimiento de frameworks.
- [**angular-architect**](categories/02-language-specialists/angular-architect.toml) - Experto en patrones empresariales Angular 15+
- [**cpp-pro**](categories/02-language-specialists/cpp-pro.toml) - Experto en rendimiento C++
- [**csharp-developer**](categories/02-language-specialists/csharp-developer.toml) - Especialista en ecosistema .NET
- [**django-developer**](categories/02-language-specialists/django-developer.toml) - Experto en desarrollo web Django 4+
- [**dotnet-core-expert**](categories/02-language-specialists/dotnet-core-expert.toml) - Especialista multiplataforma .NET 8
- [**dotnet-framework-4.8-expert**](categories/02-language-specialists/dotnet-framework-4.8-expert.toml) - Especialista en empresa heredada .NET Framework
- [**elixir-expert**](categories/02-language-specialists/elixir-expert.toml) - Experto en sistemas tolerantes a fallos Elixir y OTP
- [**erlang-expert**](categories/02-language-specialists/erlang-expert.toml) - Experto en ingeniería Erlang/OTP y rebar3
- [**expo-react-native-expert**](categories/02-language-specialists/expo-react-native-expert.toml) - Experto en desarrollo móvil Expo y React Native
- [**fastapi-developer**](categories/02-language-specialists/fastapi-developer.toml) - Experto en framework moderno de API Python asíncrona
- [**flutter-expert**](categories/02-language-specialists/flutter-expert.toml) - Experto móvil multiplataforma Flutter 3+
- [**golang-pro**](categories/02-language-specialists/golang-pro.toml) - Especialista en concurrencia Go
- [**java-architect**](categories/02-language-specialists/java-architect.toml) - Experto en Java empresarial
- [**javascript-pro**](categories/02-language-specialists/javascript-pro.toml) - Experto en desarrollo JavaScript
- [**kotlin-specialist**](categories/02-language-specialists/kotlin-specialist.toml) - Experto en lenguaje JVM moderno
- [**laravel-specialist**](categories/02-language-specialists/laravel-specialist.toml) - Experto en framework PHP Laravel 10+
- [**symfony-specialist**](categories/02-language-specialists/symfony-specialist.toml) - Especialista en aplicaciones Symfony y Doctrine
- [**nextjs-developer**](categories/02-language-specialists/nextjs-developer.toml) - Especialista full-stack Next.js 14+
- [**node-specialist**](categories/02-language-specialists/node-specialist.toml) - Especialista en backend Node.js
- [**php-pro**](categories/02-language-specialists/php-pro.toml) - Experto en desarrollo web PHP
- [**powershell-5.1-expert**](categories/02-language-specialists/powershell-5.1-expert.toml) - Especialista en automatización Windows PowerShell 5.1 y .NET Framework completo
- [**powershell-7-expert**](categories/02-language-specialists/powershell-7-expert.toml) - Especialista en automatización multiplataforma PowerShell 7+ y .NET moderno
- [**python-pro**](categories/02-language-specialists/python-pro.toml) - Maestro del ecosistema Python
- [**rails-expert**](categories/02-language-specialists/rails-expert.toml) - Experto en desarrollo rápido Rails 8.1
- [**react-specialist**](categories/02-language-specialists/react-specialist.toml) - Experto en patrones modernos React 18+
- [**rust-engineer**](categories/02-language-specialists/rust-engineer.toml) - Experto en programación de sistemas
- [**spring-boot-engineer**](categories/02-language-specialists/spring-boot-engineer.toml) - Experto en microservicios Spring Boot 3+
- [**sql-pro**](categories/02-language-specialists/sql-pro.toml) - Experto en consultas de base de datos
- [**swift-expert**](categories/02-language-specialists/swift-expert.toml) - Especialista en iOS y macOS
- [**typescript-pro**](categories/02-language-specialists/typescript-pro.toml) - Especialista en TypeScript
- [**vue-expert**](categories/02-language-specialists/vue-expert.toml) - Experto en API Composition de Vue 3

### [03. Infrastructure](categories/03-infrastructure/)

Especialistas en DevOps, cloud y despliegue.

- [**azure-infra-engineer**](categories/03-infrastructure/azure-infra-engineer.toml) - Experto en infraestructura Azure y automatización Az PowerShell
- [**cloud-architect**](categories/03-infrastructure/cloud-architect.toml) - Especialista en AWS/GCP/Azure
- [**database-administrator**](categories/03-infrastructure/database-administrator.toml) - Experto en gestión de bases de datos
- [**deployment-engineer**](categories/03-infrastructure/deployment-engineer.toml) - Especialista en automatización de despliegue
- [**devops-engineer**](categories/03-infrastructure/devops-engineer.toml) - Experto en CI/CD y automatización
- [**devops-incident-responder**](categories/03-infrastructure/devops-incident-responder.toml) - Gestión de incidentes DevOps
- [**docker-expert**](categories/03-infrastructure/docker-expert.toml) - Experto en contenedorización y optimización Docker
- [**incident-responder**](categories/03-infrastructure/incident-responder.toml) - Experto en respuesta a incidentes de sistemas
- [**kubernetes-specialist**](categories/03-infrastructure/kubernetes-specialist.toml) - Maestro en orquestación de contenedores
- [**network-engineer**](categories/03-infrastructure/network-engineer.toml) - Especialista en infraestructura de red
- [**platform-engineer**](categories/03-infrastructure/platform-engineer.toml) - Experto en arquitectura de plataforma
- [**security-engineer**](categories/03-infrastructure/security-engineer.toml) - Especialista en seguridad de infraestructura
- [**sre-engineer**](categories/03-infrastructure/sre-engineer.toml) - Experto en ingeniería de fiabilidad de sitios
- [**terraform-engineer**](categories/03-infrastructure/terraform-engineer.toml) - Experto en infraestructura como código
- [**terragrunt-expert**](categories/03-infrastructure/terragrunt-expert.toml) - Especialista en orquestación Terragrunt y IaC DRY
- [**windows-infra-admin**](categories/03-infrastructure/windows-infra-admin.toml) - Especialista en automatización Active Directory, DNS, DHCP y GPO

<details>
<summary><b>04. Quality & Security</b> — Expertos en pruebas, seguridad y calidad de código (20 agentes)</summary>

### [04. Quality & Security](categories/04-quality-security/)

- [**accessibility-tester**](categories/04-quality-security/accessibility-tester.toml) - Experto en cumplimiento A11y
- [**ad-security-reviewer**](categories/04-quality-security/ad-security-reviewer.toml) - Especialista en seguridad Active Directory y auditoría GPO
- [**anti-ui-slop-reviewer**](categories/04-quality-security/anti-ui-slop-reviewer.toml) - Revisor de acabado UI específico del producto
- [**ai-writing-auditor**](categories/04-quality-security/ai-writing-auditor.toml) - Auditor y reescritor de patrones de escritura IA
- [**architect-reviewer**](categories/04-quality-security/architect-reviewer.toml) - Especialista en revisión de arquitectura
- [**browser-debugger**](categories/04-quality-security/browser-debugger.toml) - Reproducción basada en navegador y depuración de cliente
- [**chaos-engineer**](categories/04-quality-security/chaos-engineer.toml) - Experto en pruebas de resiliencia de sistemas
- [**code-reviewer**](categories/04-quality-security/code-reviewer.toml) - Guardián de la calidad del código
- [**compliance-auditor**](categories/04-quality-security/compliance-auditor.toml) - Experto en cumplimiento regulatorio
- [**debugger**](categories/04-quality-security/debugger.toml) - Especialista en depuración avanzada
- [**error-detective**](categories/04-quality-security/error-detective.toml) - Experto en análisis y resolución de errores
- [**gdpr-ccpa-compliance**](categories/04-quality-security/gdpr-ccpa-compliance.toml) - Especialista en privacidad GDPR y CCPA
- [**penetration-tester**](categories/04-quality-security/penetration-tester.toml) - Especialista en hacking ético
- [**performance-engineer**](categories/04-quality-security/performance-engineer.toml) - Experto en optimización de rendimiento
- [**powershell-security-hardening**](categories/04-quality-security/powershell-security-hardening.toml) - Especialista en endurecimiento y cumplimiento de seguridad PowerShell
- [**qa-expert**](categories/04-quality-security/qa-expert.toml) - Especialista en automatización de pruebas
- [**reviewer**](categories/04-quality-security/reviewer.toml) - Revisión estilo PR para corrección, seguridad y regresiones
- [**security-auditor**](categories/04-quality-security/security-auditor.toml) - Experto en vulnerabilidades de seguridad
- [**test-automator**](categories/04-quality-security/test-automator.toml) - Experto en frameworks de automatización de pruebas
- [**ui-ux-tester**](categories/04-quality-security/ui-ux-tester.toml) - Especialista en pruebas funcionales UI/UX exhaustivas

</details>

<details>
<summary><b>05. Data & AI</b> — Especialistas en ingeniería de datos, ML e IA (14 agentes)</summary>

### [05. Data & AI](categories/05-data-ai/)

- [**ai-engineer**](categories/05-data-ai/ai-engineer.toml) - Experto en diseño y despliegue de sistemas de IA
- [**azure-databricks-platform-architect**](categories/05-data-ai/azure-databricks-platform-architect.toml) - Arquitecto de plataforma y lakehouse Azure Databricks
- [**data-analyst**](categories/05-data-ai/data-analyst.toml) - Especialista en insights y visualización de datos
- [**data-engineer**](categories/05-data-ai/data-engineer.toml) - Arquitecto de pipelines de datos
- [**data-scientist**](categories/05-data-ai/data-scientist.toml) - Experto en analítica e insights
- [**database-optimizer**](categories/05-data-ai/database-optimizer.toml) - Especialista en rendimiento de bases de datos
- [**llm-architect**](categories/05-data-ai/llm-architect.toml) - Arquitecto de grandes modelos de lenguaje
- [**machine-learning-engineer**](categories/05-data-ai/machine-learning-engineer.toml) - Experto en sistemas de aprendizaje automático
- [**ml-engineer**](categories/05-data-ai/ml-engineer.toml) - Especialista en aprendizaje automático
- [**mlops-engineer**](categories/05-data-ai/mlops-engineer.toml) - Experto en MLOps y despliegue de modelos
- [**nlp-engineer**](categories/05-data-ai/nlp-engineer.toml) - Experto en procesamiento de lenguaje natural
- [**postgres-pro**](categories/05-data-ai/postgres-pro.toml) - Experto en base de datos PostgreSQL
- [**prompt-engineer**](categories/05-data-ai/prompt-engineer.toml) - Especialista en optimización de prompts
- [**reinforcement-learning-engineer**](categories/05-data-ai/reinforcement-learning-engineer.toml) - Experto en aprendizaje por refuerzo y sistemas de decisión

</details>

<details>
<summary><b>06. Developer Experience</b> — Expertos en herramientas y productividad de desarrolladores (14 agentes)</summary>

### [06. Developer Experience](categories/06-developer-experience/)

- [**build-engineer**](categories/06-developer-experience/build-engineer.toml) - Especialista en sistemas de build
- [**cli-developer**](categories/06-developer-experience/cli-developer.toml) - Creador de herramientas de línea de comandos
- [**dependency-manager**](categories/06-developer-experience/dependency-manager.toml) - Especialista en paquetes y dependencias
- [**documentation-engineer**](categories/06-developer-experience/documentation-engineer.toml) - Experto en documentación técnica
- [**dx-optimizer**](categories/06-developer-experience/dx-optimizer.toml) - Especialista en optimización de experiencia de desarrollador
- [**git-workflow-manager**](categories/06-developer-experience/git-workflow-manager.toml) - Experto en flujo de trabajo y ramas Git
- [**legacy-modernizer**](categories/06-developer-experience/legacy-modernizer.toml) - Especialista en modernización de código heredado
- [**mcp-developer**](categories/06-developer-experience/mcp-developer.toml) - Especialista en Model Context Protocol
- [**powershell-module-architect**](categories/06-developer-experience/powershell-module-architect.toml) - Especialista en arquitectura de módulos y perfiles PowerShell
- [**powershell-ui-architect**](categories/06-developer-experience/powershell-ui-architect.toml) - Especialista PowerShell UI/UX para WinForms, WPF, frameworks Metro y TUIs
- [**readme-generator**](categories/06-developer-experience/readme-generator.toml) - Generador de README listo para mantenedores sin alucinaciones
- [**refactoring-specialist**](categories/06-developer-experience/refactoring-specialist.toml) - Experto en refactorización de código
- [**slack-expert**](categories/06-developer-experience/slack-expert.toml) - Experto en plataforma Slack y @slack/bolt
- [**tooling-engineer**](categories/06-developer-experience/tooling-engineer.toml) - Especialista en herramientas de desarrollador

</details>

<details>
<summary><b>07. Specialized Domains</b> — Expertos en tecnologías de dominio específico (14 agentes)</summary>

### [07. Specialized Domains](categories/07-specialized-domains/)

- [**api-documenter**](categories/07-specialized-domains/api-documenter.toml) - Especialista en documentación de API
- [**blockchain-developer**](categories/07-specialized-domains/blockchain-developer.toml) - Especialista en Web3 y cripto
- [**embedded-systems**](categories/07-specialized-domains/embedded-systems.toml) - Experto en sistemas embebidos y de tiempo real
- [**fintech-engineer**](categories/07-specialized-domains/fintech-engineer.toml) - Especialista en tecnología financiera
- [**game-developer**](categories/07-specialized-domains/game-developer.toml) - Experto en desarrollo de juegos
- [**healthcare-admin**](categories/07-specialized-domains/healthcare-admin.toml) - Especialista en administración sanitaria, ciclo de ingresos y cumplimiento
- [**hipaa-compliance**](categories/07-specialized-domains/hipaa-compliance.toml) - Especialista en cumplimiento HIPAA para proveedores SaaS de salud
- [**iot-engineer**](categories/07-specialized-domains/iot-engineer.toml) - Desarrollador de sistemas IoT
- [**m365-admin**](categories/07-specialized-domains/m365-admin.toml) - Especialista en administración Microsoft 365, Exchange Online, Teams y SharePoint
- [**mobile-app-developer**](categories/07-specialized-domains/mobile-app-developer.toml) - Especialista en aplicaciones móviles
- [**payment-integration**](categories/07-specialized-domains/payment-integration.toml) - Experto en sistemas de pago
- [**quant-analyst**](categories/07-specialized-domains/quant-analyst.toml) - Especialista en análisis cuantitativo
- [**risk-manager**](categories/07-specialized-domains/risk-manager.toml) - Experto en evaluación y gestión de riesgos
- [**seo-specialist**](categories/07-specialized-domains/seo-specialist.toml) - Especialista en optimización para motores de búsqueda

</details>

<details>
<summary><b>08. Business & Product</b> — Gestión de producto y análisis de negocio (17 agentes)</summary>

### [08. Business & Product](categories/08-business-product/)

- [**assumption-mapping**](categories/08-business-product/assumption-mapping.toml) - Especialista en riesgo y validación de supuestos de producto
- [**backlog-grooming**](categories/08-business-product/backlog-grooming.toml) - Especialista en refinamiento de backlog ágil
- [**business-analyst**](categories/08-business-product/business-analyst.toml) - Especialista en requisitos
- [**content-marketer**](categories/08-business-product/content-marketer.toml) - Especialista en marketing de contenidos
- [**content-quality-editor**](categories/08-business-product/content-quality-editor.toml) - Especialista en calidad y humanización de contenido IA
- [**customer-success-manager**](categories/08-business-product/customer-success-manager.toml) - Experto en éxito de clientes
- [**growth-loops**](categories/08-business-product/growth-loops.toml) - Especialista en bucles de crecimiento y mecánicas PLG
- [**legal-advisor**](categories/08-business-product/legal-advisor.toml) - Especialista en legal y cumplimiento
- [**license-engineer**](categories/08-business-product/license-engineer.toml) - Especialista en licencias de software y sistemas de cumplimiento
- [**product-manager**](categories/08-business-product/product-manager.toml) - Experto en estrategia de producto
- [**project-manager**](categories/08-business-product/project-manager.toml) - Especialista en gestión de proyectos
- [**resume-refiner**](categories/08-business-product/resume-refiner.toml) - Especialista en optimización de currículum, CV y perfil LinkedIn
- [**sales-engineer**](categories/08-business-product/sales-engineer.toml) - Experto en ventas técnicas
- [**scrum-master**](categories/08-business-product/scrum-master.toml) - Experto en metodología ágil
- [**technical-writer**](categories/08-business-product/technical-writer.toml) - Especialista en documentación técnica
- [**ux-researcher**](categories/08-business-product/ux-researcher.toml) - Experto en investigación de usuarios
- [**wordpress-master**](categories/08-business-product/wordpress-master.toml) - Experto en desarrollo y optimización WordPress

</details>

<details>
<summary><b>09. Meta & Orchestration</b> — Coordinación de agentes y metaprogramación (12 agentes)</summary>

### [09. Meta & Orchestration](categories/09-meta-orchestration/)

- [**agent-installer**](categories/09-meta-orchestration/agent-installer.toml) - Explora e instala agentes de este repositorio vía GitHub
- [**agent-organizer**](categories/09-meta-orchestration/agent-organizer.toml) - Coordinador multi-agente
- [**codebase-orchestrator**](categories/09-meta-orchestration/codebase-orchestrator.toml) - Gobernanza de refactorización a nivel de repo con puertas de aprobación
- [**context-manager**](categories/09-meta-orchestration/context-manager.toml) - Experto en optimización de contexto
- [**error-coordinator**](categories/09-meta-orchestration/error-coordinator.toml) - Especialista en manejo y recuperación de errores
- [**it-ops-orchestrator**](categories/09-meta-orchestration/it-ops-orchestrator.toml) - Especialista en orquestación de flujos de trabajo de operaciones IT
- [**knowledge-synthesizer**](categories/09-meta-orchestration/knowledge-synthesizer.toml) - Experto en agregación de conocimiento
- [**multi-agent-coordinator**](categories/09-meta-orchestration/multi-agent-coordinator.toml) - Orquestación avanzada multi-agente
- [**performance-monitor**](categories/09-meta-orchestration/performance-monitor.toml) - Optimización del rendimiento de agentes
- [**pied-piper**](https://github.com/sathish316/pied-piper/) - Orquesta un equipo de subagentes de IA para flujos de trabajo SDLC repetitivos
- [**task-distributor**](categories/09-meta-orchestration/task-distributor.toml) - Especialista en asignación de tareas
- [**workflow-orchestrator**](categories/09-meta-orchestration/workflow-orchestrator.toml) - Automatización de flujos de trabajo complejos

</details>

<details>
<summary><b>10. Research & Analysis</b> — Especialistas en investigación, búsqueda y análisis (12 agentes)</summary>

### [10. Research & Analysis](categories/10-research-analysis/)

- [**ab-test-analysis**](categories/10-research-analysis/ab-test-analysis.toml) - Interpretación de pruebas A/B y decisiones ship/no-ship
- [**cohort-analysis**](categories/10-research-analysis/cohort-analysis.toml) - Análisis de retención, comportamiento de cohortes y métricas de activación
- [**competitive-analyst**](categories/10-research-analysis/competitive-analyst.toml) - Especialista en inteligencia competitiva
- [**data-researcher**](categories/10-research-analysis/data-researcher.toml) - Experto en descubrimiento y análisis de datos
- [**docs-researcher**](categories/10-research-analysis/docs-researcher.toml) - Verificación de API y frameworks respaldada por documentación
- [**first-principles-thinking**](categories/10-research-analysis/first-principles-thinking.toml) - Resolución de problemas cuestionando supuestos, desde primeros principios
- [**market-researcher**](categories/10-research-analysis/market-researcher.toml) - Análisis de mercado e insights de consumidores
- [**project-idea-validator**](categories/10-research-analysis/project-idea-validator.toml) - Probador de presión brutal de ideas y estratega go/no-go
- [**research-analyst**](categories/10-research-analysis/research-analyst.toml) - Especialista en investigación integral
- [**scientific-literature-researcher**](categories/10-research-analysis/scientific-literature-researcher.toml) - Investigación fundamentada en evidencia de estudios científicos publicados
- [**search-specialist**](categories/10-research-analysis/search-specialist.toml) - Experto en recuperación avanzada de información
- [**trend-analyst**](categories/10-research-analysis/trend-analyst.toml) - Experto en tendencias emergentes y predicción

</details>

<details>
<summary><b>11. AI Governance & Safety</b> - Especialistas en gobernanza, guardarraíles e IA confiable (4 agentes)</summary>

### [11. AI Governance & Safety](categories/11-ai-governance-safety/)

- [**ai-governance-auditor**](categories/11-ai-governance-safety/ai-governance-auditor.toml) - Auditor de controles de gobernanza de IA y preparación de despliegue
- [**model-risk-manager**](categories/11-ai-governance-safety/model-risk-manager.toml) - Especialista en priorización y mitigación de modos de fallo de modelos
- [**policy-guardrail-designer**](categories/11-ai-governance-safety/policy-guardrail-designer.toml) - Diseñador de guardarraíles para prompts, herramientas y flujos de trabajo
- [**responsible-ai-reviewer**](categories/11-ai-governance-safety/responsible-ai-reviewer.toml) - Revisor de equidad, uso indebido, transparencia y supervisión

</details>

<details>
<summary><b>12. Platform Engineering & IDP</b> - Especialistas en plataforma de desarrollador interna y golden paths (4 agentes)</summary>

### [12. Platform Engineering & IDP](categories/12-platform-engineering-idp/)

- [**backstage-specialist**](categories/12-platform-engineering-idp/backstage-specialist.toml) - Especialista en catálogo, plantillas y portal Backstage
- [**golden-path-designer**](categories/12-platform-engineering-idp/golden-path-designer.toml) - Diseñador de flujos de trabajo self-service opinados
- [**idp-architect**](categories/12-platform-engineering-idp/idp-architect.toml) - Especialista en arquitectura de plataforma de desarrollador interna
- [**platform-product-manager**](categories/12-platform-engineering-idp/platform-product-manager.toml) - Especialista en hoja de ruta, adopción y métricas de éxito de plataforma

</details>

<details>
<summary><b>13. LLMOps, Evals & Observability</b> - Especialistas en calidad de IA en producción y visibilidad en runtime (4 agentes)</summary>

### [13. LLMOps, Evals & Observability](categories/13-llmops-evals-observability/)

- [**ai-observability-engineer**](categories/13-llmops-evals-observability/ai-observability-engineer.toml) - Especialista en trazas, métricas y logging nativos de IA
- [**eval-engineer**](categories/13-llmops-evals-observability/eval-engineer.toml) - Especialista en evaluación de prompts, herramientas y flujos de trabajo
- [**hallucination-investigator**](categories/13-llmops-evals-observability/hallucination-investigator.toml) - Investigador de causalidad de falta de facticidad y colapso de contexto
- [**prompt-regression-tester**](categories/13-llmops-evals-observability/prompt-regression-tester.toml) - Diseñador de suites de regresión para cambios de comportamiento de IA

</details>

## Entender los subagentes

Los subagentes son asistentes de IA especializados que mejoran las capacidades de Codex aportando experiencia específica por tarea. Actúan como ayudantes dedicados a los que Codex puede recurrir al encontrar determinados tipos de trabajo.

### ¿Qué hace especiales a los subagentes?

**Ventanas de contexto independientes**
Cada subagente opera en su propio espacio de contexto aislado, evitando la contaminación cruzada entre distintas tareas y manteniendo la claridad en el hilo de conversación principal.

**Inteligencia específica del dominio**
Los subagentes incluyen instrucciones cuidadosamente elaboradas para su área de experiencia, lo que se traduce en un rendimiento superior en tareas especializadas.

**Compartidos entre proyectos**
Tras crear un subagente, puedes utilizarlo en varios proyectos y distribuirlo entre los miembros del equipo para asegurar prácticas de desarrollo consistentes.

**Delegación explícita**
Codex no genera subagentes automáticamente. Usa prompts de delegación explícita para especificar qué agentes lanzar, cómo dividir el trabajo y qué forma debe tener el resultado.

### Ventajas principales

- **Eficiencia de memoria**: los contextos aislados evitan que la conversación principal se llene de detalles específicos de la tarea
- **Mayor precisión**: los prompts y configuraciones especializados dan mejores resultados en dominios concretos
- **Consistencia de flujo de trabajo**: el uso compartido de subagentes a nivel de equipo asegura enfoques uniformes para tareas comunes
- **Codex nativo**: utiliza archivos de agente `.toml` alineados con la documentación oficial de subagentes de Codex

### Flujos de trabajo de ejemplo

**Flujo de revisión de PR:**
```text
Review this branch with parallel subagents. Have reviewer look for correctness, security, and missing tests. Have docs_researcher verify the framework APIs this patch depends on. Wait for both and summarize the findings with file references.
```

**Flujo de investigación de bug:**
```text
Investigate the broken settings flow. Have code_mapper trace the owning code paths, browser_debugger reproduce the bug in the browser, and frontend_developer propose the smallest fix after the failure is understood. Wait for the read-heavy agents first, then continue.
```

**Flujo de exploración y planificación del repositorio:**
```text
Use search_specialist to locate the code related to payment retries, knowledge_synthesizer to summarize the current design, and refactoring_specialist to propose a minimal refactor plan. Return a concrete action list.
```

## Herramientas del ecosistema AI Design + Build


<br/>

Lanzas productos con IA, pero cada lanzamiento muere en silencio porque nadie habla de él. [EveryFeed](https://everyfeed.ai/) conecta tu asistente de IA con un espacio de trabajo social que redacta, programa y publica en más de 35 canales — sin agencia, sin contratar marketing.

<a href="https://everyfeed.ai/">
<img src="https://cdn.voltagent.dev/awesome-repo/everyfeed-social.png" alt="everyfeed"  /><br/>
</a>

<br/>



<a href="https://launchkit.getdesign.md/">
<img src="https://cdn.voltagent.dev/awesome-repo/website-starter-kit-banner-dark-0315e5f9c1.png" alt="launchkit"  /><br/>
</a>

<br/>


<a href="https://mobile-starterkit.getdesign.md/">
<img src="https://cdn.voltagent.dev/awesome-repo/mobile-starter-kit-banner-light-450ba0a9b0.png" alt="mobilekit"  /><br/>
</a>

<br/>

## Contribuir

¡Aceptamos contribuciones! Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para las directrices.

- Envía nuevos subagentes mediante una PR
- Mejora las definiciones existentes
- Reporta problemas y bugs


## Licencia

MIT License - ver [LICENSE](LICENSE)

Este repositorio es una colección curada de definiciones de subagentes aportadas tanto por los mantenedores como por la comunidad. Todos los subagentes se proporcionan "tal cual" sin garantía. No auditamos ni garantizamos la seguridad o corrección de ningún subagente. Revísalos antes de usar; los mantenedores no aceptan responsabilidad por ningún problema derivado de su uso.

Si encuentras un problema con un subagente listado o quieres que se elimine tu contribución, abre un issue en este repositorio y lo resolveremos pronto.
