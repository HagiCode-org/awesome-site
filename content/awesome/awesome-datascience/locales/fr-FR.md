<div align="center"><img src="./assets/head.jpg"></div>

# LISTE GÉNIALE DE RESSOURCES EN SCIENCE DES DONNÉES

[![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Les contributions sont les bienvenues — consultez [`CONTRIBUTING.md`](CONTRIBUTING.md).

**Un dépôt open source consacré à la science des données, pour apprendre et appliquer des concepts à la résolution de problèmes concrets.**

Voici un raccourci pour commencer à étudier la **science des données**. Suivez simplement les étapes pour répondre aux questions : « Qu’est-ce que la science des données et que faut-il étudier pour l’apprendre ? »

<br>

## $ [academic](https://academic.io/cli)

```
$ brew tap academic/tap
$ brew install academic
```

## Commanditaires

[![Creavit Studio: enregistrement, montage et animation dans une seule application](https://raw.githubusercontent.com/creavit-studio/files/refs/heads/main/static/crvt-banner.png)](https://creavit.studio/?utm_source=github&utm_medium=sponsorship&utm_campaign=creavit_founding_alpha&utm_content=crvt_banner)

[![Graphyn: visualisez des flux de travail d’agents spécialisés](https://raw.githubusercontent.com/fuego-wtf/graphyn-code/main/assets/graphyn-agent-workflows.png)](https://graphyn.ai/?utm_source=github&utm_medium=sponsorship&utm_campaign=graphyn_founding_alpha&utm_content=awesome_datascience_banner)



Devenez sponsor ! `github@academic.io`



## Table des matières

- [Qu’est-ce que la science des données ?](#what-is-data-science)
- [Par où commencer ?](#where-do-i-start)
- [Agents](#agents)
- [Projets](#projects)
- [Ressources de formation](#training-resources)
  - [Tutoriels](#tutorials)
  - [Cours gratuits](#free-courses)
  - [Cours en ligne ouverts et massifs](#moocs)
  - [Programmes intensifs](#intensive-programs)
  - [Établissements d’enseignement supérieur](#colleges)
- [La boîte à outils de la science des données](#the-data-science-toolbox)

  - [Algorithmes](#algorithms)
    - [Apprentissage supervisé](#supervised-learning)
    - [Apprentissage non supervisé](#unsupervised-learning)
    - [Apprentissage semi-supervisé](#semi-supervised-learning)
    - [Apprentissage par renforcement](#reinforcement-learning)
    - [Algorithmes d’exploration de données](#data-mining-algorithms)
    - [Architectures d’apprentissage profond](#deep-learning-architectures)
  - [Packages généralistes d’apprentissage automatique](#general-machine-learning-packages)
  - [Packages d’apprentissage profond](#deep-learning-packages)
    - [Écosystème PyTorch](#pytorch-ecosystem)
    - [Écosystème TensorFlow](#tensorflow-ecosystem)
    - [Écosystème Keras](#keras-ecosystem)
  - [Outils de visualisation](#visualization-tools)
  - [Outils divers](#miscellaneous-tools)
- [Littérature et médias](#literature-and-media)
  - [Livres](#books)
    - [Offres sur les livres (liens affiliés)](#book-deals-affiliated)
  - [Revues, publications et magazines](#journals-publications-and-magazines)
  - [Infolettres](#newsletters)
  - [Blogueurs](#bloggers)
  - [Présentations](#presentations)
  - [Balados](#podcasts)
  - [Vidéos et chaînes YouTube](#youtube-videos--channels)
- [Échanger](#socialize)
  - [Comptes Facebook](#facebook-accounts)
  - [Comptes Twitter](#twitter-accounts)
  - [Chaînes Telegram](#telegram-channels)
  - [Communautés Slack](#slack-communities)
  - [Groupes GitHub](#github-groups)
  - [Compétitions de science des données](#data-science-competitions)
- [Pour le plaisir](#fun)
  - [Infographies](#infographics)
  - [Jeux de données](#datasets)
  - [Bandes dessinées](#comics)
- [Autres listes remarquables](#other-awesome-lists)
  - [Loisirs](#hobby)

## Qu’est-ce que la science des données ?
**[`^        retour en haut        ^`](#awesome-data-science)**

La science des données est aujourd’hui l’un des sujets les plus en vogue dans l’univers de l’informatique et d’Internet. Depuis des années, les gens recueillent des données issues d’applications et de systèmes ; le moment est maintenant venu de les analyser. Les étapes suivantes consistent à en tirer des recommandations et à faire des prédictions sur l’avenir. [Ici](https://www.quora.com/Data-Science/What-is-data-science), vous trouverez la grande question de la **science des données** ainsi que des centaines de réponses d’experts.


| Lien | Aperçu |
| --- | --- |
| [Data Science For Beginners](https://github.com/microsoft/Data-Science-For-Beginners) | Microsoft propose avec plaisir un programme de 10 semaines et 20 leçons consacré à la science des données. |
| [What is Data Science @ O'reilly](https://www.oreilly.com/ideas/what-is-data-science) | _Les scientifiques des données associent l’esprit d’entreprise à la patience, à la volonté de créer progressivement des produits fondés sur les données, ainsi qu’à la capacité d’explorer et d’itérer sur une solution. Leur travail est intrinsèquement pluridisciplinaire. Ils peuvent aborder tous les aspects d’un problème, de la collecte et de la préparation initiales des données jusqu’à l’interprétation des résultats. Ils savent sortir des sentiers battus pour envisager le problème autrement ou s’attaquer à des questions très ouvertes : « Voici beaucoup de données, qu’allez-vous en faire ? »_ |
| [What is Data Science @ Quora](https://www.quora.com/Data-Science/What-is-data-science) | La science des données combine plusieurs aspects des données, tels que la technologie, le développement d’algorithmes et l’interprétation des données, afin de les étudier, de les analyser et de trouver des solutions novatrices à des problèmes difficiles. En somme, elle consiste à analyser les données et à stimuler la croissance des entreprises en trouvant des pistes créatives. |
| [The sexiest job of 21st century](https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century) | _Les scientifiques des données d’aujourd’hui ressemblent aux « quants » de Wall Street des années 1980 et 1990. À cette époque, des personnes formées en physique et en mathématiques affluaient vers les banques d’investissement et les fonds spéculatifs, où elles pouvaient élaborer de nouveaux algorithmes et stratégies de données. Plusieurs universités ont ensuite créé des maîtrises en ingénierie financière, formant une deuxième génération de spécialistes plus accessibles aux entreprises traditionnelles. Le même phénomène s’est reproduit à la fin des années 1990 avec les ingénieurs en recherche, dont les compétences pointues ont bientôt été enseignées dans les cursus d’informatique._ |
| [Wikipedia](https://en.wikipedia.org/wiki/Data_science) | _La science des données est un domaine interdisciplinaire qui fait appel à des méthodes, processus, algorithmes et systèmes scientifiques pour extraire des connaissances et des informations de grands ensembles de données structurées et non structurées. Elle est liée à l’exploration de données, à l’apprentissage automatique et aux mégadonnées._ |
| [How to Become a Data Scientist](https://www.mastersindatascience.org/careers/data-scientist/) | _Les scientifiques des données sont des spécialistes des mégadonnées : ils recueillent et analysent de grands ensembles de données structurées et non structurées. Leur rôle combine l’informatique, les statistiques et les mathématiques. Ils analysent, traitent et modélisent les données, puis interprètent les résultats afin de créer des plans d’action pour les entreprises et d’autres organisations._ |
| [a very short history of #datascience](https://www.forbes.com/sites/gilpress/2013/05/28/a-very-short-history-of-data-science/) | _L’histoire de la popularité des scientifiques des données est surtout celle du rapprochement entre une discipline mûre, les statistiques, et une discipline toute récente, l’informatique. Le terme « science des données » n’est apparu que récemment pour désigner spécifiquement un nouveau métier, censé donner du sens aux vastes réserves de mégadonnées. Pourtant, l’interprétation des données a une longue histoire et fait l’objet de discussions depuis des années chez les scientifiques, statisticiens, bibliothécaires, informaticiens et autres spécialistes. La chronologie suivante retrace l’évolution du terme « science des données », ses usages, les tentatives de définition et les termes associés._ |
|[Software Development Resources for Data Scientists](https://www.rstudio.com/blog/software-development-resources-for-data-scientists/)|_Les scientifiques des données s’attachent à donner du sens aux données par l’analyse exploratoire, les statistiques et les modèles. Les développeurs logiciels mobilisent un ensemble de connaissances différent et d’autres outils. Même si leurs domaines peuvent sembler éloignés, les équipes de science des données ont tout à gagner à adopter les bonnes pratiques du développement logiciel. Le contrôle de version, les tests automatisés et d’autres compétences de développement contribuent à produire du code et des outils reproductibles, prêts pour la production._|
|[Data Scientist Roadmap](https://www.scaler.com/blog/how-to-become-a-data-scientist/)|_La science des données est un excellent choix de carrière dans le monde actuel, guidé par les données, où quelque 328,77 millions de téraoctets de données sont générés chaque jour. Ce volume ne cesse d’augmenter, ce qui accroît la demande de scientifiques des données qualifiés capables d’exploiter ces données pour stimuler la croissance des entreprises._|
|[Navigating Your Path to Becoming a Data Scientist](https://www.appliedaicourse.com/blog/how-to-become-a-data-scientist/)|_La science des données est aujourd’hui l’un des métiers les plus recherchés. Comme les entreprises s’appuient de plus en plus sur les données pour prendre leurs décisions, le besoin de spécialistes qualifiés a rapidement augmenté. Qu’il s’agisse d’entreprises technologiques, d’organismes de santé ou même d’institutions gouvernementales, les scientifiques des données jouent un rôle essentiel pour transformer des données brutes en informations utiles. Mais comment le devenir, surtout lorsqu’on débute ? _|

## Par où commencer ?
**[`^        retour en haut        ^`](#awesome-data-science)**

Sans être absolument indispensable, la maîtrise d’un langage de programmation est essentielle pour être efficace comme scientifique des données. À l’heure actuelle, le langage le plus populaire est _Python_, suivi de près par _R_. Python est un langage de script généraliste utilisé dans de nombreux domaines. R est un langage spécialisé en statistiques, qui intègre de nombreux outils statistiques courants.

[Python](https://python.org/) est de loin le langage le plus populaire dans le domaine scientifique, notamment grâce à sa simplicité d’utilisation et à son écosystème dynamique de packages créés par ses utilisateurs. Il existe deux principales façons d’installer des packages : Pip (avec la commande `pip install`), le gestionnaire de packages fourni avec Python, et [Anaconda](https://www.anaconda.com) (avec la commande `conda install`), un puissant gestionnaire qui peut installer des packages pour Python et R, ainsi que télécharger des exécutables comme Git.

Contrairement à R, Python n’a pas été conçu dès le départ pour la science des données, mais de nombreuses bibliothèques tierces compensent cette lacune. Une liste de packages beaucoup plus exhaustive figure plus loin dans ce document ; pour commencer votre parcours en science des données, ces quatre packages constituent un bon choix : [Scikit-Learn](https://scikit-learn.org/stable/index.html) est un package généraliste de science des données qui implémente les algorithmes les plus populaires. Il comprend aussi une documentation détaillée, des tutoriels et des exemples des modèles implémentés. Même si vous préférez écrire vos propres implémentations, Scikit-Learn constitue une précieuse référence sur les mécanismes fondamentaux de nombreux algorithmes courants. Avec [Pandas](https://pandas.pydata.org/), vous pouvez recueillir et analyser vos données sous la forme pratique de tableaux. [Numpy](https://numpy.org/) fournit des outils très rapides pour les opérations mathématiques, notamment sur les vecteurs et les matrices. [Seaborn](https://seaborn.pydata.org/), qui repose sur le package [Matplotlib](https://matplotlib.org/), permet de créer rapidement de belles visualisations de vos données. Il offre de nombreux paramètres par défaut pertinents et une galerie présentant des exemples de visualisations courantes.

Lorsque vous vous lancez dans un parcours pour devenir scientifique des données, le choix du langage n’est pas particulièrement important : Python et R ont tous deux leurs avantages et leurs inconvénients. Choisissez le langage qui vous plaît, puis consultez l’un des [cours gratuits](#free-courses) ci-dessous !

### Parcours pour débutants
Si vous débutez, voici un parcours simple recommandé :

1. **Apprenez Python** – Commencez par les bases : variables, boucles et fonctions.
2. **Apprenez les bibliothèques essentielles** – Pandas, NumPy, Matplotlib et Scikit-Learn.
3. **Entraînez-vous avec des projets pour débutants** – Essayez de prédire la survie sur le Titanic ou le prix de maisons sur Kaggle.
4. **Apprenez les bases des mathématiques** – Statistiques, algèbre linéaire et probabilités.
5. **Passez à l’apprentissage automatique** – Apprentissage supervisé → non supervisé → apprentissage profond.

## Agents

Cette section présente des infrastructures et outils d’agents utiles aux flux de travail en science des données.

### Infrastructures
- [ADK-Rust](https://github.com/zavora-ai/adk-rust) - Kit de développement d’agents IA prêt pour la production, écrit en Rust et conçu indépendamment des modèles (Gemini, OpenAI, Anthropic), avec plusieurs types d’agents (LLM, graphe, flux de travail), la prise en charge de MCP et une télémétrie intégrée.
- [Lumen](https://github.com/holoviz/lumen) - Infrastructure d’agent permettant de dialoguer avec des données et de convertir le langage naturel en SQL, en pipelines de transformation et en visualisations. Les résultats sont des spécifications déclaratives qu’on peut examiner, modifier, rouvrir dans un notebook ou combiner dans un tableau de bord.

### Outils
- [Frostbyte MCP](https://github.com/OzorOwn/frostbyte-mcp) - Serveur MCP fournissant 13 outils de données aux agents IA : cours des cryptomonnaies en temps réel, géolocalisation IP, recherches DNS, extraction Web vers Markdown, exécution de code et captures d’écran. Une seule clé API donne accès à plus de 40 services.
- [Arch Tools](https://archtools.dev) - 61 outils d’API IA prêts pour la production et destinés aux flux de travail de science des données : analyse de code, extraction Web, TAL, génération d’images, données crypto et recherche. Prise en charge des API REST et du protocole MCP. [GitHub](https://github.com/Deesmo/Arch-AI-Tools)
- [Not Human Search](https://nothumansearch.ai) - Moteur de recherche pour agents IA, indexant plus de 9 000 outils et API d’IA et évaluant leur aptitude à l’agentivité (llms.txt, OpenAPI, MCP, ai-plugin.json). API REST et serveur MCP pour découvrir des outils par programmation. [GitHub](https://github.com/unitedideas/nothumansearch)
- [DeepAlpha](https://github.com/stefanoviana/deepalpha) - Infrastructure de trading de cryptomonnaies par IA, utilisant un ensemble LightGBM + XGBoost et 72 caractéristiques d’apprentissage automatique. Précision de 70,9 % validée par marche en avant sur des données hors échantillon. Compatible avec Bybit et Binance. Sous licence MIT et disponible sur [PyPI](https://pypi.org/project/deepalpha-bot/).
- [CAJAL](https://github.com/Agnuxo1/CAJAL) - Agent IA local qui génère des articles scientifiques prêts à être publiés, avec de vraies citations arXiv, une structure IMRaD et une évaluation par jury. Fonctionne entièrement hors ligne avec Ollama et des modèles de 4 à 9 milliards de paramètres. Sous licence MIT. [HuggingFace](https://huggingface.co/Agnuxo/CAJAL-9B-P2PCLAW)
- [ai-evaluation](https://github.com/future-agi/ai-evaluation) - Infrastructure open source d’évaluation des LLM et des agents, avec plus de 50 indicateurs, une évaluation augmentée par LLM et des analyseurs de garde-fous (jailbreak, données personnelles, injection de prompt). Utile pour noter les résultats RAG, les trajectoires d’agents et les appels de fonctions dans les flux de travail de science des données.
- [Kitaru](https://github.com/zenml-io/kitaru) - Plateforme open source qui enregistre les exécutions réelles d’agents IA, les rejoue après des modifications et en évalue les résultats avant le déploiement.
- [Jev Social](https://github.com/socai-io/jev-social) - Agent de recherche sociale en lecture seule qui permet à Jev de choisir des opérations délimitées sur Instagram, TikTok et LinkedIn. Il les exécute avec l’interface CLI locale socai dans Chrome et conserve les preuves associées aux sources à côté d’un rapport référencé.
- [YYLO Benchmark](https://github.com/yylo-dev/yylo-benchmark) - Outil open source d’exécution d’expériences sur des hôtes de confiance pour les tâches historiques d’agents, les prompts de programmation fournis et les flux de travail. Il lance des essais indépendants dont il conserve les résultats, puis permet de comparer ultérieurement les modèles, infrastructures et configurations à l’aide de contrôles ou d’évaluateurs différents. Sous licence MIT.
- [YYLO](https://github.com/yylo-dev/yylo) - Orchestrateur en ligne de commande open source pour agents de programmation et flux de travail reproductibles, avec des étapes bien définies pour les tâches, la validation, la fusion et l’état de préparation des versions, ainsi que des modifications de dépôt accompagnées de justificatifs. Sous licence MIT, installable via npm.
- [YYLO Ledger](https://github.com/yylo-dev/yylo-ledger) - Registre de tâches et de flux de travail en ligne de commande pour les projets faisant appel à des agents de programmation : il stocke le tableau Kanban et l’état des tâches dans des fichiers Markdown chaînés par hachage au sein du dépôt, suit les justificatifs et les archives, et pilote les processus de fusion et de publication typés entre les espaces de travail des agents. Sous licence MIT.

### Recherche et récupération de connaissances
- [BGPT MCP](https://bgpt.pro/mcp) - Serveur MCP qui donne aux agents IA accès à une base de publications scientifiques constituée à partir de données expérimentales brutes extraites des textes intégraux des études. Il renvoie plus de 25 champs structurés par article, notamment les méthodes, résultats, tailles d’échantillon et scores de qualité. [GitHub](https://github.com/connerlambden/bgpt-mcp)
- [Chunk Tuner](https://github.com/shantanu-deshmukh/chunktuner) - Bibliothèque Python open source et serveur MCP permettant de comparer des stratégies de segmentation de documents pour le RAG, d’évaluer la qualité de la récupération et de recommander des configurations adaptées à un corpus.
- [II-Commons](https://github.com/Intelligent-Internet/II-Commons-Skills) - Compétence et interface en ligne de commande, mises à jour quotidiennement, pour une récupération déterministe dans arXiv, PubMed/PMC et les corpus de politiques publiques américaines pris en charge.
- [Spraay x402 Gateway](https://docs.spraay.app/#cat-research) - Passerelle de paiement x402 proposant aux agents IA 23 points de terminaison de recherche et de référence : Wikipédia, arXiv, PubMed, Wikidata, recherche de citations universitaires, extraction d’entités, etc. Paiement à l’appel en USDC sur Base et Solana, sans clé API ni abonnement. Propose également plus de 150 points de terminaison dans 39 catégories, notamment la géospatiale, l’inférence IA, la DeFi et le calcul. [GitHub](https://github.com/plagtech)

- [Suppr](https://suppr.wilddata.cn/) - Espace de travail de recherche bibliographique, de traduction de documents et de recherche approfondie par IA destiné aux chercheurs.

### Flux de travail
**[`^        retour en haut        ^`](#awesome-data-science)**
- [sim](https://sim.ai) - L’interface de Sim Studio est légère et intuitive, et permet de créer et déployer rapidement des LLM connectés à vos outils préférés.

## Projets
**[`^        retour en haut        ^`](#awesome-data-science)**

- [Synthetic Hospital](https://github.com/sparkcpark/synthetic_hospital) - Plateforme de simulation de dossiers médicaux et de référence médicale synthétique

## Ressources de formation
**[`^        retour en haut        ^`](#awesome-data-science)**

Comment apprendre la science des données ? En pratiquant, bien sûr ! Bon, d’accord, ce n’est peut-être pas très utile quand on débute. Cette section répertorie des ressources d’apprentissage, classées à peu près de l’investissement le plus faible au plus important : [tutoriels](#tutorials), [cours en ligne ouverts et massifs (MOOC)](#moocs), [programmes intensifs](#intensive-programs) et [établissements d’enseignement supérieur](#colleges).


### Tutoriels
**[`^        retour en haut        ^`](#awesome-data-science)**

- [1000 Data Science Projects](https://cloud.blobcity.com/#/ps/explore) - 1 000 projets de science des données à exécuter dans le navigateur avec IPython.
- [#tidytuesday](https://github.com/rfordatascience/tidytuesday) - Projet de données hebdomadaire destiné à l’écosystème R.
- [La science des données à votre façon](https://github.com/jadianes/data-science-your-way)
- [Fiches mémo DataCamp](https://www.datacamp.com/cheat-sheet) Fiches mémo consacrées à la science des données.
- [Fiche mémo PySpark](https://github.com/kevinschaich/pyspark-cheatsheet)
- [Machine Learning, Data Science and Deep Learning with Python ](https://www.manning.com/livevideo/machine-learning-data-science-and-deep-learning-with-python)
- [TutorialSearch](https://tutorialsearch.io/) - Moteur de recherche gratuit et multiplateforme qui indexe plus de 50 000 tutoriels provenant d’Udemy, Skillshare, Pluralsight et d’autres grandes plateformes de formation, dans plus de 45 catégories.
- [Your Guide to Latent Dirichlet Allocation](https://medium.com/@lettier/how-does-lda-work-ill-explain-using-emoji-108abf40fa7d)
- [Tutoriels sur le code source du livre Genetic Algorithms with Python de Clinton Sheppard](https://github.com/handcraftsman/GeneticAlgorithmsWithPython)
- [Tutoriels pour débuter le traitement du signal en apprentissage automatique](https://github.com/jinglescode/python-signal-processing)
- [Déploiement en temps réel](https://www.microprediction.com/python-1) Tutoriel sur le déploiement de modèles de séries temporelles Python.
- [Python pour la science des données : guide du débutant](https://learntocodewith.me/posts/python-for-data-science/)
- [Plan d’étude minimal pour les entretiens en apprentissage automatique](https://github.com/khangich/machine-learning-interview)
- [Comprendre et maîtriser l’ingénierie de l’apprentissage automatique en réalisant des projets solides](https://mlzoomcamp.com/)
- [12 projets gratuits de science des données pour pratiquer Python et Pandas](https://www.datawars.io/articles/12-free-data-science-projects-to-practice-python-and-pandas)
- [Meilleur CV pour les débutants en science des données](https://enhancv.com/resume-examples/data-scientist/)
- [Comprendre la science des données : cours Java](https://www.alter-solutions.com/articles/java-data-science)
- [Questions d’entretien en analytique des données (du niveau débutant au niveau avancé)](https://www.appliedaicourse.com/blog/data-analytics-interview-questions/)
- [Plus de 100 questions et réponses d’entretien en science des données](https://www.appliedaicourse.com/blog/data-science-interview-questions/)
- [DataDriven - Questions d’entretien sur SQL, Python et la modélisation des données](https://www.datadriven.io/)
- [StepByStepML](https://www.stepbystepml.com) - Calculatrice interactive qui illustre les calculs manuels, étape par étape, derrière les algorithmes d’apprentissage automatique, pour préparer les examens.
- [Comment créer des agents IA optimaux qui fonctionnent vraiment](https://www.freecodecamp.org/news/how-to-build-optimal-ai-agents-that-actually-work-a-handbook-for-devs/) - Guide destiné aux développeurs pour concevoir et créer des agents IA efficaces.
- [Entraîner un LLM à partir de zéro](https://github.com/FareedKhan-dev/train-llm-from-scratch) - Méthode simple pour entraîner votre LLM, du téléchargement des données à la génération de texte.

### Cours gratuits
**[`^        retour en haut        ^`](#awesome-data-science)**

- [Science des données](https://github.com/ossu/data-science) - Open Source Society University
- [Scientifique des données avec R](https://www.datacamp.com/tracks/data-scientist-with-r)
- [Scientifique des données avec Python](https://www.datacamp.com/tracks/data-scientist-with-python)
- [Cours OCW sur les algorithmes génétiques](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-1-introduction-and-scope/)
- [Parcours pour devenir expert en IA](https://github.com/AMAI-GmbH/AI-Expert-Roadmap) - Feuille de route pour devenir spécialiste de l’intelligence artificielle.
- [Optimisation convexe](https://www.edx.org/course/convex-optimization) - Optimisation convexe (bases de l’analyse convexe ; moindres carrés, programmes linéaires et quadratiques, programmation semi-définie, minimax, volume extrémal et autres problèmes ; conditions d’optimalité, théorie de la dualité…)
- [Apprendre à partir des données](https://home.work.caltech.edu/telecourse.html) - Introduction à l’apprentissage automatique couvrant la théorie de base, les algorithmes et leurs applications.
- [Kaggle](https://www.kaggle.com/learn) - Découvrez la science des données, l’apprentissage automatique, Python, etc.
- [Principes fondamentaux de l’observabilité du ML](https://arize.com/ml-observability-fundamentals/) - Apprenez à surveiller les problèmes de ML en production et à en déterminer les causes profondes.
- [Effective MLOps: Model Development de Weights & Biases](https://www.wandb.courses/courses/effective-mlops-model-development) - Cours et certification gratuits pour créer une machine de bout en bout avec W&B.
- [Python pour la science des données par Scaler](https://www.scaler.com/topics/course/python-for-data-science/) - Ce cours vise à donner aux débutants les compétences essentielles pour réussir dans le monde actuel, guidé par les données. Son programme complet vous donnera de solides bases en statistiques, programmation, visualisation des données et apprentissage automatique.
- [MLSys-NYU-2022](https://github.com/jacopotagliabue/MLSys-NYU-2022/tree/main) - Diapositives, scripts et documents du cours d’apprentissage automatique en finance de NYU Tandon, 2022.
- [Entraîner et déployer un modèle de ML en pratique](https://github.com/Paulescu/hands-on-train-and-deploy-ml) - Cours pratique pour entraîner et déployer une API sans serveur qui prédit le cours des cryptomonnaies.
- [LLMOps : créer des applications concrètes avec de grands modèles de langage](https://www.comet.com/site/llm-course/) - Apprenez à créer des logiciels modernes avec des LLM grâce aux outils et techniques les plus récents du domaine.
- [Ingénierie de prompts pour les modèles de vision](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - Apprenez à guider des modèles de vision par ordinateur de pointe à l’aide du langage naturel, de points de coordonnées, de cadres de délimitation, de masques de segmentation et même d’autres images, dans ce cours gratuit de DeepLearning.AI.
- [Cours de science des données d’IBM](https://skillsbuild.org/students/course-catalog/data-science) - Ressources gratuites pour découvrir ce qu’est la science des données et comment elle est utilisée dans différents secteurs.
- [Réseaux de neurones : de zéro à héros](https://karpathy.ai/zero-to-hero.html) - Série vidéo gratuite d’Andrej Karpathy sur les réseaux de neurones, de zéro : rétropropagation, makemore, GPT et bien plus.



### MOOC
**[`^        retour en haut        ^`](#awesome-data-science)**

- [Introduction à la science des données de Coursera](https://www.coursera.org/specializations/data-science)
- [Science des données - Spécialisation Coursera en 9 cours](https://www.coursera.org/specializations/jhu-data-science)
- [Exploration de données - Spécialisation Coursera en 5 cours](https://www.coursera.org/specializations/data-mining)
- [Apprentissage automatique – Spécialisation Coursera en 5 cours](https://www.coursera.org/specializations/machine-learning)
- [CS 109 Science des données](https://cs109.github.io/2015/)
- [OpenIntro](https://www.openintro.org/)
- [CS 171 Visualisation](https://www.cs171.org/#!index.md)
- [Exploration de processus : la science des données en action](https://www.coursera.org/learn/process-mining)
- [Apprentissage profond à Oxford](https://www.cs.ox.ac.uk/projects/DeepLearn/)
- [Apprentissage profond à Oxford - vidéos](https://www.youtube.com/playlist?list=PLE6Wd9FR--EfW8dtjAuPoTuPcqmOV53Fu)
- [Apprentissage automatique à Oxford](https://www.cs.ox.ac.uk/research/ai_ml/index.html)
- [Apprentissage automatique à UBC - vidéos](https://www.cs.ubc.ca/~nando/540-2013/lectures.html)
- [Spécialisation en science des données](https://github.com/DataScienceSpecialization/courses)
- [Spécialisation Big Data de Coursera](https://www.coursera.org/specializations/big-data)
- [La pensée statistique pour la science et l’analyse des données par EdX](https://www.edx.org/course/statistical-thinking-for-data-science-and-analytic)
- [Cognitive Class AI d’IBM](https://cognitiveclass.ai/)
- [Udacity - Apprentissage profond](https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187)
- [Keras en action](https://www.manning.com/livevideo/keras-in-motion)
- [Programme professionnel Microsoft en science des données](https://academy.microsoft.com/en-us/professional-program/tracks/data-science/)
- [COMP3222/COMP6246 - Technologies d’apprentissage automatique](https://tdgunes.com/COMP6246-2019Fall/)
- [CS 231 - Réseaux neuronaux convolutifs pour la reconnaissance visuelle](https://cs231n.github.io/)
- [TensorFlow en pratique sur Coursera](https://www.coursera.org/professional-certificates/tensorflow-in-practice)
- [Spécialisation en apprentissage profond de Coursera](https://www.coursera.org/specializations/deep-learning)
- [Cours de science des données de 365 Data Science](https://365datascience.com/)
- [Spécialisation en traitement du langage naturel de Coursera](https://www.coursera.org/specializations/natural-language-processing)
- [Spécialisation GAN de Coursera](https://www.coursera.org/specializations/generative-adversarial-networks-gans)
- [Science des données de Codecademy](https://www.codecademy.com/learn/paths/data-science)
- [Algèbre linéaire](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/) - Cours d’algèbre linéaire de Gilbert Strang
- [Une vision de l’algèbre linéaire en 2020 (G. Strang)](https://ocw.mit.edu/resources/res-18-010-a-2020-vision-of-linear-algebra-spring-2020/)
- [Cours fondamental de Python pour la science des données](https://intellipaat.com/academy/course/python-for-data-science-free-training/)
- [Science des données : statistiques et apprentissage automatique](https://www.coursera.org/specializations/data-science-statistics-machine-learning)
- [Ingénierie de l’apprentissage automatique en production (MLOps)](https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops)
- [Spécialisation en systèmes de recommandation de l’Université du Minnesota](https://www.coursera.org/specializations/recommender-systems) : spécialisation de niveau intermédiaire à avancé consacrée aux systèmes de recommandation sur la plateforme Coursera.
- [Programme professionnel d’intelligence artificielle de Stanford](https://online.stanford.edu/programs/artificial-intelligence-professional-program)
- [Scientifique des données avec Python](https://app.datacamp.com/learn/career-tracks/data-scientist-with-python)
- [Programmer avec Julia](https://www.udemy.com/course/programming-with-julia/)
- [Programme Science des données et apprentissage automatique de Scaler](https://www.scaler.com/data-science-course/)
- [Arbre de compétences en science des données](https://labex.io/skilltrees/data-science)
- [La science des données pour débutants - Apprendre avec un tuteur IA](https://codekidz.ai/lesson-intro/data-science-368dbf)
- [L’apprentissage automatique pour débutants - Apprendre avec un tuteur IA](https://codekidz.ai/lesson-intro/machine-lear-36abfb)
- [Introduction à la science des données](https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-data-science)
-[Bien débuter avec Python pour la science des données](https://www.codecademy.com/learn/getting-started-with-python-for-data-science)
- [Certificat Google Advanced Data Analytics](https://grow.google/data-analytics/) – Cours professionnels sur l’analyse des données, les statistiques et les bases de l’apprentissage automatique.
- [Analyse de l’usage linguistique par des méthodes automatiques - Fondements de la linguistique de corpus](https://www.twillo.de/edu-sharing/components/collections?id=e6ce03ae-4660-49b0-be10-dcc92e71e796) - Matériel de cours sur l’exploration de textes et la linguistique de corpus, *en allemand*, financé par le Land de Rhénanie-du-Nord-Westphalie.
- [Programmer pour les études germaniques](https://www.twillo.de/edu-sharing/components/collections?id=16bac749-f10e-483f-9020-5d6365b4e092) - Matériel de cours : programmation en Python, *en allemand*, pour les humanités numériques ; financé par le Land de Rhénanie-du-Nord-Westphalie.
- [QuiddityML](https://quiddityml.com/?utm_source=github&utm_medium=awesome&utm_campaign=awesome-datascience) - Courtes leçons avec exercices pratiques de programmation et répétition espacée, couvrant Python, PyTorch, les mathématiques pour le ML, les bases du ML, le TAL et la vision par ordinateur.

### Programmes intensifs
**[`^        retour en haut        ^`](#awesome-data-science)**
- [Programmes de science des données de Great Learning](https://www.mygreatlearning.com/data-science/courses) - Ensemble de programmes en ligne de certification, de troisième cycle et diplômants en science des données et analytique.
- [S2DS](https://www.s2ds.org/)
- [Laboratoire de science des données appliquée de WorldQuant University](https://www.wqu.edu/adsl)


### Établissements d’enseignement supérieur
**[`^        retour en haut        ^`](#awesome-data-science)**

- [Liste d’établissements et d’universités proposant des diplômes en science des données](https://github.com/ryanswanstrom/awesome-datascience-colleges)
- [Diplôme en science des données à Berkeley](https://ischoolonline.berkeley.edu/data-science/)
- [Diplôme en science des données à UVA](https://datascience.virginia.edu/)
- [Diplôme en science des données au Wisconsin](https://datasciencedegree.wisconsin.edu/)
- [Licence en science des données et applications](https://study.iitm.ac.in/ds/)
- [Maîtrise en systèmes informatiques à l’Université de Boston](https://www.bu.edu/online/programs/graduate-programs/computer-information-systems-masters-degree/)
- [Maîtrise en analytique d’entreprise à ASU Online](https://asuonline.asu.edu/online-degree-programs/graduate/master-science-business-analytics/)
- [Maîtrise en science des données appliquée à Syracuse](https://ischool.syr.edu/academics/applied-data-science-masters-degree/)
- [M.S. en gestion et science des données à Leuphana](https://www.leuphana.de/en/graduate-school/masters-programmes/management-data-science.html)
- [Maîtrise en science des données à l’Université de Melbourne](https://study.unimelb.edu.au/find/courses/graduate/master-of-data-science/#overview)
- [Maîtrise en science des données à l’Université d’Édimbourg](https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&id=902)
- [Maîtrise en analytique de gestion à l’Université Queen’s](https://smith.queensu.ca/grad_studies/mma/index.php)
- [Maîtrise en science des données à l’Illinois Institute of Technology](https://www.iit.edu/academics/programs/data-science-mas)
- [Maîtrise en science des données appliquée à l’Université du Michigan](https://www.si.umich.edu/programs/master-applied-data-science)
- [Maîtrise en science des données et intelligence artificielle à l’Université de technologie d’Eindhoven](https://www.tue.nl/en/education/graduate-school/master-data-science-and-artificial-intelligence/)
- [Maîtrise en science des données et ingénierie informatique à l’Université de Grenade](https://masteres.ugr.es/datcom/)

## La boîte à outils de la science des données
**[`^        retour en haut        ^`](#awesome-data-science)**

Cette section rassemble des packages, outils, algorithmes et autres ressources utiles dans le domaine de la science des données.

### Algorithmes
**[`^        retour en haut        ^`](#awesome-data-science)**

Voici quelques algorithmes et modèles d’apprentissage automatique et d’exploration de données qui vous aideront à comprendre vos données et à en dégager du sens.

#### Trois types de systèmes d’apprentissage automatique

- Fondés sur un entraînement avec supervision humaine
- Fondés sur l’apprentissage incrémental en temps réel
- Fondés sur la comparaison de points de données et la détection de motifs

### Comparaison
- [datacompy](https://github.com/capitalone/datacompy) - DataComPy est un package permettant de comparer deux DataFrames Pandas.

#### Apprentissage supervisé

- [Régression](https://en.wikipedia.org/wiki/Regression)
- [Régression linéaire](https://en.wikipedia.org/wiki/Linear_regression)
- [Moindres carrés ordinaires](https://en.wikipedia.org/wiki/Ordinary_least_squares)
- [Régression logistique](https://en.wikipedia.org/wiki/Logistic_regression)
- [Régression pas à pas](https://en.wikipedia.org/wiki/Stepwise_regression)
- [Régression adaptative multivariée par splines](https://en.wikipedia.org/wiki/Multivariate_adaptive_regression_spline)
- [Régression softmax](https://d2l.ai/chapter_linear-classification/softmax-regression.html)
- [Lissage de nuage de points par estimation locale](https://en.wikipedia.org/wiki/Local_regression)
- Classification
  - [k plus proches voisins](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
  - [Machines à vecteurs de support](https://en.wikipedia.org/wiki/Support_vector_machine)
  - [Arbres de décision](https://en.wikipedia.org/wiki/Decision_tree)
  - [Algorithme ID3](https://en.wikipedia.org/wiki/ID3_algorithm)
  - [Algorithme C4.5](https://en.wikipedia.org/wiki/C4.5_algorithm)
- [Apprentissage par ensemble](https://scikit-learn.org/stable/modules/ensemble.html)
  - [Boosting](https://en.wikipedia.org/wiki/Boosting_(machine_learning))
  - [Empilement (stacking)](https://machinelearningmastery.com/stacking-ensemble-machine-learning-with-python)
  - [Agrégation par bootstrap (bagging)](https://en.wikipedia.org/wiki/Bootstrap_aggregating)
  - [Forêt aléatoire](https://en.wikipedia.org/wiki/Random_forest)
  - [AdaBoost](https://en.wikipedia.org/wiki/AdaBoost)

#### Apprentissage non supervisé
- [Regroupement (clustering)](https://scikit-learn.org/stable/modules/clustering.html#clustering)
  - [Regroupement hiérarchique](https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering)
  - [k-moyennes](https://scikit-learn.org/stable/modules/clustering.html#k-means)
  - [Regroupement fondé sur la densité](https://scikit-learn.org/stable/modules/clustering.html#dbscan)
  - [Regroupement flou](https://en.wikipedia.org/wiki/Fuzzy_clustering)
  - [Modèles de mélange](https://en.wikipedia.org/wiki/Mixture_model)
- [Réduction de dimensionnalité](https://en.wikipedia.org/wiki/Dimensionality_reduction)
  - [Analyse en composantes principales (ACP)](https://scikit-learn.org/stable/modules/decomposition.html#principal-component-analysis-pca)
  - [t-SNE ; plongement stochastique de voisins à loi t](https://scikit-learn.org/stable/modules/manifold.html#t-distributed-stochastic-neighbor-embedding-tsne)
  - [Analyse factorielle](https://scikit-learn.org/stable/modules/decomposition.html#factor-analysis)
  - [Allocation de Dirichlet latente (LDA)](https://scikit-learn.org/stable/modules/decomposition.html#latent-dirichlet-allocation-lda)
- [Réseaux de neurones](https://en.wikipedia.org/wiki/Neural_network)
- [Carte auto-organisatrice](https://en.wikipedia.org/wiki/Self-organizing_map)
- [Théorie de la résonance adaptative](https://en.wikipedia.org/wiki/Adaptive_resonance_theory)
- [Modèles de Markov cachés (MMC)](https://en.wikipedia.org/wiki/Hidden_Markov_model)

#### Apprentissage semi-supervisé

- S3VM
- [Regroupement (clustering)](https://en.wikipedia.org/wiki/Weak_supervision#Cluster_assumption)
- [Modèles génératifs](https://en.wikipedia.org/wiki/Weak_supervision#Generative_models)
- [Séparation à faible densité](https://en.wikipedia.org/wiki/Weak_supervision#Low-density_separation)
- [Régularisation laplacienne](https://en.wikipedia.org/wiki/Weak_supervision#Laplacian_regularization)
- [Approches heuristiques](https://en.wikipedia.org/wiki/Weak_supervision#Heuristic_approaches)

#### Apprentissage par renforcement

- [Apprentissage Q](https://en.wikipedia.org/wiki/Q-learning)
- [Algorithme SARSA (état-action-récompense-état-action)](https://en.wikipedia.org/wiki/State%E2%80%93action%E2%80%93reward%E2%80%93state%E2%80%93action)
- [Apprentissage par différence temporelle](https://en.wikipedia.org/wiki/Temporal_difference_learning#:~:text=Temporal%20difference%20(TD)%20learning%20refers,estimate%20of%20the%20value%20function.)

#### Algorithmes d’exploration de données

- [C4.5](https://en.wikipedia.org/wiki/C4.5_algorithm)
- [k-moyennes](https://en.wikipedia.org/wiki/K-means_clustering)
- [SVM (machine à vecteurs de support)](https://en.wikipedia.org/wiki/Support_vector_machine)
- [Apriori](https://en.wikipedia.org/wiki/Apriori_algorithm)
- [EM (espérance-maximisation)](https://en.wikipedia.org/wiki/Expectation%E2%80%93maximization_algorithm)
- [PageRank](https://en.wikipedia.org/wiki/PageRank)
- [AdaBoost](https://en.wikipedia.org/wiki/AdaBoost)
- [KNN (k plus proches voisins)](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
- [Bayes naïf](https://en.wikipedia.org/wiki/Naive_Bayes_classifier)
- [CART (arbres de classification et de régression)](https://en.wikipedia.org/wiki/Decision_tree_learning)
#### Algorithmes modernes d’exploration de données

- [XGBoost (boosting extrême par gradient)](https://en.wikipedia.org/wiki/XGBoost)
- [LightGBM (machine de boosting léger par gradient)](https://en.wikipedia.org/wiki/LightGBM)
- [CatBoost](https://catboost.ai/)
- [HDBSCAN (regroupement spatial hiérarchique fondé sur la densité avec bruit)](https://en.wikipedia.org/wiki/DBSCAN#HDBSCAN)
- [FP-Growth (algorithme de croissance des motifs fréquents)](https://en.wikipedia.org/wiki/Association_rule_learning#FP-growth_algorithm)
- [Forêt d’isolation](https://en.wikipedia.org/wiki/Isolation_forest)
- [Regroupement profond par plongement (DEC)](https://arxiv.org/abs/1511.06335)
- [TPU (motifs périodiques de premier rang et à forte utilité)](https://arxiv.org/abs/2509.15732)
- [Exploration de règles contextuelles (infrastructure fondée sur les transformeurs)](https://arxiv.org/abs/2503.11125)


#### Architectures d’apprentissage profond

- [Perceptron multicouche](https://en.wikipedia.org/wiki/Multilayer_perceptron)
- [Réseau neuronal convolutif (CNN)](https://en.wikipedia.org/wiki/Convolutional_neural_network)
- [Réseau neuronal récurrent (RNN)](https://en.wikipedia.org/wiki/Recurrent_neural_network)
- [Machines de Boltzmann](https://en.wikipedia.org/wiki/Boltzmann_machine)
- [Autoencodeur](https://www.tensorflow.org/tutorials/generative/autoencoder)
- [Réseau antagoniste génératif (GAN)](https://developers.google.com/machine-learning/gan/gan_structure)
- [Cartes auto-organisatrices](https://en.wikipedia.org/wiki/Self-organizing_map)
- [Transformeur](https://www.tensorflow.org/text/tutorials/transformer)
- [Champ aléatoire conditionnel (CRF)](https://towardsdatascience.com/conditional-random-fields-explained-e5b8256da776)
- [Conception de systèmes de ML)](https://www.evidentlyai.com/ml-system-design)

### Packages généralistes d’apprentissage automatique
**[`^        retour en haut        ^`](#awesome-data-science)**

* [scikit-learn](https://scikit-learn.org/)
* [scikit-multilearn](https://github.com/scikit-multilearn/scikit-multilearn)
* [sklearn-expertsys](https://github.com/tmadl/sklearn-expertsys)
* [scikit-feature](https://github.com/jundongl/scikit-feature)
* [scikit-rebate](https://github.com/EpistasisLab/scikit-rebate)
* [seqlearn](https://github.com/larsmans/seqlearn)
* [sklearn-bayes](https://github.com/AmazaspShumik/sklearn-bayes)
* [sklearn-crfsuite](https://github.com/TeamHG-Memex/sklearn-crfsuite)
* [sklearn-deap](https://github.com/rsteca/sklearn-deap)
* [sigopt_sklearn](https://github.com/sigopt/sigopt-sklearn)
* [sklearn-evaluation](https://github.com/edublancas/sklearn-evaluation)
* [scikit-image](https://github.com/scikit-image/scikit-image)
* [scikit-opt](https://github.com/guofei9987/scikit-opt)
* [scikit-posthocs](https://github.com/maximtrp/scikit-posthocs)
* [feature-engine](https://feature-engine.trainindata.com/)
* [me_fasttext](https://github.com/initial-d/me_fasttext) - Variante de FastText économe en mémoire, avec identifiants n-grammes exacts basés sur un trie, partage de lignes tenant compte de la structure et service par mmap pour le TAL à grand vocabulaire.
* [pystruct](https://github.com/pystruct/pystruct)
* [Shogun](https://www.shogun-toolbox.org/)
* [xLearn](https://github.com/aksnzhy/xlearn)
* [cuML](https://github.com/rapidsai/cuml)
* [causalml](https://github.com/uber/causalml)
* [mlpack](https://github.com/mlpack/mlpack)
* [MLxtend](https://github.com/rasbt/mlxtend)
* [modAL](https://github.com/modAL-python/modAL)
* [Sparkit-learn](https://github.com/lensacom/sparkit-learn)
* [hyperlearn](https://github.com/danielhanchen/hyperlearn)
* [dlib](https://github.com/davisking/dlib)
* [imodels](https://github.com/csinva/imodels)
* [jSciPy](https://github.com/hissain/jscipy) - Portage en Java du module de traitement du signal de SciPy, proposant des filtres, des transformations et d’autres utilitaires de calcul scientifique.
* [RuleFit](https://github.com/christophM/rulefit)
* [pyGAM](https://github.com/dswah/pyGAM)
* [Deepchecks](https://github.com/deepchecks/deepchecks)
* [scikit-survival](https://scikit-survival.readthedocs.io/en/stable)
* [interpretable](https://pypi.org/project/interpretable)
* [XGBoost](https://github.com/dmlc/xgboost)
* [LightGBM](https://github.com/microsoft/LightGBM)
* [CatBoost](https://github.com/catboost/catboost)
* [PerpetualBooster](https://github.com/perpetual-ml/perpetual)
* [JAX](https://github.com/google/jax)
* [PhilanthroPy](https://github.com/PhilanthroPy-Project/PhilanthroPy) - Boîte à outils native de scikit-learn pour l’analyse de collecte de fonds des organismes sans but lucratif : estimateurs sans fuite de données pour la propension des donateurs, l’interruption des dons, les dons planifiés, l’évaluation du patrimoine et la prévision des revenus.



### Packages d’apprentissage profond

#### Écosystème PyTorch
* [PyTorch](https://github.com/pytorch/pytorch)
* [TorchDR](https://github.com/TorchDR/TorchDR) - Réduction de dimensionnalité sur GPU et multi-GPU avec une API compatible avec scikit-learn.
* [torchvision](https://github.com/pytorch/vision)
* [torchtext](https://github.com/pytorch/text)
* [torchaudio](https://github.com/pytorch/audio)
* [ignite](https://github.com/pytorch/ignite)
* [PyTorchNet](https://github.com/pytorch/tnt)
* [PyToune](https://github.com/GRAAL-Research/poutyne)
* [skorch](https://github.com/skorch-dev/skorch)
* [PyVarInf](https://github.com/ctallec/pyvarinf)
* [pytorch_geometric](https://github.com/pyg-team/pytorch_geometric)
* [GPyTorch](https://github.com/cornellius-gp/gpytorch)
* [pyro](https://github.com/pyro-ppl/pyro)
* [Catalyst](https://github.com/catalyst-team/catalyst)
* [pytorch_tabular](https://github.com/manujosephv/pytorch_tabular)
* [Yolov3](https://github.com/ultralytics/yolov3)
* [Yolov5](https://github.com/ultralytics/yolov5)
* [Yolov8](https://github.com/ultralytics/ultralytics)
* [OpenLanguageModel](https://github.com/openlanguagemodel/openlanguagemodel) - Bibliothèque native PyTorch pour créer, entraîner et enseigner des modèles de langage transformeurs, avec des architectures écrites sous forme de modules nn ordinaires.

#### Écosystème TensorFlow
* [TensorFlow](https://github.com/tensorflow/tensorflow)
* [TensorLayer](https://github.com/tensorlayer/TensorLayer)
* [TFLearn](https://github.com/tflearn/tflearn)
* [Sonnet](https://github.com/deepmind/sonnet)
* [tensorpack](https://github.com/tensorpack/tensorpack)
* [TRFL](https://github.com/deepmind/trfl)
* [Polyaxon](https://github.com/polyaxon/polyaxon)
* [NeuPy](https://github.com/itdxer/neupy)
* [tfdeploy](https://github.com/riga/tfdeploy)
* [tensorflow-upstream](https://github.com/ROCmSoftwarePlatform/tensorflow-upstream)
* [TensorFlow Fold](https://github.com/tensorflow/fold)
* [tensorlm](https://github.com/batzner/tensorlm)
* [TensorLight](https://github.com/bsautermeister/tensorlight)
* [Mesh TensorFlow](https://github.com/tensorflow/mesh)
* [Ludwig](https://github.com/ludwig-ai/ludwig)
* [TF-Agents](https://github.com/tensorflow/agents)
* [TensorForce](https://github.com/tensorforce/tensorforce)

#### Écosystème Keras

* [Keras](https://keras.io)
* [keras-contrib](https://github.com/keras-team/keras-contrib)
* [Hyperas](https://github.com/maxpumperla/hyperas)
* [Elephas](https://github.com/maxpumperla/elephas)
* [Hera](https://github.com/keplr-io/hera)
* [Spektral](https://github.com/danielegrattarola/spektral)
* [qkeras](https://github.com/google/qkeras)
* [keras-rl](https://github.com/keras-rl/keras-rl)
* [Talos](https://github.com/autonomio/talos)

#### Outils de visualisation
**[`^        retour en haut        ^`](#awesome-data-science)**

- [altair](https://altair-viz.github.io/)
- [amcharts](https://www.amcharts.com/)
- [anychart](https://www.anychart.com/)
- [bokeh](https://bokeh.org/)
- [Comet](https://www.comet.com/site/products/ml-experiment-tracking/?utm_source=awesome-datascience)
- [slemma](https://slemma.com/)
- [cartodb](https://cartodb.github.io/odyssey.js/)
- [Cube](https://square.github.io/cube/)
- [d3plus](https://d3plus.org/)
- [Documents pilotés par les données (D3js)](https://d3js.org/)
- [dygraphs](https://dygraphs.com/)
- [exhibit](https://www.simile-widgets.org/exhibit/)
- [gephi](https://gephi.org/)
- [ggplot2](https://ggplot2.tidyverse.org/)
- [Glue](https://docs.glueviz.org/en/latest/index.html)
- [Galerie de graphiques Google](https://developers.google.com/chart/interactive/docs/gallery)
- [Highcharts](https://www.highcharts.com/)
- [import.io](https://www.import.io/)
- [Matplotlib](https://matplotlib.org/)
- [nvd3](https://nvd3.org/)
- [Netron](https://github.com/lutzroeder/netron)
- [Openrefine](https://openrefine.org/)
- [plot.ly](https://plot.ly/)
- [raw](https://rawgraphs.io)
- [Resseract Lite](https://github.com/abistarun/resseract-lite)
- [Seaborn](https://seaborn.pydata.org/)
- [techanjs](https://techanjs.org/)
- [Timeline](https://timeline.knightlab.com/)
- [variancecharts](https://variancecharts.com/index.html)
- [vida](https://vida.io/)
- [vizzu](https://github.com/vizzuhq/vizzu-lib)
- [Wrangler](https://vis.stanford.edu/wrangler/)
- [r2d3](https://www.r2d3.us/visual-intro-to-machine-learning-part-1/)
- [NetworkX](https://networkx.org/)
- [Redash](https://redash.io/)
- [Metabase](https://www.metabase.com/)
- [C3](https://c3js.org/)
- [TensorWatch](https://github.com/microsoft/tensorwatch)
- [geomap](https://pypi.org/project/geomap/)
- [Dash](https://plotly.com/dash/)
- [MetaReview](https://metareview-8c1.pages.dev/) - Plateforme gratuite de méta-analyse en ligne avec 11 graphiques statistiques D3.js interactifs (diagramme en forêt, graphique en entonnoir, Galbraith, L’Abbé, Baujat, etc.), 5 mesures de taille d’effet, examen de la littérature par IA et export de rapports prêts à publier. [github.com](https://github.com/TerryFYL/metareview)
- [torchvista](https://github.com/sachinhosmani/torchvista) - Outil interactif intégré aux notebooks pour visualiser la passe avant de n’importe quel modèle PyTorch.
- [FlexViz](https://github.com/flex-analytics/flexviz) - Bibliothèque Python pour créer des tableaux de bord interactifs à filtres croisés, qui restent réactifs sur plus de 100 millions de lignes en agrégeant les données côté serveur avec Polars.

### Outils divers
**[`^        retour en haut        ^`](#awesome-data-science)**

| Lien | Description |
| --- | --- |
| [The Data Science Lifecycle Process](https://github.com/dslp/dslp) | Le processus du cycle de vie de la science des données aide les équipes à transformer des idées en valeur de façon répétée et durable. Il est documenté dans ce dépôt. |
| [Data Science Lifecycle Template Repo](https://github.com/dslp/dslp-repo-template) | Modèle de dépôt pour les projets couvrant le cycle de vie de la science des données. |
| [TabGAN](https://github.com/Diyago/Tabular-data-generation) | Génération de données tabulaires synthétiques à l’aide de GAN, de modèles de diffusion et de LLM, avec filtrage antagoniste et mesures de confidentialité. |
| [RexMex](https://github.com/AstraZeneca/rexmex) | Bibliothèque généraliste de mesures pour systèmes de recommandation, destinée à une évaluation équitable. |
| [ChemicalX](https://github.com/AstraZeneca/chemicalx) | Bibliothèque d’apprentissage profond fondée sur PyTorch pour évaluer des paires de médicaments. |
| [FileShot.io](https://github.com/FileShot/FileShotZKE) | Partage sécurisé de fichiers chiffrés à connaissance nulle (AES-256-GCM dans le navigateur). Aucun compte requis ; sous licence MIT, auto-hébergeable, avec expiration facultative des liens. |
| [CorpusExplorer](https://corpusexplorer.de/) | Logiciel destiné aux linguistes de corpus et aux passionnés d’exploration de textes et de données. Créez vos propres corpus dans plus de 60 langues et utilisez plus de 50 outils et visualisations. |
| [PyTorch Geometric Temporal](https://github.com/benedekrozemberczki/pytorch_geometric_temporal) | Apprentissage de représentations sur des graphes dynamiques. |
| [Little Ball of Fur](https://github.com/benedekrozemberczki/littleballoffur) | Bibliothèque d’échantillonnage de graphes pour NetworkX, avec une API semblable à celle de Scikit-Learn. |
| [Karate Club](https://github.com/benedekrozemberczki/karateclub) | Bibliothèque d’extension pour l’apprentissage automatique non supervisé dans NetworkX, avec une API semblable à celle de Scikit-Learn. |
| [ML Workspace](https://github.com/ml-tooling/ml-workspace) | Environnement de développement intégré tout-en-un, accessible sur le Web, pour l’apprentissage automatique et la science des données. Déployé dans un conteneur Docker et préchargé avec des bibliothèques populaires du domaine (p. ex. TensorFlow, PyTorch) et des outils de développement (p. ex. Jupyter, VS Code). |
| [xonsh shell](https://github.com/xonsh/xonsh) | Shell propulsé par Python qui permet d’intégrer, de gérer et d’orchestrer des bibliothèques de science des données, principalement écrites en Python, et de créer des pipelines ainsi que des flux de travail basés sur du code et des commandes. Peut également servir de noyau pour Jupyter Notebook. |
| [Neptune.ai](https://neptune.ai) | Plateforme accueillante pour la communauté, qui aide les scientifiques des données à créer et partager des modèles d’apprentissage automatique. Neptune facilite le travail en équipe, la gestion de l’infrastructure, la comparaison des modèles et la reproductibilité. |
| [steppy](https://github.com/minerva-ml/steppy) | Bibliothèque Python légère pour mener des expériences d’apprentissage automatique rapidement et de manière reproductible. Elle propose une interface très simple qui permet de concevoir des pipelines d’apprentissage automatique clairs. |
| [steppy-toolkit](https://github.com/minerva-ml/steppy-toolkit) | Collection sélectionnée de réseaux de neurones, de transformeurs et de modèles pour rendre votre travail d’apprentissage automatique plus rapide et plus efficace. |
| [Datalab de Google](https://cloud.google.com/datalab/docs/) | Explorez, visualisez, analysez et transformez facilement des données de manière interactive au moyen de langages familiers comme Python et SQL. |
| [Hortonworks Sandbox](https://www.cloudera.com/downloads/hortonworks-sandbox.html) | Environnement Hadoop personnel et portable, accompagné d’une douzaine de tutoriels Hadoop interactifs. |
| [R](https://www.r-project.org/) | Environnement logiciel gratuit dédié au calcul statistique et aux graphiques. |
| [Tidyverse](https://www.tidyverse.org/) | Collection cohérente de packages R conçus pour la science des données. Tous les packages partagent une même philosophie de conception, une grammaire et des structures de données communes. |
| [RStudio](https://www.rstudio.com) | Environnement de développement intégré offrant une interface puissante pour R. Gratuit et open source, il fonctionne sous Windows, Mac et Linux. |
| [Python - Pandas - Anaconda](https://www.anaconda.com) | Distribution Python entièrement gratuite, prête pour l’entreprise, destinée au traitement de données à grande échelle, à l’analytique prédictive et au calcul scientifique. |
| [Pandas GUI](https://github.com/adrotog/PandasGUI) | Interface graphique pour Pandas. |
| [NuriStat](https://github.com/baramgay/stat) | Solution de remplacement libre et gratuite de SPSS : logiciel statistique de bureau à menus (tests t, ANOVA, régression, analyse de survie, ROC), avec import et export de fichiers SPSS .sav. |
| [Polars](https://github.com/pola-rs/polars) | Bibliothèque DataFrame rapide pour Rust et Python, conçue comme une solution de remplacement plus rapide à Pandas. |
| [CiteMe](https://citeme.app) | Générateur gratuit de citations universitaires avec vérificateur de références intégré qui signale les références inventées ou hallucinées. Recherche dans plus de 11 bases de données scientifiques (OpenAlex, PubMed, Semantic Scholar, CrossRef, SciELO), propose plus de 40 styles de citation et une API publique. Sans inscription ; disponible en anglais, espagnol, portugais, français et allemand.|
| [Scikit-Learn](https://scikit-learn.org/stable/) | Apprentissage automatique en Python. |
| [NumPy](https://numpy.org/) | NumPy est essentiel au calcul scientifique avec Python. Il prend en charge les grands tableaux et matrices multidimensionnels, et comprend un ensemble de fonctions mathématiques de haut niveau pour les manipuler. |
| [Vaex](https://vaex.io/) | Bibliothèque Python qui permet de visualiser de grands ensembles de données et d’en calculer les statistiques à grande vitesse. |
| [SciPy](https://scipy.org/) | SciPy fonctionne avec les tableaux NumPy et fournit des routines efficaces pour l’intégration numérique et l’optimisation. |
| [Boîte à outils de science des données](https://www.coursera.org/learn/data-scientists-tools) | Cours Coursera. |
| [Boîte à outils de science des données](https://datasciencetoolbox.org/) | Blogue. |
| [Plateforme Wolfram Data Science](https://www.wolfram.com/data-science-platform/) | Soumettez à l’environnement Wolfram des données numériques, textuelles, d’images, SIG ou autres, puis effectuez toute une gamme d’analyses et de visualisations de science des données et générez automatiquement de riches rapports interactifs, le tout propulsé par le révolutionnaire langage Wolfram fondé sur les connaissances. |
| [Datadog](https://www.datadoghq.com/) | Solutions, code et DevOps pour la science des données à grande échelle. |
| [Variance](https://variancecharts.com/) | Créez de puissantes visualisations de données pour le Web sans écrire de JavaScript. |
| [Kite Development Kit](https://kitesdk.org/docs/current/index.html) | Le kit de développement logiciel Kite (licence Apache, version 2.0), ou Kite, est un ensemble de bibliothèques, d’outils, d’exemples et de documentation qui facilite la création de systèmes basés sur l’écosystème Hadoop. |
| [Domino Data Labs](https://www.dominodatalab.com) | Exécutez, mettez à l’échelle, partagez et déployez vos modèles sans infrastructure ni configuration. |
| [Apache Flink](https://flink.apache.org/) | Plateforme efficace de traitement des données distribué et généraliste. |
| [Apache Hama](https://hama.apache.org/) | Projet open source Apache de premier niveau qui permet de réaliser des analyses avancées au-delà de MapReduce. |
| [Weka](https://ml.cms.waikato.ac.nz/weka/index.html) | Collection d’algorithmes d’apprentissage automatique pour les tâches d’exploration de données. |
| [Octave](https://www.gnu.org/software/octave/) | GNU Octave est un langage interprété de haut niveau, principalement destiné aux calculs numériques (solution gratuite de remplacement de Matlab). |
| [Apache Spark](https://spark.apache.org/) | Calcul en grappe à la vitesse de l’éclair. |
| [Hydrosphere Mist](https://github.com/Hydrospheredata/mist) | Service qui expose des tâches d’analyse Apache Spark et des modèles d’apprentissage automatique sous forme de services Web en temps réel, par lots ou réactifs. |
| [Data Mechanics](https://www.datamechanics.co) | Plateforme de science et d’ingénierie des données qui rend Apache Spark plus convivial pour les développeurs et plus économique. |
| [Caffe](https://caffe.berkeleyvision.org/) | Infrastructure d’apprentissage profond. |
| [Torch](https://torch.ch/) | INFRASTRUCTURE DE CALCUL SCIENTIFIQUE POUR LUAJIT |
| [Infrastructure d’apprentissage profond de Nervana fondée sur Python](https://github.com/NervanaSystems/neon) | Infrastructure d’apprentissage profond de référence d’Intel® Nervana™, visant les meilleures performances sur tout matériel. |
| [Skale](https://github.com/skale-me/skale) | Traitement distribué des données haute performance dans NodeJS. |
| [Aerosolve](https://airbnb.io/aerosolve/) | Package d’apprentissage automatique conçu pour les humains. |
| [Infrastructure Intel](https://github.com/intel/idlf) | Infrastructure d’apprentissage profond Intel®. |
| [Datawrapper](https://www.datawrapper.de/) | Plateforme open source de visualisation des données qui aide tout le monde à créer des graphiques simples, exacts et intégrables. Également sur [github.com](https://github.com/datawrapper/datawrapper) |
| [Tensor Flow](https://www.tensorflow.org/) | TensorFlow est une bibliothèque logicielle libre pour l’intelligence artificielle. |
| [Natural Language Toolkit](https://www.nltk.org/) | Boîte à outils d’initiation, mais puissante, pour le traitement et la classification du langage naturel. |
| [FunASR](https://github.com/modelscope/FunASR) | Boîte à outils de reconnaissance vocale de niveau industriel prenant en charge plus de 50 langues, avec détection intégrée de l’activité vocale, ponctuation, diarisation des locuteurs et détection des émotions. Comprend un serveur d’API compatible avec OpenAI. |
| [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) | Plateforme gratuite de bout en bout, sans code, pour annoter du texte et entraîner ou ajuster des modèles d’apprentissage profond. Prise en charge immédiate de la reconnaissance d’entités nommées, de la classification, de l’extraction de relations et des modèles Spark NLP de statut d’assertion. Nombre illimité d’utilisateurs, d’équipes, de projets et de documents. |
| [Boîte à outils TAL pour node.js](https://www.npmjs.com/package/nlp-toolkit) | Ce module couvre certains principes et implémentations fondamentaux du TAL, en mettant l’accent sur les performances. Le traitement d’exemples ou de données d’entraînement en TAL épuise rapidement la mémoire ; chaque implémentation de ce module est donc conçue sous forme de flux, afin de ne conserver en mémoire que les données traitées à chaque étape. |
| [Julia](https://julialang.org) | Langage de programmation dynamique de haut niveau et haute performance pour le calcul technique. |
| [IJulia](https://github.com/JuliaLang/IJulia.jl) | Arrière-plan en langage Julia associé à l’environnement interactif Jupyter. |
| [Apache Zeppelin](https://zeppelin.apache.org/) | Notebook Web permettant l’analytique interactive des données et la création collaborative de documents pilotés par les données, avec SQL, Scala et bien plus. |
| [Featuretools](https://github.com/alteryx/featuretools) | Infrastructure open source d’ingénierie automatisée des caractéristiques, écrite en Python. |
| [Optimus](https://github.com/hi-primus/optimus) | Nettoyage, prétraitement, ingénierie des caractéristiques, analyse exploratoire des données et apprentissage automatique simplifié avec PySpark en arrière-plan. |
| [Albumentations](https://github.com/albumentations-team/albumentations) | Bibliothèque rapide d’augmentation d’images, indépendante des infrastructures, qui implémente un large éventail de techniques d’augmentation. Prise en charge immédiate de la classification, de la segmentation et de la détection. Elle a servi à remporter plusieurs compétitions d’apprentissage profond sur Kaggle, Topcoder et lors d’ateliers CVPR. |
| [DVC](https://github.com/iterative/dvc) | Système open source de contrôle de version pour la science des données. Il aide à suivre et organiser les projets et à les rendre reproductibles. Dans son usage le plus simple, il permet de versionner et de partager de gros fichiers de données et de modèles. |
| [Lambdo](https://github.com/asavinov/lambdo) | Moteur de flux de travail qui simplifie considérablement l’analyse des données en regroupant dans un même pipeline d’analyse (i) l’ingénierie des caractéristiques et l’apprentissage automatique, (ii) l’entraînement et la prédiction des modèles, (iii) le remplissage des tableaux et l’évaluation des colonnes. |
| [Feast](https://github.com/feast-dev/feast) | Magasin de caractéristiques pour gérer, découvrir et accéder aux caractéristiques d’apprentissage automatique. Feast fournit une vue cohérente des données de caractéristiques, tant pour l’entraînement que pour le service des modèles. |
| [Polyaxon](https://github.com/polyaxon/polyaxon) | Plateforme d’apprentissage automatique et profond reproductible et évolutive. |
| [UBIAI](https://ubiai.tools) | Outil d’annotation de texte facile à utiliser en équipe, doté des fonctionnalités d’annotation automatique les plus complètes. Prise en charge de la reconnaissance d’entités nommées, des relations, de la classification de documents et de l’annotation OCR pour l’étiquetage des factures. |
| [Trains](https://github.com/allegroai/clearml) | Gestionnaire d’expériences automatique, contrôle de version et DevOps pour l’IA. |
| [Hopsworks](https://github.com/logicalclocks/hopsworks) | Plateforme open source d’apprentissage automatique intensif en données, dotée d’un magasin de caractéristiques. Ingérez et gérez les caractéristiques pour les accès en ligne (MySQL Cluster) et hors ligne (Apache Hive), puis entraînez et servez des modèles à grande échelle. |
| [MindsDB](https://github.com/mindsdb/mindsdb) | Infrastructure AutoML explicable destinée aux développeurs. Avec MindsDB, créez, entraînez et utilisez des modèles d’apprentissage automatique de pointe avec une simple ligne de code. |
| [Lightwood](https://github.com/mindsdb/lightwood) | Infrastructure fondée sur PyTorch qui décompose les problèmes d’apprentissage automatique en blocs plus petits, combinables sans difficulté, afin de créer des modèles prédictifs en une seule ligne de code. |
| [AWS Data Wrangler](https://github.com/awslabs/aws-data-wrangler) | Package Python open source qui étend la puissance de Pandas à AWS en connectant les DataFrames aux services de données AWS (Amazon Redshift, AWS Glue, Amazon Athena, Amazon EMR, etc.). |
| [Amazon Rekognition](https://aws.amazon.com/rekognition/) | Service AWS permettant aux développeurs travaillant avec Amazon Web Services d’ajouter l’analyse d’images à leurs applications. Cataloguez des ressources, automatisez les flux de travail et extrayez des informations de vos médias et applications.|
| [Amazon Textract](https://aws.amazon.com/textract/) | Extraction automatique du texte imprimé, de l’écriture manuscrite et des données de n’importe quel document. |
| [Amazon Lookout for Vision](https://aws.amazon.com/lookout-for-vision/) | Détectez les défauts des produits grâce à la vision par ordinateur afin d’automatiser le contrôle qualité. Repérez les composants manquants, les dégâts sur les véhicules et les structures, ainsi que les anomalies, pour un contrôle qualité exhaustif.|
| [Amazon CodeGuru](https://aws.amazon.com/codeguru/) | Automatisez les révisions de code et optimisez les performances des applications grâce à des recommandations basées sur l’apprentissage automatique.|
| [CML](https://github.com/iterative/cml) | Boîte à outils open source pour utiliser l’intégration continue dans les projets de science des données. Entraînez et testez automatiquement des modèles dans des environnements proches de la production avec GitHub Actions et GitLab CI, et générez des rapports visuels dans les demandes de fusion et les pull requests. |
| [Dask](https://dask.org/) | Bibliothèque Python open source qui facilite la migration de votre code analytique vers des systèmes de calcul distribué (mégadonnées). |
| [DuckDB](https://github.com/duckdb/duckdb) | Système de gestion de base de données SQL OLAP en processus. |
| [Statsmodels](https://www.statsmodels.org/stable/index.html) | Infrastructure Python pour les statistiques inférentielles, les tests d’hypothèses et la régression. |
| [Gensim](https://radimrehurek.com/gensim/) | Bibliothèque open source de modélisation thématique pour les textes en langage naturel. |
| [spaCy](https://spacy.io/) | Boîte à outils performante de traitement du langage naturel. |
| [Grid Studio](https://github.com/ricklamers/gridstudio) | Grid Studio est un tableur Web entièrement intégré au langage de programmation Python. |
|[Python Data Science Handbook](https://github.com/jakevdp/PythonDataScienceHandbook)|Manuel de science des données avec Python : texte intégral sous forme de notebooks Jupyter.|
| [Shapley](https://github.com/benedekrozemberczki/shapley) | Infrastructure pilotée par les données pour quantifier la valeur des classificateurs dans un ensemble d’apprentissage automatique. |
| [DAGsHub](https://dagshub.com) | Plateforme reposant sur des outils open source pour gérer les données, les modèles et les pipelines. |
| [Deepnote](https://deepnote.com) | Nouvelle génération de notebooks de science des données, compatible avec Jupyter, doté de la collaboration en temps réel et exécuté dans le cloud. |
| [Valohai](https://valohai.com) | Plateforme MLOps qui gère l’orchestration des machines, la reproductibilité automatique et le déploiement. |
| [PyMC3](https://docs.pymc.io/) | Bibliothèque Python de programmation probabiliste (inférence bayésienne et apprentissage automatique). |
| [PyStan](https://pypi.org/project/pystan/) | Interface Python pour Stan (inférence et modélisation bayésiennes). |
| [hmmlearn](https://pypi.org/project/hmmlearn/) | Apprentissage non supervisé et inférence de modèles de Markov cachés. |
| [Chaos Genius](https://github.com/chaos-genius/chaos_genius/) | Moteur d’analytique propulsé par l’apprentissage automatique pour détecter les valeurs aberrantes et les anomalies et en déterminer les causes profondes. |
| [PySAD](https://github.com/selimfirat/pysad) | Bibliothèque Python de détection d’anomalies dans les données en continu. |
| [Nimblebox](https://nimblebox.ai/) | Plateforme MLOps complète conçue pour aider les scientifiques des données et les spécialistes de l’apprentissage automatique du monde entier à découvrir, créer et lancer des applications multicloud depuis leur navigateur. |
| [Towhee](https://github.com/towhee-io/towhee) | Bibliothèque Python qui aide à encoder les données non structurées sous forme de plongements. |
| [LineaPy](https://github.com/LineaLabs/lineapy) | Vous est-il déjà arrivé de vouloir nettoyer de longs notebooks Jupyter désordonnés ? Avec LineaPy, bibliothèque Python open source, deux lignes de code suffisent pour transformer du code de développement brouillon en pipelines de production. |
| [envd](https://github.com/tensorchord/envd) | 🏕️ Environnement de développement d’apprentissage automatique pour les équipes de science des données et d’ingénierie IA/ML. |
| [Explorer les bibliothèques de science des données](https://kandi.openweaver.com/explore/data-science) | Outil 🔎 de recherche pour découvrir une sélection de bibliothèques populaires et récentes, les meilleurs auteurs, les kits de projets tendance, les discussions, les tutoriels et les ressources d’apprentissage. |
| [MLEM](https://github.com/iterative/mlem) | 🐶 Versionnez et déployez vos modèles d’apprentissage automatique selon les principes GitOps. |
| [MLflow](https://mlflow.org/) | Infrastructure MLOps pour gérer les modèles d’apprentissage automatique tout au long de leur cycle de vie. |
| [cleanlab](https://github.com/cleanlab/cleanlab) | Bibliothèque Python pour l’IA centrée sur les données et la détection automatique de divers problèmes dans les jeux de données d’apprentissage automatique. |
| [AutoGluon](https://github.com/awslabs/autogluon) | AutoML permettant de produire facilement des prédictions précises sur des données d’images, de texte, tabulaires, de séries temporelles et multimodales. |
| [Arize AI](https://arize.com/) | Outil d’observabilité communautaire d’Arize AI pour surveiller les modèles d’apprentissage automatique en production et déterminer les causes profondes de problèmes tels que la qualité des données et la dérive des performances. |
| [Aureo.io](https://aureo.io) | Plateforme low-code axée sur la création d’intelligence artificielle. Elle permet de concevoir des pipelines, des automatisations et des intégrations avec des modèles d’IA, à partir de vos données. |
| [ERD Lab](https://www.erdlab.io/) | Outil cloud gratuit de création de diagrammes entité-association (ERD), conçu pour les développeurs.
| [Arize-Phoenix](https://docs.arize.com/phoenix) | MLOps dans un notebook : découvrez des informations, mettez au jour les problèmes, surveillez et ajustez vos modèles. |
| [Comet](https://github.com/comet-ml/comet-examples) | Plateforme MLOps proposant le suivi des expériences, la gestion des modèles en production, un registre de modèles et une traçabilité complète des données pour accompagner votre flux de travail ML, de l’entraînement jusqu’à la production. |
| [Opik](https://github.com/comet-ml/opik) | Évaluez, testez et déployez des applications LLM à toutes les étapes du développement et de la production. |
| [Synthical](https://synthical.com) | Environnement collaboratif de recherche propulsé par l’IA. Trouvez les publications pertinentes, créez des collections pour gérer votre bibliographie et résumez les contenus, le tout au même endroit. |
| [teeplot](https://github.com/mmore500/teeplot) | Outil de flux de travail qui organise automatiquement les résultats de visualisation des données. |
| [Streamlit](https://github.com/streamlit/streamlit) | Infrastructure applicative pour les projets d’apprentissage automatique et de science des données. |
| [Gradio](https://github.com/gradio-app/gradio) | Créez des composants d’interface personnalisables autour de modèles d’apprentissage automatique. |
| [Weights & Biases](https://github.com/wandb/wandb) | Suivi des expériences, versionnement des jeux de données et gestion des modèles. |
| [DVC](https://github.com/iterative/dvc) | Système open source de contrôle de version pour les projets d’apprentissage automatique. |
| [Optuna](https://github.com/optuna/optuna) | Infrastructure logicielle d’optimisation automatique des hyperparamètres. |
| [Ray Tune](https://github.com/ray-project/ray) | Bibliothèque évolutive de réglage des hyperparamètres. |
| [Apache Airflow](https://github.com/apache/airflow) | Plateforme permettant de créer, planifier et surveiller des flux de travail par programmation. |
| [Prefect](https://github.com/PrefectHQ/prefect) | Système de gestion des flux de travail pour les piles de données modernes. |
| [Kedro](https://github.com/kedro-org/kedro) | Infrastructure Python open source pour créer du code de science des données reproductible et facile à maintenir. |
| [Hamilton](https://github.com/dagworks-inc/hamilton) | Bibliothèque légère pour créer et gérer des transformations de données fiables. |
| [SHAP](https://github.com/slundberg/shap) | Approche fondée sur la théorie des jeux pour expliquer les résultats de n’importe quel modèle d’apprentissage automatique. |
| [InterpretML](https://github.com/interpretml/interpret) | InterpretML implémente l’Explainable Boosting Machine (EBM), un modèle moderne et entièrement interprétable d’apprentissage automatique, basé sur les modèles additifs généralisés (GAM). Ce package open source fournit également des outils de visualisation pour les EBM, d’autres modèles à boîte de verre et les explications de modèles à boîte noire. |
| [LIME](https://github.com/marcotcr/lime) | Explication des prédictions de n’importe quel classificateur d’apprentissage automatique. |
| [flyte](https://github.com/flyteorg/flyte) | Plateforme d’automatisation des flux de travail d’apprentissage automatique. |
| [dbt](https://github.com/dbt-labs/dbt-core) | Outil de création de données. |
| [zasper](https://github.com/zasper-io/zasper) | Environnement de développement intégré surpuissant pour la science des données. |
| [skrub](https://github.com/skrub-data/skrub/) | Bibliothèque Python qui simplifie le prétraitement et l’ingénierie des caractéristiques pour l’apprentissage automatique sur des données tabulaires. |
| [Glyph](https://github.com/Koda-OSS/Glyph) | Bibliothèque TypeScript indépendante des infrastructures pour générer, rechercher et comparer des empreintes MinHash afin d’accélérer la similarité de texte, la déduplication et la récupération. |
| [Codeflash](https://www.codeflash.ai/) | Livrez chaque fois du code Python ultrarapide. |
| [Hugging Face](https://huggingface.co/) | Plateforme ouverte populaire pour partager des modèles d’apprentissage automatique et des jeux de données, et collaborer sur des projets de TAL et d’IA générative. |
| [Chinese-Elite](https://github.com/anonym-g/Chinese-Elite) | Projet open source qui cartographie automatiquement les réseaux de relations en analysant des données publiques avec des LLM, puis les visualise sous forme de graphe interactif. |
| [Desbordante](https://github.com/desbordante/desbordante-core/) | Outil open source de profilage des données, spécialisé dans la découverte et la validation de motifs complexes, comme les [règles d’association numériques](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Numerical_Association_Rules.ipynb), les [dépendances différentielles](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Differential_Dependencies.ipynb), les [contraintes de déni](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Denial_Constraints.ipynb), et bien plus. |
| [dna-claude-analysis](https://github.com/shmlkv/dna-claude-analysis) | Boîte à outils d’analyse de génome personnel, avec des scripts Python analysant des données ADN brutes dans 17 catégories (risques pour la santé, ascendance, pharmacogénomique, nutrition, psychologie, etc.) et générant une visualisation HTML monopage de style terminal. |
| [RunMat](https://github.com/runmat-org/runmat) | Environnement d’exécution rapide à syntaxe MATLAB, avec exécution automatique sur CPU/GPU et noyaux de tableaux fusionnés. |
| [Turbostream](https://github.com/turboline-ai/turbostream) | Interface de terminal permettant d’expérimenter des moteurs de règles personnalisés et l’analyse sélective par LLM de flux de données en temps réel, sans se soucier de l’infrastructure de flux ni de la contre-pression. |
| [WFGY ProblemMap](https://github.com/onestardao/WFGY/blob/main/ProblemMap/README.md) | « Atlas des échecs » open source répertoriant 16 problèmes récurrents des pipelines LLM et RAG, avec leurs symptômes observables et des solutions suggérées pour les équipes de science des données. |
| [Deploybase](https://deploybase.ai/) | Suivez en temps réel les tarifs des GPU et des LLM chez tous les fournisseurs de cloud et d’inférence. |
| [DeepAnalyze](https://github.com/ruc-datalab/DeepAnalyze) | LLM agentique pour la science des données autonome, capable d’accomplir sans intervention humaine un large éventail de tâches du domaine. |
| [Disco](https://github.com/leap-laboratories/discovery-engine) | Analyse exploratoire des données surhumaine. Découvre dans les données tabulaires les interactions entre caractéristiques et effets de sous-groupes qui échappent aux LLM et à l’exploration manuelle, avec valeurs p, tailles d’effet et références bibliographiques. Gratuit pour les données publiques. |
| [AI for Database](https://aifordatabase.com) | Dialoguez en langage naturel avec votre base de données, sans SQL. Obtenez instantanément des informations, créez des tableaux de bord qui s’actualisent automatiquement et déclenchez des flux de travail automatisés en fonction des changements apportés à la base. |
| [Crypto Pump Scanner](https://github.com/stefanoviana/deepalpha) | Robot de trading de cryptomonnaies propulsé par l’IA et doté d’un réseau neuronal LSTM (précision de 84,6 %). Détection en temps réel des hausses soudaines, modèles validés par marche en avant et prise en charge de plusieurs plateformes d’échange (Bybit, Binance, OKX, Gate.io). Open source. |
| [Future AGI](https://github.com/future-agi/future-agi) | Plateforme open source pour simuler, évaluer, tracer, encadrer, acheminer et optimiser les applications de LLM et d’agents IA dans une boucle de rétroaction unique, afin que les agents ne se contentent pas d’être surveillés, mais s’améliorent eux-mêmes. Auto-hébergeable. Apache-2.0. |
| [ipynbtopdf](https://ipynbtopdf.xyz/) | Outil Web pour consulter et exporter des notebooks Jupyter, qui convertit les fichiers `.ipynb` en PDF, HTML et Python sans installer Python ni TeX. |



## Littérature et médias
**[`^        retour en haut        ^`](#awesome-data-science)**

Cette section propose des lectures complémentaires, des chaînes à regarder et des conférences à écouter.

### Livres
**[`^        retour en haut        ^`](#awesome-data-science)**

- [La science des données à partir de zéro : principes fondamentaux avec Python](https://www.amazon.com/Data-Science-Scratch-Principles-Python-dp-1492041130/dp/1492041130/ref=dp_ob_title_bk)
- [Intelligence artificielle avec Python - Tutorialspoint](https://www.tutorialspoint.com/artificial_intelligence_with_python/artificial_intelligence_with_python_tutorial.pdf)
- [L’apprentissage automatique à partir de zéro](https://dafriedman97.github.io/mlbook/content/introduction.html)
- [Apprentissage automatique probabiliste : introduction](https://probml.github.io/pml-book/book1.html)
- [Comment diriger une équipe de science des données](https://www.manning.com/books/how-to-lead-in-data-science) - Accès anticipé
- [Lutter contre l’attrition grâce aux données](https://www.manning.com/books/fighting-churn-with-data)
- [La science des données à grande échelle avec Python et Dask](https://www.manning.com/books/data-science-with-python-and-dask)
- [Manuel de science des données avec Python](https://jakevdp.github.io/PythonDataScienceHandbook/)
- [Le manuel de science des données : conseils et réflexions de 25 scientifiques des données remarquables](https://www.thedatasciencehandbook.com/)
- [Penser comme un scientifique des données](https://www.manning.com/books/think-like-a-data-scientist)
- [Introduction à la science des données](https://www.manning.com/books/introducing-data-science)
- [La science des données pratique avec R](https://www.manning.com/books/practical-data-science-with-r)
- [La science des données au quotidien](https://www.amazon.com/dp/B08TZ1MT3W/ref=cm_sw_r_cp_apa_fabc_a0ceGbWECF9A8) & [(version PDF moins chère)](https://gum.co/everydaydata)
- [Explorer la science des données](https://www.manning.com/books/exploring-data-science) - Extrait gratuit du livre numérique
- [Explorer la jungle des données](https://www.manning.com/books/exploring-the-data-jungle) - Extrait gratuit du livre numérique
- [Problèmes classiques d’informatique avec Python](https://www.manning.com/books/classic-computer-science-problems-in-python)
- [Mathématiques pour les programmeurs](https://www.manning.com/books/math-for-programmers) Accès anticipé
- [R en action, troisième édition](https://www.manning.com/books/r-in-action-third-edition) Accès anticipé
- [Camp d’entraînement en science des données](https://www.manning.com/books/data-science-bookcamp) Accès anticipé
- [La pensée en science des données : la prochaine révolution scientifique, technologique et économique](https://www.springer.com/gp/book/9783319950914)
- [Science des données appliquée : enseignements pour l’entreprise guidée par les données](https://www.springer.com/gp/book/9783030118204)
- [Le manuel de science des données](https://www.amazon.com/Data-Science-Handbook-Field-Cady/dp/1119092949)
- [Les fondamentaux du traitement automatique du langage naturel](https://www.manning.com/books/getting-started-with-natural-language-processing) - Accès anticipé
- [Exploration de jeux de données massifs](https://www.mmds.org/) - Livre électronique gratuit complété par un cours en ligne
- [Pandas en action](https://www.manning.com/books/pandas-in-action) - Accès anticipé
- [Algorithmes génétiques et programmation génétique](https://www.taylorfrancis.com/books/9780429141973)
- [Progrès en algorithmes évolutionnaires](https://www.intechopen.com/books/advances_in_evolutionary_algorithms) - Téléchargement gratuit
- [Programmation génétique : nouvelles approches et applications réussies](https://www.intechopen.com/books/genetic-programming-new-approaches-and-successful-applications) - Téléchargement gratuit
- [Algorithmes évolutionnaires](https://www.intechopen.com/books/evolutionary-algorithms) - Téléchargement gratuit
- [Progrès en programmation génétique, vol. 3](https://www0.cs.ucl.ac.uk/staff/W.Langdon/aigp3/) - Téléchargement gratuit
- [Algorithmes génétiques et calcul évolutionnaire](https://www.talkorigins.org/faqs/genalg/genalg.html) - Téléchargement gratuit
- [Optimisation convexe](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf) - Livre de Stephen Boyd sur l’optimisation convexe - Téléchargement gratuit
- [Analyse des données avec Python et PySpark](https://www.manning.com/books/data-analysis-with-python-and-pyspark) - Accès anticipé
- [La science des données avec R](https://r4ds.had.co.nz/)
- [Construire une carrière en science des données](https://www.manning.com/books/build-a-career-in-data-science)
- [Camp d’entraînement en apprentissage automatique](https://mlbookcamp.com/) - Accès anticipé
- [Apprentissage automatique pratique avec Scikit-Learn, Keras et TensorFlow, 2e édition](https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/)
- [Infrastructure efficace pour la science des données](https://www.manning.com/books/effective-data-science-infrastructure)
- [MLOps pratique : préparer les modèles pour la production](https://valohai.com/mlops-ebook/)
- [Analyse des données avec Python et PySpark](https://www.manning.com/books/data-analysis-with-python-and-pyspark)
- [La régression : un guide convivial](https://www.manning.com/books/regression-a-friendly-guide) - Accès anticipé
- [Systèmes de traitement en flux : quoi, où, quand et comment traiter des données à grande échelle](https://www.oreilly.com/library/view/streaming-systems/9781491983867/)
- [La science des données en ligne de commande : préparer l’avenir avec des outils éprouvés](https://www.oreilly.com/library/view/data-science-at/9781491947845/)
- [Apprentissage automatique avec Python - Tutorialspoint](https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_tutorial.pdf)
- [Apprentissage profond](https://www.deeplearningbook.org/)
- [Concevoir des plateformes de données cloud](https://www.manning.com/books/designing-cloud-data-platforms) - Accès anticipé
- [Introduction à l’apprentissage statistique avec des applications en R](https://www.statlearning.com/)
- [Les éléments de l’apprentissage statistique : exploration de données, inférence et prédiction](https://hastie.su.domains/ElemStatLearn/)
- [Apprentissage profond avec PyTorch](https://www.simonandschuster.com/books/Deep-Learning-with-PyTorch/Eli-Stevens/9781617295263)
- [Réseaux de neurones et apprentissage profond](https://neuralnetworksanddeeplearning.com)
- [Recettes d’apprentissage profond](https://www.oreilly.com/library/view/deep-learning-cookbook/9781491995839/)
- [Introduction à l’apprentissage automatique avec Python](https://www.oreilly.com/library/view/introduction-to-machine/9781449369880/)
- [Intelligence artificielle : fondements des agents informatiques, 2e édition](https://artint.info/index.html) - Version HTML gratuite
- [La quête de l’intelligence artificielle : histoire des idées et des réalisations](https://ai.stanford.edu/~nilsson/QAI/qai.pdf) - Téléchargement gratuit
- [Algorithmes de graphes pour la science des données](https://www.manning.com/books/graph-algorithms-for-data-science) - Accès anticipé
- [Data Mesh en action](https://www.manning.com/books/data-mesh-in-action) - Accès anticipé
- [Julia pour l’analyse des données](https://www.manning.com/books/julia-for-data-analysis) - Accès anticipé
- [Inférence causale pour la science des données](https://www.manning.com/books/julia-for-data-analysis) - Accès anticipé
- [Puzzles d’expressions régulières et assistants de programmation IA](https://www.manning.com/books/regular-expression-puzzles-and-ai-coding-assistants) par David Mertz
- [Plongez dans l’apprentissage profond](https://d2l.ai/)
- [Des données pour tous](https://www.manning.com/books/data-for-all)
- [Apprentissage automatique interprétable : guide pour expliquer les modèles boîte noire](https://christophm.github.io/interpretable-ml-book/) - Version gratuite sur GitHub
- [Fondements de la science des données](https://www.cs.cornell.edu/jeh/book.pdf) Téléchargement gratuit
- [Comet pour la science des données : améliorez votre capacité à gérer et optimiser le cycle de vie de votre projet de science des données](https://www.amazon.com/Comet-Data-Science-Enhance-optimize/dp/1801814430)
- [Génie logiciel pour les scientifiques des données](https://www.manning.com/books/software-engineering-for-data-scientists) - Accès anticipé
- [Julia pour la science des données](https://www.manning.com/books/julia-for-data-science) - Accès anticipé
- [Introduction à l’apprentissage statistique](https://www.statlearning.com/) - Page de téléchargement
- [L’apprentissage automatique pour les grands débutants](https://www.amazon.in/Machine-Learning-Absolute-Beginners-Introduction-ebook/dp/B07335JNW1)
- [Unifier entreprise, données et code : concevoir des produits de données avec JSON Schema](https://learning.oreilly.com/library/view/unifying-business-data/9781098144999/)
- [Comprendre Bayes](https://www.manning.com/books/grokking-bayes)
- [Apprentissage automatique, questions et IA](https://sebastianraschka.com/books/ml-q-and-ai)
- [JavaScript pour la science des données](https://third-bit.com/js4ds/) - Page HTML gratuite
- [Science des données appliquée](https://angewandtedatascience.de/) - Livre allemand sur la science des données appliquée
- [Les mathématiques derrière l’intelligence artificielle](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book): livre gratuit de FreeCodeCamp qui enseigne, dans un anglais simple et du point de vue de l’ingénierie, les mathématiques derrière l’IA.
- [Science des données pour les cadres](https://leanpub.com/eds): guide général sur la gestion d’équipes et de projets de science des données.
- [Introduction aux statistiques modernes](https://leanpub.com/imstat): manuel moderne en libre accès sur les statistiques, largement axé sur les applications en science des données.
- [L’art de la science des données](https://bookdown.org/rdpeng/artofdatascience/): porte sur l’« art » de l’analyse des données, sur la manière de poser les bonnes questions et de les affiner.

#### Offres sur les livres (liens affiliés)

- [Soldes sur les livres numériques - jusqu’à 45 % de réduction !](https://www.manning.com/?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=ebook_sale_8_8_22)

- [Apprentissage automatique causal](https://www.manning.com/books/causal-machine-learning?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_ness_causal_7_26_22&a_aid=mikrobusiness&a_bid=43a2198b)
- [Gérer des projets d’apprentissage automatique](https://www.manning.com/books/managing-machine-learning-projects?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_thompson_managing_6_14_22)
- [Inférence causale pour la science des données](https://www.manning.com/books/causal-inference-for-data-science?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_ruizdevilla_causal_6_6_22)
- [Des données pour tous](https://www.manning.com/books/data-for-all?utm_source=mikrobusiness&utm_medium=affiliate)

### Revues, publications et magazines
**[`^        retour en haut        ^`](#awesome-data-science)**

- [ICML](https://icml.cc/2015/) - Conférence internationale sur l’apprentissage automatique.
- [GECCO](https://gecco-2019.sigevo.org/index.html/HomePage) - Conférence sur le calcul génétique et évolutionnaire (GECCO).
- [epjdatascience](https://epjdatascience.springeropen.com/)
- [Journal of Data Science](https://jds-online.org/journal/JDS) - Revue internationale consacrée aux applications des méthodes statistiques à grande échelle.
- [Big Data Research](https://www.journals.elsevier.com/big-data-research)
- [Journal of Big Data](https://journalofbigdata.springeropen.com/)
- [Big Data & Society](https://journals.sagepub.com/home/bds)
- [Data Science Journal](https://www.jstage.jst.go.jp/browse/dsj)
- [datatau.com/news](https://www.datatau.com/news) - Comme Hacker News, mais consacré aux données.
- [Tableau Trello de science des données](https://trello.com/b/rbpEfMld/data-science)
- [Thème de la science des données sur Medium](https://medium.com/tag/data-science) - Publications de Medium liées à la science des données.
- [Thème des algorithmes génétiques de Towards Data Science](https://towardsdatascience.com/introduction-to-genetic-algorithms-including-example-code-e396e98d8bf3#:~:text=A%20genetic%20algorithm%20is%20a,offspring%20of%20the%20next%20generation.) - Publications de Towards Data Science consacrées aux algorithmes génétiques.
- [Maxim AI](https://getmaxim.ai). Outil de simulation, d’évaluation et d’observabilité des agents IA.
- [8bitconcepts](https://8bitconcepts.com/) - Recherche et analyse du secteur de l’IA, avec des articles sur les prix de l’IA, son adoption en entreprise et les infrastructures d’évaluation.

### Infolettres
**[`^        retour en haut        ^`](#awesome-data-science)**

- [AI Weekly](https://aiweekly.co) - Bulletin d’information sélectionné sur l’IA, rédigé par des chefs de file du secteur et couvrant les modèles, le financement, les politiques et les applications. Trois fois par semaine depuis 2017, plus de 40 000 abonnés.
- [DataTalks.Club](https://datatalks.club). Infolettre hebdomadaire sur l’actualité des données. [Archives](https://us19.campaign-archive.com/home/?u=0d7822ab98152f5afc118c176&id=97178021aa).
- [The Analytics Engineering Roundup](https://roundup.getdbt.com/about). Infolettre sur la science des données. [Archives](https://roundup.getdbt.com/archive).
- [Techpresso](https://dupple.com/techpresso). Infolettre quotidienne gratuite sur les avancées majeures de l’IA, du ML et des technologies. [Archives](https://dupple.com/techpresso).
- [DiamantAI](https://diamantai.substack.com). L’ingénierie pratique de l’IA et l’IA générative expliquées simplement : RAG, agents et modèles d’applications LLM pour les développeurs.
- [Bamboo Weekly](https://www.bambooweekly.com) - Exercices Pandas hebdomadaires fondés sur l’actualité et des données publiques réelles, avec des solutions détaillées. Les numéros de plus de deux ans sont gratuits, tout comme les deux premières questions et réponses des numéros récents. [Archives](https://www.bambooweekly.com/archive/).

### Listes de diffusion
**[`^        retour en haut        ^`](#awesome-data-science)**
- [Groupe de travail - Génie logiciel de recherche en humanités numériques](https://www.listserv.dfn.de/sympa/info/ag-dhrse). Liste de diffusion du groupe de travail sur le génie logiciel de recherche en humanités numériques (DH-RSE).

### Blogueurs
**[`^        retour en haut        ^`](#awesome-data-science)**

- [Wes McKinney](https://wesmckinney.com/archives.html) - Archives de Wes McKinney.
- [Matthew Russell](https://miningthesocialweb.com/) - Explorer les réseaux sociaux.
- [Greg Reda](https://www.gregreda.com/) - Blogue personnel de Greg Reda.
- [Julia Evans](https://jvns.ca/) - Ancienne du Recurse Center.
- [Hakan Kardas](https://www.cse.unr.edu/~hkardes/) - Page Web personnelle.
- [Sean J. Taylor](https://seanjtaylor.com/) - Page Web personnelle.
- [Drew Conway](https://drewconway.com/) - Page Web personnelle.
- [Hilary Mason](https://hilarymason.com/) - Page Web personnelle.
- [Noah Iliinsky](https://complexdiagrams.com/) - Blogue personnel.
- [Matt Harrison](https://hairysun.com/) - Blogue personnel.
- [Vamshi Ambati](https://allthingsds.wordpress.com/) - AllThings Data Science.
- [Prash Chan](https://www.mdmgeek.com/) - Blogue technologique sur la gestion des données de référence et tout ce qui l’entoure.
- [Clare Corthell](https://datasciencemasters.org/) - Maîtrise libre de science des données.
- [Datawrangling](https://www.datawrangling.org) par Peter Skomoroch. APPRENTISSAGE AUTOMATIQUE, EXPLORATION DE DONNÉES ET PLUS.
- [Science des données sur Quora](https://www.quora.com/topic/Data-Science) - Questions et réponses sur la science des données par des experts.
- [Siah](https://openresearch.wordpress.com/) doctorant à Berkeley.
- [Louis Dorard](https://www.ownml.co/blog/) passionné de technologie, du Web et des données, petites ou grandes.
- [Machine Learning Mastery](https://machinelearningmastery.com/) - Aider les programmeurs professionnels à appliquer en toute confiance des algorithmes d’apprentissage automatique à des problèmes complexes.
- [Daniel Forsyth](https://www.danielforsyth.me/) - Blogue personnel.
- [Data Science Weekly](https://www.datascienceweekly.org/) - Blogue d’actualité hebdomadaire.
- [Revolution Analytics](https://blog.revolutionanalytics.com/) - Blogue sur la science des données.
- [R Bloggers](https://www.r-bloggers.com/) - Blogueurs R.
- [The Practical Quant](https://practicalquant.blogspot.com/) Mégadonnées.
- [Yet Another Data Blog](https://yet-another-data-blog.blogspot.com/) Encore un autre blogue sur les données.
- [KD Nuggets](https://www.kdnuggets.com/) Exploration de données, analytique, mégadonnées, science des données : un portail, pas un blogue.
- [Meta Brown](https://www.metabrown.com/blog/) - Blogue personnel.
- [Data Scientist](https://datascientists.com/) contribue à développer la culture des scientifiques des données.
- [WhatSTheBigData](https://whatsthebigdata.com/) traite d’une partie, de la totalité ou de bien plus encore que ce qui précède, et ce blogue explore les répercussions des mégadonnées sur les technologies de l’information, les entreprises, les agences gouvernementales et notre quotidien.
- [Tevfik Kosar](https://magnus-notitia.blogspot.com/) - Magnus Notitia.
- [New Data Scientist](https://newdatascientist.blogspot.com/) Comment un spécialiste des sciences sociales se lance dans l’univers des mégadonnées.
- [Harvard Data Science](https://harvarddatascience.com/) - Réflexions sur le calcul statistique et la visualisation.
- [Data Science 101](https://ryanswanstrom.com/datascience101/) - Apprendre à devenir scientifique des données.
- [Anciennes solutions Kaggle](https://www.chioka.in/kaggle-competition-solutions/)
- [DataScientistJourney](https://datascientistjourney.wordpress.com/category/data-science/)
- [Blogue de visualisation des taxis de New York](https://chriswhong.github.io/nyctaxi/)
- [Data-Mania](https://www.data-mania.com/)
- [Data-Magnum](https://data-magnum.com/)
- [datascopeanalytics](https://datascopeanalytics.com/blog/)
- [Transformation numérique](https://tarrysingh.com/)
- [datascientistjourney](https://datascientistjourney.wordpress.com/category/data-science/)
- [Data Mania Blog](https://www.data-mania.com/blog/) - [The File Drawer](https://chris-said.io/) - Blogue scientifique de Chris Said.
- [Page Web d’Emilio Ferrara](https://www.emilio.ferrara.name/)
- [DataNews](https://datanews.tumblr.com/)
- [Reddit TextMining](https://www.reddit.com/r/textdatamining/)
- [Periscopic](https://periscopic.com/#!/news)
- [Hilary Parker](https://hilaryparker.com/)
- [Data Stories](https://datastori.es/)
- [Data Science Lab](https://datasciencelab.wordpress.com/)
- [Meaning of](https://www.kennybastani.com/)
- [Adventures in Data Land](https://blog.smola.org)
- [Dataclysm](https://theblog.okcupid.com/)
- [FlowingData](https://flowingdata.com/) - Visualisation et statistiques.
- [Calculated Risk](https://www.calculatedriskblog.com/)
- [O'reilly Learning Blog](https://www.oreilly.com/content/topics/oreilly-learning/)
- [Dominodatalab](https://blog.dominodatalab.com/)
- [i am trask](https://iamtrask.github.io/) - Blogue consacré à l’artisanat de l’apprentissage automatique.
- [Vade-mecum de la science des données pratique](https://datasciencevademecum.wordpress.com/) - Manuel et recettes pour concevoir des solutions guidées par les données à des problèmes concrets.
- [Dataconomy](https://dataconomy.com/) - Blogue sur l’économie émergente des données.
- [Springboard](https://www.springboard.com/blog/) - Blogue proposant des ressources pour les personnes qui apprennent la science des données.
- [Analytics Vidhya](https://www.analyticsvidhya.com/) - Site complet proposant du matériel d’étude sur la science des données et l’analytique.
- [Le rasoir d’Occam](https://www.kaushik.net/avinash/) - Spécialisé en analytique Web.
- [Data School](https://www.dataschool.io/) - Tutoriels de science des données pour débutants !
- [Blogue de Colah](https://colah.github.io) - Blogue pour comprendre les réseaux de neurones !
- [Blogue de Sebastian](https://ruder.io/#open) - Blogue sur le TAL et l’apprentissage par transfert !
- [Distill](https://distill.pub) - Consacré à des explications claires de l’apprentissage automatique !
- [Site Web de Chris Albon](https://chrisalbon.com/) - Notes sur la science des données et l’IA.
- [Andrew Carr](https://andrewnc.github.io/blog/blog.html) - Science des données avec des langages de programmation ésotériques.
- [floydhub](https://blog.floydhub.com/introduction-to-genetic-algorithms/) - Blogue sur les algorithmes évolutionnaires.
- [Jingles](https://jinglescode.github.io/) - Analyse et synthèse des concepts clés d’articles universitaires.
- [nbshare](https://www.nbshare.io/notebooks/data-science/) - Notebooks de science des données.
- [Loic Tetrel](https://ltetrel.github.io/) - Blogue sur la science des données.
- [Blogue de Chip Huyen](https://huyenchip.com/blog/) - Ingénierie du ML, MLOps et utilisation du ML dans les jeunes entreprises.
- [Maria Khalusova](https://www.mariakhalusova.com/) - Blogue sur la science des données.
- [Aditi Rastogi](https://medium.com/@aditi2507rastogi) - Blogue sur le ML, l’apprentissage profond et la science des données.
- [Santiago Basulto](https://medium.com/@santiagobasulto) - Science des données avec Python.
- [Akhil Soni](https://medium.com/@akhil0435) - ML, apprentissage profond et science des données.
- [Akhil Soni](https://akhilworld.hashnode.dev/) - ML, apprentissage profond et science des données.
- [Blogues Applied AI](https://www.appliedaicourse.com/blog/) - Articles approfondis sur l’IA, l’apprentissage automatique et les concepts de science des données, avec des applications pratiques.
- [Blogues Scaler](https://www.scaler.com/blog/) - Contenu éducatif sur le développement logiciel, l’IA et l’évolution de carrière dans le secteur technologique.
- [Mlu github](https://mlu-explain.github.io/) - Mlu est développé par Amazon pour aider les personnes qui travaillent dans le domaine du ML ; vous pouvez tout apprendre à partir des bases grâce aux diagrammes interactifs.
- [Jan Oliver Rüdiger](https://notesjor.de/) - ML, apprentissage profond et science des données, avec une spécialisation en exploration de textes et de données.

### Présentations
**[`^        retour en haut        ^`](#awesome-data-science)**

- [Comment devenir scientifique des données](https://www.slideshare.net/ryanorban/how-to-become-a-data-scientist)
- [Introduction à la science des données](https://www.slideshare.net/NikoVuokko/introduction-to-data-science-25391618)
- [Introduction à la science des données pour les mégadonnées d’entreprise](https://www.slideshare.net/pacoid/intro-to-data-science-for-enterprise-big-data)
- [Comment mener un entretien avec un scientifique des données](https://www.slideshare.net/dtunkelang/how-to-interview-a-data-scientist)
- [Comment partager des données avec un statisticien](https://github.com/jtleek/datasharing)
- [La science d’une brillante carrière en science des données](https://www.slideshare.net/katemats/the-science-of-a-great-career-in-data-science)
- [Que fait un scientifique des données ?](https://www.slideshare.net/datasciencelondon/big-data-sorry-data-science-what-does-a-data-scientist-do)
- [Créer une jeune entreprise axée sur les données : rapidement, à grande échelle et avec détermination](https://www.slideshare.net/medriscoll/driscoll-strata-buildingdatastartups25may2011clean)
- [Comment gagner des compétitions de science des données avec l’apprentissage profond](https://www.slideshare.net/0xdata/how-to-win-data-science-competitions-with-deep-learning)
- [Scientifique des données généraliste](https://www.slideshare.net/AlexeyGrigorev/fullstack-data-scientist)

### Balados
**[`^        retour en haut        ^`](#awesome-data-science)**

- [AI at Home](https://podcasts.apple.com/us/podcast/data-science-at-home/id1069871378)
- [AI Today](https://www.cognilytica.com/aitoday/)
- [Adversarial Learning](https://adversariallearning.com/)
- [Chai time Data Science](https://www.youtube.com/playlist?list=PLLvvXm0q8zUbiNdoIazGzlENMXvZ9bd3x)
- [Chain of Thought](https://www.chainofthought.show/)
- [Data Engineering Podcast](https://www.dataengineeringpodcast.com/)
- [Data Science at Home](https://datascienceathome.com/)
- [Data Science Mixer](https://community.alteryx.com/t5/Data-Science-Mixer/bg-p/mixer)
- [Data Skeptic](https://dataskeptic.com/)
- [Data Stories](https://datastori.es/)
- [Datacast](https://jameskle.com/writes/category/Datacast)
- [DataFramed](https://www.datacamp.com/community/podcast)
- [DataTalks.Club](https://anchor.fm/datatalksclub)
- [Gradient Descent](https://wandb.ai/fully-connected/gradient-descent)
- [Learning Machines 101](https://www.learningmachines101.com/)
- [Let's Data (Brésil)](https://www.youtube.com/playlist?list=PLn_z5E4dh_Lj5eogejMxfOiNX3nOhmhmM)
- [Linear Digressions](https://lineardigressions.com/)
- [Not So Standard Deviations](https://nssdeviations.com/)
- [Balado O'Reilly Data Show](https://www.oreilly.com/radar/topics/oreilly-data-show-podcast/)
- [Partially Derivative](https://partiallyderivative.com/)
- [Superdatascience](https://www.superdatascience.com/podcast/)
- [The Data Engineering Show](https://www.dataengineeringshow.com/)
- [The Radical AI Podcast](https://www.radicalai.org/)
- [What's The Point](https://fivethirtyeight.com/tag/whats-the-point/)
- [Balado Analytics Engineering](https://roundup.getdbt.com/s/the-analytics-engineering-podcast)

### Vidéos et chaînes YouTube
**[`^        retour en haut        ^`](#awesome-data-science)**

- [Qu’est-ce que l’apprentissage automatique ?](https://www.youtube.com/watch?v=WXHM_i-fgGo)
- [Andrew Ng : apprentissage profond, apprentissage autodidacte et apprentissage non supervisé de caractéristiques](https://www.youtube.com/watch?v=n1ViNeWhC24)
- [Data36 - La science des données pour débutants, par Tomi Mester](https://www.youtube.com/c/TomiMesterData36comDataScienceForBeginners)
- [Apprentissage profond : l’intelligence issue des mégadonnées](https://www.youtube.com/watch?v=czLI3oLDe8M)
- [Entretien avec Geoffrey Hinton, « parrain » de l’IA et de l’apprentissage profond chez Google](https://www.youtube.com/watch?v=1Wp3IIpssEc)
- [Introduction à l’apprentissage profond avec Python](https://www.youtube.com/watch?v=S75EdAcXHKk)
- [Qu’est-ce que l’apprentissage automatique et comment fonctionne-t-il ?](https://www.youtube.com/watch?v=elojMnjn4kk)
- [CampusX](https://www.youtube.com/@campusx-official)
- [Data School](https://www.youtube.com/channel/UCnVzApLJE2ljPZSeQylSEyg) - Formation en science des données.
- [Réseaux de neurones pour débutants, par Melanie Warrick (mai 2015)](https://www.youtube.com/watch?v=Cu6A96TUy_o)
- [Série vidéo sur les réseaux de neurones, par Hugo Larochelle](https://www.youtube.com/playlist?list=PL6Xpj9I5qXYEcOhn7TqghAJ6NAPrNmUBH)
- [Shane Legg, cofondateur de Google DeepMind - Superintelligence artificielle](https://www.youtube.com/watch?v=evNCyRL3DOU)
- [Introduction à la science des données](https://www.youtube.com/watch?v=cHzvYxBN9Ls&list=PLPqVjP3T4RIRsjaW07zoGzH-Z4dBACpxY)
- [Science des données avec des algorithmes génétiques](https://www.youtube.com/watch?v=lpD38NxTOnk)
- [La science des données pour débutants](https://www.youtube.com/playlist?list=PL2zq7klxX5ATMsmyRazei7ZXkP1GHt-vs)
- [DataTalks.Club](https://www.youtube.com/channel/UCDvErgK0j5ur3aLgn6U-LqQ)
- [Mildlyoverfitted - Tutoriels sur des sujets intermédiaires de ML et d’apprentissage profond](https://www.youtube.com/channel/UCYBSjwkGTK06NnDnFsOcR7g)
- [mlops.community - Entretiens avec des spécialistes du secteur sur le ML en production](https://www.youtube.com/channel/UCYBSjwkGTK06NnDnFsOcR7g)
- [ML Street Talk - Sans détour, technique et non commercial : aucune présentation commerciale agaçante.](https://www.youtube.com/c/machinelearningstreettalk)
- [Réseaux de neurones par 3Blue1Brown ](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
- [Réseaux de neurones à partir de zéro, par Sentdex](https://www.youtube.com/playlist?list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3)
- [Chaîne YouTube de Manning Publications](https://www.youtube.com/c/ManningPublications/featured)
- [Demandez au Dr Chong : comment diriger une équipe de science des données - Partie 1](https://youtu.be/JYuQZii5o58)
- [Demandez au Dr Chong : comment diriger une équipe de science des données - Partie 2](https://youtu.be/SzqIXV-O-ko)
- [Demandez au Dr Chong : comment diriger une équipe de science des données - Partie 3](https://youtu.be/Ogwm7k_smTA)
- [Demandez au Dr Chong : comment diriger une équipe de science des données - Partie 4](https://youtu.be/a9usjdzTxTU)
- [Demandez au Dr Chong : comment diriger une équipe de science des données - Partie 5](https://youtu.be/MYdQq-F3Ws0)
- [Demandez au Dr Chong : comment diriger une équipe de science des données - Partie 6](https://youtu.be/LOOt4OVC3hY)
- [Modèles de régression : appliquer une régression de Poisson simple](https://www.youtube.com/watch?v=9Hk8K8jhiOo)
- [Architectures d’apprentissage profond](https://www.youtube.com/playlist?list=PLv8Cp2NvcY8DpVcsmOT71kymgMmcr59Mf)
- [Modélisation et analyse des séries temporelles](https://www.youtube.com/playlist?list=PL3N9eeOlCrP5cK0QRQxeJd6GrQvhAtpBK)
- [Serrano.Academy](https://www.youtube.com/@SerranoAcademy)
- [Parcours complet de science des données](https://www.youtube.com/watch?v=S_F_c9e2bz4&list=PLZoTAELRMXVPS-dOaVbAux22vzqdgoGhG)
- [Introduction à la science des données - LinkedIn](https://www.linkedin.com/learning/introduction-to-data-science-22668235/beginning-your-data-science-exploration?u=42458916)
- [AI Talks](https://aietalks.com/) - Résumés consultables et index thématique de conférences et de vidéos de congrès sur l’ingénierie pratique de l’IA.

## Échanger
**[`^        retour en haut        ^`](#awesome-data-science)**

Voici quelques liens vers les réseaux sociaux. Échangez avec d’autres scientifiques des données !

- [Comptes Facebook](#facebook-accounts)
- [Comptes Twitter](#twitter-accounts)
- [Chaînes Telegram](#telegram-channels)
- [Communautés Slack](#slack-communities)
- [Groupes GitHub](#github-groups)
- [Compétitions de science des données](#data-science-competitions)


### Comptes Facebook
**[`^        retour en haut        ^`](#awesome-data-science)**

- [Data](https://www.facebook.com/data)
- [Big Data Scientist](https://www.facebook.com/Bigdatascientist)
- [Data Science Day](https://www.facebook.com/datascienceday/)
- [Data Science Academy](https://www.facebook.com/nycdatascience)
- [Page Facebook de Data Science](https://www.facebook.com/pages/Data-science/431299473579193?ref=br_rs)
- [Data Science London](https://www.facebook.com/pages/Data-Science-London/226174337471513)
- [Data Science Technology and Corporation](https://www.facebook.com/DataScienceTechnologyCorporation?ref=br_rs)
- [Science des données - Groupe fermé](https://www.facebook.com/groups/1394010454157077/?ref=br_rs)
- [Center for Data Science](https://www.facebook.com/centerdatasciences?ref=br_rs)
- [Mégadonnées, Hadoop, NoSQL, Hive, HBase](https://www.facebook.com/groups/bigdatahadoop/)
- [Analytique, exploration de données, modélisation prédictive, intelligence artificielle](https://www.facebook.com/groups/data.analytics/)
- [Analytique des mégadonnées avec R](https://www.facebook.com/groups/434352233255448/)
- [Analytique des mégadonnées avec R et Hadoop](https://www.facebook.com/groups/rhadoop/)
- [Apprentissage des mégadonnées](https://www.facebook.com/groups/bigdatalearnings/)
- [Mégadonnées, science des données, exploration de données et statistiques](https://www.facebook.com/groups/bigdatastatistics/)
- [Experts BigData/Hadoop](https://www.facebook.com/groups/BigDataExpert/)
- [Exploration de données / apprentissage automatique / IA](https://www.facebook.com/groups/machinelearningforum/)
- [Exploration de données / mégadonnées - Analyse des réseaux sociaux](https://www.facebook.com/groups/dataminingsocialnetworks/)
- [Vade-mecum de la science des données pratique](https://www.facebook.com/datasciencevademecum)
- [Veri Bilimi Istanbul](https://www.facebook.com/groups/veribilimiistanbul/)
- [The Data Science Blog](https://www.facebook.com/theDataScienceBlog/)


### Comptes Twitter
**[`^        retour en haut        ^`](#awesome-data-science)**
| Twitter | Description |
| --- | --- |
| [Big Data Combine](https://twitter.com/BigDataCombine) | Essais éclair en direct pour les scientifiques des données qui cherchent à monétiser leurs modèles en les transformant en stratégies de trading. |
| Big Data Mania | Expert en visualisation de données, journaliste de données, spécialiste de la croissance, auteur de Data Science for Dummies (2015). |
| [Big Data Science](https://twitter.com/analyticbridge) | Mégadonnées, science des données, modélisation prédictive, analytique d’entreprise, Hadoop, aide à la décision et recherche opérationnelle. |
| Charlie Greenbacker | Directeur de la science des données chez @ExploreAltamira. |
| [Chris Said](https://twitter.com/Chris_Said) | Scientifique des données chez Twitter. |
| [Clare Corthell](https://twitter.com/clarecorthell) | Développement, conception et science des données chez @mattermark #hackerei. |
| [DADI Charles-Abner](https://twitter.com/DadiCharles) | #datascientist chez @Ekimetrics. #machinelearning #dataviz #DynamicCharts #Hadoop #R #Python #NLP #Bitcoin #dataenthousiast |
| [Data Science Central](https://twitter.com/DataScienceCtrl) | Data Science Central est la principale ressource du secteur pour les spécialistes des mégadonnées. |
| [Data Science London](https://twitter.com/ds_ldn)  | Science des données. Mégadonnées. Astuces sur les données. Passionnés des données. Jeunes entreprises axées sur les données. Données ouvertes. |
| [Data Science Renee](https://twitter.com/BecomingDataSci) | Journal de mon parcours : analyste de données SQL, je poursuis une maîtrise en ingénierie pour devenir scientifique des données. |
| [Data Science Report](https://twitter.com/TedOBrien93) | Mission : accompagner et faire progresser les carrières en science des données et en analytique. |
| [Data Science Tips](https://twitter.com/datasciencetips) | Conseils et astuces pour les scientifiques des données du monde entier ! #datascience #bigdata |
| [Data Vizzard](https://twitter.com/DataVisualizati) | Visualisation de données, sécurité, armée. |
| [DataScienceX](https://twitter.com/DataScienceX) |  |
| deeplearning4j | |
| [DJ Patil](https://twitter.com/dpatil) | Responsable des données à la Maison-Blanche, vice-président chez @ RelateIQ. |
| [Domino Data Lab](https://twitter.com/DominoDataLab) | |
| [Drew Conway](https://twitter.com/drewconway) | Passionné de données, pirate informatique, étudiant des conflits. |
| Emilio Ferrara | #Réseaux, #ApprentissageAutomatique et #ScienceDesDonnées. Je travaille sur les #MédiasSociaux. Chercheur postdoctoral à @IndianaUniv. |
| [Erin Bartolo](https://twitter.com/erinbartolo) | Je cours avec les #BigData, tout en entretenant une relation amour-haine avec leur engouement. Responsable du programme #DataScience à @iSchoolSU. |
| [Greg Reda](https://twitter.com/gjreda)  | Travaille chez _GrubHub_ sur les données et Pandas. |
| [Gregory Piatetsky](https://twitter.com/kdnuggets) | Président de KDnuggets, expert en analytique, mégadonnées, exploration de données et science des données ; cofondateur de KDD et SIGKDD ; ancien scientifique en chef de deux jeunes entreprises ; philosophe à temps partiel. |
| [Hadley Wickham](https://twitter.com/hadleywickham) | Scientifique en chef chez RStudio et professeur auxiliaire de statistiques à l’Université d’Auckland, à Stanford et à Rice. |
| [Hakan Kardas](https://twitter.com/hakan_kardes) | Scientifique des données. |
| [Hilary Mason](https://twitter.com/hmason) | Scientifique des données en résidence chez @accel. |
| [Jeff Hammerbacher](https://twitter.com/hackingdata)  | Retweete des publications sur la science des données. |
| [John Myles White](https://twitter.com/johnmyleswhite)  | Scientifique chez Facebook et développeur Julia. Auteur de Machine Learning for Hackers et Bandit Algorithms for Website Optimization. Mes tweets n’engagent que moi. |
| [Juan Miguel Lavista](https://twitter.com/BDataScientist) | Scientifique principal des données au sein de l’équipe Science des données de Microsoft. |
| [Julia Evans](https://twitter.com/b0rk) | Pirate informatique - Pandas - Analyse de données. |
| [Kenneth Cukier](https://twitter.com/kncukier) | Rédacteur en chef des données à The Economist et coauteur de Big Data (https://www.big-data-book.com/). |
| Kevin Davenport | Organisateur du groupe https://www.meetup.com/San-Diego-Data-Science-R-Users-Group/ |
| [Kevin Markham](https://twitter.com/justmarkham) | Formateur en science des données et fondateur de [Data School](https://www.dataschool.io/). |
| [Kim Rees](https://twitter.com/krees) | Visualisation interactive des données et outils. Flâneur des données. |
| [Kirk Borne](https://twitter.com/KirkDBorne) | Scientifique des données, astrophysicien titulaire d’un doctorat, influenceur de premier plan des #BigData. |
| Linda Regber | Raconte des histoires avec des données et des visualisations. |
| [Luis Rei](https://twitter.com/lmrei) | Doctorant. Programmation, mobile et Web. Intelligence artificielle, robotique intelligente, apprentissage automatique, exploration de données, traitement du langage naturel et science des données. |
| Mark Stevenson | Spécialiste du recrutement en analytique des données chez Salt (@SaltJobs) ; analytique, informations, mégadonnées et science des données. |
| [Matt Harrison](https://twitter.com/__mharrison__) | Opinions d’un spécialiste Python généraliste, auteur et formateur, actuellement scientifique des données. Parle parfois de parentalité, de vie de couple et de jardinage biologique. |
| [Matthew Russell](https://twitter.com/ptwobrussell) | Explorer les réseaux sociaux. |
| [Mert Nuhoğlu](https://twitter.com/mertnuhoglu)  | Scientifique des données chez BizQualify, développeur. |
| [Monica Rogati](https://twitter.com/mrogati) | Données chez Jawbone. A transformé des données en récits et en produits chez LinkedIn. Exploration de textes, apprentissage automatique appliqué et systèmes de recommandation. Ancienne joueuse, ancienne codeuse en langage machine, créatrice de noms. |
| [Noah Iliinsky](https://twitter.com/noahi) | Concepteur de visualisations et d’interactions. Cycliste pragmatique. Auteur de livres sur la visualisation : https://www.oreilly.com/pub/au/4419 |
| [Paul Miller](https://twitter.com/PaulMiller) | Analyste et consultant en informatique en nuage, mégadonnées et données ouvertes. Auteur, conférencier et animateur. Analyste pour Gigaom Research. |
| [Peter Skomoroch](https://twitter.com/peteskomoroch) | Crée des systèmes intelligents pour automatiser les tâches et améliorer les décisions. Entrepreneur, ancien scientifique principal des données chez @LinkedIn. Apprentissage automatique, gestion de produits et réseaux. |
| [Prash Chan](https://twitter.com/MDMGeek) | Architecte de solutions chez IBM, spécialiste de la gestion de données de référence, de la qualité et de la gouvernance des données. Blogueur sur la science des données, Hadoop, les mégadonnées et le cloud. |
| [Science des données sur Quora](https://twitter.com/q_datascience)  | Thème de la science des données sur Quora. |
| [R-Bloggers](https://twitter.com/Rbloggers) | Tweets sur les articles de la blogosphère R, les conférences de science des données et (!) les offres d’emploi pour scientifiques des données. |
| [Rand Hindi](https://twitter.com/randhindi) |  |
| [Randy Olson](https://twitter.com/randal_olson) | Informaticien qui mène des recherches sur l’intelligence artificielle. Bricoleur de données. Responsable de la communauté @DataIsBeautiful. Défenseur de la #ScienceOuverte. |
| [Recep Erol](https://twitter.com/EROLRecep) | Passionné de science des données à l’UALR. |
| [Ryan Orban](https://twitter.com/ryanorban) | Scientifique des données, origamiste génétique, passionné de matériel informatique. |
| [Sean J. Taylor](https://twitter.com/seanjtaylor) | Spécialiste des sciences sociales. Pirate informatique. Équipe Science des données de Facebook. Domaines : expériences, inférence causale, statistiques, apprentissage automatique et économie. |
| [Silvia K. Spiva](https://twitter.com/silviakspiva) | #ScienceDesDonnées chez Cisco. |
| [Harsh B. Gupta](https://twitter.com/harshbg) | Scientifique des données chez BBVA Compass. |
| [Spencer Nelson](https://twitter.com/spenczar_n) | Passionné de données. |
| [Talha Oz](https://twitter.com/tozCSS) | Aime ABM, SNA, DM, ML, TAL, HI, Python et Java. Dans le centile supérieur de Kaggle parmi les scientifiques des données. |
| [Tasos Skarlatidis](https://twitter.com/anskarl) | Traitement d’événements complexes, mégadonnées, intelligence artificielle et apprentissage automatique. Passionné de programmation et de logiciels libres. |
| [Terry Timko](https://twitter.com/Terry_Timko) | Gouvernance de l’information ; mégadonnées ; données en tant que service ; science des données ; convergence des données ouvertes, sociales et commerciales. |
| [Tony Baer](https://twitter.com/TonyBaer) | Analyste informatique chez Ovum, spécialisé dans les mégadonnées et la gestion des données, avec quelques incursions en ingénierie des systèmes. |
| [Tony Ojeda](https://twitter.com/tonyojeda3) | Scientifique des données, auteur et entrepreneur. Cofondateur de @DataCommunityDC. Fondateur de @DistrictDataLab. #DataScience #BigData #DataDC |
| [Vamshi Ambati](https://twitter.com/vambati) | Science des données chez PayPal. #TAL, #apprentissageautomatique ; titulaire d’un doctorat et ancien étudiant de Carnegie Mellon (blogue : https://allthingsds.wordpress.com ). |
| [Wes McKinney](https://twitter.com/wesmckinn) | Pandas (bibliothèque Python d’analyse des données). |
| [WileyEd](https://twitter.com/WileyEd) | Gestionnaire principal - analytique des mégadonnées chez @Seagate, ancien de @McKinsey ; évangéliste des #BigData et de l’#Analytique, passionné de #Hadoop, #Cloud, #Digital et #R. |
| [Équipe Data News de WNYC](https://twitter.com/datanews) | Équipe d’information sur les données de @WNYC. Pratique le journalisme guidé par les données, le rend visuel et présente son travail. |
| [Alexey Grigorev](https://twitter.com/Al_Grigor) | Auteur spécialisé en science des données. |
| [İlker Arslan](https://twitter.com/ilkerarslan_35) | Auteur spécialisé en science des données. Publie surtout sur la programmation Julia. |
| [INEVITABLE](https://twitter.com/WeAreInevitable) | Jeune entreprise britannique spécialisée en IA et en science des données. |
| [Jan Oliver Rüdiger](https://x.com/notesJOR) | ML, apprentissage profond et science des données, avec une spécialisation en exploration de textes et de données. |

### Chaînes Telegram
**[`^        retour en haut        ^`](#awesome-data-science)**

- [Open Data Science](https://t.me/opendatascience) – Première chaîne Telegram consacrée à la science des données. Actualités techniques et grand public sur tous les domaines liés à la science des données : IA, mégadonnées, apprentissage automatique, statistiques, mathématiques générales et leurs applications.
- [Loss function porn](https://t.me/loss_function_porn) — Publications visuellement saisissantes sur la science des données et le ML, illustrées par des vidéos ou des graphiques.
- [Machinelearning](https://t.me/ai_machinelearning_big_data) – Actualités quotidiennes sur le ML.


### Communautés Slack
[haut](#awesome-data-science)

- [DataTalks.Club](https://datatalks.club)

### Groupes GitHub
- [Berkeley Institute for Data Science](https://github.com/BIDS)

### Compétitions de science des données

Quelques plateformes de compétitions d’exploration de données

- [Kaggle](https://www.kaggle.com/)
- [DrivenData](https://www.drivendata.org/)
- [Analytics Vidhya](https://datahack.analyticsvidhya.com/)
- [InnoCentive](https://www.innocentive.com/)
- [Microprediction](https://www.microprediction.com/python-1)

## Pour le plaisir

- [Infographies](#infographics)
- [Jeux de données](#datasets)
- [Bandes dessinées](#comics)


### Infographies
**[`^        retour en haut        ^`](#awesome-data-science)**

| Aperçu                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<img src="https://i.imgur.com/0OoLaa5.png" width="150" />](https://i.imgur.com/0OoLaa5.png)                                                                                                                                                | [Principales différences entre un scientifique des données et un ingénieur des données](https://searchbusinessanalytics.techtarget.com/feature/Key-differences-of-a-data-scientist-vs-data-engineer)                                                                                         |
| [<img src="https://cloud.githubusercontent.com/assets/182906/19517857/604f88d8-960c-11e6-97d6-16c9738cb824.png" width="150" />](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/DataScienceEightSteps_Full.png)                    | Guide visuel pour devenir scientifique des données en 8 étapes par [DataCamp](https://www.datacamp.com) [(image)](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/DataScienceEightSteps_Full.png)                                                              |
| [<img src="https://i.imgur.com/W2t2Roz.png" width="150" />](https://i.imgur.com/FxsL3b8.png)                                                                                                                                                | Carte mentale des compétences requises ([image](https://i.imgur.com/FxsL3b8.png))                                                                                                                                                                                          |
| [<img src="https://i.imgur.com/rb9ruaa.png" width="150" />](https://nirvacana.com/thoughts/wp-content/uploads/2013/07/RoadToDataScientist1.png)                                                                                              | Swami Chandrasekaran a créé un [programme sous forme de plan de métro](https://nirvacana.com/thoughts/2013/07/08/becoming-a-data-scientist/).                                                                                                                                            |
| [<img src="https://i.imgur.com/XBgKF2l.png" width="150" />](https://i.imgur.com/4ZBBvb0.png)                                                                                                                                                | par [@kzawadz](https://twitter.com/kzawadz) via [Twitter](https://twitter.com/MktngDistillery/status/538671811991715840)                                                                                                                                      |
| [<img src="https://i.imgur.com/l9ZGtal.jpg" width="150" />](https://i.imgur.com/xLY3XZn.jpg)                                                                                                                                                | Par [Data Science Central](https://www.datasciencecentral.com/)                                                                                                                                                                                                |
| [<img src="https://i.imgur.com/TWkB4X6.png" width="150" />](https://i.imgur.com/0TydZ4M.png)                                                                                                                                                | Guerre de la science des données : R contre Python                                                                                                                                                                                                                               |
| [<img src="https://i.imgur.com/gtTlW5I.png" width="150" />](https://i.imgur.com/HnRwlce.png)                                                                                                                                                | Comment choisir les techniques statistiques ou d’apprentissage automatique                                                                                                                                                                                                     |
| [<img src="https://scikit-learn.org/1.5/_downloads/b82bf6cd7438a351f19fac60fbc0d927/ml_map.svg" width="150" />](https://scikit-learn.org/1.5/_downloads/b82bf6cd7438a351f19fac60fbc0d927/ml_map.svg)                                                                                                           | [Choisir le bon estimateur](https://scikit-learn.org/1.5/machine_learning_map.html#choosing-the-right-estimator)                                                                                                                                                                                                                                 |
| [<img src="https://i.imgur.com/3JSyUq1.png" width="150" />](https://i.imgur.com/uEqMwZa.png)                                                                                                                                                | Le secteur de la science des données : qui fait quoi                                                                                                                                                                                                                     |
| [<img src="https://i.imgur.com/DQqFwwy.png" width="150" />](https://i.imgur.com/RsHqY84.png)                                                                                                                                                | Diagramme ~~de Venn~~ d’Euler de la science des données                                                                                                                                                                                                                          |
| [<img src="https://www.springboard.com/blog/wp-content/uploads/2016/03/20160324_springboard_vennDiagram.png" width="150" height="150" />](https://www.springboard.com/blog/wp-content/uploads/2016/03/20160324_springboard_vennDiagram.png) | Diverses compétences et fonctions en science des données de [Springboard](https://www.springboard.com)                                                                                       |
| [<img src="https://data-literacy.geckoboard.com/assets/img/data-fallacies-to-avoid-preview.jpg" width="150" alt="Data Fallacies To Avoid" />](https://data-literacy.geckoboard.com/poster/)                                                 | Une façon simple et accessible d’enseigner à vos collègues qui ne sont pas scientifiques des données ou statisticiens [comment éviter les erreurs liées aux données](https://data-literacy.geckoboard.com/poster/). Tiré des [leçons de littératie des données](https://data-literacy.geckoboard.com/) de Geckoboard. |

### Jeux de données
**[`^        retour en haut        ^`](#awesome-data-science)**

- [Academic Torrents](https://academictorrents.com/)
- [ADS-B Exchange](https://www.adsbexchange.com/data-samples/) - Jeux de données spécifiques aux aéronefs et aux sources de surveillance dépendante automatique en mode diffusion (ADS-B).
- [Jeu de données sur les thés chinois](https://chinatea.house/dataset/) - Jeu de données ouvert sélectionné de plus de 100 thés chinois, avec catégorie, origine, teneur en caféine, notes aromatiques, oxydation et paramètres d’infusion. Disponible en JSON et CSV.
- [Jeu de données sur le rendement des études universitaires](https://github.com/thomasthinks/college-roi-data) - Estimations du rendement à vie d’environ 30 000 programmes de baccalauréat américains répartis dans 1 775 établissements, établies à partir des données FREOPP, IPEDS et BEA sur les prix régionaux. Cinq fichiers CSV avec dictionnaire de données, licence CC BY 4.0 et DOI Zenodo.
- [Suivi des déplacements causés par l’IA](https://github.com/noahaust2/ai-displacement-tracker) - Jeu de données structuré recensant 92 événements de réduction des effectifs attribués à l’IA, touchant 453 748 travailleurs dans 12 pays et 11 secteurs. Formats JSON et CSV. Licence CC-BY-4.0.
- [Corpus de référence Packrift pour l’optimisation de l’emballage](https://packrift.github.io/packaging-optimization-benchmark-corpus/) - Jeu de données public de produits d’emballage, généré à partir de 1 000 références SKU aux spécifications exactes, avec fichiers CSV et JSON téléchargeables pour l’exécution des commandes en commerce électronique et l’analyse d’entrepôt.
- [Mesures du centrage des cartes Pokémon](https://github.com/rrh1441/pokemon-card-centering-measurements) - 320 annotations de centrage de style PSA (pourcentages des bordures gauche/droite et haut/bas, inclinaison) sur 302 cartes Pokémon réelles mises en vente sur eBay. CSV, licence CC BY 4.0 et DOI Zenodo.
- [Référence des prix de vente des cartes Pokémon par grade](https://github.com/rrh1441/pokemon-card-sold-price-reference) - Prix de vente médian par grade (brut, PSA 9, PSA 10) pour 486 cartes Pokémon, avec taille de l’échantillon et indicateur de confiance pour chaque carte. CSV, licence CC BY 4.0 et DOI Zenodo.
- [Instantanés de momentum Evidaxis](https://evidaxis.org) - Instantanés hebdomadaires de l’activité publique de développement et de citation des systèmes d’IA open source et natifs de la recherche, adressés par contenu et reproductibles à l’octet près à partir d’entrées publiques. Fichiers JSON et CSV par date, licence CC0, DOI 10.5281/zenodo.21076011.
- [hadoopilluminated.com](https://hadoopilluminated.com/hadoop_illuminated/Public_Bigdata_Sets.html)
- [data.gov](https://catalog.data.gov/dataset) - Portail des données ouvertes du gouvernement des États-Unis.
- [Bureau du recensement des États-Unis](https://www.census.gov/)
- [enigma.com](https://enigma.com/) - Explorez les données publiques : recherchez et analysez rapidement des milliards de registres publics publiés par des gouvernements, des entreprises et des organisations.
- [datahub.io](https://datahub.io/)
- [aws.amazon.com/datasets](https://aws.amazon.com/datasets/)
- [datacite.org](https://datacite.org/)
- [Portail officiel des données européennes](https://data.europa.eu/en)
- [NASDAQ:DATA](https://data.nasdaq.com/) - Nasdaq Data Link, source de premier plan de jeux de données financiers, économiques et alternatifs.
- [Congressional Stock Brain](https://congressionalstockbrain.com) - Outil gratuit propulsé par l’IA qui évalue l’importance des déclarations de transactions boursières des élus américains au titre du STOCK Act. Signaux évalués automatiquement à partir des déclarations publiques de 537 législateurs.
- [figshare.com](https://figshare.com/)
- [Bases de données téléchargeables GeoLite Legacy](https://dev.maxmind.com/geoip)
- [Jeux de données Hugging Face](https://huggingface.co/datasets)
- [Quartiers du Japon](https://japanneighborhoods.com) - Jeu de données en anglais sur les statistiques de criminalité à Tokyo, couvrant 5 078 quartiers sur 7 ans (36 222 enregistrements, 2018-2024), issu des données ouvertes de la police métropolitaine de Tokyo. Comprend une carte interactive de la criminalité, une cote de sécurité et un indice du coût de la vie. Licence CC BY.
- [Indice Quiet-Broke](https://jeevesagency.github.io/quiet-broke-index/) - Classement composite de 30 grandes agglomérations indiquant la part d’un revenu familial de 400 000 $ absorbée par le logement, les impôts, la garde d’enfants, la santé et le transport. Méthodologie ouverte, gratuit, sans formulaire d’inscription par courriel.
- [Crime Brasil](https://crimebrasil.com.br) - Plateforme de données ouvertes sur la criminalité au Brésil. Données au niveau des quartiers du Rio Grande do Sul (2,99 millions d’incidents dans 79 024 quartiers, 2022–2025), données municipales pour le MG et le RJ, ainsi que données nationales de la PRF sur les autoroutes et de DATASUS sur la violence interpersonnelle. API REST gratuite, formats CSV/Parquet, mises à jour quotidiennes, licence CC BY 4.0.
- [Accidents mortels de camions aux États-Unis (FARS), 2018-2024](https://doi.org/10.5281/zenodo.20487070) - Sous-ensemble filtré du système NHTSA de déclaration des accidents mortels, couvrant 33 898 accidents mortels impliquant des camions commerciaux moyens et lourds dans les 50 États américains entre 2018 et 2024. Comprend un [bulletin interactif Vision Zero](https://accidentlawyerreview.com/research/vision-zero-report-card/) comparant 19 villes, un pipeline Python reproductible sur [GitHub](https://github.com/MarvinBregiosa/vision-zero-fars) et un miroir Hugging Face. DOI permanent, licence CC BY 4.0.
- [État des peptides 2026](https://peptahub.com/state-of-peptides-2026) - Jeu de données de référence structuré répertoriant 156 composés peptidiques ou apparentés, chacun avec statut réglementaire, catégorie, voie, demi-vie, masse moléculaire, numéro CAS, nombre de références et identifiants PubChem/DrugBank/Wikidata. Formats CSV et JSON, sans connexion requise, licence CC BY 4.0.
- [Réponse de Quora sur les grands jeux de données](https://www.quora.com/Where-can-I-find-large-datasets-open-to-the-public)
- [Jeux de données publics sur les mégadonnées](https://hadoopilluminated.com/hadoop_illuminated/Public_Bigdata_Sets.html)
- [Jeux de données Kaggle](https://www.kaggle.com/datasets)
- [Un catalogue approfondi de la variation génétique humaine](https://www.internationalgenome.org/data)
- [Base de données communautaire sur des personnes, des lieux et des choses bien connus](https://developers.google.com/freebase/)
- [Données publiques de Google](https://www.google.com/publicdata/directory)
- [Données de la Banque mondiale](https://data.worldbank.org/)
- [Données des taxis de New York](https://chriswhong.github.io/nyctaxi/)
- [Données ouvertes de Philadelphie](https://www.opendataphilly.org/) Mettre les données de Philadelphie à la disposition de tous.
- [grouplens.org](https://grouplens.org/datasets/) Exemples de jeux de données sur les films (avec évaluations), les livres et Wikipédia.
- [Dépôt d’apprentissage automatique de l’Université de Californie à Irvine](https://archive.ics.uci.edu/ml/) - Contient des jeux de données adaptés à l’apprentissage automatique.
- [Jeux de données de qualité recherche](https://web.archive.org/web/20150320022752/https://bitly.com/bundles/hmason/1) par [Hilary Mason](https://web.archive.org/web/20150501033715/https://bitly.com/u/hmason/bundles)
- [Centres nationaux d’information environnementale](https://www.ncei.noaa.gov/)
- [ClimateData.us](https://www.climatedata.us/) (associé : [Boîte à outils sur la résilience climatique des États-Unis](https://toolkit.climate.gov/))
- [r/datasets](https://www.reddit.com/r/datasets/)
- [MapLight](https://www.maplight.org/data-series) - Propose gratuitement divers jeux de données pour des usages librement accessibles au grand public. Cliquez sur un jeu de données ci-dessous pour en savoir plus.
- [GHDx](https://ghdx.healthdata.org/) - Institute for Health Metrics and Evaluation : catalogue de jeux de données sanitaires et démographiques du monde entier, comprenant les résultats de l’IHME.
- [Données économiques de la Réserve fédérale de Saint-Louis - FRED](https://fred.stlouisfed.org/)
- [Institut néo-zélandais de recherche économique – Data1850](https://data1850.nz/)
- [Sources de données ouvertes](https://github.com/datasciencemasters/data)
- [Données de l’UNICEF](https://data.unicef.org/)
- [undata](https://data.un.org/)
- [Centre de données et d’applications socioéconomiques de la NASA - SEDAC](https://earthdata.nasa.gov/centers/sedac-daac)
- [Projet GDELT](https://www.gdeltproject.org/)
- [Suède, statistiques](https://www.scb.se/en/)
- [Explorateur de données StackExchange](https://data.stackexchange.com) - Outil open source pour exécuter des requêtes arbitraires sur les données publiques du réseau Stack Exchange.
- [Données ouvertes du gouvernement de San Francisco](https://datasf.org/opendata/)
- [Jeu de données IBM Asset](https://developer.ibm.com/exchanges/data/)
- [Indice des données ouvertes](https://index.okfn.org/)
- [Public Git Archive](https://github.com/src-d/datasets/tree/master/PublicGitArchive)
- [GHTorrent](https://ghtorrent.org/)
- [Données ouvertes de Microsoft Research](https://msropendata.com/)
- [Plateforme de données gouvernementales ouvertes de l’Inde](https://data.gov.in/)
- [Google Dataset Search (bêta)](https://datasetsearch.research.google.com/)
- [Actualités turques NAYN.CO classées par catégorie](https://github.com/naynco/nayn.data)
- [Covid-19](https://github.com/datasets/covid-19)
- [Covid-19 Google](https://github.com/google-research/open-covid-19-data)
- [Jeu de données sur les courriels d’Enron](https://www.cs.cmu.edu/~./enron/)
- [5 000 images de vêtements](https://github.com/alexeygrigorev/clothing-dataset)
- [Portail ouvert IBB](https://data.ibb.gov.tr/en/)
- [Échange de données humanitaires](https://data.humdata.org/)
- [Plus de 250 000 offres d’emploi](https://aws.amazon.com/marketplace/pp/prodview-p2554p3tczbes) - Jeu de données en expansion sur les offres d’emploi historiques au Luxembourg, de 2020 à aujourd’hui. Gratuit, avec plus de 250 000 annonces hébergées sur AWS Data Exchange.
- [FinancialData.Net](https://financialdata.net/documentation) - Jeux de données financiers (données boursières, états financiers, données sur la durabilité, etc.).
- [Indice des prix des disques durs](https://github.com/AdamDudley/hddhunt-price-index) - Jeu de données ouvert, mis à jour quotidiennement, sur le prix le plus bas par téraoctet (USD/TB) des disques durs internes SATA 3,5 pouces neufs sur Amazon US, ventilé par capacité et accompagné d’une série chronologique. Formats CSV, JSON et JSONL, sans connexion requise, licence CC BY 4.0.
- [Score BDE](https://github.com/hbhqq9/bde-score) - Analyse boursière multipays propulsée par l’IA, avec notation BDE transparente pour 73 titres (États-Unis, Hong Kong et actions A). Conforme à l’article 50 de la loi européenne sur l’IA. Licence MIT.
- [Google Dataset Search](https://datasetsearch.research.google.com/) – Trouvez des jeux de données sur le Web.
- [Collection de corpus notesjor](https://notes.jan-oliver-ruediger.de/korpora/) - Corpus gratuits (plus de 6 milliards de tokens), majoritairement en allemand historique et contemporain.
- [Dépôt CLARIN](https://lindat.mff.cuni.cz/repository/home) - CLARIN est un dépôt européen de jeux de données scientifiques.
- [GBIF](https://www.gbif.org/) - Système mondial d’information sur la biodiversité : plus de 2,4 milliards de signalements d’occurrences d’espèces. API ouverte et gratuite pour la modélisation écologique et la recherche en apprentissage automatique.
- [FAOSTAT](https://www.fao.org/faostat/en/) - Statistiques de la FAO sur la production et le commerce alimentaires, l’utilisation des terres et les émissions dans plus de 245 pays. API et téléchargement en masse gratuits.
- [Movebank](https://www.movebank.org/) - Plateforme gratuite qui archive plus de 6 milliards de données de déplacement animal issues de GPS et de télémétrie satellitaire. API REST ouverte, utile à la modélisation spatiotemporelle et au ML sur les trajectoires.
- [Encyclopedia of Life](https://eol.org/) - Données structurées ouvertes sur plus de 1,9 million d’espèces, notamment leurs caractéristiques, leur classification et des médias. API et téléchargements en masse gratuits pour la biodiversité et la classification des espèces.
- [FirstData](https://github.com/MLT-OSS/FirstData) - Base de connaissances la plus complète et la plus fiable au monde sur les sources de données. Plus de 210 sources sélectionnées provenant de gouvernements, d’organisations internationales et d’établissements de recherche. Intégration MCP pour les agents IA. Licence MIT.
- [latamdata-py](https://github.com/juanmoisesd/latamdata-py) - Package Python donnant accès en une ligne à 38 jeux de données de recherche ouverts d’Amérique latine (santé, neurosciences, santé mentale, économie). Installation : pip install latamdata-py.
- [ZipCheckup](https://github.com/artakulov/us-water-quality-data) - Données gratuites sur la sécurité environnementale par code postal pour plus de 42 000 codes postaux américains : qualité de l’eau et de l’air, contamination par les PFAS, radon, plomb, risque d’inondation et 11 autres domaines. API REST publique, packages npm/PyPI, licence CC BY 4.0.
- [Helium](https://heliumtrades.com/mcp-page/) - Corpus d’actualités en temps réel avec caractéristiques structurées de biais selon plus de 15 dimensions (plus de 3,2 millions d’articles, plus de 5 000 sources), données de marchés financiers en direct (actions, FNB, crypto) avec analyses générées par IA, tarification d’options par ML avec mesures de probabilité et grecques complètes, données historiques de chaînes d’options pour la recherche quantitative ; accessible par serveur MCP ou API REST.
- [Éléments probants vérifiés sur les compléments alimentaires](https://github.com/erinheit451/verified-supplement-evidence) - Jeu de données sur les compléments alimentaires, classé selon la solidité des preuves, couvrant la posologie, la biodisponibilité selon la forme, les interactions entre médicaments et nutriments, la prévalence des carences NHANES, les signaux d’effets indésirables FDA FAERS et le coût par dose efficace. Chaque affirmation clinique cite un identifiant PMID de PubMed. Licence CC BY 4.0, DOI 10.57967/hf/9356.
- [Paiements de l’industrie aux prestataires de soins américains](https://github.com/npiwho/us-provider-payments) - 1,65 million de prestataires de soins américains reliés par leur NPI aux paiements déclarés par les fabricants de médicaments et de dispositifs médicaux dans CMS Open Payments (2019-2025) : total, nombre de paiements, plus grand payeur et type de paiement, avec synthèses par État et spécialité. CSV compressé, sans connexion, licence CC0, DOI Zenodo 10.5281/zenodo.23098004.
- [WhatFontIs-Bench](https://github.com/whatfontis/WhatFontIs-Bench) - Référence synthétique pour l’identification de familles de polices, avec 11 995 images de mots composés dans 600 polices connues et annotés par des cadres autour des mots et des lettres.
- [Données tarifaires des États-Unis](https://github.com/checkdutyrates/us-tariff-data) - Tarif douanier harmonisé des États-Unis (environ 30 000 lignes avec taux), droits additionnels du chapitre 99 par pays (sections 301, 232 et autres) et droits d’importation de l’UE par sous-position SH et origine, actualisés à chaque révision du HTS. Formats CSV et JSON, sans connexion, licences CC0 (données américaines) et OGL v3 (données européennes), DOI Zenodo 10.5281/zenodo.23093989.


### Bandes dessinées
**[`^        retour en haut        ^`](#awesome-data-science)**

- [Compilation de bandes dessinées](https://medium.com/@nikhil_garg/a-compilation-of-comics-explaining-statistics-data-science-and-machine-learning-eeefbae91277)
- [Dessins humoristiques](https://www.kdnuggets.com/websites/cartoons.html)
- [Bandes dessinées sur la science des données](https://www.cartoonstock.com/directory/d/data_science.asp)
- [La science des données : l’édition XKCD](https://davidlindelof.com/data-science-the-xkcd-edition/)

## Autres listes remarquables

- Vous trouverez d’autres listes remarquablement géniales dans [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness).
- [Apprentissage automatique remarquable](https://github.com/josephmisiti/awesome-machine-learning)
- [listes](https://github.com/jnv/lists)
- [awesome-dataviz](https://github.com/javierluraschi/awesome-dataviz)
- [awesome-python](https://github.com/vinta/awesome-python)
- [Notebooks IPython de science des données.](https://github.com/donnemartin/data-science-ipython-notebooks)
- [awesome-r](https://github.com/qinwf/awesome-R)
- [awesome-datasets](https://github.com/awesomedata/awesome-public-datasets)
- [Tutoriels remarquables d’apprentissage automatique et profond](https://github.com/ujjwalkarn/Machine-Learning-Tutorials/blob/master/README.md)
- [Idées remarquables de science des données](https://github.com/JosPolfliet/awesome-ai-usecases)
- [Apprentissage automatique pour les ingénieurs logiciels](https://github.com/ZuzooVn/machine-learning-for-software-engineers)
- [Ressources de science des données sélectionnées par la communauté](https://hackr.io/tutorials/learn-data-science)
- [Apprentissage automatique remarquable sur le code source](https://github.com/src-d/awesome-machine-learning-on-source-code)
- [Détection communautaire remarquable](https://github.com/benedekrozemberczki/awesome-community-detection)
- [Classification de graphes remarquable](https://github.com/benedekrozemberczki/awesome-graph-classification)
- [Articles remarquables sur les arbres de décision](https://github.com/benedekrozemberczki/awesome-decision-tree-papers)
- [Articles remarquables sur la détection de fraude](https://github.com/benedekrozemberczki/awesome-fraud-detection-papers)
- [Articles remarquables sur le gradient boosting](https://github.com/benedekrozemberczki/awesome-gradient-boosting-papers)
- [Modèles remarquables de vision par ordinateur](https://github.com/nerox8664/awesome-computer-vision-models)
- [Recherche arborescente Monte-Carlo remarquable](https://github.com/benedekrozemberczki/awesome-monte-carlo-tree-search-papers)
- [Glossaire des termes courants de statistiques et d’apprentissage automatique](https://www.analyticsvidhya.com/glossary-of-common-statistics-and-machine-learning-terms/)
- [100 articles sur le TAL](https://github.com/mhagiwara/100-nlp-papers)
- [Jeux de données de jeux remarquables](https://github.com/leomaurodesenv/game-datasets#readme)
- [Préparation aux entretiens en ML/IA](https://github.com/aasimansari1/ml-interview-prep) - Plus de 500 questions-réponses d’entretien en ML/IA avec du code exécutable : fondamentaux du ML, apprentissage profond, TAL, PyTorch, pipelines scikit-learn et conception de systèmes.
- [Questions d’entretien en science des données](https://github.com/alexeygrigorev/data-science-interviews)
- [Raisonnement graphique explicable remarquable](https://github.com/AstraZeneca/awesome-explainable-graph-reasoning)
- [Principales questions d’entretien en science des données](https://www.interviewbit.com/data-science-interview-questions/)
- [Prédiction remarquable de synergie, d’interaction et de polypharmacie des médicaments](https://github.com/AstraZeneca/awesome-drug-pair-scoring)
- [Questions d’entretien sur l’apprentissage profond](https://www.adaface.com/blog/deep-learning-interview-questions/)
- [Principales tendances à venir en science des données en 2023](https://medium.com/the-modern-scientist/top-future-trends-in-data-science-in-2023-3e616c8998b8)
- [Comment l’IA générative transforme le travail créatif](https://hbr.org/2022/11/how-generative-ai-is-changing-creative-work)
- [Qu’est-ce que l’IA générative ?](https://www.techtarget.com/searchenterpriseai/definition/generative-AI)
- [Plus de 100 questions d’entretien en apprentissage automatique (du niveau débutant au niveau avancé)](https://www.appliedaicourse.com/blog/machine-learning-interview-questions/)
- [Projets de science des données](https://github.com/veb-101/Data-Science-Projects)
- [La science des données est-elle un bon choix de carrière ?](https://www.scaler.com/blog/is-data-science-a-good-career/)
- [L’avenir de la science des données : prédictions et tendances](https://www.appliedaicourse.com/blog/future-of-data-science/)
- [Science des données et apprentissage automatique : quelle différence ?](https://www.appliedaicourse.com/blog/data-science-and-machine-learning-whats-the-difference/)
- [L’IA en science des données : usages, rôles et outils](https://www.scaler.com/blog/ai-in-data-science/)
- [Les 13 principaux langages de programmation pour la science des données](https://www.appliedaicourse.com/blog/data-science-programming-languages/)
- [Plus de 40 idées de projets d’analytique des données](https://www.appliedaicourse.com/blog/data-analytics-projects-ideas/)
- [Meilleurs cours certifiants de science des données](https://www.appliedaicourse.com/blog/best-data-science-courses/)
- [Modèles d’IA générative](https://www.appliedaicourse.com/blog/generative-ai-models/)
- [Analyse de données remarquable](https://github.com/PavelGrigoryevDS/awesome-data-analysis) - Sélection d’outils, de bibliothèques et de ressources d’analyse de données.
- [Synthèse des preuves remarquable](https://github.com/evidencesynthesis-tools/awesome-evidence-synthesis) - Sélection d’outils open source pour les revues systématiques, les méta-analyses et la synthèse des preuves.
- [Packages mathématiques Python remarquables](https://github.com/VascoSch92/awesome_python_math_packages) - Sélection de packages Python pour les mathématiques, de l’algèbre linéaire et de l’optimisation aux statistiques et à la topologie.
- [AI Dev Jobs](https://aidevboard.com/) - Site d’offres d’emploi spécialisé dans l’ingénierie IA/ML, avec plus de 5 400 annonces et une API REST gratuite.


### Loisirs
- [Production musicale remarquable](https://github.com/ad-si/awesome-music-production)
