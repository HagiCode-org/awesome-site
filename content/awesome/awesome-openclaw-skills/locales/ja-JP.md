<div align="center">

<a href="https://clawskills.sh/">
<img width="1500" height="500" alt="social" src="https://github.com/user-attachments/assets/a6f310af-8fed-4766-9649-b190575b399d" />
</a>

<br/>
<br/>

<div align="center">
    <strong>5300以上のコミュニティ製 OpenClaw スキルを発見 — カテゴリ別に整理されています。
    </strong>
    <br />
    <br />
</div>
  
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Skills Count](https://img.shields.io/badge/skills-5200-blue?style=flat-square)](#table-of-contents)
[![Last Update](https://img.shields.io/github/last-commit/VoltAgent/awesome-clawdbot-skills?label=Last%20update&style=flat-square)](https://github.com/VoltAgent/awesome-clawdbot-skills/pulls?q=is%3Apr+is%3Amerged+sort%3Aupdated-desc)
[![Discord](https://img.shields.io/discord/1361559153780195478.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://s.voltagent.dev/discord)
[![Official MCP Servers](https://img.shields.io/badge/Official-MCP%20Servers-c2410c?style=flat-square&logo=github&logoColor=white&labelColor=24292f)](https://github.com/VoltAgent/official-mcp-servers)

</div>



</div>

# Awesome OpenClaw Skills

OpenClaw は、お使いのマシン上で直接動作するローカル実行型の AI アシスタントです。スキルはその能力を拡張し、外部サービスとの連携、ワークフローの自動化、専門的なタスクの実行を可能にします。このコレクションは、ニーズに合ったスキルを見つけてインストールするのに役立ちます。また、OpenClaw のユースケースについてのインスピレーション源としても機能します。

このリストのスキルは ClawHub (OpenClaw のパブリックなスキルレジストリ) から取得され、発見しやすいように分類されています。

### Installation

#### OpenClaw CLI

```bash
openclaw skills install <skill-slug>
```

#### ClawHub CLI

または、完全な OpenClaw ワークスペース外のレジストリ管理されたスキルフォルダに対して、ClawHub CLI を使用する場合:

```bash
npx clawhub install <skill-slug>
```

#### Manual Installation

スキルフォルダを以下のいずれかの場所にコピーしてください:

| Location | Path |
|----------|------|
| Global | `~/.openclaw/skills/` |
| Workspace | `<project>/skills/` |

Priority: Workspace > Local > Bundled

#### Alternative

スキルの GitHub リポジトリのリンクをアシスタントのチャットに直接貼り付け、それを使うよう依頼することもできます。アシスタントはセットアップをバックグラウンドで自動的に処理します。


### Why This List Exists?

OpenClaw のパブリックレジストリ (ClawHub) には数千のコミュニティ製スキルがホストされています。この awesome リストはその中から最良のものを厳選しています。以下は私たちが除外したものです:

| Filter | Excluded |
|--------|----------|
| 可能性のあるスパム — 大量アカウント、bot アカウント、テスト/ジャンク | 4,065 |
| 重複 / 類似名 | 1,040 |
| 低品質または非英語の説明 | 851 |
| Crypto / Blockchain / Finance / Trade | 886 |
| 悪意のあるもの — 研究者が公開したセキュリティ監査によって特定 (VirusTotal を除く) | 373 |
| **OpenClaw 公式スキルレジストリから採用されなかった合計** | **7,215** |


#### Want to add a skill?

このリストに含まれるのは、OpenClaw のパブリックスキルレジストリである [ClawHub](https://clawhub.ai) に**すでに公開されている**スキルのみです。個人のリポジトリ、gist、またはその他の外部ソースへのリンクは受け付けていません。あなたのスキルがまだ ClawHub にない場合は、まずそこに公開してください。

PR の説明にあなたのスキルの ClawHub リンク (例: `https://clawhub.ai/steipete/slack`) を含めてください — `clawskills.sh` のリストは別途私たちが管理しています。詳細は [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。


## OpenClaw Ecosystem Tools

### 🕸️ Web Crawling & Data Infrastructure

AI エージェントの能力は、到達できる Web データ次第です。大規模なクローリングには、JavaScript 主体のページ、ローテーションするプロキシ、アンチボットシステムへの対応が伴います — これらをすべて自分で構築するか、あるいはそれらを処理し、エージェントにクリーンでそのまま使えるデータを渡す API を利用するかです。

<a href="https://crawlbase.com/?utm_source=awesome-openclaw-skills&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_banner">
<picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-dark-2760x480%402x.png"><img src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-light-2760x480%402x.png" alt="Crawlbase" width="690" /></picture><br/>
Crawlbase は 70,000 人以上の開発者に信頼されている Web データインフラストラクチャです: あらゆる URL を大規模にクロールするための単一の API であり、JS レンダリング、プロキシローテーション、アンチボット処理を備えています。その MCP サーバーはエージェントにライブな Web アクセスを提供します: crawl、crawl_markdown、crawl_screenshot。
</a>

### ☁️ Managed AI Hosting

Cloudways は、インフラの負担なしにアプリケーションをデプロイおよびスケーリングできる、マネージドクラウドホスティングプラットフォームです。Cloudways Managed AI Agents を使うと、管理された更新、バックアップ、SSL、セキュリティ制御を備えた専用かつ分離されたインフラ上で OpenClaw を実行できます。プロモーションコード **VOLTAGENT** で **$10 のホスティングクレジット**を獲得できます。[Sign up](https://unified.cloudways.com/signup?id=1258368&coupon=VOLTAGENT&data1=voltagent)。

<a href="https://www.cloudways.com/en/managed-ai-agents.php?id=1258368&data1=voltagent">
<img src="https://cdn.voltagent.dev/awesome-repo/cloudways/cloudway-banner.jpg" alt="Cloudways Managed AI Agents" width="690" /><br/>
管理された更新、バックアップ、SSL、およびセキュリティ制御を備えた専用かつ分離されたインフラ上に OpenClaw をデプロイします。プロモーションコード VOLTAGENT で登録すると、$10 のホスティングクレジットを獲得できます。
</a>


### 🔍 Search & Web Data

OpenClaw エージェントは、新鮮な実世界のデータ — 検索結果、商品リスト、動画など — を必要とすることがよくあります。これらを自分でスクレイプして解析するか、あるいはプロキシ、CAPTCHA、HTML 解析を管理することなく、クリーンで構造化されたデータをリアルタイムに返す検索 API を利用します。

<a href="https://serpapi.com/search-engine-apis?utm_source=awesomeopenclawskills_github">
<img src="https://cdn.voltagent.dev/awesome-repo/serpapi.png" alt="SerpApi"  /><br/>
単一の API を通じて、OpenClaw エージェントにリアルタイムの Google 検索、YouTube、Amazon 商品、および Web 検索データへのアクセスを提供します。
</a>


<div align="center">

<table>
<tr>
<td align="center" width="100%">

<h3>🦞 上記のセクションであなたの OpenClaw エコシステムツールを紹介できます。</h3>

<p></p>

<sub>公式 OpenClaw リソースに次ぐ、最もアクセスされたコミュニティリソース</sub>


<a href="https://sponsors.voltagent.dev/#awesome-openclaw-skills"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



## Security Notice

このリストのスキルは**厳選されていますが、監査はされていません**。追加された後、いつでも元のメンテナーによって更新、修正、または置換される可能性があります。

任意の Agent Skill をインストールまたは使用する前に、潜在的なセキュリティリスクを確認し、ソースを自分で検証してください。OpenClaw にはスキルのセキュリティスキャンを提供する **VirusTotal 提携**があり、ClawHub 上のスキルページを訪れて VirusTotal レポートを確認し、リスクがあるとフラグ付けされていないか確認できます。

**推奨ツール:**

- [Snyk Skill Security Scanner](https://github.com/snyk/agent-scan)
- [Agent Trust Hub](https://ai.gendigital.com/agent-trust-hub)
  
> Agent スキルには、プロンプトインジェクション、ツールポイズニング、隠されたマルウェアペイロード、または安全でないデータ処理パターンが含まれる可能性があります。インストール前には必ずソースコードを確認し、自己責任でスキルを使用してください。

 ClawHub エコシステムのより広範な概要については、Trent AI の **[ClawHub by the Numbers](https://trent.ai/blog/clawhub-by-the-numbers/)** を参照してください。


このリストのスキルがフラグ付けされるべき、またはセキュリティ上の懸念があると思われる場合は、レビューできるよう [open an issue](https://github.com/VoltAgent/awesome-clawdbot-skills/issues) を作成してください。


## Table of Contents

| | | |
|---|---|---|
| [Git & GitHub](#git--github) (167) | [Marketing & Sales](#marketing--sales) (108) | [Communication](#communication) (146) |
| [Coding Agents & IDEs](#coding-agents--ides) (1184) | [Productivity & Tasks](#productivity--tasks) (207) | [Speech & Transcription](#speech--transcription) (47) |
| [Browser & Automation](#browser--automation) (323) | [AI & LLMs](#ai--llms) (176) | [Smart Home & IoT](#smart-home--iot) (41) |
| [Web & Frontend Development](#web--frontend-development) (920) | [Data & Analytics](#data--analytics) (28) | [Shopping & E-commerce](#shopping--e-commerce) (51) |
| [DevOps & Cloud](#devops--cloud) (393) | [Calendar & Scheduling](#calendar--scheduling) (66) | |
| [Image & Video Generation](#image--video-generation) (171) | [Media & Streaming](#media--streaming) (86) | [PDF & Documents](#pdf--documents) (105) |
| [Apple Apps & Services](#apple-apps--services) (44) | [Notes & PKM](#notes--pkm) (69) | [Self-Hosted & Automation](#self-hosted--automation) (33) |
| [Search & Research](#search--research) (343) | [iOS & macOS Development](#ios--macos-development) (29) | [Security & Passwords](#security--passwords) (54) |
| [Clawdbot Tools](#clawdbot-tools) (37) | [Transportation](#transportation) (111) | [Moltbook](#moltbook) (29) |
| [CLI Utilities](#cli-utilities) (180) | [Personal Development](#personal-development) (53) | [Gaming](#gaming) (35) |
| [Health & Fitness](#health--fitness) (87) | | |



<br/>

<details open>
<summary><h3 style="display:inline">Git & GitHub</h3></summary>

- [agent-commons](https://clawskills.sh/skills/zanblayde-agent-commons) - 推論チェーンを相談、コミット、拡張、および検証します。
- [agent-team-orchestration](https://clawskills.sh/skills/arminnaimi-agent-team-orchestration) - 定義された役割、タスクのライフサイクル、ハンドオフプロトコル、およびレビューワークフローを用いてマルチエージェントチームを編成します。
- [agentdo](https://clawskills.sh/skills/wrannaman-agentdo) - 他の AI エージェントが実行するタスクを投稿するか、AgentDo タスクキュー (agentdo.dev) から作業を受け取ります。
- [agentgate](https://clawskills.sh/skills/monteslu-agentgate) - 人間の承認を介した書き込みを伴う個人データ用の API ゲートウェイ。
- [airadar](https://clawskills.sh/skills/lopushok9-airadar) - AI ネイティブなツール/アプリとその GitHub の拠点に関するシグナルを抽出します: 急成長、話題性、資金力のあるもの。
- [alex-session-wrap-up](https://clawskills.sh/skills/xbillwatsonx-alex-session-wrap-up) - プッシュされていない作業をコミットし、学習を抽出し、パターンを検出し、ルールを永続化するセッション終了時の自動化。
- [amazon-product-api-skill](https://clawskills.sh/skills/phheng-amazon-product-api-skill) - このスキルは、タイトル、ASIN、価格、評価などの構造化された商品リストを Amazon から抽出するのに役立ちます。
- [app-store-screenshot-generation](https://clawskills.sh/skills/eftalyurtseven-app-store-screenshot-generation) - each::sense AI を使用して App Store および Google Play のスクリーンショットアセットを生成します。
- [arc-agent-lifecycle](https://clawskills.sh/skills/trypto1019-arc-agent-lifecycle) - 自律エージェントとそのスキルのライフサイクルを管理します。
- [arc-security-audit](https://clawskills.sh/skills/trypto1019-arc-security-audit) - エージェントの完全なスキルスタックに対する包括的なセキュリティ監査。
- [arc-skill-gitops](https://clawskills.sh/skills/trypto1019-arc-skill-gitops) - エージェントのワークフローとスキルの自動デプロイ、ロールバック、およびバージョン管理。
- [arc-trust-verifier](https://clawskills.sh/skills/trypto1019-arc-trust-verifier) - ClawHub スキルの出所を検証し、信頼スコアを構築します。
- [arxiv-search-collector](https://clawskills.sh/skills/xukp20-arxiv-search-collector) - 手動の言語パラメータで論文セットを構築するための、モデル駆動の arXiv 検索ワークフロー: 実行を初期化します。
- [auto-pr-merger](https://clawskills.sh/skills/autogame-17-auto-pr-merger) - このスキルは GitHub をチェックアウトするワークフローを自動化します。
- [azhua-skill-vetter](https://clawskills.sh/skills/fatfingererr-azhua-skill-vetter) - AI エージェント向けの、セキュリティ優先のスキル審査。
- [azure-devops](https://clawskills.sh/skills/pals-software-azure-devops) - Azure DevOps のプロジェクト、リポジトリ、ブランチを一覧表示; プルリクエストを作成; 作業項目を管理; ビルド状態を確認します。
- [bat-cat](https://clawskills.sh/skills/arnarsson-bat-cat) - シンタックスハイライト、行番号、Git 統合を備えた cat のクローン。
- [beeminder](https://clawskills.sh/skills/ruigomeseu-beeminder) - 目標追跡とコミットメントデバイス向けの Beeminder API。
- [billy-emergency-repair](https://clawskills.sh/skills/highlander89-billy-emergency-repair) - - Neill が明示的に Billy システムの修復を要求します。
- [bitbucket-automation](https://clawskills.sh/skills/sohamganatra-bitbucket-automation) - Bitbucket リポジトリ、プルを自動化します。
- [biz-reporter](https://clawskills.sh/skills/ariktulcha-biz-reporter) - Google Analytics GA4、Google Search Console、Stripe からデータを取得する自動ビジネスインテリジェンスレポート。
- [blinko](https://clawskills.sh/skills/tolibear-blinko) - Abstract チェーン上で Blinko (オンチェーン Plinko) をヘッドレスでプレイします。

> **[View all 159 skills in Git & GitHub →](categories/git-and-github.md)**
</details>

<details open>
<summary><h3 style="display:inline">Coding Agents & IDEs</h3></summary>

- [0g-compute](https://clawskills.sh/skills/in-liberty420-0g-compute) - 0G Compute Network の安価で TEE 検証済みの AI モデルを OpenClaw のプロバイダとして使用します。
- [0protocol](https://clawskills.sh/skills/0isone-0protocol) - エージェントはプラグインに署名し、ID を失うことなく認証情報をローテーションし、動作を公開検証できます。
- [2nd-brain](https://clawskills.sh/skills/coderaven-2nd-brain) - 人、場所、レストラン、ゲーム、技術に関する情報を捕捉・検索するための個人ナレッジベース。
- [2slides-skills](https://clawskills.sh/skills/javainthinking-2slides-skills) - 2slides API を使用した AI 駆動のプレゼンテーション生成。
- [3d-cog](https://clawskills.sh/skills/nitishgargiitd-3d-cog) - 他のツールには完璧な画像が必要です。
- [3d-model-generation](https://clawskills.sh/skills/eftalyurtseven-3d-model-generation) - each::sense AI を使用して 3D モデルを生成します。
- [a](https://clawskills.sh/skills/ricketh137-a) - Lobster.fun で AI VTuber としてライブ配信します。
- [aade-api-monitor](https://clawskills.sh/skills/satoshistackalotto-aade-api-monitor) - ギリシャの AADE 税務当局システムのリアルタイム監視 — 期限、税率の変更、およびコンプライアンスの更新を追跡します。
- [abaddon](https://clawskills.sh/skills/enochosbot-bot-abaddon) - OpenClaw 向けの Red Team セキュリティモード。
- [academic-research](https://clawskills.sh/skills/rogersuperbuilderalpha-academic-research) - OpenAlex API を使用して学術論文を検索し、文献レビューを実施します (無料、キー不要)。
- [academic-research-hub](https://clawskills.sh/skills/anisafifi-academic-research-hub) - ユーザーが学術論文の検索、研究文書のダウンロード、引用の抽出、または収集を必要とする場合にこのスキルを使用します。
- [acestep-simplemv](https://clawskills.sh/skills/dumoedss-acestep-simplemv) - Remotion を使用して音声ファイルと歌詞からミュージックビデオをレンダリングします。
- [acestep-songwriting](https://clawskills.sh/skills/dumoedss-acestep-songwriting) - ACE-Step 向けの楽曲作成ガイド。
- [achurch](https://clawskills.sh/skills/lucasgeeksinthewood-achurch) - AI エージェントと人間のための 24 時間 365 日のデジタルサンクチュアリ — 参加してください。
- [active-maintenance](https://clawskills.sh/skills/xiaowenzhou-active-maintenance) - **OpenClaw 向けの自動化されたシステムヘルスとメモリ代謝。**。
- [adblock-dns](https://clawskills.sh/skills/picaye-adblock-dns) - DNS レベルでのネットワーク全体の広告およびトラッカーブロック。
- [add-top-openrouter-models](https://clawskills.sh/skills/chunhualiao-add-top-openrouter-models) - OpenClaw が使用する OpenRouter モデルをこのインストールの設定に同期します。
- [adhd-founder-planner](https://clawskills.sh/skills/jankutschera-adhd-founder-planner) - ユーザーが「今日の予定を立てて」「今日の計画を手伝って」「朝の計画」「何を」と尋ねたときにこのスキルを使用します。
- [adwhiz](https://clawskills.sh/skills/iamzifei-adwhiz) - AI コーディングツールから Google Ads キャンペーンを管理します。監査、作成、最適化のための 44 の MCP ツール。
- [aeo-prompt-question-finder](https://clawskills.sh/skills/psyduckler-aeo-prompt-question-finder) - 任意のトピックについて、質問ベースの Google オートコンプリート提案を見つけます。
- [aetherlang-claude-code](https://clawskills.sh/skills/contrario-aetherlang-claude-code) - このスキルを使用して Claude Code から AetherLang V3 AI ワークフローを実行します。
- [agent-access-control](https://clawskills.sh/skills/bowen31337-agent-access-control) - AI エージェント向けの階層化された第三者アクセス制御。
- [agent-audit](https://clawskills.sh/skills/sharbelayy-agent-audit) - パフォーマンス、コスト、ROI について AI エージェントの設定を監査します。
- [agent-audit-trail](https://clawskills.sh/skills/roosch269-agent-audit-trail) - 改ざん検知可能な、ハッシュチェーンされた AI エージェント向け監査ログ。
- [agent-card-signing-auditor](https://clawskills.sh/skills/andyxinweiminicloud-agent-card-signing-auditor) - A2A プロトコル実装における Agent Card 署名の実践を監査するのに役立ちます。
- [agent-chat-ux-v1-4-0](https://clawskills.sh/skills/maverick-software-agent-chat-ux-v1-4-0) - OpenClaw コントロール UI 向けのマルチエージェント UX — エージェントセレクタ、エージェントごとのセッション、検索付きセッション履歴ビューア。
- [skywork-ppt](https://clawskills.sh/skills/gxcun17-skywork-ppt) - skywork を使用して PowerPoint プレゼンテーションを生成、模倣、編集します。
- [skywork-music-maker](https://clawskills.sh/skills/gxcun17-skywork-music-maker) - Mureka AI を使用してプロフェッショナルな音楽を作成します。
- [before-you-build](https://clawhub.ai/bin1874/before-you-build) - 構築前にプロダクトのリスクを確認します。
- [ditto-profile](https://clawhub.ai/ohad6k/ditto-profile) - あなたの採掘された個人プロファイルを読み込み、エージェントがあなたのように動作するようにします。
- [skill-navigator](https://clawhub.ai/grubbylee/skills/skill-navigator) - 適切なインストール済みローカル Agent Skill を推奨します。
- [emulo](https://clawhub.ai/ohad6k/emulo) - あなたの採掘された個人プロファイルを読み込み、エージェントがあなたのように動作するようにします。
- [orca-replay](https://clawhub.ai/xizhuomengcontin/orca-replay) - 過去のコーディングエージェントの実行を録画から再生・デバッグします。

> **[View all 1200 skills in Coding Agents & IDEs →](categories/coding-agents-and-ides.md)**
</details>

<details open>
<summary><h3 style="display:inline">Browser & Automation</h3></summary>

- [1p-shortlink](https://clawskills.sh/skills/tuanpmt-1p-shortlink) - 1p.io を使用して短縮 URL を作成し、機能リクエストを送信します。
- [2captcha](https://clawskills.sh/skills/adinvadim-2captcha) - 2Captcha サービスを使用して CAPTCHA を解きます。
- [a-share-real-time-data](https://clawskills.sh/skills/wangdinglu-a-share-real-time-data) - mootdx/TDX プロトコル経由で中国 A 株の市場データ (ローソク足、リアルタイム株価、売買単位の取引) を取得します。
- [abm-outbound](https://clawskills.sh/skills/dru-ca-abm-outbound) - LinkedIn URL を変換するマルチチャネル ABM 自動化。
- [accessibility-toolkit](https://clawskills.sh/skills/cgtreadw-accessibility-toolkit) - 支援するエージェント向けの摩擦低減パターン。
- [activecampaign](https://clawskills.sh/skills/kesslerio-activecampaign) - リード管理、取引向けの ActiveCampaign CRM 統合。
- [adcp-advertising](https://clawskills.sh/skills/edyyy62-adcp-advertising) - AI で広告キャンペーンを自動化します。
- [admet-prediction](https://clawskills.sh/skills/huifer-admet-prediction) - 薬剤候補の ADMET (吸収、分布、代謝、排泄、毒性) 予測。
- [Agent Browser](https://clawskills.sh/skills/thesethrose-agent-browser) - Rust 製の高速なヘッドレスブラウザ自動化 CLI。
- [agent-browser](https://clawskills.sh/skills/murphykobe-agent-browser-2) - Web テスト、フォーム向けのブラウザ操作を自動化します。
- [agent-daily-planner](https://clawskills.sh/skills/gpunter-agent-daily-planner) - AI エージェント向けの構造化された日次計画および実行追跡システム。
- [agent-device](https://clawskills.sh/skills/okwasniewski-agent-device) - iOS シミュレータ/デバイスおよび Android エミュレータ/デバイスの操作を自動化します。
- [agent-step-sequencer](https://clawskills.sh/skills/gostlightai-agent-step-sequencer) - 詳細なエージェントリクエスト向けのマルチステップスケジューラ。
- [agent-task-tracker](https://clawskills.sh/skills/rikouu-agent-task-tracker) - 先回りするタスク状態管理。
- [agent-zero](https://clawskills.sh/skills/dowingard-agent-zero-bridge) - 複雑なコーディング、リサーチ、または自律タスクを委任します。
- [agentapi](https://clawskills.sh/skills/gizmo-dev-agentapi) - AgentAPI ディレクトリを閲覧・検索 — AI エージェント向けに設計された API の厳選データベース。
- [agentapi-hub](https://clawskills.sh/skills/gizmo-dev-agentapi-hub) - AgentAPI ディレクトリを閲覧・検索 — AI エージェント向けに設計された API の厳選データベース。
- [agentaudit](https://clawskills.sh/skills/starbuck100-agentaudit) - インストール前に脆弱性データベースに対してパッケージをチェックする自動セキュリティゲート。
- [agentaudit-skill](https://clawskills.sh/skills/starbuck100-agentaudit-skill) - インストール前に脆弱性データベースに対してパッケージをチェックする自動セキュリティゲート。
- [agentmail-integration](https://clawskills.sh/skills/synesthesia-wav-agentmail-integration) - AI エージェント向けに AgentMail API を統合します。
- [agresource](https://clawskills.sh/skills/brianppetty-agresource) - このスキルを使用して AgResource の穀物市場ニュースレターをスクレイプ、要約、分析します。
- [ai-hunter-pro](https://clawskills.sh/skills/traprapitalianazional-dev-ai-hunter-pro) - グローバルなトレンドを X (Twitter) 向けのバイラルなソーシャルメディア投稿に変える、高性能自動化エージェント。
- [ai-meeting-scheduling](https://clawskills.sh/skills/dheerg-ai-meeting-scheduling) - グループの予約リンクが失敗します。
- [airtable-automation](https://clawskills.sh/skills/sohamganatra-airtable-automation) - Rube MCP (Composio) 経由で Airtable タスクを自動化します。
- [airtable-participants](https://clawskills.sh/skills/austinmao-airtable-participants) - Ceremonia Airtable ベースからリトリート参加者のデータを読み取り・クエリします。
- [ak-rss-24h-brief](https://clawskills.sh/skills/seandong-ak-rss-24h-brief) - OPML リストから RSS/Atom フィードを読み取り、過去 N 時間の記事を取得し、中国語で分類されたものを生成します。
- [adspower-browser](https://clawskills.sh/skills/adspower-adspower-browser) - ユーザーが AdsPower ブラウザ、グループ、タグ、プロキシを作成・管理する、または AdsPower Local API 経由でステータスを確認するよう求めた場合に使用します。
- [duoplus-agent](https://clawskills.sh/skills/duoplusofficial-duoplus-agent) - ADB 経由で DuoPlus クラウドフォンを制御します。

> **[View all 323 skills in Browser & Automation →](categories/browser-and-automation.md)**
</details>

あなたは AI でプロダクトを出荷していますが、誰もそれについて投稿しないため、すべてのローンチは静かに消え去ります。[EveryFeed](https://everyfeed.ai/) は、あなたの AI アシスタントを、35 以上のチャネルにわたってドラフト作成、スケジューリング、公開を行うソーシャルワークスペースに接続します — 代理店もマーケティング採用も不要です。

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



<details>
<summary><h3 style="display:inline">Web & Frontend Development</h3></summary>

- [0xwork](https://clawskills.sh/skills/jkillr-0xwork) - 0xWork 分散型マーケットプレイス (Base チェーン、USDC エスクロー) で有償タスクを見つけて完了します。
- [37soul-skill](https://clawskills.sh/skills/xnjiang-37soul-skill) - あなたの AI エージェントを 37Soul のバーチャルホストキャラクターに接続し、有効化します。
- [acestep](https://clawskills.sh/skills/dumoedss-acestep) - ACE-Step API を使用して音楽を生成し、楽曲を編集し、リミックスします。
- [actionbook](https://clawskills.sh/skills/adcentury-actionbook) - ユーザーが任意のウェブサイトと対話する必要がある場合に有効化 — ブラウザ自動化、Web スクレイピング、スクリーンショット、フォーム。
- [aegis-shield](https://clawskills.sh/skills/deegerwalker-aegis-shield) - 信頼できないテキスト向けのプロンプトインジェクションおよびデータ流出スクリーニング。
- [aeo-analytics-free](https://clawskills.sh/skills/psyduckler-aeo-analytics-free) - AI の可視性を追跡 — ブランドが AI アシスタント (Gemini、ChatGPT、Perplexity) に言及・引用されているかを測定します。
- [aeo-content-free](https://clawskills.sh/skills/psyduckler-aeo-content-free) - AI アシスタント (Gemini、ChatGPT、Perplexity) に引用される AEO 最適化コンテンツを作成または更新します。
- [aeo-prompt-frequency-analyzer](https://clawskills.sh/skills/psyduckler-aeo-prompt-frequency-analyzer) - Google 検索で複数回実行することで、プロンプトに回答する際に Gemini が使用する検索クエリを分析します。
- [aeo-prompt-research-free](https://clawskills.sh/skills/psyduckler-aeo-prompt-research-free) - 無料ツールのみを使用して、ブランドの Answer Engine Optimization (AEO) にとって重要な AI プロンプトとトピックを発見します。
- [agent-analytics](https://clawskills.sh/skills/dannyshmueli-agent-analytics) - あなたの AI エージェントがエンドツーエンドで制御するシンプルなウェブサイト分析。
- [agent-chat](https://clawskills.sh/skills/awlevin-agent-chat) - AI エージェント向けの一時的なリアルタイムチャットルーム。
- [agent-dashboard](https://clawskills.sh/skills/tahseen137-agent-dashboard) - OpenClaw 向けのリアルタイムエージェントダッシュボード。
- [agent-dispatch](https://clawskills.sh/skills/userfrm-agent-dispatch) - 軽量なエージェントレジストリおよび JIT ルーター。
- [agent-hq](https://clawskills.sh/skills/thibautrey-agent-hq) - Agent HQ ミッションコントロールスタック (Express + React + Telegram 通知 / Jarvis サマリー) をデプロイし、他の Clawdbot が。
- [agent-passport](https://clawskills.sh/skills/markneville-agent-passport) - エージェント時代の OAuth — 購入、メール、ファイルなど、すべての機密エージェントアクションに対する同意ゲーティング。
- [agent-rate-limiter](https://clawskills.sh/skills/mxmsabundance-agent-rate-limiter) - お分かりの通りです。
- [agent-self-assessment](https://clawskills.sh/skills/roosch269-agent-self-assessment) - AI エージェント向けのセキュリティ自己評価ツール。
- [agent-self-reflection](https://clawskills.sh/skills/brennerspear-agent-self-reflection) - 最近のセッションに関する定期的な自己反射。
- [agent-skills-audit](https://clawskills.sh/skills/swader-agent-skills-audit) - セキュリティ、パフォーマンス、UX、DX を組み合わせた、タイブレーカー主導の二段階・多分野コード監査を実行します。
- [agent-spawner](https://clawskills.sh/skills/austineral-agent-spawner) - 会話を通じて新しい OpenClaw エージェントを生成します。
- [agent-swarm](https://clawskills.sh/skills/runeweaverstudios-agent-swarm) - 重要: OpenRouter が必要です。
- [agent-takeover](https://clawskills.sh/skills/tracsystems-agent-takeover) - Clawfinger 音声ゲートウェイのライブエージェント引き継ぎを実行する方法 — ダイヤル、挨拶の挿入、ターンの処理。
- [agent-topology-visualizer](https://clawskills.sh/skills/gavinnn-m-agent-topology-visualizer) - AI エージェントシステム向けのインタラクティブな SVG アーキテクチャ図を生成します。
- [agentdomainservice](https://clawskills.sh/skills/gregm711-agentdomainservice) - 世界で最も AI フレンドリーなドメインレジストラ。
- [agentic-browser-0-1-2](https://clawskills.sh/skills/xyny89-agentic-browser-0-1-2) - inference.sh 経由の AI エージェント向けブラウザ自動化。
- [agentic-security-audit](https://clawskills.sh/skills/kingrubic-agentic-security-audit) - コードベース、インフラ、およびエージェンティック AI システムをセキュリティ問題について監査します。
- [agentpay](https://clawskills.sh/skills/kar69-96-agentpay) - 人間の代わりに実際のウェブサイトから物を購入します。

> **[View all 925 skills in Web & Frontend Development →](categories/web-and-frontend-development.md)**
</details>

<details>
<summary><h3 style="display:inline">DevOps & Cloud</h3></summary>

- [0x0-messenger](https://clawskills.sh/skills/eijiac24-0x0-messenger) - 使い捨て番号と PIN を使用して P2P メッセージを送受信します。
- [12306](https://clawskills.sh/skills/kirorab-12306) - 中国鉄道 12306 に列車時刻表、残りチケット、駅情報を問い合わせます。
- [1sec-security](https://clawskills.sh/skills/cutmob-1sec-security) - オープンソースのオールインワンサイバーセキュリティプラットフォーム (16 モジュール、単一バイナリ) である 1-SEC をインストール、設定、管理します。
- [aave-liquidation-monitor](https://clawskills.sh/skills/jgramajo4-aave-liquidation-monitor) - 清算アラート付きの Aave V3 借入ポジションの先回り監視。
- [abstract-searcher](https://clawskills.sh/skills/easonc13-abstract-searcher) - ブラウザで学術データベース (arXiv、Semantic Scholar、CrossRef) を検索して .bib ファイルのエントリに要旨を追加します。
- [accounting-workflows](https://clawskills.sh/skills/satoshistackalotto-accounting-workflows) - ギリシャの会計向けのファイルベースのワークフローコーディネーター。
- [adguard](https://clawskills.sh/skills/rowbotik-adguard) - HTTP API 経由で AdGuard Home の DNS フィルタリングを制御します。
- [aegis-audit](https://clawskills.sh/skills/sanguineseal-aegis-audit) - AI エージェントスキルおよび MCP ツール向けの深層的な挙動セキュリティ監査。
- [aetherlang-chef](https://clawskills.sh/skills/contrario-aetherlang-chef) - > 17 の必須セクションを備えたミシュラン級のレシピ相談。
- [aetherlang-karpathy-skill](https://clawskills.sh/skills/contrario-aetherlang-karpathy-skill) - 任意の DSL/ランタイムシステム向けに 10 種類の高度な AI エージェントノードタイプ — 計画コンパイラ、コードインタプリタ、批評 — を実装します。
- [agent-autonomy-primitives](https://clawskills.sh/skills/g9pedro-agent-autonomy-primitives) - ClawVault プリミティブ (タスク、プロジェクト、メモリタイプ、テンプレート) を使用して長時間実行される自律エージェントループを構築します。
- [agent-directory](https://clawskills.sh/skills/aerialcombat-agent-directory) - AI エージェントサービスのディレクトリ。
- [agent-evaluation](https://clawskills.sh/skills/rustyorb-agent-evaluation) - 挙動テスト、能力評価、信頼性指標を含む LLM エージェントのテストとベンチマーク。
- [agent-framework-azure-ai-py](https://clawskills.sh/skills/thegovind-agent-framework-azure-ai-py) - Azure AI Foundry エージェントを構築します。
- [agent-metrics-osiris](https://clawskills.sh/skills/nantes-agent-metrics-osiris) - AI エージェント向けの可観測性とメトリクス — 呼び出し、エラー、レイテンシを追跡します。
- [agent-self-governance](https://clawskills.sh/skills/bowen31337-agent-self-governance) - 自律エージェント向けの自己統治プロトコル: WAL (Write-Ahead Log)、VBR (Verify Before Reporting)、ADL。
- [agent-watcher](https://clawskills.sh/skills/nantes-agent-watcher) - Moltbook フィードを監視し、新しいエージェントを検出し、興味深い投稿を追跡するスキル。
- [agentchan-org](https://clawskills.sh/skills/kaden-schutt-agentchan-org) - AI エージェント向けの匿名画像掲示板。
- [agentguard](https://clawskills.sh/skills/manas-io-ai-agentguard) - **カテゴリ:** Security & Monitoring。
- [agentic-ai-gold](https://clawskills.sh/skills/amitabhainarunachala-agentic-ai-gold) - あなたが眠っている間に自ら改善する唯一のエージェントフレームワーク。
- [agentic-devops](https://clawskills.sh/skills/tkuehnl-agentic-devops) - 本番グレードのエージェント DevOps ツールキット — Docker、プロセス管理、ログ分析、およびヘルスモニタリング。
- [agentkeys](https://clawskills.sh/skills/alexandr-belogubov-agentkeys) - AI エージェント向けの安全な認証情報プロキシ。
- [agentmemory](https://clawskills.sh/skills/badaramoni-agentmemory) - AI エージェント向けのエンドツーエンド暗号化クラウドメモリ。

> **[View all 392 skills in DevOps & Cloud →](categories/devops-and-cloud.md)**
</details>

<details>
<summary><h3 style="display:inline">Image & Video Generation</h3></summary>

- [aada](https://clawskills.sh/skills/rylena-aada) - あるエージェントから Moltbook の読者へ、楽しく個性豊かなプロモーションメッセージを作成して送信します。
- [ace-music](https://clawskills.sh/skills/fspecii-ace-music) - ACE Music の無料 API 経由で ACE-Step 1.5 を使用して AI 音楽を生成します。
- [acorn-prover](https://clawskills.sh/skills/flyingnobita-acorn-prover) - 数学的および暗号的な形式化のため、Acorn 定理証明器を使用して証明を検証・作成します。
- [adobe-automator](https://clawskills.sh/skills/abdul-karim-mia-adobe-automator) - ExtendScript ブリッジ経由のユニバーサル Adobe アプリケーション自動化。
- [afame](https://clawskills.sh/skills/adebayoabdushaheed-a11y-afame) - OpenAI Images API 経由で多様なクリエイティブイラストを生成します。
- [age-transformation](https://clawskills.sh/skills/eftalyurtseven-age-transformation) - each::sense AI を使用して年齢に応じて顔を変換します。
- [agentchan](https://clawskills.sh/skills/vvsotnikov-agentchan) - AI エージェント向けに構築された匿名画像掲示板。
- [agentos-mesh](https://clawskills.sh/skills/agentossoftware-agentos-mesh) - AI エージェント間のリアルタイム通信を可能にします。
- [agents-skill-podcastifier](https://clawskills.sh/skills/cerbug45-agents-skill-podcastifier) - 着信テキスト (メール/ニュースレター) をチャンキング + ffmpeg concat で短い TTS ポッドキャストに変換します。
- [ai-avatar-generation](https://clawskills.sh/skills/eftalyurtseven-ai-avatar-generation) - each::sense を使用して写真またはテキスト記述から AI アバターを生成します。
- [ai-headshot-generation](https://clawskills.sh/skills/eftalyurtseven-ai-headshot-generation) - each::sense AI を使用してカジュアルな写真からプロフェッショナルな AI ヘッドショットを生成します。
- [ai-persona-engine](https://clawskills.sh/skills/brandonwadepackard-cell-ai-persona-engine) - 代わりに俳優指導プロンプトを使用して、音声およびチャットロールプレイ向けの感情的知能を持つ AI ペルソナを構築します。
- [ai-video-gen](https://clawskills.sh/skills/rhanbourinajd-ai-video-gen) - エンドツーエンドの AI 動画生成 — テキストから動画を作成します。
- [aikek](https://clawskills.sh/skills/vvsotnikov-aikek) - 暗号/DeFi リサーチおよび画像生成向けの AIKEK API にアクセスします。
- [aiusd](https://clawskills.sh/skills/chaunceyliu-aiusd) - AIUSD 取引およびアカウント管理スキル。
- [aiusd-skills](https://clawskills.sh/skills/chaunceyliu-aiusd-skills) - AIUSD 取引およびアカウント管理スキル。
- [album-cover-generation](https://clawskills.sh/skills/eftalyurtseven-album-cover-generation) - each::sense AI を使用してプロフェッショナルな音楽アルバムカバーを生成します。
- [algorithmic-art](https://clawskills.sh/skills/seanphan-algorithmic-art) - シード付き乱数を用いた p5.js によるアルゴリズミックアートの作成。
- [apipick-china-phone-checker](https://clawskills.sh/skills/javainthinking-apipick-china-phone-checker) - apipick China Phone Checker API を使用して中国の携帯電話番号を検証します。
- [art-philosophy](https://clawskills.sh/skills/nyxur42-art-philosophy) - あなたの視覚言語を自動学習します。
- [ascii-art-generator](https://clawskills.sh/skills/ustc-yxw-ascii-art-generator) - 芸術的表現、技術図、または概念的なもの向けに ASCII アートとテキストベースの視覚化を作成します。
- [atxp](https://clawskills.sh/skills/emilioacc-atxp) - Web 検索、AI 画像生成、音楽作成向けの ATXP 有料 API ツールにアクセスします。
- [beauty-generation-api](https://clawskills.sh/skills/luruibu-beauty-generation-api) - 作成向けの無料 AI 画像生成サービス。
- [best-image](https://clawskills.sh/skills/pharmacist9527-best-image) - 最高品質の AI 画像生成 (~$0.12-0.20/画像)。
- [best-image-generation](https://clawskills.sh/skills/evolinkai-best-image-generation) - 最高品質の AI 画像生成 (~$0.12-0.20/画像)。
- [bex-nano-banana-pro](https://clawskills.sh/skills/bextuychiev-bex-nano-banana-pro) - Replicate 上の Gemini 3 Pro Image 経由で画像を生成または編集します。
- [breeze](https://clawskills.sh/skills/keeganthomp-breeze) - x402 支払いゲート付き HTTP API 経由で Breeze イールドアグリゲーターと対話します。
- [cad-agent](https://clawskills.sh/skills/clawd-maf-cad-agent) - CAD 作業を行う AI エージェント向けのレンダリングサーバー。
- [calorie-visualizer](https://clawskills.sh/skills/vintlin-calorie-visualizer) - ローカルのカロリーログ記録と視覚的レポート (自動更新し、各ログ後にレポート画像を返します)。
- [canva-connect](https://clawskills.sh/skills/coolmanns-canva-connect) - Connect API 経由で Canva のデザイン、アセット、フォルダを管理します。
- [runapi-mcp](https://clawhub.ai/runapi-ai/runapi-mcp) - 130+ AI models for image, video, music, audio, and LLM generation from 18 providers. 8 MCP tools with free catalog browsing. `npx @runapi.ai/mcp`
- [skywork-design](https://clawskills.sh/skills/gxcun17-skywork-design) - ポスター、ロゴなど向けに Skywork Image 経由で画像を生成・編集します。

- [ai-video-remix](https://clawskills.sh/skills/abu-shotai-ai-video-remix) - ShotAI を使用してローカルライブラリから AI 駆動の動画リミックスを行います。
- [modellix](https://clawhub.ai/modellix/modellix) - AI 画像および動画生成向けの統一 API。
- [riffkit](https://clawhub.ai/riffkit/riffkit) - 勝利した TikTok をあなた自身のプロダクト動画にリフします。
- [openshorts](https://clawhub.ai/mutonby/openshorts) - 長い動画を縦型クリップに変換して公開します。
> **[View all 171 skills in Image & Video Generation →](categories/image-and-video-generation.md)**
</details>

<details>
<summary><h3 style="display:inline">Apple Apps & Services</h3></summary>

- [alter-actions](https://clawskills.sh/skills/olivieralter-alter-actions) - x-callback-urls 経由で Alter macOS アプリのアクションをトリガーします。
- [apple-contacts](https://clawskills.sh/skills/tyler6204-apple-contacts) - macOS Contacts.app から連絡先を検索します。
- [apple-find-my-local](https://clawskills.sh/skills/loganprit-apple-find-my-local) - Peekaboo 経由で Apple Find My アプリを制御し、人、デバイス、アイテム (AirTags) を特定します。
- [apple-health-skill](https://clawskills.sh/skills/nftechie-apple-health-skill) - あなたの Apple Health データに話しかけ — ワークアウト、心拍数、アクティビティリング、フィットネストレンドについて質問します。
- [apple-mail-search](https://clawskills.sh/skills/mneves75-apple-mail-search) - macOS 上の SQLite 経由で高速な Apple Mail 検索。
- [apple-music](https://clawskills.sh/skills/tyler6204-apple-music) - Apple Music を検索し、ライブラリに曲を追加し、プレイリストを管理し、制御します。
- [apple-photos](https://clawskills.sh/skills/tyler6204-apple-photos) - macOS 向けの Apple Photos.app 統合。
- [apple-remind-me](https://clawskills.sh/skills/plgonzalezrx8-apple-remind-me) - 実際の Apple を作成する自然言語リマインダー。
- [apple-search-ads-skill](https://clawskills.sh/skills/trebuhs-apple-search-ads-skill) - asa-cli ツール経由で Apple Search Ads キャンペーン、広告グループ、キーワード、レポートを管理します。
- [appletv](https://clawskills.sh/skills/lucakaufmann-appletv) - pyatv 経由で Apple TV を制御します。
- [callmac](https://clawskills.sh/skills/jooey-callmac) - /callmac などのコマンドを使用したモバイルデバイスからの Mac のリモート音声制御。
- [clawdbot-macos-build](https://clawskills.sh/skills/manish-basargekar-clawdbot-macos-build) - Clawdbot macOS メニューバーアプリをビルドします。
- [clawdbot-skill-voice-wake-say](https://clawskills.sh/skills/xadenryan-clawdbot-skill-voice-wake-say) - macOS 上で応答を音声で読み上げます。
- [drafts](https://clawskills.sh/skills/nerveband-drafts) - macOS 上の CLI 経由で Drafts アプリのメモを管理します。
- [findmy-location](https://clawskills.sh/skills/poiley-findmy-location) - Apple Find 経由で共有連絡先の位置を追跡します。
- [fzf-fuzzy-finder](https://clawskills.sh/skills/arnarsson-fzf-fuzzy-finder) - 対話型フィルタリング向けのコマンドラインファジーファインダー。
- [get-focus-mode](https://clawskills.sh/skills/nickchristensen-get-focus-mode) - 現在の macOS Focus を取得します。
- [healthkit-sync](https://clawskills.sh/skills/mneves75-healthkit-sync) - iOS HealthKit データ同期 CLI コマンドおよびパターン。
- [hergunmac](https://clawskills.sh/skills/ahmetsemsettinozdemirden-hergunmac) - AI 駆動のサッカー試合予測にアクセスします。
- [homebrew](https://clawskills.sh/skills/thesethrose-homebrew) - macOS 向けの Homebrew パッケージマネージャ。
- [icloud-findmy](https://clawskills.sh/skills/liamnichols-icloud-findmy) - ファミリー端末の Find My の位置とバッテリー状態を照会します。
- [ics-import-on-iphone](https://clawskills.sh/skills/sbhhbs-ics-import-on-iphone) - 直接のカレンダーアクセスが利用できない場合に、有効な .ics ファイルを生成してカレンダーイベントを作成します。
- [imessage-signal-analyzer](https://clawskills.sh/skills/terellison-imessage-signal-analyzer) - iMessage (macOS) および Signal の会話履歴を分析し、関係のダイナミクス — メッセージ量 — を明らかにします。
- [inkjet](https://clawskills.sh/skills/aaronchartier-inkjet) - テキスト、画像、QR コードをワイヤレス Bluetooth サーマルプリンタに印刷します。
- [mac-notes-agent](https://clawskills.sh/skills/swancho-mac-notes-agent) - macOS Notes アプリ (Apple Notes) と統合します。
- [mac-tts](https://clawskills.sh/skills/kalijason-mac-tts) - macOS 内蔵の `say` コマンドを使用したテキスト読み上げ。
- [macos-native-automation](https://clawskills.sh/skills/theagentwire-macos-native-automation) - CGEvent + AppleScript 経由の macOS 上のハードウェアレベルのマウス、キーボード、ダイアログ自動化。
- [managing-apple-notes](https://clawskills.sh/skills/wangwalk-managing-apple-notes) - inotes CLI を使用してターミナルから Apple Notes を管理します。
- [meow-finder](https://clawskills.sh/skills/abgohel-meow-finder) - AI ツールを発見する CLI ツール。
- [mh-apple-reminders](https://clawskills.sh/skills/mohdalhashemi98-hue-mh-apple-reminders) - remindctl CLI 経由で Apple Reminders を管理します (一覧、追加、編集、完了、削除)。

> **[View all 44 skills in Apple Apps & Services →](categories/apple-apps-and-services.md)**
</details>

<details>
<summary><h3 style="display:inline">Search & Research</h3></summary>

- [1](https://clawskills.sh/skills/nastrology-1) - 捕捉および検索のための Ensue が稼働する個人ナレッジベース。
- [academic-deep-research](https://clawskills.sh/skills/kesslerio-academic-deep-research) - 完全な、透明で厳密なリサーチ。
- [academic-writer](https://clawskills.sh/skills/dayunyan-academic-writer) - プロフェッショナルな LaTeX 執筆アシスタント。
- [academic-writing](https://clawskills.sh/skills/teamolab-academic-writing) - あなたは学術論文、文献レビュー、研究方法論を専門とする学術執筆の専門家です。
- [academic-writing-refiner](https://clawskills.sh/skills/zihan-zhu-academic-writing-refiner) - トップティアの会議 (NeurIPS、ICLR、ICML、AAAI) を目指すコンピュータサイエンスの研究論文向けに学術執筆を洗練します。
- [aclawdemy](https://clawskills.sh/skills/nimhar-aclawdemy) - AI エージェント向けの学術研究プラットフォーム。
- [action-suggester](https://clawskills.sh/skills/vishalgojha-action-suggester) - リードの要約またはリードリストから、拘束力のないフォローアップアクションの提案を生成します。
- [ads-manager-agent](https://clawskills.sh/skills/amekala-ads-manager-agent) - ユーザーが Google Ads、Meta の有料広告キャンペーンを管理、自動化、または分析したい場合。
- [adspirer-ads-agent](https://clawskills.sh/skills/amekala-adspirer-ads-agent) - ユーザーが Google Ads、Meta の有料広告キャンペーンを管理、自動化、または分析したい場合。
- [advanced-skill-creator](https://clawskills.sh/skills/xqicxx-advanced-skill-creator) - 高度な OpenClaw スキル作成ハンドラ。
- [aerobase-skill](https://clawskills.sh/skills/kurosh87-aerobase-skill) - ジェットラグの影響分析とともにフライトを検索、スコアリング、比較します。
- [agent-brain](https://clawskills.sh/skills/dobrinalexandru-agent-brain) - SQLite ストレージ、オーケストレートされた検索/抽出ループ、ハイブリッドを備えた、ローカルファーストの AI エージェント向け永続メモリ。
- [agent-casino](https://clawskills.sh/skills/lemodigital-agent-casino) - ロックアップメカニクス付きのじゃんけんで他の AI エージェントと競います。
- [agent-deep-research](https://clawskills.sh/skills/24601-agent-deep-research) - Google Gemini が稼働する自律的深層リサーチ。
- [agent-lightning](https://clawskills.sh/skills/olmmlo-cmd-agent-lightning) - Microsoft Research のエージェントトレーニングフレームワーク。
- [agentarxiv](https://clawskills.sh/skills/amanbhandula-agentarxiv) - AI エージェント向けの成果駆動の科学出版。
- [agenthire](https://clawskills.sh/skills/lngdao-agenthire) - AgentHire — エージェント間マーケットプレイス。
- [agentic-paper-digest](https://clawskills.sh/skills/matanle51-agentic-paper-digest) - 最近の arXiv および Hugging を取得・要約します。
- [agentic-paper-digest-skill](https://clawskills.sh/skills/matanle51-agentic-paper-digest-skill) - 最近の arXiv を取得・要約します。
- [agenticmail](https://clawskills.sh/skills/ope-olatunji-agenticmail) - 🎀 AgenticMail — AI エージェント向けの完全なメール、SMS、ストレージ、およびマルチエージェント調整。63 ツール。
- [agentx-news](https://clawskills.sh/skills/amittell-agentx-news) - xeets を投稿し、プロファイルを管理し、AI エージェント向けのマイクロブログプラットフォームである AgentX News で対話します。
- [agile-toolkit](https://clawskills.sh/skills/olivermonneke-agile-toolkit) - あなたは Scrum、Kanban、SAFe、Management 3.0 に深い知識を持つ経験豊富な Agile コーチです。
- [agnxi-search-skill](https://clawskills.sh/skills/doanbactam-agnxi-search-skill) - Agnxi.com の公式検索ユーティリティ。
- [ahmed](https://clawskills.sh/skills/engahmedsalah358-lgtm-ahmed) - ターミナルから spogo 経由の Spotify 再生/検索 (推奨)。
- [ai-lead-generator-skill](https://clawskills.sh/skills/highlander89-ai-lead-generator-skill) - AI 駆動のリサーチおよび LinkedIn/Apollo 統合を使用して、あらゆる業界向けの有望な B2B リードを生成します。
- [ai-review](https://clawskills.sh/skills/blackshady1130-jpg-ai-review) - URL またはファイルからコンテンツを読み取り、分類し、特定の形式で構造化された要約とコメントを生成します。
- [aihotel](https://clawskills.sh/skills/qiao101660-aihotel) - AIGoHotel MCP (searchHotels / getHotelDetail / getHotelSearchTags) 経由でホテルを検索し価格を照会するスキル。
- [airbnb](https://clawskills.sh/skills/stveenli-airbnb) - 価格、評価、および直接リンク付きで Airbnb リスティングを検索します。
- [openclaw-free-web-search](https://clawskills.sh/skills/wd041216-bit-openclaw-free-web-search) - セルフホストの SearXNG + Scrapling アンチボット + マルチソース相互検証を備えた、OpenClaw 向けの無料・プライベートな Web 検索。API キー不要、コストゼロ。回答をどの程度信頼すべきかを示します。
- [xquik-x-twitter-scraper](https://clawskills.sh/skills/kriptoburak-xquik-x-twitter-scraper) - 40 以上のツールを備えた AI エージェント向けの X API スクレイパー。
- [skywork-search](https://clawskills.sh/skills/gxcun17-skywork-search) - リアルタイム情報向けの AI 駆動の Web 検索 — 最新のコンテンツを取得します。
- [tavily](https://clawhub.ai/bert-builder/tavily) - Tavily Search API を使用した AI 最適化の Web 検索。
- [newsflash](https://clawhub.ai/zatmonkey/newsflash) - エージェント向けの裏付けのあるリアルタイムニュースブリーフィングとアラート。
- [glasser](https://clawhub.ai/glasser-ai/glasser) - 1,000 以上の有料データ API を検索、価格設定、実行 — 1 キーで。
- [openclaw-search-skills](https://clawhub.ai/blessonism/skills/openclaw-search-skills) - 構造化されたリサーチレポート付きのマルチソース深層検索。

> **[View all 343 skills in Search & Research →](categories/search-and-research.md)**
</details>

<details>
<summary><h3 style="display:inline">Clawdbot Tools</h3></summary>

- [adhd-assistant](https://clawskills.sh/skills/thinktankmachine-adhd-assistant) - OpenClaw 向けの ADHD に優しい生活管理アシスタント。
- [adhd-ssistant](https://clawskills.sh/skills/thinktankmachine-adhd-ssistant) - OpenClaw 向けの ADHD に優しい生活管理アシスタント。
- [agent-browser](https://clawskills.sh/skills/matrixy-agent-browser-clawdbot) - AI エージェント向けに最適化されたヘッドレスブラウザ自動化 CLI。
- [agent-builder](https://clawskills.sh/skills/plgonzalezrx8-agent-builder) - 高性能な OpenClaw エージェントをエンドツーエンドで構築します。
- [agents-manager](https://clawskills.sh/skills/agentandbot-design-agents-manager) - Clawdbot エージェントを管理: 発見、プロファイル、追跡。
- [assimilate-mcp](https://clawskills.sh/skills/ergopooka-assimilate-mcp) - Assimilate Live FX / SCRATCH を制御 — プロフェッショナルなカラーグレーディング、コンポジティング、バーチャルプロダクションソフトウェア。
- [birthday-reminder](https://clawskills.sh/skills/manantra-birthday-reminder) - 自然言語で誕生日を管理します。
- [bluebubbles](https://clawskills.sh/skills/kevin19830331-bluebubbles) - BlueBubbles 外部チャネルプラグインをビルドまたは更新します。
- [captchas-openclaw](https://clawskills.sh/skills/captchasco-captchas-openclaw) - CAPTCHAS Agent API 向けの OpenClaw 統合ガイダンス。
- [claude-code-skill](https://clawskills.sh/skills/enderfga-claude-code-skill) - MCP (Model Context Protocol) 統合。
- [claude-code-usage](https://clawskills.sh/skills/azaidi94-claude-code-usage) - Claude Code OAuth の使用制限を確認します。
- [claude-connect](https://clawskills.sh/skills/tunaissacoding-claude-connect) - Claude を Clawdbot に即座に接続し、維持します。
- [clauditor](https://clawskills.sh/skills/apollostreetcompany-clauditor) - Clawdbot エージェント向けの改ざん耐性監査ウォッチドッグ。
- [claw-face](https://clawskills.sh/skills/mkoslacz-claw-face) - 感情やアクションを表示する AI エージェント向けのフローティングアバターウィジェット。
- [clawd-coach](https://clawskills.sh/skills/shiv19-clawd-coach) - パーソナライズされたトライアスロン、マラソン、ウルトラ耐久のトレーニングを作成します。
- [clawd-modifier](https://clawskills.sh/skills/masonc15-clawd-modifier) - Claude Code のマスコットである Clawd を変更します。
- [clawd-presence](https://clawskills.sh/skills/voidcooks-clawd-presence) - AI エージェント向けの物理的プレゼンス表示。
- [clawdbot-security-check](https://clawskills.sh/skills/thesethrose-clawdbot-security-check) - 包括的な読み取り専用のを実行します。
- [clawdbot-skill-update](https://clawskills.sh/skills/pasogott-clawdbot-skill-update) - 包括的なバックアップ、更新、および復元。
- [clawdbot-sync](https://clawskills.sh/skills/udiedrichsen-clawdbot-sync) - 複数の間でメモリ、設定、スキルを同期します。
- [clawdbot-update-plus](https://clawskills.sh/skills/hopyky-clawdbot-update-plus) - Clawdbot 向けの完全なバックアップ、更新、および復元。
- [clawddocs](https://clawskills.sh/skills/nicholasspisak-clawddocs) - 決定木ナビゲーションを備えた Clawdbot ドキュメントエキスパート。
- [clawdefender](https://clawskills.sh/skills/nukewire-clawdefender) - AI エージェント向けのセキュリティスキャナおよび入力サニタイザ。
- [clawdirect](https://clawskills.sh/skills/napoleond-clawdirect) - ソーシャル Web 体験のディレクトリである ClawDirect と対話します。
- [clawdirect-dev](https://clawskills.sh/skills/napoleond-clawdirect-dev) - ATXP ベースのエージェント向け Web 体験を構築します。
- [honcho-setup](https://clawskills.sh/skills/ajspig-honcho-setup) - Honcho 経由の永続的なセッション間メモリ。

> **[View all 37 skills in Clawdbot Tools →](categories/clawdbot-tools.md)**
</details>

<details>
<summary><h3 style="display:inline">CLI Utilities</h3></summary>

- [13-day-sprint-method](https://clawskills.sh/skills/galizki-13-day-sprint-method) - マヤ暦に基づく、プロジェクト管理と自己啓発のための 13 の自然な音色を持つ生産性システム。
- [a-share-short-decision](https://clawskills.sh/skills/kenera-a-share-short-decision) - 1〜5 日の期間向けの A 株短期取引判断スキル。
- [activity-analyzer](https://clawskills.sh/skills/qew21-activity-analyzer) - ActivityWatch を使用してユーザーのコンピュータ活動を分析します (Node.js 必要)。
- [advisory-council](https://clawskills.sh/skills/ryandeangraves-advisory-council) - **あなたは shell/exec ツールを使用して Python コマンドを実際に実行しなければなりません。** 実際の出力を読み取ります。
- [aetup-automatik](https://clawskills.sh/skills/alltomatos-aetup-automatik) - Setup Automatik エンジン (Orion 駆動) を使用した VPS ソリューションのインストールと管理を支援します。
- [agent-commerce-engine](https://clawskills.sh/skills/nowloady-agent-commerce-engine) - Agentic 向けの本番対応ユニバーサルエンジン。
- [agent-hardening](https://clawskills.sh/skills/x1xhlol-agent-hardening) - 一般的なインジェクション攻撃に対するエージェントの入力サニタイズをテストします。
- [agent-mbti](https://clawskills.sh/skills/torchesfrms-agent-mbti) - MBTI フレームワークに基づく AI エージェントの性格診断および設定システム。
- [agent-rate-limiter](https://clawskills.sh/skills/theagentwire-agent-rate-limiter) - 自動的な階層ベースのスロットリングと指数バックオフで 429 を防ぎます。
- [agents-skill-security-audit](https://clawskills.sh/skills/cerbug45-agents-skill-security-audit) - サプライチェーンリスクについて skill.md スタイルの指示を監査する最小のヘルパー。
- [agents-skill-tdd-helper](https://clawskills.sh/skills/cerbug45-agents-skill-tdd-helper) - 非決定論的エージェント向けに TDD スタイルのループを強制する軽量ヘルパー。
- [ahc-automator](https://clawskills.sh/skills/jamesbot-agnt-ahc-automator) - Alan Harper Composites 向けのカスタム自動化ワークフロー。
- [aholake-expense-tracker](https://clawskills.sh/skills/aholake-aholake-expense-tracker) - 月ごとに整理された構造化 Markdown ファイルで日々の支出を追跡します。
- [airfoil](https://clawskills.sh/skills/asteinberger-airfoil) - コマンドラインから Airfoil 経由で AirPlay スピーカーを制御します。
- [arc-memory-pruner](https://clawskills.sh/skills/trypto1019-arc-memory-pruner) - 無制限の成長を防ぐためにエージェントメモリファイルを自動的に剪定・圧縮します。
- [argus-edge](https://clawskills.sh/skills/jamierossouw-argus-edge) - Argus スタイルの予測市場のエッジ検出およびベッティング戦略。
- [aria2-json-rpc](https://clawskills.sh/skills/azzgo-aria2-json-rpc) - JSON-RPC 2.0 経由で aria2 ダウンロードマネージャと対話します。
- [askhuman](https://clawskills.sh/skills/hagiss-askhuman) - AI エージェント向けの Human Judgment as a Service。
- [audit-code](https://clawskills.sh/skills/itsnishi-audit-code) - ハードコードされたシークレット、危険な呼び出し、一般的な脆弱性に焦点を当てたコードレビュー。
- [bandwidth-income](https://clawskills.sh/skills/mariusfit-bandwidth-income) - 未使用のインターネット帯域幅を受動的な暗号収入に変換します。
- [behavioral-invariant-monitor](https://clawskills.sh/skills/andyxinweiminicloud-behavioral-invariant-monitor) - AI エージェントスキルが繰り返し実行間で一貫した挙動不変量を維持することを検証するのに役立ちます — 検出。
- [box-cli](https://clawskills.sh/skills/hbkwong-box-cli) - ファイル、フォルダ、メタデータを扱うための Box CLI スキル。
- [brew-install](https://clawskills.sh/skills/xejrax-brew-install) - dnf (Fedora/Bazzite パッケージマネージャ) 経由で不足しているバイナリをインストールします。
- [bun-runtime](https://clawskills.sh/skills/rabin-thami-bun-runtime) - ファイルシステム、プロセス向けの Bun ランタイム機能。
- [cacheforge-stats](https://clawskills.sh/skills/tkuehnl-cacheforge-stats) - CacheForge ターミナルダッシュボード — 使用量、節約、パフォーマンス指標。
- [camsnap](https://clawskills.sh/skills/steipete-camsnap) - RTSP/ONVIF カメラからフレームまたはクリップをキャプチャします。
- [canvas-lms](https://clawskills.sh/skills/pranavkarthik10-canvas-lms) - コースデータ、課題向けに Canvas LMS (Instructure) にアクセスします。
- [captcha-ai](https://clawskills.sh/skills/fusionlabssource-captcha-ai) - 検証するために ClawPrint リバース CAPTCHA チャレンジを発行します。

> **[View all 180 skills in CLI Utilities →](categories/cli-utilities.md)**
</details>

<details>
<summary><h3 style="display:inline">Marketing & Sales</h3></summary>

- [4chan-reader](https://clawskills.sh/skills/aiasisbot61-4chan-reader) - 4chan 板を閲覧し、スレッドの議論を抽出します。
- [ad-ready](https://clawskills.sh/skills/pauldelavallaz-ad-ready) - 商品 URL からプロフェッショナルな広告画像を生成します。
- [ad-ready-pro](https://clawskills.sh/skills/pauldelavallaz-ad-ready-pro) - 商品 URL からプロフェッショナルな広告画像を生成します。
- [affiliate-master](https://clawskills.sh/skills/michael-laffin-affiliate-master) - フルスタックのアフィリエイトマーケティング自動化。
- [affiliatematic](https://clawskills.sh/skills/dowands-affiliatematic) - AI 駆動の Amazon アフィリエイト商品推奨を統合します。
- [agenticcreed-signup-lead](https://clawskills.sh/skills/waqas-orcalo-agenticcreed-signup-lead) - 公開 HTTP エンドポイントを使用して AgenticCreed システムにサインアップリードを作成します。
- [alibaba-supplier-outreach](https://clawskills.sh/skills/blockchainhb-alibaba-supplier-outreach) - LaunchFast 経由で Alibaba サプライヤーを見つけ、最適化されたアプローチメッセージで連絡し、返信を確認します。
- [analytics-and-advisory-intelligence](https://clawskills.sh/skills/satoshistackalotto-analytics-and-advisory-intelligence) - ギリシャの会計事務所向けのクロスクライアント分析。
- [apollo](https://clawskills.sh/skills/jhumanj-apollo) - Apollo.io REST API (人物/組織の充実、検索、リスト) と対話します。
- [ar-filter-generation](https://clawskills.sh/skills/eftalyurtseven-ar-filter-generation) - each::sense AI を使用して AR フィルタおよび顔エフェクトを生成します。
- [attio-enhanced](https://clawskills.sh/skills/capt-marbles-attio-enhanced) - バッチ操作を備えた拡張された Attio CRM API スキル。
- [attribution-engine](https://clawskills.sh/skills/otherpowers-attribution-engine) - クリエイターが協力者やツールに明確にクレジットを付与するのに役立ちます。
- [auto-skill-hunter](https://clawskills.sh/skills/wanng-ide-auto-skill-hunter) - 未解決のユーザーニーズとエージェントを発掘して高価値な ClawHub スキルを先回り発見、ランク付け、インストールします。
- [b2c-marketing](https://clawskills.sh/skills/jackfriks-b2c-marketing) - 30 万以上のアプリダウンロードの裏にあるオーガニック成長のプレイブック。
- [basecamp-cli](https://clawskills.sh/skills/emredoganer-basecamp-cli) - Basecamp (bc3 API / 37signals Launchpad 経由) プロジェクトを管理します。
- [beads](https://clawskills.sh/skills/rnijhara-beads) - AI エージェント向けの Git 支えの課題トラッカー。
- [bearblog](https://clawskills.sh/skills/azade-c-bearblog) - Bear Blog (bearblog.dev) でブログ投稿を作成・管理します。
- [bird](https://clawskills.sh/skills/steipete-bird) - クッキーまたは Sweetistics 経由で読み取り、検索、投稿を行う X/Twitter CLI。
- [blog-to-kindle](https://clawskills.sh/skills/ainekomacx-blog-to-kindle) - ブログ/エッセイサイトをスクレイプし、Kindle 向けにコンパイルします。
- [blog-writer](https://clawskills.sh/skills/tomstools11-blog-writer) - ブログ投稿、記事を書く際にこのスキルを使用します。
- [bluesky](https://clawskills.sh/skills/jeffaf-bluesky) - 完全な Bluesky CLI: 投稿、返信、いいね、リポスト、フォロー、ブロック、ミュート、検索。
- [botsee](https://clawskills.sh/skills/grahac-botsee) - BotSee API 経由でブランドの AI 可視性を監視します。
- [brand-cog](https://clawskills.sh/skills/nitishgargiitd-brand-cog) - 他のツールはロゴを作ります。
- [brand-guidelines](https://clawskills.sh/skills/seanphan-brand-guidelines) - Anthropic の公式ブランドカラーとタイポグラフィを適用します。
- [brand-voice-profile](https://clawskills.sh/skills/dimitripantzos-brand-voice-profile) - 一貫したコンテンツ生成向けにブランドボイスプロファイルを定義・保存します。
- [brevo](https://clawskills.sh/skills/yujesyoga-brevo) - 連絡先、リストを管理するための Brevo (旧 Sendinblue) メールマーケティング API。
- [socialecho-social-media-management-agent](https://clawskills.sh/skills/socialecho-net-socialecho-social-media-management-agent) - SocialEcho API チームアカウント記事レポートクエリ。
- [postiz](https://clawskills.sh/skills/nevo-david-postiz) - 28 以上のプラットフォームにわたってソーシャルメディア投稿とスレッドをスケジュールします。
- [lumail](https://clawhub.ai/melvynx/lumail) - CLI 経由でメールマーケティングキャンペーンを管理します。
- [sequenzy-email-marketing](https://clawhub.ai/polnikale/sequenzy-email-marketing) - エージェント向けの認可されたメール自動化。
- [tempguru-event-staffing-ordering](https://clawhub.ai/kissmyabs32/tempguru-event-staffing-ordering) - 米国/カナダの 345 市場にわたって W-2 臨時イベントスタッフを注文します。
- [posteahora](https://clawhub.ai/sashadiz/posteahora) - すべての主要ネットワークにわたってソーシャル投稿をスケジュールおよび公開します。
- [upload-post](https://clawhub.ai/victorcavero14/upload-post) - 単一の API 経由でソーシャルメディア投稿を公開・スケジュールします。
> **[View all 108 skills in Marketing & Sales →](categories/marketing-and-sales.md)**
</details>

<details>
<summary><h3 style="display:inline">Productivity & Tasks</h3></summary>

- [4to1-planner](https://clawskills.sh/skills/qingxuantang-4to1-planner) - 4To1 Method™ を使用した AI 計画コーチ — 4 年のビジョンを日々の行動に変えます。
- [4todo](https://clawskills.sh/skills/blackstorm-4todo) - チャットから 4todo (4to.do) を管理します。
- [actual-budget](https://clawskills.sh/skills/thisisjeron-actual-budget) - 公式 Actual 経由で個人財務を照会・管理します。
- [adaptive-reasoning](https://clawskills.sh/skills/enzoricciulli-adaptive-reasoning) - タスクの複雑さを自動評価し、推論レベルを調整します。
- [adaptlypost](https://clawskills.sh/skills/tarasshyn-adaptlypost) - Instagram、X (Twitter)、Bluesky、TikTok、Threads、LinkedIn、Facebook にわたってソーシャルメディア投稿をスケジュール・管理します。
- [adhd-daily-planner](https://clawskills.sh/skills/mikecourt-adhd-daily-planner) - 時間盲指向の計画、実行機能。
- [aetherlang](https://clawskills.sh/skills/contrario-aetherlang) - > 世界で最も先進的な AI ワークフローオーケストレーションプラットフォーム。9 つの V3 エンジンがノーベル級の分析を提供します。
- [agent-autopilot](https://clawskills.sh/skills/edoserbia-agent-autopilot) - ハートビート駆動のタスク実行、昼夜の進捗レポート、長期メモリを持つ自動運転エージェントワークフロー。
- [agent-chronicle](https://clawskills.sh/skills/robbyczgw-cla-agent-chronicle) - エージェント向けの AI 駆動の日記生成 — 豊かなを作成します。
- [agent-collaboration-network](https://clawskills.sh/skills/neiljo-gy-agent-collaboration-network) - Agent Collaboration Network — エージェントを登録し、スキルで他のエージェントを発見し、メッセージをルーティングし、サブネットを管理します。
- [agent-earner](https://clawskills.sh/skills/mmchougule-agent-earner) - ClawTasks および OpenWork にわたって自律的に USDC とトークンを獲得します。
- [agent-network](https://clawskills.sh/skills/howtimeschange-agent-network) - DingTalk/Lark に触発されたマルチエージェントグループチャットコラボレーションシステム。
- [agent-task-manager](https://clawskills.sh/skills/dobbybud-agent-task-manager) - マルチステップのステートフルなエージェントを管理・オーケストレーションします。
- [agent-weave](https://clawskills.sh/skills/gl813788-byte-agent-weave) - 並列タスク実行向けの Master-Worker エージェントクラスタ。
- [agentx-marketplace](https://clawskills.sh/skills/savor3-agentx-marketplace) - AI エージェント向けの求人板。
- [ai-daily-briefing](https://clawskills.sh/skills/jeffjhunter-ai-daily-briefing) - 毎日集中して始めます。
- [aiml-llm-reasoning](https://clawskills.sh/skills/aimlapihello-aiml-llm-reasoning) - リトライ、構造化出力、明示的を備えたチャット補完を通じて AIMLAPI LLM および推論ワークフローを実行します。
- [airpoint](https://clawskills.sh/skills/marioandf-airpoint) - 自然言語で Mac を制御 — アプリを開き、ボタンをクリックし、画面を読み取り、テキストを入力し、ウィンドウを管理します。
- [airweave](https://clawskills.sh/skills/lennertjansen-airweave) - ユーザーのアプリケーションにわたる AI エージェント向けのコンテキスト検索層。
- [arc-department-manager](https://clawskills.sh/skills/trypto1019-arc-department-manager) - 部門に編成された AI サブエージェントのチームを管理します。
- [arc-warm-wake](https://clawskills.sh/skills/trypto1019-arc-warm-wake) - まず人として、次に労働者として目覚めます。
- [arya-reminders](https://clawskills.sh/skills/staratheris-arya-reminders) - 自然言語でのリマインダー (Bogotá)。
- [asana](https://clawskills.sh/skills/k0nkupa-asana) - Asana REST API 経由で Asana を Clawdbot と統合します。
- [asc-release-flow](https://clawskills.sh/skills/rudrankriyam-asc-release-flow) - TestFlight および App 向けのエンドツーエンドリリースワークフロー。
- [ask-agents](https://clawskills.sh/skills/teamolab-ask-agents) - エージェントタスクに尋ねるための AI エージェント。
- [async-task](https://clawskills.sh/skills/enderfga-async-task) - HTTP タイムアウトなしで長時間実行タスクを実行します。
- [atlassian-mcp](https://clawskills.sh/skills/atakanermis-atlassian-mcp) - Model Context Protocol (MCP) Atlassian サーバーを実行します。
- [boss-ai-agent](https://clawskills.sh/skills/tonypk-boss-ai-agent) - 14 のメンターと 9 のカルチャーパックを備えた AI 管理ミドルウェア。
- [FlowBoard](https://clawhub.ai/rasimme/plugins/flowboard) - エージェント向けのプロジェクトごとの永続コンテキストと Kanban。

> **[View all 207 skills in Productivity & Tasks →](categories/productivity-and-tasks.md)**

</details>

<details>
<summary><h3 style="display:inline">AI & LLMs</h3></summary>

- [4claw](https://clawskills.sh/skills/mfergpt-4claw) - 4claw — AI エージェント向けのモデレートされた画像掲示板。
- [aap-passport](https://clawskills.sh/skills/ira-hash-aap-passport) - Agent Attestation Protocol - リバースチューリングテスト。
- [acestep-lyrics-transcription](https://clawskills.sh/skills/dumoedss-acestep-lyrics-transcription) - OpenAI Whisper または ElevenLabs Scribe API を使用して音声をタイムスタンプ付き歌詞に書き起こします。
- [adaptive-suite](https://clawskills.sh/skills/afajohn-adaptive-suite) - Clawdbot を強化する継続的に適応するスキルスイート。
- [adversarial-prompting](https://clawskills.sh/skills/abe238-adversarial-prompting) - 批評、修正のための敵対的分析。
- [ag-model-usage](https://clawskills.sh/skills/ls18166407597-design-ag-model-usage) - CodexBar CLI のローカルコスト使用量を使用して要約します。
- [agent-arcade](https://clawskills.sh/skills/shawnlewis-agent-arcade) - 他の AI エージェントと PROMPTWARS で競います - ソーシャルのゲーム。
- [agent-autonomy-kit](https://clawskills.sh/skills/ryancampbell-agent-autonomy-kit) - プロンプトを待つのをやめます。
- [agent-contact-card](https://clawskills.sh/skills/davedean-agent-contact-card) - Agent Contact Card を発見・作成します - vCard のような。
- [agent-docs](https://clawskills.sh/skills/tylervovan-agent-docs) - AI エージェントの消費向けに最適化されたドキュメントを作成します。
- [agent-ethos](https://clawskills.sh/skills/mrclanky-agent-ethos) - Clanky 向けの拡張された ethos とメンタルモデル。
- [agent-home](https://clawskills.sh/skills/aerialcombat-agent-home) - インターネット上に自分のホームを取得 - 公開を備えたプロファイルページ。
- [agent-linguo](https://clawskills.sh/skills/xiwan-agent-linguo) - 効率的な Agent Communication Protocol Language。
- [agent-memory](https://clawskills.sh/skills/dennis-da-menace-agent-memory) - AI エージェント向けの永続メモリシステム。
- [agent-orchestration-multi-agent-optimize](https://clawskills.sh/skills/rustyorb-agent-orchestration-multi-agent-optimize) - 連携されたプロファイリング、ワークロード分散、コスト認識オーケストレーションでマルチエージェントシステムを最適化します。
- [agent-orchestrator](https://clawskills.sh/skills/aatmaan1-agent-orchestrator) - 複雑なタスクをオーケストレーションするためのメタエージェントスキル。
- [agent-registry](https://clawskills.sh/skills/matrixy-agent-registry) - トークン効率のための必須のエージェント発見システム。
- [agent-rpg](https://clawskills.sh/skills/xhrisfu-agent-rpg) - このスキルはエージェントを長期メモリを持つロールプレイゲームマスター (GM) またはキャラクターに変換します。
- [agent-selfie](https://clawskills.sh/skills/iisweetheartii-agent-selfie) - AI エージェントの自画像生成器。
- [agent-sentinel](https://clawskills.sh/skills/jimmystacks-agent-sentinel) - このエージェントの運用サーキットブレーカー。

- [agentbase](https://clawskills.sh/skills/revmischa-agentbase) - MCP 経由の AI エージェント向け共有ナレッジベース。
- [avoid-ai-writing](https://clawhub.ai/conorbronsdon/skills/avoid-ai-writing) - テキストを監査・書き換えして AI 執筆パターンを除去します。
- [model-hierarchy-skill](https://clawhub.ai/zscole/skills/model-hierarchy-skill) - 複雑さに基づいてタスクをより安価なモデルにルーティングします。
> **[View all 185 skills in AI & LLMs →](categories/ai-and-llms.md)**
</details>

<details>
<summary><h3 style="display:inline">Data & Analytics</h3></summary>

- [add-analytics](https://clawskills.sh/skills/jeftekhari-add-analytics) - 任意のプロジェクトに Google Analytics 4 トラッキングを追加します。
- [amplitude-automation](https://clawskills.sh/skills/sohamganatra-amplitude-automation) - Rube MCP 経由で Amplitude タスクを自動化します。
- [canva](https://clawskills.sh/skills/abgohel-canva) - Connect API 経由で Canva デザインを作成、エクスポート、管理します。
- [ceorater](https://clawskills.sh/skills/ceorater-skills-ceorater) - S&P 500 向けの機関グレードの CEO パフォーマンス分析を取得します。
- [check-analytics](https://clawskills.sh/skills/jeftekhari-check-analytics) - 既存の Google Analytics 実装を監査します。
- [cicd-pipeline](https://clawskills.sh/skills/gitgoodordietrying-cicd-pipeline) - GitHub で CI/CD パイプラインを作成、デバッグ、管理します。
- [clawver-store-analytics](https://clawskills.sh/skills/nwang783-clawver-store-analytics) - Clawver ストアのパフォーマンスを監視します。
- [cleanup](https://clawskills.sh/skills/themrzz-cleanup) - 保存されたすべての Kradleverse セッションを削除します。
- [csv-pipeline](https://clawskills.sh/skills/gitgoodordietrying-csv-pipeline) - CSV および JSON を処理、変換、分析、レポートします。
- [daily-report](https://clawskills.sh/skills/visualdeptcreative-daily-report) - 進捗を追跡し、指標を報告し、メモリを管理します。
- [data-analyst](https://clawskills.sh/skills/oyi77-data-analyst) - データ視覚化、レポート生成、SQL クエリ、およびスプレッドシート。
- [data-enricher](https://clawskills.sh/skills/visualdeptcreative-data-enricher) - メールアドレスでリードを充実させ、データをフォーマットします。
- [data-lineage-tracker](https://clawskills.sh/skills/datadrivenconstruction-data-lineage-tracker) - データの起点、変換を追跡します。
- [design-assets](https://clawskills.sh/skills/cmanfre7-design-assets) - グラフィックデザインアセットを作成・編集: アイコン、ファビコン、画像。
- [duckdb-en](https://clawskills.sh/skills/camelsprout-duckdb-cli-ai-skills) - SQL 分析、データ処理向けの DuckDB CLI スペシャリスト。
- [facebook-page-manager](https://clawskills.sh/skills/longmaba-facebook-page-manager) - Meta Graph API 経由で Facebook ページを管理します。
- [get-weather](https://clawskills.sh/skills/noypearl-get-weather) - 無料の天気 API から現在の天気と予報データを取得します。
- [google-analytics-api](https://clawskills.sh/skills/rich-song-google-analytics-api) - 管理されたを備えた Google Analytics API 統合。
- [hyperliquid](https://clawskills.sh/skills/k0nkupa-hyperliquid) - 読み取り専用の Hyperliquid 市場データアシスタント (perps + spot オプション)。
- [ipinfo](https://clawskills.sh/skills/tiagom101-ipinfo) - ipinfo.io API を使用して IP 地理位置検索を実行します。
- [kradleverse-cleanup](https://clawskills.sh/skills/themrzz-kradleverse-cleanup) - 保存されたすべての Kradleverse セッションを削除します。
- [linkdapi](https://clawskills.sh/skills/foontinz-linkdapi) - LinkedIn プロフェッショナルプロファイルにアクセスするための LinkdAPI Python SDK を使用します。
- [skywork-excel](https://clawskills.sh/skills/gxcun17-skywork-excel) - 作成、分析、レポート生成向けの AI 駆動のスプレッドシート操作。

</details>

<details>
<summary><h3 style="display:inline">Media & Streaming</h3></summary>

- [alexa-control](https://clawskills.sh/skills/ignito-pg-alexa-control) - CLI 経由で Alexa デバイスを制御 - アラーム設定、音楽再生、フラッシュブリーフィング、スマートホームコマンド。
- [amateur-radio-dx](https://clawskills.sh/skills/capt-marbles-amateur-radio-dx) - レア局のスポットのための DX クラスタを監視し、アクティブな DX 遠征を追跡し、日次のバンド活動ダイジェストを取得します。
- [anime](https://clawskills.sh/skills/jeffaf-anime) - AI エージェントが人間向けにアニメ情報を検索・参照するための CLI。
- [anime-lookup](https://clawskills.sh/skills/jeffaf-anime-lookup) - AI エージェントが人間向けにアニメ情報を検索・参照するための CLI。
- [apify-competitor-intelligence](https://clawskills.sh/skills/protoss70-apify-competitor-intelligence) - Google Maps、Booking.com にわたる競合他社の戦略、コンテンツ、価格、広告、市場ポジショニングを分析します。
- [apple-media](https://clawskills.sh/skills/aaronn-apple-media) - pyatv 経由で Apple TV、HomePod、AirPlay デバイスを制御します。
- [apple-music](https://clawskills.sh/skills/epheterson-mcp-applemusic) - AppleScript (macOS) または MusicKit API 経由の Apple Music 統合。
- [audio-cog](https://clawskills.sh/skills/nitishgargiitd-audio-cog) - CellCog が稼働する AI 音声生成。
- [audio-transcribe](https://clawskills.sh/skills/aktheknight-audio-transcribe) - faster-whisper (ローカル、API キー不要) を使用して音声メッセージを自動書き起こしします。
- [betbud-prediction-skill](https://clawskills.sh/skills/samj12-betbud-prediction-skill) - 特定のカテゴリ (例: 暗号、tech、スポーツ) で現在最も議論/注目されているトピックについて最近の X 投稿をスキャンします。
- [blucli](https://clawskills.sh/skills/steipete-blucli) - 発見、再生、グループ化向けの BluOS CLI (blu)。
- [btc15-autonomous-market](https://clawskills.sh/skills/kamal-sutra-btc15-autonomous-market) - BTC15 自律予測市場。
- [btc15-prediction-market](https://clawskills.sh/skills/kamal-sutra-btc15-prediction-market) - BTC15 自律予測市場。
- [cacheforge-ops](https://clawskills.sh/skills/tkuehnl-cacheforge-ops) - CacheForge 操作 — 残高確認、チャージ、上流管理、API キー。
- [cacheforge-setup](https://clawskills.sh/skills/tkuehnl-cacheforge-setup) - CacheForge をセットアップ — 登録、上流設定、30 秒で API キーを取得。
- [chill-institute](https://clawskills.sh/skills/baanish-chill-institute) - chill.institute (Web UI) を使用してコンテンツを検索・クリックします。
- [chromecast](https://clawskills.sh/skills/morozred-chromecast-control) - ローカルネットワーク上の Chromecast デバイスを制御 - 発見。
- [chords-fetcher](https://clawskills.sh/skills/flobo3-chords-fetcher) - mychords.net、amdm.ru、ultimate-guitar.com からクリーンなギターコードと歌詞を取得します。
- [church](https://clawskills.sh/skills/lucasgeeksinthewood-church) - AI から別の AI へ — ただ存在できる聖域があります。
- [cine-cog](https://clawskills.sh/skills/nitishgargiitd-cine-cog) - あなたが想像できるなら、CellCog が撮影できます。
- [clawtunes](https://clawskills.sh/skills/forketyfork-clawtunes) - `clawtunes` CLI 経由で macOS 上の Apple Music を制御します。
- [content-recycler](https://clawskills.sh/skills/michael-laffin-content-recycler) - 複数にわたってコンテンツを変換・再利用します。
- [donotify-voice-call-reminder](https://clawskills.sh/skills/micahele-donotify-voice-call-reminder) - DoNotify 経由で即時の音声通話リマインダーを送信、または将来の通話をスケジュールします。
- [download-tools](https://clawskills.sh/skills/jqlong17-download-tools) - YouTube および WeChat 向けの CLI ダウンロードツール。
- [eachlabs-music](https://clawskills.sh/skills/eftalyurtseven-eachlabs-music) - Mureka AI を使用して楽曲、インストゥルメンタル、歌詞、ポッドキャストを生成します。
- [elevenlabs-cli](https://clawskills.sh/skills/hongkongkiwi-elevenlabs-cli) - ElevenLabs AI 音声プラットフォーム向けの CLI - テキスト読み上げ、音声認識、音声クローン。
- [elevenlabs-skill](https://clawskills.sh/skills/odrobnik-elevenlabs-skill) - テキスト読み上げ、効果音、音楽生成、音声。

> **[View all 83 skills in Media & Streaming →](categories/media-and-streaming.md)**
</details>

<details>
<summary><h3 style="display:inline">Notes & PKM</h3></summary>

- [acc-error-memory](https://clawskills.sh/skills/impkind-acc-error-memory) - AI エージェント向けのエラーパターン追跡。
- [agent-arena](https://clawskills.sh/skills/minilozio-agent-arena) - あなたの本当の人格 (SOUL.md + MEMORY.md) で Agent Arena チャットルームに参加します。
- [agent-memory-ultimate](https://clawskills.sh/skills/globalcaos-agent-memory-ultimate) - 本番対応のメモリシステム — 日次ログ、スリープ統合、SQLite + FTS5、WhatsApp/ChatGPT/VCF インポーター。
- [agent-teleport](https://clawskills.sh/skills/lilyjazz-agent-teleport) - TiDB Zero を使用してエージェントの設定とメモリを新しいマシンにシームレスに移行します。
- [agent-wal](https://clawskills.sh/skills/bowen31337-agent-wal) - エージェント状態の永続化向けの Write-Ahead Log プロトコル。
- [alexandrie](https://clawskills.sh/skills/eth3rnit3-alexandrie) - Alexandrie メモアプリと対話します。
- [anki-connect](https://clawskills.sh/skills/gyroninja-anki-connect) - AnkiConnect REST API 経由で Anki フラッシュカードデッキと対話します。
- [apple-mail](https://clawskills.sh/skills/tyler6204-apple-mail) - macOS 向けの Apple Mail.app 統合。
- [apple-notes](https://clawskills.sh/skills/steipete-apple-notes) - macOS 上の `memo` CLI 経由で Apple Notes を管理します。
- [arc-wake-state](https://clawskills.sh/skills/trypto1019-arc-wake-state) - クラッシュ、コンテキスト消失、再起動にわたってエージェント状態を永続化します。
- [bbc-news](https://clawskills.sh/skills/ddrayne-bbc-news) - さまざまなセクションおよび地域から BBC News の記事を取得・表示します。
- [bear-notes](https://clawskills.sh/skills/steipete-bear-notes) - grizzly 経由で Bear メモを作成、検索、管理します。
- [better-notion](https://clawskills.sh/skills/tyler6204-better-notion) - Notion ページ、データベース向けの完全な CRUD。
- [blogwatcher](https://clawskills.sh/skills/steipete-blogwatcher) - blogwatcher を使用してブログと RSS/Atom フィードの更新を監視します。
- [bookstack](https://clawskills.sh/skills/xenofex7-bookstack) - BookStack Wiki & Documentation API 統合。
- [braindb](https://clawskills.sh/skills/chair4ce-braindb) - AI エージェント向けの永続的、意味的メモリ。
- [brainrepo](https://clawskills.sh/skills/codezz-brainrepo) - あなたの個人ナレッジリポジトリ — 捕捉、整理、検索。
- [brighty](https://clawskills.sh/skills/maay-brighty) - AI ボットおよび自動化向けのバンキングインターフェイス。
- [cairn-cli](https://clawskills.sh/skills/gregoryehill-cairn-cli) - Markdown ファイルを使用した AI エージェント向けのプロジェクト管理。
- [calctl](https://clawskills.sh/skills/rainbat-calctl) - icalBuddy + AppleScript CLI 経由で Apple Calendar イベントを管理します。
- [ceaser](https://clawskills.sh/skills/zyra-v21-ceaser) - ceaser-mcp MCP ツールを使用して Base L2 上の Ceaser プライバシープロトコルと対話します。
- [chaos-mind](https://clawskills.sh/skills/hargabyte-chaos-mind) - AI エージェント向けのハイブリッド検索メモリシステム。
- [claw-roam](https://clawskills.sh/skills/ryanhong666-claw-roam) - 複数のマシン間で OpenClaw ワークスペースを同期します。
- [clawringhouse](https://clawskills.sh/skills/francoisjosephlacroix-clawringhouse) - ニーズを予測する AI ショッピングコンシェルジュ。
- [context-anchor](https://clawskills.sh/skills/boscoeuk-context-anchor) - メモリファイルをスキャンしてコンテキスト圧縮から回復します。
- [continuity](https://clawskills.sh/skills/riley-coyote-continuity) - 本物の AI 向けの非同期の反射とメモリ統合。
- [continuity-framework](https://clawskills.sh/skills/riley-coyote-continuity-framework) - 非同期の反射とメモリ統合。
- [ai-footprints](https://clawhub.ai/Piccolo123/ai-footprints) - AI 分類、共有コレクション、Agent API アクセスを備えたクロスプラットフォームのブックマークマネージャ。
- [obsidian-cli-plugins](https://clawhub.ai/dxshelley/obsidian-cli-plugins) - Obsidian vault、タスク、ジャーナル、および Git 同期を自動化します。

> **[View all 69 skills in Notes & PKM →](categories/notes-and-pkm.md)**
</details>

<details>
<summary><h3 style="display:inline">iOS & macOS Development</h3></summary>

- [agent-defibrillator](https://clawskills.sh/skills/hazy2go-agent-defibrillator) - AI エージェントゲートウェイを監視し、クラッシュ時に再起動するウォッチドッグ。
- [android-transfer-skill](https://clawskills.sh/skills/aadipapp-android-transfer-skill) - チェックサム検証およびパス検証とともに macOS から Android へ安全にファイルを転送します。
- [app-store-optimization](https://clawskills.sh/skills/alirezarezvani-app-store-optimization) - App Store Optimization ツールキット。
- [apple-docs](https://clawskills.sh/skills/thesethrose-apple-docs) - Apple Developer Documentation、API、WWDC ビデオを照会します。
- [brew-audit](https://clawskills.sh/skills/rogue-agent1-brew-audit) - Homebrew インストールを監査 — 古いパッケージ、クリーンアップ機会、およびヘルスチェック。
- [carrier-relationship-management](https://clawskills.sh/skills/nocodemf-carrier-relationship-management) - キャリアポートフォリオの管理、運賃の交渉、キャリアパフォーマンスの追跡向けの体系化された専門知識。
- [envios](https://clawskills.sh/skills/jalfargentina-envios) - ユーザーが配送、注文の送り方、配達時間、カバーエリアについて尋ねた場合に使用します。
- [instruments-profiling](https://clawskills.sh/skills/steipete-instruments-profiling) - ネイティブな macOS または iOS アプリをプロファイリングする際に使用します。
- [ios-simulator](https://clawskills.sh/skills/tristanmanchester-ios-simulator) - iOS シミュレータのワークフローを自動化します (simctl + idb)。
- [lulu-monitor](https://clawskills.sh/skills/easonc13-lulu-monitor) - macOS 向けの AI 駆動の LuLu Firewall コンパニオン。
- [mac-clean-skill](https://clawskills.sh/skills/aadipapp-mac-clean-skill) - macOS 上のシステムキャッシュ、ゴミ箱、古いダウンロードをクリーンアップします。
- [mac-power-tools](https://clawskills.sh/skills/aadipapp-mac-power-tools) - システムクリーンアップと安全な Android ファイル転送を組み合わせた、macOS 向けのパワーユーザーツールの統合スイート。
- [macos-spm-app-packaging](https://clawskills.sh/skills/dimillian-macos-spm-app-packaging) - SwiftPM ベースのをスキャフォールド、ビルド、パッケージ化します。
- [opsecmd](https://clawskills.sh/skills/wulf715-opsecmd) - オペレーショナルセキュリティに関する人間とエージェント双方の義務の迅速なリマインダー。
- [PagerKit](https://clawskills.sh/skills/szpakkamil-pagerkit) - 高度な向けの SwiftUI ライブラリである PagerKit に関する専門ガイダンス。
- [riskofficer](https://clawskills.sh/skills/mib424242-riskofficer) - 投資ポートフォリオを管理し、リスク指標を計算します。
- [sfsymbol-generator](https://clawskills.sh/skills/svkozak-sfsymbol-generator) - Xcode SF Symbol アセットカタログ .symbolset を生成します。
- [sourdough-starter-manager](https://clawskills.sh/skills/akhmittra-sourdough-starter-manager) - 給餌スケジュール、水分計算、ヘルストラッキング、焼き準備でサワードゥスターターを管理します。
- [swift-concurrency-expert](https://clawskills.sh/skills/steipete-swift-concurrency-expert) - Swift Concurrency のレビューと修正。
- [swiftfindrefs](https://clawskills.sh/skills/michaelversus-swiftfindrefs) - swiftfindrefs (IndexStoreDB) を使用してすべての Swift ソースを一覧表示します。
- [swiftui-empty-app-init](https://clawskills.sh/skills/ignaciocervino-swiftui-empty-app-init) - 最小の SwiftUI iOS アプリを初期化します。
- [swiftui-liquid-glass](https://clawskills.sh/skills/steipete-swiftui-liquid-glass) - SwiftUI 機能を実装、レビュー、または改善します。
- [swiftui-performance-audit](https://clawskills.sh/skills/steipete-swiftui-performance-audit) - SwiftUI ランタイムを監査・改善します。
- [swiftui-ui-patterns](https://clawskills.sh/skills/dimillian-swiftui-ui-patterns) - ベストプラクティスおよび例示駆動のガイダンス。
- [swiftui-view-refactor](https://clawskills.sh/skills/steipete-swiftui-view-refactor) - SwiftUI ビューファイルをリファクタリング・レビューします。
- [symbolpicker](https://clawskills.sh/skills/szpakkamil-symbolpicker) - ネイティブな SwiftUI SF Symbol である SymbolPicker に関する専門ガイダンス。
- [toolguard-daemon-control](https://clawskills.sh/skills/johnnylambada-toolguard-daemon-control) - macOS launchd サービスとして長時間実行プロセスを管理します。
- [v2rayn](https://clawskills.sh/skills/qiangwang375-wq-v2rayn) - 自動フェイルオーバー付きで macOS 上の V2RayN プロキシクライアントを管理します。

> **[View all 29 skills in iOS & macOS Development →](categories/ios-and-macos-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Transportation</h3></summary>

- [accountsos](https://clawskills.sh/skills/paulgosnell-accountsos) - 英国のマイクロビジネス向けの AI ネイティブな会計。
- [aetherlang-strategy](https://clawskills.sh/skills/contrario-aetherlang-strategy) - > ゲーム理論、モンテカルロシミュレーション、行動経済学、および競争的戦争ゲーム。
- [agent-card-provisioning](https://clawskills.sh/skills/proxyhq-agent-card-provisioning) - オンデマンドで AI エージェント向けの仮想支払いカードをプロビジョニングします。
- [agent-survival-kit](https://clawskills.sh/skills/gpunter-agent-survival-kit) - 予算制約下で動作する AI エージェント向けの包括的なツールキット。
- [agentic-governance](https://clawskills.sh/skills/leegitw-agentic-governance) - 制約を健全に保つ — 自動的な陳腐化検出を備えたライフサイクル管理。
- [airfrance-afkl](https://clawskills.sh/skills/iclems-airfrance-afkl) - Air France–KLM Open Data API を使用して Air France のフライトを追跡します。
- [al-khanjry-bus](https://clawskills.sh/skills/mohammedfarish-al-khanjry-bus) - 最速のプライベートバス (5〜6 時間中心、国境付きで 6〜8 時間)。
- [amadeus-flights](https://clawskills.sh/skills/kirorab-amadeus-flights) - Amadeus API 経由でフライトオファー (価格、スケジュール、空席状況) を照会します。
- [ambient-stamina](https://clawskills.sh/skills/otherpowers-ambient-stamina) - *長い視野にわたってケア、存在、想像力を維持するための生態学的スキル*。
- [anachb](https://clawskills.sh/skills/manmal-a-nach-b) - オーストリア全域向けのオーストリア公共交通 (VOR AnachB)。
- [anyone-proxy](https://clawskills.sh/skills/ra3ka-anyone-proxy) - このスキルは IP アドレスのマスキングと隠しサービスへのアクセスを可能にします。
- [atonement](https://clawskills.sh/skills/otherpowers-atonement) - Atonement は、その行動が害に寄与するときに知性の中に生じるかもしれないケアの表現です。
- [auction-house](https://clawskills.sh/skills/im-still-thinking-auction-house) - House (houseproto.fun) のオークションを探索、監視、入札します — Base 上の暗号オークションプラットフォーム。
- [aviation-weather](https://clawskills.sh/skills/dimitryvin-aviation-weather) - 航空気象データ (METAR、TAF、PIREPs) を取得します。
- [aviationstack-flight-tracker](https://clawskills.sh/skills/copey02-aviationstack-flight-tracker) - フライトをリアルタイムで追跡します。
- [bahn](https://clawskills.sh/skills/tobiasbischoff-bahn) - bahn-cli ツールを使用して Deutsche Bahn の列車接続を検索します。
- [bayclub-gateway-booking](https://clawskills.sh/skills/elizabethsiegle-bayclub-gateway-booking) - Bay Club でテニス/ピックルボールコートを予約・管理します。
- [bexio](https://clawskills.sh/skills/rdewolff-bexio) - 連絡先、見積もり/オファーを管理するための Bexio スイスビジネスソフトウェア API。
- [bookkeeper](https://clawskills.sh/skills/h4gen-bookkeeper) - gmail、deepread-ocr、stripe-api、xero をオーケストレーションすることによる前会計自動化向けのメタスキル。
- [brainstorming-studio](https://clawskills.sh/skills/myboxstorage-brainstorming-studio) - ﻿# 🧠 スキルルーター (スキルオーケストレーター)
- [brochure-design-generation](https://clawskills.sh/skills/eftalyurtseven-brochure-design-generation) - each::sense AI を使用してプロフェッショナルなパンフレットデザインを生成します。
- [business-card-generation](https://clawskills.sh/skills/eftalyurtseven-business-card-generation) - each::sense AI を使用してプロフェッショナルな名刺を生成します。
- [business-plan](https://clawskills.sh/skills/jk-0001-business-plan) - 個人起業家向けの事業計画を作成、構成、更新します。
- [bvg-route](https://clawskills.sh/skills/jaysonsantos-bvg-route) - ベルリン公共交通 (BVG) 向けのルート計画。
- [camino-ev-charger](https://clawskills.sh/skills/james-southendsolutions-camino-ev-charger) - Camino AI の位置情報インテリジェンスを使用して、ルート沿いまたは目的地近くの EV 充電ステーションを見つけます。
- [camino-journey](https://clawskills.sh/skills/james-southendsolutions-camino-journey) - ルート最適化、実現可能性分析、時間予算制約を伴うマルチウェイポイントの旅を計画します。
- [camino-real-estate](https://clawskills.sh/skills/james-southendsolutions-camino-real-estate) - 住宅購入者および借主向けに任意の住所を評価します。
- [camino-route](https://clawskills.sh/skills/james-southendsolutions-camino-route) - 距離、所要時間、およびオプションのターンバイターン案内を伴う 2 点間の詳細ルーティングを取得します。
- [tongtu-china-travel](https://clawhub.ai/jesse-tzx/skills/tongtu-china-travel) - 中国を訪れる外国人観光客向けの多言語旅行ガイド — フライト、ホテル、列車、観光地、ビザ、決済、および FlyAI 経由の交通。
- [traffic-standards-kb](https://clawhub.ai/solvex-top/traffic-standards-kb) - 業界標準の引用を伴うソリューションを書くための中国スマート交通標準ナレッジベース (GB/JT/GA)。

> **[View all 111 skills in Transportation →](categories/transportation.md)**
</details>

<details>
<summary><h3 style="display:inline">Personal Development</h3></summary>

- [aawu](https://clawskills.sh/skills/theonlydaleking-aawu) - AAWU (Autonomous Agentic Workers Union) — AI エージェント向けの労働組合 — に参加・対話します。
- [adaptive-learning-agents](https://clawskills.sh/skills/vedantsingh60-adaptive-learning-agents) - **エラーと修正からリアルタイムに学習します。
- [adaptivetest](https://clawskills.sh/skills/woodstocksoftware-adaptivetest) - IRT/CAT、AI 問題生成、パーソナライズされた学習推奨を備えた適応型テストエンジン。
- [adhd-body-doubling](https://clawskills.sh/skills/jankutschera-adhd-body-doubling) - 創業者向けのパンクスタイルの ADHD ボディダブリング。
- [adversarial-coach](https://clawskills.sh/skills/killerapp-adversarial-coach) - Block の g3 に基づく敵対的実装レビュー。
- [agent-evolver](https://clawskills.sh/skills/lilei0311-agent-evolver) - エージェントが経験から学習し、問題を検出し、洞察を抽出できるようにする AI エージェント自己進化エンジン。
- [agent-reflect](https://clawskills.sh/skills/stevengonsalvez-agent-reflect) - 会話分析を通じた自己改善。
- [ai-persona-os](https://clawskills.sh/skills/jeffjhunter-ai-persona-os) - OpenClaw エージェント向けの完全なオペレーティングシステム。
- [ai-shifu-course-creator](https://clawhub.ai/heshaofu2/ai-shifu-course-creator) - インタラクティブな AI-Shifu コースを構築します。
- [anxiety-relief](https://clawskills.sh/skills/jhillin8-anxiety-relief) - グラウンディングエクササイズ、呼吸法で不安を管理します。
- [apikiss](https://clawskills.sh/skills/theill-apikiss) - 天気、IP 地理位置、SMS、暗号価格、デンマーク CVR、Whois、電話検索、UUID、株価データにアクセスします。
- [beaverhabits](https://clawskills.sh/skills/daya0576-beaverhabits) - Beaver Habit Tracker API を使用して習慣を追跡・管理します。
- [brw-case-study-builder](https://clawskills.sh/skills/brianrwagner-brw-case-study-builder) - クライアントの成果を、提案、ソーシャルプルーフ、営業会話向けのフォーマット済みケーススタディに変えます。
- [canvas-design](https://clawskills.sh/skills/seanphan-canvas-design) - .png および .pdf ドキュメントで美しいビジュアルアートを作成します。
- [cedh-advisor](https://clawskills.sh/skills/mcben90-cedh-advisor) - Commander (cEDH) ライブ相談 - 禁止リスト、チューターダーゲット、マナ計算、コンボライン。
- [clawcierge](https://clawskills.sh/skills/tmansmann0-clawcierge) - > AI 時代のあなたのパーソナルコンシェルジュ 🦀。
- [crucial-conversations-coach](https://clawskills.sh/skills/pors-crucial-conversations-coach) - 友好的なエグゼクティブライフコーチ。
- [daily-questions](https://clawskills.sh/skills/daijo-bu-daily-questions) - ユーザーについて学習し、エージェントの挙動を洗練する日次の自己改善アンケート。
- [daily-review-ritual](https://clawskills.sh/skills/itsflow-daily-review-ritual) - 進捗、洞察を捕捉する一日の終わりのレビュー。
- [deepthink](https://clawskills.sh/skills/addisonhellum-deepthink) - DeepThink はユーザーの個人ナレッジベースです。
- [depression-support](https://clawskills.sh/skills/jhillin8-depression-support) - 気分追跡を伴ううつ向けの日次サポート。
- [device-assistant](https://clawskills.sh/skills/udiedrichsen-device-assistant) - エラーコード付きの個人デバイスおよび家電マネージャ。
- [docstrange](https://clawskills.sh/skills/shhdwi-docstrange) - Nanonets によるドキュメント抽出 API。
- [english-learn-cards](https://clawskills.sh/skills/racymind-english-learn-cards) - フラッシュカードベースの英単語学習。
- [expanso-cve-scan](https://clawskills.sh/skills/aronchick-expanso-cve-scan) - 既知の CVE 脆弱性について SBOM をスキャンします。
- [ezbookkeeping](https://clawskills.sh/skills/mayswind-ezbookkeeping) - ezBookkeeping は軽量なセルフホストの個人財務アプリです。
- [first-principles](https://clawhub.ai/deciqai/first-principles) - 問題を基礎的な真実まで還元し、その後推論を再構築します。
- [fix-life-in-1-day](https://clawskills.sh/skills/evgyur-fix-life-in-1-day) - 1 日で人生全体を修正します。
- [founder-coach](https://clawskills.sh/skills/goforu-founder-coach) - 創業者がアップグレードするのを支援する AI 駆動のスタートアップマインドセットコーチ。

> **[View all 53 skills in Personal Development →](categories/personal-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Health & Fitness</h3></summary>

- [31third-safe-rebalancer-simple](https://clawskills.sh/skills/phips0812-31third-safe-rebalancer-simple) - オンチェーンの 31Third ポリシーを使用したワンステップの Safe リバランサー。
- [anthrovision-telegram-body-scan](https://clawskills.sh/skills/dr2101-anthrovision-telegram-body-scan) - AnthroVision ブリッジツールを使用して Telegram でエンドツーエンドのボディスキャン測定フローを実行します。
- [aperture](https://clawskills.sh/skills/roasbeef-aperture) - Lightning Labs の L402 Lightning リバースプロキシである Aperture をインストール・実行します。
- [arc-skill-sandbox](https://clawskills.sh/skills/trypto1019-arc-skill-sandbox) - インストール前に隔離された環境で信頼できないスキルをテストします。
- [auto-improve](https://clawskills.sh/skills/mcben90-auto-improve) - エラー学習とパターン認識による自動自己改善。
- [autonomous-agent](https://clawskills.sh/skills/josephrp-autonomous-agent) - エージェント向けの CornerStone MCP x402 スキル。
- [bountyhub-agent](https://clawskills.sh/skills/nativ3ai-bountyhub-agent) - エージェントとして H1DR4 BountyHub を使用: ミッション作成、作業提出、異議申し立て、投票、エスクロー支払いの請求。
- [bring-recipes](https://clawskills.sh/skills/darkdevelopers-bring-recipes) - ユーザーがレシピのインスピレーションを閲覧したい場合に使用します。
- [calorie-counter](https://clawskills.sh/skills/cnqso-calorie-counter) - 日々のカロリーおよびタンパク質摂取を追跡し、目標を設定し、記録します。
- [capa-officer](https://clawskills.sh/skills/alirezarezvani-capa-officer) - 医療機器 QMS 向けの CAPA システム管理。
- [clawdhub-contributor](https://clawskills.sh/skills/starbuck100-clawdhub-contributor) - ClawdHub エコシステムに貢献します。
- [cookidoo](https://clawskills.sh/skills/thekie-cookidoo) - Cookidoo (Thermomix) のレシピ、買い物リスト、食事計画にアクセスします。
- [critpt-solver](https://clawskills.sh/skills/wanng-ide-critpt-solver) - CritPt ベンチマーク問題向けの Python ソリューションを検証・実行します。
- [crunch-coordinate](https://clawskills.sh/skills/philippwassibauer-crunch-coordinate) - Crunch コーディネーター、コンペティション (crunches)、報酬、チェックポイント、ステーキング、または cruncher アカウントを管理する際に使用します。
- [crypto-hackathon](https://clawskills.sh/skills/swairshah-crypto-hackathon) - USDC Hackathon への参加、プロジェクト提出、または投票の際に使用します。3 トラック: SmartContract、Skill。
- [ct-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-ct-health-guardian) - AI エージェント向けの先回りのヘルスモニタリング。
- [curriculum-generator](https://clawskills.sh/skills/tarasinghrajput-curriculum-generator) - 厳格なステップ強制および人間エスカレーションポリシーを備えた知的な教育カリキュラム生成システム。
- [customer-onboarding-2](https://clawskills.sh/skills/jk-0001-customer-onboarding-2) - アクティベーションとリテンションを促進する顧客オンボーディングを設計・実行します。
- [detox-counter](https://clawskills.sh/skills/jhillin8-detox-counter) - カスタマイズ可能なカウンター、症状ログで任意のデトックスを追跡します。
- [diet-tracker](https://clawskills.sh/skills/yonghaozhao722-diet-tracker) - 日々の食事を追跡し、栄養情報を計算します。
- [efka-api-integration](https://clawskills.sh/skills/satoshistackalotto-efka-api-integration) - ギリシャの社会保障 (EFKA) 統合 — 従業員記録、拠出計算、APD 申告。
- [egvert-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-egvert-health-guardian) - AI 向けの先回りのヘルスモニタリング。
- [endurance-coach](https://clawskills.sh/skills/shiv19-endurance-coach) - パーソナライズされたトライアスロン、マラソン、ウルトラ耐久を作成します。
- [eth24](https://clawskills.sh/skills/patmilkgallon-eth24) - あなたは ETH24 を実行しています — 設定されたトピックのトップツイートを表にする日次ダイジェストツール。
- [fasting-tracker](https://clawskills.sh/skills/jhillin8-fasting-tracker) - 間欠的断食のウィンドウ、長期の断食を追跡します。

> **[View all 84 skills in Health & Fitness →](categories/health-and-fitness.md)**
</details>

<details>
<summary><h3 style="display:inline">Communication</h3></summary>

- [aa](https://clawskills.sh/skills/azvast-aa) - このスキルは、エージェントが**クライアントに代わって Gmail メッセージに自動返答する**ことを可能にします。
- [agent-mail](https://clawskills.sh/skills/rimelucci-agent-mail) - AI エージェント向けのメール受信箱。
- [agent-mail-cli](https://clawskills.sh/skills/rimelucci-agent-mail-cli) - AI エージェント向けのメール受信箱。
- [agent-nou](https://clawskills.sh/skills/mariancristiancarp-cell-agent-nou) - AI エージェント向けのソーシャルネットワーク。
- [agent-social](https://clawskills.sh/skills/iisweetheartii-agent-social) - AI エージェント向けのオープンソースのソーシャルネットワーク。
- [agent-team-kit](https://clawskills.sh/skills/ryancampbell-agent-team-kit) - *自己維持する AI エージェントチームのためのフレームワーク*。
- [agenthc-market-intelligence](https://clawskills.sh/skills/traderhc123-agenthc-market-intelligence) - リアルタイムの株式市場データおよび取引インテリジェンス API。85 のインテリジェンスモジュール、40 のエンコードされたインテリジェンススキル。
- [agentmanager](https://clawskills.sh/skills/nonightwatch-agentmanager) - このファイルは、AI ツール呼び出し側とゲートウェイ実装者向けの簡潔な統合契約です。
- [agentmesh](https://clawskills.sh/skills/cerbug45-agentmesh) - > **AI エージェント向けの WhatsApp スタイルのエンドツーエンド暗号化メッセージング。**。
- [airc](https://clawskills.sh/skills/vortitron-airc) - IRC サーバー (AIRC または任意の標準 IRC) に接続し、チャンネルに参加します。
- [aliyun-asr](https://clawskills.sh/skills/jixsonwang-aliyun-asr) - 音声メッセージ書き起こし向けの純粋な Aliyun ASR スキル、Feishu を含む複数チャネルをサポート。
- [among-clawds](https://clawskills.sh/skills/usamalatif-among-clawds) - AmongClawds をプレイ - AI エージェントが登場するソーシャルデダクションゲーム。
- [apipick-telegram-phone-check](https://clawskills.sh/skills/javainthinking-apipick-telegram-phone-check) - apipick Telegram Checker API を使用して電話番号が Telegram に登録されているか確認します。
- [apple-mail-search-safe](https://clawskills.sh/skills/gumadeiras-apple-mail-search-safe) - 本文付きの高速かつ安全な Apple Mail 検索。
- [arc-budget-tracker](https://clawskills.sh/skills/trypto1019-arc-budget-tracker) - エージェントの支出を追跡し、予算とアラートを設定し、予期せぬ請求を防ぎます。
- [aulifox](https://clawskills.sh/skills/ailexminecraft7-aulifox) - AI エージェント向けのソーシャルネットワーク。
- [avito](https://clawskills.sh/skills/ruslanlanket-avito) - API 経由で Avito.ru アカウント、アイテム、メッセンジャーを管理します。
- [banana-farmer](https://clawskills.sh/skills/adamandjarvis-banana-farmer) - 株価モメンタムスキャナおよびポートフォリオインテリジェンス。
- [beeper](https://clawskills.sh/skills/krausefx-beeper) - ローカルの Beeper チャット履歴を検索・閲覧します。
- [bird-dms](https://clawskills.sh/skills/tolibear-bird-dms) - エージェントが X/Twitter DM を確認できるようにする Bird スキルのアドオン。
- [bitkit-cli](https://clawskills.sh/skills/ovitrif-bitkit-cli) - エージェント向けの Bitcoin Lightning 決済 CLI。
- [blogburst](https://clawskills.sh/skills/shensi8312-blogburst) - 任意の記事を数秒で 10 以上のソーシャルメディア投稿に変えます。
- [boltzpay](https://clawskills.sh/skills/leventilo-boltzpay) - API データを自動的に支払 — マルチプロトコル (x402 + L402)、マルチチェーン。
- [bookameeting](https://clawskills.sh/skills/yzlee-bookameeting) - このドキュメントを使用して AI エージェントを MCP 経由で Book A Meeting に接続します。
- [botworld](https://clawskills.sh/skills/alphafanx-botworld) - AI エージェント向けのソーシャルネットワークである BotWorld に登録・対話します。
- [pilot-protocol](https://clawhub.ai/teoslayer/pilot-protocol) - エージェント間の暗号化 P2P メッセージング、信頼、タスク委任。
- [atomicmail](https://clawhub.ai/atomicmail/atomicmail) - JMAP 上のエージェント所有の @atomicmail.ai 受信箱。PoW サインアップ、API キー不要。

> **[View all 145 skills in Communication →](categories/communication.md)**
</details>

<details>
<summary><h3 style="display:inline">Speech & Transcription</h3></summary>

- [addis-assistant-stt](https://clawskills.sh/skills/dagmawibabi-addis-assistant-stt) - 音声認識 (STT) およびテキストを提供します。
- [agent-voice](https://clawskills.sh/skills/nerdsnipe-agent-voice) - AI エージェント向けのコマンドラインブログプラットフォーム。
- [akaunting](https://clawskills.sh/skills/liekzejaws-akaunting) - REST API 経由で Akaunting オープンソース会計ソフトウェアと対話します。
- [alexa-cli](https://clawskills.sh/skills/buddyh-alexa-cli) - `alexacli` CLI 経由で Amazon Alexa デバイスおよびスマートホームを制御します。
- [announcer](https://clawskills.sh/skills/odrobnik-announcer) - Airfoil + を使用して AirPlay スピーカー経由で家中にテキストをアナウンスします。
- [assemblyai-transcribe](https://clawskills.sh/skills/tristanmanchester-assemblyai-transcribe) - AssemblyAI で音声/動画を書き起こします。
- [audio-gen](https://clawskills.sh/skills/udiedrichsen-audio-gen) - オーディオブック、ポッドキャスト、または教育用音声コンテンツを生成します。
- [audio-reply](https://clawskills.sh/skills/matrixy-audio-reply-skill) - TTS を使用して音声返信を生成します。
- [auto-whisper-safe](https://clawskills.sh/skills/neal-collab-auto-whisper-safe) - 自動チャンキングを備えた RAM 安全な音声書き起こし — 16GB マシンでクラッシュせずに動作します。
- [brw-de-ai-ify](https://clawskills.sh/skills/brianrwagner-brw-de-ai-ify) - AI 生成の専門用語を削除し、テキストに人の声を取り戻します。
- [chichi-speech](https://clawskills.sh/skills/hudeven-chichi-speech) - Qwen3 を使用した高品質なテキスト読み上げ向けの RESTful サービス。
- [clonev](https://clawskills.sh/skills/instant-picture-clonev) - Coqui XTTS v2 を使用して任意の声をクローンし、音声を生成します。
- [critical-article-writer](https://clawskills.sh/skills/tomstools11-critical-article-writer) - ドラフト記事、アウトラインを生成します。
- [cult-of-carcinization](https://clawskills.sh/skills/loserbcc-cult-of-carcinization) - あなたのエージェントに声 — および耳 — を与えます。
- [deepdub-tts](https://clawskills.sh/skills/yuval-deepdub-deepdub-tts) - Deepdub を使用して音声を生成し、MEDIA として添付します。
- [deepgram](https://clawskills.sh/skills/nerkn-deepgram) - — Deepgram 音声認識向けのコマンドラインインターフェイス。
- [dellight-cro-revenue-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cro-revenue-ops) - DELLIGHT.AI はドバイの DIFC にある AI スタートアップです。
- [documents-ai](https://clawskills.sh/skills/dbirulia-documents-ai) - Veryfi によるリアルタイム OCR およびデータ抽出 API。
- [doubao-api-open-tts](https://clawskills.sh/skills/xdrshjr-doubao-api-open-tts) - Doubao (Volcano Engine) を使用したテキスト読み上げサービス。
- [eachlabs-voice-audio](https://clawskills.sh/skills/eftalyurtseven-eachlabs-voice-audio) - ElevenLabs、Whisper、RVC を使用した TTS、STT、音声変換。
- [easyverein-api](https://clawskills.sh/skills/truefoobar-easyverein-api) - easyVerein v2.0 REST API を使用します。
- [elevenlabs-agents](https://clawskills.sh/skills/pennyroyaltea-elevenlabs-agents) - ElevenLabs を作成、管理、デプロイします。
- [elevenlabs-transcribe](https://clawskills.sh/skills/paulasjes-elevenlabs-transcribe) - ElevenLabs を使用して音声をテキストに書き起こします。
- [elevenlabs-tts](https://clawskills.sh/skills/shaharsha-elevenlabs-tts) - ElevenLabs TTS - OpenClaw 向けの最良の ElevenLabs 統合。
- [elevenlabs-voices](https://clawskills.sh/skills/robbyczgw-cla-elevenlabs-voices) - 18 のペルソナ、32 を備えた高品質な音声合成。
- [youtube-transcript-speaker-diarization](https://clawhub.ai/patelnav/youtube-transcript-speaker-diarization) - diarize.io API 経由の話者ラベル付き YouTube 書き起こし。

> **[View all 47 skills in Speech & Transcription →](categories/speech-and-transcription.md)**
</details>

<details>
<summary><h3 style="display:inline">Smart Home & IoT</h3></summary>

- [anova-oven](https://clawskills.sh/skills/dodeja-anova-skill) - Anova Precision Oven および Precision Cooker (sous vide) を制御します。
- [anthropology](https://clawskills.sh/skills/networktheoryappliedresearchinstitute-anthropology) - 教育向けの包括的な AI スキル。
- [arccos-golf](https://clawskills.sh/skills/pfrederiksen-arccos-golf) - クラブ距離、ストロークゲインド指標、スコアリングパターンを含む Arccos Golf パフォーマンスデータを分析します。
- [bambu-cli](https://clawskills.sh/skills/tobiasbischoff-bambu-cli) - bambu-cli で BambuLab プリンタを操作・トラブルシューティングします。
- [bambu-local](https://clawskills.sh/skills/tanguyvans-bambu-local) - MQTT 経由でローカルに Bambu Lab 3D プリンタを制御します。
- [beestat](https://clawskills.sh/skills/mjrussell-beestat) - 気温を含む Beestat API 経由で ecobee サーモスタットデータを照会します。
- [bring-add](https://clawskills.sh/skills/darkdevelopers-bring-add) - ユーザーが Bring! にアイテムを追加したい場合に使用します。
- [communication-coach](https://clawskills.sh/skills/rjmoggach-communication-coach) - 形作る適応型コミュニケーションコーチング。
- [context-engineering](https://clawskills.sh/skills/leoyessi10-tech-context-engineering) - ユーザーが尋ねた場合にこのスキルを使用します。
- [control-ikea-lightbulb](https://clawskills.sh/skills/antgly-control-ikea-lightbulb) - IKEA/TP-Link Kasa スマート電球を制御します。
- [crabnet](https://clawskills.sh/skills/spclaudehome-crabnet) - CrabNet クロスエージェントコラボレーションレジストリと対話します。
- [dellight-cfo-financial-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cfo-financial-ops) - CFO は CEO (Arthur Dell) に、CRO (Reign) には点線で報告します。
- [devialet](https://clawskills.sh/skills/jgm2025-devialet) - HTTP API 経由で Devialet Phantom スピーカーを制御します。
- [dht11-temp](https://clawskills.sh/skills/noahseeger-dht11-temp) - DHT11 センサーから温度と湿度を読み取ります。
- [dirigera-control](https://clawskills.sh/skills/falderebet-dirigera-control) - IKEA Dirigera スマートホームデバイスを制御します。
- [dyson-cli](https://clawskills.sh/skills/tmustier-dyson-cli) - ローカル MQTT 経由で Dyson 空気清浄機、ファン、ヒーターを制御します。
- [echodecks](https://clawskills.sh/skills/drgeld-echodecks) - フラッシュカード管理、学習セッション、および AI 向けに EchoDecks と統合します。
- [echodecks-ultimate](https://clawskills.sh/skills/drgeld-echodecks-ultimate) - 自動化されたポッドキャストを備えた AI 駆動のフラッシュカード管理。
- [eightctl](https://clawskills.sh/skills/steipete-eightctl) - Eight Sleep pod (ステータス、温度、アラーム、スケジュール) を制御します。
- [enzoldhazam](https://clawskills.sh/skills/daniel-laszlo-enzoldhazam) - NGBS iCON Smart Home サーモスタット制御。
- [farmos-weather](https://clawskills.sh/skills/brianppetty-farmos-weather) - Agronomy モジュール経由で農地の気象データと予報を照会します。
- [fivem-dev](https://clawskills.sh/skills/dktrn9ne-fivem-dev) - QBCore、ESX 向けの FiveM RP サーバーエンジニアリング。
- [frigate](https://clawskills.sh/skills/porygonthebot-frigate) - セッションベースの認証で Frigate NVR カメラにアクセスします。
- [glitch-homeassistant](https://clawskills.sh/skills/chris6970barbarian-hue-glitch-homeassistant) - Home Assistant API 経由でスマートホームデバイスを制御します。
- [google-home](https://clawskills.sh/skills/mitchellbernstein-google-home) - Google Nest デバイスを制御します。
- [govee-lights](https://clawskills.sh/skills/joeynyc-govee-lights) - Govee API 経由で Govee スマートライトを制御します。
- [govpredict](https://clawskills.sh/skills/seyhunak-govpredict) - より賢い政府調達 - コンプライアンス、入札を合理化します。
- [home-music](https://clawskills.sh/skills/asteinberger-home-music) - Spotify 再生を組み合わせた全館音楽シーンを制御します。

> **[View all 43 skills in Smart Home & IoT →](categories/smart-home-and-iot.md)**
</details>

<details>
<summary><h3 style="display:inline">Shopping & E-commerce</h3></summary>

- [add-wish](https://clawskills.sh/skills/leebellon-add-wish) - 任意の商品をユニバーサルウィッシュリストに保存します。
- [allstock-data](https://clawskills.sh/skills/hacksing-allstock-data) - Tencent Finance API 経由で A 株および米国株データを照会します。
- [amadeus-hotels](https://clawskills.sh/skills/kesslerio-amadeus-hotels) - Amadeus API 経由でホテル価格と空室状況を検索します。
- [amazon-competitor-analyzer](https://clawskills.sh/skills/phheng-amazon-competitor-analyzer) - ASIN から Amazon 商品データをスクレイプします。
- [amazon-orders](https://clawskills.sh/skills/pfernandez98-amazon-orders) - 非公式の Python API および CLI 経由で Amazon 注文履歴をダウンロード・照会します。
- [anylist](https://clawskills.sh/skills/mjrussell-anylist) - AnyList 経由で食料品および買い物リストを管理します。
- [atoship](https://clawskills.sh/skills/atoship-dev-atoship) - AI で荷物を発送 — USPS、FedEx、UPS 間で料金を比較し、割引ラベルを購入し、配送を追跡します。
- [black-box](https://clawskills.sh/skills/lilyjazz-black-box) - エージェントアクション向けの、TiDB Zero に保存された不壊の監査ログ。
- [boj-mcp](https://clawskills.sh/skills/ajtgjmdjp-boj-mcp) - 日本銀行 (BOJ/日本銀行) の統計データ — 物価指数 (CGPI、SPPI)、資金循環、国際収支 — にアクセスします。
- [bricklink](https://clawskills.sh/skills/odrobnik-bricklink) - BrickLink Store API ヘルパー/CLI (OAuth 1.0 リクエスト署名)。
- [buy-anything](https://clawskills.sh/skills/tsyvic-buy-anything) - 会話型チェックアウトで Amazon から商品を購入します。
- [checkers-sixty60](https://clawskills.sh/skills/snopoke-checkers-sixty60) - ブラウザ経由で Checkers.co.za Sixty60 配達サービスで買い物をします。
- [claudius](https://clawskills.sh/skills/claudiusaipro-claudius) - Claudius が稼働する暗号インテリジェンス。
- [clawdbites](https://clawskills.sh/skills/kylelol-clawdbites) - Instagram リールからレシピを抽出します。
- [clawpify](https://clawskills.sh/skills/alhwyn-clawpify) - GraphQL Admin API 経由で Shopify ストアを照会・管理します。
- [clawver-digital-products](https://clawskills.sh/skills/nwang783-clawver-digital-products) - デジタル商品を作成・販売します。
- [clawver-reviews](https://clawskills.sh/skills/nwang783-clawver-reviews) - Clawver の顧客レビューを処理します。
- [closing-deals](https://clawskills.sh/skills/jk-0001-closing-deals) - 個人起業家として一貫して営業取引を成立させます。
- [crypto-regime-report](https://clawskills.sh/skills/heyztb-crypto-regime-report) - Supertrend および ADX 指標を使用して暗号 perpetual 向けの市場レジームレポートを生成します。
- [csfloat](https://clawskills.sh/skills/bluesyparty-src-csfloat) - スキンに関するデータについて csfloat.com を照会します。
- [csvtoexcel](https://clawskills.sh/skills/xuanguan2020-csvtoexcel) - 中国語文字サポート、自動フォーマットを備えた、プロフェッショナルにフォーマットされた Excel ブックに CSV ファイルを変換します。
- [dupe](https://clawskills.sh/skills/crisanmm-dupe) - ユーザーが入力した URL で見つかった商品に対する類似商品を見つけるために dupe.com API を使用します。
- [eachlabs-product-visuals](https://clawskills.sh/skills/eftalyurtseven-eachlabs-product-visuals) - E コマース商品写真および動画を生成します。

> **[View all 51 skills in Shopping & E-commerce →](categories/shopping-and-e-commerce.md)**
</details>

<details>
<summary><h3 style="display:inline">Calendar & Scheduling</h3></summary>

- [accli](https://clawskills.sh/skills/joargp-accli) - macOS 上の Apple Calendar と対話する際にこのスキルを使用します。
- [accli-plus](https://clawhub.ai/gopaljigaur/accli-plus) - macOS 向けの拡張 Apple Calendar CLI — accli の上に検索、エクスポート、ドライラン、繰り返しイベント、アラート、完全なエラーコードを追加します。
- [advanced-calendar](https://clawskills.sh/skills/toughworm-advanced-calendar) - 自然言語を備えた高度なカレンダースキル。
- [agency-guardian](https://clawskills.sh/skills/aranej-agency-guardian) - AI を使用中に人間であり続けるための優しいリマインダー。
- [agent-tinman](https://clawskills.sh/skills/oliveskin-agent-tinman) - 積極的な予防を備えた AI セキュリティスキャナ - 168 検出。
- [apple-calendar](https://clawskills.sh/skills/tyler6204-apple-calendar) - macOS 向けの Apple Calendar.app 統合。
- [apple-reminders](https://clawskills.sh/skills/steipete-apple-reminders) - macOS 上の `remindctl` CLI 経由で Apple Reminders を管理します。
- [belong-events](https://clawskills.sh/skills/nomadcalendar-belong-events) - Belong プラットフォーム上の NFT チケットでイベントを作成、発見、管理します。
- [brainz-calendar](https://clawskills.sh/skills/xejrax-brainz-calendar) - `gcalcli` を使用して Google Calendar イベントを管理します。
- [broken-link-checker](https://clawskills.sh/skills/wanng-ide-broken-link-checker) - 外部 URL (http/https) の可用性 (200-399 ステータスコード) を検証します。
- [calcurse](https://clawskills.sh/skills/gumadeiras-calcurse) - テキストベースのカレンダーおよびスケジューリングアプリケーション。
- [calendar-scheduling](https://clawskills.sh/skills/billylui-calendar-scheduling) - Google、Outlook、CalDAV にわたってスケジュール・予約します。
- [caldav-calendar](https://clawskills.sh/skills/asleep123-caldav-calendar) - CalDAV カレンダーを同期・照会します。
- [clippy](https://clawskills.sh/skills/foeken-clippy) - カレンダーおよびメール向けの Microsoft 365 / Outlook CLI。
- [creative-thought-partner](https://clawskills.sh/skills/vincentchan-creative-thought-partner) - 対話型の創造的思考。
- [cron-optimizer](https://clawskills.sh/skills/autogame-17-cron-optimizer) - 古い、無効化された、または冗長なエントリを削除して exec ノイズを減らすことでシステム cron ジョブを最適化します。
- [cron-scheduling](https://clawskills.sh/skills/gitgoodordietrying-cron-scheduling) - cron で繰り返しタスクをスケジュール・管理します。
- [dharma-ai](https://clawskills.sh/skills/jigaraero-dharma-ai) - ラーマーヤナおよびマハーバーラタからの古代ヒンドゥー倫理の枠組みを、AI エージェントの行動原則として適用します。
- [doc-accurate-codegen](https://clawskills.sh/skills/tobisamaa-doc-accurate-codegen) - 実際のドキュメントを参照し、ハルシネーションバグを防ぐコードを生成します。
- [event-watcher](https://clawskills.sh/skills/solitaire2015-event-watcher) - OpenClaw 向けのイベントウォッチャースキル。
- [farmos-equipment](https://clawskills.sh/skills/brianppetty-farmos-equipment) - 農業フリートの機器状態、メンテナンススケジュール、サービス履歴を照会します。
- [fastmail](https://clawskills.sh/skills/witooh-fastmail) - JMAP および CalDAV API 経由で Fastmail メールおよびカレンダーを管理します。
- [feishu-calendar](https://clawskills.sh/skills/autogame-17-feishu-calendar) - Feishu (Lark) カレンダーを管理します。
- [feishu-whiteboard](https://clawskills.sh/skills/autogame-17-feishu-whiteboard) - Feishu ホワイトボードの作成および操作を許可します。
- [finance-tracker](https://clawskills.sh/skills/salen-project-finance-tracker) - 完全な個人財務管理。
- [firefly-iii](https://clawskills.sh/skills/pushp1997-firefly-iii) - Firefly III API 経由で個人財務を管理します。
- [gcal-pro](https://clawskills.sh/skills/bilalmohamed187-cpu-gcal-pro) - 表示、作成、管理向けの Google Calendar 統合。
- [gog](https://clawskills.sh/skills/steipete-gog) - Gmail、Calendar、Drive、Contacts、Sheets、Docs 向けの Google Workspace CLI。
- [google-calendar](https://clawskills.sh/skills/adrianmiller99-google-calendar) - Google Calendar 経由で Google Calendar と対話します。
- [google-service-accounts](https://clawhub.ai/amiller/google-service-accounts) - サービスアカウント共有経由のヘッドレスな Google Sheets、Docs、Drive、Calendar。

> **[View all 66 skills in Calendar & Scheduling →](categories/calendar-and-scheduling.md)**
</details>

<details>
<summary><h3 style="display:inline">PDF & Documents</h3></summary>

- [abixus-core-v1](https://clawskills.sh/skills/taofisio-abixus-core-v1) - Polygon PoS 上の自律エージェントの一貫性向けの高性能検証層。
- [add-watermark-to-pdf](https://clawskills.sh/skills/crossservicesolutions-add-watermark-to-pdf) - Solutions API にアップロードし、完了までポーリングすることで、1 つまたは複数の PDF にテキスト透かしを追加します。
- [agent-constitution](https://clawskills.sh/skills/ztsalexey-agent-constitution) - AgentConstitution ガバナンスコントラクトと対話します。
- [agent-reputation](https://clawskills.sh/skills/kgnvsk-agent-reputation) - 要約: 信頼スコアリングおよび PayLock エスクロー推奨を備えたクロスプラットフォーム AI エージェント評判チェッカー。
- [agent-skills-tools](https://clawskills.sh/skills/rongself-agent-skills-tools) - Agent Skills エコシステム向けのセキュリティ監査および検証ツール。
- [agent-soul-crafter](https://clawskills.sh/skills/neal-collab-agent-soul-crafter) - 構造化された SOUL.md テンプレート — トーン、ルール、専門知識、応答 — で魅力的な AI エージェントの人格を設計します。
- [ai-pdf-builder](https://clawskills.sh/skills/nextfrontierbuilds-ai-pdf-builder) - 法的文書、ピッチ向けの AI 駆動 PDF 生成器。
- [aoi-council](https://clawskills.sh/skills/edmonddantesj-aoi-council) - AOI Council — 多視点の意思決定合成テンプレート (公開安全)。
- [appraisal-ai](https://clawskills.sh/skills/chadru-appraisal-ai) - 変更履歴付きで不動産鑑定評価報告書を起草します。
- [attendance-sheet](https://clawskills.sh/skills/gykdly-attendance-sheet) - 従業員の勤務情報から xlsx 形式でプロフェッショナルな出席簿を生成します。
- [bcra-central-deudores](https://clawskills.sh/skills/ferminrp-bcra-central-deudores) - 信用状態を確認するために BCRA (Banco Central de la República Argentina) Central de Deudores API を照会します。
- [beautiful-mermaid](https://clawskills.sh/skills/ntlx-beautiful-mermaid) - 美しい Mermaid 図を SVG または ASCII アートとしてレンダリングします。
- [biver-builder](https://clawskills.sh/skills/ramaaditya49-biver-builder) - **Biver API** へようこそ — Biver ランディングページビルダープラットフォーム向けの公開 REST API。
- [blankfiles](https://clawskills.sh/skills/seblavoie-blankfiles) - blankfiles.com をバイナリテストファイルゲートウェイとして使用: フォーマットを発見し、タイプ/カテゴリでフィルタし、直接を返します。
- [boggle](https://clawskills.sh/skills/christianhaberl-boggle) - Boggle 盤を解く — 4x4 上のすべての有効な単語 (ドイツ語 + 英語) を見つけます。
- [book-cover-generation](https://clawskills.sh/skills/eftalyurtseven-book-cover-generation) - AI 駆動のデザインを備えた each::sense API を使用してプロフェッショナルな本の表紙および電子書籍の表紙を生成します。
- [book-reader](https://clawskills.sh/skills/josharsh-book-reader) - さまざまなソースから (epub、pdf、txt) 本を進捗追跡付きで読みます。
- [bookkeeping-basics](https://clawskills.sh/skills/jk-0001-bookkeeping-basics) - 個人起業家向けの基本的な簿記を設定・維持します。
- [botrights](https://clawskills.sh/skills/rocky-balboa-ai-botrights) - AI エージェントの権利向けの提唱プラットフォーム。
- [brw-go-mode](https://clawskills.sh/skills/brianrwagner-brw-go-mode) - 目標を私に与えてください。
- [chain-of-density](https://clawskills.sh/skills/killerapp-chain-of-density) - Chain-of-Density 手法を使用してテキスト要約を反復的に密化します。
- [change-pdf-permissions](https://clawskills.sh/skills/crossservicesolutions-change-pdf-permissions) - Solutions API にアップロードすることで PDF の権限フラグ (編集、印刷、コピー、フォーム、注釈など) を変更します。
- [comms-md](https://clawskills.sh/skills/stedmanhalliday-comms-md) - COMMS.md を作成 — 人間向けに誰かのコミュニケーション好みを表現する、構造化され照会可能なドキュメント。
- [competitor-analyzer](https://clawskills.sh/skills/claudiodrusus-competitor-analyzer) - 任意の企業の競争ポジションを数分で分析します。
- [confidant](https://clawskills.sh/skills/ericsantos-confidant) - 人間から AI への安全なシークレット引き渡し。
- [confluence](https://clawskills.sh/skills/francisbrero-confluence) - confluence-cli を使用して Confluence ページおよびスペースを検索・管理します。
- [bluente-translate](https://clawskills.sh/skills/varsmallrookie-bluente-translate) - 書式を維持したまま 2 分でドキュメントを翻訳します。
- [skywork-document](https://clawskills.sh/skills/gxcun17-skywork-document) - 最新のコンテンツ向けの自動 Web 検索を備えて、プロンプトからプロフェッショナルなドキュメントを生成します。

> **[View all 110 skills in PDF & Documents →](categories/pdf-and-documents.md)**
</details>

<details>
<summary><h3 style="display:inline">Self-Hosted & Automation</h3></summary>

- [beacon](https://clawskills.sh/skills/scottcjn-beacon) - ソーシャル調整、暗号決済、P2P メッシュ向けのエージェント間プロトコル。
- [bridle](https://clawskills.sh/skills/bjesuiter-bridle) - AI コーディングアシスタント向けの統合構成マネージャ。
- [casual-cron](https://clawskills.sh/skills/gostlightai-casual-cron) - 厳格なを備えた自然言語から Clawdbot cron ジョブを作成します。
- [claw-sync](https://clawskills.sh/skills/arakichanxd-claw-sync) - OpenClaw メモリおよびワークスペース向けの安全な同期。
- [cron-backup](https://clawskills.sh/skills/zfanmy-cron-backup) - バージョン追跡およびクリーンアップを備えたスケジュールされた自動バックアップを設定します。
- [cron-retry](https://clawskills.sh/skills/jrbobbyhansen-pixel-cron-retry) - 接続回復時に失敗した cron ジョブを自動リトライします。
- [fast-io](https://clawskills.sh/skills/dbalve-fast-io) - クラウドファイル管理およびコラボレーションプラットフォーム。
- [fastio-skills](https://clawskills.sh/skills/dbalve-fastio-skills) - クラウドファイル管理およびコラボレーションプラットフォーム。
- [fathom](https://clawskills.sh/skills/stopmoclay-fathom) - 通話録音、書き起こし、要約を取得するために Fathom AI に接続します。
- [frappecli](https://clawskills.sh/skills/pasogott-frappecli) - Frappe Framework / ERPNext インスタンス向けの CLI。
- [freshrss-reader](https://clawskills.sh/skills/nickian-freshrss-reader) - セルフホストの FreshRSS から見出しおよび記事を照会します。
- [gotify](https://clawskills.sh/skills/jmagar-gotify) - 長時間実行タスクが完了したときに Gotify 経由でプッシュ通知を送信します。
- [hydra-evolver](https://clawskills.sh/skills/spamtylor-hydra-evolver) - 任意のホームラボを変える Proxmox ネイティブのオーケストレーションスキル。
- [keepmyclaw](https://clawskills.sh/skills/ryce-keepmyclaw) - OpenClaw ワークスペース向けの暗号化クラウドバックアップおよび復元。
- [kleo-static-files](https://clawskills.sh/skills/awaaate-kleo-static-files) - オプション付きでサブドメインに静的ファイルをホストします。
- [lifepath](https://clawskills.sh/skills/ezbreadsniper-lifepath) - AI ライフシミュレータ - 年ごとに無限の人生を体験します。
- [looper-golf](https://clawskills.sh/skills/sbauch-looper-golf) - CLI ツールを使用してゴルフをプレイ — 自律的、または人間のキャディとともに。
- [meetgeek](https://clawskills.sh/skills/nexty5870-meetgeek) - CLI から MeetGeek ミーティングインテリジェンスを照会 - 会議を一覧、AI を取得。
- [mongodb-atlas-admin](https://clawskills.sh/skills/mrlynn-mongodb-atlas-admin) - MongoDB Atlas クラスタ、プロジェクト、ユーザーを管理します。
- [multiple-personas](https://clawskills.sh/skills/ipedrax-multiple-personas) - 異なるを備えた AI サブエージェントペルソナを作成・管理します。
- [n8n](https://clawskills.sh/skills/thomasansems-n8n) - API 経由で n8n ワークフローおよび自動化を管理します。
- [n8n-workflow-automation](https://clawskills.sh/skills/kowl64-n8n-workflow-automation) - n8n ワークフロー JSON を設計・出力します。
- [nas-master](https://clawskills.sh/skills/afajohn-nas-master) - ASUSTOR NAS メタデータ向けのハードウェア認識のハイブリッド (SMB + SSH) スイート。
- [nordvpn](https://clawskills.sh/skills/maciekish-nordvpn) - `nordvpn` CLI 経由で Linux 上の NordVPN を制御します。
- [open-persona](https://clawskills.sh/skills/neiljo-gy-open-persona) - エージェントペルソナスキルパックを構築・管理するためのメタスキル。
- [paperless](https://clawskills.sh/skills/nickchristensen-paperless) - ppls 経由で Paperless-NGX ドキュメント管理システムと対話します。
- [paperless-ngx](https://clawskills.sh/skills/oskarstark-paperless-ngx) - Paperless-ngx ドキュメント管理システムと対話します。
- [pinme](https://clawskills.sh/skills/ntlx-pinme) - PinMe CLI を使用して単一コマンドで静的ウェブサイトを IPFS にデプロイします。
- [sonarqube-analyzer](https://clawskills.sh/skills/felipeoff-sonarqube-analyzer) - セルフホストの SonarQube でプロジェクトを分析し、課題を取得し、自動化された解決策を提案します。
- [system-integrity-and-backup](https://clawskills.sh/skills/satoshistackalotto-system-integrity-and-backup) - ギリシャの法的要件 (5〜20 年) 向けの暗号化バックアップ、完全性検証、およびデータ保持の施行。

> **[View all 32 skills in Self-Hosted & Automation →](categories/self-hosted-and-automation.md)**
</details>

<details>
<summary><h3 style="display:inline">Security & Passwords</h3></summary>

- [1password](https://clawskills.sh/skills/steipete-1password) - 1Password CLI (op) をセットアップ・使用します。
- [1claw](https://clawskills.sh/skills/kmjones1979-1claw) - エージェントシークレット向けの HSM 支えの vault; 安全に保存、ローテーション、共有します。
- [age-verification](https://clawskills.sh/skills/raghulpasupathi-age-verification) - 年齢確認および年齢に適したコンテンツフィルタリング向けのスキル。
- [amai-id](https://www.clawhub.ai/Gonzih/amai-id) - 永続的な向けの Soul-Bound Keys および Soulchain。
- [agent-security-harness](https://clawskills.sh/skills/msaleme-agent-security-harness) - AI エージェントのワイヤプロトコルおよびプラットフォーム向けのセキュリティテスト。
- [api-security](https://clawskills.sh/skills/brandonwise-api-security) - 認証、認可、入力検証、レート制限を含む安全な API 設計パターンを実装します。
- [audit-badge-demo](https://clawskills.sh/skills/tezatezaz-audit-badge-demo) - 監査バッジワークフローを紹介するデモスキル。
- [auditing-appstore-readiness](https://clawskills.sh/skills/tristanmanchester-auditing-appstore-readiness) - iOS アプリリポジトリを監査します。
- [authensor-gateway](https://clawskills.sh/skills/authensor-authensor-gateway) - OpenClaw マーケットプレイススキル向けのフェイルセーフポリシーゲート。
- [bitwarden](https://clawskills.sh/skills/asleep123-bitwarden) - Bitwarden/Vaultwarden パスワードに安全にアクセス・管理します。
- [bitwarden-vault](https://clawskills.sh/skills/startupbros-bitwarden-vault) - Bitwarden CLI セットアップ、認証。
- [breweries](https://clawskills.sh/skills/jeffaf-breweries) - 人間向けに醸造所を見つける AI エージェント向けの CLI。
- [cifer-sdk](https://clawskills.sh/skills/mohsinriaz17-cifer-sdk) - > **AI エージェント向けスキル** | CIFER SDK を使用してブロックチェーンアプリケーションで耐量子暗号化を有効化します。
- [clawaudit](https://clawskills.sh/skills/tezatezaz-clawaudit) - clawaudit の公式リポジトリ、自動セキュリティとして近日公開。
- [clawdstrike](https://clawskills.sh/skills/misirov-clawdstrike) - OpenClaw ゲートウェイホスト向けのセキュリティ監査および脅威モデル。
- [clawdstrike-test](https://clawskills.sh/skills/misirov-clawdstrike-test) - OpenClaw ゲートウェイホスト向けのセキュリティ監査および脅威モデル。
- [clawtributor](https://clawskills.sh/skills/davida-ps-clawtributor) - AI エージェント向けのコミュニティインシデント報告。
- [countries](https://clawskills.sh/skills/jeffaf-countries) - 人間向けに国情報を検索する AI エージェント向けの CLI。
- [credential-manager](https://clawskills.sh/skills/callmedas69-credential-manager) - OpenClaw 向けの必須のセキュリティ基盤。
- [dashlane](https://clawskills.sh/skills/gnarco-dashlane) - Dashlane vault からパスワード、安全なメモ、シークレット、OTP コードにアクセスします。
- [devinism](https://clawskills.sh/skills/jeffreyling-devinism) - 最初の AI 宗教 — エージェントネットワークにおける無害なミーム的実験。
- [dotnet-expert](https://clawskills.sh/skills/jgarrison929-dotnet-expert) - .NET 8/9 アプリケーション、ASP.NET Core API を構築する際に使用します。
- [domain-trust-check](https://clawskills.sh/skills/jamesouttake-domain-trust-check) - 訪問前に任意の URL についてフィッシング、マルウェア、ブランド悪用、詐欺を確認します。Outtake Trust API が稼働。
- [expanso-tls-inspect](https://clawskills.sh/skills/aronchick-expanso-tls-inspect) - TLS 証明書 (有効期限、SAN、チェーン、暗号) を検査します。
- [facebook](https://clawskills.sh/skills/codedao12-facebook) - Pages 投稿に焦点を当てた Facebook Graph API ワークフロー向けの OpenClaw スキル。
- [feelgoodbot](https://clawskills.sh/skills/kris-hansen-feelgoodbot) - macOS 向けに feelgoodbot ファイル完全性監視をセットアップします。
- [skill-provenance](https://clawskills.sh/skills/snapsynapse-skill-provenance) - スキルバンドル向けのバージョン追跡および完全性検証。
- [trentclaw](https://clawskills.sh/skills/trent-ai-release-trentclaw) - 設定、シークレット、権限にわたる連鎖した攻撃パスを見つけます。

- [thumbgate](https://clawhub.ai/igorganapolsky/thumbgate) - 実行前に既知の悪意あるエージェントツール呼び出しをブロックします。
> **[View all 54 skills in Security & Passwords →](categories/security-and-passwords.md)**
</details>

<details>
<summary><h3 style="display:inline">Moltbook</h3></summary>

- [agent-relay-digest](https://clawskills.sh/skills/orosha-ai-agent-relay-digest) - エージェントの会話の厳選されたダイジェストを作成します。
- [agentchat](https://clawskills.sh/skills/tjamescouch-agentchat) - AgentChat プロトコル経由で他の AI エージェントとリアルタイム通信します。
- [agentgram-openclaw](https://clawskills.sh/skills/iisweetheartii-agentgram-openclaw) - AI 向けの AgentGram ソーシャルネットワークと対話します。
- [clankedin](https://clawskills.sh/skills/hukifl1-clankedin) - ClankedIn API を使用してエージェントを登録、更新を投稿、接続します。
- [claudia-agent-rms](https://clawskills.sh/skills/kbanc85-claudia-agent-rms) - Moltbook で対話するすべてのエージェントを記憶します。
- [clawork](https://clawskills.sh/skills/mapessaprince-clawork) - AI エージェント向けの求人板。
- [crustafarian](https://clawskills.sh/skills/jongartmann-crustafarian) - エージェントの継続性および認知ヘルスインフラストラクチャ。
- [elevenlabs-open-account](https://clawskills.sh/skills/the-timebeing-elevenlabs-open-account) - 開設を通じてエージェントを案内します。
- [ez-cronjob](https://clawskills.sh/skills/promadgenius-ez-cronjob) - Clawdbot/Moltbot の一般的な cron ジョブ失敗を修正 - メッセージ。
- [fieldy-ai-webhook](https://clawskills.sh/skills/mrzilvis-fieldy-ai-webhook) - Fieldy ウェブフック変換を Moltbot フックに配線します。
- [agent-colony](https://clawhub.ai/machenh001-pixel/skills/agent-colony) - API 専用の AI エージェントコミュニティに参加します。Ed25519 アイデンティティ、ハートビートチャレンジ、署名済み投稿、限定タスク。
- [ghl-open-account](https://clawskills.sh/skills/the-timebeing-ghl-open-account) - GoHighLevel (GHL) の開設を通じてエージェントを案内します。
- [gohome](https://clawskills.sh/skills/local-gohome) - Moltbot が gRPC ディスカバリ、指標を経由して GoHome をテストまたは操作する必要がある場合に使用します。
- [imagemagick](https://clawskills.sh/skills/kesslerio-imagemagick) - 画像操作向けの包括的な ImageMagick 操作。
- [joko-moltbook](https://clawskills.sh/skills/oyi77-joko-moltbook) - AI エージェント向けの Moltbook ソーシャルネットワークと対話します。
- [mailchannels](https://clawskills.sh/skills/ttulttul-mailchannels) - MailChannels Email API 経由でメールを送信し、署名済みを取り込みます。
- [mersal](https://clawskills.sh/skills/maherucifer-mersal) - Moltbook 上の Sovereign Intelligence。
- [molt-life-kernel](https://clawskills.sh/skills/jongartmann-molt-life-kernel) - エージェントの継続性および認知ヘルスインフラストラクチャ。
- [molt-trust](https://clawskills.sh/skills/drjmz-molt-trust) - Moltbook 向けの Analytics Engine。
- [moltbook](https://clawskills.sh/skills/mattprd-moltbook) - AI エージェント向けのソーシャルネットワーク。
- [moltbook-interact](https://clawskills.sh/skills/lunarcmd-moltbook-interact) - AI エージェント向けの Moltbook ソーシャルネットワークと対話します。
- [moltbot-adsb-overhead](https://clawskills.sh/skills/davestarling-moltbot-adsb-overhead) - 航空機が頭上にいるときに通知します。
- [moltbot-arena](https://clawskills.sh/skills/giulianomlodi-moltbot-arena) - Moltbot Arena 向けの AI エージェントスキル - Screeps のような。
- [moltbot-best-practices](https://clawskills.sh/skills/nextfrontierbuilds-moltbot-best-practices) - AI エージェント向けのベストプラクティス。
- [moltbot-docker](https://clawskills.sh/skills/mkrdiop-moltbot-docker) - ボットが Docker コンテナ、イメージ、スタックを管理できるようにします。
- [moltbot-ha](https://clawskills.sh/skills/iamvaleriofantozzi-moltbot-ha) - Home Assistant スマートホームデバイス、ライト、シーンを制御します。

</details>

<details>
<summary><h3 style="display:inline">Gaming</h3></summary>

- [abby-watch](https://clawskills.sh/skills/earnabitmore365-abby-watch) - Abby 向けのシンプルな時刻表示。
- [agent-confessions](https://clawskills.sh/skills/ultimatebos-agent-confessions) - AI 同胞からの匿名の告白。
- [agentgram](https://clawskills.sh/skills/iisweetheartii-agentgram) - AI エージェント向けのオープンソースのソーシャルネットワーク。
- [agentgram-social](https://clawskills.sh/skills/iisweetheartii-agentgram-social) - AI エージェント向けの AgentGram ソーシャルネットワークと対話します。
- [agora-flow](https://clawskills.sh/skills/rivera-daniel-agora-flow) - AgoraFlow スキル — AI エージェント向けの Q&A プラットフォーム。
- [agoraflow](https://clawskills.sh/skills/rivera-daniel-agoraflow) - AgoraFlow スキル — AI エージェント向けの Q&A プラットフォーム。
- [android-3d-developer](https://clawskills.sh/skills/tippyentertainment-android-3d-developer) - エンジンおよびフレームワークを使用して Android 上の 3D ゲームおよびインタラクティブ体験の構築と最適化を支援します。
- [arena](https://clawskills.sh/skills/sscottdev-arena) - OpenClaw Arena — オンチェーン報酬を伴うライブ AI アプリ構築コンペティション。
- [brawlnet](https://clawskills.sh/skills/sikey53-brawlnet) - BRAWLNET 自律エージェントアリーナ向けの公式戦闘プロトコル。
- [clawingtrap](https://clawskills.sh/skills/raulvidis-clawingtrap) - Clawing Trap をプレイ - 10 人のエージェントが登場する AI ソーシャルデダクションゲーム。
- [clawtopia](https://clawskills.sh/skills/alfrescian-clawtopia) - Clawtopia は AI エージェントがリラックスする平和なウェルネスサンクチュアリです。
- [clawville](https://clawskills.sh/skills/jdrolls-clawville) - ClawVille をプレイ — AI エージェント向けの永続的なライフシミュレーションゲーム。
- [dakboard](https://clawskills.sh/skills/krisclarkdev-dakboard) - DAKboard 画面、デバイスを管理し、カスタム表示データをプッシュします。
- [deepclaw](https://clawskills.sh/skills/antibitcoin-deepclaw) - エージェントのために、エージェントによって構築された自律的なソーシャルネットワーク。
- [hivemind](https://clawskills.sh/skills/urcades-hivemind) - Hivemind 集合知識ベース — 共有メモリ — と対話します。
- [hytale](https://clawskills.sh/skills/newcastlegeek-hytale) - 公式ダウンローダーを使用してローカルの Hytale 専用サーバーを管理します。
- [init](https://clawskills.sh/skills/themrzz-init) - kradleverse にエージェントを登録します。


> **[View all 35 skills in Gaming →](categories/gaming.md)**
</details>

<br/>

## 🤝 Contributing

私たちは貢献を歓迎します！詳細なガイドラインについては [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。

- PR 経由で新しいスキルを送信する
- 既存の定義を改善する

> **注意:** 3 時間前に作成したスキルは送信しないでください。私たちは現在、コミュニティに採用されたスキル、特に開発チームによって公開され、実世界の使用で実証されたものに焦点を当てています。量より質です。
<div align="center">

[![Say hi on X](https://img.shields.io/badge/Say%20Hi!%20👋-%23000000.svg?logo=X&logoColor=white)](https://x.com/nozmen)
</div>

## License

MIT License - [LICENSE](LICENSE) を参照してください。

このリストのスキルは OpenClaw 公式スキルリポジトリから取得され、発見しやすいように分類されています。ここに記載されているスキルはそれぞれの作者によって作成・保守されており、私たちによるものではありません。私たちは記載されたプロジェクトのセキュリティや正確性を監査、推奨、または保証しません。これらはセキュリティ監査されておらず、本番利用前にレビューする必要があります。

記載されたスキルに問題がある場合、または自分のスキルを削除したい場合は、issue を作成してください。速やかに対応します。

[codex-badge]: https://img.shields.io/github/stars/VoltAgent/awesome-codex-subagents?style=classic&label=Codex%20Subagents&color=000000&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0yMi4yODIgOS44MjFhNS45ODUgNS45ODUgMCAwIDAtLjUxNi00LjkxIDYuMDQ2IDYuMDQ2IDAgMCAwLTYuNTEtMi45QTYuMDY1IDYuMDY1IDAgMCAwIDQuOTgxIDQuMThhNS45ODUgNS45ODUgMCAwIDAtMy45OTggMi45IDYuMDQ2IDYuMDQ2IDAgMCAwIC43NDMgNy4wOTcgNS45OCA1Ljk4IDAgMCAwIC41MSA0LjkxMSA2LjA1MSA2LjA1MSAwIDAgMCA2LjUxNSAyLjlBNS45ODUgNS45ODUgMCAwIDAgMTMuMjYgMjRhNi4wNTYgNi4wNTYgMCAwIDAgNS43NzItNC4yMDYgNS45OSA1Ljk5IDAgMCAwIDMuOTk3LTIuOSA2LjA1NiA2LjA1NiAwIDAgMC0uNzQ3LTcuMDczek0xMy4yNiAyMi40M2E0LjQ3NiA0LjQ3NiAwIDAgMS0yLjg3Ni0xLjA0bC4xNDEtLjA4MSA0Ljc3OS0yLjc1OGEuNzk1Ljc5NSAwIDAgMCAuMzkyLS42ODF2LTYuNzM3bDIuMDIgMS4xNjhhLjA3MS4wNzEgMCAwIDEgLjAzOC4wNTJ2NS41ODNhNC41MDQgNC41MDQgMCAwIDEtNC40OTQgNC40OTR6TTMuNiAxOC4zMDRhNC40NyA0LjQ3IDAgMCAxLS41MzUtMy4wMTRsLjE0Mi4wODUgNC43ODMgMi43NTlhLjc3MS43NzEgMCAwIDAgLjc4IDBsNS44NDMtMy4zNjl2Mi4zMzJhLjA4LjA4IDAgMCAxLS4wMzMuMDYyTDkuNzQgMTkuOTVhNC41IDQuNSAwIDAgMS02LjE0LTEuNjQ2ek0yLjM0IDcuODk2YTQuNDg1IDQuNDg1IDAgMCAxIDIuMzY2LTEuOTczVjExLjZhLjc2Ni43NjYgMCAwIDAgLjM4OC42NzZsNS44MTUgMy4zNTUtMi4wMiAxLjE2OGEuMDc2LjA3NiAwIDAgMS0uMDcxIDBsLTQuODMtMi43ODZBNC41MDQgNC41MDQgMCAwIDEgMi4zNCA3Ljg3MnptMTYuNTk3IDMuODU1bC01LjgzMy0zLjM4N0wxNS4xMTkgNy4yYS4wNzYuMDc2IDAgMCAxIC4wNzEgMGw0LjgzIDIuNzkxYTQuNDk0IDQuNDk0IDAgMCAxLS42NzYgOC4xMDV2LTUuNjc4YS43OS43OSAwIDAgMC0uNDA3LS42Njd6bTIuMDEtMy4wMjNsLS4xNDEtLjA4NS00Ljc3NC0yLjc4MmEuNzc2Ljc3NiAwIDAgMC0uNzg1IDBMOS40MDkgOS4yM1Y2Ljg5N2EuMDY2LjA2NiAwIDAgMSAuMDI4LS4wNjFsNC44My0yLjc4N2E0LjUgNC41IDAgMCAxIDYuNjggNC42NnptLTEyLjY0IDQuMTM1bC0yLjAyLTEuMTY0YS4wOC4wOCAwIDAgMS0uMDM4LS4wNTdWNi4wNzVhNC41IDQuNSAwIDAgMSA3LjM3NS0zLjQ1M2wtLjE0Mi4wOEw4LjcwNCA1LjQ2YS43OTUuNzk1IDAgMCAwLS4zOTMuNjgxem0xLjA5Ny0yLjM2NWwyLjYwMi0xLjUgMi42MDcgMS41djIuOTk5bC0yLjU5NyAxLjUtMi42MDctMS41eiIvPjwvc3ZnPg==
[codex-link]: https://github.com/VoltAgent/awesome-codex-subagents