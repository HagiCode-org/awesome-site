# Chinese NLP

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

Une liste sélectionnée de ressources pour le TALN (traitement automatique du langage naturel) du chinois.

Ressources relatives au traitement automatique du langage naturel en chinois

Image issue du professeur Qiu Xipeng de l'Université Fudan

![](/images/1.jpg)


## Sommaire Contents

### 1. [Outils NLP chinois Chinese NLP Toolkits](https://github.com/crownpku/awesome-chinese-nlp#chinese-nlp-toolkits-中文nlp工具)

* #### [Boîtes à outils NLP intégrées Toolkits](https://github.com/crownpku/awesome-chinese-nlp#toolkits-综合nlp工具包-1)
* #### [Boîtes à outils NLP anglaises ou multilingues courantes Popular NLP Toolkits for English/Multi-Language](https://github.com/crownpku/awesome-chinese-nlp#popular-nlp-toolkits-for-englishmulti-language-常用的英文或支持多语言的nlp工具包-1)
* #### [Segmentation de mots chinois Chinese Word Segment](https://github.com/crownpku/awesome-chinese-nlp#chinese-word-segment-中文分词-1)
* #### [Extraction d'informations Information Extraction](https://github.com/crownpku/awesome-chinese-nlp#information-extraction-信息提取-1)
* #### [QA et Chatbot QA & Chatbot](https://github.com/crownpku/awesome-chinese-nlp#qa--chatbot-问答和聊天机器人-1)
* #### [Représentation et recherche multimodales Multi-Modal Representation & Retrieval](https://github.com/crownpku/awesome-chinese-nlp#multi-modal-representation--retrieval-多模态表征与检索-1)
### 2. [Corpus chinois Corpus](https://github.com/crownpku/awesome-chinese-nlp#corpus-中文语料)
### 3. [Organisations académiques et concours NLP chinois Organizations](https://github.com/crownpku/awesome-chinese-nlp#organizations-%E4%B8%AD%E6%96%87nlp%E5%AD%A6%E6%9C%AF%E7%BB%84%E7%BB%87%E5%8F%8A%E7%AB%9E%E8%B5%9B)
### 4. [Services commerciaux NLP chinois Industry](https://github.com/crownpku/awesome-chinese-nlp#industry-%E4%B8%AD%E6%96%87nlp%E5%95%86%E4%B8%9A%E6%9C%8D%E5%8A%A1)
### 5. [Matériel d'apprentissage Learning Materials](https://github.com/crownpku/awesome-chinese-nlp#learning-materials-学习资料)


<br />
<br />

## Outils NLP chinois Chinese NLP Toolkits

### Boîtes à outils NLP intégrées Toolkits

