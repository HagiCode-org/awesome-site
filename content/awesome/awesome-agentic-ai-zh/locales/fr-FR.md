<div align="right">
  <strong>Français</strong> | <a href="./README.zh-Hans.md">Chinois simplifié</a> | <a href="./README.en.md">Anglais</a>
</div>

<div align="center" markdown="1">

![Du Stage 0–2, la branche commune vers les parcours CLI et Agent, en partageant les Stages 5 et 8, puis choisir un parcours de rôle selon les besoins](resources/diagrams/banner.svg)

# awesome-agentic-ai-zh

**🤖 Une feuille de route d'apprentissage qui va de « qu'est-ce qu'un agent IA » à « construire un système fiable »**

**Choisissez d'abord un parcours, puis avancez étape par étape. Concepts clés, exercices pratiques et ressources sélectionnées sont ordonnés pour vous.**

[![License](https://img.shields.io/badge/license-MIT-blue?style=flat)](LICENSE)
[![繁中](https://img.shields.io/badge/語言-繁體中文-red?style=flat)](README.md)
[![简中](https://img.shields.io/badge/語言-简体中文-orange?style=flat)](README.zh-Hans.md)
[![EN](https://img.shields.io/badge/lang-English-blue?style=flat)](README.en.md)
![GitHub stars](https://img.shields.io/github/stars/WenyuChiou/awesome-agentic-ai-zh?style=flat&logo=github)
[![站点 de lecture en ligne](https://img.shields.io/badge/線上閱讀-立即開始-2ea44f?style=flat)](https://wenyuchiou.github.io/awesome-agentic-ai-zh/)

</div>

> 📱 Pour la lecture sur mobile, utilisez le [site de lecture en ligne](https://wenyuchiou.github.io/awesome-agentic-ai-zh/).

## 🎯 À quoi sert cette feuille de route ?

Un **agent IA** (AI Agent) est « un système d'IA capable, pour atteindre un objectif humain, de décider de la prochaine étape et d'agir de lui-même ». Une fois l'objectif donné, il observe la situation actuelle, choisit la prochaine étape, utilise des outils si nécessaire, puis continue, corrige, s'arrête ou rend le contrôle à l'humaine en fonction du résultat. Il peut accomplir des tâches automatiquement à votre place, mais uniquement dans les règles et les permissions que vous lui avez fixées. Un chatbot qui répond une seule fois, ou un script dont chaque étape est figée à l'avance, n'est pas nécessairement un agent. Ce dépôt ne vous demande pas de connaître tous les termes au départ : il vous guide à travers trois étapes dans l'ordre :

1. **Comprendre d'abord les bases** : ce que sont le LLM (Large Language Model, un modèle capable de lire et écrire du langage), le Prompt, l'API (Application Programming Interface, une interface permettant à un programme d'appeler un service) et le Token.
2. **Ensuite, construire** : faire appel à des outils par le modèle, exécuter une Agent Loop, lire des documents et mémoriser des informations.
3. **Enfin, fiabiliser** : ajouter des permissions, des Eval, une validation humaine, de l'observabilité et une reprise sur échec.

Ici, le rôle est celui d'une **feuille de route d'apprentissage + ressources sélectionnées + petits exercices directement exécutables**. Lorsqu'un chapitre complet est nécessaire, nous vous dirigeons vers la documentation officielle, [Datawhale Hello-Agents](https://github.com/datawhalechina/hello-agents) ou le Cookbook correspondant, plutôt que de réécrire une autre encyclopédie. Lorsqu'un modèle doit être connecté, chaque exercice explique ensuite le chemin cloud ou local.

Les termes techniques importants sont d'abord expliqués simplement lors de leur première apparition, puis le terme anglais officiel est conservé. Si vous oubliez un mot, consultez directement le [glossaire](resources/glossary.md).

## 🚀 Commencez dès maintenant

1. **Vous n'avez jamais programmé** : commencez par [Stage 0 : préparation de base](stages/00-foundations.md) ; si l'API ou les CLI Agent vous sont peu familiers, consultez le [guide de configuration pour débutants](resources/setup-guide.md).
2. **Vous maîtrisez déjà Python, Git et l'API** : commencez par [Stage 1 : bases des LLM](stages/01-llm-basics.md).
3. **Vous ne savez pas encore quel parcours suivre** : consultez d'abord le tableau de choix Track A / Track B ci-dessous.

Avant de suivre le Track A ou le Track B, validez d'abord les Stages 0–2 ; ceux qui ne suivent que le parcours utilisateur quotidien peuvent ouvrir directement le guide de rôle.

| Que voulez-vous faire maintenant ? | Parcours recommandé | Entrée du parcours |
|---|---|---|
| Accomplir un travail avec un CLI Agent tel que Claude Code, Codex, OpenCode | **Track A — Utilisateur avancé de CLI** | [A1 : choisir un CLI Agent](tracks/cli/A1-cli-intro.md) |
| Écrire vous-même des agents, des boucles d'outils, des workflows et des services | **Track B — Constructeur d'agents** | [Stage 3 : première Agent Loop](stages/03-tool-use-and-hello-agent.md) |
| Utiliser l'IA en toute sécurité dans la vie quotidienne, sans programmer pour l'instant | **Parcours utilisateur quotidien** | [Guide de l'utilisateur quotidien](branches/for-everyday-users.md) |

<details markdown="1">
<summary>💻 Déplier : télécharger en local</summary>

```powershell
git clone https://github.com/WenyuChiou/awesome-agentic-ai-zh.git
cd awesome-agentic-ai-zh
```

Après le téléchargement, ouvrez d'abord `stages/00-foundations.md`, ou rendez-vous directement à votre première étape via le tableau ci-dessus.

</details>

## Des Stages 0 à 8, avec un point de lecture Stage 7.5

![Carte d'apprentissage des agents IA](resources/diagrams/learning-map.png)

Cette carte compte au total **8 Stages thématiques + le Stage 0 de préparation + le point de lecture avancée Stage 7.5**, soit **10 stations d'apprentissage**. Les lecteurs des Tracks A/B valident d'abord les **bases communes des Stages 0–2** ; ceux qui maîtrisent déjà Python, Git et l'API peuvent sauter le Stage 0. L'utilisateur quotidien peut suivre directement le guide de rôle.

### Bases communes : Stages 0–2

| Stage | Que résout cette étape ? | Que pourrez-vous faire ensuite ? |
|---|---|---|
| **0** · [Préparation de base](stages/00-foundations.md) | Votre ordinateur et vos outils de base sont-ils prêts ? | Appeler une API publique en Python, lire du JSON (JavaScript Object Notation, format texte courant pour échanger des données entre programmes) et sauvegarder vos résultats avec Git |
| **1** · [Bases des LLM](stages/01-llm-basics.md) | En quoi le LLM, le Token, le Context et les modèles diffèrent-ils ? | Appeler un LLM et choisir un modèle cloud ou local selon vos besoins |
| **2** · [Conception de prompts](stages/02-prompt-engineering.md) | Comment exprimer clairement l'objectif, les données, les règles et la sortie ? | Comparer, sur un cas fixe, les limites de Zero-Shot, One-Shot, Few-Shot et CoT (Chain-of-Thought, méthode d'invite de raisonnement qui traite le problème par étapes intermédiaires) |

### Track A : utiliser un CLI Agent pour finir le travail

L'ordre officiel est `A1 → A2 → Stage 5 → A3 → Stage 8`.

| Ordre | Que résout cette étape ? | Que pourrez-vous faire ensuite ? |
|---|---|---|
| **A1** · [Choisir un CLI Agent](tracks/cli/A1-cli-intro.md) | Que sont respectivement OpenRouter, OpenCode, Pi, Ollama ? | Choisir le bon outil et accomplir une première petite tâche |
| **A2** · [Créer un flux reproductible](tracks/cli/A2-cli-workflow.md) | Comment conserver les règles et les étapes pour la prochaine fois ? | Écrire des Project Instructions, des Skills et des workflows réutilisables |
| **5** · [Écosystème Claude Code](stages/05-claude-code-ecosystem.md) | Comment se distinguent MCP, Skills, Plugins, Hooks et Subagents ? | Lisez d'abord le cœur 5.1–5.4 ; 5.5–5.8 à lire selon les besoins du travail |
| **A3** · [Brancher dans le vrai travail](tracks/cli/A3-cli-production.md) | Comment connecter en toute sécurité des outils externes, la CI et les processus d'équipe ? | Réaliser l'intégration avec privilèges minimaux, vérification humaine et journalisation |
| **8** · [Interfaces d'agent](stages/08-agent-interfaces.md) | Comment l'agent manipule-t-il navigateur, écran et Sandbox ? | Décider si la tâche nécessite CLI, Browser, Computer Use ou API |

### Track B : construire un agent à partir de zéro

| Ordre | Que résout cette étape ? | Que pourrez-vous faire ensuite ? |
|---|---|---|
| **3** · [Utilisation d'outils et première Agent Loop](stages/03-tool-use-and-hello-agent.md) | Comment le modèle appelle-t-il des outils en sécurité et répète-t-il l'étape suivante ? | Créer une Agent Loop avec nombre maximal de tours et validation des paramètres |
| **4** · [Workflow Graph et frameworks d'agents](stages/04-agent-frameworks.md) | Comment dessiner plusieurs étapes sous forme de carte de travail ? | Choisir Workflow, Agent, Graph et Framework |
| **5** · [Écosystème Claude Code](stages/05-claude-code-ecosystem.md) | Comment MCP, Skills, Plugins, Hooks et Subagents coopèrent-ils ? | Combiner outils, règles et capacités réutilisables |
| **6** · [Memory · RAG (Retrieval-Augmented Generation, on recherche d'abord les données pertinentes, puis on répond à partir de ces données)](stages/06-memory-rag.md) | Comment l'agent interroge-t-il des documents, conserve et récupère des informations importantes ? | Mettre en place un RAG minimal, une mémoire long terme et un flux de contextual retrieval |
| **7** · [Ingénierie de mise en production des agents : testable, observable, arrêtable, récupérable](stages/07-multi-agent-production.md) | Comment l'agent fonctionne-t-il de manière stable en environnement réel ? | Ajouter Eval, observabilité, budget, Human-in-the-loop (HITL, validation humaine) et reprise |
| **7.5** · [Carte des concepts agentic avancés](stages/07.5-advanced-agentic-concepts.md) | Quels autres patterns avancés valent la peine d'être connus ? | Choisir parmi 12 concepts les sujets utiles comme la PAR loop, l'agent-as-judge |
| **8** · [Interfaces d'agent](stages/08-agent-interfaces.md) | Comment l'agent manipule-t-il un environnement réel au-delà de l'API ? | Choisir Computer Use, Browser Use ou Code Sandbox |

Au Stage 4, comprenez d'abord le **Workflow Graph**, puis réalisez-le avec un framework ; au Stage 7, ajoutez Eval, observabilité, validation et reprise pour que la même carte de travail fonctionne de manière stable.

> 🔭 **Ordre d'apprentissage** : Stage 2 Prompt → Stage 3 **Agent Loop** → Stage 4 **Workflow Graph** / Framework → Stage 5 outils et règles → Stage 6 **Context Engineering** → Stage 7 production. Prompt, Context, Harness, Loop et Graph travaillent ensemble ; ce ne sont pas cinq couches, ni des générations de produits qui se remplacent mutuellement.

Après le A3 ou le Stage 7, vous pouvez commencer le [projet Capstone](CAPSTONE.md) ; pour suivre vos progrès, utilisez [PROGRESS.md](PROGRESS.md).

<details markdown="1">
<summary>⏱️ Déplier : estimation du temps (référence d'organisation, pas une date limite)</summary>

- **Track A** : environ 8–10 semaines. L'accent est mis sur l'utilisation de CLI Agent existants pour accomplir le travail.
- **Track B** : tronc commun d'environ 16–22 semaines ; avec 5–8 heures par semaine, il faut généralement 5–7 mois.
- **Stage 5** est le Hub outils et règles : le Track A voit comment l'utiliser, le Track B voit comment le combiner.
- **Stage 8** est le Hub interfaces d'exploitation : le Track A voit comment déléguer, le Track B voit comment le brancher sur son propre agent.

Le calendrier n'est qu'une référence d'organisation. Faites d'abord l'étape sous vos yeux, inutile de lire toute la carte d'un coup.

</details>

### Continuez selon votre profil

![Recherche, développement, enseignement, travail de connaissances et usage quotidien sont cinq choix, à lire selon ses besoins, sans tout parcourir](resources/diagrams/branch-decision-tree.svg)

[Image statique](resources/diagrams/branch-decision-tree.png)

| Parcours | Pour qui | Sur quoi travaillerez-vous ? |
|---|---|---|
| 🔬 [Chercheur](branches/for-researcher.md) | Étudiants en thèse, post-doctorants, PI | Preuves bibliographiques, processus reproductibles, Multi-Agent Review |
| 💻 [Développeur](branches/for-developer.md) | Ingénieurs logiciels | CLI Delegation, Code Review, tests et restauration |
| 🎓 [Enseignant](branches/for-teacher.md) | Professeurs, chargés de cours | Préparation de cours, retour, confidentialité et prompts pédagogiques |
| 📊 [Travailleur du savoir](branches/for-knowledge-worker.md) | Consultants, PM, analystes | Flux de travail e-mails, réunions et rapports |
| 👥 [Utilisateur quotidien](branches/for-everyday-users.md) | Utilisateurs d'IA qui ne programment pas nécessairement | Rédaction, apprentissage, utilisation confidentielle et sûre |

## 💡 Comment apprendre sans se bloquer ?

1. **Un seul Stage à la fois** : répondez d'abord à la question centrale du chapitre.
2. **Lisez d'abord les mots-clés et le requis** : ils sont utilisés directement dans les exercices suivants.
3. **Copiez directement la première commande** : exécutez d'abord un test hors ligne, inutile de recopier un fichier vide.
4. **Une seule modification à la fois** : relancez le test juste après, pour savoir quelle modification a causé le résultat.
5. **Atteignez les conditions de fin avant d'avancer** : comprendre ne veut pas dire savoir faire.

Chaque `starter.py` est une référence exécutable. Lisez d'abord l'énoncé et les conditions de réussite, modifiez un endroit, puis relancez le test. Pour la méthode complète, voir [comment utiliser ce matériel](docs/HOW_TO_USE.md).

## 📚 Entrées d'apprentissage à favoriser

Nous ne mettons ici que les entrées les plus courantes ; la liste complète est dans [RESOURCES.md](RESOURCES.md). Les étoiles indiquent la **priorité d'apprentissage**, pas un classement de projets.

<table>
  <thead><tr><th>Usage</th><th>Entrée</th><th>Quand l'utiliser ?</th><th>Importance</th></tr></thead>
  <tbody>
    <tr><th scope="rowgroup" rowspan="3">Démarrer</th><td><a href="resources/setup-guide.md">Guide de configuration pour débutants</a></td><td>Première installation et exécution</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="docs/HOW_TO_USE.md">Comment utiliser ce matériel</a></td><td>Avant de commencer le premier exercice pratique</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="PROGRESS.md">Tableau de progression</a></td><td>Pour savoir quelle est la prochaine étape ou noter ce qui est fait</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
  <tbody>
    <tr><th scope="rowgroup" rowspan="3">Apprendre</th><td><a href="resources/glossary.md">Glossaire des termes clés</a></td><td>En cas de mot inconnu comme Token, RAG, MCP</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="examples/README.md">Entrée des exemples exécutables</a></td><td>Pour lancer directement des tests hors ligne et petits cas</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/cookbook.md">Cookbook pratique</a></td><td>Pour faire des Skills, MCP, Office, Zotero ou un LLM local</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
  <tbody>
    <tr><th scope="rowgroup" rowspan="4">Rechercher</th><td><a href="resources/README.md">Placard à ressources</a></td><td>Si vous ne savez pas si chercher dans un Guide, un Catalog ou un Cookbook</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="RESOURCES.md">Liste complète des ressources</a></td><td>Pour trouver docs officielles, cours, communautés et lectures complémentaires</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/cli-agents-guide.md">Guide de choix des CLI Agent</a></td><td>Pour préparer le Track A ou comparer des outils CLI</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/courses.md">Carte des cours et certifications</a></td><td>Pour distinguer certificats d'achèvement, badges de compétence et examens de certification</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
</table>

## 🤝 Améliorons cette carte ensemble

- Erreurs de contenu, liens morts ou informations obsolètes : ouvrez une [Issue](https://github.com/WenyuChiou/awesome-agentic-ai-zh/issues).
- Pour ajouter un projet ou une ressource d'apprentissage : précisez « quel Stage et quoi il enseigne ».
- Pour préparer une PR : lisez d'abord [CONTRIBUTING.md](CONTRIBUTING.md) et le [guide de style](resources/style-guide.md).
- Dernières mises à jour : consultez [CHANGELOG.md](CHANGELOG.md).

<details markdown="1">
<summary>🧰 Déplier : mode de contribution complet et vérifications automatiques</summary>

Vous pouvez corriger du texte, ajouter un miroir trilingue, signaler des sujets manquants, ou maintenir sur le long terme un Stage / un parcours de rôle. Lors de l'ajout d'un lien de projet GitHub, la vérification automatique aide à consulter l'état d'archivage, la licence et la dernière mise à jour ; l'inclusion reste jugée par le mainteneur selon la valeur d'apprentissage.

Le rôle complet et les règles sont dans [CONTRIBUTORS.md](CONTRIBUTORS.md).

</details>

## 🙏 Inspirations importantes et projets associés

- [**Datawhale Hello-Agents**](https://github.com/datawhalechina/hello-agents) — pour les lecteurs qui ont besoin de chapitres complets et d'une implémentation en profondeur.
- [**Communauté Datawhale**](https://github.com/datawhalechina) — communauté chinoise d'apprentissage mutuel en machine learning, proposant de nombreuses entrées d'apprentissage fiables.
- [**liyupi/ai-guide**](https://github.com/liyupi/ai-guide) — plutôt une bibliothèque de ressources larges ; ce dépôt gère l'ordre d'apprentissage.

<details markdown="1">
<summary>📖 Déplier : contributeurs et format de citation</summary>

[![Contributors](https://contrib.rocks/image?repo=WenyuChiou/awesome-agentic-ai-zh)](https://github.com/WenyuChiou/awesome-agentic-ai-zh/graphs/contributors)

```bibtex
@misc{awesome_agentic_ai_zh_2026,
  title = {awesome-agentic-ai-zh: A Structured Learning Roadmap for Agentic AI},
  author = {Chiou, Wenyu},
  year = {2026},
  url = {https://github.com/WenyuChiou/awesome-agentic-ai-zh}
}
```

</details>

## ☕ Soutien et contact

Cette feuille de route d'apprentissage est sous licence MIT et restera gratuite et publique. Pour les questions générales et suggestions, utilisez les Issues ; pour un contact privé, écrivez à [wenyuchiou12@gmail.com](mailto:wenyuchiou12@gmail.com).

Si cette carte vous aide, n'hésitez pas à mettre une ⭐ Star, ou [offrez un café à l'auteur](https://www.buymeacoffee.com/wenyuchiou).

## License

MIT. Maintained by [@WenyuChiou](https://github.com/WenyuChiou).
