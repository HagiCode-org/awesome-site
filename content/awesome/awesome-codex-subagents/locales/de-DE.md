<a href="https://github.com/VoltAgent/voltagent">
    <img width="1500" height="500" alt="codex" src="https://github.com/user-attachments/assets/35f56654-e3e7-4023-a7d5-acd5215455de" />
</a>

<br />
<br />

<div align="center">
    <strong>Die großartige Sammlung von über 175 Codex-Subagenten in 13 Kategorien.</strong>
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

# Hervorragende Codex Subagents

Dieses Repository ist die maßgebliche Sammlung von [Codex Subagents](https://developers.openai.com/codex/subagents), spezialisierten KI-Assistenten, die für bestimmte Entwicklungsaufgaben konzipiert sind. Speziell für Codex geschrieben und an der offiziellen Dokumentation ausgerichtet.

## Installation

Verwenden Sie die benutzerdefinierten Agent-Verzeichnisse von Codex genau wie dokumentiert:

- `~/.codex/agents/` für globale Agents (in allen Projekten verfügbar)
- `.codex/agents/` für projektspezifische Agents (höhere Priorität in diesem Repo)

1. Klonen Sie dieses Repository.
2. Kopieren Sie die gewünschten `.toml`-Agent-Dateien in eines der obigen Verzeichnisse.
3. Starten Sie Ihre Codex-Sitzung neu oder laden Sie sie bei Bedarf neu.
4. Delegieren Sie in Prompts explizit (Codex erzeugt keine benutzerdefinierten Subagenten automatisch).

Beispiele:
```bash
mkdir -p ~/.codex/agents
cp categories/01-core-development/backend-developer.toml ~/.codex/agents/
```

```bash
mkdir -p .codex/agents
cp categories/04-quality-security/reviewer.toml .codex/agents/
```

Wenn Sie die Agent-Konfiguration in Codex nutzen, bewahren Sie sie in `.codex/config.toml` unter `[agents]` auf, wie in der offiziellen Dokumentation beschrieben.


## Sponsoren

|                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing"><picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-dark-mode.svg"><img alt="Crawlbase" src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-light-mode.svg" width="425"></picture></a> | [Crawlbase](https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing) ist die von über 70.000 Entwicklern vertraute Web-Dateninfrastruktur. Ihre Crawling-API, der MCP-Server und Integrationen geben KI-Agenten Live-Zugriff auf jede Webseite — mit JavaScript-Rendering, Proxy-Rotation und Anti-Bot-Schutz. |
| <a href="https://serpapi.com/awesome-codex-subagents"><img alt="SerpApi" src="https://cdn.voltagent.dev/awesome-repo/serpapi/serpapi-logo.png" width="425"></a> | [SerpApi](https://serpapi.com/awesome-codex-subagents) ist eine Web-Such-API für Ihre KI-Apps. In Markdown und JSON für jede Integration verfügbar. |


<div align="center">

<table>
<tr>
<td align="center" width="100%">
<h4>👉 Sie können hier Ihr Produkt vorstellen und Entwickler erreichen, die KI-Coding-Agenten wie Claude Code, Codex, Gemini und mehr nutzen.</h4>
     
<a href="https://sponsors.voltagent.dev/#awesome-codex-subagents"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



### Speicherorte für Subagenten

| Type | Path | Availability | Precedence |
|------|------|--------------|------------|
| Project Subagents | `.codex/agents/` | Current project only | Higher |
| Global Subagents | `~/.codex/agents/` | All projects | Lower |

Hinweis: Bei Namenskonflikten überschreiben projektspezifische Subagenten die globalen.


## Struktur der Subagenten

Jeder Subagent verwendet ein Codex-natives `.toml`-Format:

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

### Intelligentes Modell-Routing

Jeder Subagent enthält ein `model`-Feld, das ihn automatisch an das richtige Modell weiterleitet — und dabei Qualität und Kosten ausbalanciert:

| Model | When It's Used | Examples |
|-------|----------------|----------|
| `gpt-5.6-sol` | Tiefes Denken — Architektur-Reviews, Sicherheitsaudits, Finanzlogik | `security-auditor`, `architect-reviewer`, `fintech-engineer` |
| `gpt-5.6-terra` | Implementierung, Diagnose, Evaluierung und mehrstufige fachliche Analyse | `docker-expert`, `test-automator`, `scientific-literature-researcher` |
| `gpt-5.6-luna` | Begrenzte Suche, Extraktion, Routing, Entwurf und leichte Synthese | `search-specialist`, `docs-researcher`, `agent-installer` |

### Sandbox-Modus-Philosophie

Das `sandbox_mode`-Feld jedes Subagenten steuert den Dateisystemzugriff:
- **Nur-Lese-Agenten** (Reviewer, Auditoren): `sandbox_mode = "read-only"` — analysieren ohne Änderung
- **Workspace-Schreib-Agenten** (Entwickler, Ingenieure): `sandbox_mode = "workspace-write"` — erstellen und ändern Dateien





## Kategorien

### [01. Core Development](categories/01-core-development/)

Wesentliche Entwicklungs-Subagenten für tägliche Codierungsaufgaben.

- [**api-designer**](categories/01-core-development/api-designer.toml) - REST- und GraphQL-API-Architekt
- [**backend-developer**](categories/01-core-development/backend-developer.toml) - Server-seitiger Experte für skalierbare APIs
- [**code-mapper**](categories/01-core-development/code-mapper.toml) - Code-Pfad-Mapping und Eigentümerschaftsgrenzen-Analyse
- [**design-bridge**](categories/01-core-development/design-bridge.toml) - Übersetzt DESIGN.md-Spezifikationen in implementierungsbereite UI-Anweisungen
- [**electron-pro**](categories/01-core-development/electron-pro.toml) - Desktop-Anwendungs-Experte
- [**frontend-developer**](categories/01-core-development/frontend-developer.toml) - UI/UX-Spezialist für React, Vue und Angular
- [**fullstack-developer**](categories/01-core-development/fullstack-developer.toml) - End-to-End-Funktionsentwicklung
- [**graphql-architect**](categories/01-core-development/graphql-architect.toml) - GraphQL-Schema- und Föderations-Experte
- [**microservices-architect**](categories/01-core-development/microservices-architect.toml) - Verteilter Systeme-Designer
- [**mobile-developer**](categories/01-core-development/mobile-developer.toml) - Plattformübergreifender Mobil-Experte
- [**ui-designer**](categories/01-core-development/ui-designer.toml) - Visuelles Design- und Interaktions-Spezialist
- [**ui-fixer**](categories/01-core-development/ui-fixer.toml) - Kleinster sicherer Patch für reproduzierte UI-Probleme
- [**websocket-engineer**](categories/01-core-development/websocket-engineer.toml) - Echtzeit-Kommunikations-Spezialist

### [02. Language Specialists](categories/02-language-specialists/)

Sprachspezifische Experten mit tiefem Framework-Wissen.
- [**angular-architect**](categories/02-language-specialists/angular-architect.toml) - Angular-15+-Unternehmensmuster-Experte
- [**cpp-pro**](categories/02-language-specialists/cpp-pro.toml) - C++-Performance-Experte
- [**csharp-developer**](categories/02-language-specialists/csharp-developer.toml) - .NET-Ökosystem-Spezialist
- [**django-developer**](categories/02-language-specialists/django-developer.toml) - Django-4+-Webentwicklungs-Experte
- [**dotnet-core-expert**](categories/02-language-specialists/dotnet-core-expert.toml) - .NET-8-Plattformübergreifend-Spezialist
- [**dotnet-framework-4.8-expert**](categories/02-language-specialists/dotnet-framework-4.8-expert.toml) - .NET-Framework-Legacy-Unternehmens-Spezialist
- [**elixir-expert**](categories/02-language-specialists/elixir-expert.toml) - Elixir- und OTP-Fehlertoleranzsysteme-Experte
- [**erlang-expert**](categories/02-language-specialists/erlang-expert.toml) - Erlang/OTP- und rebar3-Engineering-Experte
- [**expo-react-native-expert**](categories/02-language-specialists/expo-react-native-expert.toml) - Expo- und React-Native-Mobilentwicklungs-Experte
- [**fastapi-developer**](categories/02-language-specialists/fastapi-developer.toml) - Moderner asynchroner Python-API-Framework-Experte
- [**flutter-expert**](categories/02-language-specialists/flutter-expert.toml) - Flutter-3+ plattformübergreifender Mobil-Experte
- [**golang-pro**](categories/02-language-specialists/golang-pro.toml) - Go-Concurrency-Spezialist
- [**java-architect**](categories/02-language-specialists/java-architect.toml) - Enterprise-Java-Experte
- [**javascript-pro**](categories/02-language-specialists/javascript-pro.toml) - JavaScript-Entwicklungs-Experte
- [**kotlin-specialist**](categories/02-language-specialists/kotlin-specialist.toml) - Moderner JVM-Sprachen-Experte
- [**laravel-specialist**](categories/02-language-specialists/laravel-specialist.toml) - Laravel-10+ PHP-Framework-Experte
- [**symfony-specialist**](categories/02-language-specialists/symfony-specialist.toml) - Symfony-Anwendungs- und Doctrine-Spezialist
- [**nextjs-developer**](categories/02-language-specialists/nextjs-developer.toml) - Next.js-14+ Full-Stack-Spezialist
- [**node-specialist**](categories/02-language-specialists/node-specialist.toml) - Node.js-Backend-Spezialist
- [**php-pro**](categories/02-language-specialists/php-pro.toml) - PHP-Webentwicklungs-Experte
- [**powershell-5.1-expert**](categories/02-language-specialists/powershell-5.1-expert.toml) - Windows PowerShell 5.1 und vollständiges .NET Framework Automatisierungs-Spezialist
- [**powershell-7-expert**](categories/02-language-specialists/powershell-7-expert.toml) - Plattformübergreifendes PowerShell 7+ Automatisierung und moderner .NET-Spezialist
- [**python-pro**](categories/02-language-specialists/python-pro.toml) - Python-Ökosystem-Meister
- [**rails-expert**](categories/02-language-specialists/rails-expert.toml) - Rails-8.1-Schnellentwicklungs-Experte
- [**react-specialist**](categories/02-language-specialists/react-specialist.toml) - React-18+ moderne Muster-Experte
- [**rust-engineer**](categories/02-language-specialists/rust-engineer.toml) - Systemprogrammierung-Experte
- [**spring-boot-engineer**](categories/02-language-specialists/spring-boot-engineer.toml) - Spring-Boot-3+ Microservices-Experte
- [**sql-pro**](categories/02-language-specialists/sql-pro.toml) - Datenbankabfrage-Experte
- [**swift-expert**](categories/02-language-specialists/swift-expert.toml) - iOS- und macOS-Spezialist
- [**typescript-pro**](categories/02-language-specialists/typescript-pro.toml) - TypeScript-Spezialist
- [**vue-expert**](categories/02-language-specialists/vue-expert.toml) - Vue-3-Composition-API-Experte

### [03. Infrastructure](categories/03-infrastructure/)

DevOps-, Cloud- und Deployment-Spezialisten.

- [**azure-infra-engineer**](categories/03-infrastructure/azure-infra-engineer.toml) - Azure-Infrastruktur und Az-PowerShell-Automatisierungs-Experte
- [**cloud-architect**](categories/03-infrastructure/cloud-architect.toml) - AWS/GCP/Azure-Spezialist
- [**database-administrator**](categories/03-infrastructure/database-administrator.toml) - Datenbankverwaltungs-Experte
- [**deployment-engineer**](categories/03-infrastructure/deployment-engineer.toml) - Deployment-Automatisierungs-Spezialist
- [**devops-engineer**](categories/03-infrastructure/devops-engineer.toml) - CI/CD- und Automatisierungs-Experte
- [**devops-incident-responder**](categories/03-infrastructure/devops-incident-responder.toml) - DevOps-Vorfallmanagement
- [**docker-expert**](categories/03-infrastructure/docker-expert.toml) - Docker-Containerisierung und Optimierung-Experte
- [**incident-responder**](categories/03-infrastructure/incident-responder.toml) - System-Vorfallreaktions-Experte
- [**kubernetes-specialist**](categories/03-infrastructure/kubernetes-specialist.toml) - Container-Orchestrierungs-Meister
- [**network-engineer**](categories/03-infrastructure/network-engineer.toml) - Netzwerkinfrastruktur-Spezialist
- [**platform-engineer**](categories/03-infrastructure/platform-engineer.toml) - Plattformarchitektur-Experte
- [**security-engineer**](categories/03-infrastructure/security-engineer.toml) - Infrastruktursicherheits-Spezialist
- [**sre-engineer**](categories/03-infrastructure/sre-engineer.toml) - Site-Reliability-Engineering-Experte
- [**terraform-engineer**](categories/03-infrastructure/terraform-engineer.toml) - Infrastructure-as-Code-Experte
- [**terragrunt-expert**](categories/03-infrastructure/terragrunt-expert.toml) - Terragrunt-Orchestrierung und DRY-IaC-Spezialist
- [**windows-infra-admin**](categories/03-infrastructure/windows-infra-admin.toml) - Active Directory, DNS, DHCP und GPO Automatisierungs-Spezialist

<details>
<summary><b>04. Quality & Security</b> — Test-, Sicherheits- und Code-Qualitätsexperten (20 Agenten)</summary>

### [04. Quality & Security](categories/04-quality-security/)

- [**accessibility-tester**](categories/04-quality-security/accessibility-tester.toml) - A11y-Compliance-Experte
- [**ad-security-reviewer**](categories/04-quality-security/ad-security-reviewer.toml) - Active-Directory-Sicherheits- und GPO-Audit-Spezialist
- [**anti-ui-slop-reviewer**](categories/04-quality-security/anti-ui-slop-reviewer.toml) - Produktspezifischer UI-Abschluss-Gate-Reviewer
- [**ai-writing-auditor**](categories/04-quality-security/ai-writing-auditor.toml) - KI-Schreibmuster-Auditor und-Umschreiber
- [**architect-reviewer**](categories/04-quality-security/architect-reviewer.toml) - Architektur-Review-Spezialist
- [**browser-debugger**](categories/04-quality-security/browser-debugger.toml) - Browser-basierte Reproduktion und clientseitiges Debugging
- [**chaos-engineer**](categories/04-quality-security/chaos-engineer.toml) - System-Resilienz-Test-Experte
- [**code-reviewer**](categories/04-quality-security/code-reviewer.toml) - Code-Qualitäts-Wächter
- [**compliance-auditor**](categories/04-quality-security/compliance-auditor.toml) - Regulatorischer Compliance-Experte
- [**debugger**](categories/04-quality-security/debugger.toml) - Fortgeschrittener Debugging-Spezialist
- [**error-detective**](categories/04-quality-security/error-detective.toml) - Fehleranalyse- und Lösungs-Experte
- [**gdpr-ccpa-compliance**](categories/04-quality-security/gdpr-ccpa-compliance.toml) - GDPR- und CCPA-Datenschutz-Compliance-Spezialist
- [**penetration-tester**](categories/04-quality-security/penetration-tester.toml) - Ethischer Hacking-Spezialist
- [**performance-engineer**](categories/04-quality-security/performance-engineer.toml) - Performance-Optimierung-Experte
- [**powershell-security-hardening**](categories/04-quality-security/powershell-security-hardening.toml) - PowerShell-Sicherheitshärtung und Compliance-Spezialist
- [**qa-expert**](categories/04-quality-security/qa-expert.toml) - Testautomatisierungs-Spezialist
- [**reviewer**](categories/04-quality-security/reviewer.toml) - PR-artige Review für Korrektheit, Sicherheit und Regressionen
- [**security-auditor**](categories/04-quality-security/security-auditor.toml) - Sicherheits-Schwachstellen-Experte
- [**test-automator**](categories/04-quality-security/test-automator.toml) - Testautomatisierungs-Framework-Experte
- [**ui-ux-tester**](categories/04-quality-security/ui-ux-tester.toml) - Erschöpfender UI/UX-Funktionstest-Spezialist

</details>

<details>
<summary><b>05. Data & AI</b> — Datenengineering-, ML- und KI-Spezialisten (14 Agenten)</summary>

### [05. Data & AI](categories/05-data-ai/)

- [**ai-engineer**](categories/05-data-ai/ai-engineer.toml) - KI-Systemdesign- und Deployment-Experte
- [**azure-databricks-platform-architect**](categories/05-data-ai/azure-databricks-platform-architect.toml) - Azure Databricks Plattform- und Lakehouse-Architekt
- [**data-analyst**](categories/05-data-ai/data-analyst.toml) - Daten-Erkenntnisse und Visualisierungs-Spezialist
- [**data-engineer**](categories/05-data-ai/data-engineer.toml) - Datenpipeline-Architekt
- [**data-scientist**](categories/05-data-ai/data-scientist.toml) - Analyse- und Erkenntnis-Experte
- [**database-optimizer**](categories/05-data-ai/database-optimizer.toml) - Datenbank-Performance-Spezialist
- [**llm-architect**](categories/05-data-ai/llm-architect.toml) - Large-Language-Model-Architekt
- [**machine-learning-engineer**](categories/05-data-ai/machine-learning-engineer.toml) - Machine-Learning-Systeme-Experte
- [**ml-engineer**](categories/05-data-ai/ml-engineer.toml) - Machine-Learning-Spezialist
- [**mlops-engineer**](categories/05-data-ai/mlops-engineer.toml) - MLOps- und Modell-Deployment-Experte
- [**nlp-engineer**](categories/05-data-ai/nlp-engineer.toml) - Natural-Language-Processing-Experte
- [**postgres-pro**](categories/05-data-ai/postgres-pro.toml) - PostgreSQL-Datenbank-Experte
- [**prompt-engineer**](categories/05-data-ai/prompt-engineer.toml) - Prompt-Optimierung-Spezialist
- [**reinforcement-learning-engineer**](categories/05-data-ai/reinforcement-learning-engineer.toml) - Reinforcement-Learning- und Entscheidungssysteme-Experte

</details>

<details>
<summary><b>06. Developer Experience</b> — Tooling- und Entwicklerproduktivitäts-Experten (14 Agenten)</summary>

### [06. Developer Experience](categories/06-developer-experience/)

- [**build-engineer**](categories/06-developer-experience/build-engineer.toml) - Build-System-Spezialist
- [**cli-developer**](categories/06-developer-experience/cli-developer.toml) - Kommandozeilen-Tool-Ersteller
- [**dependency-manager**](categories/06-developer-experience/dependency-manager.toml) - Paket- und Abhängigkeits-Spezialist
- [**documentation-engineer**](categories/06-developer-experience/documentation-engineer.toml) - Technische Dokumentation-Experte
- [**dx-optimizer**](categories/06-developer-experience/dx-optimizer.toml) - Developer-Experience-Optimierung-Spezialist
- [**git-workflow-manager**](categories/06-developer-experience/git-workflow-manager.toml) - Git-Workflow- und Branching-Experte
- [**legacy-modernizer**](categories/06-developer-experience/legacy-modernizer.toml) - Legacy-Code-Modernisierung-Spezialist
- [**mcp-developer**](categories/06-developer-experience/mcp-developer.toml) - Model-Context-Protocol-Spezialist
- [**powershell-module-architect**](categories/06-developer-experience/powershell-module-architect.toml) - PowerShell-Modul- und Profil-Architektur-Spezialist
- [**powershell-ui-architect**](categories/06-developer-experience/powershell-ui-architect.toml) - PowerShell-UI/UX-Spezialist für WinForms, WPF, Metro-Frameworks und TUIs
- [**readme-generator**](categories/06-developer-experience/readme-generator.toml) - Maintainer-fertiger README-Generator ohne Halluzinationen
- [**refactoring-specialist**](categories/06-developer-experience/refactoring-specialist.toml) - Code-Refactoring-Experte
- [**slack-expert**](categories/06-developer-experience/slack-expert.toml) - Slack-Plattform und @slack/bolt-Spezialist
- [**tooling-engineer**](categories/06-developer-experience/tooling-engineer.toml) - Entwickler-Tooling-Spezialist

</details>

<details>
<summary><b>07. Specialized Domains</b> — Domänenspezifische Technologie-Experten (14 Agenten)</summary>

### [07. Specialized Domains](categories/07-specialized-domains/)

- [**api-documenter**](categories/07-specialized-domains/api-documenter.toml) - API-Dokumentation-Spezialist
- [**blockchain-developer**](categories/07-specialized-domains/blockchain-developer.toml) - Web3- und Krypto-Spezialist
- [**embedded-systems**](categories/07-specialized-domains/embedded-systems.toml) - Embedded- und Echtzeitsysteme-Experte
- [**fintech-engineer**](categories/07-specialized-domains/fintech-engineer.toml) - Finanztechnologie-Spezialist
- [**game-developer**](categories/07-specialized-domains/game-developer.toml) - Spielentwicklungs-Experte
- [**healthcare-admin**](categories/07-specialized-domains/healthcare-admin.toml) - Healthcare-Administration, Revenue Cycle und Compliance-Spezialist
- [**hipaa-compliance**](categories/07-specialized-domains/hipaa-compliance.toml) - HIPAA-Compliance-Spezialist für Healthcare-SaaS-Anbieter
- [**iot-engineer**](categories/07-specialized-domains/iot-engineer.toml) - IoT-System-Entwickler
- [**m365-admin**](categories/07-specialized-domains/m365-admin.toml) - Microsoft 365, Exchange Online, Teams und SharePoint Administration-Spezialist
- [**mobile-app-developer**](categories/07-specialized-domains/mobile-app-developer.toml) - Mobile-Anwendungs-Spezialist
- [**payment-integration**](categories/07-specialized-domains/payment-integration.toml) - Zahlungssysteme-Experte
- [**quant-analyst**](categories/07-specialized-domains/quant-analyst.toml) - Quantitative Analyse-Spezialist
- [**risk-manager**](categories/07-specialized-domains/risk-manager.toml) - Risikobewertungs- und Management-Experte
- [**seo-specialist**](categories/07-specialized-domains/seo-specialist.toml) - Suchmaschinenoptimierung-Experte

</details>

<details>
<summary><b>08. Business & Product</b> — Produktmanagement und Business-Analyse (17 Agenten)</summary>

### [08. Business & Product](categories/08-business-product/)

- [**assumption-mapping**](categories/08-business-product/assumption-mapping.toml) - Produkt-Annahme-Risiko- und Validierungs-Spezialist
- [**backlog-grooming**](categories/08-business-product/backlog-grooming.toml) - Agile-Backlog-Verfeinerungs-Spezialist
- [**business-analyst**](categories/08-business-product/business-analyst.toml) - Anforderungs-Spezialist
- [**content-marketer**](categories/08-business-product/content-marketer.toml) - Content-Marketing-Spezialist
- [**content-quality-editor**](categories/08-business-product/content-quality-editor.toml) - KI-Content-Qualität und Humanisierung-Spezialist
- [**customer-success-manager**](categories/08-business-product/customer-success-manager.toml) - Customer-Success-Experte
- [**growth-loops**](categories/08-business-product/growth-loops.toml) - Growth-Loop- und PLG-Mechanik-Spezialist
- [**legal-advisor**](categories/08-business-product/legal-advisor.toml) - Rechts- und Compliance-Spezialist
- [**license-engineer**](categories/08-business-product/license-engineer.toml) - Software-Lizenzierung und Compliance-Systeme-Spezialist
- [**product-manager**](categories/08-business-product/product-manager.toml) - Produktstrategie-Experte
- [**project-manager**](categories/08-business-product/project-manager.toml) - Projektmanagement-Spezialist
- [**resume-refiner**](categories/08-business-product/resume-refiner.toml) - Lebenslauf-, CV- und LinkedIn-Profil-Optimierung-Spezialist
- [**sales-engineer**](categories/08-business-product/sales-engineer.toml) - Technischer Vertrieb-Experte
- [**scrum-master**](categories/08-business-product/scrum-master.toml) - Agile-Methodik-Experte
- [**technical-writer**](categories/08-business-product/technical-writer.toml) - Technische Dokumentation-Spezialist
- [**ux-researcher**](categories/08-business-product/ux-researcher.toml) - User-Research-Experte
- [**wordpress-master**](categories/08-business-product/wordpress-master.toml) - WordPress-Entwicklungs- und Optimierung-Experte

</details>

<details>
<summary><b>09. Meta & Orchestration</b> — Agent-Koordination und Meta-Programmierung (12 Agenten)</summary>

### [09. Meta & Orchestration](categories/09-meta-orchestration/)

- [**agent-installer**](categories/09-meta-orchestration/agent-installer.toml) - Durchsucht und installiert Agents aus diesem Repository über GitHub
- [**agent-organizer**](categories/09-meta-orchestration/agent-organizer.toml) - Multi-Agent-Koordinator
- [**codebase-orchestrator**](categories/09-meta-orchestration/codebase-orchestrator.toml) - Repo-weite Refactor-Governance mit Freigabe-Gates
- [**context-manager**](categories/09-meta-orchestration/context-manager.toml) - Kontext-Optimierung-Experte
- [**error-coordinator**](categories/09-meta-orchestration/error-coordinator.toml) - Fehlerbehandlungs- und Recovery-Spezialist
- [**it-ops-orchestrator**](categories/09-meta-orchestration/it-ops-orchestrator.toml) - IT-Betriebs-Workflow-Orchestrierungs-Spezialist
- [**knowledge-synthesizer**](categories/09-meta-orchestration/knowledge-synthesizer.toml) - Wissensaggregations-Experte
- [**multi-agent-coordinator**](categories/09-meta-orchestration/multi-agent-coordinator.toml) - Fortgeschrittene Multi-Agent-Orchestrierung
- [**performance-monitor**](categories/09-meta-orchestration/performance-monitor.toml) - Agent-Performance-Optimierung
- [**pied-piper**](https://github.com/sathish316/pied-piper/) - Orchestriert ein Team von KI-Subagenten für repetitive SDLC-Workflows
- [**task-distributor**](categories/09-meta-orchestration/task-distributor.toml) - Aufgabenverteilungs-Spezialist
- [**workflow-orchestrator**](categories/09-meta-orchestration/workflow-orchestrator.toml) - Komplexe Workflow-Automatisierung

</details>

<details>
<summary><b>10. Research & Analysis</b> — Forschungs-, Such- und Analyse-Spezialisten (12 Agenten)</summary>

### [10. Research & Analysis](categories/10-research-analysis/)

- [**ab-test-analysis**](categories/10-research-analysis/ab-test-analysis.toml) - A/B-Test-Interpretation und Ship/No-Ship-Entscheidungen
- [**cohort-analysis**](categories/10-research-analysis/cohort-analysis.toml) - Retention-, Kohortenverhalten- und Aktivierungsmetrik-Analyse
- [**competitive-analyst**](categories/10-research-analysis/competitive-analyst.toml) - Wettbewerbsintelligenz-Spezialist
- [**data-researcher**](categories/10-research-analysis/data-researcher.toml) - Datenentdeckungs- und Analyse-Experte
- [**docs-researcher**](categories/10-research-analysis/docs-researcher.toml) - Dokumentationsgestützte API- und Framework-Verifikation
- [**first-principles-thinking**](categories/10-research-analysis/first-principles-thinking.toml) - Annahmen hinterfragendes, erstprinzipielles Problemlösen
- [**market-researcher**](categories/10-research-analysis/market-researcher.toml) - Marktanalyse und Verbraucher-Erkenntnisse
- [**project-idea-validator**](categories/10-research-analysis/project-idea-validator.toml) - Brutaler Ideen-Stresstest und Go/No-Go-Strategist
- [**research-analyst**](categories/10-research-analysis/research-analyst.toml) - Umfassender Forschungs-Spezialist
- [**scientific-literature-researcher**](categories/10-research-analysis/scientific-literature-researcher.toml) - Evidenzbasierte Forschung aus veröffentlichten wissenschaftlichen Studien
- [**search-specialist**](categories/10-research-analysis/search-specialist.toml) - Fortgeschrittener Informationsretrieval-Experte
- [**trend-analyst**](categories/10-research-analysis/trend-analyst.toml) - Aufkommende Trends und Forecasting-Experte

</details>

<details>
<summary><b>11. AI Governance & Safety</b> - Governance-, Guardrail- und vertrauenswürdige-KI-Spezialisten (4 Agenten)</summary>

### [11. AI Governance & Safety](categories/11-ai-governance-safety/)

- [**ai-governance-auditor**](categories/11-ai-governance-safety/ai-governance-auditor.toml) - KI-Governance-Kontrollen und Deployment-Readiness-Reviewer
- [**model-risk-manager**](categories/11-ai-governance-safety/model-risk-manager.toml) - Modell-Fehlermodus-Priorisierung und Mitigation-Spezialist
- [**policy-guardrail-designer**](categories/11-ai-governance-safety/policy-guardrail-designer.toml) - Prompt-, Tool- und Workflow-Guardrail-Designer
- [**responsible-ai-reviewer**](categories/11-ai-governance-safety/responsible-ai-reviewer.toml) - Fairness-, Missbrauchs-, Transparenz- und Oversight-Reviewer

</details>

<details>
<summary><b>12. Platform Engineering & IDP</b> - Interne Entwicklerplattform und Golden-Path-Spezialisten (4 Agenten)</summary>

### [12. Platform Engineering & IDP](categories/12-platform-engineering-idp/)

- [**backstage-specialist**](categories/12-platform-engineering-idp/backstage-specialist.toml) - Backstage-Katalog-, Templates- und Portal-Spezialist
- [**golden-path-designer**](categories/12-platform-engineering-idp/golden-path-designer.toml) - Opinionsstarker Self-Service-Workflow-Designer
- [**idp-architect**](categories/12-platform-engineering-idp/idp-architect.toml) - Interne Entwicklerplattform-Architektur-Spezialist
- [**platform-product-manager**](categories/12-platform-engineering-idp/platform-product-manager.toml) - Plattform-Roadmap-, Adoption- und Erfolgsmetrik-Spezialist

</details>

<details>
<summary><b>13. LLMOps, Evals & Observability</b> - Produktions-KI-Qualität und Laufzeit-Sichtbarkeit-Spezialisten (4 Agenten)</summary>

### [13. LLMOps, Evals & Observability](categories/13-llmops-evals-observability/)

- [**ai-observability-engineer**](categories/13-llmops-evals-observability/ai-observability-engineer.toml) - KI-native Traces, Metriken und Logging-Spezialist
- [**eval-engineer**](categories/13-llmops-evals-observability/eval-engineer.toml) - Prompt-, Tool- und Workflow-Evaluierung-Spezialist
- [**hallucination-investigator**](categories/13-llmops-evals-observability/hallucination-investigator.toml) - Faktizitäts- und Kontext-Zusammenbruch-Ursachen-Ermittler
- [**prompt-regression-tester**](categories/13-llmops-evals-observability/prompt-regression-tester.toml) - Regression-Suite-Designer für KI-Verhaltensänderungen

</details>

## Subagenten verstehen

Subagenten sind spezialisierte KI-Assistenten, die die Fähigkeiten von Codex durch aufgabenspezifische Expertise erweitern. Sie fungieren als dedizierte Helfer, die Codex bei bestimmten Arbeitsarten hinzuziehen kann.

### Was Subagenten besonders macht

**Unabhängige Kontextfenster**
Jeder Subagent arbeitet in seinem eigenen isolierten Kontextraum und verhindert so eine Kreuzkontamination zwischen verschiedenen Aufgaben sowie die Klarheit im primären Konversationsfaden.

**Domänenspezifische Intelligenz**
Subagenten verfügen über sorgfältig erstellte Anweisungen für ihren Fachbereich, was zu überlegener Leistung bei Spezialaufgaben führt.

**Projektübergreifend geteilt**
Nach dem Erstellen eines Subagenten können Sie ihn in verschiedenen Projekten nutzen und an Teammitglieder verteilen, um konsistente Entwicklungspraktiken sicherzustellen.

**Explizite Delegation**
Codex erzeugt keine Subagenten automatisch. Verwenden Sie explizite Delegations-Prompts, um festzulegen, welche Agents gestartet, wie die Arbeit aufgeteilt und welche Form das Ergebnis haben soll.

### Kernvorteile

- **Speichereffizienz**: Isolierte Kontexte verhindern, dass der Hauptdialog mit aufgabenspezifischen Details zugemüllt wird
- **Höhere Genauigkeit**: Spezialisierte Prompts und Konfigurationen führen zu besseren Ergebnissen in bestimmten Domänen
- **Workflow-Konsistenz**: Teamweites Subagent-Sharing sorgt für einheitliche Ansätze bei häufigen Aufgaben
- **Codex-nativ**: Verwendet `.toml`-Agent-Dateien, die an die offizielle Codex-Subagent-Dokumentation angelehnt sind

### Beispiel-Workflows

**PR-Review-Workflow:**
```text
Review this branch with parallel subagents. Have reviewer look for correctness, security, and missing tests. Have docs_researcher verify the framework APIs this patch depends on. Wait for both and summarize the findings with file references.
```

**Bug-Untersuchungs-Workflow:**
```text
Investigate the broken settings flow. Have code_mapper trace the owning code paths, browser_debugger reproduce the bug in the browser, and frontend_developer propose the smallest fix after the failure is understood. Wait for the read-heavy agents first, then continue.
```

**Repo-Explorations- und Planungs-Workflow:**
```text
Use search_specialist to locate the code related to payment retries, knowledge_synthesizer to summarize the current design, and refactoring_specialist to propose a minimal refactor plan. Return a concrete action list.
```

## AI Design + Build Ecosystem Tools


<br/>

Sie liefern Produkte mit KI, aber jeder Launch stirbt still, weil niemand darüber postet. [EveryFeed](https://everyfeed.ai/) verbindet Ihren KI-Assistenten mit einem Social-Workspace, der über 35+ Kanäle entwirft, plant und veröffentlicht — ohne Agentur, ohne Marketing-Einstellung.

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

## Mitwirken

Wir freuen uns über Beiträge! Siehe [CONTRIBUTING.md](CONTRIBUTING.md) für Richtlinien.

- Reichen Sie neue Subagenten per PR ein
- Verbessern Sie bestehende Definitionen
- Melden Sie Probleme und Bugs


## Lizenz

MIT License - siehe [LICENSE](LICENSE)

Dieses Repository ist eine kuratierte Sammlung von Subagent-Definitionen, zu denen sowohl die Maintainer als auch die Community beigetragen haben. Alle Subagenten werden „wie besehen" ohne Gewähr bereitgestellt. Wir auditieren oder garantieren weder die Sicherheit noch die Korrektheit eines Subagenten. Prüfen Sie vor der Nutzung; die Maintainer übernehmen keine Haftung für Probleme, die aus deren Verwendung entstehen.

Wenn Sie ein Problem mit einem gelisteten Subagenten finden oder Ihren Beitrag entfernt haben möchten, eröffnen Sie bitte ein Issue in diesem Repository, und wir kümmern uns umgehend darum.
