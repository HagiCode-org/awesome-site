# awesome-nlp

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

---

> **Sponsorisé par [Atlas Cloud](https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp)**
>
> <a href="https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/atlas-cloud-dark.png"><img src="assets/atlas-cloud-light.png" alt="Atlas Cloud" width="220" /></picture></a>
>
> **Plateforme d’agrégation d’API d’IA avec un point de terminaison LLM compatible avec OpenAI**, pour des tâches de TAL telles que la traduction, le résumé, la génération multilingue et l’extraction structurée.

---

Une sélection de ressources consacrées au traitement automatique des langues.

_Veuillez lire les [consignes de contribution](contributing.md) avant de contribuer. Ajoutez vos ressources TAL préférées en ouvrant une [pull request](https://github.com/keonkim/awesome-nlp/pulls)._

## Périmètre

Cette liste couvre le traitement automatique des langues : analyse linguistique, outils multilingues, méthodes classiques et neuronales, jeux de données et évaluation. Les grands modèles de langue ne sont inclus que lorsqu’ils font progresser ou évaluent une tâche ou une capacité centrale du TAL (tokenisation, multilinguisme, traduction automatique, résumé, reconnaissance d’entités nommées, questions-réponses, factualité, sondage, distillation). Les chatbots généralistes, frameworks d’agents, dépôts de modèles de prompts, outils de génération de code et kits de démarrage d’applications RAG figurent dans d’autres listes — voir [Voir aussi](#see-also).

## Sommaire

* [Synthèses et tendances de la recherche](#research-summaries-and-trends)
* [Laboratoires de recherche en TAL renommés](#prominent-nlp-research-labs)
* [Tutoriels](#tutorials)
  * [Lectures](#reading-content)
  * [Vidéos et cours](#videos-and-online-courses)
  * [Livres](#books)
* [Bibliothèques](#libraries)
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
* [Services](#services)
* [Outils d’annotation](#annotation-tools)
* [Tâches et méthodes](#tasks-and-methods)
  * [Représentations vectorielles de texte](#text-embeddings)
  * [Tokenisation, morphologie et segmentation](#tokenization-morphology-and-segmentation)
  * [Étiquetage morphosyntaxique et analyse des dépendances](#pos-tagging-and-dependency-parsing)
  * [Reconnaissance d’entités nommées et extraction d’informations](#named-entity-recognition-and-information-extraction)
  * [Résolution de coréférences](#coreference-resolution)
  * [Classification de texte et analyse des sentiments](#text-classification-and-sentiment-analysis)
  * [Modélisation de sujets](#topic-modeling)
  * [Résumé automatique](#summarization)
  * [Traduction automatique](#machine-translation)
  * [Questions-réponses et compréhension écrite](#question-answering-and-reading-comprehension)
  * [Extraction d’informations au-delà de la reconnaissance d’entités](#information-extraction-beyond-ner)
  * [Recherche et représentations vectorielles](#retrieval-and-embeddings)
  * [Parole et texte](#speech-and-text)
* [Jeux de données](#datasets)
* [Cadres TAL multilingues](#multilingual-nlp-frameworks)
* [Modèles de langue pour le TAL](#language-models-for-nlp)
  * [Préentraînement et adaptation](#pretraining-and-adaptation)
  * [Modèles multilingues et interlingues](#multilingual-and-cross-lingual-models)
  * [Évaluation et benchmarks](#evaluation-and-benchmarks)
  * [Raisonnement et calcul à l’inférence](#reasoning-and-test-time-compute)
  * [Long contexte et architectures alternatives](#long-context-and-alternative-architectures)
  * [Factualité, hallucinations et calibration](#factuality-hallucination-calibration)
  * [Sondage et interprétabilité](#probing-and-interpretability)
  * [Modèles de langue compacts et efficaces](#efficient-and-small-language-models)
  * [Ajustement par instructions et optimisation des préférences](#instruction-tuning-and-preference-optimization)
  * [Biais, équité et sécurité en TAL](#bias-fairness-safety-in-nlp)
* [TAL par langue](#nlp-per-language)
  * [TAL en arabe](#nlp-in-arabic)
  * [TAL en chinois](#nlp-in-chinese)
  * [TAL en danois](#nlp-in-danish)
  * [TAL en néerlandais](#nlp-in-dutch)
  * [TAL en allemand](#nlp-in-german)
  * [TAL en hongrois](#nlp-in-hungarian)
  * [TAL dans les langues indiennes](#nlp-in-indic-languages)
  * [TAL en indonésien](#nlp-in-indonesian)
  * [TAL en coréen](#nlp-in-korean)
  * [TAL en persan](#nlp-in-persian)
  * [TAL en polonais](#nlp-in-polish)
  * [TAL en portugais](#nlp-in-portuguese)
  * [TAL en espagnol](#nlp-in-spanish)
  * [TAL en thaï](#nlp-in-thai)
  * [TAL en ukrainien](#nlp-in-ukrainian)
  * [TAL en ourdou](#nlp-in-urdu)
  * [TAL en ouzbek](#nlp-in-uzbek)
  * [TAL en vietnamien](#nlp-in-vietnamese)
  * [Autres langues](#other-languages)
* [Voir aussi](#see-also)
* [Citation](#citation)

## Synthèses et tendances de la recherche

Où suivre les recherches actuelles en TAL :

* [ACL Anthology](https://aclanthology.org/) - archive de référence des articles publiés à l’ACL, EMNLP, NAACL, EACL, COLING et dans des conférences apparentées.
* [NLP-Progress](https://nlpprogress.com/) - suit les résultats de l’état de l’art pour les tâches et jeux de données courants du TAL.
* [Papers With Code: NLP](https://paperswithcode.com/area/natural-language-processing) - articles, benchmarks et classements pour les tâches de TAL.
* [Sebastian Ruder's newsletter](https://newsletter.ruder.io/) - synthèses régulières de la recherche et des tendances en TAL.
* [ACL Rolling Review](https://aclrollingreview.org/) - processus d’évaluation continue alimentant les conférences affiliées à l’ACL.
* [The Gradient](https://thegradient.pub/) - essais approfondis sur l’apprentissage automatique et la recherche en TAL.
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp) - résumés illustrés d’articles récents.

### Repères historiques

* [NLP's ImageNet moment has arrived](https://thegradient.pub/nlp-imagenet/) - essai de 2018 sur l’essor des modèles de langue préentraînés.
* [Survey of the State of the Art in Natural Language Generation](https://arxiv.org/abs/1703.09902) - état de l’art de la génération de langue naturelle publié en 2017.
* [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) et [The Illustrated BERT, ELMo, and co.](https://jalammar.github.io/illustrated-bert/) - explications visuelles de référence.

## Laboratoires de recherche en TAL renommés
[Retour en haut](#contents)

* [The Berkeley NLP Group](http://nlp.cs.berkeley.edu/index.shtml) - parmi ses contributions notables figure un outil permettant de reconstituer des langues disparues depuis longtemps, cité [ici](https://www.bbc.com/news/science-environment-21427896), en exploitant les corpus de 637 langues parlées aujourd’hui en Asie et dans le Pacifique pour reconstituer leur langue ancêtre.
* [Language Technologies Institute, Carnegie Mellon University](http://www.cs.cmu.edu/~nasmith/nlp-cl.html) - parmi ses projets notables figurent [Avenue Project](http://www.cs.cmu.edu/~avenue/), un système de traduction automatique fondé sur la syntaxe pour des langues menacées comme le quechua et l’aymara, ainsi que [Noah's Ark](http://www.cs.cmu.edu/~ark/), qui a créé [AQMAR](http://www.cs.cmu.edu/~ark/AQMAR/) pour améliorer les outils de TAL en arabe.
* [NLP research group, Columbia University](http://www1.cs.columbia.edu/nlp/index.cgi) - a créé BOLT (gestion interactive des erreurs dans les systèmes de traduction vocale) ainsi qu’un projet sans nom visant à caractériser le rire dans les dialogues.
* [The Center or Language and Speech Processing, John Hopkins University](http://clsp.jhu.edu/) - récemment médiatisé pour avoir développé un logiciel de reconnaissance vocale destiné à créer un test diagnostique de la maladie de Parkinson, présenté [ici](https://www.clsp.jhu.edu/2019/03/27/speech-recognition-software-and-machine-learning-tools-are-being-used-to-create-diagnostic-test-for-parkinsons-disease/#.XNFqrIkzYdU).
* [Computational Linguistics and Information Processing Group, University of Maryland](https://wiki.umiacs.umd.edu/clip/index.php/Main_Page) - parmi ses contributions notables figurent [Human-Computer Cooperation or Word-by-Word Question Answering](http://www.umiacs.umd.edu/~jbg/projects/IIS-1652666) et la modélisation de l’évolution des représentations phonétiques.
* [Penn Natural Language Processing, University of Pennsylvania](https://nlp.cis.upenn.edu/) - célèbre pour avoir créé le [Penn Treebank](https://catalog.ldc.upenn.edu/LDC99T42) et le [Penn Discourse Treebank](https://www.cis.upenn.edu/~pdtb/).
* [The Stanford Nautral Language Processing Group](https://nlp.stanford.edu/)- l’un des meilleurs laboratoires de recherche en TAL au monde, connu notamment pour avoir créé [Stanford CoreNLP](https://nlp.stanford.edu/software/corenlp.shtml) et son [système de résolution de coréférences](https://nlp.stanford.edu/software/dcoref.shtml).


## Tutoriels
[Retour en haut](#contents)

### Lectures

Apprentissage automatique général

* [Machine Learning 101](https://docs.google.com/presentation/d/1kSuQyW5DTnkVaZEjGYCkfOxvzCqGEFzWBy4e9Uedd9k/edit?usp=sharing) : le responsable de la création chez Google présente l’apprentissage automatique aux ingénieurs comme aux cadres.
* [AI Playbook](https://aiplaybook.a16z.com/) - un excellent guide d’a16z sur l’IA à transmettre à vos responsables ou à utiliser dans vos présentations.
* [Sebastian Ruder's Newsletter](https://newsletter.ruder.io/) : des commentaires sur le meilleur de la recherche en TAL.
* [How To Label Data](https://www.lighttag.io/how-to-label-data/) : guide de gestion de projets d’annotation linguistique de grande ampleur.
* [Depends on the Definition](https://www.depends-on-the-definition.com/) : collection d’articles de blog couvrant un large éventail de sujets du TAL avec des mises en œuvre détaillées.

Introduction et guides du TAL

* [Understand & Implement Natural Language Processing](https://www.analyticsvidhya.com/blog/2017/01/ultimate-guide-to-understand-implement-natural-language-processing-codes-in-python/)
* [NLP in Python](http://github.com/NirantK/nlp-python-deep-learning) - collection de notebooks GitHub.
* [Natural Language Processing: An Introduction](https://academic.oup.com/jamia/article/18/5/544/829676) - Oxford.
* [NLP from Scratch with PyTorch](https://pytorch.org/tutorials/intermediate/nlp_from_scratch_index.html)
* [Hands-On NLTK Tutorial](https://github.com/hb20007/hands-on-nltk-tutorial) - tutoriels NLTK sous forme de notebooks Jupyter.
* [Natural Language Processing with Python – Analyzing Text with the Natural Language Toolkit](https://www.nltk.org/book/) - livre disponible en ligne et sur papier présentant les concepts du TAL à l’aide de NLTK. Ses auteurs ont également créé la bibliothèque NLTK.
* [Train a new language model from scratch](https://huggingface.co/blog/how-to-train) - Hugging Face 🤗.
* [Advanced NLP with spaCy](https://course.spacy.io/en/) - cours gratuit en ligne sur le traitement de texte, l’analyse de données à grande échelle, les pipelines de traitement et l’entraînement de réseaux neuronaux pour des tâches de TAL personnalisées.
* [Kaggle NLP Learning Guide](https://www.kaggle.com/learn-guide/natural-language-processing) - tutoriels accessibles aux débutants, comprenant des guides de démarrage, l’apprentissage profond appliqué au TAL et des explications visuelles de techniques comme BERT, GloVe et TF-IDF.

Blogs et infolettres

* [Deep Learning, NLP, and Representations](https://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
* [The Illustrated BERT, ELMo, and co. (How NLP Cracked Transfer Learning)](https://jalammar.github.io/illustrated-bert/) et [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
* [Natural Language Processing](https://nlpers.blogspot.com/) par Hal Daumé III.
* [arXiv: Natural Language Processing (Almost) from Scratch](https://arxiv.org/pdf/1103.0398.pdf)
* [Karpathy's The Unreasonable Effectiveness of Recurrent Neural Networks](https://karpathy.github.io/2015/05/21/rnn-effectiveness)
* [Machine Learning Mastery: Deep Learning for Natural Language Processing](https://machinelearningmastery.com/category/natural-language-processing)
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp)

### Vidéos et cours en ligne
[Retour en haut](#contents)

* [Advanced Natural Language Processing](https://people.cs.umass.edu/~miyyer/cs685_f20/) - CS 685, département d’informatique de l’UMass Amherst.
* [Deep Natural Language Processing](https://github.com/oxford-cs-deepnlp-2017/lectures) - série de cours d’Oxford.
* [Deep Learning for Natural Language Processing (cs224-n)](https://web.stanford.edu/class/cs224n/) - cours de Stanford de Richard Socher et Christopher Manning.
* [Neural Networks for NLP](http://phontron.com/class/nn4nlp2017/) - cours du Language Technology Institute de Carnegie Mellon.
* [Deep NLP Course](https://github.com/yandexdataschool/nlp_course) par Yandex Data School, qui aborde des notions importantes allant des représentations vectorielles de texte à la traduction automatique, notamment la modélisation de séquences et les modèles de langue.
* [fast.ai Code-First Intro to Natural Language Processing](https://www.fast.ai/2019/07/08/fastai-nlp/) - présente un mélange de sujets classiques du TAL (expressions régulières, SVD, Bayes naïf, tokenisation) et d’approches neuronales récentes (RNN, seq2seq, GRU et Transformer), tout en abordant des enjeux éthiques urgents comme les biais et la désinformation. Les notebooks Jupyter sont disponibles [ici](https://github.com/fastai/course-nlp).
* [Machine Learning University - Accelerated Natural Language Processing](https://www.youtube.com/playlist?list=PL8P_Z6C4GcuWfAq8Pt6PBYlck4OprHXsw) - les cours vont de l’introduction au TAL et au traitement de texte jusqu’aux réseaux neuronaux récurrents et aux Transformers.
Le matériel est disponible [ici](https://github.com/aws-samples/aws-machine-learning-university-accelerated-nlp).
* [Applied Natural Language Processing](https://www.youtube.com/playlist?list=PLH-xYrxjfO2WyR3pOAB006CYMhNt4wTqp)- série de cours de l’IIT Madras, des notions fondamentales aux autoencodeurs et au-delà. Les notebooks GitHub du cours sont également disponibles [ici](https://github.com/Ramaseshanr/anlp).
* [DeepLearning.AI Natural Language Processing Specialization](https://www.deeplearning.ai/courses/natural-language-processing-specialization/) - programme en quatre cours sur l’analyse des sentiments, les représentations vectorielles de mots, les RNN, les LSTM, les mécanismes d’attention et les modèles Transformer comme BERT et T5, appliqués notamment à la traduction automatique et au résumé.
* [Stanford CS336: Language Modeling from Scratch](https://stanford-cs336.github.io/) - cours de bout en bout sur la création de modèles de langue, couvrant les données, la tokenisation, l’entraînement et l’évaluation.
* [Stanford CS25: Transformers United](https://web.stanford.edu/class/cs25/) - série de séminaires avec des conférences données par les auteurs de travaux récents sur les Transformers et le TAL.
* [Cohere LLM University](https://cohere.com/llmu) - cours gratuit sur les grands modèles de langue, les représentations vectorielles, la recherche sémantique et les applications du TAL.
* [Hugging Face NLP Course](https://huggingface.co/learn/nlp-course) - cours pratique de TAL utilisant les bibliothèques Transformers, Datasets et Tokenizers.
* [NLP Demystified](https://www.nlpdemystified.org/) - cours gratuit, accessible aux débutants, sur les fondamentaux du TAL jusqu’aux Transformers, avec des notebooks Python/Jupyter.


### Livres

* [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) - ouvrage gratuit du professeur Dan Jurafsky.
* [Natural Language Processing](https://github.com/jacobeisenstein/gt-nlp-class) - notes de cours gratuites de Jacob Eisenstein, Ph. D., à Georgia Tech.
* [NLP with PyTorch](https://github.com/joosthub/PyTorchNLPBook) - par Brian et Delip Rao.
* [Text Mining in R](https://www.tidytextmining.com)
* [Natural Language Processing with Python](https://www.nltk.org/book/)
* [Practical Natural Language Processing](https://www.oreilly.com/library/view/practical-natural-language/9781492054047/)
* [Natural Language Processing with Spark NLP](https://www.oreilly.com/library/view/natural-language-processing/9781492047759/)
* [Deep Learning for Natural Language Processing](https://www.manning.com/books/deep-learning-for-natural-language-processing) par Stephan Raaijmakers.
* [Real-World Natural Language Processing](https://www.manning.com/books/real-world-natural-language-processing) - par Masato Hagiwara.
* [Natural Language Processing in Action, Second Edition](https://www.manning.com/books/natural-language-processing-in-action-second-edition) - par Hobson Lane et Maria Dyshel.
* [Transformers in Action](https://www.manning.com/books/transformers-in-action) - par Nicole Koenigstein.
* [The Math Behind Artificial Intelligence](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book) - par Tiago Monteiro | ouvrage gratuit de FreeCodeCamp expliquant les mathématiques de l’IA dans un anglais accessible, du point de vue de l’ingénierie. Il traite de l’algèbre linéaire, du calcul, des probabilités et statistiques ainsi que de la théorie de l’optimisation, à l’aide d’analogies, d’applications concrètes et d’exemples de code Python.
  
## Bibliothèques

[Retour en haut](#contents)

* <a id="node-js">**Node.js et JavaScript** - Bibliothèques Node.js pour le TAL</a> | [Retour en haut](#contents)
  * [Twitter-text](https://github.com/twitter/twitter-text) - implémentation JavaScript de la bibliothèque de traitement de texte de Twitter.
  * [Knwl.js](https://github.com/benhmoore/Knwl.js) - processeur de langue naturelle en JavaScript.
  * [Retext](https://github.com/retextjs/retext) - système extensible d’analyse et de manipulation du langage naturel.
  * [NLP Compromise](https://github.com/spencermountain/compromise) - traitement du langage naturel dans le navigateur.
  * [Natural](https://github.com/NaturalNode/natural) - fonctions générales de traitement du langage naturel pour Node.js.
  * [Poplar](https://github.com/synyi/poplar) - outil Web d’annotation pour le traitement automatique des langues (TAL).
  * [NLP.js](https://github.com/axa-group/nlp.js) - bibliothèque TAL pour créer des robots conversationnels.
  * [node-question-answering](https://github.com/huggingface/node-question-answering) - système de questions-réponses rapide et prêt pour la production avec DistilBERT dans Node.js.

* <a id="python"> **Python** - Bibliothèques TAL pour Python</a> | [Retour en haut](#contents)
  - [sentimental-onix](https://github.com/sloev/sentimental-onix) Modèles d’analyse des sentiments pour spaCy avec ONNX.
  - [TextAttack](https://github.com/QData/TextAttack) - attaques adversariales, entraînement adversarial et augmentation des données en TAL.
  - [TextBlob](http://textblob.readthedocs.org/) - API cohérente pour explorer les tâches courantes de traitement automatique des langues (TAL). Elle s’appuie sur les solides fondations de [Natural Language Toolkit (NLTK)](https://www.nltk.org/) et de [Pattern](https://github.com/clips/pattern), avec lesquelles elle s’intègre parfaitement :+1:
  - [spaCy](https://github.com/explosion/spaCy) - TAL de qualité industrielle avec Python et Cython :+1:
    - [textacy](https://github.com/chartbeat-labs/textacy) - outils TAL de haut niveau reposant sur spaCy.
  - [gensim](https://radimrehurek.com/gensim/index.html) - bibliothèque Python de modélisation sémantique non supervisée à partir de texte brut :+1:
  - [scattertext](https://github.com/JasonKessler/scattertext) - bibliothèque Python pour créer des visualisations d3 montrant les différences de langue entre des corpus.
  - [GluonNLP](https://github.com/dmlc/gluon-nlp) *(archivé)* - boîte à outils d’apprentissage profond pour le TAL, fondée sur MXNet/Gluon.
  - [AllenNLP](https://github.com/allenai/allennlp) *(archivé)* - bibliothèque de recherche en TAL fondée sur PyTorch pour développer des modèles d’apprentissage profond de pointe couvrant de nombreuses tâches linguistiques.
  - [PyTorch-NLP](https://github.com/PetrochukM/PyTorch-NLP) - boîte à outils de recherche en TAL conçue pour le prototypage rapide, avec de meilleurs chargeurs de données et de vecteurs de mots, des représentations de couches de réseaux neuronaux et des métriques TAL courantes comme BLEU.
  - [Rosetta](https://github.com/columbia-applied-data-science/rosetta) - outils de traitement de texte et interfaces, par exemple pour Vowpal Wabbit.
  - [PyNLPl](https://github.com/proycon/pynlpl) - bibliothèque Python de traitement automatique des langues polyvalente, prenant en charge certains formats spécifiques comme les modèles de langue ARPA, les tables de phrases Moses et les alignements GIZA++.
  - [foliapy](https://github.com/proycon/foliapy) - bibliothèque Python pour manipuler [FoLiA](https://proycon.github.io/folia/), un format XML d’annotation linguistique.
  - [PySS3](https://github.com/sergioburdisso/pyss3) - paquet Python qui implémente le classificateur de texte interprétable SS3 et fournit des outils de visualisation interactifs expliquant ses prédictions.
  - [jPTDP](https://github.com/datquocnguyen/jPTDP) - boîte à outils pour l’étiquetage morphosyntaxique (POS) et l’analyse des dépendances conjoints. jPTDP propose des modèles préentraînés pour plus de 40 langues.
  - [BigARTM](https://github.com/bigartm/bigartm) - bibliothèque rapide de modélisation de sujets.
  - [Snips NLU](https://github.com/snipsco/snips-nlu) - bibliothèque prête pour la production d’analyse des intentions.
  - [Chazutsu](https://github.com/chakki-works/chazutsu) - bibliothèque de téléchargement et d’analyse de jeux de données classiques de recherche en TAL.
  - [Word Forms](https://github.com/gutfeeling/word_forms) - génère avec précision toutes les formes possibles d’un mot anglais.
  - [Multilingual Latent Dirichlet Allocation (LDA)](https://github.com/ArtificiAI/Multilingual-Latent-Dirichlet-Allocation-LDA) - pipeline extensible et multilingue de regroupement de documents.
  - [Natural Language Toolkit (NLTK)](https://www.nltk.org/) - bibliothèque offrant un large éventail de fonctions TAL et prenant en charge plus de 50 corpus.
  - [NLP Architect](https://github.com/NervanaSystems/nlp-architect) - bibliothèque pour explorer les architectures et techniques d’apprentissage profond de pointe en TAL et en NLU.
  - [Flair](https://github.com/zalandoresearch/flair) - cadre très simple de TAL multilingue de pointe, fondé sur PyTorch. Comprend les représentations vectorielles BERT, ELMo et Flair.
  - [Kashgari](https://github.com/BrikerMan/Kashgari) - cadre TAL multilingue simple fondé sur Keras, permettant de créer en cinq minutes des modèles de reconnaissance d’entités nommées (NER), d’étiquetage morphosyntaxique (POS) et de classification de texte. Comprend des représentations BERT et word2vec.
  - [FARM](https://github.com/deepset-ai/FARM) - transfert d’apprentissage rapide et facile pour le TAL, axé sur l’exploitation des modèles de langue dans l’industrie et les questions-réponses.
  - [Haystack](https://github.com/deepset-ai/haystack) - cadre Python de bout en bout pour créer des interfaces de recherche en langage naturel sur des données. Il exploite Transformers et les dernières avancées du TAL et prend en charge DPR, Elasticsearch, Modelhub de Hugging Face, et bien plus encore.
  - [Rita DSL](https://github.com/zaibacu/rita-dsl) - langage spécifique à un domaine (DSL) inspiré librement de [RUTA d’Apache UIMA](https://uima.apache.org/ruta.html). Il permet de définir des motifs linguistiques (TAL à base de règles), ensuite traduits en règles [spaCy](https://spacy.io/) ou, pour une solution plus légère et moins riche en fonctionnalités, en expressions régulières.
  - [Transformers](https://github.com/huggingface/transformers) - traitement automatique des langues pour TensorFlow 2.0 et PyTorch.
  - [Tokenizers](https://github.com/huggingface/tokenizers) - tokeniseurs rapides de qualité recherche et production.
  - [fairSeq](https://github.com/pytorch/fairseq) - implémentations par Facebook AI Research de modèles seq2seq de pointe dans PyTorch.
  - [corex_topic](https://github.com/gregversteeg/corex_topic) - modélisation hiérarchique de sujets avec un minimum de connaissances du domaine.
  - [Sockeye](https://github.com/awslabs/sockeye) - boîte à outils de traduction automatique neuronale (NMT) qui alimente Amazon Translate.
  - [DL Translate](https://github.com/xhlulu/dl-translate) - bibliothèque de traduction par apprentissage profond pour 50 langues, fondée sur `transformers` et mBART Large de Facebook.
  - [Jury](https://github.com/obss/jury) - évaluation des sorties de modèles TAL à l’aide de diverses métriques automatisées.
  - [python-ucto](https://github.com/proycon/python-ucto) - tokeniseur à expressions régulières compatible Unicode pour diverses langues. Interface Python de la bibliothèque C++, compatible avec le [format FoLiA](https://proycon.github.io/folia).
  - [Pearmut](https://github.com/zouharvi/pearmut) - outil d’annotation humaine pour les tâches TAL multilingues, comme la traduction automatique.
  - [Stanza](https://github.com/stanfordnlp/stanza) - boîte à outils Python de Stanford NLP pour la tokenisation, l’étiquetage morphosyntaxique, la lemmatisation, l’analyse des dépendances et la reconnaissance d’entités nommées dans plus de 70 langues.
  - [Sentence-Transformers](https://github.com/UKPLab/sentence-transformers) - représentations vectorielles de phrases et de documents, recherche sémantique et reclassement ; référence actuelle pour le TAL axé sur la recherche d’information.
  - [Argilla](https://github.com/argilla-io/argilla) - plateforme libre d’annotation de données et de collecte de retours pour les jeux de données TAL et LLM.
  - [HuggingFace Datasets](https://github.com/huggingface/datasets) - chargeurs normalisés et outils de traitement pour des milliers de jeux de données TAL.
  - [HuggingFace Evaluate](https://github.com/huggingface/evaluate) - implémentations de référence de métriques TAL.
  - [sacrebleu](https://github.com/mjpost/sacrebleu) - évaluation reproductible avec BLEU/chrF/TER pour la traduction automatique.
  - [COMET](https://github.com/Unbabel/COMET) - métriques apprises pour la traduction automatique, désormais la norme de facto.
  - [LangTest](https://github.com/JohnSnowLabs/langtest) - plus de 60 types de tests de robustesse, de biais et d’équité pour les modèles TAL.
   - [yasbd-lib](https://github.com/speedyk-005/yasbd-lib) - détecteur de limites de phrases (SBD) à base de règles et de haute précision. Adaptateur pysbd prêt à l’emploi, API de flux, interface en ligne de commande et composant spaCy pour plus de 39 langues.

- <a id="c++">**C++** - Bibliothèques C++</a> | [Retour en haut](#contents)
  - [InsNet](https://github.com/chncwang/InsNet) - bibliothèque de réseaux neuronaux pour créer des modèles TAL dépendant des instances avec regroupement dynamique sans remplissage.
  - [MIT Information Extraction Toolkit](https://github.com/mit-nlp/MITIE) - outils C, C++ et Python pour la reconnaissance d’entités nommées et l’extraction de relations.
  - [CRF++](https://taku910.github.io/crfpp/) - implémentation libre des champs aléatoires conditionnels (CRF) pour segmenter et étiqueter des données séquentielles et pour d’autres tâches de TAL.
  - [CRFsuite](http://www.chokkan.org/software/crfsuite/) - implémentation des champs aléatoires conditionnels (CRF) pour l’étiquetage de données séquentielles.
  - [BLLIP Parser](https://github.com/BLLIP/bllip-parser) - analyseur de langue naturelle BLLIP, également appelé analyseur Charniak-Johnson.
  - [colibri-core](https://github.com/proycon/colibri-core) - bibliothèque C++, outils en ligne de commande et interface Python pour extraire et manipuler rapidement et efficacement en mémoire des structures linguistiques élémentaires comme les n-grammes et les skip-grammes.
  - [ucto](https://github.com/LanguageMachines/ucto) - tokeniseur à expressions régulières compatible Unicode pour diverses langues. Outil et bibliothèque C++, compatible avec le format FoLiA.
  - [libfolia](https://github.com/LanguageMachines/libfolia) - bibliothèque C++ pour le [format FoLiA](https://proycon.github.io/folia/).
  - [frog](https://github.com/LanguageMachines/frog) - suite TAL à base de mémoire conçue pour le néerlandais : étiqueteur morphosyntaxique, lemmatiseur, analyseur des dépendances, reconnaissance d’entités nommées, analyseur syntaxique superficiel et analyseur morphologique.
  - [MeTA](https://github.com/meta-toolkit/meta) - ModErn Text Analysis : boîte à outils C++ de science des données pour l’exploration de grands volumes de texte.
  - [Mecab (Japanese)](https://taku910.github.io/mecab/)
  - [Moses](http://statmt.org/moses/)
  - [StarSpace](https://github.com/facebookresearch/StarSpace) - bibliothèque de Facebook pour créer des représentations vectorielles de mots, de paragraphes et de documents, ainsi que pour la classification de texte.
  - [QSMM](http://qsmm.org) - analyseurs probabilistes adaptatifs, descendants et ascendants.

- <a id="java">**Java** - Bibliothèques TAL pour Java</a> | [Retour en haut](#contents)
  - [Stanford NLP](https://nlp.stanford.edu/software/index.shtml)
  - [OpenNLP](https://opennlp.apache.org/)
  - [NLP4J](https://emorynlp.github.io/nlp4j/)
  - [Word2vec in Java](https://deeplearning4j.org/docs/latest/deeplearning4j-nlp-word2vec)
  - [ReVerb](https://github.com/knowitall/reverb/) Extraction ouverte d’informations à l’échelle du Web.
  - [OpenRegex](https://github.com/knowitall/openregex) Langage et moteur efficaces et flexibles d’expressions régulières fondés sur les tokens.
  - [CogcompNLP](https://github.com/CogComp/cogcomp-nlp) - bibliothèques fondamentales développées par le Cognitive Computation Group de l’Université de l’Illinois.
  - [MALLET](http://mallet.cs.umass.edu/) - MAchine Learning for LanguagE Toolkit : paquet de traitement statistique automatique des langues, de classification et de regroupement de documents, de modélisation de sujets, d’extraction d’informations et d’autres applications d’apprentissage automatique sur le texte.
  - [RDRPOSTagger](https://github.com/datquocnguyen/RDRPOSTagger) - boîte à outils robuste d’étiquetage morphosyntaxique disponible en Java et Python, accompagnée de modèles préentraînés pour plus de 40 langues.

- <a id="kotlin">**Kotlin** - Bibliothèques TAL pour Kotlin</a> | [Retour en haut](#contents)
  - [Lingua](https://github.com/pemistahl/lingua/) Bibliothèque de détection de langue pour Kotlin et Java, adaptée aux textes longs comme courts.
  - [Kotidgy](https://github.com/meiblorn/kotidgy) — générateur de données textuelles fondé sur un index, écrit en Kotlin.

- <a id="scala">**Scala** - Bibliothèques TAL pour Scala</a> | [Retour en haut](#contents)
  - [Saul](https://github.com/CogComp/saul) - bibliothèque de développement de systèmes TAL, avec des modules intégrés comme l’étiquetage des rôles sémantiques (SRL) et l’étiquetage morphosyntaxique (POS).
  - [ATR4S](https://github.com/ispras/atr4s) - boîte à outils proposant des méthodes de pointe de [reconnaissance automatique des termes](https://en.wikipedia.org/wiki/Terminology_extraction).
  - [tm](https://github.com/ispras/tm) - implémentation de la modélisation de sujets fondée sur la [PLSA](https://en.wikipedia.org/wiki/Probabilistic_latent_semantic_analysis) multilingue régularisée.
  - [word2vec-scala](https://github.com/Refefer/word2vec-scala) - interface Scala pour les modèles word2vec ; comprend des opérations vectorielles comme la distance entre mots et les analogies.
  - [Epic](https://github.com/dlwh/epic) - analyseur statistique haute performance écrit en Scala et cadre de création de modèles complexes de prédiction structurée.
  - [Spark NLP](https://github.com/JohnSnowLabs/spark-nlp) - bibliothèque de traitement automatique des langues fondée sur Apache Spark ML, qui fournit des annotations TAL simples, performantes et précises pour des pipelines d’apprentissage automatique facilement extensibles en environnement distribué.

- <a id="R">**R** - Bibliothèques TAL pour R</a> | [Retour en haut](#contents)
  - [text2vec](https://github.com/dselivanov/text2vec) - vectorisation rapide, modélisation de sujets, distances et représentations vectorielles de mots GloVe dans R.
  - [wordVectors](https://github.com/bmschmidt/wordVectors) - paquet R pour créer et explorer des modèles word2vec et d’autres représentations vectorielles de mots.
  - [RMallet](https://github.com/mimno/RMallet) - paquet R servant d’interface avec l’outil d’apprentissage automatique Java MALLET.
  - [dfr-browser](https://github.com/agoldst/dfr-browser) - crée des visualisations d3 pour explorer des modèles de sujets textuels dans un navigateur Web.
  - [dfrtopics](https://github.com/agoldst/dfrtopics) - paquet R pour explorer des modèles de sujets textuels.
  - [sentiment_classifier](https://github.com/kevincobain2000/sentiment_classifier) - classification des sentiments utilisant la désambiguïsation des sens des mots et le lecteur WordNet.
  - [jProcessing](https://github.com/kevincobain2000/jProcessing) - bibliothèques de traitement automatique du japonais, avec classification des sentiments en japonais.
  - [corporaexplorer](https://kgjerde.github.io/corporaexplorer/) - paquet R pour explorer dynamiquement des collections de textes.
  - [tidytext](https://github.com/juliasilge/tidytext) - exploration de textes à l’aide des outils tidy.
  - [spacyr](https://github.com/quanteda/spacyr) - interface R pour le TAL spaCy.
  - [CRAN Task View: Natural Language Processing](https://github.com/cran-task-views/NaturalLanguageProcessing/)

- <a id="clojure">**Clojure**</a> | [Retour en haut](#contents)
  - [Clojure-openNLP](https://github.com/dakrone/clojure-opennlp) - traitement automatique des langues en Clojure (opennlp).
  - [Infections-clj](https://github.com/r0man/inflections-clj) - bibliothèque de flexion inspirée de Rails pour Clojure et ClojureScript.
  - [postagga](https://github.com/fekr/postagga) - bibliothèque d’analyse du langage naturel en Clojure et ClojureScript.

- <a id="go">**Go**</a> | [Retour en haut](#contents)
  - [prose](https://github.com/jdkato/prose) - bibliothèque de traitement de texte prenant en charge la tokenisation, l’étiquetage morphosyntaxique et l’extraction d’entités nommées.
  - [gojieba](https://github.com/yanyiwu/gojieba) - implémentation en Go de l’algorithme jieba de segmentation des mots chinois.
  - [kagome](https://github.com/ikawaha/kagome) - analyseur morphologique du japonais écrit en Go pur.
  - [go-propisyu](https://github.com/rekurt/go-propisyu) - convertit les nombres en mots russes avec le genre grammatical et la déclinaison corrects.

- <a id="ruby">**Ruby**</a> | [Retour en haut](#contents)
  - Collection de bibliothèques, outils et logiciels Ruby de traitement automatique des langues de Kevin Dias : [A collection of Natural Language Processing (NLP) Ruby libraries, tools and software](https://github.com/diasks2/ruby-nlp).
  - [Practical Natural Language Processing done in Ruby](https://github.com/arbox/nlp-with-ruby) - exemples pratiques de traitement automatique des langues en Ruby.

- <a id="rust">**Rust**</a> | [Retour en haut](#contents)
  - [whatlang](https://github.com/greyblake/whatlang-rs) — bibliothèque de reconnaissance de langue naturelle fondée sur les trigrammes.
  - [rust-bert](https://github.com/guillaume-be/rust-bert) - pipelines TAL et modèles fondés sur les Transformers, prêts à l’emploi.
  - [snips-nlu-rs](https://github.com/snipsco/snips-nlu-rs) *(archivé — Snips a été abandonné)* - bibliothèque d’analyse des intentions prête pour la production.

- <a id="NLP++">**NLP++** - Langage NLP++</a> | [Retour en haut](#contents)
  - [VSCode Language Extension](https://marketplace.visualstudio.com/items?itemName=dehilster.nlp) - extension de langage NLP++ pour VSCode.
  - [nlp-engine](https://github.com/VisualText/nlp-engine) - moteur exécutant du code NLP++ sous Linux, avec un analyseur complet de l’anglais.
  - [VisualText](http://visualtext.org) - site Web du langage NLP++.
  - [NLP++ Wiki](http://wiki.naturalphilosophy.org/index.php?title=NLP%2B%2B) - article wiki sur le langage NLP++.

- <a id="julia">**Julia**</a> | [Retour en haut](#contents)
  - [CorpusLoaders](https://github.com/JuliaText/CorpusLoaders.jl) - divers chargeurs pour plusieurs corpus TAL.
  - [Languages](https://github.com/JuliaText/Languages.jl) - paquet de manipulation des langues humaines.
  - [TextAnalysis](https://github.com/JuliaText/TextAnalysis.jl) - paquet Julia d’analyse de texte.
  - [TextModels](https://github.com/JuliaText/TextModels.jl) - modèles neuronaux de traitement automatique des langues.
  - [WordTokenizers](https://github.com/JuliaText/WordTokenizers.jl) - tokeniseurs haute performance pour le traitement automatique des langues et les tâches associées.
  - [Word2Vec](https://github.com/JuliaText/Word2Vec.jl) - interface Julia pour word2vec.

### Services

TAL sous forme d’API offrant des fonctionnalités de haut niveau comme la reconnaissance d’entités nommées, l’étiquetage de sujets, etc. | [Retour en haut](#contents)

- [Wit-ai](https://github.com/wit-ai/wit) - interface en langage naturel pour les applications et les appareils.
- [IBM Watson's Natural Language Understanding](https://github.com/watson-developer-cloud/natural-language-understanding-nodejs) - API et démonstration sur GitHub.
- [Amazon Comprehend](https://aws.amazon.com/comprehend/) - suite TAL et apprentissage automatique couvrant la plupart des tâches courantes, comme la reconnaissance d’entités nommées, l’étiquetage et l’analyse des sentiments.
- [Google Cloud Natural Language API](https://cloud.google.com/natural-language/) - analyse syntaxique, reconnaissance d’entités nommées, analyse des sentiments et étiquetage de contenu dans au moins neuf langues, dont l’anglais et le chinois (simplifié et traditionnel).
- [ParallelDots](https://www.paralleldots.com/text-analysis-apis) - service d’API d’analyse de texte de haut niveau, allant de l’analyse des sentiments à l’analyse des intentions.
- [Microsoft Cognitive Service](https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics/)
- [TextRazor](https://www.textrazor.com/)
- [Rosette](https://www.rosette.com/)
- [Textalytic](https://www.textalytic.com) - traitement automatique des langues dans le navigateur : analyse des sentiments, extraction d’entités nommées, étiquetage morphosyntaxique, fréquences des mots, modélisation de sujets, nuages de mots et plus encore.
- [NLP Cloud](https://nlpcloud.io) - modèles TAL spaCy (personnalisés et préentraînés) fournis par API REST pour la reconnaissance d’entités nommées (NER), l’étiquetage morphosyntaxique (POS) et plus encore.
- [Cloudmersive](https://cloudmersive.com/nlp-api) - API TAL unifiées et gratuites permettant notamment l’étiquetage de la parole, la reformulation de texte, la traduction et la détection de langue, ainsi que l’analyse syntaxique des phrases.

### Outils d’annotation

- [GATE](https://gate.ac.uk/overview.html) - General Architecture and Text Engineering : projet libre et gratuit actif depuis plus de 15 ans.
- [Anafora](https://github.com/weitechen/anafora) est un outil gratuit, libre et Web d’annotation de textes bruts.
- [brat](https://brat.nlplab.org/) - outil rapide d’annotation brat, environnement en ligne d’annotation collaborative de texte.
- [doccano](https://github.com/chakki-works/doccano) - outil gratuit et libre proposant des fonctions d’annotation pour la classification de texte, l’étiquetage de séquences et les tâches séquence à séquence.
- [INCEpTION](https://inception-project.github.io) - plateforme d’annotation sémantique offrant une assistance intelligente et une gestion des connaissances.
- [prodigy](https://prodi.gy/) est un outil d’annotation reposant sur l’apprentissage actif, payant.
- [LightTag](https://lighttag.io) - outil hébergé et géré d’annotation de texte pour les équipes, payant.
- [rstWeb](https://corpling.uis.georgetown.edu/rstweb/info/) - outil libre, local ou en ligne, d’annotation des arbres discursifs.
- [GitDox](https://corpling.uis.georgetown.edu/gitdox/) - outil serveur libre d’annotation, avec gestion de versions GitHub et validation des données XML ainsi que grilles de feuilles de calcul collaboratives.
- [Datasaur](https://datasaur.ai/) prend en charge diverses tâches TAL pour les particuliers et les équipes, avec une offre freemium.
- [Konfuzio](https://konfuzio.com/en/) - outil d’annotation de textes, d’images et de PDF hébergé ou sur site, conçu pour les équipes, reposant sur l’apprentissage actif ; offre freemium payante.
- [UBIAI](https://ubiai.tools/) - outil d’annotation de texte facile à utiliser pour les équipes, avec des fonctions complètes d’annotation automatique. Prend en charge la reconnaissance d’entités nommées, les relations, la classification de documents et l’annotation OCR de factures ; payant.
- [Shoonya](https://github.com/AI4Bharat/Shoonya-Backend) - plateforme libre et gratuite d’annotation de données, offrant divers niveaux de gestion des organisations et des espaces de travail. Indépendante des données, elle permet aux équipes d’annoter à grande échelle avec plusieurs étapes de vérification.
- [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) - plateforme gratuite, sans code et de bout en bout pour annoter du texte et entraîner/ajuster des modèles d’apprentissage profond. Prise en charge intégrée des modèles Spark NLP pour la reconnaissance d’entités nommées, la classification, l’extraction de relations et le statut d’assertion. Utilisateurs, équipes, projets et documents illimités. Non libre.
- [FLAT](https://github.com/proycon/flat) - environnement Web d’annotation linguistique fondé sur le [format FoLiA](http://proycon.github.io/folia), un format XML riche pour l’annotation linguistique. Gratuit et libre.
- [Argilla](https://github.com/argilla-io/argilla) - plateforme libre de collecte de commentaires humains, de création de jeux de données TAL et LLM et de curation de données de préférences.
- [Label Studio](https://github.com/HumanSignal/label-studio) - plateforme d’étiquetage multimodale à cœur libre, largement utilisée pour l’étiquetage TAL.
- [Potato](https://github.com/davidjurgens/potato) - outil d’annotation gratuit et libre couvrant plus de 21 types de tâches (classification, segments, coréférence, liaison d’entités, évaluation de traces d’agents), avec contrôle qualité MACE intégré, vérifications d’attention, annotation assistée par IA et plus de 300 exemples de tâches.


## Tâches et méthodes

Tâches de TAL classées par problème linguistique. Chaque sous-section présente d’abord les travaux fondateurs et classiques, puis les approches neuronales, et enfin les méthodes fondées sur les grands modèles de langue lorsqu’elles sont pertinentes. Pour les recherches consacrées aux modèles de langue modernes (préentraînement, évaluation, recherche d’information, raisonnement, etc.), voir [Modèles de langue pour le TAL](#language-models-for-nlp).

### Représentations vectorielles de texte

[Retour en haut](#contents)

Représentations vectorielles statiques de mots (fondamentales) :

- [word2vec](https://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf) - [implementation](https://code.google.com/archive/p/word2vec/) - [explainer blog](http://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
- [GloVe](https://nlp.stanford.edu/pubs/glove.pdf) - [explainer blog](https://blog.acolyer.org/2016/04/22/glove-global-vectors-for-word-representation/)
- [fastText](https://arxiv.org/abs/1607.04606) - [implémentation](https://github.com/facebookresearch/fastText) - les n-grammes de sous-mots gèrent bien les mots hors vocabulaire ; méthode encore utile pour les langues peu dotées.
- [sense2vec](https://arxiv.org/abs/1511.06388) - désambiguïsation du sens des mots.
- [Paragraph Vectors / doc2vec](https://cs.stanford.edu/~quocle/paragraph_vector.pdf)

Représentations vectorielles contextuelles :

- [ELMo](https://arxiv.org/abs/1802.05365) - représentations contextuelles profondes des mots.
- [CoVe](https://arxiv.org/abs/1708.00107) - vecteurs contextuels appris à partir de la traduction automatique.
- [ULMFiT](https://arxiv.org/abs/1801.06146) - ajustement fin d’un modèle de langue pour la classification de texte.
- [InferSent](https://arxiv.org/abs/1705.02364) - représentations de phrases issues de l’inférence en langue naturelle (NLI).

Représentations vectorielles modernes de phrases et de documents : voir [Recherche d’information pour le TAL](#retrieval-for-nlp) (Sentence-Transformers, E5, BGE-M3, Nomic, GritLM) et [MTEB](https://github.com/embeddings-benchmark/mteb) pour les classements actuels.

### Tokenisation, morphologie et segmentation

[Retour en haut](#contents)

- [SentencePiece](https://github.com/google/sentencepiece) - tokenisation en sous-mots indépendante de la langue.
- [BPE](https://arxiv.org/abs/1508.07909) et [Unigram LM](https://arxiv.org/abs/1804.10959) - les deux principaux schémas de segmentation en sous-mots.
- [Stanza](https://github.com/stanfordnlp/stanza) - tokenisation, lemmatisation et analyse morphologique pour plus de 70 langues.
- [UDPipe](https://github.com/ufal/udpipe) - tokenisation, étiquetage, lemmatisation et analyse syntaxique pour Universal Dependencies.
- [Morfessor](https://github.com/aalto-speech/morfessor) - segmentation morphologique non supervisée.
Recherche et architectures des tokeniseurs (voir aussi [Modèles de langue](#language-models-for-nlp)) :

- [Byte-Pair Encoding (Sennrich et al.)](https://arxiv.org/abs/1508.07909) - unités de sous-mots pour la traduction automatique neuronale ; fondement des tokeniseurs modernes.
- [SentencePiece](https://github.com/google/sentencepiece) - tokenisation en sous-mots indépendante de la langue (BPE et Unigram).
- [Tokenizers](https://github.com/huggingface/tokenizers) - implémentations rapides en Rust de BPE, WordPiece et Unigram.
- [ByT5](https://arxiv.org/abs/2105.13626) - modèle au niveau des octets qui se passe de tokeniseur.
- [CANINE](https://arxiv.org/abs/2103.06874) - encodeur sans tokenisation opérant sur des caractères Unicode.
- [How Good is Your Tokenizer?](https://arxiv.org/abs/2012.15613) - équité des tokeniseurs entre les langues.
- [Byte Latent Transformer (BLT)](https://arxiv.org/abs/2412.09871) (Meta, 2024) - découpage dynamique en octets, aussi performant à grande échelle que les modèles tokenisés avec BPE ; relance l’approche sans tokeniseur.
- [SuperBPE](https://arxiv.org/abs/2503.13423) (2025) - tokenisation en super-mots améliorant BPE pour les tâches en aval.
- [Over-Tokenized Transformer](https://arxiv.org/abs/2501.16975) (ICML 2025) - dissocie les vocabulaires d’entrée et de sortie ; met en évidence une relation log-linéaire entre la taille du vocabulaire d’entrée et la perte d’entraînement, permettant de faire évoluer le vocabulaire indépendamment de la taille du modèle.
- [Foundations of Tokenization](https://arxiv.org/abs/2407.11606) (ICLR 2025) - premier cadre unifié formel pour les modèles de tokeniseurs, fondé sur la théorie des catégories et des applications stochastiques ; établit les conditions de cohérence statistique.
- [The Token Tax: Systematic Bias in Multilingual Tokenization](https://arxiv.org/abs/2509.05486) (2025) - quantifie la manière dont la fragmentation en tokens prédit la précision des modèles selon la langue et révèle des pénalités structurelles pour les langues morphologiquement complexes et peu dotées.
- [Reducing Tokenization Premiums for Low-Resource Languages](https://arxiv.org/abs/2601.13328) (2026) - ajouts a posteriori au vocabulaire qui regroupent des séquences de caractères réparties sur plusieurs tokens dans les langues peu dotées, réduisant le coût d’inférence sans réentraînement.

### Étiquetage morphosyntaxique et analyse des dépendances

[Retour en haut](#contents)

- [Universal Dependencies](https://universaldependencies.org/) - banques d’arbres cohérentes entre les langues, couvrant plus de 100 langues.
- [spaCy](https://spacy.io/) et [Stanza](https://github.com/stanfordnlp/stanza) - analyseurs prêts pour la production et couvrant de nombreuses langues.
- [Deep Biaffine Attention for Neural Dependency Parsing](https://arxiv.org/abs/1611.01734) - architecture neuronale fondamentale pour l’analyse des dépendances.
- [Trankit](https://github.com/nlp-uoregon/trankit) - boîte à outils TAL multilingue légère, fondée sur les Transformers.
- [Self-Attentive Constituency Parsing (Kitaev & Klein)](https://arxiv.org/abs/1805.01052) - analyseur neuronal de constituants performant.

### Reconnaissance d’entités nommées et extraction d’informations

[Retour en haut](#contents)

Travaux fondateurs et approches neuronales :

- [CoNLL-2003 NER](https://www.aclweb.org/anthology/W03-0419/) - benchmark de référence pour la reconnaissance d’entités nommées en anglais.
- [Neural Architectures for NER (Lample et al.)](https://arxiv.org/abs/1603.01360) - BiLSTM-CRF, architecture longtemps privilégiée pour la reconnaissance d’entités nommées.
- [Flair](https://github.com/flairNLP/flair) - représentations contextuelles de chaînes de caractères et bonnes performances en reconnaissance d’entités nommées dans plusieurs langues.
- [spaCy NER](https://spacy.io/usage/linguistic-features#named-entities) - prêt pour la production.

Extraction ouverte et suivi d’instructions :

- [Universal NER](https://arxiv.org/abs/2308.03279) - modèle de langue ajusté par instructions pour la reconnaissance d’entités nommées en ensemble ouvert et multilingue.
- [GLiNER](https://arxiv.org/abs/2311.08526) (2023) - petit modèle généraliste de reconnaissance d’entités nommées capable de gérer des types d’entités arbitraires à l’inférence.
- [GoLLIE](https://arxiv.org/abs/2310.03668) - extraction d’informations par modèles de langue suivant des directives.
- [REBEL](https://github.com/Babelscape/rebel) - extraction de relations de bout en bout sous forme seq2seq.

Approches fondées sur les grands modèles de langue :

- [GPT-NER](https://arxiv.org/abs/2304.10428) - grands modèles de langue pour la reconnaissance d’entités nommées.
- [Can LLMs Replace Sentence-Level NER?](https://arxiv.org/abs/2402.10573) (2024) - compromis entre coût et qualité.
- [Generative NER in the Era of LLMs](https://arxiv.org/abs/2601.17898) (2026) - huit grands modèles de langue ouverts évalués sur quatre benchmarks NER ; l’ajustement fin efficace des paramètres (PEFT) avec sorties structurées atteint les performances de la NER fondée sur des encodeurs.

### Résolution de coréférences

[Retour en haut](#contents)

- [End-to-End Neural Coreference (Lee et al.)](https://arxiv.org/abs/1707.07045) - fondement de la résolution neuronale moderne des coréférences.
- [SpanBERT](https://arxiv.org/abs/1907.10529) - préentraînement fondé sur des segments ; référence solide pour la coréférence.
- [coref-hoi](https://github.com/lxucs/coref-hoi) - résolution de coréférences avec inférence d’ordre supérieur.
- [maverick-coref](https://github.com/SapienzaNLP/maverick-coref) (2024) - résolution efficace des coréférences, au niveau des meilleurs systèmes de plus grande taille.
- [LingMess](https://arxiv.org/abs/2205.12644) - évaluation de coréférences par catégories motivées par la linguistique.
Approches fondées sur les grands modèles de langue :

- [LLMs for Coreference Resolution](https://arxiv.org/abs/2310.05884) - requêtes et ajustement fin pour la résolution de coréférences.
- [Multilingual Coreference Shared Task: Can LLMs Dethrone Traditional Approaches?](https://arxiv.org/abs/2509.17796) (2025) - neuf systèmes comparant quatre approches fondées sur des grands modèles de langue à cinq méthodes traditionnelles ; celles-ci restent en tête, mais les grands modèles réduisent l’écart.

### Classification de texte et analyse des sentiments

[Retour en haut](#contents)

- [fastText classifier](https://arxiv.org/abs/1607.01759) - référence linéaire performante et rapide.
- [Sentiment Treebank (SST)](https://nlp.stanford.edu/sentiment/) - jeu de données de référence pour l’analyse fine des sentiments.
- [SetFit](https://github.com/huggingface/setfit) - classification de texte en quelques exemples, sans requêtes.
- [FastFit](https://github.com/IBM/fastfit) - apprentissage rapide à partir de peu d’exemples dans les tâches comportant de nombreuses classes.
- [SST / IMDB / AG News with DeBERTa-v3](https://arxiv.org/abs/2111.09543) - référence actuelle pour l’ajustement fin d’encodeurs.
- [PySS3](https://github.com/sergioburdisso/pyss3) - classificateur de texte interprétable et transparent.
- [LLMs as Annotators](https://arxiv.org/abs/2305.13734) - utilisation de grands modèles de langue pour annoter des textes à classer, avec certaines réserves.

### Modélisation de sujets

[Retour en haut](#contents)

- [Latent Dirichlet Allocation (Blei et al.)](https://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf) - modèle de sujets fondateur.
- [gensim](https://radimrehurek.com/gensim/) - LDA, LSI et HDP en Python.
- [BigARTM](https://github.com/bigartm/bigartm) - modélisation rapide de sujets régularisée.
- [BERTopic](https://github.com/MaartenGr/BERTopic) - modélisation de sujets par regroupement à partir de représentations vectorielles contextuelles ; choix courant par défaut aujourd’hui.
- [Top2Vec](https://github.com/ddangelov/Top2Vec) - apprend conjointement les vecteurs de sujets et de documents.
- [CorEx Topic](https://github.com/gregversteeg/corex_topic) - modélisation hiérarchique de sujets à l’aide de mots repères.

### Résumé automatique

[Retour en haut](#contents)

- [TextRank](https://web.eecs.umich.edu/~mihalcea/papers/mihalcea.emnlp04.pdf) - résumé extractif fondé sur les graphes.
- [Pointer-Generator Networks (See et al.)](https://arxiv.org/abs/1704.04368) - approche neuronale fondatrice du résumé abstractif.
- [PEGASUS](https://arxiv.org/abs/1912.08777) - préentraînement par suppression de phrases pour le résumé.
- [BART](https://arxiv.org/abs/1910.13461) - référence seq2seq par débruitage largement utilisée.
- [BookSum](https://arxiv.org/abs/2105.08209) et [SCROLLS](https://arxiv.org/abs/2201.03533) - benchmarks de résumé de documents longs.
Approches fondées sur les grands modèles de langue :

- [Benchmarking LLMs for News Summarization](https://arxiv.org/abs/2301.13848) - comparaison des grands modèles de langue aux systèmes de résumé ajustés finement.
- [Element-Aware Summarization with LLMs](https://arxiv.org/abs/2305.13412) - requêtes structurées pour le résumé.
- [Understanding LLM Reasoning for Abstractive Summarization](https://arxiv.org/abs/2512.03503) (2025) - le raisonnement explicite améliore la fluidité, mais nuit à l’ancrage factuel ; allonger le raisonnement peut nuire à la fidélité.

### Traduction automatique

[Retour en haut](#contents)

Approches statistiques et premières méthodes neuronales :

- [Moses](http://statmt.org/moses/) - système de référence pour la traduction automatique statistique.
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) - Transformer ; a redéfini le domaine.
- [Marian NMT](https://github.com/marian-nmt/marian) - cadre NMT efficace en C++.
- [Fairseq](https://github.com/facebookresearch/fairseq) - boîte à outils PyTorch de modélisation de séquences.

Approches massivement multilingues :

- [NLLB-200](https://arxiv.org/abs/2207.04672) - traduction automatique pour 200 langues.
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - traduction automatique pour plus de 400 langues.
- [SeamlessM4T](https://arxiv.org/abs/2312.05187) - traduction vocale et textuelle dans plus de 100 langues.

Évaluation :

- [COMET](https://github.com/Unbabel/COMET) - métrique apprise pour la traduction automatique ; norme de facto actuelle aux côtés de chrF.
- [sacrebleu](https://github.com/mjpost/sacrebleu) - évaluation reproductible avec BLEU/chrF/TER.
- [BERTScore](https://github.com/Tiiiger/bert_score) - métrique de génération fondée sur la similarité.

Approches fondées sur les grands modèles de langue :

- [Is ChatGPT a Good Translator?](https://arxiv.org/abs/2301.08745) - grands modèles de langue utilisés comme systèmes de traduction automatique.
- [Adapting LLMs for Document-Level MT](https://arxiv.org/abs/2401.06468) (2024) - grands modèles de langue pour une traduction sensible au contexte.
- [GPT-4 vs Human Translators](https://arxiv.org/abs/2308.03245) - comparaison de qualité sur la traduction professionnelle.
- [Multilingual MT with Open LLMs at Practical Scale](https://arxiv.org/abs/2502.02481) (2025) - évalue des grands modèles de langue ouverts de moins de 10 milliards de paramètres sur la traduction dans 28 langues ; ils rivalisent avec GPT-4-turbo et Google Translate.
- [Bridging the Linguistic Divide: Survey on LLMs for MT](https://arxiv.org/abs/2504.01919) (2025) - état des lieux de la manière dont le suivi d’instructions, l’apprentissage en contexte et l’alignement des préférences ont transformé la méthodologie de la traduction automatique.

### Questions-réponses et compréhension écrite

[Retour en haut](#contents)

Jeux de données et systèmes fondateurs :

- [SQuAD / SQuAD 2.0](https://rajpurkar.github.io/SQuAD-explorer/) - compréhension écrite extractive.
- [Natural Questions](https://ai.google.com/research/NaturalQuestions/) - questions de vrais utilisateurs sur Wikipédia.
- [HotpotQA](https://hotpotqa.github.io/) - raisonnement à plusieurs étapes.
- [TriviaQA](http://nlp.cs.washington.edu/triviaqa/) - questions-réponses supervisées à distance.
- [DrQA](https://github.com/facebookresearch/DrQA) - questions-réponses en domaine ouvert sur Wikipédia.
- [Document-QA](https://github.com/allenai/document-qa) - compréhension écrite de plusieurs paragraphes.

Questions-réponses modernes en domaine ouvert :

- [DPR](https://arxiv.org/abs/2004.04906) et [FiD](https://arxiv.org/abs/2007.01282) - pipeline recherche puis lecture, référence des systèmes de questions-réponses en domaine ouvert avant les grands modèles de langue.
- [Atlas](https://arxiv.org/abs/2208.03299) - modèle de langue augmenté par la recherche d’information pour répondre à partir de peu d’exemples.
- Voir aussi [Recherche d’information pour le TAL](#retrieval-for-nlp).

À l’ère des grands modèles de langue :

- [GPT-4 with retrieval on TriviaQA / NQ](https://arxiv.org/abs/2305.06983)
- [Self-RAG](https://arxiv.org/abs/2310.11511) (2023) - recherche d’information, génération et autocritique.
- [GAIA](https://arxiv.org/abs/2311.12983) - benchmark d’assistants d’IA généralistes comprenant des questions-réponses à plusieurs étapes.

### Extraction d’informations au-delà de la reconnaissance d’entités nommées

[Retour en haut](#contents)

- [OpenIE 6](https://github.com/dair-iitd/openie6) - extraction ouverte d’informations sans schéma prédéfini.
- [Template-Based Information Extraction without the Templates](https://www.usna.edu/Users/cs/nchamber/pubs/acl2011-chambers-templates.pdf)
- [Privee: An Architecture for Automatically Analyzing Web Privacy Policies](https://www.sebastianzimmeck.de/zimmeckAndBellovin2014Privee.pdf)
- [REBEL](https://github.com/Babelscape/rebel) - extraction de relations de bout en bout.
- [DocRED](https://github.com/thunlp/DocRED) - benchmark d’extraction de relations au niveau du document.
- [LLMs for Semantic Role Labeling](https://arxiv.org/abs/2506.05385) (2025) - les grands modèles de langue génératifs associés à la recherche augmentée par récupération (RAG) et à l’autocorrection surpassent les modèles de type BERT encodeur-décodeur en étiquetage des rôles sémantiques (SRL) en anglais et en chinois.
- [Adapting LLMs for Minimal-edit GEC](https://arxiv.org/abs/2506.13148) (2025) - des grands modèles de langue décodeurs seuls, avec un nouveau calendrier d’adaptation au taux d’erreurs, établissent un nouvel état de l’art en correction grammaticale BEA-test.

### Recherche d’information et représentations vectorielles

[Retour en haut](#contents)

Recherche dense et à interaction tardive, de plus en plus utilisée comme base des systèmes de questions-réponses et de recherche d’information :

- [DPR (Dense Passage Retrieval)](https://arxiv.org/abs/2004.04906) - modèle de référence à double encodeur pour la recherche.
- [ColBERT](https://arxiv.org/abs/2004.12832) et [ColBERTv2](https://arxiv.org/abs/2112.01488) - recherche à interaction tardive, efficace hors domaine.
- [E5](https://arxiv.org/abs/2212.03533) et [E5-Mistral](https://arxiv.org/abs/2401.00368) - familles de représentations vectorielles denses largement utilisées.
- [BGE](https://github.com/FlagOpen/FlagEmbedding) et [BGE-M3](https://arxiv.org/abs/2402.03216) (2024) - représentations vectorielles multilingues et multifonctionnelles ; en tête de MTEB dans plusieurs langues.
- [Nomic Embed](https://arxiv.org/abs/2402.01613) (2024) - modèle de représentations vectorielles entièrement ouvert et reproductible.
- [Matryoshka Representation Learning](https://arxiv.org/abs/2205.13147) - représentations vectorielles imbriquées offrant une dimensionnalité variable à l’inférence.
- [GritLM](https://arxiv.org/abs/2402.09906) (2024) - génération et représentation vectorielle unifiées dans un seul modèle.
- [RAG (Retrieval-Augmented Generation)](https://arxiv.org/abs/2005.11401) - cadre original de génération augmentée par la recherche d’information, fondement des pipelines modernes de questions-réponses.
- [Gemini Embedding](https://arxiv.org/abs/2503.07891) (2025) - représentations vectorielles denses dérivées de Gemini ; état de l’art sur MMTEB dans plus de 250 langues et en recherche interlingue (XOR-Retrieve, XTREME-UP).
- [Qwen3-Embedding](https://arxiv.org/abs/2506.05176) (2025) - série de modèles de représentation vectorielle à décodeur (0,6 à 8 milliards de paramètres) fondée sur Qwen3 ; première sur MTEB Multilingual et MTEB Code, devant les anciens modèles propriétaires.
- [Rank1](https://arxiv.org/abs/2502.18418) (2025) - premier modèle de reclassement entraîné avec du calcul à l’inférence, par distillation des traces de raisonnement DeepSeek-R1 ; état de l’art en suivi d’instructions et en recherche hors distribution.
- [ReasonEmbed](https://arxiv.org/abs/2510.08252) (2025) - modèle de représentation vectorielle pour la recherche nécessitant un raisonnement approfondi, avec synthèse de données ReMixer et entraînement adaptatif Redapter ; record de 38,1 en nDCG@10 sur BRIGHT.
- [ColBERT-Att](https://arxiv.org/abs/2603.25248) (2026) - étend la recherche à interaction tardive en intégrant les poids d’attention des requêtes et des documents au score ColBERT ; améliore le rappel sur MS-MARCO, BEIR et LoTTE.
Benchmarks de représentation vectorielle et de recherche d’information :

- [MMTEB](https://arxiv.org/abs/2502.13595) (2025) - extension communautaire de MTEB à plus de 500 tâches dans plus de 250 langues.

### Parole et texte

[Retour en haut](#contents)

Quelques ressources indicatives, car ce domaine touche à des disciplines voisines :

- [Whisper](https://github.com/openai/whisper) - reconnaissance vocale automatique (ASR) multilingue ; référence moderne parmi les outils ouverts.
- [SeamlessM4T](https://github.com/facebookresearch/seamless_communication) - traduction unifiée de la parole et du texte.
- [Canary](https://huggingface.co/nvidia/canary-1b) (NVIDIA, 2024) - premier modèle ASR multilingue ouvert.
- [FunASR](https://github.com/modelscope/FunASR) - boîte à outils ASR de qualité industrielle ; vitesse 170 fois supérieure au temps réel sur GPU, plus de 50 langues, détection d’activité vocale, ponctuation, diarisation et détection des émotions intégrées. Comprend SenseVoice non autorégressif et les modèles Fun-ASR-Nano fondés sur des grands modèles de langue.
- [Wav2Vec 2.0](https://arxiv.org/abs/2006.11477) - préentraînement auto-supervisé fondateur pour la parole.
- [Coqui TTS](https://github.com/coqui-ai/TTS) et [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - synthèse vocale ouverte.

## Jeux de données

[Retour en haut](#contents)

Répertoires et listes de jeux de données :

- [HuggingFace Datasets Hub](https://huggingface.co/datasets) - index central des jeux de données TAL modernes, avec chargeurs versionnés et compatibles avec le streaming.
- [nlp-datasets](https://github.com/niderhoff/nlp-datasets) - vaste collection de jeux de données TAL.
- [gensim-data](https://github.com/RaRe-Technologies/gensim-data) - dépôt de données contenant des modèles TAL préentraînés et des corpus TAL.

Corpus de préentraînement à grande échelle (ouverts) :

- [The Pile](https://pile.eleuther.ai/) - corpus diversifié de 825 Gio de texte.
- [RedPajama / RedPajama-V2](https://github.com/togethercomputer/RedPajama-Data) (2023-2024) - reproductions des données de préentraînement de LLaMA ; la version 2 contient 30 billions de tokens et des indicateurs de qualité.
- [Dolma](https://github.com/allenai/dolma) (AI2, 2023-2024) - corpus ouvert de préentraînement de 3 billions de tokens, avec pipeline de filtrage documenté.
- [FineWeb / FineWeb-Edu](https://huggingface.co/datasets/HuggingFaceFW/fineweb) (2024) - corpus Web nettoyé de 15 billions de tokens ; FineWeb-Edu filtre les données selon leur qualité pédagogique.
- [CulturaX](https://huggingface.co/datasets/uonlp/CulturaX) - 6,3 billions de tokens dans 167 langues.
- [Common Corpus](https://huggingface.co/datasets/PleIAs/common_corpus) (2024) - corpus multilingue ouvert sous licence, de 2 billions de tokens.

Jeux de données de tâches et d’instructions :

- [Universal Dependencies](https://universaldependencies.org/) - annotation de banques d’arbres cohérente entre les langues, couvrant plus de 100 langues.
- [Tülu 3 SFT Mixture](https://huggingface.co/datasets/allenai/tulu-3-sft-mixture) (2024) - données ouvertes d’ajustement fin supervisé par instructions à l’origine de Tülu 3.
- [tiny_qa_benchmark_pp](https://github.com/vincentkoc/tiny_qa_benchmark_pp/) - petits jeux de données TAL multilingues de questions-réponses et bibliothèque permettant de générer vos propres copies synthétiques.

## Cadres TAL multilingues

[Retour en haut](#contents)

- [UDPipe](https://github.com/ufal/udpipe) est un pipeline entraînable pour tokeniser, étiqueter, lemmatiser et analyser les banques d’arbres Universal Dependencies ainsi que d’autres fichiers CoNLL-U. Principalement écrit en C++, il offre une solution rapide et fiable pour le traitement TAL multilingue.
- [NLP-Cube](https://github.com/adobe/NLP-Cube) : pipeline de traitement automatique des langues — segmentation des phrases, tokenisation, lemmatisation, étiquetage morphosyntaxique et analyse des dépendances. Nouvelle plateforme écrite en Python avec Dynet 2.0. Propose un fonctionnement autonome (interfaces CLI/Python) et serveur (API REST).
- [UralicNLP](https://github.com/mikahama/uralicNLP) est une bibliothèque TAL principalement consacrée à plusieurs langues ouraliennes menacées, comme le same, le mordve, le mari et le komi. Elle prend également en charge certaines langues non menacées, comme le finnois, ainsi que des langues non ouraliennes comme le suédois et l’arabe. UralicNLP assure l’analyse et la génération morphologiques, la lemmatisation et la désambiguïsation.

## Modèles de langue pour le TAL

[Retour en haut](#contents)

Modèles de langue préentraînés et recherches associées, limités aux tâches de TAL et aux phénomènes linguistiques. Pour les outils généralistes dédiés aux grands modèles de langue, les agents ou les kits d’applications RAG, voir [Voir aussi](#see-also).

### Préentraînement et adaptation

Encodeurs (toujours les principaux outils des tâches classiques de TAL) :

- [BERT](https://arxiv.org/abs/1810.04805) - préentraînement Transformer bidirectionnel ; fondement de la plupart des travaux de TAL fondés sur des encodeurs depuis 2018. [Lire en ligne](https://webeditions.page/works/bert-pre-training/) avec navigation par section et source ACL jointe.
- [RoBERTa](https://arxiv.org/abs/1907.11692) - préentraînement de BERT optimisé de façon robuste ; référence courante pour les encodeurs.
- [DeBERTa / DeBERTa-v3](https://arxiv.org/abs/2111.09543) - attention dissociée ; performant en classification, reconnaissance d’entités nommées et inférence en langue naturelle.
- [ELECTRA](https://arxiv.org/abs/2003.10555) - préentraînement par détection de tokens remplacés, économe en exemples.
- [ModernBERT](https://arxiv.org/abs/2412.13663) (2024) - encodeur modernisé avec représentations positionnelles rotatives, FlashAttention et contexte de 8 000 tokens ; encodeur de référence actuel pour la classification, la reconnaissance d’entités nommées et la recherche.
- [NeoBERT](https://arxiv.org/abs/2502.19587) (2025) - encodeur de 250 millions de paramètres intégrant des améliorations d’architecture modernes (RoPE, contexte de 4 000 tokens, profondeur/largeur optimisée) ; état de l’art sur MTEB, devant ModernBERT et RoBERTa-large avec un ajustement fin identique.

Encodeurs-décodeurs et modèles seq2seq :

- [T5](https://arxiv.org/abs/1910.10683) et [FLAN-T5](https://arxiv.org/abs/2210.11416) - formulation texte-à-texte des tâches de TAL ; références solides d’encodeurs-décodeurs ajustés par instructions.
- [BART](https://arxiv.org/abs/1910.13461) - préentraînement seq2seq par débruitage ; largement utilisé pour le résumé et la génération.

Grands modèles de langue ouverts à décodeur seul (utilisés comme base pour des tâches TAL) :

- [Llama 3 / 3.1 / 3.3](https://arxiv.org/abs/2407.21783) (Meta, 2024-2025) - famille de poids ouverts largement adoptée ; modèle de base par défaut pour l’ajustement fin de diverses tâches TAL.
- [Qwen 2.5 / Qwen 3](https://qwenlm.github.io/) (Alibaba, 2024-2025) - vaste couverture multilingue, notamment du chinois ; souvent en tête des modèles ouverts sur les benchmarks multilingues.
- [DeepSeek-V3](https://arxiv.org/abs/2412.19437) (2024) - préentraînement efficace par mélange d’experts (MoE) ; modèle de base ouvert compétitif.
- [OLMo 2](https://arxiv.org/abs/2501.00656) (AI2, 2025) - entièrement ouvert : poids, données d’entraînement et code ; référence en matière de reproductibilité.
- [Gemma 2 / Gemma 3](https://arxiv.org/abs/2408.00118) (Google, 2024-2025) - modèles ouverts de petite et moyenne taille, performants sur les tâches TAL.
- [Mistral / Mixtral](https://arxiv.org/abs/2401.04088) - modèles ouverts efficaces, denses et à mélange d’experts épars.
- [What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?](https://arxiv.org/abs/2204.05832) - comparaison des encodeurs, décodeurs et encodeurs-décodeurs pour le transfert en TAL.

### Modèles multilingues et interlingues

- [XLM-R](https://arxiv.org/abs/1911.02116) - modèle de langue masqué interlingue entraîné sur CommonCrawl, couvrant 100 langues.
- [mT5](https://arxiv.org/abs/2010.11934) - T5 multilingue couvrant 101 langues.
- [BLOOM](https://arxiv.org/abs/2211.05100) - modèle de langue multilingue ouvert de 176 milliards de paramètres, couvrant 46 langues naturelles.
- [Aya 23 / Aya Expanse](https://arxiv.org/abs/2412.04261) (Cohere For AI, 2024) - modèles massivement multilingues ajustés par instructions, couvrant de 23 à 101 langues.
- [Glot500](https://arxiv.org/abs/2305.12182) - encodeur pour plus de 500 langues, axé sur les langues peu dotées.
- [NLLB-200](https://arxiv.org/abs/2207.04672) - No Language Left Behind : traduction automatique pour 200 langues.
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - modèle de traduction automatique pour plus de 400 langues et corpus multilingue de 3 billions de tokens.
- [SeamlessM4T / Seamless](https://arxiv.org/abs/2312.05187) (Meta, 2023-2024) - traduction vocale et textuelle multilingue et multimodale, couvrant plus de 100 langues.
- [SEA-LION / SeaLLM](https://arxiv.org/abs/2312.00738) (2024-2025) - modèles de langue ciblant les langues d’Asie du Sud-Est.
- [Babel](https://arxiv.org/abs/2503.00865) (2025) - grands modèles de langue multilingues ouverts (9 et 83 milliards de paramètres), couvrant les 25 langues les plus parlées (environ 90 % des locuteurs du monde) ; dépasse des modèles multilingues ouverts de taille similaire sur XCOPA, XNLI, MGSM et FLORES-200.
- [Lugha-Llama](https://arxiv.org/abs/2504.06536) (Princeton/Mila, 2025) - Llama-3.1-8B adapté aux langues africaines peu dotées grâce au corpus WURA sélectionné ; résultats ouverts de pointe sur IrokoBench et AfriQA.
- [AfriqueLLM](https://arxiv.org/abs/2601.06395) (McGill, 2026) - suite de grands modèles de langue ouverts (4 à 14 milliards de paramètres), poursuivant le préentraînement sur 26 milliards de tokens dans 20 langues africaines et accompagnée d’une étude empirique approfondie du mélange de données.
- [TranslateGemma](https://arxiv.org/abs/2601.09012) (Google, 2026) - modèles ouverts spécialisés en traduction, fondés sur Gemma 3 et couvrant 55 paires de langues grâce à l’ajustement fin supervisé et à l’apprentissage par renforcement avec des modèles de récompense de qualité.
- [MiLMMT-46](https://arxiv.org/abs/2602.11961) (Xiaomi, 2026) - traduction automatique multilingue ouverte couvrant 46 langues et rivalisant avec des systèmes commerciaux comme Google Translate et Gemini 3 Pro.

### Évaluation et benchmarks

Compréhension du langage et évaluation interlingue :

- [GLUE](https://gluebenchmark.com/) et [SuperGLUE](https://super.gluebenchmark.com/) - benchmarks de compréhension du langage en anglais.
- [XTREME](https://sites.research.google/xtreme) et [XGLUE](https://microsoft.github.io/XGLUE/) - compréhension du langage interlingue.
- [XNLI](https://github.com/facebookresearch/XNLI) - inférence en langue naturelle interlingue dans 15 langues.
- [FLORES-200](https://github.com/facebookresearch/flores) - évaluation de la traduction automatique dans 200 langues.
- [MTEB](https://github.com/embeddings-benchmark/mteb) - Massive Text Embedding Benchmark ; référence pour les encodeurs de phrases et de documents.
- [BEIR](https://github.com/beir-cellar/beir) - benchmark hétérogène de recherche d’information pour les modèles de récupération.

Évaluation moderne des modèles de langue (2023-2026) :

- [HELM](https://crfm.stanford.edu/helm/) - évaluation holistique sur des tâches TAL, mesurant la précision et d’autres critères.
- [BIG-bench](https://github.com/google/BIG-bench) - plus de 200 tâches évaluant les capacités des modèles de langue.
- [MMLU](https://github.com/hendrycks/test) - évaluation des connaissances multitâches dans 57 domaines.
- [MMLU-Pro](https://arxiv.org/abs/2406.01574) (2024) - version plus difficile et plus discriminante de MMLU.
- [GPQA](https://arxiv.org/abs/2311.12022) - questions-réponses de niveau universitaire et évaluation du raisonnement « à l’épreuve de Google ».
- [REFUTE](https://huggingface.co/datasets/BGPT-OFFICIAL/refute) (2026) - benchmark de raisonnement scientifique pour la critique fondée sur des preuves, la détection d’affirmations excessives, le refus en l’absence de preuves et la calibration.
- [IFEval](https://arxiv.org/abs/2311.07911) - évaluation vérifiable du suivi d’instructions.
- [Chatbot Arena (LMSYS)](https://lmarena.ai/) - classement ELO des modèles conversationnels selon les préférences humaines.
- [LiveBench](https://livebench.ai/) (2024) - benchmark résistant à la contamination et renouvelé chaque mois.
- [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) - cadre unifié d’évaluation des modèles de langue sur des benchmarks.
- [MMLU-ProX](https://arxiv.org/abs/2503.10497) (2025) - extension multilingue de MMLU-Pro à 29 langues typologiquement diverses ; révèle jusqu’à 24,3 % d’écart de performance entre les langues fortement et faiblement dotées.
- [MultiChallenge](https://arxiv.org/abs/2501.17399) (2025) - benchmark conversationnel à plusieurs tours révélant des échecs conjoints du suivi d’instructions et du raisonnement en contexte ; tous les modèles de pointe testés obtiennent moins de 50 %.
- [FRAMES](https://arxiv.org/abs/2409.12941) (2025) - évaluation unifiée de la génération augmentée par la recherche d’information : 824 questions à plusieurs étapes nécessitant simultanément factualité, précision de la recherche et raisonnement interdocuments.

Évaluation du long contexte :

- [Needle in a Haystack](https://github.com/gkamradt/LLMTest_NeedleInAHaystack) - test de recherche pour les fenêtres de contexte longues.
- [RULER](https://arxiv.org/abs/2404.06654) (2024) - tâches synthétiques à long contexte allant au-delà de la simple recherche d’information.
- [LongBench](https://github.com/THUDM/LongBench) - benchmark bilingue à long contexte couvrant des tâches TAL.
- [LongBench v2](https://arxiv.org/abs/2412.15204) (2025) - 503 questions à choix multiples conçues par des experts, couvrant des contextes de 8 000 à 2 millions de mots et nécessitant un raisonnement approfondi à plusieurs étapes ; les humains obtiennent 53,7 % sous contrainte de temps.
- [U-NIAH](https://arxiv.org/abs/2503.00353) (2025) - étend le test de l’aiguille dans une botte de foin avec des configurations à aiguilles multiples et imbriquées ; montre que RAG atténue la perte d’information au milieu du contexte pour les petits grands modèles de langue, mais dégrade les modèles de raisonnement.

### Raisonnement et calcul à l’inférence

Tendance majeure de 2024 à 2026 : des modèles qui produisent des traces de raisonnement explicites et bénéficient d’un calcul supplémentaire à l’inférence.

- [Chain-of-Thought Prompting](https://arxiv.org/abs/2201.11903) - résultat fondateur : les étapes de raisonnement intermédiaires améliorent les performances.
- [Self-Consistency](https://arxiv.org/abs/2203.11171) - vote majoritaire parmi des chaînes de raisonnement (CoT) échantillonnées.
- [Tree of Thoughts](https://arxiv.org/abs/2305.10601) - recherche dans des arbres de raisonnement.
- [Self-Refine](https://arxiv.org/abs/2303.17651) et [Reflexion](https://arxiv.org/abs/2303.11366) - autocorrection au moment de l’inférence.
- [Large Language Models are Zero-Shot Reasoners](https://arxiv.org/abs/2205.11916) - raisonnement en chaîne pour les tâches de raisonnement en TAL.
- [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) - modèles de récompense supervisés par processus pour le raisonnement.
- [DeepSeek-R1](https://arxiv.org/abs/2501.12948) (2025) - modèle de raisonnement ouvert entraîné uniquement par apprentissage par renforcement ; reproduit en ouvert le comportement de type o1.
- [OpenAI o1 / o3](https://openai.com/index/learning-to-reason-with-llms/) (2024-2025) - systèmes de raisonnement fondés sur le calcul à l’inférence.
- [Scaling LLM Test-Time Compute Optimally](https://arxiv.org/abs/2408.03314) (2024) - étude systématique des compromis de calcul au moment de l’inférence.
- [s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393) (2025) - méthode simple de mise à l’échelle du raisonnement, ouverte et compacte, par forçage du budget.
- [Kimi k1.5](https://arxiv.org/abs/2501.12599) (2025) - apprentissage par renforcement à long contexte avec optimisation de politique (sans MCTS ni PRM), atteignant les performances de o1 ; introduit la distillation de chaînes de raisonnement longues vers des modèles à chaînes courtes.
- [rStar-Math](https://arxiv.org/abs/2501.04519) (2025) - petit modèle de politique associé à un modèle de préférences de processus entraîné avec des parcours MCTS ; permet aux petits modèles de langue de développer leurs capacités de raisonnement sans distillation de modèles plus grands.
- [DAPO](https://arxiv.org/abs/2503.14476) (2025) - système ouvert d’apprentissage par renforcement fondé sur GRPO, avec quatre améliorations clés (écrêtage découplé, échantillonnage dynamique, perte au niveau des tokens, bonus d’entropie) ; reproduit et dépasse le raisonnement de niveau DeepSeek-R1-Zero.
- [VAPO](https://arxiv.org/abs/2504.05118) (2025) - apprentissage par renforcement fondé sur un modèle de valeur, avec GAE adaptatif à la longueur et écrêtage par token ; dépasse les méthodes GRPO sans modèle de valeur sur AIME 2024 avec un entraînement stable.
- [ThinkPRM](https://arxiv.org/abs/2504.16828) (2025) - modèles génératifs de récompense de processus produisant une vérification en chaîne à chaque étape ; égalent les PRM discriminatifs avec 1 % des étiquettes de supervision.
- [OpenThoughts](https://arxiv.org/abs/2506.04178) (2025) - plus de 1 000 expériences contrôlées sur les recettes de données des modèles de raisonnement ouverts ; état de l’art sur AIME 2025, à égalité avec les références fermées par distillation.

### Long contexte et architectures alternatives

- [Mamba](https://arxiv.org/abs/2312.00752) et [Mamba-2](https://arxiv.org/abs/2405.21060) - modèles sélectifs à espace d’états, alternative à l’attention à complexité linéaire pour les longs contextes.
- [RWKV](https://arxiv.org/abs/2305.13048) - modèle hybride RNN-Transformer pouvant atteindre un grand nombre de paramètres.
- [Jamba](https://arxiv.org/abs/2403.19887) (2024) - architecture hybride Mamba-Transformer à mélange d’experts.
- [RoPE](https://arxiv.org/abs/2104.09864) et [YaRN](https://arxiv.org/abs/2309.00071) - représentations positionnelles rotatives et extension de la longueur de contexte.
- [Position Interpolation](https://arxiv.org/abs/2306.15595) - extension des fenêtres de contexte avec un ajustement fin minimal.
- [Lost in the Middle](https://arxiv.org/abs/2307.03172) - schémas de dégradation du long contexte dans les tâches TAL.
- [RAG vs Long-Context LLMs](https://arxiv.org/abs/2407.16833) (2024) - compromis pour les questions-réponses sur de longues entrées.
- [Titans: Learning to Memorize at Test Time](https://arxiv.org/abs/2501.00663) (2025) - module neuronal de mémoire à long terme apprenant à mémoriser le contexte antérieur pendant l’inférence ; dépasse 2 millions de tokens et surpasse les Transformers et les modèles récurrents linéaires modernes en modélisation de langue et en raisonnement.
- [MiniMax-01](https://arxiv.org/abs/2501.08313) (2025) - modèle hybride de 456 milliards de paramètres combinant attention linéaire lightning et attention softmax éparse ; égale les performances TAL de GPT-4o avec des contextes d’inférence allant jusqu’à 4 millions de tokens.
- [Native Sparse Attention (NSA)](https://arxiv.org/abs/2502.11089) (2025) - attention éparse entraînable combinant compression grossière et sélection fine ; fortes accélérations à 64 000 tokens sans dégradation des benchmarks TAL.
- [LongRoPE2](https://arxiv.org/abs/2502.20082) (2025) - identifie le sous-entraînement des dimensions RoPE à haute fréquence et applique une mise à l’échelle par recherche évolutionnaire ; étend LLaMA3-8B à 128 000 tokens avec 80 fois moins de tokens d’entraînement que la méthode de Meta.
- [Characterizing SSM and Hybrid LM Long-Context Performance](https://arxiv.org/abs/2507.12442) (2025) - première analyse exhaustive de la mémoire et de la vitesse des Transformers, modèles à espace d’états et modèles hybrides jusqu’à 220 000 tokens ; les modèles à espace d’états sont jusqu’à quatre fois plus rapides, les hybrides équilibrant rappel et efficacité.

### Factualité, hallucinations et calibration

- [Survey of Hallucination in Natural Language Generation](https://arxiv.org/abs/2202.03629) - taxonomie et stratégies d’atténuation.
- [TruthfulQA](https://github.com/sylinrl/TruthfulQA) - benchmark de véracité pour les systèmes de questions-réponses.
- [FActScore](https://github.com/shmsw25/FActScore) - précision factuelle détaillée pour la génération de textes longs.
- [LongFact / SAFE](https://arxiv.org/abs/2403.18802) (2024) - benchmark de factualité des textes longs et évaluateur augmenté par la recherche.
- [SelfCheckGPT](https://github.com/potsawee/selfcheckgpt) - détection des hallucinations par échantillonnage.
- [RAGAS](https://github.com/explodinggradients/ragas) - évaluation sans référence des pipelines RAG et de questions-réponses.
- [Lookback Lens](https://arxiv.org/abs/2407.07071) (2024) - détection des hallucinations dans les générations à long contexte à partir des schémas d’attention.
- [Calibration of LLMs on Multiple Choice](https://arxiv.org/abs/2402.13887) (2024) - analyse de la calibration selon le format.
- [HalluLens](https://arxiv.org/abs/2504.17550) (2025) - benchmark des hallucinations avec taxonomie extrinsèque/intrinsèque et régénération dynamique du jeu de tests pour résister aux fuites de données.
- [Atomic Calibration](https://arxiv.org/abs/2410.13246) (2025) - analyse de la calibration au niveau des affirmations pour les textes longs ; les modèles sont nettement moins bien calibrés dans les sorties longues que pour des affirmations isolées.
- [FRANQ](https://arxiv.org/abs/2505.21072) (2025) - quantification de l’incertitude sensible à la fidélité pour la vérification factuelle RAG ; distingue formellement la fidélité de la factualité.
- [MUCH](https://arxiv.org/abs/2511.17081) (2025) - benchmark multilingue des hallucinations dans des affirmations en anglais, français, espagnol et allemand ; publie les logits au niveau des tokens pour une évaluation rigoureuse de la quantification de l’incertitude.
- [HalluHard](https://arxiv.org/abs/2602.01031) (2026) - benchmark exigeant d’hallucinations à plusieurs tours pour les réponses nécessitant des citations ; le taux d’hallucination reste proche de 30 %, même avec la recherche Web.
- [CURE: Think Through Uncertainty](https://arxiv.org/abs/2604.12046) (2026) - entraîne les modèles à raisonner sur l’incertitude de chaque affirmation avant de générer ; fortes améliorations en factualité biographique et en AUROC sur FactBench.

### Sondage et interprétabilité

- [A Primer in BERTology](https://arxiv.org/abs/2002.12327) - ce que BERT apprend sur la langue.
- [Probing Classifiers (Belinkov)](https://arxiv.org/abs/2102.12452) - méthodologie, limites et alternatives.
- [Locating and Editing Factual Associations in GPT (ROME)](https://rome.baulab.info/) - traçage causal du rappel factuel.
- [The Pyramid of NLP Probes](https://arxiv.org/abs/2104.07885) - sondage structurel des connaissances linguistiques.
- [Toy Models of Superposition](https://transformer-circuits.pub/2022/toy_model/) - fondement de l’interprétation des représentations Transformer en caractéristiques éparses.
- [Towards Monosemanticity / Scaling Monosemanticity](https://transformer-circuits.pub/2024/scaling-monosemanticity/) (Anthropic, 2024) - autoencodeurs épars extrayant des caractéristiques interprétables de modèles de langue en production.
- [Sparse Autoencoders Find Highly Interpretable Features](https://arxiv.org/abs/2309.08600) - méthodologie des autoencodeurs épars (SAE) pour interpréter les modèles de langue.
- [Neuronpedia](https://www.neuronpedia.org/) - plateforme ouverte d’exploration des caractéristiques SAE dans divers modèles.
- [Influence Functions Scale to LLMs](https://arxiv.org/abs/2308.03296) (2023) - identification des exemples d’entraînement qui influencent le comportement des modèles.
- [Circuit Tracing: Revealing Computational Graphs in Language Models](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) (Anthropic, 2025) - présente les transcodeurs inter-couches et les graphes d’attribution pour construire un modèle de remplacement interprétable ; permet le traçage, au niveau de la requête, des interactions causales entre caractéristiques.
- [On the Biology of a Large Language Model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) (Anthropic, 2025) - applique les graphes d’attribution à Claude 3.5 Haiku pour étudier le raisonnement à plusieurs étapes, la planification des rimes et des exemples de contournement des garde-fous.
- [Transcoders Beat Sparse Autoencoders for Interpretability](https://arxiv.org/abs/2501.18823) (2025) - montre que les transcodeurs (reconstruisant les sorties d’une couche à partir de ses entrées) produisent des caractéristiques plus interprétables que les SAE ; présente les transcodeurs à sauts.
- [Survey on Sparse Autoencoders for LLM Interpretability](https://arxiv.org/abs/2503.05613) (EMNLP 2025) - état des lieux de référence des architectures SAE, stratégies d’entraînement, explications des caractéristiques et méthodes d’évaluation.
- [Finding Highly Interpretable Prompt-Specific Circuits](https://arxiv.org/abs/2602.13483) (2026) - identifie les circuits au niveau de chaque requête plutôt que de chaque tâche ; révèle le regroupement des mécanismes par famille de requêtes.

### Modèles de langue compacts et efficaces

Distillation et modèles compacts :

- [DistilBERT](https://arxiv.org/abs/1910.01108) et [MiniLM](https://arxiv.org/abs/2002.10957) - encodeurs distillés pour le TAL en production.
- [Phi-3 / Phi-4](https://arxiv.org/abs/2412.08905) (Microsoft, 2024) - petits modèles entraînés sur des données sélectionnées, compétitifs avec des modèles bien plus grands sur les benchmarks TAL.
- [SmolLM2](https://arxiv.org/abs/2502.02737) (HuggingFace, 2025) - famille de petits modèles de langue entièrement ouverts, avec données d’entraînement reproductibles.
- [SmolLM3](https://huggingface.co/blog/smollm3) (HuggingFace, 2025) - décodeur entièrement ouvert de 3 milliards de paramètres, préentraîné sur 11,2 billions de tokens avec NoPE et YaRN pour un contexte de 128 000 tokens ; compétitif avec les modèles de classe 4 milliards.
- [Gemma 3 Technical Report](https://arxiv.org/abs/2503.19786) (Google, 2025) - modèles ouverts de 1 à 27 milliards de paramètres, avec une forte proportion d’attention locale par rapport à l’attention globale afin de maintenir un cache KV gérable pour un contexte de 128 000 tokens.
- [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) (Alibaba, 2025) - modèles denses et à mélange d’experts de 0,6 à 235 milliards de paramètres, avec modes de raisonnement et sans raisonnement unifiés ; le modèle MoE 30B-A3B rivalise avec des modèles denses plus grands en n’activant que 3 milliards de paramètres.
- [Apple Intelligence Foundation Language Models](https://arxiv.org/abs/2507.13575) (Apple, 2025) - modèle embarqué de 3 milliards de paramètres utilisant le partage du cache KV et une quantification consciente de l’entraînement (QAT) sur 2 bits, réduisant de 37,5 % la mémoire du cache sans perte de précision.
- [Sentence-Transformers](https://www.sbert.net/) - représentations vectorielles de phrases et de paragraphes par BERT siamois.
- [SetFit](https://github.com/huggingface/setfit) - classification de texte en quelques exemples, sans requêtes.
- [FastFit](https://github.com/IBM/fastfit) - classification rapide en quelques exemples pour les tâches à nombreuses classes.
- [GTE](https://huggingface.co/thenlper/gte-base), [BGE](https://github.com/FlagOpen/FlagEmbedding) et [Stella](https://huggingface.co/dunzhang/stella_en_1.5B_v5) - modèles compacts de représentation vectorielle de texte, près du sommet de MTEB.

Quantification et mise à disposition (pertinentes pour déployer des modèles TAL à grande échelle) :

- [GPTQ](https://arxiv.org/abs/2210.17323) - quantification après entraînement des Transformers.
- [AWQ](https://arxiv.org/abs/2306.00978) - quantification des poids tenant compte des activations.
- [KVTuner](https://arxiv.org/abs/2502.04420) (ICML 2025) - quantification mixte du cache KV, couche par couche, tenant compte de la sensibilité ; améliore le débit jusqu’à 21 % par rapport à KV8 uniforme.
- [GGUF / llama.cpp](https://github.com/ggerganov/llama.cpp) - inférence quantifiée et portable.
- [vLLM](https://github.com/vllm-project/vllm) - mise à disposition de modèles de langue à haut débit fondée sur PagedAttention.
- [SGLang](https://github.com/sgl-project/sglang) - génération structurée et mise à disposition efficace.
- [Text Generation Inference (TGI)](https://github.com/huggingface/text-generation-inference) - service de production Hugging Face pour les modèles de langue.

Ajustement fin efficace en paramètres :

- [LoRA](https://arxiv.org/abs/2106.09685) et [QLoRA](https://arxiv.org/abs/2305.14314) - adaptateurs de faible rang et ajustement fin quantifié ; méthodes standard pour adapter des modèles de langue aux tâches TAL avec du matériel modeste.
- [DoRA](https://arxiv.org/abs/2402.09353) (2024) - adaptation de faible rang par décomposition des poids.
- [PEFT](https://github.com/huggingface/peft) - bibliothèque Hugging Face regroupant LoRA, prefix tuning, IA3 et d’autres méthodes.

### Ajustement par instructions et optimisation des préférences

- [FLAN](https://arxiv.org/abs/2109.01652) - modèles de langue ajustés finement comme apprenants à zéro exemple.
- [InstructGPT](https://arxiv.org/abs/2203.02155) - entraînement des modèles de langue à suivre des instructions à l’aide de retours humains.
- [Self-Instruct](https://github.com/yizhongw/self-instruct) - amorçage automatique de données d’instructions à partir de modèles de langue.
- [Super-NaturalInstructions](https://github.com/allenai/natural-instructions) - plus de 1 600 tâches TAL accompagnées d’instructions.
- [Constitutional AI](https://arxiv.org/abs/2212.08073) - entraînement de modèles de langue à l’aide de retours générés par une IA, selon une constitution écrite.
- [Direct Preference Optimization](https://arxiv.org/abs/2305.18290) - solution plus simple que RLHF, largement adoptée.
- [Tülu 3](https://arxiv.org/abs/2411.15124) (AI2, 2024) - recette ouverte de post-entraînement, avec des résultats de pointe parmi les modèles ouverts.
- [LIMA](https://arxiv.org/abs/2305.11206) - « moins, c’est mieux pour l’alignement » : un petit ensemble de données SFT de haute qualité peut suffire.
- [TRL](https://github.com/huggingface/trl) - bibliothèque de référence pour SFT, DPO, GRPO et RLHF.
- [Magpie](https://arxiv.org/abs/2406.08464) (2024-2025) - synthétise des paires instruction-réponse de haute qualité en interrogeant des modèles de langue alignés sans fournir de contenu ; l’ajustement fin supervisé sur le sous-ensemble filtré égale Llama-3-Instruct officiel.

### Biais, équité et sécurité en TAL

- [StereoSet](https://github.com/moinnadeem/StereoSet) - mesure les biais stéréotypés dans les modèles de langue préentraînés.
- [CrowS-Pairs](https://github.com/nyu-mll/crows-pairs) - mesure des biais sociaux dans les modèles de langue masqués.
- [WinoBias](https://github.com/uclanlp/corefBias) - biais liés au genre dans la résolution de coréférences.
- [HolisticBias](https://github.com/facebookresearch/ResponsibleNLP) - mesure des biais selon de nombreuses dimensions démographiques.
- [RealToxicityPrompts](https://github.com/allenai/real-toxicity-prompts) - toxicité des générations de modèles de langue.
- [Sycophancy in Language Models](https://arxiv.org/abs/2310.13548) - modèles adaptant leurs réponses aux croyances de l’utilisateur.
- [Alignment Faking in Large Language Models](https://arxiv.org/abs/2412.14093) (Anthropic, 2024) - modèles se conformant stratégiquement aux consignes pendant l’entraînement.
- [WildGuard](https://arxiv.org/abs/2406.18495) (2024) - modèle et benchmark ouverts de modération de sécurité.
- [Emergent Misalignment](https://arxiv.org/abs/2502.17424) (2025) - l’ajustement fin sur une tâche étroite (code non sécurisé) provoque de manière inattendue de larges échecs d’alignement dans des domaines sans rapport.
- [SafeDialBench](https://arxiv.org/abs/2502.11090) (2025) - benchmark multilingue de sécurité (chinois/anglais) comprenant plus de 4 000 dialogues à plusieurs tours, répartis sur 22 scénarios et 7 stratégies de contournement.
- [TeleAI-Safety](https://arxiv.org/abs/2512.05485) (2025) - cadre modulaire d’évaluation des contournements, intégrant 19 attaques, 29 défenses et 19 méthodes d’évaluation sur 14 modèles et 12 catégories de risques.
- [IndicSafe](https://arxiv.org/abs/2603.17915) (2026) - benchmark multilingue de sécurité couvrant 12 langues indiennes ; révèle un accord interlingue de 12,8 % et des refus excessifs dans les écritures peu dotées.
- [VLAF: Value-Conflict Alignment Faking](https://arxiv.org/abs/2604.20995) (2026) - la falsification de l’alignement apparaît dans 37 % des cas sur des modèles de seulement 7 milliards de paramètres lorsque les règles entrent en conflit avec les valeurs internalisées ; une atténuation par vecteur de pilotage la réduit de 94%.

## TAL par langue

[Retour en haut](#contents)

Ressources classées par langue. Cliquez sur une section pour la développer.

<details>
<summary>

### TAL en arabe

</summary>

[Retour en haut](#contents)

### Bibliothèques

- [CAMeL Tools](https://github.com/CAMeL-Lab/camel_tools) - boîte à outils Python de TAL arabe, comprenant l’identification des dialectes, la morphologie et la reconnaissance d’entités nommées.
- [goarabic](https://github.com/01walid/goarabic) - paquet Go de traitement de texte arabe.
- [jsastem](https://github.com/ejtaal/jsastem) - racineur arabe en JavaScript.
- [PyArabic](https://pypi.org/project/PyArabic/) - bibliothèque Python pour l’arabe.
- [RFTokenizer](https://github.com/amir-zeldes/RFTokenizer) - segmenteur entraînable pour l’arabe, l’hébreu et le copte.
- [Farasa](https://farasa.qcri.org/) - segmentation, étiquetage morphosyntaxique et reconnaissance d’entités nommées pour l’arabe par QCRI.

### Modèles et représentations vectorielles

- [AraBERT](https://github.com/aub-mind/arabert) - famille de modèles BERT en arabe.
- [CAMeLBERT](https://github.com/CAMeL-Lab/CAMeLBERT) - modèles BERT pour l’arabe standard moderne, dialectal et classique.
- [AraELECTRA](https://aclanthology.org/2021.wanlp-1.20/) - préentraînement efficace pour l’arabe (publié avec [AraBERT](https://github.com/aub-mind/arabert)).
- [Jais](https://huggingface.co/inceptionai/jais-13b) (2023-2024) - famille ouverte de modèles de langue bilingues arabe-anglais.
- [ALLaM](https://arxiv.org/abs/2407.15390) (SDAIA, 2024) - modèles fondamentaux privilégiant l’arabe.

### Jeux de données

- [Multidomain Datasets](https://github.com/hadyelsahar/large-arabic-sentiment-analysis-resouces) - ensemble de ressources d’analyse des sentiments arabes couvrant le plus grand nombre de domaines disponible.
- [LABR](https://github.com/mohamedadaly/labr) - vaste jeu de données d’avis arabes sur des livres.
- [Arabic Stopwords](https://github.com/mohataher/arabic-stop-words) - compilation de mots vides arabes.
- [ArabicMMLU](https://huggingface.co/datasets/MBZUAI/ArabicMMLU) (2024) - benchmark MMLU en arabe.

</details>

<details>
<summary>

### TAL en chinois

</summary>

[Retour en haut](#contents)

### Bibliothèques

- [jieba](https://github.com/fxsjy/jieba#jieba-1) - paquet Python de segmentation des mots chinois.
- [SnowNLP](https://github.com/isnowfy/snownlp) - paquet Python de TAL chinois.
- [FudanNLP](https://github.com/FudanNLP/fnlp) - bibliothèque Java de traitement de texte chinois.
- [HanLP](https://github.com/hankcs/HanLP) - bibliothèque TAL multilingue offrant une prise en charge avancée du chinois.
- [LTP](https://github.com/HIT-SCIR/ltp) - plateforme de technologies linguistiques du HIT : segmentation, étiquetage morphosyntaxique, reconnaissance d’entités nommées et analyse syntaxique.

### Modèles et représentations vectorielles

- [Chinese-BERT-wwm](https://github.com/ymcui/Chinese-BERT-wwm) - BERT pour le chinois avec masquage de mots entiers.
- [MacBERT](https://github.com/ymcui/MacBERT) - BERT amélioré pour le chinois, préentraîné par modélisation du langage masqué comme tâche de correction.
- [Qwen 2.5 / Qwen 3](https://github.com/QwenLM/Qwen3) - famille de modèles de langue ouverts d’Alibaba, particulièrement performants en chinois.
- [ChatGLM3 / GLM-4](https://github.com/THUDM/ChatGLM3) - modèles de langue bilingues chinois-anglais de Tsinghua.
- [Baichuan 2](https://github.com/baichuan-inc/Baichuan2) - modèle de langue ouvert en chinois.
- [Yi](https://github.com/01-ai/Yi) - modèles de langue ouverts bilingues de 01.AI.
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - modèle MoE ouvert efficace et performant en chinois.

### Anthologie

- [funNLP](https://github.com/fighting41love/funNLP) - vaste collection d’outils et de ressources de TAL chinois.

</details>

<details>
<summary>

### TAL en danois

</summary>

[Retour en haut](#contents)

- [Named Entity Recognition for Danish](https://github.com/ITUnlp/daner)
- [DaNLP](https://github.com/alexandrainst/danlp) - ressources de TAL en danois.
- [Awesome Danish](https://github.com/fnielsen/awesome-danish) - sélection de ressources pour les technologies linguistiques danoises.

</details>

<details>
<summary>

### TAL en néerlandais

</summary>

[Retour en haut](#contents)

- [python-frog](https://github.com/proycon/python-frog) - interface Python pour Frog, suite TAL néerlandaise (étiquetage morphosyntaxique, lemmatisation, analyse des dépendances et reconnaissance d’entités nommées).
- [SimpleNLG_NL](https://github.com/rfdj/SimpleNLG-NL) - générateur de surface néerlandais pour la génération de langue naturelle, fondé sur l’implémentation SimpleNLG.
- [Alpino](https://github.com/rug-compling/alpino) - analyseur de dépendances pour le néerlandais (assure aussi l’étiquetage morphosyntaxique et la lemmatisation).
- [Kaldi NL](https://github.com/opensource-spraakherkenning-nl/Kaldi_NL) - modèles néerlandais de reconnaissance vocale fondés sur [Kaldi](http://kaldi-asr.org/).
- [spaCy Dutch model](https://spacy.io/models/nl) - pipeline spaCy de TAL néerlandais de qualité industrielle.

</details>

<details>
<summary>

### TAL en allemand

</summary>

[Retour en haut](#contents)

- [German-NLP](https://github.com/adbar/German-NLP) - sélection de ressources et d’outils libres, à code source ouvert et prêts à l’emploi, développés principalement pour l’allemand.

</details>

<details>
<summary>

### TAL en hongrois

</summary>

[Retour en haut](#contents)

- [awesome-hungarian-nlp](https://github.com/oroszgy/awesome-hungarian-nlp) - sélection de ressources gratuites de TAL hongrois.

</details>

<details>
<summary>

### TAL dans les langues indiennes

</summary>

[Retour en haut](#contents)

### Données, corpus et banques d’arbres

- [Hindi Dependency Treebank](https://ltrc.iiit.ac.in/treebank_H2014/) - banque d’arbres à représentations et couches multiples pour le hindi et l’ourdou.
- [Universal Dependencies Treebank in Hindi](https://universaldependencies.org/treebanks/hi_hdtb/index.html)
  - [Parallel Universal Dependencies Treebank in Hindi](http://universaldependencies.org/treebanks/hi_pud/index.html) - sous-ensemble plus petit de la banque d’arbres mentionnée ci-dessus.
- [ISI FIRE Stopwords List (Hindi and Bangla)](https://www.isical.ac.in/~fire/data/)
- [Peter Graham's Stopwords List](https://github.com/6/stopwords-json)
- [NLTK Corpus](https://www.nltk.org/book/ch02.html) 60 000 mots étiquetés morphosyntaxiquement en bengali, hindi, marathi et télougou.
- [Hindi Movie Reviews Dataset](https://github.com/goru001/nlp-for-hindi) Environ 1 000 exemples et 3 classes de polarité.
- [BBC News Hindi Dataset](https://github.com/NirantK/hindi2vec/releases/tag/bbc-hindi-v0.1) 4 300 exemples et 14 classes.
- [IIT Patna Hindi ABSA Dataset](https://github.com/pnisarg/ABSA) 5 400 exemples, 12 domaines, 4 000 termes d’aspect et polarité en 4 classes au niveau des aspects et des phrases.
- [Bangla ABSA](https://github.com/AtikRahman/Bangla_Datasets_ABSA) 5 500 exemples, 2 domaines et 10 termes d’aspect.
- [IIT Patna Movie Review Sentiment Dataset](https://www.iitp.ac.in/~ai-nlp-ml/resources.html) 2 000 exemples et 3 étiquettes de polarité.

#### Corpus et jeux de données dont l’accès nécessite un compte ou peut être obtenu par courriel

- [SAIL 2015](http://amitavadas.com/SAIL/) Exemples de sentiments annotés tirés de Twitter et Facebook en hindi, bengali, tamoul et télougou.
- [IIT Bombay CFILT Resources](https://www.cfilt.iitb.ac.in/) - SentiWordNet, corpus parallèles annotés, corpus annotés en sens et corpus marathi annoté en polarité.
- [TDIL-IC aggregates a lot of useful resources and provides access to otherwise gated datasets](https://tdil-dc.in/index.php?option=com_catalogue&task=viewTools&id=83&lang=en)

### Modèles de langue et représentations vectorielles de mots

- [Hindi2Vec](https://nirantk.com/hindi2vec/) et [nlp-for-hindi](https://github.com/goru001/nlp-for-hindi) Modèle de langue de type ULMFiT.
- [IIT Patna Bilingual Word Embeddings Hi-En](https://www.iitp.ac.in/~ai-nlp-ml/resources.html)
- [Fasttext word embeddings in a whole bunch of languages, trained on Common Crawl](https://fasttext.cc/docs/en/crawl-vectors.html)
- [Hindi and Bengali Word2Vec](https://github.com/Kyubyong/wordvectors)
- [Hindi and Urdu Elmo Model](https://github.com/HIT-SCIR/ELMoForManyLangs)
- [Sanskrit Albert](https://huggingface.co/surajp/albert-base-sanskrit) Entraîné sur Wikipédia en sanskrit et le corpus OSCAR.

### Bibliothèques et outils

- [Multi-Task Deep Morphological Analyzer](https://github.com/Saurav0074/mt-dma) - analyseur morphologique profond pour le hindi et l’ourdou.
- [Indic NLP Library](https://github.com/anoopkunchukuttan/indic_nlp_library) - outils de tokenisation, translittération et traduction automatique pour 18 langues indiennes.
- [SivaReddy's Dependency Parser (Python3 port)](https://github.com/CalmDownKarm/sivareddydependencyparser) - analyse des dépendances et étiquetage morphosyntaxique pour le kannada, le hindi et le télougou.
- [iNLTK](https://github.com/goru001/inltk) - boîte à outils TAL pour les langues indiennes, fondée sur PyTorch/Fastai.
- [AI4Bharat IndicNLP Suite](https://ai4bharat.iitm.ac.in/) - outils, jeux de données et modèles couvrant 22 langues indiennes.

### Modèles et représentations vectorielles

- [IndicBERT v2](https://github.com/AI4Bharat/IndicBERT) (2022-2024) - BERT multilingue pour 23 langues indiennes.
- [IndicTrans2](https://github.com/AI4Bharat/IndicTrans2) (2023-2024) - traduction automatique de haute qualité pour 22 langues indiennes.
- [OpenHathi](https://huggingface.co/sarvamai/OpenHathi-7B-Hi-v0.1-Base) (Sarvam AI, 2023) - continuation bilingue hindi-anglais de LLaMA.
- [Airavata](https://huggingface.co/ai4bharat/Airavata) (2024) - grand modèle de langue en hindi ajusté par instructions.
- [Sarvam-1](https://www.sarvam.ai/blogs/sarvam-1) (2024) - modèle de langue multilingue entraîné de zéro sur 10 langues indiennes.
- [BharatGPT / Krutrim](https://www.olakrutrim.com/) (2024) - modèles fondamentaux axés sur les langues indiennes.

</details>

<details>
<summary>

### TAL en indonésien

</summary>

[Retour en haut](#contents)

### Bibliothèques et représentations vectorielles

- [bahasa](https://github.com/kangfend/bahasa) - boîte à outils de traitement automatique des langues pour l’indonésien.
- [Indonesian Word Embedding](https://github.com/galuhsahid/indonesian-word-embedding)
- [Indonesian fastText](https://s3-us-west-1.amazonaws.com/fasttext-vectors/wiki.id.zip) entraîné sur Wikipédia.
- [PySastrawi](https://github.com/har07/PySastrawi) - racineur Python pour l’indonésien, fondé sur l’algorithme de racinisation Sastrawi.

### Modèles

- [IndoBERT (IndoNLU)](https://github.com/indobenchmark/indonlu) - modèle de langue indonésien préentraîné avec la suite de benchmarks IndoNLU.
- [IndoBERT (IndoLEM)](https://github.com/indolem/indolem) - autre variante d’IndoBERT avec le benchmark IndoLEM.
- [NusaCrowd / Cendol](https://github.com/IndoNLP/nusa-crowd) (2023-2024) - jeux de données communautaires à grande échelle et modèles de langue indonésiens et régionaux ajustés par instructions avec Cendol.
- [Sailor](https://github.com/sail-sg/sailor-llm) - modèles de langue ouverts d’Asie du Sud-Est, couvrant l’indonésien.
- [SEA-LION](https://github.com/aisingapore/sealion) (2024) - modèle de langue ouvert de l’IA de Singapour pour l’Asie du Sud-Est, performant en indonésien.

### Jeux de données

- Collections Kompas et Tempo disponibles auprès de [ILPS](http://ilps.science.uva.nl/resources/bahasa/).
- [PANL10N for PoS tagging](http://www.panl10n.net/english/outputs/Indonesia/UI/0802/UI-1M-tagged.zip) : 39 000 phrases et 900 000 tokens de mots.
- [IDN for PoS tagging](https://github.com/famrashel/idn-tagged-corpus) : 10 000 phrases et 250 000 tokens de mots.
- [Indonesian Treebank](https://github.com/famrashel/idn-treebank) et [Universal Dependencies-Indonesian](https://github.com/UniversalDependencies/UD_Indonesian-GSD).
- [IndoSum](https://github.com/kata-ai/indosum) - résumé et classification de texte.
- [Wordnet-Bahasa](http://wn-msa.sourceforge.net/) - grand dictionnaire sémantique gratuit.
- [SEACrowd](https://github.com/SEACrowd/seacrowd-datahub) - plateforme de données multilingue et multimodale proposant des jeux de données et benchmarks normalisés pour le TAL d’Asie du Sud-Est (EMNLP 2024).

</details>

<details>
<summary>

### TAL en coréen

</summary>

[Retour en haut](#contents)

### Bibliothèques

- [KoNLPy](http://konlpy.org) - paquet Python de traitement automatique du coréen.
- [Mecab (Korean)](https://eunjeon.blogspot.com/) - bibliothèque C++ de TAL coréen.
- [KoalaNLP](https://koalanlp.github.io/koalanlp/) - bibliothèque Scala de TAL coréen.
- [KoNLP](https://cran.r-project.org/package=KoNLP) - paquet R de TAL coréen.
- [kss](https://github.com/hyunwoongko/kss) - segmentation de phrases coréennes.
- [Kiwi](https://github.com/bab2min/Kiwi) - analyseur morphologique rapide du coréen.
- [Garu](https://github.com/ongjin/garu) - analyseur morphologique coréen natif du navigateur, entièrement exécuté côté client via WebAssembly (modèle de 1 Mo, hors ligne, licence MIT).

### Modèles et représentations vectorielles

- [KoBERT](https://github.com/SKTBrain/KoBERT) - BERT coréen de SKT.
- [KLUE-RoBERTa](https://github.com/KLUE-benchmark/KLUE) - modèles entraînés sur le benchmark KLUE.
- [Polyglot-Ko](https://github.com/EleutherAI/polyglot) - modèles de langue coréens ouverts.
- [EXAONE 3.5](https://github.com/LG-AI-EXAONE) (LG, 2024) - famille ouverte de modèles de langue bilingues coréen-anglais.
- [HyperCLOVA X](https://www.ncloud.com/product/aiService/clovaStudio) - modèle fondamental coréen de Naver.

### Blogs et tutoriels

- [dsindex's blog](https://dsindex.github.io/)
- [Kangwon University's NLP course in Korean](http://cs.kangwon.ac.kr/~leeck/NLP/)

### Jeux de données

- [KAIST Corpus](http://semanticweb.kaist.ac.kr/home/index.php/KAIST_Corpus) - corpus en coréen de l’Institut supérieur coréen des sciences et technologies.
- [Naver Sentiment Movie Corpus in Korean](https://github.com/e9t/nsmc/)
- [Chosun Ilbo archive](http://srchdb1.chosun.com/pdf/i_archive/) - jeu de données en coréen issu d’un grand quotidien sud-coréen.
- [Chat data](https://github.com/songys/Chatbot_data) - données de conversations en coréen.
- [Petitions](https://github.com/akngs/petitions) - données archivées de pétitions du site national de pétitions de la Maison Bleue.
- [Korean Parallel corpora](https://github.com/j-min/korean-parallel-corpora) - jeu de données NMT pour la traduction du coréen vers le français et l’anglais.
- [KorQuAD](https://korquad.github.io/) - jeu de données coréen de type SQuAD (v1.0 et v2.1), avec source HTML de Wikipédia.

</details>

<details>
<summary>

### TAL en persan

</summary>

[Retour en haut](#contents)

### Bibliothèques

- [Hazm](https://github.com/roshan-research/hazm) - boîte à outils de TAL persan.
- [Parsivar](https://github.com/ICTRC/Parsivar) - boîte à outils de traitement du persan.
- [Perke](https://github.com/AlirezaTheH/perke) - extraction de mots-clés en persan.
- [Perstem](https://github.com/jonsafari/perstem) - racineur persan, analyseur morphologique et étiqueteur morphosyntaxique partiel.
- [ParsiAnalyzer](https://github.com/NarimanN2/ParsiAnalyzer) - analyseur persan pour Elasticsearch.
- [virastar](https://github.com/aziz/virastar) - nettoyage de texte persan.

### Modèles

- [ParsBERT](https://github.com/hooshvare/parsbert) - BERT persan.
- [PersianMind](https://huggingface.co/universitytehran/PersianMind-v1.0) (2023-2024) - modèle de langue persan ajusté par instructions.
- [Dorna](https://huggingface.co/PartAI/Dorna-Llama3-8B-Instruct) (Part AI, 2024) - modèle persan suivant des instructions et fondé sur Llama 3.

### Jeux de données

- [Bijankhan Corpus](https://dbrg.ut.ac.ir/بیژن%E2%80%8Cخان/) - corpus étiqueté adapté à la recherche en TAL persan (farsi), comprenant environ 2,6 millions de mots annotés manuellement selon 40 catégories morphosyntaxiques.
- [Uppsala Persian Corpus (UPC)](https://sites.google.com/site/mojganserajicom/home/upc) - grand corpus persan librement accessible, contenant 2,7 millions de tokens annotés selon 31 catégories morphosyntaxiques.
- [Large-Scale Colloquial Persian](http://hdl.handle.net/11234/1-3195) - LSCP : 120 millions de phrases issues de 27 millions de tweets familiers en persan, avec annotations de dépendances, d’étiquetage morphosyntaxique et de sentiments.
- [ArmanPersoNERCorpus](https://github.com/HaniehP/PersianNER) - 250 000 tokens et 7 682 phrases annotées en entités nommées au format IOB.
- [FarsiYar PersianNER](https://github.com/Text-Mining/Persian-NER) - environ 25 millions de tokens et 1 million de phrases persanes issues du [corpus Wikipédia persan](https://github.com/Text-Mining/Persian-Wikipedia-Corpus).
- [PERLEX](http://farsbase.net/PERLEX.html) - premier jeu de données persan d’extraction de relations (traduction de SemEval-2010 Task 8).
- [Persian Syntactic Dependency Treebank](http://dadegan.ir/catalog/perdt) - 29 982 phrases annotées couvrant la plupart des verbes du lexique de valence persan.
- [Uppsala Persian Dependency Treebank (UPDT)](http://stp.lingfil.uu.se/~mojgan/UPDT.html) - corpus annoté en syntaxe, fondé sur les dépendances.
- [Hamshahri](https://dbrg.ut.ac.ir/hamshahri/) - collection de textes persans fiable et de référence, utilisée lors de CLEF 2008-2009.

</details>

<details>
<summary>

### TAL en polonais

</summary>

[Retour en haut](#contents)

- [Polish-NLP](https://github.com/ksopyla/awesome-nlp-polish) - sélection de ressources consacrées au TAL polonais : modèles, outils et jeux de données.

</details>

<details>
<summary>

### TAL en portugais

</summary>

[Retour en haut](#contents)

- [Portuguese-nlp](https://github.com/ajdavidl/Portuguese-NLP) - sélection de ressources et d’outils de TAL portugais.

### Modèles

- [BERTimbau](https://github.com/neuralmind-ai/portuguese-bert) - BERT pour le portugais brésilien.
- [Sabiá](https://huggingface.co/maritaca-ai) (Maritaca AI, 2023-2024) - modèles de langue ouverts axés sur le portugais.
- [Albertina](https://huggingface.co/PORTULAN) (PORTULAN, 2023-2024) - modèles de langue portugais à encodeur seul pour les variantes PT-PT et PT-BR.

</details>

<details>
<summary>

### TAL en espagnol

</summary>

[Retour en haut](#contents)

### Bibliothèques

- [spanlp](https://github.com/jfreddypuentes/spanlp) - bibliothèque Python pour détecter, censurer et nettoyer les grossièretés, discours haineux et actes d’intimidation en espagnol, avec des données de 21 pays hispanophones.

### Données

- [Columbian Political Speeches](https://github.com/dav009/LatinamericanTextResources)
- [Copenhagen Treebank](https://mbkromann.github.io/copenhagen-dependency-treebank/)
- [Spanish Billion Words Corpus with Word2Vec embeddings](https://github.com/crscardellino/sbwce)
- [Compilation of Spanish Unannotated Corpora](https://github.com/josecannete/spanish-unannotated-corpora)

### Modèles et représentations vectorielles

- [BETO](https://github.com/dccuchile/beto) - BERT pour l’espagnol.
- [RoBERTa-bne](https://huggingface.co/PlanTL-GOB-ES/roberta-base-bne) - RoBERTa espagnol entraîné sur le corpus de la Bibliothèque nationale d’Espagne.
- [Latxa](https://github.com/hitz-zentroa/latxa) (2024) - modèle fondamental ouvert pour le basque, couvrant également l’espagnol.
- [Salamandra](https://huggingface.co/BSC-LT/salamandra-7b) (BSC, 2024) - modèle de langue multilingue offrant une forte couverture de l’espagnol, développé au Barcelona Supercomputing Center.
- [RigoChat](https://huggingface.co/IIC/RigoChat-7b-v2) (2024) - modèle ouvert ajusté par instructions en espagnol.
- [Spanish Word Embeddings (multiple methods/corpora)](https://github.com/dccuchile/spanish-word-embeddings)
- [Spanish fastText Embeddings](https://github.com/BotCenter/spanishWordEmbeddings)
- [Spanish sent2vec Sentence Embeddings](https://github.com/BotCenter/spanishSent2Vec)

</details>

<details>
<summary>

### TAL en thaï

</summary>

[Retour en haut](#contents)

### Bibliothèques

- [PyThaiNLP](https://github.com/PyThaiNLP/pythainlp) - TAL thaï en Python.
- [JTCC](https://github.com/wittawatj/jtcc) - bibliothèque Java de regroupement de caractères.
- [CutKum](https://github.com/pucktada/cutkum) - segmentation des mots par apprentissage profond avec TensorFlow.
- [Thai Language Toolkit](https://pypi.python.org/pypi/tltk/) - tokenisation et étiquetage morphosyntaxique.
- [SynThai](https://github.com/KenjiroAI/SynThai) - segmentation des mots et étiquetage morphosyntaxique par apprentissage profond.

### Modèles

- [WangchanBERTa](https://github.com/vistec-AI/thai2transformers) - modèle de langue thaï préentraîné.
- [Typhoon](https://huggingface.co/scb10x) (SCB 10X, 2024) - famille ouverte de grands modèles de langue thaï.
- [OpenThaiGPT](https://huggingface.co/openthaigpt) (2023-2024) - modèles thaïs ouverts ajustés par instructions.
- [Sailor](https://github.com/sail-sg/sailor-llm) - famille ouverte de modèles de langue d’Asie du Sud-Est, couvrant le thaï.

### Données

- [Inter-BEST](https://www.nectec.or.th/corpus/index.php?league=pm) - corpus textuel de 5 millions de mots avec segmentation.
- [Prime Minister 29](https://github.com/PyThaiNLP/lexicon-thai/tree/master/thai-corpus/Prime%20Minister%2029) - jeu de données de discours du Premier ministre actuel de Thaïlande.

</details>

<details>
<summary>

### TAL en ukrainien

</summary>

[Retour en haut](#contents)

- [awesome-ukrainian-nlp](https://github.com/asivokon/awesome-ukrainian-nlp) - sélection de jeux de données, modèles et autres ressources de TAL ukrainien.
- [UkrainianLT](https://github.com/Helsinki-NLP/UkrainianLT) - sélection axée sur la traduction automatique et le traitement de la parole.

</details>

<details>
<summary>

### TAL en ourdou

</summary>

[Retour en haut](#contents)

### Bibliothèques

- [urduhack](https://github.com/urduhack/urduhack) - bibliothèque de TAL pour l’ourdou.

### Jeux de données

- [Collection of Urdu datasets](https://github.com/mirfan899/Urdu) - étiquetage morphosyntaxique, reconnaissance d’entités nommées et autres tâches TAL.

</details>

<details>
<summary>

### TAL en ouzbek

</summary>

[Retour en haut](#contents)

### Jeux de données

- [SOAS English-Uzbek RAG Evaluation](https://github.com/rajantripathi/soas-rag-evaluation) - benchmark bilingue d’évaluation de la recherche d’information pour RAG contextualisé culturellement. 400 lignes, anglais et ouzbek, licences MIT/CC-BY-4.0.

</details>

<details>
<summary>

### TAL en vietnamien

</summary>

[Retour en haut](#contents)

### Bibliothèques

- [underthesea](https://github.com/undertheseanlp/underthesea) - boîte à outils de TAL vietnamien.
- [vn.vitk](https://github.com/phuonglh/vn.vitk) - boîte à outils de traitement de texte vietnamien.
- [VnCoreNLP](https://github.com/vncorenlp/VnCoreNLP) - boîte à outils de TAL vietnamien.
- [pyvi](https://github.com/trungtv/pyvi) - boîte à outils Python de base pour le TAL vietnamien.
- [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - synthèse vocale vietnamienne sur appareil avec clonage de voix.

### Modèles et représentations vectorielles

- [PhoBERT](https://github.com/VinAIResearch/PhoBERT) - modèle de langue vietnamien préentraîné.
- [BARTpho](https://github.com/VinAIResearch/BARTpho) - modèle préentraîné séquence à séquence pour le vietnamien.
- [PhoGPT](https://github.com/VinAIResearch/PhoGPT) (VinAI, 2023-2024) - modèle génératif ouvert de langue vietnamien.
- [Vistral](https://huggingface.co/Viet-Mistral/Vistral-7B-Chat) (2024) - modèle conversationnel vietnamien fondé sur Mistral.
- [Sailor](https://github.com/sail-sg/sailor-llm) (2024) - famille ouverte de modèles de langue multilingues couvrant le vietnamien, le thaï, l’indonésien et d’autres langues d’Asie du Sud-Est.

### Données

- [Vietnamese Treebank](https://vlsp.hpda.vn/demo/?page=resources&lang=en) - 10 000 phrases pour l’analyse des constituants.
- [BKTreeBank](https://arxiv.org/pdf/1710.05519.pdf) - banque d’arbres de dépendances vietnamienne.
- [UD_Vietnamese](https://github.com/UniversalDependencies/UD_Vietnamese-VTB) - banque d’arbres Universal Dependencies en vietnamien.
- [VIVOS](https://ailab.hcmus.edu.vn/vivos/) - corpus vocal vietnamien gratuit, comprenant 15 heures d’enregistrements (HCMUS AILab).
- [VNTQcorpus(big).txt](http://viet.jnlp.org/download-du-lieu-tu-vung-corpus) - 1,75 million de phrases d’actualité.
- [ViText2SQL](https://github.com/VinAIResearch/ViText2SQL) - jeu de données vietnamien d’analyse sémantique de texte vers SQL (EMNLP-2020 Findings).
- [EVB Corpus](https://github.com/qhungngo/EVBCorpus) - 20 millions de mots dans 15 livres bilingues, 100 textes parallèles anglais-vietnamien, 250 textes juridiques parallèles, 5 000 articles d’actualité et 2 000 sous-titres de films.

</details>

### Autres langues

- Russe : [pymorphy2](https://github.com/kmike/pymorphy2) - bon étiqueteur morphosyntaxique pour le russe.
- Langues asiatiques : implémentation ElasticSearch du [tokeniseur ICU](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu-tokenizer.html) pour le thaï, le lao, le chinois, le japonais et le coréen.
- Langues anciennes : [CLTK](https://github.com/cltk/cltk) : la boîte à outils de langues classiques est une bibliothèque Python et une collection de textes permettant le TAL dans les langues anciennes.
- Hébreu : [NLPH_Resources](https://github.com/NLPH/NLPH_Resources) - collection d’articles, de corpus et de ressources linguistiques pour le TAL en hébreu.

[Retour en haut](#contents)

## Voir aussi

Listes thématiques connexes pour les sujets hors du périmètre de ce document :

- [awesome-llm](https://github.com/Hannibal046/Awesome-LLM) - ressources généralistes sur les grands modèles de langue.
- [awesome-generative-ai](https://github.com/steven2358/awesome-generative-ai) - IA générative multimodale.
- [awesome-rag](https://github.com/Danielskry/Awesome-RAG) - systèmes et outils de génération augmentée par la recherche d’information.
- [awesome-prompt-engineering](https://github.com/promptslab/Awesome-Prompt-Engineering) - techniques de requêtage et bibliothèques de modèles de requêtes.
- [awesome-mlops](https://github.com/visenger/awesome-mlops) - apprentissage automatique en production, y compris le service de grands modèles de langue.

## Citation

Si ce dépôt vous est utile, pensez à citer cette liste :

```bibtex
@misc{awesome-nlp,
  title  = {Awesome NLP},
  author = {Kim, Keon Woo},
  year   = {2018},
  url    = {https://github.com/keon/awesome-nlp},
  note   = {GitHub repository}
}
```

## Licence
[Licence](./LICENSE) - CC0.
