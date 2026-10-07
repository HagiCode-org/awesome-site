<a href="https://github.com/VoltAgent/voltagent">
    <img width="1500" height="500" alt="codex" src="https://github.com/user-attachments/assets/35f56654-e3e7-4023-a7d5-acd5215455de" />
</a>

<br />
<br />

<div align="center">
    <strong>13개 분야에 걸쳐 175개 이상의 Codex 서브에이전트를 모은 훌륭한 컬렉션.</strong>
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

# 훌륭한 Codex Subagents

이 저장소는 특정 개발 작업을 위해 설계된 전문 AI 어시스턴트인 [Codex Subagents](https://developers.openai.com/codex/subagents)의 결정적인 컬렉션입니다. Codex를 위해 특별히 작성되었으며 공식 문서와 일치합니다.

## 설치

Codex 사용자 정의 에이전트 디렉터리는 문서에 설명된 그대로 사용하세요:

- `~/.codex/agents/` : 전역 에이전트용(모든 프로젝트에서 사용 가능)
- `.codex/agents/` : 프로젝트별 에이전트용(해당 저장소에서 우선순위가 더 높음)

1. 이 저장소를 클론합니다.
2. 원하는 `.toml` 에이전트 파일을 위 디렉터리 중 하나에 복사합니다.
3. 필요하면 Codex 세션을 재시작하거나 새로 고칩니다.
4. 프롬프트에서 명시적으로 위임하세요(Codex는 사용자 정의 서브에이전트를 자동으로 생성하지 않습니다).

예시:
```bash
mkdir -p ~/.codex/agents
cp categories/01-core-development/backend-developer.toml ~/.codex/agents/
```

```bash
mkdir -p .codex/agents
cp categories/04-quality-security/reviewer.toml .codex/agents/
```

Codex에서 에이전트 구성을 사용한다면, 공식 문서에 설명된 대로 `.codex/config.toml`의 `[agents]` 아래에 보관하세요.


## 후원자

|                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing"><picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-dark-mode.svg"><img alt="Crawlbase" src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-light-mode.svg" width="425"></picture></a> | [Crawlbase](https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing) 는 70,000명 이상의 개발자가 신뢰하는 웹 데이터 인프라입니다. 그들의 Crawling API, MCP 서버 및 통합을 통해 AI 에이전트는 모든 웹페이지에 실시간으로 접근할 수 있습니다 — JavaScript 렌더링, 프록시 로테이션, 안티봇 보호 포함. |
| <a href="https://serpapi.com/awesome-codex-subagents"><img alt="SerpApi" src="https://cdn.voltagent.dev/awesome-repo/serpapi/serpapi-logo.png" width="425"></a> | [SerpApi](https://serpapi.com/awesome-codex-subagents) 는 AI 앱을 위한 웹 검색 API입니다. 모든 통합을 위해 Markdown 및 JSON 형식으로 제공됩니다. |


<div align="center">

<table>
<tr>
<td align="center" width="100%">
<h4>👉 여기에서 제품을 소개하고 Claude Code, Codex, Gemini 등의 AI 코딩 에이전트를 사용하는 개발자에게 도달할 수 있습니다.</h4>
     
<a href="https://sponsors.voltagent.dev/#awesome-codex-subagents"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



### 서브에이전트 저장 위치

| Type | Path | Availability | Precedence |
|------|------|--------------|------------|
| Project Subagents | `.codex/agents/` | Current project only | Higher |
| Global Subagents | `~/.codex/agents/` | All projects | Lower |

참고: 이름 충돌이 발생하면 프로젝트별 서브에이전트가 전역 서브에이전트를 덮어씁니다.


## 서브에이전트 구조

각 서브에이전트는 Codex 네이티브 `.toml` 형식을 사용합니다:

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

### 스마트 모델 라우팅

각 서브에이전트에는 적절한 모델로 자동 라우팅되는 `model` 필드가 있어 품질과 비용의 균형을 맞춥니다:

| Model | When It's Used | Examples |
|-------|----------------|----------|
| `gpt-5.6-sol` | 심층 추론 — 아키텍처 리뷰, 보안 감사, 금융 로직 | `security-auditor`, `architect-reviewer`, `fintech-engineer` |
| `gpt-5.6-terra` | 구현, 진단, 평가 및 다단계 전문 분석 | `docker-expert`, `test-automator`, `scientific-literature-researcher` |
| `gpt-5.6-luna` | 제한된 검색, 추출, 라우팅, 초안 작성 및 경량 합성 | `search-specialist`, `docs-researcher`, `agent-installer` |

### 샌드박스 모드 철학

각 서브에이전트의 `sandbox_mode` 필드는 파일 시스템 접근을 제어합니다:
- **읽기 전용 에이전트**(리뷰어, 감사자): `sandbox_mode = "read-only"` — 수정 없이 분석
- **워크스페이스 쓰기 에이전트**(개발자, 엔지니어): `sandbox_mode = "workspace-write"` — 파일 생성 및 수정





## 카테고리

### [01. Core Development](categories/01-core-development/)

매일의 코딩 작업에 필요한 핵심 개발 서브에이전트.

- [**api-designer**](categories/01-core-development/api-designer.toml) - REST 및 GraphQL API 아키텍트
- [**backend-developer**](categories/01-core-development/backend-developer.toml) - 확장 가능한 API를 위한 서버 측 전문가
- [**code-mapper**](categories/01-core-development/code-mapper.toml) - 코드 경로 매핑 및 소유권 경계 분석
- [**design-bridge**](categories/01-core-development/design-bridge.toml) - DESIGN.md 사양을 구현 가능한 UI 지침으로 변환
- [**electron-pro**](categories/01-core-development/electron-pro.toml) - 데스크톱 애플리케이션 전문가
- [**frontend-developer**](categories/01-core-development/frontend-developer.toml) - React, Vue, Angular 전문 UI/UX 전문가
- [**fullstack-developer**](categories/01-core-development/fullstack-developer.toml) - 엔드투엔드 기능 개발
- [**graphql-architect**](categories/01-core-development/graphql-architect.toml) - GraphQL 스키마 및 페더레이션 전문가
- [**microservices-architect**](categories/01-core-development/microservices-architect.toml) - 분산 시스템 설계자
- [**mobile-developer**](categories/01-core-development/mobile-developer.toml) - 크로스 플랫폼 모바일 전문가
- [**ui-designer**](categories/01-core-development/ui-designer.toml) - 시각 디자인 및 상호작용 전문가
- [**ui-fixer**](categories/01-core-development/ui-fixer.toml) - 재현된 UI 문제에 대한 최소 안전 패치
- [**websocket-engineer**](categories/01-core-development/websocket-engineer.toml) - 실시간 통신 전문가

### [02. Language Specialists](categories/02-language-specialists/)

깊은 프레임워크 지식을 갖춘 언어별 전문가.
- [**angular-architect**](categories/02-language-specialists/angular-architect.toml) - Angular 15+ 엔터프라이즈 패턴 전문가
- [**cpp-pro**](categories/02-language-specialists/cpp-pro.toml) - C++ 성능 전문가
- [**csharp-developer**](categories/02-language-specialists/csharp-developer.toml) - .NET 생태계 전문가
- [**django-developer**](categories/02-language-specialists/django-developer.toml) - Django 4+ 웹 개발 전문가
- [**dotnet-core-expert**](categories/02-language-specialists/dotnet-core-expert.toml) - .NET 8 크로스 플랫폼 전문가
- [**dotnet-framework-4.8-expert**](categories/02-language-specialists/dotnet-framework-4.8-expert.toml) - .NET Framework 레거시 엔터프라이즈 전문가
- [**elixir-expert**](categories/02-language-specialists/elixir-expert.toml) - Elixir 및 OTP 내결함성 시스템 전문가
- [**erlang-expert**](categories/02-language-specialists/erlang-expert.toml) - Erlang/OTP 및 rebar3 엔지니어링 전문가
- [**expo-react-native-expert**](categories/02-language-specialists/expo-react-native-expert.toml) - Expo 및 React Native 모바일 개발 전문가
- [**fastapi-developer**](categories/02-language-specialists/fastapi-developer.toml) - 최신 비동기 Python API 프레임워크 전문가
- [**flutter-expert**](categories/02-language-specialists/flutter-expert.toml) - Flutter 3+ 크로스 플랫폼 모바일 전문가
- [**golang-pro**](categories/02-language-specialists/golang-pro.toml) - Go 동시성 전문가
- [**java-architect**](categories/02-language-specialists/java-architect.toml) - 엔터프라이즈 Java 전문가
- [**javascript-pro**](categories/02-language-specialists/javascript-pro.toml) - JavaScript 개발 전문가
- [**kotlin-specialist**](categories/02-language-specialists/kotlin-specialist.toml) - 최신 JVM 언어 전문가
- [**laravel-specialist**](categories/02-language-specialists/laravel-specialist.toml) - Laravel 10+ PHP 프레임워크 전문가
- [**symfony-specialist**](categories/02-language-specialists/symfony-specialist.toml) - Symfony 애플리케이션 및 Doctrine 전문가
- [**nextjs-developer**](categories/02-language-specialists/nextjs-developer.toml) - Next.js 14+ 풀스택 전문가
- [**node-specialist**](categories/02-language-specialists/node-specialist.toml) - Node.js 백엔드 전문가
- [**php-pro**](categories/02-language-specialists/php-pro.toml) - PHP 웹 개발 전문가
- [**powershell-5.1-expert**](categories/02-language-specialists/powershell-5.1-expert.toml) - Windows PowerShell 5.1 및 전체 .NET Framework 자동화 전문가
- [**powershell-7-expert**](categories/02-language-specialists/powershell-7-expert.toml) - 크로스 플랫폼 PowerShell 7+ 자동화 및 최신 .NET 전문가
- [**python-pro**](categories/02-language-specialists/python-pro.toml) - Python 생태계 마스터
- [**rails-expert**](categories/02-language-specialists/rails-expert.toml) - Rails 8.1 rapid 개발 전문가
- [**react-specialist**](categories/02-language-specialists/react-specialist.toml) - React 18+ 최신 패턴 전문가
- [**rust-engineer**](categories/02-language-specialists/rust-engineer.toml) - 시스템 프로그래밍 전문가
- [**spring-boot-engineer**](categories/02-language-specialists/spring-boot-engineer.toml) - Spring Boot 3+ 마이크로서비스 전문가
- [**sql-pro**](categories/02-language-specialists/sql-pro.toml) - 데이터베이스 쿼리 전문가
- [**swift-expert**](categories/02-language-specialists/swift-expert.toml) - iOS 및 macOS 전문가
- [**typescript-pro**](categories/02-language-specialists/typescript-pro.toml) - TypeScript 전문가
- [**vue-expert**](categories/02-language-specialists/vue-expert.toml) - Vue 3 Composition API 전문가

### [03. Infrastructure](categories/03-infrastructure/)

DevOps, 클라우드 및 배포 전문가.

- [**azure-infra-engineer**](categories/03-infrastructure/azure-infra-engineer.toml) - Azure 인프라 및 Az PowerShell 자동화 전문가
- [**cloud-architect**](categories/03-infrastructure/cloud-architect.toml) - AWS/GCP/Azure 전문가
- [**database-administrator**](categories/03-infrastructure/database-administrator.toml) - 데이터베이스 관리 전문가
- [**deployment-engineer**](categories/03-infrastructure/deployment-engineer.toml) - 배포 자동화 전문가
- [**devops-engineer**](categories/03-infrastructure/devops-engineer.toml) - CI/CD 및 자동화 전문가
- [**devops-incident-responder**](categories/03-infrastructure/devops-incident-responder.toml) - DevOps 사고 관리
- [**docker-expert**](categories/03-infrastructure/docker-expert.toml) - Docker 컨테이너화 및 최적화 전문가
- [**incident-responder**](categories/03-infrastructure/incident-responder.toml) - 시스템 사고 대응 전문가
- [**kubernetes-specialist**](categories/03-infrastructure/kubernetes-specialist.toml) - 컨테이너 오케스트레이션 마스터
- [**network-engineer**](categories/03-infrastructure/network-engineer.toml) - 네트워크 인프라 전문가
- [**platform-engineer**](categories/03-infrastructure/platform-engineer.toml) - 플랫폼 아키텍처 전문가
- [**security-engineer**](categories/03-infrastructure/security-engineer.toml) - 인프라 보안 전문가
- [**sre-engineer**](categories/03-infrastructure/sre-engineer.toml) - 사이트 신뢰성 엔지니어링 전문가
- [**terraform-engineer**](categories/03-infrastructure/terraform-engineer.toml) - Infrastructure as Code 전문가
- [**terragrunt-expert**](categories/03-infrastructure/terragrunt-expert.toml) - Terragrunt 오케스트레이션 및 DRY IaC 전문가
- [**windows-infra-admin**](categories/03-infrastructure/windows-infra-admin.toml) - Active Directory, DNS, DHCP 및 GPO 자동화 전문가

<details>
<summary><b>04. Quality & Security</b> — 테스트, 보안 및 코드 품질 전문가(20개 에이전트)</summary>

### [04. Quality & Security](categories/04-quality-security/)

- [**accessibility-tester**](categories/04-quality-security/accessibility-tester.toml) - A11y 규정 준수 전문가
- [**ad-security-reviewer**](categories/04-quality-security/ad-security-reviewer.toml) - Active Directory 보안 및 GPO 감사 전문가
- [**anti-ui-slop-reviewer**](categories/04-quality-security/anti-ui-slop-reviewer.toml) - 제품별 UI 마감 게이트 리뷰어
- [**ai-writing-auditor**](categories/04-quality-security/ai-writing-auditor.toml) - AI 작성 패턴 감사 및 재작성 전문가
- [**architect-reviewer**](categories/04-quality-security/architect-reviewer.toml) - 아키텍처 리뷰 전문가
- [**browser-debugger**](categories/04-quality-security/browser-debugger.toml) - 브라우저 기반 재현 및 클라이언트 디버깅
- [**chaos-engineer**](categories/04-quality-security/chaos-engineer.toml) - 시스템 복원력 테스트 전문가
- [**code-reviewer**](categories/04-quality-security/code-reviewer.toml) - 코드 품질 수호자
- [**compliance-auditor**](categories/04-quality-security/compliance-auditor.toml) - 규제 준수 전문가
- [**debugger**](categories/04-quality-security/debugger.toml) - 고급 디버깅 전문가
- [**error-detective**](categories/04-quality-security/error-detective.toml) - 오류 분석 및 해결 전문가
- [**gdpr-ccpa-compliance**](categories/04-quality-security/gdpr-ccpa-compliance.toml) - GDPR 및 CCPA 개인정보 보호 준수 전문가
- [**penetration-tester**](categories/04-quality-security/penetration-tester.toml) - 윤리적 해킹 전문가
- [**performance-engineer**](categories/04-quality-security/performance-engineer.toml) - 성능 최적화 전문가
- [**powershell-security-hardening**](categories/04-quality-security/powershell-security-hardening.toml) - PowerShell 보안 강화 및 규정 준수 전문가
- [**qa-expert**](categories/04-quality-security/qa-expert.toml) - 테스트 자동화 전문가
- [**reviewer**](categories/04-quality-security/reviewer.toml) - 정확성, 보안 및 회귀에 대한 PR 스타일 리뷰
- [**security-auditor**](categories/04-quality-security/security-auditor.toml) - 보안 취약점 전문가
- [**test-automator**](categories/04-quality-security/test-automator.toml) - 테스트 자동화 프레임워크 전문가
- [**ui-ux-tester**](categories/04-quality-security/ui-ux-tester.toml) - 철저한 UI/UX 기능 테스트 전문가

</details>

<details>
<summary><b>05. Data & AI</b> — 데이터 엔지니어링, ML 및 AI 전문가(14개 에이전트)</summary>

### [05. Data & AI](categories/05-data-ai/)

- [**ai-engineer**](categories/05-data-ai/ai-engineer.toml) - AI 시스템 설계 및 배포 전문가
- [**azure-databricks-platform-architect**](categories/05-data-ai/azure-databricks-platform-architect.toml) - Azure Databricks 플랫폼 및 lakehouse 아키텍트
- [**data-analyst**](categories/05-data-ai/data-analyst.toml) - 데이터 인사이트 및 시각화 전문가
- [**data-engineer**](categories/05-data-ai/data-engineer.toml) - 데이터 파이프라인 아키텍트
- [**data-scientist**](categories/05-data-ai/data-scientist.toml) - 분석 및 인사이트 전문가
- [**database-optimizer**](categories/05-data-ai/database-optimizer.toml) - 데이터베이스 성능 전문가
- [**llm-architect**](categories/05-data-ai/llm-architect.toml) - 대규모 언어 모델 아키텍트
- [**machine-learning-engineer**](categories/05-data-ai/machine-learning-engineer.toml) - 머신러닝 시스템 전문가
- [**ml-engineer**](categories/05-data-ai/ml-engineer.toml) - 머신러닝 전문가
- [**mlops-engineer**](categories/05-data-ai/mlops-engineer.toml) - MLOps 및 모델 배포 전문가
- [**nlp-engineer**](categories/05-data-ai/nlp-engineer.toml) - 자연어 처리 전문가
- [**postgres-pro**](categories/05-data-ai/postgres-pro.toml) - PostgreSQL 데이터베이스 전문가
- [**prompt-engineer**](categories/05-data-ai/prompt-engineer.toml) - 프롬프트 최적화 전문가
- [**reinforcement-learning-engineer**](categories/05-data-ai/reinforcement-learning-engineer.toml) - 강화 학습 및 의사결정 시스템 전문가

</details>

<details>
<summary><b>06. Developer Experience</b> — 도구 및 개발자 생산성 전문가(14개 에이전트)</summary>

### [06. Developer Experience](categories/06-developer-experience/)

- [**build-engineer**](categories/06-developer-experience/build-engineer.toml) - 빌드 시스템 전문가
- [**cli-developer**](categories/06-developer-experience/cli-developer.toml) - 명령줄 도구 제작자
- [**dependency-manager**](categories/06-developer-experience/dependency-manager.toml) - 패키지 및 종속성 전문가
- [**documentation-engineer**](categories/06-developer-experience/documentation-engineer.toml) - 기술 문서 전문가
- [**dx-optimizer**](categories/06-developer-experience/dx-optimizer.toml) - 개발자 경험 최적화 전문가
- [**git-workflow-manager**](categories/06-developer-experience/git-workflow-manager.toml) - Git 워크플로 및 브랜치 전문가
- [**legacy-modernizer**](categories/06-developer-experience/legacy-modernizer.toml) - 레거시 코드 현대화 전문가
- [**mcp-developer**](categories/06-developer-experience/mcp-developer.toml) - Model Context Protocol 전문가
- [**powershell-module-architect**](categories/06-developer-experience/powershell-module-architect.toml) - PowerShell 모듈 및 프로필 아키텍처 전문가
- [**powershell-ui-architect**](categories/06-developer-experience/powershell-ui-architect.toml) - WinForms, WPF, Metro 프레임워크 및 TUI용 PowerShell UI/UX 전문가
- [**readme-generator**](categories/06-developer-experience/readme-generator.toml) - 환각 없는, 유지 관리자가 바로 쓸 수 있는 README 생성기
- [**refactoring-specialist**](categories/06-developer-experience/refactoring-specialist.toml) - 코드 리팩토링 전문가
- [**slack-expert**](categories/06-developer-experience/slack-expert.toml) - Slack 플랫폼 및 @slack/bolt 전문가
- [**tooling-engineer**](categories/06-developer-experience/tooling-engineer.toml) - 개발자 도구 전문가

</details>

<details>
<summary><b>07. Specialized Domains</b> — 도메인별 기술 전문가(14개 에이전트)</summary>

### [07. Specialized Domains](categories/07-specialized-domains/)

- [**api-documenter**](categories/07-specialized-domains/api-documenter.toml) - API 문서 전문가
- [**blockchain-developer**](categories/07-specialized-domains/blockchain-developer.toml) - Web3 및 암호화 전문가
- [**embedded-systems**](categories/07-specialized-domains/embedded-systems.toml) - 임베디드 및 실시간 시스템 전문가
- [**fintech-engineer**](categories/07-specialized-domains/fintech-engineer.toml) - 금융 기술 전문가
- [**game-developer**](categories/07-specialized-domains/game-developer.toml) - 게임 개발 전문가
- [**healthcare-admin**](categories/07-specialized-domains/healthcare-admin.toml) - 의료 행정, 수익 주기 및 규정 준수 전문가
- [**hipaa-compliance**](categories/07-specialized-domains/hipaa-compliance.toml) - 의료 SaaS 벤더를 위한 HIPAA 규정 준수 전문가
- [**iot-engineer**](categories/07-specialized-domains/iot-engineer.toml) - IoT 시스템 개발자
- [**m365-admin**](categories/07-specialized-domains/m365-admin.toml) - Microsoft 365, Exchange Online, Teams 및 SharePoint 관리 전문가
- [**mobile-app-developer**](categories/07-specialized-domains/mobile-app-developer.toml) - 모바일 애플리케이션 전문가
- [**payment-integration**](categories/07-specialized-domains/payment-integration.toml) - 결제 시스템 전문가
- [**quant-analyst**](categories/07-specialized-domains/quant-analyst.toml) - 정량 분석 전문가
- [**risk-manager**](categories/07-specialized-domains/risk-manager.toml) - 위험 평가 및 관리 전문가
- [**seo-specialist**](categories/07-specialized-domains/seo-specialist.toml) - 검색 엔진 최적화 전문가

</details>

<details>
<summary><b>08. Business & Product</b> — 제품 관리 및 비즈니스 분석(17개 에이전트)</summary>

### [08. Business & Product](categories/08-business-product/)

- [**assumption-mapping**](categories/08-business-product/assumption-mapping.toml) - 제품 가설 위험 및 검증 전문가
- [**backlog-grooming**](categories/08-business-product/backlog-grooming.toml) - 애자일 백로그 정비 전문가
- [**business-analyst**](categories/08-business-product/business-analyst.toml) - 요구사항 전문가
- [**content-marketer**](categories/08-business-product/content-marketer.toml) - 콘텐츠 마케팅 전문가
- [**content-quality-editor**](categories/08-business-product/content-quality-editor.toml) - AI 콘텐츠 품질 및 인간화 전문가
- [**customer-success-manager**](categories/08-business-product/customer-success-manager.toml) - 고객 성공 전문가
- [**growth-loops**](categories/08-business-product/growth-loops.toml) - 성장 루프 및 PLG 메커니즘 전문가
- [**legal-advisor**](categories/08-business-product/legal-advisor.toml) - 법무 및 규정 준수 전문가
- [**license-engineer**](categories/08-business-product/license-engineer.toml) - 소프트웨어 라이선스 및 규정 준수 시스템 전문가
- [**product-manager**](categories/08-business-product/product-manager.toml) - 제품 전략 전문가
- [**project-manager**](categories/08-business-product/project-manager.toml) - 프로젝트 관리 전문가
- [**resume-refiner**](categories/08-business-product/resume-refiner.toml) - 이력서, CV 및 LinkedIn 프로필 최적화 전문가
- [**sales-engineer**](categories/08-business-product/sales-engineer.toml) - 기술 영업 전문가
- [**scrum-master**](categories/08-business-product/scrum-master.toml) - 애자일 방법론 전문가
- [**technical-writer**](categories/08-business-product/technical-writer.toml) - 기술 문서 전문가
- [**ux-researcher**](categories/08-business-product/ux-researcher.toml) - 사용자 조사 전문가
- [**wordpress-master**](categories/08-business-product/wordpress-master.toml) - WordPress 개발 및 최적화 전문가

</details>

<details>
<summary><b>09. Meta & Orchestration</b> — 에이전트 조정 및 메타 프로그래밍(12개 에이전트)</summary>

### [09. Meta & Orchestration](categories/09-meta-orchestration/)

- [**agent-installer**](categories/09-meta-orchestration/agent-installer.toml) - GitHub를 통해 이 저장소의 에이전트를 찾아 설치
- [**agent-organizer**](categories/09-meta-orchestration/agent-organizer.toml) - 멀티 에이전트 코디네이터
- [**codebase-orchestrator**](categories/09-meta-orchestration/codebase-orchestrator.toml) - 승인 게이트가 있는 저장소 전체 리팩토링 거버넌스
- [**context-manager**](categories/09-meta-orchestration/context-manager.toml) - 컨텍스트 최적화 전문가
- [**error-coordinator**](categories/09-meta-orchestration/error-coordinator.toml) - 오류 처리 및 복구 전문가
- [**it-ops-orchestrator**](categories/09-meta-orchestration/it-ops-orchestrator.toml) - IT 운영 워크플로 오케스트레이션 전문가
- [**knowledge-synthesizer**](categories/09-meta-orchestration/knowledge-synthesizer.toml) - 지식 집계 전문가
- [**multi-agent-coordinator**](categories/09-meta-orchestration/multi-agent-coordinator.toml) - 고급 멀티 에이전트 오케스트레이션
- [**performance-monitor**](categories/09-meta-orchestration/performance-monitor.toml) - 에이전트 성능 최적화
- [**pied-piper**](https://github.com/sathish316/pied-piper/) - 반복적인 SDLC 워크플로를 위해 AI 서브에이전트 팀을 오케스트레이션
- [**task-distributor**](categories/09-meta-orchestration/task-distributor.toml) - 작업 할당 전문가
- [**workflow-orchestrator**](categories/09-meta-orchestration/workflow-orchestrator.toml) - 복잡한 워크플로 자동화

</details>

<details>
<summary><b>10. Research & Analysis</b> — 연구, 검색 및 분석 전문가(12개 에이전트)</summary>

### [10. Research & Analysis](categories/10-research-analysis/)

- [**ab-test-analysis**](categories/10-research-analysis/ab-test-analysis.toml) - A/B 테스트 해석 및 출시/미출시 결정
- [**cohort-analysis**](categories/10-research-analysis/cohort-analysis.toml) - 리텐션, 코호트 행동 및 활성화 지표 분석
- [**competitive-analyst**](categories/10-research-analysis/competitive-analyst.toml) - 경쟁 인텔리전스 전문가
- [**data-researcher**](categories/10-research-analysis/data-researcher.toml) - 데이터 발견 및 분석 전문가
- [**docs-researcher**](categories/10-research-analysis/docs-researcher.toml) - 문서 기반 API 및 프레임워크 검증
- [**first-principles-thinking**](categories/10-research-analysis/first-principles-thinking.toml) - 가정을 의심하고 제일 원리로 문제 해결
- [**market-researcher**](categories/10-research-analysis/market-researcher.toml) - 시장 분석 및 소비자 인사이트
- [**project-idea-validator**](categories/10-research-analysis/project-idea-validator.toml) - 가혹한 아이디어 압박 테스트 및 go/no-go 전략가
- [**research-analyst**](categories/10-research-analysis/research-analyst.toml) - 종합 연구 전문가
- [**scientific-literature-researcher**](categories/10-research-analysis/scientific-literature-researcher.toml) - 출판된 과학 연구에 기반한 증거 중심 연구
- [**search-specialist**](categories/10-research-analysis/search-specialist.toml) - 고급 정보 검색 전문가
- [**trend-analyst**](categories/10-research-analysis/trend-analyst.toml) - 신흥 트렌드 및 예측 전문가

</details>

<details>
<summary><b>11. AI Governance & Safety</b> - 거버넌스, 가드레일 및 신뢰할 수 있는 AI 전문가(4개 에이전트)</summary>

### [11. AI Governance & Safety](categories/11-ai-governance-safety/)

- [**ai-governance-auditor**](categories/11-ai-governance-safety/ai-governance-auditor.toml) - AI 거버넌스 통제 및 배포 준비도 리뷰어
- [**model-risk-manager**](categories/11-ai-governance-safety/model-risk-manager.toml) - 모델 실패 모드 우선순위 지정 및 완화 전문가
- [**policy-guardrail-designer**](categories/11-ai-governance-safety/policy-guardrail-designer.toml) - 프롬프트, 도구 및 워크플로 가드레일 설계자
- [**responsible-ai-reviewer**](categories/11-ai-governance-safety/responsible-ai-reviewer.toml) - 공정성, 오용, 투명성 및 감독 리뷰어

</details>

<details>
<summary><b>12. Platform Engineering & IDP</b> - 내부 개발자 플랫폼 및 골든 패스 전문가(4개 에이전트)</summary>

### [12. Platform Engineering & IDP](categories/12-platform-engineering-idp/)

- [**backstage-specialist**](categories/12-platform-engineering-idp/backstage-specialist.toml) - Backstage 카탈로그, 템플릿 및 포털 전문가
- [**golden-path-designer**](categories/12-platform-engineering-idp/golden-path-designer.toml) - 견고한 셀프 서비스 워크플로 설계자
- [**idp-architect**](categories/12-platform-engineering-idp/idp-architect.toml) - 내부 개발자 플랫폼 아키텍처 전문가
- [**platform-product-manager**](categories/12-platform-engineering-idp/platform-product-manager.toml) - 플랫폼 로드맵, 도입 및 성공 지표 전문가

</details>

<details>
<summary><b>13. LLMOps, Evals & Observability</b> - 프로덕션 AI 품질 및 런타임 가시성 전문가(4개 에이전트)</summary>

### [13. LLMOps, Evals & Observability](categories/13-llmops-evals-observability/)

- [**ai-observability-engineer**](categories/13-llmops-evals-observability/ai-observability-engineer.toml) - AI 네이티브 추적, 지표 및 로깅 전문가
- [**eval-engineer**](categories/13-llmops-evals-observability/eval-engineer.toml) - 프롬프트, 도구 및 워크플로 평가 전문가
- [**hallucination-investigator**](categories/13-llmops-evals-observability/hallucination-investigator.toml) - 사실성 및 컨텍스트 붕괴 근본 원인 조사자
- [**prompt-regression-tester**](categories/13-llmops-evals-observability/prompt-regression-tester.toml) - AI 동작 변화에 대한 회귀 스위트 설계자

</details>

## 서브에이전트 이해하기

서브에이전트는 작업별 전문 지식을 제공하여 Codex의 기능을 강화하는 전문 AI 어시스턴트입니다. 이들은 Codex가 특정 유형의 작업에 직면했을 때 호출할 수 있는 전담 도우미 역할을 합니다.

### 서브에이전트의 특별한 점

**독립적인 컨텍스트 창**
각 서브에이전트는 자체 격리된 컨텍스트 공간에서 작동하여 서로 다른 작업 간의 교차 오염을 방지하고 주 대화 스레드의 명확성을 유지합니다.

**도메인별 지능**
서브에이전트는 해당 전문 분야를 위해 정성껏 작성된 지침을 갖추고 있어 전문 작업에서 탁월한 성능을 발휘합니다.

**프로젝트 간 공유**
서브에이전트를 만든 후에는 다양한 프로젝트에서 활용하고 팀 구성원에게 배포하여 일관된 개발 관행을 보장할 수 있습니다.

**명시적 위임**
Codex는 서브에이전트를 자동으로 생성하지 않습니다. 어떤 에이전트를 시작할지, 작업을 어떻게 나눌지, 결과의 형태가 무엇인지 명시적으로 지정하는 위임 프롬프트를 사용하세요.

### 핵심 장점

- **메모리 효율성**: 격리된 컨텍스트는 주 대화가 작업별 세부 정보로 어지러워지는 것을 방지합니다
- **향상된 정확도**: 전문화된 프롬프트와 구성은 특정 도메인에서 더 나은 결과를 제공합니다
- **워크플로 일관성**: 팀 전체 서브에이전트 공유는 공통 작업에统一的된 접근을 보장합니다
- **Codex 네이티브**: 공식 Codex 서브에이전트 문서와 일치하는 `.toml` 에이전트 파일을 사용합니다

### 워크플로 예시

**PR 리뷰 워크플로:**
```text
Review this branch with parallel subagents. Have reviewer look for correctness, security, and missing tests. Have docs_researcher verify the framework APIs this patch depends on. Wait for both and summarize the findings with file references.
```

**버그 조사 워크플로:**
```text
Investigate the broken settings flow. Have code_mapper trace the owning code paths, browser_debugger reproduce the bug in the browser, and frontend_developer propose the smallest fix after the failure is understood. Wait for the read-heavy agents first, then continue.
```

**저장소 탐색 및 계획 워크플로:**
```text
Use search_specialist to locate the code related to payment retries, knowledge_synthesizer to summarize the current design, and refactoring_specialist to propose a minimal refactor plan. Return a concrete action list.
```

## AI Design + Build 생태계 도구


<br/>

당신은 AI로 제품을 출시하지만, 아무도 그에 대해 게시하지 않아 모든 출시가 조용히 사라집니다. [EveryFeed](https://everyfeed.ai/)는 당신의 AI 어시스턴트를 소셜 작업 공간에 연결하여 35개 이상의 채널에 초안 작성, 일정 예약 및 게시를 수행합니다 — 대행사도, 마케팅 채용도 필요 없습니다.

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

## 기여

기여를 환영합니다! 가이드라인은 [CONTRIBUTING.md](CONTRIBUTING.md)를 참조하세요.

- PR을 통해 새로운 서브에이전트 제출
- 기존 정의 개선
- 문제 및 버그 보고


## 라이선스

MIT License - [LICENSE](LICENSE) 참조

이 저장소는 유지 관리자와 커뮤니티가 모두 기여한 서브에이전트 정의의 큐레이션된 컬렉션입니다. 모든 서브에이전트는 보증 없이 "있는 그대로" 제공됩니다. 당사는 어떤 서브에이전트의 보안이나 정확성도 감사하거나 보장하지 않습니다. 사용 전에 검토하세요. 유지 관리자는 사용으로 인해 발생하는 어떤 문제에 대해서도 책임을 지지 않습니다.

나열된 서브에이전트에 문제가 있거나 기여를 제거하고 싶다면 이 저장소에 issue를 열어 주시면 신속하게 처리하겠습니다.
