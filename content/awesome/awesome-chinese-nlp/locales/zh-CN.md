# 中文自然语言处理（Chinese NLP）

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

面向中文自然语言处理（NLP）的精选资源列表。

中文自然语言处理相关资料

图片来自复旦大学邱锡鹏教授

![](/images/1.jpg)


## 目录 Contents

### 1. [中文 NLP 工具 Chinese NLP Toolkits](https://github.com/crownpku/awesome-chinese-nlp#chinese-nlp-toolkits-中文nlp工具)

* #### [综合 NLP 工具包 Toolkits](https://github.com/crownpku/awesome-chinese-nlp#toolkits-综合nlp工具包-1)
* #### [常用的英文或支持多语言的 NLP 工具包 Popular NLP Toolkits for English/Multi-Language](https://github.com/crownpku/awesome-chinese-nlp#popular-nlp-toolkits-for-englishmulti-language-常用的英文或支持多语言的nlp工具包-1)
* #### [中文分词 Chinese Word Segment](https://github.com/crownpku/awesome-chinese-nlp#chinese-word-segment-中文分词-1)
* #### [信息提取 Information Extraction](https://github.com/crownpku/awesome-chinese-nlp#information-extraction-信息提取-1)
* #### [问答和聊天机器人 QA & Chatbot](https://github.com/crownpku/awesome-chinese-nlp#qa--chatbot-问答和聊天机器人-1)
* #### [多模态表征与检索 Multi-Modal Representation & Retrieval](https://github.com/crownpku/awesome-chinese-nlp#multi-modal-representation--retrieval-多模态表征与检索-1)
### 2. [中文语料 Corpus](https://github.com/crownpku/awesome-chinese-nlp#corpus-中文语料)
### 3. [中文 NLP 学术组织及竞赛 Organizations](https://github.com/crownpku/awesome-chinese-nlp#organizations-%E4%B8%AD%E6%96%87nlp%E5%AD%A6%E6%9C%AF%E7%BB%84%E7%BB%87%E5%8F%8A%E7%AB%9E%E8%B5%9B)
### 4. [中文 NLP 商业服务 Industry](https://github.com/crownpku/awesome-chinese-nlp#industry-%E4%B8%AD%E6%96%87nlp%E5%95%86%E4%B8%9A%E6%9C%8D%E5%8A%A1)
### 5. [学习资料 Learning Materials](https://github.com/crownpku/awesome-chinese-nlp#learning-materials-学习资料)


<br />
<br />

## 中文 NLP 工具 Chinese NLP Toolkits

### 综合 NLP 工具包 Toolkits

