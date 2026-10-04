<div align="center">

# Awesome LLM アプリ

**100以上のオープンソースAIエージェント、エージェントスキル、RAGアプリ。手作業で構築し、エンドツーエンドでテスト済み。Apache-2.0。**

複製・公開・販売も自由。100%無料のオープンソース

Claude、Gemini、GPT、DeepSeek、Llama、Qwenなどのオープンソースモデルに対応。

**[Unwind AIのステップ別チュートリアル](https://www.theunwindai.com) · [クイックスタート](#-run-one-now) · [すべてのテンプレートを見る](#-browse-all-templates)**


<a href="https://trendshift.io/repositories/9876" target="_blank">
  <img src="https://trendshift.io/api/badge/repositories/9876" width="220" alt="Trendshiftで本日の第1位として紹介">
</a>

<br>

</div>

<table>
  <tr>
    <td width="33.3%" align="center">
      <a href="agent_skills/project-graveyard/"><img src="docs/gallery/project-graveyard.png" alt="Project Graveyard：放棄した個人プロジェクトを検視するエージェント"></a>
      <sub><b>Project Graveyard</b></sub>
    </td>
    <td width="33.3%" align="center">
      <a href="voice_ai_agents/insurance_claim_live_agent_team/"><img src="docs/gallery/insurance-claim-live-team.png" alt="Insurance Claim Live Agent Team：音声請求をリアルタイムで処理"></a>
      <sub><b>Insurance Claim Live Agent Team</b></sub>
    </td>
    <td width="33.3%" align="center">
      <a href="advanced_ai_agents/single_agent_apps/ai_fraud_investigation_agent/"><img src="docs/gallery/ai-fraud-investigation.png" alt="AI Fraud Investigation Agent：公開記録を照合して調査"></a>
      <sub><b>AI Fraud Investigation Agent</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="agent_skills/self-improving-agent-skills/"><img src="docs/gallery/self-improving-agent-skills.png" alt="Self-Improving Agent Skills：評価結果に基づいて自ら書き換わるスキル"></a>
      <sub><b>Self-Improving Agent Skills</b></sub>
    </td>
    <td align="center">
      <a href="advanced_ai_agents/multi_agent_apps/ai_home_renovation_agent"><img src="docs/gallery/ai-home-renovation.png" alt="AI Home Renovation Agent：写真から写実的なリフォーム案を作成"></a>
      <sub><b>AI Home Renovation Agent</b></sub>
    </td>
    <td align="center">
      <a href="always_on_agents/always_on_hn_briefing_agent/"><img src="docs/gallery/always-on-hn-briefing.png" alt="Always-on HN Briefing Agent：眠っている間にHacker Newsを読む"></a>
      <sub><b>Always-on HN Briefing Agent</b></sub>
    </td>
  </tr>
</table>

## 🙏 スポンサーの皆さまに感謝

<table align="center" cellpadding="16" cellspacing="12">
  <tr>
    <td align="center">
      <a href="https://www.tinyfish.ai/ambassadors?utm_source=github&utm_medium=affiliate&utm_campaign=community-launch-marketing-2026q3&utm_term=awesomellmapps" target="_blank" rel="noopener" title="TinyFish">
        <img src="docs/banner/sponsors/tinyfish_community.png" alt="TinyFishコミュニティプログラム：学生・アンバサダープログラムに参加" width="500">
      </a>
      <br>
      <a href="https://www.tinyfish.ai/ambassadors?utm_source=github&utm_medium=affiliate&utm_campaign=community-launch-marketing-2026q3&utm_term=awesomellmapps" target="_blank" rel="noopener" style="text-decoration: none; color: #333; font-weight: bold; font-size: 18px;">
        TinyFish
      </a>
    </td>
    <td align="center">
      <a href="https://sponsorunwindai.com/" title="スポンサーになる">
        <img src="docs/banner/sponsor_awesome_llm_apps.png" alt="スポンサーになる" width="500">
      </a>
      <br>
      <a href="https://sponsorunwindai.com/" style="text-decoration: none; color: #333; font-weight: bold; font-size: 18px;">
        スポンサーになる
      </a>
    </td>
  </tr>
</table>

## 🚀 今すぐ実行

10秒でコーディングエージェントに新しいスキルを追加：

```bash
npx skills add https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/agent_skills/project-graveyard
```

次のように尋ねてみましょう：*「なぜ自分の個人プロジェクトはいつも完成しないの？」*

または、30秒で好きなエージェントを複製して実行：

```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd awesome-llm-apps/starter_ai_agents/ai_travel_agent
pip install -r requirements.txt
streamlit run travel_agent.py
```

> 📬 新しいテンプレートを毎週公開。[Unwind AIでメール受信](https://www.theunwindai.com)。

## 📂 すべてのテンプレート

### 🧩 エージェントスキル

*コーディングエージェントに新しい能力を追加。コマンド1つでインストールし、平易な言葉で利用できます。各スキルには実際のコードが含まれ、セキュリティと評価のCIゲートを通過しています。Claude Code、Codex、Cursorなどに対応。[すべてのスキルを見る →](agent_skills/)*

*   [⚰️ Project Graveyard](agent_skills/project-graveyard/) - 放棄したすべての個人プロジェクトを見つけ、失敗の理由を説明し、再開に値するものの完成を支援
*   [👁️ First Reader](agent_skills/first-reader/) - 実際の読者が草稿を読む様子を再現し、関心を失う箇所や読むのをやめる箇所、読後に覚えている内容を報告。文章は一切書き換えない
*   [🔭 Scope Creep Detector](agent_skills/scope-creep-detector/) - diffが明示された目的を超えていないか確認し、残す・分割する・根拠を示す部分を提案
*   [🏺 Commit Archaeologist](agent_skills/commit-archaeologist/) - 導入コミット、後続の編集、関連変更、意図の手掛かりから、ファイルやコード部分が存在する理由を再構成
*   [🩺 Dependency Doctor](agent_skills/dependency-doctor/) - 依存関係マニフェストを確認し、標準ライブラリの固定、古いバックポート、未固定項目、重複制約、公開停止版を検出
*   [🧠 Advisor Orchestrator Worker](agent_skills/advisor-orchestrator-worker/) - Claude Fable 5.1をアドバイザー、GPT-6 Astraをオーケストレーター、Gemini 3.8 Flashをワーカーとするメタループ
*   [🎙️ Thinking Out Loud](agent_skills/thinking-out-loud/) - 音声の思いつきを読みやすい要約にし、モデルの推測を分離して意見の変化を示す
*   [♾️ Self-Improving Agent Skills](agent_skills/self-improving-agent-skills/) - GeminiとADKを使ってエージェントスキルを自動最適化

### 🌱 入門AIエージェント

*APIキーだけで動く単一ファイルのエージェント。入門に最適です。*

*   [🎙️ AI Blog to Podcast Agent](starter_ai_agents/ai_blog_to_podcast_agent/) - 任意のブログURLをナレーション付きポッドキャストに変換
*   [❤️‍🩹 AI Breakup Recovery Agent](starter_ai_agents/ai_breakup_recovery_agent/) - 失恋後の落ち込みを支えるエージェントチーム
*   [📊 AI Data Analysis Agent](starter_ai_agents/ai_data_analysis_agent/) - 任意のCSVやExcelファイルについて平易な言葉で質問
*   [🩻 AI Medical Imaging Agent](starter_ai_agents/ai_medical_imaging_agent/) - GeminiでX線画像やスキャンを診断分析
*   [😂 AI Meme Generator Agent (Browser)](starter_ai_agents/ai_meme_generator_agent_browseruse/) - 画像APIではなく実際のブラウザーを操作してミームを作成
*   [🎵 AI Music Generator Agent](starter_ai_agents/ai_music_generator_agent/) - プロンプトを入力し、MP3トラックを出力
*   [🛫 AI Travel Agent (Local & Cloud)](starter_ai_agents/ai_travel_agent/) - 日ごとにパーソナライズされた旅行日程
*   [💸 AI x402 Paying Agent](starter_ai_agents/ai_x402_paying_agent/) - 必要なデータに呼び出しごとに支払うウォレット付きエージェント。APIキー不要
*   [✨ Gemini Multimodal Agent](starter_ai_agents/multimodal_ai_agent/) - 動画分析とウェブ検索を1つのエージェントに統合
*   [🔄 Mixture of Agents](starter_ai_agents/mixture_of_agents/) - 複数のLLMが回答し、1つが最良の回答をまとめる
*   [📊 xAI Finance Agent](starter_ai_agents/xai_finance_agent/) - Grokを活用したリアルタイム株式分析
*   [🔍 OpenAI Research Agent](starter_ai_agents/openai_research_agent/) - OpenAI Agents SDKによるマルチエージェントのトピック調査
*   [🕸️ Web Scraping AI Agent](starter_ai_agents/web_scraping_ai_agent/) - 抽出したい内容を説明すれば、エージェントがスクレイピング

### 🚀 高度なAIエージェント

*ツール、メモリー、多段階推論を備えた本番品質のエージェント。*

*   [🏚️ 🍌 AI Home Renovation Agent with Nano Banana Pro](advanced_ai_agents/multi_agent_apps/ai_home_renovation_agent) - 部屋の写真からリフォーム計画と写実的なレンダリングを作成
*   [🧠 DevPulse AI - Multi-Agent Signal Intelligence](advanced_ai_agents/multi_agent_apps/devpulse_ai/) - 技術シグナルを集約・評価し、毎日のインテリジェンス要約を作成
*   [🔍 AI Deep Research Agent](advanced_ai_agents/single_agent_apps/ai_deep_research_agent/) - OpenAI Agents SDKとFirecrawlを使った包括的なウェブ調査
*   [📊 AI VC Due Diligence Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_vc_due_diligence_agent_team) - Gemini 3によるマルチエージェントのスタートアップ投資分析
*   [🔬 AI Research Planner & Executor (Google Interactions API)](advanced_ai_agents/single_agent_apps/research_agent_gemini_interaction_api) - 状態を保持した会話と自動生成インフォグラフィックを備えた段階的な調査
*   [🤝 AI Consultant Agent](advanced_ai_agents/single_agent_apps/ai_consultant_agent) - ライブウェブ調査による市場分析と戦略提案
*   [🏗️ AI System Architect Agent](advanced_ai_agents/single_agent_apps/ai_system_architect_r1/) - DeepSeek R1の推論とClaudeを使ったアーキテクチャレビュー
*   [💰 AI Financial Coach Agent](advanced_ai_agents/multi_agent_apps/ai_financial_coach_agent/) - 予算、負債、貯蓄のパーソナライズ分析
*   [🎬 AI Movie Production Agent](advanced_ai_agents/single_agent_apps/ai_movie_production_agent/) - 一行の映画コンセプトから脚本案と配役アイデアを作成
*   [📈 AI Investment Agent](advanced_ai_agents/single_agent_apps/ai_investment_agent/) - Yahoo Financeのデータに基づく株式比較レポート
*   [📡 Earnings Call Analyst Agent](advanced_ai_agents/single_agent_apps/earnings_call_analyst_agent/) - YouTubeの決算説明会を再生位置に同期した分析ワークスペースに変換
*   [🏋️‍♂️ AI Health & Fitness Agent](advanced_ai_agents/single_agent_apps/ai_health_fitness_agent/) - 目標に合わせた食事とトレーニング計画
*   [🚀 AI Product Launch Intelligence Agent](advanced_ai_agents/multi_agent_apps/product_launch_intelligence_agent) - 競合のローンチに関する市場投入インテリジェンス
*   [🔍 AI Fraud Investigation Agent](advanced_ai_agents/single_agent_apps/ai_fraud_investigation_agent/) - 公開記録を照合し、不整合のある施設を検出
*   [🗞️ AI Journalist Agent](advanced_ai_agents/single_agent_apps/ai_journalist_agent/) - あらゆるテーマの記事を調査・執筆・編集
*   [🧠 AI Mental Wellbeing Agent](advanced_ai_agents/multi_agent_apps/ai_mental_wellbeing_agent/) - メンタルヘルス支援計画を作る協調型エージェントチーム
*   [📑 AI Meeting Agent](advanced_ai_agents/single_agent_apps/ai_meeting_agent/) - 面談前に背景情報、業界の洞察、戦略ブリーフを提供
*   [🧬 AI Self-Evolving Agent](advanced_ai_agents/multi_agent_apps/ai_self_evolving_agent/) - EvoAgentXで自身のワークフローを書き換えるエージェント
*   [👨🏻‍💼 AI Sales Intelligence Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_sales_intelligence_agent_team) - 競争力のある営業バトルカードをリアルタイム生成
*   [🎧 AI Social Media News and Podcast Agent](advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/) - 信頼できる情報源を要約や生成ポッドキャストにまとめる
*   [🌐 Openwork - Open Browser Automation Agent](https://github.com/accomplish-ai/coworker) <sub>↗ 外部</sub> - 実際のブラウザーを操作するオープンソースエージェント
*   [🛡️ Trust-Gated Multi-Agent Research Team](advanced_ai_agents/multi_agent_apps/trust_gated_agent_team/) - 各エージェントを検証し、各操作をハッシュチェーン監査ログに記録

### 🛰️ 常時稼働エージェント

*スケジュールやイベントで動作するバックグラウンドエージェント。変化する状況を監視し、注意事項を判断して、更新・成果物・アクションを先回りして提供します。*

*   [📰 Always-on Hacker News Briefing Agent](always_on_agents/always_on_hn_briefing_agent/) - 予定に従って調査し、順位付きの日次ブリーフをSlackまたはメールに配信
*   [📡 Release Radar Agent](always_on_agents/release_radar_agent/) - 依存関係のリリースを監視し、破壊的変更、非推奨、セキュリティ、メジャー更新を報告

### 🤝 マルチエージェントチーム

*複数のエージェントが協力して、複雑な分野横断タスクを実行します。*

*   [🧲 AI Competitor Intelligence Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_competitor_intelligence_agent_team/) - 競合のウェブサイトに基づく構造化された競合分析
*   [💲 AI Finance Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_finance_agent_team/) - Python 20行の金融アナリストチーム
*   [🎨 AI Game Design Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_game_design_agent_team/) - デザイン専門家の集団から完全なゲーム構想を作成
*   [🧭 AG2 Adaptive Research Team](advanced_ai_agents/multi_agent_apps/agent_teams/ag2_adaptive_research_team/) - AG2を基盤に、ルーティングとフォールバックに対応するエージェント協業
*   [👨‍⚖️ AI Legal Agent Team (Cloud & Local)](advanced_ai_agents/multi_agent_apps/agent_teams/ai_legal_agent_team/) - 法律の専門家チームによる調査、契約分析、戦略立案
*   [💼 AI Recruitment Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_recruitment_agent_team/) - 履歴書の選考から面接日程の調整まで一貫対応
*   [🏠 AI Real Estate Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_real_estate_agent_team) - 不動産検索、市場分析、推薦
*   [👨‍💼 AI Services Agency (CrewAI)](advanced_ai_agents/multi_agent_apps/agent_teams/ai_services_agency/) - ソフトウェアプロジェクトの範囲を定めて計画するデジタルエージェンシー
*   [👨‍🏫 AI Teaching Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_teaching_agent_team/) - エージェント教員チームが学習経路全体を作成
*   [💻 Multimodal Coding Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_coding_agent_team/) - コーディング問題を撮影すると、サンドボックスで実行可能な解答を提供
*   [✨ Multimodal Design Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_design_agent_team/) - Geminiを活用した専門家パネルによるデザイン批評
*   [🎨 🍌 Multimodal UI/UX Feedback Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_uiux_feedback_agent_team/) - ランディングページへのフィードバックと自動生成された改善版
*   [🌏 AI Travel Planner Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/) - チームが作成する完全な旅行日程
*   [⚖️ LLM Panel Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/llm_panel_agent_team/) - 3社が同じdiffをブラインドレビューし、その後匿名で議論

### 🗣️ 音声AIエージェント

*リアルタイム音声APIを使い、音声を入力・出力するエージェント。*

*   [🗣️ AI Audio Tour Agent](voice_ai_agents/ai_audio_tour_agent/) - 場所、関心、ペースに合わせたセルフガイド音声ツアー
*   [📞 Customer Support Voice Agent](voice_ai_agents/customer_support_voice_agent/) - 自分のドキュメントに基づく音声回答
*   [🛡️ Insurance Claim Live Agent Team](voice_ai_agents/insurance_claim_live_agent_team/) - Gemini 3.8 Liveで音声による保険請求受付。現場ノートを作成し、ウェブカメラで損傷を確認して事故のスケッチを作成
*   [🔊 Voice RAG Agent (OpenAI SDK)](voice_ai_agents/voice_rag_openaisdk/) - PDFに質問して回答を音声で聞く
*   [🎙️ OpenSource Voice Dictation Agent (Wispr Flow clone)](https://github.com/akshayaggarwal99/jarvis-ai-assistant) <sub>↗ 外部</sub> - 話した場所に文字を入力するオープンソース音声入力

### 🖼️ 生成UIとエージェント型フロントエンド

*テキストだけでなく、フォーム、カード、グラフ、編集可能な計画などのUIを描画するエージェント。*

*   [🗂️ Generative UI Starter Project](generative_ui_agents/generative-ui-starter-project/) - チャットで操作するカンバンボードをエージェントと共同作業
*   [🪙 AI Financial Coach Agent](generative_ui_agents/ai-financial-coach-agent/) - 予算、貯蓄、負債の計画をインタラクティブカードで表示
*   [📊 AI Dashboard Canvas Agent](generative_ui_agents/ai-dashboard-canvas-agent/) - チャットでダッシュボードを説明すると、ライブキャンバスにグラフを配置
*   [🛠️ AI MCP App Builder](generative_ui_agents/ai-mcp-app-builder/) - MCPアプリを説明すると、実行可能なサンドボックス環境を返す
*   [✈️ MCP Apps Generative UI Showcase](generative_ui_agents/mcp-apps-generative-ui-showcase/) - 実際のインタラクティブUIを表示するMCPアプリ。フライト検索も搭載
*   [🎛️ AI Shadcn Component Generator](generative_ui_agents/ai-shadcn-component-generator/) - チャットで本番品質のshadcnコンポーネントを作成
*   [🔍 AI Deep Research Agent](generative_ui_agents/ai-deep-research-agent/) - ツール呼び出しのたびにライブワークスペースカードを表示する調査

### 🎮 自律型ゲームエージェント

*推論、戦略、操作を通じてゲームを最初から最後までプレイするエージェント。*

*   [🎮 AI 3D Pygame Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_3dpygame_r1/) - DeepSeek R1がPyGameコードを書き、ブラウザーエージェントがライブ実行
*   [♜ AI Chess Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_chess_agent/) - 合法手を検証するエージェント白対エージェント黒
*   [🎲 AI Tic-Tac-Toe Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_tic_tac_toe_agent/) - 異なる2つのLLMが一手ずつ対戦

### ♾️ MCP AIエージェント

*Model Context Protocolを介して外部ツールやデータに接続するエージェント。*

*   [♾️ Browser MCP Agent](mcp_ai_agents/browser_mcp_agent/) - MCP経由で自然言語を使って実際のブラウザーを操作
*   [🐙 GitHub MCP Agent](mcp_ai_agents/github_mcp_agent/) - 任意のリポジトリを平易な言葉で探索・分析
*   [📑 Notion MCP Agent](mcp_ai_agents/notion_mcp_agent) - ターミナルからNotionページと対話
*   [🌍 AI Travel Planner MCP Agent](mcp_ai_agents/ai_travel_planner_mcp_agent_team) - AirbnbとGoogle Mapsのライブデータに基づく旅程
*   [🔀 Multi-MCP Agent Router](mcp_ai_agents/multi_mcp_agent_router/) - それぞれ専用のMCPサーバーに接続された専門エージェント
*   [🔌 OpenAI Remote MCP Tool Bridge](mcp_ai_agents/openai_remote_mcp_bridge/) - OpenAIの関数呼び出しをリモートMCPサーバーに直接接続

### 📀 RAG（検索拡張生成）

*単純なチェーンからエージェント型・複数ソースまでの検索パイプライン。*

*   [🔥 Agentic RAG with Embedding Gemma](rag_tutorials/agentic_rag_embedding_gemma) - EmbeddingGemmaとLlama 3.2による完全ローカルのエージェント型RAG
*   [🧐 Agentic RAG with Reasoning](rag_tutorials/agentic_rag_with_reasoning/) - 検索中のエージェントの段階的な推論を確認
*   [📰 AI Blog Search (RAG)](rag_tutorials/ai_blog_search/) - LangGraphを使ったブログコンテンツのエージェント検索
*   [🔍 Autonomous RAG](rag_tutorials/autonomous_rag/) - GPT-4oがPDFに基づいて回答し、必要に応じてウェブ検索に切り替え
*   [🔄 Contextual AI RAG Agent](rag_tutorials/contextualai_rag_agent/) - データストアから根拠に基づくチャットまで数分で実現するマネージドRAG
*   [🔄 Corrective RAG (CRAG)](rag_tutorials/corrective_rag/) - 回答前に自ら評価して再試行する検索
*   [📎 Typed Agentic RAG with Pydantic AI](rag_tutorials/agentic_typed_rag_pydanticai/) - 正確な引用付きの検証済み回答。根拠が弱い場合は回答を拒否
*   [🐋 Deepseek Local RAG Agent](rag_tutorials/deepseek_local_rag_agent/) - 自分のドキュメントをローカルのDeepSeekで推論
*   [🤔 Gemini Agentic RAG](rag_tutorials/gemini_agentic_rag/) - Gemini Flash Thinkingでクエリを書き換え、ウェブ検索にもフォールバック
*   [👀 Hybrid Search RAG (Cloud)](rag_tutorials/hybrid_search_rag/) - キーワード検索とベクトル検索をClaudeに連携
*   [🔄 Llama 3.1 Local RAG](rag_tutorials/llama3.1_local_rag/) - 完全オフラインであらゆるウェブページとチャット
*   [🖥️ Local Hybrid Search RAG](rag_tutorials/local_hybrid_search_rag/) - すべてを自分のマシンで実行するハイブリッド検索
*   [🧬 Multimodal Agentic RAG](rag_tutorials/multimodal_agentic_rag/) - テキスト、PDF、画像、音声、動画に引用付きで回答
*   [🦙 Local RAG Agent](rag_tutorials/local_rag_agent/) - Llama 3.2とQdrantを使用。APIキー不要
*   [🧩 RAG-as-a-Service](rag_tutorials/rag-as-a-service/) - 50行未満で本番対応RAGサービスを構築
*   [✨ RAG Agent with Cohere](rag_tutorials/rag_agent_cohere/) - Command R7B検索とウェブ検索フォールバック
*   [⛓️ Basic RAG Chain](rag_tutorials/rag_chain/) - 製薬研究に応用した最小限の検索パイプライン
*   [📠 RAG with Database Routing](rag_tutorials/rag_database_routing/) - 質問ごとに適切なデータベースへ自動ルーティング
*   [🖼️ Vision RAG](rag_tutorials/vision_rag/) - Embed-4で画像やPDFページについて質問
*   [🩺 RAG Failure Diagnostics Clinic](rag_tutorials/rag_failure_diagnostics_clinic/) - RAGパイプラインの問題を体系的に特定
*   [🕸️ Knowledge Graph RAG with Citations](rag_tutorials/knowledge_graph_rag_citations/) - 検証可能な出典帰属を備えたマルチホップ回答

### 🔎 AIブラウザーツール

*日常のブラウジングにAIを取り入れる小さなツール。*

*   [🪡 Needle - A New Way to Find](advanced_llm_apps/needle/) - TypeSafe Jev搭載のChrome拡張機能でウェブページを意味で検索し、最も有力な出典文を強調
*   [🌀 Ripple - Change One Thing, Find What Else Needs to Change](advanced_llm_apps/ripple/) - TypeSafe JevとGeminiでGoogleドキュメントの編集時に関連する矛盾と修正案を提示

### 💾 メモリー機能付きLLMアプリ

*セッションをまたいで会話やユーザー状態を記憶するエージェントとチャットボット。*

*   [💾 AI ArXiv Agent with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/ai_arxiv_agent_memory/) - 研究関心を記憶する論文検索
*   [🛩️ AI Travel Agent with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/ai_travel_agent_memory/) - 好みを覚える旅行アシスタント
*   [💬 Llama3 Stateful Chat](advanced_llm_apps/llm_apps_with_memory_tutorials/llama3_stateful_chat/) - Llama 3によるセッション永続型チャット
*   [📝 LLM App with Personalized Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/llm_app_personalized_memory/) - 会話をまたいでコンテキストを保持するチャットボット
*   [🗄️ Local ChatGPT Clone with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/local_chatgpt_with_memory/) - 完全ローカルで、ユーザーごとに個人用メモリー
*   [🧠 Multi-LLM Application with Shared Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/multi_llm_memory/) - 異なるモデルで1つの共有会話メモリー

### 💬 Xとチャット

*あらゆるデータソースをチャットインターフェースに変換。*

*   [💬 Chat with GitHub (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_github/) - あらゆるリポジトリにRAG 30行で回答
*   [📨 Chat with Gmail](advanced_llm_apps/chat_with_X_tutorials/chat_with_gmail/) - 受信トレイに質問
*   [📄 Chat with PDF (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_pdf/) - 定番の実装をPython 30行で
*   [📚 Chat with Research Papers (ArXiv) (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_research_papers/) - GPT-4oと対話しながらarXivを探索
*   [📝 Chat with Substack](advanced_llm_apps/chat_with_X_tutorials/chat_with_substack/) - あらゆるSubstackニュースレターのアーカイブとチャット
*   [📽️ Chat with YouTube Videos](advanced_llm_apps/chat_with_X_tutorials/chat_with_youtube_videos/) - 文字起こしを通じて動画に質問

### 🎯 LLM最適化ツール

*品質を保ちながら、トークン使用量、コンテキストサイズ、APIコストを削減。*

*   [🎯 Toonify Token Optimization](advanced_llm_apps/llm_optimization_tools/toonify_token_optimization/) - TOON形式を使いLLM APIコストを30～60%削減
*   [🧠 Headroom Context Optimization](advanced_llm_apps/llm_optimization_tools/headroom_context_optimization/) - LLM APIコストを50～90%削減

### 🔧 LLMファインチューニング

*オープンソースモデル向けのエンドツーエンドなファインチューニング手順。*

*   [🦥 Gemma 3 Fine-tuning](advanced_llm_apps/llm_finetuning_tutorials/gemma3_finetuning/) - Unslothによる4ビットLoRA。小規模で読みやすい
*   [🦙 Llama 3.2 Fine-tuning](advanced_llm_apps/llm_finetuning_tutorials/llama3.2_finetuning/) - Colabで無料、30行でファインチューニング

### 🧑‍🏫 AIエージェントフレームワーク入門講座

*主要なエージェントフレームワークを深掘りするチュートリアル。*

*   [Google ADK Crash Course](ai_agent_framework_crash_course/google_adk_crash_course/) - スターターエージェント、構造化出力、組み込み・関数・サードパーティ・MCPツール、メモリー、コールバック、プラグイン、マルチエージェントパターン。モデル非依存
*   [OpenAI Agents SDK Crash Course](ai_agent_framework_crash_course/openai_sdk_crash_course/) - スターターエージェント、関数呼び出し、構造化出力、ツール、メモリー、評価、ハンドオフ、スウォーム調整、ルーティングロジック

---

<div align="center">

⭐ **[リポジトリにスターを付ける](https://github.com/Shubhamsaboo/awesome-llm-apps/stargazers)**と、新しいテンプレートの公開通知を受け取れます。

<sub>
<!-- これらのリンクは残してください。翻訳はREADMEに合わせて自動更新されます。 -->
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=de">Deutsch</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=es">Español</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=fr">français</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=ja">日本語</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=ko">한국어</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=pt">Português</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=ru">Русский</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=zh">中文</a>
</sub>

<sub>Apache-2.0 · <a href="LICENSE">LICENSE</a>を参照 · Forkして公開・販売できます。</sub>

</div>
