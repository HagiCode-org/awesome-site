<a href="https://github.com/VoltAgent/voltagent">
    <img width="1500" height="500" alt="codex" src="https://github.com/user-attachments/assets/35f56654-e3e7-4023-a7d5-acd5215455de" />
</a>

<br />
<br />

<div align="center">
    <strong>A coleção excepcional de mais de 175 subagentes Codex em 13 categorias.</strong>
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

# Excelentes Codex Subagents

Este repositório é a coleção definitiva de [Codex Subagents](https://developers.openai.com/codex/subagents), assistentes de IA especializados projetados para tarefas específicas de desenvolvimento. Escrito especificamente para o Codex e alinhado com a documentação oficial.

## Instalação

Use os diretórios de agentes personalizados do Codex exatamente como documentado:

- `~/.codex/agents/` para agentes globais (disponíveis em todos os projetos)
- `.codex/agents/` para agentes específicos do projeto (maior precedência naquele repositório)

1. Clone este repositório.
2. Copie os arquivos de agente `.toml` desejados para um dos diretórios acima.
3. Reinicie ou atualize sua sessão do Codex se necessário.
4. Delege explicitamente nos prompts (o Codex não gera subagentes personalizados automaticamente).

Exemplos:
```bash
mkdir -p ~/.codex/agents
cp categories/01-core-development/backend-developer.toml ~/.codex/agents/
```

```bash
mkdir -p .codex/agents
cp categories/04-quality-security/reviewer.toml .codex/agents/
```

Se você usa configuração de agentes no Codex, mantenha-a em `.codex/config.toml` sob `[agents]` conforme descrito na documentação oficial.


## Patrocinadores

|                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing"><picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-dark-mode.svg"><img alt="Crawlbase" src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-light-mode.svg" width="425"></picture></a> | [Crawlbase](https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing) é a infraestrutura de dados web na qual confiam mais de 70.000 desenvolvedores. Sua API de Crawling, servidor MCP e integrações dão aos agentes de IA acesso ao vivo a qualquer página web — com renderização JavaScript, rotação de proxies e proteção anti-bot. |
| <a href="https://serpapi.com/awesome-codex-subagents"><img alt="SerpApi" src="https://cdn.voltagent.dev/awesome-repo/serpapi/serpapi-logo.png" width="425"></a> | [SerpApi](https://serpapi.com/awesome-codex-subagents) é uma API de busca web para suas apps de IA. Disponível em Markdown e JSON para qualquer integração. |


<div align="center">

<table>
<tr>
<td align="center" width="100%">
<h4>👉 Você pode expor seu produto aqui e alcançar desenvolvedores que usam agentes de codificação de IA como Claude Code, Codex, Gemini e mais.</h4>
     
<a href="https://sponsors.voltagent.dev/#awesome-codex-subagents"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



### Locais de armazenamento de subagentes

| Type | Path | Availability | Precedence |
|------|------|--------------|------------|
| Project Subagents | `.codex/agents/` | Current project only | Higher |
| Global Subagents | `~/.codex/agents/` | All projects | Lower |

Observação: Quando ocorrem conflitos de nomes, os subagentes específicos do projeto substituem os globais.


## Estrutura dos subagentes

Cada subagente usa um formato `.toml` nativo do Codex:

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

### Roteamento inteligente de modelos

Cada subagente inclui um campo `model` que o encaminha automaticamente para o modelo certo — equilibrando qualidade e custo:

| Model | When It's Used | Examples |
|-------|----------------|----------|
| `gpt-5.6-sol` | Raciocínio profundo — revisões de arquitetura, auditorias de segurança, lógica financeira | `security-auditor`, `architect-reviewer`, `fintech-engineer` |
| `gpt-5.6-terra` | Implementação, diagnóstico, avaliação e análise profissional multi-etapas | `docker-expert`, `test-automator`, `scientific-literature-researcher` |
| `gpt-5.6-luna` | Busca limitada, extração, roteamento, redação e síntese leve | `search-specialist`, `docs-researcher`, `agent-installer` |

### Filosofia do modo sandbox

O campo `sandbox_mode` de cada subagente controla o acesso ao sistema de arquivos:
- **Agentes somente leitura** (revisores, auditores): `sandbox_mode = "read-only"` — analisam sem modificar
- **Agentes de escrita no workspace** (desenvolvedores, engenheiros): `sandbox_mode = "workspace-write"` — criam e modificam arquivos





## Categorias

### [01. Core Development](categories/01-core-development/)

Subagentes de desenvolvimento essenciais para tarefas de codificação do dia a dia.

- [**api-designer**](categories/01-core-development/api-designer.toml) - Arquiteto de API REST e GraphQL
- [**backend-developer**](categories/01-core-development/backend-developer.toml) - Especialista no lado do servidor para APIs escaláveis
- [**code-mapper**](categories/01-core-development/code-mapper.toml) - Mapeamento de caminhos de código e análise de limites de propriedade
- [**design-bridge**](categories/01-core-development/design-bridge.toml) - Traduz especificações DESIGN.md em instruções de UI prontas para implementação
- [**electron-pro**](categories/01-core-development/electron-pro.toml) - Especialista em aplicações de desktop
- [**frontend-developer**](categories/01-core-development/frontend-developer.toml) - Especialista em UI/UX para React, Vue e Angular
- [**fullstack-developer**](categories/01-core-development/fullstack-developer.toml) - Desenvolvimento de recursos de ponta a ponta
- [**graphql-architect**](categories/01-core-development/graphql-architect.toml) - Especialista em esquema GraphQL e federação
- [**microservices-architect**](categories/01-core-development/microservices-architect.toml) - Projetista de sistemas distribuídos
- [**mobile-developer**](categories/01-core-development/mobile-developer.toml) - Especialista móvel multiplataforma
- [**ui-designer**](categories/01-core-development/ui-designer.toml) - Especialista em design visual e interação
- [**ui-fixer**](categories/01-core-development/ui-fixer.toml) - Pequeno patch seguro para problemas de UI reproduzidos
- [**websocket-engineer**](categories/01-core-development/websocket-engineer.toml) - Especialista em comunicação em tempo real

### [02. Language Specialists](categories/02-language-specialists/)

Especialistas específicos de linguagem com conhecimento profundo de frameworks.
- [**angular-architect**](categories/02-language-specialists/angular-architect.toml) - Especialista em padrões empresariais Angular 15+
- [**cpp-pro**](categories/02-language-specialists/cpp-pro.toml) - Especialista em desempenho C++
- [**csharp-developer**](categories/02-language-specialists/csharp-developer.toml) - Especialista no ecossistema .NET
- [**django-developer**](categories/02-language-specialists/django-developer.toml) - Especialista em desenvolvimento web Django 4+
- [**dotnet-core-expert**](categories/02-language-specialists/dotnet-core-expert.toml) - Especialista multiplataforma .NET 8
- [**dotnet-framework-4.8-expert**](categories/02-language-specialists/dotnet-framework-4.8-expert.toml) - Especialista em empresa legada .NET Framework
- [**elixir-expert**](categories/02-language-specialists/elixir-expert.toml) - Especialista em sistemas tolerantes a falhas Elixir e OTP
- [**erlang-expert**](categories/02-language-specialists/erlang-expert.toml) - Especialista em engenharia Erlang/OTP e rebar3
- [**expo-react-native-expert**](categories/02-language-specialists/expo-react-native-expert.toml) - Especialista em desenvolvimento móvel Expo e React Native
- [**fastapi-developer**](categories/02-language-specialists/fastapi-developer.toml) - Especialista em framework moderno de API Python assíncrona
- [**flutter-expert**](categories/02-language-specialists/flutter-expert.toml) - Especialista móvel multiplataforma Flutter 3+
- [**golang-pro**](categories/02-language-specialists/golang-pro.toml) - Especialista em concorrência Go
- [**java-architect**](categories/02-language-specialists/java-architect.toml) - Especialista em Java empresarial
- [**javascript-pro**](categories/02-language-specialists/javascript-pro.toml) - Especialista em desenvolvimento JavaScript
- [**kotlin-specialist**](categories/02-language-specialists/kotlin-specialist.toml) - Especialista em linguagem JVM moderna
- [**laravel-specialist**](categories/02-language-specialists/laravel-specialist.toml) - Especialista em framework PHP Laravel 10+
- [**symfony-specialist**](categories/02-language-specialists/symfony-specialist.toml) - Especialista em aplicações Symfony e Doctrine
- [**nextjs-developer**](categories/02-language-specialists/nextjs-developer.toml) - Especialista full-stack Next.js 14+
- [**node-specialist**](categories/02-language-specialists/node-specialist.toml) - Especialista em backend Node.js
- [**php-pro**](categories/02-language-specialists/php-pro.toml) - Especialista em desenvolvimento web PHP
- [**powershell-5.1-expert**](categories/02-language-specialists/powershell-5.1-expert.toml) - Especialista em automação Windows PowerShell 5.1 e .NET Framework completo
- [**powershell-7-expert**](categories/02-language-specialists/powershell-7-expert.toml) - Especialista em automação multiplataforma PowerShell 7+ e .NET moderno
- [**python-pro**](categories/02-language-specialists/python-pro.toml) - Mestre no ecossistema Python
- [**rails-expert**](categories/02-language-specialists/rails-expert.toml) - Especialista em desenvolvimento rápido Rails 8.1
- [**react-specialist**](categories/02-language-specialists/react-specialist.toml) - Especialista em padrões modernos React 18+
- [**rust-engineer**](categories/02-language-specialists/rust-engineer.toml) - Especialista em programação de sistemas
- [**spring-boot-engineer**](categories/02-language-specialists/spring-boot-engineer.toml) - Especialista em microserviços Spring Boot 3+
- [**sql-pro**](categories/02-language-specialists/sql-pro.toml) - Especialista em consultas de banco de dados
- [**swift-expert**](categories/02-language-specialists/swift-expert.toml) - Especialista em iOS e macOS
- [**typescript-pro**](categories/02-language-specialists/typescript-pro.toml) - Especialista em TypeScript
- [**vue-expert**](categories/02-language-specialists/vue-expert.toml) - Especialista em API Composition do Vue 3

### [03. Infrastructure](categories/03-infrastructure/)

Especialistas em DevOps, nuvem e implantação.

- [**azure-infra-engineer**](categories/03-infrastructure/azure-infra-engineer.toml) - Especialista em infraestrutura Azure e automação Az PowerShell
- [**cloud-architect**](categories/03-infrastructure/cloud-architect.toml) - Especialista em AWS/GCP/Azure
- [**database-administrator**](categories/03-infrastructure/database-administrator.toml) - Especialista em gerenciamento de banco de dados
- [**deployment-engineer**](categories/03-infrastructure/deployment-engineer.toml) - Especialista em automação de implantação
- [**devops-engineer**](categories/03-infrastructure/devops-engineer.toml) - Especialista em CI/CD e automação
- [**devops-incident-responder**](categories/03-infrastructure/devops-incident-responder.toml) - Gerenciamento de incidentes DevOps
- [**docker-expert**](categories/03-infrastructure/docker-expert.toml) - Especialista em containerização e otimização Docker
- [**incident-responder**](categories/03-infrastructure/incident-responder.toml) - Especialista em resposta a incidentes de sistemas
- [**kubernetes-specialist**](categories/03-infrastructure/kubernetes-specialist.toml) - Mestre em orquestração de contêineres
- [**network-engineer**](categories/03-infrastructure/network-engineer.toml) - Especialista em infraestrutura de rede
- [**platform-engineer**](categories/03-infrastructure/platform-engineer.toml) - Especialista em arquitetura de plataforma
- [**security-engineer**](categories/03-infrastructure/security-engineer.toml) - Especialista em segurança de infraestrutura
- [**sre-engineer**](categories/03-infrastructure/sre-engineer.toml) - Especialista em engenharia de confiabilidade de sites
- [**terraform-engineer**](categories/03-infrastructure/terraform-engineer.toml) - Especialista em infraestrutura como código
- [**terragrunt-expert**](categories/03-infrastructure/terragrunt-expert.toml) - Especialista em orquestração Terragrunt e IaC DRY
- [**windows-infra-admin**](categories/03-infrastructure/windows-infra-admin.toml) - Especialista em automação Active Directory, DNS, DHCP e GPO

<details>
<summary><b>04. Quality & Security</b> — Especialistas em teste, segurança e qualidade de código (20 agentes)</summary>

### [04. Quality & Security](categories/04-quality-security/)

- [**accessibility-tester**](categories/04-quality-security/accessibility-tester.toml) - Especialista em conformidade A11y
- [**ad-security-reviewer**](categories/04-quality-security/ad-security-reviewer.toml) - Especialista em segurança Active Directory e auditoria GPO
- [**anti-ui-slop-reviewer**](categories/04-quality-security/anti-ui-slop-reviewer.toml) - Revisor de gate de acabamento de UI específico do produto
- [**ai-writing-auditor**](categories/04-quality-security/ai-writing-auditor.toml) - Auditor e reescritor de padrões de escrita de IA
- [**architect-reviewer**](categories/04-quality-security/architect-reviewer.toml) - Especialista em revisão de arquitetura
- [**browser-debugger**](categories/04-quality-security/browser-debugger.toml) - Reprodução baseada em navegador e depuração do lado do cliente
- [**chaos-engineer**](categories/04-quality-security/chaos-engineer.toml) - Especialista em testes de resiliência de sistemas
- [**code-reviewer**](categories/04-quality-security/code-reviewer.toml) - Guardião da qualidade do código
- [**compliance-auditor**](categories/04-quality-security/compliance-auditor.toml) - Especialista em conformidade regulatória
- [**debugger**](categories/04-quality-security/debugger.toml) - Especialista em depuração avançada
- [**error-detective**](categories/04-quality-security/error-detective.toml) - Especialista em análise e resolução de erros
- [**gdpr-ccpa-compliance**](categories/04-quality-security/gdpr-ccpa-compliance.toml) - Especialista em privacidade GDPR e CCPA
- [**penetration-tester**](categories/04-quality-security/penetration-tester.toml) - Especialista em hacking ético
- [**performance-engineer**](categories/04-quality-security/performance-engineer.toml) - Especialista em otimização de desempenho
- [**powershell-security-hardening**](categories/04-quality-security/powershell-security-hardening.toml) - Especialista em endurecimento e conformidade de segurança PowerShell
- [**qa-expert**](categories/04-quality-security/qa-expert.toml) - Especialista em automação de testes
- [**reviewer**](categories/04-quality-security/reviewer.toml) - Revisão estilo PR para correção, segurança e regressões
- [**security-auditor**](categories/04-quality-security/security-auditor.toml) - Especialista em vulnerabilidades de segurança
- [**test-automator**](categories/04-quality-security/test-automator.toml) - Especialista em frameworks de automação de testes
- [**ui-ux-tester**](categories/04-quality-security/ui-ux-tester.toml) - Especialista em testes funcionais exaustivos de UI/UX

</details>

<details>
<summary><b>05. Data & AI</b> — Especialistas em engenharia de dados, ML e IA (14 agentes)</summary>

### [05. Data & AI](categories/05-data-ai/)

- [**ai-engineer**](categories/05-data-ai/ai-engineer.toml) - Especialista em design e implantação de sistemas de IA
- [**azure-databricks-platform-architect**](categories/05-data-ai/azure-databricks-platform-architect.toml) - Arquiteto de plataforma e lakehouse Azure Databricks
- [**data-analyst**](categories/05-data-ai/data-analyst.toml) - Especialista em insights e visualização de dados
- [**data-engineer**](categories/05-data-ai/data-engineer.toml) - Arquiteto de pipeline de dados
- [**data-scientist**](categories/05-data-ai/data-scientist.toml) - Especialista em análise e insights
- [**database-optimizer**](categories/05-data-ai/database-optimizer.toml) - Especialista em desempenho de banco de dados
- [**llm-architect**](categories/05-data-ai/llm-architect.toml) - Arquiteto de grandes modelos de linguagem
- [**machine-learning-engineer**](categories/05-data-ai/machine-learning-engineer.toml) - Especialista em sistemas de aprendizado de máquina
- [**ml-engineer**](categories/05-data-ai/ml-engineer.toml) - Especialista em aprendizado de máquina
- [**mlops-engineer**](categories/05-data-ai/mlops-engineer.toml) - Especialista em MLOps e implantação de modelos
- [**nlp-engineer**](categories/05-data-ai/nlp-engineer.toml) - Especialista em processamento de linguagem natural
- [**postgres-pro**](categories/05-data-ai/postgres-pro.toml) - Especialista em banco de dados PostgreSQL
- [**prompt-engineer**](categories/05-data-ai/prompt-engineer.toml) - Especialista em otimização de prompts
- [**reinforcement-learning-engineer**](categories/05-data-ai/reinforcement-learning-engineer.toml) - Especialista em aprendizado por reforço e sistemas de decisão

</details>

<details>
<summary><b>06. Developer Experience</b> — Especialistas em ferramentas e produtividade de desenvolvedores (14 agentes)</summary>

### [06. Developer Experience](categories/06-developer-experience/)

- [**build-engineer**](categories/06-developer-experience/build-engineer.toml) - Especialista em sistemas de build
- [**cli-developer**](categories/06-developer-experience/cli-developer.toml) - Criador de ferramentas de linha de comando
- [**dependency-manager**](categories/06-developer-experience/dependency-manager.toml) - Especialista em pacotes e dependências
- [**documentation-engineer**](categories/06-developer-experience/documentation-engineer.toml) - Especialista em documentação técnica
- [**dx-optimizer**](categories/06-developer-experience/dx-optimizer.toml) - Especialista em otimização da experiência do desenvolvedor
- [**git-workflow-manager**](categories/06-developer-experience/git-workflow-manager.toml) - Especialista em fluxo de trabalho e branches Git
- [**legacy-modernizer**](categories/06-developer-experience/legacy-modernizer.toml) - Especialista em modernização de código legado
- [**mcp-developer**](categories/06-developer-experience/mcp-developer.toml) - Especialista em Model Context Protocol
- [**powershell-module-architect**](categories/06-developer-experience/powershell-module-architect.toml) - Especialista em arquitetura de módulos e perfis PowerShell
- [**powershell-ui-architect**](categories/06-developer-experience/powershell-ui-architect.toml) - Especialista PowerShell UI/UX para WinForms, WPF, frameworks Metro e TUIs
- [**readme-generator**](categories/06-developer-experience/readme-generator.toml) - Gerador de README pronto para mantenedores, sem alucinação
- [**refactoring-specialist**](categories/06-developer-experience/refactoring-specialist.toml) - Especialista em refatoração de código
- [**slack-expert**](categories/06-developer-experience/slack-expert.toml) - Especialista em plataforma Slack e @slack/bolt
- [**tooling-engineer**](categories/06-developer-experience/tooling-engineer.toml) - Especialista em ferramentas de desenvolvedor

</details>

<details>
<summary><b>07. Specialized Domains</b> — Especialistas em tecnologias de domínio específico (14 agentes)</summary>

### [07. Specialized Domains](categories/07-specialized-domains/)

- [**api-documenter**](categories/07-specialized-domains/api-documenter.toml) - Especialista em documentação de API
- [**blockchain-developer**](categories/07-specialized-domains/blockchain-developer.toml) - Especialista em Web3 e cripto
- [**embedded-systems**](categories/07-specialized-domains/embedded-systems.toml) - Especialista em sistemas embarcados e de tempo real
- [**fintech-engineer**](categories/07-specialized-domains/fintech-engineer.toml) - Especialista em tecnologia financeira
- [**game-developer**](categories/07-specialized-domains/game-developer.toml) - Especialista em desenvolvimento de jogos
- [**healthcare-admin**](categories/07-specialized-domains/healthcare-admin.toml) - Especialista em administração de saúde, ciclo de receita e conformidade
- [**hipaa-compliance**](categories/07-specialized-domains/hipaa-compliance.toml) - Especialista em conformidade HIPAA para fornecedores SaaS de saúde
- [**iot-engineer**](categories/07-specialized-domains/iot-engineer.toml) - Desenvolvedor de sistemas IoT
- [**m365-admin**](categories/07-specialized-domains/m365-admin.toml) - Especialista em administração Microsoft 365, Exchange Online, Teams e SharePoint
- [**mobile-app-developer**](categories/07-specialized-domains/mobile-app-developer.toml) - Especialista em aplicações móveis
- [**payment-integration**](categories/07-specialized-domains/payment-integration.toml) - Especialista em sistemas de pagamento
- [**quant-analyst**](categories/07-specialized-domains/quant-analyst.toml) - Especialista em análise quantitativa
- [**risk-manager**](categories/07-specialized-domains/risk-manager.toml) - Especialista em avaliação e gestão de riscos
- [**seo-specialist**](categories/07-specialized-domains/seo-specialist.toml) - Especialista em otimização para mecanismos de busca

</details>

<details>
<summary><b>08. Business & Product</b> — Gestão de produto e análise de negócios (17 agentes)</summary>

### [08. Business & Product](categories/08-business-product/)

- [**assumption-mapping**](categories/08-business-product/assumption-mapping.toml) - Especialista em risco e validação de hipóteses de produto
- [**backlog-grooming**](categories/08-business-product/backlog-grooming.toml) - Especialista em refino de backlog ágil
- [**business-analyst**](categories/08-business-product/business-analyst.toml) - Especialista em requisitos
- [**content-marketer**](categories/08-business-product/content-marketer.toml) - Especialista em marketing de conteúdo
- [**content-quality-editor**](categories/08-business-product/content-quality-editor.toml) - Especialista em qualidade e humanização de conteúdo de IA
- [**customer-success-manager**](categories/08-business-product/customer-success-manager.toml) - Especialista em sucesso do cliente
- [**growth-loops**](categories/08-business-product/growth-loops.toml) - Especialista em loops de crescimento e mecânicas PLG
- [**legal-advisor**](categories/08-business-product/legal-advisor.toml) - Especialista em jurídico e conformidade
- [**license-engineer**](categories/08-business-product/license-engineer.toml) - Especialista em licenciamento de software e sistemas de conformidade
- [**product-manager**](categories/08-business-product/product-manager.toml) - Especialista em estratégia de produto
- [**project-manager**](categories/08-business-product/project-manager.toml) - Especialista em gerenciamento de projetos
- [**resume-refiner**](categories/08-business-product/resume-refiner.toml) - Especialista em otimização de currículo, CV e perfil LinkedIn
- [**sales-engineer**](categories/08-business-product/sales-engineer.toml) - Especialista em vendas técnicas
- [**scrum-master**](categories/08-business-product/scrum-master.toml) - Especialista em metodologia ágil
- [**technical-writer**](categories/08-business-product/technical-writer.toml) - Especialista em documentação técnica
- [**ux-researcher**](categories/08-business-product/ux-researcher.toml) - Especialista em pesquisa de usuários
- [**wordpress-master**](categories/08-business-product/wordpress-master.toml) - Especialista em desenvolvimento e otimização WordPress

</details>

<details>
<summary><b>09. Meta & Orchestration</b> — Coordenação de agentes e metaprogramação (12 agentes)</summary>

### [09. Meta & Orchestration](categories/09-meta-orchestration/)

- [**agent-installer**](categories/09-meta-orchestration/agent-installer.toml) - Navega e instala agentes deste repositório via GitHub
- [**agent-organizer**](categories/09-meta-orchestration/agent-organizer.toml) - Coordenador multi-agente
- [**codebase-orchestrator**](categories/09-meta-orchestration/codebase-orchestrator.toml) - Governança de refatoração em todo o repositório com portões de aprovação
- [**context-manager**](categories/09-meta-orchestration/context-manager.toml) - Especialista em otimização de contexto
- [**error-coordinator**](categories/09-meta-orchestration/error-coordinator.toml) - Especialista em tratamento e recuperação de erros
- [**it-ops-orchestrator**](categories/09-meta-orchestration/it-ops-orchestrator.toml) - Especialista em orquestração de fluxos de trabalho de operações de TI
- [**knowledge-synthesizer**](categories/09-meta-orchestration/knowledge-synthesizer.toml) - Especialista em agregação de conhecimento
- [**multi-agent-coordinator**](categories/09-meta-orchestration/multi-agent-coordinator.toml) - Orquestração avançada multi-agente
- [**performance-monitor**](categories/09-meta-orchestration/performance-monitor.toml) - Otimização de desempenho de agentes
- [**pied-piper**](https://github.com/sathish316/pied-piper/) - Orquestra um time de subagentes de IA para fluxos de trabalho SDLC repetitivos
- [**task-distributor**](categories/09-meta-orchestration/task-distributor.toml) - Especialista em alocação de tarefas
- [**workflow-orchestrator**](categories/09-meta-orchestration/workflow-orchestrator.toml) - Automação de fluxos de trabalho complexos

</details>

<details>
<summary><b>10. Research & Analysis</b> — Especialistas em pesquisa, busca e análise (12 agentes)</summary>

### [10. Research & Analysis](categories/10-research-analysis/)

- [**ab-test-analysis**](categories/10-research-analysis/ab-test-analysis.toml) - Interpretação de testes A/B e decisões ship/no-ship
- [**cohort-analysis**](categories/10-research-analysis/cohort-analysis.toml) - Análise de retenção, comportamento de coortes e métricas de ativação
- [**competitive-analyst**](categories/10-research-analysis/competitive-analyst.toml) - Especialista em inteligência competitiva
- [**data-researcher**](categories/10-research-analysis/data-researcher.toml) - Especialista em descoberta e análise de dados
- [**docs-researcher**](categories/10-research-analysis/docs-researcher.toml) - Verificação de API e frameworks apoiada por documentação
- [**first-principles-thinking**](categories/10-research-analysis/first-principles-thinking.toml) - Resolução de problemas questionando hipóteses, com pensamento de primeiros princípios
- [**market-researcher**](categories/10-research-analysis/market-researcher.toml) - Análise de mercado e insights de consumidores
- [**project-idea-validator**](categories/10-research-analysis/project-idea-validator.toml) - Testador de pressão brutal de ideias e estrategista go/no-go
- [**research-analyst**](categories/10-research-analysis/research-analyst.toml) - Especialista em pesquisa abrangente
- [**scientific-literature-researcher**](categories/10-research-analysis/scientific-literature-researcher.toml) - Pesquisa baseada em evidências de estudos científicos publicados
- [**search-specialist**](categories/10-research-analysis/search-specialist.toml) - Especialista em recuperação avançada de informação
- [**trend-analyst**](categories/10-research-analysis/trend-analyst.toml) - Especialista em tendências emergentes e previsão

</details>

<details>
<summary><b>11. AI Governance & Safety</b> - Especialistas em governança, guardrails e IA confiável (4 agentes)</summary>

### [11. AI Governance & Safety](categories/11-ai-governance-safety/)

- [**ai-governance-auditor**](categories/11-ai-governance-safety/ai-governance-auditor.toml) - Auditor de controles de governança de IA e prontidão de implantação
- [**model-risk-manager**](categories/11-ai-governance-safety/model-risk-manager.toml) - Especialista em priorização e mitigação de modos de falha de modelos
- [**policy-guardrail-designer**](categories/11-ai-governance-safety/policy-guardrail-designer.toml) - Designer de guardrails para prompts, ferramentas e fluxos de trabalho
- [**responsible-ai-reviewer**](categories/11-ai-governance-safety/responsible-ai-reviewer.toml) - Revisor de justiça, uso indevido, transparência e supervisão

</details>

<details>
<summary><b>12. Platform Engineering & IDP</b> - Especialistas em plataforma de desenvolvedor interna e golden paths (4 agentes)</summary>

### [12. Platform Engineering & IDP](categories/12-platform-engineering-idp/)

- [**backstage-specialist**](categories/12-platform-engineering-idp/backstage-specialist.toml) - Especialista em catálogo, templates e portal Backstage
- [**golden-path-designer**](categories/12-platform-engineering-idp/golden-path-designer.toml) - Designer de fluxos de trabalho self-service opinativos
- [**idp-architect**](categories/12-platform-engineering-idp/idp-architect.toml) - Especialista em arquitetura de plataforma de desenvolvedor interna
- [**platform-product-manager**](categories/12-platform-engineering-idp/platform-product-manager.toml) - Especialista em roteiro, adoção e métricas de sucesso de plataforma

</details>

<details>
<summary><b>13. LLMOps, Evals & Observability</b> - Especialistas em qualidade de IA em produção e visibilidade de runtime (4 agentes)</summary>

### [13. LLMOps, Evals & Observability](categories/13-llmops-evals-observability/)

- [**ai-observability-engineer**](categories/13-llmops-evals-observability/ai-observability-engineer.toml) - Especialista em traces, métricas e logging nativos de IA
- [**eval-engineer**](categories/13-llmops-evals-observability/eval-engineer.toml) - Especialista em avaliação de prompts, ferramentas e fluxos de trabalho
- [**hallucination-investigator**](categories/13-llmops-evals-observability/hallucination-investigator.toml) - Investigador de causalidade de falta de facticidade e colapso de contexto
- [**prompt-regression-tester**](categories/13-llmops-evals-observability/prompt-regression-tester.toml) - Designer de suíte de regressão para mudanças de comportamento de IA

</details>

## Entendendo os subagentes

Os subagentes são assistentes de IA especializados que aprimoram as capacidades do Codex ao fornecer expertise específica por tarefa. Eles atuam como ajudantes dedicados que o Codex pode invocar ao encontrar determinados tipos de trabalho.

### O que torna os subagentes especiais?

**Janelas de contexto independentes**
Cada subagente opera em seu próprio espaço de contexto isolado, evitando contaminação cruzada entre tarefas diferentes e mantendo a clareza no thread de conversa principal.

**Inteligência específica de domínio**
Os subagentes vêm equipados com instruções cuidadosamente elaboradas para sua área de expertise, resultando em desempenho superior em tarefas especializadas.

**Compartilhados entre projetos**
Após criar um subagente, você pode utilizá-lo em vários projetos e distribuí-lo entre membros da equipe para garantir práticas de desenvolvimento consistentes.

**Delegação explícita**
O Codex não gera subagentes automaticamente. Use prompts de delegação explícita para especificar quais agentes iniciar, como dividir o trabalho e qual forma o resultado deve ter.

### Vantagens principais

- **Eficiência de memória**: contextos isolados evitam que a conversa principal fique sobrecarregada com detalhes específicos da tarefa
- **Precisão aprimorada**: prompts e configurações especializados levam a melhores resultados em domínios específicos
- **Consistência de fluxo de trabalho**: o compartilhamento de subagentes em toda a equipe garante abordagens uniformes para tarefas comuns
- **Codex nativo**: usa arquivos de agente `.toml` alinhados com a documentação oficial de subagentes do Codex

### Fluxos de trabalho de exemplo

**Fluxo de revisão de PR:**
```text
Review this branch with parallel subagents. Have reviewer look for correctness, security, and missing tests. Have docs_researcher verify the framework APIs this patch depends on. Wait for both and summarize the findings with file references.
```

**Fluxo de investigação de bug:**
```text
Investigate the broken settings flow. Have code_mapper trace the owning code paths, browser_debugger reproduce the bug in the browser, and frontend_developer propose the smallest fix after the failure is understood. Wait for the read-heavy agents first, then continue.
```

**Fluxo de exploração e planejamento do repositório:**
```text
Use search_specialist to locate the code related to payment retries, knowledge_synthesizer to summarize the current design, and refactoring_specialist to propose a minimal refactor plan. Return a concrete action list.
```

## Ferramentas do ecossistema AI Design + Build


<br/>

Você entrega produtos com IA, mas todo lançamento morre em silêncio porque ninguém fala sobre ele. [EveryFeed](https://everyfeed.ai/) conecta seu assistente de IA a um espaço de trabalho social que redige, agenda e publica em mais de 35 canais — sem agência, sem contratação de marketing.

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

## Contribuindo

Contribuições são bem-vindas! Veja [CONTRIBUTING.md](CONTRIBUTING.md) para as diretrizes.

- Envie novos subagentes via PR
- Melhore as definições existentes
- Relate problemas e bugs


## Licença

MIT License - veja [LICENSE](LICENSE)

Este repositório é uma coleção organizada de definições de subagentes contribuídas tanto pelos mantenedores quanto pela comunidade. Todos os subagentes são fornecidos "no estado em que se encontram", sem garantia. Não auditamos nem garantimos a segurança ou correção de qualquer subagente. Revise antes de usar; os mantenedores não aceitam responsabilidade por quaisquer problemas decorrentes de seu uso.

Se você encontrar um problema com um subagente listado ou quiser sua contribuição removida, abra uma issue neste repositório e a trataremos rapidamente.