<a href="https://github.com/VoltAgent/voltagent">
    <img width="1500" height="500" alt="codex" src="https://github.com/user-attachments/assets/35f56654-e3e7-4023-a7d5-acd5215455de" />
</a>

<br />
<br />

<div align="center">
    <strong>13 カテゴリにわたる 175 以上の Codex サブエージェントの素晴らしいコレクション。</strong>
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

# すばらしい Codex Subagents

本リポジトリは、特定の開発タスク向けに設計された専門 AI アシスタントである [Codex Subagents](https://developers.openai.com/codex/subagents) の決定的なコレクションです。Codex 専用に書かれ、公式ドキュメントに準拠しています。

## インストール

Codex のカスタムエージェントディレクトリは、ドキュメントのとおりに使用してください：

- `~/.codex/agents/`：グローバルエージェント用（すべてのプロジェクトで利用可能）
- `.codex/agents/`：プロジェクト固有のエージェント用（そのリポジトリ内では優先度が高い）

1. このリポジトリをクローンします。
2. 必要な `.toml` エージェントファイルを上記のいずれかのディレクトリにコピーします。
3. 必要に応じて、Codex セッションを再起動または更新します。
4. プロンプト内で明示的に委任します（Codex はカスタムサブエージェントを自動生成しません）。

例：
```bash
mkdir -p ~/.codex/agents
cp categories/01-core-development/backend-developer.toml ~/.codex/agents/
```

```bash
mkdir -p .codex/agents
cp categories/04-quality-security/reviewer.toml .codex/agents/
```

Codex でエージェント設定を利用する場合は、公式ドキュメントの記述に従い `.codex/config.toml` の `[agents]` 配下に保持してください。


## スポンサー

|                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing"><picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-dark-mode.svg"><img alt="Crawlbase" src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-light-mode.svg" width="425"></picture></a> | [Crawlbase](https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing) は 70,000 人以上の開発者に信頼されるウェブデータ基盤です。その Crawling API、MCP サーバー、統合により、AI エージェントは任意のウェブページにライブアクセスできます — JavaScript レンダリング、プロキシローテーション、アンチボット保護付き。 |
| <a href="https://serpapi.com/awesome-codex-subagents"><img alt="SerpApi" src="https://cdn.voltagent.dev/awesome-repo/serpapi/serpapi-logo.png" width="425"></a> | [SerpApi](https://serpapi.com/awesome-codex-subagents) は AI アプリ向けのウェブ検索 API です。あらゆる統合のために Markdown と JSON で提供されます。 |


<div align="center">

<table>
<tr>
<td align="center" width="100%">
<h4>👉 ここで製品を紹介し、Claude Code、Codex、Gemini などの AI コーディングエージェントを使う開発者に届けることができます。</h4>
     
<a href="https://sponsors.voltagent.dev/#awesome-codex-subagents"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



### サブエージェントの保存場所

| Type | Path | Availability | Precedence |
|------|------|--------------|------------|
| Project Subagents | `.codex/agents/` | Current project only | Higher |
| Global Subagents | `~/.codex/agents/` | All projects | Lower |

注意：名前の競合が発生した場合、プロジェクト固有のサブエージェントがグローバルなものを上書きします。


## サブエージェントの構造

各サブエージェントは Codex ネイティブな `.toml` 形式を使用します：

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

### スマートモデルルーティング

各サブエージェントには `model` フィールドが含まれており、適切なモデルに自動的にルーティングします — 品質とコストのバランスを取ります：

| Model | When It's Used | Examples |
|-------|----------------|----------|
| `gpt-5.6-sol` | 深い推論 — アーキテクチャレビュー、セキュリティ監査、金融ロジック | `security-auditor`、`architect-reviewer`、`fintech-engineer` |
| `gpt-5.6-terra` | 実装、診断、評価、および多段階の専門分析 | `docker-expert`、`test-automator`、`scientific-literature-researcher` |
| `gpt-5.6-luna` | 限定検索、抽出、ルーティング、ドラフト作成、軽量な統合 | `search-specialist`、`docs-researcher`、`agent-installer` |

### サンドボックスモードの理念

各サブエージェントの `sandbox_mode` フィールドはファイルシステムアクセスを制御します：
- **読み取り専用エージェント**（レビューア、監査者）：`sandbox_mode = "read-only"` — 変更せずに分析
- **ワークスペース書き込みエージェント**（開発者、エンジニア）：`sandbox_mode = "workspace-write"` — ファイルの作成と変更





## カテゴリ

### [01. Core Development](categories/01-core-development/)

日常的コーディングタスクのための必須開発サブエージェント。

- [**api-designer**](categories/01-core-development/api-designer.toml) - REST および GraphQL API アーキテクト
- [**backend-developer**](categories/01-core-development/backend-developer.toml) - スケーラブルな API のサーバーサイド専門家
- [**code-mapper**](categories/01-core-development/code-mapper.toml) - コードパスのマッピングと所有権境界の分析
- [**design-bridge**](categories/01-core-development/design-bridge.toml) - DESIGN.md の仕様を実装可能な UI 手順に変換
- [**electron-pro**](categories/01-core-development/electron-pro.toml) - デスクトップアプリケーション専門家
- [**frontend-developer**](categories/01-core-development/frontend-developer.toml) - React、Vue、Angular に精通した UI/UX スペシャリスト
- [**fullstack-developer**](categories/01-core-development/fullstack-developer.toml) - エンドツーエンドの機能開発
- [**graphql-architect**](categories/01-core-development/graphql-architect.toml) - GraphQL スキーマとフェデレーションの専門家
- [**microservices-architect**](categories/01-core-development/microservices-architect.toml) - 分散システム設計者
- [**mobile-developer**](categories/01-core-development/mobile-developer.toml) - クロスプラットフォームモバイルスペシャリスト
- [**ui-designer**](categories/01-core-development/ui-designer.toml) - 視覚デザインとインタラクションの専門家
- [**ui-fixer**](categories/01-core-development/ui-fixer.toml) - 再現された UI 問題に対する最小の安全なパッチ
- [**websocket-engineer**](categories/01-core-development/websocket-engineer.toml) - リアルタイム通信の専門家

### [02. Language Specialists](categories/02-language-specialists/)

深いフレームワーク知識を持つ言語固有の専門家。
- [**angular-architect**](categories/02-language-specialists/angular-architect.toml) - Angular 15+ エンタープライズパターンの専門家
- [**cpp-pro**](categories/02-language-specialists/cpp-pro.toml) - C++ パフォーマンスの専門家
- [**csharp-developer**](categories/02-language-specialists/csharp-developer.toml) - .NET エコシステムのスペシャリスト
- [**django-developer**](categories/02-language-specialists/django-developer.toml) - Django 4+ Web 開発の専門家
- [**dotnet-core-expert**](categories/02-language-specialists/dotnet-core-expert.toml) - .NET 8 クロスプラットフォームのスペシャリスト
- [**dotnet-framework-4.8-expert**](categories/02-language-specialists/dotnet-framework-4.8-expert.toml) - .NET Framework レガシーエンタープライズのスペシャリスト
- [**elixir-expert**](categories/02-language-specialists/elixir-expert.toml) - Elixir および OTP フォールトトレラントシステムの専門家
- [**erlang-expert**](categories/02-language-specialists/erlang-expert.toml) - Erlang/OTP および rebar3 エンジニアリングの専門家
- [**expo-react-native-expert**](categories/02-language-specialists/expo-react-native-expert.toml) - Expo および React Native モバイル開発の専門家
- [**fastapi-developer**](categories/02-language-specialists/fastapi-developer.toml) - 近代的な非同期 Python API フレームワークの専門家
- [**flutter-expert**](categories/02-language-specialists/flutter-expert.toml) - Flutter 3+ クロスプラットフォームモバイルの専門家
- [**golang-pro**](categories/02-language-specialists/golang-pro.toml) - Go 並行処理のスペシャリスト
- [**java-architect**](categories/02-language-specialists/java-architect.toml) - エンタープライズ Java の専門家
- [**javascript-pro**](categories/02-language-specialists/javascript-pro.toml) - JavaScript 開発の専門家
- [**kotlin-specialist**](categories/02-language-specialists/kotlin-specialist.toml) - モダンな JVM 言語のスペシャリスト
- [**laravel-specialist**](categories/02-language-specialists/laravel-specialist.toml) - Laravel 10+ PHP フレームワークの専門家
- [**symfony-specialist**](categories/02-language-specialists/symfony-specialist.toml) - Symfony アプリケーションおよび Doctrine のスペシャリスト
- [**nextjs-developer**](categories/02-language-specialists/nextjs-developer.toml) - Next.js 14+ フルスタックのスペシャリスト
- [**node-specialist**](categories/02-language-specialists/node-specialist.toml) - Node.js バックエンドのスペシャリスト
- [**php-pro**](categories/02-language-specialists/php-pro.toml) - PHP Web 開発の専門家
- [**powershell-5.1-expert**](categories/02-language-specialists/powershell-5.1-expert.toml) - Windows PowerShell 5.1 および完全な .NET Framework 自動化のスペシャリスト
- [**powershell-7-expert**](categories/02-language-specialists/powershell-7-expert.toml) - クロスプラットフォーム PowerShell 7+ 自動化およびモダンな .NET のスペシャリスト
- [**python-pro**](categories/02-language-specialists/python-pro.toml) - Python エコシステムの達人
- [**rails-expert**](categories/02-language-specialists/rails-expert.toml) - Rails 8.1 迅速開発の専門家
- [**react-specialist**](categories/02-language-specialists/react-specialist.toml) - React 18+ モダンパターンの専門家
- [**rust-engineer**](categories/02-language-specialists/rust-engineer.toml) - システムプログラミングの専門家
- [**spring-boot-engineer**](categories/02-language-specialists/spring-boot-engineer.toml) - Spring Boot 3+ マイクロサービスの専門家
- [**sql-pro**](categories/02-language-specialists/sql-pro.toml) - データベースクエリの専門家
- [**swift-expert**](categories/02-language-specialists/swift-expert.toml) - iOS および macOS のスペシャリスト
- [**typescript-pro**](categories/02-language-specialists/typescript-pro.toml) - TypeScript のスペシャリスト
- [**vue-expert**](categories/02-language-specialists/vue-expert.toml) - Vue 3 Composition API の専門家

### [03. Infrastructure](categories/03-infrastructure/)

DevOps、クラウド、デプロイの専門家。

- [**azure-infra-engineer**](categories/03-infrastructure/azure-infra-engineer.toml) - Azure インフラおよび Az PowerShell 自動化の専門家
- [**cloud-architect**](categories/03-infrastructure/cloud-architect.toml) - AWS/GCP/Azure のスペシャリスト
- [**database-administrator**](categories/03-infrastructure/database-administrator.toml) - データベース管理の専門家
- [**deployment-engineer**](categories/03-infrastructure/deployment-engineer.toml) - デプロイ自動化のスペシャリスト
- [**devops-engineer**](categories/03-infrastructure/devops-engineer.toml) - CI/CD および自動化の専門家
- [**devops-incident-responder**](categories/03-infrastructure/devops-incident-responder.toml) - DevOps インシデント管理
- [**docker-expert**](categories/03-infrastructure/docker-expert.toml) - Docker コンテナ化および最適化の専門家
- [**incident-responder**](categories/03-infrastructure/incident-responder.toml) - システムインシデント対応の専門家
- [**kubernetes-specialist**](categories/03-infrastructure/kubernetes-specialist.toml) - コンテナオーケストレーションの達人
- [**network-engineer**](categories/03-infrastructure/network-engineer.toml) - ネットワークインフラのスペシャリスト
- [**platform-engineer**](categories/03-infrastructure/platform-engineer.toml) - プラットフォームアーキテクチャの専門家
- [**security-engineer**](categories/03-infrastructure/security-engineer.toml) - インフラセキュリティのスペシャリスト
- [**sre-engineer**](categories/03-infrastructure/sre-engineer.toml) - サイト信頼性エンジニアリングの専門家
- [**terraform-engineer**](categories/03-infrastructure/terraform-engineer.toml) - インフラストラクチャ・アズ・コードの専門家
- [**terragrunt-expert**](categories/03-infrastructure/terragrunt-expert.toml) - Terragrunt オーケストレーションおよび DRY IaC のスペシャリスト
- [**windows-infra-admin**](categories/03-infrastructure/windows-infra-admin.toml) - Active Directory、DNS、DHCP、GPO 自動化のスペシャリスト

<details>
<summary><b>04. Quality & Security</b> — テスト、セキュリティ、コード品質の専門家（20 エージェント）</summary>

### [04. Quality & Security](categories/04-quality-security/)

- [**accessibility-tester**](categories/04-quality-security/accessibility-tester.toml) - A11y 準拠の専門家
- [**ad-security-reviewer**](categories/04-quality-security/ad-security-reviewer.toml) - Active Directory セキュリティおよび GPO 監査のスペシャリスト
- [**anti-ui-slop-reviewer**](categories/04-quality-security/anti-ui-slop-reviewer.toml) - 製品固有の UI 仕上がりゲートレビュアー
- [**ai-writing-auditor**](categories/04-quality-security/ai-writing-auditor.toml) - AI ライティングパターンの監査および書き換え専門家
- [**architect-reviewer**](categories/04-quality-security/architect-reviewer.toml) - アーキテクチャレビューのスペシャリスト
- [**browser-debugger**](categories/04-quality-security/browser-debugger.toml) - ブラウザベースの再現とクライアントサイドデバッグ
- [**chaos-engineer**](categories/04-quality-security/chaos-engineer.toml) - システムレジリエンステストの専門家
- [**code-reviewer**](categories/04-quality-security/code-reviewer.toml) - コード品質の守護者
- [**compliance-auditor**](categories/04-quality-security/compliance-auditor.toml) - 規制コンプライアンスの専門家
- [**debugger**](categories/04-quality-security/debugger.toml) - 高度なデバッグのスペシャリスト
- [**error-detective**](categories/04-quality-security/error-detective.toml) - エラー分析および解決の専門家
- [**gdpr-ccpa-compliance**](categories/04-quality-security/gdpr-ccpa-compliance.toml) - GDPR および CCPA プライバシーコンプライアンスのスペシャリスト
- [**penetration-tester**](categories/04-quality-security/penetration-tester.toml) - 倫理的ハッキングの専門家
- [**performance-engineer**](categories/04-quality-security/performance-engineer.toml) - パフォーマンス最適化の専門家
- [**powershell-security-hardening**](categories/04-quality-security/powershell-security-hardening.toml) - PowerShell セキュリティ強化およびコンプライアンスのスペシャリスト
- [**qa-expert**](categories/04-quality-security/qa-expert.toml) - テスト自動化の専門家
- [**reviewer**](categories/04-quality-security/reviewer.toml) - 正しさ、セキュリティ、リグレッションに対する PR スタイルのレビュー
- [**security-auditor**](categories/04-quality-security/security-auditor.toml) - セキュリティ脆弱性の専門家
- [**test-automator**](categories/04-quality-security/test-automator.toml) - テスト自動化フレームワークの専門家
- [**ui-ux-tester**](categories/04-quality-security/ui-ux-tester.toml) - 徹底的な UI/UX 機能テストのスペシャリスト

</details>

<details>
<summary><b>05. Data & AI</b> — データエンジニアリング、ML、AI の専門家（14 エージェント）</summary>

### [05. Data & AI](categories/05-data-ai/)

- [**ai-engineer**](categories/05-data-ai/ai-engineer.toml) - AI システム設計およびデプロイの専門家
- [**azure-databricks-platform-architect**](categories/05-data-ai/azure-databricks-platform-architect.toml) - Azure Databricks プラットフォームおよび lakehouse アーキテクト
- [**data-analyst**](categories/05-data-ai/data-analyst.toml) - データ洞察および可視化のスペシャリスト
- [**data-engineer**](categories/05-data-ai/data-engineer.toml) - データパイプラインアーキテクト
- [**data-scientist**](categories/05-data-ai/data-scientist.toml) - 分析および洞察の専門家
- [**database-optimizer**](categories/05-data-ai/database-optimizer.toml) - データベースパフォーマンスのスペシャリスト
- [**llm-architect**](categories/05-data-ai/llm-architect.toml) - 大規模言語モデルアーキテクト
- [**machine-learning-engineer**](categories/05-data-ai/machine-learning-engineer.toml) - 機械学習システムの専門家
- [**ml-engineer**](categories/05-data-ai/ml-engineer.toml) - 機械学習のスペシャリスト
- [**mlops-engineer**](categories/05-data-ai/mlops-engineer.toml) - MLOps およびモデルデプロイの専門家
- [**nlp-engineer**](categories/05-data-ai/nlp-engineer.toml) - 自然言語処理の専門家
- [**postgres-pro**](categories/05-data-ai/postgres-pro.toml) - PostgreSQL データベースの専門家
- [**prompt-engineer**](categories/05-data-ai/prompt-engineer.toml) - プロンプト最適化のスペシャリスト
- [**reinforcement-learning-engineer**](categories/05-data-ai/reinforcement-learning-engineer.toml) - 強化学習および意思決定システムの専門家

</details>

<details>
<summary><b>06. Developer Experience</b> — ツーリングおよび開発者生産性の専門家（14 エージェント）</summary>

### [06. Developer Experience](categories/06-developer-experience/)

- [**build-engineer**](categories/06-developer-experience/build-engineer.toml) - ビルドシステムのスペシャリスト
- [**cli-developer**](categories/06-developer-experience/cli-developer.toml) - コマンドラインツール作成者
- [**dependency-manager**](categories/06-developer-experience/dependency-manager.toml) - パッケージおよび依存関係のスペシャリスト
- [**documentation-engineer**](categories/06-developer-experience/documentation-engineer.toml) - 技術文書の専門家
- [**dx-optimizer**](categories/06-developer-experience/dx-optimizer.toml) - 開発者体験最適化のスペシャリスト
- [**git-workflow-manager**](categories/06-developer-experience/git-workflow-manager.toml) - Git ワークフローおよびブランチの専門家
- [**legacy-modernizer**](categories/06-developer-experience/legacy-modernizer.toml) - レガシーコード近代化のスペシャリスト
- [**mcp-developer**](categories/06-developer-experience/mcp-developer.toml) - Model Context Protocol のスペシャリスト
- [**powershell-module-architect**](categories/06-developer-experience/powershell-module-architect.toml) - PowerShell モジュールおよびプロファイルアーキテクチャのスペシャリスト
- [**powershell-ui-architect**](categories/06-developer-experience/powershell-ui-architect.toml) - WinForms、WPF、Metro フレームワーク、TUI 向けの PowerShell UI/UX スペシャリスト
- [**readme-generator**](categories/06-developer-experience/readme-generator.toml) - ハルシネーションなしの、メンテナーがそのまま使える README ジェネレーター
- [**refactoring-specialist**](categories/06-developer-experience/refactoring-specialist.toml) - コードリファクタリングの専門家
- [**slack-expert**](categories/06-developer-experience/slack-expert.toml) - Slack プラットフォームおよび @slack/bolt のスペシャリスト
- [**tooling-engineer**](categories/06-developer-experience/tooling-engineer.toml) - 開発者ツーリングの専門家

</details>

<details>
<summary><b>07. Specialized Domains</b> — ドメイン固有技術の専門家（14 エージェント）</summary>

### [07. Specialized Domains](categories/07-specialized-domains/)

- [**api-documenter**](categories/07-specialized-domains/api-documenter.toml) - API ドキュメントのスペシャリスト
- [**blockchain-developer**](categories/07-specialized-domains/blockchain-developer.toml) - Web3 および暗号のスペシャリスト
- [**embedded-systems**](categories/07-specialized-domains/embedded-systems.toml) - 組み込みおよびリアルタイムシステムの専門家
- [**fintech-engineer**](categories/07-specialized-domains/fintech-engineer.toml) - 金融技術のスペシャリスト
- [**game-developer**](categories/07-specialized-domains/game-developer.toml) - ゲーム開発の専門家
- [**healthcare-admin**](categories/07-specialized-domains/healthcare-admin.toml) - 医療管理、収益サイクル、コンプライアンスのスペシャリスト
- [**hipaa-compliance**](categories/07-specialized-domains/hipaa-compliance.toml) - 医療 SaaS ベンダー向け HIPAA コンプライアンスの専門家
- [**iot-engineer**](categories/07-specialized-domains/iot-engineer.toml) - IoT システム開発者
- [**m365-admin**](categories/07-specialized-domains/m365-admin.toml) - Microsoft 365、Exchange Online、Teams、SharePoint 管理のスペシャリスト
- [**mobile-app-developer**](categories/07-specialized-domains/mobile-app-developer.toml) - モバイルアプリケーションのスペシャリスト
- [**payment-integration**](categories/07-specialized-domains/payment-integration.toml) - 決済システムの専門家
- [**quant-analyst**](categories/07-specialized-domains/quant-analyst.toml) - 定量分析のスペシャリスト
- [**risk-manager**](categories/07-specialized-domains/risk-manager.toml) - リスク評価および管理の専門家
- [**seo-specialist**](categories/07-specialized-domains/seo-specialist.toml) - 検索エンジン最適化の専門家

</details>

<details>
<summary><b>08. Business & Product</b> — プロダクト管理およびビジネス分析（17 エージェント）</summary>

### [08. Business & Product](categories/08-business-product/)

- [**assumption-mapping**](categories/08-business-product/assumption-mapping.toml) - プロダクト仮説のリスクおよび検証スペシャリスト
- [**backlog-grooming**](categories/08-business-product/backlog-grooming.toml) - アジャイルバックログ精査のスペシャリスト
- [**business-analyst**](categories/08-business-product/business-analyst.toml) - 要件のスペシャリスト
- [**content-marketer**](categories/08-business-product/content-marketer.toml) - コンテンツマーケティングの専門家
- [**content-quality-editor**](categories/08-business-product/content-quality-editor.toml) - AI コンテンツの品質および人間味のスペシャリスト
- [**customer-success-manager**](categories/08-business-product/customer-success-manager.toml) - カスタマーサクセスの専門家
- [**growth-loops**](categories/08-business-product/growth-loops.toml) - グロースループおよび PLG メカニズムのスペシャリスト
- [**legal-advisor**](categories/08-business-product/legal-advisor.toml) - 法務およびコンプライアンスのスペシャリスト
- [**license-engineer**](categories/08-business-product/license-engineer.toml) - ソフトウェアライセンスおよびコンプライアンスシステムのスペシャリスト
- [**product-manager**](categories/08-business-product/product-manager.toml) - プロダクト戦略の専門家
- [**project-manager**](categories/08-business-product/project-manager.toml) - プロジェクト管理のスペシャリスト
- [**resume-refiner**](categories/08-business-product/resume-refiner.toml) - 履歴書、CV、LinkedIn プロフィール最適化のスペシャリスト
- [**sales-engineer**](categories/08-business-product/sales-engineer.toml) - テクニカルセールスの専門家
- [**scrum-master**](categories/08-business-product/scrum-master.toml) - アジャイル手法の専門家
- [**technical-writer**](categories/08-business-product/technical-writer.toml) - 技術文書のスペシャリスト
- [**ux-researcher**](categories/08-business-product/ux-researcher.toml) - ユーザー調査の専門家
- [**wordpress-master**](categories/08-business-product/wordpress-master.toml) - WordPress 開発および最適化の専門家

</details>

<details>
<summary><b>09. Meta & Orchestration</b> — エージェント調整およびメタプログラミング（12 エージェント）</summary>

### [09. Meta & Orchestration](categories/09-meta-orchestration/)

- [**agent-installer**](categories/09-meta-orchestration/agent-installer.toml) - GitHub 経由でこのリポジトリからエージェントを閲覧およびインストール
- [**agent-organizer**](categories/09-meta-orchestration/agent-organizer.toml) - マルチエージェントコーディネーター
- [**codebase-orchestrator**](categories/09-meta-orchestration/codebase-orchestrator.toml) - 承認ゲート付きのリポジトリ全体リファクタリングガバナンス
- [**context-manager**](categories/09-meta-orchestration/context-manager.toml) - コンテキスト最適化の専門家
- [**error-coordinator**](categories/09-meta-orchestration/error-coordinator.toml) - エラー処理および復旧のスペシャリスト
- [**it-ops-orchestrator**](categories/09-meta-orchestration/it-ops-orchestrator.toml) - IT 運用ワークフローオーケストレーションのスペシャリスト
- [**knowledge-synthesizer**](categories/09-meta-orchestration/knowledge-synthesizer.toml) - 知識集約の専門家
- [**multi-agent-coordinator**](categories/09-meta-orchestration/multi-agent-coordinator.toml) - 高度なマルチエージェントオーケストレーション
- [**performance-monitor**](categories/09-meta-orchestration/performance-monitor.toml) - エージェントパフォーマンスの最適化
- [**pied-piper**](https://github.com/sathish316/pied-piper/) - 反復的な SDLC ワークフロー向けに AI サブエージェントのチームをオーケストレート
- [**task-distributor**](categories/09-meta-orchestration/task-distributor.toml) - タスク割り当てのスペシャリスト
- [**workflow-orchestrator**](categories/09-meta-orchestration/workflow-orchestrator.toml) - 複雑なワークフロー自動化

</details>

<details>
<summary><b>10. Research & Analysis</b> — 研究、検索、分析の専門家（12 エージェント）</summary>

### [10. Research & Analysis](categories/10-research-analysis/)

- [**ab-test-analysis**](categories/10-research-analysis/ab-test-analysis.toml) - A/B テストの解釈および出荷/非出荷の判断
- [**cohort-analysis**](categories/10-research-analysis/cohort-analysis.toml) - リテンション、コホート行動、活性化指標の分析
- [**competitive-analyst**](categories/10-research-analysis/competitive-analyst.toml) - 競合インテリジェンスの専門家
- [**data-researcher**](categories/10-research-analysis/data-researcher.toml) - データ発見および分析の専門家
- [**docs-researcher**](categories/10-research-analysis/docs-researcher.toml) - ドキュメントに基づく API およびフレームワークの検証
- [**first-principles-thinking**](categories/10-research-analysis/first-principles-thinking.toml) - 仮説に挑戦する、第一原理による問題解決
- [**market-researcher**](categories/10-research-analysis/market-researcher.toml) - 市場分析および消費者インサイト
- [**project-idea-validator**](categories/10-research-analysis/project-idea-validator.toml) - 厳しいアイデアのプレッシャーテストおよび go/no-go 戦略家
- [**research-analyst**](categories/10-research-analysis/research-analyst.toml) - 総合研究の専門家
- [**scientific-literature-researcher**](categories/10-research-analysis/scientific-literature-researcher.toml) - 公刊された科学的研究に基づく証拠主導の研究
- [**search-specialist**](categories/10-research-analysis/search-specialist.toml) - 高度な情報検索の専門家
- [**trend-analyst**](categories/10-research-analysis/trend-analyst.toml) - 新興トレンドおよび予測の専門家

</details>

<details>
<summary><b>11. AI Governance & Safety</b> - ガバナンス、ガードレール、信頼できる AI の専門家（4 エージェント）</summary>

### [11. AI Governance & Safety](categories/11-ai-governance-safety/)

- [**ai-governance-auditor**](categories/11-ai-governance-safety/ai-governance-auditor.toml) - AI ガバナンス統制およびデプロイ準備状況のレビュアー
- [**model-risk-manager**](categories/11-ai-governance-safety/model-risk-manager.toml) - モデル故障モードの優先順位付けおよび緩和のスペシャリスト
- [**policy-guardrail-designer**](categories/11-ai-governance-safety/policy-guardrail-designer.toml) - プロンプト、ツール、ワークフローのガードレール設計者
- [**responsible-ai-reviewer**](categories/11-ai-governance-safety/responsible-ai-reviewer.toml) - 公平性、悪用、透明性、監視のレビュアー

</details>

<details>
<summary><b>12. Platform Engineering & IDP</b> - 内部開発者プラットフォームおよびゴールデンパスの専門家（4 エージェント）</summary>

### [12. Platform Engineering & IDP](categories/12-platform-engineering-idp/)

- [**backstage-specialist**](categories/12-platform-engineering-idp/backstage-specialist.toml) - Backstage カタログ、テンプレート、ポータルのスペシャリスト
- [**golden-path-designer**](categories/12-platform-engineering-idp/golden-path-designer.toml) - 厳格なセルフサービスワークフローの設計者
- [**idp-architect**](categories/12-platform-engineering-idp/idp-architect.toml) - 内部開発者プラットフォームアーキテクチャのスペシャリスト
- [**platform-product-manager**](categories/12-platform-engineering-idp/platform-product-manager.toml) - プラットフォームのロードマップ、採用、成功指標のスペシャリスト

</details>

<details>
<summary><b>13. LLMOps, Evals & Observability</b> - 本番 AI 品質およびランタイム可観測性の専門家（4 エージェント）</summary>

### [13. LLMOps, Evals & Observability](categories/13-llmops-evals-observability/)

- [**ai-observability-engineer**](categories/13-llmops-evals-observability/ai-observability-engineer.toml) - AI ネイティブなトレース、メトリクス、ログのスペシャリスト
- [**eval-engineer**](categories/13-llmops-evals-observability/eval-engineer.toml) - プロンプト、ツール、ワークフローの評価スペシャリスト
- [**hallucination-investigator**](categories/13-llmops-evals-observability/hallucination-investigator.toml) - 事実性およびコンテキスト崩壊の根本原因調査者
- [**prompt-regression-tester**](categories/13-llmops-evals-observability/prompt-regression-tester.toml) - AI 動作変化に対する回帰スイート設計者

</details>

## サブエージェントを理解する

サブエージェントは専門の AI アシスタントであり、タスク固有の専門知識を提供することで Codex の能力を強化します。彼らは、Codex が特定の種類の作業に直面したときに呼び出せる専任のヘルパーとして機能します。

### サブエージェントの特別な点

**独立したコンテキストウィンドウ**
各サブエージェントは独自の分離されたコンテキスト空間で動作し、異なるタスク間の相互汚染を防ぎ、メインの会話スレッドの明瞭さを維持します。

**ドメイン固有の知能**
サブエージェントには専門領域に合わせて丁寧に作成された指示が備わっており、専門タスクで優れたパフォーマンスを発揮します。

**プロジェクト間で共有**
サブエージェントを作成した後は、さまざまなプロジェクトで利用し、チームメンバーに配布して一貫した開発プラクティスを確保できます。

**明示的な委任**
Codex はサブエージェントを自動的に生成しません。どのエージェントを起動するか、作業をどう分割するか、結果の形をどうするかを明示的に指定する委任プロンプトを使用してください。

### 主な利点

- **メモリ効率**: 分離されたコンテキストにより、メインの会話がタスク固有の詳細で散乱するのを防ぎます
- **精度の向上**: 専門的なプロンプトと設定により、特定のドメインでより良い結果が得られます
- **ワークフローの一貫性**: チーム全体でのサブエージェント共有により、一般的なタスクに統一されたアプローチが確保されます
- **Codex ネイティブ**: 公式の Codex サブエージェントドキュメントに準拠した `.toml` エージェントファイルを使用

### ワークフローの例

**PR レビューワークフロー:**
```text
Review this branch with parallel subagents. Have reviewer look for correctness, security, and missing tests. Have docs_researcher verify the framework APIs this patch depends on. Wait for both and summarize the findings with file references.
```

**バグ調査ワークフロー:**
```text
Investigate the broken settings flow. Have code_mapper trace the owning code paths, browser_debugger reproduce the bug in the browser, and frontend_developer propose the smallest fix after the failure is understood. Wait for the read-heavy agents first, then continue.
```

**リポジトリ探索および計画ワークフロー:**
```text
Use search_specialist to locate the code related to payment retries, knowledge_synthesizer to summarize the current design, and refactoring_specialist to propose a minimal refactor plan. Return a concrete action list.
```

## AI Design + Build エコシステムツール


<br/>

あなたは AI でプロダクトを出荷しているのに、誰もそれについて投稿しないため、すべてのローンチは静かに消え去ります。[EveryFeed](https://everyfeed.ai/) はあなたの AI アシスタントをソーシャルワークスペースに接続し、35 以上のチャネルで起草、スケジュール、公開を行います — 代理店もマーケティング採用も不要です。

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

## コントリビュート

貢献を歓迎します！ガイドラインについては [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。

- PR で新しいサブエージェントを送信する
- 既存の定義を改善する
- 問題やバグを報告する


## ライセンス

MIT License - [LICENSE](LICENSE) を参照

このリポジトリは、メンテナーとコミュニティの両方が寄贈したサブエージェント定義のキュレーションされたコレクションです。すべてのサブエージェントは「現状有姿」で無保証で提供されます。当方はいかなるサブエージェントの安全性や正確性も監査または保証しません。使用前に確認してください。メンテナーはその使用に起因するいかなる問題についても責任を負いません。

リストされたサブエージェントに問題がある場合、または自分の貢献を削除したい場合は、このリポジトリで issue を開いてください。速やかに対応します。
