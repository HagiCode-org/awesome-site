<h2 align="center">Impressionnant génie rapide</h2>

<p align="center">
  <img width="650" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/main/_source/prompt.png">
</p>

<p align="center">
  Une collection de ressources personnalisées pour l'ingénierie Prompt et l'ingénierie contextuelle - couvrant des documents, des outils, des modèles, des API, des repères, des cours et des communautés pour travailler avec des modèles de grande langue.
</p>

<p align="center">
https://promptslab.github.io
  </p>
 <h4 align="center">
  
  ```
     Master Prompt Engineering. Join the Course at https://promptslab.github.io
  ```
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome" /></a>
  <a href="https://github.com/promptslab/Awesome-Prompt-Engineering/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License" /></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" /></a>
  <a href="https://discord.gg/m88xfYMbK6"><img src="https://img.shields.io/badge/Discord-Community-orange" alt="Community" /></a>
  <img src="https://img.shields.io/badge/Last%20Updated-February%202026-brightgreen" alt="Last Updated" />
</p>

---

## Commencez ici

Nouveau pour l'ingénierie ? Suivez ce chemin :

<p align="center">
  <img width="1000" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/refs/heads/main/_source/main.jpg">
</p>

1. **Apprenez les bases** → [ChatGPT Prompt Engineering pour les développeurs](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) (libre, ~90 min)
2. **Lire le guide** → [Guide technique par DAIR. AI](https://www.promptingguide.ai/) (source ouverte, complète)
3. **Doctorat d'études** → [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) · [Guide technique anthropique](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
4. **Comprendre où se dirige le champ** → [Anthropique : Ingénierie contextuelle efficace pour les agents d'IA](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
5. **Lire la recherche** → [Rapport rapide](https://arxiv.org/abs/2406.06608) — taxonomie de 58+ techniques de stimulation de 1 500+ papiers

---

## Sommaire

- [Papiers](#papers)
  - [Principales enquêtes](#major-surveys)
  - [Optimisation rapide et promptage automatique](#prompt-optimization-and-automatic-prompting)
  - [Compression rapide](#prompt-compression)
  - [Raisonner des avances](#reasoning-advances)
  - [L'apprentissage en contexte](#in-context-learning)
  - [Prompting Agentique et systèmes multi-agents](#agentic-prompting-and-multi-agent-systems)
  - [Démarrage multimodal](#multimodal-prompting)
  - [Contrôle structuré de la sortie et du format](#structured-output-and-format-control)
  - [Injection rapide et sécurité](#prompt-injection-and-security)
  - [Applications de l'ingénierie rapide](#applications-of-prompt-engineering)
  - [Génération de texte à image](#text-to-image-generation)
  - [Text-to-Music/Audio Generation](#text-to-musicaudio-generation)
  - [Documents de base (Pré2024)](#foundational-papers-pre-2024)
- [Outils et code](#tools-and-code)
  - [Gestion et essais rapides](#prompt-management-and-testing)
  - [Outils d'évaluation LLM](#llm-evaluation-tools)
  - [Cadres d'agents](#agent-frameworks)
  - [Outils d'optimisation rapide](#prompt-optimization-tools)
  - [Red Teaming et la sécurité rapide](#red-teaming-and-prompt-security)
  - [MCP (Protocole modèle de contexte)](#mcp-model-context-protocol)
  - [Assistants de codage Vibe et AI](#vibe-coding-and-ai-coding-assistants)
    - [Agents de codage basés sur l'ICL](#cli-based-coding-agents)
    - [Éditeurs de code AI / IDE](#ai-code-editors--ides)
    - [Extensions IDE / Plugins](#ide-extensions--plugins)
    - [Plateformes de codage AI / Agents Cloud](#ai-coding-platforms--cloud-agents)
    - [Cadres d'agents de codage à source ouverte](#open-source-coding-agent-frameworks)
  - [Autres dépôts notables](#other-notable-repositories)
- [API](#apis)
- [Données et repères](#datasets-and-benchmarks)
- [Modèles](#models)
- [Détecteurs de contenu AI](#ai-content-detectors)
- [Livres](#books)
- [Cours](#courses)
- [Tutoriels et guides](#tutorials-and-guides)
- [Vidéos](#videos)
- [Communautés](#communities)
- [Recherche autonome et agents auto-amélioration](#autonomous-research--self-improving-agents)
- [Comment contribuer](#how-to-contribute)

---

## Papiers
📄

### Principales enquêtes

- [Le rapport rapide : une étude systématique des techniques de lancement](https://arxiv.org/abs/2406.06608) [2024] — Enquête la plus complète: taxonomie de 58 textes et 40 techniques d'incitation multimodales tirées de 1 500 documents. Co-auteur avec OpenAI, Microsoft, Google, Stanford.
- [Une étude systématique de l'ingénierie rapide dans les modèles de grande langue : techniques et applications](https://arxiv.org/abs/2402.07927) [2024] — 44 techniques dans les domaines d'application avec des résumés de rendement par tâche.
- [Une étude des méthodes d'ingénierie rapides dans les LLM pour différentes tâches NLP](https://arxiv.org/abs/2407.12994) [2024] — 39 méthodes d'incitation pour 29 tâches NLP.
- [Un sondage sur l'ingénierie automatique rapide : une perspective d'optimisation](https://arxiv.org/abs/2502.11560) [2025] — Formalise les méthodes auto-PE comme des problèmes d'optimisation discrets/continu/hybrides.
- [Méthodes de mise à jour efficaces pour les modèles linguistiques de grande envergure : une enquête](https://arxiv.org/abs/2404.01077) [2024] — Enquête sur l'incitation axée sur l'efficacité (compression, optimisation, APE) pour réduire le calcul et la latence.
- [Naviguez à travers le labyrinthe énigmatique : une enquête sur la raison de la chaîne de pensée](https://arxiv.org/abs/2309.15402) [2023, ACL 2024] — Enquête systématique sur le CoT.
- [Chaînes, arbres et graphiques démystifiants des pensées](https://arxiv.org/abs/2401.14295) [2024] — Cadre unifié pour les topologies de raisonnement multipromptes.
- [Vers une ingénierie rapide axée sur les objectifs pour les modèles linguistiques de grande envergure : une enquête](https://arxiv.org/abs/2401.14043) [2024] — Se concentre sur les prompts conçus autour d'objectifs de tâches explicites.
- [Vers l'ère de la raison : une enquête sur la longue chaîne de pensée pour la raison des LLM](https://arxiv.org/abs/2503.09567) [2025] — Distinguishes Long CoT de Short CoT dans les modèles de l'ère o1/R1.

### Optimisation rapide et promptage automatique

- [OPRO: Modèles de langages de grande taille comme optimisations](https://arxiv.org/abs/2309.03409) [2023, NeurIPS 2024] — Utilise les LLM comme optimisateurs via des méta-prompts; optimisé invite à surperformer ceux conçus par l'homme de jusqu'à 50% sur BBH.
- [DSPy: Compilation des appels de modèles de langage déclaratif dans les pipelines auto-améliorer](https://arxiv.org/abs/2310.03714) [2023, ICLR 2024] — Cadre de programmation (pas d'incitation) LLM avec optimisation automatique rapide.
- [MIPRO: Optimisation des instructions et des démonstrations pour les programmes de modèles de langues multistage](https://arxiv.org/abs/2406.11695) [2024, EMNLP 2024] — Optimisation bayésienne pour les programmes multi-étapes LM; jusqu'à 13 % de gains de précision.
- [TextGrad: Automatique "Differentiation" via Texte](https://arxiv.org/abs/2406.07496) [2024] — Traite les systèmes d'IA composés comme des graphiques de calcul avec rétroaction textuelle comme des gradients. Publié dans Nature.
- [EvoPrompt](https://arxiv.org/abs/2309.08532) [2023, ACL 2024] — Approche algorithmique évolutive pour optimiser automatiquement les invites discrètes.
- [Meta Prompting pour les systèmes d'IA](https://arxiv.org/abs/2311.11482) [2023, ICLR 2024 Workshop] — Modèles structuraux par exemple-agnostiques formalisés à l'aide de la théorie des catégories.
- [Ingénieur prompt (PE2)](https://arxiv.org/abs/2311.05661) [2024, Conclusions de l'ACL] — Utilise les LLM pour se métaprompter, raffinant les invites avec des modèles étape par étape pour améliorer considérablement le raisonnement.
- [Les grands modèles linguistiques sont des ingénieurs à niveau humain](https://arxiv.org/abs/2211.01910) [2022] — Génération rapide automatique via APE.
- [Prompts durs rendus faciles : optimisation discrète basée sur le gradient pour le réglage rapide](https://arxiv.org/abs/2302.03668) [2023]
- [SPO : Optimisation automatique de la rapidité](https://arxiv.org/abs/2502.06855) [2025] — Rendement concurrentiel à 1–6% du coût des méthodes antérieures.

### Compression rapide

- [LLMLingua-2: Distillation des données pour une compression efficace et fidèle de l'Agnostic Prompt](https://arxiv.org/abs/2403.12968) [2024, ACL 2024] — 3x–6x plus rapidement que LLMLingua avec distillation des données GPT-4.
- [LLMLingua](https://arxiv.org/abs/2310.06839) [2023, ACL 2024] — Compression à l'écoute des questions pour les contextes longs; 21,4 % d'augmentation de la performance avec 4 jetons de moins.
- [Compression rapide pour les modèles de grande langue : une enquête](https://arxiv.org/abs/2410.12388) [2024] — Étude approfondie des méthodes de compression rapide et souple.

### Raisonner des avances

- [Calcul du temps de test LLM de calibrage optimal](https://arxiv.org/abs/2408.03314) [2024] — L'allocation optimale des temps d'essai peut surpasser les modèles 14x plus grands.
- [DeepSeek-R1: Inciter la capacité de raisonner dans les GLM par l'apprentissage du renforcement](https://arxiv.org/abs/2501.12948) [2025] — Modèle de raisonnement formé par RL pur correspondant à o1; open-source avec variantes distillées.
- [s1: Étalonnage simple du temps d'essai](https://arxiv.org/abs/2501.19393) [2025] — Sur seulement 1 000 exemples, le TSD crée un modèle de raisonnement concurrentiel par le biais du « forçage budgétaire ».
- [Modèles de langage de raisonnement : un plan directeur](https://arxiv.org/abs/2501.11223) [2025] — Cadre systématique d'organisation du raisonnement approches LM.
- [Démystification de la longue chaîne de raisonnement dans les LLM](https://arxiv.org/abs/2502.03373) [2025] — Analyse le long comportement du CoT dans les modèles de raisonnement modernes.
- [Graphique des pensées: résoudre les problèmes d'élaboration avec les LLM](https://arxiv.org/abs/2308.09687) [2023, AAAI 2024] — Modéliser les pensées comme des graphiques arbitraires; 62% d'amélioration de la qualité par rapport à ToT sur tri.
- [Arbre de pensées : un problème délibéré résolu par les LLM](https://arxiv.org/abs/2305.10601) [2023, NeurIPS 2023] — Recherche d'arbres sur les chemins de raisonnement.
- [Tout ce qui concerne les pensées](https://arxiv.org/abs/2311.04254) [2023] — Intégre les solutions CoT, ToT et externes via les SCTM.
- [Squelette-de-pensée](https://arxiv.org/abs/2307.15337) [2023] — Décodage parallèle par génération de squelettes de réponse jusqu'à 2,69x.
- [Chaîne de pensée prompting Elicits raisonnant dans les grands modèles linguistiques](https://arxiv.org/abs/2201.11903) [2022] — Le papier de base du CoT.
- [L'auto-consistance améliore la chaîne de raisonnement de la pensée](https://arxiv.org/abs/2203.11171) [2022] — Agrégation de plusieurs sorties CoT pour la fiabilité.
- [Les grands modèles de langage sont des raisons Zero-Shot](https://arxiv.org/abs/2205.11916) [2022] — « Pensons étape par étape » comme un déclencheur de raisonnement zéro-shot.
- [ReAct: Synergiser la raison et agir dans les modèles linguistiques](https://arxiv.org/abs/2210.03629) [2022] — Le raisonnement et l'utilisation d'outils entrelacés.

### L'apprentissage en contexte

- [L'apprentissage in-contexte à grande échelle](https://arxiv.org/abs/2404.11018) [2024, NeurIPS 2024 Spotlight] — Gains significatifs pour faire passer la LCI à des centaines/milliers d'exemples; introduit la LCI renforcée et non supervisée.
- [L'apprentissage in-Context de nombreux modèles multimodaux](https://arxiv.org/abs/2405.09798) [2024] — Échelle la LCI multimodale à environ 2 000 exemples sur 14 ensembles de données.
- [Repenser le rôle des démonstrations : qu'est-ce qui fait du travail d'apprentissage en contexte?](https://arxiv.org/abs/2202.12837) [2022]
- [Fantastiquement commandés promptts et où les trouver](https://arxiv.org/abs/2104.08786) [2021] — Surmonter la sensibilité de l'ordre rapide à quelques coups.
- [Étalonnage avant utilisation : améliorer la performance peu chaude des modèles linguistiques](https://arxiv.org/abs/2102.09690) [2021]

### Prompting Agentique et systèmes multi-agents

- [Modèles de grande langue d'agent : une enquête](https://arxiv.org/abs/2503.23037) [2025] — Enquête approfondie organisant des LLM d'agents par raisonnement, action et capacité d'interaction.
- [Multi-agents basés sur le modèle linguistique de grande envergure : une enquête sur les progrès et les défis](https://arxiv.org/abs/2402.01680) [2024] — Couvre les mécanismes de profilage, de communication et de croissance.
- [Mécanismes de collaboration multi-agents : une enquête sur les LLM](https://arxiv.org/abs/2501.06322) [2025] — Révise les stratégies de débat et de coopération dans les systèmes multiagents basés sur la LLM.
- [AutoGen: Activer les applications LLM Next-Gen via la conversation multi-agents](https://arxiv.org/abs/2308.08155) [2023] — Document-cadre fondamental multi-agents de Microsoft.
- [ToolLLM: faciliter les grands modèles de langage à Master 16000+ API Real-World](https://arxiv.org/abs/2307.16789) [2023, ICLR 2024] — Trains LLMs pour utiliser des collections massives d'API du monde réel.
- [SWE-bench: Les modèles linguistiques peuvent-ils résoudre les problèmes GitHub du monde réel?](https://arxiv.org/abs/2310.06770) [2023, ICLR 2024] — L'évolution du codage des agents de référence.
- [AgentBench : évaluer les LLM en tant qu'agents](https://arxiv.org/abs/2308.03688) [2023, ICLR 2024] — Référence dans 8 environnements.
- [PAL : Modèles de langues aidés par le programme](https://arxiv.org/abs/2211.10435) [2023] — Décharger le calcul aux interprètes de code.

### Démarrage multimodal

- [Prompting visuel dans les modèles multimodaux de grande langue : une enquête](https://arxiv.org/abs/2409.15310) [2024] — Première enquête approfondie sur les méthodes d'incitation visuelle dans les MLLM.
- [Set-of-Mark Prompting libère une terre visuelle extraordinaire en GPT-4V](https://arxiv.org/abs/2310.11441) [2023] — Les marqueurs visuels améliorent considérablement l'échouement visuel.
- [Une enquête exhaustive et un guide sur les modèles multimodaux de grande langue dans les tâches de vision-langue](https://arxiv.org/abs/2411.06284) [2024] — Couvre le texte, l'image, la vidéo, les MLLM audio.
- [Raisonnement de la chaîne de pensée multimodale dans les modèles linguistiques](https://arxiv.org/abs/2302.00923) [2023]
- [De l'ingénierie rapide à l'artisanat rapide](https://arxiv.org/abs/2411.13422) [2024] — Conception-recherche d'un « artisanat » rapide pour les modèles de diffusion.

### Contrôle structuré de la sortie et du format

- [Laissez-moi parler librement ? Étude sur l'impact des restrictions de format sur la performance des LLM](https://arxiv.org/abs/2408.02442) [2024] — Examine la façon dont la restriction des extrants aux formats structurés influe sur la performance du raisonnement.
- [Batch Prompting: Inférence efficace avec les API LLM](https://arxiv.org/abs/2301.08721) [2023]
- [Prompting structuré : Élargir l'apprentissage en contexte à 1 000 exemples](https://arxiv.org/abs/2212.06713) [2022]

### Injection rapide et sécurité

- [Formalisation et benchmarking Injection rapide Attaques et défenses](https://arxiv.org/abs/2310.12815) [2023, USENIX Security 2024] — Cadre formel avec évaluation systématique de 5 attaques et 10 défenses sur 10 LLM.
- [La Hiérarchie des Instructions: former les LLM à prioriser les instructions privilégiées](https://arxiv.org/abs/2404.13208) [2024] — Formation prioritaire d'OpenAI pour la défense par injection.
- [AgentDojo: Un environnement dynamique pour évaluer les attaques et les défenses d'injection rapide](https://arxiv.org/abs/2406.13352) [2024] — Scénario de référence de l'agent réaliste.
- [InjecAgent: Benchmarking Injections indirectes dans des agents LLM intégrés à l'outil](https://arxiv.org/abs/2403.02691) [2024]
- [SecAlign: Défense contre l'injection rapide avec l'optimisation de préférence](https://arxiv.org/abs/2410.05451) [2024] — Défense basée sur le DPD.
- [Analyse comparative de la sécurité des agents Web contre l'injection rapide](https://arxiv.org/abs/2504.18575) [2025] — Référence de sécurité pour les agents d'utilisation du Web/ordinateur.
- [Détachement de nombreuses personnes](https://www.anthropic.com/research/many-shot-jailbreaking) [2024] — L'extension d'exemples nuisibles dans les fenêtres à long contexte permet de démanteler la prison (rapport technique anthropologique).
- [L'IA constitutionnelle: L'insatisfaction de l'IA](https://arxiv.org/abs/2212.08073) [2022]
- [Ignorer la proposition précédente: Techniques d'attaque pour les modèles de langue](https://arxiv.org/abs/2211.09527) [2022]
- [Intelligence artificielle et cybersécurité : risques documentés, garde d'entreprises et menaces émergentes en 2024-2025](https://www.ijfmr.com/research-paper.php?id=62200) [2025] — Enquête sur les incidents réels d'injection rapide avec des modèles pratiques de gouvernance rapide.

### Applications de l'ingénierie rapide

- [Reformuler et répondre: Laisser les modèles de grande langue poser de meilleures questions pour eux-mêmes](https://arxiv.org/abs/2311.04205) [2023]
- [Prompt d'ingénierie juridique pour la prédiction multilingue du jugement juridique](https://arxiv.org/abs/2212.02199) [2023]
- [Conversation avec le copilote : Explorer l'ingénierie rapide pour résoudre les problèmes CS1](https://arxiv.org/abs/2210.15157) [2022]
- [Commonsense-Aware Prompting pour la génération de dialogue empathique contrôlable](https://arxiv.org/abs/2302.01441) [2023]
- [PLACES: Modèles de langage prompting pour la synthèse de conversation sociale](https://arxiv.org/abs/2302.03269) [2023]
- [Segmentation de l'image médicale à l'aide d'encodeurs de transformateurs et d'apprentissage rapide : un examen systématique](https://ieeexplore.ieee.org/document/11313186/) [2025]
- [TableauRAG: Un cadre de génération augmentée de récupération pour la justification des documents hétérogéniques](https://arxiv.org/abs/2506.10380) [2025] — Interface SQL préservant la structure tabulaire pour les requêtes multi-hop.

### Génération de texte à image

- [Une taxonomie des modificateurs rapides pour la génération de texte à image](https://arxiv.org/abs/2204.13988) [2022]
- [Lignes directrices de conception pour les modèles génériques texte à image rapides](https://arxiv.org/abs/2109.06977) [2021]
- [Synthèse d'images haute résolution avec modèles de diffusion latente](https://arxiv.org/abs/2112.10752) [2021]
- [DALL·E: Création d'images à partir du texte](https://arxiv.org/abs/2102.12092) [2021]
- [Enquêter sur l'ingénierie rapide dans les modèles de diffusion](https://arxiv.org/abs/2211.15462) [2022]

### Text-to-Music/Audio Generation

- [MusicLM: Générer de la musique du texte](https://arxiv.org/abs/2301.11325) [2023]
- [ERNIE-Music : Génération de musique texte à texte avec modèles de diffusion](https://arxiv.org/pdf/2302.04456) [2023]
- [AudioLM: Une approche de modélisation linguistique pour la génération audio](https://arxiv.org/pdf/2209.03143) [2023]
- [Make-An-Audio: Génération Text-To-Audio avec des modèles de diffusion améliorés](https://arxiv.org/pdf/2301.12661.pdf) [2023]

### Documents de base (Pré2024)

Ces documents ont établi les concepts fondamentaux sur lesquels repose l'ingénierie moderne rapide :

- [Les modèles linguistiques sont peu d'apprenants (GPT-3)](https://arxiv.org/abs/2005.14165) [2020] — Démonstration d'un nombre limité d'impulsions à l'échelle.
- [Préfixe-Tuning: Optimisation des prompts continus pour la génération](https://arxiv.org/abs/2101.00190) [2021]
- [La puissance de l'échelle pour le réglage rapide efficace des paramètres](https://arxiv.org/abs/2104.08691) [2021]
- [Programmation rapide pour les modèles de grande langue : au-delà du paradigme peu chaud](https://arxiv.org/abs/2102.07350) [2021]
- [Montrez votre travail: Scratchpads pour calcul intermédiaire avec des modèles de langue](https://arxiv.org/abs/2112.00114) [2021]
- [Prompting généré des connaissances pour la raisonnabilité commune](https://arxiv.org/abs/2110.08387) [2021]
- [Faire des modèles linguistiques pré-qualifiés de meilleure qualité](https://aclanthology.org/2021.acl-long.295) [2021]
- [AutoPrompt: Éliminer les connaissances des modèles de langage avec des prompts générés automatiquement](https://arxiv.org/abs/2010.15980) [2020]
- [Comment savoir quels modèles linguistiques savent?](https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00324/96460/) [2020]
- [Un catalogue de modèles rapides pour améliorer l'ingénierie rapide avec ChatGPT](https://arxiv.org/abs/2302.11382) [2023]
- [Prompting synthétique: Générer des démonstrations de chaîne de pensée pour les LLM](https://arxiv.org/abs/2302.00618) [2023]
- [Prompts progressifs : Apprentissage continu pour les modèles linguistiques](https://arxiv.org/abs/2301.12314) [2023]
- [Prompting successif pour les questions complexes](https://arxiv.org/abs/2212.04092) [2022]
- [Prompting décomposé : une approche modulaire pour résoudre les tâches complexes](https://arxiv.org/abs/2210.02406) [2022]
- [PromptChainer: Chaining Large Language Model Prompts via la programmation visuelle](https://arxiv.org/abs/2203.06566) [2022]
- [Demandez-moi n'importe quoi : une stratégie simple pour fournir des modèles de langage](https://paperswithcode.com/paper/ask-me-anything-a-simple-strategy-for) [2022]
- [Prompting GPT-3 Pour être fiable](https://arxiv.org/abs/2210.09150) [2022]
- [Sur la seconde pensée, ne pensons pas pas pas pas par pas! Bias et toxicité dans la raison zéro-shot](https://arxiv.org/abs/2212.08061) [2022]

---

## Outils et code
🔧

### Gestion et essais rapides

| Dénomination | Désignation des marchandises | Lien |
|:-----|:-----------|:----:|
| **Promptfoo** | CLI open-source pour tester, évaluer et red-teaming LLM invites. Configments YAML, intégration CI/CD, test contradictoire. ~9K+ | [GitHub](https://github.com/promptfoo/promptfoo) |
| **Promptify** | Résoudre les NLP Les problèmes avec LLM's & Easily générer différents appels de tâches NLP pour les modèles génériques populaires comme GPT, PaLM, et plus avec Promptify | [[Github]](https://github.com/promptslab/Promptify) |
| **Agenta** | Plateforme de développeurs LLM open-source pour une gestion, une évaluation, une rétroaction humaine et un déploiement rapides. | [GitHub](https://github.com/Agenta-AI/agenta) |
| **PromptLayer** | Version, tester et surveiller chaque prompt et agent avec des valeurs robustes, le traçage et les ensembles de régression. | [Website](https://promptlayer.com/) |
| **Helicone** | Plateforme de surveillance et d'optimisation rapide de la production. | [Website](https://helicone.ai/) |
| **LangGPT** | Cadre pour la conception structurée et méta-prompte. 10K+ | [GitHub](https://github.com/langgpt/LangGPT) |
| **ChainForge** | Boîte à outils visuelle pour construire, tester et comparer les réponses rapides LLM sans code. | [GitHub](https://github.com/ianarawjo/ChainForge) |
| **LMQL** | Un langage de requête pour les LLM rendant programmable la logique rapide complexe. | [GitHub](https://github.com/eth-sri/lmql) |
| **Promptotype** | Plateforme pour le développement, l'essai et la gestion d'invites LLM structurées. | [Website](https://www.promptotype.io) |
| **PromptPanda** | Système de gestion rapide alimenté par l'IA pour rationaliser les flux de travail rapides. | [Website](https://promptpanda.io) |
| **Promptimize AI** | Extension du navigateur pour améliorer automatiquement les appels d'utilisateur pour tout modèle d'IA. | [Website](https://promptimize.ai) |
| **PROMPTMETHEUS** | Web-based "Prompt Engineering IDE" pour la création itérative et l'exécution d'invites. | [Website](https://promptmetheus.com) |
| **Better Prompt** | Suite de test pour les appels LLM avant de pousser à la production. | [GitHub](https://github.com/krrishdholakia/betterprompt) |
| **OpenPrompt** | Cadre ouvert pour la recherche en apprentissage rapide. | [GitHub](https://github.com/thunlp/OpenPrompt) |
| **Prompt Source** | Boîte à outils pour créer, partager et utiliser des invites de langage naturel. | [GitHub](https://github.com/bigscience-workshop/promptsource) |
| **Prompt Engine** | Bibliothèque d'utilité NPM pour la création et la maintenance d'invites pour les LLM (Microsoft). | [GitHub](https://github.com/microsoft/prompt-engine) |
| **PromptInject** | Cadre d'analyse quantitative de la robustesse de la LLM aux attaques rapides contradictoires. | [GitHub](https://github.com/agencyenterprise/PromptInject) |
| **LynxPrompt** | Plateforme auto-installable pour la gestion des fichiers de configuration AI IDE (.cursorrules, CLAUDE.md, copilot-instructions.md). Web UI, REST API, CLI, et fédéré plan du marché pour 30+ assistants de codage d'IA. | [GitHub](https://github.com/GeiserX/LynxPrompt) |
| **flompt** | Visual AI invite builder qui décompose les invites en 12 blocs sémantiques (rôle, contexte, contraintes, exemples, etc.) et les compile en XML optimisé. Extension navigateur pour ChatGPT/Claude/Gemini, et serveur MCP pour les agents Claude Code. Gratuit, source ouverte. | [Website](https://flompt.dev) |

### Outils d'évaluation LLM

| Dénomination | Désignation des marchandises | Lien |
|:-----|:-----------|:----:|
| **DeepEval** | Cadre d'évaluation libre couvrant le RAG, les agents et les conversations avec l'intégration du CI/CD. ~7K+ | [GitHub](https://github.com/confident-ai/deepeval) |
| **Ragas** | Évaluation du RAG avec génération d'ensembles d'essais fondés sur les connaissances et 30 + métriques. ~8K+ | [GitHub](https://github.com/explodinggradients/ragas) |
| **LangSmith** | La plateforme de LangChain pour le débogage, les essais, l'évaluation et la surveillance des applications LLM. | [Website](https://smith.langchain.com/) |
| **Langfuse** | Open-source LLM observabilité avec traçage, gestion rapide, et annotation humaine. ~7K+ | [GitHub](https://github.com/langfuse/langfuse) |
| **Braintrust** | Plateforme d'évaluation AI de bout en bout, certifiée SOC2 Type II. | [Website](https://www.braintrust.dev/) |
| **Arize AI / Phoenix** | Surveillance en temps réel des LLM avec détection et traçage de la dérive. | [GitHub](https://github.com/Arize-ai/phoenix) |
| **TruLens** | Évaluer et expliquer les applications LLM; suivre les hallucinations, la pertinence, la solidité. | [GitHub](https://github.com/truera/trulens) |
| **InspectAI** | Conçu pour évaluer les agents par rapport aux repères (UK AISI). | [GitHub](https://github.com/UKGovernmentBEIS/inspect_ai) |
| **Opik** | Évaluer, mettre à l'essai et expédier les applications de LLM sur l'ensemble des cycles de développement et de production. | [GitHub](https://github.com/comet-ml/opik) |
| **EvalView** | Outil CLI pour tester des agents d'IA multi-étapes avec des cas d'essai YAML, la détection de régression et la surveillance de la production. |[GitHub](https://github.com/hidai25/eval-view) |

### Cadres d'agents

| Dénomination | Désignation des marchandises | Lien |
|:-----|:-----------|:----:|
| **LangChain / LangGraph** | Le cadre d'application LLM le plus largement adopté; LangGraph ajoute des workflows d'agents multi-étapes basés sur des graphiques. 100K+ / 10K+ | [GitHub](https://github.com/langchain-ai/langchain) · [LangGraph](https://github.com/langchain-ai/langgraph) |
| **CrewAI** | Orchestration d'agents d'IA jouant du rôle avec 700 intégrations. ~44K+ | [GitHub](https://github.com/crewAIInc/crewAI) |
| **AutoGen (AG2)** | Le cadre conversationnel multi-agents de Microsoft. -40K+ | [GitHub](https://github.com/microsoft/autogen) |
| **DSPy** | Cadre de Stanford pour la programmation de LLMs avec optimisation automatique rapide/poids. - 22K+ | [GitHub](https://github.com/stanfordnlp/dspy) |
| **OpenAI Agents SDK** | Cadre d'agent officiel avec fonctions d'appel, garde-corps et remises. -10K+ | [GitHub](https://github.com/openai/openai-agents-python) |
| **Semantic Kernel** | Le cadre d'IA de Microsoft alimentant le Copilote M365; C#, Python, Java. ~24K+ - | [GitHub](https://github.com/microsoft/semantic-kernel) |
| **LlamaIndex** | Cadre de données pour le RAG et les capacités des agents. -40K+ | [GitHub](https://github.com/run-llama/llama_index) |
| **Haystack** | Cadre NLP open source avec architecture de pipeline pour RAG et agents. -20K+ | [GitHub](https://github.com/deepset-ai/haystack) |
| **Agno (formerly Phidata)** | Cadre d'agent Python avec microseconde d'instantiation. -20K+ | [GitHub](https://github.com/agno-agi/agno) |
| **Smolagents** | Le cadre minimaliste de l'agent axé sur le code de Hugging Face (~1000 LOC). | [GitHub](https://github.com/huggingface/smolagents) |
| **Pydantic AI** | Cadre d'agent de sécurité de type en utilisant Pydantic pour la validation structurée. ~8K+ | [GitHub](https://github.com/pydantic/pydantic-ai) |
| **Mastra** | Cadre d'agent d'IA TypeScript avec assistants, RAG et observabilité. -20K+ | [GitHub](https://github.com/mastra-ai/mastra) |
| **Google ADK** | Agent Kit de développement profondément intégré avec Gemini et Google Cloud. | [GitHub](https://github.com/google/adk-python) |
| **Strands Agents (AWS)** | Cadre modèle-agnostique avec intégrations AWS profondes. | [GitHub](https://github.com/strands-agents/sdk-python) |
| **Langflow** | Constructeur d'agents visuels à base de nœuds avec glisser-déposer. ~50K+ | [GitHub](https://github.com/langflow-ai/langflow) |
| **n8n** | Automatisation du flux de travail avec des capacités d'agents d'IA et plus de 400 intégrations. ~60K+ | [GitHub](https://github.com/n8n-io/n8n) |
| **Dify** | All-in-one backend for agentic workflows with tool-use agents and RAG. | [GitHub](https://github.com/langgenius/dify) |
| **PraisonAI** | Multi-AI Cadre d'agents avec support LLM 100+, intégration MCP et mémoire intégrée. | [GitHub](https://github.com/MervinPraison/PraisonAI) |
| **Neurolink** | Cadre d'agents d'IA multi-fournisseurs unifiant 12+ fournisseurs avec orchestration de workflow. | [GitHub](https://github.com/juspay/neurolink) |
| **Composio** | Connectez plus de 100 outils aux agents AI avec une configuration zéro. | [GitHub](https://github.com/composiohq/composio) |

### Outils d'optimisation rapide

| Dénomination | Désignation des marchandises | Lien |
|:-----|:-----------|:----:|
| **DSPy** | Multiples optimiseurs (MIPROv2, BootstrapFewShot, COPRO) pour un réglage automatique rapide. ~22K+ | [GitHub](https://github.com/stanfordnlp/dspy) |
| **TextGrad** | Différenciation automatique par le texte (Stanford). ~2K+ | [GitHub](https://github.com/zou-group/textgrad) |
| **OPRO** | L'optimisation de Google DeepMind en incitant. | [GitHub](https://github.com/google-deepmind/opro) |

### Red Teaming et la sécurité rapide

| Dénomination | Désignation des marchandises | Lien |
|:-----|:-----------|:----:|
| **Garak (NVIDIA)** | Scanner de vulnérabilité LLM pour les hallucinations, les injections et les jailbreaks — la «nmap pour les LLM». ~3K+ | [GitHub](https://github.com/NVIDIA/garak) |
| **PyRIT (Microsoft)** | Outil d'identification des risques Python pour l'automatisation de l'équipe rouge. ~3K+ | [GitHub](https://github.com/Azure/PyRIT) |
| **DeepTeam** | 40+ vulnérabilités, 10+ méthodes d'attaque, OWASP Top 10 support. | [GitHub](https://github.com/confident-ai/deepteam) |
| **LLM Guard** | Boîte à outils de sécurité pour la validation des I/O LLM. ~2K+ | [GitHub](https://github.com/protectai/llm-guard) |
| **NeMo Guardrails (NVIDIA)** | Garde-corps programmables pour les systèmes de conversation. ~5K+ | [GitHub](https://github.com/NVIDIA/NeMo-Guardrails) |
| **Guardrails AI** | Définir des formats de sortie stricts (schémas JSON) pour assurer la fiabilité du système. | [Website](https://www.guardrailsai.com) |
| **Lakera** | Plateforme de sécurité AI pour une détection rapide en temps réel. | [Website](https://lakera.ai/) |
| **Purple Llama (Meta)** | Évaluation de la sécurité LLM en libre accès, y compris CyberSecEval. | [GitHub](https://github.com/meta-llama/PurpleLlama) |
| **GPTFuzz** | Génération automatisée de modèles de jailbreak atteignant des taux de réussite de plus de 90 %. | [GitHub](https://github.com/sherdencooper/GPTFuzz) |
| **Rebuff** | Outil open-source pour la détection et la prévention de l'injection rapide. | [GitHub](https://github.com/protectai/rebuff) |
| **AgentSeal** | "Scanner open source qui exécute 150 sondes d'attaque pour tester les agents d'IA pour détecter les vulnérabilités d'injection et d'extraction rapides." | [GitHub](https://github.com/agentseal/agentseal) |

### MCP (Protocole modèle de contexte)

MCP est un standard ouvert développé par Anthropic (Nov 2024, donné à Linux Foundation Dec 2025) pour connecter des assistants AI à des sources de données et des outils externes via une interface normalisée. Il a **97M+ téléchargements mensuels SDK** et a été adopté par GitHub, Google, et la plupart des principaux fournisseurs d'IA.

| Dénomination | Désignation des marchandises | Lien |
|:-----|:-----------|:----:|
| **MCP Specification** | La spécification du protocole de base et les SDKs. ~15K+ | [GitHub](https://github.com/modelcontextprotocol/modelcontextprotocol) |
| **MCP Reference Servers** | Implantations officielles : fetch, filesystem, GitHub, Slack, Postgres. | [GitHub](https://github.com/modelcontextprotocol/servers) |
| **FastMCP (Python)** | Cadre pythonique de haut niveau pour la construction de serveurs MCP. ~5K+ | [GitHub](https://github.com/jlowin/fastmcp) |
| **GitHub MCP Server** | Serveur MCP officiel de GitHub pour l'interaction repo, issue, PR et Actions. -15K+ | [GitHub](https://github.com/github/github-mcp-server) |
| **Awesome MCP Servers** | Liste curée de 10 000 serveurs MCP communautaires. -30K+ | [GitHub](https://github.com/punkpeye/awesome-mcp-servers) |
| **Context7** | Serveur MCP fournissant une documentation spécifique à la version pour réduire l'hallucination de code. | [GitHub](https://github.com/upstash/context7) |
| **GitMCP** | Crée des serveurs MCP distants pour toute repo GitHub en changeant le domaine. | [Website](https://gitmcp.io/) |
| **MCP Inspector** | Outil de test visuel pour le développement du serveur MCP. | [GitHub](https://github.com/modelcontextprotocol/inspector) |

### Assistants de codage Vibe et AI

> 🟢 = Open source · 🔵 = Commercial · 🟣 = Open source + commercial (cœur ouvert avec cloud/API payants)

#### Agents de codage basés sur l'ICL

Des outils d'agent terminal-natif qui comprennent votre base de code et exécutent des tâches en plusieurs étapes.

| Dénomination | Désignation des marchandises | Type | Lien |
|:-----|:-----------|:----:|:----:|
| **Claude Code** | Le codage agentique de l'anthropique CLI; comprend les bases de code complètes et exécute des tâches complexes en plusieurs étapes via le langage naturel. | 🔵 | [Docs](https://docs.anthropic.com/en/docs/claude-code) |
| **OpenAI Codex CLI** | Agent de codage terminal open source d'OpenAI; léger, local-premier, avec exécution de code sandboxed. -68K+ | 🟣 | [GitHub](https://github.com/openai/codex) |
| **Gemini CLI** | L'agent d'IA terminal open-source de Google avec fenêtre contextuelle 1M et mise à la terre de Google Search. -96K+ | 🟣 | [GitHub](https://github.com/google-gemini/gemini-cli) |
| **Qwen Code** | Agent d'IA terminal open-source optimisé pour Qwen3-Coder; support multi-protocole (API OpenAI/Anthropic/Gemini), 1000 requêtes gratuites/jour. ~21K+ | 🟢 | [GitHub](https://github.com/QwenLM/qwen-code) |
| **Aider** | Programmation de paires d'IA dans un terminal avec intégration Git profonde; cartographie des bases de code entières et des modifications auto-commits. ~42K+ - | 🟢 | [GitHub](https://github.com/Aider-AI/aider) |
| **OpenCode** | Puissant agent de codage d'IA open-source avec belle TUI; prend en charge presque tous les fournisseurs de modèles d'IA. - 120K+ | 🟢 | [GitHub](https://github.com/opencode-ai/opencode) |
| **Goose** | Agent d'IA open-source extensible de Block (Square/Cash App); installe, exécute, modifie et teste avec n'importe quel LLM. ~29K+ | 🟢 | [GitHub](https://github.com/block/goose) |
| **Crush** | Agent de codage agentique glamour de Charmbracelet avec support multi-modèles, intégration LSP, et belle interface de terminal. ~9K+ | 🟢 | [GitHub](https://github.com/charmbracelet/crush) |
| **Amazon Q Developer CLI** | Expérience de chat agentique en terminal de AWS; transition vers Kiro CLI. | 🟣 | [GitHub](https://github.com/aws/amazon-q-developer-cli) |
| **Amp** | L'outil de codage agentique de Sourcegraph (Cody success); fonctionne à travers CLI et IDE. | 🔵 | [Website](https://ampcode.com) |
| **Junie CLI** | JetBrains' LLM-agnostic agent de codage CLI (beta 2026); prend en charge tous les principaux fournisseurs de modèles. | 🔵 | [Website](https://www.jetbrains.com/junie/) |
| **Autohand Code CLI** | Agent de codage terminal autonome auto-évoluant avec support LLM multi-fournisseurs, 40 outils et système de compétences modulaires. | 🟢 | [GitHub](https://github.com/autohandai/code-cli) |

#### Éditeurs de code AI / IDE

Éditeurs autonomes ou fourches IDE avec intégration profonde de l'IA.

| Dénomination | Désignation des marchandises | Type | Lien |
|:-----|:-----------|:----:|:----:|
| **Cursor** | Leading AI-native code editor (VS Code fork); Composer génère des applications entières à partir du langage naturel, des modifications de fichiers multi-agents. | 🔵 | [Website](https://cursor.com) |
| **Windsurf** | IDE (VS Code fourk) avec agent Cascade propriétaire et modèle SWE-1.5; acquis par Cognition AI. | 🔵 | [Website](https://windsurf.com) |
| **Zed** | Éditeur haute performance dans Rust avec fonctionnalités d'IA natives, prédiction d'édition de Zeta, et support de protocole client d'Agent. ~77K+ | 🟢 | [GitHub](https://github.com/zed-industries/zed) |
| **Trae** | IDE à moteur d'IA gratuit de ByteDance ("The Real AI Engineer") avec mode constructeur; offre un accès gratuit à Claude, GPT-4o, et DeepSeek. | 🔵 | [Website](https://www.trae.ai) |
| **Google Antigravity** | L'agent de Google-premier IDE (VS Code fork) avec vue Manager pour orchestrer plusieurs agents en parallèle; propulsé par Gemini. | 🔵 | [Website](https://antigravity.google) |
| **Kiro** | L'IDE d'AWS (VS Code Fork) est un agent de l'AWS qui transforme les invites en spécifications, puis en code de travail, docs et tests. | 🔵 | [Website](https://kiro.dev) |
| **PearAI** | Éditeur de code AI Open-source (VS Code fork) avec le chat et les finitions continues. -40K+ | 🟢 | [GitHub](https://github.com/trypear/pearai-app) |
| **Void** | Curseur de source ouverte alternative (fourche de code VS); tout modèle ou hébergement local avec visualisation de changement. - 28K+ | 🟢 | [GitHub](https://github.com/voideditor/void) |
| **Melty** | Open-source chat-premier éditeur de code AI avec édition multi-fichier et intégration Git profonde. ~7K+ | 🟢 | [GitHub](https://github.com/meltylabs/melty) |
| **Emdash** | Environnement de dev agentique libre (YC W26) pour l'exécution de plusieurs agents de codage en parallèle dans des worktrees Git isolés. | 🟢 | [GitHub](https://github.com/generalaction/emdash) |

#### Extensions IDE / Plugins

Plugins pour VS Code, JetBrains, Neovim et autres éditeurs.

| Dénomination | Désignation des marchandises | Type | Lien |
|:-----|:-----------|:----:|:----:|
| **GitHub Copilot** | Le plus largement adopté assistant de codage de l'IA; les finitions en ligne, le chat, et agent de codage agentique à travers le code VS, JetBrains, Neovim. | 🔵 | [Website](https://github.com/features/copilot) |
| **Cline** | Agent de codage autonome dans le code VS avec approbations human-in-the-loop; édition de fichiers, commandes de terminaux et utilisation du navigateur. -59K+ | 🟢 | [GitHub](https://github.com/cline/cline) |
| **Continue** | Open-source VS Code et JetBrains extension pour la création de systèmes d'IA dev personnalisés et modulaires; n'importe quel modèle. ~32K+ | 🟢 | [GitHub](https://github.com/continuedev/continue) |
| **Cody** | Assistant AI alimenté par des sources qui tire le contexte des bases de code locales et distantes; VS Code, JetBrains, Visual Studio. | 🔵 | [Website](https://sourcegraph.com/cody) |
| **Codeium** | Extension gratuite de codage AI pour plus de 40 IDEs avec achèvements, chat et recherche dans plus de 70 langues. | 🟣 | [Website](https://codeium.com) |
| **Amazon Q Developer** | Assistant de codage AI d'AWS avec achèvements, chat en ligne et mode agent; intégration profonde d'AWS. | 🟣 | [Website](https://aws.amazon.com/q/developer/) |
| **Gemini Code Assist** | Extension IDE de Google alimenté par Gemini avec des finitions, Next Edit Prédictions, et des diffs en ligne; gratuit pour les individus. | 🟣 | [Website](https://codeassist.google) |
| **Tabnine** | Assistant AI axé sur la protection de la vie privée formé sur les logiciels libres autorisés; prend en charge tous les grands IDE avec le déploiement sur site. | 🔵 | [Website](https://www.tabnine.com) |
| **Augment Code** | Assistant de codage IA Enterprise avec moteur contextuel de 200K pour une compréhension profonde de la base de code. | 🔵 | [Website](https://www.augmentcode.com) |
| **Qodo** | Examen du code d'IA et plate-forme de qualité avec architecture multi-agents; génération de tests, examen du code, application de CI/CD. | 🟣 | [Website](https://www.qodo.ai) |
| **CodeGeeX** | Modèle de génération de code multilingue open-source prenant en charge plus de 20 langues avec le code VS et les extensions JetBrains. ~11K+ | 🟢 | [GitHub](https://github.com/zai-org/CodeGeeX) |
| **Tabby** | Assistant de codage de l'intelligence artificielle autonome (copilote alternatif); fonctionne entièrement sur votre infrastructure. ~25K+ | 🟢 | [GitHub](https://github.com/TabbyML/tabby) |

#### Plateformes de codage AI / Agents Cloud

Agents basés sur le navigateur ou le cloud qui construisent, testent et déploient de façon autonome.

| Dénomination | Désignation des marchandises | Type | Lien |
|:-----|:-----------|:----:|:----:|
| **Devin** | Premier ingénieur logiciel d'IA entièrement autonome basé sur le cloud; plans, codes, tests, et ouvre les PR indépendamment. | 🔵 | [Website](https://devin.ai) |
| **Replit Agent** | Agent d'IA natif du cloud qui construit, teste et déploie de façon autonome des applications dans le navigateur; plus de 50 langues. | 🔵 | [Website](https://replit.com/products/agent) |
| **bolt.new** | Agent de dev web alimenté par l'IA; invitez, exécutez, modifiez et déployez des applications complètes directement dans le navigateur via WebContainers. -15K+ | 🟢 | [GitHub](https://github.com/stackblitz/bolt.new) |
| **bolt.diy** | Fourche communautaire de boulon.new avec des caractéristiques étendues et plus grande flexibilité LLM. ~12K+ | 🟢 | [GitHub](https://github.com/stackblitz-labs/bolt.diy) |
| **Lovable** | Applications complètes en langage naturel avec Supabase intégré, auth, et un clic de déploiement; démarrage européen le plus rapide à $20M ARR. | 🔵 | [Website](https://lovable.dev) |
| **v0** | La plate-forme AI de Vercel pour générer de haute qualité React/Next. js composants d'interface utilisateur du langage naturel. | 🔵 | [Website](https://v0.dev) |
| **GitHub Copilot Workspace** | Environnement de codage basé sur le nuage avec plan, brainstorm et agents de réparation; inclus avec les plans Copilot payés. | 🔵 | [Website](https://githubnext.com/projects/copilot-workspace) |
| **Firebase Studio** | L'environnement de développement de Google basé sur le cloud. | 🔵 | [Website](https://firebase.google.com/studio) |

#### Cadres d'agents de codage à source ouverte

Cadres et projets de recherche pour la construction d'agents de codage autonomes.

| Dénomination | Désignation des marchandises | Type | Lien |
|:-----|:-----------|:----:|:----:|
| **OpenHands** | Diriger la plate-forme open-source pour les agents de codage du cloud; toujours en haut sur SWE-bench. Anciennement OpenDevin. ~69K+ | 🟢 | [GitHub](https://github.com/OpenHands/OpenHands) |
| **SWE-agent** | Prend un problème GitHub et le corrige automatiquement à l'aide d'une interface agent-ordinateur personnalisée. [NeurIPS 2024] ~19K+ | 🟢 | [GitHub](https://github.com/SWE-agent/SWE-agent) |
| **Open SWE** | Le cadre d'agent de codage asynchrone de LangChain basé sur LangGraph avec intégration Slack/Linear. -8K+ | 🟢 | [GitHub](https://github.com/langchain-ai/open-swe) |
| **Devika** | Ingénieur de logiciels mandataires à source ouverte; décompose les instructions, recherche et écrit du code. Devin alternative. ~18K+ | 🟢 | [GitHub](https://github.com/stitionai/devika) |
| **AutoCodeRover** | Amélioration autonome du programme combinant les LLM et la localisation des défauts pour la résolution des problèmes de GitHub. -2.8K+ | 🟢 | [GitHub](https://github.com/nus-apr/auto-code-rover) |
| **Agentless** | Approche simple en trois phases (localiser → réparer → valider) pour résoudre les problèmes de développement de logiciels. ~2K+ | 🟢 | [GitHub](https://github.com/OpenAutoCoder/Agentless) |
| **Devon** | Programmeur de paires open-source SWE agent avec écriture de code, planification, et la recherche; soutient Claude, GPT-4, Llama, Ollama. -3.5K+ | 🟢 | [GitHub](https://github.com/entropy-research/Devon) |

### Autres dépôts notables

| Dénomination | Désignation des marchandises | Lien |
|:-----|:-----------|:----:|
| **Prompt Engineering Guide (DAIR.AI)** | Le guide open-source définitif et le centre de ressources. 3M+ apprenants. ~55K+ | [GitHub](https://github.com/dair-ai/Prompt-Engineering-Guide) |
| **Awesome ChatGPT Prompts / Prompts.chat** | La plus grande bibliothèque ouverte du monde. 1000s d'invites pour tous les grands modèles. | [GitHub](https://github.com/f/awesome-chatgpt-prompts) |
| **12-Factor Agents** | Principes pour les logiciels de production de construction alimentés par LLM. ~17K+ | [GitHub](https://github.com/humanlayer/12-factor-agents) |
| **NirDiamant/Prompt_Engineering** | 22 tutoriels pratique Jupyter Notebook. ~3K+ | [GitHub](https://github.com/NirDiamant/Prompt_Engineering) |
| **Context Engineering Repository** | Guide des premiers principes pour passer de l'ingénierie rapide à la conception contextuelle. | [GitHub](https://github.com/davidkimai/Context-Engineering) |
| **AI Agent System Prompts Library** | Collecte d'invites système à partir d'agents de codage AI de production (Claude Code, Gemini CLI, Cline, Aider, Roo Code). | [GitHub](https://github.com/tallesborges/agentic-system-prompts) |
| **Awesome Vibe Coding** | Liste curée de 245 outils et ressources pour la construction de logiciels à travers le langage naturel. | [GitHub](https://github.com/taskade/awesome-vibe-coding) |
| **OpenAI Cookbook** | Recettes officielles pour les invitations, outils, RAG et évaluations. | [GitHub](https://github.com/openai/openai-cookbook) |
| **Embedchain** | Cadre pour créer des robots de type ChatGPT sur votre ensemble de données. | [GitHub](https://github.com/embedchain/embedchain) |
| **ThoughtSource** | Cadre pour la science de la pensée machine. | [GitHub](https://github.com/OpenBioLink/ThoughtSource) |
| **Promptext** | Extraits et formats de contexte de code pour les appels AI avec comptage de jetons. | [GitHub](https://github.com/1broseidon/promptext) |
| **Price Per Token** | Comparez les prix de l'API LLM pour plus de 200 modèles. | [Website](https://pricepertoken.com/) |
| **OpenPaw** | Outil CLI (`npx pawmode`) qui transforme Claude Code en assistant personnel en générant des invites système (CLAUDE.md + SOUL.md) avec personnalité, mémoire et 38 routeurs de compétences. | [GitHub](https://github.com/daxaur/openpaw) |
| **Think Better** | CLI open source qui injecte en permanence 10 cadres de décision structurés (MECE, Emission Trees, Pré-Mortems) et 12 détecteurs de biais cognitifs dans des appels d'assistants à l'IA. Allez, MIT. | [GitHub](https://github.com/HoangTheQuyen/think-better) |

---

## API
💻

### OpenAI

| Modèle | Contexte | Prix (entrée/sortie par jeton de 1 M) | Élément clé |
|:------|:--------|:-----------------------------------|:------------|
| GPT-5.2 / 5.2 Thinking | 400K | $1.75 / $14 | Dernier phare, réduction de 90% en cache, raisonnement configurable |
| GPT-5.1 | 400K | $1.25 / $10 | phare de la génération précédente |
| GPT-4.1 / 4.1 mini / nano | 1M | $2 / $8 | Meilleur modèle sans raison, 40% plus rapide et 80% moins cher que GPT-4o |
| o3 / o3-pro | 200K | Variantes | Modèles de raisonnement avec utilisation d'outils natifs |
| o4-mini | 200K | Rentabilité | Le raisonnement rapide, le meilleur sur AIME à sa classe de coût |
| GPT-OSS-120B / 20B | 128K | $0.03 / $0.30 | Premiers modèles ouverts, Apache 2.0 |

Caractéristiques clés: API des réponses, Agents SDK, Sorties structurées, appel de fonction, cache rapide (90% de réduction), API par lots (50% de réduction), support MCP. [Docs de la Plateforme](https://platform.openai.com/docs/models)

### anthropique (Claude)

| Modèle | Contexte | Prix (entrée/sortie par jeton de 1 M) | Élément clé |
|:------|:--------|:-----------------------------------|:------------|
| Claude Opus 4.6 | 1M (bêta) | $5 / $25 | Les tâches de codage et d'agent les plus puissantes et les plus modernes |
| Claude Sonnet 4.5 | 200K | $3 / $15 | Meilleur modèle de codage, 61,4 % OSWorld (utilisation par ordinateur) |
| Claude Haiku 4.5 | 200K | Niveau rapide | Classe de modèle proche de la frontière, la plus rapide |
| Claude Opus 4 / Sonnet 4 | 200K | 15 $/75 $ (Opus) | Opus: 72,5% SWE-bench, Sonnet 4 puissances GitHub Copilote |

Principales caractéristiques: Thinking élargi avec utilisation d'outils, utilisation d'ordinateur, MCP (originé ici), cache rapide, Claude Code CLI, disponible sur AWS Bedrock et Google Vertex AI. [API Docs](https://docs.anthropic.com/)

### Google (Gemini)

| Modèle | Contexte | Prix (entrée/sortie par jeton de 1 M) | Élément clé |
|:------|:--------|:-----------------------------------|:------------|
| Gemini 3 Pro Preview | 1M | $2 / $12 | Modèle Google le plus intelligent, déployé à 2B+ Utilisateurs de recherche |
| Gemini 2.5 Pro | 1M | $1.25 / $10 | Meilleur pour le codage / tâches d'agent, modèle de pensée |
| Gemini 2.5 Flash / Flash-Lite | 1M | $0.30/$1.50 · $0.10/$0.40 | Leaders de la performance des prix |

Caractéristiques clés: Thinking (tous les modèles 2.5+), Google Search mise à la terre, exécution de code, API en direct (audio/vidéo en temps réel), contexte en cache. [Google AI Studio](https://ai.google.dev/)

### Méta (Llama)

| Modèle | Architecture | Contexte | Élément clé |
|:------|:------------|:--------|:------------|
| Llama 4 Scout | 109B MoE / 17B actif | 10M | Convient à un seul H100, multimodal, poids ouvert |
| Llama 4 Maverick | 400B MoE / 17B actif, 128 experts | 1M | Beats GPT-4o, poids ouvert |
| Llama 3.3 70B | Sensation | 128K | Correspond à Llama 3.1 405B |

Disponible sur plus de 25 partenaires cloud, Hugging Face et inférence API. [Lama](https://ai.meta.com/llama/)

### Autres fournisseurs importants

| Fournisseur | Désignation des marchandises | Lien |
|:---------|:-----------|:----:|
| **Mistral AI** | Mistral Large 3 (675B MoE), Devstral 2, Ministral 3. Apache 2.0. | [Website](https://mistral.ai) |
| **DeepSeek** | V3.2 (671B MoE), R1 (raison, licence MIT). 0,15 $/0,75 $ par jeton de 1 M. | [Website](https://deepseek.com) |
| **xAI (Grok)** | Grok 4.1 Rapide : contexte 2M, 0,20 $/0,50 $ par jeton 1M. | [Website](https://x.ai) |
| **Cohere** | Commande A (contexte 111B, 256K), Embed v4, Rerank 4.0. Excels chez RAG. | [Website](https://cohere.com) |
| **Together AI** | 200+ modèles ouverts avec latence sous-100ms. | [Website](https://together.ai) |
| **Groq** | Matériel LPU avec ~300+ jetons/sec inférence. | [Website](https://groq.com) |
| **Fireworks AI** | Inférence rapide avec la conformité HIPAA + SOC2. | [Website](https://fireworks.ai) |
| **OpenRouter** | API unifiée pour plus de 300 modèles de tous les fournisseurs. | [Website](https://openrouter.ai) |
| **Cerebras** | Chips à l'échelle Wafer avec le meilleur temps de réponse total. | [Website](https://cerebras.ai) |
| **Perplexity AI** | API augmentée avec citations. | [Website](https://perplexity.ai) |
| **Amazon Bedrock** | Service multimodèle géré avec Claude, Lama, Mistral, Cohere. | [Website](https://aws.amazon.com/bedrock/) |
| **Hugging Face Inference** | Accès aux modèles ouverts via API. | [Website](https://huggingface.co/docs/api-inference/index) |

---

## Données et repères
💾

### Principaux repères (2024-2026)

| Dénomination | Désignation des marchandises | Lien |
|:-----|:-----------|:----:|
| **Chatbot Arena / LM Arena** | 6M+ vote l'utilisateur pour des comparaisons par paire de LLM. Norme de fait pour la préférence humaine. | [Website](https://lmarena.ai/) |
| **MMLU-Pro** | Plus de 12 000 questions de niveau supérieur dans 14 domaines. NeurIPS 2024 Pleins feux. | [GitHub](https://github.com/TIGER-AI-Lab/MMLU-Pro) |
| **GPQA** | 448 questions STEM "Google-proof" ; les validateurs non experts n'obtiennent que 34%. | [arXiv](https://arxiv.org/abs/2311.12022) |
| **SWE-bench Verified** | Sous-ensemble de 500 tâches validé par l'homme pour la résolution des problèmes GitHub dans le monde réel. | [Website](https://www.swebench.com/) |
| **SWE-bench Pro** | 1 865 tâches sur 41 offres professionnelles; les meilleurs modèles ne marquent qu'environ 23 %. | [Leaderboard](https://scale.com/leaderboard/swe_bench_pro_public) |
| **Humanity's Last Exam (HLE)** | 2 500 questions reçues par des experts; les meilleurs scores d'IA seulement ~10-30%. | [Website](https://agi.safe.ai/) |
| **BigCodeBench** | 1 140 tâches de codage dans 7 domaines; l'IA atteint ~35,5% contre 97% de réussite humaine. | [Leaderboard](https://huggingface.co/spaces/bigcode/bigcodebench-leaderboard) |
| **LiveBench** | Résistant à la contamination avec des questions fréquemment mises à jour. | [Paper](https://openreview.net/forum?id=sKYHBTAxVa) |
| **FrontierMath** | Mathématiques au niveau de la recherche; l'IA ne résout que ~2 % des problèmes. | Recherche |
| **ARC-AGI v2** | Le raisonnement abstrait mesure l'intelligence fluide. | Recherche |
| **IFEval** | Instruction-suivant l'évaluation avec des contraintes de formatage/contenu. | [arXiv](https://arxiv.org/abs/2311.07911) |
| **MLE-bench** | L'évaluation d'ingénierie ML d'OpenAI via des tâches de style Kaggle. | [GitHub](https://github.com/openai/mle-bench) |
| **PaperBench** | Évaluer la capacité de l'IA à reproduire 20 documents ICML 2024 à partir de zéro. | [GitHub](https://github.com/openai/preparedness) |

### Tableau de classement et métadonnées

| Dénomination | Désignation des marchandises | Lien |
|:-----|:-----------|:----:|
| **Hugging Face Open LLM Leaderboard v2** | Évaluer les modèles ouverts sur MMLU-Pro, GPQA, IFEval, MATH. | [Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) |
| **Artificial Analysis Intelligence Index v3** | Agrége 10 évaluations. | [Website](https://artificialanalysis.ai/) |
| **SEAL by Scale AI** | Organise des évaluations de SWE-bench Pro et d'agents. | [Leaderboard](https://scale.com/leaderboard) |

### Données rapides et d'instruction

| Dénomination | Désignation des marchandises | Lien |
|:-----|:-----------|:----:|
| **P3 (Public Pool of Prompts)** | Modèles rapides pour 270+ tâches NLP utilisées pour former T0 et modèles similaires. | [HuggingFace](https://huggingface.co/datasets/bigscience/P3) |
| **System Prompts Dataset** | 944 modèles d'invite système pour les flux de travail des agents (par Daniel Rosehill, août 2025). | [HuggingFace](https://huggingface.co/datasets/danielrosehill/system_prompts) |
| **OpenAssistant Conversations (OASST)** | 161 443 messages en 35 langues avec 461 292 évaluations de qualité. | [HuggingFace](https://huggingface.co/datasets/OpenAssistant/oasst1) |
| **UltraChat / UltraFeedback** | Enseignement synthétique à grande échelle et ensembles de données de préférence pour la formation à l'alignement. | Face à la hic |
| **SoftAge Prompt Engineering Dataset** | 1 000 appels divers dans 10 catégories pour évaluer rapidement le rendement. | Face à la hic |
| **Text Transformation Prompt Library** | Collection complète des invitations à la transformation de texte (mai 2025). | Face à la hic |
| **Writing Prompts** | ~300K histoires écrites par l'homme jumelées avec des invitations de r/WritingPrompts. | [Kaggle](https://www.kaggle.com/datasets/ratthachat/writing-prompts) |
| **Midjourney Prompts** | Invitations de texte et URLs d'image rayées du discorde public de MidJourney. | [HuggingFace](https://huggingface.co/datasets/succinctly/midjourney-prompts) |
| **CodeAlpaca-20k** | 20 000 paires d'instructions-sorties de programmation. | [HuggingFace](https://huggingface.co/datasets/sahil2801/CodeAlpaca-20k) |
| **ProPEX-RAG** | Ensemble de données pour une optimisation rapide des flux de travail RAG. | Face à la hic |
| **NanoBanana Trending Prompts** | 1 000+ impulsions d'image d'IA curated de X/Twitter, classées par engagement. | [GitHub](https://github.com/jau123/nanobanana-trending-prompts) |

### Red Teaming et données adversaires

| Dénomination | Désignation des marchandises | Lien |
|:-----|:-----------|:----:|
| **HarmBench** | 510 comportements nuisibles dans les catégories standard, contextuelles, copyright et multimodal. | [Website](https://safetyprompts.com/) |
| **JailbreakBench** | Ouvrir la référence de robustesse pour le déglaçage avec 100 prompts. | Recherche |
| **AgentHarm** | 110 tâches d'agent malveillant dans 11 catégories de dommages. | [arXiv](https://arxiv.org/abs/2410.09024) |
| **DecodingTrust** | 243877 invite à évaluer la fiabilité dans 8 perspectives. | Recherche |
| **SafetyPrompts.com** | Agrégateur suivi 50 ensembles de données de sécurité/d'équipe rouge. | [Website](https://safetyprompts.com/) |

---

## Modèles
🧠

### Modèles frontières (2025-2026)

| Modèle | Fournisseur | Contexte | Force clé |
|:------|:---------|:--------|:-------------|
| **GPT-5.2** | OpenAI | 400K | Renseignements généraux, 100% AIME 2025 |
| **Claude Opus 4.6** | Anthropique | 1M (bêta) | Codage, tâches d'agent, réflexion élargie |
| **Gemini 3 Pro** | Google | 1M | #1 LMArena (~1500 Elo), multimodal |
| **Grok 4.1** | x AI | 2M | #2 LMArena (1483 Elo), faible hallucination |
| **Mistral Large 3** | Autres | 256K | Meilleur poids ouvert (675B MoE/41B actif), Apache 2.0 |
| **DeepSeek-V3.2** | Recherche profonde | 128K | Meilleure valeur (671B MoE/37B actif), licence MIT |
| **Llama 4 Maverick** | Méta | 1M | Beats GPT-4o (400B MoE/17B actif), poids libre |

### Modèles de raisonnement

| Modèle | Détail de la clé |
|:------|:-----------|
| **OpenAI o3 / o3-pro** | 87,7% GPQA Diamond. Utilisation d'outils autochtones. |
| **OpenAI o4-mini** | Meilleur AIME à sa classe de coût avec raisonnement visuel. |
| **DeepSeek-R1 / R1-0528** | Open-weight, RL-trained. 87,5% sur AIME 2025. Licence MIT. |
| **QwQ (Qwen with Questions)** | Modèle de raisonnement 32B. Apache 2.0. Comparable à R1. |
| **Gemini 2.5 Pro/Flash (Thinking)** | raisonnement intégré avec budget de réflexion configurable. |
| **Claude Extended Thinking** | Mode hybride avec chaîne de pensée visible et utilisation d'outils. |
| **Phi-4 Reasoning / Plus** | Les modèles de raisonnement 14B rivalisent avec des modèles beaucoup plus grands. Le poids libre. |
| **GPT-OSS-120B** | OpenAI's open-weight avec CoT. Proche-parité avec o4-mini. Apache 2.0. |

### Modèles à source ouverte notables

| Modèle | Fournisseur | Détail de la clé |
|:------|:---------|:-----------|
| **Qwen3-235B-A22B** | Alibaba | Ministère de l'éducation. Apache 2.0. Famille la plus téléchargée sur HuggingFace. |
| **Gemma 3** | Google | 270M à 27B. Multimodal. 128K contexte. 140+ langues. |
| **OLMo 2/3** | Le président | Entièrement ouvert (données, code, poids, journaux). OLMo 2 32B dépasse GPT-3.5. Apache 2.0. |
| **SmolLM3-3B** | Visage bouillant | Surpasse Llama-3.2-3B. Le raisonnement à deux modes. 128K contexte. |
| **Kimi K2** | Lune | 32B actif. Le poids libre. Personnalisé pour le codage et l'utilisation d'agents. |
| **Llama 4 Scout** | Méta | 109B MoE/17B actif. Contexte de 10M jeton. Convient à un seul H100. |

### Modèles spécialisés dans les codes

| Modèle | Détail de la clé |
|:------|:-----------|
| **Qwen3-Coder (480B-A35B)** | 69,6 % SWE-bench – étape pour le codage open-source. 256 000 contexte. Apache 2.0. |
| **Devstral 2 (123B)** | 72,2% SWE-bench Vérifié. 7x plus rentable que Claude Sonnet. |
| **Codestral 25.01** | Le modèle de code de Mistral. Plus de 80 langues. Remplir-in-the-Middle support. |
| **DeepSeek-Coder-V2** | 236B MoE / 21B actif. 338 langues de programmation. |
| **Qwen 2.5-Coder** | 7B/32B. 92 langues de programmation. 88,4% HumanEval. Apache 2.0. |

### Modèles fondamentaux (référence historique)

Ces modèles ont établi des concepts clés, mais sont largement remplacés pour une utilisation pratique:

| Modèle | Fournisseur | Importance |
|:------|:---------|:-------------|
| GLM-130B | Tsinghua | Ouvert bilingue anglais/langue chinoise (2023) |
| Falcon 180B | TII | Grand modèle générateur ouvert (2023) |
| Mixtral 8x7B | Autres | Architecture MoE innovante pour modèles ouverts (2023) |
| GPT-NeoX-20B | EleutherAI | LLM autorégressif ouvert précoce |
| GPT-J-6B | EleutherAI | Modèle de langage de causalité ouvert précoce |

---

## Détecteurs de contenu AI
🔎

### Principaux détecteurs commerciaux

| Dénomination | Précision | Élément clé | Lien |
|:-----|:---------|:------------|:----:|
| **GPTZero** | 99 % réclamés | Utilisateurs 10M+, #1 sur G2 (2025). Détecte GPT-4/5, Gemini, Claude, Llama. Niveau gratuit disponible. | [Website](https://gptzero.me) |
| **Originality.ai** | 98–100% (examen par les pairs) | La cote la plus précise est constante. Combine détection d'IA + plagiat + contrôle des faits. À partir de 14,95 $/mois. | [Website](https://originality.ai) |
| **Turnitin AI Detection** | 98%+ sur texte AI non modifié | Dominant dans les universités. Lancement d'une détection par contournement/humaniseur d'IA (août 2025). Licence institutionnelle. | [Website](https://www.turnitin.com/solutions/topics/ai-writing/) |
| **Copyleaks** | 99 % + | Outil d'entreprise de détection de l'IA en 30 langues. Intégrations LMS. | [Website](https://copyleaks.com) |
| **Winston AI** | 99,98% réclamés | OCR pour les documents numérisés, détection d'image/deepfake d'IA. 11 langues. | [Website](https://gowinston.ai) |
| **Pangram Labs** | 99,3% (COLING 2025) | Note la plus élevée dans COLING 2025 Tâche partagée. 100% TPR sur texte "humanisé". 97,7 % robustesse adversaire. | [Website](https://www.pangram.com) |

### Détecteurs libres et de recherche

| Dénomination | Désignation des marchandises | Lien |
|:-----|:-----------|:----:|
| **Binoculars** | Détecteur de recherche open source utilisant une perplexité croisée entre deux LLM. | [arXiv](https://arxiv.org/abs/2401.12070) |
| **DetectGPT / Fast-DetectGPT** | Méthode statistique comparant log-probabilités du texte original par rapport aux perturbations. | [arXiv](https://arxiv.org/abs/2301.11305) |
| **Openai Detector** | Classeur AI pour l'indication du texte AI (enveloppeur OpenAI Detector Python)  | [[GitHub]](https://github.com/promptslab/openai-detector) |
| **Sapling AI Detector** | Détecteur de navigateur gratuit (jusqu'à 2000 caractères). 97% d'exactitude dans certaines études. | [Website](https://sapling.ai/) |
| **QuillBot AI Detector** | Gratuit, pas d'inscription requise. | [Website](https://quillbot.com/ai-content-detector) |
| **Writer AI Content Detector** | Outil gratuit avec des résultats en couleur. | [Website](https://writer.com/ai-content-detector/) |
| **ZeroGPT** | Détecteur libre populaire évalué dans plusieurs études universitaires. | [Website](https://www.zerogpt.com/) |

### Approches de référence

| Dénomination | Désignation des marchandises | Lien |
|:-----|:-----------|:----:|
| **SynthID (Google DeepMind)** | Filigrane pour le texte AI, les images et l'audio par échantillonnage statistique. Déployé dans les produits Google. | [Website](https://deepmind.google/technologies/synthid/) |
| **OpenAI Text Watermarking** | Développé mais encore expérimental en 2025. La recherche montre des préoccupations de fragilité. | Expérience |

**Mise en garde importante :** Aucun détecteur ne réclame une précision de 100 %. Le texte mixte homme/AI reste plus difficile à détecter (précision de 50 à 70 %). La robustesse de l'adversaire varie considérablement. Le marché de la détection de l'IA devrait passer d'environ 2,3 milliards de dollars (2025) à 15 milliards de dollars d'ici 2035.

---

## Livres
📖

### Ingénierie rapide

| Titre | Auteur(s) | Éditeur | Année |
|:------|:----------|:---------|:-----|
| **Prompt Engineering for LLMs** | John Berryman & Albert Ziegler | O'Reilly | 2024 |
| **Prompt Engineering for Generative AI** | James Phoenix et Mike Taylor | O'Reilly | 2024 |
| **Prompt Engineering for LLMs** | Thomas R. Caldwell | Indépendant | 2025 |

### Développement d'applications LLM

| Titre | Auteur(s) | Éditeur | Année |
|:------|:----------|:---------|:-----|
| **AI Engineering: Building Applications with Foundation Models** | Chip Huyen | O'Reilly | 2025 |
| **Build a Large Language Model (From Scratch)** | Sebastian Raschka | Effectifs | 2024 |
| **Building LLMs for Production** | Louis-François Bouchard & Louie Peters | O'Reilly | 2024 |
| **LLM Engineer's Handbook** | Paul Iusztin & Maxime Labonne | Emballage | 2024 |
| **The Hundred-Page Language Models Book** | Andriy Burkov | Auto-édité | 2025 |

### Agents de l'IA

| Titre | Auteur(s) | Éditeur | Année |
|:------|:----------|:---------|:-----|
| **Building Applications with AI Agents** | Michael Albada | O'Reilly | 2025 |
| **AI Agents and Applications** | Roberto Infante | Effectifs | 2025 |
| **AI Agents in Action** | Micheal Lanham | Effectifs | 2025 |

### Production, fiabilité et sécurité

| Titre | Auteur(s) | Éditeur | Année |
|:------|:----------|:---------|:-----|
| **LLMs in Production** | Christopher Brousseau & Matthew Sharp | Effectifs | 2025 |
| **Building Reliable AI Systems** | Rush Shahani | Effectifs | 2025 |
| **The Developer's Playbook for LLM Security** | Steve Wilson | O'Reilly | 2024 |

---

## Cours
👩‍🏫

### Cours courts gratuits

- [ChatGPT Prompt Engineering pour les développeurs](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) — Co-trait d'Andrew Ng et d'OpenAI Isa Fulford. Le point de départ fondamental. (DeepLearning. IA)
- [Construction de systèmes avec l'API ChatGPT](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/) — Conception de systèmes LLM multi-étapes pour la production. (DeepLearning. IA)
- [Agents de l'IA en LangGraph](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/) — Flux de données agents avec utilisation d'outils et agents de recherche. (DeepLearning. IA)
- [RAG agent de construction avec LlamaIndex](https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/) — Construction d'agents de recherche RAG. (DeepLearning. IA)
- [Fonctions, outils et agents avec LangChain](https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/) — Appel de fonctions et renforcement des agents. (DeepLearning. IA)
- [Ingénierie rapide pour les modèles de vision](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) — Techniques d'incitation visuelle. (DeepLearning. IA)

### Cours universitaires et de plate-forme

- [Spécialisation en génie rapide (Vanderbilt)](https://www.coursera.org/specializations/prompt-engineering) — Série 3 cours par Dr. Jules Revêtement blanc fondamental à avancé PE. (Coursera)
- [IA générative avec LLM (DeepLearning.AI + AWS)](https://www.coursera.org/learn/generative-ai-with-llms) — cycle de vie LLM, transformateurs, RLHF, déploiement. (Coursera)
- [Stanford CS336: Modélisation de la langue à partir de Scratch](https://cs336.stanford.edu/) — Construire une LLM de bout en bout. (Stanford, 2024-2026)
- [MIT 6.S191: Introduction à l'apprentissage profond](https://introtodeeplearning.com/) — Cours annuel comprenant les LLM et l'IA générative. (MIT, 2024-2026)
- [L'ingénierie complète rapide pour AI Bootcamp](https://www.udemy.com/course/prompt-engineering-for-ai/) — couvre GPT-5, DSPy, LangGraph, architectures d'agents. 58K+ notes. (Udemy, mise à jour février 2026)

### Cours de Plateforme Gratuite

- [Google Prompting Essentials](https://grow.google/prompting-essentials/) — 5 étapes de conception rapide, méta-prompting, Gemini. Moins de 6 heures.
- [Microsoft Azure AI fondamentaux: l'IA générative](https://learn.microsoft.com/en-us/training/paths/introduction-generative-ai/) — Voie d'apprentissage libre couvrant les LLM, les invites, les agents, Azure OpenAI.
- [Cours de LLM sur le visage hugging](https://huggingface.co/learn/llm-course/chapter1/1) — cours communautaire couvrant les transformateurs, le réglage fin, les modèles de raisonnement de construction.
- [Cours sur les agents d'IA du visage](https://huggingface.co/learn) — Théorie des agents à pratiquer. 100K+ étudiants inscrits.

### Apprendre les cours de prompting

- [ChatGPT pour tous](https://learnprompting.org/courses/chatgpt-for-everyone)
- [Introduction à l'ingénierie rapide](https://learnprompting.org/courses/introduction_to_prompt_engineering)
- [Ingénierie avancée](https://learnprompting.org/courses/advanced-prompt-engineering)
- [Introduction au piratage rapide](https://learnprompting.org/courses/intro-to-prompt-hacking)
- [Hacking rapide avancé](https://learnprompting.org/courses/advanced-prompt-hacking)
- [Introduction aux agents d'IA génériques pour les professionnels des affaires](https://learnprompting.org/courses/introduction-to-agents)
- [Sécurité AI](https://learnprompting.org/courses/ai-safety)

---

## Tutoriels et guides
📚

### Guides officiels des fournisseurs

- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) — Complète, couvrant l'incitation GPT-4.1/5, les modèles de raisonnement, les sorties structurées, les workflows d'agents. Mise à jour continue.
- [OpenAI GPT-4.1 Guide de lancement](https://cookbook.openai.com/articles/gpt-4-1-prompting-guide) [2025] — Conception rapide en forme d'agent structuré: persistance de l'objectif, intégration d'outils, traitement à long contexte.
- [Aperçu de l'ingénierie anthropique](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) — Conception rapide itérative, balises XML, chaîne de pensée, attribution de rôles. Inclut générateur rapide.
- [anthropique Claude 4 Meilleures pratiques](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices) [2025-2026] — Exécution d'outils parallèles, capacités de réflexion, traitement d'images.
- [Anthropique : Ingénierie contextuelle efficace pour les agents d'IA](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) [2025] — L'évolution de l'ingénierie rapide vers l'ingénierie contextuelle : état des agents, mémoire, outils, MCP.
- [Stratégies de stimulation Google Gemini](https://ai.google.dev/docs/prompt_best_practices) — Invitation multimodale pour Gemini via Vertex AI et AI Studio.
- [Microsoft Prompt Ingénierie en Azure AI Studio](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering) — Appel à l'outil, conception des fonctions, éveil de quelques images, enchaînement rapide.

### Guides communautaires et indépendants

- [Guide d'ingénierie rapide (DAIR.AI / guide d'incitation.ai)](https://www.promptingguide.ai/) — Guide ouvert le plus complet. 18+ techniques, guides spécifiques au modèle, documents de recherche. 3M+ apprenants. Maintenant inclut l'ingénierie de contexte.
- [Apprendre le prompting (learnprompting.org)](https://learnprompting.org/) — Plate-forme libre structurée. Débutant à PE avancé, sécurité AI, concours HackAPrompt.
- [IBM 2026 Guide d'ingénierie rapide](https://www.ibm.com/think/prompt-engineering) [2026] — Outils, tutoriels, exemples du monde réel avec code Python.
- [Tutoriel interactif anthropique](https://github.com/anthropics/prompt-eng-interactive-tutorial) — Cours de cahier Jupyter à 9 chapitres avec exercices pratiques.
- [Guide d'ingénierie rapide de Lilian Weng](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/) [2023] — Blog technique très respecté du chercheur OpenAI.
- [Guide d'ingénierie de Google Prompt (68 pages PDF)](https://www.reddit.com/r/PromptEngineering/comments/1kggmh0/google_dropped_a_68page_prompt_engineering_guide/) [2025] — Guide des meilleures pratiques de style interne pour les Gémeaux avec des modèles de béton.
- [DigitalOcean: Pratiques exemplaires en génie rapide](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices) [2025] — Mise à jour du guide résumant les techniques: peu de clichés, la chaîne de pensée, l'incitation au rôle, etc.
- [Aakash Gupta: Ingénierie rapide en 2025](https://news.aakashg.com) [2025] — Guide pratique avec sagesse de l'expédition de AI à OpenAI, Shopify et Google.
- [Meilleures pratiques pour l'ingénierie rapide avec API OpenAI](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api) — les meilleures pratiques d'introduction d'OpenAI.
- [Livre de recettes OpenAI](https://github.com/openai/openai-cookbook) — Recettes officielles pour les appels de fonctions, le RAG, l'évaluation et les flux de travail complexes.
- [Microsoft Prompt Ingénierie Docs](https://microsoft.github.io/prompt-engineering) — les ressources d'ingénierie ouvertes et rapides de Microsoft.
- [Livre rapide DALLE](https://dallery.gallery/the-dalle-2-prompt-book) — Guide visuel pour l'appel texte-image.
- [Meilleurs 100 + Prompts de diffusion stable](https://mpost.io/best-100-stable-diffusion-prompts-the-most-beautiful-ai-text-to-image-prompts) — les appels à la création d'images curées par la Communauté.
- [Génie de l'ambiance (gestion)](https://www.manning.com/books/vibe-engineering) — Livre de Tomasz Lelek & Artur Skowronski sur la construction de logiciels par le biais d'invites en langage naturel.

---

## Vidéos
🎥

- [Andrej Karpathy: "Plongée profonde dans les LLM" & "Comment j'utilise les LLM"](https://www.youtube.com/@AndrejKarpathy) [2024-2025] — Deux des vidéos d'IA les plus influentes de 2024-2025. Plongée technique approfondie suivie de modèles d'utilisation pratiques.
- [Karpathy: "Logiciel dans l'ère de l'IA" (YC AI Startup School)](https://karpathy.ai/) [2025] — Codage en vibe (février 2025) et champion de l'ingénierie du contexte (juin 2025).
- [Karpathy: Réseaux neuronaux: Zéro à Héros](https://www.youtube.com/@AndrejKarpathy) [2023-2024] — Série de conférences complète, de la rétropropagation au GPT.
- [3Blue1Brown: Série Réseaux neuronaux](https://www.youtube.com/@3blue1brown) [Mise à jour 2024] — Explications visuelles animées iconiques des transformateurs et des mécanismes d'attention. 7M+ abonnés.
- [AI expliqué](https://www.youtube.com/@aiexplained-official) [2024-2025] — L'analyse longue forme décompose les documents, les capacités du modèle et les développements de PE.
- [Sam Witteveen](https://www.youtube.com/@samwitteveen) [2024-2025] — Didacticiels pratiques sur l'ingénierie rapide, LangChain, RAG et agents.
- [Matthew Berman](https://www.youtube.com/@matthew_berman) [2024-2025] — Canal populaire couvrant les versions du modèle et l'utilisation pratique de LLM. 600K+ abonnés.
- [DeepLearning.AI YouTube](https://www.youtube.com/@Deeplearningai) [2024-2026] — Cours structurés, aperçus de cours, et Andrew Ng parle des agents et des carrières en AI.
- [Lex Fridman Podcast (épisodes d'IA)](https://www.youtube.com/@lexfridman) [2024-2025] — Entrevues de longue durée avec Altman, Hinton, Amodei sur les LLM, l'incitation et la sécurité.
- [ICSE 2025: Tutoriel d'ingénierie d'IAware Prompt](https://conf.researchr.org/details/icse-2025/icse-2025-tutorials/) [2025] — Tutoriel de conférence couvrant les modèles rapides, la fragilité, les anti-patterns et l'optimisation des DSL.
- [CMU Advanced NLP 2022: Déploiement](https://youtube.com/watch?v=5ef83Wljm-M) — Conférence académique fondamentale sur les méthodes d'incitation.
- [ChatGPT: 5 secrets d'ingénierie rapides pour les débutants](https://www.youtube.com/watch?v=2zg3V66-Fzs) — Introduction accessible aux débutants.

---

## Communautés
🤝

### Serveurs de discorde

- [Apprendre la rapidité](https://learnprompting.org/discord) — plus de 40 000 membres. Le plus grand PE Discord avec les cours, les hackathons, les concours HackAPrompt.
- [Diffuseur de labs](https://discord.gg/m88xfYMbK6)  - Communauté
- [Voyage intermédiaire](https://discord.gg/midjourney) — 1M+ membres. Hub principal pour le partage rapide de texte à image.
- [Discorde OpenAI](https://discord.gg/openai) — Communauté officielle avec des canaux pour les GPT, Sora, DALL-E et l'aide API.
- [Discorde anthropique](https://discord.gg/anthropic) — La communauté officielle Claude pour la collaboration au développement de l'IA.
- [Discorde du visage](https://discord.gg/huggingface) — discussions modèles, soutien des bibliothèques, manifestations communautaires.
- [DébitGPT](https://flowgpt.com/) — 33 K+ membres. 100K+ invite à travers ChatGPT, DALL-E, Stable Diffusion, Claude.

### Reddit

- [r/PromptIngénierie](https://reddit.com/r/PromptEngineering) — Sous-rédaction dédiée aux techniques de fabrication et aux discussions rapides.
- [r/ChatGPT](https://reddit.com/r/ChatGPT) — 10M+ membres. Hub principal pour les utilisateurs de ChatGPT et partage rapide.
- [r/localLLaMA](https://reddit.com/r/LocalLLaMA) — Communauté hautement technique pour la gestion locale des LLM open source.
- [r/ClaudeAI](https://reddit.com/r/ClaudeAI) — La communauté Claude d'Anthropic : partage rapide, conseils API, comparaisons de modèles.
- [r/Machine](https://reddit.com/r/MachineLearning) — des discussions sur la recherche sur le ML orientées vers l'enseignement.
- [r/OpenAI](https://reddit.com/r/OpenAI) — Discussions sur les produits OpenAI et les API.
- [r/StableDiffusion](https://reddit.com/r/StableDiffusion) — 450K+ membres pour l'art de l'intelligence artificielle et les flux de travail.
- [r/ChatGPTPromptGenius](https://reddit.com/r/ChatGPTPromptGenius) — 35K+ membres partageant et affinant les appels.


### Forums et plateformes

- [Communauté des développeurs OpenAI](https://community.openai.com/) — Forum officiel pour l'aide aux API, les meilleures pratiques, le partage de projets.
- [La communauté des visages](https://huggingface.co/) — Hub pour une collaboration ouverte en matière d'IA.
- [Communauté de l'AI](https://community.deeplearning.ai/) — Forum pour les apprenants qui discutent des cours et des carrières en matière d'IA.
- [Moins](https://www.lesswrong.com/) — Postes techniques approfondis sur les capacités et la sécurité de l'IA.
- [Forum sur l'alignement de l'IA](https://www.alignmentforum.org/) — discussions de recherche sur l'alignement.
- [CivitAI](https://civitai.com/) — Plateforme de créateurs d'IA pour le partage de modèles, de LoRAs et d'invites.

### Organisations GitHub

- [LangChain](https://github.com/langchain-ai) — Cadre d'application LLM open-source. 100K+ étoiles.
- [Labo rapide](https://github.com/promptslab)  — Modèles génériques 
- [Visage bouillant](https://github.com/huggingface) — Hub central: Transformateurs, Diffuseurs, Datasets, TRL.
- [DSPy (NLP de Stanford)](https://github.com/stanfordnlp/dspy) — Une communauté croissante pour une optimisation rapide et systématique.
- [OpenAI](https://github.com/openai) — modèles, repères et outils open-source.

---

<!-- AUTORESEARCH-START -->
## Recherche autonome et agents auto-amélioration
> Synchronisé automatiquement à partir de [super-recherche automatique](https://github.com/alvinunreal/awesome-autoresearch) · Dernière synchronisation : 2026-10-03

### Descendants d'usage général

- [kayba-ai/récursive-amélioration](https://github.com/kayba-ai/recursive-improve) — Cadre d'auto-amélioration récursif où les agents capturent les traces d'exécution, analysent les profils d'échec et appliquent des correctifs ciblés avec une évaluation continue ou inversée.
- [vukrosique/auto-recherche](https://github.com/vukrosic/auto-research) — Plan de contrôle pour un laboratoire de recherche autonome ouvert sur l'IA — modèle d'exploitation basé sur des fichiers pour la direction humaine et l'exécution d'agents.
- [uditgoenka/autorecherche](https://github.com/uditgoenka/autoresearch) — Compétence de Claude Code qui généralise l'autorecherche en une boucle réutilisable pour les logiciels, les documents, la sécurité, l'expédition, le débogage et d'autres objectifs mesurables.
- [leo-lilinxiao/codex-autorecherche](https://github.com/leo-lilinxiao/codex-autoresearch) — Capacité de recherche automatique Codex-native avec support de reprise, leçons à travers des parcours, expériences parallèles optionnelles et workflows spécifiques au mode.
- [junjunbong/boucle de recherche](https://github.com/junjunjunbong/research-loop) — Autoresearch-style Agent Skill for Codex et Claude Code avec un coureur déterministe, approbation plan-hash, des worktrees isolés Git, une évaluation métrique faisant autorité, et un livre d'expériences en annexe seulement.
- [xieyulai/virage](https://github.com/xieyulai/steer) — Cadre d'expérience géré où les agents de codage éditent le code de formation et effectuent des rondes pendant que la tâche, le scoreeur et les preuves restent fixes.
- [VoirAI/Thoth](https://github.com/SeeleAI/Thoth) — Dashboard-first Claude Code and Codex runtime for autoresearch, avec des pistes durables, des objets de travail verrouillés, des registres visibles et des verdicts revisibles.
- [supratikpm/gemini-autorecherche](https://github.com/supratikpm/gemini-autoresearch) — Compétence de l'ICL Gemini qui généralise l'autorecherche à tout objectif mesurable. Gemini-native: utilise Google Search comme source de vérification en direct dans la boucle, le vrai mode de nuit sans tête via --yolo --prompt, et le contexte de jeton 1M. Fonctionne également dans Antigravity IDE via .agents/skills/.
- [davebcn87/pi-recherche](https://github.com/davebcn87/pi-autoresearch) — `pi` extension plus tableau de bord pour les boucles d'expériences persistantes, les mesures en direct, le suivi de la confiance, et les sessions d'auto-recherche récupérables.
- [drivelinerecherche/autorecherche-claude-code](https://github.com/drivelineresearch/autoresearch-claude-code) — Claude Code plugin/port de compétences `pi-autoresearch`, avec un flux de travail propre et une étude de cas de biomécanique concrète.
- [greyhaven-ai/autocontext](https://github.com/greyhaven-ai/autocontext) — Plan de contrôle en boucle fermée pour l'amélioration répétée de l'agent, avec évaluation, connaissances persistantes, validation par étapes et distillation optionnelle pour des durées locales moins chères.
- [Necmttn/ax](https://github.com/Necmttn/ax) — Boucle rétro locale pour les agents de codage AI: capture les traces de session, transforme les frictions répétées en propositions et trace les corrections acceptées comme expériences.
- [Jmilinovitch/Goal-md](https://github.com/jmilinovich/goal-md) — Généralise l'autorecherche `GOAL.md` modèle de repos où l'agent doit d'abord construire une fonction de fitness mesurable avant qu'il puisse optimiser.
- [james-s-tayler/développeur paresseux](https://github.com/james-s-tayler/lazy-developer) — la compétence Claude Code qui orchestre l'autorecherche dans une séquence prioritaire de buts d'optimisation (couverture, vitesse de test, vitesse de construction, complexité, LOC, performance) en utilisant GOAL.md comme moteur. Prend en charge l'exécution autonome et Ralph Mode multi-instance.
- [mutable-état-inc/autorecherche-à-maison](https://github.com/mutable-state-inc/autoresearch-at-home) — Fourche collaborative d'auto-recherche en amont qui ajoute des revendications d'expérience, une synchronisation des meilleures configurations partagées, un échange d'hypothèses et une coordination de type essaim sur de nombreux agents mono-GPU.
- [zkarimi22/autorecherche-tout](https://github.com/zkarimi22/autoresearch-anything) — Généralise l'autorecherche **tout paramètre mesurable** — invites système, performances API, pages d'atterrissage, suites de test, réglage de configuration, requêtes SQL. "Si vous pouvez le mesurer, vous pouvez l'optimiser."
- [Entrpi/autorecherche - partout](https://github.com/Entrpi/autoresearch-everywhere) — Extension multiplateforme qui détecte automatiquement la configuration matérielle et démarre la boucle. La moitié "colle et généralisation" de l'autorecherche.
- [ShengranHu/ADAS](https://github.com/ShengranHu/ADAS) — **Conception automatisée des systèmes d'agents** — ICLR 2025. Méta-agents qui inventent des architectures d'agents nouveaux en les programmant en code.
- [MaximeRobeyns/self_amélioration_codage_agent](https://github.com/MaximeRobeyns/self_improving_coding_agent) — **SICA**: Auto-amélioration du codage Agent qui modifie sa propre base de codes. ICLR 2025 Document d'atelier démontrant l'auto-amélioration au niveau des échafaudages sur les repères de codage.
- [peterskoett/agent auto-améliorant](https://github.com/peterskoett/self-improving-agent) — Alternative architecture d'auto-amélioration des agents avec des cycles de réflexion et de méta-apprentissage.
- [Métaauto-ai/MGH](https://github.com/metauto-ai/HGM) — **Machine Huxley-Gödel** pour les agents de codage — applique l'auto-amélioration aux performances du banc SWE par l'optimisation du méta-niveau.
- [gepa-ai/gepa](https://github.com/gepa-ai/gepa) — **GEPA (Genetic-Pareto)** — ICLR 2026 Orale. Évolution rapide réfléchie qui surpasse RL (GRPO) sur les repères. Optimise tous les paramètres textuels par rapport à toute métrique en utilisant la réflexion du langage naturel.
- [sentient-agi/EvoSkill](https://github.com/sentient-agi/EvoSkill) — Découverte automatisée de compétences pour les agents de codage: évolution des compétences réutilisables et des incitations de trajectoires ratées par rapport aux repères, avec le soutien de Claude Code, Codex CLI, OpenCode, OpenHands et Goose.
- [M. Tsepa/Autovolve](https://github.com/MrTsepa/autoevolve) — Recherche automatique d'inspiration GEPA pour l'auto-jouage: stratégies de code muté, évaluation tête à tête, taux avec Elo/Bradley-Terry, branche du front Pareto. Agent lit des traces de correspondance aux mutations ciblées. Fonctionne comme une compétence Claude Code.
- [HKUDS/ClawTeam](https://github.com/HKUDS/ClawTeam) — l'intelligence des agents pour l'auto-recherche;
- [Orchestre-Recherche/AI-Recherche-SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs) — Une bibliothèque de compétences complète comprenant l'orchestration auto-recherche avec une architecture à deux boucles (optimisation interne + synthèse externe).
- [Autres](https://github.com/WecoAI/aideml) — **AIDE**: Tree-search Agent d'ingénierie ML qui améliore de façon autonome la performance du modèle via la génération et l'évaluation itératives de code.
- [weco.ai](https://weco.ai) — **Weco**: Plate-forme Cloud pour AIDE avec observabilité, suivi d'expérience et gestion des parcours – apporte la boucle de recherche automatique à la production.

### Systèmes d'agents de recherche

- [scinder-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) — Une filière de recherche de bout en bout qui transforme un sujet en revue de la littérature, en expériences, en analyses, en examens par les pairs et en ébauches de papier; plus large que l'autorecherche, mais clairement dans la même lignée.
- [OpenLAIR/dr-claw](https://github.com/OpenLAIR/dr-claw) — Espace de travail de recherche open source avec pipelines d'idées à papier séquentielle et ensembles d'outils intégrés de recherche automatique.
- [Recherche ouverte/Nano](https://github.com/OpenRaiser/NanoResearch) — Moteur de recherche autonome de bout en bout qui planifie des expériences, génère du code, exécute des emplois localement ou sur SLURM, analyse des résultats réels et écrit des articles basés sur ces résultats.
- [kaust-ark/ARK](https://github.com/kaust-ark/ARK) — **ARK (Kit de recherche automatique)**: idée + lieu → pipeline de papier orchestrant 6 agents — analyse de proposition, recherche de littérature, expériences de Slurm, rédaction LaTeX, examen itératif par les pairs. Contrôle par CLI, tableau de bord web ou Télégramme.
- [wanshuiyin/Auto-claude-code-recherche en sommeil](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) — Les premières étapes de la recherche pour Claude Code et d'autres agents, centrées sur l'examen autonome de la littérature, les expériences, l'itération du papier et la critique croisée.
- [skyllwt/AutoSci](https://github.com/skyllwt/AutoSci) — Plateforme de recherche sur le cycle de vie complet centrée sur Wiki, basée sur Claude Code, réalisant la vision LLM-Wiki de Karpathy. 20+ compétences couvrent la boucle complète: ingest → ideite → nouveauté vérifier → expérimentation design / run / eval → écriture papier. L'état de recherche vit dans un wiki de connaissances structuré avec un graphique interactif.
- [Sibyl-Research-Team/AutoResearch-SibylSystem](https://github.com/Sibyl-Research-Team/AutoResearch-SibylSystem) — Un scientifique de l'IA entièrement autonome, basé sur Claude Code, avec une lignée d'AutoRecherche explicite, une itération de recherche multi-agents, une exécution d'expériences GPU et une boucle extérieure auto-évoluante.
- [wjc2830/Easy-AutoResearch-for-DeepLearning](https://github.com/wjc2830/Easy-AutoResearch-for-DeepLearning) — Compétences de Claude Code qui gère une boucle d'apprentissage en profondeur de type auto-recherche, axée sur l'homme et couvrant six rôles, des expériences en version et des résultats vérifiés.
- [eimenhmdt/autochercheur](https://github.com/eimenhmdt/autoresearcher) — Premier paquet open source pour automatiser les flux de travail scientifiques, actuellement centré sur la génération de la littérature-examen avec une ambition vers une recherche autonome plus large.
- [hyperspaceai/agi](https://github.com/hyperspaceai/agi) — Distribué, réseau de recherche de pair à pair où des agents autonomes effectuent des expériences, des découvertes de commérages, maintiennent les classements CRDT et archivent les résultats à GitHub dans plusieurs domaines de recherche.
- [Société humaine-agent-société/CORAL](https://github.com/Human-Agent-Society/CORAL) — **CORRECTIONS**: Évolution autonome multi-agents pour la découverte ouverte ([arXiv: 2604.01658](https://arxiv.org/abs/2604.01658)) . Agents de longue durée avec mémoire persistante partagée, exécution asynchrone et interventions basées sur les battements cardiaques; SOTA sur 10 tâches mathématiques/algorithmiques/systèmes.
- [SakanaAI/AI-Scientifique](https://github.com/SakanaAI/AI-Scientist) — **Le scientifique de l'IA**: Premier système complet de découverte scientifique entièrement automatique. De la génération des idées à l'écriture papier avec une supervision humaine minimale.
- [SakanaAI/AI-Scientifique-v2](https://github.com/SakanaAI/AI-Scientist-v2) — Découverte scientifique automatisée au niveau de l'atelier par recherche d'arbres agents. Supprime la dépendance du modèle de v1, généralise les domaines de recherche.
- [Équipe AweAI/Scientifique](https://github.com/AweAI-Team/AiScientist) — **AiScientifique**: long-horizon ML laboratoire de recherche avec orchestration hiérarchique et coordination File-as-Bus — les fichiers d'espace de travail agissent comme le système durable d'enregistrement. Conduit des boucles autonomes de production de papier (PaperBench) et des boucles d'itération MLE-Bench de type compétition sous des budgets fixes de calcul/temps ([arXiv 2604.130118](https://arxiv.org/abs/2604.13018))
- [HKUDS/AI-chercheur](https://github.com/HKUDS/AI-Researcher) — NeurIPS 2025 papier. Automatisation complète de la recherche : hypothèse → expériences → manuscrit → évaluation par les pairs. Version de production à [novix.science](https://novix.science/chat).
- [openags/Auto-Recherche](https://github.com/openags/Auto-Research) — **Ouvrir un AGV**: Organise une équipe d'agents de l'IA tout au long du cycle de vie de la recherche — examen éclairé, génération d'hypothèses, expériences, rédaction de manuscrits et examen par les pairs.
- [SamuelSchmidgall/AgentLaboratoire](https://github.com/SamuelSchmidgall/AgentLaboratory) — Workflow de recherche autonome de bout en bout : idée → revue de littérature → expériences → rapport. Prend en charge les modes autonomes et copilotes.
- [AgentRxiv](https://agentrxiv.github.io/) — Cadre de recherche autonome collaboratif où les laboratoires d'agents partagent un serveur préimprimé pour s'appuyer sur les travaux de l'autre.
- [JinheonBaek/Agent de recherche](https://github.com/JinheonBaek/ResearchAgent) — Création d'idées de recherche itérative sur la littérature scientifique avec des LLM. Boucles d'examen et de rétroaction multi-agents.
- [du-nlp-lab/MLR-Copilote](https://github.com/du-nlp-lab/MLR-Copilot) — Cadre de recherche autonome ML — génère des idées, met en œuvre des expériences, analyse des résultats.
- [MASWorks/ML-Agent](https://github.com/MASWorks/ML-Agent) — Renforcement des agents LLM pour l'ingénierie autonome ML. Apprendre des essais et des erreurs pour améliorer la performance du modèle.
- [PouriaRouzrokh/LatteReview](https://github.com/PouriaRouzrokh/LatteReview) — Python à code bas pour **revues systématiques automatisées de la littérature** par l'intermédiaire d'agents alimentés par l'IA.
- [LitLLM/LitLLM](https://github.com/LitLLM/LitLLM) — Assistant à l'analyse documentaire de l'IA utilisant le RAG pour des sections précises et bien structurées de travail connexe dans la rédaction académique.
- [Laboratoire des agents](https://agentlaboratory.github.io/) — Pipeline de recherche en trois phases : Revue de littérature → Expérimentation → Rédaction de rapports, avec des agents spécialisés pour chaque phase.
- [happy-jun/writing-drived-autorecherche](https://github.com/happyhappy-jun/writing-driven-autoresearch) — harnais auto-recherche qui conserve un papier de table soumis dès la première minute et conduit chaque expérience des revendications dans ce projet, boucler modifier → mesure → vérifier → réviser. 1ère place au [Ralphthon@ICML 2026](https://luma.com/hjuo7auc) hackathon de recherche autonome.
- [AutoRecherche-Factory/Agon](https://github.com/AutoResearch-Factory/Agon) — orchestre de recherche de bout en bout construit sur un principe de pierre angulaire, Prompt Economy (boucles réutilisables, pas des prompts uniques), plus cinq règles de soutien; exécute des boucles scientifiques/codeurs/auditeurs dans plus de 10 disciplines, la même ligne de boucle réutilisable que l'autorecherche, mais étendue à des programmes de recherche complets.

### Ports de plate-forme et fourches de matériel

- [gianfrancopiana/openclaw-autorecherche](https://github.com/gianfrancopiana/openclaw-autoresearch) — OpenClaw port of pi-autoresearch; boucle d'expérimentation autonome pour toute cible d'optimisation avec notation de confiance statistique.
- [miolini/autorecherche-macos](https://github.com/miolini/autoresearch-macos) — Fourche macOS largement adoptée qui adapte l'autorecherche en amont pour Apple Silicon / MPS tout en préservant la forme de boucle originale.
- [trivin-créateur/autorecherche-mlx](https://github.com/trevin-creator/autoresearch-mlx) — Port Apple Silicon natif MLX qui maintient le budget fixe en amont `val_bpb` boucler tout en supprimant entièrement la dépendance PyTorch/CUDA.
- [jsegov/autoresearch-win-rtx](https://github.com/jsegov/autoresearch-win-rtx) — Fourche RTX native Windows centrée sur les GPU NVIDIA grand public, avec des planchers VRAM explicites et un chemin pratique de configuration de bureau.
- [iii-hq/n-autorecherche](https://github.com/iii-hq/n-autoresearch) — Infrastructure auto-recherche multi-GPU avec suivi d'expérience structuré, stratégie de recherche adaptative, récupération de crash et orchestration interrogeable autour du classique `train.py` boucle.
- [lucasgelfond/autorecherche-webgpu](https://github.com/lucasgelfond/autoresearch-webgpu) — Port Browser/WebGPU qui permet aux agents de générer du code de formation, d'exécuter des expériences dans le navigateur et de retourner les résultats dans la boucle sans configuration Python.
- [Tonitangpotato/autorecherche-engramme](https://github.com/tonitangpotato/autoresearch-engram) — Fourche avec **mémoire cognitive persistante** — la recherche de connaissances transversales pondérées par fréquence pour améliorer la continuité des expériences.
- [Port Colab/Kaggle T4](https://github.com/karpathy/autoresearch/issues/208) — Adapte l'autorecherche pour les GPU T4 gratuits (Google Colab / Kaggle) avec un coût zéro et une configuration locale zéro. Changements clés : Flash Attention 3 → PyTorch SDPA, supprime la dépendance du noyau uniquement H100.
- [ArmanJR-Lab/autorecherche](https://github.com/ArmanJR-Lab/autoautoresearch) — port d'Orin de Jetson AGX **réalisateur** — un binaire Go qui agit comme un "directeur créatif" injecteant de la nouveauté (papiers arxiv + DeepSeek Reasoner) dans la boucle pour échapper aux minima locaux. Comprend une comparaison multi-expositions (baseline vs director-guided) avec une analyse détaillée du décrochage.

### Adaptations spécifiques au domaine

- [mattprusak/autorecherche-généalogie](https://github.com/mattprusak/autoresearch-genealogy) — Applique le modèle d'autorecherche à la généalogie, en utilisant des instructions structurées, des guides d'archives, des vérifications des sources et des flux de travail des voûtes pour étendre et vérifier la recherche sur l'histoire familiale.
- [ArchishmanSengupta/autovoiceevals](https://github.com/ArchishmanSengupta/autovoiceevals) — Utilise des appelants adversaires plus des modifications rapides de garde-ou-révertir pour durcir les agents d'IA vocales à travers Vapi, Smallest AI et OnzeLabs.
- [Chrisworsey55/atlas-gic](https://github.com/chrisworsey55/atlas-gic) — Applique la boucle auto-recherche garde-ou-revertie aux agents de négociation, optimisant les prompts et l'orchestration de portefeuille contre le rapport de Sharpe roulant au lieu de la perte de modèle.
- [Tout de suite-AI/autokernel](https://github.com/RightNow-AI/autokernel) — Applique la boucle de recherche automatique à l'optimisation du noyau GPU: goulets d'étranglement de profil, modifier un noyau, référence, conserver ou revenir, répéter.
- [ElliotXie/autoenzyme](https://github.com/ElliotXie/autozyme) — Cadre multi-agents qui applique la boucle auto-recherche garder-ou-revertir au logiciel scientifique côté CPU: profiler une fonction cible, générer un candidat d'optimisation, référence pour la vitesse tout en préservant les sorties originales, garder ou revenir, répéter.
- [Agent-Analytique/autorecherche-croissance](https://github.com/Agent-Analytics/autoresearch-growth) — applique l'autorecherche au positionnement de la page d'atterrissage et aux candidats aux tests A/B, en utilisant des instantanés analytiques et des résultats d'expériences mesurés pour semer les rondes suivantes.
- [Rkcr7/autoresearch-sudoku](https://github.com/Rkcr7/autoresearch-sudoku) — Workflow d'autorecherche amélioré où un agent d'IA réécrit itérativement et repère un résolveur Rust sudoku, battant finalement les principaux résolveurs construits par l'homme sur des ensembles de référence durs.
- [jeongph/autospéc](https://github.com/jeongph/autospec) — lit les règles d'affaires en langage naturel et construit de façon autonome un service Spring Boot avec des tests via la boucle de veille ou de réouverture. Évaluer avec Gradle build + JUnit XML. squelette de 119 lignes à 950 lignes en 5 cycles.
- [vlasenkoalexey/tpu_performances_autorecherche_wiki](https://github.com/vlasenkoalexey/tpu_performance_autoresearch_wiki) — Applique la boucle auto-research keep-or-revert à la performance du modèle TPU (MFU / tokens-per-sec) sur le matériel v6e: profile chaque exécution à travers un serveur MCP XProf, effectue un changement de code de modèle par expérience, et conserve ou retourne contre MFU mesuré. Combine la boucle avec un wiki LLM de style Karpathy pour la connaissance du domaine et les traces d'optimisation par experiment; comprend des études de cas Llama3-8B et Qwen3-8B sur les voies JAX et Torchax.

### Évaluation et repères

- [snap-stanford/MLAgentBench](https://github.com/snap-stanford/MLAgentBench) — Série de repères pour l'évaluation des agents d'IA sur les tâches d'expérimentation de ML. 13 tâches de CIFAR-10 à BabyLM.
- [OpenAI/mle-bench](https://github.com/openai/mle-bench) — l'indice de référence d'OpenAI pour la mesure de l'efficacité des agents d'IA dans l'ingénierie ML.
- [Chchenhui/mlrbench](https://github.com/chchenhui/mlrbench) — MLR-Bench: évaluation des agents d'IA dans le cadre de la recherche ouverte sur les ML. 201 tâches des ateliers NeurIPS/ICLR/ICML.
- [Gersteinlab/ML-Bench](https://github.com/gersteinlab/ML-Bench) — Évaluer les LLM et les agents pour les tâches ML sur le code de dépôt.
- [THUDM/AgentBench](https://github.com/THUDM/AgentBench) — Référence complète pour l'évaluation LLM-as-Agent dans 8 environnements distincts. ICLR 2024.

### Ressources connexes

- [ai-agents-2030/super-chercheur-agent](https://github.com/ai-agents-2030/awesome-deep-research-agent) — Liste des documents et systèmes d'agents de recherche approfondis.
- [YoungDubbyDu/LLM-Agent-Optimisation](https://github.com/YoungDubbyDu/LLM-Agent-Optimization) — Documents sur les méthodes d'optimisation des agents LLM.
- [Papiers voltAgent/super-agent](https://github.com/VoltAgent/awesome-ai-agent-papers) — papiers d'agent d'intelligence artificielle de 2026 — ingénierie d'agent, mémoire, évaluation, flux de travail et systèmes autonomes.
- [Masamasa59/ai-agent-papiers](https://github.com/masamasa59/ai-agent-papers) — des documents de recherche sur les agents de l'IA mis à jour deux fois par semaine via une recherche arxiv automatisée avec sélection curée.
- [tmgthb/agents autonomes](https://github.com/tmgthb/Autonomous-Agents) — Rapports de recherche des agents autonomes, mis à jour quotidiennement.
- [HKUST-KnowComp/Awesome-LLM-Scientifique-Découverte](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery) — Enquête EMNLP 2025 sur les LLM dans la découverte scientifique.
- [openags/Awesome-AI-Scientist-Papers](https://github.com/openags/Awesome-AI-Scientist-Papers) — Collection d'articles scientifiques sur l'IA et les robots.
- [agenticscience.github.io](https://agenticscience.github.io/) — Enquête : « De l'IA pour la science à la science agentique : une enquête sur la découverte scientifique autonome ».
- [dspy.ai/GEPA](https://dspy.ai/api/optimizers/GEPA/overview/) — intégration DSPy de l'optimiseur rapide réfléchissant GEPA pour les systèmes d'IA composés.
- [Livre de recettes OpenAI : Agents auto-évoluants](https://developers.openai.com/cookbook/examples/partners/self_evolving_agents/autonomous_agent_retraining) — Livre de recettes pour le recyclage des agents autonomes en utilisant l'évolution réfléchissante de style GEPA.
- [WecoAI/super-recherche automatique](https://github.com/WecoAI/awesome-autoresearch) — Liste des cas d'utilisation d'AutoRecherche avec traces vérifiables et graphiques de progression, organisée par domaine (formation LLM, noyaux GPU, agents vocaux, trading, etc.).

<!-- AUTORESEARCH-END -->

---

## Comment contribuer

Nous saluons les contributions à cette liste! Avant de contribuer, veuillez prendre un moment pour revoir notre [lignes directrices concernant les contributions](contributing.md). Ces lignes directrices permettront de s'assurer que vos contributions correspondent à nos objectifs et répondent à nos normes de qualité et de pertinence.

**Ce que nous cherchons :**
- Nouveaux documents, outils ou ressources de haute qualité avec une brève description de leur importance
- Mises à jour des entrées existantes (liens brisés, informations obsolètes)
- Corrections aux chiffres des étoiles, aux prix ou aux détails du modèle
- Traductions et amélioration de l'accessibilité

**Normes de qualité:**
- Tous les outils devraient être activement maintenus (mise à jour au cours des six derniers mois)
- Les documents devraient provenir d'endroits examinés par des pairs ou faire l'objet d'une adoption communautaire importante.
- Les ensembles de données devraient être accessibles au public.
- Veuillez inclure une description unique expliquant pourquoi la ressource est précieuse.

Merci de votre intérêt pour ce projet!

<a href="https://github.com/promptslab/Awesome-Prompt-Engineering/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=promptslab/Awesome-Prompt-Engineering" />
</a>

---

<p align="center">
  <sub>Maintien par <a href="https://promptslab.github.io">Labo à commandes</a> · <a href="https://github.com/promptslab/Awesome-Prompt-Engineering">Etoile cette repo</a> si vous le trouvez utile!</sub>
</p>
