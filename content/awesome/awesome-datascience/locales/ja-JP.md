<div align="center"><img src="./assets/head.jpg"></div>

# AWESOME DATA SCIENCE

[![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

コントリビューションを歓迎します。詳細は [`CONTRIBUTING.md`](CONTRIBUTING.md) をご覧ください。

**現実世界の問題を解決するための概念を学び、実践するオープンソースのデータサイエンスリポジトリです。**

これは**データサイエンス**の学習を始めるための近道です。手順に沿って、「データサイエンスとは何か、学ぶには何を勉強すればよいか」という問いに答えていきましょう。

<br>

## $ [academic](https://academic.io/cli)

```
$ brew tap academic/tap
$ brew install academic
```

## スポンサー

[![Creavit Studio: recording, editing, and motion in one app](https://raw.githubusercontent.com/creavit-studio/files/refs/heads/main/static/crvt-banner.png)](https://creavit.studio/?utm_source=github&utm_medium=sponsorship&utm_campaign=creavit_founding_alpha&utm_content=crvt_banner)

[![Graphyn: visualize specialized agent workflows](https://raw.githubusercontent.com/fuego-wtf/graphyn-code/main/assets/graphyn-agent-workflows.png)](https://graphyn.ai/?utm_source=github&utm_medium=sponsorship&utm_campaign=graphyn_founding_alpha&utm_content=awesome_datascience_banner)



スポンサーになりませんか？ `github@academic.io`



## 目次

- [データサイエンスとは？](#what-is-data-science)
- [何から始める？](#where-do-i-start)
- [エージェント](#agents)
- [プロジェクト](#projects)
- [学習リソース](#training-resources)
  - [チュートリアル](#tutorials)
  - [無料コース](#free-courses)
  - [大規模公開オンライン講座](#moocs)
  - [集中プログラム](#intensive-programs)
  - [大学](#colleges)
- [データサイエンス・ツールボックス](#the-data-science-toolbox)

  - [アルゴリズム](#algorithms)
    - [教師あり学習](#supervised-learning)
    - [教師なし学習](#unsupervised-learning)
    - [半教師あり学習](#semi-supervised-learning)
    - [強化学習](#reinforcement-learning)
    - [データマイニング・アルゴリズム](#data-mining-algorithms)
    - [深層学習アーキテクチャ](#deep-learning-architectures)
  - [汎用機械学習パッケージ](#general-machine-learning-packages)
  - [深層学習パッケージ](#deep-learning-packages)
    - [PyTorchエコシステム](#pytorch-ecosystem)
    - [TensorFlowエコシステム](#tensorflow-ecosystem)
    - [Kerasエコシステム](#keras-ecosystem)
  - [可視化ツール](#visualization-tools)
  - [その他のツール](#miscellaneous-tools)
- [文献とメディア](#literature-and-media)
  - [書籍](#books)
    - [書籍の割引（アフィリエイト）](#book-deals-affiliated)
  - [学術誌・出版物・雑誌](#journals-publications-and-magazines)
  - [ニュースレター](#newsletters)
  - [ブロガー](#bloggers)
  - [プレゼンテーション](#presentations)
  - [ポッドキャスト](#podcasts)
  - [YouTube動画・チャンネル](#youtube-videos--channels)
- [コミュニティ](#socialize)
  - [Facebookアカウント](#facebook-accounts)
  - [Twitterアカウント](#twitter-accounts)
  - [Telegramチャンネル](#telegram-channels)
  - [Slackコミュニティ](#slack-communities)
  - [GitHubグループ](#github-groups)
  - [データサイエンス・コンペティション](#data-science-competitions)
- [楽しもう](#fun)
  - [インフォグラフィック](#infographics)
  - [データセット](#datasets)
  - [コミック](#comics)
- [その他のAwesomeリスト](#other-awesome-lists)
  - [趣味](#hobby)

## データサイエンスとは？
**[`^        トップに戻る        ^`](#awesome-data-science)**

データサイエンスは、今日のコンピューターとインターネットの分野で最も注目されている話題の一つです。これまで人々はアプリケーションやシステムからデータを収集してきました。そして今、それらを分析する時が来ています。次の段階では、データから提案を導き出し、将来を予測します。[こちら](https://www.quora.com/Data-Science/What-is-data-science)では、**データサイエンス**について最もよく問われる質問と、専門家による数百件の回答を確認できます。


| リンク | プレビュー |
| --- | --- |
| [データサイエンス入門](https://github.com/microsoft/Data-Science-For-Beginners) | Microsoftがデータサイエンスを学ぶための10週間・全20レッスンのカリキュラムを提供しています。 |
| [データサイエンスとは？（O'Reilly）](https://www.oreilly.com/ideas/what-is-data-science) | _データサイエンティストは、起業家精神と忍耐力、データ製品を段階的に構築する意欲、探索する能力、解決策を反復改善する能力を兼ね備えています。本質的に学際的な職種であり、最初のデータ収集やデータの整備から結論の導出まで、問題のあらゆる側面に取り組みます。既成概念にとらわれず問題を捉える新しい方法を考えたり、「大量のデータがある。何ができるだろう？」という幅広い問題に取り組んだりできます。_ |
| [データサイエンスとは？（Quora）](https://www.quora.com/Data-Science/What-is-data-science) | データサイエンスとは、テクノロジー、アルゴリズム開発、データ推論など、データに関するさまざまな要素を組み合わせ、データを調査・分析して難題への革新的な解決策を見つける分野です。基本的には、創造的な方法でデータを分析し、事業成長につなげることを目的とします。 |
| [21世紀で最も魅力的な職業](https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century) | _今日のデータサイエンティストは、1980年代から90年代のウォール街の「クオンツ」に似ています。当時、物理学や数学を専門とする人々が投資銀行やヘッジファンドに集まり、まったく新しいアルゴリズムやデータ戦略を考案しました。その後、各大学が金融工学の修士課程を設置し、より一般企業でも採用しやすい次世代の人材を育成しました。1990年代後半には検索エンジニアでも同じことが起こり、希少だった専門技能がやがてコンピューターサイエンスの課程で教えられるようになりました。_ |
| [Wikipedia](https://en.wikipedia.org/wiki/Data_science) | _データサイエンスは、科学的手法、プロセス、アルゴリズム、システムを用いて、構造化・非構造化データから知識や洞察を引き出す学際的な分野です。データマイニング、機械学習、ビッグデータと関連しています。_ |
| [データサイエンティストになる方法](https://www.mastersindatascience.org/careers/data-scientist/) | _データサイエンティストは、構造化・非構造化データの大規模な集合を収集・分析する、いわばビッグデータの専門家です。コンピューターサイエンス、統計学、数学を組み合わせ、データを分析・処理・モデル化したうえで結果を解釈し、企業やその他の組織が実行できる計画を作成します。_ |
| [データサイエンスのごく短い歴史](https://www.forbes.com/sites/gilpress/2013/05/28/a-very-short-history-of-data-science/) | _データサイエンティストが魅力的な職業となった経緯は、成熟した統計学と、まだ若いコンピューターサイエンスが結び付いた歴史でもあります。「データサイエンス」という用語は、膨大なビッグデータを解釈する新しい職業を指すものとして近年登場しました。しかし、データを理解する営みには長い歴史があり、科学者、統計学者、司書、コンピューター科学者などが長年議論してきました。以下の年表では、「データサイエンス」という用語とその用法の変遷、定義の試み、関連用語をたどります。_ |
|[データサイエンティスト向けソフトウェア開発リソース](https://www.rstudio.com/blog/software-development-resources-for-data-scientists/)|_データサイエンティストは探索的分析、統計、モデルを通じてデータを理解することに注力します。一方、ソフトウェア開発者は異なるツールを使い、別の知識を活用します。一見関係がないようでも、データサイエンスチームがソフトウェア開発のベストプラクティスを取り入れるメリットは大きくあります。バージョン管理、自動テストなどの開発スキルは、再現可能で本番運用に適したコードやツールの作成に役立ちます。_|
|[データサイエンティストへのロードマップ](https://www.scaler.com/blog/how-to-become-a-data-scientist/)|_1日あたり約3億2,877万テラバイトのデータが生み出される今日のデータ主導の世界では、データサイエンスは優れたキャリアの選択肢です。この量は日々増え続けており、データを活用して事業成長を促せる熟練したデータサイエンティストへの需要も高まっています。_|
|[データサイエンティストになる道のり](https://www.appliedaicourse.com/blog/how-to-become-a-data-scientist/)|_データサイエンスは、現在最も需要の高い職業の一つです。企業が意思決定にデータを活用するにつれて、熟練したデータサイエンティストの必要性は急速に高まっています。テクノロジー企業、医療機関、政府機関などあらゆる組織で、データサイエンティストは生データを価値ある洞察に変える重要な役割を担います。では、特に学び始めたばかりの場合、どうすればデータサイエンティストになれるのでしょうか？ _|

## 何から始める？
**[`^        トップに戻る        ^`](#awesome-data-science)**

必須ではありませんが、プログラミング言語を使えることは、データサイエンティストとして効果的に働くための重要なスキルです。現在最も人気がある言語は_Python_で、_R_が僅差で続きます。Pythonは幅広い分野で利用される汎用スクリプト言語です。Rは統計に特化した言語で、一般的な統計ツールが標準で数多く備わっています。

[Python](https://python.org/)は科学分野で圧倒的に人気の高い言語です。その理由には、使いやすさと、ユーザー作成のパッケージが充実した活発なエコシステムがあります。パッケージのインストール方法は主に2つあります。Pythonに同梱されるパッケージマネージャーのPip（`pip install`で実行）と、PythonやRのパッケージに加えてGitのような実行ファイルもダウンロードできる強力なパッケージマネージャー[Anaconda](https://www.anaconda.com)（`conda install`で実行）です。

Rとは異なり、Pythonはデータサイエンスを念頭にゼロから作られた言語ではありませんが、それを補うサードパーティー製ライブラリが豊富にあります。より網羅的なパッケージ一覧は後述しますが、データサイエンスを始める際には次の4つがおすすめです。[Scikit-Learn](https://scikit-learn.org/stable/index.html)は、人気の高いアルゴリズムを実装した汎用データサイエンスパッケージです。充実したドキュメント、チュートリアル、実装モデルの例も用意されています。自分で実装する場合でも、Scikit-Learnは一般的なアルゴリズムの仕組みを学べる貴重な資料になります。[Pandas](https://pandas.pydata.org/)を使うと、データを扱いやすい表形式で収集・分析できます。[Numpy](https://numpy.org/)はベクトルや行列を中心とする数学演算を高速に行うツールを提供します。[Matplotlib](https://matplotlib.org/)を基盤とする[Seaborn](https://seaborn.pydata.org/)は、適切な既定値を活用しながら美しいデータ可視化をすばやく作成でき、一般的な可視化の方法を示すギャラリーも備えています。

データサイエンティストを目指すうえで、最初に選ぶ言語はそれほど重要ではありません。PythonにもRにも長所と短所があります。自分の好きな言語を選び、以下に掲載した[無料コース](#free-courses)を確認してみましょう！

### 初心者向けロードマップ
学習を始めたばかりの方には、次の学習経路がおすすめです。

1. **Pythonを学ぶ** – 変数、ループ、関数などの基本から始めましょう
2. **主要なライブラリを学ぶ** – Pandas、NumPy、Matplotlib、Scikit-Learn
3. **初心者向けプロジェクトで練習する** – Kaggleでタイタニック号の生存予測や住宅価格予測に挑戦しましょう
4. **数学の基礎を学ぶ** – 統計学、線形代数、確率論
5. **機械学習に進む** – 教師あり学習 → 教師なし学習 → 深層学習

## エージェント

このセクションでは、データサイエンスのワークフローに役立つエージェントのフレームワークとツールを紹介します。

### フレームワーク
- [ADK-Rust](https://github.com/zavora-ai/adk-rust) - Rust向けの本番対応AIエージェント開発キットです。モデル非依存の設計（Gemini、OpenAI、Anthropic）、複数のエージェント種別（LLM、Graph、Workflow）、MCP対応、組み込みテレメトリーを備えています。
- [Lumen](https://github.com/holoviz/lumen) - データとの対話、自然言語からSQLへの変換、変換パイプラインや可視化の作成に使えるエージェントフレームワークです。宣言的な仕様を出力するため、内容を確認・編集したり、ノートブックで再度開いたり、ダッシュボードに組み込んだりできます。

### ツール
- [Frostbyte MCP](https://github.com/OzorOwn/frostbyte-mcp) - AIエージェント向けに、リアルタイムの暗号資産価格、IPジオロケーション、DNS検索、Markdown形式のウェブスクレイピング、コード実行、スクリーンショットなど13種類のデータツールを提供するMCPサーバーです。1つのAPIキーで40以上のサービスを利用できます。
- [Arch Tools](https://archtools.dev) - データサイエンスのワークフロー向けに、コード分析、ウェブスクレイピング、NLP、画像生成、暗号資産データ、検索など、本番対応のAI APIツールを61種類提供します。REST APIとMCPプロトコルに対応しています。[GitHub](https://github.com/Deesmo/Arch-AI-Tools)
- [Not Human Search](https://nothumansearch.ai) - 9,000以上のAIツールとAPIをインデックス化し、エージェント対応状況（llms.txt、OpenAPI、MCP、ai-plugin.json）を評価するAIエージェント向け検索エンジンです。REST APIとMCPサーバーを備え、プログラムからツールを検索できます。[GitHub](https://github.com/unitedideas/nothumansearch)
- [DeepAlpha](https://github.com/stefanoviana/deepalpha) - 72個の機械学習特徴量を使うLightGBMとXGBoostのアンサンブル型AI暗号資産取引フレームワークです。アウト・オブ・サンプルデータで、ウォークフォワード検証済みの正解率70.9%を達成。BybitとBinanceに対応し、MITライセンスで公開されています。[PyPI](https://pypi.org/project/deepalpha-bot/)から入手できます。
- [CAJAL](https://github.com/Agnuxo1/CAJAL) - 実在するarXiv引用、IMRaD構成、審査スコアリングを備えた、投稿可能な科学論文を生成するローカルAIエージェントです。Ollamaと4B～9Bモデルを使い完全オフラインで動作します。MITライセンスです。[HuggingFace](https://huggingface.co/Agnuxo/CAJAL-9B-P2PCLAW)
- [ai-evaluation](https://github.com/future-agi/ai-evaluation) - 50種類以上の指標、LLM-as-Judgeによる拡張、安全対策スキャナー（ジェイルブレイク、個人情報、プロンプトインジェクション）を備えたオープンソースのLLM・エージェント評価フレームワークです。データサイエンスのワークフローにおけるRAG出力、エージェントの軌跡、関数呼び出し動作の評価に役立ちます。
- [Kitaru](https://github.com/zenml-io/kitaru) - 実際のAIエージェント実行を記録し、変更後の条件で再実行して、デプロイ前に結果を評価できるオープンソースプラットフォームです。
- [Jev Social](https://github.com/socai-io/jev-social) - Jevが範囲を限定したInstagram、TikTok、LinkedIn操作を選び、Chrome上のローカルsocai CLIで実行する読み取り専用のソーシャル調査エージェントです。出典付きレポートとともに、出典に紐づく証拠を保持します。
- [YYLO Benchmark](https://github.com/yylo-dev/yylo-benchmark) - 過去のエージェントタスク、提供されたコーディングプロンプト、ワークフローを実行する、信頼済みホスト向けのオープンソース実験ランナーです。独立した試行と出力を保持し、後から異なる検査や判定器を使ってモデル、ハーネス、設定を比較できます。MITライセンスです。
- [YYLO](https://github.com/yylo-dev/yylo) - コーディングエージェントと再現可能なワークフローを統括するオープンソースのコマンドラインツールです。型付きのタスク、検証、マージ、リリース準備の境界と、記録で裏付けられたリポジトリ変更を提供します。MITライセンスで、npmからインストールできます。
- [YYLO Ledger](https://github.com/yylo-dev/yylo-ledger) - コーディングエージェントのプロジェクト向けコマンドライン・タスク／ワークフロー台帳です。リポジトリ内にハッシュチェーン化したMarkdownとしてカンバンボードとタスク状態を保存し、記録とアーカイブを追跡します。エージェントのワークツリー間で型付きのマージ・リリース手順を実行でき、MITライセンスです。

### 研究・知識検索
- [BGPT MCP](https://bgpt.pro/mcp) - 全文研究論文から抽出した実験データを基に構築された科学論文データベースに、AIエージェントがアクセスできるMCPサーバーです。各論文について、方法、結果、サンプル数、品質スコアなど25種類以上の構造化フィールドを返します。[GitHub](https://github.com/connerlambden/bgpt-mcp)
- [Chunk Tuner](https://github.com/shantanu-deshmukh/chunktuner) - RAG向けの文書チャンク分割戦略をベンチマークし、検索品質を評価して、コーパスに適した設定を推奨するオープンソースのPythonライブラリ兼MCPサーバーです。
- [II-Commons](https://github.com/Intelligent-Internet/II-Commons-Skills) - arXiv、PubMed/PMC、および対応する米国の政策コーパスを横断して決定論的に検索する、毎日更新のスキルとCLIです。
- [Spraay x402 Gateway](https://docs.spraay.app/#cat-research) - AIエージェント向けの研究・参照エンドポイントを23種類備えたx402決済ゲートウェイです。Wikipedia、arXiv、PubMed、Wikidata、学術引用検索、エンティティ抽出などを利用できます。BaseとSolana上でUSDCによる従量課金に対応し、APIキーやサブスクリプションは不要です。地理空間、AI推論、DeFi、コンピューティングなど39カテゴリにわたる150以上のエンドポイントも提供します。[GitHub](https://github.com/plagtech)

- [Suppr](https://suppr.wilddata.cn/) - 研究者向けのAI文献検索、文書翻訳、詳細調査ワークスペースです。

### ワークフロー
**[`^        トップに戻る        ^`](#awesome-data-science)**
- [sim](https://sim.ai) - Sim Studioのインターフェースは軽量で直感的です。お気に入りのツールと連携するLLMをすばやく構築・デプロイできます。

## プロジェクト
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [Synthetic Hospital](https://github.com/sparkcpark/synthetic_hospital) - 医療ベンチマークと電子カルテ（EHR）シミュレーションのプラットフォーム

## 学習リソース
**[`^        トップに戻る        ^`](#awesome-data-science)**

データサイエンスを学ぶには？もちろん、データサイエンスを実践することです！……と言っても、学び始めたばかりの方にはあまり役立たないかもしれません。このセクションでは、必要な取り組みが比較的少ないものから順に、[チュートリアル](#tutorials)、[大規模公開オンライン講座（MOOC）](#moocs)、[集中プログラム](#intensive-programs)、[大学](#colleges)などの学習リソースを紹介します。


### チュートリアル
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [データサイエンス・プロジェクト1000選](https://cloud.blobcity.com/#/ps/explore)をIPythonでブラウザー上から実行できます。
- [#tidytuesday](https://github.com/rfordatascience/tidytuesday) - Rエコシステムを対象とした週次のデータプロジェクトです。
- [Data science your way](https://github.com/jadianes/data-science-your-way)
- [DataCampチートシート](https://www.datacamp.com/cheat-sheet) データサイエンス向けのチートシートです。
- [PySpark Cheatsheet](https://github.com/kevinschaich/pyspark-cheatsheet)
- [Pythonによる機械学習、データサイエンス、深層学習 ](https://www.manning.com/livevideo/machine-learning-data-science-and-deep-learning-with-python)
- [TutorialSearch](https://tutorialsearch.io/) - Udemy、Skillshare、Pluralsightなど主要な学習プラットフォームのチュートリアル5万件以上を、45以上のカテゴリから検索できる無料のクロスプラットフォーム検索エンジンです。
- [潜在ディリクレ配分法ガイド](https://medium.com/@lettier/how-does-lda-work-ill-explain-using-emoji-108abf40fa7d)
- [Clinton Sheppard著『Genetic Algorithms with Python』のソースコード・チュートリアル](https://github.com/handcraftsman/GeneticAlgorithmsWithPython)
- [機械学習向け信号処理の入門チュートリアル](https://github.com/jinglescode/python-signal-processing)
- [リアルタイムデプロイ](https://www.microprediction.com/python-1) Pythonの時系列モデルをデプロイするチュートリアルです。
- [Pythonデータサイエンス入門ガイド](https://learntocodewith.me/posts/python-for-data-science/)
- [機械学習面接のための最小限学習計画](https://github.com/khangich/machine-learning-interview)
- [堅実なプロジェクト構築を通じて機械学習エンジニアリングを理解する](https://mlzoomcamp.com/)
- [PythonとPandasを練習できる無料のデータサイエンス・プロジェクト12選](https://www.datawars.io/articles/12-free-data-science-projects-to-practice-python-and-pandas)
- [データサイエンス初学者向けの優れた履歴書](https://enhancv.com/resume-examples/data-scientist/)
- [Javaによるデータサイエンス理解コース](https://www.alter-solutions.com/articles/java-data-science)
- [データ分析の面接質問（初級から上級まで）](https://www.appliedaicourse.com/blog/data-analytics-interview-questions/)
- [データサイエンス面接の質問と回答トップ100以上](https://www.appliedaicourse.com/blog/data-science-interview-questions/)
- [DataDriven - SQL、Python、データモデリングの面接質問](https://www.datadriven.io/)
- [StepByStepML](https://www.stepbystepml.com) - 試験対策向けに、機械学習アルゴリズムの計算過程を一つずつ可視化するインタラクティブな計算ツールです。
- [実際に動く最適なAIエージェントの構築方法](https://www.freecodecamp.org/news/how-to-build-optimal-ai-agents-that-actually-work-a-handbook-for-devs/) - 効果的なAIエージェントの設計・構築に関する開発者向けハンドブックです。
- [LLMをゼロから学習する](https://github.com/FareedKhan-dev/train-llm-from-scratch) - データのダウンロードからテキスト生成まで、LLMを学習させるための分かりやすい方法です。

### 無料コース
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [データサイエンス](https://github.com/ossu/data-science) - オープンソース・ソサエティ大学（Open Source Society University）
- [データサイエンティスト with R](https://www.datacamp.com/tracks/data-scientist-with-r)
- [データサイエンティスト with Python](https://www.datacamp.com/tracks/data-scientist-with-python)
- [Genetic Algorithms OCW Course](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-1-introduction-and-scope/)
- [AIエキスパートへのロードマップ](https://github.com/AMAI-GmbH/AI-Expert-Roadmap) - 人工知能の専門家になるためのロードマップ
- [凸最適化](https://www.edx.org/course/convex-optimization) - 凸解析の基礎、最小二乗法、線形・二次計画法、半正定値計画法、ミニマックス、極値体積などの問題、最適性条件、双対性理論を扱う講座です。
- [データから学ぶ](https://home.work.caltech.edu/telecourse.html) - 機械学習の基本理論、アルゴリズム、応用を扱う入門講座です。
- [Kaggle](https://www.kaggle.com/learn) - データサイエンス、機械学習、Pythonなどを学べます。
- [ML Observability Fundamentals](https://arize.com/ml-observability-fundamentals/) - 本番環境の機械学習における問題を監視し、根本原因を特定する方法を学べます。
- [Weights & Biases Effective MLOps: Model Development](https://www.wandb.courses/courses/effective-mlops-model-development) - W&Bを使ったエンドツーエンドの機械学習環境構築を学べる無料コースと認定資格です。
- [ScalerのPythonデータサイエンス講座](https://www.scaler.com/topics/course/python-for-data-science/) - データ主導の現代社会で活躍するために必要なスキルを初心者に提供するコースです。充実したカリキュラムを通じて、統計学、プログラミング、データ可視化、機械学習の確かな基礎を身につけられます。
- [MLSys-NYU-2022](https://github.com/jacopotagliabue/MLSys-NYU-2022/tree/main) - NYU Tandonの2022年「金融における機械学習」コースのスライド、スクリプト、教材です。
- [実践：機械学習の学習とデプロイ](https://github.com/Paulescu/hands-on-train-and-deploy-ml) - 暗号資産価格を予測するサーバーレスAPIの学習とデプロイを実践するコースです。
- [LLMOps：大規模言語モデルによる実用アプリケーションの構築](https://www.comet.com/site/llm-course/) - 最新のツールや技法を使って、LLMを活用した現代的なソフトウェアを構築する方法を学べます。
- [ビジョンモデルのプロンプトエンジニアリング](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - DeepLearning.AIの無料コースで、自然言語、座標点、バウンディングボックス、セグメンテーションマスク、さらには別の画像を使って最先端のコンピュータービジョンモデルにプロンプトを与える方法を学べます。
- [IBMのデータサイエンス講座](https://skillsbuild.org/students/course-catalog/data-science) - データサイエンスとは何か、さまざまな業界でどのように活用されているかを学べる無料のリソースです。
- [ニューラルネットワーク：ゼロからヒーローへ](https://karpathy.ai/zero-to-hero.html) - Andrej Karpathyによる無料動画シリーズです。ニューラルネットワークをゼロから解説し、誤差逆伝播、makemore、GPTなどを扱います。



### MOOC（大規模公開オンライン講座）
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [Coursera Introduction to Data Science](https://www.coursera.org/specializations/data-science)
- [Data Science - 9 Steps Courses, A Specialization on Coursera](https://www.coursera.org/specializations/jhu-data-science)
- [Data Mining - 5 Steps Courses, A Specialization on Coursera](https://www.coursera.org/specializations/data-mining)
- [Machine Learning – 5 Steps Courses, A Specialization on Coursera](https://www.coursera.org/specializations/machine-learning)
- [CS 109 Data Science](https://cs109.github.io/2015/)
- [OpenIntro](https://www.openintro.org/)
- [CS 171 Visualization](https://www.cs171.org/#!index.md)
- [Process Mining: Data science in Action](https://www.coursera.org/learn/process-mining)
- [Oxford Deep Learning](https://www.cs.ox.ac.uk/projects/DeepLearn/)
- [Oxford Deep Learning - video](https://www.youtube.com/playlist?list=PLE6Wd9FR--EfW8dtjAuPoTuPcqmOV53Fu)
- [Oxford Machine Learning](https://www.cs.ox.ac.uk/research/ai_ml/index.html)
- [UBC Machine Learning - video](https://www.cs.ubc.ca/~nando/540-2013/lectures.html)
- [Data Science Specialization](https://github.com/DataScienceSpecialization/courses)
- [Coursera Big Data Specialization](https://www.coursera.org/specializations/big-data)
- [Statistical Thinking for Data Science and Analytics by Edx](https://www.edx.org/course/statistical-thinking-for-data-science-and-analytic)
- [Cognitive Class AI by IBM](https://cognitiveclass.ai/)
- [Udacity - Deep Learning](https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187)
- [Keras in Motion](https://www.manning.com/livevideo/keras-in-motion)
- [Microsoft Professional Program for Data Science](https://academy.microsoft.com/en-us/professional-program/tracks/data-science/)
- [COMP3222/COMP6246 - Machine Learning Technologies](https://tdgunes.com/COMP6246-2019Fall/)
- [CS 231 - Convolutional Neural Networks for Visual Recognition](https://cs231n.github.io/)
- [Coursera Tensorflow in practice](https://www.coursera.org/professional-certificates/tensorflow-in-practice)
- [Coursera Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning)
- [365 Data Science Course](https://365datascience.com/)
- [Coursera Natural Language Processing Specialization](https://www.coursera.org/specializations/natural-language-processing)
- [Coursera GAN Specialization](https://www.coursera.org/specializations/generative-adversarial-networks-gans)
- [Codecademy's Data Science](https://www.codecademy.com/learn/paths/data-science)
- [線形代数](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/) - Gilbert Strangによる線形代数講座
- [A 2020 Vision of Linear Algebra (G. Strang)](https://ocw.mit.edu/resources/res-18-010-a-2020-vision-of-linear-algebra-spring-2020/)
- [Python for Data Science Foundation Course](https://intellipaat.com/academy/course/python-for-data-science-free-training/)
- [Data Science: Statistics & Machine Learning](https://www.coursera.org/specializations/data-science-statistics-machine-learning)
- [Machine Learning Engineering for Production (MLOps)](https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops)
- [ミネソタ大学のレコメンダーシステム専門講座](https://www.coursera.org/specializations/recommender-systems)は、Courseraで提供されるレコメンダーシステムに特化した中級～上級者向けの専門講座です。
- [Stanford Artificial Intelligence Professional Program](https://online.stanford.edu/programs/artificial-intelligence-professional-program)
- [データサイエンティスト with Python](https://app.datacamp.com/learn/career-tracks/data-scientist-with-python)
- [Programming with Julia](https://www.udemy.com/course/programming-with-julia/)
- [Scaler Data Science & Machine Learning Program](https://www.scaler.com/data-science-course/)
- [Data Science Skill Tree](https://labex.io/skilltrees/data-science)
- [Data Science for Beginners - Learn with AI tutor](https://codekidz.ai/lesson-intro/data-science-368dbf)
- [Machine Learning for Beginners - Learn with AI tutor](https://codekidz.ai/lesson-intro/machine-lear-36abfb)
- [Introduction to Data Science](https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-data-science)
-[Getting Started with Python for Data Science](https://www.codecademy.com/learn/getting-started-with-python-for-data-science)
- [Google上級データ分析認定資格](https://grow.google/data-analytics/) – データ分析、統計学、機械学習の基礎を学ぶ専門講座です。
- [Maschinelle Sprachgebrauchsanalyse - Grundlagen der Korpuslinguistik](https://www.twillo.de/edu-sharing/components/collections?id=e6ce03ae-4660-49b0-be10-dcc92e71e796) - ノルトライン＝ヴェストファーレン州の助成による、テキストマイニング／コーパス言語学の教材です。*ドイツ語*で提供されています。
- [Programmieren für Germanist*innen](https://www.twillo.de/edu-sharing/components/collections?id=16bac749-f10e-483f-9020-5d6365b4e092) - ノルトライン＝ヴェストファーレン州の助成による、デジタル・ヒューマニティーズ向けPythonプログラミング教材です。*ドイツ語*で提供されています。
- [QuiddityML](https://quiddityml.com/?utm_source=github&utm_medium=awesome&utm_campaign=awesome-datascience) - Python、PyTorch、機械学習の数学・基礎、NLP、コンピュータービジョンを扱う短いレッスンと実践的なコーディング演習、間隔反復学習を提供します。

### 集中プログラム
**[`^        トップに戻る        ^`](#awesome-data-science)**
- [Great Learningのデータサイエンス・プログラム](https://www.mygreatlearning.com/data-science/courses) - データサイエンスと分析に関するオンラインの認定、大学院、学位プログラムをまとめています。
- [S2DS](https://www.s2ds.org/)
- [WorldQuant University Applied Data Science Lab](https://www.wqu.edu/adsl)


### 大学
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [データサイエンスの学位を取得できる大学の一覧](https://github.com/ryanswanstrom/awesome-datascience-colleges)
- [Data Science Degree @ Berkeley](https://ischoolonline.berkeley.edu/data-science/)
- [Data Science Degree @ UVA](https://datascience.virginia.edu/)
- [Data Science Degree @ Wisconsin](https://datasciencedegree.wisconsin.edu/)
- [BS in Data Science & Applications](https://study.iitm.ac.in/ds/)
- [MS in Computer Information Systems @ Boston University](https://www.bu.edu/online/programs/graduate-programs/computer-information-systems-masters-degree/)
- [MS in Business Analytics @ ASU Online](https://asuonline.asu.edu/online-degree-programs/graduate/master-science-business-analytics/)
- [MS in Applied Data Science @ Syracuse](https://ischool.syr.edu/academics/applied-data-science-masters-degree/)
- [M.S. Management & Data Science @ Leuphana](https://www.leuphana.de/en/graduate-school/masters-programmes/management-data-science.html)
- [Master of Data Science @ Melbourne University](https://study.unimelb.edu.au/find/courses/graduate/master-of-data-science/#overview)
- [Msc in Data Science @ The University of Edinburgh](https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&id=902)
- [Master of Management Analytics @ Queen's University](https://smith.queensu.ca/grad_studies/mma/index.php)
- [Master of Data Science @ Illinois Institute of Technology](https://www.iit.edu/academics/programs/data-science-mas)
- [Master of Applied Data Science @ The University of Michigan](https://www.si.umich.edu/programs/master-applied-data-science)
- [Master Data Science and Artificial Intelligence @ Eindhoven University of Technology](https://www.tue.nl/en/education/graduate-school/master-data-science-and-artificial-intelligence/)
- [Master's Degree in Data Science and Computer Engineering @ University of Granada](https://masteres.ugr.es/datcom/)

## データサイエンス・ツールボックス
**[`^        トップに戻る        ^`](#awesome-data-science)**

このセクションでは、データサイエンス分野で役立つパッケージ、ツール、アルゴリズムなどを紹介します。

### アルゴリズム
**[`^        トップに戻る        ^`](#awesome-data-science)**

ここでは、データを理解して意味を引き出すのに役立つ機械学習・データマイニングのアルゴリズムとモデルを紹介します。

#### 機械学習システムの3つの種類

- 人間による教師あり学習に基づく
- 逐次的なオンライン学習に基づく
- データポイントの比較とパターン検出に基づく

### 比較
- [datacompy](https://github.com/capitalone/datacompy) - DataComPyは、2つのPandas DataFrameを比較するパッケージです。

#### 教師あり学習

- [回帰](https://en.wikipedia.org/wiki/Regression)
- [線形回帰](https://en.wikipedia.org/wiki/Linear_regression)
- [通常最小二乗法](https://en.wikipedia.org/wiki/Ordinary_least_squares)
- [ロジスティック回帰](https://en.wikipedia.org/wiki/Logistic_regression)
- [ステップワイズ回帰](https://en.wikipedia.org/wiki/Stepwise_regression)
- [多変量適応型回帰スプライン](https://en.wikipedia.org/wiki/Multivariate_adaptive_regression_spline)
- [ソフトマックス回帰](https://d2l.ai/chapter_linear-classification/softmax-regression.html)
- [局所重み付き散布図平滑化](https://en.wikipedia.org/wiki/Local_regression)
- 分類
  - [k近傍法](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
  - [サポートベクターマシン](https://en.wikipedia.org/wiki/Support_vector_machine)
  - [決定木](https://en.wikipedia.org/wiki/Decision_tree)
  - [ID3アルゴリズム](https://en.wikipedia.org/wiki/ID3_algorithm)
  - [C4.5アルゴリズム](https://en.wikipedia.org/wiki/C4.5_algorithm)
- [アンサンブル学習](https://scikit-learn.org/stable/modules/ensemble.html)
  - [ブースティング](https://en.wikipedia.org/wiki/Boosting_(machine_learning))
  - [スタッキング](https://machinelearningmastery.com/stacking-ensemble-machine-learning-with-python)
  - [バギング](https://en.wikipedia.org/wiki/Bootstrap_aggregating)
  - [ランダムフォレスト](https://en.wikipedia.org/wiki/Random_forest)
  - [AdaBoost](https://en.wikipedia.org/wiki/AdaBoost)

#### 教師なし学習
- [クラスタリング](https://scikit-learn.org/stable/modules/clustering.html#clustering)
  - [階層的クラスタリング](https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering)
  - [k-means](https://scikit-learn.org/stable/modules/clustering.html#k-means)
  - [密度ベースクラスタリング](https://scikit-learn.org/stable/modules/clustering.html#dbscan)
  - [ファジークラスタリング](https://en.wikipedia.org/wiki/Fuzzy_clustering)
  - [混合モデル](https://en.wikipedia.org/wiki/Mixture_model)
- [次元削減](https://en.wikipedia.org/wiki/Dimensionality_reduction)
  - [Principal Component Analysis (PCA)](https://scikit-learn.org/stable/modules/decomposition.html#principal-component-analysis-pca)
  - [t-SNE; t-distributed Stochastic Neighbor Embedding](https://scikit-learn.org/stable/modules/manifold.html#t-distributed-stochastic-neighbor-embedding-tsne)
  - [因子分析](https://scikit-learn.org/stable/modules/decomposition.html#factor-analysis)
  - [Latent Dirichlet Allocation (LDA)](https://scikit-learn.org/stable/modules/decomposition.html#latent-dirichlet-allocation-lda)
- [ニューラルネットワーク](https://en.wikipedia.org/wiki/Neural_network)
- [自己組織化マップ](https://en.wikipedia.org/wiki/Self-organizing_map)
- [適応共鳴理論](https://en.wikipedia.org/wiki/Adaptive_resonance_theory)
- [Hidden Markov Models (HMM)](https://en.wikipedia.org/wiki/Hidden_Markov_model)

#### 半教師あり学習

- S3VM
- [クラスタリング](https://en.wikipedia.org/wiki/Weak_supervision#Cluster_assumption)
- [生成モデル](https://en.wikipedia.org/wiki/Weak_supervision#Generative_models)
- [低密度分離](https://en.wikipedia.org/wiki/Weak_supervision#Low-density_separation)
- [ラプラシアン正則化](https://en.wikipedia.org/wiki/Weak_supervision#Laplacian_regularization)
- [ヒューリスティックな手法](https://en.wikipedia.org/wiki/Weak_supervision#Heuristic_approaches)

#### 強化学習

- [Q学習](https://en.wikipedia.org/wiki/Q-learning)
- [SARSA (State-Action-Reward-State-Action) algorithm](https://en.wikipedia.org/wiki/State%E2%80%93action%E2%80%93reward%E2%80%93state%E2%80%93action)
- [時間差学習](https://en.wikipedia.org/wiki/Temporal_difference_learning#:~:text=Temporal%20difference%20(TD)%20learning%20refers,estimate%20of%20the%20value%20function.)

#### データマイニング・アルゴリズム

- [C4.5](https://en.wikipedia.org/wiki/C4.5_algorithm)
- [k-Means](https://en.wikipedia.org/wiki/K-means_clustering)
- [SVM (Support Vector Machine)](https://en.wikipedia.org/wiki/Support_vector_machine)
- [Apriori](https://en.wikipedia.org/wiki/Apriori_algorithm)
- [EM (Expectation-Maximization)](https://en.wikipedia.org/wiki/Expectation%E2%80%93maximization_algorithm)
- [PageRank](https://en.wikipedia.org/wiki/PageRank)
- [AdaBoost](https://en.wikipedia.org/wiki/AdaBoost)
- [KNN (K-Nearest Neighbors)](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
- [Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier)
- [CART (Classification and Regression Trees)](https://en.wikipedia.org/wiki/Decision_tree_learning)
#### 最新のデータマイニング・アルゴリズム

- [XGBoost (Extreme Gradient Boosting)](https://en.wikipedia.org/wiki/XGBoost)
- [LightGBM (Light Gradient Boosting Machine)](https://en.wikipedia.org/wiki/LightGBM)
- [CatBoost](https://catboost.ai/)
- [HDBSCAN (Hierarchical Density-Based Spatial Clustering of Applications with Noise)](https://en.wikipedia.org/wiki/DBSCAN#HDBSCAN)
- [FP-Growth (Frequent Pattern Growth Algorithm)](https://en.wikipedia.org/wiki/Association_rule_learning#FP-growth_algorithm)
- [Isolation Forest](https://en.wikipedia.org/wiki/Isolation_forest)
- [Deep Embedded Clustering (DEC)](https://arxiv.org/abs/1511.06335)
- [TPU (Top-k Periodic and High-Utility Patterns)](https://arxiv.org/abs/2509.15732)
- [Context-Aware Rule Mining (Transformer-Based Framework)](https://arxiv.org/abs/2503.11125)


#### 深層学習アーキテクチャ

- [多層パーセプトロン](https://en.wikipedia.org/wiki/Multilayer_perceptron)
- [畳み込みニューラルネットワーク（CNN）](https://en.wikipedia.org/wiki/Convolutional_neural_network)
- [再帰型ニューラルネットワーク（RNN）](https://en.wikipedia.org/wiki/Recurrent_neural_network)
- [ボルツマンマシン](https://en.wikipedia.org/wiki/Boltzmann_machine)
- [オートエンコーダー](https://www.tensorflow.org/tutorials/generative/autoencoder)
- [敵対的生成ネットワーク（GAN）](https://developers.google.com/machine-learning/gan/gan_structure)
- [自己組織化マップ](https://en.wikipedia.org/wiki/Self-organizing_map)
- [Transformer](https://www.tensorflow.org/text/tutorials/transformer)
- [条件付き確率場（CRF）](https://towardsdatascience.com/conditional-random-fields-explained-e5b8256da776)
- [機械学習システム設計](https://www.evidentlyai.com/ml-system-design)

### 汎用機械学習パッケージ
**[`^        トップに戻る        ^`](#awesome-data-science)**

* [scikit-learn](https://scikit-learn.org/)
* [scikit-multilearn](https://github.com/scikit-multilearn/scikit-multilearn)
* [sklearn-expertsys](https://github.com/tmadl/sklearn-expertsys)
* [scikit-feature](https://github.com/jundongl/scikit-feature)
* [scikit-rebate](https://github.com/EpistasisLab/scikit-rebate)
* [seqlearn](https://github.com/larsmans/seqlearn)
* [sklearn-bayes](https://github.com/AmazaspShumik/sklearn-bayes)
* [sklearn-crfsuite](https://github.com/TeamHG-Memex/sklearn-crfsuite)
* [sklearn-deap](https://github.com/rsteca/sklearn-deap)
* [sigopt_sklearn](https://github.com/sigopt/sigopt-sklearn)
* [sklearn-evaluation](https://github.com/edublancas/sklearn-evaluation)
* [scikit-image](https://github.com/scikit-image/scikit-image)
* [scikit-opt](https://github.com/guofei9987/scikit-opt)
* [scikit-posthocs](https://github.com/maximtrp/scikit-posthocs)
* [feature-engine](https://feature-engine.trainindata.com/)
* [me_fasttext](https://github.com/initial-d/me_fasttext) - 正確なトライ木n-gram ID、構造を考慮した行共有、大規模語彙のNLP向けmmapサービングに対応する、メモリ効率に優れたFastText派生実装です。
* [pystruct](https://github.com/pystruct/pystruct)
* [Shogun](https://www.shogun-toolbox.org/)
* [xLearn](https://github.com/aksnzhy/xlearn)
* [cuML](https://github.com/rapidsai/cuml)
* [causalml](https://github.com/uber/causalml)
* [mlpack](https://github.com/mlpack/mlpack)
* [MLxtend](https://github.com/rasbt/mlxtend)
* [modAL](https://github.com/modAL-python/modAL)
* [Sparkit-learn](https://github.com/lensacom/sparkit-learn)
* [hyperlearn](https://github.com/danielhanchen/hyperlearn)
* [dlib](https://github.com/davisking/dlib)
* [imodels](https://github.com/csinva/imodels)
* [jSciPy](https://github.com/hissain/jscipy) - フィルター、変換、その他の科学計算ユーティリティを提供する、SciPy信号処理モジュールのJava移植版です。
* [RuleFit](https://github.com/christophM/rulefit)
* [pyGAM](https://github.com/dswah/pyGAM)
* [Deepchecks](https://github.com/deepchecks/deepchecks)
* [scikit-survival](https://scikit-survival.readthedocs.io/en/stable)
* [interpretable](https://pypi.org/project/interpretable)
* [XGBoost](https://github.com/dmlc/xgboost)
* [LightGBM](https://github.com/microsoft/LightGBM)
* [CatBoost](https://github.com/catboost/catboost)
* [PerpetualBooster](https://github.com/perpetual-ml/perpetual)
* [JAX](https://github.com/google/jax)
* [PhilanthroPy](https://github.com/PhilanthroPy-Project/PhilanthroPy) - 非営利団体の資金調達分析向けに、データ漏洩を防ぐ寄付者の傾向、寄付停止、遺贈寄付、資産スクリーニング、収益予測の推定器を提供する、Scikit-learnネイティブのツールキットです。



### 深層学習パッケージ

#### PyTorchエコシステム
* [PyTorch](https://github.com/pytorch/pytorch)
* [TorchDR](https://github.com/TorchDR/TorchDR) - scikit-learn互換APIを備えた、GPUおよびマルチGPU対応の次元削減ライブラリです。
* [torchvision](https://github.com/pytorch/vision)
* [torchtext](https://github.com/pytorch/text)
* [torchaudio](https://github.com/pytorch/audio)
* [ignite](https://github.com/pytorch/ignite)
* [PyTorchNet](https://github.com/pytorch/tnt)
* [PyToune](https://github.com/GRAAL-Research/poutyne)
* [skorch](https://github.com/skorch-dev/skorch)
* [PyVarInf](https://github.com/ctallec/pyvarinf)
* [pytorch_geometric](https://github.com/pyg-team/pytorch_geometric)
* [GPyTorch](https://github.com/cornellius-gp/gpytorch)
* [pyro](https://github.com/pyro-ppl/pyro)
* [Catalyst](https://github.com/catalyst-team/catalyst)
* [pytorch_tabular](https://github.com/manujosephv/pytorch_tabular)
* [Yolov3](https://github.com/ultralytics/yolov3)
* [Yolov5](https://github.com/ultralytics/yolov5)
* [Yolov8](https://github.com/ultralytics/ultralytics)
* [OpenLanguageModel](https://github.com/openlanguagemodel/openlanguagemodel) - 通常のnn.Moduleとしてアーキテクチャを記述できる、Transformer言語モデルの構築・学習・教育向けPyTorchネイティブライブラリです。

#### TensorFlowエコシステム
* [TensorFlow](https://github.com/tensorflow/tensorflow)
* [TensorLayer](https://github.com/tensorlayer/TensorLayer)
* [TFLearn](https://github.com/tflearn/tflearn)
* [Sonnet](https://github.com/deepmind/sonnet)
* [tensorpack](https://github.com/tensorpack/tensorpack)
* [TRFL](https://github.com/deepmind/trfl)
* [Polyaxon](https://github.com/polyaxon/polyaxon)
* [NeuPy](https://github.com/itdxer/neupy)
* [tfdeploy](https://github.com/riga/tfdeploy)
* [tensorflow-upstream](https://github.com/ROCmSoftwarePlatform/tensorflow-upstream)
* [TensorFlow Fold](https://github.com/tensorflow/fold)
* [tensorlm](https://github.com/batzner/tensorlm)
* [TensorLight](https://github.com/bsautermeister/tensorlight)
* [Mesh TensorFlow](https://github.com/tensorflow/mesh)
* [Ludwig](https://github.com/ludwig-ai/ludwig)
* [TF-Agents](https://github.com/tensorflow/agents)
* [TensorForce](https://github.com/tensorforce/tensorforce)

#### Kerasエコシステム

* [Keras](https://keras.io)
* [keras-contrib](https://github.com/keras-team/keras-contrib)
* [Hyperas](https://github.com/maxpumperla/hyperas)
* [Elephas](https://github.com/maxpumperla/elephas)
* [Hera](https://github.com/keplr-io/hera)
* [Spektral](https://github.com/danielegrattarola/spektral)
* [qkeras](https://github.com/google/qkeras)
* [keras-rl](https://github.com/keras-rl/keras-rl)
* [Talos](https://github.com/autonomio/talos)

#### 可視化ツール
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [altair](https://altair-viz.github.io/)
- [amcharts](https://www.amcharts.com/)
- [anychart](https://www.anychart.com/)
- [bokeh](https://bokeh.org/)
- [Comet](https://www.comet.com/site/products/ml-experiment-tracking/?utm_source=awesome-datascience)
- [slemma](https://slemma.com/)
- [cartodb](https://cartodb.github.io/odyssey.js/)
- [Cube](https://square.github.io/cube/)
- [d3plus](https://d3plus.org/)
- [Data-Driven Documents(D3js)](https://d3js.org/)
- [dygraphs](https://dygraphs.com/)
- [exhibit](https://www.simile-widgets.org/exhibit/)
- [gephi](https://gephi.org/)
- [ggplot2](https://ggplot2.tidyverse.org/)
- [Glue](https://docs.glueviz.org/en/latest/index.html)
- [Google Chart Gallery](https://developers.google.com/chart/interactive/docs/gallery)
- [Highcharts](https://www.highcharts.com/)
- [import.io](https://www.import.io/)
- [Matplotlib](https://matplotlib.org/)
- [nvd3](https://nvd3.org/)
- [Netron](https://github.com/lutzroeder/netron)
- [Openrefine](https://openrefine.org/)
- [plot.ly](https://plot.ly/)
- [raw](https://rawgraphs.io)
- [Resseract Lite](https://github.com/abistarun/resseract-lite)
- [Seaborn](https://seaborn.pydata.org/)
- [techanjs](https://techanjs.org/)
- [Timeline](https://timeline.knightlab.com/)
- [variancecharts](https://variancecharts.com/index.html)
- [vida](https://vida.io/)
- [vizzu](https://github.com/vizzuhq/vizzu-lib)
- [Wrangler](https://vis.stanford.edu/wrangler/)
- [r2d3](https://www.r2d3.us/visual-intro-to-machine-learning-part-1/)
- [NetworkX](https://networkx.org/)
- [Redash](https://redash.io/)
- [Metabase](https://www.metabase.com/)
- [C3](https://c3js.org/)
- [TensorWatch](https://github.com/microsoft/tensorwatch)
- [geomap](https://pypi.org/project/geomap/)
- [Dash](https://plotly.com/dash/)
- [MetaReview](https://metareview-8c1.pages.dev/) - 11種類のインタラクティブなD3.js統計チャート（フォレストプロット、ファンネルプロット、Galbraith、L'Abbé、Baujatなど）、5種類の効果量指標、AI文献スクリーニング、投稿可能なレポート出力を備えた無料のオンライン・メタ分析プラットフォームです。[github.com](https://github.com/TerryFYL/metareview)
- [torchvista](https://github.com/sachinhosmani/torchvista) - 任意のPyTorchモデルの順伝播を可視化できる、ノートブックベースの対話型ツールです。
- [FlexViz](https://github.com/flex-analytics/flexviz) - サーバー側でPolarsを使って集計することで、1億行を超えるデータでも応答性を保つ、対話型クロスフィルター・ダッシュボード用Pythonライブラリです。

### その他のツール
**[`^        トップに戻る        ^`](#awesome-data-science)**

| リンク | 説明 |
| --- | --- |
| [データサイエンス・ライフサイクルのプロセス](https://github.com/dslp/dslp) | データサイエンス・ライフサイクル・プロセスは、データサイエンスチームがアイデアから価値創出までを持続的かつ反復的に実現するためのプロセスです。このリポジトリに手順を記載しています。 |
| [Data Science Lifecycle Template Repo](https://github.com/dslp/dslp-repo-template) | データサイエンスのライフサイクル・プロジェクト向けテンプレートリポジトリです。 |
| [TabGAN](https://github.com/Diyago/Tabular-data-generation) | 敵対的フィルタリングとプライバシー指標を用いて、GAN、拡散モデル、LLMで合成テーブルデータを生成します。 |
| [RexMex](https://github.com/AstraZeneca/rexmex) | 公平な評価を目的とする汎用レコメンダー指標ライブラリです。 |
| [ChemicalX](https://github.com/AstraZeneca/chemicalx) | 医薬品ペアのスコアリング向けPyTorchベース深層学習ライブラリです。 |
| [FileShot.io](https://github.com/FileShot/FileShotZKE) | ゼロ知識暗号化（ブラウザー内AES-256-GCM）に対応した安全なファイル共有サービスです。アカウント不要、MITライセンス、自前ホスト可能で、共有リンクに有効期限を設定できます。 |
| [CorpusExplorer](https://corpusexplorer.de/) | コーパス言語学者やテキスト／データマイニング愛好家向けのソフトウェアです。60以上の言語で独自コーパスを構築し、50以上のツールや可視化機能を利用できます。 |
| [PyTorch Geometric Temporal](https://github.com/benedekrozemberczki/pytorch_geometric_temporal) | 動的グラフ上の表現学習です。 |
| [Little Ball of Fur](https://github.com/benedekrozemberczki/littleballoffur) | Scikit-Learn風のAPIを備えたNetworkX向けグラフサンプリングライブラリです。 |
| [Karate Club](https://github.com/benedekrozemberczki/karateclub) | Scikit-Learn風APIを備えた、NetworkX向けの教師なし機械学習拡張ライブラリです。 |
| [ML Workspace](https://github.com/ml-tooling/ml-workspace) | 機械学習とデータサイエンス向けのオールインワンWeb IDEです。Dockerコンテナーとしてデプロイされ、TensorflowやPyTorchなどの人気ライブラリ、JupyterやVS Codeなどの開発ツールがあらかじめ用意されています。 |
| [xonsh shell](https://github.com/xonsh/xonsh) | Pythonで動作するシェルです。主にPythonで書かれたデータサイエンス・ライブラリを統合・管理・オーケストレーションし、パイプラインやコード／コマンドベースのワークフローを構築できます。Jupyter Notebookのカーネルとしても使用できます。 |
| [Neptune.ai](https://neptune.ai) | データサイエンティストによる機械学習モデルの作成・共有を支援する、コミュニティに開かれたプラットフォームです。チーム作業、インフラ管理、モデル比較、再現性確保をサポートします。 |
| [steppy](https://github.com/minerva-ml/steppy) | 機械学習実験を高速かつ再現可能にする軽量なPythonライブラリです。シンプルなインターフェースにより、すっきりとした機械学習パイプラインを設計できます。 |
| [steppy-toolkit](https://github.com/minerva-ml/steppy-toolkit) | 機械学習の作業をより高速かつ効果的にするニューラルネットワーク、Transformer、モデルを厳選してまとめています。 |
| [Datalab from Google](https://cloud.google.com/datalab/docs/) | PythonやSQLなどの使い慣れた言語を使って、データを対話形式で簡単に探索、可視化、分析、変換できます。 |
| [Hortonworks Sandbox](https://www.cloudera.com/downloads/hortonworks-sandbox.html) | 十数種類の対話型Hadoopチュートリアルが付属する、個人向けのポータブルなHadoop環境です。 |
| [R](https://www.r-project.org/) | 統計計算とグラフィックスのための無料ソフトウェア環境です。 |
| [Tidyverse](https://www.tidyverse.org/) | データサイエンス向けに設計された、統一された考え方を持つRパッケージ群です。すべてのパッケージが共通の設計思想、文法、データ構造を共有します。 |
| [RStudio](https://www.rstudio.com) | R向けの強力なユーザーインターフェースを備えたIDEです。無料のオープンソースで、Windows、Mac、Linuxで動作します。 |
| [Python - Pandas - Anaconda](https://www.anaconda.com) | 大規模データ処理、予測分析、科学計算向けの、完全無料でエンタープライズ対応のPythonディストリビューションです。 |
| [Pandas GUI](https://github.com/adrotog/PandasGUI) | PandasのGUIです。 |
| [NuriStat](https://github.com/baramgay/stat) | 無料のオープンソースSPSS代替ソフトです。t検定、ANOVA、回帰、生存分析、ROCなどのメニュー操作型デスクトップ統計機能を備え、SPSS .savのインポート／エクスポートに対応します。 |
| [Polars](https://github.com/pola-rs/polars) | Pandasより高速な代替を目指して設計された、RustおよびPython向けの高速DataFrameライブラリです。 |
| [CiteMe](https://citeme.app) | 架空・幻覚的な参考文献を検出する参照チェック機能を備えた無料の学術引用生成ツールです。11以上の学術データベース（OpenAlex、PubMed、Semantic Scholar、CrossRef、SciELO）を検索し、40以上の引用スタイルと公開APIを提供します。登録不要で、英語、スペイン語、ポルトガル語、フランス語、ドイツ語に対応します。|
| [Scikit-Learn](https://scikit-learn.org/stable/) | Pythonでの機械学習 |
| [NumPy](https://numpy.org/) | NumPyはPythonによる科学計算の基盤です。大規模な多次元配列や行列を扱え、それらを操作するためのさまざまな高水準数学関数を備えています。 |
| [Vaex](https://vaex.io/) | Vaexは、大規模なデータセットを可視化し、高速に統計量を計算できるPythonライブラリです。 |
| [SciPy](https://scipy.org/) | SciPyはNumPy配列を扱い、数値積分や最適化のための効率的なルーチンを提供します。 |
| [データサイエンス・ツールボックス](https://www.coursera.org/learn/data-scientists-tools) | Courseraの講座 |
| [データサイエンス・ツールボックス](https://datasciencetoolbox.org/) | ブログ |
| [Wolfram Data Science Platform](https://www.wolfram.com/data-science-platform/) | 数値、テキスト、画像、GISなどのデータをWolfram Languageで処理し、幅広いデータサイエンス分析や可視化を行い、豊富な対話型レポートを自動生成できます。すべてを革新的な知識ベース言語Wolfram Languageで実現します。 |
| [Datadog](https://www.datadoghq.com/) | 大規模データサイエンス向けのソリューション、コード、DevOpsです。 |
| [Variance](https://variancecharts.com/) | JavaScriptを書かずに、Web向けの強力なデータ可視化を作成できます。 |
| [Kite Development Kit](https://kitesdk.org/docs/current/index.html) | Kite Software Development Kit（略称Kite、Apache License 2.0）は、Hadoopエコシステム上のシステム構築を簡単にするためのライブラリ、ツール、サンプル、ドキュメントの一式です。 |
| [Domino Data Labs](https://www.dominodatalab.com) | インフラの構築や設定を行わずに、モデルの実行、スケーリング、共有、デプロイができます。 |
| [Apache Flink](https://flink.apache.org/) | 効率的で分散型の汎用データ処理プラットフォームです。 |
| [Apache Hama](https://hama.apache.org/) | Apache HamaはApacheのトップレベル・オープンソースプロジェクトであり、MapReduceを超える高度な分析を可能にします。 |
| [Weka](https://ml.cms.waikato.ac.nz/weka/index.html) | Wekaは、データマイニング向け機械学習アルゴリズムのコレクションです。 |
| [Octave](https://www.gnu.org/software/octave/) | GNU Octaveは主に数値計算を目的とする高水準インタープリター言語です。（無料のMatlab） |
| [Apache Spark](https://spark.apache.org/) | 超高速なクラスターコンピューティング |
| [Hydrosphere Mist](https://github.com/Hydrospheredata/mist) | Apache Sparkの分析ジョブや機械学習モデルを、リアルタイム、バッチ、リアクティブなWebサービスとして公開するサービスです。 |
| [Data Mechanics](https://www.datamechanics.co) | Apache Sparkを開発者にとって使いやすく、費用対効果の高いものにするデータサイエンス／エンジニアリング・プラットフォームです。 |
| [Caffe](https://caffe.berkeleyvision.org/) | 深層学習フレームワーク |
| [Torch](https://torch.ch/) | LuaJIT向け科学計算フレームワーク |
| [Nervana's python based Deep Learning Framework](https://github.com/NervanaSystems/neon) | あらゆるハードウェアで最高の性能を目指す、Intel® Nervana™のリファレンス深層学習フレームワークです。 |
| [Skale](https://github.com/skale-me/skale) | NodeJSによる高性能な分散データ処理 |
| [Aerosolve](https://airbnb.io/aerosolve/) | 人間にとって使いやすい機械学習パッケージです。 |
| [Intel framework](https://github.com/intel/idlf) | Intel®深層学習フレームワーク |
| [Datawrapper](https://www.datawrapper.de/) | 誰でも簡単で正確な埋め込み可能チャートを作成できる、オープンソースのデータ可視化プラットフォームです。[github.com](https://github.com/datawrapper/datawrapper)にもあります。 |
| [Tensor Flow](https://www.tensorflow.org/) | TensorFlowは機械知能のためのオープンソース・ソフトウェアライブラリです。 |
| [Natural Language Toolkit](https://www.nltk.org/) | 自然言語処理と分類のための、入門向けでありながら強力なツールキットです。 |
| [FunASR](https://github.com/modelscope/FunASR) | VAD、句読点付与、話者ダイアライゼーション、感情検出を内蔵し、50以上の言語に対応する産業用途向け音声認識ツールキットです。OpenAI互換APIサーバーも含まれています。 |
| [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) | テキストアノテーションと深層学習モデルの学習・調整に対応する、無料のエンドツーエンド・ノーコードプラットフォームです。固有表現認識、分類、関係抽出、アサーション状態に対応したSpark NLPモデルを標準サポートし、ユーザー、チーム、プロジェクト、文書数に制限はありません。 |
| [nlp-toolkit for node.js](https://www.npmjs.com/package/nlp-toolkit) | このモジュールでは、NLPの基本原則と実装を扱います。主な焦点はパフォーマンスです。NLPのサンプルデータや学習データを扱うと、すぐにメモリ不足になります。そのため、各実装はストリームとして記述され、各時点で処理中のデータだけをメモリに保持します。 |
| [Julia](https://julialang.org) | 技術計算向けの高水準・高性能な動的プログラミング言語です。 |
| [IJulia](https://github.com/JuliaLang/IJulia.jl) | Julia言語のバックエンドとJupyter対話環境を組み合わせています。 |
| [Apache Zeppelin](https://zeppelin.apache.org/) | SQL、Scalaなどを使ったデータ主導の対話型分析や共同編集ドキュメントを可能にするWebベースのノートブックです。 |
| [Featuretools](https://github.com/alteryx/featuretools) | Pythonで書かれた、オープンソースの自動特徴量エンジニアリング・フレームワークです。 |
| [Optimus](https://github.com/hi-primus/optimus) | PySparkバックエンドを使って、データクレンジング、前処理、特徴量エンジニアリング、探索的データ分析、機械学習を簡単に行えます。 |
| [Albumentations](https://github.com/albumentations-team/albumentations) | 多様な拡張手法を実装した、高速でフレームワークに依存しない画像拡張ライブラリです。分類、セグメンテーション、検出を標準でサポートします。Kaggle、Topcoder、CVPRワークショップの複数の深層学習コンペティションで優勝に貢献しました。 |
| [DVC](https://github.com/iterative/dvc) | オープンソースのデータサイエンス向けバージョン管理システムです。プロジェクトの追跡・整理・再現性確保を支援し、基本機能として大容量のデータやモデルファイルのバージョン管理と共有を可能にします。 |
| [Lambdo](https://github.com/asavinov/lambdo) | 特徴量エンジニアリングと機械学習、モデルの学習と予測、テーブル作成と列の評価を1つの分析パイプラインに統合し、データ分析を大幅に簡素化するワークフローエンジンです。 |
| [Feast](https://github.com/feast-dev/feast) | 機械学習の特徴量を管理、発見、利用するための特徴量ストアです。Feastはモデル学習とモデルサービングの両方で、特徴量データの一貫したビューを提供します。 |
| [Polyaxon](https://github.com/polyaxon/polyaxon) | 再現性と拡張性に優れた機械学習・深層学習のプラットフォームです。 |
| [UBIAI](https://ubiai.tools) | 包括的な自動アノテーション機能を備えた、チーム向けの使いやすいテキストアノテーションツールです。NER、関係抽出、文書分類に加え、請求書ラベル付け用のOCRアノテーションもサポートします。 |
| [Trains](https://github.com/allegroai/clearml) | AI向けの自動化された実験管理、バージョン管理、DevOpsです。 |
| [Hopsworks](https://github.com/logicalclocks/hopsworks) | 特徴量ストアを備えたオープンソースのデータ集約型機械学習プラットフォームです。オンライン（MySQL Cluster）とオフライン（Apache Hive）の両方の利用に向けた特徴量を取り込み・管理し、大規模なモデル学習とサービングを実現します。 |
| [MindsDB](https://github.com/mindsdb/mindsdb) | MindsDBは開発者向けの説明可能なAutoMLフレームワークです。わずか1行のコードで最先端の機械学習モデルを構築、学習、利用できます。 |
| [Lightwood](https://github.com/mindsdb/lightwood) | 機械学習の問題を小さなブロックに分割してシームレスに組み合わせ、1行のコードで予測モデルを構築することを目指すPyTorchベースのフレームワークです。 |
| [AWS Data Wrangler](https://github.com/awslabs/aws-data-wrangler) | Pandasの機能をAWSに拡張し、DataFrameとAWSのデータ関連サービス（Amazon Redshift、AWS Glue、Amazon Athena、Amazon EMRなど）を接続するオープンソースPythonパッケージです。 |
| [Amazon Rekognition](https://aws.amazon.com/rekognition/) | AWS Rekognitionは、Amazon Web Servicesを利用する開発者がアプリケーションに画像分析機能を追加できるサービスです。アセットのカタログ化、ワークフローの自動化、メディアやアプリケーションからの情報抽出が可能です。|
| [Amazon Textract](https://aws.amazon.com/textract/) | あらゆる文書から印刷テキスト、手書き文字、データを自動抽出します。 |
| [Amazon Lookout for Vision](https://aws.amazon.com/lookout-for-vision/) | コンピュータービジョンを使って製品の欠陥を検出し、品質検査を自動化します。部品の欠落、車両や構造物の損傷、異常を特定し、包括的な品質管理を実現します。|
| [Amazon CodeGuru](https://aws.amazon.com/codeguru/) | 機械学習を活用した推奨事項により、コードレビューを自動化し、アプリケーションのパフォーマンスを最適化します。|
| [CML](https://github.com/iterative/cml) | データサイエンス・プロジェクトで継続的インテグレーションを利用するためのオープンソース・ツールキットです。GitHub ActionsとGitLab CIで本番に近い環境でモデルを自動的に学習・テストし、プル／マージリクエストに可視化レポートを自動生成します。 |
| [Dask](https://dask.org/) | 分析コードを分散コンピューティングシステム（ビッグデータ）へ簡単に移行できる、オープンソースのPythonライブラリです。 |
| [DuckDB](https://github.com/duckdb/duckdb) | プロセス内で動作するSQL OLAPデータベース管理システムです。 |
| [Statsmodels](https://www.statsmodels.org/stable/index.html) | Pythonベースの推測統計、仮説検定、回帰分析フレームワークです。 |
| [Gensim](https://radimrehurek.com/gensim/) | 自然言語テキストのトピックモデリング向けオープンソースライブラリです。 |
| [spaCy](https://spacy.io/) | 高性能な自然言語処理ツールキットです。 |
| [Grid Studio](https://github.com/ricklamers/gridstudio) | Grid StudioはPythonプログラミング言語と完全に統合されたWebベースのスプレッドシート・アプリケーションです。 |
|[Python Data Science Handbook](https://github.com/jakevdp/PythonDataScienceHandbook)|Python Data Science Handbookの全文をJupyter Notebookで読めます。|
| [Shapley](https://github.com/benedekrozemberczki/shapley) | 機械学習アンサンブルにおける分類器の価値を定量化する、データ主導型フレームワークです。 |
| [DAGsHub](https://dagshub.com) | データ、モデル、パイプラインを管理するオープンソース・ツールを基盤としたプラットフォームです。 |
| [Deepnote](https://deepnote.com) | 新しいタイプのデータサイエンス・ノートブックです。Jupyter互換で、リアルタイム共同作業に対応し、クラウド上で動作します。 |
| [Valohai](https://valohai.com) | 機械学習のオーケストレーション、自動再現性確保、デプロイを扱うMLOpsプラットフォームです。 |
| [PyMC3](https://docs.pymc.io/) | 確率的プログラミング（ベイズ推論と機械学習）のためのPythonライブラリです。 |
| [PyStan](https://pypi.org/project/pystan/) | Stan（ベイズ推論とモデリング）のPythonインターフェースです。 |
| [hmmlearn](https://pypi.org/project/hmmlearn/) | 隠れマルコフモデルの教師なし学習と推論を行います。 |
| [Chaos Genius](https://github.com/chaos-genius/chaos_genius/) | 機械学習を活用した、外れ値・異常検知と根本原因分析のための分析エンジンです。 |
| [PySAD](https://github.com/selimfirat/pysad) | ストリーミングデータの異常検知向けPythonライブラリです。 |
| [Nimblebox](https://nimblebox.ai/) | 世界中のデータサイエンティストや機械学習実践者が、Webブラウザーからマルチクラウドアプリを発見、作成、公開できるよう設計されたフルスタックMLOpsプラットフォームです。 |
| [Towhee](https://github.com/towhee-io/towhee) | 非構造化データを埋め込み表現に変換するPythonライブラリです。 |
| [LineaPy](https://github.com/LineaLabs/lineapy) | 長く雑然としたJupyter Notebookの整理に困ったことはありませんか？オープンソースのPythonライブラリLineaPyなら、わずか2行のコードで開発用コードを本番向けパイプラインに変換できます。 |
| [envd](https://github.com/tensorchord/envd) | 🏕️ データサイエンスおよびAI／MLエンジニアリングチーム向けの機械学習開発環境です。 |
| [Explore Data Science Libraries](https://kandi.openweaver.com/explore/data-science) | 人気・新着ライブラリ、著名な作者、注目のプロジェクトキット、ディスカッション、チュートリアル、学習リソースを厳選して検索・発見できる検索エンジン🔎です。 |
| [MLEM](https://github.com/iterative/mlem) | 🐶 GitOpsの原則に従って機械学習モデルをバージョン管理・デプロイできます。 |
| [MLflow](https://mlflow.org/) | 機械学習モデルのライフサイクル全体を管理するMLOpsフレームワークです。 |
| [cleanlab](https://github.com/cleanlab/cleanlab) | データ中心AIと機械学習データセットのさまざまな問題の自動検出に使えるPythonライブラリです。 |
| [AutoGluon](https://github.com/awslabs/autogluon) | 画像、テキスト、表形式、時系列、マルチモーダルデータについて高精度な予測を簡単に行うAutoMLです。 |
| [Arize AI](https://arize.com/) | 本番環境の機械学習モデルを監視し、データ品質や性能ドリフトなどの問題の根本原因を特定する、Arize AIのコミュニティ向けオブザーバビリティ・ツールです。 |
| [Aureo.io](https://aureo.io) | Aureo.ioは人工知能の構築に特化したローコード・プラットフォームです。基礎データを使ってパイプラインや自動化を作成し、AIモデルと連携できます。 |
| [ERD Lab](https://www.erdlab.io/) | 開発者向けに作られた無料のクラウド型ER図（ERD）ツールです。
| [Arize-Phoenix](https://docs.arize.com/phoenix) | ノートブックで利用できるMLOpsツールです。洞察を発見し、問題を明らかにし、モデルを監視・微調整できます。 |
| [Comet](https://github.com/comet-ml/comet-examples) | 実験追跡、本番モデル管理、モデルレジストリ、完全なデータリネージを備え、学習から本番運用まで機械学習ワークフローを支援するMLOpsプラットフォームです。 |
| [Opik](https://github.com/comet-ml/opik) | 開発から本番運用まで、LLMアプリケーションの評価、テスト、リリースを行えます。 |
| [Synthical](https://synthical.com) | AIを活用した研究向け共同作業環境です。関連論文の検索、文献管理用コレクションの作成、コンテンツの要約を一か所で行えます。 |
| [teeplot](https://github.com/mmore500/teeplot) | データ可視化の出力を自動整理するワークフロー・ツールです。 |
| [Streamlit](https://github.com/streamlit/streamlit) | 機械学習・データサイエンス・プロジェクト向けアプリケーション・フレームワークです。 |
| [Gradio](https://github.com/gradio-app/gradio) | 機械学習モデルを利用するカスタマイズ可能なUIコンポーネントを作成できます。 |
| [Weights & Biases](https://github.com/wandb/wandb) | 実験追跡、データセットのバージョン管理、モデル管理ができます。 |
| [DVC](https://github.com/iterative/dvc) | 機械学習プロジェクト向けのオープンソース・バージョン管理システムです。 |
| [Optuna](https://github.com/optuna/optuna) | ハイパーパラメーターの自動最適化フレームワークです。 |
| [Ray Tune](https://github.com/ray-project/ray) | スケーラブルなハイパーパラメーター調整ライブラリです。 |
| [Apache Airflow](https://github.com/apache/airflow) | ワークフローをプログラムで作成、スケジュール、監視するためのプラットフォームです。 |
| [Prefect](https://github.com/PrefectHQ/prefect) | 最新のデータスタック向けワークフロー管理システムです。 |
| [Kedro](https://github.com/kedro-org/kedro) | 再現可能で保守しやすいデータサイエンス・コードを作成するためのオープンソースPythonフレームワークです。 |
| [Hamilton](https://github.com/dagworks-inc/hamilton) | 信頼性の高いデータ変換を記述・管理する軽量ライブラリです。 |
| [SHAP](https://github.com/slundberg/shap) | ゲーム理論に基づき、あらゆる機械学習モデルの出力を説明します。 |
| [InterpretML](https://github.com/interpretml/interpret) | InterpretMLは、一般化加法モデル（GAM）に基づく最新の完全に解釈可能な機械学習モデル、Explainable Boosting Machine（EBM）を実装します。このオープンソースパッケージは、EBMやその他のグラスボックス・モデル、ブラックボックスの説明向け可視化ツールも提供します。 |
| [LIME](https://github.com/marcotcr/lime) | あらゆる機械学習分類器の予測を説明します。 |
| [flyte](https://github.com/flyteorg/flyte) | 機械学習向けワークフロー自動化プラットフォームです。 |
| [dbt](https://github.com/dbt-labs/dbt-core) | データ構築ツールです。 |
| [zasper](https://github.com/zasper-io/zasper) | データサイエンス向けの高機能IDEです。 |
| [skrub](https://github.com/skrub-data/skrub/) | 表形式データの機械学習における前処理と特徴量エンジニアリングを簡単にするPythonライブラリです。 |
| [Glyph](https://github.com/Koda-OSS/Glyph) | 高速なテキスト類似度計算、重複除去、検索に向けて、MinHashフィンガープリントを生成・検索・比較するフレームワーク非依存のTypeScriptライブラリです。 |
| [Codeflash](https://www.codeflash.ai/) | 常に超高速なPythonコードをリリースできます。 |
| [Hugging Face](https://huggingface.co/) | 機械学習モデルやデータセットの共有、NLP・生成AIプロジェクトでの共同作業に使われる人気のオープンプラットフォームです。 |
| [Chinese-Elite](https://github.com/anonym-g/Chinese-Elite) | LLMで公開データを解析して関係ネットワークを自動的にマッピングし、対話型グラフとして可視化するオープンソース・プロジェクトです。 |
| [Desbordante](https://github.com/desbordante/desbordante-core/) | 複雑なパターンの発見と検証に特化したオープンソースのデータプロファイラーです。たとえば[数値的な関連ルール](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Numerical_Association_Rules.ipynb)、[差分依存関係](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Differential_Dependencies.ipynb)、[否定制約](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Denial_Constraints.ipynb)などを扱います。 |
| [dna-claude-analysis](https://github.com/shmlkv/dna-claude-analysis) | 生のDNAデータを17カテゴリ（健康リスク、祖先、薬理ゲノミクス、栄養、心理学など）にわたって分析するPythonスクリプトを備え、ターミナル風の単一ページHTML可視化を生成する個人ゲノム解析ツールキットです。 |
| [RunMat](https://github.com/runmat-org/runmat) | CPU／GPUでの自動実行と融合配列カーネルに対応する、高速なMATLAB構文ランタイムです。 |
| [Turbostream](https://github.com/turboline-ai/turbostream) | ストリーミング基盤やバックプレッシャーを気にせず、リアルタイムデータストリームに対する独自ルールエンジンや選択的LLM分析を試せるターミナルUIです。 |
| [WFGY ProblemMap](https://github.com/onestardao/WFGY/blob/main/ProblemMap/README.md) | LLMおよびRAGパイプラインで繰り返し発生する16種類の問題について、観測可能な症状とデータサイエンスチーム向けの対処策をまとめたオープンソースの「失敗アトラス」です。 |
| [Deploybase](https://deploybase.ai/) | すべてのクラウドおよび推論プロバイダーにわたるGPUとLLMの価格をリアルタイムで追跡できます。 |
| [DeepAnalyze](https://github.com/ruc-datalab/DeepAnalyze) | 人間の介入なしに幅広いデータサイエンス・タスクを自律的に完了できる、エージェント型の自律データサイエンス向けLLMです。 |
| [Disco](https://github.com/leap-laboratories/discovery-engine) | 人間を超える探索的データ分析を実現します。LLMや手作業の探索では見逃されがちな表形式データの特徴量間相互作用やサブグループ効果を、p値、効果量、文献引用とともに発見します。公開データは無料です。 |
| [AI for Database](https://aifordatabase.com) | SQLを使わず自然言語でデータベースと対話できます。すぐに洞察を得て、自動更新ダッシュボードを構築し、データベースの変更をトリガーとしてワークフローを自動実行できます。 |
| [Crypto Pump Scanner](https://github.com/stefanoviana/deepalpha) | LSTMニューラルネットワーク（正解率84.6%）を用いたAI暗号資産取引ボットです。リアルタイムの急騰検出、ウォークフォワード検証済みモデル、複数取引所（Bybit、Binance、OKX、Gate.io）に対応するオープンソースです。 |
| [Future AGI](https://github.com/future-agi/future-agi) | LLMやAIエージェントのアプリをシミュレーション、評価、トレース、安全制御、ルーティング、最適化するオープンソース・プラットフォームです。単一のフィードバックループで監視するだけでなく、エージェントの自己改善を実現します。セルフホスト可能で、Apache-2.0ライセンスです。 |
| [ipynbtopdf](https://ipynbtopdf.xyz/) | PythonやTeXをインストールせずに、`.ipynb`ノートブックをPDF、HTML、Pythonに変換できるブラウザーベースのJupyterノートブック閲覧・エクスポートツールです。 |



## 文献とメディア
**[`^        トップに戻る        ^`](#awesome-data-science)**

このセクションでは、追加で読める資料、視聴できるチャンネル、聴講できる講演を紹介します。

### 書籍
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [Pythonでゼロから始めるデータサイエンス：基本原則](https://www.amazon.com/Data-Science-Scratch-Principles-Python-dp-1492041130/dp/1492041130/ref=dp_ob_title_bk)
- [Pythonによる人工知能 - Tutorialspoint](https://www.tutorialspoint.com/artificial_intelligence_with_python/artificial_intelligence_with_python_tutorial.pdf)
- [ゼロから学ぶ機械学習](https://dafriedman97.github.io/mlbook/content/introduction.html)
- [確率的機械学習：入門](https://probml.github.io/pml-book/book1.html)
- [データサイエンスを率いる方法](https://www.manning.com/books/how-to-lead-in-data-science) - 早期アクセス
- [データで顧客離れに立ち向かう](https://www.manning.com/books/fighting-churn-with-data)
- [PythonとDaskによる大規模データサイエンス](https://www.manning.com/books/data-science-with-python-and-dask)
- [Pythonデータサイエンス・ハンドブック](https://jakevdp.github.io/PythonDataScienceHandbook/)
- [データサイエンス・ハンドブック：25人の優れたデータサイエンティストによる助言と洞察](https://www.thedatasciencehandbook.com/)
- [データサイエンティストのように考える](https://www.manning.com/books/think-like-a-data-scientist)
- [データサイエンス入門](https://www.manning.com/books/introducing-data-science)
- [Rによる実践データサイエンス](https://www.manning.com/books/practical-data-science-with-r)
- [日々のデータサイエンス](https://www.amazon.com/dp/B08TZ1MT3W/ref=cm_sw_r_cp_apa_fabc_a0ceGbWECF9A8) & [(より安価なPDF版)](https://gum.co/everydaydata)
- [データサイエンスを探る](https://www.manning.com/books/exploring-data-science) - 無料の電子書籍サンプル
- [データのジャングルを探る](https://www.manning.com/books/exploring-the-data-jungle) - 無料の電子書籍サンプル
- [Pythonによる古典的なコンピューターサイエンスの問題](https://www.manning.com/books/classic-computer-science-problems-in-python)
- [プログラマーのための数学](https://www.manning.com/books/math-for-programmers) 早期アクセス
- [Rの実践 第3版](https://www.manning.com/books/r-in-action-third-edition) 早期アクセス
- [データサイエンス・ブートキャンプ](https://www.manning.com/books/data-science-bookcamp) 早期アクセス
- [データサイエンス思考：次なる科学・技術・経済の革命](https://www.springer.com/gp/book/9783319950914)
- [応用データサイエンス：データ主導型ビジネスから得た教訓](https://www.springer.com/gp/book/9783030118204)
- [データサイエンス・ハンドブック](https://www.amazon.com/Data-Science-Handbook-Field-Cady/dp/1119092949)
- [必須の自然言語処理](https://www.manning.com/books/getting-started-with-natural-language-processing) - 早期アクセス
- [大規模データセットのマイニング](https://www.mmds.org/) - オンライン講座と連携した無料電子書籍
- [Pandas実践入門](https://www.manning.com/books/pandas-in-action) - 早期アクセス
- [遺伝的アルゴリズムと遺伝的プログラミング](https://www.taylorfrancis.com/books/9780429141973)
- [進化アルゴリズムの進展](https://www.intechopen.com/books/advances_in_evolutionary_algorithms) - 無料ダウンロード
- [遺伝的プログラミング：新しいアプローチと成功事例](https://www.intechopen.com/books/genetic-programming-new-approaches-and-successful-applications) - 無料ダウンロード
- [進化アルゴリズム](https://www.intechopen.com/books/evolutionary-algorithms) - 無料ダウンロード
- [遺伝的プログラミングの進展 第3巻](https://www0.cs.ucl.ac.uk/staff/W.Langdon/aigp3/) - 無料ダウンロード
- [遺伝的アルゴリズムと進化的計算](https://www.talkorigins.org/faqs/genalg/genalg.html) - 無料ダウンロード
- [凸最適化](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf) - Stephen Boydによる凸最適化の書籍。無料でダウンロードできます。
- [PythonとPySparkによるデータ分析](https://www.manning.com/books/data-analysis-with-python-and-pyspark) - 早期アクセス
- [Rによるデータサイエンス](https://r4ds.had.co.nz/)
- [データサイエンスでキャリアを築く](https://www.manning.com/books/build-a-career-in-data-science)
- [機械学習ブートキャンプ](https://mlbookcamp.com/) - 早期アクセス
- [Scikit-Learn、Keras、TensorFlowによる実践機械学習 第2版](https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/)
- [効果的なデータサイエンス基盤](https://www.manning.com/books/effective-data-science-infrastructure)
- [実践MLOps：本番モデルへの準備方法](https://valohai.com/mlops-ebook/)
- [PythonとPySparkによるデータ分析](https://www.manning.com/books/data-analysis-with-python-and-pyspark)
- [回帰分析のやさしいガイド](https://www.manning.com/books/regression-a-friendly-guide) - 早期アクセス
- [ストリーミングシステム：大規模データ処理の何を、どこで、いつ、どのように](https://www.oreilly.com/library/view/streaming-systems/9781491983867/)
- [コマンドラインでのデータサイエンス：実績あるツールで未来に挑む](https://www.oreilly.com/library/view/data-science-at/9781491947845/)
- [Pythonによる機械学習 - Tutorialspoint](https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_tutorial.pdf)
- [深層学習](https://www.deeplearningbook.org/)
- [クラウド・データプラットフォームの設計](https://www.manning.com/books/designing-cloud-data-platforms) - 早期アクセス
- [Rによる統計的学習入門](https://www.statlearning.com/)
- [統計的学習の要素：データマイニング、推論、予測](https://hastie.su.domains/ElemStatLearn/)
- [PyTorchによる深層学習](https://www.simonandschuster.com/books/Deep-Learning-with-PyTorch/Eli-Stevens/9781617295263)
- [ニューラルネットワークと深層学習](https://neuralnetworksanddeeplearning.com)
- [深層学習クックブック](https://www.oreilly.com/library/view/deep-learning-cookbook/9781491995839/)
- [Pythonによる機械学習入門](https://www.oreilly.com/library/view/introduction-to-machine/9781449369880/)
- [人工知能：計算エージェントの基礎 第2版](https://artint.info/index.html) - 無料HTML版
- [人工知能への探求：着想と成果の歴史](https://ai.stanford.edu/~nilsson/QAI/qai.pdf) - 無料ダウンロード
- [データサイエンスのためのグラフアルゴリズム](https://www.manning.com/books/graph-algorithms-for-data-science) - 早期アクセス
- [実践データメッシュ](https://www.manning.com/books/data-mesh-in-action) - 早期アクセス
- [データ分析のためのJulia](https://www.manning.com/books/julia-for-data-analysis) - 早期アクセス
- [データサイエンスのための因果推論](https://www.manning.com/books/julia-for-data-analysis) - 早期アクセス
- [正規表現パズルとAIコーディングアシスタント](https://www.manning.com/books/regular-expression-puzzles-and-ai-coding-assistants) David Mertz著
- [深層学習を学ぶ](https://d2l.ai/)
- [みんなのデータ](https://www.manning.com/books/data-for-all)
- [解釈可能な機械学習：ブラックボックスモデルを説明可能にするためのガイド](https://christophm.github.io/interpretable-ml-book/) - 無料のGitHub版
- [データサイエンスの基礎](https://www.cs.cornell.edu/jeh/book.pdf) 無料ダウンロード
- [データサイエンスのためのComet：プロジェクトのライフサイクルを管理・最適化する力を高める](https://www.amazon.com/Comet-Data-Science-Enhance-optimize/dp/1801814430)
- [データサイエンティストのためのソフトウェアエンジニアリング](https://www.manning.com/books/software-engineering-for-data-scientists) - 早期アクセス
- [データサイエンスのためのJulia](https://www.manning.com/books/julia-for-data-science) - 早期アクセス
- [統計的学習入門](https://www.statlearning.com/) - ダウンロードページ
- [まったくの初心者のための機械学習](https://www.amazon.in/Machine-Learning-Absolute-Beginners-Introduction-ebook/dp/B07335JNW1)
- [ビジネス、データ、コードの統合：JSON Schemaによるデータ製品の設計](https://learning.oreilly.com/library/view/unifying-business-data/9781098144999/)
- [ベイズ推論を直感的に学ぶ](https://www.manning.com/books/grokking-bayes)
- [機械学習Q&AI](https://sebastianraschka.com/books/ml-q-and-ai)
- [データサイエンスのためのJavaScript](https://third-bit.com/js4ds/) - 無料HTMLページ
- [応用データサイエンス](https://angewandtedatascience.de/) - 応用データサイエンスに関するドイツ語書籍
- [人工知能を支える数学](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book)：工学的な観点から、AIを支える数学を平易な英語で解説するFreeCodeCampの無料書籍です。
- [エグゼクティブ向けデータサイエンス](https://leanpub.com/eds)：データサイエンス・チームとプロジェクトの管理に関する概説書です。
- [現代統計学入門](https://leanpub.com/imstat)：データサイエンスへの応用に重点を置いた、現代的なオープンアクセス統計学教科書です。
- [データサイエンスの技法](https://bookdown.org/rdpeng/artofdatascience/)：「分析の技法」に焦点を当て、適切な質問を立てて洗練させる方法を解説します。

#### 書籍の割引（アフィリエイト）

- [電子書籍セール - 最大45%割引！](https://www.manning.com/?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=ebook_sale_8_8_22)

- [Causal Machine Learning](https://www.manning.com/books/causal-machine-learning?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_ness_causal_7_26_22&a_aid=mikrobusiness&a_bid=43a2198b
)
- [Managing ML Projects](https://www.manning.com/books/managing-machine-learning-projects?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_thompson_managing_6_14_22)
- [Causal Inference for Data Science](https://www.manning.com/books/causal-inference-for-data-science?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_ruizdevilla_causal_6_6_22)
- [Data for All](https://www.manning.com/books/data-for-all?utm_source=mikrobusiness&utm_medium=affiliate)

### 学術誌・出版物・雑誌
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [ICML](https://icml.cc/2015/) - 機械学習に関する国際会議
- [GECCO](https://gecco-2019.sigevo.org/index.html/HomePage) - 遺伝的・進化的計算に関する会議（GECCO）
- [epjdatascience](https://epjdatascience.springeropen.com/)
- [Journal of Data Science](https://jds-online.org/journal/JDS) - 統計手法の幅広い応用を扱う国際学術誌です。
- [Big Data Research](https://www.journals.elsevier.com/big-data-research)
- [Journal of Big Data](https://journalofbigdata.springeropen.com/)
- [Big Data & Society](https://journals.sagepub.com/home/bds)
- [Data Science Journal](https://www.jstage.jst.go.jp/browse/dsj)
- [datatau.com/news](https://www.datatau.com/news) - データ分野版のHacker Newsです。
- [Data Science Trello Board](https://trello.com/b/rbpEfMld/data-science)
- [Mediumのデータサイエンストピック](https://medium.com/tag/data-science) - Medium上のデータサイエンス関連出版物
- [Towards Data Scienceの遺伝的アルゴリズム特集](https://towardsdatascience.com/introduction-to-genetic-algorithms-including-example-code-e396e98d8bf3#:~:text=A%20genetic%20algorithm%20is%20a,offspring%20of%20the%20next%20generation.) - 遺伝的アルゴリズムに関するTowards Data Scienceの記事
- [Maxim AI](https://getmaxim.ai). AIエージェントのシミュレーション、評価、オブザーバビリティのためのツールです。
- [8bitconcepts](https://8bitconcepts.com/) - AIの価格設定、企業導入、評価フレームワークに関する論考を扱うAI業界の調査・分析です。

### ニュースレター
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [AI Weekly](https://aiweekly.co) - モデル、資金調達、政策、応用を扱う、業界リーダー厳選のAI情報ブリーフィングです。2017年以来週3回配信され、購読者は4万人以上です。
- [DataTalks.Club](https://datatalks.club). データ関連の話題を扱う週刊ニュースレターです。[アーカイブ](https://us19.campaign-archive.com/home/?u=0d7822ab98152f5afc118c176&id=97178021aa)。
- [The Analytics Engineering Roundup](https://roundup.getdbt.com/about). データサイエンスに関するニュースレターです。[アーカイブ](https://roundup.getdbt.com/archive)。
- [Techpresso](https://dupple.com/techpresso). AI、機械学習、テクノロジーにおける重要な動向を紹介する無料の日刊ニュースレターです。[アーカイブ](https://dupple.com/techpresso)。
- [DiamantAI](https://diamantai.substack.com). RAG、エージェント、LLMアプリケーションのパターンなど、実践的なAIエンジニアリングと生成AIを分かりやすく解説します。
- [Bamboo Weekly](https://www.bambooweekly.com) - 時事問題や実世界の公開データを題材とする週刊pandas演習で、詳しい解答付きです。2年以上前の号は無料で、最新号も最初の2問と解答を無料で利用できます。[アーカイブ](https://www.bambooweekly.com/archive/)。

### メーリングリスト
**[`^        トップに戻る        ^`](#awesome-data-science)**
- [ワーキンググループ - デジタル・ヒューマニティーズ研究ソフトウェアエンジニアリング](https://www.listserv.dfn.de/sympa/info/ag-dhrse). デジタル・ヒューマニティーズ研究ソフトウェアエンジニアリング（DH-RSE）ワーキンググループのメーリングリストです。

### ブロガー
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [Wes McKinney](https://wesmckinney.com/archives.html) - Wes McKinneyのアーカイブ
- [Matthew Russell](https://miningthesocialweb.com/) - ソーシャルウェブのマイニング
- [Greg Reda](https://www.gregreda.com/) - Greg Redaの個人ブログ
- [Julia Evans](https://jvns.ca/) - Recurse Centerの卒業生
- [Hakan Kardas](https://www.cse.unr.edu/~hkardes/) - 個人ウェブページ
- [Sean J. Taylor](https://seanjtaylor.com/) - 個人ウェブページ
- [Drew Conway](https://drewconway.com/) - 個人ウェブページ
- [Hilary Mason](https://hilarymason.com/) - 個人ウェブページ
- [Noah Iliinsky](https://complexdiagrams.com/) - 個人ブログ
- [Matt Harrison](https://hairysun.com/) - 個人ブログ
- [Vamshi Ambati](https://allthingsds.wordpress.com/) - AllThings Data Science
- [Prash Chan](https://www.mdmgeek.com/) - マスターデータ管理とその周辺の話題を扱う技術ブログ
- [Clare Corthell](https://datasciencemasters.org/) - オープンソースのデータサイエンス修士課程
- [Datawrangling](https://www.datawrangling.org) Peter Skomorochによる、機械学習、データマイニングなどのブログ
- [Quora Data Science](https://www.quora.com/topic/Data-Science) - 専門家によるデータサイエンスの質問と回答
- [Siah](https://openresearch.wordpress.com/) Berkeleyの博士課程学生
- [Louis Dorard](https://www.ownml.co/blog/) Webと大小さまざまなデータを好む技術者
- [Machine Learning Mastery](https://machinelearningmastery.com/) 複雑な問題に機械学習アルゴリズムを自信を持って適用できるよう、プロのプログラマーを支援します。
- [Daniel Forsyth](https://www.danielforsyth.me/) - 個人ブログ
- [Data Science Weekly](https://www.datascienceweekly.org/) - 週刊ニュースブログ
- [Revolution Analytics](https://blog.revolutionanalytics.com/) - データサイエンス・ブログ
- [R Bloggers](https://www.r-bloggers.com/) - Rブロガー
- [The Practical Quant](https://practicalquant.blogspot.com/) ビッグデータ
- [Yet Another Data Blog](https://yet-another-data-blog.blogspot.com/) もう一つのデータブログ
- [KD Nuggets](https://www.kdnuggets.com/) データマイニング、分析、ビッグデータ、データサイエンスを扱うブログではなくポータルです
- [Meta Brown](https://www.metabrown.com/blog/) - 個人ブログ
- [データサイエンティスト](https://datascientists.com/) データサイエンティスト文化を築いています。
- [WhatSTheBigData](https://whatsthebigdata.com/) 上記の一部、すべて、あるいはそれ以上を扱い、情報技術、ビジネス、政府機関、私たちの生活への影響を探るブログです。
- [Tevfik Kosar](https://magnus-notitia.blogspot.com/) - Magnus Notitia
- [New データサイエンティスト](https://newdatascientist.blogspot.com/) 社会科学者がビッグデータの世界に飛び込む方法
- [Harvard Data Science](https://harvarddatascience.com/) - 統計計算と可視化に関する考察
- [Data Science 101](https://ryanswanstrom.com/datascience101/) - データサイエンティストになるための学び
- [Kaggle Past Solutions](https://www.chioka.in/kaggle-competition-solutions/)
- [DataScientistJourney](https://datascientistjourney.wordpress.com/category/data-science/)
- [NYC Taxi Visualization Blog](https://chriswhong.github.io/nyctaxi/)
- [Data-Mania](https://www.data-mania.com/)
- [Data-Magnum](https://data-magnum.com/)
- [datascopeanalytics](https://datascopeanalytics.com/blog/)
- [Digital transformation](https://tarrysingh.com/)
- [datascientistjourney](https://datascientistjourney.wordpress.com/category/data-science/)
- [Data Mania Blog](https://www.data-mania.com/blog/) - [The File Drawer](https://chris-said.io/) - Chris Saidの科学ブログ
- [Emilio Ferrara's web page](https://www.emilio.ferrara.name/)
- [DataNews](https://datanews.tumblr.com/)
- [Reddit TextMining](https://www.reddit.com/r/textdatamining/)
- [Periscopic](https://periscopic.com/#!/news)
- [Hilary Parker](https://hilaryparker.com/)
- [Data Stories](https://datastori.es/)
- [Data Science Lab](https://datasciencelab.wordpress.com/)
- [Meaning of](https://www.kennybastani.com/)
- [Adventures in Data Land](https://blog.smola.org)
- [Dataclysm](https://theblog.okcupid.com/)
- [FlowingData](https://flowingdata.com/) - 可視化と統計
- [Calculated Risk](https://www.calculatedriskblog.com/)
- [O'reilly Learning Blog](https://www.oreilly.com/content/topics/oreilly-learning/)
- [Dominodatalab](https://blog.dominodatalab.com/)
- [i am trask](https://iamtrask.github.io/) - 機械学習の技術を磨くブログ
- [Vademecum of Practical Data Science](https://datasciencevademecum.wordpress.com/) - 現実世界の問題に対するデータ主導の解決策を紹介するハンドブックとレシピ
- [Dataconomy](https://dataconomy.com/) - 新たに台頭するデータ経済に関するブログ
- [Springboard](https://www.springboard.com/blog/) - データサイエンス学習者向けのリソースを提供するブログ
- [Analytics Vidhya](https://www.analyticsvidhya.com/) - データサイエンスと分析の学習教材を幅広く扱うウェブサイトです。
- [Occam's Razor](https://www.kaushik.net/avinash/) - Web分析に特化しています。
- [Data School](https://www.dataschool.io/) - 初心者向けのデータサイエンス・チュートリアルです！
- [Colah's Blog](https://colah.github.io) - ニューラルネットワークを理解するためのブログです！
- [Sebastian's Blog](https://ruder.io/#open) - NLPと転移学習に関するブログです！
- [Distill](https://distill.pub) - 機械学習を明快に説明することに特化しています！
- [Chris Albon's Website](https://chrisalbon.com/) - データサイエンスとAIのノート
- [Andrew Carr](https://andrewnc.github.io/blog/blog.html) - 難解なプログラミング言語を用いたデータサイエンス
- [floydhub](https://blog.floydhub.com/introduction-to-genetic-algorithms/) - 進化アルゴリズムに関するブログ
- [Jingles](https://jinglescode.github.io/) - 学術論文をレビューし、重要な概念を抽出します。
- [nbshare](https://www.nbshare.io/notebooks/data-science/) - データサイエンス・ノートブック
- [Loic Tetrel](https://ltetrel.github.io/) - データサイエンス・ブログ
- [Chip Huyen's Blog](https://huyenchip.com/blog/) - MLエンジニアリング、MLOps、スタートアップでの機械学習活用
- [Maria Khalusova](https://www.mariakhalusova.com/) - データサイエンス・ブログ
- [Aditi Rastogi](https://medium.com/@aditi2507rastogi) - 機械学習、深層学習、データサイエンスのブログ
- [Santiago Basulto](https://medium.com/@santiagobasulto) - Pythonによるデータサイエンス
- [Akhil Soni](https://medium.com/@akhil0435) - 機械学習、深層学習、データサイエンス
- [Akhil Soni](https://akhilworld.hashnode.dev/) - 機械学習、深層学習、データサイエンス
- [Applied AI Blogs](https://www.appliedaicourse.com/blog/) - AI、機械学習、データサイエンスの概念と実用例を詳しく解説する記事です。
- [Scaler Blogs](https://www.scaler.com/blog/) - ソフトウェア開発、AI、テクノロジー分野でのキャリア形成に関する教育コンテンツです。
- [Mlu github](https://mlu-explain.github.io/) - Amazonが機械学習分野の人々を支援するために開発したMluです。動的な図解を使い、基礎から幅広く学べます。
- [Jan Oliver Rüdiger](https://notesjor.de/) - テキスト／データマイニングを中心とする機械学習、深層学習、データサイエンス

### プレゼンテーション
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [データサイエンティストになる方法](https://www.slideshare.net/ryanorban/how-to-become-a-data-scientist)
- [データサイエンス入門](https://www.slideshare.net/NikoVuokko/introduction-to-data-science-25391618)
- [エンタープライズ・ビッグデータ向けデータサイエンス入門](https://www.slideshare.net/pacoid/intro-to-data-science-for-enterprise-big-data)
- [データサイエンティストの面接方法](https://www.slideshare.net/dtunkelang/how-to-interview-a-data-scientist)
- [統計学者とデータを共有する方法](https://github.com/jtleek/datasharing)
- [データサイエンスで優れたキャリアを築くための科学](https://www.slideshare.net/katemats/the-science-of-a-great-career-in-data-science)
- [データサイエンティストの仕事とは？](https://www.slideshare.net/datasciencelondon/big-data-sorry-data-science-what-does-a-data-scientist-do)
- [データ系スタートアップの構築：迅速に、大きく、集中して](https://www.slideshare.net/medriscoll/driscoll-strata-buildingdatastartups25may2011clean)
- [深層学習でデータサイエンス・コンペに勝つ方法](https://www.slideshare.net/0xdata/how-to-win-data-science-competitions-with-deep-learning)
- [フルスタック・データサイエンティスト](https://www.slideshare.net/AlexeyGrigorev/fullstack-data-scientist)

### ポッドキャスト
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [AI at Home](https://podcasts.apple.com/us/podcast/data-science-at-home/id1069871378)
- [AI Today](https://www.cognilytica.com/aitoday/)
- [Adversarial Learning](https://adversariallearning.com/)
- [Chai time Data Science](https://www.youtube.com/playlist?list=PLLvvXm0q8zUbiNdoIazGzlENMXvZ9bd3x)
- [Chain of Thought](https://www.chainofthought.show/)
- [Data Engineering Podcast](https://www.dataengineeringpodcast.com/)
- [Data Science at Home](https://datascienceathome.com/)
- [Data Science Mixer](https://community.alteryx.com/t5/Data-Science-Mixer/bg-p/mixer)
- [Data Skeptic](https://dataskeptic.com/)
- [Data Stories](https://datastori.es/)
- [Datacast](https://jameskle.com/writes/category/Datacast)
- [DataFramed](https://www.datacamp.com/community/podcast)
- [DataTalks.Club](https://anchor.fm/datatalksclub)
- [Gradient Descent](https://wandb.ai/fully-connected/gradient-descent)
- [Learning Machines 101](https://www.learningmachines101.com/)
- [Let's Data (Brazil)](https://www.youtube.com/playlist?list=PLn_z5E4dh_Lj5eogejMxfOiNX3nOhmhmM)
- [Linear Digressions](https://lineardigressions.com/)
- [Not So Standard Deviations](https://nssdeviations.com/)
- [O'Reilly Data Show Podcast](https://www.oreilly.com/radar/topics/oreilly-data-show-podcast/)
- [Partially Derivative](https://partiallyderivative.com/)
- [Superdatascience](https://www.superdatascience.com/podcast/)
- [The Data Engineering Show](https://www.dataengineeringshow.com/)
- [The Radical AI Podcast](https://www.radicalai.org/)
- [What's The Point](https://fivethirtyeight.com/tag/whats-the-point/)
- [The Analytics Engineering Podcast](https://roundup.getdbt.com/s/the-analytics-engineering-podcast)

### YouTube動画・チャンネル
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [機械学習とは？](https://www.youtube.com/watch?v=WXHM_i-fgGo)
- [Andrew Ng：深層学習、自己教師あり学習、教師なし特徴学習](https://www.youtube.com/watch?v=n1ViNeWhC24)
- [Data36 - Data Science for Beginners by Tomi Mester](https://www.youtube.com/c/TomiMesterData36comDataScienceForBeginners)
- [深層学習：ビッグデータから知能へ](https://www.youtube.com/watch?v=czLI3oLDe8M)
- [GoogleのAI・深層学習の「ゴッドファーザー」Geoffrey Hintonへのインタビュー](https://www.youtube.com/watch?v=1Wp3IIpssEc)
- [Pythonによる深層学習入門](https://www.youtube.com/watch?v=S75EdAcXHKk)
- [機械学習とは何か、どのように機能するのか？](https://www.youtube.com/watch?v=elojMnjn4kk)
- [CampusX](https://www.youtube.com/@campusx-official)
- [Data School](https://www.youtube.com/channel/UCnVzApLJE2ljPZSeQylSEyg) - データサイエンス教育
- [Melanie Warrickによる初心者向けニューラルネットワーク（2015年5月）](https://www.youtube.com/watch?v=Cu6A96TUy_o)
- [Hugo Larochelleによるニューラルネットワーク動画シリーズ](https://www.youtube.com/playlist?list=PL6Xpj9I5qXYEcOhn7TqghAJ6NAPrNmUBH)
- [Google DeepMind共同創設者 Shane Legg - 機械超知能](https://www.youtube.com/watch?v=evNCyRL3DOU)
- [データサイエンス入門](https://www.youtube.com/watch?v=cHzvYxBN9Ls&list=PLPqVjP3T4RIRsjaW07zoGzH-Z4dBACpxY)
- [遺伝的アルゴリズムによるデータサイエンス](https://www.youtube.com/watch?v=lpD38NxTOnk)
- [Data Science for Beginners](https://www.youtube.com/playlist?list=PL2zq7klxX5ATMsmyRazei7ZXkP1GHt-vs)
- [DataTalks.Club](https://www.youtube.com/channel/UCDvErgK0j5ur3aLgn6U-LqQ)
- [Mildlyoverfitted - 機械学習／深層学習の中級チュートリアル](https://www.youtube.com/channel/UCYBSjwkGTK06NnDnFsOcR7g)
- [mlops.community - 本番機械学習に関する業界専門家へのインタビュー](https://www.youtube.com/channel/UCYBSjwkGTK06NnDnFsOcR7g)
- [ML Street Talk - 徹底して技術的かつ非営利的で、煩わしい売り込みはありません。](https://www.youtube.com/c/machinelearningstreettalk)
- [3Blue1Brownによるニューラルネットワーク](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
- [Sentdexによるニューラルネットワークの基礎からの解説](https://www.youtube.com/playlist?list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3)
- [Manning Publications YouTube channel](https://www.youtube.com/c/ManningPublications/featured)
- [Ask Dr Chong: How to Lead in Data Science - Part 1](https://youtu.be/JYuQZii5o58)
- [Ask Dr Chong: How to Lead in Data Science - Part 2](https://youtu.be/SzqIXV-O-ko)
- [Ask Dr Chong: How to Lead in Data Science - Part 3](https://youtu.be/Ogwm7k_smTA)
- [Ask Dr Chong: How to Lead in Data Science - Part 4](https://youtu.be/a9usjdzTxTU)
- [Ask Dr Chong: How to Lead in Data Science - Part 5](https://youtu.be/MYdQq-F3Ws0)
- [Ask Dr Chong: How to Lead in Data Science - Part 6](https://youtu.be/LOOt4OVC3hY)
- [回帰モデル：単純なポアソン回帰の適用](https://www.youtube.com/watch?v=9Hk8K8jhiOo)
- [深層学習アーキテクチャ](https://www.youtube.com/playlist?list=PLv8Cp2NvcY8DpVcsmOT71kymgMmcr59Mf)
- [時系列モデリングと分析](https://www.youtube.com/playlist?list=PL3N9eeOlCrP5cK0QRQxeJd6GrQvhAtpBK)
- [Serrano.Academy](https://www.youtube.com/@SerranoAcademy)
- [エンドツーエンドのデータサイエンス再生リスト](https://www.youtube.com/watch?v=S_F_c9e2bz4&list=PLZoTAELRMXVPS-dOaVbAux22vzqdgoGhG)
- [Introduction to Data Science - Linkedin](https://www.linkedin.com/learning/introduction-to-data-science-22668235/beginning-your-data-science-exploration?u=42458916)
- [AI Talks](https://aietalks.com/) - 実践的なAIエンジニアリング講演やカンファレンス動画の、検索可能な要約とトピック索引です。

## コミュニティ
**[`^        トップに戻る        ^`](#awesome-data-science)**

以下にソーシャルメディアのリンクを紹介します。他のデータサイエンティストと交流しましょう！

- [Facebookアカウント](#facebook-accounts)
- [Twitterアカウント](#twitter-accounts)
- [Telegramチャンネル](#telegram-channels)
- [Slackコミュニティ](#slack-communities)
- [GitHubグループ](#github-groups)
- [データサイエンス・コンペティション](#data-science-competitions)


### Facebookアカウント
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [Data](https://www.facebook.com/data)
- [Big データサイエンティスト](https://www.facebook.com/Bigdatascientist)
- [Data Science Day](https://www.facebook.com/datascienceday/)
- [Data Science Academy](https://www.facebook.com/nycdatascience)
- [Facebook Data Science Page](https://www.facebook.com/pages/Data-science/431299473579193?ref=br_rs)
- [Data Science London](https://www.facebook.com/pages/Data-Science-London/226174337471513)
- [Data Science Technology and Corporation](https://www.facebook.com/DataScienceTechnologyCorporation?ref=br_rs)
- [Data Science - Closed Group](https://www.facebook.com/groups/1394010454157077/?ref=br_rs)
- [Center for Data Science](https://www.facebook.com/centerdatasciences?ref=br_rs)
- [Big data hadoop NOSQL Hive Hbase](https://www.facebook.com/groups/bigdatahadoop/)
- [Analytics, Data Mining, Predictive Modeling, Artificial Intelligence](https://www.facebook.com/groups/data.analytics/)
- [Big Data Analytics using R](https://www.facebook.com/groups/434352233255448/)
- [Big Data Analytics with R and Hadoop](https://www.facebook.com/groups/rhadoop/)
- [Big Data Learnings](https://www.facebook.com/groups/bigdatalearnings/)
- [Big Data, Data Science, Data Mining & Statistics](https://www.facebook.com/groups/bigdatastatistics/)
- [BigData/Hadoop Expert](https://www.facebook.com/groups/BigDataExpert/)
- [Data Mining / Machine Learning / AI](https://www.facebook.com/groups/machinelearningforum/)
- [Data Mining/Big Data - Social Network Ana](https://www.facebook.com/groups/dataminingsocialnetworks/)
- [Vademecum of Practical Data Science](https://www.facebook.com/datasciencevademecum)
- [Veri Bilimi Istanbul](https://www.facebook.com/groups/veribilimiistanbul/)
- [The Data Science Blog](https://www.facebook.com/theDataScienceBlog/)


### Twitterアカウント
**[`^        トップに戻る        ^`](#awesome-data-science)**

| Twitter | 説明 |
| --- | --- |
| [Big Data Combine](https://twitter.com/BigDataCombine) | モデルを取引戦略として収益化したいデータサイエンティスト向けの、テンポの速いライブ試行 |
| Big Data Mania | データ可視化の専門家、データジャーナリスト、グロースハッカー、『Data Science for Dummies（ダミーのためのデータサイエンス）』（2015年）の著者 |
| [Big Data Science](https://twitter.com/analyticbridge) | ビッグデータ、データサイエンス、予測モデリング、ビジネス分析、Hadoop、意思決定・オペレーションズリサーチ。 |
| Charlie Greenbacker | @ExploreAltamiraのデータサイエンス責任者 |
| [Chris Said](https://twitter.com/Chris_Said) | Twitterのデータサイエンティスト |
| [Clare Corthell](https://twitter.com/clarecorthell) | @mattermarkの開発、デザイン、データサイエンス #hackerei |
| [DADI Charles-Abner](https://twitter.com/DadiCharles) | @Ekimetricsの#データサイエンティスト。#機械学習 #データ可視化 #DynamicCharts #Hadoop #R #Python #NLP #Bitcoin #データ好き |
| [Data Science Central](https://twitter.com/DataScienceCtrl) | Data Science Centralは、業界のビッグデータ実践者向け総合リソースです。 |
| [Data Science London](https://twitter.com/ds_ldn)  | データサイエンス。ビッグデータ。データ活用。データ愛好家。データ系スタートアップ。オープンデータ |
| [Data Science Renee](https://twitter.com/BecomingDataSci) | SQLデータアナリストから工学修士課程を経てデータサイエンティストを目指す道のりを記録しています |
| [Data Science Report](https://twitter.com/TedOBrien93) | データサイエンスと分析分野のキャリア形成を導き、発展させることを使命としています |
| [Data Science Tips](https://twitter.com/datasciencetips) | 世界中のデータサイエンティストに向けたヒントとコツです！ #データサイエンス #ビッグデータ |
| [Data Vizzard](https://twitter.com/DataVisualizati) | データ可視化、セキュリティ、軍事 |
| [DataScienceX](https://twitter.com/DataScienceX) |  |
| deeplearning4j | |
| [DJ Patil](https://twitter.com/dpatil) | ホワイトハウスのデータ責任者、@RelateIQの副社長 |
| [Domino Data Lab](https://twitter.com/DominoDataLab) | |
| [Drew Conway](https://twitter.com/drewconway) | データ好き、ハッカー、紛争研究者。 |
| Emilio Ferrara | #ネットワーク、#機械学習、#データサイエンス。#ソーシャルメディアを研究。@IndianaUnivの博士研究員 |
| [Erin Bartolo](https://twitter.com/erinbartolo) | #ビッグデータと付き合い、その過熱ぶりに愛憎入り混じる思いを抱いています。@iSchoolSUの#データサイエンス・プログラムマネージャー |
| [Greg Reda](https://twitter.com/gjreda)  | _GrubHub_でデータとpandasを担当 |
| [Gregory Piatetsky](https://twitter.com/kdnuggets) |  KDnuggets代表。分析、ビッグデータ、データマイニング、データサイエンスの専門家。KDDとSIGKDDの共同創設者で、2社のスタートアップで最高研究責任者を務め、哲学者としても活動。 |
| [Hadley Wickham](https://twitter.com/hadleywickham) |  RStudioのチーフサイエンティスト。オークランド大学、スタンフォード大学、ライス大学の統計学非常勤教授。 |
| [Hakan Kardas](https://twitter.com/hakan_kardes) | データサイエンティスト |
| [Hilary Mason](https://twitter.com/hmason) | @accelのレジデント・データサイエンティスト |
| [Jeff Hammerbacher](https://twitter.com/hackingdata)  | データサイエンスに関する投稿をリツイート |
| [John Myles White](https://twitter.com/johnmyleswhite)  | Facebookの研究者でJulia開発者。『Machine Learning for Hackers（ハッカーのための機械学習）』と『Bandit Algorithms for Website Optimization（ウェブサイト最適化のためのバンディット・アルゴリズム）』の著者。投稿は個人の見解です。 |
| [Juan Miguel Lavista](https://twitter.com/BDataScientist) | Microsoftデータサイエンスチームの主任データサイエンティスト |
| [Julia Evans](https://twitter.com/b0rk) | ハッカー。Pandas。データ分析。 |
| [Kenneth Cukier](https://twitter.com/kncukier) | The Economistのデータ編集者。『Big Data』の共著者 (https://www.big-data-book.com/). |
| Kevin Davenport | https://www.meetup.com/San-Diego-Data-Science-R-Users-Group/ の主催者 |
| [Kevin Markham](https://twitter.com/justmarkham) | データサイエンス講師、[Data School](https://www.dataschool.io/)の創設者 |
| [Kim Rees](https://twitter.com/krees) | 対話型データ可視化とツール。データ散策者。 |
| [Kirk Borne](https://twitter.com/KirkDBorne) | データサイエンティスト、天体物理学博士、トップクラスの#ビッグデータ・インフルエンサー。 |
| Linda Regber | データを語る人、可視化。 |
| [Luis Rei](https://twitter.com/lmrei) | 博士課程学生。プログラミング、モバイル、Web、人工知能、知能ロボット、機械学習、データマイニング、自然言語処理、データサイエンス。 |
| Mark Stevenson | Salt（@SaltJobs）のデータ分析採用スペシャリスト。分析、洞察、ビッグデータ、データサイエンス |
| [Matt Harrison](https://twitter.com/__mharrison__) | フルスタックPython開発者、著者、講師としての見解を発信。現在はデータサイエンティストとして活動中。時折、父親業や夫業、有機園芸にも取り組みます。 |
| [Matthew Russell](https://twitter.com/ptwobrussell) | ソーシャルウェブのマイニング。 |
| [Mert Nuhoğlu](https://twitter.com/mertnuhoglu)  | BizQualifyのデータサイエンティスト、開発者 |
| [Monica Rogati](https://twitter.com/mrogati) | Jawboneでデータを担当。LinkedInではデータをストーリーや製品に変換。テキストマイニング、応用機械学習、レコメンダーシステム。元ゲーマー、元マシンコーダー、命名者。 |
| [Noah Iliinsky](https://twitter.com/noahi) | 可視化・インタラクションデザイナー。実用派サイクリスト。可視化関連書籍の著者： https://www.oreilly.com/pub/au/4419 |
| [Paul Miller](https://twitter.com/PaulMiller) | クラウドコンピューティング、ビッグデータ、オープンデータのアナリスト兼コンサルタント。ライター、講演者、司会者。Gigaom Researchアナリスト。 |
| [Peter Skomoroch](https://twitter.com/peteskomoroch) | タスクを自動化し、意思決定を改善する知的システムを構築。起業家。元LinkedIn主任データサイエンティスト。機械学習、ProductRei、ネットワーク。 |
| [Prash Chan](https://twitter.com/MDMGeek) | IBMのソリューションアーキテクト。マスターデータ管理、データ品質、データガバナンスのブロガー。データサイエンス、Hadoop、ビッグデータ、クラウド。 |
| [Quora Data Science](https://twitter.com/q_datascience)  | Quoraのデータサイエンス・トピック |
| [R-Bloggers](https://twitter.com/Rbloggers) | Rブログ界の記事、データサイエンス会議、そしてデータサイエンティストの (!) 公開求人を投稿します。 |
| [Rand Hindi](https://twitter.com/randhindi) |  |
| [Randy Olson](https://twitter.com/randal_olson) | 人工知能を研究するコンピューター科学者。データいじりが好き。@DataIsBeautifulのコミュニティリーダー。#オープンサイエンス推進者。 |
| [Recep Erol](https://twitter.com/EROLRecep) | UALRのデータサイエンス好き |
| [Ryan Orban](https://twitter.com/ryanorban) | データサイエンティスト、遺伝的折り紙作家、ハードウェア愛好家 |
| [Sean J. Taylor](https://twitter.com/seanjtaylor) | 社会科学者。ハッカー。Facebookデータサイエンスチーム。キーワード：実験、因果推論、統計学、機械学習、経済学。 |
| [Silvia K. Spiva](https://twitter.com/silviakspiva) | Ciscoの#データサイエンス |
| [Harsh B. Gupta](https://twitter.com/harshbg) | BBVA Compassのデータサイエンティスト |
| [Spencer Nelson](https://twitter.com/spenczar_n) | データ好き |
| [Talha Oz](https://twitter.com/tozCSS) | ABM、SNA、DM、ML、NLP、HI、Python、Javaが好き。Kaggle上位層のデータサイエンティスト |
| [Tasos Skarlatidis](https://twitter.com/anskarl) | 複合イベント処理、ビッグデータ、人工知能、機械学習。プログラミングとオープンソースに情熱を注いでいます。 |
| [Terry Timko](https://twitter.com/Terry_Timko) | 情報ガバナンス、ビッグデータ、サービスとしてのデータ、データサイエンス、オープンデータ・ソーシャルデータ・ビジネスデータの融合 |
| [Tony Baer](https://twitter.com/TonyBaer) | OvumのITアナリスト。ビッグデータとデータ管理を担当し、システムエンジニアリングにも取り組みます。 |
| [Tony Ojeda](https://twitter.com/tonyojeda3) | データサイエンティスト、著者、起業家。@DataCommunityDC共同創設者。@DistrictDataLab創設者。#データサイエンス #ビッグデータ #DataDC |
| [Vamshi Ambati](https://twitter.com/vambati) | PayPalでデータサイエンスを担当。#NLP、#機械学習。カーネギーメロン大学博士課程修了（ブログ： https://allthingsds.wordpress.com ) |
| [Wes McKinney](https://twitter.com/wesmckinn) | Pandas（Pythonデータ分析ライブラリ）。 |
| [WileyEd](https://twitter.com/WileyEd) | @Seagateのシニアマネージャー。元@McKinsey。#ビッグデータと#分析のエバンジェリスト。#Hadoop、#クラウド、#デジタル、#R愛好家 |
| [WNYC Data News Team](https://twitter.com/datanews) | @WNYCのデータニュースチームです。データジャーナリズムを実践し、可視化して、取り組みを公開しています。 |
| [Alexey Grigorev](https://twitter.com/Al_Grigor) | データサイエンス関連書籍の著者 |
| [İlker Arslan](https://twitter.com/ilkerarslan_35) | データサイエンス書籍の著者。主にJuliaプログラミングについて発信。 |
| [INEVITABLE](https://twitter.com/WeAreInevitable) | 英国を拠点とするAI・データサイエンスのスタートアップ企業 |
| [Jan Oliver Rüdiger](https://x.com/notesJOR) | テキスト／データマイニングを中心とする機械学習、深層学習、データサイエンス |

### Telegramチャンネル
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [Open Data Science](https://t.me/opendatascience) – Telegram初のデータサイエンス・チャンネルです。AI、ビッグデータ、機械学習、統計、数学とその応用など、データサイエンスに関する技術・一般向けの幅広い情報を紹介します。
- [Loss function porn](https://t.me/loss_function_porn) — データサイエンス／機械学習をテーマに、動画やグラフィックで可視化した美しい投稿です。
- [Machinelearning](https://t.me/ai_machinelearning_big_data) – 機械学習の最新ニュースを毎日配信します。


### Slackコミュニティ
[トップ](#awesome-data-science)

- [DataTalks.Club](https://datatalks.club)

### GitHubグループ
- [Berkeley Institute for Data Science](https://github.com/BIDS)

### データサイエンス・コンペティション

データマイニング・コンペティションのプラットフォームを紹介します。

- [Kaggle](https://www.kaggle.com/)
- [DrivenData](https://www.drivendata.org/)
- [Analytics Vidhya](https://datahack.analyticsvidhya.com/)
- [InnoCentive](https://www.innocentive.com/)
- [Microprediction](https://www.microprediction.com/python-1)

## 楽しもう

- [インフォグラフィック](#infographics)
- [データセット](#datasets)
- [コミック](#comics)


### インフォグラフィック
**[`^        トップに戻る        ^`](#awesome-data-science)**

| プレビュー                                                                                                                                                                                                                                  | 説明                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<img src="https://i.imgur.com/0OoLaa5.png" width="150" />](https://i.imgur.com/0OoLaa5.png)                                                                                                                                                | [データサイエンティストとデータエンジニアの主な違い](https://searchbusinessanalytics.techtarget.com/feature/Key-differences-of-a-data-scientist-vs-data-engineer)                                                                                         |
| [<img src="https://cloud.githubusercontent.com/assets/182906/19517857/604f88d8-960c-11e6-97d6-16c9738cb824.png" width="150" />](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/DataScienceEightSteps_Full.png)                    | [DataCamp](https://www.datacamp.com)による「データサイエンティストになる8つのステップ」の図解ガイド [(画像)](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/DataScienceEightSteps_Full.png)                                                              |
| [<img src="https://i.imgur.com/W2t2Roz.png" width="150" />](https://i.imgur.com/FxsL3b8.png)                                                                                                                                                | 必要なスキルのマインドマップ ([画像](https://i.imgur.com/FxsL3b8.png))                                                                                                                                                                                          |
| [<img src="https://i.imgur.com/rb9ruaa.png" width="150" />](https://nirvacana.com/thoughts/wp-content/uploads/2013/07/RoadToDataScientist1.png)                                                                                              | Swami Chandrasekaranによる[地下鉄路線図形式のカリキュラム](https://nirvacana.com/thoughts/2013/07/08/becoming-a-data-scientist/)です。 |
| [<img src="https://i.imgur.com/XBgKF2l.png" width="150" />](https://i.imgur.com/4ZBBvb0.png)                                                                                                                                                | [@kzawadz](https://twitter.com/kzawadz)による投稿：[Twitter](https://twitter.com/MktngDistillery/status/538671811991715840)                                                                                                                                      |
| [<img src="https://i.imgur.com/l9ZGtal.jpg" width="150" />](https://i.imgur.com/xLY3XZn.jpg)                                                                                                                                                | [Data Science Central](https://www.datasciencecentral.com/)によるものです。                                                                                                                                                                                                |
| [<img src="https://i.imgur.com/TWkB4X6.png" width="150" />](https://i.imgur.com/0TydZ4M.png)                                                                                                                                                | データサイエンス論争：R対Python                                                                                                                                                                                                                               |
| [<img src="https://i.imgur.com/gtTlW5I.png" width="150" />](https://i.imgur.com/HnRwlce.png)                                                                                                                                                | 統計手法または機械学習手法の選び方                                                                                                                                                                                                     |
| [<img src="https://scikit-learn.org/1.5/_downloads/b82bf6cd7438a351f19fac60fbc0d927/ml_map.svg" width="150" />](https://scikit-learn.org/1.5/_downloads/b82bf6cd7438a351f19fac60fbc0d927/ml_map.svg)                                                                                                           | [適切な推定器の選択](https://scikit-learn.org/1.5/machine_learning_map.html#choosing-the-right-estimator)                                                                                                                                                                                                                                 |
| [<img src="https://i.imgur.com/3JSyUq1.png" width="150" />](https://i.imgur.com/uEqMwZa.png)                                                                                                                                                | データサイエンス業界：誰が何をするのか                                                                                                                                                                                                                     |
| [<img src="https://i.imgur.com/DQqFwwy.png" width="150" />](https://i.imgur.com/RsHqY84.png)                                                                                                                                                | データサイエンスの~~ベン~~オイラー図                                                                                                                                                                                                                          |
| [<img src="https://www.springboard.com/blog/wp-content/uploads/2016/03/20160324_springboard_vennDiagram.png" width="150" height="150" />](https://www.springboard.com/blog/wp-content/uploads/2016/03/20160324_springboard_vennDiagram.png) | [Springboard](https://www.springboard.com)によるデータサイエンスのさまざまなスキルと役割 |
| [<img src="https://data-literacy.geckoboard.com/assets/img/data-fallacies-to-avoid-preview.jpg" width="150" alt="Data Fallacies To Avoid" />](https://data-literacy.geckoboard.com/poster/)                                                 | データサイエンティストや統計学者ではない同僚に、[データに関する間違いを避ける方法](https://data-literacy.geckoboard.com/poster/)を教えるための、シンプルで親しみやすい方法です。[Geckoboardのデータリテラシー講座](https://data-literacy.geckoboard.com/)より。 |

### データセット
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [Academic Torrents](https://academictorrents.com/)
- [ADS-B Exchange](https://www.adsbexchange.com/data-samples/) - 航空機および放送型自動従属監視（ADS-B）ソースに関する専用データセットです。
- [中国茶データセット（Chinese Tea Dataset）](https://chinatea.house/dataset/) - カテゴリ、産地、カフェイン量、風味、酸化度、抽出条件を含む中国茶100種類以上の厳選オープンデータセットです。JSONとCSV形式で利用できます。
- [大学投資収益率データセット（College ROI Dataset）](https://github.com/thomasthinks/college-roi-data) - FREOPP、IPEDS、BEAの地域価格データを基に、米国1,775機関の学士課程約3万件について生涯投資収益率を推計します。データ辞書付きCSV 5点、CC BY 4.0、Zenodo DOI。
- [AIによる雇用代替トラッカー（AI Displacement Tracker）](https://github.com/noahaust2/ai-displacement-tracker) - 12か国・11業種で453,748人に影響した、AIに起因する人員削減事例92件を追跡する構造化データセットです。JSONとCSV形式、CC-BY-4.0ライセンス。
- [Packrift梱包最適化ベンチマークコーパス](https://packrift.github.io/packaging-optimization-benchmark-corpus/) - 仕様が正確な1,000件のSKU記録から作成した公開包装製品データセットです。Eコマースの出荷処理や倉庫分析向けに、CSVとJSONをダウンロードできます。
- [ポケモンカードのセンタリング測定値](https://github.com/rrh1441/pokemon-card-centering-measurements) - eBayに実際に出品されたポケモンカード302枚について、PSA方式のセンタリング測定値320件（左右・上下の余白率、傾き）を収録しています。CSV形式、CC BY 4.0、Zenodo DOI付き。
- [グレード別ポケモンカード販売価格リファレンス](https://github.com/rrh1441/pokemon-card-sold-price-reference) - ポケモンカード486種のグレード別（未鑑定、PSA 9、PSA 10）販売価格中央値を収録し、各カードのサンプル数と信頼度フラグも記載しています。CSV形式、CC BY 4.0、Zenodo DOI付き。
- [Evidaxisのモメンタム・スナップショット](https://evidaxis.org) - オープンソースおよび研究ネイティブAIシステムの公開開発・引用活動を週次で記録します。コンテンツアドレス方式を用い、公開入力からバイト単位で再現できます。スナップショット日ごとのJSONとCSVを提供し、CC0、DOI 10.5281/zenodo.21076011。
- [hadoopilluminated.com](https://hadoopilluminated.com/hadoop_illuminated/Public_Bigdata_Sets.html)
- [data.gov](https://catalog.data.gov/dataset) - 米国政府のオープンデータ・ポータルです。
- [United States Census Bureau](https://www.census.gov/)
- [enigma.com](https://enigma.com/) - 公開データの世界を探索しましょう。政府、企業、組織が公開する数十億件の公的記録をすばやく検索・分析できます。
- [datahub.io](https://datahub.io/)
- [aws.amazon.com/datasets](https://aws.amazon.com/datasets/)
- [datacite.org](https://datacite.org/)
- [欧州データの公式ポータル](https://data.europa.eu/en)
- [NASDAQ:DATA](https://data.nasdaq.com/) - Nasdaq Data Linkは、金融、経済、オルタナティブ・データセットの主要な情報源です。
- [Congressional Stock Brain](https://congressionalstockbrain.com) - 米国議会議員によるSTOCK法の取引開示を重要度で評価する無料のAIツールです。537人の議員の公開取引報告からシグナルを機械的に採点します。
- [figshare.com](https://figshare.com/)
- [GeoLite Legacy Downloadable Databases](https://dev.maxmind.com/geoip)
- [Hugging Face Datasets](https://huggingface.co/datasets)
- [日本の地域（Japan Neighborhoods）](https://japanneighborhoods.com) - 警視庁のオープンデータに基づく、東京5,078地区×7年間（36,222件、2018～2024年）の犯罪統計の英語データセットです。犯罪マップ、安全度評価、生活費指数を含み、CC BYライセンスで公開されています。
- [静かな困窮指数（The Quiet-Broke Index）](https://jeevesagency.github.io/quiet-broke-index/) - 世帯年収40万ドルのうち、住宅、税金、育児、医療、交通にどれほど費やされるかを30都市圏で総合評価したランキングです。算出方法を公開しており、無料でメール登録も不要です。
- [Crime Brasil](https://crimebrasil.com.br) - ブラジルの犯罪統計を扱うオープンデータ・プラットフォームです。リオグランデ・ド・スル州の地区別データ（79,024地区、2022～2025年の299万件）、MG州とRJ州の自治体別データ、全国のPRF高速道路データとDATASUS対人暴力データを提供します。無料REST API、CSV／Parquet、毎日更新、CC BY 4.0。
- [米国トラック関与死亡事故（FARS）2018～2024年](https://doi.org/10.5281/zenodo.20487070) - NHTSAの死亡事故報告システム（Fatality Analysis Reporting System）から抽出したデータセットです。2018～2024年に米国50州で発生した中型・大型商用トラックが関与する死亡事故33,898件を収録しています。19都市を比較する対話型[Vision Zero Report Card](https://accidentlawyerreview.com/research/vision-zero-report-card/)レポート、再現可能なPythonパイプライン（[GitHub](https://github.com/MarvinBregiosa/vision-zero-fars)）およびHuggingFaceミラーを含みます。恒久的なDOI付き、CC BY 4.0。
- [State of Peptides 2026](https://peptahub.com/state-of-peptides-2026) - ペプチドおよび関連化合物156種を収録した構造化参照データセットです。各項目に規制状況、カテゴリ、投与経路、半減期、分子量、CAS番号、参照数、PubChem／DrugBank／Wikidata IDを含みます。CSVとJSON形式、ログイン不要、CC BY 4.0。
- [Quora's Big Datasets Answer](https://www.quora.com/Where-can-I-find-large-datasets-open-to-the-public)
- [Public Big Data Sets](https://hadoopilluminated.com/hadoop_illuminated/Public_Bigdata_Sets.html)
- [Kaggle Datasets](https://www.kaggle.com/datasets)
- [ヒト遺伝的変異の詳細なカタログ](https://www.internationalgenome.org/data)
- [著名な人物、場所、物事をコミュニティが編集するデータベース](https://developers.google.com/freebase/)
- [Google Public Data](https://www.google.com/publicdata/directory)
- [World Bank Data](https://data.worldbank.org/)
- [NYC Taxi data](https://chriswhong.github.io/nyctaxi/)
- [Open Data Philly](https://www.opendataphilly.org/) フィラデルフィアの人々とデータをつなぎます。
- [grouplens.org](https://grouplens.org/datasets/) 評価付き映画、書籍、Wikiのサンプルデータセット
- [UC Irvine Machine Learning Repository](https://archive.ics.uci.edu/ml/) - 機械学習に適したデータセットを収録しています
- [research-quality data sets](https://web.archive.org/web/20150320022752/https://bitly.com/bundles/hmason/1) by [Hilary Mason](https://web.archive.org/web/20150501033715/https://bitly.com/u/hmason/bundles)
- [National Centers for Environmental Information](https://www.ncei.noaa.gov/)
- [ClimateData.us](https://www.climatedata.us/) (related: [U.S. Climate Resilience Toolkit](https://toolkit.climate.gov/))
- [r/datasets](https://www.reddit.com/r/datasets/)
- [MapLight](https://www.maplight.org/data-series) - 一般に公開される用途向けに、さまざまなデータを無料で提供します。詳細は以下のデータセットをクリックしてください
- [GHDx](https://ghdx.healthdata.org/) - 保健指標・評価研究所（IHME）が提供する、世界各地の健康・人口統計データセットと研究結果のカタログ
- [St. Louis Federal Reserve Economic Data - FRED](https://fred.stlouisfed.org/)
- [New Zealand Institute of Economic Research – Data1850](https://data1850.nz/)
- [Open Data Sources](https://github.com/datasciencemasters/data)
- [UNICEF Data](https://data.unicef.org/)
- [undata](https://data.un.org/)
- [NASA SocioEconomic Data and Applications Center - SEDAC](https://earthdata.nasa.gov/centers/sedac-daac)
- [The GDELT Project](https://www.gdeltproject.org/)
- [Sweden, Statistics](https://www.scb.se/en/)
- [StackExchange Data Explorer](https://data.stackexchange.com) - Stack Exchangeネットワークの公開データに任意のクエリを実行できるオープンソースツールです。
- [San Fransisco Government Open Data](https://datasf.org/opendata/)
- [IBM Asset Dataset](https://developer.ibm.com/exchanges/data/)
- [Open data Index](https://index.okfn.org/)
- [Public Git Archive](https://github.com/src-d/datasets/tree/master/PublicGitArchive)
- [GHTorrent](https://ghtorrent.org/)
- [Microsoft Research Open Data](https://msropendata.com/)
- [Open Government Data Platform India](https://data.gov.in/)
- [Google Dataset Search (beta)](https://datasetsearch.research.google.com/)
- [NAYN.CO Turkish News with categories](https://github.com/naynco/nayn.data)
- [Covid-19](https://github.com/datasets/covid-19)
- [Covid-19 Google](https://github.com/google-research/open-covid-19-data)
- [Enron Email Dataset](https://www.cs.cmu.edu/~./enron/)
- [5000 Images of Clothes](https://github.com/alexeygrigorev/clothing-dataset)
- [IBB Open Portal](https://data.ibb.gov.tr/en/)
- [The Humanitarian Data Exchange](https://data.humdata.org/)
- [250k+ Job Postings](https://aws.amazon.com/marketplace/pp/prodview-p2554p3tczbes) - 2020年から現在までのルクセンブルクの過去の求人情報を拡充し続けるデータセットです。AWS Data Exchangeで25万件以上を無料提供します。
- [FinancialData.Net](https://financialdata.net/documentation) - 株式市場データ、財務諸表、サステナビリティデータなどの金融データセットです。
- [ハードディスク価格指数（HDD Price Index）](https://github.com/AdamDudley/hddhunt-price-index) - 米Amazonで販売される新品内蔵3.5インチSATAハードドライブについて、容量別の最安テラバイト単価（USD/TB）を毎日記録するオープンデータセットです。過去の時系列を含み、CSV、JSON、JSONL形式、ログイン不要、CC BY 4.0。
- [BDEスコア（BDE Score）](https://github.com/hbhqq9/bde-score) - 米国、香港、A株の73銘柄を対象に、透明性の高いBDEスコアリングで複数市場の株式をAI分析します。EU AI法第50条に準拠し、MITライセンスです。
- [Google Dataset Search](https://datasetsearch.research.google.com/) – ウェブ全体からデータセットを検索できます。
- [notesjor corpus-collection](https://notes.jan-oliver-ruediger.de/korpora/) - 主にドイツ語（歴史的・現代的な文献）の60億トークン超のコーパスを無料で利用できます。
- [CLARIN-Repository](https://lindat.mff.cuni.cz/repository/home) - CLARINは科学データセット向けの欧州リポジトリです。
- [GBIF](https://www.gbif.org/) - 地球規模生物多様性情報機構（Global Biodiversity Information Facility）は、24億件以上の種の出現記録を提供します。生態系モデリングや機械学習研究向けの無料オープンAPIがあります。
- [FAOSTAT](https://www.fao.org/faostat/en/) - 245以上の国・地域における食料生産、貿易、土地利用、排出量に関する国連FAO統計です。無料APIと一括ダウンロードを提供します。
- [Movebank](https://www.movebank.org/) - GPSと衛星テレメトリーによる60億件以上の動物移動記録を保存する無料プラットフォームです。オープンREST APIを備え、時空間モデリングや軌跡の機械学習に役立ちます。
- [Encyclopedia of Life](https://eol.org/) - 形質、分類、メディアを含む190万種以上のオープンな構造化データです。生物多様性や種分類のタスク向けに無料APIと一括ダウンロードを提供します。
- [FirstData](https://github.com/MLT-OSS/FirstData) - 世界で最も包括的かつ信頼性の高いデータソース知識ベースです。政府、国際機関、研究機関から厳選した210以上の情報源を収録し、AIエージェント向けMCP連携に対応します。MITライセンスです。
- [latamdata-py](https://github.com/juanmoisesd/latamdata-py) - ラテンアメリカのオープン研究データセット38種類（医療、神経科学、メンタルヘルス、経済学）に1行でアクセスできるPythonパッケージです。`pip install latamdata-py`でインストールできます。
- [ZipCheckup](https://github.com/artakulov/us-water-quality-data) - 米国の郵便番号4万2,000件以上について、水質、大気質、PFAS汚染、ラドン、鉛、洪水リスクなど12分野の環境安全データを無料提供します。公開REST API、npm／PyPIパッケージ、CC BY 4.0。
- [Helium](https://heliumtrades.com/mcp-page/) - 15以上の次元の構造化バイアス特徴を備えたリアルタイムニュースコーパス（320万件以上の記事、5,000以上の情報源）、AI分析付き金融市場データ（株式、ETF、暗号資産）、確率指標と完全なグリークスを備えた機械学習オプション価格、クオンツ研究向け過去オプションチェーンデータを提供します。MCPサーバーまたはREST APIから利用できます。
- [検証済みサプリメント根拠データ（Verified Supplement Evidence）](https://github.com/erinheit451/verified-supplement-evidence) - 用量、形態別バイオアベイラビリティ、薬物・栄養素相互作用、NHANES欠乏率、FDA FAERS有害事象シグナル、有効用量あたりの費用を網羅した、エビデンス評価付き栄養補助食品データセットです。臨床的主張にはすべてPubMed PMIDを引用しています。CC BY 4.0、DOI 10.57967/hf/9356。
- [米国医療従事者向け業界支払データ（US Provider Industry Payments）](https://github.com/npiwho/us-provider-payments) - NPIでCMS Open Payments（2019～2025年）の製薬・医療機器企業からの支払い情報と結合した、米国医療従事者165万人のデータです。合計額、支払件数、最大支払者、支払種別に加え、州別・専門分野別の集計を含みます。gzip圧縮CSV、ログイン不要、CC0、Zenodo DOI 10.5281/zenodo.23098004。
- [WhatFontIs-Bench](https://github.com/whatfontis/WhatFontIs-Bench) - 600種類の既知フォントで組まれた単語画像11,995枚を用いる書体識別用合成ベンチマークです。単語と各文字のバウンディングボックスを注釈しています。
- [米国関税データ](https://github.com/checkdutyrates/us-tariff-data) - 米国の関税分類表（Harmonized Tariff Schedule、関税率を含む約3万行）、国別の第99章追加関税（301条、232条など）、HS細分と原産国別のEU輸入関税を収録し、HTS改訂ごとに更新します。CSVとJSON形式、ログイン不要、米国データはCC0、EUデータはOGL v3、Zenodo DOI 10.5281/zenodo.23093989。


### コミック
**[`^        トップに戻る        ^`](#awesome-data-science)**

- [コミック集](https://medium.com/@nikhil_garg/a-compilation-of-comics-explaining-statistics-data-science-and-machine-learning-eeefbae91277)
- [漫画](https://www.kdnuggets.com/websites/cartoons.html)
- [データサイエンス漫画](https://www.cartoonstock.com/directory/d/data_science.asp)
- [データサイエンス：XKCD版](https://davidlindelof.com/data-science-the-xkcd-edition/)

## その他のAwesomeリスト

- ほかにもすばらしいAwesomeリストが [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness)
- [機械学習リスト](https://github.com/josephmisiti/awesome-machine-learning)
- [リスト集](https://github.com/jnv/lists)
- [データ可視化集](https://github.com/javierluraschi/awesome-dataviz)
- [Python集](https://github.com/vinta/awesome-python)
- [データサイエンスのIPython Notebook](https://github.com/donnemartin/data-science-ipython-notebooks)
- [R集](https://github.com/qinwf/awesome-R)
- [データセット集](https://github.com/awesomedata/awesome-public-datasets)
- [機械学習・深層学習チュートリアル集](https://github.com/ujjwalkarn/Machine-Learning-Tutorials/blob/master/README.md)
- [データサイエンスのアイデア集](https://github.com/JosPolfliet/awesome-ai-usecases)
- [ソフトウェアエンジニア向け機械学習](https://github.com/ZuzooVn/machine-learning-for-software-engineers)
- [コミュニティ厳選のデータサイエンス・リソース](https://hackr.io/tutorials/learn-data-science)
- [ソースコード向け機械学習リスト](https://github.com/src-d/awesome-machine-learning-on-source-code)
- [コミュニティ検出リスト](https://github.com/benedekrozemberczki/awesome-community-detection)
- [グラフ分類リスト](https://github.com/benedekrozemberczki/awesome-graph-classification)
- [決定木論文リスト](https://github.com/benedekrozemberczki/awesome-decision-tree-papers)
- [不正検出論文リスト](https://github.com/benedekrozemberczki/awesome-fraud-detection-papers)
- [勾配ブースティング論文リスト](https://github.com/benedekrozemberczki/awesome-gradient-boosting-papers)
- [コンピュータービジョン・モデル集](https://github.com/nerox8664/awesome-computer-vision-models)
- [モンテカルロ木探索リスト](https://github.com/benedekrozemberczki/awesome-monte-carlo-tree-search-papers)
- [統計・機械学習の一般的な用語集](https://www.analyticsvidhya.com/glossary-of-common-statistics-and-machine-learning-terms/)
- [自然言語処理の論文100選（100 NLP Papers）](https://github.com/mhagiwara/100-nlp-papers)
- [ゲームデータセット集](https://github.com/leomaurodesenv/game-datasets#readme)
- [機械学習・AI面接対策](https://github.com/aasimansari1/ml-interview-prep) - 実行可能なコード付きの機械学習／AI面接Q&Aを500件以上収録。機械学習の基礎、深層学習、NLP、PyTorch、scikit-learnパイプライン、システム設計を網羅します。
- [データサイエンス面接の質問](https://github.com/alexeygrigorev/data-science-interviews)
- [説明可能なグラフ推論リスト](https://github.com/AstraZeneca/awesome-explainable-graph-reasoning)
- [データサイエンス面接の質問トップ集](https://www.interviewbit.com/data-science-interview-questions/)
- [薬剤相乗効果、相互作用、多剤併用予測リスト](https://github.com/AstraZeneca/awesome-drug-pair-scoring)
- [深層学習の面接質問](https://www.adaface.com/blog/deep-learning-interview-questions/)
- [2023年のデータサイエンス主要な将来動向](https://medium.com/the-modern-scientist/top-future-trends-in-data-science-in-2023-3e616c8998b8)
- [生成AIは創造的な仕事をどう変えるか](https://hbr.org/2022/11/how-generative-ai-is-changing-creative-work)
- [生成AIとは？](https://www.techtarget.com/searchenterpriseai/definition/generative-AI)
- [機械学習の面接質問トップ100以上（初級から上級まで）](https://www.appliedaicourse.com/blog/machine-learning-interview-questions/)
- [データサイエンス・プロジェクト](https://github.com/veb-101/Data-Science-Projects)
- [データサイエンスは良いキャリアか？](https://www.scaler.com/blog/is-data-science-a-good-career/)
- [データサイエンスの未来：予測と動向](https://www.appliedaicourse.com/blog/future-of-data-science/)
- [データサイエンスと機械学習：その違いは？](https://www.appliedaicourse.com/blog/data-science-and-machine-learning-whats-the-difference/)
- [データサイエンスにおけるAI：用途、役割、ツール](https://www.scaler.com/blog/ai-in-data-science/)
- [データサイエンス向けプログラミング言語トップ13](https://www.appliedaicourse.com/blog/data-science-programming-languages/)
- [データ分析プロジェクトのアイデア40選以上](https://www.appliedaicourse.com/blog/data-analytics-projects-ideas/)
- [修了証付きの優れたデータサイエンス講座](https://www.appliedaicourse.com/blog/best-data-science-courses/)
- [生成AIモデル](https://www.appliedaicourse.com/blog/generative-ai-models/)
- [データ分析リスト](https://github.com/PavelGrigoryevDS/awesome-data-analysis) -  データ分析ツール、ライブラリ、リソースを厳選した一覧です。
- [エビデンス統合リスト](https://github.com/evidencesynthesis-tools/awesome-evidence-synthesis) - システマティックレビュー、メタ分析、エビデンス統合向けのオープンソース・ツールを厳選した一覧です。
- [Python数学パッケージ集](https://github.com/VascoSch92/awesome_python_math_packages) - 線形代数、最適化から統計学、トポロジーまで、数学向けPythonパッケージを厳選した一覧です。
- [AI開発職の求人](https://aidevboard.com/) - AI／MLエンジニア職に特化した求人掲示板です。5,400件以上の求人と無料REST APIを提供します。


### 趣味
- [Awesome Music Production](https://github.com/ad-si/awesome-music-production)
