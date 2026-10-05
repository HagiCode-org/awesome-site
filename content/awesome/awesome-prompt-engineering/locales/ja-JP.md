<h2 align="center">Awesome Prompt 工学 ♂️</h2>

<p align="center">
  <img width="650" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/main/_source/prompt.png">
</p>

<p align="center">
  紙、ツール、モデル、API、ベンチマーク、コース、および大規模なランゲージモデルを扱うコミュニティを網羅する、Prompt Engineering and Context Engineeringのリソースのハンドキュレーションコレクション。
</p>

<p align="center">
https://promptslab.github.io
  </p>
 <h4 align="center">
  
  ```
     Master Prompt Engineering. Join the Course at https://promptslab.github.io
  ```
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome" /></a>
  <a href="https://github.com/promptslab/Awesome-Prompt-Engineering/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License" /></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" /></a>
  <a href="https://discord.gg/m88xfYMbK6"><img src="https://img.shields.io/badge/Discord-Community-orange" alt="Community" /></a>
  <img src="https://img.shields.io/badge/Last%20Updated-February%202026-brightgreen" alt="Last Updated" />
</p>

---

## 最近の投稿

迅速なエンジニアリングの新しい? このパスに従う:

<p align="center">
  <img width="1000" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/refs/heads/main/_source/main.jpg">
</p>

