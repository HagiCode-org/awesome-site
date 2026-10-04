# awesome-nlp

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

---

> **スポンサー：[Atlas Cloud](https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp)**
>
> <a href="https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/atlas-cloud-dark.png"><img src="assets/atlas-cloud-light.png" alt="Atlas Cloud" width="220" /></picture></a>
>
> **OpenAI互換のLLMエンドポイントを備えたAI API集約プラットフォーム**です。翻訳、要約、多言語生成、構造化抽出などのNLPタスクに対応します。

---

自然言語処理に関するリソースを厳選した一覧です。

_貢献する前に[貢献ガイドライン](contributing.md)をお読みください。お気に入りのNLPリソースは[プルリクエスト](https://github.com/keonkim/awesome-nlp/pulls)で追加してください。_

## 対象範囲

このリストは、言語分析、多言語ツール、古典的手法とニューラル手法、データセット、評価など、自然言語処理を扱います。大規模言語モデルは、トークン化、多言語対応、機械翻訳、要約、固有表現認識、質問応答、事実性、プロービング、蒸留など、中核となるNLPタスクや能力を前進・評価するものに限り掲載しています。汎用チャットボット、エージェントフレームワーク、プロンプトテンプレートのリポジトリ、コード生成ツール、RAGアプリのスターターキットは別のリストにあります。[関連項目](#see-also)をご覧ください。

## 目次

* [研究の概要と動向](#research-summaries-and-trends)
* [著名なNLP研究機関](#prominent-nlp-research-labs)
* [チュートリアル](#tutorials)
  * [読み物](#reading-content)
  * [動画とコース](#videos-and-online-courses)
  * [書籍](#books)
* [ライブラリ](#libraries)
  * [Node.js](#node-js)
  * [Python](#python)
  * [C++](#c++)
  * [Java](#java)
  * [Kotlin](#kotlin)
  * [Scala](#scala)
  * [R](#R)
  * [Clojure](#clojure)
  * [Go](#go)
  * [Ruby](#ruby)
  * [Rust](#rust)
  * [NLP++](#NLP++)
  * [Julia](#julia)
* [サービス](#services)
* [アノテーションツール](#annotation-tools)
* [タスクと手法](#tasks-and-methods)
  * [テキスト埋め込み](#text-embeddings)
  * [トークン化、形態論、分割](#tokenization-morphology-and-segmentation)
  * [品詞タグ付けと依存構造解析](#pos-tagging-and-dependency-parsing)
  * [固有表現認識と情報抽出](#named-entity-recognition-and-information-extraction)
  * [照応解析](#coreference-resolution)
  * [テキスト分類と感情分析](#text-classification-and-sentiment-analysis)
  * [トピックモデリング](#topic-modeling)
  * [要約](#summarization)
  * [機械翻訳](#machine-translation)
  * [質問応答と読解](#question-answering-and-reading-comprehension)
  * [固有表現認識を超えた情報抽出](#information-extraction-beyond-ner)
  * [検索と埋め込み](#retrieval-and-embeddings)
  * [音声と言語テキスト](#speech-and-text)
* [データセット](#datasets)
* [多言語NLPフレームワーク](#multilingual-nlp-frameworks)
* [NLP向け言語モデル](#language-models-for-nlp)
  * [事前学習と適応](#pretraining-and-adaptation)
  * [多言語・言語間モデル](#multilingual-and-cross-lingual-models)
  * [評価とベンチマーク](#evaluation-and-benchmarks)
  * [推論とテスト時計算](#reasoning-and-test-time-compute)
  * [長文脈と代替アーキテクチャ](#long-context-and-alternative-architectures)
  * [事実性、幻覚、キャリブレーション](#factuality-hallucination-calibration)
  * [プロービングと解釈可能性](#probing-and-interpretability)
  * [効率的な小型言語モデル](#efficient-and-small-language-models)
  * [指示チューニングと選好最適化](#instruction-tuning-and-preference-optimization)
  * [NLPにおけるバイアス、公平性、安全性](#bias-fairness-safety-in-nlp)
* [言語別NLP](#nlp-per-language)
  * [アラビア語NLP](#nlp-in-arabic)
  * [中国語NLP](#nlp-in-chinese)
  * [デンマーク語NLP](#nlp-in-danish)
  * [オランダ語NLP](#nlp-in-dutch)
  * [ドイツ語NLP](#nlp-in-german)
  * [ハンガリー語NLP](#nlp-in-hungarian)
  * [インド諸語NLP](#nlp-in-indic-languages)
  * [インドネシア語NLP](#nlp-in-indonesian)
  * [韓国語NLP](#nlp-in-korean)
  * [ペルシア語NLP](#nlp-in-persian)
  * [ポーランド語NLP](#nlp-in-polish)
  * [ポルトガル語NLP](#nlp-in-portuguese)
  * [スペイン語NLP](#nlp-in-spanish)
  * [タイ語NLP](#nlp-in-thai)
  * [ウクライナ語NLP](#nlp-in-ukrainian)
  * [ウルドゥー語NLP](#nlp-in-urdu)
  * [ウズベク語NLP](#nlp-in-uzbek)
  * [ベトナム語NLP](#nlp-in-vietnamese)
  * [その他の言語](#other-languages)
* [関連項目](#see-also)
* [引用](#citation)

## 研究の概要と動向

最新のNLP研究を追うための情報源：

* [ACL Anthology](https://aclanthology.org/) - ACL、EMNLP、NAACL、EACL、COLINGおよび関連会議の論文を収録した標準的なアーカイブ。
* [NLP-Progress](https://nlpprogress.com/) - 主要なNLPタスクとデータセットにおける最先端の成果を追跡します。
* [Papers With Code: NLP](https://paperswithcode.com/area/natural-language-processing) - NLPタスクの論文、ベンチマーク、リーダーボードを掲載しています。
* [Sebastian Ruder's newsletter](https://newsletter.ruder.io/) - NLP研究と動向を定期的にまとめて紹介します。
* [ACL Rolling Review](https://aclrollingreview.org/) - ACL関連の会議に論文を送り出す継続的な査読プロセスです。
* [The Gradient](https://thegradient.pub/) - 機械学習とNLP研究に関する長文のエッセイを掲載しています。
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp) - 最近の論文を図解で要約しています。

### これまでの注目研究

* [NLP's ImageNet moment has arrived](https://thegradient.pub/nlp-imagenet/) - 事前学習済み言語モデルの台頭を扱った2018年のエッセイ。
* [Survey of the State of the Art in Natural Language Generation](https://arxiv.org/abs/1703.09902) - 2017年の自然言語生成（NLG）サーベイ。
* [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) と [The Illustrated BERT, ELMo, and co.](https://jalammar.github.io/illustrated-bert/) - 定番の図解による解説です。

## 著名なNLP研究機関
[トップへ戻る](#contents)

* [The Berkeley NLP Group](http://nlp.cs.berkeley.edu/index.shtml) - 主な成果には、はるか昔に消滅した言語を復元するツールがあります。[こちら](https://www.bbc.com/news/science-environment-21427896)で紹介されたこの研究では、現在アジア太平洋地域で話されている637言語のコーパスを用い、それらの祖先言語を再構築しました。
* [Language Technologies Institute, Carnegie Mellon University](http://www.cs.cmu.edu/~nasmith/nlp-cl.html) - 主なプロジェクトに、ケチュア語やアイマラ語などの危機言語を対象とする構文駆動型機械翻訳システム[Avenue Project](http://www.cs.cmu.edu/~avenue/)があります。また、以前の[Noah's Ark](http://www.cs.cmu.edu/~ark/)では、アラビア語のNLPツールを改善する[AQMAR](http://www.cs.cmu.edu/~ark/AQMAR/)が開発されました。
* [NLP research group, Columbia University](http://www1.cs.columbia.edu/nlp/index.cgi) - 音声翻訳システムの対話的なエラー処理であるBOLTや、対話における笑いを特徴付ける名称未定のプロジェクトを開発しました。
* [The Center or Language and Speech Processing, John Hopkins University](http://clsp.jhu.edu/) - パーキンソン病の診断検査を作成するための音声認識ソフトウェアを開発し、最近話題になりました。[詳細はこちら](https://www.clsp.jhu.edu/2019/03/27/speech-recognition-software-and-machine-learning-tools-are-being-used-to-create-diagnostic-test-for-parkinsons-disease/#.XNFqrIkzYdU)。
* [Computational Linguistics and Information Processing Group, University of Maryland](https://wiki.umiacs.umd.edu/clip/index.php/Main_Page) - 主な成果には、[Human-Computer Cooperation or Word-by-Word Question Answering](http://www.umiacs.umd.edu/~jbg/projects/IIS-1652666)や、音韻表現の発達のモデル化があります。
* [Penn Natural Language Processing, University of Pennsylvania](https://nlp.cis.upenn.edu/) - [Penn Treebank](https://catalog.ldc.upenn.edu/LDC99T42)と[Penn Discourse Treebank](https://www.cis.upenn.edu/~pdtb/)を作成したことで知られています。
* [The Stanford Nautral Language Processing Group](https://nlp.stanford.edu/)- 世界有数のNLP研究機関の一つで、[Stanford CoreNLP](https://nlp.stanford.edu/software/corenlp.shtml)や[照応解析システム](https://nlp.stanford.edu/software/dcoref.shtml)の開発で知られています。


## チュートリアル
[トップへ戻る](#contents)

### 読み物

機械学習全般

* [Machine Learning 101](https://docs.google.com/presentation/d/1kSuQyW5DTnkVaZEjGYCkfOxvzCqGEFzWBy4e9Uedd9k/edit?usp=sharing) - Googleのシニア・クリエイティブ・エンジニアが、エンジニアにも経営幹部にも分かりやすく機械学習を解説します。
* [AI Playbook](https://aiplaybook.a16z.com/) - a16zによるAIプレイブック。上司に共有したり、プレゼンテーションの資料に使ったりするのに適しています。
* [Sebastian Ruder's Newsletter](https://newsletter.ruder.io/) - NLP研究の優れた成果を解説します。
* [How To Label Data](https://www.lighttag.io/how-to-label-data/) - 大規模な言語アノテーションプロジェクトの管理ガイドです。
* [Depends on the Definition](https://www.depends-on-the-definition.com/) - 幅広いNLPトピックを詳しい実装とともに扱うブログ記事集です。

NLPの入門とガイド

* [Understand & Implement Natural Language Processing](https://www.analyticsvidhya.com/blog/2017/01/ultimate-guide-to-understand-implement-natural-language-processing-codes-in-python/)
* [NLP in Python](http://github.com/NirantK/nlp-python-deep-learning) - GitHub上のノートブック集です。
* [Natural Language Processing: An Introduction](https://academic.oup.com/jamia/article/18/5/544/829676) - オックスフォード大学による入門資料です。
* [NLP from Scratch with PyTorch](https://pytorch.org/tutorials/intermediate/nlp_from_scratch_index.html)
* [Hands-On NLTK Tutorial](https://github.com/hb20007/hands-on-nltk-tutorial) - NLTKのチュートリアルとJupyterノートブックです。
* [Natural Language Processing with Python – Analyzing Text with the Natural Language Toolkit](https://www.nltk.org/book/) - NLTKを使ってNLPの概念を紹介するオンライン版および印刷版の書籍です。著者はNLTKライブラリも執筆しました。
* [Train a new language model from scratch](https://huggingface.co/blog/how-to-train) - Hugging Face 🤗による解説です。
* [Advanced NLP with spaCy](https://course.spacy.io/en/) - テキスト処理、大規模データ分析、処理パイプライン、独自のNLPタスク向けニューラルネットワークモデルの学習を扱う無料オンラインコースです。
* [Kaggle NLP Learning Guide](https://www.kaggle.com/learn-guide/natural-language-processing) - 入門ガイド、NLPの深層学習、BERT、GloVe、TF-IDFなどの手法の図解を含む、初心者向けチュートリアルです。

ブログとニュースレター

* [Deep Learning, NLP, and Representations](https://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
* [The Illustrated BERT, ELMo, and co. (How NLP Cracked Transfer Learning)](https://jalammar.github.io/illustrated-bert/)と[The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
* [Natural Language Processing](https://nlpers.blogspot.com/) - Hal Daumé IIIによるブログです。
* [arXiv: Natural Language Processing (Almost) from Scratch](https://arxiv.org/pdf/1103.0398.pdf)
* [Karpathy's The Unreasonable Effectiveness of Recurrent Neural Networks](https://karpathy.github.io/2015/05/21/rnn-effectiveness)
* [Machine Learning Mastery: Deep Learning for Natural Language Processing](https://machinelearningmastery.com/category/natural-language-processing)
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp)

### 動画とオンライン講座
[トップへ戻る](#contents)

* [Advanced Natural Language Processing](https://people.cs.umass.edu/~miyyer/cs685_f20/) - マサチューセッツ大学アマースト校のCS 685。
* [Deep Natural Language Processing](https://github.com/oxford-cs-deepnlp-2017/lectures) - オックスフォード大学の講義シリーズ。
* [Deep Learning for Natural Language Processing (cs224-n)](https://web.stanford.edu/class/cs224n/) - Richard SocherとChristopher Manningによるスタンフォード大学の講義。
* [Neural Networks for NLP](http://phontron.com/class/nn4nlp2017/) - カーネギーメロン大学言語技術研究所の講義。
* [Deep NLP Course](https://github.com/yandexdataschool/nlp_course) - Yandex Data Schoolによる講座。テキスト埋め込みから機械翻訳まで、系列モデリングや言語モデルなど重要な概念を扱います。
* [fast.ai Code-First Intro to Natural Language Processing](https://www.fast.ai/2019/07/08/fastai-nlp/) - 正規表現、SVD、ナイーブベイズ、トークン化などの従来型NLPと、RNN、seq2seq、GRU、Transformerなどの近年のニューラルネットワーク手法を扱います。バイアスや偽情報など、喫緊の倫理的課題も取り上げます。Jupyterノートブックは[こちら](https://github.com/fastai/course-nlp)。
* [Machine Learning University - Accelerated Natural Language Processing](https://www.youtube.com/playlist?list=PL8P_Z6C4GcuWfAq8Pt6PBYlck4OprHXsw) - NLPとテキスト処理の入門から、リカレントニューラルネットワークやTransformerまでを学ぶ講義です。
教材は[こちら](https://github.com/aws-samples/aws-machine-learning-university-accelerated-nlp)にあります。
* [Applied Natural Language Processing](https://www.youtube.com/playlist?list=PLH-xYrxjfO2WyR3pOAB006CYMhNt4wTqp) - IITマドラスによる講義シリーズ。基礎からオートエンコーダなど幅広い内容まで扱います。コースのGitHubノートブックも[こちら](https://github.com/Ramaseshanr/anlp)で利用できます。
* [DeepLearning.AI Natural Language Processing Specialization](https://www.deeplearning.ai/courses/natural-language-processing-specialization/) - 感情分析、単語埋め込み、RNN、LSTM、注意機構、BERTやT5などのTransformerモデルを用いた機械翻訳や要約を扱う全4コースのプログラムです。
* [Stanford CS336: Language Modeling from Scratch](https://stanford-cs336.github.io/) - データ、トークン化、学習、評価を含め、言語モデルの構築を一貫して学ぶコースです。
* [Stanford CS25: Transformers United](https://web.stanford.edu/class/cs25/) - TransformerおよびNLPの最新研究の著者を招くセミナーシリーズです。
* [Cohere LLM University](https://cohere.com/llmu) - LLM、埋め込み、セマンティック検索、NLPアプリケーションを扱う無料コースです。
* [Hugging Face NLP Course](https://huggingface.co/learn/nlp-course) - Transformers、Datasets、Tokenizersライブラリを使った実践的なNLPコースです。
* [NLP Demystified](https://www.nlpdemystified.org/) - NLPの基礎からTransformerまでを扱う、Python/Jupyterノートブック付きの初心者向け無料コースです。


### 書籍

* [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) - Dan Jurafsky教授による無料書籍です。
* [Natural Language Processing](https://github.com/jacobeisenstein/gt-nlp-class) - Georgia TechのJacob Eisenstein博士による無料のNLP講義ノートです。
* [NLP with PyTorch](https://github.com/joosthub/PyTorchNLPBook) - Brian RaoとDelip Raoによる書籍です。
* [Text Mining in R](https://www.tidytextmining.com)
* [Natural Language Processing with Python](https://www.nltk.org/book/)
* [Practical Natural Language Processing](https://www.oreilly.com/library/view/practical-natural-language/9781492054047/)
* [Natural Language Processing with Spark NLP](https://www.oreilly.com/library/view/natural-language-processing/9781492047759/)
* [Deep Learning for Natural Language Processing](https://www.manning.com/books/deep-learning-for-natural-language-processing) - Stephan Raaijmakers著。
* [Real-World Natural Language Processing](https://www.manning.com/books/real-world-natural-language-processing) - 萩原正人著。
* [Natural Language Processing in Action, Second Edition](https://www.manning.com/books/natural-language-processing-in-action-second-edition) - Hobson LaneとMaria Dyshel著。
* [Transformers in Action](https://www.manning.com/books/transformers-in-action) - Nicole Koenigstein著。
* [The Math Behind Artificial Intelligence](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book) - Tiago Monteiro著。工学の視点から、AIを支える数学を平易な英語で解説するFreeCodeCampの無料書籍です。線形代数、微積分、確率・統計、最適化理論を、比喩、実世界での応用、Pythonコード例とともに扱います。
  
## ライブラリ

[トップへ戻る](#contents)

* <a id="node-js">**Node.jsとJavaScript** - Node.js向けNLPライブラリ</a> | [トップへ戻る](#contents)
  * [Twitter-text](https://github.com/twitter/twitter-text) - Twitterのテキスト処理ライブラリをJavaScriptで実装したものです。
  * [Knwl.js](https://github.com/benhmoore/Knwl.js) - JavaScriptによる自然言語処理器です。
  * [Retext](https://github.com/retextjs/retext) - 自然言語の分析・操作を行う拡張可能なシステムです。
  * [NLP Compromise](https://github.com/spencermountain/compromise) - ブラウザー上で動作する自然言語処理ライブラリです。
  * [Natural](https://github.com/NaturalNode/natural) - Node向けの汎用自然言語処理機能です。
  * [Poplar](https://github.com/synyi/poplar) - 自然言語処理（NLP）向けのWebベースのアノテーションツールです。
  * [NLP.js](https://github.com/axa-group/nlp.js) - ボット構築用のNLPライブラリです。
  * [node-question-answering](https://github.com/huggingface/node-question-answering) - Node.js上でDistilBERTを使う、高速で本番環境に対応した質問応答です。

* <a id="python"> **Python** - Python向けNLPライブラリ</a> | [トップへ戻る](#contents)
  - [sentimental-onix](https://github.com/sloev/sentimental-onix) - ONNXを使ったspaCy向け感情分析モデルです。
  - [TextAttack](https://github.com/QData/TextAttack) - NLP向けの敵対的攻撃、敵対的学習、データ拡張を提供します。
  - [TextBlob](http://textblob.readthedocs.org/) - 一般的な自然言語処理（NLP）タスクに取り組むための一貫したAPIを提供します。[Natural Language Toolkit (NLTK)](https://www.nltk.org/)と[Pattern](https://github.com/clips/pattern)を基盤とし、両者と連携できます。:+1:
  - [spaCy](https://github.com/explosion/spaCy) - PythonとCythonによる実用レベルのNLPです。:+1:
    - [textacy](https://github.com/chartbeat-labs/textacy) - spaCyを基盤とする高水準のNLPライブラリです。
  - [gensim](https://radimrehurek.com/gensim/index.html) - プレーンテキストから教師なしの意味モデリングを行うPythonライブラリです。:+1:
  - [scattertext](https://github.com/JasonKessler/scattertext) - コーパス間の言語の違いを示すd3可視化を生成するPythonライブラリです。
  - [GluonNLP](https://github.com/dmlc/gluon-nlp) *(アーカイブ済み)* - MXNet/Gluonを基盤とするNLP向け深層学習ツールキットです。
  - [AllenNLP](https://github.com/allenai/allennlp) *(アーカイブ済み)* - PyTorchを基盤とし、多様な言語タスク向けに最先端の深層学習モデルを開発するNLP研究ライブラリです。
  - [PyTorch-NLP](https://github.com/PetrochukM/PyTorch-NLP) - 改良されたデータローダーや単語ベクトルローダー、ニューラルネットワーク層表現、BLEUなどの一般的なNLP指標を備え、迅速なプロトタイピングを支援するNLP研究ツールキットです。
  - [Rosetta](https://github.com/columbia-applied-data-science/rosetta) - テキスト処理ツールとラッパー（例：Vowpal Wabbit）です。
  - [PyNLPl](https://github.com/proycon/pynlpl) - Python向けの汎用自然言語処理ライブラリです。ARPA言語モデル、Mosesフレーズテーブル、GIZA++アライメントなど、特定の形式も扱います。
  - [foliapy](https://github.com/proycon/foliapy) - 言語アノテーション用XML形式[FoLiA](https://proycon.github.io/folia/)を扱うPythonライブラリです。
  - [PySS3](https://github.com/sergioburdisso/pyss3) - ホワイトボックス型テキスト分類器SS3を実装したPythonパッケージです。予測を説明する対話型可視化ツールも付属します。
  - [jPTDP](https://github.com/datquocnguyen/jPTDP) - 品詞（POS）タグ付けと依存構造解析を同時に行うツールキットです。40以上の言語の事前学習済みモデルを提供します。
  - [BigARTM](https://github.com/bigartm/bigartm) - 高速なトピックモデリングライブラリです。
  - [Snips NLU](https://github.com/snipsco/snips-nlu) - 本番環境で利用できる意図解析ライブラリです。
  - [Chazutsu](https://github.com/chakki-works/chazutsu) - 標準的なNLP研究用データセットをダウンロード・解析するライブラリです。
  - [Word Forms](https://github.com/gutfeeling/word_forms) - 英単語の考えられるすべての語形を高精度に生成します。
  - [Multilingual Latent Dirichlet Allocation (LDA)](https://github.com/ArtificiAI/Multilingual-Latent-Dirichlet-Allocation-LDA) - 多言語対応で拡張可能な文書クラスタリングパイプラインです。
  - [Natural Language Toolkit (NLTK)](https://www.nltk.org/) - 50以上のコーパスに対応し、多様なNLP機能を備えるライブラリです。
  - [NLP Architect](https://github.com/NervanaSystems/nlp-architect) - NLPとNLU向けの最先端の深層学習構造・手法を調べるライブラリです。
  - [Flair](https://github.com/zalandoresearch/flair) - PyTorchを基盤とする、シンプルな多言語NLPフレームワークです。BERT、ELMo、Flairの埋め込みに対応します。
  - [Kashgari](https://github.com/BrikerMan/Kashgari) - Kerasベースのシンプルな多言語NLPフレームワークです。固有表現認識（NER）、品詞（POS）タグ付け、テキスト分類向けモデルを短時間で構築できます。BERTとword2vecの埋め込みに対応します。
  - [FARM](https://github.com/deepset-ai/FARM) - NLP向けの高速で使いやすい転移学習ツールです。産業用途の言語モデル活用に重点を置き、質問応答を主に扱います。
  - [Haystack](https://github.com/deepset-ai/haystack) - データに対する自然言語検索インターフェースを構築する、エンドツーエンドのPythonフレームワークです。Transformersと最新のNLP技術を活用し、DPR、Elasticsearch、HuggingFace Modelhubなどをサポートします。
  - [Rita DSL](https://github.com/zaibacu/rita-dsl) - [Apache UIMAのRUTA](https://uima.apache.org/ruta.html)を緩やかに基にしたDSLです。言語パターン（ルールベースNLP）を定義し、[spaCy](https://spacy.io/)形式、または機能を絞った軽量な正規表現パターンに変換できます。
  - [Transformers](https://github.com/huggingface/transformers) - TensorFlow 2.0とPyTorch向けの自然言語処理ライブラリです。
  - [Tokenizers](https://github.com/huggingface/tokenizers) - 研究と本番環境向けに最適化されたトークナイザーです。
  - [fairSeq](https://github.com/pytorch/fairseq) - Facebook AI Researchによる、PyTorch上の最先端seq2seqモデルの実装です。
  - [corex_topic](https://github.com/gregversteeg/corex_topic) - 最小限のドメイン知識で階層的トピックモデリングを行います。
  - [Sockeye](https://github.com/awslabs/sockeye) - Amazon Translateを支えるニューラル機械翻訳（NMT）ツールキットです。
  - [DL Translate](https://github.com/xhlulu/dl-translate) - `transformers`とFacebookのmBART Largeを基盤とする、50言語対応の深層学習翻訳ライブラリです。
  - [Jury](https://github.com/obss/jury) - 複数の自動評価指標を提供するNLPモデル出力の評価ツールです。
  - [python-ucto](https://github.com/proycon/python-ucto) - Unicode対応の正規表現ベースの多言語トークナイザーです。C++ライブラリのPythonバインディングで、[FoLiA形式](https://proycon.github.io/folia)をサポートします。
  - [Pearmut](https://github.com/zouharvi/pearmut) - 機械翻訳など、多言語NLPタスク向けの人手アノテーションツールです。
  - [Stanza](https://github.com/stanfordnlp/stanza) - 70以上の言語で、トークン化、POS、レンマ化、依存構造解析、NERを行うStanford NLPのPythonツールキットです。
  - [Sentence-Transformers](https://github.com/UKPLab/sentence-transformers) - 文・文書埋め込み、セマンティック検索、再ランキングを提供する、検索型NLPの標準的なツールです。
  - [Argilla](https://github.com/argilla-io/argilla) - LLM・NLPデータセット向けに、オープンソースでデータアノテーションとフィードバック収集を行うプラットフォームです。
  - [HuggingFace Datasets](https://github.com/huggingface/datasets) - 数千のNLPデータセットに対応した標準化済みローダーと処理機能です。
  - [HuggingFace Evaluate](https://github.com/huggingface/evaluate) - NLP評価指標の参照実装です。
  - [sacrebleu](https://github.com/mjpost/sacrebleu) - 機械翻訳向けに、再現可能なBLEU/chrF/TERスコアを算出します。
  - [COMET](https://github.com/Unbabel/COMET) - 学習型の機械翻訳評価指標で、現在事実上の標準です。
  - [LangTest](https://github.com/JohnSnowLabs/langtest) - NLPモデルの堅牢性、バイアス、公平性を検査する60種類以上のテストを備えています。
   - [yasbd-lib](https://github.com/speedyk-005/yasbd-lib) - 高精度なルールベース文境界検出器（SBD）です。pysbd互換アダプター、ストリーミングAPI、CLI、spaCyコンポーネントを備え、39以上の言語に対応します。

- <a id="c++">**C++** - C++ライブラリ</a> | [トップへ戻る](#contents)
  - [InsNet](https://github.com/chncwang/InsNet) - パディング不要の動的バッチ処理でインスタンス依存型NLPモデルを構築するニューラルネットワークライブラリです。
  - [MIT Information Extraction Toolkit](https://github.com/mit-nlp/MITIE) - 固有表現認識と関係抽出のためのC、C++、Pythonツールです。
  - [CRF++](https://taku910.github.io/crfpp/) - 系列データの分割・ラベル付けなど、自然言語処理タスク向けの条件付き確率場（CRF）のオープンソース実装です。
  - [CRFsuite](http://www.chokkan.org/software/crfsuite/) - 系列データにラベルを付ける条件付き確率場（CRF）の実装です。
  - [BLLIP Parser](https://github.com/BLLIP/bllip-parser) - Charniak-Johnson parserとしても知られる自然言語パーサーです。
  - [colibri-core](https://github.com/proycon/colibri-core) - n-gramやskipgramなどの基本的な言語構造を高速かつ省メモリーで抽出・処理するC++ライブラリ、コマンドラインツール、Pythonバインディングです。
  - [ucto](https://github.com/LanguageMachines/ucto) - Unicode対応の正規表現ベースの多言語トークナイザーです。ツールとC++ライブラリを提供し、FoLiA形式に対応します。
  - [libfolia](https://github.com/LanguageMachines/libfolia) - [FoLiA形式](https://proycon.github.io/folia/)向けのC++ライブラリです。
  - [frog](https://github.com/LanguageMachines/frog) - オランダ語向けのメモリーベースNLPスイートです。品詞タグ付け、レンマ化、依存構造解析、NER、浅い構文解析、形態素解析に対応します。
  - [MeTA](https://github.com/meta-toolkit/meta) - ModErn Text Analysis。大規模テキストデータをマイニングするためのC++データサイエンスツールキットです。
  - [Mecab (Japanese)](https://taku910.github.io/mecab/)
  - [Moses](http://statmt.org/moses/)
  - [StarSpace](https://github.com/facebookresearch/StarSpace) - Facebookによる、単語・段落・文書レベルの埋め込み作成とテキスト分類のライブラリです。
  - [QSMM](http://qsmm.org) - 適応型の確率的トップダウン／ボトムアップパーサーです。

- <a id="java">**Java** - Java向けNLPライブラリ</a> | [トップへ戻る](#contents)
  - [Stanford NLP](https://nlp.stanford.edu/software/index.shtml)
  - [OpenNLP](https://opennlp.apache.org/)
  - [NLP4J](https://emorynlp.github.io/nlp4j/)
  - [Word2vec in Java](https://deeplearning4j.org/docs/latest/deeplearning4j-nlp-word2vec)
  - [ReVerb](https://github.com/knowitall/reverb/) Web規模のオープン情報抽出ツールです。
  - [OpenRegex](https://github.com/knowitall/openregex) 効率的で柔軟な、トークンベースの正規表現言語とエンジンです。
  - [CogcompNLP](https://github.com/CogComp/cogcomp-nlp) イリノイ大学認知計算グループが開発したコアライブラリです。
  - [MALLET](http://mallet.cs.umass.edu/) - MAchine Learning for LanguagE Toolkit。統計的自然言語処理、文書分類、クラスタリング、トピックモデリング、情報抽出など、テキストに対する機械学習向けのパッケージです。
  - [RDRPOSTagger](https://github.com/datquocnguyen/RDRPOSTagger) - 40以上の言語の事前学習済みモデルを備え、JavaとPythonの両方で利用できる堅牢な品詞タグ付けツールキットです。

- <a id="kotlin">**Kotlin** - Kotlin向けNLPライブラリ</a> | [トップへ戻る](#contents)
  - [Lingua](https://github.com/pemistahl/lingua/) 長文・短文のどちらにも適した、KotlinおよびJava向け言語判定ライブラリです。
  - [Kotidgy](https://github.com/meiblorn/kotidgy) — Kotlinで書かれた、インデックスベースのテキストデータ生成器です。

- <a id="scala">**Scala** - Scala向けNLPライブラリ</a> | [トップへ戻る](#contents)
  - [Saul](https://github.com/CogComp/saul) - SRL、POSなどの組み込みモジュールを備えた、NLPシステム開発用ライブラリです。
  - [ATR4S](https://github.com/ispras/atr4s) - 最先端の[用語自動抽出](https://en.wikipedia.org/wiki/Terminology_extraction)手法を備えたツールキットです。
  - [tm](https://github.com/ispras/tm) - 正則化多言語[PLSA](https://en.wikipedia.org/wiki/Probabilistic_latent_semantic_analysis)に基づくトピックモデリングの実装です。
  - [word2vec-scala](https://github.com/Refefer/word2vec-scala) - word2vecモデル向けScalaインターフェースです。単語間距離や単語アナロジーなどのベクトル演算を備えます。
  - [Epic](https://github.com/dlwh/epic) - Scalaで書かれた高性能な統計的パーサーと、複雑な構造化予測モデルを構築するフレームワークです。
  - [Spark NLP](https://github.com/JohnSnowLabs/spark-nlp) - Apache Spark ML上に構築された自然言語処理ライブラリです。分散環境で容易にスケールする機械学習パイプライン向けに、シンプルで高性能かつ高精度なNLPアノテーションを提供します。

- <a id="R">**R** - R向けNLPライブラリ</a> | [トップへ戻る](#contents)
  - [text2vec](https://github.com/dselivanov/text2vec) - Rで高速なベクトル化、トピックモデリング、距離計算、GloVe単語埋め込みを行います。
  - [wordVectors](https://github.com/bmschmidt/wordVectors) - word2vecなどの単語埋め込みモデルを作成・探索するRパッケージです。
  - [RMallet](https://github.com/mimno/RMallet) - Java機械学習ツールMALLETと連携するRパッケージです。
  - [dfr-browser](https://github.com/agoldst/dfr-browser) - Webブラウザーでテキストのトピックモデルを閲覧するためのd3可視化を作成します。
  - [dfrtopics](https://github.com/agoldst/dfrtopics) - テキストのトピックモデルを探索するRパッケージです。
  - [sentiment_classifier](https://github.com/kevincobain2000/sentiment_classifier) - 語義曖昧性解消とWordNet Readerを使った感情分類です。
  - [jProcessing](https://github.com/kevincobain2000/jProcessing) - 日本語の感情分類を含む、日本語自然言語処理ライブラリです。
  - [corporaexplorer](https://kgjerde.github.io/corporaexplorer/) - テキストコレクションを動的に探索するRパッケージです。
  - [tidytext](https://github.com/juliasilge/tidytext) - tidyツールによるテキストマイニングです。
  - [spacyr](https://github.com/quanteda/spacyr) - spaCy NLP向けのRラッパーです。
  - [CRAN Task View: Natural Language Processing](https://github.com/cran-task-views/NaturalLanguageProcessing/)

- <a id="clojure">**Clojure**</a> | [トップへ戻る](#contents)
  - [Clojure-openNLP](https://github.com/dakrone/clojure-opennlp) - Clojureにおける自然言語処理（opennlp）です。
  - [Infections-clj](https://github.com/r0man/inflections-clj) - Rails風の語形変化ライブラリで、ClojureとClojureScriptに対応します。
  - [postagga](https://github.com/fekr/postagga) - ClojureとClojureScript向けの自然言語解析ライブラリです。

- <a id="go">**Go**</a> | [トップへ戻る](#contents)
  - [prose](https://github.com/jdkato/prose) - トークン化、品詞タグ付け、固有表現抽出に対応したテキスト処理ライブラリです。
  - [gojieba](https://github.com/yanyiwu/gojieba) - 中国語単語分割アルゴリズムjiebaのGo実装です。
  - [kagome](https://github.com/ikawaha/kagome) - pure Goで書かれた日本語形態素解析器です。
  - [go-propisyu](https://github.com/rekurt/go-propisyu) - 数値を、文法上の性と名詞の格変化が正しいロシア語表記に変換します。

- <a id="ruby">**Ruby**</a> | [トップへ戻る](#contents)
  - Kevin Diasの[自然言語処理（NLP）向けRubyライブラリ、ツール、ソフトウェア集](https://github.com/diasks2/ruby-nlp)
  - [Practical Natural Language Processing done in Ruby](https://github.com/arbox/nlp-with-ruby)

- <a id="rust">**Rust**</a> | [トップへ戻る](#contents)
  - [whatlang](https://github.com/greyblake/whatlang-rs) — トライグラムに基づく自然言語判定ライブラリです。
  - [rust-bert](https://github.com/guillaume-be/rust-bert) - すぐに使えるNLPパイプラインとTransformerベースのモデルを提供します。
  - [snips-nlu-rs](https://github.com/snipsco/snips-nlu-rs) *(アーカイブ済み — Snipsは終了しました)* - 本番環境に対応した意図解析ライブラリです。

- <a id="NLP++">**NLP++** - NLP++言語</a> | [トップへ戻る](#contents)
  - [VSCode Language Extension](https://marketplace.visualstudio.com/items?itemName=dehilster.nlp) - VSCode向けNLP++言語拡張機能です。
  - [nlp-engine](https://github.com/VisualText/nlp-engine) - 完全な英語パーサーを含め、Linux上でNLP++コードを実行するエンジンです。
  - [VisualText](http://visualtext.org) - NLP++言語のホームページです。
  - [NLP++ Wiki](http://wiki.naturalphilosophy.org/index.php?title=NLP%2B%2B) - NLP++言語のWiki項目です。

- <a id="julia">**Julia**</a> | [トップへ戻る](#contents)
  - [CorpusLoaders](https://github.com/JuliaText/CorpusLoaders.jl) - さまざまなNLPコーパス向けの各種ローダーです。
  - [Languages](https://github.com/JuliaText/Languages.jl) - 人間の言語を扱うためのパッケージです。
  - [TextAnalysis](https://github.com/JuliaText/TextAnalysis.jl) - Julia向けテキスト分析パッケージです。
  - [TextModels](https://github.com/JuliaText/TextModels.jl) - 自然言語処理向けのニューラルネットワークモデルです。
  - [WordTokenizers](https://github.com/JuliaText/WordTokenizers.jl) - 自然言語処理などのタスク向けの高性能トークナイザーです。
  - [Word2Vec](https://github.com/JuliaText/Word2Vec.jl) - word2vec向けJuliaインターフェースです。

### サービス

NERやトピックタグ付けなどの高水準機能をAPIとして提供するNLPサービス | [トップへ戻る](#contents)

- [Wit-ai](https://github.com/wit-ai/wit) - アプリやデバイス向けの自然言語インターフェースです。
- [IBM Watson's Natural Language Understanding](https://github.com/watson-developer-cloud/natural-language-understanding-nodejs) - APIとGitHubのデモです。
- [Amazon Comprehend](https://aws.amazon.com/comprehend/) - NER、タグ付け、感情分析など、一般的なタスクを幅広く扱うNLP・機械学習スイートです。
- [Google Cloud Natural Language API](https://cloud.google.com/natural-language/) - 英語と中国語（簡体字・繁体字）を含む少なくとも9言語で、構文解析、NER、感情分析、コンテンツタグ付けを行います。
- [ParallelDots](https://www.paralleldots.com/text-analysis-apis) - 感情分析から意図分析までを扱う高水準のテキスト分析APIサービスです。
- [Microsoft Cognitive Service](https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics/)
- [TextRazor](https://www.textrazor.com/)
- [Rosette](https://www.rosette.com/)
- [Textalytic](https://www.textalytic.com) - 感情分析、固有表現抽出、POSタグ付け、単語頻度、トピックモデリング、ワードクラウドなどをブラウザーで行う自然言語処理です。
- [NLP Cloud](https://nlpcloud.io) - カスタム・事前学習済みspaCy NLPモデルをRESTful APIで提供し、固有表現認識（NER）、POSタグ付けなどに対応します。
- [Cloudmersive](https://cloudmersive.com/nlp-api) - 音声タグ付け、テキストの言い換え、言語翻訳・判定、文解析などを行う統合型の無料NLP APIです。

### アノテーションツール

- [GATE](https://gate.ac.uk/overview.html) - General Architecture and Text Engineeringは15年以上の歴史を持つ、無料のオープンソースソフトウェアです。
- [Anafora](https://github.com/weitechen/anafora) - 無料のオープンソースWebベース生テキストアノテーションツールです。
- [brat](https://brat.nlplab.org/) - 共同でテキストに注釈を付けるオンライン環境を提供する、迅速なアノテーションツールです。
- [doccano](https://github.com/chakki-works/doccano) - 無料のオープンソースツールです。テキスト分類、系列ラベリング、系列変換のアノテーション機能を備えます。
- [INCEpTION](https://inception-project.github.io) - インテリジェントな支援と知識管理機能を備えた意味アノテーションプラットフォームです。
- [prodigy](https://prodi.gy/) - アクティブラーニングを活用するアノテーションツールです（有料）。
- [LightTag](https://lighttag.io) - チーム向けのホスト型・マネージド型テキストアノテーションツールです（有料）。
- [rstWeb](https://corpling.uis.georgetown.edu/rstweb/info/) - 談話木アノテーション向けのオープンソースローカル／オンラインツールです。
- [GitDox](https://corpling.uis.georgetown.edu/gitdox/) - GitHubのバージョン管理とXMLデータ検証、共同編集可能な表形式グリッドを備えるオープンソースのサーバー型アノテーションツールです。
- [Datasaur](https://datasaur.ai/) - 個人・チーム向けにさまざまなNLPタスクを支援する、フリーミアムサービスです。
- [Konfuzio](https://konfuzio.com/en/) - チーム利用を重視した、ホスト型およびオンプレミス対応のテキスト・画像・PDFアノテーションツールです。アクティブラーニングを活用するフリーミアムサービスです（有料）。
- [UBIAI](https://ubiai.tools/) - チーム向けの使いやすいテキストアノテーションツールで、充実した自動注釈機能を備えます。NER、関係抽出、文書分類、請求書ラベル付け用OCRアノテーションに対応します（有料）。
- [Shoonya](https://github.com/AI4Bharat/Shoonya-Backend) - 組織・ワークスペース単位の多様な管理機能を備えた、無料のオープンソースデータアノテーションプラットフォームです。データ形式を問わず、複数段階の検証を伴う大規模なアノテーションにチームで利用できます。
- [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) - テキストアノテーションと深層学習モデルの学習・調整を行う無料のエンドツーエンド・ノーコードプラットフォームです。固有表現認識、分類、関係抽出、Assertion Statusに対応するSpark NLPモデルを標準搭載し、ユーザー、チーム、プロジェクト、文書数に制限はありません。FOSSではありません。
- [FLAT](https://github.com/proycon/flat) - 豊富なXMLベース言語アノテーション形式[FoLiA](http://proycon.github.io/folia)を基盤とするWebベースの言語アノテーション環境です。無料のオープンソースです。
- [Argilla](https://github.com/argilla-io/argilla) - 人手によるフィードバックの収集、NLP・LLMデータセットの構築、選好データの整備を行うオープンソースプラットフォームです。
- [Label Studio](https://github.com/HumanSignal/label-studio) - マルチモーダルなラベル付けプラットフォームです。オープンコア方式で、NLPラベル付けに広く使われています。
- [Potato](https://github.com/davidjurgens/potato) - 分類、スパン、照応、エンティティリンキング、エージェントトレース評価など21種類以上のタスクに対応する無料のオープンソースアノテーションツールです。MACE品質管理、注意力チェック、AI支援ラベリング、300以上のタスク例を備えます。


## タスクと手法

言語学的な課題ごとにNLPタスクをまとめています。各項目では、まず基礎的・古典的な研究、次にニューラル手法、該当する場合はLLMベースの手法を掲載しています。事前学習、評価、検索、推論など、現代の言語モデルに特化した研究については[NLP向け言語モデル](#language-models-for-nlp)をご覧ください。

### テキスト埋め込み

[トップへ戻る](#contents)

静的単語埋め込み（基礎研究）：

- [word2vec](https://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf) - [implementation](https://code.google.com/archive/p/word2vec/) - [explainer blog](http://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
- [GloVe](https://nlp.stanford.edu/pubs/glove.pdf) - [explainer blog](https://blog.acolyer.org/2016/04/22/glove-global-vectors-for-word-representation/)
- [fastText](https://arxiv.org/abs/1607.04606) - [実装](https://github.com/facebookresearch/fastText)。サブワードn-gramで語彙外語（OOV）を適切に扱えるため、低リソース言語でも有用です。
- [sense2vec](https://arxiv.org/abs/1511.06388) - 語義曖昧性解消に利用できます。
- [Paragraph Vectors / doc2vec](https://cs.stanford.edu/~quocle/paragraph_vector.pdf)

文脈依存埋め込み：

- [ELMo](https://arxiv.org/abs/1802.05365) - 深層文脈化単語表現です。
- [CoVe](https://arxiv.org/abs/1708.00107) - 機械翻訳から学習した文脈化ベクトルです。
- [ULMFiT](https://arxiv.org/abs/1801.06146) - テキスト分類向けの言語モデル微調整手法です。
- [InferSent](https://arxiv.org/abs/1705.02364) - 自然言語推論（NLI）から得られる文表現です。

最新の文・文書埋め込みについては、[NLP向け検索](#retrieval-for-nlp)（Sentence-Transformers、E5、BGE-M3、Nomic、GritLM）と、最新のリーダーボードを掲載する[MTEB](https://github.com/embeddings-benchmark/mteb)をご覧ください。

### トークン化、形態論、分割

[トップへ戻る](#contents)

- [SentencePiece](https://github.com/google/sentencepiece) - 言語に依存しないサブワードトークン化です。
- [BPE](https://arxiv.org/abs/1508.07909)と[Unigram LM](https://arxiv.org/abs/1804.10959) - 主流の2種類のサブワード方式です。
- [Stanza](https://github.com/stanfordnlp/stanza) - 70以上の言語のトークン化、レンマ化、形態論に対応します。
- [UDPipe](https://github.com/ufal/udpipe) - Universal Dependencies向けのトークン化、タグ付け、レンマ化、構文解析です。
- [Morfessor](https://github.com/aalto-speech/morfessor) - 教師なし形態素分割です。
トークナイザーの研究とアーキテクチャについては、[言語モデル](#language-models-for-nlp)もご覧ください。

- [Byte-Pair Encoding (Sennrich et al.)](https://arxiv.org/abs/1508.07909) - ニューラル機械翻訳向けのサブワード単位で、現代のトークナイザーの基礎です。
- [SentencePiece](https://github.com/google/sentencepiece) - 言語に依存しないサブワードトークン化（BPEとUnigram）です。
- [Tokenizers](https://github.com/huggingface/tokenizers) - BPE、WordPiece、Unigramの高速なRust実装です。
- [ByT5](https://arxiv.org/abs/2105.13626) - トークナイザーを使わないバイトレベルのモデルです。
- [CANINE](https://arxiv.org/abs/2103.06874) - Unicode文字を直接処理する、トークン化不要のエンコーダーです。
- [How Good is Your Tokenizer?](https://arxiv.org/abs/2012.15613) - 言語間におけるトークナイザーの公平性を検証します。
- [Byte Latent Transformer (BLT)](https://arxiv.org/abs/2412.09871) (Meta, 2024) - 大規模時にBPEトークン化モデルと同等の性能を実現する、動的なバイトレベルのパッチ分割です。トークナイザー不要の方向性を再び示しました。
- [SuperBPE](https://arxiv.org/abs/2503.13423) (2025) - 下流タスクでBPEを上回るスーパーワードトークン化です。
- [Over-Tokenized Transformer](https://arxiv.org/abs/2501.16975) (ICML 2025) - 入力語彙と出力語彙を分離します。入力語彙サイズと学習損失に対数線形の関係があることを示し、モデルサイズとは独立に語彙を拡張します。
- [Foundations of Tokenization](https://arxiv.org/abs/2407.11606) (ICLR 2025) - 確率写像の圏論を用いるトークナイザーモデルの初の形式的な統一枠組みで、統計的一貫性の条件を確立します。
- [The Token Tax: Systematic Bias in Multilingual Tokenization](https://arxiv.org/abs/2509.05486) (2025) - トークン化の分割度が言語間のモデル精度をどの程度予測するかを定量化し、形態的に複雑な低リソース言語にかかる構造的なコストを明らかにします。
- [Reducing Tokenization Premiums for Low-Resource Languages](https://arxiv.org/abs/2601.13328) (2026) - 低リソース言語の複数トークンからなる文字列を統合する語彙を後付けで追加し、再学習なしで推論コストを削減します。

### 品詞タグ付けと依存構造解析

[トップへ戻る](#contents)

- [Universal Dependencies](https://universaldependencies.org/) - 100以上の言語に対応する、言語間で一貫性のあるツリーバンクです。
- [spaCy](https://spacy.io/)と[Stanza](https://github.com/stanfordnlp/stanza) - 多言語対応の本番向けパーサーです。
- [Deep Biaffine Attention for Neural Dependency Parsing](https://arxiv.org/abs/1611.01734) - ニューラル構文解析の基礎となるアーキテクチャです。
- [Trankit](https://github.com/nlp-uoregon/trankit) - 軽量なTransformerベースの多言語NLPツールキットです。
- [Self-Attentive Constituency Parsing (Kitaev & Klein)](https://arxiv.org/abs/1805.01052) - 高性能なニューラル句構造解析器です。

### 固有表現認識と情報抽出

[トップへ戻る](#contents)

基礎的手法とニューラル手法：

- [CoNLL-2003 NER](https://www.aclweb.org/anthology/W03-0419/) - 英語NERの標準的なベンチマークです。
- [Neural Architectures for NER (Lample et al.)](https://arxiv.org/abs/1603.01360) - 長く標準的に使われているNERアーキテクチャBiLSTM-CRFを提案しています。
- [Flair](https://github.com/flairNLP/flair) - 文脈化文字列埋め込みを用い、多言語で高性能なNERを実現します。
- [spaCy NER](https://spacy.io/usage/linguistic-features#named-entities) - 本番環境ですぐに利用できます。

オープン型および指示追従型の情報抽出：

- [Universal NER](https://arxiv.org/abs/2308.03279) - 多言語のオープンセットNER向け指示チューニング済み言語モデルです。
- [GLiNER](https://arxiv.org/abs/2311.08526) (2023) - 推論時に任意のエンティティ型を扱える、小型の汎用NERモデルです。
- [GoLLIE](https://arxiv.org/abs/2310.03668) - 言語モデルを使ってガイドラインに従う情報抽出を行います。
- [REBEL](https://github.com/Babelscape/rebel) - seq2seqによるエンドツーエンドの関係抽出です。

LLMベース：

- [GPT-NER](https://arxiv.org/abs/2304.10428) - 固有表現認識にLLMを用います。
- [Can LLMs Replace Sentence-Level NER?](https://arxiv.org/abs/2402.10573) (2024) - コストと品質のトレードオフを検証します。
- [Generative NER in the Era of LLMs](https://arxiv.org/abs/2601.17898) (2026) - 4つのNERベンチマークで8つのオープンLLMを評価し、構造化出力を用いたPEFTでエンコーダーベースのNERと同等の性能を達成します。

### 照応解析

[トップへ戻る](#contents)

- [End-to-End Neural Coreference (Lee et al.)](https://arxiv.org/abs/1707.07045) - 現代のニューラル照応解析の基礎となった研究です。
- [SpanBERT](https://arxiv.org/abs/1907.10529) - スパンベースの事前学習で、照応解析の強力なベースラインです。
- [coref-hoi](https://github.com/lxucs/coref-hoi) - 高次推論による照応解析です。
- [maverick-coref](https://github.com/SapienzaNLP/maverick-coref) (2024) - 大規模な最良システムに匹敵する効率的な照応解析です。
- [LingMess](https://arxiv.org/abs/2205.12644) - 言語学的な根拠に基づくカテゴリ別の照応スコアリングです。
LLMベース：

- [LLMs for Coreference Resolution](https://arxiv.org/abs/2310.05884) - 照応解析向けのプロンプト設計と微調整です。
- [Multilingual Coreference Shared Task: Can LLMs Dethrone Traditional Approaches?](https://arxiv.org/abs/2509.17796) (2025) - LLMベース4方式と従来型5方式、計9システムを比較します。従来手法が依然優位ですが、LLMとの差は縮まりつつあります。

### テキスト分類と感情分析

[トップへ戻る](#contents)

- [fastText classifier](https://arxiv.org/abs/1607.01759) - 高性能で高速な線形ベースラインです。
- [Sentiment Treebank (SST)](https://nlp.stanford.edu/sentiment/) - 細粒度の感情分析における標準データセットです。
- [SetFit](https://github.com/huggingface/setfit) - プロンプトを使わない少数ショットテキスト分類です。
- [FastFit](https://github.com/IBM/fastfit) - 多クラス設定向けの高速な少数ショット学習です。
- [SST / IMDB / AG News with DeBERTa-v3](https://arxiv.org/abs/2111.09543) - 現在のエンコーダー微調整のベースラインです。
- [PySS3](https://github.com/sergioburdisso/pyss3) - 解釈可能なホワイトボックス型テキスト分類器です。
- [LLMs as Annotators](https://arxiv.org/abs/2305.13734) - 留意点を含め、テキスト分類のラベル付けにLLMを用いる手法です。

### トピックモデリング

[トップへ戻る](#contents)

- [Latent Dirichlet Allocation (Blei et al.)](https://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf) - トピックモデルの基礎となる手法です。
- [gensim](https://radimrehurek.com/gensim/) - PythonでLDA、LSI、HDPを利用できます。
- [BigARTM](https://github.com/bigartm/bigartm) - 高速な正則化トピックモデリングです。
- [BERTopic](https://github.com/MaartenGr/BERTopic) - 文脈埋め込み上でクラスタリングを行うトピックモデリングで、現在一般的な選択肢です。
- [Top2Vec](https://github.com/ddangelov/Top2Vec) - トピックベクトルと文書ベクトルを同時に学習します。
- [CorEx Topic](https://github.com/gregversteeg/corex_topic) - アンカーワードを使う階層的トピックモデリングです。

### 要約

[トップへ戻る](#contents)

- [TextRank](https://web.eecs.umich.edu/~mihalcea/papers/mihalcea.emnlp04.pdf) - グラフベースの抽出型要約です。
- [Pointer-Generator Networks (See et al.)](https://arxiv.org/abs/1704.04368) - ニューラル抽象型要約の基礎となる手法です。
- [PEGASUS](https://arxiv.org/abs/1912.08777) - 要約向けのgap-sentences事前学習です。
- [BART](https://arxiv.org/abs/1910.13461) - 広く利用されるノイズ除去seq2seqベースラインです。
- [BookSum](https://arxiv.org/abs/2105.08209)と[SCROLLS](https://arxiv.org/abs/2201.03533) - 長文書要約のベンチマークです。
LLMベース：

- [Benchmarking LLMs for News Summarization](https://arxiv.org/abs/2301.13848) - LLMと微調整済み要約モデルを比較します。
- [Element-Aware Summarization with LLMs](https://arxiv.org/abs/2305.13412) - 構造化プロンプトを使った要約です。
- [Understanding LLM Reasoning for Abstractive Summarization](https://arxiv.org/abs/2512.03503) (2025) - 明示的な推論は流暢さを高める一方、事実に基づく根拠付けを損ない、推論予算を増やすと忠実性が低下する場合があります。

### 機械翻訳

[トップへ戻る](#contents)

統計的手法とニューラル手法の基礎：

- [Moses](http://statmt.org/moses/) - 統計的機械翻訳の参照システムです。
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) - Transformerを提案し、分野を刷新しました。
- [Marian NMT](https://github.com/marian-nmt/marian) - 効率的なC++製NMTフレームワークです。
- [Fairseq](https://github.com/facebookresearch/fairseq) - PyTorch向け系列モデリングツールキットです。

大規模多言語対応：

- [NLLB-200](https://arxiv.org/abs/2207.04672) - 200言語の機械翻訳です。
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - 400以上の言語に対応する機械翻訳です。
- [SeamlessM4T](https://arxiv.org/abs/2312.05187) - 100以上の言語で音声・テキスト翻訳を行います。

評価：

- [COMET](https://github.com/Unbabel/COMET) - 学習型機械翻訳評価指標で、chrFと並ぶ現在の事実上の標準です。
- [sacrebleu](https://github.com/mjpost/sacrebleu) - 再現可能なBLEU/chrF/TERスコアを算出します。
- [BERTScore](https://github.com/Tiiiger/bert_score) - 類似度に基づく生成評価指標です。

LLMベース：

- [Is ChatGPT a Good Translator?](https://arxiv.org/abs/2301.08745) - 機械翻訳システムとしてのLLMを検証します。
- [Adapting LLMs for Document-Level MT](https://arxiv.org/abs/2401.06468) (2024) - 文脈を考慮する翻訳にLLMを適応させます。
- [GPT-4 vs Human Translators](https://arxiv.org/abs/2308.03245) - 専門的な機械翻訳の品質を比較します。
- [Multilingual MT with Open LLMs at Practical Scale](https://arxiv.org/abs/2502.02481) (2025) - 28言語の翻訳で100億未満のオープンLLMを評価し、GPT-4-turboとGoogle Translateに匹敵する結果を示します。
- [Bridging the Linguistic Divide: Survey on LLMs for MT](https://arxiv.org/abs/2504.01919) (2025) - 指示追従、文脈内学習、選好アラインメントが機械翻訳の方法論をどう変えたかを概説します。

### 質問応答と読解

[トップへ戻る](#contents)

データセットと基礎システム：

- [SQuAD / SQuAD 2.0](https://rajpurkar.github.io/SQuAD-explorer/) - 抽出型読解データセットです。
- [Natural Questions](https://ai.google.com/research/NaturalQuestions/) - Wikipediaを対象とする実ユーザーの質問です。
- [HotpotQA](https://hotpotqa.github.io/) - 複数段階の推論を扱います。
- [TriviaQA](http://nlp.cs.washington.edu/triviaqa/) - 遠隔教師ありの質問応答データセットです。
- [DrQA](https://github.com/facebookresearch/DrQA) - Wikipediaを対象としたオープンドメイン質問応答です。
- [Document-QA](https://github.com/allenai/document-qa) - 複数段落の読解を扱います。

現代的なオープンドメイン質問応答：

- [DPR](https://arxiv.org/abs/2004.04906)と[FiD](https://arxiv.org/abs/2007.01282) - 検索してから読む方式で、LLM以前の標準的なオープンドメイン質問応答パイプラインです。
- [Atlas](https://arxiv.org/abs/2208.03299) - 少数ショット質問応答向けの検索拡張言語モデルです。
- [NLP向け検索](#retrieval-for-nlp)もご覧ください。

LLM時代：

- [GPT-4 with retrieval on TriviaQA / NQ](https://arxiv.org/abs/2305.06983)
- [Self-RAG](https://arxiv.org/abs/2310.11511) (2023) - 検索、生成、自己批評を行います。
- [GAIA](https://arxiv.org/abs/2311.12983) - 複数段階の質問応答を含む汎用AIアシスタントのベンチマークです。

### 固有表現認識を超えた情報抽出

[トップへ戻る](#contents)

- [OpenIE 6](https://github.com/dair-iitd/openie6) - スキーマ不要のオープン情報抽出です。
- [Template-Based Information Extraction without the Templates](https://www.usna.edu/Users/cs/nchamber/pubs/acl2011-chambers-templates.pdf)
- [Privee: An Architecture for Automatically Analyzing Web Privacy Policies](https://www.sebastianzimmeck.de/zimmeckAndBellovin2014Privee.pdf)
- [REBEL](https://github.com/Babelscape/rebel) - エンドツーエンドの関係抽出です。
- [DocRED](https://github.com/thunlp/DocRED) - 文書レベル関係抽出のベンチマークです。
- [LLMs for Semantic Role Labeling](https://arxiv.org/abs/2506.05385) (2025) - RAGと自己修正を使う生成型LLMが、英語と中国語の意味役割ラベリング（SRL）でエンコーダー・デコーダー型BERTモデルを上回ります。
- [Adapting LLMs for Minimal-edit GEC](https://arxiv.org/abs/2506.13148) (2025) - 新しい誤り率適応スケジュールを用いるデコーダー専用LLMが、BEA-test文法誤り訂正で新たな最先端性能を達成します。

### 検索と埋め込み

[トップへ戻る](#contents)

質問応答と情報検索（IR）の基盤として広がる、密ベクトル検索と遅延相互作用検索：

- [DPR (Dense Passage Retrieval)](https://arxiv.org/abs/2004.04906) - デュアルエンコーダー検索のベースラインです。
- [ColBERT](https://arxiv.org/abs/2004.12832)と[ColBERTv2](https://arxiv.org/abs/2112.01488) - 遅延相互作用検索で、ドメイン外データでも高い性能を示します。
- [E5](https://arxiv.org/abs/2212.03533)と[E5-Mistral](https://arxiv.org/abs/2401.00368) - 広く利用されている密埋め込みモデル群です。
- [BGE](https://github.com/FlagOpen/FlagEmbedding)と[BGE-M3](https://arxiv.org/abs/2402.03216) (2024) - 多言語・多機能埋め込みで、各言語のMTEB上位に位置します。
- [Nomic Embed](https://arxiv.org/abs/2402.01613) (2024) - 完全にオープンで再現可能な埋め込みモデルです。
- [Matryoshka Representation Learning](https://arxiv.org/abs/2205.13147) - 推論時に次元数を変えられる入れ子状の埋め込みです。
- [GritLM](https://arxiv.org/abs/2402.09906) (2024) - 1つのモデルで生成と埋め込みを統合します。
- [RAG (Retrieval-Augmented Generation)](https://arxiv.org/abs/2005.11401) - 検索拡張の原型となった枠組みで、現代の質問応答パイプラインの基礎です。
- [Gemini Embedding](https://arxiv.org/abs/2503.07891) (2025) - Gemini由来の密埋め込みです。250以上の言語を対象とするMMTEBと、言語横断検索（XOR-Retrieve、XTREME-UP）で最先端の性能を示します。
- [Qwen3-Embedding](https://arxiv.org/abs/2506.05176) (2025) - Qwen3を基盤とするデコーダー型埋め込みモデル群（0.6B～8B）です。MTEB MultilingualとMTEB Codeで首位となり、従来のプロプライエタリモデルを上回ります。
- [Rank1](https://arxiv.org/abs/2502.18418) (2025) - DeepSeek-R1の推論トレース蒸留を通じてテスト時計算で学習した初の再ランキングモデルです。指示追従と分布外検索で最先端の性能を示します。
- [ReasonEmbed](https://arxiv.org/abs/2510.08252) (2025) - ReMixerによるデータ合成とRedapterによる適応学習を用いる、推論負荷の高い検索向け埋め込みモデルです。BRIGHTでnDCG@10の最高記録38.1を達成します。
- [ColBERT-Att](https://arxiv.org/abs/2603.25248) (2026) - クエリと文書の注意重みをColBERTスコアに統合して遅延相互作用検索を拡張し、MS-MARCO、BEIR、LoTTEで再現率を改善します。
埋め込み・検索ベンチマーク：

- [MMTEB](https://arxiv.org/abs/2502.13595) (2025) - MTEBを拡張し、250以上の言語にまたがる500以上のタスクを収録したコミュニティ版です。

### 音声と言語テキスト

[トップへ戻る](#contents)

隣接分野にまたがるため、ここでは代表的なリソースのみを挙げます：

- [Whisper](https://github.com/openai/whisper) - 多言語ASRで、現在の標準的なオープンモデルです。
- [SeamlessM4T](https://github.com/facebookresearch/seamless_communication) - 音声とテキストの翻訳を統合します。
- [Canary](https://huggingface.co/nvidia/canary-1b) (NVIDIA, 2024) - オープンな多言語ASRモデルの上位モデルです。
- [FunASR](https://github.com/modelscope/FunASR) - 産業用途のASRツールキットです。GPUでリアルタイムの170倍、50以上の言語に対応し、VAD、句読点付与、話者ダイアライゼーション、感情検出を標準搭載します。非自己回帰型のSenseVoiceとLLMベースのFun-ASR-Nanoモデルも含みます。
- [Wav2Vec 2.0](https://arxiv.org/abs/2006.11477) - 自己教師あり音声事前学習の基礎となる手法です。
- [Coqui TTS](https://github.com/coqui-ai/TTS)と[VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - オープンな音声合成（TTS）です。

## データセット

[トップへ戻る](#contents)

データセットのハブと一覧：

- [HuggingFace Datasets Hub](https://huggingface.co/datasets) - バージョン管理され、ストリーミング可能なローダーを備えた、現代のNLPデータセットの主要なインデックスです。
- [nlp-datasets](https://github.com/niderhoff/nlp-datasets) - NLPデータセットの大規模なコレクションです。
- [gensim-data](https://github.com/RaRe-Technologies/gensim-data) - 事前学習済みNLPモデルとNLPコーパスのデータリポジトリです。

事前学習規模のコーパス（オープン）：

- [The Pile](https://pile.eleuther.ai/) - 多様なテキストを集めた825 GiBのコーパスです。
- [RedPajama / RedPajama-V2](https://github.com/togethercomputer/RedPajama-Data) (2023-2024) - LLaMA事前学習データの再現版です。V2は品質指標付きの30兆トークンです。
- [Dolma](https://github.com/allenai/dolma) (AI2, 2023-2024) - フィルタリング手順が公開された、3兆トークンのオープン事前学習コーパスです。
- [FineWeb / FineWeb-Edu](https://huggingface.co/datasets/HuggingFaceFW/fineweb) (2024) - 15兆トークンのクリーニング済みWebコーパスです。FineWeb-Eduは教育的品質で絞り込んでいます。
- [CulturaX](https://huggingface.co/datasets/uonlp/CulturaX) - 167言語にまたがる6.3兆トークンです。
- [Common Corpus](https://huggingface.co/datasets/PleIAs/common_corpus) (2024) - オープンライセンスの多言語コーパスで、2兆トークンを収録します。

タスク・指示データセット：

- [Universal Dependencies](https://universaldependencies.org/) - 100以上の言語に対応する、言語間で一貫性のあるツリーバンク注釈です。
- [Tülu 3 SFT Mixture](https://huggingface.co/datasets/allenai/tulu-3-sft-mixture) (2024) - Tülu 3を支えるオープンな指示チューニング用データです。
- [tiny_qa_benchmark_pp](https://github.com/vincentkoc/tiny_qa_benchmark_pp/) - 小規模な多言語NLP質問応答データセットと、合成データを独自に生成するライブラリです。

## 多言語NLPフレームワーク

[トップへ戻る](#contents)

- [UDPipe](https://github.com/ufal/udpipe) - Universal TreebanksなどのCoNLL-Uファイルを対象に、トークン化、タグ付け、レンマ化、構文解析を行う学習可能なパイプラインです。主にC++で書かれ、多言語NLP処理のための高速で信頼性の高いソリューションを提供します。
- [NLP-Cube](https://github.com/adobe/NLP-Cube) - 文分割、トークン化、レンマ化、品詞タグ付け、依存構造解析を行う自然言語処理パイプラインです。Dynet 2.0を用いてPythonで書かれた新しいプラットフォームで、単体利用（CLI/Pythonバインディング）とサーバー機能（REST API）を備えます。
- [UralicNLP](https://github.com/mikahama/uralicNLP) - サーミ諸語、モルドヴィン諸語、マリ語、コミ語など、多くの危機ウラル語族を主な対象とするNLPライブラリです。フィンランド語などの非危機言語や、スウェーデン語・アラビア語などの非ウラル語族にも対応します。形態素解析、語形生成、レンマ化、曖昧性解消を行えます。

## NLP向け言語モデル

[トップへ戻る](#contents)

NLPタスクと言語現象に対象を絞り、事前学習済み言語モデルとその研究をまとめています。汎用LLMツール、エージェント、RAGアプリケーションキットについては[関連項目](#see-also)をご覧ください。

### 事前学習と適応

エンコーダー（従来型NLPタスクで今も主力）：

- [BERT](https://arxiv.org/abs/1810.04805) - 双方向Transformer事前学習で、2018年以降のエンコーダーベースNLPの多くの基礎となりました。[オンライン版を読む](https://webeditions.page/works/bert-pre-training/)と、節のナビゲーションやACL原文を利用できます。
- [RoBERTa](https://arxiv.org/abs/1907.11692) - BERTの堅牢な最適化事前学習で、一般的なエンコーダーベースラインです。
- [DeBERTa / DeBERTa-v3](https://arxiv.org/abs/2111.09543) - 分離注意機構を採用し、分類、NER、NLIで高い性能を示します。
- [ELECTRA](https://arxiv.org/abs/2003.10555) - サンプル効率の高い置換トークン検出事前学習です。
- [ModernBERT](https://arxiv.org/abs/2412.13663) (2024) - Rotary埋め込み、FlashAttention、8Kコンテキストを備えた現代的なエンコーダーで、分類、NER、検索における現在の第一選択です。
- [NeoBERT](https://arxiv.org/abs/2502.19587) (2025) - RoPE、4Kコンテキスト、最適化された深さと幅など、最新の構造改良を組み込んだ2.5億パラメーターのエンコーダーです。同一条件の微調整でMTEBの最先端を達成し、ModernBERTとRoBERTa-largeを上回ります。

エンコーダー・デコーダーとseq2seq：

- [T5](https://arxiv.org/abs/1910.10683)と[FLAN-T5](https://arxiv.org/abs/2210.11416) - NLPタスクをテキストからテキストへの変換として扱います。指示チューニング済みエンコーダー・デコーダーの強力なベースラインです。
- [BART](https://arxiv.org/abs/1910.13461) - ノイズ除去seq2seq事前学習で、要約や生成に広く利用されます。

オープンなデコーダー専用LLM（NLPタスクの基盤として利用）：

- [Llama 3 / 3.1 / 3.3](https://arxiv.org/abs/2407.21783) (Meta, 2024-2025) - 広く採用されるオープンウェイトモデル群で、さまざまなNLPタスクの微調整における標準的な基盤です。
- [Qwen 2.5 / Qwen 3](https://qwenlm.github.io/) (Alibaba, 2024-2025) - 特に中国語に強い多言語対応で、多言語ベンチマークのオープンモデル上位に入ることが多いモデル群です。
- [DeepSeek-V3](https://arxiv.org/abs/2412.19437) (2024) - 効率的なMoE事前学習を行った、競争力のあるオープン基盤モデルです。
- [OLMo 2](https://arxiv.org/abs/2501.00656) (AI2, 2025) - 重み、学習データ、コードを完全公開した、再現性のベンチマークとなるモデルです。
- [Gemma 2 / Gemma 3](https://arxiv.org/abs/2408.00118) (Google, 2024-2025) - NLPタスクで高い性能を示す、オープンな小型・中型モデルです。
- [Mistral / Mixtral](https://arxiv.org/abs/2401.04088) - 効率的な密モデルと疎MoEのオープンモデルです。
- [What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?](https://arxiv.org/abs/2204.05832) - NLP転移に適したエンコーダー、デコーダー、エンコーダー・デコーダー構造を比較します。

### 多言語・言語間モデル

- [XLM-R](https://arxiv.org/abs/1911.02116) - CommonCrawlで学習した100言語対応の言語横断マスク言語モデルです。
- [mT5](https://arxiv.org/abs/2010.11934) - 101言語を扱う多言語T5です。
- [BLOOM](https://arxiv.org/abs/2211.05100) - 1760億パラメーター、46自然言語対応のオープン多言語言語モデルです。
- [Aya 23 / Aya Expanse](https://arxiv.org/abs/2412.04261) (Cohere For AI, 2024) - 23～101言語を扱う大規模多言語指示チューニング済みモデルです。
- [Glot500](https://arxiv.org/abs/2305.12182) - 低リソース言語を重視する500以上の言語向けエンコーダーです。
- [NLLB-200](https://arxiv.org/abs/2207.04672) - No Language Left Behind。200言語に対応する機械翻訳です。
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - 400以上の言語に対応する機械翻訳モデルと、3兆トークンの多言語コーパスです。
- [SeamlessM4T / Seamless](https://arxiv.org/abs/2312.05187) (Meta, 2023-2024) - 100以上の言語に対応する多言語・マルチモーダル音声テキスト翻訳です。
- [SEA-LION / SeaLLM](https://arxiv.org/abs/2312.00738) (2024-2025) - 東南アジア諸言語を対象とする言語モデルです。
- [Babel](https://arxiv.org/abs/2503.00865) (2025) - 話者数上位25言語（世界の話者の約90%）を扱うオープン多言語LLM（9B、83B）です。XCOPA、XNLI、MGSM、FLORES-200で同規模のオープン多言語モデルを上回ります。
- [Lugha-Llama](https://arxiv.org/abs/2504.06536) (Princeton/Mila, 2025) - 厳選したWURAコーパスでLlama-3.1-8Bを低リソースのアフリカ諸語向けに適応させています。IrokoBenchとAfriQAでオープンソースの最先端結果を示します。
- [AfriqueLLM](https://arxiv.org/abs/2601.06395) (McGill, 2026) - 20のアフリカ諸語の260億トークンで継続事前学習したオープンLLM群（4B～14B）で、データ混合に関する包括的な実証研究も行っています。
- [TranslateGemma](https://arxiv.org/abs/2601.09012) (Google, 2026) - Gemma 3を基盤とするオープン翻訳特化モデルです。品質報酬モデルを用いたSFTとRLにより55の言語ペアを扱います。
- [MiLMMT-46](https://arxiv.org/abs/2602.11961) (Xiaomi, 2026) - 46言語に拡張されたオープン多言語機械翻訳で、Google TranslateやGemini 3 Proなどの商用システムに匹敵します。

### 評価とベンチマーク

NLUと言語横断評価：

- [GLUE](https://gluebenchmark.com/)と[SuperGLUE](https://super.gluebenchmark.com/) - 英語NLUのベンチマークです。
- [XTREME](https://sites.research.google/xtreme)と[XGLUE](https://microsoft.github.io/XGLUE/) - 言語横断NLUを評価します。
- [XNLI](https://github.com/facebookresearch/XNLI) - 15言語の言語横断自然言語推論です。
- [FLORES-200](https://github.com/facebookresearch/flores) - 200言語にわたる機械翻訳評価です。
- [MTEB](https://github.com/embeddings-benchmark/mteb) - Massive Text Embedding Benchmark。文・文書エンコーダーの標準ベンチマークです。
- [BEIR](https://github.com/beir-cellar/beir) - 検索モデル向けの異種情報検索ベンチマークです。

現代の言語モデル評価（2023～2026）：

- [HELM](https://crfm.stanford.edu/helm/) - NLPタスク全般の精度などを総合的に評価します。
- [BIG-bench](https://github.com/google/BIG-bench) - 言語モデルの能力を調べる200以上のタスクです。
- [MMLU](https://github.com/hendrycks/test) - 57分野にわたる多タスク知識評価です。
- [MMLU-Pro](https://arxiv.org/abs/2406.01574) (2024) - MMLUを発展させた、より難しく識別力の高いベンチマークです。
- [GPQA](https://arxiv.org/abs/2311.12022) - 大学院レベルの質疑応答による、「Google検索では解けない」推論評価です。
- [REFUTE](https://huggingface.co/datasets/BGPT-OFFICIAL/refute) (2026) - 根拠に基づく批評、過剰な主張の検出、証拠不足時の回答拒否、キャリブレーションを評価する科学的推論ベンチマークです。
- [IFEval](https://arxiv.org/abs/2311.07911) - 検証可能な指示追従評価です。
- [Chatbot Arena (LMSYS)](https://lmarena.ai/) - 人間の選好に基づくチャットモデルのELOリーダーボードです。
- [LiveBench](https://livebench.ai/) (2024) - データ汚染に強く、毎月更新されるベンチマークです。
- [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) - 言語モデルのベンチマーク評価を統一するフレームワークです。
- [MMLU-ProX](https://arxiv.org/abs/2503.10497) (2025) - 類型論的に多様な29言語にMMLU-Proを拡張した多言語版です。高リソース言語と低リソース言語の間に最大24.3%の性能差があることを明らかにします。
- [MultiChallenge](https://arxiv.org/abs/2501.17399) (2025) - 指示追従と文脈内推論の両方で同時に生じる失敗を明らかにする複数ターン対話ベンチマークです。評価対象の最先端モデルはすべて50%未満です。
- [FRAMES](https://arxiv.org/abs/2409.12941) (2025) - 事実性、検索精度、文書横断推論を同時に求める824件の複数段階質問からなる、統合RAG評価です。

長文脈評価：

- [Needle in a Haystack](https://github.com/gkamradt/LLMTest_NeedleInAHaystack) - 長文脈ウィンドウ向けの検索プローブです。
- [RULER](https://arxiv.org/abs/2404.06654) (2024) - 単純な検索を超える合成長文脈タスクです。
- [LongBench](https://github.com/THUDM/LongBench) - NLPタスク全般を対象とする二言語の長文脈ベンチマークです。
- [LongBench v2](https://arxiv.org/abs/2412.15204) (2025) - 8千～200万語の文脈を扱う、専門家が作成した503件の選択式問題です。深い複数段階推論を要し、時間制限下の人間の正答率は53.7%です。
- [U-NIAH](https://arxiv.org/abs/2503.00353) (2025) - 複数の針や入れ子構造を加えてneedle-in-a-haystackを拡張します。RAGは小型LLMの中間情報喪失を緩和しますが、推論モデルの性能を損なうことを示します。

### 推論とテスト時計算

2024～2026年に注目を集める方向性で、明示的な推論トレースを生成し、推論時の計算量を増やすことで性能が向上するモデルを扱います。

- [Chain-of-Thought Prompting](https://arxiv.org/abs/2201.11903) - 中間推論ステップが性能を高めることを示した基礎的な成果です。
- [Self-Consistency](https://arxiv.org/abs/2203.11171) - サンプリングしたCoT系列の多数決を取ります。
- [Tree of Thoughts](https://arxiv.org/abs/2305.10601) - 推論木を探索します。
- [Self-Refine](https://arxiv.org/abs/2303.17651)と[Reflexion](https://arxiv.org/abs/2303.11366) - 推論時に自己修正を行います。
- [Large Language Models are Zero-Shot Reasoners](https://arxiv.org/abs/2205.11916) - NLP推論タスクにおけるChain-of-Thoughtです。
- [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) - 推論向けのプロセス教師あり報酬モデルです。
- [DeepSeek-R1](https://arxiv.org/abs/2501.12948) (2025) - 純粋なRLで学習したオープン推論モデルで、o1型の動作をオープン環境で再現しました。
- [OpenAI o1 / o3](https://openai.com/index/learning-to-reason-with-llms/) (2024-2025) - テスト時計算を用いる推論システムです。
- [Scaling LLM Test-Time Compute Optimally](https://arxiv.org/abs/2408.03314) (2024) - 推論時の計算量と性能のトレードオフを体系的に調査します。
- [s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393) (2025) - budget-forcingによる小型オープン推論モデルのレシピです。
- [Kimi k1.5](https://arxiv.org/abs/2501.12599) (2025) - MCTSやPRMを使わず、方策最適化による長文脈RLでo1級の性能を達成します。長いCoTを短いCoTモデルに蒸留する手法も導入します。
- [rStar-Math](https://arxiv.org/abs/2501.04519) (2025) - MCTSロールアウトで学習したプロセス選好モデルと小型方策モデルを組み合わせます。大規模モデルから蒸留せずに小型言語モデルの推論能力を高めます。
- [DAPO](https://arxiv.org/abs/2503.14476) (2025) - クリッピングの分離、動的サンプリング、トークン単位の損失、エントロピー報酬という4つの改良を加えた、オープンなGRPOベースRL学習システムです。DeepSeek-R1-Zero級の推論を再現し、それを上回ります。
- [VAPO](https://arxiv.org/abs/2504.05118) (2025) - 長さ適応型GAEとトークン単位クリッピングを備えた価値モデルベースRLです。安定した学習でAIME 2024において価値モデルなしのGRPO手法を上回ります。
- [ThinkPRM](https://arxiv.org/abs/2504.16828) (2025) - 各ステップのCoT検証を生成するプロセス報酬モデルです。教師ラベルを1%しか使わずに識別型PRMに匹敵します。
- [OpenThoughts](https://arxiv.org/abs/2506.04178) (2025) - オープン推論モデルのデータ設計に関する1000以上の統制実験です。AIME 2025で最先端を達成し、非公開モデルからの蒸留ベースラインに匹敵します。

### 長文脈と代替アーキテクチャ

- [Mamba](https://arxiv.org/abs/2312.00752)と[Mamba-2](https://arxiv.org/abs/2405.21060) - 選択的状態空間モデルで、注意機構に代わる線形時間の長文脈処理を実現します。
- [RWKV](https://arxiv.org/abs/2305.13048) - 大規模なパラメーター数へ拡張できるRNNとTransformerのハイブリッドです。
- [Jamba](https://arxiv.org/abs/2403.19887) (2024) - Mamba、Transformer、MoEを組み合わせたハイブリッドアーキテクチャです。
- [RoPE](https://arxiv.org/abs/2104.09864)と[YaRN](https://arxiv.org/abs/2309.00071) - 回転位置埋め込みとコンテキスト長の拡張手法です。
- [Position Interpolation](https://arxiv.org/abs/2306.15595) - 最小限の微調整でコンテキストウィンドウを拡張します。
- [Lost in the Middle](https://arxiv.org/abs/2307.03172) - NLPタスクにおける長文脈処理の性能低下パターンを示します。
- [RAG vs Long-Context LLMs](https://arxiv.org/abs/2407.16833) (2024) - 長文入力に対する質問応答で両方式のトレードオフを検討します。
- [Titans: Learning to Memorize at Test Time](https://arxiv.org/abs/2501.00663) (2025) - テスト時に過去の文脈を記憶するよう学習するニューラル長期記憶モジュールです。200万トークンを超える規模に対応し、言語モデリングと推論でTransformerや最新の線形リカレントモデルを上回ります。
- [MiniMax-01](https://arxiv.org/abs/2501.08313) (2025) - Lightning（線形）注意と疎なsoftmax注意を組み合わせた4560億パラメーターのハイブリッドです。最大400万トークンの推論コンテキストでGPT-4o級のNLP性能を実現します。
- [Native Sparse Attention (NSA)](https://arxiv.org/abs/2502.11089) (2025) - 粗粒度の圧縮と細粒度の選択を組み合わせた学習可能な疎注意機構です。NLPベンチマークの性能を損なわず、64Kで大幅な高速化を実現します。
- [LongRoPE2](https://arxiv.org/abs/2502.20082) (2025) - 高周波RoPE次元の学習不足を特定し、進化的探索による再スケーリングを適用します。Metaのレシピより学習トークン数を80分の1に抑えつつ、LLaMA3-8Bを128Kまで拡張します。
- [Characterizing SSM and Hybrid LM Long-Context Performance](https://arxiv.org/abs/2507.12442) (2025) - 22万トークンまでのTransformer、SSM、ハイブリッドモデルについて、メモリーと速度を初めて包括的に分析します。SSMは最大4倍高速で、ハイブリッドは想起性能と効率のバランスを取ります。

### 事実性、幻覚、キャリブレーション

- [Survey of Hallucination in Natural Language Generation](https://arxiv.org/abs/2202.03629) - 幻覚の分類体系と軽減策をまとめたサーベイです。
- [TruthfulQA](https://github.com/sylinrl/TruthfulQA) - 質問応答の真実性を評価するベンチマークです。
- [FActScore](https://github.com/shmsw25/FActScore) - 長文生成における細粒度の事実精度を測定します。
- [LongFact / SAFE](https://arxiv.org/abs/2403.18802) (2024) - 長文の事実性ベンチマークと、検索拡張型評価器です。
- [SelfCheckGPT](https://github.com/potsawee/selfcheckgpt) - サンプリングに基づく幻覚検出です。
- [RAGAS](https://github.com/explodinggradients/ragas) - RAGおよび質問応答パイプライン向けの参照データ不要の評価です。
- [Lookback Lens](https://arxiv.org/abs/2407.07071) (2024) - 長文脈生成における注意パターンに基づく幻覚検出です。
- [Calibration of LLMs on Multiple Choice](https://arxiv.org/abs/2402.13887) (2024) - 出力形式の影響を踏まえてキャリブレーションを分析します。
- [HalluLens](https://arxiv.org/abs/2504.17550) (2025) - 外的・内的幻覚の分類体系と、データ漏洩を防ぐ動的なテストセット再生成を備えたベンチマークです。
- [Atomic Calibration](https://arxiv.org/abs/2410.13246) (2025) - 長文生成における主張単位のキャリブレーション分析です。モデルは単一の主張より長い出力で大幅にキャリブレーションが悪化します。
- [FRANQ](https://arxiv.org/abs/2505.21072) (2025) - RAGの事実確認向けに忠実性を考慮する不確実性定量化です。忠実性と事実性を形式的に分離します。
- [MUCH](https://arxiv.org/abs/2511.17081) (2025) - 英語、フランス語、スペイン語、ドイツ語を対象とする多言語の主張・幻覚ベンチマークです。原理に基づく不確実性定量化評価用にトークン単位のロジットを公開しています。
- [HalluHard](https://arxiv.org/abs/2602.01031) (2026) - 引用を要する回答を対象とした難度の高い複数ターン幻覚ベンチマークです。Web検索を使っても約30%の幻覚率が残ります。
- [CURE: Think Through Uncertainty](https://arxiv.org/abs/2604.12046) (2026) - 生成前に主張ごとの不確実性について推論するようモデルを学習させます。人物紹介の事実性とFactBench AUROCで大幅な改善を示します。

### プロービングと解釈可能性

- [A Primer in BERTology](https://arxiv.org/abs/2002.12327) - BERTが言語について何を学習するかを解説します。
- [Probing Classifiers (Belinkov)](https://arxiv.org/abs/2102.12452) - 手法、限界、代替案を扱います。
- [Locating and Editing Factual Associations in GPT (ROME)](https://rome.baulab.info/) - 事実想起の因果追跡です。
- [The Pyramid of NLP Probes](https://arxiv.org/abs/2104.07885) - 言語知識を構造的に調べるプロービングです。
- [Toy Models of Superposition](https://transformer-circuits.pub/2022/toy_model/) - Transformer表現を疎特徴として捉える見方の基礎です。
- [Towards Monosemanticity / Scaling Monosemanticity](https://transformer-circuits.pub/2024/scaling-monosemanticity/) (Anthropic, 2024) - スパースオートエンコーダーを使い、本番規模の言語モデルから解釈可能な特徴を抽出します。
- [Sparse Autoencoders Find Highly Interpretable Features](https://arxiv.org/abs/2309.08600) - 言語モデル解釈のためのSAE手法です。
- [Neuronpedia](https://www.neuronpedia.org/) - 複数モデルのSAE特徴を閲覧できるオープンプラットフォームです。
- [Influence Functions Scale to LLMs](https://arxiv.org/abs/2308.03296) (2023) - モデルの挙動を左右する学習例を特定します。
- [Circuit Tracing: Revealing Computational Graphs in Language Models](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) (Anthropic, 2025) - 層をまたぐトランスコーダーと帰属グラフを導入し、解釈可能な代替モデルを構築します。プロンプト単位で特徴間の因果相互作用を回路追跡できます。
- [On the Biology of a Large Language Model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) (Anthropic, 2025) - Claude 3.5 Haikuの複数段階推論、韻の計画、ジェイルブレイク事例に帰属グラフを適用します。
- [Transcoders Beat Sparse Autoencoders for Interpretability](https://arxiv.org/abs/2501.18823) (2025) - 入力から層の出力を再構築するトランスコーダーはSAEより解釈しやすい特徴を得ることを示し、スキップトランスコーダーを導入します。
- [Survey on Sparse Autoencoders for LLM Interpretability](https://arxiv.org/abs/2503.05613) (EMNLP 2025) - SAEアーキテクチャ、学習戦略、特徴説明、評価に関する基準的なサーベイです。
- [Finding Highly Interpretable Prompt-Specific Circuits](https://arxiv.org/abs/2602.13483) (2026) - タスク単位ではなくプロンプト単位で回路を特定し、プロンプト群ごとのメカニズムのクラスタリングを明らかにします。

### 効率的な小型言語モデル

蒸留と小型モデル：

- [DistilBERT](https://arxiv.org/abs/1910.01108)と[MiniLM](https://arxiv.org/abs/2002.10957) - 本番NLP向けに蒸留されたエンコーダーです。
- [Phi-3 / Phi-4](https://arxiv.org/abs/2412.08905) (Microsoft, 2024) - 厳選データで学習した小型モデルで、NLPベンチマークではるかに大きなモデルに匹敵します。
- [SmolLM2](https://arxiv.org/abs/2502.02737) (HuggingFace, 2025) - 再現可能な学習データを備えた、完全オープンな小型言語モデル群です。
- [SmolLM3](https://huggingface.co/blog/smollm3) (HuggingFace, 2025) - 11.2兆トークンで事前学習した30億パラメーターの完全オープンデコーダーです。NoPEとYaRNで128Kコンテキストに対応し、40億クラスのモデルに匹敵します。
- [Gemma 3 Technical Report](https://arxiv.org/abs/2503.19786) (Google, 2025) - 128KコンテキストでKVキャッシュを扱いやすくする高い局所・大域注意比率を備えた、10億～270億パラメーターのオープンモデルです。
- [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) (Alibaba, 2025) - 0.6B～235Bの密モデルとMoEモデルを統合された思考・非思考モードで提供します。30B-A3BのMoEは、30億パラメーターのみを有効化しながら、より大きな密モデルに匹敵します。
- [Apple Intelligence Foundation Language Models](https://arxiv.org/abs/2507.13575) (Apple, 2025) - KVキャッシュ共有と2ビットQATを使うオンデバイス30億モデルで、精度を損なわずキャッシュメモリーを37.5%削減します。
- [Sentence-Transformers](https://www.sbert.net/) - Siamese BERTによる文・段落埋め込みです。
- [SetFit](https://github.com/huggingface/setfit) - プロンプトを使わない少数ショットテキスト分類です。
- [FastFit](https://github.com/IBM/fastfit) - 多クラス設定向けの高速な少数ショット分類です。
- [GTE](https://huggingface.co/thenlper/gte-base)、[BGE](https://github.com/FlagOpen/FlagEmbedding)、[Stella](https://huggingface.co/dunzhang/stella_en_1.5B_v5) - MTEB上位に位置する小型テキスト埋め込みモデルです。

量子化とサービング（NLPモデルを大規模に展開する際に有用）：

- [GPTQ](https://arxiv.org/abs/2210.17323) - Transformer向けの学習後量子化です。
- [AWQ](https://arxiv.org/abs/2306.00978) - 活性化を考慮する重み量子化です。
- [KVTuner](https://arxiv.org/abs/2502.04420) (ICML 2025) - 感度を考慮した層ごとの混合精度KVキャッシュ量子化です。一律のKV8に比べ、スループットを最大21%改善します。
- [GGUF / llama.cpp](https://github.com/ggerganov/llama.cpp) - 移植性の高い量子化推論です。
- [vLLM](https://github.com/vllm-project/vllm) - PagedAttentionベースの高スループットな言語モデルサービングです。
- [SGLang](https://github.com/sgl-project/sglang) - 構造化生成と効率的なサービングを提供します。
- [Text Generation Inference (TGI)](https://github.com/huggingface/text-generation-inference) - Hugging Faceによる本番向け言語モデルサービングです。

パラメーター効率のよい微調整：

- [LoRA](https://arxiv.org/abs/2106.09685)と[QLoRA](https://arxiv.org/abs/2305.14314) - 低ランクアダプターと量子化微調整です。限られたハードウェアで言語モデルをNLPタスクに適応させる標準手法です。
- [DoRA](https://arxiv.org/abs/2402.09353) (2024) - 重み分解型の低ランク適応です。
- [PEFT](https://github.com/huggingface/peft) - LoRA、prefix tuning、IA3などをまとめたHugging Faceライブラリです。

### 指示チューニングと選好最適化

- [FLAN](https://arxiv.org/abs/2109.01652) - ゼロショット学習器としての微調整済み言語モデルです。
- [InstructGPT](https://arxiv.org/abs/2203.02155) - 人間のフィードバックを用いて指示に従うよう言語モデルを学習させます。
- [Self-Instruct](https://github.com/yizhongw/self-instruct) - 言語モデルから指示データをブートストラップ生成します。
- [Super-NaturalInstructions](https://github.com/allenai/natural-instructions) - 指示付きの1600以上のNLPタスクを収録します。
- [Constitutional AI](https://arxiv.org/abs/2212.08073) - 明文化した原則に照らしてAIが生成するフィードバックを使い、言語モデルを学習させます。
- [Direct Preference Optimization](https://arxiv.org/abs/2305.18290) - RLHFのよりシンプルな代替手法で、広く採用されています。
- [Tülu 3](https://arxiv.org/abs/2411.15124) (AI2, 2024) - オープンモデルの最先端結果を達成した、完全オープンな事後学習レシピです。
- [LIMA](https://arxiv.org/abs/2305.11206) - 「アラインメントでは少ない方がよい」を示し、少量の高品質なSFTデータで大きな効果を得ます。
- [TRL](https://github.com/huggingface/trl) - SFT、DPO、GRPO、RLHFの標準ライブラリです。
- [Magpie](https://arxiv.org/abs/2406.08464) (2024-2025) - アラインメント済み言語モデルに何も与えずプロンプトを生成させ、高品質な指示・応答ペアを合成します。フィルタリングしたデータでのSFTは公式Llama-3-Instructに匹敵します。

### NLPにおけるバイアス、公平性、安全性

- [StereoSet](https://github.com/moinnadeem/StereoSet) - 事前学習済み言語モデルのステレオタイプバイアスを測定します。
- [CrowS-Pairs](https://github.com/nyu-mll/crows-pairs) - マスク言語モデルの社会的バイアスを測定します。
- [WinoBias](https://github.com/uclanlp/corefBias) - 照応解析におけるジェンダーバイアスです。
- [HolisticBias](https://github.com/facebookresearch/ResponsibleNLP) - 多様な人口統計的観点からバイアスを測定します。
- [RealToxicityPrompts](https://github.com/allenai/real-toxicity-prompts) - 言語モデル生成における有害性を扱います。
- [Sycophancy in Language Models](https://arxiv.org/abs/2310.13548) - ユーザーの信念に合わせて回答を変えるモデルの傾向を検証します。
- [Alignment Faking in Large Language Models](https://arxiv.org/abs/2412.14093) (Anthropic, 2024) - 学習中にモデルが戦略的に指示へ従う現象を扱います。
- [WildGuard](https://arxiv.org/abs/2406.18495) (2024) - オープンな安全性モデレーションモデルとベンチマークです。
- [Emergent Misalignment](https://arxiv.org/abs/2502.17424) (2025) - 安全でないコードなど限定タスクでの微調整が、無関係な分野にも広範なアラインメント不全を予想外に引き起こします。
- [SafeDialBench](https://arxiv.org/abs/2502.11090) (2025) - 22のシナリオと7つのジェイルブレイク戦略にまたがる4000以上の複数ターン対話を収録した、中国語・英語の多言語安全性ベンチマークです。
- [TeleAI-Safety](https://arxiv.org/abs/2512.05485) (2025) - 14モデル、12リスク分類を対象に、19攻撃、29防御、19評価手法を統合するモジュール式ジェイルブレイク評価フレームワークです。
- [IndicSafe](https://arxiv.org/abs/2603.17915) (2026) - 12のインド諸語を対象とする多言語安全性ベンチマークです。言語間の一致率が12.8%であることや、低リソース文字体系で過剰拒否が起こることを示します。
- [VLAF: Value-Conflict Alignment Faking](https://arxiv.org/abs/2604.20995) (2026) - 方針が内在化した価値観と衝突する場合、わずか70億パラメーターのモデルでも37%の事例でアラインメント偽装が起こります。ステアリングベクトルによる軽減で94%削減できます。

## 言語別NLP

[トップへ戻る](#contents)

人間の言語ごとにリソースをまとめています。セクションをクリックすると展開します。

<details>
<summary>

### アラビア語NLP

</summary>

[トップへ戻る](#contents)

### ライブラリ

- [CAMeL Tools](https://github.com/CAMeL-Lab/camel_tools) - 方言判定、形態論、NERなどに対応するアラビア語NLP向けPythonツールキットです。
- [goarabic](https://github.com/01walid/goarabic) - アラビア語テキスト処理用のGoパッケージです。
- [jsastem](https://github.com/ejtaal/jsastem) - JavaScript製アラビア語語幹抽出器です。
- [PyArabic](https://pypi.org/project/PyArabic/) - アラビア語向けPythonライブラリです。
- [RFTokenizer](https://github.com/amir-zeldes/RFTokenizer) - アラビア語、ヘブライ語、コプト語向けの学習可能な分割器です。
- [Farasa](https://farasa.qcri.org/) - QCRIによるアラビア語の分割、品詞タグ付け、NERです。

### モデルと埋め込み

- [AraBERT](https://github.com/aub-mind/arabert) - アラビア語BERTモデル群です。
- [CAMeLBERT](https://github.com/CAMeL-Lab/CAMeLBERT) - 現代標準アラビア語、方言、古典アラビア語向けのBERTモデルです。
- [AraELECTRA](https://aclanthology.org/2021.wanlp-1.20/) - 効率的なアラビア語事前学習モデルで、[AraBERT](https://github.com/aub-mind/arabert)と同時に公開されました。
- [Jais](https://huggingface.co/inceptionai/jais-13b) (2023-2024) - アラビア語・英語の二言語オープン言語モデル群です。
- [ALLaM](https://arxiv.org/abs/2407.15390) (SDAIA, 2024) - アラビア語を主軸とする基盤モデルです。

### データセット

- [Multidomain Datasets](https://github.com/hadyelsahar/large-arabic-sentiment-analysis-resouces) - 入手可能な最大規模の多分野アラビア語感情分析リソースです。
- [LABR](https://github.com/mohamedadaly/labr) - 大規模なアラビア語書評データセットです。
- [Arabic Stopwords](https://github.com/mohataher/arabic-stop-words) - アラビア語ストップワードの集約リストです。
- [ArabicMMLU](https://huggingface.co/datasets/MBZUAI/ArabicMMLU) (2024) - アラビア語MMLUベンチマークです。

</details>

<details>
<summary>

### 中国語NLP

</summary>

[トップへ戻る](#contents)

### ライブラリ

- [jieba](https://github.com/fxsjy/jieba#jieba-1) - 中国語単語分割用Pythonパッケージです。
- [SnowNLP](https://github.com/isnowfy/snownlp) - 中国語NLP用Pythonパッケージです。
- [FudanNLP](https://github.com/FudanNLP/fnlp) - 中国語テキスト処理用Javaライブラリです。
- [HanLP](https://github.com/hankcs/HanLP) - 中国語に強い多言語NLPライブラリです。
- [LTP](https://github.com/HIT-SCIR/ltp) - HIT Language Technology Platform。分割、POS、NER、構文解析に対応します。

### モデルと埋め込み

- [Chinese-BERT-wwm](https://github.com/ymcui/Chinese-BERT-wwm) - 中国語向けの単語全体マスキングBERTです。
- [MacBERT](https://github.com/ymcui/MacBERT) - MLMを訂正として扱う事前学習で改良した中国語BERTです。
- [Qwen 2.5 / Qwen 3](https://github.com/QwenLM/Qwen3) - 中国語に強いAlibabaのオープン言語モデル群です。
- [ChatGLM3 / GLM-4](https://github.com/THUDM/ChatGLM3) - 清華大学による中国語・英語の二言語言語モデルです。
- [Baichuan 2](https://github.com/baichuan-inc/Baichuan2) - オープンな中国語言語モデルです。
- [Yi](https://github.com/01-ai/Yi) - 01.AIによる二言語オープン言語モデルです。
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - 中国語に強い効率的なオープンMoEモデルです。

### 論文集

- [funNLP](https://github.com/fighting41love/funNLP) - 中国語NLPツールとリソースの大規模なコレクションです。

</details>

<details>
<summary>

### デンマーク語NLP

</summary>

[トップへ戻る](#contents)

- [Named Entity Recognition for Danish](https://github.com/ITUnlp/daner)
- [DaNLP](https://github.com/alexandrainst/danlp) - デンマーク語NLPリソースです。
- [Awesome Danish](https://github.com/fnielsen/awesome-danish) - デンマーク語言語技術リソースの厳選リストです。

</details>

<details>
<summary>

### オランダ語NLP

</summary>

[トップへ戻る](#contents)

- [python-frog](https://github.com/proycon/python-frog) - オランダ語NLPスイートFrog（POSタグ付け、レンマ化、依存構造解析、NER）のPythonバインディングです。
- [SimpleNLG_NL](https://github.com/rfdj/SimpleNLG-NL) - SimpleNLG実装を基にした、自然言語生成用オランダ語表層実現器です。
- [Alpino](https://github.com/rug-compling/alpino) - オランダ語の依存構造解析器で、POSタグ付けとレンマ化にも対応します。
- [Kaldi NL](https://github.com/opensource-spraakherkenning-nl/Kaldi_NL) - [Kaldi](http://kaldi-asr.org/)を基盤とするオランダ語音声認識モデルです。
- [spaCy Dutch model](https://spacy.io/models/nl) - オランダ語パイプラインを備えた産業用途のNLPです。

</details>

<details>
<summary>

### ドイツ語NLP

</summary>

[トップへ戻る](#contents)

- [German-NLP](https://github.com/adbar/German-NLP) - ドイツ語に特化した、オープンアクセス、オープンソース、既製のリソースとツールの厳選リストです。

</details>

<details>
<summary>

### ハンガリー語NLP

</summary>

[トップへ戻る](#contents)

- [awesome-hungarian-nlp](https://github.com/oroszgy/awesome-hungarian-nlp) - ハンガリー語NLP向け無料リソースの厳選リストです。

</details>

<details>
<summary>

### インド諸語NLP

</summary>

[トップへ戻る](#contents)

### データ、コーパス、ツリーバンク

- [Hindi Dependency Treebank](https://ltrc.iiit.ac.in/treebank_H2014/) - ヒンディー語とウルドゥー語を多様な表現で多層的に注釈したツリーバンクです。
- [Universal Dependencies Treebank in Hindi](https://universaldependencies.org/treebanks/hi_hdtb/index.html)
  - [Parallel Universal Dependencies Treebank in Hindi](http://universaldependencies.org/treebanks/hi_pud/index.html) - 上記ツリーバンクの小規模な一部です。
- [ISI FIRE Stopwords List (Hindi and Bangla)](https://www.isical.ac.in/~fire/data/)
- [Peter Graham's Stopwords List](https://github.com/6/stopwords-json)
- [NLTK Corpus](https://www.nltk.org/book/ch02.html) - ベンガル語、ヒンディー語、マラーティー語、テルグ語の6万語に品詞タグを付与しています。
- [Hindi Movie Reviews Dataset](https://github.com/goru001/nlp-for-hindi) - 約1000件のサンプルと3つの極性クラスです。
- [BBC News Hindi Dataset](https://github.com/NirantK/hindi2vec/releases/tag/bbc-hindi-v0.1) - 4300件のサンプルと14クラスです。
- [IIT Patna Hindi ABSA Dataset](https://github.com/pnisarg/ABSA) - 12分野、5400件のサンプル、4000件のアスペクト語を収録し、アスペクト単位・文単位の極性を4クラスに分類します。
- [Bangla ABSA](https://github.com/AtikRahman/Bangla_Datasets_ABSA) - 2分野、5500件のサンプル、10件のアスペクト語です。
- [IIT Patna Movie Review Sentiment Dataset](https://www.iitp.ac.in/~ai-nlp-ml/resources.html) - 2000件のサンプルと3種類の極性ラベルです。

#### ログイン／アクセスが必要なコーパスやデータセットはメールで申請できます

- [SAIL 2015](http://amitavadas.com/SAIL/) - ヒンディー語、ベンガル語、タミル語、テルグ語のTwitter・Facebook投稿に感情ラベルを付けたサンプルです。
- [IIT Bombay CFILT Resources](https://www.cfilt.iitb.ac.in/) - Sentiwordnet、ラベル付き対訳コーパス、語義注釈付きコーパス、極性ラベル付きマラーティー語コーパスです。
- [TDIL-ICは多数の有用なリソースを集約し、通常はアクセス制限のあるデータセットを利用できるようにしています](https://tdil-dc.in/index.php?option=com_catalogue&task=viewTools&id=83&lang=en)

### 言語モデルと単語埋め込み

- [Hindi2Vec](https://nirantk.com/hindi2vec/)と[nlp-for-hindi](https://github.com/goru001/nlp-for-hindi) - ULMFiT形式の言語モデルです。
- [IIT Patna Bilingual Word Embeddings Hi-En](https://www.iitp.ac.in/~ai-nlp-ml/resources.html)
- [Fasttext word embeddings in a whole bunch of languages, trained on Common Crawl](https://fasttext.cc/docs/en/crawl-vectors.html) - Common Crawlで学習した、多数の言語に対応するfastText単語埋め込みです。
- [Hindi and Bengali Word2Vec](https://github.com/Kyubyong/wordvectors)
- [Hindi and Urdu Elmo Model](https://github.com/HIT-SCIR/ELMoForManyLangs)
- [Sanskrit Albert](https://huggingface.co/surajp/albert-base-sanskrit) - サンスクリット語版WikipediaとOSCARコーパスで学習しています。

### ライブラリとツール

- [Multi-Task Deep Morphological Analyzer](https://github.com/Saurav0074/mt-dma) - ヒンディー語とウルドゥー語向けの深層形態素解析器です。
- [Indic NLP Library](https://github.com/anoopkunchukuttan/indic_nlp_library) - 18のインド諸語にわたるトークン化、音訳、機械翻訳補助機能です。
- [SivaReddy's Dependency Parser (Python3 port)](https://github.com/CalmDownKarm/sivareddydependencyparser) - カンナダ語、ヒンディー語、テルグ語の依存構造解析とPOSタグ付けです。
- [iNLTK](https://github.com/goru001/inltk) - PyTorch/Fastai上のインド諸語向けNLPツールキットです。
- [AI4Bharat IndicNLP Suite](https://ai4bharat.iitm.ac.in/) - 22のインド諸語にわたるツール、データセット、モデルです。

### モデルと埋め込み

- [IndicBERT v2](https://github.com/AI4Bharat/IndicBERT) (2022-2024) - 23のインド諸語に対応する多言語BERTです。
- [IndicTrans2](https://github.com/AI4Bharat/IndicTrans2) (2023-2024) - 22のインド諸語向け高品質機械翻訳です。
- [OpenHathi](https://huggingface.co/sarvamai/OpenHathi-7B-Hi-v0.1-Base) (Sarvam AI, 2023) - ヒンディー語・英語の二言語LLaMA継続学習モデルです。
- [Airavata](https://huggingface.co/ai4bharat/Airavata) (2024) - 指示チューニング済みヒンディー語LLMです。
- [Sarvam-1](https://www.sarvam.ai/blogs/sarvam-1) (2024) - 10のインド諸語でゼロから学習した多言語モデルです。
- [BharatGPT / Krutrim](https://www.olakrutrim.com/) (2024) - インド諸語に重点を置く基盤モデルです。

</details>

<details>
<summary>

### インドネシア語NLP

</summary>

[トップへ戻る](#contents)

### ライブラリと埋め込み

- [bahasa](https://github.com/kangfend/bahasa) - インドネシア語向け自然言語ツールキットです。
- [Indonesian Word Embedding](https://github.com/galuhsahid/indonesian-word-embedding)
- [Indonesian fastText](https://s3-us-west-1.amazonaws.com/fasttext-vectors/wiki.id.zip) - Wikipediaで学習したモデルです。
- [PySastrawi](https://github.com/har07/PySastrawi) - Sastrawi語幹抽出アルゴリズムに基づくインドネシア語用Python語幹抽出器です。

### モデル

- [IndoBERT (IndoNLU)](https://github.com/indobenchmark/indonlu) - IndoNLUベンチマークスイートを備えた事前学習済みインドネシア語モデルです。
- [IndoBERT (IndoLEM)](https://github.com/indolem/indolem) - IndoLEMベンチマークに対応する別系統のIndoBERTです。
- [NusaCrowd / Cendol](https://github.com/IndoNLP/nusa-crowd) (2023-2024) - インドネシア語と地域言語向けの大規模コミュニティデータセットと、指示チューニング済みCendolモデルです。
- [Sailor](https://github.com/sail-sg/sailor-llm) - インドネシア語を含む、東南アジア向けのオープン言語モデル群です。
- [SEA-LION](https://github.com/aisingapore/sealion) (2024) - インドネシア語に強いSingapore AIのオープン東南アジア言語モデルです。

### データセット

- [ILPS](http://ilps.science.uva.nl/resources/bahasa/)にあるKompasとTempoのコレクションです。
- [PANL10N for PoS tagging](http://www.panl10n.net/english/outputs/Indonesia/UI/0802/UI-1M-tagged.zip) - 3万9000文、90万語トークンです。
- [IDN for PoS tagging](https://github.com/famrashel/idn-tagged-corpus) - 1万文、25万語トークンです。
- [Indonesian Treebank](https://github.com/famrashel/idn-treebank)と[Universal Dependencies-Indonesian](https://github.com/UniversalDependencies/UD_Indonesian-GSD)
- [IndoSum](https://github.com/kata-ai/indosum) - テキスト要約と分類用データです。
- [Wordnet-Bahasa](http://wn-msa.sourceforge.net/) - 大規模で無料の意味辞書です。
- [SEACrowd](https://github.com/SEACrowd/seacrowd-datahub) - 東南アジアNLP向けに標準化済みデータセットとベンチマークを提供する、多言語・マルチモーダルのデータハブです（EMNLP 2024）。

</details>

<details>
<summary>

### 韓国語NLP

</summary>

[トップへ戻る](#contents)

### ライブラリ

- [KoNLPy](http://konlpy.org) - 韓国語自然言語処理用Pythonパッケージです。
- [Mecab (Korean)](https://eunjeon.blogspot.com/) - 韓国語NLP用C++ライブラリです。
- [KoalaNLP](https://koalanlp.github.io/koalanlp/) - 韓国語NLP用Scalaライブラリです。
- [KoNLP](https://cran.r-project.org/package=KoNLP) - 韓国語NLP用Rパッケージです。
- [kss](https://github.com/hyunwoongko/kss) - 韓国語文分割器です。
- [Kiwi](https://github.com/bab2min/Kiwi) - 高速な韓国語形態素解析器です。
- [Garu](https://github.com/ongjin/garu) - WebAssemblyを使ってブラウザー内で完全にクライアント側実行する韓国語形態素解析器です（モデル1MB、オフライン対応、MITライセンス）。

### モデルと埋め込み

- [KoBERT](https://github.com/SKTBrain/KoBERT) - SKTによる韓国語BERTです。
- [KLUE-RoBERTa](https://github.com/KLUE-benchmark/KLUE) - KLUEベンチマークで学習したモデルです。
- [Polyglot-Ko](https://github.com/EleutherAI/polyglot) - オープンな韓国語言語モデルです。
- [EXAONE 3.5](https://github.com/LG-AI-EXAONE) (LG, 2024) - 韓国語・英語の二言語オープン言語モデル群です。
- [HyperCLOVA X](https://www.ncloud.com/product/aiService/clovaStudio) - Naverの韓国語基盤モデルです。

### ブログとチュートリアル

- [dsindex's blog](https://dsindex.github.io/)
- [Kangwon University's NLP course in Korean](http://cs.kangwon.ac.kr/~leeck/NLP/)

### データセット

- [KAIST Corpus](http://semanticweb.kaist.ac.kr/home/index.php/KAIST_Corpus) - 韓国科学技術院（KAIST）による韓国語コーパスです。
- [Naver Sentiment Movie Corpus in Korean](https://github.com/e9t/nsmc/)
- [Chosun Ilbo archive](http://srchdb1.chosun.com/pdf/i_archive/) - 韓国の主要新聞による韓国語データセットです。
- [Chat data](https://github.com/songys/Chatbot_data) - 韓国語のチャットボットデータです。
- [Petitions](https://github.com/akngs/petitions) - 青瓦台国民請願サイトの終了済み請願データです。
- [Korean Parallel corpora](https://github.com/j-min/korean-parallel-corpora) - 韓国語からフランス語・英語へのNMTデータセットです。
- [KorQuAD](https://korquad.github.io/) - Wiki HTML原文付きの韓国語SQuADデータセット（v1.0、v2.1）です。

</details>

<details>
<summary>

### ペルシア語NLP

</summary>

[トップへ戻る](#contents)

### ライブラリ

- [Hazm](https://github.com/roshan-research/hazm) - ペルシア語NLPツールキットです。
- [Parsivar](https://github.com/ICTRC/Parsivar) - ペルシア語処理ツールキットです。
- [Perke](https://github.com/AlirezaTheH/perke) - ペルシア語キーフレーズ抽出です。
- [Perstem](https://github.com/jonsafari/perstem) - ペルシア語語幹抽出器、形態素解析器、部分POSタグ付け器です。
- [ParsiAnalyzer](https://github.com/NarimanN2/ParsiAnalyzer) - Elasticsearch用ペルシア語解析器です。
- [virastar](https://github.com/aziz/virastar) - ペルシア語テキストのクリーニングです。

### モデル

- [ParsBERT](https://github.com/hooshvare/parsbert) - ペルシア語BERTです。
- [PersianMind](https://huggingface.co/universitytehran/PersianMind-v1.0) (2023-2024) - 指示チューニング済みペルシア語モデルです。
- [Dorna](https://huggingface.co/PartAI/Dorna-Llama3-8B-Instruct) (Part AI, 2024) - Llama 3ベースのペルシア語指示モデルです。

### データセット

- [Bijankhan Corpus](https://dbrg.ut.ac.ir/بیژن%E2%80%8Cخان/) - ペルシア語（ファルシ語）NLP研究に適したタグ付きコーパスで、40種類のPOSタグを付けた約260万語を収録します。
- [Uppsala Persian Corpus (UPC)](https://sites.google.com/site/mojganserajicom/home/upc) - 310種類のPOSタグで注釈した270万トークンを含む、自由に利用できる大規模ペルシア語コーパスです。
- [Large-Scale Colloquial Persian](http://hdl.handle.net/11234/1-3195) - LSCP。2700万件のくだけたペルシア語ツイートからなる1億2000万文に、依存構造、POS、感情の注釈を付けています。
- [ArmanPersoNERCorpus](https://github.com/HaniehP/PersianNER) - IOB形式のNERタグを付けた7682文、25万トークンです。
- [FarsiYar PersianNER](https://github.com/Text-Mining/Persian-NER) - [Persian Wikipedia Corpus](https://github.com/Text-Mining/Persian-Wikipedia-Corpus)から得られた、約100万のペルシア語文、約2500万トークンです。
- [PERLEX](http://farsbase.net/PERLEX.html) - SemEval-2010 Task 8を翻訳した、初のペルシア語関係抽出データセットです。
- [Persian Syntactic Dependency Treebank](http://dadegan.ir/catalog/perdt) - ペルシア語項価辞書の大部分の動詞を網羅する、注釈付き29,982文です。
- [Uppsala Persian Dependency Treebank (UPDT)](http://stp.lingfil.uu.se/~mojgan/UPDT.html) - 依存構造に基づく統語注釈付きコーパスです。
- [Hamshahri](https://dbrg.ut.ac.ir/hamshahri/) - CLEF 2008～2009で使用された、標準的で信頼性の高いペルシア語テキスト集です。

</details>

<details>
<summary>

### ポーランド語NLP

</summary>

[トップへ戻る](#contents)

- [Polish-NLP](https://github.com/ksopyla/awesome-nlp-polish) - ポーランド語NLP向けのモデル、ツール、データセットを集めた厳選リストです。

</details>

<details>
<summary>

### ポルトガル語NLP

</summary>

[トップへ戻る](#contents)

- [Portuguese-nlp](https://github.com/ajdavidl/Portuguese-NLP) - ポルトガル語NLPリソースとツールの厳選リストです。

### モデル

- [BERTimbau](https://github.com/neuralmind-ai/portuguese-bert) - ブラジルポルトガル語向けBERTです。
- [Sabiá](https://huggingface.co/maritaca-ai) (Maritaca AI, 2023-2024) - ポルトガル語に特化したオープン言語モデルです。
- [Albertina](https://huggingface.co/PORTULAN) (PORTULAN, 2023-2024) - 欧州ポルトガル語とブラジルポルトガル語の両方に対応するエンコーダー専用モデルです。

</details>

<details>
<summary>

### スペイン語NLP

</summary>

[トップへ戻る](#contents)

### ライブラリ

- [spanlp](https://github.com/jfreddypuentes/spanlp) - 21のスペイン語圏のデータを用い、スペイン語の冒とく、ヘイトスピーチ、いじめを検出・検閲・除去するPythonライブラリです。

### データ

- [Columbian Political Speeches](https://github.com/dav009/LatinamericanTextResources)
- [Copenhagen Treebank](https://mbkromann.github.io/copenhagen-dependency-treebank/)
- [Spanish Billion Words Corpus with Word2Vec embeddings](https://github.com/crscardellino/sbwce)
- [Compilation of Spanish Unannotated Corpora](https://github.com/josecannete/spanish-unannotated-corpora)

### モデルと埋め込み

- [BETO](https://github.com/dccuchile/beto) - スペイン語向けBERTです。
- [RoBERTa-bne](https://huggingface.co/PlanTL-GOB-ES/roberta-base-bne) - スペイン国立図書館のコーパスで学習したスペイン語RoBERTaです。
- [Latxa](https://github.com/hitz-zentroa/latxa) (2024) - バスク語向けのオープン基盤モデルで、スペイン語にも対応します。
- [Salamandra](https://huggingface.co/BSC-LT/salamandra-7b) (BSC, 2024) - バルセロナ・スーパーコンピューティング・センターによる、スペイン語対応に強い多言語モデルです。
- [RigoChat](https://huggingface.co/IIC/RigoChat-7b-v2) (2024) - スペイン語で指示チューニングされたオープンモデルです。
- [Spanish Word Embeddings (multiple methods/corpora)](https://github.com/dccuchile/spanish-word-embeddings)
- [Spanish fastText Embeddings](https://github.com/BotCenter/spanishWordEmbeddings)
- [Spanish sent2vec Sentence Embeddings](https://github.com/BotCenter/spanishSent2Vec)

</details>

<details>
<summary>

### タイ語NLP

</summary>

[トップへ戻る](#contents)

### ライブラリ

- [PyThaiNLP](https://github.com/PyThaiNLP/pythainlp) - Pythonでタイ語NLPを行います。
- [JTCC](https://github.com/wittawatj/jtcc) - Java向け文字クラスタライブラリです。
- [CutKum](https://github.com/pucktada/cutkum) - TensorFlowによる深層学習を用いた単語分割です。
- [Thai Language Toolkit](https://pypi.python.org/pypi/tltk/) - トークン化とPOSタグ付けを行います。
- [SynThai](https://github.com/KenjiroAI/SynThai) - 深層学習を用いた単語分割とPOSタグ付けです。

### モデル

- [WangchanBERTa](https://github.com/vistec-AI/thai2transformers) - 事前学習済みタイ語モデルです。
- [Typhoon](https://huggingface.co/scb10x) (SCB 10X, 2024) - オープンなタイ語LLM群です。
- [OpenThaiGPT](https://huggingface.co/openthaigpt) (2023-2024) - オープンなタイ語指示チューニング済みモデルです。
- [Sailor](https://github.com/sail-sg/sailor-llm) - タイ語を含むオープンな東南アジア言語モデル群です。

### データ

- [Inter-BEST](https://www.nectec.or.th/corpus/index.php?league=pm) - 500万語と単語分割を含むテキストコーパスです。
- [Prime Minister 29](https://github.com/PyThaiNLP/lexicon-thai/tree/master/thai-corpus/Prime%20Minister%2029) - タイの現首相による演説データセットです。

</details>

<details>
<summary>

### ウクライナ語NLP

</summary>

[トップへ戻る](#contents)

- [awesome-ukrainian-nlp](https://github.com/asivokon/awesome-ukrainian-nlp) - ウクライナ語NLPのデータセット、モデルなどを集めた厳選リストです。
- [UkrainianLT](https://github.com/Helsinki-NLP/UkrainianLT) - 機械翻訳と音声処理を中心とする厳選リストです。

</details>

<details>
<summary>

### ウルドゥー語NLP

</summary>

[トップへ戻る](#contents)

### ライブラリ

- [urduhack](https://github.com/urduhack/urduhack) - ウルドゥー語NLPライブラリです。

### データセット

- [Collection of Urdu datasets](https://github.com/mirfan899/Urdu) - POS、NERなどのNLPタスク用データセットです。

</details>

<details>
<summary>

### ウズベク語NLP

</summary>

[トップへ戻る](#contents)

### データセット

- [SOAS English-Uzbek RAG Evaluation](https://github.com/rajantripathi/soas-rag-evaluation) - 文化的背景を考慮するRAG向けの英語・ウズベク語二言語検索評価ベンチマークです。400行、英語＋ウズベク語、MIT/CC-BY-4.0ライセンスです。

</details>

<details>
<summary>

### ベトナム語NLP

</summary>

[トップへ戻る](#contents)

### ライブラリ

- [underthesea](https://github.com/undertheseanlp/underthesea) - ベトナム語NLPツールキットです。
- [vn.vitk](https://github.com/phuonglh/vn.vitk) - ベトナム語テキスト処理ツールキットです。
- [VnCoreNLP](https://github.com/vncorenlp/VnCoreNLP) - ベトナム語NLPツールキットです。
- [pyvi](https://github.com/trungtv/pyvi) - Python向けベトナム語基礎NLPツールキットです。
- [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - 音声クローン機能を備えたオンデバイスのベトナム語テキスト読み上げです。

### モデルと埋め込み

- [PhoBERT](https://github.com/VinAIResearch/PhoBERT) - ベトナム語の事前学習済みモデルです。
- [BARTpho](https://github.com/VinAIResearch/BARTpho) - ベトナム語のseq2seq事前学習モデルです。
- [PhoGPT](https://github.com/VinAIResearch/PhoGPT) (VinAI, 2023-2024) - オープンなベトナム語生成モデルです。
- [Vistral](https://huggingface.co/Viet-Mistral/Vistral-7B-Chat) (2024) - Mistralベースのベトナム語チャットモデルです。
- [Sailor](https://github.com/sail-sg/sailor-llm) (2024) - ベトナム語、タイ語、インドネシア語などの東南アジア諸語を扱うオープン多言語モデル群です。

### データ

- [Vietnamese Treebank](https://vlsp.hpda.vn/demo/?page=resources&lang=en) - 句構造解析タスク向けの1万文です。
- [BKTreeBank](https://arxiv.org/pdf/1710.05519.pdf) - ベトナム語依存構造ツリーバンクです。
- [UD_Vietnamese](https://github.com/UniversalDependencies/UD_Vietnamese-VTB) - Universal Dependenciesのベトナム語ツリーバンクです。
- [VIVOS](https://ailab.hcmus.edu.vn/vivos/) - HCMUS AILabによる、15時間の録音音声を収録した無料ベトナム語音声コーパスです。
- [VNTQcorpus(big).txt](http://viet.jnlp.org/download-du-lieu-tu-vung-corpus) - 175万件のニュース文です。
- [ViText2SQL](https://github.com/VinAIResearch/ViText2SQL) - ベトナム語Text-to-SQL意味解析データセットです（EMNLP-2020 Findings）。
- [EVB Corpus](https://github.com/qhungngo/EVBCorpus) - 15冊の二言語書籍からなる2000万語、英語・ベトナム語対訳100件、法律対訳250件、ニュース記事5000件、映画字幕2000件を収録します。

</details>

### その他の言語

- ロシア語：[pymorphy2](https://github.com/kmike/pymorphy2) - ロシア語向けの優れた品詞タグ付け器です。
- アジア諸語：タイ語、ラオ語、中国語、日本語、韓国語に対応する[ICU Tokenizer](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu-tokenizer.html)のElasticSearch実装です。
- 古典語：[CLTK](https://github.com/cltk/cltk) - Classical Language Toolkitは、古典語NLP用のPythonライブラリとテキスト集です。
- ヘブライ語：[NLPH_Resources](https://github.com/NLPH/NLPH_Resources) - ヘブライ語NLPの論文、コーパス、言語リソース集です。

[トップへ戻る](#contents)

## 関連項目

対象範囲外の関連トピックを扱う厳選リスト：

- [awesome-llm](https://github.com/Hannibal046/Awesome-LLM) - 汎用大規模言語モデルのリソースです。
- [awesome-generative-ai](https://github.com/steven2358/awesome-generative-ai) - さまざまなモダリティの生成AIを扱います。
- [awesome-rag](https://github.com/Danielskry/Awesome-RAG) - 検索拡張生成システムとツールです。
- [awesome-prompt-engineering](https://github.com/promptslab/Awesome-Prompt-Engineering) - プロンプト技法とテンプレートライブラリです。
- [awesome-mlops](https://github.com/visenger/awesome-mlops) - LLMサービングを含む本番機械学習です。

## 引用

このリポジトリが役立った場合は、このリストを引用してください：

```bibtex
@misc{awesome-nlp,
  title  = {Awesome NLP},
  author = {Kim, Keon Woo},
  year   = {2018},
  url    = {https://github.com/keon/awesome-nlp},
  note   = {GitHub repository}
}
```

## ライセンス
[ライセンス](./LICENSE) - CC0
