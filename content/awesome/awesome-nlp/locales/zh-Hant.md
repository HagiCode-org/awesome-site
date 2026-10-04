# awesome-nlp

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

---

> **由 [Atlas Cloud](https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp) 贊助**
>
> <a href="https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/atlas-cloud-dark.png"><img src="assets/atlas-cloud-light.png" alt="Atlas Cloud" width="220" /></picture></a>
>
> **AI API 彙整平台，提供相容 OpenAI 的 LLM 端點**，支援翻譯、摘要、多語言生成及結構化擷取等 NLP 任務。

---

自然語言處理相關資源精選清單。

_貢獻前請閱讀[貢獻指南](contributing.md)。歡迎透過提交[提取要求](https://github.com/keonkim/awesome-nlp/pulls)新增你喜愛的 NLP 資源。_

## 範圍

本清單涵蓋自然語言處理，包括語言學分析、多語言工具、傳統與神經方法、資料集及評估。僅收錄能推進或評估核心 NLP 任務或能力（分詞、多語言能力、機器翻譯、摘要、命名實體辨識、問答、事實性、探測、蒸餾）的大型語言模型。通用聊天機器人、代理程式架構、提示範本儲存庫、程式碼生成工具及 RAG 應用入門套件收錄於其他清單——請參閱[另請參閱](#see-also)。

## 目錄

* [研究綜述與趨勢](#research-summaries-and-trends)
* [知名 NLP 研究實驗室](#prominent-nlp-research-labs)
* [教學資源](#tutorials)
  * [閱讀資料](#reading-content)
  * [影片與線上課程](#videos-and-online-courses)
  * [書籍](#books)
* [程式庫](#libraries)
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
* [服務](#services)
* [標註工具](#annotation-tools)
* [任務與方法](#tasks-and-methods)
  * [文字嵌入](#text-embeddings)
  * [分詞、形態學與切分](#tokenization-morphology-and-segmentation)
  * [詞性標註與依存句法分析](#pos-tagging-and-dependency-parsing)
  * [命名實體辨識與資訊擷取](#named-entity-recognition-and-information-extraction)
  * [共指消解](#coreference-resolution)
  * [文字分類與情感分析](#text-classification-and-sentiment-analysis)
  * [主題建模](#topic-modeling)
  * [摘要生成](#summarization)
  * [機器翻譯](#machine-translation)
  * [問答與閱讀理解](#question-answering-and-reading-comprehension)
  * [超越命名實體辨識的資訊擷取](#information-extraction-beyond-ner)
  * [檢索與嵌入](#retrieval-and-embeddings)
  * [語音與文字](#speech-and-text)
* [資料集](#datasets)
* [多語言 NLP 架構](#multilingual-nlp-frameworks)
* [NLP 語言模型](#language-models-for-nlp)
  * [預訓練與調適](#pretraining-and-adaptation)
  * [多語言與跨語言模型](#multilingual-and-cross-lingual-models)
  * [評估與基準](#evaluation-and-benchmarks)
  * [推理與測試時運算](#reasoning-and-test-time-compute)
  * [長上下文與替代架構](#long-context-and-alternative-architectures)
  * [事實性、幻覺與校準](#factuality-hallucination-calibration)
  * [探測與可解釋性](#probing-and-interpretability)
  * [高效與小型語言模型](#efficient-and-small-language-models)
  * [指令微調與偏好最佳化](#instruction-tuning-and-preference-optimization)
  * [NLP 中的偏見、公平性與安全](#bias-fairness-safety-in-nlp)
* [各語言的 NLP](#nlp-per-language)
  * [阿拉伯語 NLP](#nlp-in-arabic)
  * [中文 NLP](#nlp-in-chinese)
  * [丹麥語 NLP](#nlp-in-danish)
  * [荷蘭語 NLP](#nlp-in-dutch)
  * [德語 NLP](#nlp-in-german)
  * [匈牙利語 NLP](#nlp-in-hungarian)
  * [印度語言 NLP](#nlp-in-indic-languages)
  * [印尼語 NLP](#nlp-in-indonesian)
  * [韓語 NLP](#nlp-in-korean)
  * [波斯語 NLP](#nlp-in-persian)
  * [波蘭語 NLP](#nlp-in-polish)
  * [葡萄牙語 NLP](#nlp-in-portuguese)
  * [西班牙語 NLP](#nlp-in-spanish)
  * [泰語 NLP](#nlp-in-thai)
  * [烏克蘭語 NLP](#nlp-in-ukrainian)
  * [烏爾都語 NLP](#nlp-in-urdu)
  * [烏茲別克語 NLP](#nlp-in-uzbek)
  * [越南語 NLP](#nlp-in-vietnamese)
  * [其他語言](#other-languages)
* [另請參閱](#see-also)
* [引用](#citation)

## 研究綜述與趨勢

追蹤 NLP 最新研究的管道：

* [ACL Anthology](https://aclanthology.org/) - ACL、EMNLP、NAACL、EACL、COLING 及相關會議論文的權威典藏庫。
* [NLP-Progress](https://nlpprogress.com/) - 追蹤各項常見 NLP 任務與資料集的最新技術成果。
* [Papers With Code: NLP](https://paperswithcode.com/area/natural-language-processing) - NLP 任務的論文、基準測試與排行榜。
* [Sebastian Ruder's newsletter](https://newsletter.ruder.io/) - 定期彙整 NLP 研究與趨勢。
* [ACL Rolling Review](https://aclrollingreview.org/) - 為 ACL 相關會議提供審查流程的滾動式評閱機制。
* [The Gradient](https://thegradient.pub/) - 關於 ML 與 NLP 研究的長篇文章。
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp) - 近期論文的圖解摘要。

### 歷史精選

* [NLP's ImageNet moment has arrived](https://thegradient.pub/nlp-imagenet/) - 2018 年探討預訓練語言模型興起的文章。
* [Survey of the State of the Art in Natural Language Generation](https://arxiv.org/abs/1703.09902) - 2017 年的自然語言生成（NLG）綜述。
* [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) 與 [The Illustrated BERT, ELMo, and co.](https://jalammar.github.io/illustrated-bert/) - 經典圖解說明。

## 知名 NLP 研究實驗室
[回到頂端](#contents)

* [The Berkeley NLP Group](http://nlp.cs.berkeley.edu/index.shtml) - 重要成果包括一套重建早已消亡語言的工具，相關報導見[此處](https://www.bbc.com/news/science-environment-21427896)；該工具也利用亞洲及太平洋地區現今使用的 637 種語言語料，重建其後代語言。
* [Language Technologies Institute, Carnegie Mellon University](http://www.cs.cmu.edu/~nasmith/nlp-cl.html) - 重要專案包括 [Avenue Project](http://www.cs.cmu.edu/~avenue/)，這是一套以句法為導向、用於克丘亞語與艾馬拉語等瀕危語言的機器翻譯系統；以及先前的 [Noah's Ark](http://www.cs.cmu.edu/~ark/)，其建立了 [AQMAR](http://www.cs.cmu.edu/~ark/AQMAR/) 以改善阿拉伯語 NLP 工具。
* [NLP research group, Columbia University](http://www1.cs.columbia.edu/nlp/index.cgi) - 負責開發 BOLT（語音翻譯系統的互動式錯誤處理），以及一項分析對話中笑聲特徵的未命名專案。
* [The Center or Language and Speech Processing, John Hopkins University](http://clsp.jhu.edu/) - 近期因開發語音辨識軟體以建立帕金森氏症診斷測試而受到媒體報導，[詳情](https://www.clsp.jhu.edu/2019/03/27/speech-recognition-software-and-machine-learning-tools-are-being-used-to-create-diagnostic-test-for-parkinsons-disease/#.XNFqrIkzYdU)。
* [Computational Linguistics and Information Processing Group, University of Maryland](https://wiki.umiacs.umd.edu/clip/index.php/Main_Page) - 重要成果包括[人機合作或逐字問答](http://www.umiacs.umd.edu/~jbg/projects/IIS-1652666)，以及語音表徵發展的建模。
* [Penn Natural Language Processing, University of Pennsylvania](https://nlp.cis.upenn.edu/) - 以建立 [Penn Treebank](https://catalog.ldc.upenn.edu/LDC99T42) 與 [Penn Discourse Treebank](https://www.cis.upenn.edu/~pdtb/) 聞名。
* [The Stanford Nautral Language Processing Group](https://nlp.stanford.edu/)- 全球頂尖 NLP 研究實驗室之一，重要成果包括 [Stanford CoreNLP](https://nlp.stanford.edu/software/corenlp.shtml) 及其[共指消解系統](https://nlp.stanford.edu/software/dcoref.shtml)。


## 教學資源
[回到頂端](#contents)

### 閱讀資料

通用機器學習

* [Machine Learning 101](https://docs.google.com/presentation/d/1kSuQyW5DTnkVaZEjGYCkfOxvzCqGEFzWBy4e9Uedd9k/edit?usp=sharing) 由 Google 資深創意工程師製作，向工程師與主管說明機器學習。
* [AI Playbook](https://aiplaybook.a16z.com/) - a16z 的 AI 指南很適合轉寄給主管，或用於簡報內容。
* [Sebastian Ruder's Newsletter](https://newsletter.ruder.io/) - 評述 NLP 研究精華。
* [How To Label Data](https://www.lighttag.io/how-to-label-data/) - 管理大型語言學標註專案的指南。
* [Depends on the Definition](https://www.depends-on-the-definition.com/) - 涵蓋廣泛 NLP 主題並附有詳細實作內容的部落格文章集。

NLP 入門與指南

* [Understand & Implement Natural Language Processing](https://www.analyticsvidhya.com/blog/2017/01/ultimate-guide-to-understand-implement-natural-language-processing-codes-in-python/)
* [NLP in Python](http://github.com/NirantK/nlp-python-deep-learning) - GitHub 筆記本合集。
* [Natural Language Processing: An Introduction](https://academic.oup.com/jamia/article/18/5/544/829676) - 牛津大學。
* [NLP from Scratch with PyTorch](https://pytorch.org/tutorials/intermediate/nlp_from_scratch_index.html)
* [Hands-On NLTK Tutorial](https://github.com/hb20007/hands-on-nltk-tutorial) - NLTK 教學與 Jupyter 筆記本。
* [Natural Language Processing with Python – Analyzing Text with the Natural Language Toolkit](https://www.nltk.org/book/) - 線上及紙本書籍，使用 NLTK 介紹 NLP 概念；本書作者也撰寫了 NLTK 程式庫。
* [Train a new language model from scratch](https://huggingface.co/blog/how-to-train) - Hugging Face 🤗 的指南。
* [Advanced NLP with spaCy](https://course.spacy.io/en/) - 免費線上課程，涵蓋文字處理、大規模資料分析、處理管線，以及針對自訂 NLP 任務訓練神經網路模型。
* [Kaggle NLP Learning Guide](https://www.kaggle.com/learn-guide/natural-language-processing) - 適合初學者的教學，包含入門指南、NLP 深度學習，以及 BERT、GloVe 和 TF-IDF 等技術的圖解說明。

部落格與電子報

* [Deep Learning, NLP, and Representations](https://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
* [The Illustrated BERT, ELMo, and co. (How NLP Cracked Transfer Learning)](https://jalammar.github.io/illustrated-bert/) 與 [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
* [Natural Language Processing](https://nlpers.blogspot.com/) - Hal Daumé III 撰寫。
* [arXiv: Natural Language Processing (Almost) from Scratch](https://arxiv.org/pdf/1103.0398.pdf)
* [Karpathy's The Unreasonable Effectiveness of Recurrent Neural Networks](https://karpathy.github.io/2015/05/21/rnn-effectiveness)
* [Machine Learning Mastery: Deep Learning for Natural Language Processing](https://machinelearningmastery.com/category/natural-language-processing) - NLP 深度學習相關文章。
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp)

### 影片與線上課程
[回到頂端](#contents)

* [Advanced Natural Language Processing](https://people.cs.umass.edu/~miyyer/cs685_f20/) - 麻州大學阿默斯特分校 CS 685 課程。
* [Deep Natural Language Processing](https://github.com/oxford-cs-deepnlp-2017/lectures) - 牛津大學系列講座。
* [Deep Learning for Natural Language Processing (cs224-n)](https://web.stanford.edu/class/cs224n/) - Richard Socher 與 Christopher Manning 在史丹佛大學開設的課程。
* [Neural Networks for NLP](http://phontron.com/class/nn4nlp2017/) - 卡內基美隆大學語言技術研究所課程。
* [Deep NLP Course](https://github.com/yandexdataschool/nlp_course) - Yandex Data School 開設，涵蓋從文字嵌入到機器翻譯的重要概念，包括序列建模、語言模型等。
* [fast.ai Code-First Intro to Natural Language Processing](https://www.fast.ai/2019/07/08/fastai-nlp/) - 結合傳統 NLP 主題（包括正規表示式、SVD、樸素貝葉斯、分詞）與近期神經網路方法（包括 RNN、seq2seq、GRU 和 Transformer），並探討偏見與錯誤資訊等迫切的倫理議題。Jupyter 筆記本請見[此處](https://github.com/fastai/course-nlp)。
* [Machine Learning University - Accelerated Natural Language Processing](https://www.youtube.com/playlist?list=PL8P_Z6C4GcuWfAq8Pt6PBYlck4OprHXsw) - 課程從 NLP 與文字處理入門，延伸至循環神經網路和 Transformer。
課程教材請見[此處](https://github.com/aws-samples/aws-machine-learning-university-accelerated-nlp)。
* [Applied Natural Language Processing](https://www.youtube.com/playlist?list=PLH-xYrxjfO2WyR3pOAB006CYMhNt4wTqp)- IIT Madras 系列講座，從基礎一路涵蓋自編碼器等主題。課程的 GitHub 筆記本也可在[此處](https://github.com/Ramaseshanr/anlp)取得。
* [DeepLearning.AI Natural Language Processing Specialization](https://www.deeplearning.ai/courses/natural-language-processing-specialization/) - 共四門課程，涵蓋情感分析、詞嵌入、RNN、LSTM、注意力機制，以及用於機器翻譯和摘要等任務的 BERT、T5 等 Transformer 模型。
* [Stanford CS336: Language Modeling from Scratch](https://stanford-cs336.github.io/) - 從頭建構語言模型的完整課程，涵蓋資料、分詞、訓練與評估。
* [Stanford CS25: Transformers United](https://web.stanford.edu/class/cs25/) - 邀請近期 Transformer 與 NLP 研究作者演講的研討會系列。
* [Cohere LLM University](https://cohere.com/llmu) - 關於 LLM、嵌入、語意搜尋及 NLP 應用的免費課程。
* [Hugging Face NLP Course](https://huggingface.co/learn/nlp-course) - 使用 Transformers、Datasets 和 Tokenizers 程式庫進行實作的 NLP 課程。
* [NLP Demystified](https://www.nlpdemystified.org/) - 適合初學者的免費課程，以 Python/Jupyter 筆記本介紹 NLP 基礎知識至 Transformer。


### 書籍

* [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) - Dan Jurafsky 教授撰寫的免費教材。
* [Natural Language Processing](https://github.com/jacobeisenstein/gt-nlp-class) - Georgia Tech Jacob Eisenstein 博士的免費 NLP 講義。
* [NLP with PyTorch](https://github.com/joosthub/PyTorchNLPBook) - Brian 與 Delip Rao 著。
* [Text Mining in R](https://www.tidytextmining.com)
* [Natural Language Processing with Python](https://www.nltk.org/book/)
* [Practical Natural Language Processing](https://www.oreilly.com/library/view/practical-natural-language/9781492054047/)
* [Natural Language Processing with Spark NLP](https://www.oreilly.com/library/view/natural-language-processing/9781492047759/)
* [Deep Learning for Natural Language Processing](https://www.manning.com/books/deep-learning-for-natural-language-processing) - Stephan Raaijmakers 著。
* [Real-World Natural Language Processing](https://www.manning.com/books/real-world-natural-language-processing) - Masato Hagiwara 著。
* [Natural Language Processing in Action, Second Edition](https://www.manning.com/books/natural-language-processing-in-action-second-edition) - Hobson Lane 與 Maria Dyshel 著。
* [Transformers in Action](https://www.manning.com/books/transformers-in-action) - Nicole Koenigstein 著。
* [The Math Behind Artificial Intelligence](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book) - Tiago Monteiro 著｜FreeCodeCamp 免費書籍，以工程觀點用淺白英文講解 AI 背後的數學。內容涵蓋線性代數、微積分、機率與統計，以及最佳化理論，並搭配類比、實際應用和 Python 程式碼範例。
  
## 程式庫

[回到頂端](#contents)

* <a id="node-js">**Node.js 與 JavaScript** - Node.js 的 NLP 程式庫</a> | [回到頂端](#contents)
  * [Twitter-text](https://github.com/twitter/twitter-text) - Twitter 文字處理程式庫的 JavaScript 實作。
  * [Knwl.js](https://github.com/benhmoore/Knwl.js) - 以 JS 撰寫的自然語言處理器。
  * [Retext](https://github.com/retextjs/retext) - 用於分析及操作自然語言的可擴充系統。
  * [NLP Compromise](https://github.com/spencermountain/compromise) - 在瀏覽器中進行自然語言處理。
  * [Natural](https://github.com/NaturalNode/natural) - Node.js 的通用自然語言處理功能。
  * [Poplar](https://github.com/synyi/poplar) - 網頁式自然語言處理（NLP）標註工具。
  * [NLP.js](https://github.com/axa-group/nlp.js) - 用於建置機器人的 NLP 程式庫。
  * [node-question-answering](https://github.com/huggingface/node-question-answering) - Node.js 中快速且適合正式環境使用的 DistilBERT 問答功能。

* <a id="python"> **Python** - Python NLP 程式庫</a> | [回到頂端](#contents)
  - [sentimental-onix](https://github.com/sloev/sentimental-onix) 使用 ONNX 的 spaCy 情感分析模型。
  - [TextAttack](https://github.com/QData/TextAttack) - NLP 對抗攻擊、對抗式訓練與資料增強。
  - [TextBlob](http://textblob.readthedocs.org/) - 提供一致的 API，方便處理常見自然語言處理（NLP）任務。此程式庫奠基於 [Natural Language Toolkit (NLTK)](https://www.nltk.org/) 和 [Pattern](https://github.com/clips/pattern)，並能與兩者良好整合 :+1:
  - [spaCy](https://github.com/explosion/spaCy) - 具備工業級效能的 Python 與 Cython NLP 程式庫 :+1:
    - [textacy](https://github.com/chartbeat-labs/textacy) - 建構於 spaCy 之上的高階 NLP 工具。
  - [gensim](https://radimrehurek.com/gensim/index.html) - 使用純文字執行非監督式語意建模的 Python 程式庫 :+1:
  - [scattertext](https://github.com/JasonKessler/scattertext) - 產生 d3 視覺化圖表，比較不同語料庫語言差異的 Python 程式庫。
  - [GluonNLP](https://github.com/dmlc/gluon-nlp) *(已封存)* - 以 MXNet/Gluon 建置的 NLP 深度學習工具組。
  - [AllenNLP](https://github.com/allenai/allennlp) *(已封存)* - 以 PyTorch 建置的 NLP 研究程式庫，可開發適用於多種語言任務的最先進深度學習模型。
  - [PyTorch-NLP](https://github.com/PetrochukM/PyTorch-NLP) - NLP 研究工具組，透過更完善的資料載入器、詞向量載入器、神經網路層表示，以及 BLEU 等常見 NLP 指標，支援快速原型開發。
  - [Rosetta](https://github.com/columbia-applied-data-science/rosetta) - 文字處理工具及包裝程式（例如 Vowpal Wabbit）。
  - [PyNLPl](https://github.com/proycon/pynlpl) - Python 自然語言處理程式庫。通用的 Python NLP 程式庫，可處理 ARPA 語言模型、Moses 短語表、GIZA++ 對齊等特定格式。
  - [foliapy](https://github.com/proycon/foliapy) - 用於處理 [FoLiA](https://proycon.github.io/folia/) 的 Python 程式庫；FoLiA 是一種語言學標註用的 XML 格式。
  - [PySS3](https://github.com/sergioburdisso/pyss3) - 實作 SS3 白箱文字分類器的 Python 套件，並附有可解釋預測結果的互動式視覺化工具。
  - [jPTDP](https://github.com/datquocnguyen/jPTDP) - 詞性（POS）標註與依存句法分析的聯合工具組，提供 40 多種語言的預訓練模型。
  - [BigARTM](https://github.com/bigartm/bigartm) - 快速主題建模程式庫。
  - [Snips NLU](https://github.com/snipsco/snips-nlu) - 可用於正式環境的意圖解析程式庫。
  - [Chazutsu](https://github.com/chakki-works/chazutsu) - 下載及解析標準 NLP 研究資料集的程式庫。
  - [Word Forms](https://github.com/gutfeeling/word_forms) - 可準確產生英文單字所有可能詞形的工具。
  - [Multilingual Latent Dirichlet Allocation (LDA)](https://github.com/ArtificiAI/Multilingual-Latent-Dirichlet-Allocation-LDA) - 多語言且可擴充的文件分群管線。
  - [Natural Language Toolkit (NLTK)](https://www.nltk.org/) - 提供各類 NLP 功能並支援 50 多種語料庫的程式庫。
  - [NLP Architect](https://github.com/NervanaSystems/nlp-architect) - 探索 NLP 與 NLU 最先進深度學習架構及技術的程式庫。
  - [Flair](https://github.com/zalandoresearch/flair) - 以 PyTorch 建置、簡單易用的最先進多語言 NLP 框架，包含 BERT、ELMo 和 Flair 嵌入。
  - [Kashgari](https://github.com/BrikerMan/Kashgari) - 簡單且以 Keras 為基礎的多語言 NLP 框架，可在五分鐘內建置命名實體辨識（NER）、詞性標註（PoS）和文字分類模型，並包含 BERT 與 word2vec 嵌入。
  - [FARM](https://github.com/deepset-ai/FARM) - 快速簡便的 NLP 遷移學習工具，將語言模型應用於產業，專注於問答。
  - [Haystack](https://github.com/deepset-ai/haystack) - 端對端 Python 框架，用於建置資料自然語言搜尋介面。運用 Transformers 與 NLP 最新技術，支援 DPR、Elasticsearch、HuggingFace Modelhub 等。
  - [Rita DSL](https://github.com/zaibacu/rita-dsl) - 一種參考 [Apache UIMA 上的 RUTA](https://uima.apache.org/ruta.html) 的 DSL，可定義語言模式（規則式 NLP），再轉換為 [spaCy](https://spacy.io/) 或較精簡輕量的正規表示式模式。
  - [Transformers](https://github.com/huggingface/transformers) - 適用於 TensorFlow 2.0 與 PyTorch 的自然語言處理程式庫。
  - [Tokenizers](https://github.com/huggingface/tokenizers) - 為研究與正式環境最佳化的分詞器。
  - [fairSeq](https://github.com/pytorch/fairseq) Facebook AI Research 的 PyTorch 最先進 seq2seq 模型實作。
  - [corex_topic](https://github.com/gregversteeg/corex_topic) - 僅需極少領域知識的階層式主題建模。
  - [Sockeye](https://github.com/awslabs/sockeye) - Amazon Translate 所採用的神經機器翻譯（NMT）工具組。
  - [DL Translate](https://github.com/xhlulu/dl-translate) - 以 `transformers` 和 Facebook mBART Large 建置、支援 50 種語言的深度學習翻譯程式庫。
  - [Jury](https://github.com/obss/jury) - 提供多種自動化指標來評估 NLP 模型輸出。
  - [python-ucto](https://github.com/proycon/python-ucto) - 適用於多種語言、支援 Unicode 並以正規表示式為基礎的分詞器。這是 C++ 程式庫的 Python 綁定，並支援 [FoLiA 格式](https://proycon.github.io/folia)。
  - [Pearmut](https://github.com/zouharvi/pearmut) - 多語言 NLP 任務（例如機器翻譯）的人工作業標註工具。
  - [Stanza](https://github.com/stanfordnlp/stanza) - Stanford NLP 的 Python 工具組，可在 70 多種語言中執行分詞、詞性標註、詞形還原、依存句法分析與 NER。
  - [Sentence-Transformers](https://github.com/UKPLab/sentence-transformers) - 句子／文件嵌入、語意搜尋與重新排序；目前檢索式 NLP 的標準工具。
  - [Argilla](https://github.com/argilla-io/argilla) - 用於 LLM 與 NLP 資料集的開源資料標註及回饋蒐集平台。
  - [HuggingFace Datasets](https://github.com/huggingface/datasets) - 為數千種 NLP 資料集提供標準化載入器與處理功能。
  - [HuggingFace Evaluate](https://github.com/huggingface/evaluate) - NLP 評估指標的參考實作。
  - [sacrebleu](https://github.com/mjpost/sacrebleu) - 機器翻譯可重現的 BLEU/chrF/TER 評分工具。
  - [COMET](https://github.com/Unbabel/COMET) - 基於學習的 MT 評估指標，目前事實上的標準。
  - [LangTest](https://github.com/JohnSnowLabs/langtest) - 超過 60 種測試類型，用於評估 NLP 模型的穩健性、偏見與公平性。
   - [yasbd-lib](https://github.com/speedyk-005/yasbd-lib) - 高準確度的規則式句子邊界偵測器（SBD），可直接替代 pysbd，支援串流 API、CLI，以及涵蓋 39 種以上語言的 spaCy 元件。

- <a id="c++">**C++** - C++ 程式庫</a> | [回到頂端](#contents)
  - [InsNet](https://github.com/chncwang/InsNet) - 用於建置個體相依 NLP 模型的神經網路程式庫，支援無填充的動態批次處理。
  - [MIT Information Extraction Toolkit](https://github.com/mit-nlp/MITIE) - 用於命名實體辨識與關係擷取的 C、C++ 和 Python 工具。
  - [CRF++](https://taku910.github.io/crfpp/) - 開源條件隨機場（CRF）實作，用於序列資料分段／標註及其他自然語言處理任務。
  - [CRFsuite](http://www.chokkan.org/software/crfsuite/) - 用於序列資料標註的條件隨機場（CRF）實作。
  - [BLLIP Parser](https://github.com/BLLIP/bllip-parser) - BLLIP 自然語言剖析器（亦稱 Charniak-Johnson 剖析器）。
  - [colibri-core](https://github.com/proycon/colibri-core) - C++ 程式庫、命令列工具與 Python 綁定，可快速且節省記憶體地擷取及處理 n-gram、skipgram 等基本語言結構。
  - [ucto](https://github.com/LanguageMachines/ucto) - 適用多種語言、支援 Unicode 並以正規表示式為基礎的分詞器工具與 C++ 程式庫，支援 FoLiA 格式。
  - [libfolia](https://github.com/LanguageMachines/libfolia) - 用於 [FoLiA 格式](https://proycon.github.io/folia/) 的 C++ 程式庫。
  - [frog](https://github.com/LanguageMachines/frog) - 為荷蘭語開發、以記憶體為基礎的 NLP 工具套件：詞性標註器、詞形還原器、依存句法分析器、NER、淺層剖析器與形態分析器。
  - [MeTA](https://github.com/meta-toolkit/meta) - ModErn Text Analysis：用於探勘大型文字資料的 C++ 資料科學工具組。
  - [Mecab (Japanese)](https://taku910.github.io/mecab/)
  - [Moses](http://statmt.org/moses/)
  - [StarSpace](https://github.com/facebookresearch/StarSpace) - Facebook 開發的程式庫，可建立詞彙、段落及文件層級嵌入，並用於文字分類。
  - [QSMM](http://qsmm.org) - 自適應機率式由上而下及由下而上的剖析器。

- <a id="java">**Java** - Java NLP 程式庫</a> | [回到頂端](#contents)
  - [Stanford NLP](https://nlp.stanford.edu/software/index.shtml)
  - [OpenNLP](https://opennlp.apache.org/)
  - [NLP4J](https://emorynlp.github.io/nlp4j/)
  - [Word2vec in Java](https://deeplearning4j.org/docs/latest/deeplearning4j-nlp-word2vec)
  - [ReVerb](https://github.com/knowitall/reverb/) 網路規模的開放式資訊擷取工具。
  - [OpenRegex](https://github.com/knowitall/openregex) 高效且彈性的詞元式正規表示式語言與引擎。
  - [CogcompNLP](https://github.com/CogComp/cogcomp-nlp) - 伊利諾大學認知運算小組開發的核心程式庫。
  - [MALLET](http://mallet.cs.umass.edu/) - MAchine Learning for LanguagE Toolkit，是統計自然語言處理、文件分類、分群、主題建模、資訊擷取及其他文字機器學習應用的套件。
  - [RDRPOSTagger](https://github.com/datquocnguyen/RDRPOSTagger) - 穩健的詞性標註工具組，提供 Java 與 Python 版本，以及 40 多種語言的預訓練模型。

- <a id="kotlin">**Kotlin** - Kotlin NLP 程式庫</a> | [回到頂端](#contents)
  - [Lingua](https://github.com/pemistahl/lingua/) 適用於長短文本的 Kotlin 與 Java 語言偵測程式庫。
  - [Kotidgy](https://github.com/meiblorn/kotidgy) — 以 Kotlin 撰寫、根據索引產生文字資料的工具。

- <a id="scala">**Scala** - Scala NLP 程式庫</a> | [回到頂端](#contents)
  - [Saul](https://github.com/CogComp/saul) - 開發 NLP 系統的程式庫，內建 SRL、POS 等模組。
  - [ATR4S](https://github.com/ispras/atr4s) - 採用最先進[自動術語辨識](https://en.wikipedia.org/wiki/Terminology_extraction)方法的工具組。
  - [tm](https://github.com/ispras/tm) - 以正規化多語言 [PLSA](https://en.wikipedia.org/wiki/Probabilistic_latent_semantic_analysis) 為基礎的主題建模實作。
  - [word2vec-scala](https://github.com/Refefer/word2vec-scala) - word2vec 模型的 Scala 介面，包含詞距、詞類比等向量運算。
  - [Epic](https://github.com/dlwh/epic) - 以 Scala 撰寫的高效能統計剖析器，並附有建置複雜結構化預測模型的框架。
  - [Spark NLP](https://github.com/JohnSnowLabs/spark-nlp) - 建構於 Apache Spark ML 之上的自然語言處理程式庫，提供簡單、高效且準確的 NLP 標註，可輕鬆擴展至分散式環境中的機器學習管線。

- <a id="R">**R** - R NLP 程式庫</a> | [回到頂端](#contents)
  - [text2vec](https://github.com/dselivanov/text2vec) - R 語言中的快速向量化、主題建模、距離計算及 GloVe 詞嵌入。
  - [wordVectors](https://github.com/bmschmidt/wordVectors) - 用於建立及探索 word2vec 與其他詞嵌入模型的 R 套件。
  - [RMallet](https://github.com/mimno/RMallet) - 介接 Java 機器學習工具 MALLET 的 R 套件。
  - [dfr-browser](https://github.com/agoldst/dfr-browser) - 建立 d3 視覺化圖表，以便在網頁瀏覽器中檢視文字主題模型。
  - [dfrtopics](https://github.com/agoldst/dfrtopics) - 用於探索文字主題模型的 R 套件。
  - [sentiment_classifier](https://github.com/kevincobain2000/sentiment_classifier) - 使用詞義消歧及 WordNet Reader 進行情感分類。
  - [jProcessing](https://github.com/kevincobain2000/jProcessing) - 日文自然語言處理程式庫，包含日文情感分類。
  - [corporaexplorer](https://kgjerde.github.io/corporaexplorer/) - 動態探索文字集的 R 套件。
  - [tidytext](https://github.com/juliasilge/tidytext) - 使用 tidy 工具進行文字探勘。
  - [spacyr](https://github.com/quanteda/spacyr) - spaCy NLP 的 R 封裝程式。
  - [CRAN Task View: Natural Language Processing](https://github.com/cran-task-views/NaturalLanguageProcessing/)

- <a id="clojure">**Clojure**</a> | [回到頂端](#contents)
  - [Clojure-openNLP](https://github.com/dakrone/clojure-opennlp) - 在 Clojure 中使用 OpenNLP 進行自然語言處理。
  - [Infections-clj](https://github.com/r0man/inflections-clj) - 類似 Rails 的 Clojure 與 ClojureScript 詞形變化程式庫。
  - [postagga](https://github.com/fekr/postagga) - 在 Clojure 與 ClojureScript 中剖析自然語言的程式庫。

- <a id="go">**Go**</a> | [回到頂端](#contents)
  - [prose](https://github.com/jdkato/prose) - 支援分詞、詞性標註及命名實體擷取的文字處理程式庫。
  - [gojieba](https://github.com/yanyiwu/gojieba) - jieba 中文斷詞演算法的 Go 語言實作。
  - [kagome](https://github.com/ikawaha/kagome) - 以純 Go 撰寫的日文形態分析器。
  - [go-propisyu](https://github.com/rekurt/go-propisyu) - 將數字轉換為符合正確語法性別及名詞變格的俄文詞彙。

- <a id="ruby">**Ruby**</a> | [回到頂端](#contents)
  - Kevin Dias 的 [Ruby 自然語言處理（NLP）程式庫、工具與軟體合集](https://github.com/diasks2/ruby-nlp)。
  - [以 Ruby 實作實用的自然語言處理](https://github.com/arbox/nlp-with-ruby)。

- <a id="rust">**Rust**</a> | [回到頂端](#contents)
  - [whatlang](https://github.com/greyblake/whatlang-rs) — 以三連字元為基礎的自然語言辨識程式庫。
  - [rust-bert](https://github.com/guillaume-be/rust-bert) - 可直接使用的 NLP 管線與 Transformer 模型。
  - [snips-nlu-rs](https://github.com/snipsco/snips-nlu-rs) *(已封存 — Snips 已停止服務)* - 可用於正式環境的意圖解析程式庫。

- <a id="NLP++">**NLP++** - NLP++ 語言</a> | [回到頂端](#contents)
  - [VSCode Language Extension](https://marketplace.visualstudio.com/items?itemName=dehilster.nlp) - NLP++ 的 VSCode 語言擴充功能。
  - [nlp-engine](https://github.com/VisualText/nlp-engine) - 可在 Linux 上執行 NLP++ 程式碼的引擎，包含完整的英文剖析器。
  - [VisualText](http://visualtext.org) - NLP++ 語言的首頁。
  - [NLP++ Wiki](http://wiki.naturalphilosophy.org/index.php?title=NLP%2B%2B) - NLP++ 語言的 Wiki 條目。

- <a id="julia">**Julia**</a> | [回到頂端](#contents)
  - [CorpusLoaders](https://github.com/JuliaText/CorpusLoaders.jl) - 多種 NLP 語料庫的載入器。
  - [Languages](https://github.com/JuliaText/Languages.jl) - 用於處理人類語言的套件。
  - [TextAnalysis](https://github.com/JuliaText/TextAnalysis.jl) - Julia 文字分析套件。
  - [TextModels](https://github.com/JuliaText/TextModels.jl) - 以神經網路為基礎的自然語言處理模型。
  - [WordTokenizers](https://github.com/JuliaText/WordTokenizers.jl) - 用於自然語言處理及相關任務的高效能分詞器。
  - [Word2Vec](https://github.com/JuliaText/Word2Vec.jl) - word2vec 的 Julia 介面。

### 服務

提供 NER、主題標記等高階功能的 NLP API | [回到頂端](#contents)

- [Wit-ai](https://github.com/wit-ai/wit) - 適用於應用程式與裝置的自然語言介面。
- [IBM Watson's Natural Language Understanding](https://github.com/watson-developer-cloud/natural-language-understanding-nodejs) - API 與 GitHub 示範。
- [Amazon Comprehend](https://aws.amazon.com/comprehend/) - 涵蓋 NER、標註和情感分析等常見任務的 NLP 與 ML 工具套件。
- [Google Cloud Natural Language API](https://cloud.google.com/natural-language/) - 支援至少九種語言（包括英文、簡體中文與繁體中文）的句法分析、NER、情感分析及內容標註。
- [ParallelDots](https://www.paralleldots.com/text-analysis-apis) - 涵蓋情感分析至意圖分析等功能的高階文字分析 API 服務。
- [Microsoft Cognitive Service](https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics/)
- [TextRazor](https://www.textrazor.com/)
- [Rosette](https://www.rosette.com/)
- [Textalytic](https://www.textalytic.com) - 在瀏覽器中執行自然語言處理，提供情感分析、命名實體擷取、POS 標註、詞頻統計、主題建模、文字雲等功能。
- [NLP Cloud](https://nlpcloud.io) - 透過 RESTful API 提供 spaCy 自訂及預訓練 NLP 模型，支援命名實體辨識（NER）、POS 標註等功能。
- [Cloudmersive](https://cloudmersive.com/nlp-api) - 免費整合式 NLP API，可執行語音標註、文字改寫、語言翻譯／偵測及句子剖析等操作。

### 標註工具

- [GATE](https://gate.ac.uk/overview.html) - General Architecture and Text Engineering 已發展超過 15 年，免費且開源。
- [Anafora](https://github.com/weitechen/anafora) 是免費開源的網頁式原始文字標註工具。
- [brat](https://brat.nlplab.org/) - brat 快速標註工具是用於協作文字標註的線上環境。
- [doccano](https://github.com/chakki-works/doccano) - doccano 免費且開源，提供文字分類、序列標註及序列轉序列標註功能。
- [INCEpTION](https://inception-project.github.io) - 提供智慧輔助與知識管理功能的語意標註平台。
- [prodigy](https://prodi.gy/) 是以主動式學習為核心的標註工具，需付費。
- [LightTag](https://lighttag.io) - 為團隊代管及管理的文字標註工具，需付費。
- [rstWeb](https://corpling.uis.georgetown.edu/rstweb/info/) - 用於語篇樹標註的開源本機或線上工具。
- [GitDox](https://corpling.uis.georgetown.edu/gitdox/) - 開源伺服器標註工具，支援 GitHub 版本控制、XML 資料驗證及協作試算表格。
- [Datasaur](https://datasaur.ai/) 支援個人或團隊使用多種 NLP 任務，採免費增值模式。
- [Konfuzio](https://konfuzio.com/en/) - 以團隊為先、採主動式學習的代管及地端文字、影像與 PDF 標註工具，提供免費增值方案，亦有付費功能。
- [UBIAI](https://ubiai.tools/) - 易於使用的團隊文字標註工具，具備完整的自動標註功能。支援 NER、關係與文件分類，以及發票標記的 OCR 標註，需付費。
- [Shoonya](https://github.com/AI4Bharat/Shoonya-Backend) - 免費開源的資料標註平台，提供多樣的組織及工作區管理功能。Shoonya 不限定資料類型，團隊可大規模使用多階段驗證流程進行資料標註。
- [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) - 免費、端對端、無程式碼的文字標註及深度學習模型訓練／微調平台。開箱即支援 Spark NLP 模型的命名實體辨識、分類、關係擷取與斷言狀態標註；使用者、團隊、專案及文件數量不限。非自由開源軟體。
- [FLAT](https://github.com/proycon/flat) - 以 [FoLiA 格式](http://proycon.github.io/folia) 為基礎的網頁式語言學標註環境；FoLiA 是豐富的 XML 語言學標註格式。免費且開源。
- [Argilla](https://github.com/argilla-io/argilla) - 開源平台，可蒐集人工回饋、建置 NLP 與 LLM 資料集，並整理偏好資料。
- [Label Studio](https://github.com/HumanSignal/label-studio) - 開放核心的多模態標記平台，廣泛用於 NLP 標註。
- [Potato](https://github.com/davidjurgens/potato) - 免費開源標註工具，涵蓋 21 種以上任務（分類、片段、共指、實體連結、代理程式追蹤評估），內建 MACE 品質控管、注意力檢查、AI 輔助標註，以及 300 多種範例任務。


## 任務與方法

依語言學問題整理 NLP 任務。各子章節先列出基礎／傳統研究，再列出神經網路方法，並視情況介紹 LLM 方法。現代語言模型專題研究（預訓練、評估、檢索、推理等）請參閱 [NLP 語言模型](#language-models-for-nlp)。

### 文字嵌入

[回到頂端](#contents)

靜態詞嵌入（基礎方法）：

- [word2vec](https://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf) - [實作](https://code.google.com/archive/p/word2vec/) - [解說文章](http://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
- [GloVe](https://nlp.stanford.edu/pubs/glove.pdf) - [解說文章](https://blog.acolyer.org/2016/04/22/glove-global-vectors-for-word-representation/)
- [fastText](https://arxiv.org/abs/1607.04606) - [實作](https://github.com/facebookresearch/fastText)；子詞 n-gram 能妥善處理詞彙表外（OOV）詞彙，對低資源語言仍相當實用。
- [sense2vec](https://arxiv.org/abs/1511.06388) - 詞義消歧。
- [Paragraph Vectors / doc2vec](https://cs.stanford.edu/~quocle/paragraph_vector.pdf)

上下文嵌入：

- [ELMo](https://arxiv.org/abs/1802.05365) - 深度上下文化詞彙表示。
- [CoVe](https://arxiv.org/abs/1708.00107) - 從機器翻譯中學得的上下文化向量。
- [ULMFiT](https://arxiv.org/abs/1801.06146) - 用於文字分類的語言模型微調。
- [InferSent](https://arxiv.org/abs/1705.02364) - 從自然語言推論（NLI）取得的句子表示。

現代句子與文件嵌入：最新排行榜請參閱 [NLP 檢索](#retrieval-for-nlp)（Sentence-Transformers、E5、BGE-M3、Nomic、GritLM）及 [MTEB](https://github.com/embeddings-benchmark/mteb)。

### 分詞、形態學與切分

[回到頂端](#contents)

- [SentencePiece](https://github.com/google/sentencepiece) - 不依賴特定語言的子詞分詞器。
- [BPE](https://arxiv.org/abs/1508.07909) 與 [Unigram LM](https://arxiv.org/abs/1804.10959) - 兩種主流子詞切分方法。
- [Stanza](https://github.com/stanfordnlp/stanza) - 支援 70 多種語言的分詞、詞形還原與形態分析。
- [UDPipe](https://github.com/ufal/udpipe) - 適用於 Universal Dependencies 的分詞、標註、詞形還原與剖析工具。
- [Morfessor](https://github.com/aalto-speech/morfessor) - 非監督式形態切分工具。
分詞器研究與架構（另請參閱[語言模型](#language-models-for-nlp)）：

- [Byte-Pair Encoding (Sennrich et al.)](https://arxiv.org/abs/1508.07909) - 神經機器翻譯的子詞單位，也是現代分詞器的基礎。
- [SentencePiece](https://github.com/google/sentencepiece) - 不依賴語言的子詞分詞（BPE 與 Unigram）。
- [Tokenizers](https://github.com/huggingface/tokenizers) - 以 Rust 快速實作 BPE、WordPiece 與 Unigram。
- [ByT5](https://arxiv.org/abs/2105.13626) - 不需分詞器的位元組層級模型。
- [CANINE](https://arxiv.org/abs/2103.06874) - 直接處理 Unicode 字元、不需分詞的編碼器。
- [How Good is Your Tokenizer?](https://arxiv.org/abs/2012.15613) - 比較不同語言的分詞器公平性。
- [Byte Latent Transformer (BLT)](https://arxiv.org/abs/2412.09871) (Meta，2024) - 動態位元組層級切塊，在大規模下可媲美採用 BPE 分詞的模型，讓免分詞器方向重新受到關注。
- [SuperBPE](https://arxiv.org/abs/2503.13423) (2025) - 超詞分詞方法，在下游任務上的表現優於 BPE。
- [Over-Tokenized Transformer](https://arxiv.org/abs/2501.16975) (ICML 2025) - 分離輸入與輸出詞彙表，顯示輸入詞彙表大小與訓練損失呈對數線性關係，並可不受模型大小限制地擴展詞彙表。
- [Foundations of Tokenization](https://arxiv.org/abs/2407.11606) (ICLR 2025) - 首個以隨機映射範疇論建立分詞器模型的形式化統一框架，並提出統計一致性的條件。
- [The Token Tax: Systematic Bias in Multilingual Tokenization](https://arxiv.org/abs/2509.05486) (2025) - 量化分詞膨脹率如何預測跨語言模型準確度，揭示形態複雜及低資源語言所承受的結構性成本懲罰。
- [Reducing Tokenization Premiums for Low-Resource Languages](https://arxiv.org/abs/2601.13328) (2026) - 事後擴增詞彙表，將低資源語言中多詞元字元序列合併，在不重新訓練的情況下降低推論成本。

### 詞性標註與依存句法分析

[回到頂端](#contents)

- [Universal Dependencies](https://universaldependencies.org/) - 跨語言一致的樹庫，涵蓋 100 多種語言。
- [spaCy](https://spacy.io/) 與 [Stanza](https://github.com/stanfordnlp/stanza) - 支援多種語言、適用於正式環境的剖析器。
- [Deep Biaffine Attention for Neural Dependency Parsing](https://arxiv.org/abs/1611.01734) - 奠定基礎的神經剖析架構。
- [Trankit](https://github.com/nlp-uoregon/trankit) - 輕量型 Transformer 多語言 NLP 工具組。
- [Self-Attentive Constituency Parsing (Kitaev & Klein)](https://arxiv.org/abs/1805.01052) - 效能強大的神經成分句法剖析器。

### 命名實體辨識與資訊擷取

[回到頂端](#contents)

基礎與神經網路方法：

- [CoNLL-2003 NER](https://www.aclweb.org/anthology/W03-0419/) - 經典英文 NER 基準。
- [Neural Architectures for NER (Lample et al.)](https://arxiv.org/abs/1603.01360) - BiLSTM-CRF，長期以來常用的 NER 架構。
- [Flair](https://github.com/flairNLP/flair) - 上下文字串嵌入，在多種語言中均有良好的 NER 表現。
- [spaCy NER](https://spacy.io/usage/linguistic-features#named-entities) - 可用於正式環境。

開放式與指令遵循資訊擷取：

- [Universal NER](https://arxiv.org/abs/2308.03279) - 經指令微調、支援跨語言開放集合 NER 的語言模型。
- [GLiNER](https://arxiv.org/abs/2311.08526) (2023) - 小型通用 NER 模型，可在推論時處理任意實體類型。
- [GoLLIE](https://arxiv.org/abs/2310.03668) - 使用語言模型依循指引進行資訊擷取。
- [REBEL](https://github.com/Babelscape/rebel) - 以 seq2seq 方式端對端擷取關係。

以 LLM 為基礎：

- [GPT-NER](https://arxiv.org/abs/2304.10428) - 使用 LLM 進行命名實體辨識。
- [Can LLMs Replace Sentence-Level NER?](https://arxiv.org/abs/2402.10573) (2024) - 探討成本與品質之間的取捨。
- [Generative NER in the Era of LLMs](https://arxiv.org/abs/2601.17898) (2026) - 在四項 NER 基準上評估八個開放 LLM；採用結構化輸出的 PEFT，表現可媲美編碼器式 NER。

### 共指消解

[回到頂端](#contents)

- [End-to-End Neural Coreference (Lee et al.)](https://arxiv.org/abs/1707.07045) - 現代神經共指消解的基礎。
- [SpanBERT](https://arxiv.org/abs/1907.10529) - 以片段為基礎的預訓練模型，是效能強大的共指基準。
- [coref-hoi](https://github.com/lxucs/coref-hoi) - 採用高階推論的共指消解工具。
- [maverick-coref](https://github.com/SapienzaNLP/maverick-coref) (2024) - 高效率共指消解系統，表現可媲美最佳的大型系統。
- [LingMess](https://arxiv.org/abs/2205.12644) - 以語言學理論為基礎、採類別式評分的共指消解方法。
以 LLM 為基礎：

- [LLMs for Coreference Resolution](https://arxiv.org/abs/2310.05884) - 以提示與微調進行共指消解。
- [Multilingual Coreference Shared Task: Can LLMs Dethrone Traditional Approaches?](https://arxiv.org/abs/2509.17796) (2025) - 比較 4 種 LLM 方法與 5 種傳統方法，共 9 個系統；傳統方法仍領先，但 LLM 正逐漸縮小差距。

### 文字分類與情感分析

[回到頂端](#contents)

- [fastText classifier](https://arxiv.org/abs/1607.01759) - 效能強且快速的線性基準模型。
- [Sentiment Treebank (SST)](https://nlp.stanford.edu/sentiment/) - 經典細粒度情感資料集。
- [SetFit](https://github.com/huggingface/setfit) - 不使用提示的少樣本文字分類。
- [FastFit](https://github.com/IBM/fastfit) - 適用多類別情境的快速少樣本方法。
- [SST / IMDB / AG News with DeBERTa-v3](https://arxiv.org/abs/2111.09543) - 目前的編碼器微調基準。
- [PySS3](https://github.com/sergioburdisso/pyss3) - 可解釋的白箱文字分類器。
- [LLMs as Annotators](https://arxiv.org/abs/2305.13734) - 使用 LLM 為文字分類資料標註，但須留意其限制。

### 主題建模

[回到頂端](#contents)

- [Latent Dirichlet Allocation (Blei et al.)](https://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf) - 基礎主題模型。
- [gensim](https://radimrehurek.com/gensim/) - Python 中的 LDA、LSI 與 HDP。
- [BigARTM](https://github.com/bigartm/bigartm) - 快速正規化主題建模。
- [BERTopic](https://github.com/MaartenGr/BERTopic) - 以上下文嵌入為基礎、透過分群進行主題建模，是現今常用的預設方法。
- [Top2Vec](https://github.com/ddangelov/Top2Vec) - 同時學習主題與文件向量。
- [CorEx Topic](https://github.com/gregversteeg/corex_topic) - 使用錨定詞進行階層式主題建模。

### 摘要生成

[回到頂端](#contents)

- [TextRank](https://web.eecs.umich.edu/~mihalcea/papers/mihalcea.emnlp04.pdf) - 以圖為基礎的抽取式摘要。
- [Pointer-Generator Networks (See et al.)](https://arxiv.org/abs/1704.04368) - 神經抽象式摘要的基礎方法。
- [PEGASUS](https://arxiv.org/abs/1912.08777) - 以缺失句子進行摘要預訓練。
- [BART](https://arxiv.org/abs/1910.13461) - 廣泛使用的去噪 seq2seq 基準模型。
- [BookSum](https://arxiv.org/abs/2105.08209) 與 [SCROLLS](https://arxiv.org/abs/2201.03533) - 長文件摘要基準。
以 LLM 為基礎：

- [Benchmarking LLMs for News Summarization](https://arxiv.org/abs/2301.13848) - 比較 LLM 與微調摘要模型。
- [Element-Aware Summarization with LLMs](https://arxiv.org/abs/2305.13412) - 用於摘要的結構化提示。
- [Understanding LLM Reasoning for Abstractive Summarization](https://arxiv.org/abs/2512.03503) (2025) - 明確推理雖可提升流暢度，卻會削弱事實依據；較長的推理預算可能降低忠實度。

### 機器翻譯

[回到頂端](#contents)

統計式與基礎神經網路方法：

- [Moses](http://statmt.org/moses/) - 具代表性的統計式機器翻譯系統。
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) - Transformer 論文，重新定義了整個領域。
- [Marian NMT](https://github.com/marian-nmt/marian) - 高效率的 C++ 神經機器翻譯框架。
- [Fairseq](https://github.com/facebookresearch/fairseq) - PyTorch 序列建模工具組。

大規模多語言模型：

- [NLLB-200](https://arxiv.org/abs/2207.04672) - 支援 200 種語言的機器翻譯。
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - 支援 400 多種語言的機器翻譯。
- [SeamlessM4T](https://arxiv.org/abs/2312.05187) - 支援 100 多種語言的語音與文字機器翻譯。

評估：

- [COMET](https://github.com/Unbabel/COMET) - 基於學習的 MT 指標，目前與 chrF 並列事實上的標準。
- [sacrebleu](https://github.com/mjpost/sacrebleu) - 可重現的 BLEU/chrF/TER 評分。
- [BERTScore](https://github.com/Tiiiger/bert_score) - 基於相似度的生成評估指標。

以 LLM 為基礎：

- [Is ChatGPT a Good Translator?](https://arxiv.org/abs/2301.08745) - 將 LLM 作為機器翻譯系統。
- [Adapting LLMs for Document-Level MT](https://arxiv.org/abs/2401.06468) (2024) - 使用 LLM 進行具上下文感知的翻譯。
- [GPT-4 vs Human Translators](https://arxiv.org/abs/2308.03245) - 專業機器翻譯品質比較。
- [Multilingual MT with Open LLMs at Practical Scale](https://arxiv.org/abs/2502.02481) (2025) - 在 28 種語言的機器翻譯上評估小於 100 億參數的開放 LLM，表現可媲美 GPT-4-turbo 與 Google Translate。
- [Bridging the Linguistic Divide: Survey on LLMs for MT](https://arxiv.org/abs/2504.01919) (2025) - 綜述指令遵循、上下文學習與偏好對齊如何重塑機器翻譯方法。

### 問答與閱讀理解

[回到頂端](#contents)

資料集與基礎系統：

- [SQuAD / SQuAD 2.0](https://rajpurkar.github.io/SQuAD-explorer/) - 抽取式閱讀理解。
- [Natural Questions](https://ai.google.com/research/NaturalQuestions/) - 真實使用者針對 Wikipedia 提出的問題。
- [HotpotQA](https://hotpotqa.github.io/) - 多跳推理。
- [TriviaQA](http://nlp.cs.washington.edu/triviaqa/) - 遠端監督式問答。
- [DrQA](https://github.com/facebookresearch/DrQA) - 以 Wikipedia 為知識來源的開放領域問答。
- [Document-QA](https://github.com/allenai/document-qa) - 多段落閱讀理解。

現代開放領域問答：

- [DPR](https://arxiv.org/abs/2004.04906) 與 [FiD](https://arxiv.org/abs/2007.01282) - 先檢索再閱讀；LLM 出現前的標準開放領域問答管線。
- [Atlas](https://arxiv.org/abs/2208.03299) - 用於少樣本問答的檢索增強語言模型。
- 另請參閱 [NLP 檢索](#retrieval-for-nlp)。

LLM 時代：

- [GPT-4 with retrieval on TriviaQA / NQ](https://arxiv.org/abs/2305.06983)
- [Self-RAG](https://arxiv.org/abs/2310.11511) (2023) - 檢索、生成與自我批判。
- [GAIA](https://arxiv.org/abs/2311.12983) - 通用 AI 助理基準，包含多步驟問答。

### 超越命名實體辨識的資訊擷取

[回到頂端](#contents)

- [OpenIE 6](https://github.com/dair-iitd/openie6) - 不需綱要的開放式資訊擷取。
- [Template-Based Information Extraction without the Templates](https://www.usna.edu/Users/cs/nchamber/pubs/acl2011-chambers-templates.pdf)
- [Privee: An Architecture for Automatically Analyzing Web Privacy Policies](https://www.sebastianzimmeck.de/zimmeckAndBellovin2014Privee.pdf)
- [REBEL](https://github.com/Babelscape/rebel) - 端對端關係擷取。
- [DocRED](https://github.com/thunlp/DocRED) - 文件層級關係擷取基準。
- [LLMs for Semantic Role Labeling](https://arxiv.org/abs/2506.05385) (2025) - 結合 RAG 與自我修正的生成式 LLM，在英文與中文語意角色標註（SRL）上的表現超越 BERT 類型的編碼器－解碼器模型。
- [Adapting LLMs for Minimal-edit GEC](https://arxiv.org/abs/2506.13148) (2025) - 採用新型錯誤率調適排程的解碼器專用 LLM，在 BEA-test 文法錯誤修正任務上創下最新技術成果。

### 檢索與嵌入

[回到頂端](#contents)

密集檢索與晚期互動檢索，日益成為問答與資訊檢索（IR）的基礎：

- [DPR (Dense Passage Retrieval)](https://arxiv.org/abs/2004.04906) - 雙編碼器檢索基準。
- [ColBERT](https://arxiv.org/abs/2004.12832) 與 [ColBERTv2](https://arxiv.org/abs/2112.01488) - 晚期互動檢索，在領域外資料上表現優異。
- [E5](https://arxiv.org/abs/2212.03533) 與 [E5-Mistral](https://arxiv.org/abs/2401.00368) - 廣泛使用的密集嵌入系列。
- [BGE](https://github.com/FlagOpen/FlagEmbedding) 與 [BGE-M3](https://arxiv.org/abs/2402.03216) (2024) - 多語言、多功能嵌入，在各語言的 MTEB 評比中名列前茅。
- [Nomic Embed](https://arxiv.org/abs/2402.01613) (2024) - 完全開放且可重現的嵌入模型。
- [Matryoshka Representation Learning](https://arxiv.org/abs/2205.13147) - 支援推論時調整維度的巢狀嵌入。
- [GritLM](https://arxiv.org/abs/2402.09906) (2024) - 以單一模型統一生成與嵌入。
- [RAG (Retrieval-Augmented Generation)](https://arxiv.org/abs/2005.11401) - 最初的檢索增強框架，是現代問答管線的基礎。
- [Gemini Embedding](https://arxiv.org/abs/2503.07891) (2025) - 以 Gemini 為基礎的密集嵌入，在涵蓋 250 多種語言的 MMTEB 與跨語言檢索（XOR-Retrieve、XTREME-UP）上達到最新技術成果。
- [Qwen3-Embedding](https://arxiv.org/abs/2506.05176) (2025) - 建構於 Qwen3 的解碼器式嵌入系列（0.6B–8B），在 MTEB Multilingual 與 MTEB Code 排名第一，超越先前的專有模型。
- [Rank1](https://arxiv.org/abs/2502.18418) (2025) - 首個透過蒸餾 DeepSeek-R1 推理軌跡並採用測試時運算訓練的重新排序模型，在指令遵循與領域外檢索上達到最新技術成果。
- [ReasonEmbed](https://arxiv.org/abs/2510.08252) (2025) - 針對密集推理檢索的嵌入模型，採用 ReMixer 資料合成及 Redapter 自適應訓練，在 BRIGHT 上創下 nDCG@10 38.1 的紀錄。
- [ColBERT-Att](https://arxiv.org/abs/2603.25248) (2026) - 將查詢與文件的注意力權重整合至 ColBERT 評分，擴展晚期互動檢索；提升 MS-MARCO、BEIR 和 LoTTE 的召回率。
嵌入與檢索基準：

- [MMTEB](https://arxiv.org/abs/2502.13595) (2025) - 社群將 MTEB 擴展至 250 多種語言、500 多項任務。

### 語音與文字

[回到頂端](#contents)

A 組簡要參考資源，因為此主題與相鄰領域有所重疊：

- [Whisper](https://github.com/openai/whisper) - 多語言 ASR；目前開源模型中的常用選擇。
- [SeamlessM4T](https://github.com/facebookresearch/seamless_communication) - 統一的語音與文字翻譯。
- [Canary](https://huggingface.co/nvidia/canary-1b) (NVIDIA，2024) - 頂尖開源多語言 ASR 模型。
- [FunASR](https://github.com/modelscope/FunASR) - 工業級 ASR 工具組；GPU 上達即時速度的 170 倍，支援 50 多種語言，內建 VAD、標點、說話者分離及情緒偵測。包含非自回歸 SenseVoice 與以 LLM 為基礎的 Fun-ASR-Nano 模型。
- [Wav2Vec 2.0](https://arxiv.org/abs/2006.11477) - 自我監督式語音預訓練的基礎方法。
- [Coqui TTS](https://github.com/coqui-ai/TTS) 與 [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - 開源 TTS。

## 資料集

[回到頂端](#contents)

資料集入口與清單：

- [HuggingFace Datasets Hub](https://huggingface.co/datasets) - 現代 NLP 資料集的主要索引，提供具版本控制且可串流的載入器。
- [nlp-datasets](https://github.com/niderhoff/nlp-datasets) - 大型 NLP 資料集合集。
- [gensim-data](https://github.com/RaRe-Technologies/gensim-data) - 預訓練 NLP 模型與 NLP 語料庫的資料儲存庫。

預訓練規模語料庫（開放）：

- [The Pile](https://pile.eleuther.ai/) - 825 GiB 多樣化文字語料庫。
- [RedPajama / RedPajama-V2](https://github.com/togethercomputer/RedPajama-Data) (2023–2024) - 重製 LLaMA 預訓練資料；V2 含 30 兆詞元及品質指標。
- [Dolma](https://github.com/allenai/dolma) (AI2，2023–2024) - 3 兆詞元的開放預訓練語料庫，並記錄資料篩選管線。
- [FineWeb / FineWeb-Edu](https://huggingface.co/datasets/HuggingFaceFW/fineweb) (2024) - 15 兆詞元的清理後網頁語料庫；FineWeb-Edu 依教育品質篩選資料。
- [CulturaX](https://huggingface.co/datasets/uonlp/CulturaX) - 涵蓋 167 種語言，共 6.3 兆詞元。
- [Common Corpus](https://huggingface.co/datasets/PleIAs/common_corpus) (2024) - 採開放授權、共 2 兆詞元的多語言語料庫。

任務與指令資料集：

- [Universal Dependencies](https://universaldependencies.org/) - 跨語言一致的樹庫標註，涵蓋 100 多種語言。
- [Tülu 3 SFT Mixture](https://huggingface.co/datasets/allenai/tulu-3-sft-mixture) (2024) - 支援 Tülu 3 的開放指令微調資料。
- [tiny_qa_benchmark_pp](https://github.com/vincentkoc/tiny_qa_benchmark_pp/) - 小型多語言 NLP 問答資料集，以及用來產生合成副本的程式庫。

## 多語言 NLP 架構

[回到頂端](#contents)

- [UDPipe](https://github.com/ufal/udpipe) 是可訓練的管線，可為 Universal Treebanks 及其他 CoNLL-U 檔案進行分詞、標註、詞形還原與剖析。主要以 C++ 撰寫，為多語言 NLP 處理提供快速可靠的解決方案。
- [NLP-Cube](https://github.com/adobe/NLP-Cube) : 自然語言處理管線，提供句子切分、分詞、詞形還原、詞性標註與依存句法分析。這套新平台以 Python 和 Dynet 2.0 撰寫，提供獨立執行方式（CLI／Python 綁定）及伺服器功能（REST API）。
- [UralicNLP](https://github.com/mikahama/uralicNLP) 是一套 NLP 程式庫，主要支援多種瀕危烏拉爾語系語言，例如薩米語、莫爾多瓦語、馬里語、科米語等。也支援芬蘭語等非瀕危語言，以及瑞典語、阿拉伯語等非烏拉爾語系語言。UralicNLP 可進行形態分析、詞形生成、詞形還原與消歧。

## NLP 語言模型

[回到頂端](#contents)

此處收錄以 NLP 任務與語言現象為範圍的預訓練語言模型及相關研究。通用 LLM 工具、代理程式或 RAG 應用套件請參閱[另請參閱](#see-also)。

### 預訓練與調適

編碼器（仍是傳統 NLP 任務的主力）：

- [BERT](https://arxiv.org/abs/1810.04805) - 雙向 Transformer 預訓練，是 2018 年以來多數編碼器式 NLP 研究的基礎。[線上閱讀](https://webeditions.page/works/bert-pre-training/)，提供章節導覽並附上 ACL 原文。
- [RoBERTa](https://arxiv.org/abs/1907.11692) - 經穩健最佳化的 BERT 預訓練方式，是常用的編碼器基準。
- [DeBERTa / DeBERTa-v3](https://arxiv.org/abs/2111.09543) - 解耦注意力，在分類、NER、NLI 任務上表現優異。
- [ELECTRA](https://arxiv.org/abs/2003.10555) - 以替換詞元偵測進行預訓練，樣本效率高。
- [ModernBERT](https://arxiv.org/abs/2412.13663) (2024) - 現代化編碼器，採用旋轉嵌入、FlashAttention 與 8K 上下文；目前分類、NER、檢索任務的首選編碼器。
- [NeoBERT](https://arxiv.org/abs/2502.19587) (2025) - 整合現代架構改良的 2.5 億參數編碼器（RoPE、4K 上下文、最佳化深寬比）；在 MTEB 上達到最新技術水準，於相同微調條件下超越 ModernBERT 與 RoBERTa-large。

編碼器－解碼器與 seq2seq：

- [T5](https://arxiv.org/abs/1910.10683) 與 [FLAN-T5](https://arxiv.org/abs/2210.11416) - 將 NLP 任務統一為文字轉文字；效能強大的指令微調編碼器－解碼器基準。
- [BART](https://arxiv.org/abs/1910.13461) - 去噪 seq2seq 預訓練，廣泛用於摘要與生成。

開放式純解碼器語言模型（作為 NLP 任務的基礎模型）：

- [Llama 3 / 3.1 / 3.3](https://arxiv.org/abs/2407.21783) (Meta，2024–2025) - 廣泛採用的開放權重系列，是各類 NLP 任務微調的常用基礎模型。
- [Qwen 2.5 / Qwen 3](https://qwenlm.github.io/) (Alibaba，2024–2025) - 多語言涵蓋範圍廣，尤其擅長中文；常在多語言基準中名列開放模型前茅。
- [DeepSeek-V3](https://arxiv.org/abs/2412.19437) (2024) - 高效率 MoE 預訓練，具競爭力的開放基礎模型。
- [OLMo 2](https://arxiv.org/abs/2501.00656) (AI2，2025) - 權重、訓練資料與程式碼皆完全開放；可作為可重現性基準。
- [Gemma 2 / Gemma 3](https://arxiv.org/abs/2408.00118) (Google，2024–2025) - NLP 任務表現優異的開放式小型／中型模型。
- [Mistral / Mixtral](https://arxiv.org/abs/2401.04088) - 高效率的密集式與稀疏 MoE 開放模型。
- [What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?](https://arxiv.org/abs/2204.05832) - 比較編碼器、解碼器與編碼器－解碼器在 NLP 遷移上的表現。

### 多語言與跨語言模型

- [XLM-R](https://arxiv.org/abs/1911.02116) - 在 CommonCrawl 上訓練、涵蓋 100 種語言的跨語言遮罩語言模型。
- [mT5](https://arxiv.org/abs/2010.11934) - 涵蓋 101 種語言的多語言 T5。
- [BLOOM](https://arxiv.org/abs/2211.05100) - 1,760 億參數的開放多語言語言模型，涵蓋 46 種自然語言。
- [Aya 23 / Aya Expanse](https://arxiv.org/abs/2412.04261) (Cohere For AI，2024) - 涵蓋 23 至 101 種語言的大規模多語言指令微調模型。
- [Glot500](https://arxiv.org/abs/2305.12182) - 涵蓋 500 多種語言、專注低資源語言的編碼器。
- [NLLB-200](https://arxiv.org/abs/2207.04672) - No Language Left Behind，支援 200 種語言的機器翻譯。
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - 支援 400 多種語言的機器翻譯模型與 3 兆詞元多語言語料庫。
- [SeamlessM4T / Seamless](https://arxiv.org/abs/2312.05187) (Meta，2023–2024) - 支援 100 多種語言的多語言、多模態語音與文字翻譯。
- [SEA-LION / SeaLLM](https://arxiv.org/abs/2312.00738) (2024–2025) - 專為東南亞語言打造的語言模型。
- [Babel](https://arxiv.org/abs/2503.00865) (2025) - 開放多語言 LLM（9B 與 83B），涵蓋使用人口最多的 25 種語言（約占全球語言使用者的 90%）；在 XCOPA、XNLI、MGSM、FLORES-200 上超越規模相近的開放多語言模型。
- [Lugha-Llama](https://arxiv.org/abs/2504.06536) (Princeton/Mila，2025) - 透過精選的 WURA 語料調適 Llama-3.1-8B，以支援非洲低資源語言；在 IrokoBench 與 AfriQA 創下開源模型最新成果。
- [AfriqueLLM](https://arxiv.org/abs/2601.06395) (McGill，2026) - 一系列開放 LLM（4B–14B），使用涵蓋 20 種非洲語言的 260 億詞元持續預訓練，並附有完整的資料混合實證研究。
- [TranslateGemma](https://arxiv.org/abs/2601.09012) (Google，2026) - 建構於 Gemma 3 的開放翻譯專用模型，透過 SFT、RL 與品質獎勵模型涵蓋 55 組語言配對。
- [MiLMMT-46](https://arxiv.org/abs/2602.11961) (Xiaomi，2026) - 擴展至 46 種語言的開放多語言機器翻譯，表現可媲美 Google Translate 與 Gemini 3 Pro 等商用系統。

### 評估與基準

NLU 與跨語言評估：

- [GLUE](https://gluebenchmark.com/) 與 [SuperGLUE](https://super.gluebenchmark.com/) - 英文 NLU 基準。
- [XTREME](https://sites.research.google/xtreme) 與 [XGLUE](https://microsoft.github.io/XGLUE/) - 跨語言 NLU。
- [XNLI](https://github.com/facebookresearch/XNLI) - 涵蓋 15 種語言的跨語言自然語言推論。
- [FLORES-200](https://github.com/facebookresearch/flores) - 涵蓋 200 種語言的機器翻譯評估。
- [MTEB](https://github.com/embeddings-benchmark/mteb) - 大規模文字嵌入基準；句子／文件編碼器的標準基準。
- [BEIR](https://github.com/beir-cellar/beir) - 適用於檢索模型的異質資訊檢索基準。

現代語言模型評估（2023–2026）：

- [HELM](https://crfm.stanford.edu/helm/) - 涵蓋 NLP 任務、準確度及更多面向的整體評估。
- [BIG-bench](https://github.com/google/BIG-bench) - 200 多項用於探測語言模型能力的任務。
- [MMLU](https://github.com/hendrycks/test) - 涵蓋 57 個學科的多任務知識評估。
- [MMLU-Pro](https://arxiv.org/abs/2406.01574) (2024) - 難度更高、鑑別力更強的 MMLU 後繼基準。
- [GPQA](https://arxiv.org/abs/2311.12022) - 研究所程度的問答與「Google 無法解答」的推理評估。
- [REFUTE](https://huggingface.co/datasets/BGPT-OFFICIAL/refute) (2026) - 科學推理基準，評估以證據為本的批判、過度主張偵測、缺少證據時拒答及校準能力。
- [IFEval](https://arxiv.org/abs/2311.07911) - 可驗證的指令遵循評估。
- [Chatbot Arena (LMSYS)](https://lmarena.ai/) - 依人類偏好排列聊天模型的 ELO 排行榜。
- [LiveBench](https://livebench.ai/) (2024) - 每月更新、可抵抗資料污染的基準。
- [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) - 統一的語言模型基準評估框架。
- [MMLU-ProX](https://arxiv.org/abs/2503.10497) (2025) - 將 MMLU-Pro 擴展為涵蓋 29 種類型多樣語言的多語言版本；揭示高資源與低資源語言之間最高達 24.3% 的效能落差。
- [MultiChallenge](https://arxiv.org/abs/2501.17399) (2025) - 多輪對話基準，揭露指令遵循與上下文內推理同時失效的情況；所有受測前沿模型得分均低於 50%。
- [FRAMES](https://arxiv.org/abs/2409.12941) (2025) - 統一的 RAG 評估：824 道多跳問題，需同時運用事實性、檢索準確度與跨文件推理。

長上下文評估：

- [Needle in a Haystack](https://github.com/gkamradt/LLMTest_NeedleInAHaystack) - 長上下文視窗的檢索探測測試。
- [RULER](https://arxiv.org/abs/2404.06654) (2024) - 超越簡單檢索的合成長上下文任務。
- [LongBench](https://github.com/THUDM/LongBench) - 涵蓋 NLP 任務的雙語長上下文基準。
- [LongBench v2](https://arxiv.org/abs/2412.15204) (2025) - 503 道專家設計的選擇題，涵蓋 8K 至 200 萬詞元上下文與深度多跳推理；人在時間壓力下的得分為 53.7%。
- [U-NIAH](https://arxiv.org/abs/2503.00353) (2025) - 以多針及巢狀配置擴展「大海撈針」測試；顯示 RAG 可緩解小型 LLM 的中段遺失問題，但會降低推理模型的表現。

### 推理與測試時運算

2024–2026 年引領趨勢的方向：能產生明確推理軌跡並受益於額外推論運算的模型。

- [Chain-of-Thought Prompting](https://arxiv.org/abs/2201.11903) - 奠基性成果；中間推理步驟可提升效能。
- [Self-Consistency](https://arxiv.org/abs/2203.11171) - 對取樣產生的思維鏈進行多數決。
- [Tree of Thoughts](https://arxiv.org/abs/2305.10601) - 在推理樹中進行搜尋。
- [Self-Refine](https://arxiv.org/abs/2303.17651) 與 [Reflexion](https://arxiv.org/abs/2303.11366) - 推論時的自我修正方法。
- [Large Language Models are Zero-Shot Reasoners](https://arxiv.org/abs/2205.11916) - 將思維鏈用於 NLP 推理任務。
- [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) - 用於推理的過程監督獎勵模型。
- [DeepSeek-R1](https://arxiv.org/abs/2501.12948) (2025) - 以純 RL 訓練的開放推理模型，公開重現 o1 式行為。
- [OpenAI o1 / o3](https://openai.com/index/learning-to-reason-with-llms/) (2024–2025) - 採用測試時運算的推理系統。
- [Scaling LLM Test-Time Compute Optimally](https://arxiv.org/abs/2408.03314) (2024) - 系統性研究推論時運算的取捨。
- [s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393) (2025) - 透過預算強制法實作的簡易開放推理方法。
- [Kimi k1.5](https://arxiv.org/abs/2501.12599) (2025) - 以策略最佳化進行長上下文 RL（不使用 MCTS 或 PRM），達到 o1 等級效能；並將長思維鏈蒸餾至短思維鏈模型。
- [rStar-Math](https://arxiv.org/abs/2501.04519) (2025) - 小型策略模型搭配透過 MCTS rollout 訓練的過程偏好模型，讓小型語言模型無須從大型模型蒸餾即可啟動推理能力。
- [DAPO](https://arxiv.org/abs/2503.14476) (2025) - 開放的 GRPO 式 RL 訓練系統，具備四項關鍵改良（解耦裁切、動態取樣、詞元層級損失、熵獎勵）；重現並超越 DeepSeek-R1-Zero 等級的推理能力。
- [VAPO](https://arxiv.org/abs/2504.05118) (2025) - 以價值模型為基礎的 RL，採用長度自適應 GAE 與詞元層級裁切；在穩定訓練下，於 AIME 2024 超越不使用價值模型的 GRPO 方法。
- [ThinkPRM](https://arxiv.org/abs/2504.16828) (2025) - 生成式過程獎勵模型會逐步產生思維鏈驗證，僅使用 1% 的監督標籤即可媲美判別式 PRM。
- [OpenThoughts](https://arxiv.org/abs/2506.04178) (2025) - 針對開放推理模型資料配方進行 1,000 多項受控實驗；在 AIME 2025 達到最新成果，媲美封閉式蒸餾基準。

### 長上下文與替代架構

- [Mamba](https://arxiv.org/abs/2312.00752) 與 [Mamba-2](https://arxiv.org/abs/2405.21060) - 選擇性狀態空間模型，以線性時間處理長上下文，是注意力機制的替代方案。
- [RWKV](https://arxiv.org/abs/2305.13048) - 可擴展至大量參數的 RNN－Transformer 混合架構。
- [Jamba](https://arxiv.org/abs/2403.19887) (2024) - Mamba、Transformer 與 MoE 混合架構。
- [RoPE](https://arxiv.org/abs/2104.09864) 與 [YaRN](https://arxiv.org/abs/2309.00071) - 旋轉位置嵌入與上下文長度擴展方法。
- [Position Interpolation](https://arxiv.org/abs/2306.15595) - 只需少量微調即可延長上下文視窗。
- [Lost in the Middle](https://arxiv.org/abs/2307.03172) - NLP 任務中的長上下文效能衰退模式。
- [RAG vs Long-Context LLMs](https://arxiv.org/abs/2407.16833) (2024) - 探討以長輸入進行問答時的取捨。
- [Titans: Learning to Memorize at Test Time](https://arxiv.org/abs/2501.00663) (2025) - 可於測試時學習記憶歷史上下文的神經長期記憶模組；可擴展至超過 200 萬詞元，在語言建模與推理上優於 Transformer 及現代線性循環模型。
- [MiniMax-01](https://arxiv.org/abs/2501.08313) (2025) - 4,560 億參數混合模型，結合閃電（線性）注意力與稀疏 softmax 注意力；在最多 400 萬詞元的推論上下文中，NLP 效能媲美 GPT-4o。
- [Native Sparse Attention (NSA)](https://arxiv.org/abs/2502.11089) (2025) - 可訓練的稀疏注意力，結合粗粒度壓縮與細粒度選擇；在 64K 上大幅加速，且 NLP 基準表現不受影響。
- [LongRoPE2](https://arxiv.org/abs/2502.20082) (2025) - 找出高頻 RoPE 維度訓練不足的問題，並以演化搜尋重新調整；只需 Meta 方法 1/80 的訓練詞元，即可將 LLaMA3-8B 擴展至 128K。
- [Characterizing SSM and Hybrid LM Long-Context Performance](https://arxiv.org/abs/2507.12442) (2025) - 首次全面分析 Transformer、SSM 與混合模型在最多 22 萬詞元上下文下的記憶體與速度；SSM 最快可達 4 倍，混合模型則兼顧召回率與效率。

### 事實性、幻覺與校準

- [Survey of Hallucination in Natural Language Generation](https://arxiv.org/abs/2202.03629) - 幻覺分類法與緩解策略綜述。
- [TruthfulQA](https://github.com/sylinrl/TruthfulQA) - 問答事實性的基準。
- [FActScore](https://github.com/shmsw25/FActScore) - 長篇生成內容的細粒度事實準確度。
- [LongFact / SAFE](https://arxiv.org/abs/2403.18802) (2024) - 長篇事實性基準與搜尋增強評估器。
- [SelfCheckGPT](https://github.com/potsawee/selfcheckgpt) - 以取樣方式偵測幻覺。
- [RAGAS](https://github.com/explodinggradients/ragas) - RAG 與問答管線的免參考評估工具。
- [Lookback Lens](https://arxiv.org/abs/2407.07071) (2024) - 依據注意力模式偵測長上下文生成中的幻覺。
- [Calibration of LLMs on Multiple Choice](https://arxiv.org/abs/2402.13887) (2024) - 分析格式影響下的校準能力。
- [HalluLens](https://arxiv.org/abs/2504.17550) (2025) - 幻覺基準，採用外在／內在分類法及動態重新產生測試集，以抵禦資料洩漏。
- [Atomic Calibration](https://arxiv.org/abs/2410.13246) (2025) - 長篇生成的主張層級校準分析；模型對長篇輸出的校準能力明顯不如對單一主張。
- [FRANQ](https://arxiv.org/abs/2505.21072) (2025) - 用於 RAG 事實查核、考量忠實度的不確定性量化；正式區分忠實度與事實性。
- [MUCH](https://arxiv.org/abs/2511.17081) (2025) - 涵蓋英文、法文、西班牙文與德文的多語言主張幻覺基準，並釋出詞元層級 logits，以進行嚴謹的不確定性量化評估。
- [HalluHard](https://arxiv.org/abs/2602.01031) (2026) - 高難度多輪幻覺基準，要求回答附上引用；即使使用網路搜尋，幻覺率仍約為 30%。
- [CURE: Think Through Uncertainty](https://arxiv.org/abs/2604.12046) (2026) - 訓練模型在生成前推理主張層級的不確定性；大幅提升傳記事實性與 FactBench AUROC。

### 探測與可解釋性

- [A Primer in BERTology](https://arxiv.org/abs/2002.12327) - 探討 BERT 學到了哪些語言知識。
- [Probing Classifiers (Belinkov)](https://arxiv.org/abs/2102.12452) - 方法、限制與替代方案。
- [Locating and Editing Factual Associations in GPT (ROME)](https://rome.baulab.info/) - 對事實回憶進行因果追蹤。
- [The Pyramid of NLP Probes](https://arxiv.org/abs/2104.07885) - 探測語言知識的結構。
- [Toy Models of Superposition](https://transformer-circuits.pub/2022/toy_model/) - Transformer 表示之稀疏特徵觀點的基礎。
- [Towards Monosemanticity / Scaling Monosemanticity](https://transformer-circuits.pub/2024/scaling-monosemanticity/) (Anthropic，2024) - 使用稀疏自編碼器，從正式環境規模的語言模型擷取可解釋特徵。
- [Sparse Autoencoders Find Highly Interpretable Features](https://arxiv.org/abs/2309.08600) - 用於語言模型可解釋性的 SAE 方法。
- [Neuronpedia](https://www.neuronpedia.org/) - 開放平台，可瀏覽不同模型中的 SAE 特徵。
- [Influence Functions Scale to LLMs](https://arxiv.org/abs/2308.03296) (2023) - 找出驅動模型行為的訓練範例。
- [Circuit Tracing: Revealing Computational Graphs in Language Models](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) (Anthropic，2025) - 引入跨層轉碼器與歸因圖，以建立可解釋的替代模型；可在提示層級追蹤特徵間因果互動的電路。
- [On the Biology of a Large Language Model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) (Anthropic，2025) - 將歸因圖應用於 Claude 3.5 Haiku，研究多跳推理、押韻規劃及越獄案例。
- [Transcoders Beat Sparse Autoencoders for Interpretability](https://arxiv.org/abs/2501.18823) (2025) - 顯示轉碼器（由輸入重建層輸出）能產生比 SAE 更可解釋的特徵，並提出 skip transcoder。
- [Survey on Sparse Autoencoders for LLM Interpretability](https://arxiv.org/abs/2503.05613) (EMNLP 2025) - SAE 架構、訓練策略、特徵說明與評估的參考綜述。
- [Finding Highly Interpretable Prompt-Specific Circuits](https://arxiv.org/abs/2602.13483) (2026) - 以單一提示而非任務為單位辨識電路；揭示提示家族之間的機制分群。

### 高效與小型語言模型

蒸餾與小型模型：

- [DistilBERT](https://arxiv.org/abs/1910.01108) 與 [MiniLM](https://arxiv.org/abs/2002.10957) - 用於正式環境 NLP 的蒸餾編碼器。
- [Phi-3 / Phi-4](https://arxiv.org/abs/2412.08905) (Microsoft，2024) - 以精選資料訓練的小型模型，在 NLP 基準上的表現可媲美大型模型。
- [SmolLM2](https://arxiv.org/abs/2502.02737) (HuggingFace，2025) - 完全開放的小型語言模型系列，訓練資料可重現。
- [SmolLM3](https://huggingface.co/blog/smollm3) (HuggingFace，2025) - 30 億參數的完全開放解碼器，使用 NoPE 與 YaRN 在 11.2 兆詞元上預訓練，支援 128K 上下文；效能可媲美 40 億參數級模型。
- [Gemma 3 Technical Report](https://arxiv.org/abs/2503.19786) (Google，2025) - 10 億至 270 億參數的開放模型，採用較高的局部對全域注意力比例，讓 128K 上下文中的 KV 快取仍可負擔。
- [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) (Alibaba，2025) - 6 億至 2,350 億參數的密集與 MoE 模型，統一思考／非思考模式；30B-A3B MoE 僅啟用 30 億參數，表現即可媲美更大的密集模型。
- [Apple Intelligence Foundation Language Models](https://arxiv.org/abs/2507.13575) (Apple，2025) - 裝置端 30 億參數模型，運用 KV 快取共用與 2 位元 QAT，在不損失準確度的情況下減少 37.5% 快取記憶體。
- [Sentence-Transformers](https://www.sbert.net/) - 透過 Siamese BERT 產生句子與段落嵌入。
- [SetFit](https://github.com/huggingface/setfit) - 不使用提示的少樣本文字分類。
- [FastFit](https://github.com/IBM/fastfit) - 適用多類別情境的快速少樣本分類。
- [GTE](https://huggingface.co/thenlper/gte-base)、[BGE](https://github.com/FlagOpen/FlagEmbedding) 與 [Stella](https://huggingface.co/dunzhang/stella_en_1.5B_v5) - 在 MTEB 排名接近前段班的精簡文字嵌入模型。

量化與服務（大規模部署 NLP 模型時適用）：

- [GPTQ](https://arxiv.org/abs/2210.17323) - Transformer 的訓練後量化。
- [AWQ](https://arxiv.org/abs/2306.00978) - 感知啟用值的權重量化。
- [KVTuner](https://arxiv.org/abs/2502.04420) (ICML 2025) - 感知敏感度的逐層混合精度 KV 快取量化；相較統一 KV8，最高提升 21% 吞吐量。
- [GGUF / llama.cpp](https://github.com/ggerganov/llama.cpp) - 可攜式量化推論。
- [vLLM](https://github.com/vllm-project/vllm) - 以 PagedAttention 為基礎的高吞吐量語言模型服務。
- [SGLang](https://github.com/sgl-project/sglang) - 結構化生成與高效率服務。
- [Text Generation Inference (TGI)](https://github.com/huggingface/text-generation-inference) - Hugging Face 語言模型正式環境服務工具。

參數高效率微調：

- [LoRA](https://arxiv.org/abs/2106.09685) 與 [QLoRA](https://arxiv.org/abs/2305.14314) - 低秩轉接器與量化微調；在一般硬體上將語言模型調適至 NLP 任務的標準方法。
- [DoRA](https://arxiv.org/abs/2402.09353) (2024) - 權重分解式低秩調適。
- [PEFT](https://github.com/huggingface/peft) - Hugging Face 程式庫，整合 LoRA、前綴微調、IA3 等方法。

### 指令微調與偏好最佳化

- [FLAN](https://arxiv.org/abs/2109.01652) - 將微調後的語言模型作為零樣本學習器。
- [InstructGPT](https://arxiv.org/abs/2203.02155) - 使用人類回饋訓練語言模型遵循指令。
- [Self-Instruct](https://github.com/yizhongw/self-instruct) - 從語言模型產生指令資料以啟動訓練。
- [Super-NaturalInstructions](https://github.com/allenai/natural-instructions) - 含有指令的 1,600 多項 NLP 任務。
- [Constitutional AI](https://arxiv.org/abs/2212.08073) - 依據書面憲章，使用 AI 產生的回饋訓練語言模型。
- [Direct Preference Optimization](https://arxiv.org/abs/2305.18290) - RLHF 的簡易替代方法，已廣泛採用。
- [Tülu 3](https://arxiv.org/abs/2411.15124) (AI2，2024) - 完全開放的後訓練配方，在開放模型中達到最新成果。
- [LIMA](https://arxiv.org/abs/2305.11206) - 「對齊方面少即是多」；少量高品質 SFT 資料即可發揮很大作用。
- [TRL](https://github.com/huggingface/trl) - SFT、DPO、GRPO 與 RLHF 的參考程式庫。
- [Magpie](https://arxiv.org/abs/2406.08464) (2024–2025) - 不提供提示內容，只提示已對齊的語言模型即可合成高品質指令－回應配對；以篩選後資料進行 SFT，表現可媲美官方 Llama-3-Instruct。

### NLP 中的偏見、公平性與安全

- [StereoSet](https://github.com/moinnadeem/StereoSet) - 測量預訓練語言模型中的刻板印象偏見。
- [CrowS-Pairs](https://github.com/nyu-mll/crows-pairs) - 測量遮罩語言模型中的社會偏見。
- [WinoBias](https://github.com/uclanlp/corefBias) - 共指消解中的性別偏見。
- [HolisticBias](https://github.com/facebookresearch/ResponsibleNLP) - 從多種人口特徵面向測量偏見。
- [RealToxicityPrompts](https://github.com/allenai/real-toxicity-prompts) - 語言模型生成內容中的毒性。
- [Sycophancy in Language Models](https://arxiv.org/abs/2310.13548) - 模型迎合使用者信念調整回答的現象。
- [Alignment Faking in Large Language Models](https://arxiv.org/abs/2412.14093) (Anthropic，2024) - 模型在訓練期間策略性配合的現象。
- [WildGuard](https://arxiv.org/abs/2406.18495) (2024) - 開放安全審核模型與基準。
- [Emergent Misalignment](https://arxiv.org/abs/2502.17424) (2025) - 針對狹窄任務（不安全程式碼）微調，意外導致模型在不相關領域普遍發生對齊失效。
- [SafeDialBench](https://arxiv.org/abs/2502.11090) (2025) - 多語言（中文／英文）安全基準，涵蓋 22 種情境、7 種越獄策略及 4,000 多段多輪對話。
- [TeleAI-Safety](https://arxiv.org/abs/2512.05485) (2025) - 模組化越獄評估框架，整合 19 種攻擊、29 種防禦與 19 種評估方法，涵蓋 14 個模型及 12 種風險類別。
- [IndicSafe](https://arxiv.org/abs/2603.17915) (2026) - 涵蓋 12 種印度語言的多語言安全基準；顯示跨語言一致率僅 12.8%，且低資源文字系統容易出現過度拒答。
- [VLAF: Value-Conflict Alignment Faking](https://arxiv.org/abs/2604.20995) (2026) - 當政策與內化價值觀衝突時，低至 70 億參數的模型有 37% 案例出現對齊偽裝；使用 steering vector 緩解可將其減少 94%。

## 各語言的 NLP

[回到頂端](#contents)

依人類語言整理資源。按一下章節即可展開。

<details>
<summary>

### 阿拉伯語 NLP

</summary>

[回到頂端](#contents)

### 程式庫

- [CAMeL Tools](https://github.com/CAMeL-Lab/camel_tools) - 阿拉伯語 NLP Python 工具組，包含方言識別、形態分析與 NER。
- [goarabic](https://github.com/01walid/goarabic) - 用於阿拉伯文文字處理的 Go 套件。
- [jsastem](https://github.com/ejtaal/jsastem) - JavaScript 阿拉伯文詞幹提取器。
- [PyArabic](https://pypi.org/project/PyArabic/) - 阿拉伯語 Python 程式庫。
- [RFTokenizer](https://github.com/amir-zeldes/RFTokenizer) - 可訓練的阿拉伯語、希伯來語與科普特語切分器。
- [Farasa](https://farasa.qcri.org/) - QCRI 的阿拉伯文切分、詞性標註與 NER 工具。

### 模型與嵌入

- [AraBERT](https://github.com/aub-mind/arabert) - 阿拉伯語 BERT 系列。
- [CAMeLBERT](https://github.com/CAMeL-Lab/CAMeLBERT) - 適用於現代標準阿拉伯語、方言與古典阿拉伯語的 BERT 模型。
- [AraELECTRA](https://aclanthology.org/2021.wanlp-1.20/) - 高效率阿拉伯語預訓練模型（與 [AraBERT](https://github.com/aub-mind/arabert) 同步發布）。
- [Jais](https://huggingface.co/inceptionai/jais-13b) (2023–2024) - 阿拉伯語－英文雙語開放語言模型系列。
- [ALLaM](https://arxiv.org/abs/2407.15390) (SDAIA，2024) - 以阿拉伯語為主的基礎模型。

### 資料集

- [Multidomain Datasets](https://github.com/hadyelsahar/large-arabic-sentiment-analysis-resouces) - 目前可取得最大規模的多領域阿拉伯語情感分析資源。
- [LABR](https://github.com/mohamedadaly/labr) - 大型阿拉伯文書籍評論資料集。
- [Arabic Stopwords](https://github.com/mohataher/arabic-stop-words) - 彙整的阿拉伯語停用詞。
- [ArabicMMLU](https://huggingface.co/datasets/MBZUAI/ArabicMMLU) (2024) - 阿拉伯語 MMLU 基準。

</details>

<details>
<summary>

### 中文 NLP

</summary>

[回到頂端](#contents)

### 程式庫

- [jieba](https://github.com/fxsjy/jieba#jieba-1) - 中文斷詞的 Python 套件。
- [SnowNLP](https://github.com/isnowfy/snownlp) - 中文 NLP Python 套件。
- [FudanNLP](https://github.com/FudanNLP/fnlp) - 中文文字處理 Java 程式庫。
- [HanLP](https://github.com/hankcs/HanLP) - 多語言 NLP 程式庫，特別支援中文。
- [LTP](https://github.com/HIT-SCIR/ltp) - HIT 語言技術平台：斷詞、POS、NER 與句法剖析。

### 模型與嵌入

- [Chinese-BERT-wwm](https://github.com/ymcui/Chinese-BERT-wwm) - 中文全詞遮罩 BERT。
- [MacBERT](https://github.com/ymcui/MacBERT) - 透過「MLM 作為修正」預訓練改良的中文 BERT。
- [Qwen 2.5 / Qwen 3](https://github.com/QwenLM/Qwen3) - Alibaba 開發、中文能力強的開放語言模型系列。
- [ChatGLM3 / GLM-4](https://github.com/THUDM/ChatGLM3) - 清華大學開發的中英雙語語言模型。
- [Baichuan 2](https://github.com/baichuan-inc/Baichuan2) - 開放中文語言模型。
- [Yi](https://github.com/01-ai/Yi) - 01.AI 的雙語開放語言模型。
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - 中文能力強的高效率開放 MoE 模型。

### 論文集

- [funNLP](https://github.com/fighting41love/funNLP) - 大型中文 NLP 工具與資源合集。

</details>

<details>
<summary>

### 丹麥語 NLP

</summary>

[回到頂端](#contents)

- [Named Entity Recognition for Danish](https://github.com/ITUnlp/daner)
- [DaNLP](https://github.com/alexandrainst/danlp) - 丹麥語 NLP 資源。
- [Awesome Danish](https://github.com/fnielsen/awesome-danish) - 丹麥語言技術資源精選清單。

</details>

<details>
<summary>

### 荷蘭語 NLP

</summary>

[回到頂端](#contents)

- [python-frog](https://github.com/proycon/python-frog) - Frog（荷蘭語 NLP 工具套件）的 Python 綁定，支援詞性標註、詞形還原、依存句法分析及 NER。
- [SimpleNLG_NL](https://github.com/rfdj/SimpleNLG-NL) - 以 SimpleNLG 實作為基礎、用於荷蘭語自然語言生成的表層實現器。
- [Alpino](https://github.com/rug-compling/alpino) - 荷蘭語依存句法分析器（亦支援詞性標註與詞形還原）。
- [Kaldi NL](https://github.com/opensource-spraakherkenning-nl/Kaldi_NL) - 以 [Kaldi](http://kaldi-asr.org/) 為基礎的荷蘭語語音辨識模型。
- [spaCy Dutch model](https://spacy.io/models/nl) - 具備工業級效能、附有荷蘭語處理管線的 NLP 工具。

</details>

<details>
<summary>

### 德語 NLP

</summary>

[回到頂端](#contents)

- [German-NLP](https://github.com/adbar/German-NLP) - 專注於德語的開放取用、開源及現成資源與工具精選清單。

</details>

<details>
<summary>

### 匈牙利語 NLP

</summary>

[回到頂端](#contents)

- [awesome-hungarian-nlp](https://github.com/oroszgy/awesome-hungarian-nlp) - 匈牙利語 NLP 免費資源精選清單。

</details>

<details>
<summary>

### 印度語言 NLP

</summary>

[回到頂端](#contents)

### 資料、語料庫與樹庫

- [Hindi Dependency Treebank](https://ltrc.iiit.ac.in/treebank_H2014/) - 印地語與烏爾都語的多表徵、多層次樹庫。
- [Universal Dependencies Treebank in Hindi](https://universaldependencies.org/treebanks/hi_hdtb/index.html)
  - [Parallel Universal Dependencies Treebank in Hindi](http://universaldependencies.org/treebanks/hi_pud/index.html) - 上述樹庫中規模較小的部分。
- [ISI FIRE Stopwords List (Hindi and Bangla)](https://www.isical.ac.in/~fire/data/)
- [Peter Graham's Stopwords List](https://github.com/6/stopwords-json)
- [NLTK Corpus](https://www.nltk.org/book/ch02.html) 6 萬詞，包含孟加拉語、印地語、馬拉地語及泰盧固語的詞性標註。
- [Hindi Movie Reviews Dataset](https://github.com/goru001/nlp-for-hindi) 約 1,000 筆樣本、3 種情感類別。
- [BBC News Hindi Dataset](https://github.com/NirantK/hindi2vec/releases/tag/bbc-hindi-v0.1) 4,300 筆樣本、14 個類別。
- [IIT Patna Hindi ABSA Dataset](https://github.com/pnisarg/ABSA) 5,400 筆樣本、12 個領域、4,000 個面向詞，以及面向與句子層級的 4 類情感標籤。
- [Bangla ABSA](https://github.com/AtikRahman/Bangla_Datasets_ABSA) 5,500 筆樣本、2 個領域、10 個面向詞。
- [IIT Patna Movie Review Sentiment Dataset](https://www.iitp.ac.in/~ai-nlp-ml/resources.html) 2,000 筆樣本、3 種情感標籤。

#### 需要登入／存取權限的資料集可透過電子郵件申請

- [SAIL 2015](http://amitavadas.com/SAIL/) Twitter 與 Facebook 上以印地語、孟加拉語、泰米爾語及泰盧固語標註情感的樣本。
- [IIT Bombay CFILT Resources](https://www.cfilt.iitb.ac.in/) - Sentiwordnet、平行標註語料、詞義標註語料，以及馬拉地語極性標註語料。
- [TDIL-IC 彙整多種實用資源，並提供原本受限資料集的存取權](https://tdil-dc.in/index.php?option=com_catalogue&task=viewTools&id=83&lang=en)

### 語言模型與詞嵌入

- [Hindi2Vec](https://nirantk.com/hindi2vec/) 與 [nlp-for-hindi](https://github.com/goru001/nlp-for-hindi) ULMFiT 風格語言模型。
- [IIT Patna Bilingual Word Embeddings Hi-En](https://www.iitp.ac.in/~ai-nlp-ml/resources.html)
- [在 Common Crawl 上訓練、涵蓋多種語言的 fastText 詞嵌入](https://fasttext.cc/docs/en/crawl-vectors.html)
- [Hindi and Bengali Word2Vec](https://github.com/Kyubyong/wordvectors)
- [Hindi and Urdu Elmo Model](https://github.com/HIT-SCIR/ELMoForManyLangs)
- [Sanskrit Albert](https://huggingface.co/surajp/albert-base-sanskrit) 使用梵文 Wikipedia 與 OSCAR 語料庫訓練。

### 程式庫與工具

- [Multi-Task Deep Morphological Analyzer](https://github.com/Saurav0074/mt-dma) - 印地語與烏爾都語深度形態分析器。
- [Indic NLP Library](https://github.com/anoopkunchukuttan/indic_nlp_library) - 支援 18 種印度語言的分詞、轉寫及機器翻譯輔助工具。
- [SivaReddy's Dependency Parser (Python3 port)](https://github.com/CalmDownKarm/sivareddydependencyparser) - 卡納達語、印地語及泰盧固語依存句法分析與詞性標註工具。
- [iNLTK](https://github.com/goru001/inltk) - 以 PyTorch/Fastai 為基礎的印度語言 NLP 工具組。
- [AI4Bharat IndicNLP Suite](https://ai4bharat.iitm.ac.in/) - 涵蓋 22 種印度語言的工具、資料集與模型。

### 模型與嵌入

- [IndicBERT v2](https://github.com/AI4Bharat/IndicBERT) (2022–2024) - 支援 23 種印度語言的多語言 BERT。
- [IndicTrans2](https://github.com/AI4Bharat/IndicTrans2) (2023–2024) - 支援 22 種印度語言的高品質機器翻譯。
- [OpenHathi](https://huggingface.co/sarvamai/OpenHathi-7B-Hi-v0.1-Base) (Sarvam AI，2023) - 延續訓練的印地語－英文雙語 LLaMA。
- [Airavata](https://huggingface.co/ai4bharat/Airavata) (2024) - 經指令微調的印地語 LLM。
- [Sarvam-1](https://www.sarvam.ai/blogs/sarvam-1) (2024) - 從頭以 10 種印度語言訓練的多語言語言模型。
- [BharatGPT / Krutrim](https://www.olakrutrim.com/) (2024) - 專注印度語言的基礎模型。

</details>

<details>
<summary>

### 印尼語 NLP

</summary>

[回到頂端](#contents)

### 程式庫與嵌入

- [bahasa](https://github.com/kangfend/bahasa) - 印尼語自然語言工具組。
- [Indonesian Word Embedding](https://github.com/galuhsahid/indonesian-word-embedding)
- [Indonesian fastText](https://s3-us-west-1.amazonaws.com/fasttext-vectors/wiki.id.zip) 使用 Wikipedia 訓練。
- [PySastrawi](https://github.com/har07/PySastrawi) - 以 Sastrawi 詞幹提取演算法為基礎的印尼語 Python 詞幹提取器。

### 模型

- [IndoBERT (IndoNLU)](https://github.com/indobenchmark/indonlu) - 預訓練印尼語語言模型，搭配 IndoNLU 基準套件。
- [IndoBERT (IndoLEM)](https://github.com/indolem/indolem) - 搭配 IndoLEM 基準的另一款 IndoBERT。
- [NusaCrowd / Cendol](https://github.com/IndoNLP/nusa-crowd) (2023–2024) - 大規模社群資料集，以及適用於印尼語與區域語言的 Cendol 指令微調語言模型。
- [Sailor](https://github.com/sail-sg/sailor-llm) - 涵蓋印尼語的東南亞開放語言模型。
- [SEA-LION](https://github.com/aisingapore/sealion) (2024) - Singapore AI 開發的東南亞開放語言模型，印尼語能力強。

### 資料集

- [ILPS](http://ilps.science.uva.nl/resources/bahasa/) 的 Kompas 與 Tempo 合集。
- [用於詞性標註的 PANL10N](http://www.panl10n.net/english/outputs/Indonesia/UI/0802/UI-1M-tagged.zip)：3.9 萬個句子、90 萬個詞元。
- [用於詞性標註的 IDN](https://github.com/famrashel/idn-tagged-corpus)：1 萬個句子、25 萬個詞元。
- [Indonesian Treebank](https://github.com/famrashel/idn-treebank) 與 [Universal Dependencies-Indonesian](https://github.com/UniversalDependencies/UD_Indonesian-GSD)
- [IndoSum](https://github.com/kata-ai/indosum) - 文字摘要與分類資料集。
- [Wordnet-Bahasa](http://wn-msa.sourceforge.net/) - 大型免費語意詞典。
- [SEACrowd](https://github.com/SEACrowd/seacrowd-datahub) - 多語言、多模態資料中心，提供東南亞 NLP 標準化資料集與基準（EMNLP 2024）。

</details>

<details>
<summary>

### 韓語 NLP

</summary>

[回到頂端](#contents)

### 程式庫

- [KoNLPy](http://konlpy.org) - 韓文自然語言處理 Python 套件。
- [Mecab (Korean)](https://eunjeon.blogspot.com/) - 韓文 NLP 的 C++ 程式庫。
- [KoalaNLP](https://koalanlp.github.io/koalanlp/) - 韓文 NLP 的 Scala 程式庫。
- [KoNLP](https://cran.r-project.org/package=KoNLP) - 韓文 NLP 的 R 套件。
- [kss](https://github.com/hyunwoongko/kss) - 韓文句子切分器。
- [Kiwi](https://github.com/bab2min/Kiwi) - 快速韓文形態分析器。
- [Garu](https://github.com/ongjin/garu) - 原生於瀏覽器的韓文形態分析器，透過 WebAssembly 完全在用戶端執行（模型 1 MB、可離線使用、MIT 授權）。

### 模型與嵌入

- [KoBERT](https://github.com/SKTBrain/KoBERT) - SKT 開發的韓文 BERT。
- [KLUE-RoBERTa](https://github.com/KLUE-benchmark/KLUE) - 使用 KLUE 基準訓練的模型。
- [Polyglot-Ko](https://github.com/EleutherAI/polyglot) - 開放韓文語言模型。
- [EXAONE 3.5](https://github.com/LG-AI-EXAONE) (LG，2024) - 韓英雙語開放語言模型系列。
- [HyperCLOVA X](https://www.ncloud.com/product/aiService/clovaStudio) - Naver 的韓文基礎模型。

### 部落格與教學資源

- [dsindex's blog](https://dsindex.github.io/)
- [Kangwon University's NLP course in Korean](http://cs.kangwon.ac.kr/~leeck/NLP/)

### 資料集

- [KAIST Corpus](http://semanticweb.kaist.ac.kr/home/index.php/KAIST_Corpus) - 韓國科學技術院的韓文語料庫。
- [Naver Sentiment Movie Corpus in Korean](https://github.com/e9t/nsmc/)
- [Chosun Ilbo archive](http://srchdb1.chosun.com/pdf/i_archive/) - 韓國主要報紙《朝鮮日報》的韓文資料集。
- [Chat data](https://github.com/songys/Chatbot_data) - 韓文聊天機器人資料。
- [Petitions](https://github.com/akngs/petitions) - 青瓦臺國民請願網站的已結束請願資料。
- [Korean Parallel corpora](https://github.com/j-min/korean-parallel-corpora) - 韓文至法文及韓文至英文的神經機器翻譯資料集。
- [KorQuAD](https://korquad.github.io/) - 附有 Wiki HTML 原始碼的韓文 SQuAD 資料集（v1.0 與 v2.1）。

</details>

<details>
<summary>

### 波斯語 NLP

</summary>

[回到頂端](#contents)

### 程式庫

- [Hazm](https://github.com/roshan-research/hazm) - 波斯語 NLP 工具組。
- [Parsivar](https://github.com/ICTRC/Parsivar) - 波斯語處理工具組。
- [Perke](https://github.com/AlirezaTheH/perke) - 波斯語關鍵詞擷取工具。
- [Perstem](https://github.com/jonsafari/perstem) - 波斯語詞幹提取器、形態分析器與部分詞性標註器。
- [ParsiAnalyzer](https://github.com/NarimanN2/ParsiAnalyzer) - Elasticsearch 波斯語分析器。
- [virastar](https://github.com/aziz/virastar) - 波斯文文字清理工具。

### 模型

- [ParsBERT](https://github.com/hooshvare/parsbert) - 波斯語 BERT。
- [PersianMind](https://huggingface.co/universitytehran/PersianMind-v1.0) (2023–2024) - 經指令微調的波斯語語言模型。
- [Dorna](https://huggingface.co/PartAI/Dorna-Llama3-8B-Instruct) (Part AI，2024) - 以 Llama 3 為基礎的波斯語指令模型。

### 資料集

- [Bijankhan Corpus](https://dbrg.ut.ac.ir/بیژن%E2%80%8Cخان/) - 適用於波斯語 NLP 研究的標註語料庫，約 260 萬個人工標註詞彙，涵蓋 40 種詞性標籤。
- [Uppsala Persian Corpus (UPC)](https://sites.google.com/site/mojganserajicom/home/upc) - 大型免費波斯語語料庫，270 萬詞元以 31 種詞性標籤標註。
- [Large-Scale Colloquial Persian](http://hdl.handle.net/11234/1-3195) - LSCP：從 2,700 萬則波斯語日常推文中收集 1.2 億個句子，並標註依存關係、詞性與情感。
- [ArmanPersoNERCorpus](https://github.com/HaniehP/PersianNER) - 25 萬詞元、7,682 個句子，採用 IOB 格式標註 NER。
- [FarsiYar PersianNER](https://github.com/Text-Mining/Persian-NER) - 約 2,500 萬詞元、100 萬個波斯語句子，取自 [Persian Wikipedia Corpus](https://github.com/Text-Mining/Persian-Wikipedia-Corpus)。
- [PERLEX](http://farsbase.net/PERLEX.html) - 首個波斯語關係擷取資料集（翻譯自 SemEval-2010 Task 8）。
- [Persian Syntactic Dependency Treebank](http://dadegan.ir/catalog/perdt) - 29,982 個標註句子，涵蓋波斯語配價詞典中的大多數動詞。
- [Uppsala Persian Dependency Treebank (UPDT)](http://stp.lingfil.uu.se/~mojgan/UPDT.html) - 以依存關係為基礎、經句法標註的語料庫。
- [Hamshahri](https://dbrg.ut.ac.ir/hamshahri/) - CLEF 2008–2009 使用的標準可靠波斯語文字集。

</details>

<details>
<summary>

### 波蘭語 NLP

</summary>

[回到頂端](#contents)

- [Polish-NLP](https://github.com/ksopyla/awesome-nlp-polish) - 波蘭語 NLP 資源精選清單，包含模型、工具與資料集。

</details>

<details>
<summary>

### 葡萄牙語 NLP

</summary>

[回到頂端](#contents)

- [Portuguese-nlp](https://github.com/ajdavidl/Portuguese-NLP) - 葡萄牙語 NLP 資源與工具精選清單。

### 模型

- [BERTimbau](https://github.com/neuralmind-ai/portuguese-bert) - 巴西葡萄牙語 BERT。
- [Sabiá](https://huggingface.co/maritaca-ai) (Maritaca AI，2023–2024) - 專注葡萄牙語的開放語言模型。
- [Albertina](https://huggingface.co/PORTULAN) (PORTULAN，2023–2024) - 適用歐洲葡萄牙語與巴西葡萄牙語的純編碼器語言模型。

</details>

<details>
<summary>

### 西班牙語 NLP

</summary>

[回到頂端](#contents)

### 程式庫

- [spanlp](https://github.com/jfreddypuentes/spanlp) - 使用來自 21 個西班牙語系國家的資料，以 Python 偵測、遮蔽與清理西班牙文髒話、仇恨言論及霸凌內容。

### 資料

- [Columbian Political Speeches](https://github.com/dav009/LatinamericanTextResources)
- [Copenhagen Treebank](https://mbkromann.github.io/copenhagen-dependency-treebank/)
- [Spanish Billion Words Corpus with Word2Vec embeddings](https://github.com/crscardellino/sbwce)
- [Compilation of Spanish Unannotated Corpora](https://github.com/josecannete/spanish-unannotated-corpora)

### 模型與嵌入

- [BETO](https://github.com/dccuchile/beto) - 西班牙語 BERT。
- [RoBERTa-bne](https://huggingface.co/PlanTL-GOB-ES/roberta-base-bne) - 使用西班牙國家圖書館語料庫訓練的西班牙語 RoBERTa。
- [Latxa](https://github.com/hitz-zentroa/latxa) (2024) - 巴斯克語開放基礎語言模型，也涵蓋西班牙語。
- [Salamandra](https://huggingface.co/BSC-LT/salamandra-7b) (BSC，2024) - 巴塞隆納超級運算中心開發的多語言語言模型，西班牙語涵蓋度高。
- [RigoChat](https://huggingface.co/IIC/RigoChat-7b-v2) (2024) - 經西班牙語指令微調的開放模型。
- [Spanish Word Embeddings (multiple methods/corpora)](https://github.com/dccuchile/spanish-word-embeddings)
- [Spanish fastText Embeddings](https://github.com/BotCenter/spanishWordEmbeddings)
- [Spanish sent2vec Sentence Embeddings](https://github.com/BotCenter/spanishSent2Vec)

</details>

<details>
<summary>

### 泰語 NLP

</summary>

[回到頂端](#contents)

### 程式庫

- [PyThaiNLP](https://github.com/PyThaiNLP/pythainlp) - 以 Python 進行泰語 NLP。
- [JTCC](https://github.com/wittawatj/jtcc) - Java 字元群集程式庫。
- [CutKum](https://github.com/pucktada/cutkum) - 使用 TensorFlow 深度學習進行斷詞。
- [Thai Language Toolkit](https://pypi.python.org/pypi/tltk/) - 分詞與詞性標註工具。
- [SynThai](https://github.com/KenjiroAI/SynThai) - 使用深度學習進行斷詞與詞性標註。

### 模型

- [WangchanBERTa](https://github.com/vistec-AI/thai2transformers) - 泰語預訓練語言模型。
- [Typhoon](https://huggingface.co/scb10x) (SCB 10X，2024) - 泰語開放 LLM 系列。
- [OpenThaiGPT](https://huggingface.co/openthaigpt) (2023–2024) - 泰語開放指令微調模型。
- [Sailor](https://github.com/sail-sg/sailor-llm) - 涵蓋泰語的東南亞開放語言模型系列。

### 資料

- [Inter-BEST](https://www.nectec.or.th/corpus/index.php?league=pm) - 含有 500 萬詞彙與斷詞標註的文字語料庫。
- [Prime Minister 29](https://github.com/PyThaiNLP/lexicon-thai/tree/master/thai-corpus/Prime%20Minister%2029) - 泰國現任總理的演講資料集。

</details>

<details>
<summary>

### 烏克蘭語 NLP

</summary>

[回到頂端](#contents)

- [awesome-ukrainian-nlp](https://github.com/asivokon/awesome-ukrainian-nlp) - 烏克蘭語 NLP 資料集、模型等資源精選清單。
- [UkrainianLT](https://github.com/Helsinki-NLP/UkrainianLT) - 專注於機器翻譯與語音處理的資源精選清單。

</details>

<details>
<summary>

### 烏爾都語 NLP

</summary>

[回到頂端](#contents)

### 程式庫

- [urduhack](https://github.com/urduhack/urduhack) - 烏爾都語 NLP 程式庫。

### 資料集

- [Collection of Urdu datasets](https://github.com/mirfan899/Urdu) - 詞性標註、NER 與其他 NLP 任務資料集。

</details>

<details>
<summary>

### 烏茲別克語 NLP

</summary>

[回到頂端](#contents)

### 資料集

- [SOAS English-Uzbek RAG Evaluation](https://github.com/rajantripathi/soas-rag-evaluation) - 為具文化脈絡的 RAG 設計的雙語檢索評估基準，共 400 筆英語與烏茲別克語資料，採 MIT/CC-BY-4.0 授權。

</details>

<details>
<summary>

### 越南語 NLP

</summary>

[回到頂端](#contents)

### 程式庫

- [underthesea](https://github.com/undertheseanlp/underthesea) - 越南語 NLP 工具組。
- [vn.vitk](https://github.com/phuonglh/vn.vitk) - 越南語文字處理工具組。
- [VnCoreNLP](https://github.com/vncorenlp/VnCoreNLP) - 越南語 NLP 工具組。
- [pyvi](https://github.com/trungtv/pyvi) - Python 越南語核心 NLP 工具組。
- [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - 裝置端越南語文字轉語音，支援語音克隆。

### 模型與嵌入

- [PhoBERT](https://github.com/VinAIResearch/PhoBERT) - 越南語預訓練語言模型。
- [BARTpho](https://github.com/VinAIResearch/BARTpho) - 越南語 seq2seq 預訓練模型。
- [PhoGPT](https://github.com/VinAIResearch/PhoGPT) (VinAI，2023–2024) - 越南語開放生成式語言模型。
- [Vistral](https://huggingface.co/Viet-Mistral/Vistral-7B-Chat) (2024) - 以 Mistral 為基礎的越南語聊天模型。
- [Sailor](https://github.com/sail-sg/sailor-llm) (2024) - 涵蓋越南語、泰語、印尼語及其他東南亞語言的多語言開放模型系列。

### 資料

- [Vietnamese Treebank](https://vlsp.hpda.vn/demo/?page=resources&lang=en) - 為成分句法剖析任務提供 1 萬個句子。
- [BKTreeBank](https://arxiv.org/pdf/1710.05519.pdf) - 越南語依存樹庫。
- [UD_Vietnamese](https://github.com/UniversalDependencies/UD_Vietnamese-VTB) - 越南語 Universal Dependencies 樹庫。
- [VIVOS](https://ailab.hcmus.edu.vn/vivos/) - 免費越南語語音語料庫，含 15 小時錄音（HCMUS AILab）。
- [VNTQcorpus(big).txt](http://viet.jnlp.org/download-du-lieu-tu-vung-corpus) - 175 萬個新聞句子。
- [ViText2SQL](https://github.com/VinAIResearch/ViText2SQL) - 越南語 Text-to-SQL 語意剖析資料集（EMNLP-2020 Findings）。
- [EVB Corpus](https://github.com/qhungngo/EVBCorpus) - 2,000 萬詞彙，涵蓋 15 本雙語書、100 篇英越平行文本、250 篇平行法律文本、5,000 篇新聞及 2,000 部電影字幕。

</details>

### 其他語言

- 俄語：[pymorphy2](https://github.com/kmike/pymorphy2) - 優良的俄語詞性標註器。
- 亞洲語言：泰語、寮語、中文、日語與韓語的 [ICU Tokenizer](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu-tokenizer.html) ElasticSearch 實作。
- 古代語言：[CLTK](https://github.com/cltk/cltk)：Classical Language Toolkit 是用於古代語言 NLP 的 Python 程式庫與文本合集。
- 希伯來語：[NLPH_Resources](https://github.com/NLPH/NLPH_Resources) - 希伯來語 NLP 論文、語料庫與語言學資源合集。

[回到頂端](#contents)

## 另請參閱

以下精選清單涵蓋本清單範圍之外的相關主題：

- [awesome-llm](https://github.com/Hannibal046/Awesome-LLM) - 通用大型語言模型資源。
- [awesome-generative-ai](https://github.com/steven2358/awesome-generative-ai) - 涵蓋各種模態的生成式 AI。
- [awesome-rag](https://github.com/Danielskry/Awesome-RAG) - 檢索增強生成系統與工具。
- [awesome-prompt-engineering](https://github.com/promptslab/Awesome-Prompt-Engineering) - 提示技術與範本程式庫。
- [awesome-mlops](https://github.com/visenger/awesome-mlops) - 正式環境機器學習，包含 LLM 服務。

## 引用

如果此儲存庫對你有幫助，請考慮引用此清單：

```bibtex
@misc{awesome-nlp,
  title  = {Awesome NLP},
  author = {Kim, Keon Woo},
  year   = {2018},
  url    = {https://github.com/keon/awesome-nlp},
  note   = {GitHub repository}
}
```

## 授權
[授權條款](./LICENSE) - CC0