- [THULAC 中文词法分析工具包](http://thulac.thunlp.org/) by 清华 (C++/Java/Python)

- [NLPIR](https://github.com/NLPIR-team/NLPIR) by 中科院 (Java)

- [LTP 语言技术平台](https://github.com/HIT-SCIR/ltp) by 哈工大 (C++)  [pylyp](https://github.com/HIT-SCIR/pyltp) LTP 的 python 封装

- [FudanNLP](https://github.com/FudanNLP/fnlp) by 复旦 (Java)

- [BaiduLac](https://github.com/baidu/lac) by 百度 Baidu 开源的中文词法分析工具，包含分词、词性标注与命名实体识别。

- [HanLP](https://github.com/hankcs/HanLP) (Java)

- [FastNLP](https://github.com/fastnlp/fastNLP) (Python) 一款轻量级的 NLP 处理套件。

- [SnowNLP](https://github.com/isnowfy/snownlp) (Python) 用于处理中文文本的 Python 库

- [YaYaNLP](https://github.com/Tony-Wang/YaYaNLP) (Python) 纯 python 编写的中文自然语言处理包，取名于“牙牙学语”

- [小明NLP](https://github.com/SeanLee97/xmnlp) (Python) 轻量级中文自然语言处理工具

- [DeepNLP](https://github.com/rockingdingo/deepnlp) (Python) 基于 Tensorflow 实现、带有中文预训练模型的深度学习 NLP 流水线。

- [chinese_nlp](https://github.com/taozhijiang/chinese_nlp) (C++ & Python) 中文自然语言处理工具与示例

- [lightNLP](https://github.com/smilelight/lightNLP) (Python) 基于 Pytorch 和 torchtext 的自然语言处理深度学习框架

- [Chinese-Annotator](https://github.com/crownpku/Chinese-Annotator) (Python) 中文文本标注工具 Annotator for Chinese Text Corpus

- [Poplar](https://github.com/synyi/poplar) (Typescript) 基于 Web 的自然语言处理（NLP）标注工具

- [Jiagu](https://github.com/ownthink/Jiagu) (Python) Jiagu 以 BiLSTM 等模型为基础，使用大规模语料训练而成。将提供中文分词、词性标注、命名实体识别、情感分析、知识图谱关系抽取、关键词抽取、文本摘要、新词发现等常用自然语言处理功能。

- [SmoothNLP](https://github.com/smoothnlp/SmoothNLP) (Python & Java) 专注于可解释的 NLP 技术

- [FoolNLTK](https://github.com/rockyzhengwu/FoolNLTK) (Python & Java) 一个中文自然语言处理工具包 A Chinese Nature Language Toolkit

### 常用的英文或支持多语言的 NLP 工具包 Popular NLP Toolkits for English/Multi-Language

- [CoreNLP](https://github.com/stanfordnlp/CoreNLP) by Stanford (Java) 一套 Java 核心 NLP 工具。

- [Stanza](https://github.com/stanfordnlp/stanza) by Stanford (Python) 支持多种人类语言的 Python NLP 库

- [NLTK](http://www.nltk.org/) (Python) Natural Language Toolkit 自然语言工具包

- [spaCy](https://spacy.io/) (Python) 工业级自然语言处理，配有 [在线课程](https://course.spacy.io/)

- [textacy](https://github.com/chartbeat-labs/textacy) (Python) 在 spaCy 之前与之后都能用的 NLP

- [OpenNLP](https://opennlp.apache.org/) (Java) 基于机器学习的自然语言文本处理工具包。

- [gensim](https://github.com/RaRe-Technologies/gensim) (Python) Gensim 是一个用于主题建模、文档索引与大规模语料相似度检索的 Python 库。

- [Kashgari](https://github.com/BrikerMan/Kashgari) - 简单而强大的 NLP 框架，5 分钟构建用于命名实体识别（NER）、词性标注（PoS）与文本分类的先进模型。包含 BERT 与 word2vec 词向量。


### 中文分词 Chinese Word Segment

- [Jieba 结巴中文分词](https://github.com/fxsjy/jieba) (Python 及大量其它编程语言衍生) 做最好的 Python 中文分词组件

- [北大中文分词工具](https://github.com/lancopku/pkuseg-python) (Python) 高准确度中文分词工具，简单易用，跟现有开源工具相比大幅提高了分词的准确率。

- [kcws 深度学习中文分词](https://github.com/koth/kcws) (Python) BiLSTM+CRF 与 IDCNN+CRF

- [ID-CNN-CWS](https://github.com/hankcs/ID-CNN-CWS) (Python) 用于中文分词的迭代膨胀卷积 Iterated Dilated Convolutions for Chinese Word Segmentation

- [Genius 中文分词](https://github.com/duanhongyi/genius) (Python) Genius 是一个开源的 python 中文分词组件，采用 CRF（条件随机场）算法。

- [loso 中文分词](https://github.com/fangpenlin/loso) (Python)

- [yaha "哑哈"中文分词](https://github.com/jannson/yaha) (Python)

- [ChineseWordSegmentation](https://github.com/Moonshile/ChineseWordSegmentation) (Python) 无需语料库的中文分词算法 Chinese word segmentation algorithm without corpus

- [Go 语言高性能分词](https://github.com/go-ego/gse) (Go) Go 高效文本分词；支持英文、中文、日文等。

- [Ansj中文分词](https://github.com/NLPchina/ansj_seg) (java) 基于 n-Gram+CRF+HMM 的中文分词 java 实现


### 信息提取 Information Extraction

- [MITIE](https://github.com/mit-nlp/MITIE) (C++) 用于信息提取的库与工具

- [Duckling](https://github.com/facebookincubator/duckling) (Haskell) 用于表达、测试与评估可组合语言规则的引擎与工具。

- [IEPY](https://github.com/machinalis/iepy) (Python)  IEPY 是一个专注于关系抽取的开源信息提取工具。

- [Snorkel](https://github.com/HazyResearch/snorkel) 专注于信息提取的训练数据创建与管理系统

- [基于 TensorFlow 的 LSTM 神经网络关系抽取](https://github.com/thunlp/TensorFlow-NRE)

- [用于中文命名实体识别的神经网络模型](https://github.com/zjy-ucas/ChineseNER)

- [bert-chinese-ner](https://github.com/ProHiryu/bert-chinese-ner) 使用预训练语言模型 BERT 做中文 NER

- [Information-Extraction-Chinese](https://github.com/crownpku/Information-Extraction-Chinese) 使用 IDCNN/biLSTM+CRF 做中文命名实体识别、biGRU+2ATT 做关系抽取的中文实体识别与关系提取

- [Familia](https://github.com/baidu/Familia) 百度出品的工业级主题建模工具包 A Toolkit for Industrial Topic Modeling

- [Text Classification](https://github.com/brightmart/text_classification) 各类深度学习文本分类模型等。用知乎问答语料作为测试数据。

- [ComplexEventExtraction](https://github.com/liuhuanyong/ComplexEventExtraction) 中文复合事件的概念与显式模式，包括条件事件、因果事件、顺承事件、反转事件等事件抽取，并形成事理图谱。

- [TextRank4ZH](https://github.com/letiantian/TextRank4ZH) 从中文文本中自动提取关键词和摘要


### 问答和聊天机器人 QA & Chatbot

- [Rasa NLU](https://github.com/RasaHQ/rasa_nlu) (Python) 将自然语言转为结构化数据，中文分支见 [Rasa NLU Chi](https://github.com/crownpku/Rasa_NLU_Chi)

- [Rasa Core](https://github.com/RasaHQ/rasa_core) (Python) 基于机器学习的对话引擎，用于会话软件

- [Chatstack](https://github.com/crownpku/Chatstack-Doc) 用于构建中文 NLU 系统的完整流水线 UI

- [Snips NLU](https://github.com/snipsco/snips-nlu) (Python) Snips NLU 是一个能够解析自然语言句子并提取结构化信息的 Python 库。

- [DeepPavlov](https://github.com/deepmipt/DeepPavlov) (Python) 用于构建端到端对话系统与训练聊天机器人的开源库。

- [ChatScript](https://github.com/bwilcox-1234/ChatScript) 自然语言工具/对话管理器，基于规则的聊天机器人引擎。

- [Chatterbot](https://github.com/gunthercox/ChatterBot) (Python) ChatterBot 是一个用于创建聊天机器人的机器学习对话引擎。

- [Chatbot](https://github.com/zake7749/Chatbot) (Python) 基于向量匹配的情境式聊天机器人

- [Tipask](https://github.com/sdfsky/tipask) (PHP) 一款开放源码的 PHP 问答系统，基于 Laravel 框架开发，容易扩展，具有强大的负载能力和稳定性。

- [QuestionAnsweringSystem](https://github.com/ysc/QuestionAnsweringSystem) (Java) 一个 Java 实现的人机问答系统，能够自动分析问题并给出候选答案。

- [QA-Snake](https://github.com/SnakeHacker/QA-Snake) (Python) 基于多搜索引擎和深度学习技术的自动问答

- [使用 TensorFlow 实现的 Sequence to Sequence 聊天机器人模型](https://github.com/qhduan/Seq2Seq_Chatbot_QA) (Python)

- [使用深度学习算法实现的中文阅读理解问答系统](https://github.com/S-H-Y-GitHub/QA) (Python)

- [AnyQ by Baidu](https://github.com/baidu/AnyQ) 主要包含面向 FAQ 集合的问答系统框架、文本语义匹配工具 SimNet。

- [DuReader 中文阅读理解 Baseline 代码](https://github.com/baidu/DuReader) (Python)

- [基于 SmartQQ 的自动机器人框架](https://github.com/Yinzo/SmartQQBot) (Python)

- [QASystemOnMedicalKG](https://github.com/liuhuanyong/QASystemOnMedicalKG) (Python) 以疾病为中心的一定规模医药领域知识图谱，并以该知识图谱完成自动问答与分析服务。

- [GPT2-chitchat](https://github.com/yangjianxin1/GPT2-chitchat) (Python) 用于中文闲聊的 GPT2 模型

- [CDial-GPT](https://github.com/thu-coai/CDial-GPT) (Python) 提供了一个大规模中文对话数据集，并提供了在此数据集上的中文对话预训练模型（中文 GPT 模型）


### 多模态表征与检索 Multi-Modal Representation & Retrieval

- [Chinese-CLIP](https://github.com/OFA-Sys/Chinese-CLIP) (Python) Chinese-CLIP 是中文多模态图文表征预训练模型。其基于 OpenAI 的 CLIP 模型结构，利用大规模中文原生图文语料完成预训练，目前开源了多个模型规模，同时公开了技术报告论文及检索 demo


<br />
<br />

## 中文语料 Corpus

- [开放知识图谱 OpenKG.cn](http://openkg.cn)

- [开放中文知识图谱的 schema](https://github.com/cnschema/cnschema)

- [大规模中文概念图谱 CN-Probase](http://kw.fudan.edu.cn/cnprobase/search/) [公众号介绍](https://mp.weixin.qq.com/s?__biz=MzI0MTI1Nzk1MA==&mid=2651675884&idx=1&sn=1a43a93fd5bb53c8a9e48518bfa41db8&chksm=f2f7a05dc580294b227332b1051bfa2e5c756c72efb4d102c83613185b571ac31343720a6eae&mpshare=1&scene=1&srcid=1113llNDS1MvoadhCki83ERW#rd)

- [大规模 1.4 亿中文知识图谱开源下载](https://github.com/ownthink/KnowledgeGraphData)

- [农业知识图谱](https://github.com/qq547276542/Agriculture_KnowledgeGraph) 农业领域的信息检索，命名实体识别，关系抽取，分类树构建，数据挖掘

- [CLDC 中文语言资源联盟](http://www.chineseldc.org/)

- [中文 Wikipedia Dump](https://dumps.wikimedia.org/zhwiki/)

- [基于不同语料、不同模型（比如 BERT、GPT）的中文预训练模型](https://github.com/dbiir/UER-py) 中文预训练模型框架，支持不同语料、编码器、目标任务的预训练模型（from RUC and Tencent）

- [OpenCLaP](https://github.com/thunlp/OpenCLaP) 多领域开源中文预训练语言模型仓库 (from Tsinghua)

- [98 年人民日报词性标注库@百度盘](https://pan.baidu.com/s/1gd6mslt)

- [搜狗 20061127 新闻语料(包含分类)@百度盘](https://pan.baidu.com/s/1bnhXX6Z)

- [UDChinese](https://github.com/UniversalDependencies/UD_Chinese) (用于训练 spaCy 词性标注)

- [中文 word2vec 模型](https://github.com/to-shimo/chinese-word2vec)

- [上百种预训练中文词向量](https://github.com/Embedding/Chinese-Word-Vectors)

- [Tencent AI Lab Embedding Corpus for Chinese Words and Phrases](https://ai.tencent.com/ailab/nlp/embedding.html)

- [中文预训练 BERT with Whole Word Masking](https://github.com/ymcui/Chinese-BERT-wwm)

- [中文 GPT2 训练代码](https://github.com/Morizeyao/GPT2-Chinese) 可以写诗，新闻，小说，或是训练通用语言模型。

- [中文语言理解测评基准 ChineseGLUE](https://github.com/chineseGLUE/chineseGLUE) 包括代表性的数据集、基准(预训练)模型、语料库、排行榜。

- [中华新华字典数据库](https://github.com/pwxcoo/chinese-xinhua) 包括歇后语，成语，词语，汉字。

- [Synonyms: 中文近义词工具包](https://github.com/huyingxi/Synonyms/) 基于维基百科中文和 word2vec 训练的近义词库，封装为 python 包文件。

- [Chinese_conversation_sentiment](https://github.com/z17176/Chinese_conversation_sentiment) 一个可用于情感分析的中文情感数据集。

- [中文突发事件语料库](https://github.com/shijiebei2009/CEC-Corpus) Chinese Emergency Corpus

- [dgk_lost_conv 中文对白语料](https://github.com/rustch3n/dgk_lost_conv) chinese conversation corpus

- [用于训练中英文对话系统的语料库](https://github.com/candlewill/Dialog_Corpus) Datasets for Training Chatbot System

- [八卦版問答中文語料](https://github.com/zake7749/Gossiping-Chinese-Corpus)

- [中文公开聊天语料库](https://github.com/codemayq/chaotbot_corpus_Chinese)

- [中国股市公告信息爬取](https://github.com/startprogress/China_stock_announcement) 通过 python 脚本从巨潮网络的服务器获取中国股市（sz, sh）的公告(上市公司和监管机构)

- [tushare 财经数据接口](http://tushare.org/) TuShare 是一个免费、开源的 python 财经数据接口包。

- [金融文本数据集](https://github.com/smoothnlp/FinancialDatasets) SmoothNLP 金融文本数据集(公开) Public Financial Datasets for NLP Researches

- [保险行业语料库](https://github.com/Samurais/insuranceqa-corpus-zh)   [[52nlp 介绍 Blog](http://www.52nlp.cn/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E4%BF%9D%E9%99%A9%E8%A1%8C%E4%B8%9A%E9%97%AE%E7%AD%94%E5%BC%80%E6%94%BE%E6%95%B0%E6%8D%AE%E9%9B%86)] 面向机器学习的保险领域开放数据 OpenData in insurance area for Machine Learning Tasks

- [最全中华古诗词数据库](https://github.com/chinese-poetry/chinese-poetry) 唐宋两朝近一万四千古诗人, 接近 5.5 万首唐诗加 26 万宋诗. 两宋时期 1564 位词人，21050 首词。

- [DuReader 中文阅读理解数据](http://ai.baidu.com/broad/subordinate?dataset=dureader)

- [中文语料小数据](https://github.com/crownpku/Small-Chinese-Corpus) 包含了中文命名实体识别、中文关系识别、中文阅读理解等一些小量数据

- [Chinese-Literature-NER-RE-Dataset](https://github.com/lancopku/Chinese-Literature-NER-RE-Dataset) 面向中文文学文本的语篇级命名实体识别与关系抽取数据集 A Discourse-Level Named Entity Recognition and Relation Extraction Dataset for Chinese Literature Text

- [ChineseTextualInference](https://github.com/liuhuanyong/ChineseTextualInference) 中文文本推断项目, 包括 88 万文本蕴含中文文本蕴含数据集的翻译与构建, 基于深度学习的文本蕴含判定模型构建.

- [大规模中文自然语言处理语料](https://github.com/brightmart/nlp_chinese_corpus) 维基百科(wiki2019zh), 新闻语料(news2016zh), 百科问答(baike2018qa)

- [中文人名语料库](https://github.com/wainshine/Chinese-Names-Corpus) 中文姓名, 姓氏, 名字, 称呼, 日本人名, 翻译人名, 英文人名。

- [公司名、机构名语料库](https://github.com/wainshine/Company-Names-Corpus) 公司简称, 缩写, 品牌词, 企业名。

- [中文敏感词词库](https://github.com/observerss/textfilter) 敏感词过滤的几种实现+某 1w 词敏感词库

- [中文简称词库](https://github.com/zhangyics/Chinese-abbreviation-dataset) 包含否定全称的中文缩写语料库 A corpus of Chinese abbreviation, including negative full forms.

- [中文数据预处理材料](https://github.com/dongxiexidian/Chinese) 中文分词词典和中文停用词

- [漢語拆字字典](https://github.com/kfcd/chaizi)

- [SentiBridge: 中文实体情感知识库](https://github.com/rainarch/SentiBridge) 刻画人们如何描述某个实体，包含新闻、旅游、餐饮，共计 30 万对。

- [OpenCorpus](https://github.com/hankcs/OpenCorpus) 一系列可自由获取（中文）语料的集合。

- [ChineseNlpCorpus](https://github.com/SophonPlus/ChineseNlpCorpus) 情感/观点/评论 倾向性分析，中文命名实体识别，推荐系统

- [FinancialDatasets](https://github.com/smoothnlp/FinancialDatasets) SmoothNLP 金融文本数据集(公开) Public Financial Datasets for NLP Researches Only

- [People's Daily & Children's Fairy Tale](https://github.com/ymcui/Chinese-Cloze-RC) PD&CFT: 一个中文阅读理解数据集 A Chinese Reading Comprehension Dataset
- [中文维基 23 万高质量词条-更新至 23 年 7 月-已过滤敏感或争议性信息](https://huggingface.co/datasets/pleisto/wikipedia-cn-20230720-filtered)

<br />
<br />

## 中文 NLP 学术组织及竞赛 Organizations

- [清华大学自然语言处理与人文计算实验室](http://nlp.csai.tsinghua.edu.cn/site2/index.php/zh)

- [北京大学计算语言学教育部重点实验室](http://klcl.pku.edu.cn/)

- [中科院计算所自然语言处理研究组](http://www.nlpir.org/)

- [哈工大智能技术与自然语言处理实验室](http://insun.hit.edu.cn/)

- [哈工大社会计算与信息检索研究中心](http://ir.hit.edu.cn/)

- [复旦大学自然语言处理组](http://nlp.fudan.edu.cn/)

- [苏州大学自然语言处理组](http://nlp.suda.edu.cn/index.html)

- [南京大学自然语言处理研究组](http://nlp.nju.edu.cn)

- [东北大学自然语言处理实验室](http://www.nlplab.com/)

- [厦门大学智能科学与技术系自然语言处理实验室](http://nlp.xmu.edu.cn/)

- [郑州大学自然语言处理实验室](http://nlp.zzu.edu.cn/)

- [微软亚洲研究院自然语言处理](https://www.msra.cn/zh-cn/research/nlp)

- [华为诺亚方舟实验室](http://www.noahlab.com.hk/)

- [CUHK Text Mining Group](http://www1.se.cuhk.edu.hk/~textmine/)

- [PolyU Social Media Mining Group](http://www4.comp.polyu.edu.hk/~cswjli/Group.html)

- [HKUST Human Language Technology Center](http://www.cse.ust.hk/~hltc/)

- [National Taiwan University NLP Lab](http://nlg.csie.ntu.edu.tw/)

- [中国中文信息学会](http://www.cipsc.org.cn/)

- [NLP Conference Calender](http://cs.rochester.edu/~omidb/nlpcalendar/) NLP 领域的主要会议、期刊、研讨会与共享任务。

- [2017 第一届“讯飞杯”中文机器阅读理解评测](http://www.cips-cl.org/static/CCL2017/iflytek.html)

- [2017 AI-Challenger 图像中文描述](https://www.challenger.ai/competition/caption) 用一句话描述给定图像中的主要信息，挑战中文语境下的图像理解问题。

- [2017 AI-Challenger 英中机器文本翻译](https://www.challenger.ai/competition/translation) 用大规模的数据，提升英中文本机器翻译模型的能力。

- [2017 知乎看山杯机器学习挑战赛](https://biendata.com/competition/zhihu/) 根据知乎给出的问题及话题标签的绑定关系的训练数据，训练出对未标注数据自动标注的模型。

- [2018 开放领域的中文问答任务](https://biendata.com/competition/CCKS2018_4/) 对于给定的一句中文问题，问答系统从给定知识库中选择若干实体或属性值作为该问题的答案。

- [2018 微众银行智能客服问句匹配大赛](https://biendata.com/competition/CCKS2018_3/) 针对中文的真实客服语料，进行问句意图匹配；给定两个语句，判定两者意图是否相近。


<br />
<br />

## 中文 NLP 商业服务 Industry

- [华为云 NLP](https://www.huaweicloud.com/product/nlp.html) 针对各类企业及开发者提供的用于文本分析及挖掘的云服务，旨在帮助用户高效的处理文本

- [百度云 NLP](https://cloud.baidu.com/product/nlp.html) 提供业界领先的自然语言处理技术，提供优质文本处理及理解技术

- [阿里云 NLP](https://data.aliyun.com/product/nlp) 为各类企业及开发者提供的用于文本分析及挖掘的核心工具

- [腾讯云 NLP](https://cloud.tencent.com/product/nlp) 基于并行计算、分布式爬虫系统，结合独特的语义分析技术，一站满足 NLP、转码、抽取、数据抓取等需求

- [讯飞开放平台](https://www.xfyun.cn/) 以语音交互为核心的人工智能开放平台

- [搜狗实验室](http://www.sogou.com/labs/webservice/) 分词和词性标注

- [玻森数据](http://bosonnlp.com/) 上海玻森数据科技有限公司，专注中文语义分析技术

- [云孚科技](https://www.yunfutech.com/) NLP 工具包、知识图谱、文本挖掘、对话系统、舆情分析等

- [智言科技](http://www.webot.ai) 专注于深度学习和知识图谱技术突破的人工智能公司

- [追一科技](https://zhuiyi.ai/) 主攻深度学习和自然语言处理


<br />
<br />

## 学习资料 Learning Materials

- [中文 Deep Learning Book](https://github.com/exacity/deeplearningbook-chinese)

- [Stanford CS224n Natural Language Processing with Deep Learning 2017](http://web.stanford.edu/class/cs224n/syllabus.html)

- [Oxford CS DeepNLP 2017](https://github.com/oxford-cs-deepnlp-2017)

- [Course materials for Georgia Tech CS 4650 and 7650, "Natural Language"] (https://github.com/jacobeisenstein/gt-nlp-class)

- [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) by Dan Jurafsky and James H. Martin

- [52nlp 我爱自然语言处理](http://www.52nlp.cn/)

- [hankcs 码农场](http://www.hankcs.com/)

- [文本处理实践课资料](https://github.com/Roshanson/TextInfoExp) 文本处理实践课资料，包含文本特征提取（TF-IDF），文本分类，文本聚类，word2vec 训练词向量及同义词词林中文词语相似度计算、文档自动摘要，信息抽取，情感分析与观点挖掘等实验。

- [nlp_tasks](https://github.com/Kyubyong/nlp_tasks) Natural Language Processing Tasks and Selected References

- [NLP 研究入门之道](https://github.com/zibuyu/research_tao) from 清华刘知远老师

- [Chinese NLP](https://chinesenlp.xyz/#/) 中文自然语言处理的共享任务、数据集与最新成果


<br />
<br />