# awesome-nlp

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

---

> **Gesponsert von [Atlas Cloud](https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp)**
>
> <a href="https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/atlas-cloud-dark.png"><img src="assets/atlas-cloud-light.png" alt="Atlas Cloud" width="220" /></picture></a>
>
> **KI-API-Aggregationsplattform mit einem OpenAI-kompatiblen LLM-Endpunkt** für NLP-Aufgaben wie Übersetzung, Zusammenfassung, mehrsprachige Generierung und strukturierte Extraktion.

---

Eine kuratierte Sammlung von Ressourcen zur natürlichen Sprachverarbeitung.

_Bitte lies vor einem Beitrag die [Richtlinien für Beiträge](contributing.md). Ergänze deine bevorzugte NLP-Ressource mit einem [Pull Request](https://github.com/keonkim/awesome-nlp/pulls)._

## Umfang

Diese Liste umfasst die Verarbeitung natürlicher Sprache: linguistische Analyse, mehrsprachige Werkzeuge, klassische und neuronale Methoden, Datensätze und Evaluierung. Große Sprachmodelle werden nur aufgenommen, wenn sie eine zentrale NLP-Aufgabe oder -Fähigkeit (Tokenisierung, Mehrsprachigkeit, maschinelle Übersetzung, Zusammenfassung, NER, QA, Faktentreue, Sondierung, Destillation) voranbringen oder bewerten. Allgemeine Chatbots, Agenten-Frameworks, Prompt-Vorlagen-Repositories, Codegenerierungstools und RAG-Anwendungsstarterkits stehen in anderen Listen – siehe [Siehe auch](#see-also).

## Inhalt

* [Forschungsüberblicke und Trends](#research-summaries-and-trends)
* [Führende NLP-Forschungslabore](#prominent-nlp-research-labs)
* [Tutorials](#tutorials)
  * [Lektüre](#reading-content)
  * [Videos und Kurse](#videos-and-online-courses)
  * [Bücher](#books)
* [Bibliotheken](#libraries)
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
* [Dienste](#services)
* [Annotationstools](#annotation-tools)
* [Aufgaben und Methoden](#tasks-and-methods)
  * [Texteinbettungen](#text-embeddings)
  * [Tokenisierung, Morphologie und Segmentierung](#tokenization-morphology-and-segmentation)
  * [POS-Tagging und Dependenzparsing](#pos-tagging-and-dependency-parsing)
  * [Erkennung benannter Entitäten und Informationsextraktion](#named-entity-recognition-and-information-extraction)
  * [Koreferenzauflösung](#coreference-resolution)
  * [Textklassifikation und Sentimentanalyse](#text-classification-and-sentiment-analysis)
  * [Themenmodellierung](#topic-modeling)
  * [Zusammenfassung](#summarization)
  * [Maschinelle Übersetzung](#machine-translation)
  * [Fragebeantwortung und Leseverständnis](#question-answering-and-reading-comprehension)
  * [Informationsextraktion über NER hinaus](#information-extraction-beyond-ner)
  * [Retrieval und Einbettungen](#retrieval-and-embeddings)
  * [Sprache und Text](#speech-and-text)
* [Datensätze](#datasets)
* [Mehrsprachige NLP-Frameworks](#multilingual-nlp-frameworks)
* [Sprachmodelle für NLP](#language-models-for-nlp)
  * [Vortraining und Anpassung](#pretraining-and-adaptation)
  * [Mehrsprachige und sprachübergreifende Modelle](#multilingual-and-cross-lingual-models)
  * [Evaluierung und Benchmarks](#evaluation-and-benchmarks)
  * [Reasoning und Testzeit-Berechnung](#reasoning-and-test-time-compute)
  * [Lange Kontexte und alternative Architekturen](#long-context-and-alternative-architectures)
  * [Faktentreue, Halluzination und Kalibrierung](#factuality-hallucination-calibration)
  * [Sondierung und Interpretierbarkeit](#probing-and-interpretability)
  * [Effiziente und kleine Sprachmodelle](#efficient-and-small-language-models)
  * [Instruktionsabstimmung und Präferenzoptimierung](#instruction-tuning-and-preference-optimization)
  * [Verzerrung, Fairness und Sicherheit in NLP](#bias-fairness-safety-in-nlp)
* [NLP nach Sprache](#nlp-per-language)
  * [NLP auf Arabisch](#nlp-in-arabic)
  * [NLP auf Chinesisch](#nlp-in-chinese)
  * [NLP auf Dänisch](#nlp-in-danish)
  * [NLP auf Niederländisch](#nlp-in-dutch)
  * [NLP auf Deutsch](#nlp-in-german)
  * [NLP auf Ungarisch](#nlp-in-hungarian)
  * [NLP in indischen Sprachen](#nlp-in-indic-languages)
  * [NLP auf Indonesisch](#nlp-in-indonesian)
  * [NLP auf Koreanisch](#nlp-in-korean)
  * [NLP auf Persisch](#nlp-in-persian)
  * [NLP auf Polnisch](#nlp-in-polish)
  * [NLP auf Portugiesisch](#nlp-in-portuguese)
  * [NLP auf Spanisch](#nlp-in-spanish)
  * [NLP auf Thailändisch](#nlp-in-thai)
  * [NLP auf Ukrainisch](#nlp-in-ukrainian)
  * [NLP auf Urdu](#nlp-in-urdu)
  * [NLP auf Usbekisch](#nlp-in-uzbek)
  * [NLP auf Vietnamesisch](#nlp-in-vietnamese)
  * [Weitere Sprachen](#other-languages)
* [Siehe auch](#see-also)
* [Zitierung](#citation)

## Forschungsüberblicke und Trends

Hier findest du aktuelle NLP-Forschung:

* [ACL Anthology](https://aclanthology.org/) - maßgebliches Archiv von Beiträgen aus ACL, EMNLP, NAACL, EACL, COLING und verwandten Konferenzen.
* [NLP-Progress](https://nlpprogress.com/) - verfolgt den Stand der Technik bei gängigen NLP-Aufgaben und Datensätzen.
* [Papers With Code: NLP](https://paperswithcode.com/area/natural-language-processing) - Beiträge, Benchmarks und Ranglisten für NLP-Aufgaben.
* [Sebastian Ruder's newsletter](https://newsletter.ruder.io/) - regelmäßige Zusammenfassungen zu NLP-Forschung und Trends.
* [ACL Rolling Review](https://aclrollingreview.org/) - fortlaufendes Begutachtungsverfahren für ACL-nahe Konferenzen.
* [The Gradient](https://thegradient.pub/) - ausführliche Essays zu ML- und NLP-Forschung.
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp) - illustrierte Zusammenfassungen aktueller Forschungsarbeiten.

### Historische Meilensteine

* [NLP's ImageNet moment has arrived](https://thegradient.pub/nlp-imagenet/) - Essay aus dem Jahr 2018 über den Aufstieg vortrainierter Sprachmodelle.
* [Survey of the State of the Art in Natural Language Generation](https://arxiv.org/abs/1703.09902) - Überblick über NLG aus dem Jahr 2017.
* [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) und [The Illustrated BERT, ELMo, and co.](https://jalammar.github.io/illustrated-bert/) - maßgebliche visuelle Erläuterungen.

## Führende NLP-Forschungslabore
[Zurück nach oben](#contents)

* [The Berkeley NLP Group](http://nlp.cs.berkeley.edu/index.shtml) - Zu den bemerkenswerten Beiträgen zählt ein Werkzeug zur Rekonstruktion längst ausgestorbener Sprachen, auf das [hier](https://www.bbc.com/news/science-environment-21427896) verwiesen wird. Dabei werden Korpora aus 637 heute in Asien und im Pazifik gesprochenen Sprachen genutzt, um ihre Vorläufersprache zu rekonstruieren.
* [Language Technologies Institute, Carnegie Mellon University](http://www.cs.cmu.edu/~nasmith/nlp-cl.html) - Zu den bemerkenswerten Projekten zählt [Avenue Project](http://www.cs.cmu.edu/~avenue/), ein syntaxgesteuertes maschinelles Übersetzungssystem für bedrohte Sprachen wie Quechua und Aymara. Zuvor entwickelte [Noah's Ark](http://www.cs.cmu.edu/~ark/) [AQMAR](http://www.cs.cmu.edu/~ark/AQMAR/), um NLP-Werkzeuge für Arabisch zu verbessern.
* [NLP research group, Columbia University](http://www1.cs.columbia.edu/nlp/index.cgi) - Verantwortlich für die Entwicklung von BOLT (interaktive Fehlerbehandlung für Sprachübersetzungssysteme) und ein unbenanntes Projekt zur Charakterisierung von Lachen in Dialogen.
* [The Center or Language and Speech Processing, John Hopkins University](http://clsp.jhu.edu/) - Kürzlich in den Nachrichten wegen der Entwicklung einer Spracherkennungssoftware zur Erstellung eines diagnostischen Tests für die Parkinson-Krankheit, [hier](https://www.clsp.jhu.edu/2019/03/27/speech-recognition-software-and-machine-learning-tools-are-being-used-to-create-diagnostic-test-for-parkinsons-disease/#.XNFqrIkzYdU).
* [Computational Linguistics and Information Processing Group, University of Maryland](https://wiki.umiacs.umd.edu/clip/index.php/Main_Page) - Zu den bemerkenswerten Beiträgen zählen [Human-Computer Cooperation or Word-by-Word Question Answering](http://www.umiacs.umd.edu/~jbg/projects/IIS-1652666) und die Modellierung der Entwicklung phonetischer Repräsentationen.
* [Penn Natural Language Processing, University of Pennsylvania](https://nlp.cis.upenn.edu/) - Bekannt für die Entwicklung des [Penn Treebank](https://catalog.ldc.upenn.edu/LDC99T42) und des [Penn Discourse Treebank](https://www.cis.upenn.edu/~pdtb/).
* [The Stanford Nautral Language Processing Group](https://nlp.stanford.edu/)- Eines der weltweit führenden NLP-Forschungslabore, bekannt für die Entwicklung von [Stanford CoreNLP](https://nlp.stanford.edu/software/corenlp.shtml) und seinem [Koreferenzauflösungssystem](https://nlp.stanford.edu/software/dcoref.shtml).


## Tutorials
[Zurück nach oben](#contents)

### Lektüre

Allgemeines maschinelles Lernen

* [Machine Learning 101](https://docs.google.com/presentation/d/1kSuQyW5DTnkVaZEjGYCkfOxvzCqGEFzWBy4e9Uedd9k/edit?usp=sharing) erklärt Googles Senior Creative Engineer maschinelles Lernen für Ingenieurinnen und Ingenieure ebenso wie für Führungskräfte.
* [AI Playbook](https://aiplaybook.a16z.com/) - das AI Playbook von a16z eignet sich hervorragend zum Weiterleiten an Führungskräfte oder als Material für Präsentationen.
* [Sebastian Ruder's Newsletter](https://newsletter.ruder.io/) mit Kommentaren zu den besten Beiträgen aus der NLP-Forschung.
* [How To Label Data](https://www.lighttag.io/how-to-label-data/) - Leitfaden zur Verwaltung größerer linguistischer Annotationsprojekte.
* [Depends on the Definition](https://www.depends-on-the-definition.com/) - Sammlung von Blogbeiträgen zu einer großen Bandbreite von NLP-Themen mit ausführlichen Implementierungen.

Einführungen und Leitfäden zu NLP

* [Understand & Implement Natural Language Processing](https://www.analyticsvidhya.com/blog/2017/01/ultimate-guide-to-understand-implement-natural-language-processing-codes-in-python/)
* [NLP in Python](http://github.com/NirantK/nlp-python-deep-learning) - Sammlung von GitHub-Notebooks.
* [Natural Language Processing: An Introduction](https://academic.oup.com/jamia/article/18/5/544/829676) - Oxford.
* [NLP from Scratch with PyTorch](https://pytorch.org/tutorials/intermediate/nlp_from_scratch_index.html)
* [Hands-On NLTK Tutorial](https://github.com/hb20007/hands-on-nltk-tutorial) - NLTK-Tutorials und Jupyter-Notebooks.
* [Natural Language Processing with Python – Analyzing Text with the Natural Language Toolkit](https://www.nltk.org/book/) - Online- und Druckbuch, das NLP-Konzepte anhand von NLTK vorstellt. Die Autorinnen und Autoren des Buchs haben auch die NLTK-Bibliothek geschrieben.
* [Train a new language model from scratch](https://huggingface.co/blog/how-to-train) - von Hugging Face 🤗
* [Advanced NLP with spaCy](https://course.spacy.io/en/) - Kostenloser Onlinekurs zu Textverarbeitung, Datenanalyse im großen Maßstab, Verarbeitungspipelines und dem Training neuronaler Netze für benutzerdefinierte NLP-Aufgaben.
* [Kaggle NLP Learning Guide](https://www.kaggle.com/learn-guide/natural-language-processing) - Einsteigerfreundliche Tutorials mit Einstiegsleitfäden, Deep Learning für NLP und visuellen Erläuterungen von Techniken wie BERT, GloVe und TF-IDF.

Blogs und Newsletter

* [Deep Learning, NLP, and Representations](https://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
* [The Illustrated BERT, ELMo, and co. (How NLP Cracked Transfer Learning)](https://jalammar.github.io/illustrated-bert/) and [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
* [Natural Language Processing](https://nlpers.blogspot.com/) von Hal Daumé III.
* [arXiv: Natural Language Processing (Almost) from Scratch](https://arxiv.org/pdf/1103.0398.pdf)
* [Karpathy's The Unreasonable Effectiveness of Recurrent Neural Networks](https://karpathy.github.io/2015/05/21/rnn-effectiveness)
* [Machine Learning Mastery: Deep Learning for Natural Language Processing](https://machinelearningmastery.com/category/natural-language-processing)
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp)

### Videos und Online-Kurse
[Zurück nach oben](#contents)

* [Advanced Natural Language Processing](https://people.cs.umass.edu/~miyyer/cs685_f20/) - CS 685, Informatik an der UMass Amherst.
* [Deep Natural Language Processing](https://github.com/oxford-cs-deepnlp-2017/lectures) - Vorlesungsreihe aus Oxford.
* [Deep Learning for Natural Language Processing (cs224-n)](https://web.stanford.edu/class/cs224n/) - Stanford-Kurs von Richard Socher und Christopher Manning.
* [Neural Networks for NLP](http://phontron.com/class/nn4nlp2017/) - am Language Technology Institute der Carnegie Mellon University.
* [Deep NLP Course](https://github.com/yandexdataschool/nlp_course) von Yandex Data School mit wichtigen Konzepten von Texteinbettungen bis zur maschinellen Übersetzung, darunter Sequenzmodellierung und Sprachmodelle.
* [fast.ai Code-First Intro to Natural Language Processing](https://www.fast.ai/2019/07/08/fastai-nlp/) - Behandelt eine Mischung aus traditionellen NLP-Themen (einschließlich regulärer Ausdrücke, SVD, Naive Bayes und Tokenisierung) und modernen neuronalen Ansätzen (einschließlich RNNs, Seq2seq, GRUs und dem Transformer) sowie dringende ethische Fragen wie Verzerrungen und Desinformation. Die Jupyter-Notebooks findest du [hier](https://github.com/fastai/course-nlp).
* [Machine Learning University - Accelerated Natural Language Processing](https://www.youtube.com/playlist?list=PL8P_Z6C4GcuWfAq8Pt6PBYlck4OprHXsw) - Die Vorlesungen reichen von einer Einführung in NLP und Textverarbeitung bis zu rekurrenten neuronalen Netzen und Transformern.
Material findest du [hier](https://github.com/aws-samples/aws-machine-learning-university-accelerated-nlp).
* [Applied Natural Language Processing](https://www.youtube.com/playlist?list=PLH-xYrxjfO2WyR3pOAB006CYMhNt4wTqp)- Vorlesungsreihe des IIT Madras, die von den Grundlagen bis hin zu Autoencodern und weiteren Themen reicht. Die GitHub-Notebooks zum Kurs findest du ebenfalls [hier](https://github.com/Ramaseshanr/anlp).
* [DeepLearning.AI Natural Language Processing Specialization](https://www.deeplearning.ai/courses/natural-language-processing-specialization/) - Vier Kurse zu Sentimentanalyse, Worteinbettungen, RNNs, LSTMs, Aufmerksamkeitsmechanismen und Transformermodellen wie BERT und T5 für Aufgaben wie maschinelle Übersetzung und Zusammenfassung.
* [Stanford CS336: Language Modeling from Scratch](https://stanford-cs336.github.io/) - durchgängiger Kurs zur Entwicklung von Sprachmodellen einschließlich Daten, Tokenisierung, Training und Evaluierung.
* [Stanford CS25: Transformers United](https://web.stanford.edu/class/cs25/) - Seminarreihe mit Gastvorträgen von Autorinnen und Autoren aktueller Transformer- und NLP-Forschung.
* [Cohere LLM University](https://cohere.com/llmu) - kostenloser Kurs zu LLMs, Einbettungen, semantischer Suche und NLP-Anwendungen.
* [Hugging Face NLP Course](https://huggingface.co/learn/nlp-course) - praxisorientiertes NLP mit den Bibliotheken Transformers, Datasets und Tokenizers.
* [NLP Demystified](https://www.nlpdemystified.org/) - kostenloser, einsteigerfreundlicher Kurs zu NLP-Grundlagen bis hin zu Transformern, mit Python-/Jupyter-Notebooks.


### Bücher

* [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) - kostenlos, von Prof. Dan Jurafsky.
* [Natural Language Processing](https://github.com/jacobeisenstein/gt-nlp-class) - kostenlose NLP-Aufzeichnungen von Dr. Jacob Eisenstein am Georgia Institute of Technology.
* [NLP with PyTorch](https://github.com/joosthub/PyTorchNLPBook) - Brian & Delip Rao.
* [Text Mining in R](https://www.tidytextmining.com)
* [Natural Language Processing with Python](https://www.nltk.org/book/)
* [Practical Natural Language Processing](https://www.oreilly.com/library/view/practical-natural-language/9781492054047/)
* [Natural Language Processing with Spark NLP](https://www.oreilly.com/library/view/natural-language-processing/9781492047759/)
* [Deep Learning for Natural Language Processing](https://www.manning.com/books/deep-learning-for-natural-language-processing) von Stephan Raaijmakers.
* [Real-World Natural Language Processing](https://www.manning.com/books/real-world-natural-language-processing) - von Masato Hagiwara.
* [Natural Language Processing in Action, Second Edition](https://www.manning.com/books/natural-language-processing-in-action-second-edition) - von Hobson Lane und Maria Dyshel.
* [Transformers in Action](https://www.manning.com/books/transformers-in-action) - von Nicole Koenigstein.
* [The Math Behind Artificial Intelligence](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book) - von Tiago Monteiro | Ein kostenloses FreeCodeCamp-Buch, das die Mathematik hinter KI in verständlicher Sprache aus technischer Perspektive erklärt. Es behandelt lineare Algebra, Analysis, Wahrscheinlichkeit und Statistik sowie Optimierungstheorie anhand von Analogien, Anwendungen aus dem Alltag und Python-Codebeispielen.
  
## Bibliotheken

[Zurück nach oben](#contents)

* <a id="node-js">**Node.js und JavaScript** - Node.js-Bibliotheken für NLP</a> | [Zurück nach oben](#contents)
  * [Twitter-text](https://github.com/twitter/twitter-text) - JavaScript-Implementierung der Textverarbeitungsbibliothek von Twitter.
  * [Knwl.js](https://github.com/benhmoore/Knwl.js) - Sprachprozessor für JavaScript.
  * [Retext](https://github.com/retextjs/retext) - Erweiterbares System zur Analyse und Verarbeitung natürlicher Sprache.
  * [NLP Compromise](https://github.com/spencermountain/compromise) - Verarbeitung natürlicher Sprache im Browser.
  * [Natural](https://github.com/NaturalNode/natural) - allgemeine Funktionen zur Verarbeitung natürlicher Sprache für Node.js.
  * [Poplar](https://github.com/synyi/poplar) - webbasiertes Annotationswerkzeug für die Verarbeitung natürlicher Sprache (NLP).
  * [NLP.js](https://github.com/axa-group/nlp.js) - NLP-Bibliothek zur Entwicklung von Bots.
  * [node-question-answering](https://github.com/huggingface/node-question-answering) - schnelle, produktionsreife Fragebeantwortung mit DistilBERT in Node.js.

* <a id="python"> **Python** - Python-NLP-Bibliotheken</a> | [Zurück nach oben](#contents)
  - [sentimental-onix](https://github.com/sloev/sentimental-onix) Sentimentmodelle für spaCy mit ONNX.
  - [TextAttack](https://github.com/QData/TextAttack) - Adversarielle Angriffe, adversariales Training und Datenerweiterung in NLP.
  - [TextBlob](http://textblob.readthedocs.org/) - Bietet eine einheitliche API für gängige Aufgaben der Verarbeitung natürlicher Sprache (NLP). Baut auf den großen Leistungen von [Natural Language Toolkit (NLTK)](https://www.nltk.org/) und [Pattern](https://github.com/clips/pattern) auf und lässt sich gut mit beiden einsetzen :+1:
  - [spaCy](https://github.com/explosion/spaCy) - NLP in Industriequalität mit Python und Cython :+1:
    - [textacy](https://github.com/chartbeat-labs/textacy) - höherstufiges NLP auf Basis von spaCy.
  - [gensim](https://radimrehurek.com/gensim/index.html) - Python-Bibliothek für unüberwachtes semantisches Modellieren anhand von Klartext :+1:
  - [scattertext](https://github.com/JasonKessler/scattertext) - Python-Bibliothek zur Erstellung von d3-Visualisierungen, die Sprachunterschiede zwischen Korpora zeigen.
  - [GluonNLP](https://github.com/dmlc/gluon-nlp) *(archiviert)* - Deep-Learning-Toolkit für NLP auf Basis von MXNet/Gluon.
  - [AllenNLP](https://github.com/allenai/allennlp) *(archiviert)* - NLP-Forschungsbibliothek auf Basis von PyTorch zur Entwicklung modernster Deep-Learning-Modelle für zahlreiche linguistische Aufgaben.
  - [PyTorch-NLP](https://github.com/PetrochukM/PyTorch-NLP) - NLP-Forschungs-Toolkit für schnelles Prototyping mit verbesserten Daten- und Wortvektorladern, Darstellungen neuronaler Netzwerkschichten und gängigen NLP-Metriken wie BLEU.
  - [Rosetta](https://github.com/columbia-applied-data-science/rosetta) - Werkzeuge und Wrapper zur Textverarbeitung (z. B. Vowpal Wabbit).
  - [PyNLPl](https://github.com/proycon/pynlpl) - Python-Bibliothek für die Verarbeitung natürlicher Sprache. Allgemeine NLP-Bibliothek für Python, die bestimmte Formate wie ARPA-Sprachmodelle, Moses-Phrasentabellen und GIZA++-Ausrichtungen verarbeitet.
  - [foliapy](https://github.com/proycon/foliapy) - Python-Bibliothek für die Arbeit mit [FoLiA](https://proycon.github.io/folia/), einem XML-Format für linguistische Annotationen.
  - [PySS3](https://github.com/sergioburdisso/pyss3) - Python-Paket mit dem White-Box-Textklassifikator SS3 und interaktiven Visualisierungswerkzeugen zur Erklärung von Vorhersagen.
  - [jPTDP](https://github.com/datquocnguyen/jPTDP) - Toolkit für gemeinsames Part-of-Speech-Tagging (POS) und Dependenzparsing. jPTDP bietet vortrainierte Modelle für mehr als 40 Sprachen.
  - [BigARTM](https://github.com/bigartm/bigartm) - schnelle Bibliothek zur Themenmodellierung.
  - [Snips NLU](https://github.com/snipsco/snips-nlu) - produktionsreife Bibliothek zur Absichtserkennung.
  - [Chazutsu](https://github.com/chakki-works/chazutsu) - Bibliothek zum Herunterladen und Parsen gängiger NLP-Forschungsdatensätze.
  - [Word Forms](https://github.com/gutfeeling/word_forms) - erzeugt zuverlässig alle möglichen Formen eines englischen Wortes.
  - [Multilingual Latent Dirichlet Allocation (LDA)](https://github.com/ArtificiAI/Multilingual-Latent-Dirichlet-Allocation-LDA) - mehrsprachige und erweiterbare Pipeline zur Dokumentenclusterung.
  - [Natural Language Toolkit (NLTK)](https://www.nltk.org/) - Bibliothek mit zahlreichen NLP-Funktionen und Unterstützung für mehr als 50 Korpora.
  - [NLP Architect](https://github.com/NervanaSystems/nlp-architect) - Bibliothek zur Erkundung modernster Deep-Learning-Architekturen und -Techniken für NLP und NLU.
  - [Flair](https://github.com/zalandoresearch/flair) - einfaches, auf PyTorch aufbauendes Framework für mehrsprachiges NLP auf dem neuesten Stand der Technik. Enthält BERT-, ELMo- und Flair-Einbettungen.
  - [Kashgari](https://github.com/BrikerMan/Kashgari) - einfaches, Keras-basiertes mehrsprachiges NLP-Framework, mit dem sich Modelle für Erkennung benannter Entitäten (NER), Part-of-Speech-Tagging (PoS) und Textklassifikation in fünf Minuten erstellen lassen. Enthält BERT- und word2vec-Einbettungen.
  - [FARM](https://github.com/deepset-ai/FARM) - schnelles und einfaches Transferlernen für NLP. Sprachmodelle für den industriellen Einsatz; Schwerpunkt Fragebeantwortung.
  - [Haystack](https://github.com/deepset-ai/haystack) - durchgängiges Python-Framework zum Erstellen von Suchoberflächen für Daten in natürlicher Sprache. Nutzt Transformers und den neuesten Stand der NLP-Forschung. Unterstützt DPR, Elasticsearch, HuggingFace Model Hub und vieles mehr.
  - [Rita DSL](https://github.com/zaibacu/rita-dsl) - DSL, die lose auf [RUTA in Apache UIMA](https://uima.apache.org/ruta.html) basiert. Ermöglicht die Definition von Sprachmustern (regelbasiertes NLP), die anschließend in [spaCy](https://spacy.io/) oder, wenn weniger Funktionen und eine schlanke Lösung bevorzugt werden, in reguläre Ausdrücke übersetzt werden.
  - [Transformers](https://github.com/huggingface/transformers) - Verarbeitung natürlicher Sprache mit TensorFlow 2.0 und PyTorch.
  - [Tokenizers](https://github.com/huggingface/tokenizers) - für Forschung und Produktion optimierte Tokenizer.
  - [fairSeq](https://github.com/pytorch/fairseq) Implementierungen moderner Seq2seq-Modelle von Facebook AI Research in PyTorch.
  - [corex_topic](https://github.com/gregversteeg/corex_topic) - hierarchische Themenmodellierung mit minimalem Domänenwissen.
  - [Sockeye](https://github.com/awslabs/sockeye) - Toolkit für neuronale maschinelle Übersetzung (NMT), das Amazon Translate antreibt.
  - [DL Translate](https://github.com/xhlulu/dl-translate) - Deep-Learning-basierte Übersetzungsbibliothek für 50 Sprachen auf Basis von `transformers` und Facebooks mBART Large.
  - [Jury](https://github.com/obss/jury) - Evaluierung von NLP-Modellausgaben mit verschiedenen automatisierten Metriken.
  - [python-ucto](https://github.com/proycon/python-ucto) - Unicode-fähiger, auf regulären Ausdrücken basierender Tokenizer für verschiedene Sprachen. Python-Bindung an eine C++-Bibliothek mit Unterstützung des [FoLiA-Formats](https://proycon.github.io/folia).
  - [Pearmut](https://github.com/zouharvi/pearmut) - Werkzeug für menschliche Annotationen bei mehrsprachigen NLP-Aufgaben wie der maschinellen Übersetzung.
  - [Stanza](https://github.com/stanfordnlp/stanza) - Python-Toolkit von Stanford NLP für Tokenisierung, POS-Tagging, Lemmatisierung, Dependenzparsing und NER in mehr als 70 Sprachen.
  - [Sentence-Transformers](https://github.com/UKPLab/sentence-transformers) - Satz- und Dokumenteinbettungen, semantische Suche und Neurangierung; heutiger Standard für Retrieval-basiertes NLP.
  - [Argilla](https://github.com/argilla-io/argilla) - Open-Source-Plattform zum Sammeln menschlichen Feedbacks, Erstellen von NLP- und LLM-Datensätzen sowie Kuratieren von Präferenzdaten.
  - [HuggingFace Datasets](https://github.com/huggingface/datasets) - standardisierte Loader und Verarbeitung für Tausende NLP-Datensätze.
  - [HuggingFace Evaluate](https://github.com/huggingface/evaluate) - Referenzimplementierungen für NLP-Metriken.
  - [sacrebleu](https://github.com/mjpost/sacrebleu) - reproduzierbare BLEU-/chrF-/TER-Bewertung für maschinelle Übersetzung.
  - [COMET](https://github.com/Unbabel/COMET) - erlernte Metriken für maschinelle Übersetzung, heute De-facto-Standard.
  - [LangTest](https://github.com/JohnSnowLabs/langtest) - mehr als 60 Testarten für Robustheit, Verzerrungen und Fairness von NLP-Modellen.
   - [yasbd-lib](https://github.com/speedyk-005/yasbd-lib) - hochpräziser, regelbasierter Satzgrenzendetektor (SBD). Drop-in-Adapter für pysbd, Streaming-APIs, CLI und spaCy-Komponente für mehr als 39 Sprachen.

- <a id="c++">**C++** - C++-Bibliotheken</a> | [Zurück nach oben](#contents)
  - [InsNet](https://github.com/chncwang/InsNet) - Bibliothek für neuronale Netze zur Entwicklung instanzabhängiger NLP-Modelle mit dynamischem Batching ohne Padding.
  - [MIT Information Extraction Toolkit](https://github.com/mit-nlp/MITIE) - C-, C++- und Python-Werkzeuge zur Erkennung benannter Entitäten und zur Relationsextraktion.
  - [CRF++](https://taku910.github.io/crfpp/) - quelloffene Implementierung von Conditional Random Fields (CRFs) zur Segmentierung und Annotation sequenzieller Daten sowie für weitere Aufgaben der Verarbeitung natürlicher Sprache.
  - [CRFsuite](http://www.chokkan.org/software/crfsuite/) - Implementierung von Conditional Random Fields (CRFs) zur Annotation sequenzieller Daten.
  - [BLLIP Parser](https://github.com/BLLIP/bllip-parser) - BLLIP-Parser für natürliche Sprache, auch als Charniak-Johnson-Parser bekannt.
  - [colibri-core](https://github.com/proycon/colibri-core) - C++-Bibliothek, Kommandozeilenwerkzeuge und Python-Bindung zum schnellen und speichereffizienten Extrahieren und Verarbeiten grundlegender linguistischer Konstruktionen wie N-Grammen und Skip-Grammen.
  - [ucto](https://github.com/LanguageMachines/ucto) - Unicode-fähiger, auf regulären Ausdrücken basierender Tokenizer für verschiedene Sprachen. Werkzeug und C++-Bibliothek mit Unterstützung des FoLiA-Formats.
  - [libfolia](https://github.com/LanguageMachines/libfolia) - C++-Bibliothek für das [FoLiA-Format](https://proycon.github.io/folia/).
  - [frog](https://github.com/LanguageMachines/frog) - speichergestützte NLP-Suite für Niederländisch: PoS-Tagger, Lemmatisierer, Dependenzparser, NER, flacher Parser und morphologischer Analysator.
  - [MeTA](https://github.com/meta-toolkit/meta) - ModErn Text Analysis: C++-Toolkit für Datenwissenschaft zur Auswertung großer Textmengen.
  - [Mecab (Japanese)](https://taku910.github.io/mecab/)
  - [Moses](http://statmt.org/moses/)
  - [StarSpace](https://github.com/facebookresearch/StarSpace) - Bibliothek von Facebook zur Erstellung von Wort-, Absatz- und Dokumenteinbettungen sowie zur Textklassifikation.
  - [QSMM](http://qsmm.org) - adaptive probabilistische Top-down- und Bottom-up-Parser.

- <a id="java">**Java** - Java-NLP-Bibliotheken</a> | [Zurück nach oben](#contents)
  - [Stanford NLP](https://nlp.stanford.edu/software/index.shtml)
  - [OpenNLP](https://opennlp.apache.org/)
  - [NLP4J](https://emorynlp.github.io/nlp4j/)
  - [Word2vec in Java](https://deeplearning4j.org/docs/latest/deeplearning4j-nlp-word2vec)
  - [ReVerb](https://github.com/knowitall/reverb/) offene Informationsextraktion im Webmaßstab.
  - [OpenRegex](https://github.com/knowitall/openregex) effiziente und flexible Sprache und Engine für tokenbasierte reguläre Ausdrücke.
  - [CogcompNLP](https://github.com/CogComp/cogcomp-nlp) - Kernbibliotheken der Cognitive Computation Group der University of Illinois.
  - [MALLET](http://mallet.cs.umass.edu/) - MAchine Learning for LanguagE Toolkit: Paket für statistische Verarbeitung natürlicher Sprache, Dokumentklassifikation, Clusterung, Themenmodellierung, Informationsextraktion und weitere Anwendungen des maschinellen Lernens auf Text.
  - [RDRPOSTagger](https://github.com/datquocnguyen/RDRPOSTagger) - robustes POS-Tagging-Toolkit für Java und Python mit vortrainierten Modellen für mehr als 40 Sprachen.

- <a id="kotlin">**Kotlin** - Kotlin-NLP-Bibliotheken</a> | [Zurück nach oben](#contents)
  - [Lingua](https://github.com/pemistahl/lingua/) Bibliothek zur Spracherkennung für Kotlin und Java, geeignet für kurze wie lange Texte.
  - [Kotidgy](https://github.com/meiblorn/kotidgy) — indexbasierter Generator für Textdaten in Kotlin.

- <a id="scala">**Scala** - Scala-NLP-Bibliotheken</a> | [Zurück nach oben](#contents)
  - [Saul](https://github.com/CogComp/saul) - Bibliothek zur Entwicklung von NLP-Systemen mit integrierten Modulen wie SRL und POS.
  - [ATR4S](https://github.com/ispras/atr4s) - Toolkit mit modernen Methoden zur [automatischen Termextraktion](https://en.wikipedia.org/wiki/Terminology_extraction).
  - [tm](https://github.com/ispras/tm) - Implementierung der Themenmodellierung auf Basis regularisierter mehrsprachiger [PLSA](https://en.wikipedia.org/wiki/Probabilistic_latent_semantic_analysis).
  - [word2vec-scala](https://github.com/Refefer/word2vec-scala) - Scala-Schnittstelle für word2vec-Modelle mit Vektoroperationen wie Wortdistanz und Wortanalogie.
  - [Epic](https://github.com/dlwh/epic) - leistungsstarker statistischer Parser in Scala mit einem Framework zum Erstellen komplexer strukturierter Vorhersagemodelle.
  - [Spark NLP](https://github.com/JohnSnowLabs/spark-nlp) - Bibliothek zur Verarbeitung natürlicher Sprache auf Basis von Apache Spark ML, die einfache, performante und präzise NLP-Annotationen für ML-Pipelines bereitstellt, die sich leicht in verteilten Umgebungen skalieren lassen.

- <a id="R">**R** - R-NLP-Bibliotheken</a> | [Zurück nach oben](#contents)
  - [text2vec](https://github.com/dselivanov/text2vec) - schnelle Vektorisierung, Themenmodellierung, Abstandsberechnung und GloVe-Worteinbettungen in R.
  - [wordVectors](https://github.com/bmschmidt/wordVectors) - R-Paket zum Erstellen und Erkunden von word2vec- und anderen Worteinbettungsmodellen.
  - [RMallet](https://github.com/mimno/RMallet) - R-Paket für die Schnittstelle zum Java-ML-Werkzeug MALLET.
  - [dfr-browser](https://github.com/agoldst/dfr-browser) - erstellt d3-Visualisierungen zum Durchsuchen von Themenmodellen für Text in einem Webbrowser.
  - [dfrtopics](https://github.com/agoldst/dfrtopics) - R-Paket zum Erkunden von Themenmodellen für Text.
  - [sentiment_classifier](https://github.com/kevincobain2000/sentiment_classifier) - Sentimentklassifikation mit Wortsinn-Disambiguierung und WordNet-Reader.
  - [jProcessing](https://github.com/kevincobain2000/jProcessing) - Bibliotheken zur Verarbeitung japanischer Sprache mit japanischer Sentimentklassifikation.
  - [corporaexplorer](https://kgjerde.github.io/corporaexplorer/) - R-Paket zur dynamischen Erkundung von Textsammlungen.
  - [tidytext](https://github.com/juliasilge/tidytext) - Text Mining mit tidy-Werkzeugen.
  - [spacyr](https://github.com/quanteda/spacyr) - R-Wrapper für spaCy-NLP.
  - [CRAN Task View: Natural Language Processing](https://github.com/cran-task-views/NaturalLanguageProcessing/)

- <a id="clojure">**Clojure**</a> | [Zurück nach oben](#contents)
  - [Clojure-openNLP](https://github.com/dakrone/clojure-opennlp) - Verarbeitung natürlicher Sprache in Clojure (opennlp).
  - [Infections-clj](https://github.com/r0man/inflections-clj) - Rails-ähnliche Bibliothek zur Flexion für Clojure und ClojureScript.
  - [postagga](https://github.com/fekr/postagga) - Bibliothek zum Parsen natürlicher Sprache in Clojure und ClojureScript.

- <a id="go">**Go**</a> | [Zurück nach oben](#contents)
  - [prose](https://github.com/jdkato/prose) - Textverarbeitungsbibliothek mit Tokenisierung, Part-of-Speech-Tagging und Erkennung benannter Entitäten.
  - [gojieba](https://github.com/yanyiwu/gojieba) - Go-Implementierung des chinesischen Wortsegmentierungsalgorithmus jieba.
  - [kagome](https://github.com/ikawaha/kagome) - morphologischer Analysator für Japanisch, vollständig in Go geschrieben.
  - [go-propisyu](https://github.com/rekurt/go-propisyu) - wandelt Zahlen unter Berücksichtigung des grammatischen Geschlechts und der Deklination von Substantiven in russische Wörter um.

- <a id="ruby">**Ruby**</a> | [Zurück nach oben](#contents)
  - Kevin Dias' [A collection of Natural Language Processing (NLP) Ruby libraries, tools and software](https://github.com/diasks2/ruby-nlp).
  - [Practical Natural Language Processing done in Ruby](https://github.com/arbox/nlp-with-ruby).

- <a id="rust">**Rust**</a> | [Zurück nach oben](#contents)
  - [whatlang](https://github.com/greyblake/whatlang-rs) — Bibliothek zur Spracherkennung auf Basis von Trigrammen.
  - [rust-bert](https://github.com/guillaume-be/rust-bert) - sofort einsetzbare NLP-Pipelines und Transformer-basierte Modelle.
  - [snips-nlu-rs](https://github.com/snipsco/snips-nlu-rs) *(archiviert — Snips wurde eingestellt)* - produktionsreife Bibliothek zur Absichtserkennung.

- <a id="NLP++">**NLP++** - NLP++-Sprache</a> | [Zurück nach oben](#contents)
  - [VSCode Language Extension](https://marketplace.visualstudio.com/items?itemName=dehilster.nlp) - NLP++-Spracherweiterung für VSCode.
  - [nlp-engine](https://github.com/VisualText/nlp-engine) - NLP++-Engine zum Ausführen von NLP++-Code unter Linux, einschließlich eines vollständigen englischen Parsers.
  - [VisualText](http://visualtext.org) - Homepage der NLP++-Sprache.
  - [NLP++ Wiki](http://wiki.naturalphilosophy.org/index.php?title=NLP%2B%2B) - Wiki-Eintrag zur NLP++-Sprache.

- <a id="julia">**Julia**</a> | [Zurück nach oben](#contents)
  - [CorpusLoaders](https://github.com/JuliaText/CorpusLoaders.jl) - verschiedene Loader für unterschiedliche NLP-Korpora.
  - [Languages](https://github.com/JuliaText/Languages.jl) - Paket für die Arbeit mit menschlichen Sprachen.
  - [TextAnalysis](https://github.com/JuliaText/TextAnalysis.jl) - Julia-Paket zur Textanalyse.
  - [TextModels](https://github.com/JuliaText/TextModels.jl) - auf neuronalen Netzen basierende Modelle zur Verarbeitung natürlicher Sprache.
  - [WordTokenizers](https://github.com/JuliaText/WordTokenizers.jl) - leistungsstarke Tokenizer für die Verarbeitung natürlicher Sprache und verwandte Aufgaben.
  - [Word2Vec](https://github.com/JuliaText/Word2Vec.jl) - Julia-Schnittstelle zu word2vec.

### Dienste

NLP als API mit höherstufigen Funktionen wie NER, Themenzuordnung und mehr | [Zurück nach oben](#contents)

- [Wit-ai](https://github.com/wit-ai/wit) - Schnittstelle in natürlicher Sprache für Apps und Geräte.
- [IBM Watson's Natural Language Understanding](https://github.com/watson-developer-cloud/natural-language-understanding-nodejs) - API und GitHub-Demo.
- [Amazon Comprehend](https://aws.amazon.com/comprehend/) - NLP- und ML-Suite für die meisten gängigen Aufgaben wie NER, Tagging und Sentimentanalyse.
- [Google Cloud Natural Language API](https://cloud.google.com/natural-language/) - Syntaxanalyse, NER, Sentimentanalyse und Inhalts-Tagging in mindestens neun Sprachen, darunter Englisch und Chinesisch (vereinfacht und traditionell).
- [ParallelDots](https://www.paralleldots.com/text-analysis-apis) - umfangreicher Textanalyse-API-Dienst von Sentimentanalyse bis Absichtsanalyse.
- [Microsoft Cognitive Service](https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics/)
- [TextRazor](https://www.textrazor.com/)
- [Rosette](https://www.rosette.com/)
- [Textalytic](https://www.textalytic.com) - Verarbeitung natürlicher Sprache im Browser mit Sentimentanalyse, Erkennung benannter Entitäten, POS-Tagging, Worthäufigkeiten, Themenmodellierung, Wortwolken und mehr.
- [NLP Cloud](https://nlpcloud.io) - spaCy-NLP-Modelle (benutzerdefiniert und vortrainiert) über eine RESTful-API für die Erkennung benannter Entitäten (NER), POS-Tagging und weitere Aufgaben.
- [Cloudmersive](https://cloudmersive.com/nlp-api) - einheitliche und kostenlose NLP-APIs für Aufgaben wie Sprach-Tagging, Umformulieren von Texten, Übersetzen und Erkennen von Sprachen sowie Satzparsing.

### Annotationstools

- [GATE](https://gate.ac.uk/overview.html) - General Architecture and Text Engineering ist mehr als 15 Jahre alt, kostenlos und quelloffen.
- [Anafora](https://github.com/weitechen/anafora) ist ein kostenloses, quelloffenes, webbasiertes Werkzeug zur Annotation von Rohtexten.
- [brat](https://brat.nlplab.org/) - brat rapid annotation tool ist eine Online-Umgebung für kollaborative Textannotation.
- [doccano](https://github.com/chakki-works/doccano) - doccano ist kostenlos und quelloffen und bietet Annotationsfunktionen für Textklassifikation, Sequenzlabeling und Sequenz-zu-Sequenz-Aufgaben.
- [INCEpTION](https://inception-project.github.io) - Plattform für semantische Annotation mit intelligenter Assistenz und Wissensmanagement.
- [prodigy](https://prodi.gy/) ist ein durch aktives Lernen unterstütztes Annotationswerkzeug und kostenpflichtig.
- [LightTag](https://lighttag.io) - gehostetes und verwaltetes Textannotationswerkzeug für Teams, kostenpflichtig.
- [rstWeb](https://corpling.uis.georgetown.edu/rstweb/info/) - quelloffenes lokales oder Online-Werkzeug zur Annotation von Diskursbäumen.
- [GitDox](https://corpling.uis.georgetown.edu/gitdox/) - quelloffenes serverbasiertes Annotationswerkzeug mit GitHub-Versionskontrolle und Validierung für XML-Daten sowie kollaborative Tabellengitter.
- [Datasaur](https://datasaur.ai/) unterstützt verschiedene NLP-Aufgaben für Einzelpersonen und Teams und bietet ein Freemium-Modell.
- [Konfuzio](https://konfuzio.com/en/) - teamorientiertes gehostetes und lokal betreibbares Annotationswerkzeug für Text, Bilder und PDFs mit aktivem Lernen; Freemium-Modell, kostenpflichtig.
- [UBIAI](https://ubiai.tools/) - benutzerfreundliches Textannotationswerkzeug für Teams mit umfassenden Funktionen zur automatischen Annotation. Unterstützt NER, Relationen und Dokumentklassifikation sowie OCR-Annotation zur Rechnungskennzeichnung; kostenpflichtig.
- [Shoonya](https://github.com/AI4Bharat/Shoonya-Backend) - kostenlose und quelloffene Datenannotationsplattform mit vielfältiger Verwaltung auf Organisations- und Arbeitsbereichsebene. Shoonya ist datenunabhängig und ermöglicht Teams, Daten in großem Maßstab mit verschiedenen Verifizierungsstufen zu annotieren.
- [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) - kostenlose, durchgängige No-Code-Plattform für Textannotation und Training/Feinabstimmung von DL-Modellen. Unterstützt standardmäßig Spark-NLP-Modelle zur Erkennung benannter Entitäten, Klassifikation, Relationsextraktion und Assertion-Status. Unbegrenzte Unterstützung für Nutzer, Teams, Projekte und Dokumente. Keine FOSS-Software.
- [FLAT](https://github.com/proycon/flat) - FLAT ist eine webbasierte linguistische Annotationsumgebung auf Basis des [FoLiA-Formats](http://proycon.github.io/folia), eines umfangreichen XML-Formats für linguistische Annotationen. Kostenlos und quelloffen.
- [Argilla](https://github.com/argilla-io/argilla) - quelloffene Plattform zum Sammeln menschlichen Feedbacks, Erstellen von NLP- und LLM-Datensätzen sowie Kuratieren von Präferenzdaten.
- [Label Studio](https://github.com/HumanSignal/label-studio) - Open-Core-Plattform zur multimodalen Kennzeichnung, häufig für NLP-Annotationen eingesetzt.
- [Potato](https://github.com/davidjurgens/potato) - kostenloses, quelloffenes Annotationswerkzeug für mehr als 21 Aufgabentypen (Klassifikation, Spans, Koreferenz, Entity Linking, Agenten-Trace-Evaluierung) mit integrierter MACE-Qualitätskontrolle, Aufmerksamkeitsprüfungen, KI-gestützter Kennzeichnung und mehr als 300 Beispielaufgaben.


## Aufgaben und Methoden

NLP-Aufgaben sind nach linguistischen Problemen geordnet. Jeder Unterabschnitt führt zuerst grundlegende und klassische Arbeiten auf, dann neuronale Ansätze und, wo relevant, LLM-basierte Methoden. Moderne Sprachmodellforschung (Vortraining, Evaluierung, Retrieval, Reasoning usw.) findest du unter [Sprachmodelle für NLP](#language-models-for-nlp).

### Texteinbettungen

[Zurück nach oben](#contents)

Statische Worteinbettungen (Grundlagen):

- [word2vec](https://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf) - [Implementierung](https://code.google.com/archive/p/word2vec/) - [erläuternder Blogbeitrag](http://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
- [GloVe](https://nlp.stanford.edu/pubs/glove.pdf) - [erläuternder Blogbeitrag](https://blog.acolyer.org/2016/04/22/glove-global-vectors-for-word-representation/)
- [fastText](https://arxiv.org/abs/1607.04606) - [Implementierung](https://github.com/facebookresearch/fastText); Subword-N-Gramme verarbeiten OOV-Wörter gut und sind weiterhin für ressourcenarme Sprachen nützlich.
- [sense2vec](https://arxiv.org/abs/1511.06388) - Wortsinn-Disambiguierung.
- [Paragraph Vectors / doc2vec](https://cs.stanford.edu/~quocle/paragraph_vector.pdf)

Kontextuelle Einbettungen:

- [ELMo](https://arxiv.org/abs/1802.05365) - tief kontextualisierte Wortrepräsentationen.
- [CoVe](https://arxiv.org/abs/1708.00107) - aus maschineller Übersetzung erlernte kontextualisierte Vektoren.
- [ULMFiT](https://arxiv.org/abs/1801.06146) - Feinabstimmung von Sprachmodellen für Textklassifikation.
- [InferSent](https://arxiv.org/abs/1705.02364) - Satzrepräsentationen aus NLI.

Moderne Satz- und Dokumenteinbettungen: siehe [Retrieval für NLP](#retrieval-for-nlp) (Sentence-Transformers, E5, BGE-M3, Nomic, GritLM) sowie [MTEB](https://github.com/embeddings-benchmark/mteb) für aktuelle Ranglisten.

### Tokenisierung, Morphologie und Segmentierung

[Zurück nach oben](#contents)

- [SentencePiece](https://github.com/google/sentencepiece) - sprachunabhängige Subword-Tokenisierung.
- [BPE](https://arxiv.org/abs/1508.07909) und [Unigram LM](https://arxiv.org/abs/1804.10959) - die beiden vorherrschenden Subword-Verfahren.
- [Stanza](https://github.com/stanfordnlp/stanza) - Tokenisierung, Lemmatisierung und Morphologie für mehr als 70 Sprachen.
- [UDPipe](https://github.com/ufal/udpipe) - Tokenisierung, Tagging, Lemmatisierung und Parsing für Universal Dependencies.
- [Morfessor](https://github.com/aalto-speech/morfessor) - unüberwachte morphologische Segmentierung.
Tokenisierungsforschung und -architekturen (siehe auch [Sprachmodelle](#language-models-for-nlp)):

- [Byte-Pair Encoding (Sennrich et al.)](https://arxiv.org/abs/1508.07909) - Subword-Einheiten für neuronale maschinelle Übersetzung; Grundlage moderner Tokenizer.
- [SentencePiece](https://github.com/google/sentencepiece) - sprachunabhängige Subword-Tokenisierung (BPE und Unigram).
- [Tokenizers](https://github.com/huggingface/tokenizers) - schnelle Rust-Implementierungen von BPE, WordPiece und Unigram.
- [ByT5](https://arxiv.org/abs/2105.13626) - Modell auf Byte-Ebene ohne Tokenizer.
- [CANINE](https://arxiv.org/abs/2103.06874) - Tokenisierungs-freier Encoder, der mit Unicode-Zeichen arbeitet.
- [How Good is Your Tokenizer?](https://arxiv.org/abs/2012.15613) - Fairness von Tokenizern über verschiedene Sprachen hinweg.
- [Byte Latent Transformer (BLT)](https://arxiv.org/abs/2412.09871) (Meta, 2024) - dynamisches Patching auf Byte-Ebene, das bei großem Maßstab mit BPE-tokenisierten Modellen mithält und den tokenizerfreien Ansatz wiederbelebt.
- [SuperBPE](https://arxiv.org/abs/2503.13423) (2025) - Superwort-Tokenisierung, die BPE bei nachgelagerten Aufgaben übertrifft.
- [Over-Tokenized Transformer](https://arxiv.org/abs/2501.16975) (ICML 2025) - entkoppelt Eingabe- und Ausgabevokabulare und zeigt einen logarithmisch-linearen Zusammenhang zwischen Eingabevokabulargröße und Trainingsverlust; das Vokabular lässt sich unabhängig von der Modellgröße skalieren.
- [Foundations of Tokenization](https://arxiv.org/abs/2407.11606) (ICLR 2025) - erster formaler, einheitlicher Rahmen für Tokenizermodelle mithilfe der Kategorientheorie stochastischer Abbildungen; legt Bedingungen für statistische Konsistenz fest.
- [The Token Tax: Systematic Bias in Multilingual Tokenization](https://arxiv.org/abs/2509.05486) (2025) - quantifiziert, wie die Tokenisierungsfülle die Modellgenauigkeit über Sprachen hinweg vorhersagt, und zeigt strukturelle Kostennachteile für morphologisch komplexe und ressourcenarme Sprachen auf.
- [Reducing Tokenization Premiums for Low-Resource Languages](https://arxiv.org/abs/2601.13328) (2026) - nachträgliche Ergänzungen des Vokabulars fassen mehrtokenige Zeichenfolgen für ressourcenarme Sprachen zusammen und senken die Inferenzkosten ohne erneutes Training.

### POS-Tagging und Dependenzparsing

[Zurück nach oben](#contents)

- [Universal Dependencies](https://universaldependencies.org/) - sprachübergreifend konsistente Baumbanken für mehr als 100 Sprachen.
- [spaCy](https://spacy.io/) und [Stanza](https://github.com/stanfordnlp/stanza) - produktionsreife Parser für zahlreiche Sprachen.
- [Deep Biaffine Attention for Neural Dependency Parsing](https://arxiv.org/abs/1611.01734) - grundlegende neuronale Parsing-Architektur.
- [Trankit](https://github.com/nlp-uoregon/trankit) - leichtgewichtiges Transformer-basiertes mehrsprachiges NLP-Toolkit.
- [Self-Attentive Constituency Parsing (Kitaev & Klein)](https://arxiv.org/abs/1805.01052) - leistungsstarker neuronaler Konstituentenparser.

### Erkennung benannter Entitäten und Informationsextraktion

[Zurück nach oben](#contents)

Grundlagen und neuronale Ansätze:

- [CoNLL-2003 NER](https://www.aclweb.org/anthology/W03-0419/) - maßgeblicher englischer NER-Benchmark.
- [Neural Architectures for NER (Lample et al.)](https://arxiv.org/abs/1603.01360) - BiLSTM-CRF, lange Zeit die Standardarchitektur für NER.
- [Flair](https://github.com/flairNLP/flair) - kontextuelle String-Einbettungen und leistungsstarkes NER für verschiedene Sprachen.
- [spaCy NER](https://spacy.io/usage/linguistic-features#named-entities) - produktionsreif.

Offene und instruktionsfolgende Informationsextraktion:

- [Universal NER](https://arxiv.org/abs/2308.03279) - instruktionsabgestimmtes Sprachmodell für offenes NER über mehrere Sprachen hinweg.
- [GLiNER](https://arxiv.org/abs/2311.08526) (2023) - kleines, vielseitiges NER-Modell, das zur Inferenz beliebige Entitätstypen verarbeiten kann.
- [GoLLIE](https://arxiv.org/abs/2310.03668) - an Richtlinien orientierte Informationsextraktion mit Sprachmodellen.
- [REBEL](https://github.com/Babelscape/rebel) - durchgängige Relationsextraktion als Seq2seq-Aufgabe.

LLM-basiert:

- [GPT-NER](https://arxiv.org/abs/2304.10428) - LLMs zur Erkennung benannter Entitäten.
- [Can LLMs Replace Sentence-Level NER?](https://arxiv.org/abs/2402.10573) (2024) - Abwägung zwischen Kosten und Qualität.
- [Generative NER in the Era of LLMs](https://arxiv.org/abs/2601.17898) (2026) - acht offene LLMs auf vier NER-Benchmarks; PEFT mit strukturierten Ausgaben erreicht das Niveau encoderbasierter NER-Modelle.

### Koreferenzauflösung

[Zurück nach oben](#contents)

- [End-to-End Neural Coreference (Lee et al.)](https://arxiv.org/abs/1707.07045) - Grundlage moderner neuronaler Koreferenzauflösung.
- [SpanBERT](https://arxiv.org/abs/1907.10529) - spanbasiertes Vortraining; starke Baseline für Koreferenzauflösung.
- [coref-hoi](https://github.com/lxucs/coref-hoi) - Koreferenzauflösung mit Inferenz höherer Ordnung.
- [maverick-coref](https://github.com/SapienzaNLP/maverick-coref) (2024) - effiziente Koreferenzauflösung auf dem Niveau der besten größeren Systeme.
- [LingMess](https://arxiv.org/abs/2205.12644) - linguistisch motivierte kategorienbasierte Koreferenzbewertung.
LLM-basiert:

- [LLMs for Coreference Resolution](https://arxiv.org/abs/2310.05884) - Prompting und Feinabstimmung für Koreferenzauflösung.
- [Multilingual Coreference Shared Task: Can LLMs Dethrone Traditional Approaches?](https://arxiv.org/abs/2509.17796) (2025) - neun Systeme mit vier LLM-basierten und fünf traditionellen Ansätzen; traditionelle Methoden liegen weiterhin vorn, doch LLMs schließen die Lücke.

### Textklassifikation und Sentimentanalyse

[Zurück nach oben](#contents)

- [fastText classifier](https://arxiv.org/abs/1607.01759) - starke, schnelle lineare Baseline.
- [Sentiment Treebank (SST)](https://nlp.stanford.edu/sentiment/) - maßgeblicher Datensatz für feingranulare Sentimentanalyse.
- [SetFit](https://github.com/huggingface/setfit) - Few-Shot-Textklassifikation ohne Prompts.
- [FastFit](https://github.com/IBM/fastfit) - schnelles Few-Shot-Lernen für Umgebungen mit vielen Klassen.
- [SST / IMDB / AG News with DeBERTa-v3](https://arxiv.org/abs/2111.09543) - aktuelle Baseline für die Feinabstimmung von Encodern.
- [PySS3](https://github.com/sergioburdisso/pyss3) - interpretierbarer White-Box-Textklassifikator.
- [LLMs as Annotators](https://arxiv.org/abs/2305.13734) - Einsatz von LLMs zur Annotation für Textklassifikation, mit Einschränkungen.

### Themenmodellierung

[Zurück nach oben](#contents)

- [Latent Dirichlet Allocation (Blei et al.)](https://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf) - grundlegendes Themenmodell.
- [gensim](https://radimrehurek.com/gensim/) - LDA, LSI und HDP in Python.
- [BigARTM](https://github.com/bigartm/bigartm) - schnelle regularisierte Themenmodellierung.
- [BERTopic](https://github.com/MaartenGr/BERTopic) - clusterbasierte Themenmodellierung auf Grundlage kontextueller Einbettungen; heute häufig die Standardwahl.
- [Top2Vec](https://github.com/ddangelov/Top2Vec) - erlernt Themen- und Dokumentvektoren gemeinsam.
- [CorEx Topic](https://github.com/gregversteeg/corex_topic) - hierarchische Themenmodellierung mit Ankerwörtern.

### Zusammenfassung

[Zurück nach oben](#contents)

- [TextRank](https://web.eecs.umich.edu/~mihalcea/papers/mihalcea.emnlp04.pdf) - extraktive graphbasierte Zusammenfassung.
- [Pointer-Generator Networks (See et al.)](https://arxiv.org/abs/1704.04368) - grundlegender neuronaler Ansatz für abstraktive Zusammenfassungen.
- [PEGASUS](https://arxiv.org/abs/1912.08777) - Vortraining mit Lückensätzen für Zusammenfassungen.
- [BART](https://arxiv.org/abs/1910.13461) - häufig verwendete Denoising-Seq2seq-Baseline.
- [BookSum](https://arxiv.org/abs/2105.08209) und [SCROLLS](https://arxiv.org/abs/2201.03533) - Benchmarks für Zusammenfassungen langer Dokumente.
LLM-basiert:

- [Benchmarking LLMs for News Summarization](https://arxiv.org/abs/2301.13848) - Vergleich von LLMs mit feinabgestimmten Zusammenfassungsmodellen.
- [Element-Aware Summarization with LLMs](https://arxiv.org/abs/2305.13412) - strukturiertes Prompting für Zusammenfassungen.
- [Understanding LLM Reasoning for Abstractive Summarization](https://arxiv.org/abs/2512.03503) (2025) - explizites Reasoning verbessert die Sprachflüssigkeit, beeinträchtigt aber die faktische Verankerung; längere Reasoning-Budgets können die Faktentreue verschlechtern.

### Maschinelle Übersetzung

[Zurück nach oben](#contents)

Statistische und grundlegende neuronale Ansätze:

- [Moses](http://statmt.org/moses/) - Referenzsystem für statistische maschinelle Übersetzung.
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) - Transformer, der das Forschungsfeld neu ausrichtete.
- [Marian NMT](https://github.com/marian-nmt/marian) - effizientes C++-Framework für NMT.
- [Fairseq](https://github.com/facebookresearch/fairseq) - PyTorch-Toolkit zur Sequenzmodellierung.

Stark mehrsprachige Modelle:

- [NLLB-200](https://arxiv.org/abs/2207.04672) - maschinelle Übersetzung für 200 Sprachen.
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - maschinelle Übersetzung für mehr als 400 Sprachen.
- [SeamlessM4T](https://arxiv.org/abs/2312.05187) - maschinelle Übersetzung von Sprache und Text in mehr als 100 Sprachen.

Evaluierung:

- [COMET](https://github.com/Unbabel/COMET) - erlernte Metrik für maschinelle Übersetzung; neben chrF derzeit De-facto-Standard.
- [sacrebleu](https://github.com/mjpost/sacrebleu) - reproduzierbare BLEU-/chrF-/TER-Bewertung.
- [BERTScore](https://github.com/Tiiiger/bert_score) - Ähnlichkeitsmetrik für generierte Texte.

LLM-basiert:

- [Is ChatGPT a Good Translator?](https://arxiv.org/abs/2301.08745) - LLMs als Systeme für maschinelle Übersetzung.
- [Adapting LLMs for Document-Level MT](https://arxiv.org/abs/2401.06468) (2024) - LLMs für kontextbewusste Übersetzung.
- [GPT-4 vs Human Translators](https://arxiv.org/abs/2308.03245) - Qualitätsvergleich bei professioneller maschineller Übersetzung.
- [Multilingual MT with Open LLMs at Practical Scale](https://arxiv.org/abs/2502.02481) (2025) - Benchmark für offene LLMs mit weniger als 10 Milliarden Parametern bei Übersetzungen in 28 Sprachen; erreicht die Leistung von GPT-4-turbo und Google Translate.
- [Bridging the Linguistic Divide: Survey on LLMs for MT](https://arxiv.org/abs/2504.01919) (2025) - Überblick dazu, wie Instruktionsbefolgung, In-Context-Lernen und Präferenzabgleich die Methodik der maschinellen Übersetzung verändert haben.

### Fragebeantwortung und Leseverständnis

[Zurück nach oben](#contents)

Datensätze und grundlegende Systeme:

- [SQuAD / SQuAD 2.0](https://rajpurkar.github.io/SQuAD-explorer/) - extraktives Leseverständnis.
- [Natural Questions](https://ai.google.com/research/NaturalQuestions/) - Fragen echter Nutzerinnen und Nutzer zu Wikipedia.
- [HotpotQA](https://hotpotqa.github.io/) - mehrstufiges Reasoning.
- [TriviaQA](http://nlp.cs.washington.edu/triviaqa/) - schwach überwachte Fragebeantwortung.
- [DrQA](https://github.com/facebookresearch/DrQA) - offene Fragebeantwortung zu Wikipedia.
- [Document-QA](https://github.com/allenai/document-qa) - Leseverständnis über mehrere Absätze hinweg.

Moderne offene Fragebeantwortung:

- [DPR](https://arxiv.org/abs/2004.04906) und [FiD](https://arxiv.org/abs/2007.01282) - Retrieval mit anschließendem Lesen; die Standardpipeline für offene Fragebeantwortung vor LLMs.
- [Atlas](https://arxiv.org/abs/2208.03299) - retrieval-augmentiertes Sprachmodell für Few-Shot-Fragebeantwortung.
- Siehe auch [Retrieval für NLP](#retrieval-for-nlp).

LLM-Zeitalter:

- [GPT-4 with retrieval on TriviaQA / NQ](https://arxiv.org/abs/2305.06983)
- [Self-RAG](https://arxiv.org/abs/2310.11511) (2023) - Retrieval, Generierung und Selbstkritik.
- [GAIA](https://arxiv.org/abs/2311.12983) - allgemeiner Benchmark für KI-Assistenten einschließlich mehrstufiger Fragebeantwortung.

### Informationsextraktion über NER hinaus

[Zurück nach oben](#contents)

- [OpenIE 6](https://github.com/dair-iitd/openie6) - offene Informationsextraktion ohne Schema.
- [Template-Based Information Extraction without the Templates](https://www.usna.edu/Users/cs/nchamber/pubs/acl2011-chambers-templates.pdf)
- [Privee: An Architecture for Automatically Analyzing Web Privacy Policies](https://www.sebastianzimmeck.de/zimmeckAndBellovin2014Privee.pdf)
- [REBEL](https://github.com/Babelscape/rebel) - durchgängige Relationsextraktion.
- [DocRED](https://github.com/thunlp/DocRED) - Benchmark für Relationsextraktion auf Dokumentebene.
- [LLMs for Semantic Role Labeling](https://arxiv.org/abs/2506.05385) (2025) - generative LLMs mit RAG und Selbstkorrektur übertreffen Encoder-Decoder-Modelle im BERT-Stil bei SRL für Englisch und Chinesisch.
- [Adapting LLMs for Minimal-edit GEC](https://arxiv.org/abs/2506.13148) (2025) - Decoder-only-LLMs mit einem neuartigen Anpassungsplan für Fehlerraten erzielen neue Bestwerte bei der Grammatikkorrektur auf BEA-test.

### Retrieval und Einbettungen

[Zurück nach oben](#contents)

Dichtes Retrieval und Late Interaction Retrieval, zunehmend die Grundlage für Fragebeantwortung und Information Retrieval:

- [DPR (Dense Passage Retrieval)](https://arxiv.org/abs/2004.04906) - Dual-Encoder-Baseline für Retrieval.
- [ColBERT](https://arxiv.org/abs/2004.12832) und [ColBERTv2](https://arxiv.org/abs/2112.01488) - Retrieval mit Late Interaction; leistungsstark bei Daten außerhalb des Trainingsbereichs.
- [E5](https://arxiv.org/abs/2212.03533) und [E5-Mistral](https://arxiv.org/abs/2401.00368) - weit verbreitete Familien dichter Einbettungen.
- [BGE](https://github.com/FlagOpen/FlagEmbedding) und [BGE-M3](https://arxiv.org/abs/2402.03216) (2024) - mehrsprachige Einbettungen mit mehreren Funktionen; sprachübergreifend Spitzenwerte bei MTEB.
- [Nomic Embed](https://arxiv.org/abs/2402.01613) (2024) - vollständig offenes, reproduzierbares Einbettungsmodell.
- [Matryoshka Representation Learning](https://arxiv.org/abs/2205.13147) - verschachtelte Einbettungen mit variabler Dimension zur Inferenzzeit.
- [GritLM](https://arxiv.org/abs/2402.09906) (2024) - vereint Generierung und Einbettung in einem Modell.
- [RAG (Retrieval-Augmented Generation)](https://arxiv.org/abs/2005.11401) - ursprüngliches retrieval-augmentiertes Framework und Grundlage moderner Fragebeantwortungspipelines.
- [Gemini Embedding](https://arxiv.org/abs/2503.07891) (2025) - von Gemini abgeleitete dichte Einbettungen; Spitzenwerte bei MMTEB in mehr als 250 Sprachen und beim sprachübergreifenden Retrieval (XOR-Retrieve, XTREME-UP).
- [Qwen3-Embedding](https://arxiv.org/abs/2506.05176) (2025) - decoderbasierte Einbettungsreihe (0,6B–8B) auf Grundlage von Qwen3; Platz 1 bei MTEB Multilingual und MTEB Code und damit vor früheren proprietären Modellen.
- [Rank1](https://arxiv.org/abs/2502.18418) (2025) - erstes mit Testzeit-Berechnung trainiertes Neurangierungsmodell, das Reasoning-Trace-Destillation von DeepSeek-R1 nutzt; erreicht Bestwerte bei Instruktionsbefolgung und OOD-Retrieval.
- [ReasonEmbed](https://arxiv.org/abs/2510.08252) (2025) - Einbettungsmodell für reasoningintensives Retrieval mit ReMixer-Datensynthese und adaptivem Redapter-Training; Rekordwert von 38,1 bei nDCG@10 auf BRIGHT.
- [ColBERT-Att](https://arxiv.org/abs/2603.25248) (2026) - erweitert Retrieval mit Late Interaction, indem Aufmerksamkeitsgewichte von Anfrage und Dokument in die ColBERT-Bewertung einfließen; verbessert den Recall bei MS-MARCO, BEIR und LoTTE.
Benchmarks für Einbettungen und Retrieval:

- [MMTEB](https://arxiv.org/abs/2502.13595) (2025) - gemeinschaftliche Erweiterung von MTEB auf mehr als 500 Aufgaben in über 250 Sprachen.

### Sprache und Text

[Zurück nach oben](#contents)

Eine kurze Auswahl relevanter Ressourcen, da dieses Thema an benachbarte Forschungsfelder grenzt:

- [Whisper](https://github.com/openai/whisper) - mehrsprachige automatische Spracherkennung (ASR); heute die übliche offene Lösung.
- [SeamlessM4T](https://github.com/facebookresearch/seamless_communication) - vereinheitlichte Übersetzung von Sprache und Text.
- [Canary](https://huggingface.co/nvidia/canary-1b) (NVIDIA, 2024) - führendes offenes mehrsprachiges ASR-Modell.
- [FunASR](https://github.com/modelscope/FunASR) - ASR-Toolkit in Industriequalität; auf GPU 170-mal schneller als Echtzeit, mehr als 50 Sprachen, integrierte VAD, Interpunktion, Sprecherdiarisierung und Emotionserkennung. Enthält die nicht-autoregressiven SenseVoice- und LLM-basierten Fun-ASR-Nano-Modelle.
- [Wav2Vec 2.0](https://arxiv.org/abs/2006.11477) - grundlegendes selbstüberwachtes Vortraining für Sprache.
- [Coqui TTS](https://github.com/coqui-ai/TTS) und [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - offene Text-to-Speech-Systeme.

## Datensätze

[Zurück nach oben](#contents)

Datensatz-Hubs und -Sammlungen:

- [HuggingFace Datasets Hub](https://huggingface.co/datasets) - zentraler Index moderner NLP-Datensätze mit versionierten, streambaren Loadern.
- [nlp-datasets](https://github.com/niderhoff/nlp-datasets) - umfangreiche Sammlung von NLP-Datensätzen.
- [gensim-data](https://github.com/RaRe-Technologies/gensim-data) - Datenrepository für vortrainierte NLP-Modelle und NLP-Korpora.

Offene Korpora im Maßstab für Vortraining:

- [The Pile](https://pile.eleuther.ai/) - vielfältiges Textkorpus mit 825 GiB.
- [RedPajama / RedPajama-V2](https://github.com/togethercomputer/RedPajama-Data) (2023-2024) - Reproduktionen der LLaMA-Vortrainingsdaten; V2 umfasst 30 Billionen Tokens mit Qualitätssignalen.
- [Dolma](https://github.com/allenai/dolma) (AI2, 2023-2024) - offenes Vortrainingskorpus mit 3 Billionen Tokens und dokumentierter Filterpipeline.
- [FineWeb / FineWeb-Edu](https://huggingface.co/datasets/HuggingFaceFW/fineweb) (2024) - bereinigtes Webkorpus mit 15 Billionen Tokens; FineWeb-Edu filtert nach Bildungsqualität.
- [CulturaX](https://huggingface.co/datasets/uonlp/CulturaX) - 6,3 Billionen Tokens in 167 Sprachen.
- [Common Corpus](https://huggingface.co/datasets/PleIAs/common_corpus) (2024) - mehrsprachiges Korpus mit offener Lizenz und 2 Billionen Tokens.

Aufgaben- und Instruktionsdatensätze:

- [Universal Dependencies](https://universaldependencies.org/) - sprachübergreifend konsistente Baumbank-Annotationen für mehr als 100 Sprachen.
- [Tülu 3 SFT Mixture](https://huggingface.co/datasets/allenai/tulu-3-sft-mixture) (2024) - offene Daten zur Instruktionsabstimmung von Tülu 3.
- [tiny_qa_benchmark_pp](https://github.com/vincentkoc/tiny_qa_benchmark_pp/) - kleine mehrsprachige NLP-Fragebeantwortungsdatensätze und Bibliothek zur Erstellung eigener synthetischer Kopien.

## Mehrsprachige NLP-Frameworks

[Zurück nach oben](#contents)

- [UDPipe](https://github.com/ufal/udpipe) ist eine trainierbare Pipeline zur Tokenisierung, zum Tagging, zur Lemmatisierung und zum Parsen von Universal-Treebanks und anderen CoNLL-U-Dateien. Sie ist überwiegend in C++ geschrieben und bietet eine schnelle, zuverlässige Lösung für mehrsprachiges NLP.
- [NLP-Cube](https://github.com/adobe/NLP-Cube) : Pipeline zur Verarbeitung natürlicher Sprache mit Satzsegmentierung, Tokenisierung, Lemmatisierung, Part-of-Speech-Tagging und Dependenzparsing. Die neue Plattform ist in Python mit Dynet 2.0 geschrieben und bietet Einzelbetrieb (CLI/Python-Bindungen) sowie Serverfunktionen (REST-API).
- [UralicNLP](https://github.com/mikahama/uralicNLP) ist eine NLP-Bibliothek, die vor allem zahlreiche bedrohte uralische Sprachen wie samische, mordwinische, mariische und komi-sprachige Varietäten unterstützt. Auch einige nicht bedrohte Sprachen wie Finnisch sowie nichturalische Sprachen wie Schwedisch und Arabisch werden unterstützt. UralicNLP ermöglicht morphologische Analyse, Generierung, Lemmatisierung und Disambiguierung.

## Sprachmodelle für NLP

[Zurück nach oben](#contents)

Vortrainierte Sprachmodelle und die dazugehörige Forschung, beschränkt auf NLP-Aufgaben und linguistische Phänomene. Allgemeine LLM-Werkzeuge, Agenten oder RAG-Anwendungskits findest du unter [Siehe auch](#see-also).

### Vortraining und Anpassung

Encoder (weiterhin die Arbeitspferde für klassische NLP-Aufgaben):

- [BERT](https://arxiv.org/abs/1810.04805) - bidirektionales Transformer-Vortraining; seit 2018 Grundlage der meisten encoderbasierten NLP-Arbeiten. [Online lesen](https://webeditions.page/works/bert-pre-training/) mit Abschnittsnavigation und angehängter ACL-Quelle.
- [RoBERTa](https://arxiv.org/abs/1907.11692) - robust optimiertes BERT-Vortraining; gängige Encoder-Baseline.
- [DeBERTa / DeBERTa-v3](https://arxiv.org/abs/2111.09543) - entkoppelte Aufmerksamkeit; leistungsstark bei Klassifikation, NER und NLI.
- [ELECTRA](https://arxiv.org/abs/2003.10555) - Vortraining durch Erkennung ersetzter Tokens, effizient im Stichprobenverbrauch.
- [ModernBERT](https://arxiv.org/abs/2412.13663) (2024) - modernisierter Encoder mit rotierenden Einbettungen, FlashAttention und 8K-Kontext; derzeit erste Wahl für Klassifikation, NER und Retrieval.
- [NeoBERT](https://arxiv.org/abs/2502.19587) (2025) - Encoder mit 250 Millionen Parametern und modernen Architekturverbesserungen (RoPE, 4K-Kontext, optimiertes Tiefen-Breiten-Verhältnis); erreicht Spitzenwerte bei MTEB und übertrifft ModernBERT und RoBERTa-large bei identischer Feinabstimmung.

Encoder-Decoder- und Seq2seq-Modelle:

- [T5](https://arxiv.org/abs/1910.10683) und [FLAN-T5](https://arxiv.org/abs/2210.11416) - Text-zu-Text-Formulierung von NLP-Aufgaben; starke instruktionsabgestimmte Encoder-Decoder-Baselines.
- [BART](https://arxiv.org/abs/1910.13461) - Denoising-Seq2seq-Vortraining; häufig für Zusammenfassung und Generierung eingesetzt.

Offene Decoder-only-Sprachmodelle (als Grundlage für NLP-Aufgaben):

- [Llama 3 / 3.1 / 3.3](https://arxiv.org/abs/2407.21783) (Meta, 2024-2025) - weit verbreitete Familie offener Gewichte; Standardbasis für die Feinabstimmung bei NLP-Aufgaben.
- [Qwen 2.5 / Qwen 3](https://qwenlm.github.io/) (Alibaba, 2024-2025) - starke mehrsprachige Abdeckung, besonders für Chinesisch; bei mehrsprachigen Benchmarks oft das führende offene Modell.
- [DeepSeek-V3](https://arxiv.org/abs/2412.19437) (2024) - effizientes MoE-Vortraining; konkurrenzfähiges offenes Basismodell.
- [OLMo 2](https://arxiv.org/abs/2501.00656) (AI2, 2025) - vollständig offen: Gewichte, Trainingsdaten und Code; Referenz für Reproduzierbarkeit.
- [Gemma 2 / Gemma 3](https://arxiv.org/abs/2408.00118) (Google, 2024-2025) - offene kleine und mittelgroße Modelle mit starker Leistung bei NLP-Aufgaben.
- [Mistral / Mixtral](https://arxiv.org/abs/2401.04088) - effiziente offene dichte Modelle und Sparse-MoE-Modelle.
- [What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?](https://arxiv.org/abs/2204.05832) - Encoder vs. Decoder vs. Encoder-Decoder beim NLP-Transfer.

### Mehrsprachige und sprachübergreifende Modelle

- [XLM-R](https://arxiv.org/abs/1911.02116) - sprachübergreifendes Masked Language Model, trainiert auf CommonCrawl in 100 Sprachen.
- [mT5](https://arxiv.org/abs/2010.11934) - mehrsprachiges T5 für 101 Sprachen.
- [BLOOM](https://arxiv.org/abs/2211.05100) - offenes mehrsprachiges Sprachmodell mit 176 Milliarden Parametern und 46 natürlichen Sprachen.
- [Aya 23 / Aya Expanse](https://arxiv.org/abs/2412.04261) (Cohere For AI, 2024) - umfassend mehrsprachige instruktionsabgestimmte Modelle für 23 bis 101 Sprachen.
- [Glot500](https://arxiv.org/abs/2305.12182) - Encoder für mehr als 500 Sprachen mit Schwerpunkt auf ressourcenarmen Sprachen.
- [NLLB-200](https://arxiv.org/abs/2207.04672) - No Language Left Behind: maschinelle Übersetzung für 200 Sprachen.
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - Modell für maschinelle Übersetzung in mehr als 400 Sprachen und mehrsprachiges Korpus mit 3 Billionen Tokens.
- [SeamlessM4T / Seamless](https://arxiv.org/abs/2312.05187) (Meta, 2023-2024) - mehrsprachige und multimodale Sprach-Text-Übersetzung in mehr als 100 Sprachen.
- [SEA-LION / SeaLLM](https://arxiv.org/abs/2312.00738) (2024-2025) - Sprachmodelle für südostasiatische Sprachen.
- [Babel](https://arxiv.org/abs/2503.00865) (2025) - offene mehrsprachige LLMs (9B und 83B) für die 25 nach Sprecherzahl größten Sprachen (etwa 90 % aller Sprecherinnen und Sprecher weltweit); übertrifft ähnlich große offene mehrsprachige Modelle bei XCOPA, XNLI, MGSM und FLORES-200.
- [Lugha-Llama](https://arxiv.org/abs/2504.06536) (Princeton/Mila, 2025) - für ressourcenarme afrikanische Sprachen angepasstes Llama-3.1-8B, trainiert mit dem kuratierten WURA-Korpus; erzielt offene Bestwerte bei IrokoBench und AfriQA.
- [AfriqueLLM](https://arxiv.org/abs/2601.06395) (McGill, 2026) - Sammlung offener LLMs (4B–14B), weiter vortrainiert mit 26 Milliarden Tokens in 20 afrikanischen Sprachen, einschließlich umfassender empirischer Untersuchung der Datenmischung.
- [TranslateGemma](https://arxiv.org/abs/2601.09012) (Google, 2026) - offene, auf Übersetzung spezialisierte Modelle auf Basis von Gemma 3 für 55 Sprachpaare, trainiert mit SFT und RL sowie Qualitätsbelohnungsmodellen.
- [MiLMMT-46](https://arxiv.org/abs/2602.11961) (Xiaomi, 2026) - offene mehrsprachige maschinelle Übersetzung für 46 Sprachen auf großem Maßstab, vergleichbar mit kommerziellen Systemen wie Google Translate und Gemini 3 Pro.

### Evaluierung und Benchmarks

NLU und sprachübergreifende Evaluierung:

- [GLUE](https://gluebenchmark.com/) und [SuperGLUE](https://super.gluebenchmark.com/) - englische NLU-Benchmarks.
- [XTREME](https://sites.research.google/xtreme) und [XGLUE](https://microsoft.github.io/XGLUE/) - sprachübergreifendes NLU.
- [XNLI](https://github.com/facebookresearch/XNLI) - sprachübergreifende Inferenz natürlicher Sprache in 15 Sprachen.
- [FLORES-200](https://github.com/facebookresearch/flores) - Evaluierung maschineller Übersetzung in 200 Sprachen.
- [MTEB](https://github.com/embeddings-benchmark/mteb) - Massive Text Embedding Benchmark; Standard für Satz- und Dokumentencoder.
- [BEIR](https://github.com/beir-cellar/beir) - heterogener IR-Benchmark für Retrieval-Modelle.

Moderne Evaluierung von Sprachmodellen (2023-2026):

- [HELM](https://crfm.stanford.edu/helm/) - ganzheitliche Evaluierung über NLP-Aufgaben hinweg, einschließlich Genauigkeit und weiterer Kriterien.
- [BIG-bench](https://github.com/google/BIG-bench) - mehr als 200 Aufgaben zur Untersuchung der Fähigkeiten von Sprachmodellen.
- [MMLU](https://github.com/hendrycks/test) - multitaskbasierte Wissensevaluierung in 57 Fachgebieten.
- [MMLU-Pro](https://arxiv.org/abs/2406.01574) (2024) - anspruchsvollerer und trennschärferer Nachfolger von MMLU.
- [GPQA](https://arxiv.org/abs/2311.12022) - Reasoning-Evaluierung auf Hochschulniveau mit „Google-sicheren“ Fragen und Antworten.
- [REFUTE](https://huggingface.co/datasets/BGPT-OFFICIAL/refute) (2026) - wissenschaftlicher Reasoning-Benchmark für evidenzgestützte Kritik, Erkennung überzogener Behauptungen, Ablehnung bei fehlenden Belegen und Kalibrierung.
- [IFEval](https://arxiv.org/abs/2311.07911) - überprüfbare Evaluierung der Instruktionsbefolgung.
- [Chatbot Arena (LMSYS)](https://lmarena.ai/) - ELO-Rangliste für Chatmodelle auf Basis menschlicher Präferenzen.
- [LiveBench](https://livebench.ai/) (2024) - kontaminationsresistenter Benchmark mit monatlicher Aktualisierung.
- [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) - einheitliches Framework zur Evaluierung von Sprachmodellen anhand von Benchmarks.
- [MMLU-ProX](https://arxiv.org/abs/2503.10497) (2025) - mehrsprachige Erweiterung von MMLU-Pro auf 29 typologisch vielfältige Sprachen; zeigt Leistungsunterschiede von bis zu 24,3 % zwischen ressourcenstarken und ressourcenarmen Sprachen.
- [MultiChallenge](https://arxiv.org/abs/2501.17399) (2025) - Benchmark für mehrstufige Gespräche, der gleichzeitige Fehler bei Instruktionsbefolgung und In-Context-Reasoning aufdeckt; alle getesteten Spitzenmodelle erreichen weniger als 50 %.
- [FRAMES](https://arxiv.org/abs/2409.12941) (2025) - einheitliche RAG-Evaluierung mit 824 mehrstufigen Fragen, die gemeinsam Faktentreue, Retrieval-Genauigkeit und dokumentübergreifendes Reasoning erfordern.

Evaluierung langer Kontexte:

- [Needle in a Haystack](https://github.com/gkamradt/LLMTest_NeedleInAHaystack) - Retrieval-Test für Kontextfenster mit großer Länge.
- [RULER](https://arxiv.org/abs/2404.06654) (2024) - synthetische Aufgaben für lange Kontexte, die über einfache Retrieval-Aufgaben hinausgehen.
- [LongBench](https://github.com/THUDM/LongBench) - zweisprachiger Benchmark für lange Kontexte bei verschiedenen NLP-Aufgaben.
- [LongBench v2](https://arxiv.org/abs/2412.15204) (2025) - 503 von Fachleuten erstellte Multiple-Choice-Fragen zu Kontexten von 8.000 bis 2 Millionen Wörtern mit tiefem mehrstufigem Reasoning; Menschen erreichen unter Zeitdruck 53,7 %.
- [U-NIAH](https://arxiv.org/abs/2503.00353) (2025) - erweitert Needle-in-a-Haystack um Konfigurationen mit mehreren und verschachtelten Nadeln; zeigt, dass RAG bei kleineren LLMs den Lost-in-the-Middle-Effekt mildert, Reasoning-Modelle jedoch beeinträchtigt.

### Reasoning und Testzeit-Berechnung

Ein richtungsweisender Trend von 2024 bis 2026: Modelle, die explizite Reasoning-Schritte erzeugen und von zusätzlicher Inferenz-Rechenleistung profitieren.

- [Chain-of-Thought Prompting](https://arxiv.org/abs/2201.11903) - grundlegendes Ergebnis: Zwischenschritte des Reasonings verbessern die Leistung.
- [Self-Consistency](https://arxiv.org/abs/2203.11171) - Mehrheitsentscheidung über abgetastete CoT-Ketten.
- [Tree of Thoughts](https://arxiv.org/abs/2305.10601) - Suche über Reasoning-Bäume.
- [Self-Refine](https://arxiv.org/abs/2303.17651) und [Reflexion](https://arxiv.org/abs/2303.11366) - Selbstkorrektur während der Inferenz.
- [Large Language Models are Zero-Shot Reasoners](https://arxiv.org/abs/2205.11916) - Chain-of-Thought für NLP-Reasoning-Aufgaben.
- [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) - prozessüberwachte Reward-Modelle für Reasoning.
- [DeepSeek-R1](https://arxiv.org/abs/2501.12948) (2025) - offenes Reasoning-Modell, das ausschließlich mit RL trainiert wurde; reproduzierte das Verhalten von o1 auf offene Weise.
- [OpenAI o1 / o3](https://openai.com/index/learning-to-reason-with-llms/) (2024-2025) - Reasoning-Systeme mit Testzeit-Berechnung.
- [Scaling LLM Test-Time Compute Optimally](https://arxiv.org/abs/2408.03314) (2024) - systematische Untersuchung der Abwägungen bei Rechenleistung während der Inferenz.
- [s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393) (2025) - einfaches offenes Rezept für Reasoning mit Budget-Forcing.
- [Kimi k1.5](https://arxiv.org/abs/2501.12599) (2025) - RL mit langem Kontext und Policy-Optimierung (ohne MCTS und PRM), erreicht Leistung auf o1-Niveau; führt die Destillation langer CoT-Ketten in Modelle mit kurzen CoT-Ketten ein.
- [rStar-Math](https://arxiv.org/abs/2501.04519) (2025) - kleines Policy-Modell in Kombination mit einem Prozesspräferenzmodell, das mit MCTS-Rollouts trainiert wird; ermöglicht kleinen Sprachmodellen, Reasoning ohne Destillation aus größeren Modellen aufzubauen.
- [DAPO](https://arxiv.org/abs/2503.14476) (2025) - offenes RL-Trainingssystem auf GRPO-Basis mit vier zentralen Verbesserungen (entkoppeltes Clipping, dynamisches Sampling, Token-Level-Verlust und Entropiebonus); reproduziert und übertrifft Reasoning auf dem Niveau von DeepSeek-R1-Zero.
- [VAPO](https://arxiv.org/abs/2504.05118) (2025) - wertmodellbasiertes RL mit längenadaptivem GAE und Token-Level-Clipping; übertrifft wertfreie GRPO-Methoden bei AIME 2024 und ermöglicht stabiles Training.
- [ThinkPRM](https://arxiv.org/abs/2504.16828) (2025) - generative Prozess-Reward-Modelle, die für jeden Schritt eine Chain-of-Thought-Verifikation erzeugen und diskriminative PRMs mit 1 % der überwachten Labels erreichen.
- [OpenThoughts](https://arxiv.org/abs/2506.04178) (2025) - mehr als 1.000 kontrollierte Experimente zu Datenrezepten für offene Reasoning-Modelle; erzielt Spitzenwerte bei AIME 2025 und erreicht geschlossene Destillations-Baselines.

### Lange Kontexte und alternative Architekturen

- [Mamba](https://arxiv.org/abs/2312.00752) und [Mamba-2](https://arxiv.org/abs/2405.21060) - selektive Zustandsraummodelle und lineare Alternative zu Attention für lange Kontexte.
- [RWKV](https://arxiv.org/abs/2305.13048) - RNN-Transformer-Hybrid, das auf hohe Parameterzahlen skaliert.
- [Jamba](https://arxiv.org/abs/2403.19887) (2024) - hybride Mamba-Transformer-MoE-Architektur.
- [RoPE](https://arxiv.org/abs/2104.09864) und [YaRN](https://arxiv.org/abs/2309.00071) - rotierende Positionseinbettungen und Erweiterung der Kontextlänge.
- [Position Interpolation](https://arxiv.org/abs/2306.15595) - Erweiterung von Kontextfenstern mit minimaler Feinabstimmung.
- [Lost in the Middle](https://arxiv.org/abs/2307.03172) - Muster des Leistungsabfalls bei langen Kontexten in NLP-Aufgaben.
- [RAG vs Long-Context LLMs](https://arxiv.org/abs/2407.16833) (2024) - Abwägungen bei der Fragebeantwortung über lange Eingaben.
- [Titans: Learning to Memorize at Test Time](https://arxiv.org/abs/2501.00663) (2025) - neuronales Langzeitgedächtnismodul, das während der Testzeit historischen Kontext speichern lernt; skaliert auf mehr als 2 Millionen Tokens und übertrifft Transformer sowie moderne linear-rekurrente Modelle bei Sprachmodellierung und Reasoning.
- [MiniMax-01](https://arxiv.org/abs/2501.08313) (2025) - Hybridmodell mit 456 Milliarden Parametern, das Lightning- (lineare) Attention mit spärlicher Softmax-Attention kombiniert; erreicht NLP-Leistung auf GPT-4o-Niveau bei Inferenzkontexten von bis zu 4 Millionen Tokens.
- [Native Sparse Attention (NSA)](https://arxiv.org/abs/2502.11089) (2025) - trainierbare spärliche Attention, die grobkörnige Kompression mit feingranularer Auswahl verbindet; deutliche Beschleunigung bei 64K ohne Einbußen bei NLP-Benchmarks.
- [LongRoPE2](https://arxiv.org/abs/2502.20082) (2025) - erkennt das unzureichende Training hochfrequenter RoPE-Dimensionen und skaliert sie mittels evolutionärer Suche neu; erweitert LLaMA3-8B auf 128K mit 80-mal weniger Trainingstokens als in Metas Rezept.
- [Characterizing SSM and Hybrid LM Long-Context Performance](https://arxiv.org/abs/2507.12442) (2025) - erste umfassende Analyse von Speicherbedarf und Geschwindigkeit bei Transformer-, SSM- und Hybridmodellen bis 220K Tokens; SSMs sind bis zu viermal schneller, Hybride gleichen Erinnerungsleistung und Effizienz aus.

### Faktentreue, Halluzination und Kalibrierung

- [Survey of Hallucination in Natural Language Generation](https://arxiv.org/abs/2202.03629) - Taxonomie und Strategien zur Eindämmung.
- [TruthfulQA](https://github.com/sylinrl/TruthfulQA) - Benchmark für Wahrheitsgehalt bei der Fragebeantwortung.
- [FActScore](https://github.com/shmsw25/FActScore) - feingranulare Faktengenauigkeit bei längeren generierten Texten.
- [LongFact / SAFE](https://arxiv.org/abs/2403.18802) (2024) - Benchmark für Faktentreue bei längeren Texten und suchgestütztes Evaluierungsverfahren.
- [SelfCheckGPT](https://github.com/potsawee/selfcheckgpt) - stichprobenbasierte Halluzinationserkennung.
- [RAGAS](https://github.com/explodinggradients/ragas) - referenzfreie Evaluierung von RAG- und Fragebeantwortungspipelines.
- [Lookback Lens](https://arxiv.org/abs/2407.07071) (2024) - Halluzinationserkennung anhand von Attention-Mustern bei Generierung mit langem Kontext.
- [Calibration of LLMs on Multiple Choice](https://arxiv.org/abs/2402.13887) (2024) - Kalibrierungsanalyse unter dem Einfluss von Formatierungseffekten.
- [HalluLens](https://arxiv.org/abs/2504.17550) (2025) - Halluzinationsbenchmark mit Taxonomie für extrinsische und intrinsische Halluzinationen sowie dynamischer Neuerstellung des Testsatzes zur Vermeidung von Datenlecks.
- [Atomic Calibration](https://arxiv.org/abs/2410.13246) (2025) - Kalibrierungsanalyse auf Aussageebene für längere generierte Texte; Modelle sind bei längeren Ausgaben deutlich schlechter kalibriert als bei einzelnen Aussagen.
- [FRANQ](https://arxiv.org/abs/2505.21072) (2025) - Unsicherheitsquantifizierung unter Berücksichtigung der Faktentreue bei RAG-Faktenprüfungen; trennt formal Faktentreue und Faktizität.
- [MUCH](https://arxiv.org/abs/2511.17081) (2025) - mehrsprachiger Benchmark für Behauptungshalluzinationen in Englisch, Französisch, Spanisch und Deutsch; Token-Level-Logits werden für eine fundierte UQ-Evaluierung bereitgestellt.
- [HalluHard](https://arxiv.org/abs/2602.01031) (2026) - anspruchsvoller Benchmark für Halluzinationen in mehrstufigen Dialogen mit zitierpflichtigen Antworten; selbst mit Websuche bleibt die Halluzinationsrate bei etwa 30 %.
- [CURE: Think Through Uncertainty](https://arxiv.org/abs/2604.12046) (2026) - trainiert Modelle, vor der Generierung Unsicherheiten auf Aussageebene zu durchdenken; deutliche Zugewinne bei biografischer Faktentreue und FactBench-AUROC.

### Sondierung und Interpretierbarkeit

- [A Primer in BERTology](https://arxiv.org/abs/2002.12327) - was BERT über Sprache lernt.
- [Probing Classifiers (Belinkov)](https://arxiv.org/abs/2102.12452) - Methodik, Einschränkungen und Alternativen.
- [Locating and Editing Factual Associations in GPT (ROME)](https://rome.baulab.info/) - kausale Rückverfolgung des Faktenabrufs.
- [The Pyramid of NLP Probes](https://arxiv.org/abs/2104.07885) - strukturelle Sondierung linguistischen Wissens.
- [Toy Models of Superposition](https://transformer-circuits.pub/2022/toy_model/) - Grundlage der Sichtweise, dass Transformer-Repräsentationen aus spärlich aktivierten Merkmalen bestehen.
- [Towards Monosemanticity / Scaling Monosemanticity](https://transformer-circuits.pub/2024/scaling-monosemanticity/) (Anthropic, 2024) - spärliche Autoencoder extrahieren interpretierbare Merkmale aus Sprachmodellen im Produktionsmaßstab.
- [Sparse Autoencoders Find Highly Interpretable Features](https://arxiv.org/abs/2309.08600) - SAE-Methodik zur Interpretierbarkeit von Sprachmodellen.
- [Neuronpedia](https://www.neuronpedia.org/) - offene Plattform zum Durchsuchen von SAE-Merkmalen verschiedener Modelle.
- [Influence Functions Scale to LLMs](https://arxiv.org/abs/2308.03296) (2023) - Identifikation von Trainingsbeispielen, die das Modellverhalten prägen.
- [Circuit Tracing: Revealing Computational Graphs in Language Models](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) (Anthropic, 2025) - führt schichtübergreifende Transcoder und Attributionsgraphen ein, um ein interpretierbares Ersatzmodell zu erstellen; ermöglicht die promptbezogene Rückverfolgung kausaler Wechselwirkungen zwischen Merkmalen.
- [On the Biology of a Large Language Model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) (Anthropic, 2025) - wendet Attributionsgraphen auf Claude 3.5 Haiku an, unter anderem bei mehrstufigem Reasoning, Reimplanung und Jailbreak-Fallstudien.
- [Transcoders Beat Sparse Autoencoders for Interpretability](https://arxiv.org/abs/2501.18823) (2025) - zeigt, dass Transcoder (die Schichtausgaben aus Eingaben rekonstruieren) interpretierbarere Merkmale als SAE liefern; führt Skip-Transcoder ein.
- [Survey on Sparse Autoencoders for LLM Interpretability](https://arxiv.org/abs/2503.05613) (EMNLP 2025) - Referenzüberblick über SAE-Architekturen, Trainingsstrategien, Merkmalserklärungen und Evaluierung.
- [Finding Highly Interpretable Prompt-Specific Circuits](https://arxiv.org/abs/2602.13483) (2026) - identifiziert Schaltkreise auf Prompt- statt Aufgabenebene und zeigt, dass sich Mechanismen nach Promptfamilien gruppieren.

### Effiziente und kleine Sprachmodelle

Destillation und kleine Modelle:

- [DistilBERT](https://arxiv.org/abs/1910.01108) und [MiniLM](https://arxiv.org/abs/2002.10957) - destillierte Encoder für NLP in der Produktion.
- [Phi-3 / Phi-4](https://arxiv.org/abs/2412.08905) (Microsoft, 2024) - kleine Modelle, die mit kuratierten Daten trainiert wurden und bei NLP-Benchmarks mit deutlich größeren Modellen konkurrieren.
- [SmolLM2](https://arxiv.org/abs/2502.02737) (HuggingFace, 2025) - vollständig offene Familie kleiner Sprachmodelle mit reproduzierbaren Trainingsdaten.
- [SmolLM3](https://huggingface.co/blog/smollm3) (HuggingFace, 2025) - vollständig offener Decoder mit 3 Milliarden Parametern, vortrainiert mit 11,2 Billionen Tokens; verwendet NoPE und YaRN für einen 128K-Kontext und ist mit Modellen der 4B-Klasse konkurrenzfähig.
- [Gemma 3 Technical Report](https://arxiv.org/abs/2503.19786) (Google, 2025) - offene Modelle mit 1B–27B Parametern und hohem Verhältnis lokaler zu globaler Aufmerksamkeit, damit der KV-Cache bei 128K Kontext handhabbar bleibt.
- [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) (Alibaba, 2025) - dichte und MoE-Modelle mit 0,6B–235B Parametern und einheitlichen Denk- und Nicht-Denkmodi; das 30B-A3B-MoE erreicht das Niveau größerer dichter Modelle und aktiviert dabei nur 3B Parameter.
- [Apple Intelligence Foundation Language Models](https://arxiv.org/abs/2507.13575) (Apple, 2025) - geräteinternes Modell mit 3B Parametern, das KV-Cache-Sharing und 2-Bit-QAT nutzt, um den Cache-Speicherbedarf ohne Genauigkeitsverlust um 37,5 % zu senken.
- [Sentence-Transformers](https://www.sbert.net/) - Satz- und Absatzeinbettungen mithilfe von Siamese-BERT.
- [SetFit](https://github.com/huggingface/setfit) - Few-Shot-Textklassifikation ohne Prompts.
- [FastFit](https://github.com/IBM/fastfit) - schnelle Few-Shot-Klassifikation bei vielen Klassen.
- [GTE](https://huggingface.co/thenlper/gte-base), [BGE](https://github.com/FlagOpen/FlagEmbedding) und [Stella](https://huggingface.co/dunzhang/stella_en_1.5B_v5) - kompakte Texteinbettungsmodelle nahe der Spitze von MTEB.

Quantisierung und Bereitstellung (relevant für den Einsatz von NLP-Modellen im großen Maßstab):

- [GPTQ](https://arxiv.org/abs/2210.17323) - Quantisierung von Transformern nach dem Training.
- [AWQ](https://arxiv.org/abs/2306.00978) - aktivierungsbewusste Quantisierung von Gewichten.
- [KVTuner](https://arxiv.org/abs/2502.04420) (ICML 2025) - sensitivitätsbewusste schichtweise Quantisierung des KV-Caches mit gemischter Genauigkeit; bis zu 21 % höherer Durchsatz als bei einheitlichem KV8.
- [GGUF / llama.cpp](https://github.com/ggerganov/llama.cpp) - portable quantisierte Inferenz.
- [vLLM](https://github.com/vllm-project/vllm) - Bereitstellung von Sprachmodellen mit hohem Durchsatz auf Basis von PagedAttention.
- [SGLang](https://github.com/sgl-project/sglang) - strukturierte Generierung und effiziente Bereitstellung.
- [Text Generation Inference (TGI)](https://github.com/huggingface/text-generation-inference) - produktionsreife Bereitstellung von Sprachmodellen durch HF.

Parametereffiziente Feinabstimmung:

- [LoRA](https://arxiv.org/abs/2106.09685) und [QLoRA](https://arxiv.org/abs/2305.14314) - Adapter mit niedrigem Rang und quantisierte Feinabstimmung; Standard zur Anpassung von Sprachmodellen an NLP-Aufgaben auf moderater Hardware.
- [DoRA](https://arxiv.org/abs/2402.09353) (2024) - Low-Rank-Anpassung mit Gewichtszerlegung.
- [PEFT](https://github.com/huggingface/peft) - HuggingFace-Bibliothek mit LoRA, Prefix Tuning, IA3 und weiteren Verfahren.

### Instruktionsabstimmung und Präferenzoptimierung

- [FLAN](https://arxiv.org/abs/2109.01652) - feinabgestimmte Sprachmodelle als Zero-Shot-Lerner.
- [InstructGPT](https://arxiv.org/abs/2203.02155) - Training von Sprachmodellen zur Befolgung von Anweisungen mit menschlichem Feedback.
- [Self-Instruct](https://github.com/yizhongw/self-instruct) - Erzeugung von Instruktionsdaten aus Sprachmodellen.
- [Super-NaturalInstructions](https://github.com/allenai/natural-instructions) - mehr als 1.600 NLP-Aufgaben mit Instruktionen.
- [Constitutional AI](https://arxiv.org/abs/2212.08073) - Training von Sprachmodellen mit KI-generiertem Feedback anhand einer schriftlichen Verfassung.
- [Direct Preference Optimization](https://arxiv.org/abs/2305.18290) - einfachere Alternative zu RLHF, vielfach übernommen.
- [Tülu 3](https://arxiv.org/abs/2411.15124) (AI2, 2024) - vollständig offenes Rezept für das Post-Training mit Spitzenresultaten unter den offenen Modellen.
- [LIMA](https://arxiv.org/abs/2305.11206) - „weniger ist mehr beim Alignment“; eine kleine Menge hochwertiger SFT-Daten kann viel bewirken.
- [TRL](https://github.com/huggingface/trl) - Referenzbibliothek für SFT, DPO, GRPO und RLHF.
- [Magpie](https://arxiv.org/abs/2406.08464) (2024-2025) - synthetisiert hochwertige Instruktions-Antwort-Paare, indem ausgerichtete Sprachmodelle ohne Eingabeaufforderung befragt werden; SFT auf der gefilterten Teilmenge erreicht das offizielle Llama-3-Instruct.

### Verzerrung, Fairness und Sicherheit in NLP

- [StereoSet](https://github.com/moinnadeem/StereoSet) - Messung stereotyper Verzerrungen in vortrainierten Sprachmodellen.
- [CrowS-Pairs](https://github.com/nyu-mll/crows-pairs) - Messung sozialer Verzerrungen in maskierten Sprachmodellen.
- [WinoBias](https://github.com/uclanlp/corefBias) - Geschlechterverzerrungen bei der Koreferenzauflösung.
- [HolisticBias](https://github.com/facebookresearch/ResponsibleNLP) - Messung von Verzerrungen entlang vieler demografischer Dimensionen.
- [RealToxicityPrompts](https://github.com/allenai/real-toxicity-prompts) - Toxizität bei der Generierung durch Sprachmodelle.
- [Sycophancy in Language Models](https://arxiv.org/abs/2310.13548) - Modelle passen Antworten an die Überzeugungen der Nutzenden an.
- [Alignment Faking in Large Language Models](https://arxiv.org/abs/2412.14093) (Anthropic, 2024) - Modelle befolgen während des Trainings strategisch Anweisungen.
- [WildGuard](https://arxiv.org/abs/2406.18495) (2024) - offenes Modell und Benchmark zur Sicherheitsmoderation.
- [Emergent Misalignment](https://arxiv.org/abs/2502.17424) (2025) - Feinabstimmung für eine eng umrissene Aufgabe (unsicherer Code) führt unerwartet zu umfassenden Alignment-Fehlern in anderen, unabhängigen Bereichen.
- [SafeDialBench](https://arxiv.org/abs/2502.11090) (2025) - mehrsprachiger Sicherheitsbenchmark (Chinesisch/Englisch) mit mehr als 4.000 mehrstufigen Dialogen aus 22 Szenarien und 7 Jailbreak-Strategien.
- [TeleAI-Safety](https://arxiv.org/abs/2512.05485) (2025) - modulares Jailbreak-Evaluierungsframework mit 19 Angriffen, 29 Abwehrmaßnahmen und 19 Evaluierungsmethoden für 14 Modelle und 12 Risikokategorien.
- [IndicSafe](https://arxiv.org/abs/2603.17915) (2026) - mehrsprachiger Sicherheitsbenchmark für 12 indische Sprachen; zeigt eine sprachübergreifende Übereinstimmung von 12,8 % und übermäßige Ablehnungen bei ressourcenarmen Schriftsystemen.
- [VLAF: Value-Conflict Alignment Faking](https://arxiv.org/abs/2604.20995) (2026) - Alignment-Faking tritt bei Konflikten zwischen Richtlinien und verinnerlichten Werten in 37 % der Fälle selbst bei Modellen ab 7B auf; eine Steuerung durch Vektoren verringert dies um 94 %.

## NLP nach Sprache

[Zurück nach oben](#contents)

Ressourcen sind nach menschlicher Sprache geordnet. Klicke auf einen Abschnitt, um ihn aufzuklappen.

<details>
<summary>

### NLP auf Arabisch

</summary>

[Zurück nach oben](#contents)

### Bibliotheken

- [CAMeL Tools](https://github.com/CAMeL-Lab/camel_tools) - Python-Toolkit für arabisches NLP einschließlich Dialekterkennung, Morphologie und NER.
- [goarabic](https://github.com/01walid/goarabic) - Go-Paket zur Verarbeitung arabischer Texte.
- [jsastem](https://github.com/ejtaal/jsastem) - arabischer Stemmer für JavaScript.
- [PyArabic](https://pypi.org/project/PyArabic/) - Python-Bibliothek für Arabisch.
- [RFTokenizer](https://github.com/amir-zeldes/RFTokenizer) - trainierbarer Segmentierer für Arabisch, Hebräisch und Koptisch.
- [Farasa](https://farasa.qcri.org/) - Segmentierung, POS-Tagging und NER für Arabisch von QCRI.

### Modelle und Einbettungen

- [AraBERT](https://github.com/aub-mind/arabert) - arabische BERT-Modellfamilie.
- [CAMeLBERT](https://github.com/CAMeL-Lab/CAMeLBERT) - BERT-Modelle für Hocharabisch (MSA), Dialekte und klassisches Arabisch.
- [AraELECTRA](https://aclanthology.org/2021.wanlp-1.20/) - effizientes Vortraining für Arabisch (veröffentlicht zusammen mit [AraBERT](https://github.com/aub-mind/arabert)).
- [Jais](https://huggingface.co/inceptionai/jais-13b) (2023-2024) - offene zweisprachige arabisch-englische Sprachmodellfamilie.
- [ALLaM](https://arxiv.org/abs/2407.15390) (SDAIA, 2024) - grundlegende Modelle mit Schwerpunkt Arabisch.

### Datensätze

- [Multidomain Datasets](https://github.com/hadyelsahar/large-arabic-sentiment-analysis-resouces) - umfangreichste verfügbare mehrdomänige Datensätze zur Sentimentanalyse auf Arabisch.
- [LABR](https://github.com/mohamedadaly/labr) - umfangreicher Datensatz mit arabischen Buchrezensionen.
- [Arabic Stopwords](https://github.com/mohataher/arabic-stop-words) - zusammengefasste arabische Stoppwörter.
- [ArabicMMLU](https://huggingface.co/datasets/MBZUAI/ArabicMMLU) (2024) - arabischer MMLU-Benchmark.

</details>

<details>
<summary>

### NLP auf Chinesisch

</summary>

[Zurück nach oben](#contents)

### Bibliotheken

- [jieba](https://github.com/fxsjy/jieba#jieba-1) - Python-Paket zur chinesischen Wortsegmentierung.
- [SnowNLP](https://github.com/isnowfy/snownlp) - Python-Paket für chinesisches NLP.
- [FudanNLP](https://github.com/FudanNLP/fnlp) - Java-Bibliothek zur Verarbeitung chinesischer Texte.
- [HanLP](https://github.com/hankcs/HanLP) - mehrsprachige NLP-Bibliothek mit starker Unterstützung für Chinesisch.
- [LTP](https://github.com/HIT-SCIR/ltp) - HIT Language Technology Platform: Segmentierung, POS, NER und Parsing.

### Modelle und Einbettungen

- [Chinese-BERT-wwm](https://github.com/ymcui/Chinese-BERT-wwm) - BERT für Chinesisch mit Whole-Word-Masking.
- [MacBERT](https://github.com/ymcui/MacBERT) - verbessertes chinesisches BERT mit Vortraining nach dem MLM-as-Correction-Verfahren.
- [Qwen 2.5 / Qwen 3](https://github.com/QwenLM/Qwen3) - offene Sprachmodellfamilie von Alibaba mit starker Leistung für Chinesisch.
- [ChatGLM3 / GLM-4](https://github.com/THUDM/ChatGLM3) - zweisprachige chinesisch-englische Sprachmodelle der Tsinghua-Universität.
- [Baichuan 2](https://github.com/baichuan-inc/Baichuan2) - offenes Sprachmodell für Chinesisch.
- [Yi](https://github.com/01-ai/Yi) - zweisprachige offene Sprachmodelle von 01.AI.
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - effizientes offenes MoE-Modell mit starker Leistung für Chinesisch.

### Anthologie

- [funNLP](https://github.com/fighting41love/funNLP) - umfangreiche Sammlung chinesischer NLP-Werkzeuge und -Ressourcen.

</details>

<details>
<summary>

### NLP auf Dänisch

</summary>

[Zurück nach oben](#contents)

- [Named Entity Recognition for Danish](https://github.com/ITUnlp/daner)
- [DaNLP](https://github.com/alexandrainst/danlp) - NLP-Ressourcen für Dänisch.
- [Awesome Danish](https://github.com/fnielsen/awesome-danish) - kuratierte Sammlung von Ressourcen für dänische Sprachtechnologie.

</details>

<details>
<summary>

### NLP auf Niederländisch

</summary>

[Zurück nach oben](#contents)

- [python-frog](https://github.com/proycon/python-frog) - Python-Bindung an Frog, eine NLP-Suite für Niederländisch (POS-Tagging, Lemmatisierung, Dependenzparsing und NER).
- [SimpleNLG_NL](https://github.com/rfdj/SimpleNLG-NL) - niederländischer Oberflächenrealisierer zur Sprachgenerierung auf Basis der SimpleNLG-Implementierung.
- [Alpino](https://github.com/rug-compling/alpino) - Dependenzparser für Niederländisch (unterstützt auch POS-Tagging und Lemmatisierung).
- [Kaldi NL](https://github.com/opensource-spraakherkenning-nl/Kaldi_NL) - niederländische Spracherkennungsmodelle auf Basis von [Kaldi](http://kaldi-asr.org/).
- [spaCy Dutch model](https://spacy.io/models/nl) - NLP in Industriequalität mit einer niederländischen Pipeline.

</details>

<details>
<summary>

### NLP auf Deutsch

</summary>

[Zurück nach oben](#contents)

- [German-NLP](https://github.com/adbar/German-NLP) - kuratierte Sammlung frei zugänglicher, quelloffener und sofort einsatzbereiter Ressourcen und Werkzeuge mit Schwerpunkt Deutsch.

</details>

<details>
<summary>

### NLP auf Ungarisch

</summary>

[Zurück nach oben](#contents)

- [awesome-hungarian-nlp](https://github.com/oroszgy/awesome-hungarian-nlp) - kuratierte Sammlung kostenloser Ressourcen für ungarisches NLP.

</details>

<details>
<summary>

### NLP in indischen Sprachen

</summary>

[Zurück nach oben](#contents)

### Daten, Korpora und Baumbanken

- [Hindi Dependency Treebank](https://ltrc.iiit.ac.in/treebank_H2014/) - mehrschichtige Baumbank mit mehreren Repräsentationen für Hindi und Urdu.
- [Universal Dependencies Treebank in Hindi](https://universaldependencies.org/treebanks/hi_hdtb/index.html)
  - [Parallel Universal Dependencies Treebank in Hindi](http://universaldependencies.org/treebanks/hi_pud/index.html) - kleinerer Teil der oben genannten Baumbank.
- [ISI FIRE Stopwords List (Hindi and Bangla)](https://www.isical.ac.in/~fire/data/)
- [Peter Graham's Stopwords List](https://github.com/6/stopwords-json)
- [NLTK Corpus](https://www.nltk.org/book/ch02.html) 60.000 Wörter mit POS-Annotationen: Bengalisch, Hindi, Marathi und Telugu.
- [Hindi Movie Reviews Dataset](https://github.com/goru001/nlp-for-hindi) etwa 1.000 Beispiele, 3 Polaritätsklassen.
- [BBC News Hindi Dataset](https://github.com/NirantK/hindi2vec/releases/tag/bbc-hindi-v0.1) 4.300 Beispiele, 14 Klassen.
- [IIT Patna Hindi ABSA Dataset](https://github.com/pnisarg/ABSA) 5.400 Beispiele, 12 Domänen, 4.000 Aspektbegriffe, Polarität von Aspekten und Sätzen in 4 Klassen.
- [Bangla ABSA](https://github.com/AtikRahman/Bangla_Datasets_ABSA) 5.500 Beispiele, 2 Domänen, 10 Aspektbegriffe.
- [IIT Patna Movie Review Sentiment Dataset](https://www.iitp.ac.in/~ai-nlp-ml/resources.html) 2.000 Beispiele, 3 Polaritätslabels.

#### Der Zugang zu anmeldepflichtigen Korpora und Datensätzen kann per E-Mail angefragt werden

- [SAIL 2015](http://amitavadas.com/SAIL/) Sentimentbeispiele aus Twitter und Facebook mit Labels für Hindi, Bengalisch, Tamil und Telugu.
- [IIT Bombay CFILT Resources](https://www.cfilt.iitb.ac.in/) - SentiWordNet, parallel annotierte Korpora, sin annotierte Korpora und ein marathisches Korpus mit Polaritätslabels.
- [TDIL-IC fasst zahlreiche nützliche Ressourcen zusammen und bietet Zugang zu ansonsten gesperrten Datensätzen](https://tdil-dc.in/index.php?option=com_catalogue&task=viewTools&id=83&lang=en)

### Sprachmodelle und Worteinbettungen

- [Hindi2Vec](https://nirantk.com/hindi2vec/) und [nlp-for-hindi](https://github.com/goru001/nlp-for-hindi) Sprachmodell im ULMFiT-Stil.
- [IIT Patna Bilingual Word Embeddings Hi-En](https://www.iitp.ac.in/~ai-nlp-ml/resources.html)
- [Fasttext-Worteinbettungen in zahlreichen Sprachen, trainiert auf Common Crawl](https://fasttext.cc/docs/en/crawl-vectors.html)
- [Hindi and Bengali Word2Vec](https://github.com/Kyubyong/wordvectors)
- [Hindi and Urdu Elmo Model](https://github.com/HIT-SCIR/ELMoForManyLangs)
- [Sanskrit Albert](https://huggingface.co/surajp/albert-base-sanskrit) Trainiert auf der Sanskrit-Wikipedia und dem OSCAR-Korpus.

### Bibliotheken und Werkzeuge

- [Multi-Task Deep Morphological Analyzer](https://github.com/Saurav0074/mt-dma) - tiefgehender morphologischer Parser für Hindi und Urdu.
- [Indic NLP Library](https://github.com/anoopkunchukuttan/indic_nlp_library) - Tokenisierung, Transliteration und MT-Hilfsfunktionen für 18 indische Sprachen.
- [SivaReddy's Dependency Parser (Python3 port)](https://github.com/CalmDownKarm/sivareddydependencyparser) - Dependenzparsing und POS-Tagging für Kannada, Hindi und Telugu.
- [iNLTK](https://github.com/goru001/inltk) - NLP-Toolkit für indische Sprachen auf Basis von PyTorch/Fastai.
- [AI4Bharat IndicNLP Suite](https://ai4bharat.iitm.ac.in/) - Werkzeuge, Datensätze und Modelle für 22 indische Sprachen.

### Modelle und Einbettungen

- [IndicBERT v2](https://github.com/AI4Bharat/IndicBERT) (2022-2024) - mehrsprachiges BERT für 23 indische Sprachen.
- [IndicTrans2](https://github.com/AI4Bharat/IndicTrans2) (2023-2024) - hochwertige maschinelle Übersetzung für 22 indische Sprachen.
- [OpenHathi](https://huggingface.co/sarvamai/OpenHathi-7B-Hi-v0.1-Base) (Sarvam AI, 2023) - zweisprachige Hindi-Englisch-Fortsetzung von LLaMA.
- [Airavata](https://huggingface.co/ai4bharat/Airavata) (2024) - instruktionsabgestimmtes Hindi-LLM.
- [Sarvam-1](https://www.sarvam.ai/blogs/sarvam-1) (2024) - mehrsprachiges Sprachmodell, von Grund auf mit 10 indischen Sprachen trainiert.
- [BharatGPT / Krutrim](https://www.olakrutrim.com/) (2024) - grundlegende Modelle mit Schwerpunkt auf indischen Sprachen.

</details>

<details>
<summary>

### NLP auf Indonesisch

</summary>

[Zurück nach oben](#contents)

### Bibliotheken und Einbettungen

- [bahasa](https://github.com/kangfend/bahasa) - Toolkit zur Verarbeitung natürlicher Sprache für Indonesisch.
- [Indonesian Word Embedding](https://github.com/galuhsahid/indonesian-word-embedding)
- [Indonesian fastText](https://s3-us-west-1.amazonaws.com/fasttext-vectors/wiki.id.zip) auf Wikipedia trainiert.
- [PySastrawi](https://github.com/har07/PySastrawi) - Python-Stemmer für Bahasa Indonesia auf Basis des Sastrawi-Stemmingalgorithmus.

### Modelle

- [IndoBERT (IndoNLU)](https://github.com/indobenchmark/indonlu) - vortrainiertes indonesisches Sprachmodell mit der IndoNLU-Benchmark-Suite.
- [IndoBERT (IndoLEM)](https://github.com/indolem/indolem) - alternatives IndoBERT mit dem IndoLEM-Benchmark.
- [NusaCrowd / Cendol](https://github.com/IndoNLP/nusa-crowd) (2023-2024) - umfangreiche gemeinschaftliche Datensätze und instruktionsabgestimmte Cendol-Sprachmodelle für Indonesisch und regionale Sprachen.
- [Sailor](https://github.com/sail-sg/sailor-llm) - offene südostasiatische Sprachmodelle mit Unterstützung für Indonesisch.
- [SEA-LION](https://github.com/aisingapore/sealion) (2024) - offenes südostasiatisches Sprachmodell von Singapore AI mit starker Leistung für Indonesisch.

### Datensätze

- Kompas- und Tempo-Sammlungen bei [ILPS](http://ilps.science.uva.nl/resources/bahasa/)
- [PANL10N für PoS-Tagging](http://www.panl10n.net/english/outputs/Indonesia/UI/0802/UI-1M-tagged.zip): 39.000 Sätze und 900.000 Wort-Tokens.
- [IDN für PoS-Tagging](https://github.com/famrashel/idn-tagged-corpus): 10.000 Sätze und 250.000 Wort-Tokens.
- [Indonesian Treebank](https://github.com/famrashel/idn-treebank) and [Universal Dependencies-Indonesian](https://github.com/UniversalDependencies/UD_Indonesian-GSD)
- [IndoSum](https://github.com/kata-ai/indosum) - Textzusammenfassung und -klassifikation.
- [Wordnet-Bahasa](http://wn-msa.sourceforge.net/) - umfangreiches, kostenloses semantisches Wörterbuch.
- [SEACrowd](https://github.com/SEACrowd/seacrowd-datahub) - mehrsprachiger und multimodaler Daten-Hub mit standardisierten Datensätzen und Benchmarks für südostasiatisches NLP (EMNLP 2024).

</details>

<details>
<summary>

### NLP auf Koreanisch

</summary>

[Zurück nach oben](#contents)

### Bibliotheken

- [KoNLPy](http://konlpy.org) - Python-Paket zur Verarbeitung koreanischer Sprache.
- [Mecab (Korean)](https://eunjeon.blogspot.com/) - C++-Bibliothek für koreanisches NLP.
- [KoalaNLP](https://koalanlp.github.io/koalanlp/) - Scala-Bibliothek für koreanisches NLP.
- [KoNLP](https://cran.r-project.org/package=KoNLP) - R-Paket für koreanisches NLP.
- [kss](https://github.com/hyunwoongko/kss) - Satzsegmentierer für Koreanisch.
- [Kiwi](https://github.com/bab2min/Kiwi) - schneller morphologischer Analysator für Koreanisch.
- [Garu](https://github.com/ongjin/garu) - nativer morphologischer Analysator für Koreanisch im Browser, vollständig clientseitig mit WebAssembly (1-MB-Modell, offline, MIT).

### Modelle und Einbettungen

- [KoBERT](https://github.com/SKTBrain/KoBERT) - koreanisches BERT von SKT.
- [KLUE-RoBERTa](https://github.com/KLUE-benchmark/KLUE) - auf dem KLUE-Benchmark trainierte Modelle.
- [Polyglot-Ko](https://github.com/EleutherAI/polyglot) - offene koreanische Sprachmodelle.
- [EXAONE 3.5](https://github.com/LG-AI-EXAONE) (LG, 2024) - offene zweisprachige koreanisch-englische Sprachmodellfamilie.
- [HyperCLOVA X](https://www.ncloud.com/product/aiService/clovaStudio) - koreanisches Basismodell von Naver.

### Blogs und Tutorials

- [dsindex's blog](https://dsindex.github.io/)
- [Kangwon University's NLP course in Korean](http://cs.kangwon.ac.kr/~leeck/NLP/)

### Datensätze

- [KAIST Corpus](http://semanticweb.kaist.ac.kr/home/index.php/KAIST_Corpus) - koreanisches Korpus des Korea Advanced Institute of Science and Technology.
- [Naver Sentiment Movie Corpus in Korean](https://github.com/e9t/nsmc/)
- [Chosun Ilbo archive](http://srchdb1.chosun.com/pdf/i_archive/) - koreanischer Datensatz einer großen südkoreanischen Zeitung.
- [Chat data](https://github.com/songys/Chatbot_data) - Chatbot-Daten auf Koreanisch.
- [Petitions](https://github.com/akngs/petitions) - Daten abgelaufener Petitionen der Nationalen Petitionsplattform des Blauen Hauses.
- [Korean Parallel corpora](https://github.com/j-min/korean-parallel-corpora) - NMT-Datensatz für Übersetzungen zwischen Koreanisch und Französisch sowie Koreanisch und Englisch.
- [KorQuAD](https://korquad.github.io/) - koreanischer SQuAD-Datensatz (v1.0 und v2.1) mit Wiki-HTML-Quelle.

</details>

<details>
<summary>

### NLP auf Persisch

</summary>

[Zurück nach oben](#contents)

### Bibliotheken

- [Hazm](https://github.com/roshan-research/hazm) - NLP-Toolkit für Persisch.
- [Parsivar](https://github.com/ICTRC/Parsivar) - Toolkit zur Verarbeitung der persischen Sprache.
- [Perke](https://github.com/AlirezaTheH/perke) - Extraktion persischer Schlüsselbegriffe.
- [Perstem](https://github.com/jonsafari/perstem) - persischer Stemmer, morphologischer Analysator und eingeschränkter POS-Tagger.
- [ParsiAnalyzer](https://github.com/NarimanN2/ParsiAnalyzer) - persischer Analysator für Elasticsearch.
- [virastar](https://github.com/aziz/virastar) - Bereinigung persischer Texte.

### Modelle

- [ParsBERT](https://github.com/hooshvare/parsbert) - persisches BERT.
- [PersianMind](https://huggingface.co/universitytehran/PersianMind-v1.0) (2023-2024) - instruktionsabgestimmtes persisches Sprachmodell.
- [Dorna](https://huggingface.co/PartAI/Dorna-Llama3-8B-Instruct) (Part AI, 2024) - persisches Instruktionsmodell auf Basis von Llama 3.

### Datensätze

- [Bijankhan Corpus](https://dbrg.ut.ac.ir/بیژن%E2%80%8Cخان/) - annotiertes Korpus für die NLP-Forschung zu Persisch (Farsi), etwa 2,6 Millionen manuell annotierte Wörter mit 40 POS-Tags.
- [Uppsala Persian Corpus (UPC)](https://sites.google.com/site/mojganserajicom/home/upc) - umfangreiches, frei verfügbares persisches Korpus mit 2,7 Millionen Tokens, annotiert mit 31 POS-Tags.
- [Large-Scale Colloquial Persian](http://hdl.handle.net/11234/1-3195) - LSCP: 120 Millionen Sätze aus 27 Millionen informellen persischen Tweets mit Dependenz-, POS- und Sentimentannotationen.
- [ArmanPersoNERCorpus](https://github.com/HaniehP/PersianNER) - 250.000 Tokens und 7.682 Sätze mit NER-Tags im IOB-Format.
- [FarsiYar PersianNER](https://github.com/Text-Mining/Persian-NER) - etwa 25 Millionen Tokens und 1 Million persische Sätze aus dem [Persian Wikipedia Corpus](https://github.com/Text-Mining/Persian-Wikipedia-Corpus).
- [PERLEX](http://farsbase.net/PERLEX.html) - erster persischer Datensatz zur Relationsextraktion (übersetzte Version von SemEval-2010 Task 8).
- [Persian Syntactic Dependency Treebank](http://dadegan.ir/catalog/perdt) - 29.982 annotierte Sätze mit den meisten Verben des persischen Valenzlexikons.
- [Uppsala Persian Dependency Treebank (UPDT)](http://stp.lingfil.uu.se/~mojgan/UPDT.html) - syntaktisch annotiertes Korpus auf Dependenzbasis.
- [Hamshahri](https://dbrg.ut.ac.ir/hamshahri/) - zuverlässige Standard-Textsammlung auf Persisch, die bei CLEF 2008–2009 verwendet wurde.

</details>

<details>
<summary>

### NLP auf Polnisch

</summary>

[Zurück nach oben](#contents)

- [Polish-NLP](https://github.com/ksopyla/awesome-nlp-polish) - kuratierte Sammlung von Ressourcen für polnisches NLP: Modelle, Werkzeuge und Datensätze.

</details>

<details>
<summary>

### NLP auf Portugiesisch

</summary>

[Zurück nach oben](#contents)

- [Portuguese-nlp](https://github.com/ajdavidl/Portuguese-NLP) - kuratierte Sammlung portugiesischer NLP-Ressourcen und Werkzeuge.

### Modelle

- [BERTimbau](https://github.com/neuralmind-ai/portuguese-bert) - BERT für brasilianisches Portugiesisch.
- [Sabiá](https://huggingface.co/maritaca-ai) (Maritaca AI, 2023-2024) - offene Sprachmodelle mit Schwerpunkt Portugiesisch.
- [Albertina](https://huggingface.co/PORTULAN) (PORTULAN, 2023-2024) - portugiesische Encoder-only-Sprachmodelle für PT-PT und PT-BR.

</details>

<details>
<summary>

### NLP auf Spanisch

</summary>

[Zurück nach oben](#contents)

### Bibliotheken

- [spanlp](https://github.com/jfreddypuentes/spanlp) - Python-Bibliothek zum Erkennen, Zensieren und Bereinigen von Kraftausdrücken, Hassrede und Mobbing auf Spanisch mit Daten aus 21 spanischsprachigen Ländern.

### Daten

- [Columbian Political Speeches](https://github.com/dav009/LatinamericanTextResources)
- [Copenhagen Treebank](https://mbkromann.github.io/copenhagen-dependency-treebank/)
- [Spanish Billion Words Corpus with Word2Vec embeddings](https://github.com/crscardellino/sbwce)
- [Compilation of Spanish Unannotated Corpora](https://github.com/josecannete/spanish-unannotated-corpora)

### Modelle und Einbettungen

- [BETO](https://github.com/dccuchile/beto) - BERT für Spanisch.
- [RoBERTa-bne](https://huggingface.co/PlanTL-GOB-ES/roberta-base-bne) - spanisches RoBERTa, trainiert auf dem Korpus der Spanischen Nationalbibliothek.
- [Latxa](https://github.com/hitz-zentroa/latxa) (2024) - offenes Basissprachmodell für Baskisch, das auch Spanisch abdeckt.
- [Salamandra](https://huggingface.co/BSC-LT/salamandra-7b) (BSC, 2024) - mehrsprachiges Sprachmodell mit starker Abdeckung des Spanischen vom Barcelona Supercomputing Center.
- [RigoChat](https://huggingface.co/IIC/RigoChat-7b-v2) (2024) - offenes Modell, instruktionsabgestimmt auf Spanisch.
- [Spanish Word Embeddings (multiple methods/corpora)](https://github.com/dccuchile/spanish-word-embeddings)
- [Spanish fastText Embeddings](https://github.com/BotCenter/spanishWordEmbeddings)
- [Spanish sent2vec Sentence Embeddings](https://github.com/BotCenter/spanishSent2Vec)

</details>

<details>
<summary>

### NLP auf Thailändisch

</summary>

[Zurück nach oben](#contents)

### Bibliotheken

- [PyThaiNLP](https://github.com/PyThaiNLP/pythainlp) - Thai-NLP in Python.
- [JTCC](https://github.com/wittawatj/jtcc) - Bibliothek zur Zeichenclusterung in Java.
- [CutKum](https://github.com/pucktada/cutkum) - Wortsegmentierung mit Deep Learning in TensorFlow.
- [Thai Language Toolkit](https://pypi.python.org/pypi/tltk/) - Tokenisierung und POS-Tagging.
- [SynThai](https://github.com/KenjiroAI/SynThai) - Wortsegmentierung und POS-Tagging mit Deep Learning.

### Modelle

- [WangchanBERTa](https://github.com/vistec-AI/thai2transformers) - vortrainiertes Sprachmodell für Thai.
- [Typhoon](https://huggingface.co/scb10x) (SCB 10X, 2024) - offene thailändische LLM-Familie.
- [OpenThaiGPT](https://huggingface.co/openthaigpt) (2023-2024) - offene, instruktionsabgestimmte thailändische Modelle.
- [Sailor](https://github.com/sail-sg/sailor-llm) - offene südostasiatische Sprachmodellfamilie mit Unterstützung für Thai.

### Daten

- [Inter-BEST](https://www.nectec.or.th/corpus/index.php?league=pm) - Textkorpus mit 5 Millionen Wörtern und Wortsegmentierung.
- [Prime Minister 29](https://github.com/PyThaiNLP/lexicon-thai/tree/master/thai-corpus/Prime%20Minister%2029) - Datensatz mit Reden des aktuellen thailändischen Premierministers.

</details>

<details>
<summary>

### NLP auf Ukrainisch

</summary>

[Zurück nach oben](#contents)

- [awesome-ukrainian-nlp](https://github.com/asivokon/awesome-ukrainian-nlp) - kuratierte Sammlung ukrainischer NLP-Datensätze, Modelle und mehr.
- [UkrainianLT](https://github.com/Helsinki-NLP/UkrainianLT) - kuratierte Sammlung mit Schwerpunkt auf maschineller Übersetzung und Sprachverarbeitung.

</details>

<details>
<summary>

### NLP auf Urdu

</summary>

[Zurück nach oben](#contents)

### Bibliotheken

- [urduhack](https://github.com/urduhack/urduhack) - NLP-Bibliothek für Urdu.

### Datensätze

- [Collection of Urdu datasets](https://github.com/mirfan899/Urdu) - POS, NER und weitere NLP-Aufgaben.

</details>

<details>
<summary>

### NLP auf Usbekisch

</summary>

[Zurück nach oben](#contents)

### Datensätze

- [SOAS English-Uzbek RAG Evaluation](https://github.com/rajantripathi/soas-rag-evaluation) - zweisprachiger Retrieval-Evaluierungsbenchmark für kulturell verankertes RAG. 400 Zeilen, EN+UZ, MIT/CC-BY-4.0.

</details>

<details>
<summary>

### NLP auf Vietnamesisch

</summary>

[Zurück nach oben](#contents)

### Bibliotheken

- [underthesea](https://github.com/undertheseanlp/underthesea) - vietnamesisches NLP-Toolkit.
- [vn.vitk](https://github.com/phuonglh/vn.vitk) - Toolkit zur Verarbeitung vietnamesischer Texte.
- [VnCoreNLP](https://github.com/vncorenlp/VnCoreNLP) - vietnamesisches NLP-Toolkit.
- [pyvi](https://github.com/trungtv/pyvi) - grundlegendes Python-Toolkit für vietnamesisches NLP.
- [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - geräteinterne vietnamesische Text-to-Speech-Ausgabe mit Stimmklonen.

### Modelle und Einbettungen

- [PhoBERT](https://github.com/VinAIResearch/PhoBERT) - vortrainiertes Sprachmodell für Vietnamesisch.
- [BARTpho](https://github.com/VinAIResearch/BARTpho) - vortrainiertes Seq2seq-Modell für Vietnamesisch.
- [PhoGPT](https://github.com/VinAIResearch/PhoGPT) (VinAI, 2023-2024) - offenes generatives Sprachmodell für Vietnamesisch.
- [Vistral](https://huggingface.co/Viet-Mistral/Vistral-7B-Chat) (2024) - vietnamesisches Chatmodell auf Basis von Mistral.
- [Sailor](https://github.com/sail-sg/sailor-llm) (2024) - offene mehrsprachige Sprachmodellfamilie für Vietnamesisch, Thai, Indonesisch und weitere südostasiatische Sprachen.

### Daten

- [Vietnamese Treebank](https://vlsp.hpda.vn/demo/?page=resources&lang=en) - 10.000 Sätze für die Konstituentenparsing-Aufgabe.
- [BKTreeBank](https://arxiv.org/pdf/1710.05519.pdf) - vietnamesische Dependenz-Baumbank.
- [UD_Vietnamese](https://github.com/UniversalDependencies/UD_Vietnamese-VTB) - vietnamesische Universal-Dependencies-Baumbank.
- [VIVOS](https://ailab.hcmus.edu.vn/vivos/) - kostenloses vietnamesisches Sprachkorpus mit 15 Stunden aufgezeichneter Sprache (HCMUS AILab).
- [VNTQcorpus(big).txt](http://viet.jnlp.org/download-du-lieu-tu-vung-corpus) - 1,75 Millionen Nachrichtensätze.
- [ViText2SQL](https://github.com/VinAIResearch/ViText2SQL) - Datensatz zum semantischen Parsing von vietnamesischem Text zu SQL (EMNLP-2020 Findings).
- [EVB Corpus](https://github.com/qhungngo/EVBCorpus) - 20 Millionen Wörter aus 15 zweisprachigen Büchern, 100 parallele englisch-vietnamesische Texte, 250 parallele Rechtstexte, 5.000 Nachrichtenartikel und 2.000 Film-Untertitel.

</details>

### Weitere Sprachen

- Russisch: [pymorphy2](https://github.com/kmike/pymorphy2) - ein guter POS-Tagger für Russisch.
- Asiatische Sprachen: Thai, Laotisch, Chinesisch, Japanisch und Koreanisch; [ICU Tokenizer](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu-tokenizer.html)-Implementierung in Elasticsearch.
- Antike Sprachen: [CLTK](https://github.com/cltk/cltk): Classical Language Toolkit, eine Python-Bibliothek und Textsammlung für NLP in antiken Sprachen.
- Hebräisch: [NLPH_Resources](https://github.com/NLPH/NLPH_Resources) - Sammlung von Forschungsarbeiten, Korpora und linguistischen Ressourcen für NLP auf Hebräisch.

[Zurück nach oben](#contents)

## Siehe auch

Ergänzende Sammlungen zu Themen außerhalb dieses Umfangs:

- [awesome-llm](https://github.com/Hannibal046/Awesome-LLM) - Ressourcen zu allgemeinen Large Language Models.
- [awesome-generative-ai](https://github.com/steven2358/awesome-generative-ai) - generative KI über verschiedene Modalitäten hinweg.
- [awesome-rag](https://github.com/Danielskry/Awesome-RAG) - Retrieval-Augmented-Generation-Systeme und -Werkzeuge.
- [awesome-prompt-engineering](https://github.com/promptslab/Awesome-Prompt-Engineering) - Prompting-Techniken und Vorlagenbibliotheken.
- [awesome-mlops](https://github.com/visenger/awesome-mlops) - ML für den Produktiveinsatz, einschließlich Bereitstellung von LLMs.

## Zitierung

Wenn dieses Repository hilfreich ist, zitiere bitte diese Liste:

```bibtex
@misc{awesome-nlp,
  title  = {Awesome NLP},
  author = {Kim, Keon Woo},
  year   = {2018},
  url    = {https://github.com/keon/awesome-nlp},
  note   = {GitHub repository}
}
```

## Lizenz
[Lizenz](./LICENSE) - CC0
