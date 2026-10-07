# 中文自然語言處理（Chinese NLP）

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

針對中文自然語言處理（NLP）的精選資源列表。

中文自然語言處理相關資料

圖片來自復旦大學邱錫鵬教授

![](/images/1.jpg)


## 目錄 Contents

### 1. [中文 NLP 工具 Chinese NLP Toolkits](https://github.com/crownpku/awesome-chinese-nlp#chinese-nlp-toolkits-中文nlp工具)

* #### [綜合 NLP 工具包 Toolkits](https://github.com/crownpku/awesome-chinese-nlp#toolkits-综合nlp工具包-1)
* #### [常用的英文或支援多語言的 NLP 工具包 Popular NLP Toolkits for English/Multi-Language](https://github.com/crownpku/awesome-chinese-nlp#popular-nlp-toolkits-for-englishmulti-language-常用的英文或支持多语言的nlp工具包-1)
* #### [中文分詞 Chinese Word Segment](https://github.com/crownpku/awesome-chinese-nlp#chinese-word-segment-中文分词-1)
* #### [資訊擷取 Information Extraction](https://github.com/crownpku/awesome-chinese-nlp#information-extraction-信息提取-1)
* #### [問答和聊天機器人 QA & Chatbot](https://github.com/crownpku/awesome-chinese-nlp#qa--chatbot-问答和聊天机器人-1)
* #### [多模態表徵與檢索 Multi-Modal Representation & Retrieval](https://github.com/crownpku/awesome-chinese-nlp#multi-modal-representation--retrieval-多模态表征与检索-1)
### 2. [中文語料 Corpus](https://github.com/crownpku/awesome-chinese-nlp#corpus-中文语料)
### 3. [中文 NLP 學術組織及競賽 Organizations](https://github.com/crownpku/awesome-chinese-nlp#organizations-%E4%B8%AD%E6%96%87nlp%E5%AD%A6%E6%9C%AF%E7%BB%84%E7%BB%87%E5%8F%8A%E7%AB%9E%E8%B5%9B)
### 4. [中文 NLP 商業服務 Industry](https://github.com/crownpku/awesome-chinese-nlp#industry-%E4%B8%AD%E6%96%87nlp%E5%95%86%E4%B8%9A%E6%9C%8D%E5%8A%A1)
### 5. [學習資料 Learning Materials](https://github.com/crownpku/awesome-chinese-nlp#learning-materials-学习资料)


<br />
<br />

## 中文 NLP 工具 Chinese NLP Toolkits

### 綜合 NLP 工具包 Toolkits

