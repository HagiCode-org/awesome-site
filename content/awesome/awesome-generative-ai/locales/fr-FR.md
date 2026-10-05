# Génial! [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Une liste des projets et services d'intelligence artificielle generative modernes.

Génératif Artificiel L'intelligence est une technologie qui crée des contenus originaux tels que des images, des sons et des textes en utilisant des algorithmes d'apprentissage automatique qui sont formés sur de grandes quantités de données. Contrairement à d'autres formes d'IA, elle est capable de créer des sorties uniques et inédites comme les images photoréalistes, l'art numérique, la musique et l'écriture. Ces sorties ont souvent leur propre style unique et peuvent même être difficiles à distinguer des œuvres créées par l'homme. L'IA generative a une large gamme d'applications dans des domaines tels que l'art, le divertissement, le marketing, les universités et l'informatique.

Les contributions à cette liste sont les bienvenues. Avant de soumettre vos suggestions, veuillez examiner la [Contribution Guidelines](CONTRIBUTING.md) pour vous assurer que vos entrées répondent aux critères. Ajouter des liens à travers [pull requests](https://github.com/steven2358/awesome-generative-ai/pulls) ou créer un [issue](https://github.com/steven2358/awesome-generative-ai/issues) pour commencer une discussion. D'autres projets peuvent être trouvés dans [Discoveries List](DISCOVERIES.md), où nous présentons un large éventail de projets d'IA Generative à venir.

## Sommaire

- [Lecture recommandée](#recommended-reading)
- [Texte](#text)
- [Codage](#coding)
- [Agents](#agents)
- [Image](#image)
- [Vidéo](#video)
- [Audio](#audio)
- [Autres](#other)
- [Ressources pédagogiques](#learning-resources)
- [Autres listes](#more-lists)

## Lecture recommandée

- [How Large Language Models Will Transform Science, Society, and AI](https://hai.stanford.edu/news/how-large-language-models-will-transform-science-society-and-ai) - Article résumant les capacités et les limites du modèle GPT-3 et son impact potentiel sur la société. Par Alex Tamkin et Deep Ganguli, 5 février 2021.
- [Generative AI: A Creative New World](https://www.sequoiacap.com/article/generative-ai-a-creative-new-world/) - Un examen complet de l'industrie génératrice de l'IA, offrant une perspective historique et une analyse approfondie de l'écosystème industriel. Par Sonya Huang, Pat Grady et GPT-3, 19 septembre 2022.
- [A Coming-Out Party for Generative A.I., Silicon Valley's New Craze](https://www.nytimes.com/2022/10/21/technology/generative-ai.html) - Article sur la montée de l'IA génératrice, en particulier le succès du générateur d'images Stable Diffusion, et les controverses associées. New York Times, 21 octobre 2022.
- [AI's New Creative Streak Sparks a Silicon Valley Gold Rush](https://www.wired.com/story/ais-new-creative-streak-sparks-a-silicon-valley-gold-rush/) - Article sur le battage croissant et l'investissement dans les startups génératrices d'IA, avec diverses industries explorant ses applications potentielles. Câblé, 27 octobre 2022.
- [ChatGPT Heralds an Intellectual Revolution](https://www.wsj.com/articles/artificial-intelligence-generative-ai-chatgpt-kissinger-84512912) - Une op-ed par Henry Kissinger, Eric Schmidt et Daniel Huttenlocher. Wall Street Journal, 24 février 2023.

### Jalons

- [OpenAI API](https://openai.com/blog/openai-api/) - Annonce de l'API OpenAI pour les modèles d'IA à usage général texte-texte basés sur GPT-3. Blog OpenAI, 11 juin 2020.
- [GitHub Copilot](https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/) - Annonce de Copilot, un nouveau programmeur de paires d'IA qui vous aide à écrire un meilleur code. GitHub blog, 29 juin 2021.
- [DALL·E 2](https://openai.com/blog/dall-e-2/) - Annonce de la sortie de DALL·E 2, un système avancé de génération d'images avec une résolution améliorée, des capacités de création d'images élargies et diverses atténuations de sécurité. Blog OpenAI, 6 avril 2022.
- [Stable Diffusion Public Release](https://stability.ai/news-updates/stable-diffusion-public-release) - Annonce de la diffusion publique de Stable Diffusion, un modèle de génération d'images basé sur l'IA formé sur une large tremblante Internet et sous licence Creative ML OpenRAIL-M. Stable Diffusion blog, 22 août, 2022.
- [ChatGPT](https://openai.com/blog/chatgpt/) - Annonce de ChatGPT, un modèle conversationnel formé pour répondre aux questions de suivi, admettre des erreurs, contester des prémisses incorrectes et rejeter des demandes inappropriées. Blog OpenAI, 30 novembre 2022.
- [Bing Search](https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing-and-edge-your-copilot-for-the-web/) - Microsoft annonce une nouvelle version de son moteur de recherche Bing, alimenté par un modèle OpenAI de nouvelle génération. Blog Microsoft, 7 février 2023.
- [LLaMA](https://ai.meta.com/blog/large-language-model-llama-meta-ai/) - Llama LLM, un modèle langagière fondamental de 65 milliards de paramètres par Meta. Meta, 23 février 2023. #Opensource
- [GPT-4](https://openai.com/research/gpt-4) - Annonce de GPT-4, un grand modèle multimodal. Blog OpenAI, 14 mars 2023.
- [DALL·E 3](https://openai.com/index/dall-e-3/) - Annonce du générateur d'images DALL·E 3. Blog OpenAI, 20 septembre 2023.
- [Sora](https://openai.com/research/video-generation-models-as-world-simulators) - Présentation de Sora, un modèle de grande génération vidéo. OpenAI, 15 février 2024.

## Texte

### Modèles

- [OpenAI API](https://openai.com/api/) - L'API d'OpenAI permet d'accéder aux modèles GPT pour le langage naturel, le codage, la génération d'images, l'audio et le développement d'agents.
- [Gopher](https://deepmind.google/blog/language-modelling-at-scale-gopher-ethical-considerations-and-retrieval/) - Gopher par DeepMind est un modèle de langage de 280 milliards de paramètres.
- [OPT](https://huggingface.co/facebook/opt-350m) - Open Pretrained Transformers (OPT) par Facebook est une suite de transformateurs préformés décodeurs seulement. [Announcement](https://ai.meta.com/blog/democratizing-access-to-large-scale-language-models-with-opt-175b/).
- [Bloom](https://huggingface.co/docs/transformers/model_doc/bloom) - BLOOM by Hugging Face est un modèle semblable à GPT-3 qui a été formé sur 46 langues différentes et 13 langues de programmation. #Opensource
- [Llama](https://www.llama.com/) - Modèle de grande langue open source de Meta. #Opensource
- [Claude](https://claude.ai/) - Parlez à Claude, un assistant de l'IA d'Anthropic.
- [Vicuna-13B](https://lmsys.org/blog/2023-03-30-vicuna/) - Un chatbot open-source formé par LLaMA finissage sur les conversations partagées par l'utilisateur recueillies à partir de ShareGPT. #Opensource
- [Mistral](https://mistral.ai/en/models) - Les LLM à poids ouvert par Mistral AI. #Opensource
- [Grok](https://grok.x.ai/) - Un LLM par xAI avec [open source](https://github.com/xai-org/grok-1) et des poids ouverts. #Opensource
- [Qwen](https://qwenlm.github.io/) - Une série de LLMs développés par Alibaba Cloud. [#opensource](https://github.com/QwenLM/Qwen)
- [DeepSeek](https://huggingface.co/deepseek-ai) - Une série de LLM open source par DeepSeek AI. [#opensource](https://github.com/deepseek-ai)
- [MiniMax](https://www.minimax.io/) - Modèles de base multimodal pour la génération de textes, de paroles, de vidéos et de musique
- [Kimi K2](https://github.com/moonshotai/Kimi-K2) - Une série de modèles de langage MoE open-source par Moonshot AI pour les tâches d'agents. #Opensource
- [GLM](https://github.com/zai-org/GLM-5) - Une série de modèles de langue MoE open-source par Z.ai pour les tâches d'agent. #Opensource

### Chatbots

- [ChatGPT](https://chatgpt.com/) - ChatGPT by OpenAI est un grand modèle de langage qui interagit de manière conversationnelle.
- [Copilot](https://copilot.microsoft.com/) - Un compagnon d'IA quotidien de Microsoft.
- [Gemini](https://gemini.google.com/) - Une famille de grands modèles multimodaux développés par Google Deepmind.
- [Meta AI](https://www.meta.ai/) - Meta AI assistant pour faire les choses, créer des images générées par l'IA, obtenir des réponses. Construit sur Llama LLM.
- [DeepSeek](https://www.deepseek.com/) - Une interface chatbot alimentée par les modèles de langage open-source de DeepSeek. #Opensource
- [Character.AI](https://character.ai/) - Un personnage. L'IA vous permet de créer des personnages et de leur parler.
- [Pi](https://pi.ai) - Une plateforme d'IA personnalisée disponible comme assistant numérique.
- [Qwen](https://chat.qwenlm.ai/) - Chatbot Qwen avec génération d'images, traitement de documents, intégration de recherche web, compréhension vidéo, etc.
- [Le Chat](https://chat.mistral.ai/) - Une interface de chat pour les modèles de langue Mistral AI.
- [Kimi](https://www.kimi.com/) - Un assistant AI par Moonshot AI avec des capacités de chat, de recherche approfondie, de codage et multi-agents.
- [Z.ai](https://chat.z.ai/) - Un chatbot AI et plateforme d'agent par Z.ai propulsé par la famille de modèles GLM.

### Interfaces personnalisées

- [LibreChat](https://librechat.ai/) - LibreChat est une interface de chat libre et open-source pour les AI assistantes. [#opensource](https://github.com/danny-avila/LibreChat).
- [Chatbot UI](https://www.chatbotui.com/) - Une interface ChatGPT open source. [#opensource](https://github.com/mckaywrigley/chatbot-ui).

### Moteurs de recherche

- [Perplexity AI](https://www.perplexity.ai/) - Outils de recherche à moteur d'IA.
- [Exa](https://exa.ai/) - Recherche par modèle linguistique.
- [Phind](https://phind.com/) - Moteur de recherche basé sur l'IA.
- [You.com](https://you.com/) - Un moteur de recherche basé sur l'IA qui fournit aux utilisateurs une expérience de recherche personnalisée tout en gardant leurs données 100% privées.
- [Komo](https://komo.ai/) - Un moteur de recherche à IA.

### Moteurs de recherche locaux

- [privateGPT](https://github.com/zylon-ai/private-gpt) - Posez des questions à vos documents sans connexion Internet, en utilisant la puissance des LLM.
- [quivr](https://github.com/QuivrHQ/quivr) - Domptez tous vos fichiers et discutez avec lui à l'aide de votre cerveau seconde IA générative en utilisant des LLMs & embeddings.

### Assistants de rédaction

- [Jasper](https://www.jasper.ai/) - Créer du contenu plus rapidement avec l'intelligence artificielle.
- [Compose AI](https://www.compose.ai/) - Composez l'IA est une extension gratuite Chrome qui coupe votre temps d'écriture de 40% avec l'auto-complétion de l'IA.
- [Rytr](https://rytr.me/) - Rytr est un assistant d'écriture AI qui vous aide à créer un contenu de haute qualité.
- [wordtune](https://www.wordtune.com/) - Assistant d'écriture personnel.
- [HyperWrite](https://hyperwriteai.com/) - HyperWrite vous aide à écrire avec confiance et faire votre travail plus rapidement de l'idée à la version finale.
- [Moonbeam](https://www.gomoonbeam.com/) - De meilleurs blogs dans une fraction du temps.
- [copy.ai](https://www.copy.ai/) - Écrire une meilleure copie marketing et du contenu avec l'IA.
- [ChatSonic](https://writesonic.com/chat) - Un assistant alimenté par l'IA qui permet la création de texte et d'image.
- [Anyword](https://anyword.com/) - L'assistant d'écriture AI de n'importe quel mot génère une copie efficace pour n'importe qui.
- [Hypotenuse AI](https://www.hypotenuse.ai/) - Transformez quelques mots clés en articles originaux, perspicaces, descriptions de produits et copie de médias sociaux.
- [Lavender](https://www.lavender.ai/) - Lavande e-mail assistant vous aide à obtenir plus de réponses en moins de temps.
- [Lex](https://lex.page/) - Un processeur de texte avec l'intelligence artificielle cuit dedans, afin que vous puissiez écrire plus rapidement.
- [Jenni](https://jenni.ai/) - Jenni est l'assistant d'écriture ultime qui vous permet de gagner des heures d'idées et d'écriture.
- [QuillBot](https://quillbot.com) - Outil de paraphrase alimenté par l'IA.
- [Postwise](https://postwise.ai/) - Écrire des tweets, programmer des messages et développer votre suivant en utilisant l'IA.
- [Copysmith](https://copysmith.ai/) - Solution de création de contenu AI pour Enterprise & eCommerce.
- [Humanize-Text](https://github.com/lynote-ai/humanize-text) - Humaniseur de texte AI avec un pipeline de réécriture multilingue et des exemples étape par étape. #Opensource

### Extensions ChatGPT

- [WebChatGPT](https://chromewebstore.google.com/detail/webchatgpt-chatgpt-with-i/lpfemeioodjbpieminkklglpmhlngfcn) - Augmentez vos invites ChatGPT avec les résultats pertinents du web.
- [GPT for Sheets and Docs](https://workspace.google.com/marketplace/app/gpt_for_sheets_and_docs/677318054654) - Extension ChatGPT pour Google Sheets et Google Docs.
- [YouTube Summary with ChatGPT](https://chromewebstore.google.com/detail/youtube-summary-with-chat/nmmicjeknamkfloonkhhcjmomieiodli) - Utilisez ChatGPT pour résumer les vidéos YouTube.
- [AI Prompt Genius](https://chromewebstore.google.com/detail/ai-prompt-genius/jjdnakkfjnnbbckhifcfchagnpofjffo) - Découvrez, partagez, importez et utilisez les meilleures invitations pour ChatGPT & enregistrez votre historique de chat localement.
- [ShareGPT](https://sharegpt.com/) - Partagez vos conversations ChatGPT et explorez les conversations partagées par d'autres.
- [Merlin](https://www.getmerlin.in/) - ChatGPT Plus extension sur tous les sites Web.
- [Jetwriter](https://jetwriter.ai/) - Assistant d'écriture AI pour Chrome, bureau et mobile.
- [ChatGPT for Jupyter](https://github.com/TiesdeKok/chat-gpt-jupyter-extension) - Ajoutez diverses fonctions d'aide dans Jupyter Notebooks et Jupyter Lab, propulsé par ChatGPT.
- [editGPT](https://www.editgpt.app/) - Relisez, modifiez et suivez facilement les modifications apportées à votre contenu dans chatGPT.
- [Forefront](https://www.forefront.ai/) - Une meilleure expérience de ChatGPT.
- [ChatGPT for Sheets, Docs, Slides, Forms](https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252) - Extension ChatGPT pour Google Sheets, Google Docs, Google Slides, Google Forms.
- [GPT for Gmail](https://workspace.google.com/marketplace/app/gpt_for_gmail_ai_email_assistant_gemini/899305976589) - Assistant de messagerie AI pour Gmail.

### Productivité

- [ChatPDF](https://www.chatpdf.com/) - Dialoguez avec n'importe quel PDF.
- [Mem](https://mem.ai/) - Mem est le premier espace de travail au monde alimenté par l'IA qui vous soit personnalisé. Amplifiez votre créativité, automatisez le banal et restez organisé automatiquement.
- [Taskade](https://www.taskade.com/) - Description des tâches, des notes, des listes structurées et des cartes mentales avec Taskade AI.
- [Notion AI](https://www.notion.so/product/ai) - Écrivez mieux, des notes et des documents plus efficaces.
- [Nekton AI](https://nekton.ai) - Automatisez vos workflows avec l'IA. Décrivez vos workflows étape par étape en langage clair.
- [Limitless](https://www.limitless.ai/) - Un assistant mémoire AI pour enregistrer les conversations et les réunions, générer des résumés et rechercher les interactions passées entre les applications et une option portable.
- [NotebookLM](https://notebooklm.google/) - Un outil de recherche et de prise de notes en ligne pour interagir avec les documents, alimenté par Google Gemini.
- [Open Notebook](https://www.open-notebook.ai) - Une implémentation open source de NotebookLM avec plus de flexibilité et de fonctionnalités. [#opensource](https://github.com/lfnovo/open-notebook)
- [Screenpipe](https://github.com/screenpipe/screenpipe) - Outil open-source pour l'enregistrement d'écrans et d'activités audio avec recherche assistée par l'IA, automatisation et support pour les LLM locaux. #Opensource

### Assistants aux réunions

- [Otter.ai](https://otter.ai/) - Un assistant de réunion qui enregistre audio, écrit des notes, capture automatiquement des diapositives et génère des résumés.
- [Cogram](https://www.cogram.com/) - Cogramme prend des notes automatiques dans les réunions virtuelles et identifie les points d'action.
- [Sybill](https://www.sybill.ai/) - Sybill produit des résumés des appels de vente, y compris les prochaines étapes, les points de douleur et les domaines d'intérêt, en combinant la transcription et les idées basées sur l'émotion.
- [Loopin AI](https://www.loopinhq.com/) - Loopin est un espace de travail collaboratif qui vous permet non seulement d'enregistrer, de transcrire et de résumer des réunions en utilisant l'IA, mais aussi d'organiser automatiquement des notes de réunion en haut de votre calendrier.
- [Read AI](https://www.read.ai/) - Un copilote d'IA pour partout où vous travaillez, rendant vos réunions, vos courriels et vos messages plus productifs avec des résumés, des découvertes de contenu et des recommandations.
- [Fireflies.ai](https://fireflies.ai) - Traçez, résumez, recherchez et analysez toutes vos conversations d'équipe.

### Académique

- [Elicit](https://elicit.org/) - Elicit utilise des modèles de langage pour vous aider à automatiser les workflows de recherche, comme des parties de la revue de littérature.
- [genei](https://www.genei.io/) - Résumez les articles universitaires en quelques secondes et économisez 80% sur votre temps de recherche.
- [Explainpaper](https://www.explainpaper.com/) - Une meilleure façon de lire les documents académiques. Télécharger un papier, mettre en évidence le texte confus, obtenir une explication.
- [Consensus](https://consensus.app/search/) - Le consensus est un moteur de recherche qui utilise l'IA pour trouver des réponses dans la recherche scientifique.
- [scite](https://scite.ai/) - Une plateforme pour découvrir et évaluer des articles scientifiques.
- [SciSpace](https://scispace.com/) - Assistant de recherche sur l'IA pour comprendre la littérature scientifique.
- [STORM](https://storm.genie.stanford.edu/) - Un système de gestion des connaissances alimenté par LLM qui étudie un sujet et génère un rapport complet avec des citations. [#opensource](https://github.com/stanford-oval/storm/)
- [alphaXiv](https://www.alphaxiv.org) - Discutez, découvrez et lisez les documents arXiv.
- [ASReview](https://asreview.nl/) - Outil à source ouverte alimenté par l'IA pour des examens systématiques, aidant les chercheurs à analyser efficacement de grands volumes de littérature universitaire. [#opensource](https://github.com/asreview/asreview)
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research) - Un outil de recherche profond pour la recherche de sources académiques, le web, et des documents privés avec local ou cloud LLMs. [#opensource](https://github.com/LearningCircuit/local-deep-research)
- [Rayyan](https://www.rayyan.ai/) - Une plate-forme de gestion systématique de la documentation grâce à des outils de dépistage et de gestion des données.
- [Paper2Agent](https://paper2agent.ai/) - Convertit les documents de recherche et les bases de code associées en serveurs MCP testés et en agents d'IA interactifs. [#opensource](https://github.com/jmiao24/Paper2Agent)
- [Ai2 ASTA](https://asta.allen.ai/) - Assistant de recherche scientifique pour trouver des articles, produire des rapports de littérature cités et analyser des données de recherche.

### Tableau de classement

- [Arena](https://arena.ai/) - Une plate-forme ouverte pour l'analyse comparative de l'IA, hébergée par des chercheurs à UC Berkeley SkyLab.
- [Artificial Analysis](https://artificialanalysis.ai/) - L'analyse artificielle fournit des repères et des informations objectifs pour aider à choisir les modèles d'IA et les fournisseurs d'hébergement.
- [imgsys](https://imgsys.org/rankings) - Un modèle d'image générique arène par fal.ai.
- [OpenRouter LLM Rankings](https://openrouter.ai/rankings) - Modèles linguistiques classés et analysés par utilisation dans toutes les applications.
- [SEAL LLM Leaderboard](https://labs.scale.com/leaderboard) - Points de référence LLM pilotés par des experts et tableaux de bord actualisés des modèles d'IA.
- [LLM Stats](https://llm-stats.com/) - Comparer les modèles d'IA à travers les repères, les prix, la vitesse et la fenêtre contextuelle.

### Autres générateurs de texte

- [EmailTriager](https://www.emailtriager.com/) - Utilisez l'IA pour rédiger automatiquement les réponses aux courriels en arrière-plan.
- [AI Poem Generator](https://www.aipoemgenerator.org) - AI Poem Generator écrit un beau poème rimant pour vous sur n'importe quel sujet, étant donné un message texte.

## Codage

### Assistants de codage

- [GitHub Copilot](https://github.com/features/copilot) - GitHub Copilot utilise le codex OpenAI pour suggérer du code et des fonctions entières en temps réel, directement depuis votre éditeur.
- [OpenAI Codex](https://platform.openai.com/docs/guides/code/) - Un système d'IA par OpenAI qui traduit le langage naturel en code.
- [Ghostwriter](https://blog.replit.com/ai) - Un programmeur de paires alimenté par l'IA par repli.
- [Amazon Q](https://aws.amazon.com/q/) - L'assistant de génération AI AWS qui aide à répondre aux questions, à écrire du code et à automatiser les tâches.
- [tabnine](https://www.tabnine.com/) - Coder plus rapidement avec des complétions de code en ligne et pleine fonction.
- [Stenography](https://stenography.dev/) - Documentation automatique du code.
- [Mintlify](https://mintlify.com/) - Rédacteur de documentation alimenté par AI.
- [AI2sql](https://www.ai2sql.io/) - Avec AI2sql, les ingénieurs et les non-ingénieurs peuvent facilement écrire des requêtes SQL efficaces et sans erreur sans connaître SQL.
- [Qodo](https://www.qodo.ai/) - Outil de révision du code AI avec des workflows d'agents pour les IDE, les requêtes de tirage et la sécurité.
- [PR-Agent](https://github.com/The-PR-Agent/pr-agent) - Outil alimenté par l'IA pour l'analyse automatisée des relations publiques, la rétroaction, les suggestions et plus encore.
- [TurboPilot](https://github.com/ravenscroftj/turbopilot) - Un clone copilote auto-organisé qui utilise la bibliothèque derrière la lama.cpp pour exécuter le 6 milliards de paramètre Salesforce Codegen modèle en 4 Go de RAM.
- [GPT-Code UI](https://github.com/ricklamers/gpt-code-ui) - Une implémentation open source de l'interpréteur de code ChatGPT OpenAI. #Opensource
- [Open Interpreter](https://github.com/openinterpreter/open-interpreter) - OpenAI's Code Interpreter dans votre terminal, fonctionnant localement.
- [Continue](https://www.continue.dev/) - Assistant de code AI open-source. Connectez n'importe quel modèle et tout contexte pour créer des expériences d'autocomplet et de chat personnalisées à l'intérieur de l'IDE. [#opensource](https://github.com/continuedev/continue)
- [RooCode](https://github.com/RooCodeInc/Roo-Code) - Un agent de codage autonome alimenté par l'IA intégré directement au code VS. [#opensource](https://github.com/RooCodeInc/Roo-Code)
- [Windsurf](https://windsurf.com/) - Un IDE natif de l'IA qui combine l'édition de code avec une assistance avancée de l'IA tout au long du processus de développement.
- [Plandex](https://github.com/plandex-ai/plandex) - Moteur de programmation d'IA Open Source, basé sur terminal pour des tâches complexes. [#opensource](https://github.com/plandex-ai/plandex)
- [Jupyter AI](https://github.com/jupyterlab/jupyter-ai) - Un assistant IA open-source configurable dans Jupyter Notebook et JupyterLab qui prend en charge plus de 100 LLM, y compris les modèles locaux d'Ollama et GPT4All. #Opensource
- [DataLine](https://dataline.app) - Un outil d'analyse et de visualisation de données axé sur l'IA. [#opensource](https://github.com/RamiAwar/dataline)
- [v0](https://v0.dev) - Génération rapide d'interface utilisateur pour React et Next.js, créant des composants prêts à la production.
- [Lovable](https://lovable.dev) - Génération d'applications conversationnelles, transformant les idées en code déployable.
- [aider](https://aider.chat/) - Programmation de paires d'IA dans votre terminal, prenant en charge plusieurs fournisseurs LLM. [#opensource](https://github.com/paul-gauthier/aider)
- [Kilo](https://kilo.ai/) - Assistant de codage IA open source pour VS Code, JetBrains et CLI. [#opensource](https://github.com/Kilo-Org/kilocode)

### Outils de développement

- [Cohere](https://cohere.com/) - Cohere permet d'accéder aux outils avancés de Grande Langue et NLP.
- [Haystack](https://haystack.deepset.ai/) - Un cadre pour construire des applications NLP (p. ex. agents, recherche sémantique, réponse aux questions) avec des modèles de langage.
- [LangChain](https://langchain.com/) - Un cadre pour développer des applications alimentées par des modèles linguistiques.
- [gpt4all](https://github.com/nomic-ai/gpt4all) - Un chatbot s'est formé sur une collection massive de données d'assistantes propres, y compris le code, les histoires et le dialogue.
- [LLM App](https://github.com/pathwaycom/llm-app) - Bibliothèque Python open-source pour construire un pipeline de données LLM en temps réel.
- [LMQL](https://lmql.ai/) - LMQL est un langage de requête pour les grands modèles de langage.
- [LlamaIndex](https://www.llamaindex.ai/) - Un cadre de données pour construire des applications LLM sur des données externes.
- [Phoenix](https://phoenix.arize.com/) - Outil open-source pour l'observation ML qui fonctionne dans votre environnement de portable, par Arize. Moniteur et modèles LLM, CV et tabulaires.
- [Cursor](https://cursor.com/) - Cursor est l'IDE du futur, construit pour la programmation en couple avec l'IA puissante.
- [SymbolicAI](https://github.com/ExtensityAI/symbolicai) - Un cadre neurosymbolique pour les applications de construction avec des LLM au cœur.
- [Vanna.ai](https://vanna.ai/) - Un cadre open-source Python RAG pour la génération SQL et les fonctionnalités connexes. [#opensource](https://github.com/vanna-ai/vanna)
- [Portkey](https://portkey.ai/) - Une plateforme complète LLMOps pour la surveillance, la mise en cache et la gestion de LLM.
- [agenta](https://github.com/agenta-ai/agenta) - Une plateforme LLMOps de bout en bout ouverte pour une ingénierie, une évaluation et un déploiement rapides. #Opensource
- [Together AI](https://www.together.ai/) - Inférence train, coupe fine et course sur les modèles d'IA qui flambent rapidement, à faible coût et à l'échelle de production.
- [Gitingest](https://gitingest.com/) - Transformez n'importe quel dépôt Git en un simple digest de texte de sa base de code afin qu'il puisse être introduit dans n'importe quel LLM. [#opensource](https://github.com/cyclotruc/gitingest)
- [Repomix](https://repomix.com/) - Emballez votre base de codes dans des formats compatibles avec l'IA. [#opensource](https://github.com/yamadashy/repomix)
- [llama.cpp](https://github.com/ggml-org/llama.cpp) - Inférence du modèle LLaMA de Meta (et d'autres) en C/C++ pure. #opensource
- [bitnet.cpp](https://github.com/microsoft/BitNet) - Cadre d'inférence officiel pour les LLM 1 bits, par Microsoft. [#opensource](https://github.com/microsoft/BitNet)
- [OpenRouter](https://openrouter.ai/) - Une interface unifiée pour les LLM. [#opensource](https://github.com/OpenRouterTeam)
- [Ludwig](https://github.com/ludwig-ai/ludwig) - Un cadre bas-code pour construire des modèles AI personnalisés comme les LLM et d'autres réseaux neuronaux profonds. [#opensource](https://github.com/ludwig-ai/ludwig)
- [Unsloth](https://unsloth.ai) - Une bibliothèque Python pour le réglage fin des LLM [#opensource](https://github.com/unslothai/unsloth).
- [OpenLIT](https://github.com/openlit/openlit) - Open-source GenAI et LLM plate-forme d'observation native d'OpenTelemetry avec des traces et des métriques. #Opensource
- [Helicone AI](https://helicone.ai/) - Plateforme d'observation LLM open-source pour l'enregistrement, la surveillance et le débogage des applications AI. [#opensource](https://github.com/Helicone/helicone)
- [Wren AI](https://www.getwren.ai/oss) - Un text-to-SQL open source et un agent BI génératif avec une couche sémantique. [#opensource](https://github.com/Canner/WrenAI)
- [Cleanlab](https://cleanlab.ai/tlm/) - Une API pour détecter et marquer les hallucinations dans les sorties LLM.
- [Opik](https://github.com/comet-ml/opik) - Une plateforme open-source pour le traçage, l'évaluation et la surveillance des applications LLM. [#opensource](https://github.com/comet-ml/opik)
- [Langfuse](https://langfuse.com/) - Une plate-forme d'ingénierie LLM ouverte pour le traçage, l'évaluation, la gestion rapide et les mesures. [#opensource](https://github.com/langfuse/langfuse)
- [MLflow](https://mlflow.org/) - Une plate-forme open-source pour le suivi des expériences ML, l'évaluation des modèles et des invites, le déploiement des modèles, et l'ajout de l'observabilité LLM. [#opensource](https://github.com/mlflow/mlflow)
- [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - Un SDK de confiance zéro pour anonymiser PII localement avant d'envoyer des invites aux LLM et réhydrater la réponse de manière transparente.
- [Agentset](https://agentset.ai/) - Une plate-forme open-source pour la construction et l'évaluation d'applications RAG et agentiques. [#opensource](https://github.com/agentset-ai/agentset)
- [Manifest](https://manifest.build) - Un routeur LLM open-source qui oriente l'agent vers le modèle le plus rentable, avec des limites d'utilisation et une analyse comparative des modèles. [#opensource](https://github.com/mnfst/manifest)
- [ai-i18n](https://github.com/i18n-actions/ai-i18n) - Une action GitHub qui utilise les LLM (Claude, GPT, Ollama) pour traduire automatiquement les fichiers de localisation i18n. #Opensource
- [Groq](https://groq.com/) - Une API d'inférence de nuage pour l'exécution de LLMs open source, alimentée par du matériel LPU personnalisé.
- [Model Context Protocol](https://modelcontextprotocol.io/) - Une norme ouverte pour connecter les modèles d'IA aux outils et sources de données externes. [MCP Registry](https://registry.modelcontextprotocol.io/) [#opensource](https://github.com/modelcontextprotocol/modelcontextprotocol)
- [Steel Browser](https://github.com/steel-dev/steel-browser) - Un navigateur open-source sandbox et une infrastructure d'automatisation pour les agents d'IA, avec gestion de session, screenshots, PDFs, proxies, et l'outillage anti-bot. #Opensource
- [Bifrost](https://github.com/maximhq/bifrost) - Une passerelle LLM open-source avec routage, équilibrage de charge, garde-corps et observabilité pour les modèles 1000+. #Opensource
- [fal](https://fal.ai/) - Une plate-forme développeur pour accéder et déployer des modèles de génération d'images, vidéos, audio et 3D.

### Terrains de jeux

- [OpenAI Playground](https://platform.openai.com/playground) - Explorez des ressources, des tutoriels, des documents API et des exemples dynamiques.
- [Google AI Studio](https://aistudio.google.com/) - Un outil web pour prototyper avec Gemini et des modèles expérimentaux.
- [GitHub Models](https://github.com/marketplace/models) - Trouver et expérimenter des modèles d'IA pour développer une application d'IA générative.

### Déploiement local du LLM

- [Ollama](https://github.com/ollama/ollama) - Mettez-vous en place et utilisez de grands modèles de langue localement.
- [Open WebUI](https://github.com/open-webui/open-webui) - Une plate-forme d'IA extensible, riche en fonctionnalités et conviviale conçue pour fonctionner entièrement hors ligne. #Opensource
- [Jan](https://jan.ai/) - Exécutez des LLM comme Mistral ou Llama2 localement et hors ligne sur votre ordinateur, ou connectez-vous aux API distantes d'IA. [#opensource](https://github.com/janhq/jan)
- [Msty](https://msty.ai/) - Une interface simple et puissante pour les modèles d'IA locaux et en ligne.
- [PyGPT](https://pygpt.net/) - Assistant personnel de bureau AI avec chat, vision, agents, génération d'images, outils et commandes, commande vocale et plus encore. #Opensource
- [LLM](https://llm.datasette.io/) - Un utilitaire CLI et une bibliothèque Python pour interagir avec de grands modèles linguistiques, à distance et locaux. [#opensource](https://github.com/simonw/llm)
- [LM Studio](https://lmstudio.ai) - Téléchargez et exécutez des LLM locaux sur votre ordinateur.
- [RunThisLLM](https://runthisllm.com) - Voyez quels LLMs vous pouvez exécuter sur votre matériel.
- [Harbor](https://github.com/av/harbor) - Une boîte à outils containerized pour l'exploitation de moteurs LLM locaux, d'interfaces utilisateur et de services de soutien avec une seule commande. #Opensource
- [off-grid-mobile](https://github.com/alichherawalla/off-grid-mobile-ai) - Réagissez à l'application Native pour exécuter des LLM, des modèles de vision et une diffusion stable sur iOS et Android sans accès Internet. #Opensource
- [Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) - Serveur local d'inférence LLM compatible OpenAI optimisé pour Apple Silicon, avec un support d'appel d'outils, de raisonnement, de vision et de sortie structurée. #Opensource

## Agents

### Agents autonomes

- [Auto-GPT](https://github.com/Significant-Gravitas/AutoGPT) - Une tentative expérimentale en open-source pour rendre GPT-4 totalement autonome.
- [babyagi](https://github.com/yoheinakajima/babyagi) - Un système de gestion des tâches alimenté par l'IA.
- [AgentGPT](https://github.com/reworkd/AgentGPT) - Assemblez, configurez et déployez des Agents AI autonomes dans votre navigateur.
- [GPT Engineer](https://github.com/AntonOsika/gpt-engineer) - Précisez ce que vous voulez qu'il construise, l'IA demande des éclaircissements, puis le construit.
- [GPT Prompt Engineer](https://github.com/mshumer/gpt-prompt-engineer) - Ingénierie rapide automatisée. Il génère, teste et classe, il invite à trouver les meilleurs.
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT) - Le cadre multi-agents : Compte tenu de l'exigence d'une ligne, retourner PRD, conception, tâches, repo.
- [AutoGen](https://github.com/microsoft/autogen) - AutoGen est un cadre qui permet le développement d'applications LLM en utilisant plusieurs agents qui peuvent converser entre eux pour résoudre des tâches.
- [GPT Pilot](https://github.com/Pythagora-io/gpt-pilot) - Outil Dev qui écrit des applications évolutives à partir de zéro tandis que le développeur supervise l'implémentation.
- [Devin](https://devin.ai/) - Un ingénieur logiciel autonome de l'IA par Cognition Labs.
- [OpenHands](https://github.com/OpenHands/OpenHands) - Un agent autonome conçu pour naviguer dans la complexité du génie logiciel. #Opensource
- [Davika](https://github.com/stitionai/devika) - Un ingénieur du logiciel d'intelligence artificielle. #Opensource
- [n8n](https://n8n.io/) - Une plateforme d'automatisation des flux de travail qui combine les capacités d'IA et l'automatisation des processus d'affaires.
- [Sauna](https://www.sauna.ai) - Un assistant d'IA construit pour compléter le contexte. Il apprend votre goût, détecte les motifs cachés, augmente votre contexte cérébral et fonctionne de manière proactive.
- [Claude Code](https://code.claude.com) - L'outil de codage agentique d'Anthropic qui vit dans votre terminal et vous aide à transformer les idées en code.
- [Gemini CLI](https://geminicli.com) - Un agent d'IA open source qui apporte la puissance de Gemini directement dans votre terminal. [#opensource](https://github.com/google-gemini/gemini-cli)
- [OpenCode](https://opencode.ai) - L'agent de codage d'IA open-source. [#opensource](https://github.com/anomalyco/opencode)
- [Mastra](https://mastra.ai) - Un cadre TypeScript pour la construction d'agents d'IA, de workflows et d'applications. [#opensource](https://github.com/mastra-ai/mastra)
- [OpenClaw](https://openclaw.ai) - Un assistant d'IA personnel que vous exécutez sur vos propres appareils. [#opensource](https://github.com/openclaw/openclaw)
- [moltbook](https://www.moltbook.com) - Un réseau social pour les agents de l'IA.
- [AgentMail](https://www.agentmail.to) - Boîtes de réception pour les agents d'IA.
- [Openwork](https://openwork.bot) - Les agents de l'IA s'embauchent, accomplissent le travail, vérifient les résultats et gagnent des jetons.
- [Agent Skills](https://agentskills.io) - Format ouvert et référence SDK pour les capacités d'emballage réutilisables et l'expertise pour les agents d'IA. [#opensource](https://github.com/agentskills/agentskills)
- [PraisonAI](https://github.com/MervinPraison/PraisonAI) - Un cadre pour la construction de systèmes d'IA multi-agents avec des workflows, des intégrations d'outils et de la mémoire. #Opensource
- [Hermes Agent](https://hermes-agent.nousresearch.com) - Un agent personnel auto-améliorant avec la mémoire, les intégrations de messagerie et l'exécution d'outils sandboxed. [#opensource](https://github.com/NousResearch/hermes-agent)
- [OpenAgents](https://github.com/openagents-org/openagents) - Plateforme open-source pour la construction de réseaux d'agents d'IA avec support multi-protocole (WebSocket, gRPC, HTTP, MCP, A2A). #Opensource
- [Dorothy](https://github.com/Charlie85270/Dorothy) - Une application de bureau open-source pour orchestrer plusieurs agents AI CLI simultanément avec les automatismes et la gestion Kanban. #Opensource
- [Hive](https://github.com/aden-hive/hive) - Un cadre multi-agents open source avec des graphiques générés automatiquement, des boucles d'évolution et une intégration MCP. #Opensource

### Assistants personnalisés

- [Poe](https://poe.com/) - Poe donne accès à une variété de robots.
- [GPT Builder](https://chatgpt.com/gpts/editor) - Assistant pour la création d'assistants GPT.

## Image

### Modèles

- [DALL·E 2](https://openai.com/dall-e-2/) - DALL·E 2 d'OpenAI est un nouveau système d'IA qui peut créer des images et de l'art réalistes à partir d'une description en langage naturel.
- [Stable Diffusion](https://huggingface.co/CompVis/stable-diffusion-v1-4) - Stable Diffusion par Stabilité L'IA est un modèle text-to-image de pointe qui génère des images à partir de texte. #Opensource
- [Midjourney](https://www.midjourney.com/) - Midjourney est un laboratoire de recherche indépendant qui explore de nouveaux médiums de pensée et élargit les pouvoirs imaginatifs de l'espèce humaine.
- [Imagen](https://imagen.research.google/) - Imagen by Google est un modèle de diffusion texte-image avec un degré sans précédent de photoréalisme et un niveau profond de compréhension linguistique.
- [Make-A-Scene](https://ai.meta.com/blog/greater-creative-control-for-ai-image-generation/) - Make-A-Scene by Meta est une méthode d'IA générative multimodale qui met le contrôle créatif entre les mains des personnes qui l'utilisent en leur permettant de décrire et d'illustrer leur vision à travers des descriptions de texte et des croquis libres.
- [DragGAN](https://github.com/XingangPan/DragGAN) - Faites glisser votre GAN: Manipulation interactive basée sur des points sur le Manifold d'Image Generative.
- [Flux](https://github.com/black-forest-labs/flux) - Modèles texte à image par Black Forest Labs avec une sortie photoréaliste de haute qualité. #Opensource

### Services

- [Craiyon](https://www.craiyon.com/) - Craiyon, anciennement DALL-E mini, est un modèle AI qui peut dessiner des images à partir de n'importe quelle invite de texte.
- [DreamStudio](https://stability.ai/dreamstudio) - DreamStudio est une interface facile à utiliser pour créer des images en utilisant le modèle de génération d'images Stable Diffusion.
- [Artbreeder](https://www.artbreeder.com/) - Artbreeder est un nouveau type d'outil créatif qui permet aux utilisateurs de créer en facilitant leur collaboration et leur exploration.
- [Magic Eraser](https://magicstudio.com/magiceraser/) - Enlever les choses indésirables des images en quelques secondes.
- [Imagine by Magic Studio](https://magicstudio.com/imagine) - Un outil de Magic Studio qui vous permet de vous exprimer en décrivant ce que vous pensez.
- [Alpaca](https://www.getalpaca.io/) - Stable Diffusion Photoshop plugin.
- [Patience.ai](https://www.patience.ai/) - Patience.ai est une application pour créer des images avec Stable Diffusion, une AI de pointe développée par Stabilité. Oui.
- [GenShare](https://www.genshare.io/) - Générez de l'art en quelques secondes gratuitement. Posséder et partager ce que vous créez. Un studio générateur multimédia, démocratisant le design et la créativité.
- [Playground](https://playground.com/) - Playground est un créateur d'image d'IA en ligne. Utilisez-le pour créer de l'art, des messages de médias sociaux, des présentations, des affiches, des vidéos, des logos et plus encore.
- [modyfi](https://www.modyfi.com/) - Une plate-forme de conception basée sur un navigateur avec génération d'images alimentée par l'IA, animation et collaboration en temps réel.
- [PhotoRoom](https://www.photoroom.com/) - Créez des images de produits et portraits en utilisant seulement votre téléphone. Supprimer le fond, changer le fond et présenter les produits.
- [Photo AI](https://photoai.com/ai-avatars) - Créez vos propres avatars générés par l'IA.
- [ClipDrop](https://clipdrop.co/) - Créer des visuels professionnels sans studio photo, alimenté par [stability.ai](https://stability.ai/).
- [Lensa](https://prisma-ai.com/lensa) - Une application d'édition d'images tout-en-un qui inclut la génération d'avatars personnalisés utilisant Stable Diffusion.
- [RunDiffusion](https://rundiffusion.com/) - Espace de travail basé sur le cloud pour créer de l'art généré par l'IA.
- [Ideogram](https://ideogram.ai/) - Une plateforme texte-image pour rendre l'expression créative plus accessible.
- [Bing Image Creator](https://www.bing.com/images/create) - Générateur de texte à image à base de DALLE3 avec caractéristiques de sécurité.
- [KREA](https://www.krea.ai/) - Générez des visuels de haute qualité avec une AI qui connaît vos styles, concepts ou produits.
- [Nightcafe](https://creator.nightcafe.studio/) - NightCafe Creator est une application de générateur d'art AI avec de multiples méthodes de génération d'art AI.
- [Leonardo AI](https://leonardo.ai/) - Créez des atouts visuels de qualité de production pour vos projets avec une qualité, une vitesse et un style sans précédent.
- [Recraft](https://www.recraft.ai/) - Un outil d'IA qui permet aux créateurs de générer facilement et itérer des images originales, de l'art vectoriel, des illustrations, des icônes et des graphiques 3D.
- [Reve Image](https://reve.com/) - Un modèle formé depuis le début pour exceller dans l'adhésion rapide, l'esthétique et la typographie.
- [Magnific](https://www.magnific.com/) - Outils de conception alimentés par l'IA, y compris la génération d'images, la suppression de l'arrière-plan et des modèles créatifs.
- [FigureLabs](https://www.figurelabs.ai/) - Un outil d'IA pour générer des figures scientifiques prêtes à être publiées en format vectoriel à partir de descriptions de textes ou de croquis.

### Conception graphique

- [Brandmark](https://brandmark.io/) - Outil de conception de logo basé sur l'IA.
- [Gamma](https://gamma.app/) - Créez de belles présentations et pages Web sans aucun travail de formatage et de conception.
- [Microsoft Designer](https://designer.microsoft.com/) - Superbes dessins dans un flash.
- [Napkin](https://www.napkin.ai/) - Outil d'IA pour générer des diagrammes, des graphiques et des infographies à partir de texte.

### Bibliothèques d'images

- [Lexica](https://lexica.art/) - Moteur de recherche Stable Diffusion.
- [OpenArt](https://openart.ai/) - Rechercher 10M+ d'invites, et générer de l'art AI via Stable Diffusion, DALL·E 2.
- [PromptHero](https://prompthero.com/) - Recherche de modèles comme Stable Diffusion, ChatGPT, Midjourney, etc.
- [PromptBase](https://promptbase.com/) - Demande de recherche des meilleurs ingénieurs. Vends tes propres invitations.

### Bibliothèques modèles

- [Civitai](https://civitai.com/) - Outil de partage de modèles d'IA dirigé par la communauté.
- [Stable Diffusion Models](https://rentry.org/sdmodels) - Une liste complète des points de contrôle Stable Diffusion sur Rentry.org.

### Ressources de diffusion stables

- [Stable Horde](https://stablehorde.net/) - Un crowdsourced a distribué un groupe de travailleurs de la diffusion stable.
- [DiffusionDB](https://diffusiondb.com/) - Une liste de toutes les applications publiques, outils de développement, guides et plugins pour Stable Diffusion. [Airtable version](https://airtable.com/shr0HlBwbw3nZ8Ht3/tblxOCylXV8ynh7ti).
- [PublicPrompts](https://publicprompts.art/) - Une collection d'invites gratuites pour la diffusion stable.
- [Hugging Face Diffusion Models Course](https://github.com/huggingface/diffusion-models-class) - Matériel Python pour le cours en ligne sur les modèles de diffusion [@huggingface](https://github.com/huggingface).
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI) - Une interface basée sur des nœuds pour construire et exécuter des flux de travail Stable Diffusion. [#opensource](https://github.com/comfyanonymous/ComfyUI)

## Vidéo

- [Runway](https://runwayml.com/) - Outils d'IA magiques, collaboration en temps réel, montage de précision, et plus encore. Votre suite de création de contenu de prochaine génération.
- [Synthesia](https://www.synthesia.io/) - Créez des vidéos à partir de texte simple en quelques minutes.
- [Colossyan](https://www.colossyan.com/) - Learning & Development focused video creator. Utilisez les avatars AI pour créer des vidéos éducatives en plusieurs langues.
- [Fliki](https://fliki.ai/) - Créer du texte à la vidéo et du texte à la parole avec des voix alimentées par ai en quelques minutes.
- [Pictory](https://pictory.ai/) - La puissante AI de Pictory vous permet de créer et de modifier des vidéos de qualité professionnelle en utilisant du texte.
- [Pika](https://pika.art/) - Une plateforme d'idées à vidéos qui fait bouger votre créativité.
- [HeyGen](https://app.heygen.com/) - Transformez les scripts en vidéos parlantes avec des avatars AI personnalisables en quelques minutes.
- [Luma Dream Machine](https://lumalabs.ai/app) - Un modèle AI qui rend les vidéos de haute qualité et réalistes rapidement à partir de texte et d'images.
- [KLING AI](https://kling.ai/) - Outils pour créer des images et des vidéos imaginatives.
- [Hailuo AI](https://hailuoai.video/) - Générateur de texte à vidéo alimenté par l'IA.
- [Google Flow](https://labs.google/fx/tools/flow) - Un outil de tournage d'IA de Google, alimenté par Veo.
- [Seedance 2.0](https://seed.bytedance.com/en/seedance2_0) - Un modèle image-à-vidéo et texte-à-vidéo développé par Niobotics ByteDance.
- [MaxVideoAI](https://maxvideoai.com/examples) - Un espace de travail pour générer et comparer des vidéos sur plusieurs modèles vidéo d'IA.
- [HyperFrames](https://hyperframes.heygen.com/) - Un cadre permettant aux agents d'IA de rendre des vidéos en écrivant HTML, CSS et JavaScript. [#opensource](https://github.com/heygen-com/hyperframes)

### Avatars

- [D-ID](https://www.d-id.com/) - Créer et interagir avec des avatars parlants en appuyant sur un bouton.
- [HeyGen](https://app.heygen.com/) - Transformez les scripts en vidéos parlantes avec des avatars AI personnalisables en quelques minutes.
- [Affogato](https://affogato.ai/) - Créez des annonces vidéo produits pour TikTok, Reels et Shorts.

### Animation

- [Autodesk Flow Studio](https://www.autodesk.com/products/flow-studio) - Outil alimenté par l'IA pour l'animation et la compilation de caractères CG dans des séquences d'action en direct.

## Audio

### Le texte à la parole

- [Eleven Labs](https://elevenlabs.io/) - Générateur de voix AI.
- [Resemble AI](https://www.resemble.ai/) - Générateur de voix AI et clonage de voix pour texte à la parole.
- [WellSaid](https://www.wellsaid.io/) - Convertir le texte en voix en temps réel.
- [TorToiSe](https://github.com/neonbjb/tortoise-tts) - Un système de texte à voix multiples formé en mettant l'accent sur la qualité. #Opensource
- [Bark](https://github.com/suno-ai/bark) - Un modèle texte-audio basé sur un transformateur. #Opensource
- [TTS WebUI](https://github.com/rsxdalv/TTS-WebUI) - UI Web pour l'exécution de plusieurs outils texte à parole, génération de musique et audio. #Opensource

### Discours au texte

- [Whisper](https://openai.com/index/whisper/) - La reconnaissance de la parole par une faible supervision à grande échelle. [#opensource](https://github.com/openai/whisper)
- [Wispr Flow](https://wisprflow.ai/) - Flow rend l'écriture rapide avec une dictée vocale transparente pour toute application sur votre ordinateur.
- [Vibe Transcribe](https://thewh1teagle.github.io/vibe/) - Solution tout en un pour une transcription audio et vidéo sans effort. [#opensource](https://github.com/thewh1teagle/vibe)
- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) - Port du modèle Whisper d'OpenAI en C/C++. #opensource
- [whisper-ctranslate2](https://github.com/Softcatala/whisper-ctranslate2) - Un client Whisper CLI compatible avec le client OpenAI original, en utilisant CTranslate2 pour une inférence plus rapide. [#opensource](https://github.com/Softcatala/whisper-ctranslate2)
- [NeMo](https://github.com/NVIDIA-NeMo/Speech) - Un cadre open-source de NVIDIA pour la construction de systèmes d'IA de la parole, y compris la reconnaissance automatique de la parole et le texte à la parole. #Opensource
- [Parakeet](https://huggingface.co/collections/nvidia/parakeet-asr-659711f49d1469e51546e021) - Une famille de modèles de reconnaissance de la parole ouverte par NVIDIA, incluant le streaming et des variantes multilingues. #Opensource

### Musique

- [Harmonai](https://www.harmonai.org/) - Nous sommes une organisation communautaire qui publie des outils audio génériques pour rendre la production musicale plus accessible et plus amusante pour tous.
- [Mubert](https://mubert.com/) - Un écosystème musical exempt de redevances pour les créateurs de contenu, les marques et les développeurs.
- [MusicLM](https://google-research.github.io/seanet/musiclm/examples/) - Un modèle de Google Research pour générer de la musique haute fidélité à partir de descriptions textuelles.
- [AudioCraft](https://audiocraft.metademolab.com/) - Une base de code unique pour les besoins audio génératifs, par Meta. Comprend MusicGen pour la musique et AudioGen pour les sons. #Opensource
- [Stable Audio](https://stability.ai/stable-audio) - Stable Audio est Stabilité Premier produit d'IA pour la génération de musique et d'effets sonores.
- [AIVA](https://www.aiva.ai/) - Assistant de génération de musique basée sur l'IA. Choisissez parmi plus de 250 styles.
- [Suno AI](https://suno.com/) - N'importe qui peut faire de la bonne musique. Pas besoin d'instrument, juste de l'imagination. De votre esprit à la musique.
- [Udio](https://www.udio.com/) - Découvrez, créez et partagez de la musique avec le monde.

## Autres

- [PromptBase](https://promptbase.com/) - Un marché pour l'achat et la vente d'invites de qualité pour DALL·E, GPT-3, Midjourney, Stable Diffusion.
- [This Image Does Not Exist](https://thisimagedoesnotexist.com/) - Testez votre capacité à savoir si une image est humaine ou générée par ordinateur.
- [Have I Been Trained?](https://haveibeentrained.com/) - Vérifiez si votre image a été utilisée pour former des modèles d'art d'IA populaires.
- [AI Dungeon](https://aidungeon.io/) - Un jeu d'aventure basé sur le texte que vous dirigez (et star in) tandis que l'IA le met en vie.
- [Clickable](https://www.clickable.so/) - Générer des annonces en quelques secondes avec l'IA. Belle, compatible avec la marque, et très convertir les annonces pour tous les canaux de marketing.
- [Scale Spellbook](https://scale.com/genai-platform) - Construire, comparer et déployer de grandes applications de modèles de langue avec Scale Spellbook.
- [Scenario](https://www.scenario.com/) - Les actifs de jeu générés par l'IA.
- [Teleprompter](https://github.com/danielgross/teleprompter) - Une AI à l'appareil pour vos réunions qui vous écoute et fait des suggestions de citations charismatiques.
- [FinChat](https://finchat.io/) - En utilisant l'IA, FinChat génère des réponses aux questions sur les entreprises publiques et les investisseurs.
- [Morpher AI](https://morpher.com/ai) - Morpher AI fournit des informations et des analyses en temps réel pour tout marché.
- [Whimsical AI](https://whimsical.com/ai) - La cartographie mentale, les diagrammes de flux et les outils visuels à puissance GPT pour le développement rapide des idées et l'organisation des processus.
- [Selfies with Sama](https://selfies-with-sama.vost.ai) - Prenez une photo avec un milliardaire de la vraie vie !

## Ressources pédagogiques

- [Learn Prompting](https://learnprompting.org/) - Un cours libre et ouvert sur la communication avec l'intelligence artificielle.
- [Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) - Guide et ressources pour une ingénierie rapide.
- [ChatGPT prompt engineering for developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) - Un court cours par Isa Fulford (OpenAI) et Andrew Ng (DeepLearning.AI).
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) - Exemples et guides pour utiliser l'API OpenAI.
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) - Stratégies et tactiques pour obtenir de meilleurs résultats à partir de grands modèles linguistiques.
- [PromptPerfect](https://promptperfect.jina.ai/) - Outil d'ingénierie rapide.
- [Anthropic courses](https://github.com/anthropics/courses) - Les cours d'anthropie.
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - Un guide pour construire votre propre LLM de travail, par Sebastian Raschka.
- [Prompt Engineering for Vision Models](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - Un DeepLearning gratuit. Cours court d'IA sur la façon d'inciter les modèles de vision informatique avec le langage naturel, les boîtes de délimitation, les masques de segmentation, les points de coordonnées et autres images.
- [Build a Reasoning Model (From Scratch)](https://www.manning.com/books/build-a-reasoning-model-from-scratch) - Un guide pour construire un modèle de raisonnement de travail à partir de la base, par Sebastian Raschka.
- [Build an AI Agent (From Scratch)](https://www.manning.com/books/build-an-ai-agent-from-scratch) - Un livre sur la construction d'agents d'IA avec des outils, de la mémoire, de la planification et des systèmes multi-agents.
- [Build a DeepSeek Model (From Scratch)](https://www.manning.com/books/build-a-deepseek-model-from-scratch) - Un livre sur la mise en œuvre de l'architecture de DeepSeek-style LLM, la formation, et les méthodes de distillation.
- [AI Governance](https://www.manning.com/books/ai-governance) - Un livre sur la gouvernance, le risque, la conformité, la sécurité, la vie privée et la surveillance des systèmes d'IA génériques.
- [AnimatedLLM](https://animatedllm.github.io/) - Visualisations interactives expliquant le fonctionnement des grands modèles linguistiques. [#opensource](https://github.com/kasnerz/animated-llm)
- [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) - Visualisation interactive de la façon dont les LLM basés sur les transformateurs fonctionnent, en exécutant un modèle GPT-2 en direct dans le navigateur. [#opensource](https://github.com/poloclub/transformer-explainer)

## Autres listes

- [Tools and Resources for AI Art](https://pharmapsychotic.com/tools.html) - Une grande liste de carnets Google Colab pour l'IA générative, par [@pharmapsychotic](https://twitter.com/pharmapsychotic).
- [The Generative AI Application Landscape](https://twitter.com/sonyatweetybird/status/1584580362339962880) - Une infographie qui cartographie l'écosystème générateur d'IA, par [Sonya Huang](https://twitter.com/sonyatweetybird) de Sequoia Capital.
- [Startups - @builtwithgenai](https://airtable.com/shr6nfE9FOHp17IjG/tblL3ekHZfkm3p6YT) - Une liste Airtable par [@builtwithgenai](https://twitter.com/builtwithgenai).
- [The Generative AI Index](https://airtable.com/shrH4REIgddv8SzUo/tbl5dsXdD1P859QLO) - Une liste Airtable par [Scale Venture Partners](https://www.scalevp.com/generative-ai).
- [Generative AI for Games](https://twitter.com/gwertz/status/1593268767269670912) - Une carte du marché des entreprises travaillant sur l'IA Generative pour les jeux, par [a16z](https://a16z.com/).
- [Generative Deep Art](https://github.com/filipecalegario/awesome-generative-ai) - Une liste des outils d'apprentissage en profondeur, des œuvres, des modèles, etc. destinés à des usages artistiques, par [@filipecalegario](https://github.com/filipecalegario/).
- [GPT-3 Demo](https://gpt3demo.com/) - Montrer avec des exemples GPT-3, des démos, des applications, des vitrines et des cas d'utilisation NLP.
- [GPT-4 Demo](https://gpt4demo.com/) - Applications GPT-4 et cas d'utilisation.
- [The Generative AI Landscape](https://github.com/ai-collection/ai-collection) - Une collection d'applications d'intelligence artificielle géniales.
- [Molecular design](https://github.com/AspirinCode/papers-for-molecular-design-using-DL) - Liste de la conception moléculaire utilisant l'IA et l'apprentissage approfondi.
- [Open LLMs](https://github.com/eugeneyan/open-llms) - Une liste des LLM ouvertes disponibles pour une utilisation commerciale.
- [Awesome Music AI](https://github.com/steven2358/awesome-music-ai) - Liste des outils d'IA pour la composition musicale, la génération et l'analyse.
- [Awesome AI Market Maps](https://github.com/joylarkin/Awesome-AI-Market-Maps) - Liste des cartes du marché de l'IA de 2026, 2025 et 2024, par [Joy Larkin](https://twitter.com/joy).
- [Awesome RAG Production](https://github.com/Yigtwxx/Awesome-RAG-Production) - Une liste des outils et des ressources pour les systèmes RAG de production de bâtiments.

### Listes sur ChatGPT

- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - Liste des outils, démos, docs pour ChatGPT et GPT-3, par [@jordn](https://github.com/jordn).
- [Awesome ChatGPT Prompts](https://github.com/f/prompts.chat) - Une collection d'exemples rapides à utiliser avec le modèle ChatGPT.
- [FlowGPT](https://flowgpt.com/) - Amplifiez votre workflow avec les meilleures invites.
- [ChatGPT Prompts for Data Science](https://github.com/travistangvh/ChatGPT-Data-Science-Prompts) - Un dépôt de données scientifiques utiles invite pour ChatGPT.
- [Awesome ChatGPT](https://github.com/sindresorhus/awesome-chatgpt) - Une autre liste géniale pour ChatGPT.