- [THULAC 中文词法分析工具包](http://thulac.thunlp.org/) par 清华 (C++/Java/Python)

- [NLPIR](https://github.com/NLPIR-team/NLPIR) par 中科院 (Java)

- [LTP 语言技术平台](https://github.com/HIT-SCIR/ltp) par 哈工大 (C++)  [pylyp](https://github.com/HIT-SCIR/pyltp) wrapper Python pour LTP

- [FudanNLP](https://github.com/FudanNLP/fnlp) par 复旦 (Java)

- [BaiduLac](https://github.com/baidu/lac) par 百度 outil d'analyse lexicale open-source de Baidu pour le chinois, incluant segmentation, étiquetage grammatical et reconnaissance d'entités nommées.

- [HanLP](https://github.com/hankcs/HanLP) (Java)

- [FastNLP](https://github.com/fastnlp/fastNLP) (Python) une suite NLP légère.

- [SnowNLP](https://github.com/isnowfy/snownlp) (Python) bibliothèque Python pour traiter le texte chinois

- [YaYaNLP](https://github.com/Tony-Wang/YaYaNLP) (Python) package NLP chinois écrit en Python pur, nommé d'après « 牙牙学语 » (apprendre à parler)

- [小明NLP](https://github.com/SeanLee97/xmnlp) (Python) outil NLP chinois léger

- [DeepNLP](https://github.com/rockingdingo/deepnlp) (Python) pipeline NLP de deep learning implémenté sur Tensorflow avec des modèles chinois pré-entraînés.

- [chinese_nlp](https://github.com/taozhijiang/chinese_nlp) (C++ & Python) outils et exemples de traitement du langage naturel chinois

- [lightNLP](https://github.com/smilelight/lightNLP) (Python) framework de deep learning NLP basé sur Pytorch et torchtext

- [Chinese-Annotator](https://github.com/crownpku/Chinese-Annotator) (Python) outil d'annotation de texte chinois Annotator for Chinese Text Corpus

- [Poplar](https://github.com/synyi/poplar) (Typescript) un outil d'annotation web pour le NLP

- [Jiagu](https://github.com/ownthink/Jiagu) (Python) Jiagu est entraîné sur des corpus à grande échelle à partir de modèles comme BiLSTM. Il fournit segmentation, étiquetage grammatical, reconnaissance d'entités nommées, analyse de sentiment, extraction de relations de graphe de connaissances, extraction de mots-clés, résumé de texte, découverte de nouveaux mots, etc.

- [SmoothNLP](https://github.com/smoothnlp/SmoothNLP) (Python & Java) axé sur des techniques NLP explicables

- [FoolNLTK](https://github.com/rockyzhengwu/FoolNLTK) (Python & Java) une boîte à outils de langage naturel chinois A Chinese Nature Language Toolkit

### Boîtes à outils NLP anglaises ou multilingues courantes Popular NLP Toolkits for English/Multi-Language

- [CoreNLP](https://github.com/stanfordnlp/CoreNLP) par Stanford (Java) une suite Java d'outils NLP principaux.

- [Stanza](https://github.com/stanfordnlp/stanza) par Stanford (Python) une bibliothèque NLP Python pour de nombreuses langues humaines

- [NLTK](http://www.nltk.org/) (Python) Natural Language Toolkit

- [spaCy](https://spacy.io/) (Python) NLP de niveau industriel, avec un [cours en ligne](https://course.spacy.io/)

- [textacy](https://github.com/chartbeat-labs/textacy) (Python) NLP, avant et après spaCy

- [OpenNLP](https://opennlp.apache.org/) (Java) une boîte à outils basée sur l'apprentissage automatique pour le traitement de texte en langage naturel.

- [gensim](https://github.com/RaRe-Technologies/gensim) (Python) Gensim est une bibliothèque Python pour la modélisation thématique, l'indexation de documents et la recherche de similarité sur de grands corpus.

- [Kashgari](https://github.com/BrikerMan/Kashgari) - framework NLP simple et puissant, construisez votre modèle de pointe en 5 minutes pour la reconnaissance d'entités nommées (NER), l'étiquetage grammatical (PoS) et la classification de texte. Inclut BERT et word2vec.


### Segmentation de mots chinois Chinese Word Segment

- [Jieba 结巴中文分词](https://github.com/fxsjy/jieba) (Python et de nombreuses autres variantes) le meilleur composant de segmentation chinoise pour Python

- [北大中文分词工具](https://github.com/lancopku/pkuseg-python) (Python) outil de segmentation chinois à haute précision, simple à utiliser, améliorant nettement la précision par rapport aux outils open-source existants.

- [kcws 深度学习中文分词](https://github.com/koth/kcws) (Python) BiLSTM+CRF et IDCNN+CRF

- [ID-CNN-CWS](https://github.com/hankcs/ID-CNN-CWS) (Python) Convolutions dilatées itérées pour la segmentation de mots chinois Iterated Dilated Convolutions for Chinese Word Segmentation

- [Genius 中文分词](https://github.com/duanhongyi/genius) (Python) Genius est un composant open-source de segmentation chinoise en python, utilisant l'algorithme CRF (Champ aléatoire conditionnel).

- [loso 中文分词](https://github.com/fangpenlin/loso) (Python)

- [yaha "哑哈"中文分词](https://github.com/jannson/yaha) (Python)

- [ChineseWordSegmentation](https://github.com/Moonshile/ChineseWordSegmentation) (Python) algorithme de segmentation chinoise sans corpus Chinese word segmentation algorithm without corpus

- [Go 语言高性能分词](https://github.com/go-ego/gse) (Go) segmentation de texte efficace en Go ; supporte l'anglais, le chinois, le japonais et autres.

- [Ansj中文分词](https://github.com/NLPchina/ansj_seg) (java) implémentation java de segmentation chinoise basée sur n-Gram+CRF+HMM


### Extraction d'informations Information Extraction

- [MITIE](https://github.com/mit-nlp/MITIE) (C++) bibliothèque et outils pour l'extraction d'informations

- [Duckling](https://github.com/facebookincubator/duckling) (Haskell) langage, moteur et outillage pour exprimer, tester et évaluer des règles de langage composables sur des chaînes d'entrée.

- [IEPY](https://github.com/machinalis/iepy) (Python)  IEPY est un outil open-source d'extraction d'informations axé sur l'extraction de relations.

- [Snorkel](https://github.com/HazyResearch/snorkel) un système de création et de gestion de données d'entraînement axé sur l'extraction d'informations

- [Extraction de relations neuronale implémentée avec LSTM dans TensorFlow](https://github.com/thunlp/TensorFlow-NRE)

- [Un modèle de réseau de neurones pour la reconnaissance d'entités nommées chinoises](https://github.com/zjy-ucas/ChineseNER)

- [bert-chinese-ner](https://github.com/ProHiryu/bert-chinese-ner) utilise le modèle de langage pré-entraîné BERT pour le NER chinois

- [Information-Extraction-Chinese](https://github.com/crownpku/Information-Extraction-Chinese) reconnaissance d'entités chinoises avec IDCNN/biLSTM+CRF, et extraction de relations avec biGRU+2ATT 中文实体识别与关系提取

- [Familia](https://github.com/baidu/Familia) de Baidu, A Toolkit for Industrial Topic Modeling

- [Text Classification](https://github.com/brightmart/text_classification) tous types de modèles de classification de texte et plus avec le deep learning. Utilise le corpus de questions-réponses Zhihu comme données de test.

- [ComplexEventExtraction](https://github.com/liuhuanyong/ComplexEventExtraction) concepts et modèles explicites d'événements composés chinois, incluant extraction d'événements conditionnels, causaux, de succession, d'inversion, etc., formant un graphe d'événements.

- [TextRank4ZH](https://github.com/letiantian/TextRank4ZH) extrait automatiquement mots-clés et résumés de textes chinois


### QA et Chatbot QA & Chatbot

- [Rasa NLU](https://github.com/RasaHQ/rasa_nlu) (Python) transforme le langage naturel en données structurées, une branche chinoise sur [Rasa NLU Chi](https://github.com/crownpku/Rasa_NLU_Chi)

- [Rasa Core](https://github.com/RasaHQ/rasa_core) (Python) moteur de dialogue basé sur l'apprentissage automatique pour logiciels conversationnels

- [Chatstack](https://github.com/crownpku/Chatstack-Doc) une UI de pipeline complet pour construire un système NLU chinois

- [Snips NLU](https://github.com/snipsco/snips-nlu) (Python) Snips NLU est une bibliothèque Python qui analyse des phrases en langage naturel et en extrait des informations structurées.

- [DeepPavlov](https://github.com/deepmipt/DeepPavlov) (Python) une bibliothèque open-source pour construire des systèmes de dialogue de bout en bout et entraîner des chatbots.

- [ChatScript](https://github.com/bwilcox-1234/ChatScript) outil/gestionnaire de dialogue en langage naturel, un moteur de chatbot à base de règles.

- [Chatterbot](https://github.com/gunthercox/ChatterBot) (Python) ChatterBot est un moteur de dialogue conversationnel d'apprentissage automatique pour créer des chatbots.

- [Chatbot](https://github.com/zake7749/Chatbot) (Python) chatbot contextuel basé sur la correspondance vectorielle

- [Tipask](https://github.com/sdfsky/tipask) (PHP) un système de Q/R PHP open-source, basé sur Laravel, facile à étendre, avec une grande capacité de charge et stabilité.

- [QuestionAnsweringSystem](https://github.com/ysc/QuestionAnsweringSystem) (Java) un système de Q/R homme-machine en Java, capable d'analyser automatiquement les questions et de proposer des réponses candidates.

- [QA-Snake](https://github.com/SnakeHacker/QA-Snake) (Python) Q/R automatique basée sur plusieurs moteurs de recherche et le deep learning

- [Modèle de chatbot Sequence to Sequence implémenté avec TensorFlow](https://github.com/qhduan/Seq2Seq_Chatbot_QA) (Python)

- [Système de Q/R de compréhension de lecture chinoise par deep learning](https://github.com/S-H-Y-GitHub/QA) (Python)

- [AnyQ by Baidu](https://github.com/baidu/AnyQ) comprend principalement un framework de Q/R pour collections FAQ et l'outil de correspondance sémantique SimNet.

- [Code baseline DuReader de compréhension de lecture chinoise](https://github.com/baidu/DuReader) (Python)

- [Framework de robot automatique basé sur SmartQQ](https://github.com/Yinzo/SmartQQBot) (Python)

- [QASystemOnMedicalKG](https://github.com/liuhuanyong/QASystemOnMedicalKG) (Python) un graphe de connaissances médicales d'une certaine ampleur centré sur les maladies, fournissant Q/R et analyse automatiques.

- [GPT2-chitchat](https://github.com/yangjianxin1/GPT2-chitchat) (Python) modèle GPT2 pour bavardage chinois

- [CDial-GPT](https://github.com/thu-coai/CDial-GPT) (Python) fournit un grand corpus de dialogue chinois et un modèle de pré-entraînement de dialogue chinois (modèle GPT chinois) dessus


### Représentation et recherche multimodales Multi-Modal Representation & Retrieval

- [Chinese-CLIP](https://github.com/OFA-Sys/Chinese-CLIP) (Python) Chinese-CLIP est un modèle pré-entraîné de représentation multimodale texte-image chinois. Basé sur la structure CLIP d'OpenAI, pré-entraîné sur un grand corpus texte-image chinois natif, plusieurs tailles de modèles sont open-source, avec rapport technique et démo de recherche.


<br />
<br />

## Corpus chinois Corpus

- [OpenKG.cn 开放知识图谱](http://openkg.cn)

- [Schéma du graphe de connaissances chinois ouvert](https://github.com/cnschema/cnschema)

- [CN-Probase, grand graphe de concepts chinois](http://kw.fudan.edu.cn/cnprobase/search/) [présentation sur compte officiel](https://mp.weixin.qq.com/s?__biz=MzI0MTI1Nzk1MA==&mid=2651675884&idx=1&sn=1a43a93fd5bb53c8a9e48518bfa41db8&chksm=f2f7a05dc580294b227332b1051bfa2e5c756c72efb4d102c83613185b571ac31343720a6eae&mpshare=1&scene=1&srcid=1113llNDS1MvoadhCki83ERW#rd)

- [Téléchargement open-source d'un grand graphe de connaissances chinois de 1,4 milliard](https://github.com/ownthink/KnowledgeGraphData)

- [Graphe de connaissances agricoles](https://github.com/qq547276542/Agriculture_KnowledgeGraph) recherche d'informations, reconnaissance d'entités, extraction de relations, construction d'arbres de classification, fouille de données dans le domaine agricole

- [CLDC 中文语言资源联盟](http://www.chineseldc.org/)

- [Dump Wikipedia chinois](https://dumps.wikimedia.org/zhwiki/)

- [Modèles de pré-entraînement chinois selon différents corpus et modèles (BERT, GPT, etc.)](https://github.com/dbiir/UER-py) framework de modèles pré-entraînés chinois supportant différents corpus, encodeurs et tâches (from RUC and Tencent)

- [OpenCLaP](https://github.com/thunlp/OpenCLaP) dépôt open-source de modèles de langue pré-entraînés chinois multi-domaines (from Tsinghua)

- [Corpus d'étiquetage grammatical du Quotidien du Peuple 1998@Baidu Disk](https://pan.baidu.com/s/1gd6mslt)

- [Corpus d'actualités Sogou 20061127 (avec classification)@Baidu Disk](https://pan.baidu.com/s/1bnhXX6Z)

- [UDChinese](https://github.com/UniversalDependencies/UD_Chinese) (pour entraîner le PoS spaCy)

- [Modèle word2vec chinois](https://github.com/to-shimo/chinese-word2vec)

- [Plus d'une centaine de vecteurs de mots chinois pré-entraînés](https://github.com/Embedding/Chinese-Word-Vectors)

- [Tencent AI Lab Embedding Corpus for Chinese Words and Phrases](https://ai.tencent.com/ailab/nlp/embedding.html)

- [BERT chinois pré-entraîné avec Whole Word Masking](https://github.com/ymcui/Chinese-BERT-wwm)

- [Code d'entraînement GPT2 chinois](https://github.com/Morizeyao/GPT2-Chinese) peut écrire des poèmes, des nouvelles, des romans, ou entraîner un modèle de langage général.

- [ChineseGLUE, benchmark de compréhension du langage chinois](https://github.com/chineseGLUE/chineseGLUE) inclut jeux de données représentatifs, modèles de référence (pré-entraînés), corpus, classement.

- [Base de données du dictionnaire Xinhua chinois](https://github.com/pwxcoo/chinese-xinhua) inclut proverbes, idiomes, mots, caractères.

- [Synonyms : boîte à outils de synonymes chinois](https://github.com/huyingxi/Synonyms/) bibliothèque de synonymes entraînée sur Wikipédia chinois et word2vec, encapsulée en package python.

- [Chinese_conversation_sentiment](https://github.com/z17176/Chinese_conversation_sentiment) un jeu de données de sentiment chinois pouvant servir à l'analyse de sentiment.

- [Corpus d'événements d'urgence chinois](https://github.com/shijiebei2009/CEC-Corpus) Chinese Emergency Corpus

- [dgk_lost_conv, corpus de dialogues chinois](https://github.com/rustch3n/dgk_lost_conv) chinese conversation corpus

- [Corpus pour entraîner des systèmes de dialogue chinois et anglais](https://github.com/candlewill/Dialog_Corpus) Datasets for Training Chatbot System

- [Corpus de Q/R du forum Gossiping en chinois](https://github.com/zake7749/Gossiping-Chinese-Corpus)

- [Corpus de chat public chinois](https://github.com/codemayq/chaotbot_corpus_Chinese)

- [Extraction des annonces boursières chinoises](https://github.com/startprogress/China_stock_announcement) scripts python pour obtenir les annonces (sociétés cotées et régulateurs) des marchés sz, sh depuis les serveurs de Juchao

- [Interface de données financières tushare](http://tushare.org/) TuShare est un package d'interface de données financières python gratuit et open-source.

- [Jeu de données de texte financier](https://github.com/smoothnlp/FinancialDatasets) SmoothNLP 金融文本数据集(公开) Public Financial Datasets for NLP Researches

- [Corpus du domaine de l'assurance](https://github.com/Samurais/insuranceqa-corpus-zh)   [[Blog 52nlp](http://www.52nlp.cn/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E4%BF%9D%E9%99%A9%E8%A1%8C%E4%B8%9A%E9%97%AE%E7%AD%94%E5%BC%80%E6%94%BE%E6%95%B0%E6%8D%AE%E9%9B%86)] OpenData en assurance pour tâches d'apprentissage automatique OpenData in insurance area for Machine Learning Tasks

- [Base de données la plus complète de poésie chinoise ancienne](https://github.com/chinese-poetry/chinese-poetry) près de 14000 poètes des dynasties Tang et Song, ~55000 poèmes Tang et 260000 poèmes Song. 1564 auteurs de ci de l'époque Song, 21050 ci.

- [Données de compréhension de lecture chinoise DuReader](http://ai.baidu.com/broad/subordinate?dataset=dureader)

- [Petits corpus chinois](https://github.com/crownpku/Small-Chinese-Corpus) inclut reconnaissance d'entités, reconnaissance de relations, compréhension de lecture chinoises en petites quantités

- [Chinese-Literature-NER-RE-Dataset](https://github.com/lancopku/Chinese-Literature-NER-RE-Dataset) jeu de données de reconnaissance d'entités et d'extraction de relations au niveau du discours pour texte littéraire chinois A Discourse-Level Named Entity Recognition and Relation Extraction Dataset for Chinese Literature Text

- [ChineseTextualInference](https://github.com/liuhuanyong/ChineseTextualInference) projet d'inférence textuelle chinoise, incluant traduction et construction d'un jeu de 880000 paires d'implication textuelle, et modèle d'implication textuelle basé sur le deep learning.

- [Grand corpus de TALN chinois](https://github.com/brightmart/nlp_chinese_corpus) Wikipédia (wiki2019zh), actualités (news2016zh), Q/R encyclopédiques (baike2018qa)

- [Corpus de noms de personnes chinois](https://github.com/wainshine/Chinese-Names-Corpus) noms, patronymes, prénoms, appellations chinoises, noms japonais, noms traduits, noms anglais.

- [Corpus de noms d'entreprises et d'organisations](https://github.com/wainshine/Company-Names-Corpus) abréviations, acronymes, marques, noms d'entreprises.

- [Dictionnaire de mots sensibles chinois](https://github.com/observerss/textfilter) plusieurs implémentations de filtrage de mots sensibles + un dictionnaire de ~10k mots

- [Corpus d'abréviations chinoises](https://github.com/zhangyics/Chinese-abbreviation-dataset) un corpus d'abréviations chinoises incluant les formes longues négatives A corpus of Chinese abbreviation, including negative full forms.

- [Matériel de prétraitement de données chinoises](https://github.com/dongxiexidian/Chinese) dictionnaire de segmentation et mots vides chinois

- [Dictionnaire de décomposition des caractères chinois 漢語拆字字典](https://github.com/kfcd/chaizi)

- [SentiBridge : base de connaissances de sentiment d'entités chinoises](https://github.com/rainarch/SentiBridge) décrit comment les gens décrivent une entité, 300000 paires couvrant actualités, voyage, restauration.

- [OpenCorpus](https://github.com/hankcs/OpenCorpus) une collection de corpus (chinois) librement disponibles.

- [ChineseNlpCorpus](https://github.com/SophonPlus/ChineseNlpCorpus) analyse de tendance sentiment/opinion/commentaire, reconnaissance d'entités chinoises, système de recommandation

- [FinancialDatasets](https://github.com/smoothnlp/FinancialDatasets) SmoothNLP 金融文本数据集(公开) Public Financial Datasets for NLP Researches Only

- [People's Daily & Children's Fairy Tale](https://github.com/ymcui/Chinese-Cloze-RC) PD&CFT : un jeu de données de compréhension de lecture chinois A Chinese Reading Comprehension Dataset
- [Wikipédia chinoise 230k entrées de qualité - maj juillet 2023 - infos sensibles/contestées filtrées](https://huggingface.co/datasets/pleisto/wikipedia-cn-20230720-filtered)

<br />
<br />

## Organisations académiques et concours NLP chinois Organizations

- [Laboratoire de TALN et de calcul humain de l'Université Tsinghua](http://nlp.csai.tsinghua.edu.cn/site2/index.php/zh)

- [Laboratoire clé du ministère de linguistique computationnelle de l'Université Peking](http://klcl.pku.edu.cn/)

- [Groupe de recherche TALN de l'Institut de calcul de l'Académie des sciences](http://www.nlpir.org/)

- [Laboratoire de technologies intelligentes et TALN de 哈工大](http://insun.hit.edu.cn/)

- [Centre de calcul social et de recherche d'information de 哈工大](http://ir.hit.edu.cn/)

- [Groupe TALN de l'Université Fudan](http://nlp.fudan.edu.cn/)

- [Groupe TALN de l'Université Soochow](http://nlp.suda.edu.cn/index.html)

- [Groupe de recherche TALN de l'Université Nanjing](http://nlp.nju.edu.cn)

- [Laboratoire TALN de l'Université Northeastern](http://www.nlplab.com/)

- [Laboratoire TALN de l'Université Xiamen](http://nlp.xmu.edu.cn/)

- [Laboratoire TALN de l'Université Zhengzhou](http://nlp.zzu.edu.cn/)

- [TALN de Microsoft Research Asia](https://www.msra.cn/zh-cn/research/nlp)

- [Laboratoire Noah's Ark de Huawei](http://www.noahlab.com.hk/)

- [CUHK Text Mining Group](http://www1.se.cuhk.edu.hk/~textmine/)

- [PolyU Social Media Mining Group](http://www4.comp.polyu.edu.hk/~cswjli/Group.html)

- [HKUST Human Language Technology Center](http://www.cse.ust.hk/~hltc/)

- [National Taiwan University NLP Lab](http://nlg.csie.ntu.edu.tw/)

- [Société chinoise de l'information en langue chinoise](http://www.cipsc.org.cn/)

- [NLP Conference Calender](http://cs.rochester.edu/~omidb/nlpcalendar/) principales conférences, revues, ateliers et tâches partagées de la communauté NLP.

- [2017 1ère évaluation de compréhension de lecture machine chinoise « iFlytek Cup »](http://www.cips-cl.org/static/CCL2017/iflytek.html)

- [2017 AI-Challenger description d'images en chinois](https://www.challenger.ai/competition/caption) décrire en une phrase l'information principale d'une image donnée, relevant du défi de compréhension d'image en contexte chinois.

- [2017 AI-Challenger traduction de texte anglais-chinois](https://www.challenger.ai/competition/translation) utiliser de grands corpus pour améliorer les modèles de traduction automatique anglo-chinois.

- [2017 concours d'apprentissage automatique Zhihu Kanshan Cup](https://biendata.com/competition/zhihu/) entraîner un modèle d'étiquetage automatique à partir des données de formation liant questions et tags de sujets sur Zhihu.

- [2018 tâche de Q/R chinoise en domaine ouvert](https://biendata.com/competition/CCKS2018_4/) pour une question chinoise donnée, le système choisit dans la base de connaissances des entités ou valeurs comme réponse.

- [2018 concours d'appariement de questions du service client de WeBank](https://biendata.com/competition/CCKS2018_3/) sur corpus client réel en chinois, appariement d'intention ; étant données deux phrases, juger si les intentions sont proches.


<br />
<br />

## Services commerciaux NLP chinois Industry

- [Huawei Cloud NLP](https://www.huaweicloud.com/product/nlp.html) service cloud d'analyse et d'exploitation de texte pour entreprises et développeurs, aidant à traiter efficacement le texte

- [Baidu Cloud NLP](https://cloud.baidu.com/product/nlp.html) fournit une technologie NLP de pointe, d'excellente compréhension et traitement de texte

- [Alibaba Cloud NLP](https://data.aliyun.com/product/nlp) outil central d'analyse et d'exploitation de texte pour entreprises et développeurs

- [Tencent Cloud NLP](https://cloud.tencent.com/product/nlp) basé sur calcul parallèle et crawler distribué, combiné à une analyse sémantique unique, répond en un point aux besoins NLP, transcodage, extraction, capture de données

- [Plateforme ouverte iFlytek](https://www.xfyun.cn/) plateforme d'IA centrée sur l'interaction vocale

- [Laboratoire Sogou](http://www.sogou.com/labs/webservice/) segmentation et étiquetage grammatical

- [BosonNLP 玻森数据](http://bosonnlp.com/) société shanghaise Boson, spécialisée dans l'analyse sémantique chinoise

- [Yunfu Tech 云孚科技](https://www.yunfutech.com/) boîtes à outils NLP, graphes de connaissances, fouille de texte, systèmes de dialogue, analyse d'opinion, etc.

- [Zhiyan Tech 智言科技](http://www.webot.ai) société d'IA axée sur le deep learning et les graphes de connaissances

- [Zhuiyi Tech 追一科技](https://zhuiyi.ai/) axée sur le deep learning et le TALN


<br />
<br />

## Matériel d'apprentissage Learning Materials

- [Livre Deep Learning en chinois](https://github.com/exacity/deeplearningbook-chinese)

- [Stanford CS224n Natural Language Processing with Deep Learning 2017](http://web.stanford.edu/class/cs224n/syllabus.html)

- [Oxford CS DeepNLP 2017](https://github.com/oxford-cs-deepnlp-2017)

- [Supports de cours pour Georgia Tech CS 4650 et 7650, « Natural Language »] (https://github.com/jacobeisenstein/gt-nlp-class)

- [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) par Dan Jurafsky et James H. Martin

- [52nlp 我爱自然语言处理](http://www.52nlp.cn/)

- [hankcs 码农场](http://www.hankcs.com/)

- [Supports du cours pratique de traitement de texte](https://github.com/Roshanson/TextInfoExp) incluant extraction de features (TF-IDF), classification, clustering, entraînement word2vec et similarité de mots, résumé automatique, extraction d'informations, analyse de sentiment et fouille d'opinion.

- [nlp_tasks](https://github.com/Kyubyong/nlp_tasks) Natural Language Processing Tasks and Selected References

- [Introduction à la recherche NLP](https://github.com/zibuyu/research_tao) par le professeur Liu Zhiyuan de 清华


<br />
<br />
