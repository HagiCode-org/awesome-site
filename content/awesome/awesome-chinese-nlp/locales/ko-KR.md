# Chinese NLP

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

중국어 자연어 처리(NLP)를 위한 엄선된 자료 목록.

중국어 자연어 처리 관련 자료

이미지는 푸단대학 척희붕 교수가 제공함

![](/images/1.jpg)


## 목차 Contents

### 1. [중국어 NLP 도구 Chinese NLP Toolkits](https://github.com/crownpku/awesome-chinese-nlp#chinese-nlp-toolkits-中文nlp工具)

* #### [종합 NLP 도구 모음 Toolkits](https://github.com/crownpku/awesome-chinese-nlp#toolkits-综合nlp工具包-1)
* #### [일반적인 영어 또는 다국어 NLP 도구 모음 Popular NLP Toolkits for English/Multi-Language](https://github.com/crownpku/awesome-chinese-nlp#popular-nlp-toolkits-for-englishmulti-language-常用的英文或支持多语言的nlp工具包-1)
* #### [중국어 단어 분절 Chinese Word Segment](https://github.com/crownpku/awesome-chinese-nlp#chinese-word-segment-中文分词-1)
* #### [정보 추출 Information Extraction](https://github.com/crownpku/awesome-chinese-nlp#information-extraction-信息提取-1)
* #### [질의응답 및 챗봇 QA & Chatbot](https://github.com/crownpku/awesome-chinese-nlp#qa--chatbot-问答和聊天机器人-1)
* #### [다중 모달 표현 및 검색 Multi-Modal Representation & Retrieval](https://github.com/crownpku/awesome-chinese-nlp#multi-modal-representation--retrieval-多模态表征与检索-1)
### 2. [중국어 말뭉치 Corpus](https://github.com/crownpku/awesome-chinese-nlp#corpus-中文语料)
### 3. [중국어 NLP 학술 기관 및 대회 Organizations](https://github.com/crownpku/awesome-chinese-nlp#organizations-%E4%B8%AD%E6%96%87nlp%E5%AD%A6%E6%9C%AF%E7%BB%84%E7%BB%87%E5%8F%8A%E7%AB%9E%E8%B5%9B)
### 4. [중국어 NLP 상용 서비스 Industry](https://github.com/crownpku/awesome-chinese-nlp#industry-%E4%B8%AD%E6%96%87nlp%E5%95%86%E4%B8%9A%E6%9C%8D%E5%8A%A1)
### 5. [학습 자료 Learning Materials](https://github.com/crownpku/awesome-chinese-nlp#learning-materials-学习资料)


<br />
<br />

## 중국어 NLP 도구 Chinese NLP Toolkits

### 종합 NLP 도구 모음 Toolkits

