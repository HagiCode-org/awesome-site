# Chinese NLP

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

中国語の自然言語処理（NLP）のための厳選されたリソース一覧。

中国語自然言語処理に関する資料

画像は復旦大学の邱錫鵬教授による

![](/images/1.jpg)


## 目次 Contents

### 1. [中国語 NLP ツールキット Chinese NLP Toolkits](https://github.com/crownpku/awesome-chinese-nlp#chinese-nlp-toolkits-中文nlp工具)

* #### [総合 NLP ツールキット Toolkits](https://github.com/crownpku/awesome-chinese-nlp#toolkits-综合nlp工具包-1)
* #### [一般的な英語または多言語対応 NLP ツールキット Popular NLP Toolkits for English/Multi-Language](https://github.com/crownpku/awesome-chinese-nlp#popular-nlp-toolkits-for-englishmulti-language-常用的英文或支持多语言的nlp工具包-1)
* #### [中国語単語分割 Chinese Word Segment](https://github.com/crownpku/awesome-chinese-nlp#chinese-word-segment-中文分词-1)
* #### [情報抽出 Information Extraction](https://github.com/crownpku/awesome-chinese-nlp#information-extraction-信息提取-1)
* #### [質問応答とチャットボット QA & Chatbot](https://github.com/crownpku/awesome-chinese-nlp#qa--chatbot-问答和聊天机器人-1)
* #### [マルチモーダル表現と検索 Multi-Modal Representation & Retrieval](https://github.com/crownpku/awesome-chinese-nlp#multi-modal-representation--retrieval-多模态表征与检索-1)
### 2. [中国語コーパス Corpus](https://github.com/crownpku/awesome-chinese-nlp#corpus-中文语料)
### 3. [中国語 NLP の学術組織およびコンテスト Organizations](https://github.com/crownpku/awesome-chinese-nlp#organizations-%E4%B8%AD%E6%96%87nlp%E5%AD%A6%E6%9C%AF%E7%BB%84%E7%BB%87%E5%8F%8A%E7%AB%9E%E8%B5%9B)
### 4. [中国語 NLP 商用サービス Industry](https://github.com/crownpku/awesome-chinese-nlp#industry-%E4%B8%AD%E6%96%87nlp%E5%95%86%E4%B8%9A%E6%9C%8D%E5%8A%A1)
### 5. [学習資料 Learning Materials](https://github.com/crownpku/awesome-chinese-nlp#learning-materials-学习资料)


<br />
<br />

## 中国語 NLP ツールキット Chinese NLP Toolkits

### 総合 NLP ツールキット Toolkits