- [THULAC 中文詞法分析工具包](http://thulac.thunlp.org/) by 清華 (C++/Java/Python)

- [NLPIR](https://github.com/NLPIR-team/NLPIR) by 中科院 (Java)

- [LTP 語言技術平台](https://github.com/HIT-SCIR/ltp) by 哈工大 (C++)  [pylyp](https://github.com/HIT-SCIR/pyltp) LTP 的 python 封裝

- [FudanNLP](https://github.com/FudanNLP/fnlp) by 復旦 (Java)

- [BaiduLac](https://github.com/baidu/lac) by 百度 Baidu 開源的中文詞法分析工具，包含分詞、詞性標註與命名實體識別。

- [HanLP](https://github.com/hankcs/HanLP) (Java)

- [FastNLP](https://github.com/fastnlp/fastNLP) (Python) 一款輕量級的 NLP 處理套件。

- [SnowNLP](https://github.com/isnowfy/snownlp) (Python) 用於處理中文文本的 Python 庫

- [YaYaNLP](https://github.com/Tony-Wang/YaYaNLP) (Python) 純 python 編寫的中文自然語言處理包，取名於「牙牙學語」

- [小明NLP](https://github.com/SeanLee97/xmnlp) (Python) 輕量級中文自然語言處理工具

- [DeepNLP](https://github.com/rockingdingo/deepnlp) (Python) 基於 Tensorflow 實作、帶有中文預訓練模型的深度學習 NLP 流水線。

- [chinese_nlp](https://github.com/taozhijiang/chinese_nlp) (C++ & Python) 中文自然語言處理工具與範例

- [lightNLP](https://github.com/smilelight/lightNLP) (Python) 基於 Pytorch 和 torchtext 的自然語言處理深度學習框架

- [Chinese-Annotator](https://github.com/crownpku/Chinese-Annotator) (Python) 中文文本標註工具 Annotator for Chinese Text Corpus

- [Poplar](https://github.com/synyi/poplar) (Typescript) 基於 Web 的自然語言處理（NLP）標註工具

- [Jiagu](https://github.com/ownthink/Jiagu) (Python) Jiagu 以 BiLSTM 等模型為基礎，使用大規模語料訓練而成。將提供中文分詞、詞性標註、命名實體識別、情感分析、知識圖譜關係抽取、關鍵詞抽取、文本摘要、新詞發現等常用自然語言處理功能。

- [SmoothNLP](https://github.com/smoothnlp/SmoothNLP) (Python & Java) 專注於可解釋的 NLP 技術

- [FoolNLTK](https://github.com/rockyzhengwu/FoolNLTK) (Python & Java) 一個中文自然語言處理工具包 A Chinese Nature Language Toolkit

### 常用的英文或支援多語言的 NLP 工具包 Popular NLP Toolkits for English/Multi-Language

- [CoreNLP](https://github.com/stanfordnlp/CoreNLP) by Stanford (Java) 一套 Java 核心 NLP 工具。

- [Stanza](https://github.com/stanfordnlp/stanza) by Stanford (Python) 支援多種人類語言的 Python NLP 庫

- [NLTK](http://www.nltk.org/) (Python) Natural Language Toolkit 自然語言工具包

- [spaCy](https://spacy.io/) (Python) 工業級自然語言處理，配有 [線上課程](https://course.spacy.io/)

- [textacy](https://github.com/chartbeat-labs/textacy) (Python) 在 spaCy 之前與之後都能用的 NLP

- [OpenNLP](https://opennlp.apache.org/) (Java) 基於機器學習的自然語言文本處理工具包。

- [gensim](https://github.com/RaRe-Technologies/gensim) (Python) Gensim 是一個用於主題建模、文件索引與大規模語料相似度檢索的 Python 庫。

- [Kashgari](https://github.com/BrikerMan/Kashgari) - 簡單而強大的 NLP 框架，5 分鐘構建用於命名實體識別（NER）、詞性標註（PoS）與文本分類的先進模型。包含 BERT 與 word2vec。


### 中文分詞 Chinese Word Segment

- [Jieba 結巴中文分詞](https://github.com/fxsjy/jieba) (Python 及大量其它程式語言衍生) 做最好的 Python 中文分詞組件

- [北大中文分詞工具](https://github.com/lancopku/pkuseg-python) (Python) 高準確度中文分詞工具，簡單易用，跟現有開源工具相比大幅提高了分詞的準確率。

- [kcws 深度學習中文分詞](https://github.com/koth/kcws) (Python) BiLSTM+CRF 與 IDCNN+CRF

- [ID-CNN-CWS](https://github.com/hankcs/ID-CNN-CWS) (Python) 用於中文分詞的迭代膨脹卷積 Iterated Dilated Convolutions for Chinese Word Segmentation

- [Genius 中文分詞](https://github.com/duanhongyi/genius) (Python) Genius 是一個開源的 python 中文分詞組件，採用 CRF（條件隨機場）演算法。

- [loso 中文分詞](https://github.com/fangpenlin/loso) (Python)

- [yaha "啞哈"中文分詞](https://github.com/jannson/yaha) (Python)

- [ChineseWordSegmentation](https://github.com/Moonshile/ChineseWordSegmentation) (Python) 無需語料庫的中文分詞演算法 Chinese word segmentation algorithm without corpus

- [Go 語言高效能分詞](https://github.com/go-ego/gse) (Go) Go 高效文本分詞；支援英文、中文、日文等。

- [Ansj中文分詞](https://github.com/NLPchina/ansj_seg) (java) 基於 n-Gram+CRF+HMM 的中文分詞 java 實作


### 資訊擷取 Information Extraction

- [MITIE](https://github.com/mit-nlp/MITIE) (C++) 用於資訊擷取的庫與工具

- [Duckling](https://github.com/facebookincubator/duckling) (Haskell) 用於表達、測試與評估可組合語言規則的引擎與工具。

- [IEPY](https://github.com/machinalis/iepy) (Python)  IEPY 是一個專注於關係抽取的開源資訊擷取工具。

- [Snorkel](https://github.com/HazyResearch/snorkel) 專注於資訊擷取的訓練資料建立與管理系統

- [基於 TensorFlow 的 LSTM 神經網路關係抽取](https://github.com/thunlp/TensorFlow-NRE)

- [用於中文命名實體識別的神經網路模型](https://github.com/zjy-ucas/ChineseNER)

- [bert-chinese-ner](https://github.com/ProHiryu/bert-chinese-ner) 使用預訓練語言模型 BERT 做中文 NER

- [Information-Extraction-Chinese](https://github.com/crownpku/Information-Extraction-Chinese) 使用 IDCNN/biLSTM+CRF 做中文命名實體識別、biGRU+2ATT 做關係抽取的中文實體識別與關係提取

- [Familia](https://github.com/baidu/Familia) 百度出品的工業級主題建模工具包 A Toolkit for Industrial Topic Modeling

- [Text Classification](https://github.com/brightmart/text_classification) 各類深度學習文本分類模型等。用知乎問答語料作為測試資料。

- [ComplexEventExtraction](https://github.com/liuhuanyong/ComplexEventExtraction) 中文複合事件的概念與顯式模式，包括條件事件、因果事件、順承事件、反轉事件等事件抽取，並形成事理圖譜。

- [TextRank4ZH](https://github.com/letiantian/TextRank4ZH) 從中文文本中自動提取關鍵詞和摘要


### 問答和聊天機器人 QA & Chatbot

- [Rasa NLU](https://github.com/RasaHQ/rasa_nlu) (Python) 將自然語言轉為結構化資料，中文分支見 [Rasa NLU Chi](https://github.com/crownpku/Rasa_NLU_Chi)

- [Rasa Core](https://github.com/RasaHQ/rasa_core) (Python) 基於機器學習的對話引擎，用於會話軟體

- [Chatstack](https://github.com/crownpku/Chatstack-Doc) 用於構建中文 NLU 系統的完整流水線 UI

- [Snips NLU](https://github.com/snipsco/snips-nlu) (Python) Snips NLU 是一個能夠解析自然語言句子並提取結構化資訊的 Python 庫。

- [DeepPavlov](https://github.com/deepmipt/DeepPavlov) (Python) 用於構建端到端對話系統與訓練聊天機器人的開源庫。

- [ChatScript](https://github.com/bwilcox-1234/ChatScript) 自然語言工具/對話管理器，基於規則的聊天機器人引擎。

- [Chatterbot](https://github.com/gunthercox/ChatterBot) (Python) ChatterBot 是一個用於創建聊天機器人的機器學習對話引擎。

- [Chatbot](https://github.com/zake7749/Chatbot) (Python) 基於向量匹配的情境式聊天機器人

- [Tipask](https://github.com/sdfsky/tipask) (PHP) 一款開放源碼的 PHP 問答系統，基於 Laravel 框架開發，容易擴展，具有強大的負載能力和穩定性。

- [QuestionAnsweringSystem](https://github.com/ysc/QuestionAnsweringSystem) (Java) 一個 Java 實現的人機問答系統，能夠自動分析問題並給出候選答案。

- [QA-Snake](https://github.com/SnakeHacker/QA-Snake) (Python) 基於多搜尋引擎和深度學習技術的自動問答

- [使用 TensorFlow 實現的 Sequence to Sequence 聊天機器人模型](https://github.com/qhduan/Seq2Seq_Chatbot_QA) (Python)

- [使用深度學習演算法實現的中文閱讀理解問答系統](https://github.com/S-H-Y-GitHub/QA) (Python)

- [AnyQ by Baidu](https://github.com/baidu/AnyQ) 主要包含面向 FAQ 集合的問答系統框架、文本語義匹配工具 SimNet。

- [DuReader 中文閱讀理解 Baseline 代碼](https://github.com/baidu/DuReader) (Python)

- [基於 SmartQQ 的自動機器人框架](https://github.com/Yinzo/SmartQQBot) (Python)

- [QASystemOnMedicalKG](https://github.com/liuhuanyong/QASystemOnMedicalKG) (Python) 以疾病為中心的一定規模醫藥領域知識圖譜，並以該知識圖譜完成自動問答與分析服務。

- [GPT2-chitchat](https://github.com/yangjianxin1/GPT2-chitchat) (Python) 用於中文閒聊的 GPT2 模型

- [CDial-GPT](https://github.com/thu-coai/CDial-GPT) (Python) 提供了一個大規模中文對話資料集，並提供了在此資料集上的中文對話預訓練模型（中文 GPT 模型）


### 多模態表徵與檢索 Multi-Modal Representation & Retrieval

- [Chinese-CLIP](https://github.com/OFA-Sys/Chinese-CLIP) (Python) Chinese-CLIP 是中文多模態圖文表徵預訓練模型。其基於 OpenAI 的 CLIP 模型結構，利用大規模中文原生圖文語料完成預訓練，目前開源了多個模型規模，同時公開了技術報告論文及檢索 demo


<br />
<br />

## 中文語料 Corpus

- [開放知識圖譜 OpenKG.cn](http://openkg.cn)

- [開放中文知識圖譜的 schema](https://github.com/cnschema/cnschema)

- [大規模中文概念圖譜 CN-Probase](http://kw.fudan.edu.cn/cnprobase/search/) [公眾號介紹](https://mp.weixin.qq.com/s?__biz=MzI0MTI1Nzk1MA==&mid=2651675884&idx=1&sn=1a43a93fd5bb53c8a9e48518bfa41db8&chksm=f2f7a05dc580294b227332b1051bfa2e5c756c72efb4d102c83613185b571ac31343720a6eae&mpshare=1&scene=1&srcid=1113llNDS1MvoadhCki83ERW#rd)

- [大規模 1.4 億中文知識圖譜開源下載](https://github.com/ownthink/KnowledgeGraphData)

- [農業知識圖譜](https://github.com/qq547276542/Agriculture_KnowledgeGraph) 農業領域的資訊檢索，命名實體識別，關係抽取，分類樹構建，資料挖掘

- [CLDC 中文語言資源聯盟](http://www.chineseldc.org/)

- [中文 Wikipedia Dump](https://dumps.wikimedia.org/zhwiki/)

- [基於不同語料、不同模型（比如 BERT、GPT）的中文預訓練模型](https://github.com/dbiir/UER-py) 中文預訓練模型框架，支援不同語料、編碼器、目標任務的預訓練模型（from RUC and Tencent）

- [OpenCLaP](https://github.com/thunlp/OpenCLaP) 多領域開源中文預訓練語言模型倉庫 (from Tsinghua)

- [98 年人民日報詞性標註庫@百度盤](https://pan.baidu.com/s/1gd6mslt)

- [搜狗 20061127 新聞語料(包含分類)@百度盤](https://pan.baidu.com/s/1bnhXX6Z)

- [UDChinese](https://github.com/UniversalDependencies/UD_Chinese) (用於訓練 spaCy POS)

- [中文 word2vec 模型](https://github.com/to-shimo/chinese-word2vec)

- [上百種預訓練中文詞向量](https://github.com/Embedding/Chinese-Word-Vectors)

- [Tencent AI Lab Embedding Corpus for Chinese Words and Phrases](https://ai.tencent.com/ailab/nlp/embedding.html)

- [中文預訓練 BERT with Whole Word Masking](https://github.com/ymcui/Chinese-BERT-wwm)

- [中文 GPT2 訓練代碼](https://github.com/Morizeyao/GPT2-Chinese) 可以寫詩，新聞，小說，或是訓練通用語言模型。

- [中文語言理解測評基準 ChineseGLUE](https://github.com/chineseGLUE/chineseGLUE) 包括代表性的資料集、基準(預訓練)模型、語料庫、排行榜。

- [中華新華字典資料庫](https://github.com/pwxcoo/chinese-xinhua) 包括歇後語，成語，詞語，漢字。

- [Synonyms: 中文近義詞工具包](https://github.com/huyingxi/Synonyms/) 基於維基百科中文和 word2vec 訓練的近義詞庫，封裝為 python 包文件。

- [Chinese_conversation_sentiment](https://github.com/z17176/Chinese_conversation_sentiment) 一個可用於情感分析的中文情感資料集。

- [中文突發事件語料庫](https://github.com/shijiebei2009/CEC-Corpus) Chinese Emergency Corpus

- [dgk_lost_conv 中文對白語料](https://github.com/rustch3n/dgk_lost_conv) chinese conversation corpus

- [用於訓練中英文對話系統的語料庫](https://github.com/candlewill/Dialog_Corpus) Datasets for Training Chatbot System

- [八卦版問答中文語料](https://github.com/zake7749/Gossiping-Chinese-Corpus)

- [中文公開聊天語料庫](https://github.com/codemayq/chaotbot_corpus_Chinese)

- [中國股市公告資訊爬取](https://github.com/startprogress/China_stock_announcement) 透過 python 腳本從巨潮網絡的伺服器獲取中國股市（sz, sh）的公告(上市公司和監管機構)

- [tushare 財經資料介面](http://tushare.org/) TuShare 是一個免費、開源的 python 財經資料介面包。

- [金融文本資料集](https://github.com/smoothnlp/FinancialDatasets) SmoothNLP 金融文本資料集(公開) Public Financial Datasets for NLP Researches

- [保險行業語料庫](https://github.com/Samurais/insuranceqa-corpus-zh)   [[52nlp 介紹 Blog](http://www.52nlp.cn/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E4%BF%9D%E9%99%A9%E8%A1%8C%E4%B8%9A%E9%97%AE%E7%AD%94%E5%BC%80%E6%94%BE%E6%95%B0%E6%8D%AE%E9%9B%86)] 面向機器學習的保險領域開放資料 OpenData in insurance area for Machine Learning Tasks

- [最全中華古詩詞資料庫](https://github.com/chinese-poetry/chinese-poetry) 唐宋兩朝近一萬四千古詩人, 接近 5.5 萬首唐詩加 26 萬宋詩. 兩宋時期 1564 位詞人，21050 首詞。

- [DuReader 中文閱讀理解資料](http://ai.baidu.com/broad/subordinate?dataset=dureader)

- [中文語料小資料](https://github.com/crownpku/Small-Chinese-Corpus) 包含了中文命名實體識別、中文關係識別、中文閱讀理解等一些小量資料

- [Chinese-Literature-NER-RE-Dataset](https://github.com/lancopku/Chinese-Literature-NER-RE-Dataset) 面向中文文學文本的語篇級命名實體識別與關係抽取資料集 A Discourse-Level Named Entity Recognition and Relation Extraction Dataset for Chinese Literature Text

- [ChineseTextualInference](https://github.com/liuhuanyong/ChineseTextualInference) 中文文本推斷專案, 包括 88 萬文本蘊含中文文本蘊含資料集的翻譯與構建, 基於深度學習的文本蘊含判定模型構建.

- [大規模中文自然語言處理語料](https://github.com/brightmart/nlp_chinese_corpus) 維基百科(wiki2019zh), 新聞語料(news2016zh), 百科問答(baike2018qa)

- [中文人名語料庫](https://github.com/wainshine/Chinese-Names-Corpus) 中文姓名, 姓氏, 名字, 稱呼, 日本人名, 翻譯人名, 英文人名。

- [公司名、機構名語料庫](https://github.com/wainshine/Company-Names-Corpus) 公司簡稱, 縮寫, 品牌詞, 企業名。

- [中文敏感詞詞庫](https://github.com/observerss/textfilter) 敏感詞過濾的幾種實作+某 1w 詞敏感詞庫

- [中文簡稱詞庫](https://github.com/zhangyics/Chinese-abbreviation-dataset) 包含否定全稱的中文縮寫語料庫 A corpus of Chinese abbreviation, including negative full forms.

- [中文資料預處理材料](https://github.com/dongxiexidian/Chinese) 中文分詞詞典和中文停用詞

- [漢語拆字字典](https://github.com/kfcd/chaizi)

- [SentiBridge: 中文實體情感知識庫](https://github.com/rainarch/SentiBridge) 刻畫人們如何描述某個實體，包含新聞、旅遊、餐飲，共計 30 萬對。

- [OpenCorpus](https://github.com/hankcs/OpenCorpus) 一系列可自由獲取（中文）語料的集合。

- [ChineseNlpCorpus](https://github.com/SophonPlus/ChineseNlpCorpus) 情感/觀點/評論 傾向性分析，中文命名實體識別，推薦系統

- [FinancialDatasets](https://github.com/smoothnlp/FinancialDatasets) SmoothNLP 金融文本資料集(公開) Public Financial Datasets for NLP Researches Only

- [People's Daily & Children's Fairy Tale](https://github.com/ymcui/Chinese-Cloze-RC) PD&CFT: 一個中文閱讀理解資料集 A Chinese Reading Comprehension Dataset
- [中文維基 23 萬高質量條目-更新至 23 年 7 月-已過濾敏感或爭議性資訊](https://huggingface.co/datasets/pleisto/wikipedia-cn-20230720-filtered)

<br />
<br />

## 中文 NLP 學術組織及競賽 Organizations

- [清華大學自然語言處理與人文計算實驗室](http://nlp.csai.tsinghua.edu.cn/site2/index.php/zh)

- [北京大學計算語言學教育部重點實驗室](http://klcl.pku.edu.cn/)

- [中科院計算所自然語言處理研究組](http://www.nlpir.org/)

- [哈工大智能技術與自然語言處理實驗室](http://insun.hit.edu.cn/)

- [哈工大社會計算與資訊檢索研究中心](http://ir.hit.edu.cn/)

- [復旦大學自然語言處理組](http://nlp.fudan.edu.cn/)

- [蘇州大學自然語言處理組](http://nlp.suda.edu.cn/index.html)

- [南京大學自然語言處理研究組](http://nlp.nju.edu.cn)

- [東北大學自然語言處理實驗室](http://www.nlplab.com/)

- [廈門大學智能科學與技術系自然語言處理實驗室](http://nlp.xmu.edu.cn/)

- [鄭州大學自然語言處理實驗室](http://nlp.zzu.edu.cn/)

- [微軟亞洲研究院自然語言處理](https://www.msra.cn/zh-cn/research/nlp)

- [華為諾亞方舟實驗室](http://www.noahlab.com.hk/)

- [CUHK Text Mining Group](http://www1.se.cuhk.edu.hk/~textmine/)

- [PolyU Social Media Mining Group](http://www4.comp.polyu.edu.hk/~cswjli/Group.html)

- [HKUST Human Language Technology Center](http://www.cse.ust.hk/~hltc/)

- [National Taiwan University NLP Lab](http://nlg.csie.ntu.edu.tw/)

- [中國中文資訊學會](http://www.cipsc.org.cn/)

- [NLP Conference Calender](http://cs.rochester.edu/~omidb/nlpcalendar/) NLP 領域的主要會議、期刊、研討會與共享任務。

- [2017 第一屆「訊飛杯」中文機器閱讀理解評測](http://www.cips-cl.org/static/CCL2017/iflytek.html)

- [2017 AI-Challenger 圖像中文描述](https://www.challenger.ai/competition/caption) 用一句話描述給定圖像中的主要資訊，挑戰中文語境下的圖像理解問題。

- [2017 AI-Challenger 英中機器文本翻譯](https://www.challenger.ai/competition/translation) 用大規模的資料，提升英中文本機器翻譯模型的能力。

- [2017 知乎看山杯機器學習挑戰賽](https://biendata.com/competition/zhihu/) 根據知乎給出的問題及話題標籤的綁定關係的訓練資料，訓練出對未標註資料自動標註的模型。

- [2018 開放領域的中文問答任務](https://biendata.com/competition/CCKS2018_4/) 對於給定的一句中文問題，問答系統從給定知識庫中選擇若干實體或屬性值作為該問題的答案。

- [2018 微眾銀行智能客服問句匹配大賽](https://biendata.com/competition/CCKS2018_3/) 針對中文的真實客服語料，進行問句意圖匹配；給定兩個語句，判定兩者意圖是否相近。


<br />
<br />

## 中文 NLP 商業服務 Industry

- [華為雲 NLP](https://www.huaweicloud.com/product/nlp.html) 針對各類企業及開發者提供的用於文本分析及挖掘的雲服務，旨在幫助用戶高效的處理文本

- [百度雲 NLP](https://cloud.baidu.com/product/nlp.html) 提供業界領先的自然語言處理技術，提供優質文本處理及理解技術

- [阿里雲 NLP](https://data.aliyun.com/product/nlp) 為各類企業及開發者提供的用於文本分析及挖掘的核心工具

- [騰訊雲 NLP](https://cloud.tencent.com/product/nlp) 基於平行計算、分散式爬蟲系統，結合獨特的語義分析技術，一站滿足 NLP、轉碼、抽取、資料抓取等需求

- [訊飛開放平台](https://www.xfyun.cn/) 以語音互動為核心的人工智慧開放平台

- [搜狗實驗室](http://www.sogou.com/labs/webservice/) 分詞和詞性標註

- [玻森資料](http://bosonnlp.com/) 上海玻森資料科技有限公司，專注中文語義分析技術

- [雲孚科技](https://www.yunfutech.com/) NLP 工具包、知識圖譜、文本挖掘、對話系統、輿情分析等

- [智言科技](http://www.webot.ai) 專注於深度學習和知識圖譜技術突破的人工智慧公司

- [追一科技](https://zhuiyi.ai/) 主攻深度學習和自然語言處理


<br />
<br />

## 學習資料 Learning Materials

- [中文 Deep Learning Book](https://github.com/exacity/deeplearningbook-chinese)

- [Stanford CS224n Natural Language Processing with Deep Learning 2017](http://web.stanford.edu/class/cs224n/syllabus.html)

- [Oxford CS DeepNLP 2017](https://github.com/oxford-cs-deepnlp-2017)

- [Course materials for Georgia Tech CS 4650 and 7650, "Natural Language"] (https://github.com/jacobeisenstein/gt-nlp-class)

- [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) by Dan Jurafsky and James H. Martin

- [52nlp 我愛自然語言處理](http://www.52nlp.cn/)

- [hankcs 碼農場](http://www.hankcs.com/)

- [文本處理實踐課資料](https://github.com/Roshanson/TextInfoExp) 文本處理實踐課資料，包含文本特徵提取（TF-IDF），文本分類，文本聚類，word2vec 訓練詞向量及同義詞詞林中文詞語相似度計算、文檔自動摘要，資訊抽取，情感分析與觀點挖掘等實驗。

- [nlp_tasks](https://github.com/Kyubyong/nlp_tasks) Natural Language Processing Tasks and Selected References

- [NLP 研究入門之道](https://github.com/zibuyu/research_tao) from 清華劉知遠老師

- [Chinese NLP](https://chinesenlp.xyz/#/) 中文自然語言處理的共享任務、資料集與最新成果


<br />
<br />
