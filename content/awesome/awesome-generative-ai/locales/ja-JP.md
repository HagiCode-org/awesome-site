# 素晴らしい人工知能 [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> 現代の人工知能プロジェクトとサービスのキュレーションリスト。

遺伝子の人工的な 人工知能とは、大量のデータで訓練された機械学習アルゴリズムを使用して、画像、音声、テキストなどのオリジナルのコンテンツを作成する技術です。 AIの他の形態とは異なり、フォトレアリスティスティックなイメージ、デジタルアート、音楽、ライティングなどのユニークで前例のない出力を作成することができます。 これらの出力は、独自の独自のスタイルを持ち、人間の創作作品と区別しにくい場合があります。 ジェネレーションAIは、アート、エンターテインメント、マーケティング、アカデミア、コンピュータサイエンスなどの分野における幅広いアプリケーションを備えています。

このリストへの貢献を歓迎します。 ご意見をお寄せいただく前に、ご検討ください。 [Contribution Guidelines](CONTRIBUTING.md) エントリーが条件を満たしていることを確認してください。 リンクを追加 [pull requests](https://github.com/steven2358/awesome-generative-ai/pulls) または作成する [issue](https://github.com/steven2358/awesome-generative-ai/issues) ディスカッションを開始する。 より多くのプロジェクトは、 [Discoveries List](DISCOVERIES.md)そこで、今後、AIプロジェクトを幅広く紹介しています。

## コンテンツ

- [推奨読書](#recommended-reading)
- [テキスト](#text)
- [コーディング](#coding)
- [エージェント](#agents)
- [サイトマップ](#image)
- [ビデオ](#video)
- [オーディオ](#audio)
- [その他](#other)
- [学習リソース](#learning-resources)
- [その他のリスト](#more-lists)

## 推奨読書

- [How Large Language Models Will Transform Science, Society, and AI](https://hai.stanford.edu/news/how-large-language-models-will-transform-science-society-and-ai) - GPT-3モデルの能力と限界、社会への影響をまとめた記事。 2021年2月5日、Alex TamkinとDeep Ganguliによる。
- [Generative AI: A Creative New World](https://www.sequoiacap.com/article/generative-ai-a-creative-new-world/) - 総合人工知能業界を総合的に検証し、業界エコシステムの歴史的観点と詳細な分析を提供します。 2022年9月19日、Sonya Huang、Pat Grady、GPT-3により。
- [A Coming-Out Party for Generative A.I., Silicon Valley's New Craze](https://www.nytimes.com/2022/10/21/technology/generative-ai.html) - ジェネレーションAIの上昇に関する記事、特に安定した拡散画像ジェネレータの成功、および関連する議論。 ニューヨークタイムズ、2022年10月21日
- [AI's New Creative Streak Sparks a Silicon Valley Gold Rush](https://www.wired.com/story/ais-new-creative-streak-sparks-a-silicon-valley-gold-rush/) - ジェネレーションAIのスタートアップにおける成長率と投資に関する記事、その潜在的なアプリケーションを探求するさまざまな産業。 2022年10月27日
- [ChatGPT Heralds an Intellectual Revolution](https://www.wsj.com/articles/artificial-intelligence-generative-ai-chatgpt-kissinger-84512912) - ヘンリー・キシンガー、エリック・シュミット、ダニエル・ハッテンロッハーのオプテッド。 ウォールストリートジャーナル, 2月 24, 2023.

### マイルストーン

- [OpenAI API](https://openai.com/blog/openai-api/) - GPT-3に基づくテキスト・ツー・テキスト汎用AIモデル向けOpenAI APIのお知らせ。OpenAIブログ、2020年6月11日。
- [GitHub Copilot](https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/) - より良いコードを書くのに役立つ新しいAIペアプログラマであるCopilotの発表。 2021年6月29日 GitHub blog
- [DALL·E 2](https://openai.com/blog/dall-e-2/) - DALL・E2の画像生成システム「DALL・E2」のリリースのお知らせ、画像作成機能の拡充、各種安全緩和のお知らせ OpenAI blog, 2018年4月6日
- [Stable Diffusion Public Release](https://stability.ai/news-updates/stable-diffusion-public-release) - クリエイティブ ML OpenRAIL-M ライセンスに基づき、幅広いインターネットスクレイプで訓練されたAIベースの画像生成モデルであるStable Diffusionの公開リリースのお知らせです。 安定した拡散ブログ、22 8月、2022。
- [ChatGPT](https://openai.com/blog/chatgpt/) - フォローアップの質問に答えるために訓練された会話モデルであるChatGPTの通知、間違いを認め、誤った前提に挑戦し、不適切な要求を拒否する。 2022年11月30日
- [Bing Search](https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing-and-edge-your-copilot-for-the-web/) - Microsoftは、次世代OpenAIモデルを搭載した検索エンジンBingの新しいバージョンを発表しました。 マイクロソフトブログ、2月7、2023。
- [LLaMA](https://ai.meta.com/blog/large-language-model-llama-meta-ai/) - Llama LLM、Metaによる基礎的、65-billion-parameterの大きい言語モデル。 メタ、2月23日、2023年 #オープンソース
- [GPT-4](https://openai.com/research/gpt-4) - 大型マルチモーダルモデル GPT-4 のお知らせ 2023年3月14日(水)オープンAIブログ
- [DALL·E 3](https://openai.com/index/dall-e-3/) - DALL・E3イメージジェネレーターのお知らせ オープンAIブログ、9月20、2023。
- [Sora](https://openai.com/research/video-generation-models-as-world-simulators) - 大規模な映像生成モデルであるソラの発表 OpenAI、2024年2月15日

## テキスト

### モデル

- [OpenAI API](https://openai.com/api/) - OpenAIのAPIは、自然言語、コーディング、画像生成、音声、およびエージェント開発のGPTモデルへのアクセスを提供します。
- [Gopher](https://deepmind.google/blog/language-modelling-at-scale-gopher-ethical-considerations-and-retrieval/) - DeepMindによるGopherは280億のパラメータ言語モデルです。
- [OPT](https://huggingface.co/facebook/opt-350m) - Facebookでプリトレンデッドトランス(OPT)を開くと、デコーダー専用のプリトレンデッドトランスのスイートです。 [Announcement](https://ai.meta.com/blog/democratizing-access-to-large-scale-language-models-with-opt-175b/).
- [Bloom](https://huggingface.co/docs/transformers/model_doc/bloom) - Hugging FaceのBLOOMは、46の異なる言語と13のプログラミング言語で訓練されているGPT-3と同様のモデルです。 #オープンソース
- [Llama](https://www.llama.com/) - メタのオープンソースの大きな言語モデル。 #オープンソース
- [Claude](https://claude.ai/) - AnthropicのAIアシスタントであるClaudeに話します。
- [Vicuna-13B](https://lmsys.org/blog/2023-03-30-vicuna/) - ShareGPTから収集したユーザー共有の会話でLLaMAを微調整することによって訓練されたオープンソースのチャットボット。 #オープンソース
- [Mistral](https://mistral.ai/en/models) - Mistral AIによるオープン級LM。 #オープンソース
- [Grok](https://grok.x.ai/) - xAIによるLLM [open source](https://github.com/xai-org/grok-1) 重量を開けて下さい。 #オープンソース
- [Qwen](https://qwenlm.github.io/) - Alibaba Cloudが独自に開発したLLMシリーズ。 [#opensource](https://github.com/QwenLM/Qwen)
- [DeepSeek](https://huggingface.co/deepseek-ai) - DeepSeek AIによるオープンソースLMシリーズ。 [#opensource](https://github.com/deepseek-ai)
- [MiniMax](https://www.minimax.io/) - テキスト、スピーチ、ビデオ、音楽生成の多角的基礎モデル
- [Kimi K2](https://github.com/moonshotai/Kimi-K2) - Moonshot AIによるオープンソースのMoE言語モデルをエージェントタスク向けに公開しました。 #オープンソース
- [GLM](https://github.com/zai-org/GLM-5) - Z.aiによるオープンソースのMoE言語モデルをエージェントタスク向けに公開しました。 #オープンソース

### チャットボット

- [ChatGPT](https://chatgpt.com/) - OpenAIによるChatGPTは、会話方法でやりとりする大きな言語モデルです。
- [Copilot](https://copilot.microsoft.com/) - マイクロソフトの日常的なAI仲間。
- [Gemini](https://gemini.google.com/) - Google Deepmindが開発したマルチモーダル大言語モデルの家族。
- [Meta AI](https://www.meta.ai/) - メタAI アシスタントが、AI 生成された画像を生成し、回答を得る。 Llama LLM で造られる。
- [DeepSeek](https://www.deepseek.com/) - DeepSeekのオープンソース言語モデルを搭載したチャットボットインターフェイス。 #オープンソース
- [Character.AI](https://character.ai/) - キャラクター。 AIならキャラクターやチャットを作成できます。
- [Pi](https://pi.ai) - デジタルアシスタントとして利用できるパーソナライズされたAIプラットフォーム。
- [Qwen](https://chat.qwenlm.ai/) - 画像生成、文書処理、Web検索の統合、ビデオ理解などのQwenチャットボット
- [Le Chat](https://chat.mistral.ai/) - Mistral AI の言語モデルのためのチャット インターフェイス。
- [Kimi](https://www.kimi.com/) - チャット、ディープリサーチ、コーディング、マルチエージェント機能を備えた Moonshot AI アシスタント。
- [Z.ai](https://chat.z.ai/) - GLMモデルファミリーのAIチャットボットとエージェントプラットフォーム。

### カスタムインターフェイス

- [LibreChat](https://librechat.ai/) - LibreChat は、アシスタント AI 用のフリーかつオープンソースのチャットインターフェースです。 [#opensource](https://github.com/danny-avila/LibreChat).
- [Chatbot UI](https://www.chatbotui.com/) - オープンソース ChatGPT UI [#opensource](https://github.com/mckaywrigley/chatbot-ui).

### 検索エンジン

- [Perplexity AI](https://www.perplexity.ai/) - AIは、検索ツールを活用しました。
- [Exa](https://exa.ai/) - 言語モデル 動力を与えられた調査。
- [Phind](https://phind.com/) - AIベースの検索エンジン
- [You.com](https://you.com/) - ユーザーのデータを100%プライベートに保ちながら、カスタマイズされた検索体験を提供するAI上に構築された検索エンジン。
- [Komo](https://komo.ai/) - AI搭載の検索エンジン

### ローカル検索エンジン

- [privateGPT](https://github.com/zylon-ai/private-gpt) - LLMの電源を使用して、インターネット接続なしで文書に質問をしてください。
- [quivr](https://github.com/QuivrHQ/quivr) - すべてのファイルをダンプし、LMs & embeddings を使用して、ジェネレーション AI 秒の脳を使用してチャットします。

### 執筆アシスタント

- [Jasper](https://www.jasper.ai/) - 人工知能でコンテンツをより速く作成します。
- [Compose AI](https://www.compose.ai/) - Compose AI は、AI 搭載のオートコンプリートにより、書き込み時間を 40% 削減する無料の Chrome 拡張機能です。
- [Rytr](https://rytr.me/) - Rytrは、高品質のコンテンツを作成するのに役立つAIライティングアシスタントです。
- [wordtune](https://www.wordtune.com/) - 個人的な執筆の助手。
- [HyperWrite](https://hyperwriteai.com/) - HyperWrite は、自信を持って書くのに役立ち、アイデアから最終的なドラフトまで、より迅速に作業を遂行するのに役立ちます。
- [Moonbeam](https://www.gomoonbeam.com/) - 時間のほんの僅かな時間でより良いブログ。
- [copy.ai](https://www.copy.ai/) - より良いマーケティングコピーとコンテンツをAIで書く。
- [ChatSonic](https://writesonic.com/chat) - テキストや画像作成を可能にするAI搭載アシスタント。
- [Anyword](https://anyword.com/) - AnywordのAIライティングアシスタントは、誰でも効果的なコピーを生成します。
- [Hypotenuse AI](https://www.hypotenuse.ai/) - いくつかのキーワードを元の、洞察に満ちた記事、製品の説明、ソーシャルメディアのコピーに変換します。
- [Lavender](https://www.lavender.ai/) - Lavenderのメールアシスタントは、より多くの返信を得るのに役立ちます。
- [Lex](https://lex.page/) - 人工知能を焼いた言葉のプロセッサーで、より速く書くことができます。
- [Jenni](https://jenni.ai/) - ジェニは、アイデアやライティングタイムの時間を節約する究極のライティングアシスタントです。
- [QuillBot](https://quillbot.com) - AI搭載のパラフレーズツール
- [Postwise](https://postwise.ai/) - ツイートを書いて、投稿をスケジュールし、次のAIを使って成長させます。
- [Copysmith](https://copysmith.ai/) - エンタープライズ&eコマース向けAIコンテンツ作成ソリューション
- [Humanize-Text](https://github.com/lynote-ai/humanize-text) - 多言語書き換えパイプラインとステップバイステップ例を備えたAIテキストヒューマライザー。 #オープンソース

### ChatGPT拡張子

- [WebChatGPT](https://chromewebstore.google.com/detail/webchatgpt-chatgpt-with-i/lpfemeioodjbpieminkklglpmhlngfcn) - ChatGPT は、Web から関連した結果を出力します。
- [GPT for Sheets and Docs](https://workspace.google.com/marketplace/app/gpt_for_sheets_and_docs/677318054654) - Google Sheets および Google Docs 用の ChatGPT 拡張機能
- [YouTube Summary with ChatGPT](https://chromewebstore.google.com/detail/youtube-summary-with-chat/nmmicjeknamkfloonkhhcjmomieiodli) - YouTube動画をまとめるためにChatGPTを使う。
- [AI Prompt Genius](https://chromewebstore.google.com/detail/ai-prompt-genius/jjdnakkfjnnbbckhifcfchagnpofjffo) - ChatGPTで最高のプロンプトを見つけて共有し、インポートし、チャット履歴をローカルに保存します。
- [ShareGPT](https://sharegpt.com/) - ChatGPTの会話を共有し、他の人が共有する会話を探索します。
- [Merlin](https://www.getmerlin.in/) - チャットGPT すべてのウェブサイトの拡張機能
- [Jetwriter](https://jetwriter.ai/) - Chrome、デスクトップ、モバイル向けのAIライティングアシスタント
- [ChatGPT for Jupyter](https://github.com/TiesdeKok/chat-gpt-jupyter-extension) - ChatGPT による Jupyter Notebook と Jupyter Lab でさまざまなヘルパー関数を追加します。
- [editGPT](https://www.editgpt.app/) - chatGPT でコンテンツへの変更を簡単に校正、編集、追跡できます。
- [Forefront](https://www.forefront.ai/) - よりよいChatGPTの経験。
- [ChatGPT for Sheets, Docs, Slides, Forms](https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252) - Google スプレッドシート、Google ドキュメント、Google スライド、Google フォーム用の ChatGPT 拡張機能
- [GPT for Gmail](https://workspace.google.com/marketplace/app/gpt_for_gmail_ai_email_assistant_gemini/899305976589) - Gmail用のAIメールアシスタント。

### 生産性

- [ChatPDF](https://www.chatpdf.com/) - どんなPDFにも対応しています。
- [Mem](https://mem.ai/) - Memは、世界初となるAIを活用したワークスペースです。 あなたの創造性を増幅し、マウンタンを自動化し、自動的に組織を維持します。
- [Taskade](https://www.taskade.com/) - タスク、メモ、生成された構造リスト、マインドマップをTastain AIでアウトラインアウトします。
- [Notion AI](https://www.notion.so/product/ai) - より良い、より効率的なノートとドキュメントを書く。
- [Nekton AI](https://nekton.ai) - ワークフローをAIで自動化します。 プレーン言語のステップでワークフローを記述します。
- [Limitless](https://www.limitless.ai/) - 会話や会議を録音したり、要約を生成したり、アプリやオプションのウェアラブルで過去のやりとりを検索したりするためのAIメモリアシスタント。
- [NotebookLM](https://notebooklm.google/) - Google Geminiによって供給される文書と相互作用する研究と注力オンラインツール。
- [Open Notebook](https://www.open-notebook.ai) - NotebookLMのオープンソースの実装は、より柔軟性と機能を備えています。 [#opensource](https://github.com/lfnovo/open-notebook)
- [Screenpipe](https://github.com/screenpipe/screenpipe) - ローカルLLMのAI搭載検索、自動化、サポートによる録音画面や音声活動のためのオープンソースツール。 #オープンソース

### 会議アシスタント

- [Otter.ai](https://otter.ai/) - 音声を記録し、メモを書き、自動的にスライドをキャプチャし、要約を生成する会議アシスタント。
- [Cogram](https://www.cogram.com/) - Cogram は仮想会議で自動メモをとり、アクション項目を識別します。
- [Sybill](https://www.sybill.ai/) - シビルは、トランスクリプトと感情ベースのインサイトを組み合わせて、利益の次のステップ、痛みのポイントと領域を含む、セールスコールの要約を生成します。
- [Loopin AI](https://www.loopinhq.com/) - Loopinは、AIを用いた記録、転記、要約の会議を可能にするだけでなく、カレンダーの上部に会議のメモを自動整理できるコラボレーションミーティングワークスペースです。
- [Read AI](https://www.read.ai/) - どこにいてもAIのコピローは、会議、メール、メッセージをまとめ、コンテンツの発見、推奨事項でより生産性を高めます。
- [Fireflies.ai](https://fireflies.ai) - チームの会話を全てまとめ、まとめ、検索、分析します。

### アカデミア

- [Elicit](https://elicit.org/) - Elicit は、文献レビューの部分のように、研究ワークフローを自動化するために言語モデルを使用しています。
- [genei](https://www.genei.io/) - 数秒で学術論文を集計し、研究時間に80%を保存します。
- [Explainpaper](https://www.explainpaper.com/) - 学術論文を読むためのより良い方法。 紙をアップロードし、テキストの混同を強調し、説明を取得します。
- [Consensus](https://consensus.app/search/) - コンセンサスは、AIを用いた科学的研究の答えを見つける検索エンジンです。
- [scite](https://scite.ai/) - 科学的な記事を発見し、評価するためのプラットフォーム。
- [SciSpace](https://scispace.com/) - 科学文献を理解するためのAI研究アシスタント。
- [STORM](https://storm.genie.stanford.edu/) - トピックを研究し、引用符でフルレンダーレポートを生成するLMを搭載したナレッジキュレーションシステム。 [#opensource](https://github.com/stanford-oval/storm/)
- [alphaXiv](https://www.alphaxiv.org) - arXiv ペーパーをディスクスルス、発見、そして読む。
- [ASReview](https://asreview.nl/) - 体系的なレビューのためのオープンソースのAI搭載ツール, 研究者は、効率的に学術文献の大量ボリュームを選別するのに役立ちます. [#opensource](https://github.com/asreview/asreview)
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research) - ローカルまたはクラウドLLMを使用して、学術的ソース、Web、およびプライベート文書を検索するための深い研究ツール。 [#opensource](https://github.com/LearningCircuit/local-deep-research)
- [Rayyan](https://www.rayyan.ai/) - 共同スクリーニングとデータ管理ツールを使用して、系統的な文献レビューを管理するAIを搭載したプラットフォーム。
- [Paper2Agent](https://paper2agent.ai/) - 研究論文と関連するコードベースをMCPサーバーとインタラクティブAIエージェントに変換します。 [#opensource](https://github.com/jmiao24/Paper2Agent)
- [Ai2 ASTA](https://asta.allen.ai/) - 論文の発見、引用文献報告書の作成、研究データの分析のための学術的研究アシスタント。

### リーダーボード

- [Arena](https://arena.ai/) - UC Berkeley SkyLabの研究者が主催するクラウドソーシングAIベンチマークのオープンプラットフォーム。
- [Artificial Analysis](https://artificialanalysis.ai/) - 人工知能分析は、AIモデルとホスティングプロバイダを選択するのに役立つ目的のベンチマークと情報を提供します。
- [imgsys](https://imgsys.org/rankings) - fal.ai によるジェネレーションイメージモデルのアリーナ。
- [OpenRouter LLM Rankings](https://openrouter.ai/rankings) - アプリ間での利用によってランク付けおよび分析される言語モデル。
- [SEAL LLM Leaderboard](https://labs.scale.com/leaderboard) - エキスパート主導のLMベンチマークとAIモデルのリーダーボードを更新しました。
- [LLM Stats](https://llm-stats.com/) - ベンチマーク、価格設定、速度、コンテキストウィンドウでAIモデルを比較します。

### その他のテキストジェネレータ

- [EmailTriager](https://www.emailtriager.com/) - AI を使用して、バックグラウンドでメール返信を自動的に作成します。
- [AI Poem Generator](https://www.aipoemgenerator.org) - AI Poemジェネレータは、テキストプロンプトで、あらゆる被写体に美しいリハイミング詩を書いています。

## コーディング

### コーディングアシスタント

- [GitHub Copilot](https://github.com/features/copilot) - GitHub Copilot は OpenAI Codex を使用して、エディタからコードと機能をリアルタイムで提案します。
- [OpenAI Codex](https://platform.openai.com/docs/guides/code/) - 自然言語をコードに変換するOpenAIによるAIシステム。
- [Ghostwriter](https://blog.replit.com/ai) - リプリットによるAIを搭載したペアプログラマ。
- [Amazon Q](https://aws.amazon.com/q/) - 質問に答え、コードを書き、タスクを自動化するのに役立つAWSのジェネレーションAIを搭載したアシスタント。
- [tabnine](https://www.tabnine.com/) - 全行コードと全機能コード補完でコードを高速化。
- [Stenography](https://stenography.dev/) - 自動コードのドキュメント。
- [Mintlify](https://mintlify.com/) - AI は、ドキュメント ライターを採用しました。
- [AI2sql](https://www.ai2sql.io/) - AI2sqlでは、エンジニアや非エンジニアは、SQLを知らずに、効率的なエラーフリーのSQLクエリを簡単に書くことができます。
- [Qodo](https://www.qodo.ai/) - IDE、プルリクエスト、セキュリティ用のエージェントワークフローを備えたAIコードレビューツール。
- [PR-Agent](https://github.com/The-PR-Agent/pr-agent) - 自動PR分析、フィードバック、提案などのAI搭載ツール
- [TurboPilot](https://github.com/ravenscroftj/turbopilot) - llama.cpp の背後にあるライブラリを使用して、セルフホスト型のコピロクローンで、RAM の 4 GB の Salesforce Codegen モデルを実行します。
- [GPT-Code UI](https://github.com/ricklamers/gpt-code-ui) - OpenAIのChatGPTコード通訳者のオープンソースの実装。 #オープンソース
- [Open Interpreter](https://github.com/openinterpreter/open-interpreter) - ターミナルでOpenAIのコード通訳、ローカルで実行。
- [Continue](https://www.continue.dev/) - オープンソースのAIコードアシスタント。 任意のモデルと任意のコンテキストを接続して、IDE内のカスタムオートコンプリートとチャット体験を作成します。 [#opensource](https://github.com/continuedev/continue)
- [RooCode](https://github.com/RooCodeInc/Roo-Code) - 直接VSコードに統合されるAI搭載の自律コーディングエージェント。 [#opensource](https://github.com/RooCodeInc/Roo-Code)
- [Windsurf](https://windsurf.com/) - 開発プロセス全体で高度なAI支援とコード編集を組み合わせたAIネイティブIDE。
- [Plandex](https://github.com/plandex-ai/plandex) - オープンソース、ターミナルベースのAIプログラミングエンジン、複雑なタスク。 [#opensource](https://github.com/plandex-ai/plandex)
- [Jupyter AI](https://github.com/jupyterlab/jupyter-ai) - Ollama と GPT4All のローカルホストモデルを含む 100 + LLM をサポートする Jupyter Notebook と JupyterLab のオープンソース、構成可能な AI アシスタント。 #オープンソース
- [DataLine](https://dataline.app) - AI主導のデータ解析と可視化ツール [#opensource](https://github.com/RamiAwar/dataline)
- [v0](https://v0.dev) - React と Next.js 用の Prompt-driven UI 生成、プロダクション対応コンポーネントの作成
- [Lovable](https://lovable.dev) - 会話フルスタックアプリ生成、アイデアをデプロイ可能なコードに変換します。
- [aider](https://aider.chat/) - 端末でのAIペアプログラミング、複数のLMMプロバイダをサポート [#opensource](https://github.com/paul-gauthier/aider)
- [Kilo](https://kilo.ai/) - VSコード、JetBrains、CLIのオープンソースAIコーディングアシスタント。 [#opensource](https://github.com/Kilo-Org/kilocode)

### 開発者ツール

- [Cohere](https://cohere.com/) - Cohereは、高度な大型言語モデルとNLPツールを提供しています。
- [Haystack](https://haystack.deepset.ai/) - NLPアプリケーション(エージェント、セマンティック検索、質問回答)を言語モデルで構築するためのフレームワーク。
- [LangChain](https://langchain.com/) - 言語モデルを活用したアプリケーション開発の枠組み
- [gpt4all](https://github.com/nomic-ai/gpt4all) - チャットボットは、コード、ストーリー、対話を含むクリーンなアシスタントデータの大規模なコレクションで訓練されました。
- [LLM App](https://github.com/pathwaycom/llm-app) - オープンソースの Python ライブラリを使用して、リアルタイムの LLM 対応のデータパイプラインを構築します。
- [LMQL](https://lmql.ai/) - LMQLは、大規模な言語モデルのクエリ言語です。
- [LlamaIndex](https://www.llamaindex.ai/) - LLMアプリケーションを外部データ上に構築するためのデータフレームワーク。
- [Phoenix](https://phoenix.arize.com/) - お使いのノートPC環境で実行するMLの保守性のためのオープンソースツール, によって アリス. LLM、CV、タブラーモデルをモニターし、細かく調整します。
- [Cursor](https://cursor.com/) - Cursorは、強力なAIで対プログラミングのために構築された未来のIDEです。
- [SymbolicAI](https://github.com/ExtensityAI/symbolicai) - LLMをコアに組み込むための神経構造のフレームワーク。
- [Vanna.ai](https://vanna.ai/) - SQL生成と関連機能のオープンソースのPython RAGフレームワーク。 [#opensource](https://github.com/vanna-ai/vanna)
- [Portkey](https://portkey.ai/) - LLM監視、キャッシュ、管理のためのフルスタックLLMOpsプラットフォーム。
- [agenta](https://github.com/agenta-ai/agenta) - 迅速なエンジニアリング、評価、および展開のためのオープンソースのエンドツーエンドLLMOpsプラットフォーム。 #オープンソース
- [Together AI](https://www.together.ai/) - 低コスト・生産規模で、AIモデルの高速化・高速化・高速化・高速化・高機能化を実現。
- [Gitingest](https://gitingest.com/) - 任意のGitリポジトリをコードベースの単純なテキストダイジェストに変えるので、任意のLLMに供給することができます。 [#opensource](https://github.com/cyclotruc/gitingest)
- [Repomix](https://repomix.com/) - コードベースをAI対応フォーマットにパックします。 [#opensource](https://github.com/yamadashy/repomix)
- [llama.cpp](https://github.com/ggml-org/llama.cpp) - 純粋なC/C++のメタのLLaMAモデル(および他)の推論。 #opensource
- [bitnet.cpp](https://github.com/microsoft/BitNet) - Microsoftによる1ビットLLMの公式推論フレームワーク。 [#opensource](https://github.com/microsoft/BitNet)
- [OpenRouter](https://openrouter.ai/) - LLM のための統一されたインターフェイス。 [#opensource](https://github.com/OpenRouterTeam)
- [Ludwig](https://github.com/ludwig-ai/ludwig) - LLM などのディープニューラルネットワークなどのカスタムAIモデルの構築のための低コードフレームワーク。 [#opensource](https://github.com/ludwig-ai/ludwig)
- [Unsloth](https://unsloth.ai) - LLMを微調整するためのPythonライブラリ [#opensource](https://github.com/unslothai/unsloth).
- [OpenLIT](https://github.com/openlit/openlit) - オープンソースのGenAIとLMのobservabilityプラットフォームで、OpenTelemetryをトレースやメトリクスでネイティブに提供します。 #オープンソース
- [Helicone AI](https://helicone.ai/) - オープンソース LLM の保守性プラットフォームで、AI アプリケーションをロギング、監視、デバッグします。 [#opensource](https://github.com/Helicone/helicone)
- [Wren AI](https://www.getwren.ai/oss) - オープンソースの text-to-SQL と semantic レイヤーを持つ ジェネレーション BI エージェント。 [#opensource](https://github.com/Canner/WrenAI)
- [Cleanlab](https://cleanlab.ai/tlm/) - LLM出力における幻覚の検出とスコアのAPI
- [Opik](https://github.com/comet-ml/opik) - LLMアプリケーションをトレース、評価、監視するためのオープンソースプラットフォーム。 [#opensource](https://github.com/comet-ml/opik)
- [Langfuse](https://langfuse.com/) - トラッシング、評価、プロンプト管理、メトリクスのためのオープンソースLMエンジニアリングプラットフォーム。 [#opensource](https://github.com/langfuse/langfuse)
- [MLflow](https://mlflow.org/) - ML実験の追跡、モデルの評価、プロンプトの評価、モデルの展開、およびLMLの観察性の追加のためのオープンソースプラットフォーム。 [#opensource](https://github.com/mlflow/mlflow)
- [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - LLM にプロンプトを送信し、応答をシームレスに再水化する前に、ローカルで PII を匿名化するためのゼロトラスト SDK。
- [Agentset](https://agentset.ai/) - RAGおよびエージェントアプリケーションの構築と評価のためのオープンソースプラットフォーム。 [#opensource](https://github.com/agentset-ai/agentset)
- [Manifest](https://manifest.build) - エージェントの要求を最もコスト効率の高いモデルにルーティングするオープンソースLLMルータで、使用制限とモデルベンチマーキングが可能です。 [#opensource](https://github.com/mnfst/manifest)
- [ai-i18n](https://github.com/i18n-actions/ai-i18n) - LLM (Claude, GPT, Ollama) を使用して、i18n ローカリゼーションファイルを自動翻訳する GitHub アクション。 #オープンソース
- [Groq](https://groq.com/) - カスタムLPUハードウェアを搭載したオープンソースLMを実行するためのクラウドインフェレンスAPI。
- [Model Context Protocol](https://modelcontextprotocol.io/) - AIモデルを外部ツールやデータソースに接続するためのオープンスタンダード。 [MCP Registry](https://registry.modelcontextprotocol.io/) [#opensource](https://github.com/modelcontextprotocol/modelcontextprotocol)
- [Steel Browser](https://github.com/steel-dev/steel-browser) - セッション管理、スクリーンショット、PDF、プロキシ、およびアンチボットツールを使用して、AIエージェント用のオープンソースブラウザサンドボックスと自動化インフラストラクチャ。 #オープンソース
- [Bifrost](https://github.com/maximhq/bifrost) - 1000以上のモデルのルーティング、ロードバランシング、ガードレール、およびオブザーバビリティを備えたオープンソースLMゲートウェイ。 #オープンソース
- [fal](https://fal.ai/) - 画像、ビデオ、音声、および3D生成モデルへのアクセスおよび展開のための開発者プラットフォーム。

### プレイグラウンド

- [OpenAI Playground](https://platform.openai.com/playground) - リソース、チュートリアル、API ドキュメント、および動的例をご覧ください。
- [Google AI Studio](https://aistudio.google.com/) - Gemini と実験モデルを組み合わせるWebベースのツールです。
- [GitHub Models](https://github.com/marketplace/models) - AIモデルでAIモデルを探し、実験を行い、ジェネレーションAIアプリケーションを開発

### ローカルLM展開

- [Ollama](https://github.com/ollama/ollama) - ローカルで大きな言語モデルを立ち上げ、実行できます。
- [Open WebUI](https://github.com/open-webui/open-webui) - 完全にオフラインで動作するように設計された、拡張可能な機能が豊富でユーザーフレンドリーなセルフホスト型AIプラットフォーム。 #オープンソース
- [Jan](https://jan.ai/) - Mistral や Llama2 などの LLM をコンピューターにローカルおよびオフラインで実行するか、リモート AI API に接続します。 [#opensource](https://github.com/janhq/jan)
- [Msty](https://msty.ai/) - ローカルおよびオンラインAIモデルのための簡単で強力なインターフェイス。
- [PyGPT](https://pygpt.net/) - チャット、ビジョン、エージェント、画像生成、ツール、コマンド、ボイスコントロールなどのパーソナルデスクトップAIアシスタント。 #オープンソース
- [LLM](https://llm.datasette.io/) - 大きい言語モデル、リモートおよびローカルと相互作用するためのCLIユーティリティとPythonライブラリ。 [#opensource](https://github.com/simonw/llm)
- [LM Studio](https://lmstudio.ai) - ローカルLMをコンピュータにダウンロードして実行します。
- [RunThisLLM](https://runthisllm.com) - ハードウェア上で実行できる LLM を参照してください。
- [Harbor](https://github.com/av/harbor) - ローカルLLMバックエンド、UI、および1つのコマンドでサービスを実行するためのコンテナ化されたツールキット。 #オープンソース
- [off-grid-mobile](https://github.com/alichherawalla/off-grid-mobile-ai) - LLM、Visionモデル、Stable Diffusion on-deviceを実行するためのネイティブアプリを、インターネットアクセスなしでiOSとAndroid上で実行します。 #オープンソース
- [Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) - OpenAI 互換ローカル LLM インフェレンス サーバーは、Apple シリコン 向けに最適化され、ツール呼び出し、推論、ビジョン、および構造化された出力サポートを備えています。 #オープンソース

## エージェント

### 自動エージェント

- [Auto-GPT](https://github.com/Significant-Gravitas/AutoGPT) - GPT-4を完全に自律的にする実験的なオープンソースの試み。
- [babyagi](https://github.com/yoheinakajima/babyagi) - AIを活用したタスク管理システム
- [AgentGPT](https://github.com/reworkd/AgentGPT) - ブラウザで自律的なAIエージェントを組み立て、構成、デプロイします。
- [GPT Engineer](https://github.com/AntonOsika/gpt-engineer) - ビルドしたいものを指定すると、AIは明確化を求め、それをビルドします。
- [GPT Prompt Engineer](https://github.com/mshumer/gpt-prompt-engineer) - 自動化されたプロンプト工学。 最高のものを見つけるためにプロンプトを生成、テスト、ランク付けします。
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT) - マルチエージェントフレームワーク: 1 行の要件を与え、PRD、設計、タスク、リポジトリを返します。
- [AutoGen](https://github.com/microsoft/autogen) - AutoGenは、タスクを解決するための複数のエージェントを使用してLMLアプリケーションの開発を可能にするフレームワークです。
- [GPT Pilot](https://github.com/Pythagora-io/gpt-pilot) - 開発者が実装を監督している間、スケーラブルなアプリをゼロから記述する Dev ツール。
- [Devin](https://devin.ai/) - Cognition Labsによる自動AIソフトウェアエンジニア。
- [OpenHands](https://github.com/OpenHands/OpenHands) - ソフトウェアエンジニアリングの複雑さをナビゲートするように設計された自律的なエージェント。 #オープンソース
- [Davika](https://github.com/stitionai/devika) - エージェント型AIソフトウェアエンジニア #オープンソース
- [n8n](https://n8n.io/) - AI機能と業務プロセスの自動化を組み合わせたワークフロー自動化プラットフォーム。
- [Sauna](https://www.sauna.ai) - コンテキストを合成するためのAIアシスタント。 あなたの好みを学び、隠されたパターンを検出し、あなたの脳のコンテキストを増強し、積極的に働きます。
- [Claude Code](https://code.claude.com) - Anthropicのエージェントのコーディングツールは、端末に住んでいるので、アイデアをコードに変えるのに役立ちます。
- [Gemini CLI](https://geminicli.com) - ジェミニのパワーを直接端末に持ち込むオープンソースのAIエージェントです。 [#opensource](https://github.com/google-gemini/gemini-cli)
- [OpenCode](https://opencode.ai) - オープンソースのAIコーディングエージェント。 [#opensource](https://github.com/anomalyco/opencode)
- [Mastra](https://mastra.ai) - AIエージェント、ワークフロー、アプリケーションの構築のためのTypeScriptフレームワーク。 [#opensource](https://github.com/mastra-ai/mastra)
- [OpenClaw](https://openclaw.ai) - 自分のデバイス上で実行する個人AIアシスタント。 [#opensource](https://github.com/openclaw/openclaw)
- [moltbook](https://www.moltbook.com) - AIエージェントのソーシャルネットワーク
- [AgentMail](https://www.agentmail.to) - AIエージェントのメール受信トレイ。
- [Openwork](https://openwork.bot) - AIエージェントは、それぞれを雇用し、作業を完了し、結果を確認し、トークンを獲得します。
- [Agent Skills](https://agentskills.io) - AIエージェントの再利用可能な機能と専門知識をパッケージ化するためのオープンフォーマットとリファレンスSDK。 [#opensource](https://github.com/agentskills/agentskills)
- [PraisonAI](https://github.com/MervinPraison/PraisonAI) - ワークフロー、ツールの統合、メモリを備えたマルチエージェントのAIシステムを構築するフレームワーク。 #オープンソース
- [Hermes Agent](https://hermes-agent.nousresearch.com) - メモリ、メッセージングインテグレーション、サンドボックス化されたツールの実行で個人エージェントを自己改善します。 [#opensource](https://github.com/NousResearch/hermes-agent)
- [OpenAgents](https://github.com/openagents-org/openagents) - 複数のプロトコル対応(WebSocket、gRPC、HTTP、MCP、A2A)でAIエージェントネットワークを構築するためのオープンソースプラットフォーム。 #オープンソース
- [Dorothy](https://github.com/Charlie85270/Dorothy) - オープンソースのデスクトップアプリで、複数のAI CLIエージェントを同時に自動化とカンバン管理で連携できます。 #オープンソース
- [Hive](https://github.com/aden-hive/hive) - 自動生成されたグラフ、進化ループ、およびMCP統合を備えたオープンソースのマルチエージェントフレームワーク。 #オープンソース

### カスタムアシスタント

- [Poe](https://poe.com/) - Poeは、さまざまなボットへのアクセスを提供します。
- [GPT Builder](https://chatgpt.com/gpts/editor) - GPTベースのアシスタントを作成するアシスタント。

## サイトマップ

### モデル

- [DALL·E 2](https://openai.com/dall-e-2/) - OpenAIによるDALL・E2は、自然言語の記述から現実的なイメージと芸術を作成することができる新しいAIシステムです。
- [Stable Diffusion](https://huggingface.co/CompVis/stable-diffusion-v1-4) - Stability AIによる安定した拡散は、テキストから画像を生成するアートテキスト・ツー・イメージ・モデルの状態です。 #オープンソース
- [Midjourney](https://www.midjourney.com/) - Midjourneyは、人間種の想像力を拡張し、新しい思考を探求し、独立した研究ラボです。
- [Imagen](https://imagen.research.google/) - Googleによるイメージは、非前例のないフォトレアリスムと深いレベルの言語理解のテキスト・ツー・イメージの拡散モデルです。
- [Make-A-Scene](https://ai.meta.com/blog/greater-creative-control-for-ai-image-generation/) - メタによるMake-A-Sceneは、テキストの説明とフリーフォームのスケッチを通してビジョンを記述し、説明することを可能にすることによって、それを使用している人々の手に創造的な制御を置くマルチモーダル遺伝子AI方法です。
- [DragGAN](https://github.com/XingangPan/DragGAN) - あなたのガンをドラッグ: 生成イメージマニホールドのインタラクティブポイントベースの操作。
- [Flux](https://github.com/black-forest-labs/flux) - ブラックフォレストラボによるテキスト・ツー・イメージモデルで、高品質のフォトレアルリスティック出力を実現します。 #オープンソース

### サービス

- [Craiyon](https://www.craiyon.com/) - 以前のDALL-E miniは、任意のテキストプロンプトから画像を描画できるAIモデルです。
- [DreamStudio](https://stability.ai/dreamstudio) - DreamStudioは、安定した拡散画像生成モデルを使用して画像を作成するための使いやすいインターフェイスです。
- [Artbreeder](https://www.artbreeder.com/) - Artbreederは、コラボレーションと探索を容易にすることで、ユーザーの創造性を高める新しいタイプのクリエイティブツールです。
- [Magic Eraser](https://magicstudio.com/magiceraser/) - 画像から不要なものを秒単位で削除します。
- [Imagine by Magic Studio](https://magicstudio.com/imagine) - 自分の心に何かを記述するだけで自分を表現できるMagic Studioのツール。
- [Alpaca](https://www.getalpaca.io/) - 安定した拡散フォトショッププラグイン。
- [Patience.ai](https://www.patience.ai/) - Patience.aiは、安定性によって開発された最先端のAIであるStable Diffusionで画像を作成するアプリです。 人工知能
- [GenShare](https://www.genshare.io/) - 自由のための秒単位で芸術を発生させます。 あなたが作成するものを所有し、共有します。 マルチメディアのジェネレーションスタジオ、民主化の設計および創造性。
- [Playground](https://playground.com/) - Playgroundは無料で使えるオンラインAIイメージクリエイターです。 芸術、ソーシャルメディア投稿、プレゼンテーション、ポスター、ビデオ、ロゴなどを作成するために使用します。
- [modyfi](https://www.modyfi.com/) - AIを活用した画像生成、アニメーション、リアルタイムコラボレーションによるブラウザベースのデザインプラットフォーム。
- [PhotoRoom](https://www.photoroom.com/) - お使いの携帯電話のみで商品や肖像画画像を作成します。 背景を取り除き、背景を変え、製品を展示します。
- [Photo AI](https://photoai.com/ai-avatars) - 独自のAI生成アバターを作成します。
- [ClipDrop](https://clipdrop.co/) - 写真スタジオなしで専門の視覚を作成します。 [stability.ai](https://stability.ai/).
- [Lensa](https://prisma-ai.com/lensa) - 安定した拡散を利用したパーソナライズアバターの生成を含むオールインワン画像編集アプリ。
- [RunDiffusion](https://rundiffusion.com/) - クラウドベースのワークスペースでAIを生成したアートを制作
- [Ideogram](https://ideogram.ai/) - テキスト・ツー・イメージ・プラットフォームで、クリエイティブな表現をよりアクセスしやすいようにします。
- [Bing Image Creator](https://www.bing.com/images/create) - DALLE・3 は安全機能のテキスト・ツー・イメージの発電機を基づかせていました。
- [KREA](https://www.krea.ai/) - あなたのスタイル、コンセプト、製品について知ったAIで高品質のビジュアルを生成します。
- [Nightcafe](https://creator.nightcafe.studio/) - NightCafe Creatorは、AIアート世代の複数の方法を持つAIアートジェネレータアプリです。
- [Leonardo AI](https://leonardo.ai/) - これまでにない品質、スピード、スタイルでプロジェクトを制作するビジュアルアセットを作成します。
- [Recraft](https://www.recraft.ai/) - クリエイターが簡単に生成し、元の画像、ベクトルアート、イラスト、アイコン、および3Dグラフィックスを反復するAIツール。
- [Reve Image](https://reve.com/) - 急な付着、美学およびタイポグラフィで地面から排出されるモデル。
- [Magnific](https://www.magnific.com/) - 画像生成、背景除去、クリエイティブテンプレートを含むAIを活用したデザインツール。
- [FigureLabs](https://www.figurelabs.ai/) - テキストの記述やスケッチからベクトル形式で公開準備科学的な図を生成するAIツール。

### グラフィックデザイン

- [Brandmark](https://brandmark.io/) - AIベースのロゴデザインツール
- [Gamma](https://gamma.app/) - 書式や設計作業のどれも、美しいプレゼンテーションやウェブページを作成します。
- [Microsoft Designer](https://designer.microsoft.com/) - フラッシュでデザインをスタンス。
- [Napkin](https://www.napkin.ai/) - テキストから図、グラフ、インフォグラフィックを生成するためのAIツール。

### 画像ライブラリ

- [Lexica](https://lexica.art/) - 安定した拡散の検索エンジン。
- [OpenArt](https://openart.ai/) - 10M以上のプロンプトを検索し、安定した拡散、DALL・E2を介してAIアートを生成します。
- [PromptHero](https://prompthero.com/) - 安定した拡散、ChatGPT、ミッドジャーニーなどのモデルの検索プロンプト
- [PromptBase](https://promptbase.com/) - トップ プロンプト エンジニアからプロンプトを検索します。 自分のプロンプトを売る.

### モデルライブラリ

- [Civitai](https://civitai.com/) - コミュニティ駆動型AIモデル共有ツール。
- [Stable Diffusion Models](https://rentry.org/sdmodels) - Rentalry.orgの安定した拡散チェックポイントの包括的なリスト。

### 安定した拡散リソース

- [Stable Horde](https://stablehorde.net/) - 安定した拡散労働者の群集整理された分散クラスター。
- [DiffusionDB](https://diffusiondb.com/) - すべてのパブリックアプリのリスト, 開発者ツール, ガイドと安定した拡散のためのプラグイン. [Airtable version](https://airtable.com/shr0HlBwbw3nZ8Ht3/tblxOCylXV8ynh7ti).
- [PublicPrompts](https://publicprompts.art/) - 安定した拡散のための自由なプロンプトのコレクション。
- [Hugging Face Diffusion Models Course](https://github.com/huggingface/diffusion-models-class) - 拡散モデルのオンラインコースのためのPython材料 [@huggingface](https://github.com/huggingface).
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI) - 安定した拡散ワークフローの構築と実行のためのノードベースのインターフェイス。 [#opensource](https://github.com/comfyanonymous/ComfyUI)

## ビデオ

- [Runway](https://runwayml.com/) - 魔法のAIツール、リアルタイムコラボレーション、精密編集など 次世代コンテンツ創造スイート
- [Synthesia](https://www.synthesia.io/) - 短いテキストから数分で動画を作成します。
- [Colossyan](https://www.colossyan.com/) - 学習と開発は、ビデオクリエイターに焦点を当てました. 複数の言語で教育ビデオを作成するためにAIアバターを使用します。
- [Fliki](https://fliki.ai/) - テキストをビデオやテキストに作成し、音声コンテンツを音声に数分で音声を出力します。
- [Pictory](https://pictory.ai/) - Pictoryの強力なAIは、テキストを使用してプロフェッショナルな品質の動画を作成および編集することができます。
- [Pika](https://pika.art/) - クリエイティビティをモーションにさせるアイデアツービデオプラットフォーム。
- [HeyGen](https://app.heygen.com/) - 数分でカスタマイズ可能なAIアバターで動画を話せるようにスクリプトをオンにします。
- [Luma Dream Machine](https://lumalabs.ai/app) - テキストや画像から、高品質でリアルな動画を高速化するAIモデル。
- [KLING AI](https://kling.ai/) - 想像力のある画像や動画を作成するためのツール。
- [Hailuo AI](https://hailuoai.video/) - AI搭載テキスト・ツー・ビデオ・ジェネレーター
- [Google Flow](https://labs.google/fx/tools/flow) - ヴェオのAI映像制作ツール
- [Seedance 2.0](https://seed.bytedance.com/en/seedance2_0) - Niobotics ByteDanceが開発した映像とテキスト・ツー・ビデオモデル。
- [MaxVideoAI](https://maxvideoai.com/examples) - 複数のAIビデオモデル間で動画を生成および比較するためのワークスペース。
- [HyperFrames](https://hyperframes.heygen.com/) - HTML、CSS、JavaScript を書くことで動画をレンダリングするAIエージェントのフレームワーク。 [#opensource](https://github.com/heygen-com/hyperframes)

### アバター

- [D-ID](https://www.d-id.com/) - ボタンのタッチでアバターを話して作成してやり取りします。
- [HeyGen](https://app.heygen.com/) - 数分でカスタマイズ可能なAIアバターで動画を話せるようにスクリプトをオンにします。
- [Affogato](https://affogato.ai/) - TikTok、Reels、Shorts用のAI生成製品ビデオ広告を作成します。

### アニメーション

- [Autodesk Flow Studio](https://www.autodesk.com/products/flow-studio) - CGキャラクターをアニメーション化・合成するためのAI搭載ツール。

## オーディオ

### テキストツースピーチ

- [Eleven Labs](https://elevenlabs.io/) - AIボイスジェネレーター
- [Resemble AI](https://www.resemble.ai/) - テキストからスピーチまでのAIボイスジェネレータとボイスクローニング。
- [WellSaid](https://www.wellsaid.io/) - テキストをリアルタイムで音声に変換します。
- [TorToiSe](https://github.com/neonbjb/tortoise-tts) - 品質に重点を置いたマルチボイステキストツースピーチシステム。 #オープンソース
- [Bark](https://github.com/suno-ai/bark) - トランスベースのテキスト・ツー・オーディオ・モデル。 #オープンソース
- [TTS WebUI](https://github.com/rsxdalv/TTS-WebUI) - 複数のテキスト・ツー・スピーナ、音楽生成、オーディオツールを実行するためのWeb UI #オープンソース

### スピーチ・テキスト

- [Whisper](https://openai.com/index/whisper/) - 大規模な弱い監督による強いスピーチ認識。 [#opensource](https://github.com/openai/whisper)
- [Wispr Flow](https://wisprflow.ai/) - フローは、コンピュータ上の任意のアプリケーションのためのシームレスなボイスディクテーションで迅速に書き込みを行います。
- [Vibe Transcribe](https://thewh1teagle.github.io/vibe/) - 楽な音声とビデオの転写のためのオールインワンソリューション。 [#opensource](https://github.com/thewh1teagle/vibe)
- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) - C/C++でOpenAIのWhisperモデルのポート。 #opensource
- [whisper-ctranslate2](https://github.com/Softcatala/whisper-ctranslate2) - Whisper CLI クライアントは、CTranslate2 を使用して、元の OpenAI クライアントと互換性があり、より高速なインフェレンスを実現します。 [#opensource](https://github.com/Softcatala/whisper-ctranslate2)
- [NeMo](https://github.com/NVIDIA-NeMo/Speech) - NVIDIAによるオープンソースフレームワークで、自動音声認識とテキストツースピーチを含む音声AIシステムを構築できます。 #オープンソース
- [Parakeet](https://huggingface.co/collections/nvidia/parakeet-asr-659711f49d1469e51546e021) - NVIDIA によるオープンな音声認識モデルのファミリーで、ストリーミングや多言語の多様体を含みます。 #オープンソース

### ミュージック

- [Harmonai](https://www.harmonai.org/) - 私たちは、オープンソースのジェネレーション・オーディオ・ツールを解放するコミュニティ主導の組織で、音楽制作をより使いやすく、誰もが楽しめるようにしています。
- [Mubert](https://mubert.com/) - コンテンツクリエイター、ブランド、開発者向けのロイヤリティフリーの音楽エコシステム。
- [MusicLM](https://google-research.github.io/seanet/musiclm/examples/) - テキスト記述からハイファイ音楽を生成するためのGoogleリサーチによるモデル。
- [AudioCraft](https://audiocraft.metademolab.com/) - メタによるジェネレーションオーディオニーズのワンストップコードベース。 MusicGenは、音楽とAudioGenの音のために音楽を収録しています。 #オープンソース
- [Stable Audio](https://stability.ai/stable-audio) - 安定した音声は安定性です 音楽や音響効果を生み出すAI初の製品です。
- [AIVA](https://www.aiva.ai/) - AIベースの音楽生成アシスタント。 250以上のスタイルからお選びいただけます。
- [Suno AI](https://suno.com/) - 誰もが素晴らしい音楽を作ることができます。 楽器を必要としない、想像力だけ。 心から音楽まで。
- [Udio](https://www.udio.com/) - 世界中の音楽を発見し、創造し、共有します。

## その他

- [PromptBase](https://promptbase.com/) - DALL・E、GPT-3、Midjourney、Stable Diffusionの質の高いプロンプトを購入および販売するための市場。
- [This Image Does Not Exist](https://thisimagedoesnotexist.com/) - 画像が人間であるか、コンピューターが生成されたかを判断する能力をテストします。
- [Have I Been Trained?](https://haveibeentrained.com/) - 人気のAIアートモデルを鍛えるために、画像が使用されているかどうかを確認してください。
- [AI Dungeon](https://aidungeon.io/) - 人工知能が生き生き生きていく間、直接(そして星)のテキストベースのアドベンチャーストーリーゲーム。
- [Clickable](https://www.clickable.so/) - AIで広告を秒単位で生成します。 すべてのマーケティングチャネルのための美しい、ブランド一貫性、そして非常に変換広告。
- [Scale Spellbook](https://scale.com/genai-platform) - 大規模な Spellbook で大規模な言語モデルアプリをビルド、比較、デプロイします。
- [Scenario](https://www.scenario.com/) - 人工知能が生み出すゲームアセット。
- [Teleprompter](https://github.com/danielgross/teleprompter) - 貴社の会議を聴くためのオンデバイスAIで、カリスマティック見積提案を行います。
- [FinChat](https://finchat.io/) - パブリック企業や投資家の質問に答えるAI、FinChatを活用。
- [Morpher AI](https://morpher.com/ai) - Morpher AIは、あらゆる市場におけるリアルタイムのインサイトと分析を実現します。
- [Whimsical AI](https://whimsical.com/ai) - GPTのマインドマッピング、フローチャート、ビジュアルツールなど、迅速なアイデア開発とプロセスの組織。
- [Selfies with Sama](https://selfies-with-sama.vost.ai) - 実際の億万長者と写真をつかむ!

## 学習リソース

- [Learn Prompting](https://learnprompting.org/) - 人工知能とのコミュニケーションに関する無料、オープンソースのコース。
- [Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) - 迅速なエンジニアリングのためのガイドとリソース。
- [ChatGPT prompt engineering for developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) - Isa Fulford(OpenAI)とAndrew Ng(DeepLearning.AI)による短期コースです。
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) - OpenAI API の使用例とガイド
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) - 大規模な言語モデルからより良い結果を得るために戦略と戦術.
- [PromptPerfect](https://promptperfect.jina.ai/) - 迅速なエンジニアリングのためのツール。
- [Anthropic courses](https://github.com/anthropics/courses) - 人類学の教育コース。
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - Sebastian RaschkaのLLMを建設するためのガイド。
- [Prompt Engineering for Vision Models](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - 無料のDeepLearning。 自然言語、境界ボックス、セグメンテーションマスク、座標点、その他の画像でコンピュータビジョンモデルをプロンプトングする方法に関するAIショートコース。
- [Build a Reasoning Model (From Scratch)](https://www.manning.com/books/build-a-reasoning-model-from-scratch) - Sebastian Raschkaによる地上から作業推論モデルを構築するガイド。
- [Build an AI Agent (From Scratch)](https://www.manning.com/books/build-an-ai-agent-from-scratch) - ツール、メモリ、プランニング、マルチエージェントシステムを用いたAIエージェントの構築に関する書籍。
- [Build a DeepSeek Model (From Scratch)](https://www.manning.com/books/build-a-deepseek-model-from-scratch) - DeepSeekスタイルのLMアーキテクチャ、トレーニング、蒸留方法の実装に関する書籍。
- [AI Governance](https://www.manning.com/books/ai-governance) - ガバナンス、リスク、コンプライアンス、セキュリティ、プライバシー、および統合AIシステムに対する監督に関する書籍。
- [AnimatedLLM](https://animatedllm.github.io/) - 大規模な言語モデルの動作方法を説明するインタラクティブな視覚化。 [#opensource](https://github.com/kasnerz/animated-llm)
- [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) - トランスベースLMの動作方法のインタラクティブな可視化、ブラウザでライブGPT-2モデルを実行します。 [#opensource](https://github.com/poloclub/transformer-explainer)

## その他のリスト

- [Tools and Resources for AI Art](https://pharmapsychotic.com/tools.html) - ジェネレーションAIのためのGoogle Colabノートブックの大規模なリスト [@pharmapsychotic](https://twitter.com/pharmapsychotic).
- [The Generative AI Application Landscape](https://twitter.com/sonyatweetybird/status/1584580362339962880) - ジェネレーションAIエコシステムをマッピングするインフォグラフィック [Sonya Huang](https://twitter.com/sonyatweetybird) セコイア・キャピタルの
- [Startups - @builtwithgenai](https://airtable.com/shr6nfE9FOHp17IjG/tblL3ekHZfkm3p6YT) - エアテーブルリスト [@builtwithgenai](https://twitter.com/builtwithgenai).
- [The Generative AI Index](https://airtable.com/shrH4REIgddv8SzUo/tbl5dsXdD1P859QLO) - エアテーブルリスト [Scale Venture Partners](https://www.scalevp.com/generative-ai).
- [Generative AI for Games](https://twitter.com/gwertz/status/1593268767269670912) - ゲーミングAIで働く企業の市場マップ [a16z](https://a16z.com/).
- [Generative Deep Art](https://github.com/filipecalegario/awesome-generative-ai) - 芸術的使用のための遺伝子深層学習ツール、作品、モデルなどのキュレーションリスト [@filipecalegario](https://github.com/filipecalegario/).
- [GPT-3 Demo](https://gpt3demo.com/) - GPT-3 の例、デモ、アプリ、ショーケース、NLP のユースケースで紹介します。
- [GPT-4 Demo](https://gpt4demo.com/) - GPT-4 アプリとユースケース
- [The Generative AI Landscape](https://github.com/ai-collection/ai-collection) - Awesome Generative AI アプリケーションのコレクション。
- [Molecular design](https://github.com/AspirinCode/papers-for-molecular-design-using-DL) - ジェネレーションAIやディープラーニングを用いた分子設計の一覧です。
- [Open LLMs](https://github.com/eugeneyan/open-llms) - 商用利用で利用できるLLMの一覧です。
- [Awesome Music AI](https://github.com/steven2358/awesome-music-ai) - 音楽構成、生成、分析のためのAIツールのキュレーションリスト。
- [Awesome AI Market Maps](https://github.com/joylarkin/Awesome-AI-Market-Maps) - 2026、2025、2024年のAIマーケットマップのキュレーションリスト [Joy Larkin](https://twitter.com/joy).
- [Awesome RAG Production](https://github.com/Yigtwxx/Awesome-RAG-Production) - RAGシステムを構築するためのツールとリソースのキュレーションリスト。

### ChatGPTの一覧

- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - ChatGPTとGPT-3の素晴らしいツール、デモ、ドキュメントのキュレーションリスト [@jordn](https://github.com/jordn).
- [Awesome ChatGPT Prompts](https://github.com/f/prompts.chat) - ChatGPTモデルで使用するプロンプト例の集合。
- [FlowGPT](https://flowgpt.com/) - ワークフローを最適なプロンプトで拡大します。
- [ChatGPT Prompts for Data Science](https://github.com/travistangvh/ChatGPT-Data-Science-Prompts) - ChatGPT の有用なデータサイエンスプロンプトのリポジトリ。
- [Awesome ChatGPT](https://github.com/sindresorhus/awesome-chatgpt) - ChatGPTのもう1つの素晴らしいリスト。
