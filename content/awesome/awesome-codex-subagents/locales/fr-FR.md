<a href="https://github.com/VoltAgent/voltagent">
    <img width="1500" height="500" alt="codex" src="https://github.com/user-attachments/assets/35f56654-e3e7-4023-a7d5-acd5215455de" />
</a>

<br />
<br />

<div align="center">
    <strong>La collection exceptionnelle de plus de 175 sous-agents Codex répartis en 13 catégories.</strong>
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

# Superbe collection Codex Subagents

Ce dépôt constitue la collection de référence des [Codex Subagents](https://developers.openai.com/codex/subagents), des assistants IA spécialisés conçus pour des tâches de développement précises. Écrit spécifiquement pour Codex et aligné sur la documentation officielle.

## Installation

Utilisez les répertoires d'agents personnalisés de Codex exactement comme indiqué dans la documentation :

- `~/.codex/agents/` pour les agents globaux (disponibles dans tous les projets)
- `.codex/agents/` pour les agents spécifiques au projet (priorité plus élevée dans ce dépôt)

1. Clonez ce dépôt.
2. Copiez les fichiers d'agent `.toml` souhaités dans l'un des répertoires ci-dessus.
3. Redémarrez ou actualisez votre session Codex si nécessaire.
4. Déléguez explicitement dans vos invites (Codex ne lance pas automatiquement de sous-agents personnalisés).

Exemples :
```bash
mkdir -p ~/.codex/agents
cp categories/01-core-development/backend-developer.toml ~/.codex/agents/
```

```bash
mkdir -p .codex/agents
cp categories/04-quality-security/reviewer.toml .codex/agents/
```

Si vous utilisez une configuration d'agents dans Codex, conservez-la dans `.codex/config.toml` sous `[agents]` comme décrit dans la documentation officielle.


## Sponsors

|                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing"><picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-dark-mode.svg"><img alt="Crawlbase" src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-light-mode.svg" width="425"></picture></a> | [Crawlbase](https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing) est une infrastructure de données web à laquelle font confiance plus de 70 000 développeurs. Son API Crawling, son serveur MCP et ses intégrations donnent aux agents IA un accès en direct à n'importe quelle page web — avec rendu JavaScript, rotation de proxys et protection anti-bot. |
| <a href="https://serpapi.com/awesome-codex-subagents"><img alt="SerpApi" src="https://cdn.voltagent.dev/awesome-repo/serpapi/serpapi-logo.png" width="425"></a> | [SerpApi](https://serpapi.com/awesome-codex-subagents) est une API de recherche web pour vos applications IA. Disponible en Markdown et JSON pour toute intégration. |


<div align="center">

<table>
<tr>
<td align="center" width="100%">
<h4>👉 Vous pouvez présenter votre produit ici et toucher les développeurs utilisant des agents de codage IA comme Claude Code, Codex, Gemini, et bien plus.</h4>
     
<a href="https://sponsors.voltagent.dev/#awesome-codex-subagents"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



### Emplacements de stockage des sous-agents

| Type | Path | Availability | Precedence |
|------|------|--------------|------------|
| Project Subagents | `.codex/agents/` | Current project only | Higher |
| Global Subagents | `~/.codex/agents/` | All projects | Lower |

Note : En cas de conflit de nommage, les sous-agents spécifiques au projet remplacent les sous-agents globaux.


## Structure des sous-agents

Chaque sous-agent utilise un format `.toml` natif de Codex :

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

### Routage intelligent des modèles

Chaque sous-agent inclut un champ `model` qui l'aiguille automatiquement vers le bon modèle — équilibrant qualité et coût :

| Model | When It's Used | Examples |
|-------|----------------|----------|
| `gpt-5.6-sol` | Raisonnement approfondi — revues d'architecture, audits de sécurité, logique financière | `security-auditor`, `architect-reviewer`, `fintech-engineer` |
| `gpt-5.6-terra` | Implémentation, diagnostic, évaluation et analyse professionnelle multi-étapes | `docker-expert`, `test-automator`, `scientific-literature-researcher` |
| `gpt-5.6-luna` | Recherche, extraction, routage, rédaction et synthèse légère à portée limitée | `search-specialist`, `docs-researcher`, `agent-installer` |

### Philosophie du mode bac à sable

Le champ `sandbox_mode` de chaque sous-agent contrôle l'accès au système de fichiers :
- **Agents en lecture seule** (relecteurs, auditeurs) : `sandbox_mode = "read-only"` — analysent sans modifier
- **Agents en écriture dans l'espace de travail** (développeurs, ingénieurs) : `sandbox_mode = "workspace-write"` — créent et modifient des fichiers





## Catégories

### [01. Core Development](categories/01-core-development/)

Sous-agents de développement essentiels pour les tâches de codage quotidiennes.

- [**api-designer**](categories/01-core-development/api-designer.toml) - Architecte d'API REST et GraphQL
- [**backend-developer**](categories/01-core-development/backend-developer.toml) - Expert côté serveur pour des API évolutives
- [**code-mapper**](categories/01-core-development/code-mapper.toml) - Cartographie des chemins de code et analyse des limites de propriété
- [**design-bridge**](categories/01-core-development/design-bridge.toml) - Traduit les spécifications DESIGN.md en instructions UI prêtes à implémenter
- [**electron-pro**](categories/01-core-development/electron-pro.toml) - Expert en applications de bureau
- [**frontend-developer**](categories/01-core-development/frontend-developer.toml) - Spécialiste UI/UX pour React, Vue et Angular
- [**fullstack-developer**](categories/01-core-development/fullstack-developer.toml) - Développement de fonctionnalités de bout en bout
- [**graphql-architect**](categories/01-core-development/graphql-architect.toml) - Expert en schéma GraphQL et fédération
- [**microservices-architect**](categories/01-core-development/microservices-architect.toml) - Concepteur de systèmes distribués
- [**mobile-developer**](categories/01-core-development/mobile-developer.toml) - Spécialiste mobile multiplateforme
- [**ui-designer**](categories/01-core-development/ui-designer.toml) - Spécialiste en design visuel et interaction
- [**ui-fixer**](categories/01-core-development/ui-fixer.toml) - Correctif minimal et sûr pour les problèmes UI reproduits
- [**websocket-engineer**](categories/01-core-development/websocket-engineer.toml) - Spécialiste de la communication en temps réel

### [02. Language Specialists](categories/02-language-specialists/)

Experts spécifiques à un langage avec une connaissance approfondie des frameworks.
- [**angular-architect**](categories/02-language-specialists/angular-architect.toml) - Expert en patterns d'entreprise Angular 15+
- [**cpp-pro**](categories/02-language-specialists/cpp-pro.toml) - Expert en performance C++
- [**csharp-developer**](categories/02-language-specialists/csharp-developer.toml) - Spécialiste de l'écosystème .NET
- [**django-developer**](categories/02-language-specialists/django-developer.toml) - Expert en développement web Django 4+
- [**dotnet-core-expert**](categories/02-language-specialists/dotnet-core-expert.toml) - Spécialiste .NET 8 multiplateforme
- [**dotnet-framework-4.8-expert**](categories/02-language-specialists/dotnet-framework-4.8-expert.toml) - Spécialiste .NET Framework d'entreprise hérité
- [**elixir-expert**](categories/02-language-specialists/elixir-expert.toml) - Expert en systèmes tolérants aux fautes Elixir et OTP
- [**erlang-expert**](categories/02-language-specialists/erlang-expert.toml) - Expert en ingénierie Erlang/OTP et rebar3
- [**expo-react-native-expert**](categories/02-language-specialists/expo-react-native-expert.toml) - Expert en développement mobile Expo et React Native
- [**fastapi-developer**](categories/02-language-specialists/fastapi-developer.toml) - Expert en framework API Python asynchrone moderne
- [**flutter-expert**](categories/02-language-specialists/flutter-expert.toml) - Expert Flutter 3+ multiplateforme mobile
- [**golang-pro**](categories/02-language-specialists/golang-pro.toml) - Spécialiste de la concurrence Go
- [**java-architect**](categories/02-language-specialists/java-architect.toml) - Expert Java d'entreprise
- [**javascript-pro**](categories/02-language-specialists/javascript-pro.toml) - Expert en développement JavaScript
- [**kotlin-specialist**](categories/02-language-specialists/kotlin-specialist.toml) - Expert en langage JVM moderne
- [**laravel-specialist**](categories/02-language-specialists/laravel-specialist.toml) - Expert en framework PHP Laravel 10+
- [**symfony-specialist**](categories/02-language-specialists/symfony-specialist.toml) - Spécialiste applications Symfony et Doctrine
- [**nextjs-developer**](categories/02-language-specialists/nextjs-developer.toml) - Spécialiste full-stack Next.js 14+
- [**node-specialist**](categories/02-language-specialists/node-specialist.toml) - Spécialiste backend Node.js
- [**php-pro**](categories/02-language-specialists/php-pro.toml) - Expert en développement web PHP
- [**powershell-5.1-expert**](categories/02-language-specialists/powershell-5.1-expert.toml) - Spécialiste automatisation Windows PowerShell 5.1 et .NET Framework complet
- [**powershell-7-expert**](categories/02-language-specialists/powershell-7-expert.toml) - Spécialiste automatisation PowerShell 7+ multiplateforme et .NET moderne
- [**python-pro**](categories/02-language-specialists/python-pro.toml) - Maître de l'écosystème Python
- [**rails-expert**](categories/02-language-specialists/rails-expert.toml) - Expert en développement rapide Rails 8.1
- [**react-specialist**](categories/02-language-specialists/react-specialist.toml) - Expert en patterns modernes React 18+
- [**rust-engineer**](categories/02-language-specialists/rust-engineer.toml) - Expert en programmation système
- [**spring-boot-engineer**](categories/02-language-specialists/spring-boot-engineer.toml) - Expert en microservices Spring Boot 3+
- [**sql-pro**](categories/02-language-specialists/sql-pro.toml) - Expert en requêtes de base de données
- [**swift-expert**](categories/02-language-specialists/swift-expert.toml) - Spécialiste iOS et macOS
- [**typescript-pro**](categories/02-language-specialists/typescript-pro.toml) - Spécialiste TypeScript
- [**vue-expert**](categories/02-language-specialists/vue-expert.toml) - Expert en API Composition de Vue 3

### [03. Infrastructure](categories/03-infrastructure/)

Spécialistes DevOps, cloud et déploiement.

- [**azure-infra-engineer**](categories/03-infrastructure/azure-infra-engineer.toml) - Expert en infrastructure Azure et automatisation Az PowerShell
- [**cloud-architect**](categories/03-infrastructure/cloud-architect.toml) - Spécialiste AWS/GCP/Azure
- [**database-administrator**](categories/03-infrastructure/database-administrator.toml) - Expert en gestion de bases de données
- [**deployment-engineer**](categories/03-infrastructure/deployment-engineer.toml) - Spécialiste en automatisation de déploiement
- [**devops-engineer**](categories/03-infrastructure/devops-engineer.toml) - Expert en CI/CD et automatisation
- [**devops-incident-responder**](categories/03-infrastructure/devops-incident-responder.toml) - Gestion des incidents DevOps
- [**docker-expert**](categories/03-infrastructure/docker-expert.toml) - Expert en conteneurisation et optimisation Docker
- [**incident-responder**](categories/03-infrastructure/incident-responder.toml) - Expert en réponse aux incidents système
- [**kubernetes-specialist**](categories/03-infrastructure/kubernetes-specialist.toml) - Maître de l'orchestration de conteneurs
- [**network-engineer**](categories/03-infrastructure/network-engineer.toml) - Spécialiste en infrastructure réseau
- [**platform-engineer**](categories/03-infrastructure/platform-engineer.toml) - Expert en architecture de plateforme
- [**security-engineer**](categories/03-infrastructure/security-engineer.toml) - Spécialiste en sécurité d'infrastructure
- [**sre-engineer**](categories/03-infrastructure/sre-engineer.toml) - Expert en ingénierie de fiabilité des sites
- [**terraform-engineer**](categories/03-infrastructure/terraform-engineer.toml) - Expert en infrastructure as Code
- [**terragrunt-expert**](categories/03-infrastructure/terragrunt-expert.toml) - Spécialiste orchestration Terragrunt et IaC DRY
- [**windows-infra-admin**](categories/03-infrastructure/windows-infra-admin.toml) - Spécialiste automatisation Active Directory, DNS, DHCP et GPO

<details>
<summary><b>04. Quality & Security</b> — Experts en test, sécurité et qualité de code (20 agents)</summary>

### [04. Quality & Security](categories/04-quality-security/)

- [**accessibility-tester**](categories/04-quality-security/accessibility-tester.toml) - Expert en conformité A11y
- [**ad-security-reviewer**](categories/04-quality-security/ad-security-reviewer.toml) - Spécialiste audit Active Directory et GPO
- [**anti-ui-slop-reviewer**](categories/04-quality-security/anti-ui-slop-reviewer.toml) - Relecteur de finition UI spécifique au produit
- [**ai-writing-auditor**](categories/04-quality-security/ai-writing-auditor.toml) - Auditeur et réécrivain de patterns d'écriture IA
- [**architect-reviewer**](categories/04-quality-security/architect-reviewer.toml) - Spécialiste en revue d'architecture
- [**browser-debugger**](categories/04-quality-security/browser-debugger.toml) - Reproduction basée sur le navigateur et débogage côté client
- [**chaos-engineer**](categories/04-quality-security/chaos-engineer.toml) - Expert en tests de résilience système
- [**code-reviewer**](categories/04-quality-security/code-reviewer.toml) - Gardien de la qualité du code
- [**compliance-auditor**](categories/04-quality-security/compliance-auditor.toml) - Expert en conformité réglementaire
- [**debugger**](categories/04-quality-security/debugger.toml) - Spécialiste de débogage avancé
- [**error-detective**](categories/04-quality-security/error-detective.toml) - Expert en analyse et résolution d'erreurs
- [**gdpr-ccpa-compliance**](categories/04-quality-security/gdpr-ccpa-compliance.toml) - Spécialiste conformité vie privée GDPR et CCPA
- [**penetration-tester**](categories/04-quality-security/penetration-tester.toml) - Spécialiste en hacking éthique
- [**performance-engineer**](categories/04-quality-security/performance-engineer.toml) - Expert en optimisation des performances
- [**powershell-security-hardening**](categories/04-quality-security/powershell-security-hardening.toml) - Spécialiste durcissement sécurité et conformité PowerShell
- [**qa-expert**](categories/04-quality-security/qa-expert.toml) - Spécialiste en automatisation de tests
- [**reviewer**](categories/04-quality-security/reviewer.toml) - Revue style PR pour correction, sécurité et régressions
- [**security-auditor**](categories/04-quality-security/security-auditor.toml) - Expert en vulnérabilités de sécurité
- [**test-automator**](categories/04-quality-security/test-automator.toml) - Expert en frameworks d'automatisation de tests
- [**ui-ux-tester**](categories/04-quality-security/ui-ux-tester.toml) - Spécialiste en tests fonctionnels UI/UX exhaustifs

</details>

<details>
<summary><b>05. Data & AI</b> — Experts en ingénierie des données, ML et IA (14 agents)</summary>

### [05. Data & AI](categories/05-data-ai/)

- [**ai-engineer**](categories/05-data-ai/ai-engineer.toml) - Expert en conception et déploiement de systèmes IA
- [**azure-databricks-platform-architect**](categories/05-data-ai/azure-databricks-platform-architect.toml) - Architecte plateforme et lakehouse Azure Databricks
- [**data-analyst**](categories/05-data-ai/data-analyst.toml) - Spécialiste en insights et visualisation de données
- [**data-engineer**](categories/05-data-ai/data-engineer.toml) - Architecte de pipelines de données
- [**data-scientist**](categories/05-data-ai/data-scientist.toml) - Expert en analytique et insights
- [**database-optimizer**](categories/05-data-ai/database-optimizer.toml) - Spécialiste en performance de bases de données
- [**llm-architect**](categories/05-data-ai/llm-architect.toml) - Architecte de grands modèles de langage
- [**machine-learning-engineer**](categories/05-data-ai/machine-learning-engineer.toml) - Expert en systèmes d'apprentissage automatique
- [**ml-engineer**](categories/05-data-ai/ml-engineer.toml) - Spécialiste en apprentissage automatique
- [**mlops-engineer**](categories/05-data-ai/mlops-engineer.toml) - Expert en MLOps et déploiement de modèles
- [**nlp-engineer**](categories/05-data-ai/nlp-engineer.toml) - Expert en traitement du langage naturel
- [**postgres-pro**](categories/05-data-ai/postgres-pro.toml) - Expert en base de données PostgreSQL
- [**prompt-engineer**](categories/05-data-ai/prompt-engineer.toml) - Spécialiste en optimisation de prompts
- [**reinforcement-learning-engineer**](categories/05-data-ai/reinforcement-learning-engineer.toml) - Expert en apprentissage par renforcement et systèmes de décision

</details>

<details>
<summary><b>06. Developer Experience</b> — Experts en outillage et productivité des développeurs (14 agents)</summary>

### [06. Developer Experience](categories/06-developer-experience/)

- [**build-engineer**](categories/06-developer-experience/build-engineer.toml) - Spécialiste des systèmes de build
- [**cli-developer**](categories/06-developer-experience/cli-developer.toml) - Créateur d'outils en ligne de commande
- [**dependency-manager**](categories/06-developer-experience/dependency-manager.toml) - Spécialiste en paquets et dépendances
- [**documentation-engineer**](categories/06-developer-experience/documentation-engineer.toml) - Expert en documentation technique
- [**dx-optimizer**](categories/06-developer-experience/dx-optimizer.toml) - Spécialiste en optimisation de l'expérience développeur
- [**git-workflow-manager**](categories/06-developer-experience/git-workflow-manager.toml) - Expert en workflow et branches Git
- [**legacy-modernizer**](categories/06-developer-experience/legacy-modernizer.toml) - Spécialiste en modernisation de code hérité
- [**mcp-developer**](categories/06-developer-experience/mcp-developer.toml) - Spécialiste Model Context Protocol
- [**powershell-module-architect**](categories/06-developer-experience/powershell-module-architect.toml) - Spécialiste architecture modules et profils PowerShell
- [**powershell-ui-architect**](categories/06-developer-experience/powershell-ui-architect.toml) - Spécialiste PowerShell UI/UX pour WinForms, WPF, frameworks Metro et TUI
- [**readme-generator**](categories/06-developer-experience/readme-generator.toml) - Générateur README prêt pour mainteneurs, sans hallucination
- [**refactoring-specialist**](categories/06-developer-experience/refactoring-specialist.toml) - Expert en refactorisation de code
- [**slack-expert**](categories/06-developer-experience/slack-expert.toml) - Expert plateforme Slack et @slack/bolt
- [**tooling-engineer**](categories/06-developer-experience/tooling-engineer.toml) - Spécialiste en outillage développeur

</details>

<details>
<summary><b>07. Specialized Domains</b> — Experts techniques par domaine (14 agents)</summary>

### [07. Specialized Domains](categories/07-specialized-domains/)

- [**api-documenter**](categories/07-specialized-domains/api-documenter.toml) - Spécialiste en documentation d'API
- [**blockchain-developer**](categories/07-specialized-domains/blockchain-developer.toml) - Spécialiste Web3 et crypto
- [**embedded-systems**](categories/07-specialized-domains/embedded-systems.toml) - Expert en systèmes embarqués et temps réel
- [**fintech-engineer**](categories/07-specialized-domains/fintech-engineer.toml) - Spécialiste en technologie financière
- [**game-developer**](categories/07-specialized-domains/game-developer.toml) - Expert en développement de jeux
- [**healthcare-admin**](categories/07-specialized-domains/healthcare-admin.toml) - Spécialiste administration santé, cycle de revenus et conformité
- [**hipaa-compliance**](categories/07-specialized-domains/hipaa-compliance.toml) - Spécialiste conformité HIPAA pour éditeurs SaaS santé
- [**iot-engineer**](categories/07-specialized-domains/iot-engineer.toml) - Développeur de systèmes IoT
- [**m365-admin**](categories/07-specialized-domains/m365-admin.toml) - Spécialiste administration Microsoft 365, Exchange Online, Teams et SharePoint
- [**mobile-app-developer**](categories/07-specialized-domains/mobile-app-developer.toml) - Spécialiste en applications mobiles
- [**payment-integration**](categories/07-specialized-domains/payment-integration.toml) - Expert en systèmes de paiement
- [**quant-analyst**](categories/07-specialized-domains/quant-analyst.toml) - Spécialiste en analyse quantitative
- [**risk-manager**](categories/07-specialized-domains/risk-manager.toml) - Expert en évaluation et gestion des risques
- [**seo-specialist**](categories/07-specialized-domains/seo-specialist.toml) - Expert en optimisation pour moteurs de recherche

</details>

<details>
<summary><b>08. Business & Product</b> — Gestion de produit et analyse métier (17 agents)</summary>

### [08. Business & Product](categories/08-business-product/)

- [**assumption-mapping**](categories/08-business-product/assumption-mapping.toml) - Spécialiste risque et validation d'hypothèses produit
- [**backlog-grooming**](categories/08-business-product/backlog-grooming.toml) - Spécialiste en raffinement de backlog agile
- [**business-analyst**](categories/08-business-product/business-analyst.toml) - Spécialiste en exigences
- [**content-marketer**](categories/08-business-product/content-marketer.toml) - Spécialiste en marketing de contenu
- [**content-quality-editor**](categories/08-business-product/content-quality-editor.toml) - Spécialiste qualité et humanisation de contenu IA
- [**customer-success-manager**](categories/08-business-product/customer-success-manager.toml) - Expert en succès client
- [**growth-loops**](categories/08-business-product/growth-loops.toml) - Spécialiste en boucles de croissance et mécaniques PLG
- [**legal-advisor**](categories/08-business-product/legal-advisor.toml) - Spécialiste juridique et conformité
- [**license-engineer**](categories/08-business-product/license-engineer.toml) - Spécialiste en licence logicielle et systèmes de conformité
- [**product-manager**](categories/08-business-product/product-manager.toml) - Expert en stratégie produit
- [**project-manager**](categories/08-business-product/project-manager.toml) - Spécialiste en gestion de projet
- [**resume-refiner**](categories/08-business-product/resume-refiner.toml) - Spécialiste optimisation CV, résumé et profil LinkedIn
- [**sales-engineer**](categories/08-business-product/sales-engineer.toml) - Expert en vente technique
- [**scrum-master**](categories/08-business-product/scrum-master.toml) - Expert en méthodologie agile
- [**technical-writer**](categories/08-business-product/technical-writer.toml) - Spécialiste en documentation technique
- [**ux-researcher**](categories/08-business-product/ux-researcher.toml) - Expert en recherche utilisateur
- [**wordpress-master**](categories/08-business-product/wordpress-master.toml) - Expert en développement et optimisation WordPress

</details>

<details>
<summary><b>09. Meta & Orchestration</b> — Coordination d'agents et méta-programmation (12 agents)</summary>

### [09. Meta & Orchestration](categories/09-meta-orchestration/)

- [**agent-installer**](categories/09-meta-orchestration/agent-installer.toml) - Parcourt et installe des agents de ce dépôt via GitHub
- [**agent-organizer**](categories/09-meta-orchestration/agent-organizer.toml) - Coordinateur multi-agents
- [**codebase-orchestrator**](categories/09-meta-orchestration/codebase-orchestrator.toml) - Gouvernance de refactorisation à l'échelle du dépôt avec portes d'approbation
- [**context-manager**](categories/09-meta-orchestration/context-manager.toml) - Expert en optimisation de contexte
- [**error-coordinator**](categories/09-meta-orchestration/error-coordinator.toml) - Spécialiste en gestion et récupération d'erreurs
- [**it-ops-orchestrator**](categories/09-meta-orchestration/it-ops-orchestrator.toml) - Spécialiste en orchestration de workflows d'exploitation IT
- [**knowledge-synthesizer**](categories/09-meta-orchestration/knowledge-synthesizer.toml) - Expert en agrégation de connaissances
- [**multi-agent-coordinator**](categories/09-meta-orchestration/multi-agent-coordinator.toml) - Orchestration avancée multi-agents
- [**performance-monitor**](categories/09-meta-orchestration/performance-monitor.toml) - Optimisation des performances des agents
- [**pied-piper**](https://github.com/sathish316/pied-piper/) - Orchestre une équipe de sous-agents IA pour les workflows SDLC répétitifs
- [**task-distributor**](categories/09-meta-orchestration/task-distributor.toml) - Spécialiste en allocation de tâches
- [**workflow-orchestrator**](categories/09-meta-orchestration/workflow-orchestrator.toml) - Automatisation de workflows complexes

</details>

<details>
<summary><b>10. Research & Analysis</b> — Experts en recherche, recherche et analyse (12 agents)</summary>

### [10. Research & Analysis](categories/10-research-analysis/)

- [**ab-test-analysis**](categories/10-research-analysis/ab-test-analysis.toml) - Interprétation de tests A/B et décisions de déploiement
- [**cohort-analysis**](categories/10-research-analysis/cohort-analysis.toml) - Analyse rétention, comportement de cohortes et métriques d'activation
- [**competitive-analyst**](categories/10-research-analysis/competitive-analyst.toml) - Spécialiste en intelligence concurrentielle
- [**data-researcher**](categories/10-research-analysis/data-researcher.toml) - Expert en découverte et analyse de données
- [**docs-researcher**](categories/10-research-analysis/docs-researcher.toml) - Vérification d'API et frameworks documentés
- [**first-principles-thinking**](categories/10-research-analysis/first-principles-thinking.toml) - Résolution par pensée première principe, remettant en question les hypothèses
- [**market-researcher**](categories/10-research-analysis/market-researcher.toml) - Analyse de marché et insights consommateurs
- [**project-idea-validator**](categories/10-research-analysis/project-idea-validator.toml) - Testeur de pression brutal d'idées et stratège go/no-go
- [**research-analyst**](categories/10-research-analysis/research-analyst.toml) - Spécialiste en recherche comprehensive
- [**scientific-literature-researcher**](categories/10-research-analysis/scientific-literature-researcher.toml) - Recherche fondée sur des preuves issues d'études scientifiques publiées
- [**search-specialist**](categories/10-research-analysis/search-specialist.toml) - Expert en recherche d'information avancée
- [**trend-analyst**](categories/10-research-analysis/trend-analyst.toml) - Expert en tendances émergentes et prévisions

</details>

<details>
<summary><b>11. AI Governance & Safety</b> - Experts en gouvernance, garde-fous et IA de confiance (4 agents)</summary>

### [11. AI Governance & Safety](categories/11-ai-governance-safety/)

- [**ai-governance-auditor**](categories/11-ai-governance-safety/ai-governance-auditor.toml) - Auditeur des contrôles de gouvernance IA et revue de préparation au déploiement
- [**model-risk-manager**](categories/11-ai-governance-safety/model-risk-manager.toml) - Spécialiste priorisation et mitigation des modes de défaillance de modèles
- [**policy-guardrail-designer**](categories/11-ai-governance-safety/policy-guardrail-designer.toml) - Concepteur de garde-fous pour prompts, outils et workflows
- [**responsible-ai-reviewer**](categories/11-ai-governance-safety/responsible-ai-reviewer.toml) - Revue d'équité, usage abusif, transparence et supervision

</details>

<details>
<summary><b>12. Platform Engineering & IDP</b> - Experts en plateforme de développeur interne et golden paths (4 agents)</summary>

### [12. Platform Engineering & IDP](categories/12-platform-engineering-idp/)

- [**backstage-specialist**](categories/12-platform-engineering-idp/backstage-specialist.toml) - Spécialiste catalogues, modèles et portail Backstage
- [**golden-path-designer**](categories/12-platform-engineering-idp/golden-path-designer.toml) - Concepteur de workflows self-service opinionés
- [**idp-architect**](categories/12-platform-engineering-idp/idp-architect.toml) - Spécialiste en architecture de plateforme de développeur interne
- [**platform-product-manager**](categories/12-platform-engineering-idp/platform-product-manager.toml) - Spécialiste feuille de route, adoption et métriques de succès de plateforme

</details>

<details>
<summary><b>13. LLMOps, Evals & Observability</b> - Experts en qualité IA en production et visibilité runtime (4 agents)</summary>

### [13. LLMOps, Evals & Observability](categories/13-llmops-evals-observability/)

- [**ai-observability-engineer**](categories/13-llmops-evals-observability/ai-observability-engineer.toml) - Spécialiste traces, métriques et logs natifs IA
- [**eval-engineer**](categories/13-llmops-evals-observability/eval-engineer.toml) - Spécialiste en évaluation de prompts, outils et workflows
- [**hallucination-investigator**](categories/13-llmops-evals-observability/hallucination-investigator.toml) - Enquêteur sur factualité et rupture de contexte
- [**prompt-regression-tester**](categories/13-llmops-evals-observability/prompt-regression-tester.toml) - Concepteur de suites de régression pour changements de comportement IA

</details>

## Comprendre les sous-agents

Les sous-agents sont des assistants IA spécialisés qui renforcent les capacités de Codex en fournissant une expertise ciblée par tâche. Ils agissent comme des assistants dédiés que Codex peut solliciter face à certains types de travail.

### Qu'est-ce qui rend les sous-agents spéciaux ?

**Fenêtres de contexte indépendantes**
Chaque sous-agent opère dans son propre espace de contexte isolé, évitant toute contamination croisée entre différentes tâches et préservant la clarté du fil de conversation principal.

**Intelligence spécifique à un domaine**
Les sous-agents sont équipés d'instructions soigneusement rédigées pour leur domaine d'expertise, ce qui donne de meilleures performances sur les tâches spécialisées.

**Partagés entre les projets**
Après avoir créé un sous-agent, vous pouvez l'utiliser dans divers projets et le distribuer aux membres de l'équipe pour assurer des pratiques de développement cohérentes.

**Délégation explicite**
Codex ne lance pas de sous-agents automatiquement. Utilisez des invites de délégation explicites pour préciser quels agents lancer, comment diviser le travail et quelle forme doit prendre le résultat.

### Avantages clés

- **Efficacité mémoire** : les contextes isolés empêchent la conversation principale de se retrouver encombrée de détails spécifiques aux tâches
- **Précision accrue** : des prompts et configurations spécialisés donnent de meilleurs résultats dans des domaines précis
- **Cohérence des workflows** : le partage d'un sous-agent à l'échelle de l'équipe assure des approches uniformes pour les tâches courantes
- **Codex natif** : utilise des fichiers d'agent `.toml` alignés sur la documentation officielle des sous-agents Codex

### Exemples de workflows

**Workflow de revue PR :**
```text
Review this branch with parallel subagents. Have reviewer look for correctness, security, and missing tests. Have docs_researcher verify the framework APIs this patch depends on. Wait for both and summarize the findings with file references.
```

**Workflow d'investigation de bug :**
```text
Investigate the broken settings flow. Have code_mapper trace the owning code paths, browser_debugger reproduce the bug in the browser, and frontend_developer propose the smallest fix after the failure is understood. Wait for the read-heavy agents first, then continue.
```

**Workflow d'exploration et planification du dépôt :**
```text
Use search_specialist to locate the code related to payment retries, knowledge_synthesizer to summarize the current design, and refactoring_specialist to propose a minimal refactor plan. Return a concrete action list.
```

## Outils de l'écosystème IA Design + Build


<br/>

Vous livrez des produits avec l'IA, mais chaque lancement meurt en silence car personne n'en parle. [EveryFeed](https://everyfeed.ai/) branche votre assistant IA sur un espace de travail social qui rédige, planifie et publie sur plus de 35 canaux — sans agence, sans recrutement marketing.

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

## Contribution

Les contributions sont les bienvenues ! Consultez [CONTRIBUTING.md](CONTRIBUTING.md) pour les directives.

- Soumettez de nouveaux sous-agents via une PR
- Améliorez les définitions existantes
- Signalez les problèmes et bugs


## Licence

MIT License - voir [LICENSE](LICENSE)

Ce dépôt est une collection organisée de définitions de sous-agents contribuées par les mainteneurs et la communauté. Tous les sous-agents sont fournis « en l'état » sans garantie. Nous n'auditions ni ne garantissons la sécurité ou la correction d'aucun sous-agent. Vérifiez avant utilisation ; les mainteneurs n'acceptent aucune responsabilité pour tout problème découlant de leur utilisation.

Si vous trouvez un problème avec un sous-agent listé ou souhaitez retirer votre contribution, ouvrez une issue dans ce dépôt et nous la traiterons rapidement.