1. **基本を学ぶ** → [開発者向けChatGPT Prompt Engineering](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) (無料、90分)
2. **ガイドを読む** → [DAIRによる技術ガイド ツイート](https://www.promptingguide.ai/) (オープンソース、総合)
3. **研究提供者文書** → [OpenAI技術ガイド](https://platform.openai.com/docs/guides/prompt-engineering) · [人類工学ガイド](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
4. **フィールドが見出している場所を理解する** → [Anthropic:AIエージェントの効果的なコンテキストエンジニアリング](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
5. **研究を読む** → [プロンプトレポート](https://arxiv.org/abs/2406.06608) — 1,500枚以上の紙のテクニックを促す 58枚以上の文言

---

## コンテンツの表

- [ペーパー](#papers)
  - [主な調査](#major-surveys)
  - [プロンプトの最適化と自動のプロンプト](#prompt-optimization-and-automatic-prompting)
  - [敏速な圧縮](#prompt-compression)
  - [リーダーシップ](#reasoning-advances)
  - [コンテキスト学習](#in-context-learning)
  - [エージェントのプロンプトとマルチエージェントシステム](#agentic-prompting-and-multi-agent-systems)
  - [複数のモジュールのプロンプト](#multimodal-prompting)
  - [構造化された出力およびフォーマット制御](#structured-output-and-format-control)
  - [敏速な注入および保証](#prompt-injection-and-security)
  - [プロムプトエンジニアリングの応用](#applications-of-prompt-engineering)
  - [テキスト対イメージ生成](#text-to-image-generation)
  - [テキスト・ツー・ミュージック/オーディオ・ジェネレーション](#text-to-musicaudio-generation)
  - [基礎論文(Pre-2024)](#foundational-papers-pre-2024)
- [ツールとコード](#tools-and-code)
  - [迅速な管理とテスト](#prompt-management-and-testing)
  - [LLM評価ツール](#llm-evaluation-tools)
  - [エージェントフレームワーク](#agent-frameworks)
  - [プロンプト最適化ツール](#prompt-optimization-tools)
  - [赤いチーム化および敏速な保証](#red-teaming-and-prompt-security)
  - [MCP(モデルコンテキストプロトコル)](#mcp-model-context-protocol)
  - [Vibe CodingとAIコーディングアシスタント](#vibe-coding-and-ai-coding-assistants)
    - [CLIベースのコーディングエージェント](#cli-based-coding-agents)
    - [AIコードエディタ/IDEs](#ai-code-editors--ides)
    - [IDEエクステンション/プラグイン](#ide-extensions--plugins)
    - [AIコーディングプラットフォーム/クラウドエージェント](#ai-coding-platforms--cloud-agents)
    - [オープンソースのコーディングエージェントフレームワーク](#open-source-coding-agent-frameworks)
  - [その他の注目すべきリポジトリ](#other-notable-repositories)
- [API について](#apis)
- [データセットとベンチマーク](#datasets-and-benchmarks)
- [モデル](#models)
- [AIコンテンツ検出器](#ai-content-detectors)
- [出版書籍](#books)
- [コース](#courses)
- [チュートリアルとガイド](#tutorials-and-guides)
- [ビデオ](#videos)
- [コミュニティ](#communities)
- [自動研究開発・自己改善エージェント](#autonomous-research--self-improving-agents)
- [貢献する方法](#how-to-contribute)

---

## ペーパー
📄

### 主な調査

- [プロンプトレポート: プロンプト技術の系統的調査](https://arxiv.org/abs/2406.06608) [2024] — ほとんどの包括的な調査: 58 テキストの分類と 1,500 + 論文の 40 個のマルチモーダル プロンプト技術。 OpenAI、マイクロソフト、Google、スタンフォードと共著。
- [大規模な言語モデルにおけるプロンプト工学の系統的調査:テクニックとアプリケーション](https://arxiv.org/abs/2402.07927) [2024] — パータスクのパフォーマンスの要約を持つアプリケーション領域全体で44のテクニック。
- [異なるNLPタスクのLMにおけるプロンプトエンジニアリング手法の調査](https://arxiv.org/abs/2407.12994) [2024] — 39 NLP タスク全体でメソッドのプロンプト
- [自動プロンプトエンジニアリングの調査:最適化の視点](https://arxiv.org/abs/2502.11560) [2025] — オートPEメソッドを離散/連続/ハイブリッド最適化の問題として形成します。
- [大規模な言語モデルのための効率的なプロンプト方法:調査](https://arxiv.org/abs/2404.01077) [2024] — コンピューティングとレイテンシを減らすための効率指向のプロンプト(圧縮、最適化、APE)の調査。
- [Enigmatic Labyrinthをナビゲート:思考の連鎖の調査](https://arxiv.org/abs/2309.15402) [2023, ACL 2024] - 系統的なCoT調査。
- [思考のチェーン、ツリー、グラフの解明](https://arxiv.org/abs/2401.14295) [2024] — マルチプロンプト推論トポロジーの統一フレームワーク。
- [大規模な言語モデルのための目標指向のプロンプト工学に向けて: 調査](https://arxiv.org/abs/2401.14043) [2024] — 明示的なタスクの目標の周りに設計されたプロンプトに焦点を当てます。
- [時代を想起させるため:LLMを想起させるための長い鎖の調査](https://arxiv.org/abs/2503.09567) [2025] — o1/R1-eraモデルのショートコットからロングコットを区別します。

### プロンプトの最適化と自動のプロンプト

- [OPRO:オプティマイザとして大きな言語モデル](https://arxiv.org/abs/2309.03409) [2023, NeurIPS 2024] — LLM をメタプロンプトで最適化として使用し、最適化されたプロンプトは、BBH で最大 50% の人間設計のものを上回ります。
- [DSPy: Declarative 言語モデルのコンパイルは、自発的なパイプラインへの呼び出し](https://arxiv.org/abs/2310.03714) [2023, ICLR 2024] — プログラミングのためのフレームワーク (プロンプトなし) LLMs 自動プロンプトの最適化.
- [MIPRO:マルチステージ言語モデルプログラムの指示と実証の最適化](https://arxiv.org/abs/2406.11695) [2024, EMNLP 2024] — マルチステージLMプログラムのベイジアン最適化、最大13%の精度向上。
- [TextGrad:テキストによる自動「差分」](https://arxiv.org/abs/2406.07496) [2024] — 化合物AIシステムを計算グラフとして扱い、テキストフィードバックをグラデーションとして処理します。 自然に公開
- [エボプロンプ](https://arxiv.org/abs/2309.08532) [2023, ACL 2024] — 離散的なプロンプトを自動的に最適化するための進化アルゴリズムアプローチ。
- [AIシステム向けメタプロンピング](https://arxiv.org/abs/2311.11482) [2023, ICLR 2024 Workshop] — カテゴリ理論を用いた例アグノスティック構造テンプレート
- [プロムトエンジニアリング(PE2)](https://arxiv.org/abs/2311.05661) [2024, ACLファインディング] — LLM をメタプロンプトに使用し、ステップバイステップのテンプレートでプロンプトを磨き、推論を大幅に改善します。
- [大きい言語モデルは人間レベルの敏速なエンジニアです](https://arxiv.org/abs/2211.01910) [2022] — APE による自動プロンプト生成
- [硬質なプロンプトが簡単:強力な調整のための勾配ベースのディスクリート最適化](https://arxiv.org/abs/2302.03668) [2023]
- [SPO: 自己監督されたプロンプトの最適化](https://arxiv.org/abs/2502.06855) [2025] — 前の方法の費用の1〜6%で競争力のあるパフォーマンス。

### 敏速な圧縮

- [LLMLingua-2: 効率的で忠実なタスクのためのデータ蒸留-Agnosticプロンプト圧縮](https://arxiv.org/abs/2403.12968) [2024, ACL 2024] — GPT-4のデータ蒸留でLLMLinguaよりも3x–6x高速。
- [ロングLLMLingua](https://arxiv.org/abs/2310.06839) [2023, ACL 2024] — 長い文脈の質問認識圧縮; 21.4% パフォーマンスは 4x の少ないトークンで増加します。
- [大きい言語モデルのための迅速な圧縮:調査](https://arxiv.org/abs/2410.12388) [2024] - 硬くて柔らかいプロンプト圧縮方法の包括的な調査。

### リーダーシップ

- [LLMテスト時間の計算 最適](https://arxiv.org/abs/2408.03314) [2024] — 最適なテストタイム計算の割り当てが14倍以上のモデルを出力できます。
- [DeepSeek-R1:強化学習によるLMSにおけるレイソン機能の集中化](https://arxiv.org/abs/2501.12948) [2025] — 純粋な RL で処理された推論モデルのマッチング o1; 蒸留多様体でオープンソース。
- [s1: 簡単なテスト時間のスケーリング](https://arxiv.org/abs/2501.19393) [2025] — わずか1,000例のSFTが「バゲットフォーシング」で競争力のある推論モデルを作成します。
- [Reasoning 言語 モデル: Blueprint](https://arxiv.org/abs/2501.11223) [2025] — LM の推論を整理する体系的フレームワーク。
- [LLMの長鎖を解明](https://arxiv.org/abs/2502.03373) [2025] — 近代的な推論モデルで長いCoT動作を分析します。
- [思考のグラフ:LLMの平衡問題の解決](https://arxiv.org/abs/2308.09687) [2023, AAAI 2024] — モデルは、任意のグラフとして考えられ、62% の TT に対する品質向上。
- [思考の木:LMSと解決する議論](https://arxiv.org/abs/2305.10601) [2023, NeurIPS 2023] — 推論パスを調べるツリー。
- [思考のすべて](https://arxiv.org/abs/2311.04254) [2023] — COT、TOT、外部ソルバーをMCTSで統合。
- [スケルトン・オブ・トゥード](https://arxiv.org/abs/2307.15337) [2023] — 回答スケルトン生成によるパラレルデコードで最大2.69xスピードアップ。
- [大規模な言語モデルにおける思考の連係](https://arxiv.org/abs/2201.11903) [2022] — 基礎共同紙。
- [自己一貫性は思考の連鎖を改善します](https://arxiv.org/abs/2203.11171) [2022] — 複数のCoT出力を信頼性で集計
- [大きい言語モデルはゼロ打撃のレゾナースです](https://arxiv.org/abs/2205.11916) [2022] — ゼロショット推論トリガーとして「一歩ずつ考えよう」。
- [ReAct: 言語モデルの共鳴と行動の統合](https://arxiv.org/abs/2210.03629) [2022] — 推論とツールの使用を解釈します。

### コンテキスト学習

- [多くのショット・イン・コンテキスト・ラーニング](https://arxiv.org/abs/2404.11018) [2024, NeurIPS 2024 Spotlight] — ICL を数百/千にスケールアップし、REinforced と Unsupervised ICL を導入。
- [マルチモーダルファンデーションモデルにおける多くのショット・イン・コンテキスト・ラーニング](https://arxiv.org/abs/2405.09798) [2024] — 複数のモジュールの ICL を 14 個のデータセットを渡る ~2,000 の例にスケールします。
- [宣言の役割を再考する: コンテキスト学習の仕組みとは?](https://arxiv.org/abs/2202.12837) [2022]
- [巧妙に注文されたプロンプトとテーマを見つける場所](https://arxiv.org/abs/2104.08786) [2021] — いくつかのショットのプロンプト順感を克服する。
- [使用前のキャリブレーション:言語モデルのFew-Shot性能の改善](https://arxiv.org/abs/2102.09690) [2021]

### エージェントのプロンプトとマルチエージェントシステム

- [エージェントの大きな言語モデル:調査](https://arxiv.org/abs/2503.23037) [2025] — 有能な LLM を組織する包括的な調査。推論、演技、相互作用能力。
- [大規模な言語モデルに基づくマルチエージェント:進捗状況と課題の調査](https://arxiv.org/abs/2402.01680) [2024] — プロファイリング、コミュニケーション、成長メカニズムをカバーしています。
- [マルチエージェントのコラボレーションメカニズム:LLMの調査](https://arxiv.org/abs/2501.06322) [2025] — LLM ベースのマルチエージェントシステムにおけるレビューの議論と協力戦略。
- [AutoGen:マルチエージェント・コンバージネーションによる次世代LLMアプリケーションの構築](https://arxiv.org/abs/2308.08155) [2023] — マイクロソフトの基礎マルチエージェントフレームワーク紙。
- [ToolLLM: マスター 16000 + リアルワールド API に大きな言語モデルを促進](https://arxiv.org/abs/2307.16789) [2023, ICLR 2024] — 大規模な現実のAPIコレクションを使用するためにLMSをトレインします。
- [SWE-bench:現実世界GitHubの問題を解決できる言語モデル?](https://arxiv.org/abs/2310.06770) [2023, ICLR 2024] — ベンチマーク駆動のエージェントコーディングの進捗。
- [AgentBench: LLM をエージェントとして評価](https://arxiv.org/abs/2308.03688) [2023, ICLR 2024] — 8つの環境でベンチマーク
- [PAL:プログラム支援言語モデル](https://arxiv.org/abs/2211.10435) [2023] — コード通訳者に計算をオフロードします。

### 複数のモジュールのプロンプト

- [マルチモーダル大言語モデルの視覚的プロンプト:調査](https://arxiv.org/abs/2409.15310) [2024] - MLLMの視覚的プロンプト方法の最初の包括的な調査。
- [GPT-4V で異常な視覚の接地を消すマークの組み立て](https://arxiv.org/abs/2310.11441) [2023] — 視覚マーカーは視覚的な接地を劇的に改善します。
- [Vision-Language タスクにおけるマルチモーダル言語モデルに関する包括的な調査とガイド](https://arxiv.org/abs/2411.06284) [2024] — テキスト、画像、ビデオ、オーディオMLLMをカバーします。
- [言語モデルのマルチモーダルチェーン-オブ-Thought Reasoning](https://arxiv.org/abs/2302.00923) [2023]
- [試作から試作まで](https://arxiv.org/abs/2411.13422) [2024] — 拡散モデルのプロンプト "craft" の設計調査ビュー。

### 構造化された出力およびフォーマット制御

- [自由に話しましょうか? LLMのパフォーマンスに関するフォーマット制限の影響に関する研究](https://arxiv.org/abs/2408.02442) [2024] — パフォーマンスの推論に影響を与える構造化されたフォーマットに出力を制約する方法を調べます。
- [バッチ プロンプト:LM API による効率的なインフェレンス](https://arxiv.org/abs/2301.08721) [2023]
- [構造化されたプロンプト: コンテキスト内学習を1,000例にスケーリングする](https://arxiv.org/abs/2212.06713) [2022]

### 敏速な注入および保証

- [正式化とベンチマークのプロンプト注入攻撃と防衛](https://arxiv.org/abs/2310.12815) [2023年、USENIX Security 2024年] — 10LLMで5つの攻撃と10の防御を系統的に評価した公式フレームワーク。
- [指示階層:特権の指示を優先する訓練LMs](https://arxiv.org/abs/2404.13208) [2024] — 注射防衛のためのOpenAIの優先レベルのトレーニング。
- [AgentDojo: プロンプト注入攻撃と防衛を評価するための動的環境](https://arxiv.org/abs/2406.13352) [2024] — 現実的なエージェントのシナリオベンチマーク。
- [InjecAgent: ツール統合 LLM エージェントにおける間接プロンプト注入のベンチマーキング](https://arxiv.org/abs/2403.02691) [2024]
- [SecAlign: 設定の最適化でプロンプトの注入に対する防衛](https://arxiv.org/abs/2410.05451) [2024] — DPO ベースの防衛。
- [WASP: ベンチマーキング Web エージェント セキュリティ 再び プロンプト 注射](https://arxiv.org/abs/2504.18575) [2025] — ウェブ/コンピューターのエージェントのセキュリティベンチマーク
- [多くのショットジェイルブレイク](https://www.anthropic.com/research/many-shot-jailbreaking) [2024] — 長いコンテキストウィンドウで有害な例をスケーリングすると、ジェイルブレイク(アンソロピー・テクニカル・レポート)が可能になります。
- [憲法AI:AIのフィードバックからの無害](https://arxiv.org/abs/2212.08073) [2022]
- [Ignore 前のプロンプト: 言語モデルの攻撃テクニック](https://arxiv.org/abs/2211.09527) [2022]
- [人工知能とサイバーセキュリティ:2024～2025年におけるリスク、企業ガードレール、および脅威のエマージ](https://www.ijfmr.com/research-paper.php?id=62200) [2025] — 実用的なガバナンス・プロンプト・パターンによる実質の迅速なインジェクション・インシデントの調査。

### プロムプトエンジニアリングの応用

- [Rephrase と Response: 大規模な言語モデルでは、Themselves のより良い質問に答えましょう](https://arxiv.org/abs/2311.04205) [2023]
- [法的な法的な判断予測のための法的なプロンプト工学](https://arxiv.org/abs/2212.02199) [2023]
- [Copilot との会話: CS1 問題の解決のための Prompt 工学の調査](https://arxiv.org/abs/2210.15157) [2022]
- [制御可能な共感糖尿病生成のためのコモンセンス・アウェア・プロンプト](https://arxiv.org/abs/2302.01441) [2023]
- [PLACES:社会会話の統合のための言語モデルのプロンプト](https://arxiv.org/abs/2302.03269) [2023]
- [トランスエンコーダとプロンプトベースの学習を用いた医療画像のセグメンテーション:系統的レビュー](https://ieeexplore.ieee.org/document/11313186/) [2025]
- [TableRAG: ヘテロジェンシー文書の合理的な拡張生成フレームワーク](https://arxiv.org/abs/2506.10380) [2025] — SQL ベースのインターフェイスは、マルチホップクエリのタブラ構造を保存します。

### テキスト対イメージ生成

- [テキスト・ツー・イメージの生成のためのプロンプト修飾語の分類](https://arxiv.org/abs/2204.13988) [2022]
- [Prompt Engineering テキスト・ツー・イメージ生成モデルの設計ガイドライン](https://arxiv.org/abs/2109.06977) [2021]
- [ラテント拡散モデルによる高解像度画像合成](https://arxiv.org/abs/2112.10752) [2021]
- [DALL・E:テキストからイメージを作成する](https://arxiv.org/abs/2102.12092) [2021]
- [DiffusionモデルのPromptエンジニアリングの調査](https://arxiv.org/abs/2211.15462) [2022]

### テキスト・ツー・ミュージック/オーディオ・ジェネレーション

- [MusicLM:テキストから音楽を生成](https://arxiv.org/abs/2301.11325) [2023]
- [ERNIE-Music:Diffusionモデルによるテキスト・ツー・ワーブフォーム音楽生成](https://arxiv.org/pdf/2302.04456) [2023]
- [AudioLM:音声生成への言語モデリングアプローチ](https://arxiv.org/pdf/2209.03143) [2023]
- [Make-An-Audio: Prompt-Enhanced DiffusionパフォーマーによるText-To-Audio生成](https://arxiv.org/pdf/2301.12661.pdf) [2023]

### 基礎論文(Pre-2024)

これらの論文は、現代のプロンプトエンジニアリングが構築するコアコンセプトを確立しました。

- [言語モデルはFew-Shot Learners (GPT-3) です。](https://arxiv.org/abs/2005.14165) [2020] — スケールでいくつかのショットのプロンプトをデモンストレーションしました。
- [Prefix-Tuning:生成のための連続的なプロンプトの最適化](https://arxiv.org/abs/2101.00190) [2021]
- [パラメータ効率的なプロンプトのチューニングのためのスケールの電力](https://arxiv.org/abs/2104.08691) [2021]
- [大規模な言語モデルのためのプロンプトプログラミング:Few-Shot Paradigmを超えて](https://arxiv.org/abs/2102.07350) [2021]
- [あなたの仕事を表示: 言語モデルとの中間計算のためのスクラッチパッド](https://arxiv.org/abs/2112.00114) [2021]
- [一般的な理由の生成知識のプロンプト](https://arxiv.org/abs/2110.08387) [2021]
- [プリトレイントされた言語モデルを作る より良い発話学習者](https://aclanthology.org/2021.acl-long.295) [2021]
- [AutoPrompt:自動生成されたプロンプトで言語モデルから知識を排除](https://arxiv.org/abs/2010.15980) [2020]
- [どの言語モデルが知っているかを知るにはどうすればよいですか?](https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00324/96460/) [2020]
- [ChatGPT で Prompt エンジニアリングを強化する Prompt Pattern Catalog](https://arxiv.org/abs/2302.11382) [2023]
- [合成のプロンプト:LMs の鎖-of-Thought の実証を発生させます](https://arxiv.org/abs/2302.00618) [2023]
- [プログレッシブ・プロンプト:言語モデルの継続的な学習](https://arxiv.org/abs/2301.12314) [2023]
- [複雑な質問を克服するための成功したプロンプト](https://arxiv.org/abs/2212.04092) [2022]
- [分解されたプロンプト:複雑なタスクを解決するためのモジュラーアプローチ](https://arxiv.org/abs/2210.02406) [2022]
- [PromptChainer:視覚プログラミングによる大規模な言語モデルのプロンプトのチェーン](https://arxiv.org/abs/2203.06566) [2022]
- [TalkEnglishのオフライン版をダウンロードし、8000を超える音声ファイルと800ページを超えるレッスンで英語漬けになって、もっと速く英語を話せるように勉強しよう。そうすれば、インターネットに接続していなくても勉強ができ、MP3プレーヤーを使っていつでも音声ファイルを聞くことができます。](https://paperswithcode.com/paper/ask-me-anything-a-simple-strategy-for) [2022]
- [信頼できるためにGPT-3を押すこと](https://arxiv.org/abs/2210.09150) [2022]
- [第二の想いで、一歩一歩一歩を踏み出そう! バイアスと毒性ゼロショットレソン](https://arxiv.org/abs/2212.08061) [2022]

---

## ツールとコード
🔧

### 迅速な管理とテスト

| お名前 (必須) | コンテンツ | サイトマップ |
|:-----|:-----------|:----:|
| **Promptfoo** | LLM プロンプトのテスト、評価、および赤字型 LLM プロンプトのためのオープンソース CLI。 YAML の構成、CI/CD の統合、adversarial のテスト。~9K+ の ◀ | [GitHub](https://github.com/promptfoo/promptfoo) |
| **Promptify** | ソルベ NLP LLM の & 簡単に異なる NLP タスク プロンプトで GPT や PaLM などの一般的なジェネレーション モデルに異なる NLP タスク プロンプトを生成する | [[Github]](https://github.com/promptslab/Promptify) |
| **Agenta** | 迅速な管理、評価、ヒューマンフィードバック、および展開のためのオープンソースLM開発者プラットフォーム。 | [GitHub](https://github.com/Agenta-AI/agenta) |
| **PromptLayer** | バージョン、テスト、および堅牢な楕円形、トレース、および回帰セットですべてのプロンプトとエージェントを監視します。 | [Website](https://promptlayer.com/) |
| **Helicone** | 生産のプロンプトの監視および最適化のプラットホーム。 | [Website](https://helicone.ai/) |
| **LangGPT** | 構造化とメタプロンプト設計のためのフレームワーク。 10K+ フォロー | [GitHub](https://github.com/langgpt/LangGPT) |
| **ChainForge** | コードなしでLMプロンプト応答を構築、テスト、比較するためのビジュアルツールキット。 | [GitHub](https://github.com/ianarawjo/ChainForge) |
| **LMQL** | LLM のクエリ言語で複雑なプロンプトロジックをプログラム可能にします。 | [GitHub](https://github.com/eth-sri/lmql) |
| **Promptotype** | 構造LLMプロンプトの開発、テスト、および管理のためのプラットフォーム。 | [Website](https://www.promptotype.io) |
| **PromptPanda** | 迅速なワークフローを合理化するためのAIを搭載したプロンプト管理システム。 | [Website](https://promptpanda.io) |
| **Promptimize AI** | ブラウザ拡張機能により、あらゆるAIモデルのユーザープロンプトを自動的に改善します。 | [Website](https://promptimize.ai) |
| **PROMPTMETHEUS** | 反復的作成および実行中のプロンプトのためのWebベースの「プロンプトエンジニアリングIDE」。 | [Website](https://promptmetheus.com) |
| **Better Prompt** | 生産に押し込む前にLMLのプロンプトのためのテスト スイート。 | [GitHub](https://github.com/krrishdholakia/betterprompt) |
| **OpenPrompt** | 迅速な学習研究のためのオープンソースフレームワーク。 | [GitHub](https://github.com/thunlp/OpenPrompt) |
| **Prompt Source** | 自然な言語プロンプトを作成、共有、および使用するためのツールキット。 | [GitHub](https://github.com/bigscience-workshop/promptsource) |
| **Prompt Engine** | LLM(Microsoft)のプロンプトを作成および維持するためのNPMユーティリティライブラリ。 | [GitHub](https://github.com/microsoft/prompt-engine) |
| **PromptInject** | LLM の堅牢性を定量分析するためのフレームワーク。 | [GitHub](https://github.com/agencyenterprise/PromptInject) |
| **LynxPrompt** | AI IDE 設定ファイル(.cursorrules、CLAUDE.md、copilot-instructions.md)の管理のためのセルフホスト可能なプラットフォーム。 Web UI、REST API、CLI、および30以上のAIコーディングアシスタント用の青写真市場をフェデレーションしました。 | [GitHub](https://github.com/GeiserX/LynxPrompt) |
| **flompt** | 視覚AIプロンプトビルダーは、プロンプトを12のセマンティックブロック(ロール、コンテキスト、制約例など)に分解し、最適化されたXMLにコンパイルします。 ChatGPT/Claude/Gemini、Claude Code エージェントの MCP サーバーのブラウザ拡張 無料、オープンソース。 | [Website](https://flompt.dev) |

### LLM評価ツール

| お名前 (必須) | コンテンツ | サイトマップ |
|:-----|:-----------|:----:|
| **DeepEval** | RAG、エージェント、およびCI/CD統合による会話に関するオープンソースの評価フレームワーク。~7K+ ◀ | [GitHub](https://github.com/confident-ai/deepeval) |
| **Ragas** | 知識に基づいたテストセット生成と30以上のメトリックによるRAG評価 | [GitHub](https://github.com/explodinggradients/ragas) |
| **LangSmith** | LLM アプリケーションをデバッグ、テスト、評価、監視するためのLangChainのプラットフォーム。 | [Website](https://smith.langchain.com/) |
| **Langfuse** | トラッシング、プロンプト管理、ヒューマンアノテーションでLM のオープン ソースの保守性。~7K+ ◀ | [GitHub](https://github.com/langfuse/langfuse) |
| **Braintrust** | エンドツーエンドAI評価プラットフォーム、SOC2タイプII認証を取得 | [Website](https://www.braintrust.dev/) |
| **Arize AI / Phoenix** | ドリフト検出とトレースによるリアルタイムLMモニタリング | [GitHub](https://github.com/Arize-ai/phoenix) |
| **TruLens** | LLMアプリの評価と説明; 幻覚、関連性、接地性を追跡します。 | [GitHub](https://github.com/truera/trulens) |
| **InspectAI** | ベンチマーク(UK AISI)に対する代理店を評価するための目的ビル。 | [GitHub](https://github.com/UKGovernmentBEIS/inspect_ai) |
| **Opik** | 開発・製造ライフサイクルにおけるLMLアプリケーションの評価、テスト、出荷 | [GitHub](https://github.com/comet-ml/opik) |
| **EvalView** | YAMLテストケース、回帰検知、生産監視で複数のAIエージェントをテストするためのCLIツール。 |[GitHub](https://github.com/hidai25/eval-view) |

### エージェントフレームワーク

| お名前 (必須) | コンテンツ | サイトマップ |
|:-----|:-----------|:----:|
| **LangChain / LangGraph** | 最も広く採用されているLLMアプリフレームワーク。LangGraphは、グラフベースのマルチステップエージェントワークフローを追加します。 ~100K+ / ~10K+ ⭐️ | [GitHub](https://github.com/langchain-ai/langchain) · [LangGraph](https://github.com/langchain-ai/langgraph) |
| **CrewAI** | 700+の統合でAIエージェントのオーケストレーションをロールプレイ! 〜44K+ ◀ | [GitHub](https://github.com/crewAIInc/crewAI) |
| **AutoGen (AG2)** | マイクロソフトのマルチエージェントの対話フレームワーク。 ～40K以上 ✨ | [GitHub](https://github.com/microsoft/autogen) |
| **DSPy** | 自動プロンプト/重量の最適化でLMをプログラミングするためのスタンフォードのフレームワーク。 ～22K+ ✨ | [GitHub](https://github.com/stanfordnlp/dspy) |
| **OpenAI Agents SDK** | 関数呼び出し、ガードレール、およびハンドオフを備えた公式エージェントフレームワーク。 ～10K+ | [GitHub](https://github.com/openai/openai-agents-python) |
| **Semantic Kernel** | マイクロソフトのAIフレームワークは、M365 Copilot、C#、Python、Java を出力します。 ~24K+ ◀ | [GitHub](https://github.com/microsoft/semantic-kernel) |
| **LlamaIndex** | RAG およびエージェント機能のデータフレームワーク。 ～40K以上 ✨ | [GitHub](https://github.com/run-llama/llama_index) |
| **Haystack** | RAGとエージェントのパイプラインアーキテクチャを備えたオープンソースのNLPフレームワーク。 ～20K+ | [GitHub](https://github.com/deepset-ai/haystack) |
| **Agno (formerly Phidata)** | マイクロ秒インスタンス化によるPythonエージェントフレームワーク。 ～20K+ | [GitHub](https://github.com/agno-agi/agno) |
| **Smolagents** | Hugging Face の最小限のコード中心のエージェントフレームワーク (~1000 LOC)。~15K+ ◀ | [GitHub](https://github.com/huggingface/smolagents) |
| **Pydantic AI** | 構造化された検証のためにPydanticを使用してタイプ セーフ エージェントのフレームワーク。~8K+ ◀ | [GitHub](https://github.com/pydantic/pydantic-ai) |
| **Mastra** | アシスタント、RAG、および保守性を備えたTypeScript AIエージェントフレームワーク。 ～20K+ | [GitHub](https://github.com/mastra-ai/mastra) |
| **Google ADK** | エージェント開発キットはGeminiとGoogle Cloudと深く統合しました。 | [GitHub](https://github.com/google/adk-python) |
| **Strands Agents (AWS)** | ディープAWSインテグレーションによるモデルアグノスティックフレームワーク。 | [GitHub](https://github.com/strands-agents/sdk-python) |
| **Langflow** | ドラッグアンドドロップでNodeベースのビジュアルエージェントビルダー。〜50K+ ◀ | [GitHub](https://github.com/langflow-ai/langflow) |
| **n8n** | AIエージェント機能と400以上の統合によるワークフロー自動化 ～60K以上 ✨ | [GitHub](https://github.com/n8n-io/n8n) |
| **Dify** | ツール使用のエージェントとRAGのエージェントワークフローのオールインワンバックエンド。 | [GitHub](https://github.com/langgenius/dify) |
| **PraisonAI** | マルチAI 100以上のLLMサポート、MCP統合、組み込みメモリを備えたエージェントフレームワーク。 | [GitHub](https://github.com/MervinPraison/PraisonAI) |
| **Neurolink** | ワークフローのオーケストレーションで12以上のプロバイダを統一するマルチプロピダーAIエージェントフレームワーク。 | [GitHub](https://github.com/juspay/neurolink) |
| **Composio** | 100以上のツールをAIエージェントにゼロセットアップで接続します。 | [GitHub](https://github.com/composiohq/composio) |

### プロンプト最適化ツール

| お名前 (必須) | コンテンツ | サイトマップ |
|:-----|:-----------|:----:|
| **DSPy** | 自動プロンプトチューニングのための複数のオプティマイザ(MIPROv2、BootstrapFewShot、COPRO)。 〜22K + ◀ | [GitHub](https://github.com/stanfordnlp/dspy) |
| **TextGrad** | テキスト(スタンフォード)による自動差分。~2K+ ◀ | [GitHub](https://github.com/zou-group/textgrad) |
| **OPRO** | プロンプトでGoogle DeepMindの最適化。 | [GitHub](https://github.com/google-deepmind/opro) |

### 赤いチーム化および敏速な保証

| お名前 (必須) | コンテンツ | サイトマップ |
|:-----|:-----------|:----:|
| **Garak (NVIDIA)** | LLM の拡張、注射、脱獄のための脆弱性スキャナー — 「LM のnmap」 ~3K+ ◀ | [GitHub](https://github.com/NVIDIA/garak) |
| **PyRIT (Microsoft)** | 自動化された冗談のためのPythonリスク識別ツール。 ~3K+ ◀ | [GitHub](https://github.com/Azure/PyRIT) |
| **DeepTeam** | 40以上の脆弱性、10以上の攻撃方法、OWASP Top 10のサポート。 | [GitHub](https://github.com/confident-ai/deepteam) |
| **LLM Guard** | LLM I/O 検証用のセキュリティツールキット。 ~2K+ ◀ | [GitHub](https://github.com/protectai/llm-guard) |
| **NeMo Guardrails (NVIDIA)** | 会話システムのためのプログラム可能なガードレール。~5K+ ◀ | [GitHub](https://github.com/NVIDIA/NeMo-Guardrails) |
| **Guardrails AI** | 厳格な出力フォーマット(JSONスキーマ)を定義し、システムの信頼性を確保します。 | [Website](https://www.guardrailsai.com) |
| **Lakera** | リアルタイムのプロンプト注入の検出のためのAIのセキュリティ プラットフォーム。 | [Website](https://lakera.ai/) |
| **Purple Llama (Meta)** | CyberSecEvalなどのオープンソースLM安全評価 | [GitHub](https://github.com/meta-llama/PurpleLlama) |
| **GPTFuzz** | >90%の成功率を達成する自動脱獄型テンプレート生成。 | [GitHub](https://github.com/sherdencooper/GPTFuzz) |
| **Rebuff** | 迅速な注射の検出と予防のためのオープンソースツール。 | [GitHub](https://github.com/protectai/rebuff) |
| **AgentSeal** | 「150発の攻撃プローブを走るオープンソーススキャナで、迅速な注射と抽出脆弱性のAIエージェントをテスト」 | [GitHub](https://github.com/agentseal/agentseal) |

### MCP(モデルコンテキストプロトコル)

MCP は、AI アシスタントを外部のデータソースやツールに標準化されたインターフェースに接続するための、Anthropic (Nov 2024, Linux Foundation Dec 2025) によって開発されたオープン規格です。 それは持っています **97M+月間SDKのダウンロード** GitHub、Google、およびほとんどの主要なAIプロバイダが採用しています。

| お名前 (必須) | コンテンツ | サイトマップ |
|:-----|:-----------|:----:|
| **MCP Specification** | コアプロトコル仕様とSDK。～15K+ ◀ | [GitHub](https://github.com/modelcontextprotocol/modelcontextprotocol) |
| **MCP Reference Servers** | 公式実装: fetch, filesystem, GitHub, Slack, Postgres. | [GitHub](https://github.com/modelcontextprotocol/servers) |
| **FastMCP (Python)** | MCP サーバ構築のための高レベルの Python フレームワーク。~5K+ ◀ | [GitHub](https://github.com/jlowin/fastmcp) |
| **GitHub MCP Server** | GitHub の公式 MCP サーバーで、リポジトリ、問題、PR、アクションのやり取りを行います。 ～15K+ ✨ | [GitHub](https://github.com/github/github-mcp-server) |
| **Awesome MCP Servers** | 10,000以上のコミュニティMCPサーバーのキュレーションリスト。 ～30K+ ✨ | [GitHub](https://github.com/punkpeye/awesome-mcp-servers) |
| **Context7** | MCP サーバーは、コードの幻覚を減らすためのバージョン固有のドキュメントを提供します。 | [GitHub](https://github.com/upstash/context7) |
| **GitMCP** | ドメインを変更することで、GitHubリポジトリにリモートMCPサーバーを作成します。 | [Website](https://gitmcp.io/) |
| **MCP Inspector** | MCP サーバー開発用のビジュアルテストツール | [GitHub](https://github.com/modelcontextprotocol/inspector) |

### Vibe CodingとAIコーディングアシスタント

> 🟢 = オープンソース · 🔵 = 商用 · 🟣 = オープンソース + 商用（コアはオープン、クラウド/APIは有料）

#### CLIベースのコーディングエージェント

コードベースを理解し、複数のステップのタスクを実行するためのターミナルネイティブエージェントツール。

| お名前 (必須) | コンテンツ | タイプ: | サイトマップ |
|:-----|:-----------|:----:|:----:|
| **Claude Code** | Anthropic のエージェント コーディング CLI; 完全なコードベースを理解し、自然な言語で複雑な複数のステップのタスクを実行します。 | 🔵 | [Docs](https://docs.anthropic.com/en/docs/claude-code) |
| **OpenAI Codex CLI** | OpenAIのオープンソース端末コーディングエージェント、軽量、ローカルファースト、サンドボックスコード実行 ～68K+ ✨ | 🟣 | [GitHub](https://github.com/openai/codex) |
| **Gemini CLI** | 1M-tokenコンテキストウィンドウとGoogle検索グラウンドでGoogleのオープンソースターミナルAIエージェント。 ～96K以上 ✨ | 🟣 | [GitHub](https://github.com/google-gemini/gemini-cli) |
| **Qwen Code** | Qwen3-Coder、マルチプロトコル対応(OpenAI/Anthropic/Gemini API)、1,000件の無料リクエスト/日を最適化したオープンソース端末AIエージェント | 🟢 | [GitHub](https://github.com/QwenLM/qwen-code) |
| **Aider** | ディープGitインテグレーションで端末でのAIペアプログラミング。コードベース全体と自動コミットの変更をマップします。~42K+ ◀ | 🟢 | [GitHub](https://github.com/Aider-AI/aider) |
| **OpenCode** | 美しいTUIで強力なオープンソースのAIコーディングエージェント。ほぼすべてのAIモデルプロバイダをサポートしています。 ～120K以上 ✨ | 🟢 | [GitHub](https://github.com/opencode-ai/opencode) |
| **Goose** | ブロック(Square/Cash App)からの拡張可能なオープンソースAIエージェント。任意のLMでインストール、実行、編集、テスト。 〜29K + ◀ | 🟢 | [GitHub](https://github.com/block/goose) |
| **Crush** | 複数のモデルのサポート、LSPの統合および美しいターミナルUIのCharmbraceletからの華やかな代理店のコーディングの代理店。~9K+ ◀ | 🟢 | [GitHub](https://github.com/charmbracelet/crush) |
| **Amazon Q Developer CLI** | AWS からの端末でのエージェントチャット体験、Kiro CLI への移行 | 🟣 | [GitHub](https://github.com/aws/amazon-q-developer-cli) |
| **Amp** | Sourcegraphのエージェントコーディングツール(Cody Successor)は、CLIとIDEで動作します。 | 🔵 | [Website](https://ampcode.com) |
| **Junie CLI** | JetBrains の LLM-agnostic コーディングエージェント CLI (beta 2026); すべての主要なモデルプロバイダをサポートしています。 | 🔵 | [Website](https://www.jetbrains.com/junie/) |
| **Autohand Code CLI** | 複数のprovider LLM サポート、40+用具およびモジュラー スキル システムが付いている自己進化する自動ターミナル コーディングの代理店。 | 🟢 | [GitHub](https://github.com/autohandai/code-cli) |

#### AIコードエディタ/IDEs

スタンドアローンエディタやIDEのフォークをディープAI統合で実現。

| お名前 (必須) | コンテンツ | タイプ: | サイトマップ |
|:-----|:-----------|:----:|:----:|
| **Cursor** | 大手のAIネイティブコードエディタ(VSコードフォーク)。 Composerは、自然言語、有能なマルチファイル編集からアプリ全体を生成します。 | 🔵 | [Website](https://cursor.com) |
| **Windsurf** | 独自のカスケードエージェントとSWE-1.5モデルを備えたAIを搭載したIDE(VSコードフォーク)、Cognition AIによる取得 | 🔵 | [Website](https://windsurf.com) |
| **Zed** | ネイティブAI機能、Zeta編集予測、およびAgent Client Protocolサポートを備えたRustの高性能エディタ。~77K+ ◀ | 🟢 | [GitHub](https://github.com/zed-industries/zed) |
| **Trae** | ByteDance(「The Real AI Engineer」)による無料のAI搭載IDEをBuilder Modeで提供し、Claude、GPT-4o、DeepSeekを無料で利用できます。 | 🔵 | [Website](https://www.trae.ai) |
| **Google Antigravity** | Googleのエージェント・ファーストIDE(VSコードフォーク)と、複数のエージェントを並列に編集するためのマネージャビュー。Geminiが機能する。 | 🔵 | [Website](https://antigravity.google) |
| **Kiro** | AWSのspec-driven Agentic AI IDE (VS Code fork) は、プロンプトを仕様にし、作業コード、ドキュメント、テストを処理します。 | 🔵 | [Website](https://kiro.dev) |
| **PearAI** | オープンソースのAIコードエディタ(VSコードフォーク)と、継続的チャットと完了。 ～40K以上 ✨ | 🟢 | [GitHub](https://github.com/trypear/pearai-app) |
| **Void** | オープンソースのカーソルの代替(VSコードフォーク)。任意のモデルまたはローカルのホスティングは、視覚化を変更します。 ～28K+ ✨ | 🟢 | [GitHub](https://github.com/voideditor/void) |
| **Melty** | 複数のファイル編集と深いGit統合を備えたオープンソースのチャットファーストAIコードエディタ。 〜7K + ◀ | 🟢 | [GitHub](https://github.com/meltylabs/melty) |
| **Emdash** | 独立したGitワークツリーで並行して複数のコーディングエージェントを実行するためのオープンソースのエージェント開発環境(YC W26)。 | 🟢 | [GitHub](https://github.com/generalaction/emdash) |

#### IDEエクステンション/プラグイン

VSコード、JetBrains、Neovimなどのエディタ用のプラグイン。

| お名前 (必須) | コンテンツ | タイプ: | サイトマップ |
|:-----|:-----------|:----:|:----:|
| **GitHub Copilot** | 最も広く採用されたAIコーディングアシスタント。VSコード、JetBrains、Neovimを渡るインライン補完、チャット、および代理店コーディングエージェント。 | 🔵 | [Website](https://github.com/features/copilot) |
| **Cline** | ヒューマン・イン・ザ・ループの承認によるVSコードの自動コーディングの代理店;ファイル編集、端末コマンド、ブラウザの使用。 ～59K+ ✨ | 🟢 | [GitHub](https://github.com/cline/cline) |
| **Continue** | オープンソースのVSコードとJetBrainsの拡張機能で、カスタム、モジュラーAI 開発システム、任意のモデルを作成できます。 ~32K+ ◀ | 🟢 | [GitHub](https://github.com/continuedev/continue) |
| **Cody** | ローカルおよびリモート・コードベースからコンテキストを引っ張る Sourcegraph-powered AI アシスタント、VS コード、JetBrains、Visual Studio。 | 🔵 | [Website](https://sourcegraph.com/cody) |
| **Codeium** | 完了、チャット、70以上の言語で検索できる40以上のIDE用の無料のAIコーディング拡張機能。 | 🟣 | [Website](https://codeium.com) |
| **Amazon Q Developer** | AWSのAIコーディングアシスタントと完了、インラインチャット、エージェントモード、ディープAWSインテグレーション | 🟣 | [Website](https://aws.amazon.com/q/developer/) |
| **Gemini Code Assist** | 完了、次の編集予測、およびインラインの差分でGeminiによって動力を与えられたGoogleのIDEの拡張;個人のために放して下さい。 | 🟣 | [Website](https://codeassist.google) |
| **Tabnine** | 許認可されたOSSで訓練されたプライバシー重視のAIアシスタント。オンプレミスの展開ですべての主要なIDEをサポートしています。 | 🔵 | [Website](https://www.tabnine.com) |
| **Augment Code** | 深いコードベース理解のための200Kトークンコンテキストエンジンを備えたエンタープライズAIコーディングアシスタント。 | 🔵 | [Website](https://www.augmentcode.com) |
| **Qodo** | 複数のエージェントアーキテクチャを備えたAIコードレビューと品質プラットフォーム。テスト生成、コードレビュー、CI / CDの執行。 | 🟣 | [Website](https://www.qodo.ai) |
| **CodeGeeX** | VSコードとJetBrains拡張機能を備えた20以上の言語に対応した、オープンソースの多言語コード生成モデル。 ～11K+ ◀ | 🟢 | [GitHub](https://github.com/zai-org/CodeGeeX) |
| **Tabby** | セルフホスト型のオープンソースのAIコーディングアシスタント(Copilot代替)。インフラストラクチャ上で完全に実行します。 ～25K+ ✨ | 🟢 | [GitHub](https://github.com/TabbyML/tabby) |

#### AIコーディングプラットフォーム/クラウドエージェント

ブラウザベースのまたはクラウドホスト型エージェントは、自律的に構築、テスト、およびデプロイを行います。

| お名前 (必須) | コンテンツ | タイプ: | サイトマップ |
|:-----|:-----------|:----:|:----:|
| **Devin** | クラウドベースのAIソフトウェアエンジニアを第一に、計画、コード、テスト、およびPRを独立して開きます。 | 🔵 | [Website](https://devin.ai) |
| **Replit Agent** | クラウドネイティブのAIエージェントは、フルスタックアプリのインブラウザー、50以上の言語を自動で構築、テスト、デプロイします。 | 🔵 | [Website](https://replit.com/products/agent) |
| **bolt.new** | AI 搭載の Web 開発者エージェント、WebContainers 経由でブラウザでフルスタックアプリを直接プロンプト、実行、編集、およびデプロイします。 ～15K+ ✨ | 🟢 | [GitHub](https://github.com/stackblitz/bolt.new) |
| **bolt.diy** | 拡張機能とLLMの柔軟性を備えたbolt.newのコミュニティフォーク。〜12K + ◀ | 🟢 | [GitHub](https://github.com/stackblitz-labs/bolt.diy) |
| **Lovable** | Supabase、auth、およびワンクリック展開で自然言語からフルスタックアプリ。最速のヨーロッパのスタートアップから$ 20M ARR。 | 🔵 | [Website](https://lovable.dev) |
| **v0** | 高品質のReact/Nextを生成するためのVercelのAIプラットフォーム。 js UI コンポーネントを自然言語から作成します。 | 🔵 | [Website](https://v0.dev) |
| **GitHub Copilot Workspace** | 計画、頭脳、修復剤を備えたクラウドベースのコーディング環境。有料のコピロットプランに含まれています。 | 🔵 | [Website](https://githubnext.com/projects/copilot-workspace) |
| **Firebase Studio** | Googleの有力クラウドベースの開発環境。 | 🔵 | [Website](https://firebase.google.com/studio) |

#### オープンソースのコーディングエージェントフレームワーク

自動コーディングエージェントの構築のためのフレームワークと研究プロジェクト。

| お名前 (必須) | コンテンツ | タイプ: | サイトマップ |
|:-----|:-----------|:----:|:----:|
| **OpenHands** | クラウドコーディングエージェントのオープンソースプラットフォームをリードし、一貫してSWE-benchにトップ。 元々 OpenDevin. ～69K+ ⭐ をオープンしました。 | 🟢 | [GitHub](https://github.com/OpenHands/OpenHands) |
| **SWE-agent** | GitHub の問題を取り、カスタム エージェント コンピューター インターフェイスを使用して自動的に修正します。 [NeurIPS 2024] ~19K+ ◀ 2024 | 🟢 | [GitHub](https://github.com/SWE-agent/SWE-agent) |
| **Open SWE** | LangChainの非同期クラウドホスト型コーディングエージェントフレームワークは、LangGraph に Slack/Linear の統合が組み込まれています。 ～8K+ | 🟢 | [GitHub](https://github.com/langchain-ai/open-swe) |
| **Devika** | オープンソースのエージェントソフトウェアエンジニア。指示、研究、およびコードを書き留めます。 Devin 代替. ~18K+ ◀ | 🟢 | [GitHub](https://github.com/stitionai/devika) |
| **AutoCodeRover** | LLM と GitHub の問題解決のための欠陥ローカリゼーションを組み合わせた自動プログラムの改善。 ～2.8K+ ✨ | 🟢 | [GitHub](https://github.com/nus-apr/auto-code-rover) |
| **Agentless** | ソフトウェア開発の問題を解決するための簡単な三相アプローチ(ローカル→修理→検証)。 ~2K+ ◀ | 🟢 | [GitHub](https://github.com/OpenAutoCoder/Agentless) |
| **Devon** | オープンソースのペアプログラマ SWE のコード作成、計画、および研究; Claude、GPT-4、Llama、Ollama をサポートしています。 ～3.5K+ ✨ | 🟢 | [GitHub](https://github.com/entropy-research/Devon) |

### その他の注目すべきリポジトリ

| お名前 (必須) | コンテンツ | サイトマップ |
|:-----|:-----------|:----:|
| **Prompt Engineering Guide (DAIR.AI)** | 決定的なオープンソースガイドとリソースハブ。 3M+学習者。~55K+ ◀ | [GitHub](https://github.com/dair-ai/Prompt-Engineering-Guide) |
| **Awesome ChatGPT Prompts / Prompts.chat** | 世界最大級のオープンソースのプロンプトライブラリ。 すべての主要なモデルのためのプロンプトの1000s。 | [GitHub](https://github.com/f/awesome-chatgpt-prompts) |
| **12-Factor Agents** | 生産グレードのLLMを搭載したソフトウェアを構築する原則。 〜17K + ◀ | [GitHub](https://github.com/humanlayer/12-factor-agents) |
| **NirDiamant/Prompt_Engineering** | 22 ハンズオンJuppyter Notebookチュートリアル。 ~3K+ ◀ | [GitHub](https://github.com/NirDiamant/Prompt_Engineering) |
| **Context Engineering Repository** | プロンプトエンジニアリングを超えてコンテキストデザインに移動するための第一原則のハンドブック。 | [GitHub](https://github.com/davidkimai/Context-Engineering) |
| **AI Agent System Prompts Library** | 生産AIコーディングエージェント(クロードコード、Gemini CLI、Cline、Aider、Rooコード)からのシステムプロンプトのコレクション。 | [GitHub](https://github.com/tallesborges/agentic-system-prompts) |
| **Awesome Vibe Coding** | 自然言語のプロンプトを介してソフトウェアを構築するための245以上のツールとリソースのキュレーションリスト。 | [GitHub](https://github.com/taskade/awesome-vibe-coding) |
| **OpenAI Cookbook** | プロンプト、ツール、RAG、評価のための公式レシピ。 | [GitHub](https://github.com/openai/openai-cookbook) |
| **Embedchain** | データセット上にChatGPTのようなボットを作成するフレームワーク。 | [GitHub](https://github.com/embedchain/embedchain) |
| **ThoughtSource** | 機械思考の科学のためのフレームワーク。 | [GitHub](https://github.com/OpenBioLink/ThoughtSource) |
| **Promptext** | トークンカウントでAIプロンプトのコードコンテキストを抽出してフォーマットします。 | [GitHub](https://github.com/1broseidon/promptext) |
| **Price Per Token** | 200以上のモデルでLM APIの価格を比較します。 | [Website](https://pricepertoken.com/) |
| **OpenPaw** | CLI ツール (CLI)`npx pawmode`Claudeコードをシステムプロンプト(CLAUDE.md + SOUL.md)を人格、メモリ、38のスキルルータで生成することにより、個人アシスタントに変える。 | [GitHub](https://github.com/daxaur/openpaw) |
| **Think Better** | 恒久的に10構造決定フレームワーク(MECE、問題ツリー、プリモルテム)と12の認知バイアス検出器をAIアシスタントプロンプトに注入するオープンソースCLI。 三井物産 | [GitHub](https://github.com/HoangTheQuyen/think-better) |

---

## API について
💻

### オープンAI

| モデル | コンテンツ | 価格(1Mトークン当たりの入力/出力) | 主な特長 |
|:------|:--------|:-----------------------------------|:------------|
| GPT-5.2 / 5.2 Thinking | 400Kの | $1.75 / $14 | 最新のフラッグシップ、90%キャッシュ割引、構成可能な推論 |
| GPT-5.1 | 400Kの | $1.25 / $10 | 前の世代の旗艦 |
| GPT-4.1 / 4.1 mini / nano | 1Mの | $2 / $8 | GPT-4oより最もよい非reasoningモデル、40%速くおよび80%安い |
| o3 / o3-pro | 200Kの | クーポン | ネイティブツールを使用したモデルの解析 |
| o4-mini | 200Kの | コスト効率 | コストクラスでAIMEで最高の高速推論 |
| GPT-OSS-120B / 20B | 128Kの | $0.03 / $0.30 | ファーストオープン級モデル、Apache 2.0 |

主な機能: 応答 API、エージェント SDK、構造化された出力、関数呼び出し、プロンプトキャッシュ(90%割引)、バッチ API(50%割引)、MCPサポート。 [プラットフォームドキュメント](https://platform.openai.com/docs/models)

### Anthropic(クロード)

| モデル | コンテンツ | 価格(1Mトークン当たりの入力/出力) | 主な特長 |
|:------|:--------|:-----------------------------------|:------------|
| Claude Opus 4.6 | 1M(ベータ) | $5 / $25 | 最も強力で最先端のコーディングとエージェントのタスク |
| Claude Sonnet 4.5 | 200Kの | $3 / $15 | 最高のコーディングモデル、61.4% OSWorld(コンピュータ使用) |
| Claude Haiku 4.5 | 200Kの | 速い層 | ニアフロンティア、最速モデルクラス |
| Claude Opus 4 / Sonnet 4 | 200Kの | $15/$75 (オーパス) | Opus: 72.5% SWE-bench、Sonnet 4 パワー GitHub Copilot |

主な機能: ツールの使用、コンピュータ使用、MCP(ここで開始)、プロンプトキャッシュ、Claudeコード CLI、AWSのBedrockおよびGoogle Vertex AIで利用可能な拡張思考。 [API ドキュメント](https://docs.anthropic.com/)

### Google(ジェミニ)

| モデル | コンテンツ | 価格(1Mトークン当たりの入力/出力) | 主な特長 |
|:------|:--------|:-----------------------------------|:------------|
| Gemini 3 Pro Preview | 1Mの | $2 / $12 | ほとんどのインテリジェントなGoogleモデル、2B +に展開 ユーザーの検索 |
| Gemini 2.5 Pro | 1Mの | $1.25 / $10 | コーディング/エージェントのタスクに最適、モデルを考える |
| Gemini 2.5 Flash / Flash-Lite | 1Mの | $0.30/$1.50 · $0.10/$0.40 | 価格パフォーマンスのリーダー |

主な機能: 思考(すべての2.5 +モデル)、Google検索の接地、コード実行、ライブAPI(リアルタイムオーディオ/ビデオ)、コンテキストキャッシュ。 [Google AIスタジオ](https://ai.google.dev/)

### メタ(Llama)

| モデル | 建築設計 | コンテンツ | 主な特長 |
|:------|:------------|:--------|:------------|
| Llama 4 Scout | 109B MoE / 17B アクティブ | 10mの | 単一のH100、multimodal、開いた重量合います |
| Llama 4 Maverick | 400B MoE / 17Bアクティブ、128の専門家 | 1Mの | GPT-4o、オープンウェイトをビート |
| Llama 3.3 70B | デュース | 128Kの | 一致Llama 3.1 405B |

25以上のクラウドパートナー、ハッギングフェイス、およびインフェレンスAPIでご利用いただけます。 [ロラマ](https://ai.meta.com/llama/)

### その他の注目すべきプロバイダー

| プロバイダー | コンテンツ | サイトマップ |
|:---------|:-----------|:----:|
| **Mistral AI** | Mistral 大きい 3 (675B MoE)、Devstral 2、Ministral 3. Apache 2.0。 | [Website](https://mistral.ai) |
| **DeepSeek** | V3.2(671B MoE)、R1(リーソン、MITライセンス)。 1Mトークンあたり$ 0.15 / $ 0.75。 | [Website](https://deepseek.com) |
| **xAI (Grok)** | Grok 4.1 高速: 2M コンテキスト、1M トークンあたり 0.20/$0.50 です。 | [Website](https://x.ai) |
| **Cohere** | コマンド A (111B, 256K コンテキスト), v4 を埋め込む, リランク 4.0. RAGのExcel | [Website](https://cohere.com) |
| **Together AI** | 200以上のモデルをサブ-100msレイテンシで開く。 | [Website](https://together.ai) |
| **Groq** | ~300+トークン/秒の推論を持つLPUハードウェア。 | [Website](https://groq.com) |
| **Fireworks AI** | HIPAA + SOC2 準拠の高速推論 | [Website](https://fireworks.ai) |
| **OpenRouter** | すべてのプロバイダーから300以上のモデルの統合API。 | [Website](https://openrouter.ai) |
| **Cerebras** | ウェーハスケールチップは、最高のトータル応答時間を実現します。 | [Website](https://cerebras.ai) |
| **Perplexity AI** | 引用符で検索認証API。 | [Website](https://perplexity.ai) |
| **Amazon Bedrock** | Claude、Llama、Mistral、Cohereと管理されたマルチモデルサービス。 | [Website](https://aws.amazon.com/bedrock/) |
| **Hugging Face Inference** | API 経由でモデルを開くアクセス | [Website](https://huggingface.co/docs/api-inference/index) |

---

## データセットとベンチマーク
💾

### 主要なベンチマーク (2024–2026)

| お名前 (必須) | コンテンツ | サイトマップ |
|:-----|:-----------|:----:|
| **Chatbot Arena / LM Arena** | 6M+ ユーザは Elo レートされた対面 LLM の比較を投票します。 人間の好みのための事実上の標準。 | [Website](https://lmarena.ai/) |
| **MMLU-Pro** | 14 ドメインの 12,000 以上の卒業生レベルの質問。 NeurIPS 2024スポットライト。 | [GitHub](https://github.com/TIGER-AI-Lab/MMLU-Pro) |
| **GPQA** | 448 "Google-proof" STEMの質問;非専門家のバリデータは34%だけ達成します。 | [arXiv](https://arxiv.org/abs/2311.12022) |
| **SWE-bench Verified** | 実世界GitHubの問題解決のための人間検証済み500-taskサブセット。 | [Website](https://www.swebench.com/) |
| **SWE-bench Pro** | プロのレポス41で1,865タスク。ベストモデルのみ〜23%。 | [Leaderboard](https://scale.com/leaderboard/swe_bench_pro_public) |
| **Humanity's Last Exam (HLE)** | 2,500人の専門家が寄せた質問;トップのAIは10～30%しか得ません。 | [Website](https://agi.safe.ai/) |
| **BigCodeBench** | 7つの領域にわたって1,140のコーディングタスク;AIは、~35.5%対97%の人間の成功を達成します。 | [Leaderboard](https://huggingface.co/spaces/bigcode/bigcodebench-leaderboard) |
| **LiveBench** | 頻繁に更新された質問と合わせ抵抗力がある。 | [Paper](https://openreview.net/forum?id=sKYHBTAxVa) |
| **FrontierMath** | 研究レベルの数学;AIは問題の~2%だけを解決します。 | 研究開発 |
| **ARC-AGI v2** | 流体の知能を測定する抽象的な推論。 | 研究開発 |
| **IFEval** | フォーマット/コンテンツの制約による指示フォロー評価。 | [arXiv](https://arxiv.org/abs/2311.07911) |
| **MLE-bench** | Kaggle-styleタスクによるOpenAIのMLエンジニアリング評価。 | [GitHub](https://github.com/openai/mle-bench) |
| **PaperBench** | 20枚のICML 2024用紙をゼロから再現するAIの能力を評価します。 | [GitHub](https://github.com/openai/preparedness) |

### リーダーボードとメタベンチマーク

| お名前 (必須) | コンテンツ | サイトマップ |
|:-----|:-----------|:----:|
| **Hugging Face Open LLM Leaderboard v2** | MMLU-Pro、GPQA、IFEval、MATHのオープンモデルを評価します。 | [Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) |
| **Artificial Analysis Intelligence Index v3** | 10件の評価を集計します。 | [Website](https://artificialanalysis.ai/) |
| **SEAL by Scale AI** | SWE-bench Pro およびエージェント評価をホストします。 | [Leaderboard](https://scale.com/leaderboard) |

### プロンプトと指示データセット

| お名前 (必須) | コンテンツ | サイトマップ |
|:-----|:-----------|:----:|
| **P3 (Public Pool of Prompts)** | T0 と類似したモデルを訓練するために使用される 270 + NLP タスク用のプロンプトテンプレート。 | [HuggingFace](https://huggingface.co/datasets/bigscience/P3) |
| **System Prompts Dataset** | 944 システム エージェントのワークフローのためのプロンプト テンプレート (by Daniel Rosehill, Aug 2025). | [HuggingFace](https://huggingface.co/datasets/danielrosehill/system_prompts) |
| **OpenAssistant Conversations (OASST)** | 161,443 のメッセージで 35 言語 461,292 品質評価. | [HuggingFace](https://huggingface.co/datasets/OpenAssistant/oasst1) |
| **UltraChat / UltraFeedback** | 整列訓練のための大規模な合成指示と設定データセット。 | フォグレース |
| **SoftAge Prompt Engineering Dataset** | ベンチマーク・プロンプト・パフォーマンスのための10のカテゴリにわたる1,000の多様なプロンプト。 | フォグレース |
| **Text Transformation Prompt Library** | テキスト変換プロンプトの包括的なコレクション(2025年5月)。 | フォグレース |
| **Writing Prompts** | ~300K 人間が語るストーリーは、r/WritingPrompts のプロンプトと組み合わせました。 | [Kaggle](https://www.kaggle.com/datasets/ratthachat/writing-prompts) |
| **Midjourney Prompts** | MidJourneyの公開DiscordからスクレイピングされたテキストプロンプトとイメージURL。 | [HuggingFace](https://huggingface.co/datasets/succinctly/midjourney-prompts) |
| **CodeAlpaca-20k** | 20,000 プログラミングの命令出力の組。 | [HuggingFace](https://huggingface.co/datasets/sahil2801/CodeAlpaca-20k) |
| **ProPEX-RAG** | RAGワークフローにおける迅速な最適化のためのデータセット。 | フォグレース |
| **NanoBanana Trending Prompts** | エンゲージメントによってランク付けされたX/Twitterから1,000以上のキュレーションされたAIイメージプロンプト。 | [GitHub](https://github.com/jau123/nanobanana-trending-prompts) |

### 赤いチーム化と分散データセット

| お名前 (必須) | コンテンツ | サイトマップ |
|:-----|:-----------|:----:|
| **HarmBench** | 標準、コンテキスト、著作権、およびマルチモーダルカテゴリにわたる有害な行動510。 | [Website](https://safetyprompts.com/) |
| **JailbreakBench** | 100つのプロンプトでジェイルブレイクするための堅牢性ベンチマークを開きます。 | 研究開発 |
| **AgentHarm** | 110 の悪意のあるエージェントのタスクは、11 の有害カテゴリを渡します。 | [arXiv](https://arxiv.org/abs/2410.09024) |
| **DecodingTrust** | 243,877は、8つの視点で、信頼を評価するよう求めています。 | 研究開発 |
| **SafetyPrompts.com** | 50以上の安全/赤味データセットを追跡するアグリゲーター。 | [Website](https://safetyprompts.com/) |

---

## モデル
🧠

### フロンティアモデル (2025-2026)

| モデル | プロバイダー | コンテンツ | 重要な強さ |
|:------|:---------|:--------|:-------------|
| **GPT-5.2** | オープンAI | 400Kの | 総合知能, 100% AIME 2025 |
| **Claude Opus 4.6** | アンソロフィック | 1M(ベータ) | コーディング、エージェントタスク、拡張思考 |
| **Gemini 3 Pro** | サイトマップ | 1Mの | #1 LMArena(〜1500 Elo)、マルチモーダル |
| **Grok 4.1** | ツイート ツイート | 2Mの | #2 LMArena (1483 Elo), 低幻覚 |
| **Mistral Large 3** | ミストラルAI | 256Kの | 最高のオープン重量(675B MoE / 41Bアクティブ)、Apache 2.0 |
| **DeepSeek-V3.2** | イマラチオ | 128Kの | 最高値(671B MoE/37Bアクティブ)、MITライセンス |
| **Llama 4 Maverick** | ログイン | 1Mの | GPT-4o (400B MoE/17B アクティブ) をビートします。, 開いた重量 |

### Reasoning モデル

| モデル | 主細部 |
|:------|:-----------|
| **OpenAI o3 / o3-pro** | 87.7% GPQAダイヤモンド。 ネイティブツールの使用。 |
| **OpenAI o4-mini** | ビジュアル推論によるコストクラスで最高のAIME。 |
| **DeepSeek-R1 / R1-0528** | 開いた重量、RL-trained。 AIME 2025の87.5%。 MITライセンス |
| **QwQ (Qwen with Questions)** | 32B推論モデル。 Apache 2.0 の R1と比べる |
| **Gemini 2.5 Pro/Flash (Thinking)** | 構成可能な思考予算で作り付けの推論。 |
| **Claude Extended Thinking** | 目に見えるチェーン・オブ・トゥードおよび用具の使用を用いる雑種のモード。 |
| **Phi-4 Reasoning / Plus** | 14B 推論モデルは、はるかに大きいモデルをライバル. 開いた重量。 |
| **GPT-OSS-120B** | OpenAIのOpen-weightとCoT。O4-miniとの近並み。 Apache 2.0 の |

### 注目のOpen Sourceモデル

| モデル | プロバイダー | 主細部 |
|:------|:---------|:-----------|
| **Qwen3-235B-A22B** | Alibabaの | フラッグシップMoE。強い推論/コード/多言語。 Apache 2.0 の HuggingFaceでダウンロードしたほとんどの家族。 |
| **Gemma 3** | サイトマップ | 270M〜27B。 多項。 128K コンテキスト。 140以上の言語 |
| **OLMo 2/3** | アレンAI | 完全オープン(データ、コード、重量、ログ)。 OLMo 2 32B は GPT-3.5 を上回ります。Apache 2.0 です。 |
| **SmolLM3-3B** | 抱擁の顔 | 外形Llama-3.2-3B. 二重モード推論。 128K コンテキスト。 |
| **Kimi K2** | ムーンショットAI | 32Bアクティブ。 開いた重量。 符号化/アッセンシャル使用のために調整される。 |
| **Llama 4 Scout** | ログイン | 109B MoE/17B アクティブ 10Mトークンコンテキスト。 単一のH100に合います。 |

### コード特化モデル

| モデル | 主細部 |
|:------|:-----------|
| **Qwen3-Coder (480B-A35B)** | 69.6% SWE-bench — オープンソースのコーディングのためのマイルストーン。 256K コンテキスト。 Apache 2.0 の |
| **Devstral 2 (123B)** | 72.2% SWE-bench 検証済み。 7x は、Claude Sonnet よりも費用対効果が高い。 |
| **Codestral 25.01** | Mistralのコードモデル。 80以上の言語 フィル・イン・ザ・ミドルのサポート |
| **DeepSeek-Coder-V2** | 236B MoE / 21B アクティブ。 338 プログラミング言語。 |
| **Qwen 2.5-Coder** | 7B/32B. 92 プログラミング言語. 88.4% HumanEval . Apache 2.0 . |

### ファウンデーションモデル(歴史的参照)

これらのモデルは、重要な概念を確立しましたが、実用的用途に大きく重点を置いています。

| モデル | プロバイダー | ニュース |
|:------|:---------|:-------------|
| GLM-130B | Tsinghuaの特長 | オープンバイリンガル英語/中国語LLM (2023) |
| Falcon 180B | ツイート | 大型オープンジェネレーションモデル (2023) |
| Mixtral 8x7B | ミストラルAI | オープンモデルのための先駆的なMOEアーキテクチャ (2023) |
| GPT-NeoX-20B | エリザタイ | 初期オープンオートレグレッシブLLM |
| GPT-J-6B | エリザタイ | 初期開口腔言語モデル |

---

## AIコンテンツ検出器
🔎

### 一流のコマーシャルの探知器

| お名前 (必須) | 精度: | 主な特長 | サイトマップ |
|:-----|:---------|:------------|:----:|
| **GPTZero** | 要求される99% | 10M+ ユーザ, #1 に G2 (2025). GPT-4/5、Gemini、Claude、Llamaを検出します。 無料でご利用いただけます。 | [Website](https://gptzero.me) |
| **Originality.ai** | 98-100%(ピアレビュー) | 一貫して最も正確に評価される。 AI検出+盗作+事実チェックを組み合わせる。 から $14.95/月. | [Website](https://originality.ai) |
| **Turnitin AI Detection** | 修正されていないAIテキストの98% + | アカデミーでドミナント。 AIバイパス/ヒューマナイザー検出開始(Aug 2025) 機関的なライセンス。 | [Website](https://www.turnitin.com/solutions/topics/ai-writing/) |
| **Copyleaks** | 要求される99%+ | 30以上の言語でAIを検出するエンタープライズツール LMS の統合。 | [Website](https://copyleaks.com) |
| **Winston AI** | 99.98% 請求 | スキャンされた文書、AIのイメージ/deepfakeの検出のためのOCR。 11言語 | [Website](https://gowinston.ai) |
| **Pangram Labs** | 99.3%(カラー2025) | COLING 2025の共有タスクで最も高いスコア。 "humanized" テキストの 100% TPR。 97.7% 広告主の堅牢性。 | [Website](https://www.pangram.com) |

### 自由および研究の探知器

| お名前 (必須) | コンテンツ | サイトマップ |
|:-----|:-----------|:----:|
| **Binoculars** | 2つのLLM間の交差perplexityを使用してオープンソースの研究の探知器。 | [arXiv](https://arxiv.org/abs/2401.12070) |
| **DetectGPT / Fast-DetectGPT** | 元のテキストとパーチャネーションのログ確率を比較する統計手法。 | [arXiv](https://arxiv.org/abs/2301.11305) |
| **Openai Detector** | AI-writtenテキスト(OpenAIディテクタPythonラッパー)を示すAI分類器  | [[GitHub]](https://github.com/promptslab/openai-detector) |
| **Sapling AI Detector** | 無料のブラウザベースの検出器(最大2,000文字)。 いくつかの研究で97%の精度。 | [Website](https://sapling.ai/) |
| **QuillBot AI Detector** | 無料、サインアップは必要ありません。 | [Website](https://quillbot.com/ai-content-detector) |
| **Writer AI Content Detector** | 色分けされた結果が付いている自由な用具。 | [Website](https://writer.com/ai-content-detector/) |
| **ZeroGPT** | 複数の学術研究で評価される普及した自由な探知器。 | [Website](https://www.zerogpt.com/) |

### 透かしのアプローチ

| お名前 (必須) | コンテンツ | サイトマップ |
|:-----|:-----------|:----:|
| **SynthID (Google DeepMind)** | 統計トークンサンプリングによるAIテキスト、画像、音声の透かし。 Google製品に展開 | [Website](https://deepmind.google/technologies/synthid/) |
| **OpenAI Text Watermarking** | 2025年(昭和20年)に実験を続けた。 研究は、脆弱性の懸念を示しています。 | 実験実験 |

**重要な洞窟:** 検出器は100%の正確さを主張しません。 混合された人間/AI のテキストは検出しにくいまま (50-70% の正確さ)。 主軸の堅牢性は大きく変化します。 AI検出市場は、~$2.3B (2025) から $15B に 2035 で成長する予定です。

---

## 出版書籍
📖

### プロムトエンジニアリング

| タイトル | 著者(s) | パブリッシャー | カレンダー |
|:------|:----------|:---------|:-----|
| **Prompt Engineering for LLMs** | ジョン・ベリーマン&アルバート・ジーグラー | オレイリー | 2024 |
| **Prompt Engineering for Generative AI** | ジェームズ・フェニックス&マイク・テイラー | オレイリー | 2024 |
| **Prompt Engineering for LLMs** | トーマス・R・カルドウェル | 独立した | 2025 |

### LLMアプリケーション開発

| タイトル | 著者(s) | パブリッシャー | カレンダー |
|:------|:----------|:---------|:-----|
| **AI Engineering: Building Applications with Foundation Models** | チップハイヤー | オレイリー | 2025 |
| **Build a Large Language Model (From Scratch)** | セバスチャン・ラシュカ | マンニング | 2024 |
| **Building LLMs for Production** | ルイ・フランソワ・ブチャード&ルーイ・ピーターズ | オレイリー | 2024 |
| **LLM Engineer's Handbook** | ポール・イウスチン&マキシム・ラボンヌ | パックト | 2024 |
| **The Hundred-Page Language Models Book** | アンドリ・ブルコフ | 自己出版 | 2025 |

### AIエージェント

| タイトル | 著者(s) | パブリッシャー | カレンダー |
|:------|:----------|:---------|:-----|
| **Building Applications with AI Agents** | マイケル・アルバダ | オレイリー | 2025 |
| **AI Agents and Applications** | ロベルト・インファンテ | マンニング | 2025 |
| **AI Agents in Action** | ミケラルランハム | マンニング | 2025 |

### 生産・信頼性・セキュリティ

| タイトル | 著者(s) | パブリッシャー | カレンダー |
|:------|:----------|:---------|:-----|
| **LLMs in Production** | クリストファー・ブランソー&マシュー・シャープ | マンニング | 2025 |
| **Building Reliable AI Systems** | ラッシュシャハイ | マンニング | 2025 |
| **The Developer's Playbook for LLM Security** | スティーブ・ウィルソン | オレイリー | 2024 |

---

## コース
👩‍🏫

### ショートコース

- [開発者向けChatGPT Prompt Engineering](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) — Andrew Ng と OpenAI の Isa Fulford の共同キャッチ。 基礎的な出発点。 (ディープラーニング) AI(人工知能)
- [ChatGPT APIでシステムの構築](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/) — 生産のための複数のステップLMシステム設計。 (ディープラーニング) AI(人工知能)
- [LangGraphのAIエージェント](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/) — ツールの使用と研究のエージェントのデータフロー。 (ディープラーニング) AI(人工知能)
- [LlamaIndex の建築代理店 RAG](https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/) — RAGの研究の代理店の構造。 (ディープラーニング) AI(人工知能)
- [LangChainの機能、ツール、エージェント](https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/) — 機能呼出しおよび代理店の建物。 (ディープラーニング) AI(人工知能)
- [ビジョンモデルの試作エンジニアリング](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) — 視覚的なプロンプト技術。 (ディープラーニング) AI(人工知能)

### 大学・プラットフォームコース

- [プロムトエンジニアリング専門化(ヴァンダービルト)](https://www.coursera.org/specializations/prompt-engineering) — ジュリーズ博士による3コースシリーズ 先端PEの基礎を覆う白(Coursera)
- [LLMを用いた人工知能(DeepLearning.AI + AWS)](https://www.coursera.org/learn/generative-ai-with-llms) — LLM のライフサイクル、トランス、RLHF、展開。 (カルセラ)
- [スタンフォード CS336: スクラッチから言語モデリング](https://cs336.stanford.edu/) — LLM エンドツーエンドビルド (スタンフォード、2024–2026)
- [MIT 6.S191:ディープラーニング入門](https://introtodeeplearning.com/) — LLMとジェネレーションAIを含む年間コース。 (MIT、2024–2026)
- [AIブートキャンプのための完全なプロンプト工学](https://www.udemy.com/course/prompt-engineering-for-ai/) — GPT-5、DSPy、LangGraph、エージェントアーキテクチャをカバーします。 58K+の評価。 (平成20年2月更新)

### 無料プラットフォームコース

- [Google のプロンプトの要素](https://grow.google/prompting-essentials/) — 5ステップのプロンプト設計、メタプロンプト、ジェミニ。 6時間以内
- [Microsoft Azure AIの基礎: ジェネレーションAI](https://learn.microsoft.com/en-us/training/paths/introduction-generative-ai/) — LLM、プロンプト、エージェント、Azure OpenAIをカバーする無料の学習パス。
- [抱擁顔LMコース](https://huggingface.co/learn/llm-course/chapter1/1) — コミュニティ主導のコースは、トランス、微調整、モデルの推論を構築します。
- [抱擁顔AIエージェントコース](https://huggingface.co/learn) — 練習するエージェント理論。 100K+登録学生

### 進学コース

- [みんなでチャットGPT](https://learnprompting.org/courses/chatgpt-for-everyone)
- [プロムトエンジニアリングの紹介](https://learnprompting.org/courses/introduction_to_prompt_engineering)
- [高度の敏速な工学](https://learnprompting.org/courses/advanced-prompt-engineering)
- [プロンプトハッキング入門](https://learnprompting.org/courses/intro-to-prompt-hacking)
- [高度なプロンプトハッキング](https://learnprompting.org/courses/advanced-prompt-hacking)
- [ビジネスプロフェッショナル向けAIエージェントの育成について](https://learnprompting.org/courses/introduction-to-agents)
- [AIの安全](https://learnprompting.org/courses/ai-safety)

---

## チュートリアルとガイド
📚

### 公式プロバイダーガイド

- [OpenAI技術ガイド](https://platform.openai.com/docs/guides/prompt-engineering) — 包括的なGPT-4.1/5のプロンプト、推論モデル、構造化された出力、有能なワークフローをカバーします。 継続的な更新。
- [OpenAI GPT-4.1 プロファイルガイド](https://cookbook.openai.com/articles/gpt-4-1-prompting-guide) [2025] — 構造化されたエージェントのようなプロンプト設計: ゴールの持続性、ツールの統合、長いコンテキスト処理。
- [Anthropic Prompt エンジニアリングの概要](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) — 反復的なプロンプト デザイン、XML タグ、チェーン・オブ・ザ・オブ・ザ・シード、ロール割り当て。 プロンプトジェネレータが含まれています。
- [Anthropic Claude 4ベストプラクティス](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices) [2025–2026] — 並列ツールの実行、思考力、画像処理。
- [Anthropic:AIエージェントの効果的なコンテキストエンジニアリング](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) [2025] — 迅速なエンジニアリングからコンテキストエンジニアリングへの進化:エージェントの状態、メモリ、ツール、MCP。
- [GoogleのGeminiのプロファイト戦略](https://ai.google.dev/docs/prompt_best_practices) — Vertex AI や AI Studio による Gemini のマルチモーダル プロンプト
- [Azure AI StudioのMicrosoft Promptエンジニアリング](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering) — ツールの呼び出し、関数の設計、いくつかのショットのプロンプト、プロンプトのチェーン。

### コミュニティと独立したガイド

- [プロンプトエンジニアリングガイド(DAIR.AI / プロンプトガイド.ai)](https://www.promptingguide.ai/) — ほとんどの包括的なオープンソースガイド。 18以上の技術、モデル固有のガイド、研究論文。 3M+学習者 コンテクストエンジニアリングは今も含まれています。
- [プロンプトを学ぶ (learnprompting.org)](https://learnprompting.org/) — 構成された自由なプラットホーム。 高度なPE、AIセキュリティ、HackAPrompt競争への初心者。
- [IBM 2026 プロンプトエンジニアリングガイド](https://www.ibm.com/think/prompt-engineering) [2026] — キュレーションされたツール、チュートリアル、実際のPythonコードを使った例。
- [Anthropicインタラクティブチュートリアル](https://github.com/anthropics/prompt-eng-interactive-tutorial) — 9 チャプター ジュピター ノート コースとハンズオン エクササイズ.
- [Lilian Wengの試作技術ガイド](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/) [2023] — OpenAIの研究者からの技術ブログを高く評価しました。
- [Googleのプロンプトエンジニアリングガイド(68ページPDF)](https://www.reddit.com/r/PromptEngineering/comments/1kggmh0/google_dropped_a_68page_prompt_engineering_guide/) [2025] — コンクリートパターンでジェミニのための内部スタイルのベストプラクティスガイド。
- [DigitalOcean: プロンプトエンジニアリングベストプラクティス](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices) [2025] — 更新されたガイドの要約テクニック: いくつかのショット、チェーン・オブ・オーダー、ロール・プロンプトなど
- [アカッシュ・グプタ:2025年 試作エンジニアリング](https://news.aakashg.com) [2025] — OpenAI、Shopify、GoogleでAIを出荷する知恵を持つ実用的なガイド。
- [OpenAI API による迅速なエンジニアリングのベストプラクティス](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api) — OpenAIの入門ベストプラクティス。
- [OpenAIクックブック](https://github.com/openai/openai-cookbook) — 関数呼び出し、RAG、評価、複雑なワークフローの公式レシピ。
- [Microsoft のプロンプト エンジニアリング ドキュメント](https://microsoft.github.io/prompt-engineering) — Microsoft のオープン プロンプト エンジニアリング リソース。
- [DALLE プロンプトブック](https://dallery.gallery/the-dalle-2-prompt-book) — テキスト・ツー・イメージのプロンプトのためのビジュアル・ガイド。
- [ベスト100 +安定した拡散プロンプト](https://mpost.io/best-100-stable-diffusion-prompts-the-most-beautiful-ai-text-to-image-prompts) — コミュニティキュレーションされたイメージ生成プロンプト。
- [ヴァイブエンジニアリング(マネージャー)](https://www.manning.com/books/vibe-engineering) — Tomasz Lelek & Artur Skowronskiによる自然言語のプロンプトでソフトウェアを構築する。

---

## ビデオ
🎥

- [アンドレジ・カルパシー:「LMSへのディープ・ダイブ」と「LMSの使い方」](https://www.youtube.com/@AndrejKarpathy) [2024–2025] — 2024–2025の最も影響力のあるAIビデオの2つ。 実用的利用パターンに従った包括的な技術深部ダイビング。
- [カルパシー:「AI時代のソフトウェア」(YC AI Startup School)](https://karpathy.ai/) [2025] — コイン化された「バイブコーディング」(2025年2月)と「コンテクストエンジニアリング」(2025年)。
- [カルパシー:ニューラルネットワーク:ゼロからヒーローへ](https://www.youtube.com/@AndrejKarpathy) [2023–2024] — バックプロパゲーションからGPTまでのフルレクチャーシリーズの構築
- [3Blue1ブラウン:ニューラルネットワークシリーズ](https://www.youtube.com/@3blue1brown) [2024年更新] — トランスと注意メカニズムのアイコン的なアニメーションビジュアルの説明。 7M + 加入者.
- [AIの説明](https://www.youtube.com/@aiexplained-official) [2024–2025] — 紙、モデルの機能、およびPE開発を分解する長期分析。
- [サム・ウィットヴェン](https://www.youtube.com/@samwitteveen) [2024–2025] — プロンプトエンジニアリング、LangChain、RAG、およびエージェントに関する実践的なチュートリアル。
- [マタイ・バーマン](https://www.youtube.com/@matthew_berman) [2024–2025] — モデルリリースと実用LLM使用量をカバーする人気チャンネル。 600K + 加入者.
- [DeepLearning.AI YouTube動画](https://www.youtube.com/@Deeplearningai) [2024–2026] — 組織化されたレッスン、コースのプレビュー、およびAndrew NgがエージェントとAIのキャリアについて話します。
- [Lex Fridman Podcast(AIエピソード)](https://www.youtube.com/@lexfridman) [2024–2025] — LLMのAltman、Hinton、Amodei、プロンプト、および安全に関する長年にわたるインタビュー。
- [ICSE 2025:AIwareのプロンプト工学のチュートリアル](https://conf.researchr.org/details/icse-2025/icse-2025-tutorials/) [2025] - プロンプトパターン、脆弱性、アンチパターン、および最適化DSLをカバーする会議チュートリアル。
- [CMUアドバンストNLP 2022: プロンプト](https://youtube.com/watch?v=5ef83Wljm-M) — 迅速な方法に関する基礎学術講演会
- [ChatGPT:初心者のための5つのプロンプト工学の秘密](https://www.youtube.com/watch?v=2zg3V66-Fzs) — 初心者向けのアクセス可能なイントロ。

---

## コミュニティ
🤝

### Discord サーバー

- [プロンプトを学ぶ](https://learnprompting.org/discord) — 40,000人以上 コース、ハッカソン、HackAPromptの競争との最も大きいPEの分解。
- [PromptsLab Discordの検索結果](https://discord.gg/m88xfYMbK6)  - コミュニティ
- [ミッドジャーニー](https://discord.gg/midjourney) — 1M+会員 テキスト・ツー・イメージのプロンプト共有のための第一次ハブ。
- [OpenAIの記録](https://discord.gg/openai) — GPTs、Sora、DALL-E、API のヘルプのためのチャネルとの公式コミュニティ。
- [人類学の記録](https://discord.gg/anthropic) — AI開発のコラボレーションのための公認クラウデコミュニティ
- [抱擁の表面のdiscord](https://discord.gg/huggingface) — モデルディスカッション、ライブラリサポート、コミュニティイベント。
- [フローGPT](https://flowgpt.com/) — 33K+会員 ChatGPT、DALL-E、安定した拡散、Claude を渡る 100K+ プロンプト。

### レッドディット

- [r/プロムトエンジニアリング](https://reddit.com/r/PromptEngineering) — 迅速な技術やディスカッションのための専用のサブreddit。
- [r/チャットGPT](https://reddit.com/r/ChatGPT) — 10M+会員 ChatGPTユーザーとプロンプト共有のためのプライマリハブ。
- [r/ローカルLLaMA](https://reddit.com/r/LocalLLaMA) — ローカルでオープンソースLMを実行するための高度な技術コミュニティ。
- [r/クラウデAI](https://reddit.com/r/ClaudeAI) — AnthropicのClaudeコミュニティ:プロンプト共有、APIのヒント、モデル比較。
- [r/機械学習](https://reddit.com/r/MachineLearning) — 学術指向のML研究の議論。
- [r/OpenAIの特長](https://reddit.com/r/OpenAI) — OpenAI製品とAPIのディスカッション。
- [r/ステーブル拡散](https://reddit.com/r/StableDiffusion) — AIアートのプロンプトとワークフローの450K+メンバー。
- [r/ChatGPTPromptGeniusの特長](https://reddit.com/r/ChatGPTPromptGenius) — 35K+ のメンバーは、プロンプトを共有し、拒否します。


### フォーラムとプラットフォーム

- [OpenAI開発者コミュニティ](https://community.openai.com/) — APIヘルプ、ベストプラクティス、プロジェクト共有の公式フォーラム。
- [抱擁の顔コミュニティ](https://huggingface.co/) — オープンソースAIコラボレーションのためのハブ。
- [DeepLearning.AIコミュニティ](https://community.deeplearning.ai/) — 学習者とAIのキャリアを語るフォーラム
- [少ない間違った](https://www.lesswrong.com/) —AI機能と安全に関する詳細な技術投稿。
- [AI関連フォーラム](https://www.alignmentforum.org/) — 特化したアライメント調査の議論。
- [チャビティー](https://civitai.com/) — モデル、LoRA、およびプロンプトを共有するためのAI作成プラットフォームを生成します。

### GitHub 組織

- [ランチャイン](https://github.com/langchain-ai) — オープンソースLLMアプリフレームワーク。 100K+ 星.
- [プロムツラボ](https://github.com/promptslab)  — 生成モデル | 試作 | LLM 
- [抱擁の顔](https://github.com/huggingface) —中心ハブ:変圧器、拡散器、データセット、TRL。
- [DSPy(スタンフォードNLP)](https://github.com/stanfordnlp/dspy) — 体系的なプロンプト最適化のためのコミュニティを成長させる。
- [オープンAI](https://github.com/openai) — オープンソースモデル、ベンチマーク、ツール。

---

<!-- AUTORESEARCH-START -->
## 🔬 自動研究開発・自己改善エージェント
> 自動同期 [素晴らしいオートリサーチ](https://github.com/alvinunreal/awesome-autoresearch) ・最終同期:2026-10-03

### 一般購入者

- [kayba-ai/再帰的改善](https://github.com/kayba-ai/recursive-improve) — エージェントが実行トレースをキャプチャし、失敗パターンを分析し、ターゲットを絞った修正を継続または逆転させた評価を適用する、再帰的自己改善フレームワーク。
- [vukrosic/自動研究](https://github.com/vukrosic/auto-research) — Docs 専用の制御面で、自動的な AI 研究ラボ — ヒューマンディレクションとエージェントの実行のためのファイルベースの動作モデル。
- [uditgoenka/オートリサーチ](https://github.com/uditgoenka/autoresearch) — Claudeコードは、ソフトウェア、ドキュメント、セキュリティ、出荷、デバッグ、その他の測定可能な目標のための再利用可能なループにAutoresearchを一般化するスキルです。
- [leo-lilinxiao/codex-autoresearchの特長](https://github.com/leo-lilinxiao/codex-autoresearch) — 再開サポート、実行中のレッスン、オプションの並列実験、およびモード固有のワークフローによるCodexネイティブオートリサーチスキル。
- [junjunjunbong/研究ループ](https://github.com/junjunjunbong/research-loop) — コードックスとクロードコードのAutoresearch-style Agent のスキルは、決定的なランナー、計画ハッシュの承認、分離されたGitのワークツリー、定性メトリック評価、および付随する実験レジャーです。
- [xieyulai/ステア](https://github.com/xieyulai/steer) — コーディングエージェントがトレーニングコードを編集し、タスク、スコアラー、エビデンスが固定される間、ラウンドを実行するための準拠実験フレームワーク。
- [SeeleAI/歯](https://github.com/SeeleAI/Thoth) — ダッシュボード・ファースト・クロード・コードとコードックス・ランタイム(Autoresearch)、耐久性のあるラン、ロックされたワークアイテム、可視式レジャー、およびレビュー可能な評決。
- [supratikpm/ジュミニオートリサーチ](https://github.com/supratikpm/gemini-autoresearch) — Gemini CLI は、任意の測定可能な目標に自動検索を一般化します。 Gemini-native: ループ内のライブ検証ソースとして Google Search の接地を使用して、--yolo --prompt と 1M トークンコンテキストを介して真のヘッドレス一晩モード。 また、.agents/skills/を介してAntigravity IDEで動作します。
- [davebcn87/pi-autoresearch](https://github.com/davebcn87/pi-autoresearch) — `pi` 拡張プラス 永続実験ループ、ライブメトリック、自信トラッキング、および再開可能なオートリサーチセッション用のダッシュボード。
- [drivelineresearch/autoresearch-claudeコード](https://github.com/drivelineresearch/autoresearch-claude-code) — クロードコードプラグイン/スキルポート `pi-autoresearch`, クリーンな実験ループワークフローとコンクリートバイオメカニクスのケーススタディで.
- [Greyhaven-ai/autocontextの特長](https://github.com/greyhaven-ai/autocontext) — リピートされたエージェントの改善のためのクローズドループ制御面、評価、永続的な知識、段階的な検証、およびより安いローカルランタイムへのオプション蒸留。
- [ネクプットン/アックス](https://github.com/Necmttn/ax) —AIのコーディングエージェントのためのローカルレトロなループ:セッショントレースをキャプチャし、提案に繰り返し摩擦を回し、実験として受け入れられた修正を追跡します。
- [jmilinovich/ゴルムド](https://github.com/jmilinovich/goal-md) — autoresearch を一般化 `GOAL.md` エージェントが最初に、最適化できる前に測定可能なフィットネス機能を構築しなければならない再投稿のためのパターン。
- [james-s-tayler/lazy-developer](https://github.com/james-s-tayler/lazy-developer) — Claude Code は、GOAL.md をエンジンとして使用し、最適化の目標(カバー、テストスピード、ビルドスピード、複雑性、LOC、パフォーマンス)の優先的な順序で自動検索をオーケストするスキルです。 スタンドアローンとラルフモードのマルチインスタンスの実行をサポートします。
- [可変的な州-inc/autoresearch-at-home](https://github.com/mutable-state-inc/autoresearch-at-home) — 実験の主張、共有されたベストコンフィグの同期、仮説の交換、および複数の単一GPUの代理店を渡るswarm-styleの調整を加える上流オートレsearchの共同フォーク。
- [zkarimi22/autoresearch-anything](https://github.com/zkarimi22/autoresearch-anything) — autoresearch を一般化 **測定可能なメトリック** — システムプロンプト、API パフォーマンス、ランディングページ、テスト スイート、設定 チューニング、SQL クエリ。 「それを測定できるなら、それを最適化することができます」
- [Entrpi/autoresearch どこでも](https://github.com/Entrpi/autoresearch-everywhere) — ハードウェアの設定を自動検出し、ループを開始するクロスプラットフォーム拡張。 オートリサーチの「接着剤と一般化」の半分。
- [ShengranHu/ADASの特長](https://github.com/ShengranHu/ADAS) — **エージェントシステムの自動設計** — ICLR 2025. リリース コードでそれらをプログラミングすることにより、新しいエージェントアーキテクチャを発明するメタエージェント。
- [MaximeRobeyns/自分自身_改善_プログラミング_エージェント](https://github.com/MaximeRobeyns/self_improving_coding_agent) — **サインイン**: 自己改善のコーディング 独自のコードベースを編集するエージェント。 ICLR 2025 ワークショップ用紙は、コーディングベンチマークの足場レベルの自己改善を実証します。
- [peterskoett/自己改善の試薬](https://github.com/peterskoett/self-improving-agent) — リフレクションとメタ学習サイクルを備えた代替自己改善エージェントアーキテクチャ。
- [メトオートアイ/HGM](https://github.com/metauto-ai/HGM) — **Huxley-Gödelマシン** コーディングエージェントは、メタレベルの最適化によるSWE-benchのパフォーマンスに自己改善を適用します。
- [ゲパアイ/ゲパ](https://github.com/gepa-ai/gepa) — **GEPA(ジェネティック・パレット)** — ICLR 2026 経口. ベンチマークの RL (GRPO) を出力する反射プロンプトの進化。 自然な言語反射を使用して任意のメトリックに対して任意のテキストパラメータを最適化します。
- [sendient-agi/エボスキル](https://github.com/sentient-agi/EvoSkill) — コーディングエージェントの自動化されたスキルの発見: 再利用可能なスキルとベンチマークに対する失敗した軌跡からのプロンプトを進化させ、Claudeコード、Codex CLI、OpenCode、OpenHands、Gooseをサポートしています。
- [MrTsepa/自動車](https://github.com/MrTsepa/autoevolve) — GEPA-inspired オートリサーチ: ミュートコード戦略、ヘッドツーヘッドの評価、Elo/Bradley-Terry によるレート、Pareto フロントからのブランチ。 エージェントは、ターゲットのミューテーションにマッチトを読み込みます。 クロードコードのスキルとして機能します。
- [HKUDS/クローチーム](https://github.com/HKUDS/ClawTeam) — エージェントは、Autoresearch のインテリジェンスをスモード — 並列 GPU 研究の方向をスモールドし、エージェント全体で作業を分散し、結果を集計します。
- [オーケストラ・リサーチ/AI-リサーチ-SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs) — 2ループアーキテクチャ(内部最適化+外部合成)によるオートリサーチオーケストレーションを含む包括的なスキルライブラリ。
- [WecoAI/aidemlの特長](https://github.com/WecoAI/aideml) — **アディッド**: ツリーリサーチ ML エンジニアリングエージェントは、反復コード生成と評価でモデル性能を自律的に向上させます。
- [Weco.ai(ウィコ)](https://weco.ai) — **ウェコー**: 保守性、実験追跡、管理された実行による AIDE 用のクラウドプラットフォーム — オートリサーチ ループを生成します。

### 研究・エージェントシステム

- [目指すラボ/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) — 文献レビュー、実験、分析、ピアレビュー、およびペーパードラフトにトピックを回すエンドツーエンドの研究パイプライン。 オートリサーチよりも広いが、同じ系統で明らかに。
- [OpenLAIR/dr クロー](https://github.com/OpenLAIR/dr-claw) — シーケンシャル・アイデア・ツー・ペーパー・パイプラインおよび統合された自動調査用具のパックが付いているオープンソースの研究のワークスペース。
- [OpenRaiser/ナノリサーチ](https://github.com/OpenRaiser/NanoResearch) — 実験を計画し、コードを生成し、ローカルまたはSLURMでジョブを実行し、実際の結果を分析し、それらの出力に基づいた論文を書き込みます。
- [カストアーク/アーク](https://github.com/kaust-ark/ARK) — **アーク(自動研究キット)**: アイデア + 会場 → ペーパーパイプラインオーケティング 6 エージェント — 提案分析、文献検索、Slurm 実験、LaTeX ドラフト、反復的なピアレビュー。 CLI、Webダッシュボード、またはTelegramを介して制御。
- [wanshuiyin/Auto-claudeコード調査眠り](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) — クロードコードやその他のエージェントのMarkdown-firstリサーチワークフローで、自律的な文献レビュー、実験、ペーパー反復、クロスモデルの批評を中心にした。
- [skyllwt/AutoSciの特長](https://github.com/skyllwt/AutoSci) — カルパシーのLM-Wikiビジョンを実現し、クロードコード上に構築されたWiki中心のフルライフサイクルリサーチプラットフォーム。 20以上のスキルは、フルループをカバーします:ingest → ideate →ノベルティチェック → 実験設計 / 実行 / eval → 論文執筆. 研究状態は、インタラクティブなグラフで構造化されたナレッジwikiに住んでいます。
- [シビルリサーチチーム/AutoResearch-SibylSystem](https://github.com/Sibyl-Research-Team/AutoResearch-SibylSystem) — Claudeコード上に構築された完全自動AI科学者、explicit AutoResearch lineage、マルチエージェント研究反復、GPU実験実行、および自己進化する外部ループ。
- [wjc2830/Easy-Auto研究用DeepLearning](https://github.com/wjc2830/Easy-AutoResearch-for-DeepLearning) — 6つのロール、バージョンアップされた実験、エビデンスチェック完了を横断するオートリサーチスタイル、人間によるディープラーニング・ループを実行するクロード・コード・スキル。
- [eimenhmdt/自動車研究者](https://github.com/eimenhmdt/autoresearcher) — 科学的なワークフローを自動化するための早期オープンソースパッケージ。現在、文学レビューの生成を中心に、より広範な自律的な研究に向けた包括的に取り組んでいます。
- [ハイパースペクタイ/アジ](https://github.com/hyperspaceai/agi) — 自律的なエージェントが実験を実行し、ゴシップ検索を行い、CRDTのリーダーボードを維持し、複数の研究領域を横断するGitHubへのアーカイブ結果を記録する、分散型、ピアツーピアリサーチネットワーク。
- [ヒト・エージェント・社会/CORAL](https://github.com/Human-Agent-Society/CORAL) — **コーラル**: オープンエンドの発見のための自動マルチエージェントの進化([arXiv:2604.01658](https://arxiv.org/abs/2604.01658))。 永続的な記憶、非同期の実行、およびハートビートベースの介入を含む長期にわたるエージェント。10数学/アルゴリズム/システムタスクのSOTA。
- [サカナAI/AI科学者](https://github.com/SakanaAI/AI-Scientist) — **AI科学者**: 完全な自動科学の発見のための最初の広範囲システム。 アイデアの生成から、人間の監理を最小限にとりまとめた論文執筆まで。
- [SakanaAI/AI科学者v2](https://github.com/SakanaAI/AI-Scientist-v2) — ワークショップレベルの自動科学的発見は、有能なツリー検索による。 テンプレートの依存性を v1 から削除し、研究領域全体で一般化します。
- [AweAI-Team/アイ・サイエンティスト](https://github.com/AweAI-Team/AiScientist) — **アイサイエンティスト**: 階層的なオーケストレーションとFile-as-Busのコーディネートで長時間水平なML研究ラボ — ワークスペースファイルは記録の耐久性のあるシステムとして機能します。 オートノームースペーパーリプロダクション(PaperBench)と競争スタイルのMLE-Benchの反復ループを固定された計算/時間予算下に移動します。 ()[arXiv 2604.13018の特長](https://arxiv.org/abs/2604.13018))
- [HKUDS/AI研究者](https://github.com/HKUDS/AI-Researcher) — NeurIPS 2025紙。 エンドツーエンドの研究自動化:仮説 → 実験 → 原稿 → ピアレビュー. 生産バージョン [ノビックス・サイエンス](https://novix.science/chat).
- [openags/オートリサーチ](https://github.com/openags/Auto-Research) — **オープンAGS**: 全研究ライフサイクルにおけるAIエージェントのチームをオーケスト―リットレビュー、仮説生成、実験、原稿執筆、ピアレビュー。
- [SamuelSchmidgall/エージェントラボラトリー](https://github.com/SamuelSchmidgall/AgentLaboratory) — エンドツーエンドの自律的な研究ワークフロー: アイデア → 文献レビュー → 実験 → レポート。 autonomous および co-pilot モードを両方支えて下さい。
- [エージェントRxiv](https://agentrxiv.github.io/) — エージェント・ラボがプレプリント・サーバーを共有し、互いに作業を反復的に構築する共同自律的な研究フレームワーク。
- [JinheonBaek/研究エージェント](https://github.com/JinheonBaek/ResearchAgent) — LLMを用いた科学文献の反復的研究アイデアの生成。 マルチエージェントのレビューとフィードバックループ。
- [du-nlp-lab/MLR-コピロー](https://github.com/du-nlp-lab/MLR-Copilot) — 自動ML研究フレームワーク — アイデアを生成し、実験を実施し、結果を分析します。
- [MASWorks/ML-エージェント](https://github.com/MASWorks/ML-Agent) — 自律的なMLエンジニアリングのためのLMMエージェントの補強 試行錯誤からモデル性能を向上
- [PouriaRouzrokh/Latteレビュー](https://github.com/PouriaRouzrokh/LatteReview) — ローコード Python パッケージ **自動体系的な文献レビュー** AI搭載エージェントによる
- [LitLLM/LitLLMの特長](https://github.com/LitLLM/LitLLM) — RAGを用いたAIを用いた文献レビューアシスタントは、学術ライティングにおける正確かつ適切に構成された関連作業セクションで役立っています。
- [エージェントラボ](https://agentlaboratory.github.io/) — 三相研究パイプライン: 文学レビュー → 実験 → レポート作成、各フェーズの専門エージェント。
- [ハッピーハッピー・ジュン/ライティング・ドライブ・オートリサーチ](https://github.com/happyhappy-jun/writing-driven-autoresearch) — Autoresearch スタイルのハーネスは、最初の分から提出された紙を保持し、その草案のクレームからすべての実験を駆動し、変更→測定→検証→修正をループします。 第1位に [ラルフソン@ICML 2026](https://luma.com/hjuo7auc) autonomous-researchハッカソン。
- [オートリサーチ工場/アゴン](https://github.com/AutoResearch-Factory/Agon) — エンドツーエンドのリサーチオーケストレーターが1つのコーナーストーンの原則、Prompt Economy(再利用可能なループ、ワンオフプロンプトではなく)、5つの支持ルールに基づいて構築された。10以上の懲戒律を横断する科学者/コーダ/オーディオターループを実行し、オートリサーチとして同じ再利用可能なループは、完全な研究プログラムにスケールアップしました。

### プラットホームの港及びハードウェア フォーク

- [gianfrancopiana/openclaw自動研究](https://github.com/gianfrancopiana/openclaw-autoresearch) — pi-autoresearchのOpenClawポート;統計的な自信のスコアリングと任意の最適化ターゲットのための自律実験ループ。
- [miolini/autoresearch-macos(ミオリンリ)](https://github.com/miolini/autoresearch-macos) — オリジナルのループ形状を維持しながら、Apple Silicon / MPSの上流オートリサーチを適応させる、広く採用されたmacOSフォーク。
- [trevin-creator/autoresearch-mlxの](https://github.com/trevin-creator/autoresearch-mlx) — MLX ネイティブ Apple シリコン ポートは、上流の固定ウィジェットを維持します。 `val_bpb` PyTorch/CUDA の依存性を完全に除去する間ループ。
- [jsegov/autoresearch-win-rtx ディレクティブ](https://github.com/jsegov/autoresearch-win-rtx) — Windows ネイティブ RTX フォークは、 NVIDIA GPU を消費し、 明示的な VRAM の床と実用的なデスクトップのセットアップ パスに焦点を当てています。
- [iii-hq/n-オートリサーチ](https://github.com/iii-hq/n-autoresearch) — 構造化された実験追跡、適応検索戦略、クラッシュリカバリ、および古典的な周りのクエリ可能なオーケストレーションを備えたマルチGPUオートリサーチインフラストラクチャ `train.py` ループ。
- [lucasgelfond/autoresearch-webgpu](https://github.com/lucasgelfond/autoresearch-webgpu) — エージェントがトレーニングコードを生成し、実験をブラウザ/WebGPU ポートで実行し、結果を Python の設定なしでループに戻します。
- [tonitangpotato/autoresearch-engram(インスタグラム)](https://github.com/tonitangpotato/autoresearch-engram) — フォークと **持続的な認知メモリ** — 実験の継続性を向上させるためのクロスセッションの知識の周波数重み付け検索。
- [Colab/Kaggle T4ポート](https://github.com/karpathy/autoresearch/issues/208) — T4 GPU(Google Colab / Kaggle)のオートリサーチをゼロコストとゼロローカルセットアップで適応させます。 キーの変更: Flash Attention 3 → PyTorch SDPA, H100 だけカーネル依存性を削除します。.
- [ArmanJR-Lab/自動車研究](https://github.com/ArmanJR-Lab/autoautoresearch) — ジェットソン AGX Orin ポートと AGX Orin ポート **ディレクター** — ローカルミニマをエスケープするためにループにノベルティ(arxiv papers + DeepSeek Reasoner)を注入する「創造的ディレクター」として機能するGoバイナリ。 複数の実験比較(ベースライン対取締役ガイド付き)を、詳細なスタイル分析で含める。

### ドメイン固有の適応

- [mattprusak/autoresearch ジェネレーション](https://github.com/mattprusak/autoresearch-genealogy) — 構造化されたプロンプト、アーカイブ ガイド、ソース チェック、および vault ワークフローを使用して、自動検索 パターンを Genealogy に適用し、家族履歴の研究を拡張および検証します。
- [ArchishmanSengupta/オートボイス](https://github.com/ArchishmanSengupta/autovoiceevals) - Vapi、最小限のAI、およびElevenLabsを渡る声AIの代理店を堅くするために、広告主プラスの逆転のプロンプト編集を使用して下さい。
- [chrisworsey55/atlas-gicの特長](https://github.com/chrisworsey55/atlas-gic) — Autoresearch は、モデルロスの代わりに、シャープレシオをロールする際のプロンプトとポートフォリオオーケストレーションを最適化し、取引エージェントに自動逆転するループを適用します。
- [RightNow-AI/オートキャネル](https://github.com/RightNow-AI/autokernel) — Autoresearch ループを GPU カーネルの最適化: プロファイルのボトルネック、 1 つのカーネルの編集、ベンチマークの保存、または再変換、繰り返します。
- [ElliotXie/オートジーム](https://github.com/ElliotXie/autozyme) — autoresearch のキーキーキーキーキーキーキーキーを CPU 側科学ソフトウェアに反映するマルチエージェントフレームワーク: ターゲット関数をプロファイルし、1 つの最適化候補を生成し、元の出力を保存しながら速度のベンチマークを生成し、保存または反転、繰り返します。
- [エージェント分析/オートリサーチ成長](https://github.com/Agent-Analytics/autoresearch-growth) — 分析スナップショットと測定された実験結果を使用して、ランディングページ位置とA/Bテスト候補に自動検索を適用して、その後のラウンドをシードしました。
- [Rkcr7/autoresearch-sudoku](https://github.com/Rkcr7/autoresearch-sudoku) — AIエージェントが反復的に書き直し、Rust sudoku ソルバーをベンチマークするオートリサーチワークフローを強化し、最終的にはハードベンチマークセットで大手のヒューマンビルト ソルバーをベットする。
- [jeongph/autospecの](https://github.com/jeongph/autospec) — 自然言語のビジネスルールを読み取り、キープまたは逆転ループを介してテストで春のブートサービスを自律的に構築します。 Gradle ビルド + JUnit XML で評価。 119 行のスケルトンから 950 行まで 5 サイクルで評価。
- [vlasenkoalexey / tpu の_パフォーマンス_オートリサーチ_ウィキ](https://github.com/vlasenkoalexey/tpu_performance_autoresearch_wiki) — v6e ハードウェア上の TPU モデルのパフォーマンス (MFU / tokens-per-sec) に autoresearch keep-or-revert ループを適用します。XProf MCP サーバーを介して各実行をプロファイルし、実験ごとに 1 つのモデル・コード変更を行い、測定された MFU に対して保持または変換します。 ドメインの知識と経験ごとの最適化のトレースのためのカルパシースタイルのLM wikiでループをペアリングします。Llama3-8BとQwen3-8Bは、JAXとtorchaxレーンを横断したケーススタディを含みます。

### 評価とベンチマーク

- [スナップスタンフォード/MLAgentBench](https://github.com/snap-stanford/MLAgentBench) — ML 実験タスクで AI エージェントを評価するための Benchmark スイート。 CIFAR-10からBabyLMへの13のタスク。
- [OpenAI/mleベンチ](https://github.com/openai/mle-bench) — OpenAI のベンチマークは、ML エンジニアリングでどれだけのAIエージェントが実行されるかを測定します。
- [チェンホイ/mlrbench](https://github.com/chchenhui/mlrbench) — MLR-Bench:オープンエンドML研究に関するAIエージェントの評価 NeurIPS/ICLR/ICML ワークショップの 201 タスク。
- [gersteinlab/MLベンチ](https://github.com/gersteinlab/ML-Bench) — リポジトリレベルのコードでMLタスクのLMやエージェントを評価します。
- [THUDM/エージェントベンチ](https://github.com/THUDM/AgentBench) — LLM-as-Agent の評価のための包括的なベンチマークは、8つの異なる環境で評価されています。 ICLR 2024の特長

### 関連するリソース

- [ai-agents-2030/awesome-deep-research-agent](https://github.com/ai-agents-2030/awesome-deep-research-agent) — 深層研究機関紙やシステムに関するキュレーションリスト。
- [YoungDubbyDu/LLM-エージェント最適化](https://github.com/YoungDubbyDu/LLM-Agent-Optimization) — LLMエージェントの最適化方法に関する論文。
- [VoltAgent/awesome-ai-agent-papers   世界のウミウシ](https://github.com/VoltAgent/awesome-ai-agent-papers) — 2026年、エージェントエンジニアリング、メモリ、評価、ワークフロー、オートノマイズシステムなど、AIエージェントの論文をキュレーション。
- [マスマサ59/ai-agent-papers](https://github.com/masamasa59/ai-agent-papers) — AIエージェントのリサーチペーパーは、自動 arxiv の検索から、キュレーションされた選択で隔週に更新されます。
- [tmgthb/自動エージェント](https://github.com/tmgthb/Autonomous-Agents) — 自動エージェントのリサーチペーパー、毎日更新。
- [HKUST-KnowComp/素晴らしいLLM-Scientific-Discovery](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery) — 科学的発見におけるLMSに関するEMNLP 2025調査
- [openags/Awesome-AI-Scientist-Papers(オープナーズ)](https://github.com/openags/Awesome-AI-Scientist-Papers) — AI科学者/ロボット科学者論文集
- [薬理科学.github.io](https://agenticscience.github.io/) — 調査:「AI for Science から 薬理科学 自律科学的発見に関する調査」
- [dspy.ai/GEPA(ジェパ)](https://dspy.ai/api/optimizers/GEPA/overview/) — 化合物AIシステム用のGEPA反射プロンプトオプティマイザのDSPy統合。
- [OpenAIのクックブック:自己進化するエージェント](https://developers.openai.com/cookbook/examples/partners/self_evolving_agents/autonomous_agent_retraining) — GEPAスタイルの反射型進化を用いた自動剤再訓練のためのクックブック。
- [WecoAI/awesomeオートリサーチ](https://github.com/WecoAI/awesome-autoresearch) — ドメイン(LLM トレーニング、GPU カーネル、音声エージェント、取引など)によって構成されている、検証可能なトレースと進捗チャートを使用した AutoResearch の使用例のキュレーションリスト。

<!-- AUTORESEARCH-END -->

---

## 貢献する方法

このリストへの貢献を歓迎します! ご協力のほどよろしくお願い申し上げます。 [貢献ガイドライン](contributing.md)。 これらのガイドラインは、あなたの貢献が私たちの目的と一致し、品質と関連性のために私たちの基準を満たすことを確実にするのに役立ちます。

**探しているもの:**
- 高品質の紙、ツール、またはリソースの簡単な説明で、なぜ彼らが重要であるか
- 既存のエントリ(壊れたリンク、古い情報)の更新
- 星数、価格設定、またはモデル詳細の修正
- 翻訳とアクセシビリティの改善

**品質規格:**
- すべてのツールは積極的に維持されるべきです(過去6か月以内に更新)
- 論文は、ピアレビューの会場から、または重要なコミュニティの採用を持っている必要があります
- データセットは一般にアクセス可能である
- リソースが貴重である理由を説明する一行の説明を必ず含めてください。

このプロジェクトにご協力いただきありがとうございました!

<a href="https://github.com/promptslab/Awesome-Prompt-Engineering/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=promptslab/Awesome-Prompt-Engineering" />
</a>

---

<p align="center">
  <sub>によって維持される <a href="https://promptslab.github.io">プロムツラボ</a> · <a href="https://github.com/promptslab/Awesome-Prompt-Engineering">星このレポ</a> お問い合わせ</sub>
</p>
