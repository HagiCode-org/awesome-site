# awesome-nlp

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

---

> **[Atlas Cloud](https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp) 후원**
>
> <a href="https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/atlas-cloud-dark.png"><img src="assets/atlas-cloud-light.png" alt="Atlas Cloud" width="220" /></picture></a>
>
> **OpenAI 호환 LLM 엔드포인트를 제공하는 AI API 통합 플랫폼**으로, 번역, 요약, 다국어 생성 및 구조화된 추출 등의 NLP 작업을 지원합니다.

---

자연어 처리 관련 리소스를 엄선한 목록입니다.

_기여하기 전에 [기여 가이드라인](contributing.md)을 읽어 주세요. 좋아하는 NLP 리소스는 [풀 리퀘스트](https://github.com/keonkim/awesome-nlp/pulls)로 추가해 주세요._

## 범위

이 목록은 언어 분석, 다국어 도구, 고전적·신경망 방법, 데이터셋 및 평가 등 자연어 처리를 다룹니다. 대규모 언어 모델은 토큰화, 다국어성, 기계 번역, 요약, 개체명 인식, 질의응답, 사실성, 프로빙, 증류 등 핵심 NLP 작업이나 역량을 발전시키거나 평가하는 경우에만 포함합니다. 범용 챗봇, 에이전트 프레임워크, 프롬프트 템플릿 저장소, 코드 생성 도구 및 RAG 애플리케이션 스타터 키트는 다른 목록에 있습니다. [관련 항목](#see-also)을 참조하세요.

## 목차

* [연구 요약 및 동향](#research-summaries-and-trends)
* [주요 NLP 연구소](#prominent-nlp-research-labs)
* [튜토리얼](#tutorials)
  * [읽을거리](#reading-content)
  * [동영상 및 강좌](#videos-and-online-courses)
  * [도서](#books)
* [라이브러리](#libraries)
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
* [서비스](#services)
* [주석 도구](#annotation-tools)
* [작업 및 방법](#tasks-and-methods)
  * [텍스트 임베딩](#text-embeddings)
  * [토큰화, 형태론 및 분할](#tokenization-morphology-and-segmentation)
  * [품사 태깅 및 의존 구문 분석](#pos-tagging-and-dependency-parsing)
  * [개체명 인식 및 정보 추출](#named-entity-recognition-and-information-extraction)
  * [상호 참조 해결](#coreference-resolution)
  * [텍스트 분류 및 감성 분석](#text-classification-and-sentiment-analysis)
  * [토픽 모델링](#topic-modeling)
  * [요약](#summarization)
  * [기계 번역](#machine-translation)
  * [질의응답 및 독해](#question-answering-and-reading-comprehension)
  * [개체명 인식 그 이상의 정보 추출](#information-extraction-beyond-ner)
  * [검색 및 임베딩](#retrieval-and-embeddings)
  * [음성 및 텍스트](#speech-and-text)
* [데이터셋](#datasets)
* [다국어 NLP 프레임워크](#multilingual-nlp-frameworks)
* [NLP 언어 모델](#language-models-for-nlp)
  * [사전 학습 및 적응](#pretraining-and-adaptation)
  * [다국어 및 언어 간 모델](#multilingual-and-cross-lingual-models)
  * [평가 및 벤치마크](#evaluation-and-benchmarks)
  * [추론 및 테스트 시점 연산](#reasoning-and-test-time-compute)
  * [긴 컨텍스트 및 대안 아키텍처](#long-context-and-alternative-architectures)
  * [사실성, 환각 및 보정](#factuality-hallucination-calibration)
  * [프로빙 및 해석 가능성](#probing-and-interpretability)
  * [효율적인 소형 언어 모델](#efficient-and-small-language-models)
  * [명령어 튜닝 및 선호도 최적화](#instruction-tuning-and-preference-optimization)
  * [NLP의 편향, 공정성 및 안전성](#bias-fairness-safety-in-nlp)
* [언어별 NLP](#nlp-per-language)
  * [아랍어 NLP](#nlp-in-arabic)
  * [중국어 NLP](#nlp-in-chinese)
  * [덴마크어 NLP](#nlp-in-danish)
  * [네덜란드어 NLP](#nlp-in-dutch)
  * [독일어 NLP](#nlp-in-german)
  * [헝가리어 NLP](#nlp-in-hungarian)
  * [인도계 언어 NLP](#nlp-in-indic-languages)
  * [인도네시아어 NLP](#nlp-in-indonesian)
  * [한국어 NLP](#nlp-in-korean)
  * [페르시아어 NLP](#nlp-in-persian)
  * [폴란드어 NLP](#nlp-in-polish)
  * [포르투갈어 NLP](#nlp-in-portuguese)
  * [스페인어 NLP](#nlp-in-spanish)
  * [태국어 NLP](#nlp-in-thai)
  * [우크라이나어 NLP](#nlp-in-ukrainian)
  * [우르두어 NLP](#nlp-in-urdu)
  * [우즈베크어 NLP](#nlp-in-uzbek)
  * [베트남어 NLP](#nlp-in-vietnamese)
  * [기타 언어](#other-languages)
* [관련 항목](#see-also)
* [인용](#citation)

## 연구 요약 및 동향

최신 NLP 연구를 확인할 수 있는 곳:

* [ACL Anthology](https://aclanthology.org/) - ACL, EMNLP, NAACL, EACL, COLING 및 관련 학회 논문을 모은 정식 아카이브입니다.
* [NLP-Progress](https://nlpprogress.com/) - 일반적인 NLP 작업과 데이터셋 전반의 최신 성능을 추적합니다.
* [Papers With Code: NLP](https://paperswithcode.com/area/natural-language-processing) - NLP 작업 관련 논문, 벤치마크 및 순위표를 제공합니다.
* [Sebastian Ruder's newsletter](https://newsletter.ruder.io/) - NLP 연구와 동향을 정기적으로 정리해 소개합니다.
* [ACL Rolling Review](https://aclrollingreview.org/) - ACL 계열 학회에 논문을 공급하는 상시 심사 절차입니다.
* [The Gradient](https://thegradient.pub/) - 머신러닝과 NLP 연구에 관한 장문의 에세이를 제공합니다.
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp) - 최신 논문을 시각적으로 설명한 요약입니다.

### 주요 역사적 성과

* [NLP's ImageNet moment has arrived](https://thegradient.pub/nlp-imagenet/) - 사전 학습 언어 모델의 부상을 다룬 2018년 에세이입니다.
* [Survey of the State of the Art in Natural Language Generation](https://arxiv.org/abs/1703.09902) - 2017년 자연어 생성(NLG) 개관 논문입니다.
* [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) and [The Illustrated BERT, ELMo, and co.](https://jalammar.github.io/illustrated-bert/) - 대표적인 시각적 설명 자료입니다.

## 주요 NLP 연구소
[맨 위로](#contents)

* [The Berkeley NLP Group](http://nlp.cs.berkeley.edu/index.shtml) - 주요 성과로는 오래전에 사라진 언어를 복원하는 도구가 있습니다. [여기](https://www.bbc.com/news/science-environment-21427896)에 소개된 이 도구는 현재 아시아와 태평양에서 사용되는 637개 언어의 말뭉치를 바탕으로 그 후손 언어를 재구성합니다.
* [Language Technologies Institute, Carnegie Mellon University](http://www.cs.cmu.edu/~nasmith/nlp-cl.html) - 주요 프로젝트로는 케추아어와 아이마라어 같은 위기 언어를 위한 구문 기반 기계 번역 시스템인 [Avenue Project](http://www.cs.cmu.edu/~avenue/)와, 아랍어 NLP 도구 개선을 위해 [Noah's Ark](http://www.cs.cmu.edu/~ark/)가 만든 [AQMAR](http://www.cs.cmu.edu/~ark/AQMAR/)가 있습니다.
* [NLP research group, Columbia University](http://www1.cs.columbia.edu/nlp/index.cgi) - 음성 번역 시스템의 대화형 오류 처리를 위한 BOLT와 대화에서 웃음의 특성을 규명하는 이름 없는 프로젝트를 만들었습니다.
* [The Center or Language and Speech Processing, John Hopkins University](http://clsp.jhu.edu/) - 파킨슨병 진단 검사를 개발하는 데 쓰이는 음성 인식 소프트웨어 개발로 최근 주목받았습니다. [여기](https://www.clsp.jhu.edu/2019/03/27/speech-recognition-software-and-machine-learning-tools-are-being-used-to-create-diagnostic-test-for-parkinsons-disease/#.XNFqrIkzYdU)를 참조하세요.
* [Computational Linguistics and Information Processing Group, University of Maryland](https://wiki.umiacs.umd.edu/clip/index.php/Main_Page) - 주요 성과로는 [Human-Computer Cooperation or Word-by-Word Question Answering](http://www.umiacs.umd.edu/~jbg/projects/IIS-1652666)과 음성 표상의 발달 모델링이 있습니다.
* [Penn Natural Language Processing, University of Pennsylvania](https://nlp.cis.upenn.edu/) - [Penn Treebank](https://catalog.ldc.upenn.edu/LDC99T42)와 [Penn Discourse Treebank](https://www.cis.upenn.edu/~pdtb/)를 만든 것으로 유명합니다.
* [The Stanford Nautral Language Processing Group](https://nlp.stanford.edu/)- 세계 최고 수준의 NLP 연구소 중 하나로, [Stanford CoreNLP](https://nlp.stanford.edu/software/corenlp.shtml)와 [상호 참조 해결 시스템](https://nlp.stanford.edu/software/dcoref.shtml)을 만든 것으로 유명합니다.


## 튜토리얼
[맨 위로](#contents)

### 읽을거리

일반적인 머신러닝

* [Machine Learning 101](https://docs.google.com/presentation/d/1kSuQyW5DTnkVaZEjGYCkfOxvzCqGEFzWBy4e9Uedd9k/edit?usp=sharing) - Google의 선임 크리에이티브 엔지니어가 엔지니어와 경영진 모두를 위해 머신러닝을 설명합니다.
* [AI Playbook](https://aiplaybook.a16z.com/) - a16z의 AI 플레이북은 관리자에게 전달하거나 발표 자료에 활용하기 좋은 자료입니다.
* [Sebastian Ruder's Newsletter](https://newsletter.ruder.io/) - 뛰어난 NLP 연구에 대한 해설을 제공합니다.
* [How To Label Data](https://www.lighttag.io/how-to-label-data/) - 대규모 언어 주석 프로젝트를 관리하는 방법을 안내합니다.
* [Depends on the Definition](https://www.depends-on-the-definition.com/) - 다양한 NLP 주제를 상세한 구현과 함께 다루는 블로그 글 모음입니다.

NLP 입문 및 가이드

* [Understand & Implement Natural Language Processing](https://www.analyticsvidhya.com/blog/2017/01/ultimate-guide-to-understand-implement-natural-language-processing-codes-in-python/)
* [NLP in Python](http://github.com/NirantK/nlp-python-deep-learning) - GitHub 노트북 모음입니다.
* [Natural Language Processing: An Introduction](https://academic.oup.com/jamia/article/18/5/544/829676) - Oxford에서 제공하는 자료입니다.
* [NLP from Scratch with PyTorch](https://pytorch.org/tutorials/intermediate/nlp_from_scratch_index.html)
* [Hands-On NLTK Tutorial](https://github.com/hb20007/hands-on-nltk-tutorial) - NLTK 튜토리얼과 Jupyter 노트북입니다.
* [Natural Language Processing with Python – Analyzing Text with the Natural Language Toolkit](https://www.nltk.org/book/) - NLTK를 사용해 NLP 개념을 소개하는 온라인 및 인쇄용 책입니다. 저자들은 NLTK 라이브러리도 개발했습니다.
* [Train a new language model from scratch](https://huggingface.co/blog/how-to-train) - Hugging Face 🤗에서 제공하는 자료입니다.
* [Advanced NLP with spaCy](https://course.spacy.io/en/) - 텍스트 처리, 대규모 데이터 분석, 처리 파이프라인, 맞춤형 NLP 작업을 위한 신경망 모델 학습을 다루는 무료 온라인 강좌입니다.
* [Kaggle NLP Learning Guide](https://www.kaggle.com/learn-guide/natural-language-processing) - 시작 안내, NLP 딥러닝, BERT, GloVe, TF-IDF 같은 기법의 시각적 설명을 포함한 초보자용 튜토리얼입니다.

블로그 및 뉴스레터

* [Deep Learning, NLP, and Representations](https://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
* [The Illustrated BERT, ELMo, and co. (How NLP Cracked Transfer Learning)](https://jalammar.github.io/illustrated-bert/) and [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
* [Natural Language Processing](https://nlpers.blogspot.com/) - Hal Daumé III가 운영합니다.
* [arXiv: Natural Language Processing (Almost) from Scratch](https://arxiv.org/pdf/1103.0398.pdf)
* [Karpathy's The Unreasonable Effectiveness of Recurrent Neural Networks](https://karpathy.github.io/2015/05/21/rnn-effectiveness)
* [Machine Learning Mastery: Deep Learning for Natural Language Processing](https://machinelearningmastery.com/category/natural-language-processing)
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp)

### 동영상 및 온라인 강좌
[맨 위로](#contents)

* [Advanced Natural Language Processing](https://people.cs.umass.edu/~miyyer/cs685_f20/) - UMass Amherst 컴퓨터과학과의 CS 685 강좌입니다.
* [Deep Natural Language Processing](https://github.com/oxford-cs-deepnlp-2017/lectures) - Oxford의 강의 시리즈입니다.
* [Deep Learning for Natural Language Processing (cs224-n)](https://web.stanford.edu/class/cs224n/) - Richard Socher와 Christopher Manning이 진행하는 Stanford 강좌입니다.
* [Neural Networks for NLP](http://phontron.com/class/nn4nlp2017/) - Carnegie Mellon 언어기술연구소의 강좌입니다.
* [Deep NLP Course](https://github.com/yandexdataschool/nlp_course) - Yandex Data School 강좌로, 텍스트 임베딩부터 기계 번역까지 시퀀스 모델링과 언어 모델 등을 포함한 핵심 개념을 다룹니다.
* [fast.ai Code-First Intro to Natural Language Processing](https://www.fast.ai/2019/07/08/fastai-nlp/) - 정규식, SVD, 나이브 베이즈, 토큰화 같은 전통적 NLP 주제와 RNN, seq2seq, GRU, Transformer 같은 최신 신경망 접근법을 함께 다루며, 편향과 허위 정보 등 시급한 윤리 문제도 살펴봅니다. Jupyter 노트북은 [여기](https://github.com/fastai/course-nlp)에서 확인할 수 있습니다.
* [Machine Learning University - Accelerated Natural Language Processing](https://www.youtube.com/playlist?list=PL8P_Z6C4GcuWfAq8Pt6PBYlck4OprHXsw) - NLP와 텍스트 처리 입문에서 순환 신경망과 Transformer까지 다루는 강의입니다.
강의 자료는 [여기](https://github.com/aws-samples/aws-machine-learning-university-accelerated-nlp)에서 확인할 수 있습니다.
* [Applied Natural Language Processing](https://www.youtube.com/playlist?list=PLH-xYrxjfO2WyR3pOAB006CYMhNt4wTqp)- IIT Madras의 강의 시리즈로, 기초부터 오토인코더 등 다양한 주제를 다룹니다. 강좌용 GitHub 노트북도 [여기](https://github.com/Ramaseshanr/anlp)에서 확인할 수 있습니다.
* [DeepLearning.AI Natural Language Processing Specialization](https://www.deeplearning.ai/courses/natural-language-processing-specialization/) - 감성 분석, 단어 임베딩, RNN, LSTM, 어텐션 메커니즘과 BERT 및 T5 같은 Transformer 모델을 4개 강좌로 다루며 기계 번역과 요약 등의 작업을 살펴봅니다.
* [Stanford CS336: Language Modeling from Scratch](https://stanford-cs336.github.io/) - 데이터, 토큰화, 학습 및 평가를 포함해 언어 모델을 처음부터 구축하는 전 과정을 다루는 강좌입니다.
* [Stanford CS25: Transformers United](https://web.stanford.edu/class/cs25/) - 최신 Transformer 및 NLP 연구 논문 저자들이 초청 강연을 하는 세미나 시리즈입니다.
* [Cohere LLM University](https://cohere.com/llmu) - LLM, 임베딩, 시맨틱 검색 및 NLP 애플리케이션을 다루는 무료 강좌입니다.
* [Hugging Face NLP Course](https://huggingface.co/learn/nlp-course) - Transformers, Datasets, Tokenizers 라이브러리를 활용하는 실습형 NLP 강좌입니다.
* [NLP Demystified](https://www.nlpdemystified.org/) - Python/Jupyter 노트북과 함께 NLP 기초부터 Transformer까지 다루는 초보자용 무료 강좌입니다.


### 도서

* [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) - Dan Jurafsky 교수의 무료 도서입니다.
* [Natural Language Processing](https://github.com/jacobeisenstein/gt-nlp-class) - Georgia Tech의 Jacob Eisenstein 박사가 작성한 무료 NLP 강의 노트입니다.
* [NLP with PyTorch](https://github.com/joosthub/PyTorchNLPBook) - Brian과 Delip Rao가 저술했습니다.
* [Text Mining in R](https://www.tidytextmining.com)
* [Natural Language Processing with Python](https://www.nltk.org/book/)
* [Practical Natural Language Processing](https://www.oreilly.com/library/view/practical-natural-language/9781492054047/)
* [Natural Language Processing with Spark NLP](https://www.oreilly.com/library/view/natural-language-processing/9781492047759/)
* [Deep Learning for Natural Language Processing](https://www.manning.com/books/deep-learning-for-natural-language-processing) - Stephan Raaijmakers 저
* [Real-World Natural Language Processing](https://www.manning.com/books/real-world-natural-language-processing) - Masato Hagiwara 저
* [Natural Language Processing in Action, Second Edition](https://www.manning.com/books/natural-language-processing-in-action-second-edition) - Hobson Lane과 Maria Dyshel 저
* [Transformers in Action](https://www.manning.com/books/transformers-in-action) - Nicole Koenigstein 저
* [The Math Behind Artificial Intelligence](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book) - Tiago Monteiro 저 | 공학 관점에서 쉬운 영어로 AI의 수학적 원리를 설명하는 FreeCodeCamp 무료 도서입니다. 선형대수, 미적분, 확률과 통계, 최적화 이론을 비유, 실제 응용 사례, Python 코드 예제로 다룹니다.
  
## 라이브러리

[맨 위로](#contents)

* <a id="node-js">**Node.js and Javascript** - Node.js용 NLP 라이브러리</a> | [맨 위로](#contents)
  * [Twitter-text](https://github.com/twitter/twitter-text) - Twitter 텍스트 처리 라이브러리를 JavaScript로 구현한 버전입니다.
  * [Knwl.js](https://github.com/benhmoore/Knwl.js) - JS로 작성된 자연어 처리기입니다.
  * [Retext](https://github.com/retextjs/retext) - 자연어를 분석하고 조작하는 확장 가능한 시스템입니다.
  * [NLP Compromise](https://github.com/spencermountain/compromise) - 브라우저에서 자연어 처리를 수행합니다.
  * [Natural](https://github.com/NaturalNode/natural) - Node용 범용 자연어 처리 기능을 제공합니다.
  * [Poplar](https://github.com/synyi/poplar) - 자연어 처리(NLP)를 위한 웹 기반 주석 도구입니다.
  * [NLP.js](https://github.com/axa-group/nlp.js) - 봇 구축을 위한 NLP 라이브러리입니다.
  * [node-question-answering](https://github.com/huggingface/node-question-answering) - Node.js에서 DistilBERT를 사용해 빠르게 운영 환경에 적용할 수 있는 질의응답을 제공합니다.

* <a id="python"> **Python** - Python NLP 라이브러리</a> | [맨 위로](#contents)
  - [sentimental-onix](https://github.com/sloev/sentimental-onix) - ONNX를 사용한 spaCy 감성 분석 모델입니다.
  - [TextAttack](https://github.com/QData/TextAttack) - NLP의 적대적 공격, 적대적 학습 및 데이터 증강을 지원합니다.
  - [TextBlob](http://textblob.readthedocs.org/) - 일반적인 자연어 처리(NLP) 작업에 사용할 일관된 API를 제공합니다. [Natural Language Toolkit (NLTK)](https://www.nltk.org/)와 [Pattern](https://github.com/clips/pattern)의 기반을 활용하며, 두 라이브러리와도 잘 연동됩니다 :+1:
  - [spaCy](https://github.com/explosion/spaCy) - Python과 Cython을 사용하는 산업용 수준의 NLP입니다 :+1:
    - [textacy](https://github.com/chartbeat-labs/textacy) - spaCy를 기반으로 한 고수준 NLP 도구입니다.
  - [gensim](https://radimrehurek.com/gensim/index.html) - 일반 텍스트에서 비지도 의미 모델링을 수행하는 Python 라이브러리입니다 :+1:
  - [scattertext](https://github.com/JasonKessler/scattertext) - 말뭉치 간 언어 차이를 d3 시각화로 표현하는 Python 라이브러리입니다.
  - [GluonNLP](https://github.com/dmlc/gluon-nlp) *(보관됨)* - MXNet/Gluon 기반 NLP 딥러닝 도구 모음입니다.
  - [AllenNLP](https://github.com/allenai/allennlp) *(보관됨)* - PyTorch 기반의 NLP 연구 라이브러리로, 다양한 언어 작업에서 최첨단 딥러닝 모델을 개발할 수 있습니다.
  - [PyTorch-NLP](https://github.com/PetrochukM/PyTorch-NLP) - 데이터 및 단어 벡터 로더, 신경망 계층 표현, BLEU 같은 일반 NLP 지표를 제공해 신속한 프로토타이핑을 지원하는 NLP 연구 도구 모음입니다.
  - [Rosetta](https://github.com/columbia-applied-data-science/rosetta) - 텍스트 처리 도구와 래퍼를 제공합니다(예: Vowpal Wabbit).
  - [PyNLPl](https://github.com/proycon/pynlpl) - Python용 범용 NLP 라이브러리입니다. ARPA 언어 모델, Moses 구문 테이블, GIZA++ 정렬과 같은 특정 형식도 처리합니다.
  - [foliapy](https://github.com/proycon/foliapy) - 언어 주석을 위한 XML 형식인 [FoLiA](https://proycon.github.io/folia/)를 다루는 Python 라이브러리입니다.
  - [PySS3](https://github.com/sergioburdisso/pyss3) - SS3 화이트박스 텍스트 분류기를 구현한 Python 패키지로, 예측을 설명하는 대화형 시각화 도구가 포함되어 있습니다.
  - [jPTDP](https://github.com/datquocnguyen/jPTDP) - 품사(POS) 태깅과 의존 구문 분석을 공동으로 수행하는 도구 모음입니다. 40개 이상의 언어를 위한 사전 학습 모델을 제공합니다.
  - [BigARTM](https://github.com/bigartm/bigartm) - 빠른 토픽 모델링 라이브러리입니다.
  - [Snips NLU](https://github.com/snipsco/snips-nlu) - 운영 환경에서 사용할 수 있는 의도 파싱 라이브러리입니다.
  - [Chazutsu](https://github.com/chakki-works/chazutsu) - 표준 NLP 연구 데이터셋을 다운로드하고 파싱하는 라이브러리입니다.
  - [Word Forms](https://github.com/gutfeeling/word_forms) - 영어 단어의 가능한 모든 형태를 정확하게 생성합니다.
  - [Multilingual Latent Dirichlet Allocation (LDA)](https://github.com/ArtificiAI/Multilingual-Latent-Dirichlet-Allocation-LDA) - 다국어를 지원하고 확장 가능한 문서 클러스터링 파이프라인입니다.
  - [Natural Language Toolkit (NLTK)](https://www.nltk.org/) - 50개가 넘는 말뭉치를 지원하며 다양한 NLP 기능을 제공하는 라이브러리입니다.
  - [NLP Architect](https://github.com/NervanaSystems/nlp-architect) - NLP 및 NLU를 위한 최신 딥러닝 구조와 기법을 탐색하는 라이브러리입니다.
  - [Flair](https://github.com/zalandoresearch/flair) - PyTorch 기반의 간단한 최첨단 다국어 NLP 프레임워크입니다. BERT, ELMo, Flair 임베딩을 포함합니다.
  - [Kashgari](https://github.com/BrikerMan/Kashgari) - Keras 기반의 간편한 다국어 NLP 프레임워크로, 개체명 인식(NER), 품사(PoS) 태깅 및 텍스트 분류 모델을 5분 만에 구축할 수 있습니다. BERT와 word2vec 임베딩을 포함합니다.
  - [FARM](https://github.com/deepset-ai/FARM) - NLP 전이 학습을 빠르고 쉽게 수행합니다. 산업용 언어 모델을 활용하며 질의응답에 중점을 둡니다.
  - [Haystack](https://github.com/deepset-ai/haystack) - 데이터에 대한 자연어 검색 인터페이스를 구축하는 종단 간 Python 프레임워크입니다. Transformers와 최신 NLP 기술을 활용하며 DPR, Elasticsearch, HuggingFace Modelhub 등을 지원합니다.
  - [Rita DSL](https://github.com/zaibacu/rita-dsl) - [Apache UIMA의 RUTA](https://uima.apache.org/ruta.html)에 느슨하게 기반한 DSL입니다. 언어 패턴(규칙 기반 NLP)을 정의하고 이를 [spaCy](https://spacy.io/)나, 기능을 줄인 경량 버전을 원할 경우 정규식 패턴으로 변환할 수 있습니다.
  - [Transformers](https://github.com/huggingface/transformers) - TensorFlow 2.0 및 PyTorch용 자연어 처리 도구입니다.
  - [Tokenizers](https://github.com/huggingface/tokenizers) - 연구 및 운영 환경에 최적화된 토크나이저입니다.
  - [fairSeq](https://github.com/pytorch/fairseq) - Facebook AI Research가 구현한 PyTorch용 최신 seq2seq 모델입니다.
  - [corex_topic](https://github.com/gregversteeg/corex_topic) - 도메인 지식이 거의 필요 없는 계층적 토픽 모델링 도구입니다.
  - [Sockeye](https://github.com/awslabs/sockeye) - Amazon Translate를 지원하는 신경망 기계 번역(NMT) 도구 모음입니다.
  - [DL Translate](https://github.com/xhlulu/dl-translate) - `transformers`와 Facebook의 mBART Large를 기반으로 만든 50개 언어용 딥러닝 번역 라이브러리입니다.
  - [Jury](https://github.com/obss/jury) - 다양한 자동 평가 지표를 제공하는 NLP 모델 출력 평가 도구입니다.
  - [python-ucto](https://github.com/proycon/python-ucto) - 여러 언어를 위한 유니코드 인식 정규식 기반 토크나이저입니다. C++ 라이브러리의 Python 바인딩이며 [FoLiA 형식](https://proycon.github.io/folia)을 지원합니다.
  - [Pearmut](https://github.com/zouharvi/pearmut) - 기계 번역과 같은 다국어 NLP 작업을 위한 사람 주석 도구입니다.
  - [Stanza](https://github.com/stanfordnlp/stanza) - 70개 이상의 언어에서 토큰화, 품사, 표제어, 의존 구문 분석 및 NER을 수행하는 Stanford NLP의 Python 도구 모음입니다.
  - [Sentence-Transformers](https://github.com/UKPLab/sentence-transformers) - 문장/문서 임베딩, 시맨틱 검색 및 재순위를 지원하며, 검색형 NLP의 현재 표준입니다.
  - [Argilla](https://github.com/argilla-io/argilla) - LLM 및 NLP 데이터셋을 위한 오픈 소스 데이터 주석 및 피드백 수집 플랫폼입니다.
  - [HuggingFace Datasets](https://github.com/huggingface/datasets) - 수천 개의 NLP 데이터셋을 위한 표준화된 로더와 처리 기능을 제공합니다.
  - [HuggingFace Evaluate](https://github.com/huggingface/evaluate) - NLP 지표의 기준 구현을 제공합니다.
  - [sacrebleu](https://github.com/mjpost/sacrebleu) - 기계 번역을 위한 재현 가능한 BLEU/chrF/TER 점수 계산을 제공합니다.
  - [COMET](https://github.com/Unbabel/COMET) - 학습 기반 기계 번역 지표로, 사실상의 현재 표준입니다.
  - [LangTest](https://github.com/JohnSnowLabs/langtest) - NLP 모델의 견고성, 편향 및 공정성을 위한 60가지 이상의 테스트 유형을 제공합니다.
   - [yasbd-lib](https://github.com/speedyk-005/yasbd-lib) - 정확도가 높은 규칙 기반 문장 경계 탐지기(SBD)입니다. pysbd 어댑터, 스트리밍 API, CLI, 39개 이상의 언어를 지원하는 spaCy 구성 요소를 제공합니다.

- <a id="c++">**C++** - C++ 라이브러리</a> | [맨 위로](#contents)
  - [InsNet](https://github.com/chncwang/InsNet) - 패딩 없는 동적 배칭을 사용해 인스턴스별 NLP 모델을 구축하는 신경망 라이브러리입니다.
  - [MIT Information Extraction Toolkit](https://github.com/mit-nlp/MITIE) - 개체명 인식 및 관계 추출을 위한 C, C++, Python 도구입니다.
  - [CRF++](https://taku910.github.io/crfpp/) - 순차 데이터 분할/레이블링 및 기타 NLP 작업을 위한 조건부 무작위장(CRF)의 오픈 소스 구현입니다.
  - [CRFsuite](http://www.chokkan.org/software/crfsuite/) - 순차 데이터 레이블링을 위한 조건부 무작위장(CRF) 구현입니다.
  - [BLLIP Parser](https://github.com/BLLIP/bllip-parser) - Charniak-Johnson 파서라고도 하는 BLLIP 자연어 파서입니다.
  - [colibri-core](https://github.com/proycon/colibri-core) - n-그램과 스킵그램 같은 기본 언어 구성을 빠르고 메모리 효율적으로 추출하고 다루는 C++ 라이브러리, 명령줄 도구 및 Python 바인딩입니다.
  - [ucto](https://github.com/LanguageMachines/ucto) - 여러 언어를 위한 유니코드 인식 정규식 기반 토크나이저입니다. 도구와 C++ 라이브러리로 제공되며 FoLiA 형식을 지원합니다.
  - [libfolia](https://github.com/LanguageMachines/libfolia) - [FoLiA 형식](https://proycon.github.io/folia/)을 위한 C++ 라이브러리입니다.
  - [frog](https://github.com/LanguageMachines/frog) - 네덜란드어용 메모리 기반 NLP 제품군입니다. 품사 태거, 표제어 추출기, 의존 구문 분석기, NER, 청크 파서 및 형태소 분석기를 포함합니다.
  - [MeTA](https://github.com/meta-toolkit/meta) - 대규모 텍스트 데이터 마이닝을 위한 C++ 데이터 과학 도구 모음인 ModErn Text Analysis입니다.
  - [Mecab (Japanese)](https://taku910.github.io/mecab/)
  - [Moses](http://statmt.org/moses/)
  - [StarSpace](https://github.com/facebookresearch/StarSpace) - 단어, 단락, 문서 수준 임베딩 생성과 텍스트 분류를 지원하는 Facebook 라이브러리입니다.
  - [QSMM](http://qsmm.org) - 적응형 확률적 하향식 및 상향식 파서입니다.

- <a id="java">**Java** - Java NLP 라이브러리</a> | [맨 위로](#contents)
  - [Stanford NLP](https://nlp.stanford.edu/software/index.shtml)
  - [OpenNLP](https://opennlp.apache.org/)
  - [NLP4J](https://emorynlp.github.io/nlp4j/)
  - [Word2vec in Java](https://deeplearning4j.org/docs/latest/deeplearning4j-nlp-word2vec)
  - [ReVerb](https://github.com/knowitall/reverb/) 웹 규모의 개방형 정보 추출 도구입니다.
  - [OpenRegex](https://github.com/knowitall/openregex) 효율적이고 유연한 토큰 기반 정규식 언어 및 엔진입니다.
  - [CogcompNLP](https://github.com/CogComp/cogcomp-nlp) - University of Illinois 인지 컴퓨팅 그룹이 개발한 핵심 라이브러리입니다.
  - [MALLET](http://mallet.cs.umass.edu/) - 통계적 자연어 처리, 문서 분류, 클러스터링, 토픽 모델링, 정보 추출 및 텍스트의 기타 머신러닝 응용을 위한 기계 학습 도구 모음입니다.
  - [RDRPOSTagger](https://github.com/datquocnguyen/RDRPOSTagger) - Java와 Python으로 제공되는 견고한 품사 태깅 도구 모음이며, 40개 이상의 언어를 위한 사전 학습 모델을 포함합니다.

- <a id="kotlin">**Kotlin** - Kotlin NLP 라이브러리</a> | [맨 위로](#contents)
  - [Lingua](https://github.com/pemistahl/lingua/) 긴 텍스트와 짧은 텍스트 모두에 적합한 Kotlin 및 Java용 언어 감지 라이브러리입니다.
  - [Kotidgy](https://github.com/meiblorn/kotidgy) — Kotlin으로 작성된 인덱스 기반 텍스트 데이터 생성기입니다.

- <a id="scala">**Scala** - Scala NLP 라이브러리</a> | [맨 위로](#contents)
  - [Saul](https://github.com/CogComp/saul) - SRL, POS 등의 내장 모듈을 포함해 NLP 시스템을 개발하는 라이브러리입니다.
  - [ATR4S](https://github.com/ispras/atr4s) - 최신 [자동 용어 인식](https://en.wikipedia.org/wiki/Terminology_extraction) 방법을 제공하는 도구 모음입니다.
  - [tm](https://github.com/ispras/tm) - 정규화된 다국어 [PLSA](https://en.wikipedia.org/wiki/Probabilistic_latent_semantic_analysis)에 기반한 토픽 모델링 구현입니다.
  - [word2vec-scala](https://github.com/Refefer/word2vec-scala) - word2vec 모델용 Scala 인터페이스로, 단어 거리와 단어 유추 같은 벡터 연산을 포함합니다.
  - [Epic](https://github.com/dlwh/epic) - Scala로 작성된 고성능 통계 파서이자 복잡한 구조 예측 모델을 구축하는 프레임워크입니다.
  - [Spark NLP](https://github.com/JohnSnowLabs/spark-nlp) - Apache Spark ML 기반의 자연어 처리 라이브러리입니다. 분산 환경에서 쉽게 확장되는 머신러닝 파이프라인을 위해 간편하고 빠르며 정확한 NLP 주석을 제공합니다.

- <a id="R">**R** - R NLP 라이브러리</a> | [맨 위로](#contents)
  - [text2vec](https://github.com/dselivanov/text2vec) - R에서 빠른 벡터화, 토픽 모델링, 거리 계산 및 GloVe 단어 임베딩을 지원합니다.
  - [wordVectors](https://github.com/bmschmidt/wordVectors) - word2vec 및 기타 단어 임베딩 모델을 생성하고 탐색하는 R 패키지입니다.
  - [RMallet](https://github.com/mimno/RMallet) - Java 머신러닝 도구 MALLET과 연동하는 R 패키지입니다.
  - [dfr-browser](https://github.com/agoldst/dfr-browser) - 웹 브라우저에서 텍스트 토픽 모델을 살펴볼 수 있는 d3 시각화를 생성합니다.
  - [dfrtopics](https://github.com/agoldst/dfrtopics) - 텍스트 토픽 모델을 탐색하는 R 패키지입니다.
  - [sentiment_classifier](https://github.com/kevincobain2000/sentiment_classifier) - 단어 의미 중의성 해소와 WordNet Reader를 사용한 감성 분류입니다.
  - [jProcessing](https://github.com/kevincobain2000/jProcessing) - 일본어 감성 분류 기능을 포함하는 일본어 자연어 처리 라이브러리입니다.
  - [corporaexplorer](https://kgjerde.github.io/corporaexplorer/) - 텍스트 모음을 동적으로 탐색하는 R 패키지입니다.
  - [tidytext](https://github.com/juliasilge/tidytext) - tidy 도구를 사용한 텍스트 마이닝입니다.
  - [spacyr](https://github.com/quanteda/spacyr) - spaCy NLP용 R 래퍼입니다.
  - [CRAN Task View: Natural Language Processing](https://github.com/cran-task-views/NaturalLanguageProcessing/)

- <a id="clojure">**Clojure**</a> | [Back to Top](#contents)
  - [Clojure-openNLP](https://github.com/dakrone/clojure-opennlp) - Clojure에서 자연어 처리를 수행합니다(opennlp).
  - [Infections-clj](https://github.com/r0man/inflections-clj) - Clojure 및 ClojureScript용 Rails 스타일 굴절형 처리 라이브러리입니다.
  - [postagga](https://github.com/fekr/postagga) - Clojure 및 ClojureScript에서 자연어를 파싱하는 라이브러리입니다.

- <a id="go">**Go**</a> | [Back to Top](#contents)
  - [prose](https://github.com/jdkato/prose) - 토큰화, 품사 태깅 및 개체명 추출을 지원하는 텍스트 처리 라이브러리입니다.
  - [gojieba](https://github.com/yanyiwu/gojieba) - jieba 중국어 단어 분할 알고리즘의 Go 구현입니다.
  - [kagome](https://github.com/ikawaha/kagome) - 순수 Go로 작성된 일본어 형태소 분석기입니다.
  - [go-propisyu](https://github.com/rekurt/go-propisyu) - 문법적 성과 명사의 격변화를 올바르게 적용해 숫자를 러시아어 단어로 변환합니다.

- <a id="ruby">**Ruby**</a> | [Back to Top](#contents)
  - Kevin Dias의 [A collection of Natural Language Processing (NLP) Ruby libraries, tools and software](https://github.com/diasks2/ruby-nlp)
  - [Practical Natural Language Processing done in Ruby](https://github.com/arbox/nlp-with-ruby)

- <a id="rust">**Rust**</a> | [Back to Top](#contents)
  - [whatlang](https://github.com/greyblake/whatlang-rs) — 트라이그램 기반 자연어 인식 라이브러리입니다.
  - [rust-bert](https://github.com/guillaume-be/rust-bert) - 바로 사용할 수 있는 NLP 파이프라인 및 Transformer 기반 모델입니다.
  - [snips-nlu-rs](https://github.com/snipsco/snips-nlu-rs) *(보관됨 — Snips는 중단됨)* - 운영 환경에서 사용할 수 있는 의도 파싱 라이브러리입니다.

- <a id="NLP++">**NLP++** - NLP++ 언어</a> | [맨 위로](#contents)
  - [VSCode Language Extension](https://marketplace.visualstudio.com/items?itemName=dehilster.nlp) - VSCode용 NLP++ 언어 확장 프로그램입니다.
  - [nlp-engine](https://github.com/VisualText/nlp-engine) - 완전한 영어 파서를 포함해 Linux에서 NLP++ 코드를 실행하는 NLP++ 엔진입니다.
  - [VisualText](http://visualtext.org) - NLP++ 언어의 홈페이지입니다.
  - [NLP++ Wiki](http://wiki.naturalphilosophy.org/index.php?title=NLP%2B%2B) - NLP++ 언어에 관한 위키 항목입니다.

- <a id="julia">**Julia**</a> | [Back to Top](#contents)
  - [CorpusLoaders](https://github.com/JuliaText/CorpusLoaders.jl) - 다양한 NLP 말뭉치를 위한 여러 로더를 제공합니다.
  - [Languages](https://github.com/JuliaText/Languages.jl) - 인간 언어를 다루는 패키지입니다.
  - [TextAnalysis](https://github.com/JuliaText/TextAnalysis.jl) - 텍스트 분석을 위한 Julia 패키지입니다.
  - [TextModels](https://github.com/JuliaText/TextModels.jl) - 자연어 처리를 위한 신경망 기반 모델입니다.
  - [WordTokenizers](https://github.com/JuliaText/WordTokenizers.jl) - 자연어 처리 및 관련 작업을 위한 고성능 토크나이저입니다.
  - [Word2Vec](https://github.com/JuliaText/Word2Vec.jl) - word2vec용 Julia 인터페이스입니다.

### 서비스

NER, 토픽 태깅 등의 고수준 기능을 API로 제공하는 NLP 서비스 | [맨 위로](#contents)

- [Wit-ai](https://github.com/wit-ai/wit) - 앱과 기기를 위한 자연어 인터페이스입니다.
- [IBM Watson's Natural Language Understanding](https://github.com/watson-developer-cloud/natural-language-understanding-nodejs) - API 및 GitHub 데모입니다.
- [Amazon Comprehend](https://aws.amazon.com/comprehend/) - NER, 태깅, 감성 분석과 같은 일반적인 작업을 포함하는 NLP 및 ML 도구 모음입니다.
- [Google Cloud Natural Language API](https://cloud.google.com/natural-language/) - 영어와 중국어(간체 및 번체)를 포함해 9개 이상의 언어에서 구문 분석, NER, 감성 분석 및 콘텐츠 태깅을 수행합니다.
- [ParallelDots](https://www.paralleldots.com/text-analysis-apis) - 감성 분석부터 의도 분석까지 제공하는 고수준 텍스트 분석 API 서비스입니다.
- [Microsoft Cognitive Service](https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics/)
- [TextRazor](https://www.textrazor.com/)
- [Rosette](https://www.rosette.com/)
- [Textalytic](https://www.textalytic.com) - 감성 분석, 개체명 추출, 품사 태깅, 단어 빈도, 토픽 모델링, 워드 클라우드 등을 브라우저에서 수행하는 자연어 처리 도구입니다.
- [NLP Cloud](https://nlpcloud.io) - 사용자 지정 및 사전 학습 spaCy NLP 모델을 RESTful API로 제공하며, 개체명 인식(NER), 품사 태깅 등을 지원합니다.
- [Cloudmersive](https://cloudmersive.com/nlp-api) - 음성 태깅, 텍스트 바꿔쓰기, 언어 번역/감지, 문장 파싱 등을 수행하는 통합 무료 NLP API입니다.

### 주석 도구

- [GATE](https://gate.ac.uk/overview.html) - 15년 이상 개발된 무료 오픈 소스 General Architecture and Text Engineering입니다.
- [Anafora](https://github.com/weitechen/anafora) - 무료 오픈 소스 웹 기반 원문 주석 도구입니다.
- [brat](https://brat.nlplab.org/) - 공동 텍스트 주석 작업을 위한 온라인 환경인 brat 신속 주석 도구입니다.
- [doccano](https://github.com/chakki-works/doccano) - 무료 오픈 소스 도구로, 텍스트 분류, 시퀀스 레이블링 및 시퀀스 간 변환 주석 기능을 제공합니다.
- [INCEpTION](https://inception-project.github.io) - 지능형 지원과 지식 관리를 제공하는 의미 주석 플랫폼입니다.
- [prodigy](https://prodi.gy/) - 능동 학습 기반 주석 도구이며 유료입니다($).
- [LightTag](https://lighttag.io) - 팀을 위한 호스팅·관리형 텍스트 주석 도구이며 유료입니다($).
- [rstWeb](https://corpling.uis.georgetown.edu/rstweb/info/) - 담화 트리 주석을 위한 오픈 소스 로컬 또는 온라인 도구입니다.
- [GitDox](https://corpling.uis.georgetown.edu/gitdox/) - XML 데이터와 공동 스프레드시트 그리드의 GitHub 버전 제어 및 검증을 지원하는 오픈 소스 서버 주석 도구입니다.
- [Datasaur](https://datasaur.ai/) - 개인 및 팀을 위한 다양한 NLP 작업을 지원하며 프리미엄 모델입니다.
- [Konfuzio](https://konfuzio.com/en/) - 능동 학습 기반의 팀 중심 호스팅 및 온프레미스 텍스트·이미지·PDF 주석 도구로, 프리미엄 모델이며 유료입니다($).
- [UBIAI](https://ubiai.tools/) - 팀이 쉽게 사용할 수 있는 텍스트 주석 도구로, 포괄적인 자동 주석 기능을 제공합니다. NER, 관계 및 문서 분류, 송장 레이블링용 OCR 주석을 지원하며 유료입니다($).
- [Shoonya](https://github.com/AI4Bharat/Shoonya-Backend) - 조직 및 작업 공간 수준의 다양한 관리 기능을 갖춘 무료 오픈 소스 데이터 주석 플랫폼입니다. 데이터 유형에 구애받지 않으며 여러 검증 단계를 거쳐 대규모로 데이터를 주석 처리할 수 있습니다.
- [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) - 텍스트 주석 및 딥러닝 모델 학습/튜닝을 위한 무료 종단 간 노코드 플랫폼입니다. NER, 분류, 관계 추출, Assertion Status용 Spark NLP 모델을 즉시 지원합니다. 사용자, 팀, 프로젝트, 문서 수에 제한이 없으며 FOSS는 아닙니다.
- [FLAT](https://github.com/proycon/flat) - 풍부한 XML 기반 언어 주석 형식인 [FoLiA 형식](http://proycon.github.io/folia)을 기반으로 하는 웹 기반 언어 주석 환경입니다. 무료 오픈 소스입니다.
- [Argilla](https://github.com/argilla-io/argilla) - 사람의 피드백을 수집하고 NLP 및 LLM 데이터셋을 구축하며 선호도 데이터를 선별하는 오픈 소스 플랫폼입니다.
- [Label Studio](https://github.com/HumanSignal/label-studio) - 오픈 코어 멀티모달 레이블링 플랫폼으로 NLP 레이블링에 널리 사용됩니다.
- [Potato](https://github.com/davidjurgens/potato) - 분류, 스팬, 상호 참조, 개체 연결, 에이전트 추적 평가 등 21개 이상의 작업 유형을 지원하는 무료 오픈 소스 주석 도구입니다. MACE 품질 관리, 주의력 검사, AI 지원 레이블링 및 300개 이상의 예제 작업이 내장되어 있습니다.


## 작업 및 방법

언어 문제에 따라 NLP 작업을 구성했습니다. 각 하위 절에는 기반이 되는 고전 연구를 먼저, 이어서 신경망 접근법을, 해당되는 경우 LLM 기반 방법을 나열합니다. 사전 학습, 평가, 검색, 추론 등 현대 언어 모델 전용 연구는 [NLP 언어 모델](#language-models-for-nlp)을 참조하세요.

### 텍스트 임베딩

[맨 위로](#contents)

정적 단어 임베딩(기초):

- [word2vec](https://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf) - [구현](https://code.google.com/archive/p/word2vec/) - [설명 블로그](http://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
- [GloVe](https://nlp.stanford.edu/pubs/glove.pdf) - [설명 블로그](https://blog.acolyer.org/2016/04/22/glove-global-vectors-for-word-representation/)
- [fastText](https://arxiv.org/abs/1607.04606) - [구현](https://github.com/facebookresearch/fastText); 서브워드 n-그램이 OOV를 잘 처리하므로 저자원 언어에도 여전히 유용합니다.
- [sense2vec](https://arxiv.org/abs/1511.06388) - 단어 의미 중의성 해소입니다.
- [Paragraph Vectors / doc2vec](https://cs.stanford.edu/~quocle/paragraph_vector.pdf)

문맥 임베딩:

- [ELMo](https://arxiv.org/abs/1802.05365) - 심층 문맥화 단어 표상입니다.
- [CoVe](https://arxiv.org/abs/1708.00107) - 기계 번역에서 학습한 문맥 벡터입니다.
- [ULMFiT](https://arxiv.org/abs/1801.06146) - 텍스트 분류를 위한 언어 모델 미세 조정 방법입니다.
- [InferSent](https://arxiv.org/abs/1705.02364) - 자연어 추론(NLI)에서 얻은 문장 표상입니다.

최신 문장 및 문서 임베딩은 [NLP 검색](#retrieval-for-nlp)(Sentence-Transformers, E5, BGE-M3, Nomic, GritLM)과 최신 순위표를 제공하는 [MTEB](https://github.com/embeddings-benchmark/mteb)를 참조하세요.

### 토큰화, 형태론 및 분할

[맨 위로](#contents)

- [SentencePiece](https://github.com/google/sentencepiece) - 언어에 구애받지 않는 서브워드 토큰화입니다.
- [BPE](https://arxiv.org/abs/1508.07909) 및 [Unigram LM](https://arxiv.org/abs/1804.10959) - 널리 쓰이는 두 가지 서브워드 방식입니다.
- [Stanza](https://github.com/stanfordnlp/stanza) - 70개 이상의 언어에서 토큰화, 표제어 추출 및 형태론을 지원합니다.
- [UDPipe](https://github.com/ufal/udpipe) - Universal Dependencies를 위한 토큰화, 태깅, 표제어 추출 및 파싱을 수행합니다.
- [Morfessor](https://github.com/aalto-speech/morfessor) - 비지도 형태소 분할 도구입니다.
토크나이저 연구 및 아키텍처는 [언어 모델](#language-models-for-nlp)도 참조하세요.

- [Byte-Pair Encoding (Sennrich et al.)](https://arxiv.org/abs/1508.07909) - 신경망 기계 번역을 위한 서브워드 단위로, 현대 토크나이저의 기반입니다.
- [SentencePiece](https://github.com/google/sentencepiece) - 언어에 구애받지 않는 서브워드 토큰화(BPE 및 Unigram)입니다.
- [Tokenizers](https://github.com/huggingface/tokenizers) - BPE, WordPiece, Unigram의 빠른 Rust 구현입니다.
- [ByT5](https://arxiv.org/abs/2105.13626) - 토크나이저를 사용하지 않는 바이트 수준 모델입니다.
- [CANINE](https://arxiv.org/abs/2103.06874) - 유니코드 문자에서 직접 작동하는 토큰화 없는 인코더입니다.
- [How Good is Your Tokenizer?](https://arxiv.org/abs/2012.15613) - 언어별 토크나이저의 공정성을 다룹니다.
- [Byte Latent Transformer (BLT)](https://arxiv.org/abs/2412.09871) (Meta, 2024) - 대규모에서 BPE 토큰화 모델에 필적하는 동적 바이트 수준 패칭을 수행해 토크나이저 없는 방향을 되살립니다.
- [SuperBPE](https://arxiv.org/abs/2503.13423) (2025) - 다운스트림 작업에서 BPE보다 성능을 높이는 슈퍼워드 토큰화입니다.
- [Over-Tokenized Transformer](https://arxiv.org/abs/2501.16975) (ICML 2025) - 입력 및 출력 어휘를 분리합니다. 입력 어휘 크기와 학습 손실 사이의 로그-선형 관계를 보이며, 모델 크기와 독립적으로 어휘를 확장합니다.
- [Foundations of Tokenization](https://arxiv.org/abs/2407.11606) (ICLR 2025) - 확률 사상 범주론을 사용한 토크나이저 모델의 최초 형식적 통합 프레임워크로, 통계적 일관성 조건을 정립합니다.
- [The Token Tax: Systematic Bias in Multilingual Tokenization](https://arxiv.org/abs/2509.05486) (2025) - 토큰화 분절도가 여러 언어에서 모델 정확도를 어떻게 예측하는지 정량화하고, 형태론적으로 복잡하거나 저자원인 언어에 부과되는 구조적 비용을 드러냅니다.
- [Reducing Tokenization Premiums for Low-Resource Languages](https://arxiv.org/abs/2601.13328) (2026) - 저자원 언어의 여러 토큰으로 된 문자 시퀀스를 결합하는 어휘를 사후 추가해 재학습 없이 추론 비용을 낮춥니다.

### 품사 태깅 및 의존 구문 분석

[맨 위로](#contents)

- [Universal Dependencies](https://universaldependencies.org/) - 100개 이상의 언어를 포괄하는 언어 간 일관된 트리뱅크입니다.
- [spaCy](https://spacy.io/) 및 [Stanza](https://github.com/stanfordnlp/stanza) - 여러 언어에서 운영 환경에 사용할 수 있는 파서를 제공합니다.
- [Deep Biaffine Attention for Neural Dependency Parsing](https://arxiv.org/abs/1611.01734) - 신경망 구문 분석의 기반이 된 아키텍처입니다.
- [Trankit](https://github.com/nlp-uoregon/trankit) - 경량 Transformer 기반 다국어 NLP 도구 모음입니다.
- [Self-Attentive Constituency Parsing (Kitaev & Klein)](https://arxiv.org/abs/1805.01052) - 성능이 뛰어난 신경망 구구조 파서입니다.

### 개체명 인식 및 정보 추출

[맨 위로](#contents)

기반 연구 및 신경망 방법:

- [CoNLL-2003 NER](https://www.aclweb.org/anthology/W03-0419/) - 대표적인 영어 NER 벤치마크입니다.
- [Neural Architectures for NER (Lample et al.)](https://arxiv.org/abs/1603.01360) - 오랫동안 널리 사용된 NER 아키텍처인 BiLSTM-CRF입니다.
- [Flair](https://github.com/flairNLP/flair) - 문맥 문자열 임베딩을 사용하며 여러 언어에서 뛰어난 NER 성능을 보입니다.
- [spaCy NER](https://spacy.io/usage/linguistic-features#named-entities) - 운영 환경에 바로 사용할 수 있습니다.

개방형 및 지시 따르기 정보 추출:

- [Universal NER](https://arxiv.org/abs/2308.03279) - 여러 언어에서 개방형 NER을 수행하도록 지시 튜닝된 언어 모델입니다.
- [GLiNER](https://arxiv.org/abs/2311.08526) (2023) - 추론 시 임의의 개체 유형을 처리하는 소형 범용 NER 모델입니다.
- [GoLLIE](https://arxiv.org/abs/2310.03668) - 언어 모델을 사용해 지침을 따르는 정보 추출을 수행합니다.
- [REBEL](https://github.com/Babelscape/rebel) - seq2seq 방식의 종단 간 관계 추출입니다.

LLM 기반:

- [GPT-NER](https://arxiv.org/abs/2304.10428) - 개체명 인식을 위한 LLM입니다.
- [Can LLMs Replace Sentence-Level NER?](https://arxiv.org/abs/2402.10573) (2024) - 비용과 품질 간의 절충을 다룹니다.
- [Generative NER in the Era of LLMs](https://arxiv.org/abs/2601.17898) (2026) - 4개 NER 벤치마크에서 8개의 오픈 LLM을 평가합니다. 구조화된 출력을 사용하는 PEFT가 인코더 기반 NER과 대등한 성능을 보입니다.

### 상호 참조 해결

[맨 위로](#contents)

- [End-to-End Neural Coreference (Lee et al.)](https://arxiv.org/abs/1707.07045) - 현대 신경망 상호 참조 해결의 기반입니다.
- [SpanBERT](https://arxiv.org/abs/1907.10529) - 스팬 기반 사전 학습으로, 강력한 상호 참조 기준 모델입니다.
- [coref-hoi](https://github.com/lxucs/coref-hoi) - 고차 추론 기반 상호 참조 해결입니다.
- [maverick-coref](https://github.com/SapienzaNLP/maverick-coref) (2024) - 최고 성능의 대형 시스템에 필적하는 효율적인 상호 참조 해결입니다.
- [LingMess](https://arxiv.org/abs/2205.12644) - 언어학적 동기에 기반한 범주별 상호 참조 점수화입니다.
LLM 기반:

- [LLMs for Coreference Resolution](https://arxiv.org/abs/2310.05884) - 상호 참조 해결을 위한 프롬프트 및 미세 조정입니다.
- [Multilingual Coreference Shared Task: Can LLMs Dethrone Traditional Approaches?](https://arxiv.org/abs/2509.17796) (2025) - LLM 기반 4개와 전통적 접근법 5개 등 총 9개 시스템을 비교합니다. 전통적 방법이 여전히 앞서지만 LLM이 격차를 좁히고 있습니다.

### 텍스트 분류 및 감성 분석

[맨 위로](#contents)

- [fastText classifier](https://arxiv.org/abs/1607.01759) - 강력하고 빠른 선형 기준 모델입니다.
- [Sentiment Treebank (SST)](https://nlp.stanford.edu/sentiment/) - 대표적인 세분화 감성 데이터셋입니다.
- [SetFit](https://github.com/huggingface/setfit) - 프롬프트 없이 소수 예제로 텍스트를 분류합니다.
- [FastFit](https://github.com/IBM/fastfit) - 다중 클래스 환경을 위한 빠른 소수 예제 학습입니다.
- [SST / IMDB / AG News with DeBERTa-v3](https://arxiv.org/abs/2111.09543) - 현재 인코더 미세 조정 기준 모델입니다.
- [PySS3](https://github.com/sergioburdisso/pyss3) - 해석 가능한 화이트박스 텍스트 분류기입니다.
- [LLMs as Annotators](https://arxiv.org/abs/2305.13734) - 주의할 점을 고려해 텍스트 분류 레이블링에 LLM을 사용합니다.

### 토픽 모델링

[맨 위로](#contents)

- [Latent Dirichlet Allocation (Blei et al.)](https://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf) - 토픽 모델링의 기반이 된 방법입니다.
- [gensim](https://radimrehurek.com/gensim/) - Python에서 LDA, LSI, HDP를 지원합니다.
- [BigARTM](https://github.com/bigartm/bigartm) - 빠른 정규화 토픽 모델링 도구입니다.
- [BERTopic](https://github.com/MaartenGr/BERTopic) - 문맥 임베딩을 기반으로 클러스터링을 수행하는 토픽 모델링으로, 현대의 일반적인 기본 선택입니다.
- [Top2Vec](https://github.com/ddangelov/Top2Vec) - 토픽 벡터와 문서 벡터를 함께 학습합니다.
- [CorEx Topic](https://github.com/gregversteeg/corex_topic) - 앵커 단어를 사용한 계층적 토픽 모델링입니다.

### 요약

[맨 위로](#contents)

- [TextRank](https://web.eecs.umich.edu/~mihalcea/papers/mihalcea.emnlp04.pdf) - 그래프 기반 추출 요약입니다.
- [Pointer-Generator Networks (See et al.)](https://arxiv.org/abs/1704.04368) - 신경망 추상 요약의 기반이 된 방법입니다.
- [PEGASUS](https://arxiv.org/abs/1912.08777) - 요약을 위한 갭 문장 사전 학습입니다.
- [BART](https://arxiv.org/abs/1910.13461) - 널리 사용되는 노이즈 제거 seq2seq 기준 모델입니다.
- [BookSum](https://arxiv.org/abs/2105.08209) 및 [SCROLLS](https://arxiv.org/abs/2201.03533) - 장문서 요약 벤치마크입니다.
LLM 기반:

- [Benchmarking LLMs for News Summarization](https://arxiv.org/abs/2301.13848) - LLM과 미세 조정 요약 모델을 비교합니다.
- [Element-Aware Summarization with LLMs](https://arxiv.org/abs/2305.13412) - 요약을 위한 구조화된 프롬프트입니다.
- [Understanding LLM Reasoning for Abstractive Summarization](https://arxiv.org/abs/2512.03503) (2025) - 명시적 추론은 유창성을 높이지만 사실적 근거성을 약화시키며, 추론 예산이 길수록 충실도가 저하될 수 있습니다.

### 기계 번역

[맨 위로](#contents)

통계적 방법 및 신경망 기반 연구:

- [Moses](http://statmt.org/moses/) - 대표적인 통계적 기계 번역 시스템입니다.
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) - 분야를 재편한 Transformer 논문입니다.
- [Marian NMT](https://github.com/marian-nmt/marian) - 효율적인 C++ 신경망 기계 번역 프레임워크입니다.
- [Fairseq](https://github.com/facebookresearch/fairseq) - PyTorch 시퀀스 모델링 도구 모음입니다.

대규모 다국어:

- [NLLB-200](https://arxiv.org/abs/2207.04672) - 200개 언어를 지원하는 기계 번역입니다.
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - 400개 이상의 언어를 지원하는 기계 번역입니다.
- [SeamlessM4T](https://arxiv.org/abs/2312.05187) - 100개 이상의 언어에서 음성 및 텍스트 번역을 지원합니다.

평가:

- [COMET](https://github.com/Unbabel/COMET) - 학습 기반 기계 번역 지표로, chrF와 함께 사실상의 현재 표준입니다.
- [sacrebleu](https://github.com/mjpost/sacrebleu) - 재현 가능한 BLEU/chrF/TER 점수 계산을 제공합니다.
- [BERTScore](https://github.com/Tiiiger/bert_score) - 유사도 기반 생성 평가 지표입니다.

LLM 기반:

- [Is ChatGPT a Good Translator?](https://arxiv.org/abs/2301.08745) - 기계 번역 시스템으로서 LLM을 평가합니다.
- [Adapting LLMs for Document-Level MT](https://arxiv.org/abs/2401.06468) (2024) - 문맥 인식 번역을 위한 LLM 적응입니다.
- [GPT-4 vs Human Translators](https://arxiv.org/abs/2308.03245) - 전문 기계 번역에서 품질을 비교합니다.
- [Multilingual MT with Open LLMs at Practical Scale](https://arxiv.org/abs/2502.02481) (2025) - 28개 언어 기계 번역에서 100억 미만 규모 오픈 LLM을 벤치마크하며 GPT-4-turbo 및 Google Translate에 필적하는 성능을 보입니다.
- [Bridging the Linguistic Divide: Survey on LLMs for MT](https://arxiv.org/abs/2504.01919) (2025) - 지시 따르기, 문맥 내 학습, 선호도 정렬이 기계 번역 방법론을 어떻게 재구성했는지 조사합니다.

### 질의응답 및 독해

[맨 위로](#contents)

데이터셋 및 기반 시스템:

- [SQuAD / SQuAD 2.0](https://rajpurkar.github.io/SQuAD-explorer/) - 추출형 독해 데이터셋입니다.
- [Natural Questions](https://ai.google.com/research/NaturalQuestions/) - Wikipedia를 대상으로 한 실제 사용자 질문입니다.
- [HotpotQA](https://hotpotqa.github.io/) - 다중 단계 추론 데이터셋입니다.
- [TriviaQA](http://nlp.cs.washington.edu/triviaqa/) - 원격 감독 방식의 질의응답 데이터셋입니다.
- [DrQA](https://github.com/facebookresearch/DrQA) - Wikipedia를 대상으로 하는 오픈 도메인 질의응답입니다.
- [Document-QA](https://github.com/allenai/document-qa) - 여러 단락을 대상으로 하는 독해 데이터셋입니다.

현대 오픈 도메인 질의응답:

- [DPR](https://arxiv.org/abs/2004.04906) 및 [FiD](https://arxiv.org/abs/2007.01282) - 검색 후 읽기 방식으로, LLM 이전 오픈 도메인 질의응답의 표준 파이프라인입니다.
- [Atlas](https://arxiv.org/abs/2208.03299) - 소수 예제 질의응답을 위한 검색 증강 언어 모델입니다.
- [NLP 검색](#retrieval-for-nlp)도 참조하세요.

LLM 시대:

- [GPT-4 with retrieval on TriviaQA / NQ](https://arxiv.org/abs/2305.06983)
- [Self-RAG](https://arxiv.org/abs/2310.11511) (2023) - 검색, 생성 및 자기 비평을 수행합니다.
- [GAIA](https://arxiv.org/abs/2311.12983) - 다단계 질의응답을 포함하는 범용 AI 어시스턴트 벤치마크입니다.

### 개체명 인식 그 이상의 정보 추출

[맨 위로](#contents)

- [OpenIE 6](https://github.com/dair-iitd/openie6) - 스키마가 필요 없는 개방형 정보 추출입니다.
- [Template-Based Information Extraction without the Templates](https://www.usna.edu/Users/cs/nchamber/pubs/acl2011-chambers-templates.pdf)
- [Privee: An Architecture for Automatically Analyzing Web Privacy Policies](https://www.sebastianzimmeck.de/zimmeckAndBellovin2014Privee.pdf)
- [REBEL](https://github.com/Babelscape/rebel) - 종단 간 관계 추출입니다.
- [DocRED](https://github.com/thunlp/DocRED) - 문서 수준 관계 추출 벤치마크입니다.
- [LLMs for Semantic Role Labeling](https://arxiv.org/abs/2506.05385) (2025) - RAG와 자기 교정을 활용하는 생성형 LLM이 영어 및 중국어 의미역 레이블링(SRL)에서 인코더-디코더 BERT형 모델을 능가합니다.
- [Adapting LLMs for Minimal-edit GEC](https://arxiv.org/abs/2506.13148) (2025) - 새로운 오류율 적응 일정을 적용한 디코더 전용 LLM이 BEA-test 문법 오류 교정에서 새로운 최고 성능을 달성합니다.

### 검색 및 임베딩

[맨 위로](#contents)

질의응답과 정보 검색(IR)의 기반으로 점점 더 널리 쓰이는 밀집 및 지연 상호작용 검색:

- [DPR (Dense Passage Retrieval)](https://arxiv.org/abs/2004.04906) - 이중 인코더 검색의 기준 모델입니다.
- [ColBERT](https://arxiv.org/abs/2004.12832) 및 [ColBERTv2](https://arxiv.org/abs/2112.01488) - 지연 상호작용 검색 방식으로, 도메인 외 데이터에서 강력한 성능을 보입니다.
- [E5](https://arxiv.org/abs/2212.03533) 및 [E5-Mistral](https://arxiv.org/abs/2401.00368) - 널리 사용되는 밀집 임베딩 계열입니다.
- [BGE](https://github.com/FlagOpen/FlagEmbedding) 및 [BGE-M3](https://arxiv.org/abs/2402.03216) (2024) - 다국어 및 다기능 임베딩으로, 여러 언어의 MTEB에서 최상위 성능을 보입니다.
- [Nomic Embed](https://arxiv.org/abs/2402.01613) (2024) - 완전히 공개되어 재현할 수 있는 임베딩 모델입니다.
- [Matryoshka Representation Learning](https://arxiv.org/abs/2205.13147) - 추론 시 차원을 다양하게 선택할 수 있는 중첩 임베딩입니다.
- [GritLM](https://arxiv.org/abs/2402.09906) (2024) - 하나의 모델에서 생성과 임베딩을 통합합니다.
- [RAG (Retrieval-Augmented Generation)](https://arxiv.org/abs/2005.11401) - 원조 검색 증강 프레임워크로, 현대 질의응답 파이프라인의 기반입니다.
- [Gemini Embedding](https://arxiv.org/abs/2503.07891) (2025) - Gemini에서 파생된 밀집 임베딩으로, 250개 이상의 언어에 걸친 MMTEB 및 교차 언어 검색(XOR-Retrieve, XTREME-UP)에서 최고 성능을 보입니다.
- [Qwen3-Embedding](https://arxiv.org/abs/2506.05176) (2025) - Qwen3 기반의 디코더형 임베딩 계열(0.6B~8B)로, 기존 독점 모델을 능가해 MTEB Multilingual 및 MTEB Code에서 1위를 차지했습니다.
- [Rank1](https://arxiv.org/abs/2502.18418) (2025) - DeepSeek-R1 추론 추적 증류를 통해 테스트 시점 연산을 사용해 학습한 최초의 재순위 모델입니다. 지시 따르기와 OOD 검색에서 최고 성능을 기록합니다.
- [ReasonEmbed](https://arxiv.org/abs/2510.08252) (2025) - ReMixer 데이터 합성과 Redapter 적응 학습을 활용한 추론 중심 검색용 임베딩 모델로, BRIGHT에서 nDCG@10 38.1의 최고 기록을 달성했습니다.
- [ColBERT-Att](https://arxiv.org/abs/2603.25248) (2026) - 질의 및 문서 어텐션 가중치를 ColBERT 점수화에 통합해 지연 상호작용 검색을 확장합니다. MS-MARCO, BEIR, LoTTE에서 재현율을 높입니다.
임베딩 및 검색 벤치마크:

- [MMTEB](https://arxiv.org/abs/2502.13595) (2025) - MTEB를 확장해 250개 이상의 언어에서 500개 이상의 작업을 포함하는 커뮤니티 벤치마크입니다.

### 음성 및 텍스트

[맨 위로](#contents)

인접 분야와 겹치는 영역이므로 관련 자료를 간략히 소개합니다.

- [Whisper](https://github.com/openai/whisper) - 다국어 ASR을 지원하는 현대적 오픈 기본 모델입니다.
- [SeamlessM4T](https://github.com/facebookresearch/seamless_communication) - 음성 및 텍스트 번역을 통합합니다.
- [Canary](https://huggingface.co/nvidia/canary-1b) (NVIDIA, 2024) - 최고 수준의 오픈 다국어 ASR 모델입니다.
- [FunASR](https://github.com/modelscope/FunASR) - 산업용 ASR 도구 모음입니다. GPU에서 실시간보다 170배 빠르고, 50개 이상의 언어와 내장 VAD, 구두점 처리, 화자 분할, 감정 감지를 지원합니다. 비자기회귀 SenseVoice 및 LLM 기반 Fun-ASR-Nano 모델을 포함합니다.
- [Wav2Vec 2.0](https://arxiv.org/abs/2006.11477) - 자기 지도 음성 사전 학습의 기반이 된 방법입니다.
- [Coqui TTS](https://github.com/coqui-ai/TTS) 및 [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - 오픈 TTS 시스템입니다.

## 데이터셋

[맨 위로](#contents)

데이터셋 허브 및 목록:

- [HuggingFace Datasets Hub](https://huggingface.co/datasets) - 버전 관리 및 스트리밍 로더를 제공하는 최신 NLP 데이터셋의 중앙 색인입니다.
- [nlp-datasets](https://github.com/niderhoff/nlp-datasets) - 다양한 NLP 데이터셋 모음입니다.
- [gensim-data](https://github.com/RaRe-Technologies/gensim-data) - 사전 학습 NLP 모델 및 NLP 말뭉치 데이터 저장소입니다.

사전 학습 규모 말뭉치(공개):

- [The Pile](https://pile.eleuther.ai/) - 825 GiB 규모의 다양한 텍스트 말뭉치입니다.
- [RedPajama / RedPajama-V2](https://github.com/togethercomputer/RedPajama-Data) (2023-2024) - LLaMA 사전 학습 데이터를 재현한 것으로, V2는 품질 신호가 포함된 30조 토큰 규모입니다.
- [Dolma](https://github.com/allenai/dolma) (AI2, 2023-2024) - 문서화된 필터링 파이프라인을 갖춘 3조 토큰 규모의 공개 사전 학습 말뭉치입니다.
- [FineWeb / FineWeb-Edu](https://huggingface.co/datasets/HuggingFaceFW/fineweb) (2024) - 정제된 15조 토큰 규모의 웹 말뭉치입니다. FineWeb-Edu는 교육적 품질을 기준으로 필터링합니다.
- [CulturaX](https://huggingface.co/datasets/uonlp/CulturaX) - 167개 언어에 걸친 6.3조 토큰을 포함합니다.
- [Common Corpus](https://huggingface.co/datasets/PleIAs/common_corpus) (2024) - 공개 라이선스의 2조 토큰 규모 다국어 말뭉치입니다.

작업 및 지시 데이터셋:

- [Universal Dependencies](https://universaldependencies.org/) - 100개 이상의 언어에서 언어 간 일관성을 갖춘 트리뱅크 주석입니다.
- [Tülu 3 SFT Mixture](https://huggingface.co/datasets/allenai/tulu-3-sft-mixture) (2024) - Tülu 3의 기반이 된 공개 지시 튜닝 데이터입니다.
- [tiny_qa_benchmark_pp](https://github.com/vincentkoc/tiny_qa_benchmark_pp/) - 소규모 다국어 NLP 질의응답 데이터셋과 자체 합성 데이터를 생성하는 라이브러리입니다.

## 다국어 NLP 프레임워크

[맨 위로](#contents)

- [UDPipe](https://github.com/ufal/udpipe) - Universal Treebank 및 기타 CoNLL-U 파일을 토큰화, 태깅, 표제어 추출, 파싱하는 학습 가능한 파이프라인입니다. 주로 C++로 작성되었으며 다국어 NLP 처리를 위한 빠르고 신뢰할 수 있는 솔루션입니다.
- [NLP-Cube](https://github.com/adobe/NLP-Cube) : 자연어 처리 파이프라인으로 문장 분할, 토큰화, 표제어 추출, 품사 태깅 및 의존 구문 분석을 수행합니다. Dynet 2.0을 사용하는 Python 기반의 새 플랫폼으로, 독립 실행형(CLI/Python 바인딩) 및 서버 기능(REST API)을 제공합니다.
- [UralicNLP](https://github.com/mikahama/uralicNLP) - 사미어, 모르드바어, 마리어, 코미어 등 여러 위기 우랄어를 주로 지원하는 NLP 라이브러리입니다. 핀란드어 같은 일부 비위기 언어와 스웨덴어 및 아랍어 같은 비우랄어도 지원합니다. 형태소 분석, 생성, 표제어 추출 및 중의성 해소를 수행할 수 있습니다.

## NLP 언어 모델

[맨 위로](#contents)

NLP 작업 및 언어 현상에 한정한 사전 학습 언어 모델과 관련 연구입니다. 범용 LLM 도구, 에이전트 또는 RAG 애플리케이션 키트는 [관련 항목](#see-also)을 참조하세요.

### 사전 학습 및 적응

인코더(고전적 NLP 작업에서 여전히 핵심 역할을 합니다):

- [BERT](https://arxiv.org/abs/1810.04805) - 양방향 Transformer 사전 학습으로, 2018년 이후 대부분의 인코더 기반 NLP 연구의 토대입니다. 섹션 탐색 기능과 ACL 원문이 첨부된 [온라인 자료](https://webeditions.page/works/bert-pre-training/)도 있습니다.
- [RoBERTa](https://arxiv.org/abs/1907.11692) - 견고하게 최적화된 BERT 사전 학습으로, 일반적인 인코더 기준 모델입니다.
- [DeBERTa / DeBERTa-v3](https://arxiv.org/abs/2111.09543) - 분리된 어텐션을 사용하며 분류, NER, NLI에서 강력한 성능을 보입니다.
- [ELECTRA](https://arxiv.org/abs/2003.10555) - 샘플 효율성이 높은 대체 토큰 탐지 사전 학습입니다.
- [ModernBERT](https://arxiv.org/abs/2412.13663) (2024) - 회전 임베딩, FlashAttention, 8K 컨텍스트를 갖춘 현대화된 인코더로, 분류, NER, 검색에 널리 선택되는 최신 모델입니다.
- [NeoBERT](https://arxiv.org/abs/2502.19587) (2025) - RoPE, 4K 컨텍스트, 최적화된 깊이 대 너비 비율을 통합한 2억 5천만 매개변수 인코더입니다. MTEB에서 최신 성능을 달성하고 동일한 미세 조정 조건에서 ModernBERT와 RoBERTa-large를 능가합니다.

인코더-디코더 및 seq2seq:

- [T5](https://arxiv.org/abs/1910.10683) 및 [FLAN-T5](https://arxiv.org/abs/2210.11416) - NLP 작업을 텍스트 입력-텍스트 출력으로 구성하며, 강력한 지시 튜닝 인코더-디코더 기준 모델입니다.
- [BART](https://arxiv.org/abs/1910.13461) - 요약 및 생성에 널리 사용되는 노이즈 제거 seq2seq 사전 학습입니다.

NLP 작업의 기반으로 사용되는 공개 디코더 전용 언어 모델:

- [Llama 3 / 3.1 / 3.3](https://arxiv.org/abs/2407.21783) (Meta, 2024-2025) - 널리 채택된 공개 가중치 모델 계열로, 다양한 NLP 작업의 미세 조정을 위한 기본 모델입니다.
- [Qwen 2.5 / Qwen 3](https://qwenlm.github.io/) (Alibaba, 2024-2025) - 특히 중국어를 포함한 다국어 범위가 넓으며 다국어 벤치마크에서 공개 모델 중 최상위권을 차지하는 경우가 많습니다.
- [DeepSeek-V3](https://arxiv.org/abs/2412.19437) (2024) - 효율적인 MoE 사전 학습을 사용한 경쟁력 있는 공개 기본 모델입니다.
- [OLMo 2](https://arxiv.org/abs/2501.00656) (AI2, 2025) - 가중치, 학습 데이터, 코드를 모두 공개해 재현성의 기준이 되는 모델입니다.
- [Gemma 2 / Gemma 3](https://arxiv.org/abs/2408.00118) (Google, 2024-2025) - NLP 작업에서 높은 성능을 보이는 공개 소형/중형 모델입니다.
- [Mistral / Mixtral](https://arxiv.org/abs/2401.04088) - 효율적인 밀집형 및 희소 MoE 공개 모델입니다.
- [What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?](https://arxiv.org/abs/2204.05832) - NLP 전이를 위해 인코더, 디코더, 인코더-디코더 중 어느 구조가 효과적인지 비교합니다.

### 다국어 및 언어 간 모델

- [XLM-R](https://arxiv.org/abs/1911.02116) - CommonCrawl로 학습한 100개 언어 교차 언어 마스크 언어 모델입니다.
- [mT5](https://arxiv.org/abs/2010.11934) - 101개 언어를 포괄하는 다국어 T5입니다.
- [BLOOM](https://arxiv.org/abs/2211.05100) - 46개 자연어를 지원하는 1,760억 매개변수 공개 다국어 언어 모델입니다.
- [Aya 23 / Aya Expanse](https://arxiv.org/abs/2412.04261) (Cohere For AI, 2024) - 23~101개 언어를 포괄하는 대규모 다국어 지시 튜닝 모델입니다.
- [Glot500](https://arxiv.org/abs/2305.12182) - 저자원 언어에 초점을 둔 500개 이상 언어용 인코더입니다.
- [NLLB-200](https://arxiv.org/abs/2207.04672) - No Language Left Behind 프로젝트의 200개 언어 기계 번역 모델입니다.
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - 400개 이상의 언어를 위한 기계 번역 모델 및 3조 토큰 다국어 말뭉치입니다.
- [SeamlessM4T / Seamless](https://arxiv.org/abs/2312.05187) (Meta, 2023-2024) - 100개 이상의 언어에서 다국어·멀티모달 음성-텍스트 번역을 지원합니다.
- [SEA-LION / SeaLLM](https://arxiv.org/abs/2312.00738) (2024-2025) - 동남아시아 언어를 대상으로 하는 언어 모델입니다.
- [Babel](https://arxiv.org/abs/2503.00865) (2025) - 화자 수 기준 상위 25개 언어(전 세계 화자의 약 90%)를 포괄하는 공개 다국어 LLM(9B 및 83B)입니다. XCOPA, XNLI, MGSM, FLORES-200에서 비슷한 규모의 공개 다국어 모델을 능가합니다.
- [Lugha-Llama](https://arxiv.org/abs/2504.06536) (Princeton/Mila, 2025) - 선별된 WURA 말뭉치를 사용해 저자원 아프리카 언어에 맞게 조정한 Llama-3.1-8B이며, IrokoBench와 AfriQA에서 오픈 소스 최고 성능을 기록합니다.
- [AfriqueLLM](https://arxiv.org/abs/2601.06395) (McGill, 2026) - 20개 아프리카 언어의 260억 토큰으로 추가 사전 학습한 공개 LLM(4B~14B) 제품군으로, 데이터 혼합에 대한 포괄적 실증 연구를 포함합니다.
- [TranslateGemma](https://arxiv.org/abs/2601.09012) (Google, 2026) - Gemma 3 기반 공개 번역 특화 모델로, 품질 보상 모델을 사용하는 SFT 및 RL을 통해 55개 언어 쌍을 지원합니다.
- [MiLMMT-46](https://arxiv.org/abs/2602.11961) (Xiaomi, 2026) - 46개 언어로 확장한 공개 다국어 기계 번역으로, Google Translate 및 Gemini 3 Pro 같은 상용 시스템에 필적합니다.

### 평가 및 벤치마크

NLU 및 교차 언어:

- [GLUE](https://gluebenchmark.com/) 및 [SuperGLUE](https://super.gluebenchmark.com/) - 영어 NLU 벤치마크입니다.
- [XTREME](https://sites.research.google/xtreme) 및 [XGLUE](https://microsoft.github.io/XGLUE/) - 교차 언어 NLU 벤치마크입니다.
- [XNLI](https://github.com/facebookresearch/XNLI) - 15개 언어의 교차 언어 자연어 추론 데이터셋입니다.
- [FLORES-200](https://github.com/facebookresearch/flores) - 200개 언어의 기계 번역 평가입니다.
- [MTEB](https://github.com/embeddings-benchmark/mteb) - 대규모 텍스트 임베딩 벤치마크로, 문장/문서 인코더의 표준입니다.
- [BEIR](https://github.com/beir-cellar/beir) - 검색 모델을 위한 이질적 정보 검색(IR) 벤치마크입니다.

현대 언어 모델 평가(2023-2026):

- [HELM](https://crfm.stanford.edu/helm/) - 정확도를 비롯한 여러 측면에서 NLP 작업 전반을 포괄적으로 평가합니다.
- [BIG-bench](https://github.com/google/BIG-bench) - 언어 모델 역량을 탐색하는 200개 이상의 작업을 제공합니다.
- [MMLU](https://github.com/hendrycks/test) - 57개 과목에 걸쳐 다중 작업 지식을 평가합니다.
- [MMLU-Pro](https://arxiv.org/abs/2406.01574) (2024) - MMLU를 계승한 더 어렵고 판별력 높은 벤치마크입니다.
- [GPQA](https://arxiv.org/abs/2311.12022) - 대학원 수준 질의응답을 이용한, “Google로 답을 찾기 어려운” 추론 평가입니다.
- [REFUTE](https://huggingface.co/datasets/BGPT-OFFICIAL/refute) (2026) - 근거에 기반한 비평, 과장 주장 탐지, 근거 누락 시 답변 거부 및 보정을 평가하는 과학적 추론 벤치마크입니다.
- [IFEval](https://arxiv.org/abs/2311.07911) - 검증 가능한 지시 따르기 평가입니다.
- [Chatbot Arena (LMSYS)](https://lmarena.ai/) - 채팅 모델의 인간 선호도 ELO 순위표입니다.
- [LiveBench](https://livebench.ai/) (2024) - 데이터 오염에 강하고 매월 갱신되는 벤치마크입니다.
- [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) - 언어 모델 벤치마크 평가를 위한 통합 프레임워크입니다.
- [MMLU-ProX](https://arxiv.org/abs/2503.10497) (2025) - 유형론적으로 다양한 29개 언어로 MMLU-Pro를 확장했으며, 고자원 언어와 저자원 언어 사이에 최대 24.3%의 성능 격차가 있음을 보여줍니다.
- [MultiChallenge](https://arxiv.org/abs/2501.17399) (2025) - 여러 차례의 대화에서 지시 따르기와 문맥 내 추론 실패가 동시에 나타나는 벤치마크로, 평가된 모든 최전선 모델이 50% 미만의 점수를 기록합니다.
- [FRAMES](https://arxiv.org/abs/2409.12941) (2025) - 사실성, 검색 정확도, 문서 간 추론을 함께 요구하는 824개 다중 단계 질문으로 RAG를 통합 평가합니다.

긴 컨텍스트 평가:

- [Needle in a Haystack](https://github.com/gkamradt/LLMTest_NeedleInAHaystack) - 긴 컨텍스트 창에서 검색 능력을 확인하는 테스트입니다.
- [RULER](https://arxiv.org/abs/2404.06654) (2024) - 단순 검색을 넘어서는 합성 긴 컨텍스트 작업입니다.
- [LongBench](https://github.com/THUDM/LongBench) - 다양한 NLP 작업을 포괄하는 이중 언어 긴 컨텍스트 벤치마크입니다.
- [LongBench v2](https://arxiv.org/abs/2412.15204) (2025) - 8천~200만 단어 컨텍스트에서 심층 다중 단계 추론을 요구하는 전문가 작성 객관식 질문 503개를 포함합니다. 시간 제한 아래 인간은 53.7%를 기록합니다.
- [U-NIAH](https://arxiv.org/abs/2503.00353) (2025) - 다중 바늘 및 중첩 구성을 추가해 needle-in-a-haystack을 확장합니다. RAG가 소형 LLM의 중간 정보 손실을 완화하지만 추론 모델의 성능은 저하시킴을 보여줍니다.

### 추론 및 테스트 시점 연산

2024~2026년의 주요 흐름은 명시적 추론 과정을 생성하고 추가 추론 연산의 이점을 얻는 모델입니다.

- [Chain-of-Thought Prompting](https://arxiv.org/abs/2201.11903) - 중간 추론 단계를 통해 성능이 향상됨을 보인 기반 연구입니다.
- [Self-Consistency](https://arxiv.org/abs/2203.11171) - 샘플링한 CoT 체인에서 다수결을 적용합니다.
- [Tree of Thoughts](https://arxiv.org/abs/2305.10601) - 추론 트리에서 탐색합니다.
- [Self-Refine](https://arxiv.org/abs/2303.17651) 및 [Reflexion](https://arxiv.org/abs/2303.11366) - 추론 시점에 자기 교정을 수행합니다.
- [Large Language Models are Zero-Shot Reasoners](https://arxiv.org/abs/2205.11916) - NLP 추론 작업에 연쇄 사고를 적용합니다.
- [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) - 추론을 위한 과정 감독 보상 모델입니다.
- [DeepSeek-R1](https://arxiv.org/abs/2501.12948) (2025) - 순수 RL로 학습한 공개 추론 모델로, o1 스타일 동작을 공개 방식으로 재현했습니다.
- [OpenAI o1 / o3](https://openai.com/index/learning-to-reason-with-llms/) (2024-2025) - 테스트 시점 연산을 사용하는 추론 시스템입니다.
- [Scaling LLM Test-Time Compute Optimally](https://arxiv.org/abs/2408.03314) (2024) - 추론 시점 연산 절충을 체계적으로 연구합니다.
- [s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393) (2025) - 예산 강제 기법을 이용한 소형 공개 추론 모델 학습 방법입니다.
- [Kimi k1.5](https://arxiv.org/abs/2501.12599) (2025) - 정책 최적화를 활용한 긴 컨텍스트 RL(MCTS 및 PRM 없음)로 o1 수준에 도달했으며, 장문 CoT를 단문 CoT 모델로 증류하는 방법을 도입합니다.
- [rStar-Math](https://arxiv.org/abs/2501.04519) (2025) - MCTS 롤아웃으로 학습한 과정 선호도 모델과 소형 정책 모델을 결합합니다. 대형 모델에서 증류하지 않고도 소형 언어 모델이 추론 능력을 부트스트랩할 수 있습니다.
- [DAPO](https://arxiv.org/abs/2503.14476) (2025) - 클리핑 분리, 동적 샘플링, 토큰 수준 손실, 엔트로피 보너스의 네 가지 개선을 적용한 공개 GRPO 기반 RL 학습 시스템입니다. DeepSeek-R1-Zero 수준의 추론을 재현하고 능가합니다.
- [VAPO](https://arxiv.org/abs/2504.05118) (2025) - 길이에 적응하는 GAE와 토큰 수준 클리핑을 사용하는 가치 모델 기반 RL입니다. 안정적인 학습으로 AIME 2024에서 가치 함수가 없는 GRPO 방법을 능가합니다.
- [ThinkPRM](https://arxiv.org/abs/2504.16828) (2025) - 단계별 연쇄 사고 검증을 생성하는 생성형 과정 보상 모델로, 감독 레이블 1%만으로 판별형 PRM에 필적합니다.
- [OpenThoughts](https://arxiv.org/abs/2506.04178) (2025) - 공개 추론 모델의 데이터 구성 방법을 1,000회 이상 통제 실험으로 연구했으며, AIME 2025에서 비공개 증류 기준 모델에 필적하는 최신 성능을 보입니다.

### 긴 컨텍스트 및 대안 아키텍처

- [Mamba](https://arxiv.org/abs/2312.00752) 및 [Mamba-2](https://arxiv.org/abs/2405.21060) - 어텐션을 대체하는 선형 시간의 긴 컨텍스트 처리를 위한 선택적 상태 공간 모델입니다.
- [RWKV](https://arxiv.org/abs/2305.13048) - 대규모 매개변수로 확장되는 RNN-Transformer 하이브리드입니다.
- [Jamba](https://arxiv.org/abs/2403.19887) (2024) - Mamba, Transformer, MoE를 결합한 하이브리드 아키텍처입니다.
- [RoPE](https://arxiv.org/abs/2104.09864) 및 [YaRN](https://arxiv.org/abs/2309.00071) - 회전 위치 임베딩 및 컨텍스트 길이 확장 기법입니다.
- [Position Interpolation](https://arxiv.org/abs/2306.15595) - 최소한의 미세 조정으로 컨텍스트 창을 확장합니다.
- [Lost in the Middle](https://arxiv.org/abs/2307.03172) - NLP 작업에서 긴 컨텍스트가 저하되는 패턴을 다룹니다.
- [RAG vs Long-Context LLMs](https://arxiv.org/abs/2407.16833) (2024) - 긴 입력에 대한 질의응답에서 두 방법의 절충점을 비교합니다.
- [Titans: Learning to Memorize at Test Time](https://arxiv.org/abs/2501.00663) (2025) - 테스트 시점에 과거 문맥을 기억하도록 학습하는 신경망 장기 기억 모듈입니다. 200만 토큰 이상으로 확장되며 언어 모델링과 추론에서 Transformer 및 최신 선형 순환 모델을 능가합니다.
- [MiniMax-01](https://arxiv.org/abs/2501.08313) (2025) - 선형 번개 어텐션과 희소 softmax 어텐션을 결합한 4,560억 매개변수 하이브리드입니다. 최대 400만 토큰 추론 컨텍스트에서 GPT-4o 수준의 NLP 성능을 냅니다.
- [Native Sparse Attention (NSA)](https://arxiv.org/abs/2502.11089) (2025) - 거친 압축과 세밀한 선택을 결합한 학습 가능한 희소 어텐션입니다. 64K에서 NLP 벤치마크 성능 저하 없이 큰 속도 향상을 보입니다.
- [LongRoPE2](https://arxiv.org/abs/2502.20082) (2025) - 고주파 RoPE 차원의 학습 부족을 확인하고 진화 탐색 재조정을 적용합니다. Meta의 방법보다 학습 토큰을 80배 적게 사용해 LLaMA3-8B의 컨텍스트를 128K까지 확장합니다.
- [Characterizing SSM and Hybrid LM Long-Context Performance](https://arxiv.org/abs/2507.12442) (2025) - 최대 220K 토큰에서 Transformer, SSM, 하이브리드 모델의 메모리와 속도를 처음으로 종합 분석합니다. SSM은 최대 4배 빠르고 하이브리드는 재현율과 효율의 균형을 이룹니다.

### 사실성, 환각 및 보정

- [Survey of Hallucination in Natural Language Generation](https://arxiv.org/abs/2202.03629) - 분류 체계와 완화 전략을 다룹니다.
- [TruthfulQA](https://github.com/sylinrl/TruthfulQA) - 질의응답의 진실성을 측정하는 벤치마크입니다.
- [FActScore](https://github.com/shmsw25/FActScore) - 장문 생성에서 세밀한 사실 정확도를 측정합니다.
- [LongFact / SAFE](https://arxiv.org/abs/2403.18802) (2024) - 장문 사실성 벤치마크이자 검색 증강 평가기입니다.
- [SelfCheckGPT](https://github.com/potsawee/selfcheckgpt) - 샘플링 기반 환각 탐지입니다.
- [RAGAS](https://github.com/explodinggradients/ragas) - RAG 및 질의응답 파이프라인을 위한 참조 자료 없는 평가입니다.
- [Lookback Lens](https://arxiv.org/abs/2407.07071) (2024) - 어텐션 패턴 기반 긴 컨텍스트 생성 환각 탐지입니다.
- [Calibration of LLMs on Multiple Choice](https://arxiv.org/abs/2402.13887) (2024) - 형식 효과에 따른 보정 분석입니다.
- [HalluLens](https://arxiv.org/abs/2504.17550) (2025) - 내재적/외재적 분류 체계와 데이터 누출 방지를 위한 동적 테스트 세트 재생성을 적용한 환각 벤치마크입니다.
- [Atomic Calibration](https://arxiv.org/abs/2410.13246) (2025) - 장문 생성에서 주장 단위 보정을 분석하며, 모델은 단일 주장보다 긴 출력에서 보정 성능이 크게 낮습니다.
- [FRANQ](https://arxiv.org/abs/2505.21072) (2025) - RAG 사실 확인을 위한 충실도 인식 불확실성 정량화 방법으로, 충실도와 사실성을 형식적으로 구분합니다.
- [MUCH](https://arxiv.org/abs/2511.17081) (2025) - 영어, 프랑스어, 스페인어, 독일어의 다국어 주장 환각 벤치마크이며, 원칙적인 불확실성 정량화 평가를 위해 토큰 수준 로짓을 공개합니다.
- [HalluHard](https://arxiv.org/abs/2602.01031) (2026) - 인용이 필요한 응답을 위한 어려운 다중 턴 환각 벤치마크입니다. 웹 검색을 사용해도 환각률은 약 30%에 머뭅니다.
- [CURE: Think Through Uncertainty](https://arxiv.org/abs/2604.12046) (2026) - 생성 전에 주장 단위 불확실성을 추론하도록 모델을 학습시키며, 전기적 사실성과 FactBench AUROC에서 큰 개선을 보입니다.

### 프로빙 및 해석 가능성

- [A Primer in BERTology](https://arxiv.org/abs/2002.12327) - BERT가 언어에 관해 학습하는 내용을 다룹니다.
- [Probing Classifiers (Belinkov)](https://arxiv.org/abs/2102.12452) - 방법론, 한계 및 대안을 설명합니다.
- [Locating and Editing Factual Associations in GPT (ROME)](https://rome.baulab.info/) - 사실 회상의 인과 추적 방법입니다.
- [The Pyramid of NLP Probes](https://arxiv.org/abs/2104.07885) - 언어 지식을 위한 구조적 프로빙입니다.
- [Toy Models of Superposition](https://transformer-circuits.pub/2022/toy_model/) - Transformer 표상에 대한 희소 특징 관점의 기반입니다.
- [Towards Monosemanticity / Scaling Monosemanticity](https://transformer-circuits.pub/2024/scaling-monosemanticity/) (Anthropic, 2024) - 운영 규모 언어 모델에서 해석 가능한 특징을 추출하는 희소 오토인코더입니다.
- [Sparse Autoencoders Find Highly Interpretable Features](https://arxiv.org/abs/2309.08600) - 언어 모델 해석 가능성을 위한 SAE 방법론입니다.
- [Neuronpedia](https://www.neuronpedia.org/) - 여러 모델의 SAE 특징을 살펴보는 공개 플랫폼입니다.
- [Influence Functions Scale to LLMs](https://arxiv.org/abs/2308.03296) (2023) - 모델 동작을 좌우하는 학습 예제를 식별합니다.
- [Circuit Tracing: Revealing Computational Graphs in Language Models](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) (Anthropic, 2025) - 계층 간 트랜스코더와 기여도 그래프를 도입해 해석 가능한 대체 모델을 구성하고, 프롬프트 수준에서 특징 간 인과 상호작용을 추적합니다.
- [On the Biology of a Large Language Model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) (Anthropic, 2025) - Claude 3.5 Haiku에 기여도 그래프를 적용해 다중 단계 추론, 운율 계획, 탈옥 사례를 연구합니다.
- [Transcoders Beat Sparse Autoencoders for Interpretability](https://arxiv.org/abs/2501.18823) (2025) - 입력에서 계층 출력을 재구성하는 트랜스코더가 SAE보다 해석 가능한 특징을 제공함을 보이고, 스킵 트랜스코더를 소개합니다.
- [Survey on Sparse Autoencoders for LLM Interpretability](https://arxiv.org/abs/2503.05613) (EMNLP 2025) - SAE 아키텍처, 학습 전략, 특징 설명 및 평가에 관한 주요 개관 논문입니다.
- [Finding Highly Interpretable Prompt-Specific Circuits](https://arxiv.org/abs/2602.13483) (2026) - 작업별이 아닌 프롬프트별 회로를 식별하고 프롬프트 계열에 따른 메커니즘 군집을 드러냅니다.

### 효율적인 소형 언어 모델

증류 및 소형 모델:

- [DistilBERT](https://arxiv.org/abs/1910.01108) 및 [MiniLM](https://arxiv.org/abs/2002.10957) - 운영 환경의 NLP에 적합한 증류 인코더입니다.
- [Phi-3 / Phi-4](https://arxiv.org/abs/2412.08905) (Microsoft, 2024) - 선별된 데이터로 학습한 소형 모델로, NLP 벤치마크에서 훨씬 큰 모델에 필적합니다.
- [SmolLM2](https://arxiv.org/abs/2502.02737) (HuggingFace, 2025) - 재현 가능한 학습 데이터를 갖춘 완전 공개 소형 언어 모델 계열입니다.
- [SmolLM3](https://huggingface.co/blog/smollm3) (HuggingFace, 2025) - 128K 컨텍스트를 위해 NoPE 및 YaRN을 적용하고 11.2조 토큰으로 사전 학습한 30억 매개변수 완전 공개 디코더로, 40억 매개변수급 모델에 필적합니다.
- [Gemma 3 Technical Report](https://arxiv.org/abs/2503.19786) (Google, 2025) - 128K 컨텍스트에서 KV 캐시를 감당할 수 있도록 높은 로컬 대 전역 어텐션 비율을 사용하는 10억~270억 매개변수 공개 모델입니다.
- [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) (Alibaba, 2025) - 0.6B~235B의 밀집형 및 MoE 모델에 사고/비사고 모드를 통합했습니다. 30B-A3B MoE는 30억 매개변수만 활성화하면서 더 큰 밀집 모델에 필적합니다.
- [Apple Intelligence Foundation Language Models](https://arxiv.org/abs/2507.13575) (Apple, 2025) - KV 캐시 공유와 2비트 QAT를 사용해 정확도 손실 없이 캐시 메모리를 37.5% 줄인 온디바이스 30억 매개변수 모델입니다.
- [Sentence-Transformers](https://www.sbert.net/) - 샴 BERT를 사용한 문장 및 단락 임베딩입니다.
- [SetFit](https://github.com/huggingface/setfit) - 프롬프트 없이 소수 예제로 텍스트를 분류합니다.
- [FastFit](https://github.com/IBM/fastfit) - 다중 클래스 환경을 위한 빠른 소수 예제 분류입니다.
- [GTE](https://huggingface.co/thenlper/gte-base), [BGE](https://github.com/FlagOpen/FlagEmbedding), 및 [Stella](https://huggingface.co/dunzhang/stella_en_1.5B_v5) - MTEB 최상위권에 근접한 소형 텍스트 임베딩 모델입니다.

양자화 및 서빙(대규모로 NLP 모델을 배포할 때 유용):

- [GPTQ](https://arxiv.org/abs/2210.17323) - Transformer를 위한 사후 학습 양자화입니다.
- [AWQ](https://arxiv.org/abs/2306.00978) - 활성화 인식 가중치 양자화입니다.
- [KVTuner](https://arxiv.org/abs/2502.04420) (ICML 2025) - 민감도를 고려한 계층별 혼합 정밀도 KV 캐시 양자화로, 균일한 KV8보다 처리량을 최대 21% 높입니다.
- [GGUF / llama.cpp](https://github.com/ggerganov/llama.cpp) - 이식 가능한 양자화 추론입니다.
- [vLLM](https://github.com/vllm-project/vllm) - PagedAttention 기반 고처리량 언어 모델 서빙입니다.
- [SGLang](https://github.com/sgl-project/sglang) - 구조화된 생성과 효율적인 서빙을 제공합니다.
- [Text Generation Inference (TGI)](https://github.com/huggingface/text-generation-inference) - Hugging Face의 운영 환경용 언어 모델 서빙 도구입니다.

매개변수 효율적 미세 조정:

- [LoRA](https://arxiv.org/abs/2106.09685) 및 [QLoRA](https://arxiv.org/abs/2305.14314) - 저랭크 어댑터와 양자화 미세 조정으로, 제한된 하드웨어에서 NLP 작업에 맞게 언어 모델을 조정하는 표준 방법입니다.
- [DoRA](https://arxiv.org/abs/2402.09353) (2024) - 가중치 분해 저랭크 적응입니다.
- [PEFT](https://github.com/huggingface/peft) - LoRA, prefix tuning, IA3 등을 묶은 Hugging Face 라이브러리입니다.

### 명령어 튜닝 및 선호도 최적화

- [FLAN](https://arxiv.org/abs/2109.01652) - 제로샷 학습자로 활용하는 미세 조정 언어 모델입니다.
- [InstructGPT](https://arxiv.org/abs/2203.02155) - 사람의 피드백을 바탕으로 지시를 따르도록 언어 모델을 학습합니다.
- [Self-Instruct](https://github.com/yizhongw/self-instruct) - 언어 모델을 이용해 지시 데이터를 부트스트랩합니다.
- [Super-NaturalInstructions](https://github.com/allenai/natural-instructions) - 지침이 포함된 1,600개 이상의 NLP 작업입니다.
- [Constitutional AI](https://arxiv.org/abs/2212.08073) - 문서화된 헌법에 따라 AI가 생성한 피드백으로 언어 모델을 학습합니다.
- [Direct Preference Optimization](https://arxiv.org/abs/2305.18290) - RLHF의 더 간단한 대안으로 널리 채택되었습니다.
- [Tülu 3](https://arxiv.org/abs/2411.15124) (AI2, 2024) - 공개 모델 중 최첨단 성능을 달성하는 완전 공개 후속 학습 방법입니다.
- [LIMA](https://arxiv.org/abs/2305.11206) - “정렬에는 적을수록 더 좋다”는 접근으로, 작지만 품질 높은 SFT 데이터만으로도 큰 효과를 냅니다.
- [TRL](https://github.com/huggingface/trl) - SFT, DPO, GRPO, RLHF를 위한 기준 라이브러리입니다.
- [Magpie](https://arxiv.org/abs/2406.08464) (2024-2025) - 정렬된 언어 모델에 아무 내용도 주지 않고 프롬프트를 입력해 고품질 지시-응답 쌍을 합성합니다. 필터링된 데이터의 SFT는 공식 Llama-3-Instruct에 필적합니다.

### NLP의 편향, 공정성 및 안전성

- [StereoSet](https://github.com/moinnadeem/StereoSet) - 사전 학습 언어 모델의 고정관념 편향을 측정합니다.
- [CrowS-Pairs](https://github.com/nyu-mll/crows-pairs) - 마스크 언어 모델의 사회적 편향을 측정합니다.
- [WinoBias](https://github.com/uclanlp/corefBias) - 상호 참조 해결에서의 성별 편향을 다룹니다.
- [HolisticBias](https://github.com/facebookresearch/ResponsibleNLP) - 다양한 인구통계 축에 걸친 편향을 측정합니다.
- [RealToxicityPrompts](https://github.com/allenai/real-toxicity-prompts) - 언어 모델 생성의 유해성을 측정합니다.
- [Sycophancy in Language Models](https://arxiv.org/abs/2310.13548) - 사용자의 신념에 맞춰 답변을 조정하는 모델을 다룹니다.
- [Alignment Faking in Large Language Models](https://arxiv.org/abs/2412.14093) (Anthropic, 2024) - 학습 중 전략적으로 지시에 따르는 척하는 모델을 다룹니다.
- [WildGuard](https://arxiv.org/abs/2406.18495) (2024) - 공개 안전성 조정 모델 및 벤치마크입니다.
- [Emergent Misalignment](https://arxiv.org/abs/2502.17424) (2025) - 안전하지 않은 코드와 같은 좁은 작업으로 미세 조정했을 때 관련 없는 여러 영역에서 예상치 못한 광범위한 정렬 실패가 발생합니다.
- [SafeDialBench](https://arxiv.org/abs/2502.11090) (2025) - 22개 시나리오와 7개 탈옥 전략을 다루는 4,000개 이상의 다중 턴 대화를 포함한 중국어/영어 다국어 안전성 벤치마크입니다.
- [TeleAI-Safety](https://arxiv.org/abs/2512.05485) (2025) - 14개 모델과 12개 위험 범주에 걸쳐 19개 공격, 29개 방어, 19개 평가 방법을 통합한 모듈형 탈옥 평가 프레임워크입니다.
- [IndicSafe](https://arxiv.org/abs/2603.17915) (2026) - 12개 인도계 언어의 다국어 안전성 벤치마크입니다. 언어 간 일치율이 12.8%에 불과하고 저자원 문자 체계에서 과도한 거부가 나타남을 보입니다.
- [VLAF: Value-Conflict Alignment Faking](https://arxiv.org/abs/2604.20995) (2026) - 정책이 내재화된 가치와 충돌할 때 70억 매개변수 모델에서도 37%의 경우 정렬 속임이 발생하며, 조향 벡터 완화로 이를 94% 줄입니다.

## 언어별 NLP

[맨 위로](#contents)

사람이 사용하는 언어별로 리소스를 정리했습니다. 섹션을 눌러 펼치세요.

<details>
<summary>

### 아랍어 NLP

</summary>

[맨 위로](#contents)

### 라이브러리

- [CAMeL Tools](https://github.com/CAMeL-Lab/camel_tools) - 방언 식별, 형태론, NER을 포함하는 아랍어 NLP용 Python 도구 모음입니다.
- [goarabic](https://github.com/01walid/goarabic) - 아랍어 텍스트 처리를 위한 Go 패키지입니다.
- [jsastem](https://github.com/ejtaal/jsastem) - JavaScript 아랍어 어간 추출기입니다.
- [PyArabic](https://pypi.org/project/PyArabic/) - 아랍어용 Python 라이브러리입니다.
- [RFTokenizer](https://github.com/amir-zeldes/RFTokenizer) - 아랍어, 히브리어 및 콥트어용 학습 가능한 분할기입니다.
- [Farasa](https://farasa.qcri.org/) - QCRI의 아랍어 분할, 품사 태깅 및 NER 도구입니다.

### 모델 및 임베딩

- [AraBERT](https://github.com/aub-mind/arabert) - 아랍어 BERT 계열입니다.
- [CAMeLBERT](https://github.com/CAMeL-Lab/CAMeLBERT) - 현대 표준 아랍어(MSA), 방언 및 고전 아랍어용 BERT 모델입니다.
- [AraELECTRA](https://aclanthology.org/2021.wanlp-1.20/) - 효율적인 아랍어 사전 학습 모델이며 [AraBERT](https://github.com/aub-mind/arabert)와 함께 공개되었습니다.
- [Jais](https://huggingface.co/inceptionai/jais-13b) (2023-2024) - 아랍어와 영어를 지원하는 공개 이중 언어 모델 계열입니다.
- [ALLaM](https://arxiv.org/abs/2407.15390) (SDAIA, 2024) - 아랍어 우선 기반 모델입니다.

### 데이터셋

- [Multidomain Datasets](https://github.com/hadyelsahar/large-arabic-sentiment-analysis-resouces) - 현재 이용 가능한 최대 규모의 다중 도메인 아랍어 감성 분석 자료입니다.
- [LABR](https://github.com/mohamedadaly/labr) - 대규모 아랍어 도서 리뷰 데이터셋입니다.
- [Arabic Stopwords](https://github.com/mohataher/arabic-stop-words) - 여러 자료를 통합한 아랍어 불용어 목록입니다.
- [ArabicMMLU](https://huggingface.co/datasets/MBZUAI/ArabicMMLU) (2024) - 아랍어 MMLU 벤치마크입니다.

</details>

<details>
<summary>

### 중국어 NLP

</summary>

[맨 위로](#contents)

### 라이브러리

- [jieba](https://github.com/fxsjy/jieba#jieba-1) - 중국어 단어 분할을 위한 Python 패키지입니다.
- [SnowNLP](https://github.com/isnowfy/snownlp) - 중국어 NLP용 Python 패키지입니다.
- [FudanNLP](https://github.com/FudanNLP/fnlp) - 중국어 텍스트 처리를 위한 Java 라이브러리입니다.
- [HanLP](https://github.com/hankcs/HanLP) - 중국어 지원이 강력한 다국어 NLP 라이브러리입니다.
- [LTP](https://github.com/HIT-SCIR/ltp) - HIT 언어 기술 플랫폼으로, 분할, 품사 태깅, NER 및 파싱을 제공합니다.

### 모델 및 임베딩

- [Chinese-BERT-wwm](https://github.com/ymcui/Chinese-BERT-wwm) - 중국어용 전체 단어 마스킹 BERT입니다.
- [MacBERT](https://github.com/ymcui/MacBERT) - MLM을 교정으로 활용하는 사전 학습을 적용한 개선된 중국어 BERT입니다.
- [Qwen 2.5 / Qwen 3](https://github.com/QwenLM/Qwen3) - 중국어 성능이 뛰어난 Alibaba의 공개 언어 모델 계열입니다.
- [ChatGLM3 / GLM-4](https://github.com/THUDM/ChatGLM3) - Tsinghua의 중국어-영어 이중 언어 언어 모델입니다.
- [Baichuan 2](https://github.com/baichuan-inc/Baichuan2) - 공개 중국어 언어 모델입니다.
- [Yi](https://github.com/01-ai/Yi) - 01.AI의 공개 이중 언어 모델입니다.
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - 중국어 성능이 뛰어난 효율적인 공개 MoE 모델입니다.

### 논문집

- [funNLP](https://github.com/fighting41love/funNLP) - 중국어 NLP 도구와 자료의 대규모 모음입니다.

</details>

<details>
<summary>

### 덴마크어 NLP

</summary>

[맨 위로](#contents)

- [Named Entity Recognition for Danish](https://github.com/ITUnlp/daner)
- [DaNLP](https://github.com/alexandrainst/danlp) - 덴마크어 NLP 자료입니다.
- [Awesome Danish](https://github.com/fnielsen/awesome-danish) - 덴마크어 언어 기술 자료를 엄선한 목록입니다.

</details>

<details>
<summary>

### 네덜란드어 NLP

</summary>

[맨 위로](#contents)

- [python-frog](https://github.com/proycon/python-frog) - 품사 태깅, 표제어 추출, 의존 구문 분석, NER을 지원하는 네덜란드어 NLP 제품군 Frog의 Python 바인딩입니다.
- [SimpleNLG_NL](https://github.com/rfdj/SimpleNLG-NL) - SimpleNLG 구현에 기반한 네덜란드어 자연어 생성 표층 실현기입니다.
- [Alpino](https://github.com/rug-compling/alpino) - 네덜란드어 의존 구문 분석기이며 품사 태깅과 표제어 추출도 수행합니다.
- [Kaldi NL](https://github.com/opensource-spraakherkenning-nl/Kaldi_NL) - [Kaldi](http://kaldi-asr.org/) 기반 네덜란드어 음성 인식 모델입니다.
- [spaCy Dutch model](https://spacy.io/models/nl) - 네덜란드어 파이프라인을 갖춘 산업용 NLP 모델입니다.

</details>

<details>
<summary>

### 독일어 NLP

</summary>

[맨 위로](#contents)

- [German-NLP](https://github.com/adbar/German-NLP) - 독일어에 중점을 두고 개발된 오픈 액세스, 오픈 소스 및 즉시 사용 가능한 자료와 도구를 엄선한 목록입니다.

</details>

<details>
<summary>

### 헝가리어 NLP

</summary>

[맨 위로](#contents)

- [awesome-hungarian-nlp](https://github.com/oroszgy/awesome-hungarian-nlp) - 헝가리어 NLP 무료 자료를 엄선한 목록입니다.

</details>

<details>
<summary>

### 인도계 언어 NLP

</summary>

[맨 위로](#contents)

### 데이터, 코퍼스 및 트리뱅크

- [Hindi Dependency Treebank](https://ltrc.iiit.ac.in/treebank_H2014/) - 힌디어와 우르두어를 위한 다중 표상·다층 트리뱅크입니다.
- [Universal Dependencies Treebank in Hindi](https://universaldependencies.org/treebanks/hi_hdtb/index.html)
  - [Parallel Universal Dependencies Treebank in Hindi](http://universaldependencies.org/treebanks/hi_pud/index.html) - 위 트리뱅크의 소규모 하위 집합입니다.
- [ISI FIRE Stopwords List (Hindi and Bangla)](https://www.isical.ac.in/~fire/data/)
- [Peter Graham's Stopwords List](https://github.com/6/stopwords-json)
- [NLTK Corpus](https://www.nltk.org/book/ch02.html) 벵골어, 힌디어, 마라티어, 텔루구어의 품사 태그가 지정된 6만 단어입니다.
- [Hindi Movie Reviews Dataset](https://github.com/goru001/nlp-for-hindi) 약 1,000개 샘플과 3개 극성 클래스입니다.
- [BBC News Hindi Dataset](https://github.com/NirantK/hindi2vec/releases/tag/bbc-hindi-v0.1) 4,300개 샘플과 14개 클래스입니다.
- [IIT Patna Hindi ABSA Dataset](https://github.com/pnisarg/ABSA) 5,400개 샘플, 12개 도메인, 4,000개 측면 용어를 포함하며 측면 및 문장 수준 극성을 4개 클래스로 분류합니다.
- [Bangla ABSA](https://github.com/AtikRahman/Bangla_Datasets_ABSA) 5,500개 샘플, 2개 도메인, 10개 측면 용어입니다.
- [IIT Patna Movie Review Sentiment Dataset](https://www.iitp.ac.in/~ai-nlp-ml/resources.html) 2,000개 샘플과 3개 극성 레이블입니다.

#### 로그인/접근 권한이 필요한 코퍼스/데이터셋은 이메일로 신청할 수 있습니다

- [SAIL 2015](http://amitavadas.com/SAIL/) 힌디어, 벵골어, 타밀어, 텔루구어의 Twitter 및 Facebook 감성 레이블 샘플입니다.
- [IIT Bombay CFILT Resources](https://www.cfilt.iitb.ac.in/) - Sentiwordnet, 병렬 레이블 말뭉치, 의미 주석 말뭉치 및 마라티어 극성 레이블 말뭉치입니다.
- [TDIL-IC는 유용한 자료를 다수 통합하고 일반적으로 접근이 제한된 데이터셋에 대한 접근을 제공합니다](https://tdil-dc.in/index.php?option=com_catalogue&task=viewTools&id=83&lang=en)

### 언어 모델 및 단어 임베딩

- [Hindi2Vec](https://nirantk.com/hindi2vec/) 및 [nlp-for-hindi](https://github.com/goru001/nlp-for-hindi) ULMFiT 스타일 언어 모델입니다.
- [IIT Patna Bilingual Word Embeddings Hi-En](https://www.iitp.ac.in/~ai-nlp-ml/resources.html)
- [Common Crawl에서 학습한 다양한 언어의 FastText 단어 임베딩](https://fasttext.cc/docs/en/crawl-vectors.html)
- [Hindi and Bengali Word2Vec](https://github.com/Kyubyong/wordvectors)
- [Hindi and Urdu Elmo Model](https://github.com/HIT-SCIR/ELMoForManyLangs)
- [Sanskrit Albert](https://huggingface.co/surajp/albert-base-sanskrit) 산스크리트어 Wikipedia 및 OSCAR 말뭉치로 학습했습니다.

### 라이브러리 및 도구

- [Multi-Task Deep Morphological Analyzer](https://github.com/Saurav0074/mt-dma) - 힌디어와 우르두어용 심층 형태소 분석기입니다.
- [Indic NLP Library](https://github.com/anoopkunchukuttan/indic_nlp_library) - 18개 인도계 언어에서 토큰화, 음역 및 기계 번역 보조 기능을 제공합니다.
- [SivaReddy's Dependency Parser (Python3 port)](https://github.com/CalmDownKarm/sivareddydependencyparser) - 칸나다어, 힌디어, 텔루구어의 의존 구문 분석 및 품사 태깅을 수행합니다.
- [iNLTK](https://github.com/goru001/inltk) - PyTorch/Fastai 기반 인도계 언어 NLP 도구 모음입니다.
- [AI4Bharat IndicNLP Suite](https://ai4bharat.iitm.ac.in/) - 22개 인도계 언어의 도구, 데이터셋 및 모델입니다.

### 모델 및 임베딩

- [IndicBERT v2](https://github.com/AI4Bharat/IndicBERT) (2022-2024) - 23개 인도계 언어용 다국어 BERT입니다.
- [IndicTrans2](https://github.com/AI4Bharat/IndicTrans2) (2023-2024) - 22개 인도계 언어의 고품질 기계 번역입니다.
- [OpenHathi](https://huggingface.co/sarvamai/OpenHathi-7B-Hi-v0.1-Base) (Sarvam AI, 2023) - 힌디어-영어 이중 언어 LLaMA 연속 사전 학습 모델입니다.
- [Airavata](https://huggingface.co/ai4bharat/Airavata) (2024) - 지시 튜닝된 힌디어 LLM입니다.
- [Sarvam-1](https://www.sarvam.ai/blogs/sarvam-1) (2024) - 10개 인도계 언어로 처음부터 학습한 다국어 언어 모델입니다.
- [BharatGPT / Krutrim](https://www.olakrutrim.com/) (2024) - 인도계 언어 중심 기반 모델입니다.

</details>

<details>
<summary>

### 인도네시아어 NLP

</summary>

[맨 위로](#contents)

### 라이브러리 및 임베딩

- [bahasa](https://github.com/kangfend/bahasa) - 인도네시아어 자연어 처리 도구 모음입니다.
- [Indonesian Word Embedding](https://github.com/galuhsahid/indonesian-word-embedding)
- [Indonesian fastText](https://s3-us-west-1.amazonaws.com/fasttext-vectors/wiki.id.zip) Wikipedia로 학습한 모델입니다.
- [PySastrawi](https://github.com/har07/PySastrawi) - Sastrawi 어간 추출 알고리즘에 기반한 인도네시아어용 Python 어간 추출기입니다.

### 모델

- [IndoBERT (IndoNLU)](https://github.com/indobenchmark/indonlu) - IndoNLU 벤치마크 제품군과 함께 제공되는 사전 학습 인도네시아어 언어 모델입니다.
- [IndoBERT (IndoLEM)](https://github.com/indolem/indolem) - IndoLEM 벤치마크를 사용하는 또 다른 IndoBERT입니다.
- [NusaCrowd / Cendol](https://github.com/IndoNLP/nusa-crowd) (2023-2024) - 인도네시아어 및 지역 언어를 위한 대규모 커뮤니티 데이터셋과 Cendol 지시 튜닝 언어 모델입니다.
- [Sailor](https://github.com/sail-sg/sailor-llm) - 인도네시아어를 포함하는 공개 동남아시아 언어 모델입니다.
- [SEA-LION](https://github.com/aisingapore/sealion) (2024) - 인도네시아어 성능이 뛰어난 Singapore AI의 공개 동남아시아 언어 모델입니다.

### 데이터셋

- Kompas 및 Tempo 모음은 [ILPS](http://ilps.science.uva.nl/resources/bahasa/)에서 제공됩니다.
- [PANL10N for PoS tagging](http://www.panl10n.net/english/outputs/Indonesia/UI/0802/UI-1M-tagged.zip): 3만 9천 문장과 90만 단어 토큰입니다.
- [IDN for PoS tagging](https://github.com/famrashel/idn-tagged-corpus): 1만 문장과 25만 단어 토큰입니다.
- [Indonesian Treebank](https://github.com/famrashel/idn-treebank) and [Universal Dependencies-Indonesian](https://github.com/UniversalDependencies/UD_Indonesian-GSD)
- [IndoSum](https://github.com/kata-ai/indosum) - 텍스트 요약 및 분류 데이터셋입니다.
- [Wordnet-Bahasa](http://wn-msa.sourceforge.net/) - 대규모 무료 의미 사전입니다.
- [SEACrowd](https://github.com/SEACrowd/seacrowd-datahub) - 동남아시아 NLP를 위한 표준화된 데이터셋과 벤치마크를 제공하는 다국어·멀티모달 데이터 허브입니다(EMNLP 2024).

</details>

<details>
<summary>

### 한국어 NLP

</summary>

[맨 위로](#contents)

### 라이브러리

- [KoNLPy](http://konlpy.org) - 한국어 자연어 처리를 위한 Python 패키지입니다.
- [Mecab (Korean)](https://eunjeon.blogspot.com/) - 한국어 NLP용 C++ 라이브러리입니다.
- [KoalaNLP](https://koalanlp.github.io/koalanlp/) - 한국어 NLP용 Scala 라이브러리입니다.
- [KoNLP](https://cran.r-project.org/package=KoNLP) - 한국어 NLP용 R 패키지입니다.
- [kss](https://github.com/hyunwoongko/kss) - 한국어 문장 분리기입니다.
- [Kiwi](https://github.com/bab2min/Kiwi) - 빠른 한국어 형태소 분석기입니다.
- [Garu](https://github.com/ongjin/garu) - WebAssembly를 통해 클라이언트 측에서 완전히 실행되는 브라우저 내장 한국어 형태소 분석기입니다(1MB 모델, 오프라인, MIT 라이선스).

### 모델 및 임베딩

- [KoBERT](https://github.com/SKTBrain/KoBERT) - SKT의 한국어 BERT입니다.
- [KLUE-RoBERTa](https://github.com/KLUE-benchmark/KLUE) - KLUE 벤치마크로 학습한 모델입니다.
- [Polyglot-Ko](https://github.com/EleutherAI/polyglot) - 공개 한국어 언어 모델입니다.
- [EXAONE 3.5](https://github.com/LG-AI-EXAONE) (LG, 2024) - 한국어-영어 이중 언어 공개 언어 모델 계열입니다.
- [HyperCLOVA X](https://www.ncloud.com/product/aiService/clovaStudio) - Naver의 한국어 기반 모델입니다.

### 블로그 및 튜토리얼

- [dsindex's blog](https://dsindex.github.io/)
- [Kangwon University's NLP course in Korean](http://cs.kangwon.ac.kr/~leeck/NLP/)

### 데이터셋

- [KAIST Corpus](http://semanticweb.kaist.ac.kr/home/index.php/KAIST_Corpus) - 한국과학기술원에서 제공하는 한국어 말뭉치입니다.
- [Naver Sentiment Movie Corpus in Korean](https://github.com/e9t/nsmc/)
- [Chosun Ilbo archive](http://srchdb1.chosun.com/pdf/i_archive/) - 한국의 주요 신문에서 제공하는 한국어 데이터셋입니다.
- [Chat data](https://github.com/songys/Chatbot_data) - 한국어 챗봇 데이터입니다.
- [Petitions](https://github.com/akngs/petitions) - 청와대 국민청원 사이트의 종료된 청원 데이터입니다.
- [Korean Parallel corpora](https://github.com/j-min/korean-parallel-corpora) - 한국어-프랑스어 및 한국어-영어 신경망 기계 번역 데이터셋입니다.
- [KorQuAD](https://korquad.github.io/) - 위키 HTML 원문을 포함하는 한국어 SQuAD 데이터셋(v1.0 및 v2.1)입니다.

</details>

<details>
<summary>

### 페르시아어 NLP

</summary>

[맨 위로](#contents)

### 라이브러리

- [Hazm](https://github.com/roshan-research/hazm) - 페르시아어 NLP 도구 모음입니다.
- [Parsivar](https://github.com/ICTRC/Parsivar) - 페르시아어 처리 도구 모음입니다.
- [Perke](https://github.com/AlirezaTheH/perke) - 페르시아어 핵심 구 추출 도구입니다.
- [Perstem](https://github.com/jonsafari/perstem) - 페르시아어 어간 추출기, 형태소 분석기 및 부분 품사 태거입니다.
- [ParsiAnalyzer](https://github.com/NarimanN2/ParsiAnalyzer) - Elasticsearch용 페르시아어 분석기입니다.
- [virastar](https://github.com/aziz/virastar) - 페르시아어 텍스트 정리 도구입니다.

### 모델

- [ParsBERT](https://github.com/hooshvare/parsbert) - 페르시아어 BERT입니다.
- [PersianMind](https://huggingface.co/universitytehran/PersianMind-v1.0) (2023-2024) - 지시 튜닝된 페르시아어 언어 모델입니다.
- [Dorna](https://huggingface.co/PartAI/Dorna-Llama3-8B-Instruct) (Part AI, 2024) - Llama 3 기반 페르시아어 지시 모델입니다.

### 데이터셋

- [Bijankhan Corpus](https://dbrg.ut.ac.ir/بیژن%E2%80%8Cخان/) - 페르시아어 NLP 연구에 적합한 태그 말뭉치로, 40개 품사 태그에 걸친 수작업 태깅 단어 약 260만 개를 포함합니다.
- [Uppsala Persian Corpus (UPC)](https://sites.google.com/site/mojganserajicom/home/upc) - 품사 태그 31개가 주석된 270만 토큰 규모의 대규모 무료 페르시아어 말뭉치입니다.
- [Large-Scale Colloquial Persian](http://hdl.handle.net/11234/1-3195) - LSCP: 2,700만 개의 일상 페르시아어 트윗에서 추출한 1억 2천만 문장에 의존 구문, 품사 및 감성 주석을 포함합니다.
- [ArmanPersoNERCorpus](https://github.com/HaniehP/PersianNER) - IOB 형식의 NER 태그가 포함된 7,682개 문장, 25만 토큰입니다.
- [FarsiYar PersianNER](https://github.com/Text-Mining/Persian-NER) - [Persian Wikipedia Corpus](https://github.com/Text-Mining/Persian-Wikipedia-Corpus)에서 추출한 페르시아어 문장 약 100만 개, 토큰 약 2,500만 개입니다.
- [PERLEX](http://farsbase.net/PERLEX.html) - 관계 추출을 위한 최초의 페르시아어 데이터셋입니다(SemEval-2010 Task 8 번역본).
- [Persian Syntactic Dependency Treebank](http://dadegan.ir/catalog/perdt) - 페르시아어 결합가 사전의 동사 대부분을 포괄하는 주석 문장 29,982개입니다.
- [Uppsala Persian Dependency Treebank (UPDT)](http://stp.lingfil.uu.se/~mojgan/UPDT.html) - 의존 구문 기반으로 주석된 말뭉치입니다.
- [Hamshahri](https://dbrg.ut.ac.ir/hamshahri/) - CLEF 2008~2009에서 사용된 표준적이고 신뢰할 수 있는 페르시아어 텍스트 모음입니다.

</details>

<details>
<summary>

### 폴란드어 NLP

</summary>

[맨 위로](#contents)

- [Polish-NLP](https://github.com/ksopyla/awesome-nlp-polish) - 모델, 도구 및 데이터셋 등 폴란드어 NLP 자료를 엄선한 목록입니다.

</details>

<details>
<summary>

### 포르투갈어 NLP

</summary>

[맨 위로](#contents)

- [Portuguese-nlp](https://github.com/ajdavidl/Portuguese-NLP) - 포르투갈어 NLP 자료와 도구를 엄선한 목록입니다.

### 모델

- [BERTimbau](https://github.com/neuralmind-ai/portuguese-bert) - 브라질 포르투갈어용 BERT입니다.
- [Sabiá](https://huggingface.co/maritaca-ai) (Maritaca AI, 2023-2024) - 포르투갈어 중심 공개 언어 모델입니다.
- [Albertina](https://huggingface.co/PORTULAN) (PORTULAN, 2023-2024) - 유럽 포르투갈어(PT-PT)와 브라질 포르투갈어(PT-BR)를 모두 지원하는 인코더 전용 언어 모델입니다.

</details>

<details>
<summary>

### 스페인어 NLP

</summary>

[맨 위로](#contents)

### 라이브러리

- [spanlp](https://github.com/jfreddypuentes/spanlp) - 스페인어 욕설, 혐오 발언 및 괴롭힘을 탐지·검열·정리하는 Python 라이브러리로, 스페인어 사용 21개국의 데이터를 사용합니다.

### 데이터

- [Columbian Political Speeches](https://github.com/dav009/LatinamericanTextResources)
- [Copenhagen Treebank](https://mbkromann.github.io/copenhagen-dependency-treebank/)
- [Spanish Billion Words Corpus with Word2Vec embeddings](https://github.com/crscardellino/sbwce)
- [Compilation of Spanish Unannotated Corpora](https://github.com/josecannete/spanish-unannotated-corpora)

### 모델 및 임베딩

- [BETO](https://github.com/dccuchile/beto) - 스페인어용 BERT입니다.
- [RoBERTa-bne](https://huggingface.co/PlanTL-GOB-ES/roberta-base-bne) - 스페인 국립도서관 말뭉치로 학습한 스페인어 RoBERTa입니다.
- [Latxa](https://github.com/hitz-zentroa/latxa) (2024) - 스페인어도 지원하는 바스크어용 공개 기반 언어 모델입니다.
- [Salamandra](https://huggingface.co/BSC-LT/salamandra-7b) (BSC, 2024) - Barcelona Supercomputing Center의 다국어 언어 모델로, 스페인어 지원이 강력합니다.
- [RigoChat](https://huggingface.co/IIC/RigoChat-7b-v2) (2024) - 스페인어 지시 튜닝 공개 모델입니다.
- [Spanish Word Embeddings (multiple methods/corpora)](https://github.com/dccuchile/spanish-word-embeddings)
- [Spanish fastText Embeddings](https://github.com/BotCenter/spanishWordEmbeddings)
- [Spanish sent2vec Sentence Embeddings](https://github.com/BotCenter/spanishSent2Vec)

</details>

<details>
<summary>

### 태국어 NLP

</summary>

[맨 위로](#contents)

### 라이브러리

- [PyThaiNLP](https://github.com/PyThaiNLP/pythainlp) - Python용 태국어 NLP입니다.
- [JTCC](https://github.com/wittawatj/jtcc) - Java 문자 클러스터 라이브러리입니다.
- [CutKum](https://github.com/pucktada/cutkum) - TensorFlow 딥러닝을 사용한 단어 분할 도구입니다.
- [Thai Language Toolkit](https://pypi.python.org/pypi/tltk/) - 토큰화 및 품사 태깅을 제공합니다.
- [SynThai](https://github.com/KenjiroAI/SynThai) - 딥러닝을 사용한 단어 분할 및 품사 태깅입니다.

### 모델

- [WangchanBERTa](https://github.com/vistec-AI/thai2transformers) - 사전 학습 태국어 언어 모델입니다.
- [Typhoon](https://huggingface.co/scb10x) (SCB 10X, 2024) - 공개 태국어 LLM 계열입니다.
- [OpenThaiGPT](https://huggingface.co/openthaigpt) (2023-2024) - 공개 태국어 지시 튜닝 모델입니다.
- [Sailor](https://github.com/sail-sg/sailor-llm) - 태국어를 포괄하는 공개 동남아시아 언어 모델 계열입니다.

### 데이터

- [Inter-BEST](https://www.nectec.or.th/corpus/index.php?league=pm) - 500만 단어와 단어 분할 정보를 포함하는 텍스트 말뭉치입니다.
- [Prime Minister 29](https://github.com/PyThaiNLP/lexicon-thai/tree/master/thai-corpus/Prime%20Minister%2029) - 태국 현 총리의 연설 데이터셋입니다.

</details>

<details>
<summary>

### 우크라이나어 NLP

</summary>

[맨 위로](#contents)

- [awesome-ukrainian-nlp](https://github.com/asivokon/awesome-ukrainian-nlp) - 우크라이나어 NLP 데이터셋, 모델 등을 엄선한 목록입니다.
- [UkrainianLT](https://github.com/Helsinki-NLP/UkrainianLT) - 기계 번역과 음성 처리에 중점을 둔 엄선 목록입니다.

</details>

<details>
<summary>

### 우르두어 NLP

</summary>

[맨 위로](#contents)

### 라이브러리

- [urduhack](https://github.com/urduhack/urduhack) - 우르두어 NLP 라이브러리입니다.

### 데이터셋

- [우르두어 데이터셋 모음](https://github.com/mirfan899/Urdu) - 품사 태깅, NER 및 기타 NLP 작업을 위한 자료입니다.

</details>

<details>
<summary>

### 우즈베크어 NLP

</summary>

[맨 위로](#contents)

### 데이터셋

- [SOAS English-Uzbek RAG Evaluation](https://github.com/rajantripathi/soas-rag-evaluation) - 문화적 맥락을 반영한 RAG를 위한 이중 언어 검색 평가 벤치마크입니다. 400개 행, 영어+우즈베크어, MIT/CC-BY-4.0 라이선스입니다.

</details>

<details>
<summary>

### 베트남어 NLP

</summary>

[맨 위로](#contents)

### 라이브러리

- [underthesea](https://github.com/undertheseanlp/underthesea) - 베트남어 NLP 도구 모음입니다.
- [vn.vitk](https://github.com/phuonglh/vn.vitk) - 베트남어 텍스트 처리 도구 모음입니다.
- [VnCoreNLP](https://github.com/vncorenlp/VnCoreNLP) - 베트남어 NLP 도구 모음입니다.
- [pyvi](https://github.com/trungtv/pyvi) - 핵심 베트남어 NLP 기능을 제공하는 Python 도구 모음입니다.
- [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - 음성 복제를 지원하는 온디바이스 베트남어 텍스트 음성 변환입니다.

### 모델 및 임베딩

- [PhoBERT](https://github.com/VinAIResearch/PhoBERT) - 베트남어 사전 학습 언어 모델입니다.
- [BARTpho](https://github.com/VinAIResearch/BARTpho) - 베트남어 seq2seq 사전 학습 모델입니다.
- [PhoGPT](https://github.com/VinAIResearch/PhoGPT) (VinAI, 2023-2024) - 베트남어 공개 생성형 언어 모델입니다.
- [Vistral](https://huggingface.co/Viet-Mistral/Vistral-7B-Chat) (2024) - Mistral 기반 베트남어 채팅 모델입니다.
- [Sailor](https://github.com/sail-sg/sailor-llm) (2024) - 베트남어, 태국어, 인도네시아어 및 기타 동남아시아 언어를 포괄하는 공개 다국어 언어 모델 계열입니다.

### 데이터

- [Vietnamese Treebank](https://vlsp.hpda.vn/demo/?page=resources&lang=en) - 구구조 분석 작업을 위한 1만 문장입니다.
- [BKTreeBank](https://arxiv.org/pdf/1710.05519.pdf) - 베트남어 의존 구문 트리뱅크입니다.
- [UD_Vietnamese](https://github.com/UniversalDependencies/UD_Vietnamese-VTB) - 베트남어 Universal Dependencies 트리뱅크입니다.
- [VIVOS](https://ailab.hcmus.edu.vn/vivos/) - 15시간 녹음 음성을 포함하는 무료 베트남어 음성 말뭉치(HCMUS AILab)입니다.
- [VNTQcorpus(big).txt](http://viet.jnlp.org/download-du-lieu-tu-vung-corpus) - 뉴스 문장 175만 개입니다.
- [ViText2SQL](https://github.com/VinAIResearch/ViText2SQL) - 베트남어 Text-to-SQL 의미 파싱 데이터셋(EMNLP-2020 Findings)입니다.
- [EVB Corpus](https://github.com/qhungngo/EVBCorpus) - 이중 언어 도서 15권의 2,000만 단어, 영어-베트남어 병렬 텍스트 100개, 병렬 법률 텍스트 250개, 뉴스 기사 5,000개, 영화 자막 2,000개를 포함합니다.

</details>

### 기타 언어

- 러시아어: [pymorphy2](https://github.com/kmike/pymorphy2) - 러시아어 품사 태거로 유용합니다.
- 아시아 언어: 태국어, 라오어, 중국어, 일본어 및 한국어를 위한 ElasticSearch의 [ICU Tokenizer](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu-tokenizer.html) 구현입니다.
- 고대 언어: [CLTK](https://github.com/cltk/cltk) - Classical Language Toolkit은 고대 언어 NLP용 Python 라이브러리이자 텍스트 모음입니다.
- 히브리어: [NLPH_Resources](https://github.com/NLPH/NLPH_Resources) - 히브리어 NLP 논문, 말뭉치 및 언어 자료 모음입니다.

[맨 위로](#contents)

## 관련 항목

이 목록의 범위 밖에 있는 관련 주제별 엄선 목록:

- [awesome-llm](https://github.com/Hannibal046/Awesome-LLM) - 범용 대규모 언어 모델 자료입니다.
- [awesome-generative-ai](https://github.com/steven2358/awesome-generative-ai) - 여러 모달리티를 포괄하는 생성형 AI입니다.
- [awesome-rag](https://github.com/Danielskry/Awesome-RAG) - 검색 증강 생성 시스템 및 도구입니다.
- [awesome-prompt-engineering](https://github.com/promptslab/Awesome-Prompt-Engineering) - 프롬프트 기법 및 템플릿 라이브러리입니다.
- [awesome-mlops](https://github.com/visenger/awesome-mlops) - LLM 서빙을 포함한 운영 ML입니다.

## 인용

이 저장소가 유용하다면 이 목록을 인용해 주세요:

```bibtex
@misc{awesome-nlp,
  title  = {Awesome NLP},
  author = {Kim, Keon Woo},
  year   = {2018},
  url    = {https://github.com/keon/awesome-nlp},
  note   = {GitHub repository}
}
```

## 라이선스
[라이선스](./LICENSE) - CC0
