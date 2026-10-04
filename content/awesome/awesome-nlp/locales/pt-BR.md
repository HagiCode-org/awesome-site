# awesome-nlp

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

---

> **Sponsored by [Atlas Cloud](https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp)**
>
> <a href="https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/atlas-cloud-dark.png"><img src="assets/atlas-cloud-light.png" alt="Atlas Cloud" width="220" /></picture></a>
>
> **Plataforma de agregação de APIs de IA com endpoint LLM compatível com OpenAI** para tarefas de PLN como tradução, sumarização, geração multilíngue e extração estruturada.

---

Uma seleção de recursos dedicados ao processamento de linguagem natural.

_Leia as [diretrizes de contribuição](contributing.md) antes de contribuir. Adicione seu recurso favorito de PLN abrindo uma [solicitação de pull](https://github.com/keonkim/awesome-nlp/pulls)._

## Escopo

Esta lista abrange o processamento de linguagem natural: análise linguística, ferramentas multilíngues, métodos clássicos e neurais, conjuntos de dados e avaliação. Modelos de linguagem grandes só são incluídos quando promovem ou avaliam uma tarefa ou capacidade central de PLN (tokenização, multilinguismo, tradução automática, sumarização, reconhecimento de entidades, perguntas e respostas, factualidade, sondagem e destilação). Chatbots de uso geral, frameworks de agentes, repositórios de modelos de prompts, ferramentas de geração de código e kits iniciais de aplicações RAG estão em outras listas — consulte [Veja também](#see-also).

## Sumário

* [Resumos e tendências de pesquisa](#research-summaries-and-trends)
* [Laboratórios de pesquisa em PLN de destaque](#prominent-nlp-research-labs)
* [Tutoriais](#tutorials)
  * [Leituras](#reading-content)
  * [Vídeos e cursos](#videos-and-online-courses)
  * [Livros](#books)
* [Bibliotecas](#libraries)
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
* [Serviços](#services)
* [Ferramentas de anotação](#annotation-tools)
* [Tarefas e métodos](#tasks-and-methods)
  * [Representações vetoriais de texto](#text-embeddings)
  * [Tokenização, morfologia e segmentação](#tokenization-morphology-and-segmentation)
  * [Etiquetagem morfossintática e análise de dependências](#pos-tagging-and-dependency-parsing)
  * [Reconhecimento de entidades nomeadas e extração de informações](#named-entity-recognition-and-information-extraction)
  * [Resolução de correferência](#coreference-resolution)
  * [Classificação de texto e análise de sentimentos](#text-classification-and-sentiment-analysis)
  * [Modelagem de tópicos](#topic-modeling)
  * [Sumarização](#summarization)
  * [Tradução automática](#machine-translation)
  * [Perguntas e respostas e compreensão de leitura](#question-answering-and-reading-comprehension)
  * [Extração de informações além do reconhecimento de entidades](#information-extraction-beyond-ner)
  * [Recuperação e representações vetoriais](#retrieval-and-embeddings)
  * [Fala e texto](#speech-and-text)
* [Conjuntos de dados](#datasets)
* [Frameworks de PLN multilíngues](#multilingual-nlp-frameworks)
* [Modelos de linguagem para PLN](#language-models-for-nlp)
  * [Pré-treinamento e adaptação](#pretraining-and-adaptation)
  * [Modelos multilíngues e interlinguísticos](#multilingual-and-cross-lingual-models)
  * [Avaliação e benchmarks](#evaluation-and-benchmarks)
  * [Raciocínio e computação em tempo de inferência](#reasoning-and-test-time-compute)
  * [Contexto longo e arquiteturas alternativas](#long-context-and-alternative-architectures)
  * [Factualidade, alucinação e calibração](#factuality-hallucination-calibration)
  * [Sondagem e interpretabilidade](#probing-and-interpretability)
  * [Modelos de linguagem pequenos e eficientes](#efficient-and-small-language-models)
  * [Ajuste por instruções e otimização de preferências](#instruction-tuning-and-preference-optimization)
  * [Viés, equidade e segurança em PLN](#bias-fairness-safety-in-nlp)
* [PLN por idioma](#nlp-per-language)
  * [PLN em árabe](#nlp-in-arabic)
  * [PLN em chinês](#nlp-in-chinese)
  * [PLN em dinamarquês](#nlp-in-danish)
  * [PLN em neerlandês](#nlp-in-dutch)
  * [PLN em alemão](#nlp-in-german)
  * [PLN em húngaro](#nlp-in-hungarian)
  * [PLN em idiomas índicos](#nlp-in-indic-languages)
  * [PLN em indonésio](#nlp-in-indonesian)
  * [PLN em coreano](#nlp-in-korean)
  * [PLN em persa](#nlp-in-persian)
  * [PLN em polonês](#nlp-in-polish)
  * [PLN em português](#nlp-in-portuguese)
  * [PLN em espanhol](#nlp-in-spanish)
  * [PLN em tailandês](#nlp-in-thai)
  * [PLN em ucraniano](#nlp-in-ukrainian)
  * [PLN em urdu](#nlp-in-urdu)
  * [PLN em uzbeque](#nlp-in-uzbek)
  * [PLN em vietnamita](#nlp-in-vietnamese)
  * [Outros idiomas](#other-languages)
* [Veja também](#see-also)
* [Citação](#citation)

## Resumos e tendências de pesquisa

Onde acompanhar as pesquisas atuais em PLN:

* [ACL Anthology](https://aclanthology.org/) - arquivo de referência de artigos da ACL, EMNLP, NAACL, EACL, COLING e eventos relacionados.
* [NLP-Progress](https://nlpprogress.com/) - acompanha resultados de ponta em tarefas e conjuntos de dados comuns de PLN.
* [Papers With Code: NLP](https://paperswithcode.com/area/natural-language-processing) - artigos, benchmarks e rankings de tarefas de PLN.
* [Sebastian Ruder's newsletter](https://newsletter.ruder.io/) - resumos regulares de pesquisas e tendências em PLN.
* [ACL Rolling Review](https://aclrollingreview.org/) - processo contínuo de revisão que alimenta eventos afiliados à ACL.
* [The Gradient](https://thegradient.pub/) - ensaios extensos sobre aprendizado de máquina e pesquisa em PLN.
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp) - resumos ilustrados de artigos recentes.

### Destaques históricos

* [NLP's ImageNet moment has arrived](https://thegradient.pub/nlp-imagenet/) - ensaio de 2018 sobre a ascensão dos modelos de linguagem pré-treinados.
* [Survey of the State of the Art in Natural Language Generation](https://arxiv.org/abs/1703.09902) - levantamento de 2017 sobre geração de linguagem natural.
* [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) and [The Illustrated BERT, ELMo, and co.](https://jalammar.github.io/illustrated-bert/) - explicações visuais de referência.

## Laboratórios de pesquisa em PLN de destaque
[Voltar ao topo](#contents)

* [The Berkeley NLP Group](http://nlp.cs.berkeley.edu/index.shtml) - Entre suas contribuições notáveis está uma ferramenta para reconstruir idiomas extintos há muito tempo, mencionada [aqui](https://www.bbc.com/news/science-environment-21427896), que usa corpora de 637 idiomas falados atualmente na Ásia e no Pacífico para recriar seus descendentes.
* [Language Technologies Institute, Carnegie Mellon University](http://www.cs.cmu.edu/~nasmith/nlp-cl.html) - Entre os projetos notáveis estão o [Avenue Project](http://www.cs.cmu.edu/~avenue/), um sistema de tradução automática orientado por sintaxe para idiomas ameaçados, como quéchua e aimará, e, anteriormente, o [Noah's Ark](http://www.cs.cmu.edu/~ark/), que criou o [AQMAR](http://www.cs.cmu.edu/~ark/AQMAR/) para aprimorar ferramentas de PLN para o árabe.
* [NLP research group, Columbia University](http://www1.cs.columbia.edu/nlp/index.cgi) - Responsável pela criação do BOLT (tratamento interativo de erros para sistemas de tradução de fala) e de um projeto sem nome para caracterizar o riso em diálogos.
* [The Center or Language and Speech Processing, John Hopkins University](http://clsp.jhu.edu/) - Ganhou destaque recentemente por desenvolver software de reconhecimento de fala para criar um teste diagnóstico da doença de Parkinson, [veja aqui](https://www.clsp.jhu.edu/2019/03/27/speech-recognition-software-and-machine-learning-tools-are-being-used-to-create-diagnostic-test-for-parkinsons-disease/#.XNFqrIkzYdU).
* [Computational Linguistics and Information Processing Group, University of Maryland](https://wiki.umiacs.umd.edu/clip/index.php/Main_Page) - Entre as contribuições notáveis estão [Human-Computer Cooperation or Word-by-Word Question Answering](http://www.umiacs.umd.edu/~jbg/projects/IIS-1652666) e a modelagem do desenvolvimento de representações fonéticas.
* [Penn Natural Language Processing, University of Pennsylvania](https://nlp.cis.upenn.edu/) - conhecido por criar o [Penn Treebank](https://catalog.ldc.upenn.edu/LDC99T42) e o [Penn Discourse Treebank](https://www.cis.upenn.edu/~pdtb/).
* [The Stanford Nautral Language Processing Group](https://nlp.stanford.edu/)- Um dos principais laboratórios de pesquisa em PLN do mundo, conhecido por criar o [Stanford CoreNLP](https://nlp.stanford.edu/software/corenlp.shtml) e seu [sistema de resolução de correferência](https://nlp.stanford.edu/software/dcoref.shtml).


## Tutoriais
[Voltar ao topo](#contents)

### Leituras

Aprendizado de máquina geral

* [Machine Learning 101](https://docs.google.com/presentation/d/1kSuQyW5DTnkVaZEjGYCkfOxvzCqGEFzWBy4e9Uedd9k/edit?usp=sharing) - apresentação de um engenheiro criativo sênior do Google que explica aprendizado de máquina tanto para engenheiros quanto para executivos.
* [AI Playbook](https://aiplaybook.a16z.com/) - um ótimo guia de IA da a16z para compartilhar com gestores ou usar como conteúdo em apresentações.
* [Sebastian Ruder's Newsletter](https://newsletter.ruder.io/) - comentários sobre o melhor da pesquisa em PLN.
* [How To Label Data](https://www.lighttag.io/how-to-label-data/) - guia para gerenciar projetos maiores de anotação linguística.
* [Depends on the Definition](https://www.depends-on-the-definition.com/) - coleção de publicações de blog que aborda uma ampla variedade de tópicos de PLN com implementações detalhadas.

Introduções e guias de PLN

* [Understand & Implement Natural Language Processing](https://www.analyticsvidhya.com/blog/2017/01/ultimate-guide-to-understand-implement-natural-language-processing-codes-in-python/)
* [NLP in Python](http://github.com/NirantK/nlp-python-deep-learning) - coleção de notebooks do GitHub.
* [Natural Language Processing: An Introduction](https://academic.oup.com/jamia/article/18/5/544/829676) - Universidade de Oxford.
* [NLP from Scratch with PyTorch](https://pytorch.org/tutorials/intermediate/nlp_from_scratch_index.html)
* [Hands-On NLTK Tutorial](https://github.com/hb20007/hands-on-nltk-tutorial) - tutoriais do NLTK em notebooks Jupyter.
* [Natural Language Processing with Python – Analyzing Text with the Natural Language Toolkit](https://www.nltk.org/book/) - livro on-line e impresso que apresenta conceitos de PLN usando o NLTK. Os autores do livro também criaram a biblioteca NLTK.
* [Train a new language model from scratch](https://huggingface.co/blog/how-to-train) - Hugging Face 🤗
* [Advanced NLP with spaCy](https://course.spacy.io/en/) - curso on-line gratuito que aborda processamento de texto, análise de dados em larga escala, pipelines de processamento e treinamento de modelos de redes neurais para tarefas personalizadas de PLN.
* [Kaggle NLP Learning Guide](https://www.kaggle.com/learn-guide/natural-language-processing) - tutoriais para iniciantes, incluindo guias de introdução, aprendizado profundo para PLN e explicações visuais de técnicas como BERT, GloVe e TF-IDF.

Blogs e newsletters

* [Deep Learning, NLP, and Representations](https://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
* [The Illustrated BERT, ELMo, and co. (How NLP Cracked Transfer Learning)](https://jalammar.github.io/illustrated-bert/) and [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
* [Natural Language Processing](https://nlpers.blogspot.com/) por Hal Daumé III
* [arXiv: Natural Language Processing (Almost) from Scratch](https://arxiv.org/pdf/1103.0398.pdf)
* [Karpathy's The Unreasonable Effectiveness of Recurrent Neural Networks](https://karpathy.github.io/2015/05/21/rnn-effectiveness)
* [Machine Learning Mastery: Deep Learning for Natural Language Processing](https://machinelearningmastery.com/category/natural-language-processing)
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp)

### Vídeos e cursos on-line
[Voltar ao topo](#contents)

* [Advanced Natural Language Processing](https://people.cs.umass.edu/~miyyer/cs685_f20/) - disciplina CS 685 do departamento de Ciência da Computação da UMass Amherst.
* [Deep Natural Language Processing](https://github.com/oxford-cs-deepnlp-2017/lectures) - série de aulas da Universidade de Oxford.
* [Deep Learning for Natural Language Processing (cs224-n)](https://web.stanford.edu/class/cs224n/) - curso de Stanford de Richard Socher e Christopher Manning.
* [Neural Networks for NLP](http://phontron.com/class/nn4nlp2017/) - curso do Language Technology Institute da Carnegie Mellon.
* [Deep NLP Course](https://github.com/yandexdataschool/nlp_course) da Yandex Data School, que aborda ideias importantes desde embeddings de texto até tradução automática, incluindo modelagem de sequências, modelos de linguagem e outros tópicos.
* [fast.ai Code-First Intro to Natural Language Processing](https://www.fast.ai/2019/07/08/fastai-nlp/) - combina tópicos tradicionais de PLN (incluindo expressões regulares, SVD, Bayes ingênuo e tokenização) com abordagens recentes de redes neurais (incluindo RNNs, seq2seq, GRUs e Transformer), além de abordar questões éticas urgentes, como viés e desinformação. Os notebooks Jupyter estão disponíveis [aqui](https://github.com/fastai/course-nlp).
* [Machine Learning University - Accelerated Natural Language Processing](https://www.youtube.com/playlist?list=PL8P_Z6C4GcuWfAq8Pt6PBYlck4OprHXsw) - as aulas vão da introdução ao PLN e ao processamento de texto até redes neurais recorrentes e Transformers.
O material está disponível [aqui](https://github.com/aws-samples/aws-machine-learning-university-accelerated-nlp).
* [Applied Natural Language Processing](https://www.youtube.com/playlist?list=PLH-xYrxjfO2WyR3pOAB006CYMhNt4wTqp)- série de aulas do IIT Madras que vai dos fundamentos até autoencoders e outros temas. Os notebooks GitHub do curso também estão disponíveis [aqui](https://github.com/Ramaseshanr/anlp).
* [DeepLearning.AI Natural Language Processing Specialization](https://www.deeplearning.ai/courses/natural-language-processing-specialization/) - programa de quatro cursos que aborda análise de sentimentos, embeddings de palavras, RNNs, LSTMs, mecanismos de atenção e modelos Transformer como BERT e T5 para tarefas como tradução automática e sumarização.
* [Stanford CS336: Language Modeling from Scratch](https://stanford-cs336.github.io/) - curso completo sobre a construção de modelos de linguagem, incluindo dados, tokenização, treinamento e avaliação.
* [Stanford CS25: Transformers United](https://web.stanford.edu/class/cs25/) - série de seminários com palestras de autores de pesquisas recentes sobre Transformers e PLN.
* [Cohere LLM University](https://cohere.com/llmu) - curso gratuito sobre LLMs, embeddings, busca semântica e aplicações de PLN.
* [Hugging Face NLP Course](https://huggingface.co/learn/nlp-course) - curso prático de PLN com as bibliotecas Transformers, Datasets e Tokenizers.
* [NLP Demystified](https://www.nlpdemystified.org/) - curso gratuito e acessível a iniciantes que aborda os fundamentos de PLN até Transformers, com notebooks Python/Jupyter.


### Livros

* [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) - gratuito, de autoria do Prof. Dan Jurafsky.
* [Natural Language Processing](https://github.com/jacobeisenstein/gt-nlp-class) - anotações gratuitas de PLN do Dr. Jacob Eisenstein, da Georgia Tech.
* [NLP with PyTorch](https://github.com/joosthub/PyTorchNLPBook) - Brian & Delip Rao
* [Text Mining in R](https://www.tidytextmining.com)
* [Natural Language Processing with Python](https://www.nltk.org/book/)
* [Practical Natural Language Processing](https://www.oreilly.com/library/view/practical-natural-language/9781492054047/)
* [Natural Language Processing with Spark NLP](https://www.oreilly.com/library/view/natural-language-processing/9781492047759/)
* [Deep Learning for Natural Language Processing](https://www.manning.com/books/deep-learning-for-natural-language-processing) por Stephan Raaijmakers.
* [Real-World Natural Language Processing](https://www.manning.com/books/real-world-natural-language-processing) - por Masato Hagiwara.
* [Natural Language Processing in Action, Second Edition](https://www.manning.com/books/natural-language-processing-in-action-second-edition) - por Hobson Lane e Maria Dyshel.
* [Transformers in Action](https://www.manning.com/books/transformers-in-action) - por Nicole Koenigstein.
* [The Math Behind Artificial Intelligence](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book) - por Tiago Monteiro | Livro gratuito do FreeCodeCamp que ensina, em inglês simples e sob uma perspectiva de engenharia, a matemática por trás da IA. Aborda álgebra linear, cálculo, probabilidade e estatística e teoria da otimização, com analogias, aplicações reais e exemplos de código Python.
  
## Bibliotecas

[Voltar ao topo](#contents)

* <a id="node-js">**Node.js e JavaScript** - Bibliotecas de PLN para Node.js</a> | [Voltar ao topo](#contents)
  * [Twitter-text](https://github.com/twitter/twitter-text) - implementação em JavaScript da biblioteca de processamento de texto do Twitter.
  * [Knwl.js](https://github.com/benhmoore/Knwl.js) - processador de linguagem natural em JS.
  * [Retext](https://github.com/retextjs/retext) - sistema extensível para analisar e manipular linguagem natural.
  * [NLP Compromise](https://github.com/spencermountain/compromise) - processamento de linguagem natural no navegador.
  * [Natural](https://github.com/NaturalNode/natural) - recursos gerais de linguagem natural para Node.
  * [Poplar](https://github.com/synyi/poplar) - ferramenta web de anotação para processamento de linguagem natural (PLN).
  * [NLP.js](https://github.com/axa-group/nlp.js) - biblioteca de PLN para criar bots.
  * [node-question-answering](https://github.com/huggingface/node-question-answering) - perguntas e respostas rápidas e prontas para produção com DistilBERT no Node.js.

* <a id="python"> **Python** - Bibliotecas de PLN para Python</a> | [Voltar ao topo](#contents)
  - [sentimental-onix](https://github.com/sloev/sentimental-onix) modelos de sentimentos para spaCy usando ONNX.
  - [TextAttack](https://github.com/QData/TextAttack) - ataques adversariais, treinamento adversarial e aumento de dados em PLN.
  - [TextBlob](http://textblob.readthedocs.org/) - oferece uma API consistente para tarefas comuns de processamento de linguagem natural (PLN). Apoia-se no trabalho de referência do [Natural Language Toolkit (NLTK)](https://www.nltk.org/) e do [Pattern](https://github.com/clips/pattern), e funciona bem com ambos :+1:
  - [spaCy](https://github.com/explosion/spaCy) - PLN de nível industrial com Python e Cython :+1:
    - [textacy](https://github.com/chartbeat-labs/textacy) - PLN de nível mais alto, desenvolvido sobre o spaCy.
  - [gensim](https://radimrehurek.com/gensim/index.html) - biblioteca Python para modelagem semântica não supervisionada a partir de texto simples :+1:
  - [scattertext](https://github.com/JasonKessler/scattertext) - biblioteca Python para gerar visualizações d3 de diferenças linguísticas entre corpora.
  - [GluonNLP](https://github.com/dmlc/gluon-nlp) *(arquivado)* - kit de ferramentas de aprendizado profundo para PLN, desenvolvido com MXNet/Gluon.
  - [AllenNLP](https://github.com/allenai/allennlp) *(arquivado)* - biblioteca de pesquisa em PLN, baseada em PyTorch, para desenvolver modelos de aprendizado profundo de ponta em diversas tarefas linguísticas.
  - [PyTorch-NLP](https://github.com/PetrochukM/PyTorch-NLP) - kit de pesquisa em PLN que facilita a prototipagem rápida com carregadores de dados e vetores de palavras aprimorados, representações de camadas de redes neurais e métricas comuns de PLN, como BLEU.
  - [Rosetta](https://github.com/columbia-applied-data-science/rosetta) - ferramentas e wrappers de processamento de texto (por exemplo, Vowpal Wabbit).
  - [PyNLPl](https://github.com/proycon/pynlpl) - biblioteca Python de processamento de linguagem natural. Biblioteca de PLN de uso geral que também lida com formatos específicos, como modelos de linguagem ARPA, tabelas de frases Moses e alinhamentos GIZA++.
  - [foliapy](https://github.com/proycon/foliapy) - biblioteca Python para trabalhar com [FoLiA](https://proycon.github.io/folia/), formato XML para anotação linguística.
  - [PySS3](https://github.com/sergioburdisso/pyss3) - pacote Python que implementa o classificador de texto caixa-branca SS3; inclui ferramentas interativas de visualização que explicam as previsões.
  - [jPTDP](https://github.com/datquocnguyen/jPTDP) - kit para etiquetagem morfossintática (POS) e análise de dependências conjuntas. O jPTDP oferece modelos pré-treinados para mais de 40 idiomas.
  - [BigARTM](https://github.com/bigartm/bigartm) - biblioteca rápida para modelagem de tópicos.
  - [Snips NLU](https://github.com/snipsco/snips-nlu) - biblioteca pronta para produção para análise de intenções.
  - [Chazutsu](https://github.com/chakki-works/chazutsu) - biblioteca para baixar e analisar conjuntos de dados padrão de pesquisa em PLN.
  - [Word Forms](https://github.com/gutfeeling/word_forms) - gera com precisão todas as formas possíveis de uma palavra em inglês.
  - [Multilingual Latent Dirichlet Allocation (LDA)](https://github.com/ArtificiAI/Multilingual-Latent-Dirichlet-Allocation-LDA) - pipeline multilíngue e extensível de agrupamento de documentos.
  - [Natural Language Toolkit (NLTK)](https://www.nltk.org/) - biblioteca com ampla variedade de recursos de PLN e suporte a mais de 50 corpora.
  - [NLP Architect](https://github.com/NervanaSystems/nlp-architect) - biblioteca para explorar arquiteturas e técnicas de aprendizado profundo de ponta para PLN e compreensão de linguagem natural.
  - [Flair](https://github.com/zalandoresearch/flair) - framework multilíngue simples e de ponta para PLN, desenvolvido com PyTorch. Inclui embeddings BERT, ELMo e Flair.
  - [Kashgari](https://github.com/BrikerMan/Kashgari) - framework multilíngue simples de PLN, baseado em Keras, que permite criar modelos em cinco minutos para reconhecimento de entidades nomeadas (NER), etiquetagem morfossintática (PoS) e classificação de texto. Inclui embeddings BERT e word2vec.
  - [FARM](https://github.com/deepset-ai/FARM) - transferência de aprendizado rápida e fácil para PLN. Leva modelos de linguagem à indústria, com foco em perguntas e respostas.
  - [Haystack](https://github.com/deepset-ai/haystack) - framework Python de ponta a ponta para criar interfaces de busca em linguagem natural sobre dados. Aproveita Transformers e técnicas de PLN de ponta. Oferece suporte a DPR, Elasticsearch, Modelhub da Hugging Face e muito mais!
  - [Rita DSL](https://github.com/zaibacu/rita-dsl) - DSL inspirada livremente em [RUTA no Apache UIMA](https://uima.apache.org/ruta.html). Permite definir padrões linguísticos (PLN baseada em regras), convertidos para [spaCy](https://spacy.io/) ou, se preferir menos recursos e algo leve, para padrões regex.
  - [Transformers](https://github.com/huggingface/transformers) - processamento de linguagem natural para TensorFlow 2.0 e PyTorch.
  - [Tokenizers](https://github.com/huggingface/tokenizers) - tokenizadores otimizados para pesquisa e produção.
  - [fairSeq](https://github.com/pytorch/fairseq) implementações de modelos seq2seq de ponta da Facebook AI Research em PyTorch.
  - [corex_topic](https://github.com/gregversteeg/corex_topic) - modelagem hierárquica de tópicos com conhecimento mínimo do domínio.
  - [Sockeye](https://github.com/awslabs/sockeye) - kit de tradução automática neural (NMT) que alimenta o Amazon Translate.
  - [DL Translate](https://github.com/xhlulu/dl-translate) - biblioteca de tradução baseada em aprendizado profundo para 50 idiomas, desenvolvida com `transformers` e mBART Large do Facebook.
  - [Jury](https://github.com/obss/jury) - avaliação de saídas de modelos de PLN com diversas métricas automatizadas.
  - [python-ucto](https://github.com/proycon/python-ucto) - tokenizador baseado em expressões regulares, compatível com Unicode, para vários idiomas. Binding Python da biblioteca C++; oferece suporte ao [formato FoLiA](https://proycon.github.io/folia).
  - [Pearmut](https://github.com/zouharvi/pearmut) - ferramenta de anotação humana para tarefas multilíngues de PLN, como tradução automática.
  - [Stanza](https://github.com/stanfordnlp/stanza) - kit Python de PLN de Stanford para tokenização, POS, lematização, análise de dependências e NER em mais de 70 idiomas.
  - [Sentence-Transformers](https://github.com/UKPLab/sentence-transformers) - embeddings de frases e documentos, busca semântica e reordenação; padrão atual para PLN voltada à recuperação.
  - [Argilla](https://github.com/argilla-io/argilla) - plataforma de código aberto para anotação de dados e coleta de feedback em conjuntos de dados de LLM e PLN.
  - [HuggingFace Datasets](https://github.com/huggingface/datasets) - carregadores padronizados e processamento para milhares de conjuntos de dados de PLN.
  - [HuggingFace Evaluate](https://github.com/huggingface/evaluate) - implementações de referência de métricas de PLN.
  - [sacrebleu](https://github.com/mjpost/sacrebleu) - pontuação reproduzível BLEU/chrF/TER para tradução automática.
  - [COMET](https://github.com/Unbabel/COMET) - métricas aprendidas de tradução automática, hoje padrão de fato.
  - [LangTest](https://github.com/JohnSnowLabs/langtest) - mais de 60 tipos de testes de robustez, viés e equidade de modelos de PLN.
   - [yasbd-lib](https://github.com/speedyk-005/yasbd-lib) - detector de limites de sentença (SBD) baseado em regras e de alta precisão. Adaptador substituto do pysbd, APIs de streaming, CLI e componente spaCy para mais de 39 idiomas.

- <a id="c++">**C++** - Bibliotecas C++</a> | [Voltar ao topo](#contents)
  - [InsNet](https://github.com/chncwang/InsNet) - biblioteca de redes neurais para criar modelos de PLN dependentes de instâncias, com agrupamento dinâmico sem padding.
  - [MIT Information Extraction Toolkit](https://github.com/mit-nlp/MITIE) - ferramentas em C, C++ e Python para reconhecimento de entidades nomeadas e extração de relações.
  - [CRF++](https://taku910.github.io/crfpp/) - implementação de código aberto de campos aleatórios condicionais (CRFs) para segmentar/etiquetar dados sequenciais e outras tarefas de PLN.
  - [CRFsuite](http://www.chokkan.org/software/crfsuite/) - implementação de campos aleatórios condicionais (CRFs) para etiquetar dados sequenciais.
  - [BLLIP Parser](https://github.com/BLLIP/bllip-parser) - analisador de linguagem natural BLLIP, também conhecido como analisador Charniak-Johnson.
  - [colibri-core](https://github.com/proycon/colibri-core) - biblioteca C++, ferramentas de linha de comando e binding Python para extrair e manipular construções linguísticas básicas, como n-gramas e skipgrams, com rapidez e eficiência de memória.
  - [ucto](https://github.com/LanguageMachines/ucto) - tokenizador baseado em expressões regulares, compatível com Unicode, para vários idiomas. Ferramenta e biblioteca C++ com suporte ao formato FoLiA.
  - [libfolia](https://github.com/LanguageMachines/libfolia) - biblioteca C++ para o [formato FoLiA](https://proycon.github.io/folia/).
  - [frog](https://github.com/LanguageMachines/frog) - conjunto de ferramentas de PLN baseado em memória, desenvolvido para o neerlandês: etiquetador PoS, lematizador, analisador de dependências, NER, analisador superficial e analisador morfológico.
  - [MeTA](https://github.com/meta-toolkit/meta) - ModErn Text Analysis: kit de ciência de dados em C++ para mineração de grandes volumes de texto.
  - [Mecab (Japanese)](https://taku910.github.io/mecab/)
  - [Moses](http://statmt.org/moses/)
  - [StarSpace](https://github.com/facebookresearch/StarSpace) - biblioteca do Facebook para criar embeddings em nível de palavra, parágrafo e documento e para classificação de texto.
  - [QSMM](http://qsmm.org) - analisadores probabilísticos adaptativos descendentes e ascendentes.

- <a id="java">**Java** - Bibliotecas Java de PLN</a> | [Voltar ao topo](#contents)
  - [Stanford NLP](https://nlp.stanford.edu/software/index.shtml)
  - [OpenNLP](https://opennlp.apache.org/)
  - [NLP4J](https://emorynlp.github.io/nlp4j/)
  - [Word2vec in Java](https://deeplearning4j.org/docs/latest/deeplearning4j-nlp-word2vec)
  - [ReVerb](https://github.com/knowitall/reverb/) extração aberta de informações em escala web.
  - [OpenRegex](https://github.com/knowitall/openregex) linguagem e mecanismo de expressões regulares eficientes e flexíveis, baseados em tokens.
  - [CogcompNLP](https://github.com/CogComp/cogcomp-nlp) - bibliotecas centrais desenvolvidas pelo Cognitive Computation Group da Universidade de Illinois.
  - [MALLET](http://mallet.cs.umass.edu/) - MAchine Learning for LanguagE Toolkit: pacote para processamento estatístico de linguagem natural, classificação e agrupamento de documentos, modelagem de tópicos, extração de informações e outras aplicações de aprendizado de máquina em texto.
  - [RDRPOSTagger](https://github.com/datquocnguyen/RDRPOSTagger) - kit robusto de etiquetagem POS, disponível em Java e Python, acompanhado de modelos pré-treinados para mais de 40 idiomas.

- <a id="kotlin">**Kotlin** - Bibliotecas Kotlin de PLN</a> | [Voltar ao topo](#contents)
  - [Lingua](https://github.com/pemistahl/lingua/) biblioteca de detecção de idiomas para Kotlin e Java, adequada para textos longos e curtos.
  - [Kotidgy](https://github.com/meiblorn/kotidgy) — gerador de dados de texto baseado em índices, escrito em Kotlin.

- <a id="scala">**Scala** - Bibliotecas Scala de PLN</a> | [Voltar ao topo](#contents)
  - [Saul](https://github.com/CogComp/saul) - biblioteca para desenvolver sistemas de PLN, com módulos integrados como SRL, POS etc.
  - [ATR4S](https://github.com/ispras/atr4s) - kit com métodos de ponta de [reconhecimento automático de termos](https://en.wikipedia.org/wiki/Terminology_extraction).
  - [tm](https://github.com/ispras/tm) - implementação de modelagem de tópicos baseada em [PLSA](https://en.wikipedia.org/wiki/Probabilistic_latent_semantic_analysis) multilíngue regularizada.
  - [word2vec-scala](https://github.com/Refefer/word2vec-scala) - interface Scala para o modelo word2vec; inclui operações vetoriais, como distância e analogia entre palavras.
  - [Epic](https://github.com/dlwh/epic) - analisador estatístico de alto desempenho escrito em Scala, acompanhado de um framework para criar modelos complexos de predição estruturada.
  - [Spark NLP](https://github.com/JohnSnowLabs/spark-nlp) - biblioteca de processamento de linguagem natural desenvolvida sobre o Apache Spark ML, que fornece anotações de PLN simples, eficientes e precisas para pipelines de aprendizado de máquina escaláveis em ambientes distribuídos.

- <a id="R">**R** - Bibliotecas de PLN para R</a> | [Voltar ao topo](#contents)
  - [text2vec](https://github.com/dselivanov/text2vec) - vetorização rápida, modelagem de tópicos, distâncias e embeddings de palavras GloVe em R.
  - [wordVectors](https://github.com/bmschmidt/wordVectors) - pacote R para criar e explorar modelos word2vec e outros modelos de embeddings de palavras.
  - [RMallet](https://github.com/mimno/RMallet) - pacote R para interfacear com a ferramenta de aprendizado de máquina Java MALLET.
  - [dfr-browser](https://github.com/agoldst/dfr-browser) - cria visualizações d3 para explorar modelos de tópicos de texto em um navegador.
  - [dfrtopics](https://github.com/agoldst/dfrtopics) - pacote R para explorar modelos de tópicos de texto.
  - [sentiment_classifier](https://github.com/kevincobain2000/sentiment_classifier) - classificação de sentimentos usando desambiguação de sentido de palavras e leitor do WordNet.
  - [jProcessing](https://github.com/kevincobain2000/jProcessing) - bibliotecas de processamento de linguagem natural japonesa, com classificação de sentimentos em japonês.
  - [corporaexplorer](https://kgjerde.github.io/corporaexplorer/) - pacote R para exploração dinâmica de coleções de textos.
  - [tidytext](https://github.com/juliasilge/tidytext) - mineração de texto com ferramentas tidy.
  - [spacyr](https://github.com/quanteda/spacyr) - wrapper R para o spaCy.
  - [CRAN Task View: Natural Language Processing](https://github.com/cran-task-views/NaturalLanguageProcessing/)

- <a id="clojure">**Clojure**</a> | [Voltar ao topo](#contents)
  - [Clojure-openNLP](https://github.com/dakrone/clojure-opennlp) - processamento de linguagem natural em Clojure (opennlp).
  - [Infections-clj](https://github.com/r0man/inflections-clj) - biblioteca de flexão no estilo Rails para Clojure e ClojureScript.
  - [postagga](https://github.com/fekr/postagga) - biblioteca para analisar linguagem natural em Clojure e ClojureScript.

- <a id="go">**Go**</a> | [Voltar ao topo](#contents)
  - [prose](https://github.com/jdkato/prose) - biblioteca de processamento de texto com suporte a tokenização, etiquetagem morfossintática e extração de entidades nomeadas.
  - [gojieba](https://github.com/yanyiwu/gojieba) - implementação em Go do algoritmo jieba de segmentação de palavras chinesas.
  - [kagome](https://github.com/ikawaha/kagome) - analisador morfológico de japonês escrito em Go puro.
  - [go-propisyu](https://github.com/rekurt/go-propisyu) - converte números em palavras russas com gênero gramatical e declinação nominal corretos.

- <a id="ruby">**Ruby**</a> | [Voltar ao topo](#contents)
  - Kevin Dias's [A collection of Natural Language Processing (NLP) Ruby libraries, tools and software](https://github.com/diasks2/ruby-nlp)
  - [Practical Natural Language Processing done in Ruby](https://github.com/arbox/nlp-with-ruby)

- <a id="rust">**Rust**</a> | [Voltar ao topo](#contents)
  - [whatlang](https://github.com/greyblake/whatlang-rs) — biblioteca de reconhecimento de idiomas baseada em trigramas.
  - [rust-bert](https://github.com/guillaume-be/rust-bert) - pipelines de PLN e modelos baseados em Transformer prontos para uso.
  - [snips-nlu-rs](https://github.com/snipsco/snips-nlu-rs) *(arquivado — Snips foi descontinuado)* - biblioteca pronta para produção para análise de intenções.

- <a id="NLP++">**NLP++** - Linguagem NLP++</a> | [Voltar ao topo](#contents)
  - [VSCode Language Extension](https://marketplace.visualstudio.com/items?itemName=dehilster.nlp) - extensão da linguagem NLP++ para VSCode.
  - [nlp-engine](https://github.com/VisualText/nlp-engine) - mecanismo NLP++ para executar código NLP++ no Linux, incluindo um analisador completo de inglês.
  - [VisualText](http://visualtext.org) - página inicial da linguagem NLP++.
  - [NLP++ Wiki](http://wiki.naturalphilosophy.org/index.php?title=NLP%2B%2B) - entrada wiki sobre a linguagem NLP++.

- <a id="julia">**Julia**</a> | [Voltar ao topo](#contents)
  - [CorpusLoaders](https://github.com/JuliaText/CorpusLoaders.jl) - diversos carregadores para diferentes corpora de PLN.
  - [Languages](https://github.com/JuliaText/Languages.jl) - pacote para trabalhar com idiomas humanos.
  - [TextAnalysis](https://github.com/JuliaText/TextAnalysis.jl) - pacote Julia para análise de texto.
  - [TextModels](https://github.com/JuliaText/TextModels.jl) - modelos baseados em redes neurais para processamento de linguagem natural.
  - [WordTokenizers](https://github.com/JuliaText/WordTokenizers.jl) - tokenizadores de alto desempenho para processamento de linguagem natural e tarefas relacionadas.
  - [Word2Vec](https://github.com/JuliaText/Word2Vec.jl) - interface Julia para word2vec.

### Serviços

PLN como API com recursos de nível mais alto, como NER, etiquetagem de tópicos e outros | [Voltar ao topo](#contents)

- [Wit-ai](https://github.com/wit-ai/wit) - interface de linguagem natural para aplicativos e dispositivos.
- [IBM Watson's Natural Language Understanding](https://github.com/watson-developer-cloud/natural-language-understanding-nodejs) - API e demonstração no GitHub.
- [Amazon Comprehend](https://aws.amazon.com/comprehend/) - conjunto de PLN e aprendizado de máquina que abrange tarefas comuns, como NER, etiquetagem e análise de sentimentos.
- [Google Cloud Natural Language API](https://cloud.google.com/natural-language/) - análise sintática, NER, análise de sentimentos e etiquetagem de conteúdo em pelo menos nove idiomas, incluindo inglês e chinês (simplificado e tradicional).
- [ParallelDots](https://www.paralleldots.com/text-analysis-apis) - serviço de API de análise de texto de alto nível, que vai da análise de sentimentos à análise de intenções.
- [Microsoft Cognitive Service](https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics/)
- [TextRazor](https://www.textrazor.com/)
- [Rosette](https://www.rosette.com/)
- [Textalytic](https://www.textalytic.com) - processamento de linguagem natural no navegador com análise de sentimentos, extração de entidades nomeadas, etiquetagem POS, frequências de palavras, modelagem de tópicos, nuvens de palavras e mais.
- [NLP Cloud](https://nlpcloud.io) - modelos de PLN do spaCy, personalizados e pré-treinados, servidos por uma API RESTful para reconhecimento de entidades nomeadas (NER), etiquetagem POS e outros recursos.
- [Cloudmersive](https://cloudmersive.com/nlp-api) - APIs unificadas e gratuitas de PLN para tarefas como etiquetagem de fala, reformulação de texto, tradução/detecção de idiomas e análise sintática de sentenças.

### Ferramentas de anotação

- [GATE](https://gate.ac.uk/overview.html) - General Architecture and Text Engineering tem mais de 15 anos; é gratuito e de código aberto.
- [Anafora](https://github.com/weitechen/anafora) é uma ferramenta gratuita, de código aberto e baseada na web para anotação de texto bruto.
- [brat](https://brat.nlplab.org/) - a ferramenta de anotação rápida brat é um ambiente on-line para anotação colaborativa de texto.
- [doccano](https://github.com/chakki-works/doccano) - ferramenta gratuita e de código aberto com recursos de anotação para classificação de texto, etiquetagem de sequências e tarefas sequência a sequência.
- [INCEpTION](https://inception-project.github.io) - plataforma de anotação semântica com assistência inteligente e gestão de conhecimento.
- [prodigy](https://prodi.gy/) é uma ferramenta de anotação baseada em aprendizado ativo, paga.
- [LightTag](https://lighttag.io) - ferramenta hospedada e gerenciada de anotação de texto para equipes, paga.
- [rstWeb](https://corpling.uis.georgetown.edu/rstweb/info/) - ferramenta de código aberto, local ou on-line, para anotar árvores discursivas.
- [GitDox](https://corpling.uis.georgetown.edu/gitdox/) - ferramenta de anotação de servidor de código aberto com controle de versão GitHub e validação de dados XML e planilhas colaborativas.
- [Datasaur](https://datasaur.ai/) oferece suporte a várias tarefas de PLN para indivíduos e equipes, com plano freemium.
- [Konfuzio](https://konfuzio.com/en/) - ferramenta hospedada ou local, voltada a equipes, para anotação de texto, imagens e PDFs baseada em aprendizado ativo; plano freemium e opções pagas.
- [UBIAI](https://ubiai.tools/) - ferramenta de anotação de texto fácil de usar para equipes, com recursos abrangentes de anotação automática. Oferece suporte a NER, relações, classificação de documentos e anotação OCR para rotulagem de faturas; paga.
- [Shoonya](https://github.com/AI4Bharat/Shoonya-Backend) - plataforma gratuita e de código aberto para anotação de dados, com ampla variedade de recursos de gestão de organizações e espaços de trabalho. É independente de dados e permite que equipes anotem dados em escala com vários níveis de verificação.
- [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) - plataforma gratuita, sem código e de ponta a ponta para anotação de texto e treinamento/ajuste de modelos de aprendizado profundo. Oferece suporte integrado a modelos Spark NLP de reconhecimento de entidades nomeadas, classificação, extração de relações e status de asserção. Suporte ilimitado a usuários, equipes, projetos e documentos. Não é FOSS.
- [FLAT](https://github.com/proycon/flat) - ambiente web de anotação linguística baseado no [formato FoLiA](http://proycon.github.io/folia), um formato XML avançado para anotação linguística. Gratuito e de código aberto.
- [Argilla](https://github.com/argilla-io/argilla) - plataforma de código aberto para coletar feedback humano, criar conjuntos de dados de PLN e LLM e organizar dados de preferências.
- [Label Studio](https://github.com/HumanSignal/label-studio) - plataforma multimodal de rotulagem com núcleo aberto, amplamente usada para rotulagem de PLN.
- [Potato](https://github.com/davidjurgens/potato) - ferramenta gratuita e de código aberto que cobre mais de 21 tipos de tarefas (classificação, spans, correferência, vinculação de entidades e avaliação de rastros de agentes), com controle de qualidade MACE integrado, verificações de atenção, rotulagem assistida por IA e mais de 300 tarefas de exemplo.


## Tarefas e métodos

Tarefas de PLN organizadas por problema linguístico. Cada subseção lista primeiro os trabalhos fundamentais/clássicos, depois as abordagens neurais e, quando pertinente, os métodos baseados em LLMs. Para pesquisas atuais específicas de modelos de linguagem (pré-treinamento, avaliação, recuperação, raciocínio etc.), consulte [Modelos de linguagem para PLN](#language-models-for-nlp).

### Representações vetoriais de texto

[Voltar ao topo](#contents)

Embeddings estáticos de palavras (fundamentos):

- [word2vec](https://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf) - [implementation](https://code.google.com/archive/p/word2vec/) - [explainer blog](http://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
- [GloVe](https://nlp.stanford.edu/pubs/glove.pdf) - [explainer blog](https://blog.acolyer.org/2016/04/22/glove-global-vectors-for-word-representation/)
- [fastText](https://arxiv.org/abs/1607.04606) - [implementação](https://github.com/facebookresearch/fastText); n-gramas de subpalavras lidam bem com palavras fora do vocabulário e ainda são úteis para idiomas com poucos recursos.
- [sense2vec](https://arxiv.org/abs/1511.06388) - desambiguação de sentido de palavras.
- [Paragraph Vectors / doc2vec](https://cs.stanford.edu/~quocle/paragraph_vector.pdf)

Embeddings contextuais:

- [ELMo](https://arxiv.org/abs/1802.05365) - representações contextuais profundas de palavras.
- [CoVe](https://arxiv.org/abs/1708.00107) - vetores contextuais aprendidos por tradução automática.
- [ULMFiT](https://arxiv.org/abs/1801.06146) - ajuste fino de modelo de linguagem para classificação de texto.
- [InferSent](https://arxiv.org/abs/1705.02364) - representações de sentenças derivadas de inferência em linguagem natural (NLI).

Embeddings modernos de frases e documentos: consulte [Recuperação para PLN](#retrieval-for-nlp) (Sentence-Transformers, E5, BGE-M3, Nomic, GritLM) e [MTEB](https://github.com/embeddings-benchmark/mteb) para ver os rankings atuais.

### Tokenização, morfologia e segmentação

[Voltar ao topo](#contents)

- [SentencePiece](https://github.com/google/sentencepiece) - tokenização de subpalavras independente de idioma.
- [BPE](https://arxiv.org/abs/1508.07909) e [Unigram LM](https://arxiv.org/abs/1804.10959) - os dois esquemas dominantes de subpalavras.
- [Stanza](https://github.com/stanfordnlp/stanza) - tokenização, lematização e morfologia para mais de 70 idiomas.
- [UDPipe](https://github.com/ufal/udpipe) - tokenização, etiquetagem, lematização e análise sintática para Universal Dependencies.
- [Morfessor](https://github.com/aalto-speech/morfessor) - segmentação morfológica não supervisionada.
Pesquisa e arquitetura de tokenizadores (consulte também [Modelos de linguagem](#language-models-for-nlp)):

- [Byte-Pair Encoding (Sennrich et al.)](https://arxiv.org/abs/1508.07909) - unidades de subpalavras para tradução automática neural; fundamento dos tokenizadores modernos.
- [SentencePiece](https://github.com/google/sentencepiece) - tokenização de subpalavras independente de idioma (BPE e Unigram).
- [Tokenizers](https://github.com/huggingface/tokenizers) - implementações rápidas em Rust de BPE, WordPiece e Unigram.
- [ByT5](https://arxiv.org/abs/2105.13626) - modelo em nível de bytes sem tokenizador.
- [CANINE](https://arxiv.org/abs/2103.06874) - codificador sem tokenização que opera sobre caracteres Unicode.
- [How Good is Your Tokenizer?](https://arxiv.org/abs/2012.15613) - equidade de tokenizadores entre idiomas.
- [Byte Latent Transformer (BLT)](https://arxiv.org/abs/2412.09871) (Meta, 2024) - segmentação dinâmica em nível de bytes que iguala modelos tokenizados com BPE em escala; retoma a abordagem sem tokenizador.
- [SuperBPE](https://arxiv.org/abs/2503.13423) (2025) - tokenização de superpalavras que supera BPE em tarefas posteriores.
- [Over-Tokenized Transformer](https://arxiv.org/abs/2501.16975) (ICML 2025) - separa os vocabulários de entrada e saída; mostra uma relação log-linear entre o tamanho do vocabulário de entrada e a perda de treinamento, permitindo dimensionar o vocabulário independentemente do tamanho do modelo.
- [Foundations of Tokenization](https://arxiv.org/abs/2407.11606) (ICLR 2025) - primeiro framework unificado formal para modelos de tokenizadores usando teoria das categorias de mapas estocásticos; estabelece condições de consistência estatística.
- [The Token Tax: Systematic Bias in Multilingual Tokenization](https://arxiv.org/abs/2509.05486) (2025) - quantifica como a fertilidade da tokenização prevê a precisão dos modelos entre idiomas, expondo penalidades estruturais de custo para idiomas morfologicamente complexos e com poucos recursos.
- [Reducing Tokenization Premiums for Low-Resource Languages](https://arxiv.org/abs/2601.13328) (2026) - acréscimos posteriores ao vocabulário que agrupam sequências de caracteres divididas em vários tokens para idiomas com poucos recursos, reduzindo o custo de inferência sem retreinamento.

### Etiquetagem morfossintática e análise de dependências

[Voltar ao topo](#contents)

- [Universal Dependencies](https://universaldependencies.org/) - treebanks linguisticamente consistentes entre idiomas, com mais de 100 idiomas.
- [spaCy](https://spacy.io/) e [Stanza](https://github.com/stanfordnlp/stanza) - analisadores prontos para produção para vários idiomas.
- [Deep Biaffine Attention for Neural Dependency Parsing](https://arxiv.org/abs/1611.01734) - arquitetura fundamental de análise sintática neural.
- [Trankit](https://github.com/nlp-uoregon/trankit) - kit leve de PLN multilíngue baseado em Transformer.
- [Self-Attentive Constituency Parsing (Kitaev & Klein)](https://arxiv.org/abs/1805.01052) - analisador neural de constituintes robusto.

### Reconhecimento de entidades nomeadas e extração de informações

[Voltar ao topo](#contents)

Fundamentos e abordagens neurais:

- [CoNLL-2003 NER](https://www.aclweb.org/anthology/W03-0419/) - benchmark de referência de NER em inglês.
- [Neural Architectures for NER (Lample et al.)](https://arxiv.org/abs/1603.01360) - BiLSTM-CRF, arquitetura de referência para NER há muito tempo.
- [Flair](https://github.com/flairNLP/flair) - embeddings contextuais de cadeias de caracteres e NER robusto em vários idiomas.
- [spaCy NER](https://spacy.io/usage/linguistic-features#named-entities) - pronto para produção.

Extração de informações aberta e orientada a instruções:

- [Universal NER](https://arxiv.org/abs/2308.03279) - modelo de linguagem ajustado por instruções para NER de conjunto aberto em vários idiomas.
- [GLiNER](https://arxiv.org/abs/2311.08526) (2023) - modelo NER pequeno e generalista que lida com tipos arbitrários de entidades durante a inferência.
- [GoLLIE](https://arxiv.org/abs/2310.03668) - extração de informações com modelos de linguagem que seguem diretrizes.
- [REBEL](https://github.com/Babelscape/rebel) - extração de relações de ponta a ponta como seq2seq.

Baseado em LLMs:

- [GPT-NER](https://arxiv.org/abs/2304.10428) - LLMs para reconhecimento de entidades nomeadas.
- [Can LLMs Replace Sentence-Level NER?](https://arxiv.org/abs/2402.10573) (2024) - compensações entre custo e qualidade.
- [Generative NER in the Era of LLMs](https://arxiv.org/abs/2601.17898) (2026) - oito LLMs abertos em quatro benchmarks de NER; PEFT com saídas estruturadas iguala o NER baseado em codificadores.

### Resolução de correferência

[Voltar ao topo](#contents)

- [End-to-End Neural Coreference (Lee et al.)](https://arxiv.org/abs/1707.07045) - fundamento da correferência neural moderna.
- [SpanBERT](https://arxiv.org/abs/1907.10529) - pré-treinamento baseado em spans; forte baseline de correferência.
- [coref-hoi](https://github.com/lxucs/coref-hoi) - correferência com inferência de ordem superior.
- [maverick-coref](https://github.com/SapienzaNLP/maverick-coref) (2024) - correferência eficiente que iguala os melhores sistemas maiores.
- [LingMess](https://arxiv.org/abs/2205.12644) - pontuação de correferência baseada em categorias e motivada pela linguística.
Baseado em LLMs:

- [LLMs for Coreference Resolution](https://arxiv.org/abs/2310.05884) - prompting e ajuste fino para correferência.
- [Multilingual Coreference Shared Task: Can LLMs Dethrone Traditional Approaches?](https://arxiv.org/abs/2509.17796) (2025) - nove sistemas com quatro abordagens baseadas em LLMs e cinco tradicionais; os métodos tradicionais ainda lideram, mas a diferença está diminuindo.

### Classificação de texto e análise de sentimentos

[Voltar ao topo](#contents)

- [fastText classifier](https://arxiv.org/abs/1607.01759) - baseline linear robusto e rápido.
- [Sentiment Treebank (SST)](https://nlp.stanford.edu/sentiment/) - conjunto de dados canônico para análise de sentimentos refinada.
- [SetFit](https://github.com/huggingface/setfit) - classificação de texto few-shot sem prompts.
- [FastFit](https://github.com/IBM/fastfit) - few-shot rápido para cenários com muitas classes.
- [SST / IMDB / AG News with DeBERTa-v3](https://arxiv.org/abs/2111.09543) - baseline atual de ajuste fino de codificadores.
- [PySS3](https://github.com/sergioburdisso/pyss3) - classificador de texto interpretável e caixa-branca.
- [LLMs as Annotators](https://arxiv.org/abs/2305.13734) - uso de LLMs para rotular classificações de texto, com ressalvas.

### Modelagem de tópicos

[Voltar ao topo](#contents)

- [Latent Dirichlet Allocation (Blei et al.)](https://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf) - modelo de tópicos fundamental.
- [gensim](https://radimrehurek.com/gensim/) - LDA, LSI e HDP em Python.
- [BigARTM](https://github.com/bigartm/bigartm) - modelagem rápida e regularizada de tópicos.
- [BERTopic](https://github.com/MaartenGr/BERTopic) - modelagem de tópicos baseada em agrupamento sobre embeddings contextuais; opção moderna comum.
- [Top2Vec](https://github.com/ddangelov/Top2Vec) - aprende conjuntamente vetores de tópicos e documentos.
- [CorEx Topic](https://github.com/gregversteeg/corex_topic) - modelagem hierárquica de tópicos com palavras-âncora.

### Sumarização

[Voltar ao topo](#contents)

- [TextRank](https://web.eecs.umich.edu/~mihalcea/papers/mihalcea.emnlp04.pdf) - sumarização extrativa baseada em grafos.
- [Pointer-Generator Networks (See et al.)](https://arxiv.org/abs/1704.04368) - abordagem fundamental de sumarização abstrativa neural.
- [PEGASUS](https://arxiv.org/abs/1912.08777) - pré-treinamento com sentenças removidas para sumarização.
- [BART](https://arxiv.org/abs/1910.13461) - baseline seq2seq de remoção de ruído amplamente usado.
- [BookSum](https://arxiv.org/abs/2105.08209) e [SCROLLS](https://arxiv.org/abs/2201.03533) - benchmarks de sumarização de documentos longos.
Baseado em LLMs:

- [Benchmarking LLMs for News Summarization](https://arxiv.org/abs/2301.13848) - LLMs em comparação com sumarizadores ajustados.
- [Element-Aware Summarization with LLMs](https://arxiv.org/abs/2305.13412) - prompting estruturado para sumarização.
- [Understanding LLM Reasoning for Abstractive Summarization](https://arxiv.org/abs/2512.03503) (2025) - o raciocínio explícito melhora a fluência, mas prejudica a fundamentação factual; orçamentos de raciocínio mais longos podem reduzir a fidelidade.

### Tradução automática

[Voltar ao topo](#contents)

Abordagens estatísticas e fundamentos neurais:

- [Moses](http://statmt.org/moses/) - sistema de referência para tradução automática estatística.
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) - Transformer; redefiniu o campo.
- [Marian NMT](https://github.com/marian-nmt/marian) - framework eficiente de NMT em C++.
- [Fairseq](https://github.com/facebookresearch/fairseq) - kit PyTorch para modelagem de sequências.

Multilíngues em larga escala:

- [NLLB-200](https://arxiv.org/abs/2207.04672) - tradução automática para 200 idiomas.
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - tradução automática para mais de 400 idiomas.
- [SeamlessM4T](https://arxiv.org/abs/2312.05187) - tradução automática de fala e texto em mais de 100 idiomas.

Avaliação:

- [COMET](https://github.com/Unbabel/COMET) - métrica aprendida de tradução automática; padrão de fato atual junto com chrF.
- [sacrebleu](https://github.com/mjpost/sacrebleu) - pontuação reproduzível BLEU/chrF/TER.
- [BERTScore](https://github.com/Tiiiger/bert_score) - métrica de geração baseada em similaridade.

Baseado em LLMs:

- [Is ChatGPT a Good Translator?](https://arxiv.org/abs/2301.08745) - LLMs como sistemas de tradução automática.
- [Adapting LLMs for Document-Level MT](https://arxiv.org/abs/2401.06468) (2024) - LLMs para tradução sensível ao contexto.
- [GPT-4 vs Human Translators](https://arxiv.org/abs/2308.03245) - comparação de qualidade com tradução automática profissional.
- [Multilingual MT with Open LLMs at Practical Scale](https://arxiv.org/abs/2502.02481) (2025) - avalia LLMs abertos com menos de 10 bilhões de parâmetros em tradução automática para 28 idiomas; iguala GPT-4-turbo e Google Translate.
- [Bridging the Linguistic Divide: Survey on LLMs for MT](https://arxiv.org/abs/2504.01919) (2025) - levantamento de como seguir instruções, aprendizado em contexto e alinhamento de preferências reestruturaram a metodologia de tradução automática.

### Perguntas e respostas e compreensão de leitura

[Voltar ao topo](#contents)

Conjuntos de dados e sistemas fundamentais:

- [SQuAD / SQuAD 2.0](https://rajpurkar.github.io/SQuAD-explorer/) - compreensão de leitura extrativa.
- [Natural Questions](https://ai.google.com/research/NaturalQuestions/) - perguntas de usuários reais sobre a Wikipédia.
- [HotpotQA](https://hotpotqa.github.io/) - raciocínio com múltiplos saltos.
- [TriviaQA](http://nlp.cs.washington.edu/triviaqa/) - perguntas e respostas com supervisão distante.
- [DrQA](https://github.com/facebookresearch/DrQA) - perguntas e respostas de domínio aberto sobre a Wikipédia.
- [Document-QA](https://github.com/allenai/document-qa) - compreensão de leitura em vários parágrafos.

Perguntas e respostas modernas de domínio aberto:

- [DPR](https://arxiv.org/abs/2004.04906) e [FiD](https://arxiv.org/abs/2007.01282) - recuperar e depois ler; pipeline padrão de perguntas e respostas de domínio aberto anterior aos LLMs.
- [Atlas](https://arxiv.org/abs/2208.03299) - modelo de linguagem aumentado por recuperação para perguntas e respostas few-shot.
- Consulte também [Recuperação para PLN](#retrieval-for-nlp).

Era dos LLMs:

- [GPT-4 with retrieval on TriviaQA / NQ](https://arxiv.org/abs/2305.06983)
- [Self-RAG](https://arxiv.org/abs/2310.11511) (2023) - recuperação, geração e autocrítica.
- [GAIA](https://arxiv.org/abs/2311.12983) - benchmark de assistentes gerais de IA, incluindo perguntas e respostas em várias etapas.

### Extração de informações além do reconhecimento de entidades

[Voltar ao topo](#contents)

- [OpenIE 6](https://github.com/dair-iitd/openie6) - extração aberta de informações sem esquema.
- [Template-Based Information Extraction without the Templates](https://www.usna.edu/Users/cs/nchamber/pubs/acl2011-chambers-templates.pdf)
- [Privee: An Architecture for Automatically Analyzing Web Privacy Policies](https://www.sebastianzimmeck.de/zimmeckAndBellovin2014Privee.pdf)
- [REBEL](https://github.com/Babelscape/rebel) - extração de relações de ponta a ponta.
- [DocRED](https://github.com/thunlp/DocRED) - benchmark de extração de relações em nível de documento.
- [LLMs for Semantic Role Labeling](https://arxiv.org/abs/2506.05385) (2025) - LLMs generativos com RAG e autocorreção superam modelos codificador-decodificador no estilo BERT em rotulação de papéis semânticos em inglês e chinês.
- [Adapting LLMs for Minimal-edit GEC](https://arxiv.org/abs/2506.13148) (2025) - LLMs somente decodificadores com um novo cronograma de adaptação da taxa de erros alcançam novo estado da arte na correção de erros gramaticais do BEA-test com edições mínimas.

### Recuperação e representações vetoriais

[Voltar ao topo](#contents)

Recuperação densa e de interação tardia, cada vez mais a base de perguntas e respostas e recuperação de informações:

- [DPR (Dense Passage Retrieval)](https://arxiv.org/abs/2004.04906) - baseline de recuperação com codificador duplo.
- [ColBERT](https://arxiv.org/abs/2004.12832) e [ColBERTv2](https://arxiv.org/abs/2112.01488) - recuperação de interação tardia; robusta fora do domínio.
- [E5](https://arxiv.org/abs/2212.03533) e [E5-Mistral](https://arxiv.org/abs/2401.00368) - famílias de embeddings densos amplamente usadas.
- [BGE](https://github.com/FlagOpen/FlagEmbedding) e [BGE-M3](https://arxiv.org/abs/2402.03216) (2024) - embeddings multilíngues e multifuncionais; estão no topo do MTEB em vários idiomas.
- [Nomic Embed](https://arxiv.org/abs/2402.01613) (2024) - modelo de embeddings totalmente aberto e reproduzível.
- [Matryoshka Representation Learning](https://arxiv.org/abs/2205.13147) - embeddings aninhados que permitem dimensões variáveis durante a inferência.
- [GritLM](https://arxiv.org/abs/2402.09906) (2024) - geração e embeddings unificados em um único modelo.
- [RAG (Retrieval-Augmented Generation)](https://arxiv.org/abs/2005.11401) - framework original aumentado por recuperação; fundamento dos pipelines modernos de perguntas e respostas.
- [Gemini Embedding](https://arxiv.org/abs/2503.07891) (2025) - embeddings densos derivados do Gemini; estado da arte no MMTEB em mais de 250 idiomas e na recuperação interlinguística (XOR-Retrieve, XTREME-UP).
- [Qwen3-Embedding](https://arxiv.org/abs/2506.05176) (2025) - série de embeddings baseados em decodificador (0,6B–8B) construída sobre Qwen3; nº 1 no MTEB Multilingual e no MTEB Code, superando modelos proprietários anteriores.
- [Rank1](https://arxiv.org/abs/2502.18418) (2025) - primeiro modelo de reordenação treinado com computação em tempo de teste via destilação de rastros de raciocínio do DeepSeek-R1; estado da arte em seguimento de instruções e recuperação fora do domínio.
- [ReasonEmbed](https://arxiv.org/abs/2510.08252) (2025) - modelo de embeddings para recuperação que exige raciocínio, com síntese de dados ReMixer e treinamento adaptativo Redapter; recorde de nDCG@10 de 38,1 no BRIGHT.
- [ColBERT-Att](https://arxiv.org/abs/2603.25248) (2026) - amplia a recuperação de interação tardia ao integrar pesos de atenção de consultas e documentos à pontuação do ColBERT; melhora a revocação no MS-MARCO, BEIR e LoTTE.
Benchmarks de embeddings e recuperação:

- [MMTEB](https://arxiv.org/abs/2502.13595) (2025) - expansão comunitária do MTEB para mais de 500 tarefas em mais de 250 idiomas.

### Fala e texto

[Voltar ao topo](#contents)

A seleção é breve, pois este tópico se aproxima de áreas correlatas:

- [Whisper](https://github.com/openai/whisper) - reconhecimento automático de fala (ASR) multilíngue; opção aberta moderna padrão.
- [SeamlessM4T](https://github.com/facebookresearch/seamless_communication) - tradução unificada de fala e texto.
- [Canary](https://huggingface.co/nvidia/canary-1b) (NVIDIA, 2024) - principal modelo aberto multilíngue de ASR.
- [FunASR](https://github.com/modelscope/FunASR) - kit de ASR de nível industrial; 170× em tempo real na GPU, mais de 50 idiomas, detecção de atividade vocal (VAD), pontuação, diarização de locutores e detecção de emoções integradas. Inclui o SenseVoice não autorregressivo e modelos Fun-ASR-Nano baseados em LLM.
- [Wav2Vec 2.0](https://arxiv.org/abs/2006.11477) - pré-treinamento autossupervisionado fundamental para fala.
- [Coqui TTS](https://github.com/coqui-ai/TTS) e [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - síntese de fala aberta (TTS).

## Conjuntos de dados

[Voltar ao topo](#contents)

Hubs e listas de conjuntos de dados:

- [HuggingFace Datasets Hub](https://huggingface.co/datasets) - índice central de conjuntos de dados modernos de PLN, com carregadores versionados e compatíveis com streaming.
- [nlp-datasets](https://github.com/niderhoff/nlp-datasets) - grande coleção de conjuntos de dados de PLN.
- [gensim-data](https://github.com/RaRe-Technologies/gensim-data) - repositório de dados para modelos de PLN pré-treinados e corpora de PLN.

Corpora abertos em escala de pré-treinamento:

- [The Pile](https://pile.eleuther.ai/) - corpus de texto diversificado de 825 GiB.
- [RedPajama / RedPajama-V2](https://github.com/togethercomputer/RedPajama-Data) (2023-2024) - reproduções dos dados de pré-treinamento do LLaMA; a V2 contém 30 trilhões de tokens com indicadores de qualidade.
- [Dolma](https://github.com/allenai/dolma) (AI2, 2023-2024) - corpus aberto de pré-treinamento com 3 trilhões de tokens e pipeline de filtragem documentado.
- [FineWeb / FineWeb-Edu](https://huggingface.co/datasets/HuggingFaceFW/fineweb) (2024) - corpus da web limpo com 15 trilhões de tokens; FineWeb-Edu filtra por qualidade educacional.
- [CulturaX](https://huggingface.co/datasets/uonlp/CulturaX) - 6,3 trilhões de tokens em 167 idiomas.
- [Common Corpus](https://huggingface.co/datasets/PleIAs/common_corpus) (2024) - corpus multilíngue aberto sob licença livre, com 2 trilhões de tokens.

Conjuntos de dados de tarefas e instruções:

- [Universal Dependencies](https://universaldependencies.org/) - anotação de treebanks consistente entre idiomas, com mais de 100 idiomas.
- [Tülu 3 SFT Mixture](https://huggingface.co/datasets/allenai/tulu-3-sft-mixture) (2024) - dados abertos de ajuste fino por instruções usados no Tülu 3.
- [tiny_qa_benchmark_pp](https://github.com/vincentkoc/tiny_qa_benchmark_pp/) - pequenos conjuntos multilíngues de dados de PLN para perguntas e respostas, além de biblioteca para gerar cópias sintéticas próprias.

## Frameworks de PLN multilíngues

[Voltar ao topo](#contents)

- [UDPipe](https://github.com/ufal/udpipe) é um pipeline treinável para tokenização, etiquetagem, lematização e análise sintática de Universal Treebanks e outros arquivos CoNLL-U. Escrito principalmente em C++, oferece uma solução rápida e confiável para processamento multilíngue de PLN.
- [NLP-Cube](https://github.com/adobe/NLP-Cube) : pipeline de processamento de linguagem natural — divisão de sentenças, tokenização, lematização, etiquetagem morfossintática e análise de dependências. Plataforma nova, escrita em Python com Dynet 2.0. Oferece execução independente (CLI/bindings Python) e funcionalidade de servidor (API REST).
- [UralicNLP](https://github.com/mikahama/uralicNLP) é uma biblioteca de PLN voltada principalmente a vários idiomas urálicos ameaçados, como os idiomas sami, mordvino, mari e komi. Também oferece suporte a idiomas não ameaçados, como o finlandês, e a idiomas não urálicos, como sueco e árabe. O UralicNLP realiza análise e geração morfológicas, lematização e desambiguação.

## Modelos de linguagem para PLN

[Voltar ao topo](#contents)

Modelos de linguagem pré-treinados e pesquisas relacionadas, delimitados a tarefas de PLN e fenômenos linguísticos. Para ferramentas de uso geral para LLMs, agentes ou kits de aplicações RAG, consulte [Veja também](#see-also).

### Pré-treinamento e adaptação

Codificadores (ainda o principal recurso para tarefas clássicas de PLN):

- [BERT](https://arxiv.org/abs/1810.04805) - pré-treinamento bidirecional com Transformer; fundamento da maioria dos trabalhos de PLN com codificadores desde 2018. [Leia on-line](https://webeditions.page/works/bert-pre-training/) com navegação por seções e a fonte ACL anexada.
- [RoBERTa](https://arxiv.org/abs/1907.11692) - pré-treinamento BERT otimizado de forma robusta; baseline comum de codificador.
- [DeBERTa / DeBERTa-v3](https://arxiv.org/abs/2111.09543) - atenção dissociada; desempenho robusto em classificação, NER e NLI.
- [ELECTRA](https://arxiv.org/abs/2003.10555) - pré-treinamento por detecção de tokens substituídos, eficiente em amostras.
- [ModernBERT](https://arxiv.org/abs/2412.13663) (2024) - codificador modernizado com embeddings rotativos, FlashAttention e contexto de 8K; codificador de referência atual para classificação, NER e recuperação.
- [NeoBERT](https://arxiv.org/abs/2502.19587) (2025) - codificador de 250 milhões de parâmetros com melhorias arquiteturais modernas (RoPE, contexto de 4K e proporção profundidade/largura otimizada); estado da arte no MTEB, superando ModernBERT e RoBERTa-large com o mesmo ajuste fino.

Codificador-decodificador e seq2seq:

- [T5](https://arxiv.org/abs/1910.10683) e [FLAN-T5](https://arxiv.org/abs/2210.11416) - formulação texto-para-texto para tarefas de PLN; baselines robustos de codificador-decodificador ajustados por instruções.
- [BART](https://arxiv.org/abs/1910.13461) - pré-treinamento seq2seq com remoção de ruído; amplamente usado para sumarização e geração.

LLMs abertos somente decodificadores (usados como base para tarefas de PLN):

- [Llama 3 / 3.1 / 3.3](https://arxiv.org/abs/2407.21783) (Meta, 2024-2025) - família de pesos abertos amplamente adotada; base padrão para ajuste fino em várias tarefas de PLN.
- [Qwen 2.5 / Qwen 3](https://qwenlm.github.io/) (Alibaba, 2024-2025) - ampla cobertura multilíngue, especialmente do chinês; frequentemente é o melhor modelo aberto em benchmarks multilíngues.
- [DeepSeek-V3](https://arxiv.org/abs/2412.19437) (2024) - pré-treinamento MoE eficiente; modelo-base aberto competitivo.
- [OLMo 2](https://arxiv.org/abs/2501.00656) (AI2, 2025) - totalmente aberto: pesos, dados de treinamento e código; referência de reprodutibilidade.
- [Gemma 2 / Gemma 3](https://arxiv.org/abs/2408.00118) (Google, 2024-2025) - modelos abertos pequenos e médios com bom desempenho em tarefas de PLN.
- [Mistral / Mixtral](https://arxiv.org/abs/2401.04088) - modelos abertos densos e esparsos MoE eficientes.
- [What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?](https://arxiv.org/abs/2204.05832) - comparação de codificador, decodificador e codificador-decodificador para transferência em PLN.

### Modelos multilíngues e interlinguísticos

- [XLM-R](https://arxiv.org/abs/1911.02116) - modelo mascarado interlinguístico treinado no CommonCrawl, com 100 idiomas.
- [mT5](https://arxiv.org/abs/2010.11934) - T5 multilíngue que abrange 101 idiomas.
- [BLOOM](https://arxiv.org/abs/2211.05100) - modelo de linguagem multilíngue aberto com 176 bilhões de parâmetros e 46 idiomas naturais.
- [Aya 23 / Aya Expanse](https://arxiv.org/abs/2412.04261) (Cohere For AI, 2024) - modelos multilíngues em larga escala, ajustados por instruções, que abrangem de 23 a 101 idiomas.
- [Glot500](https://arxiv.org/abs/2305.12182) - codificador para mais de 500 idiomas, com foco nos de poucos recursos.
- [NLLB-200](https://arxiv.org/abs/2207.04672) - No Language Left Behind: tradução automática para 200 idiomas.
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - modelo de tradução automática para mais de 400 idiomas e corpus multilíngue com 3 trilhões de tokens.
- [SeamlessM4T / Seamless](https://arxiv.org/abs/2312.05187) (Meta, 2023-2024) - tradução de fala e texto multilíngue e multimodal em mais de 100 idiomas.
- [SEA-LION / SeaLLM](https://arxiv.org/abs/2312.00738) (2024-2025) - modelos de linguagem voltados a idiomas do Sudeste Asiático.
- [Babel](https://arxiv.org/abs/2503.00865) (2025) - LLMs multilíngues abertos (9B e 83B) que abrangem os 25 idiomas com mais falantes (cerca de 90% dos falantes do mundo); supera modelos multilíngues abertos de tamanho comparável no XCOPA, XNLI, MGSM e FLORES-200.
- [Lugha-Llama](https://arxiv.org/abs/2504.06536) (Princeton/Mila, 2025) - Llama-3.1-8B adaptado a idiomas africanos com poucos recursos por meio do corpus WURA selecionado; resultados de ponta entre modelos de código aberto no IrokoBench e AfriQA.
- [AfriqueLLM](https://arxiv.org/abs/2601.06395) (McGill, 2026) - conjunto de LLMs abertos (4B–14B) com pré-treinamento continuado em 26 bilhões de tokens de 20 idiomas africanos e estudo empírico abrangente da mistura de dados.
- [TranslateGemma](https://arxiv.org/abs/2601.09012) (Google, 2026) - modelos abertos especializados em tradução, baseados no Gemma 3, que cobrem 55 pares de idiomas por meio de SFT e RL com modelos de recompensa de qualidade.
- [MiLMMT-46](https://arxiv.org/abs/2602.11961) (Xiaomi, 2026) - tradução automática multilíngue aberta ampliada para 46 idiomas, equiparando sistemas comerciais como Google Translate e Gemini 3 Pro.

### Avaliação e benchmarks

Compreensão de linguagem natural (NLU) e avaliação interlinguística:

- [GLUE](https://gluebenchmark.com/) e [SuperGLUE](https://super.gluebenchmark.com/) - benchmarks de NLU em inglês.
- [XTREME](https://sites.research.google/xtreme) e [XGLUE](https://microsoft.github.io/XGLUE/) - NLU interlinguística.
- [XNLI](https://github.com/facebookresearch/XNLI) - inferência em linguagem natural interlinguística em 15 idiomas.
- [FLORES-200](https://github.com/facebookresearch/flores) - avaliação de tradução automática em 200 idiomas.
- [MTEB](https://github.com/embeddings-benchmark/mteb) - Massive Text Embedding Benchmark; padrão para codificadores de frases/documentos.
- [BEIR](https://github.com/beir-cellar/beir) - benchmark heterogêneo de recuperação de informações para modelos de recuperação.

Avaliação moderna de modelos de linguagem (2023-2026):

- [HELM](https://crfm.stanford.edu/helm/) - avaliação holística em tarefas de PLN, precisão e outros aspectos.
- [BIG-bench](https://github.com/google/BIG-bench) - mais de 200 tarefas que sondam as capacidades dos modelos de linguagem.
- [MMLU](https://github.com/hendrycks/test) - avaliação de conhecimento multitarefa em 57 disciplinas.
- [MMLU-Pro](https://arxiv.org/abs/2406.01574) (2024) - sucessor do MMLU mais difícil e discriminativo.
- [GPQA](https://arxiv.org/abs/2311.12022) - perguntas e respostas de nível de pós-graduação e avaliação de raciocínio "à prova do Google".
- [REFUTE](https://huggingface.co/datasets/BGPT-OFFICIAL/refute) (2026) - benchmark de raciocínio científico para críticas fundamentadas em evidências, detecção de alegações exageradas, recusa por falta de evidências e calibração.
- [IFEval](https://arxiv.org/abs/2311.07911) - avaliação verificável de seguimento de instruções.
- [Chatbot Arena (LMSYS)](https://lmarena.ai/) - ranking ELO de modelos de conversa baseado em preferências humanas.
- [LiveBench](https://livebench.ai/) (2024) - benchmark resistente à contaminação, atualizado mensalmente.
- [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) - framework unificado para avaliar modelos de linguagem em benchmarks.
- [MMLU-ProX](https://arxiv.org/abs/2503.10497) (2025) - extensão multilíngue do MMLU-Pro para 29 idiomas tipologicamente diversos; revela diferença de desempenho de até 24,3% entre idiomas com muitos e poucos recursos.
- [MultiChallenge](https://arxiv.org/abs/2501.17399) (2025) - benchmark conversacional com múltiplos turnos que expõe falhas simultâneas no seguimento de instruções e no raciocínio em contexto; todos os modelos de fronteira testados pontuam abaixo de 50%.
- [FRAMES](https://arxiv.org/abs/2409.12941) (2025) - avaliação unificada de RAG: 824 perguntas com múltiplos saltos que exigem, em conjunto, factualidade, precisão de recuperação e raciocínio entre documentos.

Avaliação de contexto longo:

- [Needle in a Haystack](https://github.com/gkamradt/LLMTest_NeedleInAHaystack) - teste de recuperação para janelas de contexto longo.
- [RULER](https://arxiv.org/abs/2404.06654) (2024) - tarefas sintéticas de contexto longo além da recuperação simples.
- [LongBench](https://github.com/THUDM/LongBench) - benchmark bilíngue de contexto longo em tarefas de PLN.
- [LongBench v2](https://arxiv.org/abs/2412.15204) (2025) - 503 perguntas de múltipla escolha elaboradas por especialistas, em contextos de 8 mil a 2 milhões de palavras com raciocínio profundo de múltiplos saltos; humanos pontuam 53,7% sob pressão de tempo.
- [U-NIAH](https://arxiv.org/abs/2503.00353) (2025) - amplia o needle-in-a-haystack com configurações de várias agulhas e aninhadas; mostra que o RAG atenua o problema de informação perdida no meio para LLMs menores, mas prejudica modelos de raciocínio.

### Raciocínio e computação em tempo de inferência

Uma tendência marcante de 2024 a 2026: modelos que produzem rastros explícitos de raciocínio e se beneficiam de computação adicional na inferência.

- [Chain-of-Thought Prompting](https://arxiv.org/abs/2201.11903) - resultado fundamental; etapas intermediárias de raciocínio melhoram o desempenho.
- [Self-Consistency](https://arxiv.org/abs/2203.11171) - votação majoritária entre cadeias CoT amostradas.
- [Tree of Thoughts](https://arxiv.org/abs/2305.10601) - busca em árvores de raciocínio.
- [Self-Refine](https://arxiv.org/abs/2303.17651) e [Reflexion](https://arxiv.org/abs/2303.11366) - autocorreção durante a inferência.
- [Large Language Models are Zero-Shot Reasoners](https://arxiv.org/abs/2205.11916) - cadeia de raciocínio para tarefas de raciocínio em PLN.
- [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) - modelos de recompensa com supervisão de processo para raciocínio.
- [DeepSeek-R1](https://arxiv.org/abs/2501.12948) (2025) - modelo aberto de raciocínio treinado com RL puro; reproduziu abertamente o comportamento do estilo o1.
- [OpenAI o1 / o3](https://openai.com/index/learning-to-reason-with-llms/) (2024-2025) - sistemas de raciocínio com computação em tempo de teste.
- [Scaling LLM Test-Time Compute Optimally](https://arxiv.org/abs/2408.03314) (2024) - estudo sistemático das compensações de computação durante a inferência.
- [s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393) (2025) - receita aberta e pequena de raciocínio por meio de imposição de orçamento.
- [Kimi k1.5](https://arxiv.org/abs/2501.12599) (2025) - RL de contexto longo com otimização de política (sem MCTS nem PRM), que alcança desempenho no nível do o1; introduz destilação de CoT longo em modelos de CoT curto.
- [rStar-Math](https://arxiv.org/abs/2501.04519) (2025) - modelo de política pequeno combinado com modelo de preferência de processo treinado com trajetórias MCTS; permite que LMs pequenos desenvolvam raciocínio sem destilação de modelos maiores.
- [DAPO](https://arxiv.org/abs/2503.14476) (2025) - sistema aberto de treinamento RL baseado em GRPO com quatro melhorias principais (recorte desacoplado, amostragem dinâmica, perda em nível de token e bônus de entropia); reproduz e supera o raciocínio no nível do DeepSeek-R1-Zero.
- [VAPO](https://arxiv.org/abs/2504.05118) (2025) - RL baseado em modelo de valor, com GAE adaptativo à extensão e recorte em nível de token; supera métodos GRPO sem valor no AIME 2024 com treinamento estável.
- [ThinkPRM](https://arxiv.org/abs/2504.16828) (2025) - modelos generativos de recompensa de processo que produzem verificação em cadeia de raciocínio a cada etapa, igualando PRMs discriminativos com 1% dos rótulos de supervisão.
- [OpenThoughts](https://arxiv.org/abs/2506.04178) (2025) - mais de mil experimentos controlados sobre receitas de dados para modelos abertos de raciocínio; estado da arte no AIME 2025, igualando baselines de destilação fechados.

### Contexto longo e arquiteturas alternativas

- [Mamba](https://arxiv.org/abs/2312.00752) e [Mamba-2](https://arxiv.org/abs/2405.21060) - modelos seletivos de espaço de estados, alternativa à atenção em tempo linear para contexto longo.
- [RWKV](https://arxiv.org/abs/2305.13048) - híbrido de RNN e Transformer que escala para grandes números de parâmetros.
- [Jamba](https://arxiv.org/abs/2403.19887) (2024) - arquitetura híbrida Mamba-Transformer-MoE.
- [RoPE](https://arxiv.org/abs/2104.09864) e [YaRN](https://arxiv.org/abs/2309.00071) - embeddings posicionais rotativos e extensão do comprimento do contexto.
- [Position Interpolation](https://arxiv.org/abs/2306.15595) - extensão de janelas de contexto com ajuste fino mínimo.
- [Lost in the Middle](https://arxiv.org/abs/2307.03172) - padrões de degradação em contexto longo em tarefas de PLN.
- [RAG vs Long-Context LLMs](https://arxiv.org/abs/2407.16833) (2024) - compensações em perguntas e respostas sobre entradas longas.
- [Titans: Learning to Memorize at Test Time](https://arxiv.org/abs/2501.00663) (2025) - módulo neural de memória de longo prazo que aprende a memorizar o contexto histórico durante o teste; escala para mais de 2 milhões de tokens e supera Transformers e modelos lineares recorrentes modernos em modelagem de linguagem e raciocínio.
- [MiniMax-01](https://arxiv.org/abs/2501.08313) (2025) - híbrido de 456 bilhões de parâmetros que combina atenção lightning (linear) e atenção softmax esparsa; iguala o desempenho de PLN do GPT-4o em contextos de inferência de até 4 milhões de tokens.
- [Native Sparse Attention (NSA)](https://arxiv.org/abs/2502.11089) (2025) - atenção esparsa treinável que combina compressão de granulação grossa com seleção refinada; acelera muito em 64K sem degradar o desempenho em benchmarks de PLN.
- [LongRoPE2](https://arxiv.org/abs/2502.20082) (2025) - identifica subtreinamento de dimensões RoPE de alta frequência e aplica redimensionamento por busca evolutiva; estende LLaMA3-8B para 128K com 80 vezes menos tokens de treinamento que a receita da Meta.
- [Characterizing SSM and Hybrid LM Long-Context Performance](https://arxiv.org/abs/2507.12442) (2025) - primeira análise abrangente de memória e velocidade de modelos Transformer, SSM e híbridos até 220 mil tokens; SSMs são até quatro vezes mais rápidos e híbridos equilibram recuperação e eficiência.

### Factualidade, alucinação e calibração

- [Survey of Hallucination in Natural Language Generation](https://arxiv.org/abs/2202.03629) - taxonomia e estratégias de mitigação.
- [TruthfulQA](https://github.com/sylinrl/TruthfulQA) - benchmark de veracidade em perguntas e respostas.
- [FActScore](https://github.com/shmsw25/FActScore) - precisão factual refinada em geração de textos longos.
- [LongFact / SAFE](https://arxiv.org/abs/2403.18802) (2024) - benchmark de factualidade em textos longos e avaliador aumentado por busca.
- [SelfCheckGPT](https://github.com/potsawee/selfcheckgpt) - detecção de alucinações baseada em amostragem.
- [RAGAS](https://github.com/explodinggradients/ragas) - avaliação sem referência de pipelines de RAG e perguntas e respostas.
- [Lookback Lens](https://arxiv.org/abs/2407.07071) (2024) - detecção de alucinações na geração com contexto longo baseada em padrões de atenção.
- [Calibration of LLMs on Multiple Choice](https://arxiv.org/abs/2402.13887) (2024) - análise de calibração diante de efeitos de formatação.
- [HalluLens](https://arxiv.org/abs/2504.17550) (2025) - benchmark de alucinações com taxonomia extrínseca/intrínseca e regeneração dinâmica do conjunto de teste para resistir ao vazamento de dados.
- [Atomic Calibration](https://arxiv.org/abs/2410.13246) (2025) - análise de calibração em nível de alegação para geração longa; modelos são muito menos bem calibrados em saídas extensas do que em alegações isoladas.
- [FRANQ](https://arxiv.org/abs/2505.21072) (2025) - quantificação de incerteza ciente de fidelidade para verificação factual com RAG; separa formalmente fidelidade de factualidade.
- [MUCH](https://arxiv.org/abs/2511.17081) (2025) - benchmark multilíngue de alucinação em alegações para inglês, francês, espanhol e alemão, com logits por token publicados para avaliação fundamentada de quantificação de incerteza.
- [HalluHard](https://arxiv.org/abs/2602.01031) (2026) - benchmark difícil de alucinações em múltiplos turnos para respostas que exigem citações; cerca de 30% de alucinações persistem mesmo com busca na web.
- [CURE: Think Through Uncertainty](https://arxiv.org/abs/2604.12046) (2026) - treina modelos para raciocinar sobre incerteza em nível de alegação antes de gerar respostas; grandes ganhos na factualidade de biografias e na AUROC do FactBench.

### Sondagem e interpretabilidade

- [A Primer in BERTology](https://arxiv.org/abs/2002.12327) - o que o BERT aprende sobre linguagem.
- [Probing Classifiers (Belinkov)](https://arxiv.org/abs/2102.12452) - metodologia, limitações e alternativas.
- [Locating and Editing Factual Associations in GPT (ROME)](https://rome.baulab.info/) - rastreamento causal da recuperação de fatos.
- [The Pyramid of NLP Probes](https://arxiv.org/abs/2104.07885) - sondagem estrutural de conhecimento linguístico.
- [Toy Models of Superposition](https://transformer-circuits.pub/2022/toy_model/) - fundamento da visão de características esparsas das representações de Transformer.
- [Towards Monosemanticity / Scaling Monosemanticity](https://transformer-circuits.pub/2024/scaling-monosemanticity/) (Anthropic, 2024) - autoencoders esparsos que extraem características interpretáveis de LMs em escala de produção.
- [Sparse Autoencoders Find Highly Interpretable Features](https://arxiv.org/abs/2309.08600) - metodologia SAE para interpretabilidade de modelos de linguagem.
- [Neuronpedia](https://www.neuronpedia.org/) - plataforma aberta para explorar características SAE em vários modelos.
- [Influence Functions Scale to LLMs](https://arxiv.org/abs/2308.03296) (2023) - identificação de exemplos de treinamento que influenciam o comportamento do modelo.
- [Circuit Tracing: Revealing Computational Graphs in Language Models](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) (Anthropic, 2025) - introduz transcodificadores entre camadas e grafos de atribuição para construir um modelo substituto interpretável; permite rastrear circuitos em nível de prompt e interações causais entre características.
- [On the Biology of a Large Language Model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) (Anthropic, 2025) - aplica grafos de atribuição ao Claude 3.5 Haiku em estudos de caso de raciocínio com múltiplos saltos, planejamento de rimas e jailbreaks.
- [Transcoders Beat Sparse Autoencoders for Interpretability](https://arxiv.org/abs/2501.18823) (2025) - mostra que transcodificadores (que reconstroem saídas de camadas a partir de entradas) produzem características mais interpretáveis que SAEs; introduz transcodificadores com conexões residuais.
- [Survey on Sparse Autoencoders for LLM Interpretability](https://arxiv.org/abs/2503.05613) (EMNLP 2025) - levantamento de referência sobre arquiteturas SAE, estratégias de treinamento, explicação de características e avaliação.
- [Finding Highly Interpretable Prompt-Specific Circuits](https://arxiv.org/abs/2602.13483) (2026) - identifica circuitos por prompt (em vez de por tarefa); revela agrupamento de mecanismos por família de prompts.

### Modelos de linguagem pequenos e eficientes

Destilação e modelos pequenos:

- [DistilBERT](https://arxiv.org/abs/1910.01108) e [MiniLM](https://arxiv.org/abs/2002.10957) - codificadores destilados para PLN em produção.
- [Phi-3 / Phi-4](https://arxiv.org/abs/2412.08905) (Microsoft, 2024) - modelos pequenos treinados com dados selecionados, competitivos com modelos muito maiores em benchmarks de PLN.
- [SmolLM2](https://arxiv.org/abs/2502.02737) (HuggingFace, 2025) - família totalmente aberta de modelos de linguagem pequenos, com dados de treinamento reproduzíveis.
- [SmolLM3](https://huggingface.co/blog/smollm3) (HuggingFace, 2025) - decodificador totalmente aberto de 3B, pré-treinado em 11,2 trilhões de tokens com NoPE e YaRN para contexto de 128K; competitivo com modelos da classe 4B.
- [Gemma 3 Technical Report](https://arxiv.org/abs/2503.19786) (Google, 2025) - modelos abertos de 1B a 27B com alta proporção de atenção local/global para manter o cache KV viável em contextos de 128K.
- [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) (Alibaba, 2025) - modelos densos e MoE de 0,6B a 235B, com modos unificados de raciocínio e sem raciocínio; o MoE 30B-A3B iguala modelos densos maiores ativando apenas 3B parâmetros.
- [Apple Intelligence Foundation Language Models](https://arxiv.org/abs/2507.13575) (Apple, 2025) - modelo de 3B executado no dispositivo que usa compartilhamento de cache KV e QAT de 2 bits para reduzir em 37,5% a memória do cache sem perda de precisão.
- [Sentence-Transformers](https://www.sbert.net/) - embeddings de frases e parágrafos por meio de BERT siamês.
- [SetFit](https://github.com/huggingface/setfit) - classificação de texto few-shot sem prompts.
- [FastFit](https://github.com/IBM/fastfit) - classificação few-shot rápida para cenários com muitas classes.
- [GTE](https://huggingface.co/thenlper/gte-base), [BGE](https://github.com/FlagOpen/FlagEmbedding) e [Stella](https://huggingface.co/dunzhang/stella_en_1.5B_v5) - modelos compactos de embeddings de texto, próximos ao topo do MTEB.

Quantização e disponibilização (relevantes para implantar modelos de PLN em escala):

- [GPTQ](https://arxiv.org/abs/2210.17323) - quantização pós-treinamento para Transformers.
- [AWQ](https://arxiv.org/abs/2306.00978) - quantização de pesos ciente das ativações.
- [KVTuner](https://arxiv.org/abs/2502.04420) (ICML 2025) - quantização de precisão mista do cache KV, camada a camada e ciente da sensibilidade; melhora a taxa de transferência em até 21% em relação ao KV8 uniforme.
- [GGUF / llama.cpp](https://github.com/ggerganov/llama.cpp) - inferência quantizada portátil.
- [vLLM](https://github.com/vllm-project/vllm) - disponibilização de modelos de linguagem com alta taxa de transferência baseada em PagedAttention.
- [SGLang](https://github.com/sgl-project/sglang) - geração estruturada e disponibilização eficiente.
- [Text Generation Inference (TGI)](https://github.com/huggingface/text-generation-inference) - solução da Hugging Face para disponibilização de modelos de linguagem em produção.

Ajuste fino eficiente em parâmetros:

- [LoRA](https://arxiv.org/abs/2106.09685) e [QLoRA](https://arxiv.org/abs/2305.14314) - adaptadores de baixo posto e ajuste fino quantizado; padrão para adaptar LLMs a tarefas de PLN em hardware modesto.
- [DoRA](https://arxiv.org/abs/2402.09353) (2024) - adaptação de baixo posto com decomposição de pesos.
- [PEFT](https://github.com/huggingface/peft) - biblioteca da Hugging Face que reúne LoRA, prefix tuning, IA3 e outros métodos.

### Ajuste por instruções e otimização de preferências

- [FLAN](https://arxiv.org/abs/2109.01652) - modelos de linguagem ajustados como aprendizes zero-shot.
- [InstructGPT](https://arxiv.org/abs/2203.02155) - treinamento de LMs para seguir instruções com feedback humano.
- [Self-Instruct](https://github.com/yizhongw/self-instruct) - criação inicial de dados de instrução a partir de LMs.
- [Super-NaturalInstructions](https://github.com/allenai/natural-instructions) - mais de 1.600 tarefas de PLN com instruções.
- [Constitutional AI](https://arxiv.org/abs/2212.08073) - treinamento de LMs com feedback gerado por IA segundo uma constituição escrita.
- [Direct Preference Optimization](https://arxiv.org/abs/2305.18290) - alternativa mais simples ao RLHF, amplamente adotada.
- [Tülu 3](https://arxiv.org/abs/2411.15124) (AI2, 2024) - receita totalmente aberta de pós-treinamento com resultados de ponta entre modelos abertos.
- [LIMA](https://arxiv.org/abs/2305.11206) - "menos é mais para alinhamento"; poucos dados SFT de alta qualidade podem render muito.
- [TRL](https://github.com/huggingface/trl) - biblioteca de referência para SFT, DPO, GRPO e RLHF.
- [Magpie](https://arxiv.org/abs/2406.08464) (2024-2025) - sintetiza pares de instrução-resposta de alta qualidade ao solicitar LMs alinhados sem contexto; o SFT no subconjunto filtrado iguala o Llama-3-Instruct oficial.

### Viés, equidade e segurança em PLN

- [StereoSet](https://github.com/moinnadeem/StereoSet) - mensuração de vieses estereotípicos em LMs pré-treinados.
- [CrowS-Pairs](https://github.com/nyu-mll/crows-pairs) - mensuração de vieses sociais em LMs mascarados.
- [WinoBias](https://github.com/uclanlp/corefBias) - viés de gênero na resolução de correferência.
- [HolisticBias](https://github.com/facebookresearch/ResponsibleNLP) - mensuração de vieses em muitos eixos demográficos.
- [RealToxicityPrompts](https://github.com/allenai/real-toxicity-prompts) - toxicidade na geração por modelos de linguagem.
- [Sycophancy in Language Models](https://arxiv.org/abs/2310.13548) - modelos que adaptam respostas às crenças dos usuários.
- [Alignment Faking in Large Language Models](https://arxiv.org/abs/2412.14093) (Anthropic, 2024) - modelos que obedecem estrategicamente durante o treinamento.
- [WildGuard](https://arxiv.org/abs/2406.18495) (2024) - modelo aberto de moderação de segurança e benchmark.
- [Emergent Misalignment](https://arxiv.org/abs/2502.17424) (2025) - ajuste fino em uma tarefa restrita (código inseguro) produz, inesperadamente, falhas amplas de alinhamento em domínios não relacionados.
- [SafeDialBench](https://arxiv.org/abs/2502.11090) (2025) - benchmark multilíngue de segurança (chinês/inglês) com mais de 4.000 diálogos de vários turnos em 22 cenários e sete estratégias de jailbreak.
- [TeleAI-Safety](https://arxiv.org/abs/2512.05485) (2025) - framework modular de avaliação de jailbreak que integra 19 ataques, 29 defesas e 19 métodos de avaliação em 14 modelos e 12 categorias de risco.
- [IndicSafe](https://arxiv.org/abs/2603.17915) (2026) - benchmark multilíngue de segurança em 12 idiomas índicos; revela concordância interlinguística de 12,8%, com excesso de recusas em escritas de poucos recursos.
- [VLAF: Value-Conflict Alignment Faking](https://arxiv.org/abs/2604.20995) (2026) - falsificação de alinhamento ocorre em 37% dos casos em modelos de apenas 7B quando a política conflita com valores internalizados; a mitigação com vetor de direção reduz isso em 94%.

## PLN por idioma

[Voltar ao topo](#contents)

Recursos organizados por idioma. Clique em uma seção para expandi-la.

<details>
<summary>

### PLN em árabe

</summary>

[Voltar ao topo](#contents)

### Bibliotecas

- [CAMeL Tools](https://github.com/CAMeL-Lab/camel_tools) - kit Python de PLN para árabe, incluindo identificação de dialetos, morfologia e NER.
- [goarabic](https://github.com/01walid/goarabic) - pacote Go para processamento de texto árabe.
- [jsastem](https://github.com/ejtaal/jsastem) - stemmer JavaScript para árabe.
- [PyArabic](https://pypi.org/project/PyArabic/) - biblioteca Python para árabe.
- [RFTokenizer](https://github.com/amir-zeldes/RFTokenizer) - segmentador treinável para árabe, hebraico e copta.
- [Farasa](https://farasa.qcri.org/) - segmentação, etiquetagem POS e NER para árabe do QCRI.

### Modelos e representações vetoriais

- [AraBERT](https://github.com/aub-mind/arabert) - família BERT para árabe.
- [CAMeLBERT](https://github.com/CAMeL-Lab/CAMeLBERT) - modelos BERT para árabe padrão moderno (MSA), dialetal e clássico.
- [AraELECTRA](https://aclanthology.org/2021.wanlp-1.20/) - pré-treinamento eficiente para árabe (lançado junto com [AraBERT](https://github.com/aub-mind/arabert)).
- [Jais](https://huggingface.co/inceptionai/jais-13b) (2023-2024) - família de LMs abertos bilíngues árabe-inglês.
- [ALLaM](https://arxiv.org/abs/2407.15390) (SDAIA, 2024) - modelos fundamentais com foco inicial no árabe.

### Conjuntos de dados

- [Multidomain Datasets](https://github.com/hadyelsahar/large-arabic-sentiment-analysis-resouces) - maior conjunto disponível de recursos multidomínio para análise de sentimentos em árabe.
- [LABR](https://github.com/mohamedadaly/labr) - grande conjunto de dados de resenhas de livros em árabe.
- [Arabic Stopwords](https://github.com/mohataher/arabic-stop-words) - conjunto agregado de palavras de parada em árabe.
- [ArabicMMLU](https://huggingface.co/datasets/MBZUAI/ArabicMMLU) (2024) - benchmark MMLU em árabe.

</details>

<details>
<summary>

### PLN em chinês

</summary>

[Voltar ao topo](#contents)

### Bibliotecas

- [jieba](https://github.com/fxsjy/jieba#jieba-1) - pacote Python para segmentação de palavras chinesas.
- [SnowNLP](https://github.com/isnowfy/snownlp) - pacote Python para PLN em chinês.
- [FudanNLP](https://github.com/FudanNLP/fnlp) - biblioteca Java para processamento de texto chinês.
- [HanLP](https://github.com/hankcs/HanLP) - biblioteca multilíngue de PLN com forte suporte ao chinês.
- [LTP](https://github.com/HIT-SCIR/ltp) - HIT Language Technology Platform: segmentação, POS, NER e análise sintática.

### Modelos e representações vetoriais

- [Chinese-BERT-wwm](https://github.com/ymcui/Chinese-BERT-wwm) - BERT para chinês com mascaramento de palavras inteiras.
- [MacBERT](https://github.com/ymcui/MacBERT) - BERT chinês aprimorado com pré-treinamento MLM como correção.
- [Qwen 2.5 / Qwen 3](https://github.com/QwenLM/Qwen3) - família aberta da Alibaba de LMs robustos em chinês.
- [ChatGLM3 / GLM-4](https://github.com/THUDM/ChatGLM3) - LMs bilíngues chinês-inglês da Tsinghua.
- [Baichuan 2](https://github.com/baichuan-inc/Baichuan2) - LM aberto para chinês.
- [Yi](https://github.com/01-ai/Yi) - LMs abertos bilíngues da 01.AI.
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - modelo MoE aberto e eficiente com forte desempenho em chinês.

### Antologia

- [funNLP](https://github.com/fighting41love/funNLP) - grande coleção de ferramentas e recursos de PLN em chinês.

</details>

<details>
<summary>

### PLN em dinamarquês

</summary>

[Voltar ao topo](#contents)

- [Named Entity Recognition for Danish](https://github.com/ITUnlp/daner)
- [DaNLP](https://github.com/alexandrainst/danlp) - recursos de PLN em dinamarquês.
- [Awesome Danish](https://github.com/fnielsen/awesome-danish) - seleção de recursos para tecnologia da língua dinamarquesa.

</details>

<details>
<summary>

### PLN em neerlandês

</summary>

[Voltar ao topo](#contents)

- [python-frog](https://github.com/proycon/python-frog) - binding Python para Frog, conjunto de ferramentas de PLN para neerlandês (etiquetagem POS, lematização, análise de dependências e NER).
- [SimpleNLG_NL](https://github.com/rfdj/SimpleNLG-NL) - realizador superficial de neerlandês para geração de linguagem natural, baseado na implementação SimpleNLG.
- [Alpino](https://github.com/rug-compling/alpino) - analisador de dependências para neerlandês (também realiza etiquetagem POS e lematização).
- [Kaldi NL](https://github.com/opensource-spraakherkenning-nl/Kaldi_NL) - modelos de reconhecimento de fala em neerlandês baseados em [Kaldi](http://kaldi-asr.org/).
- [spaCy Dutch model](https://spacy.io/models/nl) - PLN de nível industrial com pipeline para neerlandês.

</details>

<details>
<summary>

### PLN em alemão

</summary>

[Voltar ao topo](#contents)

- [German-NLP](https://github.com/adbar/German-NLP) - seleção de recursos e ferramentas de acesso aberto, código aberto e prontos para uso, desenvolvidos com foco no alemão.

</details>

<details>
<summary>

### PLN em húngaro

</summary>

[Voltar ao topo](#contents)

- [awesome-hungarian-nlp](https://github.com/oroszgy/awesome-hungarian-nlp) - seleção de recursos gratuitos para PLN em húngaro.

</details>

<details>
<summary>

### PLN em idiomas índicos

</summary>

[Voltar ao topo](#contents)

### Dados, corpora e bancos de árvores

- [Hindi Dependency Treebank](https://ltrc.iiit.ac.in/treebank_H2014/) - treebank multinível e multirrepresentacional para hindi e urdu.
- [Universal Dependencies Treebank in Hindi](https://universaldependencies.org/treebanks/hi_hdtb/index.html)
  - [Parallel Universal Dependencies Treebank in Hindi](http://universaldependencies.org/treebanks/hi_pud/index.html) - subconjunto menor do treebank mencionado acima.
- [ISI FIRE Stopwords List (Hindi and Bangla)](https://www.isical.ac.in/~fire/data/)
- [Peter Graham's Stopwords List](https://github.com/6/stopwords-json)
- [NLTK Corpus](https://www.nltk.org/book/ch02.html) 60 mil palavras etiquetadas por POS em bangla, hindi, marata e telugo.
- [Hindi Movie Reviews Dataset](https://github.com/goru001/nlp-for-hindi) cerca de mil amostras, três classes de polaridade.
- [BBC News Hindi Dataset](https://github.com/NirantK/hindi2vec/releases/tag/bbc-hindi-v0.1) 4,3 mil amostras, 14 classes.
- [IIT Patna Hindi ABSA Dataset](https://github.com/pnisarg/ABSA) 5,4 mil amostras, 12 domínios, 4 mil termos de aspecto e polaridade em nível de aspecto e sentença em quatro classes.
- [Bangla ABSA](https://github.com/AtikRahman/Bangla_Datasets_ABSA) 5,5 mil amostras, dois domínios e 10 termos de aspecto.
- [IIT Patna Movie Review Sentiment Dataset](https://www.iitp.ac.in/~ai-nlp-ml/resources.html) 2 mil amostras, três rótulos de polaridade.

#### O acesso a corpora/conjuntos de dados que exigem login pode ser solicitado por e-mail

- [SAIL 2015](http://amitavadas.com/SAIL/) amostras de sentimentos rotuladas do Twitter e Facebook em hindi, bengali, tâmil e telugo.
- [IIT Bombay CFILT Resources](https://www.cfilt.iitb.ac.in/) - Sentiwordnet, corpora paralelos rotulados, corpora anotados por sentido e corpus de polaridade em marata.
- [O TDIL-IC reúne muitos recursos úteis e fornece acesso a conjuntos de dados que, de outra forma, seriam restritos](https://tdil-dc.in/index.php?option=com_catalogue&task=viewTools&id=83&lang=en)

### Modelos de linguagem e representações vetoriais de palavras

- [Hindi2Vec](https://nirantk.com/hindi2vec/) e [nlp-for-hindi](https://github.com/goru001/nlp-for-hindi) modelo de linguagem no estilo ULMFiT.
- [IIT Patna Bilingual Word Embeddings Hi-En](https://www.iitp.ac.in/~ai-nlp-ml/resources.html)
- [Fasttext word embeddings in a whole bunch of languages, trained on Common Crawl](https://fasttext.cc/docs/en/crawl-vectors.html) embeddings de palavras FastText em muitos idiomas, treinados no Common Crawl.
- [Hindi and Bengali Word2Vec](https://github.com/Kyubyong/wordvectors)
- [Hindi and Urdu Elmo Model](https://github.com/HIT-SCIR/ELMoForManyLangs)
- [Sanskrit Albert](https://huggingface.co/surajp/albert-base-sanskrit) treinado na Wikipédia em sânscrito e no corpus OSCAR.

### Bibliotecas e ferramentas

- [Multi-Task Deep Morphological Analyzer](https://github.com/Saurav0074/mt-dma) - analisador morfológico profundo para hindi e urdu.
- [Indic NLP Library](https://github.com/anoopkunchukuttan/indic_nlp_library) - recursos auxiliares para tokenização, transliteração e tradução automática em 18 idiomas índicos.
- [SivaReddy's Dependency Parser (Python3 port)](https://github.com/CalmDownKarm/sivareddydependencyparser) - análise de dependências e etiquetagem POS para canarês, hindi e telugo.
- [iNLTK](https://github.com/goru001/inltk) - kit de PLN para idiomas índicos com PyTorch/Fastai.
- [AI4Bharat IndicNLP Suite](https://ai4bharat.iitm.ac.in/) - ferramentas, conjuntos de dados e modelos para 22 idiomas índicos.

### Modelos e representações vetoriais

- [IndicBERT v2](https://github.com/AI4Bharat/IndicBERT) (2022-2024) - BERT multilíngue para 23 idiomas índicos.
- [IndicTrans2](https://github.com/AI4Bharat/IndicTrans2) (2023-2024) - tradução automática de alta qualidade para 22 idiomas índicos.
- [OpenHathi](https://huggingface.co/sarvamai/OpenHathi-7B-Hi-v0.1-Base) (Sarvam AI, 2023) - continuação do LLaMA bilíngue hindi-inglês.
- [Airavata](https://huggingface.co/ai4bharat/Airavata) (2024) - LLM em hindi ajustado por instruções.
- [Sarvam-1](https://www.sarvam.ai/blogs/sarvam-1) (2024) - modelo de linguagem multilíngue treinado do zero em 10 idiomas índicos.
- [BharatGPT / Krutrim](https://www.olakrutrim.com/) (2024) - modelos fundamentais focados em idiomas índicos.

</details>

<details>
<summary>

### PLN em indonésio

</summary>

[Voltar ao topo](#contents)

### Bibliotecas e representações vetoriais

- [bahasa](https://github.com/kangfend/bahasa) - kit de ferramentas de linguagem natural para indonésio.
- [Indonesian Word Embedding](https://github.com/galuhsahid/indonesian-word-embedding)
- [Indonesian fastText](https://s3-us-west-1.amazonaws.com/fasttext-vectors/wiki.id.zip) treinado na Wikipédia.
- [PySastrawi](https://github.com/har07/PySastrawi) - stemmer Python para indonésio, baseado no algoritmo Sastrawi.

### Modelos

- [IndoBERT (IndoNLU)](https://github.com/indobenchmark/indonlu) - modelo de linguagem pré-treinado em indonésio com o conjunto de benchmarks IndoNLU.
- [IndoBERT (IndoLEM)](https://github.com/indolem/indolem) - alternativa ao IndoBERT com o benchmark IndoLEM.
- [NusaCrowd / Cendol](https://github.com/IndoNLP/nusa-crowd) (2023-2024) - conjuntos de dados comunitários em larga escala e LMs Cendol ajustados por instruções para indonésio e idiomas regionais.
- [Sailor](https://github.com/sail-sg/sailor-llm) - LMs abertos do Sudeste Asiático que incluem indonésio.
- [SEA-LION](https://github.com/aisingapore/sealion) (2024) - LM aberto da Singapore AI para o Sudeste Asiático, com bom desempenho em indonésio.

### Conjuntos de dados

- coleções do Kompas e do Tempo no [ILPS](http://ilps.science.uva.nl/resources/bahasa/).
- [PANL10N for PoS tagging](http://www.panl10n.net/english/outputs/Indonesia/UI/0802/UI-1M-tagged.zip): 39 mil sentenças e 900 mil tokens de palavras.
- [IDN for PoS tagging](https://github.com/famrashel/idn-tagged-corpus): 10 mil sentenças e 250 mil tokens de palavras.
- [Indonesian Treebank](https://github.com/famrashel/idn-treebank) e [Universal Dependencies-Indonesian](https://github.com/UniversalDependencies/UD_Indonesian-GSD)
- [IndoSum](https://github.com/kata-ai/indosum) - sumarização e classificação de texto.
- [Wordnet-Bahasa](http://wn-msa.sourceforge.net/) - dicionário semântico grande e gratuito.
- [SEACrowd](https://github.com/SEACrowd/seacrowd-datahub) - hub de dados multilíngue e multimodal que fornece conjuntos de dados e benchmarks padronizados para PLN do Sudeste Asiático (EMNLP 2024).

</details>

<details>
<summary>

### PLN em coreano

</summary>

[Voltar ao topo](#contents)

### Bibliotecas

- [KoNLPy](http://konlpy.org) - pacote Python para processamento de linguagem natural em coreano.
- [Mecab (Korean)](https://eunjeon.blogspot.com/) - biblioteca C++ para PLN em coreano.
- [KoalaNLP](https://koalanlp.github.io/koalanlp/) - biblioteca Scala para PLN em coreano.
- [KoNLP](https://cran.r-project.org/package=KoNLP) - pacote R para PLN em coreano.
- [kss](https://github.com/hyunwoongko/kss) - segmentador de sentenças em coreano.
- [Kiwi](https://github.com/bab2min/Kiwi) - analisador morfológico rápido para coreano.
- [Garu](https://github.com/ongjin/garu) - analisador morfológico de coreano nativo do navegador, executado inteiramente no cliente via WebAssembly (modelo de 1 MB, uso off-line, MIT).

### Modelos e representações vetoriais

- [KoBERT](https://github.com/SKTBrain/KoBERT) - BERT em coreano da SKT.
- [KLUE-RoBERTa](https://github.com/KLUE-benchmark/KLUE) - modelos treinados no benchmark KLUE.
- [Polyglot-Ko](https://github.com/EleutherAI/polyglot) - LMs abertos em coreano.
- [EXAONE 3.5](https://github.com/LG-AI-EXAONE) (LG, 2024) - família aberta de LMs bilíngues coreano-inglês.
- [HyperCLOVA X](https://www.ncloud.com/product/aiService/clovaStudio) - modelo fundamental em coreano da Naver.

### Blogs e tutoriais

- [dsindex's blog](https://dsindex.github.io/)
- [Kangwon University's NLP course in Korean](http://cs.kangwon.ac.kr/~leeck/NLP/) curso de PLN em coreano da Universidade de Kangwon.

### Conjuntos de dados

- [KAIST Corpus](http://semanticweb.kaist.ac.kr/home/index.php/KAIST_Corpus) - corpus em coreano do Korea Advanced Institute of Science and Technology.
- [Naver Sentiment Movie Corpus in Korean](https://github.com/e9t/nsmc/)
- [Chosun Ilbo archive](http://srchdb1.chosun.com/pdf/i_archive/) - conjunto de dados em coreano de um importante jornal sul-coreano.
- [Chat data](https://github.com/songys/Chatbot_data) - dados de chatbot em coreano.
- [Petitions](https://github.com/akngs/petitions) - dados de petições encerradas do site nacional de petições da Casa Azul.
- [Korean Parallel corpora](https://github.com/j-min/korean-parallel-corpora) - conjunto de dados de NMT do coreano para francês e inglês.
- [KorQuAD](https://korquad.github.io/) - conjunto de dados SQuAD em coreano (v1.0 e v2.1), com fonte HTML da Wikipédia.

</details>

<details>
<summary>

### PLN em persa

</summary>

[Voltar ao topo](#contents)

### Bibliotecas

- [Hazm](https://github.com/roshan-research/hazm) - kit de PLN para persa.
- [Parsivar](https://github.com/ICTRC/Parsivar) - kit de processamento de língua persa.
- [Perke](https://github.com/AlirezaTheH/perke) - extração de frases-chave em persa.
- [Perstem](https://github.com/jonsafari/perstem) - stemmer, analisador morfológico e etiquetador POS parcial para persa.
- [ParsiAnalyzer](https://github.com/NarimanN2/ParsiAnalyzer) - analisador de persa para Elasticsearch.
- [virastar](https://github.com/aziz/virastar) - limpeza de texto em persa.

### Modelos

- [ParsBERT](https://github.com/hooshvare/parsbert) - BERT para persa.
- [PersianMind](https://huggingface.co/universitytehran/PersianMind-v1.0) (2023-2024) - modelo de linguagem em persa ajustado por instruções.
- [Dorna](https://huggingface.co/PartAI/Dorna-Llama3-8B-Instruct) (Part AI, 2024) - modelo de instruções em persa baseado no Llama 3.

### Conjuntos de dados

- [Bijankhan Corpus](https://dbrg.ut.ac.ir/بیژن%E2%80%8Cخان/) - corpus etiquetado adequado à pesquisa de PLN em persa (farsi), com cerca de 2,6 milhões de palavras etiquetadas manualmente em 40 categorias POS.
- [Uppsala Persian Corpus (UPC)](https://sites.google.com/site/mojganserajicom/home/upc) - grande corpus persa de acesso gratuito, com 2,7 milhões de tokens anotados com 31 categorias POS.
- [Large-Scale Colloquial Persian](http://hdl.handle.net/11234/1-3195) - LSCP: 120 milhões de sentenças de 27 milhões de tweets coloquiais em persa, com anotações de dependência, POS e sentimentos.
- [ArmanPersoNERCorpus](https://github.com/HaniehP/PersianNER) - 250 mil tokens e 7.682 sentenças com rótulos NER no formato IOB.
- [FarsiYar PersianNER](https://github.com/Text-Mining/Persian-NER) - cerca de 25 milhões de tokens e 1 milhão de sentenças em persa do [Persian Wikipedia Corpus](https://github.com/Text-Mining/Persian-Wikipedia-Corpus).
- [PERLEX](http://farsbase.net/PERLEX.html) - primeiro conjunto de dados persa para extração de relações (tradução da tarefa 8 do SemEval-2010).
- [Persian Syntactic Dependency Treebank](http://dadegan.ir/catalog/perdt) - 29.982 sentenças anotadas que cobrem a maioria dos verbos do léxico de valência persa.
- [Uppsala Persian Dependency Treebank (UPDT)](http://stp.lingfil.uu.se/~mojgan/UPDT.html) - corpus anotado sintaticamente com base em dependências.
- [Hamshahri](https://dbrg.ut.ac.ir/hamshahri/) - coleção padrão e confiável de textos em persa, usada no CLEF de 2008-2009.

</details>

<details>
<summary>

### PLN em polonês

</summary>

[Voltar ao topo](#contents)

- [Polish-NLP](https://github.com/ksopyla/awesome-nlp-polish) - seleção de recursos dedicados à PLN em polonês: modelos, ferramentas e conjuntos de dados.

</details>

<details>
<summary>

### PLN em português

</summary>

[Voltar ao topo](#contents)

- [Portuguese-nlp](https://github.com/ajdavidl/Portuguese-NLP) - seleção de recursos e ferramentas de PLN em português.

### Modelos

- [BERTimbau](https://github.com/neuralmind-ai/portuguese-bert) - BERT para português brasileiro.
- [Sabiá](https://huggingface.co/maritaca-ai) (Maritaca AI, 2023-2024) - LMs abertos voltados ao português.
- [Albertina](https://huggingface.co/PORTULAN) (PORTULAN, 2023-2024) - LMs portugueses somente codificador para PT-PT e PT-BR.

</details>

<details>
<summary>

### PLN em espanhol

</summary>

[Voltar ao topo](#contents)

### Bibliotecas

- [spanlp](https://github.com/jfreddypuentes/spanlp) - biblioteca Python para detectar, censurar e limpar palavrões, discurso de ódio e bullying em espanhol, com dados de 21 países hispanófonos.

### Dados

- [Columbian Political Speeches](https://github.com/dav009/LatinamericanTextResources)
- [Copenhagen Treebank](https://mbkromann.github.io/copenhagen-dependency-treebank/)
- [Spanish Billion Words Corpus with Word2Vec embeddings](https://github.com/crscardellino/sbwce)
- [Compilation of Spanish Unannotated Corpora](https://github.com/josecannete/spanish-unannotated-corpora)

### Modelos e representações vetoriais

- [BETO](https://github.com/dccuchile/beto) - BERT para espanhol.
- [RoBERTa-bne](https://huggingface.co/PlanTL-GOB-ES/roberta-base-bne) - RoBERTa em espanhol treinado no corpus da Biblioteca Nacional da Espanha.
- [Latxa](https://github.com/hitz-zentroa/latxa) (2024) - modelo fundamental aberto para basco, que também abrange espanhol.
- [Salamandra](https://huggingface.co/BSC-LT/salamandra-7b) (BSC, 2024) - modelo de linguagem multilíngue com forte cobertura do espanhol, do Barcelona Supercomputing Center.
- [RigoChat](https://huggingface.co/IIC/RigoChat-7b-v2) (2024) - modelo aberto em espanhol ajustado por instruções.
- [Spanish Word Embeddings (multiple methods/corpora)](https://github.com/dccuchile/spanish-word-embeddings)
- [Spanish fastText Embeddings](https://github.com/BotCenter/spanishWordEmbeddings)
- [Spanish sent2vec Sentence Embeddings](https://github.com/BotCenter/spanishSent2Vec)

</details>

<details>
<summary>

### PLN em tailandês

</summary>

[Voltar ao topo](#contents)

### Bibliotecas

- [PyThaiNLP](https://github.com/PyThaiNLP/pythainlp) - PLN em tailandês com Python.
- [JTCC](https://github.com/wittawatj/jtcc) - biblioteca Java de agrupamento de caracteres.
- [CutKum](https://github.com/pucktada/cutkum) - segmentação de palavras com aprendizado profundo no TensorFlow.
- [Thai Language Toolkit](https://pypi.python.org/pypi/tltk/) - tokenização e etiquetagem POS.
- [SynThai](https://github.com/KenjiroAI/SynThai) - segmentação de palavras e etiquetagem POS com aprendizado profundo.

### Modelos

- [WangchanBERTa](https://github.com/vistec-AI/thai2transformers) - modelo de linguagem tailandês pré-treinado.
- [Typhoon](https://huggingface.co/scb10x) (SCB 10X, 2024) - família aberta de LLMs em tailandês.
- [OpenThaiGPT](https://huggingface.co/openthaigpt) (2023-2024) - modelos abertos em tailandês ajustados por instruções.
- [Sailor](https://github.com/sail-sg/sailor-llm) - família aberta de LMs do Sudeste Asiático que inclui tailandês.

### Dados

- [Inter-BEST](https://www.nectec.or.th/corpus/index.php?league=pm) - corpus de texto com 5 milhões de palavras e segmentação de palavras.
- [Prime Minister 29](https://github.com/PyThaiNLP/lexicon-thai/tree/master/thai-corpus/Prime%20Minister%2029) - conjunto de dados de discursos do atual primeiro-ministro da Tailândia.

</details>

<details>
<summary>

### PLN em ucraniano

</summary>

[Voltar ao topo](#contents)

- [awesome-ukrainian-nlp](https://github.com/asivokon/awesome-ukrainian-nlp) - seleção de conjuntos de dados, modelos e outros recursos de PLN em ucraniano.
- [UkrainianLT](https://github.com/Helsinki-NLP/UkrainianLT) - seleção com foco em tradução automática e processamento de fala.

</details>

<details>
<summary>

### PLN em urdu

</summary>

[Voltar ao topo](#contents)

### Bibliotecas

- [urduhack](https://github.com/urduhack/urduhack) - biblioteca de PLN para urdu.

### Conjuntos de dados

- [Collection of Urdu datasets](https://github.com/mirfan899/Urdu) - POS, NER e outras tarefas de PLN.

</details>

<details>
<summary>

### PLN em uzbeque

</summary>

[Voltar ao topo](#contents)

### Conjuntos de dados

- [SOAS English-Uzbek RAG Evaluation](https://github.com/rajantripathi/soas-rag-evaluation) - benchmark bilíngue de avaliação de recuperação para RAG fundamentado culturalmente. 400 linhas, EN+UZ, MIT/CC-BY-4.0.

</details>

<details>
<summary>

### PLN em vietnamita

</summary>

[Voltar ao topo](#contents)

### Bibliotecas

- [underthesea](https://github.com/undertheseanlp/underthesea) - kit de PLN para vietnamita.
- [vn.vitk](https://github.com/phuonglh/vn.vitk) - kit de processamento de texto vietnamita.
- [VnCoreNLP](https://github.com/vncorenlp/VnCoreNLP) - kit de PLN para vietnamita.
- [pyvi](https://github.com/trungtv/pyvi) - kit Python básico de PLN para vietnamita.
- [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - conversão de texto em fala vietnamita no dispositivo, com clonagem de voz.

### Modelos e representações vetoriais

- [PhoBERT](https://github.com/VinAIResearch/PhoBERT) - modelo de linguagem pré-treinado para vietnamita.
- [BARTpho](https://github.com/VinAIResearch/BARTpho) - modelo pré-treinado sequência a sequência para vietnamita.
- [PhoGPT](https://github.com/VinAIResearch/PhoGPT) (VinAI, 2023-2024) - modelo generativo de linguagem aberto para vietnamita.
- [Vistral](https://huggingface.co/Viet-Mistral/Vistral-7B-Chat) (2024) - modelo de conversa em vietnamita baseado em Mistral.
- [Sailor](https://github.com/sail-sg/sailor-llm) (2024) - família aberta de LMs multilíngues que abrange vietnamita, tailandês, indonésio e outros idiomas do Sudeste Asiático.

### Dados

- [Vietnamese Treebank](https://vlsp.hpda.vn/demo/?page=resources&lang=en) - 10 mil sentenças para a tarefa de análise de constituintes.
- [BKTreeBank](https://arxiv.org/pdf/1710.05519.pdf) - treebank de dependências vietnamita.
- [UD_Vietnamese](https://github.com/UniversalDependencies/UD_Vietnamese-VTB) - treebank vietnamita Universal Dependencies.
- [VIVOS](https://ailab.hcmus.edu.vn/vivos/) - corpus gratuito de fala vietnamita, com 15 horas de gravações (HCMUS AILab).
- [VNTQcorpus(big).txt](http://viet.jnlp.org/download-du-lieu-tu-vung-corpus) - 1,75 milhão de sentenças de notícias.
- [ViText2SQL](https://github.com/VinAIResearch/ViText2SQL) - conjunto de dados vietnamita de análise semântica Texto-para-SQL (EMNLP-2020 Findings).
- [EVB Corpus](https://github.com/qhungngo/EVBCorpus) - 20 milhões de palavras em 15 livros bilíngues, 100 textos paralelos inglês-vietnamita, 250 textos jurídicos paralelos, 5 mil notícias e 2 mil legendas de filmes.

</details>

### Outros idiomas

- Russo: [pymorphy2](https://github.com/kmike/pymorphy2) - bom etiquetador POS para russo.
- Idiomas asiáticos: implementação do [ICU Tokenizer](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu-tokenizer.html) no ElasticSearch para tailandês, lao, chinês, japonês e coreano.
- Idiomas antigos: [CLTK](https://github.com/cltk/cltk): Classical Language Toolkit é uma biblioteca Python e uma coleção de textos para PLN em idiomas antigos.
- Hebraico: [NLPH_Resources](https://github.com/NLPH/NLPH_Resources) - coleção de artigos, corpora e recursos linguísticos para PLN em hebraico.

[Voltar ao topo](#contents)

## Veja também

Listas selecionadas de tópicos correlatos que não fazem parte do escopo:

- [awesome-llm](https://github.com/Hannibal046/Awesome-LLM) - recursos gerais para modelos de linguagem grandes.
- [awesome-generative-ai](https://github.com/steven2358/awesome-generative-ai) - IA generativa em diferentes modalidades.
- [awesome-rag](https://github.com/Danielskry/Awesome-RAG) - sistemas e ferramentas de geração aumentada por recuperação.
- [awesome-prompt-engineering](https://github.com/promptslab/Awesome-Prompt-Engineering) - técnicas de prompting e bibliotecas de modelos de prompt.
- [awesome-mlops](https://github.com/visenger/awesome-mlops) - aprendizado de máquina em produção, incluindo disponibilização de LLMs.

## Citação

Se este repositório for útil, considere citar esta lista:

```bibtex
@misc{awesome-nlp,
  title  = {Awesome NLP},
  author = {Kim, Keon Woo},
  year   = {2018},
  url    = {https://github.com/keon/awesome-nlp},
  note   = {GitHub repository}
}
```

## Licença
[Licença](./LICENSE) - CC0
