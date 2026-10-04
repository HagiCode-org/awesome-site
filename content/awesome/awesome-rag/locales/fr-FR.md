# 😎 Sélection de ressources sur la génération augmentée par récupération (RAG)
[![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Danielskry/Awesome-RAG) [![Awesome-RAG Agent Plugin](https://img.shields.io/badge/Agent_Plugin-Available-blueviolet)](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin)

Une sélection de ressources (outils, cadres logiciels, techniques et supports pédagogiques) pour créer des systèmes de génération augmentée par récupération (RAG). Ce dépôt recense l’écosystème RAG et propose des liens vers des sources de référence, des tutoriels et des implémentations pour vous aider à explorer et créer des applications RAG.

Également [disponible en tant que plugin d’agent](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin) pour VS Code, GitHub Copilot CLI et Claude Code.

## Vue d’ensemble

La **génération augmentée par récupération (RAG)** est une technique avancée d’IA générative qui améliore les grands modèles de langage (LLM) en récupérant dynamiquement des informations pertinentes dans des sources de connaissances externes et en les intégrant au moment de la génération. Contrairement aux LLM traditionnels, qui reposent uniquement sur leurs connaissances préentraînées, les systèmes RAG accèdent à des informations actualisées, spécialisées ou propriétaires, ce qui améliore considérablement la précision, réduit les hallucinations et permet l’intégration de connaissances en temps réel.

### Principaux avantages

- **Réduction des hallucinations** : ancre les réponses dans des informations factuelles récupérées
- **Adaptation au domaine** : permet aux LLM d’utiliser des connaissances spécialisées sans réglage fin
- **Mises à jour en temps réel** : intègre les informations les plus récentes sans réentraîner le modèle
- **Rentabilité** : plus économique que le réglage fin pour les tâches spécialisées
- **Transparence** : attribue les sources du contenu généré
- **Confidentialité et sécurité** : conserve les données sensibles dans des bases de connaissances privées

## Sommaire

- [ℹ️ Informations générales sur le RAG](#ℹ%EF%B8%8F-general-information-on-rag)
- [🏗️ Modèles d’architecture](#%EF%B8%8F-architecture-patterns)
- [🎯 Approches avancées](#-advanced-approaches)
- [🧰 Cadres logiciels facilitant le RAG](#-frameworks-that-facilitate-rag)
- [🐍 Écosystème Python pour le RAG](#-python-ecosystem-for-rag)
- [🛠️ Techniques](#-techniques)
- [📊 Métriques et évaluation](#-metrics--evaluation)
- [💾 Bases de données](#-databases)
- [🔌 Implémentations RAG spécifiques aux plateformes](#-platform-specific-rag-implementations)
- [🚀 Considérations pour la production](#-production-considerations)
- [💡 Bonnes pratiques](#-best-practices)

## ℹ️ Informations générales sur le RAG

Le RAG répond à une limite fondamentale des LLM : leurs connaissances s’arrêtent à une date donnée et ils ne peuvent pas accéder aux informations externes. Les implémentations RAG classiques enrichissent les prompts des LLM à l’aide de documents pertinents issus d’une base de connaissances. Par exemple, à une question sur les matériaux de rénovation d’une maison précise, un LLM peut connaître les règles générales de rénovation, mais ignorer les caractéristiques du logement. Un système RAG peut alors récupérer des documents utiles (plans, spécifications des matériaux, codes locaux du bâtiment) pour fournir une réponse exacte et contextualisée.

### Ressources de mise en œuvre

#### Tutoriels et exemples Python

- Implémentation de base complète de [RAG en Python](https://github.com/Danielskry/LangChain-Chroma-RAG-demo-2024) : exemple RAG complet avec LangChain et Chroma
- [Tutoriel RAG de LangChain](https://python.langchain.com/docs/use_cases/question_answering/) : guide complet pour créer des applications RAG
- [Tutoriel RAG de LlamaIndex](https://docs.llamaindex.ai/en/stable/getting_started/starter_example/) : prise en main de LlamaIndex pour le RAG
- [Pipeline RAG de Haystack](https://docs.haystack.deepset.ai/docs/retrieval-augmented-generation) : création de pipelines RAG avec Haystack
- [RAG Techniques](https://github.com/NirDiamant/RAG_Techniques) : collection complète et libre de techniques avancées de génération augmentée par récupération, sous forme de notebooks Jupyter exécutables.
- [RAG Interview System](https://github.com/ather-techie/rag-interview-system) : système de préparation aux entretiens basé sur le RAG, avec 418 questions-réponses sélectionnées (du niveau débutant au niveau avancé) couvrant 29 modèles d’architecture RAG.

- [Recherche avec Jev et Milvus](https://github.com/milvus-io/bootcamp/tree/master/bootcamp/RAG/search_with_jev) : neuf notebooks Python exécutables combinant des représentations vectorielles Gemini, la récupération avec Milvus et les jugements de Jev pour le reclassement, le filtrage du contexte, l’arrêt de la recherche, le routage, la réutilisation du cache, la curation, les garde-fous et l’évaluation.

#### Mise en production et bonnes pratiques

- [Modèles RAG et bonnes pratiques pour la production](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/) : stratégies d’optimisation du RAG prêtes pour la production
- [Guide de mise en production de LangChain](https://python.langchain.com/docs/production/) : déploiement d’applications LangChain en production
- [Bonnes pratiques de programmation asynchrone en Python](https://docs.python.org/3/library/asyncio-dev.html) : écriture de code Python asynchrone efficace pour les applications d’IA

## 🏗️ Modèles d’architecture

Les systèmes RAG peuvent s’appuyer sur différents modèles d’architecture selon les besoins :

- **RAG naïf** : pipeline élémentaire de récupération puis de génération, sans optimisation
- **RAG avancé** : intègre la reformulation des requêtes, le reclassement et la compression du contexte
- **RAG modulaire** : composants composables pour la récupération, le classement et la génération
- **RAG agentique** : agents pilotés par des LLM qui prennent dynamiquement des décisions de récupération
- **Self-RAG** : modèles qui évaluent eux-mêmes la qualité de la récupération et adaptent leurs stratégies
- **RAG par graphe** : exploite les graphes de connaissances pour récupérer des informations structurées
- **RAG fondé sur le raisonnement** : s’appuie sur le raisonnement en plusieurs étapes des LLM pour planifier, parcourir et exécuter la récupération

## 🎯 Approches avancées

Les implémentations RAG vont de la simple récupération de documents à des techniques avancées intégrant des boucles de rétroaction itératives, des systèmes multi-agents et des optimisations propres à un domaine. Parmi les approches modernes :

- [Vision-RAG](https://www.youtube.com/watch?v=npkp4mSweEg): Intègre des pages entières sous forme d’images afin que les modèles de vision raisonnent directement sans analyser le texte comme dans le RAG textuel.
- [Cache-Augmented Generation (CAG)](https://medium.com/@ronantech/cache-augmented-generation-cag-in-llms-a-step-by-step-tutorial-6ac35d415eec): Précharge les documents pertinents dans le contexte du modèle et stocke l’état d’inférence (cache clé-valeur, KV).
- [RAG agentique](https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_agentic_rag/) : ces agents, également appelés agents de récupération, peuvent prendre des décisions concernant les processus de récupération.
- [A-RAG](https://github.com/Ayanami0730/arag) : RAG agentique doté d’interfaces de récupération hiérarchiques (mots-clés, sémantique, niveau des blocs), permettant aux agents LLM de rechercher et de récupérer de façon autonome à plusieurs granularités. ([Article](https://arxiv.org/abs/2602.03442))
- [Corrective RAG](https://arxiv.org/pdf/2401.15884.pdf) (CRAG) : méthodes permettant de corriger ou d’affiner les informations récupérées avant leur intégration aux réponses du LLM.
- [Retrieval-Augmented Fine-Tuning](https://techcommunity.microsoft.com/t5/ai-ai-platform-blog/raft-a-new-way-to-teach-llms-to-be-better-at-rag/ba-p/4084674) (RAFT) : techniques de réglage fin des LLM spécifiquement pour améliorer les tâches de récupération et de génération.
- [Self Reflective RAG](https://selfrag.github.io/) : modèles qui adaptent dynamiquement les stratégies de récupération en fonction des retours sur leurs performances.
- [RAG Fusion](https://arxiv.org/abs/2402.03367) : techniques combinant plusieurs méthodes de récupération pour mieux intégrer le contexte.
- [Temporal Augmented Retrieval](https://adam-rida.medium.com/temporal-augmented-retrieval-tar-dynamic-rag-ad737506dfcc) (TAR) : prise en compte de données sensibles au facteur temps lors de la récupération.
- [Plan-then-RAG](https://arxiv.org/abs/2406.12430) (PlanRAG) : stratégies qui prévoient une étape de planification avant l’exécution du RAG pour les tâches complexes.
- [GraphRAG](https://github.com/microsoft/graphrag) : approche structurée qui utilise des graphes de connaissances pour améliorer l’intégration du contexte et le raisonnement.
- [Code-Graph-RAG](https://github.com/vitali87/code-graph-rag) : système RAG fondé sur un graphe de connaissances pour analyser des bases de code multilingues.
- [FLARE](https://medium.com/etoai/better-rag-with-active-retrieval-augmented-generation-flare-3b66646e2a9f) : approche qui intègre la génération augmentée par récupération active afin d’améliorer la qualité des réponses.
- [GNN-RAG](https://github.com/cmavro/GNN-RAG) : récupération par réseau de neurones de graphe pour le raisonnement des grands modèles de langage.
- [RAG multimodal](https://developer.nvidia.com/blog/an-easy-introduction-to-multimodal-retrieval-augmented-generation/) : étend le RAG à plusieurs modalités, notamment le texte, les images et l’audio.
- [VideoRAG](https://arxiv.org/abs/2501.05874) : étend le RAG aux vidéos à l’aide de grands modèles de langage vidéo (LVLM), qui récupèrent et intègrent du contenu visuel et textuel pour la génération multimodale.
- [REFRAG](https://arxiv.org/pdf/2509.01092) : optimise le décodage RAG en compressant le contexte récupéré sous forme de représentations vectorielles avant la génération, réduisant ainsi la latence tout en préservant la qualité des résultats.
- [InstructRAG](https://github.com/weizhepei/InstructRAG) : améliore la qualité de récupération et de génération des systèmes RAG grâce à un réglage fin par instructions utilisant des raisonnements synthétisés par le modèle.
- [PageIndex](https://github.com/VectifyAI/PageIndex) : cadre RAG sans vecteurs, fondé sur le raisonnement ; il construit des arbres documentaires hiérarchiques et effectue la récupération par recherche arborescente guidée par un LLM plutôt qu’à l’aide de représentations vectorielles et de la similarité vectorielle. Il élimine le découpage en blocs et les bases de données vectorielles, tout en offrant une récupération explicable et contextualisée pour les documents professionnels complexes.

## 🧰 Cadres logiciels facilitant le RAG

- [Haystack](https://github.com/deepset-ai/haystack) : cadre logiciel d’orchestration de LLM pour créer des applications LLM personnalisables et prêtes pour la production.
- [LangChain](https://python.langchain.com/docs/modules/data_connection/) : cadre logiciel polyvalent pour travailler avec des LLM.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) : SDK de Microsoft pour développer des applications d’IA générative.
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/) : cadre logiciel qui relie des sources de données personnalisées aux LLM.
- [Dify](https://github.com/langgenius/dify) : plateforme libre de développement d’applications basées sur des LLM.
- [Verba](https://github.com/weaviate/Verba) : application libre permettant d’utiliser le RAG immédiatement.
- [Mastra](https://github.com/mastra-ai/mastra) : cadre logiciel TypeScript pour créer des applications d’IA.
- [Letta](https://github.com/letta-ai/letta) : cadre logiciel libre pour créer des applications LLM avec état.
- [Flowise](https://github.com/FlowiseAI/Flowise) : interface glisser-déposer pour créer des flux LLM personnalisés.
- [Kreuzberg](https://github.com/kreuzberg-dev/kreuzberg) : bibliothèque multilingue d’analyse documentaire (cœur Rust avec liaisons Python, TypeScript et Go) qui extrait le texte, les tableaux et les métadonnées de plus de 62 formats de documents pour les pipelines d’ingestion RAG.
- [Swiftide](https://github.com/bosun-ai/swiftide) : cadre logiciel Rust pour créer des applications LLM modulaires et en flux continu.
- [CocoIndex](https://github.com/cocoindex-io/cocoindex) : cadre ETL pour indexer des données destinées à l’IA, notamment au RAG, avec des mises à jour incrémentielles en temps réel.
- [Pathway](https://github.com/pathwaycom/pathway/) : cadre ETL Python libre et performant, doté d’un moteur d’exécution Rust et prenant en charge plus de 300 sources de données.
- [Pathway AI Pipelines](https://github.com/pathwaycom/llm-app/) : cadre RAG prêt pour la production, prenant en charge l’indexation et la récupération en temps réel ainsi que le suivi des modifications sur diverses sources de données.
- [LiteLLM](https://docs.litellm.ai/) : interface unifiée pour plusieurs fournisseurs de LLM (OpenAI, Anthropic, Hugging Face, Replicate), avec journalisation, supervision et suivi des coûts.
- [Agentset](https://github.com/agentset-ai/agentset) : plateforme RAG libre et prête pour la production, avec raisonnement agentique intégré, recherche hybride et prise en charge multimodale.
- [OpenAgent](https://github.com/the-open-agent/openagent) : plateforme libre d’assistant IA personnel combinant des LLM, une base de connaissances RAG et des boucles d’agents autonomes, avec prise en charge de l’utilisation du navigateur, de l’exécution de commandes shell et des outils MCP.
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research) : cadre logiciel de recherche agentique approfondie privilégiant l’exécution locale, avec récupération multisource (Web, arXiv, PubMed et documents privés) et plus de 20 stratégies de recherche.

## 🐍 Écosystème Python pour le RAG

Python possède aujourd’hui l’écosystème RAG le plus mature, avec une large prise en charge des
LLM, des représentations vectorielles, des bases de données vectorielles, de l’évaluation et des outils de production.

Consultez le guide complet : [Écosystème Python pour le RAG](docs/python-ecosystem.md)

## 🛠️ Techniques

### Nettoyage des données

- [Techniques de nettoyage des données](https://medium.com/intel-tech/four-data-cleaning-techniques-to-improve-large-language-model-llm-performance-77bee9003625) : étapes de prétraitement pour affiner les données d’entrée et améliorer les performances du modèle.

### Conception des prompts

- **Stratégies**
  - [Étiquetage](https://python.langchain.com/v0.1/docs/use_cases/tagging/) : ajoute des balises ou étiquettes sémantiques aux données récupérées pour améliorer leur pertinence.
  - [Chaîne de pensée (CoT)](https://www.promptingguide.ai/techniques/cot) : incite le modèle à raisonner étape par étape avant de répondre.
  - [Chaîne de vérification (CoVe)](https://sourajit16-02-93.medium.com/chain-of-verification-cove-understanding-implementation-e7338c7f4cb5) : demande au modèle de vérifier chaque étape de son raisonnement.
  - [Auto-cohérence](https://www.promptingguide.ai/techniques/consistency) : génère plusieurs raisonnements et sélectionne la réponse la plus cohérente.
  - [Prompt sans exemple](https://www.promptingguide.ai/techniques/zeroshot) : conçoit des instructions qui guident le modèle sans fournir d’exemples.
  - [Prompt avec quelques exemples](https://python.langchain.com/docs/how_to/few_shot_examples/) : fournit quelques exemples dans le prompt pour illustrer le format de réponse attendu.
  - [Raisonner et agir (ReAct)](https://www.promptingguide.ai/techniques/react) : combine le raisonnement (p. ex. CoT) et l’action (p. ex. l’appel d’outils).
- **Mise en cache**
  - [Mise en cache des prompts](https://medium.com/@1kg/prompt-cache-what-is-prompt-caching-a-comprehensive-guide-e6cbae48e6a3) : optimise les LLM en stockant et en réutilisant les états d’attention précalculés.
- **Structuration**
  -  [Token-Oriented Object Notation](https://github.com/toon-format/toon) : format JSON compact et déterministe pour les prompts LLM.

### Découpage en blocs

La stratégie de découpage en blocs est l’une des décisions les plus importantes dans la conception d’un système RAG ; elle influe directement sur la précision de la récupération et la qualité du contexte. Le choix optimal dépend des types de documents, des caractéristiques du domaine et des requêtes.

- **[Découpage en blocs de taille fixe](https://medium.com/@anuragmishra_27746/five-levels-of-chunking-strategies-in-rag-notes-from-gregs-video-7b735895694d)**
  - **Cas d’utilisation** : documents simples et uniformes dont la structure importe peu
  - **Caractéristiques** : découpe le texte en segments de taille constante (généralement de 256 à 512 jetons) avec un chevauchement configurable (de 10 à 20 %)
  - **Avantages** : mise en œuvre simple, taille des blocs prévisible et traitement efficace
  - **Inconvénients** : peut couper des phrases ou des paragraphes, faire perdre la structure du document et fragmenter les unités sémantiques
  - **Implémentation** : [CharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/character_text_splitter/) (LangChain), [SentenceSplitter](https://docs.llamaindex.ai/en/stable/api_reference/node_parsers/sentence_splitter/) (LlamaIndex)

- **[Découpage récursif](https://medium.com/@AbhiramiVS/chunking-methods-all-to-know-about-it-65c10aa7b24e)**
  - **Cas d’utilisation** : documents à structure hiérarchique (Markdown, HTML, code)
  - **Caractéristiques** : découpe récursivement selon des séparateurs (paragraphes → phrases → mots) jusqu’à atteindre la taille souhaitée
  - **Avantages** : préserve les limites naturelles et respecte la hiérarchie du document, pour une meilleure cohérence sémantique
  - **Inconvénients** : plus complexe, avec des blocs de taille variable et des séparateurs à configurer avec soin
  - **Implémentation** : [RecursiveCharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/recursive_text_splitter/) (LangChain)

- **[Découpage fondé sur les documents](https://medium.com/@david.richards.tech/document-chunking-for-rag-ai-applications-04363d48fbf7)**
  - **Cas d’utilisation** : documents structurés avec des sections clairement délimitées (titres Markdown, sections PDF, enregistrements de base de données)
  - **Caractéristiques** : segmente selon les métadonnées du document, les indices de mise en forme ou les éléments structurels
  - **Avantages** : conserve la structure et le contexte du document, et permet une récupération enrichie par les métadonnées
  - **Inconvénients** : nécessite des entrées structurées et peut produire des blocs trop grands ou trop petits
  - **Implémentation** : [MarkdownHeaderTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/markdown_header_metadata/) (LangChain)
  - **Multimodal** : traite les images et le texte à l’aide de modèles comme [OpenCLIP](https://github.com/mlfoundations/open_clip)

- **[Découpage sémantique](https://www.youtube.com/watch?v=8OJC21T2SL4&t=1933s)**
  - **Cas d’utilisation** : documents où la cohérence sémantique est essentielle (récits, documentation technique)
  - **Caractéristiques** : s’appuie sur la similarité des représentations vectorielles pour repérer les limites sémantiques naturelles
  - **Avantages** : préserve les unités sémantiques, s’adapte au contenu et améliore la pertinence de la récupération
  - **Inconvénients** : coûteux en calcul, nécessite un modèle de représentation vectorielle et produit des blocs de taille moins prévisible
  - **Idéal pour** : la récupération de haute qualité où la préservation du contexte est primordiale

- **[Découpage agentique](https://youtu.be/8OJC21T2SL4?si=8VnYaGUaBmtZhCsg&t=2882)**
  - **Cas d’utilisation** : documents complexes nécessitant des décisions intelligentes de segmentation
  - **Caractéristiques** : utilise des LLM pour analyser le contenu et déterminer les limites optimales des blocs
  - **Avantages** : très adaptable, comprend le contexte et peut appliquer des connaissances du domaine
  - **Inconvénients** : coût élevé, traitement plus lent et accès à une API de LLM nécessaire
  - **Idéal pour** : les domaines spécialisés où les méthodes de découpage classiques échouent

- **[Découpage adaptatif](https://github.com/ekimetrics/adaptive-chunking)**
  - **Cas d’utilisation** : collections de documents hétérogènes où différents documents bénéficient de stratégies de découpage différentes
  - **Caractéristiques** : évalue plusieurs méthodes de découpage à l’aide de métriques intrinsèques et sélectionne la meilleure pour chaque document
  - **Avantages** : plus flexible qu’une méthode universelle, préserve la structure et la cohérence sémantique, et prend en charge des découpeurs et métriques personnalisés
  - **Inconvénients** : ajoute un coût d’évaluation et une complexité de mise en œuvre par rapport au découpage à taille fixe ou récursif

**Bonnes pratiques de découpage :**
- **Stratégie de chevauchement** : prévoir un chevauchement de 10 à 20 % pour maintenir le contexte entre les limites des blocs
- **Optimisation de la taille** : trouver un équilibre entre la taille des blocs (plus grands = davantage de contexte, plus petits = meilleure précision)
- **Préservation des métadonnées** : conserver la structure du document, les titres et la mise en forme dans les métadonnées des blocs
- **Granularité multiple** : envisager des approches hiérarchiques (petits blocs pour la récupération, blocs plus grands pour le contexte)

### Représentations vectorielles

Les représentations vectorielles sont au cœur de la recherche sémantique dans les systèmes RAG. Le choix du modèle de représentation vectorielle influe fortement sur la qualité de la récupération.

- **Sélection du modèle**
  - **[Classement MTEB](https://huggingface.co/spaces/mteb/leaderboard)** : banc d’essai complet pour évaluer des modèles de représentation vectorielle sur plusieurs tâches et langues. Privilégiez les modèles performants sur les tâches pertinentes pour votre cas d’usage (récupération, regroupement, classification).
  - **Caractéristiques du modèle** : évaluez les modèles selon les critères suivants :
    - **Dimensions** : les grandes dimensions (768–1 024) offrent généralement une meilleure qualité, mais augmentent les coûts de stockage et de calcul
    - **Longueur du contexte** : vérifiez que le modèle prend en charge la taille des blocs de vos documents
    - **Prise en charge multilingue** : indispensable pour les applications internationales
    - **Spécialisation par domaine** : modèles généralistes ou spécialisés (scientifique, juridique, médical, etc.)
  
- **Représentations vectorielles personnalisées**
  - **Réglage fin** : adaptez les modèles préentraînés à votre domaine par apprentissage contrastif, perte triplet ou réglage fin supervisé
  - **Entraînement à partir de zéro** : adapté aux domaines très spécialisés disposant de suffisamment de données étiquetées
  - **Représentations vectorielles multimodales** : pour les applications qui doivent comprendre du texte, des images ou de l’audio (p. ex. CLIP, ImageBind)
  - **Méthodes d’ensemble** : combinez plusieurs modèles de représentation vectorielle pour améliorer la robustesse

### Récupération

- **Méthodes de recherche**
  - [Index plat d’un magasin de vecteurs](https://weaviate.io/developers/academy/py/vector_index/flat)
    - Méthode de récupération simple et efficace.
    - Le contenu est vectorisé et stocké sous forme de vecteurs plats.
  - [Récupération par index hiérarchique](https://pixion.co/blog/rag-strategies-hierarchical-index-retrieval)
    - Affine la recherche des données par niveaux hiérarchiques.
    - Effectue la récupération en suivant cet ordre hiérarchique.
  - [Questions hypothétiques](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - Méthode utilisée pour accroître la similarité entre les blocs de la base de données et les requêtes (comme avec HyDE).
    - Un LLM génère des questions précises pour chaque bloc de texte.
    - Ces questions sont converties en représentations vectorielles.
    - Lors de la recherche, les requêtes sont comparées à cet index de vecteurs de questions.
  - [Représentations vectorielles de documents hypothétiques (HyDE)](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - Méthode utilisée pour accroître la similarité entre les blocs de la base de données et les requêtes (comme avec les questions hypothétiques).
    - Un LLM génère une réponse hypothétique à partir de la requête.
    - Cette réponse est convertie en représentation vectorielle.
    - Le vecteur de la requête est comparé à celui de la réponse hypothétique.
  - [Récupération du petit au grand](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/use-cases/retrieval-augmented-generation/small_to_big_rag/small_to_big_rag.ipynb)
    - Améliore la récupération en utilisant de petits blocs pour la recherche et des blocs plus grands pour le contexte.
    - Les petits blocs enfants renvoient à des blocs parents plus grands.
  - [Récupération contextuelle](https://www.anthropic.com/engineering/contextual-retrieval)
    - Améliore la précision de la récupération RAG en préservant le contexte du document, généralement perdu lors du découpage en blocs.
    - Chaque bloc de texte est enrichi d’un court résumé généré par le modèle avant la création des représentations vectorielles et l’indexation, ce qui produit des représentations vectorielles contextuelles et un BM25 contextuel.
    - Cette approche combinée améliore la correspondance sémantique et lexicale et réduit les échecs de récupération lorsqu’elle est associée au reclassement.
  - [Récupération adaptative](https://arxiv.org/abs/2403.14403)
    - Détermine dynamiquement quand et quelle quantité d’informations récupérer au cours de la génération.
  - [Reformulation et expansion des requêtes](https://haystack.deepset.ai/cookbook/query-expansion)
    - Reformule ou développe automatiquement la requête avant la récupération afin d’améliorer le rappel.
    - Utile pour les requêtes utilisateur longues ou ambiguës.
- **[Reclassement](https://developer.nvidia.com/blog/enhancing-rag-pipelines-with-re-ranking/)** : améliore les résultats de recherche des pipelines RAG en réordonnant les documents récupérés initialement et en privilégiant ceux qui sont les plus pertinents sémantiquement pour la requête.

### Modèles de jugement et de décision

Les modèles de jugement prennent des décisions sémantiques circonscrites sur le contenu récupéré, les requêtes, les réponses générées ou l’état du pipeline. Contrairement aux LLM génératifs, ils peuvent servir de points de décision programmables dans les pipelines RAG pour le reclassement, le filtrage, le routage, la vérification et l’évaluation.

- **[Jev](https://typesafe.ai/)** : modèle System One de TypeSafe AI, conçu pour prendre rapidement des décisions typées. Dans le RAG, il peut prendre en charge le reclassement, le filtrage, le routage, la vérification, les garde-fous et l’évaluation.
- **[AnyJev](https://github.com/nokia-applied-research/AnyJev)** : transforme des LLM ouverts en modèles de décision typés de type Jev, avec correction du biais sans étiquettes et calibration facultative pour les décisions à seuil.

### Qualité et sécurité des réponses

Des réponses de qualité, sûres et fiables sont essentielles aux systèmes RAG en production.

- **Réduction des hallucinations**
  - **[Techniques de détection](https://machinelearningmastery.com/rag-hallucination-detection-techniques/)** : mettez en œuvre des méthodes permettant de repérer les informations non étayées générées par les modèles
  - **Vérification de l’ancrage** : confrontez les affirmations générées au contexte récupéré
  - **Évaluation de la confiance** : attribuez aux réponses générées des scores de confiance fondés sur la qualité des sources
  - **Attribution des sources** : exigez des citations pour toutes les affirmations factuelles
  - **Qualité de la récupération** : améliorez la précision de la récupération pour réduire le risque d’hallucination

- **Garde-fous et sécurité**
  - **[Guide de mise en œuvre](https://developer.ibm.com/tutorials/awb-how-to-implement-llm-guardrails-for-rag-applications/)** : approche complète de mise en place de mécanismes de sécurité
  - **Modération du contenu** : filtrez les contenus préjudiciables, biaisés ou inappropriés à l’entrée et à la sortie
  - **Réduction des biais** : détectez et atténuez les biais dans le contenu récupéré et les réponses générées
  - **Vérification des faits** : vérifiez les affirmations auprès de sources fiables ou de bases de connaissances
  - **Détection de la toxicité** : utilisez des classificateurs pour repérer et filtrer les contenus toxiques

- **Prévention des injections de prompt**
  - **[Guide de sécurité](https://hiddenlayer.com/innovation-hub/prompt-injection-attacks-on-llms/)** : comprendre et prévenir les attaques par injection de prompt
  - **Validation des entrées** : validez et assainissez rigoureusement toutes les entrées externes à l’aide de listes d’autorisation, de limites de longueur et de correspondances de motifs
  - **Séparation du contenu** : utilisez des délimiteurs explicites, des systèmes de modèles et des prompts fondés sur les rôles afin de séparer les instructions des données utilisateur
  - **Surveillance des sorties** : surveillez en continu les réponses pour détecter les anomalies, les comportements inattendus ou les violations de sécurité
  - **Limitation du débit** : mettez en place des limites de débit et la détection des abus pour prévenir les attaques systématiques
  - **Mise en bac à sable** : isolez les environnements d’exécution des LLM afin de limiter les dommages potentiels en cas d’injection réussie

## 📊 Métriques et évaluation

### Métriques de similarité des représentations vectorielles

Ces métriques mesurent la similarité entre les représentations vectorielles, ce qui est essentiel pour évaluer l’efficacité avec laquelle les systèmes RAG récupèrent et intègrent des documents ou des sources de données externes. Le choix de métriques adaptées permet d’optimiser les performances et la précision du système RAG. Vous pouvez également créer des métriques personnalisées selon votre domaine ou votre niche afin d’en saisir les nuances et d’améliorer la pertinence.

- **[Similarité cosinus](https://en.wikipedia.org/wiki/Cosine_similarity)**

  - Mesure le cosinus de l’angle entre deux vecteurs dans un espace multidimensionnel.
  - Très efficace pour comparer des représentations vectorielles textuelles dont la direction représente l’information sémantique.
  - Couramment utilisée dans les systèmes RAG pour mesurer la similarité sémantique entre les vecteurs d’une requête et ceux d’un document.

- **[Produit scalaire](https://en.wikipedia.org/wiki/Dot_product)**

  - Calcule la somme des produits des éléments correspondants de deux suites de nombres.
  - Équivaut à la similarité cosinus lorsque les vecteurs sont normalisés.
  - Simple et efficace, il est souvent utilisé avec une accélération matérielle pour les calculs à grande échelle.

- **[Distance euclidienne](https://en.wikipedia.org/wiki/Euclidean_distance)**

  - Calcule la distance en ligne droite entre deux points de l’espace euclidien.
  - Peut être utilisée avec des représentations vectorielles, mais risque de perdre en efficacité dans les espaces de grande dimension en raison de la « [malédiction de la dimensionnalité](https://stats.stackexchange.com/questions/99171/why-is-euclidean-distance-not-a-good-metric-in-high-dimensions) ».
  - Souvent utilisée dans des algorithmes de regroupement comme K-means après réduction de la dimensionnalité.

- **[Similarité de Jaccard](https://en.wikipedia.org/wiki/Jaccard_index)**
  - Mesure la similarité entre deux ensembles finis en divisant la taille de leur intersection par celle de leur union.
  - Utile pour comparer des ensembles de jetons, notamment dans les modèles de sac de mots ou les comparaisons de n-grammes.
  - Moins adaptée aux représentations vectorielles continues produites par les LLM.

> **Remarque :** la similarité cosinus et le produit scalaire sont généralement considérés comme les métriques les plus efficaces pour mesurer la similarité entre des représentations vectorielles de grande dimension.

### Métriques d’évaluation des réponses

L’évaluation des réponses dans les solutions RAG consiste à mesurer la qualité des résultats des modèles de langage à l’aide de diverses métriques. Voici des approches structurées pour évaluer ces réponses :

- **Évaluation automatisée**

  - **[BLEU](https://en.wikipedia.org/wiki/BLEU) :** évalue le recouvrement des n-grammes entre les résultats générés par la machine et les résultats de référence, ce qui donne une indication de la précision.
  - **[ROUGE](<https://en.wikipedia.org/wiki/ROUGE_(metric)>) :** mesure le rappel en comparant les n-grammes, les bigrammes discontinus ou la plus longue sous-séquence commune aux résultats de référence.
  - **[METEOR](https://en.wikipedia.org/wiki/METEOR) :** porte sur les correspondances exactes, la racinisation, les synonymes et l’alignement en traduction automatique.

- **Évaluation humaine**
  Des évaluateurs humains examinent les réponses selon les critères suivants :
  - **Pertinence :** adéquation aux requêtes des utilisateurs.
  - **Fluidité :** qualité grammaticale et stylistique.
  - **Exactitude factuelle :** vérification des affirmations auprès de sources fiables.
  - **Cohérence :** cohérence logique des réponses.
  
  Parmi les approches possibles :
  - **[Files d’annotation](https://docs.langchain.com/langsmith/annotation-queues) :** offrent aux annotateurs humains une vue ciblée et simplifiée pour associer leurs commentaires à des exécutions précises.

- **Évaluation par des modèles**
  Utilise des évaluateurs préentraînés pour comparer les résultats selon divers critères :

  - **[TuringBench](https://turingbench.ist.psu.edu/) :** propose des évaluations complètes sur différents bancs d’essai linguistiques.
  - **[Hugging Face Evaluate](https://huggingface.co/docs/evaluate/en/index) :** calcule l’alignement sur les préférences humaines.

- **Principales dimensions d’évaluation**
  - **Ancrage :** détermine si les réponses reposent entièrement sur le contexte fourni. Un faible ancrage peut indiquer une dépendance à des informations hallucinées ou non pertinentes.
  - **Exhaustivité :** mesure si la réponse couvre tous les aspects d’une requête.
  - **Approches :** évaluation de la récupération assistée par l’IA et vérification de l’intention à l’aide de prompts.
  - **Utilisation :** évalue dans quelle mesure les données récupérées contribuent à la réponse.
  - **Analyse :** utilisez des LLM pour vérifier que les blocs récupérés sont bien repris dans les réponses.

#### Outils

Ces outils aident à évaluer les performances de votre système RAG : suivi des retours utilisateurs, journalisation des interactions avec les requêtes et comparaison de plusieurs métriques d’évaluation dans le temps.

- **[LangFuse](https://github.com/langfuse/langfuse)** : outil libre de suivi des métriques LLM, de l’observabilité et de la gestion des prompts.
- **[Opik](https://github.com/comet-ml/opik)** : plateforme libre d’observabilité, d’évaluation et d’optimisation des prompts pour les LLM.
- **[Ragas](https://docs.ragas.io/en/stable/)** : cadre logiciel facilitant l’évaluation des pipelines RAG.
- **[WFGY Problem Map](https://github.com/onestardao/WFGY/tree/main/ProblemMap)** : liste de contrôle en 16 modes pour diagnostiquer les défaillances des systèmes RAG et des LLM.
- **[LangSmith](https://docs.smith.langchain.com/)** : plateforme de création d’applications LLM de qualité production, qui permet de surveiller et d’évaluer étroitement votre application.
- **[Hugging Face Evaluate](https://github.com/huggingface/evaluate)** : outil de calcul de métriques comme BLEU et ROUGE pour évaluer la qualité du texte.
- **[Weights & Biases](https://wandb.ai/wandb-japan/rag-hands-on/reports/Step-for-developing-and-evaluating-RAG-application-with-W-B--Vmlldzo1NzU4OTAx)** : suit les expériences, consigne les métriques et visualise les performances.

## 💾 Bases de données

Les bases de données vectorielles sont des composants essentiels des systèmes RAG : elles assurent le stockage efficace et la recherche par similarité des représentations vectorielles. Le choix d’une base de données dépend notamment de l’échelle, de la latence requise, du mode de déploiement (cloud ou sur site) et des fonctionnalités nécessaires (recherche hybride, filtres, etc.). La liste ci-dessous présente des bases adaptées aux applications RAG :

### Bancs d’essai

- [Choisir une base de données vectorielle](https://benchmark.vectorview.ai/vectordbs.html)

### Moteurs distribués de traitement et de service des données :

- [Apache Cassandra](https://cassandra.apache.org/doc/latest/cassandra/vector-search/concepts.html) : système distribué de gestion de bases de données NoSQL.
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-vector-search) : service de base de données multimodèle distribué à l’échelle mondiale, avec recherche vectorielle intégrée.
- [Vespa](https://vespa.ai/) : moteur libre de traitement et de diffusion de mégadonnées conçu pour les applications en temps réel.

### Moteurs de recherche avec capacités vectorielles :

- [Elasticsearch](https://www.elastic.co/elasticsearch) : offre des capacités de recherche vectorielle en plus des fonctions de recherche traditionnelles.
- [OpenSearch](https://github.com/opensearch-project/OpenSearch) : moteur distribué de recherche et d’analyse, dérivé d’Elasticsearch.

### Bases de données vectorielles :

- [Chroma DB](https://github.com/chroma-core/chroma) : base de données libre de représentations vectorielles, conçue pour l’IA.
- [Milvus](https://github.com/milvus-io/milvus) : base de données vectorielle libre pour les applications propulsées par l’IA.
- [Pinecone](https://www.pinecone.io/) : base de données vectorielle sans serveur, optimisée pour les flux de travail d’apprentissage automatique.
- [Oracle AI Vector Search](https://www.oracle.com/database/ai-vector-search/#retrieval-augmented-generation) : intègre la recherche vectorielle à Oracle Database pour les requêtes sémantiques fondées sur des représentations vectorielles.

### Extensions de bases de données relationnelles :

- [Pgvector](https://github.com/pgvector/pgvector) : extension libre de recherche par similarité vectorielle pour PostgreSQL.
- [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s) : extension PostgreSQL de récupération lexicale de la famille BM25, utile aux pipelines de récupération par mots-clés et hybrides.

### Autres systèmes de bases de données :

- [Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-database) : service de base de données multimodèle distribué à l’échelle mondiale, avec recherche vectorielle intégrée.
- [Couchbase](https://www.couchbase.com/products/vector-search/) : base de données cloud NoSQL distribuée.
- [Lantern](https://lantern.dev/) : moteur de recherche personnel respectueux de la vie privée.
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/module_guides/storing/vector_stores/) : utilise un magasin de vecteurs en mémoire simple pour permettre une expérimentation rapide.
- [Neo4j](https://neo4j.com/docs/cypher-manual/current/indexes/semantic-indexes/vector-indexes/) : système de gestion de bases de données orientées graphes.
- [Qdrant](https://github.com/neo4j/neo4j) : base de données vectorielle libre conçue pour la recherche par similarité.
- [Redis Stack](https://redis.io/docs/latest/develop/interact/search-and-query/) : magasin de structures de données en mémoire utilisé comme base de données, cache et courtier de messages.
- [SurrealDB](https://github.com/surrealdb/surrealdb) : base de données multimodèle évolutive optimisée pour les données de séries temporelles.
- [Weaviate](https://github.com/weaviate/weaviate) : moteur libre de recherche vectorielle natif du cloud.

### Bibliothèques et outils de recherche vectorielle :

- [FAISS](https://github.com/facebookresearch/faiss) : bibliothèque de recherche par similarité et de regroupement efficaces de vecteurs denses, conçue pour les grands jeux de données et optimisée pour récupérer rapidement les plus proches voisins.

## 🚀 Considérations pour la production

La mise en production de systèmes RAG exige de traiter plusieurs aspects essentiels, au-delà du pipeline central de récupération et de génération :

### Évolutivité et performances

- **Débit d’indexation** : concevez des pipelines capables d’ingérer de grands volumes de documents avec des mises à jour incrémentielles
- **Latence des requêtes** : optimisez la vitesse de récupération grâce à des méthodes d’indexation efficaces (HNSW, IVF), à des stratégies de mise en cache et au traitement parallèle
- **Requêtes simultanées** : mettez en place la mise en commun des connexions, la mise en file d’attente des requêtes et l’équilibrage de charge pour les situations de trafic élevé
- **Gestion des ressources** : surveillez l’utilisation du GPU et du CPU, la consommation de mémoire et les pools de connexions aux bases de données

### Fiabilité et supervision

- **Observabilité** : mettez en place la journalisation complète, le traçage et la collecte de métriques (latence, débit, taux d’erreur)
- **Contrôles d’état** : surveillez la disponibilité du service de représentation vectorielle, la connectivité de la base vectorielle et l’état de l’API LLM
- **Gestion des erreurs** : mettez en œuvre des tentatives répétées, des disjoncteurs et des stratégies de dégradation progressive
- **Tests A/B** : comparez différentes stratégies de récupération, méthodes de découpage et modèles de prompt

### Gestion des données

- **Mises à jour incrémentielles** : prenez en charge l’indexation des documents en temps réel ou quasi réel, sans réindexation complète
- **Gestion des versions** : suivez les versions des documents, des modèles de représentation vectorielle et des modèles de prompt
- **Qualité des données** : mettez en place des pipelines de validation pour détecter les représentations vectorielles corrompues, les métadonnées manquantes ou le contenu obsolète
- **Sauvegarde et restauration** : sauvegardez régulièrement les index vectoriels et les magasins de métadonnées

### Sécurité et conformité

- **Contrôle d’accès** : mettez en œuvre l’authentification, l’autorisation et la journalisation des audits
- **Confidentialité des données** : chiffrez les données au repos et en transit, et respectez les exigences de résidence des données
- **Filtrage du contenu** : appliquez la modération du contenu, la détection des informations personnelles identifiables (PII) et les contrôles de conformité
- **Limitation du débit** : protégez-vous contre les abus et assurez une répartition équitable des ressources

### Optimisation des coûts

- **Mise en cache des représentations vectorielles** : mettez en cache les représentations fréquemment consultées afin de réduire les coûts des API
- **Récupération sélective** : utilisez le routage des requêtes pour éviter les opérations de récupération inutiles
- **Sélection des modèles** : trouvez un équilibre entre coût et performances lors du choix des modèles de représentation vectorielle et de LLM
- **Dimensionnement adapté des ressources** : optimisez l’infrastructure en fonction des habitudes d’utilisation réelles

## 🔌 Implémentations RAG spécifiques aux plateformes

Pour consulter les guides détaillés d’implémentation selon la plateforme, reportez-vous à la documentation :

- [Guide d’intégration de Supabase](docs/supabase-integration.md) : création de systèmes RAG avec Supabase, pgvector et Edge Functions

## 💡 Bonnes pratiques

### Stratégie de découpage

- **Découpage adapté au domaine** : privilégiez le découpage sémantique ou fondé sur la structure du document plutôt que le découpage à taille fixe afin de mieux préserver le contexte
- **Gestion du chevauchement** : prévoyez un chevauchement stratégique (de 10 à 20 %) pour préserver le contexte entre les limites des blocs
- **Préservation des métadonnées** : conservez la structure du document, les titres et les indices de mise en forme dans les métadonnées des blocs
- **Granularité multiple** : envisagez un découpage hiérarchique (petits blocs pour la récupération, blocs plus grands pour le contexte)

### Choix des représentations vectorielles

- **Évaluation des modèles** : utilisez le classement MTEB et des bancs d’essai propres au domaine pour sélectionner les modèles appropriés
- **Optimisation des dimensions** : trouvez un équilibre entre la dimension des représentations vectorielles (plus élevée = meilleure qualité, plus faible = récupération plus rapide)
- **Réglage fin par domaine** : affinez les représentations vectorielles à l’aide de données propres au domaine lorsque c’est possible
- **Cohérence** : utilisez le même modèle de représentation vectorielle pour l’indexation et les requêtes

### Optimisation de la récupération

- **Recherche hybride** : combinez la recherche sémantique (vectorielle) et lexicale (BM25/mots-clés) pour améliorer le rappel
- **Reclassement** : appliquez des cross-encodeurs ou des modèles de classement appris pour améliorer la précision
- **Compréhension des requêtes** : mettez en œuvre la classification des requêtes, la détection de l’intention et l’expansion des requêtes
- **Diversification des résultats** : évitez les résultats redondants en imposant des contraintes de diversité

### Ingénierie des prompts

- **Instructions claires** : indiquez explicitement comment utiliser le contexte récupéré
- **Attribution des sources** : demandez des citations et exigez un ancrage dans le contexte fourni
- **Exemples few-shot** : ajoutez des exemples illustrant le format et la qualité de réponse souhaités
- **Compression du contexte** : utilisez des techniques comme le résumé ou l’extraction lorsque le contexte dépasse les limites

### Cadre d’évaluation

- **Métriques multidimensionnelles** : évaluez la pertinence, l’exactitude, l’exhaustivité et l’ancrage
- **Intervention humaine** : intégrez les retours humains pour une amélioration continue
- **Évaluation synthétique** : générez des requêtes de test et des résultats attendus pour les tests automatisés
- **Supervision en production** : suivez la satisfaction des utilisateurs, les habitudes de requête et les modes de défaillance

### Amélioration itérative

- **Boucles de rétroaction** : recueillez les retours des utilisateurs, les journaux de requêtes et les métriques de performance
- **Expérimentation** : testez systématiquement les améliorations (découpage, récupération, prompts) au moyen d’expériences contrôlées
- **Mise à jour des modèles** : planifiez les mises à niveau des modèles de représentation vectorielle et les stratégies de migration
- **Documentation** : maintenez une documentation claire de l’architecture, des décisions et des procédures opérationnelles

---

## Contribuer

Cette ressource communautaire évolue continuellement. Les contributions sont les bienvenues ! Pour ajouter des ressources, corriger des erreurs ou améliorer l’organisation :

1. Créez un fork du dépôt.
2. Créez une branche pour vos modifications.
3. Soumettez une pull request accompagnée d’une description claire.

Pour toute nouvelle entrée, vérifiez que les liens fonctionnent, que les descriptions sont exactes et concises, et que le contenu figure dans la section appropriée.

## Licence

Ce projet est publié sous licence [CC0 1.0 Universal](LICENSE).
