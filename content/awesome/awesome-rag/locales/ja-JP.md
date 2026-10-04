# 😎 検索拡張生成（RAG）厳選リソース集
[![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Danielskry/Awesome-RAG) [![Awesome-RAG Agent Plugin](https://img.shields.io/badge/Agent_Plugin-Available-blueviolet)](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin)

検索拡張生成（RAG）システムの構築に役立つツール、フレームワーク、手法、学習資料を厳選してまとめています。このリポジトリでは RAG エコシステムを整理し、RAG アプリケーションの調査・構築に役立つ信頼できる情報源、チュートリアル、実装へのリンクを掲載しています。

VS Code、GitHub Copilot CLI、Claude Code 向けの[エージェントプラグイン版](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin)もあります。

## 概要

**検索拡張生成（RAG）**は生成 AI の高度な手法です。生成時に外部の知識ソースから関連するコンテキストを動的に検索して取り込むことで、大規模言語モデル（LLM）を強化します。事前学習済みの知識だけに頼る従来の LLM とは異なり、RAG システムは最新情報、ドメイン固有情報、独自情報にアクセスできるため、精度を大幅に高め、ハルシネーションを減らし、リアルタイムの知識統合を可能にします。

### 主な利点

- **ハルシネーションの低減**: 検索した事実情報に基づいて回答を生成します
- **ドメイン適応**: ファインチューニングなしで LLM が専門知識を扱えます
- **リアルタイム更新**: モデルを再学習せずに最新情報を取り込めます
- **コスト効率**: ドメイン固有タスクではファインチューニングより低コストです
- **透明性**: 生成コンテンツの出典を提示します
- **プライバシーとセキュリティ**: 機密データをプライベートなナレッジベース内に保持します

## 目次

- [ℹ️ RAG の概要](#ℹ%EF%B8%8F-general-information-on-rag)
- [🏗️ アーキテクチャパターン](#%EF%B8%8F-architecture-patterns)
- [🎯 高度なアプローチ](#-advanced-approaches)
- [🧰 RAG を支援するフレームワーク](#-frameworks-that-facilitate-rag)
- [🐍 RAG の Python エコシステム](#-python-ecosystem-for-rag)
- [🛠️ 手法](#-techniques)
- [📊 指標と評価](#-metrics--evaluation)
- [💾 データベース](#-databases)
- [🔌 プラットフォーム固有の RAG 実装](#-platform-specific-rag-implementations)
- [🚀 本番環境での考慮事項](#-production-considerations)
- [💡 ベストプラクティス](#-best-practices)

## ℹ️ RAG の概要

RAG は、知識のカットオフが固定され、外部情報にアクセスできないという LLM の根本的な制約に対処します。従来の RAG 実装では、検索パイプラインを使って知識ベースから関連文書を取得し、LLM のプロンプトにコンテキストを補います。たとえば特定の家の改修材料について尋ねる場合、LLM は一般的な改修知識を持っていても、その物件の詳細は知りません。RAG システムなら、設計図、材料仕様、地域の建築基準などの関連文書を取得し、正確で文脈に沿った回答を提供できます。

### 実装リソース

#### Python チュートリアルと例

- Complete basic [RAG implementation in Python](https://github.com/Danielskry/LangChain-Chroma-RAG-demo-2024): LangChain と Chroma を使った、フルスタックの RAG 実装例
- [LangChain RAG Tutorial](https://python.langchain.com/docs/use_cases/question_answering/): RAG アプリケーションの構築方法を包括的に解説するガイド
- [LlamaIndex RAG Tutorial](https://docs.llamaindex.ai/en/stable/getting_started/starter_example/): LlamaIndex を使った RAG の入門
- [Haystack RAG Pipeline](https://docs.haystack.deepset.ai/docs/retrieval-augmented-generation): Haystack による RAG パイプラインの構築
- [RAG Techniques](https://github.com/NirDiamant/RAG_Techniques): 実行可能な Jupyter ノートブックとして提供される、高度な検索拡張生成手法の包括的なオープンソース集です。
- [RAG Interview System](https://github.com/ather-techie/rag-interview-system): 厳選された 418 組の Q&A（基礎から応用まで）を収録し、29 種類の RAG アーキテクチャパターンを扱う、RAG ベースの面接準備システムです。

- [Search with Jev and Milvus](https://github.com/milvus-io/bootcamp/tree/master/bootcamp/RAG/search_with_jev): Gemini の埋め込み、Milvus による検索、Jev による判定を組み合わせ、再順位付け、コンテキストのフィルタリング、検索の打ち切り、ルーティング、キャッシュの再利用、キュレーション、ガードレール、評価を行う、実行可能な 9 本の Python ノートブックです。

#### 本番運用とベストプラクティス

- [Production RAG patterns and best practices](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/): 本番環境向けの RAG 最適化戦略
- [LangChain Production Guide](https://python.langchain.com/docs/production/): LangChain アプリケーションを本番環境へデプロイする方法
- [Python Async Best Practices](https://docs.python.org/3/library/asyncio-dev.html): AI アプリケーション向けの効率的な非同期 Python コードの記述方法

## 🏗️ アーキテクチャパターン

RAG システムは要件に応じて、さまざまなパターンで設計できます。

- **素朴な RAG**: 最適化を行わない基本的な検索後に生成するパイプライン
- **高度な RAG**: クエリの書き換え、再順位付け、コンテキスト圧縮を取り入れます
- **モジュール型 RAG**: 検索、順位付け、生成の各コンポーネントを組み合わせられます
- **エージェント型 RAG**: LLM 主導のエージェントが検索方法を動的に判断します
- **Self-RAG**: モデルが検索品質を自己評価し、戦略を調整します
- **Graph RAG**: ナレッジグラフを活用し、構造化された情報検索を行います
- **推論ベースの RAG**: LLM による複数段階の推論を使って、検索の計画、探索、実行を行います

## 🎯 高度なアプローチ

RAG の実装は、単純な文書検索から、反復的なフィードバックループ、マルチエージェントシステム、ドメイン固有の拡張を組み込んだ高度な手法まで多岐にわたります。最新のアプローチには次のものがあります。

- [Vision-RAG](https://www.youtube.com/watch?v=npkp4mSweEg): ページ全体を画像として埋め込み、視覚モデルが text-RAG のようにテキストを解析せず直接推論できるようにします。
- [Cache-Augmented Generation (CAG)](https://medium.com/@ronantech/cache-augmented-generation-cag-in-llms-a-step-by-step-tutorial-6ac35d415eec): 関連文書をモデルのコンテキストに事前ロードし、推論状態（Key-Value（KV）キャッシュ）を保存します。
- [Agentic RAG](https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_agentic_rag/): 検索エージェントとも呼ばれ、検索プロセスに関する判断を行えます。
- [A-RAG](https://github.com/Ayanami0730/arag): 階層型検索インターフェース（キーワード、セマンティック、チャンク単位）を備えた Agentic RAG。LLM エージェントが複数の粒度で自律的に検索・取得できます。 ([Paper](https://arxiv.org/abs/2602.03442))
- [Corrective RAG](https://arxiv.org/pdf/2401.15884.pdf) (CRAG): 検索した情報を LLM の応答に組み込む前に修正・改善する手法です。
- [Retrieval-Augmented Fine-Tuning](https://techcommunity.microsoft.com/t5/ai-ai-platform-blog/raft-a-new-way-to-teach-llms-to-be-better-at-rag/ba-p/4084674) (RAFT): 検索・生成タスクの強化に特化して LLM をファインチューニングする手法です。
- [Self Reflective RAG](https://selfrag.github.io/): モデルの性能フィードバックに基づいて検索戦略を動的に調整するモデルです。
- [RAG Fusion](https://arxiv.org/abs/2402.03367): 複数の検索手法を組み合わせ、コンテキスト統合を改善する技術です。
- [Temporal Augmented Retrieval](https://adam-rida.medium.com/temporal-augmented-retrieval-tar-dynamic-rag-ad737506dfcc) (TAR): 検索時に時間依存のデータを考慮します。
- [Plan-then-RAG](https://arxiv.org/abs/2406.12430) (PlanRAG): 複雑なタスクで RAG を実行する前に計画段階を設ける戦略です。
- [GraphRAG](https://github.com/microsoft/graphrag): 知識グラフを使ってコンテキスト統合と推論を強化する構造化手法です。
- [Code-Graph-RAG](https://github.com/vitali87/code-graph-rag): 多言語コードベース分析向けのナレッジグラフ RAG システムです。
- [FLARE](https://medium.com/etoai/better-rag-with-active-retrieval-augmented-generation-flare-3b66646e2a9f) - アクティブな検索拡張生成を取り入れて応答品質を高める手法です。
- [GNN-RAG](https://github.com/cmavro/GNN-RAG): 大規模言語モデルの推論向けグラフニューラル検索です。
- [Multimodal RAG](https://developer.nvidia.com/blog/an-easy-introduction-to-multimodal-retrieval-augmented-generation/): RAG をテキスト、画像、音声など複数のモダリティに拡張します。
- [VideoRAG](https://arxiv.org/abs/2501.05874): 大規模動画言語モデル（LVLM）を使って RAG を動画に拡張し、視覚情報とテキスト情報を検索・統合してマルチモーダル生成を行います。
- [REFRAG](https://arxiv.org/pdf/2509.01092): 生成前に検索コンテキストを埋め込みへ圧縮して RAG のデコードを最適化し、出力品質を維持しながら遅延を低減します。
- [InstructRAG](https://github.com/weizhepei/InstructRAG): モデル自身が生成した推論根拠を使った指示チューニングにより、RAG システムの検索・生成品質を高めます。
- [PageIndex](https://github.com/VectifyAI/PageIndex): ベクトルを使わない推論ベースの RAG フレームワークです。階層型ドキュメントツリーを構築し、埋め込みやベクトル類似度ではなく、LLM が導くツリー検索で情報を取得します。チャンク分割やベクトルデータベースを不要にし、複雑な専門文書にも説明可能で文脈を考慮した検索を提供します。

## 🧰 RAG を支援するフレームワーク

- [Haystack](https://github.com/deepset-ai/haystack): カスタマイズ可能で本番利用に対応した LLM アプリケーションを構築するための、LLM オーケストレーションフレームワークです。
- [LangChain](https://python.langchain.com/docs/modules/data_connection/): LLM を扱うための汎用フレームワークです。
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel): 生成 AI アプリケーション開発向けに Microsoft が提供する SDK です。
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/): 独自のデータソースを LLM に接続するフレームワークです。
- [Dify](https://github.com/langgenius/dify): オープンソースの LLM アプリ開発プラットフォームです。
- [Verba](https://github.com/weaviate/Verba): すぐに使えるオープンソースの RAG アプリケーションです。
- [Mastra](https://github.com/mastra-ai/mastra): AI アプリケーションを構築するための TypeScript フレームワークです。
- [Letta](https://github.com/letta-ai/letta): 状態を保持する LLM アプリケーションを構築するオープンソースのフレームワークです。
- [Flowise](https://github.com/FlowiseAI/Flowise): ドラッグ＆ドロップ UI でカスタム LLM フローを構築できます。
- [Kreuzberg](https://github.com/kreuzberg-dev/kreuzberg): Rust コアと Python、TypeScript、Go のバインディングを備えた多言語対応のドキュメント処理ライブラリです。62 種類以上の文書形式からテキスト、表、メタデータを抽出し、RAG の取り込みパイプラインを支援します。
- [Swiftide](https://github.com/bosun-ai/swiftide): モジュール型でストリーミング対応の LLM アプリケーションを構築する Rust フレームワークです。
- [CocoIndex](https://github.com/cocoindex-io/cocoindex): RAG などの AI 向けにデータをインデックス化し、リアルタイムの増分更新も行う ETL フレームワークです。
- [Pathway](https://github.com/pathwaycom/pathway/): Rust ランタイムを備え、300 以上のデータソースに対応する、高性能なオープンソース Python ETL フレームワークです。
- [Pathway AI Pipelines](https://github.com/pathwaycom/llm-app/): 多様なデータソースにわたるリアルタイムのインデックス作成、検索、変更追跡に対応した、本番利用可能な RAG フレームワークです。
- [LiteLLM](https://docs.litellm.ai/): ログ記録、監視、コスト追跡機能を備え、複数の LLM プロバイダー（OpenAI、Anthropic、Hugging Face、Replicate）を統一的に扱うインターフェースです。
- [Agentset](https://github.com/agentset-ai/agentset): エージェント型推論、ハイブリッド検索、マルチモーダル対応を組み込んだ、オープンソースの本番向け RAG プラットフォームです。
- [OpenAgent](https://github.com/the-open-agent/openagent): LLM、RAG ナレッジベース、自律型エージェントループを組み合わせたオープンソースの個人向け AI アシスタントプラットフォームです。ブラウザー操作、シェル実行、MCP ツールにも対応します。
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research): Web、arXiv、PubMed、非公開文書など複数の情報源から検索でき、20 種類以上の調査戦略を備えた、ローカル優先の深層エージェント型調査フレームワークです。

## 🐍 RAG の Python エコシステム

Python は現在、RAG エコシステムが最も成熟しており、幅広くサポートしています。対象は
LLM、埋め込み、ベクトルデータベース、評価、本番運用ツールです。

詳細は完全ガイドを参照してください：[RAG の Python エコシステム](docs/python-ecosystem.md)

## 🛠️ 手法

### データのクリーニング

- [Data cleaning techniques](https://medium.com/intel-tech/four-data-cleaning-techniques-to-improve-large-language-model-llm-performance-77bee9003625): 入力データを整え、モデル性能を向上させる前処理手順です。

### プロンプト設計

- **戦略**
  - [Tagging and Labeling](https://python.langchain.com/v0.1/docs/use_cases/tagging/): 検索データに意味的なタグやラベルを付け、関連性を高めます。
  - [Chain of Thought (CoT)](https://www.promptingguide.ai/techniques/cot): 回答前にモデルが段階的に考えるよう促します。
  - [Chain of Verification (CoVe)](https://sourajit16-02-93.medium.com/chain-of-verification-cove-understanding-implementation-e7338c7f4cb5): 推論の各段階を検証し、正確性を確かめるようモデルに促します。
  - [Self-Consistency](https://www.promptingguide.ai/techniques/consistency): 複数の推論経路を生成し、最も一貫した回答を選びます。
  - [Zero-Shot Prompting](https://www.promptingguide.ai/techniques/zeroshot): 例を与えずにモデルを導くプロンプトを設計します。
  - [Few-Shot Prompting](https://python.langchain.com/docs/how_to/few_shot_examples/): 期待する回答形式を示す少数の例をプロンプトに含めます。
  - [Reason & Act (ReAct) prompting](https://www.promptingguide.ai/techniques/react): 推論（例：CoT）と行動（例：ツール呼び出し）を組み合わせます。
- **キャッシュ**
  - [Prompt Caching](https://medium.com/@1kg/prompt-cache-what-is-prompt-caching-a-comprehensive-guide-e6cbae48e6a3): 事前計算したアテンション状態を保存・再利用して LLM を最適化します。
- **構造化**
  -  [Token-Oriented Object Notation](https://github.com/toon-format/toon): LLM プロンプト向けのコンパクトで決定論的な JSON 形式です。

### チャンク分割

チャンク分割戦略は RAG システム設計で最も重要な判断の一つであり、検索精度とコンテキスト品質に直接影響します。最適な方法は文書の種類、ドメインの特性、クエリの傾向によって異なります。

- **[Fixed-Size Chunking](https://medium.com/@anuragmishra_27746/five-levels-of-chunking-strategies-in-rag-notes-from-gregs-video-7b735895694d)**
  - **用途**: 構造が単純で、文書構造があまり重要でない場合
  - **特徴**: テキストを一定サイズ（通常 256～512 トークン）に分割し、10～20% の重複を設定します
  - **利点**: 実装が簡単で、チャンクサイズを予測しやすく、処理も効率的です
  - **欠点**: 文や段落が分断され、文書構造や意味単位が失われることがあります
  - **実装**: [CharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/character_text_splitter/) (LangChain), [SentenceSplitter](https://docs.llamaindex.ai/en/stable/api_reference/node_parsers/sentence_splitter/) (LlamaIndex)

- **[Recursive Chunking](https://medium.com/@AbhiramiVS/chunking-methods-all-to-know-about-it-65c10aa7b24e)**
  - **用途**: 階層構造を持つ文書（Markdown、HTML、コード）
  - **特徴**: 区切り文字（段落 → 文 → 単語）で再帰的に分割し、目標サイズまで続けます
  - **利点**: 自然な境界と文書階層を保ち、意味の一貫性を高めます
  - **欠点**: より複雑でチャンクサイズにばらつきがあり、区切り文字の設定にも注意が必要です
  - **実装**: [RecursiveCharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/recursive_text_splitter/) (LangChain)

- **[Document-Based Chunking](https://medium.com/@david.richards.tech/document-chunking-for-rag-ai-applications-04363d48fbf7)**
  - **用途**: 明確なセクションを持つ構造化文書（Markdown の見出し、PDF のセクション、データベースレコード）
  - **特徴**: 文書のメタデータ、書式上の手掛かり、構造要素に基づいて区分します
  - **利点**: 文書構造とコンテキストを保ち、メタデータを活用した検索を可能にします
  - **欠点**: 構造化された入力が必要で、非常に大きいチャンクや小さいチャンクができる場合があります
  - **実装**: [MarkdownHeaderTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/markdown_header_metadata/) (LangChain)
  - **マルチモーダル**: [OpenCLIP](https://github.com/mlfoundations/open_clip) などのモデルで画像とテキストを扱います

- **[Semantic Chunking](https://www.youtube.com/watch?v=8OJC21T2SL4&t=1933s)**
  - **用途**: 意味の一貫性が重要な文書（物語、技術文書）
  - **特徴**: 埋め込みの類似度を用いて自然な意味の境界を特定します
  - **利点**: 意味単位を保ち、内容に適応して、検索の関連性を高めます
  - **欠点**: 計算コストが高く、埋め込みモデルが必要で、チャンクサイズを予測しにくくなります
  - **最適な用途**: コンテキストの保持が最優先となる高品質な検索

- **[Agentic Chunking](https://youtu.be/8OJC21T2SL4?si=8VnYaGUaBmtZhCsg&t=2882)**
  - **用途**: 分割方法を知的に判断する必要がある複雑な文書
  - **特徴**: LLM で内容を分析し、最適なチャンク境界を決定します
  - **利点**: 適応性が高く、コンテキストを理解し、ドメイン知識を適用できます
  - **欠点**: コストが高く、処理が遅く、LLM API へのアクセスが必要です
  - **最適な用途**: 標準的なチャンク分割では対応できない専門分野

- **[Adaptive Chunking](https://github.com/ekimetrics/adaptive-chunking)**
  - **用途**: 文書ごとに適した分割戦略が異なる混在コレクション
  - **特徴**: 複数のチャンク分割方法を内在的な指標で評価し、文書ごとに最適な方法を選びます
  - **利点**: 一律の分割より柔軟で、構造と意味の一貫性を保ち、独自の分割器や指標にも対応します
  - **欠点**: 固定サイズや再帰的な分割に比べ、評価の手間と実装の複雑さが増します

**チャンク分割のベストプラクティス：**
- **重複の設定**: 境界をまたいでコンテキストを維持するため、10～20% 重複させます
- **サイズの最適化**: チャンクサイズのバランスを取ります（大きいほどコンテキストが増え、小さいほど精度が上がります）
- **メタデータの保持**: 文書構造、見出し、書式をチャンクのメタデータに保持します
- **複数粒度の活用**: 検索には小さなチャンク、コンテキストには大きなチャンクを使う階層型の方法を検討します

### 埋め込み

埋め込みは RAG システムのセマンティック検索の基盤です。埋め込みモデルの選択は検索品質に大きく影響します。

- **モデルの選択**
  - **[MTEB Leaderboard](https://huggingface.co/spaces/mteb/leaderboard)**: 複数のタスクと言語にわたって埋め込みモデルを評価する包括的なベンチマークです。用途（検索、クラスタリング、分類）に関係するタスクで優れたモデルを選びます。
  - **モデルの特性**: 以下の項目を基準に評価します。
    - **次元**: 高次元（768～1024）は一般に品質が高い一方、保存容量と計算コストが増加します
    - **コンテキスト長**: 文書のチャンクサイズにモデルが対応していることを確認します
    - **多言語対応**: 国際的な用途では必要です
    - **ドメイン特化**: 汎用モデルか、科学・法律・医療などの特定分野に特化したモデルかを確認します
  
- **カスタム埋め込み**
  - **ファインチューニング**: 対照学習、トリプレット損失、教師ありファインチューニングを用いて、事前学習済みモデルを対象ドメインに適応させます
  - **スクラッチからの学習**: 十分なラベル付きデータがある高度に専門化された分野に適しています
  - **マルチモーダル埋め込み**: テキスト、画像、音声の理解が必要な用途向けです（例：CLIP、ImageBind）
  - **アンサンブル手法**: 複数の埋め込みモデルを組み合わせて堅牢性を高めます

### 検索

- **検索方法**
  - [Vector Store Flat Index](https://weaviate.io/developers/academy/py/vector_index/flat)
    - シンプルで効率的な検索方法です。
    - コンテンツをベクトル化し、フラットなベクトルとして保存します。
  - [Hierarchical Index Retrieval](https://pixion.co/blog/rag-strategies-hierarchical-index-retrieval)
    - データを階層に沿って段階的に絞り込みます。
    - 階層の順序に従って検索を実行します。
  - [Hypothetical Questions](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - データベース内のチャンクとクエリの類似度を高めるために使います（HyDE も同様です）。
    - LLM を使って各テキストチャンクに対する具体的な質問を生成します。
    - 生成した質問をベクトル埋め込みに変換します。
    - 検索時には質問ベクトルのインデックスとクエリを照合します。
  - [Hypothetical Document Embeddings (HyDE)](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - データベース内のチャンクとクエリの類似度を高めるために使います（仮説質問も同様です）。
    - LLM を使ってクエリに基づく仮説的な回答を生成します。
    - その回答をベクトル埋め込みに変換します。
    - クエリのベクトルと仮説回答のベクトルを比較します。
  - [Small to Big Retrieval](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/use-cases/retrieval-augmented-generation/small_to_big_rag/small_to_big_rag.ipynb)
    - 検索には小さなチャンク、コンテキストには大きなチャンクを使って検索を改善します。
    - 小さな子チャンクは、より大きな親チャンクを参照します。
  - [Contextual Retrieval](https://www.anthropic.com/engineering/contextual-retrieval)
    - チャンク分割で失われがちな文書コンテキストを保ち、RAG の検索精度を高めます。
    - 埋め込み作成とインデックス登録の前に、各テキストチャンクへモデル生成の短い要約を加え、Contextual Embeddings と Contextual BM25 を作成します。
    - この組み合わせにより、意味的・語彙的な照合が改善し、再順位付けと併用することで検索失敗率を下げます。
  - [Adaptive Retrieval](https://arxiv.org/abs/2403.14403)
    - 生成中に、いつ、どの程度の情報を検索するかを動的に判断します。
  - [Query Reformulation and Expansion](https://haystack.deepset.ai/cookbook/query-expansion)
    - 再現率を高めるため、検索前にクエリを自動で書き換えたり拡張したりします。
    - 長いクエリや曖昧なユーザークエリに有効です。
- **[Re-ranking](https://developer.nvidia.com/blog/enhancing-rag-pipelines-with-re-ranking/)**: 最初に取得した文書を並べ替え、クエリに意味的に最も関連するものを優先することで、RAG パイプラインの検索結果を改善します。

### 判断・意思決定モデル

判断モデルは、検索内容、クエリ、生成応答、パイプラインの状態に対して範囲を限定した意味的判断を行います。生成型 LLM とは異なり、RAG パイプライン内の再順位付け、フィルタリング、ルーティング、検証、評価などに使うプログラム可能な意思決定ポイントとして利用できます。

- **[Jev](https://typesafe.ai/)**: TypeSafe AI の System One は、高速で型付きの判断を行うモデルです。RAG では、再順位付け、フィルタリング、ルーティング、検証、ガードレール、評価に利用できます。
- **[AnyJev](https://github.com/nokia-applied-research/AnyJev)**: オープンな LLM を Jev 形式の型付き判断モデルに変換します。ラベル数ゼロでのバイアス補正に加え、しきい値を使う判断の任意のキャリブレーションにも対応します。

### 応答の品質と安全性

本番 RAG システムでは、高品質で安全かつ信頼できる応答を確保することが不可欠です。

- **ハルシネーションの抑制**
  - **[Detection Techniques](https://machinelearningmastery.com/rag-hallucination-detection-techniques/)**: モデルが根拠のない情報を生成した場合に特定する手法を実装します
  - **根拠の検証**: 生成された主張を検索済みのコンテキストと照合します
  - **信頼度のスコアリング**: 情報源の品質に基づき、生成応答に信頼度スコアを割り当てます
  - **出典の明示**: すべての事実に関する主張に引用を求めます
  - **検索品質**: 検索精度を高めてハルシネーションのリスクを減らします

- **ガードレールと安全性**
  - **[Implementation Guide](https://developer.ibm.com/tutorials/awb-how-to-implement-llm-guardrails-for-rag-applications/)**: 安全対策を実装するための包括的な方法を解説します
  - **コンテンツモデレーション**: 入力・出力段階で有害、偏向、不適切なコンテンツを除外します
  - **バイアスの緩和**: 検索したコンテンツや生成応答に含まれるバイアスを検出・軽減します
  - **ファクトチェック**: 権威ある情報源やナレッジベースと主張を照合します
  - **有害性の検出**: 分類器を使って有害なコンテンツを特定し、除外します

- **プロンプトインジェクションの防止**
  - **[Security Guide](https://hiddenlayer.com/innovation-hub/prompt-injection-attacks-on-llms/)**: プロンプトインジェクション攻撃の理解と防止に役立ちます
  - **入力の検証**: 許可リスト、長さ制限、パターン照合を用いて、すべての外部入力を厳格に検証・無害化します
  - **コンテンツの分離**: 明確な区切り、テンプレートシステム、役割ベースのプロンプトを使い、指示とユーザーデータを分離します
  - **出力の監視**: 異常、予期しない動作、セキュリティ違反がないか、応答を継続的に監視します
  - **レート制限**: 組織的な攻撃を防ぐため、レート制限と不正利用の検出を実装します
  - **サンドボックス化**: LLM の実行環境を隔離して、インジェクションが成功した場合の被害を抑えます

## 📊 指標と評価

### 埋め込みの類似度指標

これらの指標は埋め込み間の類似度を測定します。RAG システムが外部文書やデータソースをどれだけ効果的に検索・統合できるかを評価するうえで重要です。適切な類似度指標を選べば、システムの性能と精度を最適化できます。特定分野の細かな違いを捉えて関連性を高めるために、用途に合わせた指標を開発することもできます。

- **[Cosine Similarity](https://en.wikipedia.org/wiki/Cosine_similarity)**

  - 多次元空間における 2 つのベクトル間の角度の余弦を測定します。
  - ベクトルの向きが意味情報を表すテキスト埋め込みの比較に非常に有効です。
  - RAG システムで、クエリ埋め込みと文書埋め込みの意味的類似度を測るためによく使われます。

- **[Dot Product](https://en.wikipedia.org/wiki/Dot_product)**

  - 2 つの数列の対応する要素同士の積を合計します。
  - ベクトルが正規化されている場合、コサイン類似度と等価です。
  - 単純で効率的であり、大規模な計算ではハードウェアアクセラレーションとともによく使われます。

- **[Euclidean Distance](https://en.wikipedia.org/wiki/Euclidean_distance)**

  - ユークリッド空間における 2 点間の直線距離を計算します。
  - 埋め込みにも使えますが、「[次元の呪い](https://stats.stackexchange.com/questions/99171/why-is-euclidean-distance-not-a-good-metric-in-high-dimensions)」により、高次元空間では効果が低下する場合があります。
  - 次元削減後に、K-means などのクラスタリングアルゴリズムでよく使われます。

- **[Jaccard Similarity](https://en.wikipedia.org/wiki/Jaccard_index)**
  - 2 つの有限集合の共通部分の大きさを和集合の大きさで割り、類似度を測定します。
  - Bag-of-Words モデルや n-gram の比較など、トークン集合の比較に有効です。
  - LLM が生成する連続値の埋め込みには、あまり適しません。

> **注:** 高次元埋め込みの類似度測定には、一般にコサイン類似度と内積が最も効果的とされています。

### 応答評価指標

RAG ソリューションの応答評価では、多様な指標を用いて言語モデルの出力品質を評価します。ここでは、そのための体系的な方法を紹介します。

- **自動ベンチマーク**

  - **[BLEU](https://en.wikipedia.org/wiki/BLEU):** 機械生成文と参照文の n-gram の重なりを評価し、適合率の目安を示します。
  - **[ROUGE](<https://en.wikipedia.org/wiki/ROUGE_(metric)>):** 参照文と n-gram、skip-bigram、最長共通部分列を比較して再現率を測定します。
  - **[METEOR](https://en.wikipedia.org/wiki/METEOR):** 機械翻訳向けに、完全一致、語幹、同義語、アラインメントを重視します。

- **人手評価**
  応答を次の観点で人が評価します。
  - **関連性**: ユーザーのクエリとの一致度。
  - **流暢さ**: 文法と文体の品質。
  - **事実の正確さ**: 権威ある情報源に照らして主張を検証します。
  - **一貫性**: 応答内の論理的な整合性。
  
  評価方法には次のものがあります。
  - **[Annotation queues](https://docs.langchain.com/langsmith/annotation-queues):** 人手評価者が特定の実行結果にフィードバックを付与するための、効率的で対象を絞った画面を提供します。

- **モデル評価**
  事前学習済みの評価器を使い、多様な基準に照らして出力を評価します。

  - **[TuringBench](https://turingbench.ist.psu.edu/):** 言語ベンチマーク全般にわたる包括的な評価を提供します。
  - **[Hugging Face Evaluate](https://huggingface.co/docs/evaluate/en/index):** 人間の選好との整合性を算出します。

- **評価の主な観点**
  - **根拠性**: 応答が提示されたコンテキストのみに基づいているかを評価します。根拠性が低い場合、ハルシネーションや無関係な情報に依存している可能性があります。
  - **網羅性**: クエリのすべての側面に回答しているかを測定します。
  - **方法**: AI 支援による検索スコアリングや、プロンプトを使った意図の検証。
  - **活用度**: 検索したデータが応答にどの程度寄与したかを評価します。
  - **分析**: 検索したチャンクが応答に含まれているかを LLM で確認します。

#### ツール

ユーザーフィードバックの追跡、クエリのやり取りの記録、複数の評価指標の経時比較など、RAG システムの性能評価に役立つツールです。

- **[LangFuse](https://github.com/langfuse/langfuse)**: LLM 指標の追跡、可観測性、プロンプト管理を行うオープンソースツールです。
- **[Opik](https://github.com/comet-ml/opik)**: LLM の可観測性、評価、プロンプト最適化のためのオープンソースプラットフォームです。
- **[Ragas](https://docs.ragas.io/en/stable/)**: RAG パイプラインの評価を支援するフレームワークです。
- **[WFGY Problem Map](https://github.com/onestardao/WFGY/tree/main/ProblemMap)**: RAG と LLM の障害を診断するための 16 モードのチェックリストです。
- **[LangSmith](https://docs.smith.langchain.com/)**: 本番品質の LLM アプリケーションを構築し、アプリケーションを詳しく監視・評価できるプラットフォームです。
- **[Hugging Face Evaluate](https://github.com/huggingface/evaluate)**: BLEU や ROUGE などの指標を計算し、テキスト品質を評価するツールです。
- **[Weights & Biases](https://wandb.ai/wandb-japan/rag-hands-on/reports/Step-for-developing-and-evaluating-RAG-application-with-W-B--Vmlldzo1NzU4OTAx)**: 実験を追跡し、指標を記録して、性能を可視化します。

## 💾 データベース

ベクトルデータベースは RAG システムの重要な構成要素であり、埋め込みの効率的な保存と類似検索を実現します。適切なデータベースは、規模、レイテンシ要件、デプロイ形態（クラウドまたはオンプレミス）、必要な機能（ハイブリッド検索やフィルタリングなど）を考慮して選びます。以下に RAG アプリケーションに適したデータベースを示します。

### ベンチマーク

- [Picking a vector database](https://benchmark.vectorview.ai/vectordbs.html)

### 分散データ処理・サービングエンジン：

- [Apache Cassandra](https://cassandra.apache.org/doc/latest/cassandra/vector-search/concepts.html): 分散型 NoSQL データベース管理システムです。
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-vector-search): ベクトル検索を統合した、グローバル分散型のマルチモデルデータベースサービスです。
- [Vespa](https://vespa.ai/): リアルタイム用途向けに設計された、オープンソースのビッグデータ処理・サービングエンジンです。

### ベクトル機能を備えた検索エンジン：

- [Elasticsearch](https://www.elastic.co/elasticsearch): 従来型の検索機能に加え、ベクトル検索機能も提供します。
- [OpenSearch](https://github.com/opensearch-project/OpenSearch): Elasticsearch からフォークされた、分散型の検索・分析エンジンです。

### ベクトルデータベース：

- [Chroma DB](https://github.com/chroma-core/chroma): AI ネイティブなオープンソースの埋め込みデータベースです。
- [Milvus](https://github.com/milvus-io/milvus): AI 活用アプリケーション向けのオープンソースベクトルデータベースです。
- [Pinecone](https://www.pinecone.io/): 機械学習ワークフロー向けに最適化されたサーバーレスのベクトルデータベースです。
- [Oracle AI Vector Search](https://www.oracle.com/database/ai-vector-search/#retrieval-augmented-generation): Oracle Database にベクトル検索機能を統合し、ベクトル埋め込みに基づく意味検索を実現します。

### リレーショナルデータベース拡張：

- [Pgvector](https://github.com/pgvector/pgvector): PostgreSQL でベクトル類似検索を行うためのオープンソース拡張です。
- [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s): BM25 系の語彙検索を行う PostgreSQL 拡張で、キーワード検索やハイブリッド検索のパイプラインに有用です。

### その他のデータベースシステム：

- [Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-database): ベクトル検索を統合した、グローバル分散型のマルチモデルデータベースサービスです。
- [Couchbase](https://www.couchbase.com/products/vector-search/): 分散型の NoSQL クラウドデータベースです。
- [Lantern](https://lantern.dev/): プライバシーに配慮した個人向け検索エンジンです。
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/module_guides/storing/vector_stores/): 迅速な実験に使えるシンプルなインメモリベクトルストアを提供します。
- [Neo4j](https://neo4j.com/docs/cypher-manual/current/indexes/semantic-indexes/vector-indexes/): グラフデータベース管理システムです。
- [Qdrant](https://github.com/neo4j/neo4j): 類似検索向けに設計されたオープンソースのベクトルデータベースです。
- [Redis Stack](https://redis.io/docs/latest/develop/interact/search-and-query/): データベース、キャッシュ、メッセージブローカーとして使われるインメモリデータ構造ストアです。
- [SurrealDB](https://github.com/surrealdb/surrealdb): 時系列データ向けに最適化された、スケーラブルなマルチモデルデータベースです。
- [Weaviate](https://github.com/weaviate/weaviate): オープンソースのクラウドネイティブなベクトル検索エンジンです。

### ベクトル検索ライブラリとツール：

- [FAISS](https://github.com/facebookresearch/faiss): 密なベクトルの類似検索とクラスタリングを効率よく行うライブラリです。大規模データセットに対応し、最近傍を高速に検索できるよう最適化されています。

## 🚀 本番環境での考慮事項

本番品質の RAG システムを構築するには、検索と生成の中核パイプラインに加えて、いくつかの重要事項に対処する必要があります。

### スケーラビリティとパフォーマンス

- **インデックス作成スループット**: 増分更新を含む大量の文書取り込みに対応できるパイプラインを設計します
- **クエリ遅延**: 効率的なインデックス（HNSW、IVF）、キャッシュ戦略、並列処理によって検索速度を最適化します
- **同時リクエスト**: 高トラフィックに備え、コネクションプーリング、リクエストキューイング、負荷分散を実装します
- **リソース管理**: GPU/CPU 使用率、メモリ消費量、データベース接続プールを監視します

### 信頼性と監視

- **可観測性**: ログ、トレース、指標（遅延、スループット、エラー率）を包括的に収集します
- **ヘルスチェック**: 埋め込みサービスの可用性、ベクトルデータベースへの接続、LLM API の状態を監視します
- **エラー処理**: 再試行、サーキットブレーカー、適切な縮退運転の戦略を実装します
- **A/B テスト**: 異なる検索戦略、チャンク分割方法、プロンプトテンプレートを比較します

### データ管理

- **増分更新**: 全件の再インデックスをせずに、リアルタイムまたはそれに近い頻度で文書をインデックス化できるようにします
- **バージョン管理**: 文書、埋め込みモデル、プロンプトテンプレートの各バージョンを追跡します
- **データ品質**: 埋め込みの破損、メタデータの欠落、古いコンテンツを検出する検証パイプラインを実装します
- **バックアップと復旧**: ベクトルインデックスとメタデータストアを定期的にバックアップします

### セキュリティとコンプライアンス

- **アクセス制御**: 認証、認可、監査ログを実装します
- **データプライバシー**: 保存時と転送時にデータを暗号化し、データの保存場所に関する要件に対応します
- **コンテンツフィルタリング**: コンテンツモデレーション、個人情報（PII）の検出、コンプライアンス確認を適用します
- **レート制限**: 不正利用を防止し、リソースを公平に割り当てます

### コスト最適化

- **埋め込みのキャッシュ**: 頻繁にアクセスされる埋め込みをキャッシュして API コストを削減します
- **選択的検索**: クエリのルーティングを使って不要な検索処理を避けます
- **モデルの選択**: 埋め込みモデルと LLM の選定では、コストと性能のバランスを取ります
- **リソースの適正化**: 実際の利用状況に基づいてインフラを最適化します

## 🔌 プラットフォーム固有の RAG 実装

プラットフォーム固有の詳しい実装ガイドは、次のドキュメントを参照してください。

- [Supabase Integration Guide](docs/supabase-integration.md): Supabase、pgvector、Edge Functions を使った RAG システムの構築

## 💡 ベストプラクティス

### チャンク分割戦略

- **ドメインに応じたチャンク分割**: コンテキストをよりよく保持するには、固定サイズより意味または文書構造に基づく分割を使います
- **重複の管理**: 境界をまたいでコンテキストを維持するため、適切に 10～20% 重複させます
- **メタデータの保持**: 文書構造、見出し、書式の手掛かりをチャンクのメタデータに保持します
- **複数粒度の活用**: 検索には小さなチャンク、コンテキストには大きなチャンクを使う階層型の分割を検討します

### 埋め込みの選択

- **モデルの評価**: 適切なモデルの選定には、MTEB リーダーボードとドメイン固有ベンチマークを使います
- **次元の最適化**: 埋め込み次元のバランスを取ります（高いほど品質が向上し、低いほど検索が高速になります）
- **ドメインへのファインチューニング**: 可能であれば、ドメイン固有データで埋め込みをファインチューニングします
- **一貫性**: インデックス作成とクエリ処理で同じ埋め込みモデルを使います

### 検索の最適化

- **ハイブリッド検索**: 意味検索（ベクトル）と語彙検索（BM25/キーワード）を組み合わせ、再現率を高めます
- **再順位付け**: Cross-Encoder や学習型ランキングモデルを適用して適合率を高めます
- **クエリの理解**: クエリ分類、意図検出、クエリ拡張を実装します
- **結果の多様化**: 多様性の制約を設けて、重複した結果を避けます

### プロンプトエンジニアリング

- **明確な指示**: 検索したコンテキストの使い方を明示します
- **出典の明示**: 引用を求め、提示したコンテキストに根拠を置くよう指示します
- **Few-Shot の例**: 望ましい応答形式と品質を示す例を含めます
- **コンテキストの圧縮**: コンテキストが上限を超える場合は、要約や抽出などの手法を使います

### 評価フレームワーク

- **多面的な指標**: 関連性、正確さ、網羅性、根拠性を評価します
- **人間参加型**: 継続的な改善に人間のフィードバックを取り入れます
- **合成評価**: 自動テスト用のテストクエリと期待される出力を生成します
- **本番監視**: ユーザー満足度、クエリ傾向、障害パターンを追跡します

### 継続的な改善

- **フィードバックループ**: ユーザーフィードバック、クエリログ、性能指標を収集します
- **実験**: 管理された実験を通じて、チャンク分割、検索、プロンプトの改善を体系的に検証します
- **モデルの更新**: 埋め込みモデルのアップグレードと移行戦略を計画します
- **ドキュメント**: アーキテクチャ、意思決定、運用手順を明確に文書化します

---

## コントリビューション

これはコミュニティ主導で継続的に更新されるリソース集です。リソースの追加、誤りの修正、構成の改善などの貢献を歓迎します。

1. リポジトリをフォークする
2. 変更用のブランチを作成する
3. 明確な説明を添えてプルリクエストを送る

項目を追加する際は、リンクが有効で、説明が正確かつ簡潔であり、適切なセクションに掲載されていることを確認してください。

## ライセンス

このプロジェクトは [CC0 1.0 Universal](LICENSE) ライセンスで公開されています。
