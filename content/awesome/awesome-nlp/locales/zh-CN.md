# awesome-nlp

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

---

> **由 [Atlas Cloud](https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp) 赞助**
>
> <a href="https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/atlas-cloud-dark.png"><img src="assets/atlas-cloud-light.png" alt="Atlas Cloud" width="220" /></picture></a>
>
> **AI API 聚合平台，提供兼容 OpenAI 的 LLM 接口**，用于翻译、摘要、多语言生成和结构化信息抽取等 NLP 任务。

---

自然语言处理相关资源精选列表。

_贡献前请阅读[贡献指南](contributing.md)。欢迎通过提交[拉取请求](https://github.com/keonkim/awesome-nlp/pulls)添加你喜爱的 NLP 资源。_

## 范围

本列表涵盖自然语言处理，包括语言学分析、多语言工具、经典与神经方法、数据集和评估。仅收录能够推进或评估核心 NLP 任务或能力（分词、多语言能力、机器翻译、摘要、命名实体识别、问答、事实性、探测、蒸馏）的大语言模型。通用聊天机器人、智能体框架、提示模板仓库、代码生成工具和 RAG 应用入门套件收录在其他列表中——参见[另请参阅](#see-also)。

## 目录

* [研究综述与趋势](#research-summaries-and-trends)
* [知名 NLP 研究实验室](#prominent-nlp-research-labs)
* [教程](#tutorials)
  * [阅读材料](#reading-content)
  * [视频与课程](#videos-and-online-courses)
  * [书籍](#books)
* [库](#libraries)
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
* [服务](#services)
* [标注工具](#annotation-tools)
* [任务与方法](#tasks-and-methods)
  * [文本嵌入](#text-embeddings)
  * [分词、形态学与切分](#tokenization-morphology-and-segmentation)
  * [词性标注与依存句法分析](#pos-tagging-and-dependency-parsing)
  * [命名实体识别与信息抽取](#named-entity-recognition-and-information-extraction)
  * [共指消解](#coreference-resolution)
  * [文本分类与情感分析](#text-classification-and-sentiment-analysis)
  * [主题建模](#topic-modeling)
  * [摘要生成](#summarization)
  * [机器翻译](#machine-translation)
  * [问答与阅读理解](#question-answering-and-reading-comprehension)
  * [超越命名实体识别的信息抽取](#information-extraction-beyond-ner)
  * [检索与嵌入](#retrieval-and-embeddings)
  * [语音与文本](#speech-and-text)
* [数据集](#datasets)
* [多语言 NLP 框架](#multilingual-nlp-frameworks)
* [NLP 语言模型](#language-models-for-nlp)
  * [预训练与适配](#pretraining-and-adaptation)
  * [多语言与跨语言模型](#multilingual-and-cross-lingual-models)
  * [评估与基准](#evaluation-and-benchmarks)
  * [推理与测试时计算](#reasoning-and-test-time-compute)
  * [长上下文与替代架构](#long-context-and-alternative-architectures)
  * [事实性、幻觉与校准](#factuality-hallucination-calibration)
  * [探测与可解释性](#probing-and-interpretability)
  * [高效与小型语言模型](#efficient-and-small-language-models)
  * [指令微调与偏好优化](#instruction-tuning-and-preference-optimization)
  * [NLP 中的偏见、公平性与安全](#bias-fairness-safety-in-nlp)
* [各语言的 NLP](#nlp-per-language)
  * [阿拉伯语 NLP](#nlp-in-arabic)
  * [中文 NLP](#nlp-in-chinese)
  * [丹麦语 NLP](#nlp-in-danish)
  * [荷兰语 NLP](#nlp-in-dutch)
  * [德语 NLP](#nlp-in-german)
  * [匈牙利语 NLP](#nlp-in-hungarian)
  * [印度语言 NLP](#nlp-in-indic-languages)
  * [印度尼西亚语 NLP](#nlp-in-indonesian)
  * [韩语 NLP](#nlp-in-korean)
  * [波斯语 NLP](#nlp-in-persian)
  * [波兰语 NLP](#nlp-in-polish)
  * [葡萄牙语 NLP](#nlp-in-portuguese)
  * [西班牙语 NLP](#nlp-in-spanish)
  * [泰语 NLP](#nlp-in-thai)
  * [乌克兰语 NLP](#nlp-in-ukrainian)
  * [乌尔都语 NLP](#nlp-in-urdu)
  * [乌兹别克语 NLP](#nlp-in-uzbek)
  * [越南语 NLP](#nlp-in-vietnamese)
  * [其他语言](#other-languages)
* [另请参阅](#see-also)
* [引用](#citation)

## 研究综述与趋势

关注 NLP 最新研究的渠道：

* [ACL Anthology](https://aclanthology.org/) - ACL、EMNLP、NAACL、EACL、COLING 等相关会议论文的权威档案库。
* [NLP-Progress](https://nlpprogress.com/) - 跟踪常见 NLP 任务和数据集上的最新成果。
* [Papers With Code: NLP](https://paperswithcode.com/area/natural-language-processing) - NLP 任务的论文、基准和排行榜。
* [Sebastian Ruder's newsletter](https://newsletter.ruder.io/) - 定期汇总 NLP 研究与趋势。
* [ACL Rolling Review](https://aclrollingreview.org/) - 为 ACL 旗下会议提供滚动评审流程。
* [The Gradient](https://thegradient.pub/) - 关于机器学习和 NLP 研究的深度长文。
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp) - 以图解方式总结近期论文。

### 历史精选

* [NLP's ImageNet moment has arrived](https://thegradient.pub/nlp-imagenet/) - 一篇发表于 2018 年、探讨预训练语言模型兴起的文章。
* [Survey of the State of the Art in Natural Language Generation](https://arxiv.org/abs/1703.09902) - 2017 年的自然语言生成（NLG）综述。
* [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) and [The Illustrated BERT, ELMo, and co.](https://jalammar.github.io/illustrated-bert/) - 经典的可视化解读。

## 知名 NLP 研究实验室
[返回顶部](#contents)

* [The Berkeley NLP Group](http://nlp.cs.berkeley.edu/index.shtml) - 其重要成果包括一款重建早已消亡语言的工具，相关报道见[此处](https://www.bbc.com/news/science-environment-21427896)；该团队还利用亚洲及太平洋地区现今使用的 637 种语言语料，重建了这些语言的祖先语言。
* [Language Technologies Institute, Carnegie Mellon University](http://www.cs.cmu.edu/~nasmith/nlp-cl.html) - 重要项目包括 [Avenue Project](http://www.cs.cmu.edu/~avenue/)，一个面向克丘亚语、艾马拉语等濒危语言的句法驱动机器翻译系统；以及此前的 [Noah's Ark](http://www.cs.cmu.edu/~ark/)，该项目创建了 [AQMAR](http://www.cs.cmu.edu/~ark/AQMAR/) 以改进阿拉伯语 NLP 工具。
* [NLP research group, Columbia University](http://www1.cs.columbia.edu/nlp/index.cgi) - 负责开发了 BOLT（语音翻译系统的交互式错误处理），以及一个研究对话中笑声特征的未命名项目。
* [The Center or Language and Speech Processing, John Hopkins University](http://clsp.jhu.edu/) - 该中心近期因开发语音识别软件以创建帕金森病诊断测试而受到关注，详见[此处](https://www.clsp.jhu.edu/2019/03/27/speech-recognition-software-and-machine-learning-tools-are-being-used-to-create-diagnostic-test-for-parkinsons-disease/#.XNFqrIkzYdU)。
* [Computational Linguistics and Information Processing Group, University of Maryland](https://wiki.umiacs.umd.edu/clip/index.php/Main_Page) - 重要成果包括[人机协作式逐词问答](http://www.umiacs.umd.edu/~jbg/projects/IIS-1652666)以及语音表征发展的建模。
* [Penn Natural Language Processing, University of Pennsylvania](https://nlp.cis.upenn.edu/) - 以创建 [Penn Treebank](https://catalog.ldc.upenn.edu/LDC99T42) 和 [Penn Discourse Treebank](https://www.cis.upenn.edu/~pdtb/) 而闻名。
* [The Stanford Nautral Language Processing Group](https://nlp.stanford.edu/)- 全球顶尖 NLP 研究实验室之一，重要成果包括 [Stanford CoreNLP](https://nlp.stanford.edu/software/corenlp.shtml) 和其[共指消解系统](https://nlp.stanford.edu/software/dcoref.shtml)。


## 教程
[返回顶部](#contents)

### 阅读材料

通用机器学习

* [Machine Learning 101](https://docs.google.com/presentation/d/1kSuQyW5DTnkVaZEjGYCkfOxvzCqGEFzWBy4e9Uedd9k/edit?usp=sharing) 由 Google 资深创意工程师制作，为工程师和高管讲解机器学习。
* [AI Playbook](https://aiplaybook.a16z.com/) - a16z 的 AI 指南，适合转发给经理或作为演示文稿素材。
* [Sebastian Ruder's Newsletter](https://newsletter.ruder.io/) 分享 NLP 研究精选及相关评论。
* [How To Label Data](https://www.lighttag.io/how-to-label-data/) 关于管理大型语言标注项目的指南。
* [Depends on the Definition](https://www.depends-on-the-definition.com/) 涵盖众多 NLP 主题并提供详细实现的博客文章合集。

NLP 入门与指南

* [Understand & Implement Natural Language Processing](https://www.analyticsvidhya.com/blog/2017/01/ultimate-guide-to-understand-implement-natural-language-processing-codes-in-python/)
* [NLP in Python](http://github.com/NirantK/nlp-python-deep-learning) - GitHub 笔记本合集。
* [Natural Language Processing: An Introduction](https://academic.oup.com/jamia/article/18/5/544/829676) - 牛津大学。
* [NLP from Scratch with PyTorch](https://pytorch.org/tutorials/intermediate/nlp_from_scratch_index.html)
* [Hands-On NLTK Tutorial](https://github.com/hb20007/hands-on-nltk-tutorial) - NLTK 教程及 Jupyter 笔记本。
* [Natural Language Processing with Python – Analyzing Text with the Natural Language Toolkit](https://www.nltk.org/book/) - 通过 NLTK 介绍 NLP 概念的在线及纸质书籍。该书作者也编写了 NLTK 库。
* [从头训练新的语言模型](https://huggingface.co/blog/how-to-train) - Hugging Face 🤗
* [Advanced NLP with spaCy](https://course.spacy.io/en/) - 免费在线课程，涵盖文本处理、大规模数据分析、处理流水线，以及为自定义 NLP 任务训练神经网络模型。
* [Kaggle NLP Learning Guide](https://www.kaggle.com/learn-guide/natural-language-processing) - 面向初学者的教程，包括入门指南、NLP 深度学习，以及 BERT、GloVe 和 TF-IDF 等技术的可视化讲解。

博客与通讯

* [Deep Learning, NLP, and Representations](https://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
* [The Illustrated BERT, ELMo, and co. (How NLP Cracked Transfer Learning)](https://jalammar.github.io/illustrated-bert/) and [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
* [Natural Language Processing](https://nlpers.blogspot.com/) by Hal Daumé III
* [arXiv: Natural Language Processing (Almost) from Scratch](https://arxiv.org/pdf/1103.0398.pdf)
* [Karpathy's The Unreasonable Effectiveness of Recurrent Neural Networks](https://karpathy.github.io/2015/05/21/rnn-effectiveness)
* [Machine Learning Mastery: Deep Learning for Natural Language Processing](https://machinelearningmastery.com/category/natural-language-processing)
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp)

### 视频与在线课程
[返回顶部](#contents)

* [Advanced Natural Language Processing](https://people.cs.umass.edu/~miyyer/cs685_f20/) - UMass Amherst 计算机科学系的 CS 685 课程。
* [Deep Natural Language Processing](https://github.com/oxford-cs-deepnlp-2017/lectures) - 牛津大学的系列讲座。
* [Deep Learning for Natural Language Processing (cs224-n)](https://web.stanford.edu/class/cs224n/) - Richard Socher 和 Christopher Manning 在斯坦福大学开设的课程。
* [Neural Networks for NLP](http://phontron.com/class/nn4nlp2017/) - 卡内基梅隆大学语言技术研究所的课程。
* [Deep NLP Course](https://github.com/yandexdataschool/nlp_course) 由 Yandex Data School 开设，涵盖从文本嵌入到机器翻译的重要概念，包括序列建模、语言模型等。
* [fast.ai Code-First Intro to Natural Language Processing](https://www.fast.ai/2019/07/08/fastai-nlp/) - 融合传统 NLP 主题（包括正则表达式、SVD、朴素贝叶斯、分词）与新近神经网络方法（包括 RNN、seq2seq、GRU 和 Transformer），并探讨偏见、虚假信息等紧迫的伦理问题。Jupyter 笔记本见[此处](https://github.com/fastai/course-nlp)。
* [Machine Learning University - Accelerated Natural Language Processing](https://www.youtube.com/playlist?list=PL8P_Z6C4GcuWfAq8Pt6PBYlck4OprHXsw) - 课程从 NLP 和文本处理入门讲起，逐步介绍循环神经网络和 Transformer。
课程资料见[此处](https://github.com/aws-samples/aws-machine-learning-university-accelerated-nlp)。
* [Applied Natural Language Processing](https://www.youtube.com/playlist?list=PLH-xYrxjfO2WyR3pOAB006CYMhNt4wTqp)- IIT Madras 的系列讲座，从基础知识讲到自编码器等内容。本课程的 GitHub 笔记本也可在[此处](https://github.com/Ramaseshanr/anlp)获取。
* [DeepLearning.AI Natural Language Processing Specialization](https://www.deeplearning.ai/courses/natural-language-processing-specialization/) - 包含 4 门课程，讲解情感分析、词嵌入、RNN、LSTM、注意力机制，以及用于机器翻译和摘要等任务的 BERT、T5 等 Transformer 模型。
* [Stanford CS336: Language Modeling from Scratch](https://stanford-cs336.github.io/) - 从头构建语言模型的完整课程，涵盖数据、分词、训练和评估。
* [Stanford CS25: Transformers United](https://web.stanford.edu/class/cs25/) - 邀请近期 Transformer 与 NLP 研究作者演讲的研讨系列。
* [Cohere LLM University](https://cohere.com/llmu) - 关于大语言模型、嵌入、语义搜索和 NLP 应用的免费课程。
* [Hugging Face NLP Course](https://huggingface.co/learn/nlp-course) - 使用 Transformers、Datasets 和 Tokenizers 库进行实践 NLP 学习。
* [NLP Demystified](https://www.nlpdemystified.org/) - 面向初学者的免费课程，通过 Transformer 讲解 NLP 基础，并提供 Python/Jupyter 笔记本。


### 书籍

* [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) - Dan Jurafsky 教授编写的免费书籍。
* [Natural Language Processing](https://github.com/jacobeisenstein/gt-nlp-class) - Georgia Tech 的 Jacob Eisenstein 博士编写的免费 NLP 笔记。
* [NLP with PyTorch](https://github.com/joosthub/PyTorchNLPBook) - Brian & Delip Rao
* [Text Mining in R](https://www.tidytextmining.com)
* [Natural Language Processing with Python](https://www.nltk.org/book/)
* [Practical Natural Language Processing](https://www.oreilly.com/library/view/practical-natural-language/9781492054047/)
* [Natural Language Processing with Spark NLP](https://www.oreilly.com/library/view/natural-language-processing/9781492047759/)
* [Deep Learning for Natural Language Processing](https://www.manning.com/books/deep-learning-for-natural-language-processing) Stephan Raaijmakers 著。
* [Real-World Natural Language Processing](https://www.manning.com/books/real-world-natural-language-processing) - Masato Hagiwara 著。
* [Natural Language Processing in Action, Second Edition](https://www.manning.com/books/natural-language-processing-in-action-second-edition) - Hobson Lane 和 Maria Dyshel 著。
* [Transformers in Action](https://www.manning.com/books/transformers-in-action) - Nicole Koenigstein 著。
* [The Math Behind Artificial Intelligence](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book) - Tiago Monteiro 著 | FreeCodeCamp 免费书籍，以工程视角用通俗语言讲解 AI 背后的数学。内容涵盖线性代数、微积分、概率与统计、优化理论，并配有类比、实际应用和 Python 代码示例。
  
## 库

[返回顶部](#contents)

* <a id="node-js">**Node.js 与 JavaScript** - 面向 NLP 的 Node.js 库</a> | [回到顶部](#contents)
  * [Twitter-text](https://github.com/twitter/twitter-text) - Twitter 文本处理库的 JavaScript 实现。
  * [Knwl.js](https://github.com/benhmoore/Knwl.js) - JavaScript 自然语言处理器。
  * [Retext](https://github.com/retextjs/retext) - 可扩展的自然语言分析与处理系统。
  * [NLP Compromise](https://github.com/spencermountain/compromise) - 在浏览器中进行自然语言处理。
  * [Natural](https://github.com/NaturalNode/natural) - 为 Node 提供通用自然语言处理功能。
  * [Poplar](https://github.com/synyi/poplar) - 基于 Web 的自然语言处理（NLP）标注工具。
  * [NLP.js](https://github.com/axa-group/nlp.js) - 用于构建机器人的 NLP 库。
  * [node-question-answering](https://github.com/huggingface/node-question-answering) - 基于 DistilBERT 的快速、可用于生产环境的 Node.js 问答工具。

* <a id="python"> **Python** - Python NLP 库</a> | [回到顶部](#contents)
  - [sentimental-onix](https://github.com/sloev/sentimental-onix) 使用 ONNX 的 spaCy 情感分析模型。
  - [TextAttack](https://github.com/QData/TextAttack) - NLP 对抗攻击、对抗训练和数据增强工具。
  - [TextBlob](http://textblob.readthedocs.org/) - 提供统一 API，便于处理常见自然语言处理（NLP）任务。它基于 [Natural Language Toolkit (NLTK)](https://www.nltk.org/) 和 [Pattern](https://github.com/clips/pattern) 构建，并能与二者良好协作 :+1:
  - [spaCy](https://github.com/explosion/spaCy) - 基于 Python 和 Cython 的工业级 NLP 工具 :+1:
    - [textacy](https://github.com/chartbeat-labs/textacy) - 基于 spaCy 构建的高级 NLP 工具。
  - [gensim](https://radimrehurek.com/gensim/index.html) - 用于对纯文本进行无监督语义建模的 Python 库 :+1:
  - [scattertext](https://github.com/JasonKessler/scattertext) - 用于生成 D3 可视化图表、展示不同语料间语言差异的 Python 库。
  - [GluonNLP](https://github.com/dmlc/gluon-nlp) *(已归档)* - 基于 MXNet/Gluon 构建的 NLP 深度学习工具包。
  - [AllenNLP](https://github.com/allenai/allennlp) *(已归档)* - 基于 PyTorch 的 NLP 研究库，用于开发适用于各类语言任务的先进深度学习模型。
  - [PyTorch-NLP](https://github.com/PetrochukM/PyTorch-NLP) - 支持快速原型开发的 NLP 研究工具包，提供完善的数据加载器、词向量加载器、神经网络层表示，以及 BLEU 等常见 NLP 指标。
  - [Rosetta](https://github.com/columbia-applied-data-science/rosetta) - 文本处理工具及其封装（例如 Vowpal Wabbit）。
  - [PyNLPl](https://github.com/proycon/pynlpl) - Python 自然语言处理库。通用 NLP 库，可处理 ARPA 语言模型、Moses 短语表、GIZA++ 对齐等特定格式。
  - [foliapy](https://github.com/proycon/foliapy) - 用于处理语言标注 XML 格式 [FoLiA](https://proycon.github.io/folia/) 的 Python 库。
  - [PySS3](https://github.com/sergioburdisso/pyss3) - 实现 SS3 白盒文本分类器的 Python 包；附带用于解释预测结果的交互式可视化工具。
  - [jPTDP](https://github.com/datquocnguyen/jPTDP) - 联合词性（POS）标注与依存句法分析工具包，提供 40 多种语言的预训练模型。
  - [BigARTM](https://github.com/bigartm/bigartm) - 快速主题建模库。
  - [Snips NLU](https://github.com/snipsco/snips-nlu) - 可用于生产环境的意图解析库。
  - [Chazutsu](https://github.com/chakki-works/chazutsu) - 用于下载和解析标准 NLP 研究数据集的库。
  - [Word Forms](https://github.com/gutfeeling/word_forms) - 可准确生成英语单词所有可能形式的工具。
  - [Multilingual Latent Dirichlet Allocation (LDA)](https://github.com/ArtificiAI/Multilingual-Latent-Dirichlet-Allocation-LDA) - 多语言、可扩展的文档聚类流水线。
  - [Natural Language Toolkit (NLTK)](https://www.nltk.org/) - 提供丰富 NLP 功能并支持 50 多种语料库的库。
  - [NLP Architect](https://github.com/NervanaSystems/nlp-architect) - 用于探索 NLP 和 NLU 最新深度学习架构与技术的库。
  - [Flair](https://github.com/zalandoresearch/flair) - 基于 PyTorch 构建的简洁先进多语言 NLP 框架，包含 BERT、ELMo 和 Flair 嵌入。
  - [Kashgari](https://github.com/BrikerMan/Kashgari) - 简洁的 Keras 多语言 NLP 框架，可在 5 分钟内构建命名实体识别（NER）、词性标注（PoS）和文本分类模型。包含 BERT 和 word2vec 嵌入。
  - [FARM](https://github.com/deepset-ai/FARM) - 快速简便的 NLP 迁移学习工具，致力于将语言模型应用于工业领域，重点关注问答。
  - [Haystack](https://github.com/deepset-ai/haystack) - 端到端 Python 框架，用于构建自然语言数据搜索界面。利用 Transformers 和先进 NLP 技术，支持 DPR、Elasticsearch、HuggingFace Modelhub 等。
  - [Rita DSL](https://github.com/zaibacu/rita-dsl) - 一种基于 [Apache UIMA 的 RUTA](https://uima.apache.org/ruta.html) 的 DSL，可定义语言模式（基于规则的 NLP），并将其转换为 [spaCy](https://spacy.io/) 规则；也可选择功能较少、更轻量的正则表达式模式。
  - [Transformers](https://github.com/huggingface/transformers) - 面向 TensorFlow 2.0 和 PyTorch 的自然语言处理库。
  - [Tokenizers](https://github.com/huggingface/tokenizers) - 为研究与生产环境优化的分词器。
  - [fairSeq](https://github.com/pytorch/fairseq) Facebook AI Research 对 PyTorch 中先进 seq2seq 模型的实现。
  - [corex_topic](https://github.com/gregversteeg/corex_topic) - 仅需少量领域知识的层次主题建模。
  - [Sockeye](https://github.com/awslabs/sockeye) - 为 Amazon Translate 提供支持的神经机器翻译（NMT）工具包。
  - [DL Translate](https://github.com/xhlulu/dl-translate) - 基于深度学习的 50 种语言翻译库，使用 `transformers` 和 Facebook 的 mBART Large 构建。
  - [Jury](https://github.com/obss/jury) - 提供多种自动化指标，用于评估 NLP 模型输出。
  - [python-ucto](https://github.com/proycon/python-ucto) - 面向多种语言、支持 Unicode 的正则表达式分词器。该 C++ 库的 Python 绑定支持 [FoLiA 格式](https://proycon.github.io/folia)。
  - [Pearmut](https://github.com/zouharvi/pearmut) - 用于机器翻译等多语言 NLP 任务的人工标注工具。
  - [Stanza](https://github.com/stanfordnlp/stanza) - Stanford NLP 的 Python 工具包，支持 70 多种语言的分词、词性标注、词形还原、依存句法分析和 NER。
  - [Sentence-Transformers](https://github.com/UKPLab/sentence-transformers) - 句子/文档嵌入、语义搜索与重排序工具，是检索类 NLP 的当前标准。
  - [Argilla](https://github.com/argilla-io/argilla) - 面向 LLM 和 NLP 数据集的开源数据标注与反馈收集平台。
  - [HuggingFace Datasets](https://github.com/huggingface/datasets) - 为数千个 NLP 数据集提供标准化加载器和处理工具。
  - [HuggingFace Evaluate](https://github.com/huggingface/evaluate) - NLP 评估指标的参考实现。
  - [sacrebleu](https://github.com/mjpost/sacrebleu) - 可复现的机器翻译 BLEU/chrF/TER 评分工具。
  - [COMET](https://github.com/Unbabel/COMET) - 基于学习的机器翻译评估指标，现已成为事实标准。
  - [LangTest](https://github.com/JohnSnowLabs/langtest) - 提供 60 多种测试类型，用于评估 NLP 模型的鲁棒性、偏见和公平性。
   - [yasbd-lib](https://github.com/speedyk-005/yasbd-lib) - 高精度、基于规则的句子边界检测器（SBD）。可直接替代 pysbd 的适配器，提供流式 API、CLI，以及支持 39 种以上语言的 spaCy 组件。

- <a id="c++">**C++** - C++ 库</a> | [回到顶部](#contents)
  - [InsNet](https://github.com/chncwang/InsNet) - 用于构建实例依赖型 NLP 模型的神经网络库，支持无填充动态批处理。
  - [MIT Information Extraction Toolkit](https://github.com/mit-nlp/MITIE) - 用于命名实体识别和关系抽取的 C、C++ 和 Python 工具。
  - [CRF++](https://taku910.github.io/crfpp/) - 开源条件随机场（CRF）实现，可用于序列数据切分/标注及其他自然语言处理任务。
  - [CRFsuite](http://www.chokkan.org/software/crfsuite/) - 用于序列数据标注的条件随机场（CRF）实现。
  - [BLLIP Parser](https://github.com/BLLIP/bllip-parser) - BLLIP 自然语言解析器（又称 Charniak-Johnson 解析器）。
  - [colibri-core](https://github.com/proycon/colibri-core) - C++ 库、命令行工具和 Python 绑定，可快速且节省内存地提取和处理 n-gram、skipgram 等基础语言结构。
  - [ucto](https://github.com/LanguageMachines/ucto) - 面向多种语言、支持 Unicode 的正则表达式分词器，提供工具和 C++ 库，并支持 FoLiA 格式。
  - [libfolia](https://github.com/LanguageMachines/libfolia) - [FoLiA 格式](https://proycon.github.io/folia/)的 C++ 库。
  - [frog](https://github.com/LanguageMachines/frog) - 为荷兰语开发的基于记忆的 NLP 套件：词性标注器、词形还原器、依存句法解析器、NER、浅层解析器和形态分析器。
  - [MeTA](https://github.com/meta-toolkit/meta) - ModErn Text Analysis：用于挖掘大型文本数据的 C++ 数据科学工具包。
  - [Mecab (Japanese)](https://taku910.github.io/mecab/)
  - [Moses](http://statmt.org/moses/)
  - [StarSpace](https://github.com/facebookresearch/StarSpace) - Facebook 提供的库，可创建词、段落和文档级嵌入，并用于文本分类。
  - [QSMM](http://qsmm.org) - 自适应概率自顶向下和自底向上解析器。

- <a id="java">**Java** - Java NLP 库</a> | [回到顶部](#contents)
  - [Stanford NLP](https://nlp.stanford.edu/software/index.shtml)
  - [OpenNLP](https://opennlp.apache.org/)
  - [NLP4J](https://emorynlp.github.io/nlp4j/)
  - [Word2vec in Java](https://deeplearning4j.org/docs/latest/deeplearning4j-nlp-word2vec)
  - [ReVerb](https://github.com/knowitall/reverb/) 面向 Web 规模的开放信息抽取工具。
  - [OpenRegex](https://github.com/knowitall/openregex) 高效灵活、基于 token 的正则表达式语言及引擎。
  - [CogcompNLP](https://github.com/CogComp/cogcomp-nlp) - 伊利诺伊大学认知计算组开发的核心库。
  - [MALLET](http://mallet.cs.umass.edu/) - MAchine Learning for LanguagE Toolkit（机器学习语言工具包），用于统计自然语言处理、文档分类、聚类、主题建模、信息抽取及其他文本机器学习应用。
  - [RDRPOSTagger](https://github.com/datquocnguyen/RDRPOSTagger) - 稳健的词性标注工具包，提供 Java 和 Python 版本及 40 多种语言的预训练模型。

- <a id="kotlin">**Kotlin** - Kotlin NLP 库</a> | [回到顶部](#contents)
  - [Lingua](https://github.com/pemistahl/lingua/) 适用于长短文本的 Kotlin 和 Java 语言检测库。
  - [Kotidgy](https://github.com/meiblorn/kotidgy) — 使用 Kotlin 编写、基于索引的文本数据生成器。

- <a id="scala">**Scala** - Scala NLP 库</a> | [回到顶部](#contents)
  - [Saul](https://github.com/CogComp/saul) - 用于开发 NLP 系统的库，内置 SRL、POS 等模块。
  - [ATR4S](https://github.com/ispras/atr4s) - 提供先进[自动术语识别](https://en.wikipedia.org/wiki/Terminology_extraction)方法的工具包。
  - [tm](https://github.com/ispras/tm) - 基于正则化多语言 [PLSA](https://en.wikipedia.org/wiki/Probabilistic_latent_semantic_analysis) 的主题建模实现。
  - [word2vec-scala](https://github.com/Refefer/word2vec-scala) - word2vec 模型的 Scala 接口，包含词距离、词类比等向量操作。
  - [Epic](https://github.com/dlwh/epic) - 使用 Scala 编写的高性能统计解析器，并附带用于构建复杂结构化预测模型的框架。
  - [Spark NLP](https://github.com/JohnSnowLabs/spark-nlp) - 构建于 Apache Spark ML 之上的自然语言处理库，可为机器学习流水线提供简单、高效、准确的 NLP 标注，并能轻松扩展至分布式环境。

- <a id="R">**R** - R NLP 库</a> | [回到顶部](#contents)
  - [text2vec](https://github.com/dselivanov/text2vec) - R 中用于快速向量化、主题建模、距离计算和 GloVe 词嵌入的工具。
  - [wordVectors](https://github.com/bmschmidt/wordVectors) - 用于创建和探索 word2vec 及其他词嵌入模型的 R 包。
  - [RMallet](https://github.com/mimno/RMallet) - 用于对接 Java 机器学习工具 MALLET 的 R 包。
  - [dfr-browser](https://github.com/agoldst/dfr-browser) - 生成 D3 可视化，以便在 Web 浏览器中浏览文本主题模型。
  - [dfrtopics](https://github.com/agoldst/dfrtopics) - 用于探索文本主题模型的 R 包。
  - [sentiment_classifier](https://github.com/kevincobain2000/sentiment_classifier) - 使用词义消歧和 WordNet 阅读器进行情感分类。
  - [jProcessing](https://github.com/kevincobain2000/jProcessing) - 日语自然语言处理库，包含日语情感分类功能。
  - [corporaexplorer](https://kgjerde.github.io/corporaexplorer/) - 用于动态探索文本集合的 R 包。
  - [tidytext](https://github.com/juliasilge/tidytext) - 使用 tidy 工具进行文本挖掘。
  - [spacyr](https://github.com/quanteda/spacyr) - spaCy NLP 的 R 封装。
  - [CRAN Task View: Natural Language Processing](https://github.com/cran-task-views/NaturalLanguageProcessing/)

- <a id="clojure">**Clojure**</a> | [回到顶部](#contents)
  - [Clojure-openNLP](https://github.com/dakrone/clojure-opennlp) - 在 Clojure 中进行自然语言处理（opennlp）。
  - [Infections-clj](https://github.com/r0man/inflections-clj) - 类似 Rails 的 Clojure 与 ClojureScript 词形变化库。
  - [postagga](https://github.com/fekr/postagga) - 用于在 Clojure 和 ClojureScript 中解析自然语言的库。

- <a id="go">**Go**</a> | [回到顶部](#contents)
  - [prose](https://github.com/jdkato/prose) - 支持分词、词性标注和命名实体抽取的文本处理库。
  - [gojieba](https://github.com/yanyiwu/gojieba) - Go 语言实现的 jieba 中文分词算法。
  - [kagome](https://github.com/ikawaha/kagome) - 使用纯 Go 编写的日语形态分析器。
  - [go-propisyu](https://github.com/rekurt/go-propisyu) - 将数字转换为符合语法性别和名词变格规则的俄语单词。

- <a id="ruby">**Ruby**</a> | [回到顶部](#contents)
  - Kevin Dias 的 [A collection of Natural Language Processing (NLP) Ruby libraries, tools and software](https://github.com/diasks2/ruby-nlp)
  - [Practical Natural Language Processing done in Ruby](https://github.com/arbox/nlp-with-ruby)

- <a id="rust">**Rust**</a> | [回到顶部](#contents)
  - [whatlang](https://github.com/greyblake/whatlang-rs) — 基于三元组的自然语言识别库。
  - [rust-bert](https://github.com/guillaume-be/rust-bert) - 可直接使用的 NLP 流水线和基于 Transformer 的模型。
  - [snips-nlu-rs](https://github.com/snipsco/snips-nlu-rs) *(已归档 — Snips 已停止运营)* - 可用于生产环境的意图解析库。

- <a id="NLP++">**NLP++** - NLP++ 语言</a> | [回到顶部](#contents)
  - [VSCode Language Extension](https://marketplace.visualstudio.com/items?itemName=dehilster.nlp) - VSCode 的 NLP++ 语言扩展。
  - [nlp-engine](https://github.com/VisualText/nlp-engine) - 用于在 Linux 上运行 NLP++ 代码的引擎，包含完整的英语解析器。
  - [VisualText](http://visualtext.org) - NLP++ 语言主页。
  - [NLP++ Wiki](http://wiki.naturalphilosophy.org/index.php?title=NLP%2B%2B) - NLP++ 语言的 Wiki 词条。

- <a id="julia">**Julia**</a> | [回到顶部](#contents)
  - [CorpusLoaders](https://github.com/JuliaText/CorpusLoaders.jl) - 多种 NLP 语料库加载器。
  - [Languages](https://github.com/JuliaText/Languages.jl) - 用于处理人类语言的软件包。
  - [TextAnalysis](https://github.com/JuliaText/TextAnalysis.jl) - Julia 文本分析包。
  - [TextModels](https://github.com/JuliaText/TextModels.jl) - 基于神经网络的自然语言处理模型。
  - [WordTokenizers](https://github.com/JuliaText/WordTokenizers.jl) - 用于自然语言处理及相关任务的高性能分词器。
  - [Word2Vec](https://github.com/JuliaText/Word2Vec.jl) - Julia 的 word2vec 接口。

### 服务

提供 NER、主题标注等高级功能的 NLP API | [回到顶部](#contents)

- [Wit-ai](https://github.com/wit-ai/wit) - 面向应用和设备的自然语言接口。
- [IBM Watson's Natural Language Understanding](https://github.com/watson-developer-cloud/natural-language-understanding-nodejs) - API 和 GitHub 演示。
- [Amazon Comprehend](https://aws.amazon.com/comprehend/) - NLP 和机器学习套件，涵盖 NER、标注和情感分析等常见任务。
- [Google Cloud Natural Language API](https://cloud.google.com/natural-language/) - 支持至少 9 种语言（包括英语和简体、繁体中文）的句法分析、NER、情感分析和内容标注。
- [ParallelDots](https://www.paralleldots.com/text-analysis-apis) - 高级文本分析 API 服务，涵盖情感分析、意图分析等功能。
- [Microsoft Cognitive Service](https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics/)
- [TextRazor](https://www.textrazor.com/)
- [Rosette](https://www.rosette.com/)
- [Textalytic](https://www.textalytic.com) - 在浏览器中执行自然语言处理，支持情感分析、命名实体抽取、词性标注、词频统计、主题建模、词云等功能。
- [NLP Cloud](https://nlpcloud.io) - 通过 RESTful API 提供 spaCy NLP 模型（自定义和预训练模型），支持命名实体识别（NER）、词性标注等功能。
- [Cloudmersive](https://cloudmersive.com/nlp-api) - 统一且免费的 NLP API，可执行词性标注、文本改写、语言翻译/检测和句子解析等操作。

### 标注工具

- [GATE](https://gate.ac.uk/overview.html) - 通用架构与文本工程平台，已有 15 年以上历史，免费且开源。
- [Anafora](https://github.com/weitechen/anafora) 是免费开源的 Web 原始文本标注工具。
- [brat](https://brat.nlplab.org/) - brat 快速标注工具是用于协作文本标注的在线环境。
- [doccano](https://github.com/chakki-works/doccano) - 免费开源的标注工具，支持文本分类、序列标注和序列到序列任务。
- [INCEpTION](https://inception-project.github.io) - 提供智能辅助和知识管理功能的语义标注平台。
- [prodigy](https://prodi.gy/) 是由主动学习驱动的标注工具，需付费。
- [LightTag](https://lighttag.io) - 面向团队的托管式文本标注工具，需付费。
- [rstWeb](https://corpling.uis.georgetown.edu/rstweb/info/) - 开源的本地或在线话语树标注工具。
- [GitDox](https://corpling.uis.georgetown.edu/gitdox/) - 开源服务器端标注工具，支持 GitHub 版本控制，并可验证 XML 数据和协作电子表格。
- [Datasaur](https://datasaur.ai/) 支持个人和团队使用多种 NLP 任务，采用免费增值模式。
- [Konfuzio](https://konfuzio.com/en/) - 以团队协作为先的云端及本地文本、图像和 PDF 标注工具，由主动学习驱动，提供免费增值方案，部分功能需付费。
- [UBIAI](https://ubiai.tools/) - 易用的团队文本标注工具，提供全面的自动标注功能。支持 NER、关系和文档分类，以及用于发票标注的 OCR 标注，部分功能需付费。
- [Shoonya](https://github.com/AI4Bharat/Shoonya-Backend) - 免费开源的数据标注平台，提供多种组织和工作区级管理功能。Shoonya 不受数据类型限制，团队可利用多个验证阶段大规模标注数据。
- [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) - 免费、端到端、无代码的文本标注及深度学习模型训练/调优平台。开箱即用地支持 Spark NLP 的命名实体识别、分类、关系抽取和断言状态模型。用户、团队、项目和文档数量不限。非自由开源软件。
- [FLAT](https://github.com/proycon/flat) - 基于 [FoLiA 格式](http://proycon.github.io/folia)（丰富的语言标注 XML 格式）的 Web 语言标注环境，免费且开源。
- [Argilla](https://github.com/argilla-io/argilla) - 开源平台，用于收集人工反馈、构建 NLP 和 LLM 数据集，以及整理偏好数据。
- [Label Studio](https://github.com/HumanSignal/label-studio) - 开放核心的多模态标注平台，广泛用于 NLP 标注。
- [Potato](https://github.com/davidjurgens/potato) - 免费开源标注工具，涵盖 21 种以上任务类型（分类、片段、共指消解、实体链接、智能体轨迹评估），内置 MACE 质量控制、注意力检查、AI 辅助标注和 300 多个示例任务。


## 任务与方法

NLP 资源按语言学问题分类。每个小节先列出基础/经典研究，再列神经方法，最后在适用时列出大语言模型方法。现代语言模型专项研究（预训练、评估、检索、推理等）请参见 [NLP 语言模型](#language-models-for-nlp)。

### 文本嵌入

[返回顶部](#contents)

静态词嵌入（基础方法）：

- [word2vec](https://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf) - [implementation](https://code.google.com/archive/p/word2vec/) - [explainer blog](http://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
- [GloVe](https://nlp.stanford.edu/pubs/glove.pdf) - [explainer blog](https://blog.acolyer.org/2016/04/22/glove-global-vectors-for-word-representation/)
- [fastText](https://arxiv.org/abs/1607.04606) - [实现](https://github.com/facebookresearch/fastText)；子词 n-gram 能很好地处理词汇表外（OOV）词汇，在低资源语言场景中仍然实用。
- [sense2vec](https://arxiv.org/abs/1511.06388) - 词义消歧。
- [Paragraph Vectors / doc2vec](https://cs.stanford.edu/~quocle/paragraph_vector.pdf)

上下文嵌入：

- [ELMo](https://arxiv.org/abs/1802.05365) - 深度上下文化词表示。
- [CoVe](https://arxiv.org/abs/1708.00107) - 从机器翻译中学习的上下文化向量。
- [ULMFiT](https://arxiv.org/abs/1801.06146) - 用于文本分类的语言模型微调方法。
- [InferSent](https://arxiv.org/abs/1705.02364) - 从自然语言推理任务中学习的句子表示。

现代句子和文档嵌入：参见 [NLP 检索](#retrieval-for-nlp)（Sentence-Transformers、E5、BGE-M3、Nomic、GritLM）及 [MTEB](https://github.com/embeddings-benchmark/mteb) 的最新排行榜。

### 分词、形态学与切分

[返回顶部](#contents)

- [SentencePiece](https://github.com/google/sentencepiece) - 与语言无关的子词分词。
- [BPE](https://arxiv.org/abs/1508.07909) 和 [Unigram LM](https://arxiv.org/abs/1804.10959) - 两种主流子词方案。
- [Stanza](https://github.com/stanfordnlp/stanza) - 支持 70 多种语言的分词、词形还原和形态分析。
- [UDPipe](https://github.com/ufal/udpipe) - 面向 Universal Dependencies 的分词、标注、词形还原和句法分析工具。
- [Morfessor](https://github.com/aalto-speech/morfessor) - 无监督形态切分。
分词器研究与架构（另见[语言模型](#language-models-for-nlp)）：

- [Byte-Pair Encoding (Sennrich et al.)](https://arxiv.org/abs/1508.07909) - 用于神经机器翻译的子词单元，是现代分词器的基础。
- [SentencePiece](https://github.com/google/sentencepiece) - 与语言无关的子词分词方法（BPE 和 Unigram）。
- [Tokenizers](https://github.com/huggingface/tokenizers) - 快速的 Rust 实现，支持 BPE、WordPiece 和 Unigram。
- [ByT5](https://arxiv.org/abs/2105.13626) - 无分词器的字节级模型。
- [CANINE](https://arxiv.org/abs/2103.06874) - 直接处理 Unicode 字符的无分词编码器。
- [How Good is Your Tokenizer?](https://arxiv.org/abs/2012.15613) - 跨语言分词器公平性。
- [Byte Latent Transformer (BLT)](https://arxiv.org/abs/2412.09871) (Meta，2024) - 通过动态字节级分块，在大规模场景下达到与 BPE 分词模型相当的效果，重新推动无分词器路线。
- [SuperBPE](https://arxiv.org/abs/2503.13423) (2025) - 超词分词方法，在下游任务上优于 BPE。
- [Over-Tokenized Transformer](https://arxiv.org/abs/2501.16975) (ICML 2025) - 将输入和输出词表解耦；揭示输入词表大小与训练损失之间的对数线性关系，使词表规模可独立于模型大小扩展。
- [Foundations of Tokenization](https://arxiv.org/abs/2407.11606) (ICLR 2025) - 首个利用随机映射范畴论构建分词器模型的形式化统一框架；提出统计一致性的条件。
- [The Token Tax: Systematic Bias in Multilingual Tokenization](https://arxiv.org/abs/2509.05486) (2025) - 量化分词膨胀程度对各语言模型准确率的预测作用，揭示形态复杂及低资源语言面临的结构性成本惩罚。
- [Reducing Tokenization Premiums for Low-Resource Languages](https://arxiv.org/abs/2601.13328) (2026) - 事后扩充词表，将低资源语言中的多 token 字符序列合并，无需重新训练即可降低推理成本。

### 词性标注与依存句法分析

[返回顶部](#contents)

- [Universal Dependencies](https://universaldependencies.org/) - 跨语言保持一致的树库，覆盖 100 多种语言。
- [spaCy](https://spacy.io/) 和 [Stanza](https://github.com/stanfordnlp/stanza) - 面向多种语言、适用于生产环境的解析器。
- [Deep Biaffine Attention for Neural Dependency Parsing](https://arxiv.org/abs/1611.01734) - 奠基性的神经句法分析架构。
- [Trankit](https://github.com/nlp-uoregon/trankit) - 轻量级、基于 Transformer 的多语言 NLP 工具包。
- [Self-Attentive Constituency Parsing (Kitaev & Klein)](https://arxiv.org/abs/1805.01052) - 强大的神经成分句法分析器。

### 命名实体识别与信息抽取

[返回顶部](#contents)

基础方法与神经方法：

- [CoNLL-2003 NER](https://www.aclweb.org/anthology/W03-0419/) - 经典英语 NER 基准。
- [Neural Architectures for NER (Lample et al.)](https://arxiv.org/abs/1603.01360) - BiLSTM-CRF，长期以来广泛采用的 NER 架构。
- [Flair](https://github.com/flairNLP/flair) - 基于上下文的字符串嵌入，在多种语言的 NER 任务上表现出色。
- [spaCy NER](https://spacy.io/usage/linguistic-features#named-entities) - 可用于生产环境。

开放式与指令遵循式信息抽取：

- [Universal NER](https://arxiv.org/abs/2308.03279) - 经指令微调、可跨语言执行开放集 NER 的语言模型。
- [GLiNER](https://arxiv.org/abs/2311.08526) (2023) - 小型通用 NER 模型，可在推理时处理任意实体类型。
- [GoLLIE](https://arxiv.org/abs/2310.03668) - 使用语言模型遵循指南执行信息抽取。
- [REBEL](https://github.com/Babelscape/rebel) - 将关系抽取作为 seq2seq 任务端到端完成。

基于大语言模型：

- [GPT-NER](https://arxiv.org/abs/2304.10428) - 用于命名实体识别的大语言模型。
- [Can LLMs Replace Sentence-Level NER?](https://arxiv.org/abs/2402.10573) (2024) - 成本与质量之间的权衡。
- [Generative NER in the Era of LLMs](https://arxiv.org/abs/2601.17898) (2026) - 在四个 NER 基准上评估八种开放大语言模型；采用结构化输出的 PEFT 可达到与基于编码器的 NER 相当的效果。

### 共指消解

[返回顶部](#contents)

- [End-to-End Neural Coreference (Lee et al.)](https://arxiv.org/abs/1707.07045) - 现代神经共指消解的基础。
- [SpanBERT](https://arxiv.org/abs/1907.10529) - 基于片段的预训练方法，也是有力的共指消解基线。
- [coref-hoi](https://github.com/lxucs/coref-hoi) - 基于高阶推理的共指消解。
- [maverick-coref](https://github.com/SapienzaNLP/maverick-coref) (2024) - 高效的共指消解系统，性能可媲美最佳大型系统。
- [LingMess](https://arxiv.org/abs/2205.12644) - 受语言学原理启发、基于类别的共指评分方法。
基于大语言模型：

- [LLMs for Coreference Resolution](https://arxiv.org/abs/2310.05884) - 使用提示和微调进行共指消解。
- [Multilingual Coreference Shared Task: Can LLMs Dethrone Traditional Approaches?](https://arxiv.org/abs/2509.17796) (2025) - 比较 4 种基于大语言模型的方法和 5 种传统方法，共 9 个系统；传统方法仍领先，但大语言模型正在缩小差距。

### 文本分类与情感分析

[返回顶部](#contents)

- [fastText classifier](https://arxiv.org/abs/1607.01759) - 强大而快速的线性基线。
- [Sentiment Treebank (SST)](https://nlp.stanford.edu/sentiment/) - 经典的细粒度情感数据集。
- [SetFit](https://github.com/huggingface/setfit) - 无需提示的少样本文本分类。
- [FastFit](https://github.com/IBM/fastfit) - 适用于多类别场景的快速少样本学习。
- [SST / IMDB / AG News with DeBERTa-v3](https://arxiv.org/abs/2111.09543) - 当前基于编码器微调的基线。
- [PySS3](https://github.com/sergioburdisso/pyss3) - 白盒、可解释的文本分类器。
- [LLMs as Annotators](https://arxiv.org/abs/2305.13734) - 使用大语言模型为文本分类任务标注数据，并讨论相关注意事项。

### 主题建模

[返回顶部](#contents)

- [Latent Dirichlet Allocation (Blei et al.)](https://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf) - 奠基性的主题模型。
- [gensim](https://radimrehurek.com/gensim/) - Python 中的 LDA、LSI 和 HDP。
- [BigARTM](https://github.com/bigartm/bigartm) - 快速正则化主题建模。
- [BERTopic](https://github.com/MaartenGr/BERTopic) - 基于上下文嵌入进行聚类的主题建模方法，是当今常见的默认选择。
- [Top2Vec](https://github.com/ddangelov/Top2Vec) - 联合学习主题和文档向量。
- [CorEx Topic](https://github.com/gregversteeg/corex_topic) - 使用锚词进行层次主题建模。

### 摘要生成

[返回顶部](#contents)

- [TextRank](https://web.eecs.umich.edu/~mihalcea/papers/mihalcea.emnlp04.pdf) - 基于图的抽取式摘要。
- [Pointer-Generator Networks (See et al.)](https://arxiv.org/abs/1704.04368) - 奠基性的神经抽象式摘要方法。
- [PEGASUS](https://arxiv.org/abs/1912.08777) - 用于摘要生成的间隔句预训练方法。
- [BART](https://arxiv.org/abs/1910.13461) - 广泛使用的去噪 seq2seq 基线。
- [BookSum](https://arxiv.org/abs/2105.08209) 和 [SCROLLS](https://arxiv.org/abs/2201.03533) - 长文档摘要基准。
基于大语言模型：

- [Benchmarking LLMs for News Summarization](https://arxiv.org/abs/2301.13848) - 比较大语言模型与微调摘要模型。
- [Element-Aware Summarization with LLMs](https://arxiv.org/abs/2305.13412) - 用于摘要的结构化提示。
- [Understanding LLM Reasoning for Abstractive Summarization](https://arxiv.org/abs/2512.03503) (2025) - 显式推理能提升流畅度，却会削弱事实依据；增加推理预算可能损害忠实度。

### 机器翻译

[返回顶部](#contents)

统计方法与基础神经方法：

- [Moses](http://statmt.org/moses/) - 统计机器翻译的参考系统。
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) - Transformer 论文，重塑了整个领域。
- [Marian NMT](https://github.com/marian-nmt/marian) - 高效的 C++ 神经机器翻译框架。
- [Fairseq](https://github.com/facebookresearch/fairseq) - PyTorch 序列建模工具包。

大规模多语言：

- [NLLB-200](https://arxiv.org/abs/2207.04672) - 支持 200 种语言的机器翻译。
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - 支持 400 多种语言的机器翻译。
- [SeamlessM4T](https://arxiv.org/abs/2312.05187) - 支持 100 多种语言的语音和文本机器翻译。

评估：

- [COMET](https://github.com/Unbabel/COMET) - 基于学习的机器翻译评估指标，与 chrF 并列为当前事实标准。
- [sacrebleu](https://github.com/mjpost/sacrebleu) - 可复现的 BLEU/chrF/TER 评分工具。
- [BERTScore](https://github.com/Tiiiger/bert_score) - 基于相似度的生成评估指标。

基于大语言模型：

- [Is ChatGPT a Good Translator?](https://arxiv.org/abs/2301.08745) - 将大语言模型用作机器翻译系统。
- [Adapting LLMs for Document-Level MT](https://arxiv.org/abs/2401.06468) (2024) - 使用大语言模型进行上下文感知翻译。
- [GPT-4 vs Human Translators](https://arxiv.org/abs/2308.03245) - 专业机器翻译质量比较。
- [Multilingual MT with Open LLMs at Practical Scale](https://arxiv.org/abs/2502.02481) (2025) - 在 28 种语言的机器翻译任务上评估参数量低于 100 亿的开放大语言模型，效果媲美 GPT-4-turbo 和 Google 翻译。
- [Bridging the Linguistic Divide: Survey on LLMs for MT](https://arxiv.org/abs/2504.01919) (2025) - 综述指令遵循、上下文学习和偏好对齐如何重塑机器翻译方法。

### 问答与阅读理解

[返回顶部](#contents)

数据集与基础系统：

- [SQuAD / SQuAD 2.0](https://rajpurkar.github.io/SQuAD-explorer/) - 抽取式阅读理解。
- [Natural Questions](https://ai.google.com/research/NaturalQuestions/) - 用户针对 Wikipedia 内容提出的真实问题。
- [HotpotQA](https://hotpotqa.github.io/) - 多跳推理。
- [TriviaQA](http://nlp.cs.washington.edu/triviaqa/) - 远程监督问答。
- [DrQA](https://github.com/facebookresearch/DrQA) - 基于 Wikipedia 的开放域问答。
- [Document-QA](https://github.com/allenai/document-qa) - 多段落阅读理解。

现代开放域问答：

- [DPR](https://arxiv.org/abs/2004.04906) 和 [FiD](https://arxiv.org/abs/2007.01282) - 先检索再阅读，是大语言模型兴起前开放域问答的标准流水线。
- [Atlas](https://arxiv.org/abs/2208.03299) - 用于少样本问答的检索增强语言模型。
- 另见 [NLP 检索](#retrieval-for-nlp)。

大语言模型时代：

- [GPT-4 with retrieval on TriviaQA / NQ](https://arxiv.org/abs/2305.06983)
- [Self-RAG](https://arxiv.org/abs/2310.11511) (2023) - 结合检索、生成和自我批判。
- [GAIA](https://arxiv.org/abs/2311.12983) - 通用 AI 助手基准，包含多步问答。

### 超越命名实体识别的信息抽取

[返回顶部](#contents)

- [OpenIE 6](https://github.com/dair-iitd/openie6) - 无模式的开放信息抽取。
- [Template-Based Information Extraction without the Templates](https://www.usna.edu/Users/cs/nchamber/pubs/acl2011-chambers-templates.pdf)
- [Privee: An Architecture for Automatically Analyzing Web Privacy Policies](https://www.sebastianzimmeck.de/zimmeckAndBellovin2014Privee.pdf)
- [REBEL](https://github.com/Babelscape/rebel) - 端到端关系抽取。
- [DocRED](https://github.com/thunlp/DocRED) - 文档级关系抽取基准。
- [LLMs for Semantic Role Labeling](https://arxiv.org/abs/2506.05385) (2025) - 使用 RAG 和自我纠错的生成式大语言模型，在英语和中文语义角色标注（SRL）任务上超越 BERT 类编解码模型。
- [Adapting LLMs for Minimal-edit GEC](https://arxiv.org/abs/2506.13148) (2025) - 采用新型错误率适配调度的仅解码器大语言模型，在 BEA-test 语法纠错任务上取得新的最先进成果。

### 检索与嵌入

[返回顶部](#contents)

稠密检索和后期交互检索正日益成为问答与信息检索（IR）的基础：

- [DPR (Dense Passage Retrieval)](https://arxiv.org/abs/2004.04906) - 双编码器检索基线。
- [ColBERT](https://arxiv.org/abs/2004.12832) 和 [ColBERTv2](https://arxiv.org/abs/2112.01488) - 后期交互检索方法，在域外数据上表现出色。
- [E5](https://arxiv.org/abs/2212.03533) 和 [E5-Mistral](https://arxiv.org/abs/2401.00368) - 广泛使用的稠密嵌入系列。
- [BGE](https://github.com/FlagOpen/FlagEmbedding) 和 [BGE-M3](https://arxiv.org/abs/2402.03216) (2024) - 多语言、多功能嵌入模型，在多种语言的 MTEB 榜单上名列前茅。
- [Nomic Embed](https://arxiv.org/abs/2402.01613) (2024) - 完全开放、可复现的嵌入模型。
- [Matryoshka Representation Learning](https://arxiv.org/abs/2205.13147) - 支持推理时灵活调整维度的嵌套嵌入。
- [GritLM](https://arxiv.org/abs/2402.09906) (2024) - 在单一模型中统一生成和嵌入能力。
- [RAG (Retrieval-Augmented Generation)](https://arxiv.org/abs/2005.11401) - 最初的检索增强框架，是现代问答流水线的基础。
- [Gemini Embedding](https://arxiv.org/abs/2503.07891) (2025) - 基于 Gemini 的稠密嵌入，在涵盖 250 多种语言的 MMTEB 及跨语言检索（XOR-Retrieve、XTREME-UP）上达到最先进水平。
- [Qwen3-Embedding](https://arxiv.org/abs/2506.05176) (2025) - 基于 Qwen3 构建的仅解码器嵌入系列（0.6B-8B）；在 MTEB Multilingual 和 MTEB Code 榜单上排名第一，超越此前的专有模型。
- [Rank1](https://arxiv.org/abs/2502.18418) (2025) - 首个通过 DeepSeek-R1 推理轨迹蒸馏、利用测试时计算训练的重排序模型；在指令遵循和分布外（OOD）检索任务上达到最先进水平。
- [ReasonEmbed](https://arxiv.org/abs/2510.08252) (2025) - 面向复杂推理检索的嵌入模型，采用 ReMixer 数据合成和 Redapter 自适应训练；在 BRIGHT 上取得 38.1 的 nDCG@10 纪录。
- [ColBERT-Att](https://arxiv.org/abs/2603.25248) (2026) - 将查询和文档注意力权重融入 ColBERT 评分，扩展后期交互检索；提升其在 MS-MARCO、BEIR 和 LoTTE 上的召回率。
嵌入与检索基准：

- [MMTEB](https://arxiv.org/abs/2502.13595) (2025) - 社区将 MTEB 扩展至覆盖 250 多种语言的 500 多项任务。

### 语音与文本

[返回顶部](#contents)

由于该领域与相邻方向有所交叉，此处仅列出少量参考资源：

- [Whisper](https://github.com/openai/whisper) - 多语言自动语音识别（ASR），现代开源方案中的常用默认选择。
- [SeamlessM4T](https://github.com/facebookresearch/seamless_communication) - 统一的语音和文本翻译系统。
- [Canary](https://huggingface.co/nvidia/canary-1b) (NVIDIA，2024) - 顶尖的开源多语言 ASR 模型。
- [FunASR](https://github.com/modelscope/FunASR) - 工业级 ASR 工具包；GPU 上可达实时速度的 170 倍，支持 50 多种语言，内置 VAD、标点恢复、说话人分离和情绪检测。包含非自回归 SenseVoice 和基于大语言模型的 Fun-ASR-Nano 模型。
- [Wav2Vec 2.0](https://arxiv.org/abs/2006.11477) - 自监督语音预训练的奠基性方法。
- [Coqui TTS](https://github.com/coqui-ai/TTS) 和 [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - 开放的文本转语音工具。

## 数据集

[返回顶部](#contents)

数据集中心与列表：

- [HuggingFace Datasets Hub](https://huggingface.co/datasets) - 现代 NLP 数据集的中心索引，提供带版本管理且支持流式读取的加载器。
- [nlp-datasets](https://github.com/niderhoff/nlp-datasets) - 大型 NLP 数据集合集。
- [gensim-data](https://github.com/RaRe-Technologies/gensim-data) - 预训练 NLP 模型和 NLP 语料库的数据仓库。

开放的预训练规模语料：

- [The Pile](https://pile.eleuther.ai/) - 825 GiB 的多样化文本语料库。
- [RedPajama / RedPajama-V2](https://github.com/togethercomputer/RedPajama-Data) (2023-2024) - 对 LLaMA 预训练数据的复现；V2 包含 30 万亿 token，并附有质量信号。
- [Dolma](https://github.com/allenai/dolma) (AI2，2023-2024) - 包含 3 万亿 token 的开放预训练语料库，并公开了筛选流程。
- [FineWeb / FineWeb-Edu](https://huggingface.co/datasets/HuggingFaceFW/fineweb) (2024) - 清洗后的 15 万亿 token 网络语料；FineWeb-Edu 按教育质量筛选数据。
- [CulturaX](https://huggingface.co/datasets/uonlp/CulturaX) - 覆盖 167 种语言、包含 6.3 万亿 token。
- [Common Corpus](https://huggingface.co/datasets/PleIAs/common_corpus) (2024) - 拥有开放许可、包含 2 万亿 token 的多语言语料库。

任务与指令数据集：

- [Universal Dependencies](https://universaldependencies.org/) - 跨语言一致的树库标注，覆盖 100 多种语言。
- [Tülu 3 SFT Mixture](https://huggingface.co/datasets/allenai/tulu-3-sft-mixture) (2024) - 支撑 Tülu 3 的开放指令微调数据。
- [tiny_qa_benchmark_pp](https://github.com/vincentkoc/tiny_qa_benchmark_pp/) - 小型多语言 NLP 问答数据集及其合成数据生成库。

## 多语言 NLP 框架

[返回顶部](#contents)

- [UDPipe](https://github.com/ufal/udpipe) 是可训练的流水线，可对 Universal Treebanks 和其他 CoNLL-U 文件进行分词、标注、词形还原和句法分析。它主要使用 C++ 编写，为多语言 NLP 处理提供快速可靠的方案。
- [NLP-Cube](https://github.com/adobe/NLP-Cube) : 自然语言处理流水线，支持句子切分、分词、词形还原、词性标注和依存句法分析。该新平台使用 Python 和 Dynet 2.0 编写，提供独立运行方式（CLI/Python 绑定）和服务器功能（REST API）。
- [UralicNLP](https://github.com/mikahama/uralicNLP) 是一个 NLP 库，主要面向萨米语、莫尔多瓦语、马里语、科米语等多种濒危乌拉尔语系语言。它也支持芬兰语等非濒危语言，以及瑞典语、阿拉伯语等非乌拉尔语系语言。UralicNLP 支持形态分析、词形生成、词形还原和消歧。

## NLP 语言模型

[返回顶部](#contents)

此处介绍与 NLP 任务和语言现象相关的预训练语言模型及其研究。通用大语言模型工具、智能体或 RAG 应用套件请参见[另请参阅](#see-also)。

### 预训练与适配

编码器（仍是经典 NLP 任务的主力架构）：

- [BERT](https://arxiv.org/abs/1810.04805) - 双向 Transformer 预训练方法；自 2018 年以来大多数基于编码器的 NLP 工作均以此为基础。[在线阅读](https://webeditions.page/works/bert-pre-training/)，提供章节导航并附有 ACL 原文。
- [RoBERTa](https://arxiv.org/abs/1907.11692) - 经过稳健优化的 BERT 预训练方法，是常见的编码器基线。
- [DeBERTa / DeBERTa-v3](https://arxiv.org/abs/2111.09543) - 解耦注意力机制，在分类、NER 和 NLI 任务上表现出色。
- [ELECTRA](https://arxiv.org/abs/2003.10555) - 采用替换 token 检测的预训练方法，样本利用效率高。
- [ModernBERT](https://arxiv.org/abs/2412.13663) (2024) - 采用旋转嵌入、FlashAttention 和 8K 上下文的现代化编码器，是当前分类、NER 和检索任务的首选编码器。
- [NeoBERT](https://arxiv.org/abs/2502.19587) (2025) - 融合现代架构改进（RoPE、4K 上下文、优化深宽比）的 2.5 亿参数编码器；在 MTEB 上达到最先进水平，在相同微调设置下超越 ModernBERT 和 RoBERTa-large。

编码器-解码器与 seq2seq：

- [T5](https://arxiv.org/abs/1910.10683) 和 [FLAN-T5](https://arxiv.org/abs/2210.11416) - 将 NLP 任务统一表述为文本到文本转换，是强大的指令微调编码器-解码器基线。
- [BART](https://arxiv.org/abs/1910.13461) - 去噪 seq2seq 预训练方法，广泛用于摘要和文本生成。

开放的仅解码器语言模型（作为 NLP 任务的基础模型）：

- [Llama 3 / 3.1 / 3.3](https://arxiv.org/abs/2407.21783) (Meta，2024-2025) - 广泛采用的开放权重模型系列，是各类 NLP 任务微调的默认基础模型。
- [Qwen 2.5 / Qwen 3](https://qwenlm.github.io/) (Alibaba，2024-2025) - 多语言覆盖广，尤其擅长中文；在多语言基准上常居开放模型前列。
- [DeepSeek-V3](https://arxiv.org/abs/2412.19437) (2024) - 高效的 MoE 预训练模型，具备竞争力的开放基础模型。
- [OLMo 2](https://arxiv.org/abs/2501.00656) (AI2，2025) - 完全开放：权重、训练数据和代码均公开，是可复现性的标杆。
- [Gemma 2 / Gemma 3](https://arxiv.org/abs/2408.00118) (Google，2024-2025) - 在 NLP 任务中表现出色的开放小型/中型模型。
- [Mistral / Mixtral](https://arxiv.org/abs/2401.04088) - 高效的开放稠密模型和稀疏 MoE 模型。
- [What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?](https://arxiv.org/abs/2204.05832) - 比较编码器、解码器和编码器-解码器架构在 NLP 迁移中的表现。

### 多语言与跨语言模型

- [XLM-R](https://arxiv.org/abs/1911.02116) - 在 CommonCrawl 上训练、覆盖 100 种语言的跨语言掩码语言模型。
- [mT5](https://arxiv.org/abs/2010.11934) - 覆盖 101 种语言的多语言 T5。
- [BLOOM](https://arxiv.org/abs/2211.05100) - 1760 亿参数的开放多语言语言模型，覆盖 46 种自然语言。
- [Aya 23 / Aya Expanse](https://arxiv.org/abs/2412.04261) (Cohere For AI，2024) - 大规模多语言指令微调模型，覆盖 23 至 101 种语言。
- [Glot500](https://arxiv.org/abs/2305.12182) - 覆盖 500 多种语言的编码器，重点关注低资源语言。
- [NLLB-200](https://arxiv.org/abs/2207.04672) - No Language Left Behind：面向 200 种语言的机器翻译。
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - 覆盖 400 多种语言的机器翻译模型及 3 万亿 token 多语言语料库。
- [SeamlessM4T / Seamless](https://arxiv.org/abs/2312.05187) (Meta，2023-2024) - 覆盖 100 多种语言的多语言、多模态语音与文本翻译。
- [SEA-LION / SeaLLM](https://arxiv.org/abs/2312.00738) (2024-2025) - 面向东南亚语言的语言模型。
- [Babel](https://arxiv.org/abs/2503.00865) (2025) - 开放的多语言大语言模型（9B 和 83B），覆盖按使用者人数排名前 25 的语言（约占全球使用者的 90%）；在 XCOPA、XNLI、MGSM、FLORES-200 上超越同等规模的开放多语言模型。
- [Lugha-Llama](https://arxiv.org/abs/2504.06536) (Princeton/Mila，2025) - 基于精选 WURA 语料，将 Llama-3.1-8B 适配到非洲低资源语言；在 IrokoBench 和 AfriQA 上取得开源最先进成果。
- [AfriqueLLM](https://arxiv.org/abs/2601.06395) (McGill，2026) - 一系列开放大语言模型（4B-14B），在涵盖 20 种非洲语言的 260 亿 token 上持续预训练，并对数据混合进行全面实证研究。
- [TranslateGemma](https://arxiv.org/abs/2601.09012) (Google，2026) - 基于 Gemma 3 构建的开放翻译专用模型，通过 SFT 和 RL 及质量奖励模型覆盖 55 个语言对。
- [MiLMMT-46](https://arxiv.org/abs/2602.11961) (Xiaomi，2026) - 扩展至 46 种语言的开放多语言机器翻译模型，效果媲美 Google 翻译和 Gemini 3 Pro 等商业系统。

### 评估与基准

自然语言理解与跨语言：

- [GLUE](https://gluebenchmark.com/) 和 [SuperGLUE](https://super.gluebenchmark.com/) - 英语自然语言理解基准。
- [XTREME](https://sites.research.google/xtreme) 和 [XGLUE](https://microsoft.github.io/XGLUE/) - 跨语言自然语言理解。
- [XNLI](https://github.com/facebookresearch/XNLI) - 覆盖 15 种语言的跨语言自然语言推理。
- [FLORES-200](https://github.com/facebookresearch/flores) - 覆盖 200 种语言的机器翻译评估。
- [MTEB](https://github.com/embeddings-benchmark/mteb) - 大规模文本嵌入基准，是句子/文档编码器的标准基准。
- [BEIR](https://github.com/beir-cellar/beir) - 面向检索模型的异构信息检索基准。

现代语言模型评估（2023-2026）：

- [HELM](https://crfm.stanford.edu/helm/) - 全面评估 NLP 任务，包括准确率及其他能力。
- [BIG-bench](https://github.com/google/BIG-bench) - 200 多项用于探测语言模型能力的任务。
- [MMLU](https://github.com/hendrycks/test) - 涵盖 57 个学科的多任务知识评估。
- [MMLU-Pro](https://arxiv.org/abs/2406.01574) (2024) - 难度更高、区分度更强的 MMLU 后继基准。
- [GPQA](https://arxiv.org/abs/2311.12022) - 研究生级问答及“Google-proof”推理评估。
- [REFUTE](https://huggingface.co/datasets/BGPT-OFFICIAL/refute) (2026) - 科学推理基准，评估基于证据的批判、夸大结论检测、缺少证据时拒答，以及校准能力。
- [IFEval](https://arxiv.org/abs/2311.07911) - 可验证的指令遵循评估。
- [Chatbot Arena (LMSYS)](https://lmarena.ai/) - 基于人类偏好 ELO 评分的聊天模型排行榜。
- [LiveBench](https://livebench.ai/) (2024) - 每月更新、可抵御数据污染的基准。
- [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) - 统一的语言模型基准评估框架。
- [MMLU-ProX](https://arxiv.org/abs/2503.10497) (2025) - 将 MMLU-Pro 扩展到 29 种类型各异的语言；揭示高、低资源语言之间最高达 24.3% 的性能差距。
- [MultiChallenge](https://arxiv.org/abs/2501.17399) (2025) - 多轮对话基准，揭示指令遵循和上下文推理同时失效的问题；所有受测前沿模型得分均低于 50%。
- [FRAMES](https://arxiv.org/abs/2409.12941) (2025) - 统一的 RAG 评估基准：包含 824 个多跳问题，需同时考察事实性、检索准确度和跨文档推理。

长上下文评估：

- [Needle in a Haystack](https://github.com/gkamradt/LLMTest_NeedleInAHaystack) - 用于探测长上下文窗口检索能力的测试。
- [RULER](https://arxiv.org/abs/2404.06654) (2024) - 超越简单检索的合成长上下文任务。
- [LongBench](https://github.com/THUDM/LongBench) - 涵盖多种 NLP 任务的双语长上下文基准。
- [LongBench v2](https://arxiv.org/abs/2412.15204) (2025) - 503 道专家设计的选择题，涵盖 8K 至 200 万词的上下文并要求深入多跳推理；人在限时条件下得分为 53.7%。
- [U-NIAH](https://arxiv.org/abs/2503.00353) (2025) - 通过多针和嵌套设置扩展“大海捞针”测试；显示 RAG 可缓解小型大语言模型的“中间遗失”问题，但会削弱推理模型的表现。

### 推理与测试时计算

2024-2026 年定义趋势的方向之一：生成显式推理轨迹并从额外推理计算中获益的模型。

- [Chain-of-Thought Prompting](https://arxiv.org/abs/2201.11903) - 奠基性研究结果；中间推理步骤能够提升性能。
- [Self-Consistency](https://arxiv.org/abs/2203.11171) - 对采样得到的思维链进行多数投票。
- [Tree of Thoughts](https://arxiv.org/abs/2305.10601) - 在推理树中进行搜索。
- [Self-Refine](https://arxiv.org/abs/2303.17651) 和 [Reflexion](https://arxiv.org/abs/2303.11366) - 推理时自我纠错。
- [Large Language Models are Zero-Shot Reasoners](https://arxiv.org/abs/2205.11916) - 将思维链用于 NLP 推理任务。
- [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) - 用于推理的过程监督奖励模型。
- [DeepSeek-R1](https://arxiv.org/abs/2501.12948) (2025) - 通过纯 RL 训练的开放推理模型，在开放领域复现了 o1 式行为。
- [OpenAI o1 / o3](https://openai.com/index/learning-to-reason-with-llms/) (2024-2025) - 利用测试时计算的推理系统。
- [Scaling LLM Test-Time Compute Optimally](https://arxiv.org/abs/2408.03314) (2024) - 系统研究推理时计算的权衡。
- [s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393) (2025) - 通过预算强制实现的小型开放推理方案。
- [Kimi k1.5](https://arxiv.org/abs/2501.12599) (2025) - 通过策略优化进行长上下文 RL（无需 MCTS 或 PRM），达到 o1 级别表现；并将长思维链蒸馏到短思维链模型中。
- [rStar-Math](https://arxiv.org/abs/2501.04519) (2025) - 将小型策略模型与通过 MCTS rollout 训练的过程偏好模型相结合，使小型语言模型无需从更大模型蒸馏即可自行提升推理能力。
- [DAPO](https://arxiv.org/abs/2503.14476) (2025) - 基于 GRPO 的开放 RL 训练系统，包含四项关键改进（解耦裁剪、动态采样、token 级损失、熵奖励）；复现并超越 DeepSeek-R1-Zero 级别的推理能力。
- [VAPO](https://arxiv.org/abs/2504.05118) (2025) - 基于价值模型的 RL，结合长度自适应 GAE 和 token 级裁剪；在 AIME 2024 上超越无价值模型的 GRPO 方法，且训练稳定。
- [ThinkPRM](https://arxiv.org/abs/2504.16828) (2025) - 生成式过程奖励模型，可逐步生成思维链验证；仅用 1% 的监督标签便达到判别式 PRM 的水平。
- [OpenThoughts](https://arxiv.org/abs/2506.04178) (2025) - 针对开放推理模型数据方案的 1000 多项受控实验；在 AIME 2025 上达到最先进水平，媲美闭源蒸馏基线。

### 长上下文与替代架构

- [Mamba](https://arxiv.org/abs/2312.00752) 和 [Mamba-2](https://arxiv.org/abs/2405.21060) - 选择性状态空间模型，是线性时间处理长上下文的注意力替代方案。
- [RWKV](https://arxiv.org/abs/2305.13048) - 可扩展至大参数规模的 RNN-Transformer 混合架构。
- [Jamba](https://arxiv.org/abs/2403.19887) (2024) - Mamba、Transformer 和 MoE 混合架构。
- [RoPE](https://arxiv.org/abs/2104.09864) 和 [YaRN](https://arxiv.org/abs/2309.00071) - 旋转位置嵌入和上下文长度扩展方法。
- [Position Interpolation](https://arxiv.org/abs/2306.15595) - 只需少量微调即可扩展上下文窗口。
- [Lost in the Middle](https://arxiv.org/abs/2307.03172) - NLP 任务中长上下文性能退化的模式。
- [RAG vs Long-Context LLMs](https://arxiv.org/abs/2407.16833) (2024) - 比较长输入问答的不同方案及其权衡。
- [Titans: Learning to Memorize at Test Time](https://arxiv.org/abs/2501.00663) (2025) - 神经长期记忆模块，可在测试时学习记忆历史上下文；扩展至 200 万 token 以上，在语言建模和推理上优于 Transformer 及现代线性循环模型。
- [MiniMax-01](https://arxiv.org/abs/2501.08313) (2025) - 4560 亿参数的混合模型，结合闪电（线性）注意力和稀疏 softmax 注意力；推理上下文最长可达 400 万 token，NLP 表现媲美 GPT-4o。
- [Native Sparse Attention (NSA)](https://arxiv.org/abs/2502.11089) (2025) - 可训练的稀疏注意力，结合粗粒度压缩与细粒度选择；在 64K 上下文下大幅提速，且 NLP 基准性能不降。
- [LongRoPE2](https://arxiv.org/abs/2502.20082) (2025) - 发现高频 RoPE 维度训练不足，并采用进化搜索重新缩放；仅用 Meta 方案 1/80 的训练 token 数，即将 LLaMA3-8B 扩展到 128K。
- [Characterizing SSM and Hybrid LM Long-Context Performance](https://arxiv.org/abs/2507.12442) (2025) - 首次全面分析最长达 22 万 token 的 Transformer、SSM 和混合模型的内存与速度；SSM 最快可提升 4 倍，混合模型则平衡召回率与效率。

### 事实性、幻觉与校准

- [Survey of Hallucination in Natural Language Generation](https://arxiv.org/abs/2202.03629) - 幻觉分类法与缓解策略综述。
- [TruthfulQA](https://github.com/sylinrl/TruthfulQA) - 问答真实性基准。
- [FActScore](https://github.com/shmsw25/FActScore) - 长文本生成的细粒度事实准确度评估。
- [LongFact / SAFE](https://arxiv.org/abs/2403.18802) (2024) - 长文本事实性基准及搜索增强评估器。
- [SelfCheckGPT](https://github.com/potsawee/selfcheckgpt) - 基于采样的幻觉检测。
- [RAGAS](https://github.com/explodinggradients/ragas) - 无需参考答案即可评估 RAG 和问答流水线。
- [Lookback Lens](https://arxiv.org/abs/2407.07071) (2024) - 基于注意力模式检测长上下文生成中的幻觉。
- [Calibration of LLMs on Multiple Choice](https://arxiv.org/abs/2402.13887) (2024) - 分析格式影响下的校准能力。
- [HalluLens](https://arxiv.org/abs/2504.17550) (2025) - 幻觉基准，采用外部/内部分类法并动态重建测试集以抵御数据泄漏。
- [Atomic Calibration](https://arxiv.org/abs/2410.13246) (2025) - 分析长文本生成的声明级校准；模型对扩展输出的校准明显不如对单条声明的校准。
- [FRANQ](https://arxiv.org/abs/2505.21072) (2025) - 面向 RAG 事实核查、考虑忠实度的不确定性量化方法；形式化区分忠实度和事实性。
- [MUCH](https://arxiv.org/abs/2511.17081) (2025) - 涵盖英语、法语、西班牙语和德语的多语言声明幻觉基准，并公开 token 级 logits，以支持规范的不确定性量化评估。
- [HalluHard](https://arxiv.org/abs/2602.01031) (2026) - 要求回答附带引文的高难度多轮幻觉基准；即使使用网络搜索，幻觉率仍约为 30%。
- [CURE: Think Through Uncertainty](https://arxiv.org/abs/2604.12046) (2026) - 训练模型在生成前推理声明级不确定性；在传记事实性和 FactBench AUROC 上取得显著提升。

### 探测与可解释性

- [A Primer in BERTology](https://arxiv.org/abs/2002.12327) - BERT 从语言中学到了什么。
- [Probing Classifiers (Belinkov)](https://arxiv.org/abs/2102.12452) - 方法、局限与替代方案。
- [Locating and Editing Factual Associations in GPT (ROME)](https://rome.baulab.info/) - 对事实回忆进行因果追踪。
- [The Pyramid of NLP Probes](https://arxiv.org/abs/2104.07885) - 用于探测语言知识的结构化方法。
- [Toy Models of Superposition](https://transformer-circuits.pub/2022/toy_model/) - Transformer 表征稀疏特征观点的基础。
- [Towards Monosemanticity / Scaling Monosemanticity](https://transformer-circuits.pub/2024/scaling-monosemanticity/) (Anthropic，2024) - 使用稀疏自编码器从生产规模的语言模型中提取可解释特征。
- [Sparse Autoencoders Find Highly Interpretable Features](https://arxiv.org/abs/2309.08600) - 用于解释语言模型的稀疏自编码器方法。
- [Neuronpedia](https://www.neuronpedia.org/) - 用于浏览不同模型 SAE 特征的开放平台。
- [Influence Functions Scale to LLMs](https://arxiv.org/abs/2308.03296) (2023) - 识别驱动模型行为的训练样本。
- [Circuit Tracing: Revealing Computational Graphs in Language Models](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) (Anthropic，2025) - 引入跨层转码器和归因图来构建可解释的替代模型；可在提示级别追踪特征之间的因果交互。
- [On the Biology of a Large Language Model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) (Anthropic，2025) - 将归因图应用于 Claude 3.5 Haiku，研究多跳推理、押韵规划和越狱案例。
- [Transcoders Beat Sparse Autoencoders for Interpretability](https://arxiv.org/abs/2501.18823) (2025) - 显示转码器（根据输入重建层输出）比 SAE 产生更可解释的特征；并提出跳跃转码器。
- [Survey on Sparse Autoencoders for LLM Interpretability](https://arxiv.org/abs/2503.05613) (EMNLP 2025) - 关于 SAE 架构、训练策略、特征解释和评估的参考综述。
- [Finding Highly Interpretable Prompt-Specific Circuits](https://arxiv.org/abs/2602.13483) (2026) - 在单条提示（而非单项任务）层面识别电路；揭示按提示类别聚类的机制。

### 高效与小型语言模型

蒸馏与小型模型：

- [DistilBERT](https://arxiv.org/abs/1910.01108) 和 [MiniLM](https://arxiv.org/abs/2002.10957) - 面向生产 NLP 的蒸馏编码器。
- [Phi-3 / Phi-4](https://arxiv.org/abs/2412.08905) (Microsoft，2024) - 使用精选数据训练的小型模型，在 NLP 基准上的表现可与大得多的模型竞争。
- [SmolLM2](https://arxiv.org/abs/2502.02737) (HuggingFace，2025) - 完全开放的小型语言模型系列，训练数据可复现。
- [SmolLM3](https://huggingface.co/blog/smollm3) (HuggingFace，2025) - 完全开放的 30 亿参数解码器，在 11.2 万亿 token 上预训练，采用 NoPE 和 YaRN 支持 128K 上下文；性能可与 40 亿参数级模型竞争。
- [Gemma 3 Technical Report](https://arxiv.org/abs/2503.19786) (Google，2025) - 参数量为 1B-27B 的开放模型，采用较高的局部/全局注意力比例，使 128K 上下文下的 KV 缓存仍可控。
- [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) (Alibaba，2025) - 参数量为 0.6B-235B 的稠密和 MoE 模型，统一支持思考/非思考模式；30B-A3B MoE 仅激活 30 亿参数，性能便可媲美更大的稠密模型。
- [Apple Intelligence Foundation Language Models](https://arxiv.org/abs/2507.13575) (Apple，2025) - 端侧 30 亿参数模型，通过 KV 缓存共享和 2 位 QAT，将缓存内存减少 37.5% 且不损失准确率。
- [Sentence-Transformers](https://www.sbert.net/) - 通过孪生 BERT 生成句子和段落嵌入。
- [SetFit](https://github.com/huggingface/setfit) - 无需提示的少样本文本分类。
- [FastFit](https://github.com/IBM/fastfit) - 适用于多类别场景的快速少样本分类。
- [GTE](https://huggingface.co/thenlper/gte-base)、[BGE](https://github.com/FlagOpen/FlagEmbedding) 和 [Stella](https://huggingface.co/dunzhang/stella_en_1.5B_v5) - 在 MTEB 上名列前茅的紧凑型文本嵌入模型。

量化与服务（大规模部署 NLP 模型时值得关注）：

- [GPTQ](https://arxiv.org/abs/2210.17323) - Transformer 的训练后量化方法。
- [AWQ](https://arxiv.org/abs/2306.00978) - 感知激活值的权重量化。
- [KVTuner](https://arxiv.org/abs/2502.04420) (ICML 2025) - 感知敏感度的逐层混合精度 KV 缓存量化；相比统一 KV8，吞吐量最高提升 21%。
- [GGUF / llama.cpp](https://github.com/ggerganov/llama.cpp) - 可移植的量化推理工具。
- [vLLM](https://github.com/vllm-project/vllm) - 基于 PagedAttention 的高吞吐语言模型服务。
- [SGLang](https://github.com/sgl-project/sglang) - 结构化生成和高效服务框架。
- [Text Generation Inference (TGI)](https://github.com/huggingface/text-generation-inference) - Hugging Face 面向生产环境的语言模型服务。

参数高效微调：

- [LoRA](https://arxiv.org/abs/2106.09685) 和 [QLoRA](https://arxiv.org/abs/2305.14314) - 低秩适配器和量化微调方法，是在普通硬件上将语言模型适配到 NLP 任务的标准方案。
- [DoRA](https://arxiv.org/abs/2402.09353) (2024) - 权重分解低秩适配方法。
- [PEFT](https://github.com/huggingface/peft) - HuggingFace 库，整合 LoRA、前缀调优、IA3 等方法。

### 指令微调与偏好优化

- [FLAN](https://arxiv.org/abs/2109.01652) - 将微调后的语言模型用作零样本学习器。
- [InstructGPT](https://arxiv.org/abs/2203.02155) - 通过人工反馈训练语言模型遵循指令。
- [Self-Instruct](https://github.com/yizhongw/self-instruct) - 利用语言模型自举生成指令数据。
- [Super-NaturalInstructions](https://github.com/allenai/natural-instructions) - 包含 1600 多项带指令的 NLP 任务。
- [Constitutional AI](https://arxiv.org/abs/2212.08073) - 根据书面准则并利用 AI 生成的反馈训练语言模型。
- [Direct Preference Optimization](https://arxiv.org/abs/2305.18290) - RLHF 的更简单替代方法，已得到广泛采用。
- [Tülu 3](https://arxiv.org/abs/2411.15124) (AI2，2024) - 完全开放的后训练方案，在开放模型中取得最先进成果。
- [LIMA](https://arxiv.org/abs/2305.11206) - “对齐领域少即是多”；少量高质量 SFT 数据也能带来显著效果。
- [TRL](https://github.com/huggingface/trl) - SFT、DPO、GRPO 和 RLHF 的参考库。
- [Magpie](https://arxiv.org/abs/2406.08464) (2024-2025) - 只需对齐后的语言模型提示即可合成高质量指令-回答对；在筛选后的子集上进行 SFT，效果可媲美官方 Llama-3-Instruct。

### NLP 中的偏见、公平性与安全

- [StereoSet](https://github.com/moinnadeem/StereoSet) - 测量预训练语言模型中的刻板印象偏见。
- [CrowS-Pairs](https://github.com/nyu-mll/crows-pairs) - 测量掩码语言模型中的社会偏见。
- [WinoBias](https://github.com/uclanlp/corefBias) - 共指消解中的性别偏见。
- [HolisticBias](https://github.com/facebookresearch/ResponsibleNLP) - 跨多个人口统计维度测量偏见。
- [RealToxicityPrompts](https://github.com/allenai/real-toxicity-prompts) - 语言模型生成内容中的毒性。
- [Sycophancy in Language Models](https://arxiv.org/abs/2310.13548) - 模型迎合用户观点调整回答的现象。
- [Alignment Faking in Large Language Models](https://arxiv.org/abs/2412.14093) (Anthropic，2024) - 模型在训练期间策略性服从的现象。
- [WildGuard](https://arxiv.org/abs/2406.18495) (2024) - 开放的安全审核模型及基准。
- [Emergent Misalignment](https://arxiv.org/abs/2502.17424) (2025) - 针对狭窄任务（不安全代码）微调，意外导致无关领域广泛出现对齐失败。
- [SafeDialBench](https://arxiv.org/abs/2502.11090) (2025) - 多语言（中英）安全基准，涵盖 22 种场景、7 种越狱策略下的 4000 多段多轮对话。
- [TeleAI-Safety](https://arxiv.org/abs/2512.05485) (2025) - 模块化越狱评估框架，整合 19 种攻击、29 种防御和 19 种评估方法，覆盖 14 个模型及 12 类风险。
- [IndicSafe](https://arxiv.org/abs/2603.17915) (2026) - 覆盖 12 种印度语言的多语言安全基准；揭示跨语言一致率为 12.8%，且低资源文字系统中过度拒绝更常见。
- [VLAF: Value-Conflict Alignment Faking](https://arxiv.org/abs/2604.20995) (2026) - 当策略与内化价值观冲突时，低至 70 亿参数的模型也会在 37% 的案例中伪装对齐；引导向量缓解方法可将其降低 94%。

## 各语言的 NLP

[返回顶部](#contents)

按人类语言组织的资源。点击章节可展开。

<details>
<summary>

### 阿拉伯语 NLP

</summary>

[返回顶部](#contents)

### 库

- [CAMeL Tools](https://github.com/CAMeL-Lab/camel_tools) - 阿拉伯语 NLP 的 Python 工具包，包括方言识别、形态分析和 NER。
- [goarabic](https://github.com/01walid/goarabic) - 用于阿拉伯语文本处理的 Go 包。
- [jsastem](https://github.com/ejtaal/jsastem) - JavaScript 阿拉伯语词干提取器。
- [PyArabic](https://pypi.org/project/PyArabic/) - 阿拉伯语 Python 库。
- [RFTokenizer](https://github.com/amir-zeldes/RFTokenizer) - 可训练的阿拉伯语、希伯来语和科普特语切分器。
- [Farasa](https://farasa.qcri.org/) - QCRI 的阿拉伯语切分、词性标注和 NER 工具。

### 模型与嵌入

- [AraBERT](https://github.com/aub-mind/arabert) - 阿拉伯语 BERT 系列。
- [CAMeLBERT](https://github.com/CAMeL-Lab/CAMeLBERT) - 面向现代标准阿拉伯语、方言和古典阿拉伯语的 BERT 模型。
- [AraELECTRA](https://aclanthology.org/2021.wanlp-1.20/) - 高效的阿拉伯语预训练模型（与 [AraBERT](https://github.com/aub-mind/arabert) 一同发布）。
- [Jais](https://huggingface.co/inceptionai/jais-13b) (2023-2024) - 阿拉伯语-英语双语开放语言模型系列。
- [ALLaM](https://arxiv.org/abs/2407.15390) (SDAIA，2024) - 以阿拉伯语为主的基础模型。

### 数据集

- [Multidomain Datasets](https://github.com/hadyelsahar/large-arabic-sentiment-analysis-resouces) - 现有规模最大的多领域阿拉伯语情感分析资源。
- [LABR](https://github.com/mohamedadaly/labr) - 大型阿拉伯语图书评论数据集。
- [Arabic Stopwords](https://github.com/mohataher/arabic-stop-words) - 汇总的阿拉伯语停用词表。
- [ArabicMMLU](https://huggingface.co/datasets/MBZUAI/ArabicMMLU) (2024) - 阿拉伯语 MMLU 基准。

</details>

<details>
<summary>

### 中文 NLP

</summary>

[返回顶部](#contents)

### 库

- [jieba](https://github.com/fxsjy/jieba#jieba-1) - 中文分词 Python 包。
- [SnowNLP](https://github.com/isnowfy/snownlp) - 中文 NLP Python 包。
- [FudanNLP](https://github.com/FudanNLP/fnlp) - 中文文本处理 Java 库。
- [HanLP](https://github.com/hankcs/HanLP) - 多语言 NLP 库，对中文提供强力支持。
- [LTP](https://github.com/HIT-SCIR/ltp) - 哈工大语言技术平台：分词、词性标注、NER 和句法分析。

### 模型与嵌入

- [Chinese-BERT-wwm](https://github.com/ymcui/Chinese-BERT-wwm) - 面向中文的全词掩码 BERT。
- [MacBERT](https://github.com/ymcui/MacBERT) - 采用“MLM 即纠错”预训练改进的中文 BERT。
- [Qwen 2.5 / Qwen 3](https://github.com/QwenLM/Qwen3) - Alibaba 开发的开放模型系列，中文能力突出。
- [ChatGLM3 / GLM-4](https://github.com/THUDM/ChatGLM3) - 清华大学开发的中英双语语言模型。
- [Baichuan 2](https://github.com/baichuan-inc/Baichuan2) - 开放的中文语言模型。
- [Yi](https://github.com/01-ai/Yi) - 01.AI 开发的开放双语语言模型。
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - 高效的开放 MoE 模型，中文能力突出。

### 论文集

- [funNLP](https://github.com/fighting41love/funNLP) - 大量中文 NLP 工具和资源合集。

</details>

<details>
<summary>

### 丹麦语 NLP

</summary>

[返回顶部](#contents)

- [Named Entity Recognition for Danish](https://github.com/ITUnlp/daner)
- [DaNLP](https://github.com/alexandrainst/danlp) - 丹麦语 NLP 资源。
- [Awesome Danish](https://github.com/fnielsen/awesome-danish) - 精选丹麦语语言技术资源列表。

</details>

<details>
<summary>

### 荷兰语 NLP

</summary>

[返回顶部](#contents)

- [python-frog](https://github.com/proycon/python-frog) - Frog 的 Python 绑定；Frog 是荷兰语 NLP 套件，支持词性标注、词形还原、依存句法分析和 NER。
- [SimpleNLG_NL](https://github.com/rfdj/SimpleNLG-NL) - 基于 SimpleNLG 实现、用于自然语言生成的荷兰语表层实现器。
- [Alpino](https://github.com/rug-compling/alpino) - 荷兰语依存句法解析器（也支持词性标注和词形还原）。
- [Kaldi NL](https://github.com/opensource-spraakherkenning-nl/Kaldi_NL) - 基于 [Kaldi](http://kaldi-asr.org/) 的荷兰语语音识别模型。
- [spaCy Dutch model](https://spacy.io/models/nl) - 配备荷兰语流水线的工业级 NLP 工具。

</details>

<details>
<summary>

### 德语 NLP

</summary>

[返回顶部](#contents)

- [German-NLP](https://github.com/adbar/German-NLP) - 精选以德语为重点开发的开放获取、开源和现成资源与工具。

</details>

<details>
<summary>

### 匈牙利语 NLP

</summary>

[返回顶部](#contents)

- [awesome-hungarian-nlp](https://github.com/oroszgy/awesome-hungarian-nlp) - 精选匈牙利语 NLP 免费资源列表。

</details>

<details>
<summary>

### 印度语言 NLP

</summary>

[返回顶部](#contents)

### 数据、语料库与树库

- [Hindi Dependency Treebank](https://ltrc.iiit.ac.in/treebank_H2014/) - 面向印地语和乌尔都语、多表征、多层次的树库。
- [Universal Dependencies Treebank in Hindi](https://universaldependencies.org/treebanks/hi_hdtb/index.html)
  - [Parallel Universal Dependencies Treebank in Hindi](http://universaldependencies.org/treebanks/hi_pud/index.html) - 上述树库中的一个较小子集。
- [ISI FIRE Stopwords List (Hindi and Bangla)](https://www.isical.ac.in/~fire/data/)
- [Peter Graham's Stopwords List](https://github.com/6/stopwords-json)
- [NLTK Corpus](https://www.nltk.org/book/ch02.html) 6 万词的词性标注语料，包含孟加拉语、印地语、马拉地语和泰卢固语。
- [Hindi Movie Reviews Dataset](https://github.com/goru001/nlp-for-hindi) 约 1000 个样本，分为 3 种极性类别。
- [BBC News Hindi Dataset](https://github.com/NirantK/hindi2vec/releases/tag/bbc-hindi-v0.1) 4300 个样本，分为 14 类。
- [IIT Patna Hindi ABSA Dataset](https://github.com/pnisarg/ABSA) 5400 个样本，涵盖 12 个领域、4000 个方面术语，并提供 4 类方面级和句子级极性标注。
- [Bangla ABSA](https://github.com/AtikRahman/Bangla_Datasets_ABSA) 5500 个样本，涵盖 2 个领域和 10 个方面术语。
- [IIT Patna Movie Review Sentiment Dataset](https://www.iitp.ac.in/~ai-nlp-ml/resources.html) 2000 个样本，包含 3 种极性标签。

#### 需要登录/访问权限的数据集可通过电子邮件申请

- [SAIL 2015](http://amitavadas.com/SAIL/) Twitter 和 Facebook 上经过标注的印地语、孟加拉语、泰米尔语和泰卢固语情感样本。
- [IIT Bombay CFILT Resources](https://www.cfilt.iitb.ac.in/) - Sentiwordnet、平行标注语料、词义标注语料，以及马拉地语极性标注语料。
- [TDIL-IC aggregates a lot of useful resources and provides access to otherwise gated datasets](https://tdil-dc.in/index.php?option=com_catalogue&task=viewTools&id=83&lang=en)

### 语言模型与词嵌入

- [Hindi2Vec](https://nirantk.com/hindi2vec/) 和 [nlp-for-hindi](https://github.com/goru001/nlp-for-hindi) ULMFiT 风格的语言模型。
- [IIT Patna Bilingual Word Embeddings Hi-En](https://www.iitp.ac.in/~ai-nlp-ml/resources.html)
- [Fasttext word embeddings in a whole bunch of languages, trained on Common Crawl](https://fasttext.cc/docs/en/crawl-vectors.html)
- [Hindi and Bengali Word2Vec](https://github.com/Kyubyong/wordvectors)
- [Hindi and Urdu Elmo Model](https://github.com/HIT-SCIR/ELMoForManyLangs)
- [Sanskrit Albert](https://huggingface.co/surajp/albert-base-sanskrit) 在梵语 Wikipedia 和 OSCAR 语料库上训练。

### 库与工具

- [Multi-Task Deep Morphological Analyzer](https://github.com/Saurav0074/mt-dma) - 面向印地语和乌尔都语的深度形态解析器。
- [Indic NLP Library](https://github.com/anoopkunchukuttan/indic_nlp_library) - 支持 18 种印度语言的分词、转写和机器翻译辅助工具。
- [SivaReddy's Dependency Parser (Python3 port)](https://github.com/CalmDownKarm/sivareddydependencyparser) - 卡纳达语、印地语和泰卢固语的依存句法分析和词性标注工具。
- [iNLTK](https://github.com/goru001/inltk) - 基于 PyTorch/Fastai 的印度语言 NLP 工具包。
- [AI4Bharat IndicNLP Suite](https://ai4bharat.iitm.ac.in/) - 覆盖 22 种印度语言的工具、数据集和模型。

### 模型与嵌入

- [IndicBERT v2](https://github.com/AI4Bharat/IndicBERT) (2022-2024) - 面向 23 种印度语言的多语言 BERT。
- [IndicTrans2](https://github.com/AI4Bharat/IndicTrans2) (2023-2024) - 支持 22 种印度语言的高质量机器翻译。
- [OpenHathi](https://huggingface.co/sarvamai/OpenHathi-7B-Hi-v0.1-Base) (Sarvam AI，2023) - 延续训练的印地语-英语双语 LLaMA。
- [Airavata](https://huggingface.co/ai4bharat/Airavata) (2024) - 经指令微调的印地语大语言模型。
- [Sarvam-1](https://www.sarvam.ai/blogs/sarvam-1) (2024) - 从头开始在 10 种印度语言上训练的多语言语言模型。
- [BharatGPT / Krutrim](https://www.olakrutrim.com/) (2024) - 面向印度语言的基础模型。

</details>

<details>
<summary>

### 印度尼西亚语 NLP

</summary>

[返回顶部](#contents)

### 库与嵌入

- [bahasa](https://github.com/kangfend/bahasa) - 印度尼西亚语自然语言工具包。
- [Indonesian Word Embedding](https://github.com/galuhsahid/indonesian-word-embedding)
- [Indonesian fastText](https://s3-us-west-1.amazonaws.com/fasttext-vectors/wiki.id.zip) 在 Wikipedia 上训练。
- [PySastrawi](https://github.com/har07/PySastrawi) - 基于 Sastrawi 词干提取算法的印度尼西亚语 Python 词干提取器。

### 模型

- [IndoBERT (IndoNLU)](https://github.com/indobenchmark/indonlu) - 带有 IndoNLU 基准套件的印尼语预训练语言模型。
- [IndoBERT (IndoLEM)](https://github.com/indolem/indolem) - 配套 IndoLEM 基准的另一种 IndoBERT 模型。
- [NusaCrowd / Cendol](https://github.com/IndoNLP/nusa-crowd) (2023-2024) - 大规模社区数据集，以及面向印度尼西亚语和区域语言的 Cendol 指令微调模型。
- [Sailor](https://github.com/sail-sg/sailor-llm) - 覆盖印度尼西亚语的开放东南亚语言模型。
- [SEA-LION](https://github.com/aisingapore/sealion) (2024) - Singapore AI 推出的开放东南亚语言模型，印度尼西亚语能力突出。

### 数据集

- [ILPS](http://ilps.science.uva.nl/resources/bahasa/) 的 Kompas 和 Tempo 合集。
- [PANL10N for PoS tagging](http://www.panl10n.net/english/outputs/Indonesia/UI/0802/UI-1M-tagged.zip)：3.9 万个句子和 90 万个词 token。
- [IDN for PoS tagging](https://github.com/famrashel/idn-tagged-corpus)：1 万个句子和 25 万个词 token。
- [Indonesian Treebank](https://github.com/famrashel/idn-treebank) and [Universal Dependencies-Indonesian](https://github.com/UniversalDependencies/UD_Indonesian-GSD)
- [IndoSum](https://github.com/kata-ai/indosum) - 文本摘要与分类。
- [Wordnet-Bahasa](http://wn-msa.sourceforge.net/) - 大型免费语义词典。
- [SEACrowd](https://github.com/SEACrowd/seacrowd-datahub) - 多语言、多模态数据中心，为东南亚 NLP 提供标准化数据集和基准（EMNLP 2024）。

</details>

<details>
<summary>

### 韩语 NLP

</summary>

[返回顶部](#contents)

### 库

- [KoNLPy](http://konlpy.org) - 韩语自然语言处理 Python 包。
- [Mecab (Korean)](https://eunjeon.blogspot.com/) - 韩语 NLP C++ 库。
- [KoalaNLP](https://koalanlp.github.io/koalanlp/) - 韩语 NLP Scala 库。
- [KoNLP](https://cran.r-project.org/package=KoNLP) - 韩语 NLP 的 R 包。
- [kss](https://github.com/hyunwoongko/kss) - 韩语句子切分器。
- [Kiwi](https://github.com/bab2min/Kiwi) - 快速韩语形态分析器。
- [Garu](https://github.com/ongjin/garu) - 原生运行于浏览器的韩语形态分析器，通过 WebAssembly 完全在客户端运行（1MB 模型、支持离线、MIT 许可）。

### 模型与嵌入

- [KoBERT](https://github.com/SKTBrain/KoBERT) - SKT 推出的韩语 BERT。
- [KLUE-RoBERTa](https://github.com/KLUE-benchmark/KLUE) - 在 KLUE 基准上训练的模型。
- [Polyglot-Ko](https://github.com/EleutherAI/polyglot) - 开放的韩语语言模型。
- [EXAONE 3.5](https://github.com/LG-AI-EXAONE) (LG，2024) - 韩语-英语双语开放语言模型系列。
- [HyperCLOVA X](https://www.ncloud.com/product/aiService/clovaStudio) - Naver 的韩语基础模型。

### 博客与教程

- [dsindex's blog](https://dsindex.github.io/)
- [Kangwon University's NLP course in Korean](http://cs.kangwon.ac.kr/~leeck/NLP/)

### 数据集

- [KAIST Corpus](http://semanticweb.kaist.ac.kr/home/index.php/KAIST_Corpus) - 韩国科学技术院提供的韩语语料库。
- [Naver Sentiment Movie Corpus in Korean](https://github.com/e9t/nsmc/)
- [Chosun Ilbo archive](http://srchdb1.chosun.com/pdf/i_archive/) - 韩国主要报纸《朝鲜日报》的韩语数据集。
- [Chat data](https://github.com/songys/Chatbot_data) - 韩语聊天机器人数据。
- [Petitions](https://github.com/akngs/petitions) - 青瓦台国民请愿网站上已过期的请愿数据。
- [Korean Parallel corpora](https://github.com/j-min/korean-parallel-corpora) - 韩语到法语及韩语到英语的神经机器翻译数据集。
- [KorQuAD](https://korquad.github.io/) - 韩语 SQuAD 数据集（v1.0 和 v2.1），附有 Wiki HTML 源文档。

</details>

<details>
<summary>

### 波斯语 NLP

</summary>

[返回顶部](#contents)

### 库

- [Hazm](https://github.com/roshan-research/hazm) - 波斯语 NLP 工具包。
- [Parsivar](https://github.com/ICTRC/Parsivar) - 波斯语处理工具包。
- [Perke](https://github.com/AlirezaTheH/perke) - 波斯语关键词短语抽取工具。
- [Perstem](https://github.com/jonsafari/perstem) - 波斯语词干提取器、形态分析器和部分词性标注器。
- [ParsiAnalyzer](https://github.com/NarimanN2/ParsiAnalyzer) - Elasticsearch 的波斯语分析器。
- [virastar](https://github.com/aziz/virastar) - 波斯语文本清理工具。

### 模型

- [ParsBERT](https://github.com/hooshvare/parsbert) - 波斯语 BERT。
- [PersianMind](https://huggingface.co/universitytehran/PersianMind-v1.0) (2023-2024) - 经波斯语指令微调的语言模型。
- [Dorna](https://huggingface.co/PartAI/Dorna-Llama3-8B-Instruct) (Part AI，2024) - 基于 Llama-3 的波斯语指令模型。

### 数据集

- [Bijankhan Corpus](https://dbrg.ut.ac.ir/بیژن%E2%80%8Cخان/) - 适用于波斯语 NLP 研究的标注语料，约 260 万个词由人工标注，涵盖 40 种词性标签。
- [Uppsala Persian Corpus (UPC)](https://sites.google.com/site/mojganserajicom/home/upc) - 大型免费波斯语语料，包含 270 万个 token，并标注了 31 种词性。
- [Large-Scale Colloquial Persian](http://hdl.handle.net/11234/1-3195) - LSCP：从 2700 万条非正式波斯语推文中提取的 1.2 亿个句子，带有依存关系、词性和情感标注。
- [ArmanPersoNERCorpus](https://github.com/HaniehP/PersianNER) - 包含 250K 个 token、7682 个句子的 IOB 格式 NER 标注语料。
- [FarsiYar PersianNER](https://github.com/Text-Mining/Persian-NER) - 约 2500 万个 token、约 100 万个波斯语句子，来自 [Persian Wikipedia Corpus](https://github.com/Text-Mining/Persian-Wikipedia-Corpus)。
- [PERLEX](http://farsbase.net/PERLEX.html) - 首个波斯语关系抽取数据集（翻译自 SemEval-2010 Task 8）。
- [Persian Syntactic Dependency Treebank](http://dadegan.ir/catalog/perdt) - 包含 29,982 个标注句子，涵盖波斯语价词典中的大多数动词。
- [Uppsala Persian Dependency Treebank (UPDT)](http://stp.lingfil.uu.se/~mojgan/UPDT.html) - 基于依存关系进行句法标注的语料库。
- [Hamshahri](https://dbrg.ut.ac.ir/hamshahri/) - CLEF 2008-2009 使用的标准、可靠的波斯语文本集。

</details>

<details>
<summary>

### 波兰语 NLP

</summary>

[返回顶部](#contents)

- [Polish-NLP](https://github.com/ksopyla/awesome-nlp-polish) - 精选波兰语 NLP 资源列表，涵盖模型、工具和数据集。

</details>

<details>
<summary>

### 葡萄牙语 NLP

</summary>

[返回顶部](#contents)

- [Portuguese-nlp](https://github.com/ajdavidl/Portuguese-NLP) - 精选葡萄牙语 NLP 资源和工具列表。

### 模型

- [BERTimbau](https://github.com/neuralmind-ai/portuguese-bert) - 巴西葡萄牙语 BERT。
- [Sabiá](https://huggingface.co/maritaca-ai) (Maritaca AI，2023-2024) - 面向葡萄牙语的开放语言模型。
- [Albertina](https://huggingface.co/PORTULAN) (PORTULAN，2023-2024) - 面向欧洲葡萄牙语和巴西葡萄牙语的仅编码器语言模型。

</details>

<details>
<summary>

### 西班牙语 NLP

</summary>

[返回顶部](#contents)

### 库

- [spanlp](https://github.com/jfreddypuentes/spanlp) - 使用来自 21 个西班牙语国家的数据，检测、屏蔽和清理西班牙语中的粗俗言论、仇恨言论和霸凌内容的 Python 库。

### 数据

- [Columbian Political Speeches](https://github.com/dav009/LatinamericanTextResources)
- [Copenhagen Treebank](https://mbkromann.github.io/copenhagen-dependency-treebank/)
- [Spanish Billion Words Corpus with Word2Vec embeddings](https://github.com/crscardellino/sbwce)
- [Compilation of Spanish Unannotated Corpora](https://github.com/josecannete/spanish-unannotated-corpora)

### 模型与嵌入

- [BETO](https://github.com/dccuchile/beto) - 西班牙语 BERT。
- [RoBERTa-bne](https://huggingface.co/PlanTL-GOB-ES/roberta-base-bne) - 在西班牙国家图书馆语料库上训练的西班牙语 RoBERTa。
- [Latxa](https://github.com/hitz-zentroa/latxa) (2024) - 面向巴斯克语的开放基础语言模型，也支持西班牙语。
- [Salamandra](https://huggingface.co/BSC-LT/salamandra-7b) (BSC，2024) - 巴塞罗那超级计算中心推出的多语言模型，对西班牙语支持出色。
- [RigoChat](https://huggingface.co/IIC/RigoChat-7b-v2) (2024) - 经西班牙语指令微调的开放模型。
- [Spanish Word Embeddings (multiple methods/corpora)](https://github.com/dccuchile/spanish-word-embeddings)
- [Spanish fastText Embeddings](https://github.com/BotCenter/spanishWordEmbeddings)
- [Spanish sent2vec Sentence Embeddings](https://github.com/BotCenter/spanishSent2Vec)

</details>

<details>
<summary>

### 泰语 NLP

</summary>

[返回顶部](#contents)

### 库

- [PyThaiNLP](https://github.com/PyThaiNLP/pythainlp) - 使用 Python 进行泰语 NLP。
- [JTCC](https://github.com/wittawatj/jtcc) - Java 字符簇库。
- [CutKum](https://github.com/pucktada/cutkum) - 使用 TensorFlow 深度学习进行分词。
- [Thai Language Toolkit](https://pypi.python.org/pypi/tltk/) - 分词与词性标注。
- [SynThai](https://github.com/KenjiroAI/SynThai) - 使用深度学习进行分词和词性标注。

### 模型

- [WangchanBERTa](https://github.com/vistec-AI/thai2transformers) - 泰语预训练语言模型。
- [Typhoon](https://huggingface.co/scb10x) (SCB 10X，2024) - 开放的泰语大语言模型系列。
- [OpenThaiGPT](https://huggingface.co/openthaigpt) (2023-2024) - 开放的泰语指令微调模型。
- [Sailor](https://github.com/sail-sg/sailor-llm) - 覆盖泰语的开放东南亚语言模型系列。

### 数据

- [Inter-BEST](https://www.nectec.or.th/corpus/index.php?league=pm) - 含 500 万个词并带有分词标注的文本语料。
- [Prime Minister 29](https://github.com/PyThaiNLP/lexicon-thai/tree/master/thai-corpus/Prime%20Minister%2029) - 泰国现任总理的演讲数据集。

</details>

<details>
<summary>

### 乌克兰语 NLP

</summary>

[返回顶部](#contents)

- [awesome-ukrainian-nlp](https://github.com/asivokon/awesome-ukrainian-nlp) - 精选乌克兰语 NLP 数据集、模型等资源。
- [UkrainianLT](https://github.com/Helsinki-NLP/UkrainianLT) - 聚焦机器翻译和语音处理的精选资源列表。

</details>

<details>
<summary>

### 乌尔都语 NLP

</summary>

[返回顶部](#contents)

### 库

- [urduhack](https://github.com/urduhack/urduhack) - 乌尔都语 NLP 库。

### 数据集

- [Collection of Urdu datasets](https://github.com/mirfan899/Urdu) - 涵盖词性标注、NER 和其他 NLP 任务的数据集合集。

</details>

<details>
<summary>

### 乌兹别克语 NLP

</summary>

[返回顶部](#contents)

### 数据集

- [SOAS English-Uzbek RAG Evaluation](https://github.com/rajantripathi/soas-rag-evaluation) - 面向文化相关 RAG 的双语检索评估基准。包含 400 条英乌双语数据，采用 MIT/CC-BY-4.0 许可。

</details>

<details>
<summary>

### 越南语 NLP

</summary>

[返回顶部](#contents)

### 库

- [underthesea](https://github.com/undertheseanlp/underthesea) - 越南语 NLP 工具包。
- [vn.vitk](https://github.com/phuonglh/vn.vitk) - 越南语文本处理工具包。
- [VnCoreNLP](https://github.com/vncorenlp/VnCoreNLP) - 越南语 NLP 工具包。
- [pyvi](https://github.com/trungtv/pyvi) - 越南语核心 NLP Python 工具包。
- [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - 端侧越南语文本转语音工具，支持语音克隆。

### 模型与嵌入

- [PhoBERT](https://github.com/VinAIResearch/PhoBERT) - 越南语预训练语言模型。
- [BARTpho](https://github.com/VinAIResearch/BARTpho) - 越南语 seq2seq 预训练模型。
- [PhoGPT](https://github.com/VinAIResearch/PhoGPT) (VinAI，2023-2024) - 越南语开放生成式语言模型。
- [Vistral](https://huggingface.co/Viet-Mistral/Vistral-7B-Chat) (2024) - 基于 Mistral 的越南语聊天模型。
- [Sailor](https://github.com/sail-sg/sailor-llm) (2024) - 开放多语言模型系列，覆盖越南语、泰语、印度尼西亚语及其他东南亚语言。

### 数据

- [Vietnamese Treebank](https://vlsp.hpda.vn/demo/?page=resources&lang=en) - 用于成分句法分析任务的 1 万个句子。
- [BKTreeBank](https://arxiv.org/pdf/1710.05519.pdf) - 越南语依存树库。
- [UD_Vietnamese](https://github.com/UniversalDependencies/UD_Vietnamese-VTB) - 越南语 Universal Dependencies 树库。
- [VIVOS](https://ailab.hcmus.edu.vn/vivos/) - 免费越南语语音语料，包含 15 小时录音（HCMUS AILab）。
- [VNTQcorpus(big).txt](http://viet.jnlp.org/download-du-lieu-tu-vung-corpus) - 175 万条新闻句子。
- [ViText2SQL](https://github.com/VinAIResearch/ViText2SQL) - 越南语 Text-to-SQL 语义解析数据集（EMNLP-2020 Findings）。
- [EVB Corpus](https://github.com/qhungngo/EVBCorpus) - 包含 15 本双语书籍的 2000 万词、100 篇英越平行文本、250 篇法律平行文本、5000 篇新闻文章和 2000 条电影字幕。

</details>

### 其他语言

- 俄语：[pymorphy2](https://github.com/kmike/pymorphy2) - 优秀的俄语词性标注器。
- 亚洲语言：泰语、老挝语、中文、日语和韩语 [ICU Tokenizer](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu-tokenizer.html) 在 ElasticSearch 中的实现。
- 古代语言：[CLTK](https://github.com/cltk/cltk)：古典语言工具包，是用于古代语言 NLP 的 Python 库和文本合集。
- 希伯来语：[NLPH_Resources](https://github.com/NLPH/NLPH_Resources) - 希伯来语 NLP 论文、语料库和语言资源合集。

[返回顶部](#contents)

## 另请参阅

以下精选列表涵盖本列表范围之外的相关主题：

- [awesome-llm](https://github.com/Hannibal046/Awesome-LLM) - 通用大语言模型资源。
- [awesome-generative-ai](https://github.com/steven2358/awesome-generative-ai) - 涵盖多种模态的生成式 AI。
- [awesome-rag](https://github.com/Danielskry/Awesome-RAG) - 检索增强生成系统和工具。
- [awesome-prompt-engineering](https://github.com/promptslab/Awesome-Prompt-Engineering) - 提示技术和模板库。
- [awesome-mlops](https://github.com/visenger/awesome-mlops) - 生产级机器学习，包括大语言模型服务。

## 引用

如果此仓库对你有帮助，请考虑引用此列表：

```bibtex
@misc{awesome-nlp,
  title  = {Awesome NLP},
  author = {Kim, Keon Woo},
  year   = {2018},
  url    = {https://github.com/keon/awesome-nlp},
  note   = {GitHub repository}
}
```

## 许可
[许可](./LICENSE) - CC0
