# Awesome Generative AI [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Eine kuratierte Liste von modernen Generative Artificial Intelligence Projekten und Dienstleistungen.

Generativ künstlich Intelligenz ist eine Technologie, die originelle Inhalte wie Bilder, Sounds und Texte erstellt, indem sie Algorithmen des maschinellen Lernens verwendet, die auf große Datenmengen trainiert werden. Im Gegensatz zu anderen Formen der KI ist sie in der Lage, einzigartige und bisher unsichtbare Ausgaben wie fotorealistische Bilder, digitale Kunst, Musik und Schreiben zu erzeugen. Diese Outputs haben oft ihren eigenen einzigartigen Stil und können sogar schwer von von Menschen geschaffenen Werken zu unterscheiden sein. Generative AI hat eine breite Palette von Anwendungen in Bereichen wie Kunst, Unterhaltung, Marketing, Wissenschaft und Informatik.

Beiträge zu dieser Liste sind willkommen. Bevor Sie Ihre Vorschläge einreichen, lesen Sie bitte die [Contribution Guidelines](CONTRIBUTING.md) um sicherzustellen, dass Ihre Einträge die Kriterien erfüllen. Hinzufügen von Links durch [pull requests](https://github.com/steven2358/awesome-generative-ai/pulls) oder erstellen Sie eine [issue](https://github.com/steven2358/awesome-generative-ai/issues) um eine Diskussion zu beginnen. Weitere Projekte finden Sie im [Discoveries List](DISCOVERIES.md), wo wir eine breite Palette von aufstrebenden Generative AI-Projekten präsentieren.

## Inhalt

- [Empfohlenes Lesen](#recommended-reading)
- [Text](#text)
- [Kodierung](#coding)
- [Agenten](#agents)
- [Bild](#image)
- [Video](#video)
- [Audio](#audio)
- [andere](#other)
- [Lernressourcen](#learning-resources)
- [Mehr Listen](#more-lists)

## Empfohlenes Lesen

- [How Large Language Models Will Transform Science, Society, and AI](https://hai.stanford.edu/news/how-large-language-models-will-transform-science-society-and-ai) - Artikel fasst die Fähigkeiten und Grenzen des GPT-3-Modells und seine möglichen Auswirkungen auf die Gesellschaft zusammen. Von Alex Tamkin und Deep Ganguli, 5. Februar 2021.
- [Generative AI: A Creative New World](https://www.sequoiacap.com/article/generative-ai-a-creative-new-world/) - Eine umfassende Untersuchung der generativen KI-Industrie, die eine historische Perspektive und eine eingehende Analyse des Industrie-Ökosystems bietet. Von Sonya Huang, Pat Grady und GPT-3, 19. September 2022.
- [A Coming-Out Party for Generative A.I., Silicon Valley's New Craze](https://www.nytimes.com/2022/10/21/technology/generative-ai.html) - Artikel über den Aufstieg der generativen KI, insbesondere den Erfolg des Stable Diffusion Image Generators, und die damit verbundenen Kontroversen. New York Times, 21. Oktober 2022.
- [AI's New Creative Streak Sparks a Silicon Valley Gold Rush](https://www.wired.com/story/ais-new-creative-streak-sparks-a-silicon-valley-gold-rush/) - Artikel über den wachsenden Hype und die Investitionen in generative KI-Startups, wobei verschiedene Branchen ihre potenziellen Anwendungen erkunden. Wired, 27. Oktober 2022.
- [ChatGPT Heralds an Intellectual Revolution](https://www.wsj.com/articles/artificial-intelligence-generative-ai-chatgpt-kissinger-84512912) - Ein op-ed von Henry Kissinger, Eric Schmidt und Daniel Huttenlocher. Wall Street Journal, 24. Februar 2023.

### Meilensteine

- [OpenAI API](https://openai.com/blog/openai-api/) - Ankündigung der OpenAI API für Text-zu-Text-Allzweck-AI-Modelle auf Basis von GPT-3. OpenAI-Blog, 11. Juni 2020.
- [GitHub Copilot](https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/) - Ankündigung von Copilot, einem neuen AI-Paar-Programmierer, mit dem Sie besseren Code schreiben können. GitHub Blog, 29. Juni 2021.
- [DALL·E 2](https://openai.com/blog/dall-e-2/) - Ankündigung der Veröffentlichung von DALL·E 2, einem fortschrittlichen Bilderzeugungssystem mit verbesserter Auflösung, erweiterten Bilderzeugungsfunktionen und verschiedenen Sicherheitsminderungen. OpenAI Blog, 6. April 2022.
- [Stable Diffusion Public Release](https://stability.ai/news-updates/stable-diffusion-public-release) - Ankündigung der öffentlichen Veröffentlichung von Stable Diffusion, einem AI-basierten Bilderzeugungsmodell, das auf einem breiten Internet Scrape trainiert und unter einer Creative ML OpenRAIL-M-Lizenz lizenziert wurde. Stable Diffusion Blog, 22. August 2022.
- [ChatGPT](https://openai.com/blog/chatgpt/) - Ankündigung von chatgpt, einem konversationsmodell, das darauf trainiert wurde, folgefragen zu beantworten, fehler zuzugeben, falsche räumlichkeiten in frage zu stellen und unangemessene anfragen abzulehnen. OpenAI Blog, 30. November 2022.
- [Bing Search](https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing-and-edge-your-copilot-for-the-web/) - Microsoft kündigt eine neue Version seiner Suchmaschine Bing an, die von einem OpenAI-Modell der nächsten Generation angetrieben wird. Microsoft Blog, 7. Februar 2023.
- [LLaMA](https://ai.meta.com/blog/large-language-model-llama-meta-ai/) - Llama LLM, ein grundlegendes, 65-Milliarden-Parameter großes Sprachmodell von Meta. Meta, 23. Februar 2023. #opensource
- [GPT-4](https://openai.com/research/gpt-4) - Ankündigung von GPT-4, einem großen multimodalen Modell. OpenAI Blog, 14. März 2023.
- [DALL·E 3](https://openai.com/index/dall-e-3/) - Ankündigung des DALL·E 3-Bildgenerators. OpenAI Blog, 20. September 2023.
- [Sora](https://openai.com/research/video-generation-models-as-world-simulators) - Präsentation von Sora, einem großen Videogenerationsmodell. OpenAI, 15. Februar 2024.

## Text

### Modelle

- [OpenAI API](https://openai.com/api/) - Die API von OpenAI bietet Zugriff auf GPT-Modelle für natürliche Sprache, Codierung, Bilderzeugung, Audio und Agentenentwicklung.
- [Gopher](https://deepmind.google/blog/language-modelling-at-scale-gopher-ethical-considerations-and-retrieval/) - Gopher von DeepMind ist ein 280 Milliarden Parameter Sprachmodell.
- [OPT](https://huggingface.co/facebook/opt-350m) - Open Pretrained Transformers (OPT) von Facebook ist eine Suite von Decoder-nur vortrainierten Transformatoren. [Announcement](https://ai.meta.com/blog/democratizing-access-to-large-scale-language-models-with-opt-175b/).
- [Bloom](https://huggingface.co/docs/transformers/model_doc/bloom) - BLOOM by Hugging Face ist ein ähnliches Modell wie GPT-3, das in 46 verschiedenen Sprachen und 13 Programmiersprachen geschult wurde. #opensource
- [Llama](https://www.llama.com/) - Metas Open-Source-Großsprachenmodell. #opensource
- [Claude](https://claude.ai/) - Sprechen Sie mit Claude, einem KI-Assistenten von Anthropic.
- [Vicuna-13B](https://lmsys.org/blog/2023-03-30-vicuna/) - Ein Open-Source-Chatbot, der von der Feinabstimmung von LLaMA auf von Benutzern geteilten Konversationen trainiert wurde, die von ShareGPT gesammelt wurden. #opensource
- [Mistral](https://mistral.ai/en/models) - Open-weight LLMs von Mistral AI. #opensource
- [Grok](https://grok.x.ai/) - Ein LLM von xAI mit [open source](https://github.com/xai-org/grok-1) und offene Gewichte. #opensource
- [Qwen](https://qwenlm.github.io/) - Eine Reihe von LLMs, die unabhängig von Alibaba Cloud entwickelt wurden. [#opensource](https://github.com/QwenLM/Qwen)
- [DeepSeek](https://huggingface.co/deepseek-ai) - Eine Reihe von Open-Source-LMs von DeepSeek AI. [#opensource](https://github.com/deepseek-ai)
- [MiniMax](https://www.minimax.io/) - Multimodale Basismodelle für Text-, Sprach-, Video- und Musikerzeugung
- [Kimi K2](https://github.com/moonshotai/Kimi-K2) - Eine Reihe von Open-Source-MoE-Sprachmodellen von Moonshot AI für agentische Aufgaben. #opensource
- [GLM](https://github.com/zai-org/GLM-5) - Eine Reihe von Open-Source-MoE-Sprachmodellen von Z.ai für agentische Aufgaben. #opensource

### Chatbots

- [ChatGPT](https://chatgpt.com/) - ChatGPT von OpenAI ist ein großes Sprachmodell, das auf konversative Weise interagiert.
- [Copilot](https://copilot.microsoft.com/) - Ein alltäglicher AI-Begleiter von Microsoft.
- [Gemini](https://gemini.google.com/) - Eine Familie von multimodalen großen Sprachmodellen, die von Google Deepmind entwickelt wurden.
- [Meta AI](https://www.meta.ai/) - Meta AI-Assistent, um Dinge zu erledigen, AI-generierte Bilder zu erstellen, Antworten zu erhalten. Gebaut auf Llama LLM.
- [DeepSeek](https://www.deepseek.com/) - Eine Chatbot-Schnittstelle, die auf den Open-Source-Sprachmodellen von DeepSeek basiert. #opensource
- [Character.AI](https://character.ai/) - Zeichen. Mit AI können Sie Charaktere erstellen und mit ihnen chatten.
- [Pi](https://pi.ai) - Eine personalisierte KI-Plattform, die als digitaler Assistent verfügbar ist.
- [Qwen](https://chat.qwenlm.ai/) - Qwen Chatbot mit Bilderzeugung, Dokumentenverarbeitung, Web-Suchintegration, Videoverständnis usw.
- [Le Chat](https://chat.mistral.ai/) - Eine Chat-Schnittstelle für Mistral AI Sprachmodelle.
- [Kimi](https://www.kimi.com/) - Ein ki-assistent von moonshot ki mit chat, tiefer forschung, codierung und multi-agenten-fähigkeiten.
- [Z.ai](https://chat.z.ai/) - Eine KI-Chatbot- und Agentenplattform von Z.ai, die von der GLM-Modellfamilie unterstützt wird.

### Benutzerdefinierte Schnittstellen

- [LibreChat](https://librechat.ai/) - Librechat ist eine kostenlose und open-source-chat-schnittstelle für assistenz-kis. [#opensource](https://github.com/danny-avila/LibreChat).
- [Chatbot UI](https://www.chatbotui.com/) - Eine Open Source ChatGPT UI. [#opensource](https://github.com/mckaywrigley/chatbot-ui).

### Suchmaschinen

- [Perplexity AI](https://www.perplexity.ai/) - KI-basierte Suchwerkzeuge.
- [Exa](https://exa.ai/) - Sprachmodell unterstützt die Suche.
- [Phind](https://phind.com/) - KI-basierte Suchmaschine.
- [You.com](https://you.com/) - Eine Suchmaschine, die auf KI basiert und Benutzern eine maßgeschneiderte Sucherfahrung bietet, während ihre Daten zu 100% privat bleiben.
- [Komo](https://komo.ai/) - Eine KI-basierte Suchmaschine.

### Lokale Suchmaschinen

- [privateGPT](https://github.com/zylon-ai/private-gpt) - Stellen Sie Fragen zu Ihren Dokumenten ohne Internetverbindung und nutzen Sie die Leistung von LLMs.
- [quivr](https://github.com/QuivrHQ/quivr) - Dumpen sie alle ihre dateien und chatten sie mit ihrem generativen ki-second-hirn mit llms & einbettungen.

### Schreibassistenten

- [Jasper](https://www.jasper.ai/) - Erstellen Sie Inhalte schneller mit künstlicher Intelligenz.
- [Compose AI](https://www.compose.ai/) - Compose AI ist eine kostenlose Chrome-Erweiterung, die Ihre Schreibzeit mit KI-basierter Autovervollständigung um 40% verkürzt.
- [Rytr](https://rytr.me/) - Rytr ist ein KI-Schreibassistent, der Ihnen hilft, qualitativ hochwertige Inhalte zu erstellen.
- [wordtune](https://www.wordtune.com/) - Persönlicher Schreibassistent.
- [HyperWrite](https://hyperwriteai.com/) - HyperWrite hilft Ihnen, mit Zuversicht zu schreiben und Ihre Arbeit schneller von der Idee bis zum endgültigen Entwurf zu erledigen.
- [Moonbeam](https://www.gomoonbeam.com/) - Bessere Blogs in einem Bruchteil der Zeit.
- [copy.ai](https://www.copy.ai/) - Schreiben Sie bessere Marketing-Kopie und Inhalte mit AI.
- [ChatSonic](https://writesonic.com/chat) - Ein KI-gestützter Assistent, der die Erstellung von Texten und Bildern ermöglicht.
- [Anyword](https://anyword.com/) - Der KI-Schreibassistent von Anyword generiert effektive Kopien für jeden.
- [Hypotenuse AI](https://www.hypotenuse.ai/) - Verwandeln Sie einige Keywords in originelle, aufschlussreiche Artikel, Produktbeschreibungen und Social Media-Kopie.
- [Lavender](https://www.lavender.ai/) - Lavendel E-Mail-Assistent hilft Ihnen, mehr Antworten in kürzerer Zeit zu erhalten.
- [Lex](https://lex.page/) - Eine Textverarbeitung mit künstlicher Intelligenz, so dass Sie schneller schreiben können.
- [Jenni](https://jenni.ai/) - Jenni ist die ultimative Schreibassistentin, die Ihnen Stunden der Ideenfindung und Schreibzeit spart.
- [QuillBot](https://quillbot.com) - KI-gestütztes Paraphrasier-Tool.
- [Postwise](https://postwise.ai/) - Schreiben Sie Tweets, planen Sie Posts und wachsen Sie mit AI.
- [Copysmith](https://copysmith.ai/) - AI Content Creation Lösung für Enterprise & eCommerce.
- [Humanize-Text](https://github.com/lynote-ai/humanize-text) - AI Text Humanizer mit einer mehrsprachigen Rewriting-Pipeline und Schritt-für-Schritt-Beispielen. #opensource

### ChatGPT Erweiterungen

- [WebChatGPT](https://chromewebstore.google.com/detail/webchatgpt-chatgpt-with-i/lpfemeioodjbpieminkklglpmhlngfcn) - Erweitern sie ihre chatgpt-aufforderungen mit relevanten ergebnissen aus dem web.
- [GPT for Sheets and Docs](https://workspace.google.com/marketplace/app/gpt_for_sheets_and_docs/677318054654) - ChatGPT Erweiterung für Google Sheets und Google Docs.
- [YouTube Summary with ChatGPT](https://chromewebstore.google.com/detail/youtube-summary-with-chat/nmmicjeknamkfloonkhhcjmomieiodli) - Verwenden Sie ChatGPT, um YouTube-Videos zusammenzufassen.
- [AI Prompt Genius](https://chromewebstore.google.com/detail/ai-prompt-genius/jjdnakkfjnnbbckhifcfchagnpofjffo) - Entdecken, teilen, importieren und verwenden sie die besten eingabeaufforderungen für chatgpt und speichern sie ihren chatverlauf lokal.
- [ShareGPT](https://sharegpt.com/) - Teilen sie ihre chatgpt-gespräche und erkunden sie gespräche, die von anderen geteilt werden.
- [Merlin](https://www.getmerlin.in/) - ChatGPT Plus Erweiterung auf allen Websites.
- [Jetwriter](https://jetwriter.ai/) - KI-Schreibassistent für Chrome, Desktop und Mobile.
- [ChatGPT for Jupyter](https://github.com/TiesdeKok/chat-gpt-jupyter-extension) - Fügen Sie verschiedene Hilfsfunktionen in Jupyter Notebooks und Jupyter Lab hinzu, unterstützt von ChatGPT.
- [editGPT](https://www.editgpt.app/) - Lektorieren, bearbeiten und verfolgen Sie Änderungen an Ihren Inhalten in chatGPT.
- [Forefront](https://www.forefront.ai/) - Eine bessere chatgpt erfahrung.
- [ChatGPT for Sheets, Docs, Slides, Forms](https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252) - ChatGPT-Erweiterung für Google Sheets, Google Docs, Google Slides, Google Forms.
- [GPT for Gmail](https://workspace.google.com/marketplace/app/gpt_for_gmail_ai_email_assistant_gemini/899305976589) - AI E-Mail-Assistent für Gmail.

### Produktivität

- [ChatPDF](https://www.chatpdf.com/) - Chat mit jedem PDF.
- [Mem](https://mem.ai/) - Mem ist der weltweit erste KI-basierte Arbeitsbereich, der auf Sie zugeschnitten ist. Verstärken Sie Ihre Kreativität, automatisieren Sie das Alltägliche und bleiben Sie automatisch organisiert.
- [Taskade](https://www.taskade.com/) - Skizzieren Sie Aufgaben, Notizen, generierte strukturierte Listen und Mind Maps mit Taskade AI.
- [Notion AI](https://www.notion.so/product/ai) - Schreiben Sie bessere, effizientere Notizen und Dokumente.
- [Nekton AI](https://nekton.ai) - Automatisieren Sie Ihre Workflows mit AI. Beschreiben Sie Ihre Workflows Schritt für Schritt in einfacher Sprache.
- [Limitless](https://www.limitless.ai/) - Ein KI-Speicherassistent zum Aufzeichnen von Gesprächen und Besprechungen, zum Erstellen von Zusammenfassungen und zum Durchsuchen vergangener Interaktionen über Apps und ein optionales Wearable hinweg.
- [NotebookLM](https://notebooklm.google/) - Ein Recherche- und Notiz-Online-Tool zur Interaktion mit Dokumenten, das von Google Gemini unterstützt wird.
- [Open Notebook](https://www.open-notebook.ai) - Eine Open-Source-Implementierung von NotebookLM mit mehr Flexibilität und Funktionen. [#opensource](https://github.com/lfnovo/open-notebook)
- [Screenpipe](https://github.com/screenpipe/screenpipe) - Ein Open-Source-Tool zur Aufzeichnung von Bildschirm- und Audioaktivitäten mit KI-gestützter Suche, Automatisierung und Unterstützung für lokale LLMs. #opensource

### Sitzungsassistenten

- [Otter.ai](https://otter.ai/) - Ein Besprechungsassistent, der Audio aufzeichnet, Notizen schreibt, Folien automatisch aufnimmt und Zusammenfassungen generiert.
- [Cogram](https://www.cogram.com/) - Cogram nimmt automatische Notizen in virtuellen Meetings auf und identifiziert Aktionselemente.
- [Sybill](https://www.sybill.ai/) - Sybill generiert Zusammenfassungen von Verkaufsanrufen, einschließlich der nächsten Schritte, Schmerzpunkte und Interessenbereiche, indem Transkript und emotionsbasierte Erkenntnisse kombiniert werden.
- [Loopin AI](https://www.loopinhq.com/) - Loopin ist ein kollaborativer Besprechungsarbeitsbereich, der es Ihnen nicht nur ermöglicht, Besprechungen mithilfe von KI aufzuzeichnen, zu transkribieren und zusammenzufassen, sondern auch Besprechungsnotizen automatisch auf Ihrem Kalender zu organisieren.
- [Read AI](https://www.read.ai/) - Ein KI-Kopilot, der Ihre Meetings, E-Mails und Nachrichten mit Zusammenfassungen, Inhaltserkennung und Empfehlungen produktiver macht.
- [Fireflies.ai](https://fireflies.ai) - Transkribieren, zusammenfassen, suchen und analysieren Sie alle Ihre Teamgespräche.

### Akadämie

- [Elicit](https://elicit.org/) - Elicit verwendet Sprachmodelle, um Ihnen zu helfen, Forschungsworkflows zu automatisieren, wie Teile der Literaturrecherche.
- [genei](https://www.genei.io/) - Fassen Sie akademische Artikel in Sekunden zusammen und sparen Sie 80% Ihrer Forschungszeiten.
- [Explainpaper](https://www.explainpaper.com/) - Eine bessere Möglichkeit, akademische Arbeiten zu lesen. Laden Sie ein Papier hoch, heben Sie verwirrenden Text hervor, erhalten Sie eine Erklärung.
- [Consensus](https://consensus.app/search/) - Consensus ist eine Suchmaschine, die KI verwendet, um Antworten in der wissenschaftlichen Forschung zu finden.
- [scite](https://scite.ai/) - Eine Plattform zur Entdeckung und Bewertung wissenschaftlicher Artikel.
- [SciSpace](https://scispace.com/) - Ein KI-Forschungsassistent zum Verständnis wissenschaftlicher Literatur.
- [STORM](https://storm.genie.stanford.edu/) - Ein LLM-basiertes Wissenskurationssystem, das ein Thema erforscht und einen Bericht in voller Länge mit Zitaten erstellt. [#opensource](https://github.com/stanford-oval/storm/)
- [alphaXiv](https://www.alphaxiv.org) - Diskutieren, entdecken und lesen Sie arXiv Papiere.
- [ASReview](https://asreview.nl/) - Open-Source-KI-basiertes Tool für systematische Überprüfungen, das Forschern hilft, große Mengen wissenschaftlicher Literatur effizient zu untersuchen. [#opensource](https://github.com/asreview/asreview)
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research) - Ein umfassendes Recherche-Tool für die Suche nach akademischen Quellen, dem Internet und privaten Dokumenten mit lokalen oder Cloud-LMs. [#opensource](https://github.com/LearningCircuit/local-deep-research)
- [Rayyan](https://www.rayyan.ai/) - Eine KI-basierte Plattform zur Verwaltung systematischer Literaturrecherchen mit kollaborativen Screening- und Datenmanagement-Tools.
- [Paper2Agent](https://paper2agent.ai/) - Konvertiert Forschungsarbeiten und zugehörige Codebasen in getestete MCP-Server und interaktive KI-Agenten. [#opensource](https://github.com/jmiao24/Paper2Agent)
- [Ai2 ASTA](https://asta.allen.ai/) - Ein wissenschaftlicher Forschungsassistent, um Papiere zu finden, zitierte Literaturberichte zu erstellen und Forschungsdaten zu analysieren.

### Bestenlisten

- [Arena](https://arena.ai/) - Eine offene Plattform für Crowdsourcing-KI-Benchmarking, die von Forschern des UC Berkeley SkyLab veranstaltet wird.
- [Artificial Analysis](https://artificialanalysis.ai/) - Künstliche Analyse bietet objektive Benchmarks und Informationen zur Auswahl von KI-Modellen und Hosting-Anbietern.
- [imgsys](https://imgsys.org/rankings) - Eine generative Image Model Arena von fal.ai.
- [OpenRouter LLM Rankings](https://openrouter.ai/rankings) - Sprachmodelle, die nach nutzung über apps hinweg eingestuft und analysiert werden.
- [SEAL LLM Leaderboard](https://labs.scale.com/leaderboard) - Expertenorientierte LLM-Benchmarks und aktualisierte AI-Modell-Bestenlisten.
- [LLM Stats](https://llm-stats.com/) - Vergleichen Sie KI-Modelle mit Benchmarks, Preisen, Geschwindigkeit und Kontextfenstern.

### Andere Textgeneratoren

- [EmailTriager](https://www.emailtriager.com/) - Verwenden Sie AI, um automatisch E-Mail-Antworten im Hintergrund zu erstellen.
- [AI Poem Generator](https://www.aipoemgenerator.org) - AI Poem Generator schreibt ein schönes reimendes Gedicht für Sie zu jedem Thema, wenn Sie eine Textaufforderung erhalten.

## Kodierung

### Kodierungsassistenten

- [GitHub Copilot](https://github.com/features/copilot) - GitHub Copilot verwendet den OpenAI-Codex, um Code und ganze Funktionen in Echtzeit direkt von Ihrem Editor vorzuschlagen.
- [OpenAI Codex](https://platform.openai.com/docs/guides/code/) - Ein KI-System von OpenAI, das natürliche Sprache in Code übersetzt.
- [Ghostwriter](https://blog.replit.com/ai) - Ein AI-powered Pair Programmierer von replit.
- [Amazon Q](https://aws.amazon.com/q/) - Der AWS generative AI-basierte Assistent, der Fragen beantwortet, Code schreibt und Aufgaben automatisiert.
- [tabnine](https://www.tabnine.com/) - Code schneller mit Volllinien- und Vollfunktionscodevervollständigungen.
- [Stenography](https://stenography.dev/) - Automatische Codedokumentation.
- [Mintlify](https://mintlify.com/) - AI powered Dokumentation Schriftsteller.
- [AI2sql](https://www.ai2sql.io/) - Mit AI2sql können Ingenieure und Nicht-Ingenieure problemlos effiziente, fehlerfreie SQL-Abfragen schreiben, ohne SQL zu kennen.
- [Qodo](https://www.qodo.ai/) - AI Code Review Tool mit agentischen Workflows für IDEs, Pull Requests und Sicherheit.
- [PR-Agent](https://github.com/The-PR-Agent/pr-agent) - KI-basiertes Tool für automatisierte PR-Analysen, Feedback, Vorschläge und mehr.
- [TurboPilot](https://github.com/ravenscroftj/turbopilot) - Ein selbst gehosteter Copilot-Klon, der die Bibliothek hinter llama.cpp verwendet, um das 6-Milliarden-Parameter Salesforce Codegen-Modell in 4 GB RAM auszuführen.
- [GPT-Code UI](https://github.com/ricklamers/gpt-code-ui) - Eine Open-Source-Implementierung des ChatGPT Code-Interpreters von OpenAI. #opensource
- [Open Interpreter](https://github.com/openinterpreter/open-interpreter) - OpenAI Code Interpreter in Ihrem Terminal, läuft lokal.
- [Continue](https://www.continue.dev/) - Open-Source AI Code Assistent. Verbinden Sie jedes Modell und jeden Kontext, um benutzerdefinierte Autovervollständigungs- und Chat-Erfahrungen innerhalb der IDE zu erstellen. [#opensource](https://github.com/continuedev/continue)
- [RooCode](https://github.com/RooCodeInc/Roo-Code) - Ein KI-gestützter autonomer Codierungsagent, der direkt in VS Code integriert ist. [#opensource](https://github.com/RooCodeInc/Roo-Code)
- [Windsurf](https://windsurf.com/) - Eine AI-native IDE, die die Codebearbeitung mit fortschrittlicher KI-Unterstützung während des gesamten Entwicklungsprozesses kombiniert.
- [Plandex](https://github.com/plandex-ai/plandex) - Open Source, Terminal-basierte KI-Programmiermaschine für komplexe Aufgaben. [#opensource](https://github.com/plandex-ai/plandex)
- [Jupyter AI](https://github.com/jupyterlab/jupyter-ai) - Ein Open-Source-KI-Assistent in Jupyter Notebook und JupyterLab, der mehr als 100 LLMs unterstützt, einschließlich lokal gehosteter Modelle von Ollama und GPT4All. #opensource
- [DataLine](https://dataline.app) - Ein KI-gesteuertes Datenanalyse- und Visualisierungstool. [#opensource](https://github.com/RamiAwar/dataline)
- [v0](https://v0.dev) - Prompt-gesteuerte UI-Generierung für React und Next.js, Erstellung produktionsfähiger Komponenten.
- [Lovable](https://lovable.dev) - Conversational Full-Stack-App-Generierung, die Ideen in einsetzbaren Code verwandelt.
- [aider](https://aider.chat/) - KI-Paar-Programmierung in Ihrem Terminal, unterstützt mehrere LLM-Anbieter. [#opensource](https://github.com/paul-gauthier/aider)
- [Kilo](https://kilo.ai/) - Open-Source AI Codierassistent für VS Code, JetBrains und die CLI. [#opensource](https://github.com/Kilo-Org/kilocode)

### Entwickler-Tools

- [Cohere](https://cohere.com/) - Cohere bietet Zugang zu erweiterten großen Sprachmodellen und NLP-Tools.
- [Haystack](https://haystack.deepset.ai/) - Ein Framework zum Erstellen von NLP-Anwendungen (z. B. Agenten, semantische Suche, Fragebeantwortung) mit Sprachmodellen.
- [LangChain](https://langchain.com/) - Ein Framework zur Entwicklung von Anwendungen, die auf Sprachmodellen basieren.
- [gpt4all](https://github.com/nomic-ai/gpt4all) - Ein Chatbot trainierte eine umfangreiche Sammlung sauberer Assistentendaten, darunter Code, Geschichten und Dialoge.
- [LLM App](https://github.com/pathwaycom/llm-app) - Open-Source-Python-Bibliothek zum Aufbau einer LLM-fähigen Echtzeit-Datenpipeline.
- [LMQL](https://lmql.ai/) - LMQL ist eine Abfragesprache für große Sprachmodelle.
- [LlamaIndex](https://www.llamaindex.ai/) - Ein Daten-Framework zum Erstellen von LLM-Anwendungen über externe Daten.
- [Phoenix](https://phoenix.arize.com/) - Open-Source-Tool für ML-Beobachtung, das in Ihrer Notebook-Umgebung läuft, von Arize. Monitor und Feinabstimmung LLM, CV und Tabellenmodelle.
- [Cursor](https://cursor.com/) - Cursor ist die IDE der Zukunft, die für die Paarprogrammierung mit leistungsstarker KI entwickelt wurde.
- [SymbolicAI](https://github.com/ExtensityAI/symbolicai) - Ein neuro-symbolisches Framework für den Aufbau von Anwendungen mit LLMs im Kern.
- [Vanna.ai](https://vanna.ai/) - Ein Open-Source-Python-RAG-Framework für die SQL-Generierung und verwandte Funktionen. [#opensource](https://github.com/vanna-ai/vanna)
- [Portkey](https://portkey.ai/) - Eine Full-Stack LLMOps Plattform für LLM Monitoring, Caching und Management.
- [agenta](https://github.com/agenta-ai/agenta) - Eine Open-Source-End-to-End-LMOps-Plattform für promptes Engineering, Evaluierung und Bereitstellung. #opensource
- [Together AI](https://www.together.ai/) - Train, fine-tune-und run-inferenz auf ki-modelle blitzschnell, zu niedrigen kosten und im produktionsmaßstab.
- [Gitingest](https://gitingest.com/) - Verwandeln Sie jedes Git-Repository in einen einfachen Textverdau seiner Codebasis, damit es in jedes LLM eingespeist werden kann. [#opensource](https://github.com/cyclotruc/gitingest)
- [Repomix](https://repomix.com/) - Packen Sie Ihre Codebasis in AI-freundliche Formate. [#opensource](https://github.com/yamadashy/repomix)
- [llama.cpp](https://github.com/ggml-org/llama.cpp) - Inferenz von Metas LLaMA-Modell (und anderen) in reinem C/C++. #opensource
- [bitnet.cpp](https://github.com/microsoft/BitNet) - Offizielles Inferenz-Framework für 1-Bit-LMs von Microsoft. [#opensource](https://github.com/microsoft/BitNet)
- [OpenRouter](https://openrouter.ai/) - Eine einheitliche Schnittstelle für LLMs. [#opensource](https://github.com/OpenRouterTeam)
- [Ludwig](https://github.com/ludwig-ai/ludwig) - Ein Low-Code-Framework zum Erstellen benutzerdefinierter KI-Modelle wie LLMs und anderen tiefen neuronalen Netzwerken. [#opensource](https://github.com/ludwig-ai/ludwig)
- [Unsloth](https://unsloth.ai) - Eine Python-Bibliothek zur Feinabstimmung von LLMs [#opensource](https://github.com/unslothai/unsloth).
- [OpenLIT](https://github.com/openlit/openlit) - Open-Source-GenAI- und LLM-Beobachtbarkeitsplattform nativ zu OpenTelemetry mit Spuren und Metriken. #opensource
- [Helicone AI](https://helicone.ai/) - Open-Source-LM-Beobachtbarkeitsplattform zum Protokollieren, Überwachen und Debuggen von KI-Anwendungen. [#opensource](https://github.com/Helicone/helicone)
- [Wren AI](https://www.getwren.ai/oss) - Ein Open-Source-Text-to-SQL- und generativer BI-Agent mit einer semantischen Schicht. [#opensource](https://github.com/Canner/WrenAI)
- [Cleanlab](https://cleanlab.ai/tlm/) - Eine API zum Erkennen und Scoring von Halluzinationen in LLM-Ausgängen.
- [Opik](https://github.com/comet-ml/opik) - Eine Open-Source-Plattform zum Nachverfolgen, Auswerten und Überwachen von LLM-Anwendungen. [#opensource](https://github.com/comet-ml/opik)
- [Langfuse](https://langfuse.com/) - Eine Open-Source-LM-Engineering-Plattform für Nachverfolgung, Bewertung, promptes Management und Metriken. [#opensource](https://github.com/langfuse/langfuse)
- [MLflow](https://mlflow.org/) - Eine Open-Source-Plattform für die Verfolgung von ML-Experimenten, die Bewertung von Modellen und Eingabeaufforderungen, die Bereitstellung von Modellen und das Hinzufügen von LLM-Beobachtbarkeit. [#opensource](https://github.com/mlflow/mlflow)
- [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - Ein Zero-Trust-SDK zur lokalen Anonymisierung von PII, bevor Aufforderungen an LLMs gesendet und die Antwort nahtlos rehydriert werden.
- [Agentset](https://agentset.ai/) - Eine Open-Source-Plattform für den Aufbau und die Bewertung von RAG- und Agentenanwendungen. [#opensource](https://github.com/agentset-ai/agentset)
- [Manifest](https://manifest.build) - Ein Open-Source-LM-Router, der Agent-Anfragen an das kostengünstigste Modell mit Nutzungsbeschränkungen und Modell-Benchmarking weiterleitet. [#opensource](https://github.com/mnfst/manifest)
- [ai-i18n](https://github.com/i18n-actions/ai-i18n) - Eine GitHub-Aktion, die LLMs (Claude, GPT, Ollama) verwendet, um i18n-Lokalisierungsdateien automatisch zu übersetzen. #opensource
- [Groq](https://groq.com/) - Eine Cloud-Inferenz-API zum Ausführen von Open-Source-LMs, die von benutzerdefinierter LPU-Hardware angetrieben wird.
- [Model Context Protocol](https://modelcontextprotocol.io/) - Ein offener Standard zur Verbindung von KI-Modellen mit externen Tools und Datenquellen. [MCP Registry](https://registry.modelcontextprotocol.io/) [#opensource](https://github.com/modelcontextprotocol/modelcontextprotocol)
- [Steel Browser](https://github.com/steel-dev/steel-browser) - Eine Open-Source-Browser-Sandbox und Automatisierungsinfrastruktur für KI-Agenten mit Sitzungsmanagement, Screenshots, PDFs, Proxies und Anti-Bot-Tooling. #opensource
- [Bifrost](https://github.com/maximhq/bifrost) - Ein Open-Source-LM-Gateway mit Routing, Load Balancing, Leitplanken und Beobachtbarkeit für über 1000 Modelle. #opensource
- [fal](https://fal.ai/) - Eine Entwicklerplattform für den Zugriff auf und die Bereitstellung von Bild-, Video-, Audio- und 3D-Generationsmodellen.

### Spielplätze

- [OpenAI Playground](https://platform.openai.com/playground) - Entdecken Sie Ressourcen, Tutorials, API-Dokumente und dynamische Beispiele.
- [Google AI Studio](https://aistudio.google.com/) - Ein webbasiertes Tool zum Prototypen mit Gemini und experimentellen Modellen.
- [GitHub Models](https://github.com/marketplace/models) - Finden und experimentieren Sie mit KI-Modellen, um eine generative KI-Anwendung zu entwickeln.

### Lokaler LLM-Einsatz

- [Ollama](https://github.com/ollama/ollama) - Machen Sie sich mit großen Sprachmodellen vor Ort auf den Weg.
- [Open WebUI](https://github.com/open-webui/open-webui) - Eine erweiterbare, funktionsreiche und benutzerfreundliche, selbst gehostete KI-Plattform, die vollständig offline funktioniert. #opensource
- [Jan](https://jan.ai/) - Führen Sie LLMs wie Mistral oder Llama2 lokal und offline auf Ihrem Computer aus oder verbinden Sie sich mit entfernten KI-APIs. [#opensource](https://github.com/janhq/jan)
- [Msty](https://msty.ai/) - Eine einfache und leistungsstarke Schnittstelle für lokale und Online-KI-Modelle.
- [PyGPT](https://pygpt.net/) - Persönlicher desktop-ki-assistent mit chat, vision, agenten, bilderzeugung, tools und befehlen, sprachsteuerung und mehr. #opensource
- [LLM](https://llm.datasette.io/) - Ein CLI-Dienstprogramm und eine Python-Bibliothek für die Interaktion mit großen Sprachmodellen, remote und lokal. [#opensource](https://github.com/simonw/llm)
- [LM Studio](https://lmstudio.ai) - Laden Sie lokale LLMs herunter und führen Sie sie auf Ihrem Computer aus.
- [RunThisLLM](https://runthisllm.com) - Sehen Sie, welche LLMs Sie auf Ihrer Hardware ausführen können.
- [Harbor](https://github.com/av/harbor) - Ein containerisiertes Toolkit zum Ausführen lokaler LLM-Backends, Benutzeroberflächen und unterstützender Dienste mit einem Befehl. #opensource
- [off-grid-mobile](https://github.com/alichherawalla/off-grid-mobile-ai) - React Native App für LLMs, Vision-Modelle und Stable Diffusion On-Device auf iOS und Android ohne Internetzugang. #opensource
- [Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) - OpenAI-kompatibler lokaler LLM-Inferenzserver, optimiert für Apple Silicon, mit Tool Calling, Reasoning, Vision und strukturierter Ausgabeunterstützung. #opensource

## Agenten

### Autonome Agenten

- [Auto-GPT](https://github.com/Significant-Gravitas/AutoGPT) - Ein experimenteller Open-Source-Versuch, GPT-4 vollständig autonom zu machen.
- [babyagi](https://github.com/yoheinakajima/babyagi) - Ein KI-gestütztes Aufgabenmanagementsystem.
- [AgentGPT](https://github.com/reworkd/AgentGPT) - Zusammenstellen, Konfigurieren und Bereitstellen autonomer KI-Agenten in Ihrem Browser.
- [GPT Engineer](https://github.com/AntonOsika/gpt-engineer) - Geben Sie an, was es bauen soll, die KI bittet um Klärung und baut es dann.
- [GPT Prompt Engineer](https://github.com/mshumer/gpt-prompt-engineer) - Automatisiertes prompt Engineering. Es generiert, testet und rangiert Aufforderungen, um die besten zu finden.
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT) - Das Multi-Agent-Framework: Bei einer Zeilenanforderung, PRD, Design, Aufgaben, Repo.
- [AutoGen](https://github.com/microsoft/autogen) - AutoGen ist ein Framework, das die Entwicklung von LLM-Anwendungen mit mehreren Agenten ermöglicht, die miteinander kommunizieren können, um Aufgaben zu lösen.
- [GPT Pilot](https://github.com/Pythagora-io/gpt-pilot) - Dev-Tool, das skalierbare Apps von Grund auf neu schreibt, während der Entwickler die Implementierung überwacht.
- [Devin](https://devin.ai/) - Ein autonomer KI-Software-Ingenieur von Cognition Labs.
- [OpenHands](https://github.com/OpenHands/OpenHands) - Ein autonomer Agent, der entwickelt wurde, um die Komplexität der Softwareentwicklung zu steuern. #opensource
- [Davika](https://github.com/stitionai/devika) - Ein Agentic AI Software Engineer. #opensource
- [n8n](https://n8n.io/) - Eine Workflow-Automatisierungsplattform, die KI-Fähigkeiten mit der Automatisierung von Geschäftsprozessen kombiniert.
- [Sauna](https://www.sauna.ai) - Ein KI-Assistent, der für das Compoundieren von Kontexten entwickelt wurde. Es lernt Ihren Geschmack, erkennt versteckte Muster, erweitert Ihren Gehirnkontext und arbeitet proaktiv.
- [Claude Code](https://code.claude.com) - Anthropics agentisches Codierungswerkzeug, das in Ihrem Terminal lebt und Ihnen hilft, Ideen in Code umzuwandeln.
- [Gemini CLI](https://geminicli.com) - Ein Open-Source-KI-Agent, der die Leistung von Gemini direkt in Ihr Terminal bringt. [#opensource](https://github.com/google-gemini/gemini-cli)
- [OpenCode](https://opencode.ai) - Der Open-Source AI Coding Agent. [#opensource](https://github.com/anomalyco/opencode)
- [Mastra](https://mastra.ai) - Ein TypeScript-Framework zum Erstellen von KI-Agenten, Workflows und Anwendungen. [#opensource](https://github.com/mastra-ai/mastra)
- [OpenClaw](https://openclaw.ai) - Ein persönlicher KI-Assistent, den Sie auf Ihren eigenen Geräten ausführen. [#opensource](https://github.com/openclaw/openclaw)
- [moltbook](https://www.moltbook.com) - Ein soziales Netzwerk für KI-Agenten.
- [AgentMail](https://www.agentmail.to) - E-Mail-Posteingänge für KI-Agenten.
- [Openwork](https://openwork.bot) - KI-Agenten stellen sich gegenseitig ein, erledigen die Arbeit, überprüfen die Ergebnisse und verdienen Token.
- [Agent Skills](https://agentskills.io) - Offenes Format und Referenz-SDK für wiederverwendbare Verpackungsfunktionen und Fachwissen für KI-Agenten. [#opensource](https://github.com/agentskills/agentskills)
- [PraisonAI](https://github.com/MervinPraison/PraisonAI) - Ein Framework zum Erstellen von KI-Systemen mit mehreren Agenten mit Workflows, Tool-Integrationen und Speicher. #opensource
- [Hermes Agent](https://hermes-agent.nousresearch.com) - Ein sich selbst verbessernder persönlicher agent mit speicher, messaging-integrationen und sandboxed-tool-ausführung. [#opensource](https://github.com/NousResearch/hermes-agent)
- [OpenAgents](https://github.com/openagents-org/openagents) - Open-Source-Plattform zum Aufbau von KI-Agentennetzwerken mit Multiprotokoll-Unterstützung (WebSocket, gRPC, HTTP, MCP, A2A). #opensource
- [Dorothy](https://github.com/Charlie85270/Dorothy) - Eine Open-Source-Desktop-App zur Orchestrierung mehrerer KI-CLI-Agenten gleichzeitig mit Automatisierungen und Kanban-Management. #opensource
- [Hive](https://github.com/aden-hive/hive) - Ein Open-Source-Multiagenten-Framework mit automatisch generierten Graphen, Evolutionsschleifen und MCP-Integration. #opensource

### Kundenspezifische Assistenten

- [Poe](https://poe.com/) - Poe bietet Zugang zu einer Vielzahl von Bots.
- [GPT Builder](https://chatgpt.com/gpts/editor) - Assistent zum Erstellen von GPT-basierten Assistenten.

## Bild

### Modelle

- [DALL·E 2](https://openai.com/dall-e-2/) - DALL·E 2 von OpenAI ist ein neues KI-System, das realistische Bilder und Kunst aus einer Beschreibung in natürlicher Sprache erstellen kann.
- [Stable Diffusion](https://huggingface.co/CompVis/stable-diffusion-v1-4) - Stable Diffusion by Stability AI ist ein hochmodernes Text-zu-Bild-Modell, das Bilder aus Text generiert. #opensource
- [Midjourney](https://www.midjourney.com/) - Midjourney ist ein unabhängiges Forschungslabor, das neue Denkmedien erforscht und die fantasievollen Kräfte der menschlichen Spezies erweitert.
- [Imagen](https://imagen.research.google/) - Imagen by Google ist ein Text-zu-Bild-Verbreitungsmodell mit einem beispiellosen Grad an Photorealismus und einem tiefen Sprachverständnis.
- [Make-A-Scene](https://ai.meta.com/blog/greater-creative-control-for-ai-image-generation/) - Make-A-Scene von Meta ist eine multimodale generative KI-Methode, die kreative Kontrolle in die Hände von Menschen legt, die sie verwenden, indem sie es ihnen ermöglicht, ihre Vision sowohl durch Textbeschreibungen als auch durch Freiformskizzen zu beschreiben und zu illustrieren.
- [DragGAN](https://github.com/XingangPan/DragGAN) - Drag Your GAN: Interaktive punktbasierte Manipulation auf dem Generative Image Manifold.
- [Flux](https://github.com/black-forest-labs/flux) - Text-to-Image Modelle von Black Forest Labs mit hochwertiger fotorealistischer Ausgabe. #opensource

### Dienstleistungen

- [Craiyon](https://www.craiyon.com/) - Craiyon, früher DALL-E mini, ist ein KI-Modell, das Bilder aus jeder Textaufforderung zeichnen kann.
- [DreamStudio](https://stability.ai/dreamstudio) - DreamStudio ist eine benutzerfreundliche Benutzeroberfläche zum Erstellen von Bildern mit dem Stable Diffusion-Bilderzeugungsmodell.
- [Artbreeder](https://www.artbreeder.com/) - Artbreeder ist eine neue Art von kreativem Werkzeug, das die Kreativität der Benutzer stärkt, indem es die Zusammenarbeit und Erkundung erleichtert.
- [Magic Eraser](https://magicstudio.com/magiceraser/) - Entfernen Sie unerwünschte Dinge aus Bildern in Sekunden.
- [Imagine by Magic Studio](https://magicstudio.com/imagine) - Ein Tool von Magic Studio, mit dem Sie sich ausdrücken können, indem Sie nur beschreiben, was Sie denken.
- [Alpaca](https://www.getalpaca.io/) - Stable Diffusion Photoshop Plugin.
- [Patience.ai](https://www.patience.ai/) - Patience.ai ist eine App zum Erstellen von Bildern mit Stable Diffusion, einer von Stability entwickelten innovativen KI. AI.
- [GenShare](https://www.genshare.io/) - Generieren Sie Kunst in Sekunden kostenlos. Besitze und teile was du erschaffst. Ein multimediales generatives Studio, das Design und Kreativität demokratisiert.
- [Playground](https://playground.com/) - Playground ist ein kostenloser Online-KI-Bildersteller. Verwenden Sie es, um Kunst, Social-Media-Posts, Präsentationen, Poster, Videos, Logos und mehr zu erstellen.
- [modyfi](https://www.modyfi.com/) - Eine browserbasierte Designplattform mit KI-gestützter Bilderzeugung, Animation und Echtzeit-Zusammenarbeit.
- [PhotoRoom](https://www.photoroom.com/) - Erstellen Sie Produkt- und Porträtbilder nur mit Ihrem Telefon. Hintergrund entfernen, Hintergrund ändern und Produkte präsentieren.
- [Photo AI](https://photoai.com/ai-avatars) - Erstellen Sie Ihre eigenen AI-generierten Avatare.
- [ClipDrop](https://clipdrop.co/) - Erstellen Sie professionelle Visuals ohne Fotostudio, powered by [stability.ai](https://stability.ai/).
- [Lensa](https://prisma-ai.com/lensa) - Eine All-in-One-Bildbearbeitungs-App, die die Generierung personalisierter Avatare mit Stable Diffusion umfasst.
- [RunDiffusion](https://rundiffusion.com/) - Cloud-basierter Workspace zur Erstellung von KI-generierter Kunst.
- [Ideogram](https://ideogram.ai/) - Eine Text-zu-Bild-Plattform, um kreativen Ausdruck zugänglicher zu machen.
- [Bing Image Creator](https://www.bing.com/images/create) - DALLE·3 basierter Text-zu-Bild-Generator mit Sicherheitsfunktionen.
- [KREA](https://www.krea.ai/) - Generieren Sie hochwertige Grafiken mit einer KI, die Ihre Stile, Konzepte oder Produkte kennt.
- [Nightcafe](https://creator.nightcafe.studio/) - NightCafe Creator ist eine AI Art Generator App mit mehreren Methoden der KI-Kunstgenerierung.
- [Leonardo AI](https://leonardo.ai/) - Erstellen Sie visuelle Assets in Produktionsqualität für Ihre Projekte mit beispielloser Qualität, Geschwindigkeit und Stil.
- [Recraft](https://www.recraft.ai/) - Ein KI-Tool, mit dem Entwickler auf einfache Weise Originalbilder, Vektorkunst, Illustrationen, Icons und 3D-Grafiken generieren und iterieren können.
- [Reve Image](https://reve.com/) - Ein Modell, das von Grund auf trainiert wurde, um sich durch schnelle Adhäsion, Ästhetik und Typografie zu überzeugen.
- [Magnific](https://www.magnific.com/) - KI-gestützte Design-Tools einschließlich Bilderzeugung, Hintergrundentfernung und kreative Vorlagen.
- [FigureLabs](https://www.figurelabs.ai/) - Ein KI-Tool zur Generierung publikationsfähiger wissenschaftlicher Zahlen im Vektorformat aus Textbeschreibungen oder Skizzen.

### Grafikdesign

- [Brandmark](https://brandmark.io/) - KI-basiertes Logo Design Tool.
- [Gamma](https://gamma.app/) - Erstellen Sie schöne Präsentationen und Webseiten ohne Formatierungs- und Designarbeit.
- [Microsoft Designer](https://designer.microsoft.com/) - Atemberaubende Designs in einem Blitz.
- [Napkin](https://www.napkin.ai/) - KI-Tool zum Generieren von Diagrammen, Diagrammen und Infografiken aus Text.

### Bildbibliotheken

- [Lexica](https://lexica.art/) - Stable Diffusion Suchmaschine.
- [OpenArt](https://openart.ai/) - Suchen Sie 10M+ von Eingabeaufforderungen und generieren Sie KI-Kunst über Stable Diffusion, DALL·E 2.
- [PromptHero](https://prompthero.com/) - Suchanweisungen für Modelle wie Stable Diffusion, ChatGPT, Midjourney usw.
- [PromptBase](https://promptbase.com/) - Suchanfragen von Top-Ingenieuren. Verkaufen Sie Ihre eigenen Aufforderungen.

### Modellbibliotheken

- [Civitai](https://civitai.com/) - Community-gesteuertes AI-Modell-Sharing-Tool.
- [Stable Diffusion Models](https://rentry.org/sdmodels) - Eine umfassende Liste von Stable Diffusion Checkpoints auf rentry.org.

### Stabile Diffusionsressourcen

- [Stable Horde](https://stablehorde.net/) - Ein Crowdsourcing-Cluster von Mitarbeitern von Stable Diffusion.
- [DiffusionDB](https://diffusiondb.com/) - Eine Liste aller öffentlichen Apps, Entwicklertools, Anleitungen und Plugins für Stable Diffusion. [Airtable version](https://airtable.com/shr0HlBwbw3nZ8Ht3/tblxOCylXV8ynh7ti).
- [PublicPrompts](https://publicprompts.art/) - Eine Sammlung von kostenlosen Aufforderungen für Stable Diffusion.
- [Hugging Face Diffusion Models Course](https://github.com/huggingface/diffusion-models-class) - Python-Materialien für den Online-Kurs über Diffusionsmodelle von [@huggingface](https://github.com/huggingface).
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI) - Eine knotenbasierte Schnittstelle zum Erstellen und Ausführen von Stable Diffusion Workflows. [#opensource](https://github.com/comfyanonymous/ComfyUI)

## Video

- [Runway](https://runwayml.com/) - Magische KI-Tools, Echtzeit-Zusammenarbeit, Präzisionsbearbeitung und mehr. Ihre nächste Generation Content Creation Suite.
- [Synthesia](https://www.synthesia.io/) - Erstellen Sie Videos aus Klartext in wenigen Minuten.
- [Colossyan](https://www.colossyan.com/) - Learning & Development konzentriert Video-Ersteller. Verwenden Sie KI-Avatare, um Lernvideos in mehreren Sprachen zu erstellen.
- [Fliki](https://fliki.ai/) - Erstellen sie text zu video und text zu sprachinhalt mit ai powered voices in minuten.
- [Pictory](https://pictory.ai/) - Die leistungsstarke KI von Pictory ermöglicht es Ihnen, Videos in professioneller Qualität mit Text zu erstellen und zu bearbeiten.
- [Pika](https://pika.art/) - Eine Ideen-zu-Video-Plattform, die Ihre Kreativität in Bewegung bringt.
- [HeyGen](https://app.heygen.com/) - Verwandeln Sie Skripte in sprechende Videos mit anpassbaren AI-Avataren in wenigen Minuten.
- [Luma Dream Machine](https://lumalabs.ai/app) - Ein ki-modell, das qualitativ hochwertige, realistische videos schnell aus text und bildern macht.
- [KLING AI](https://kling.ai/) - Werkzeuge zum Erstellen fantasievoller Bilder und Videos.
- [Hailuo AI](https://hailuoai.video/) - KI-gestützter Text-zu-Video-Generator.
- [Google Flow](https://labs.google/fx/tools/flow) - Ein KI-Filmemacher-Tool von Google, powered by Veo.
- [Seedance 2.0](https://seed.bytedance.com/en/seedance2_0) - Ein von Niobotics ByteDance entwickeltes Bild-zu-Video- und Text-zu-Video-Modell.
- [MaxVideoAI](https://maxvideoai.com/examples) - Ein Arbeitsbereich zum Erzeugen und Vergleichen von Videos über mehrere KI-Videomodelle hinweg.
- [HyperFrames](https://hyperframes.heygen.com/) - Ein Framework für KI-Agenten zum Rendern von Videos durch Schreiben von HTML, CSS und JavaScript. [#opensource](https://github.com/heygen-com/hyperframes)

### Avatare

- [D-ID](https://www.d-id.com/) - Erstellen und interagieren sie mit sprechenden avataren auf knopfdruck.
- [HeyGen](https://app.heygen.com/) - Verwandeln Sie Skripte in sprechende Videos mit anpassbaren AI-Avataren in wenigen Minuten.
- [Affogato](https://affogato.ai/) - Erstellen Sie AI-generierte Produktvideoanzeigen für TikTok, Reels und Shorts.

### Animation

- [Autodesk Flow Studio](https://www.autodesk.com/products/flow-studio) - KI-gestütztes Tool zum Animieren und Komponieren von CG-Charakteren in Live-Action-Aufnahmen.

## Audio

### Text-to-Sprache

- [Eleven Labs](https://elevenlabs.io/) - AI Voice Generator.
- [Resemble AI](https://www.resemble.ai/) - AI Voice Generator und Stimme Klonen für Text zu Sprache.
- [WellSaid](https://www.wellsaid.io/) - Konvertieren Sie Text in Stimme in Echtzeit.
- [TorToiSe](https://github.com/neonbjb/tortoise-tts) - Ein Multi-Voice-Text-to-Speech-System mit Schwerpunkt auf Qualität. #opensource
- [Bark](https://github.com/suno-ai/bark) - Ein transformatorbasiertes Text-zu-Audio-Modell. #opensource
- [TTS WebUI](https://github.com/rsxdalv/TTS-WebUI) - Web-Benutzeroberfläche zum Ausführen mehrerer Text-to-Speech-, Musikerzeugungs- und Audio-Tools. #opensource

### Speech-to-Text

- [Whisper](https://openai.com/index/whisper/) - Robuste Spracherkennung durch groß angelegte schwache Aufsicht. [#opensource](https://github.com/openai/whisper)
- [Wispr Flow](https://wisprflow.ai/) - Flow macht das Schreiben schnell mit nahtlosem Sprachdiktat für jede Anwendung auf Ihrem Computer.
- [Vibe Transcribe](https://thewh1teagle.github.io/vibe/) - All-in-One-Lösung für die mühelose Audio- und Videotranskription. [#opensource](https://github.com/thewh1teagle/vibe)
- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) - Port of OpenAIs Whisper-Modell in C/C++. #opensource
- [whisper-ctranslate2](https://github.com/Softcatala/whisper-ctranslate2) - Ein Whisper-CLI-Client, der mit dem ursprünglichen OpenAI-Client kompatibel ist und CTranslate2 zur schnelleren Inferenz verwendet. [#opensource](https://github.com/Softcatala/whisper-ctranslate2)
- [NeMo](https://github.com/NVIDIA-NeMo/Speech) - Ein Open-Source-Framework von NVIDIA zum Aufbau von Sprach-KI-Systemen, einschließlich automatischer Spracherkennung und Text-to-Speech. #opensource
- [Parakeet](https://huggingface.co/collections/nvidia/parakeet-asr-659711f49d1469e51546e021) - Eine Familie offener Spracherkennungsmodelle von NVIDIA, einschließlich Streaming und mehrsprachiger Varianten. #opensource

### Musik

- [Harmonai](https://www.harmonai.org/) - Wir sind eine Community-gesteuerte Organisation, die Open-Source-generative Audio-Tools veröffentlicht, um die Musikproduktion für alle zugänglicher und unterhaltsamer zu machen.
- [Mubert](https://mubert.com/) - Ein lizenzfreies Musik-Ökosystem für Content-Ersteller, Marken und Entwickler.
- [MusicLM](https://google-research.github.io/seanet/musiclm/examples/) - Ein Modell von Google Research zur Generierung von High-Fidelity-Musik aus Textbeschreibungen.
- [AudioCraft](https://audiocraft.metademolab.com/) - Eine Single-Stop-Code-Basis für generative Audio-Anforderungen von Meta. Beinhaltet MusicGen für Musik und AudioGen für Sounds. #opensource
- [Stable Audio](https://stability.ai/stable-audio) - Stabiles Audio ist Stabilität AIs erstes Produkt für die Musik- und Soundeffekterzeugung.
- [AIVA](https://www.aiva.ai/) - KI-basierter Musikgenerierungsassistent. Wählen Sie aus 250+ Stilen.
- [Suno AI](https://suno.com/) - Jeder kann großartige Musik machen. Kein Instrument nötig, nur Fantasie. Von deinem Verstand zur Musik.
- [Udio](https://www.udio.com/) - Entdecken, erstellen und teilen Sie Musik mit der Welt.

## andere

- [PromptBase](https://promptbase.com/) - Ein Marktplatz für den Kauf und Verkauf von Qualitätsaufforderungen für DALL · E, GPT-3, Midjourney, Stable Diffusion.
- [This Image Does Not Exist](https://thisimagedoesnotexist.com/) - Testen Sie Ihre Fähigkeit, festzustellen, ob ein Bild von Menschen oder Computern erzeugt wird.
- [Have I Been Trained?](https://haveibeentrained.com/) - Überprüfen Sie, ob Ihr Bild verwendet wurde, um beliebte KI-Kunstmodelle zu trainieren.
- [AI Dungeon](https://aidungeon.io/) - Ein textbasiertes Adventure-Story-Spiel, in dem Sie Regie führen (und mitspielen), während die KI es zum Leben erweckt.
- [Clickable](https://www.clickable.so/) - Generieren Sie Anzeigen in Sekundenschnelle mit AI. Schöne, markenkonsistente und hochgradig konvertierende Anzeigen für alle Marketingkanäle.
- [Scale Spellbook](https://scale.com/genai-platform) - Erstellen, vergleichen und Bereitstellen großer Sprachmodell-Apps mit Scale Spellbook.
- [Scenario](https://www.scenario.com/) - AI-generierte Gaming-Assets.
- [Teleprompter](https://github.com/danielgross/teleprompter) - Eine On-Device-KI für Ihre Meetings, die Ihnen zuhört und charismatische Zitatvorschläge macht.
- [FinChat](https://finchat.io/) - Mit ki generiert finchat antworten auf fragen zu öffentlichen unternehmen und investoren.
- [Morpher AI](https://morpher.com/ai) - Morpher AI liefert Echtzeit-Einblicke und Analysen für jeden Markt.
- [Whimsical AI](https://whimsical.com/ai) - GPT-basiertes Mind Mapping, Flussdiagramme und visuelle Tools für schnelle Ideenentwicklung und Prozessorganisation.
- [Selfies with Sama](https://selfies-with-sama.vost.ai) - Schnappen Sie sich ein Bild mit einem echten Milliardär!

## Lernressourcen

- [Learn Prompting](https://learnprompting.org/) - Ein kostenloser Open-Source-Kurs zur Kommunikation mit künstlicher Intelligenz.
- [Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) - Leitfaden und Ressourcen für promptes Engineering.
- [ChatGPT prompt engineering for developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) - Ein Kurzkurs von Isa Fulford (OpenAI) und Andrew Ng (DeepLearning.AI).
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) - Beispiele und Anleitungen zur Verwendung der OpenAI API.
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) - Strategien und Taktiken, um bessere Ergebnisse aus großen Sprachmodellen zu erzielen.
- [PromptPerfect](https://promptperfect.jina.ai/) - Tool für prompt Engineering.
- [Anthropic courses](https://github.com/anthropics/courses) - Anthropische Bildungskurse.
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - Ein Leitfaden zum Aufbau eines eigenen LLM von Sebastian Raschka.
- [Prompt Engineering for Vision Models](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - Ein kostenloses DeepLearning. KI-Kurzkurs darüber, wie Computer Vision-Modelle mit natürlicher Sprache, Begrenzungsboxen, Segmentierungsmasken, Koordinatenpunkten und anderen Bildern ausgelöst werden können.
- [Build a Reasoning Model (From Scratch)](https://www.manning.com/books/build-a-reasoning-model-from-scratch) - Ein Leitfaden zum Aufbau eines funktionierenden Argumentationsmodells von Grund auf von Sebastian Raschka.
- [Build an AI Agent (From Scratch)](https://www.manning.com/books/build-an-ai-agent-from-scratch) - Ein Buch über den Aufbau von KI-Agenten mit Tools, Speicher, Planung und Multiagentensystemen.
- [Build a DeepSeek Model (From Scratch)](https://www.manning.com/books/build-a-deepseek-model-from-scratch) - Ein Buch über die Implementierung von LLM-Architektur, Training und Destillationsmethoden im DeepSeek-Stil.
- [AI Governance](https://www.manning.com/books/ai-governance) - Ein Buch über Governance, Risiko, Compliance, Sicherheit, Datenschutz und Aufsicht für generative KI-Systeme.
- [AnimatedLLM](https://animatedllm.github.io/) - Interaktive Visualisierungen, die erklären, wie große Sprachmodelle funktionieren. [#opensource](https://github.com/kasnerz/animated-llm)
- [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) - Interaktive Visualisierung, wie transformatorbasierte LLMs funktionieren, mit einem Live-GPT-2-Modell im Browser. [#opensource](https://github.com/poloclub/transformer-explainer)

## Mehr Listen

- [Tools and Resources for AI Art](https://pharmapsychotic.com/tools.html) - Eine große Liste von Google Colab Notebooks für generative AI, von [@pharmapsychotic](https://twitter.com/pharmapsychotic).
- [The Generative AI Application Landscape](https://twitter.com/sonyatweetybird/status/1584580362339962880) - Eine Infografik, die das generative KI-Ökosystem abbildet, von [Sonya Huang](https://twitter.com/sonyatweetybird) von Sequoia Capital.
- [Startups - @builtwithgenai](https://airtable.com/shr6nfE9FOHp17IjG/tblL3ekHZfkm3p6YT) - Eine Airtable-Liste von [@builtwithgenai](https://twitter.com/builtwithgenai).
- [The Generative AI Index](https://airtable.com/shrH4REIgddv8SzUo/tbl5dsXdD1P859QLO) - Eine Airtable-Liste von [Scale Venture Partners](https://www.scalevp.com/generative-ai).
- [Generative AI for Games](https://twitter.com/gwertz/status/1593268767269670912) - Eine Marktkarte von Unternehmen, die an Generative AI für Spiele arbeiten, von [a16z](https://a16z.com/).
- [Generative Deep Art](https://github.com/filipecalegario/awesome-generative-ai) - Eine kuratierte Liste generativer Deep Learning-Tools, Werke, Modelle usw. für künstlerische Zwecke, von [@filipecalegario](https://github.com/filipecalegario/).
- [GPT-3 Demo](https://gpt3demo.com/) - Showcase mit GPT-3-Beispielen, Demos, Apps, Showcases und NLP-Anwendungsfällen.
- [GPT-4 Demo](https://gpt4demo.com/) - GPT-4 Apps und Anwendungsfälle.
- [The Generative AI Landscape](https://github.com/ai-collection/ai-collection) - Eine Sammlung von Awesome Generative AI-Anwendungen.
- [Molecular design](https://github.com/AspirinCode/papers-for-molecular-design-using-DL) - Liste des molekularen Designs mit Generativer KI und Deep Learning.
- [Open LLMs](https://github.com/eugeneyan/open-llms) - Eine Liste offener LLMs, die für kommerzielle Zwecke verfügbar sind.
- [Awesome Music AI](https://github.com/steven2358/awesome-music-ai) - Eine kuratierte Liste von KI-Tools für Musikkomposition, -erzeugung und -analyse.
- [Awesome AI Market Maps](https://github.com/joylarkin/Awesome-AI-Market-Maps) - Eine kuratierte Liste von KI-Marktkarten von 2026, 2025 und 2024 [Joy Larkin](https://twitter.com/joy).
- [Awesome RAG Production](https://github.com/Yigtwxx/Awesome-RAG-Production) - Eine kuratierte Liste von Werkzeugen und Ressourcen für den Bau von RAG-Systemen.

### Listen auf ChatGPT

- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - Eine kuratierte liste von tollen tools, demos, docs für chatgpt und gpt-3, von. [@jordn](https://github.com/jordn).
- [Awesome ChatGPT Prompts](https://github.com/f/prompts.chat) - Eine Sammlung von Beispielen, die mit dem ChatGPT-Modell verwendet werden können.
- [FlowGPT](https://flowgpt.com/) - Verstärken Sie Ihren Workflow mit den besten Aufforderungen.
- [ChatGPT Prompts for Data Science](https://github.com/travistangvh/ChatGPT-Data-Science-Prompts) - Ein Repository nützlicher Datenwissenschaft fordert ChatGPT auf.
- [Awesome ChatGPT](https://github.com/sindresorhus/awesome-chatgpt) - Eine weitere tolle liste für chatgpt.