- [THULAC 中文词法分析工具包](http://thulac.thunlp.org/) by 清华 (C++/Java/Python)

- [NLPIR](https://github.com/NLPIR-team/NLPIR) by 中科院 (Java)

- [LTP 语言技术平台](https://github.com/HIT-SCIR/ltp) by 哈工大 (C++)  [pylyp](https://github.com/HIT-SCIR/pyltp) LTP의 Python 래퍼

- [FudanNLP](https://github.com/FudanNLP/fnlp) by 复旦 (Java)

- [BaiduLac](https://github.com/baidu/lac) by 百度 Baidu의 오픈소스 중국어 형태소 분석 도구. 단어 분절, 품사 태깅, 개체명 인식을 포함.

- [HanLP](https://github.com/hankcs/HanLP) (Java)

- [FastNLP](https://github.com/fastnlp/fastNLP) (Python) 가벼운 NLP 처리 패키지.

- [SnowNLP](https://github.com/isnowfy/snownlp) (Python) 중국어 텍스트를 처리하는 Python 라이브러리

- [YaYaNLP](https://github.com/Tony-Wang/YaYaNLP) (Python) 순수 Python으로 작성된 중국어 자연어 처리 패키지. 「아아 학어(배우기)」에서 이름을 딴 것

- [小明NLP](https://github.com/SeanLee97/xmnlp) (Python) 가벼운 중국어 자연어 처리 도구

- [DeepNLP](https://github.com/rockingdingo/deepnlp) (Python) Tensorflow 위에 구현된, 중국어 사전학습 모델을 갖춘 딥러닝 NLP 파이프라인.

- [chinese_nlp](https://github.com/taozhijiang/chinese_nlp) (C++ & Python) 중국어 자연어 처리 도구와 예제

- [lightNLP](https://github.com/smilelight/lightNLP) (Python) Pytorch와 torchtext 기반 자연어 처리 딥러닝 프레임워크

- [Chinese-Annotator](https://github.com/crownpku/Chinese-Annotator) (Python) 중국어 텍스트 주석 도구 Annotator for Chinese Text Corpus

- [Poplar](https://github.com/synyi/poplar) (Typescript) 자연어 처리(NLP)를 위한 웹 기반 주석 도구

- [Jiagu](https://github.com/ownthink/Jiagu) (Python) Jiagu는 BiLSTM 등 모델을 기반으로 대규모 말뭉치로 학습됨. 중국어 분절, 품사 태깅, 개체명 인식, 감성 분석, 지식 그래프 관계 추출, 키워드 추출, 텍스트 요약, 신어 발견 등을 제공.

- [SmoothNLP](https://github.com/smoothnlp/SmoothNLP) (Python & Java) 해석 가능한 NLP 기술에 중점

- [FoolNLTK](https://github.com/rockyzhengwu/FoolNLTK) (Python & Java) 중국어 자연어 도구 모음 A Chinese Nature Language Toolkit

### 일반적인 영어 또는 다국어 NLP 도구 모음 Popular NLP Toolkits for English/Multi-Language

- [CoreNLP](https://github.com/stanfordnlp/CoreNLP) by Stanford (Java) 핵심 NLP 도구의 Java 모음.

- [Stanza](https://github.com/stanfordnlp/stanza) by Stanford (Python) 여러 인간 언어를 위한 Python NLP 라이브러리

- [NLTK](http://www.nltk.org/) (Python) Natural Language Toolkit

- [spaCy](https://spacy.io/) (Python) 산업용 수준의 자연어 처리, [온라인 강좌](https://course.spacy.io/) 포함

- [textacy](https://github.com/chartbeat-labs/textacy) (Python) spaCy 전후에 쓰이는 NLP

- [OpenNLP](https://opennlp.apache.org/) (Java) 기계 학습 기반 자연어 텍스트 처리 도구 모음.

- [gensim](https://github.com/RaRe-Technologies/gensim) (Python) Gensim은 토픽 모델링, 문서 인덱싱, 대규모 말뭉치 유사도 검색을 위한 Python 라이브러리.

- [Kashgari](https://github.com/BrikerMan/Kashgari) - 간단하고 강력한 NLP 프레임워크. 5분 만에 개체명 인식(NER), 품사 태깅(PoS), 텍스트 분류용 최신 모델을 구축. BERT와 word2vec 포함.


### 중국어 단어 분절 Chinese Word Segment

- [Jieba 结巴中文分词](https://github.com/fxsjy/jieba) (Python 및 다수의 다른 언어 파생) 최고의 Python 중국어 분절 컴포넌트

- [北大中文分词工具](https://github.com/lancopku/pkuseg-python) (Python) 고정밀 중국어 분절 도구. 사용이 쉽고 기존 오픈소스 대비 분절 정확도를 크게 향상.

- [kcws 深度学习中文分词](https://github.com/koth/kcws) (Python) BiLSTM+CRF 및 IDCNN+CRF

- [ID-CNN-CWS](https://github.com/hankcs/ID-CNN-CWS) (Python) 중국어 단어 분절을 위한 반복 팽창 합성곱 Iterated Dilated Convolutions for Chinese Word Segmentation

- [Genius 中文分词](https://github.com/duanhongyi/genius) (Python) Genius는 CRF(조건부 무작위 장) 알고리즘을 사용하는 오픈소스 Python 중국어 분절 컴포넌트.

- [loso 中文分词](https://github.com/fangpenlin/loso) (Python)

- [yaha "哑哈"中文分词](https://github.com/jannson/yaha) (Python)

- [ChineseWordSegmentation](https://github.com/Moonshile/ChineseWordSegmentation) (Python) 말뭉치가 필요 없는 중국어 분절 알고리즘 Chinese word segmentation algorithm without corpus

- [Go 언어 고성능 분절](https://github.com/go-ego/gse) (Go) 효율적인 Go 텍스트 분절. 영어, 중국어, 일본어 등 지원.

- [Ansj中文分词](https://github.com/NLPchina/ansj_seg) (java) n-Gram+CRF+HMM 기반 중국어 분절의 Java 구현


### 정보 추출 Information Extraction

- [MITIE](https://github.com/mit-nlp/MITIE) (C++) 정보 추출을 위한 라이브러리와 도구

- [Duckling](https://github.com/facebookincubator/duckling) (Haskell) 입력 문자열에 대해 조합 가능한 언어 규칙을 표현·테스트·평가하기 위한 언어, 엔진, 도구.

- [IEPY](https://github.com/machinalis/iepy) (Python)  IEPY는 관계 추출에 중점을 둔 오픈소스 정보 추출 도구.

- [Snorkel](https://github.com/HazyResearch/snorkel) 정보 추출에 중점을 둔 학습 데이터 생성 및 관리 시스템

- [TensorFlow에서 LSTM으로 구현한 신경망 관계 추출](https://github.com/thunlp/TensorFlow-NRE)

- [중국어 개체명 인식을 위한 신경망 모델](https://github.com/zjy-ucas/ChineseNER)

- [bert-chinese-ner](https://github.com/ProHiryu/bert-chinese-ner) 사전학습 언어 모델 BERT로 중국어 NER 수행

- [Information-Extraction-Chinese](https://github.com/crownpku/Information-Extraction-Chinese) IDCNN/biLSTM+CRF로 중국어 개체명 인식, biGRU+2ATT로 관계 추출 中文实体识别与关系提取

- [Familia](https://github.com/baidu/Familia) Baidu 제작의 A Toolkit for Industrial Topic Modeling

- [Text Classification](https://github.com/brightmart/text_classification) 딥러닝 기반 다양한 텍스트 분류 모델 등. 테스트 데이터로 Zhihu Q&A 말뭉치 사용.

- [ComplexEventExtraction](https://github.com/liuhuanyong/ComplexEventExtraction) 중국어 복합 사건의 개념과 명시적 패턴. 조건·인과·연속·반전 사건 등의 추출과 사건 그래프 구축.

- [TextRank4ZH](https://github.com/letiantian/TextRank4ZH) 중국어 텍스트에서 키워드와 요약을 자동 추출


### 질의응답 및 챗봇 QA & Chatbot

- [Rasa NLU](https://github.com/RasaHQ/rasa_nlu) (Python) 자연어를 구조화된 데이터로 변환. 중국어 포크는 [Rasa NLU Chi](https://github.com/crownpku/Rasa_NLU_Chi)

- [Rasa Core](https://github.com/RasaHQ/rasa_core) (Python) 대화형 소프트웨어를 위한 기계 학습 기반 대화 엔진

- [Chatstack](https://github.com/crownpku/Chatstack-Doc) 중국어 NLU 시스템 구축을 위한 전체 파이프라인 UI

- [Snips NLU](https://github.com/snipsco/snips-nlu) (Python) Snips NLU는 자연어 문장을 구문 분석하고 구조화된 정보를 추출하는 Python 라이브러리.

- [DeepPavlov](https://github.com/deepmipt/DeepPavlov) (Python) 엔드투엔드 대화 시스템 구축과 챗봇 학습을 위한 오픈소스 라이브러리.

- [ChatScript](https://github.com/bwilcox-1234/ChatScript) 자연어 도구/대화 관리자. 규칙 기반 챗봇 엔진.

- [Chatterbot](https://github.com/gunthercox/ChatterBot) (Python) ChatterBot은 챗봇 생성을 위한 기계 학습 대화 엔진.

- [Chatbot](https://github.com/zake7749/Chatbot) (Python) 벡터 매칭 기반 상황형 챗봇

- [Tipask](https://github.com/sdfsky/tipask) (PHP) Laravel 기반 오픈소스 PHP 질의응답 시스템. 확장 쉽고 높은 부하能力与 안정성.

- [QuestionAnsweringSystem](https://github.com/ysc/QuestionAnsweringSystem) (Java) 질문을 자동 분석해 후보 답을 제시하는 Java 기반 인간-기계 질의응답 시스템.

- [QA-Snake](https://github.com/SnakeHacker/QA-Snake) (Python) 여러 검색 엔진과 딥러닝 기술에 기반한 자동 질의응답

- [TensorFlow로 구현한 Sequence to Sequence 챗봇 모델](https://github.com/qhduan/Seq2Seq_Chatbot_QA) (Python)

- [딥러닝으로 구현한 중국어 독해 질의응답 시스템](https://github.com/S-H-Y-GitHub/QA) (Python)

- [AnyQ by Baidu](https://github.com/baidu/AnyQ) FAQ 모음 대상 질의응답 시스템 프레임워크와 텍스트 의미 일치 도구 SimNet을 중심으로 포함.

- [DuReader 중국어 독해 Baseline 코드](https://github.com/baidu/DuReader) (Python)

- [SmartQQ 기반 자동 봇 프레임워크](https://github.com/Yinzo/SmartQQBot) (Python)

- [QASystemOnMedicalKG](https://github.com/liuhuanyong/QASystemOnMedicalKG) (Python) 질병 중심의 일정 규모 의료 지식 그래프로 자동 질의응답과 분석 서비스 제공.

- [GPT2-chitchat](https://github.com/yangjianxin1/GPT2-chitchat) (Python) 중국어 잡담용 GPT2 모델

- [CDial-GPT](https://github.com/thu-coai/CDial-GPT) (Python) 대규모 중국어 대화 데이터세트와 그 위의 중국어 대화 사전학습 모델(중국어 GPT 모델) 제공


### 다중 모달 표현 및 검색 Multi-Modal Representation & Retrieval

- [Chinese-CLIP](https://github.com/OFA-Sys/Chinese-CLIP) (Python) Chinese-CLIP은 중국어 다중 모달 이미지-텍스트 표현 사전학습 모델. OpenAI의 CLIP 구조 기반으로 대규모 중국어 네이티브 이미지-텍스트 말뭉치로 사전학습. 여러 모델 규모를 오픈소스화하고 기술 보고서와 검색 데모 공개.


<br />
<br />

## 중국어 말뭉치 Corpus

- [OpenKG.cn 开放知识图谱](http://openkg.cn)

- [개방형 중국어 지식 그래프의 schema](https://github.com/cnschema/cnschema)

- [대규모 중국어 개념 그래프 CN-Probase](http://kw.fudan.edu.cn/cnprobase/search/) [공식 계정 소개](https://mp.weixin.qq.com/s?__biz=MzI0MTI1Nzk1MA==&mid=2651675884&idx=1&sn=1a43a93fd5bb53c8a9e48518bfa41db8&chksm=f2f7a05dc580294b227332b1051bfa2e5c756c72efb4d102c83613185b571ac31343720a6eae&mpshare=1&scene=1&srcid=1113llNDS1MvoadhCki83ERW#rd)

- [1.4억 건 대규모 중국어 지식 그래프 오픈소스 다운로드](https://github.com/ownthink/KnowledgeGraphData)

- [농업 지식 그래프](https://github.com/qq547276542/Agriculture_KnowledgeGraph) 농업 분야 정보 검색, 개체명 인식, 관계 추출, 분류 트리 구축, 데이터 마이닝

- [CLDC 中文语言资源联盟](http://www.chineseldc.org/)

- [중국어 Wikipedia Dump](https://dumps.wikimedia.org/zhwiki/)

- [서로 다른 말뭉치·모델(BERT, GPT 등) 기반 중국어 사전학습 모델](https://github.com/dbiir/UER-py) 서로 다른 말뭉치·인코더·작업을 지원하는 중국어 사전학습 모델 프레임워크（from RUC and Tencent）

- [OpenCLaP](https://github.com/thunlp/OpenCLaP) 다분야 오픈소스 중국어 사전학습 언어 모델 저장소（from Tsinghua）

- [98년 인민일보 품사 태깅库@Baidu Disk](https://pan.baidu.com/s/1gd6mslt)

- [Sogou 20061127 뉴스 말뭉치(분류 포함)@Baidu Disk](https://pan.baidu.com/s/1bnhXX6Z)

- [UDChinese](https://github.com/UniversalDependencies/UD_Chinese) (spaCy PoS 학습용)

- [중국어 word2vec 모델](https://github.com/to-shimo/chinese-word2vec)

- [100余种의 사전학습 중국어 단어 벡터](https://github.com/Embedding/Chinese-Word-Vectors)

- [Tencent AI Lab Embedding Corpus for Chinese Words and Phrases](https://ai.tencent.com/ailab/nlp/embedding.html)

- [Whole Word Masking 적용 중국어 사전학습 BERT](https://github.com/ymcui/Chinese-BERT-wwm)

- [중국어 GPT2 학습 코드](https://github.com/Morizeyao/GPT2-Chinese) 시, 뉴스, 소설 작성이나 일반 언어 모델 학습 가능.

- [중국어 언어 이해 벤치마크 ChineseGLUE](https://github.com/chineseGLUE/chineseGLUE) 대표 데이터세트, 기준(사전학습) 모델, 말뭉치, 리더보드 포함.

- [중화 신화 사전 데이터베이스](https://github.com/pwxcoo/chinese-xinhua) 속담, 성어, 단어, 한자 포함.

- [Synonyms: 중국어 유의어 도구 모음](https://github.com/huyingxi/Synonyms/) 중국어 Wikipedia와 word2vec으로 학습한 유의어 라이브러리를 Python 패키지로 포장.

- [Chinese_conversation_sentiment](https://github.com/z17176/Chinese_conversation_sentiment) 감성 분석에 유용한 중국어 감성 데이터세트.

- [중국어 긴급 상황 말뭉치](https://github.com/shijiebei2009/CEC-Corpus) Chinese Emergency Corpus

- [dgk_lost_conv 중국어 대화 말뭉치](https://github.com/rustch3n/dgk_lost_conv) chinese conversation corpus

- [중영 대화 시스템 학습용 말뭉치](https://github.com/candlewill/Dialog_Corpus) Datasets for Training Chatbot System

- [Gossiping 판 질의응답 중국어 말뭉치](https://github.com/zake7749/Gossiping-Chinese-Corpus)

- [공개 중국어 채팅 말뭉치](https://github.com/codemayq/chaotbot_corpus_Chinese)

- [중국 주식 공시 정보 크롤러](https://github.com/startprogress/China_stock_announcement) Python 스크립트로 거창 네트워크 서버에서 중국 주식(sz, sh) 공시(상장사 및 규제 기관) 수집

- [tushare 금융 데이터 인터페이스](http://tushare.org/) TuShare는 무료 오픈소스 Python 금융 데이터 인터페이스 패키지.

- [금융 텍스트 데이터세트](https://github.com/smoothnlp/FinancialDatasets) SmoothNLP 金融文本数据集(公开) Public Financial Datasets for NLP Researches

- [보험 업계 말뭉치](https://github.com/Samurais/insuranceqa-corpus-zh)   [[52nlp 소개 Blog](http://www.52nlp.cn/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E4%BF%9D%E9%99%A9%E8%A1%8C%E4%B8%9A%E9%97%AE%E7%AD%94%E5%BC%80%E6%94%BE%E6%95%B0%E6%8D%AE%E9%9B%86)] 기계 학습 작업용 보험 분야 공개 데이터 OpenData in insurance area for Machine Learning Tasks

- [가장 완전한 중화 고대 시사 데이터베이스](https://github.com/chinese-poetry/chinese-poetry) 당·송 양대 약 14000명의 시인, 약 5.5만 수의 당시와 26만 수의 송시. 송대 1564명의 사(詞) 작자, 21050수의 사.

- [중국어 DuReader 독해 데이터](http://ai.baidu.com/broad/subordinate?dataset=dureader)

- [중국어 소규모 말뭉치](https://github.com/crownpku/Small-Chinese-Corpus) 중국어 개체명 인식, 관계 인식, 독해 등 소량 데이터 포함

- [Chinese-Literature-NER-RE-Dataset](https://github.com/lancopku/Chinese-Literature-NER-RE-Dataset) 중국어 문학 텍스트용 담화 수준 개체명 인식 및 관계 추출 데이터세트 A Discourse-Level Named Entity Recognition and Relation Extraction Dataset for Chinese Literature Text

- [ChineseTextualInference](https://github.com/liuhuanyong/ChineseTextualInference) 중국어 텍스트 함의 프로젝트. 88만 쌍의 텍스트 함의 데이터세트 번역·구축과 딥러닝 기반 함의 판정 모델 구축 포함.

- [대규모 중국어 자연어 처리 말뭉치](https://github.com/brightmart/nlp_chinese_corpus) Wikipedia (wiki2019zh), 뉴스 (news2016zh), 백과 Q&A (baike2018qa)

- [중국어 인명 말뭉치](https://github.com/wainshine/Chinese-Names-Corpus) 중국어 성명, 성, 이름, 호칭, 일본인명, 번역인명, 영문명.

- [기업명·기관명 말뭉치](https://github.com/wainshine/Company-Names-Corpus) 기업 약칭, 약어, 브랜드어, 기업명.

- [중국어 금지어 사전](https://github.com/observerss/textfilter) 금지어 필터 여러 구현 + 약 1만 단어 금지어 사전

- [중국어 약어 데이터세트](https://github.com/zhangyics/Chinese-abbreviation-dataset) 부정 완전형을 포함한 중국어 약어 말뭉치 A corpus of Chinese abbreviation, including negative full forms.

- [중국어 데이터 전처리 자료](https://github.com/dongxiexidian/Chinese) 중국어 분절 사전과 중국어 불용어

- [漢語拆字字典](https://github.com/kfcd/chaizi)

- [SentiBridge: 중국어 개체 감성 지식 베이스](https://github.com/rainarch/SentiBridge) 사람들이 개체를 어떻게 묘사하는지 기술. 뉴스, 여행, 요식 포함 총 30만 쌍.

- [OpenCorpus](https://github.com/hankcs/OpenCorpus) 자유롭게 이용 가능한 (중국어) 말뭉치 모음.

- [ChineseNlpCorpus](https://github.com/SophonPlus/ChineseNlpCorpus) 감성/의견/댓글 경향 분석, 중국어 개체명 인식, 추천 시스템

- [FinancialDatasets](https://github.com/smoothnlp/FinancialDatasets) SmoothNLP 金融文本数据集(公开) Public Financial Datasets for NLP Researches Only

- [People's Daily & Children's Fairy Tale](https://github.com/ymcui/Chinese-Cloze-RC) PD&CFT: 중국어 독해 데이터세트 A Chinese Reading Comprehension Dataset
- [중국어 Wikipedia 23만 고품질 항목-2023년 7월 업데이트-민감·논쟁 정보 필터링됨](https://huggingface.co/datasets/pleisto/wikipedia-cn-20230720-filtered)

<br />
<br />

## 중국어 NLP 학술 기관 및 대회 Organizations

- [칭화대학 자연어 처리와 인문 계산 실험실](http://nlp.csai.tsinghua.edu.cn/site2/index.php/zh)

- [베이징대 계산언어학 교육부 중점 실험실](http://klcl.pku.edu.cn/)

- [중과원 계산소 자연어 처리 연구그룹](http://www.nlpir.org/)

- [하공대 지능 기술과 자연어 처리 실험실](http://insun.hit.edu.cn/)

- [하공대 사회 계산과 정보 검색 연구센터](http://ir.hit.edu.cn/)

- [푸단대 자연어 처리 그룹](http://nlp.fudan.edu.cn/)

- [쑤저우대 자연어 처리 그룹](http://nlp.suda.edu.cn/index.html)

- [난징대 자연어 처리 연구그룹](http://nlp.nju.edu.cn)

- [둥베이대 자연어 처리 실험실](http://www.nlplab.com/)

- [샤먼대 지능 과학 기술학부 자연어 처리 실험실](http://nlp.xmu.edu.cn/)

- [정저우대 자연어 처리 실험실](http://nlp.zzu.edu.cn/)

- [마이크로소프트 리서치 아시아 자연어 처리](https://www.msra.cn/zh-cn/research/nlp)

- [화웨이 Noah's Ark 실험실](http://www.noahlab.com.hk/)

- [CUHK Text Mining Group](http://www1.se.cuhk.edu.hk/~textmine/)

- [PolyU Social Media Mining Group](http://www4.comp.polyu.edu.hk/~cswjli/Group.html)

- [HKUST Human Language Technology Center](http://www.cse.ust.hk/~hltc/)

- [National Taiwan University NLP Lab](http://nlg.csie.ntu.edu.tw/)

- [중국 중문정보학회](http://www.cipsc.org.cn/)

- [NLP Conference Calender](http://cs.rochester.edu/~omidb/nlpcalendar/) NLP 커뮤니티의 주요 학회, 저널, 워크숍, 공유 작업.

- [2017 제1회 「iFlytek Cup」 중국어 기계 독해 평가](http://www.cips-cl.org/static/CCL2017/iflytek.html)

- [2017 AI-Challenger 이미지 중국어 설명](https://www.challenger.ai/competition/caption) 주어진 이미지의 주요 정보를 한 문장으로 설명, 중국어 문맥에서의 이미지 이해 과제.

- [2017 AI-Challenger 영중 기계 텍스트 번역](https://www.challenger.ai/competition/translation) 대규모 데이터로 영중 텍스트 기계 번역 모델 능력 향상.

- [2017 Zhihu Kanshan Cup 기계 학습 챌린지](https://biendata.com/competition/zhihu/) Zhihu의 질문과 토픽 태그 연결 학습 데이터로 미라벨 데이터 자동 태깅 모델 학습.

- [2018 개방 도메인 중국어 질의응답 작업](https://biendata.com/competition/CCKS2018_4/) 주어진 중국어 질문에 대해 시스템이 지식 베이스에서 실체나 속성값을 답으로 선택.

- [2018 WeBank 지능형 고객센터 문장 매칭 대회](https://biendata.com/competition/CCKS2018_3/) 중국어 실제 고객센터 말뭉치 대상 의도 매칭. 두 문장이 주어지면 의도 유사 여부 판정.


<br />
<br />

## 중국어 NLP 상용 서비스 Industry

- [화웨이 클라우드 NLP](https://www.huaweicloud.com/product/nlp.html) 기업 및 개발자를 위한 텍스트 분석·마이닝 클라우드 서비스. 텍스트를 효율적으로 처리.

- [바이두 클라우드 NLP](https://cloud.baidu.com/product/nlp.html) 업계 선도적 자연어 처리 기술, 고품질 텍스트 처리 및 이해 기술 제공

- [알리바바 클라우드 NLP](https://data.aliyun.com/product/nlp) 기업 및 개발자를 위한 텍스트 분석·마이닝 핵심 도구

- [텐센트 클라우드 NLP](https://cloud.tencent.com/product/nlp) 병렬 계산과 분산 크롤러에 고유 의미 분석 기술을 결합, NLP·트랜스코딩·추출·데이터 수집 일괄 충족

- [iFlytek 개방 플랫폼](https://www.xfyun.cn/) 음성 상호작용을 핵심으로 하는 AI 개방 플랫폼

- [Sogou 실험실](http://www.sogou.com/labs/webservice/) 분절과 품사 태깅

- [보슨 데이터](http://bosonnlp.com/) 상하이 보슨 데이터 기술. 중국어 의미 분석 기술 전문.

- [윈푸 기술](https://www.yunfutech.com/) NLP 도구 모음, 지식 그래프, 텍스트 마이닝, 대화 시스템, 여론 분석 등

- [즈옌 기술](http://www.webot.ai) 딥러닝과 지식 그래프 기술에 주력하는 AI 기업

- [줘이 기술](https://zhuiyi.ai/) 딥러닝과 자연어 처리를 주력으로 함


<br />
<br />

## 학습 자료 Learning Materials

- [중국어 Deep Learning Book](https://github.com/exacity/deeplearningbook-chinese)

- [Stanford CS224n Natural Language Processing with Deep Learning 2017](http://web.stanford.edu/class/cs224n/syllabus.html)

- [Oxford CS DeepNLP 2017](https://github.com/oxford-cs-deepnlp-2017)

- [Georgia Tech CS 4650 및 7650 「Natural Language」 강좌 자료] (https://github.com/jacobeisenstein/gt-nlp-class)

- [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) by Dan Jurafsky and James H. Martin

- [52nlp 我爱自然语言处理](http://www.52nlp.cn/)

- [hankcs 码农场](http://www.hankcs.com/)

- [텍스트 처리 실습 강좌 자료](https://github.com/Roshanson/TextInfoExp) 텍스트 특징 추출(TF-IDF), 텍스트 분류, 클러스터링, word2vec 단어 벡터 학습, 유의어 사전 중국어 단어 유사도 계산, 문서 자동 요약, 정보 추출, 감성 분석과 의견 마이닝 등 실험 포함.

- [nlp_tasks](https://github.com/Kyubyong/nlp_tasks) Natural Language Processing Tasks and Selected References

- [NLP 연구 입문의 길](https://github.com/zibuyu/research_tao) 칭화대 류즈위안 교수가 제공

- [Chinese NLP](https://chinesenlp.xyz/#/) 중국어 자연어 처리를 위한 공유 과제, 데이터셋 및 최신 성과


<br />
<br />