- [THULAC 中文词法分析工具包](http://thulac.thunlp.org/) by 清华 (C++/Java/Python)

- [NLPIR](https://github.com/NLPIR-team/NLPIR) by 中科院 (Java)

- [LTP 语言技术平台](https://github.com/HIT-SCIR/ltp) by 哈工大 (C++)  [pylyp](https://github.com/HIT-SCIR/pyltp) LTP の Python ラッパー

- [FudanNLP](https://github.com/FudanNLP/fnlp) by 复旦 (Java)

- [BaiduLac](https://github.com/baidu/lac) by 百度 Baidu のオープンソース中国語語彙解析ツール。分詞、品詞タグ付け、固有表現認識を含む。

- [HanLP](https://github.com/hankcs/HanLP) (Java)

- [FastNLP](https://github.com/fastnlp/fastNLP) (Python) 軽量な NLP 処理スイート。

- [SnowNLP](https://github.com/isnowfy/snownlp) (Python) 中国語テキストを処理するための Python ライブラリ

- [YaYaNLP](https://github.com/Tony-Wang/YaYaNLP) (Python) 純 Python で書かれた中国語自然言語処理パッケージ。「牙牙学语」にちなんで命名

- [小明NLP](https://github.com/SeanLee97/xmnlp) (Python) 軽量な中国語自然言語処理ツール

- [DeepNLP](https://github.com/rockingdingo/deepnlp) (Python) Tensorflow 上に実装された、中国語事前学習モデル付きの深層学習 NLP パイプライン。

- [chinese_nlp](https://github.com/taozhijiang/chinese_nlp) (C++ & Python) 中国語自然言語処理ツールと例

- [lightNLP](https://github.com/smilelight/lightNLP) (Python) Pytorch と torchtext に基づく自然言語処理深層学習フレームワーク

- [Chinese-Annotator](https://github.com/crownpku/Chinese-Annotator) (Python) 中国語テキスト注釈ツール Annotator for Chinese Text Corpus

- [Poplar](https://github.com/synyi/poplar) (Typescript) 自然言語処理（NLP）のための Web ベースの注釈ツール

- [Jiagu](https://github.com/ownthink/Jiagu) (Python) Jiagu は BiLSTM などのモデルを基に大規模コーパスで学習している。中国語分詞、品詞タグ付け、固有表現認識、感情分析、知識グラフ関係抽出、キーワード抽出、テキスト要約、新語発見などの機能を提供。

- [SmoothNLP](https://github.com/smoothnlp/SmoothNLP) (Python & Java) 解釈可能な NLP 技術に注力

- [FoolNLTK](https://github.com/rockyzhengwu/FoolNLTK) (Python & Java) 中国語自然言語ツールキット A Chinese Nature Language Toolkit

### 一般的な英語または多言語対応 NLP ツールキット Popular NLP Toolkits for English/Multi-Language

- [CoreNLP](https://github.com/stanfordnlp/CoreNLP) by Stanford (Java) コア NLP ツールの Java スイート。

- [Stanza](https://github.com/stanfordnlp/stanza) by Stanford (Python) 多くの人間の言語向けの Python NLP ライブラリ

- [NLTK](http://www.nltk.org/) (Python) Natural Language Toolkit

- [spaCy](https://spacy.io/) (Python) 本番レベルの自然言語処理、[オンラインコース](https://course.spacy.io/)付き

- [textacy](https://github.com/chartbeat-labs/textacy) (Python) spaCy の前後で使える NLP

- [OpenNLP](https://opennlp.apache.org/) (Java) 機械学習ベースの自然言語テキスト処理ツールキット。

- [gensim](https://github.com/RaRe-Technologies/gensim) (Python) Gensim はトピックモデリング、文書インデックス、類似性検索のための Python ライブラリ。

- [Kashgari](https://github.com/BrikerMan/Kashgari) - シンプルで強力な NLP フレームワーク。5 分で固有表現認識（NER）、品詞タグ付け（PoS）、テキスト分類の先進モデルを構築。BERT と word2vec を含む。


### 中国語単語分割 Chinese Word Segment

- [Jieba 结巴中文分词](https://github.com/fxsjy/jieba) (Python および多数の他言語派生) 最高の Python 中国語分詞コンポーネント

- [北大中文分词工具](https://github.com/lancopku/pkuseg-python) (Python) 高精度な中国語分詞ツール。使いやすく、既存のオープンソースツールと比べて分詞精度を大幅に向上。

- [kcws 深度学习中文分词](https://github.com/koth/kcws) (Python) BiLSTM+CRF と IDCNN+CRF

- [ID-CNN-CWS](https://github.com/hankcs/ID-CNN-CWS) (Python) 中国語単語分割のための反復膨張畳み込み Iterated Dilated Convolutions for Chinese Word Segmentation

- [Genius 中文分词](https://github.com/duanhongyi/genius) (Python) Genius は CRF（条件付き確率場）アルゴリズムを用いたオープンソースの Python 中国語分詞コンポーネント。

- [loso 中文分词](https://github.com/fangpenlin/loso) (Python)

- [yaha "哑哈"中文分词](https://github.com/jannson/yaha) (Python)

- [ChineseWordSegmentation](https://github.com/Moonshile/ChineseWordSegmentation) (Python) コーパス不要の中国語分詞アルゴリズム Chinese word segmentation algorithm without corpus

- [Go 言語高性能分詞](https://github.com/go-ego/gse) (Go) 効率的な Go テキスト分割。英語、中国語、日本語などに対応。

- [Ansj中文分词](https://github.com/NLPchina/ansj_seg) (java) n-Gram+CRF+HMM に基づく中国語分詞の Java 実装


### 情報抽出 Information Extraction

- [MITIE](https://github.com/mit-nlp/MITIE) (C++) 情報抽出のためのライブラリとツール

- [Duckling](https://github.com/facebookincubator/duckling) (Haskell) 入力文字列に対して合成可能な言語ルールを表現・テスト・評価するための言語、エンジン、ツール群。

- [IEPY](https://github.com/machinalis/iepy) (Python)  IEPY は関係抽出に焦点を当てたオープンソースの情報抽出ツール。

- [Snorkel](https://github.com/HazyResearch/snorkel) 情報抽出に焦点を当てた学習データ作成・管理システム

- [TensorFlow で LSTM を用いたニューラル関係抽出](https://github.com/thunlp/TensorFlow-NRE)

- [中国語固有表現認識のためのニューラルネットワークモデル](https://github.com/zjy-ucas/ChineseNER)

- [bert-chinese-ner](https://github.com/ProHiryu/bert-chinese-ner) 事前学習言語モデル BERT で中国語 NER を行う

- [Information-Extraction-Chinese](https://github.com/crownpku/Information-Extraction-Chinese) IDCNN/biLSTM+CRF による中国語固有表現認識、biGRU+2ATT による関係抽出 中文实体识别与关系提取

- [Familia](https://github.com/baidu/Familia) Baidu 製の A Toolkit for Industrial Topic Modeling

- [Text Classification](https://github.com/brightmart/text_classification) 深層学習による様々なテキスト分類モデル等。テストデータに Zhihu の Q&A コーパスを使用。

- [ComplexEventExtraction](https://github.com/liuhuanyong/ComplexEventExtraction) 中国語複合イベントの概念と顕在パターン。条件・因果・連鎖・反転などのイベント抽出を行い、事件・事象グラフを構築。

- [TextRank4ZH](https://github.com/letiantian/TextRank4ZH) 中国語テキストからキーワードと要約を自動抽出


### 質問応答とチャットボット QA & Chatbot

- [Rasa NLU](https://github.com/RasaHQ/rasa_nlu) (Python) 自然言語を構造化データに変換。中国語フォークは [Rasa NLU Chi](https://github.com/crownpku/Rasa_NLU_Chi)

- [Rasa Core](https://github.com/RasaHQ/rasa_core) (Python) 対話ソフトウェアのための機械学習ベース対話エンジン

- [Chatstack](https://github.com/crownpku/Chatstack-Doc) 中国語 NLU システム構築のための全パイプライン UI

- [Snips NLU](https://github.com/snipsco/snips-nlu) (Python) Snips NLU は自然言語の文を解析し構造化情報を抽出する Python ライブラリ。

- [DeepPavlov](https://github.com/deepmipt/DeepPavlov) (Python) エンドツーエンド対話システム構築とチャットボット学習のためのオープンソースライブラリ。

- [ChatScript](https://github.com/bwilcox-1234/ChatScript) 自然言語ツール／対話マネージャ。ルールベースのチャットボットエンジン。

- [Chatterbot](https://github.com/gunthercox/ChatterBot) (Python) ChatterBot はチャットボット作成のための機械学習対話エンジン。

- [Chatbot](https://github.com/zake7749/Chatbot) (Python) ベクトルマッチングに基づく文脈型チャットボット

- [Tipask](https://github.com/sdfsky/tipask) (PHP) Laravel ベースのオープンソース PHP 質問応答システム。拡張容易、高い負荷能力と安定性。

- [QuestionAnsweringSystem](https://github.com/ysc/QuestionAnsweringSystem) (Java) 質問を自動解析して候補回答を提示する Java 製の人間対機械質問応答システム。

- [QA-Snake](https://github.com/SnakeHacker/QA-Snake) (Python) 複数検索エンジンと深層学習技術に基づく自動質問応答

- [TensorFlow による Sequence to Sequence チャットボットモデル](https://github.com/qhduan/Seq2Seq_Chatbot_QA) (Python)

- [深層学習による中国語読解質問応答システム](https://github.com/S-H-Y-GitHub/QA) (Python)

- [AnyQ by Baidu](https://github.com/baidu/AnyQ) FAQ 集合向け質問応答システムフレームワークとテキスト意味一致ツール SimNet を中心に含む。

- [DuReader 中国語読解 Baseline コード](https://github.com/baidu/DuReader) (Python)

- [SmartQQ ベースの自動ボットフレームワーク](https://github.com/Yinzo/SmartQQBot) (Python)

- [QASystemOnMedicalKG](https://github.com/liuhuanyong/QASystemOnMedicalKG) (Python) 疾患を中心とした一定規模の医療知識グラフを用い、自動質問応答と分析を提供。

- [GPT2-chitchat](https://github.com/yangjianxin1/GPT2-chitchat) (Python) 中国語雑談用の GPT2 モデル

- [CDial-GPT](https://github.com/thu-coai/CDial-GPT) (Python) 大規模な中国語対話データセットと、それを用いた中国語対話事前学習モデル（中国語 GPT モデル）を提供


### マルチモーダル表現と検索 Multi-Modal Representation & Retrieval

- [Chinese-CLIP](https://github.com/OFA-Sys/Chinese-CLIP) (Python) Chinese-CLIP は中国語マルチモーダル画像・テキスト表現事前学習モデル。OpenAI の CLIP 構造に基づき、大規模な中国語ネイティブ画像・テキストコーパスで事前学習。複数のモデル規模をオープンソース化し、技術報告論文と検索デモを公開。


<br />
<br />

## 中国語コーパス Corpus

- [OpenKG.cn 开放知识图谱](http://openkg.cn)

- [オープン中国語知識グラフの schema](https://github.com/cnschema/cnschema)

- [大規模中国語概念グラフ CN-Probase](http://kw.fudan.edu.cn/cnprobase/search/) [公開アカウント紹介](https://mp.weixin.qq.com/s?__biz=MzI0MTI1Nzk1MA==&mid=2651675884&idx=1&sn=1a43a93fd5bb53c8a9e48518bfa41db8&chksm=f2f7a05dc580294b227332b1051bfa2e5c756c72efb4d102c83613185b571ac31343720a6eae&mpshare=1&scene=1&srcid=1113llNDS1MvoadhCki83ERW#rd)

- [1.4 億件の大規模中国語知識グラフのオープンソースダウンロード](https://github.com/ownthink/KnowledgeGraphData)

- [農業知識グラフ](https://github.com/qq547276542/Agriculture_KnowledgeGraph) 農業分野の情報検索、固有表現認識、関係抽出、分類木構築、データマイニング

- [CLDC 中文语言资源联盟](http://www.chineseldc.org/)

- [中国語 Wikipedia Dump](https://dumps.wikimedia.org/zhwiki/)

- [異なるコーパス・モデル（BERT、GPT 等）に基づく中国語事前学習モデル](https://github.com/dbiir/UER-py) 異なるコーパス・エンコーダ・タスクに対応する中国語事前学習モデルフレームワーク（from RUC and Tencent）

- [OpenCLaP](https://github.com/thunlp/OpenCLaP) マルチドメインのオープンソース中国語事前学習言語モデルリポジトリ（from Tsinghua）

- [98 年人民日報品詞タグ付け庫@Baidu 盤](https://pan.baidu.com/s/1gd6mslt)

- [Sogou 20061127 ニュースコーパス(分類付)@Baidu 盤](https://pan.baidu.com/s/1bnhXX6Z)

- [UDChinese](https://github.com/UniversalDependencies/UD_Chinese) (spaCy の PoS 学習用)

- [中国語 word2vec モデル](https://github.com/to-shimo/chinese-word2vec)

- [100 種超の事前学習中国語単語ベクトル](https://github.com/Embedding/Chinese-Word-Vectors)

- [Tencent AI Lab Embedding Corpus for Chinese Words and Phrases](https://ai.tencent.com/ailab/nlp/embedding.html)

- [Whole Word Masking 付き中国語事前学習 BERT](https://github.com/ymcui/Chinese-BERT-wwm)

- [中国語 GPT2 学習コード](https://github.com/Morizeyao/GPT2-Chinese) 詩、ニュース、小説の生成や汎用言語モデルの学習が可能。

- [中国語言語理解ベンチマーク ChineseGLUE](https://github.com/chineseGLUE/chineseGLUE) 代表的なデータセット、ベース（事前学習）モデル、コーパス、リーダーボードを含む。

- [中華新華字典データベース](https://github.com/pwxcoo/chinese-xinhua) 諺、成語、単語、漢字を含む。

- [Synonyms: 中国語類義語ツールキット](https://github.com/huyingxi/Synonyms/) 中国語 Wikipedia と word2vec で学習した類義語ライブラリを Python パッケージ化。

- [Chinese_conversation_sentiment](https://github.com/z17176/Chinese_conversation_sentiment) 感情分析に有用な中国語感情データセット。

- [中国語緊急事態コーパス](https://github.com/shijiebei2009/CEC-Corpus) Chinese Emergency Corpus

- [dgk_lost_conv 中国語対話コーパス](https://github.com/rustch3n/dgk_lost_conv) chinese conversation corpus

- [中英語対話システム学習用コーパス](https://github.com/candlewill/Dialog_Corpus) Datasets for Training Chatbot System

- [Gossiping 板 Q&A 中国語コーパス](https://github.com/zake7749/Gossiping-Chinese-Corpus)

- [中国語公開チャットコーパス](https://github.com/codemayq/chaotbot_corpus_Chinese)

- [中国株公告情報クローラ](https://github.com/startprogress/China_stock_announcement) Python スクリプトで巨潮ネットワークのサーバーから中国株（sz, sh）の公告（上場企業・監査機関）を取得

- [tushare 財務データインターフェース](http://tushare.org/) TuShare は無料のオープンソース Python 財務データインターフェースパッケージ。

- [金融テキストデータセット](https://github.com/smoothnlp/FinancialDatasets) SmoothNLP 金融文本数据集(公开) Public Financial Datasets for NLP Researches

- [保険業界コーパス](https://github.com/Samurais/insuranceqa-corpus-zh)   [[52nlp 紹介 Blog](http://www.52nlp.cn/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E4%BF%9D%E9%99%A9%E8%A1%8C%E4%B8%9A%E9%97%AE%E7%AD%94%E5%BC%80%E6%94%BE%E6%95%B0%E6%8D%AE%E9%9B%86)] 機械学習タスク向け保険分野のオープンデータ OpenData in insurance area for Machine Learning Tasks

- [最も完全な中華古詩詞データベース](https://github.com/chinese-poetry/chinese-poetry) 唐・宋両朝ほぼ 14000 人の詩人、約 5.5 万首の唐詩と 26 万首の宋詩。宋代 1564 人の詞人、21050 首の詞。

- [中国語読解データ DuReader](http://ai.baidu.com/broad/subordinate?dataset=dureader)

- [中国語小規模コーパス](https://github.com/crownpku/Small-Chinese-Corpus) 中国語固有表現認識、関係認識、読解などの少量データを含む

- [Chinese-Literature-NER-RE-Dataset](https://github.com/lancopku/Chinese-Literature-NER-RE-Dataset) 中国語文学テキスト向け談話レベルの固有表現認識・関係抽出データセット A Discourse-Level Named Entity Recognition and Relation Extraction Dataset for Chinese Literature Text

- [ChineseTextualInference](https://github.com/liuhuanyong/ChineseTextualInference) 中国語テキスト含意プロジェクト。88 万組のテキスト含意データセットの翻訳・構築と、深層学習ベースの含意判定モデル構築を含む。

- [大規模中国語自然言語処理コーパス](https://github.com/brightmart/nlp_chinese_corpus) Wikipedia (wiki2019zh)、ニュース (news2016zh)、百科 Q&A (baike2018qa)

- [中国語人名コーパス](https://github.com/wainshine/Chinese-Names-Corpus) 中国語の姓名、姓、名、呼称、日本人名、翻訳人名、英語人名。

- [企業名・機関名コーパス](https://github.com/wainshine/Company-Names-Corpus) 企業略称、省略形、ブランド語、企業名。

- [中国語センシティブワード辞書](https://github.com/observerss/textfilter) センシティブワードフィルタの複数実装＋約 1 万語のセンシティブワード辞書

- [中国語省略語データセット](https://github.com/zhangyics/Chinese-abbreviation-dataset) 否定完全形を含む中国語省略語のコーパス A corpus of Chinese abbreviation, including negative full forms.

- [中国語データ前処理素材](https://github.com/dongxiexidian/Chinese) 中国語分詞辞書と中国語ストップワード

- [漢語拆字字典](https://github.com/kfcd/chaizi)

- [SentiBridge: 中国語実体感情知識ベース](https://github.com/rainarch/SentiBridge) 人々が実体をどう記述するかを描写。ニュース、旅行、飲食を含む計 30 万組。

- [OpenCorpus](https://github.com/hankcs/OpenCorpus) 自由利用可能な（中国語）コーパスの集積。

- [ChineseNlpCorpus](https://github.com/SophonPlus/ChineseNlpCorpus) 感情／意見／コメントの傾向分析、中国語固有表現認識、推薦システム

- [FinancialDatasets](https://github.com/smoothnlp/FinancialDatasets) SmoothNLP 金融文本数据集(公开) Public Financial Datasets for NLP Researches Only

- [People's Daily & Children's Fairy Tale](https://github.com/ymcui/Chinese-Cloze-RC) PD&CFT: 中国語読解データセット A Chinese Reading Comprehension Dataset
- [中国語 Wikipedia 23 万高品質項目-2023 年 7 月更新-センシティブ・論争情報をフィルタ済](https://huggingface.co/datasets/pleisto/wikipedia-cn-20230720-filtered)

<br />
<br />

## 中国語 NLP の学術組織およびコンテスト Organizations

- [清華大学自然言語処理と人文計算研究室](http://nlp.csai.tsinghua.edu.cn/site2/index.php/zh)

- [北京大学計算言語学教育部重点実験室](http://klcl.pku.edu.cn/)

- [中科院計算所自然言語処理研究グループ](http://www.nlpir.org/)

- [哈工大知能技術と自然言語処理実験室](http://insun.hit.edu.cn/)

- [哈工大社会計算と情報検索研究センター](http://ir.hit.edu.cn/)

- [復旦大学自然言語処理グループ](http://nlp.fudan.edu.cn/)

- [蘇州大学自然言語処理グループ](http://nlp.suda.edu.cn/index.html)

- [南京大学自然言語処理研究グループ](http://nlp.nju.edu.cn)

- [東北大学自然言語処理実験室](http://www.nlplab.com/)

- [廈門大学知能科学技術学部自然言語処理実験室](http://nlp.xmu.edu.cn/)

- [鄭州大学自然言語処理実験室](http://nlp.zzu.edu.cn/)

- [マイクロソフト・リサーチ・アジア自然言語処理](https://www.msra.cn/zh-cn/research/nlp)

- [華為 Noah's Ark 実験室](http://www.noahlab.com.hk/)

- [CUHK Text Mining Group](http://www1.se.cuhk.edu.hk/~textmine/)

- [PolyU Social Media Mining Group](http://www4.comp.polyu.edu.hk/~cswjli/Group.html)

- [HKUST Human Language Technology Center](http://www.cse.ust.hk/~hltc/)

- [National Taiwan University NLP Lab](http://nlg.csie.ntu.edu.tw/)

- [中国中文情報学会](http://www.cipsc.org.cn/)

- [NLP Conference Calender](http://cs.rochester.edu/~omidb/nlpcalendar/) NLP コミュニティの主要な会議、ジャーナル、ワークショップ、共有タスク。

- [2017 第 1 回「iFlytek Cup」中国語機械読解評価](http://www.cips-cl.org/static/CCL2017/iflytek.html)

- [2017 AI-Challenger 画像中国語記述](https://www.challenger.ai/competition/caption) 与えられた画像の主要情報を一文で記述し、中国語文脈での画像理解課題に挑む。

- [2017 AI-Challenger 英中機械テキスト翻訳](https://www.challenger.ai/competition/translation) 大規模データで英中テキスト機械翻訳モデルの能力を向上。

- [2017 知乎看山杯機械学習チャレンジ](https://biendata.com/competition/zhihu/) 知乎の質問とトピックタグの紐付け訓練データから、未ラベルデータを自動タグ付けするモデルを学習。

- [2018 オープンドメイン中国語質問応答タスク](https://biendata.com/competition/CCKS2018_4/) 与えられた中国語の質問に対し、システムが知識ベースから実体や属性値を選んで回答とする。

- [2018 微衆銀行インテリジェント顧客問い合わせ文マッチング大会](https://biendata.com/competition/CCKS2018_3/) 中国語の実際の顧客コーパスに対し問い合わせ意図をマッチング。2 文が与えられたとき意図の近さを判定。


<br />
<br />

## 中国語 NLP 商用サービス Industry

- [華為雲 NLP](https://www.huaweicloud.com/product/nlp.html) 企業や開発者向けのテキスト分析・マイニングクラウドサービス。テキストを効率的に処理。

- [百度雲 NLP](https://cloud.baidu.com/product/nlp.html) 業界最先端の自然言語処理技術、高品質なテキスト処理・理解技術を提供

- [阿里雲 NLP](https://data.aliyun.com/product/nlp) 企業や開発者向けのテキスト分析・マイニングの中核ツール

- [騰訊雲 NLP](https://cloud.tencent.com/product/nlp) 並列計算と分散クローラに独特の意味解析技術を組み合わせ、NLP・トランスコード・抽出・データ取得を一括満たす

- [訊飛開放平台](https://www.xfyun.cn/) 音声対話を中核とする AI オープンプラットフォーム

- [搜狗実験室](http://www.sogou.com/labs/webservice/) 分詞と品詞タグ付け

- [玻森データ](http://bosonnlp.com/) 上海玻森データ科技。中国語意味解析技術に特化

- [雲孚科技](https://www.yunfutech.com/) NLP ツールキット、知識グラフ、テキストマイニング、対話システム、世論分析など

- [智言科技](http://www.webot.ai) 深層学習と知識グラフ技術に注力する AI 企業

- [追一科技](https://zhuiyi.ai/) 深層学習と自然言語処理を主力とする


<br />
<br />

## 学習資料 Learning Materials

- [中国語 Deep Learning Book](https://github.com/exacity/deeplearningbook-chinese)

- [Stanford CS224n Natural Language Processing with Deep Learning 2017](http://web.stanford.edu/class/cs224n/syllabus.html)

- [Oxford CS DeepNLP 2017](https://github.com/oxford-cs-deepnlp-2017)

- [Georgia Tech CS 4650 および 7650「Natural Language」のコース資料] (https://github.com/jacobeisenstein/gt-nlp-class)

- [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) by Dan Jurafsky and James H. Martin

- [52nlp 我爱自然语言处理](http://www.52nlp.cn/)

- [hankcs 码农场](http://www.hankcs.com/)

- [テキスト処理実践講義資料](https://github.com/Roshanson/TextInfoExp) テキスト特徴抽出（TF-IDF）、テキスト分類、クラスタリング、word2vec 単語ベクトル学習、類義語詞林による中国語類似度計算、文書自動要約、情報抽出、感情分析と意見マイニング等の実験を含む。

- [nlp_tasks](https://github.com/Kyubyong/nlp_tasks) Natural Language Processing Tasks and Selected References

- [NLP 研究入門の道](https://github.com/zibuyu/research_tao) 清華大学の劉知遠先生による


<br />
<br />
