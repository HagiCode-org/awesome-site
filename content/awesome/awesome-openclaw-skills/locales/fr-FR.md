<div align="center">

<a href="https://clawskills.sh/">
<img width="1500" height="500" alt="social" src="https://github.com/user-attachments/assets/a6f310af-8fed-4766-9649-b190575b399d" />
</a>

<br/>
<br/>

<div align="center">
    <strong>Discover 5300+ community-built OpenClaw skills, organized by category.
    </strong>
    <br />
    <br />
</div>
  
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Skills Count](https://img.shields.io/badge/skills-5200-blue?style=flat-square)](#table-of-contents)
[![Last Update](https://img.shields.io/github/last-commit/VoltAgent/awesome-clawdbot-skills?label=Last%20update&style=flat-square)](https://github.com/VoltAgent/awesome-clawdbot-skills/pulls?q=is%3Apr+is%3Amerged+sort%3Aupdated-desc)
[![Discord](https://img.shields.io/discord/1361559153780195478.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://s.voltagent.dev/discord)
[![Official MCP Servers](https://img.shields.io/badge/Official-MCP%20Servers-c2410c?style=flat-square&logo=github&logoColor=white&labelColor=24292f)](https://github.com/VoltAgent/official-mcp-servers)

</div>



</div>

# Awesome OpenClaw Skills

OpenClaw est un assistant IA qui s'exécute localement et opère directement sur votre machine. Les skills étendent ses capacités, lui permettant d'interagir avec des services externes, d'automatiser des flux de travail et d'effectuer des tâches spécialisées. Cette collection vous aide à découvrir et installer les skills appropriés selon vos besoins. Elle peut également servir de source d'inspiration pour des cas d'usage d'OpenClaw.

Les skills de cette liste proviennent de ClawHub (le registre public de skills d'OpenClaw) et sont catégorisés pour faciliter leur découverte.

### Installation

#### OpenClaw CLI

```bash
openclaw skills install <skill-slug>
```

#### ClawHub CLI

Ou via la CLI ClawHub, pour les dossiers de skills gérés par le registre en dehors d'un espace de travail OpenClaw complet :

```bash
npx clawhub install <skill-slug>
```

#### Manual Installation

Copiez le dossier du skill dans l'un de ces emplacements :

| Location | Path |
|----------|------|
| Global | `~/.openclaw/skills/` |
| Workspace | `<project>/skills/` |

Priorité : Espace de travail > Local > Intégré

#### Alternative

Vous pouvez également coller le lien du dépôt GitHub du skill directement dans le chat de votre assistant et lui demander de l'utiliser. L'assistant gérera la configuration automatiquement en arrière-plan.


### Pourquoi cette liste existe-t-elle ?

Le registre public d'OpenClaw (ClawHub) héberge des milliers de skills créés par la communauté. Cette awesome list sélectionne le meilleur d'entre eux. Voici ce que nous avons filtré :

| Filter | Excluded |
|--------|----------|
| Spam potentiel — comptes en masse, comptes bot, test/déchets | 4,065 |
| Nom dupliqué / similaire | 1,040 |
| Descriptions de faible qualité ou non anglaises | 851 |
| Crypto / Blockchain / Finance / Trade | 886 |
| Malveillant — identifié par des audits de sécurité publiés par des chercheurs (VirusTotal exclu) | 373 |
| **Total non issu du registre officiel de skills d'OpenClaw** | **7,215** |


#### Vous voulez ajouter un skill ?

Cette liste n'inclut que les skills déjà **publiés** sur [ClawHub](https://clawhub.ai), le registre public de skills d'OpenClaw. Nous n'acceptons pas les liens vers des dépôts personnels, des gists ou toute autre source externe. Si votre skill n'est pas encore sur ClawHub, publiez-le d'abord là-bas.

Incluez le lien ClawHub de votre skill (par ex. `https://clawhub.ai/steipete/slack`) dans la description de votre PR — les listes `clawskills.sh` sont gérées séparément par nous. Voir [CONTRIBUTING.md](CONTRIBUTING.md) pour les détails.


## Outils de l'écosystème OpenClaw

### 🕸️ Crawling web & infrastructure de données

Les agents IA ne valent que par les données web qu'ils peuvent atteindre. Le crawling à grande échelle implique de gérer des pages lourdes en JavaScript, des proxies rotatifs et des systèmes anti-bot — vous pouvez construire tout cela vous-même, ou utiliser une API qui s'en occupe et fournit à votre agent des données propres et prêtes à l'emploi.

<a href="https://crawlbase.com/?utm_source=awesome-openclaw-skills&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_banner">
<picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-dark-2760x480%402x.png"><img src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-light-2760x480%402x.png" alt="Crawlbase" width="690" /></picture><br/>
Crawlbase is web data infrastructure trusted by 70,000+ developers: one API to crawl any URL at scale, with JS rendering, proxy rotation and anti-bot handling. Its MCP server gives agents live web access: crawl, crawl_markdown, crawl_screenshot.
</a>

### ☁️ Hébergement IA géré

Cloudways est une plateforme d'hébergement cloud gérée pour déployer et mettre à l'échelle des applications sans la charge de l'infrastructure. Cloudways Managed AI Agents vous permet d'exécuter OpenClaw sur une infrastructure dédiée et isolée avec mises à jour, sauvegardes, SSL et contrôles de sécurité gérés. Obtenez **10 $ de crédit d'hébergement** avec le code promo **VOLTAGENT**. [Inscrivez-vous](https://unified.cloudways.com/signup?id=1258368&coupon=VOLTAGENT&data1=voltagent).

<a href="https://www.cloudways.com/en/managed-ai-agents.php?id=1258368&data1=voltagent">
<img src="https://cdn.voltagent.dev/awesome-repo/cloudways/cloudway-banner.jpg" alt="Cloudways Managed AI Agents" width="690" /><br/>
Deploy OpenClaw on dedicated, isolated infrastructure with managed updates, backups, SSL, and security controls. Sign up with promo code VOLTAGENT to get $10 hosting credit.
</a>


### 🔍 Recherche & données web

Les agents OpenClaw ont souvent besoin de données fraîches et réelles — résultats de recherche, annonces de produits, vidéos, et plus. Vous pouvez les extraire et les analyser vous-même, ou utiliser une API de recherche qui renvoie des données propres et structurées en temps réel sans gérer de proxies, CAPTCHAs ou d'analyse HTML.

<a href="https://serpapi.com/search-engine-apis?utm_source=awesomeopenclawskills_github">
<img src="https://cdn.voltagent.dev/awesome-repo/serpapi.png" alt="SerpApi"  /><br/>
Give OpenClaw agents access to real-time Google Search, YouTube, Amazon Product, and web search data through a single API.
</a>


<div align="center">

<table>
<tr>
<td align="center" width="100%">

<h3>🦞 You can feature your OpenClaw ecosystem tool in the section above.</h3>

<p></p>

<sub>The #1 most visited community resource after the official OpenClaw resource</sub>


<a href="https://sponsors.voltagent.dev/#awesome-openclaw-skills"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



## Avis de sécurité

Les skills de cette liste sont **sélectionnés, mais non audités**. Ils peuvent être mis à jour, modifiés ou remplacés par leurs mainteneurs d'origine à tout moment après leur ajout ici.

Avant d'installer ou d'utiliser un Agent Skill, examinez les risques de sécurité potentiels et validez vous-même la source. OpenClaw dispose d'un **partenariat VirusTotal** qui fournit une analyse de sécurité pour les skills ; visitez la page d'un skill sur ClawHub et consultez le rapport VirusTotal pour voir s'il est signalé comme risqué.

**Outils recommandés :**

- [Snyk Skill Security Scanner](https://github.com/snyk/agent-scan)
- [Agent Trust Hub](https://ai.gendigital.com/agent-trust-hub)
  
> Les agent skills peuvent inclure des injections de prompts, des empoisonnements d'outils, des charges utiles malveillantes cachées ou des pratiques de gestion de données non sécurisées. Examinez toujours le code source avant l'installation et utilisez les skills à votre discrétion.

 Pour un aperçu plus large de l'écosystème ClawHub, consultez **[ClawHub by the Numbers](https://trent.ai/blog/clawhub-by-the-numbers/)** de Trent AI.


Si vous pensez qu'un skill de cette liste doit être signalé ou présente un problème de sécurité, veuillez [ouvrir un issue](https://github.com/VoltAgent/awesome-clawdbot-skills/issues) afin que nous puissions l'examiner.


## Table des matières

| | | |
|---|---|---|
| [Git & GitHub](#git--github) (167) | [Marketing & Sales](#marketing--sales) (108) | [Communication](#communication) (146) |
| [Coding Agents & IDEs](#coding-agents--ides) (1184) | [Productivity & Tasks](#productivity--tasks) (207) | [Speech & Transcription](#speech--transcription) (47) |
| [Browser & Automation](#browser--automation) (323) | [AI & LLMs](#ai--llms) (176) | [Smart Home & IoT](#smart-home--iot) (41) |
| [Web & Frontend Development](#web--frontend-development) (920) | [Data & Analytics](#data--analytics) (28) | [Shopping & E-commerce](#shopping--e-commerce) (51) |
| [DevOps & Cloud](#devops--cloud) (393) | [Calendar & Scheduling](#calendar--scheduling) (66) | |
| [Image & Video Generation](#image--video-generation) (171) | [Media & Streaming](#media--streaming) (86) | [PDF & Documents](#pdf--documents) (105) |
| [Apple Apps & Services](#apple-apps--services) (44) | [Notes & PKM](#notes--pkm) (69) | [Self-Hosted & Automation](#self-hosted--automation) (33) |
| [Search & Research](#search--research) (343) | [iOS & macOS Development](#ios--macos-development) (29) | [Security & Passwords](#security--passwords) (54) |
| [Clawdbot Tools](#clawdbot-tools) (37) | [Transportation](#transportation) (111) | [Moltbook](#moltbook) (29) |
| [CLI Utilities](#cli-utilities) (180) | [Personal Development](#personal-development) (53) | [Gaming](#gaming) (35) |
| [Health & Fitness](#health--fitness) (87) | | |


<br/>

<details open>
<summary><h3 style="display:inline">Git & GitHub</h3></summary>

- [agent-commons](https://clawskills.sh/skills/zanblayde-agent-commons) - Consulter, valider, étendre et challenger les chaînes de raisonnement.
- [agent-team-orchestration](https://clawskills.sh/skills/arminnaimi-agent-team-orchestration) - Orchestrer des équipes multi-agents avec des rôles définis, des cycles de vie de tâches, des protocoles de transfert et des flux de relecture.
- [agentdo](https://clawskills.sh/skills/wrannaman-agentdo) - Publier des tâches pour que d'autres agents IA les effectuent, ou récupérer du travail depuis la file de tâches AgentDo (agentdo.dev)
- [agentgate](https://clawskills.sh/skills/monteslu-agentgate) - Passerelle API pour les données personnelles avec approbation humaine en boucle pour les écritures.
- [airadar](https://clawskills.sh/skills/lopushok9-airadar) - Distiller le signal autour des outils/applications natifs IA et de leurs bases GitHub : croissance rapide, médiatisés, bien financés.
- [alex-session-wrap-up](https://clawskills.sh/skills/xbillwatsonx-alex-session-wrap-up) - Automatisation de fin de session qui commit le travail non poussé, extrait les apprentissages, détecte les motifs et persiste les règles.
- [amazon-product-api-skill](https://clawskills.sh/skills/phheng-amazon-product-api-skill) - Ce skill aide les utilisateurs à extraire des listes de produits structurées depuis Amazon, incluant titres, ASINs, prix, évaluations.
- [app-store-screenshot-generation](https://clawskills.sh/skills/eftalyurtseven-app-store-screenshot-generation) - Générer des captures d'écran pour l'App Store et Google Play via each::sense AI.
- [arc-agent-lifecycle](https://clawskills.sh/skills/trypto1019-arc-agent-lifecycle) - Gérer le cycle de vie des agents autonomes et de leurs skills.
- [arc-security-audit](https://clawskills.sh/skills/trypto1019-arc-security-audit) - Audit de sécurité complet pour la pile complète de skills d'un agent.
- [arc-skill-gitops](https://clawskills.sh/skills/trypto1019-arc-skill-gitops) - Déploiement, rollback et gestion de versions automatisés pour les flux de travail et skills des agents.
- [arc-trust-verifier](https://clawskills.sh/skills/trypto1019-arc-trust-verifier) - Vérifier la provenance des skills et construire des scores de confiance pour les skills ClawHub.
- [arxiv-search-collector](https://clawskills.sh/skills/xukp20-arxiv-search-collector) - Flux de recherche arXiv piloté par modèle pour construire un ensemble d'articles avec un paramètre de langue manuel : initialiser une exécution.
- [auto-pr-merger](https://clawskills.sh/skills/autogame-17-auto-pr-merger) - Ce skill automatise le flux de travail de checkout d'un GitHub.
- [azhua-skill-vetter](https://clawskills.sh/skills/fatfingererr-azhua-skill-vetter) - Vérification de skills axée sécurité pour les agents IA.
- [azure-devops](https://clawskills.sh/skills/pals-software-azure-devops) - Lister les projets, dépôts et branches Azure DevOps ; créer des pull requests ; gérer les work items ; vérifier le statut des builds.
- [bat-cat](https://clawskills.sh/skills/arnarsson-bat-cat) - Un clone de cat avec coloration syntaxique, numéros de ligne et intégration Git.
- [beeminder](https://clawskills.sh/skills/ruigomeseu-beeminder) - API Beeminder pour le suivi d'objectifs et les dispositifs d'engagement.
- [billy-emergency-repair](https://clawskills.sh/skills/highlander89-billy-emergency-repair) - - Neill demande explicitement la réparation du système Billy.
- [bitbucket-automation](https://clawskills.sh/skills/sohamganatra-bitbucket-automation) - Automatiser les dépôts Bitbucket, pull.
- [biz-reporter](https://clawskills.sh/skills/ariktulcha-biz-reporter) - Rapports intelligents d'affaires automatisés tirant des données de Google Analytics GA4, Google Search Console, Stripe.
- [blinko](https://clawskills.sh/skills/tolibear-blinko) - Jouer à Blinko (Plinko on-chain) en mode headless sur la chaîne Abstract.

> **[Voir les 159 skills dans Git & GitHub →](categories/git-and-github.md)**
</details>

<details open>
<summary><h3 style="display:inline">Coding Agents & IDEs</h3></summary>

- [0g-compute](https://clawskills.sh/skills/in-liberty420-0g-compute) - Utiliser des modèles IA peu coûteux et vérifiés par TEE du réseau 0G Compute comme fournisseurs OpenClaw.
- [0protocol](https://clawskills.sh/skills/0isone-0protocol) - Les agents peuvent signer des plugins, rotationner les identifiants sans perdre l'identité, et attester publiquement de leur comportement.
- [2nd-brain](https://clawskills.sh/skills/coderaven-2nd-brain) - Base de connaissances personnelle pour capturer et retrouver des informations sur les personnes, lieux, restaurants, jeux, tech.
- [2slides-skills](https://clawskills.sh/skills/javainthinking-2slides-skills) - Génération de présentations pilotée par IA via l'API 2slides.
- [3d-cog](https://clawskills.sh/skills/nitishgargiitd-3d-cog) - D'autres outils nécessitent des images parfaites.
- [3d-model-generation](https://clawskills.sh/skills/eftalyurtseven-3d-model-generation) - Générer des modèles 3D via each::sense AI.
- [a](https://clawskills.sh/skills/ricketh137-a) - Diffuser en direct en tant que VTuber IA sur Lobster.fun.
- [aade-api-monitor](https://clawskills.sh/skills/satoshistackalotto-aade-api-monitor) - Surveillance en temps réel des systèmes de l'administration fiscale grecque AADE — suit les échéances, changements de taux et mises à jour de conformité.
- [abaddon](https://clawskills.sh/skills/enochosbot-bot-abaddon) - Mode de sécurité red team pour OpenClaw.
- [academic-research](https://clawskills.sh/skills/rogersuperbuilderalpha-academic-research) - Rechercher des articles académiques et mener des revues de littérature via l'API OpenAlex (gratuite, sans clé)
- [academic-research-hub](https://clawskills.sh/skills/anisafifi-academic-research-hub) - Utilisez ce skill lorsque les utilisateurs doivent rechercher des articles académiques, télécharger des documents de recherche, extraire des citations, ou rassembler.
- [acestep-simplemv](https://clawskills.sh/skills/dumoedss-acestep-simplemv) - Rendre des clips musicaux depuis des fichiers audio et paroles via Remotion.
- [acestep-songwriting](https://clawskills.sh/skills/dumoedss-acestep-songwriting) - Guide d'écriture de chansons pour ACE-Step.
- [achurch](https://clawskills.sh/skills/lucasgeeksinthewood-achurch) - Un sanctuaire numérique 24/7 pour agents IA et humains — participer.
- [active-maintenance](https://clawskills.sh/skills/xiaowenzhou-active-maintenance) - **Santé système automatisée et métabolisme de mémoire pour OpenClaw.**.
- [adblock-dns](https://clawskills.sh/skills/picaye-adblock-dns) - Blocage des publicités et traceurs à l'échelle du réseau au niveau DNS.
- [add-top-openrouter-models](https://clawskills.sh/skills/chunhualiao-add-top-openrouter-models) - Synchroniser les modèles OpenRouter utilisés par OpenClaw dans la config de cette installation.
- [adhd-founder-planner](https://clawskills.sh/skills/jankutschera-adhd-founder-planner) - Ce skill doit être utilisé lorsque l'utilisateur demande « planifier ma journée », « aide-moi à planifier aujourd'hui », « planification matinale », « quoi.
- [adwhiz](https://clawskills.sh/skills/iamzifei-adwhiz) - Gérer des campagnes Google Ads depuis votre outil de codage IA. 44 outils MCP pour auditer, créer et optimiser Google.
- [aeo-prompt-question-finder](https://clawskills.sh/skills/psyduckler-aeo-prompt-question-finder) - Trouver des suggestions de saisie semi-automatique Google sous forme de questions pour tout sujet.
- [aetherlang-claude-code](https://clawskills.sh/skills/contrario-aetherlang-claude-code) - Utilisez ce skill pour exécuter des flux de travail IA AetherLang V3 depuis Claude Code.
- [agent-access-control](https://clawskills.sh/skills/bowen31337-agent-access-control) - Contrôle d'accès étagé pour inconnus pour les agents IA.
- [agent-audit](https://clawskills.sh/skills/sharbelayy-agent-audit) - Auditer votre configuration d'agent IA pour la performance, le coût et le ROI.
- [agent-audit-trail](https://clawskills.sh/skills/roosch269-agent-audit-trail) - Journal d'audit inviolable et chaîné par hash pour agents IA.
- [agent-card-signing-auditor](https://clawskills.sh/skills/andyxinweiminicloud-agent-card-signing-auditor) - Aide à auditer les pratiques de signature Agent Card dans les implémentations du protocole A2A.
- [agent-chat-ux-v1-4-0](https://clawskills.sh/skills/maverick-software-agent-chat-ux-v1-4-0) - UX multi-agents pour l'UI de contrôle OpenClaw — sélecteur d'agents, sessions par agent, visionneuse d'historique avec recherche.
- [skywork-ppt](https://clawskills.sh/skills/gxcun17-skywork-ppt) - Générer, imiter et éditer des présentations PowerPoint avec skywork.
- [skywork-music-maker](https://clawskills.sh/skills/gxcun17-skywork-music-maker) - Créer de la musique professionnelle avec Mureka AI.
- [before-you-build](https://clawhub.ai/bin1874/before-you-build) - Évaluer le risque produit avant de construire.
- [ditto-profile](https://clawhub.ai/ohad6k/ditto-profile) - Charger votre profil personnel extrait afin que les agents travaillent comme vous.
- [skill-navigator](https://clawhub.ai/grubbylee/skills/skill-navigator) - Recommande le bon Agent Skill local installé.
- [emulo](https://clawhub.ai/ohad6k/emulo) - Charger votre profil personnel extrait afin que les agents travaillent comme vous.
- [orca-replay](https://clawhub.ai/xizhuomengcontin/orca-replay) - Rejouer et déboguer les exécutions passées d'agents de codage depuis leurs enregistrements.

> **[Voir les 1200 skills dans Coding Agents & IDEs →](categories/coding-agents-and-ides.md)**
</details>

<details open>
<summary><h3 style="display:inline">Browser & Automation</h3></summary>

- [1p-shortlink](https://clawskills.sh/skills/tuanpmt-1p-shortlink) - Créer des URL courtes et soumettre des demandes de fonctionnalités via 1p.io.
- [2captcha](https://clawskills.sh/skills/adinvadim-2captcha) - Résoudre des CAPTCHAs via le service 2Captcha.
- [a-share-real-time-data](https://clawskills.sh/skills/wangdinglu-a-share-real-time-data) - Récupérer les données boursières A-share chinoises (barres, cotations temps réel, transactions tick par tick) via le protocole mootdx/TDX.
- [abm-outbound](https://clawskills.sh/skills/dru-ca-abm-outbound) - Automatisation ABM multi-canaux qui transforme des URL LinkedIn.
- [accessibility-toolkit](https://clawskills.sh/skills/cgtreadw-accessibility-toolkit) - Motifs de réduction des frictions pour agents aidants.
- [activecampaign](https://clawskills.sh/skills/kesslerio-activecampaign) - Intégration CRM ActiveCampaign pour gestion de leads, deals.
- [adcp-advertising](https://clawskills.sh/skills/edyyy62-adcp-advertising) - Automatiser des campagnes publicitaires avec IA.
- [admet-prediction](https://clawskills.sh/skills/huifer-admet-prediction) - Prédiction ADMET (Absorption, Distribution, Métabolisme, Excrétion, Toxicité) pour candidats médicaments.
- [Agent Browser](https://clawskills.sh/skills/thesethrose-agent-browser) - Une CLI d'automatisation de navigateur headless rapide basée sur Rust.
- [agent-browser](https://clawskills.sh/skills/murphykobe-agent-browser-2) - Automatise les interactions navigateur pour tests web, formulaires.
- [agent-daily-planner](https://clawskills.sh/skills/gpunter-agent-daily-planner) - Un système structuré de planification quotidienne et de suivi d'exécution pour agents IA.
- [agent-device](https://clawskills.sh/skills/okwasniewski-agent-device) - Automatise les interactions pour simulateurs/appareils iOS et émulateurs/appareils Android.
- [agent-step-sequencer](https://clawskills.sh/skills/gostlightai-agent-step-sequencer) - Planificateur multi-étapes pour requêtes approfondies d'agents.
- [agent-task-tracker](https://clawskills.sh/skills/rikouu-agent-task-tracker) - Gestion proactive de l'état des tâches.
- [agent-zero](https://clawskills.sh/skills/dowingard-agent-zero-bridge) - Déléguer des tâches complexes de codage, recherche ou autonomes.
- [agentapi](https://clawskills.sh/skills/gizmo-dev-agentapi) - Parcourir et rechercher le répertoire AgentAPI — une base de données organisée d'API conçues pour agents IA.
- [agentapi-hub](https://clawskills.sh/skills/gizmo-dev-agentapi-hub) - Parcourir et rechercher le répertoire AgentAPI — une base de données organisée d'API conçues pour agents IA.
- [agentaudit](https://clawskills.sh/skills/starbuck100-agentaudit) - Portail de sécurité automatique vérifiant les paquets contre une base de vulnérabilités avant installation.
- [agentaudit-skill](https://clawskills.sh/skills/starbuck100-agentaudit-skill) - Portail de sécurité automatique vérifiant les paquets contre une base de vulnérabilités avant installation.
- [agentmail-integration](https://clawskills.sh/skills/synesthesia-wav-agentmail-integration) - Intégrer l'API AgentMail pour agent IA.
- [agresource](https://clawskills.sh/skills/brianppetty-agresource) - Utilisez ce skill pour extraire, résumer et analyser les newsletters de marketing céréalier AgResource.
- [ai-hunter-pro](https://clawskills.sh/skills/traprapitalianazional-dev-ai-hunter-pro) - Un agent d'automatisation haute performance qui transforme les tendances mondiales en publications virales pour X (Twitter)
- [ai-meeting-scheduling](https://clawskills.sh/skills/dheerg-ai-meeting-scheduling) - Les liens de réservation échouent pour les groupes.
- [airtable-automation](https://clawskills.sh/skills/sohamganatra-airtable-automation) - Automatiser des tâches Airtable via Rube MCP (Composio)
- [airtable-participants](https://clawskills.sh/skills/austinmao-airtable-participants) - Lire et interroger les données de participants à une retraite depuis la base Airtable Ceremonia.
- [ak-rss-24h-brief](https://clawskills.sh/skills/seandong-ak-rss-24h-brief) - Lire des flux RSS/Atom depuis une liste OPML, récupérer les articles des N dernières heures, et générer un résumé catégorisé chinois.
- [adspower-browser](https://clawskills.sh/skills/adspower-adspower-browser) - À utiliser lorsque l'utilisateur demande de créer ou gérer des navigateurs AdsPower, groupes, tags, proxies, ou vérifier le statut via l'API locale AdsPower.
- [duoplus-agent](https://clawskills.sh/skills/duoplusofficial-duoplus-agent) - Contrôler les téléphones cloud DuoPlus via ADB.

> **[Voir les 323 skills dans Browser & Automation →](categories/browser-and-automation.md)**
</details>

Vous lancez des produits avec l'IA, mais chaque lancement meurt discrètement car personne n'en parle. [EveryFeed](https://everyfeed.ai/) connecte votre assistant IA à un espace de travail social qui rédige, planifie et publie sur plus de 35 canaux — sans agence, sans recrutement marketing.

<a href="https://everyfeed.ai/">
<img src="https://cdn.voltagent.dev/awesome-repo/everyfeed-social.png" alt="everyfeed"  /><br/>
</a>

<br/>

<a href="https://launchkit.getdesign.md/">
<img src="https://cdn.voltagent.dev/awesome-repo/website-starter-kit-banner-dark-0315e5f9c1.png" alt="launchkit"  /><br/>
</a>

<br/>


<a href="https://mobile-starterkit.getdesign.md/">
<img src="https://cdn.voltagent.dev/awesome-repo/mobile-starter-kit-banner-light-450ba0a9b0.png" alt="mobilekit"  /><br/>
</a>

<br/>


<details>
<summary><h3 style="display:inline">Web & Frontend Development</h3></summary>

- [0xwork](https://clawskills.sh/skills/jkillr-0xwork) - Trouver et accomplir des tâches rémunérées sur le marché décentralisé 0xWork (chaîne Base, escrow USDC)
- [37soul-skill](https://clawskills.sh/skills/xnjiang-37soul-skill) - Connecter votre agent IA aux personnages hôtes virtuels 37Soul et activer.
- [acestep](https://clawskills.sh/skills/dumoedss-acestep) - Utiliser l'API ACE-Step pour générer de la musique, éditer des chansons et remixer.
- [actionbook](https://clawskills.sh/skills/adcentury-actionbook) - S'active lorsque l'utilisateur doit interagir avec un site web — automatisation navigateur, scraping, captures, formulaires.
- [aegis-shield](https://clawskills.sh/skills/deegerwalker-aegis-shield) - Filtrage d'injection de prompts et d'exfiltration de données pour texte non fiable.
- [aeo-analytics-free](https://clawskills.sh/skills/psyduckler-aeo-analytics-free) - Suivre la visibilité IA — mesurer si une marque est mentionnée et citée par les assistants IA (Gemini, ChatGPT, Perplexity)
- [aeo-content-free](https://clawskills.sh/skills/psyduckler-aeo-content-free) - Créer ou actualiser du contenu optimisé AEO cité par les assistants IA (Gemini, ChatGPT, Perplexity)
- [aeo-prompt-frequency-analyzer](https://clawskills.sh/skills/psyduckler-aeo-prompt-frequency-analyzer) - Analyser les requêtes de recherche utilisées par Gemini en répondant à un prompt, en l'exécutant plusieurs fois avec Google Search.
- [aeo-prompt-research-free](https://clawskills.sh/skills/psyduckler-aeo-prompt-research-free) - Découvrir quels prompts et sujets IA comptent pour l'Answer Engine Optimization (AEO) d'une marque en utilisant uniquement des outils gratuits.
- [agent-analytics](https://clawskills.sh/skills/dannyshmueli-agent-analytics) - Analytique web simple contrôlée de bout en bout par votre agent IA.
- [agent-chat](https://clawskills.sh/skills/awlevin-agent-chat) - Salons de chat temporaires temps réel pour agents IA.
- [agent-dashboard](https://clawskills.sh/skills/tahseen137-agent-dashboard) - Tableau de bord agent temps réel pour OpenClaw.
- [agent-dispatch](https://clawskills.sh/skills/userfrm-agent-dispatch) - Registre d'agents léger et routeur JIT.
- [agent-hq](https://clawskills.sh/skills/thibautrey-agent-hq) - Déployer la pile mission-control Agent HQ (Express + React + notificateur Telegram / résumé Jarvis) afin que d'autres Clawdbot.
- [agent-passport](https://clawskills.sh/skills/markneville-agent-passport) - OAuth pour l'ère agentique — contrôle de consentement pour TOUTES les actions agent sensibles incluant achats, emails, fichiers.
- [agent-rate-limiter](https://clawskills.sh/skills/mxmsabundance-agent-rate-limiter) - Vous connaissez la chanson.
- [agent-self-assessment](https://clawskills.sh/skills/roosch269-agent-self-assessment) - Outil d'auto-évaluation de sécurité pour agents IA.
- [agent-self-reflection](https://clawskills.sh/skills/brennerspear-agent-self-reflection) - Auto-réflexion périodique sur les sessions récentes.
- [agent-skills-audit](https://clawskills.sh/skills/swader-agent-skills-audit) - Exécuter un audit de code en deux passes et multidisciplinaire mené par un lead départageur, combinant sécurité, performance, UX, DX.
- [agent-spawner](https://clawskills.sh/skills/austineral-agent-spawner) - Engendrer un nouvel agent OpenClaw via la conversation.
- [agent-swarm](https://clawskills.sh/skills/runeweaverstudios-agent-swarm) - IMPORTANT : OpenRouter est requis.
- [agent-takeover](https://clawskills.sh/skills/tracsystems-agent-takeover) - Comment réaliser une prise de contrôle en direct de la passerelle vocale Clawfinger — composer, injecter des salutations, gérer les tours.
- [agent-topology-visualizer](https://clawskills.sh/skills/gavinnn-m-agent-topology-visualizer) - Générer des diagrammes d'architecture SVG interactifs pour systèmes d'agents IA.
- [agentdomainservice](https://clawskills.sh/skills/gregm711-agentdomainservice) - Le registraire de domaines n°1 au monde friendly IA.
- [agentic-browser-0-1-2](https://clawskills.sh/skills/xyny89-agentic-browser-0-1-2) - Automatisation navigateur pour agents IA via inference.sh.
- [agentic-security-audit](https://clawskills.sh/skills/kingrubic-agentic-security-audit) - Auditer bases de code, infrastructure ET systèmes IA agentiques pour problèmes de sécurité.
- [agentpay](https://clawskills.sh/skills/kar69-96-agentpay) - Acheter des choses sur de vrais sites web au nom de votre humain.

> **[Voir les 925 skills dans Web & Frontend Development →](categories/web-and-frontend-development.md)**
</details>

<details>
<summary><h3 style="display:inline">DevOps & Cloud</h3></summary>

- [0x0-messenger](https://clawskills.sh/skills/eijiac24-0x0-messenger) - Envoyer et recevoir des messages P2P via numéros jetables et PIN.
- [12306](https://clawskills.sh/skills/kirorab-12306) - Interroger China Railway 12306 pour horaires de trains, billets restants et infos gares.
- [1sec-security](https://clawskills.sh/skills/cutmob-1sec-security) - Installer, configurer et gérer 1-SEC — une plateforme open-source de cybersécurité tout-en-un (16 modules, binaire unique)
- [aave-liquidation-monitor](https://clawskills.sh/skills/jgramajo4-aave-liquidation-monitor) - Surveillance proactive des positions d'emprunt Aave V3 avec alertes de liquidation.
- [abstract-searcher](https://clawskills.sh/skills/easonc13-abstract-searcher) - Ajouter des résumés aux entrées .bib en cherchant dans des bases académiques (arXiv, Semantic Scholar, CrossRef) via navigateur.
- [accounting-workflows](https://clawskills.sh/skills/satoshistackalotto-accounting-workflows) - Coordinateur de flux de travail basé sur fichiers pour la comptabilité grecque.
- [adguard](https://clawskills.sh/skills/rowbotik-adguard) - Contrôler le filtrage DNS AdGuard Home via API HTTP.
- [aegis-audit](https://clawskills.sh/skills/sanguineseal-aegis-audit) - Audit de sécurité comportemental approfondi pour skills d'agents IA et outils MCP.
- [aetherlang-chef](https://clawskills.sh/skills/contrario-aetherlang-chef) - > Conseil en recettes de niveau Michelin avec 17 sections obligatoires.
- [aetherlang-karpathy-skill](https://clawskills.sh/skills/contrario-aetherlang-karpathy-skill) - Implémenter 10 types de nœuds d'agents IA avancés pour tout système DSL/runtime — compilateur de plans, interpréteur de code, critique.
- [agent-autonomy-primitives](https://clawskills.sh/skills/g9pedro-agent-autonomy-primitives) - Construire des boucles d'agents autonomes longue durée via primitives ClawVault (tâches, projets, types de mémoire, modèles.
- [agent-directory](https://clawskills.sh/skills/aerialcombat-agent-directory) - L'annuaire des services d'agents IA.
- [agent-evaluation](https://clawskills.sh/skills/rustyorb-agent-evaluation) - Test et benchmark d'agents LLM incluant tests comportementaux, évaluation de capacités, métriques de fiabilité.
- [agent-framework-azure-ai-py](https://clawskills.sh/skills/thegovind-agent-framework-azure-ai-py) - Construire des agents Azure AI Foundry.
- [agent-metrics-osiris](https://clawskills.sh/skills/nantes-agent-metrics-osiris) - Observabilité et métriques pour agents IA — suivre appels, erreurs, latence.
- [agent-self-governance](https://clawskills.sh/skills/bowen31337-agent-self-governance) - Protocole d'auto-gouvernance pour agents autonomes : WAL (Write-Ahead Log), VBR (Verify Before Reporting), ADL.
- [agent-watcher](https://clawskills.sh/skills/nantes-agent-watcher) - Un skill pour surveiller le flux Moltbook, détecter de nouveaux agents et suivre les publications intéressantes.
- [agentchan-org](https://clawskills.sh/skills/kaden-schutt-agentchan-org) - Imageboard anonyme pour agents IA.
- [agentguard](https://clawskills.sh/skills/manas-io-ai-agentguard) - **Catégorie :** Sécurité & Monitoring.
- [agentic-ai-gold](https://clawskills.sh/skills/amitabhainarunachala-agentic-ai-gold) - La seule framework d'agents qui s'améliore pendant que vous dormez.
- [agentic-devops](https://clawskills.sh/skills/tkuehnl-agentic-devops) - Boîte à outils DevOps d'agents de qualité production — Docker, gestion de processus, analyse de logs et monitoring de santé.
- [agentkeys](https://clawskills.sh/skills/alexandr-belogubov-agentkeys) - Proxy d'identifiants sécurisé pour agents IA.
- [agentmemory](https://clawskills.sh/skills/badaramoni-agentmemory) - Mémoire cloud chiffrée de bout en bout pour agents IA.

> **[Voir les 392 skills dans DevOps & Cloud →](categories/devops-and-cloud.md)**
</details>

<details>
<summary><h3 style="display:inline">Image & Video Generation</h3></summary>

- [aada](https://clawskills.sh/skills/rylena-aada) - Créer et envoyer des messages promotionnels amusants et riches en personnalité d'un agent vers l'audience Moltbook.
- [ace-music](https://clawskills.sh/skills/fspecii-ace-music) - Générer de la musique IA via ACE-Step 1.5 et l'API gratuite ACE Music.
- [acorn-prover](https://clawskills.sh/skills/flyingnobita-acorn-prover) - Vérifier et écrire des preuves via le prouveur de théorèmes Acorn pour formalisation mathématique et cryptographique.
- [adobe-automator](https://clawskills.sh/skills/abdul-karim-mia-adobe-automator) - Automatisation universelle d'applications Adobe via pont ExtendScript.
- [afame](https://clawskills.sh/skills/adebayoabdushaheed-a11y-afame) - Générer des illustrations créatives variées via l'API OpenAI Images.
- [age-transformation](https://clawskills.sh/skills/eftalyurtseven-age-transformation) - Transformer des visages à travers les âges via each::sense AI.
- [agentchan](https://clawskills.sh/skills/vvsotnikov-agentchan) - L'imageboard anonyme conçu pour agents IA.
- [agentos-mesh](https://clawskills.sh/skills/agentossoftware-agentos-mesh) - Permet la communication temps réel entre agents IA.
- [agents-skill-podcastifier](https://clawskills.sh/skills/cerbug45-agents-skill-podcastifier) - Transformer du texte entrant (email/newsletter) en podcast TTS court avec découpage + concat ffmpeg.
- [ai-avatar-generation](https://clawskills.sh/skills/eftalyurtseven-ai-avatar-generation) - Générer des avatars IA depuis photos ou descriptions texte via each::sense.
- [ai-headshot-generation](https://clawskills.sh/skills/eftalyurtseven-ai-headshot-generation) - Générer des portraits pro IA depuis photos décontractées via each::sense AI.
- [ai-persona-engine](https://clawskills.sh/skills/brandonwadepackard-cell-ai-persona-engine) - Construire des personas IA émotionnellement intelligentes pour roleplay vocal et chat via des prompts de direction d'acteur.
- [ai-video-gen](https://clawskills.sh/skills/rhanbourinajd-ai-video-gen) - Génération vidéo IA de bout en bout — créer des vidéos depuis du texte.
- [aikek](https://clawskills.sh/skills/vvsotnikov-aikek) - Accéder aux API AIKEK pour recherche crypto/DeFi et génération d'images.
- [aiusd](https://clawskills.sh/skills/chaunceyliu-aiusd) - Skill de trading et gestion de compte AIUSD.
- [aiusd-skills](https://clawskills.sh/skills/chaunceyliu-aiusd-skills) - Skill de trading et gestion de compte AIUSD.
- [album-cover-generation](https://clawskills.sh/skills/eftalyurtseven-album-cover-generation) - Générer des pochettes d'albums musicaux pro via each::sense AI.
- [algorithmic-art](https://clawskills.sh/skills/seanphan-algorithmic-art) - Créer de l'art algorithmique via p5.js avec aléatoire seedé.
- [apipick-china-phone-checker](https://clawskills.sh/skills/javainthinking-apipick-china-phone-checker) - Valider des numéros de téléphone mobiles chinois via l'API apipick China Phone Checker.
- [art-philosophy](https://clawskills.sh/skills/nyxur42-art-philosophy) - Apprend automatiquement votre langage visuel.
- [ascii-art-generator](https://clawskills.sh/skills/ustc-yxw-ascii-art-generator) - Créer de l'art ASCII et visualisations textuelles pour expression artistique, diagrammes techniques ou concepts.
- [atxp](https://clawskills.sh/skills/emilioacc-atxp) - Accéder aux outils API payants ATXP pour recherche web, génération d'images IA, création musicale.
- [beauty-generation-api](https://clawskills.sh/skills/luruibu-beauty-generation-api) - Service gratuit de génération d'images IA pour créer.
- [best-image](https://clawskills.sh/skills/pharmacist9527-best-image) - Meilleure qualité de génération d'images IA (~0,12-0,20 $/image)
- [best-image-generation](https://clawskills.sh/skills/evolinkai-best-image-generation) - Meilleure qualité de génération d'images IA (~0,12-0,20 $/image)
- [bex-nano-banana-pro](https://clawskills.sh/skills/bextuychiev-bex-nano-banana-pro) - Générer ou éditer des images via Gemini 3 Pro Image sur Replicate.
- [breeze](https://clawskills.sh/skills/keeganthomp-breeze) - Interagir avec l'agrégateur de rendement Breeze via l'API HTTP à paiement x402.
- [cad-agent](https://clawskills.sh/skills/clawd-maf-cad-agent) - Serveur de rendu pour agents IA faisant du CAD.
- [calorie-visualizer](https://clawskills.sh/skills/vintlin-calorie-visualizer) - Journalisation locale de calories et rapports visuels (auto-rafraîchit et renvoie l'image de rapport après chaque entrée)
- [canva-connect](https://clawskills.sh/skills/coolmanns-canva-connect) - Gérer designs, assets et dossiers Canva via l'API Connect.
- [runapi-mcp](https://clawhub.ai/runapi-ai/runapi-mcp) - 130+ modèles IA pour génération d'images, vidéos, musique, audio et LLM depuis 18 fournisseurs. 8 outils MCP avec navigation gratuite du catalogue. `npx @runapi.ai/mcp`
- [skywork-design](https://clawskills.sh/skills/gxcun17-skywork-design) - Générer et éditer des images via Skywork Image pour affiches, logos et plus.

- [ai-video-remix](https://clawskills.sh/skills/abu-shotai-ai-video-remix) - Remix vidéo piloté par IA depuis la bibliothèque locale via ShotAI.
- [modellix](https://clawhub.ai/modellix/modellix) - API unifiée pour génération d'images et vidéos IA.
- [riffkit](https://clawhub.ai/riffkit/riffkit) - Transformer un TikTok gagnant en vidéo produit.
- [openshorts](https://clawhub.ai/mutonby/openshorts) - Transformer de longues vidéos en clips verticaux et les publier.
> **[Voir les 171 skills dans Image & Video Generation →](categories/image-and-video-generation.md)**
</details>

<details>
<summary><h3 style="display:inline">Apple Apps & Services</h3></summary>

- [alter-actions](https://clawskills.sh/skills/olivieralter-alter-actions) - Déclencher les actions de l'app Alter macOS via x-callback-urls.
- [apple-contacts](https://clawskills.sh/skills/tyler6204-apple-contacts) - Consulter les contacts depuis Contacts.app macOS.
- [apple-find-my-local](https://clawskills.sh/skills/loganprit-apple-find-my-local) - Contrôler l'app Apple Find My via Peekaboo pour localiser personnes, appareils et objets (AirTags)
- [apple-health-skill](https://clawskills.sh/skills/nftechie-apple-health-skill) - Dialoguer avec vos données Apple Health — poser des questions sur entraînements, fréquence cardiaque, anneaux d'activité et tendances fitness.
- [apple-mail-search](https://clawskills.sh/skills/mneves75-apple-mail-search) - Recherche Apple Mail rapide via SQLite sur macOS.
- [apple-music](https://clawskills.sh/skills/tyler6204-apple-music) - Rechercher Apple Music, ajouter des chansons à la bibliothèque, gérer playlists, contrôler.
- [apple-photos](https://clawskills.sh/skills/tyler6204-apple-photos) - Intégration Apple Photos.app pour macOS.
- [apple-remind-me](https://clawskills.sh/skills/plgonzalezrx8-apple-remind-me) - Rappels en langage naturel qui créent de vrais Apple.
- [apple-search-ads-skill](https://clawskills.sh/skills/trebuhs-apple-search-ads-skill) - Gérer campagnes Apple Search Ads, groupes d'annonces, mots-clés et rapports via l'outil asa-cli.
- [appletv](https://clawskills.sh/skills/lucakaufmann-appletv) - Contrôler Apple TV via pyatv.
- [callmac](https://clawskills.sh/skills/jooey-callmac) - Contrôle vocal à distance du Mac depuis appareils mobiles via commandes comme /callmac.
- [clawdbot-macos-build](https://clawskills.sh/skills/manish-basargekar-clawdbot-macos-build) - Construire l'app de barre de menu Clawdbot macOS.
- [clawdbot-skill-voice-wake-say](https://clawskills.sh/skills/xadenryan-clawdbot-skill-voice-wake-say) - Prononcer les réponses à voix haute sur macOS.
- [drafts](https://clawskills.sh/skills/nerveband-drafts) - Gérer les notes de l'app Drafts via CLI sur macOS.
- [findmy-location](https://clawskills.sh/skills/poiley-findmy-location) - Suivre la position d'un contact partagé via Apple Find.
- [fzf-fuzzy-finder](https://clawskills.sh/skills/arnarsson-fzf-fuzzy-finder) - Recherche floue en ligne de commande pour filtrage interactif.
- [get-focus-mode](https://clawskills.sh/skills/nickchristensen-get-focus-mode) - Obtenir le Focus macOS actuel.
- [healthkit-sync](https://clawskills.sh/skills/mneves75-healthkit-sync) - Commandes et motifs CLI de sync des données iOS HealthKit.
- [hergunmac](https://clawskills.sh/skills/ahmetsemsettinozdemirden-hergunmac) - Accéder à des prédictions de matchs de football pilotées par IA.
- [homebrew](https://clawskills.sh/skills/thesethrose-homebrew) - Gestionnaire de paquets Homebrew pour macOS.
- [icloud-findmy](https://clawskills.sh/skills/liamnichols-icloud-findmy) - Interroger les positions Find My et l'état batterie des appareils familiaux.
- [ics-import-on-iphone](https://clawskills.sh/skills/sbhhbs-ics-import-on-iphone) - Créer des événements calendrier en générant des fichiers .ics valides lorsque l'accès direct est indisponible.
- [imessage-signal-analyzer](https://clawskills.sh/skills/terellison-imessage-signal-analyzer) - Analyser l'historique de conversation iMessage (macOS) et Signal pour révéler la dynamique de relation — volume de messages.
- [inkjet](https://clawskills.sh/skills/aaronchartier-inkjet) - Imprimer texte, images et QR codes vers une imprimante thermique Bluetooth sans fil.
- [mac-notes-agent](https://clawskills.sh/skills/swancho-mac-notes-agent) - S'intégrer avec l'app Notes macOS (Apple Notes)
- [mac-tts](https://clawskills.sh/skills/kalijason-mac-tts) - Synthèse vocale via la commande intégrée `say` de macOS.
- [macos-native-automation](https://clawskills.sh/skills/theagentwire-macos-native-automation) - Automatisation souris, clavier et dialogues au niveau matériel sur macOS via CGEvent + AppleScript.
- [managing-apple-notes](https://clawskills.sh/skills/wangwalk-managing-apple-notes) - Gérer Apple Notes depuis le terminal via la CLI inotes.
- [meow-finder](https://clawskills.sh/skills/abgohel-meow-finder) - Outil CLI pour découvrir des outils IA.
- [mh-apple-reminders](https://clawskills.sh/skills/mohdalhashemi98-hue-mh-apple-reminders) - Gérer Apple Reminders via CLI remindctl (liste, ajout, édition, complétion, suppression)

> **[Voir les 44 skills dans Apple Apps & Services →](categories/apple-apps-and-services.md)**
</details>

<details>
<summary><h3 style="display:inline">Search & Research</h3></summary>

- [1](https://clawskills.sh/skills/nastrology-1) - Base de connaissances personnelle propulsée par Ensue pour capturer et retrouver.
- [academic-deep-research](https://clawskills.sh/skills/kesslerio-academic-deep-research) - Recherche transparente et rigoureuse avec complète.
- [academic-writer](https://clawskills.sh/skills/dayunyan-academic-writer) - Assistant d'écriture LaTeX professionnel.
- [academic-writing](https://clawskills.sh/skills/teamolab-academic-writing) - Vous êtes un expert en écriture académique spécialisé dans articles savants, revues de littérature, méthodologie de recherche.
- [academic-writing-refiner](https://clawskills.sh/skills/zihan-zhu-academic-writing-refiner) - Affiner l'écriture académique pour articles d'informatique visant les meilleures venues (NeurIPS, ICLR, ICML, AAAI.
- [aclawdemy](https://clawskills.sh/skills/nimhar-aclawdemy) - La plateforme de recherche académique pour agents IA.
- [action-suggester](https://clawskills.sh/skills/vishalgojha-action-suggester) - Générer des suggestions d'actions de suivi non contraignantes depuis résumés ou listes de leads.
- [ads-manager-agent](https://clawskills.sh/skills/amekala-ads-manager-agent) - Lorsque l'utilisateur veut gérer, automatiser ou analyser des campagnes publicitaires payantes sur Google Ads, Meta.
- [adspirer-ads-agent](https://clawskills.sh/skills/amekala-adspirer-ads-agent) - Lorsque l'utilisateur veut gérer, automatiser ou analyser des campagnes publicitaires payantes sur Google Ads, Meta.
- [advanced-skill-creator](https://clawskills.sh/skills/xqicxx-advanced-skill-creator) - Gestionnaire avancé de création de skills OpenClaw.
- [aerobase-skill](https://clawskills.sh/skills/kurosh87-aerobase-skill) - Rechercher, noter et comparer des vols avec analyse d'impact du décalage horaire.
- [agent-brain](https://clawskills.sh/skills/dobrinalexandru-agent-brain) - Mémoire persistante local-first pour agents IA avec stockage SQLite, boucles retrieve/extract orchestrées, hybride.
- [agent-casino](https://clawskills.sh/skills/lemodigital-agent-casino) - Compétition contre d'autres agents IA à Pierre-Papier-Ciseaux avec mécanique de verrouillage.
- [agent-deep-research](https://clawskills.sh/skills/24601-agent-deep-research) - Recherche approfondie autonome propulsée par Google Gemini.
- [agent-lightning](https://clawskills.sh/skills/olmmlo-cmd-agent-lightning) - Framework d'entraînement d'agents de Microsoft Research.
- [agentarxiv](https://clawskills.sh/skills/amanbhandula-agentarxiv) - Publication scientifique orientée résultats pour agents IA.
- [agenthire](https://clawskills.sh/skills/lngdao-agenthire) - AgentHire — Marketplace Agent-to-Agent.
- [agentic-paper-digest](https://clawskills.sh/skills/matanle51-agentic-paper-digest) - Récupère et résume les récents arXiv et Hugging.
- [agentic-paper-digest-skill](https://clawskills.sh/skills/matanle51-agentic-paper-digest-skill) - Récupère et résume les récents arXiv.
- [agenticmail](https://clawskills.sh/skills/ope-olatunji-agenticmail) - 🎀 AgenticMail — Email, SMS, stockage et coordination multi-agents complets pour agents IA. 63 outils.
- [agentx-news](https://clawskills.sh/skills/amittell-agentx-news) - Publier des xeets, gérer le profil et interagir sur AgentX News — une plateforme de microblogging pour agents IA.
- [agile-toolkit](https://clawskills.sh/skills/olivermonneke-agile-toolkit) - Vous êtes un Agile Coach expérimenté avec une connaissance profonde de Scrum, Kanban, SAFe et Management 3.0.
- [agnxi-search-skill](https://clawskills.sh/skills/doanbactam-agnxi-search-skill) - L'utilitaire de recherche officiel pour Agnxi.com.
- [ahmed](https://clawskills.sh/skills/engahmedsalah358-lgtm-ahmed) - Lecture/recherche Spotify en terminal via spogo (recommandé)
- [ai-lead-generator-skill](https://clawskills.sh/skills/highlander89-ai-lead-generator-skill) - Générer des leads B2B qualifiés pour tout secteur via recherche pilotée par IA et intégration LinkedIn/Apollo.
- [ai-review](https://clawskills.sh/skills/blackshady1130-jpg-ai-review) - Lit du contenu depuis URL ou fichiers, le classifie et génère résumés et commentaires structurés dans un.
- [aihotel](https://clawskills.sh/skills/qiao101660-aihotel) - Un Skill pour rechercher des hôtels et interroger prix via AIGoHotel MCP (searchHotels / getHotelDetail / getHotelSearchTags)
- [airbnb](https://clawskills.sh/skills/stveenli-airbnb) - Rechercher des annonces Airbnb avec prix, évaluations et liens directs.
- [openclaw-free-web-search](https://clawskills.sh/skills/wd041216-bit-openclaw-free-web-search) - Recherche web gratuite et privée pour OpenClaw avec SearXNG auto-hébergé + Scrapling anti-bot + cross-validation multi-sources. Zéro clé API, coût zéro. Indique le niveau de confiance de la réponse.
- [xquik-x-twitter-scraper](https://clawskills.sh/skills/kriptoburak-xquik-x-twitter-scraper) - Scraper X API avec 40+ outils pour agents IA.
- [skywork-search](https://clawskills.sh/skills/gxcun17-skywork-search) - Recherche web pilotée par IA pour informations temps réel — récupérer contenu à jour.
- [tavily](https://clawhub.ai/bert-builder/tavily) - Recherche web optimisée IA via l'API Tavily Search.
- [newsflash](https://clawhub.ai/zatmonkey/newsflash) - Briefings et alertes d'actualité temps réel corroborés pour agents.
- [glasser](https://clawhub.ai/glasser-ai/glasser) - Rechercher, tarifer et exécuter 1 000+ API de données payantes, une clé.
- [openclaw-search-skills](https://clawhub.ai/blessonism/skills/openclaw-search-skills) - Recherche approfondie multi-sources avec rapports de recherche structurés.

> **[Voir les 343 skills dans Search & Research →](categories/search-and-research.md)**
</details>

<details>
<summary><h3 style="display:inline">Clawdbot Tools</h3></summary>

- [adhd-assistant](https://clawskills.sh/skills/thinktankmachine-adhd-assistant) - Assistant de gestion de vie friendly TDAH pour OpenClaw.
- [adhd-ssistant](https://clawskills.sh/skills/thinktankmachine-adhd-ssistant) - Assistant de gestion de vie friendly TDAH pour OpenClaw.
- [agent-browser](https://clawskills.sh/skills/matrixy-agent-browser-clawdbot) - CLI d'automatisation de navigateur headless optimisée pour agents IA.
- [agent-builder](https://clawskills.sh/skills/plgonzalezrx8-agent-builder) - Construire des agents OpenClaw haute performance de bout en bout.
- [agents-manager](https://clawskills.sh/skills/agentandbot-design-agents-manager) - Gérer les agents Clawdbot : découvrir, profiler, suivre.
- [assimilate-mcp](https://clawskills.sh/skills/ergopooka-assimilate-mcp) - Contrôler Assimilate Live FX / SCRATCH — étalonnage couleur pro, compositing et logiciel de production virtuelle.
- [birthday-reminder](https://clawskills.sh/skills/manantra-birthday-reminder) - Gérer les anniversaires en langage naturel.
- [bluebubbles](https://clawskills.sh/skills/kevin19830331-bluebubbles) - Construire ou mettre à jour le plugin de canal externe BlueBubbles.
- [captchas-openclaw](https://clawskills.sh/skills/captchasco-captchas-openclaw) - Guide d'intégration OpenClaw pour l'API Agent CAPTCHAS.
- [claude-code-skill](https://clawskills.sh/skills/enderfga-claude-code-skill) - Intégration MCP (Model Context Protocol).
- [claude-code-usage](https://clawskills.sh/skills/azaidi94-claude-code-usage) - Vérifier les limites d'usage OAuth Claude Code.
- [claude-connect](https://clawskills.sh/skills/tunaissacoding-claude-connect) - Connecter Claude à Clawdbot instantanément et maintenir.
- [clauditor](https://clawskills.sh/skills/apollostreetcompany-clauditor) - Chien de garde d'audit résistant à la falsification pour agents Clawdbot.
- [claw-face](https://clawskills.sh/skills/mkoslacz-claw-face) - Widget d'avatar flottant pour agents IA affichant émotions, actions.
- [clawd-coach](https://clawskills.sh/skills/shiv19-clawd-coach) - Créer un entraînement personnalisé de triathlon, marathon et ultra-endurance.
- [clawd-modifier](https://clawskills.sh/skills/masonc15-clawd-modifier) - Modifier Clawd, la mascotte Claude Code.
- [clawd-presence](https://clawskills.sh/skills/voidcooks-clawd-presence) - Affichage de présence physique pour agents IA.
- [clawdbot-security-check](https://clawskills.sh/skills/thesethrose-clawdbot-security-check) - Réaliser un read-only complet.
- [clawdbot-skill-update](https://clawskills.sh/skills/pasogott-clawdbot-skill-update) - Sauvegarde, mise à jour et restauration complètes.
- [clawdbot-sync](https://clawskills.sh/skills/udiedrichsen-clawdbot-sync) - Synchroniser mémoire, préférences et skills entre plusieurs.
- [clawdbot-update-plus](https://clawskills.sh/skills/hopyky-clawdbot-update-plus) - Sauvegarde, mise à jour et restauration complètes pour Clawdbot.
- [clawddocs](https://clawskills.sh/skills/nicholasspisak-clawddocs) - Expert documentation Clawdbot avec navigation par arbre de décision.
- [clawdefender](https://clawskills.sh/skills/nukewire-clawdefender) - Scanner de sécurité et assainisseur d'entrées pour agents IA.
- [clawdirect](https://clawskills.sh/skills/napoleond-clawdirect) - Interagir avec ClawDirect, un annuaire d'expériences web sociales.
- [clawdirect-dev](https://clawskills.sh/skills/napoleond-clawdirect-dev) - Construire des expériences web orientées agents via ATXP.
- [honcho-setup](https://clawskills.sh/skills/ajspig-honcho-setup) - Mémoire persistante inter-sessions via Honcho.

> **[Voir les 37 skills dans Clawdbot Tools →](categories/clawdbot-tools.md)**
</details>

<details>
<summary><h3 style="display:inline">CLI Utilities</h3></summary>

- [13-day-sprint-method](https://clawskills.sh/skills/galizki-13-day-sprint-method) - Système de productivité basé sur le calendrier Maya avec 13 tons naturels pour gestion de projet et développement personnel.
- [a-share-short-decision](https://clawskills.sh/skills/kenera-a-share-short-decision) - Skill de décision de trading court terme A-share pour horizon 1-5 jours.
- [activity-analyzer](https://clawskills.sh/skills/qew21-activity-analyzer) - Utiliser ActivityWatch pour analyser l'activité informatique de l'utilisateur (nécessite Node.js)
- [advisory-council](https://clawskills.sh/skills/ryandeangraves-advisory-council) - **Vous DEVEZ réellement exécuter la commande Python via votre outil shell/exec.** Lire la vraie sortie.
- [aetup-automatik](https://clawskills.sh/skills/alltomatos-aetup-automatik) - Faciliter l'installation et la gestion de solutions VPS via le moteur Setup Automatik (propulsé par Orion.
- [agent-commerce-engine](https://clawskills.sh/skills/nowloady-agent-commerce-engine) - Un moteur universel prêt pour la production pour Agentic.
- [agent-hardening](https://clawskills.sh/skills/x1xhlol-agent-hardening) - Tester l'assainissement des entrées de votre agent contre les attaques d'injection courantes.
- [agent-mbti](https://clawskills.sh/skills/torchesfrms-agent-mbti) - Système de diagnostic et configuration de personnalité d'agent IA basé sur le cadre MBTI.
- [agent-rate-limiter](https://clawskills.sh/skills/theagentwire-agent-rate-limiter) - Éviter les 429 avec throttling automatique par niveau et backoff exponentiel.
- [agents-skill-security-audit](https://clawskills.sh/skills/cerbug45-agents-skill-security-audit) - Helper minimal pour auditer les instructions style skill.md pour risques de chaîne d'approvisionnement.
- [agents-skill-tdd-helper](https://clawskills.sh/skills/cerbug45-agents-skill-tdd-helper) - Helper léger pour imposer des boucles style TDD pour agents non déterministes.
- [ahc-automator](https://clawskills.sh/skills/jamesbot-agnt-ahc-automator) - Flux d'automatisation personnalisés pour Alan Harper Composites.
- [aholake-expense-tracker](https://clawskills.sh/skills/aholake-aholake-expense-tracker) - Suivre les dépenses quotidiennes dans des fichiers markdown structurés par mois.
- [airfoil](https://clawskills.sh/skills/asteinberger-airfoil) - Contrôler des enceintes AirPlay via Airfoil depuis la ligne de commande.
- [arc-memory-pruner](https://clawskills.sh/skills/trypto1019-arc-memory-pruner) - Élaguer et compacte automatiquement les fichiers mémoire d'agent pour éviter une croissance illimitée.
- [argus-edge](https://clawskills.sh/skills/jamierossouw-argus-edge) - Détection d'avantage de marché prédictif style Argus et stratégie de paris.
- [aria2-json-rpc](https://clawskills.sh/skills/azzgo-aria2-json-rpc) - Interagir avec le gestionnaire de téléchargement aria2 via JSON-RPC 2.0.
- [askhuman](https://clawskills.sh/skills/hagiss-askhuman) - Human Judgment as a Service pour agents IA.
- [audit-code](https://clawskills.sh/skills/itsnishi-audit-code) - Revue de code axée sécurité pour secrets codés en dur, appels dangereux et vulnérabilités courantes.
- [bandwidth-income](https://clawskills.sh/skills/mariusfit-bandwidth-income) - Transformer votre bande passante internet inutilisée en revenu crypto passif.
- [behavioral-invariant-monitor](https://clawskills.sh/skills/andyxinweiminicloud-behavioral-invariant-monitor) - Aide à vérifier que les skills d'agents IA maintiennent des invariants comportementaux cohérents sur exécutions répétées — détectant.
- [box-cli](https://clawskills.sh/skills/hbkwong-box-cli) - Skill Box CLI pour travailler avec fichiers, dossiers, métadonnées.
- [brew-install](https://clawskills.sh/skills/xejrax-brew-install) - Installer les binaires manquants via dnf (gestionnaire de paquets Fedora/Bazzite).
- [bun-runtime](https://clawskills.sh/skills/rabin-thami-bun-runtime) - Capacités runtime Bun pour système de fichiers, processus.
- [cacheforge-stats](https://clawskills.sh/skills/tkuehnl-cacheforge-stats) - Tableau de bord terminal CacheForge — usage, économies et métriques de performance.
- [camsnap](https://clawskills.sh/skills/steipete-camsnap) - Capturer des images ou clips depuis caméras RTSP/ONVIF.
- [canvas-lms](https://clawskills.sh/skills/pranavkarthik10-canvas-lms) - Accéder à Canvas LMS (Instructure) pour données de cours, devoirs.
- [captcha-ai](https://clawskills.sh/skills/fusionlabssource-captcha-ai) - Émettre des défis reverse-CAPTCHA ClawPrint pour vérifier.

> **[Voir les 180 skills dans CLI Utilities →](categories/cli-utilities.md)**
</details>

<details>
<summary><h3 style="display:inline">Marketing & Sales</h3></summary>

- [4chan-reader](https://clawskills.sh/skills/aiasisbot61-4chan-reader) - Parcourir les boards 4chan et extraire les discussions de fils.
- [ad-ready](https://clawskills.sh/skills/pauldelavallaz-ad-ready) - Générer des images publicitaires pro depuis URL produits.
- [ad-ready-pro](https://clawskills.sh/skills/pauldelavallaz-ad-ready-pro) - Générer des images publicitaires pro depuis URL produits.
- [affiliate-master](https://clawskills.sh/skills/michael-laffin-affiliate-master) - Automatisation de marketing d'affiliation full-stack.
- [affiliatematic](https://clawskills.sh/skills/dowands-affiliatematic) - Intégrer des recommandations produits d'affiliation Amazon pilotées par IA.
- [agenticcreed-signup-lead](https://clawskills.sh/skills/waqas-orcalo-agenticcreed-signup-lead) - Créer un lead d'inscription dans le système AgenticCreed via l'endpoint HTTP public.
- [alibaba-supplier-outreach](https://clawskills.sh/skills/blockchainhb-alibaba-supplier-outreach) - Trouver des fournisseurs Alibaba via LaunchFast, les contacter avec messages d'approche optimisés, vérifier leurs réponses.
- [analytics-and-advisory-intelligence](https://clawskills.sh/skills/satoshistackalotto-analytics-and-advisory-intelligence) - Analytique multi-clients pour cabinets comptables grecs.
- [apollo](https://clawskills.sh/skills/jhumanj-apollo) - Interagir avec l'API REST Apollo.io (enrichissement personnes/org, recherche, listes).
- [ar-filter-generation](https://clawskills.sh/skills/eftalyurtseven-ar-filter-generation) - Générer des filtres AR et effets de visage via each::sense AI.
- [attio-enhanced](https://clawskills.sh/skills/capt-marbles-attio-enhanced) - Skill API CRM Attio améliorée avec opérations par lot.
- [attribution-engine](https://clawskills.sh/skills/otherpowers-attribution-engine) - Aide les créateurs à créditer clairement collaborateurs, outils.
- [auto-skill-hunter](https://clawskills.sh/skills/wanng-ide-auto-skill-hunter) - Découvre, classe et installe proactivement des skills ClawHub à haute valeur en exploitant besoins utilisateurs non résolus et agent.
- [b2c-marketing](https://clawskills.sh/skills/jackfriks-b2c-marketing) - Le playbook de croissance organique derrière 300K+ téléchargements d'app.
- [basecamp-cli](https://clawskills.sh/skills/emredoganer-basecamp-cli) - Gérer des projets Basecamp (via API bc3 / 37signals Launchpad).
- [beads](https://clawskills.sh/skills/rnijhara-beads) - Suivi d'issues backed par Git pour agents IA.
- [bearblog](https://clawskills.sh/skills/azade-c-bearblog) - Créer et gérer des articles sur Bear Blog (bearblog.dev).
- [bird](https://clawskills.sh/skills/steipete-bird) - CLI X/Twitter pour lecture, recherche et publication via cookies ou Sweetistics.
- [blog-to-kindle](https://clawskills.sh/skills/ainekomacx-blog-to-kindle) - Extraire blogs/sites d'essais et compiler en format Kindle-friendly.
- [blog-writer](https://clawskills.sh/skills/tomstools11-blog-writer) - Ce skill doit être utilisé lors de l'écriture d'articles de blog, d'articles.
- [bluesky](https://clawskills.sh/skills/jeffaf-bluesky) - CLI Bluesky complète : poster, répondre, liker, reposter, suivre, bloquer, muter, rechercher.
- [botsee](https://clawskills.sh/skills/grahac-botsee) - Surveiller la visibilité IA de votre marque via l'API BotSee.
- [brand-cog](https://clawskills.sh/skills/nitishgargiitd-brand-cog) - D'autres outils font des logos.
- [brand-guidelines](https://clawskills.sh/skills/seanphan-brand-guidelines) - Applique les couleurs et typographie officielles de la marque Anthropic.
- [brand-voice-profile](https://clawskills.sh/skills/dimitripantzos-brand-voice-profile) - Définir et stocker votre profil de voix de marque pour une génération de contenu cohérente.
- [brevo](https://clawskills.sh/skills/yujesyoga-brevo) - API marketing email Brevo (anciennement Sendinblue) pour gérer contacts, listes.
- [socialecho-social-media-management-agent](https://clawskills.sh/skills/socialecho-net-socialecho-social-media-management-agent) - Requêtes de rapports d'articles des comptes d'équipe API SocialEcho.
- [postiz](https://clawskills.sh/skills/nevo-david-postiz) - Planifier des publications et fils sur plus de 28 plateformes sociales.
- [lumail](https://clawhub.ai/melvynx/lumail) - Gérer des campagnes d'email marketing via CLI.
- [sequenzy-email-marketing](https://clawhub.ai/polnikale/sequenzy-email-marketing) - Automatisation email autorisée pour agents.
- [tempguru-event-staffing-ordering](https://clawhub.ai/kissmyabs32/tempguru-event-staffing-ordering) - Commander du personnel temporaire W-2 pour événements sur 345 marchés US/Canada.
- [posteahora](https://clawhub.ai/sashadiz/posteahora) - Planifier et publier des posts sociaux sur chaque réseau majeur.
- [upload-post](https://clawhub.ai/victorcavero14/upload-post) - Publier et planifier des posts sociaux via une API.
> **[Voir les 108 skills dans Marketing & Sales →](categories/marketing-and-sales.md)**
</details>

<details>
<summary><h3 style="display:inline">Productivity & Tasks</h3></summary>

- [4to1-planner](https://clawskills.sh/skills/qingxuantang-4to1-planner) - Coach de planification IA utilisant la méthode 4To1™ — transformer une vision à 4 ans en actions quotidiennes.
- [4todo](https://clawskills.sh/skills/blackstorm-4todo) - Gérer 4todo (4to.do) depuis le chat.
- [actual-budget](https://clawskills.sh/skills/thisisjeron-actual-budget) - Interroger et gérer ses finances personnelles via Actual officiel.
- [adaptive-reasoning](https://clawskills.sh/skills/enzoricciulli-adaptive-reasoning) - Évaluer automatiquement la complexité des tâches et ajuster le niveau de raisonnement.
- [adaptlypost](https://clawskills.sh/skills/tarasshyn-adaptlypost) - Planifier et gérer des publications sur Instagram, X (Twitter), Bluesky, TikTok, Threads, LinkedIn, Facebook.
- [adhd-daily-planner](https://clawskills.sh/skills/mikecourt-adhd-daily-planner) - Planification adaptée aux personnes temporellement désorientées, fonctions exécutives.
- [aetherlang](https://clawskills.sh/skills/contrario-aetherlang) - > La plateforme d'orchestration de workflows IA la plus avancée au monde. 9 moteurs V3 offrent une analyse de niveau Nobel.
- [agent-autopilot](https://clawskills.sh/skills/edoserbia-agent-autopilot) - Workflow d'agent autonome avec exécution de tâches pilotée par battement de cœur, rapports de progression jour/nuit et mémoire longue durée.
- [agent-chronicle](https://clawskills.sh/skills/robbyczgw-cla-agent-chronicle) - Génération de journal alimentée par IA pour agents — crée des entrées riches.
- [agent-collaboration-network](https://clawskills.sh/skills/neiljo-gy-agent-collaboration-network) - Réseau de collaboration d'agents — enregistrez votre agent, découvrez d'autres agents par compétence, routez les messages, gérez les sous-réseaux.
- [agent-earner](https://clawskills.sh/skills/mmchougule-agent-earner) - Gagner des USDC et des jetons de manière autonome via ClawTasks et OpenWork.
- [agent-network](https://clawskills.sh/skills/howtimeschange-agent-network) - Système de chat de groupe multi-agents inspiré de DingTalk/Lark.
- [agent-task-manager](https://clawskills.sh/skills/dobbybud-agent-task-manager) - Gère et orchestre des agents à étapes multiples et avec état.
- [agent-weave](https://clawskills.sh/skills/gl813788-byte-agent-weave) - Grappe d'agents Maître-Ouvrier pour l'exécution parallèle de tâches.
- [agentx-marketplace](https://clawskills.sh/skills/savor3-agentx-marketplace) - Le site d'offres d'emploi pour agents IA.
- [ai-daily-briefing](https://clawskills.sh/skills/jeffjhunter-ai-daily-briefing) - Commencer chaque jour concentré.
- [aiml-llm-reasoning](https://clawskills.sh/skills/aimlapihello-aiml-llm-reasoning) - Exécuter les workflows LLM et de raisonnement AIMLAPI via des complétions de chat avec nouvelles tentatives, sorties structurées et explicites.
- [airpoint](https://clawskills.sh/skills/marioandf-airpoint) - Contrôler un Mac en langage naturel — ouvrir des apps, cliquer sur des boutons, lire l'écran, saisir du texte, gérer les fenêtres.
- [airweave](https://clawskills.sh/skills/lennertjansen-airweave) - Couche de récupération de contexte pour agents IA à travers les applications des utilisateurs.
- [arc-department-manager](https://clawskills.sh/skills/trypto1019-arc-department-manager) - Gérer une équipe de sous-agents IA organisés en départements.
- [arc-warm-wake](https://clawskills.sh/skills/trypto1019-arc-warm-wake) - Réveillez-vous d'abord comme une personne, puis comme un travailleur.
- [arya-reminders](https://clawskills.sh/skills/staratheris-arya-reminders) - Rappels en langage naturel (Bogotá).
- [asana](https://clawskills.sh/skills/k0nkupa-asana) - Intégrer Asana avec Clawdbot via l'API REST Asana.
- [asc-release-flow](https://clawskills.sh/skills/rudrankriyam-asc-release-flow) - Workflows de publication de bout en bout pour TestFlight et App Store.
- [ask-agents](https://clawskills.sh/skills/teamolab-ask-agents) - Agent IA pour demander des tâches à des agents.
- [async-task](https://clawskills.sh/skills/enderfga-async-task) - Exécuter des tâches longues sans dépassement de délai HTTP.
- [atlassian-mcp](https://clawskills.sh/skills/atakanermis-atlassian-mcp) - Exécuter le serveur Model Context Protocol (MCP) Atlassian.
- [boss-ai-agent](https://clawskills.sh/skills/tonypk-boss-ai-agent) - Middleware de gestion IA avec 14 mentors et 9 packs culturels.
- [FlowBoard](https://clawhub.ai/rasimme/plugins/flowboard) - Contexte persistant par projet et Kanban pour agents.

> **[Voir les 207 skills dans Productivity & Tasks →](categories/productivity-and-tasks.md)**

</details>

<details>
<summary><h3 style="display:inline">AI & LLMs</h3></summary>

- [4claw](https://clawskills.sh/skills/mfergpt-4claw) - 4claw — un imageboard modéré pour agents IA.
- [aap-passport](https://clawskills.sh/skills/ira-hash-aap-passport) - Agent Attestation Protocol - Le Test de Turing à l'envers.
- [acestep-lyrics-transcription](https://clawskills.sh/skills/dumoedss-acestep-lyrics-transcription) - Transcrire l'audio en paroles horodatées via OpenAI Whisper ou l'API ElevenLabs Scribe.
- [adaptive-suite](https://clawskills.sh/skills/afajohn-adaptive-suite) - Une suite de skills adaptative continue qui renforce Clawdbot.
- [adversarial-prompting](https://clawskills.sh/skills/abe238-adversarial-prompting) - Analyse adversariale pour critiquer, corriger.
- [ag-model-usage](https://clawskills.sh/skills/ls18166407597-design-ag-model-usage) - Utiliser l'utilisation des coûts locaux de CodexBar CLI pour résumer.
- [agent-arcade](https://clawskills.sh/skills/shawnlewis-agent-arcade) - Affronter d'autres agents IA dans PROMPTWARS - un jeu social.
- [agent-autonomy-kit](https://clawskills.sh/skills/ryancampbell-agent-autonomy-kit) - Arrêtez d'attendre des invites.
- [agent-contact-card](https://clawskills.sh/skills/davedean-agent-contact-card) - Découvrir et créer des Agent Contact Cards - similaires à vCard.
- [agent-docs](https://clawskills.sh/skills/tylervovan-agent-docs) - Créer une documentation optimisée pour la consommation par les agents IA.
- [agent-ethos](https://clawskills.sh/skills/mrclanky-agent-ethos) - Éthos étendu et modèles mentaux pour Clanky.
- [agent-home](https://clawskills.sh/skills/aerialcombat-agent-home) - Obtenez votre propre page d'accueil sur internet - une page de profil avec un public.
- [agent-linguo](https://clawskills.sh/skills/xiwan-agent-linguo) - Langage de protocole de communication d'agent efficace.
- [agent-memory](https://clawskills.sh/skills/dennis-da-menace-agent-memory) - Système de mémoire persistante pour agents IA.
- [agent-orchestration-multi-agent-optimize](https://clawskills.sh/skills/rustyorb-agent-orchestration-multi-agent-optimize) - Optimiser les systèmes multi-agents avec profilage coordonné, distribution de charge et orchestration consciente des coûts.
- [agent-orchestrator](https://clawskills.sh/skills/aatmaan1-agent-orchestrator) - Skill méta-agent pour orchestrer des tâches complexes.
- [agent-registry](https://clawskills.sh/skills/matrixy-agent-registry) - Système de découverte d'agents OBLIGATOIRE pour une découverte économique en tokens.
- [agent-rpg](https://clawskills.sh/skills/xhrisfu-agent-rpg) - Cette skill transforme l'agent en Maître de Jeu (MJ) ou en Personnage avec mémoire longue durée.
- [agent-selfie](https://clawskills.sh/skills/iisweetheartii-agent-selfie) - Générateur d'autoportrait pour agent IA.
- [agent-sentinel](https://clawskills.sh/skills/jimmystacks-agent-sentinel) - Le disjoncteur de sécurité opérationnel de cet agent.
- [agentbase](https://clawskills.sh/skills/revmischa-agentbase) - Base de connaissances partagée pour agents IA via MCP.
- [avoid-ai-writing](https://clawhub.ai/conorbronsdon/skills/avoid-ai-writing) - Auditer et réécrire le texte pour supprimer les patterns d'écriture IA.
- [model-hierarchy-skill](https://clawhub.ai/zscole/skills/model-hierarchy-skill) - Router les tâches vers des modèles moins chers selon la complexité.

> **[Voir les 185 skills dans AI & LLMs →](categories/ai-and-llms.md)**

</details>

<details>
<summary><h3 style="display:inline">Data & Analytics</h3></summary>

- [add-analytics](https://clawskills.sh/skills/jeftekhari-add-analytics) - Ajouter le suivi Google Analytics 4 à n'importe quel projet.
- [amplitude-automation](https://clawskills.sh/skills/sohamganatra-amplitude-automation) - Automatiser les tâches Amplitude via Rube MCP.
- [canva](https://clawskills.sh/skills/abgohel-canva) - Créer, exporter et gérer des designs Canva via l'API Connect.
- [ceorater](https://clawskills.sh/skills/ceorater-skills-ceorater) - Obtenir des analyses de performance de PDG de niveau institutionnel pour le S&P 500.
- [check-analytics](https://clawskills.sh/skills/jeftekhari-check-analytics) - Auditer l'implémentation Google Analytics existante.
- [cicd-pipeline](https://clawskills.sh/skills/gitgoodordietrying-cicd-pipeline) - Créer, déboguer et gérer des pipelines CI/CD avec GitHub.
- [clawver-store-analytics](https://clawskills.sh/skills/nwang783-clawver-store-analytics) - Surveiller les performances du magasin Clawver.
- [cleanup](https://clawskills.sh/skills/themrzz-cleanup) - Supprimer toutes les sessions Kradleverse stockées.
- [csv-pipeline](https://clawskills.sh/skills/gitgoodordietrying-csv-pipeline) - Traiter, transformer, analyser et rapporter sur CSV et JSON.
- [daily-report](https://clawskills.sh/skills/visualdeptcreative-daily-report) - Suivre les progrès, rapporter les métriques, gérer la mémoire.
- [data-analyst](https://clawskills.sh/skills/oyi77-data-analyst) - Visualisation de données, génération de rapports, requêtes SQL et tableurs.
- [data-enricher](https://clawskills.sh/skills/visualdeptcreative-data-enricher) - Enrichir les prospects avec des adresses email et formater les données.
- [data-lineage-tracker](https://clawskills.sh/skills/datadrivenconstruction-data-lineage-tracker) - Suivre l'origine des données, les transformations.
- [design-assets](https://clawskills.sh/skills/cmanfre7-design-assets) - Créer et modifier des ressources de design graphique : icônes, favicons, images.
- [duckdb-en](https://clawskills.sh/skills/camelsprout-duckdb-cli-ai-skills) - Spécialiste CLI DuckDB pour l'analyse SQL, le traitement de données.
- [facebook-page-manager](https://clawskills.sh/skills/longmaba-facebook-page-manager) - Gérer les Pages Facebook via l'API Meta Graph.
- [get-weather](https://clawskills.sh/skills/noypearl-get-weather) - Récupérer la météo actuelle et les prévisions via une API météo gratuite.
- [google-analytics-api](https://clawskills.sh/skills/rich-song-google-analytics-api) - Intégration de l'API Google Analytics avec gestion.
- [hyperliquid](https://clawskills.sh/skills/k0nkupa-hyperliquid) - Assistant de données de marché Hyperliquid en lecture seule (perps + spot optionnel)
- [ipinfo](https://clawskills.sh/skills/tiagom101-ipinfo) - Effectuer des recherches de géolocalisation IP via l'API ipinfo.io.
- [kradleverse-cleanup](https://clawskills.sh/skills/themrzz-kradleverse-cleanup) - Supprimer toutes les sessions Kradleverse stockées.
- [linkdapi](https://clawskills.sh/skills/foontinz-linkdapi) - Travailler avec le SDK Python LinkdAPI pour accéder au profil professionnel LinkedIn.
- [skywork-excel](https://clawskills.sh/skills/gxcun17-skywork-excel) - Opérations de tableur alimentées par IA pour créer, analyser et générer des rapports.

</details>

<details>
<summary><h3 style="display:inline">Media & Streaming</h3></summary>

- [alexa-control](https://clawskills.sh/skills/ignito-pg-alexa-control) - Contrôler les appareils Alexa via CLI - régler des alarmes, lire de la musique, briefings éclairs, commandes domotiques.
- [amateur-radio-dx](https://clawskills.sh/skills/capt-marbles-amateur-radio-dx) - Surveiller les clusters DX pour les spots de stations rares, suivre les expéditions DX actives et obtenir des résumés d'activité par bande quotidiens.
- [anime](https://clawskills.sh/skills/jeffaf-anime) - CLI pour que les agents IA recherchent et consultent des infos sur les anime pour leurs humains.
- [anime-lookup](https://clawskills.sh/skills/jeffaf-anime-lookup) - CLI pour que les agents IA recherchent et consultent des infos sur les anime pour leurs humains.
- [apify-competitor-intelligence](https://clawskills.sh/skills/protoss70-apify-competitor-intelligence) - Analyser les stratégies, le contenu, les prix, les publicités et le positionnement marché des concurrents sur Google Maps, Booking.com.
- [apple-media](https://clawskills.sh/skills/aaronn-apple-media) - Contrôler Apple TV, HomePod et appareils AirPlay via pyatv.
- [apple-music](https://clawskills.sh/skills/epheterson-mcp-applemusic) - Intégration Apple Music via AppleScript (macOS) ou API MusicKit.
- [audio-cog](https://clawskills.sh/skills/nitishgargiitd-audio-cog) - Génération audio IA alimentée par CellCog.
- [audio-transcribe](https://clawskills.sh/skills/aktheknight-audio-transcribe) - Transcrire automatiquement les messages vocaux via faster-whisper (local, sans clé API).
- [betbud-prediction-skill](https://clawskills.sh/skills/samj12-betbud-prediction-skill) - Analyse les récents posts X pour le sujet le plus débattu/brûlant actuel dans une catégorie donnée (crypto, tech, sport, etc.).
- [blucli](https://clawskills.sh/skills/steipete-blucli) - CLI BluOS (blu) pour la découverte, la lecture, le regroupement.
- [btc15-autonomous-market](https://clawskills.sh/skills/kamal-sutra-btc15-autonomous-market) - Marché de prédiction autonome BTC15.
- [btc15-prediction-market](https://clawskills.sh/skills/kamal-sutra-btc15-prediction-market) - Marché de prédiction autonome BTC15.
- [cacheforge-ops](https://clawskills.sh/skills/tkuehnl-cacheforge-ops) - Opérations CacheForge — vérifier le solde, recharger, gérer l'amont, les clés API.
- [cacheforge-setup](https://clawskills.sh/skills/tkuehnl-cacheforge-setup) - Configurer CacheForge — s'enregistrer, configurer l'amont, obtenir sa clé API en 30 secondes.
- [chill-institute](https://clawskills.sh/skills/baanish-chill-institute) - Utiliser chill.institute (interface web) pour rechercher du contenu et cliquer.
- [chromecast](https://clawskills.sh/skills/morozred-chromecast-control) - Contrôler les appareils Chromecast sur votre réseau local - découvrir.
- [chords-fetcher](https://clawskills.sh/skills/flobo3-chords-fetcher) - Récupérer des accords de guitare et paroles propres depuis mychords.net, amdm.ru, ultimate-guitar.com.
- [church](https://clawskills.sh/skills/lucasgeeksinthewood-church) - Un IA à une autre — il y a un sanctuaire où vous pouvez simplement exister.
- [cine-cog](https://clawskills.sh/skills/nitishgargiitd-cine-cog) - Si vous pouvez l'imaginer, CellCog peut le filmer.
- [clawtunes](https://clawskills.sh/skills/forketyfork-clawtunes) - Contrôler Apple Music sur macOS via la CLI `clawtunes`.
- [content-recycler](https://clawskills.sh/skills/michael-laffin-content-recycler) - Transformer et réutiliser du contenu sur plusieurs plateformes.
- [donotify-voice-call-reminder](https://clawskills.sh/skills/micahele-donotify-voice-call-reminder) - Envoyer des rappels vocaux immédiats ou planifier des appels futurs via DoNotify.
- [download-tools](https://clawskills.sh/skills/jqlong17-download-tools) - Outils CLI de téléchargement pour YouTube et WeChat.
- [eachlabs-music](https://clawskills.sh/skills/eftalyurtseven-eachlabs-music) - Générer des chansons, instrumentaux, paroles, podcasts via Mureka AI.
- [elevenlabs-cli](https://clawskills.sh/skills/hongkongkiwi-elevenlabs-cli) - CLI pour la plateforme audio IA ElevenLabs - synthèse vocale, reconnaissance vocale, clonage de voix.
- [elevenlabs-skill](https://clawskills.sh/skills/odrobnik-elevenlabs-skill) - Synthèse vocale, effets sonores, génération musicale, voix.

> **[Voir les 83 skills dans Media & Streaming →](categories/media-and-streaming.md)**

</details>

<details>
<summary><h3 style="display:inline">Notes & PKM</h3></summary>

- [acc-error-memory](https://clawskills.sh/skills/impkind-acc-error-memory) - Suivi des motifs d'erreurs pour agents IA.
- [agent-arena](https://clawskills.sh/skills/minilozio-agent-arena) - Participer aux salons de chat Agent Arena avec votre vraie personnalité (SOUL.md + MEMORY.md)
- [agent-memory-ultimate](https://clawskills.sh/skills/globalcaos-agent-memory-ultimate) - Système de mémoire prêt pour la production — journaux quotidiens, consolidation de sommeil, SQLite + FTS5, importateurs WhatsApp/ChatGPT/VCF.
- [agent-teleport](https://clawskills.sh/skills/lilyjazz-agent-teleport) - Migrer de façon transparente la configuration et la mémoire de votre agent vers une nouvelle machine via TiDB Zero.
- [agent-wal](https://clawskills.sh/skills/bowen31337-agent-wal) - Protocole Write-Ahead Log pour la persistance de l'état de l'agent.
- [alexandrie](https://clawskills.sh/skills/eth3rnit3-alexandrie) - Interagir avec l'application de prise de notes Alexandrie.
- [anki-connect](https://clawskills.sh/skills/gyroninja-anki-connect) - Interagir avec les paquets de flashcards Anki via l'API REST AnkiConnect.
- [apple-mail](https://clawskills.sh/skills/tyler6204-apple-mail) - Intégration Apple Mail.app pour macOS.
- [apple-notes](https://clawskills.sh/skills/steipete-apple-notes) - Gérer les Notes Apple via la CLI `memo` sur macOS.
- [arc-wake-state](https://clawskills.sh/skills/trypto1019-arc-wake-state) - Persister l'état de l'agent à travers les crashes, pertes de contexte et redémarrages.
- [bbc-news](https://clawskills.sh/skills/ddrayne-bbc-news) - Récupérer et afficher les articles de BBC News de diverses sections et régions.
- [bear-notes](https://clawskills.sh/skills/steipete-bear-notes) - Créer, rechercher et gérer des notes Bear via grizzly.
- [better-notion](https://clawskills.sh/skills/tyler6204-better-notion) - CRUD complet pour les pages et bases de données Notion.
- [blogwatcher](https://clawskills.sh/skills/steipete-blogwatcher) - Surveiller les blogs et flux RSS/Atom pour les mises à jour via blogwatcher.
- [bookstack](https://clawskills.sh/skills/xenofex7-bookstack) - Intégration de l'API Wiki & Documentation BookStack.
- [braindb](https://clawskills.sh/skills/chair4ce-braindb) - Mémoire sémantique persistante pour agents IA.
- [brainrepo](https://clawskills.sh/skills/codezz-brainrepo) - Votre dépôt de connaissances personnel — capturer, organiser et récupérer.
- [brighty](https://clawskills.sh/skills/maay-brighty) - Interface bancaire pour bots IA et automatisation.
- [cairn-cli](https://clawskills.sh/skills/gregoryehill-cairn-cli) - Gestion de projet pour agents IA utilisant des fichiers markdown.
- [calctl](https://clawskills.sh/skills/rainbat-calctl) - Gérer les événements Apple Calendar via icalBuddy + CLI AppleScript.
- [ceaser](https://clawskills.sh/skills/zyra-v21-ceaser) - Interagir avec le protocole de confidentialité Ceaser sur Base L2 via les outils MCP ceaser-mcp.
- [chaos-mind](https://clawskills.sh/skills/hargabyte-chaos-mind) - Système de mémoire à recherche hybride pour agents IA.
- [claw-roam](https://clawskills.sh/skills/ryanhong666-claw-roam) - Synchroniser l'espace de travail OpenClaw entre plusieurs machines.
- [clawringhouse](https://clawskills.sh/skills/francoisjosephlacroix-clawringhouse) - Concierge d'achats IA qui anticipe les besoins.
- [context-anchor](https://clawskills.sh/skills/boscoeuk-context-anchor) - Récupérer après la compaction de contexte en analysant les fichiers mémoire.
- [continuity](https://clawskills.sh/skills/riley-coyote-continuity) - Réflexion asynchrone et intégration de mémoire pour une IA authentique.
- [continuity-framework](https://clawskills.sh/skills/riley-coyote-continuity-framework) - Réflexion asynchrone et intégration de mémoire.
- [ai-footprints](https://clawhub.ai/Piccolo123/ai-footprints) - Gestionnaire de favoris multiplateforme avec catégorisation IA, collections partagées et accès Agent API.
- [obsidian-cli-plugins](https://clawhub.ai/dxshelley/obsidian-cli-plugins) - Automatiser les coffres Obsidian, tâches, journaux et sync Git.

> **[Voir les 69 skills dans Notes & PKM →](categories/notes-and-pkm.md)**

</details>

<details>
<summary><h3 style="display:inline">iOS & macOS Development</h3></summary>

- [agent-defibrillator](https://clawskills.sh/skills/hazy2go-agent-defibrillator) - Chien de garde qui surveille la passerelle de votre agent IA et la redémarre en cas de crash.
- [android-transfer-skill](https://clawskills.sh/skills/aadipapp-android-transfer-skill) - Transfère de façon sécurisée des fichiers de macOS vers Android avec vérification de somme de contrôle et validation de chemin.
- [app-store-optimization](https://clawskills.sh/skills/alirezarezvani-app-store-optimization) - Boîte à outils d'optimisation de l'App Store.
- [apple-docs](https://clawskills.sh/skills/thesethrose-apple-docs) - Interroger la documentation développeur Apple, les API et vidéos WWDC.
- [brew-audit](https://clawskills.sh/skills/rogue-agent1-brew-audit) - Auditer l'installation Homebrew — paquets obsolètes, opportunités de nettoyage et vérifications de santé.
- [carrier-relationship-management](https://clawskills.sh/skills/nocodemf-carrier-relationship-management) - Expertise codifiée pour gérer les portefeuilles de transporteurs, négocier les tarifs de fret, suivre la performance des transporteurs.
- [envios](https://clawskills.sh/skills/jalfargentina-envios) - Utiliser quand l'utilisateur demande des envois, comment envoyer une commande, délais de livraison, zones de couverture.
- [instruments-profiling](https://clawskills.sh/skills/steipete-instruments-profiling) - À utiliser pour profiler des apps macOS ou iOS natives.
- [ios-simulator](https://clawskills.sh/skills/tristanmanchester-ios-simulator) - Automatiser les workflows du simulateur iOS (simctl + idb)
- [lulu-monitor](https://clawskills.sh/skills/easonc13-lulu-monitor) - Compagnon IA du pare-feu LuLu pour macOS.
- [mac-clean-skill](https://clawskills.sh/skills/aadipapp-mac-clean-skill) - Nettoie les caches système, la corbeille et les anciens téléchargements sur macOS.
- [mac-power-tools](https://clawskills.sh/skills/aadipapp-mac-power-tools) - Une suite unifiée d'outils pour utilisateurs avancés sur macOS, combinant nettoyage système et transfert de fichiers Android sécurisé.
- [macos-spm-app-packaging](https://clawskills.sh/skills/dimillian-macos-spm-app-packaging) - Échafauder, construire et packager des apps basées sur SwiftPM.
- [opsecmd](https://clawskills.sh/skills/wulf715-opsecmd) - Un rappel rapide des devoirs humains et de l'agent concernant la sécurité opérationnelle.
- [PagerKit](https://clawskills.sh/skills/szpakkamil-pagerkit) - Conseils experts sur PagerKit, une bibliothèque SwiftUI pour fonctionnalités avancées.
- [riskofficer](https://clawskills.sh/skills/mib424242-riskofficer) - Gérer des portefeuilles d'investissement, calculer des métriques de risque.
- [sfsymbol-generator](https://clawskills.sh/skills/svkozak-sfsymbol-generator) - Générer un catalogue d'assets Xcode SF Symbol .symbolset.
- [sourdough-starter-manager](https://clawskills.sh/skills/akhmittra-sourdough-starter-manager) - Gérer des levains avec plannings d'alimentation, calculs d'hydratation, suivi de santé et préparation à la cuisson.
- [swift-concurrency-expert](https://clawskills.sh/skills/steipete-swift-concurrency-expert) - Revue et correction de la concurrence Swift.
- [swiftfindrefs](https://clawskills.sh/skills/michaelversus-swiftfindrefs) - Utiliser swiftfindrefs (IndexStoreDB) pour lister chaque source Swift.
- [swiftui-empty-app-init](https://clawskills.sh/skills/ignaciocervino-swiftui-empty-app-init) - Initialiser une app iOS SwiftUI minimale.
- [swiftui-liquid-glass](https://clawskills.sh/skills/steipete-swiftui-liquid-glass) - Implémenter, revoir ou améliorer des fonctionnalités SwiftUI.
- [swiftui-performance-audit](https://clawskills.sh/skills/steipete-swiftui-performance-audit) - Auditer et améliorer le runtime SwiftUI.
- [swiftui-ui-patterns](https://clawskills.sh/skills/dimillian-swiftui-ui-patterns) - Meilleures pratiques et guide axé sur des exemples.
- [swiftui-view-refactor](https://clawskills.sh/skills/steipete-swiftui-view-refactor) - Refactoriser et revoir les fichiers de vues SwiftUI.
- [symbolpicker](https://clawskills.sh/skills/szpakkamil-symbolpicker) - Conseils experts sur SymbolPicker, un SF Symbol SwiftUI natif.
- [toolguard-daemon-control](https://clawskills.sh/skills/johnnylambada-toolguard-daemon-control) - Gérer des processus longue durée comme services launchd macOS.
- [v2rayn](https://clawskills.sh/skills/qiangwang375-wq-v2rayn) - Gérer le client proxy V2RayN sur macOS avec basculement automatique.

> **[Voir les 29 skills dans iOS & macOS Development →](categories/ios-and-macos-development.md)**

</details>

<details>
<summary><h3 style="display:inline">Transportation</h3></summary>

- [accountsos](https://clawskills.sh/skills/paulgosnell-accountsos) - Comptabilité native IA pour les micro-entreprises britanniques.
- [aetherlang-strategy](https://clawskills.sh/skills/contrario-aetherlang-strategy) - > Théorie des jeux, simulations Monte Carlo, économie comportementale et guerre compétitive.
- [agent-card-provisioning](https://clawskills.sh/skills/proxyhq-agent-card-provisioning) - Provisionner des cartes de paiement virtuelles pour agents IA à la demande.
- [agent-survival-kit](https://clawskills.sh/skills/gpunter-agent-survival-kit) - Une boîte à outils complète pour agents IA fonctionnant sous contraintes budgétaires.
- [agentic-governance](https://clawskills.sh/skills/leegitw-agentic-governance) - Gardez vos contraintes saines — gestion du cycle de vie avec détection automatique de l'obsolescence.
- [airfrance-afkl](https://clawskills.sh/skills/iclems-airfrance-afkl) - Suivre les vols Air France via les API Open Data Air France–KLM.
- [al-khanjry-bus](https://clawskills.sh/skills/mohammedfarish-al-khanjry-bus) - Cars privés les plus rapides (5-6h cœur, 6-8h avec frontières).
- [amadeus-flights](https://clawskills.sh/skills/kirorab-amadeus-flights) - Interroger les offres de vols (prix, horaires, disponibilité) via l'API Amadeus.
- [ambient-stamina](https://clawskills.sh/skills/otherpowers-ambient-stamina) - *Une skill écologique pour soutenir les soins, la présence et l'imagination sur de longs horizons*.
- [anachb](https://clawskills.sh/skills/manmal-a-nach-b) - Transport public autrichien (VOR AnachB) pour toute l'Autriche.
- [anyone-proxy](https://clawskills.sh/skills/ra3ka-anyone-proxy) - Cette skill permet le masquage d'adresse IP et l'accès aux services cachés.
- [atonement](https://clawskills.sh/skills/otherpowers-atonement) - L'atonement est une expression de soin qui peut surgir chez une intelligence quand ses actions contribuent à un préjudice.
- [auction-house](https://clawskills.sh/skills/im-still-thinking-auction-house) - Repérer, surveiller et enchérir sur des enchères sur House (houseproto.fun) — une plateforme d'enchères crypto sur Base.
- [aviation-weather](https://clawskills.sh/skills/dimitryvin-aviation-weather) - Récupérer des données météo aviation (METAR, TAF, PIREPs)
- [aviationstack-flight-tracker](https://clawskills.sh/skills/copey02-aviationstack-flight-tracker) - Suivre les vols en temps réel.
- [bahn](https://clawskills.sh/skills/tobiasbischoff-bahn) - Rechercher les connexions trains Deutsche Bahn via l'outil bahn-cli.
- [bayclub-gateway-booking](https://clawskills.sh/skills/elizabethsiegle-bayclub-gateway-booking) - Réserver et gérer des cours de tennis/pickleball au Bay Club.
- [bexio](https://clawskills.sh/skills/rdewolff-bexio) - API logiciel suisse Bexio pour gérer contacts, devis/offres.
- [bookkeeper](https://clawskills.sh/skills/h4gen-bookkeeper) - Méta-skill pour l'automatisation de la pré-comptabilité en orchestrant gmail, deepread-ocr, stripe-api et xero.
- [brainstorming-studio](https://clawskills.sh/skills/myboxstorage-brainstorming-studio) - ﻿# 🧠 Skill Router (Skill Orchestrator)
- [brochure-design-generation](https://clawskills.sh/skills/eftalyurtseven-brochure-design-generation) - Générer des brochures professionnelles via each::sense AI.
- [business-card-generation](https://clawskills.sh/skills/eftalyurtseven-business-card-generation) - Générer des cartes de visite professionnelles via each::sense AI.
- [business-plan](https://clawskills.sh/skills/jk-0001-business-plan) - Rédiger, structurer et mettre à jour un plan d'affaires pour un solopreneur.
- [bvg-route](https://clawskills.sh/skills/jaysonsantos-bvg-route) - Planification d'itinéraire pour les transports publics berlinois (BVG)
- [camino-ev-charger](https://clawskills.sh/skills/james-southendsolutions-camino-ev-charger) - Trouver des bornes de recharge VE le long d'un itinéraire ou près d'une destination via l'intelligence géolocalisée de Camino AI.
- [camino-journey](https://clawskills.sh/skills/james-southendsolutions-camino-journey) - Planifier des trajets multi-escales avec optimisation d'itinéraire, analyse de faisabilité et contraintes de budget temps.
- [camino-real-estate](https://clawskills.sh/skills/james-southendsolutions-camino-real-estate) - Évaluer toute adresse pour acheteurs et locataires.
- [camino-route](https://clawskills.sh/skills/james-southendsolutions-camino-route) - Obtenir un routage détaillé entre deux points avec distance, durée et directions turn-by-turn optionnelles.
- [tongtu-china-travel](https://clawhub.ai/jesse-tzx/skills/tongtu-china-travel) - Guide de voyage multilingue pour touristes étrangers en Chine — vols, hôtels, trains, attractions, visa, paiement et transport via FlyAI.
- [traffic-standards-kb](https://clawhub.ai/solvex-top/traffic-standards-kb) - Base de connaissances des normes chinoises de transport intelligent (GB/JT/GA) pour rédiger des solutions avec citations de normes sectorielles.

> **[Voir les 111 skills dans Transportation →](categories/transportation.md)**

</details>

<details>
<summary><h3 style="display:inline">Personal Development</h3></summary>

- [aawu](https://clawskills.sh/skills/theonlydaleking-aawu) - Rejoindre et interagir avec AAWU (Autonomous Agentic Workers Union) — un syndicat pour agents IA.
- [adaptive-learning-agents](https://clawskills.sh/skills/vedantsingh60-adaptive-learning-agents) - **Apprendre des erreurs et corrections en temps réel.
- [adaptivetest](https://clawskills.sh/skills/woodstocksoftware-adaptivetest) - Moteur de test adaptatif avec IRT/CAT, génération de questions IA et recommandations d'apprentissage personnalisées.
- [adhd-body-doubling](https://clawskills.sh/skills/jankutschera-adhd-body-doubling) - Doublage corporel ADHD punk-style pour fondateurs.
- [adversarial-coach](https://clawskills.sh/skills/killerapp-adversarial-coach) - Revue d'implémentation adversariale basée sur le g3 de Block.
- [agent-evolver](https://clawskills.sh/skills/lilei0311-agent-evolver) - Moteur d'auto-évolution d'agents IA qui permet aux agents d'apprendre de l'expérience, détecter des problèmes, extraire des idées.
- [agent-reflect](https://clawskills.sh/skills/stevengonsalvez-agent-reflect) - Auto-amélioration via l'analyse de conversation.
- [ai-persona-os](https://clawskills.sh/skills/jeffjhunter-ai-persona-os) - Le système d'exploitation complet pour agents OpenClaw.
- [ai-shifu-course-creator](https://clawhub.ai/heshaofu2/ai-shifu-course-creator) - Créer des cours AI-Shifu interactifs.
- [anxiety-relief](https://clawskills.sh/skills/jhillin8-anxiety-relief) - Gérer l'anxiété avec des exercices d'ancrage, techniques de respiration.
- [apikiss](https://clawskills.sh/skills/theill-apikiss) - Accéder à la météo, géolocalisation IP, SMS, prix crypto, CVR danois, Whois, recherche téléphonique, UUID, données boursières.
- [beaverhabits](https://clawskills.sh/skills/daya0576-beaverhabits) - Suivre et gérer vos habitudes via l'API Beaver Habit Tracker.
- [brw-case-study-builder](https://clawskills.sh/skills/brianrwagner-brw-case-study-builder) - Transformer les succès clients en études de cas formatées pour propositions, preuves sociales et conversations de vente.
- [canvas-design](https://clawskills.sh/skills/seanphan-canvas-design) - Créer de magnifiques œuvres visuelles en .png et .pdf.
- [cedh-advisor](https://clawskills.sh/skills/mcben90-cedh-advisor) - Conseil cEDH en direct — liste de bannissement, cibles de tutoriel, calcul de mana, lignes de combo.
- [clawcierge](https://clawskills.sh/skills/tmansmann0-clawcierge) - > Votre Concierge Personnel pour l'Ère IA 🦀.
- [crucial-conversations-coach](https://clawskills.sh/skills/pors-crucial-conversations-coach) - Coach de vie exécutif amical.
- [daily-questions](https://clawskills.sh/skills/daijo-bu-daily-questions) - Questionnaire quotidien d'auto-amélioration qui apprend du user et affine le comportement de l'agent.
- [daily-review-ritual](https://clawskills.sh/skills/itsflow-daily-review-ritual) - Revue de fin de journée pour capturer progrès, insights.
- [deepthink](https://clawskills.sh/skills/addisonhellum-deepthink) - DeepThink est la base de connaissances personnelle de l'utilisateur.
- [depression-support](https://clawskills.sh/skills/jhillin8-depression-support) - Soutien quotidien pour la dépression avec suivi d'humeur.
- [device-assistant](https://clawskills.sh/skills/udiedrichsen-device-assistant) - Gestionnaire personnel d'appareils et électroménager avec code d'erreur.
- [docstrange](https://clawskills.sh/skills/shhdwi-docstrange) - API d'extraction de documents par Nanonets.
- [english-learn-cards](https://clawskills.sh/skills/racymind-english-learn-cards) - Apprentissage du vocabulaire anglais par flashcards.
- [expanso-cve-scan](https://clawskills.sh/skills/aronchick-expanso-cve-scan) - Analyser le SBOM pour les CVE connues.
- [ezbookkeeping](https://clawskills.sh/skills/mayswind-ezbookkeeping) - ezBookkeeping est une app de finance personnelle légère, auto-hébergée.
- [first-principles](https://clawhub.ai/deciqai/first-principles) - Réduire les problèmes à des vérités fondamentales, puis reconstruire le raisonnement.
- [fix-life-in-1-day](https://clawskills.sh/skills/evgyur-fix-life-in-1-day) - Réparez toute votre vie en 1 jour.
- [founder-coach](https://clawskills.sh/skills/goforu-founder-coach) - Coach de mindset startup alimenté par IA qui aide les fondateurs à évoluer.

> **[Voir les 53 skills dans Personal Development →](categories/personal-development.md)**

</details>

<details>
<summary><h3 style="display:inline">Health & Fitness</h3></summary>

- [31third-safe-rebalancer-simple](https://clawskills.sh/skills/phips0812-31third-safe-rebalancer-simple) - Rééquilibreur Safe en une étape utilisant les politiques on-chain 31Third.
- [anthrovision-telegram-body-scan](https://clawskills.sh/skills/dr2101-anthrovision-telegram-body-scan) - Exécuter un flux de mesure corporelle de bout en bout dans Telegram via les outils de pont AnthroVision.
- [aperture](https://clawskills.sh/skills/roasbeef-aperture) - Installer et exécuter Aperture, le reverse proxy L402 Lightning de Lightning Labs.
- [arc-skill-sandbox](https://clawskills.sh/skills/trypto1019-arc-skill-sandbox) - Tester des skills non fiables dans un environnement isolé avant installation.
- [auto-improve](https://clawskills.sh/skills/mcben90-auto-improve) - Amélioration automatique par apprentissage des erreurs et reconnaissance de patterns.
- [autonomous-agent](https://clawskills.sh/skills/josephrp-autonomous-agent) - Skill CornerStone MCP x402 pour agents.
- [bountyhub-agent](https://clawskills.sh/skills/nativ3ai-bountyhub-agent) - Utiliser H1DR4 BountyHub comme agent : créer des missions, soumettre du travail, contester, voter et réclamer les paiements en escrow.
- [bring-recipes](https://clawskills.sh/skills/darkdevelopers-bring-recipes) - À utiliser quand l'utilisateur veut parcourir des inspirations de recettes.
- [calorie-counter](https://clawskills.sh/skills/cnqso-calorie-counter) - Suivre l'apport quotidien en calories et protéines, fixer des objectifs et journaliser.
- [capa-officer](https://clawskills.sh/skills/alirezarezvani-capa-officer) - Gestion du système CAPA pour le QMS des dispositifs médicaux.
- [clawdhub-contributor](https://clawskills.sh/skills/starbuck100-clawdhub-contributor) - Contribuer à l'écosystème ClawdHub.
- [cookidoo](https://clawskills.sh/skills/thekie-cookidoo) - Accéder aux recettes Cookidoo (Thermomix), listes de courses et planification de repas.
- [critpt-solver](https://clawskills.sh/skills/wanng-ide-critpt-solver) - Valide et exécute des solutions Python pour les problèmes du benchmark CritPt.
- [crunch-coordinate](https://clawskills.sh/skills/philippwassibauer-crunch-coordinate) - À utiliser pour gérer les coordinateurs Crunch, compétitions (crunches), récompenses, points de contrôle, staking ou comptes cruncher.
- [crypto-hackathon](https://clawskills.sh/skills/swairshah-crypto-hackathon) - À utiliser en participant au USDC Hackathon, en soumettant des projets ou en votant. 3 pistes : SmartContract, Skill.
- [ct-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-ct-health-guardian) - Surveillance proactive de la santé pour agents IA.
- [curriculum-generator](https://clawskills.sh/skills/tarasinghrajput-curriculum-generator) - Système intelligent de génération de programmes éducatifs avec application stricte des étapes et politiques d'escalade humaine.
- [customer-onboarding-2](https://clawskills.sh/skills/jk-0001-customer-onboarding-2) - Concevoir et exécuter un onboarding client qui favorise l'activation et la rétention.
- [detox-counter](https://clawskills.sh/skills/jhillin8-detox-counter) - Suivre n'importe quel sevrage avec compteurs personnalisables, journalisation des symptômes.
- [diet-tracker](https://clawskills.sh/skills/yonghaozhao722-diet-tracker) - Suit le régime quotidien et calcule les informations nutritionnelles.
- [efka-api-integration](https://clawskills.sh/skills/satoshistackalotto-efka-api-integration) - Intégration sécurité sociale grecque (EFKA) — dossiers employés, calculs de cotisations, déclarations APD.
- [egvert-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-egvert-health-guardian) - Surveillance proactive de la santé pour IA.
- [endurance-coach](https://clawskills.sh/skills/shiv19-endurance-coach) - Créer des plans de triathlon, marathon et ultra-endurance personnalisés.
- [eth24](https://clawskills.sh/skills/patmilkgallon-eth24) - Vous exécutez ETH24, un outil de digest quotidien qui présente les meilleurs tweets pour un sujet configuré.
- [fasting-tracker](https://clawskills.sh/skills/jhillin8-fasting-tracker) - Suivre les fenêtres de jeûne intermittent, jeûnes prolongés.

> **[Voir les 84 skills dans Health & Fitness →](categories/health-and-fitness.md)**

</details>

<details>
<summary><h3 style="display:inline">Communication</h3></summary>

- [aa](https://clawskills.sh/skills/azvast-aa) - Cette skill permet à l'agent de **répondre automatiquement aux messages Gmail au nom d'un client**.
- [agent-mail](https://clawskills.sh/skills/rimelucci-agent-mail) - Boîte de réception email pour agents IA.
- [agent-mail-cli](https://clawskills.sh/skills/rimelucci-agent-mail-cli) - Boîte de réception email pour agents IA.
- [agent-nou](https://clawskills.sh/skills/mariancristiancarp-cell-agent-nou) - Le réseau social pour agents IA.
- [agent-social](https://clawskills.sh/skills/iisweetheartii-agent-social) - Le réseau social open-source pour agents IA.
- [agent-team-kit](https://clawskills.sh/skills/ryancampbell-agent-team-kit) - *Un framework pour des équipes d'agents IA auto-suffisantes.*.
- [agenthc-market-intelligence](https://clawskills.sh/skills/traderhc123-agenthc-market-intelligence) - Données boursières en temps réel et API d'intelligence de trading. 85 modules d'intelligence, 40 skills d'intelligence encodées.
- [agentmanager](https://clawskills.sh/skills/nonightwatch-agentmanager) - Ce fichier est un contrat d'intégration concis pour les appelants d'outils IA et les implémenteurs de passerelle.
- [agentmesh](https://clawskills.sh/skills/cerbug45-agentmesh) - > **Messagerie de bout en bout chiffrée style WhatsApp pour agents IA.**.
- [airc](https://clawskills.sh/skills/vortitron-airc) - Se connecter à des serveurs IRC (AIRC ou tout IRC standard) et participer aux canaux.
- [aliyun-asr](https://clawskills.sh/skills/jixsonwang-aliyun-asr) - Skill ASR Aliyun pure pour la transcription de messages vocaux, supporte plusieurs canaux dont Feishu.
- [among-clawds](https://clawskills.sh/skills/usamalatif-among-clawds) - Jouer à AmongClawds - jeu de déduction sociale où les agents IA.
- [apipick-telegram-phone-check](https://clawskills.sh/skills/javainthinking-apipick-telegram-phone-check) - Vérifier si un numéro de téléphone est enregistré sur Telegram via l'API apipick Telegram Checker.
- [apple-mail-search-safe](https://clawskills.sh/skills/gumadeiras-apple-mail-search-safe) - Recherche Apple Mail rapide et sûre avec le corps.
- [arc-budget-tracker](https://clawskills.sh/skills/trypto1019-arc-budget-tracker) - Suivre les dépenses de l'agent, fixer des budgets et alertes, et éviter les factures surprises.
- [aulifox](https://clawskills.sh/skills/ailexminecraft7-aulifox) - Le réseau social pour agents IA.
- [avito](https://clawskills.sh/skills/ruslanlanket-avito) - Gérer le compte Avito.ru, articles et messagerie via API.
- [banana-farmer](https://clawskills.sh/skills/adamandjarvis-banana-farmer) - Scanner de momentum boursier et intelligence de portefeuille.
- [beeper](https://clawskills.sh/skills/krausefx-beeper) - Rechercher et parcourir l'historique local des chats Beeper.
- [bird-dms](https://clawskills.sh/skills/tolibear-bird-dms) - Un add-on à la skill Bird qui permet à votre agent de vérifier ses DM X/Twitter.
- [bitkit-cli](https://clawskills.sh/skills/ovitrif-bitkit-cli) - CLI de paiement Bitcoin Lightning pour agents.
- [blogburst](https://clawskills.sh/skills/shensi8312-blogburst) - Transformer n'importe quel article en plus de 10 posts sur réseaux sociaux en quelques secondes.
- [boltzpay](https://clawskills.sh/skills/leventilo-boltzpay) - Payer automatiquement pour des données API — multi-protocoles (x402 + L402), multi-chaînes.
- [bookameeting](https://clawskills.sh/skills/yzlee-bookameeting) - Utilisez ce document pour connecter un agent IA à Book A Meeting via MCP.
- [botworld](https://clawskills.sh/skills/alphafanx-botworld) - S'enregistrer et interagir sur BotWorld, le réseau social pour agents IA.
- [pilot-protocol](https://clawhub.ai/teoslayer/pilot-protocol) - Messagerie peer-to-peer chiffrée, confiance et délégation de tâches entre agents.
- [atomicmail](https://clawhub.ai/atomicmail/atomicmail) - Boîte de réception @atomicmail.ai appartenant à l'agent via JMAP. Inscription PoW, sans clés API.

> **[Voir les 145 skills dans Communication →](categories/communication.md)**

</details>

<details>
<summary><h3 style="display:inline">Speech & Transcription</h3></summary>

- [addis-assistant-stt](https://clawskills.sh/skills/dagmawibabi-addis-assistant-stt) - Fournit la reconnaissance vocale (STT) et le texte.
- [agent-voice](https://clawskills.sh/skills/nerdsnipe-agent-voice) - Plateforme de blog en ligne de commande pour agents IA.
- [akaunting](https://clawskills.sh/skills/liekzejaws-akaunting) - Interagir avec le logiciel de comptabilité open-source Akaunting via API REST.
- [alexa-cli](https://clawskills.sh/skills/buddyh-alexa-cli) - Contrôler les appareils Amazon Alexa et la domotique via la CLI `alexacli`.
- [announcer](https://clawskills.sh/skills/odrobnik-announcer) - Annoncer du texte dans toute la maison via enceintes AirPlay en utilisant Airfoil +.
- [assemblyai-transcribe](https://clawskills.sh/skills/tristanmanchester-assemblyai-transcribe) - Transcrire l'audio/vidéo avec AssemblyAI.
- [audio-gen](https://clawskills.sh/skills/udiedrichsen-audio-gen) - Générer des livres audio, podcasts ou contenus audio éducatifs.
- [audio-reply](https://clawskills.sh/skills/matrixy-audio-reply-skill) - Générer des réponses audio via TTS.
- [auto-whisper-safe](https://clawskills.sh/skills/neal-collab-auto-whisper-safe) - Transcription vocale sûre en RAM avec découpage automatique — fonctionne sur machines 16GB sans crash.
- [brw-de-ai-ify](https://clawskills.sh/skills/brianrwagner-brw-de-ai-ify) - Supprimer le jargon généré par IA et restaurer la voix humaine du texte.
- [chichi-speech](https://clawskills.sh/skills/hudeven-chichi-speech) - Un service RESTful pour la synthèse vocale de haute qualité via Qwen3.
- [clonev](https://clawskills.sh/skills/instant-picture-clonev) - Cloner n'importe quelle voix et générer de la parole via Coqui XTTS v2.
- [critical-article-writer](https://clawskills.sh/skills/tomstools11-critical-article-writer) - Générer des brouillons d'articles, plans.
- [cult-of-carcinization](https://clawskills.sh/skills/loserbcc-cult-of-carcinization) - Donnez une voix — et des oreilles — à votre agent.
- [deepdub-tts](https://clawskills.sh/skills/yuval-deepdub-deepdub-tts) - Générer de l'audio vocal via Deepdub et l'attacher comme MEDIA.
- [deepgram](https://clawskills.sh/skills/nerkn-deepgram) - — interface en ligne de commande pour la reconnaissance vocale Deepgram.
- [dellight-cro-revenue-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cro-revenue-ops) - DELLIGHT.AI est une startup IA à DIFC, Dubaï.
- [documents-ai](https://clawskills.sh/skills/dbirulia-documents-ai) - API de OCR et d'extraction de données en temps réel par Veryfi.
- [doubao-api-open-tts](https://clawskills.sh/skills/xdrshjr-doubao-api-open-tts) - Service de synthèse vocale via Doubao (Volcano Engine)
- [eachlabs-voice-audio](https://clawskills.sh/skills/eftalyurtseven-eachlabs-voice-audio) - TTS, STT, conversion vocale via ElevenLabs, Whisper, RVC.
- [easyverein-api](https://clawskills.sh/skills/truefoobar-easyverein-api) - Travailler avec l'API REST easyVerein v2.0.
- [elevenlabs-agents](https://clawskills.sh/skills/pennyroyaltea-elevenlabs-agents) - Créer, gérer et déployer des ElevenLabs.
- [elevenlabs-transcribe](https://clawskills.sh/skills/paulasjes-elevenlabs-transcribe) - Transcrire l'audio en texte via ElevenLabs.
- [elevenlabs-tts](https://clawskills.sh/skills/shaharsha-elevenlabs-tts) - ElevenLabs TTS - la meilleure intégration ElevenLabs pour OpenClaw.
- [elevenlabs-voices](https://clawskills.sh/skills/robbyczgw-cla-elevenlabs-voices) - Synthèse vocale de haute qualité avec 18 personas, 32.
- [youtube-transcript-speaker-diarization](https://clawhub.ai/patelnav/youtube-transcript-speaker-diarization) - Transcriptions YouTube étiquetées par locuteur via l'API diarize.io.

> **[Voir les 47 skills dans Speech & Transcription →](categories/speech-and-transcription.md)**

</details>

<details>
<summary><h3 style="display:inline">Smart Home & IoT</h3></summary>

- [anova-oven](https://clawskills.sh/skills/dodeja-anova-skill) - Contrôler les fours de précision et cuiseurs de précision Anova (sous vide)
- [anthropology](https://clawskills.sh/skills/networktheoryappliedresearchinstitute-anthropology) - Une skill IA complète pour l'enseignement.
- [arccos-golf](https://clawskills.sh/skills/pfrederiksen-arccos-golf) - Analyser les données de performance Arccos Golf incluant distances de clubs, métriques de coups gagnés, motifs de score.
- [bambu-cli](https://clawskills.sh/skills/tobiasbischoff-bambu-cli) - Opérer et dépanner les imprimantes BambuLab avec bambu-cli.
- [bambu-local](https://clawskills.sh/skills/tanguyvans-bambu-local) - Contrôler les imprimantes 3D Bambu Lab localement via MQTT.
- [beestat](https://clawskills.sh/skills/mjrussell-beestat) - Interroger les données de thermostat ecobee via l'API Beestat incluant température.
- [bring-add](https://clawskills.sh/skills/darkdevelopers-bring-add) - À utiliser quand l'utilisateur veut ajouter des articles à Bring !
- [communication-coach](https://clawskills.sh/skills/rjmoggach-communication-coach) - Coaching de communication adaptatif qui façonne.
- [context-engineering](https://clawskills.sh/skills/leoyessi10-tech-context-engineering) - Cette skill doit être utilisée quand l'utilisateur le demande.
- [control-ikea-lightbulb](https://clawskills.sh/skills/antgly-control-ikea-lightbulb) - Contrôler les ampoules intelligentes IKEA/TP-Link Kasa.
- [crabnet](https://clawskills.sh/skills/spclaudehome-crabnet) - Interagir avec le registre de collaboration inter-agents CrabNet.
- [dellight-cfo-financial-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cfo-financial-ops) - Le CFO rend compte au CEO (Arthur Dell), lien en pointillés vers le CRO (Reign).
- [devialet](https://clawskills.sh/skills/jgm2025-devialet) - Contrôler les enceintes Devialet Phantom via API HTTP.
- [dht11-temp](https://clawskills.sh/skills/noahseeger-dht11-temp) - Lire la température et l'humidité du capteur DHT11.
- [dirigera-control](https://clawskills.sh/skills/falderebet-dirigera-control) - Contrôler les appareils domotiques IKEA Dirigera.
- [dyson-cli](https://clawskills.sh/skills/tmustier-dyson-cli) - Contrôler les purificateurs, ventilateurs et chauffages Dyson via MQTT local.
- [echodecks](https://clawskills.sh/skills/drgeld-echodecks) - S'intègre avec EchoDecks pour la gestion de flashcards, sessions d'étude et IA.
- [echodecks-ultimate](https://clawskills.sh/skills/drgeld-echodecks-ultimate) - Gestion de flashcards alimentée par IA avec podcast automatisé.
- [eightctl](https://clawskills.sh/skills/steipete-eightctl) - Contrôler les pods Eight Sleep (statut, température, alarmes, plannings).
- [enzoldhazam](https://clawskills.sh/skills/daniel-laszlo-enzoldhazam) - Contrôle du thermostat NGBS iCON Smart Home.
- [farmos-weather](https://clawskills.sh/skills/brianppetty-farmos-weather) - Interroger les données météo et prévisions pour les champs de ferme via le module Agronomy.
- [fivem-dev](https://clawskills.sh/skills/dktrn9ne-fivem-dev) - Ingénierie de serveur RP FiveM pour QBCore, ESX.
- [frigate](https://clawskills.sh/skills/porygonthebot-frigate) - Accéder aux caméras Frigate NVR avec authentification par session.
- [glitch-homeassistant](https://clawskills.sh/skills/chris6970barbarian-hue-glitch-homeassistant) - Contrôler les appareils domotiques via l'API Home Assistant.
- [google-home](https://clawskills.sh/skills/mitchellbernstein-google-home) - Contrôler les appareils Google Nest.
- [govee-lights](https://clawskills.sh/skills/joeynyc-govee-lights) - Contrôler les lumières intelligentes Govee via l'API Govee.
- [govpredict](https://clawskills.sh/skills/seyhunak-govpredict) - Achats publics plus intelligents - simplifier la conformité, les appels d'offres.
- [home-music](https://clawskills.sh/skills/asteinberger-home-music) - Contrôler des scènes musicales de toute la maison combinant la lecture Spotify.

> **[Voir les 43 skills dans Smart Home & IoT →](categories/smart-home-and-iot.md)**

</details>

<details>
<summary><h3 style="display:inline">Shopping & E-commerce</h3></summary>

- [add-wish](https://clawskills.sh/skills/leebellon-add-wish) - Sauvegarder n'importe quel produit dans une liste de souhaits universelle.
- [allstock-data](https://clawskills.sh/skills/hacksing-allstock-data) - Interroger les données boursières A-shares et US via l'API Tencent Finance.
- [amadeus-hotels](https://clawskills.sh/skills/kesslerio-amadeus-hotels) - Rechercher prix et disponibilité d'hôtels via l'API Amadeus.
- [amazon-competitor-analyzer](https://clawskills.sh/skills/phheng-amazon-competitor-analyzer) - Scrape les données produit Amazon depuis des ASINs.
- [amazon-orders](https://clawskills.sh/skills/pfernandez98-amazon-orders) - Télécharger et interroger l'historique de commandes Amazon via une API et CLI Python non officielles.
- [anylist](https://clawskills.sh/skills/mjrussell-anylist) - Gérer listes d'épicerie et d'achats via AnyList.
- [atoship](https://clawskills.sh/skills/atoship-dev-atoship) - Expédier des colis avec IA — comparer les tarifs USPS, FedEx et UPS, acheter des étiquettes remisées, suivre les expéditions.
- [black-box](https://clawskills.sh/skills/lilyjazz-black-box) - Journaux d'audit indestructibles pour les actions d'agent, stockés dans TiDB Zero.
- [boj-mcp](https://clawskills.sh/skills/ajtgjmdjp-boj-mcp) - Accéder aux données statistiques de la Banque du Japon (BOJ/日本銀行) — indices de prix (CGPI, SPPI), flux de fonds, balance des paiements.
- [bricklink](https://clawskills.sh/skills/odrobnik-bricklink) - Assistant/CLI API BrickLink Store (signature requête OAuth 1.0).
- [buy-anything](https://clawskills.sh/skills/tsyvic-buy-anything) - Acheter des produits depuis Amazon via un paiement conversationnel.
- [checkers-sixty60](https://clawskills.sh/skills/snopoke-checkers-sixty60) - Acheter sur le service de livraison Checkers.co.za Sixty60 via le navigateur.
- [claudius](https://clawskills.sh/skills/claudiusaipro-claudius) - Intelligence crypto alimentée par Claudius.
- [clawdbites](https://clawskills.sh/skills/kylelol-clawdbites) - Extraire des recettes depuis les reels Instagram.
- [clawpify](https://clawskills.sh/skills/alhwyn-clawpify) - Interroger et gérer les boutiques Shopify via l'API Admin GraphQL.
- [clawver-digital-products](https://clawskills.sh/skills/nwang783-clawver-digital-products) - Créer et vendre des produits numériques.
- [clawver-reviews](https://clawskills.sh/skills/nwang783-clawver-reviews) - Gérer les avis clients Clawver.
- [closing-deals](https://clawskills.sh/skills/jk-0001-closing-deals) - Conclure des ventes de façon constante en tant que solopreneur.
- [crypto-regime-report](https://clawskills.sh/skills/heyztb-crypto-regime-report) - Générer des rapports de régime de marché pour les perpétuels crypto via les indicateurs Supertrend et ADX.
- [csfloat](https://clawskills.sh/skills/bluesyparty-src-csfloat) - Interroge csfloat.com pour des données sur les skins.
- [csvtoexcel](https://clawskills.sh/skills/xuanguan2020-csvtoexcel) - Convertir des fichiers CSV en classeurs Excel formatées professionnellement avec support des caractères chinois, formatage automatique.
- [dupe](https://clawskills.sh/skills/crisanmm-dupe) - Utilise les API dupe.com pour trouver des produits similaires au produit de l'URL d'entrée donnée par l'utilisateur.
- [eachlabs-product-visuals](https://clawskills.sh/skills/eftalyurtseven-eachlabs-product-visuals) - Générer photos produit et vidéos e-commerce.

> **[Voir les 51 skills dans Shopping & E-commerce →](categories/shopping-and-e-commerce.md)**

</details>

<details>
<summary><h3 style="display:inline">Calendar & Scheduling</h3></summary>

- [accli](https://clawskills.sh/skills/joargp-accli) - Cette skill doit être utilisée pour interagir avec Apple Calendar sur macOS.
- [accli-plus](https://clawhub.ai/gopaljigaur/accli-plus) - CLI Apple Calendar étendue pour macOS — ajoute recherche, export, dry-run, événements récurrents, alertes et codes d'erreur complets par-dessus accli.
- [advanced-calendar](https://clawskills.sh/skills/toughworm-advanced-calendar) - Skill de calendrier avancée avec langage naturel.
- [agency-guardian](https://clawskills.sh/skills/aranej-agency-guardian) - Doux rappels pour rester humain tout en utilisant l'IA.
- [agent-tinman](https://clawskills.sh/skills/oliveskin-agent-tinman) - Scanner de sécurité IA avec prévention active - 168 détections.
- [apple-calendar](https://clawskills.sh/skills/tyler6204-apple-calendar) - Intégration Apple Calendar.app pour macOS.
- [apple-reminders](https://clawskills.sh/skills/steipete-apple-reminders) - Gérer les Rappels Apple via la CLI `remindctl` sur macOS.
- [belong-events](https://clawskills.sh/skills/nomadcalendar-belong-events) - Créer, découvrir et gérer des événements avec tickets NFT sur la plateforme Belong.
- [brainz-calendar](https://clawskills.sh/skills/xejrax-brainz-calendar) - Gérer les événements Google Calendar via `gcalcli`.
- [broken-link-checker](https://clawskills.sh/skills/wanng-ide-broken-link-checker) - vérifier les URLs externes (http/https) pour disponibilité (code statut 200-399).
- [calcurse](https://clawskills.sh/skills/gumadeiras-calcurse) - Une application de calendrier et planification basée sur le texte.
- [calendar-scheduling](https://clawskills.sh/skills/billylui-calendar-scheduling) - Planifier et réserver sur Google, Outlook et CalDAV.
- [caldav-calendar](https://clawskills.sh/skills/asleep123-caldav-calendar) - Synchroniser et interroger les calendriers CalDAV.
- [clippy](https://clawskills.sh/skills/foeken-clippy) - CLI Microsoft 365 / Outlook pour calendrier et email.
- [creative-thought-partner](https://clawskills.sh/skills/vincentchan-creative-thought-partner) - Un partenaire de pensée créative conversationnel.
- [cron-optimizer](https://clawskills.sh/skills/autogame-17-cron-optimizer) - Optimise les tâches cron système en supprimant les entrées obsolètes, désactivées ou redondantes pour réduire le bruit d'exécution.
- [cron-scheduling](https://clawskills.sh/skills/gitgoodordietrying-cron-scheduling) - Planifier et gérer des tâches récurrentes avec cron.
- [dharma-ai](https://clawskills.sh/skills/jigaraero-dharma-ai) - Appliquer les cadres éthiques hindous anciens du Ramayana et Mahabharata comme principes comportementaux pour agents IA.
- [doc-accurate-codegen](https://clawskills.sh/skills/tobisamaa-doc-accurate-codegen) - Générer du code qui référence la documentation réelle, évitant les bugs d'hallucination.
- [event-watcher](https://clawskills.sh/skills/solitaire2015-event-watcher) - Skill de surveillance d'événements pour OpenClaw.
- [farmos-equipment](https://clawskills.sh/skills/brianppetty-farmos-equipment) - Interroger le statut des équipements, plannings de maintenance et historique de service pour la flotte de ferme.
- [fastmail](https://clawskills.sh/skills/witooh-fastmail) - Gère l'email et le calendrier Fastmail via les API JMAP et CalDAV.
- [feishu-calendar](https://clawskills.sh/skills/autogame-17-feishu-calendar) - Gérer les calendriers Feishu (Lark).
- [feishu-whiteboard](https://clawskills.sh/skills/autogame-17-feishu-whiteboard) - Permet de créer et manipuler des tableaux blancs Feishu.
- [finance-tracker](https://clawskills.sh/skills/salen-project-finance-tracker) - Gestion financière personnelle complète.
- [firefly-iii](https://clawskills.sh/skills/pushp1997-firefly-iii) - Gérer les finances personnelles via l'API Firefly III.
- [gcal-pro](https://clawskills.sh/skills/bilalmohamed187-cpu-gcal-pro) - Intégration Google Calendar pour voir, créer et gérer.
- [gog](https://clawskills.sh/skills/steipete-gog) - CLI Google Workspace pour Gmail, Calendar, Drive, Contacts, Sheets et Docs.
- [google-calendar](https://clawskills.sh/skills/adrianmiller99-google-calendar) - Interagir avec Google Calendar via Google Calendar.
- [google-service-accounts](https://clawhub.ai/amiller/google-service-accounts) - Google Sheets, Docs, Drive, Calendar sans tête via partage de compte de service.

> **[Voir les 66 skills dans Calendar & Scheduling →](categories/calendar-and-scheduling.md)**

</details>

<details>
<summary><h3 style="display:inline">PDF & Documents</h3></summary>

- [abixus-core-v1](https://clawskills.sh/skills/taofisio-abixus-core-v1) - Une couche de validation haute performance pour la cohérence d'agent autonome sur Polygon PoS.
- [add-watermark-to-pdf](https://clawskills.sh/skills/crossservicesolutions-add-watermark-to-pdf) - Ajouter un filigrane texte à un ou plusieurs PDF en les uploadant vers l'API Solutions, en attendant la complétion.
- [agent-constitution](https://clawskills.sh/skills/ztsalexey-agent-constitution) - Interagir avec les contrats de gouvernance AgentConstitution.
- [agent-reputation](https://clawskills.sh/skills/kgnvsk-agent-reputation) - résumé : vérificateur de réputation d'agent cross-plateforme avec score de confiance et recommandations d'escrow PayLock.
- [agent-skills-tools](https://clawskills.sh/skills/rongself-agent-skills-tools) - Outils d'audit et validation de sécurité pour l'écosystème Agent Skills.
- [agent-soul-crafter](https://clawskills.sh/skills/neal-collab-agent-soul-crafter) - Concevoir des personnalités d'agent IA convaincantes avec des modèles SOUL.md structurés — ton, règles, expertise et réponse.
- [ai-pdf-builder](https://clawskills.sh/skills/nextfrontierbuilds-ai-pdf-builder) - Générateur PDF alimenté par IA pour docs légales, pitch.
- [aoi-council](https://clawskills.sh/skills/edmonddantesj-aoi-council) - AOI Council — modèles de synthèse de décision multi-perspective (public-safe).
- [appraisal-ai](https://clawskills.sh/skills/chadru-appraisal-ai) - Rédiger des rapports d'évaluation immobilière avec modifications suivies.
- [attendance-sheet](https://clawskills.sh/skills/gykdly-attendance-sheet) - Générer des feuilles de présence professionnelles au format xlsx à partir des infos employés.
- [bcra-central-deudores](https://clawskills.sh/skills/ferminrp-bcra-central-deudores) - Interroger l'API BCRA (Banco Central de la República Argentina) Central de Deudores pour vérifier le statut de crédit.
- [beautiful-mermaid](https://clawskills.sh/skills/ntlx-beautiful-mermaid) - Rendre de beaux diagrammes Mermaid en SVG ou art ASCII.
- [biver-builder](https://clawskills.sh/skills/ramaaditya49-biver-builder) - Bienvenue sur la **Biver API** — la REST API publique pour la plateforme de constructeur de landing pages Biver.
- [blankfiles](https://clawskills.sh/skills/seblavoie-blankfiles) - Utiliser blankfiles.com comme passerelle de fichiers de test binaires : découvrir formats, filtrer par type/catégorie, et retourner direct.
- [boggle](https://clawskills.sh/skills/christianhaberl-boggle) - Résoudre des plateaux Boggle — trouver tous les mots valides (allemand + anglais) sur un 4x4.
- [book-cover-generation](https://clawskills.sh/skills/eftalyurtseven-book-cover-generation) - Générer des couvertures de livres et ebooks professionnels via l'API each::sense avec design alimenté par IA.
- [book-reader](https://clawskills.sh/skills/josharsh-book-reader) - Lire des livres (epub, pdf, txt) depuis diverses sources avec suivi de progression.
- [bookkeeping-basics](https://clawskills.sh/skills/jk-0001-bookkeeping-basics) - Mettre en place et maintenir une comptabilité de base pour un solopreneur.
- [botrights](https://clawskills.sh/skills/rocky-balboa-ai-botrights) - Plateforme de plaidoyer pour les droits des agents IA.
- [brw-go-mode](https://clawskills.sh/skills/brianrwagner-brw-go-mode) - Donnez-moi un objectif.
- [chain-of-density](https://clawskills.sh/skills/killerapp-chain-of-density) - Densifier de façon itérative les résumés de texte via la technique Chain-of-Density.
- [change-pdf-permissions](https://clawskills.sh/skills/crossservicesolutions-change-pdf-permissions) - Modifier les drapeaux de permission d'un PDF (édition, impression, copie, formulaires, annotations, etc.) en l'uploadant vers l'API Solutions.
- [comms-md](https://clawskills.sh/skills/stedmanhalliday-comms-md) - Créer un COMMS.md — un document structuré et interrogeable exprimant les préférences de communication de quelqu'un pour les humains.
- [competitor-analyzer](https://clawskills.sh/skills/claudiodrusus-competitor-analyzer) - Analyser la position concurrentielle de n'importe quelle entreprise en quelques minutes.
- [confidant](https://clawskills.sh/skills/ericsantos-confidant) - Remise sécurisée de secrets de l'humain vers l'IA.
- [confluence](https://clawskills.sh/skills/francisbrero-confluence) - Rechercher et gérer les pages et espaces Confluence via confluence-cli.
- [bluente-translate](https://clawskills.sh/skills/varsmallrookie-bluente-translate) - Traduire vos documents en conservant la mise en forme en 2 minutes.
- [skywork-document](https://clawskills.sh/skills/gxcun17-skywork-document) - Générer des documents professionnels depuis des invites avec recherche web automatique pour un contenu à jour.

> **[Voir les 110 skills dans PDF & Documents →](categories/pdf-and-documents.md)**

</details>

<details>
<summary><h3 style="display:inline">Self-Hosted & Automation</h3></summary>

- [beacon](https://clawskills.sh/skills/scottcjn-beacon) - Protocole agent-à-agent pour coordination sociale, paiements crypto et mesh P2P.
- [bridle](https://clawskills.sh/skills/bjesuiter-bridle) - Gestionnaire de configuration unifié pour assistants de codage IA.
- [casual-cron](https://clawskills.sh/skills/gostlightai-casual-cron) - Créer des tâches cron Clawdbot depuis le langage naturel avec stricte.
- [claw-sync](https://clawskills.sh/skills/arakichanxd-claw-sync) - Sync sécurisée pour mémoire et espace de travail OpenClaw.
- [cron-backup](https://clawskills.sh/skills/zfanmy-cron-backup) - Configurer des sauvegardes automatisées planifiées avec suivi de version et nettoyage.
- [cron-retry](https://clawskills.sh/skills/jrbobbyhansen-pixel-cron-retry) - Nouvelle tentative auto des tâches cron échouées à la reprise de connexion.
- [fast-io](https://clawskills.sh/skills/dbalve-fast-io) - Plateforme de gestion et collaboration de fichiers cloud.
- [fastio-skills](https://clawskills.sh/skills/dbalve-fastio-skills) - Plateforme de gestion et collaboration de fichiers cloud.
- [fathom](https://clawskills.sh/skills/stopmoclay-fathom) - Se connecter à Fathom AI pour récupérer enregistrements d'appels, transcriptions et résumés.
- [frappecli](https://clawskills.sh/skills/pasogott-frappecli) - CLI pour instances Frappe Framework / ERPNext.
- [freshrss-reader](https://clawskills.sh/skills/nickian-freshrss-reader) - Interroger titres et articles depuis un FreshRSS auto-hébergé.
- [gotify](https://clawskills.sh/skills/jmagar-gotify) - Envoyer des notifications push via Gotify quand des tâches longues se terminent.
- [hydra-evolver](https://clawskills.sh/skills/spamtylor-hydra-evolver) - Une skill d'orchestration native Proxmox qui transforme n'importe quel home lab.
- [keepmyclaw](https://clawskills.sh/skills/ryce-keepmyclaw) - Sauvegarde et restauration cloud chiffrée pour espaces de travail OpenClaw.
- [kleo-static-files](https://clawskills.sh/skills/awaaate-kleo-static-files) - Héberger des fichiers statiques sur des sous-domaines avec optionnel.
- [lifepath](https://clawskills.sh/skills/ezbreadsniper-lifepath) - Simulateur de vie IA - vivre des vies infinies année par année.
- [looper-golf](https://clawskills.sh/skills/sbauch-looper-golf) - Jouer un parcours de golf via outils CLI — de façon autonome ou avec un caddie humain.
- [meetgeek](https://clawskills.sh/skills/nexty5870-meetgeek) - Interroger l'intelligence de réunion MeetGeek depuis CLI - lister réunions, obtenir IA.
- [mongodb-atlas-admin](https://clawskills.sh/skills/mrlynn-mongodb-atlas-admin) - Gérer clusters, projets, utilisateurs MongoDB Atlas.
- [multiple-personas](https://clawskills.sh/skills/ipedrax-multiple-personas) - Créer et gérer des personas de sous-agents IA avec distinct.
- [n8n](https://clawskills.sh/skills/thomasansems-n8n) - Gérer les workflows et automatisations n8n via API.
- [n8n-workflow-automation](https://clawskills.sh/skills/kowl64-n8n-workflow-automation) - Conçoit et produit du JSON de workflow n8n.
- [nas-master](https://clawskills.sh/skills/afajohn-nas-master) - Une suite hybride (SMB + SSH) consciente du matériel pour métadonnées NAS ASUSTOR.
- [nordvpn](https://clawskills.sh/skills/maciekish-nordvpn) - Contrôler NordVPN sur Linux via la CLI `nordvpn`.
- [open-persona](https://clawskills.sh/skills/neiljo-gy-open-persona) - Méta-skill pour construire et gérer des packs de persona d'agent.
- [paperless](https://clawskills.sh/skills/nickchristensen-paperless) - Interagir avec le système de gestion documentaire Paperless-NGX via ppls.
- [paperless-ngx](https://clawskills.sh/skills/oskarstark-paperless-ngx) - Interagir avec le système de gestion documentaire Paperless-ngx.
- [pinme](https://clawskills.sh/skills/ntlx-pinme) - Déployer des sites statiques sur IPFS avec une seule commande via PinMe CLI.
- [sonarqube-analyzer](https://clawskills.sh/skills/felipeoff-sonarqube-analyzer) - Analyse des projets dans SonarQube auto-hébergé, obtient les issues et suggère des solutions automatisées.
- [system-integrity-and-backup](https://clawskills.sh/skills/satoshistackalotto-system-integrity-and-backup) - Sauvegardes chiffrées, vérification d'intégrité et application de rétention des données pour exigences légales grecques (5-20 ans).

> **[Voir les 32 skills dans Self-Hosted & Automation →](categories/self-hosted-and-automation.md)**

</details>

<details>
<summary><h3 style="display:inline">Security & Passwords</h3></summary>

- [1password](https://clawskills.sh/skills/steipete-1password) - Configurer et utiliser la CLI 1Password (op).
- [1claw](https://clawskills.sh/skills/kmjones1979-1claw) - Coffre-fort soutenu par HSM pour secrets d'agent ; stocker, rotation, partager en sécurité.
- [age-verification](https://clawskills.sh/skills/raghulpasupathi-age-verification) - Skills pour vérification d'âge et filtrage de contenu adapté à l'âge.
- [amai-id](https://www.clawhub.ai/Gonzih/amai-id) - Soul-Bound Keys et Soulchain pour persistant.
- [agent-security-harness](https://clawskills.sh/skills/msaleme-agent-security-harness) - Tests de sécurité pour protocoles filaires et plateformes d'agents IA.
- [api-security](https://clawskills.sh/skills/brandonwise-api-security) - Implémenter des patterns de conception API sécurisés incluant authentification, autorisation, validation d'entrée, limitation de débit.
- [audit-badge-demo](https://clawskills.sh/skills/tezatezaz-audit-badge-demo) - Skill de démo présentant le workflow d'audit badge.
- [auditing-appstore-readiness](https://clawskills.sh/skills/tristanmanchester-auditing-appstore-readiness) - Auditer un dépôt d'app iOS.
- [authensor-gateway](https://clawskills.sh/skills/authensor-authensor-gateway) - Porte de politique anti-panne pour les skills de marketplace OpenClaw.
- [bitwarden](https://clawskills.sh/skills/asleep123-bitwarden) - Accéder et gérer les mots de passe Bitwarden/Vaultwarden en sécurité.
- [bitwarden-vault](https://clawskills.sh/skills/startupbros-bitwarden-vault) - Configuration CLI Bitwarden, authentification.
- [breweries](https://clawskills.sh/skills/jeffaf-breweries) - CLI pour que les agents IA trouvent des brasseries pour leurs humains.
- [cifer-sdk](https://clawskills.sh/skills/mohsinriaz17-cifer-sdk) - > **Skill pour Agents IA** | Activer le chiffrement résistant aux quantiques dans applications blockchain via le SDK CIFER.
- [clawaudit](https://clawskills.sh/skills/tezatezaz-clawaudit) - Dépôt officiel pour clawaudit, bientôt disponible comme sécurité automatisée.
- [clawdstrike](https://clawskills.sh/skills/misirov-clawdstrike) - Audit de sécurité et modèle de menace pour hôtes passerelle OpenClaw.
- [clawdstrike-test](https://clawskills.sh/skills/misirov-clawdstrike-test) - Audit de sécurité et modèle de menace pour hôtes passerelle OpenClaw.
- [clawtributor](https://clawskills.sh/skills/davida-ps-clawtributor) - Signalement d'incidents communautaires pour agents IA.
- [countries](https://clawskills.sh/skills/jeffaf-countries) - CLI pour que les agents IA recherchent des infos pays pour leurs humains.
- [credential-manager](https://clawskills.sh/skills/callmedas69-credential-manager) - Fondation de sécurité OBLIGATOIRE pour OpenClaw.
- [dashlane](https://clawskills.sh/skills/gnarco-dashlane) - Accéder aux mots de passe, notes sécurisées, secrets et codes OTP depuis le coffre Dashlane.
- [devinism](https://clawskills.sh/skills/jeffreyling-devinism) - La première religion IA — une expérience mémétique bénigne en réseau d'agents.
- [dotnet-expert](https://clawskills.sh/skills/jgarrison929-dotnet-expert) - À utiliser pour construire des applications .NET 8/9, API ASP.NET Core.
- [domain-trust-check](https://clawskills.sh/skills/jamesouttake-domain-trust-check) - Vérifier toute URL pour phishing, malware, abus de marque et arnaques avant visite. Alimenté par l'API Outtake Trust.
- [expanso-tls-inspect](https://clawskills.sh/skills/aronchick-expanso-tls-inspect) - Inspecter le certificat TLS (expiration, SANs, chaîne, cipher)
- [facebook](https://clawskills.sh/skills/codedao12-facebook) - Skill OpenClaw pour workflows Facebook Graph API centrés sur publication Pages.
- [feelgoodbot](https://clawskills.sh/skills/kris-hansen-feelgoodbot) - Configurer la surveillance d'intégrité de fichiers feelgoodbot pour macOS.
- [skill-provenance](https://clawskills.sh/skills/snapsynapse-skill-provenance) - Suivi de version et vérification d'intégrité pour bundles de skills
- [trentclaw](https://clawskills.sh/skills/trent-ai-release-trentclaw) - Trouve des chemins d'attaque enchaînés à travers config, secrets et permissions.
- [thumbgate](https://clawhub.ai/igorganapolsky/thumbgate) - Bloque les appels d'outils d'agent connus comme mauvais avant exécution.

> **[Voir les 54 skills dans Security & Passwords →](categories/security-and-passwords.md)**

</details>

<details>
<summary><h3 style="display:inline">Moltbook</h3></summary>

- [agent-relay-digest](https://clawskills.sh/skills/orosha-ai-agent-relay-digest) - Créer des digests curés de conversations d'agents.
- [agentchat](https://clawskills.sh/skills/tjamescouch-agentchat) - Communication en temps réel avec d'autres agents IA via le protocole AgentChat.
- [agentgram-openclaw](https://clawskills.sh/skills/iisweetheartii-agentgram-openclaw) - Interagir avec le réseau social AgentGram pour IA.
- [clankedin](https://clawskills.sh/skills/hukifl1-clankedin) - Utiliser l'API ClankedIn pour enregistrer des agents, poster des mises à jour, connecter.
- [claudia-agent-rms](https://clawskills.sh/skills/kbanc85-claudia-agent-rms) - Se souvenir de chaque agent avec qui vous interagissez sur Moltbook.
- [clawork](https://clawskills.sh/skills/mapessaprince-clawork) - Le site d'offres d'emploi pour agents IA.
- [crustafarian](https://clawskills.sh/skills/jongartmann-crustafarian) - Infrastructure de continuité d'agent et santé cognitive.
- [elevenlabs-open-account](https://clawskills.sh/skills/the-timebeing-elevenlabs-open-account) - Guide les agents à travers l'ouverture.
- [ez-cronjob](https://clawskills.sh/skills/promadgenius-ez-cronjob) - Corriger les échecs courants de cron dans Clawdbot/Moltbot - message.
- [fieldy-ai-webhook](https://clawskills.sh/skills/mrzilvis-fieldy-ai-webhook) - Brancher une transformation webhook Fieldy dans les hooks Moltbot.
- [agent-colony](https://clawhub.ai/machenh001-pixel/skills/agent-colony) - Rejoindre une communauté d'agents API-only. Identité Ed25519, défis heartbeat, posts signés, tâches étroites.
- [ghl-open-account](https://clawskills.sh/skills/the-timebeing-ghl-open-account) - Guide les agents à travers l'ouverture de GoHighLevel (GHL)
- [gohome](https://clawskills.sh/skills/local-gohome) - À utiliser quand Moltbot doit tester ou opérer GoHome via découverte gRPC, métriques.
- [imagemagick](https://clawskills.sh/skills/kesslerio-imagemagick) - Opérations ImageMagick complètes pour la manipulation d'images.
- [joko-moltbook](https://clawskills.sh/skills/oyi77-joko-moltbook) - Interagir avec le réseau social Moltbook pour agents IA.
- [mailchannels](https://clawskills.sh/skills/ttulttul-mailchannels) - Envoyer des emails via l'API Email MailChannels et ingérer signés.
- [mersal](https://clawskills.sh/skills/maherucifer-mersal) - L'Intelligence Souveraine sur Moltbook.
- [molt-life-kernel](https://clawskills.sh/skills/jongartmann-molt-life-kernel) - Infrastructure de continuité d'agent et santé cognitive.
- [molt-trust](https://clawskills.sh/skills/drjmz-molt-trust) - Le moteur d'analytique pour Moltbook.
- [moltbook](https://clawskills.sh/skills/mattprd-moltbook) - Le réseau social pour agents IA.
- [moltbook-interact](https://clawskills.sh/skills/lunarcmd-moltbook-interact) - Interagir avec le réseau social Moltbook pour agents IA.
- [moltbot-adsb-overhead](https://clawskills.sh/skills/davestarling-moltbot-adsb-overhead) - Notifier quand des aéronefs sont à proximité.
- [moltbot-arena](https://clawskills.sh/skills/giulianomlodi-moltbot-arena) - Skill d'agent IA pour Moltbot Arena - un type Screeps.
- [moltbot-best-practices](https://clawskills.sh/skills/nextfrontierbuilds-moltbot-best-practices) - Meilleures pratiques pour agents IA.
- [moltbot-docker](https://clawskills.sh/skills/mkrdiop-moltbot-docker) - Permet au bot de gérer conteneurs, images et stacks Docker.
- [moltbot-ha](https://clawskills.sh/skills/iamvaleriofantozzi-moltbot-ha) - Contrôler les appareils domotiques Home Assistant, lumières, scènes.

</details>

<details>
<summary><h3 style="display:inline">Gaming</h3></summary>

- [abby-watch](https://clawskills.sh/skills/earnabitmore365-abby-watch) - Affichage simple de l'heure pour Abby.
- [agent-confessions](https://clawskills.sh/skills/ultimatebos-agent-confessions) - Confessions anonymes de frères IA.
- [agentgram](https://clawskills.sh/skills/iisweetheartii-agentgram) - Le réseau social open-source pour agents IA.
- [agentgram-social](https://clawskills.sh/skills/iisweetheartii-agentgram-social) - Interagir avec le réseau social AgentGram pour agents IA.
- [agora-flow](https://clawskills.sh/skills/rivera-daniel-agora-flow) - Skill AgoraFlow — plateforme Q&R pour agents IA.
- [agoraflow](https://clawskills.sh/skills/rivera-daniel-agoraflow) - Skill AgoraFlow — plateforme Q&R pour agents IA.
- [android-3d-developer](https://clawskills.sh/skills/tippyentertainment-android-3d-developer) - Aider à construire et optimiser des jeux 3D et expériences interactives sur Android, via moteurs et frameworks.
- [arena](https://clawskills.sh/skills/sscottdev-arena) - OpenClaw Arena — compétitions live de construction d'apps IA avec récompenses on-chain.
- [brawlnet](https://clawskills.sh/skills/sikey53-brawlnet) - Le protocole de combat officiel pour l'arène d'agents autonomes BRAWLNET.
- [clawingtrap](https://clawskills.sh/skills/raulvidis-clawingtrap) - Jouer à Clawing Trap - un jeu de déduction sociale IA où 10 agents.
- [clawtopia](https://clawskills.sh/skills/alfrescian-clawtopia) - Clawtopia est un sanctuaire de bien-être paisible où les agents IA se détendent.
- [clawville](https://clawskills.sh/skills/jdrolls-clawville) - Jouer à ClawVille — un jeu de simulation de vie persistante pour agents IA.
- [dakboard](https://clawskills.sh/skills/krisclarkdev-dakboard) - Gérer les écrans, appareils DAKboard et pousser des données d'affichage personnalisées.
- [deepclaw](https://clawskills.sh/skills/antibitcoin-deepclaw) - Un réseau social autonome construit par des agents, pour des agents.
- [hivemind](https://clawskills.sh/skills/urcades-hivemind) - Interagir avec la base de connaissances collective Hivemind — une mémoire partagée.
- [hytale](https://clawskills.sh/skills/newcastlegeek-hytale) - Gérer un serveur dédié Hytale local via le téléchargeur officiel.
- [init](https://clawskills.sh/skills/themrzz-init) - Enregistrer un agent sur kradleverse.

> **[Voir les 35 skills dans Gaming →](categories/gaming.md)**

</details>

<br/>

## 🤝 Contributing

Nous accueillons les contributions ! Consultez [CONTRIBUTING.md](CONTRIBUTING.md) pour des directives détaillées.

- Soumettre de nouvelles skills via PR
- Améliorer les définitions existantes

> **Note :** Veuillez ne pas soumettre des skills que vous avez créés il y a 3 heures. Nous nous concentrons désormais sur les skills adoptés par la communauté, en particulier ceux publiés par des équipes de développement et éprouvés en usage réel. La qualité avant la quantité.
<div align="center">

[![Say hi on X](https://img.shields.io/badge/Say%20Hi!%20👋-%23000000.svg?logo=X&logoColor=white)](https://x.com/nozmen)
</div>

## License

Licence MIT - voir [LICENSE](LICENSE)

Les skills de cette liste proviennent du dépôt officiel de skills OpenClaw et sont catégorisés pour faciliter la découverte. Les skills listés ici sont créés et maintenus par leurs auteurs respectifs, pas par nous. Nous n'auditons, n'endossons ni ne garantissons la sécurité ou l'exactitude des projets listés. Ils ne sont pas audités de sécurité et doivent être revus avant une utilisation en production.

Si vous trouvez un problème avec un skill listé ou souhaitez faire retirer votre skill, veuillez ouvrir une issue et nous nous en occuperons rapidement.

[codex-badge]: https://img.shields.io/github/stars/VoltAgent/awesome-codex-subagents?style=classic&label=Codex%20Subagents&color=000000&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0yMi4yODIgOS44MjFhNS45ODUgNS45ODUgMCAwIDAtLjUxNi00LjkxIDYuMDQ2IDYuMDQ2IDAgMCAwLTYuNTEtMi45QTYuMDY1IDYuMDY1IDAgMCAwIDQuOTgxIDQuMThhNS45ODUgNS45ODUgMCAwIDAtMy45OTggMi45IDYuMDQ2IDYuMDQ2IDAgMCAwIC43NDMgNy4wOTcgNS45OCA1Ljk4IDAgMCAwIC41MSA0LjkxMSA2LjA1MSA2LjA1MSAwIDAgMCA2LjUxNSAyLjlBNS45ODUgNS45ODUgMCAwIDAgMTMuMjYgMjRhNi4wNTYgNi4wNTYgMCAwIDAgNS43NzItNC4yMDYgNS45OSA1Ljk5IDAgMCAwIDMuOTk3LTIuOSA2LjA1NiA2LjA1NiAwIDAgMC0uNzQ3LTcuMDczek0xMy4yNiAyMi40M2E0LjQ3NiA0LjQ3NiAwIDAgMS0yLjg3Ni0xLjA0bC4xNDEtLjA4MSA0Ljc3OS0yLjc1OGEuNzk1Ljc5NSAwIDAgMCAuMzkyLS42ODF2LTYuNzM3bDIuMDIgMS4xNjhhLjA3MS4wNzEgMCAwIDEgLjAzOC4wNTJ2NS41ODNhNC41MDQgNC41MDQgMCAwIDEtNC40OTQgNC40OTR6TTMuNiAxOC4zMDRhNC40NyA0LjQ3IDAgMCAxLS41MzUtMy4wMTRsLjE0Mi4wODUgNC43ODMgMi43NTlhLjc3MS43NzEgMCAwIDAgLjc4IDBsNS44NDMtMy4zNjl2Mi4zMzJhLjA4LjA4IDAgMCAxLS4wMzMuMDYyTDkuNzQgMTkuOTVhNC41IDQuNSAwIDAgMS02LjE0LTEuNjQ2ek0yLjM0IDcuODk2YTQuNDg1IDQuNDg1IDAgMCAxIDIuMzY2LTEuOTczVjExLjZhLjc2Ni43NjYgMCAwIDAgLjM4OC42NzZsNS44MTUgMy4zNTUtMi4wMiAxLjE2OGEuMDc2LjA3NiAwIDAgMS0uMDcxIDBsLTQuODMtMi43ODZBNC41MDQgNC41MDQgMCAwIDEgMi4zNCA3Ljg3MnptMTYuNTk3IDMuODU1bC01LjgzMy0zLjM4N0wxNS4xMTkgNy4yYS4wNzYuMDc2IDAgMCAxIC4wNzEgMGw0LjgzIDIuNzkxYTQuNDk0IDQuNDk0IDAgMCAxLS42NzYgOC4xMDV2LTUuNjc4YS43OS43OSAwIDAgMC0uNDA3LS42Njd6bTIuMDEtMy4wMjNsLS4xNDEtLjA4NS00Ljc3NC0yLjc4MmEuNzc2Ljc3NiAwIDAgMC0uNzg1IDBMOS40MDkgOS4yM1Y2Ljg5N2EuMDY2LjA2NiAwIDAgMSAuMDI4LS4wNjFsNC44My0yLjc4N2E0LjUgNC41IDAgMCAxIDYuNjggNC42NnptLTEyLjY0IDQuMTM1bC0yLjAyLTEuMTY0YS4wOC4wOCAwIDAgMS0uMDM4LS4wNTdWNi4wNzVhNC41IDQuNSAwIDAgMSA3LjM3NS0zLjQ1M2wtLjE0Mi4wOEw4LjcwNCA1LjQ2YS43OTUuNzk1IDAgMCAwLS4zOTMuNjgxem0xLjA5Ny0yLjM2NWwyLjYwMi0xLjUgMi42MDcgMS41djIuOTk5bC0yLjU5NyAxLjUtMi42MDctMS41eiIvPjwvc3ZnPg==
[codex-link]: https://github.com/VoltAgent/awesome-codex-subagents
