<div align="right">
  <strong>日本語</strong> | <a href="./README.zh-Hans.md">簡体字中国語</a> | <a href="./README.en.md">英語</a>
</div>

<div align="center" markdown="1">

![Stage 0–2 の共通基礎から CLI と Agent のルートに分かれ、Stage 5・8 を共有し、必要に応じて役割ルートを選ぶ](resources/diagrams/banner.svg)

# awesome-agentic-ai-zh

**🤖 「AI Agent とは何か」から「信頼できるシステムを作れるようになるまで」への学習マップ**

**まずはルートを一つ選び、あとは一歩ずつ進みましょう。重要な概念・実践演習・厳選リソースはすべて順番に並んでいます。**

[![License](https://img.shields.io/badge/license-MIT-blue?style=flat)](LICENSE)
[![繁中](https://img.shields.io/badge/語言-繁體中文-red?style=flat)](README.md)
[![简中](https://img.shields.io/badge/語言-简体中文-orange?style=flat)](README.zh-Hans.md)
[![EN](https://img.shields.io/badge/lang-English-blue?style=flat)](README.en.md)
![GitHub stars](https://img.shields.io/github/stars/WenyuChiou/awesome-agentic-ai-zh?style=flat&logo=github)
[![オンライン読書サイト](https://img.shields.io/badge/線上閱讀-立即開始-2ea44f?style=flat)](https://wenyuchiou.github.io/awesome-agentic-ai-zh/)

</div>

> 📱 スマホで読む場合は[オンライン読書サイト](https://wenyuchiou.github.io/awesome-agentic-ai-zh/)をご利用ください。

## 🎯 このマップで何ができる？

**AI Agent**（AI エージェント）とは「人の目標のために、次の一手を自分で判断し行動する AI システム」です。目標を与えると、現状を見て次の一手を選び、必要に応じてツールを使い、その結果に応じて続行・修正・停止するか、あるいは人に操作を戻します。人の代わりに作業を自動化できますが、人が与えたルールと権限の範囲内でしか動きません。一度だけ答えるチャットボットや、各手順が決め打ちのスクリプトは、必ずしも Agent とは限りません。この repo は最初からすべての用語を知っていることを求めず、次の 3 つを順に体験させます：

1. **まず基礎を理解**：LLM（Large Language Model、言語を読み書きできるモデル）、Prompt、API（Application Programming Interface、プログラムがサービスを呼び出すためのインターフェース）、Token とは何か。
2. **次にものを作る**：モデルにツールを呼ばせ、Agent Loop を回し、文書を読み、物事を覚えさせる。
3. **最後に信頼できるものにする**：権限、Eval、人間の承認、観測、失敗からの復旧を加える。

ここでの役割は**学習ロードマップ ＋ 厳選リソース ＋ そのまま実行できる小さな練習**です。章全体が必要なときは、別の百科全書を書き直すのではなく、公式ドキュメント、[Datawhale Hello-Agents](https://github.com/datawhalechina/hello-agents)、または該当する Cookbook へ案内します。モデルに接続する必要がある場合、各練習でクラウドまたはローカルの経路を説明します。

重要な技術用語は初出時にまず噛み砕いて説明し、その上で正式な英語表記を残します。用語を忘れたら、[用語集](resources/glossary.md)を直接引いてください。

## 🚀 今すぐ始める

1. **プログラミング経験がまったくない**：[Stage 0：基礎準備](stages/00-foundations.md)から。API や CLI Agent に不慣れなら[ゼロから設定ガイド](resources/setup-guide.md)を併用。
2. **すでに Python・Git・API が使える**：[Stage 1：LLM 基礎](stages/01-llm-basics.md)から。
3. **どのルートにするかまだ迷っている**：下の Track A／Track B 選択表を先に見る。

Track A または Track B に進む前に、まず Stage 0–2 を確認します。日常ユーザー系のみを進む人は役割ガイドを直接開けます。

| 今やりたいのは？ | 推奨ルート | ルートの入り口 |
|---|---|---|
| Claude Code、Codex、OpenCode などの CLI Agent で仕事を片付ける | **Track A — CLI パワーユーザー** | [A1：CLI Agent を選ぶ](tracks/cli/A1-cli-intro.md) |
| 自分で Agent・ツールループ・Workflow・サービスを書く | **Track B — Agent ビルダー** | [Stage 3：最初の Agent Loop](stages/03-tool-use-and-hello-agent.md) |
| 日常で AI を安全に使うだけで、とりあえず書かない | **日常ユーザー系ルート** | [日常ユーザーガイド](branches/for-everyday-users.md) |

<details markdown="1">
<summary>💻 展開：ローカルへダウンロード</summary>

```powershell
git clone https://github.com/WenyuChiou/awesome-agentic-ai-zh.git
cd awesome-agentic-ai-zh
```

ダウンロード後はまず `stages/00-foundations.md` を開くか、上の表から自分に合った最初の駅へ直接移動します。

</details>

## Stage 0 から Stage 8 まで、さらに Stage 7.5 読書駅あり

![AI Agent 学習マップ](resources/diagrams/learning-map.png)

このマップは合計で **8 つのテーマ Stage ＋ Stage 0 準備関 ＋ Stage 7.5 発展読書駅**、つまり **10 の学習駅**からなります。Track A／B の読者はまず **Stage 0–2 共通基礎**を確認します。すでに Python・Git・API が使える人は Stage 0 を飛ばせます。日常ユーザーは役割ガイドへ直接進めます。

### 共通基礎：Stage 0–2

| Stage | このステップで何を解決？ | 修了後できること |
|---|---|---|
| **0** · [基礎準備](stages/00-foundations.md) | パソコンと基本ツールの準備はできていますか？ | Python で公開 API を呼び、JSON（JavaScript Object Notation、プログラム間でデータを交換する際によく使うテキスト形式）を読み、Git で成果を保存する |
| **1** · [LLM 基礎](stages/01-llm-basics.md) | LLM・Token・Context・モデルの違いは？ | LLM を呼び出し、必要に応じてクラウドかローカルかを選ぶ |
| **2** · [Prompt 設計](stages/02-prompt-engineering.md) | 目標・データ・ルール・出力をどう明確に伝えるか？ | 固定ケースで Zero-Shot・One-Shot・Few-Shot・CoT（Chain-of-Thought、中間ステップで問題を処理する推論プロンプト手法）の境界を比較する |

### Track A：CLI Agent を使って仕事を完遂する

正式な順序は `A1 → A2 → Stage 5 → A3 → Stage 8` です。

| 順序 | このステップで何を解決？ | 修了後できること |
|---|---|---|
| **A1** · [CLI Agent を選ぶ](tracks/cli/A1-cli-intro.md) | OpenRouter・OpenCode・Pi・Ollama はそれぞれ何か？ | 正しいツールを選び、最初の小さなタスクを完了する |
| **A2** · [再現可能なフローを作る](tracks/cli/A2-cli-workflow.md) | ルールと手順を次回にどう残すか？ | Project Instructions・Skill・再利用フローを書く |
| **5** · [Claude Code エコシステム](stages/05-claude-code-ecosystem.md) | MCP・Skills・Plugins・Hooks・Subagents の使い分けは？ | まずコア 5.1–5.4 を読み、5.5–5.8 は勤務で必要な分だけ読む |
| **A3** · [本番業務へ接続する](tracks/cli/A3-cli-production.md) | 外部ツール・CI・チームの流れをどう安全に接続するか？ | 最小権限・人間の確認・記録で統合を完了する |
| **8** · [Agent 操作インターフェース](stages/08-agent-interfaces.md) | Agent はブラウザ・画面・Sandbox をどう操作するか？ | タスクが CLI・Browser・Computer Use・API のどれかを判断する |

### Track B：ゼロから Agent を作る

| 順序 | このステップで何を解決？ | 修了後できること |
|---|---|---|
| **3** · [ツール利用と最初の Agent Loop](stages/03-tool-use-and-hello-agent.md) | モデルはツールを安全に呼び、次の一手をどう繰り返すか？ | 最大ラウンド数があり引数を検証する Agent Loop を作る |
| **4** · [Workflow Graph と Agent フレームワーク](stages/04-agent-frameworks.md) | 複数ステップをどう作業マップとして描くか？ | Workflow・Agent・Graph・Framework を選ぶ |
| **5** · [Claude Code エコシステム](stages/05-claude-code-ecosystem.md) | MCP・Skills・Plugins・Hooks・Subagents はどう協力するか？ | ツール・ルール・再利用能力を組み合わせる |
| **6** · [Memory・RAG（Retrieval-Augmented Generation、まず関連資料を探し、それに基づいて答える）](stages/06-memory-rag.md) | Agent は文書をどう検索し、重要情報を保存・取り出すか？ | 最小 RAG・long-term memory・contextual retrieval のフローを作る |
| **7** · [Agent 本番エンジニアリング：テスト可・観測可・停止可・復旧可](stages/07-multi-agent-production.md) | Agent は実環境でどう安定稼働するか？ | Eval・観測・予算・Human-in-the-loop（HITL、人間の承認）・復旧を加える |
| **7.5** · [発展 Agentic 概念マップ](stages/07.5-advanced-agentic-concepts.md) | さらにどの発展パターンを知る価値があるか？ | 12 概念から PAR loop・agent-as-judge など必要なテーマを選読する |
| **8** · [Agent 操作インターフェース](stages/08-agent-interfaces.md) | Agent は API 以外の実環境をどう操作するか？ | Computer Use・Browser Use・Code Sandbox を選ぶ |

Stage 4 ではまず **Workflow Graph** を理解し、それを framework で作ります。Stage 7 で Eval・観測・承認・復旧を加え、同じ作業図を安定して動かします。

> 🔭 **学習順序**：Stage 2 Prompt → Stage 3 **Agent Loop** → Stage 4 **Workflow Graph**／Framework → Stage 5 ツールとルール → Stage 6 **Context Engineering** → Stage 7 production。Prompt・Context・Harness・Loop・Graph は協働します。これらは 5 層でもなければ、互いに置き換わる製品世代でもありません。

A3 または Stage 7 の完了後、[Capstone プロジェクト](CAPSTONE.md)を始められます。進捗を記録するには [PROGRESS.md](PROGRESS.md) を使います。

<details markdown="1">
<summary>⏱️ 展開：時間の目安（目安であり締切ではない）</summary>

- **Track A**：約 8–10 週。既存の CLI Agent を使って仕事を片付けることが重點です。
- **Track B**：幹線は約 16–22 週。週 5–8 時間なら通常 5–7 ヶ月かかります。
- **Stage 5** はツールとルールの Hub：Track A は使い方、Track B は組み合わせ方を見ます。
- **Stage 8** は操作インターフェースの Hub：Track A は委任の仕方、Track B は自前 Agent への接続を見ます。

スケジュールは目安に過ぎません。まず目の前の一歩を終えればよく、地図全体を一度に読む必要はありません。

</details>

### あなたの立場に合わせて進む

![研究・開発・教学・知識ワーク・日常利用の 5 つの選択肢で、必要に応じて読み、すべてを回る必要はない](resources/diagrams/branch-decision-tree.svg)

[静的画像](resources/diagrams/branch-decision-tree.png)

| ルート | 対象 | 扱う内容 |
|---|---|---|
| 🔬 [研究者](branches/for-researcher.md) | 大学院生、ポスドク、PI | 文献エビデンス、再現可能なフロー、Multi-Agent Review |
| 💻 [開発者](branches/for-developer.md) | ソフトウェアエンジニア | CLI Delegation、Code Review、テストと復元 |
| 🎓 [教員](branches/for-teacher.md) | 先生、講師 | 授業準備、フィードバック、プライバシーと教学 Prompt |
| 📊 [知識ワーカー](branches/for-knowledge-worker.md) | コンサル、PM、アナリスト | メール・会議・レポートのワークフロー |
| 👥 [日常ユーザー](branches/for-everyday-users.md) | 必ずしも書かない AI 利用者 | 執筆、学習、プライバシーと安全な利用 |

## 💡 つまずかずに学ぶには

1. **一度に進むのは Stage 一つだけ**：まずこの章の核心的な問いに答える。
2. **核心語と必読を先に**：後の練習で直接使うから。
3. **最初のコマンドをそのままコピー**：まずオフラインのテストを走らせ、空ファイルを写す必要はない。
4. **一度に変えるのは一つだけ**：終えたらすぐテストを再走し、どの変更が結果を生んだかを知る。
5. **完了条件を満たしてから次へ**：理解したことと実行できることは違う。

各 `starter.py` は実行可能な参考です。まず課題と成功条件を読み、一カ所を変更してテストを再走します。全体の方法は[この教材の使い方](docs/HOW_TO_USE.md)を参照。

## 📚 まずブックマークする学習入り口

ここには最もよく使う入り口だけを置き、全リストは [RESOURCES.md](RESOURCES.md) にあります。星印はプロジェクトのランキングではなく**学習の優先順位**を示します。

<table>
  <thead><tr><th>用途</th><th>入り口</th><th>いつ使う？</th><th>重要度</th></tr></thead>
  <tbody>
    <tr><th scope="rowgroup" rowspan="3">開始</th><td><a href="resources/setup-guide.md">ゼロから設定ガイド</a></td><td>初回のインストールと実行</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="docs/HOW_TO_USE.md">この教材の使い方</a></td><td>最初の実践練習の前</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="PROGRESS.md">学習進捗表</a></td><td>次のステップや完了項目の記録</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
  <tbody>
    <tr><th scope="rowgroup" rowspan="3">学習</th><td><a href="resources/glossary.md">コア用語集</a></td><td>Token・RAG・MCP などの見慣れない語に出会った時</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="examples/README.md">実行可能例入り口</a></td><td>オフラインテストや小さな事例を直接走らせたい時</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/cookbook.md">実践 Cookbook</a></td><td>Skill・MCP・Office・Zotero・ローカル LLM を作りたい時</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
  <tbody>
    <tr><th scope="rowgroup" rowspan="4">調べる</th><td><a href="resources/README.md">リソース棚</a></td><td>Guide・Catalog・Cookbook のどれを引くべきか分からない時</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="RESOURCES.md">完全なリソース一覧</a></td><td>公式ドキュメント・コース・コミュニティ・発展読書を探す時</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/cli-agents-guide.md">CLI Agent 選択ガイド</a></td><td>Track A の準備や CLI ツールの比較</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/courses.md">コースと認定マップ</a></td><td>修了証・スキルバッジ・認定試験の見分け</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
</table>

## 🤝 このマップを一緒に改善する

- 内容の誤り・リンク切れ・古い情報： [Issue](https://github.com/WenyuChiou/awesome-agentic-ai-zh/issues) を開いてください。
- プロジェクトや学習リソースを追加：どの Stage の何を教えるかを添えてください。
- PR を出す準備：まず [CONTRIBUTING.md](CONTRIBUTING.md) と[執筆規範](resources/style-guide.md)を読む。
- 最近の更新： [CHANGELOG.md](CHANGELOG.md) を確認。

<details markdown="1">
<summary>🧰 展開：完全な貢献方法と自動チェック</summary>

テキストの修正、三言語ミラーの追加、不足トピックの報告、あるいは Stage／役割ルートの長期メンテナンスができます。GitHub プロジェクトリンクを新規追加すると、自動チェックがアーカイブ状態・ライセンス・最終更新の確認を補助します。採否は学習価値に基づきメンテナーが判断します。

完全な役割とルールは [CONTRIBUTORS.md](CONTRIBUTORS.md) にあります。

</details>

## 🙏 重要な着想と関連プロジェクト

- [**Datawhale Hello-Agents**](https://github.com/datawhalechina/hello-agents) — 完全な章と深い実装を必要とする読者向け。
- [**Datawhale コミュニティ**](https://github.com/datawhalechina) — 中国語の機械学習共学コミュニティで、多くの信頼できる学習入り口を提供。
- [**liyupi/ai-guide**](https://github.com/liyupi/ai-guide) — 広範なリソースライブラリ向け。本 repo は学習順序を担当します。

<details markdown="1">
<summary>📖 展開：貢献者と引用形式</summary>

[![Contributors](https://contrib.rocks/image?repo=WenyuChiou/awesome-agentic-ai-zh)](https://github.com/WenyuChiou/awesome-agentic-ai-zh/graphs/contributors)

```bibtex
@misc{awesome_agentic_ai_zh_2026,
  title = {awesome-agentic-ai-zh: A Structured Learning Roadmap for Agentic AI},
  author = {Chiou, Wenyu},
  year = {2026},
  url = {https://github.com/WenyuChiou/awesome-agentic-ai-zh}
}
```

</details>

## ☕ 支援と連絡

この学習マップは MIT ライセンスで、引き続き無料公開します。一般的な質問や提案は Issue をご利用ください。非公開の連絡は [wenyuchiou12@gmail.com](mailto:wenyuchiou12@gmail.com) までメールを。

このマップが役立ったら、⭐ Star をいただくか、[作者にコーヒーをおごる](https://www.buymeacoffee.com/wenyuchiou)ことでご支援ください。

## License

MIT。Maintained by [@WenyuChiou](https://github.com/WenyuChiou)。
